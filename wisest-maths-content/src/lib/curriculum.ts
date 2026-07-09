import rawData from "../../subtopics.json";
import topicMap from "@/data/curriculum-topics.json";
import { subtopics as builtSummaries } from "@/lib/question-summaries";

/**
 * Curriculum navigation model.
 *
 * The whole maths curriculum lives in `subtopics.json` (the parsed Wisest
 * specification). This module turns that flat list into the browsable
 * hierarchy the app navigates:
 *
 *   Qualification → Year / Tier → Module → Topic → Subtopic → (question bank)
 *
 * - Qualification: GCSE Maths · A-Level Maths · A-Level Further Maths
 * - Year / Tier:   GCSE → Foundation / Higher; A-Level & FM → Year 1 / Year 2
 * - Module:        the `strand` (Pure / Mechanics / Statistics, or the GCSE areas)
 * - Topic:         GCSE uses the curriculum's own `topic`; A-Level & FM use the
 *                  DfE subject-content sections in `curriculum-topics.json`
 * - Subtopic:      the individual `name`; links to its real question bank when built
 */

export type QualId = "GCSE" | "ALEVEL_MATHS" | "ALEVEL_FM";

interface RawSub {
  id: string;
  qualification: QualId;
  year: string | null;
  strand: string;
  topic: string;
  name: string;
  tier: string | null;
  description: string;
}

/** Strip the trailing "continued" parse-artifact from a handful of ids. */
const cleanId = (id: string) => id.replace(/continued$/, "");

const BUILT_ID_ALIASES: Record<string, string> = {
  "fm.y2.pure.second-order-des": "fm.y2.pure.second-order-differential-equations",
  "fm.y2.pure.de-modelling": "fm.y2.pure.modelling-differential-equations",
  "fm.y2.pure.coupled-des": "fm.y2.pure.coupled-differential-equations",
  "fm.y2.stats.variance-inference": "fm.y2.stats.inference-variance",
};

const builtIdFor = (id: string) => BUILT_ID_ALIASES[cleanId(id)] ?? cleanId(id);

const SUBS: RawSub[] = (rawData as { subtopics: RawSub[] }).subtopics.map((s) => ({
  ...s,
  id: cleanId(s.id),
}));

type TopicMap = Record<string, Record<string, Record<string, Record<string, string>>>>;
const TOPICS = topicMap as unknown as TopicMap;

/** Built subtopics (real 70-question banks), keyed by cleaned curriculum id
 *  so parse-artifact ids (e.g. "…definite-integrationcontinued") still match
 *  the cleaned ids used throughout this module. */
const built = new Map(builtSummaries.map((s) => [cleanId(s.id), s]));

/* --------------------------------------------------------------- metadata */

const GRADS = [
  "from-sky-400 to-indigo-500",
  "from-indigo-400 to-violet-500",
  "from-violet-400 to-fuchsia-500",
  "from-fuchsia-400 to-rose-500",
  "from-rose-400 to-orange-500",
  "from-amber-400 to-emerald-500",
  "from-emerald-400 to-teal-500",
  "from-teal-400 to-cyan-500",
  "from-cyan-400 to-blue-500",
  "from-blue-400 to-violet-500",
];
const gradAt = (i: number) => GRADS[i % GRADS.length];

interface StrandMeta {
  label: string;
  glyph: string;
  grad: string;
}
/** Strand display, a maths glyph, and a signature gradient. */
const STRAND: Record<string, StrandMeta> = {
  pure: { label: "Pure", glyph: "∫", grad: "from-sky-400 to-indigo-500" },
  mech: { label: "Mechanics", glyph: "⇀", grad: "from-amber-400 to-emerald-500" },
  stats: { label: "Statistics", glyph: "x̄", grad: "from-emerald-400 to-teal-500" },
  number: { label: "Number", glyph: "№", grad: "from-sky-400 to-indigo-500" },
  algebra: { label: "Algebra", glyph: "𝑥", grad: "from-violet-400 to-fuchsia-500" },
  ratio: { label: "Ratio & proportion", glyph: "∝", grad: "from-rose-400 to-orange-500" },
  geometry: { label: "Geometry & measures", glyph: "△", grad: "from-emerald-400 to-teal-500" },
  probability: { label: "Probability", glyph: "P", grad: "from-fuchsia-400 to-rose-500" },
  statistics: { label: "Statistics", glyph: "x̄", grad: "from-cyan-400 to-blue-500" },
};

/** Module order within each qualification. */
const MODULE_ORDER: Record<QualId, string[]> = {
  ALEVEL_MATHS: ["pure", "mech", "stats"],
  ALEVEL_FM: ["pure", "mech", "stats"],
  GCSE: ["number", "algebra", "ratio", "geometry", "probability", "statistics"],
};

