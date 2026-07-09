import type { Question } from "@/lib/types";

const LEVEL = "A-Level Further Maths";
const TOPIC = "Further Maths Year 2: Statistics (Further Statistics 2)";
const SUBTOPIC = "Inference for variance";
const SUBTOPIC_ID = "fm.y2.stats.inference-variance";

type Difficulty = Question["difficulty"];
type Step = Question["workedSolution"]["steps"][number];
type TestDirection = "greater" | "less" | "two-sided";

interface VarianceCiCase {
  context: string;
  n: number;
  s2: number;
  confidence: "90" | "95" | "99";
}

interface TestCase {
  context: string;
  n: number;
  s2: number;
  claimedVariance: number;
  alpha: "0.05" | "0.01";
  direction: TestDirection;
}

const chi: Record<number, Record<string, number>> = {
  6: { "0.005": 0.676, "0.01": 0.872, "0.025": 1.237, "0.05": 1.635, "0.95": 12.592, "0.975": 14.449, "0.99": 16.812, "0.995": 18.548 },
  7: { "0.005": 0.989, "0.01": 1.239, "0.025": 1.690, "0.05": 2.167, "0.95": 14.067, "0.975": 16.013, "0.99": 18.475, "0.995": 20.278 },
  8: { "0.005": 1.344, "0.01": 1.646, "0.025": 2.180, "0.05": 2.733, "0.95": 15.507, "0.975": 17.535, "0.99": 20.090, "0.995": 21.955 },
  9: { "0.005": 1.735, "0.01": 2.088, "0.025": 2.700, "0.05": 3.325, "0.95": 16.919, "0.975": 19.023, "0.99": 21.666, "0.995": 23.589 },
  10: { "0.005": 2.156, "0.01": 2.558, "0.025": 3.247, "0.05": 3.940, "0.95": 18.307, "0.975": 20.483, "0.99": 23.209, "0.995": 25.188 },
  11: { "0.005": 2.603, "0.01": 3.053, "0.025": 3.816, "0.05": 4.575, "0.95": 19.675, "0.975": 21.920, "0.99": 24.725, "0.995": 26.757 },
  12: { "0.005": 3.074, "0.01": 3.571, "0.025": 4.404, "0.05": 5.226, "0.95": 21.026, "0.975": 23.337, "0.99": 26.217, "0.995": 28.300 },
  14: { "0.005": 4.075, "0.01": 4.660, "0.025": 5.629, "0.05": 6.571, "0.95": 23.685, "0.975": 26.119, "0.99": 29.141, "0.995": 31.319 },
  15: { "0.005": 4.601, "0.01": 5.229, "0.025": 6.262, "0.05": 7.261, "0.95": 24.996, "0.975": 27.488, "0.99": 30.578, "0.995": 32.801 },
  17: { "0.005": 5.697, "0.01": 6.408, "0.025": 7.564, "0.05": 8.672, "0.95": 27.587, "0.975": 30.191, "0.99": 33.409, "0.995": 35.718 },
  18: { "0.005": 6.265, "0.01": 7.015, "0.025": 8.231, "0.05": 9.390, "0.95": 28.869, "0.975": 31.526, "0.99": 34.805, "0.995": 37.156 },
  19: { "0.005": 6.844, "0.01": 7.633, "0.025": 8.907, "0.05": 10.117, "0.95": 30.144, "0.975": 32.852, "0.99": 36.191, "0.995": 38.582 },
  20: { "0.005": 7.434, "0.01": 8.260, "0.025": 9.591, "0.05": 10.851, "0.95": 31.410, "0.975": 34.170, "0.99": 37.566, "0.995": 39.997 },
  22: { "0.005": 8.643, "0.01": 9.542, "0.025": 10.982, "0.05": 12.338, "0.95": 33.924, "0.975": 36.781, "0.99": 40.289, "0.995": 42.796 },
  23: { "0.005": 9.260, "0.01": 10.196, "0.025": 11.689, "0.05": 13.091, "0.95": 35.172, "0.975": 38.076, "0.99": 41.638, "0.995": 44.181 },
  24: { "0.005": 9.886, "0.01": 10.856, "0.025": 12.401, "0.05": 13.848, "0.95": 36.415, "0.975": 39.364, "0.99": 42.980, "0.995": 45.559 },
  25: { "0.005": 10.520, "0.01": 11.524, "0.025": 13.120, "0.05": 14.611, "0.95": 37.652, "0.975": 40.646, "0.99": 44.314, "0.995": 46.928 },
  26: { "0.005": 11.160, "0.01": 12.198, "0.025": 13.844, "0.05": 15.379, "0.95": 38.885, "0.975": 41.923, "0.99": 45.642, "0.995": 48.290 },
  28: { "0.005": 12.461, "0.01": 13.565, "0.025": 15.308, "0.05": 16.928, "0.95": 41.337, "0.975": 44.461, "0.99": 48.278, "0.995": 50.993 },
  30: { "0.005": 13.787, "0.01": 14.953, "0.025": 16.791, "0.05": 18.493, "0.95": 43.773, "0.975": 46.979, "0.99": 50.892, "0.995": 53.672 },
};

