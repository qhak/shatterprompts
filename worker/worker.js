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
    const url = new URL(req.url);

    /* Stripe calls this directly, server-to-server — there is no browser
       Origin header, so it has to bypass the CORS allowlist below entirely.
       Authenticity comes from the signature check inside stripeWebhook()
       instead of from origin matching. */
    if (req.method === "POST" && url.pathname === "/stripe-webhook") {
      return stripeWebhook(req, env);
    }

    /* Run locally, never from a browser — checks its own shared-secret header
       instead of the origin allowlist below. */
    if (req.method === "POST" && url.pathname === "/admin/premium-content") {
      return adminIngestPremiumContent(req, env);
    }

    const cors = corsHeaders(req, env);

    if (req.method === "OPTIONS") return new Response(null, { status: 204, headers: cors.headers });
    if (!cors.allowed) return json({ ok: false, error: "origin_not_allowed" }, 403, cors.headers);

    /* Access-token lookup — lets a signup opened on one device/browser be
       verified from any other, instead of trusting only that browser's
       localStorage. See accessLookup() below. */
    if (req.method === "GET" && url.pathname === "/access") {
      return accessLookup(url, env, cors.headers);
    }

    /* Purchase lookup — same idea, for a Stripe checkout session. */
    if (req.method === "GET" && url.pathname === "/purchase") {
      return purchaseLookup(url, env, cors.headers);
    }

    /* The only place premium prompt text is ever served. */
    if (req.method === "GET" && url.pathname === "/premium-content") {
      return premiumContent(url, env, cors.headers);
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
    const groups = [];
    const map = parseJson(env.MAILERLITE_GROUPS) || {};
    if (map[lead.pack_slug]) groups.push(String(map[lead.pack_slug]));
    else if (env.MAILERLITE_GROUP_ID) groups.push(String(env.MAILERLITE_GROUP_ID));
    /* Marketing group — every signup goes in; the form's disclosure line is
       the consent, there is no separate opt-in checkbox. */
    if (lead.marketing_consent && env.MAILERLITE_MARKETING_GROUP_ID) {
      groups.push(String(env.MAILERLITE_MARKETING_GROUP_ID));
    }
    addedToMailerLite = await pushToMailerLite(env, {
      email: lead.email,
      groups,
      fields: { pack: lead.pack_slug, source: lead.source, campaign: lead.campaign }
    });
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

/* ------------------------------------------------------------------ Stripe
   Payment Links redirect the buyer straight back with ?session_id=... in the
   URL — the premium page trades that for an entitlement via /purchase below.
   The entitlement itself is only ever written from the webhook, once Stripe
   has actually confirmed the payment; the client-supplied session_id can
   only ever look one up, never create one. */

async function stripeWebhook(req, env) {
  if (!env.STRIPE_WEBHOOK_SECRET) return new Response("webhook not configured", { status: 500 });

  const sig = req.headers.get("stripe-signature") || "";
  const raw = await req.text();

  const valid = await verifyStripeSignature(raw, sig, env.STRIPE_WEBHOOK_SECRET);
  if (!valid) return new Response("invalid signature", { status: 400 });

  let event;
  try { event = JSON.parse(raw); } catch { return new Response("bad json", { status: 400 }); }

  if (event.type === "checkout.session.completed") {
    await grantPurchase(event.data.object, env);
  }

  /* Stripe only cares that this returns 2xx — it retries on anything else. */
  return new Response("ok", { status: 200 });
}

/* Verifies Stripe's webhook signing scheme: HMAC-SHA256 of "<timestamp>.<raw
   body>" using the endpoint's signing secret, compared to the v1 signature
   in the Stripe-Signature header. Must run on the exact raw request body —
   re-serializing parsed JSON would produce a different byte sequence and
   never match. */
async function verifyStripeSignature(payload, sigHeader, secret) {
  const parts = {};
  sigHeader.split(",").forEach((kv) => {
    const i = kv.indexOf("=");
    if (i > -1) parts[kv.slice(0, i)] = kv.slice(i + 1);
  });
  const timestamp = parts.t;
  const expected = parts.v1;
  if (!timestamp || !expected) return false;

  /* Reject anything more than 5 minutes old — stops a captured payload being
     replayed later. */
  const age = Math.abs(Date.now() / 1000 - Number(timestamp));
  if (!Number.isFinite(age) || age > 300) return false;

  const key = await crypto.subtle.importKey(
    "raw",
    new TextEncoder().encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"]
  );
  const sigBuffer = await crypto.subtle.sign("HMAC", key, new TextEncoder().encode(`${timestamp}.${payload}`));
  const computed = Array.from(new Uint8Array(sigBuffer), (b) => b.toString(16).padStart(2, "0")).join("");

  return timingSafeEqual(computed, expected);
}

function timingSafeEqual(a, b) {
  if (a.length !== b.length) return false;
  let diff = 0;
  for (let i = 0; i < a.length; i++) diff |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return diff === 0;
}

/* A Payment Link's checkout.session.completed event does not carry the price
   that was bought, so this fetches the session's line items with the secret
   key to find out — then maps that price to a pack (or the all-access
   bundle, which grants every pack) via STRIPE_PRICE_MAP / STRIPE_BUNDLE_PRICE_ID. */
async function grantPurchase(session, env) {
  const email = normalizeEmail(session.customer_details?.email || session.customer_email || "");
  if (!email || !env.STRIPE_SECRET_KEY) return;

  let priceId = "";
  try {
    const r = await fetch(`https://api.stripe.com/v1/checkout/sessions/${session.id}/line_items`, {
      headers: { Authorization: "Bearer " + env.STRIPE_SECRET_KEY }
    });
    if (r.ok) {
      const data = await r.json();
      priceId = data?.data?.[0]?.price?.id || "";
    }
  } catch (err) {}
  if (!priceId) return;

  const isBundle = priceId === env.STRIPE_BUNDLE_PRICE_ID;
  const priceMap = parseJson(env.STRIPE_PRICE_MAP) || {};
  /* "*" means every pack — checked for specifically wherever an entitlement
     is read back. */
  const packSlug = isBundle ? "*" : (priceMap[priceId] || "");
  if (!packSlug) return; // an unmapped price — nothing to grant

  const record = { email, pack_slug: packSlug, session_id: session.id, ts: new Date().toISOString() };

  /* Content token — this, not the local "purchased" flag in localStorage, is
     what actually unlocks premium-content. A visitor can fake the localStorage
     flag; they cannot fake a token that was only ever minted here, after
     Stripe's webhook confirmed real money moved. */
  const token = randomToken();

  try {
    await env.LEADS.put(`purchase:${session.id}`, JSON.stringify({ ...record, token }), { expirationTtl: 60 * 60 * 24 * 400 });
    /* Durable, email-keyed copy too — not read yet, but it's what a future
       "resend my access link" endpoint would look up instead of relying on
       the buyer still having their original session_id. */
    await env.LEADS.put(`entitlement:${email}:${packSlug}`, JSON.stringify(record), { expirationTtl: 60 * 60 * 24 * 400 });
    await env.LEADS.put(`purchase-access:${token}`, JSON.stringify({ email, pack_slug: packSlug }), { expirationTtl: 60 * 60 * 24 * 400 });
  } catch (err) {
    return; // could not persist the grant — do not send an email pointing at a token that was never saved
  }

  /* Confirmation email with a permanent access link — the token above lives
     400 days and works from any device, unlike the one-time session_id in
     Stripe's redirect. Landing page is always a real pack slug (never "*")
     since a route has to exist; premium-content still honours "*" tokens on
     any pack, and app.js caches that correctly once used once. */
  try {
    await pushToMailerLite(env, {
      email,
      groups: env.MAILERLITE_PURCHASE_GROUP_ID ? [String(env.MAILERLITE_PURCHASE_GROUP_ID)] : [],
      fields: {
        pack_name: packDisplayName(packSlug),
        access_link: `https://shatterprompts.com/${isBundle ? "freelancing" : packSlug}/premium?t=${token}`
      }
    });
  } catch (err) {}
}

/* "local-business" -> "Local Business". Bundle gets its own copy since there
   is no single pack name to show. */
function packDisplayName(slug) {
  if (slug === "*") return "the full bundle — all 6 packs";
  return slug.split("-").map((w) => w[0].toUpperCase() + w.slice(1)).join(" ");
}

/* GET /purchase?session_id=... — looks up an entitlement written by the
   webhook above. Returns 202 (not 404) when nothing is found yet, since the
   webhook can land a second or two after Stripe redirects the buyer back —
   the client is expected to retry briefly rather than treat that as failure. */
async function purchaseLookup(url, env, cors) {
  const sessionId = String(url.searchParams.get("session_id") || "").slice(0, 200);
  if (!/^cs_[A-Za-z0-9_]{10,255}$/.test(sessionId)) {
    return json({ ok: false, error: "bad_request" }, 400, cors);
  }

  let record;
  try {
    const raw = await env.LEADS.get(`purchase:${sessionId}`);
    record = raw ? JSON.parse(raw) : null;
  } catch (err) {
    return json({ ok: false, error: "lookup_failed" }, 500, cors);
  }

  if (!record) return json({ ok: false, error: "pending" }, 202, cors);
  return json({ ok: true, email: record.email, pack_slug: record.pack_slug, token: record.token || "" }, 200, cors);
}

/* ------------------------------------------------------- premium content
   GET /premium-content?slug=<slug>&t=<token> — the only place premium prompt
   text is ever served. The token comes from grantPurchase() above, minted
   only after Stripe's webhook confirmed the purchase, so this is a real
   server-side check, not the same soft localStorage gate the free pack uses.
   Nothing about a paid pack's content is baked into the static site build. */
async function premiumContent(url, env, cors) {
  const slug = String(url.searchParams.get("slug") || "").slice(0, 40);
  const token = String(url.searchParams.get("t") || "");
  if (!/^[a-z0-9-]{2,40}$/.test(slug) || !/^[a-f0-9]{40}$/.test(token)) {
    return json({ ok: false, error: "bad_request" }, 400, cors);
  }

  let grant;
  try {
    const raw = await env.LEADS.get(`purchase-access:${token}`);
    grant = raw ? JSON.parse(raw) : null;
  } catch (err) {
    return json({ ok: false, error: "lookup_failed" }, 500, cors);
  }

  /* "*" is the all-access bundle — it covers every pack, not just the one
     the token was originally minted for. */
  if (!grant || (grant.pack_slug !== slug && grant.pack_slug !== "*")) {
    return json({ ok: false, error: "not_entitled" }, 403, cors);
  }

  let prompts;
  try {
    const raw = await env.LEADS.get(`premium-content:${slug}`);
    prompts = raw ? JSON.parse(raw) : null;
  } catch (err) {
    return json({ ok: false, error: "lookup_failed" }, 500, cors);
  }

  if (!prompts || !prompts.length) return json({ ok: false, error: "not_found" }, 404, cors);
  /* pack_slug included so the client can tell a bundle grant ("*") apart from
     a single-pack one and cache it under the right key — see app.js's direct
     ?t= branch, which needs this to unlock every other pack too, not just
     the one the emailed link happened to point at. */
  return json({ ok: true, prompts, pack_slug: grant.pack_slug }, 200, cors);
}

/* -------------------------------------------------------- admin content ingest
   POST /admin/premium-content — the only way premium-content:<slug> gets
   written. Run locally via scripts/upload-premium-content.mjs, never from the
   browser, so it bypasses the origin allowlist entirely (like the Stripe
   webhook) and checks a shared secret header instead. */
async function adminIngestPremiumContent(req, env) {
  const key = req.headers.get("x-admin-key") || "";
  if (!env.ADMIN_KEY || key !== env.ADMIN_KEY) {
    return new Response("unauthorized", { status: 401 });
  }

  let body;
  try {
    body = await req.json();
  } catch (err) {
    return new Response("bad json", { status: 400 });
  }

  const slug = String(body.slug || "").slice(0, 40);
  if (!/^[a-z0-9-]{2,40}$/.test(slug)) return new Response("bad slug", { status: 400 });
  if (!Array.isArray(body.prompts) || !body.prompts.length) return new Response("no prompts", { status: 400 });

  const prompts = body.prompts.map((p) => ({ title: str(p.title, 200), text: str(p.text, 8000) }));

  try {
    await env.LEADS.put(`premium-content:${slug}`, JSON.stringify(prompts));
  } catch (err) {
    return new Response("storage failed", { status: 500 });
  }

  return new Response(JSON.stringify({ ok: true, slug, count: prompts.length }), {
    status: 200,
    headers: { "Content-Type": "application/json" }
  });
}

/* ---------------------------------------------------------------- MailerLite */
/* Generic MailerLite upsert — shared by the free-pack signup flow (subscribe())
   and the post-purchase flow (grantPurchase()). Each caller builds its own
   groups/fields; this just does the HTTP call.
   Custom fields let one automation branch by pack/source instead of you
   building ten of them. Create field names in MailerLite first — unknown
   field names are silently dropped by their API, not rejected. */
async function pushToMailerLite(env, { email, groups, fields }) {
  if (!env.MAILERLITE_API_KEY) return false;

  /* New API (Bearer). status:"active" matters — with double opt-in enabled a
     pending subscriber never triggers the automation, so the pack never sends. */
  try {
    const payload = { email, status: "active", fields };
    if (groups && groups.length) payload.groups = groups;

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
    const groupId = groups && groups[0];
    const url = groupId
      ? `https://api.mailerlite.com/api/v2/groups/${groupId}/subscribers`
      : "https://api.mailerlite.com/api/v2/subscribers";

    const r = await fetch(url, {
      method: "POST",
      headers: { "X-MailerLite-ApiKey": env.MAILERLITE_API_KEY, "Content-Type": "application/json" },
      body: JSON.stringify({ email, fields, resubscribe: true })
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
