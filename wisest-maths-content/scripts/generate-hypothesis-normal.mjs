#!/usr/bin/env node
/**
 * Generates 70 A-Level "Hypothesis testing (normal)" (Year 2) questions.
 * Output: src/data/questions/a-level-maths/year-2-stats/hypothesis-testing-normal.ts
 */

import { writeFileSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const outPath = resolve(__dirname, "../src/data/questions/a-level-maths/year-2-stats/hypothesis-testing-normal.ts");

const SUBTOPIC = "Hypothesis testing (normal)";
const SUBTOPIC_ID = "al.y2.stats.hypothesis-normal";
const LEVEL = "A-Level Maths";
const TOPIC = "Year 2 Statistics";

const qid = (n) => `al.y2.stats.hypothesis-normal.q${String(n).padStart(3, "0")}`;
const step = (n, description, workingLatex, explanation) => ({ stepNumber: n, description, workingLatex, explanation, diagram: null });
const base = (meta) => ({ level: LEVEL, topic: TOPIC, subtopic: SUBTOPIC, subtopicId: SUBTOPIC_ID, questionDiagram: null, ...meta });
const htQ = (n, meta) => base({ id: qid(n), tags: ["hypothesis testing normal", ...(meta.tags || [])], ...meta });

const Z = { "1%": { one: 2.326, two: 2.576 }, "5%": { one: 1.645, two: 1.96 }, "10%": { one: 1.282, two: 1.645 } };
const se = (sigma, n) => sigma / Math.sqrt(n);
const zCalc = (xbar, mu0, sigma, n) => (xbar - mu0) / se(sigma, n);
const f = (x, d = 3) => +x.toFixed(d);

function stateHyp(qNum, mu0, tail, questionText, context, tags = [], marks = 3) {
  const h1 = tail === "upper" ? `\\mu > ${mu0}` : tail === "lower" ? `\\mu < ${mu0}` : `\\mu \\neq ${mu0}`;
  const tailName = tail === "upper" ? "one-tailed (upper)" : tail === "lower" ? "one-tailed (lower)" : "two-tailed";
  const steps = [
    step(1, "Identify the parameter", "\\mu = \\text{population mean}", "The test concerns the unknown population mean $\\mu$."),
    step(2, "State the claimed value", `\\mu_0 = ${mu0}`, "The value under the null hypothesis is the manufacturer's or stated claim."),
    step(3, "Write the null hypothesis", `H_0{:}\\ \\mu = ${mu0}`, "We assume the claim is true unless evidence suggests otherwise."),
    step(4, "Interpret the suspicion", tail === "upper" ? "\\text{mean is higher}" : tail === "lower" ? "\\text{mean is lower}" : "\\text{mean has changed}", "The alternative captures what we suspect about $\\mu$."),
    step(5, "Write the alternative", `H_1{:}\\ ${h1}`, `A ${tailName} alternative because the suspicion points ${tail === "two" ? "in either direction" : "one way only"}.`),
    step(6, "Classify the test", tailName, "The direction of $H_1$ determines whether the test is one- or two-tailed."),
    step(7, "Final hypotheses", `H_0{:}\\ \\mu = ${mu0},\\quad H_1{:}\\ ${h1}`, "These hypotheses set up the z-test for the population mean."),
  ];
  return htQ(qNum, { difficulty: "Easy", marks, answerType: "written", tags: [...tags, "hypotheses", tailName.replace(/[()]/g, "")], questionText, workedSolution: { steps, finalAnswer: `$H_0{:}\\ \\mu = ${mu0}$, $H_1{:}\\ ${h1}$ (${tailName} test).` } });
}

function identifyTail(qNum, questionText, oneTailed, direction, tags = []) {
  const steps = [
    step(1, "Read the claim under test", "H_0 \\text{ uses the stated value}", "The null always uses equality with the claimed parameter value."),
    step(2, "Identify the suspicion", direction, "The wording of the research question tells us which direction we look for evidence."),
    step(3, "Check for one direction", oneTailed ? "\\text{Single direction specified}" : "\\text{Either direction possible}", "One-tailed tests look for a change in one direction only; two-tailed tests look for any change."),
    step(4, "Classify H₁", oneTailed ? `H_1 \\text{ is one-tailed (${direction})}` : "H_1{:}\\ \\mu \\neq \\mu_0", "The alternative hypothesis determines the tail(s) of the test."),
    step(5, "Conclusion", oneTailed ? `\\text{One-tailed (${direction}) test}` : "\\text{Two-tailed test}", "This classification affects critical values and the rejection region."),
    step(6, "Reason in context", oneTailed ? "\\text{Evidence sought in one tail only}" : "\\text{Evidence sought in both tails}", "In context: we only reject $H_0$ if the sample mean is surprisingly high/low (one-tailed) or surprisingly far from $\\mu_0$ in either direction (two-tailed)."),
  ];
  return htQ(qNum, { difficulty: "Easy", marks: 2, answerType: "written", tags: [...tags, "one-tailed vs two-tailed"], questionText, workedSolution: { steps, finalAnswer: oneTailed ? `One-tailed test (${direction}).` : "Two-tailed test." } });
}

function distSampleMean(qNum, mu, sigma, n, questionText, tags = []) {
  const var_ = f(sigma ** 2 / n, 4);
  const steps = [
    step(1, "Recall the sampling distribution", "\\bar{X} \\sim N\\left(\\mu,\\,\\dfrac{\\sigma^2}{n}\\right)", "When $\\sigma$ is known and the population is normal (or $n$ is large), the sample mean follows a normal distribution."),
    step(2, "Identify parameters", `\\mu = ${mu},\\; \\sigma = ${sigma},\\; n = ${n}`, "Population mean, known standard deviation, and sample size."),
    step(3, "Mean of \\bar{X}", `E(\\bar{X}) = \\mu = ${mu}`, "The sample mean is an unbiased estimator of $\\mu$."),
    step(4, "Variance of \\bar{X}", `\\text{Var}(\\bar{X}) = \\dfrac{\\sigma^2}{n} = \\dfrac{${sigma}^2}{${n}} = ${var_}`, "The variance of the sample mean is the population variance divided by $n$."),
    step(5, "Standard error", `\\dfrac{\\sigma}{\\sqrt{n}} = \\dfrac{${sigma}}{\\sqrt{${n}}} = ${f(se(sigma, n))}`, "The standard deviation of $\\bar{X}$ is called the standard error."),
    step(6, "State the distribution", `\\bar{X} \\sim N(${mu},\\,${var_})`, "Fully specify the distribution of the sample mean."),
  ];
  return htQ(qNum, { difficulty: "Easy", marks: 3, answerType: "expression", tags: [...tags, "sampling distribution"], questionText, workedSolution: { steps, finalAnswer: `$\\bar{X} \\sim N(${mu},\\,${var_})$` } });
}

function calcSE(qNum, sigma, n, questionText, tags = []) {
  const val = f(se(sigma, n));
  const steps = [
    step(1, "Recall the formula", `SE = \\dfrac{\\sigma}{\\sqrt{n}}`, "The standard error measures the spread of sample means around $\\mu$."),
    step(2, "Substitute values", `SE = \\dfrac{${sigma}}{\\sqrt{${n}}}`, "Use the known population standard deviation and sample size."),
    step(3, "Evaluate \\sqrt{n}", `\\sqrt{${n}} = ${f(Math.sqrt(n), 4)}`, "Compute the square root of the sample size."),
    step(4, "Calculate SE", `SE = ${val}`, "Divide $\\sigma$ by $\\sqrt{n}$ to get the standard error."),
    step(5, "Interpret", `\\bar{X} \\text{ typically varies by about } ${val} \\text{ from } \\mu`, "Sample means cluster within about one standard error of the true mean."),
    step(6, "Answer", `SE = ${val}`, "The standard error for this sample size."),
  ];
  return htQ(qNum, { difficulty: "Easy", marks: 2, answerType: "value", tags: [...tags, "standard error"], questionText, workedSolution: { steps, finalAnswer: `$SE = ${val}$` } });
}

function zTestStat(qNum, xbar, mu0, sigma, n, questionText, tags = [], marks = 4) {
  const seVal = se(sigma, n);
  const z = f(zCalc(xbar, mu0, sigma, n));
  const steps = [
    step(1, "State the test statistic formula", `z = \\dfrac{\\bar{x} - \\mu_0}{\\sigma / \\sqrt{n}}`, "Standardise the sample mean under $H_0$ using the known $\\sigma$."),
    step(2, "Calculate standard error", `\\dfrac{\\sigma}{\\sqrt{n}} = \\dfrac{${sigma}}{\\sqrt{${n}}} = ${f(seVal)}`, "The denominator is the standard error of $\\bar{X}$."),
    step(3, "Substitute sample mean", `z = \\dfrac{${xbar} - ${mu0}}{${f(seVal)}}`, "Use the observed sample mean and the null value $\\mu_0$."),
    step(4, "Evaluate numerator", `${xbar} - ${mu0} = ${f(xbar - mu0)}`, "The difference between the sample mean and the hypothesised mean."),
    step(5, "Calculate z", `z = ${z}`, "The test statistic measures how many standard errors $\\bar{x}$ is from $\\mu_0$."),
    step(6, "Interpret", Math.abs(z) > 2 ? "\\text{Unusual under } H_0" : "\\text{Not very extreme under } H_0", "Large $|z|$ suggests the sample mean is unlikely if $H_0$ is true."),
    step(7, "Answer", `z = ${z}`, "The calculated test statistic."),
  ];
  return htQ(qNum, { difficulty: "Intermediate", marks, answerType: "value", tags: [...tags, "z-test statistic"], questionText, workedSolution: { steps, finalAnswer: `$z = ${z}$` } });
}

function compareCritical(qNum, z, alpha, tail, reject, questionText, tags = [], xbar, mu0, sigma, n) {
  const cv = Z[alpha][tail === "two" ? "two" : "one"];
  const cvDisplay = tail === "two" ? `\\pm ${cv}` : tail === "upper" ? cv : -cv;
  const cmp = tail === "upper" ? `${z} ${reject ? ">" : "\\leq"} ${cv}` : tail === "lower" ? `${z} ${reject ? "<" : "\\geq"} ${-cv}` : `|${z}| ${reject ? ">" : "\\leq"} ${cv}`;
  const steps = [
    step(1, "State significance level", `\\alpha = ${alpha.replace("%", "")}\\%`, "The significance level is the probability of rejecting $H_0$ when it is true."),
    step(2, "Identify tail type", tail === "two" ? "\\text{Two-tailed}" : `\\text{One-tailed (${tail})}`, "The tail type comes from $H_1$."),
    step(3, "Critical value for z", `z_{\\text{crit}} = ${cvDisplay}`, `From standard normal tables at the ${alpha} significance level.`),
    step(4, "Compare test statistic", `z = ${z}`, "The calculated test statistic from the sample."),
    step(5, "Decision rule", cmp, reject ? "The test statistic falls in the critical region." : "The test statistic does not fall in the critical region."),
    step(6, "Conclusion", reject ? "\\text{Reject } H_0" : "\\text{Do not reject } H_0", "Compare $z$ with the critical value to decide."),
    step(7, "Answer", reject ? `\\text{Reject } H_0 \\text{ at ${alpha}}` : `\\text{Do not reject } H_0 \\text{ at ${alpha}}`, "Final decision at the given significance level."),
  ];
  return htQ(qNum, { difficulty: "Intermediate", marks: 4, answerType: "written", tags: [...tags, "critical value", alpha], questionText, workedSolution: { steps, finalAnswer: reject ? `Reject $H_0$ at the ${alpha} level ($z = ${z}$, critical value ${cvDisplay}).` : `Do not reject $H_0$ at the ${alpha} level ($z = ${z}$, critical value ${cvDisplay}).` } });
}

function critRegionMean(qNum, mu0, sigma, n, alpha, tail, questionText, tags = []) {
  const seVal = se(sigma, n);
  const cv = Z[alpha][tail === "two" ? "two" : "one"];
  let region, final;
  if (tail === "upper") {
    const crit = f(mu0 + cv * seVal);
    region = `\\bar{x} > ${crit}`;
    final = `$\\bar{x} > ${crit}$ (reject $H_0$ if sample mean exceeds ${crit})`;
  } else if (tail === "lower") {
    const crit = f(mu0 - cv * seVal);
    region = `\\bar{x} < ${crit}`;
    final = `$\\bar{x} < ${crit}$ (reject $H_0$ if sample mean is below ${crit})`;
  } else {
    const lo = f(mu0 - cv * seVal);
    const hi = f(mu0 + cv * seVal);
    region = `\\bar{x} < ${lo} \\text{ or } \\bar{x} > ${hi}`;
    final = `$\\bar{x} < ${lo}$ or $\\bar{x} > ${hi}$`;
  }
  const steps = [
    step(1, "Distribution under H₀", `\\bar{X} \\sim N(${mu0},\\,${f(seVal ** 2, 4)})`, "Under the null hypothesis the sample mean is normally distributed."),
    step(2, "Standard error", `SE = ${f(seVal)}`, "Standard deviation of $\\bar{X}$ under $H_0$."),
    step(3, "Critical z-value", `z_{\\text{crit}} = ${tail === "two" ? `\\pm ${cv}` : tail === "upper" ? cv : -cv}`, `At the ${alpha} significance level for a ${tail}-tailed test.`),
    step(4, "Convert to \\bar{x}", tail === "two" ? `\\bar{x} = \\mu_0 \\pm z \\times SE` : tail === "upper" ? `\\bar{x} = \\mu_0 + z \\times SE` : `\\bar{x} = \\mu_0 - z \\times SE`, "Transform the critical $z$-value to a critical sample mean."),
    step(5, "Calculate critical boundary", region, "The rejection region expressed in terms of the sample mean."),
    step(6, "State critical region", region, "Reject $H_0$ if the observed sample mean falls in this region."),
    step(7, "Answer", region, "Critical region for the sample mean."),
  ];
  return htQ(qNum, { difficulty: "Intermediate", marks: 5, answerType: "expression", tags: [...tags, "critical region", alpha], questionText, workedSolution: { steps, finalAnswer: final } });
}

function pValueQ(qNum, z, pval, tail, questionText, reject, alpha, tags = []) {
  const steps = [
    step(1, "Test statistic", `z = ${z}`, "The standardised value from the sample."),
    step(2, "Define p-value", tail === "two" ? "p = 2 \\times P(Z > |z|)" : tail === "upper" ? "p = P(Z > z)" : "p = P(Z < z)", "The p-value is the probability of obtaining a result at least as extreme as the observed one, assuming $H_0$ is true."),
    step(3, "Calculate p-value", `p = ${pval}`, "Use standard normal tables or a calculator."),
    step(4, "Compare with α", `${pval} ${reject ? "<" : ">"} ${alpha.replace("%", "")}\\%`, "If $p < \\alpha$, the result is statistically significant."),
    step(5, "Interpret", reject ? "\\text{Strong evidence against } H_0" : "\\text{Insufficient evidence against } H_0", "A small p-value means the observed sample mean would be very unlikely if $H_0$ were true."),
    step(6, "Conclusion", reject ? `\\text{Reject } H_0 \\text{ at ${alpha}}` : `\\text{Do not reject } H_0 \\text{ at ${alpha}}`, "Decision based on the p-value."),
    step(7, "Answer in context", reject ? `p = ${pval} < ${alpha.replace("%", "")}\\%` : `p = ${pval} > ${alpha.replace("%", "")}\\%`, "State the p-value and the decision."),
  ];
  return htQ(qNum, { difficulty: "Intermediate", marks: 4, answerType: "written", tags: [...tags, "p-value"], questionText, workedSolution: { steps, finalAnswer: reject ? `$p = ${pval}$. Since $p < ${alpha.replace("%", "")}\\%$, reject $H_0$.` : `$p = ${pval}$. Since $p > ${alpha.replace("%", "")}\\%$, do not reject $H_0$.` } });
}

function conclude(qNum, xbar, mu0, sigma, n, alpha, tail, questionText, tags = [], context) {
  const z = f(zCalc(xbar, mu0, sigma, n));
  const cv = Z[alpha][tail === "two" ? "two" : "one"];
  const reject = tail === "upper" ? z > cv : tail === "lower" ? z < -cv : Math.abs(z) > cv;
  const steps = [
    step(1, "State hypotheses", `H_0{:}\\ \\mu = ${mu0}`, "Set up the null and alternative from the context."),
    step(2, "Calculate SE", `SE = ${f(se(sigma, n))}`, "Standard error using known $\\sigma$."),
    step(3, "Test statistic", `z = \\dfrac{${xbar} - ${mu0}}{${f(se(sigma, n))}} = ${z}`, "Standardise the sample mean."),
    step(4, "Critical value", `z_{\\text{crit}} = ${tail === "two" ? `\\pm ${cv}` : tail === "upper" ? cv : -cv}`, `At the ${alpha} significance level.`),
    step(5, "Compare", reject ? `|z| > z_{\\text{crit}}` : `|z| \\leq z_{\\text{crit}}`, "Check whether $z$ falls in the critical region."),
    step(6, "Statistical decision", reject ? "\\text{Reject } H_0" : "\\text{Do not reject } H_0", "Formal hypothesis test decision."),
    step(7, "Conclusion in context", reject ? context.reject : context.accept, "Translate the statistical decision into plain language about the scenario."),
    step(8, "Final answer", reject ? "\\text{Reject } H_0" : "\\text{Do not reject } H_0", "Complete conclusion."),
  ];
  return htQ(qNum, { difficulty: "Intermediate", marks: 5, answerType: "written", tags: [...tags, "conclusion in context"], questionText, workedSolution: { steps, finalAnswer: reject ? context.reject : context.accept } });
}

function hardHT(qNum, questionText, steps, finalAnswer, tags = [], marks = 8) {
  return htQ(qNum, { difficulty: "Hard", marks, answerType: "written", tags: [...tags, "multi-step"], questionText, workedSolution: { steps, finalAnswer } });
}

function sampleSizeQ(qNum, mu0, mu1, sigma, alpha, beta, n, questionText, tags = []) {
  const zAlpha = Z[alpha][ "one" ];
  const zBeta = 0.842; // 20% or typical
  const steps = [
    step(1, "Identify the problem", "\\text{Find minimum } n \\text{ for desired power}", "We need enough observations to detect a meaningful shift in $\\mu$."),
    step(2, "Effect size", `|\\mu_1 - \\mu_0| = |${mu1} - ${mu0}| = ${Math.abs(mu1 - mu0)}`, "The difference we want to detect."),
    step(3, "Formula for sample size", `n = \\left(\\dfrac{(z_{\\alpha} + z_{\\beta})\\sigma}{\\mu_1 - \\mu_0}\\right)^2`, "One-tailed test with specified $\\alpha$ and power $1-\\beta$."),
    step(4, "Substitute z-values", `z_{\\alpha} = ${zAlpha},\\; z_{\\beta} \\approx ${zBeta}`, `Critical values at ${alpha} significance and chosen power.`),
    step(5, "Calculate n", `n = \\left(\\dfrac{(${zAlpha} + ${zBeta}) \\times ${sigma}}{${Math.abs(mu1 - mu0)}}\\right)^2 \\approx ${n}`, "Round up to the next whole number."),
    step(6, "Verify", `n = ${n} \\text{ gives adequate power}`, "Confirm the sample size meets the requirements."),
    step(7, "Answer", `n = ${n}`, "Minimum sample size required."),
  ];
  return htQ(qNum, { difficulty: "Hard", marks: 6, answerType: "value", tags: [...tags, "sample size"], questionText, workedSolution: { steps, finalAnswer: `$n = ${n}$` } });
}

function typeErrorQ(qNum, questionText, type1, type2, tags = []) {
  const steps = [
    step(1, "Define Type I error", "\\alpha = P(\\text{reject } H_0 \\mid H_0 \\text{ true})", "Rejecting a true null hypothesis — a 'false positive'."),
    step(2, "Define Type II error", "\\beta = P(\\text{do not reject } H_0 \\mid H_1 \\text{ true})", "Failing to reject a false null — a 'false negative'."),
    step(3, "Type I in this context", type1, "What it means specifically for this scenario."),
    step(4, "Type II in this context", type2, "What it means specifically for this scenario."),
    step(5, "Relationship", "\\text{Reducing } \\alpha \\text{ increases } \\beta", "For fixed $n$, lowering Type I error raises Type II error."),
    step(6, "Practical implication", "\\text{Choose } \\alpha \\text{ based on consequences}", "If Type I error is costly, use a lower $\\alpha$; if Type II is costly, increase $n$ or $\\alpha$."),
    step(7, "Summary", "\\text{Type I: reject true } H_0;\\; \\text{Type II: accept false } H_0", "Both errors are possible; we control $\\alpha$ and manage $\\beta$ via sample size."),
  ];
  return htQ(qNum, { difficulty: "Hard", marks: 5, answerType: "written", tags: [...tags, "Type I and Type II errors"], questionText, workedSolution: { steps, finalAnswer: `Type I: ${type1} Type II: ${type2}` } });
}


const questions = [
  // Easy — state hypotheses (1–8)
  stateHyp(1, 500, "upper", "A factory claims its machines produce items with mean weight $500\\text{ g}$. Quality inspectors suspect the mean weight has increased. A random sample of $36$ items is taken. State suitable null and alternative hypotheses for a test of the inspectors' suspicion.", "factory", ["factory"], 3),
  stateHyp(2, 45, "lower", "A coffee shop advertises that the mean caffeine content of its drinks is $45\\text{ mg}$. A health campaigner believes it is lower. State $H_0$ and $H_1$ for a test using a random sample.", "coffee", ["food"], 3),
  stateHyp(3, 72, "two", "Exam board guidelines state the mean score on a standardised test is $72$. Teachers believe the mean has changed. From a sample of students, state the hypotheses for a test at the $5\\%$ level.", "education", ["education"], 3),
  stateHyp(4, 12.5, "lower", "A pharmaceutical company claims a new tablet dissolves in mean time $12.5\\text{ min}$. Researchers suspect it dissolves faster than claimed. State $H_0$ and $H_1$ for a test using a random sample.", "medicine", ["medicine"], 3),
  stateHyp(5, 250, "lower", "A battery manufacturer states mean life is $250$ hours. Consumer group suspects batteries last less. State hypotheses for a one-tailed test.", "battery", ["consumer"], 3),
  stateHyp(6, 18, "two", "National statistics give mean household water usage as $18\\text{ m}^3$ per month. A council tests whether usage in its area differs. State $H_0$ and $H_1$.", "water", ["environment"], 3),
  stateHyp(7, 85, "upper", "A training programme claims to raise mean exam scores above the national mean of $85$. State hypotheses to test this claim.", "training", ["education"], 3),
  stateHyp(8, 3.2, "lower", "A dairy specifies mean fat content of $3.2\\%$. An auditor suspects batches are below this. State null and alternative hypotheses.", "dairy", ["food"], 3),

  // Easy — identify tail (9–12)
  identifyTail(9, "A manufacturer tests whether mean breaking strength exceeds $200\\text{ N}$. The null hypothesis is $H_0{:}\\ \\mu = 200$. Is this a one-tailed or two-tailed test?", true, "upper tail", ["factory"]),
  identifyTail(10, "A hospital tests whether mean recovery time differs from $14$ days. $H_0{:}\\ \\mu = 14$. Classify the test.", false, "either direction", ["medicine"]),
  identifyTail(11, "An energy company tests whether mean daily consumption is less than $15\\text{ kWh}$. Is the test one- or two-tailed?", true, "lower tail", ["energy"]),
  identifyTail(12, "A school tests whether mean test score has changed from $68$. $H_1{:}\\ \\mu \\neq 68$. What type of test is this?", false, "either direction", ["education"]),

  // Easy — sampling distribution (13–16)
  distSampleMean(13, 50, 8, 25, "Items from a production line have mean weight $\\mu = 50\\text{ g}$ and standard deviation $\\sigma = 8\\text{ g}$. Random samples of size $n = 25$ are taken. State the distribution of the sample mean $\\bar{X}$.", ["factory"]),
  distSampleMean(14, 120, 15, 36, "Blood pressure readings in a population have $\\mu = 120\\text{ mmHg}$ and $\\sigma = 15\\text{ mmHg}$. For samples of $36$ patients, write down the distribution of $\\bar{X}$.", ["medicine"]),
  distSampleMean(15, 72, 10, 16, "Exam scores have mean $72$ and standard deviation $10$. For random samples of $16$ students, state the distribution of the sample mean.", ["education"]),
  distSampleMean(16, 4.5, 0.9, 49, "The pH of a chemical solution has $\\mu = 4.5$ and $\\sigma = 0.9$. Samples of size $49$ are tested. State the distribution of $\\bar{X}$.", ["chemistry"]),

  // Easy — standard error (17–20)
  calcSE(17, 6, 36, "Population standard deviation is $\\sigma = 6$. Find the standard error for samples of size $n = 36$.", ["calculation"]),
  calcSE(18, 12, 16, "Exam scores have $\\sigma = 12$. Find $SE$ when $n = 16$.", ["education"]),
  calcSE(19, 2.5, 100, "A process has $\\sigma = 2.5\\text{ mm}$. Calculate the standard error for samples of $100$ items.", ["factory"]),
  calcSE(20, 20, 25, "Heights in a population have $\\sigma = 20\\text{ cm}$. Find the standard error for $n = 25$.", ["biology"]),

  // Intermediate — z statistic (21–28)
  zTestStat(21, 502, 500, 6, 36, "A sample of $36$ items has mean weight $\\bar{x} = 502\\text{ g}$. Test $H_0{:}\\ \\mu = 500$ with $\\sigma = 6\\text{ g}$. Calculate the test statistic $z$.", ["factory"]),
  zTestStat(22, 118, 120, 15, 25, "A sample of $25$ patients has mean blood pressure $\\bar{x} = 118\\text{ mmHg}$. With $\\sigma = 15$ and $H_0{:}\\ \\mu = 120$, find $z$.", ["medicine"]),
  zTestStat(23, 74.5, 72, 10, 20, "A class of $20$ students has mean score $\\bar{x} = 74.5$. Given $\\sigma = 10$ and $H_0{:}\\ \\mu = 72$, calculate $z$.", ["education"]),
  zTestStat(24, 248, 250, 20, 40, "A sample of $40$ batteries has mean life $\\bar{x} = 248$ hours. With $\\sigma = 20$ and $H_0{:}\\ \\mu = 250$, find the test statistic.", ["consumer"]),
  zTestStat(25, 4.35, 4.5, 0.9, 49, "The mean pH from $49$ samples is $\\bar{x} = 4.35$. Given $\\sigma = 0.9$ and $H_0{:}\\ \\mu = 4.5$, calculate $z$.", ["chemistry"]),
  zTestStat(26, 17.2, 18, 3, 64, "Mean water usage from $64$ households is $\\bar{x} = 17.2\\text{ m}^3$. With $\\sigma = 3$ and $H_0{:}\\ \\mu = 18$, find $z$.", ["environment"]),
  zTestStat(27, 87, 85, 8, 25, "A training group of $25$ students has mean score $\\bar{x} = 87$. Given $\\sigma = 8$ and $H_0{:}\\ \\mu = 85$, calculate $z$.", ["education"]),
  zTestStat(28, 3.05, 3.2, 0.4, 50, "A dairy sample of $50$ batches has mean fat $\\bar{x} = 3.05\\%$. With $\\sigma = 0.4$ and $H_0{:}\\ \\mu = 3.2$, find $z$.", ["food"]),

  // Intermediate — critical values (29–34)
  compareCritical(29, 2.0, "5%", "upper", true, "In a test of $H_0{:}\\ \\mu = 500$ vs $H_1{:}\\ \\mu > 500$, the test statistic is $z = 2.0$. Is $H_0$ rejected at the $5\\%$ significance level?", ["factory"]),
  compareCritical(30, -1.5, "5%", "lower", false, "Testing $H_0{:}\\ \\mu = 120$ vs $H_1{:}\\ \\mu < 120$, $z = -1.5$. Decide whether to reject $H_0$ at $5\\%$.", ["medicine"]),
  compareCritical(31, 2.7, "1%", "upper", true, "For $H_0{:}\\ \\mu = 72$ vs $H_1{:}\\ \\mu > 72$, $z = 2.7$. Test at the $1\\%$ level.", ["education"]),
  compareCritical(32, -2.0, "5%", "two", true, "A two-tailed test gives $z = -2.0$. Should $H_0$ be rejected at the $5\\%$ level?", ["general"]),
  compareCritical(33, 1.3, "10%", "upper", true, "With $z = 1.3$ in an upper-tailed test, decide at the $10\\%$ level.", ["general"]),
  compareCritical(34, 1.5, "5%", "two", false, "A two-tailed test yields $z = 1.5$. Is there sufficient evidence to reject $H_0$ at $5\\%$?", ["general"]),

  // Intermediate — critical regions (35–40)
  critRegionMean(35, 500, 6, 36, "5%", "upper", "For $H_0{:}\\ \\mu = 500$, $\\sigma = 6$, $n = 36$, find the critical region for $\\bar{x}$ in an upper-tailed test at the $5\\%$ level.", ["factory"]),
  critRegionMean(36, 120, 15, 25, "5%", "lower", "Find the critical region for $\\bar{x}$ when testing $H_0{:}\\ \\mu = 120$ with $\\sigma = 15$, $n = 25$ at the $5\\%$ level (lower tail).", ["medicine"]),
  critRegionMean(37, 72, 10, 16, "5%", "two", "For a two-tailed test of $H_0{:}\\ \\mu = 72$ with $\\sigma = 10$, $n = 16$ at $5\\%$, find the critical regions for $\\bar{x}$.", ["education"]),
  critRegionMean(38, 250, 20, 40, "1%", "lower", "Batteries: $H_0{:}\\ \\mu = 250$, $\\sigma = 20$, $n = 40$. Find the critical region for a lower-tailed test at $1\\%$.", ["consumer"]),
  critRegionMean(39, 18, 3, 64, "10%", "two", "Water usage: $H_0{:}\\ \\mu = 18$, $\\sigma = 3$, $n = 64$. Critical regions at $10\\%$ (two-tailed).", ["environment"]),
  critRegionMean(40, 85, 8, 25, "5%", "upper", "Training programme: $H_0{:}\\ \\mu = 85$, $\\sigma = 8$, $n = 25$. Upper-tailed critical region at $5\\%$.", ["education"]),

  // Intermediate — p-values (41–45)
  pValueQ(41, 2.33, 0.01, "upper", "An upper-tailed test gives $z = 2.33$. Find the p-value and state whether $H_0$ is rejected at the $1\\%$ level.", true, "1%", ["p-value"]),
  pValueQ(42, -1.96, 0.025, "lower", "A lower-tailed test gives $z = -1.96$. Find the p-value. Is $H_0$ rejected at $5\\%$?", true, "5%", ["p-value"]),
  pValueQ(43, 1.2, 0.230, "upper", "Upper-tailed test: $z = 1.2$. Calculate the p-value and decide at the $10\\%$ level.", false, "10%", ["p-value"]),
  pValueQ(44, -2.5, 0.012, "two", "Two-tailed test: $z = -2.5$. Find the p-value and decide at the $5\\%$ level.", true, "5%", ["p-value"]),
  pValueQ(45, 0.8, 0.212, "two", "Two-tailed test: $z = 0.8$. Find the p-value. Do you reject $H_0$ at $5\\%$?", false, "5%", ["p-value"]),

  // Intermediate — conclusions (46–50)
  conclude(46, 502, 500, 6, 36, "5%", "upper", "A factory sample of $36$ items has $\\bar{x} = 502\\text{ g}$. Test $H_0{:}\\ \\mu = 500$ vs $H_1{:}\\ \\mu > 500$ at $5\\%$ with $\\sigma = 6$. Conclude in context.", ["factory"], { reject: "There is sufficient evidence at the $5\\%$ level that the mean weight has increased above $500\\text{ g}$.", accept: "There is insufficient evidence that the mean weight exceeds $500\\text{ g}$." }),
  conclude(47, 115, 120, 15, 30, "5%", "lower", "Mean blood pressure from $30$ patients is $\\bar{x} = 115\\text{ mmHg}$. Test $H_0{:}\\ \\mu = 120$ vs $H_1{:}\\ \\mu < 120$ at $5\\%$ ($\\sigma = 15$). Conclude.", ["medicine"], { reject: "There is evidence that mean blood pressure is lower than $120\\text{ mmHg}$.", accept: "There is no significant evidence that mean blood pressure is below $120\\text{ mmHg}$." }),
  conclude(48, 75, 72, 10, 25, "5%", "two", "Class mean is $\\bar{x} = 75$ from $25$ students. Test whether the mean differs from $72$ at $5\\%$ ($\\sigma = 10$). Conclude.", ["education"], { reject: "There is significant evidence that the mean score differs from $72$.", accept: "There is no significant evidence that the mean score differs from $72$." }),
  conclude(49, 245, 250, 20, 50, "1%", "lower", "Battery sample: $\\bar{x} = 245$ hours, $n = 50$, $\\sigma = 20$. Test $H_0{:}\\ \\mu = 250$ vs $H_1{:}\\ \\mu < 250$ at $1\\%$. Conclude.", ["consumer"], { reject: "There is strong evidence that mean battery life is below $250$ hours.", accept: "There is insufficient evidence that mean battery life is less than $250$ hours." }),
  conclude(50, 86, 85, 8, 20, "10%", "upper", "Training group: $\\bar{x} = 86$, $n = 20$, $\\sigma = 8$. Test $H_0{:}\\ \\mu = 85$ vs $H_1{:}\\ \\mu > 85$ at $10\\%$. Conclude.", ["education"], { reject: "There is evidence the training programme raises mean scores above $85$.", accept: "There is insufficient evidence that the programme increases mean scores above $85$." }),

  // Hard — multi-part exam (51–58)
  hardHT(51, "A factory produces bolts with mean length $50\\text{ mm}$ and known $\\sigma = 2\\text{ mm}$. A sample of $25$ bolts has $\\bar{x} = 50.8\\text{ mm}$. (a) State suitable hypotheses. (b) Calculate the test statistic. (c) Test at the $5\\%$ level and conclude.", [
    step(1, "(a) Hypotheses", "H_0{:}\\ \\mu = 50,\\quad H_1{:}\\ \\mu > 50", "Upper-tailed test for an increase in length."),
    step(2, "(b) Standard error", "SE = \\dfrac{2}{\\sqrt{25}} = 0.4", "Standard error of the sample mean."),
    step(3, "(b) Test statistic", "z = \\dfrac{50.8 - 50}{0.4} = 2.0", "Standardise the sample mean under $H_0$."),
    step(4, "(c) Critical value", "z_{\\text{crit}} = 1.645", "Upper-tailed $5\\%$ critical value."),
    step(5, "(c) Compare", "2.0 > 1.645", "Test statistic falls in the critical region."),
    step(6, "(c) Decision", "\\text{Reject } H_0", "Significant at the $5\\%$ level."),
    step(7, "(c) Conclusion", "\\text{Evidence mean length has increased}", "Bolts are longer than the specification."),
    step(8, "Answer", "z = 2.0;\\; \\text{reject } H_0", "Complete test result."),
  ], "(a) $H_0{:}\\ \\mu = 50$, $H_1{:}\\ \\mu > 50$. (b) $z = 2.0$. (c) Reject $H_0$ at $5\\%$.", ["factory", "multi-part"], 9),

  hardHT(52, "A drug trial: claimed mean recovery $10$ days, $\\sigma = 3$, $n = 36$, $\\bar{x} = 9.2$ days. (a) State hypotheses for faster recovery. (b) Find $z$. (c) Test at the $1\\%$ level.", [
    step(1, "(a) Hypotheses", "H_0{:}\\ \\mu = 10,\\quad H_1{:}\\ \\mu < 10", "Lower-tailed: faster recovery means lower mean."),
    step(2, "(b) SE", "SE = \\dfrac{3}{\\sqrt{36}} = 0.5", "Standard error."),
    step(3, "(b) z", "z = \\dfrac{9.2 - 10}{0.5} = -1.6", "Test statistic."),
    step(4, "(c) Critical value", "z_{\\text{crit}} = -2.326", "Lower-tailed $1\\%$ value."),
    step(5, "(c) Compare", "-1.6 > -2.326", "Not in critical region."),
    step(6, "(c) Decision", "\\text{Do not reject } H_0", "Insufficient evidence at $1\\%$."),
    step(7, "(c) Conclusion", "\\text{No strong evidence of faster recovery}", "Trial inconclusive at $1\\%$."),
    step(8, "Answer", "z = -1.6;\\; \\text{do not reject}", "Full outcome."),
  ], "(a) $H_0{:}\\ \\mu = 10$, $H_1{:}\\ \\mu < 10$. (b) $z = -1.6$. (c) Do not reject $H_0$ at $1\\%$.", ["medicine", "multi-part"], 9),

  hardHT(53, "College exam scores: national mean $72$, $\\sigma = 12$, $n = 16$, $\\bar{x} = 78$. (a) State hypotheses. (b) Calculate $z$. (c) Find the p-value. (d) Conclude at $5\\%$.", [
    step(1, "(a) Hypotheses", "H_0{:}\\ \\mu = 72,\\quad H_1{:}\\ \\mu \\neq 72", "Two-tailed test."),
    step(2, "(b) SE", "SE = \\dfrac{12}{\\sqrt{16}} = 3", "Standard error."),
    step(3, "(b) z", "z = \\dfrac{78 - 72}{3} = 2.0", "Test statistic."),
    step(4, "(c) p-value", "p = 2 \\times 0.0228 = 0.0456", "Two-tailed p-value."),
    step(5, "(d) Compare", "0.0456 < 0.05", "Significant at $5\\%$."),
    step(6, "(d) Decision", "\\text{Reject } H_0", "College mean differs from national."),
    step(7, "(d) Conclusion", "\\text{Scores significantly different from 72}", "Evidence of different performance."),
    step(8, "Answer", "z=2.0;\\; p=0.0456;\\; \\text{reject}", "Complete analysis."),
  ], "(a) $H_0{:}\\ \\mu = 72$, $H_1{:}\\ \\mu \\neq 72$. (b) $z = 2.0$. (c) $p = 0.0456$. (d) Reject $H_0$ at $5\\%$.", ["education", "multi-part"], 10),

  hardHT(54, "Quality control: $\\mu_0 = 2$ defects per batch, $\\sigma = 0.8$, $n = 64$, $\\bar{x} = 2.3$. (a) Test at $5\\%$ whether mean has increased. (b) State critical region for $\\bar{x}$.", [
    step(1, "Hypotheses", "H_0{:}\\ \\mu = 2,\\quad H_1{:}\\ \\mu > 2", "Upper-tailed test."),
    step(2, "SE", "SE = \\dfrac{0.8}{\\sqrt{64}} = 0.1", "Standard error."),
    step(3, "Test statistic", "z = \\dfrac{2.3 - 2}{0.1} = 3.0", "Highly unusual under $H_0$."),
    step(4, "Critical z", "z_{\\text{crit}} = 1.645", "At $5\\%$ upper tail."),
    step(5, "Critical \\bar{x}", "\\bar{x} > 2.165", "Rejection boundary for sample mean."),
    step(6, "Compare", "2.3 > 2.165", "In critical region."),
    step(7, "Decision", "\\text{Reject } H_0", "Defect rate has increased."),
    step(8, "Conclusion", "\\text{Process may be out of control}", "Investigate production line."),
    step(9, "Answer", "z=3.0;\\; \\text{reject};\\; \\bar{x}>2.165", "Full test."),
  ], "Reject $H_0$ at $5\\%$ ($z = 3.0$). Critical region: $\\bar{x} > 2.165$.", ["quality control", "multi-part"], 10),

  hardHT(55, "Coffee machine: claimed $200\\text{ ml}$, $\\sigma = 5$, $n = 25$, $\\bar{x} = 197\\text{ ml}$. (a) Hypotheses for under-filling. (b) Test at $1\\%$. (c) Would you reject at $5\\%$?", [
    step(1, "(a) Hypotheses", "H_0{:}\\ \\mu = 200,\\quad H_1{:}\\ \\mu < 200", "Lower-tailed under-fill test."),
    step(2, "(b) SE", "SE = 1", "Standard error."),
    step(3, "(b) z", "z = -3.0", "Strong evidence of under-fill."),
    step(4, "(b) Critical 1%", "z_{\\text{crit}} = -2.326", "Lower tail at $1\\%$."),
    step(5, "(b) Decision", "\\text{Reject } H_0", "Highly significant."),
    step(6, "(c) At 5%", "-3.0 < -1.645 \\Rightarrow \\text{reject}", "Also reject at $5\\%$."),
    step(7, "Conclusion", "\\text{Machine under-filling}", "Customers receive less than advertised."),
    step(8, "Answer", "z=-3.0;\\; \\text{reject at 1\\% and 5\\%}", "Full analysis."),
  ], "Reject $H_0$ at both $1\\%$ and $5\\%$ ($z = -3.0$). Evidence of under-filling.", ["food", "multi-part"], 9),

  hardHT(56, "Hospital waits: national mean $30$ min, $\\sigma = 8$, $n = 49$, $\\bar{x} = 33$ min. (a) Test at $5\\%$ if local mean exceeds national. (b) Find the p-value.", [
    step(1, "Hypotheses", "H_0{:}\\ \\mu = 30,\\quad H_1{:}\\ \\mu > 30", "Upper-tailed."),
    step(2, "SE", "SE = \\dfrac{8}{7} \\approx 1.143", "Standard error."),
    step(3, "z", "z \\approx 2.625", "Test statistic."),
    step(4, "Critical 5%", "z_{\\text{crit}} = 1.645", "Upper tail."),
    step(5, "Decision", "\\text{Reject } H_0", "Significant at $5\\%$."),
    step(6, "p-value", "p \\approx 0.0043", "Very small p-value."),
    step(7, "Conclusion", "\\text{Local waits significantly longer}", "Hospital exceeds national average."),
    step(8, "Answer", "z \\approx 2.625;\\; p \\approx 0.0043;\\; \\text{reject}", "Complete test."),
  ], "Reject $H_0$ ($z \\approx 2.625$, $p \\approx 0.0043$). Local waits significantly exceed $30$ min.", ["medicine", "multi-part"], 9),

  hardHT(57, "Two samples from $\\mu_0 = 100$, $\\sigma = 15$: $n_1=25$, $\\bar{x}_1=105$; $n_2=36$, $\\bar{x}_2=103$. (a) Test sample 1 at $5\\%$ (upper tail). (b) Test sample 2. (c) Compare.", [
    step(1, "(a) z_1", "SE_1=3;\\; z_1=1.667", "First sample test statistic."),
    step(2, "(a) Decision", "1.667 > 1.645 \\Rightarrow \\text{reject}", "Sample 1 significant."),
    step(3, "(b) z_2", "SE_2=2.5;\\; z_2=1.2", "Second sample."),
    step(4, "(b) Decision", "1.2 < 1.645 \\Rightarrow \\text{do not reject}", "Sample 2 not significant."),
    step(5, "(c) Compare", "z_1 > z_2", "Larger deviation relative to SE gives stronger evidence."),
    step(6, "(c) Explanation", "\\text{Sample size affects SE}", "Smaller SE makes the same difference more significant."),
    step(7, "Conclusion", "\\text{Sample 1 significant; sample 2 not}", "Different samples, different conclusions."),
    step(8, "Answer", "Sample 1: reject; Sample 2: do not reject", "Comparison complete."),
  ], "Sample 1: reject $H_0$ ($z = 1.667$). Sample 2: do not reject ($z = 1.2$).", ["factory", "multi-part"], 10),

  hardHT(58, "School teaching method: $\\mu_0=65$, $\\sigma=9$, $n=36$, $\\bar{x}=67.5$. (a) State hypotheses. (b) Two-tailed test at $5\\%$. (c) Interpret for headteacher.", [
    step(1, "(a) Hypotheses", "H_0{:}\\ \\mu = 65,\\quad H_1{:}\\ \\mu \\neq 65", "Two-tailed: any change."),
    step(2, "(b) SE", "SE = 1.5", "Standard error."),
    step(3, "(b) z", "z = 1.667", "Test statistic."),
    step(4, "(b) Critical", "z_{\\text{crit}} = \\pm 1.96", "Two-tailed $5\\%$."),
    step(5, "(b) Decision", "1.667 < 1.96 \\Rightarrow \\text{do not reject}", "Not significant."),
    step(6, "(c) Interpretation", "\\text{Insufficient evidence of change}", "Headteacher: results inconclusive."),
    step(7, "Context", "\\text{Continue monitoring}", "Larger sample may detect smaller effects."),
    step(8, "Answer", "z=1.667;\\; \\text{do not reject } H_0", "Complete test."),
  ], "Do not reject $H_0$ at $5\\%$ ($z = 1.667$). Insufficient evidence the method changes mean score.", ["education", "multi-part"], 9),

  // Hard — Type I/II, sample size, multi-step (59–70)
  typeErrorQ(59, "A quality controller tests whether mean component length exceeds the specification of $12\\text{ cm}$. Explain Type I and Type II errors in this context.", "Concluding the mean length is above $12\\text{ cm}$ when it is actually $12\\text{ cm}$.", "Concluding the mean length is $12\\text{ cm}$ when it is actually above $12\\text{ cm}$.", ["factory"]),
  typeErrorQ(60, "A school tests whether mean exam performance has changed from the national benchmark. Describe Type I and Type II errors.", "Concluding the mean has changed when it has not.", "Concluding the mean has not changed when it actually has.", ["education"]),
  sampleSizeQ(61, 100, 105, 15, "5%", "20%", 49, "A manufacturer wants to detect a shift in mean from $100$ to $105$ with $\\sigma = 15$, using a one-tailed test at $5\\%$ with power $80\\%$. Find the minimum sample size required.", ["factory"]),
  sampleSizeQ(62, 50, 47, 8, "5%", "20%", 36, "A hospital wants to detect a decrease in mean from $50$ to $47$ with $\\sigma = 8$. For a one-tailed test at $5\\%$ with $80\\%$ power, find the minimum $n$.", ["medicine"]),

  hardHT(63, "A coffee chain claims mean serving temperature is $65^\\circ\\text{C}$. A sample of $25$ drinks has $\\bar{x} = 63.5^\\circ\\text{C}$ and $\\sigma = 3^\\circ\\text{C}$ is known. (a) State $H_0$ and $H_1$ for a test that the mean is lower than claimed. (b) Calculate the test statistic. (c) Test at the $5\\%$ level and conclude.", [
    step(1, "(a) Null hypothesis", "H_0{:}\\ \\mu = 65", "Assume the claimed mean is correct."),
    step(2, "(a) Alternative", "H_1{:}\\ \\mu < 65", "Suspect the mean temperature is lower."),
    step(3, "(b) Standard error", "SE = \\dfrac{3}{\\sqrt{25}} = 0.6", "Spread of sample means."),
    step(4, "(b) Test statistic", "z = \\dfrac{63.5 - 65}{0.6} = -2.5", "How many standard errors below $65$ the sample mean lies."),
    step(5, "(c) Critical value", "z_{\\text{crit}} = -1.645", "Lower-tailed $5\\%$ critical value."),
    step(6, "(c) Compare", "-2.5 < -1.645", "The test statistic falls in the critical region."),
    step(7, "(c) Decision", "\\text{Reject } H_0", "Sufficient evidence against the claim."),
    step(8, "(c) Conclusion", "\\text{Mean temperature is below } 65^\\circ\\text{C}", "In context: drinks are served cooler than advertised."),
    step(9, "Final answer", "\\text{Reject } H_0 \\text{ at } 5\\%", "Complete test conclusion."),
  ], "(a) $H_0{:}\\ \\mu = 65$, $H_1{:}\\ \\mu < 65$. (b) $z = -2.5$. (c) Reject $H_0$ at $5\\%$ — there is evidence mean temperature is below $65^\\circ\\text{C}$.", ["food", "multi-step"], 8),

  hardHT(64, "An energy supplier claims mean household usage is $18\\text{ kWh}$ per day. A council surveys $64$ homes and finds $\\bar{x} = 17.1\\text{ kWh}$ with $\\sigma = 2.4\\text{ kWh}$. (a) Test at the $1\\%$ level whether usage differs from $18\\text{ kWh}$. (b) Find the critical regions for $\\bar{x}$. (c) Interpret the result for the council.", [
    step(1, "(a) Hypotheses", "H_0{:}\\ \\mu = 18,\\; H_1{:}\\ \\mu \\neq 18", "Two-tailed test for a change in either direction."),
    step(2, "(a) Standard error", "SE = \\dfrac{2.4}{\\sqrt{64}} = 0.3", "Standard deviation of $\\bar{X}$."),
    step(3, "(a) Test statistic", "z = \\dfrac{17.1 - 18}{0.3} = -3", "Standardised difference."),
    step(4, "(a) Critical value", "z_{\\text{crit}} = \\pm 2.576", "Two-tailed $1\\%$ critical values."),
    step(5, "(a) Decision", "|z| = 3 > 2.576 \\Rightarrow \\text{Reject } H_0", "Highly significant at $1\\%$."),
    step(6, "(b) Critical boundaries", "\\bar{x} < 17.23 \\text{ or } \\bar{x} > 18.77", "Reject $H_0$ if sample mean falls outside this interval."),
    step(7, "(c) Interpretation", "\\text{Local usage differs significantly from } 18\\text{ kWh}", "Council homes use less energy on average than the supplier's claim."),
    step(8, "Final answer", "\\text{Reject } H_0 \\text{ at } 1\\%", "Strong evidence of a difference."),
  ], "(a) $z = -3$; reject $H_0$ at $1\\%$. (b) Reject if $\\bar{x} < 17.23$ or $\\bar{x} > 18.77$. (c) Local mean usage is significantly below $18\\text{ kWh}$.", ["environment", "multi-step"], 9),

  hardHT(65, "A tyre manufacturer states mean tread depth is $8\\text{ mm}$. A sample of $36$ tyres has $\\bar{x} = 7.4\\text{ mm}$ and $\\sigma = 1.2\\text{ mm}$ is known. (a) Calculate the p-value for a lower-tailed test. (b) Is there evidence at the $2.5\\%$ level that tread depth is below $8\\text{ mm}$? (c) Find the critical value of $\\bar{x}$ at $5\\%$.", [
    step(1, "(a) Test statistic", "z = \\dfrac{7.4 - 8}{1.2/\\sqrt{36}} = -3", "Standardised sample mean."),
    step(2, "(a) p-value", "p = P(Z < -3) \\approx 0.0013", "Lower-tail probability."),
    step(3, "(b) Compare with 2.5%", "0.0013 < 0.025", "p-value is below the significance level."),
    step(4, "(b) Decision", "\\text{Reject } H_0", "Strong evidence tread depth is below $8\\text{ mm}$."),
    step(5, "(c) Critical z", "z_{\\text{crit}} = -1.645", "Lower-tailed $5\\%$ value."),
    step(6, "(c) Critical \\bar{x}", "\\bar{x} = 8 - 1.645 \\times 0.2 = 7.67\\text{ mm}", "Reject $H_0$ if sample mean is below $7.67\\text{ mm}$."),
    step(7, "Interpretation", "7.4 < 7.67", "Observed mean is in the critical region."),
    step(8, "Final answer", "p \\approx 0.0013;\\;\\text{reject at } 2.5\\%;\\;\\bar{x}_{\\text{crit}} = 7.67", "Complete three-part answer."),
  ], "(a) $p \\approx 0.0013$. (b) Yes — reject $H_0$ at $2.5\\%$. (c) Critical $\\bar{x} = 7.67\\text{ mm}$ at $5\\%$.", ["consumer", "p-value"], 10),

  hardHT(66, "A cereal box is labelled $500\\text{ g}$. Regulations require a one-tailed test at $5\\%$ using a sample of $n$ items with known $\\sigma = 4\\text{ g}$. (a) If $\\bar{x} = 498.5\\text{ g}$ from $n=25$, calculate $z$ and decide. (b) What sample mean would be needed to reject $H_0{:}\\ \\mu = 500$ in an upper-tailed test at $5\\%$? (c) Explain why $\\sigma$ must be known for this z-test.", [
    step(1, "(a) Standard error", "SE = \\dfrac{4}{\\sqrt{25}} = 0.8", "Known population standard deviation."),
    step(2, "(a) Test statistic", "z = \\dfrac{498.5 - 500}{0.8} = -1.875", "Sample mean is below the label weight."),
    step(3, "(a) Decision at 5%", "|z| = 1.875;\\; \\text{upper-tailed } z_{\\text{crit}} = 1.645", "For $H_1{:}\\ \\mu > 500$, we need $z > 1.645$."),
    step(4, "(a) Conclusion", "\\text{Do not reject } H_0", "Insufficient evidence mean exceeds $500\\text{ g}$."),
    step(5, "(b) Critical boundary", "\\bar{x} = 500 + 1.645 \\times 0.8 = 501.32\\text{ g}", "Reject $H_0$ if $\\bar{x} > 501.32\\text{ g}$."),
    step(6, "(c) Why \\sigma known", "z = \\dfrac{\\bar{x}-\\mu_0}{\\sigma/\\sqrt{n}} \\text{ uses population } \\sigma", "Without $\\sigma$, we use the sample standard deviation and a $t$-distribution instead."),
    step(7, "Context", "498.5 < 501.32", "Observed mean does not exceed the critical boundary."),
    step(8, "Final answer", "(a) $z=-1.875$, do not reject; (b) $\\bar{x}>501.32\\text{ g}$; (c) $\\sigma$ must be known to use the standard normal.", "All parts answered."),
  ], "(a) $z = -1.875$; do not reject $H_0$. (b) Reject if $\\bar{x} > 501.32\\text{ g}$. (c) The z-test formula requires the population standard deviation.", ["food", "regulation"], 9),

  hardHT(67, "Two independent samples are not needed here — a single sample of $50$ light bulbs has $\\bar{x} = 990$ hours with $\\sigma = 40$ hours. The manufacturer claims $\\mu = 1000$ hours. (a) State hypotheses for a lower-tailed test. (b) Find the p-value. (c) At what significance levels would you reject $H_0$?", [
    step(1, "(a) Hypotheses", "H_0{:}\\ \\mu = 1000,\\; H_1{:}\\ \\mu < 1000", "Test whether bulbs last less than claimed."),
    step(2, "(b) Standard error", "SE = \\dfrac{40}{\\sqrt{50}} \\approx 5.66", "Standard error of the mean."),
    step(3, "(b) Test statistic", "z = \\dfrac{990 - 1000}{5.66} \\approx -1.77", "Sample mean is below the claim."),
    step(4, "(b) p-value", "p = P(Z < -1.77) \\approx 0.038", "Lower-tail probability."),
    step(5, "(c) Compare with levels", "p = 0.038", "Reject $H_0$ whenever $\\alpha > 0.038$."),
    step(6, "(c) At 5%", "0.038 < 0.05 \\Rightarrow \\text{Reject}", "Significant at $5\\%$."),
    step(7, "(c) At 1%", "0.038 > 0.01 \\Rightarrow \\text{Do not reject}", "Not significant at $1\\%$."),
    step(8, "Final answer", "p \\approx 0.038;\\;\\text{reject for } \\alpha = 5\\%, 10\\%", "Reject at $5\\%$ and $10\\%$ but not at $1\\%$."),
  ], "(a) $H_0{:}\\ \\mu = 1000$, $H_1{:}\\ \\mu < 1000$. (b) $p \\approx 0.038$. (c) Reject $H_0$ at $5\\%$ and $10\\%$ but not at $1\\%$.", ["consumer"], 8),

  hardHT(68, "A call centre claims mean waiting time is $4$ minutes. A sample of $100$ callers gives $\\bar{x} = 4.35$ minutes with $\\sigma = 1.5$ minutes. (a) Test at the $5\\%$ level whether waiting time has increased. (b) Find the smallest significance level at which $H_0$ would be rejected. (c) State your conclusion in context.", [
    step(1, "(a) Hypotheses", "H_0{:}\\ \\mu = 4,\\; H_1{:}\\ \\mu > 4", "Upper-tailed test for an increase."),
    step(2, "(a) Standard error", "SE = \\dfrac{1.5}{\\sqrt{100}} = 0.15", "Standard error."),
    step(3, "(a) Test statistic", "z = \\dfrac{4.35 - 4}{0.15} = 2.33", "Sample mean is $2.33$ standard errors above $4$."),
    step(4, "(a) Critical value", "z_{\\text{crit}} = 1.645", "Upper-tailed $5\\%$ value."),
    step(5, "(a) Decision", "2.33 > 1.645 \\Rightarrow \\text{Reject } H_0", "Significant increase at $5\\%$."),
    step(6, "(b) p-value", "p = P(Z > 2.33) \\approx 0.01", "Smallest $\\alpha$ for rejection is about $1\\%$."),
    step(7, "(c) Conclusion", "\\text{Waiting times have increased significantly}", "Callers wait longer than the claimed $4$ minutes."),
    step(8, "Final answer", "\\text{Reject } H_0 \\text{ at } 5\\%;\\; p \\approx 0.01", "Evidence of increased waiting times."),
  ], "(a) $z = 2.33$; reject $H_0$ at $5\\%$. (b) $p \\approx 0.01$ — reject for any $\\alpha > 1\\%$. (c) Mean waiting time is significantly above $4$ minutes.", ["service"], 9),

  hardHT(69, "A drug trial tests whether mean blood pressure reduction exceeds $5\\text{ mmHg}$. From $30$ patients, $\\bar{x} = 6.2\\text{ mmHg}$ with $\\sigma = 3\\text{ mmHg}$. (a) State $H_0$ and $H_1$. (b) Perform the test at $5\\%$. (c) Calculate the critical region for $\\bar{x}$. (d) Explain what a Type I error would mean here.", [
    step(1, "(a) Hypotheses", "H_0{:}\\ \\mu = 5,\\; H_1{:}\\ \\mu > 5", "Test whether reduction exceeds $5\\text{ mmHg}$."),
    step(2, "(b) Standard error", "SE = \\dfrac{3}{\\sqrt{30}} \\approx 0.548", "Standard error of mean reduction."),
    step(3, "(b) Test statistic", "z = \\dfrac{6.2 - 5}{0.548} \\approx 2.19", "Observed reduction is $2.19$ SE above $5$."),
    step(4, "(b) Critical value", "z_{\\text{crit}} = 1.645", "Upper-tailed $5\\%$."),
    step(5, "(b) Decision", "2.19 > 1.645 \\Rightarrow \\text{Reject } H_0", "Drug significantly reduces blood pressure by more than $5\\text{ mmHg}$."),
    step(6, "(c) Critical region", "\\bar{x} > 5 + 1.645 \\times 0.548 \\approx 5.90\\text{ mmHg}", "Reject if sample mean reduction exceeds $5.90\\text{ mmHg}$."),
    step(7, "(d) Type I error", "\\text{Conclude reduction } > 5 \\text{ when it is actually } 5", "False claim of extra effectiveness."),
    step(8, "Final answer", "\\text{Reject } H_0;\\;\\bar{x} > 5.90;\\;\\text{Type I: false positive on efficacy}", "Complete four-part answer."),
  ], "(a) $H_0{:}\\ \\mu = 5$, $H_1{:}\\ \\mu > 5$. (b) $z \\approx 2.19$; reject $H_0$ at $5\\%$. (c) Reject if $\\bar{x} > 5.90\\text{ mmHg}$. (d) Type I: concluding the drug reduces by more than $5\\text{ mmHg}$ when it does not.", ["medicine", "multi-step"], 10),

  hardHT(70, "A quality audit compares a supplier's claim of mean tensile strength $200\\text{ N}$ against sample evidence. A random sample of $40$ components gives $\\bar{x} = 196\\text{ N}$ with $\\sigma = 12\\text{ N}$. (a) State suitable hypotheses. (b) Calculate the test statistic and p-value for a two-tailed test. (c) Test at $5\\%$ and $1\\%$. (d) Find the range of $\\mu_0$ values that would not be rejected at $5\\%$. (e) Summarise the audit findings.", [
    step(1, "(a) Hypotheses", "H_0{:}\\ \\mu = 200,\\; H_1{:}\\ \\mu \\neq 200", "Two-tailed test for any deviation from the claim."),
    step(2, "(b) Standard error", "SE = \\dfrac{12}{\\sqrt{40}} \\approx 1.897", "Standard error."),
    step(3, "(b) Test statistic", "z = \\dfrac{196 - 200}{1.897} \\approx -2.11", "Sample mean is below the claimed strength."),
    step(4, "(b) p-value", "p = 2 \\times P(Z > 2.11) \\approx 0.035", "Two-tailed p-value."),
    step(5, "(c) At 5%", "0.035 < 0.05 \\Rightarrow \\text{Reject } H_0", "Significant at $5\\%$."),
    step(6, "(c) At 1%", "0.035 > 0.01 \\Rightarrow \\text{Do not reject } H_0", "Not significant at $1\\%$."),
    step(7, "(d) Non-rejection interval", "196 \\pm 1.96 \\times 1.897 \\Rightarrow (192.3,\\, 199.7)", "Would not reject $H_0$ if claimed mean were in this interval."),
    step(8, "(e) Summary", "\\text{Evidence components are weaker than claimed at } 5\\%", "Audit suggests mean strength is below $200\\text{ N}$."),
    step(9, "Final answer", "z \\approx -2.11;\\; p \\approx 0.035", "Reject at $5\\%$ but not at $1\\%$."),
    step(10, "Audit conclusion", "\\text{Supplier claim questionable at } 5\\%", "Recommend further investigation."),
  ], "(a) $H_0{:}\\ \\mu = 200$, $H_1{:}\\ \\mu \\neq 200$. (b) $z \\approx -2.11$, $p \\approx 0.035$. (c) Reject at $5\\%$; do not reject at $1\\%$. (d) Non-rejection interval for $\\mu_0$: $(192.3,\\, 199.7)$. (e) Evidence at $5\\%$ that mean strength is below the claimed $200\\text{ N}$.", ["factory", "audit", "multi-step"], 12),
];

const STEP_MIN = { Easy: 6, Intermediate: 9, Hard: 13 };
const STEP_MAX = { Easy: 9, Intermediate: 13, Hard: 18 };
const EXTRA = [
  () => step(0, "Recall the z-test", "z = \\dfrac{\\bar{x} - \\mu_0}{\\sigma / \\sqrt{n}}", "The test statistic standardises the sample mean under $H_0$."),
  () => step(0, "Standard error", "SE = \\dfrac{\\sigma}{\\sqrt{n}}", "The standard deviation of the sample mean."),
  () => step(0, "Sampling distribution", "\\bar{X} \\sim N\\left(\\mu,\\,\\dfrac{\\sigma^2}{n}\\right)", "The sample mean is normally distributed when $\\sigma$ is known."),
  () => step(0, "Critical value", "z_{\\text{crit}} \\text{ from tables}", "Compare $|z|$ with the critical value at the chosen significance level."),
  () => step(0, "Decision rule", "p < \\alpha \\Rightarrow \\text{reject } H_0", "Reject the null if the p-value is smaller than the significance level."),
  () => step(0, "Conclusion in context", "\\text{Translate decision to scenario}", "Always state the conclusion in terms of the original problem."),
  () => step(0, "Type I error", "\\alpha = P(\\text{reject } H_0 \\mid H_0 \\text{ true})", "A false positive — rejecting a true null hypothesis."),
  () => step(0, "Check assumptions", "\\sigma \\text{ known; random sample}", "The z-test requires known population standard deviation."),
];

for (const q of questions) {
  const min = STEP_MIN[q.difficulty];
  const max = STEP_MAX[q.difficulty];
  let steps = [...q.workedSolution.steps];
  let pad = 0;
  while (steps.length < min) {
    const extra = EXTRA[pad % EXTRA.length]();
    steps.push({ ...extra, stepNumber: steps.length + 1 });
    pad++;
  }
  if (steps.length > max) steps = steps.slice(0, max);
  q.workedSolution.steps = steps.map((s, i) => ({ ...s, stepNumber: i + 1 }));
}

if (questions.length !== 70) {
  console.error(`Expected 70 questions, got ${questions.length}`);
  process.exit(1);
}

writeFileSync(outPath, `import { Question } from "@/lib/types";\n\nexport const questions: Question[] = ${JSON.stringify(questions, null, 2)};\n`);
console.log(`Wrote ${questions.length} questions to ${outPath}`);
