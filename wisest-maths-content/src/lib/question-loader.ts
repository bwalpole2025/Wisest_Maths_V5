import type { Question } from "@/lib/types";
import { loadSubtopic, slugForSubtopicId } from "@/data/questions/registry";

/** e.g. al.y2.mech.moments.q001 → al.y2.mech.moments */
export function subtopicIdFromQuestionId(id: string): string {
  return id.replace(/\.q\d+$/, "");
}

/** Load a single question by id — one subtopic chunk only (not the full bank). */
export async function loadQuestionById(id: string): Promise<Question | undefined> {
  const slug = slugForSubtopicId(subtopicIdFromQuestionId(id));
  const questions = await loadSubtopic(slug);
  return questions.find((q) => q.id === id);
}

export interface QuestionWithSiblings {
  question: Question;
  siblings: Question[];
  index: number;
}

/** Load one question plus prev/next siblings within its subtopic. */
export async function loadQuestionWithSiblings(id: string): Promise<QuestionWithSiblings | undefined> {
  const slug = slugForSubtopicId(subtopicIdFromQuestionId(id));
  const siblings = await loadSubtopic(slug);
  const index = siblings.findIndex((q) => q.id === id);
  if (index === -1) return undefined;
  return { question: siblings[index], siblings, index };
}
