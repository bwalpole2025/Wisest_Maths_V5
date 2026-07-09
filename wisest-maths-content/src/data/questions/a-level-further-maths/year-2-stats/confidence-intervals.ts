import { Question } from "@/lib/types";

const LEVEL = "A-Level Further Maths";
const TOPIC = "Further Maths Year 2: Statistics (Further Statistics 2)";
const SUBTOPIC = "Confidence intervals";
const SUBTOPIC_ID = "fm.y2.stats.estimation-ci";

type Difficulty = Question["difficulty"];
type Step = Question["workedSolution"]["steps"][number];

interface Shell {
  difficulty: Difficulty;
  marks: number;
  answerType: string;
  tags: string[];
  questionText: string;
  steps: Step[];
  finalAnswer: string;
}

const zCritical: Record<string, number> = {
  "90": 1.645,
  "95": 1.96,
  "98": 2.326,
  "99": 2.576,
};

const tCritical: Record<number, Record<string, number>> = {
  5: { "90": 2.015, "95": 2.571, "98": 3.365, "99": 4.032 },
  6: { "90": 1.943, "95": 2.447, "98": 3.143, "99": 3.707 },
  7: { "90": 1.895, "95": 2.365, "98": 2.998, "99": 3.499 },
  8: { "90": 1.86, "95": 2.306, "98": 2.896, "99": 3.355 },
  9: { "90": 1.833, "95": 2.262, "98": 2.821, "99": 3.25 },
  10: { "90": 1.812, "95": 2.228, "98": 2.764, "99": 3.169 },
  11: { "90": 1.796, "95": 2.201, "98": 2.718, "99": 3.106 },
  12: { "90": 1.782, "95": 2.179, "98": 2.681, "99": 3.055 },
  13: { "90": 1.771, "95": 2.16, "98": 2.65, "99": 3.012 },
  14: { "90": 1.761, "95": 2.145, "98": 2.624, "99": 2.977 },
  15: { "90": 1.753, "95": 2.131, "98": 2.602, "99": 2.947 },
  16: { "90": 1.746, "95": 2.12, "98": 2.583, "99": 2.921 },
  17: { "90": 1.74, "95": 2.11, "98": 2.567, "99": 2.898 },
  18: { "90": 1.734, "95": 2.101, "98": 2.552, "99": 2.878 },
  19: { "90": 1.729, "95": 2.093, "98": 2.539, "99": 2.861 },
  20: { "90": 1.725, "95": 2.086, "98": 2.528, "99": 2.845 },
  21: { "90": 1.721, "95": 2.08, "98": 2.518, "99": 2.831 },
  22: { "90": 1.717, "95": 2.074, "98": 2.508, "99": 2.819 },
  23: { "90": 1.714, "95": 2.069, "98": 2.5, "99": 2.807 },
  24: { "90": 1.711, "95": 2.064, "98": 2.492, "99": 2.797 },
  25: { "90": 1.708, "95": 2.06, "98": 2.485, "99": 2.787 },
  26: { "90": 1.706, "95": 2.056, "98": 2.479, "99": 2.779 },
  27: { "90": 1.703, "95": 2.052, "98": 2.473, "99": 2.771 },
  28: { "90": 1.701, "95": 2.048, "98": 2.467, "99": 2.763 },
  29: { "90": 1.699, "95": 2.045, "98": 2.462, "99": 2.756 },
  30: { "90": 1.697, "95": 2.042, "98": 2.457, "99": 2.75 },
};

const qid = (n: number): string => `${SUBTOPIC_ID}.q${String(n).padStart(3, "0")}`;
const fmt = (value: number, dp = 3): string => {
  const rounded = Number(value.toFixed(dp));
  return Number.isInteger(rounded) ? rounded.toString() : rounded.toString();
};
const step = (stepNumber: number, description: string, workingLatex: string, explanation: string): Step => ({
  stepNumber,
  description,
  workingLatex,
  explanation,
  diagram: null,
});

function makeQuestion(index: number, shell: Shell): Question {
  return {
    level: LEVEL,
    topic: TOPIC,
    subtopic: SUBTOPIC,
    subtopicId: SUBTOPIC_ID,
    questionDiagram: null,
    id: qid(index),
    tags: ["confidence intervals", ...shell.tags],
    difficulty: shell.difficulty,
    marks: shell.marks,
    answerType: shell.answerType,
    questionText: shell.questionText,
    workedSolution: {
      steps: shell.steps,
      finalAnswer: shell.finalAnswer,
    },
  };
}

function intervalText(mean: number, margin: number): string {
  return `(${fmt(mean - margin)},\\ ${fmt(mean + margin)})`;
}

