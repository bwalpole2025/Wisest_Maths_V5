#!/usr/bin/env node
/**
 * Builds src/data/question-summaries.json from the live question bank.
 * Run after adding or regenerating any subtopic so lightweight pages
 * (landing, dashboard, curriculum) never need to import all ~5k questions.
 */

import { writeFileSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const outPath = resolve(__dirname, "../src/data/question-summaries.json");

const { allQuestions } = await import("../src/lib/questions.ts");
const { SUBTOPICS } = await import("../src/data/questions/a-level-maths/index.ts");

const subtopics = SUBTOPICS.map((entry) => {
  const qs = allQuestions.filter((q) => q.subtopicId === entry.id);
  return {
    id: entry.id,
    name: entry.name,
    slug: entry.slug,
    gradient: entry.gradient,
    blurb: entry.blurb,
    order: entry.order,
    topic: qs[0]?.topic ?? "Year 1 Pure",
    level: qs[0]?.level ?? "A-Level Maths",
    count: qs.length,
    easy: qs.filter((q) => q.difficulty === "Easy").length,
    intermediate: qs.filter((q) => q.difficulty === "Intermediate").length,
    hard: qs.filter((q) => q.difficulty === "Hard").length,
  };
}).sort((a, b) => a.order - b.order);

const payload = {
  generatedAt: new Date().toISOString(),
  stats: {
    total: allQuestions.length,
    subtopics: subtopics.length,
    easy: allQuestions.filter((q) => q.difficulty === "Easy").length,
    intermediate: allQuestions.filter((q) => q.difficulty === "Intermediate").length,
    hard: allQuestions.filter((q) => q.difficulty === "Hard").length,
    steps: allQuestions.reduce((n, q) => n + q.workedSolution.steps.length, 0),
  },
  subtopics,
  questionIds: allQuestions.map((q) => q.id),
};

writeFileSync(outPath, `${JSON.stringify(payload, null, 2)}\n`);
console.log(`Wrote summaries (${payload.stats.total} questions, ${subtopics.length} subtopics) to ${outPath}`);
