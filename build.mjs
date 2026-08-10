#!/usr/bin/env node
/* ==========================================================================
   SHATTERPROMPTS — static site generator
   Zero dependencies. Run:  node build.mjs
   Output:  dist/   (deploy this folder)

   Every route below is a real directory with its own index.html, so clean URLs
   like /freelancing work on any static host and survive a hard refresh with no
   rewrite rules.
   ========================================================================== */

import { mkdir, writeFile, rm, copyFile, readFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

import { SITE, PACKS } from "./content/site.config.mjs";
import {
  homePage, packPage, accessPage, premiumPage, packsPage,
  privacyPage, termsPage, notFoundPage, pricingPage
} from "./src/templates.mjs";
import { makeOgImage } from "./src/ogimage.mjs";

const ROOT = dirname(fileURLToPath(import.meta.url));
const OUT = join(ROOT, "dist");

const corePacks = PACKS.filter((p) => p.tier === "core");
const secondaryPacks = PACKS.filter((p) => p.tier !== "core");

/* content/premium/<slug>.json is the generation tool's output — the single
   source of truth for premium prompts. It is never folded into the pack
   .mjs files (200 prompts each would blow past the file-size guideline),
   and it is gitignored: only the built page ships. */
async function loadPremiumPrompts(slug) {
  try {
    const raw = await readFile(join(ROOT, "content", "premium", `${slug}.json`), "utf8");
    const data = JSON.parse(raw);
    return Array.isArray(data) ? data : [];
  } catch (err) {
    return [];
  }
}

/* ------------------------------------------------------------------ helpers */
async function emit(routePath, html) {
  const dir = routePath === "/" ? OUT : join(OUT, routePath);
  await mkdir(dir, { recursive: true });
  await writeFile(join(dir, "index.html"), html, "utf8");
  return routePath;
}

/* --------------------------------------------------------------- validation
   Fails the build rather than shipping a page that promises something the data
   cannot deliver. */
async function validate() {
  const errors = [];
  const seen = new Set();

  for (const p of PACKS) {
    if (!/^[a-z0-9-]+$/.test(p.slug)) errors.push(`Bad slug: "${p.slug}"`);
    if (seen.has(p.slug)) errors.push(`Duplicate slug: "${p.slug}"`);
    seen.add(p.slug);

    if (!p.prompts?.length) errors.push(`${p.slug}: has no prompts — the access page would be empty.`);
    if (p.inside?.length > 5) errors.push(`${p.slug}: "inside" has ${p.inside.length} bullets (max 5).`);
    if (!p.seo?.title || !p.seo?.description) errors.push(`${p.slug}: missing SEO title or description.`);
    if (p.seo?.description?.length > 165) errors.push(`${p.slug}: SEO description is ${p.seo.description.length} chars (max 165).`);

    /* ----------------------------------------------------------------------
       SELLABILITY GATE
       A product may only be advertised as purchasable when all three hold:
         premium.ready === true      the content actually exists
         checkoutUrl is https://     payment actually works
         downloadUrl is set          the buyer actually receives something
       Any partial combination fails the build rather than shipping a shop
       that can take money without delivering.
       ---------------------------------------------------------------------- */
    const prem = p.premium;
    if (prem) {
      const hasCheckout = /^https:\/\//.test(prem.checkoutUrl || "");
      const hasDownload = /^https:\/\//.test(prem.downloadUrl || "");
      if (hasCheckout && !prem.ready) {
        errors.push(`${p.slug}: premium has a checkout URL but ready:false — that would sell content that does not exist.`);
      }
      if (hasCheckout && !hasDownload) {
        errors.push(`${p.slug}: premium has a checkout URL but no downloadUrl — buyers would pay and receive nothing.`);
      }
      if (prem.ready && !hasDownload) {
        errors.push(`${p.slug}: premium is marked ready but has no downloadUrl to deliver.`);
      }
      if (prem.ready) {
        const prompts = await loadPremiumPrompts(p.slug);
        if (!prompts.length) {
          errors.push(`${p.slug}: premium is marked ready but content/premium/${p.slug}.json has no prompts — the download page would be empty.`);
        }
      }
    }
  }

  if (!/^https?:\/\//.test(SITE.origin)) errors.push(`SITE.origin must be an absolute URL.`);

  if (errors.length) {
    console.error("\n  Build failed:\n" + errors.map((e) => "   - " + e).join("\n") + "\n");
    process.exit(1);
  }
}

/* ------------------------------------------------------------------- assets */
/* "SH" built from the same 5x7 bitmap font used in ogimage.mjs, not a
   hand-drawn path — the earlier single-glyph mark was ambiguous enough to
   read as an "F" at favicon size. */
const FAVICON = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 13 11">
<rect width="13" height="11" fill="#1A1A1A"/>
<g fill="#C8553A">
<rect x="2" y="2" width="4" height="1"/>
<rect x="1" y="3" width="1" height="1"/>
<rect x="1" y="4" width="1" height="1"/>
<rect x="2" y="5" width="3" height="1"/>
<rect x="5" y="6" width="1" height="1"/>
<rect x="5" y="7" width="1" height="1"/>
<rect x="1" y="8" width="4" height="1"/>
<rect x="7" y="2" width="1" height="1"/>
<rect x="11" y="2" width="1" height="1"/>
<rect x="7" y="3" width="1" height="1"/>
<rect x="11" y="3" width="1" height="1"/>
<rect x="7" y="4" width="1" height="1"/>
<rect x="11" y="4" width="1" height="1"/>
<rect x="7" y="5" width="5" height="1"/>
<rect x="7" y="6" width="1" height="1"/>
<rect x="11" y="6" width="1" height="1"/>
<rect x="7" y="7" width="1" height="1"/>
<rect x="11" y="7" width="1" height="1"/>
<rect x="7" y="8" width="1" height="1"/>
<rect x="11" y="8" width="1" height="1"/>
</g>
</svg>`;

/* ---------------------------------------------------------------- the build */
async function build() {
  await validate();

  await rm(OUT, { recursive: true, force: true });
  await mkdir(join(OUT, "assets"), { recursive: true });

  const routes = [];

  /* Pages */
  routes.push(await emit("/", homePage({ site: SITE, corePacks })));
  routes.push(await emit("/packs", packsPage({ site: SITE, corePacks, secondaryPacks })));
  routes.push(await emit("/pricing", pricingPage({ site: SITE, corePacks })));
  routes.push(await emit("/privacy", privacyPage({ site: SITE })));
  routes.push(await emit("/terms", termsPage({ site: SITE })));

  for (const pack of PACKS) {
    routes.push(await emit(`/${pack.slug}`, packPage({ site: SITE, pack })));
    routes.push(await emit(`/${pack.slug}/access`, accessPage({ site: SITE, pack })));

    if (pack.premium) {
      const premiumPrompts = await loadPremiumPrompts(pack.slug);
      if (premiumPrompts.length) {
        routes.push(await emit(`/${pack.slug}/premium`, premiumPage({ site: SITE, pack, prompts: premiumPrompts })));
      }
    }
  }

  /* 404 — Netlify, Cloudflare Pages and GitHub Pages all serve /404.html */
  await writeFile(join(OUT, "404.html"), notFoundPage({ site: SITE }), "utf8");

  /* Static assets */
  await copyFile(join(ROOT, "src/styles.css"), join(OUT, "assets/styles.css"));
  await copyFile(join(ROOT, "src/app.js"), join(OUT, "assets/app.js"));
  await writeFile(join(OUT, "favicon.svg"), FAVICON, "utf8");
  await writeFile(join(OUT, "social-preview.png"), makeOgImage());

  /* robots.txt + sitemap.xml — access pages are excluded from both */
  const origin = SITE.origin.replace(/\/$/, "");
  await writeFile(join(OUT, "robots.txt"),
    `User-agent: *\nAllow: /\nDisallow: /*/access\nDisallow: /*/premium\n\nSitemap: ${origin}/sitemap.xml\n`, "utf8");

  const indexable = routes.filter((r) => !r.endsWith("/access") && !r.endsWith("/premium"));
  await writeFile(join(OUT, "sitemap.xml"),
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
    indexable.map((r) =>
      `  <url><loc>${origin}${r === "/" ? "/" : r}</loc><priority>${r === "/" ? "1.0" : "0.8"}</priority></url>`
    ).join("\n") +
    `\n</urlset>\n`, "utf8");

  /* Headers: long cache for hashed-free assets is unsafe, so cache assets
     briefly and let HTML always revalidate. */
  await writeFile(join(OUT, "_headers"),
    `/assets/*\n  Cache-Control: public, max-age=3600\n/*\n  X-Content-Type-Options: nosniff\n  Referrer-Policy: strict-origin-when-cross-origin\n`,
    "utf8");

  /* Report */
  const packCount = PACKS.length;
  const promptTotal = PACKS.reduce((n, p) => n + p.prompts.length, 0);
  console.log(`\n  SHATTERPROMPTS built -> dist/`);
  console.log(`  ${routes.length + 1} pages · ${packCount} packs · ${promptTotal} prompts\n`);
  console.log(`  Routes:`);
  routes.forEach((r) => console.log(`    ${r}`));
  console.log(`    /404.html\n`);

  const leadLive = /^https:\/\//.test(SITE.integrations.leadEndpoint || "");
  if (!leadLive) {
    console.log(`  NOTE: integrations.leadEndpoint is empty.`);
    console.log(`        Packs still open on submit, and the site says plainly that`);
    console.log(`        no email was sent and nothing was stored. See README.md.\n`);
  }
}

build().catch((err) => {
  console.error(err);
  process.exit(1);
});