function zIntervalShell({
  context,
  variable,
  unit,
  xbar,
  sigma,
  n,
  confidence,
  difficulty = "Easy",
  marks = 4,
}: {
  context: string;
  variable: string;
  unit: string;
  xbar: number;
  sigma: number;
  n: number;
  confidence: string;
  difficulty?: Difficulty;
  marks?: number;
}): Shell {
  const z = zCritical[confidence];
  const se = sigma / Math.sqrt(n);
  const margin = z * se;
  const interval = intervalText(xbar, margin);
  const steps = [
    step(1, "Identify the known information", `\\bar{x}=${xbar},\\quad \\sigma=${sigma},\\quad n=${n}`, "A confidence interval for a mean starts with the sample mean and the spread of the sampling distribution."),
    step(2, "Choose the normal critical value", `z^*=${z}\\quad (${confidence}\\%\\text{ confidence})`, "Because the population standard deviation is known, the standard normal critical value is used."),
    step(3, "Calculate the standard error", `SE=\\dfrac{\\sigma}{\\sqrt n}=\\dfrac{${sigma}}{\\sqrt{${n}}}=${fmt(se)}`, "The standard error measures how much sample means vary from sample to sample."),
    step(4, "Find the margin of error", `z^*SE=${z}\\times ${fmt(se)}=${fmt(margin)}`, "The margin of error is the distance we add and subtract from the sample mean."),
    step(5, "Form the interval", `\\bar{x}\\pm z^*SE=${xbar}\\pm ${fmt(margin)}`, "Centred at the sample mean, the interval captures the plausible values for the population mean."),
    step(6, "State the answer", `\\mu\\in ${interval}`, "The endpoints are the lower and upper confidence limits."),
  ];

  if (difficulty !== "Easy") {
    steps.push(
      step(7, "Interpret in context", `\\text{Mean ${variable} is estimated by }${interval}\\ ${unit}`, "The interval estimates the unknown population mean, not the spread of individual observations."),
      step(8, "Check the method", `\\sigma\\text{ known, so use }z\\text{ rather than }t`, "Using the wrong critical value would change the margin of error."),
      step(9, "Link confidence to repeated sampling", `${confidence}\\%\\text{ confidence}`, "In repeated sampling, about this proportion of intervals constructed by the same method would contain the true mean."),
    );
  }

  return {
    difficulty,
    marks,
    answerType: "interval",
    tags: ["known sigma", "normal interval", `${confidence}% confidence`],
    questionText: `${context} A random sample of size $${n}$ has mean $\\bar{x}=${xbar}$ ${unit}. The population standard deviation is known to be $${sigma}$ ${unit}. Construct a $${confidence}\\%$ confidence interval for the population mean ${variable}.`,
    steps,
    finalAnswer: `$${confidence}\\%$ confidence interval: $${interval}$ ${unit}.`,
  };
}

function tIntervalShell({
  context,
  variable,
  unit,
  xbar,
  s,
  n,
  confidence,
  difficulty = "Easy",
  marks = 5,
}: {
  context: string;
  variable: string;
  unit: string;
  xbar: number;
  s: number;
  n: number;
  confidence: string;
  difficulty?: Difficulty;
  marks?: number;
}): Shell {
  const df = n - 1;
  const t = tCritical[df][confidence];
  const se = s / Math.sqrt(n);
  const margin = t * se;
  const interval = intervalText(xbar, margin);
  const steps = [
    step(1, "Identify the sample information", `\\bar{x}=${xbar},\\quad s=${s},\\quad n=${n}`, "Here the population standard deviation is not known, so the sample standard deviation estimates it."),
    step(2, "Find the degrees of freedom", `\\nu=n-1=${n}-1=${df}`, "A one-sample $t$ interval uses one fewer degree of freedom than the sample size."),
    step(3, "Choose the t critical value", `t^*=${t}\\quad (\\nu=${df},\\ ${confidence}\\%)`, "The $t$ critical value is wider than the normal value because $\\sigma$ is being estimated."),
    step(4, "Calculate the standard error", `SE=\\dfrac{s}{\\sqrt n}=\\dfrac{${s}}{\\sqrt{${n}}}=${fmt(se)}`, "The standard error is based on the sample standard deviation."),
    step(5, "Find the margin of error", `t^*SE=${t}\\times ${fmt(se)}=${fmt(margin)}`, "This is the amount added and subtracted from the sample mean."),
    step(6, "Form the interval", `\\bar{x}\\pm t^*SE=${xbar}\\pm ${fmt(margin)}`, "The interval is centred at the observed sample mean."),
    step(7, "State the confidence interval", `\\mu\\in ${interval}`, "These are the lower and upper limits for the population mean."),
  ];

  if (difficulty !== "Easy") {
    steps.push(
      step(8, "State the assumption", "\\text{Population approximately normal, or sample size sufficiently large}", "For small samples, the $t$ interval relies on the population being reasonably normal."),
      step(9, "Interpret in context", `\\text{Mean ${variable} is estimated by }${interval}\\ ${unit}`, "The interval gives plausible values for the population mean."),
      step(10, "Explain the confidence level", `${confidence}\\%\\text{ confidence}`, "This describes the long-run success rate of the interval procedure, not the probability that this fixed interval changes."),
    );
  }

  return {
    difficulty,
    marks,
    answerType: "interval",
    tags: ["unknown sigma", "t interval", `${confidence}% confidence`],
    questionText: `${context} A random sample of size $${n}$ has mean $\\bar{x}=${xbar}$ ${unit} and sample standard deviation $s=${s}$ ${unit}. Assuming the population is approximately normal, construct a $${confidence}\\%$ confidence interval for the population mean ${variable}.`,
    steps,
    finalAnswer: `$${confidence}\\%$ confidence interval: $${interval}$ ${unit}.`,
  };
}

