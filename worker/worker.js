/* ============================================================================
   SHATTERPROMPTS — lead capture Worker
   ----------------------------------------------------------------------------
   Receives the email form POST from the site, stores the lead in KV, and adds
   the subscriber to MailerLite so the pack-delivery automation can fire.

   Deploy:  cd worker && npx wrangler deploy
   Then set integrations.leadEndpoint in content/site.config.mjs to the
   deployed URL + /subscribe, rebuild, and redeploy the site.

   Conventions follow the CALLOUT worker: origin allowlist, KV-backed daily
   rate limits, MailerLite new-API-first with a classic-API fallback, and
   status:"active" so double opt-in does not swallow the delivery email.
   ============================================================================ */

/* Daily caps — generous for real users, tight enough to stop a script. */
const IP_DAILY_CAP = 20;
const EMAIL_DAILY_CAP = 3;
const MAX_BODY_BYTES = 8 * 1024;

export default {
  async fetch(req, env) {
    const cors = corsHeaders(req, env);

    if (req.method === "OPTIONS") return new Response(null, { status: 204, headers: cors.headers });
    if (!cors.allowed) return json({ ok: false, error: "origin_not_allowed" }, 403, cors.headers);

    const url = new URL(req.url);

    /* Access-token lookup — lets a signup opened on one device/browser be
       verified from any other, instead of trusting only that browser's
       localStorage. See accessLookup() below. */
    if (req.method === "GET" && url.pathname === "/access") {
      return accessLookup(url, env, cors.headers);
    }

    if (req.method !== "POST") return json({ ok: false, error: "method_not_allowed" }, 405, cors.headers);

    let body;
    try {
      body = await readJson(req);
    } catch (err) {
      return json({ ok: false, error: err.message === "body_too_large" ? "body_too_large" : "bad_json" }, 400, cors.headers);
    }

    return subscribe(req, body, env, cors.headers);
  }
};

/* -------------------------------------------------------------------------- */

async function subscribe(req, body, env, cors) {
  const email = normalizeEmail(body.email);
  if (!validEmail(email)) {
    return json({ ok: false, error: "bad_request", reason: "invalid_email" }, 400, cors);
  }

  const packSlug = String(body.pack_slug || "").slice(0, 40);
  if (!/^[a-z0-9-]{2,40}$/.test(packSlug)) {
    return json({ ok: false, error: "bad_request", reason: "invalid_pack" }, 400, cors);
  }

  /* Rate limiting — per IP and per email address, reset daily. */
  const ttl = secondsUntilTomorrow();
  const day = todayKey();
  const ipHit = await limitExceeded(env, `rl:${day}:ip:${hashish(clientIp(req))}`, IP_DAILY_CAP, ttl);
  const emailHit = await limitExceeded(env, `rl:${day}:em:${hashish(email)}`, EMAIL_DAILY_CAP, ttl);
  if (ipHit || emailHit) {
    return json({ ok: false, error: "rate_limited" }, 429, cors);
  }

  /* The lead record. Attribution comes straight from the form payload so a
     signup can be traced back to the exact Reel and DM that produced it. */
  const lead = {
    email,
    pack_slug: packSlug,
    pack_name: str(body.pack_name, 80),
    marketing_consent: body.marketing_consent === true,
    consent_text: str(body.consent_text, 200),
    source: str(body.source, 60),
    campaign: str(body.campaign, 60),
    utm_source: str(body.utm_source, 60),
    utm_medium: str(body.utm_medium, 60),
    utm_campaign: str(body.utm_campaign, 60),
    utm_content: str(body.utm_content, 60),
    utm_term: str(body.utm_term, 60),
    referrer: str(body.referrer, 200),
    page_url: str(body.page_url, 300),
    first_touch_ts: str(body.first_touch_ts, 40),
    first_landing_page: str(body.first_landing_page, 120),
    submitted_at: new Date().toISOString(),
    country: req.headers.get("cf-ipcountry") || ""
  };

  /* Access token — returned to the client and put in the /access URL, so
     opening that link on a different browser or device still works instead
     of hitting the signup gate again. Expires in 180 days, same as a long
     "remember me". */
  const token = randomToken();

  /* Store the lead. One key per email+pack so re-requests do not create
     duplicates, plus a dated index key for easy export. */
  try {
    await env.LEADS.put(`lead:${email}:${packSlug}`, JSON.stringify(lead));
    await env.LEADS.put(`idx:${day}:${Date.now()}:${hashish(email)}`, JSON.stringify(lead));
    await env.LEADS.put(`access:${token}`, JSON.stringify({ email, pack_slug: packSlug }), {
      expirationTtl: 60 * 60 * 24 * 180
    });
  } catch (err) {
    /* If the lead cannot be stored, say so rather than pretending it worked. */
    return json({ ok: false, error: "storage_failed" }, 500, cors);
  }

  /* Hand the subscriber to MailerLite. Delivery of the pack itself is done by
     a MailerLite automation on the pack's group. */
  let addedToMailerLite = false;
  try {
    addedToMailerLite = await pushToMailerLite(env, lead);
  } catch (err) {
    addedToMailerLite = false;
  }

  /* --------------------------------------------------------------------------
     THE HONESTY GATE
     `emailed: true` is what makes the site tell the visitor "we have also sent
     a copy to your inbox". The Worker cannot observe whether your MailerLite
     automation actually fired, so this stays false until you set
     DELIVERY_CONFIRMED="1" — and you should only set it once you have sent
     yourself a test signup and the pack email genuinely arrived.
     -------------------------------------------------------------------------- */
  const deliveryConfigured = env.DELIVERY_CONFIRMED === "1";
  const emailed = addedToMailerLite && deliveryConfigured;

  return json({ ok: true, emailed, token }, 200, cors);
}

