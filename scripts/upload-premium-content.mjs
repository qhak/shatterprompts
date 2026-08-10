#!/usr/bin/env node
/* ==========================================================================
   Uploads content/premium/<slug>.json to the Worker's KV, via the
   ADMIN_KEY-gated POST /admin/premium-content endpoint. This is the ONLY
   way premium prompt text reaches production — it never ships in the
   static build (see build.mjs), so it can't leak through the public repo
   or a page's raw HTML.

   Run whenever premium content changes:
     ADMIN_KEY=<the secret you put on the Worker> node scripts/upload-premium-content.mjs
   ========================================================================== */

import { readdir, readFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

import { SITE } from "../content/site.config.mjs";

const ROOT = dirname(dirname(fileURLToPath(import.meta.url)));
const PREMIUM_DIR = join(ROOT, "content", "premium");

const ADMIN_KEY = process.env.ADMIN_KEY;
if (!ADMIN_KEY) {
  console.error(
    "Set ADMIN_KEY to the same secret you put on the Worker, then try again:\n" +
    "  ADMIN_KEY=... node scripts/upload-premium-content.mjs"
  );
  process.exit(1);
}

const workerBase = (process.env.WORKER_URL || SITE.integrations.leadEndpoint.replace(/\/subscribe\/?$/, "")).replace(/\/$/, "");
const endpoint = `${workerBase}/admin/premium-content`;

async function main() {
  let files;
  try {
    files = (await readdir(PREMIUM_DIR)).filter((f) => f.endsWith(".json"));
  } catch (err) {
    console.error(`Could not read ${PREMIUM_DIR}: ${err.message}`);
    process.exit(1);
  }

  if (!files.length) {
    console.error(`No .json files found in ${PREMIUM_DIR}`);
    process.exit(1);
  }

  console.log(`Uploading ${files.length} pack(s) to ${endpoint}\n`);

  let failed = 0;
  for (const file of files) {
    const slug = file.replace(/\.json$/, "");
    const raw = await readFile(join(PREMIUM_DIR, file), "utf8");
    const prompts = JSON.parse(raw);

    if (!Array.isArray(prompts) || !prompts.length) {
      console.log(`  ${slug}: skipped — empty or not an array`);
      continue;
    }

    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", "X-Admin-Key": ADMIN_KEY },
        body: JSON.stringify({ slug, prompts })
      });

      if (res.ok) {
        const data = await res.json();
        console.log(`  ${slug}: OK — ${data.count} prompts`);
      } else {
        failed++;
        console.log(`  ${slug}: FAILED — ${res.status} ${await res.text()}`);
      }
    } catch (err) {
      failed++;
      console.log(`  ${slug}: FAILED — ${err.message}`);
    }
  }

  if (failed) {
    console.error(`\n${failed} pack(s) failed to upload.`);
    process.exit(1);
  }
  console.log("\nAll packs uploaded — /premium-content will now serve them to verified buyers.");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