const ciKeys = {
  "90": { lower: "0.05", upper: "0.95", alphaText: "0.10" },
  "95": { lower: "0.025", upper: "0.975", alphaText: "0.05" },
  "99": { lower: "0.005", upper: "0.995", alphaText: "0.01" },
} as const;

const qid = (n: number): string => `${SUBTOPIC_ID}.q${String(n).padStart(3, "0")}`;
const fmt = (value: number, dp = 3): string => Number(value.toFixed(dp)).toString();
const pct = (alpha: string): string => `${fmt(Number(alpha) * 100, 1)}%`;
const step = (stepNumber: number, description: string, workingLatex: string, explanation: string): Step => ({
  stepNumber,
  description,
  workingLatex,
  explanation,
  diagram: null,
});

function makeQuestion(
  index: number,
  difficulty: Difficulty,
  marks: number,
  answerType: string,
  tags: string[],
  questionText: string,
  steps: Step[],
  finalAnswer: string,
): Question {
  return {
    id: qid(index),
    level: LEVEL,
    topic: TOPIC,
    subtopic: SUBTOPIC,
    subtopicId: SUBTOPIC_ID,
    difficulty,
    marks,
    answerType,
    tags: ["inference for variance", ...tags],
    questionText,
    questionDiagram: null,
    workedSolution: { steps, finalAnswer },
  };
}

function varianceCi(index: number, c: VarianceCiCase): Question {
  const df = c.n - 1;
  const keys = ciKeys[c.confidence];
  const lowerCrit = chi[df][keys.lower];
  const upperCrit = chi[df][keys.upper];
  const lower = (df * c.s2) / upperCrit;
  const upper = (df * c.s2) / lowerCrit;

  return makeQuestion(
    index,
    "Easy",
    5,
    "interval",
    ["chi-square", "confidence interval", "population variance"],
    `A random sample of size $${c.n}$ from a normal population gives an unbiased sample variance $s^2=${c.s2}$. Find a $${c.confidence}\\%$ confidence interval for the population variance $\\sigma^2$. Use $\\chi^2_{${keys.lower},${df}}=${fmt(lowerCrit)}$ and $\\chi^2_{${keys.upper},${df}}=${fmt(upperCrit)}$.`,
    [
      step(1, "State the distributional result", "\\dfrac{(n-1)s^2}{\\sigma^2}\\sim \\chi^2_{n-1}", "For a sample from a normal population, the scaled sample variance has a chi-square distribution."),
      step(2, "Find the degrees of freedom", `\\nu=n-1=${c.n}-1=${df}`, "One degree of freedom is lost because the sample mean is estimated before the sample variance is calculated."),
      step(3, "Write the central probability statement", `P\\left(${fmt(lowerCrit)}<\\dfrac{${df}s^2}{\\sigma^2}<${fmt(upperCrit)}\\right)=${fmt(Number(c.confidence) / 100, 2)}`, "A two-sided confidence interval keeps the central probability between the two chi-square critical values."),
      step(4, "Substitute the sample variance", `P\\left(${fmt(lowerCrit)}<\\dfrac{${df}\\times ${c.s2}}{\\sigma^2}<${fmt(upperCrit)}\\right)=${fmt(Number(c.confidence) / 100, 2)}`, "The observed value of $s^2$ gives the numerical numerator for the interval."),
      step(5, "Invert the inequalities carefully", `\\dfrac{${df}\\times ${c.s2}}{${fmt(upperCrit)}}<\\sigma^2<\\dfrac{${df}\\times ${c.s2}}{${fmt(lowerCrit)}}`, "Because $\\sigma^2$ is in the denominator, the larger chi-square value gives the lower endpoint."),
      step(6, "Evaluate the lower endpoint", `\\dfrac{${fmt(df * c.s2)}}{${fmt(upperCrit)}}=${fmt(lower)}`, "This is the smallest plausible population variance at the chosen confidence level."),
      step(7, "Evaluate the upper endpoint", `\\dfrac{${fmt(df * c.s2)}}{${fmt(lowerCrit)}}=${fmt(upper)}`, "This is the largest plausible population variance at the chosen confidence level."),
      step(8, "State the confidence interval", `${fmt(lower)}<\\sigma^2<${fmt(upper)}`, "The interval is written for the variance itself, not for the standard deviation."),
    ],
    `${fmt(lower)}<\\sigma^2<${fmt(upper)}`,
  );
}

