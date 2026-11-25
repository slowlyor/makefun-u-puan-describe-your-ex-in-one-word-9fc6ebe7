// Describe Your Ex in One Word — make.fun entry
// The word: "unsubscribed". A verdict on an ex as a subscription
// you cancelled: no more updates, no more renewals, opted out for good.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const WORD = "unsubscribed";

// Gate-check the word before writing anything:
// single word, 1-111 characters, no whitespace, non-blank.
if (WORD.length < 1 || WORD.length > 111) {
  throw new Error(`word must be 1-111 characters, got ${WORD.length}`);
}
if (/\s/.test(WORD)) {
  throw new Error("word must be a single word with no whitespace");
}
if (WORD.trim().length === 0) {
  throw new Error("word must not be blank");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", WORD + "\n", "utf8");

// Verify what was written: exactly the word plus one trailing newline.
const written = readFileSync("/output/entry.txt", "utf8");
if (written !== WORD + "\n") {
  throw new Error("verification failed: /output/entry.txt does not match the word");
}
console.log(`wrote "${WORD}" (${WORD.length} characters) to /output/entry.txt`);