function interpretationShell(context: string, interval: [number, number], confidence: string, variable: string, unit: string): Shell {
  const [lower, upper] = interval;
  return {
    difficulty: "Easy",
    marks: 3,
    answerType: "written",
    tags: ["interpretation", `${confidence}% confidence`],
    questionText: `${context} A $${confidence}\\%$ confidence interval for the population mean ${variable} is $(${lower}, ${upper})$ ${unit}. Interpret this interval carefully.`,
    steps: [
      step(1, "Identify the parameter", "\\mu=\\text{population mean}", "The interval is about the unknown population mean, not a single future observation."),
      step(2, "Read the lower limit", `\\text{Lower limit}=${lower}`, "The lower endpoint is the smallest plausible value in this interval."),
      step(3, "Read the upper limit", `\\text{Upper limit}=${upper}`, "The upper endpoint is the largest plausible value in this interval."),
      step(4, "State the contextual estimate", `${lower}<\\mu<${upper}`, "The interval gives a range of plausible values for the mean in context."),
      step(5, "Explain confidence", `${confidence}\\%\\text{ confidence}`, "This refers to the long-run reliability of the method over many repeated samples."),
      step(6, "Avoid a common mistake", "P(\\mu\\text{ lies in this calculated interval})\\neq 0.95", "Once the data have produced the interval, the true mean is fixed; the randomness was in the sampling method."),
    ],
    finalAnswer: `We are $${confidence}\\%$ confident that the population mean ${variable} lies between $${lower}$ and $${upper}$ ${unit}.`,
  };
}

function widthShell({
  context,
  xbar,
  sigma,
  n,
  c1,
  c2,
}: {
  context: string;
  xbar: number;
  sigma: number;
  n: number;
  c1: string;
  c2: string;
}): Shell {
  const se = sigma / Math.sqrt(n);
  const m1 = zCritical[c1] * se;
  const m2 = zCritical[c2] * se;
  return {
    difficulty: "Intermediate",
    marks: 6,
    answerType: "written",
    tags: ["width", "confidence level", "known sigma"],
    questionText: `${context} A sample of size $${n}$ has $\\bar{x}=${xbar}$ and known population standard deviation $\\sigma=${sigma}$. Compare the widths of the $${c1}\\%$ and $${c2}\\%$ confidence intervals for $\\mu$.`,
    steps: [
      step(1, "Recall interval width", "\\text{width}=2z^*\\dfrac{\\sigma}{\\sqrt n}", "The full interval width is twice the margin of error."),
      step(2, "Calculate standard error", `SE=\\dfrac{${sigma}}{\\sqrt{${n}}}=${fmt(se)}`, "Both intervals use the same sample size and standard deviation."),
      step(3, `Use the ${c1}% critical value`, `z^*=${zCritical[c1]}`, "Lower confidence uses a smaller critical value."),
      step(4, `Find the ${c1}% width`, `2\\times ${zCritical[c1]}\\times ${fmt(se)}=${fmt(2 * m1)}`, "Double the margin of error."),
      step(5, `Use the ${c2}% critical value`, `z^*=${zCritical[c2]}`, "Higher confidence needs a wider central area, so the critical value is larger."),
      step(6, `Find the ${c2}% width`, `2\\times ${zCritical[c2]}\\times ${fmt(se)}=${fmt(2 * m2)}`, "Again double the margin of error."),
      step(7, "Compare", `${fmt(2 * m2)}>${fmt(2 * m1)}`, "The higher-confidence interval is wider."),
      step(8, "Interpret", "\\text{More confidence costs more width}", "To be more confident of capturing the true mean, the interval must allow a larger range of plausible values."),
      step(9, "Answer", `\\text{Widths: }${fmt(2 * m1)}\\text{ and }${fmt(2 * m2)}`, "State both widths clearly."),
    ],
    finalAnswer: `The $${c1}\\%$ width is $${fmt(2 * m1)}$ and the $${c2}\\%$ width is $${fmt(2 * m2)}$; the $${c2}\\%$ interval is wider.`,
  };
}