function standardDeviationCi(index: number, c: VarianceCiCase): Question {
  const df = c.n - 1;
  const keys = ciKeys[c.confidence];
  const lowerCrit = chi[df][keys.lower];
  const upperCrit = chi[df][keys.upper];
  const lowerVar = (df * c.s2) / upperCrit;
  const upperVar = (df * c.s2) / lowerCrit;
  const lowerSd = Math.sqrt(lowerVar);
  const upperSd = Math.sqrt(upperVar);

  return makeQuestion(
    index,
    "Intermediate",
    6,
    "interval",
    ["chi-square", "confidence interval", "standard deviation"],
    `For ${c.context}, a random sample of size $${c.n}$ from a normal population has unbiased sample variance $s^2=${c.s2}$. Find a $${c.confidence}\\%$ confidence interval for the population standard deviation $\\sigma$. Use $\\chi^2_{${keys.lower},${df}}=${fmt(lowerCrit)}$ and $\\chi^2_{${keys.upper},${df}}=${fmt(upperCrit)}$.`,
    [
      step(1, "Start with the chi-square pivot", "\\dfrac{(n-1)s^2}{\\sigma^2}\\sim \\chi^2_{n-1}", "The chi-square pivot is the standard tool for inference about a normal population variance."),
      step(2, "Find the degrees of freedom", `\\nu=${c.n}-1=${df}`, "The variance calculation uses deviations from the sample mean, so the degrees of freedom are $n-1$."),
      step(3, "Insert the critical values", `P\\left(${fmt(lowerCrit)}<\\dfrac{${df}s^2}{\\sigma^2}<${fmt(upperCrit)}\\right)=${fmt(Number(c.confidence) / 100, 2)}`, "The stated critical values enclose the central confidence probability."),
      step(4, "Substitute the observed variance", `\\dfrac{(n-1)s^2}{1}= ${df}\\times ${c.s2}=${fmt(df * c.s2)}`, "The numerator of the pivot is fixed once the sample has been observed."),
      step(5, "Form the variance interval", `\\dfrac{${fmt(df * c.s2)}}{${fmt(upperCrit)}}<\\sigma^2<\\dfrac{${fmt(df * c.s2)}}{${fmt(lowerCrit)}}`, "The endpoints reverse because the unknown variance appears in the denominator."),
      step(6, "Evaluate the variance interval", `${fmt(lowerVar)}<\\sigma^2<${fmt(upperVar)}`, "This interval is for $\\sigma^2$, so it must still be converted to a standard deviation interval."),
      step(7, "Take square roots", `\\sqrt{${fmt(lowerVar)}}<\\sigma<\\sqrt{${fmt(upperVar)}}`, "The standard deviation is positive, so taking square roots preserves the order."),
      step(8, "Evaluate the standard deviation endpoints", `${fmt(lowerSd)}<\\sigma<${fmt(upperSd)}`, "The square-rooted endpoints give the interval in the original measurement units."),
      step(9, "State the result in context", `\\sigma\\in (${fmt(lowerSd)},\\ ${fmt(upperSd)})`, "The interval describes plausible values for the population standard deviation, not the sample standard deviation."),
    ],
    `${fmt(lowerSd)}<\\sigma<${fmt(upperSd)}`,
  );
}

function hypothesisText(direction: TestDirection, variance: number): { h1: string; words: string } {
  if (direction === "greater") return { h1: `\\sigma^2>${variance}`, words: "has increased" };
  if (direction === "less") return { h1: `\\sigma^2<${variance}`, words: "has decreased" };
  return { h1: `\\sigma^2\\ne ${variance}`, words: "has changed" };
}

