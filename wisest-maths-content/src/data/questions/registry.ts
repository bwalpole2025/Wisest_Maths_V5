import type { Question } from "@/lib/types";
import {
  SUBTOPICS as MATHS_SUBTOPICS,
  subtopicBySlug as mathsBySlug,
  subtopicById as mathsById,
  loadSubtopic as loadMathsSubtopic,
} from "./a-level-maths/index";
import {
  SUBTOPICS as FM_SUBTOPICS,
  subtopicBySlug as fmBySlug,
  subtopicById as fmById,
  loadSubtopic as loadFmSubtopic,
} from "./a-level-further-maths/index";
import {
  SUBTOPICS as GCSE_SUBTOPICS,
  subtopicBySlug as gcseBySlug,
  subtopicById as gcseById,
  loadSubtopic as loadGcseSubtopic,
} from "./gcse/index";

export type { SubtopicEntry } from "./a-level-maths/index";

export const SUBTOPICS = [...MATHS_SUBTOPICS, ...FM_SUBTOPICS, ...GCSE_SUBTOPICS];

export function subtopicBySlug(slug: string) {
  return mathsBySlug(slug) ?? fmBySlug(slug) ?? gcseBySlug(slug);
}

export function subtopicById(id: string) {
  return mathsById(id) ?? fmById(id) ?? gcseById(id);
}

export function slugForSubtopicId(id: string): string {
  return subtopicById(id)?.slug ?? id;
}

export async function loadSubtopic(slug: string): Promise<Question[]> {
  if (mathsBySlug(slug)) return loadMathsSubtopic(slug);
  if (fmBySlug(slug)) return loadFmSubtopic(slug);
  if (gcseBySlug(slug)) return loadGcseSubtopic(slug);
  throw new Error(`Unknown subtopic slug: "${slug}"`);
}

export async function loadAllQuestions(): Promise<Question[]> {
  const groups = await Promise.all(SUBTOPICS.map((s) => s.load()));
  return groups.flat();
}
