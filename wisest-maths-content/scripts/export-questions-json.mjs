#!/usr/bin/env node
// Emits per-question JSON files into .claude/output/<level>/<slug>/qNNN.json
// from a subtopic's TypeScript data file, matching the agent pipeline layout.
//
// Usage: node scripts/export-questions-json.mjs <path-to-subtopic.ts> <output-slug>

import { readFileSync, mkdirSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const projectRoot = resolve(__dirname, "..");

const [, , tsPathArg, slug] = process.argv;
if (!tsPathArg || !slug) {
  console.error("Usage: node scripts/export-questions-json.mjs <subtopic.ts> <output-slug>");
  process.exit(1);
}

const tsPath = resolve(projectRoot, tsPathArg);
const raw = readFileSync(tsPath, "utf8");

// Extract the array literal between the first "[" after "questions" and the
// matching final "];". The data files are authored as pure JSON objects, so the
// array body parses directly with JSON.parse once the wrapper is removed.
const eq = raw.indexOf("=", raw.indexOf("export const questions"));
const start = raw.indexOf("[", eq);
const end = raw.lastIndexOf("]");
if (start === -1 || end === -1) {
  console.error("Could not locate the questions array in", tsPath);
  process.exit(1);
}
const arrayText = raw.slice(start, end + 1);

let questions;
try {
  questions = JSON.parse(arrayText);
} catch (err) {
  console.error("Failed to JSON.parse the questions array:", err.message);
  process.exit(1);
}

const outDir = resolve(projectRoot, ".claude", "output", "a-level-maths", slug);
mkdirSync(outDir, { recursive: true });

questions.forEach((q, i) => {
  const n = String(i + 1).padStart(3, "0");
  writeFileSync(resolve(outDir, `q${n}.json`), JSON.stringify(q, null, 2) + "\n");
});

console.log(`Wrote ${questions.length} JSON files to .claude/output/a-level-maths/${slug}/`);
