import type { Question } from "@/lib/types";
import { slugForSubtopicId } from "@/data/questions/registry";

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
import { questions as reciprocalAndInverseTrig } from "@/data/questions/a-level-maths/year-2-pure/reciprocal-and-inverse-trig-functions";
import { questions as compoundAndDoubleAngles } from "@/data/questions/a-level-maths/year-2-pure/compound-and-double-angles";
import { questions as rSinThetaPlusAlpha } from "@/data/questions/a-level-maths/year-2-pure/the-form-rsin-theta-plus-alpha";
import { questions as parametricCurves } from "@/data/questions/a-level-maths/year-2-pure/parametric-curves";
import { questions as parametricModelling } from "@/data/questions/a-level-maths/year-2-pure/parametric-modelling";
import { questions as standardDerivatives } from "@/data/questions/a-level-maths/year-2-pure/standard-derivatives";
import { questions as productQuotientChain } from "@/data/questions/a-level-maths/year-2-pure/product-quotient-chain";
import { questions as implicitDifferentiation } from "@/data/questions/a-level-maths/year-2-pure/implicit-differentiation";
import { questions as parametricDifferentiation } from "@/data/questions/a-level-maths/year-2-pure/parametric-differentiation";
import { questions as ratesOfChange } from "@/data/questions/a-level-maths/year-2-pure/rates-of-change";
import { questions as locatingRootsAndIteration } from "@/data/questions/a-level-maths/year-2-pure/locating-roots-and-iteration";
import { questions as newtonRaphson } from "@/data/questions/a-level-maths/year-2-pure/newton-raphson";
import { questions as numericalIntegration } from "@/data/questions/a-level-maths/year-2-pure/numerical-integration";
import { questions as standardIntegrals } from "@/data/questions/a-level-maths/year-2-pure/standard-integrals";
import { questions as secondDerivativesAndCurveBehaviour } from "@/data/questions/a-level-maths/year-2-pure/second-derivatives-and-curve-behaviour";
import { questions as integrationBySubstitution } from "@/data/questions/a-level-maths/year-2-pure/integration-by-substitution";
import { questions as integrationByParts } from "@/data/questions/a-level-maths/year-2-pure/integration-by-parts";
import { questions as integrationWithPartialFractions } from "@/data/questions/a-level-maths/year-2-pure/integration-with-partial-fractions";
import { questions as areasAndFurtherApplications } from "@/data/questions/a-level-maths/year-2-pure/areas-and-further-applications";
import { questions as differentialEquations } from "@/data/questions/a-level-maths/year-2-pure/differential-equations";
import { questions as vectorsInThreeDimensions } from "@/data/questions/a-level-maths/year-2-pure/vectors-in-three-dimensions";
import { questions as regressionAndCorrelation } from "@/data/questions/a-level-maths/year-2-stats/regression-and-correlation";
import { questions as conditionalProbability } from "@/data/questions/a-level-maths/year-2-stats/conditional-probability";
import { questions as theNormalDistribution } from "@/data/questions/a-level-maths/year-2-stats/the-normal-distribution";
import { questions as normalApproximationToBinomial } from "@/data/questions/a-level-maths/year-2-stats/normal-approximation-to-binomial";
import { questions as hypothesisTestingNormal } from "@/data/questions/a-level-maths/year-2-stats/hypothesis-testing-normal";
import { questions as moments } from "@/data/questions/a-level-maths/year-2-mech/moments";
import { questions as forcesAndFriction } from "@/data/questions/a-level-maths/year-2-mech/forces-and-friction";
import { questions as projectiles } from "@/data/questions/a-level-maths/year-2-mech/projectiles";
import { questions as applicationsOfForces } from "@/data/questions/a-level-maths/year-2-mech/applications-of-forces";
import { questions as furtherKinematics } from "@/data/questions/a-level-maths/year-2-mech/further-kinematics";
import { questions as complexArithmetic } from "@/data/questions/a-level-further-maths/year-1-pure/complex-arithmetic";
import { questions as argand } from "@/data/questions/a-level-further-maths/year-1-pure/argand";
import { questions as rootsPolynomials } from "@/data/questions/a-level-further-maths/year-1-pure/roots-polynomials";
import { questions as induction } from "@/data/questions/a-level-further-maths/year-1-pure/induction";
import { questions as matrices } from "@/data/questions/a-level-further-maths/year-1-pure/matrices";
import { questions as linearTransformations } from "@/data/questions/a-level-further-maths/year-1-pure/linear-transformations";
import { questions as series } from "@/data/questions/a-level-further-maths/year-1-pure/series";
import { questions as vectorsLinesPlanes } from "@/data/questions/a-level-further-maths/year-1-pure/vectors-lines-planes";

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
  ...reciprocalAndInverseTrig,
  ...compoundAndDoubleAngles,
  ...rSinThetaPlusAlpha,
  ...parametricCurves,
  ...parametricModelling,
  ...standardDerivatives,
  ...productQuotientChain,
  ...implicitDifferentiation,
  ...parametricDifferentiation,
  ...ratesOfChange,
  ...locatingRootsAndIteration,
  ...newtonRaphson,
  ...numericalIntegration,
  ...standardIntegrals,
  ...secondDerivativesAndCurveBehaviour,
  ...integrationBySubstitution,
  ...integrationByParts,
  ...integrationWithPartialFractions,
  ...areasAndFurtherApplications,
  ...differentialEquations,
  ...vectorsInThreeDimensions,
  ...regressionAndCorrelation,
  ...conditionalProbability,
  ...theNormalDistribution,
  ...normalApproximationToBinomial,
  ...hypothesisTestingNormal,
  ...moments,
  ...forcesAndFriction,
  ...projectiles,
  ...applicationsOfForces,
  ...furtherKinematics,
  ...complexArithmetic,
  ...argand,
  ...rootsPolynomials,
  ...induction,
  ...matrices,
  ...linearTransformations,
  ...series,
  ...vectorsLinesPlanes,
];

export function getQuestionById(id: string): Question | undefined {
  return allQuestions.find((q) => q.id === id);
}
