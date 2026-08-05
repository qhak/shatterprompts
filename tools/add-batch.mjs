#!/usr/bin/env node
/* ==========================================================================
   ADD A GENERATED PROMPT BATCH
   --------------------------------------------------------------------------
   Usage:  node tools/add-batch.mjs freelancing ~/Downloads/batch-01.json

   Takes a JSON batch produced by the generation prompt (see PACK-GENERATION.md),
   validates it hard, and merges it into content/premium/<slug>.json.

   It REFUSES anything that would lower the quality of the pack:
     - missing the house-format sections
     - too short to be a real prompt
     - a title already used in this pack
     - text that is near-identical to an existing prompt
     - banned marketing language or invented proof

   Nothing is written unless the whole batch passes.
   ========================================================================== */

import { readFile, writeFile, mkdir } from "node:fs/promises";
import { existsSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const [, , slug, batchPath] = process.argv;

if (!slug || !batchPath) {
  console.error("\n  usage: node tools/add-batch.mjs <pack-slug> <batch.json>\n");
  process.exit(1);
}

const REQUIRED_SECTIONS = ["WHAT I NEED", "HOW TO DO IT", "RETURN", "RULES"];
const MIN_WORDS = 120;

/* Phrases that mean the model drifted into marketing or invented proof. */
const BANNED = [
  /\bunleash\b/i, /\bgame.?chang/i, /\brevolutionary\b/i, /\blevel up\b/i,
  /\bguarantee[sd]?\s+(you|results|income|clients|money)/i,
  /\bwhile you sleep\b/i, /\b10x\b/i, /\bsecret (?:sauce|weapon)\b/i,
  /\bproven to\b/i, /\bindustry.leading\b/i, /\bcutting.edge\b/i
];

const norm = (s) => s.toLowerCase().replace(/\[[^\]]*\]/g, "").replace(/[^a-z0-9 ]/g, " ").replace(/\s+/g, " ").trim();

/* Cheap similarity: shared word-trigram ratio. Good enough to catch a model
   rewording the same prompt twice, which is the real failure mode at volume. */
function similarity(a, b) {
  const tri = (s) => {
    const w = norm(s).split(" ");
    const out = new Set();
    for (let i = 0; i < w.length - 2; i++) out.add(w[i] + " " + w[i + 1] + " " + w[i + 2]);
    return out;
  };
  const A = tri(a), B = tri(b);
  if (!A.size || !B.size) return 0;
  let shared = 0;
  for (const t of A) if (B.has(t)) shared++;
  return shared / Math.min(A.size, B.size);
}

const store = join(ROOT, "content", "premium", `${slug}.json`);
const existing = existsSync(store) ? JSON.parse(await readFile(store, "utf8")) : [];

let batch;
try {
  const raw = await readFile(batchPath, "utf8");
  /* Tolerate the model wrapping JSON in a code fence. */
  batch = JSON.parse(raw.replace(/^\s*```(?:json)?\s*/i, "").replace(/\s*```\s*$/, ""));
} catch (err) {
  console.error(`\n  Could not parse ${batchPath} as JSON.\n  ${err.message}\n`);
  process.exit(1);
}

const prompts = Array.isArray(batch) ? batch : batch.prompts;
if (!Array.isArray(prompts)) {
  console.error("\n  Expected a JSON array of prompts, or an object with a `prompts` array.\n");
  process.exit(1);
}

const errors = [];
const seenTitles = new Map(existing.map((p, i) => [norm(p.title), i + 1]));

prompts.forEach((p, i) => {
  const n = `batch item ${i + 1}`;
  if (!p || typeof p.title !== "string" || typeof p.text !== "string") {
    return errors.push(`${n}: needs both "title" and "text" as strings.`);
  }

  const words = p.text.trim().split(/\s+/).length;
  if (words < MIN_WORDS) errors.push(`${n} "${p.title}": only ${words} words (minimum ${MIN_WORDS}) — too thin to be worth paying for.`);

  const missing = REQUIRED_SECTIONS.filter((sec) => !p.text.includes(sec));
  if (missing.length) errors.push(`${n} "${p.title}": missing section(s): ${missing.join(", ")}.`);

  if (!/\[[A-Z][^\]]*\]/.test(p.text)) errors.push(`${n} "${p.title}": no [INPUT] placeholder — the user has nothing to fill in.`);

  BANNED.forEach((re) => {
    const m = p.text.match(re);
    if (m) errors.push(`${n} "${p.title}": banned phrase "${m[0]}".`);
  });

  const key = norm(p.title);
  if (seenTitles.has(key)) errors.push(`${n} "${p.title}": duplicate title (already prompt #${seenTitles.get(key)}).`);
  seenTitles.set(key, existing.length + i + 1);

  for (const prev of existing) {
    if (similarity(p.text, prev.text) > 0.45) {
      errors.push(`${n} "${p.title}": too similar to existing prompt "${prev.title}" — it is a reword, not a new prompt.`);
      break;
    }
  }
  for (let j = 0; j < i; j++) {
    if (prompts[j] && similarity(p.text, prompts[j].text) > 0.45) {
      errors.push(`${n} "${p.title}": too similar to "${prompts[j].title}" in the same batch.`);
      break;
    }
  }
});

if (errors.length) {
  console.error(`\n  Batch rejected — ${errors.length} problem(s). Nothing was written.\n`);
  errors.forEach((e) => console.error("   - " + e));
  console.error("\n  Fix these in the generator output and run again.\n");
  process.exit(1);
}

const merged = existing.concat(prompts.map((p) => ({ title: p.title.trim(), text: p.text.trim() })));
await mkdir(dirname(store), { recursive: true });
await writeFile(store, JSON.stringify(merged, null, 2), "utf8");

const words = merged.map((p) => p.text.split(/\s+/).length);
const avg = Math.round(words.reduce((a, b) => a + b, 0) / words.length);

console.log(`\n  Added ${prompts.length} prompts to ${slug}.`);
console.log(`  Pack now holds ${merged.length} prompts (avg ${avg} words, shortest ${Math.min(...words)}).`);
console.log(`  Stored at content/premium/${slug}.json\n`);
if (merged.length < 200) {
  console.log(`  ${200 - merged.length} to go for a 200-prompt premium pack.\n`);
} else {
  console.log(`  Target reached. Set premium.ready once the download is in place.\n`);
}
