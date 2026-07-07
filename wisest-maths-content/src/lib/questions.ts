import type { Question } from "@/lib/types";
import { SUBTOPICS, subtopicBySlug, slugForSubtopicId } from "@/data/questions/a-level-maths";
import { allEagerQuestions } from "@/data/questions/a-level-maths/eager-banks";

// Eager imports are generated from the subtopic registry so new banks cannot be
// registered in index.ts without also joining allQuestions (see eager-banks.ts).
export { slugForSubtopicId };

export const allQuestions: Question[] = allEagerQuestions;

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