export interface SplitMeta {
  key: string;
  slug: string;
  label: string;
  blurb: string;
}
export interface QualMeta {
  id: QualId;
  slug: string;
  label: string;
  mono: string;
  grad: string;
  blurb: string;
  splitKind: "tier" | "year";
  splits: SplitMeta[];
}

export const QUALS: QualMeta[] = [
  {
    id: "GCSE",
    slug: "gcse",
    label: "GCSE Maths",
    mono: "GCSE",
    grad: "from-emerald-400 to-teal-500",
    blurb: "The full GCSE specification across Number, Algebra, Ratio, Geometry, Probability and Statistics.",
    splitKind: "tier",
    splits: [
      { key: "F", slug: "foundation", label: "Foundation", blurb: "Grades 1–5 — a secure base across every strand." },
      { key: "H", slug: "higher", label: "Higher", blurb: "Grades 4–9 — all Foundation content plus the higher-only material." },
    ],
  },
  {
    id: "ALEVEL_MATHS",
    slug: "a-level-maths",
    label: "A-Level Maths",
    mono: "AL",
    grad: "from-sky-400 to-indigo-500",
    blurb: "Pure, Mechanics and Statistics across the two years of A-Level Mathematics.",
    splitKind: "year",
    splits: [
      { key: "y1", slug: "year-1", label: "Year 1", blurb: "AS-level — the foundations of Pure, Mechanics and Statistics." },
      { key: "y2", slug: "year-2", label: "Year 2", blurb: "The full A-level — Year 1 extended and deepened." },
    ],
  },
  {
    id: "ALEVEL_FM",
    slug: "further-maths",
    label: "A-Level Further Maths",
    mono: "FM",
    grad: "from-violet-400 to-fuchsia-500",
    blurb: "Further Pure, Mechanics and Statistics — the extension course for confident mathematicians.",
    splitKind: "year",
    splits: [
      { key: "y1", slug: "year-1", label: "Year 1", blurb: "AS Further Maths — complex numbers, matrices and beyond." },
      { key: "y2", slug: "year-2", label: "Year 2", blurb: "The full Further Maths course, built on Year 1." },
    ],
  },
];

/* ---------------------------------------------------------------- helpers */

export const plural = (n: number, w: string) => `${n} ${w}${n === 1 ? "" : "s"}`;

