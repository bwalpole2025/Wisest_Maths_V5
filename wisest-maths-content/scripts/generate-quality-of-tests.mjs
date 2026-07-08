#!/usr/bin/env node
/**
 * Generates 70 A-Level Further Maths "Quality of tests" questions.
 * Output: src/data/questions/a-level-further-maths/year-1-stats/quality-of-tests.ts
 *
 * Topics: Type I / Type II errors; size; power; power functions
 * (binomial and Poisson hypothesis tests).
 */

import { writeFileSync, mkdirSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const outDir = resolve(__dirname, "../src/data/questions/a-level-further-maths/year-1-stats");
const outPath = resolve(outDir, "quality-of-tests.ts");

mkdirSync(outDir, { recursive: true });

const SUBTOPIC = "Quality of tests";
const SUBTOPIC_ID = "fm.y1.stats.quality-of-tests";
const LEVEL = "A-Level Further Maths";
const TOPIC = "Further Maths Year 1: Statistics (Further Statistics 1)";

const qid = (n) => `fm.y1.stats.quality-of-tests.q${String(n).padStart(3, "0")}`;
const step = (n, description, workingLatex, explanation) => ({
  stepNumber: n,
  description,
  workingLatex,
  explanation,
  diagram: null,
});
const base = (meta) => ({
  level: LEVEL,
  topic: TOPIC,
  subtopic: SUBTOPIC,
  subtopicId: SUBTOPIC_ID,
  questionDiagram: null,
  ...meta,
});
const qtQ = (n, meta) =>
  base({ id: qid(n), ...meta, tags: ["quality-of-tests", ...(meta.tags || [])] });

function fact(n) {
  let f = 1;
  for (let i = 2; i <= n; i++) f *= i;
  return f;
}

function binomPMF(n, p, k) {
  if (k < 0 || k > n) return 0;
  let c = 1;
  for (let i = 0; i < k; i++) c = (c * (n - i)) / (i + 1);
  return c * p ** k * (1 - p) ** (n - k);
}

function binomCDF(n, p, k) {
  let s = 0;
  for (let i = 0; i <= k; i++) s += binomPMF(n, p, i);
  return s;
}

function binomTailGE(n, p, k) {
  return 1 - binomCDF(n, p, k - 1);
}

function binomTailLE(n, p, k) {
  return binomCDF(n, p, k);
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

function fmt(p, dp = 4) {
  if (p === 0) return "0";
  if (Number.isInteger(p)) return `${p}`;
  const s = p.toFixed(dp);
  return s.replace(/\.?0+$/, "") || "0";
}

function pct(p) {
  return `${fmt(100 * p, 2)}\\%`;
}

// ── Easy: definitions & identify errors ──────────────────────────────

function defineTypeIQ(n, context) {
  const steps = [
    step(1, "Recall Type I error", "\\text{Type I error} = \\text{reject } H_0 \\text{ when } H_0 \\text{ is true}", "A false positive: acting as if the alternative is true when the null was correct."),
    step(2, "Link to significance level", "\\alpha = P(\\text{Type I error})", "The size / significance level is the probability of a Type I error."),
    step(3, "Context", context, "Interpret the error in the given scenario."),
    step(4, "When it happens", "H_0 \\text{ true, but data fall in critical region}", "The test statistic lands in the rejection region by chance."),
    step(5, "Consequence", "\\text{Incorrectly conclude } H_1", "We change practice or claim an effect that is not real."),
    step(6, "Answer", "\\text{Reject } H_0 \\text{ when } H_0 \\text{ true}", "State the definition clearly."),
  ];
  return qtQ(n, {
    difficulty: "Easy",
    marks: 2,
    answerType: "written",
    tags: ["type-i", "definition"],
    questionText: `${context} Define a Type I error in this context.`,
    workedSolution: {
      steps,
      finalAnswer: `A Type I error is rejecting $H_0$ when $H_0$ is true. ${context.includes("proportion") || context.includes("rate") ? "Here that means concluding there has been a change when there has not." : ""}`.trim(),
    },
  });
}

function defineTypeIIQ(n, context) {
  const steps = [
    step(1, "Recall Type II error", "\\text{Type II error} = \\text{accept } H_0 \\text{ when } H_0 \\text{ is false}", "A false negative: failing to detect a real effect."),
    step(2, "Probability notation", "\\beta = P(\\text{Type II error})", "$\\beta$ depends on the true parameter under $H_1$."),
    step(3, "Context", context, "Interpret what failing to reject $H_0$ would mean."),
    step(4, "When it happens", "H_0 \\text{ false, but data fall in acceptance region}", "The test is not powerful enough for the sample / critical region used."),
    step(5, "Link to power", "\\text{power} = 1 - \\beta", "Power is the chance of correctly rejecting a false $H_0$."),
    step(6, "Answer", "\\text{Accept } H_0 \\text{ when } H_1 \\text{ true}", "State the definition."),
  ];
  return qtQ(n, {
    difficulty: "Easy",
    marks: 2,
    answerType: "written",
    tags: ["type-ii", "definition"],
    questionText: `${context} Define a Type II error in this context.`,
    workedSolution: {
      steps,
      finalAnswer: `A Type II error is accepting $H_0$ when $H_0$ is false (failing to detect a real change).`,
    },
  });
}

function defineSizeQ(n) {
  const steps = [
    step(1, "Definition", "\\text{size} = P(\\text{reject } H_0 \\mid H_0 \\text{ true})", "Also called the actual significance level for a discrete test."),
    step(2, "Type I link", "\\text{size} = P(\\text{Type I error})", "Size is the probability of a Type I error."),
    step(3, "Critical region", "\\text{size} = P(X \\in CR \\mid H_0)", "Evaluate the critical region under the null distribution."),
    step(4, "Nominal vs actual", "\\text{actual size} \\leq \\text{nominal }\\alpha \\text{ (often)}", "For discrete distributions the actual size is usually strictly below the nominal level."),
    step(5, "Notation", "\\alpha \\text{ or }\\text{ASL}", "ASL = actual significance level."),
    step(6, "Answer", "\\text{size}=P(\\text{Type I error})", "Clear statement."),
  ];
  return qtQ(n, {
    difficulty: "Easy",
    marks: 2,
    answerType: "written",
    tags: ["size", "definition"],
    questionText: "In hypothesis testing, what is meant by the size of a test?",
    workedSolution: {
      steps,
      finalAnswer: `The size of a test is $P(\\text{reject } H_0 \\mid H_0 \\text{ true})$, i.e. the probability of a Type I error (the actual significance level).`,
    },
  });
}

function definePowerQ(n) {
  const steps = [
    step(1, "Definition", "\\text{power} = P(\\text{reject } H_0 \\mid H_0 \\text{ false})", "Chance of correctly detecting that $H_0$ is wrong."),
    step(2, "Type II link", "\\text{power} = 1 - \\beta = 1 - P(\\text{Type II error})", "Power and $\\beta$ are complementary."),
    step(3, "Depends on alternative", "\\text{power}(\\theta) = P(X \\in CR \\mid \\theta)", "Power is a function of the true parameter value."),
    step(4, "Good tests", "\\text{High power preferred}", "For fixed size, larger power means a better test."),
    step(5, "Trade-off", "\\text{Larger CR }\\Rightarrow\\text{ larger size and usually larger power}", "Making rejection easier increases both Type I risk and detection ability."),
    step(6, "Answer", "\\text{power}=1-\\beta", "State clearly."),
  ];
  return qtQ(n, {
    difficulty: "Easy",
    marks: 2,
    answerType: "written",
    tags: ["power", "definition"],
    questionText: "Define the power of a hypothesis test.",
    workedSolution: {
      steps,
      finalAnswer: `The power of a test is $P(\\text{reject } H_0 \\mid H_0 \\text{ false}) = 1 - \\beta$, where $\\beta = P(\\text{Type II error})$.`,
    },
  });
}

function identifyErrorQ(n, scenario, which, explanation) {
  const isI = which === "I";
  const steps = [
    step(1, "What happened?", scenario, "Identify the true state of nature and the decision made."),
    step(2, "True state of $H_0$", isI ? "H_0 \\text{ is true}" : "H_0 \\text{ is false}", "Establish whether the null is actually correct."),
    step(3, "Decision made", isI ? "\\text{Rejected } H_0" : "\\text{Accepted } H_0", "What did the test conclude?"),
    step(4, "Classify", isI ? "\\text{Type I error}" : "\\text{Type II error}", explanation),
    step(5, "Recall definition", isI
      ? "\\text{Type I: reject true } H_0"
      : "\\text{Type II: accept false } H_0", "Match to the definition."),
    step(6, "Answer", `\\text{Type ${which} error}`, "Name the error."),
  ];
  return qtQ(n, {
    difficulty: "Easy",
    marks: 2,
    answerType: "written",
    tags: ["identify-error", isI ? "type-i" : "type-ii"],
    questionText: `${scenario} Is this a Type I or Type II error?`,
    workedSolution: {
      steps,
      finalAnswer: `Type ${which} error. ${explanation}`,
    },
  });
}

function sizeFromCR_binom(n, N, p0, crit, side) {
  const size =
    side === "upper"
      ? binomTailGE(N, p0, crit)
      : side === "lower"
        ? binomTailLE(N, p0, crit)
        : null;
  const crTex =
    side === "upper" ? `X \\geq ${crit}` : `X \\leq ${crit}`;
  const sizeStr = fmt(size);
  const steps = [
    step(1, "Hypotheses under $H_0$", `X \\sim B(${N}, ${fmt(p0)})`, "Null distribution of the test statistic."),
    step(2, "Critical region", crTex, "Rejection region given in the question."),
    step(3, "Size definition", `\\text{size} = P(${crTex} \\mid H_0)`, "Probability of rejecting a true null."),
    step(4, "Evaluate", `P(${crTex}) = ${sizeStr}`, "Use the binomial distribution under $H_0$."),
    step(5, "As percentage", `\\text{size} = ${pct(size)}`, "Express clearly."),
    step(6, "Answer", `\\text{size} = ${sizeStr}`, "Actual significance level of the test."),
  ];
  return qtQ(n, {
    difficulty: "Easy",
    marks: 3,
    answerType: "value",
    tags: ["size", "binomial"],
    questionText: `A test uses $X \\sim B(${N}, p)$ with critical region $${crTex}$. Under $H_0$, $p = ${fmt(p0)}$. Find the size of the test. Give your answer to $4$ decimal places.`,
    workedSolution: {
      steps,
      finalAnswer: `Size $= ${sizeStr}$.`,
    },
  });
}

function sizeFromCR_poisson(n, lambda0, crit, side) {
  const size =
    side === "upper" ? poissonTailGE(lambda0, crit) : poissonTailLE(lambda0, crit);
  const crTex = side === "upper" ? `X \\geq ${crit}` : `X \\leq ${crit}`;
  const sizeStr = fmt(size);
  const steps = [
    step(1, "Null model", `X \\sim \\mathrm{Po}(${fmt(lambda0)})`, "Distribution under $H_0$."),
    step(2, "Critical region", crTex, "Given rejection region."),
    step(3, "Size", `\\text{size} = P(${crTex} \\mid \\lambda=${fmt(lambda0)})`, "Type I error probability."),
    step(4, "Calculate", `P(${crTex}) = ${sizeStr}`, "Poisson probabilities under $H_0$."),
    step(5, "Interpret", `\\text{Chance of rejecting a true } H_0`, "Meaning of size."),
    step(6, "Answer", `\\text{size} = ${sizeStr}`, "Final value."),
  ];
  return qtQ(n, {
    difficulty: "Easy",
    marks: 3,
    answerType: "value",
    tags: ["size", "poisson"],
    questionText: `A test of $H_0{:}\\,\\lambda = ${fmt(lambda0)}$ against a one-sided alternative uses critical region $${crTex}$ where $X \\sim \\mathrm{Po}(\\lambda)$. Find the size of the test to $4$ decimal places.`,
    workedSolution: {
      steps,
      finalAnswer: `Size $= ${sizeStr}$.`,
    },
  });
}

// ── Intermediate: Type II & power calculations ───────────────────────

function typeII_binom(n, N, p0, p1, crit, side, context) {
  const beta =
    side === "upper"
      ? binomCDF(N, p1, crit - 1)
      : 1 - binomCDF(N, p1, crit);
  const crTex = side === "upper" ? `X \\geq ${crit}` : `X \\leq ${crit}`;
  const acceptTex =
    side === "upper" ? `X \\leq ${crit - 1}` : `X \\geq ${crit + 1}`;
  const betaStr = fmt(beta);
  const powerStr = fmt(1 - beta);
  const steps = [
    step(1, "Critical region", crTex, "Reject $H_0$ in this region."),
    step(2, "Type II event", `\\text{accept } H_0 \\Leftrightarrow ${acceptTex}`, "Fail to reject when data miss the critical region."),
    step(3, "True parameter", `p = ${fmt(p1)}\\ (H_1)`, "Under the stated alternative value."),
    step(4, "Model under $H_1$", `X \\sim B(${N}, ${fmt(p1)})`, "Use the true $p$, not $p_0$."),
    step(5, "Calculate $\\beta$", `\\beta = P(${acceptTex} \\mid p=${fmt(p1)}) = ${betaStr}`, "Probability of Type II error."),
    step(6, "Check range", "0 < \\beta < 1", "$\\beta$ must be a valid probability."),
    step(7, "Power note", `1-\\beta = ${powerStr}`, "Power is the complement of $\\beta$."),
    step(8, "Context", context, "Interpret failing to detect the change."),
    step(9, "Answer", `\\beta = ${betaStr}`, "Type II error probability."),
  ];
  return qtQ(n, {
    difficulty: "Intermediate",
    marks: 5,
    answerType: "value",
    tags: ["type-ii", "binomial"],
    questionText: `${context} A test of $H_0{:}\\,p=${fmt(p0)}$ uses critical region $${crTex}$ with $X\\sim B(${N},p)$. Find the probability of a Type II error when $p=${fmt(p1)}$. Give your answer to $4$ decimal places.`,
    workedSolution: {
      steps,
      finalAnswer: `$P(\\text{Type II error}) = ${betaStr}$.`,
    },
  });
}

function power_binom(n, N, p0, p1, crit, side, context) {
  const power =
    side === "upper" ? binomTailGE(N, p1, crit) : binomTailLE(N, p1, crit);
  const size =
    side === "upper" ? binomTailGE(N, p0, crit) : binomTailLE(N, p0, crit);
  const crTex = side === "upper" ? `X \\geq ${crit}` : `X \\leq ${crit}`;
  const powerStr = fmt(power);
  const sizeStr = fmt(size);
  const steps = [
    step(1, "Critical region", crTex, "Reject when the statistic falls here."),
    step(2, "Power definition", `\\text{power} = P(${crTex} \\mid p=${fmt(p1)})`, "Probability of rejecting $H_0$ when $p=${fmt(p1)}$."),
    step(3, "Model under alternative", `X \\sim B(${N}, ${fmt(p1)})`, "True parameter under $H_1$."),
    step(4, "Evaluate power", `\\text{power} = ${powerStr}`, "Binomial probability under $p=${fmt(p1)}$."),
    step(5, "Optional: size under $H_0$", `\\text{size} = P(${crTex}\\mid p=${fmt(p0)}) = ${sizeStr}`, "Useful comparison: size when null is true."),
    step(6, "Type II error", `\\beta = 1 - ${powerStr} = ${fmt(1 - power)}`, "Complement of power."),
    step(7, "Context", context, "Chance of correctly detecting the change."),
    step(8, "Interpret", `\\text{power} = ${pct(power)}`, "Rough percentage chance of detection."),
    step(9, "Answer", `\\text{power} = ${powerStr}`, "Final power."),
  ];
  return qtQ(n, {
    difficulty: "Intermediate",
    marks: 5,
    answerType: "value",
    tags: ["power", "binomial"],
    questionText: `${context} Using critical region $${crTex}$ for $X\\sim B(${N},p)$ testing $H_0{:}\\,p=${fmt(p0)}$, find the power of the test when $p=${fmt(p1)}$. Give your answer to $4$ decimal places.`,
    workedSolution: {
      steps,
      finalAnswer: `Power $= ${powerStr}$.`,
    },
  });
}

function typeII_poisson(n, lambda0, lambda1, crit, side, context) {
  const beta =
    side === "upper"
      ? poissonCDF(lambda1, crit - 1)
      : 1 - poissonCDF(lambda1, crit);
  const crTex = side === "upper" ? `X \\geq ${crit}` : `X \\leq ${crit}`;
  const acceptTex =
    side === "upper" ? `X \\leq ${crit - 1}` : `X \\geq ${crit + 1}`;
  const betaStr = fmt(beta);
  const steps = [
    step(1, "Critical region", crTex, "Rejection region of the test."),
    step(2, "Accept $H_0$", acceptTex, "Complement of the critical region."),
    step(3, "True mean", `\\lambda = ${fmt(lambda1)}`, "Value under the alternative."),
    step(4, "Model", `X \\sim \\mathrm{Po}(${fmt(lambda1)})`, "Poisson with the true rate."),
    step(5, "$\\beta$", `\\beta = P(${acceptTex} \\mid \\lambda=${fmt(lambda1)}) = ${betaStr}`, "Type II error probability."),
    step(6, "Power", `1-\\beta = ${fmt(1 - beta)}`, "Chance of correctly rejecting $H_0$."),
    step(7, "Compare to null", `\\text{Under } H_0{:}\\,\\lambda=${fmt(lambda0)}`, "Critical region was chosen using $\\lambda_0$."),
    step(8, "Context", context, "Meaning in the scenario."),
    step(9, "Answer", `\\beta = ${betaStr}`, "Final value."),
  ];
  return qtQ(n, {
    difficulty: "Intermediate",
    marks: 5,
    answerType: "value",
    tags: ["type-ii", "poisson"],
    questionText: `${context} A test of $H_0{:}\\,\\lambda=${fmt(lambda0)}$ uses critical region $${crTex}$. Find $P(\\text{Type II error})$ when $\\lambda=${fmt(lambda1)}$, to $4$ decimal places.`,
    workedSolution: {
      steps,
      finalAnswer: `$P(\\text{Type II error}) = ${betaStr}$.`,
    },
  });
}

function power_poisson(n, lambda0, lambda1, crit, side, context) {
  const power =
    side === "upper"
      ? poissonTailGE(lambda1, crit)
      : poissonTailLE(lambda1, crit);
  const crTex = side === "upper" ? `X \\geq ${crit}` : `X \\leq ${crit}`;
  const powerStr = fmt(power);
  const steps = [
    step(1, "Power formula", `\\text{power} = P(${crTex} \\mid \\lambda=${fmt(lambda1)})`, "Reject $H_0$ under the true rate."),
    step(2, "Critical region", crTex, "Given for the test."),
    step(3, "Distribution", `X \\sim \\mathrm{Po}(${fmt(lambda1)})`, "Use $\\lambda$ from $H_1$, not $H_0$."),
    step(4, "Calculate", `\\text{power} = ${powerStr}`, "Poisson tail probability."),
    step(5, "$\\beta$", `\\beta = 1-${powerStr} = ${fmt(1 - power)}`, "Type II error rate."),
    step(6, "Null reminder", `H_0{:}\\,\\lambda=${fmt(lambda0)}`, "Size uses this value; power uses $\\lambda_1$."),
    step(7, "Context", context, "Chance of detecting the change."),
    step(8, "As percentage", `\\text{power}\\approx ${pct(power)}`, "Intuitive scale."),
    step(9, "Answer", `\\text{power} = ${powerStr}`, "Final answer."),
  ];
  return qtQ(n, {
    difficulty: "Intermediate",
    marks: 5,
    answerType: "value",
    tags: ["power", "poisson"],
    questionText: `${context} For a test of $H_0{:}\\,\\lambda=${fmt(lambda0)}$ with critical region $${crTex}$, find the power when $\\lambda=${fmt(lambda1)}$. Give $4$ decimal places.`,
    workedSolution: {
      steps,
      finalAnswer: `Power $= ${powerStr}$.`,
    },
  });
}

function sizeAndPower_binom(n, N, p0, p1, crit, side, context) {
  const size =
    side === "upper" ? binomTailGE(N, p0, crit) : binomTailLE(N, p0, crit);
  const power =
    side === "upper" ? binomTailGE(N, p1, crit) : binomTailLE(N, p1, crit);
  const crTex = side === "upper" ? `X \\geq ${crit}` : `X \\leq ${crit}`;
  const steps = [
    step(1, "Critical region", crTex, "Used for both size and power."),
    step(2, "Size under $H_0$", `\\text{size} = P(${crTex}\\mid p=${fmt(p0)})`, "Type I error probability."),
    step(3, "Evaluate size", `\\text{size} = ${fmt(size)}`, `Using $X\\sim B(${N},${fmt(p0)})$.`),
    step(4, "Power under $H_1$", `\\text{power} = P(${crTex}\\mid p=${fmt(p1)})`, "Same region, different $p$."),
    step(5, "Evaluate power", `\\text{power} = ${fmt(power)}`, `Using $X\\sim B(${N},${fmt(p1)})$.`),
    step(6, "Type II", `\\beta = 1-${fmt(power)} = ${fmt(1 - power)}`, "Complement of power."),
    step(7, "Compare", `\\text{size}=${fmt(size)},\\ \\text{power}=${fmt(power)}`, "Size should be small; power hopefully large."),
    step(8, "Context", context, "Interpret both quantities."),
    step(9, "Answer", `\\text{size}=${fmt(size)},\\ \\text{power}=${fmt(power)}`, "Both found."),
  ];
  return qtQ(n, {
    difficulty: "Intermediate",
    marks: 6,
    answerType: "written",
    tags: ["size", "power", "binomial"],
    questionText: `${context} A test uses critical region $${crTex}$ with $X\\sim B(${N},p)$. Find (a) the size of the test when $H_0{:}\\,p=${fmt(p0)}$, (b) the power when $p=${fmt(p1)}$. Give answers to $4$ decimal places.`,
    workedSolution: {
      steps,
      finalAnswer: `(a) Size $= ${fmt(size)}$. (b) Power $= ${fmt(power)}$.`,
    },
  });
}

// ── Hard: multi-part, power functions, comparisons ───────────────────

function hardPowerFunction(n, N, p0, crit, side, pValues, context) {
  const crTex = side === "upper" ? `X \\geq ${crit}` : `X \\leq ${crit}`;
  const powers = pValues.map((p) =>
    side === "upper" ? binomTailGE(N, p, crit) : binomTailLE(N, p, crit)
  );
  const size = side === "upper" ? binomTailGE(N, p0, crit) : binomTailLE(N, p0, crit);
  const steps = [
    step(1, "Power function", `\\pi(p) = P(${crTex} \\mid p)`, "Power as a function of the true $p$."),
    step(2, "Critical region", crTex, "Fixed rejection rule."),
    step(3, "At $p=p_0$", `\\pi(${fmt(p0)}) = ${fmt(size)}`, "Equals the size of the test."),
    ...pValues.map((p, i) =>
      step(
        4 + i,
        `Evaluate at $p=${fmt(p)}$`,
        `\\pi(${fmt(p)}) = ${fmt(powers[i])}`,
        `Binomial probability under $p=${fmt(p)}$.`
      )
    ),
    step(4 + pValues.length, "Shape", side === "upper"
      ? "\\pi(p) \\text{ increases with } p"
      : "\\pi(p) \\text{ decreases with } p", "Power rises as the true value moves further into $H_1$."),
    step(5 + pValues.length, "Type II at each point", `\\beta(p)=1-\\pi(p)`, "$\\beta$ falls as power rises."),
    step(6 + pValues.length, "Context", context, "How the test behaves for different true proportions."),
    step(7 + pValues.length, "Summary table", pValues.map((p, i) => `p=${fmt(p)}:\\ ${fmt(powers[i])}`).join(",\\ "), "List the powers."),
    step(8 + pValues.length, "Answer", "\\text{power function values computed}", "All requested values found."),
  ];
  const ans = `At $p=${fmt(p0)}$ (size): $${fmt(size)}$. ` +
    pValues.map((p, i) => `At $p=${fmt(p)}$: power $= ${fmt(powers[i])}$`).join("; ") + ".";
  return qtQ(n, {
    difficulty: "Hard",
    marks: 8,
    answerType: "written",
    tags: ["power-function", "binomial"],
    questionText: `${context} A test of $H_0{:}\\,p=${fmt(p0)}$ uses critical region $${crTex}$ with $X\\sim B(${N},p)$. (a) State the value of the power function at $p=${fmt(p0)}$. (b) Find the power when $p=${pValues.map(fmt).join("$, $p=")}$. Give answers to $4$ decimal places.`,
    workedSolution: { steps, finalAnswer: ans },
  });
}

function hardCompareTests(n, N, p0, p1, critA, critB, side, context) {
  const sizeA = side === "upper" ? binomTailGE(N, p0, critA) : binomTailLE(N, p0, critA);
  const sizeB = side === "upper" ? binomTailGE(N, p0, critB) : binomTailLE(N, p0, critB);
  const powA = side === "upper" ? binomTailGE(N, p1, critA) : binomTailLE(N, p1, critA);
  const powB = side === "upper" ? binomTailGE(N, p1, critB) : binomTailLE(N, p1, critB);
  const crA = side === "upper" ? `X \\geq ${critA}` : `X \\leq ${critA}`;
  const crB = side === "upper" ? `X \\geq ${critB}` : `X \\leq ${critB}`;
  const better =
    Math.abs(sizeA - sizeB) < 1e-9
      ? powA >= powB
        ? "A"
        : "B"
      : sizeA < sizeB && powA >= powB
        ? "A (smaller size, at least as much power)"
        : sizeB < sizeA && powB >= powA
          ? "B (smaller size, at least as much power)"
          : powA / sizeA >= powB / sizeB
            ? "A has higher power-to-size ratio"
            : "B has higher power-to-size ratio";
  const steps = [
    step(1, "Test A critical region", crA, "First proposed test."),
    step(2, "Size A", `\\alpha_A = ${fmt(sizeA)}`, `Under $p=${fmt(p0)}$.`),
    step(3, "Power A", `\\pi_A = ${fmt(powA)}`, `Under $p=${fmt(p1)}$.`),
    step(4, "Test B critical region", crB, "Second proposed test."),
    step(5, "Size B", `\\alpha_B = ${fmt(sizeB)}`, `Under $p=${fmt(p0)}$.`),
    step(6, "Power B", `\\pi_B = ${fmt(powB)}`, `Under $p=${fmt(p1)}$.`),
    step(7, "Trade-off", "\\text{Larger CR }\\Rightarrow\\text{ larger }\\alpha\\text{ and usually larger }\\pi", "Relaxing the critical value increases size and power."),
    step(8, "Compare sizes", `\\alpha_A=${fmt(sizeA)},\\ \\alpha_B=${fmt(sizeB)}`, "Which controls Type I error better?"),
    step(9, "Compare powers", `\\pi_A=${fmt(powA)},\\ \\pi_B=${fmt(powB)}`, "Which detects $p=${fmt(p1)}$ better?"),
    step(10, "Judgement", better, "Prefer smaller size for similar power, or higher power for similar size."),
    step(11, "Context", context, "Practical meaning of the choice."),
    step(12, "Type II for A", `\\beta_A=${fmt(1 - powA)}`, "Complement of power A."),
    step(13, "Answer", `\\text{A: size }${fmt(sizeA)},\\text{ power }${fmt(powA)};\\ \\text{B: size }${fmt(sizeB)},\\text{ power }${fmt(powB)}`, "Summary."),
  ];
  return qtQ(n, {
    difficulty: "Hard",
    marks: 9,
    answerType: "written",
    tags: ["compare-tests", "size", "power"],
    questionText: `${context} Two tests of $H_0{:}\\,p=${fmt(p0)}$ against $H_1{:}\\,p${side === "upper" ? ">" : "<"}${fmt(p0)}$ use $X\\sim B(${N},p)$. Test A has CR $${crA}$; test B has CR $${crB}$. Find the size and the power (when $p=${fmt(p1)}$) of each test, and comment on which is preferable.`,
    workedSolution: {
      steps,
      finalAnswer: `Test A: size $${fmt(sizeA)}$, power $${fmt(powA)}$. Test B: size $${fmt(sizeB)}$, power $${fmt(powB)}$. Preference: ${better}.`,
    },
  });
}

function hardFullQuality(n, N, p0, p1, crit, side, context, observed) {
  const size =
    side === "upper" ? binomTailGE(N, p0, crit) : binomTailLE(N, p0, crit);
  const power =
    side === "upper" ? binomTailGE(N, p1, crit) : binomTailLE(N, p1, crit);
  const beta = 1 - power;
  const crTex = side === "upper" ? `X \\geq ${crit}` : `X \\leq ${crit}`;
  const reject =
    side === "upper" ? observed >= crit : observed <= crit;
  const steps = [
    step(1, "Hypotheses", `H_0{:}\\,p=${fmt(p0)},\\ H_1{:}\\,p${side === "upper" ? ">" : "<"}${fmt(p0)}`, "State clearly."),
    step(2, "Model under $H_0$", `X \\sim B(${N}, ${fmt(p0)})`, "Null distribution."),
    step(3, "Critical region", crTex, "Given or previously found."),
    step(4, "Size", `\\alpha = P(${crTex}\\mid H_0) = ${fmt(size)}`, "Actual significance level / Type I error rate."),
    step(5, "Type I meaning", "\\text{Reject true } H_0", "False alarm rate under $H_0$."),
    step(6, "Power at $p_1$", `\\pi = P(${crTex}\\mid p=${fmt(p1)}) = ${fmt(power)}`, "Detection probability."),
    step(7, "Type II", `\\beta = ${fmt(beta)}`, "Miss rate when $p=${fmt(p1)}$."),
    step(8, "Observed value", `x = ${observed}`, "Sample result."),
    step(9, "Decision", reject ? `x \\in CR \\Rightarrow \\text{reject } H_0` : `x \\notin CR \\Rightarrow \\text{do not reject } H_0`, "Compare observation with critical region."),
    step(10, "If true $p=p_0$", reject
      ? "\\text{This would be a Type I error}"
      : "\\text{Correct acceptance of } H_0", "Error classification under null."),
    step(11, "If true $p=p_1$", reject
      ? "\\text{Correct rejection (power event)}"
      : "\\text{This would be a Type II error}", "Error classification under alternative."),
    step(12, "Context", context, "State conclusion in words."),
    step(13, "Summary", `\\alpha=${fmt(size)},\\ \\pi=${fmt(power)},\\ \\beta=${fmt(beta)}`, "Quality measures of the test."),
  ];
  return qtQ(n, {
    difficulty: "Hard",
    marks: 10,
    answerType: "written",
    tags: ["size", "power", "type-i", "type-ii", "multi-part"],
    questionText: `${context} A test of $H_0{:}\\,p=${fmt(p0)}$ against $H_1{:}\\,p${side === "upper" ? ">" : "<"}${fmt(p0)}$ uses critical region $${crTex}$ with $X\\sim B(${N},p)$. (a) Find the size of the test. (b) Find the power when $p=${fmt(p1)}$. (c) Find $P(\\text{Type II error})$ when $p=${fmt(p1)}$. (d) If $x=${observed}$ is observed, state the conclusion and whether a Type I or Type II error is possible.`,
    workedSolution: {
      steps,
      finalAnswer: `(a) Size $= ${fmt(size)}$. (b) Power $= ${fmt(power)}$. (c) $\\beta = ${fmt(beta)}$. (d) ${reject ? `Reject $H_0$` : `Do not reject $H_0$`}; ${reject ? "a Type I error is possible if $H_0$ is true" : "a Type II error is possible if $H_1$ is true"}.`,
    },
  });
}

function hardPoissonQuality(n, lambda0, lambda1, crit, side, context) {
  const size =
    side === "upper"
      ? poissonTailGE(lambda0, crit)
      : poissonTailLE(lambda0, crit);
  const power =
    side === "upper"
      ? poissonTailGE(lambda1, crit)
      : poissonTailLE(lambda1, crit);
  const crTex = side === "upper" ? `X \\geq ${crit}` : `X \\leq ${crit}`;
  const steps = [
    step(1, "Null", `H_0{:}\\,\\lambda=${fmt(lambda0)}`, "Hypothesis being tested."),
    step(2, "Alternative value", `\\lambda=${fmt(lambda1)}`, "Specific value for power calculation."),
    step(3, "Critical region", crTex, "Rejection rule."),
    step(4, "Size", `\\alpha = P(${crTex}\\mid \\lambda=${fmt(lambda0)}) = ${fmt(size)}`, "Type I error rate."),
    step(5, "Power", `\\pi = P(${crTex}\\mid \\lambda=${fmt(lambda1)}) = ${fmt(power)}`, "Detection probability."),
    step(6, "Type II", `\\beta = 1-${fmt(power)} = ${fmt(1 - power)}`, "Miss probability."),
    step(7, "Power function idea", `\\pi(\\lambda)=P(${crTex}\\mid \\lambda)`, "Varies with true $\\lambda$."),
    step(8, "At $\\lambda_0$", `\\pi(${fmt(lambda0)})=\\alpha=${fmt(size)}`, "Power equals size under $H_0$."),
    step(9, "Monotonicity", side === "upper"
      ? "\\pi(\\lambda)\\text{ increases with }\\lambda"
      : "\\pi(\\lambda)\\text{ decreases with }\\lambda", "Further from $H_0$ means higher power."),
    step(10, "Context", context, "Interpret in the problem setting."),
    step(11, "Check", `0 < \\alpha < 1,\\ 0 < \\pi < 1`, "Probabilities in range."),
    step(12, "Trade-off note", "\\text{Tighter CR }\\Rightarrow\\text{ smaller }\\alpha\\text{ and smaller }\\pi", "Size–power trade-off."),
    step(13, "Answer", `\\alpha=${fmt(size)},\\ \\pi=${fmt(power)},\\ \\beta=${fmt(1 - power)}`, "Complete."),
  ];
  return qtQ(n, {
    difficulty: "Hard",
    marks: 9,
    answerType: "written",
    tags: ["size", "power", "poisson", "multi-part"],
    questionText: `${context} A test of $H_0{:}\\,\\lambda=${fmt(lambda0)}$ uses critical region $${crTex}$ with $X\\sim\\mathrm{Po}(\\lambda)$. Find (a) the size, (b) the power when $\\lambda=${fmt(lambda1)}$, (c) the probability of a Type II error when $\\lambda=${fmt(lambda1)}$. Give $4$ decimal places.`,
    workedSolution: {
      steps,
      finalAnswer: `(a) Size $= ${fmt(size)}$. (b) Power $= ${fmt(power)}$. (c) $P(\\text{Type II error}) = ${fmt(1 - power)}$.`,
    },
  });
}

// ── Build the 70 questions ───────────────────────────────────────────

const questions = [];

// Easy 1–20: definitions, identify, simple size
questions.push(
  defineTypeIQ(1, "A factory claims that $5\\%$ of items are defective and tests $H_0{:}\\,p=0.05$ against $H_1{:}\\,p>0.05$."),
  defineTypeIIQ(2, "A medical screening test considers $H_0{:}$ patient is healthy against $H_1{:}$ patient has the disease."),
  defineSizeQ(3),
  definePowerQ(4),
  identifyErrorQ(
    5,
    "A coin is fair ($p=0.5$) but a test concludes it is biased towards heads.",
    "I",
    "The null was true but was rejected."
  ),
  identifyErrorQ(
    6,
    "A vaccine really does reduce infection rate, but a trial fails to find significant evidence and accepts $H_0{:}$ no effect.",
    "II",
    "The null was false but was accepted."
  ),
  identifyErrorQ(
    7,
    "Calls arrive at a mean of $3$ per hour, but a test concludes the rate has increased.",
    "I",
    "$H_0$ true yet rejected — Type I."
  ),
  identifyErrorQ(
    8,
    "The true defect rate has fallen, but the quality inspector's test does not reject $H_0{:}\\,p=0.1$.",
    "II",
    "Real change not detected — Type II."
  ),
  defineTypeIQ(9, "An examiner tests whether a new marking scheme raises the mean score ($H_0{:}$ no increase)."),
  defineTypeIIQ(10, "A physicist tests $H_0{:}\\,\\lambda=4$ radioactive counts per minute against $H_1{:}\\,\\lambda>4$."),
  sizeFromCR_binom(11, 10, 0.5, 9, "upper"),
  sizeFromCR_binom(12, 12, 0.25, 1, "lower"),
  sizeFromCR_binom(13, 15, 0.4, 10, "upper"),
  sizeFromCR_binom(14, 20, 0.3, 2, "lower"),
  sizeFromCR_poisson(15, 3, 7, "upper"),
  sizeFromCR_poisson(16, 5, 1, "lower"),
  sizeFromCR_poisson(17, 4, 8, "upper"),
  sizeFromCR_binom(18, 8, 0.6, 7, "upper"),
  qtQ(19, {
    difficulty: "Easy",
    marks: 3,
    answerType: "written",
    tags: ["power", "definition", "type-ii"],
    questionText:
      "For a hypothesis test, explain the relationship between the power of the test and the probability of a Type II error.",
    workedSolution: {
      steps: [
        step(1, "Type II probability", "\\beta = P(\\text{accept } H_0 \\mid H_0 \\text{ false})", "Chance of missing a real effect."),
        step(2, "Power", "\\text{power} = P(\\text{reject } H_0 \\mid H_0 \\text{ false})", "Chance of detecting a real effect."),
        step(3, "Complement", "\\text{power} = 1 - \\beta", "The two events partition the outcomes under $H_1$."),
        step(4, "Improve", "\\text{Increasing power decreases }\\beta", "Better tests miss fewer real effects."),
        step(5, "Depends on parameter", "\\text{Both depend on the true }\\theta", "Power function description."),
        step(6, "Answer", "\\text{power}=1-\\beta", "State the relationship."),
      ],
      finalAnswer: `Power $= 1 - \\beta$, where $\\beta = P(\\text{Type II error})$.`,
    },
  }),
  qtQ(20, {
    difficulty: "Easy",
    marks: 3,
    answerType: "written",
    tags: ["size", "type-i", "definition"],
    questionText:
      "Explain why, for a discrete test statistic, the actual size of a test is often less than the nominal significance level.",
    workedSolution: {
      steps: [
        step(1, "Nominal level", "\\alpha_{\\mathrm{nom}} = 0.05 \\text{ (example)}", "Desired maximum Type I error rate."),
        step(2, "Discrete support", "X \\in \\{0,1,2,\\ldots\\}", "Probabilities jump in steps, not continuously."),
        step(3, "Critical region constraint", "P(CR)\\leq \\alpha_{\\mathrm{nom}}", "Strongest CR with probability not exceeding $\\alpha$."),
        step(4, "Usually strict", "P(CR) < \\alpha_{\\mathrm{nom}}", "Cannot hit exactly $5\\%$ for most discrete laws."),
        step(5, "Actual size", "\\text{ASL} = P(CR \\mid H_0)", "This smaller value is the true Type I rate."),
        step(6, "Answer", "\\text{Discrete jumps prevent exact }\\alpha", "Hence ASL often $<$ nominal."),
      ],
      finalAnswer: `Because $X$ is discrete, the critical region must be a set of whole outcomes, so $P(\\text{CR}\\mid H_0)$ usually cannot equal the nominal $\\alpha$ exactly and is chosen to be the largest value $\\leq\\alpha$.`,
    },
  })
);

// Intermediate 21–48
questions.push(
  typeII_binom(21, 10, 0.5, 0.7, 8, "upper", "A coin is tested for bias towards heads."),
  typeII_binom(22, 12, 0.3, 0.15, 1, "lower", "A manufacturer tests whether the defect rate has fallen."),
  power_binom(23, 10, 0.4, 0.6, 7, "upper", "A marketer tests whether click-through rate has increased."),
  power_binom(24, 15, 0.5, 0.3, 4, "lower", "An engineer tests whether failure rate has decreased."),
  typeII_poisson(25, 3, 5, 7, "upper", "Call arrivals are modelled by a Poisson process."),
  power_poisson(26, 4, 2, 1, "lower", "Radioactive counts are modelled by $\\mathrm{Po}(\\lambda)$."),
  sizeAndPower_binom(27, 10, 0.25, 0.45, 5, "upper", "A quiz scores $X$ successes out of $10$."),
  sizeAndPower_binom(28, 20, 0.2, 0.1, 1, "lower", "Parcels late: $X$ late in a sample of $20$."),
  typeII_binom(29, 8, 0.5, 0.75, 7, "upper", "A spinner is tested for bias."),
  power_binom(30, 12, 0.4, 0.2, 2, "lower", "App notifications: testing a decrease in enable rate."),
  typeII_poisson(31, 5, 8, 10, "upper", "Website hits per minute follow Poisson."),
  power_poisson(32, 6, 3, 0, "lower", "Machine faults per day: testing a decrease."),
  typeII_binom(33, 15, 0.35, 0.55, 9, "upper", "Survey: proportion supporting a policy."),
  power_binom(34, 10, 0.6, 0.4, 3, "lower", "Free-throw success rate after injury."),
  sizeAndPower_binom(35, 12, 0.5, 0.7, 9, "upper", "Coin bias test with $n=12$."),
  typeII_poisson(36, 2, 4, 5, "upper", "Emails with spam flags per hour."),
  power_poisson(37, 7, 4, 0, "lower", "Breakdowns per week under a maintenance plan."),
  typeII_binom(38, 20, 0.15, 0.05, 1, "lower", "Defectives in a batch of $20$."),
  power_binom(39, 16, 0.5, 0.7, 12, "upper", "True/false test guessing vs knowledge."),
  sizeAndPower_binom(40, 10, 0.3, 0.5, 6, "upper", "Germination rate of seeds."),
  qtQ(41, {
    difficulty: "Intermediate",
    marks: 5,
    answerType: "written",
    tags: ["size", "power", "relationship"],
    questionText:
      "A hypothesis test has size $0.04$ and power $0.72$ against a particular alternative. State (a) $P(\\text{Type I error})$, (b) $P(\\text{Type II error})$, (c) the probability of correctly accepting $H_0$ when $H_0$ is true.",
    workedSolution: {
      steps: [
        step(1, "Size = Type I", "P(\\text{Type I}) = 0.04", "By definition of size."),
        step(2, "Power and Type II", "\\beta = 1 - 0.72 = 0.28", "Complement of power."),
        step(3, "Correct acceptance under $H_0$", "P(\\text{accept } H_0 \\mid H_0) = 1 - \\text{size} = 0.96", "Complement of Type I."),
        step(4, "Check", "0.04+0.96=1", "Under $H_0$, reject or accept."),
        step(5, "Under $H_1$", "0.72+0.28=1", "Power vs Type II."),
        step(6, "Part (a)", "0.04", "Type I."),
        step(7, "Part (b)", "0.28", "Type II."),
        step(8, "Part (c)", "0.96", "Correct retention of $H_0$."),
        step(9, "Answer", "(a)\\ 0.04,\\ (b)\\ 0.28,\\ (c)\\ 0.96", "All three."),
      ],
      finalAnswer: `(a) $0.04$. (b) $0.28$. (c) $0.96$.`,
    },
  }),
  typeII_binom(42, 14, 0.4, 0.6, 9, "upper", "Customer uptake of a new feature."),
  power_binom(43, 18, 0.25, 0.1, 0, "lower", "Testing a reduction in complaint rate."),
  typeII_poisson(44, 3.5, 6, 8, "upper", "Ambulance call-outs per shift."),
  power_poisson(45, 5, 2.5, 0, "lower", "Typing errors per page after training."),
  sizeAndPower_binom(46, 10, 0.5, 0.8, 8, "upper", "Multiple-choice lucky guessing check."),
  typeII_binom(47, 12, 0.2, 0.4, 5, "upper", "Proportion of late trains."),
  power_binom(48, 15, 0.45, 0.25, 0, "lower", "Recovery rate after a treatment change.")
);

// Hard 49–70
questions.push(
  hardPowerFunction(
    49,
    10,
    0.5,
    8,
    "upper",
    [0.6, 0.7, 0.8],
    "A fairness test for a coin uses an upper-tail critical region."
  ),
  hardCompareTests(
    50,
    10,
    0.3,
    0.5,
    6,
    5,
    "upper",
    "Two critical regions are proposed for testing an increase in germination rate."
  ),
  hardFullQuality(
    51,
    12,
    0.4,
    0.6,
    8,
    "upper",
    "A tutor tests whether more than $40\\%$ of students prefer online lessons.",
    9
  ),
  hardPoissonQuality(
    52,
    4,
    7,
    9,
    "upper",
    "A hospital models daily admissions by a Poisson distribution."
  ),
  hardPowerFunction(
    53,
    15,
    0.2,
    1,
    "lower",
    [0.15, 0.1, 0.05],
    "A quality manager tests for a decrease in defectives."
  ),
  hardCompareTests(
    54,
    12,
    0.5,
    0.3,
    0,
    0,
    "lower",
    "Note: both use CR $X\\leq 0$; compare is degenerate — use different cris."
  ),
  hardFullQuality(
    55,
    10,
    0.5,
    0.3,
    0,
    "lower",
    "A researcher tests whether fewer than half of mosquitoes carry a virus.",
    1
  ),
  hardPoissonQuality(
    56,
    6,
    3,
    0,
    "lower",
    "Machine stops per day: testing whether the rate has fallen."
  ),
  hardPowerFunction(
    57,
    20,
    0.25,
    9,
    "upper",
    [0.3, 0.4, 0.5],
    "Political polling: testing an increase in support."
  ),
  hardFullQuality(
    58,
    16,
    0.35,
    0.55,
    9,
    "upper",
    "An engineer tests whether the proportion of devices lasting $5$ years exceeds $35\\%$.",
    10
  ),
  hardPoissonQuality(
    59,
    2,
    5,
    6,
    "upper",
    "Network outages per week."
  ),
  hardCompareTests(
    60,
    15,
    0.4,
    0.2,
    0,
    0,
    "lower",
    "Placeholder replaced below"
  ),
  hardFullQuality(
    61,
    10,
    0.25,
    0.45,
    5,
    "upper",
    "A chemist tests whether more than $25\\%$ of samples show contamination.",
    4
  ),
  hardPowerFunction(
    62,
    12,
    0.5,
    0,
    "lower",
    [0.4, 0.3, 0.2],
    "A die fairness check: testing decrease in probability of a six (modelled via success rate)."
  ),
  hardPoissonQuality(
    63,
    5,
    8,
    10,
    "upper",
    "Insurance claims arriving per day."
  ),
  hardFullQuality(
    64,
    20,
    0.15,
    0.05,
    1,
    "lower",
    "A courier tests whether the late-delivery rate has fallen below $15\\%$.",
    0
  ),
  hardCompareTests(
    65,
    10,
    0.5,
    0.7,
    9,
    8,
    "upper",
    "Two upper-tail tests for coin bias are compared."
  ),
  hardPowerFunction(
    66,
    10,
    0.3,
    6,
    "upper",
    [0.4, 0.5, 0.6],
    "Germination experiment with power function evaluation."
  ),
  hardPoissonQuality(
    67,
    3,
    1,
    0,
    "lower",
    "Typing errors: testing for a reduced Poisson rate."
  ),
  hardFullQuality(
    68,
    14,
    0.5,
    0.7,
    10,
    "upper",
    "A games designer tests whether players win more than half the time after a patch.",
    11
  ),
  hardCompareTests(
    69,
    12,
    0.25,
    0.1,
    0,
    1,
    "lower",
    "Two lower-tail tests for a reduction in defectives are proposed."
  ),
  hardFullQuality(
    70,
    15,
    0.4,
    0.6,
    10,
    "upper",
    "A sports scientist tests whether more than $40\\%$ of athletes meet a new fitness threshold.",
    9
  )
);

// Fix the two comparative questions that had degenerate / placeholder CRs
questions[53] = hardCompareTests(
  54,
  12,
  0.5,
  0.3,
  3,
  2,
  "lower",
  "Two lower-tail critical regions are proposed for testing a decrease in failure probability."
);
questions[59] = hardCompareTests(
  60,
  15,
  0.4,
  0.2,
  2,
  3,
  "lower",
  "Two tests are proposed for a reduction in the proportion of faulty components."
);

// Step count enforcement
const STEP_MIN = { Easy: 6, Intermediate: 9, Hard: 13 };
const STEP_MAX = { Easy: 9, Intermediate: 13, Hard: 18 };
const EXTRA = [
  () =>
    step(0, "Type I error", "\\text{Reject } H_0 \\text{ when true}", "False positive."),
  () =>
    step(0, "Type II error", "\\text{Accept } H_0 \\text{ when false}", "False negative."),
  () =>
    step(0, "Size", "\\alpha = P(\\text{Type I error})", "Actual significance level."),
  () =>
    step(0, "Power", "\\text{power}=1-\\beta", "Detection probability under $H_1$."),
  () =>
    step(0, "Power function", "\\pi(\\theta)=P(\\text{reject } H_0\\mid \\theta)", "Depends on the true parameter."),
  () =>
    step(0, "Trade-off", "\\text{Larger CR }\\Rightarrow\\text{ larger size and power}", "Size–power balance."),
  () =>
    step(0, "Discrete ASL", "\\text{ASL} \\leq \\text{nominal }\\alpha", "Cannot always match $\\alpha$ exactly."),
  () =>
    step(0, "Evaluate under correct model", "\\text{Use } p_0 \\text{ for size, } p_1 \\text{ for power}", "Different distributions for $\\alpha$ and $\\pi$."),
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

// Validate unique ids
const ids = new Set(questions.map((q) => q.id));
if (ids.size !== 70) {
  console.error(`Duplicate ids: ${70 - ids.size} duplicates`);
  process.exit(1);
}

writeFileSync(
  outPath,
  `import { Question } from "@/lib/types";\n\nexport const questions: Question[] = ${JSON.stringify(questions, null, 2)};\n`
);
console.log(`Wrote ${questions.length} questions to ${outPath}`);
console.log(`Difficulty: Easy=${counts.Easy}, Intermediate=${counts.Intermediate}, Hard=${counts.Hard}`);
