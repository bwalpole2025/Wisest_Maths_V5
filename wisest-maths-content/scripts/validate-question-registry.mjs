#!/usr/bin/env node
/**
 * Guards against the duplicate-subtopic / duplicate-ID mistakes that corrupt
 * webpack's module graph and trigger:
 *   __webpack_modules__[moduleId] is not a function
 */

import { readFileSync, existsSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, "..");
const indexPath = resolve(root, "src/data/questions/a-level-maths/index.ts");
const questionsPath = resolve(root, "src/lib/questions.ts");
const summariesPath = resolve(root, "src/data/question-summaries.json");

const errors = [];

const indexSrc = readFileSync(indexPath, "utf8");
const subtopicIds = [...indexSrc.matchAll(/id:\s*"([^"]+)"/g)].map((m) => m[1]);
const slugLoads = [...indexSrc.matchAll(/load:\s*\(\)\s*=>\s*import\("\.\/([^"]+)"\)/g)].map((m) => m[1]);

const dupSubtopicIds = subtopicIds.filter((id, i) => subtopicIds.indexOf(id) !== i);
if (dupSubtopicIds.length) {
  errors.push(`Duplicate subtopic ids in index.ts: ${[...new Set(dupSubtopicIds)].join(", ")}`);
}

const eagerImports = [...readFileSync(questionsPath, "utf8").matchAll(
  /from "@\/data\/questions\/a-level-maths\/([^"]+)"/g,
)].map((m) => m[1]);

if (slugLoads.length !== eagerImports.length) {
  errors.push(
    `Registry/import mismatch: index.ts has ${slugLoads.length} dynamic loaders but questions.ts has ${eagerImports.length} eager imports.`,
  );
}

if (!existsSync(summariesPath)) {
  errors.push("Missing src/data/question-summaries.json — run: npm run sync-summaries");
} else {
  try {
    const summaries = JSON.parse(readFileSync(summariesPath, "utf8"));
    if (summaries.subtopics?.length !== slugLoads.length) {
      errors.push(
        `Stale question-summaries.json (${summaries.subtopics?.length} subtopics vs ${slugLoads.length} in registry). Run: npm run sync-summaries`,
      );
    }
  } catch {
    errors.push("Invalid src/data/question-summaries.json — run: npm run sync-summaries");
  }
}

if (errors.length) {
  console.error("Question registry validation failed:\n");
  for (const err of errors) console.error(`  • ${err}`);
  process.exit(1);
}

console.log(`Question registry OK (${slugLoads.length} subtopics).`);
