#!/usr/bin/env node
/**
 * Combine intermediate batch .ts/.json files into one subtopic questions file.
 *
 * Usage:
 *   node scripts/combine_questions_to_ts.mjs <output.ts> <batch1.ts> [batch2.ts ...]
 *
 * Batch files may export `batch` or `questions`. The output always exports `questions`.
 */

import fs from "node:fs";
import path from "node:path";

function extractExportedArray(text) {
  const marker = /export const (?:batch|questions): Question\[\]\s*=/.exec(text);
  if (!marker) return null;

  let i = marker.index + marker[0].length;
  while (i < text.length && /\s/.test(text[i])) i += 1;
  if (text[i] !== "[") return null;

  const start = i;
  let depth = 0;
  let inString = false;
  let escape = false;

  for (; i < text.length; i += 1) {
    const ch = text[i];

    if (inString) {
      if (escape) {
        escape = false;
      } else if (ch === "\\") {
        escape = true;
      } else if (ch === '"') {
        inString = false;
      }
      continue;
    }

    if (ch === '"') {
      inString = true;
      continue;
    }

    if (ch === "[") depth += 1;
    if (ch === "]") {
      depth -= 1;
      if (depth === 0) {
        return text.slice(start, i + 1);
      }
    }
  }

  return null;
}

function readQuestionsFile(file) {
  const text = fs.readFileSync(file, "utf8").trim();
  if (file.endsWith(".json")) {
    const data = JSON.parse(text);
    if (!Array.isArray(data)) throw new Error(`${file}: expected JSON array`);
    return data;
  }

  const arrayText = extractExportedArray(text);
  if (!arrayText) throw new Error(`${file}: could not find Question[] export`);
  return JSON.parse(arrayText);
}

function main() {
  const [, , outFile, ...batchFiles] = process.argv;
  if (!outFile || batchFiles.length === 0) {
    console.error(
      "Usage: node scripts/combine_questions_to_ts.mjs <output.ts> <batch1.ts> [batch2.ts ...]"
    );
    process.exit(1);
  }

  if (!outFile.endsWith(".ts")) {
    console.error("Output must be a .ts file");
    process.exit(1);
  }

  const all = batchFiles.flatMap((file) => {
    const questions = readQuestionsFile(file);
    console.log(`${path.basename(file)}: ${questions.length}`);
    return questions;
  });

  const header = 'import { Question } from "@/lib/types";\n\nexport const questions: Question[] = ';
  const body = JSON.stringify(all, null, 2);
  fs.mkdirSync(path.dirname(outFile), { recursive: true });
  fs.writeFileSync(outFile, `${header}${body};\n`, "utf8");

  console.log(`Wrote ${all.length} questions to ${outFile}`);
}

main();