function sampleSizeShell({
  context,
  sigma,
  confidence,
  maxMargin,
  difficulty = "Intermediate",
}: {
  context: string;
  sigma: number;
  confidence: string;
  maxMargin: number;
  difficulty?: Difficulty;
}): Shell {
  const z = zCritical[confidence];
  const raw = (z * sigma / maxMargin) ** 2;
  const n = Math.ceil(raw);
  const baseSteps = [
    step(1, "State the margin formula", `E=z^*\\dfrac{\\sigma}{\\sqrt n}`, "The required accuracy is controlled by the margin of error."),
    step(2, "Substitute the target margin", `${maxMargin}\\geq ${z}\\dfrac{${sigma}}{\\sqrt n}`, "The margin must be no larger than the specified maximum."),
    step(3, "Rearrange for n", `\\sqrt n\\geq \\dfrac{${z}\\times ${sigma}}{${maxMargin}}`, "A larger sample size reduces the standard error."),
    step(4, "Square both sides", `n\\geq \\left(\\dfrac{${z}\\times ${sigma}}{${maxMargin}}\\right)^2`, "Squaring removes the square root while keeping the inequality direction."),
    step(5, "Calculate the bound", `n\\geq ${fmt(raw)}`, "This is the theoretical minimum before enforcing a whole-number sample size."),
    step(6, "Round up", `n=${n}`, "Sample size must be a whole number, and rounding down would make the margin too large."),
    step(7, "Answer", `\\text{minimum }n=${n}`, "This is the smallest sample size that meets the target margin."),
  ];
  const steps =
    difficulty === "Hard"
      ? [
          ...baseSteps,
          step(8, "Check the achieved margin", `${z}\\dfrac{${sigma}}{\\sqrt{${n}}}=${fmt((z * sigma) / Math.sqrt(n))}`, "A quick check confirms the rounded-up sample size satisfies the condition."),
          step(9, "Compare with one less", `${z}\\dfrac{${sigma}}{\\sqrt{${n - 1}}}=${fmt((z * sigma) / Math.sqrt(n - 1))}`, "Testing one fewer shows why the rounded-up value is minimal."),
          step(10, "Interpret in context", "\\text{More observations give a narrower interval}", "Precision is bought by increasing the sample size."),
          step(11, "State final recommendation", `n=${n}`, "The sampling plan should use at least this many observations."),
          step(12, "Mention assumptions", "\\sigma\\text{ known and random sampling assumed}", "The formula relies on the stated standard deviation and representative sampling."),
          step(13, "Final check", `${fmt((z * sigma) / Math.sqrt(n))}\\leq ${maxMargin}`, "The achieved margin meets the required maximum."),
        ]
      : baseSteps;

  return {
    difficulty,
    marks: difficulty === "Hard" ? 8 : 5,
    answerType: "value",
    tags: ["sample size", "margin of error", `${confidence}% confidence`],
    questionText: `${context} The population standard deviation is known to be $${sigma}$. Find the minimum sample size needed for a $${confidence}\\%$ confidence interval for $\\mu$ to have margin of error at most $${maxMargin}$.`,
    steps,
    finalAnswer: `Minimum sample size: $n=${n}$.`,
  };
}

