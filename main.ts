// make.fun news-image-20261123: the world news of Monday 23 November 2026 in one image.
// The front page is drawn ahead of time (build/render.mjs -> headless Chrome -> entry.png),
// so this program only checks entry.png and copies it: every run writes the same bytes, no network.
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const MAX_BYTES = 1024 * 1024;
const PNG_SIGNATURE = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);

const image = readFileSync(new URL('./entry.png', import.meta.url));
if (!image.subarray(0, 8).equals(PNG_SIGNATURE)) throw new Error('entry.png is not a PNG file');
if (image.length > MAX_BYTES) throw new Error(`entry.png is ${image.length} bytes, over the 1 MiB limit`);
// The IHDR chunk stores width and height as big-endian 32-bit numbers at bytes 16-23.
const width = image.readUInt32BE(16);
const height = image.readUInt32BE(20);
if (width > 1024 || height > 1024) throw new Error(`entry.png is ${width}x${height}, over 1024x1024`);

const IEND = Buffer.from('IEND');
if (image.lastIndexOf(IEND) !== image.length - 8) throw new Error('entry.png is truncated (no IEND chunk at the end)');

const outDir = process.env.MAKEFUN_OUTPUT_DIR || '/output';
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, 'entry.png'), image);
console.log(`wrote ${join(outDir, 'entry.png')} (${width}x${height}, ${image.length} bytes)`);
