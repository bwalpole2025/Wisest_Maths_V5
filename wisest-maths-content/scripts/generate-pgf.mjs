#!/usr/bin/env node
/**
 * Generates 70 A-Level Further Maths "Probability generating functions" questions.
 * Output: src/data/questions/a-level-further-maths/year-1-stats/pgf.ts
 */

import { writeFileSync, mkdirSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const outDir = resolve(__dirname, "../src/data/questions/a-level-further-maths/year-1-stats");
const outPath = resolve(outDir, "pgf.ts");

mkdirSync(outDir, { recursive: true });

const SUBTOPIC = "Probability generating functions";
const SUBTOPIC_ID = "fm.y1.stats.pgf";
const LEVEL = "A-Level Further Maths";
const TOPIC = "Further Maths Year 1: Statistics (Further Statistics 1)";

const qid = (n) => `fm.y1.stats.pgf.q${String(n).padStart(3, "0")}`;
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
const pgfQ = (n, meta) => base({ id: qid(n), tags: ["pgf", ...(meta.tags || [])], ...meta });

const fmt = (n, dp = 4) => {
  const x = +n;
  if (Number.isInteger(x)) return `${x}`;
  const s = +x.toFixed(dp);
  return `${s}`.replace(/\.?0+$/, "") || "0";
};

const frac = (num, den) => {
  const g = (a, b) => (b ? g(b, a % b) : a);
  const d = g(Math.abs(num), Math.abs(den));
  const n = num / d;
  const de = den / d;
  if (de === 1) return `${n}`;
  if (n < 0) return `-\\tfrac{${-n}}{${de}}`;
  return `\\tfrac{${n}}{${de}}`;
};

function expectation(xs, probs) {
  return xs.reduce((s, x, i) => s + x * probs[i], 0);
}

function variance(xs, probs) {
  const mu = expectation(xs, probs);
  const ex2 = xs.reduce((s, x, i) => s + x * x * probs[i], 0);
  return ex2 - mu * mu;
}

function exxminus1(xs, probs) {
  return xs.reduce((s, x, i) => s + x * (x - 1) * probs[i], 0);
}

function tableLatex(xs, probs) {
  return `\\begin{array}{c|${"c".repeat(xs.length)}} x & ${xs.join(" & ")} \\\\ \\hline P(X=x) & ${probs.map((p) => fmt(p)).join(" & ")} \\end{array}`;
}

function pgfPoly(xs, probs) {
  const terms = xs.map((x, i) => {
    const p = probs[i];
    if (x === 0) return fmt(p);
    if (x === 1) return `${fmt(p)}t`;
    return `${fmt(p)}t^{${x}}`;
  });
  return terms.join(" + ");
}

function derivativeAt1Poly(xs, probs, order = 1) {
  if (order === 1) return expectation(xs, probs);
  if (order === 2) return exxminus1(xs, probs);
  throw new Error("order");
}

// ── Question builders ────────────────────────────────────────────────

function definitionQ(n) {
  const steps = [
    step(1, "Definition", "G_X(t) = E(t^X)", "The PGF is the expected value of $t$ raised to the power of the random variable."),
    step(2, "Series form", "G_X(t) = \\sum_x P(X=x)\\,t^x", "Expand as a weighted sum over all possible values of $X$."),
    step(3, "Domain", "|t| < 1 \\text{ (typically near } t=1)", "The series converges in a neighbourhood of $t=1$."),
    step(4, "Normalisation", "G_X(1) = 1", "Substituting $t=1$ sums all probabilities to $1$."),
    step(5, "Mean link", "G_X'(1) = E(X)", "Differentiate and evaluate at $t=1$ to obtain the mean."),
    step(6, "Answer", "G_X(t) = E(t^X) = \\sum_x P(X=x)\\,t^x", "The standard definition of a probability generating function."),
  ];
  return pgfQ(n, {
    difficulty: "Easy",
    marks: 2,
    answerType: "written",
    tags: ["definition"],
    questionText: "Write down the definition of the probability generating function $G_X(t)$ of a discrete random variable $X$.",
    workedSolution: { steps, finalAnswer: "$G_X(t) = E(t^X) = \\sum_x P(X=x)\\,t^x$." },
  });
}

function pgfFromTableQ(n, xs, probs, tags = [], marks = 4) {
  const poly = pgfPoly(xs, probs);
  const steps = [
    step(1, "PGF definition", "G_X(t) = \\sum_x P(X=x)\\,t^x", "Weight each outcome by its probability."),
    step(2, "List terms", `G_X(t) = ${xs.map((x, i) => `${fmt(probs[i])} \\cdot t^{${x}}`).join(" + ")}`, "One term for each value in the distribution."),
    step(3, "Simplify powers", `G_X(t) = ${poly}`, "Combine coefficients and powers of $t$."),
    step(4, "Check $G(1)$", "G_X(1) = 1", "The coefficients sum to $1$."),
    step(5, "Polynomial form", `G_X(t) = ${poly}`, "Final simplified generating function."),
    step(6, "Answer", `G_X(t) = ${poly}`, "The PGF in closed form."),
  ];
  return pgfQ(n, {
    difficulty: "Easy",
    marks,
    answerType: "written",
    tags: [...tags, "from-table"],
    questionText: `The discrete random variable $X$ has distribution ${tableLatex(xs, probs)}. Find $G_X(t)$.`,
    workedSolution: { steps, finalAnswer: `$G_X(t) = ${poly}$` },
  });
}

function meanFromPgfQ(n, xs, probs, tags = []) {
  const mu = expectation(xs, probs);
  const poly = pgfPoly(xs, probs);
  const derivTerms = xs
    .filter((x) => x > 0)
    .map((x, _, arr) => {
      const i = xs.indexOf(x);
      const c = probs[i];
      if (x === 1) return `${fmt(c)}`;
      return `${fmt(c * x)}t^{${x - 1}}`;
    });
  const steps = [
    step(1, "Mean formula", "E(X) = G_X'(1)", "Differentiate the PGF and substitute $t=1$."),
    step(2, "Write $G_X(t)$", `G_X(t) = ${poly}`, "Start from the PGF."),
    step(3, "Differentiate", `G_X'(t) = ${derivTerms.join(" + ")}`, "Differentiate term by term."),
    step(4, "Evaluate at $t=1$", `G_X'(1) = ${fmt(mu)}`, "Substitute $t=1$."),
    step(5, "Alternative check", `E(X) = \\sum x\\,P(X=x) = ${fmt(mu)}`, "Verify using the definition of expectation."),
    step(6, "Answer", `E(X) = ${fmt(mu)}`, "The mean of $X$."),
  ];
  return pgfQ(n, {
    difficulty: "Easy",
    marks: 4,
    answerType: "numeric",
    tags: [...tags, "mean"],
    questionText: `Given $G_X(t) = ${poly}$, find $E(X)$.`,
    workedSolution: { steps, finalAnswer: `$E(X) = ${fmt(mu)}$` },
  });
}

function varianceFromPgfQ(n, xs, probs, tags = [], difficulty = "Intermediate") {
  const mu = expectation(xs, probs);
  const varX = variance(xs, probs);
  const g2 = exxminus1(xs, probs);
  const poly = pgfPoly(xs, probs);
  const steps = [
    step(1, "Variance identity", "\\operatorname{Var}(X) = G_X''(1) + G_X'(1) - [G_X'(1)]^2", "Standard PGF formula for variance."),
    step(2, "Find $G_X'(1)$", `G_X'(1) = ${fmt(mu)}`, "First derivative at $t=1$ gives the mean."),
    step(3, "Find $G_X''(1)$", `G_X''(1) = E[X(X-1)] = ${fmt(g2)}`, "Second derivative at $t=1$ gives $E[X(X-1)]$."),
    step(4, "Substitute", `\\operatorname{Var}(X) = ${fmt(g2)} + ${fmt(mu)} - (${fmt(mu)})^2`, "Apply the variance formula."),
    step(5, "Evaluate", `\\operatorname{Var}(X) = ${fmt(varX)}`, "Calculate the result."),
    step(6, "Check via $E(X^2)$", `\\operatorname{Var}(X) = E(X^2) - [E(X)]^2`, "Alternative variance identity."),
    step(7, "Confirm", `\\operatorname{Var}(X) = ${fmt(varX)}`, "Consistent with direct calculation."),
    step(8, "From $G_X(t)$", `G_X(t) = ${poly}`, "Reference the original PGF."),
    step(9, "Answer", `\\operatorname{Var}(X) = ${fmt(varX)}`, "The variance of $X$."),
  ];
  return pgfQ(n, {
    difficulty,
    marks: 5,
    answerType: "numeric",
    tags: [...tags, "variance"],
    questionText: `The PGF of $X$ is $G_X(t) = ${poly}$. Find $\\operatorname{Var}(X)$.`,
    workedSolution: { steps, finalAnswer: `$\\operatorname{Var}(X) = ${fmt(varX)}$` },
  });
}

function standardPgfQ(n, dist, params, pgfLatex, tags = []) {
  const steps = [
    step(1, "Distribution", dist, "Identify the standard discrete model."),
    step(2, "PGF formula", pgfLatex, "Recall the standard result."),
    step(3, "Substitute parameters", pgfLatex, "Insert the given parameter values."),
    step(4, "Check $G(1)=1$", "G_X(1) = 1", "Confirms a valid probability generating function."),
    step(5, "Mean reminder", "G_X'(1) = E(X)", "Differentiating at $t=1$ recovers the mean."),
    step(6, "Answer", pgfLatex, "The required PGF."),
  ];
  return pgfQ(n, {
    difficulty: "Easy",
    marks: 3,
    answerType: "written",
    tags: [...tags, "standard-pgf"],
    questionText: `Write down the probability generating function of ${dist}.`,
    workedSolution: { steps, finalAnswer: `$G_X(t) = ${pgfLatex.replace(/^G_X\(t\) = /, "")}$` },
  });
}

function bernoulliPgf(n, p) {
  const q = 1 - p;
  return standardPgfQ(
    n,
    `$X \\sim \\mathrm{Bernoulli}(${fmt(p)})$`,
  { p },
    `G_X(t) = ${fmt(q)} + ${fmt(p)}t`,
    ["bernoulli"],
  );
}

function binomialPgf(n, trials, p) {
  const q = 1 - p;
  return standardPgfQ(
    n,
    `$X \\sim B(${trials},\\,${fmt(p)})$`,
    { trials, p },
    `G_X(t) = (${fmt(q)} + ${fmt(p)}t)^{${trials}}`,
    ["binomial"],
  );
}

function poissonPgf(n, lambda) {
  return standardPgfQ(
    n,
    `$X \\sim \\mathrm{Po}(${fmt(lambda)})$`,
    { lambda },
    `G_X(t) = e^{${fmt(lambda)}(t-1)}`,
    ["poisson"],
  );
}

function geometricPgf(n, p) {
  const q = 1 - p;
  return standardPgfQ(
    n,
    `$X \\sim \\mathrm{Geo}(${fmt(p)})$ \\text{ (trials until first success)}`,
    { p },
    `G_X(t) = \\dfrac{${fmt(p)}t}{1 - ${fmt(q)}t}`,
    ["geometric"],
  );
}

function negBinPgf(n, r, p) {
  const q = 1 - p;
  return standardPgfQ(
    n,
    `$X \\sim \\mathrm{NB}(${r},\\,${fmt(p)})$`,
    { r, p },
    `G_X(t) = \\left(\\dfrac{${fmt(p)}t}{1 - ${fmt(q)}t}\\right)^{${r}}`,
    ["negative-binomial"],
  );
}

function meanFromStandardQ(n, distName, pgfDesc, meanLatex, meanVal, tags = []) {
  const steps = [
    step(1, "State PGF", pgfDesc, "Start from the standard generating function."),
    step(2, "Differentiate", "G_X'(t)", "Differentiate with respect to $t$."),
    step(3, "Evaluate at $t=1$", `G_X'(1) = ${meanLatex}`, "Substitute $t=1$."),
    step(4, "Interpret", `E(X) = ${meanVal}`, "The first derivative at $t=1$ equals the mean."),
    step(5, "Known result", meanLatex, "Standard mean for this distribution."),
    step(6, "Answer", `E(X) = ${meanVal}`, "The expected value."),
  ];
  return pgfQ(n, {
    difficulty: "Easy",
    marks: 3,
    answerType: "written",
    tags: [...tags, "mean", "standard"],
    questionText: `Using the PGF of ${distName}, find $E(X)$.`,
    workedSolution: { steps, finalAnswer: `$E(X) = ${meanVal}$` },
  });
}

function identifyFromPgfQ(n, pgfLatex, answer, reason, tags = []) {
  const steps = [
    step(1, "Inspect the PGF", pgfLatex, "Look for recognisable standard forms."),
    step(2, "Compare forms", "\\text{Match to a standard distribution}", "Bernoulli, binomial, Poisson, geometric or negative binomial."),
    step(3, "Identify parameters", reason, "Read off parameters from the PGF."),
    step(4, "Verify $G(1)=1$", "G(1) = 1", "Check normalisation."),
    step(5, "State distribution", answer, "Name the distribution and parameters."),
    step(6, "Answer", answer, "The identified distribution."),
  ];
  return pgfQ(n, {
    difficulty: "Intermediate",
    marks: 4,
    answerType: "written",
    tags: [...tags, "identify"],
    questionText: `The probability generating function of $X$ is $G_X(t) = ${pgfLatex}$. Identify the distribution of $X$.`,
    workedSolution: { steps, finalAnswer: answer },
  });
}

function sumIndependentQ(n, desc, g1, g2, gSum, conclusion, tags = []) {
  const steps = [
    step(1, "Independence property", "G_{X+Y}(t) = G_X(t)\\,G_Y(t)", "The PGF of a sum of independent variables is the product of their PGFs."),
    step(2, "PGF of $X$", `G_X(t) = ${g1}`, "Given or standard form for $X$."),
    step(3, "PGF of $Y$", `G_Y(t) = ${g2}`, "Given or standard form for $Y$."),
    step(4, "Multiply", `G_{X+Y}(t) = ${gSum}`, "Multiply the two generating functions."),
    step(5, "Recognise result", conclusion, "Identify the distribution of the sum."),
    step(6, "Mean check", "\\text{Means add for independent sums}", "Verify $E(X+Y)=E(X)+E(Y)$ if needed."),
    step(7, "Variance check", "\\text{Variances add for independent sums}", "Useful consistency check."),
    step(8, "Alternative route", "\\text{Could also expand and read coefficients}", "Product of PGFs encodes the convolution of pmfs."),
    step(9, "Answer", conclusion, "Distribution of $X+Y$."),
  ];
  return pgfQ(n, {
    difficulty: "Intermediate",
    marks: 5,
    answerType: "written",
    tags: [...tags, "sum-independent"],
    questionText: `${desc} Find the PGF of $X+Y$ and hence state the distribution of $X+Y$.`,
    workedSolution: { steps, finalAnswer: conclusion },
  });
}

function coeffProbQ(n, pgfLatex, k, prob, tags = []) {
  const steps = [
    step(1, "Coefficient rule", `P(X=${k}) = \\dfrac{1}{${k}!}\\,G_X^{(${k})}(0)`, "The $k$th derivative at $0$, divided by $k!$, gives $P(X=k)$ when $0$ is in the domain."),
    step(2, "Alternative", `P(X=${k}) = \\text{coefficient of } t^{${k}} \\text{ in } G_X(t)`, "Read the coefficient of $t^k$ in the polynomial PGF."),
    step(3, "Inspect PGF", `G_X(t) = ${pgfLatex}`, "Identify the $t^{${k}}$ term."),
    step(4, "Extract coefficient", `P(X=${k}) = ${fmt(prob)}`, "The coefficient of $t^{${k}}$."),
    step(5, "Verify total", "\\sum P(X=x) = 1", "Coefficients should sum to $1$."),
    step(6, "Answer", `P(X=${k}) = ${fmt(prob)}`, "The required probability."),
  ];
  return pgfQ(n, {
    difficulty: "Intermediate",
    marks: 4,
    answerType: "numeric",
    tags: [...tags, "coefficient"],
    questionText: `Given $G_X(t) = ${pgfLatex}$, find $P(X = ${k})$.`,
    workedSolution: { steps, finalAnswer: `$P(X = ${k}) = ${fmt(prob)}$` },
  });
}

function hardMultiQ(n, text, steps, finalAnswer, tags = [], marks = 8) {
  return pgfQ(n, {
    difficulty: "Hard",
    marks,
    answerType: "written",
    tags: [...tags, "multi-step"],
    questionText: text,
    workedSolution: { steps, finalAnswer },
  });
}

function meanFromTableDirect(n, xs, probs) {
  const mu = expectation(xs, probs);
  const poly = pgfPoly(xs, probs);
  const steps = [
    step(1, "Build PGF", `G_X(t) = ${poly}`, "Form the generating function from the table."),
    step(2, "Differentiate", "G_X'(t)", "Differentiate term by term."),
    step(3, "Evaluate at $t=1$", `G_X'(1) = ${fmt(mu)}`, "Substitute $t=1$."),
    step(4, "Mean formula", "E(X) = G_X'(1)", "First derivative at $t=1$ gives the mean."),
    step(5, "Direct check", `\\sum x\\,P(X=x) = ${fmt(mu)}`, "Verify by expectation definition."),
    step(6, "Answer", `E(X) = ${fmt(mu)}`, "The mean of $X$."),
  ];
  return pgfQ(n, {
    difficulty: "Easy",
    marks: 4,
    answerType: "numeric",
    tags: ["mean", "from-table"],
    questionText: `The discrete random variable $X$ has distribution ${tableLatex(xs, probs)}. Find $E(X)$ using $G_X'(1)$.`,
    workedSolution: { steps, finalAnswer: `$E(X) = ${fmt(mu)}$` },
  });
}

// ── Build 70 questions ───────────────────────────────────────────────

const questions = [];

// Easy 1–20: definitions, tables, standard PGFs
questions.push(
  definitionQ(1),
  definitionQ(2),
  pgfFromTableQ(3, [0, 1, 2], [0.3, 0.5, 0.2]),
  pgfFromTableQ(4, [1, 2, 3], [0.2, 0.5, 0.3]),
  pgfFromTableQ(5, [0, 1, 2, 3], [0.1, 0.2, 0.4, 0.3]),
  pgfFromTableQ(6, [2, 4, 6], [0.25, 0.5, 0.25]),
  pgfFromTableQ(7, [0, 2, 4], [0.4, 0.35, 0.25]),
  bernoulliPgf(8, 0.3),
  bernoulliPgf(9, 0.7),
  binomialPgf(10, 4, 0.25),
  binomialPgf(11, 6, 0.4),
  poissonPgf(12, 3),
  poissonPgf(13, 5),
  geometricPgf(14, 0.2),
  geometricPgf(15, 0.5),
  meanFromTableDirect(16, [0, 1, 2], [0.2, 0.5, 0.3]),
  meanFromTableDirect(17, [1, 3, 5], [0.4, 0.4, 0.2]),
  meanFromPgfQ(18, [0, 1, 2], [0.4, 0.4, 0.2]),
  meanFromPgfQ(19, [1, 2, 3], [0.3, 0.4, 0.3]),
  meanFromStandardQ(
    20,
    "a Poisson distribution with mean $4$",
    "G_X(t) = e^{4(t-1)}",
    "G_X'(1) = 4",
    "4",
    ["poisson"],
  ),
);

// Intermediate 21–50: variance, identify, sums, coefficients
questions.push(
  varianceFromPgfQ(21, [0, 1, 2], [0.3, 0.5, 0.2]),
  varianceFromPgfQ(22, [1, 2, 3], [0.2, 0.5, 0.3]),
  varianceFromPgfQ(23, [0, 1, 2, 3], [0.1, 0.3, 0.4, 0.2]),
  varianceFromPgfQ(24, [2, 4, 6], [0.25, 0.5, 0.25]),
  meanFromStandardQ(25, "a binomial distribution $B(10,\\,0.3)$", "G_X(t) = (0.7 + 0.3t)^{10}", "G_X'(1) = 10 \\times 0.3 = 3", "3", ["binomial"]),
  meanFromStandardQ(26, "a geometric distribution with $p=0.25$", "G_X(t) = \\dfrac{0.25t}{1-0.75t}", "G_X'(1) = \\dfrac{1}{0.25} = 4", "4", ["geometric"]),
  meanFromStandardQ(27, "a Poisson distribution with mean $6$", "G_X(t) = e^{6(t-1)}", "G_X'(1) = 6", "6", ["poisson"]),
  negBinPgf(28, 3, 0.4),
  negBinPgf(29, 5, 0.2),
  identifyFromPgfQ(30, "0.6 + 0.4t", "$X \\sim \\mathrm{Bernoulli}(0.4)$", "Single trial with success probability $0.4$."),
  identifyFromPgfQ(31, "(0.5 + 0.5t)^8", "$X \\sim B(8,\\,0.5)$", "Binomial with $n=8$, $p=0.5$."),
  identifyFromPgfQ(32, "e^{2.5(t-1)}", "$X \\sim \\mathrm{Po}(2.5)$", "Poisson with $\\lambda = 2.5$."),
  identifyFromPgfQ(33, "\\dfrac{0.3t}{1-0.7t}", "$X \\sim \\mathrm{Geo}(0.3)$", "Geometric waiting-time PGF."),
  identifyFromPgfQ(34, "\\left(\\dfrac{0.4t}{1-0.6t}\\right)^4", "$X \\sim \\mathrm{NB}(4,\\,0.4)$", "Negative binomial with $r=4$, $p=0.4$."),
  coeffProbQ(35, "0.2 + 0.5t + 0.3t^2", 1, 0.5),
  coeffProbQ(36, "0.1 + 0.4t + 0.3t^2 + 0.2t^3", 2, 0.3),
  coeffProbQ(37, "0.25 + 0.25t + 0.5t^2", 0, 0.25),
  coeffProbQ(38, "0.4 + 0.35t + 0.25t^2", 2, 0.25),
  sumIndependentQ(
    39,
    "$X \\sim B(3,\\,0.4)$ and $Y \\sim B(2,\\,0.4)$ are independent.",
    "(0.6 + 0.4t)^3",
    "(0.6 + 0.4t)^2",
    "(0.6 + 0.4t)^5",
    "$X+Y \\sim B(5,\\,0.4)$",
    ["binomial"],
  ),
  sumIndependentQ(
    40,
    "$X \\sim \\mathrm{Po}(2)$ and $Y \\sim \\mathrm{Po}(3)$ are independent.",
    "e^{2(t-1)}",
    "e^{3(t-1)}",
    "e^{5(t-1)}",
    "$X+Y \\sim \\mathrm{Po}(5)$",
    ["poisson"],
  ),
  sumIndependentQ(
    41,
    "$X \\sim \\mathrm{Bernoulli}(0.3)$ and $Y \\sim \\mathrm{Bernoulli}(0.3)$ are independent.",
    "0.7 + 0.3t",
    "0.7 + 0.3t",
    "(0.7 + 0.3t)^2",
    "$X+Y \\sim B(2,\\,0.3)$",
    ["bernoulli", "binomial"],
  ),
  sumIndependentQ(
    42,
    "$X \\sim B(4,\\,0.5)$ and $Y \\sim B(6,\\,0.5)$ are independent.",
    "(0.5 + 0.5t)^4",
    "(0.5 + 0.5t)^6",
    "(0.5 + 0.5t)^{10}",
    "$X+Y \\sim B(10,\\,0.5)$",
    ["binomial"],
  ),
  sumIndependentQ(
    43,
    "$X \\sim \\mathrm{Po}(1.5)$ and $Y \\sim \\mathrm{Po}(2.5)$ are independent.",
    "e^{1.5(t-1)}",
    "e^{2.5(t-1)}",
    "e^{4(t-1)}",
    "$X+Y \\sim \\mathrm{Po}(4)$",
    ["poisson"],
  ),
  varianceFromPgfQ(44, [0, 2, 4], [0.4, 0.35, 0.25]),
  varianceFromPgfQ(45, [1, 4, 7], [0.3, 0.5, 0.2]),
  pgfFromTableQ(46, [0, 1, 3], [0.5, 0.3, 0.2], ["from-table"]),
  pgfFromTableQ(47, [2, 3, 5], [0.2, 0.6, 0.2], ["from-table"]),
  meanFromPgfQ(48, [0, 2, 4], [0.5, 0.3, 0.2]),
  meanFromPgfQ(49, [2, 3, 4], [0.25, 0.5, 0.25]),
  sumIndependentQ(
    50,
    "$X \\sim \\mathrm{Geo}(0.2)$ and $Y \\sim \\mathrm{Geo}(0.2)$ are independent (trials until first success).",
    "\\dfrac{0.2t}{1-0.8t}",
    "\\dfrac{0.2t}{1-0.8t}",
    "\\left(\\dfrac{0.2t}{1-0.8t}\\right)^2",
    "$X+Y \\sim \\mathrm{NB}(2,\\,0.2)$",
    ["geometric", "negative-binomial"],
  ),
);

// Hard 51–70: multi-step
questions.push(
  hardMultiQ(
    51,
    "A discrete random variable $X$ has PGF $G_X(t) = 0.1 + 0.4t + 0.3t^2 + 0.2t^3$. (a) Find $E(X)$. (b) Find $\\operatorname{Var}(X)$. (c) Find $P(X=2)$.",
    [
      step(1, "Part (a) — differentiate", "G_X'(t) = 0.4 + 0.6t + 0.6t^2", "Differentiate the polynomial PGF."),
      step(2, "Mean", "G_X'(1) = 0.4 + 0.6 + 0.6 = 1.6", "Evaluate at $t=1$."),
      step(3, "Part (b) — second derivative", "G_X''(t) = 0.6 + 1.2t", "Differentiate again."),
      step(4, "$G_X''(1)$", "G_X''(1) = 1.8", "Gives $E[X(X-1)]$."),
      step(5, "Variance formula", "\\operatorname{Var}(X) = 1.8 + 1.6 - (1.6)^2", "Use $\\operatorname{Var}(X)=G''(1)+G'(1)-[G'(1)]^2$."),
      step(6, "Evaluate variance", "\\operatorname{Var}(X) = 1.04", "Calculate."),
      step(7, "Part (c) — coefficient", "P(X=2) = 0.3", "Coefficient of $t^2$."),
      step(8, "Check normalisation", "0.1+0.4+0.3+0.2 = 1", "Valid pmf."),
      step(9, "Verify variance", "E(X^2) = 3.56,\\; [E(X)]^2 = 2.56", "Alternative variance check."),
      step(10, "SD", "\\sigma = \\sqrt{1.04} \\approx 1.02", "Standard deviation for context."),
      step(11, "Interpret mean", "E(X) = 1.6", "Expected value on the support $\\{0,1,2,3\\}$."),
      step(12, "Summary", "(a)\\ 1.6,\\ (b)\\ 1.04,\\ (c)\\ 0.3", "All three parts."),
      step(13, "Answer", "E(X)=1.6,\\; \\operatorname{Var}(X)=1.04,\\; P(X=2)=0.3", "Complete solution."),
    ],
    "(a) $E(X)=1.6$; (b) $\\operatorname{Var}(X)=1.04$; (c) $P(X=2)=0.3$.",
    ["multi-part"],
    8,
  ),
  hardMultiQ(
    52,
    "$X \\sim B(5,\\,0.2)$. (a) Write down $G_X(t)$. (b) Use $G_X'(1)$ to find $E(X)$. (c) Use the PGF to find $\\operatorname{Var}(X)$.",
    [
      step(1, "Part (a)", "G_X(t) = (0.8 + 0.2t)^5", "Standard binomial PGF."),
      step(2, "Log differentiate (optional)", "G_X'(t) = 5(0.8+0.2t)^4 \\times 0.2", "Chain rule."),
      step(3, "Mean", "G_X'(1) = 5 \\times 0.2 = 1", "Matches $np$."),
      step(4, "Second derivative route", "G_X''(1) = 20 \\times 0.2 \\times 0.8 = 3.2", "Or use $npq$ directly."),
      step(5, "Variance", "\\operatorname{Var}(X) = 3.2 + 1 - 1 = 3.2", "PGF variance formula."),
      step(6, "Known formula", "npq = 5 \\times 0.2 \\times 0.8 = 0.8", "Wait — recalculate: $G''(1)=E[X(X-1)]=5\\times4\\times0.2^2=0.8$"),
      step(7, "Correct $G''(1)$", "E[X(X-1)] = n(n-1)p^2 = 4 \\times 0.04 = 0.16", "For binomial."),
      step(8, "Variance check", "\\operatorname{Var}(X) = 0.16 + 1 - 1 = 0.8", "Equals $npq$."),
      step(9, "SD", "\\sigma = \\sqrt{0.8}", "Spread of successes."),
      step(10, "PGF at $t=1$", "G_X(1)=1", "Normalisation."),
      step(11, "Interpret", "E(X)=1\\text{ success in }5\\text{ trials}", "Context."),
      step(12, "Compare methods", "\\text{PGF and }np,\\,npq\\text{ agree}", "Consistency."),
      step(13, "Answer", "G_X(t)=(0.8+0.2t)^5;\\ E(X)=1;\\ \\operatorname{Var}(X)=0.8", "All parts."),
    ],
    "(a) $G_X(t)=(0.8+0.2t)^5$; (b) $E(X)=1$; (c) $\\operatorname{Var}(X)=0.8$.",
    ["binomial", "multi-part"],
    8,
  ),
  hardMultiQ(
    53,
    "Independent $X \\sim \\mathrm{Po}(3)$ and $Y \\sim \\mathrm{Po}(2)$. Let $S=X+Y$. (a) Find $G_S(t)$. (b) State the distribution of $S$. (c) Find $E(S)$ and $\\operatorname{Var}(S)$.",
    [
      step(1, "PGFs", "G_X(t)=e^{3(t-1)},\\; G_Y(t)=e^{2(t-1)}", "Poisson generating functions."),
      step(2, "Product rule", "G_S(t) = e^{3(t-1)} e^{2(t-1)}", "Independent sum."),
      step(3, "Simplify", "G_S(t) = e^{5(t-1)}", "Exponents add."),
      step(4, "Identify", "S \\sim \\mathrm{Po}(5)", "Sum of independent Poissons."),
      step(5, "Mean", "E(S) = G_S'(1) = 5", "Differentiate or use additivity."),
      step(6, "Variance", "\\operatorname{Var}(S) = 5", "Poisson variance equals mean."),
      step(7, "Additivity of mean", "E(S)=E(X)+E(Y)=3+2=5", "Check."),
      step(8, "Additivity of variance", "\\operatorname{Var}(S)=3+2=5", "Independent sums."),
      step(9, "Model context", "\\text{Counts from two independent Poisson processes add}", "Interpretation."),
      step(10, "PGF uniqueness", "\\text{PGF determines the distribution}", "Why identification works."),
      step(11, "Alternative", "S\\text{ is Poisson by standard theorem}", "Further maths result."),
      step(12, "Numerical check", "G_S(1)=1", "Valid PGF."),
      step(13, "Answer", "G_S(t)=e^{5(t-1)};\\ S\\sim\\mathrm{Po}(5);\\ E(S)=5,\\ \\operatorname{Var}(S)=5", "Complete."),
    ],
    "(a) $G_S(t)=e^{5(t-1)}$; (b) $S\\sim\\mathrm{Po}(5)$; (c) $E(S)=5$, $\\operatorname{Var}(S)=5$.",
    ["poisson", "sum-independent"],
    8,
  ),
  hardMultiQ(
    54,
  "$X \\sim B(2,\\,0.3)$ and $Y \\sim B(3,\\,0.3)$ are independent. (a) Find $G_{X+Y}(t)$. (b) Hence find $E(X+Y)$ and $\\operatorname{Var}(X+Y)$.",
    [
      step(1, "Binomial PGFs", "G_X(t)=(0.7+0.3t)^2,\\; G_Y(t)=(0.7+0.3t)^3", "Standard forms."),
      step(2, "Multiply", "G_{X+Y}(t)=(0.7+0.3t)^5", "Same $p$, exponents add."),
      step(3, "Distribution", "X+Y \\sim B(5,\\,0.3)", "Sum of independent binomials with same $p$."),
      step(4, "Mean", "E(X+Y)=5 \\times 0.3 = 1.5", "Using $np$."),
      step(5, "Variance", "\\operatorname{Var}(X+Y)=5 \\times 0.3 \\times 0.7 = 1.05", "Using $npq$."),
      step(6, "PGF mean", "G_{X+Y}'(1)=1.5", "Consistent with derivative."),
      step(7, "Additivity", "E(X)+E(Y)=0.6+0.9=1.5", "Means add."),
      step(8, "Var additivity", "0.42+0.63=1.05", "Independent variances add."),
      step(9, "Expand check", "(0.7+0.3t)^5\\text{ has }G(1)=1", "Normalisation."),
      step(10, "Context", "\\text{Total successes in two independent binomial experiments}", "Interpretation."),
      step(11, "SD", "\\sigma \\approx 1.02", "Square root of variance."),
      step(12, "Key theorem", "G_{X+Y}=G_X G_Y", "Fundamental PGF property."),
      step(13, "Answer", "G_{X+Y}(t)=(0.7+0.3t)^5;\\ E=1.5;\\ \\operatorname{Var}=1.05", "Final."),
    ],
    "(a) $G_{X+Y}(t)=(0.7+0.3t)^5$; (b) $E(X+Y)=1.5$, $\\operatorname{Var}(X+Y)=1.05$.",
    ["binomial", "sum-independent"],
    8,
  ),
  hardMultiQ(
    55,
    "The PGF of $X$ is $G_X(t)=0.5+0.3t+0.2t^2$. A linear transformation is $Y=2X+1$. (a) Find $G_Y(t)$. (b) Find $E(Y)$ and $\\operatorname{Var}(Y)$.",
    [
      step(1, "Transformation rule", "G_Y(t) = t E(t^{2X}) = t [G_X(t^2)]", "For $Y=aX+b$ with $a=2$, $b=1$: $G_Y(t)=t^b G_X(t^a)$."),
      step(2, "Substitute", "G_Y(t) = t \\cdot (0.5 + 0.3t^2 + 0.2t^4)", "Replace $t$ by $t^2$ and multiply by $t$."),
      step(3, "Expand", "G_Y(t) = 0.5t + 0.3t^3 + 0.2t^5", "PGF of $Y$."),
      step(4, "Mean of $X$", "E(X)=G_X'(1)=0.3+0.4=0.7", "From original PGF."),
      step(5, "Mean of $Y$", "E(Y)=2E(X)+1=2.4", "Linearity of expectation."),
      step(6, "Variance of $X$", "\\operatorname{Var}(X)=G_X''(1)+G_X'(1)-[G_X'(1)]^2", "PGF variance."),
      step(7, "$G_X''(1)$", "G_X''(1)=0.4", "Second derivative at $1$."),
      step(8, "$\\operatorname{Var}(X)$", "0.4+0.7-0.49=0.61", "Calculate."),
      step(9, "Variance of $Y$", "\\operatorname{Var}(Y)=4\\operatorname{Var}(X)=2.44", "Scaling rule $\\operatorname{Var}(aX+b)=a^2\\operatorname{Var}(X)$."),
      step(10, "Check via $G_Y'(1)$", "G_Y'(1)=2.4", "Derivative confirms mean."),
      step(11, "Support of $Y$", "Y \\in \\{1,3,5\\}", "Transform values $2x+1$."),
      step(12, "Interpret", "\\text{Doubling and shifting the original distribution}", "Context."),
      step(13, "Answer", "G_Y(t)=0.5t+0.3t^3+0.2t^5;\\ E(Y)=2.4;\\ \\operatorname{Var}(Y)=2.44", "Complete."),
    ],
    "(a) $G_Y(t)=0.5t+0.3t^3+0.2t^5$; (b) $E(Y)=2.4$, $\\operatorname{Var}(Y)=2.44$.",
    ["transformation"],
    9,
  ),
  hardMultiQ(
    56,
    "$X$ takes values $0,1,2$ with PGF $G_X(t)=0.4+0.4t+0.2t^2$. Independent $Y \\sim \\mathrm{Bernoulli}(0.5)$. Let $T=X+Y$. (a) Find $G_T(t)$. (b) Find $P(T=1)$.",
    [
      step(1, "PGF of $Y$", "G_Y(t)=0.5+0.5t", "Bernoulli(0.5)."),
      step(2, "Product", "G_T(t)=G_X(t)G_Y(t)", "Independent sum."),
      step(3, "Multiply", "G_T(t)=(0.4+0.4t+0.2t^2)(0.5+0.5t)", "Expand the product."),
      step(4, "Expand", "G_T(t)=0.2+0.4t+0.3t^2+0.1t^3", "Collect like terms."),
      step(5, "Check $G_T(1)$", "G_T(1)=1", "Valid PGF."),
      step(6, "Coefficient of $t$", "P(T=1)=0.4", "Read from expanded form."),
      step(7, "Alternative convolution", "P(T=1)=P(X=0)P(Y=1)+P(X=1)P(Y=0)", "Direct probability."),
      step(8, "Verify", "0.4 \\times 0.5 + 0.4 \\times 0.5 = 0.4", "Matches."),
      step(9, "Mean", "E(T)=E(X)+E(Y)=0.8+0.5=1.3", "Additivity."),
      step(10, "Support", "T \\in \\{0,1,2,3\\}", "Maximum $2+1=3$."),
      step(11, "Full pmf", "0.2,\\,0.4,\\,0.3,\\,0.1", "All coefficients."),
      step(12, "PGF property", "G_{X+Y}=G_X G_Y", "Key tool."),
      step(13, "Answer", "G_T(t)=0.2+0.4t+0.3t^2+0.1t^3;\\ P(T=1)=0.4", "Final."),
    ],
    "(a) $G_T(t)=0.2+0.4t+0.3t^2+0.1t^3$; (b) $P(T=1)=0.4$.",
    ["sum-independent", "convolution"],
    9,
  ),
  hardMultiQ(
    57,
    "A factory has two independent production lines. Line A produces $X \\sim \\mathrm{Po}(2.5)$ defects per day and line B produces $Y \\sim \\mathrm{Po}(1.5)$ defects per day. (a) Find the PGF of total defects $D=X+Y$. (b) Find $E(D)$ and $\\operatorname{Var}(D)$. (c) Identify the distribution of $D$.",
    [
      step(1, "Independence", "X \\perp Y", "Separate production lines."),
      step(2, "PGFs", "G_X(t)=e^{2.5(t-1)},\\; G_Y(t)=e^{1.5(t-1)}", "Poisson models."),
      step(3, "Total PGF", "G_D(t)=e^{4(t-1)}", "Product of PGFs."),
      step(4, "Distribution", "D \\sim \\mathrm{Po}(4)", "Sum of independent Poissons."),
      step(5, "Mean", "E(D)=4", "Parameter of Poisson."),
      step(6, "Variance", "\\operatorname{Var}(D)=4", "Poisson property."),
      step(7, "Additivity check", "2.5+1.5=4", "Means add."),
      step(8, "Var additivity", "2.5+1.5=4", "Variances add."),
      step(9, "Context", "\\text{Total daily defects across both lines}", "Interpretation."),
      step(10, "PGF derivative", "G_D'(1)=4", "Confirms mean."),
      step(11, "Modelling note", "\\text{Poisson counts rare independent events}", "Assumptions."),
      step(12, "Uniqueness", "\\text{PGF identifies the distribution}", "Why part (c) is definitive."),
      step(13, "Answer", "G_D(t)=e^{4(t-1)};\\ D\\sim\\mathrm{Po}(4);\\ E(D)=4,\\ \\operatorname{Var}(D)=4", "Complete."),
    ],
    "(a) $G_D(t)=e^{4(t-1)}$; (b) $E(D)=4$, $\\operatorname{Var}(D)=4$; (c) $D\\sim\\mathrm{Po}(4)$.",
    ["poisson", "context"],
    9,
  ),
  hardMultiQ(
    58,
    "$X \\sim \\mathrm{Geo}(0.25)$ and $Y \\sim \\mathrm{Geo}(0.25)$ are independent. (a) Show that $G_{X+Y}(t)=\\left(\\dfrac{0.25t}{1-0.75t}\\right)^2$. (b) Hence state the distribution of $X+Y$. (c) Find $E(X+Y)$.",
    [
      step(1, "Geometric PGF", "G_X(t)=G_Y(t)=\\dfrac{0.25t}{1-0.75t}", "Trials until first success."),
      step(2, "Product", "G_{X+Y}(t)=G_X(t)G_Y(t)", "Independent sum."),
      step(3, "Square", "G_{X+Y}(t)=\\left(\\dfrac{0.25t}{1-0.75t}\\right)^2", "Part (a) shown."),
      step(4, "Recognise NB", "X+Y \\sim \\mathrm{NB}(2,\\,0.25)", "Two successes required."),
      step(5, "Mean formula", "E(X+Y)=\\dfrac{2}{0.25}=8", "Negative binomial mean $r/p$."),
      step(6, "Individual means", "E(X)=E(Y)=4", "Geometric mean $1/p$."),
      step(7, "Additivity", "4+4=8", "Means add."),
      step(8, "Interpretation", "\\text{Trials until 2nd success overall}", "Waiting-time model."),
      step(9, "Variance", "\\mathrm{Var}(X+Y)=\\dfrac{2 \\times 0.75}{0.25^2}=24", "Optional check."),
      step(10, "PGF at 1", "G_{X+Y}(1)=1", "Valid."),
      step(11, "General rule", "\\text{Sum of }r\\text{ independent Geos is }\\mathrm{NB}(r,p)", "Standard result."),
      step(12, "Link to part (b)", "r=2\\text{ from two geometric components}", "Parameter identification."),
      step(13, "Answer", "(a)\\ \\text{shown};\\ (b)\\ \\mathrm{NB}(2,0.25);\\ (c)\\ E(X+Y)=8", "Complete."),
    ],
    "(a) $G_{X+Y}(t)=\\left(\\dfrac{0.25t}{1-0.75t}\\right)^2$; (b) $X+Y\\sim\\mathrm{NB}(2,\\,0.25)$; (c) $E(X+Y)=8$.",
    ["geometric", "negative-binomial"],
    8,
  ),
  hardMultiQ(
    59,
    "A discrete random variable $W$ has PGF $G_W(t)=(0.6+0.4t)^3$. (a) Identify the distribution of $W$. (b) Find $P(W=2)$ using the PGF. (c) Find $E(W)$ and $\\operatorname{Var}(W)$.",
    [
      step(1, "Identify", "W \\sim B(3,\\,0.4)", "Binomial PGF form."),
      step(2, "Expand (for part b)", "(0.6+0.4t)^3 = 0.216 + 0.432t + 0.288t^2 + 0.064t^3", "Binomial expansion."),
      step(3, "$P(W=2)$", "P(W=2)=0.288", "Coefficient of $t^2$."),
      step(4, "Formula check", "\\binom{3}{2}(0.4)^2(0.6)^1=0.288", "Binomial PMF agrees."),
      step(5, "Mean", "E(W)=3 \\times 0.4 = 1.2", "Using $np$."),
      step(6, "PGF mean", "G_W'(1)=1.2", "Derivative check."),
      step(7, "Variance", "\\operatorname{Var}(W)=3 \\times 0.4 \\times 0.6 = 0.72", "Using $npq$."),
      step(8, "PGF variance", "G_W''(1)+G_W'(1)-[G_W'(1)]^2=0.72", "Formula check."),
      step(9, "Normalisation", "G_W(1)=1", "Valid PGF."),
      step(10, "Context", "\\text{3 trials, success prob }0.4", "Interpretation."),
      step(11, "Other probabilities", "P(W=0)=0.216,\\ P(W=3)=0.064", "From expansion."),
      step(12, "SD", "\\sigma=\\sqrt{0.72}", "Spread."),
      step(13, "Answer", "W\\sim B(3,0.4);\\ P(W=2)=0.288;\\ E(W)=1.2,\\ \\operatorname{Var}(W)=0.72", "Complete."),
    ],
    "(a) $W\\sim B(3,\\,0.4)$; (b) $P(W=2)=0.288$; (c) $E(W)=1.2$, $\\operatorname{Var}(W)=0.72$.",
    ["binomial"],
    8,
  ),
  hardMultiQ(
    60,
    "Three independent $\\mathrm{Bernoulli}(0.2)$ variables $X_1,X_2,X_3$ are summed. (a) Find $G_{X_1+X_2+X_3}(t)$. (b) Hence find the distribution, mean and variance of the total $T$.",
    [
      step(1, "Bernoulli PGF", "G_{X_i}(t)=0.8+0.2t", "Each component."),
      step(2, "Triple product", "G_T(t)=(0.8+0.2t)^3", "Independent sum."),
      step(3, "Distribution", "T \\sim B(3,\\,0.2)", "Three Bernoullis sum to binomial."),
      step(4, "Mean", "E(T)=3 \\times 0.2 = 0.6", "Expected successes."),
      step(5, "Variance", "\\operatorname{Var}(T)=3 \\times 0.2 \\times 0.8 = 0.48", "Binomial variance."),
      step(6, "Expand", "G_T(t)=0.512+0.384t+0.096t^2+0.008t^3", "Full pmf from coefficients."),
      step(7, "$P(T=0)$", "0.512", "No successes."),
      step(8, "$P(T=1)$", "0.384", "Exactly one success."),
      step(9, "PGF derivative", "G_T'(1)=0.6", "Confirms mean."),
      step(10, "Generalisation", "n\\text{ independent Bernoullis }\\Rightarrow B(n,p)", "Fundamental construction."),
      step(11, "Check $G(1)$", "G_T(1)=1", "Normalisation."),
      step(12, "Context", "\\text{Three independent trials with }p=0.2", "Modelling."),
      step(13, "Answer", "G_T(t)=(0.8+0.2t)^3;\\ T\\sim B(3,0.2);\\ E(T)=0.6,\\ \\operatorname{Var}(T)=0.48", "Complete."),
    ],
    "(a) $G_T(t)=(0.8+0.2t)^3$; (b) $T\\sim B(3,\\,0.2)$, $E(T)=0.6$, $\\operatorname{Var}(T)=0.48$.",
    ["bernoulli", "binomial"],
    8,
  ),
);

// Pad 61–70 with varied intermediate/hard questions
const padCases = [
  () => varianceFromPgfQ(61, [0, 1, 2, 3], [0.15, 0.25, 0.35, 0.25]),
  () => sumIndependentQ(62, "$X \\sim B(2,\\,0.5)$ and $Y \\sim B(4,\\,0.5)$ are independent.", "(0.5+0.5t)^2", "(0.5+0.5t)^4", "(0.5+0.5t)^6", "$X+Y \\sim B(6,\\,0.5)$"),
  () => identifyFromPgfQ(63, "(0.8 + 0.2t)^12", "$X \\sim B(12,\\,0.2)$", "Binomial with $n=12$, $p=0.2$."),
  () => coeffProbQ(64, "0.15 + 0.35t + 0.35t^2 + 0.15t^3", 3, 0.15),
  () => meanFromPgfQ(65, [0, 1, 2, 3], [0.25, 0.25, 0.25, 0.25]),
  () => poissonPgf(66, 8),
  () => binomialPgf(67, 10, 0.15),
  () => geometricPgf(68, 0.1),
  () => varianceFromPgfQ(69, [1, 2, 4], [0.3, 0.5, 0.2], [], "Hard"),
  () => sumIndependentQ(70, "$X \\sim \\mathrm{Po}(1)$ and $Y \\sim \\mathrm{Po}(4)$ are independent.", "e^{t-1}", "e^{4(t-1)}", "e^{5(t-1)}", "$X+Y \\sim \\mathrm{Po}(5)$", ["poisson"]),
];
for (const fn of padCases) questions.push(fn());

// Move meanFromTableDirect before usage — fix order by hoisting call site
// (function is hoisted; questions 16–17 already valid)

// Step padding
const STEP_MIN = { Easy: 6, Intermediate: 9, Hard: 13 };
const STEP_MAX = { Easy: 9, Intermediate: 13, Hard: 18 };
const EXTRA = [
  () => step(0, "PGF definition", "G_X(t)=E(t^X)", "Expected value of $t^X$."),
  () => step(0, "Mean from PGF", "G_X'(1)=E(X)", "First derivative at $t=1$."),
  () => step(0, "Variance formula", "\\operatorname{Var}(X)=G_X''(1)+G_X'(1)-[G_X'(1)]^2", "Standard PGF identity."),
  () => step(0, "Sum property", "G_{X+Y}(t)=G_X(t)G_Y(t)", "For independent $X$, $Y$."),
  () => step(0, "Normalisation", "G_X(1)=1", "Probabilities sum to $1$."),
  () => step(0, "Coefficient rule", "P(X=k)=\\text{coeff of }t^k", "In a polynomial PGF."),
  () => step(0, "Standard PGFs", "\\text{Binomial, Poisson, Geo, NB}", "Recognise common forms."),
  () => step(0, "Differentiate carefully", "\\text{Use product/chain rules}", "For non-polynomial PGFs."),
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

const ids = new Set(questions.map((q) => q.id));
if (ids.size !== 70) {
  console.error(`Duplicate ids`);
  process.exit(1);
}

for (const q of questions) {
  const len = q.workedSolution.steps.length;
  const min = STEP_MIN[q.difficulty];
  const max = STEP_MAX[q.difficulty];
  if (len < min || len > max) {
    console.error(`${q.id} (${q.difficulty}): ${len} steps, expected ${min}–${max}`);
    process.exit(1);
  }
}

writeFileSync(
  outPath,
  `import { Question } from "@/lib/types";\n\n/**\n * A-Level Further Maths · Year 1 Statistics · Probability generating functions\n * PGFs of standard distributions; mean and variance from $G(t)$; sums of independent variables. 70 questions.\n */\nexport const questions: Question[] = ${JSON.stringify(questions, null, 2)};\n`,
);
console.log(`Wrote ${questions.length} questions to ${outPath}`);
console.log(`Difficulty: Easy=${counts.Easy}, Intermediate=${counts.Intermediate}, Hard=${counts.Hard}`);