function decisionShell({
  context,
  interval,
  claim,
  confidence,
}: {
  context: string;
  interval: [number, number];
  claim: number;
  confidence: string;
}): Shell {
  const [lower, upper] = interval;
  const inside = claim >= lower && claim <= upper;
  return {
    difficulty: "Hard",
    marks: 7,
    answerType: "written",
    tags: ["decision from interval", "claim", `${confidence}% confidence`],
    questionText: `${context} A $${confidence}\\%$ confidence interval for a population mean is $(${lower}, ${upper})$. A published claim states that $\\mu=${claim}$. Use the interval to comment on the claim.`,
    steps: [
      step(1, "Identify the interval", `${lower}<\\mu<${upper}`, "The interval gives plausible values for the population mean at this confidence level."),
      step(2, "Identify the claim", `\\mu=${claim}`, "The claim is a single proposed value for the population mean."),
      step(3, "Compare claim with lower limit", `${claim}${claim >= lower ? "\\geq" : "<"}${lower}`, "Check whether the claimed value is below the interval."),
      step(4, "Compare claim with upper limit", `${claim}${claim <= upper ? "\\leq" : ">"}${upper}`, "Check whether the claimed value is above the interval."),
      step(5, "Decide membership", inside ? `${claim}\\in(${lower},${upper})` : `${claim}\\notin(${lower},${upper})`, "A value inside the interval is plausible; a value outside is not supported at this confidence level."),
      step(6, "Translate to evidence", inside ? "\\text{No evidence against the claim from this interval}" : "\\text{Evidence against the claim from this interval}", "Confidence intervals and two-sided tests are closely linked."),
      step(7, "Use confidence level", `${confidence}\\%\\text{ confidence}`, "The strength of the statement is tied to the chosen confidence level."),
      step(8, "Avoid overstatement", "\\text{Do not prove the claim true or false with certainty}", "Statistical evidence is not mathematical proof; it depends on the sample."),
      step(9, "Context conclusion", inside ? "\\text{Claim is plausible}" : "\\text{Claim is not plausible}", "State the conclusion in words."),
      step(10, "Final answer", inside ? "\\text{Do not reject the claim}" : "\\text{Question the claim}", "This is the practical interpretation of the interval comparison."),
      step(11, "Link to testing", inside ? "\\text{Equivalent two-sided test would not reject}" : "\\text{Equivalent two-sided test would reject}", "For a matching confidence level, interval membership matches a two-sided hypothesis-test decision."),
      step(12, "Complete conclusion", inside ? `${claim}\\text{ lies inside the interval}` : `${claim}\\text{ lies outside the interval}`, "The final statement should mention the numerical comparison."),
      step(13, "Answer in context", inside ? "\\text{Published value is consistent with the data}" : "\\text{Published value is inconsistent with the data}", "Finish with a contextual judgement."),
    ],
    finalAnswer: inside
      ? `The claim $\\mu=${claim}$ lies inside the interval, so it is plausible at the $${confidence}\\%$ confidence level.`
      : `The claim $\\mu=${claim}$ lies outside the interval, so it is not supported at the $${confidence}\\%$ confidence level.`,
  };
}

function methodChoiceShell({
  context,
  sigmaKnown,
  n,
  normalStated,
}: {
  context: string;
  sigmaKnown: boolean;
  n: number;
  normalStated: boolean;
}): Shell {
  const method = sigmaKnown ? "normal z interval" : "t interval";
  return {
    difficulty: "Hard",
    marks: 7,
    answerType: "written",
    tags: ["method choice", sigmaKnown ? "known sigma" : "unknown sigma"],
    questionText: `${context} A sample of size $${n}$ is taken to estimate a population mean. ${sigmaKnown ? "The population standard deviation is known." : "Only the sample standard deviation is available."} ${normalStated ? "The population is stated to be approximately normal." : "No population shape is stated."} Decide which confidence-interval method is appropriate and explain any concern.`,
    steps: [
      step(1, "Identify the target", "\\mu=\\text{population mean}", "The parameter being estimated is the population mean."),
      step(2, "Check whether sigma is known", sigmaKnown ? "\\sigma\\text{ known}" : "\\sigma\\text{ unknown}", "This is the main fork between a $z$ interval and a $t$ interval."),
      step(3, "Choose the critical distribution", sigmaKnown ? "z\\text{ critical value}" : "t\\text{ critical value}", sigmaKnown ? "Known population standard deviation means the standard normal model is used." : "When $\\sigma$ is estimated by $s$, extra uncertainty is handled by the $t$ distribution."),
      step(4, "Check sample size", `n=${n}`, "Small samples need stronger distributional assumptions than large samples."),
      step(5, "Check normality information", normalStated ? "\\text{Approximately normal population}" : "\\text{Normality not stated}", "For small samples, lack of normality information is a concern."),
      step(6, "Assess concern", !normalStated && n < 30 ? "\\text{Method may not be reliable}" : "\\text{Method is reasonable}", "A large sample or stated normality makes the interval method more defensible."),
      step(7, "State method", `\\text{Use a ${method}}`, "This follows from whether $\\sigma$ is known."),
      step(8, "State formula", sigmaKnown ? "\\bar{x}\\pm z^*\\sigma/\\sqrt n" : "\\bar{x}\\pm t^*s/\\sqrt n", "Writing the formula makes the method unambiguous."),
      step(9, "Mention degrees of freedom if needed", sigmaKnown ? "\\text{No degrees of freedom needed}" : `\\nu=n-1=${n - 1}`, "Only the $t$ interval needs degrees of freedom."),
      step(10, "Context caution", !normalStated && n < 30 ? "\\text{Check data for strong skew/outliers}" : "\\text{Assumptions appear adequate}", "Outliers and skew can make a mean interval misleading, especially for small samples."),
      step(11, "Final decision", method, "The final answer should combine the method and any caveat."),
      step(12, "Answer", !normalStated && n < 30 ? `${method}\\text{, but with caution}` : method, "This is the practical recommendation."),
      step(13, "Reason summary", sigmaKnown ? "\\sigma\\text{ known}" : "\\sigma\\text{ unknown}", "Summarise the decisive evidence."),
    ],
    finalAnswer: `Use a ${method}${!normalStated && n < 30 ? ", but be cautious because normality is not stated for a small sample" : ""}.`,
  };
}

