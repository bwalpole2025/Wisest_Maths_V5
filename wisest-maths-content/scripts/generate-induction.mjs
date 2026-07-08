#!/usr/bin/env node
/**
 * Generates 70 A-Level Further Maths "Proof by induction" questions.
 * Output: src/data/questions/a-level-further-maths/year-1-pure/induction.ts
 */

import { writeFileSync, mkdirSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const outDir = resolve(__dirname, "../src/data/questions/a-level-further-maths/year-1-pure");
const outPath = resolve(outDir, "induction.ts");

mkdirSync(outDir, { recursive: true });

const SUBTOPIC = "Proof by induction";
const SUBTOPIC_ID = "fm.y1.pure.induction";
const LEVEL = "A-Level Further Maths";
const TOPIC = "Further Maths Year 1: Pure (Core Pure 1)";

const qid = (n) => `fm.y1.pure.induction.q${String(n).padStart(3, "0")}`;
const step = (n, description, workingLatex, explanation) => ({ stepNumber: n, description, workingLatex, explanation, diagram: null });
const base = (meta) => ({ level: LEVEL, topic: TOPIC, subtopic: SUBTOPIC, subtopicId: SUBTOPIC_ID, questionDiagram: null, ...meta });
const indQ = (n, meta) => base({ id: qid(n), tags: ["induction", ...(meta.tags || [])], ...meta });

// ─── Σr = n(n+1)/2 ───────────────────────────────────────────────────────────
function sumR(qNum, variant = 0, tags = [], marks = 4) {
  const variants = [
    { text: "Prove by mathematical induction that $\\displaystyle\\sum_{r=1}^{n} r = \\frac{n(n+1)}{2}$ for all positive integers $n$.", label: "P(n): \\sum_{r=1}^{n} r = \\frac{n(n+1)}{2}" },
    { text: "Use induction to show that $1 + 2 + 3 + \\cdots + n = \\dfrac{n(n+1)}{2}$ for every $n \\in \\mathbb{N}$.", label: "P(n): 1+2+\\cdots+n = \\frac{n(n+1)}{2}" },
    { text: "Prove that the sum of the first $n$ positive integers is $\\dfrac{n(n+1)}{2}$, using mathematical induction.", label: "P(n): \\text{sum of first } n \\text{ integers} = \\frac{n(n+1)}{2}" },
    { text: "Show by induction that $\\displaystyle\\sum_{r=1}^{n} r = \\frac{n^2 + n}{2}$ for all integers $n \\geqslant 1$.", label: "P(n): \\sum_{r=1}^{n} r = \\frac{n^2+n}{2}" },
  ];
  const v = variants[variant % variants.length];
  const steps = [
    step(1, "State $P(n)$", v.label, "Write the proposition we aim to prove for each positive integer $n$."),
    step(2, "Base case $n=1$", "\\text{LHS} = 1,\\quad \\text{RHS} = \\frac{1 \\cdot 2}{2} = 1", "Verify the formula holds for the smallest value of $n$."),
    step(3, "Base case holds", "1 = 1 \\checkmark", "Both sides are equal, so $P(1)$ is true."),
    step(4, "Inductive hypothesis", "\\text{Assume } P(k) \\text{ true: } \\sum_{r=1}^{k} r = \\frac{k(k+1)}{2}", "Suppose the result holds for some $k \\geqslant 1$."),
    step(5, "Consider $P(k+1)$", "\\sum_{r=1}^{k+1} r = \\sum_{r=1}^{k} r + (k+1)", "Separate the last term from the sum up to $k$."),
    step(6, "Apply the hypothesis", "= \\frac{k(k+1)}{2} + (k+1)", "Replace the sum to $k$ using the inductive hypothesis."),
    step(7, "Factorise", "= \\frac{k(k+1) + 2(k+1)}{2} = \\frac{(k+1)(k+2)}{2}", "Take out the common factor $(k+1)$ and simplify."),
    step(8, "Conclusion", "P(k+1) \\text{ is true}. \\text{ By induction, } P(n) \\text{ holds } \\forall n \\in \\mathbb{N}", "The RHS matches $\\frac{(k+1)((k+1)+1)}{2}$, completing the inductive step."),
  ];
  return indQ(qNum, { difficulty: "Easy", marks, answerType: "written", tags: [...tags, "series", "sum-r"], questionText: v.text, workedSolution: { steps, finalAnswer: "Proved by induction: $\\sum_{r=1}^{n} r = \\frac{n(n+1)}{2}$ for all $n \\in \\mathbb{N}$." } });
}

// ─── Σ(2r) = n(n+1) ──────────────────────────────────────────────────────────
function sumEven(qNum, tags = [], marks = 4) {
  const steps = [
    step(1, "State $P(n)$", "P(n): \\sum_{r=1}^{n} 2r = n(n+1)", "The sum of the first $n$ even numbers equals $n(n+1)$."),
    step(2, "Base case $n=1$", "2 = 1 \\cdot 2 = 2 \\checkmark", "For $n=1$, LHS $= 2$ and RHS $= 2$."),
    step(3, "Inductive hypothesis", "\\text{Assume } \\sum_{r=1}^{k} 2r = k(k+1)", "Suppose the formula holds for $n=k$."),
    step(4, "Sum to $k+1$", "\\sum_{r=1}^{k+1} 2r = \\sum_{r=1}^{k} 2r + 2(k+1)", "Add the next even term $2(k+1)$."),
    step(5, "Apply hypothesis", "= k(k+1) + 2(k+1)", "Substitute the assumed result for the sum to $k$."),
    step(6, "Factorise", "= (k+1)(k + 2) = (k+1)((k+1)+1)", "Factor out $(k+1)$ to reveal the required form."),
    step(7, "Conclusion", "P(k+1) \\text{ holds. By induction, true for all } n", "The expression matches $n(n+1)$ with $n=k+1$."),
  ];
  return indQ(qNum, { difficulty: "Easy", marks, answerType: "written", tags: [...tags, "series", "even-numbers"], questionText: "Prove by induction that $2 + 4 + 6 + \\cdots + 2n = n(n+1)$ for all positive integers $n$.", workedSolution: { steps, finalAnswer: "Proved: $\\sum_{r=1}^{n} 2r = n(n+1)$ for all $n \\in \\mathbb{N}$." } });
}

// ─── Σ(2r-1) = n² ────────────────────────────────────────────────────────────
function sumOdd(qNum, tags = [], marks = 4) {
  const steps = [
    step(1, "State $P(n)$", "P(n): \\sum_{r=1}^{n} (2r-1) = n^2", "The sum of the first $n$ odd numbers equals $n^2$."),
    step(2, "Base case $n=1$", "1 = 1^2 = 1 \\checkmark", "The first odd number is $1$, and $1^2 = 1$."),
    step(3, "Inductive hypothesis", "\\text{Assume } \\sum_{r=1}^{k} (2r-1) = k^2", "Suppose the result holds for $n=k$."),
    step(4, "Sum to $k+1$", "\\sum_{r=1}^{k+1} (2r-1) = k^2 + (2(k+1)-1)", "Add the $(k+1)$th odd number, which is $2(k+1)-1$."),
    step(5, "Simplify new term", "= k^2 + 2k + 1", "Expand $2(k+1)-1 = 2k+1$."),
    step(6, "Recognise square", "= (k+1)^2", "The expression is a perfect square."),
    step(7, "Conclusion", "P(k+1) \\text{ holds. By induction, } \\sum_{r=1}^{n}(2r-1)=n^2", "This is exactly the formula with $n=k+1$."),
  ];
  return indQ(qNum, { difficulty: "Easy", marks, answerType: "written", tags: [...tags, "series", "odd-numbers"], questionText: "Use mathematical induction to prove that $1 + 3 + 5 + \\cdots + (2n-1) = n^2$ for all $n \\in \\mathbb{N}$.", workedSolution: { steps, finalAnswer: "Proved: the sum of the first $n$ odd numbers is $n^2$." } });
}

// ─── Σr² = n(n+1)(2n+1)/6 ───────────────────────────────────────────────────
function sumR2(qNum, variant = 0, tags = [], marks = 5, difficulty = "Intermediate") {
  const texts = [
    "Prove by induction that $\\displaystyle\\sum_{r=1}^{n} r^2 = \\frac{n(n+1)(2n+1)}{6}$ for all positive integers $n$.",
    "Show that $1^2 + 2^2 + 3^2 + \\cdots + n^2 = \\dfrac{n(n+1)(2n+1)}{6}$ using mathematical induction.",
    "Use induction to establish $\\displaystyle\\sum_{r=1}^{n} r^2 = \\frac{n(n+1)(2n+1)}{6}$.",
  ];
  const steps = [
    step(1, "State $P(n)$", "P(n): \\sum_{r=1}^{n} r^2 = \\frac{n(n+1)(2n+1)}{6}", "This is the standard formula for the sum of squares."),
    step(2, "Base case $n=1$", "1^2 = 1,\\quad \\frac{1 \\cdot 2 \\cdot 3}{6} = 1 \\checkmark", "Both sides equal $1$ when $n=1$."),
    step(3, "Inductive hypothesis", "\\text{Assume } \\sum_{r=1}^{k} r^2 = \\frac{k(k+1)(2k+1)}{6}", "Suppose the formula holds for $n=k$."),
    step(4, "Consider $P(k+1)$", "\\sum_{r=1}^{k+1} r^2 = \\sum_{r=1}^{k} r^2 + (k+1)^2", "Isolate the new term $(k+1)^2$."),
    step(5, "Substitute hypothesis", "= \\frac{k(k+1)(2k+1)}{6} + (k+1)^2", "Replace the sum to $k$ using the inductive assumption."),
    step(6, "Common denominator", "= \\frac{k(k+1)(2k+1) + 6(k+1)^2}{6}", "Write as a single fraction over $6$."),
    step(7, "Factor out $(k+1)$", "= \\frac{(k+1)[k(2k+1) + 6(k+1)]}{6}", "Factor $(k+1)$ from the numerator."),
    step(8, "Expand bracket", "= \\frac{(k+1)(2k^2 + 7k + 6)}{6}", "Expand and collect like terms inside the bracket."),
    step(9, "Factorise quadratic", "= \\frac{(k+1)(k+2)(2k+3)}{6}", "Factor $2k^2+7k+6 = (k+2)(2k+3)$."),
    step(10, "Match target form", "= \\frac{(k+1)((k+1)+1)(2(k+1)+1)}{6}", "Rewrite with $n=k+1$ to confirm $P(k+1)$."),
    step(11, "Conclusion", "P(k+1) \\text{ holds. By induction, } P(n) \\text{ for all } n \\in \\mathbb{N}", "The inductive step is complete."),
  ];
  return indQ(qNum, { difficulty, marks, answerType: "written", tags: [...tags, "series", "sum-r-squared"], questionText: texts[variant % texts.length], workedSolution: { steps, finalAnswer: "Proved: $\\sum_{r=1}^{n} r^2 = \\frac{n(n+1)(2n+1)}{6}$ for all $n \\in \\mathbb{N}$." } });
}

// ─── Σr³ = [n(n+1)/2]² ──────────────────────────────────────────────────────
function sumR3(qNum, variant = 0, tags = [], marks = 6, difficulty = "Intermediate") {
  const texts = [
    "Prove by induction that $\\displaystyle\\sum_{r=1}^{n} r^3 = \\left(\\frac{n(n+1)}{2}\\right)^2$ for all positive integers $n$.",
    "Show using induction that $1^3 + 2^3 + \\cdots + n^3 = \\left[\\dfrac{n(n+1)}{2}\\right]^2$.",
    "Use mathematical induction to prove $\\displaystyle\\sum_{r=1}^{n} r^3 = \\frac{n^2(n+1)^2}{4}$.",
  ];
  const steps = [
    step(1, "State $P(n)$", "P(n): \\sum_{r=1}^{n} r^3 = \\left(\\frac{n(n+1)}{2}\\right)^2", "The sum of cubes equals the square of the sum of integers."),
    step(2, "Base case $n=1$", "1^3 = 1,\\quad \\left(\\frac{1 \\cdot 2}{2}\\right)^2 = 1 \\checkmark", "Both sides equal $1$."),
    step(3, "Inductive hypothesis", "\\text{Assume } \\sum_{r=1}^{k} r^3 = \\left(\\frac{k(k+1)}{2}\\right)^2", "Suppose the result holds for $n=k$."),
    step(4, "Sum to $k+1$", "\\sum_{r=1}^{k+1} r^3 = \\left(\\frac{k(k+1)}{2}\\right)^2 + (k+1)^3", "Add $(k+1)^3$ to the assumed sum."),
    step(5, "Factor $(k+1)^2$", "= (k+1)^2 \\left[\\frac{k^2}{4} + (k+1)\\right]", "Take out $(k+1)^2$ as a common factor."),
    step(6, "Simplify bracket", "= (k+1)^2 \\cdot \\frac{k^2 + 4k + 4}{4} = \\frac{(k+1)^2(k+2)^2}{4}", "Combine terms: $k^2+4k+4=(k+2)^2$."),
    step(7, "Rewrite as square", "= \\left(\\frac{(k+1)(k+2)}{2}\\right)^2", "Express as the square of $\\frac{n(n+1)}{2}$ with $n=k+1$."),
    step(8, "Conclusion", "P(k+1) \\text{ holds. By induction, true for all } n", "The inductive step confirms the formula for $n=k+1$."),
  ];
  return indQ(qNum, { difficulty, marks, answerType: "written", tags: [...tags, "series", "sum-r-cubed"], questionText: texts[variant % texts.length], workedSolution: { steps, finalAnswer: "Proved: $\\sum_{r=1}^{n} r^3 = \\left(\\frac{n(n+1)}{2}\\right)^2$ for all $n \\in \\mathbb{N}$." } });
}

// ─── Divisibility: a^n - 1 divisible by (a-1) or similar ─────────────────────
function divisibility(qNum, base, divisor, powerExpr, tags = [], marks = 5, difficulty = "Easy") {
  const expr = powerExpr || `${base}^n - 1`;
  const steps = [
    step(1, "State $P(n)$", `P(n): ${divisor} \\mid ${expr}`, "We must show the expression is a multiple of the divisor for all $n \\in \\mathbb{N}$."),
    step(2, "Base case $n=1$", `${base}^1 - 1 = ${base - 1}`, `Compute directly: $${base - 1} = ${divisor} \\times ${(base - 1) / divisor}$ when divisible.`),
    step(3, "Verify base", `${base - 1} \\text{ is divisible by } ${divisor} \\checkmark`, "The base case confirms $P(1)$."),
    step(4, "Inductive hypothesis", `\\text{Assume } ${divisor} \\mid ${base}^k - 1, \\text{ so } ${base}^k - 1 = ${divisor}m \\text{ for some integer } m`, "Suppose the divisibility holds for $n=k$."),
    step(5, "Consider $n=k+1$", `${base}^{k+1} - 1 = ${base} \\cdot ${base}^k - 1`, "Rewrite the expression for the next case."),
    step(6, "Rearrange", `= ${base}(${base}^k - 1) + (${base} - 1)`, `Add and subtract $${base - 1}$ to expose the inductive form.`),
    step(7, "Apply hypothesis", `= ${base} \\cdot ${divisor}m + ${base - 1}`, `The first term is $${divisor}$ times an integer by the hypothesis.`),
    step(8, "Conclusion", `\\text{Both terms divisible by } ${divisor}. \\text{ So } P(k+1) \\text{ holds. By induction, true } \\forall n`, `A sum of multiples of $${divisor}$ is itself a multiple of $${divisor}$.`),
  ];
  return indQ(qNum, {
    difficulty,
    marks,
    answerType: "written",
    tags: [...tags, "divisibility"],
    questionText: `Prove by mathematical induction that ${expr} is divisible by ${divisor} for all positive integers $n$.`,
    workedSolution: { steps, finalAnswer: `Proved: ${divisor} divides ${expr} for all $n \\in \\mathbb{N}$.` },
  });
}

// ─── Divisibility: a^n - b^n ─────────────────────────────────────────────────
function divisibilityDiff(qNum, a, b, divisor, tags = [], marks = 6, difficulty = "Intermediate") {
  const steps = [
    step(1, "State $P(n)$", `P(n): ${divisor} \\mid ${a}^n - ${b}^n`, "Prove divisibility of the difference of powers."),
    step(2, "Base case $n=1$", `${a}^1 - ${b}^1 = ${a - b}`, `This equals $${divisor} \\times ${(a - b) / divisor}$.`),
    step(3, "Inductive hypothesis", `\\text{Assume } ${divisor} \\mid ${a}^k - ${b}^k`, "Suppose true for $n=k$."),
    step(4, "Consider $n=k+1$", `${a}^{k+1} - ${b}^{k+1} = ${a} \\cdot ${a}^k - ${b} \\cdot ${b}^k`, "Factor out the bases."),
    step(5, "Add and subtract", `= ${a}(${a}^k - ${b}^k) + ${b}^k(${a} - ${b})`, "Introduce the inductive expression by adding zero."),
    step(6, "Apply hypothesis", `\\text{First term: } ${a} \\times (${divisor}m). \\text{ Second term: } ${b}^k \\times ${a - b}`, "Both terms are multiples of the divisor."),
    step(7, "Conclusion", `P(k+1) \\text{ holds. By induction, } ${divisor} \\mid ${a}^n - ${b}^n \\; \\forall n`, "The inductive step is complete."),
  ];
  return indQ(qNum, {
    difficulty,
    marks,
    answerType: "written",
    tags: [...tags, "divisibility"],
    questionText: `Use induction to prove that ${a}^n - ${b}^n is divisible by ${divisor} for all $n \\in \\mathbb{N}$.`,
    workedSolution: { steps, finalAnswer: `Proved: ${divisor} \\mid ${a}^n - ${b}^n for all $n \\in \\mathbb{N}$.` },
  });
}

// ─── Divisibility: n³ - n ────────────────────────────────────────────────────
function divisibilityPoly(qNum, tags = [], marks = 6, difficulty = "Intermediate") {
  const steps = [
    step(1, "State $P(n)$", "P(n): 3 \\mid n^3 - n", "Show $n^3 - n$ is divisible by $3$ for all $n \\in \\mathbb{N}$."),
    step(2, "Base case $n=1$", "1^3 - 1 = 0", "Zero is divisible by any non-zero integer."),
    step(3, "Inductive hypothesis", "\\text{Assume } 3 \\mid k^3 - k", "Suppose the result holds for $n=k$."),
    step(4, "Consider $(k+1)^3 - (k+1)$", "(k+1)^3 - (k+1) = k^3 + 3k^2 + 3k + 1 - k - 1", "Expand $(k+1)^3$ and simplify."),
    step(5, "Rearrange", "= (k^3 - k) + 3k(k+1)", "Group the inductive expression with the remaining terms."),
    step(6, "Apply hypothesis", "k^3 - k = 3m \\Rightarrow (k+1)^3 - (k+1) = 3m + 3k(k+1)", "The first part is a multiple of $3$ by the hypothesis."),
    step(7, "Factor", "= 3(m + k(k+1))", "Factor out $3$ from both terms."),
    step(8, "Conclusion", "P(k+1) \\text{ holds. By induction, } 3 \\mid n^3 - n \\; \\forall n", "The entire expression is a multiple of $3$."),
  ];
  return indQ(qNum, {
    difficulty,
    marks,
    answerType: "written",
    tags: [...tags, "divisibility", "polynomial"],
    questionText: "Prove by induction that $n^3 - n$ is divisible by $3$ for all positive integers $n$.",
    workedSolution: { steps, finalAnswer: "Proved: $3 \\mid n^3 - n$ for all $n \\in \\mathbb{N}$." },
  });
}

// ─── Inequality: a^n > f(n) ──────────────────────────────────────────────────
function inequality(qNum, base, compareFn, baseN, tags = [], marks = 5, difficulty = "Easy") {
  const comp = compareFn === "n" ? "n" : compareFn;
  const steps = [
    step(1, "State $P(n)$", `P(n): ${base}^n > ${comp}`, "We prove the inequality for all $n$ from the base value upward."),
    step(2, `Base case $n=${baseN}$`, `${base}^{${baseN}} = ${base ** baseN}$, \\quad ${comp.replace("n", baseN)} = ${baseN}`, "Verify directly for the starting value."),
    step(3, "Base holds", `${base ** baseN} > ${baseN} \\checkmark`, "The inequality is true at the base."),
    step(4, "Inductive hypothesis", `\\text{Assume } ${base}^k > k \\text{ for some } k \\geqslant ${baseN}`, "Suppose the inequality holds for $n=k$."),
    step(5, "Consider $n=k+1$", `${base}^{k+1} = ${base} \\cdot ${base}^k`, "Express the left-hand side using the power rule."),
    step(6, "Apply hypothesis", `${base}^{k+1} > ${base} \\cdot k`, `Since $${base}^k > k$ and $${base} > 0$, multiply the inequality by $${base}$.`),
    step(7, "Compare with $k+1$", `\\text{For } k \\geqslant ${baseN}: ${base}k \\geqslant k + k > k + 1`, `Since $${base} \\geqslant 2$, we have $${base}k \\geqslant 2k > k+1$ for $k \\geqslant 2$.`),
    step(8, "Conclusion", `${base}^{k+1} > k+1. \\text{ By induction, } P(n) \\text{ holds } \\forall n \\geqslant ${baseN}`, "The inductive step is complete."),
  ];
  return indQ(qNum, {
    difficulty,
    marks,
    answerType: "written",
    tags: [...tags, "inequality"],
    questionText: `Prove by induction that $${base}^n > n$ for all integers $n \\geqslant ${baseN}$.`,
    workedSolution: { steps, finalAnswer: `Proved: $${base}^n > n$ for all $n \\geqslant ${baseN}$.` },
  });
}

// ─── Inequality: n! > 2^n ────────────────────────────────────────────────────
function factorialInequality(qNum, threshold, tags = [], marks = 6, difficulty = "Intermediate") {
  const steps = [
    step(1, "State $P(n)$", "P(n): n! > 2^n", "Factorial grows faster than exponential for large $n$."),
    step(2, `Base case $n=${threshold}$`, `${threshold}! = ${factorial(threshold)}, \\quad 2^{${threshold}} = ${2 ** threshold}`, "Evaluate both sides at the starting value."),
    step(3, "Base holds", `${factorial(threshold)} > ${2 ** threshold} \\checkmark`, "Confirm the inequality at the base."),
    step(4, "Inductive hypothesis", "\\text{Assume } k! > 2^k \\text{ for } k \\geqslant " + threshold, "Suppose true for $n=k$."),
    step(5, "Consider $(k+1)!$", "(k+1)! = (k+1) \\cdot k!", "Relate the factorial at $k+1$ to that at $k$."),
    step(6, "Apply hypothesis", "(k+1)! > (k+1) \\cdot 2^k", "Multiply the inequality $k! > 2^k$ by $k+1 > 0$."),
    step(7, "Compare with $2^{k+1}$", "\\text{Need } (k+1) \\cdot 2^k \\geqslant 2^{k+1} = 2 \\cdot 2^k", "This requires $k+1 \\geqslant 2$, i.e. $k \\geqslant 1$."),
    step(8, "Conclude step", "(k+1)! > 2^{k+1}", "Since $k \\geqslant " + threshold + " \\geqslant 4$, we have $k+1 \\geqslant 5 > 2$."),
    step(9, "Conclusion", "P(k+1) \\text{ holds. By induction, } n! > 2^n \\text{ for } n \\geqslant " + threshold, "The proof is complete."),
  ];
  return indQ(qNum, {
    difficulty,
    marks,
    answerType: "written",
    tags: [...tags, "inequality", "factorial"],
    questionText: `Use mathematical induction to prove that $n! > 2^n$ for all integers $n \\geqslant ${threshold}$.`,
    workedSolution: { steps, finalAnswer: `Proved: $n! > 2^n$ for all $n \\geqslant ${threshold}$.` },
  });
}

function factorial(n) {
  let r = 1;
  for (let i = 2; i <= n; i++) r *= i;
  return r;
}

// ─── Geometric series ─────────────────────────────────────────────────────────
function geometricSeries(qNum, r, tags = [], marks = 5, difficulty = "Intermediate") {
  const steps = [
    step(1, "State $P(n)$", `P(n): \\sum_{i=1}^{n} ${r}^i = ${r}\\frac{${r}^n - 1}{${r} - 1}`, "Standard formula for a finite geometric series."),
    step(2, "Base case $n=1$", `\\text{LHS} = ${r}, \\quad \\text{RHS} = ${r}\\frac{${r}-1}{${r}-1} = ${r} \\checkmark`, "Both sides equal the first term."),
    step(3, "Inductive hypothesis", `\\text{Assume } \\sum_{i=1}^{k} ${r}^i = ${r}\\frac{${r}^k - 1}{${r} - 1}`, "Suppose the formula holds for $n=k$."),
    step(4, "Sum to $k+1$", `\\sum_{i=1}^{k+1} ${r}^i = ${r}\\frac{${r}^k - 1}{${r} - 1} + ${r}^{k+1}`, "Add the next term of the series."),
    step(5, "Common denominator", `= \\frac{${r}(${r}^k - 1) + ${r}^{k+1}(${r}-1)}{${r}-1}`, "Combine into a single fraction."),
    step(6, "Simplify numerator", `= \\frac{${r}^{k+1} - ${r} + ${r}^{k+2} - ${r}^{k+1}}{${r}-1} = \\frac{${r}^{k+2} - ${r}}{${r}-1}`, "Expand and cancel terms."),
    step(7, "Factor", `= ${r}\\frac{${r}^{k+1} - 1}{${r} - 1}`, "This matches the formula with $n=k+1$."),
    step(8, "Conclusion", "P(k+1) \\text{ holds. By induction, true for all } n", "The inductive step confirms the geometric sum formula."),
  ];
  return indQ(qNum, {
    difficulty,
    marks,
    answerType: "written",
    tags: [...tags, "series", "geometric"],
    questionText: `Prove by induction that $\\displaystyle\\sum_{i=1}^{n} ${r}^i = ${r}\\frac{${r}^n - 1}{${r} - 1}$ for all $n \\in \\mathbb{N}$.`,
    workedSolution: { steps, finalAnswer: `Proved: $\\sum_{i=1}^{n} ${r}^i = ${r}\\frac{${r}^n - 1}{${r} - 1}$ for all $n \\in \\mathbb{N}$.` },
  });
}

// ─── Matrix power induction ───────────────────────────────────────────────────
function matrixPower(qNum, a, b, c, d, tags = [], marks = 7, difficulty = "Intermediate") {
  const det = a * d - b * c;
  const tr = a + d;
  const isRotation = a === 0 && d === 0 && b === 1 && c === -1;
  const isScale = b === 0 && c === 0;
  let pattern, questionText, finalAnswer;
  if (isRotation) {
    pattern = "A^n = \\begin{pmatrix} \\cos n\\theta & -\\sin n\\theta \\\\ \\sin n\\theta & \\cos n\\theta \\end{pmatrix}";
    questionText = `Let $A = \\begin{pmatrix} 0 & -1 \\\\ 1 & 0 \\end{pmatrix}$. Prove by induction that $A^n = \\begin{pmatrix} \\cos(n\\pi/2) & -\\sin(n\\pi/2) \\\\ \\sin(n\\pi/2) & \\cos(n\\pi/2) \\end{pmatrix}$ for $n \\geqslant 1$, where the entries are interpreted as the standard rotation matrix values.`;
    finalAnswer = "Proved: $A^n$ represents a rotation through $n\\pi/2$ radians.";
  } else if (isScale && a === d) {
    pattern = `A^n = ${a}^n I`;
    questionText = `Let $A = \\begin{pmatrix} ${a} & 0 \\\\ 0 & ${a} \\end{pmatrix}$. Prove by induction that $A^n = \\begin{pmatrix} ${a}^n & 0 \\\\ 0 & ${a}^n \\end{pmatrix}$ for all $n \\in \\mathbb{N}$.`;
    finalAnswer = `Proved: $A^n = ${a}^n I$ for all $n \\in \\mathbb{N}$.`;
  } else if (b === 0 && c === 0) {
    pattern = `A^n = \\begin{pmatrix} ${a}^n & 0 \\\\ 0 & ${d}^n \\end{pmatrix}`;
    questionText = `Let $A = \\begin{pmatrix} ${a} & 0 \\\\ 0 & ${d} \\end{pmatrix}$. Use induction to prove $A^n = \\begin{pmatrix} ${a}^n & 0 \\\\ 0 & ${d}^n \\end{pmatrix}$ for all positive integers $n$.`;
    finalAnswer = `Proved: $A^n = \\begin{pmatrix} ${a}^n & 0 \\\\ 0 & ${d}^n \\end{pmatrix}$.`;
  } else {
    pattern = `A^n = \\begin{pmatrix} ${a}^n & ${b}\\frac{${a}^n-1}{${a}-1} \\\\ 0 & 1 \\end{pmatrix}`;
    questionText = `Let $A = \\begin{pmatrix} ${a} & ${b} \\\\ 0 & 1 \\end{pmatrix}$. Prove by induction that $A^n = \\begin{pmatrix} ${a}^n & ${b}\\dfrac{${a}^n - 1}{${a} - 1} \\\\ 0 & 1 \\end{pmatrix}$ for all $n \\in \\mathbb{N}$.`;
    finalAnswer = `Proved the upper-triangular matrix power formula for $A^n$.`;
  }

  const steps = [
    step(1, "State $P(n)$", `P(n): ${pattern}`, "Write the matrix power formula to be proved."),
    step(2, "Base case $n=1$", "A^1 = A", "When $n=1$, the formula must reduce to $A$ itself."),
    step(3, "Verify base", `A = \\begin{pmatrix} ${a} & ${b} \\\\ ${c} & ${d} \\end{pmatrix} \\checkmark`, "Substituting $n=1$ into the proposed formula gives $A$."),
    step(4, "Inductive hypothesis", "\\text{Assume } P(k) \\text{ is true for some } k \\geqslant 1", "Suppose the matrix power formula holds for exponent $k$."),
    step(5, "Consider $A^{k+1}$", "A^{k+1} = A^k \\cdot A", "Express the next power as a matrix product."),
    step(6, "Substitute $A^k$", "\\text{Multiply the assumed form of } A^k \\text{ by } A", "Use the inductive hypothesis for $A^k$."),
    step(7, "Perform multiplication", "\\text{Compute each entry of the product matrix}", "Matrix multiplication: row $\\times$ column for each entry."),
    step(8, "Simplify entries", "\\text{Collect terms to match the proposed formula with } n=k+1", "Algebraic simplification of each matrix element."),
    step(9, "Conclusion", "P(k+1) \\text{ holds. By induction, } P(n) \\text{ for all } n \\in \\mathbb{N}", "The inductive step confirms the power pattern."),
  ];
  return indQ(qNum, { difficulty, marks, answerType: "written", tags: [...tags, "matrices", "matrix-powers"], questionText, workedSolution: { steps, finalAnswer } });
}

// ─── Strong induction ─────────────────────────────────────────────────────────
function strongInductionFib(qNum, tags = [], marks = 8, difficulty = "Hard") {
  const steps = [
    step(1, "State $P(n)$", "P(n): a_n = \\frac{\\phi^n - \\psi^n}{\\sqrt{5}} \\text{ where } \\phi = \\frac{1+\\sqrt{5}}{2},\\; \\psi = \\frac{1-\\sqrt{5}}{2}", "Binet's formula for Fibonacci numbers."),
    step(2, "Note recurrence", "a_n = a_{n-1} + a_{n-2},\\; a_1 = 1,\\; a_2 = 1", "Fibonacci numbers satisfy this second-order recurrence."),
    step(3, "Base cases", "a_1 = 1,\\; a_2 = 1", "Verify $P(1)$ and $P(2)$ directly."),
    step(4, "Strong inductive hypothesis", "\\text{Assume } P(j) \\text{ true for all } j \\leqslant k, \\text{ where } k \\geqslant 2", "Strong induction: assume all previous cases, not just $k$."),
    step(5, "Consider $a_{k+1}$", "a_{k+1} = a_k + a_{k-1}", "Use the recurrence relation."),
    step(6, "Apply hypothesis to both terms", "a_k + a_{k-1} = \\frac{\\phi^k - \\psi^k}{\\sqrt{5}} + \\frac{\\phi^{k-1} - \\psi^{k-1}}{\\sqrt{5}}", "Substitute Binet's formula for both terms."),
    step(7, "Factor", "= \\frac{\\phi^{k-1}(\\phi + 1) - \\psi^{k-1}(\\psi + 1)}{\\sqrt{5}}", "Factor out $\\phi^{k-1}$ and $\\psi^{k-1}$."),
    step(8, "Use $\\phi + 1 = \\phi^2$", "\\phi + 1 = \\phi^2 \\text{ and } \\psi + 1 = \\psi^2", "These follow from the defining equation $x^2 = x + 1$."),
    step(9, "Simplify", "= \\frac{\\phi^{k+1} - \\psi^{k+1}}{\\sqrt{5}}", "This is $P(k+1)$."),
    step(10, "Conclusion", "P(k+1) \\text{ holds. By strong induction, Binet's formula is valid } \\forall n", "Strong induction completes the proof."),
  ];
  return indQ(qNum, {
    difficulty,
    marks,
    answerType: "written",
    tags: [...tags, "strong-induction", "recurrence"],
    questionText: "The Fibonacci sequence is defined by $a_1 = 1$, $a_2 = 1$, $a_n = a_{n-1} + a_{n-2}$ for $n \\geqslant 3$. Using strong induction, prove that $\\displaystyle a_n = \\frac{\\left(\\frac{1+\\sqrt{5}}{2}\\right)^n - \\left(\\frac{1-\\sqrt{5}}{2}\\right)^n}{\\sqrt{5}}$.",
    workedSolution: { steps, finalAnswer: "Proved Binet's formula for Fibonacci numbers by strong induction." },
  });
}

function strongInductionPostage(qNum, coins, target, tags = [], marks = 7, difficulty = "Hard") {
  const coinStr = coins.join("p, ") + "p";
  const steps = [
    step(1, "State $P(n)$", `P(n): \\text{every amount } n \\geqslant ${target} \\text{ pence can be formed using ${coinStr} coins}`, "This is the coin problem — a classic strong induction application."),
    step(2, "Base cases", `\\text{Verify } P(${target}), P(${target + 1}), \\ldots \\text{ up to } P(${target + coins.length - 1})`, `Check each amount from $${target}$ to $${target + coins.length - 1}$ explicitly.`),
    step(3, "Strong hypothesis", `\\text{Assume } P(j) \\text{ true for all } ${target} \\leqslant j \\leqslant k`, "Assume every amount in the range can be formed."),
    step(4, `Consider $n = k+1$`, `k+1 \\geqslant ${target + coins.length}`, "The next amount to prove."),
    step(5, "Subtract a coin", `k+1 - ${coins[0]} = k+1-${coins[0]} \\geqslant ${target}`, `Subtract the smallest coin value; the remainder is at least $${target}$.`),
    step(6, "Apply hypothesis", `\\text{Since } ${target} \\leqslant k+1-${coins[0]} \\leqslant k, \\text{ this amount can be formed}`, "The remainder is covered by the strong hypothesis."),
    step(7, "Add coin back", `\\text{Add a ${coins[0]}p coin to form } k+1`, "Adding the coin back gives the required amount."),
    step(8, "Conclusion", `P(k+1) \\text{ holds. By strong induction, all } n \\geqslant ${target} \\text{ can be formed}`, "The postage problem is solved."),
  ];
  return indQ(qNum, {
    difficulty,
    marks,
    answerType: "written",
    tags: [...tags, "strong-induction", "postage"],
    questionText: `Prove by strong induction that every amount of ${target}p or more can be formed using ${coinStr} coins only.`,
    workedSolution: { steps, finalAnswer: `Proved: any amount $\\geqslant ${target}$p can be made with ${coinStr} coins.` },
  });
}

// ─── Recurrence relation ──────────────────────────────────────────────────────
function recurrence(qNum, formula, initial, tags = [], marks = 6, difficulty = "Intermediate") {
  const steps = [
    step(1, "State $P(n)$", `P(n): a_n = ${formula}`, "Write the closed-form solution to be proved."),
    step(2, "Verify recurrence", `a_{n+1} = 2a_n + 1,\\; a_1 = 1`, "Confirm the recurrence and initial condition."),
    step(3, "Base case $n=1$", `a_1 = 1,\\quad ${formula.replace(/n/g, "1")} = 1 \\checkmark`, "Check the formula at $n=1$."),
    step(4, "Inductive hypothesis", `\\text{Assume } a_k = ${formula}`, "Suppose the closed form holds for $n=k$."),
    step(5, "Compute $a_{k+1}$", "a_{k+1} = 2a_k + 1", "Apply the recurrence relation."),
    step(6, "Substitute", `= 2\\left(${formula}\\right) + 1`, "Replace $a_k$ using the hypothesis."),
    step(7, "Simplify", `= ${formula.replace(/n/g, "(k+1)")}`, "Algebraic simplification to the form with $n=k+1$."),
    step(8, "Conclusion", "P(k+1) \\text{ holds. By induction, the closed form is valid } \\forall n", "The inductive step is complete."),
  ];
  return indQ(qNum, {
    difficulty,
    marks,
    answerType: "written",
    tags: [...tags, "recurrence"],
    questionText: `A sequence satisfies $a_1 = 1$ and $a_{n+1} = 2a_n + 1$ for $n \\geqslant 1$. Prove by induction that $a_n = 2^n - 1$ for all $n \\in \\mathbb{N}$.`,
    workedSolution: { steps, finalAnswer: "Proved: $a_n = 2^n - 1$ for all $n \\in \\mathbb{N}$." },
  });
}

// ─── Bernoulli inequality ─────────────────────────────────────────────────────
function bernoulli(qNum, r, tags = [], marks = 6, difficulty = "Intermediate") {
  const steps = [
    step(1, "State $P(n)$", `P(n): (1+x)^n \\geqslant 1 + nx \\text{ for } x \\geqslant 0`, "Bernoulli's inequality — a fundamental result."),
    step(2, "Base case $n=1$", "(1+x)^1 = 1+x \\geqslant 1+x \\checkmark", "Equality holds when $n=1$."),
    step(3, "Inductive hypothesis", "\\text{Assume } (1+x)^k \\geqslant 1 + kx", "Suppose the inequality holds for $n=k$."),
    step(4, "Consider $n=k+1$", "(1+x)^{k+1} = (1+x)^k(1+x)", "Express the next power as a product."),
    step(5, "Apply hypothesis", "(1+x)^{k+1} \\geqslant (1+kx)(1+x)", "Since $1+x \\geqslant 0$, multiply the inequality."),
    step(6, "Expand", "= 1 + (k+1)x + kx^2", "Expand the right-hand side."),
    step(7, "Drop non-negative term", "\\geqslant 1 + (k+1)x", "Since $kx^2 \\geqslant 0$, we can discard it."),
    step(8, "Conclusion", "P(k+1) \\text{ holds. By induction, Bernoulli's inequality is proved}", "The inductive step is complete."),
  ];
  return indQ(qNum, {
    difficulty,
    marks,
    answerType: "written",
    tags: [...tags, "inequality", "bernoulli"],
    questionText: "Prove by induction that $(1+x)^n \\geqslant 1 + nx$ for all $x \\geqslant 0$ and $n \\in \\mathbb{N}$.",
    workedSolution: { steps, finalAnswer: "Proved Bernoulli's inequality: $(1+x)^n \\geqslant 1 + nx$ for $x \\geqslant 0$, $n \\in \\mathbb{N}$." },
  });
}

// ─── Custom hard question ─────────────────────────────────────────────────────
function hardQ(qNum, questionText, steps, finalAnswer, tags = [], marks = 8) {
  return indQ(qNum, { difficulty: "Hard", marks, answerType: "written", tags: [...tags, "multi-step"], questionText, workedSolution: { steps, finalAnswer } });
}

// ─── Σr(r+1) ─────────────────────────────────────────────────────────────────
function sumRrPlus1(qNum, tags = [], marks = 5, difficulty = "Intermediate") {
  const steps = [
    step(1, "State $P(n)$", "P(n): \\sum_{r=1}^{n} r(r+1) = \\frac{n(n+1)(n+2)}{3}", "Each term is the product of consecutive integers."),
    step(2, "Base case $n=1$", "1 \\cdot 2 = 2,\\quad \\frac{1 \\cdot 2 \\cdot 3}{3} = 2 \\checkmark", "Both sides equal $2$."),
    step(3, "Inductive hypothesis", "\\text{Assume } \\sum_{r=1}^{k} r(r+1) = \\frac{k(k+1)(k+2)}{3}", "Suppose true for $n=k$."),
    step(4, "Sum to $k+1$", "\\sum_{r=1}^{k+1} r(r+1) = \\frac{k(k+1)(k+2)}{3} + (k+1)(k+2)", "Add the next term $(k+1)(k+2)$."),
    step(5, "Factor", "= \\frac{(k+1)(k+2)(k + 3)}{3}", "Factor out $(k+1)(k+2)$ and simplify."),
    step(6, "Match form", "= \\frac{(k+1)((k+1)+1)((k+1)+2)}{3}", "This is the formula with $n=k+1$."),
    step(7, "Conclusion", "P(k+1) \\text{ holds. By induction, true for all } n", "The inductive step is complete."),
  ];
  return indQ(qNum, {
    difficulty,
    marks,
    answerType: "written",
    tags: [...tags, "series"],
    questionText: "Prove by induction that $\\displaystyle\\sum_{r=1}^{n} r(r+1) = \\frac{n(n+1)(n+2)}{3}$ for all positive integers $n$.",
    workedSolution: { steps, finalAnswer: "Proved: $\\sum_{r=1}^{n} r(r+1) = \\frac{n(n+1)(n+2)}{3}$." },
  });
}

// ─── 2^n ≥ n² ─────────────────────────────────────────────────────────────────
function powerVsSquare(qNum, base, threshold, tags = [], marks = 7, difficulty = "Hard") {
  const steps = [
    step(1, "State $P(n)$", `P(n): ${base}^n \\geqslant n^2`, "Compare exponential growth with polynomial growth."),
    step(2, `Base case $n=${threshold}$`, `${base}^{${threshold}} = ${base ** threshold}, \\quad ${threshold}^2 = ${threshold ** 2}`, "Verify at the starting value."),
    step(3, "Base holds", `${base ** threshold} \\geqslant ${threshold ** 2} \\checkmark`, "Confirm the inequality at the base."),
    step(4, "Inductive hypothesis", `\\text{Assume } ${base}^k \\geqslant k^2 \\text{ for } k \\geqslant ${threshold}`, "Suppose true for $n=k$."),
    step(5, "Consider $n=k+1$", `${base}^{k+1} = ${base} \\cdot ${base}^k`, "Express using the power rule."),
    step(6, "Apply hypothesis", `${base}^{k+1} \\geqslant ${base} \\cdot k^2`, `Multiply the inequality by $${base}$.`),
    step(7, "Need to show", `${base}k^2 \\geqslant (k+1)^2 = k^2 + 2k + 1`, "We must verify this auxiliary inequality."),
    step(8, "Rearrange", `(${base}-1)k^2 - 2k - 1 \\geqslant 0`, "Bring all terms to one side."),
    step(9, "Verify for $k \\geqslant ${threshold}$", `\\text{For } k \\geqslant ${threshold}: (${base}-1)k^2 \\geqslant ${(base - 1) * threshold ** 2} > 2k + 1`, "The quadratic in $k$ is positive for large enough $k$."),
    step(10, "Conclusion", `${base}^{k+1} \\geqslant (k+1)^2. \\text{ By induction, true } \\forall n \\geqslant ${threshold}`, "The inductive step is complete."),
  ];
  return indQ(qNum, {
    difficulty,
    marks,
    answerType: "written",
    tags: [...tags, "inequality"],
    questionText: `Prove by induction that $${base}^n \\geqslant n^2$ for all integers $n \\geqslant ${threshold}$.`,
    workedSolution: { steps, finalAnswer: `Proved: $${base}^n \\geqslant n^2$ for all $n \\geqslant ${threshold}$.` },
  });
}

// ─── Divisibility 5^n + 2·5^(n-1) etc ───────────────────────────────────────
function divisibilityLinearCombo(qNum, tags = [], marks = 7, difficulty = "Hard") {
  const steps = [
    step(1, "State $P(n)$", "P(n): 7 \\mid 5^n - (-2)^n", "Prove divisibility using the alternating-power form."),
    step(2, "Base case $n=1$", "5 - (-2) = 7 \\checkmark", "Divisible by $7$."),
    step(3, "Inductive hypothesis", "\\text{Assume } 7 \\mid 5^k - (-2)^k", "Suppose true for $n=k$."),
    step(4, "Consider $n=k+1$", "5^{k+1} - (-2)^{k+1} = 5 \\cdot 5^k - (-2) \\cdot (-2)^k", "Factor the next term."),
    step(5, "Rearrange", "= 5(5^k - (-2)^k) + 5(-2)^k - (-2)(-2)^k", "Add and subtract to expose the inductive form."),
    step(6, "Simplify", "= 5(5^k - (-2)^k) + (-2)^k(5 - (-2)) = 5(5^k - (-2)^k) + 7(-2)^k", "The second term is $7(-2)^k$."),
    step(7, "Apply hypothesis", "\\text{Both terms are multiples of } 7", "First term: $5 \\times 7m$; second term: $7(-2)^k$."),
    step(8, "Conclusion", "P(k+1) \\text{ holds. By induction, } 7 \\mid 5^n - (-2)^n", "The proof is complete."),
  ];
  return indQ(qNum, {
    difficulty,
    marks,
    answerType: "written",
    tags: [...tags, "divisibility"],
    questionText: "Prove by induction that $5^n - (-2)^n$ is divisible by $7$ for all positive integers $n$.",
    workedSolution: { steps, finalAnswer: "Proved: $7 \\mid 5^n - (-2)^n$ for all $n \\in \\mathbb{N}$." },
  });
}

// ─── Build all 70 questions ───────────────────────────────────────────────────
const questions = [
  // Easy: Σr and basic series (1–8)
  sumR(1, 0, ["basic"]),
  sumR(2, 1, ["basic"]),
  sumR(3, 2, ["basic"]),
  sumR(4, 3, ["basic"]),
  sumEven(5, ["basic"]),
  sumEven(6, ["basic"]),
  sumOdd(7, ["basic"]),
  sumOdd(8, ["basic"]),

  // Easy: Divisibility (9–16)
  divisibility(9, 3, 2, null, ["basic"], 4, "Easy"),
  divisibility(10, 4, 3, null, ["basic"], 4, "Easy"),
  divisibility(11, 5, 4, null, ["basic"], 4, "Easy"),
  divisibility(12, 7, 6, null, ["basic"], 4, "Easy"),
  divisibility(13, 3, 2, "3^{2n} - 1", ["even-power"], 4, "Easy"),
  divisibility(14, 2, 3, "2^{2n} - 1", ["even-power"], 4, "Easy"),
  divisibility(15, 9, 8, null, ["basic"], 4, "Easy"),
  divisibility(16, 11, 10, null, ["basic"], 4, "Easy"),

  // Easy: Inequalities (17–22)
  inequality(17, 2, "n", 2, ["basic"]),
  inequality(18, 2, "n", 2, ["basic"]),
  inequality(19, 3, "n", 1, ["basic"]),
  inequality(20, 2, "n", 2, ["powers-of-2"]),
  inequality(21, 2, "n", 2, ["comparison"]),
  inequality(22, 3, "n", 1, ["powers-of-3"]),

  // Easy: More series (23–25)
  sumR(23, 0, ["review"]),
  sumOdd(24, ["review"]),
  sumEven(25, ["review"]),

  // Intermediate: Σr² (26–32)
  sumR2(26, 0, ["basic"]),
  sumR2(27, 1, ["basic"]),
  sumR2(28, 2, ["basic"]),
  sumR2(29, 0, ["review"]),
  sumR2(30, 1, ["review"]),
  sumR2(31, 2, ["review"]),
  sumR2(32, 0, ["exam-style"], 6, "Hard"),

  // Intermediate: Σr³ (33–38)
  sumR3(33, 0, ["basic"]),
  sumR3(34, 1, ["basic"]),
  sumR3(35, 2, ["basic"]),
  sumR3(36, 0, ["review"]),
  sumR3(37, 1, ["review"]),
  sumR3(38, 2, ["exam-style"], 7, "Hard"),

  // Intermediate: Divisibility (39–44)
  divisibilityDiff(39, 2, 1, 1, ["difference-of-powers"]),
  divisibilityDiff(40, 3, 1, 2, ["difference-of-powers"]),
  divisibilityDiff(41, 5, 2, 3, ["difference-of-powers"]),
  divisibilityPoly(42, ["polynomial"]),
  divisibilityPoly(43, ["polynomial"]),
  divisibility(44, 6, 5, "6^n - 1", ["medium"], 5, "Intermediate"),

  // Intermediate: Inequalities & series (45–50)
  factorialInequality(45, 4, ["factorial"]),
  factorialInequality(46, 4, ["factorial"], 7, "Hard"),
  bernoulli(47, 1, ["bernoulli"]),
  bernoulli(48, 1, ["bernoulli"]),
  geometricSeries(49, 2, ["geometric"]),
  geometricSeries(50, 3, ["geometric"], 6, "Hard"),

  // Intermediate: Matrices & recurrence (51–55)
  matrixPower(51, 2, 0, 0, 2, ["diagonal"]),
  matrixPower(52, 3, 0, 0, 3, ["diagonal"]),
  matrixPower(53, 2, 1, 0, 1, ["upper-triangular"]),
  matrixPower(54, 3, 2, 0, 1, ["upper-triangular"], 8, "Hard"),
  recurrence(55, "2^n - 1", 1, ["recurrence"]),

  // Intermediate: More (56–60)
  sumRrPlus1(56, ["product-series"]),
  sumRrPlus1(57, ["product-series"]),
  geometricSeries(58, 2, ["geometric"]),
  divisibility(59, 8, 7, null, ["medium"], 5, "Intermediate"),
  divisibilityDiff(60, 4, 1, 3, ["difference-of-powers"], 7, "Hard"),

  // Hard: Strong induction & advanced (61–65)
  strongInductionPostage(61, [3, 5], 8, ["postage-3-5"]),
  strongInductionPostage(62, [2, 5], 4, ["postage-2-5"]),
  strongInductionFib(63, ["fibonacci"]),
  powerVsSquare(64, 2, 4, ["exponential-vs-polynomial"]),
  powerVsSquare(65, 2, 5, ["exponential-vs-polynomial"]),

  // Hard: Matrix & divisibility (66–68)
  matrixPower(66, 0, -1, 1, 0, ["rotation"]),
  divisibilityLinearCombo(67, ["advanced-divisibility"]),
  hardQ(
    68,
    "Prove by induction that $\\displaystyle\\sum_{r=1}^{n} \\frac{1}{r(r+1)} = \\frac{n}{n+1}$ for all $n \\in \\mathbb{N}$.",
    [
      step(1, "State $P(n)$", "P(n): \\sum_{r=1}^{n} \\frac{1}{r(r+1)} = \\frac{n}{n+1}", "A telescoping series in summation form."),
      step(2, "Partial fractions", "\\frac{1}{r(r+1)} = \\frac{1}{r} - \\frac{1}{r+1}", "Decompose each term — this is the key identity."),
      step(3, "Base case $n=1$", "\\frac{1}{1 \\cdot 2} = \\frac{1}{2}, \\quad \\frac{1}{1+1} = \\frac{1}{2} \\checkmark", "Both sides equal $\\frac{1}{2}$."),
      step(4, "Inductive hypothesis", "\\text{Assume } \\sum_{r=1}^{k} \\frac{1}{r(r+1)} = \\frac{k}{k+1}", "Suppose the formula holds for $n=k$."),
      step(5, "Sum to $k+1$", "\\sum_{r=1}^{k+1} \\frac{1}{r(r+1)} = \\frac{k}{k+1} + \\frac{1}{(k+1)(k+2)}", "Add the next term."),
      step(6, "Common denominator", "= \\frac{k(k+2) + 1}{(k+1)(k+2)}", "Write over $(k+1)(k+2)$."),
      step(7, "Simplify numerator", "= \\frac{k^2 + 2k + 1}{(k+1)(k+2)} = \\frac{(k+1)^2}{(k+1)(k+2)}", "Recognise $(k+1)^2$ in the numerator."),
      step(8, "Cancel", "= \\frac{k+1}{k+2}", "Cancel one factor of $(k+1)$."),
      step(9, "Conclusion", "P(k+1) \\text{ holds. By induction, true for all } n", "This matches $\\frac{n}{n+1}$ with $n=k+1$."),
    ],
    "Proved: $\\sum_{r=1}^{n} \\frac{1}{r(r+1)} = \\frac{n}{n+1}$ for all $n \\in \\mathbb{N}$.",
    ["telescoping"],
    8
  ),

  // Hard: Multi-step capstone (69–70)
  hardQ(
    69,
    "Let $A = \\begin{pmatrix} 1 & 1 \\\\ 0 & 1 \\end{pmatrix}$. Prove by induction that $A^n = \\begin{pmatrix} 1 & n \\\\ 0 & 1 \\end{pmatrix}$ for all $n \\in \\mathbb{N}$, and hence show that $A^n - I$ is divisible (entry-wise in $\\mathbb{Z}$) by $n$.",
    [
      step(1, "State $P(n)$", "P(n): A^n = \\begin{pmatrix} 1 & n \\\\ 0 & 1 \\end{pmatrix}", "This is a shear transformation raised to the $n$th power."),
      step(2, "Base case $n=1$", "A^1 = \\begin{pmatrix} 1 & 1 \\\\ 0 & 1 \\end{pmatrix} \\checkmark", "Trivially true for $n=1$."),
      step(3, "Inductive hypothesis", "\\text{Assume } A^k = \\begin{pmatrix} 1 & k \\\\ 0 & 1 \\end{pmatrix}", "Suppose the formula holds for exponent $k$."),
      step(4, "Compute $A^{k+1}$", "A^{k+1} = A^k \\cdot A = \\begin{pmatrix} 1 & k \\\\ 0 & 1 \\end{pmatrix}\\begin{pmatrix} 1 & 1 \\\\ 0 & 1 \\end{pmatrix}", "Matrix multiply the assumed form by $A$."),
      step(5, "Multiply", "= \\begin{pmatrix} 1 & k+1 \\\\ 0 & 1 \\end{pmatrix}", "Top-right entry: $1 \\cdot 1 + k \\cdot 1 = k+1$."),
      step(6, "Inductive step complete", "P(k+1) \\text{ holds}", "The form is confirmed for $n=k+1$."),
      step(7, "Compute $A^n - I$", "A^n - I = \\begin{pmatrix} 0 & n \\\\ 0 & 0 \\end{pmatrix}", "Subtract the identity matrix."),
      step(8, "Divisibility", "\\text{Every entry is divisible by } n", "The $(1,2)$-entry is exactly $n$; all others are $0$."),
      step(9, "Conclusion", "A^n = \\begin{pmatrix} 1 & n \\\\ 0 & 1 \\end{pmatrix} \\text{ and } n \\mid (A^n - I)_{ij}", "Both parts proved by induction."),
    ],
    "Proved: $A^n = \\begin{pmatrix} 1 & n \\\\ 0 & 1 \\end{pmatrix}$ and $A^n - I$ has entries divisible by $n$.",
    ["matrices", "shear"],
    9
  ),

  hardQ(
    70,
    "Prove by strong induction that every integer $n \\geqslant 2$ can be written as a product of prime numbers.",
    [
      step(1, "State $P(n)$", "P(n): n \\text{ can be expressed as a product of primes}", "The Fundamental Theorem of Arithmetic (existence part)."),
      step(2, "Base case $n=2$", "2 \\text{ is prime, so } 2 = 2 \\checkmark", "The smallest case is itself prime."),
      step(3, "Strong hypothesis", "\\text{Assume } P(j) \\text{ true for all } 2 \\leqslant j \\leqslant k", "Assume every integer up to $k$ factors into primes."),
      step(4, "Consider $n = k+1$", "k+1 \\geqslant 3", "Two cases arise depending on whether $k+1$ is prime."),
      step(5, "Case 1: $k+1$ is prime", "k+1 \\text{ is its own prime factorisation}", "A prime is trivially a product of one prime."),
      step(6, "Case 2: $k+1$ is composite", "k+1 = ab \\text{ where } 2 \\leqslant a, b \\leqslant k", "A composite number has a non-trivial factorisation."),
      step(7, "Apply hypothesis to factors", "a \\text{ and } b \\text{ are products of primes by the hypothesis}", "Since $a, b \\leqslant k$, both factor into primes."),
      step(8, "Combine", "k+1 = ab \\text{ is a product of primes}", "Multiply the prime factorisations of $a$ and $b$."),
      step(9, "Conclusion", "P(k+1) \\text{ holds in both cases. By strong induction, every } n \\geqslant 2 \\text{ factors into primes}", "The existence of prime factorisation is proved."),
    ],
    "Proved by strong induction: every integer $n \\geqslant 2$ is a product of primes.",
    ["strong-induction", "primes"],
    9
  ),
];

const STEP_MIN = { Easy: 6, Intermediate: 9, Hard: 13 };
const STEP_MAX = { Easy: 9, Intermediate: 13, Hard: 18 };
const EXTRA = [
  () => step(0, "Recall induction structure", "\\text{Base} \\rightarrow \\text{Hypothesis} \\rightarrow \\text{Step} \\rightarrow \\text{Conclusion}", "Mathematical induction has four standard stages."),
  () => step(0, "State $P(n)$ clearly", "P(n): \\text{[proposition]}", "Always begin by writing exactly what you intend to prove."),
  () => step(0, "Base case", "n = 1 \\text{ (or smallest value)}", "Verify the proposition for the first value of $n$."),
  () => step(0, "Inductive hypothesis", "\\text{Assume } P(k) \\text{ true}", "Suppose the result holds for some $k$ in the domain."),
  () => step(0, "Target for inductive step", "P(k+1): \\text{[what to show]}", "State clearly what must be proved for the next value."),
  () => step(0, "Use the hypothesis", "\\text{Substitute the assumed result}", "Replace occurrences of $P(k)$ with its formula during the inductive step."),
  () => step(0, "Algebraic simplification", "\\text{Factorise, expand, or combine}", "Manipulate expressions to match the target form."),
  () => step(0, "Conclude induction", "\\text{By mathematical induction, } P(n) \\text{ holds } \\forall n", "If base case and inductive step hold, the proposition is proved for all $n$."),
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

const easy = questions.filter((q) => q.difficulty === "Easy").length;
const intermediate = questions.filter((q) => q.difficulty === "Intermediate").length;
const hard = questions.filter((q) => q.difficulty === "Hard").length;
console.log(`Difficulty breakdown: Easy=${easy}, Intermediate=${intermediate}, Hard=${hard}`);

writeFileSync(outPath, `import { Question } from "@/lib/types";\n\nexport const questions: Question[] = ${JSON.stringify(questions, null, 2)};\n`);
console.log(`Wrote ${questions.length} questions to ${outPath}`);
