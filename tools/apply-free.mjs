#!/usr/bin/env node
/* ==========================================================================
   APPLY A GENERATED FREE PACK TO ITS PACK FILE
   --------------------------------------------------------------------------
   Usage:  node tools/apply-free.mjs freelancing

   Takes content/free/<slug>.json (built up by add-batch.mjs) and writes it into
   the `prompts:` array of content/packs/<slug>.mjs, plus sets `previews` to the
   first prompt so the landing page shows a real one.

   The existing file is backed up to content/packs/<slug>.mjs.bak first.
   ========================================================================== */

import { readFile, writeFile, copyFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const slug = process.argv[2];

if (!slug) {
  console.error("\n  usage: node tools/apply-free.mjs <pack-slug>\n");
  process.exit(1);
}

const src = join(ROOT, "content", "free", `${slug}.json`);
const dest = join(ROOT, "content", "packs", `${slug}.mjs`);

if (!existsSync(src))  { console.error(`\n  No generated prompts at content/free/${slug}.json\n`); process.exit(1); }
if (!existsSync(dest)) { console.error(`\n  No pack file at content/packs/${slug}.mjs — create it first.\n`); process.exit(1); }

const prompts = JSON.parse(await readFile(src, "utf8"));
if (!Array.isArray(prompts) || !prompts.length) {
  console.error("\n  Generated file is empty.\n"); process.exit(1);
}

/* Backticks would terminate the template literal; \\${ would interpolate. */
const lit = (s) => "`" + String(s).replace(/\\/g, "\\\\").replace(/`/g, "\\`").replace(/\$\{/g, "\\${") + "`";

let file = await readFile(dest, "utf8");
await copyFile(dest, dest + ".bak");

const promptsBlock =
  "  prompts: [\n" +
  prompts.map((p) => `    { title: ${JSON.stringify(p.title)}, text: ${lit(p.text)} }`).join(",\n\n") +
  "\n  ]\n};\n";

const previewBlock =
  "  previews: [\n" +
  `    { title: ${JSON.stringify(prompts[0].title)}, text: ${lit(prompts[0].text)} }\n` +
  "  ],\n\n";

const pStart = file.indexOf("  prompts: [");
if (pStart === -1) { console.error("\n  Could not find a `prompts: [` array in the pack file.\n"); process.exit(1); }
file = file.slice(0, pStart) + promptsBlock;

const vStart = file.indexOf("  previews: [");
if (vStart !== -1) {
  const vEnd = file.indexOf("\n  ],", vStart);
  if (vEnd !== -1) file = file.slice(0, vStart) + previewBlock + file.slice(vEnd + 5).replace(/^\n/, "");
}

await writeFile(dest, file, "utf8");

console.log(`\n  Wrote ${prompts.length} prompts into content/packs/${slug}.mjs`);
console.log(`  Previous version saved as ${slug}.mjs.bak`);
console.log(`\n  Now run:  node build.mjs\n`);
