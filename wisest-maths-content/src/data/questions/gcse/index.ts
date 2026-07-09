import type { Question } from "@/lib/types";

/**
 * Subtopic registry — the single index for all GCSE question sets.
 *
 * Mirrors the A-Level registries: each entry knows its slug + display metadata
 * and how to `load()` its questions via a dynamic import, so a subtopic's ~70
 * questions are code-split into their own chunk and only fetched when needed.
 * Physical files live under `./<strand>/*.ts`; consumers only touch this index.
 */
export interface SubtopicEntry {
  slug: string;
  id: string;
  name: string;
  blurb: string;
  gradient: string;
  order: number;
  load: () => Promise<Question[]>;
}

export const SUBTOPICS: SubtopicEntry[] = [
  {
    slug: "ordering-and-comparing-numbers",
    id: "gcse.number.ordering",
    name: "Ordering and comparing numbers",
    blurb:
      "Order integers, decimals and fractions and compare them with $=,\\neq,<,>,\\leq,\\geq$.",
    gradient: "from-sky-400 to-indigo-500",
    order: 1,
    load: () =>
      import("./number/ordering-and-comparing-numbers").then((m) => m.questions),
  },
  {
    slug: "four-operations-and-place-value",
    id: "gcse.number.four-operations",
    name: "Four operations and place value",
    blurb:
      "Formal written methods for integers, decimals and money, and the meaning of each digit's place value.",
    gradient: "from-indigo-400 to-violet-500",
    order: 2,
    load: () =>
      import("./number/four-operations-and-place-value").then((m) => m.questions),
  },
];

export const subtopicBySlug = (slug: string): SubtopicEntry | undefined =>
  SUBTOPICS.find((s) => s.slug === slug);

export const subtopicById = (id: string): SubtopicEntry | undefined =>
  SUBTOPICS.find((s) => s.id === id);

export const slugForSubtopicId = (id: string): string => subtopicById(id)?.slug ?? id;

/** Dynamically load a single subtopic's questions by slug. */
export async function loadSubtopic(slug: string): Promise<Question[]> {
  const entry = subtopicBySlug(slug);
  if (!entry) throw new Error(`Unknown subtopic slug: "${slug}"`);
  return entry.load();
}

/** Dynamically load every GCSE subtopic and flatten into one list. */
export async function loadAllQuestions(): Promise<Question[]> {
  const groups = await Promise.all(SUBTOPICS.map((s) => s.load()));
  return groups.flat();
}
