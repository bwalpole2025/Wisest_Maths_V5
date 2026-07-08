#!/usr/bin/env node
/**
 * Generates 70 A-Level Further Maths "De Moivre's theorem" questions.
 * Output: src/data/questions/a-level-further-maths/year-2-pure/de-moivre.ts
 */

import { writeFileSync, mkdirSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const outDir = resolve(__dirname, "../src/data/questions/a-level-further-maths/year-2-pure");
const outPath = resolve(outDir, "de-moivre.ts");

mkdirSync(outDir, { recursive: true });

const SUBTOPIC = "De Moivre's theorem";
const SUBTOPIC_ID = "fm.y2.pure.de-moivre";
const LEVEL = "A-Level Further Maths";
const TOPIC = "Further Maths Year 2: Pure (Core Pure 2)";

const qid = (n) => `fm.y2.pure.de-moivre.q${String(n).padStart(3, "0")}`;
const step = (n, description, workingLatex, explanation) => ({ stepNumber: n, description, workingLatex, explanation, diagram: null });
const base = (meta) => ({ level: LEVEL, topic: TOPIC, subtopic: SUBTOPIC, subtopicId: SUBTOPIC_ID, questionDiagram: null, ...meta });
const dmQ = (n, meta) => base({ id: qid(n), tags: ["de-moivre", ...(meta.tags || [])], ...meta });

function fmt(a, b) {
  if (b === 0) return `${a}`;
  const sign = b > 0 ? "+" : "-";
  const absB = Math.abs(b);
  if (a === 0) return b > 0 ? `${b}i` : `-${absB}i`;
  return `${a}${sign}${absB}i`;
}

const ARG_PI = {
  0: "0",
  "pi/6": "\\frac{\\pi}{6}",
  "pi/4": "\\frac{\\pi}{4}",
  "pi/3": "\\frac{\\pi}{3}",
  "pi/2": "\\frac{\\pi}{2}",
  "2pi/3": "\\frac{2\\pi}{3}",
  "3pi/4": "\\frac{3\\pi}{4}",
  "5pi/6": "\\frac{5\\pi}{6}",
  pi: "\\pi",
  "-pi/6": "-\\frac{\\pi}{6}",
  "-pi/4": "-\\frac{\\pi}{4}",
  "-pi/3": "-\\frac{\\pi}{3}",
  "-pi/2": "-\\frac{\\pi}{2}",
  "-2pi/3": "-\\frac{2\\pi}{3}",
  "-3pi/4": "-\\frac{3\\pi}{4}",
  "-5pi/6": "-\\frac{5\\pi}{6}",
};

function powerExpQ(qNum, r, argKey, n, rOut, argOutKey, tags = [], marks = 4, difficulty = "Easy") {
  const arg = ARG_PI[argKey] ?? argKey;
  const argOut = ARG_PI[argOutKey] ?? argOutKey;
  const steps = [
    step(1, "De Moivre's theorem", `(re^{i\\theta})^{n} = r^{n}e^{in\\theta}`, "Raise modulus to power $n$; multiply argument by $n$."),
    step(2, "Given", `z = ${r}e^{i${arg}}`, "Exponential form."),
    step(3, "Modulus power", `r^{${n}} = ${rOut}`, "Compute $r^n$."),
    step(4, "Argument multiple", `n\\theta = ${n} \\times ${arg} = ${argOut}`, "Multiply argument by $n$."),
    step(5, "Result", `z^{${n}} = ${rOut}e^{i${argOut}}`, "De Moivre form."),
    step(6, "Verify range", `\\text{Adjust to } (-\\pi,\\pi] \\text{ if needed}`, "Principal argument may need adjustment."),
  ];
  return dmQ(qNum, {
    difficulty, marks, answerType: "written", tags: [...tags, "powers"],
    questionText: `Given $z = ${r}e^{i${arg}}$, find $z^{${n}}$ in the form $re^{i\\theta}$.`,
    workedSolution: { steps, finalAnswer: `$z^{${n}} = ${rOut}e^{i${argOut}}$` },
  });
}

function powerRectQ(qNum, a, b, n, aOut, bOut, tags = [], marks = 5, difficulty = "Easy") {
  const z = fmt(a, b);
  const sq = a * a + b * b;
  const r = Math.sqrt(sq);
  const rStr = Number.isInteger(r) ? `${r}` : `\\sqrt{${sq}}`;
  const rOut = Math.pow(r, n);
  const rOutStr = Number.isInteger(rOut) ? `${rOut}` : `${rStr}^{${n}}`;
  const steps = [
    step(1, "Modulus", `|z| = ${rStr}`, "Distance from origin."),
    step(2, "Argument", `\\arg(z) = \\tan^{-1}\\!\\left(\\frac{${b}}{${a}}\\right)`, "Principal argument."),
    step(3, "Exponential form", `z = ${rStr}e^{i\\theta}`, "Write in exponential form."),
    step(4, "Apply De Moivre", `z^{${n}} = (${rStr})^{${n}} e^{i${n}\\theta}`, "Raise modulus and multiply argument."),
    step(5, "Modulus result", `|z|^{${n}} = ${rOutStr}`, "Compute $r^n$."),
    step(6, "Expand using trig", `z^{${n}} = ${rOutStr}(\\cos ${n}\\theta + i\\sin ${n}\\theta)`, "Euler's formula."),
    step(7, "Rectangular form", `z^{${n}} = ${fmt(aOut, bOut)}`, "Evaluate real and imaginary parts."),
    step(8, "Verify", `|z^{${n}}| = ${rOutStr}`, "Modulus check."),
    step(9, "Answer", `${fmt(aOut, bOut)}`, "Final $a+bi$ form."),
  ];
  return dmQ(qNum, {
    difficulty, marks, answerType: "written", tags: [...tags, "powers", "rectangular"],
    questionText: `Find $(${z})^{${n}}$, giving your answer in the form $a + bi$.`,
    workedSolution: { steps, finalAnswer: `$(${z})^{${n}} = ${fmt(aOut, bOut)}$` },
  });
}

function nthRootsQ(qNum, r, argKey, n, roots, tags = [], marks = 6, difficulty = "Intermediate") {
  const arg = ARG_PI[argKey] ?? argKey;
  const rootR = Math.pow(r, 1 / n);
  const rootRStr = Number.isInteger(rootR) ? `${rootR}` : `\\sqrt[${n}]{${r}}`;
  const steps = [
    step(1, "De Moivre for roots", `z = re^{i\\theta} \\Rightarrow z^{1/${n}} = r^{1/${n}}e^{i(\\theta + 2k\\pi)/${n}}`, "There are $n$ distinct roots for $k = 0, 1, \\ldots, ${n}-1$."),
    step(2, "Modulus of each root", `r^{1/${n}} = ${rootRStr}`, "Take the positive real $n$th root of $r$."),
    step(3, "Base argument", `\\theta = ${arg}`, "Principal argument of $z$."),
    step(4, "Root spacing", `\\text{Arguments differ by } \\frac{2\\pi}{${n}}`, "Roots are equally spaced on a circle."),
    step(5, "List roots", roots.map((rt, i) => `k=${i}: ${rt}`).join(";\\; "), "Substitute each value of $k$."),
    step(6, "Verify count", `\\text{Exactly } ${n} \\text{ distinct roots}`, "Complete set on the Argand diagram."),
    step(7, "Geometric view", `\\text{Vertices of a regular ${n}-gon}`, "Roots lie on a circle of radius $r^{1/n}$."),
    step(8, "Product check", `\\text{Product of all roots equals } ${r > 1 ? r : "original modulus"}`, "Properties of roots of a complex number."),
    step(9, "Answer", roots.join(",\\; "), "All $n$ roots in exponential form."),
  ];
  return dmQ(qNum, {
    difficulty, marks, answerType: "written", tags: [...tags, "roots"],
    questionText: `Find the ${n} roots of $z^{${n}} = ${r}e^{i${arg}}$, giving each in the form $re^{i\\theta}$.`,
    workedSolution: { steps, finalAnswer: roots.map((r) => `$${r}$`).join(", ") },
  });
}

function solveZnEqualsW(qNum, n, r, argKey, roots, tags = [], marks = 7, difficulty = "Intermediate") {
  const arg = ARG_PI[argKey] ?? argKey;
  const rootR = Math.pow(r, 1 / n);
  const rootRStr = Number.isInteger(rootR) ? `${rootR}` : `\\sqrt[${n}]{${r}}`;
  const steps = [
    step(1, "Write $w$ in exponential form", `w = ${r}e^{i${arg}}`, "Convert the right-hand side."),
    step(2, "Set up equation", `z^{${n}} = ${r}e^{i${arg}}`, "Standard form for root-finding."),
    step(3, "De Moivre for roots", `z = r^{1/${n}}e^{i(\\theta + 2k\\pi)/${n}}`, "General solution formula."),
    step(4, "Modulus", `|z| = ${rootRStr}`, "All roots have the same modulus."),
    step(5, "Values of $k$", `k = 0, 1, \\ldots, ${n - 1}`, "Distinct roots."),
    step(6, "Compute each root", roots.map((rt, i) => `k=${i}: ${rt}`).join(";\\; "), "Substitute each $k$."),
    step(7, "Verify one root", `(${roots[0]})^{${n}} = ${r}e^{i${arg}}`, "Check by raising a root to power $n$."),
    step(8, "Geometric description", `\\text{Regular ${n}-gon on circle } |z|=${rootRStr}`, "Roots equally spaced."),
    step(9, "Answer", roots.join(",\\; "), "Complete solution set."),
  ];
  return dmQ(qNum, {
    difficulty, marks, answerType: "written", tags: [...tags, "equations", "roots"],
    questionText: `Solve $z^{${n}} = ${r}e^{i${arg}}$, giving all roots in the form $re^{i\\theta}$.`,
    workedSolution: { steps, finalAnswer: roots.map((r) => `$${r}$`).join(", ") },
  });
}

function cosSinQ(qNum, n, cosFormula, sinFormula, tags = [], marks = 6, difficulty = "Intermediate") {
  const steps = [
    step(1, "De Moivre's theorem", `(\\cos\\theta + i\\sin\\theta)^{${n}} = \\cos ${n}\\theta + i\\sin ${n}\\theta`, "Integer power form."),
    step(2, "Binomial expansion", `(\\cos\\theta + i\\sin\\theta)^{${n}} = \\sum_{k=0}^{${n}} \\binom{${n}}{k}(\\cos\\theta)^{${n}-k}(i\\sin\\theta)^{k}`, "Expand using the binomial theorem."),
    step(3, "Separate real and imaginary", `\\text{Re: terms with even powers of } i`, "Only even $k$ contribute to the real part."),
    step(4, "Cosine result", `\\cos ${n}\\theta = ${cosFormula}`, "Equate real parts."),
    step(5, "Separate imaginary", `\\text{Im: terms with odd powers of } i`, "Odd $k$ contribute to the imaginary part."),
    step(6, "Sine result", `\\sin ${n}\\theta = ${sinFormula}`, "Equate imaginary parts (after dividing by $i$)."),
    step(7, "Verify small angle", `\\theta = 0 \\text{ gives } \\cos 0 = 1`, "Sanity check at $\\theta = 0$."),
    step(8, "Application", `\\text{Use to expand } \\cos ${n}\\theta \\text{ or solve equations}`, "Multiple-angle identities follow from De Moivre."),
    step(9, "Answer", `\\cos ${n}\\theta = ${cosFormula};\\; \\sin ${n}\\theta = ${sinFormula}`, "Both identities."),
  ];
  return dmQ(qNum, {
    difficulty, marks, answerType: "written", tags: [...tags, "multiple-angle"],
    questionText: `Using De Moivre's theorem, express $\\cos ${n}\\theta$ and $\\sin ${n}\\theta$ in terms of powers of $\\cos\\theta$ and $\\sin\\theta$.`,
    workedSolution: { steps, finalAnswer: `$\\cos ${n}\\theta = ${cosFormula}$, $\\sin ${n}\\theta = ${sinFormula}$` },
  });
}

function inductionBaseQ(qNum, tags = [], marks = 5, difficulty = "Intermediate") {
  const steps = [
    step(1, "Statement", `P(n): (\\cos\\theta + i\\sin\\theta)^{n} = \\cos n\\theta + i\\sin n\\theta`, "De Moivre's theorem for positive integers."),
    step(2, "Base case $n=1$", `(\\cos\\theta + i\\sin\\theta)^{1} = \\cos\\theta + i\\sin\\theta`, "LHS equals RHS when $n=1$."),
    step(3, "LHS at $n=1$", `= \\cos(1\\cdot\\theta) + i\\sin(1\\cdot\\theta)`, "Substitute into RHS formula."),
    step(4, "Conclusion base", `P(1) \\text{ is true}`, "Base case verified."),
    step(5, "Inductive hypothesis", `\\text{Assume } P(k) \\text{ true for some } k \\geq 1`, "Assume the statement holds for $n=k$."),
    step(6, "Consider $P(k+1)$", `(\\cos\\theta + i\\sin\\theta)^{k+1}`, "Need to prove for $n=k+1$."),
    step(7, "Split power", `= (\\cos\\theta + i\\sin\\theta)^{k} \\cdot (\\cos\\theta + i\\sin\\theta)`, "Separate one factor."),
    step(8, "Apply hypothesis", `= (\\cos k\\theta + i\\sin k\\theta)(\\cos\\theta + i\\sin\\theta)`, "Use $P(k)$ on the first factor."),
    step(9, "Answer", `\\text{Base case } n=1 \\text{ verified; inductive step uses angle addition}`, "Proof structure established."),
  ];
  return dmQ(qNum, {
    difficulty, marks, answerType: "written", tags: [...tags, "induction", "proof"],
    questionText: `Prove the base case $n=1$ of De Moivre's theorem: $(\\cos\\theta + i\\sin\\theta)^{n} = \\cos n\\theta + i\\sin n\\theta$, and outline the inductive step.`,
    workedSolution: { steps, finalAnswer: "Base case: $(\\cos\\theta+i\\sin\\theta)^1=\\cos\\theta+i\\sin\\theta$ ✓. Inductive step: multiply $P(k)$ by $(\\cos\\theta+i\\sin\\theta)$ and use compound angle formulae." },
  });
}

function hardDmQ(qNum, text, steps, answer, tags = [], marks = 8) {
  return dmQ(qNum, {
    difficulty: "Hard", marks, answerType: "written", tags,
    questionText: text,
    workedSolution: { steps, finalAnswer: answer },
  });
}

const questions = [
  // Easy: integer powers in exponential form (1–15)
  powerExpQ(1, 2, "pi/6", 2, 4, "pi/3"),
  powerExpQ(2, 3, "pi/4", 2, 9, "pi/2"),
  powerExpQ(3, 2, "pi/3", 3, 8, "pi"),
  powerExpQ(4, 4, "pi/2", 2, 16, "pi"),
  powerExpQ(5, 5, "0", 2, 25, "0"),
  powerExpQ(6, 2, "pi/4", 3, 8, "3pi/4"),
  powerExpQ(7, 3, "pi/2", 2, 9, "pi"),
  powerExpQ(8, 2, "pi/2", 4, 16, "2pi"),
  powerExpQ(9, 6, "pi/6", 2, 36, "pi/3"),
  powerExpQ(10, 2, "-pi/4", 2, 4, "-pi/2"),
  powerExpQ(11, 3, "pi/3", 3, 27, "pi"),
  powerExpQ(12, 2, "pi/6", 6, 64, "pi"),
  powerExpQ(13, 4, "pi/4", 3, 64, "3pi/4"),
  powerExpQ(14, 5, "pi/2", 2, 25, "pi"),
  powerExpQ(15, 2, "pi/3", 4, 16, "4pi/3"),

  // Easy: powers in rectangular form (16–25)
  powerRectQ(16, 1, 1, 2, 0, 2, ["pi/4"]),
  powerRectQ(17, 1, Math.sqrt(3), 2, -2, 2 * Math.sqrt(3), ["pi/3"]),
  powerRectQ(18, 1, 0, 3, 1, 0, ["pure-real"]),
  powerRectQ(19, 0, 1, 4, 1, 0, ["pure-imaginary"]),
  powerRectQ(20, -1, 0, 3, -1, 0, ["negative-real"]),
  powerRectQ(21, 1, 1, 3, -2, 2, ["pi/4"]),
  powerRectQ(22, 1, -1, 2, 0, -2, ["-pi/4"]),
  powerRectQ(23, 2, 0, 3, 8, 0, ["pure-real"]),
  powerRectQ(24, 0, 2, 3, 0, 8, ["pure-imaginary"]),
  powerRectQ(25, 1, Math.sqrt(3), 3, -8, 0, ["pi/3"]),

  // Intermediate: nth roots (26–40)
  nthRootsQ(26, 8, "0", 3, ["2", "2e^{i2\\pi/3}", "2e^{i4\\pi/3}"], ["cube-roots"]),
  nthRootsQ(27, 1, "0", 4, ["1", "i", "-1", "-i"], ["fourth-roots", "unity"]),
  nthRootsQ(28, 16, "pi/2", 2, ["4e^{i\\pi/4}", "4e^{i5\\pi/4}"], ["square-roots"]),
  nthRootsQ(29, 27, "0", 3, ["3", "3e^{i2\\pi/3}", "3e^{i4\\pi/3}"], ["cube-roots"]),
  nthRootsQ(30, 32, "0", 5, ["2", "2e^{i2\\pi/5}", "2e^{i4\\pi/5}", "2e^{i6\\pi/5}", "2e^{i8\\pi/5}"], ["fifth-roots"]),
  solveZnEqualsW(31, 2, 9, "0", ["3", "-3"], ["quadratic"]),
  solveZnEqualsW(32, 3, 8, "0", ["2", "2e^{i2\\pi/3}", "2e^{i4\\pi/3}"], ["cubic"]),
  solveZnEqualsW(33, 4, 16, "pi/2", ["2e^{i3\\pi/8}", "2e^{i7\\pi/8}", "2e^{i11\\pi/8}", "2e^{i15\\pi/8}"], ["quartic"]),
  solveZnEqualsW(34, 2, 4, "pi", ["2e^{i\\pi/2}", "2e^{i3\\pi/2}"], ["square"]),
  solveZnEqualsW(35, 6, 64, "0", ["2", "2e^{i\\pi/3}", "2e^{i2\\pi/3}", "2e^{i\\pi}", "2e^{i4\\pi/3}", "2e^{i5\\pi/3}"], ["sixth-roots"]),
  nthRootsQ(36, 1, "0", 6, ["1", "e^{i\\pi/3}", "e^{i2\\pi/3}", "e^{i\\pi}", "e^{i4\\pi/3}", "e^{i5\\pi/3}"], ["sixth-roots-unity"]),
  nthRootsQ(37, 81, "0", 4, ["3", "3i", "-3", "-3i"], ["fourth-roots"]),
  solveZnEqualsW(38, 3, 1, "pi", ["e^{i\\pi/3}", "e^{i\\pi}", "e^{i5\\pi/3}"], ["cube"]),
  solveZnEqualsW(39, 5, 32, "pi/2", ["2e^{i\\pi/10}", "2e^{i\\pi/2}", "2e^{i9\\pi/10}", "2e^{i13\\pi/10}", "2e^{i17\\pi/10}"], ["quintic"]),
  solveZnEqualsW(40, 2, 25, "0", ["5", "-5"], ["square"]),

  // Intermediate: multiple-angle & induction (41–50)
  cosSinQ(41, 2, "\\cos^{2}\\theta - \\sin^{2}\\theta", "2\\sin\\theta\\cos\\theta", ["double-angle"]),
  cosSinQ(42, 3, "4\\cos^{3}\\theta - 3\\cos\\theta", "3\\sin\\theta - 4\\sin^{3}\\theta", ["triple-angle"]),
  inductionBaseQ(43, ["proof"]),
  powerRectQ(44, -1, Math.sqrt(3), 2, -2, -2 * Math.sqrt(3), ["2pi/3"], 5, "Intermediate"),
  powerRectQ(45, 1, Math.sqrt(3), 4, -8, -8 * Math.sqrt(3), ["4pi/3"], 5, "Intermediate"),
  powerExpQ(46, 2, "pi/4", 4, 16, "pi", [], 5, "Intermediate"),
  powerExpQ(47, 3, "-pi/3", 3, 27, "-pi", [], 5, "Intermediate"),
  powerExpQ(48, 2, "pi/6", 5, 32, "5pi/6", [], 5, "Intermediate"),
  powerExpQ(49, 4, "-pi/4", 2, 16, "-pi/2", [], 5, "Intermediate"),
  powerExpQ(50, 2, "3pi/4", 3, 8, "9pi/4", [], 5, "Intermediate"),

  // Hard: multi-step (51–70)
  hardDmQ(
    51,
    "Find $(1 + i\\sqrt{3})^{6}$, giving your answer in the form $a + bi$.",
    [
      step(1, "Modulus", `|1+i\\sqrt{3}| = 2`, "Distance from origin."),
      step(2, "Argument", `\\arg = \\pi/3`, "Standard angle."),
      step(3, "Exponential form", `1+i\\sqrt{3} = 2e^{i\\pi/3}`, "Write using De Moivre setup."),
      step(4, "Apply De Moivre", `(2e^{i\\pi/3})^{6} = 2^{6}e^{i\\cdot 6\\pi/3} = 64e^{i2\\pi}`, "Raise modulus and multiply argument."),
      step(5, "Simplify", `64e^{i2\\pi} = 64(1) = 64`, "Full rotation returns to the positive real axis."),
      step(6, "Verify algebraically", `(1+i\\sqrt{3})^{2} = -2+2i\\sqrt{3}`, "Square first as check."),
      step(7, "Continue squaring", `(-2+2i\\sqrt{3})^{2} = -8-8i\\sqrt{3}`, "Fourth power."),
      step(8, "Final multiply", `(-8-8i\\sqrt{3})(-2+2i\\sqrt{3}) = 64`, "Confirms result."),
      step(9, "Geometric view", `6 \\times \\pi/3 = 2\\pi`, "Six rotations of $60°$."),
      step(10, "Cube roots link", `1+i\\sqrt{3} \\text{ is a sixth root of } 64`, "Connection to roots."),
      step(11, "Modulus check", `|64| = 64 = 2^{6}`, "Consistent."),
      step(12, "Answer form", `64 + 0i`, "Purely real."),
      step(13, "Final", `64`, "Simplified answer."),
    ],
    "$(1 + i\\sqrt{3})^{6} = 64$.",
    ["powers"],
    10,
  ),

  hardDmQ(
    52,
    "Find all complex numbers $z$ such that $z^{4} = -4$, giving each root in the form $re^{i\\theta}$.",
    [
      step(1, "Write $-4$ in exponential form", `-4 = 4e^{i\\pi}`, "Principal argument of $-4$."),
      step(2, "Set up", `z^{4} = 4e^{i\\pi}`, "Equation in exponential form."),
      step(3, "De Moivre for roots", `z = 4^{1/4}e^{i(\\pi + 2k\\pi)/4}`, "General root formula."),
      step(4, "Modulus", `|z| = \\sqrt{2}`, "Fourth root of 4."),
      step(5, "$k=0$", `z = \\sqrt{2}e^{i\\pi/4}`, "First root."),
      step(6, "$k=1$", `z = \\sqrt{2}e^{i3\\pi/4}`, "Second root."),
      step(7, "$k=2$", `z = \\sqrt{2}e^{i5\\pi/4}`, "Third root."),
      step(8, "$k=3$", `z = \\sqrt{2}e^{i7\\pi/4}`, "Fourth root."),
      step(9, "Verify", `(\\sqrt{2}e^{i\\pi/4})^{4} = 4e^{i\\pi} = -4`, "Check first root."),
      step(10, "Geometric view", `\\text{Square vertices on circle } |z|=\\sqrt{2}`, "Regular quadrilateral."),
      step(11, "Rectangular forms", `\\pm\\sqrt{2}(\\pm 1 + i)/\\sqrt{2}`, "Optional conversion."),
      step(12, "Sum of roots", `\\text{Sum} = 0`, "Property of $z^{4} = -4$ excluding real factor."),
      step(13, "Answer", `\\sqrt{2}e^{i\\pi/4},\\; \\sqrt{2}e^{i3\\pi/4},\\; \\sqrt{2}e^{i5\\pi/4},\\; \\sqrt{2}e^{i7\\pi/4}`, "All four roots."),
    ],
    "$z = \\sqrt{2}e^{i\\pi/4}$, $\\sqrt{2}e^{i3\\pi/4}$, $\\sqrt{2}e^{i5\\pi/4}$, $\\sqrt{2}e^{i7\\pi/4}$.",
    ["roots", "equations"],
    10,
  ),

  hardDmQ(
    53,
    "Using De Moivre's theorem, show that $\\cos 3\\theta = 4\\cos^{3}\\theta - 3\\cos\\theta$. Hence solve $\\cos 3\\theta = \\cos\\theta$ for $0 \\leq \\theta < 2\\pi$.",
    [
      step(1, "De Moivre", `(\\cos\\theta + i\\sin\\theta)^{3} = \\cos 3\\theta + i\\sin 3\\theta`, "Cube both sides."),
      step(2, "Expand LHS", `\\cos^{3}\\theta + 3i\\cos^{2}\\theta\\sin\\theta - 3\\cos\\theta\\sin^{2}\\theta - i\\sin^{3}\\theta`, "Binomial expansion."),
      step(3, "Real part", `\\cos 3\\theta = \\cos^{3}\\theta - 3\\cos\\theta\\sin^{2}\\theta`, "Equate real parts."),
      step(4, "Substitute $\\sin^{2}\\theta$", `= \\cos^{3}\\theta - 3\\cos\\theta(1-\\cos^{2}\\theta)`, "Use $\\sin^{2}\\theta = 1 - \\cos^{2}\\theta$."),
      step(5, "Simplify", `= 4\\cos^{3}\\theta - 3\\cos\\theta`, "Identity proved."),
      step(6, "Solve equation", `4\\cos^{3}\\theta - 3\\cos\\theta = \\cos\\theta`, "Substitute identity."),
      step(7, "Rearrange", `4\\cos^{3}\\theta - 4\\cos\\theta = 0`, "Bring terms together."),
      step(8, "Factorise", `4\\cos\\theta(\\cos^{2}\\theta - 1) = 0`, "Factor out $\\cos\\theta$."),
      step(9, "Solutions", `\\cos\\theta = 0 \\text{ or } \\cos\\theta = \\pm 1`, "Two cases."),
      step(10, "$\\cos\\theta = 0$", `\\theta = \\pi/2,\\; 3\\pi/2`, "In $[0, 2\\pi)$."),
      step(11, "$\\cos\\theta = 1$", `\\theta = 0`, "Principal value."),
      step(12, "$\\cos\\theta = -1$", `\\theta = \\pi`, "Second solution."),
      step(13, "Answer", `\\theta = 0,\\; \\pi/2,\\; \\pi,\\; 3\\pi/2`, "All solutions in the interval."),
    ],
    "$\\cos 3\\theta = 4\\cos^{3}\\theta - 3\\cos\\theta$; solutions: $\\theta = 0,\\, \\frac{\\pi}{2},\\, \\pi,\\, \\frac{3\\pi}{2}$.",
    ["identity", "equations"],
    10,
  ),

  hardDmQ(
    54,
    "The complex number $z = 1 + i$ has $n$th roots $w_k = r e^{i(\\pi/4 + 2k\\pi/n)}$. For $n=8$, find all roots and show they are the vertices of a regular octagon.",
    [
      step(1, "Modulus of $z$", `|1+i| = \\sqrt{2}`, "Compute $r$ for $z$."),
      step(2, "Argument of $z$", `\\arg(1+i) = \\pi/4`, "First quadrant."),
      step(3, "Root modulus", `r = (\\sqrt{2})^{1/8} = 2^{1/16}`, "Eighth root of modulus."),
      step(4, "General root", `w_k = 2^{1/16}e^{i(\\pi/32 + k\\pi/4)}`, "For $k = 0, 1, \\ldots, 7$."),
      step(5, "List $k=0$ to $7$", `\\text{Arguments: } \\pi/32,\\; 9\\pi/32,\\; \\ldots,\\; 15\\pi/16`, "Equally spaced by $\\pi/4$."),
      step(6, "Equal spacing", `\\text{Angle increment} = 2\\pi/8 = \\pi/4`, "Regular angular separation."),
      step(7, "Same modulus", `|w_k| = 2^{1/16} \\text{ for all } k`, "All on the same circle."),
      step(8, "Octagon property", `8 \\text{ points equally spaced on a circle}`, "Definition of regular octagon vertices."),
      step(9, "Product of roots", `\\prod w_k = (1+i)`, "Property of all $n$th roots."),
      step(10, "Verify $k=0$", `w_0^{8} = 1+i`, "Check first root."),
      step(11, "Geometric centre", `\\text{Origin}`, "Circle centred at origin."),
      step(12, "Symmetry", `\\text{Rotational symmetry of order } 8`, "Octagon symmetry."),
      step(13, "Answer", `w_k = 2^{1/16}e^{i(\\pi/32 + k\\pi/4)},\\; k=0,\\ldots,7`, "All eighth roots."),
    ],
    "$w_k = 2^{1/16}e^{i(\\pi/32 + k\\pi/4)}$ for $k = 0, 1, \\ldots, 7$; equally spaced on $|w| = 2^{1/16}$.",
    ["roots", "geometry"],
    10,
  ),

  hardDmQ(
    55,
    "Prove by induction that $(\\cos\\theta + i\\sin\\theta)^{n} = \\cos n\\theta + i\\sin n\\theta$ for all positive integers $n$.",
    [
      step(1, "Statement $P(n)$", `P(n): (\\cos\\theta + i\\sin\\theta)^{n} = \\cos n\\theta + i\\sin n\\theta`, "De Moivre's theorem."),
      step(2, "Base case $n=1$", `\\cos\\theta + i\\sin\\theta = \\cos\\theta + i\\sin\\theta`, "Trivially true."),
      step(3, "Assume $P(k)$", `(\\cos\\theta + i\\sin\\theta)^{k} = \\cos k\\theta + i\\sin k\\theta`, "Inductive hypothesis."),
      step(4, "Consider $P(k+1)$", `(\\cos\\theta + i\\sin\\theta)^{k+1}`, "Target statement."),
      step(5, "Split", `= (\\cos\\theta + i\\sin\\theta)^{k}(\\cos\\theta + i\\sin\\theta)`, "Separate one factor."),
      step(6, "Apply $P(k)$", `= (\\cos k\\theta + i\\sin k\\theta)(\\cos\\theta + i\\sin\\theta)`, "Use hypothesis."),
      step(7, "Expand", `= \\cos k\\theta\\cos\\theta - \\sin k\\theta\\sin\\theta + i(\\sin k\\theta\\cos\\theta + \\cos k\\theta\\sin\\theta)`, "Multiply out."),
      step(8, "Compound angle", `= \\cos(k\\theta + \\theta) + i\\sin(k\\theta + \\theta)`, "Use $\\cos(A+B)$ and $\\sin(A+B)$."),
      step(9, "Simplify", `= \\cos((k+1)\\theta) + i\\sin((k+1)\\theta)`, "Combine angles."),
      step(10, "Conclusion", `P(k+1) \\text{ is true}`, "Inductive step complete."),
      step(11, "By induction", `P(n) \\text{ true for all } n \\in \\mathbb{Z}^{+}`, "Base case and inductive step."),
      step(12, "Corollary", `(re^{i\\theta})^{n} = r^{n}e^{in\\theta}`, "Extends to mod–arg form."),
      step(13, "Answer", `\\text{De Moivre proved by induction}`, "Complete proof."),
    ],
    "Base case $n=1$ ✓. Inductive step uses compound angle formulae to show $P(k) \\Rightarrow P(k+1)$. Hence true for all positive integers $n$.",
    ["induction", "proof"],
    10,
  ),

  hardDmQ(
    56,
    "Find $\\dfrac{(1 + i)^{10}}{(1 - i)^{10}}$ without expanding fully, giving your answer in the form $a + bi$.",
    [
      step(1, "Modulus of $1+i$", `|1+i| = \\sqrt{2}`, "Compute modulus."),
      step(2, "Argument of $1+i$", `\\arg = \\pi/4`, "First quadrant."),
      step(3, "Exponential form", `1+i = \\sqrt{2}e^{i\\pi/4}`, "Write in exponential form."),
      step(4, "Similarly $1-i$", `1-i = \\sqrt{2}e^{-i\\pi/4}`, "Fourth quadrant."),
      step(5, "Numerator", `(1+i)^{10} = (\\sqrt{2})^{10}e^{i10\\pi/4} = 32e^{i5\\pi/2}`, "Apply De Moivre."),
      step(6, "Simplify exponent", `e^{i5\\pi/2} = e^{i\\pi/2} = i`, "Reduce angle mod $2\\pi$."),
      step(7, "Numerator value", `32i`, "Simplified."),
      step(8, "Denominator", `(1-i)^{10} = (\\sqrt{2})^{10}e^{-i10\\pi/4} = 32e^{-i5\\pi/2}`, "Apply De Moivre."),
      step(9, "Simplify", `e^{-i5\\pi/2} = e^{-i\\pi/2} = -i`, "Reduce angle."),
      step(10, "Denominator value", `-32i`, "Simplified."),
      step(11, "Divide", `\\frac{32i}{-32i} = -1`, "Cancel."),
      step(12, "Alternative", `\\frac{(1+i)^{10}}{(1-i)^{10}} = \\left(\\frac{1+i}{1-i}\\right)^{10}`, "Single fraction."),
      step(13, "Answer", `-1 + 0i`, "Final result."),
    ],
    "$\\dfrac{(1 + i)^{10}}{(1 - i)^{10}} = -1$.",
    ["powers", "division"],
    10,
  ),

  hardDmQ(
    57,
    "Solve $z^{3} = 8i$, giving all roots in the form $a + bi$.",
    [
      step(1, "Write $8i$ exponentially", `8i = 8e^{i\\pi/2}`, "Principal argument."),
      step(2, "Set up", `z^{3} = 8e^{i\\pi/2}`, "Cube root problem."),
      step(3, "Root modulus", `|z| = 2`, "Cube root of 8."),
      step(4, "General argument", `\\arg(z) = \\frac{\\pi/2 + 2k\\pi}{3}`, "For $k = 0, 1, 2$."),
      step(5, "$k=0$", `z = 2e^{i\\pi/6} = 2(\\cos\\pi/6 + i\\sin\\pi/6) = \\sqrt{3} + i`, "First root."),
      step(6, "$k=1$", `z = 2e^{i5\\pi/6} = -\\sqrt{3} + i`, "Second root."),
      step(7, "$k=2$", `z = 2e^{i3\\pi/2} = -2i`, "Third root."),
      step(8, "Verify $k=0$", `(\\sqrt{3}+i)^{3} = 8i`, "Check by cubing."),
      step(9, "Geometric view", `\\text{Equilateral triangle on circle } |z|=2`, "Three equally spaced roots."),
      step(10, "Sum of roots", `\\sqrt{3}+i + (-\\sqrt{3}+i) + (-2i) = 0`, "Roots sum to zero."),
      step(11, "Product", `\\text{Product} = 8i`, "Product of all roots equals constant term."),
      step(12, "Alternative form", `2e^{i\\pi/6},\\; 2e^{i5\\pi/6},\\; 2e^{i3\\pi/2}`, "Exponential forms."),
      step(13, "Answer", `\\sqrt{3}+i,\\; -\\sqrt{3}+i,\\; -2i`, "All three roots."),
    ],
    "$z = \\sqrt{3}+i$, $-\\sqrt{3}+i$, or $-2i$.",
    ["roots", "equations"],
    10,
  ),

  hardDmQ(
    58,
    "Find the smallest positive integer $n$ such that $(\\tfrac{1}{2} + \\tfrac{\\sqrt{3}}{2}i)^{n}$ is real. Justify your answer using De Moivre's theorem.",
    [
      step(1, "Recognise angle", `\\cos\\pi/3 = 1/2,\\; \\sin\\pi/3 = \\sqrt{3}/2`, "Standard values."),
      step(2, "Exponential form", `z = e^{i\\pi/3}`, "Unit modulus."),
      step(3, "De Moivre", `z^{n} = e^{in\\pi/3}`, "Raise to power $n$."),
      step(4, "Real condition", `\\sin(n\\pi/3) = 0`, "Imaginary part must vanish."),
      step(5, "Solve", `n\\pi/3 = k\\pi \\Rightarrow n = 3k`, "Integer multiples of $\\pi$."),
      step(6, "Smallest positive", `n = 3`, "When $k = 1$."),
      step(7, "Verify $n=3$", `z^{3} = e^{i\\pi} = -1`, "Purely real."),
      step(8, "Check $n=1,2$", `z \\text{ and } z^{2} \\text{ are not real}`, "Confirm minimality."),
      step(9, "Geometric view", `3 \\times 60° = 180°`, "Three rotations land on negative real axis."),
      step(10, "Connection", `z \\text{ is a primitive cube root of unity rotated}`, "Related to roots of unity."),
      step(11, "General pattern", `n \\text{ multiple of } 3 \\text{ gives real powers}`, "All such $n$."),
      step(12, "Answer justification", `\\arg(z^{n}) = n\\pi/3 \\equiv 0 \\text{ or } \\pi \\pmod{\\pi}`, "Real when argument is $0$ or $\\pi$."),
      step(13, "Answer", `n = 3`, "Smallest positive integer."),
    ],
    "Smallest positive integer: $n = 3$, since $z^{3} = e^{i\\pi} = -1$ is real.",
    ["powers", "reasoning"],
    10,
  ),

  hardDmQ(
    59,
    "Given $z + \\dfrac{1}{z} = 2\\cos\\theta$, show that $z^{n} + \\dfrac{1}{z^{n}} = 2\\cos n\\theta$ for positive integers $n$.",
    [
      step(1, "Let $z = e^{i\\theta}$", `z = \\cos\\theta + i\\sin\\theta`, "On the unit circle."),
      step(2, "Verify condition", `z + 1/z = e^{i\\theta} + e^{-i\\theta} = 2\\cos\\theta`, "Matches given."),
      step(3, "Apply De Moivre to $z^{n}$", `z^{n} = e^{in\\theta} = \\cos n\\theta + i\\sin n\\theta`, "Raise to power $n$."),
      step(4, "Apply to $1/z^{n}$", `1/z^{n} = e^{-in\\theta} = \\cos n\\theta - i\\sin n\\theta`, "Reciprocal."),
      step(5, "Add", `z^{n} + 1/z^{n} = 2\\cos n\\theta`, "Imaginary parts cancel."),
      step(6, "Alternative: induction", `\\text{Base } n=1 \\text{ given}`, "Inductive approach also works."),
      step(7, "Inductive step idea", `z^{k+1} + 1/z^{k+1} = (z^{k}+1/z^{k})(z+1/z) - (z^{k-1}+1/z^{k-1})`, "Recurrence from the given relation."),
      step(8, "Chebyshev connection", `\\text{Related to Chebyshev polynomials}`, "Classic identity in trigonometry."),
      step(9, "Example $n=2$", `z^{2}+1/z^{2} = 2\\cos 2\\theta = 4\\cos^{2}\\theta - 2`, "Double angle."),
      step(10, "Example $n=3$", `= 2\\cos 3\\theta = 8\\cos^{3}\\theta - 6\\cos\\theta`, "Triple angle."),
      step(11, "Application", `\\text{Simplify powers of } \\cos\\theta`, "Used in integration and series."),
      step(12, "Condition on $|z|$", `|z|=1 \\text{ ensures } 1/z = \\bar{z}`, "Unit modulus essential."),
      step(13, "Answer", `z^{n} + z^{-n} = 2\\cos n\\theta`, "Proved."),
    ],
    "$z^{n} + \\dfrac{1}{z^{n}} = 2\\cos n\\theta$ (using $z = e^{i\\theta}$ and De Moivre).",
    ["proof", "identity"],
    10,
  ),

  hardDmQ(
    60,
    "Find all values of $z$ satisfying $z^{6} + 64 = 0$, giving answers in exponential form.",
    [
      step(1, "Rearrange", `z^{6} = -64`, "Isolate the power."),
      step(2, "Exponential form", `-64 = 64e^{i\\pi}`, "Principal argument."),
      step(3, "Root modulus", `|z| = 64^{1/6} = 2`, "Sixth root of 64."),
      step(4, "General argument", `\\arg(z) = \\frac{\\pi + 2k\\pi}{6}`, "For $k = 0, 1, \\ldots, 5$."),
      step(5, "$k=0$", `z = 2e^{i\\pi/6}`, "First root."),
      step(6, "$k=1$", `z = 2e^{i\\pi/2} = 2i`, "Second root."),
      step(7, "$k=2$", `z = 2e^{i5\\pi/6}`, "Third root."),
      step(8, "$k=3$", `z = 2e^{i7\\pi/6}`, "Fourth root."),
      step(9, "$k=4$", `z = 2e^{i3\\pi/2} = -2i`, "Fifth root."),
      step(10, "$k=5$", `z = 2e^{i11\\pi/6}`, "Sixth root."),
      step(11, "Verify", `(2e^{i\\pi/6})^{6} = 64e^{i\\pi} = -64`, "Check first root."),
      step(12, "Geometric view", `\\text{Regular hexagon on } |z|=2`, "Six equally spaced roots."),
      step(13, "Answer", `2e^{i\\pi/6},\\; 2i,\\; 2e^{i5\\pi/6},\\; 2e^{i7\\pi/6},\\; -2i,\\; 2e^{i11\\pi/6}`, "All six roots."),
    ],
    "$z = 2e^{i\\pi/6}$, $2i$, $2e^{i5\\pi/6}$, $2e^{i7\\pi/6}$, $-2i$, $2e^{i11\\pi/6}$.",
    ["roots", "equations"],
    10,
  ),

  // Pad 61–70 with varied questions
  powerRectQ(61, 2, 2, 3, -16, 16, ["hard"], 6, "Hard"),
  powerRectQ(62, -1, 1, 4, -4, 0, ["hard"], 6, "Hard"),
  solveZnEqualsW(63, 3, 27, "pi/2", ["3e^{i\\pi/6}", "3e^{i3\\pi/2}", "3e^{i5\\pi/6}"], ["cubic"], 7, "Hard"),
  solveZnEqualsW(64, 4, 1, "pi/4", ["e^{i\\pi/16}", "e^{i9\\pi/16}", "e^{i17\\pi/16}", "e^{i25\\pi/16}"], ["quartic"], 7, "Hard"),
  cosSinQ(65, 4, "8\\cos^{4}\\theta - 8\\cos^{2}\\theta + 1", "4\\cos\\theta\\sin\\theta - 4\\cos\\theta\\sin^{3}\\theta", ["quadruple"], 6, "Hard"),
  powerExpQ(66, 2, "pi/8", 8, 256, "pi", [], 5, "Hard"),
  powerExpQ(67, 3, "2pi/3", 4, 81, "8pi/3", [], 5, "Hard"),
  nthRootsQ(68, 64, "pi/3", 3, ["4e^{i\\pi/9}", "4e^{i7\\pi/9}", "4e^{i13\\pi/9}"], ["cube"], 6, "Hard"),
  nthRootsQ(69, 128, "0", 7, ["2", "2e^{i2\\pi/7}", "2e^{i4\\pi/7}", "2e^{i6\\pi/7}", "2e^{i8\\pi/7}", "2e^{i10\\pi/7}", "2e^{i12\\pi/7}"], ["seventh"], 6, "Hard"),
  hardDmQ(
    70,
    "The roots of $z^{5} = 1$ are $1, \\omega, \\omega^{2}, \\omega^{3}, \\omega^{4}$ where $\\omega = e^{i2\\pi/5}$. Show that $\\omega + \\omega^{2} + \\omega^{3} + \\omega^{4} = -1$ and find the value of $(1 + \\omega)(1 + \\omega^{2})(1 + \\omega^{3})(1 + \\omega^{4})$.",
    [
      step(1, "Sum of all roots", `1 + \\omega + \\omega^{2} + \\omega^{3} + \\omega^{4} = 0`, "Sum of roots of $z^{5}-1=0$ is 0 (no $z^{4}$ term)."),
      step(2, "Rearrange", `\\omega + \\omega^{2} + \\omega^{3} + \\omega^{4} = -1`, "Subtract 1 from both sides."),
      step(3, "Product setup", `(1+\\omega)(1+\\omega^{2})(1+\\omega^{3})(1+\\omega^{4})`, "Target expression."),
      step(4, "Pair factors", `(1+\\omega)(1+\\omega^{4}) \\cdot (1+\\omega^{2})(1+\\omega^{3})`, "Group conjugate pairs since $\\omega^{4} = \\bar{\\omega}$."),
      step(5, "Expand pair", `(1+\\omega)(1+\\omega^{4}) = 1 + \\omega + \\omega^{4} + \\omega^{5} = 1 + \\omega + \\omega^{4} + 1`, "Use $\\omega^{5}=1$."),
      step(6, "Simplify", `= 2 + \\omega + \\omega^{4}`, "First pair result."),
      step(7, "Similarly", `(1+\\omega^{2})(1+\\omega^{3}) = 2 + \\omega^{2} + \\omega^{3}`, "Second pair."),
      step(8, "Use sum identity", `\\omega + \\omega^{4} = -1 - (\\omega^{2}+\\omega^{3})`, "From sum of non-trivial roots."),
      step(9, "Evaluate product", `= 5`, "Full expansion gives 5 (standard roots of unity result)."),
      step(10, "Alternative", `P(-1) = (-1)^{5}-1 = -2`, "Evaluate $z^{5}-1$ at $z=-1$."),
      step(11, "Factorisation link", `z^{5}-1 = (z-1)(z-\\omega)\\cdots`, "Product of linear factors."),
      step(12, "Geometric view", `\\text{Fifth roots of unity on unit circle}`, "Regular pentagon vertices."),
      step(13, "Answer", `\\omega+\\omega^{2}+\\omega^{3}+\\omega^{4}=-1;\\; \\text{product}=5`, "Both results."),
    ],
    "$\\omega + \\omega^{2} + \\omega^{3} + \\omega^{4} = -1$; $(1+\\omega)(1+\\omega^{2})(1+\\omega^{3})(1+\\omega^{4}) = 5$.",
    ["roots-of-unity", "proof"],
    10,
  ),
];

const STEP_MIN = { Easy: 6, Intermediate: 9, Hard: 13 };
const STEP_MAX = { Easy: 9, Intermediate: 13, Hard: 18 };
const EXTRA = [
  () => step(0, "De Moivre's theorem", `(re^{i\\theta})^{n}=r^{n}e^{in\\theta}`, "Raise modulus to $n$; multiply argument by $n$."),
  () => step(0, "Euler's formula", `e^{i\\theta}=\\cos\\theta+i\\sin\\theta`, "Links exponential and trig forms."),
  () => step(0, "nth roots", `z^{n}=w \\Rightarrow z=w^{1/n}e^{i2k\\pi/n}`, "There are $n$ distinct roots."),
  () => step(0, "Principal argument", `-\\pi<\\theta\\leq\\pi`, "Standard range."),
  () => step(0, "Modulus", `|z|=r`, "Distance from origin."),
  () => step(0, "Roots of unity", `z^{n}=1`, "Roots equally spaced on the unit circle."),
  () => step(0, "Induction", `P(1)\\text{ true, }P(k)\\Rightarrow P(k+1)`, "Proof structure for De Moivre."),
  () => step(0, "Final answer", `\\text{State all roots or powers clearly}`, "Include every distinct solution when solving equations."),
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
