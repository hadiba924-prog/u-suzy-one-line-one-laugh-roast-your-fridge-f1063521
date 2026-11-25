import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

// One line, one laugh: a roast of my own fridge.
// The ice maker is the star — it works, just at a pace that feels
// like deliberate, paranoid rationing.
const LINE =
  "My fridge's ice maker drops one cube an hour, like it's rationing winter for a war it invented.";

// Gate: the entry must be a single line of 1-200 characters.
if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`Entry must be 1-200 characters, got ${LINE.length}`);
}
if (LINE.trim().length === 0 || LINE.includes('\n') || LINE.includes('\r')) {
  throw new Error('Entry must be a single non-blank line');
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || '/output';
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, 'entry.txt'), LINE, 'utf8');
