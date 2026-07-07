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

const ARRAY_EXPORT_RE =
  /export const (?:batch|questions): Question\[\] = (\[[\s\S]*\]);/;

function readQuestionsFile(file) {
  const text = fs.readFileSync(file, "utf8").trim();
  if (file.endsWith(".json")) {
    const data = JSON.parse(text);
    if (!Array.isArray(data)) throw new Error(`${file}: expected JSON array`);
    return data;
  }

  const match = ARRAY_EXPORT_RE.exec(text);
  if (!match) throw new Error(`${file}: could not find Question[] export`);
  return JSON.parse(match[1]);
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
