import { Question } from "@/lib/types";

const LEVEL = "A-Level Further Maths";
const TOPIC = "Further Maths Year 2: Statistics (Further Statistics 2)";
const SUBTOPIC = "Further hypothesis tests";
const SUBTOPIC_ID = "fm.y2.stats.further-tests";

type Difficulty = Question["difficulty"];
type Step = Question["workedSolution"]["steps"][number];
type Direction = "greater" | "less" | "notEqual";

interface Shell {
  difficulty: Difficulty;
  marks: number;
  answerType: string;
  tags: string[];
  questionText: string;
  steps: Step[];
  finalAnswer: string;
}

interface TwoSampleCase {
  context: string;
  labelA: string;
  labelB: string;
  nA: number;
  meanA: number;
  sdA: number;
  nB: number;
  meanB: number;
  sdB: number;
  direction: Direction;
  alpha: string;
  critical: number;
  claim: string;
}

interface FTestCase {
  context: string;
  labelA: string;
  labelB: string;
  nA: number;
  sA: number;
  nB: number;
  sB: number;
  alpha: string;
  critical: number;
}

interface PairedCase {
  context: string;
  n: number;
  meanDiff: number;
  sdDiff: number;
  direction: Direction;
  alpha: string;
  critical: number;
  diffMeaning: string;
}

interface ChoiceCase {
  context: string;
  choice: string;
  reason: string;
  assumption: string;
}

const qid = (n: number): string => `${SUBTOPIC_ID}.q${String(n).padStart(3, "0")}`;

function fmt(value: number, dp = 3): string {
  const rounded = Number(value.toFixed(dp));
  return Number.isInteger(rounded) ? rounded.toString() : rounded.toString();
}

function step(stepNumber: number, description: string, workingLatex: string, explanation: string): Step {
  return { stepNumber, description, workingLatex, explanation, diagram: null };
}