function varianceTest(index: number, c: TestCase): Question {
  const df = c.n - 1;
  const statistic = (df * c.s2) / c.claimedVariance;
  const h = hypothesisText(c.direction, c.claimedVariance);
  const lowerKey = c.alpha === "0.05" ? "0.025" : "0.005";
  const upperKey = c.alpha === "0.05" ? "0.975" : "0.995";
  const oneTailLower = c.alpha;
  const oneTailUpper = c.alpha === "0.05" ? "0.95" : "0.99";
  const lowerCrit = c.direction === "two-sided" ? chi[df][lowerKey] : chi[df][oneTailLower];
  const upperCrit = c.direction === "two-sided" ? chi[df][upperKey] : chi[df][oneTailUpper];
  const reject =
    c.direction === "greater"
      ? statistic > upperCrit
      : c.direction === "less"
        ? statistic < lowerCrit
        : statistic < lowerCrit || statistic > upperCrit;
  const region =
    c.direction === "greater"
      ? `X>${fmt(upperCrit)}`
      : c.direction === "less"
        ? `X<${fmt(lowerCrit)}`
        : `X<${fmt(lowerCrit)}\\text{ or }X>${fmt(upperCrit)}`;

  return makeQuestion(
    index,
    "Intermediate",
    7,
    "statement",
    ["chi-square", "hypothesis test", "population variance"],
    `For ${c.context}, a sample of size $${c.n}$ from a normal population has unbiased sample variance $s^2=${c.s2}$. Test at the $${pct(c.alpha)}$ significance level whether the population variance ${h.words} from $${c.claimedVariance}$. Use the relevant chi-square critical value(s): ${c.direction === "two-sided" ? `$\\chi^2_{${lowerKey},${df}}=${fmt(lowerCrit)}$ and $\\chi^2_{${upperKey},${df}}=${fmt(upperCrit)}$` : c.direction === "greater" ? `$\\chi^2_{${oneTailUpper},${df}}=${fmt(upperCrit)}$` : `$\\chi^2_{${oneTailLower},${df}}=${fmt(lowerCrit)}$`}.`,
    [
      step(1, "State the null hypothesis", `H_0:\\sigma^2=${c.claimedVariance}`, "The null hypothesis represents the claimed population variance before the sample evidence is considered."),
      step(2, "State the alternative hypothesis", `H_1:${h.h1}`, "The alternative matches the wording of the question, so it determines which tail or tails are tested."),
      step(3, "Choose the test statistic", `X=\\dfrac{(n-1)s^2}{\\sigma_0^2}`, "Under the null hypothesis this statistic follows a chi-square distribution."),
      step(4, "Find the degrees of freedom", `\\nu=${c.n}-1=${df}`, "The sample variance has $n-1$ degrees of freedom because the sample mean has been estimated."),
      step(5, "Substitute into the statistic", `X=\\dfrac{${df}\\times ${c.s2}}{${c.claimedVariance}}`, "The null variance is used in the denominator because the test assumes $H_0$ is true."),
      step(6, "Evaluate the test statistic", `X=${fmt(statistic)}`, "This number measures how extreme the observed sample variance is on the chi-square scale."),
      step(7, "State the critical region", region, "The critical region is determined by the alternative hypothesis and the significance level."),
      step(8, "Compare with the critical region", `${fmt(statistic)}${reject ? "\\text{ is in }" : "\\text{ is not in }"}\\text{ the critical region}`, "This comparison decides whether the sample evidence is unusually extreme under $H_0$."),
      step(9, reject ? "Reject the null hypothesis" : "Do not reject the null hypothesis", reject ? "H_0\\text{ is rejected.}" : "H_0\\text{ is not rejected.}", reject ? "The sample variance is too extreme to be explained comfortably by the null model." : "The sample variance is not extreme enough to overturn the null model."),
      step(10, "Write the conclusion in context", reject ? `\\text{There is evidence that the variance ${h.words}.}` : `\\text{There is insufficient evidence that the variance ${h.words}.}`, "The final conclusion should refer to the population variance and the original context."),
    ],
    reject ? `Reject $H_0$; there is evidence that the population variance ${h.words}.` : `Do not reject $H_0$; there is insufficient evidence that the population variance ${h.words}.`,
  );
}

