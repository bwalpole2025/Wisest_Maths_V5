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
  {
    slug: "negative-numbers",
    id: "gcse.number.negatives",
    name: "Negative numbers",
    blurb:
      "Calculate with directed numbers across all four operations, in and out of context, using number lines and sign rules.",
    gradient: "from-violet-400 to-fuchsia-500",
    order: 3,
    load: () => import("./number/negative-numbers").then((m) => m.questions),
  },
  {
    slug: "priority-of-operations",
    id: "gcse.number.order-of-operations",
    name: "Priority of operations",
    blurb:
      "Apply BIDMAS — brackets, indices and roots, then $\\times\\div$, then $+-$ — to evaluate expressions correctly.",
    gradient: "from-fuchsia-400 to-pink-500",
    order: 4,
    load: () => import("./number/priority-of-operations").then((m) => m.questions),
  },
  {
    slug: "factors-multiples-and-primes",
    id: "gcse.number.factors-multiples",
    name: "Factors, multiples and primes",
    blurb:
      "Find factors, multiples and primes, and work out the HCF and LCM by listing.",
    gradient: "from-pink-400 to-rose-500",
    order: 5,
    load: () =>
      import("./number/factors-multiples-and-primes").then((m) => m.questions),
  },
  {
    slug: "prime-factorisation",
    id: "gcse.number.prime-factorisation",
    name: "Prime factorisation",
    blurb:
      "Write numbers as a product of primes in index form and use this to find the HCF and LCM.",
    gradient: "from-rose-400 to-orange-500",
    order: 6,
    load: () => import("./number/prime-factorisation").then((m) => m.questions),
  },
  {
    slug: "systematic-listing",
    id: "gcse.number.systematic-listing",
    name: "Systematic listing",
    blurb:
      "List every outcome or arrangement in a clear order, without omission or repetition, then count them.",
    gradient: "from-orange-400 to-amber-500",
    order: 7,
    load: () => import("./number/systematic-listing").then((m) => m.questions),
  },
  {
    slug: "product-rule-for-counting",
    id: "gcse.number.product-rule",
    name: "Product rule for counting",
    blurb:
      "Count combinations of choices with the product rule ($m\\times n$), including arrangements and restrictions.",
    gradient: "from-amber-400 to-yellow-500",
    order: 8,
    load: () =>
      import("./number/product-rule-for-counting").then((m) => m.questions),
  },
  {
    slug: "powers-and-roots",
    id: "gcse.number.powers-roots",
    name: "Powers and roots",
    blurb:
      "Evaluate squares, cubes and higher powers, and find square and cube roots, recognising the common powers of $2,3,4$ and $5$.",
    gradient: "from-yellow-400 to-lime-500",
    order: 9,
    load: () => import("./number/powers-and-roots").then((m) => m.questions),
  },
  {
    slug: "integer-indices",
    id: "gcse.number.integer-indices",
    name: "Integer indices",
    blurb:
      "Apply the index laws — $a^m\\times a^n$, $a^m\\div a^n$ and $(a^m)^n$ — including the zero and negative indices.",
    gradient: "from-lime-400 to-green-500",
    order: 10,
    load: () => import("./number/integer-indices").then((m) => m.questions),
  },
  {
    slug: "exact-calculation",
    id: "gcse.number.exact-calculation",
    name: "Exact calculation",
    blurb:
      "Calculate exactly with fractions and in terms of $\\pi$, leaving answers unrounded.",
    gradient: "from-green-400 to-emerald-500",
    order: 11,
    load: () => import("./number/exact-calculation").then((m) => m.questions),
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