const easyZSpecs = [
  { context: "A packaging machine fills cereal boxes.", variable: "fill mass", unit: "g", xbar: 501.2, sigma: 4.8, n: 64, confidence: "95" },
  { context: "A lab measures the active ingredient in tablets.", variable: "active ingredient", unit: "mg", xbar: 76.4, sigma: 2.5, n: 36, confidence: "95" },
  { context: "A council samples journey times on a bus route.", variable: "journey time", unit: "min", xbar: 28.6, sigma: 6, n: 100, confidence: "90" },
  { context: "A battery manufacturer tests phone batteries.", variable: "battery life", unit: "hours", xbar: 12.8, sigma: 1.6, n: 49, confidence: "99" },
  { context: "A water company samples nitrate concentration.", variable: "nitrate concentration", unit: "mg/litre", xbar: 18.3, sigma: 3.2, n: 81, confidence: "95" },
  { context: "A farm records masses of apples from one orchard.", variable: "apple mass", unit: "g", xbar: 142.5, sigma: 18, n: 144, confidence: "90" },
  { context: "A hospital records waiting times for an appointment.", variable: "waiting time", unit: "days", xbar: 13.4, sigma: 2.4, n: 64, confidence: "98" },
  { context: "A factory measures the diameter of metal washers.", variable: "washer diameter", unit: "mm", xbar: 20.04, sigma: 0.12, n: 36, confidence: "95" },
  { context: "A website samples the loading time of a page.", variable: "loading time", unit: "s", xbar: 1.84, sigma: 0.32, n: 100, confidence: "99" },
  { context: "A retailer samples weekly customer spending.", variable: "weekly spend", unit: "pounds", xbar: 46.8, sigma: 12, n: 64, confidence: "95" },
];

const easyTSpecs = [
  { context: "A teacher samples revision-test scores.", variable: "score", unit: "marks", xbar: 68.4, s: 7.2, n: 16, confidence: "95" },
  { context: "An engineer samples tensile strengths of cables.", variable: "tensile strength", unit: "kN", xbar: 42.6, s: 3.8, n: 12, confidence: "95" },
  { context: "A nutritionist samples the protein content of meals.", variable: "protein content", unit: "g", xbar: 31.2, s: 4.5, n: 10, confidence: "90" },
  { context: "A researcher measures reaction times.", variable: "reaction time", unit: "ms", xbar: 284, s: 26, n: 20, confidence: "95" },
  { context: "A workshop samples cutting errors from a machine.", variable: "cutting error", unit: "mm", xbar: 0.42, s: 0.11, n: 9, confidence: "99" },
  { context: "A geologist samples quartz percentages in rock cores.", variable: "quartz percentage", unit: "%", xbar: 34.8, s: 5.4, n: 15, confidence: "95" },
  { context: "A sports scientist samples sprint times.", variable: "sprint time", unit: "s", xbar: 11.42, s: 0.38, n: 18, confidence: "98" },
  { context: "A biologist samples leaf lengths from a rare plant.", variable: "leaf length", unit: "cm", xbar: 7.8, s: 1.2, n: 11, confidence: "95" },
];

const interpretationSpecs = [
  { context: "A survey estimates average daily screen time.", interval: [3.8, 4.6] as [number, number], confidence: "95", variable: "daily screen time", unit: "hours" },
  { context: "A manufacturer estimates average bottle volume.", interval: [498.7, 501.1] as [number, number], confidence: "99", variable: "bottle volume", unit: "ml" },
  { context: "A college estimates average weekly study time.", interval: [9.4, 11.8] as [number, number], confidence: "90", variable: "weekly study time", unit: "hours" },
  { context: "A clinic estimates average systolic blood pressure.", interval: [121.5, 128.9] as [number, number], confidence: "95", variable: "systolic blood pressure", unit: "mmHg" },
  { context: "An energy company estimates average daily gas use.", interval: [28.1, 31.7] as [number, number], confidence: "98", variable: "daily gas use", unit: "kWh" },
  { context: "A transport firm estimates average delivery time.", interval: [41.2, 46.6] as [number, number], confidence: "95", variable: "delivery time", unit: "min" },
];

