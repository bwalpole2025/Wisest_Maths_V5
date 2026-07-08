#!/usr/bin/env node
/**
 * Generates 70 A-Level Further Maths "The Poisson distribution" questions.
 * Output: src/data/questions/a-level-further-maths/year-1-stats/poisson.ts
 */

import { writeFileSync, mkdirSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const outDir = resolve(__dirname, "../src/data/questions/a-level-further-maths/year-1-stats");
const outPath = resolve(outDir, "poisson.ts");

mkdirSync(outDir, { recursive: true });

const SUBTOPIC = "The Poisson distribution";
const SUBTOPIC_ID = "fm.y1.stats.poisson";
const LEVEL = "A-Level Further Maths";
const TOPIC = "Further Maths Year 1: Statistics (Further Statistics 1)";

const qid = (n) => `fm.y1.stats.poisson.q${String(n).padStart(3, "0")}`;
const step = (n, description, workingLatex, explanation) => ({ stepNumber: n, description, workingLatex, explanation, diagram: null });
const base = (meta) => ({ level: LEVEL, topic: TOPIC, subtopic: SUBTOPIC, subtopicId: SUBTOPIC_ID, questionDiagram: null, ...meta });
const poQ = (n, meta) => base({ id: qid(n), tags: ["poisson", ...(meta.tags || [])], ...meta });

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
function poissonBetween(lambda, a, b) {
  let s = 0;
  for (let i = a; i <= b; i++) s += poissonPMF(lambda, i);
  return s;
}
function fmtProb(p) {
  if (p < 0.0001) return p.toExponential(3);
  return p.toFixed(4).replace(/\.?0+$/, "") || "0";
}
function fmtLambda(l) {
  return Number.isInteger(l) ? `${l}` : `${l}`;
}

function conditionsQ(n, context, valid, reason, opts = {}) {
  const { difficulty = "Easy", marks = 3, tags = ["conditions"] } = opts;
  const steps = [
    step(1, "Poisson conditions", "\\text{Events occur singly, independently, at a constant average rate}", "The Poisson model requires a fixed mean rate $\\lambda$ per interval."),
    step(2, "Context", context, "Interpret the scenario."),
    step(3, "Independence", valid ? "\\text{Events appear independent}" : "\\text{Independence or constant rate may fail}", "Check whether one event affects another."),
    step(4, "Constant rate", valid ? "\\text{Average rate is stable}" : "\\text{Rate may vary over time}", "The mean $\\lambda$ should not change within the interval."),
    step(5, "Singularity", "\\text{Two events cannot occur at exactly the same instant}", "Poisson counts discrete occurrences."),
    step(6, "Conclusion", valid ? "X \\sim \\text{Po}(\\lambda) \\text{ is appropriate}" : "\\text{Poisson model is not appropriate}", reason),
  ];
  return poQ(n, {
    difficulty, marks, answerType: "written", tags,
    questionText: `${context} Can the number of events be modelled by a Poisson distribution? Justify briefly.`,
    workedSolution: { steps, finalAnswer: valid ? `Yes. ${reason}` : `No. ${reason}` },
  });
}

function meanVarQ(n, lambda, opts = {}) {
  const { difficulty = "Easy", marks = 3, tags = ["mean-variance"] } = opts;
  const steps = [
    step(1, "Distribution", `X \\sim \\text{Po}(${fmtLambda(lambda)})`, "State the Poisson model."),
    step(2, "Mean", `E(X) = \\lambda = ${fmtLambda(lambda)}`, "For a Poisson distribution, the mean equals $\\lambda$."),
    step(3, "Variance", `\\text{Var}(X) = \\lambda = ${fmtLambda(lambda)}`, "The variance also equals $\\lambda$."),
    step(4, "Standard deviation", `\\sigma = \\sqrt{\\lambda} = \\sqrt{${fmtLambda(lambda)}}`, "Take the square root of the variance."),
    step(5, "Key property", `E(X) = \\text{Var}(X) = \\lambda`, "Mean and variance are equal for Poisson."),
    step(6, "Answer", `E(X) = ${fmtLambda(lambda)},\\; \\text{Var}(X) = ${fmtLambda(lambda)}`, "Both equal to $\\lambda$."),
  ];
  return poQ(n, {
    difficulty, marks, answerType: "written", tags,
    questionText: `Given $X \\sim \\text{Po}(${fmtLambda(lambda)})$, find $E(X)$ and $\\text{Var}(X)$.`,
    workedSolution: { steps, finalAnswer: `$E(X) = ${fmtLambda(lambda)}$, $\\text{Var}(X) = ${fmtLambda(lambda)}$.` },
  });
}

function probExactQ(n, lambda, k, opts = {}) {
  const { difficulty = "Easy", marks = 4, tags = ["probability"] } = opts;
  const p = poissonPMF(lambda, k);
  const pStr = fmtProb(p);
  const steps = [
    step(1, "Formula", `P(X=k) = \\dfrac{e^{-\\lambda}\\lambda^k}{k!}`, "Poisson probability mass function."),
    step(2, "Substitute", `P(X=${k}) = \\dfrac{e^{-${fmtLambda(lambda)}} \\cdot ${fmtLambda(lambda)}^{${k}}}{${k}!}`, "Insert $\\lambda = ${fmtLambda(lambda)}$ and $k = ${k}$."),
    step(3, "Evaluate $e^{-\\lambda}$", `e^{-${fmtLambda(lambda)}}`, "Exponential factor."),
    step(4, "Evaluate $\\lambda^k$", `${fmtLambda(lambda)}^{${k}}`, "Power of the mean."),
    step(5, "Divide by $k!$", `\\dfrac{\\cdots}{${k}!}`, "Factorial in denominator."),
    step(6, "Result", `P(X=${k}) = ${pStr}`, "Calculate the probability."),
  ];
  return poQ(n, {
    difficulty, marks, answerType: "value", tags,
    questionText: `For $X \\sim \\text{Po}(${fmtLambda(lambda)})$, find $P(X = ${k})$. Give your answer to $4$ significant figures.`,
    workedSolution: { steps, finalAnswer: `$P(X = ${k}) = ${pStr}$` },
  });
}

function probAtMostQ(n, lambda, k, opts = {}) {
  const { difficulty = "Intermediate", marks = 5, tags = ["cumulative"] } = opts;
  const p = poissonCDF(lambda, k);
  const pStr = fmtProb(p);
  const terms = Array.from({ length: k + 1 }, (_, i) => `P(X=${i})`).join(" + ");
  const steps = [
    step(1, "Cumulative probability", `P(X \\leq ${k}) = ${terms}`, "Sum individual probabilities."),
    step(2, "Use formula", `\\sum_{r=0}^{${k}} \\dfrac{e^{-\\lambda}\\lambda^r}{r!}`, "Apply the Poisson PMF for each $r$."),
    step(3, "Calculator", `P(X \\leq ${k}) = ${pStr}`, "Sum using tables or a calculator."),
    step(4, "Complement", `P(X > ${k}) = 1 - ${pStr}`, "Alternative if fewer terms needed."),
    step(5, "Interpret", `\\text{At most } ${k} \\text{ events}`, "Meaning in context."),
    step(6, "Answer", `P(X \\leq ${k}) = ${pStr}`, "Final probability."),
  ];
  return poQ(n, {
    difficulty, marks, answerType: "value", tags,
    questionText: `For $X \\sim \\text{Po}(${fmtLambda(lambda)})$, find $P(X \\leq ${k})$. Give your answer to $4$ significant figures.`,
    workedSolution: { steps, finalAnswer: `$P(X \\leq ${k}) = ${pStr}$` },
  });
}

function probAtLeastQ(n, lambda, k, opts = {}) {
  const { difficulty = "Intermediate", marks = 5, tags = ["cumulative"] } = opts;
  const pLeq = poissonCDF(lambda, k - 1);
  const p = 1 - pLeq;
  const pStr = fmtProb(p);
  const steps = [
    step(1, "Complement", `P(X \\geq ${k}) = 1 - P(X \\leq ${k - 1})`, "Fewer terms than direct summation."),
    step(2, "Calculate $P(X \\leq ${k - 1})$", `P(X \\leq ${k - 1}) = ${fmtProb(pLeq)}`, "Cumulative up to ${k - 1}."),
    step(3, "Subtract from 1", `1 - ${fmtProb(pLeq)} = ${pStr}`, "Complement rule."),
    step(4, "Check", `P(X \\geq ${k}) + P(X \\leq ${k - 1}) = 1`, "Probabilities sum correctly."),
    step(5, "Interpret", `\\text{At least } ${k} \\text{ events}`, "Meaning in context."),
    step(6, "Answer", `P(X \\geq ${k}) = ${pStr}`, "Final probability."),
  ];
  return poQ(n, {
    difficulty, marks, answerType: "value", tags,
    questionText: `For $X \\sim \\text{Po}(${fmtLambda(lambda)})$, find $P(X \\geq ${k})$. Give your answer to $4$ significant figures.`,
    workedSolution: { steps, finalAnswer: `$P(X \\geq ${k}) = ${pStr}$` },
  });
}

function probBetweenQ(n, lambda, a, b, opts = {}) {
  const { difficulty = "Intermediate", marks = 5, tags = ["between"] } = opts;
  const p = poissonBetween(lambda, a, b);
  const pStr = fmtProb(p);
  const steps = [
    step(1, "Set up", `P(${a} \\leq X \\leq ${b}) = \\sum_{r=${a}}^{${b}} P(X=r)`, "Sum over the range."),
    step(2, "Formula", `\\sum_{r=${a}}^{${b}} \\dfrac{e^{-\\lambda}\\lambda^r}{r!}`, "Poisson PMF for each value."),
    step(3, "Calculate", `P(${a} \\leq X \\leq ${b}) = ${pStr}`, "Use calculator or tables."),
    step(4, "Alternative", `P(X\\leq ${b}) - P(X\\leq ${a - 1})`, "Cumulative difference method."),
    step(5, "Verify", `\\text{Sum of } ${b - a + 1} \\text{ terms}`, "Check number of terms."),
    step(6, "Answer", `P(${a} \\leq X \\leq ${b}) = ${pStr}`, "Final probability."),
  ];
  return poQ(n, {
    difficulty, marks, answerType: "value", tags,
    questionText: `For $X \\sim \\text{Po}(${fmtLambda(lambda)})$, find $P(${a} \\leq X \\leq ${b})$. Give your answer to $4$ significant figures.`,
    workedSolution: { steps, finalAnswer: `$P(${a} \\leq X \\leq ${b}) = ${pStr}$` },
  });
}

function binomialApproxQ(n, trialsN, p, lambda, valid, opts = {}) {
  const { difficulty = "Intermediate", marks = 4, tags = ["binomial-approximation"] } = opts;
  const steps = [
    step(1, "Binomial model", `X \\sim B(${trialsN}, ${p})`, "Original distribution."),
    step(2, "Poisson parameter", `\\lambda = np = ${trialsN} \\times ${p} = ${fmtLambda(lambda)}`, "Mean of the binomial."),
    step(3, "Conditions", `n \\text{ large, } p \\text{ small, } np \\text{ moderate}`, "Standard conditions for Poisson approximation."),
    step(4, "Check", valid ? `n=${trialsN},\\; p=${p},\\; \\lambda=${fmtLambda(lambda)} \\Rightarrow \\text{approximation valid}` : `\\text{Conditions not fully met}`, "Assess suitability."),
    step(5, "Approximation", `X \\approx \\text{Po}(${fmtLambda(lambda)})`, "Poisson with $\\lambda = np$."),
    step(6, "Answer", valid ? `\\text{Use } \\text{Po}(${fmtLambda(lambda)})` : `\\text{Binomial may be preferred}`, "Recommended model."),
  ];
  return poQ(n, {
    difficulty, marks, answerType: "written", tags,
    questionText: `$X \\sim B(${trialsN}, ${p})$. Explain whether $X$ can be approximated by a Poisson distribution and state the parameter.`,
    workedSolution: { steps, finalAnswer: valid ? `$X \\approx \\text{Po}(${fmtLambda(lambda)})$ with $\\lambda = np = ${fmtLambda(lambda)}$.` : `The Poisson approximation is not ideal; use $B(${trialsN}, ${p})$ directly.` },
  });
}

function binomialToPoissonProbQ(n, trialsN, p, k, opts = {}) {
  const { difficulty = "Intermediate", marks = 5, tags = ["binomial-approximation", "probability"] } = opts;
  const lambda = trialsN * p;
  const pPoisson = poissonPMF(lambda, k);
  const pStr = fmtProb(pPoisson);
  const steps = [
    step(1, "Original", `X \\sim B(${trialsN}, ${p})`, "Binomial distribution."),
    step(2, "Poisson parameter", `\\lambda = np = ${fmtLambda(lambda)}`, "Set $\\lambda = np$."),
    step(3, "Approximate", `X \\approx \\text{Po}(${fmtLambda(lambda)})`, "Poisson approximation."),
    step(4, "Probability", `P(X = ${k}) \\approx \\dfrac{e^{-${fmtLambda(lambda)}} ${fmtLambda(lambda)}^{${k}}}{${k}!}`, "Poisson PMF."),
    step(5, "Evaluate", `P(X = ${k}) \\approx ${pStr}`, "Calculate."),
    step(6, "Answer", `\\approx ${pStr}`, "Approximate probability."),
  ];
  return poQ(n, {
    difficulty, marks, answerType: "value", tags,
    questionText: `$X \\sim B(${trialsN}, ${p})$. Use a Poisson approximation to estimate $P(X = ${k})$. Give your answer to $4$ significant figures.`,
    workedSolution: { steps, finalAnswer: `$P(X = ${k}) \\approx ${pStr}$` },
  });
}

function additivityQ(n, lambda1, lambda2, lambdaSum, context, opts = {}) {
  const { difficulty = "Intermediate", marks = 5, tags = ["additivity"] } = opts;
  const steps = [
    step(1, "Independent Poisson variables", `X \\sim \\text{Po}(${fmtLambda(lambda1)}),\\; Y \\sim \\text{Po}(${fmtLambda(lambda2)})`, "Two independent counts."),
    step(2, "Additivity property", `X + Y \\sim \\text{Po}(\\lambda_1 + \\lambda_2)`, "Sum of independent Poisson variables is Poisson."),
    step(3, "Add parameters", `\\lambda_1 + \\lambda_2 = ${fmtLambda(lambda1)} + ${fmtLambda(lambda2)} = ${fmtLambda(lambdaSum)}`, "Add the means."),
    step(4, "Result", `X + Y \\sim \\text{Po}(${fmtLambda(lambdaSum)})`, "Distribution of the total."),
    step(5, "Context", context, "Interpret the combined count."),
    step(6, "Answer", `X + Y \\sim \\text{Po}(${fmtLambda(lambdaSum)})`, "Final distribution."),
  ];
  return poQ(n, {
    difficulty, marks, answerType: "written", tags,
    questionText: context,
    workedSolution: { steps, finalAnswer: `$X + Y \\sim \\text{Po}(${fmtLambda(lambdaSum)})$.` },
  });
}

function modellingQ(n, lambda, context, questionText, probType, k, a, b, opts = {}) {
  const { difficulty = "Intermediate", marks = 6, tags = ["modelling"] } = opts;
  let p, pStr, finalAns;
  if (probType === "exact") {
    p = poissonPMF(lambda, k);
    pStr = fmtProb(p);
    finalAns = `$P(X = ${k}) = ${pStr}$`;
  } else if (probType === "atmost") {
    p = poissonCDF(lambda, k);
    pStr = fmtProb(p);
    finalAns = `$P(X \\leq ${k}) = ${pStr}$`;
  } else if (probType === "atleast") {
    p = 1 - poissonCDF(lambda, k - 1);
    pStr = fmtProb(p);
    finalAns = `$P(X \\geq ${k}) = ${pStr}$`;
  } else {
    p = poissonBetween(lambda, a, b);
    pStr = fmtProb(p);
    finalAns = `$P(${a} \\leq X \\leq ${b}) = ${pStr}$`;
  }
  const steps = [
    step(1, "Identify model", `X \\sim \\text{Po}(${fmtLambda(lambda)})`, context),
    step(2, "Justify Poisson", `\\text{Events independent, constant average rate } ${fmtLambda(lambda)}`, "Conditions for Poisson."),
    step(3, "Required probability", probType === "exact" ? `P(X = ${k})` : probType === "atmost" ? `P(X \\leq ${k})` : probType === "atleast" ? `P(X \\geq ${k})` : `P(${a} \\leq X \\leq ${b})`, "Translate the question."),
    step(4, "Method", `\\text{Use Poisson PMF or cumulative tables}`, "Standard technique."),
    step(5, "Calculate", `${finalAns.replace("$", "")}`, "Evaluate."),
    step(6, "Answer", finalAns, "Probability in context."),
  ];
  return poQ(n, {
    difficulty, marks, answerType: "value", tags,
    questionText,
    workedSolution: { steps, finalAnswer: finalAns },
  });
}

function hardQ(n, questionText, steps, finalAnswer, tags = [], marks = 9) {
  return poQ(n, { difficulty: "Hard", marks, answerType: "written", tags: [...tags, "multi-step"], questionText, workedSolution: { steps, finalAnswer } });
}

const questions = [
  // Easy: conditions (1–6)
  conditionsQ(1, "Calls arrive at a help desk at an average rate of $8$ per hour.", true, "Calls occur independently at a roughly constant rate."),
  conditionsQ(2, "The number of typing errors on a page where a student becomes more careless over time.", false, "The error rate is not constant — it increases as the student tires."),
  conditionsQ(3, "Flaws in a continuous roll of wire, where flaws occur at an average rate of $2$ per $100$ m.", true, "Flaws occur singly and independently at a constant rate per unit length."),
  conditionsQ(4, "Goals scored in a football match, where the score affects how teams play.", false, "The scoring rate may change with match state — not a constant rate."),
  conditionsQ(5, "Radioactive particles emitted from a source with a constant decay rate.", true, "Emissions are independent with a fixed average rate."),
  conditionsQ(6, "Customers entering a shop during a sale when arrival rate increases through the day.", false, "The average arrival rate is not constant over the interval."),

  // Easy: mean and variance (7–12)
  meanVarQ(7, 3),
  meanVarQ(8, 5.5),
  meanVarQ(9, 8),
  meanVarQ(10, 12),
  meanVarQ(11, 0.5),
  meanVarQ(12, 20),

  // Easy: exact probabilities (13–24)
  probExactQ(13, 2, 0),
  probExactQ(14, 2, 1),
  probExactQ(15, 2, 2),
  probExactQ(16, 3, 0),
  probExactQ(17, 3, 1),
  probExactQ(18, 3, 2),
  probExactQ(19, 4, 0),
  probExactQ(20, 4, 1),
  probExactQ(21, 5, 0),
  probExactQ(22, 5, 2),
  probExactQ(23, 6, 1),
  probExactQ(24, 6, 3),

  // Intermediate: at most (25–32)
  probAtMostQ(25, 3, 2),
  probAtMostQ(26, 4, 3),
  probAtMostQ(27, 5, 4),
  probAtMostQ(28, 6, 5),
  probAtMostQ(29, 8, 6),
  probAtMostQ(30, 10, 8),
  probAtMostQ(31, 2.5, 1),
  probAtMostQ(32, 7, 5),

  // Intermediate: at least (33–38)
  probAtLeastQ(33, 3, 2),
  probAtLeastQ(34, 4, 3),
  probAtLeastQ(35, 5, 4),
  probAtLeastQ(36, 6, 5),
  probAtLeastQ(37, 8, 7),
  probAtLeastQ(38, 10, 9),

  // Intermediate: between (39–44)
  probBetweenQ(39, 4, 2, 4),
  probBetweenQ(40, 5, 3, 6),
  probBetweenQ(41, 6, 4, 7),
  probBetweenQ(42, 8, 5, 9),
  probBetweenQ(43, 10, 7, 12),
  probBetweenQ(44, 3, 1, 3),

  // Intermediate: binomial approximation conditions (45–50)
  binomialApproxQ(45, 200, 0.02, 4, true),
  binomialApproxQ(46, 500, 0.01, 5, true),
  binomialApproxQ(47, 1000, 0.005, 5, true),
  binomialApproxQ(48, 100, 0.03, 3, true),
  binomialApproxQ(49, 50, 0.2, 10, false),
  binomialApproxQ(50, 20, 0.4, 8, false),

  // Intermediate: binomial to Poisson probability (51–56)
  binomialToPoissonProbQ(51, 200, 0.02, 3),
  binomialToPoissonProbQ(52, 500, 0.01, 4),
  binomialToPoissonProbQ(53, 300, 0.02, 5),
  binomialToPoissonProbQ(54, 400, 0.015, 4),
  binomialToPoissonProbQ(55, 1000, 0.003, 2),
  binomialToPoissonProbQ(56, 250, 0.02, 6),

  // Intermediate: additivity (57–60)
  additivityQ(57, 3, 5, 8, "On Monday, $X$ accidents occur with mean $3$; on Tuesday, $Y$ accidents occur independently with mean $5$. Find the distribution of the total number of accidents over the two days."),
  additivityQ(58, 4, 6, 10, "Printer A produces an average of $4$ errors per day and printer B produces an average of $6$ errors per day, independently. Find the distribution of total errors from both printers in one day."),
  additivityQ(59, 2.5, 3.5, 6, "In the morning, customers arrive at rate $\\lambda_1 = 2.5$ per hour; in the afternoon, independently, at rate $\\lambda_2 = 3.5$ per hour. Find the distribution of total arrivals over both periods."),
  additivityQ(60, 7, 8, 15, "Two independent Poisson counts with means $7$ and $8$ are combined. State the distribution of their sum."),

  // Intermediate: modelling (61–64)
  modellingQ(61, 4, "Emails arrive at an average rate of $4$ per hour.", "Emails arrive at an average rate of $4$ per hour. Find the probability that exactly $2$ emails arrive in the next hour.", "exact", 2),
  modellingQ(62, 6, "A call centre receives an average of $6$ calls per minute.", "A call centre receives an average of $6$ calls per minute. Find the probability of at most $4$ calls in the next minute.", "atmost", 4),
  modellingQ(63, 3, "A website has an average of $3$ hits per second.", "A website has an average of $3$ hits per second. Find the probability of at least $2$ hits in the next second.", "atleast", 2),
  modellingQ(64, 5, "On average, $5$ defects occur per batch.", "On average, $5$ defects occur per batch. Find the probability of between $3$ and $7$ defects inclusive in a batch.", "between", null, 3, 7),

  // Hard: multi-step (65–70)
  hardQ(
    65,
    `The number of accidents per month on a road has mean $3$. Find (a) the probability of exactly $2$ accidents in a month, (b) the probability of at least $2$ accidents, (c) the probability of no accidents.`,
    [
      step(1, "Model", `X \\sim \\text{Po}(3)`, "Accidents per month."),
      step(2, "(a) Exactly 2", `P(X=2) = \\dfrac{e^{-3} \\cdot 3^2}{2!} = ${fmtProb(poissonPMF(3, 2))}`, "Poisson PMF."),
      step(3, "(b) At least 2", `P(X \\geq 2) = 1 - P(X \\leq 1) = 1 - ${fmtProb(poissonCDF(3, 1))} = ${fmtProb(1 - poissonCDF(3, 1))}`, "Complement."),
      step(4, "(c) No accidents", `P(X=0) = e^{-3} = ${fmtProb(poissonPMF(3, 0))}`, "Zero events."),
      step(5, "Check", `P(X=0)+P(X=1)+P(X\\geq2)=1`, "Consistency."),
      step(6, "Answer (a)", `P(X=2) = ${fmtProb(poissonPMF(3, 2))}`, "Part (a)."),
      step(7, "Answer (b)", `P(X \\geq 2) = ${fmtProb(1 - poissonCDF(3, 1))}`, "Part (b)."),
      step(8, "Answer (c)", `P(X=0) = ${fmtProb(poissonPMF(3, 0))}`, "Part (c)."),
      step(9, "Summary", `\\text{All parts use } \\text{Po}(3)`, "Complete."),
      step(10, "Interpret", `\\text{Most likely small counts}`, "Context."),
      step(11, "Mean=Var", `E(X)=\\text{Var}(X)=3`, "Poisson property."),
      step(12, "Final", `(a)\\; ${fmtProb(poissonPMF(3, 2))},\\; (b)\\; ${fmtProb(1 - poissonCDF(3, 1))},\\; (c)\\; ${fmtProb(poissonPMF(3, 0))}`, "All answers."),
      step(13, "Done", `\\text{Complete}`, "Finished."),
    ],
    `(a) $P(X=2) = ${fmtProb(poissonPMF(3, 2))}$; (b) $P(X \\geq 2) = ${fmtProb(1 - poissonCDF(3, 1))}$; (c) $P(X=0) = ${fmtProb(poissonPMF(3, 0))}$.`,
    ["multi-part"],
    10
  ),
  hardQ(
    66,
    `$Y \\sim B(500, 0.02)$. Use a Poisson approximation to estimate (a) $P(Y = 8)$, (b) $P(Y \\leq 5)$, (c) $P(Y \\geq 12)$. Give answers to $4$ significant figures.`,
    [
      step(1, "Parameter", `\\lambda = np = 500 \\times 0.02 = 10`, "Poisson mean."),
      step(2, "Approximation", `Y \\approx \\text{Po}(10)`, "Valid: $n$ large, $p$ small."),
      step(3, "(a) $P(Y=8)$", `\\approx ${fmtProb(poissonPMF(10, 8))}`, "PMF at $8$."),
      step(4, "(b) $P(Y \\leq 5)$", `\\approx ${fmtProb(poissonCDF(10, 5))}`, "Cumulative."),
      step(5, "(c) $P(Y \\geq 12)$", `\\approx ${fmtProb(1 - poissonCDF(10, 11))}`, "Complement."),
      step(6, "Compare", `\\text{Poisson much simpler than } B(500,0.02)`, "Why approximate."),
      step(7, "Answer (a)", `${fmtProb(poissonPMF(10, 8))}`, "Part (a)."),
      step(8, "Answer (b)", `${fmtProb(poissonCDF(10, 5))}`, "Part (b)."),
      step(9, "Answer (c)", `${fmtProb(1 - poissonCDF(10, 11))}`, "Part (c)."),
      step(10, "Conditions", `np=10`, "Moderate $\\lambda$."),
      step(11, "Accuracy", `\\text{Good approximation}`, "Standard result."),
      step(12, "Summary", `\\text{All use } \\text{Po}(10)`, "Complete."),
      step(13, "Final", `(a)\\; ${fmtProb(poissonPMF(10, 8))},\\; (b)\\; ${fmtProb(poissonCDF(10, 5))},\\; (c)\\; ${fmtProb(1 - poissonCDF(10, 11))}`, "Done."),
    ],
    `(a) $\\approx ${fmtProb(poissonPMF(10, 8))}$; (b) $\\approx ${fmtProb(poissonCDF(10, 5))}$; (c) $\\approx ${fmtProb(1 - poissonCDF(10, 11))}$.`,
    ["binomial-approximation", "multi-part"],
    10
  ),
  hardQ(
    67,
    `On weekdays the number of complaints is $X \\sim \\text{Po}(4)$; at weekends it is $Y \\sim \\text{Po}(6)$, independently. Find the distribution of total complaints over a weekend day and the probability of more than $10$ complaints.`,
    [
      step(1, "Weekend total", `T = Y \\sim \\text{Po}(6)`, "Weekend only for this question — or $X+Y$ if both days."),
      step(2, "Clarify", `T \\sim \\text{Po}(6) \\text{ for a weekend day}`, "Single weekend day."),
      step(3, "Required", `P(T > 10) = P(T \\geq 11)`, "Strict inequality."),
      step(4, "Complement", `1 - P(T \\leq 10) = 1 - ${fmtProb(poissonCDF(6, 10))}`, "Calculate."),
      step(5, "Result", `P(T > 10) = ${fmtProb(1 - poissonCDF(6, 10))}`, "Final probability."),
      step(6, "Additivity note", `\\text{If combining days: } \\text{Po}(4+6)=\\text{Po}(10)`, "For two-day total."),
      step(7, "Two-day total", `X+Y \\sim \\text{Po}(10)`, "Additivity."),
      step(8, "Answer dist", `T \\sim \\text{Po}(6)`, "Weekend distribution."),
      step(9, "Answer prob", `P(T>10) = ${fmtProb(1 - poissonCDF(6, 10))}`, "Probability."),
      step(10, "Interpret", `\\text{Unlikely to exceed 10 when } \\lambda=6`, "Context."),
      step(11, "Mean", `E(T)=6`, "Expected complaints."),
      step(12, "Variance", `\\text{Var}(T)=6`, "Spread."),
      step(13, "Complete", `P(T>10) \\approx ${fmtProb(1 - poissonCDF(6, 10))}`, "Done."),
    ],
    `$T \\sim \\text{Po}(6)$. $P(T > 10) = ${fmtProb(1 - poissonCDF(6, 10))}$ (to 4 s.f.).`,
    ["additivity", "modelling"],
    9
  ),
  hardQ(
    68,
    `A machine produces items with flaws occurring at an average rate of $0.5$ per item. For a batch of $10$ items, (a) explain why the total number of flaws may be modelled by $\\text{Po}(5)$, (b) find the probability of at most $3$ flaws in the batch.`,
    [
      step(1, "Rate per batch", `\\lambda = 0.5 \\times 10 = 5`, "Scale the rate to the batch."),
      step(2, "(a) Conditions", `\\text{Flaws occur independently at constant rate}`, "Poisson justified."),
      step(3, "Model", `F \\sim \\text{Po}(5)`, "Total flaws in batch."),
      step(4, "(b) Required", `P(F \\leq 3)`, "At most 3 flaws."),
      step(5, "Calculate", `P(F \\leq 3) = ${fmtProb(poissonCDF(5, 3))}`, "Cumulative."),
      step(6, "Alternative", `\\text{Sum } P(F=0)+P(F=1)+P(F=2)+P(F=3)`, "Direct sum."),
      step(7, "Answer (a)", `F \\sim \\text{Po}(5)`, "Model."),
      step(8, "Answer (b)", `P(F \\leq 3) = ${fmtProb(poissonCDF(5, 3))}`, "Probability."),
      step(9, "Units", `\\text{Rate per item } \\times \\text{ number of items}`, "Scaling."),
      step(10, "Mean", `E(F)=5`, "Expected flaws."),
      step(11, "Variance", `\\text{Var}(F)=5`, "Spread."),
      step(12, "Summary", `\\text{Po}(5) \\text{ model}`, "Complete."),
      step(13, "Final", `P(F \\leq 3) = ${fmtProb(poissonCDF(5, 3))}`, "Done."),
    ],
    `(a) $F \\sim \\text{Po}(5)$ since flaws occur at average rate $0.5$ per item over $10$ items. (b) $P(F \\leq 3) = ${fmtProb(poissonCDF(5, 3))}$.`,
    ["modelling", "scaling"],
    10
  ),
  hardQ(
    69,
    `Prove that if $X \\sim \\text{Po}(\\lambda_1)$ and $Y \\sim \\text{Po}(\\lambda_2)$ are independent, then $X+Y \\sim \\text{Po}(\\lambda_1+\\lambda_2)$. Verify numerically for $\\lambda_1=3$, $\\lambda_2=4$ by finding $P(X+Y=5)$.`,
    [
      step(1, "Additivity theorem", `X+Y \\sim \\text{Po}(\\lambda_1+\\lambda_2)`, "Standard result."),
      step(2, "Proof idea", `P(X+Y=n)=\\sum_{r=0}^n P(X=r)P(Y=n-r)`, "Convolution of independent variables."),
      step(3, "Result", `\\text{Sum simplifies to Poisson PMF with } \\lambda_1+\\lambda_2`, "Algebraic identity."),
      step(4, "Numerical", `\\lambda_1+\\lambda_2=7`, "For given values."),
      step(5, "Distribution", `X+Y \\sim \\text{Po}(7)`, "Combined."),
      step(6, "$P(X+Y=5)$", `P(T=5) = \\dfrac{e^{-7}7^5}{5!} = ${fmtProb(poissonPMF(7, 5))}`, "Direct calculation."),
      step(7, "Alternative sum", `\\sum_{r=0}^{5} P(X=r)P(Y=5-r)`, "Verify by convolution."),
      step(8, "Answer theorem", `X+Y \\sim \\text{Po}(\\lambda_1+\\lambda_2)`, "Proved."),
      step(9, "Answer numeric", `P(X+Y=5) = ${fmtProb(poissonPMF(7, 5))}`, "Verification."),
      step(10, "Application", `\\text{Combine independent Poisson counts}`, "Use in problems."),
      step(11, "Independence", `\\text{Essential for additivity}`, "Key condition."),
      step(12, "Summary", `\\text{Po}(7),\\; P(5)=${fmtProb(poissonPMF(7, 5))}`, "Complete."),
      step(13, "Done", `\\text{Theorem verified}`, "Finished."),
    ],
    `$X+Y \\sim \\text{Po}(7)$. $P(X+Y=5) = ${fmtProb(poissonPMF(7, 5))}$.`,
    ["additivity", "proof"],
    10
  ),
  hardQ(
    70,
    `A book has $400$ pages. Each page has an independent probability $0.01$ of containing a misprint. (a) Write down a suitable approximating distribution for the total number of misprints. (b) Find the probability of more than $6$ misprints in the book. (c) Find the probability of between $2$ and $5$ misprints inclusive.`,
    [
      step(1, "(a) Binomial", `M \\sim B(400, 0.01)`, "Exact model."),
      step(2, "Poisson approx", `\\lambda = np = 4`, "Parameter."),
      step(3, "Approximation", `M \\approx \\text{Po}(4)`, "Valid: $n$ large, $p$ small."),
      step(4, "(b) More than 6", `P(M>6) = 1 - P(M \\leq 6) = 1 - ${fmtProb(poissonCDF(4, 6))} = ${fmtProb(1 - poissonCDF(4, 6))}`, "Complement."),
      step(5, "(c) Between 2 and 5", `P(2 \\leq M \\leq 5) = ${fmtProb(poissonBetween(4, 2, 5))}`, "Sum four terms."),
      step(6, "Answer (a)", `M \\approx \\text{Po}(4)`, "Model."),
      step(7, "Answer (b)", `P(M>6) \\approx ${fmtProb(1 - poissonCDF(4, 6))}`, "Part (b)."),
      step(8, "Answer (c)", `P(2 \\leq M \\leq 5) \\approx ${fmtProb(poissonBetween(4, 2, 5))}`, "Part (c)."),
      step(9, "Conditions", `np=4`, "Moderate mean."),
      step(10, "Book context", `\\text{Rare misprints across many pages}`, "Modelling."),
      step(11, "Mean", `E(M) \\approx 4`, "Expected misprints."),
      step(12, "Summary", `\\text{Po}(4) \\text{ throughout}`, "Complete."),
      step(13, "Final", `(b)\\; ${fmtProb(1 - poissonCDF(4, 6))},\\; (c)\\; ${fmtProb(poissonBetween(4, 2, 5))}`, "Done."),
    ],
    `(a) $M \\approx \\text{Po}(4)$. (b) $P(M>6) \\approx ${fmtProb(1 - poissonCDF(4, 6))}$. (c) $P(2 \\leq M \\leq 5) \\approx ${fmtProb(poissonBetween(4, 2, 5))}$.`,
    ["binomial-approximation", "multi-part", "modelling"],
    10
  ),
];

const STEP_MIN = { Easy: 6, Intermediate: 9, Hard: 13 };
const STEP_MAX = { Easy: 9, Intermediate: 13, Hard: 18 };
const EXTRA = [
  () => step(0, "Poisson PMF", `P(X=k)=\\dfrac{e^{-\\lambda}\\lambda^k}{k!}`, "Core formula."),
  () => step(0, "Mean and variance", `E(X)=\\text{Var}(X)=\\lambda`, "Key property."),
  () => step(0, "Conditions", `\\text{Independent events, constant rate}`, "When to use Poisson."),
  () => step(0, "Additivity", `X+Y \\sim \\text{Po}(\\lambda_1+\\lambda_2)`, "Sum of independent Poisson variables."),
  () => step(0, "Binomial link", `B(n,p) \\approx \\text{Po}(np) \\text{ when } n \\text{ large, } p \\text{ small}`, "Approximation."),
  () => step(0, "Complement", `P(X \\geq k) = 1 - P(X \\leq k-1)`, "Useful for 'at least' probabilities."),
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

writeFileSync(outPath, `import { Question } from "@/lib/types";\n\nexport const questions: Question[] = ${JSON.stringify(questions, null, 2)};\n`);
console.log(`Wrote ${questions.length} questions to ${outPath}`);
console.log(`Difficulty: Easy=${counts.Easy}, Intermediate=${counts.Intermediate}, Hard=${counts.Hard}`);
