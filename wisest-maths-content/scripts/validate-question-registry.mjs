#!/usr/bin/env node
/**
 * Guards against duplicate-subtopic / duplicate-ID mistakes across all registries.
 */

import { readFileSync, existsSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, "..");
const registryPath = resolve(root, "src/data/questions/registry.ts");
const questionsPath = resolve(root, "src/lib/questions.ts");
const summariesPath = resolve(root, "src/data/question-summaries.json");

const errors = [];

const registrySrc = readFileSync(registryPath, "utf8");
const mathsIndex = readFileSync(resolve(root, "src/data/questions/a-level-maths/index.ts"), "utf8");
const fmIndex = readFileSync(resolve(root, "src/data/questions/a-level-further-maths/index.ts"), "utf8");
const gcseIndex = readFileSync(resolve(root, "src/data/questions/gcse/index.ts"), "utf8");

const subtopicIds = [
  ...[...mathsIndex.matchAll(/id:\s*"([^"]+)"/g)].map((m) => m[1]),
  ...[...fmIndex.matchAll(/id:\s*"([^"]+)"/g)].map((m) => m[1]),
  ...[...gcseIndex.matchAll(/id:\s*"([^"]+)"/g)].map((m) => m[1]),
];

const slugLoads = [
  ...[...mathsIndex.matchAll(/load:\s*\(\)\s*=>\s*import\("\.\/([^"]+)"\)/g)].map((m) => m[1]),
  ...[...fmIndex.matchAll(/load:\s*\(\)\s*=>\s*import\("\.\/([^"]+)"\)/g)].map((m) => m[1]),
  ...[...gcseIndex.matchAll(/load:\s*\(\)\s*=>\s*import\("\.\/([^"]+)"\)/g)].map((m) => m[1]),
];

const dupSubtopicIds = subtopicIds.filter((id, i) => subtopicIds.indexOf(id) !== i);
if (dupSubtopicIds.length) {
  errors.push(`Duplicate subtopic ids: ${[...new Set(dupSubtopicIds)].join(", ")}`);
}

const questionsSrc = readFileSync(questionsPath, "utf8");
const eagerImports = [
  ...[...questionsSrc.matchAll(/from "@\/data\/questions\/a-level-maths\/([^"]+)"/g)].map((m) => m[1]),
  ...[...questionsSrc.matchAll(/from "@\/data\/questions\/a-level-further-maths\/([^"]+)"/g)].map((m) => m[1]),
  ...[...questionsSrc.matchAll(/from "@\/data\/questions\/gcse\/([^"]+)"/g)].map((m) => m[1]),
];

if (slugLoads.length !== eagerImports.length) {
  errors.push(
    `Registry/import mismatch: ${slugLoads.length} dynamic loaders vs ${eagerImports.length} eager imports.`,
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

if (!registrySrc.includes("MATHS_SUBTOPICS") || !registrySrc.includes("FM_SUBTOPICS")) {
  errors.push("registry.ts must merge a-level-maths and a-level-further-maths SUBTOPICS.");
}

if (errors.length) {
  console.error("Question registry validation failed:\n");
  for (const err of errors) console.error(`  • ${err}`);
  process.exit(1);
}

console.log(`Question registry OK (${slugLoads.length} subtopics).`);