function makeQuestion(index: number, shell: Shell): Question {
  return {
    level: LEVEL,
    topic: TOPIC,
    subtopic: SUBTOPIC,
    subtopicId: SUBTOPIC_ID,
    questionDiagram: null,
    id: qid(index),
    tags: shell.tags,
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

function alternativeLatex(direction: Direction, parameter = "\\mu_A-\\mu_B"): string {
  if (direction === "greater") return `H_1:${parameter}>0`;
  if (direction === "less") return `H_1:${parameter}<0`;
  return `H_1:${parameter}\\ne0`;
}

function compareStatistic(testStatistic: number, critical: number, direction: Direction): string {
  if (direction === "greater") return testStatistic > critical ? "reject" : "do not reject";
  if (direction === "less") return testStatistic < -critical ? "reject" : "do not reject";
  return Math.abs(testStatistic) > critical ? "reject" : "do not reject";
}

function rejectionRule(symbol: string, critical: number, direction: Direction): string {
  if (direction === "greater") return `${symbol}>${critical}`;
  if (direction === "less") return `${symbol}<-${critical}`;
  return `|${symbol}|>${critical}`;
}

function conclusion(decision: string, claim: string): string {
  return decision === "reject"
    ? `There is sufficient evidence that ${claim}.`
    : `There is insufficient evidence that ${claim}.`;
}

function knownVarianceZQuestion(data: TwoSampleCase): Shell {
  const se = Math.sqrt(data.sdA ** 2 / data.nA + data.sdB ** 2 / data.nB);
  const z = (data.meanA - data.meanB) / se;
  const decision = compareStatistic(z, data.critical, data.direction);
  return {
    difficulty: "Easy",
    marks: 5,
    answerType: "written",
    tags: ["difference of means", "z-test", "known variances"],
    questionText: `${data.context} Independent normal samples give $n_A=${data.nA}$, $\\bar{x}_A=${data.meanA}$, known $\\sigma_A=${data.sdA}$ and $n_B=${data.nB}$, $\\bar{x}_B=${data.meanB}$, known $\\sigma_B=${data.sdB}$. At the ${data.alpha} level, test ${data.claim}, using critical value ${data.critical}.`,
    steps: [
      step(1, "State the null hypothesis", "H_0:\\mu_A-\\mu_B=0", "The null hypothesis says there is no difference between the two population means."),
      step(2, "State the alternative hypothesis", alternativeLatex(data.direction), "The alternative must match the wording of the claim being tested."),
      step(3, "Choose the test statistic", "Z=\\dfrac{\\bar{X}_A-\\bar{X}_B}{\\sqrt{\\sigma_A^2/n_A+\\sigma_B^2/n_B}}", "Known population standard deviations allow a standard normal test statistic."),
      step(4, "Find the standard error", `\\sqrt{\\dfrac{${data.sdA}^2}{${data.nA}}+\\dfrac{${data.sdB}^2}{${data.nB}}}=${fmt(se)}`, "The standard error measures the typical sampling variation in the difference of sample means."),
      step(5, "Calculate the test statistic", `z=\\dfrac{${data.meanA}-${data.meanB}}{${fmt(se)}}=${fmt(z)}`, "The observed difference is measured in standard-error units."),
      step(6, "Write the rejection rule", `\\text{Reject }H_0\\text{ if }${rejectionRule("z", data.critical, data.direction)}.`, "The critical region is set by the significance level and the direction of the test."),
      step(7, "Make the test decision", `${fmt(z)}\\Rightarrow \\text{${decision} }H_0`, "The calculated statistic is compared with the critical region."),
      step(8, "State the contextual conclusion", `\\text{${conclusion(decision, data.claim)}}`, "A hypothesis-test answer should finish in the language of the original problem."),
    ],
    finalAnswer: conclusion(decision, data.claim),
  };
}

function largeSampleZQuestion(data: TwoSampleCase): Shell {
  const se = Math.sqrt(data.sdA ** 2 / data.nA + data.sdB ** 2 / data.nB);
  const z = (data.meanA - data.meanB) / se;
  const decision = compareStatistic(z, data.critical, data.direction);
  return {
    difficulty: "Intermediate",
    marks: 6,
    answerType: "written",
    tags: ["difference of means", "large sample", "z-test"],
    questionText: `${data.context} Large independent samples give $n_A=${data.nA}$, $\\bar{x}_A=${data.meanA}$, $s_A=${data.sdA}$ and $n_B=${data.nB}$, $\\bar{x}_B=${data.meanB}$, $s_B=${data.sdB}$. Test ${data.claim} at the ${data.alpha} level, using critical value ${data.critical}.`,
    steps: [
      step(1, "State the null hypothesis", "H_0:\\mu_A-\\mu_B=0", "The starting assumption is that the two population means are equal."),
      step(2, "State the alternative hypothesis", alternativeLatex(data.direction), "The alternative captures the direction, or two-sided nature, of the suspected difference."),
      step(3, "Justify the approximate test", "\\text{Large samples allow }s_A\\text{ and }s_B\\text{ to estimate }\\sigma_A\\text{ and }\\sigma_B.", "For large samples, the sampling distribution of the difference in means is approximately normal."),
      step(4, "Use the large-sample statistic", "Z=\\dfrac{\\bar{X}_A-\\bar{X}_B}{\\sqrt{s_A^2/n_A+s_B^2/n_B}}", "The sample standard deviations are used inside the estimated standard error."),
      step(5, "Calculate the standard error", `\\sqrt{\\dfrac{${data.sdA}^2}{${data.nA}}+\\dfrac{${data.sdB}^2}{${data.nB}}}=${fmt(se)}`, "Combining the two sampling variances gives the uncertainty in the difference."),
      step(6, "Calculate the test statistic", `z=\\dfrac{${data.meanA}-${data.meanB}}{${fmt(se)}}=${fmt(z)}`, "A positive value favours $A$ having the larger mean; a negative value favours $B$."),
      step(7, "Write the rejection rule", `\\text{Reject }H_0\\text{ if }${rejectionRule("z", data.critical, data.direction)}.`, "The rejection rule turns the significance level into a numerical boundary."),
      step(8, "Make the decision", `${fmt(z)}\\Rightarrow \\text{${decision} }H_0`, "Only statistics in the critical region give sufficient evidence against the null hypothesis."),
      step(9, "Conclude in context", `\\text{${conclusion(decision, data.claim)}}`, "The final sentence should answer the question in practical terms."),
    ],
    finalAnswer: conclusion(decision, data.claim),
  };
}

function fTestQuestion(data: FTestCase): Shell {
  const varA = data.sA ** 2;
  const varB = data.sB ** 2;
  const larger = varA >= varB ? { label: data.labelA, variance: varA, df: data.nA - 1 } : { label: data.labelB, variance: varB, df: data.nB - 1 };
  const smaller = varA >= varB ? { label: data.labelB, variance: varB, df: data.nB - 1 } : { label: data.labelA, variance: varA, df: data.nA - 1 };
  const f = larger.variance / smaller.variance;
  const decision = f > data.critical ? "reject" : "do not reject";
  const final = decision === "reject"
    ? "There is evidence that the population variances are different."
    : "There is insufficient evidence that the population variances are different.";
  return {
    difficulty: "Easy",
    marks: 5,
    answerType: "written",
    tags: ["F-test", "variance", "two samples"],
    questionText: `${data.context} Independent normal samples have $n_A=${data.nA}$, $s_A=${data.sA}$ and $n_B=${data.nB}$, $s_B=${data.sB}$. Use an F-test at the ${data.alpha} level to test whether the population variances differ, using upper critical value ${data.critical}.`,
    steps: [
      step(1, "State the hypotheses", "H_0:\\sigma_A^2=\\sigma_B^2,\\qquad H_1:\\sigma_A^2\\ne\\sigma_B^2", "The F-test compares population variances, not population means."),
      step(2, "Square the sample standard deviations", `s_A^2=${fmt(varA)},\\qquad s_B^2=${fmt(varB)}`, "The F statistic is formed from sample variances."),
      step(3, "Put the larger variance on top", `F=\\dfrac{s_{${larger.label}}^2}{s_{${smaller.label}}^2}`, "Using the larger variance in the numerator gives an upper-tail comparison."),
      step(4, "Calculate the statistic", `F=\\dfrac{${fmt(larger.variance)}}{${fmt(smaller.variance)}}=${fmt(f)}`, "A value close to 1 suggests similar variances; a large value suggests a difference."),
      step(5, "State the degrees of freedom", `\\nu_1=${larger.df},\\qquad \\nu_2=${smaller.df}`, "Each variance estimate has one fewer degree of freedom than its sample size."),
      step(6, "Compare with the critical value", `${fmt(f)}\\ ${f > data.critical ? ">" : "<"}\\ ${data.critical}`, "Only values beyond the critical value are unusual enough under equal variances."),
      step(7, "Make the decision", `\\text{${decision} }H_0`, "This decides whether the observed variance ratio is statistically significant."),
      step(8, "State the conclusion", `\\text{${final}}`, "The conclusion should refer to population variances, since samples naturally vary."),
    ],
    finalAnswer: final,
  };
}

function choiceQuestion(data: ChoiceCase): Shell {
  return {
    difficulty: "Easy",
    marks: 4,
    answerType: "written",
    tags: ["test choice", "assumptions", "hypothesis tests"],
    questionText: `${data.context} State the most appropriate hypothesis test and give a reason.`,
    steps: [
      step(1, "Identify what is being compared", "\\text{Look at the parameter in the question.}", "The test is chosen by the population feature being investigated."),
      step(2, "Identify the sample structure", "\\text{Check whether samples are independent, paired, or variance-focused.}", "Independent samples, paired observations and variance comparisons require different test statistics."),
      step(3, "Select the test", `\\text{Use a ${data.choice}.}`, "The selected test matches the parameter and sample structure."),
      step(4, "Give the main reason", `\\text{${data.reason}}`, "A method choice answer should justify why this statistic is suitable."),
      step(5, "State an assumption", `\\text{${data.assumption}}`, "Hypothesis tests rely on modelling assumptions as well as calculations."),
      step(6, "Finish with the recommendation", `\\text{Recommended test: ${data.choice}.}`, "The final line makes the answer unambiguous."),
    ],
    finalAnswer: `Use a ${data.choice}: ${data.reason}`,
  };
}

function pooledTQuestion(data: TwoSampleCase): Shell {
  const sp2 = ((data.nA - 1) * data.sdA ** 2 + (data.nB - 1) * data.sdB ** 2) / (data.nA + data.nB - 2);
  const se = Math.sqrt(sp2 * (1 / data.nA + 1 / data.nB));
  const t = (data.meanA - data.meanB) / se;
  const decision = compareStatistic(t, data.critical, data.direction);
  const df = data.nA + data.nB - 2;
  return {
    difficulty: "Intermediate",
    marks: 7,
    answerType: "written",
    tags: ["two-sample t-test", "pooled variance", "difference of means"],
    questionText: `${data.context} Independent normal samples with equal population variances give $n_A=${data.nA}$, $\\bar{x}_A=${data.meanA}$, $s_A=${data.sdA}$ and $n_B=${data.nB}$, $\\bar{x}_B=${data.meanB}$, $s_B=${data.sdB}$. At the ${data.alpha} level, test ${data.claim}, using critical value ${data.critical}.`,
    steps: [
      step(1, "State the null hypothesis", "H_0:\\mu_A-\\mu_B=0", "The null model says the two population means are the same."),
      step(2, "State the alternative hypothesis", alternativeLatex(data.direction), "The alternative follows the direction of the claim."),
      step(3, "Use the equal-variance model", "\\sigma_A^2=\\sigma_B^2\\text{ is assumed.}", "This allows the two sample variances to be pooled into one estimate."),
      step(4, "Calculate the pooled variance", `s_p^2=\\dfrac{(${data.nA - 1})${data.sdA}^2+(${data.nB - 1})${data.sdB}^2}{${df}}=${fmt(sp2)}`, "The pooled estimate weights each sample variance by its degrees of freedom."),
      step(5, "Find the standard error", `s_p\\sqrt{\\dfrac1{${data.nA}}+\\dfrac1{${data.nB}}}=${fmt(se)}`, "This is the estimated spread of $\\bar{X}_A-\\bar{X}_B$ under the null hypothesis."),
      step(6, "Calculate the test statistic", `t=\\dfrac{${data.meanA}-${data.meanB}}{${fmt(se)}}=${fmt(t)}`, "The statistic measures the observed difference in estimated standard-error units."),
      step(7, "State the degrees of freedom", `\\nu=${data.nA}+${data.nB}-2=${df}`, "Pooling uses both samples, losing one degree of freedom from each."),
      step(8, "Write the critical rule", `\\text{Reject }H_0\\text{ if }${rejectionRule("t", data.critical, data.direction)}.`, "The t critical value depends on the degrees of freedom and significance level."),
      step(9, "Compare the statistic", `${fmt(t)}\\Rightarrow\\text{ ${decision} }H_0`, "The statistic is judged against the appropriate tail or tails."),
      step(10, "State the statistical conclusion", `\\text{${conclusion(decision, data.claim)}}`, "The conclusion should reflect whether the data gave enough evidence."),
      step(11, "Keep the context", "\\text{This is about population means, not just these samples.}", "The hypothesis test makes an inference about the underlying populations."),
    ],
    finalAnswer: conclusion(decision, data.claim),
  };
}

function pairedTQuestion(data: PairedCase): Shell {
  const se = data.sdDiff / Math.sqrt(data.n);
  const t = data.meanDiff / se;
  const decision = compareStatistic(t, data.critical, data.direction);
  const final = conclusion(decision, data.diffMeaning);
  return {
    difficulty: "Intermediate",
    marks: 7,
    answerType: "written",
    tags: ["paired t-test", "mean difference", "matched pairs"],
    questionText: `${data.context} For $n=${data.n}$ paired differences, defined as after minus before, $\\bar{d}=${data.meanDiff}$ and $s_d=${data.sdDiff}$. Test ${data.diffMeaning} at the ${data.alpha} level, using critical value ${data.critical}.`,
    steps: [
      step(1, "Define the parameter", "\\mu_d=\\text{population mean paired difference}", "A paired test reduces each pair to one difference."),
      step(2, "State the null hypothesis", "H_0:\\mu_d=0", "No mean change corresponds to a zero population mean difference."),
      step(3, "State the alternative hypothesis", alternativeLatex(data.direction, "\\mu_d"), "The alternative follows the claimed direction of the mean difference."),
      step(4, "Choose the paired t statistic", "t=\\dfrac{\\bar{d}}{s_d/\\sqrt{n}}", "The population standard deviation of differences is unknown, so a t statistic is used."),
      step(5, "Calculate the standard error", `\\dfrac{${data.sdDiff}}{\\sqrt{${data.n}}}=${fmt(se)}`, "This estimates how much the sample mean difference varies from sample to sample."),
      step(6, "Calculate the statistic", `t=\\dfrac{${data.meanDiff}}{${fmt(se)}}=${fmt(t)}`, "The statistic compares the observed mean change with its standard error."),
      step(7, "State the degrees of freedom", `\\nu=${data.n}-1=${data.n - 1}`, "A one-sample t test on the differences has $n-1$ degrees of freedom."),
      step(8, "Apply the rejection rule", `\\text{Reject }H_0\\text{ if }${rejectionRule("t", data.critical, data.direction)}.`, "The critical region matches the direction of the test."),
      step(9, "Make the decision", `${fmt(t)}\\Rightarrow\\text{ ${decision} }H_0`, "The decision comes directly from whether the statistic enters the critical region."),
      step(10, "Conclude in context", `\\text{${final}}`, "The conclusion is written in terms of the paired change being studied."),
    ],
    finalAnswer: final,
  };
}

function twoStageQuestion(data: TwoSampleCase & { fCritical: number; tCritical: number }): Shell {
  const varA = data.sdA ** 2;
  const varB = data.sdB ** 2;
  const f = Math.max(varA, varB) / Math.min(varA, varB);
  const df = data.nA + data.nB - 2;
  const sp2 = ((data.nA - 1) * varA + (data.nB - 1) * varB) / df;
  const se = Math.sqrt(sp2 * (1 / data.nA + 1 / data.nB));
  const t = (data.meanA - data.meanB) / se;
  const fDecision = f > data.fCritical ? "reject" : "do not reject";
  const tDecision = compareStatistic(t, data.tCritical, data.direction);
  const final = fDecision === "reject"
    ? "The equal-variance pooled t-test is not appropriate after the F-test."
    : conclusion(tDecision, data.claim);
  return {
    difficulty: "Hard",
    marks: 10,
    answerType: "written",
    tags: ["F-test", "two-sample t-test", "test selection", "difference of means"],
    questionText: `${data.context} Independent normal samples give $n_A=${data.nA}$, $\\bar{x}_A=${data.meanA}$, $s_A=${data.sdA}$ and $n_B=${data.nB}$, $\\bar{x}_B=${data.meanB}$, $s_B=${data.sdB}$. First test equality of variances using F critical value ${data.fCritical}; then, if appropriate, test ${data.claim} using t critical value ${data.tCritical}.`,
    steps: [
      step(1, "Set up the variance test", "H_0:\\sigma_A^2=\\sigma_B^2,\\qquad H_1:\\sigma_A^2\\ne\\sigma_B^2", "Before pooling variances, we check whether equal variances are plausible."),
      step(2, "Calculate the sample variances", `s_A^2=${fmt(varA)},\\qquad s_B^2=${fmt(varB)}`, "The F statistic compares variances rather than standard deviations."),
      step(3, "Form the F statistic", `F=\\dfrac{${fmt(Math.max(varA, varB))}}{${fmt(Math.min(varA, varB))}}=${fmt(f)}`, "Putting the larger variance on top gives an upper-tail test."),
      step(4, "Compare with the F critical value", `${fmt(f)}\\ ${f > data.fCritical ? ">" : "<"}\\ ${data.fCritical}`, "A large ratio would suggest unequal population variances."),
      step(5, "Decide on variance equality", `\\text{${fDecision} }H_0`, "This tells us whether the pooled-variance model is reasonable."),
      step(6, "State the mean hypotheses", `H_0:\\mu_A-\\mu_B=0,\\qquad ${alternativeLatex(data.direction)}`, "The second test compares the two population means."),
      step(7, "Pool the variances", `s_p^2=\\dfrac{(${data.nA - 1})${fmt(varA)}+(${data.nB - 1})${fmt(varB)}}{${df}}=${fmt(sp2)}`, "Pooling combines the two variance estimates using their degrees of freedom."),
      step(8, "Find the standard error", `s_p\\sqrt{\\dfrac1{${data.nA}}+\\dfrac1{${data.nB}}}=${fmt(se)}`, "This is the estimated standard deviation of the difference in sample means."),
      step(9, "Calculate the t statistic", `t=\\dfrac{${data.meanA}-${data.meanB}}{${fmt(se)}}=${fmt(t)}`, "The sample mean difference is converted into t units."),
      step(10, "State the t degrees of freedom", `\\nu=${data.nA}+${data.nB}-2=${df}`, "The pooled two-sample test uses the combined degrees of freedom."),
      step(11, "Write the t rejection rule", `\\text{Reject }H_0\\text{ if }${rejectionRule("t", data.tCritical, data.direction)}.`, "The rule depends on whether the test is one-tailed or two-tailed."),
      step(12, "Compare the t statistic", `${fmt(t)}\\Rightarrow\\text{ ${tDecision} }H_0`, "This decides whether the mean difference is statistically significant."),
      step(13, "Combine the two tests", "\\text{Variance check first, mean test second.}", "The order matters because the mean test used the pooled-variance assumption."),
      step(14, "State the final conclusion", `\\text{${final}}`, "The final answer should reflect both the appropriateness of the model and the mean-test result."),
    ],
    finalAnswer: final,
  };
}

const choiceCases: ChoiceCase[] = [
  {
    context: "A researcher records each patient's blood pressure before and after a treatment.",
    choice: "paired t-test on the differences",
    reason: "the two measurements are linked within the same patient",
    assumption: "the population of paired differences is approximately normal",
  },
  {
    context: "Two independent machines fill bottles, and the manager wants to know whether their variances differ.",
    choice: "F-test for equality of variances",
    reason: "the parameter being compared is variance for two independent normal populations",
    assumption: "the two parent populations are approximately normal",
  },
  {
    context: "Two independent large samples compare the mean lifetimes of two brands, but population variances are unknown.",
    choice: "large-sample z-test for the difference of means",
    reason: "large samples allow the sample standard deviations to estimate the population standard deviations",
    assumption: "the samples are independent and large enough for an approximate normal test",
  },
  {
    context: "Two small independent normal samples are believed to have equal variances and are used to compare mean yields.",
    choice: "pooled two-sample t-test",
    reason: "the samples are independent, normal and the population variances are assumed equal",
    assumption: "the equal-variance assumption is reasonable",
  },
  {
    context: "A factory compares the same set of components before and after heat treatment.",
    choice: "paired t-test on before-after differences",
    reason: "each after value is naturally matched to a before value for the same component",
    assumption: "the paired differences are approximately normally distributed",
  },
  {
    context: "Two independent normal samples are to be compared for mean output, but an F-test is requested first.",
    choice: "F-test followed by a pooled t-test if equal variances are plausible",
    reason: "the variance test checks whether pooling is appropriate before testing the means",
    assumption: "both populations are approximately normal",
  },
];

const knownZCases: TwoSampleCase[] = [
  { context: "A lab compares the mean purity percentages from processes A and B.", labelA: "A", labelB: "B", nA: 36, meanA: 94.8, sdA: 2.4, nB: 49, meanB: 93.7, sdB: 2.8, direction: "greater", alpha: "5%", critical: 1.645, claim: "process A has a higher mean purity than process B" },
  { context: "A supplier compares mean delivery times, in hours, for two routes.", labelA: "A", labelB: "B", nA: 40, meanA: 18.2, sdA: 3.6, nB: 35, meanB: 19.5, sdB: 3.2, direction: "less", alpha: "5%", critical: 1.645, claim: "route A has a lower mean delivery time than route B" },
  { context: "A school compares mean scores from two independent revision programmes.", labelA: "A", labelB: "B", nA: 50, meanA: 68.4, sdA: 9.2, nB: 45, meanB: 65.1, sdB: 8.8, direction: "notEqual", alpha: "5%", critical: 1.96, claim: "the two programmes have different mean scores" },
  { context: "A manufacturer compares mean breaking loads, in newtons, for two fibres.", labelA: "A", labelB: "B", nA: 30, meanA: 412, sdA: 24, nB: 32, meanB: 399, sdB: 20, direction: "greater", alpha: "1%", critical: 2.326, claim: "fibre A has a higher mean breaking load than fibre B" },
  { context: "A dietitian compares mean daily sugar intake, in grams, for two plans.", labelA: "A", labelB: "B", nA: 44, meanA: 51.2, sdA: 11.5, nB: 42, meanB: 56.8, sdB: 10.7, direction: "less", alpha: "1%", critical: 2.326, claim: "plan A gives a lower mean sugar intake than plan B" },
  { context: "A company compares mean call-handling times, in seconds, between two offices.", labelA: "A", labelB: "B", nA: 60, meanA: 242, sdA: 35, nB: 55, meanB: 231, sdB: 32, direction: "notEqual", alpha: "5%", critical: 1.96, claim: "the offices have different mean call-handling times" },
  { context: "A botanist compares mean plant heights, in cm, under two lighting systems.", labelA: "A", labelB: "B", nA: 38, meanA: 27.4, sdA: 4.1, nB: 38, meanB: 25.9, sdB: 3.9, direction: "greater", alpha: "5%", critical: 1.645, claim: "lighting system A gives a higher mean height than system B" },
  { context: "An analyst compares mean waiting times, in minutes, at two clinics.", labelA: "A", labelB: "B", nA: 52, meanA: 16.8, sdA: 5.4, nB: 48, meanB: 18.1, sdB: 5.1, direction: "less", alpha: "5%", critical: 1.645, claim: "clinic A has a lower mean waiting time than clinic B" },
];

const fCases: FTestCase[] = [
  { context: "A quality engineer compares the variability of shaft diameters from two lathes.", labelA: "A", labelB: "B", nA: 12, sA: 0.42, nB: 10, sB: 0.31, alpha: "5%", critical: 3.18 },
  { context: "A teacher compares the variability of marks from two classes.", labelA: "A", labelB: "B", nA: 16, sA: 8.4, nB: 14, sB: 6.2, alpha: "5%", critical: 2.67 },
  { context: "A nursery compares the spread of seedling heights under two fertilisers.", labelA: "A", labelB: "B", nA: 11, sA: 3.8, nB: 13, sB: 5.6, alpha: "5%", critical: 3.03 },
  { context: "A courier compares the consistency of journey times on two routes.", labelA: "A", labelB: "B", nA: 15, sA: 7.1, nB: 15, sB: 4.2, alpha: "1%", critical: 4.03 },
  { context: "A chemist compares variability in concentration from two instruments.", labelA: "A", labelB: "B", nA: 9, sA: 0.18, nB: 12, sB: 0.29, alpha: "5%", critical: 3.59 },
  { context: "An athletics coach compares the variability of sprint times for two training groups.", labelA: "A", labelB: "B", nA: 18, sA: 0.36, nB: 16, sB: 0.28, alpha: "5%", critical: 2.54 },
  { context: "A farm compares the variability of daily milk yields from two herds.", labelA: "A", labelB: "B", nA: 10, sA: 4.9, nB: 10, sB: 2.6, alpha: "5%", critical: 4.03 },
  { context: "A technician compares variability in battery discharge times for two designs.", labelA: "A", labelB: "B", nA: 14, sA: 11.2, nB: 12, sB: 8.9, alpha: "5%", critical: 2.95 },
];

const largeZCases: TwoSampleCase[] = [
  { context: "A council compares mean weekly recycling masses, in kg, for two districts.", labelA: "A", labelB: "B", nA: 80, meanA: 12.6, sdA: 4.8, nB: 75, meanB: 11.1, sdB: 4.5, direction: "greater", alpha: "5%", critical: 1.645, claim: "district A has a higher mean weekly recycling mass than district B" },
  { context: "A bank compares mean service times, in minutes, for two branches.", labelA: "A", labelB: "B", nA: 90, meanA: 7.8, sdA: 2.5, nB: 85, meanB: 8.4, sdB: 2.7, direction: "less", alpha: "5%", critical: 1.645, claim: "branch A has a lower mean service time than branch B" },
  { context: "A website compares mean session lengths, in seconds, under two page designs.", labelA: "A", labelB: "B", nA: 120, meanA: 185, sdA: 46, nB: 115, meanB: 172, sdB: 49, direction: "notEqual", alpha: "5%", critical: 1.96, claim: "the two page designs have different mean session lengths" },
  { context: "A researcher compares mean resting pulse rates for two exercise groups.", labelA: "A", labelB: "B", nA: 70, meanA: 64.2, sdA: 8.1, nB: 68, meanB: 66.7, sdB: 7.9, direction: "less", alpha: "5%", critical: 1.645, claim: "group A has a lower mean resting pulse rate than group B" },
  { context: "An energy company compares mean daily electricity usage, in kWh, for two tariffs.", labelA: "A", labelB: "B", nA: 95, meanA: 21.3, sdA: 6.8, nB: 100, meanB: 20.1, sdB: 6.5, direction: "greater", alpha: "5%", critical: 1.645, claim: "tariff A is associated with a higher mean daily usage than tariff B" },
  { context: "A hospital compares mean recovery times, in days, for two physiotherapy plans.", labelA: "A", labelB: "B", nA: 65, meanA: 18.4, sdA: 5.6, nB: 72, meanB: 20.2, sdB: 6.1, direction: "less", alpha: "1%", critical: 2.326, claim: "plan A has a lower mean recovery time than plan B" },
  { context: "A retailer compares mean basket values, in pounds, for two store formats.", labelA: "A", labelB: "B", nA: 110, meanA: 34.8, sdA: 12.4, nB: 105, meanB: 31.9, sdB: 11.8, direction: "greater", alpha: "1%", critical: 2.326, claim: "format A has a higher mean basket value than format B" },
  { context: "A college compares mean commute times, in minutes, for two campuses.", labelA: "A", labelB: "B", nA: 88, meanA: 42.1, sdA: 13.3, nB: 92, meanB: 38.7, sdB: 12.9, direction: "notEqual", alpha: "5%", critical: 1.96, claim: "the campuses have different mean commute times" },
  { context: "A publisher compares mean reading times, in minutes, for two article layouts.", labelA: "A", labelB: "B", nA: 76, meanA: 5.8, sdA: 1.9, nB: 79, meanB: 6.4, sdB: 2.1, direction: "less", alpha: "5%", critical: 1.645, claim: "layout A has a lower mean reading time than layout B" },
  { context: "A fitness app compares mean weekly step counts, in thousands, for two reminder systems.", labelA: "A", labelB: "B", nA: 100, meanA: 54.2, sdA: 15.1, nB: 98, meanB: 50.5, sdB: 14.8, direction: "greater", alpha: "5%", critical: 1.645, claim: "system A produces a higher mean weekly step count than system B" },
];

const pooledTCases: TwoSampleCase[] = [
  { context: "A farm compares mean crop yield, in tonnes per hectare, from two seed varieties.", labelA: "A", labelB: "B", nA: 9, meanA: 7.4, sdA: 0.8, nB: 10, meanB: 6.8, sdB: 0.7, direction: "greater", alpha: "5%", critical: 1.74, claim: "variety A has a higher mean yield than variety B" },
  { context: "A materials lab compares mean tensile strength, in MPa, for two alloys.", labelA: "A", labelB: "B", nA: 8, meanA: 512, sdA: 18, nB: 9, meanB: 527, sdB: 20, direction: "less", alpha: "5%", critical: 1.753, claim: "alloy A has a lower mean tensile strength than alloy B" },
  { context: "A school compares mean test marks from two teaching methods.", labelA: "A", labelB: "B", nA: 12, meanA: 71.5, sdA: 6.4, nB: 11, meanB: 68.2, sdB: 5.9, direction: "notEqual", alpha: "5%", critical: 2.08, claim: "the two teaching methods have different mean marks" },
  { context: "A brewery compares mean fill volumes, in ml, from two nozzles.", labelA: "A", labelB: "B", nA: 10, meanA: 501.2, sdA: 2.4, nB: 10, meanB: 499.5, sdB: 2.1, direction: "greater", alpha: "5%", critical: 1.734, claim: "nozzle A has a higher mean fill volume than nozzle B" },
  { context: "A transport analyst compares mean fuel consumption, in litres per 100 km, for two tyres.", labelA: "A", labelB: "B", nA: 11, meanA: 6.9, sdA: 0.42, nB: 12, meanB: 7.3, sdB: 0.45, direction: "less", alpha: "5%", critical: 1.721, claim: "tyre A gives lower mean fuel consumption than tyre B" },
  { context: "A biologist compares mean wing lengths, in mm, for two populations.", labelA: "A", labelB: "B", nA: 13, meanA: 28.6, sdA: 2.1, nB: 13, meanB: 30.2, sdB: 2.4, direction: "notEqual", alpha: "5%", critical: 2.064, claim: "the two populations have different mean wing lengths" },
  { context: "A manager compares mean daily output from two small production teams.", labelA: "A", labelB: "B", nA: 9, meanA: 104.5, sdA: 8.8, nB: 8, meanB: 96.7, sdB: 7.9, direction: "greater", alpha: "5%", critical: 1.753, claim: "team A has a higher mean daily output than team B" },
  { context: "A nurse compares mean sleep durations, in hours, for two treatment groups.", labelA: "A", labelB: "B", nA: 10, meanA: 6.1, sdA: 0.9, nB: 12, meanB: 6.7, sdB: 1.0, direction: "less", alpha: "5%", critical: 1.725, claim: "group A has a lower mean sleep duration than group B" },
  { context: "An engineer compares mean vibration amplitudes for two mounting systems.", labelA: "A", labelB: "B", nA: 14, meanA: 2.36, sdA: 0.31, nB: 12, meanB: 2.12, sdB: 0.29, direction: "notEqual", alpha: "5%", critical: 2.064, claim: "the two mounting systems have different mean vibration amplitudes" },
];

const pairedCases: PairedCase[] = [
  { context: "A coach measures athletes' 400 m times before and after a training block.", n: 12, meanDiff: -1.8, sdDiff: 2.4, direction: "less", alpha: "5%", critical: 1.796, diffMeaning: "the training reduces the mean time" },
  { context: "A tutor records students' scores before and after a revision course.", n: 15, meanDiff: 5.6, sdDiff: 7.2, direction: "greater", alpha: "5%", critical: 1.761, diffMeaning: "the course increases the mean score" },
  { context: "A clinic measures pain scores before and after a therapy.", n: 10, meanDiff: -2.1, sdDiff: 2.8, direction: "less", alpha: "5%", critical: 1.833, diffMeaning: "the therapy reduces the mean pain score" },
  { context: "A factory measures component lengths before and after calibration.", n: 9, meanDiff: 0.14, sdDiff: 0.18, direction: "notEqual", alpha: "5%", critical: 2.306, diffMeaning: "calibration changes the mean component length" },
  { context: "A nutritionist records cholesterol readings before and after a diet plan.", n: 14, meanDiff: -0.42, sdDiff: 0.66, direction: "less", alpha: "5%", critical: 1.771, diffMeaning: "the diet plan reduces the mean cholesterol reading" },
  { context: "An app developer records task completion times before and after a redesign.", n: 16, meanDiff: -7.4, sdDiff: 13.1, direction: "less", alpha: "5%", critical: 1.753, diffMeaning: "the redesign reduces the mean completion time" },
  { context: "A music teacher records sight-reading marks before and after a practice programme.", n: 11, meanDiff: 4.3, sdDiff: 5.1, direction: "greater", alpha: "5%", critical: 1.812, diffMeaning: "the programme increases the mean sight-reading mark" },
  { context: "A garage measures fuel efficiency before and after an engine tune.", n: 13, meanDiff: 1.9, sdDiff: 2.6, direction: "greater", alpha: "5%", critical: 1.782, diffMeaning: "the tune increases the mean fuel efficiency" },
  { context: "A physiotherapist measures flexibility before and after a stretching routine.", n: 18, meanDiff: 3.2, sdDiff: 6.4, direction: "greater", alpha: "5%", critical: 1.74, diffMeaning: "the routine increases the mean flexibility score" },
];

const hardCases: Array<TwoSampleCase & { fCritical: number; tCritical: number }> = [
  { context: "A chemist compares mean reaction yields from two catalysts.", labelA: "A", labelB: "B", nA: 10, meanA: 82.4, sdA: 4.2, nB: 11, meanB: 78.6, sdB: 3.7, direction: "greater", alpha: "5%", critical: 0, fCritical: 3.1, tCritical: 1.729, claim: "catalyst A has a higher mean yield than catalyst B" },
  { context: "An engineer compares mean surface roughness from two polishing methods.", labelA: "A", labelB: "B", nA: 12, meanA: 1.84, sdA: 0.22, nB: 10, meanB: 2.03, sdB: 0.26, direction: "less", alpha: "5%", critical: 0, fCritical: 3.26, tCritical: 1.725, claim: "method A gives a lower mean roughness than method B" },
  { context: "A researcher compares mean concentration readings from two instruments.", labelA: "A", labelB: "B", nA: 9, meanA: 15.7, sdA: 1.1, nB: 9, meanB: 14.9, sdB: 0.95, direction: "notEqual", alpha: "5%", critical: 0, fCritical: 4.43, tCritical: 2.12, claim: "the instruments have different mean readings" },
  { context: "A farm compares mean protein percentages from two feed types.", labelA: "A", labelB: "B", nA: 13, meanA: 18.6, sdA: 1.5, nB: 12, meanB: 17.4, sdB: 1.3, direction: "greater", alpha: "5%", critical: 0, fCritical: 2.79, tCritical: 1.714, claim: "feed A gives a higher mean protein percentage than feed B" },
  { context: "A physiologist compares mean recovery heart rates under two warm-down routines.", labelA: "A", labelB: "B", nA: 10, meanA: 96.2, sdA: 7.6, nB: 12, meanB: 101.8, sdB: 8.4, direction: "less", alpha: "5%", critical: 0, fCritical: 3.23, tCritical: 1.725, claim: "routine A gives a lower mean recovery heart rate than routine B" },
  { context: "A data centre compares mean processor temperatures under two cooling systems.", labelA: "A", labelB: "B", nA: 14, meanA: 61.5, sdA: 3.8, nB: 13, meanB: 64.1, sdB: 4.1, direction: "less", alpha: "5%", critical: 0, fCritical: 2.69, tCritical: 1.708, claim: "system A has a lower mean processor temperature than system B" },
  { context: "A sports scientist compares mean jump heights from two training plans.", labelA: "A", labelB: "B", nA: 11, meanA: 48.2, sdA: 5.4, nB: 10, meanB: 44.6, sdB: 4.9, direction: "greater", alpha: "5%", critical: 0, fCritical: 3.14, tCritical: 1.729, claim: "plan A gives a higher mean jump height than plan B" },
  { context: "A publisher compares mean comprehension scores for two textbook layouts.", labelA: "A", labelB: "B", nA: 12, meanA: 74.3, sdA: 6.8, nB: 12, meanB: 70.1, sdB: 7.1, direction: "greater", alpha: "5%", critical: 0, fCritical: 2.82, tCritical: 1.717, claim: "layout A gives a higher mean comprehension score than layout B" },
  { context: "A workshop compares mean assembly times for two jig designs.", labelA: "A", labelB: "B", nA: 9, meanA: 36.8, sdA: 3.9, nB: 10, meanB: 39.6, sdB: 4.3, direction: "less", alpha: "5%", critical: 0, fCritical: 3.44, tCritical: 1.74, claim: "jig A gives a lower mean assembly time than jig B" },
  { context: "A conservation team compares mean nitrate levels in two streams.", labelA: "A", labelB: "B", nA: 10, meanA: 4.8, sdA: 0.72, nB: 9, meanB: 5.5, sdB: 0.81, direction: "notEqual", alpha: "5%", critical: 0, fCritical: 3.39, tCritical: 2.11, claim: "the streams have different mean nitrate levels" },
  { context: "A hospital compares mean waiting times from two triage systems.", labelA: "A", labelB: "B", nA: 15, meanA: 22.4, sdA: 6.1, nB: 14, meanB: 26.8, sdB: 5.7, direction: "less", alpha: "5%", critical: 0, fCritical: 2.58, tCritical: 1.703, claim: "system A gives a lower mean waiting time than system B" },
  { context: "A phone maker compares mean battery lives from two prototypes.", labelA: "A", labelB: "B", nA: 12, meanA: 18.7, sdA: 2.2, nB: 13, meanB: 17.1, sdB: 2.4, direction: "greater", alpha: "5%", critical: 0, fCritical: 2.79, tCritical: 1.714, claim: "prototype A has a higher mean battery life than prototype B" },
  { context: "A council compares mean noise levels beside two road surfaces.", labelA: "A", labelB: "B", nA: 11, meanA: 68.4, sdA: 4.5, nB: 11, meanB: 71.2, sdB: 4.1, direction: "less", alpha: "5%", critical: 0, fCritical: 2.98, tCritical: 1.725, claim: "surface A has a lower mean noise level than surface B" },
  { context: "A manufacturer compares mean thicknesses from two coating processes.", labelA: "A", labelB: "B", nA: 10, meanA: 0.86, sdA: 0.09, nB: 12, meanB: 0.79, sdB: 0.08, direction: "greater", alpha: "5%", critical: 0, fCritical: 3.23, tCritical: 1.725, claim: "process A gives a higher mean coating thickness than process B" },
  { context: "A bakery compares mean loaf masses from two ovens.", labelA: "A", labelB: "B", nA: 13, meanA: 802, sdA: 18, nB: 12, meanB: 790, sdB: 16, direction: "notEqual", alpha: "5%", critical: 0, fCritical: 2.79, tCritical: 2.069, claim: "the ovens have different mean loaf masses" },
  { context: "A lab compares mean absorbance values for two reagent batches.", labelA: "A", labelB: "B", nA: 9, meanA: 0.426, sdA: 0.038, nB: 11, meanB: 0.401, sdB: 0.041, direction: "greater", alpha: "5%", critical: 0, fCritical: 3.35, tCritical: 1.734, claim: "batch A has a higher mean absorbance than batch B" },
  { context: "A wildlife survey compares mean wing spans in two habitats.", labelA: "A", labelB: "B", nA: 14, meanA: 32.8, sdA: 3.2, nB: 15, meanB: 34.6, sdB: 3.5, direction: "less", alpha: "5%", critical: 0, fCritical: 2.62, tCritical: 1.703, claim: "habitat A has a lower mean wing span than habitat B" },
  { context: "A university compares mean assignment scores under two feedback systems.", labelA: "A", labelB: "B", nA: 12, meanA: 63.5, sdA: 8.2, nB: 10, meanB: 58.1, sdB: 7.6, direction: "greater", alpha: "5%", critical: 0, fCritical: 3.26, tCritical: 1.725, claim: "system A gives a higher mean assignment score than system B" },
  { context: "A packaging team compares mean seal strengths from two adhesives.", labelA: "A", labelB: "B", nA: 10, meanA: 42.6, sdA: 4.7, nB: 9, meanB: 39.4, sdB: 4.1, direction: "notEqual", alpha: "5%", critical: 0, fCritical: 3.39, tCritical: 2.11, claim: "the adhesives have different mean seal strengths" },
  { context: "A horticulturalist compares mean growth rates from two compost mixes.", labelA: "A", labelB: "B", nA: 15, meanA: 6.4, sdA: 1.2, nB: 13, meanB: 5.7, sdB: 1.1, direction: "greater", alpha: "5%", critical: 0, fCritical: 2.67, tCritical: 1.706, claim: "mix A gives a higher mean growth rate than mix B" },
];

const shells: Shell[] = [
  ...choiceCases.map(choiceQuestion),
  ...knownZCases.map(knownVarianceZQuestion),
  ...fCases.map(fTestQuestion),
  ...largeZCases.map(largeSampleZQuestion),
  ...pooledTCases.map(pooledTQuestion),
  ...pairedCases.map(pairedTQuestion),
  ...hardCases.map(twoStageQuestion),
];

if (shells.length !== 70) {
  throw new Error(`Further hypothesis tests must contain exactly 70 questions, got ${shells.length}.`);
}

export const questions: Question[] = shells.map((shell, index) => makeQuestion(index + 1, shell));
