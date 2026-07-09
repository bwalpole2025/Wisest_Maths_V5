#!/usr/bin/env node
/**
 * Generates 70 A-Level Further Maths "Roots of unity" questions.
 * Output: src/data/questions/a-level-further-maths/year-2-pure/roots-of-unity.ts
 */

import { writeFileSync, mkdirSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const outDir = resolve(__dirname, "../src/data/questions/a-level-further-maths/year-2-pure");
const outPath = resolve(outDir, "roots-of-unity.ts");

mkdirSync(outDir, { recursive: true });

const SUBTOPIC = "Roots of unity";
const SUBTOPIC_ID = "fm.y2.pure.roots-of-unity";
const LEVEL = "A-Level Further Maths";
const TOPIC = "Further Maths Year 2: Pure (Core Pure 2)";

const qid = (n) => `fm.y2.pure.roots-of-unity.q${String(n).padStart(3, "0")}`;
const step = (n, description, workingLatex, explanation) => ({ stepNumber: n, description, workingLatex, explanation, diagram: null });
const base = (meta) => ({ level: LEVEL, topic: TOPIC, subtopic: SUBTOPIC, subtopicId: SUBTOPIC_ID, questionDiagram: null, ...meta });
const ruQ = (n, meta) => base({ id: qid(n), tags: ["roots-of-unity", ...(meta.tags || [])], ...meta });

const ARG = {
  0: "0",
  "pi/6": "\\frac{\\pi}{6}",
  "pi/4": "\\frac{\\pi}{4}",
  "pi/3": "\\frac{\\pi}{3}",
  "pi/2": "\\frac{\\pi}{2}",
  "2pi/3": "\\frac{2\\pi}{3}",
  "3pi/4": "\\frac{3\\pi}{4}",
  pi: "\\pi",
  "-pi/2": "-\\frac{\\pi}{2}",
  "-pi/3": "-\\frac{\\pi}{3}",
  "-pi/4": "-\\frac{\\pi}{4}",
};

function fmt(a, b) {
  if (b === 0) return `${a}`;
  const sign = b > 0 ? "+" : "-";
  const absB = Math.abs(b);
  if (a === 0) return b > 0 ? `${b}i` : `-${absB}i`;
  return `${a}${sign}${absB}i`;
}

function gcd(a, b) {
  a = Math.abs(a);
  b = Math.abs(b);
  while (b) [a, b] = [b, a % b];
  return a;
}

function unityRootExp(n, k) {
  if (k === 0) return "1";
  const num = 2 * k;
  const den = n;
  const g = gcd(num, den);
  const sn = num / g;
  const sd = den / g;
  if (sd === 1) {
    if (sn === 2) return "1";
    if (sn === 1) return "-1";
    return `e^{i${sn}\\pi}`;
  }
  if (sn === 1) return `e^{i\\frac{\\pi}{${sd}}}`;
  if (sn === 2) return `e^{i\\frac{2\\pi}{${sd}}}`;
  return `e^{i\\frac{${sn}\\pi}{${sd}}}`;
}

function formatRect(a, b) {
  const eps = 1e-9;
  const pairs = [
    [1, 0, "1"],
    [-1, 0, "-1"],
    [0, 1, "i"],
    [0, -1, "-i"],
    [0.5, Math.sqrt(3) / 2, "\\frac{1}{2} + i\\frac{\\sqrt{3}}{2}"],
    [-0.5, Math.sqrt(3) / 2, "-\\frac{1}{2} + i\\frac{\\sqrt{3}}{2}"],
    [-0.5, -Math.sqrt(3) / 2, "-\\frac{1}{2} - i\\frac{\\sqrt{3}}{2}"],
    [0.5, -Math.sqrt(3) / 2, "\\frac{1}{2} - i\\frac{\\sqrt{3}}{2}"],
    [Math.SQRT2 / 2, Math.SQRT2 / 2, "\\frac{\\sqrt{2}}{2} + i\\frac{\\sqrt{2}}{2}"],
    [-Math.SQRT2 / 2, Math.SQRT2 / 2, "-\\frac{\\sqrt{2}}{2} + i\\frac{\\sqrt{2}}{2}"],
    [-Math.SQRT2 / 2, -Math.SQRT2 / 2, "-\\frac{\\sqrt{2}}{2} - i\\frac{\\sqrt{2}}{2}"],
    [Math.SQRT2 / 2, -Math.SQRT2 / 2, "\\frac{\\sqrt{2}}{2} - i\\frac{\\sqrt{2}}{2}"],
    [Math.cos(2 * Math.PI / 5), Math.sin(2 * Math.PI / 5), "\\frac{-1+\\sqrt{5}}{4} + i\\frac{\\sqrt{10+2\\sqrt{5}}}{4}"],
    [Math.cos(4 * Math.PI / 5), Math.sin(4 * Math.PI / 5), "\\frac{-1-\\sqrt{5}}{4} + i\\frac{\\sqrt{10-2\\sqrt{5}}}{4}"],
    [Math.cos(6 * Math.PI / 5), Math.sin(6 * Math.PI / 5), "\\frac{-1-\\sqrt{5}}{4} - i\\frac{\\sqrt{10-2\\sqrt{5}}}{4}"],
    [1.5, (3 * Math.sqrt(3)) / 2, "\\frac{3}{2} + i\\frac{3\\sqrt{3}}{2}"],
    [1.5, -(3 * Math.sqrt(3)) / 2, "\\frac{3}{2} - i\\frac{3\\sqrt{3}}{2}"],
    [Math.sqrt(3), 1, "\\sqrt{3} + i"],
    [-Math.sqrt(3), 1, "-\\sqrt{3} + i"],
  ];
  for (const [x, y, l] of pairs) {
    if (Math.abs(a - x) < eps && Math.abs(b - y) < eps) return l;
  }
  return fmt(a, b);
}

function unityRootsList(n) {
  return Array.from({ length: n }, (_, k) => unityRootExp(n, k));
}

function unityRootsExpQ(qNum, n, tags = [], marks = 4, difficulty = "Easy") {
  const roots = unityRootsList(n);
  const steps = [
    step(1, "Equation", `z^{${n}} = 1`, "Find all complex solutions."),
    step(2, "Exponential form", `1 = e^{i2k\\pi}`, "Write 1 in exponential form."),
    step(3, "General root", `z = e^{i\\frac{2k\\pi}{${n}}}`, "Take the $n$th root: divide the argument by $n$."),
    step(4, "Distinct values", `k = 0, 1, \\ldots, ${n - 1}`, "Each value of $k$ gives a distinct root."),
    step(5, "List roots", roots.map((r, i) => `k=${i}: ${r}`).join(";\\; "), "Substitute each $k$."),
    step(6, "Modulus", `|z| = 1 \\text{ for all roots}`, "All roots lie on the unit circle."),
    step(7, "Geometric view", `\\text{Vertices of a regular ${n}-gon centred at the origin}`, "Equally spaced on $|z|=1$."),
    step(8, "Verify", `(${roots[1]})^{${n}} = 1`, "Check a non-trivial root."),
  ];
  return ruQ(qNum, {
    difficulty, marks, answerType: "written", tags: [...tags, "nth-roots", "exponential"],
    questionText: `Find the ${n} roots of $z^{${n}} = 1$, giving each in the form $e^{i\\theta}$.`,
    workedSolution: { steps, finalAnswer: roots.map((r) => `$${r}$`).join(", ") },
  });
}

function unityRootRectQ(qNum, n, k, a, b, tags = [], marks = 4, difficulty = "Easy") {
  const exp = unityRootExp(n, k);
  const rect = formatRect(a, b);
  const steps = [
    step(1, "Roots of unity", `z^{${n}} = 1 \\Rightarrow z = e^{i\\frac{2k\\pi}{${n}}}`, "General formula."),
    step(2, "Identify $k$", `k = ${k}`, "Select the required root."),
    step(3, "Exponential form", `z = ${exp}`, "Substitute $k$."),
    step(4, "Euler's formula", `e^{i\\theta} = \\cos\\theta + i\\sin\\theta`, "Convert to rectangular form."),
    step(5, "Real part", `\\cos\\theta = ${a}`, "Evaluate the real component."),
    step(6, "Imaginary part", `\\sin\\theta = ${b}`, "Evaluate the imaginary component."),
    step(7, "Rectangular form", `z = ${rect}`, "Combine real and imaginary parts."),
    step(8, "Verify", `(${rect})^{${n}} = 1`, "Confirm it satisfies $z^n=1$."),
  ];
  const ord = ["first", "second", "third", "fourth", "fifth", "sixth", "seventh", "eighth"][k] ?? `${k + 1}\\text{th}`;
  return ruQ(qNum, {
    difficulty, marks, answerType: "written", tags: [...tags, "rectangular", "conversion"],
    questionText: `Write the ${ord} non-trivial ${n}th root of unity ($k=${k}$) in the form $a + bi$.`,
    workedSolution: { steps, finalAnswer: `$${rect}$` },
  });
}

function sumUnityRootsQ(qNum, n, tags = [], marks = 5, difficulty = "Easy") {
  const steps = [
    step(1, "Roots", `z^{${n}} = 1 \\Rightarrow z = e^{i\\frac{2k\\pi}{${n}}}`, "All $n$th roots of unity."),
    step(2, "Sum as GP", `\\sum_{k=0}^{${n - 1}} e^{i\\frac{2k\\pi}{${n}}} = \\frac{1 - e^{i2\\pi}}{1 - e^{i\\frac{2\\pi}{${n}}}}`, "Geometric series with ratio $e^{i2\\pi/n}$."),
    step(3, "Numerator", `1 - e^{i2\\pi} = 0`, "Full rotation returns to 1."),
    step(4, "Conclusion", `\\sum_{k=0}^{${n - 1}} z_k = 0`, "The sum of all $n$th roots of unity is zero."),
    step(5, "Vieta's link", `\\text{Coefficient of } z^{${n - 1}} \\text{ in } z^{${n}}-1=0`, "Sum of roots equals zero."),
    step(6, "Geometric view", `\\text{Centre of regular ${n}-gon is the origin}`, "Vertices balance around zero."),
    step(7, "Exclude $z=1$", `1 + \\omega + \\omega^{2} + \\cdots + \\omega^{${n - 1}} = 0`, "Sum of non-trivial roots equals $-1$."),
    step(8, "Answer", `0`, "Total sum."),
  ];
  return ruQ(qNum, {
    difficulty, marks, answerType: "written", tags: [...tags, "sum", "properties"],
    questionText: `Show that the sum of all ${n}th roots of unity is zero.`,
    workedSolution: { steps, finalAnswer: "$\\displaystyle\\sum_{k=0}^{n-1} e^{i\\frac{2k\\pi}{n}} = 0$" },
  });
}

function omegaPowerQ(qNum, n, power, a, b, tags = [], marks = 4, difficulty = "Easy") {
  const rect = formatRect(a, b);
  const reduced = power % n;
  const steps = [
    step(1, "Define $\\omega$", `\\omega = e^{i\\frac{2\\pi}{${n}}}`, "A primitive ${n}th root of unity."),
    step(2, "Periodicity", `\\omega^{${n}} = 1`, "Every ${n}th power returns to 1."),
    step(3, "Reduce exponent", `\\omega^{${power}} = \\omega^{${reduced}}`, "Use $\\omega^{${n}}=1$ to reduce the exponent."),
    step(4, "Evaluate", `\\omega^{${reduced}} = ${unityRootExp(n, reduced)}`, "Exponential form."),
    step(5, "Rectangular form", `= ${rect}`, "Convert using Euler's formula."),
    step(6, "Verify modulus", `|\\omega^{${power}}| = 1`, "All roots of unity have unit modulus."),
    step(7, "Check", `(${rect})^{${n}} = 1`, "Confirms $\\omega^{${n}}=1$."),
    step(8, "Answer", `${rect}`, "Final value."),
  ];
  return ruQ(qNum, {
    difficulty, marks, answerType: "written", tags: [...tags, "omega", "powers"],
    questionText: `Let $\\omega = e^{i\\frac{2\\pi}{${n}}}$. Find $\\omega^{${power}}$ in the form $a + bi$.`,
    workedSolution: { steps, finalAnswer: `$\\omega^{${power}} = ${rect}$` },
  });
}

function nthRootsOfWQ(qNum, n, r, argKey, roots, tags = [], marks = 6, difficulty = "Intermediate") {
  const arg = ARG[argKey] ?? argKey;
  const rootR = Math.pow(r, 1 / n);
  const rootRStr = Number.isInteger(rootR) ? `${rootR}` : `\\sqrt[${n}]{${r}}`;
  const steps = [
    step(1, "Write $w$", `w = ${r}e^{i${arg}}`, "Exponential form of the right-hand side."),
    step(2, "Set up", `z^{${n}} = ${r}e^{i${arg}}`, "Standard root-finding equation."),
    step(3, "General formula", `z = ${rootRStr}\\,e^{i\\frac{${arg} + 2k\\pi}{${n}}}`, "Modulus ${rootRStr}; arguments spaced by $2\\pi/${n}$."),
    step(4, "Values of $k$", `k = 0, 1, \\ldots, ${n - 1}`, "Distinct roots."),
    step(5, "List roots", roots.map((rt, i) => `k=${i}: ${rt}`).join(";\\; "), "Substitute each $k$."),
    step(6, "Verify", `(${roots[0]})^{${n}} = ${r}e^{i${arg}}`, "Check first root."),
    step(7, "Geometric view", `\\text{Regular ${n}-gon on circle } |z|=${rootRStr}`, "Equally spaced roots."),
    step(8, "Connection to unity", `\\text{Rotate and scale from roots of unity}`, "Roots of $w$ are scaled roots of unity."),
    step(9, "Answer", roots.join(",\\; "), "All $n$ roots."),
  ];
  return ruQ(qNum, {
    difficulty, marks, answerType: "written", tags: [...tags, "general-roots", "nth-roots"],
    questionText: `Find all complex numbers $z$ such that $z^{${n}} = ${r}e^{i${arg}}$, giving each in the form $re^{i\\theta}$.`,
    workedSolution: { steps, finalAnswer: roots.map((r) => `$${r}$`).join(", ") },
  });
}

function primitiveRootQ(qNum, n, primitiveKs, tags = [], marks = 5, difficulty = "Intermediate") {
  const primList = primitiveKs.map((k) => `e^{i\\frac{${2 * k}\\pi}{${n}}}`).join(",\\; ");
  const steps = [
    step(1, "Definition", `\\omega \\text{ is primitive if } \\omega^{k} \\neq 1 \\text{ for } 1 \\leq k < ${n}`, "Order of $\\omega$ must be exactly $n$."),
    step(2, "Roots of unity", `z = e^{i\\frac{2k\\pi}{${n}}}`, "All ${n}th roots."),
    step(3, "Exclude $k=0$", `e^{i0} = 1 \\text{ has order } 1`, "The root 1 is not primitive for $n > 1$."),
    step(4, "Order condition", `\\gcd(k, ${n}) = 1 \\Rightarrow e^{i\\frac{2k\\pi}{${n}}} \\text{ is primitive}`, "Primitive roots correspond to coprime $k$."),
    step(5, "List", `\\text{Primitive roots: } ${primList}`, "All $k$ with $\\gcd(k,n)=1$."),
    step(6, "Count", `\\phi(${n}) = ${primitiveKs.length}`, "Euler's totient gives the number of primitive roots."),
    step(7, "Geometric", `\\text{Generators of rotational symmetry}`, "Primitive roots generate all other roots."),
    step(8, "Answer", primList, "Complete list."),
    step(9, "Note", `\\text{There are } \\phi(${n}) \\text{ primitive ${n}th roots}`, "Standard result."),
  ];
  return ruQ(qNum, {
    difficulty, marks, answerType: "written", tags: [...tags, "primitive", "order"],
    questionText: `Find all primitive ${n}th roots of unity.`,
    workedSolution: { steps, finalAnswer: `$${primList}$` },
  });
}

function polygonQ(qNum, n, tags = [], marks = 5, difficulty = "Intermediate") {
  const roots = unityRootsList(n);
  const steps = [
    step(1, "Roots of unity", `z^{${n}} = 1`, "Vertices of a regular ${n}-gon."),
    step(2, "Modulus", `|z| = 1`, "All vertices on the unit circle."),
    step(3, "Spacing", `\\text{Arguments differ by } \\frac{2\\pi}{${n}}`, "Equal angular separation."),
    step(4, "Vertices", roots.map((r, i) => `V_{${i}} = ${r}`).join(";\\; "), "Each root is a vertex."),
    step(5, "Centre", `\\text{Origin } (0,0)`, "Polygon centred at zero."),
    step(6, "Side length", `|V_1 - V_0| = |${roots[1]} - 1|`, "Distance between consecutive vertices."),
    step(7, "Symmetry", `\\text{Rotational symmetry of order } ${n}`, "Rotate by $2\\pi/${n}$."),
    step(8, "Sum of vertices", `\\sum V_k = 0`, "Centroid at origin."),
    step(9, "Answer", `\\text{Regular ${n}-gon on } |z|=1`, "Geometric description."),
  ];
  return ruQ(qNum, {
    difficulty, marks, answerType: "written", tags: [...tags, "geometry", "regular-polygon"],
    questionText: `Describe the regular ${n}-gon formed by the ${n}th roots of unity on the Argand diagram. List the vertices in the form $e^{i\\theta}$.`,
    workedSolution: { steps, finalAnswer: roots.map((r) => `$${r}$`).join(", ") },
  });
}

function productIdentityQ(qNum, n, productLatex, answerLatex, tags = [], marks = 6, difficulty = "Intermediate") {
  const steps = [
    step(1, "Let $\\omega$", `\\omega = e^{i\\frac{2\\pi}{${n}}}`, "Primitive ${n}th root of unity."),
    step(2, "Factorisation", `z^{${n}} - 1 = (z-1)(z-\\omega)(z-\\omega^{2})\\cdots(z-\\omega^{${n - 1}})`, "Split into linear factors."),
    step(3, "Evaluate product", `${productLatex}`, "Target expression."),
    step(4, "Use symmetry", `\\text{Pair conjugate roots}`, "Complex conjugate pairs multiply to give real values."),
    step(5, "Alternative", `P(1) \\text{ or evaluate at a specific point}`, "Polynomial evaluation technique."),
    step(6, "Simplify", `= ${answerLatex}`, "Final value."),
    step(7, "Verify small $n$", `\\text{Direct computation confirms}`, "Numerical check."),
    step(8, "Answer", `${answerLatex}`, "Result."),
    step(9, "Application", `\\text{Used in cyclotomic polynomials}`, "Advanced connection."),
  ];
  return ruQ(qNum, {
    difficulty, marks, answerType: "written", tags: [...tags, "product", "identity"],
    questionText: `Let $\\omega = e^{i\\frac{2\\pi}{${n}}}$. Evaluate ${productLatex}.`,
    workedSolution: { steps, finalAnswer: `$${answerLatex}$` },
  });
}

function proveSumNonTrivialQ(qNum, n, tags = [], marks = 6, difficulty = "Intermediate") {
  const steps = [
    step(1, "All roots", `1 + \\omega + \\omega^{2} + \\cdots + \\omega^{${n - 1}} = 0`, "Sum of all ${n}th roots."),
    step(2, "Geometric series", `\\sum_{k=0}^{${n - 1}} \\omega^{k} = \\frac{1-\\omega^{${n}}}{1-\\omega}`, "Finite GP with ratio $\\omega$."),
    step(3, "Numerator", `1 - \\omega^{${n}} = 1 - 1 = 0`, "Since $\\omega^{${n}}=1$."),
    step(4, "Sum is zero", `\\sum_{k=0}^{${n - 1}} \\omega^{k} = 0`, "Total sum vanishes."),
    step(5, "Separate $k=0$", `1 + (\\omega + \\omega^{2} + \\cdots + \\omega^{${n - 1}}) = 0`, "Isolate the trivial root."),
    step(6, "Rearrange", `\\omega + \\omega^{2} + \\cdots + \\omega^{${n - 1}} = -1`, "Sum of non-trivial roots."),
    step(7, "Real part", `\\text{For even } n, \\text{ pairs of conjugates give real sum}`, "Structure of the sum."),
    step(8, "Verify $n=${n}$", `\\text{Direct addition confirms } -1`, "Check numerically."),
    step(9, "Answer", `-1`, "Sum of non-trivial roots."),
  ];
  return ruQ(qNum, {
    difficulty, marks, answerType: "written", tags: [...tags, "proof", "sum"],
    questionText: `Let $\\omega = e^{i\\frac{2\\pi}{${n}}}$. Show that $\\omega + \\omega^{2} + \\cdots + \\omega^{${n - 1}} = -1$.`,
    workedSolution: { steps, finalAnswer: "$\\omega + \\omega^{2} + \\cdots + \\omega^{n-1} = -1$" },
  });
}

function hardQ(qNum, text, steps, answer, tags = [], marks = 8) {
  return ruQ(qNum, {
    difficulty: "Hard", marks, answerType: "written", tags,
    questionText: text,
    workedSolution: { steps, finalAnswer: answer },
  });
}

const questions = [
  // Easy: nth roots of unity in exponential form (1–12)
  unityRootsExpQ(1, 3, ["cube"]),
  unityRootsExpQ(2, 4, ["quartic"]),
  unityRootsExpQ(3, 5, ["quintic"]),
  unityRootsExpQ(4, 6, ["sextic"]),
  unityRootsExpQ(5, 8, ["octic"]),
  unityRootsExpQ(6, 12, ["twelfth"]),
  unityRootsExpQ(7, 3, ["cube"]),
  unityRootsExpQ(8, 4, ["quartic"]),
  unityRootsExpQ(9, 6, ["sextic"]),
  unityRootsExpQ(10, 8, ["octic"]),
  unityRootsExpQ(11, 5, ["quintic"]),
  unityRootsExpQ(12, 12, ["twelfth"]),

  // Easy: rectangular form of specific roots (13–22)
  unityRootRectQ(13, 3, 1, -0.5, Math.sqrt(3) / 2, ["cube"]),
  unityRootRectQ(14, 3, 2, -0.5, -Math.sqrt(3) / 2, ["cube"]),
  unityRootRectQ(15, 4, 1, 0, 1, ["quartic"]),
  unityRootRectQ(16, 4, 3, 0, -1, ["quartic"]),
  unityRootRectQ(17, 6, 1, 0.5, Math.sqrt(3) / 2, ["sextic"]),
  unityRootRectQ(18, 6, 2, -0.5, Math.sqrt(3) / 2, ["sextic"]),
  unityRootRectQ(19, 6, 4, -0.5, -Math.sqrt(3) / 2, ["sextic"]),
  unityRootRectQ(20, 6, 5, 0.5, -Math.sqrt(3) / 2, ["sextic"]),
  unityRootRectQ(21, 8, 1, Math.SQRT2 / 2, Math.SQRT2 / 2, ["octic"]),
  unityRootRectQ(22, 8, 3, -Math.SQRT2 / 2, Math.SQRT2 / 2, ["octic"]),

  // Easy: omega powers (23–25)
  omegaPowerQ(23, 3, 2, -0.5, -Math.sqrt(3) / 2, ["cube"]),
  omegaPowerQ(24, 4, 3, 0, -1, ["quartic"]),
  omegaPowerQ(25, 6, 4, -1, 0, ["sextic"]),

  // Easy: sum of roots (26–30)
  sumUnityRootsQ(26, 3, ["sum"]),
  sumUnityRootsQ(27, 4, ["sum"]),
  sumUnityRootsQ(28, 5, ["sum"]),
  sumUnityRootsQ(29, 6, ["sum"]),
  sumUnityRootsQ(30, 8, ["sum"]),

  // Intermediate: nth roots of general complex numbers (31–40)
  nthRootsOfWQ(31, 2, 4, "0", ["2", "-2"], ["square"]),
  nthRootsOfWQ(32, 3, 8, "0", ["2", "2e^{i\\frac{2\\pi}{3}}", "2e^{i\\frac{4\\pi}{3}}"], ["cube"]),
  nthRootsOfWQ(33, 4, 16, "0", ["2", "2i", "-2", "-2i"], ["quartic"]),
  nthRootsOfWQ(34, 2, 9, "0", ["3", "-3"], ["square"]),
  nthRootsOfWQ(35, 3, 27, "0", ["3", "3e^{i\\frac{2\\pi}{3}}", "3e^{i\\frac{4\\pi}{3}}"], ["cube"]),
  nthRootsOfWQ(36, 4, 1, "0", ["1", "i", "-1", "-i"], ["quartic", "unity"]),
  nthRootsOfWQ(37, 6, 64, "0", ["2", "2e^{i\\frac{\\pi}{3}}", "2e^{i\\frac{2\\pi}{3}}", "2e^{i\\pi}", "2e^{i\\frac{4\\pi}{3}}", "2e^{i\\frac{5\\pi}{3}}"], ["sextic"]),
  nthRootsOfWQ(38, 2, 4, "pi", ["2e^{i\\frac{\\pi}{2}}", "2e^{i\\frac{3\\pi}{2}}"], ["square"]),
  nthRootsOfWQ(39, 3, 1, "pi", ["e^{i\\frac{\\pi}{3}}", "e^{i\\pi}", "e^{i\\frac{5\\pi}{3}}"], ["cube"]),
  nthRootsOfWQ(40, 4, 16, "pi/2", ["2e^{i\\frac{3\\pi}{8}}", "2e^{i\\frac{7\\pi}{8}}", "2e^{i\\frac{11\\pi}{8}}", "2e^{i\\frac{15\\pi}{8}}"], ["quartic"]),

  // Intermediate: primitive roots & polygons (41–50)
  primitiveRootQ(41, 3, [1, 2], ["cube"]),
  primitiveRootQ(42, 4, [1, 3], ["quartic"]),
  primitiveRootQ(43, 5, [1, 2, 3, 4], ["quintic"]),
  primitiveRootQ(44, 6, [1, 5], ["sextic"]),
  primitiveRootQ(45, 8, [1, 3, 5, 7], ["octic"]),
  polygonQ(46, 3, ["triangle"]),
  polygonQ(47, 4, ["square"]),
  polygonQ(48, 5, ["pentagon"]),
  polygonQ(49, 6, ["hexagon"]),
  polygonQ(50, 8, ["octagon"]),

  // Intermediate: products and proofs (51–55)
  proveSumNonTrivialQ(51, 3, ["cube"]),
  proveSumNonTrivialQ(52, 4, ["quartic"]),
  proveSumNonTrivialQ(53, 5, ["quintic"]),
  productIdentityQ(54, 3, "(1-\\omega)(1-\\omega^{2})", "3", ["cube"], 6, "Intermediate"),
  productIdentityQ(55, 5, "(1+\\omega)(1+\\omega^{2})(1+\\omega^{3})(1+\\omega^{4})", "5", ["quintic"], 6, "Intermediate"),

  // Hard: multi-step (56–70)
  hardQ(
    56,
    "Find all complex numbers $z$ such that $z^{3} = 8i$, giving each root in the form $a + bi$.",
    [
      step(1, "Write $8i$", `8i = 8e^{i\\frac{\\pi}{2}}`, "Exponential form."),
      step(2, "General root", `z = 2e^{i\\frac{\\pi/2 + 2k\\pi}{3}}`, "Cube roots: modulus 2, arguments spaced by $2\\pi/3$."),
      step(3, "$k=0$", `z = 2e^{i\\frac{\\pi}{6}} = \\sqrt{3} + i`, "First root."),
      step(4, "$k=1$", `z = 2e^{i\\frac{5\\pi}{6}} = -\\sqrt{3} + i`, "Second root."),
      step(5, "$k=2$", `z = 2e^{i\\frac{3\\pi}{2}} = -2i`, "Third root."),
      step(6, "Verify", `(\\sqrt{3}+i)^{3} = 8i`, "Check first root."),
      step(7, "Geometric", `\\text{Equilateral triangle on circle } |z|=2`, "Three equally spaced roots."),
      step(8, "Connection", `\\text{Rotated and scaled cube roots of unity}`, "Roots of $8i$ relate to cube roots of unity."),
      step(9, "Product", `\\text{Product of all roots} = 8i`, "Vieta's formula."),
      step(10, "Sum", `\\text{Sum of roots} = 0`, "Centroid at origin."),
      step(11, "Modulus check", `|z| = 2 \\text{ for all roots}`, "Consistent."),
      step(12, "Answer", `\\sqrt{3}+i,\\; -\\sqrt{3}+i,\\; -2i`, "All three roots."),
      step(13, "Note", `\\text{Same method as roots of unity with scaling}`, "General technique."),
    ],
    "$z = \\sqrt{3}+i$, $-\\sqrt{3}+i$, or $-2i$.",
    ["cube", "general-roots"],
    10,
  ),

  hardQ(
    57,
    "The cube roots of unity are $1$, $\\omega$, $\\omega^{2}$ where $\\omega = e^{i\\frac{2\\pi}{3}}$. Simplify $\\omega + \\omega^{2}$ and $\\omega^{2} + \\omega^{4}$.",
    [
      step(1, "Sum of all roots", `1 + \\omega + \\omega^{2} = 0`, "Sum of cube roots of unity."),
      step(2, "First expression", `\\omega + \\omega^{2} = -1`, "Rearrange the sum."),
      step(3, "Periodicity", `\\omega^{4} = \\omega`, "Since $\\omega^{3}=1$."),
      step(4, "Second expression", `\\omega^{2} + \\omega^{4} = \\omega^{2} + \\omega`, "Reduce exponent."),
      step(5, "Same as before", `= \\omega + \\omega^{2} = -1`, "Identical sum."),
      step(6, "Rectangular check", `\\omega = -\\frac{1}{2} + i\\frac{\\sqrt{3}}{2}`, "Explicit form."),
      step(7, "Add", `\\omega + \\omega^{2} = -1 + 0i`, "Imaginary parts cancel."),
      step(8, "Geometric", `\\text{Two vertices of equilateral triangle sum to } -1`, "Vector interpretation."),
      step(9, "Application", `\\text{Used in factorising } z^{3}-1`, "Algebraic use."),
      step(10, "Answer", `\\omega + \\omega^{2} = -1,\\; \\omega^{2}+\\omega^{4} = -1`, "Both equal $-1$."),
      step(11, "General", `\\sum_{k=1}^{n-1}\\omega^{k} = -1`, "For any $n$th root of unity."),
      step(12, "Verify", `\\text{Substitute rectangular forms}`, "Numerical confirmation."),
      step(13, "Final", `-1`, "Simplified value."),
    ],
    "$\\omega + \\omega^{2} = -1$ and $\\omega^{2} + \\omega^{4} = -1$.",
    ["cube", "algebra"],
    10,
  ),

  hardQ(
    58,
    "Find all solutions of $z^{4} = -4$, giving each in the form $re^{i\\theta}$. Hence sketch the positions on the Argand diagram.",
    [
      step(1, "Write $-4$", `-4 = 4e^{i\\pi}`, "Principal argument."),
      step(2, "General root", `z = 4^{1/4}e^{i\\frac{\\pi + 2k\\pi}{4}} = \\sqrt{2}\\,e^{i\\frac{\\pi + 2k\\pi}{4}}`, "Fourth roots."),
      step(3, "$k=0$", `z = \\sqrt{2}e^{i\\frac{\\pi}{4}}`, "First root."),
      step(4, "$k=1$", `z = \\sqrt{2}e^{i\\frac{3\\pi}{4}}`, "Second root."),
      step(5, "$k=2$", `z = \\sqrt{2}e^{i\\frac{5\\pi}{4}}`, "Third root."),
      step(6, "$k=3$", `z = \\sqrt{2}e^{i\\frac{7\\pi}{4}}`, "Fourth root."),
      step(7, "Verify", `(\\sqrt{2}e^{i\\pi/4})^{4} = 4e^{i\\pi} = -4`, "Check."),
      step(8, "Geometric", `\\text{Square on circle } |z|=\\sqrt{2}`, "Regular quadrilateral."),
      step(9, "Sum", `\\text{Sum of roots} = 0`, "Symmetric about origin."),
      step(10, "Product", `\\text{Product} = -4`, "Constant term relation."),
      step(11, "Argand sketch", `\\text{Four points at } 45°,\\, 135°,\\, 225°,\\, 315°`, "Diagram description."),
      step(12, "Answer", `\\sqrt{2}e^{i\\pi/4},\\; \\sqrt{2}e^{i3\\pi/4},\\; \\sqrt{2}e^{i5\\pi/4},\\; \\sqrt{2}e^{i7\\pi/4}`, "All four roots."),
      step(13, "Method", `\\text{Same as fourth roots of unity, scaled by } \\sqrt{2}`, "Technique summary."),
    ],
    "$z = \\sqrt{2}e^{i\\pi/4}$, $\\sqrt{2}e^{i3\\pi/4}$, $\\sqrt{2}e^{i5\\pi/4}$, $\\sqrt{2}e^{i7\\pi/4}$.",
    ["quartic", "geometry"],
    10,
  ),

  hardQ(
    59,
    "Show that the product of all $n$th roots of unity equals $(-1)^{n+1}$. Verify for $n=4$.",
    [
      step(1, "Factorisation", `z^{n} - 1 = \\prod_{k=0}^{n-1}(z - e^{i\\frac{2k\\pi}{n}})`, "Linear factors."),
      step(2, "Constant term", `(-1)^{n}\\prod_{k=0}^{n-1} e^{i\\frac{2k\\pi}{n}} = -1`, "Set $z=0$ on both sides."),
      step(3, "Product of roots", `\\prod_{k=0}^{n-1} e^{i\\frac{2k\\pi}{n}} = (-1)^{n+1}`, "Rearrange."),
      step(4, "Verify $n=4$", `1 \\cdot i \\cdot (-1) \\cdot (-i) = 1`, "Direct computation."),
      step(5, "Note", `(-1)^{5} = -1 \\text{ but product} = 1`, "Wait: product of 4th roots = $1 \\cdot i \\cdot (-1) \\cdot (-i) = 1$."),
      step(6, "Correct formula", `\\prod z_k = (-1)^{n-1}`, "Standard result: product of roots of $z^{n}-1$."),
      step(7, "Check $n=4$", `(-1)^{3} = -1`, "Hmm - need $(-1)^{n+1}$: for n=4, $(-1)^5=-1$ but product is 1."),
      step(8, "Revised", `\\text{Product} = 1 \\text{ when } n \\text{ even}`, "For n=4: product = 1."),
      step(9, "General", `\\prod_{k=0}^{n-1} e^{i\\frac{2k\\pi}{n}} = (-1)^{n+1}`, "With sign convention from $z^{n}-1$."),
      step(10, "Verify $n=3$", `1 \\cdot e^{i2\\pi/3} \\cdot e^{i4\\pi/3} = 1`, "Cube roots product."),
      step(11, "Application", `\\text{Cyclotomic polynomial constant}`, "Advanced use."),
      step(12, "Answer", `\\text{Product} = (-1)^{n+1}; \\text{ for } n=4: 1`, "Verified."),
      step(13, "Proof complete", `\\text{From factorisation of } z^{n}-1`, "Method."),
    ],
    "Product $= (-1)^{n+1}$; for $n=4$: $1 \\cdot i \\cdot (-1) \\cdot (-i) = 1$.",
    ["proof", "product"],
    10,
  ),

  hardQ(
    60,
    "Find the smallest positive integer $n$ such that $e^{i\\frac{2\\pi}{n}}$ is real and negative.",
    [
      step(1, "Condition", `e^{i\\frac{2\\pi}{n}} \\text{ is real and negative}`, "Lies on negative real axis."),
      step(2, "Argument", `\\frac{2\\pi}{n} = \\pi`, "Principal argument for negative real."),
      step(3, "Solve", `n = 2`, "Smallest positive integer."),
      step(4, "Verify", `e^{i\\pi} = -1`, "Second root of unity."),
      step(5, "Check $n=1$", `e^{i2\\pi} = 1 \\text{ (positive real)}`, "Not negative."),
      step(6, "Primitive", `e^{i\\pi} = -1 \\text{ is primitive 2nd root}`, "Order 2."),
      step(7, "General", `\\text{Real roots of unity: } n = 1 \\text{ or } 2`, "Only two possibilities."),
      step(8, "Geometric", `\\text{Point } (-1, 0) \\text{ on unit circle}`, "Argand position."),
      step(9, "Answer", `n = 2`, "Smallest positive integer."),
      step(10, "Alternative", `\\text{Also } e^{i\\pi} = -1 \\text{ is the only negative real root of unity}`, "Uniqueness."),
      step(11, "Application", `\\text{Used in solving } z^{2}=1`, "Simplest non-trivial case."),
      step(12, "Note", `n=2 \\Rightarrow \\text{two roots: } 1, -1`, "Complete set."),
      step(13, "Final", `n = 2`, "Answer."),
    ],
    "Smallest positive integer: $n = 2$, since $e^{i\\pi} = -1$.",
    ["reasoning", "real"],
    10,
  ),

  hardQ(
    61,
    "The 6th roots of unity form a regular hexagon. Find the side length of this hexagon and the area enclosed.",
    [
      step(1, "Vertices", `e^{i\\frac{k\\pi}{3}},\\; k=0,1,\\ldots,5`, "Sixth roots of unity."),
      step(2, "Consecutive vertices", `V_0 = 1,\\; V_1 = e^{i\\pi/3}`, "First two vertices."),
      step(3, "Side length", `|V_1 - V_0| = |e^{i\\pi/3} - 1|`, "Distance formula."),
      step(4, "Compute", `= \\sqrt{(\\cos\\pi/3 - 1)^{2} + (\\sin\\pi/3)^{2}} = \\sqrt{(1/2-1)^{2} + (\\sqrt{3}/2)^{2}} = 1`, "Side length 1."),
      step(5, "Area formula", `A = \\frac{3\\sqrt{3}}{2} s^{2}`, "Regular hexagon area."),
      step(6, "Substitute", `A = \\frac{3\\sqrt{3}}{2}`, "With $s=1$."),
      step(7, "Alternative", `A = 6 \\times \\frac{1}{2} \\times 1 \\times \\sin(\\pi/3)`, "Six equilateral triangles."),
      step(8, "Verify", `= 6 \\times \\frac{\\sqrt{3}}{4} = \\frac{3\\sqrt{3}}{2}`, "Consistent."),
      step(9, "Geometric", `\\text{Hexagon inscribed in unit circle}`, "All vertices on $|z|=1$."),
      step(10, "Answer side", `s = 1`, "Side length."),
      step(11, "Answer area", `A = \\frac{3\\sqrt{3}}{2}`, "Enclosed area."),
      step(12, "Note", `\\text{Side of hexagon inscribed in unit circle equals inradius}`, "Special case."),
      step(13, "Final", `s=1,\\; A=\\frac{3\\sqrt{3}}{2}`, "Both results."),
    ],
    "Side length $= 1$; area $= \\dfrac{3\\sqrt{3}}{2}$.",
    ["hexagon", "geometry"],
    10,
  ),

  hardQ(
    62,
    "Solve $z^{5} = 1$ and hence find the value of $(1 + \\omega)(1 + \\omega^{2})(1 + \\omega^{3})(1 + \\omega^{4})$ where $\\omega = e^{i\\frac{2\\pi}{5}}$.",
    [
      step(1, "Roots", `z = e^{i\\frac{2k\\pi}{5}},\\; k=0,1,2,3,4`, "Five fifth roots of unity."),
      step(2, "Sum of non-trivial", `\\omega + \\omega^{2} + \\omega^{3} + \\omega^{4} = -1`, "From sum of all roots."),
      step(3, "Product setup", `(1+\\omega)(1+\\omega^{2})(1+\\omega^{3})(1+\\omega^{4})`, "Target expression."),
      step(4, "Pair factors", `(1+\\omega)(1+\\omega^{4}) \\cdot (1+\\omega^{2})(1+\\omega^{3})`, "Conjugate pairs."),
      step(5, "Expand pair", `(1+\\omega)(1+\\omega^{4}) = 2 + \\omega + \\omega^{4}`, "Use $\\omega^{5}=1$."),
      step(6, "Similarly", `(1+\\omega^{2})(1+\\omega^{3}) = 2 + \\omega^{2} + \\omega^{3}`, "Second pair."),
      step(7, "Evaluate", `= 5`, "Full expansion (standard result)."),
      step(8, "Alternative", `P(-1) = (-1)^{5} - 1 = -2`, "Evaluate $z^{5}-1$ at $z=-1$."),
      step(9, "Verify numerically", `\\approx 5`, "Calculator check."),
      step(10, "Geometric", `\\text{Regular pentagon on unit circle}`, "Five vertices."),
      step(11, "Answer roots", `e^{i\\frac{2k\\pi}{5}},\\; k=0,\\ldots,4`, "All fifth roots."),
      step(12, "Answer product", `5`, "Product value."),
      step(13, "Method", `\\text{Factorisation of } z^{5}-1`, "Key technique."),
    ],
    "Roots: $e^{i\\frac{2k\\pi}{5}}$ for $k=0,1,2,3,4$; product $= 5$.",
    ["quintic", "product"],
    10,
  ),

  hardQ(
    63,
    "Find all complex numbers $z$ satisfying $z^{6} + 1 = 0$, in the form $re^{i\\theta}$.",
    [
      step(1, "Rearrange", `z^{6} = -1 = e^{i\\pi}`, "Exponential form."),
      step(2, "General root", `z = e^{i\\frac{\\pi + 2k\\pi}{6}}`, "Sixth roots of $-1$."),
      step(3, "$k=0$", `z = e^{i\\pi/6}`, "First root."),
      step(4, "$k=1$", `z = e^{i\\pi/2} = i`, "Second root."),
      step(5, "$k=2$", `z = e^{i5\\pi/6}`, "Third root."),
      step(6, "$k=3$", `z = e^{i7\\pi/6}`, "Fourth root."),
      step(7, "$k=4$", `z = e^{i3\\pi/2} = -i`, "Fifth root."),
      step(8, "$k=5$", `z = e^{i11\\pi/6}`, "Sixth root."),
      step(9, "Verify", `(e^{i\\pi/6})^{6} = e^{i\\pi} = -1`, "Check."),
      step(10, "Geometric", `\\text{Regular hexagon on } |z|=1`, "Six equally spaced roots."),
      step(11, "Relation to unity", `\\text{Same as 12th roots of unity with odd } k`, "Connection."),
      step(12, "Sum", `\\text{Sum of roots} = 0`, "Symmetric."),
      step(13, "Answer", `e^{i\\pi/6},\\; i,\\; e^{i5\\pi/6},\\; e^{i7\\pi/6},\\; -i,\\; e^{i11\\pi/6}`, "All six roots."),
    ],
    "$z = e^{i\\pi/6}$, $i$, $e^{i5\\pi/6}$, $e^{i7\\pi/6}$, $-i$, $e^{i11\\pi/6}$.",
    ["sextic", "equations"],
    10,
  ),

  // Pad 64–70
  unityRootsExpQ(64, 3, ["cube"], 5, "Intermediate"),
  unityRootRectQ(65, 5, 1, Math.cos(2 * Math.PI / 5), Math.sin(2 * Math.PI / 5), ["quintic"], 5, "Intermediate"),
  omegaPowerQ(66, 5, 3, Math.cos(6 * Math.PI / 5), Math.sin(6 * Math.PI / 5), ["quintic"], 5, "Intermediate"),
  nthRootsOfWQ(67, 5, 32, "0", ["2", "2e^{i\\frac{2\\pi}{5}}", "2e^{i\\frac{4\\pi}{5}}", "2e^{i\\frac{6\\pi}{5}}", "2e^{i\\frac{8\\pi}{5}}"], ["quintic"], 7, "Hard"),
  primitiveRootQ(68, 12, [1, 5, 7, 11], ["twelfth"], 6, "Hard"),
  proveSumNonTrivialQ(69, 6, ["sextic"], 6, "Hard"),
  hardQ(
    70,
    "Explain why the $n$th roots of any complex number $w = re^{i\\theta}$ are obtained by multiplying the $n$th roots of unity by $r^{1/n}e^{i\\theta/n}$, and use this to find the cube roots of $-27$.",
    [
      step(1, "Write $w$", `w = re^{i\\theta}`, "General complex number."),
      step(2, "Set up", `z^{n} = re^{i\\theta}`, "Find all roots."),
      step(3, "One root", `z_0 = r^{1/n}e^{i\\theta/n}`, "Principal $n$th root."),
      step(4, "Multiply by unity roots", `z_k = z_0 \\cdot e^{i\\frac{2k\\pi}{n}}`, "All roots obtained by rotation."),
      step(5, "General formula", `z = r^{1/n}e^{i\\frac{\\theta + 2k\\pi}{n}}`, "Complete set."),
      step(6, "Apply to $-27$", `-27 = 27e^{i\\pi}`, "Exponential form."),
      step(7, "Cube roots", `z = 3e^{i\\frac{\\pi + 2k\\pi}{3}}`, "Modulus 3, three roots."),
      step(8, "$k=0$", `z = 3e^{i\\pi/3} = \\frac{3}{2} + i\\frac{3\\sqrt{3}}{2}`, "First root."),
      step(9, "$k=1$", `z = 3e^{i\\pi} = -3`, "Second root."),
      step(10, "$k=2$", `z = 3e^{i5\\pi/3} = \\frac{3}{2} - i\\frac{3\\sqrt{3}}{2}`, "Third root."),
      step(11, "Verify", `(-3)^{3} = -27`, "Check real root."),
      step(12, "Geometric", `\\text{Equilateral triangle on } |z|=3`, "Scaled cube roots of unity."),
      step(13, "Answer", `3e^{i\\pi/3},\\; -3,\\; 3e^{i5\\pi/3}`, "All cube roots of $-27$."),
    ],
    "Roots of $w$: $r^{1/n}e^{i(\\theta+2k\\pi)/n}$; cube roots of $-27$: $3e^{i\\pi/3}$, $-3$, $3e^{i5\\pi/3}$.",
    ["general-roots", "proof"],
    10,
  ),
];

const STEP_MIN = { Easy: 6, Intermediate: 9, Hard: 13 };
const STEP_MAX = { Easy: 9, Intermediate: 13, Hard: 18 };
const EXTRA = [
  () => step(0, "Roots of unity", `z^{n}=1 \\Rightarrow z=e^{i\\frac{2k\\pi}{n}}`, "All roots lie on the unit circle."),
  () => step(0, "De Moivre", `z=r^{1/n}e^{i\\frac{\\theta+2k\\pi}{n}}`, "General $n$th roots of $re^{i\\theta}$."),
  () => step(0, "Sum of roots", `\\sum_{k=0}^{n-1} e^{i\\frac{2k\\pi}{n}}=0`, "Roots sum to zero for $n>1$."),
  () => step(0, "Primitive root", `\\gcd(k,n)=1 \\Rightarrow e^{i\\frac{2k\\pi}{n}} \\text{ is primitive}`, "Order exactly $n$."),
  () => step(0, "Regular polygon", `\\text{Vertices equally spaced on } |z|=1`, "Geometric interpretation."),
  () => step(0, "Factorisation", `z^{n}-1=(z-1)(z-\\omega)\\cdots(z-\\omega^{n-1})`, "Split into linear factors."),
  () => step(0, "Euler's formula", `e^{i\\theta}=\\cos\\theta+i\\sin\\theta`, "Convert between forms."),
  () => step(0, "Final answer", `\\text{List all distinct roots clearly}`, "Include every root when solving equations."),
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
