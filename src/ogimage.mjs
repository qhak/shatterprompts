/* ==========================================================================
   Social preview image generator — 1200x630 PNG, written byte by byte.
   Uses only node:zlib so the build stays dependency-free.

   Produces a clean branded card (cream ground, wordmark, terracotta rule).
   Replace dist/social-preview.png with a designed export whenever you have
   one — nothing else needs to change.
   ========================================================================== */

import { deflateSync } from "node:zlib";

const W = 1200, H = 630;
const BG  = [0xfa, 0xf9, 0xf6];
const FG  = [0x1a, 0x1a, 0x1a];
const RED = [0xc8, 0x55, 0x3a];
const DIM = [0x6b, 0x6b, 0x69];

/* Full 5x7 uppercase set + digits. Complete on purpose: a missing glyph would
   silently drop a letter from the card and nobody would notice until it shipped. */
const GLYPHS = {
  A: ["01110","10001","10001","11111","10001","10001","10001"],
  B: ["11110","10001","10001","11110","10001","10001","11110"],
  C: ["01110","10001","10000","10000","10000","10001","01110"],
  D: ["11110","10001","10001","10001","10001","10001","11110"],
  E: ["11111","10000","10000","11110","10000","10000","11111"],
  F: ["11111","10000","10000","11110","10000","10000","10000"],
  G: ["01110","10001","10000","10111","10001","10001","01111"],
  H: ["10001","10001","10001","11111","10001","10001","10001"],
  I: ["11111","00100","00100","00100","00100","00100","11111"],
  J: ["00111","00010","00010","00010","00010","10010","01100"],
  K: ["10001","10010","10100","11000","10100","10010","10001"],
  L: ["10000","10000","10000","10000","10000","10000","11111"],
  M: ["10001","11011","10101","10001","10001","10001","10001"],
  N: ["10001","11001","10101","10011","10001","10001","10001"],
  O: ["01110","10001","10001","10001","10001","10001","01110"],
  P: ["11110","10001","10001","11110","10000","10000","10000"],
  Q: ["01110","10001","10001","10001","10101","10010","01101"],
  R: ["11110","10001","10001","11110","10100","10010","10001"],
  S: ["01111","10000","10000","01110","00001","00001","11110"],
  T: ["11111","00100","00100","00100","00100","00100","00100"],
  U: ["10001","10001","10001","10001","10001","10001","01110"],
  V: ["10001","10001","10001","10001","10001","01010","00100"],
  W: ["10001","10001","10001","10001","10101","11011","10001"],
  X: ["10001","10001","01010","00100","01010","10001","10001"],
  Y: ["10001","10001","01010","00100","00100","00100","00100"],
  Z: ["11111","00001","00010","00100","01000","10000","11111"],
  "0":["01110","10001","10011","10101","11001","10001","01110"],
  "1":["00100","01100","00100","00100","00100","00100","01110"],
  "2":["01110","10001","00001","00110","01000","10000","11111"],
  "3":["11111","00010","00100","00010","00001","10001","01110"],
  "4":["00010","00110","01010","10010","11111","00010","00010"],
  "5":["11111","10000","11110","00001","00001","10001","01110"],
  "6":["00110","01000","10000","11110","10001","10001","01110"],
  "7":["11111","00001","00010","00100","01000","01000","01000"],
  "8":["01110","10001","10001","01110","10001","10001","01110"],
  "9":["01110","10001","10001","01111","00001","00010","01100"],
  " ": ["00000","00000","00000","00000","00000","00000","00000"]
};

export function makeOgImage() {
  const px = Buffer.alloc(W * H * 3);
  for (let i = 0; i < W * H; i++) {
    px[i * 3] = BG[0]; px[i * 3 + 1] = BG[1]; px[i * 3 + 2] = BG[2];
  }

  const rect = (x, y, w, h, c) => {
    for (let yy = Math.max(0, y); yy < Math.min(H, y + h); yy++) {
      for (let xx = Math.max(0, x); xx < Math.min(W, x + w); xx++) {
        const i = (yy * W + xx) * 3;
        px[i] = c[0]; px[i + 1] = c[1]; px[i + 2] = c[2];
      }
    }
  };

  const width = (str, scale) => str.length * 6 * scale - scale;

  const text = (str, x, y, scale, c) => {
    let cx = x;
    for (const ch of str.toUpperCase()) {
      const g = GLYPHS[ch];
      /* An unmapped character (punctuation, accents) shouldn't fail the whole
         site build over one decorative social-preview image — render it as a
         blank space and warn, so a future copy edit degrades gracefully
         instead of taking down node build.mjs for all 26 pages. */
      if (!g) {
        console.warn(`  ogimage: no glyph for "${ch}" — rendering blank space instead. Add it to GLYPHS to fix.`);
        cx += 6 * scale;
        continue;
      }
      for (let r = 0; r < 7; r++) {
        for (let col = 0; col < 5; col++) {
          if (g[r][col] === "1") rect(cx + col * scale, y + r * scale, scale, scale, c);
        }
      }
      cx += 6 * scale;
    }
  };

  /* Composition — wordmark, statement, rule, footer line. */
  rect(90, 84, 22, 22, RED);
  text("SHATTERPROMPTS", 130, 84, 4, FG);

  text("FREE AI PROMPT", 90, 250, 9, FG);
  text("PACKS", 90, 340, 9, FG);

  rect(90, 452, 200, 5, RED);

  text("ONE PROBLEM PER PACK", 90, 520, 3, DIM);

  /* Encode: each scanline prefixed with filter byte 0 */
  const raw = Buffer.alloc(H * (1 + W * 3));
  for (let y = 0; y < H; y++) {
    raw[y * (1 + W * 3)] = 0;
    px.copy(raw, y * (1 + W * 3) + 1, y * W * 3, (y + 1) * W * 3);
  }
  return png(raw);
}

/* ---------------------------------------------------------------- PNG bits */
const CRC_TABLE = (() => {
  const t = new Int32Array(256);
  for (let n = 0; n < 256; n++) {
    let c = n;
    for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
    t[n] = c;
  }
  return t;
})();

function crc32(buf) {
  let c = -1;
  for (let i = 0; i < buf.length; i++) c = CRC_TABLE[(c ^ buf[i]) & 0xff] ^ (c >>> 8);
  return (c ^ -1) >>> 0;
}

function chunk(type, data) {
  const len = Buffer.alloc(4);
  len.writeUInt32BE(data.length);
  const body = Buffer.concat([Buffer.from(type, "ascii"), data]);
  const crc = Buffer.alloc(4);
  crc.writeUInt32BE(crc32(body));
  return Buffer.concat([len, body, crc]);
}

function png(raw) {
  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(W, 0);
  ihdr.writeUInt32BE(H, 4);
  ihdr[8] = 8;   // bit depth
  ihdr[9] = 2;   // colour type: truecolour RGB
  ihdr[10] = 0;
  ihdr[11] = 0;
  ihdr[12] = 0;

  return Buffer.concat([
    Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]),
    chunk("IHDR", ihdr),
    chunk("IDAT", deflateSync(raw, { level: 9 })),
    chunk("IEND", Buffer.alloc(0))
  ]);
}