const intermediateZSpecs = [
  { context: "A machine bottles olive oil.", variable: "bottle content", unit: "ml", xbar: 751.6, sigma: 6.4, n: 80, confidence: "95" },
  { context: "A climatologist samples daily maximum temperatures.", variable: "daily maximum temperature", unit: "degrees C", xbar: 18.7, sigma: 2.8, n: 121, confidence: "99" },
  { context: "A hospital samples recovery times after a procedure.", variable: "recovery time", unit: "days", xbar: 5.8, sigma: 1.1, n: 49, confidence: "95" },
  { context: "A manufacturer samples tyre tread depth.", variable: "tread depth", unit: "mm", xbar: 7.42, sigma: 0.36, n: 64, confidence: "98" },
  { context: "An exam board samples marks on a paper.", variable: "mark", unit: "marks", xbar: 62.4, sigma: 14, n: 196, confidence: "90" },
  { context: "A retailer samples the mass of coffee bags.", variable: "bag mass", unit: "g", xbar: 227.8, sigma: 3.5, n: 50, confidence: "95" },
  { context: "A brewer samples alcohol percentage.", variable: "alcohol percentage", unit: "%", xbar: 4.62, sigma: 0.18, n: 81, confidence: "99" },
  { context: "A city samples noise levels near a road.", variable: "noise level", unit: "dB", xbar: 68.5, sigma: 5.2, n: 144, confidence: "95" },
  { context: "A bank samples call-centre handling times.", variable: "handling time", unit: "min", xbar: 6.72, sigma: 1.9, n: 100, confidence: "98" },
  { context: "A school samples heights of Year 13 students.", variable: "height", unit: "cm", xbar: 171.4, sigma: 8.6, n: 120, confidence: "95" },
  { context: "A charity samples donation amounts.", variable: "donation amount", unit: "pounds", xbar: 22.6, sigma: 9.5, n: 90, confidence: "90" },
  { context: "A lab samples purity percentage in a chemical process.", variable: "purity percentage", unit: "%", xbar: 96.8, sigma: 1.4, n: 64, confidence: "99" },
];

const intermediateTSpecs = [
  { context: "A biologist samples shell lengths.", variable: "shell length", unit: "mm", xbar: 36.8, s: 4.2, n: 14, confidence: "95" },
  { context: "A researcher samples sleep durations.", variable: "sleep duration", unit: "hours", xbar: 7.14, s: 0.86, n: 22, confidence: "95" },
  { context: "An engineer samples fracture loads.", variable: "fracture load", unit: "N", xbar: 516, s: 48, n: 18, confidence: "99" },
  { context: "A farmer samples milk yield per cow.", variable: "milk yield", unit: "litres", xbar: 24.8, s: 3.1, n: 13, confidence: "90" },
  { context: "A chemist samples reaction yields.", variable: "reaction yield", unit: "%", xbar: 82.4, s: 6.8, n: 21, confidence: "95" },
  { context: "A gym samples resting pulse rates.", variable: "resting pulse rate", unit: "bpm", xbar: 64.2, s: 7.6, n: 17, confidence: "98" },
  { context: "A publisher samples reading speeds.", variable: "reading speed", unit: "words/min", xbar: 238, s: 32, n: 25, confidence: "95" },
  { context: "A vet samples masses of adult cats.", variable: "cat mass", unit: "kg", xbar: 4.62, s: 0.74, n: 12, confidence: "90" },
  { context: "A technician samples voltage outputs.", variable: "voltage output", unit: "V", xbar: 12.08, s: 0.22, n: 16, confidence: "99" },
  { context: "A botanist samples plant growth over a week.", variable: "weekly growth", unit: "cm", xbar: 3.46, s: 0.58, n: 20, confidence: "95" },
  { context: "A sports analyst samples shot speeds.", variable: "shot speed", unit: "m/s", xbar: 28.9, s: 3.7, n: 15, confidence: "98" },
  { context: "A food scientist samples salt content.", variable: "salt content", unit: "g", xbar: 1.28, s: 0.19, n: 24, confidence: "95" },
];