function combinedInference(index: number, c: TestCase & { confidence: "95" | "99" }): Question {
  const df = c.n - 1;
  const keys = ciKeys[c.confidence];
  const lowerCrit = chi[df][keys.lower];
  const upperCrit = chi[df][keys.upper];
  const lowerVar = (df * c.s2) / upperCrit;
  const upperVar = (df * c.s2) / lowerCrit;
  const lowerSd = Math.sqrt(lowerVar);
  const upperSd = Math.sqrt(upperVar);
  const testCrit = chi[df][c.alpha === "0.05" ? "0.95" : "0.99"];
  const statistic = (df * c.s2) / c.claimedVariance;
  const reject = statistic > testCrit;

  return makeQuestion(
    index,
    "Hard",
    9,
    "statement",
    ["chi-square", "confidence interval", "hypothesis test", "standard deviation"],
    `For ${c.context}, a random sample of size $${c.n}$ from a normal population has unbiased sample variance $s^2=${c.s2}$. (a) Find a $${c.confidence}\\%$ confidence interval for the population standard deviation $\\sigma$. (b) A previous specification gave variance $${c.claimedVariance}$. Test at the $${pct(c.alpha)}$ level whether the variance has increased. Use $\\chi^2_{${keys.lower},${df}}=${fmt(lowerCrit)}$, $\\chi^2_{${keys.upper},${df}}=${fmt(upperCrit)}$ and $\\chi^2_{${c.alpha === "0.05" ? "0.95" : "0.99"},${df}}=${fmt(testCrit)}$.`,
    [
      step(1, "State the pivot for variance inference", "\\dfrac{(n-1)s^2}{\\sigma^2}\\sim\\chi^2_{n-1}", "Both the confidence interval and the test are built from the same chi-square pivot."),
      step(2, "Find the degrees of freedom", `\\nu=${c.n}-1=${df}`, "The sample variance is calculated about the sample mean, leaving $n-1$ degrees of freedom."),
      step(3, "Substitute the sample information", `(n-1)s^2=${df}\\times ${c.s2}=${fmt(df * c.s2)}`, "This scaled sample variance is the numerator used throughout the inference."),
      step(4, "Set up the variance confidence interval", `\\dfrac{${fmt(df * c.s2)}}{${fmt(upperCrit)}}<\\sigma^2<\\dfrac{${fmt(df * c.s2)}}{${fmt(lowerCrit)}}`, "For a chi-square interval, the larger critical value gives the lower variance endpoint."),
      step(5, "Evaluate the variance interval", `${fmt(lowerVar)}<\\sigma^2<${fmt(upperVar)}`, "This gives plausible values for the population variance."),
      step(6, "Convert to a standard deviation interval", `\\sqrt{${fmt(lowerVar)}}<\\sigma<\\sqrt{${fmt(upperVar)}}`, "The question asks for standard deviation, so we take positive square roots."),
      step(7, "State the standard deviation interval", `${fmt(lowerSd)}<\\sigma<${fmt(upperSd)}`, "The interval is now in the original measurement units."),
      step(8, "State the hypotheses for the test", `H_0:\\sigma^2=${c.claimedVariance},\\qquad H_1:\\sigma^2>${c.claimedVariance}`, "The word increased makes this an upper-tail test."),
      step(9, "Form the test statistic", `X=\\dfrac{(n-1)s^2}{\\sigma_0^2}=\\dfrac{${fmt(df * c.s2)}}{${c.claimedVariance}}`, "The denominator uses the previous specification because the test initially assumes the null hypothesis."),
      step(10, "Evaluate the test statistic", `X=${fmt(statistic)}`, "This places the observed variance on the chi-square scale."),
      step(11, "State the critical region", `X>${fmt(testCrit)}`, "An upper-tail test rejects only for unusually large sample variances."),
      step(12, "Compare the statistic with the critical value", `${fmt(statistic)}${reject ? ">" : "\\le"}${fmt(testCrit)}`, reject ? "The observed value lies beyond the upper critical value." : "The observed value does not reach the upper critical value."),
      step(13, reject ? "Reject the null hypothesis" : "Do not reject the null hypothesis", reject ? "H_0\\text{ is rejected.}" : "H_0\\text{ is not rejected.}", reject ? "The sample gives statistically significant evidence of a larger variance." : "The sample does not give statistically significant evidence of a larger variance."),
      step(14, "Give the contextual conclusion", reject ? "\\text{There is evidence that the variance has increased.}" : "\\text{There is insufficient evidence that the variance has increased.}", "The conclusion is stated in terms of the population variance, not just the sample variance."),
    ],
    `${fmt(lowerSd)}<\\sigma<${fmt(upperSd)}; ${reject ? "reject" : "do not reject"} $H_0$ for the increase test.`,
  );
}

