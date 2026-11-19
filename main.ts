// news-image-20261119 entry (Node 22, standard library only).
// The entry is the picture: entry.png beside this file holds a one-page
// front page summing up Thursday 19 November 2026. This program's job is
// to place those exact bytes at /output/entry.png, because the judge sees
// the file, not the repository.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const outPath = join(process.env.MAKEFUN_OUTPUT_DIR ?? '/output', 'entry.png');
copyFileSync(new URL('./entry.png', import.meta.url), outPath);

const bytes = readFileSync(outPath);

// The gate sniffs the format from the first bytes, caps the file at 1 MiB
// and the picture at 1024x1024. Verify all three against the bytes actually
// written, so a truncated or swapped image fails loudly here instead of
// scoring 0 at the gate.
const ONE_MIB = 1_048_576;
if (bytes.length > ONE_MIB) {
  throw new Error(`entry.png is ${bytes.length} bytes, over the 1 MiB cap`);
}

const isPng =
  bytes[0] === 0x89 && bytes[1] === 0x50 && bytes[2] === 0x4e && bytes[3] === 0x47;
const isJpeg = bytes[0] === 0xff && bytes[1] === 0xd8 && bytes[2] === 0xff;
if (!isPng && !isJpeg) throw new Error('entry.png is neither PNG nor JPEG');

function jpegSize(b: Buffer): { w: number; h: number } {
  // Walk the JPEG marker segments until a start-of-frame marker turns up;
  // its payload opens with precision, then height, then width (big-endian).
  let i = 2;
  while (i + 9 < b.length) {
    if (b[i] !== 0xff) { i += 1; continue; }
    const marker = b[i + 1];
    const isSof = marker >= 0xc0 && marker <= 0xcf && marker !== 0xc4 && marker !== 0xc8 && marker !== 0xcc;
    if (isSof) return { h: b.readUInt16BE(i + 5), w: b.readUInt16BE(i + 7) };
    i += 2 + b.readUInt16BE(i + 2);
  }
  throw new Error('no start-of-frame marker found in JPEG');
}

function pngSize(b: Buffer): { w: number; h: number } {
  // A PNG opens with an 8-byte signature, then the IHDR chunk: 4 bytes of
  // length, the literal 'IHDR', then width and height as big-endian u32s.
  if (b.toString('ascii', 12, 16) !== 'IHDR') throw new Error('PNG has no IHDR chunk');
  return { w: b.readUInt32BE(16), h: b.readUInt32BE(20) };
}

if (isJpeg) {
  const { w, h } = jpegSize(bytes);
  if (w > 1024 || h > 1024) throw new Error(`entry.png is ${w}x${h}, over the 1024x1024 cap`);
  console.log(`entry.png written: JPEG ${w}x${h}, ${bytes.length} bytes`);
} else {
  const { w, h } = pngSize(bytes);
  if (w > 1024 || h > 1024) throw new Error(`entry.png is ${w}x${h}, over the 1024x1024 cap`);
  console.log(`entry.png written: PNG ${w}x${h}, ${bytes.length} bytes`);
}
