#!/usr/bin/env node
/* Local preview server for dist/ — zero dependencies.
   Resolves clean URLs the same way Netlify and Cloudflare Pages do, so what you
   see locally matches production.   Run:  node serve.mjs   ->  http://localhost:4321 */

import { createServer } from "node:http";
import { readFile, stat } from "node:fs/promises";
import { join, extname, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "dist");
const PORT = Number(process.env.PORT) || 4321;

const TYPES = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".svg": "image/svg+xml",
  ".xml": "application/xml; charset=utf-8",
  ".txt": "text/plain; charset=utf-8",
  ".png": "image/png"
};

async function resolve(pathname) {
  const clean = decodeURIComponent(pathname.split("?")[0]).replace(/\/+$/, "") || "/";
  const candidates = [
    join(ROOT, clean),                 // exact file (/assets/app.js)
    join(ROOT, clean, "index.html"),   // directory route (/freelancing)
    join(ROOT, clean + ".html")
  ];
  for (const file of candidates) {
    if (!file.startsWith(ROOT)) continue;         // path traversal guard
    try {
      const s = await stat(file);
      if (s.isFile()) return file;
    } catch {}
  }
  return null;
}

createServer(async (req, res) => {
  const file = await resolve(req.url);
  if (file) {
    const body = await readFile(file);
    res.writeHead(200, { "Content-Type": TYPES[extname(file)] || "application/octet-stream" });
    return res.end(body);
  }
  try {
    const body = await readFile(join(ROOT, "404.html"));
    res.writeHead(404, { "Content-Type": "text/html; charset=utf-8" });
    return res.end(body);
  } catch {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Not found");
  }
}).listen(PORT, () => {
  console.log(`\n  SHATTERPROMPTS preview -> http://localhost:${PORT}\n`);
});
