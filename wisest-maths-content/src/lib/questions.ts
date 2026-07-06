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
import { questions as straightLines } from "@/data/questions/a-level-maths/year-1-pure/straight-lines";
import { questions as circles } from "@/data/questions/a-level-maths/year-1-pure/circles";
import { questions as binomial } from "@/data/questions/a-level-maths/year-1-pure/binomial-expansion";
import { questions as triangleTrig } from "@/data/questions/a-level-maths/year-1-pure/triangle-trigonometry";
import { questions as trigGraphs } from "@/data/questions/a-level-maths/year-1-pure/trigonometric-graphs";
import { questions as trigIdentities } from "@/data/questions/a-level-maths/year-1-pure/identities-and-equations";
import { questions as exponentials } from "@/data/questions/a-level-maths/year-1-pure/exponential-functions";
import { questions as logarithms } from "@/data/questions/a-level-maths/year-1-pure/logarithms";
import { questions as expModelling } from "@/data/questions/a-level-maths/year-1-pure/exponential-modelling";
import { questions as differentiation } from "@/data/questions/a-level-maths/year-1-pure/first-principles-and-derivatives";
import { questions as tangentsNormals } from "@/data/questions/a-level-maths/year-1-pure/tangents-and-normals";
import { questions as stationaryPoints } from "@/data/questions/a-level-maths/year-1-pure/stationary-points";
import { questions as optimisation } from "@/data/questions/a-level-maths/year-1-pure/optimisation";
import { questions as indefiniteIntegration } from "@/data/questions/a-level-maths/year-1-pure/indefinite-integration";
import { questions as definiteIntegration } from "@/data/questions/a-level-maths/year-1-pure/definite-integration-and-areas";
import { questions as vectorBasics } from "@/data/questions/a-level-maths/year-1-pure/vector-basics";
import { questions as vectorGeometry } from "@/data/questions/a-level-maths/year-1-pure/vector-geometry";
import { questions as modellingInMechanics } from "@/data/questions/a-level-maths/year-1-mech/modelling-in-mechanics";
import { questions as kinematicsGraphs } from "@/data/questions/a-level-maths/year-1-mech/kinematics-graphs";
import { questions as constantAcceleration } from "@/data/questions/a-level-maths/year-1-mech/constant-acceleration";
import { questions as variableAcceleration } from "@/data/questions/a-level-maths/year-1-mech/variable-acceleration";
import { questions as forcesAndNewtonsLaws } from "@/data/questions/a-level-maths/year-1-mech/forces-and-newtons-laws";
import { questions as connectedParticles } from "@/data/questions/a-level-maths/year-1-mech/connected-particles";
import { questions as sampling } from "@/data/questions/a-level-maths/year-1-stats/sampling";
import { questions as locationSpread } from "@/data/questions/a-level-maths/year-1-stats/measures-of-location-and-spread";
import { questions as dataPresentation } from "@/data/questions/a-level-maths/year-1-stats/data-presentation";
import { questions as correlationRegression } from "@/data/questions/a-level-maths/year-1-stats/correlation-and-regression";
import { questions as probability } from "@/data/questions/a-level-maths/year-1-stats/probability";
import { questions as discreteRandomVariables } from "@/data/questions/a-level-maths/year-1-stats/discrete-random-variables";
import { questions as theBinomialDistribution } from "@/data/questions/a-level-maths/year-1-stats/the-binomial-distribution";
import { questions as hypothesisTesting } from "@/data/questions/a-level-maths/year-1-stats/hypothesis-testing";
import { questions as largeDataSetFluency } from "@/data/questions/a-level-maths/year-1-stats/large-data-set-fluency";
import { questions as proofByContradiction } from "@/data/questions/a-level-maths/year-2-pure/proof-by-contradiction";
import { questions as algebraicAndPartialFractions } from "@/data/questions/a-level-maths/year-2-pure/algebraic-and-partial-fractions";
import { questions as functionsAndTheirGraphs } from "@/data/questions/a-level-maths/year-2-pure/functions-and-their-graphs";
import { questions as furtherTransformations } from "@/data/questions/a-level-maths/year-2-pure/further-transformations";
import { questions as arithmeticSequencesAndSeries } from "@/data/questions/a-level-maths/year-2-pure/arithmetic-sequences-and-series";
import { questions as geometricSequencesAndSeries } from "@/data/questions/a-level-maths/year-2-pure/geometric-sequences-and-series";
import { questions as recurrenceAndGeneralSequences } from "@/data/questions/a-level-maths/year-2-pure/recurrence-and-general-sequences";
import { questions as binomialExpansionRationalPowers } from "@/data/questions/a-level-maths/year-2-pure/binomial-expansion-rational-powers";
import { questions as radiansArcsAndSectors } from "@/data/questions/a-level-maths/year-2-pure/radians-arcs-and-sectors";
import { questions as smallAngleApproximations } from "@/data/questions/a-level-maths/year-2-pure/small-angle-approximations";
import { questions as reciprocalAndInverseTrigFunctions } from "@/data/questions/a-level-maths/year-2-pure/reciprocal-and-inverse-trig-functions";
import { questions as conditionalProbability } from "@/data/questions/a-level-maths/year-2-stats/conditional-probability";

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
  ...straightLines,
  ...circles,
  ...binomial,
  ...triangleTrig,
  ...trigGraphs,
  ...trigIdentities,
  ...exponentials,
  ...logarithms,
  ...expModelling,
  ...differentiation,
  ...tangentsNormals,
  ...stationaryPoints,
  ...optimisation,
  ...indefiniteIntegration,
  ...definiteIntegration,
  ...vectorBasics,
  ...vectorGeometry,
  ...modellingInMechanics,
  ...kinematicsGraphs,
  ...constantAcceleration,
  ...variableAcceleration,
  ...forcesAndNewtonsLaws,
  ...connectedParticles,
  ...sampling,
  ...locationSpread,
  ...dataPresentation,
  ...correlationRegression,
  ...probability,
  ...discreteRandomVariables,
  ...theBinomialDistribution,
  ...hypothesisTesting,
  ...largeDataSetFluency,
  ...proofByContradiction,
  ...algebraicAndPartialFractions,
  ...functionsAndTheirGraphs,
  ...furtherTransformations,
  ...arithmeticSequencesAndSeries,
  ...geometricSequencesAndSeries,
  ...recurrenceAndGeneralSequences,
  ...binomialExpansionRationalPowers,
  ...radiansArcsAndSectors,
  ...smallAngleApproximations,
  ...reciprocalAndInverseTrigFunctions,
  ...conditionalProbability,
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
