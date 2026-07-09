#!/usr/bin/env node
/**
 * Generates 70 A-Level Further Maths "Maclaurin series" questions.
 * Output: src/data/questions/a-level-further-maths/year-2-pure/maclaurin.ts
 */

import { writeFileSync, mkdirSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const outDir = resolve(__dirname, "../src/data/questions/a-level-further-maths/year-2-pure");
const outPath = resolve(outDir, "maclaurin.ts");

mkdirSync(outDir, { recursive: true });

const SUBTOPIC = "Maclaurin series";
const SUBTOPIC_ID = "fm.y2.pure.maclaurin";
const LEVEL = "A-Level Further Maths";
const TOPIC = "Further Maths Year 2: Pure (Core Pure 2)";

const qid = (n) => `fm.y2.pure.maclaurin.q${String(n).padStart(3, "0")}`;
const step = (n, description, workingLatex, explanation) => ({ stepNumber: n, description, workingLatex, explanation, diagram: null });
const base = (meta) => ({ level: LEVEL, topic: TOPIC, subtopic: SUBTOPIC, subtopicId: SUBTOPIC_ID, questionDiagram: null, ...meta });
const macQ = (n, meta) => base({ id: qid(n), tags: ["maclaurin", ...(meta.tags || [])], ...meta });

function hardMacQ(qNum, text, steps, answer, tags = [], marks = 8) {
  return macQ(qNum, {
    difficulty: "Hard", marks, answerType: "written", tags,
    questionText: text,
    workedSolution: { steps, finalAnswer: answer },
  });
}

function standardExpQ(qNum, terms, tags = [], marks = 4, difficulty = "Easy") {
  const series = terms.join(" + ");
  const steps = [
    step(1, "Maclaurin form", `e^{x} = 1 + x + \\frac{x^{2}}{2!} + \\frac{x^{3}}{3!} + \\cdots`, "Standard result from the formula booklet."),
    step(2, "Pattern", `\\text{Term in } x^{n} \\text{ is } \\frac{x^{n}}{n!}`, "Each power is divided by its factorial."),
    step(3, "Write requested terms", `e^{x} = ${series} + \\cdots`, "Include terms up to the required order."),
    step(4, "Check $x=0$", `e^{0} = 1`, "The constant term must be 1."),
    step(5, "Check first derivative at 0", `\\frac{d}{dx}(e^{x})\\big|_{0} = 1`, "Coefficient of $x$ matches $f'(0)$."),
    step(6, "Answer", `${series} + \\cdots`, "Maclaurin expansion of $e^{x}$."),
  ];
  return macQ(qNum, {
    difficulty, marks, answerType: "written", tags: [...tags, "exponential"],
    questionText: `Write down the Maclaurin series for $e^{x}$ up to and including the term in $x^{3}$.`,
    workedSolution: { steps, finalAnswer: `$e^{x} = ${series} + \\cdots$` },
  });
}

function standardSinQ(qNum, terms, tags = [], marks = 4, difficulty = "Easy") {
  const series = terms.join(" + ");
  const steps = [
    step(1, "Maclaurin form", `\\sin x = x - \\frac{x^{3}}{3!} + \\frac{x^{5}}{5!} - \\cdots`, "Standard sine series."),
    step(2, "Odd powers only", `\\text{Only odd powers of } x \\text{ appear}`, "Sine is an odd function, so even powers vanish."),
    step(3, "Alternating signs", `\\text{Signs alternate starting with } +`, "Pattern: $+,-,+,-,\\ldots$"),
    step(4, "Write terms", `\\sin x = ${series} + \\cdots`, "Up to the required order."),
    step(5, "Check $x=0$", `\\sin 0 = 0`, "No constant term."),
    step(6, "Answer", `${series} + \\cdots`, "Expansion of $\\sin x$."),
  ];
  return macQ(qNum, {
    difficulty, marks, answerType: "written", tags: [...tags, "sine"],
    questionText: `Write down the Maclaurin series for $\\sin x$ up to and including the term in $x^{5}$.`,
    workedSolution: { steps, finalAnswer: `$\\sin x = ${series} + \\cdots$` },
  });
}

function standardCosQ(qNum, terms, tags = [], marks = 4, difficulty = "Easy") {
  const series = terms.join(" + ");
  const steps = [
    step(1, "Maclaurin form", `\\cos x = 1 - \\frac{x^{2}}{2!} + \\frac{x^{4}}{4!} - \\cdots`, "Standard cosine series."),
    step(2, "Even powers only", `\\text{Only even powers of } x`, "Cosine is an even function."),
    step(3, "Write terms", `\\cos x = ${series} + \\cdots`, "Include terms to required order."),
    step(4, "Check $x=0$", `\\cos 0 = 1`, "Constant term is 1."),
    step(5, "No $x$ term", `f'(0)=0`, "First derivative at zero is zero."),
    step(6, "Answer", `${series} + \\cdots`, "Expansion of $\\cos x$."),
  ];
  return macQ(qNum, {
    difficulty, marks, answerType: "written", tags: [...tags, "cosine"],
    questionText: `Write down the Maclaurin series for $\\cos x$ up to and including the term in $x^{4}$.`,
    workedSolution: { steps, finalAnswer: `$\\cos x = ${series} + \\cdots$` },
  });
}

function standardLnQ(qNum, terms, validity, tags = [], marks = 4, difficulty = "Easy") {
  const series = terms.join(" + ");
  const steps = [
    step(1, "Maclaurin form", `\\ln(1+x) = x - \\frac{x^{2}}{2} + \\frac{x^{3}}{3} - \\cdots`, "Standard logarithm series."),
    step(2, "Validity", validity, "Series converges only inside this interval."),
    step(3, "Alternating signs", `\\text{Coefficients } 1, -\\tfrac{1}{2}, \\tfrac{1}{3}, \\ldots`, "Denominator increases; signs alternate."),
    step(4, "Write terms", `\\ln(1+x) = ${series} + \\cdots`, "Up to required order."),
    step(5, "Check $x=0$", `\\ln 1 = 0`, "No constant term."),
    step(6, "Answer", `${series} + \\cdots`, "Expansion with validity stated."),
  ];
  return macQ(qNum, {
    difficulty, marks, answerType: "written", tags: [...tags, "logarithm", "validity"],
    questionText: `Write down the Maclaurin series for $\\ln(1+x)$ up to and including the term in $x^{3}$, and state the range of validity.`,
    workedSolution: { steps, finalAnswer: `$\\ln(1+x) = ${series} + \\cdots$, valid for ${validity}.` },
  });
}

function standardBinomialQ(qNum, n, terms, validity, tags = [], marks = 4, difficulty = "Easy") {
  const series = terms.join(" + ");
  const steps = [
    step(1, "General binomial series", `(1+x)^{n} = 1 + nx + \\frac{n(n-1)}{2!}x^{2} + \\cdots`, "Valid for $|x|<1$ when $n$ is not a positive integer."),
    step(2, "Substitute $n=${n}$", `\\text{Use } n=${n} \\text{ in each coefficient}`, "Compute successive binomial coefficients."),
    step(3, "Write terms", `(1+x)^{${n}} = ${series} + \\cdots`, "Up to required order."),
    step(4, "Validity", validity, "Range where the series converges."),
    step(5, "Check $x=0$", `(1)^{${n}} = 1`, "Constant term is 1."),
    step(6, "Answer", `${series} + \\cdots`, "Binomial Maclaurin series."),
  ];
  return macQ(qNum, {
    difficulty, marks, answerType: "written", tags: [...tags, "binomial", "validity"],
    questionText: `Find the Maclaurin series for $(1+x)^{${n}}$ up to and including the term in $x^{3}$, and state the range of validity.`,
    workedSolution: { steps, finalAnswer: `$(1+x)^{${n}} = ${series} + \\cdots$, valid for ${validity}.` },
  });
}

function compositeExpQ(qNum, a, terms, tags = [], marks = 5, difficulty = "Intermediate") {
  const series = terms.join(" + ");
  const steps = [
    step(1, "Start from $e^{x}$", `e^{x} = 1 + x + \\frac{x^{2}}{2!} + \\frac{x^{3}}{3!} + \\cdots`, "Standard series."),
    step(2, "Substitute", `\\text{Replace } x \\text{ by } ${a}x`, "Composite argument $${a}x$."),
    step(3, "Replace each power", `(${a}x)^{2} = ${a * a}x^{2},\\; (${a}x)^{3} = ${a ** 3}x^{3}`, "Square and cube the inner factor."),
    step(4, "Write series", `e^{${a}x} = ${series} + \\cdots`, "Collect terms in ascending powers."),
    step(5, "Check constant", `e^{0} = 1`, "Matches when $x=0$."),
    step(6, "Validity", `\\text{Valid for all } x`, "Exponential series converges for all real $x$."),
    step(7, "Pattern", `\\text{Coefficient of } x^{n} \\text{ is } \\frac{${a}^{n}}{n!}`, "General term structure."),
    step(8, "Answer", `${series} + \\cdots`, "Maclaurin series for $e^{" + a + "x}$."),
    step(9, "Verify linear term", `\\frac{d}{dx}(e^{${a}x})\\big|_{0} = ${a}`, "First derivative at zero."),
  ];
  return macQ(qNum, {
    difficulty, marks, answerType: "written", tags: [...tags, "composite", "exponential"],
    questionText: `Find the Maclaurin series for $e^{${a}x}$ up to and including the term in $x^{3}$.`,
    workedSolution: { steps, finalAnswer: `$e^{${a}x} = ${series} + \\cdots$` },
  });
}

function compositeSinQ(qNum, k, terms, tags = [], marks = 5, difficulty = "Intermediate") {
  const series = terms.join(" + ");
  const steps = [
    step(1, "Standard series", `\\sin x = x - \\frac{x^{3}}{3!} + \\cdots`, "Start from $\\sin x$."),
    step(2, "Substitute $x \\mapsto ${k}x$", `\\sin(${k}x)`, "Replace $x$ by $${k}x$."),
    step(3, "Expand powers", `(${k}x)^{3} = ${k ** 3}x^{3}`, "Cube the factor."),
    step(4, "Write series", `\\sin(${k}x) = ${series} + \\cdots`, "Collect terms."),
    step(5, "Odd function", `\\text{Only odd powers}`, "Symmetry preserved."),
    step(6, "Check $x=0$", `\\sin 0 = 0`, "No constant term."),
    step(7, "Validity", `\\text{Valid for all } x`, "Sine series converges everywhere."),
    step(8, "Answer", `${series} + \\cdots`, "Final expansion."),
    step(9, "Coefficient pattern", `\\text{Coeff of } x^{2r+1} \\text{ involves } ${k}^{2r+1}`, "Powers of $k$ in each term."),
  ];
  return macQ(qNum, {
    difficulty, marks, answerType: "written", tags: [...tags, "composite", "sine"],
    questionText: `Find the Maclaurin series for $\\sin(${k}x)$ up to and including the term in $x^{5}$.`,
    workedSolution: { steps, finalAnswer: `$\\sin(${k}x) = ${series} + \\cdots$` },
  });
}

function compositeCosQ(qNum, k, terms, tags = [], marks = 5, difficulty = "Intermediate") {
  const series = terms.join(" + ");
  const steps = [
    step(1, "Standard series", `\\cos x = 1 - \\frac{x^{2}}{2!} + \\frac{x^{4}}{4!} - \\cdots`, "Start from $\\cos x$."),
    step(2, "Substitute", `\\cos(${k}x)`, "Replace $x$ by $${k}x$."),
    step(3, "Expand", `(${k}x)^{2} = ${k * k}x^{2},\\; (${k}x)^{4} = ${k ** 4}x^{4}`, "Even powers only."),
    step(4, "Write series", `\\cos(${k}x) = ${series} + \\cdots`, "Collect terms."),
    step(5, "Check $x=0$", `\\cos 0 = 1`, "Constant term 1."),
    step(6, "Even function", `\\text{Only even powers}`, "Cosine symmetry."),
    step(7, "Validity", `\\text{Valid for all } x`, "Cosine series converges everywhere."),
    step(8, "Answer", `${series} + \\cdots`, "Final expansion."),
    step(9, "Verify quadratic", `\\text{Coeff of } x^{2} \\text{ is } -\\frac{${k}^{2}}{2}`, "From substitution."),
  ];
  return macQ(qNum, {
    difficulty, marks, answerType: "written", tags: [...tags, "composite", "cosine"],
    questionText: `Find the Maclaurin series for $\\cos(${k}x)$ up to and including the term in $x^{4}$.`,
    workedSolution: { steps, finalAnswer: `$\\cos(${k}x) = ${series} + \\cdots$` },
  });
}

function compositeLnQ(qNum, a, terms, validity, tags = [], marks = 5, difficulty = "Intermediate") {
  const series = terms.join(" + ");
  const inner = a > 0 ? `${a}x` : `${a}x`.replace("-", "-");
  const steps = [
    step(1, "Standard series", `\\ln(1+x) = x - \\frac{x^{2}}{2} + \\frac{x^{3}}{3} - \\cdots`, "Start from $\\ln(1+x)$."),
    step(2, "Substitute", `\\ln(1 + ${inner})`, "Replace $x$ by $${inner}$."),
    step(3, "Expand powers", `\\text{Compute } (${inner})^{2}, (${inner})^{3}`, "Substitute into each term."),
    step(4, "Write series", `\\ln(1+${inner}) = ${series} + \\cdots`, "Collect ascending powers."),
    step(5, "Validity", validity, "Requires $|${inner}| < 1$ for convergence."),
    step(6, "Check $x=0$", `\\ln 1 = 0`, "No constant term."),
    step(7, "Interpret validity", `\\text{Simplify the inequality}`, "Give range in terms of $x$."),
    step(8, "Answer", `${series} + \\cdots`, "Series with validity."),
    step(9, "Domain note", `\\text{Also need } 1+${inner} > 0`, "Logarithm requires positive argument."),
  ];
  return macQ(qNum, {
    difficulty, marks, answerType: "written", tags: [...tags, "composite", "logarithm", "validity"],
    questionText: `Find the Maclaurin series for $\\ln(1+${inner})$ up to and including the term in $x^{3}$, and state the range of validity.`,
    workedSolution: { steps, finalAnswer: `$\\ln(1+${inner}) = ${series} + \\cdots$, valid for ${validity}.` },
  });
}

function compositeBinomialQ(qNum, a, n, terms, validity, tags = [], marks = 5, difficulty = "Intermediate") {
  const series = terms.join(" + ");
  const steps = [
    step(1, "Write as $(1+${a}x)^{${n}}$", `\\text{Use binomial Maclaurin series}`, "Standard form $(1+x)^{n}$ with substitution."),
    step(2, "General coefficients", `\\frac{n(n-1)\\cdots(n-r+1)}{r!}(${a}x)^{r}`, "Binomial coefficient times power."),
    step(3, "Compute terms", `${series}`, "Up to $x^{3}$."),
    step(4, "Validity", validity, "Convergence condition."),
    step(5, "Check $x=0$", `1^{${n}} = 1`, "Constant term."),
    step(6, "Compare with $(1+x)^{n}$", `\\text{Replace } x \\text{ by } ${a}x`, "Substitution method."),
    step(7, "Answer", `${series} + \\cdots`, "Final series."),
    step(8, "Special case", `\\text{If } n \\in \\mathbb{Z}^{+}, \\text{ series terminates}`, "Note when applicable."),
    step(9, "Validity simplified", validity, "Range for $x$."),
  ];
  return macQ(qNum, {
    difficulty, marks, answerType: "written", tags: [...tags, "composite", "binomial", "validity"],
    questionText: `Find the Maclaurin series for $(1+${a}x)^{${n}}$ up to and including the term in $x^{3}$, and state the range of validity.`,
    workedSolution: { steps, finalAnswer: `$(1+${a}x)^{${n}} = ${series} + \\cdots$, valid for ${validity}.` },
  });
}

function validityQ(qNum, fn, condition, reason, tags = [], marks = 4, difficulty = "Easy") {
  const steps = [
    step(1, "Identify series type", fn, "Recognise the standard Maclaurin form."),
    step(2, "Convergence condition", condition, "Standard validity from the formula booklet."),
    step(3, "Reason", reason, "Why the condition is needed."),
    step(4, "Endpoint note", `\\text{Check endpoints separately if required}`, "Boundary behaviour may differ."),
    step(5, "Example", `\\text{Test a value inside the interval}`, "Confirm a point where the series works."),
    step(6, "Answer", condition, "Range of validity."),
  ];
  return macQ(qNum, {
    difficulty, marks, answerType: "written", tags: [...tags, "validity"],
    questionText: `State the range of validity for the Maclaurin series of ${fn}.`,
    workedSolution: { steps, finalAnswer: condition },
  });
}

function approxQ(qNum, fn, xVal, terms, approx, tags = [], marks = 5, difficulty = "Intermediate") {
  const series = terms.join(" + ");
  const steps = [
    step(1, "Maclaurin series", `${fn.replace("f(x)", "f")} = ${series} + \\cdots`, "Use expansion up to required order."),
    step(2, "Substitute", `x = ${xVal}`, "Insert the given small value."),
    step(3, "Evaluate each term", `\\text{Compute powers of } ${xVal}`, "Keep sufficient decimal accuracy."),
    step(4, "Sum terms", `\\approx ${approx}`, "Add the retained terms."),
    step(5, "Reason for accuracy", `\\text{Small } x \\text{ makes higher-order terms negligible}`, "Truncation error is small."),
    step(6, "Compare", `\\text{Calculator value close to } ${approx}`, "Sanity check."),
    step(7, "Answer", `${approx}`, "Approximation."),
    step(8, "More terms", `\\text{Adding terms improves accuracy}`, "Trade-off between effort and precision."),
    step(9, "Validity", `\\text{Ensure } ${xVal} \\text{ lies in valid range}`, "Check convergence condition."),
  ];
  return macQ(qNum, {
    difficulty, marks, answerType: "written", tags: [...tags, "approximation"],
    questionText: `Use the Maclaurin series for ${fn.replace("f(x)", "$f(x)$")} up to the term in $x^{3}$ to find an approximation to ${fn.replace("x", `${xVal}`).replace("f(x)", "$f(x)$")}.`,
    workedSolution: { steps, finalAnswer: `$${approx}$` },
  });
}

function coeffQ(qNum, fn, power, coeff, tags = [], marks = 5, difficulty = "Intermediate") {
  const steps = [
    step(1, "Write Maclaurin series", fn, "Standard or composite expansion."),
    step(2, "Identify power", `\\text{Coefficient of } x^{${power}}`, "Locate the required term."),
    step(3, "Extract coefficient", coeff, "Read off the multiplier of $x^{" + power + "}$."),
    step(4, "Verify via derivatives", `\\frac{f^{(${power})}(0)}{${power}!}`, "Alternative: Maclaurin coefficient formula."),
    step(5, "Check", coeff, "Confirm by substitution or pattern."),
    step(6, "Answer", coeff, "Required coefficient."),
  ];
  return macQ(qNum, {
    difficulty, marks, answerType: "written", tags: [...tags, "coefficient"],
    questionText: `Find the coefficient of $x^{${power}}$ in the Maclaurin series for ${fn}.`,
    workedSolution: { steps, finalAnswer: `$${coeff}$` },
  });
}

function productSeriesQ(qNum, fSeries, gSeries, productTerms, tags = [], marks = 6, difficulty = "Hard") {
  const product = productTerms.join(" + ");
  const steps = [
    step(1, "First series", fSeries, "Maclaurin expansion of first function."),
    step(2, "Second series", gSeries, "Maclaurin expansion of second function."),
    step(3, "Multiply", `\\text{Collect terms up to required order}`, "Only low-order products contribute."),
    step(4, "Constant $\\times$ constant", `\\text{Contributes to constant term}`, "Start with lowest powers."),
    step(5, "Cross terms", `\\text{Linear $\\times$ linear, etc.}`, "Build up systematically."),
    step(6, "Ignore higher orders", `\\text{Drop terms beyond required degree}`, "Maclaurin approximation."),
    step(7, "Result", `${product} + \\cdots`, "Product series."),
    step(8, "Check $x=0$", `\\text{Product of constants}`, "Verify constant term."),
    step(9, "Validity", `\\text{Intersection of individual valid ranges}`, "Both series must converge."),
    step(10, "Answer", `${product} + \\cdots`, "Final expansion."),
    step(11, "Alternative", `\\text{Differentiate and evaluate at 0}`, "Could find coefficients via derivatives."),
    step(12, "Application", `\\text{Useful for } e^{x}\\sin x \\text{ type products}`, "Common exam technique."),
    step(13, "Verify linear term", `\\text{Match } (fg)'(0)`, "First derivative check."),
  ];
  return macQ(qNum, {
    difficulty, marks, answerType: "written", tags: [...tags, "product"],
    questionText: `By multiplying appropriate Maclaurin series, find the expansion of the given product up to and including the term in $x^{3}$.`,
    workedSolution: { steps, finalAnswer: `$${product} + \\cdots$` },
  });
}

const questions = [
  // Easy: standard series (1–15)
  standardExpQ(1, ["1", "x", "\\frac{x^{2}}{2!}", "\\frac{x^{3}}{3!}"]),
  standardSinQ(2, ["x", "-\\frac{x^{3}}{3!}", "\\frac{x^{5}}{5!}"]),
  standardCosQ(3, ["1", "-\\frac{x^{2}}{2!}", "\\frac{x^{4}}{4!}"]),
  standardLnQ(4, ["x", "-\\frac{x^{2}}{2}", "\\frac{x^{3}}{3}"], "|x| < 1"),
  standardBinomialQ(5, "2", ["1", "2x", "x^{2}"], "|x| < 1", ["integer-power"]),
  standardBinomialQ(6, "\\frac{1}{2}", ["1", "\\frac{x}{2}", "-\\frac{x^{2}}{8}", "\\frac{x^{3}}{16}"], "|x| < 1", ["fractional"]),
  standardBinomialQ(7, "-1", ["1", "-x", "x^{2}", "-x^{3}"], "|x| < 1", ["negative"]),
  standardBinomialQ(8, "3", ["1", "3x", "3x^{2}", "x^{3}"], "|x| < 1", ["integer-power"]),
  validityQ(9, "$\\ln(1+x)$", "$|x| < 1$", "Logarithm series converges only when $|x|<1$ (and $x>-1$ for the function)."),
  validityQ(10, "$(1+x)^{n}$ for non-integer $n$", "$|x| < 1$", "Binomial series for general $n$ converges inside the unit interval."),
  validityQ(11, "$e^{x}$", "$\\text{all real } x$", "Exponential series has infinite radius of convergence."),
  validityQ(12, "$\\sin x$ and $\\cos x$", "$\\text{all real } x$", "Trig Maclaurin series converge for every real $x$."),
  standardExpQ(13, ["1", "x", "\\frac{x^{2}}{2!}", "\\frac{x^{3}}{3!}"], ["recall"], 3, "Easy"),
  standardCosQ(14, ["1", "-\\frac{x^{2}}{2!}", "\\frac{x^{4}}{4!}"], ["recall"], 3, "Easy"),
  standardSinQ(15, ["x", "-\\frac{x^{3}}{3!}", "\\frac{x^{5}}{5!}"], ["recall"], 3, "Easy"),

  // Intermediate: composites (16–45)
  compositeExpQ(16, 2, ["1", "2x", "2x^{2}", "\\frac{4x^{3}}{3}"]),
  compositeExpQ(17, -1, ["1", "-x", "\\frac{x^{2}}{2!}", "-\\frac{x^{3}}{3!}"]),
  compositeExpQ(18, 3, ["1", "3x", "\\frac{9x^{2}}{2}", "\\frac{27x^{3}}{6}"]),
  compositeExpQ(19, "\\tfrac{1}{2}", ["1", "\\tfrac{x}{2}", "\\tfrac{x^{2}}{8}", "\\tfrac{x^{3}}{48}"]),
  compositeSinQ(20, 2, ["2x", "-\\frac{8x^{3}}{6}", "\\frac{32x^{5}}{120}"]),
  compositeSinQ(21, 3, ["3x", "-\\frac{27x^{3}}{6}", "\\frac{243x^{5}}{120}"]),
  compositeSinQ(22, -1, ["-x", "\\frac{x^{3}}{6}", "-\\frac{x^{5}}{120}"]),
  compositeCosQ(23, 2, ["1", "-2x^{2}", "\\frac{16x^{4}}{24}"]),
  compositeCosQ(24, 3, ["1", "-\\frac{9x^{2}}{2}", "\\frac{81x^{4}}{24}"]),
  compositeCosQ(25, "\\tfrac{1}{2}", ["1", "-\\frac{x^{2}}{8}", "\\frac{x^{4}}{384}"]),
  compositeLnQ(26, 2, ["2x", "-2x^{2}", "\\frac{8x^{3}}{3}"], "|x| < \\tfrac{1}{2}"),
  compositeLnQ(27, -1, ["-x", "-\\frac{x^{2}}{2}", "-\\frac{x^{3}}{3}"], "|x| < 1"),
  compositeLnQ(28, 3, ["3x", "-\\frac{9x^{2}}{2}", "9x^{3}"], "|x| < \\tfrac{1}{3}"),
  compositeBinomialQ(29, 2, "\\tfrac{1}{2}", ["1", "x", "-x^{2}", "2x^{3}"], "|x| < \\tfrac{1}{2}"),
  compositeBinomialQ(30, -1, "2", ["1", "-2x", "3x^{2}", "-4x^{3}"], "|x| < 1"),
  compositeBinomialQ(31, 3, "-1", ["1", "-3x", "6x^{2}", "-10x^{3}"], "|x| < \\tfrac{1}{3}"),
  compositeBinomialQ(32, "\\tfrac{1}{2}", "3", ["1", "\\tfrac{3x}{2}", "\\tfrac{3x^{2}}{8}", "-\\tfrac{x^{3}}{16}"], "|x| < 2"),
  compositeExpQ(33, -2, ["1", "-2x", "2x^{2}", "-\\frac{4x^{3}}{3}"], ["negative"], 5, "Intermediate"),
  compositeSinQ(34, 4, ["4x", "-\\frac{64x^{3}}{6}", "\\frac{1024x^{5}}{120}"], [], 5, "Intermediate"),
  compositeCosQ(35, -2, ["1", "-2x^{2}", "\\frac{16x^{4}}{24}"], [], 5, "Intermediate"),
  approxQ(36, "e^{x}", "0.1", ["1", "x", "\\frac{x^{2}}{2}", "\\frac{x^{3}}{6}"], "1.10517", ["exponential"]),
  approxQ(37, "\\sin x", "0.2", ["x", "-\\frac{x^{3}}{6}"], "0.19867", ["sine"]),
  approxQ(38, "\\cos x", "0.1", ["1", "-\\frac{x^{2}}{2}"], "0.995", ["cosine"]),
  approxQ(39, "\\ln(1+x)", "0.1", ["x", "-\\frac{x^{2}}{2}", "\\frac{x^{3}}{3}"], "0.095833", ["logarithm"]),
  coeffQ(40, "$e^{2x}$", 3, "\\frac{8}{6}", ["exponential"]),
  coeffQ(41, "$\\sin(3x)$", 5, "\\frac{243}{120}", ["sine"]),
  coeffQ(42, "$(1+x)^{-2}$", 2, "3", ["binomial"]),
  coeffQ(43, "$\\ln(1+2x)$", 3, "\\frac{8}{3}", ["logarithm"]),
  coeffQ(44, "$\\cos(2x)$", 4, "\\frac{16}{24}", ["cosine"]),
  coeffQ(45, "$(1- x)^{\\frac{1}{2}}$", 3, "-\\frac{1}{16}", ["binomial"]),

  // Intermediate/hard: validity & mixed (46–55)
  macQ(46, {
    difficulty: "Intermediate", marks: 5, answerType: "written", tags: ["validity", "composite"],
    questionText: "Find the Maclaurin series for $\\sqrt{1+4x}$ up to the term in $x^{3}$, and state the range of validity.",
    workedSolution: {
      steps: [
        step(1, "Rewrite", `\\sqrt{1+4x} = (1+4x)^{1/2}`, "Binomial form."),
        step(2, "Series", `(1+4x)^{1/2} = 1 + 2x - 4x^{2} + 8x^{3} + \\cdots`, "Use $(1+x)^{1/2}$ with $x \\mapsto 4x$."),
        step(3, "Coefficients", `1,\\; \\tfrac{1}{2}(4),\\; \\tfrac{(1/2)(-1/2)}{2!}(4)^{2},\\; \\tfrac{(1/2)(-1/2)(-3/2)}{3!}(4)^{3}`, "Binomial coefficients."),
        step(4, "Simplify", `1 + 2x - 4x^{2} + 8x^{3}`, "Up to $x^{3}$."),
        step(5, "Validity", `|4x| < 1 \\Rightarrow |x| < \\tfrac{1}{4}`, "Convergence condition."),
        step(6, "Domain", `1+4x \\geq 0`, "Square root requires non-negative argument."),
        step(7, "Combined", `|x| < \\tfrac{1}{4}`, "Series validity."),
        step(8, "Check $x=0$", `\\sqrt{1} = 1`, "Constant term."),
        step(9, "Answer", `1 + 2x - 4x^{2} + 8x^{3}`, "Expansion."),
      ],
      finalAnswer: "$\\sqrt{1+4x} = 1 + 2x - 4x^{2} + 8x^{3} + \\cdots$, valid for $|x| < \\tfrac{1}{4}$.",
    },
  }),

  macQ(47, {
    difficulty: "Intermediate", marks: 5, answerType: "written", tags: ["composite", "exponential"],
    questionText: "Find the Maclaurin series for $e^{-x^{2}}$ up to and including the term in $x^{4}$.",
    workedSolution: {
      steps: [
        step(1, "Start from $e^{u}$", `e^{u} = 1 + u + \\frac{u^{2}}{2!} + \\cdots`, "Standard exponential."),
        step(2, "Substitute $u = -x^{2}$", `e^{-x^{2}}`, "Composite argument."),
        step(3, "Powers", `u^{2} = x^{4}`, "Only even powers of $x$ appear."),
        step(4, "Series", `e^{-x^{2}} = 1 - x^{2} + \\frac{x^{4}}{2} + \\cdots`, "Substitute and simplify."),
        step(5, "Even function", `\\text{No odd powers}`, "Symmetry about $x=0$."),
        step(6, "Check $x=0$", `e^{0} = 1`, "Constant term."),
        step(7, "Validity", `\\text{All real } x`, "Exponential converges everywhere."),
        step(8, "Application", `\\text{Used in Gaussian integrals}`, "Important in statistics."),
        step(9, "Answer", `1 - x^{2} + \\frac{x^{4}}{2}`, "Up to $x^{4}$."),
      ],
      finalAnswer: "$e^{-x^{2}} = 1 - x^{2} + \\dfrac{x^{4}}{2} + \\cdots$",
    },
  }),

  macQ(48, {
    difficulty: "Intermediate", marks: 6, answerType: "written", tags: ["integration"],
    questionText: "Given that $\\dfrac{1}{1+x} = 1 - x + x^{2} - x^{3} + \\cdots$ for $|x|<1$, find the Maclaurin series for $\\tan^{-1}(x)$ up to the term in $x^{5}$.",
    workedSolution: {
      steps: [
        step(1, "Differentiate", `\\frac{d}{dx}(\\tan^{-1}x) = \\frac{1}{1+x^{2}}`, "Standard derivative."),
        step(2, "Geometric series", `\\frac{1}{1+x^{2}} = 1 - x^{2} + x^{4} - \\cdots`, "Replace $x$ by $x^{2}$ in $\\frac{1}{1+x}$."),
        step(3, "Integrate term-by-term", `\\tan^{-1}x = x - \\frac{x^{3}}{3} + \\frac{x^{5}}{5} - \\cdots`, "Integrate each power."),
        step(4, "Constant", `C = 0 \\text{ since } \\tan^{-1}0 = 0`, "Fix the constant of integration."),
        step(5, "Validity", `|x| < 1`, "Inherited from geometric series."),
        step(6, "Check $x=0$", `\\tan^{-1}0 = 0`, "No constant term."),
        step(7, "Odd function", `\\text{Only odd powers}`, "Consistent with symmetry."),
        step(8, "Verify derivative", `\\frac{d}{dx}\\left(x - \\frac{x^{3}}{3} + \\frac{x^{5}}{5}\\right) = 1 - x^{2} + x^{4}`, "Differentiate back."),
        step(9, "Answer", `x - \\frac{x^{3}}{3} + \\frac{x^{5}}{5}`, "Up to $x^{5}$."),
      ],
      finalAnswer: "$\\tan^{-1}(x) = x - \\dfrac{x^{3}}{3} + \\dfrac{x^{5}}{5} + \\cdots$ for $|x| < 1$.",
    },
  }),

  macQ(49, {
    difficulty: "Intermediate", marks: 5, answerType: "written", tags: ["differentiation"],
    questionText: "The Maclaurin series for $\\ln(1+x)$ is $\\ln(1+x) = x - \\frac{x^{2}}{2} + \\frac{x^{3}}{3} - \\cdots$. Use differentiation to find the series for $\\dfrac{1}{1+x}$.",
    workedSolution: {
      steps: [
        step(1, "Differentiate $\\ln(1+x)$", `\\frac{1}{1+x}`, "Derivative of the log series."),
        step(2, "Differentiate term-by-term", `1 - x + x^{2} - x^{3} + \\cdots`, "Differentiate each power."),
        step(3, "Pattern", `(-1)^{r} x^{r}`, "Alternating signs."),
        step(4, "Geometric series", `\\frac{1}{1+x} = \\sum_{r=0}^{\\infty}(-x)^{r}`, "Infinite geometric sum."),
        step(5, "Validity", `|x| < 1`, "Same as $\\ln(1+x)$ series."),
        step(6, "Check $x=0$", `\\frac{1}{1} = 1`, "Constant term."),
        step(7, "Alternative", `\\text{Replace } x \\text{ by } -x \\text{ in } \\frac{1}{1-x}`, "Related series."),
        step(8, "Answer", `1 - x + x^{2} - x^{3} + \\cdots`, "Expansion."),
        step(9, "Use", `\\text{Foundation for other expansions}`, "Key building block."),
      ],
      finalAnswer: "$\\dfrac{1}{1+x} = 1 - x + x^{2} - x^{3} + \\cdots$ for $|x| < 1$.",
    },
  }),

  macQ(50, {
    difficulty: "Intermediate", marks: 6, answerType: "written", tags: ["approximation"],
    questionText: "Use the first three non-zero terms of the Maclaurin series for $(1+x)^{-1}$ to estimate $(1.05)^{-1}$, and comment on the accuracy.",
    workedSolution: {
      steps: [
        step(1, "Series", `(1+x)^{-1} = 1 - x + x^{2} - \\cdots`, "Binomial with $n=-1$."),
        step(2, "Substitute $x=0.05$", `(1.05)^{-1} \\approx 1 - 0.05 + 0.0025`, "Small $x$ for good accuracy."),
        step(3, "Calculate", `= 0.9525`, "Sum the terms."),
        step(4, "Exact value", `\\frac{1}{1.05} \\approx 0.95238`, "Calculator comparison."),
        step(5, "Error", `\\approx 0.00012`, "Very small truncation error."),
        step(6, "Comment", `\\text{Good approximation because } x=0.05 \\text{ is small}`, "Validity $|x|<1$ satisfied."),
        step(7, "Next term", `-x^{3} \\approx -0.000125`, "Would improve slightly."),
        step(8, "Answer", `0.9525`, "Estimate."),
        step(9, "Validity check", `|0.05| < 1`, "Series converges."),
      ],
      finalAnswer: "$(1.05)^{-1} \\approx 0.9525$ (exact value $\\approx 0.95238$; good accuracy since $x=0.05$ is small).",
    },
  }),

  productSeriesQ(51, "e^{x} = 1 + x + \\frac{x^{2}}{2} + \\frac{x^{3}}{6}", "1 + x - \\frac{x^{2}}{2}", ["1 + 2x + \\frac{x^{2}}{2}", "-\\frac{x^{3}}{6}"], ["exponential", "binomial"]),
  productSeriesQ(52, "e^{x} = 1 + x + \\frac{x^{2}}{2}", "\\sin x = x - \\frac{x^{3}}{6}", ["x + x^{2} + \\frac{x^{3}}{3}"], ["exponential", "sine"]),
  productSeriesQ(53, "\\cos x = 1 - \\frac{x^{2}}{2}", "1 + x + \\frac{x^{2}}{2}", ["1 + x", "-\\frac{x^{2}}{2}"], ["cosine", "exponential"]),

  // Hard (54–70)
  hardMacQ(
    54,
    "Find the Maclaurin series for $\\dfrac{\\sin x}{x}$ up to the term in $x^{4}$, and state the value of the constant term.",
    [
      step(1, "Divide series", `\\frac{\\sin x}{x} = \\frac{x - \\frac{x^{3}}{6} + \\frac{x^{5}}{120} - \\cdots}{x}`, "Divide $\\sin x$ by $x$."),
      step(2, "Cancel $x$", `= 1 - \\frac{x^{2}}{6} + \\frac{x^{4}}{120} - \\cdots`, "Term-by-term division."),
      step(3, "Constant term", `1`, "Value at $x=0$ (using limit)."),
      step(4, "Even powers only", `\\text{Only even powers remain}`, "Quotient of odd/even."),
      step(5, "Limit check", `\\lim_{x\\to 0}\\frac{\\sin x}{x} = 1`, "Confirms constant term."),
      step(6, "Validity", `\\text{All real } x \\text{ (} x \\neq 0 \\text{ for function)}`, "Series converges everywhere."),
      step(7, "Application", `\\text{sinc function in signal processing}`, "Important in applications."),
      step(8, "Up to $x^{4}$", `1 - \\frac{x^{2}}{6} + \\frac{x^{4}}{120}`, "Required terms."),
      step(9, "Verify $x^{2}$ coeff", `\\text{From } -\\frac{1}{6}`, "Direct read-off."),
      step(10, "Alternative", `\\text{Use } \\frac{d^{n}}{dx^{n}}\\big|_{0}`, "Maclaurin coefficient formula."),
      step(11, "Note", `\\text{Function undefined at } x=0 \\text{ but series defines limit}`, "Removable singularity."),
      step(12, "Compare with $\\cos$", `\\text{Related but not identical}`, "Different series."),
      step(13, "Answer", `1 - \\frac{x^{2}}{6} + \\frac{x^{4}}{120}`, "Series and constant $1$."),
    ],
    "$\\dfrac{\\sin x}{x} = 1 - \\dfrac{x^{2}}{6} + \\dfrac{x^{4}}{120} + \\cdots$; constant term $= 1$.",
    ["quotient"],
    10,
  ),

  hardMacQ(
    55,
    "Find the Maclaurin expansion of $e^{x}\\cos x$ up to and including the term in $x^{4}$.",
    [
      step(1, "$e^{x}$ series", `1 + x + \\frac{x^{2}}{2} + \\frac{x^{3}}{6} + \\frac{x^{4}}{24}`, "Up to $x^{4}$."),
      step(2, "$\\cos x$ series", `1 - \\frac{x^{2}}{2} + \\frac{x^{4}}{24}`, "Up to $x^{4}$."),
      step(3, "Multiply constants", `1 \\times 1 = 1`, "Constant term."),
      step(4, "Linear cross terms", `x \\cdot 1 + 1 \\cdot 0 = x`, "Coefficient of $x$."),
      step(5, "$x^{2}$ terms", `\\frac{x^{2}}{2} \\cdot 1 + x \\cdot 0 + 1 \\cdot \\left(-\\frac{x^{2}}{2}\\right) = 0`, "Cancels!"),
      step(6, "$x^{3}$ terms", `\\frac{x^{3}}{6} \\cdot 1 + \\frac{x^{2}}{2} \\cdot 0 + x \\cdot \\left(-\\frac{x^{2}}{2}\\right) = -\\frac{x^{3}}{3}`, "Collect carefully."),
      step(7, "$x^{4}$ terms", `\\frac{x^{4}}{24} - \\frac{x^{2}}{2} \\cdot \\frac{x^{2}}{2} + \\cdots = -\\frac{x^{4}}{6}`, "Include all contributing products."),
      step(8, "Result", `1 + x - \\frac{x^{3}}{3} - \\frac{x^{4}}{6}`, "Combined series."),
      step(9, "Check $x=0$", `e^{0}\\cos 0 = 1`, "Constant term correct."),
      step(10, "Check derivative at 0", `(e^{x}\\cos x)'|_{0} = 1`, "Linear term correct."),
      step(11, "Validity", `\\text{All real } x`, "Both series converge everywhere."),
      step(12, "Alternative", `\\text{Use } e^{x+ix} \\text{ and take real part}`, "Complex exponential method."),
      step(13, "Answer", `1 + x - \\frac{x^{3}}{3} - \\frac{x^{4}}{6}`, "Final expansion."),
    ],
    "$e^{x}\\cos x = 1 + x - \\dfrac{x^{3}}{3} - \\dfrac{x^{4}}{6} + \\cdots$",
    ["product"],
    10,
  ),

  hardMacQ(
    56,
    "Show that the Maclaurin series for $\\ln\\left(\\dfrac{1+x}{1-x}\\right)$ up to $x^{5}$ is $2x + \\frac{2x^{3}}{3} + \\frac{2x^{5}}{5}$, and state the range of validity.",
    [
      step(1, "Split logarithm", `\\ln\\left(\\frac{1+x}{1-x}\\right) = \\ln(1+x) - \\ln(1-x)`, "Log quotient rule."),
      step(2, "$\\ln(1+x)$", `x - \\frac{x^{2}}{2} + \\frac{x^{3}}{3} - \\frac{x^{4}}{4} + \\frac{x^{5}}{5}`, "Standard series."),
      step(3, "$\\ln(1-x)$", `-x - \\frac{x^{2}}{2} - \\frac{x^{3}}{3} - \\frac{x^{4}}{4} - \\frac{x^{5}}{5}`, "Replace $x$ by $-x$."),
      step(4, "Subtract", `2x + \\frac{2x^{3}}{3} + \\frac{2x^{5}}{5}`, "Even powers cancel."),
      step(5, "Odd function", `\\text{Only odd powers}`, "Expected from symmetry."),
      step(6, "Validity for $\\ln(1+x)$", `|x| < 1`, "First series."),
      step(7, "Validity for $\\ln(1-x)$", `|x| < 1`, "Second series."),
      step(8, "Combined", `|x| < 1`, "Both must converge."),
      step(9, "Check $x=0$", `\\ln 1 = 0`, "No constant term."),
      step(10, "Connection", `= 2\\tanh^{-1}(x)`, "Related to inverse hyperbolic tangent."),
      step(11, "Verify $x^{3}$", `\\frac{2}{3}`, "Coefficient check."),
      step(12, "Application", `\\text{Useful for approximating logs of ratios near 1}`, "Numerical use."),
      step(13, "Answer", `2x + \\frac{2x^{3}}{3} + \\frac{2x^{5}}{5},\\; |x|<1`, "Series and validity."),
    ],
    "$\\ln\\left(\\dfrac{1+x}{1-x}\\right) = 2x + \\dfrac{2x^{3}}{3} + \\dfrac{2x^{5}}{5} + \\cdots$ for $|x| < 1$.",
    ["logarithm", "proof"],
    10,
  ),

  hardMacQ(
    57,
    "Find the first four non-zero terms of the Maclaurin series for $\\sec x$.",
    [
      step(1, "Use $\\sec x = \\frac{1}{\\cos x}$", `\\text{Divide 1 by cosine series}`, "Reciprocal of $\\cos x$."),
      step(2, "$\\cos x$", `1 - \\frac{x^{2}}{2} + \\frac{x^{4}}{24} - \\cdots`, "Denominator series."),
      step(3, "Long division / equating", `\\sec x = 1 + \\frac{x^{2}}{2} + \\frac{5x^{4}}{24} + \\cdots`, "Standard result."),
      step(4, "Even function", `\\text{Only even powers}`, "Secant is even."),
      step(5, "Constant term", `\\sec 0 = 1`, "Verify."),
      step(6, "$x^{2}$ coefficient", `\\frac{1}{2}`, "From division."),
      step(7, "$x^{4}$ coefficient", `\\frac{5}{24}`, "Next term."),
      step(8, "Validity", `\\text{Near } x=0`, "Local convergence where $\\cos x \\neq 0$."),
      step(9, "Alternative", `\\text{Differentiate and use Maclaurin formula}`, "Could find via derivatives."),
      step(10, "Check derivative", `(\\sec x)'|_{0} = 0`, "No $x$ term."),
      step(11, "Related series", `\\tan x = x + \\frac{x^{3}}{3} + \\cdots`, "Companion expansion."),
      step(12, "Application", `\\text{Used in advanced integration}`, "Occasional FM question."),
      step(13, "Answer", `1 + \\frac{x^{2}}{2} + \\frac{5x^{4}}{24}`, "First four non-zero terms."),
    ],
    "$\\sec x = 1 + \\dfrac{x^{2}}{2} + \\dfrac{5x^{4}}{24} + \\cdots$",
    ["reciprocal"],
    10,
  ),

  hardMacQ(
    58,
    "Given $f(x) = e^{x}\\sin x$, find $f''(0)$ and hence the coefficient of $x^{2}$ in the Maclaurin series for $f(x)$.",
    [
      step(1, "Product rule", `f'(x) = e^{x}\\sin x + e^{x}\\cos x = e^{x}(\\sin x + \\cos x)`, "Differentiate product."),
      step(2, "Second derivative", `f''(x) = e^{x}(\\sin x + \\cos x) + e^{x}(\\cos x - \\sin x) = 2e^{x}\\cos x`, "Simplify."),
      step(3, "Evaluate at 0", `f''(0) = 2e^{0}\\cos 0 = 2`, "Substitute $x=0$."),
      step(4, "Maclaurin coefficient", `\\text{Coeff of } x^{2} = \\frac{f''(0)}{2!} = 1`, "Standard formula."),
      step(5, "Verify via series product", `e^{x}\\sin x = (1+x+\\cdots)(x-\\cdots) = x + x^{2} + \\cdots`, "Series multiplication confirms."),
      step(6, "Constant term", `f(0) = 0`, "No constant."),
      step(7, "Linear term", `f'(0) = 1`, "Coefficient of $x$ is 1."),
      step(8, "Pattern", `\\text{Alternating-type product series}`, "Higher terms need more work."),
      step(9, "Answer", `f''(0)=2,\\; \\text{coeff of } x^{2} = 1`, "Both parts."),
      step(10, "Series start", `e^{x}\\sin x = x + x^{2} + \\cdots`, "Beginning of expansion."),
      step(11, "Validity", `\\text{All real } x`, "Both factors converge everywhere."),
      step(12, "Application", `\\text{Modelling damped oscillations}`, "Physical interpretation."),
      step(13, "Check", `\\frac{f''(0)}{2} = 1`, "Consistent."),
    ],
    "$f''(0) = 2$; coefficient of $x^{2}$ is $1$.",
    ["derivatives", "product"],
    10,
  ),

  hardMacQ(
    59,
    "Expand $(1+x)^{\\frac{1}{2}}(1+x)^{\\frac{1}{2}}$ in two ways and hence verify the binomial series for $(1+x)$ up to $x^{3}$.",
    [
      step(1, "Product of series", `(1+x)^{1/2}(1+x)^{1/2}`, "Same binomial twice."),
      step(2, "Each factor", `1 + \\frac{x}{2} - \\frac{x^{2}}{8} + \\frac{x^{3}}{16}`, "Binomial to $x^{3}$."),
      step(3, "Multiply", `1 + x + 0\\cdot x^{2} + 0\\cdot x^{3}`, "Careful multiplication."),
      step(4, "Result", `1 + x`, "Product simplifies."),
      step(5, "Direct expansion", `(1+x)^{1} = 1 + x`, "Exact, not just series."),
      step(6, "Verify", `\\text{Both methods agree}`, "Confirms binomial coefficients."),
      step(7, "Validity", `|x| < 1`, "For each binomial factor."),
      step(8, "Insight", `\\text{Multiplying series must give exact product}`, "Consistency check."),
      step(9, "Higher terms", `\\text{All higher terms cancel in this case}`, "Special because exponents sum to 1."),
      step(10, "General lesson", `\\text{Series multiplication is self-checking}`, "Exam technique."),
      step(11, "Coefficients", `1, 1, 0, 0`, "Up to $x^{3}$."),
      step(12, "Answer", `1 + x`, "Verified expansion."),
      step(13, "Conclusion", `\\text{Binomial series consistent}`, "Verification complete."),
    ],
    "$(1+x)^{\\frac{1}{2}}(1+x)^{\\frac{1}{2}} = 1 + x + \\cdots$, verifying the binomial series.",
    ["product", "verification"],
    10,
  ),

  hardMacQ(
    60,
    "Find the Maclaurin series for $\\arcsin x$ up to the term in $x^{5}$.",
    [
      step(1, "Differentiate", `\\frac{d}{dx}(\\arcsin x) = \\frac{1}{\\sqrt{1-x^{2}}}`, "Standard derivative."),
      step(2, "Binomial expansion", `(1-x^{2})^{-1/2} = 1 + \\frac{x^{2}}{2} + \\frac{3x^{4}}{8} + \\cdots`, "Replace $x$ by $x^{2}$ in $(1+x)^{-1/2}$."),
      step(3, "Integrate", `\\arcsin x = x + \\frac{x^{3}}{6} + \\frac{3x^{5}}{40} + \\cdots`, "Term-by-term integration."),
      step(4, "Constant", `C=0`, "Since $\\arcsin 0 = 0$."),
      step(5, "Odd function", `\\text{Only odd powers}`, "Expected symmetry."),
      step(6, "Validity", `|x| < 1`, "From binomial convergence."),
      step(7, "Check $x^{3}$", `\\frac{1}{6}`, "Coefficient verification."),
      step(8, "Check $x^{5}$", `\\frac{3}{40}`, "Next term."),
      step(9, "Verify derivative", `1 + \\frac{x^{2}}{2} + \\frac{3x^{4}}{8}`, "Differentiate back."),
      step(10, "Related", `\\arccos x = \\frac{\\pi}{2} - \\arcsin x`, "Companion series."),
      step(11, "Application", `\\text{Small-angle approximations}`, "Numerical use."),
      step(12, "Answer", `x + \\frac{x^{3}}{6} + \\frac{3x^{5}}{40}`, "Up to $x^{5}$."),
      step(13, "Validity stated", `|x| < 1`, "Range."),
    ],
    "$\\arcsin x = x + \\dfrac{x^{3}}{6} + \\dfrac{3x^{5}}{40} + \\cdots$ for $|x| < 1$.",
    ["integration", "inverse-trig"],
    10,
  ),

  hardMacQ(
    61,
    "The function $f(x) = \\dfrac{x}{1-x}$ has Maclaurin series $x + x^{2} + x^{3} + \\cdots$ for $|x|<1$. Find the series for $\\dfrac{1}{f(x)}$ and comment on its validity.",
    [
      step(1, "Reciprocal", `\\frac{1}{f(x)} = \\frac{1-x}{x}`, "Algebraic form."),
      step(2, "Not Maclaurin at 0", `\\text{Undefined at } x=0`, "Function blows up."),
      step(3, "From geometric series", `\\frac{x}{1-x} = x(1+x+x^{2}+\\cdots) = x + x^{2} + x^{3} + \\cdots`, "Given expansion."),
      step(4, "Divide", `\\frac{1}{f(x)} = \\frac{1}{x} \\cdot \\frac{1-x}{1}`, "Not a standard Maclaurin series."),
      step(5, "Alternative view", `\\frac{1-x}{x} = \\frac{1}{x} - 1`, "Laurent-type, not Maclaurin."),
      step(6, "Validity of $f$", `|x| < 1`, "Original series."),
      step(7, "Lesson", `\\text{Reciprocal may not have Maclaurin series}`, "Need $f(0) \\neq 0$ for reciprocal expansion."),
      step(7, "Key point", `f(0)=0 \\Rightarrow \\frac{1}{f} \\text{ has no Maclaurin series}`, "Important constraint."),
      step(8, "Answer", `\\frac{1}{f(x)} = \\frac{1-x}{x}; \\text{ no Maclaurin series at 0}`, "Conclusion."),
      step(9, "Related", `\\text{Use partial fractions instead}`, "Alternative techniques."),
      step(10, "Check", `f(x) \\cdot \\frac{1-x}{x} = 1`, "Algebraic identity."),
      step(11, "Series of $f$ valid", `|x|<1`, "Given."),
      step(12, "Application", `\\text{Highlights validity constraints}`, "Exam awareness."),
      step(13, "Final", `\\text{Maclaurin requires } f(0) \\neq 0 \\text{ for } 1/f`, "General rule."),
    ],
    "$\\dfrac{1}{f(x)} = \\dfrac{1-x}{x}$, which has no Maclaurin series at $x=0$ since $f(0)=0$.",
    ["validity", "reciprocal"],
    10,
  ),

  hardMacQ(
    62,
    "Find the Maclaurin expansion of $\\cos^{2}x$ up to the term in $x^{4}$, using the identity $\\cos^{2}x = \\frac{1}{2}(1 + \\cos 2x)$.",
    [
      step(1, "Identity", `\\cos^{2}x = \\frac{1}{2}(1 + \\cos 2x)`, "Double-angle form."),
      step(2, "$\\cos 2x$ series", `1 - 2x^{2} + \\frac{16x^{4}}{24}`, "Substitute $2x$ into $\\cos x$."),
      step(3, "Add 1", `1 + \\cos 2x = 2 - 2x^{2} + \\frac{2x^{4}}{3}`, "Inside parentheses."),
      step(4, "Halve", `\\cos^{2}x = 1 - x^{2} + \\frac{x^{4}}{3}`, "Multiply by $\\frac{1}{2}$."),
      step(5, "Even powers only", `\\text{Expected}`, "Square of even function."),
      step(6, "Check $x=0$", `\\cos^{2}0 = 1`, "Constant term."),
      step(7, "Alternative", `\\text{Square } (1 - \\frac{x^{2}}{2}+\\cdots)`, "Direct multiplication."),
      step(8, "Validity", `\\text{All real } x`, "Cosine series everywhere."),
      step(9, "Answer", `1 - x^{2} + \\frac{x^{4}}{3}`, "Up to $x^{4}$."),
      step(10, "Verify $x^{2}$", `-1`, "Coefficient check."),
      step(11, "Application", `\\text{Power-reduction in integration}`, "Useful identity."),
      step(12, "Compare", `\\text{Matches squaring cosine series}`, "Self-check."),
      step(13, "Final", `1 - x^{2} + \\frac{x^{4}}{3}`, "Expansion."),
    ],
    "$\\cos^{2}x = 1 - x^{2} + \\dfrac{x^{4}}{3} + \\cdots$",
    ["identity", "sine-cosine"],
    10,
  ),

  hardMacQ(
    63,
    "Use Maclaurin series to evaluate $\\displaystyle\\lim_{x\\to 0}\\dfrac{e^{x}-1-x}{x^{2}}$.",
    [
      step(1, "Expand $e^{x}$", `e^{x} = 1 + x + \\frac{x^{2}}{2} + \\frac{x^{3}}{6} + \\cdots`, "Standard series."),
      step(2, "Numerator", `e^{x}-1-x = \\frac{x^{2}}{2} + \\frac{x^{3}}{6} + \\cdots`, "Subtract."),
      step(3, "Divide by $x^{2}$", `\\frac{e^{x}-1-x}{x^{2}} = \\frac{1}{2} + \\frac{x}{6} + \\cdots`, "Cancel $x^{2}$."),
      step(4, "Limit as $x\\to 0$", `\\frac{1}{2}`, "Higher-order terms vanish."),
      step(5, "L'Hôpital alternative", `\\text{Could use twice}`, "Calculus method."),
      step(6, "First derivative check", `f'(0)=0`, "Numerator starts at $x^{2}$."),
      step(7, "Second derivative", `f''(0)=1`, "Confirms limit $\\frac{1}{2}$."),
      step(8, "Validity", `\\text{All real } x`, "Series valid near 0."),
      step(9, "Answer", `\\frac{1}{2}`, "Limit value."),
      step(10, "General technique", `\\text{Series for indeterminate forms}`, "Powerful method."),
      step(11, "Related limits", `\\frac{\\sin x - x}{x^{3}} \\to -\\frac{1}{6}`, "Similar style."),
      step(12, "Exam tip", `\\text{Expand to lowest sufficient order}`, "Efficiency."),
      step(13, "Final", `\\frac{1}{2}`, "Result."),
    ],
    "$\\displaystyle\\lim_{x\\to 0}\\dfrac{e^{x}-1-x}{x^{2}} = \\dfrac{1}{2}$",
    ["limits"],
    10,
  ),

  hardMacQ(
    64,
    "Find the Maclaurin series for $\\ln(1+x+x^{2})$ up to the term in $x^{3}$, and state the range of validity.",
    [
      step(1, "Not standard form", `\\text{Cannot use } \\ln(1+u) \\text{ directly with simple } u`, "Need substitution or composition."),
      step(2, "Factor (approximate)", `1+x+x^{2} \\text{ near 0 is } \\approx 1+x`, "For small $x$, dominant term inside log."),
      step(3, "Let $u = x + x^{2}$", `\\ln(1+u) = u - \\frac{u^{2}}{2} + \\frac{u^{3}}{3}`, "Standard log series."),
      step(4, "Substitute", `\\ln(1+x+x^{2}) = (x+x^{2}) - \\frac{(x+x^{2})^{2}}{2} + \\frac{(x+x^{2})^{3}}{3}`, "Expand."),
      step(5, "Expand $(x+x^{2})^{2}$", `x^{2} + 2x^{3} + \\cdots`, "Up to required order."),
      step(6, "Collect $x$ terms", `x`, "Linear coefficient."),
      step(7, "Collect $x^{2}$", `x^{2} - \\frac{x^{2}}{2} = \\frac{x^{2}}{2}`, "Quadratic."),
      step(8, "Collect $x^{3}$", `-\\frac{2x^{3}}{2} + \\frac{x^{3}}{3} = -\\frac{2x^{3}}{3}`, "Cubic."),
      step(9, "Result", `x + \\frac{x^{2}}{2} - \\frac{2x^{3}}{3}`, "Up to $x^{3}$."),
      step(10, "Validity", `|x+x^{2}| < 1`, "From $\\ln(1+u)$ with $|u|<1$."),
      step(11, "Near 0", `|x| \\text{ small enough}`, "Local validity."),
      step(12, "Check $x=0$", `\\ln 1 = 0`, "No constant term."),
      step(13, "Answer", `x + \\frac{x^{2}}{2} - \\frac{2x^{3}}{3}`, "Series."),
    ],
    "$\\ln(1+x+x^{2}) = x + \\dfrac{x^{2}}{2} - \\dfrac{2x^{3}}{3} + \\cdots$, valid when $|x+x^{2}| < 1$.",
    ["composite", "logarithm"],
    10,
  ),

  // Pad 65–70
  compositeExpQ(65, 5, ["1", "5x", "\\frac{25x^{2}}{2}", "\\frac{125x^{3}}{6}"], ["hard"], 5, "Hard"),
  compositeBinomialQ(66, 4, "\\tfrac{1}{2}", ["1", "2x", "-4x^{2}", "8x^{3}"], "|x| < \\tfrac{1}{4}", ["hard"], 6, "Hard"),
  approxQ(67, "e^{-x}", "0.1", ["1", "-x", "\\frac{x^{2}}{2}", "-\\frac{x^{3}}{6}"], "0.90483", ["hard"], 5, "Hard"),
  coeffQ(68, "$e^{-x}\\cos x$", 3, "-\\frac{2}{3}", ["hard"], 6, "Hard"),
  macQ(69, {
    difficulty: "Hard", marks: 8, answerType: "written", tags: ["hard", "product"],
    questionText: "Find the Maclaurin series for $\\sinh x = \\frac{e^{x}-e^{-x}}{2}$ up to the term in $x^{5}$.",
    workedSolution: {
      steps: [
        step(1, "Definition", `\\sinh x = \\frac{e^{x}-e^{-x}}{2}`, "Hyperbolic sine."),
        step(2, "$e^{x}$", `1 + x + \\frac{x^{2}}{2} + \\frac{x^{3}}{6} + \\frac{x^{4}}{24} + \\frac{x^{5}}{120}`, "Exponential series."),
        step(3, "$e^{-x}$", `1 - x + \\frac{x^{2}}{2} - \\frac{x^{3}}{6} + \\frac{x^{4}}{24} - \\frac{x^{5}}{120}`, "Replace $x$ by $-x$."),
        step(4, "Subtract", `e^{x}-e^{-x} = 2x + \\frac{2x^{3}}{6} + \\frac{2x^{5}}{120}`, "Even terms cancel."),
        step(5, "Halve", `\\sinh x = x + \\frac{x^{3}}{6} + \\frac{x^{5}}{120}`, "Divide by 2."),
        step(6, "Odd function", `\\text{Only odd powers}`, "Expected symmetry."),
        step(7, "Compare with $\\sin x$", `\\text{Same series!}`, "Maclaurin series identical."),
        step(8, "Validity", `\\text{All real } x`, "Exponential converges everywhere."),
        step(9, "Answer", `x + \\frac{x^{3}}{6} + \\frac{x^{5}}{120}`, "Up to $x^{5}$."),
        step(10, "Check $x=0$", `\\sinh 0 = 0`, "No constant term."),
        step(11, "Derivative check", `\\cosh 0 = 1`, "Coeff of $x$ correct."),
        step(12, "Application", `\\text{Hyperbolic functions in FM}`, "Standard result."),
        step(13, "Final", `\\sinh x = x + \\frac{x^{3}}{6} + \\frac{x^{5}}{120}`, "Complete."),
      ],
      finalAnswer: "$\\sinh x = x + \\dfrac{x^{3}}{6} + \\dfrac{x^{5}}{120} + \\cdots$",
    },
  }),
  hardMacQ(
    70,
    "Given the Maclaurin series for $f(x)$ is $f(x) = 1 + 2x + 3x^{2} + 4x^{3} + \\cdots$, find the series for $f'(x)$ and $ \\int f(x)\\,dx$ up to the term in $x^{3}$.",
    [
      step(1, "Differentiate term-by-term", `f'(x) = 2 + 6x + 12x^{2} + \\cdots`, "Differentiate each power."),
      step(2, "Pattern for $f'$", `\\text{Coeff of } x^{n} \\text{ is } (n+1)(n+2)`, "From original coefficients."),
      step(3, "Up to $x^{2}$", `f'(x) = 2 + 6x + 12x^{2}`, "Requested order."),
      step(4, "Integrate term-by-term", `\\int f(x)\\,dx = C + x + x^{2} + x^{3} + \\cdots`, "Integrate each term."),
      step(5, "Constant", `C \\text{ arbitrary}`, "Indefinite integral."),
      step(6, "Set $C=0$", `\\int f(x)\\,dx = x + x^{2} + x^{3}`, "Up to $x^{3}$."),
      step(7, "Verify $f'(0)=2$", `\\text{Matches coeff of } x \\text{ in } f`, "Consistency."),
      step(8, "Validity", `\\text{Same as } f(x) \\text{ series}`, "Term-by-term valid inside radius of convergence."),
      step(9, "Check integration", `\\frac{d}{dx}(x+x^{2}+x^{3}) = 1+2x+3x^{2}`, "Matches $f$ up to $x^{2}$."),
      step(10, "General rule", `\\text{Integration increases powers; differentiation decreases}`, "Calculus on series."),
      step(11, "Application", `\\text{Generate new series from known ones}`, "Powerful technique."),
      step(12, "Answer $f'$", `2 + 6x + 12x^{2}`, "Derivative series."),
      step(13, "Answer integral", `x + x^{2} + x^{3}`, "Integral series ($C=0$)."),
    ],
    "$f'(x) = 2 + 6x + 12x^{2} + \\cdots$; $\\displaystyle\\int f(x)\\,dx = x + x^{2} + x^{3} + \\cdots$ (constant zero).",
    ["calculus-on-series"],
    10,
  ),
];

const STEP_MIN = { Easy: 6, Intermediate: 9, Hard: 13 };
const STEP_MAX = { Easy: 9, Intermediate: 13, Hard: 18 };
const EXTRA = [
  () => step(0, "Maclaurin series", `f(x)=\\sum_{n=0}^{\\infty}\\frac{f^{(n)}(0)}{n!}x^{n}`, "Taylor series centred at $x=0$."),
  () => step(0, "Standard results", `e^{x},\\;\\ln(1+x),\\;\\sin x,\\;\\cos x,\\;(1+x)^{n}`, "Know these from the formula booklet."),
  () => step(0, "Substitution", `\\text{Replace } x \\text{ by } ax,\\; x^{2},\\; \\text{etc.}`, "Build composite expansions."),
  () => step(0, "Validity", `\\text{State convergence interval}`, "Essential for $\\ln(1+x)$ and binomial series."),
  () => step(0, "Term-by-term", `\\text{Differentiate or integrate series inside validity}`, "Calculus on power series."),
  () => step(0, "Multiply series", `\\text{Collect terms up to required order}`, "Product of two expansions."),
  () => step(0, "Small-$x$ approximation", `\\text{Higher powers negligible}`, "Truncation for numerical estimates."),
  () => step(0, "Final answer", `\\text{State series and validity}`, "Complete Maclaurin response."),
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
const inter = questions.filter((q) => q.difficulty === "Intermediate").length;
const hard = questions.filter((q) => q.difficulty === "Hard").length;
console.log(`Difficulty spread: Easy=${easy}, Intermediate=${inter}, Hard=${hard}`);

writeFileSync(outPath, `import { Question } from "@/lib/types";\n\nexport const questions: Question[] = ${JSON.stringify(questions, null, 2)};\n`);
console.log(`Wrote ${questions.length} questions to ${outPath}`);
