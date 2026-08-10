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
<meta name="theme-color" content="#FAF9F6">
<meta name="color-scheme" content="light">

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
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,400&family=Space+Grotesk:wght@500;600;700&display=swap" rel="stylesheet">
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
    <nav class="topbar__nav" aria-label="Primary">
      <a class="topbar__link" href="/packs">All packs</a>
      <a class="topbar__link" href="/pricing">Pricing</a>
    </nav>
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

export function homePage({ site, corePacks }) {
  const rows = corePacks.map((p) => `
    <a class="packrow" href="${packUrl(p.slug)}" data-pack-link="${esc(p.slug)}">
      <span class="packrow__n">${esc(p.index)}</span>
      <span class="packrow__body">
        <span class="packrow__name">${esc(p.navLabel)}</span>
        <span class="packrow__outcome">${esc(p.rowOutcome)}</span>
      </span>
      <span class="packrow__arrow" aria-hidden="true">&rarr;</span>
    </a>`).join("");

  /* The homepage sends most of its traffic to one pack, so the primary CTA goes
     straight there rather than adding a "choose from five" decision first. */
  const lead = corePacks[0];

  /* Real proof instead of a "how it works" diagram: show an actual prompt.
     Nobody needs the mechanics explained before they want the thing. */
  const showcase = lead.previews.length ? lead.previews[0] : lead.prompts[0];
  const excerpt = showcase.text.split("\n\n").slice(0, 3).join("\n\n");

  const main = `
<section class="hero wrap">
  <p class="eyebrow eyebrow--accent hero__eyebrow">Free AI prompt packs</p>
  <h1>Prompts for the part where you do the work.</h1>
  <div class="hero__support">
    <p class="lead">Freelancing, cold outreach, content, local business, digital products.
    One pack per problem, written in the order you need to work through it.</p>
  </div>
  <div class="hero__cta">
    <a class="btn" href="${packUrl(lead.slug)}" data-pack-link="${esc(lead.slug)}">Get the free ${esc(lead.navLabel)} pack</a>
    <a class="tlink" href="#packs">See all packs <span class="tlink__arrow" aria-hidden="true">&rarr;</span></a>
  </div>
  <p class="hero__reel">
    Came from a Reel? <a href="#packs">Go straight to your pack.</a>
  </p>
</section>

<hr class="rule">

<section class="section wrap" id="packs" aria-labelledby="packs-h">
  <p class="statement mb-m">These are not random one-line prompts. <em>Every pack is built
  around a single outcome, in the order you need to do the work.</em></p>
  <h2 class="h2 mb-m" id="packs-h">${corePacks.length} packs. One problem each.</h2>
  <nav class="packlist" aria-label="Free prompt packs">${rows}</nav>
</section>

<hr class="rule">

<section class="section wrap" aria-labelledby="proof-h">
  <h2 class="eyebrow mb-m" id="proof-h">What one of them actually looks like</h2>
  <article class="prompt">
    <div class="prompt__head">
      <h3 class="prompt__title"><span class="n">01</span> ${esc(showcase.title)} — ${esc(lead.navLabel)}</h3>
    </div>
    <div class="prompt__body">${promptHtml(excerpt)}</div>
  </article>
  <p class="small mt-m">
    That is the opening of one prompt. Each pack has ${lead.prompts.length} of them,
    and every one specifies the role, your inputs, the method and the rules.
  </p>
  <p class="mt-m"><a class="tlink" href="${packUrl(lead.slug)}" data-pack-link="${esc(lead.slug)}">Read the whole prompt <span class="tlink__arrow" aria-hidden="true">&rarr;</span></a></p>
</section>

<hr class="rule">

<section class="section wrap">
  <h2 class="h2 mb-m">Start with the problem you have right now.</h2>
  <div class="hero__cta">
    <a class="btn" href="${packUrl(lead.slug)}" data-pack-link="${esc(lead.slug)}">Get the free ${esc(lead.navLabel)} pack</a>
    <a class="tlink" href="#packs">See all packs <span class="tlink__arrow" aria-hidden="true">&rarr;</span></a>
  </div>
  <p class="small mt-m">Enter your email, the pack opens straight away. No account needed.</p>
</section>`;

  return layout({
    site,
    title: `${site.name} — Free AI prompt packs for building online`,
    description:
      "Free AI prompt packs for freelancing, cold outreach, content, local business and digital products. 25 detailed prompts per pack, in the order you need them.",
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

  /* Outcome language. The `inside` list says what you DO; this says what you
     WALK AWAY WITH. Both matter, and this one has to come last, nearest the CTA. */
  const benefits = (pack.benefits || []).map((b) => `<li>${esc(b)}</li>`).join("");

  /* One real prompt, fully readable. Deliberately NOT copyable before the form —
     it stays as proof of quality, but the value comes after converting. */
  const preview = (pack.previews.length ? pack.previews : pack.prompts.slice(0, 1))
    .map((p, i) => {
      const id = `preview-${i}`;
      return `
      <article class="prompt">
        <div class="prompt__head">
          <h3 class="prompt__title"><span class="n">01</span> ${esc(p.title)}</h3>
        </div>
        <div class="prompt__body" id="${id}">${promptHtml(p.text)}</div>
      </article>`;
    }).join("");

  const seq = pack.sequence.steps.map((s) => `<li>${esc(s)}</li>`).join("");
  const note = pack.note ? `<p class="small mt-m">${esc(pack.note)}</p>` : "";

  /* Reading order: promise -> what you do -> what you get -> proof -> why all
     25 matter -> ask. The differentiator has to land BEFORE the form, not after.
     The paid upgrade is deliberately absent here — teasing a product that does
     not exist yet makes the free pack feel like a sampler. It lives on the
     access page only, after the visitor already has the prompts. */
  const main = `
<section class="hero wrap">
  <span class="hero__index" aria-hidden="true">${esc(pack.index)}</span>
  <p class="eyebrow eyebrow--accent hero__eyebrow">Free AI prompt pack</p>
  <h1>${esc(pack.headline)}</h1>
  <div class="hero__support">${support}</div>

  <p data-returning hidden>
    <a class="tlink" href="${accessUrl(pack.slug)}">
      You already have this pack — open it <span class="tlink__arrow" aria-hidden="true">&rarr;</span>
    </a>
  </p>

  <h2 class="eyebrow mt-l mb-m">Inside this pack</h2>
  <ul class="inside">${inside}</ul>

  ${benefits ? `
  <h2 class="eyebrow mt-l mb-m">What you walk away with</h2>
  <ul class="outcomes">${benefits}</ul>` : ""}

  <div class="hero__cta mt-l">
    <a class="btn" href="#get">Get the free ${esc(pack.navLabel)} pack</a>
  </div>
  <p class="small hero__note">${count} prompts. Opens straight away. No account needed.</p>
</section>

<hr class="rule">

<section class="section wrap" aria-labelledby="preview-h">
  <h2 class="eyebrow mb-m" id="preview-h">One prompt from the pack, in full</h2>
  ${preview}
  <p class="small mt-m">A real prompt from the pack, not a sample. The other ${count - 1} are the same depth.</p>
</section>

<hr class="rule">

<section class="section wrap" aria-labelledby="seq-h">
  <h2 class="h2 mb-m" id="seq-h">Why an order matters</h2>
  <p class="lead mb-m">${esc(pack.sequence.lead)}</p>
  <ol class="seq">${seq}</ol>
</section>

<hr class="rule">

<section class="section wrap" id="get" aria-labelledby="get-h">
  <h2 class="h2" id="get-h">Get the full ${esc(pack.name)}</h2>
  <p class="lead mt-s">All ${count} prompts, in the order you should use them.</p>

  <ul class="assurance mt-m">
    <li>You have just read one of the ${count} in full — the rest are the same depth.</li>
    <li>The pack opens on the next screen. You are not waiting on an email.</li>
    <li>No account, no payment details, no card.</li>
  </ul>

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
                data-prompt-title="${esc(p.title)}" data-copy-event="prompt_copy"
                aria-label="Copy prompt: ${esc(p.title)}">
          <span data-copy-label>Copy</span>
        </button>
      </div>
      <div class="prompt__body" id="${bodyId}">${promptHtml(p.text)}</div>
    </article>`;
  }).join("");

  /* Premium block. Renders a real price + buy button ONLY when the content
     exists, checkout works and there is something to download. Otherwise it
     states plainly that it is not available yet. */
  const prem = pack.premium;
  let upgrade = "";
  if (prem && prem.name) {
    const sellable = prem.ready
      && /^https:\/\//.test(prem.checkoutUrl || "")
      && /^https:\/\//.test(prem.downloadUrl || "");
    const money = site.commerce.currencySymbol + site.commerce.pack.price;
    upgrade = `
<hr class="rule">
<section class="section wrap">
  <div class="upgrade" data-upgrade="${esc(prem.name)}">
    <h2 class="h2">When you have worked through these</h2>
    <p>${esc(prem.blurb)}</p>
    ${sellable
      ? `<p class="mt-m"><a class="btn" href="${esc(prem.checkoutUrl)}" data-checkout>Get ${esc(prem.name)} — ${esc(money)}</a></p>
         <p class="small mt-s">Secure checkout via Stripe — opens in a new step.
         Or <a href="/pricing" style="color:var(--fg)">all 6 packs for ${esc(site.commerce.currencySymbol + site.commerce.bundle.price)}, one time</a>.</p>`
      : `<p class="upgrade__status">Not available yet</p>
         <p class="small mt-s">Being written now. Bookmark this page — it will show a download here as soon as it is ready.</p>`}
  </div>
</section>
`;
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
/* PREMIUM DELIVERY PAGE                                                     */
/* -------------------------------------------------------------------------- */

/* Same doc/TOC/prompt UI as the free access page, gated on a Stripe purchase
   instead of an email signup. Only ever built when content/premium/<slug>.json
   actually has prompts in it — see loadPremiumPrompts() in build.mjs. */
export function premiumPage({ site, pack, prompts }) {
  const count = prompts.length;
  const prem = pack.premium;
  const c = site.commerce;
  const money = c.currencySymbol + c.pack.price;
  const bundleMoney = c.currencySymbol + c.bundle.price;
  const hasCheckout = /^https:\/\//.test(prem.checkoutUrl || "");

  const toc = prompts.map((p, i) => `
    <a href="#p${i + 1}"><span class="n">${String(i + 1).padStart(3, "0")}</span><span>${esc(p.title)}</span></a>`).join("");

  const body = prompts.map((p, i) => {
    const id = `p${i + 1}`;
    const bodyId = `body-${id}`;
    return `
    <article class="prompt" id="${id}">
      <div class="prompt__head">
        <h2 class="prompt__title"><span class="n">${String(i + 1).padStart(3, "0")}</span> ${esc(p.title)}</h2>
        <button class="copy" type="button" data-copy="${bodyId}"
                data-prompt-title="${esc(p.title)}" data-copy-event="premium_prompt_copy"
                aria-label="Copy prompt: ${esc(p.title)}">
          <span data-copy-label>Copy</span>
        </button>
      </div>
      <div class="prompt__body" id="${bodyId}">${promptHtml(p.text)}</div>
    </article>`;
  }).join("");

  const main = `
<section class="hero wrap">
  <!-- Shown only when this browser has no verified purchase for this pack
       (or the all-access bundle) and the URL carries no Stripe session to check. -->
  <div data-purchase-gate hidden>
    <p class="eyebrow eyebrow--accent hero__eyebrow">Premium pack</p>
    <h1>${esc(prem.name)}</h1>
    <p class="lead mt-s">This page unlocks after you buy it — no purchase found for this browser yet.</p>
    <div class="hero__cta mt-l">
      ${hasCheckout
        ? `<a class="btn" href="${esc(prem.checkoutUrl)}" data-checkout>Get ${esc(prem.name)} — ${esc(money)}</a>`
        : `<p class="upgrade__status">Not available yet</p>`}
      <a class="tlink" href="/pricing">Or all 6 packs for ${esc(bundleMoney)}, one time <span class="tlink__arrow" aria-hidden="true">&rarr;</span></a>
    </div>
    <p class="small mt-m" data-purchase-status hidden></p>
  </div>

  <div data-purchase-body hidden>
    <span class="hero__index" aria-hidden="true">${esc(pack.index)}</span>
    <p class="success__badge">Purchase confirmed</p>
    <h1>${esc(prem.name)}</h1>
    <p class="lead mt-s">${count} prompts, in the order to use them.</p>
  </div>
</section>

<div data-purchase-body hidden>
  <hr class="rule">
  <section class="section wrap-wide">
    <div class="doc">
      <aside class="doc__aside">
        <p class="doc__label">Contents</p>
        <nav class="toc" aria-label="Prompts in this pack">${toc}</nav>
      </aside>
      <div class="doc__main">${body}</div>
    </div>
  </section>
  <hr class="rule">
  <section class="section wrap">
    <h2 class="h2 mb-m">More packs</h2>
    <a class="tlink" href="/pricing">See all packs and pricing <span class="tlink__arrow" aria-hidden="true">&rarr;</span></a>
  </section>
</div>`;

  return layout({
    site,
    title: `${prem.name} — your premium pack`,
    description: `Your ${prem.name}: ${count} premium AI prompts in order.`,
    path: `/${pack.slug}/premium`,
    page: {
      type: "premium",
      slug: pack.slug,
      packName: prem.name,
      checkoutUrl: prem.checkoutUrl || ""
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

/* -------------------------------------------------------------------------- */
/* PRICING                                                                    */
/* -------------------------------------------------------------------------- */

export function pricingPage({ site, corePacks }) {
  const c = site.commerce;
  const sym = c.currencySymbol;

  /* A tier is only buyable when payment works AND something exists to deliver. */
  const bundleLive = /^https:\/\//.test(c.bundle.checkoutUrl || "");
  const readyPacks = corePacks.filter((p) => p.premium && p.premium.ready);
  const anyPackLive = corePacks.some((p) =>
    p.premium && p.premium.ready && /^https:\/\//.test(p.premium.checkoutUrl || ""));

  /* Real counts, not hand-typed copy — a hardcoded headline drifts the moment
     a pack is added or a pack's prompt count changes. */
  const freeTotal = corePacks.reduce((n, p) => n + p.prompts.length, 0);
  const premiumTotal = corePacks.length * 200;

  const packCards = corePacks.map((p, i) => {
    const prem = p.premium || {};
    const live = prem.ready && /^https:\/\//.test(prem.checkoutUrl || "");
    const shown = p.prompts.slice(0, 4);
    const rest = p.prompts.length - shown.length;
    const tags = shown.map((pr) => `<span class="tierpack__tag">${esc(pr.title)}</span>`).join("")
      + (rest > 0 ? `<span class="tierpack__tag">+${rest} more</span>` : "");

    return `
    <div class="tierpack">
      <div class="tierpack__top">
        <div>
          <span class="tierpack__n">${esc(p.index)}</span><span class="tierpack__name">${esc(p.navLabel)}</span>
        </div>
      </div>
      <p class="tierpack__blurb">${esc(p.rowOutcome)}</p>
      <div class="tierpack__tags">${tags}</div>
      <div class="tierpack__actions">
        <a class="btn btn--ghost" href="${packUrl(p.slug)}">Free &middot; ${p.prompts.length} prompts</a>
        ${live
          ? `<a class="btn" href="${esc(prem.checkoutUrl)}" data-checkout>${esc(sym + c.pack.price)} &middot; 200 prompts</a>`
          : `<span class="btn btn--ghost" style="opacity:.5;cursor:default" aria-disabled="true">${esc(sym + c.pack.price)} &middot; in progress</span>`}
      </div>
    </div>`;
  }).join("");

  /* Shown BEFORE the priced tier cards, not after — a visitor scans price and
     the bundle card first (Z-pattern), so the honesty notice has to land
     before that, or it's read too late to change what the visitor already
     assumed. */
  const nothingLive = !anyPackLive && !bundleLive;
  const notice = nothingLive ? `
  <div class="notice mb-m">
    <strong>Paid plans are not open yet.</strong> The premium packs are still being written.
    Nothing here can be bought today, and no payment details are collected anywhere on this site.
    ${readyPacks.length ? `${readyPacks.length} of ${corePacks.length} premium packs are finished.` : "Every free pack is complete and available now."}
  </div>` : "";

  const main = `
<section class="hero wrap">
  <p class="eyebrow eyebrow--accent hero__eyebrow">Pricing</p>
  <h1>${freeTotal} prompts free. ${premiumTotal.toLocaleString("en-US")} when you're ready.</h1>
  <p class="lead mt-s">${corePacks.length} packs, ${corePacks.length} problems. Each one works on its own.
  Premium takes it deeper.</p>
</section>

<hr class="rule">

<section class="section wrap-wide">
  ${notice}
  <div class="tiers">
    <div class="tier">
      <span class="tier__name">Free</span>
      <p class="tier__price">${esc(sym)}0</p>
      <p class="tier__note">25 prompts per pack</p>
    </div>
    <div class="tier">
      <span class="tier__name">Premium</span>
      <p class="tier__price">${esc(sym + c.pack.price)}</p>
      <p class="tier__note">200 prompts, one pack</p>
    </div>
    <div class="tier tier--feature">
      <span class="tier__flag">Best value</span>
      <span class="tier__name">All-access bundle</span>
      <p class="tier__price">${esc(sym + c.bundle.price)}</p>
      <p class="tier__note">All ${corePacks.length} packs, one payment</p>
    </div>
  </div>
</section>

<hr class="rule">

<section class="section wrap-wide" id="packs" aria-labelledby="packs-h">
  <h2 class="h2 mb-m" id="packs-h">The packs</h2>
  ${anyPackLive ? `<p class="small mb-m">Secure checkout via Stripe for every priced pack below — opens in a new step.</p>` : ""}
  <div class="tierpacks">${packCards}</div>
</section>

<hr class="rule">

<section class="section wrap-wide">
  <div class="bundle-cta">
    <span class="bundle-cta__flag">All-access bundle</span>
    <h2 class="h2 mb-s">All ${corePacks.length} packs. ${esc(sym + c.bundle.price)}. One payment.</h2>
    <p>${premiumTotal.toLocaleString("en-US")} prompts across every topic. Yours permanently, no subscription.</p>
    ${bundleLive
      ? `<p class="mt-m"><a class="btn" href="${esc(c.bundle.checkoutUrl)}" data-checkout>Get all ${corePacks.length} — ${esc(sym + c.bundle.price)}</a></p>
         <p class="small mt-s">Secure checkout via Stripe — opens in a new step.</p>`
      : `<p class="tier__status mt-m" style="display:inline-block">Not available yet</p>`}
  </div>
</section>

<hr class="rule">

<section class="section wrap">
  <h2 class="h2 mb-m">Questions worth answering before you pay</h2>
  <div class="prose">
    <h2>What is actually different in the premium version?</h2>
    <p>The free pack is 25 prompts covering the whole workflow at a usable depth. The premium
    version goes much further into each stage, and includes the templates and follow-on
    workflows the free pack only points at.</p>

    <h2>Is the bundle a subscription?</h2>
    <p>No. It's one payment for the six premium packs that exist today — nothing recurring, nothing
    to cancel. If new packs are added later, they'll be sold on their own rather than added
    retroactively to what you already paid for, and you'll never lose access to anything you've
    already bought.</p>

    <h2>Do I need an account?</h2>
    <p>Not for the free packs — enter your email and they open immediately. For anything paid, Stripe
    redirects you straight to your pack once checkout completes, and this browser stays unlocked for
    it from then on. No password to remember or lose.</p>

    <h2>Are refunds available?</h2>
    <p>Refund terms will be published here in full before payments open, rather than invented
    now. They will also be shown at checkout before you pay.</p>
  </div>
</section>`;

  return layout({
    site,
    title: `Pricing — ${site.name}`,
    description: `Free AI prompt packs, premium packs at ${sym}${c.pack.price} each, or all 6 for ${sym}${c.bundle.price} one time.`,
    path: "/pricing",
    page: { type: "pricing" },
    main
  });
}