export const slugify = (s: string) =>
  s
    .toLowerCase()
    .replace(/['’]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

const qualBySlug = (slug: string) => QUALS.find((q) => q.slug === slug);
const splitBySlug = (q: QualMeta, slug: string) => q.splits.find((s) => s.slug === slug);

/** Subtopics belonging to a qualification + split (tier or year). */
function subsForSplit(qual: QualMeta, split: SplitMeta): RawSub[] {
  if (qual.id === "GCSE") {
    // Foundation = tier F only; Higher = all GCSE content (F plus higher-only H).
    return SUBS.filter((s) => s.qualification === "GCSE" && (split.key === "H" ? true : s.tier === "F"));
  }
  return SUBS.filter((s) => s.qualification === qual.id && s.year === split.key);
}

/** The topic a subtopic belongs to (GCSE from data, else the DfE section map). */
function topicOf(qual: QualMeta, s: RawSub): string {
  if (qual.id === "GCSE") return s.topic;
  const last = s.id.split(".").pop() ?? "";
  return TOPICS?.[s.qualification]?.[s.year ?? ""]?.[s.strand]?.[last] ?? "Other";
}

/* --------------------------------------------------------- view accessors */

export interface QualCard {
  slug: string;
  label: string;
  mono: string;
  grad: string;
  blurb: string;
  splitLabels: string;
  total: number;
  live: number;
}
export function getQualifications(): QualCard[] {
  return QUALS.map((q) => {
    const all = SUBS.filter((s) => s.qualification === q.id);
    return {
      slug: q.slug,
      label: q.label,
      mono: q.mono,
      grad: q.grad,
      blurb: q.blurb,
      splitLabels: q.splits.map((s) => s.label).join(" · "),
      total: all.length,
      live: all.filter((s) => built.has(builtIdFor(s.id))).length,
    };
  });
}

export interface SplitCard {
  slug: string;
  label: string;
  blurb: string;
  grad: string;
  modules: number;
  subtopics: number;
  live: number;
}
export function getSplits(qualSlug: string): { qual: QualMeta; splits: SplitCard[] } | null {
  const qual = qualBySlug(qualSlug);
  if (!qual) return null;
  const splits = qual.splits.map((sp) => {
    const list = subsForSplit(qual, sp);
    const modules = new Set(list.map((s) => s.strand)).size;
    return {
      slug: sp.slug,
      label: sp.label,
      blurb: sp.blurb,
      grad: qual.grad,
      modules,
      subtopics: list.length,
      live: list.filter((s) => built.has(builtIdFor(s.id))).length,
    };
  });
  return { qual, splits };
}

export interface ModuleCard {
  slug: string;
  label: string;
  glyph: string;
  grad: string;
  topics: number;
  subtopics: number;
  live: number;
}
export function getModules(
  qualSlug: string,
  splitSlug: string,
): { qual: QualMeta; split: SplitMeta; modules: ModuleCard[] } | null {
  const qual = qualBySlug(qualSlug);
  if (!qual) return null;
  const split = splitBySlug(qual, splitSlug);
  if (!split) return null;
  const list = subsForSplit(qual, split);
  const order = MODULE_ORDER[qual.id];
  const strands = [...new Set(list.map((s) => s.strand))].sort(
    (a, b) => order.indexOf(a) - order.indexOf(b),
  );
  const modules = strands.map((strand) => {
    const inMod = list.filter((s) => s.strand === strand);
    const meta = STRAND[strand] ?? { label: strand, glyph: "•", grad: "from-slate-400 to-slate-500" };
    return {
      slug: strand === "mech" ? "mechanics" : strand === "stats" ? "statistics" : strand,
      label: meta.label,
      glyph: meta.glyph,
      grad: meta.grad,
      topics: new Set(inMod.map((s) => topicOf(qual, s))).size,
      subtopics: inMod.length,
      live: inMod.filter((s) => built.has(builtIdFor(s.id))).length,
    };
  });
  return { qual, split, modules };
}

const strandFromModuleSlug = (slug: string) =>
  slug === "mechanics" ? "mech" : slug === "statistics" ? "stats" : slug;

export interface TopicCard {
  slug: string;
  name: string;
  grad: string;
  subtopics: number;
  live: number;
}
export function getTopics(
  qualSlug: string,
  splitSlug: string,
  moduleSlug: string,
): { qual: QualMeta; split: SplitMeta; module: ModuleCard; topics: TopicCard[] } | null {
  const mods = getModules(qualSlug, splitSlug);
  if (!mods) return null;
  const module = mods.modules.find((m) => m.slug === moduleSlug);
  if (!module) return null;
  const strand = strandFromModuleSlug(moduleSlug);
  const list = subsForSplit(mods.qual, mods.split).filter((s) => s.strand === strand);

  // Preserve curriculum order of first appearance.
  const order: string[] = [];
  const groups = new Map<string, RawSub[]>();
  for (const s of list) {
    const t = topicOf(mods.qual, s);
    if (!groups.has(t)) {
      groups.set(t, []);
      order.push(t);
    }
    groups.get(t)!.push(s);
  }
  const topics = order.map((name, i) => {
    const inTopic = groups.get(name)!;
    return {
      slug: slugify(name),
      name,
      grad: gradAt(i),
      subtopics: inTopic.length,
      live: inTopic.filter((s) => built.has(builtIdFor(s.id))).length,
    };
  });
  return { qual: mods.qual, split: mods.split, module, topics };
}

export interface SubtopicItem {
  id: string;
  name: string;
  description: string;
  live: boolean;
  href: string | null;
  higherOnly: boolean;
  grad: string;
  count: number;
  easy: number;
  intermediate: number;
  hard: number;
}
export function getSubtopics(
  qualSlug: string,
  splitSlug: string,
  moduleSlug: string,
  topicSlug: string,
): {
  qual: QualMeta;
  split: SplitMeta;
  module: ModuleCard;
  topic: TopicCard;
  subtopics: SubtopicItem[];
} | null {
  const t = getTopics(qualSlug, splitSlug, moduleSlug);
  if (!t) return null;
  const topic = t.topics.find((x) => x.slug === topicSlug);
  if (!topic) return null;
  const strand = strandFromModuleSlug(moduleSlug);
  const list = subsForSplit(t.qual, t.split).filter(
    (s) => s.strand === strand && slugify(topicOf(t.qual, s)) === topicSlug,
  );
  const subtopics = list.map((s, i) => {
    const b = built.get(builtIdFor(s.id));
    return {
      id: s.id,
      name: s.name,
      description: s.description,
      live: !!b,
      href: b ? `/questions/${b.slug}` : null,
      higherOnly: t.qual.id === "GCSE" && t.split.key === "H" && s.tier === "H",
      grad: b?.gradient ?? gradAt(i),
      count: b?.count ?? 0,
      easy: b?.easy ?? 0,
      intermediate: b?.intermediate ?? 0,
      hard: b?.hard ?? 0,
    };
  });
  return { qual: t.qual, split: t.split, module: t.module, topic, subtopics };
}
