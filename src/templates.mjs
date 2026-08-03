/* ==========================================================================
   SHATTERPROMPTS — page templates
   Pure string templates. No dependencies. Called by build.mjs.
   ========================================================================== */

export const esc = (s) =>
  String(s ?? "").replace(/[&<>"']/g, (c) =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

/* Escape, then highlight [PLACEHOLDER] tokens so they read as fill-in slots. */
export const promptHtml = (text) =>
  esc(text).replace(/\[([^\]]+)\]/g, '<span class="ph">[$1]</span>');

const packUrl = (slug) => `/${slug}`;
const accessUrl = (slug) => `/${slug}/access`;

/* -------------------------------------------------------------------------- */
/* SHELL                                                                      */
/* -------------------------------------------------------------------------- */

export function layout({ site, title, description, path, page, main, ogType = "website" }) {
  const canonical = site.origin.replace(/\/$/, "") + path;
  const ogImage = `${site.origin.replace(/\/$/, "")}/social-preview.png`;

  const analytics = site.integrations?.analytics || {};
  const scripts = [];
  if (analytics.plausibleDomain) {
    scripts.push(
      `<script defer data-domain="${esc(analytics.plausibleDomain)}" src="https://plausible.io/js/script.js"></script>`
    );
  }
  if (analytics.gaMeasurementId) {
    scripts.push(
      `<script async src="https://www.googletagmanager.com/gtag/js?id=${esc(analytics.gaMeasurementId)}"></script>`,
      `<script>window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${esc(analytics.gaMeasurementId)}');</script>`
    );
  }

  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>${esc(title)}</title>
<meta name="description" content="${esc(description)}">
<link rel="canonical" href="${esc(canonical)}">
<meta name="theme-color" content="#0C0C0D">
<meta name="color-scheme" content="dark">

<meta property="og:type" content="${esc(ogType)}">
<meta property="og:site_name" content="${esc(site.name)}">
<meta property="og:title" content="${esc(title)}">
<meta property="og:description" content="${esc(description)}">
<meta property="og:url" content="${esc(canonical)}">
<meta property="og:image" content="${esc(ogImage)}">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${esc(title)}">
<meta name="twitter:description" content="${esc(description)}">
<meta name="twitter:image" content="${esc(ogImage)}">

<link rel="icon" href="/favicon.svg" type="image/svg+xml">
<link rel="stylesheet" href="/assets/styles.css">
${scripts.join("\n")}
</head>
<body>
<a class="skip" href="#main">Skip to content</a>
${topbar(site)}
<main id="main">
${main}
</main>
${footer(site)}
<div class="toasts" id="toasts" role="status" aria-live="polite"></div>
<script>
window.SP_CONFIG=${JSON.stringify({
    integrations: site.integrations,
    debug: false
  })};
window.SP_PAGE=${JSON.stringify(page)};
</script>
<script src="/assets/app.js" defer></script>
</body>
</html>`;
}

function topbar(site) {
  return `<header class="topbar" data-topbar>
  <div class="wrap-wide topbar__inner">
    <a class="wordmark" href="/">${esc(site.name)}</a>
    <a class="topbar__link" href="/packs">All packs</a>
  </div>
</header>`;
}

function footer(site) {
  const links = [
    `<a href="/packs">All packs</a>`,
    `<a href="/privacy">Privacy</a>`,
    `<a href="/terms">Terms</a>`
  ];
  if (site.supportEmail) links.push(`<a href="mailto:${esc(site.supportEmail)}">Contact</a>`);
  if (site.instagram) links.push(`<a href="${esc(site.instagram)}" rel="noopener">Instagram</a>`);

  return `<footer class="footer">
  <div class="wrap-wide">
    <nav class="footer__nav" aria-label="Footer">${links.join("")}</nav>
    <p class="footer__legal">
      ${esc(site.name)} sells practical AI prompt packs. Prompts are templates —
      what you get out of them depends on your inputs, your market and your own execution.
      No income, client, employment or growth outcome is promised or guaranteed.
    </p>
    <p class="footer__legal" style="margin-top:.75rem">© ${new Date().getFullYear()} ${esc(site.name)}</p>
  </div>
</footer>`;
}

/* -------------------------------------------------------------------------- */
/* HOMEPAGE                                                                   */
/* -------------------------------------------------------------------------- */

export function homePage({ site, corePacks, howItWorks }) {
  const rows = corePacks.map((p) => `
    <a class="packrow" href="${packUrl(p.slug)}" data-pack-link="${esc(p.slug)}">
      <span class="packrow__n">${esc(p.index)}</span>
      <span class="packrow__body">
        <span class="packrow__name">${esc(p.navLabel)}</span>
        <span class="packrow__outcome">${esc(p.rowOutcome)}</span>
      </span>
      <span class="packrow__arrow" aria-hidden="true">&rarr;</span>
    </a>`).join("");

  const steps = howItWorks.map((s) => `
    <li class="step">
      <div class="step__n">${esc(s.n)}</div>
      <h3>${esc(s.title)}</h3>
      <p>${esc(s.body)}</p>
    </li>`).join("");

  const main = `
<section class="hero wrap">
  <p class="eyebrow eyebrow--accent hero__eyebrow">AI prompt systems for people building online</p>
  <h1>Use AI to turn an idea into actual work.</h1>
  <div class="hero__support">
    <p class="lead">Practical prompt packs for finding a service, getting clients, creating content,
    building an offer, and launching online.</p>
  </div>
  <div class="hero__cta">
    <a class="btn" href="#packs">Explore free packs</a>
  </div>
  <p class="small hero__note">
    Already came from a Reel? <a href="#packs" style="color:var(--fg)">Open your pack.</a>
  </p>
</section>

<hr class="rule">

<section class="section wrap" id="packs" aria-labelledby="packs-h">
  <h2 class="h2 mb-m" id="packs-h">Five packs. One problem each.</h2>
  <nav class="packlist" aria-label="Free prompt packs">${rows}</nav>
</section>

<section class="section--tight wrap">
  <p class="statement">Not random one-line prompts. <em>Each pack is built around a practical outcome.</em></p>
</section>

<hr class="rule">

<section class="section wrap" aria-labelledby="how-h">
  <h2 class="h2 mb-m" id="how-h">How it works</h2>
  <ol class="steps">${steps}</ol>
</section>

<hr class="rule">

<section class="section wrap">
  <h2 class="h2 mb-m">Start with the problem you have this week.</h2>
  <a class="btn" href="#packs">Explore free packs</a>
</section>`;

  return layout({
    site,
    title: `${site.name} — Free AI prompt packs for building online`,
    description:
      "Practical AI prompt packs for freelancing, cold outreach, content, local business and digital products. Free, one problem per pack.",
    path: "/",
    page: { type: "home" },
    main
  });
}

/* -------------------------------------------------------------------------- */
/* PACK LANDING PAGE                                                          */
/* -------------------------------------------------------------------------- */

export function packPage({ site, pack }) {
  const count = pack.prompts.length;
  const inside = pack.inside.map((b) => `<li>${esc(b)}</li>`).join("");
  const support = pack.support.map((s) => `<p class="lead">${esc(s)}</p>`).join("");

  /* One real prompt, fully readable and copyable. No blurred fake preview. */
  const preview = (pack.previews.length ? pack.previews : pack.prompts.slice(0, 1))
    .map((p, i) => {
      const id = `preview-${i}`;
      return `
      <article class="prompt">
        <div class="prompt__head">
          <h3 class="prompt__title"><span class="n">01</span> ${esc(p.title)}</h3>
          <button class="copy" type="button" data-copy="${id}"
                  data-prompt-title="${esc(p.title)}" data-copy-event="prompt_preview_copy">
            <span data-copy-label>Copy prompt</span>
          </button>
        </div>
        <div class="prompt__body" id="${id}">${promptHtml(p.text)}</div>
      </article>`;
    }).join("");

  const seq = pack.sequence.steps.map((s) => `<li>${esc(s)}</li>`).join("");

  /* Paid upgrade: never a price or a checkout button unless a real URL exists. */
  let upgrade = "";
  if (pack.upgrade && pack.upgrade.name) {
    const live = /^https:\/\//.test(pack.upgrade.checkoutUrl || "");
    upgrade = `
<section class="section--tight wrap">
  <div class="upgrade" data-upgrade="${esc(pack.upgrade.name)}">
    <h2 class="h2">Want the complete ${esc(pack.upgrade.name.replace(/^The /, ""))}?</h2>
    <p>${esc(pack.upgrade.blurb)}</p>
    ${live
      ? `<p class="mt-m"><a class="btn" href="${esc(pack.upgrade.checkoutUrl)}" data-checkout>
           Get ${esc(pack.upgrade.name)}${pack.upgrade.price ? " — " + esc(pack.upgrade.price) : ""}
         </a></p>`
      : `<p class="upgrade__status">Full system coming soon</p>
         <p class="small mt-s">Everyone on the free pack list hears about it first. Nothing to do now.</p>`}
  </div>
</section>`;
  }

  const note = pack.note ? `<p class="small mt-m">${esc(pack.note)}</p>` : "";

  const main = `
<section class="hero wrap">
  <span class="hero__index" aria-hidden="true">${esc(pack.index)}</span>
  <p class="eyebrow eyebrow--accent hero__eyebrow">Free AI prompt pack</p>
  <h1>${esc(pack.headline)}</h1>
  <div class="hero__support">${support}</div>

  <p class="hidden-returning" data-returning hidden>
    <a class="tlink" href="${accessUrl(pack.slug)}">
      You already have this pack — open it <span class="tlink__arrow" aria-hidden="true">&rarr;</span>
    </a>
  </p>

  <h2 class="eyebrow mt-l mb-m">Inside this pack</h2>
  <ul class="inside">${inside}</ul>

  <div class="hero__cta mt-l">
    <a class="btn" href="#get">Get the free ${esc(pack.navLabel)} pack</a>
  </div>
  <p class="small hero__note">${count} prompts. Opens straight away. No account needed.</p>
</section>

<hr class="rule">

<section class="section wrap" aria-labelledby="preview-h">
  <h2 class="eyebrow mb-m" id="preview-h">One prompt from the pack</h2>
  ${preview}
  <p class="small mt-m">This is a real prompt from the pack, not a sample. The full pack has ${count}.</p>
</section>

<hr class="rule">

<section class="section wrap" id="get" aria-labelledby="get-h">
  <h2 class="h2" id="get-h">Get the full ${esc(pack.name)}</h2>
  <p class="lead mt-s">All ${count} prompts, in the order you should use them.</p>

  <form class="form mt-m" data-lead-form novalidate>
    <div class="field">
      <label for="email">Email address</label>
      <input class="input" type="email" id="email" name="email"
             autocomplete="email" inputmode="email" placeholder="you@example.com"
             required aria-describedby="email-error" data-email>
      <span class="error" id="email-error" role="alert" hidden data-error></span>
    </div>

    <label class="consent" for="marketing">
      <input type="checkbox" id="marketing" name="marketing" data-consent
             data-consent-text="Send me occasional emails about new packs.">
      <span>Also send me occasional emails about new packs. Optional — you get this pack either way.</span>
    </label>

    <button class="btn btn--full" type="submit" data-submit
            data-label="Get the ${esc(pack.navLabel)} pack">Get the ${esc(pack.navLabel)} pack</button>
  </form>

  <p class="small mt-s">
    We use your email to send you this pack and, if you tick the box, occasional emails about new packs.
    <a href="/privacy" style="color:var(--fg)">Privacy</a>.
  </p>
  ${note}
</section>

<hr class="rule">

<section class="section wrap" aria-labelledby="seq-h">
  <h2 class="h2 mb-m" id="seq-h">Why an order matters</h2>
  <p class="lead mb-m">${esc(pack.sequence.lead)}</p>
  <ol class="seq">${seq}</ol>
</section>

${upgrade}

<hr class="rule">

<section class="section wrap">
  <h2 class="h2 mb-m">Get the ${esc(pack.name)}</h2>
  <a class="btn" href="#get">Get the free pack</a>
</section>`;

  return layout({
    site,
    title: pack.seo.title,
    description: pack.seo.description,
    path: packUrl(pack.slug),
    page: {
      type: "pack",
      slug: pack.slug,
      packName: pack.name,
      tier: pack.tier,
      accessUrl: accessUrl(pack.slug)
    },
    main,
    ogType: "article"
  });
}

/* -------------------------------------------------------------------------- */
/* ACCESS PAGE                                                                */
/* -------------------------------------------------------------------------- */

export function accessPage({ site, pack }) {
  const count = pack.prompts.length;

  const toc = pack.prompts.map((p, i) => `
    <a href="#p${i + 1}"><span class="n">${String(i + 1).padStart(2, "0")}</span><span>${esc(p.title)}</span></a>`).join("");

  const prompts = pack.prompts.map((p, i) => {
    const id = `p${i + 1}`;
    const bodyId = `body-${id}`;
    return `
    <article class="prompt" id="${id}">
      <div class="prompt__head">
        <h2 class="prompt__title"><span class="n">${String(i + 1).padStart(2, "0")}</span> ${esc(p.title)}</h2>
        <button class="copy" type="button" data-copy="${bodyId}"
                data-prompt-title="${esc(p.title)}" data-copy-event="prompt_copy">
          <span data-copy-label>Copy</span>
        </button>
      </div>
      <div class="prompt__body" id="${bodyId}">${promptHtml(p.text)}</div>
    </article>`;
  }).join("");

  let upgrade = "";
  if (pack.upgrade && pack.upgrade.name) {
    const live = /^https:\/\//.test(pack.upgrade.checkoutUrl || "");
    upgrade = `
<hr class="rule">
<section class="section wrap">
  <div class="upgrade" data-upgrade="${esc(pack.upgrade.name)}">
    <h2 class="h2">When you have worked through these</h2>
    <p>${esc(pack.upgrade.blurb)}</p>
    ${live
      ? `<p class="mt-m"><a class="btn" href="${esc(pack.upgrade.checkoutUrl)}" data-checkout>
           Get ${esc(pack.upgrade.name)}${pack.upgrade.price ? " — " + esc(pack.upgrade.price) : ""}</a></p>`
      : `<p class="upgrade__status">Full system coming soon</p>`}
  </div>
</section>`;
  }

  const note = pack.note ? `<p class="small mt-m">${esc(pack.note)}</p>` : "";

  const main = `
<section class="hero wrap">
  <!-- Shown only when this browser has no record of signing up. -->
  <div data-access-gate hidden>
    <p class="eyebrow eyebrow--accent hero__eyebrow">Free AI prompt pack</p>
    <h1>${esc(pack.name)}</h1>
    <p class="lead mt-s">Enter your email on the pack page and this opens straight away.</p>
    <p class="mt-l"><a class="btn" href="${packUrl(pack.slug)}">Get the ${esc(pack.navLabel)} pack</a></p>
  </div>

  <div data-access-body hidden>
    <span class="hero__index" aria-hidden="true">${esc(pack.index)}</span>
    <p class="success__badge">Access granted</p>
    <h1>${esc(pack.name)}</h1>
    <p class="lead mt-s" data-access-status>Your pack is ready below.</p>
    <p class="small mt-m">${count} prompts, in the order to use them. Each one feeds the next.</p>
    ${note}
  </div>
</section>

<div data-access-body hidden>
  <hr class="rule">
  <section class="section wrap-wide">
    <div class="doc">
      <aside class="doc__aside">
        <p class="doc__label">Contents</p>
        <nav class="toc" aria-label="Prompts in this pack">${toc}</nav>
      </aside>
      <div class="doc__main">
        ${prompts}
      </div>
    </div>
  </section>
  ${upgrade}
  <hr class="rule">
  <section class="section wrap">
    <h2 class="h2 mb-m">More free packs</h2>
    <a class="tlink" href="/packs">See all packs <span class="tlink__arrow" aria-hidden="true">&rarr;</span></a>
  </section>
</div>`;

  return layout({
    site,
    title: `${pack.name} — your prompts`,
    description: `Your ${pack.name}: ${count} practical AI prompts in order.`,
    path: accessUrl(pack.slug),
    page: {
      type: "access",
      slug: pack.slug,
      packName: pack.name,
      tier: pack.tier
    },
    main
  });
}

/* -------------------------------------------------------------------------- */
/* ALL PACKS                                                                  */
/* -------------------------------------------------------------------------- */

export function packsPage({ site, corePacks, secondaryPacks }) {
  const row = (p) => `
    <a class="packrow" href="${packUrl(p.slug)}" data-pack-link="${esc(p.slug)}">
      <span class="packrow__n">${esc(p.index)}</span>
      <span class="packrow__body">
        <span class="packrow__name">${esc(p.navLabel)}</span>
        <span class="packrow__outcome">${esc(p.rowOutcome)}</span>
      </span>
      <span class="packrow__arrow" aria-hidden="true">&rarr;</span>
    </a>`;

  const main = `
<section class="hero wrap">
  <p class="eyebrow eyebrow--accent hero__eyebrow">All packs</p>
  <h1>Every free pack.</h1>
  <p class="lead mt-s">Each one is built around a single practical outcome. Pick the problem you have now.</p>
</section>

<hr class="rule">

<section class="section wrap" aria-labelledby="core-h">
  <h2 class="h2 mb-m" id="core-h">Building online</h2>
  <nav class="packlist" aria-label="Business packs">${corePacks.map(row).join("")}</nav>
</section>

${secondaryPacks.length ? `
<section class="section--tight wrap" aria-labelledby="other-h">
  <h2 class="eyebrow mb-m" id="other-h">Also available</h2>
  <nav class="packlist" aria-label="Other packs">${secondaryPacks.map(row).join("")}</nav>
</section>` : ""}`;

  return layout({
    site,
    title: `All free AI prompt packs — ${site.name}`,
    description:
      "Every free SHATTERPROMPTS pack: freelancing, cold outreach, content, local business, digital products and more.",
    path: "/packs",
    page: { type: "packs" },
    main
  });
}

/* -------------------------------------------------------------------------- */
/* LEGAL                                                                      */
/* -------------------------------------------------------------------------- */

export function privacyPage({ site }) {
  const contact = site.supportEmail
    ? `<a href="mailto:${esc(site.supportEmail)}">${esc(site.supportEmail)}</a>`
    : `the contact address published on this site`;

  const endpointLive = /^https:\/\//.test(site.integrations?.leadEndpoint || "");

  const main = `
<section class="hero wrap">
  <p class="eyebrow eyebrow--accent hero__eyebrow">Legal</p>
  <h1>Privacy</h1>
  <p class="small mt-s">Last updated ${esc(site.legal.lastUpdated)}</p>
</section>
<hr class="rule">
<section class="section wrap prose">
  <h2>What we collect</h2>
  <p>When you request a free prompt pack we collect the email address you enter, which pack you asked for,
  and the link parameters that brought you here (such as <code>src</code> and <code>campaign</code>).
  These parameters tell us which post or message led to a signup. We do not ask for a name, a password or payment details.</p>

  <h2>Where it goes</h2>
  ${endpointLive
    ? `<p>Your email address is sent to our email service so we can deliver the pack you asked for.</p>`
    : `<p><strong>Email delivery is not connected yet.</strong> At the moment, when you submit the form your email
       address is kept only in your own browser's local storage so the site can reopen your pack. It is not
       transmitted to us or to any third party, and no email is sent. This page will be updated when that changes.</p>`}

  <h2>Marketing emails</h2>
  <p>The marketing checkbox is optional and separate from getting the pack. If you leave it unticked you still get
  the pack and we will not add you to a marketing list. If you tick it, you can unsubscribe from any email we send.</p>

  <h2>Analytics</h2>
  <p>We record which pages are viewed and which buttons are used, together with the link parameters above, so we can
  tell which content actually helps people. ${
    site.integrations?.analytics?.plausibleDomain || site.integrations?.analytics?.gaMeasurementId
      ? "This is handled by our analytics provider."
      : "No third-party analytics provider is connected at present."
  }</p>

  <h2>Local storage</h2>
  <p>This site stores a small amount of data in your browser: your email address (to save retyping it), which packs
  you have opened, and the link parameters from your first visit. Clearing your browser data removes all of it.</p>

  <h2>Your choices</h2>
  <p>You can ask what we hold about you, ask for it to be deleted, or unsubscribe at any time by contacting ${contact}.</p>
</section>`;

  return layout({
    site,
    title: `Privacy — ${site.name}`,
    description: "What SHATTERPROMPTS collects, why, and how to have it removed.",
    path: "/privacy",
    page: { type: "legal" },
    main
  });
}

export function termsPage({ site }) {
  const main = `
<section class="hero wrap">
  <p class="eyebrow eyebrow--accent hero__eyebrow">Legal</p>
  <h1>Terms</h1>
  <p class="small mt-s">Last updated ${esc(site.legal.lastUpdated)}</p>
</section>
<hr class="rule">
<section class="section wrap prose">
  <h2>What you get</h2>
  <p>The free packs are collections of written prompts you can copy into an AI assistant. They are provided as-is,
  for your own personal and business use.</p>

  <h2>What you may do</h2>
  <ul>
    <li>Use the prompts in your own work, for your own clients, and in your own business.</li>
    <li>Adapt and rewrite them for your own purposes.</li>
  </ul>

  <h2>What you may not do</h2>
  <ul>
    <li>Resell, republish or redistribute the packs themselves, in whole or in part.</li>
    <li>Present the packs as your own product.</li>
  </ul>

  <h2>No guaranteed outcome</h2>
  <p>These are templates. What you get from them depends on your inputs, your market, your skill and your execution.
  Nothing here promises income, clients, employment, audience growth or any other result.</p>

  <h2>Not professional advice</h2>
  <p>Nothing on this site is financial, legal, medical or professional advice. Packs marked as educational are exactly
  that. AI assistants can produce confident and incorrect answers — check anything that matters before acting on it.</p>

  <h2>Changes</h2>
  <p>Packs may be updated or replaced. If paid products are added later, their own terms will be shown at the point
  of purchase, before any payment is taken.</p>
</section>`;

  return layout({
    site,
    title: `Terms — ${site.name}`,
    description: "Terms for using SHATTERPROMPTS prompt packs.",
    path: "/terms",
    page: { type: "legal" },
    main
  });
}

export function notFoundPage({ site }) {
  const main = `
<section class="hero wrap">
  <p class="eyebrow eyebrow--accent hero__eyebrow">404</p>
  <h1>That page does not exist.</h1>
  <p class="lead mt-s">The link may be out of date. Every free pack is listed here.</p>
  <p class="mt-l"><a class="btn" href="/packs">See all packs</a></p>
</section>`;

  return layout({
    site,
    title: `Not found — ${site.name}`,
    description: "That page does not exist.",
    path: "/404",
    page: { type: "404" },
    main
  });
}