/* ------------------------------------------------------------ access lookup
   GET /access?t=<token> — verifies a token minted by subscribe() above and
   hands back the email + pack it belongs to. Lets the access page grant entry
   on a browser that never submitted the form itself. */
async function accessLookup(url, env, cors) {
  const token = String(url.searchParams.get("t") || "");
  if (!/^[a-f0-9]{40}$/.test(token)) {
    return json({ ok: false, error: "bad_request" }, 400, cors);
  }

  let record;
  try {
    const raw = await env.LEADS.get(`access:${token}`);
    record = raw ? JSON.parse(raw) : null;
  } catch (err) {
    return json({ ok: false, error: "lookup_failed" }, 500, cors);
  }

  if (!record) return json({ ok: false, error: "not_found" }, 404, cors);
  return json({ ok: true, email: record.email, pack_slug: record.pack_slug }, 200, cors);
}

/* ---------------------------------------------------------------- MailerLite */
async function pushToMailerLite(env, lead) {
  if (!env.MAILERLITE_API_KEY) return false;

  const groups = [];

  /* Per-pack delivery group — this is what the pack automation listens to. */
  const map = parseJson(env.MAILERLITE_GROUPS) || {};
  if (map[lead.pack_slug]) groups.push(String(map[lead.pack_slug]));
  else if (env.MAILERLITE_GROUP_ID) groups.push(String(env.MAILERLITE_GROUP_ID));

  /* Marketing group only with explicit consent — separate from pack delivery. */
  if (lead.marketing_consent && env.MAILERLITE_MARKETING_GROUP_ID) {
    groups.push(String(env.MAILERLITE_MARKETING_GROUP_ID));
  }

  /* Custom fields let one automation branch by pack/source instead of you
     building ten of them. Create these fields in MailerLite first — unknown
     field names are silently dropped by their API, not rejected. */
  const fields = {
    pack: lead.pack_slug,
    source: lead.source,
    campaign: lead.campaign
  };

  /* New API (Bearer). status:"active" matters — with double opt-in enabled a
     pending subscriber never triggers the automation, so the pack never sends. */
  try {
    const payload = { email: lead.email, status: "active", fields };
    if (groups.length) payload.groups = groups;

    const r = await fetch("https://connect.mailerlite.com/api/subscribers", {
      method: "POST",
      headers: {
        Authorization: "Bearer " + env.MAILERLITE_API_KEY,
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify(payload)
    });
    if (r.ok) return true;
    if (r.status !== 401 && r.status !== 403) return false; // real error, not auth — do not retry
  } catch (err) {}

  /* Classic API fallback for older keys. */
  try {
    const groupId = groups[0];
    const url = groupId
      ? `https://api.mailerlite.com/api/v2/groups/${groupId}/subscribers`
      : "https://api.mailerlite.com/api/v2/subscribers";

    const r = await fetch(url, {
      method: "POST",
      headers: { "X-MailerLite-ApiKey": env.MAILERLITE_API_KEY, "Content-Type": "application/json" },
      body: JSON.stringify({ email: lead.email, fields, resubscribe: true })
    });
    return r.ok;
  } catch (err) {
    return false;
  }
}

/* -------------------------------------------------------------------- helpers */
function corsHeaders(req, env) {
  const origin = req.headers.get("origin") || "";
  const configured = String(env.APP_ORIGINS || "")
    .split(",").map((s) => s.trim()).filter(Boolean);

  const localDev = env.ALLOW_LOCAL_DEV === "1";
  const isLocal = origin === "null" || /^https?:\/\/(localhost|127\.0\.0\.1)(:\d+)?$/.test(origin);
  const allowed = configured.includes(origin) || (localDev && isLocal);

  const headers = {
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Max-Age": "86400",
    Vary: "Origin",
    "X-Content-Type-Options": "nosniff",
    "Cache-Control": "no-store"
  };
  if (allowed && origin) headers["Access-Control-Allow-Origin"] = origin;

  return { allowed, headers };
}

async function readJson(req) {
  const len = Number(req.headers.get("content-length") || 0);
  if (len > MAX_BODY_BYTES) throw new Error("body_too_large");
  const text = await req.text();
  if (text.length > MAX_BODY_BYTES) throw new Error("body_too_large");
  return JSON.parse(text);
}

function json(obj, status, cors) {
  return new Response(JSON.stringify(obj), {
    status,
    headers: { ...cors, "Content-Type": "application/json" }
  });
}

const str = (v, max) => String(v == null ? "" : v).slice(0, max);
const normalizeEmail = (v) => String(v || "").trim().toLowerCase();
const validEmail = (v) => /^[^\s@]+@[^\s@]+\.[a-z]{2,}$/i.test(v) && v.length <= 254;
const clientIp = (req) => req.headers.get("cf-connecting-ip") || "unknown";
const parseJson = (v) => { try { return JSON.parse(v); } catch { return null; } };

/* Opaque 40-char hex token — unguessable, not tied to the email itself. */
function randomToken() {
  const bytes = crypto.getRandomValues(new Uint8Array(20));
  return Array.from(bytes, (b) => b.toString(16).padStart(2, "0")).join("");
}

/* Short non-cryptographic digest — only used to bucket rate limits without
   writing raw emails or IPs into KV keys. */
function hashish(input) {
  let h = 2166136261;
  const s = String(input);
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return (h >>> 0).toString(36);
}

function todayKey() {
  return new Date().toISOString().slice(0, 10);
}

function secondsUntilTomorrow() {
  const now = new Date();
  const midnight = Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate() + 1);
  return Math.max(60, Math.ceil((midnight - now.getTime()) / 1000));
}

async function limitExceeded(env, key, cap, ttl) {
  try {
    const current = Number((await env.LEADS.get(key)) || 0);
    if (current >= cap) return true;
    await env.LEADS.put(key, String(current + 1), { expirationTtl: ttl });
    return false;
  } catch {
    return false; // never let a KV hiccup block a real signup
  }
}
