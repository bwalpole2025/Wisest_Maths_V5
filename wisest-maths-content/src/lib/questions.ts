import type { Question } from "@/lib/types";
import { SUBTOPICS, subtopicBySlug, slugForSubtopicId } from "@/data/questions/a-level-maths";

// Eager imports — used only in server components (landing, dashboard, subtopic
// pages, solve pages) for build-time stats and summaries. Client components use
// the dynamic loaders in the registry instead, so the dataset never ships to the
// browser in one lump.
import { questions as argumentAndNotation } from "@/data/questions/a-level-maths/year-1-pure/argument-and-notation";
import { questions as proofDeduction } from "@/data/questions/a-level-maths/year-1-pure/proof-by-deduction-and-exhaustion";
import { questions as disproof } from "@/data/questions/a-level-maths/year-1-pure/disproof-by-counterexample";
import { questions as indicesSurds } from "@/data/questions/a-level-maths/year-1-pure/indices-and-surds";
import { questions as quadratics } from "@/data/questions/a-level-maths/year-1-pure/quadratic-functions";
import { questions as simultaneous } from "@/data/questions/a-level-maths/year-1-pure/simultaneous-equations";
import { questions as inequalities } from "@/data/questions/a-level-maths/year-1-pure/inequalities";
import { questions as polynomials } from "@/data/questions/a-level-maths/year-1-pure/polynomials-and-factor-theorem";
import { questions as curveSketching } from "@/data/questions/a-level-maths/year-1-pure/curve-sketching";
import { questions as graphTransformations } from "@/data/questions/a-level-maths/year-1-pure/transformations-of-graphs";

export { slugForSubtopicId };

export const allQuestions: Question[] = [
  ...argumentAndNotation,
  ...proofDeduction,
  ...disproof,
  ...indicesSurds,
  ...quadratics,
  ...simultaneous,
  ...inequalities,
  ...polynomials,
  ...curveSketching,
  ...graphTransformations,
];

export interface SubtopicSummary {
  id: string;
  name: string;
  topic: string;
  level: string;
  count: number;
  easy: number;
  intermediate: number;
  hard: number;
  gradient: string;
  blurb: string;
  slug: string;
  order: number;
}

/** Summaries built from the registry (metadata) + eager data (counts). */
export const subtopics: SubtopicSummary[] = SUBTOPICS.map((entry) => {
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

export function getQuestionById(id: string): Question | undefined {
  return allQuestions.find((q) => q.id === id);
}

export function getSubtopicBySlug(slug: string): SubtopicSummary | undefined {
  return subtopics.find((s) => s.slug === slug);
}

export function getQuestionsBySubtopicSlug(slug: string): Question[] {
  const entry = subtopicBySlug(slug);
  return entry ? allQuestions.filter((q) => q.subtopicId === entry.id) : [];
}

export const stats = {
  total: allQuestions.length,
  subtopics: subtopics.length,
  easy: allQuestions.filter((q) => q.difficulty === "Easy").length,
  intermediate: allQuestions.filter((q) => q.difficulty === "Intermediate").length,
  hard: allQuestions.filter((q) => q.difficulty === "Hard").length,
  steps: allQuestions.reduce((n, q) => n + q.workedSolution.steps.length, 0),
};
