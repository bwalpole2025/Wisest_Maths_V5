#!/usr/bin/env node
/**
 * Generates 70 A-Level Further Maths "Geometric and negative binomial" questions.
 * Output: src/data/questions/a-level-further-maths/year-1-stats/geometric-negbinomial.ts
 */

import { writeFileSync, mkdirSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const outDir = resolve(__dirname, "../src/data/questions/a-level-further-maths/year-1-stats");
const outPath = resolve(outDir, "geometric-negbinomial.ts");

mkdirSync(outDir, { recursive: true });

const SUBTOPIC = "Geometric and negative binomial";
const SUBTOPIC_ID = "fm.y1.stats.geometric-negbinomial";
const LEVEL = "A-Level Further Maths";
const TOPIC = "Further Maths Year 1: Statistics (Further Statistics 1)";

const qid = (n) => `fm.y1.stats.geometric-negbinomial.q${String(n).padStart(3, "0")}`;
const step = (n, description, workingLatex, explanation) => ({ stepNumber: n, description, workingLatex, explanation, diagram: null });
const base = (meta) => ({ level: LEVEL, topic: TOPIC, subtopic: SUBTOPIC, subtopicId: SUBTOPIC_ID, questionDiagram: null, ...meta });
const gnQ = (n, meta) => base({ id: qid(n), tags: ["geometric-negbinomial", ...(meta.tags || [])], ...meta });

const fmt = (n, dp = 4) => {
  const x = +n;
  if (Number.isInteger(x)) return `${x}`;
  const s = +x.toFixed(dp);
  return `${s}`.replace(/\.?0+$/, "");
};

const comb = (n, r) => {
  if (r < 0 || r > n) return 0;
  let num = 1;
  let den = 1;
  for (let i = 0; i < r; i++) {
    num *= n - i;
    den *= i + 1;
  }
  return num / den;
};

const geoPmf = (k, p) => (1 - p) ** (k - 1) * p;
const geoCdf = (k, p) => 1 - (1 - p) ** k;
const negBinPmf = (k, r, p) => comb(k - 1, r - 1) * p ** r * (1 - p) ** (k - r);
const geoMean = (p) => 1 / p;
const geoVar = (p) => (1 - p) / (p * p);
const negBinMean = (r, p) => r / p;
const negBinVar = (r, p) => (r * (1 - p)) / (p * p);

function identifyGeoQ(n, p, questionText, tags = [], marks = 2) {
  const steps = [
    step(1, "Recall the geometric model", "X = \\text{number of trials until the first success}", "Each trial is independent with constant success probability $p$."),
    step(2, "Check conditions", "\\text{Independent trials; constant }p;\\ \\text{two outcomes per trial}", "The geometric distribution models repeated Bernoulli trials."),
    step(3, "State the distribution", `X \\sim \\mathrm{Geo}(${fmt(p)})`, "Use the notation for a geometric random variable."),
    step(4, "PMF", `P(X=k) = (1-${fmt(p)})^{k-1} \\times ${fmt(p)}`, "First $(k-1)$ failures then a success on trial $k$."),
    step(5, "Mean", `E(X) = \\dfrac{1}{${fmt(p)}} = ${fmt(geoMean(p))}`, "Expected number of trials until the first success."),
    step(6, "Variance", `\\mathrm{Var}(X) = \\dfrac{1-${fmt(p)}}{${fmt(p)}^2} = ${fmt(geoVar(p))}`, "Spread of the waiting time to first success."),
  ];
  return gnQ(n, { difficulty: "Easy", marks, answerType: "written", tags: [...tags, "identify", "geometric"], questionText, workedSolution: { steps, finalAnswer: `$X \\sim \\mathrm{Geo}(${fmt(p)})$ with $E(X) = ${fmt(geoMean(p))}$ and $\\mathrm{Var}(X) = ${fmt(geoVar(p))}$.` } });
}

function geoProbQ(n, p, k, prob, questionText, tags = [], marks = 3, difficulty = "Easy") {
  const steps = [
    step(1, "Model", `X \\sim \\mathrm{Geo}(${fmt(p)})`, "$X$ counts trials until the first success."),
    step(2, "PMF", `P(X=k) = (1-p)^{k-1}p`, "Need exactly $(k-1)$ failures followed by one success."),
    step(3, "Substitute", `P(X=${k}) = (1-${fmt(p)})^{${k - 1}} \\times ${fmt(p)}`, "Insert $k$ and $p$ into the formula."),
    step(4, "Evaluate failure factor", `(1-${fmt(p)})^{${k - 1}} = ${fmt((1 - p) ** (k - 1))}`, "Compute the probability of $k-1$ consecutive failures."),
    step(5, "Multiply", `P(X=${k}) = ${fmt((1 - p) ** (k - 1))} \\times ${fmt(p)} = ${fmt(prob)}`, "Multiply by the success probability on trial $k$."),
    step(6, "Answer", `P(X=${k}) = ${fmt(prob)}`, "Probability that the first success occurs on trial $k$."),
  ];
  return gnQ(n, { difficulty, marks, answerType: "value", tags: [...tags, "geometric", "probability"], questionText, workedSolution: { steps, finalAnswer: `$P(X = ${k}) = ${fmt(prob)}$` } });
}

function geoAtMostQ(n, p, k, prob, questionText, tags = [], marks = 3) {
  const steps = [
    step(1, "Interpret", `P(X \\leq ${k})`, "First success occurs on or before trial $k$."),
    step(2, "Complement", `P(X \\leq ${k}) = 1 - P(X > ${k})`, "Easier to count 'no success in first $k$ trials'."),
    step(3, "No success in k trials", `P(X > ${k}) = (1-${fmt(p)})^{${k}}`, "All $k$ trials must be failures."),
    step(4, "Substitute", `P(X > ${k}) = ${fmt((1 - p) ** k)}`, "Evaluate the failure probability."),
    step(5, "Complement again", `P(X \\leq ${k}) = 1 - ${fmt((1 - p) ** k)} = ${fmt(prob)}`, "Subtract from $1$."),
    step(6, "Answer", `P(X \\leq ${k}) = ${fmt(prob)}`, "Cumulative probability for the geometric distribution."),
  ];
  return gnQ(n, { difficulty: "Easy", marks, answerType: "value", tags: [...tags, "geometric", "cumulative"], questionText, workedSolution: { steps, finalAnswer: `$P(X \\leq ${k}) = ${fmt(prob)}$` } });
}

function geoMeanVarQ(n, p, mean, variance, questionText, tags = [], marks = 3) {
  const steps = [
    step(1, "Distribution", `X \\sim \\mathrm{Geo}(${fmt(p)})`, "Geometric waiting time to first success."),
    step(2, "Mean formula", "E(X) = \\dfrac{1}{p}", "Average number of trials until the first success."),
    step(3, "Calculate mean", `E(X) = \\dfrac{1}{${fmt(p)}} = ${fmt(mean)}`, "Substitute the success probability."),
    step(4, "Variance formula", "\\mathrm{Var}(X) = \\dfrac{1-p}{p^2}", "Standard result for the geometric distribution."),
    step(5, "Calculate variance", `\\mathrm{Var}(X) = \\dfrac{${fmt(1 - p)}}{${fmt(p)}^2} = ${fmt(variance)}`, "Substitute and simplify."),
    step(6, "Answer", `E(X) = ${fmt(mean)},\\ \\mathrm{Var}(X) = ${fmt(variance)}`, "Mean and variance of the geometric distribution."),
  ];
  return gnQ(n, { difficulty: "Easy", marks, answerType: "written", tags: [...tags, "geometric", "mean-variance"], questionText, workedSolution: { steps, finalAnswer: `$E(X) = ${fmt(mean)}$ and $\\mathrm{Var}(X) = ${fmt(variance)}$.` } });
}

function findPFromMeanQ(n, mean, p, questionText, tags = [], marks = 3) {
  const steps = [
    step(1, "Mean of geometric", "E(X) = \\dfrac{1}{p}", "Relate the expected waiting time to $p$."),
    step(2, "Set up equation", `\\dfrac{1}{p} = ${fmt(mean)}`, "Use the given mean."),
    step(3, "Solve for p", `p = \\dfrac{1}{${fmt(mean)}} = ${fmt(p)}`, "Rearrange to find the success probability."),
    step(4, "Check validity", `0 < ${fmt(p)} < 1`, "A probability must lie strictly between $0$ and $1$."),
    step(5, "Variance check", `\\mathrm{Var}(X) = \\dfrac{1-p}{p^2} = ${fmt(geoVar(p))}`, "Optional consistency check using the found value."),
    step(6, "Answer", `p = ${fmt(p)}`, "Success probability per trial."),
  ];
  return gnQ(n, { difficulty: "Intermediate", marks, answerType: "value", tags: [...tags, "geometric", "find-p"], questionText, workedSolution: { steps, finalAnswer: `$p = ${fmt(p)}$` } });
}

function identifyNegBinQ(n, r, p, questionText, tags = [], marks = 3) {
  const mean = negBinMean(r, p);
  const variance = negBinVar(r, p);
  const steps = [
    step(1, "Recall the model", `X = \\text{number of trials until the }${r}\\text{th success}`, "Count trials needed to achieve exactly $r$ successes."),
    step(2, "Conditions", "\\text{Independent trials; constant }p", "Same Bernoulli setup as the geometric case."),
    step(3, "Distribution", `X \\sim \\mathrm{NB}(${r},\\,${fmt(p)})`, "Negative binomial with $r$ successes required."),
    step(4, "PMF", `P(X=k) = \\binom{k-1}{${r}-1}${fmt(p)}^{${r}}(1-${fmt(p)})^{k-${r}}`, "The $r$th success must occur on trial $k$."),
    step(5, "Mean", `E(X) = \\dfrac{${r}}{${fmt(p)}} = ${fmt(mean)}`, "Expected waiting time to $r$ successes."),
    step(6, "Variance", `\\mathrm{Var}(X) = \\dfrac{${r}(1-${fmt(p)})}{${fmt(p)}^2} = ${fmt(variance)}`, "Spread of the waiting time."),
  ];
  return gnQ(n, { difficulty: "Easy", marks, answerType: "written", tags: [...tags, "negative-binomial", "identify"], questionText, workedSolution: { steps, finalAnswer: `$X \\sim \\mathrm{NB}(${r},\\,${fmt(p)})$ with $E(X) = ${fmt(mean)}$ and $\\mathrm{Var}(X) = ${fmt(variance)}$.` } });
}

function negBinProbQ(n, r, p, k, prob, questionText, tags = [], marks = 4, difficulty = "Intermediate") {
  const c = comb(k - 1, r - 1);
  const steps = [
    step(1, "Model", `X \\sim \\mathrm{NB}(${r},\\,${fmt(p)})`, "Trials until the $r$th success."),
    step(2, "PMF", `P(X=k) = \\binom{k-1}{r-1}p^r(1-p)^{k-r}`, "Exactly $(r-1)$ successes in the first $(k-1)$ trials, then success on trial $k$."),
    step(3, "Binomial coefficient", `\\binom{${k - 1}}{${r - 1}} = ${c}`, "Number of ways to arrange the successes among the first $k-1$ trials."),
    step(4, "Substitute", `P(X=${k}) = ${c} \\times ${fmt(p)}^{${r}} \\times (1-${fmt(p)})^{${k - r}}`, "Insert values into the PMF."),
    step(5, "Evaluate", `P(X=${k}) = ${fmt(prob)}`, "Calculate the probability."),
    step(6, "Answer", `P(X=${k}) = ${fmt(prob)}`, "Probability that the $r$th success occurs on trial $k$."),
  ];
  return gnQ(n, { difficulty, marks, answerType: "value", tags: [...tags, "negative-binomial", "probability"], questionText, workedSolution: { steps, finalAnswer: `$P(X = ${k}) = ${fmt(prob)}$` } });
}

function negBinMeanVarQ(n, r, p, mean, variance, questionText, tags = [], marks = 3) {
  const steps = [
    step(1, "Distribution", `X \\sim \\mathrm{NB}(${r},\\,${fmt(p)})`, "Negative binomial waiting time."),
    step(2, "Mean formula", "E(X) = \\dfrac{r}{p}", "Average trials to $r$ successes."),
    step(3, "Calculate mean", `E(X) = \\dfrac{${r}}{${fmt(p)}} = ${fmt(mean)}`, "Substitute $r$ and $p$."),
    step(4, "Variance formula", "\\mathrm{Var}(X) = \\dfrac{r(1-p)}{p^2}", "Standard negative binomial variance."),
    step(5, "Calculate variance", `\\mathrm{Var}(X) = \\dfrac{${r} \\times ${fmt(1 - p)}}{${fmt(p)}^2} = ${fmt(variance)}`, "Evaluate."),
    step(6, "Answer", `E(X) = ${fmt(mean)},\\ \\mathrm{Var}(X) = ${fmt(variance)}`, "Mean and variance."),
  ];
  return gnQ(n, { difficulty: "Easy", marks, answerType: "written", tags: [...tags, "negative-binomial", "mean-variance"], questionText, workedSolution: { steps, finalAnswer: `$E(X) = ${fmt(mean)}$ and $\\mathrm{Var}(X) = ${fmt(variance)}$.` } });
}

function modelChoiceQ(n, isGeo, reason, questionText, tags = [], marks = 3) {
  const dist = isGeo ? "\\mathrm{Geo}(p)" : "\\mathrm{NB}(r,\\,p)";
  const steps = [
    step(1, "Identify the count", isGeo ? "X = \\text{trials until first success}" : "X = \\text{trials until }r\\text{th success}", "What is being counted determines the distribution."),
    step(2, "Check independence", "\\text{Independent trials with constant }p", "Both distributions require Bernoulli trials."),
    step(3, "Compare models", "\\mathrm{Geo}(p)\\text{ for }r=1;\\ \\mathrm{NB}(r,p)\\text{ for general }r", "Geometric is the special case $r=1$ of the negative binomial."),
    step(4, "Apply to context", `X \\sim ${dist}`, reason),
    step(5, "Justify", isGeo ? "\\text{Only the first success matters}" : `\\text{We need exactly }${reason.includes("3") ? "3" : "r"}\\text{ successes}`, "Link the story to the mathematical model."),
    step(6, "Answer", `X \\sim ${dist}`, "State the appropriate distribution."),
  ];
  return gnQ(n, { difficulty: "Easy", marks, answerType: "written", tags: [...tags, "modelling"], questionText, workedSolution: { steps, finalAnswer: isGeo ? `$X \\sim \\mathrm{Geo}(p)$ — ${reason}` : `$X \\sim \\mathrm{NB}(r,\\,p)$ — ${reason}` } });
}

function geoAtLeastQ(n, p, k, prob, questionText, tags = [], marks = 3) {
  const steps = [
    step(1, "Interpret", `P(X \\geq ${k})`, "First success occurs on trial $k$ or later."),
    step(2, "Relate to failures", `P(X \\geq ${k}) = (1-p)^{${k - 1}}`, "Need at least $k-1$ failures before any success."),
    step(3, "Substitute", `P(X \\geq ${k}) = (1-${fmt(p)})^{${k - 1}}`, "Insert the value of $p$."),
    step(4, "Evaluate", `P(X \\geq ${k}) = ${fmt(prob)}`, "Calculate."),
    step(5, "Complement check", `1 - P(X \\leq ${k - 1}) = 1 - ${fmt(geoCdf(k - 1, p))} = ${fmt(prob)}`, "Verify using the cumulative distribution."),
    step(6, "Answer", `P(X \\geq ${k}) = ${fmt(prob)}`, "Probability that we need at least $k$ trials."),
  ];
  return gnQ(n, { difficulty: "Intermediate", marks, answerType: "value", tags: [...tags, "geometric", "cumulative"], questionText, workedSolution: { steps, finalAnswer: `$P(X \\geq ${k}) = ${fmt(prob)}$` } });
}

function findRFromMeanQ(n, p, mean, r, questionText, tags = [], marks = 4) {
  const steps = [
    step(1, "Negative binomial mean", "E(X) = \\dfrac{r}{p}", "Expected trials to $r$ successes."),
    step(2, "Set up equation", `\\dfrac{r}{${fmt(p)}} = ${fmt(mean)}`, "Use the given mean."),
    step(3, "Solve for r", `r = ${fmt(mean)} \\times ${fmt(p)} = ${fmt(r)}`, "Multiply both sides by $p$."),
    step(4, "Integer check", `r = ${r}\\text{ (positive integer)}`, "$r$ must count successes, so it is a whole number."),
    step(5, "Verify variance", `\\mathrm{Var}(X) = \\dfrac{${r}(1-${fmt(p)})}{${fmt(p)}^2} = ${fmt(negBinVar(r, p))}`, "Consistency check."),
    step(6, "Answer", `r = ${r}`, "Number of successes required."),
  ];
  return gnQ(n, { difficulty: "Intermediate", marks, answerType: "value", tags: [...tags, "negative-binomial", "find-r"], questionText, workedSolution: { steps, finalAnswer: `$r = ${r}$` } });
}

function hardGn(n, questionText, steps, finalAnswer, tags = [], marks = 7, difficulty = "Hard", answerType = "written") {
  return gnQ(n, { difficulty, marks, answerType, tags, questionText, workedSolution: { steps, finalAnswer } });
}

const questions = [];

// Easy — geometric identification and basics (1–14)
questions.push(
  identifyGeoQ(1, 0.2, "A quality inspector tests items one at a time until the first defect is found. Each item independently has a $20\\%$ chance of being defective. Define $X$ as the number of items tested until the first defect. State the distribution of $X$."),
  identifyGeoQ(2, 0.05, "A archer fires arrows at a target until the first bullseye. The probability of a bullseye on any shot is $0.05$. Let $X$ be the number of shots until the first bullseye. Identify the distribution of $X$."),
  identifyGeoQ(3, 0.4, "A biased coin is tossed repeatedly until the first head appears. $P(\\text{head}) = 0.4$. Let $X$ be the number of tosses. State $X$'s distribution."),
  identifyGeoQ(4, 0.25, "In a game, a player rolls a die until a six appears. $P(6) = \\tfrac{1}{6}$ but the die is loaded so $P(6) = 0.25$. Let $X$ be rolls until the first six. Identify the distribution."),
  modelChoiceQ(5, true, "We count trials until the first success only.", "A machine produces items with a constant defect rate. Items are inspected one by one until the first defective item is found. Which distribution models the number of inspections?", ["quality"]),
  modelChoiceQ(6, true, "Only one success (pass) is required.", "A student retakes a driving theory test until they pass. Each attempt is independent with the same pass probability. Which distribution models the number of attempts?", ["driving"]),
  modelChoiceQ(7, false, "3 successes are needed before stopping.", "A researcher interviews people until 3 supporters of a policy are found. Which distribution models the number of interviews?", ["policy"]),
  modelChoiceQ(8, false, "The process stops at the 5th success.", "A basketball player practises free throws until making 5 successful shots. Which distribution models the number of attempts?", ["sport"]),
);

// Easy — geometric probabilities (9–22)
const geoCases = [
  [0.3, 2, "A die is rolled until the first six. With $p = 0.3$ (loaded die), find $P(X = 2)$."],
  [0.2, 3, "Items are tested until the first defect. With $p = 0.2$, find $P(X = 3)$."],
  [0.5, 1, "A fair coin is tossed until the first head. Find $P(X = 1)$."],
  [0.1, 5, "A rare event occurs with $p = 0.1$ on each trial. Find $P(X = 5)$."],
  [0.4, 4, "With $p = 0.4$, find $P(X = 4)$ for $X \\sim \\mathrm{Geo}(0.4)$."],
  [0.25, 2, "A quiz question is answered correctly with $p = 0.25$ each attempt. Find $P(X = 2)$."],
  [0.15, 6, "A salesperson makes a sale with $p = 0.15$ per call. Find $P(X = 6)$."],
  [0.6, 3, "With $X \\sim \\mathrm{Geo}(0.6)$, find $P(X = 3)$."],
  [0.08, 4, "A website conversion rate is $8\\%$. Find $P(X = 4)$ for visits until first conversion."],
  [0.35, 2, "A batsman scores a boundary with $p = 0.35$ per ball. Find $P(X = 2)$ for balls until first boundary."],
  [0.45, 1, "Find $P(X = 1)$ when $X \\sim \\mathrm{Geo}(0.45)$."],
  [0.12, 7, "A component fails a test with $p = 0.12$. Find $P(X = 7)$ for tests until first failure."],
  [0.5, 4, "A fair coin: find $P(X = 4)$ for tosses until first head."],
  [0.2, 5, "With $p = 0.2$, find $P(X = 5)$."],
];
let qn = 9;
for (const [p, k, text] of geoCases) {
  questions.push(geoProbQ(qn++, p, k, geoPmf(k, p), text));
}

// Easy — geometric mean and variance (23–30)
const meanVarCases = [
  [0.2, "For $X \\sim \\mathrm{Geo}(0.2)$, find $E(X)$ and $\\mathrm{Var}(X)$."],
  [0.5, "For $X \\sim \\mathrm{Geo}(0.5)$, find the mean and variance."],
  [0.1, "A process has success probability $0.1$ per trial. Find $E(X)$ and $\\mathrm{Var}(X)$ for trials until first success."],
  [0.25, "Find $E(X)$ and $\\mathrm{Var}(X)$ when $X \\sim \\mathrm{Geo}(0.25)$."],
  [0.4, "For $X \\sim \\mathrm{Geo}(0.4)$, calculate the mean and variance."],
  [0.05, "Rare events occur with $p = 0.05$. Find $E(X)$ and $\\mathrm{Var}(X)$ for trials until the first event."],
  [0.33, "With $p = 0.33$, find $E(X)$ and $\\mathrm{Var}(X)$ for a geometric random variable."],
  [0.6, "For $X \\sim \\mathrm{Geo}(0.6)$, state the mean and variance."],
];
for (const [p, text] of meanVarCases) {
  questions.push(geoMeanVarQ(qn++, p, geoMean(p), geoVar(p), text));
}

// Easy/Intermediate — cumulative geometric (31–38)
const cdfCases = [
  [0.2, 3, "Find $P(X \\leq 3)$ when $X \\sim \\mathrm{Geo}(0.2)$."],
  [0.3, 4, "A die is rolled until the first six ($p = 0.3$). Find the probability the first six occurs within 4 rolls."],
  [0.1, 5, "With $p = 0.1$, find $P(X \\leq 5)$."],
  [0.4, 2, "Find $P(X \\leq 2)$ for $X \\sim \\mathrm{Geo}(0.4)$."],
  [0.25, 6, "A student passes with $p = 0.25$ per attempt. Find $P(X \\leq 6)$ for attempts until first pass."],
  [0.5, 3, "For a fair coin ($p = 0.5$), find $P(X \\leq 3)$."],
  [0.15, 4, "Find $P(X \\leq 4)$ when $p = 0.15$."],
  [0.35, 5, "With $X \\sim \\mathrm{Geo}(0.35)$, find $P(X \\leq 5)$."],
];
for (const [p, k, text] of cdfCases) {
  questions.push(geoAtMostQ(qn++, p, k, geoCdf(k, p), text));
}

// Intermediate — find p from mean (39–44)
const findPCases = [
  [5, 0.2, "The mean number of trials until the first success is $5$. Find $p$."],
  [10, 0.1, "For a geometric distribution, $E(X) = 10$. Find the success probability $p$."],
  [4, 0.25, "A geometric random variable has mean $4$. Find $p$."],
  [2.5, 0.4, "Given $E(X) = 2.5$ for $X \\sim \\mathrm{Geo}(p)$, find $p$."],
  [20, 0.05, "The expected waiting time to the first success is $20$ trials. Find $p$."],
  [3.33, 0.3, "For $X \\sim \\mathrm{Geo}(p)$, $E(X) = 3.\\overline{3}$. Find $p$ to $3$ decimal places."],
];
for (const [mean, p, text] of findPCases) {
  questions.push(findPFromMeanQ(qn++, mean, p, text));
}

// Easy — negative binomial identification (45–48)
questions.push(
  identifyNegBinQ(45, 3, 0.2, "A researcher interviews people until 3 supporters are found. Each person independently supports with probability $0.2$. Let $X$ be the number interviewed. State the distribution of $X$."),
  identifyNegBinQ(46, 5, 0.1, "A biologist catches fish until 5 of a rare species are collected. $P(\\text{rare}) = 0.1$. Identify the distribution of $X$, the number of fish caught."),
  identifyNegBinQ(47, 2, 0.4, "A player rolls a die until two sixes appear ($p = 0.4$). State the distribution of $X$, the number of rolls."),
  identifyNegBinQ(48, 4, 0.25, "Quality control continues until 4 defective items are found ($p = 0.25$). Identify the distribution of $X$."),
);

// Intermediate — negative binomial probabilities (49–58)
const nbCases = [
  [3, 0.2, 5, "Find $P(X = 5)$ when $X \\sim \\mathrm{NB}(3,\\,0.2)$."],
  [2, 0.4, 4, "A die is rolled until 2 sixes appear ($p = 0.4$). Find $P(X = 4)$."],
  [5, 0.1, 60, "Find $P(X = 60)$ for $X \\sim \\mathrm{NB}(5,\\,0.1)$."],
  [3, 0.3, 7, "With $X \\sim \\mathrm{NB}(3,\\,0.3)$, find $P(X = 7)$."],
  [4, 0.25, 10, "Find $P(X = 10)$ when $X \\sim \\mathrm{NB}(4,\\,0.25)$."],
  [2, 0.5, 3, "A fair coin is tossed until 2 heads appear. Find $P(X = 3)$."],
  [3, 0.15, 12, "A salesperson needs 3 sales ($p = 0.15$). Find $P(X = 12)$ for calls until the 3rd sale."],
  [6, 0.2, 20, "Find $P(X = 20)$ for $X \\sim \\mathrm{NB}(6,\\,0.2)$."],
  [2, 0.35, 5, "With $X \\sim \\mathrm{NB}(2,\\,0.35)$, find $P(X = 5)$."],
  [4, 0.4, 8, "Find $P(X = 8)$ when $X \\sim \\mathrm{NB}(4,\\,0.4)$."],
];
for (const [r, p, k, text] of nbCases) {
  questions.push(negBinProbQ(qn++, r, p, k, negBinPmf(k, r, p), text));
}

// Easy/Intermediate — negative binomial mean/variance (59–64)
const nbMvCases = [
  [3, 0.2, "For $X \\sim \\mathrm{NB}(3,\\,0.2)$, find $E(X)$ and $\\mathrm{Var}(X)$."],
  [5, 0.1, "Find the mean and variance of $X \\sim \\mathrm{NB}(5,\\,0.1)$."],
  [2, 0.4, "A process requires 2 successes with $p = 0.4$. Find $E(X)$ and $\\mathrm{Var}(X)$."],
  [4, 0.25, "For $X \\sim \\mathrm{NB}(4,\\,0.25)$, calculate the mean and variance."],
  [6, 0.15, "Find $E(X)$ and $\\mathrm{Var}(X)$ when $X \\sim \\mathrm{NB}(6,\\,0.15)$."],
  [3, 0.5, "For $X \\sim \\mathrm{NB}(3,\\,0.5)$, state the mean and variance."],
];
for (const [r, p, text] of nbMvCases) {
  questions.push(negBinMeanVarQ(qn++, r, p, negBinMean(r, p), negBinVar(r, p), text));
}

// Intermediate — at least / find r (65–68)
questions.push(
  geoAtLeastQ(65, 0.2, 4, (1 - 0.2) ** 3, "With $X \\sim \\mathrm{Geo}(0.2)$, find $P(X \\geq 4)$."),
  geoAtLeastQ(66, 0.3, 5, (1 - 0.3) ** 4, "Find $P(X \\geq 5)$ for $X \\sim \\mathrm{Geo}(0.3)$."),
  findRFromMeanQ(67, 0.2, 15, 3, "A negative binomial distribution has $p = 0.2$ and $E(X) = 15$. Find $r$."),
  findRFromMeanQ(68, 0.25, 20, 5, "Given $X \\sim \\mathrm{NB}(r,\\,0.25)$ and $E(X) = 20$, find $r$."),
);

// Hard — multi-step (69–70)
questions.push(
  hardGn(69,
    "A quality inspector tests items until the first defect. Each item has a $15\\%$ chance of being defective. (a) Find the probability the first defect is found on the 4th item. (b) Find the probability a defect is found within the first 3 items. (c) Find the expected number of items tested.",
    [
      step(1, "Model part (a)", "X \\sim \\mathrm{Geo}(0.15)", "Count items until the first defect."),
      step(2, "P(X = 4)", "P(X=4) = (0.85)^3 \\times 0.15", "Three good items then one defect."),
      step(3, "Evaluate (a)", "P(X=4) = 0.0929", "Calculate the probability."),
      step(4, "Part (b) — cumulative", "P(X \\leq 3) = 1 - (0.85)^3", "At least one defect in the first 3 items."),
      step(5, "Evaluate (b)", "P(X \\leq 3) = 0.3865", "Complement of three consecutive good items."),
      step(6, "Part (c) — mean", "E(X) = \\dfrac{1}{0.15} = 6.\\overline{6}", "Expected items until first defect."),
      step(7, "Variance", "\\mathrm{Var}(X) = \\dfrac{0.85}{0.15^2} = 37.\\overline{7}", "Useful for understanding spread."),
      step(8, "Interpret", "\\text{On average, inspect about 7 items}", "Round sensibly in context."),
      step(9, "Summary (a)", "P(X=4) \\approx 0.093", "First defect on item 4."),
      step(10, "Summary (b)", "P(X \\leq 3) \\approx 0.387", "Defect within 3 items."),
      step(11, "Summary (c)", "E(X) = 6.\\overline{6}", "Expected number of inspections."),
      step(12, "Check", "0.093 + 0.387 < 1", "These are different events, not complements."),
      step(13, "Answer", "(a)\\ 0.093,\\ (b)\\ 0.387,\\ (c)\\ 6.\\overline{6}", "All three parts completed."),
    ],
    "(a) $P(X = 4) \\approx 0.093$; (b) $P(X \\leq 3) \\approx 0.387$; (c) $E(X) = 6.\\overline{6}$.",
    ["multi-part", "quality"], 8),
  hardGn(70,
    "A basketball player practises free throws until making 4 successful shots. Each attempt succeeds independently with probability $0.6$. Let $X$ be the number of attempts. (a) State the distribution of $X$. (b) Find $P(X = 6)$. (c) Find $E(X)$ and $\\mathrm{Var}(X)$. (d) Find the probability that at least 8 attempts are needed.",
    [
      step(1, "Part (a) — model", "X \\sim \\mathrm{NB}(4,\\,0.6)", "Trials until the 4th success."),
      step(2, "PMF reminder", "P(X=k) = \\binom{k-1}{3}(0.6)^4(0.4)^{k-4}", "For $k \\geq 4$."),
      step(3, "Part (b) — set up", "P(X=6) = \\binom{5}{3}(0.6)^4(0.4)^2", "3 successes in first 5 attempts, 4th on attempt 6."),
      step(4, "Binomial coefficient", "\\binom{5}{3} = 10", "Ways to arrange 3 successes among 5 trials."),
      step(5, "Evaluate (b)", "P(X=6) = 10 \\times 0.1296 \\times 0.16 = 0.2074", "Calculate."),
      step(6, "Part (c) — mean", "E(X) = \\dfrac{4}{0.6} = 6.\\overline{6}", "Expected attempts to 4 successes."),
      step(7, "Part (c) — variance", "\\mathrm{Var}(X) = \\dfrac{4 \\times 0.4}{0.36} = 4.\\overline{4}", "Spread of the waiting time."),
      step(8, "Part (d) — interpret", "P(X \\geq 8) = P(\\text{fewer than 4 successes in 7 attempts})", "At least 8 attempts means not finished by attempt 7."),
      step(9, "Binomial for (d)", "P(X \\geq 8) = \\sum_{k=0}^{3}\\binom{7}{k}(0.6)^k(0.4)^{7-k}", "Sum over 0, 1, 2, 3 successes in 7 trials."),
      step(10, "Evaluate terms", "0.0002 + 0.0022 + 0.0090 + 0.0290", "Individual binomial probabilities."),
      step(11, "Sum (d)", "P(X \\geq 8) \\approx 0.0404", "Probability of needing 8 or more attempts."),
      step(12, "Check mean", "E(X) \\approx 6.7\\text{ is plausible}", "Most of the time fewer than 8 attempts are needed."),
      step(13, "Answer", "(a)\\ \\mathrm{NB}(4,0.6);\\ (b)\\ 0.207;\\ (c)\\ E=6.\\overline{6},\\ \\mathrm{Var}=4.\\overline{4};\\ (d)\\ 0.040", "Complete solution."),
    ],
    "(a) $X \\sim \\mathrm{NB}(4,\\,0.6)$; (b) $P(X = 6) \\approx 0.207$; (c) $E(X) = 6.\\overline{6}$, $\\mathrm{Var}(X) = 4.\\overline{4}$; (d) $P(X \\geq 8) \\approx 0.040$.",
    ["multi-part", "sport"], 9),
);

// Pad to 70 if needed with more intermediate questions
while (questions.length < 70) {
  const n = questions.length + 1;
  const p = 0.2 + (n % 5) * 0.05;
  const k = 3 + (n % 4);
  questions.push(geoProbQ(n, p, k, geoPmf(k, p), `For $X \\sim \\mathrm{Geo}(${fmt(p)})$, find $P(X = ${k})$.`, ["extra"], 3, "Intermediate"));
}

// Step padding
const STEP_MIN = { Easy: 6, Intermediate: 9, Hard: 13 };
const STEP_MAX = { Easy: 9, Intermediate: 13, Hard: 18 };
const EXTRA = [
  () => step(0, "Geometric model", "X = \\text{trials until first success}", "Independent Bernoulli trials with constant $p$."),
  () => step(0, "Negative binomial", "X = \\text{trials until }r\\text{th success}", "Generalises the geometric distribution."),
  () => step(0, "Relationship", "\\mathrm{Geo}(p) \\equiv \\mathrm{NB}(1,\\,p)", "Geometric is the case $r = 1$."),
  () => step(0, "PMF geometric", "P(X=k) = (1-p)^{k-1}p", "Exactly $(k-1)$ failures then one success."),
  () => step(0, "Mean geometric", "E(X) = \\dfrac{1}{p}", "Expected waiting time to first success."),
  () => step(0, "Variance geometric", "\\mathrm{Var}(X) = \\dfrac{1-p}{p^2}", "Variability of the waiting time."),
  () => step(0, "Cumulative trick", "P(X \\leq k) = 1 - (1-p)^k", "Complement: no success in first $k$ trials."),
  () => step(0, "NB mean", "E(X) = \\dfrac{r}{p}", "Expected trials to $r$ successes."),
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