const widthSpecs = [
  { context: "A known-sigma interval is being planned for packet mass.", xbar: 250.4, sigma: 5.6, n: 64, c1: "90", c2: "95" },
  { context: "A known-sigma interval is being planned for commute time.", xbar: 32.1, sigma: 7.4, n: 100, c1: "95", c2: "99" },
  { context: "A known-sigma interval is being planned for battery life.", xbar: 9.8, sigma: 1.5, n: 81, c1: "90", c2: "99" },
];

const sampleSizeSpecs = [
  { context: "A manufacturer wants to estimate mean fill volume.", sigma: 7.2, confidence: "95", maxMargin: 1.5 },
  { context: "A council wants to estimate mean journey time.", sigma: 5.8, confidence: "99", maxMargin: 2 },
  { context: "A lab wants to estimate mean concentration.", sigma: 0.46, confidence: "95", maxMargin: 0.1 },
];

const hardSampleSizeSpecs = [
  { context: "A pharmaceutical company wants a precise estimate of mean dose.", sigma: 1.8, confidence: "99", maxMargin: 0.4 },
  { context: "A transport study wants to estimate mean delay.", sigma: 6.5, confidence: "95", maxMargin: 1.25 },
  { context: "An environmental survey wants mean particulate level.", sigma: 3.4, confidence: "98", maxMargin: 0.8 },
  { context: "A manufacturer wants mean component diameter.", sigma: 0.16, confidence: "95", maxMargin: 0.03 },
  { context: "A health study wants mean resting pulse rate.", sigma: 8.2, confidence: "90", maxMargin: 1.5 },
];

const hardDecisionSpecs = [
  { context: "A filling process is supposed to have mean volume $500$ ml.", interval: [498.9, 501.4] as [number, number], claim: 500, confidence: "95" },
  { context: "A component is advertised as having mean lifetime $1200$ hours.", interval: [1211.6, 1248.3] as [number, number], claim: 1200, confidence: "99" },
  { context: "A school claims its mean test score is $70$ marks.", interval: [65.8, 69.6] as [number, number], claim: 70, confidence: "95" },
  { context: "A courier claims its mean delivery time is $45$ minutes.", interval: [42.1, 46.8] as [number, number], claim: 45, confidence: "90" },
  { context: "A tablet is labelled as containing mean mass $250$ mg.", interval: [250.7, 252.9] as [number, number], claim: 250, confidence: "98" },
  { context: "A training plan claims mean improvement is $3.5$ seconds.", interval: [2.8, 4.1] as [number, number], claim: 3.5, confidence: "95" },
];

const hardMethodSpecs = [
  { context: "A researcher samples $12$ growth measurements from plants in a controlled experiment.", sigmaKnown: false, n: 12, normalStated: true },
  { context: "A quality-control engineer samples $40$ bolt diameters from a stable production line.", sigmaKnown: true, n: 40, normalStated: false },
  { context: "A geologist samples $9$ mineral concentrations from a skew-prone deposit.", sigmaKnown: false, n: 9, normalStated: false },
  { context: "A hospital samples $18$ recovery times from patients after a standard treatment.", sigmaKnown: true, n: 18, normalStated: true },
  { context: "A lecturer samples $28$ coursework times from a cohort.", sigmaKnown: false, n: 28, normalStated: false },
];

export const questions: Question[] = [
  ...easyZSpecs.map((spec, index) => makeQuestion(index + 1, zIntervalShell(spec))),
  ...easyTSpecs.map((spec, index) => makeQuestion(index + 11, tIntervalShell(spec))),
  ...interpretationSpecs.map((spec, index) =>
    makeQuestion(index + 19, interpretationShell(spec.context, spec.interval, spec.confidence, spec.variable, spec.unit)),
  ),
  ...intermediateZSpecs.map((spec, index) =>
    makeQuestion(index + 25, zIntervalShell({ ...spec, difficulty: "Intermediate", marks: 6 })),
  ),
  ...intermediateTSpecs.map((spec, index) =>
    makeQuestion(index + 37, tIntervalShell({ ...spec, difficulty: "Intermediate", marks: 7 })),
  ),
  ...widthSpecs.map((spec, index) => makeQuestion(index + 49, widthShell(spec))),
  ...sampleSizeSpecs.map((spec, index) => makeQuestion(index + 52, sampleSizeShell(spec))),
  ...hardSampleSizeSpecs.map((spec, index) => makeQuestion(index + 55, sampleSizeShell({ ...spec, difficulty: "Hard" }))),
  ...hardDecisionSpecs.map((spec, index) => makeQuestion(index + 60, decisionShell(spec))),
  ...hardMethodSpecs.map((spec, index) => makeQuestion(index + 66, methodChoiceShell(spec))),
];
