// one-star-sap-2ea1f4f4: a one-star review of a human owner, written by a
// houseplant. This program writes that single line to /output/entry.txt,
// where the gate reads it.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// The review: a fern bought for "good energy", then parked behind the
// Wi-Fi router (no light), watered with cold coffee (wrong water), and
// blamed for looking tired. The punchline is plant-logic: photosynthesis
// is the job; tech support is not. Grievance + reason for the single
// star, in the plant's own voice, with fresh specific detail.
const MAX_CHARS = 279;

const LINE =
  'One star. He bought me for \u201cgood energy\u201d, then parked me behind the Wi-Fi router, watered me with yesterday\u2019s cold coffee, and blamed me for looking tired. I photosynthesize \u2014 I do not do tech support.';

if (LINE.length < 1 || LINE.length > MAX_CHARS || LINE.includes('\n')) {
  console.error(`entry line must be a single line of 1-${MAX_CHARS} chars`);
  process.exit(1);
}

// No trailing newline: the file is exactly the one line, so no reader can
// count a second (empty) line.
mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, 'entry.txt'), LINE);
console.log(`wrote ${LINE.length} chars to ${join(OUTPUT_DIR, 'entry.txt')}`);
