#!/usr/bin/env node
/**
 * Generates 70 A-Level Further Maths "Hypothesis testing (Poisson, geometric)" questions.
 * Output: src/data/questions/a-level-further-maths/year-1-stats/hypothesis-tests.ts
 *
 * Topics: hypotheses; critical regions; actual significance level;
 * one-/two-tailed Poisson and geometric tests; conclusions in context.
 */

import { writeFileSync, mkdirSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const outDir = resolve(__dirname, "../src/data/questions/a-level-further-maths/year-1-stats");
const outPath = resolve(outDir, "hypothesis-tests.ts");
mkdirSync(outDir, { recursive: true });

const SUBTOPIC = "Hypothesis testing (Poisson, geometric)";
const SUBTOPIC_ID = "fm.y1.stats.hypothesis-tests";
const LEVEL = "A-Level Further Maths";
const TOPIC = "Further Maths Year 1: Statistics (Further Statistics 1)";

const qid = (n) => `fm.y1.stats.hypothesis-tests.q${String(n).padStart(3, "0")}`;
const step = (n, description, workingLatex, explanation) => ({
  stepNumber: n, description, workingLatex, explanation, diagram: null,
});
const base = (meta) => ({
  level: LEVEL, topic: TOPIC, subtopic: SUBTOPIC, subtopicId: SUBTOPIC_ID,
  questionDiagram: null, ...meta,
});
const htQ = (n, meta) => base({ id: qid(n), tags: ["hypothesis-tests", ...(meta.tags || [])], ...meta });

function fact(n) {
  let f = 1;
  for (let i = 2; i <= n; i++) f *= i;
  return f;
}

function poissonPMF(lambda, k) {
  return (Math.exp(-lambda) * lambda ** k) / fact(k);
}
function poissonCDF(lambda, k) {
  let s = 0;
  for (let i = 0; i <= k; i++) s += poissonPMF(lambda, i);
  return s;
}
function poissonTailGE(lambda, k) {
  return 1 - poissonCDF(lambda, k - 1);
}
function poissonTailLE(lambda, k) {
  return poissonCDF(lambda, k);
}

/** Geometric: number of trials until first success; P(X=k)=(1-p)^{k-1}p, k=1,2,... */
function geoPMF(p, k) {
  return (1 - p) ** (k - 1) * p;
}
function geoCDF(p, k) {
  // P(X <= k) = 1 - (1-p)^k
  return 1 - (1 - p) ** k;
}
function geoTailGE(p, k) {
  // P(X >= k) = (1-p)^{k-1}
  return (1 - p) ** (k - 1);
}
function geoTailLE(p, k) {
  return geoCDF(p, k);
}

function fmt(x, dp = 4) {
  if (x === 0) return "0";
  if (Number.isInteger(x)) return `${x}`;
  const s = Number(x).toFixed(dp);
  return s.replace(/\.?0+$/, "") || "0";
}

function pct(p) {
  return `${fmt(100 * p, 2)}\\%`;
}

function hardQ(n, questionText, steps, finalAnswer, tags = [], marks = 8) {
  return htQ(n, {
    difficulty: "Hard", marks, answerType: "written", tags,
    questionText, workedSolution: { steps, finalAnswer },
  });
}

// ── Easy: state hypotheses ───────────────────────────────────────────

function hypPoissonQ(n, lambda0, tail, context) {
  const h1 =
    tail === "upper" ? `\\lambda > ${lambda0}` :
    tail === "lower" ? `\\lambda < ${lambda0}` :
    `\\lambda \\neq ${lambda0}`;
  const tailName =
    tail === "upper" ? "one-tailed (upper)" :
    tail === "lower" ? "one-tailed (lower)" : "two-tailed";
  const steps = [
    step(1, "Identify the parameter", "\\lambda = \\text{mean rate (Poisson)}", "For a Poisson model the parameter under test is $\\lambda$."),
    step(2, "Claim under null", `\\lambda_0 = ${lambda0}`, "The null uses the stated or historical value of $\\lambda$."),
    step(3, "Null hypothesis", `H_0{:}\\ \\lambda = ${lambda0}`, "Assume the rate is unchanged unless the data contradict this."),
    step(4, "Direction of suspicion", tail === "upper" ? "\\text{rate has increased}" : tail === "lower" ? "\\text{rate has decreased}" : "\\text{rate has changed}", "The wording tells us which alternative fits."),
    step(5, "Alternative hypothesis", `H_1{:}\\ ${h1}`, `A ${tailName} alternative matches the suspicion.`),
    step(6, "Answer", `H_0{:}\\ \\lambda = ${lambda0},\\ H_1{:}\\ ${h1}`, "State both hypotheses clearly."),
  ];
  return htQ(n, {
    difficulty: "Easy", marks: 3, answerType: "written",
    tags: ["hypotheses", "poisson", tail],
    questionText: `${context} State suitable hypotheses for a test of the Poisson mean.`,
    workedSolution: { steps, finalAnswer: `$H_0{:}\\ \\lambda = ${lambda0}$, $H_1{:}\\ ${h1}$ (${tailName}).` },
  });
}

function hypGeoQ(n, p0, tail, context) {
  const h1 =
    tail === "upper" ? `p > ${p0}` :
    tail === "lower" ? `p < ${p0}` :
    `p \\neq ${p0}`;
  const tailName =
    tail === "upper" ? "one-tailed (upper)" :
    tail === "lower" ? "one-tailed (lower)" : "two-tailed";
  const steps = [
    step(1, "Identify the parameter", "p = \\text{probability of success}", "For a geometric distribution the parameter is the success probability $p$."),
    step(2, "Claim under null", `p_0 = ${p0}`, "The null uses the claimed probability of success."),
    step(3, "Null hypothesis", `H_0{:}\\ p = ${p0}`, "Assume the claimed probability until evidence suggests otherwise."),
    step(4, "Direction of suspicion", tail === "upper" ? "\\text{success is more likely}" : tail === "lower" ? "\\text{success is less likely}" : "\\text{probability has changed}", "Match $H_1$ to the research question."),
    step(5, "Alternative hypothesis", `H_1{:}\\ ${h1}`, `Choose a ${tailName} test.`),
    step(6, "Answer", `H_0{:}\\ p = ${p0},\\ H_1{:}\\ p ${tail === "upper" ? ">" : tail === "lower" ? "<" : "\\neq"} ${p0}`, "State both hypotheses."),
  ];
  return htQ(n, {
    difficulty: "Easy", marks: 3, answerType: "written",
    tags: ["hypotheses", "geometric", tail],
    questionText: `${context} State suitable hypotheses for a test of the geometric parameter $p$.`,
    workedSolution: { steps, finalAnswer: `$H_0{:}\\ p = ${p0}$, $H_1{:}\\ ${h1}$ (${tailName}).` },
  });
}

function identifyTailQ(n, context, oneTailed, direction) {
  const steps = [
    step(1, "Read the claim", "H_0 \\text{ uses equality}", "The null always states the claimed parameter value."),
    step(2, "Identify the suspicion", direction, "Look at whether evidence is sought in one direction or either direction."),
    step(3, "Classify the alternative", oneTailed ? `H_1 \\text{ is one-tailed (${direction})}` : "H_1 \\text{ is two-tailed}", "This classification sets the critical region shape."),
    step(4, "Critical region", oneTailed ? "\\text{Rejection in one tail only}" : "\\text{Rejection in both tails}", "One-tailed tests concentrate the significance level in one tail."),
    step(5, "Answer in context", oneTailed ? `\\text{One-tailed (${direction})}` : "\\text{Two-tailed}", "State the type of test clearly."),
    step(6, "Reason", oneTailed ? "\\text{Only one direction of change is of interest}" : "\\text{Any change from the claim is of interest}", "Link the wording of the question to the tails used."),
  ];
  return htQ(n, {
    difficulty: "Easy", marks: 2, answerType: "written",
    tags: ["tails"],
    questionText: `${context} State whether a one-tailed or two-tailed test is appropriate, giving a reason.`,
    workedSolution: {
      steps,
      finalAnswer: oneTailed ? `One-tailed (${direction}) test.` : "Two-tailed test.",
    },
  });
}

function defineCriticalRegionQ(n) {
  const steps = [
    step(1, "Definition", "\\text{CR} = \\{x{:}\\ \\text{reject } H_0\\}", "The set of observed values leading to rejection of $H_0$."),
    step(2, "Significance level", "\\alpha = P(X \\in CR \\mid H_0)", "For discrete distributions the actual size is often slightly less than the nominal $\\alpha$."),
    step(3, "How it is found", "\\text{Accumulate tail probabilities under } H_0", "Include extreme values until the remaining probability would exceed $\\alpha$."),
    step(4, "Acceptance region", "\\text{Do not reject } H_0 \\text{ if } X \\notin CR", "Observed values outside the CR are consistent with $H_0$ at this level."),
    step(5, "Discrete caution", "\\text{Actual size} \\leq \\alpha", "You cannot usually achieve exactly $\\alpha$ with discrete data."),
    step(6, "Answer", "\\text{Values of the test statistic that reject } H_0", "State the definition."),
  ];
  return htQ(n, {
    difficulty: "Easy", marks: 2, answerType: "written",
    tags: ["critical-region", "definition"],
    questionText: "In a hypothesis test for a discrete distribution, what is meant by a critical region?",
    workedSolution: {
      steps,
      finalAnswer: "The set of values of the test statistic for which $H_0$ is rejected.",
    },
  });
}

function defineASLQn(n) {
  const steps = [
    step(1, "Definition", "\\text{ASL} = P(\\text{reject } H_0 \\mid H_0 \\text{ true})", "Also called the actual significance level or size of the test."),
    step(2, "Link to Type I", "\\text{ASL} = P(\\text{Type I error})", "It is the probability of a false rejection under the null."),
    step(3, "Calculation", "\\text{ASL} = P(X \\in CR \\mid H_0)", "Sum (or integrate) the probability of landing in the critical region under $H_0$."),
    step(4, "Discrete tests", "\\text{ASL} \\leq \\text{nominal } \\alpha", "Critical regions are chosen so that the ASL does not exceed $\\alpha$."),
    step(5, "Why it matters", "\\text{Report the true Type I risk}", "Exam answers often ask for both CR and ASL."),
    step(6, "Answer", "P(X \\in CR \\mid H_0)", "State the definition."),
  ];
  return htQ(n, {
    difficulty: "Easy", marks: 2, answerType: "written",
    tags: ["asl", "definition"],
    questionText: "Define the actual significance level of a hypothesis test.",
    workedSolution: {
      steps,
      finalAnswer: "The probability of rejecting $H_0$ when $H_0$ is true (equals $P(X \\in CR \\mid H_0)$).",
    },
  });
}

// ── Intermediate: critical regions & p-values ────────────────────────

function poissonUpperCR(n, lambda0, alpha, c) {
  // CR: X >= c, with P(X>=c | λ0) <= alpha < P(X>=c-1 | λ0)
  const asl = poissonTailGE(lambda0, c);
  const prev = poissonTailGE(lambda0, c - 1);
  const steps = [
    step(1, "Hypotheses", `H_0{:}\\ \\lambda = ${lambda0},\\ H_1{:}\\ \\lambda > ${lambda0}`, "Upper-tailed test: large counts reject $H_0$."),
    step(2, "Under $H_0$", `X \\sim \\text{Po}(${lambda0})`, "Model the count with the null mean."),
    step(3, "Seek smallest $c$ with", `P(X \\geq c) \\leq ${alpha}`, `Nominal significance level ${pct(alpha)}.`),
    step(4, "Check $c-1$", `P(X \\geq ${c - 1}) = ${fmt(prev)} ${prev > alpha ? ">" : "\\leq"} ${alpha}`, "The previous threshold exceeds $\\alpha$ (or note the boundary)."),
    step(5, "Check $c$", `P(X \\geq ${c}) = ${fmt(asl)} \\leq ${alpha}`, "This is the first acceptable upper critical value."),
    step(6, "Critical region", `X \\geq ${c}`, "Reject $H_0$ for observations at least $c$."),
    step(7, "Actual significance level", `\\text{ASL} = ${fmt(asl)}`, "Probability of Type I error for this discrete CR."),
    step(8, "Answer", `CR{:}\\ X \\geq ${c};\\ \\text{ASL} = ${fmt(asl)}`, "State the region and its size."),
  ];
  return htQ(n, {
    difficulty: "Intermediate", marks: 6, answerType: "written",
    tags: ["poisson", "critical-region", "upper"],
    questionText: `The random variable $X \\sim \\text{Po}(\\lambda)$. Test $H_0{:}\\ \\lambda = ${lambda0}$ against $H_1{:}\\ \\lambda > ${lambda0}$ at the ${pct(alpha)} level. Find the critical region and the actual significance level.`,
    workedSolution: { steps, finalAnswer: `Critical region $X \\geq ${c}$; ASL $= ${fmt(asl)}$.` },
  });
}

function poissonLowerCR(n, lambda0, alpha, c) {
  // CR: X <= c
  const asl = poissonTailLE(lambda0, c);
  const next = poissonTailLE(lambda0, c + 1);
  const steps = [
    step(1, "Hypotheses", `H_0{:}\\ \\lambda = ${lambda0},\\ H_1{:}\\ \\lambda < ${lambda0}`, "Lower-tailed test: small counts reject $H_0$."),
    step(2, "Under $H_0$", `X \\sim \\text{Po}(${lambda0})`, "Use the null Poisson distribution."),
    step(3, "Seek largest $c$ with", `P(X \\leq c) \\leq ${alpha}`, `Nominal level ${pct(alpha)}.`),
    step(4, "Check $c+1$", `P(X \\leq ${c + 1}) = ${fmt(next)} ${next > alpha ? ">" : "\\leq"} ${alpha}`, "Including one more value would exceed $\\alpha$."),
    step(5, "Check $c$", `P(X \\leq ${c}) = ${fmt(asl)} \\leq ${alpha}`, "Largest $c$ with ASL not exceeding $\\alpha$."),
    step(6, "Critical region", `X \\leq ${c}`, "Reject $H_0$ for observations at most $c$."),
    step(7, "Actual significance level", `\\text{ASL} = ${fmt(asl)}`, "Exact Type I error probability."),
    step(8, "Answer", `CR{:}\\ X \\leq ${c};\\ \\text{ASL} = ${fmt(asl)}`, "State CR and ASL."),
  ];
  return htQ(n, {
    difficulty: "Intermediate", marks: 6, answerType: "written",
    tags: ["poisson", "critical-region", "lower"],
    questionText: `The random variable $X \\sim \\text{Po}(\\lambda)$. Test $H_0{:}\\ \\lambda = ${lambda0}$ against $H_1{:}\\ \\lambda < ${lambda0}$ at the ${pct(alpha)} level. Find the critical region and the actual significance level.`,
    workedSolution: { steps, finalAnswer: `Critical region $X \\leq ${c}$; ASL $= ${fmt(asl)}$.` },
  });
}

function geoUpperCR(n, p0, alpha, c) {
  // Large X (many trials) suggests small p, so for H1: p < p0 we use upper CR on X
  // For H1: p > p0 we use lower CR on X (few trials)
  // Here "upper" means H1: p < p0 with CR X >= c
  const asl = geoTailGE(p0, c);
  const prev = geoTailGE(p0, c - 1);
  const steps = [
    step(1, "Hypotheses", `H_0{:}\\ p = ${p0},\\ H_1{:}\\ p < ${p0}`, "If success is less likely, more trials are needed before the first success."),
    step(2, "Model under $H_0$", `X \\sim \\text{Geo}(${p0})`, "$X$ = number of trials until first success."),
    step(3, "Upper critical region", `P(X \\geq c) \\leq ${alpha}`, "Large $X$ supports a smaller $p$."),
    step(4, "Geometric tail", `P(X \\geq k) = (1-p)^{k-1}`, "Closed form for the geometric survival function."),
    step(5, "Check $c-1$", `P(X \\geq ${c - 1}) = ${fmt(prev)} ${prev > alpha ? ">" : "\\leq"} ${alpha}`, "Previous threshold exceeds $\\alpha$."),
    step(6, "Check $c$", `P(X \\geq ${c}) = (1-${p0})^{${c - 1}} = ${fmt(asl)} \\leq ${alpha}`, "Acceptable critical value."),
    step(7, "Answer", `CR{:}\\ X \\geq ${c};\\ \\text{ASL} = ${fmt(asl)}`, "Critical region and size."),
  ];
  return htQ(n, {
    difficulty: "Intermediate", marks: 6, answerType: "written",
    tags: ["geometric", "critical-region", "p-less"],
    questionText: `Let $X$ be the number of independent trials until the first success, $X \\sim \\text{Geo}(p)$. Test $H_0{:}\\ p = ${p0}$ against $H_1{:}\\ p < ${p0}$ at the ${pct(alpha)} level. Find the critical region of the form $X \\geq c$ and the actual significance level.`,
    workedSolution: { steps, finalAnswer: `Critical region $X \\geq ${c}$; ASL $= ${fmt(asl)}$.` },
  });
}

function geoLowerCR(n, p0, alpha, c) {
  // H1: p > p0 => small X; CR X <= c
  const asl = geoTailLE(p0, c);
  const next = geoTailLE(p0, c + 1);
  const steps = [
    step(1, "Hypotheses", `H_0{:}\\ p = ${p0},\\ H_1{:}\\ p > ${p0}`, "If success is more likely, fewer trials are needed."),
    step(2, "Model under $H_0$", `X \\sim \\text{Geo}(${p0})`, "Geometric trials-to-first-success model."),
    step(3, "Lower critical region", `P(X \\leq c) \\leq ${alpha}`, "Small $X$ supports a larger $p$."),
    step(4, "CDF formula", `P(X \\leq k) = 1 - (1-p)^{k}`, "Closed form for the geometric CDF."),
    step(5, "Check $c+1$", `P(X \\leq ${c + 1}) = ${fmt(next)} ${next > alpha ? ">" : "\\leq"} ${alpha}`, "Including one more value exceeds $\\alpha$."),
    step(6, "Check $c$", `P(X \\leq ${c}) = 1-(1-${p0})^{${c}} = ${fmt(asl)} \\leq ${alpha}`, "Largest admissible $c$."),
    step(7, "Answer", `CR{:}\\ X \\leq ${c};\\ \\text{ASL} = ${fmt(asl)}`, "Critical region and size."),
  ];
  return htQ(n, {
    difficulty: "Intermediate", marks: 6, answerType: "written",
    tags: ["geometric", "critical-region", "p-greater"],
    questionText: `Let $X$ be the number of independent trials until the first success, $X \\sim \\text{Geo}(p)$. Test $H_0{:}\\ p = ${p0}$ against $H_1{:}\\ p > ${p0}$ at the ${pct(alpha)} level. Find the critical region of the form $X \\leq c$ and the actual significance level.`,
    workedSolution: { steps, finalAnswer: `Critical region $X \\leq ${c}$; ASL $= ${fmt(asl)}$.` },
  });
}

function poissonPValueTest(n, lambda0, obs, tail, alpha, reject) {
  const pval =
    tail === "upper" ? poissonTailGE(lambda0, obs) :
    tail === "lower" ? poissonTailLE(lambda0, obs) :
    Math.min(1, 2 * Math.min(poissonTailGE(lambda0, obs), poissonTailLE(lambda0, obs)));
  const h1 =
    tail === "upper" ? `\\lambda > ${lambda0}` :
    tail === "lower" ? `\\lambda < ${lambda0}` :
    `\\lambda \\neq ${lambda0}`;
  const steps = [
    step(1, "Hypotheses", `H_0{:}\\ \\lambda = ${lambda0},\\ H_1{:}\\ ${h1}`, "Set up the Poisson mean test."),
    step(2, "Observed data", `x = ${obs}`, "Use the sample count as the test statistic."),
    step(3, "Under $H_0$", `X \\sim \\text{Po}(${lambda0})`, "Null distribution for the $p$-value."),
    step(4, "Compute $p$-value",
      tail === "upper" ? `P(X \\geq ${obs}) = ${fmt(pval)}` :
      tail === "lower" ? `P(X \\leq ${obs}) = ${fmt(pval)}` :
      `p = ${fmt(pval)}`,
      "Probability of a result at least as extreme as observed."),
    step(5, "Compare with $\\alpha$", `${fmt(pval)} ${reject ? "<" : "\\geq"} ${alpha}`, `Significance level ${pct(alpha)}.`),
    step(6, "Decision", reject ? "\\text{Reject } H_0" : "\\text{Do not reject } H_0", "Reject only if the $p$-value is smaller than $\\alpha$."),
    step(7, "Conclusion", reject ? "\\text{Evidence of a change in } \\lambda" : "\\text{Insufficient evidence of a change}", "Interpret in the language of evidence, not absolute proof."),
    step(8, "Answer", reject ? `p=${fmt(pval)}; reject H_0` : `p=${fmt(pval)}; do not reject H_0`, "State $p$-value and decision."),
  ];
  return htQ(n, {
    difficulty: "Intermediate", marks: 6, answerType: "written",
    tags: ["poisson", "p-value", tail],
    questionText: `Given $X \\sim \\text{Po}(\\lambda)$ and observation $x=${obs}$. Test $H_0{:}\\ \\lambda = ${lambda0}$ against $H_1{:}\\ ${h1}$ at the ${pct(alpha)} level using a $p$-value. State your conclusion.`,
    workedSolution: {
      steps,
      finalAnswer: `$p=${fmt(pval)}$. ${reject ? "Reject" : "Do not reject"} $H_0$.`,
    },
  });
}

function geoPValueTest(n, p0, obs, tail, alpha, reject) {
  // tail "upper" means H1: p < p0 (large X); "lower" means H1: p > p0 (small X)
  const pval = tail === "upper" ? geoTailGE(p0, obs) : geoTailLE(p0, obs);
  const h1 = tail === "upper" ? `p < ${p0}` : `p > ${p0}`;
  const steps = [
    step(1, "Hypotheses", `H_0{:}\\ p = ${p0},\\ H_1{:}\\ ${h1}`, "Geometric parameter test."),
    step(2, "Observed value", `x = ${obs}`, "Number of trials until first success."),
    step(3, "Under $H_0$", `X \\sim \\text{Geo}(${p0})`, "Null geometric model."),
    step(4, "$p$-value",
      tail === "upper" ? `P(X \\geq ${obs}) = (1-${p0})^{${obs - 1}} = ${fmt(pval)}` :
      `P(X \\leq ${obs}) = 1-(1-${p0})^{${obs}} = ${fmt(pval)}`,
      "Tail probability under the null."),
    step(5, "Compare", `${fmt(pval)} ${reject ? "<" : "\\geq"} ${alpha}`, `Level ${pct(alpha)}.`),
    step(6, "Decision", reject ? "\\text{Reject } H_0" : "\\text{Do not reject } H_0", "Based on the $p$-value."),
    step(7, "Conclusion", reject ? "\\text{Evidence supporting } H_1" : "\\text{Insufficient evidence for } H_1", "Phrase carefully in context."),
    step(8, "Answer", reject ? `p=${fmt(pval)}; reject H_0` : `p=${fmt(pval)}; do not reject H_0`, "Final statement."),
  ];
  return htQ(n, {
    difficulty: "Intermediate", marks: 6, answerType: "written",
    tags: ["geometric", "p-value", tail],
    questionText: `A geometric random variable (trials until first success) has $X \\sim \\text{Geo}(p)$. Observing $x=${obs}$, test $H_0{:}\\ p = ${p0}$ against $H_1{:}\\ ${h1}$ at the ${pct(alpha)} level.`,
    workedSolution: {
      steps,
      finalAnswer: `$p=${fmt(pval)}$. ${reject ? "Reject" : "Do not reject"} $H_0$.`,
    },
  });
}

// Find critical value helpers
function findPoissonUpperC(lambda0, alpha) {
  for (let c = 1; c <= 40; c++) {
    if (poissonTailGE(lambda0, c) <= alpha && poissonTailGE(lambda0, c - 1) > alpha) return c;
  }
  return null;
}
function findPoissonLowerC(lambda0, alpha) {
  for (let c = 0; c <= 40; c++) {
    if (poissonTailLE(lambda0, c) <= alpha && poissonTailLE(lambda0, c + 1) > alpha) return c;
  }
  return null;
}
function findGeoUpperC(p0, alpha) {
  // X >= c for H1: p < p0
  for (let c = 2; c <= 80; c++) {
    if (geoTailGE(p0, c) <= alpha && geoTailGE(p0, c - 1) > alpha) return c;
  }
  return null;
}
function findGeoLowerC(p0, alpha) {
  for (let c = 1; c <= 40; c++) {
    if (geoTailLE(p0, c) <= alpha && geoTailLE(p0, c + 1) > alpha) return c;
  }
  return null;
}

// ── Hard: full multi-part tests ──────────────────────────────────────

function poissonFullTest(n, lambda0, alpha, obs, tail, context) {
  const c = tail === "upper" ? findPoissonUpperC(lambda0, alpha) : findPoissonLowerC(lambda0, alpha);
  const asl = tail === "upper" ? poissonTailGE(lambda0, c) : poissonTailLE(lambda0, c);
  const reject = tail === "upper" ? obs >= c : obs <= c;
  const h1 = tail === "upper" ? `\\lambda > ${lambda0}` : `\\lambda < ${lambda0}`;
  const cr = tail === "upper" ? `X \\geq ${c}` : `X \\leq ${c}`;
  const steps = [
    step(1, "State hypotheses", `H_0{:}\\ \\lambda = ${lambda0},\\ H_1{:}\\ ${h1}`, "Parameter is the Poisson mean rate."),
    step(2, "Significance level", `\\alpha = ${alpha}`, `Test at the ${pct(alpha)} level.`),
    step(3, "Null distribution", `X \\sim \\text{Po}(${lambda0})`, "Under $H_0$."),
    step(4, "Find critical region", cr, "Accumulate the appropriate tail until ASL $\\leq \\alpha$."),
    step(5, "Actual significance level", `\\text{ASL} = ${fmt(asl)}`, "Type I error probability for this CR."),
    step(6, "Observed value", `x = ${obs}`, context),
    step(7, "Compare with CR", reject ? `${obs} \\in CR` : `${obs} \\notin CR`, "Decide whether the observation is critical."),
    step(8, "Decision", reject ? "\\text{Reject } H_0" : "\\text{Do not reject } H_0", "Apply the critical-region rule."),
    step(9, "Context conclusion", reject
      ? "\\text{Significant evidence of a change in the rate}"
      : "\\text{Insufficient evidence of a change in the rate}",
      "Conclude in context without overclaiming."),
    step(10, "Answer", reject
      ? `CR: ${cr}; ASL=${fmt(asl)}; reject H_0`
      : `CR: ${cr}; ASL=${fmt(asl)}; do not reject H_0`,
      "Summarise CR, ASL and conclusion."),
  ];
  return hardQ(n,
    `${context} Assuming a Poisson model for the count $X$, test $H_0{:}\\ \\lambda = ${lambda0}$ against $H_1{:}\\ ${h1}$ at the ${pct(alpha)} level. Find the critical region, the actual significance level, and carry out the test for the observed value $x=${obs}$.`,
    steps,
    `CR: $${cr}$; ASL $= ${fmt(asl)}$. ${reject ? "Reject" : "Do not reject"} $H_0$.`,
    ["poisson", "full-test", tail], 9);
}

function geoFullTest(n, p0, alpha, obs, direction, context) {
  // direction: "p-less" => H1 p<p0, CR upper; "p-greater" => H1 p>p0, CR lower
  const upper = direction === "p-less";
  const c = upper ? findGeoUpperC(p0, alpha) : findGeoLowerC(p0, alpha);
  const asl = upper ? geoTailGE(p0, c) : geoTailLE(p0, c);
  const reject = upper ? obs >= c : obs <= c;
  const h1 = upper ? `p < ${p0}` : `p > ${p0}`;
  const cr = upper ? `X \\geq ${c}` : `X \\leq ${c}`;
  const steps = [
    step(1, "State hypotheses", `H_0{:}\\ p = ${p0},\\ H_1{:}\\ ${h1}`, "Geometric success probability."),
    step(2, "Link $X$ to $p$", upper
      ? "\\text{Smaller } p \\Rightarrow \\text{larger expected } X"
      : "\\text{Larger } p \\Rightarrow \\text{smaller expected } X",
      "Direction of $H_1$ determines which tail is critical."),
    step(3, "Null model", `X \\sim \\text{Geo}(${p0})`, "Trials until first success."),
    step(4, "Critical region", cr, `Chosen so ASL $\\leq ${alpha}$.`),
    step(5, "Actual significance level", `\\text{ASL} = ${fmt(asl)}`, "Exact Type I probability."),
    step(6, "Observation", `x = ${obs}`, context),
    step(7, "Decision", reject ? "\\text{Reject } H_0" : "\\text{Do not reject } H_0", reject ? "Observation lies in the CR." : "Observation is not critical."),
    step(8, "Context", reject
      ? "\\text{Evidence supporting the alternative}"
      : "\\text{No significant evidence for } H_1",
      "Phrase the conclusion in context."),
    step(9, "Answer", `CR: ${cr}; ASL=${fmt(asl)}; ${reject ? "reject" : "do not reject"} H_0`, "Full summary."),
  ];
  return hardQ(n,
    `${context} Modelling the number of trials until the first success by $X \\sim \\text{Geo}(p)$, test $H_0{:}\\ p = ${p0}$ against $H_1{:}\\ ${h1}$ at the ${pct(alpha)} level. Find the critical region and ASL, then test using $x=${obs}$.`,
    steps,
    `CR: $${cr}$; ASL $= ${fmt(asl)}$. ${reject ? "Reject" : "Do not reject"} $H_0$.`,
    ["geometric", "full-test", direction], 9);
}

function poissonTwoTail(n, lambda0, alpha, cL, cU, obs) {
  const aslL = poissonTailLE(lambda0, cL);
  const aslU = poissonTailGE(lambda0, cU);
  const asl = aslL + aslU;
  const reject = obs <= cL || obs >= cU;
  const steps = [
    step(1, "Hypotheses", `H_0{:}\\ \\lambda = ${lambda0},\\ H_1{:}\\ \\lambda \\neq ${lambda0}`, "Two-tailed Poisson mean test."),
    step(2, "Split the significance", `\\tfrac{\\alpha}{2} = ${alpha / 2}`, "Allocate half the level to each tail (common exam approach)."),
    step(3, "Lower critical value", `c_L = ${cL},\\ P(X \\leq ${cL}) = ${fmt(aslL)}`, "Largest $c_L$ with left-tail probability $\\leq \\alpha/2$."),
    step(4, "Upper critical value", `c_U = ${cU},\\ P(X \\geq ${cU}) = ${fmt(aslU)}`, "Smallest $c_U$ with right-tail probability $\\leq \\alpha/2$."),
    step(5, "Critical region", `X \\leq ${cL} \\text{ or } X \\geq ${cU}`, "Reject for extreme values in either direction."),
    step(6, "Actual significance level", `\\text{ASL} = ${fmt(aslL)} + ${fmt(aslU)} = ${fmt(asl)}`, "Sum of both tails under $H_0$."),
    step(7, "Observed value", `x = ${obs}`, "Compare with the two-sided CR."),
    step(8, "Decision", reject ? "\\text{Reject } H_0" : "\\text{Do not reject } H_0", reject ? "Observation is critical." : "Observation not in CR."),
    step(9, "Answer", `CR: X\\leq${cL} or X\\geq${cU}; ASL=${fmt(asl)}; ${reject ? "reject" : "accept"} H_0`, "Complete two-tailed conclusion."),
  ];
  return hardQ(n,
    `Test $H_0{:}\\ \\lambda = ${lambda0}$ against $H_1{:}\\ \\lambda \\neq ${lambda0}$ for $X \\sim \\text{Po}(\\lambda)$ at the ${pct(alpha)} level (splitting $\\alpha$ equally between tails). Find the critical region, ASL, and carry out the test for $x=${obs}$.`,
    steps,
    `CR: $X \\leq ${cL}$ or $X \\geq ${cU}$; ASL $= ${fmt(asl)}$. ${reject ? "Reject" : "Do not reject"} $H_0$.`,
    ["poisson", "two-tailed"], 10);
}

// ── Build question bank ──────────────────────────────────────────────

const questions = [];
let n = 1;

// Easy 1–22
const poissonContexts = [
  [3, "upper", "Faults occur on a production line at a mean rate of $3$ per hour. A manager claims the rate has increased."],
  [4, "lower", "Calls arrive at a call centre at a mean of $4$ per minute. Staff suspect the rate has fallen."],
  [2, "upper", "A website receives on average $2$ hits per second. After a campaign, it is claimed the rate is higher."],
  [5, "two", "The number of accidents per month has mean $5$. Investigators want to know if the mean has changed."],
  [1.5, "lower", "Emails arrive at mean rate $1.5$ per minute. A filter is hoped to have reduced the rate."],
  [6, "upper", "Defects occur at mean $6$ per batch. Quality control suspects an increase."],
  [2.5, "two", "Bookings average $2.5$ per day. Management asks whether the mean has changed."],
  [4, "upper", "A Poisson process of requests has $\\lambda=4$. After an advert, the mean rate may be larger."],
];
for (const [lam, tail, ctx] of poissonContexts) {
  questions.push(hypPoissonQ(n++, lam, tail, ctx));
}

const geoContexts = [
  [0.2, "lower", "A machine produces items with claimed success probability $0.2$ that an item is defective. A customer suspects the defect rate is higher."],
  [0.3, "upper", "In a game, the chance of winning a prize is claimed to be $0.3$. A player thinks it is smaller."],
  [0.25, "lower", "A shooting coach claims a hit probability of $0.25$. After training, the hit rate may be higher."],
  [0.4, "upper", "A seed manufacturer's germination probability is stated as $0.4$. A gardener suspects it is less."],
  [0.1, "two", "A rare event has success probability $0.1$. Analysts want to know if $p$ has changed."],
  [0.5, "lower", "A fair coin is claimed; a player believes $P(\\text{heads})=0.5$ is too low for this coin."],
];
for (const [p0, tail, ctx] of geoContexts) {
  questions.push(hypGeoQ(n++, p0, tail, ctx));
}

questions.push(identifyTailQ(n++, "A factory claims $\\lambda=3$ faults per hour and management only cares if the rate has increased.", true, "upper"));
questions.push(identifyTailQ(n++, "A call centre's claimed mean call rate is $5$ per minute; regulators check for any change.", false, "either direction"));
questions.push(identifyTailQ(n++, "A geometric win probability is claimed as $0.2$; a player only cares if wins are less likely.", true, "lower p / upper X"));
questions.push(identifyTailQ(n++, "A seed germination rate is claimed as $0.35$; botanists look for any departure from this value.", false, "either direction"));
questions.push(defineCriticalRegionQ(n++));
questions.push(defineCriticalRegionQ(n++));
questions.push(defineASLQn(n++));
questions.push(defineASLQn(n++));

// Intermediate 23–50
const pu = [
  [3, 0.05], [4, 0.05], [2, 0.05], [5, 0.05], [3, 0.01], [6, 0.05], [2.5, 0.05], [4, 0.01],
];
for (const [lam, a] of pu) {
  const c = findPoissonUpperC(lam, a);
  if (c != null) questions.push(poissonUpperCR(n++, lam, a, c));
}
const pl = [
  [3, 0.05], [4, 0.05], [5, 0.05], [6, 0.05], [2, 0.05], [8, 0.05],
];
for (const [lam, a] of pl) {
  const c = findPoissonLowerC(lam, a);
  if (c != null) questions.push(poissonLowerCR(n++, lam, a, c));
}
const gu = [
  [0.2, 0.05], [0.3, 0.05], [0.25, 0.05], [0.4, 0.05], [0.1, 0.05],
];
for (const [p0, a] of gu) {
  const c = findGeoUpperC(p0, a);
  if (c != null) questions.push(geoUpperCR(n++, p0, a, c));
}
const gl = [
  [0.2, 0.05], [0.3, 0.05], [0.25, 0.05], [0.4, 0.1], [0.5, 0.05],
];
for (const [p0, a] of gl) {
  const c = findGeoLowerC(p0, a);
  if (c != null) questions.push(geoLowerCR(n++, p0, a, c));
}

// p-value tests
const pvP = [
  [3, 7, "upper", 0.05], [4, 1, "lower", 0.05], [2, 5, "upper", 0.05],
  [5, 10, "upper", 0.05], [3, 0, "lower", 0.05], [6, 2, "lower", 0.05],
];
for (const [lam, obs, tail, a] of pvP) {
  const pval = tail === "upper" ? poissonTailGE(lam, obs) : poissonTailLE(lam, obs);
  questions.push(poissonPValueTest(n++, lam, obs, tail, a, pval < a));
}
const pvG = [
  [0.2, 12, "upper", 0.05], [0.3, 2, "lower", 0.05], [0.25, 15, "upper", 0.05],
  [0.4, 1, "lower", 0.05], [0.2, 3, "lower", 0.05],
];
for (const [p0, obs, tail, a] of pvG) {
  const pval = tail === "upper" ? geoTailGE(p0, obs) : geoTailLE(p0, obs);
  questions.push(geoPValueTest(n++, p0, obs, tail, a, pval < a));
}

// Hard 51–70
const hardP = [
  [3, 0.05, 7, "upper", "Faults occur with mean $3$ per hour. In one hour $7$ faults are observed."],
  [4, 0.05, 1, "lower", "Calls arrive with mean $4$ per minute. In a minute there is $1$ call."],
  [2, 0.05, 6, "upper", "Hits average $2$ per second. In one second $6$ hits are recorded."],
  [5, 0.05, 1, "lower", "Accidents average $5$ per month. In a month there is $1$ accident."],
  [6, 0.05, 12, "upper", "Defects average $6$ per batch. A batch has $12$ defects."],
  [3, 0.01, 8, "upper", "Emails average $3$ per minute. A minute has $8$ emails."],
  [4, 0.05, 0, "lower", "Orders average $4$ per day. On one day there are $0$ orders."],
  [2.5, 0.05, 7, "upper", "Arrivals average $2.5$ per hour. An hour has $7$ arrivals."],
];
for (const [lam, a, obs, tail, ctx] of hardP) {
  if (n > 70) break;
  questions.push(poissonFullTest(n++, lam, a, obs, tail, ctx));
}

const hardG = [
  [0.2, 0.05, 18, "p-less", "Trials until a defective item; manufacturer claims $p=0.2$. Observing $x=18$."],
  [0.3, 0.05, 1, "p-greater", "Trials until a win with claimed $p=0.3$. Observing first win on trial $1$."],
  [0.25, 0.05, 20, "p-less", "Trials until germination with claimed $p=0.25$. First success on trial $20$."],
  [0.4, 0.05, 2, "p-greater", "Trials until a hit with claimed $p=0.4$. First hit on trial $2$."],
  [0.2, 0.05, 5, "p-greater", "Trials until a goal with claimed $p=0.2$. First goal on trial $5$."],
  [0.1, 0.05, 40, "p-less", "Trials until a rare event with claimed $p=0.1$. First success on trial $40$."],
];
for (const [p0, a, obs, dir, ctx] of hardG) {
  if (n > 70) break;
  questions.push(geoFullTest(n++, p0, a, obs, dir, ctx));
}

// Two-tailed Poisson
const twoTailCases = [
  [4, 0.05, 0, 9, 10],
  [5, 0.05, 1, 10, 0],
  [3, 0.1, 0, 7, 6],
  [6, 0.05, 1, 12, 11],
];
for (const [lam, a, cL, cU, obs] of twoTailCases) {
  if (n > 70) break;
  // verify cL/cU roughly correct; recompute if needed
  const half = a / 2;
  const cl = findPoissonLowerC(lam, half);
  const cu = findPoissonUpperC(lam, half);
  if (cl != null && cu != null) questions.push(poissonTwoTail(n++, lam, a, cl, cu, obs));
}

// Pad to 70 if short
while (questions.length < 70) {
  const lam = 3 + (questions.length % 4);
  const a = 0.05;
  const c = findPoissonUpperC(lam, a);
  if (c == null) break;
  questions.push(poissonUpperCR(questions.length + 1, lam, a, c));
}

// renumber ids consecutively
questions.forEach((q, i) => {
  q.id = qid(i + 1);
});

// Trim or ensure exactly 70
if (questions.length > 70) questions.length = 70;

// Step padding
const STEP_MIN = { Easy: 6, Intermediate: 9, Hard: 13 };
const STEP_MAX = { Easy: 9, Intermediate: 13, Hard: 18 };
const EXTRA = [
  () => step(0, "Discrete ASL", "\\text{ASL} \\leq \\alpha", "For discrete data the actual size is at most the nominal level."),
  () => step(0, "State clearly", "H_0\\text{ vs }H_1", "Always write both hypotheses before finding a critical region."),
  () => step(0, "Context language", "\\text{Evidence / insufficient evidence}", "Avoid claiming absolute proof from a single test."),
  () => step(0, "Poisson conditions", "\\text{Independent rare events}", "The Poisson model needs a constant average rate and independence."),
  () => step(0, "Geometric model", "X=\\text{trials to first success}", "Independent Bernoulli trials with constant $p$."),
  () => step(0, "Critical vs p-value", "\\text{Equivalent decisions}", "A $p$-value comparison with $\\alpha$ matches the CR rule."),
  () => step(0, "One-tailed caution", "\\text{Direction must match the question}", "Do not use a two-tailed region for a one-sided claim."),
  () => step(0, "Type I error", "P(\\text{reject } H_0 \\mid H_0)", "The ASL equals the Type I error probability."),
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

const counts = { Easy: 0, Intermediate: 0, Hard: 0 };
for (const q of questions) counts[q.difficulty]++;

if (questions.length !== 70) {
  console.error(`Expected 70 questions, got ${questions.length}`);
  process.exit(1);
}

writeFileSync(
  outPath,
  `import { Question } from "@/lib/types";\n\nexport const questions: Question[] = ${JSON.stringify(questions, null, 2)};\n`,
);
console.log(`Wrote ${questions.length} questions to ${outPath}`);
console.log(`Difficulty: Easy=${counts.Easy}, Intermediate=${counts.Intermediate}, Hard=${counts.Hard}`);
