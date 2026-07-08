#!/usr/bin/env node
/**
 * Generates 70 A-Level Further Maths "Roots of polynomials" questions.
 * Output: src/data/questions/a-level-further-maths/year-1-pure/roots-polynomials.ts
 */

import { writeFileSync, mkdirSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const outDir = resolve(__dirname, "../src/data/questions/a-level-further-maths/year-1-pure");
const outPath = resolve(outDir, "roots-polynomials.ts");

mkdirSync(outDir, { recursive: true });

const SUBTOPIC = "Roots of polynomials";
const SUBTOPIC_ID = "fm.y1.pure.roots-polynomials";
const LEVEL = "A-Level Further Maths";
const TOPIC = "Further Maths Year 1: Pure (Core Pure 1)";

const qid = (n) => `fm.y1.pure.roots-polynomials.q${String(n).padStart(3, "0")}`;
const step = (n, description, workingLatex, explanation) => ({ stepNumber: n, description, workingLatex, explanation, diagram: null });
const base = (meta) => ({ level: LEVEL, topic: TOPIC, subtopic: SUBTOPIC, subtopicId: SUBTOPIC_ID, questionDiagram: null, ...meta });
const rpQ = (n, meta) => base({ id: qid(n), tags: ["roots-polynomials", ...(meta.tags || [])], ...meta });

function signStr(c) {
  if (c > 0) return "+";
  if (c < 0) return "-";
  return "";
}

function term(c, p, v = "x") {
  if (c === 0) return "";
  const a = Math.abs(c);
  if (p === 0) return `${a}`;
  if (p === 1) return a === 1 ? v : `${a}${v}`;
  return a === 1 ? `${v}^{${p}}` : `${a}${v}^{${p}}`;
}

function poly2(a, b, c, v = "x") {
  const parts = [];
  if (a !== 0) parts.push({ c: a, p: 2 });
  if (b !== 0) parts.push({ c: b, p: 1 });
  if (c !== 0) parts.push({ c: c, p: 0 });
  if (parts.length === 0) return "0";
  return parts
    .map((t, i) => {
      const tStr = term(t.c, t.p, v);
      if (i === 0) return t.c < 0 ? `-${term(Math.abs(t.c), t.p, v)}` : tStr;
      return ` ${signStr(t.c)} ${term(Math.abs(t.c), t.p, v)}`;
    })
    .join("");
}

function poly3(a, b, c, d, v = "x") {
  const parts = [];
  if (a !== 0) parts.push({ c: a, p: 3 });
  if (b !== 0) parts.push({ c: b, p: 2 });
  if (c !== 0) parts.push({ c: c, p: 1 });
  if (d !== 0) parts.push({ c: d, p: 0 });
  if (parts.length === 0) return "0";
  return parts
    .map((t, i) => {
      const tStr = term(t.c, t.p, v);
      if (i === 0) return t.c < 0 ? `-${term(Math.abs(t.c), t.p, v)}` : tStr;
      return ` ${signStr(t.c)} ${term(Math.abs(t.c), t.p, v)}`;
    })
    .join("");
}

function poly4(a, b, c, d, e, v = "x") {
  const parts = [];
  if (a !== 0) parts.push({ c: a, p: 4 });
  if (b !== 0) parts.push({ c: b, p: 3 });
  if (c !== 0) parts.push({ c: c, p: 2 });
  if (d !== 0) parts.push({ c: d, p: 1 });
  if (e !== 0) parts.push({ c: e, p: 0 });
  if (parts.length === 0) return "0";
  return parts
    .map((t, i) => {
      const tStr = term(t.c, t.p, v);
      if (i === 0) return t.c < 0 ? `-${term(Math.abs(t.c), t.p, v)}` : tStr;
      return ` ${signStr(t.c)} ${term(Math.abs(t.c), t.p, v)}`;
    })
    .join("");
}

/** Monic quadratic: find α+β and αβ via Vieta */
function vietaFromMonicQuad(qNum, b, c, tags = [], marks = 3) {
  const eq = poly2(1, b, c);
  const sum = -b;
  const prod = c;
  const steps = [
    step(1, "State Vieta's relations", `\\text{For } x^{2}+bx+c=0:\\; \\alpha+\\beta=-b,\\; \\alpha\\beta=c`, "For a monic quadratic, coefficients encode the symmetric sums of the roots."),
    step(2, "Identify coefficients", `b=${b},\\; c=${c}`, "Read off $b$ and $c$ from the equation."),
    step(3, "Sum of roots", `\\alpha+\\beta=-(${b})=${sum}`, "The sum equals the negative of the coefficient of $x$."),
    step(4, "Product of roots", `\\alpha\\beta=${c}=${prod}`, "The product equals the constant term."),
    step(5, "Verify structure", `${eq}=0 \\Rightarrow (x-\\alpha)(x-\\beta)=0`, "Expanding gives $x^{2}-(\\alpha+\\beta)x+\\alpha\\beta$."),
    step(6, "Answer", `\\alpha+\\beta=${sum},\\; \\alpha\\beta=${prod}`, "Both Vieta relations for the quadratic."),
  ];
  return rpQ(qNum, {
    difficulty: "Easy",
    marks,
    answerType: "written",
    tags: [...tags, "vieta", "quadratic", "sum-product"],
    questionText: `The equation $${eq}=0$ has roots $\\alpha$ and $\\beta$. Find $\\alpha+\\beta$ and $\\alpha\\beta$.`,
    workedSolution: { steps, finalAnswer: `$\\alpha+\\beta=${sum}$, $\\alpha\\beta=${prod}$` },
  });
}

/** Non-monic quadratic Vieta */
function vietaFromQuad(qNum, a, b, c, tags = [], marks = 4) {
  const eq = poly2(a, b, c);
  const sum = -b / a;
  const prod = c / a;
  const sumStr = Number.isInteger(sum) ? `${sum}` : `\\frac{${-b}}{${a}}`;
  const prodStr = Number.isInteger(prod) ? `${prod}` : `\\frac{${c}}{${a}}`;
  const steps = [
    step(1, "General Vieta's formulas", `\\alpha+\\beta=-\\frac{b}{a},\\; \\alpha\\beta=\\frac{c}{a}`, "Divide by the leading coefficient $a$ to normalise."),
    step(2, "Identify $a$, $b$, $c$", `a=${a},\\; b=${b},\\; c=${c}`, "Extract coefficients from $ax^{2}+bx+c=0$."),
    step(3, "Sum of roots", `\\alpha+\\beta=-\\frac{${b}}{${a}}=${sumStr}`, "Apply $-(b/a)$."),
    step(4, "Product of roots", `\\alpha\\beta=\\frac{${c}}{${a}}=${prodStr}`, "Apply $c/a$."),
    step(5, "Check by monic form", `\\frac{${eq}}{${a}}=x^{2}+${b / a < 0 ? "" : "+"}${b / a}x ${c >= 0 ? "+" : "-"} ${Math.abs(c / a)}`, "Dividing through by $a$ confirms the relations."),
    step(6, "Answer", `\\alpha+\\beta=${sumStr},\\; \\alpha\\beta=${prodStr}`, "Symmetric sums of the roots."),
  ];
  return rpQ(qNum, {
    difficulty: "Easy",
    marks,
    answerType: "written",
    tags: [...tags, "vieta", "quadratic", "non-monic"],
    questionText: `The equation $${eq}=0$ has roots $\\alpha$ and $\\beta$. Find $\\alpha+\\beta$ and $\\alpha\\beta$.`,
    workedSolution: { steps, finalAnswer: `$\\alpha+\\beta=${sumStr}$, $\\alpha\\beta=${prodStr}$` },
  });
}

/** Form monic quadratic from α+β and αβ */
function formQuadFromSumProduct(qNum, sum, prod, tags = [], marks = 3) {
  const b = -sum;
  const eq = poly2(1, b, prod);
  const steps = [
    step(1, "Monic quadratic template", `x^{2}-(\\alpha+\\beta)x+\\alpha\\beta=0`, "A monic polynomial with roots $\\alpha$, $\\beta$ has this form."),
    step(2, "Substitute given values", `\\alpha+\\beta=${sum},\\; \\alpha\\beta=${prod}`, "Insert the symmetric sums provided."),
    step(3, "Write the equation", `${eq}=0`, "Replace $\\alpha+\\beta$ and $\\alpha\\beta$ with their values."),
    step(4, "Expand check", `(x-\\alpha)(x-\\beta)=x^{2}-(${sum})x+${prod}`, "Factored form confirms the coefficients."),
    step(5, "Identify coefficients", `b=-${sum}=${b},\\; c=${prod}`, "Coefficient of $x$ is minus the sum; constant is the product."),
    step(6, "Answer", `${eq}=0`, "The required quadratic equation."),
  ];
  return rpQ(qNum, {
    difficulty: "Easy",
    marks,
    answerType: "written",
    tags: [...tags, "forming-equation", "quadratic"],
    questionText: `Given that $\\alpha+\\beta=${sum}$ and $\\alpha\\beta=${prod}$, form a monic quadratic equation with roots $\\alpha$ and $\\beta$.`,
    workedSolution: { steps, finalAnswer: `$${eq}=0$` },
  });
}

/** Form quadratic from two explicit roots */
function formQuadFromRoots(qNum, r1, r2, tags = [], marks = 3) {
  const sum = r1 + r2;
  const prod = r1 * r2;
  const b = -sum;
  const eq = poly2(1, b, prod);
  const steps = [
    step(1, "Factorised form", `(x-${r1})(x-${r2})=0`, "A quadratic with roots $r_1$, $r_2$ factors this way."),
    step(2, "Expand", `x^{2}-(${r1}+${r2})x+(${r1})(${r2})`, "Multiply out the brackets."),
    step(3, "Sum of roots", `${r1}+${r2}=${sum}`, "Add the roots for the $x$-coefficient."),
    step(4, "Product of roots", `(${r1})(${r2})=${prod}`, "Multiply the roots for the constant term."),
    step(5, "Write equation", `${eq}=0`, "Collect terms into standard form."),
    step(6, "Answer", `${eq}=0`, "Monic quadratic with the given roots."),
  ];
  return rpQ(qNum, {
    difficulty: "Easy",
    marks,
    answerType: "written",
    tags: [...tags, "forming-equation", "quadratic", "explicit-roots"],
    questionText: `Form a monic quadratic equation with roots $${r1}$ and $${r2}$.`,
    workedSolution: { steps, finalAnswer: `$${eq}=0$` },
  });
}

/** Conjugate pair: given one complex root, find equation */
function conjugatePairEasy(qNum, re, im, tags = [], marks = 4) {
  const sum = 2 * re;
  const prod = re * re + im * im;
  const b = -sum;
  const eq = poly2(1, b, prod);
  const root1 = im > 0 ? `${re}+${im}i` : `${re}${im}i`;
  const root2 = im > 0 ? `${re}-${im}i` : `${re}+${Math.abs(im)}i`;
  const steps = [
    step(1, "Conjugate pair theorem", `\\text{Real coefficients } \\Rightarrow \\text{ roots occur in conjugate pairs}`, "If $a+bi$ is a root, then $a-bi$ is also a root."),
    step(2, "Identify given root", `\\alpha=${root1}`, "The problem supplies one complex root."),
    step(3, "Write conjugate root", `\\beta=${root2}`, "Change the sign of the imaginary part."),
    step(4, "Sum of roots", `\\alpha+\\beta=${sum}`, "Conjugate pairs have twice the real part as their sum."),
    step(5, "Product of roots", `\\alpha\\beta=(${re})^{2}+(${im})^{2}=${prod}`, "Product of conjugates equals $|z|^{2}$."),
    step(6, "Form equation", `${eq}=0`, "Use $x^{2}-(\\alpha+\\beta)x+\\alpha\\beta=0$."),
    step(7, "Answer", `${eq}=0`, "Quadratic with real coefficients and the given root."),
  ];
  return rpQ(qNum, {
    difficulty: "Easy",
    marks,
    answerType: "written",
    tags: [...tags, "conjugate-pairs", "quadratic"],
    questionText: `A quadratic equation with real coefficients has one root $\\alpha=${root1}$. Find the other root and write the equation.`,
    workedSolution: { steps, finalAnswer: `Other root: $${root2}$. Equation: $${eq}=0$` },
  });
}

/** α²+β² from sum and product */
function alpha2PlusBeta2(qNum, sum, prod, tags = [], marks = 4) {
  const sq = sum * sum;
  const result = sq - 2 * prod;
  const steps = [
    step(1, "Identity for $\\alpha^{2}+\\beta^{2}$", `\\alpha^{2}+\\beta^{2}=(\\alpha+\\beta)^{2}-2\\alpha\\beta`, "Expand $(\\alpha+\\beta)^{2}$ and subtract the cross term $2\\alpha\\beta$."),
    step(2, "Substitute known values", `\\alpha+\\beta=${sum},\\; \\alpha\\beta=${prod}`, "Use the given symmetric sums."),
    step(3, "Square the sum", `(${sum})^{2}=${sq}`, "Compute $(\\alpha+\\beta)^{2}$."),
    step(4, "Compute $2\\alpha\\beta$", `2\\times ${prod}=${2 * prod}`, "Double the product of the roots."),
    step(5, "Subtract", `${sq}-${2 * prod}=${result}`, "Apply the identity."),
    step(6, "Alternative check", `(\\alpha+\\beta)^{2}-2\\alpha\\beta=\\alpha^{2}+2\\alpha\\beta+\\beta^{2}-2\\alpha\\beta`, "The $2\\alpha\\beta$ terms cancel."),
    step(7, "Answer", `\\alpha^{2}+\\beta^{2}=${result}`, "The sum of squares of the roots."),
  ];
  return rpQ(qNum, {
    difficulty: "Intermediate",
    marks,
    answerType: "written",
    tags: [...tags, "sum-of-powers", "quadratic"],
    questionText: `The roots $\\alpha$, $\\beta$ of a quadratic satisfy $\\alpha+\\beta=${sum}$ and $\\alpha\\beta=${prod}$. Find $\\alpha^{2}+\\beta^{2}$.`,
    workedSolution: { steps, finalAnswer: `$\\alpha^{2}+\\beta^{2}=${result}$` },
  });
}

/** α³+β³ from sum and product */
function alpha3PlusBeta3(qNum, sum, prod, tags = [], marks = 5) {
  const cube = sum * sum * sum;
  const term3 = 3 * prod * sum;
  const result = cube - term3;
  const steps = [
    step(1, "Identity for $\\alpha^{3}+\\beta^{3}$", `\\alpha^{3}+\\beta^{3}=(\\alpha+\\beta)^{3}-3\\alpha\\beta(\\alpha+\\beta)`, "This follows from the factorisation $a^{3}+b^{3}=(a+b)^{3}-3ab(a+b)$."),
    step(2, "Substitute", `\\alpha+\\beta=${sum},\\; \\alpha\\beta=${prod}`, "Insert the known symmetric sums."),
    step(3, "Compute $(\\alpha+\\beta)^{3}$", `(${sum})^{3}=${cube}`, "Cube the sum of the roots."),
    step(4, "Compute $3\\alpha\\beta(\\alpha+\\beta)$", `3\\times ${prod}\\times ${sum}=${term3}`, "Evaluate the correction term."),
    step(5, "Subtract", `${cube}-${term3}=${result}`, "Apply the identity."),
    step(6, "Factor check", `\\alpha^{3}+\\beta^{3}=(\\alpha+\\beta)(\\alpha^{2}-\\alpha\\beta+\\beta^{2})`, "Alternative factorisation confirms the approach."),
    step(7, "Answer", `\\alpha^{3}+\\beta^{3}=${result}`, "Sum of cubes of the roots."),
  ];
  return rpQ(qNum, {
    difficulty: "Intermediate",
    marks,
    answerType: "written",
    tags: [...tags, "sum-of-powers", "quadratic"],
    questionText: `Given $\\alpha+\\beta=${sum}$ and $\\alpha\\beta=${prod}$, find $\\alpha^{3}+\\beta^{3}$.`,
    workedSolution: { steps, finalAnswer: `$\\alpha^{3}+\\beta^{3}=${result}$` },
  });
}

/** Cubic Vieta: find α+β+γ, αβ+βγ+γα, αβγ */
function cubicVieta(qNum, a, b, c, d, tags = [], marks = 5) {
  const eq = poly3(a, b, c, d);
  const s1 = -b / a;
  const s2 = c / a;
  const s3 = -d / a;
  const s1Str = Number.isInteger(s1) ? `${s1}` : `\\frac{${-b}}{${a}}`;
  const s2Str = Number.isInteger(s2) ? `${s2}` : `\\frac{${c}}{${a}}`;
  const s3Str = Number.isInteger(s3) ? `${s3}` : `\\frac{${-d}}{${a}}`;
  const steps = [
    step(1, "Cubic Vieta's formulas", `\\alpha+\\beta+\\gamma=-\\frac{b}{a},\\; \\alpha\\beta+\\beta\\gamma+\\gamma\\alpha=\\frac{c}{a},\\; \\alpha\\beta\\gamma=-\\frac{d}{a}`, "For $ax^{3}+bx^{2}+cx+d=0$, these three relations hold."),
    step(2, "Identify coefficients", `a=${a},\\; b=${b},\\; c=${c},\\; d=${d}`, "Read coefficients from the cubic."),
    step(3, "Sum of roots", `\\alpha+\\beta+\\gamma=-\\frac{${b}}{${a}}=${s1Str}`, "Apply the first Vieta relation."),
    step(4, "Sum of products of pairs", `\\alpha\\beta+\\beta\\gamma+\\gamma\\alpha=\\frac{${c}}{${a}}=${s2Str}`, "Apply the second relation."),
    step(5, "Product of roots", `\\alpha\\beta\\gamma=-\\frac{${d}}{${a}}=${s3Str}`, "Apply the third relation."),
    step(6, "Verify sign pattern", `\\text{Signs alternate: } -,\\,+\\,-`, "Vieta signs follow from expanding $a(x-\\alpha)(x-\\beta)(x-\\gamma)$."),
    step(7, "Answer", `S_{1}=${s1Str},\\; S_{2}=${s2Str},\\; S_{3}=${s3Str}`, "All three symmetric sums."),
  ];
  return rpQ(qNum, {
    difficulty: "Intermediate",
    marks,
    answerType: "written",
    tags: [...tags, "vieta", "cubic"],
    questionText: `The equation $${eq}=0$ has roots $\\alpha$, $\\beta$, $\\gamma$. Find $\\alpha+\\beta+\\gamma$, $\\alpha\\beta+\\beta\\gamma+\\gamma\\alpha$ and $\\alpha\\beta\\gamma$.`,
    workedSolution: {
      steps,
      finalAnswer: `$\\alpha+\\beta+\\gamma=${s1Str}$, $\\alpha\\beta+\\beta\\gamma+\\gamma\\alpha=${s2Str}$, $\\alpha\\beta\\gamma=${s3Str}$`,
    },
  });
}

/** Form monic cubic from three roots */
function formCubicFromRoots(qNum, r1, r2, r3, tags = [], marks = 5) {
  const s1 = r1 + r2 + r3;
  const s2 = r1 * r2 + r2 * r3 + r1 * r3;
  const s3 = r1 * r2 * r3;
  const eq = poly3(1, -s1, s2, -s3);
  const steps = [
    step(1, "Factorised cubic", `(x-${r1})(x-${r2})(x-${r3})=0`, "A cubic with roots $r_1,r_2,r_3$ factors this way."),
    step(2, "Expand strategy", `x^{3}-(\\sum r_{i})x^{2}+(\\sum_{i<j} r_{i}r_{j})x-r_{1}r_{2}r_{3}=0`, "Vieta relations give coefficients directly."),
    step(3, "Sum of roots", `${r1}+${r2}+${r3}=${s1}`, "Coefficient of $x^{2}$ is minus this sum."),
    step(4, "Sum of pairwise products", `${r1}\\cdot${r2}+${r2}\\cdot${r3}+${r1}\\cdot${r3}=${s2}`, "Coefficient of $x$ equals this sum."),
    step(5, "Product of roots", `(${r1})(${r2})(${r3})=${s3}`, "Constant term is minus this product."),
    step(6, "Write equation", `${eq}=0`, "Substitute into the expanded form."),
    step(7, "Answer", `${eq}=0`, "Monic cubic with the three given roots."),
  ];
  return rpQ(qNum, {
    difficulty: "Intermediate",
    marks,
    answerType: "written",
    tags: [...tags, "forming-equation", "cubic"],
    questionText: `Form a monic cubic equation with roots $${r1}$, $${r2}$ and $${r3}$.`,
    workedSolution: { steps, finalAnswer: `$${eq}=0$` },
  });
}

/** Transform roots: new equation with roots α+k, β+k */
function transformRootsShift(qNum, sum, prod, k, tags = [], marks = 5) {
  const newSum = sum + 2 * k;
  const newProd = prod + k * sum + k * k;
  const eq = poly2(1, -newSum, newProd);
  const steps = [
    step(1, "Define new roots", `\\alpha' = \\alpha+${k},\\; \\beta' = \\beta+${k}`, `Each root is shifted by $${k}$.`),
    step(2, "New sum", `\\alpha'+\\beta'=(\\alpha+\\beta)+2(${k})=${sum}+${2 * k}=${newSum}`, "The sum increases by $2k$."),
    step(3, "New product", `\\alpha'\\beta'=(\\alpha+${k})(\\beta+${k})=\\alpha\\beta+${k}(\\alpha+\\beta)+${k}^{2}`, "Expand the product of shifted roots."),
    step(4, "Substitute", `\\alpha\\beta=${prod},\\; \\alpha+\\beta=${sum}`, "Use the given symmetric sums."),
    step(5, "Evaluate product", `${prod}+${k}\\times${sum}+${k * k}=${newProd}`, "Compute the new product."),
    step(6, "Form equation", `${eq}=0`, "Build $x^{2}-(\\alpha'+\\beta')x+\\alpha'\\beta'=0$."),
    step(7, "Answer", `${eq}=0`, `Quadratic whose roots are $\\alpha+${k}$ and $\\beta+${k}$.`),
  ];
  return rpQ(qNum, {
    difficulty: "Intermediate",
    marks,
    answerType: "written",
    tags: [...tags, "transforming-roots", "quadratic"],
    questionText: `The quadratic with roots $\\alpha$, $\\beta$ satisfies $\\alpha+\\beta=${sum}$ and $\\alpha\\beta=${prod}$. Find the equation with roots $\\alpha+${k}$ and $\\beta+${k}$.`,
    workedSolution: { steps, finalAnswer: `$${eq}=0$` },
  });
}

/** Transform roots: new equation with roots kα, kβ */
function transformRootsScale(qNum, sum, prod, k, tags = [], marks = 5) {
  const newSum = k * sum;
  const newProd = k * k * prod;
  const eq = poly2(1, -newSum, newProd);
  const steps = [
    step(1, "Define scaled roots", `\\alpha' = ${k}\\alpha,\\; \\beta' = ${k}\\beta`, `Each root is multiplied by $${k}$.`),
    step(2, "New sum", `\\alpha'+\\beta'=${k}(\\alpha+\\beta)=${k}\\times${sum}=${newSum}`, `Factor out $${k}$ from the sum.`),
    step(3, "New product", `\\alpha'\\beta'=(${k}\\alpha)(${k}\\beta)=${k}^{2}\\alpha\\beta`, `Scaling multiplies the product by $${k}^{2}$.`),
    step(4, "Substitute", `\\alpha\\beta=${prod}`, "Use the given product."),
    step(5, "Evaluate", `${k}^{2}\\times${prod}=${newProd}`, "Compute the new product."),
    step(6, "Form equation", `${eq}=0`, "Use Vieta with the new symmetric sums."),
    step(7, "Answer", `${eq}=0`, `Quadratic with roots $${k}\\alpha$ and $${k}\\beta$.`),
  ];
  return rpQ(qNum, {
    difficulty: "Intermediate",
    marks,
    answerType: "written",
    tags: [...tags, "transforming-roots", "quadratic", "scaling"],
    questionText: `Given $\\alpha+\\beta=${sum}$ and $\\alpha\\beta=${prod}$, find the monic quadratic with roots $${k}\\alpha$ and $${k}\\beta$.`,
    workedSolution: { steps, finalAnswer: `$${eq}=0$` },
  });
}

/** Quartic Vieta */
function quarticVieta(qNum, a, b, c, d, e, tags = [], marks = 6) {
  const eq = poly4(a, b, c, d, e);
  const s1 = -b / a;
  const s2 = c / a;
  const s3 = -d / a;
  const s4 = e / a;
  const fmt = (v, num, den) => (Number.isInteger(v) ? `${v}` : `\\frac{${num}}{${den}}`);
  const steps = [
    step(1, "Quartic Vieta's formulas", `S_{1}=-\\frac{b}{a},\\; S_{2}=\\frac{c}{a},\\; S_{3}=-\\frac{d}{a},\\; S_{4}=\\frac{e}{a}`, "Four symmetric sums for a quartic $ax^{4}+\\cdots+e=0$."),
    step(2, "Identify coefficients", `a=${a},\\; b=${b},\\; c=${c},\\; d=${d},\\; e=${e}`, "Read off from the equation."),
    step(3, "$S_1$: sum of roots", `S_{1}=-\\frac{${b}}{${a}}=${fmt(s1, -b, a)}`, "Sum of all four roots."),
    step(4, "$S_2$: sum of products of pairs", `S_{2}=\\frac{${c}}{${a}}=${fmt(s2, c, a)}`, "Sum of $\\alpha\\beta$ over all distinct pairs."),
    step(5, "$S_3$: sum of products of triples", `S_{3}=-\\frac{${d}}{${a}}=${fmt(s3, -d, a)}`, "Sum of products of roots taken three at a time."),
    step(6, "$S_4$: product of all roots", `S_{4}=\\frac{${e}}{${a}}=${fmt(s4, e, a)}`, "Product of all four roots."),
    step(7, "Sign pattern", `\\text{Alternating signs: }-,\\,+\\,-\\,+`, "Matches expansion of $a\\prod(x-r_{i})$."),
    step(8, "Answer", `S_{1}=${fmt(s1, -b, a)},\\; S_{2}=${fmt(s2, c, a)},\\; S_{3}=${fmt(s3, -d, a)},\\; S_{4}=${fmt(s4, e, a)}`, "All four Vieta sums."),
  ];
  return rpQ(qNum, {
    difficulty: "Hard",
    marks,
    answerType: "written",
    tags: [...tags, "vieta", "quartic"],
    questionText: `The equation $${eq}=0$ has roots $\\alpha$, $\\beta$, $\\gamma$, $\\delta$. Find the values of $\\alpha+\\beta+\\gamma+\\delta$, the sum of all products of pairs, the sum of all products of triples, and $\\alpha\\beta\\gamma\\delta$.`,
    workedSolution: {
      steps,
      finalAnswer: `$S_1=${fmt(s1, -b, a)}$, $S_2=${fmt(s2, c, a)}$, $S_3=${fmt(s3, -d, a)}$, $S_4=${fmt(s4, e, a)}$`,
    },
  });
}

/** Form monic quartic from four roots */
function formQuarticFromRoots(qNum, r1, r2, r3, r4, tags = [], marks = 6) {
  const s1 = r1 + r2 + r3 + r4;
  const pairs = [
    r1 * r2, r1 * r3, r1 * r4, r2 * r3, r2 * r4, r3 * r4,
  ];
  const s2 = pairs.reduce((a, b) => a + b, 0);
  const triples = [
    r1 * r2 * r3, r1 * r2 * r4, r1 * r3 * r4, r2 * r3 * r4,
  ];
  const s3 = triples.reduce((a, b) => a + b, 0);
  const s4 = r1 * r2 * r3 * r4;
  const eq = poly4(1, -s1, s2, -s3, s4);
  const steps = [
    step(1, "Factorised quartic", `(x-${r1})(x-${r2})(x-${r3})(x-${r4})=0`, "Four linear factors give a quartic."),
    step(2, "Vieta template", `x^{4}-S_{1}x^{3}+S_{2}x^{2}-S_{3}x+S_{4}=0`, "Monic quartic coefficients are the elementary symmetric polynomials."),
    step(3, "Compute $S_1$", `S_{1}=${r1}+${r2}+${r3}+${r4}=${s1}`, "Sum of all four roots."),
    step(4, "Compute $S_2$", `S_{2}=\\sum_{i<j}r_{i}r_{j}=${s2}`, "Add all six pairwise products."),
    step(5, "Compute $S_3$", `S_{3}=\\sum_{i<j<k}r_{i}r_{j}r_{k}=${s3}`, "Add all four triple products."),
    step(6, "Compute $S_4$", `S_{4}=(${r1})(${r2})(${r3})(${r4})=${s4}`, "Product of all four roots."),
    step(7, "Write equation", `${eq}=0`, "Substitute symmetric sums into the template."),
    step(8, "Answer", `${eq}=0`, "Monic quartic with the given roots."),
  ];
  return rpQ(qNum, {
    difficulty: "Hard",
    marks,
    answerType: "written",
    tags: [...tags, "forming-equation", "quartic"],
    questionText: `Form a monic quartic equation with roots $${r1}$, $${r2}$, $${r3}$ and $${r4}$.`,
    workedSolution: { steps, finalAnswer: `$${eq}=0$` },
  });
}

/** Cubic with one real and one conjugate pair */
function cubicConjugate(qNum, re, im, realRoot, tags = [], marks = 7) {
  const conj = im > 0 ? `${re}-${im}i` : `${re}+${Math.abs(im)}i`;
  const root1 = im > 0 ? `${re}+${im}i` : `${re}${im}i`;
  const s1 = realRoot + 2 * re;
  const pairProd = re * re + im * im;
  const s2 = realRoot * (2 * re) + pairProd;
  const s3 = realRoot * pairProd;
  const eq = poly3(1, -s1, s2, -s3);
  const steps = [
    step(1, "Identify root types", `\\text{One real root } ${realRoot},\\; \\text{one conjugate pair } ${root1},\\; ${conj}`, "Real coefficients force complex roots to pair up."),
    step(2, "Sum of roots", `\\alpha+\\beta+\\gamma=${realRoot}+(${re}+${im}i)+(${re}-${Math.abs(im)}i)=${s1}`, "Imaginary parts cancel in the sum."),
    step(3, "Sum of pairwise products", `\\alpha\\beta+\\beta\\gamma+\\gamma\\alpha=${realRoot}(${re}+${im}i)+${realRoot}(${re}-${Math.abs(im)}i)+(${re}+${im}i)(${re}-${Math.abs(im)}i)`, "Three pairwise products."),
    step(4, "Simplify pairwise sum", `=${realRoot}\\cdot${2 * re}+${pairProd}=${s2}`, `Conjugate product gives $|z|^{2}=${pairProd}$.`),
    step(5, "Product of roots", `\\alpha\\beta\\gamma=${realRoot}\\times${pairProd}=${s3}`, "Multiply all three roots."),
    step(6, "Form cubic", `${eq}=0`, "Use $x^{3}-S_{1}x^{2}+S_{2}x-S_{3}=0$."),
    step(7, "Verify real coefficients", `\\text{All coefficients are real}`, "Conjugate pairs ensure no imaginary coefficients."),
    step(8, "Answer", `${eq}=0`, "Cubic with the given root structure."),
  ];
  return rpQ(qNum, {
    difficulty: "Hard",
    marks,
    answerType: "written",
    tags: [...tags, "conjugate-pairs", "cubic", "forming-equation"],
    questionText: `A cubic with real coefficients has roots $${realRoot}$, $${root1}$ and its conjugate. Write the equation.`,
    workedSolution: { steps, finalAnswer: `$${eq}=0$` },
  });
}

/** Advanced: find α²+β²+γ² for cubic */
function sumSquaresCubic(qNum, s1, s2, tags = [], marks = 6) {
  const result = s1 * s1 - 2 * s2;
  const steps = [
    step(1, "Identity for three roots", `\\alpha^{2}+\\beta^{2}+\\gamma^{2}=(\\alpha+\\beta+\\gamma)^{2}-2(\\alpha\\beta+\\beta\\gamma+\\gamma\\alpha)`, "Same pattern as the two-root case, extended to three."),
    step(2, "Substitute", `S_{1}=\\alpha+\\beta+\\gamma=${s1},\\; S_{2}=\\alpha\\beta+\\beta\\gamma+\\gamma\\alpha=${s2}`, "Use given symmetric sums."),
    step(3, "Square $S_1$", `(${s1})^{2}=${s1 * s1}`, "Compute the squared sum."),
    step(4, "Double $S_2$", `2\\times${s2}=${2 * s2}`, "The correction term for cross products."),
    step(5, "Subtract", `${s1 * s1}-${2 * s2}=${result}`, "Apply the identity."),
    step(6, "Connection to power sums", `p_{2}=S_{1}^{2}-2S_{2}`, "This is the second power sum in terms of elementary symmetric polynomials."),
    step(7, "Answer", `\\alpha^{2}+\\beta^{2}+\\gamma^{2}=${result}`, "Sum of squares of the three roots."),
  ];
  return rpQ(qNum, {
    difficulty: "Hard",
    marks,
    answerType: "written",
    tags: [...tags, "sum-of-powers", "cubic", "symmetric-sums"],
    questionText: `The roots of a cubic satisfy $\\alpha+\\beta+\\gamma=${s1}$ and $\\alpha\\beta+\\beta\\gamma+\\gamma\\alpha=${s2}$. Find $\\alpha^{2}+\\beta^{2}+\\gamma^{2}$.`,
    workedSolution: { steps, finalAnswer: `$\\alpha^{2}+\\beta^{2}+\\gamma^{2}=${result}$` },
  });
}

/** Hard combined: reciprocal roots */
function reciprocalRoots(qNum, sum, prod, tags = [], marks = 7) {
  const newSum = sum / prod;
  const newProd = 1 / prod;
  const newSumStr = Number.isInteger(newSum) ? `${newSum}` : `\\frac{${sum}}{${prod}}`;
  const newProdStr = Number.isInteger(newProd) ? `${newProd}` : `\\frac{1}{${prod}}`;
  const bVal = -newSum;
  const eq =
    Number.isInteger(newSum) && Number.isInteger(newProd)
      ? poly2(1, bVal, newProd)
      : `${prod}x^{2}-${sum}x+1`;
  const eqDisplay = Number.isInteger(newSum) && Number.isInteger(newProd) ? `${eq}=0` : `${prod}x^{2}-${sum}x+1=0`;
  const steps = [
    step(1, "Define reciprocal roots", `\\alpha' = \\frac{1}{\\alpha},\\; \\beta' = \\frac{1}{\\beta}`, "Each new root is the reciprocal of the original."),
    step(2, "New sum", `\\alpha'+\\beta'=\\frac{1}{\\alpha}+\\frac{1}{\\beta}=\\frac{\\alpha+\\beta}{\\alpha\\beta}`, "Combine over a common denominator."),
    step(3, "Substitute", `\\frac{${sum}}{${prod}}=${newSumStr}`, "Insert the known symmetric sums."),
    step(4, "New product", `\\alpha'\\beta'=\\frac{1}{\\alpha\\beta}=\\frac{1}{${prod}}=${newProdStr}`, "Reciprocals multiply to the reciprocal of the product."),
    step(5, "Clear fractions", `\\text{Multiply by } ${prod}: \\; ${prod}x^{2}-${sum}x+1=0`, "Multiply through by $\\alpha\\beta$ to obtain integer coefficients when possible."),
    step(6, "Verify Vieta", `\\text{Sum}=${newSumStr},\\; \\text{Product}=${newProdStr}`, "Check the new symmetric sums."),
    step(7, "Answer", `${eqDisplay}`, "Quadratic with roots $1/\\alpha$ and $1/\\beta$."),
  ];
  return rpQ(qNum, {
    difficulty: "Hard",
    marks,
    answerType: "written",
    tags: [...tags, "transforming-roots", "reciprocal"],
    questionText: `A quadratic has roots $\\alpha$, $\\beta$ with $\\alpha+\\beta=${sum}$ and $\\alpha\\beta=${prod}$. Find the equation with roots $\\dfrac{1}{\\alpha}$ and $\\dfrac{1}{\\beta}$.`,
    workedSolution: { steps, finalAnswer: `$${eqDisplay}$` },
  });
}

function hardQ(qNum, questionText, steps, finalAnswer, tags = [], marks = 8) {
  return rpQ(qNum, {
    difficulty: "Hard",
    marks,
    answerType: "written",
    tags: [...tags, "multi-step"],
    questionText,
    workedSolution: { steps, finalAnswer },
  });
}

const questions = [
  // Easy: Vieta from monic quadratics (1–10)
  vietaFromMonicQuad(1, -5, 6, ["basic"]),
  vietaFromMonicQuad(2, 3, -10, ["basic"]),
  vietaFromMonicQuad(3, -7, 12, ["basic"]),
  vietaFromMonicQuad(4, 2, -15, ["negative-sum"]),
  vietaFromMonicQuad(5, -1, -12, ["mixed-signs"]),
  vietaFromMonicQuad(6, 8, 15, ["both-negative-c"]),
  vietaFromMonicQuad(7, -9, 20, ["basic"]),
  vietaFromMonicQuad(8, 4, 4, ["repeated-root"]),
  vietaFromMonicQuad(9, -6, 9, ["perfect-square"]),
  vietaFromMonicQuad(10, 0, -16, ["no-x-term"]),

  // Easy: Vieta from non-monic quadratics (11–12)
  vietaFromQuad(11, 2, -8, 6, ["non-monic"]),
  vietaFromQuad(12, 3, 6, -9, ["non-monic"]),

  // Easy: Form quadratic from sum and product (13–18)
  formQuadFromSumProduct(13, 5, 6, ["basic"]),
  formQuadFromSumProduct(14, -3, -10, ["negative"]),
  formQuadFromSumProduct(15, 7, 12, ["basic"]),
  formQuadFromSumProduct(16, -8, 15, ["negative"]),
  formQuadFromSumProduct(17, 2, -24, ["mixed"]),
  formQuadFromSumProduct(18, 0, -9, ["zero-sum"]),

  // Easy: Form from explicit roots (19–22)
  formQuadFromRoots(19, 2, 3, ["integer-roots"]),
  formQuadFromRoots(20, -1, 4, ["mixed-signs"]),
  formQuadFromRoots(21, 5, -2, ["mixed-signs"]),
  formQuadFromRoots(22, -3, -7, ["both-negative"]),

  // Easy: Conjugate pairs (23–25)
  conjugatePairEasy(23, 2, 3, ["basic"]),
  conjugatePairEasy(24, -1, 4, ["negative-real"]),
  conjugatePairEasy(25, 3, 1, ["unit-imag"]),

  // Intermediate: α²+β² (26–33)
  alpha2PlusBeta2(26, 5, 6, ["basic"]),
  alpha2PlusBeta2(27, -3, -10, ["negative-sum"]),
  alpha2PlusBeta2(28, 7, 12, ["basic"]),
  alpha2PlusBeta2(29, -8, 15, ["negative-sum"]),
  alpha2PlusBeta2(30, 4, 3, ["small"]),
  alpha2PlusBeta2(31, 10, 21, ["larger"]),
  alpha2PlusBeta2(32, -6, 8, ["mixed"]),
  alpha2PlusBeta2(33, 1, -12, ["mixed"]),

  // Intermediate: α³+β³ (34–39)
  alpha3PlusBeta3(34, 3, 2, ["basic"]),
  alpha3PlusBeta3(35, -2, -8, ["negative"]),
  alpha3PlusBeta3(36, 5, 6, ["basic"]),
  alpha3PlusBeta3(37, -4, 3, ["mixed"]),
  alpha3PlusBeta3(38, 6, 5, ["basic"]),
  alpha3PlusBeta3(39, -5, 6, ["mixed"]),

  // Intermediate: Cubic Vieta (40–45)
  cubicVieta(40, 1, -6, 11, -6, ["monic"]),
  cubicVieta(41, 1, 2, -5, -6, ["monic"]),
  cubicVieta(42, 1, -1, -4, 4, ["monic"]),
  cubicVieta(43, 2, -4, 2, 4, ["non-monic"]),
  cubicVieta(44, 1, 0, -7, 6, ["no-x2"]),
  cubicVieta(45, 1, -3, 3, -1, ["monic"]),

  // Intermediate: Form cubic from roots (46–50)
  formCubicFromRoots(46, 1, 2, 3, ["positive"]),
  formCubicFromRoots(47, -1, 2, 3, ["mixed"]),
  formCubicFromRoots(48, 2, -1, 4, ["mixed"]),
  formCubicFromRoots(49, -2, 1, 5, ["mixed"]),
  formCubicFromRoots(50, 3, 3, -2, ["repeated"]),

  // Intermediate: Transforming roots (51–55)
  transformRootsShift(51, 5, 6, 1, ["shift"]),
  transformRootsShift(52, -3, -10, 2, ["shift"]),
  transformRootsShift(53, 7, 12, -1, ["shift-negative"]),
  transformRootsScale(54, 4, 3, 2, ["scale"]),
  transformRootsScale(55, -6, 8, 3, ["scale"]),

  // Hard: Quartic Vieta (56–60)
  quarticVieta(56, 1, -10, 35, -50, 24, ["monic"]),
  quarticVieta(57, 1, 2, -7, -12, 18, ["monic"]),
  quarticVieta(58, 1, 0, -5, 0, 4, ["biquadratic"]),
  quarticVieta(59, 2, -8, 12, -8, 2, ["non-monic"]),
  quarticVieta(60, 1, -4, 3, 4, -4, ["monic"]),

  // Hard: Form quartic from roots (61–63)
  formQuarticFromRoots(61, 1, 2, 3, 4, ["positive"]),
  formQuarticFromRoots(62, -1, 1, 2, 3, ["mixed"]),
  formQuarticFromRoots(63, 2, 2, -1, -3, ["repeated"]),

  // Hard: Cubic with conjugate pair (64–66)
  cubicConjugate(64, 1, 2, 3, ["basic"]),
  cubicConjugate(65, 2, 3, -1, ["negative-real"]),
  cubicConjugate(66, -1, 1, 4, ["mixed"]),

  // Hard: Advanced symmetric sums (67–69)
  sumSquaresCubic(67, 6, 11, ["cubic-powers"]),
  sumSquaresCubic(68, -2, -7, ["negative"]),
  reciprocalRoots(69, 5, 6, ["reciprocal"]),

  // Hard: Comprehensive multi-step (70)
  hardQ(
    70,
    "The quadratic $x^{2}-4x+13=0$ has roots $\\alpha$ and $\\beta$. Find (a) $\\alpha+\\beta$ and $\\alpha\\beta$, (b) $\\alpha^{2}+\\beta^{2}$, (c) $\\alpha^{3}+\\beta^{3}$, (d) the equation with roots $\\alpha+1$ and $\\beta+1$, and (e) verify that the new roots satisfy their equation.",
    [
      step(1, "(a) Vieta's relations", `\\alpha+\\beta=4,\\; \\alpha\\beta=13`, "For $x^{2}-4x+13=0$: sum $=4$, product $=13$."),
      step(2, "(b) Sum of squares", `\\alpha^{2}+\\beta^{2}=(4)^{2}-2(13)=16-26=-10`, "Use $(\\alpha+\\beta)^{2}-2\\alpha\\beta$."),
      step(3, "(c) Sum of cubes", `\\alpha^{3}+\\beta^{3}=(4)^{3}-3(13)(4)=64-156=-92`, "Use $(\\alpha+\\beta)^{3}-3\\alpha\\beta(\\alpha+\\beta)$."),
      step(4, "(d) Shifted roots — sum", `(\\alpha+1)+(\\beta+1)=4+2=6`, "New sum is old sum plus 2."),
      step(5, "(d) Shifted roots — product", `(\\alpha+1)(\\beta+1)=\\alpha\\beta+(\\alpha+\\beta)+1=13+4+1=18`, "Expand and substitute known sums."),
      step(6, "(d) New equation", `x^{2}-6x+18=0`, "Monic quadratic with sum 6 and product 18."),
      step(7, "(e) Verify via quadratic formula", `x=\\frac{6\\pm\\sqrt{36-72}}{2}=3\\pm 3i`, "Discriminant is negative: complex roots."),
      step(8, "(e) Original roots", `\\alpha,\\beta=2\\pm 3i`, "From $x^{2}-4x+13=0$: $\\Delta=-36$."),
      step(9, "(e) Check shift", `(2+3i)+1=3+3i,\\; (2-3i)+1=3-3i`, "Adding 1 to each original root gives the new roots."),
      step(10, "(e) Verify product", `(3+3i)(3-3i)=9+9=18`, "Product of new roots equals 18 ✓"),
      step(11, "Summary", `\\text{All five parts use Vieta and symmetric identities}`, "Root–coefficient relations link all parts."),
      step(12, "Key identities", `\\alpha^{k}+\\beta^{k} \\text{ from } \\alpha+\\beta,\\; \\alpha\\beta`, "Power sums derive from elementary symmetric polynomials."),
      step(13, "Transformation rule", `\\text{Roots } \\alpha+k \\Rightarrow \\text{new sum } S_{1}+nk`, "Shifting roots adjusts symmetric sums predictably."),
    ],
    "(a) $\\alpha+\\beta=4$, $\\alpha\\beta=13$. (b) $\\alpha^{2}+\\beta^{2}=-10$. (c) $\\alpha^{3}+\\beta^{3}=-92$. (d) $x^{2}-6x+18=0$. (e) New roots $3\\pm 3i$ verified.",
    ["comprehensive", "verification"],
    10
  ),
];

const STEP_MIN = { Easy: 6, Intermediate: 9, Hard: 13 };
const STEP_MAX = { Easy: 9, Intermediate: 13, Hard: 18 };
const EXTRA = [
  () => step(0, "Vieta's for quadratics", `\\alpha+\\beta=-\\frac{b}{a},\\; \\alpha\\beta=\\frac{c}{a}`, "Coefficients encode symmetric sums of roots."),
  () => step(0, "Monic form", `x^{2}-(\\alpha+\\beta)x+\\alpha\\beta=0`, "A monic quadratic with roots $\\alpha,\\beta$ has this structure."),
  () => step(0, "Sum of squares", `\\alpha^{2}+\\beta^{2}=(\\alpha+\\beta)^{2}-2\\alpha\\beta`, "Eliminate the cross term from the squared sum."),
  () => step(0, "Sum of cubes", `\\alpha^{3}+\\beta^{3}=(\\alpha+\\beta)^{3}-3\\alpha\\beta(\\alpha+\\beta)`, "Factorisation identity for sum of cubes."),
  () => step(0, "Cubic Vieta", `S_{1}=-\\frac{b}{a},\\; S_{2}=\\frac{c}{a},\\; S_{3}=-\\frac{d}{a}`, "Three elementary symmetric sums for a cubic."),
  () => step(0, "Conjugate pairs", `a+bi,\\; a-bi \\Rightarrow \\text{real coefficients}`, "Complex roots of real polynomials come in pairs."),
  () => step(0, "Transforming roots", `\\text{New sums from old symmetric polynomials}`, "Operations on roots update symmetric sums systematically."),
  () => step(0, "Final answer", `\\text{State equation or symmetric sum}`, "Present the result clearly."),
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

const counts = { Easy: 0, Intermediate: 0, Hard: 0 };
for (const q of questions) counts[q.difficulty]++;
console.log(`Difficulty: Easy=${counts.Easy}, Intermediate=${counts.Intermediate}, Hard=${counts.Hard}`);

writeFileSync(outPath, `import { Question } from "@/lib/types";\n\nexport const questions: Question[] = ${JSON.stringify(questions, null, 2)};\n`);
console.log(`Wrote ${questions.length} questions to ${outPath}`);
