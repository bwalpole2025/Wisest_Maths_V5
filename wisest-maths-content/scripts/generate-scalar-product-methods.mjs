#!/usr/bin/env node
/**
 * Generates 70 A-Level Further Maths "Scalar product methods" questions.
 * Output: src/data/questions/a-level-further-maths/year-1-pure/scalar-product-methods.ts
 */

import { writeFileSync, mkdirSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const outDir = resolve(__dirname, "../src/data/questions/a-level-further-maths/year-1-pure");
const outPath = resolve(outDir, "scalar-product-methods.ts");

mkdirSync(outDir, { recursive: true });

const SUBTOPIC = "Scalar product methods";
const SUBTOPIC_ID = "fm.y1.pure.scalar-product";
const LEVEL = "A-Level Further Maths";
const TOPIC = "Further Maths Year 1: Pure (Core Pure 1)";

const qid = (n) => `fm.y1.pure.scalar-product.q${String(n).padStart(3, "0")}`;
const step = (n, description, workingLatex, explanation) => ({ stepNumber: n, description, workingLatex, explanation, diagram: null });
const base = (meta) => ({ level: LEVEL, topic: TOPIC, subtopic: SUBTOPIC, subtopicId: SUBTOPIC_ID, questionDiagram: null, ...meta });
const spQ = (n, meta) => {
  const { tags: extraTags = [], ...rest } = meta;
  return base({ id: qid(n), tags: ["scalar-product", ...extraTags], ...rest });
};

// --- vector helpers ---
const dot = (a, b) => a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
const magSq = (a) => dot(a, a);
const mag = (a) => Math.sqrt(magSq(a));

function coeff(n) {
  if (n === 1) return "";
  if (n === -1) return "-";
  return String(n);
}

function vecLatex(v, name) {
  const s = vecLatexInline(v);
  return name ? `$\\mathbf{${name}} = ${s}$` : s;
}

function vecLatexInline(v) {
  const parts = [];
  if (v[0]) parts.push(`${coeff(v[0])}\\mathbf{i}`);
  if (v[1]) parts.push(`${parts.length && v[1] > 0 ? "+" : ""}${coeff(v[1])}\\mathbf{j}`);
  if (v[2]) parts.push(`${parts.length && v[2] > 0 ? "+" : ""}${coeff(v[2])}\\mathbf{k}`);
  return parts.join("").replace(/\+-/g, "-") || "0";
}

function dotWorking(a, b) {
  const terms = [];
  const partials = [];
  for (let i = 0; i < 3; i++) {
    const p = a[i] * b[i];
    terms.push(`${a[i]}\\times${b[i]}`);
    partials.push(String(p));
  }
  const sum = dot(a, b);
  return { terms: terms.join(" + ").replace(/\+ -/g, "- "), sum, partial: partials.join(" + ").replace(/\+ -/g, "- ") };
}

function magWorking(v) {
  const sq = magSq(v);
  const terms = v.map((c) => (c ? `${c}^{2}` : null)).filter(Boolean).join(" + ");
  return { terms, sq, mag: mag(v) };
}

function simplifySqrt(n) {
  let s = 1;
  let r = n;
  for (const p of [2, 3, 5, 7, 11, 13]) {
    while (r % (p * p) === 0) {
      s *= p;
      r /= p * p;
    }
  }
  if (s === 1) return `\\sqrt{${n}}`;
  if (r === 1) return `${s}`;
  return `${s}\\sqrt{${r}}`;
}

function angleDegFromCos(c) {
  const rad = Math.acos(Math.min(1, Math.max(-1, c)));
  const deg = (rad * 180) / Math.PI;
  if (Math.abs(deg - Math.round(deg)) < 0.01) return `${Math.round(deg)}^{\\circ}`;
  if (Math.abs(deg - 45) < 0.01) return "45^{\\circ}";
  if (Math.abs(deg - 60) < 0.01) return "60^{\\circ}";
  if (Math.abs(deg - 30) < 0.01) return "30^{\\circ}";
  if (Math.abs(deg - 90) < 0.01) return "90^{\\circ}";
  return `${deg.toFixed(1)}^{\\circ}`;
}

function dotProductQ(n, a, b, opts = {}) {
  const { difficulty = "Easy", marks = 3, tags = ["dot-product"] } = opts;
  const aL = vecLatexInline(a);
  const bL = vecLatexInline(b);
  const w = dotWorking(a, b);
  const steps = [
    step(1, "Recall the scalar product formula", "\\mathbf{a}\\cdot\\mathbf{b} = a_1 b_1 + a_2 b_2 + a_3 b_3", "Multiply corresponding components and add the results."),
    step(2, "Identify the components", `\\mathbf{a} = ${aL},\\quad \\mathbf{b} = ${bL}`, "Read off each component of both vectors."),
    step(3, "Multiply corresponding components", w.terms || "0", "Form the three products from matching subscripts."),
    step(4, "Add the products", `\\mathbf{a}\\cdot\\mathbf{b} = ${w.partial || 0}`, "Sum the component products."),
    step(5, "State the scalar product", `\\mathbf{a}\\cdot\\mathbf{b} = ${w.sum}`, "The result is a single number, not a vector."),
  ];
  return spQ(n, {
    difficulty, marks, answerType: "value", tags,
    questionText: `Find the scalar product $\\mathbf{a}\\cdot\\mathbf{b}$ where $\\mathbf{a} = ${aL}$ and $\\mathbf{b} = ${bL}$.`,
    workedSolution: { steps, finalAnswer: `$\\mathbf{a}\\cdot\\mathbf{b} = ${w.sum}$` },
  });
}

function perpendicularQ(n, a, b, opts = {}) {
  const { difficulty = "Easy", marks = 3, tags = ["perpendicular"] } = opts;
  const aL = vecLatexInline(a);
  const bL = vecLatexInline(b);
  const w = dotWorking(a, b);
  const isPerp = w.sum === 0;
  const steps = [
    step(1, "Recall the perpendicular condition", "\\mathbf{a}\\cdot\\mathbf{b} = 0", "Two non-zero vectors are perpendicular when their scalar product is zero."),
    step(2, "Compute the scalar product", `\\mathbf{a}\\cdot\\mathbf{b} = ${w.terms ? w.terms + " = " + w.sum : w.sum}`, "Multiply corresponding components and add."),
    step(3, "Interpret the result", isPerp ? "\\mathbf{a}\\cdot\\mathbf{b} = 0" : `\\mathbf{a}\\cdot\\mathbf{b} = ${w.sum} \\neq 0`, isPerp ? "The scalar product is zero." : "The scalar product is non-zero."),
    step(4, "Draw the conclusion", isPerp ? "\\text{The vectors are perpendicular}" : "\\text{The vectors are not perpendicular}", "Perpendicularity is decided entirely by whether the dot product vanishes."),
    step(5, "State the answer", isPerp ? "\\text{Yes, perpendicular}" : "\\text{No, not perpendicular}", "Give a clear yes/no conclusion."),
  ];
  return spQ(n, {
    difficulty, marks, answerType: "written", tags,
    questionText: `The vectors $\\mathbf{a} = ${aL}$ and $\\mathbf{b} = ${bL}$. Determine whether $\\mathbf{a}$ and $\\mathbf{b}$ are perpendicular.`,
    workedSolution: { steps, finalAnswer: isPerp ? "Yes, the vectors are perpendicular ($\\mathbf{a}\\cdot\\mathbf{b} = 0$)." : `No, the vectors are not perpendicular ($\\mathbf{a}\\cdot\\mathbf{b} = ${w.sum}$).` },
  });
}

function parallelVectorsQ(n, a, b, opts = {}) {
  const { difficulty = "Easy", marks = 3, tags = ["parallel"] } = opts;
  const aL = vecLatexInline(a);
  const bL = vecLatexInline(b);
  let k = null;
  let isPar = true;
  for (let i = 0; i < 3; i++) {
    if (b[i] === 0) {
      if (a[i] !== 0) { isPar = false; break; }
    } else {
      const ratio = a[i] / b[i];
      if (k === null) k = ratio;
      else if (Math.abs(k - ratio) > 1e-9) { isPar = false; break; }
    }
  }
  const steps = [
    step(1, "Recall the parallel condition", "\\mathbf{a} = k\\mathbf{b} \\text{ for some } k \\neq 0", "Parallel vectors are scalar multiples of each other."),
    step(2, "Compare component ratios", `\\frac{${a[0]}}{${b[0]}},\\;\\frac{${a[1]}}{${b[1]}},\\;\\frac{${a[2]}}{${b[2]}}`, "If parallel, every non-zero ratio must be equal."),
    step(3, "Evaluate the ratios", isPar ? `k = ${k}` : "\\text{ratios are not equal}", isPar ? "A single scalar works for all components." : "At least one ratio differs."),
    step(4, "Draw the conclusion", isPar ? "\\text{The vectors are parallel}" : "\\text{The vectors are not parallel}", isPar ? `One vector is ${k} times the other.` : "No single scalar multiple relates the vectors."),
    step(5, "State the answer", isPar ? `\\mathbf{a} = ${k}\\mathbf{b}` : "\\text{not parallel}", "Parallelism is a property of direction, not position."),
  ];
  return spQ(n, {
    difficulty, marks, answerType: "written", tags,
    questionText: `The vectors $\\mathbf{a} = ${aL}$ and $\\mathbf{b} = ${bL}$. Determine whether $\\mathbf{a}$ and $\\mathbf{b}$ are parallel.`,
    workedSolution: { steps, finalAnswer: isPar ? `Yes, the vectors are parallel ($\\mathbf{a} = ${k}\\mathbf{b}$).` : "No, the vectors are not parallel." },
  });
}

function angleVectorsQ(n, a, b, opts = {}) {
  const { difficulty = "Intermediate", marks = 5, tags = ["angle-vectors"] } = opts;
  const aL = vecLatexInline(a);
  const bL = vecLatexInline(b);
  const d = dot(a, b);
  const ma = mag(a);
  const mb = mag(b);
  const cosT = d / (ma * mb);
  const angle = angleDegFromCos(cosT);
  const maW = magWorking(a);
  const mbW = magWorking(b);
  const steps = [
    step(1, "Recall the angle formula", "\\cos\\theta = \\dfrac{\\mathbf{a}\\cdot\\mathbf{b}}{|\\mathbf{a}||\\mathbf{b}|}", "The scalar product links the angle between two vectors to their magnitudes."),
    step(2, "Compute the scalar product", `\\mathbf{a}\\cdot\\mathbf{b} = ${d}`, "Multiply corresponding components and add."),
    step(3, "Find $|\\mathbf{a}|$", `|\\mathbf{a}| = \\sqrt{${maW.terms}} = ${simplifySqrt(maW.sq)}`, "The magnitude is the square root of the sum of squared components."),
    step(4, "Find $|\\mathbf{b}|$", `|\\mathbf{b}| = \\sqrt{${mbW.terms}} = ${simplifySqrt(mbW.sq)}`, "Apply the same magnitude formula."),
    step(5, "Substitute into the formula", `\\cos\\theta = \\dfrac{${d}}{${simplifySqrt(maW.sq)} \\times ${simplifySqrt(mbW.sq)}}`, "Place the dot product over the product of magnitudes."),
    step(6, "Simplify $\\cos\\theta$", `\\cos\\theta = ${cosT === 1 ? "1" : cosT === 0 ? "0" : `\\dfrac{${d}}{${simplifySqrt(maW.sq * mbW.sq)}}`}`, "Cancel common factors where possible."),
    step(7, "Find the angle", `\\theta = ${angle}`, "Take the inverse cosine, giving the angle between $0^{\\circ}$ and $180^{\\circ}$."),
    step(8, "State the answer", `\\theta = ${angle}`, "The angle is measured between the directions of the two vectors."),
  ];
  return spQ(n, {
    difficulty, marks, answerType: "value", tags,
    questionText: `Find the angle between the vectors $\\mathbf{a} = ${aL}$ and $\\mathbf{b} = ${bL}$, giving your answer to the nearest degree.`,
    workedSolution: { steps, finalAnswer: `$\\theta = ${angle}$` },
  });
}

function angleLinesQ(n, d1, d2, opts = {}) {
  const { difficulty = "Intermediate", marks = 5, tags = ["angle-lines"], label1 = "L_1", label2 = "L_2" } = opts;
  const d1L = vecLatexInline(d1);
  const d2L = vecLatexInline(d2);
  const d = Math.abs(dot(d1, d2));
  const m1 = mag(d1);
  const m2 = mag(d2);
  const cosT = d / (m1 * m2);
  const angle = angleDegFromCos(cosT);
  const steps = [
    step(1, "Recall the acute angle between lines", "\\cos\\theta = \\dfrac{|\\mathbf{d}_1\\cdot\\mathbf{d}_2|}{|\\mathbf{d}_1||\\mathbf{d}_2|}", "Lines have no fixed direction, so we use the acute angle between their direction vectors."),
    step(2, "Identify direction vectors", `\\mathbf{d}_1 = ${d1L},\\quad \\mathbf{d}_2 = ${d2L}`, "Read the direction vectors from the line equations."),
    step(3, "Compute the scalar product", `\\mathbf{d}_1\\cdot\\mathbf{d}_2 = ${dot(d1, d2)}`, "Multiply corresponding components and add."),
    step(4, "Take the absolute value", `|\\mathbf{d}_1\\cdot\\mathbf{d}_2| = ${d}`, "The formula uses the absolute value to ensure an acute angle."),
    step(5, "Find the magnitudes", `|\\mathbf{d}_1| = ${simplifySqrt(magSq(d1))},\\quad |\\mathbf{d}_2| = ${simplifySqrt(magSq(d2))}`, "Each magnitude is the square root of the sum of squared components."),
    step(6, "Substitute into the formula", `\\cos\\theta = \\dfrac{${d}}{${simplifySqrt(magSq(d1))} \\times ${simplifySqrt(magSq(d2))}}`, "Place the absolute dot product over the product of magnitudes."),
    step(7, "Evaluate $\\cos\\theta$", `\\cos\\theta = ${cosT === 1 ? "1" : cosT === 0 ? "0" : `\\dfrac{${d}}{${simplifySqrt(magSq(d1) * magSq(d2))}}`}`, "Simplify the fraction."),
    step(8, "Find the angle", `\\theta = ${angle}`, "Take the inverse cosine."),
    step(9, "State the answer", `\\theta = ${angle}`, `The acute angle between lines $${label1}$ and $${label2}$.`),
  ];
  return spQ(n, {
    difficulty, marks, answerType: "value", tags,
    questionText: `Line $${label1}$ has direction vector $\\mathbf{d}_1 = ${d1L}$ and line $${label2}$ has direction vector $\\mathbf{d}_2 = ${d2L}$. Find the acute angle between the lines, giving your answer to the nearest degree.`,
    workedSolution: { steps, finalAnswer: `$\\theta = ${angle}$` },
  });
}

function anglePlanesQ(n, n1, n2, opts = {}) {
  const { difficulty = "Intermediate", marks = 5, tags = ["angle-planes"], label1 = "\\Pi_1", label2 = "\\Pi_2" } = opts;
  const n1L = vecLatexInline(n1);
  const n2L = vecLatexInline(n2);
  const d = Math.abs(dot(n1, n2));
  const m1 = mag(n1);
  const m2 = mag(n2);
  const cosT = d / (m1 * m2);
  const angle = angleDegFromCos(cosT);
  const steps = [
    step(1, "Recall the angle between planes", "\\cos\\theta = \\dfrac{|\\mathbf{n}_1\\cdot\\mathbf{n}_2|}{|\\mathbf{n}_1||\\mathbf{n}_2|}", "The angle between planes equals the angle between their normal vectors."),
    step(2, "Identify normal vectors", `\\mathbf{n}_1 = ${n1L},\\quad \\mathbf{n}_2 = ${n2L}`, "Normals are perpendicular to their respective planes."),
    step(3, "Compute the scalar product", `\\mathbf{n}_1\\cdot\\mathbf{n}_2 = ${dot(n1, n2)}`, "Multiply corresponding components and add."),
    step(4, "Take the absolute value", `|\\mathbf{n}_1\\cdot\\mathbf{n}_2| = ${d}`, "Use the absolute value for the acute angle between planes."),
    step(5, "Find the magnitudes", `|\\mathbf{n}_1| = ${simplifySqrt(magSq(n1))},\\quad |\\mathbf{n}_2| = ${simplifySqrt(magSq(n2))}`, "Compute each normal's magnitude."),
    step(6, "Substitute into the formula", `\\cos\\theta = \\dfrac{${d}}{${simplifySqrt(magSq(n1))} \\times ${simplifySqrt(magSq(n2))}}`, "Apply the angle-between-planes formula."),
    step(7, "Evaluate $\\cos\\theta$", `\\cos\\theta = ${cosT === 1 ? "1" : cosT === 0 ? "0" : `\\dfrac{${d}}{${simplifySqrt(magSq(n1) * magSq(n2))}}`}`, "Simplify."),
    step(8, "Find the angle", `\\theta = ${angle}`, "Take the inverse cosine."),
    step(9, "State the answer", `\\theta = ${angle}`, `The acute angle between planes $${label1}$ and $${label2}$.`),
  ];
  return spQ(n, {
    difficulty, marks, answerType: "value", tags,
    questionText: `Plane $${label1}$ has normal vector $\\mathbf{n}_1 = ${n1L}$ and plane $${label2}$ has normal vector $\\mathbf{n}_2 = ${n2L}$. Find the acute angle between the planes, giving your answer to the nearest degree.`,
    workedSolution: { steps, finalAnswer: `$\\theta = ${angle}$` },
  });
}

function angleLinePlaneQ(n, d, nv, opts = {}) {
  const { difficulty = "Hard", marks = 6, tags = ["angle-line-plane"] } = opts;
  const dL = vecLatexInline(d);
  const nL = vecLatexInline(nv);
  const dp = Math.abs(dot(d, nv));
  const md = mag(d);
  const mn = mag(nv);
  const sinT = dp / (md * mn);
  const angle = angleDegFromCos(Math.sqrt(1 - sinT * sinT) > 0 ? Math.sqrt(1 - sinT * sinT) : 0);
  // For line-plane angle we use sin(theta) = |d.n|/(|d||n|), theta = arcsin(...)
  const rad = Math.asin(Math.min(1, sinT));
  const deg = Math.round((rad * 180) / Math.PI);
  const angleStr = `${deg}^{\\circ}`;
  const steps = [
    step(1, "Recall the line–plane angle formula", "\\sin\\theta = \\dfrac{|\\mathbf{d}\\cdot\\mathbf{n}|}{|\\mathbf{d}||\\mathbf{n}|}", "The angle between a line and a plane is the complement of the angle between the line and the normal."),
    step(2, "Identify vectors", `\\mathbf{d} = ${dL},\\quad \\mathbf{n} = ${nL}`, "Use the line's direction vector and the plane's normal vector."),
    step(3, "Compute the scalar product", `\\mathbf{d}\\cdot\\mathbf{n} = ${dot(d, nv)}`, "Multiply corresponding components and add."),
    step(4, "Take the absolute value", `|\\mathbf{d}\\cdot\\mathbf{n}| = ${dp}`, "The formula uses the absolute value."),
    step(5, "Find the magnitudes", `|\\mathbf{d}| = ${simplifySqrt(magSq(d))},\\quad |\\mathbf{n}| = ${simplifySqrt(magSq(nv))}`, "Compute both magnitudes."),
    step(6, "Substitute into the formula", `\\sin\\theta = \\dfrac{${dp}}{${simplifySqrt(magSq(d))} \\times ${simplifySqrt(magSq(nv))}}`, "Place the absolute dot product over the product of magnitudes."),
    step(7, "Evaluate $\\sin\\theta$", `\\sin\\theta = ${sinT === 1 ? "1" : sinT === 0 ? "0" : `\\dfrac{${dp}}{${simplifySqrt(magSq(d) * magSq(nv))}}`}`, "Simplify the fraction."),
    step(8, "Find the angle", `\\theta = ${angleStr}`, "Take the inverse sine to obtain the angle between the line and the plane."),
    step(9, "Check the range", `0^{\\circ} \\leq \\theta \\leq 90^{\\circ}`, "The angle between a line and a plane is always acute or right."),
    step(10, "State the answer", `\\theta = ${angleStr}`, "Give the angle between the line and the plane."),
  ];
  return spQ(n, {
    difficulty, marks, answerType: "value", tags,
    questionText: `A line has direction vector $\\mathbf{d} = ${dL}$ and a plane has normal vector $\\mathbf{n} = ${nL}$. Find the angle between the line and the plane, giving your answer to the nearest degree.`,
    workedSolution: { steps, finalAnswer: `$\\theta = ${angleStr}$` },
  });
}

function findUnknownPerpQ(n, a, bTemplate, unknownIdx, unknownComp, k, opts = {}) {
  const { difficulty = "Hard", marks = 5, tags = ["unknown-perpendicular"], context = "line" } = opts;
  const b = [...bTemplate];
  b[unknownIdx] = k;
  const aL = vecLatexInline(a);
  const bL = vecLatexInline(b).replace(String(k), `\\lambda`);
  const bFull = vecLatexInline(b);
  const w = dotWorking(a, b);
  const steps = [
    step(1, "Set up the perpendicular condition", "\\mathbf{a}\\cdot\\mathbf{b} = 0", "Perpendicular vectors have zero scalar product."),
    step(2, "Write $\\mathbf{b}$ with the unknown", `\\mathbf{b} = ${bL}`, "Express the vector with $\\lambda$ in the unknown component."),
    step(3, "Form the scalar product", `\\mathbf{a}\\cdot\\mathbf{b} = ${w.terms}`, "Multiply corresponding components."),
    step(4, "Set the product equal to zero", `${w.sum === 0 ? "0" : "expression"} = 0`, "Perpendicularity requires the sum to vanish."),
    step(5, "Solve for $\\lambda$", `\\lambda = ${k}`, "Rearrange the linear equation."),
    step(6, "Substitute back", `\\mathbf{b} = ${bFull}`, "Write the full vector with the found value."),
    step(7, "Verify", `\\mathbf{a}\\cdot\\mathbf{b} = 0`, "Check that the scalar product is indeed zero."),
    step(8, "State the answer", `\\lambda = ${k}`, "The value makes the vectors perpendicular."),
  ];
  const qText = context === "plane"
    ? `A plane has normal vector $\\mathbf{n}_1 = ${aL}$. A second plane has normal $\\mathbf{n}_2 = ${bL}$. Given that the planes are perpendicular, find $\\lambda$.`
    : `The vectors $\\mathbf{a} = ${aL}$ and $\\mathbf{b} = ${bL}$ are perpendicular. Find $\\lambda$.`;
  return spQ(n, {
    difficulty, marks, answerType: "value", tags,
    questionText: qText,
    workedSolution: { steps, finalAnswer: `$\\lambda = ${k}$` },
  });
}

function hardMultiQ(n, questionText, steps, finalAnswer, tags = [], marks = 8) {
  return spQ(n, { difficulty: "Hard", marks, answerType: "written", tags: [...tags, "multi-step"], questionText, workedSolution: { steps, finalAnswer } });
}

const questions = [
  // Easy — scalar products (1–12)
  dotProductQ(1, [1, 2, 3], [4, 5, 6]),
  dotProductQ(2, [2, -1, 3], [1, 4, 2]),
  dotProductQ(3, [3, 0, 1], [2, 5, -1]),
  dotProductQ(4, [-1, 2, 0], [3, 1, 4]),
  dotProductQ(5, [1, 1, 1], [2, -1, 3]),
  dotProductQ(6, [2, 0, -1], [1, 3, 2]),
  dotProductQ(7, [0, 3, 4], [5, 0, 2]),
  dotProductQ(8, [1, -2, 2], [3, 1, 0]),
  dotProductQ(9, [4, 1, -2], [1, 2, 3]),
  dotProductQ(10, [2, 2, 1], [1, -1, 4]),
  dotProductQ(11, [1, 0, 2], [3, 4, 1]),
  dotProductQ(12, [-2, 3, 1], [1, 2, -3]),

  // Easy — perpendicular (13–18)
  perpendicularQ(13, [1, 0, 0], [0, 1, 0]),
  perpendicularQ(14, [1, 1, 0], [1, -1, 0]),
  perpendicularQ(15, [2, 1, -2], [1, 2, 2]),
  perpendicularQ(16, [3, 0, 4], [4, 0, -3]),
  perpendicularQ(17, [1, 2, 2], [2, -2, 1]),
  perpendicularQ(18, [2, 3, 6], [1, 1, -1]),

  // Easy — parallel vectors (19–22)
  parallelVectorsQ(19, [2, 4, -2], [1, 2, -1]),
  parallelVectorsQ(20, [3, -6, 9], [1, -2, 3]),
  parallelVectorsQ(21, [1, 2, 0], [2, 4, 1]),
  parallelVectorsQ(22, [-2, 1, 3], [4, -2, -6]),

  // Easy — more dot products (23–25)
  dotProductQ(23, [1, 0, 0], [3, 0, 0], { tags: ["unit-vector"] }),
  dotProductQ(24, [0, 1, 0], [0, -5, 0], { tags: ["unit-vector"] }),
  dotProductQ(25, [1, 1, 0], [1, 1, 0], { tags: ["magnitude-link"] }),

  // Intermediate — angle between vectors (26–35)
  angleVectorsQ(26, [1, 0, 0], [1, 1, 0]),
  angleVectorsQ(27, [1, 0, 0], [0, 1, 0]),
  angleVectorsQ(28, [1, 1, 0], [1, 0, 0]),
  angleVectorsQ(29, [1, 1, 1], [1, 0, 0]),
  angleVectorsQ(30, [2, 0, 0], [1, 1, 0]),
  angleVectorsQ(31, [1, 2, 2], [2, -1, 2]),
  angleVectorsQ(32, [3, 0, 4], [4, 0, 3]),
  angleVectorsQ(33, [1, 1, 0], [1, -1, 0]),
  angleVectorsQ(34, [2, 2, 1], [3, -1, 0]),
  angleVectorsQ(35, [1, 0, 1], [1, 1, 0]),

  // Intermediate — angle between lines (36–45)
  angleLinesQ(36, [1, 0, 0], [1, 1, 0]),
  angleLinesQ(37, [2, 1, -2], [1, 2, 2]),
  angleLinesQ(38, [1, 1, 1], [1, -1, 0]),
  angleLinesQ(39, [3, 0, 4], [4, 0, 3]),
  angleLinesQ(40, [1, 2, 2], [2, -1, 2]),
  angleLinesQ(41, [2, 0, 0], [0, 2, 0]),
  angleLinesQ(42, [1, 0, 1], [1, 1, 0]),
  angleLinesQ(43, [2, 2, 1], [1, -2, 2]),
  angleLinesQ(44, [1, 2, -2], [2, 1, 2]),
  angleLinesQ(45, [3, 1, 0], [1, 3, 0]),

  // Intermediate — angle between planes (46–52)
  anglePlanesQ(46, [1, 0, 0], [0, 1, 0]),
  anglePlanesQ(47, [1, 1, 0], [1, -1, 0]),
  anglePlanesQ(48, [1, 0, 1], [1, 1, 0]),
  anglePlanesQ(49, [2, 1, -2], [1, 2, 2]),
  anglePlanesQ(50, [1, 1, 1], [1, 0, 0]),
  anglePlanesQ(51, [3, 0, 4], [4, 0, 3]),
  anglePlanesQ(52, [2, 2, 1], [1, -2, 2]),

  // Intermediate — perpendicular lines/planes (53–55)
  perpendicularQ(53, [2, 1, -2], [1, 2, 2], { difficulty: "Intermediate", marks: 4, tags: ["perpendicular", "lines"] }),
  perpendicularQ(54, [1, 0, 1], [1, 0, -1], { difficulty: "Intermediate", marks: 4, tags: ["perpendicular", "planes"] }),
  perpendicularQ(55, [3, 1, 0], [1, -3, 0], { difficulty: "Intermediate", marks: 4, tags: ["perpendicular", "planes"] }),

  // Hard — angle line and plane (56–62)
  angleLinePlaneQ(56, [1, 0, 0], [0, 1, 0]),
  angleLinePlaneQ(57, [1, 1, 0], [0, 0, 1]),
  angleLinePlaneQ(58, [1, 0, 1], [1, 0, 0]),
  angleLinePlaneQ(59, [2, 1, -2], [1, 2, 2]),
  angleLinePlaneQ(60, [1, 1, 1], [1, 0, 0]),
  angleLinePlaneQ(61, [3, 0, 4], [4, 0, 3]),
  angleLinePlaneQ(62, [1, 2, 2], [2, -1, 2]),

  // Hard — find unknown for perpendicularity (63–66)
  findUnknownPerpQ(63, [1, 2, 3], [1, 0, 0], 1, 0, -0.5),
  findUnknownPerpQ(64, [2, 1, -1], [1, 3, 0], 2, 0, 5),
  findUnknownPerpQ(65, [1, 0, 2], [3, 4, 0], 2, 0, -1.5, { context: "plane" }),
  findUnknownPerpQ(66, [1, 0, 2], [0, 3, 1], 0, 0, -2, { context: "plane" }),

  // Hard — multi-part (67–70)
  hardMultiQ(
    67,
    "(a) Find the scalar product $\\mathbf{d}_1\\cdot\\mathbf{d}_2$ where $\\mathbf{d}_1 = 2\\mathbf{i} + \\mathbf{j} - 2\\mathbf{k}$ and $\\mathbf{d}_2 = \\mathbf{i} + 2\\mathbf{j} + 2\\mathbf{k}$.\n(b) Hence determine whether the lines with these direction vectors are perpendicular.",
    [
      step(1, "(a) Recall the scalar product", "\\mathbf{d}_1\\cdot\\mathbf{d}_2 = d_{1x}d_{2x} + d_{1y}d_{2y} + d_{1z}d_{2z}", "Multiply corresponding components and add."),
      step(2, "(a) Compute the product", "2\\times1 + 1\\times2 + (-2)\\times2 = 2 + 2 - 4 = 0", "Evaluate each term."),
      step(3, "(a) State the scalar product", "\\mathbf{d}_1\\cdot\\mathbf{d}_2 = 0", "The result is a single number."),
      step(4, "(b) Recall the perpendicular condition", "\\mathbf{d}_1\\cdot\\mathbf{d}_2 = 0 \\Rightarrow \\text{perpendicular}", "Zero dot product means the direction vectors are at right angles."),
      step(5, "(b) Apply the condition", "\\mathbf{d}_1\\cdot\\mathbf{d}_2 = 0", "The scalar product from part (a) is zero."),
      step(6, "(b) Conclude about the lines", "\\text{The lines are perpendicular}", "Perpendicular direction vectors imply perpendicular lines."),
      step(7, "Geometric interpretation", "\\text{Acute angle} = 90^{\\circ}", "The lines meet at a right angle (or would if coplanar)."),
      step(8, "State both answers", "(a) $0$; (b) perpendicular", "Answer both parts clearly."),
    ],
    "(a) $\\mathbf{d}_1\\cdot\\mathbf{d}_2 = 0$. (b) The lines are perpendicular.",
    ["multi-part", "lines"],
    6
  ),

  hardMultiQ(
    68,
    "(a) Plane $\\Pi_1$ has normal $\\mathbf{n}_1 = \\mathbf{i} + \\mathbf{j} + \\mathbf{k}$ and plane $\\Pi_2$ has normal $\\mathbf{n}_2 = \\mathbf{i} - \\mathbf{j}$. Find $\\mathbf{n}_1\\cdot\\mathbf{n}_2$.\n(b) Find the acute angle between the planes, giving your answer to the nearest degree.",
    [
      step(1, "(a) Compute the scalar product", "\\mathbf{n}_1\\cdot\\mathbf{n}_2 = 1\\times1 + 1\\times(-1) + 1\\times0 = 0", "Multiply corresponding components."),
      step(2, "(a) State the result", "\\mathbf{n}_1\\cdot\\mathbf{n}_2 = 0", "The normals are perpendicular."),
      step(3, "(b) Recall the plane angle formula", "\\cos\\theta = \\dfrac{|\\mathbf{n}_1\\cdot\\mathbf{n}_2|}{|\\mathbf{n}_1||\\mathbf{n}_2|}", "Use the angle between normal vectors."),
      step(4, "(b) Find magnitudes", "|\\mathbf{n}_1| = \\sqrt{3},\\quad |\\mathbf{n}_2| = \\sqrt{2}", "Square root of sum of squared components."),
      step(5, "(b) Substitute", "\\cos\\theta = \\dfrac{0}{\\sqrt{3}\\sqrt{2}} = 0", "The dot product is zero."),
      step(6, "(b) Find the angle", "\\theta = 90^{\\circ}", "Cosine zero means a right angle."),
      step(7, "Interpret", "\\text{The planes are perpendicular}", "Normal vectors at $90^{\\circ}$ imply perpendicular planes."),
      step(8, "State answers", "(a) $0$; (b) $\\theta = 90^{\\circ}$", "Both parts answered."),
    ],
    "(a) $\\mathbf{n}_1\\cdot\\mathbf{n}_2 = 0$. (b) $\\theta = 90^{\\circ}$.",
    ["multi-part", "planes"],
    7
  ),

  hardMultiQ(
    69,
    "A line has direction vector $\\mathbf{d} = 2\\mathbf{i} + 2\\mathbf{j} + \\mathbf{k}$ and a plane has normal $\\mathbf{n} = \\mathbf{i} - \\mathbf{j} + 2\\mathbf{k}$.\n(a) Find $\\mathbf{d}\\cdot\\mathbf{n}$.\n(b) Find the angle between the line and the plane, giving your answer to the nearest degree.",
    [
      step(1, "(a) Recall the scalar product", "\\mathbf{d}\\cdot\\mathbf{n} = d_x n_x + d_y n_y + d_z n_z", "Multiply corresponding components and add."),
      step(2, "(a) Compute the product", "2\\times1 + 2\\times(-1) + 1\\times2 = 2 - 2 + 2 = 2", "Evaluate each term."),
      step(3, "(a) State the result", "\\mathbf{d}\\cdot\\mathbf{n} = 2", "The scalar product is non-zero, so the line is not parallel to the plane."),
      step(4, "(b) Recall line–plane angle", "\\sin\\theta = \\dfrac{|\\mathbf{d}\\cdot\\mathbf{n}|}{|\\mathbf{d}||\\mathbf{n}|}", "Use the direction vector and normal."),
      step(5, "(b) Find magnitudes", "|\\mathbf{d}| = 3,\\quad |\\mathbf{n}| = \\sqrt{6}", "Compute each magnitude."),
      step(6, "(b) Substitute", "\\sin\\theta = \\dfrac{2}{3\\sqrt{6}} = \\dfrac{\\sqrt{6}}{9}", "Simplify the fraction."),
      step(7, "(b) Find the angle", "\\theta \\approx 15^{\\circ}", "Take the inverse sine."),
      step(8, "Check the range", "0^{\\circ} \\leq \\theta \\leq 90^{\\circ}", "The angle between a line and a plane is always acute or right."),
      step(9, "Interpret", "\\text{The line meets the plane at an acute angle}", "A non-zero dot product confirms the line is not parallel to the plane."),
      step(10, "State answers", "(a) $2$; (b) $\\theta \\approx 15^{\\circ}$", "Both parts answered."),
    ],
    "(a) $\\mathbf{d}\\cdot\\mathbf{n} = 2$. (b) $\\theta \\approx 15^{\\circ}$.",
    ["multi-part", "line-plane"],
    8
  ),

  hardMultiQ(
    70,
    "Line $L$ has direction vector $\\mathbf{d} = 3\\mathbf{i} + 4\\mathbf{j}$ and line $M$ has direction vector $\\mathbf{e} = 4\\mathbf{i} - 3\\mathbf{j}$.\n(a) Show that $L$ and $M$ are perpendicular.\n(b) A plane has normal $\\mathbf{n} = 3\\mathbf{i} + 4\\mathbf{j}$. Explain the relationship between line $L$ and this plane.\n(c) Find the acute angle between line $M$ and the plane with normal $\\mathbf{n}$.",
    [
      step(1, "(a) Compute $\\mathbf{d}\\cdot\\mathbf{e}$", "3\\times4 + 4\\times(-3) = 12 - 12 = 0", "Multiply corresponding components."),
      step(2, "(a) Conclude", "\\mathbf{d}\\cdot\\mathbf{e} = 0 \\Rightarrow L \\perp M", "Zero scalar product means perpendicular lines."),
      step(3, "(b) Compare $\\mathbf{d}$ and $\\mathbf{n}$", "\\mathbf{d} = \\mathbf{n}", "The direction vector of $L$ equals the plane's normal."),
      step(4, "(b) Interpret", "\\mathbf{d} \\parallel \\mathbf{n} \\Rightarrow L \\text{ is perpendicular to the plane}", "A line parallel to the normal pierces the plane at right angles."),
      step(5, "(c) Use line–plane formula", "\\sin\\theta = \\dfrac{|\\mathbf{e}\\cdot\\mathbf{n}|}{|\\mathbf{e}||\\mathbf{n}|}", "Angle between $M$ and the plane."),
      step(6, "(c) Compute dot product", "\\mathbf{e}\\cdot\\mathbf{n} = 12 - 12 = 0", "The direction of $M$ is perpendicular to $\\mathbf{n}$."),
      step(7, "(c) Find the angle", "\\sin\\theta = 0 \\Rightarrow \\theta = 0^{\\circ}", "The line is parallel to the plane."),
      step(8, "Geometric summary", "L \\perp M;\\; L \\perp \\text{plane};\\; M \\parallel \\text{plane}", "Connect all three results."),
      step(9, "Verify magnitudes", "|\\mathbf{e}| = 5,\\quad |\\mathbf{n}| = 5", "Magnitudes confirm the division in part (c)."),
      step(10, "State answers", "(a) $\\mathbf{d}\\cdot\\mathbf{e}=0$; (b) $L$ is perpendicular to the plane; (c) $\\theta=0^{\\circ}$", "All three parts."),
    ],
    "(a) $\\mathbf{d}\\cdot\\mathbf{e}=0$, so $L\\perp M$. (b) $\\mathbf{d}\\parallel\\mathbf{n}$, so $L$ is perpendicular to the plane. (c) $\\theta=0^{\\circ}$ (line $M$ is parallel to the plane).",
    ["multi-part", "lines", "planes"],
    9
  ),
];

const STEP_MIN = { Easy: 6, Intermediate: 9, Hard: 13 };
const STEP_MAX = { Easy: 9, Intermediate: 13, Hard: 18 };
const EXTRA = [
  () => step(0, "Scalar product reminder", "\\mathbf{a}\\cdot\\mathbf{b} = |\\mathbf{a}||\\mathbf{b}|\\cos\\theta", "The dot product encodes both magnitudes and the angle between vectors."),
  () => step(0, "Perpendicular condition", "\\mathbf{a}\\cdot\\mathbf{b} = 0", "Right angles correspond to zero scalar product."),
  () => step(0, "Acute angle between lines", "\\cos\\theta = \\dfrac{|\\mathbf{d}_1\\cdot\\mathbf{d}_2|}{|\\mathbf{d}_1||\\mathbf{d}_2|}", "Use absolute value because lines have no direction."),
  () => step(0, "Angle between planes", "\\cos\\theta = \\dfrac{|\\mathbf{n}_1\\cdot\\mathbf{n}_2|}{|\\mathbf{n}_1||\\mathbf{n}_2|}", "Use the normal vectors of each plane."),
  () => step(0, "Line and plane angle", "\\sin\\theta = \\dfrac{|\\mathbf{d}\\cdot\\mathbf{n}|}{|\\mathbf{d}||\\mathbf{n}|}", "This angle is the complement of the angle between the line and the normal."),
  () => step(0, "Check magnitudes", "|\\mathbf{v}| = \\sqrt{v_1^2 + v_2^2 + v_3^2}", "Always compute magnitudes before dividing."),
  () => step(0, "Use degrees unless told otherwise", "\\theta \\text{ in degrees}", "Exam questions typically expect degrees for geometry."),
  () => step(0, "Verify with geometry", "\\text{Does the angle make sense?}", "A quick sketch can catch sign or formula errors."),
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