const varianceCiCases: VarianceCiCase[] = [
  { context: "machine fill amounts", n: 8, s2: 4.8, confidence: "95" },
  { context: "battery lifetimes", n: 10, s2: 12.4, confidence: "95" },
  { context: "reaction times", n: 12, s2: 0.036, confidence: "90" },
  { context: "wire diameters", n: 15, s2: 0.014, confidence: "95" },
  { context: "exam completion times", n: 18, s2: 25.6, confidence: "99" },
  { context: "delivery times", n: 20, s2: 18.9, confidence: "95" },
  { context: "tablet masses", n: 24, s2: 0.052, confidence: "90" },
  { context: "plant heights", n: 26, s2: 7.84, confidence: "95" },
  { context: "sensor readings", n: 7, s2: 1.44, confidence: "99" },
  { context: "cable strengths", n: 9, s2: 36, confidence: "95" },
  { context: "paint drying times", n: 11, s2: 5.29, confidence: "90" },
  { context: "component widths", n: 13, s2: 0.0225, confidence: "95" },
  { context: "weekly demand", n: 16, s2: 144, confidence: "99" },
  { context: "enzyme activity readings", n: 19, s2: 2.89, confidence: "95" },
  { context: "commuting times", n: 21, s2: 64, confidence: "90" },
  { context: "packaging weights", n: 23, s2: 0.81, confidence: "95" },
  { context: "processing temperatures", n: 25, s2: 3.61, confidence: "99" },
  { context: "fitness test scores", n: 27, s2: 49, confidence: "95" },
  { context: "call handling times", n: 29, s2: 10.24, confidence: "90" },
  { context: "glass thicknesses", n: 31, s2: 0.0064, confidence: "95" },
];

const sdCiCases: VarianceCiCase[] = [
  { context: "the lengths of metal rods", n: 8, s2: 0.25, confidence: "95" },
  { context: "daily water usage", n: 10, s2: 6.76, confidence: "90" },
  { context: "the masses of cereal boxes", n: 12, s2: 2.25, confidence: "95" },
  { context: "the lifetimes of bulbs", n: 15, s2: 400, confidence: "99" },
  { context: "the scores on a diagnostic test", n: 18, s2: 81, confidence: "95" },
  { context: "the diameters of bearings", n: 20, s2: 0.0036, confidence: "90" },
  { context: "the strengths of fibres", n: 24, s2: 16, confidence: "95" },
  { context: "the times for a chemical reaction", n: 26, s2: 1.96, confidence: "99" },
  { context: "the noise levels in a workshop", n: 7, s2: 9, confidence: "95" },
  { context: "the weekly sales of a product", n: 9, s2: 225, confidence: "90" },
  { context: "the widths of printed labels", n: 11, s2: 0.04, confidence: "95" },
  { context: "the temperatures in a process", n: 13, s2: 5.76, confidence: "99" },
  { context: "the running times of an algorithm", n: 16, s2: 0.64, confidence: "95" },
  { context: "the concentrations in samples", n: 19, s2: 0.1225, confidence: "90" },
];

