import summaries from "@/data/question-summaries.json";

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

/** Lightweight subtopic list — no question-bank imports. */
export const subtopics: SubtopicSummary[] = summaries.subtopics;

export const stats = summaries.stats;

export function getSubtopicBySlug(slug: string): SubtopicSummary | undefined {
  return subtopics.find((s) => s.slug === slug);
}

export const questionIds: string[] = summaries.questionIds;
