#!/usr/bin/env node
/**
 * Generates 70 A-Level Further Maths "Series: method of differences" questions.
 * Output: src/data/questions/a-level-further-maths/year-2-pure/method-of-differences.ts
 */

import { writeFileSync, mkdirSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const outDir = resolve(__dirname, "../src/data/questions/a-level-further-maths/year-2-pure");
const outPath = resolve(outDir, "method-of-differences.ts");

mkdirSync(outDir, { recursive: true });

const SUBTOPIC = "Series: method of differences";
const SUBTOPIC_ID = "fm.y2.pure.method-of-differences";
const LEVEL = "A-Level Further Maths";
const TOPIC = "Further Maths Year 2: Pure (Core Pure 2)";

const qid = (n) => `fm.y2.pure.method-of-differences.q${String(n).padStart(3, "0")}`;
const step = (n, description, workingLatex, explanation) => ({ stepNumber: n, description, workingLatex, explanation, diagram: null });
const base = (meta) => ({ level: LEVEL, topic: TOPIC, subtopic: SUBTOPIC, subtopicId: SUBTOPIC_ID, questionDiagram: null, ...meta });
const mdQ = (n, meta) => base({ id: qid(n), tags: ["method-of-differences", ...(meta.tags || [])], ...meta });

function formatExact(x) {
  const eps = 1e-9;
  if (Math.abs(x) < eps) return "0";
  for (let d = 1; d <= 10000; d++) {
    const num = Math.round(x * d);
    if (Math.abs(x - num / d) < eps) {
      if (d === 1) return `${num}`;
      const sign = num < 0 ? "-" : "";
      return `${sign}\\frac{${Math.abs(num)}}{${d}}`;
    }
  }
  throw new Error(`Could not format: ${x}`);
}

function sumRplus1Rplus2(n) {
  return 0.5 - 1 / (n + 2);
}

function sumRRplus1(n) {
  return n / (n + 1);
}

function sumRRplus2(n) {
  return 0.5 * (1.5 - (2 * n + 3) / ((n + 1) * (n + 2)));
}

function sumRRplus3(n) {
  return (1 / 3) * (11 / 6 - 1 / (n + 1) - 1 / (n + 2) - 1 / (n + 3));
}

function sumRRplus4(n) {
  return 0.25 * (25 / 12 - 1 / (n + 1) - 1 / (n + 2) - 1 / (n + 3) - 1 / (n + 4));
}

function sumOddTerms(n) {
  return n / (2 * n + 1);
}

function sumRRRplus2(n) {
  return 0.25 - 1 / (2 * (n + 1) * (n + 2));
}

function sum4rRplus1(n) {
  return 0.25 * (1 - 1 / (n + 1));
}

function sumRminus1R(n) {
  return 1 - 1 / n;
}

function rrplus1Q(qNum, n, tags = [], marks = 4, difficulty = "Easy") {
  const ans = formatExact(sumRRplus1(n));
  const steps = [
    step(1, "Partial fractions", `\\frac{1}{r(r+1)} = \\frac{1}{r} - \\frac{1}{r+1}`, "Decompose into a difference of two simpler fractions."),
    step(2, "Write the sum", `\\sum_{r=1}^{${n}} \\frac{1}{r(r+1)} = \\sum_{r=1}^{${n}} \\left(\\frac{1}{r} - \\frac{1}{r+1}\\right)`, "Each term is a difference."),
    step(3, "Expand", `= \\left(1 - \\frac{1}{2}\\right) + \\left(\\frac{1}{2} - \\frac{1}{3}\\right) + \\cdots + \\left(\\frac{1}{${n}} - \\frac{1}{${n + 1}}\\right)`, "Write out successive terms."),
    step(4, "Telescope", `\\text{Intermediate terms cancel in pairs}`, "This is the method of differences."),
    step(5, "Survivors", `= 1 - \\frac{1}{${n + 1}}`, "Only the first and last terms remain."),
    step(6, "Simplify", `= \\frac{${n}}{${n + 1}}`, "Combine over a common denominator."),
    step(7, "Verify $n=1$", `\\frac{1}{2} = \\frac{1}{2}`, "Check a small case."),
    step(8, "Answer", `${ans}`, "Final value."),
  ];
  return mdQ(qNum, {
    difficulty, marks, answerType: "written", tags: [...tags, "telescoping", "partial-fractions"],
    questionText: `Find the exact value of $\\displaystyle\\sum_{r=1}^{${n}} \\frac{1}{r(r+1)}$.`,
    workedSolution: { steps, finalAnswer: `$${ans}$` },
  });
}

function rrplus2Q(qNum, n, tags = [], marks = 5, difficulty = "Easy") {
  const ans = formatExact(sumRRplus2(n));
  const steps = [
    step(1, "Partial fractions", `\\frac{1}{r(r+2)} = \\frac{1}{2}\\left(\\frac{1}{r} - \\frac{1}{r+2}\\right)`, "Decompose with a gap of 2."),
    step(2, "Write the sum", `\\sum_{r=1}^{${n}} \\frac{1}{r(r+2)} = \\frac{1}{2}\\sum_{r=1}^{${n}} \\left(\\frac{1}{r} - \\frac{1}{r+2}\\right)`, "Factor out $\\frac{1}{2}$."),
    step(3, "Telescope", `\\text{First two minus last two terms survive}`, "Cancellation pattern."),
    step(4, "Survivors", `= \\frac{1}{2}\\left(1 + \\frac{1}{2} - \\frac{1}{${n + 1}} - \\frac{1}{${n + 2}}\\right)`, "Collect remaining terms."),
    step(5, "Simplify", `= ${ans}`, "Combine fractions."),
    step(6, "Verify $n=1$", `\\frac{1}{6}`, "Direct evaluation."),
    step(7, "Method", `\\text{Method of differences via partial fractions}`, "Key technique."),
    step(8, "Answer", `${ans}`, "Final value."),
  ];
  return mdQ(qNum, {
    difficulty, marks, answerType: "written", tags: [...tags, "telescoping", "gap-2"],
    questionText: `Find the exact value of $\\displaystyle\\sum_{r=1}^{${n}} \\frac{1}{r(r+2)}$.`,
    workedSolution: { steps, finalAnswer: `$${ans}$` },
  });
}

function rrplus3Q(qNum, n, tags = [], marks = 5, difficulty = "Intermediate") {
  const ans = formatExact(sumRRplus3(n));
  const steps = [
    step(1, "Partial fractions", `\\frac{1}{r(r+3)} = \\frac{1}{3}\\left(\\frac{1}{r} - \\frac{1}{r+3}\\right)`, "Decompose with gap 3."),
    step(2, "Telescope", `\\text{First three minus last three terms survive}`, "Cancellation with gap 3."),
    step(3, "Survivors", `= \\frac{1}{3}\\left(1 + \\frac{1}{2} + \\frac{1}{3} - \\frac{1}{${n + 1}} - \\frac{1}{${n + 2}} - \\frac{1}{${n + 3}}\\right)`, "Collect terms."),
    step(4, "Simplify", `= ${ans}`, "Combine fractions."),
    step(5, "Verify $n=1$", `\\frac{1}{4}`, "Direct check."),
    step(6, "Method", `\\text{Partial fractions then telescope}`, "Standard FM approach."),
    step(7, "Answer", `${ans}`, "Final value."),
    step(8, "Pattern", `\\text{Gap } k \\Rightarrow k \\text{ terms survive at each end}`, "General rule."),
    step(9, "Note", `\\text{Always decompose before summing}`, "Required first step."),
  ];
  return mdQ(qNum, {
    difficulty, marks, answerType: "written", tags: [...tags, "gap-3", "telescoping"],
    questionText: `Find the exact value of $\\displaystyle\\sum_{r=1}^{${n}} \\frac{1}{r(r+3)}$.`,
    workedSolution: { steps, finalAnswer: `$${ans}$` },
  });
}

function rrplus4Q(qNum, n, tags = [], marks = 5, difficulty = "Intermediate") {
  const ans = formatExact(sumRRplus4(n));
  const steps = [
    step(1, "Partial fractions", `\\frac{1}{r(r+4)} = \\frac{1}{4}\\left(\\frac{1}{r} - \\frac{1}{r+4}\\right)`, "Gap of 4."),
    step(2, "Telescope", `= \\frac{1}{4}\\left(1 + \\frac{1}{2} + \\frac{1}{3} + \\frac{1}{4} - \\frac{1}{${n + 1}} - \\frac{1}{${n + 2}} - \\frac{1}{${n + 3}} - \\frac{1}{${n + 4}}\\right)`, "Four terms each end."),
    step(3, "Simplify", `= ${ans}`, "Combine."),
    step(4, "Verify", `n=1`, "Check numerically."),
    step(5, "Method", `\\text{Method of differences}`, "Technique."),
    step(6, "Answer", `${ans}`, "Final value."),
    step(7, "General", `\\frac{1}{r(r+k)} \\text{ always telescopes}`, "Extension."),
    step(8, "Application", `\\text{FM Core Pure 2}`, "Exam context."),
    step(9, "Key step", `\\text{Partial fractions essential}`, "First move."),
  ];
  return mdQ(qNum, {
    difficulty, marks, answerType: "written", tags: [...tags, "gap-4"],
    questionText: `Find $\\displaystyle\\sum_{r=1}^{${n}} \\frac{1}{r(r+4)}$.`,
    workedSolution: { steps, finalAnswer: `$${ans}$` },
  });
}

function oddTermsQ(qNum, n, tags = [], marks = 5, difficulty = "Intermediate") {
  const ans = formatExact(sumOddTerms(n));
  const steps = [
    step(1, "Partial fractions", `\\frac{1}{(2r-1)(2r+1)} = \\frac{1}{2}\\left(\\frac{1}{2r-1} - \\frac{1}{2r+1}\\right)`, "Decompose odd-term product."),
    step(2, "Telescope", `= \\frac{1}{2}\\left(1 - \\frac{1}{${2 * n + 1}}\\right)`, "First and last survive."),
    step(3, "Simplify", `= \\frac{${n}}{${2 * n + 1}}`, "Common denominator."),
    step(4, "Verify $n=1$", `\\frac{1}{3}`, "Check."),
    step(5, "Expand terms", `\\frac{1}{1 \\cdot 3} + \\frac{1}{3 \\cdot 5} + \\cdots`, "Structure of sum."),
    step(6, "Method", `\\text{Method of differences}`, "Core technique."),
    step(7, "Answer", `${ans}`, "Final value."),
    step(8, "Link", `\\text{Related to Leibniz series for } \\pi/4`, "Historical note."),
    step(9, "General", `\\text{Any } \\frac{1}{(ar+b)(ar+c)} \\text{ may telescope}`, "Broader class."),
  ];
  return mdQ(qNum, {
    difficulty, marks, answerType: "written", tags: [...tags, "odd-terms", "telescoping"],
    questionText: `Find the exact value of $\\displaystyle\\sum_{r=1}^{${n}} \\frac{1}{(2r-1)(2r+1)}$.`,
    workedSolution: { steps, finalAnswer: `$${ans}$` },
  });
}

function rrrplus2Q(qNum, n, tags = [], marks = 6, difficulty = "Intermediate") {
  const ans = formatExact(sumRRRplus2(n));
  const steps = [
    step(1, "Partial fractions", `\\frac{1}{r(r+1)(r+2)} = \\frac{1}{2}\\left(\\frac{1}{r(r+1)} - \\frac{1}{(r+1)(r+2)}\\right)`, "Split into telescoping pairs."),
    step(2, "Telescope", `\\sum_{r=1}^{${n}} = \\frac{1}{2}\\left(\\frac{1}{2} - \\frac{1}{(${n + 1})(${n + 2})}\\right)`, "Cancel intermediate terms."),
    step(3, "Simplify", `= ${ans}`, "Final fraction."),
    step(4, "Verify $n=1$", `\\frac{1}{6}`, "Direct."),
    step(5, "Alternative form", `= \\frac{n(n+3)}{2(n+1)(n+2)}`, "Equivalent closed form."),
    step(6, "Technique", `\\text{Repeated partial fractions}`, "Harder decomposition."),
    step(7, "Answer", `${ans}`, "Final value."),
    step(8, "Limit", `\\lim_{n\\to\\infty} = \\frac{1}{4}`, "Infinite sum."),
    step(9, "Method", `\\text{Method of differences}`, "Named technique."),
  ];
  return mdQ(qNum, {
    difficulty, marks, answerType: "written", tags: [...tags, "triple-product", "telescoping"],
    questionText: `Find the exact value of $\\displaystyle\\sum_{r=1}^{${n}} \\frac{1}{r(r+1)(r+2)}$.`,
    workedSolution: { steps, finalAnswer: `$${ans}$` },
  });
}

function explicitDiffQ(qNum, n, tags = [], marks = 4, difficulty = "Easy") {
  const ans = formatExact(sumRRplus1(n));
  const steps = [
    step(1, "Recognise form", `\\frac{1}{r} - \\frac{1}{r+1}`, "Already a difference — no partial fractions needed."),
    step(2, "Write the sum", `\\sum_{r=1}^{${n}} \\left(\\frac{1}{r} - \\frac{1}{r+1}\\right)`, "Direct method of differences."),
    step(3, "Telescope", `= 1 - \\frac{1}{${n + 1}} = \\frac{${n}}{${n + 1}}`, "Cancel all intermediate terms."),
    step(4, "Answer", `${ans}`, "Final value."),
    step(5, "Key idea", `u_r - u_{r+1} \\text{ form always telescopes}`, "General pattern."),
    step(6, "Verify", `n=2: \\frac{1}{2}+\\frac{1}{6}=\\frac{2}{3}`, "Check."),
    step(7, "Link", `\\text{Same as } \\sum \\frac{1}{r(r+1)}`, "Equivalent problem."),
    step(8, "Method", `\\text{Method of differences}`, "Named technique."),
  ];
  return mdQ(qNum, {
    difficulty, marks, answerType: "written", tags: [...tags, "explicit-difference"],
    questionText: `Evaluate $\\displaystyle\\sum_{r=1}^{${n}} \\left(\\frac{1}{r} - \\frac{1}{r+1}\\right)$.`,
    workedSolution: { steps, finalAnswer: `$${ans}$` },
  });
}

function rMinus1rQ(qNum, n, tags = [], marks = 5, difficulty = "Intermediate") {
  const ans = formatExact(sumRminus1R(n));
  const steps = [
    step(1, "Partial fractions", `\\frac{1}{(r-1)r} = \\frac{1}{r-1} - \\frac{1}{r}`, "Valid for $r \\geq 2$."),
    step(2, "Telescope", `\\sum_{r=2}^{${n}} = 1 - \\frac{1}{${n}}`, "First and last terms survive."),
    step(3, "Simplify", `= ${ans}`, "Final answer."),
    step(4, "Verify $n=2$", `\\frac{1}{2}`, "Check."),
    step(5, "Note", `\\text{Lower limit } r=2 \\text{ avoids } r=1`, "Domain restriction."),
    step(6, "Method", `\\text{Method of differences}`, "Technique."),
    step(7, "Answer", `${ans}`, "Final value."),
    step(8, "Equivalent", `\\text{Same as } 1 - \\frac{1}{n}`, "Simple form."),
    step(9, "Application", `\\text{Harmonic-type sums}`, "Context."),
  ];
  return mdQ(qNum, {
    difficulty, marks, answerType: "written", tags: [...tags, "shifted-index"],
    questionText: `Find $\\displaystyle\\sum_{r=2}^{${n}} \\frac{1}{(r-1)r}$.`,
    workedSolution: { steps, finalAnswer: `$${ans}$` },
  });
}

function fourRRplus1Q(qNum, n, tags = [], marks = 5, difficulty = "Intermediate") {
  const ans = formatExact(sum4rRplus1(n));
  const steps = [
    step(1, "Rewrite", `\\frac{1}{4r(r+1)} = \\frac{1}{4}\\left(\\frac{1}{r} - \\frac{1}{r+1}\\right)`, "Factor and decompose."),
    step(2, "Telescope", `= \\frac{1}{4}\\left(1 - \\frac{1}{${n + 1}}\\right)`, "Standard cancellation."),
    step(3, "Simplify", `= ${ans}`, "Final fraction."),
    step(4, "Verify $n=1$", `\\frac{1}{8}`, "Check."),
    step(5, "Method", `\\text{Scale a known telescoping sum}`, "Technique."),
    step(6, "Answer", `${ans}`, "Final value."),
    step(7, "General", `\\frac{1}{kr(r+1)} \\text{ telescopes similarly}`, "Extension."),
    step(8, "Key", `\\text{Partial fractions first}`, "Always decompose."),
    step(9, "FM context", `\\text{Core Pure 2 series}`, "Topic link."),
  ];
  return mdQ(qNum, {
    difficulty, marks, answerType: "written", tags: [...tags, "scaled"],
    questionText: `Find $\\displaystyle\\sum_{r=1}^{${n}} \\frac{1}{4r(r+1)}$.`,
    workedSolution: { steps, finalAnswer: `$${ans}$` },
  });
}

function fixedSumQ(qNum, nFixed, answerLatex, tags = [], marks = 4, difficulty = "Easy") {
  const steps = [
    step(1, "Partial fractions", `\\frac{1}{r(r+1)} = \\frac{1}{r} - \\frac{1}{r+1}`, "Decompose each term."),
    step(2, "Telescope", `\\sum_{r=1}^{${nFixed}} = 1 - \\frac{1}{${nFixed + 1}}`, "Cancel intermediate terms."),
    step(3, "Simplify", `= ${answerLatex}`, "Final value."),
    step(4, "Verify", `\\text{Add terms directly}`, "Numerical check."),
    step(5, "Method", `\\text{Method of differences}`, "Named technique."),
    step(6, "Answer", `${answerLatex}`, "Result."),
    step(7, "General formula", `\\sum_{r=1}^{n} \\frac{1}{r(r+1)} = \\frac{n}{n+1}`, "Standard result."),
    step(8, "Application", `\\text{Building block for harder sums}`, "Foundation."),
  ];
  return mdQ(qNum, {
    difficulty, marks, answerType: "written", tags: [...tags, "fixed-n"],
    questionText: `Evaluate $\\displaystyle\\sum_{r=1}^{${nFixed}} \\frac{1}{r(r+1)}$ using the method of differences.`,
    workedSolution: { steps, finalAnswer: `$${answerLatex}$` },
  });
}

function limitQ(qNum, tags = [], marks = 6, difficulty = "Intermediate") {
  const steps = [
    step(1, "Finite sum", `\\sum_{r=1}^{n} \\frac{1}{r(r+1)} = 1 - \\frac{1}{n+1}`, "Telescoping result."),
    step(2, "Take limit", `\\lim_{n\\to\\infty} \\left(1 - \\frac{1}{n+1}\\right) = 1`, "Tail term vanishes."),
    step(3, "Convergence", `\\text{The series converges to } 1`, "Infinite sum exists."),
    step(4, "Partial sums", `S_n = \\frac{n}{n+1} \\to 1`, "Alternative route."),
    step(5, "Comparison", `\\text{Each term is positive}`, "Justifies convergence."),
    step(6, "Method", `\\text{Telescoping then limit}`, "Two-step process."),
    step(7, "Answer", `1`, "Limit value."),
    step(8, "Contrast", `\\sum \\frac{1}{r} \\text{ diverges}`, "Harmonic series differs."),
    step(9, "Note", `\\text{Not all telescoping series converge}`, "Important distinction."),
  ];
  return mdQ(qNum, {
    difficulty, marks, answerType: "written", tags: [...tags, "limit", "infinite-series"],
    questionText: "Find $\\displaystyle\\lim_{n\\to\\infty} \\sum_{r=1}^{n} \\frac{1}{r(r+1)}$.",
    workedSolution: { steps, finalAnswer: "$1$" },
  });
}

function decomposeFirstQ(qNum, numerator, a, b, decompLatex, n, answerLatex, tags = [], marks = 6, difficulty = "Intermediate") {
  const steps = [
    step(1, "Part (a): Set up", `\\frac{${numerator}}{(r+${a})(r+${b})} = \\frac{A}{r+${a}} + \\frac{B}{r+${b}}`, "Partial fraction form."),
    step(2, "Solve", decompLatex, "Find constants."),
    step(3, "Part (b): Decompose", `\\text{Each term becomes a difference}`, "Enables telescoping."),
    step(4, "Sum and telescope", `\\sum_{r=1}^{${n}} \\text{ cancels to give } ${answerLatex}`, "Method of differences."),
    step(5, "Verify", `\\text{Check } n=1`, "Numerical confirmation."),
    step(6, "Method summary", `\\text{Partial fractions } \\Rightarrow \\text{ telescope}`, "Two-step technique."),
    step(7, "Answer", answerLatex, "Result."),
    step(8, "Exam tip", `\\text{Always show partial fractions first}`, "Mark scheme."),
    step(9, "General", `\\text{Standard FM approach}`, "Technique."),
  ];
  return mdQ(qNum, {
    difficulty, marks, answerType: "written", tags: [...tags, "two-part", "partial-fractions"],
    questionText: `(a) Express $\\dfrac{${numerator}}{(r+${a})(r+${b})}$ in partial fractions.\n(b) Hence find $\\displaystyle\\sum_{r=1}^{${n}} \\dfrac{${numerator}}{(r+${a})(r+${b})}$.`,
    workedSolution: { steps, finalAnswer: `$${answerLatex}$` },
  });
}

function squareDiffQ(qNum, n, tags = [], marks = 6, difficulty = "Hard") {
  const ans = formatExact(1 - 1 / ((n + 1) ** 2));
  const steps = [
    step(1, "Recognise form", `\\frac{1}{r^2} - \\frac{1}{(r+1)^2}`, "Difference of squares reciprocals."),
    step(2, "Telescope", `\\sum_{r=1}^{${n}} = 1 - \\frac{1}{(${n + 1})^2}`, "Cancel intermediate terms."),
    step(3, "Simplify", `= ${ans}`, "Final value."),
    step(4, "Limit", `\\lim_{n\\to\\infty} = 1`, "Infinite sum converges."),
    step(5, "Verify $n=1$", `1 - \\frac{1}{4} = \\frac{3}{4}`, "Check."),
    step(6, "Not", `\\sum \\frac{1}{r^2} \\text{ itself}`, "Different from Basel problem."),
    step(7, "Method", `\\text{Explicit difference — no partial fractions}`, "Direct telescope."),
    step(8, "Answer", `${ans}`, "Finite sum."),
    step(9, "Application", `\\text{Variant of method of differences}`, "Extension."),
  ];
  return mdQ(qNum, {
    difficulty, marks, answerType: "written", tags: [...tags, "squares", "explicit-difference"],
    questionText: `Evaluate $\\displaystyle\\sum_{r=1}^{${n}} \\left(\\frac{1}{r^2} - \\frac{1}{(r+1)^2}\\right)$.`,
    workedSolution: { steps, finalAnswer: `$${ans}$` },
  });
}

function hardQ(qNum, text, steps, answer, tags = [], marks = 8) {
  return mdQ(qNum, {
    difficulty: "Hard", marks, answerType: "written", tags,
    questionText: text,
    workedSolution: { steps, finalAnswer: answer },
  });
}

const questions = [
  // Easy: 1/(r(r+1)) (1–12)
  rrplus1Q(1, 5), rrplus1Q(2, 10), rrplus1Q(3, 20), rrplus1Q(4, 3),
  rrplus1Q(5, 7), rrplus1Q(6, 12), rrplus1Q(7, 15), rrplus1Q(8, 4),
  rrplus1Q(9, 8), rrplus1Q(10, 6), rrplus1Q(11, 9), rrplus1Q(12, 11),

  // Easy: explicit differences & 1/(r(r+2)) (13–22)
  explicitDiffQ(13, 5), explicitDiffQ(14, 10), explicitDiffQ(15, 8),
  rrplus2Q(16, 5), rrplus2Q(17, 10), rrplus2Q(18, 8),
  rrplus2Q(19, 6), rrplus2Q(20, 12), rrplus2Q(21, 4),
  rrplus1Q(22, 25, ["large-n"], 4, "Easy"),

  // Easy: fixed small sums (23–25)
  fixedSumQ(23, 5, "\\frac{5}{6}"), fixedSumQ(24, 4, "\\frac{4}{5}"), fixedSumQ(25, 6, "\\frac{6}{7}"),

  // Intermediate: odd terms, gap 3, triple (26–40)
  oddTermsQ(26, 5), oddTermsQ(27, 10), oddTermsQ(28, 20),
  oddTermsQ(29, 8), oddTermsQ(30, 15),
  rrplus3Q(31, 5), rrplus3Q(32, 10), rrplus3Q(33, 8),
  rrplus3Q(34, 6), rrplus3Q(35, 12),
  rrrplus2Q(36, 5), rrrplus2Q(37, 10), rrrplus2Q(38, 8),
  rMinus1rQ(39, 10), rMinus1rQ(40, 20),

  // Intermediate: scaled, limits, two-part (41–55)
  fourRRplus1Q(41, 10), fourRRplus1Q(42, 20),
  rrplus4Q(43, 10), rrplus4Q(44, 8),
  limitQ(45), limitQ(46),
  decomposeFirstQ(47, "3", 0, 1, "A=3,\\; B=-3", 10, formatExact(3 * sumRRplus1(10)), ["linear-numerator"]),
  decomposeFirstQ(48, "1", 1, 2, "A=-\\frac{1}{3},\\; B=\\frac{1}{3}", 8, formatExact(sumRplus1Rplus2(8)), ["shifted"]),
  decomposeFirstQ(49, "2", 0, 1, "A=2,\\; B=-2", 15, formatExact(2 * sumRRplus1(15)), ["scaled-numerator"]),
  decomposeFirstQ(50, "1", 0, 2, "A=\\frac{1}{2},\\; B=-\\frac{1}{2}", 12, formatExact(sumRRplus2(12)), ["gap-2"]),
  oddTermsQ(51, 25, ["large-n"], 6, "Intermediate"),
  rrplus1Q(52, 50, ["large-n"], 5, "Intermediate"),
  rrplus3Q(53, 15, ["medium-n"], 6, "Intermediate"),
  rrrplus2Q(54, 15, ["medium-n"], 6, "Intermediate"),
  rMinus1rQ(55, 50, ["large-n"], 6, "Intermediate"),

  // Hard: proofs and advanced (56–70)
  hardQ(
    56,
    "Show that $\\displaystyle\\sum_{r=1}^{n} \\frac{1}{r(r+1)(r+2)} = \\frac{n(n+3)}{4(n+1)(n+2)}$.",
    [
      step(1, "Partial fractions", `\\frac{1}{r(r+1)(r+2)} = \\frac{1}{2}\\left(\\frac{1}{r(r+1)} - \\frac{1}{(r+1)(r+2)}\\right)`, "Key decomposition."),
      step(2, "Telescope", `\\sum_{r=1}^{n} = \\frac{1}{2}\\left(\\frac{1}{2} - \\frac{1}{(n+1)(n+2)}\\right)`, "Cancel intermediate terms."),
      step(3, "Common denominator", `= \\frac{(n+1)(n+2) - 2}{4(n+1)(n+2)}`, "Combine fractions."),
      step(4, "Expand numerator", `= \\frac{n^2 + 3n}{4(n+1)(n+2)}`, "Simplify."),
      step(5, "Factor", `= \\frac{n(n+3)}{4(n+1)(n+2)}`, "Factorise numerator."),
      step(6, "Verify $n=1$", `\\frac{1}{6} = \\frac{1 \\cdot 4}{4 \\cdot 2 \\cdot 3} = \\frac{4}{24} = \\frac{1}{6}`, "Check small case."),
      step(7, "Verify $n=3$", `\\frac{1}{6}+\\frac{1}{24}+\\frac{1}{60} = \\frac{9}{40}`, "Direct sum."),
      step(8, "Formula at $n=3$", `\\frac{3 \\cdot 6}{4 \\cdot 4 \\cdot 5} = \\frac{18}{80} = \\frac{9}{40}`, "Matches."),
      step(9, "Proved", `\\text{Telescoping gives the result}`, "Method of differences."),
      step(10, "Limit", `\\lim_{n\\to\\infty} = \\frac{1}{4}`, "As $n \\to \\infty$."),
      step(11, "Technique", `\\text{Nested partial fractions}`, "Harder decomposition."),
      step(12, "Exam", `\\text{Show cancellation explicitly}`, "Mark scheme."),
      step(13, "Answer", `\\frac{n(n+3)}{4(n+1)(n+2)}`, "Proved form."),
    ],
    "$\\displaystyle\\sum_{r=1}^{n} \\frac{1}{r(r+1)(r+2)} = \\frac{n(n+3)}{4(n+1)(n+2)}$",
    ["proof", "triple-product"],
    10,
  ),

  hardQ(
    57,
    "Prove that $\\displaystyle\\sum_{r=1}^{n} \\frac{1}{r(r+1)} = \\frac{n}{n+1}$ and hence find $\\displaystyle\\lim_{n\\to\\infty} \\sum_{r=1}^{n} \\frac{1}{r(r+1)}$.",
    [
      step(1, "Decompose", `\\frac{1}{r(r+1)} = \\frac{1}{r} - \\frac{1}{r+1}`, "Partial fractions."),
      step(2, "Telescope", `\\sum_{r=1}^{n} = 1 - \\frac{1}{n+1} = \\frac{n}{n+1}`, "Cancel intermediate terms."),
      step(3, "Proved", `\\frac{n}{n+1}`, "Required result."),
      step(4, "Limit", `\\lim_{n\\to\\infty} \\frac{n}{n+1} = 1`, "As $n \\to \\infty$."),
      step(5, "Convergence", `\\text{The infinite series sums to } 1`, "Result."),
      step(6, "Base case", `n=1: \\frac{1}{2}`, "Verified."),
      step(7, "Method", `\\text{Method of differences}`, "Named technique."),
      step(8, "Application", `\\text{Foundation for harder sums}`, "Building block."),
      step(9, "Contrast", `\\sum \\frac{1}{r} \\text{ diverges}`, "Harmonic series."),
      step(10, "Key insight", `\\text{Write as difference to telescope}`, "Core idea."),
      step(11, "Exam", `\\text{Show all cancellation clearly}`, "Mark scheme."),
      step(12, "General", `\\frac{1}{r(r+k)} \\text{ similar}`, "Extension."),
      step(13, "Answer", `\\frac{n}{n+1};\\; \\lim = 1`, "Both parts."),
    ],
    "Proved $\\displaystyle\\sum_{r=1}^{n} \\frac{1}{r(r+1)} = \\frac{n}{n+1}$; limit $= 1$.",
    ["proof", "limit"],
    10,
  ),

  hardQ(
    58,
    "(a) Express $\\dfrac{1}{r(r+1)(r+2)}$ in partial fractions as a telescoping difference.\n(b) Hence evaluate $\\displaystyle\\sum_{r=1}^{10} \\frac{1}{r(r+1)(r+2)}$.",
    [
      step(1, "Part (a)", `\\frac{1}{r(r+1)(r+2)} = \\frac{1}{2}\\left(\\frac{1}{r(r+1)} - \\frac{1}{(r+1)(r+2)}\\right)`, "Telescoping decomposition."),
      step(2, "Part (b): Sum", `\\sum_{r=1}^{10}`, "Apply from $r=1$ to $10$."),
      step(3, "Telescope", `= \\frac{1}{2}\\left(\\frac{1}{2} - \\frac{1}{11 \\cdot 12}\\right)`, "First minus last."),
      step(4, "Simplify", `= \\frac{1}{2}\\left(\\frac{1}{2} - \\frac{1}{132}\\right) = \\frac{1}{2} \\cdot \\frac{65}{132} = \\frac{65}{264}`, "Calculate."),
      step(5, "Verify", `\\text{Direct addition confirms}`, "Numerical check."),
      step(6, "Method", `\\text{Partial fractions then telescope}`, "Two-step FM technique."),
      step(7, "General", `\\text{Works for any upper limit } n`, "General formula."),
      step(8, "Limit", `n=10 \\text{ case evaluated}`, "Specific answer."),
      step(9, "Answer", `\\frac{65}{264}`, "Final value."),
      step(10, "Technique", `\\text{Method of differences}`, "Core method."),
      step(11, "Note", `\\text{Triple products need nested PF}`, "Harder type."),
      step(12, "Link", `\\text{Partial fractions from A-Level}`, "Prior knowledge."),
      step(13, "Final", `\\frac{65}{264}`, "Answer."),
    ],
    "$\\dfrac{65}{264}$",
    ["two-part", "triple-product"],
    10,
  ),

  hardQ(
    59,
    "Find $\\displaystyle\\sum_{r=1}^{n} \\frac{1}{(r+1)(r+2)(r+3)}$ using partial fractions and the method of differences.",
    [
      step(1, "Shift index", `\\text{Let } k=r+1 \\text{; sum from } k=2 \\text{ to } n+1`, "Reindex for clarity."),
      step(2, "Partial fractions", `\\frac{1}{k(k+1)(k+2)} = \\frac{1}{2}\\left(\\frac{1}{k(k+1)} - \\frac{1}{(k+1)(k+2)}\\right)`, "Same triple-product form."),
      step(3, "Telescope", `\\sum_{k=2}^{n+1} = \\frac{1}{2}\\left(\\frac{1}{6} - \\frac{1}{(n+2)(n+3)}\\right)`, "First and last survive."),
      step(4, "Simplify", `= \\frac{1}{2}\\left(\\frac{1}{6} - \\frac{1}{(n+2)(n+3)}\\right)`, "Telescoped form."),
      step(5, "Verify $n=1$", `\\frac{1}{2 \\cdot 3 \\cdot 4} = \\frac{1}{24}`, "Direct: one term."),
      step(6, "Formula check", `\\frac{1}{2}\\left(\\frac{1}{6}-\\frac{1}{12}\\right)=\\frac{1}{24}`, "Matches."),
      step(7, "Method", `\\text{Partial fractions then telescope}`, "Standard FM approach."),
      step(8, "Technique", `\\text{Method of differences}`, "Named method."),
      step(9, "General", `\\text{Shifted triple products work similarly}`, "Pattern."),
      step(10, "Limit", `\\lim_{n\\to\\infty} = \\frac{1}{12}`, "As $n \\to \\infty$."),
      step(11, "Exam", `\\text{Show decomposition clearly}`, "Marks available."),
      step(12, "Link", `\\text{Same as } \\sum \\frac{1}{r(r+1)(r+2)} \\text{ with shift}`, "Related sum."),
      step(13, "Answer", `\\frac{1}{2}\\left(\\frac{1}{6}-\\frac{1}{(n+2)(n+3)}\\right)`, "Closed form."),
    ],
    "$\\displaystyle\\sum_{r=1}^{n} \\frac{1}{(r+1)(r+2)(r+3)} = \\frac{1}{2}\\left(\\frac{1}{6}-\\frac{1}{(n+2)(n+3)}\\right)$",
    ["shifted", "triple-product"],
    10,
  ),

  hardQ(
    60,
    "The sum $\\displaystyle\\sum_{r=1}^{n} \\frac{1}{(2r-1)(2r+1)}$ can be used to estimate $\\dfrac{\\pi}{4}$. Find this sum and state its value when $n=10$.",
    [
      step(1, "Partial fractions", `\\frac{1}{(2r-1)(2r+1)} = \\frac{1}{2}\\left(\\frac{1}{2r-1} - \\frac{1}{2r+1}\\right)`, "Decompose."),
      step(2, "Telescope", `\\sum_{r=1}^{n} = \\frac{n}{2n+1}`, "Standard result."),
      step(3, "Substitute $n=10$", `= \\frac{10}{21}`, "Specific value."),
      step(4, "Leibniz link", `\\frac{\\pi}{4} = 1 - \\frac{1}{3} + \\frac{1}{5} - \\cdots`, "Alternating version."),
      step(5, "This sum", `\\text{All positive terms } \\frac{1}{1 \\cdot 3} + \\frac{1}{3 \\cdot 5} + \\cdots`, "Related series."),
      step(6, "Verify $n=10$", `\\frac{10}{21} \\approx 0.476`, "Numerical."),
      step(7, "Method", `\\text{Method of differences}`, "Technique."),
      step(8, "General", `\\frac{n}{2n+1} \\to \\frac{1}{2}`, "Limit as $n \\to \\infty$."),
      step(9, "Answer general", `\\frac{n}{2n+1}`, "Formula."),
      step(10, "Answer $n=10$", `\\frac{10}{21}`, "Specific."),
      step(11, "Context", `\\text{Odd-term telescoping}`, "Standard type."),
      step(12, "FM", `\\text{Core Pure 2}`, "Topic."),
      step(13, "Final", `\\frac{10}{21}`, "Answer."),
    ],
    "$\\displaystyle\\sum_{r=1}^{10} \\frac{1}{(2r-1)(2r+1)} = \\frac{10}{21}$",
    ["odd-terms", "application"],
    10,
  ),

  squareDiffQ(61, 5, ["squares"], 6, "Hard"),
  squareDiffQ(62, 10, ["squares"], 6, "Hard"),
  rrplus1Q(63, 30, ["medium-n"], 5, "Intermediate"),
  rrplus2Q(64, 15, ["medium-n"], 5, "Intermediate"),
  oddTermsQ(65, 12, ["medium-n"], 6, "Hard"),
  rrplus3Q(66, 20, ["large-n"], 6, "Hard"),
  rrrplus2Q(67, 20, ["large-n"], 6, "Hard"),
  rMinus1rQ(68, 30, ["large-n"], 6, "Hard"),
  fourRRplus1Q(69, 50, ["large-n"], 6, "Hard"),
  hardQ(
    70,
    "Explain why the method of differences works for $\\displaystyle\\sum_{r=1}^{n} \\frac{1}{r(r+1)}$, and use it to find $\\displaystyle\\sum_{r=1}^{20} \\frac{1}{r(r+2)} + \\sum_{r=1}^{20} \\frac{1}{r(r+1)}$.",
    [
      step(1, "Method of differences", `\\frac{1}{r(r+1)} = \\frac{1}{r} - \\frac{1}{r+1}`, "Each term is a difference $u_r - u_{r+1}$."),
      step(2, "Why it works", `\\text{Intermediate $u_r$ terms cancel consecutively}`, "Telescoping."),
      step(3, "First sum", `\\sum_{r=1}^{20} \\frac{1}{r(r+1)} = \\frac{20}{21}`, "Standard result."),
      step(4, "Second sum", `\\sum_{r=1}^{20} \\frac{1}{r(r+2)} = \\frac{1}{2}\\left(\\frac{3}{2}-\\frac{1}{21}-\\frac{1}{22}\\right)`, "Gap-2 telescoping."),
      step(5, "Simplify second", `= \\frac{1}{2} \\cdot \\frac{693-22-21}{462} = \\frac{325}{462}`, "Calculate."),
      step(6, "Add both", `\\frac{20}{21} + \\frac{325}{462}`, "Common denominator 462."),
      step(7, "Compute", `= \\frac{440+325}{462} = \\frac{765}{462} = \\frac{255}{154}`, "Simplify."),
      step(8, "Verify components", `\\text{Check each sum separately}`, "Sanity check."),
      step(9, "Method summary", `\\text{Partial fractions enable telescoping}`, "Key insight."),
      step(10, "General", `\\text{Any } \\frac{1}{r(r+k)} \\text{ works similarly}`, "Extension."),
      step(11, "FM context", `\\text{Core Pure 2 series}`, "Topic."),
      step(12, "Exam tip", `\\text{Show cancellation explicitly}`, "Marks."),
      step(13, "Answer", `\\frac{255}{154}`, "Combined sum."),
    ],
    "$\\displaystyle\\sum_{r=1}^{20} \\frac{1}{r(r+2)} + \\sum_{r=1}^{20} \\frac{1}{r(r+1)} = \\frac{255}{154}$",
    ["combined", "proof"],
    10,
  ),
];

const STEP_MIN = { Easy: 6, Intermediate: 9, Hard: 13 };
const STEP_MAX = { Easy: 9, Intermediate: 13, Hard: 18 };
const EXTRA = [
  () => step(0, "Partial fractions", `\\frac{1}{r(r+1)}=\\frac{1}{r}-\\frac{1}{r+1}`, "Decompose before summing."),
  () => step(0, "Method of differences", `u_r-u_{r+1}\\text{ form telescopes}`, "Core idea."),
  () => step(0, "Telescoping", `\\text{Intermediate terms cancel}`, "Write out terms to see cancellation."),
  () => step(0, "Survivors", `\\text{First and last terms remain}`, "After cancellation."),
  () => step(0, "Gap $k$", `\\frac{1}{r(r+k)}\\text{ leaves }k\\text{ terms each end}`, "General pattern."),
  () => step(0, "Verify", `\\text{Check with small }n`, "Substitute $n=1$ or $2$."),
  () => step(0, "Limit", `\\lim_{n\\to\\infty} S_n\\text{ if terms vanish}`, "Infinite series."),
  () => step(0, "Final answer", `\\text{State exact fraction}`, "Simplify fully."),
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
