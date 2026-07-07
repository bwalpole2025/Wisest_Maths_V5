#!/usr/bin/env node
/**
 * Keep eager server-side question imports in sync with the subtopic registry.
 *
 * Source of truth: wisest-maths-content/src/data/questions/a-level-maths/index.ts
 * Generated file: wisest-maths-content/src/data/questions/a-level-maths/eager-banks.ts
 *
 * Usage:
 *   node scripts/sync_question_banks.mjs          # write eager-banks.ts
 *   node scripts/sync_question_banks.mjs --check  # exit 1 if out of sync
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, "..");
const INDEX = path.join(ROOT, "wisest-maths-content/src/data/questions/a-level-maths/index.ts");
const OUT = path.join(ROOT, "wisest-maths-content/src/data/questions/a-level-maths/eager-banks.ts");

function toVarName(slug) {
  const parts = slug.split("-");
  return parts[0] + parts.slice(1).map((p) => p.charAt(0).toUpperCase() + p.slice(1)).join("");
}

function parseRegistry(source) {
  const blocks = source.split(/\n  \{/).slice(1);
  const entries = [];
  for (const block of blocks) {
    const slug = block.match(/slug: "([^"]+)"/)?.[1];
    const loadPath = block.match(/import\("\.\/([^"]+)"\)/)?.[1];
    if (slug && loadPath) entries.push({ slug, loadPath });
  }
  if (!entries.length) throw new Error(`No subtopics parsed from ${INDEX}`);
  return entries;
}

function render(entries) {
  const lines = [
    "/**",
    " * AUTO-GENERATED — do not edit by hand.",
    " * Run: npm run sync:questions  (from wisest-maths-content)",
    " * Source: src/data/questions/a-level-maths/index.ts",
    " */",
    'import type { Question } from "@/lib/types";',
    "",
  ];

  const vars = [];
  for (const { slug, loadPath } of entries) {
    const varName = toVarName(slug);
    vars.push(varName);
    lines.push(
      `import { questions as ${varName} } from "@/data/questions/a-level-maths/${loadPath}";`,
    );
  }

  lines.push(
    "",
    "/** Eager imports for server stats, summaries, and subtopic pages. */",
    "export const allEagerQuestions: Question[] = [",
    ...vars.map((v) => `  ...${v},`),
    "];",
    "",
  );

  return lines.join("\n");
}

const checkOnly = process.argv.includes("--check");
const indexSource = fs.readFileSync(INDEX, "utf8");
const next = render(parseRegistry(indexSource));

if (checkOnly) {
  const current = fs.existsSync(OUT) ? fs.readFileSync(OUT, "utf8") : "";
  if (current !== next) {
    console.error("eager-banks.ts is out of sync with index.ts");
    console.error("Run: cd wisest-maths-content && npm run sync:questions");
    process.exit(1);
  }
  console.log(`OK — ${parseRegistry(indexSource).length} subtopics synced`);
  process.exit(0);
}

fs.writeFileSync(OUT, next);
console.log(`Wrote ${OUT} (${parseRegistry(indexSource).length} subtopics)`);