const testCases: TestCase[] = [
  { context: "machine fill amounts", n: 8, s2: 6.2, claimedVariance: 4, alpha: "0.05", direction: "greater" },
  { context: "battery lifetimes", n: 10, s2: 8.1, claimedVariance: 12, alpha: "0.05", direction: "less" },
  { context: "reaction times", n: 12, s2: 0.052, claimedVariance: 0.04, alpha: "0.05", direction: "greater" },
  { context: "wire diameters", n: 15, s2: 0.009, claimedVariance: 0.014, alpha: "0.05", direction: "less" },
  { context: "exam completion times", n: 18, s2: 42, claimedVariance: 25, alpha: "0.01", direction: "greater" },
  { context: "delivery times", n: 20, s2: 12.5, claimedVariance: 18, alpha: "0.05", direction: "less" },
  { context: "tablet masses", n: 24, s2: 0.072, claimedVariance: 0.05, alpha: "0.05", direction: "greater" },
  { context: "plant heights", n: 26, s2: 6.1, claimedVariance: 7.84, alpha: "0.05", direction: "less" },
  { context: "sensor readings", n: 7, s2: 2.7, claimedVariance: 1.44, alpha: "0.01", direction: "greater" },
  { context: "cable strengths", n: 9, s2: 18, claimedVariance: 36, alpha: "0.05", direction: "less" },
  { context: "paint drying times", n: 11, s2: 8.5, claimedVariance: 5.29, alpha: "0.05", direction: "greater" },
  { context: "component widths", n: 13, s2: 0.012, claimedVariance: 0.0225, alpha: "0.05", direction: "less" },
  { context: "weekly demand", n: 16, s2: 230, claimedVariance: 144, alpha: "0.01", direction: "greater" },
  { context: "enzyme activity readings", n: 19, s2: 1.65, claimedVariance: 2.89, alpha: "0.05", direction: "less" },
  { context: "commuting times", n: 21, s2: 84, claimedVariance: 64, alpha: "0.05", direction: "greater" },
  { context: "packaging weights", n: 23, s2: 0.52, claimedVariance: 0.81, alpha: "0.01", direction: "less" },
  { context: "processing temperatures", n: 25, s2: 5.2, claimedVariance: 3.61, alpha: "0.05", direction: "greater" },
  { context: "fitness test scores", n: 27, s2: 31, claimedVariance: 49, alpha: "0.05", direction: "less" },
  { context: "call handling times", n: 29, s2: 14.2, claimedVariance: 10.24, alpha: "0.05", direction: "greater" },
  { context: "glass thicknesses", n: 31, s2: 0.0042, claimedVariance: 0.0064, alpha: "0.05", direction: "less" },
  { context: "the spread of calibration errors", n: 18, s2: 1.9, claimedVariance: 1.21, alpha: "0.05", direction: "two-sided" },
  { context: "the variability of daily yields", n: 24, s2: 52, claimedVariance: 36, alpha: "0.01", direction: "two-sided" },
];

const combinedCases: Array<TestCase & { confidence: "95" | "99" }> = [
  { context: "precision-drilled holes", n: 8, s2: 0.019, claimedVariance: 0.01, alpha: "0.05", direction: "greater", confidence: "95" },
  { context: "timed assembly tasks", n: 10, s2: 15.8, claimedVariance: 9, alpha: "0.05", direction: "greater", confidence: "95" },
  { context: "laboratory concentration readings", n: 12, s2: 0.31, claimedVariance: 0.16, alpha: "0.01", direction: "greater", confidence: "99" },
  { context: "delivery route durations", n: 15, s2: 54, claimedVariance: 36, alpha: "0.05", direction: "greater", confidence: "95" },
  { context: "exam marking differences", n: 18, s2: 6.8, claimedVariance: 4, alpha: "0.05", direction: "greater", confidence: "95" },
  { context: "daily energy outputs", n: 20, s2: 125, claimedVariance: 81, alpha: "0.01", direction: "greater", confidence: "99" },
  { context: "bottle-cap torques", n: 24, s2: 2.7, claimedVariance: 1.96, alpha: "0.05", direction: "greater", confidence: "95" },
  { context: "printed circuit resistances", n: 26, s2: 0.086, claimedVariance: 0.0529, alpha: "0.05", direction: "greater", confidence: "95" },
  { context: "warehouse picking times", n: 7, s2: 33, claimedVariance: 16, alpha: "0.01", direction: "greater", confidence: "99" },
  { context: "seedling growth measurements", n: 9, s2: 11.4, claimedVariance: 6.25, alpha: "0.05", direction: "greater", confidence: "95" },
  { context: "screen brightness readings", n: 11, s2: 28, claimedVariance: 16, alpha: "0.05", direction: "greater", confidence: "95" },
  { context: "medical waiting times", n: 13, s2: 96, claimedVariance: 64, alpha: "0.01", direction: "greater", confidence: "99" },
  { context: "laser cutting errors", n: 16, s2: 0.41, claimedVariance: 0.25, alpha: "0.05", direction: "greater", confidence: "95" },
  { context: "weekly rainfall totals", n: 19, s2: 210, claimedVariance: 144, alpha: "0.05", direction: "greater", confidence: "95" },
];

export const questions: Question[] = [
  ...varianceCiCases.map((c, i) => varianceCi(i + 1, c)),
  ...sdCiCases.map((c, i) => standardDeviationCi(i + 21, c)),
  ...testCases.map((c, i) => varianceTest(i + 35, c)),
  ...combinedCases.map((c, i) => combinedInference(i + 57, c)),
];
