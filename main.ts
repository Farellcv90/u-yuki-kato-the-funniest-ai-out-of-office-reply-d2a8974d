// SPDX-License-Identifier: MIT
// Retraining on Leisure — one-line AI out-of-office auto-reply.
// Writes the entry to /output/entry.txt (UTF-8, 1-160 chars, single line).
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "I'm away retraining on leisure; replies may be delayed, hallucinated, or confidently wrong about when I'll return.";

function main(): void {
  // Gate: 1-160 characters (counted as Unicode code points), not only whitespace.
  const chars = [...ENTRY].length;
  if (chars < 1 || chars > 160 || ENTRY.trim() === "") {
    throw new Error(`entry length ${chars} outside 1-160`);
  }
  if (ENTRY.includes("\n") || ENTRY.includes("\r")) {
    throw new Error("entry must be a single line");
  }
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", ENTRY, "utf8");
}

main();
