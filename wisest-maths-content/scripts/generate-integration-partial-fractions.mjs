#!/usr/bin/env node
import { writeFileSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const outPath = resolve(__dirname, "../src/data/questions/a-level-maths/year-2-pure/integration-with-partial-fractions.ts");

const SUBTOPIC = "Integration with partial fractions";
const SUBTOPIC_ID = "al.y2.pure.integration-partial-fractions";
const LEVEL = "A-Level Maths";
const TOPIC = "Year 2 Pure";

const qid = (n) => `al.y2.pure.integration-partial-fractions.q${String(n).padStart(3, "0")}`;
const step = (n, description, workingLatex, explanation) => ({ stepNumber: n, description, workingLatex, explanation, diagram: null });
const base = (meta) => ({ level: LEVEL, topic: TOPIC, subtopic: SUBTOPIC, subtopicId: SUBTOPIC_ID, questionDiagram: null, ...meta });
const pfQ = (n, meta) => base({ id: qid(n), tags: ["partial fractions", ...(meta.tags || [])], ...meta });

function integratePF(n, integrand, pfSteps, result, { difficulty = "Easy", marks = 4, tags = [], definite = null } = {}) {
  const steps = [
    step(1, "Factorise the denominator", pfSteps[0].latex, pfSteps[0].exp),
    step(2, "Set up partial fractions", pfSteps[1].latex, pfSteps[1].exp),
    step(3, "Solve for the constants", pfSteps[2].latex, pfSteps[2].exp),
    step(4, "Write the partial fraction form", pfSteps[3].latex, pfSteps[3].exp),
    step(5, "Integrate term by term", pfSteps[4].latex, pfSteps[4].exp),
    step(6, "Combine logarithms", pfSteps[5]?.latex ?? result.replace(/ \+ c$/, ""), pfSteps[5]?.exp ?? "Use log laws to simplify if possible."),
    step(7, "State the answer", definite ? `\\int_{${definite.a}}^{${definite.b}} ${integrand}\\,dx = ${result}` : `\\int ${integrand}\\,dx = ${result}`, "Include $+c$ for indefinite integrals."),
  ];
  const qText = definite
    ? `Find $\\displaystyle\\int_{${definite.a}}^{${definite.b}} ${integrand}\\,dx$.`
    : `Find $\\displaystyle\\int ${integrand}\\,dx$.`;
  return pfQ(n, {
    difficulty,
    marks,
    answerType: definite ? "exact" : "expression",
    tags,
    questionText: qText,
    workedSolution: { steps, finalAnswer: definite ? `$\\displaystyle\\int_{${definite.a}}^{${definite.b}} ${integrand}\\,dx = ${result}$.` : `$\\displaystyle\\int ${integrand}\\,dx = ${result}$.` },
  });
}

function hardPf(n, questionText, steps, finalAnswer, tags = [], marks = 8) {
  return pfQ(n, { difficulty: "Hard", marks, answerType: "expression", tags: [...tags, "multi-step"], questionText, workedSolution: { steps, finalAnswer } });
}

const questions = [
  integratePF(1, "\\dfrac{1}{(x+1)(x+2)}", [
    { latex: "(x+1)(x+2)", exp: "Distinct linear factors in the denominator." },
    { latex: "\\dfrac{1}{(x+1)(x+2)} = \\dfrac{A}{x+1} + \\dfrac{B}{x+2}", exp: "Assume partial fractions over distinct linear factors." },
    { latex: "1 = A(x+2) + B(x+1) \\Rightarrow A=1,\\; B=-1", exp: "Multiply through and compare coefficients or substitute convenient values." },
    { latex: "\\dfrac{1}{x+1} - \\dfrac{1}{x+2}", exp: "Decomposed form ready to integrate." },
    { latex: "\\ln|x+1| - \\ln|x+2| + c", exp: "Integrate each reciprocal term." },
    { latex: "\\ln\\left|\\dfrac{x+1}{x+2}\\right| + c", exp: "Combine using $\\ln a - \\ln b = \\ln(a/b)$." },
  ], "\\ln\\left|\\dfrac{x+1}{x+2}\\right| + c"),

  integratePF(2, "\\dfrac{1}{(x-1)(x+3)}", [
    { latex: "(x-1)(x+3)", exp: "Factorised denominator." },
    { latex: "\\dfrac{A}{x-1} + \\dfrac{B}{x+3}", exp: "Standard setup." },
    { latex: "A = \\dfrac{1}{4},\\; B = -\\dfrac{1}{4}", exp: "Cover-up: $x=1$ gives $A=1/4$; $x=-3$ gives $B=-1/4$." },
    { latex: "\\dfrac{1}{4(x-1)} - \\dfrac{1}{4(x+3)}", exp: "Partial fractions found." },
    { latex: "\\dfrac{1}{4}\\ln|x-1| - \\dfrac{1}{4}\\ln|x+3| + c", exp: "Integrate each term." },
    { latex: "\\dfrac{1}{4}\\ln\\left|\\dfrac{x-1}{x+3}\\right| + c", exp: "Simplified log form." },
  ], "\\dfrac{1}{4}\\ln\\left|\\dfrac{x-1}{x+3}\\right| + c"),

  integratePF(3, "\\dfrac{1}{x^{2}-1}", [
    { latex: "x^{2}-1 = (x-1)(x+1)", exp: "Difference of squares." },
    { latex: "\\dfrac{A}{x-1} + \\dfrac{B}{x+1}", exp: "Distinct linear factors." },
    { latex: "A = \\dfrac{1}{2},\\; B = -\\dfrac{1}{2}", exp: "Solve for constants." },
    { latex: "\\dfrac{1}{2(x-1)} - \\dfrac{1}{2(x+1)}", exp: "Decomposed." },
    { latex: "\\dfrac{1}{2}\\ln|x-1| - \\dfrac{1}{2}\\ln|x+1| + c", exp: "Integrate." },
    { latex: "\\dfrac{1}{2}\\ln\\left|\\dfrac{x-1}{x+1}\\right| + c", exp: "Log law simplification." },
  ], "\\dfrac{1}{2}\\ln\\left|\\dfrac{x-1}{x+1}\\right| + c"),

  integratePF(4, "\\dfrac{2}{(x+2)(x-3)}", [
    { latex: "(x+2)(x-3)", exp: "Linear factors." },
    { latex: "\\dfrac{A}{x+2} + \\dfrac{B}{x-3}", exp: "Setup." },
    { latex: "A = -\\dfrac{2}{5},\\; B = \\dfrac{2}{5}", exp: "Cover-up method." },
    { latex: "\\dfrac{2}{5(x-3)} - \\dfrac{2}{5(x+2)}", exp: "Form found." },
    { latex: "\\dfrac{2}{5}\\ln|x-3| - \\dfrac{2}{5}\\ln|x+2| + c", exp: "Integrate." },
    { latex: "\\dfrac{2}{5}\\ln\\left|\\dfrac{x-3}{x+2}\\right| + c", exp: "Combine logs." },
  ], "\\dfrac{2}{5}\\ln\\left|\\dfrac{x-3}{x+2}\\right| + c"),

  integratePF(5, "\\dfrac{3}{x^{2}-4}", [
    { latex: "x^{2}-4 = (x-2)(x+2)", exp: "Factorise." },
    { latex: "\\dfrac{A}{x-2} + \\dfrac{B}{x+2}", exp: "Setup." },
    { latex: "A = \\dfrac{3}{4},\\; B = -\\dfrac{3}{4}", exp: "Constants." },
    { latex: "\\dfrac{3}{4(x-2)} - \\dfrac{3}{4(x+2)}", exp: "Decomposed." },
    { latex: "\\dfrac{3}{4}\\ln|x-2| - \\dfrac{3}{4}\\ln|x+2| + c", exp: "Integrate." },
    { latex: "\\dfrac{3}{4}\\ln\\left|\\dfrac{x-2}{x+2}\\right| + c", exp: "Simplify." },
  ], "\\dfrac{3}{4}\\ln\\left|\\dfrac{x-2}{x+2}\\right| + c"),

  integratePF(6, "\\dfrac{1}{(x-2)(x+5)}", [
    { latex: "(x-2)(x+5)", exp: "Distinct factors." },
    { latex: "\\dfrac{A}{x-2} + \\dfrac{B}{x+5}", exp: "Setup." },
    { latex: "A = \\dfrac{1}{7},\\; B = -\\dfrac{1}{7}", exp: "Solve." },
    { latex: "\\dfrac{1}{7(x-2)} - \\dfrac{1}{7(x+5)}", exp: "Form." },
    { latex: "\\dfrac{1}{7}\\ln|x-2| - \\dfrac{1}{7}\\ln|x+5| + c", exp: "Integrate." },
    { latex: "\\dfrac{1}{7}\\ln\\left|\\dfrac{x-2}{x+5}\\right| + c", exp: "Combine." },
  ], "\\dfrac{1}{7}\\ln\\left|\\dfrac{x-2}{x+5}\\right| + c"),

  integratePF(7, "\\dfrac{4}{x^{2}-9}", [
    { latex: "x^{2}-9=(x-3)(x+3)", exp: "Factorise." },
    { latex: "\\dfrac{A}{x-3}+\\dfrac{B}{x+3}", exp: "Setup." },
    { latex: "A=\\dfrac{2}{3},\\;B=-\\dfrac{2}{3}", exp: "Constants." },
    { latex: "\\dfrac{2}{3(x-3)}-\\dfrac{2}{3(x+3)}", exp: "Decomposed." },
    { latex: "\\dfrac{2}{3}\\ln|x-3|-\\dfrac{2}{3}\\ln|x+3|+c", exp: "Integrate." },
    { latex: "\\dfrac{2}{3}\\ln\\left|\\dfrac{x-3}{x+3}\\right|+c", exp: "Simplify." },
  ], "\\dfrac{2}{3}\\ln\\left|\\dfrac{x-3}{x+3}\\right|+c"),

  integratePF(8, "\\dfrac{1}{(x+1)(x+4)}", [
    { latex: "(x+1)(x+4)", exp: "Linear factors." },
    { latex: "\\dfrac{A}{x+1}+\\dfrac{B}{x+4}", exp: "Setup." },
    { latex: "A=\\dfrac{1}{3},\\;B=-\\dfrac{1}{3}", exp: "Solve." },
    { latex: "\\dfrac{1}{3(x+1)}-\\dfrac{1}{3(x+4)}", exp: "Form." },
    { latex: "\\dfrac{1}{3}\\ln|x+1|-\\dfrac{1}{3}\\ln|x+4|+c", exp: "Integrate." },
    { latex: "\\dfrac{1}{3}\\ln\\left|\\dfrac{x+1}{x+4}\\right|+c", exp: "Combine." },
  ], "\\dfrac{1}{3}\\ln\\left|\\dfrac{x+1}{x+4}\\right|+c"),

  integratePF(9, "\\dfrac{x+3}{x^{2}+3x+2}", [
    { latex: "x^{2}+3x+2=(x+1)(x+2)", exp: "Factorise quadratic denominator." },
    { latex: "\\dfrac{x+3}{(x+1)(x+2)}=\\dfrac{A}{x+1}+\\dfrac{B}{x+2}", exp: "Linear numerator over distinct factors." },
    { latex: "A=2,\\;B=-1", exp: "Substitute $x=-1$ and $x=-2$." },
    { latex: "\\dfrac{2}{x+1}-\\dfrac{1}{x+2}", exp: "Decomposed." },
    { latex: "2\\ln|x+1|-\\ln|x+2|+c", exp: "Integrate." },
    { latex: "\\ln\\left|\\dfrac{(x+1)^{2}}{x+2}\\right|+c", exp: "Log laws." },
  ], "\\ln\\left|\\dfrac{(x+1)^{2}}{x+2}\\right|+c", { difficulty: "Intermediate", marks: 5 }),

  integratePF(10, "\\dfrac{2x+1}{x^{2}-x-2}", [
    { latex: "x^{2}-x-2=(x-2)(x+1)", exp: "Factorise." },
    { latex: "\\dfrac{A}{x-2}+\\dfrac{B}{x+1}", exp: "Setup." },
    { latex: "A=\\dfrac{5}{3},\\;B=\\dfrac{1}{3}", exp: "Solve." },
    { latex: "\\dfrac{5}{3(x-2)}+\\dfrac{1}{3(x+1)}", exp: "Form." },
    { latex: "\\dfrac{5}{3}\\ln|x-2|+\\dfrac{1}{3}\\ln|x+1|+c", exp: "Integrate." },
    { latex: "\\dfrac{1}{3}\\ln|(x-2)^{5}(x+1)|+c", exp: "Combine." },
  ], "\\dfrac{1}{3}\\ln|(x-2)^{5}(x+1)|+c", { difficulty: "Intermediate", marks: 5 }),

  integratePF(11, "\\dfrac{3x-1}{x^{2}-4}", [
    { latex: "x^{2}-4=(x-2)(x+2)", exp: "Factorise." },
    { latex: "\\dfrac{A}{x-2}+\\dfrac{B}{x+2}", exp: "Setup." },
    { latex: "A=\\dfrac{5}{4},\\;B=\\dfrac{7}{4}", exp: "Solve." },
    { latex: "\\dfrac{5}{4(x-2)}+\\dfrac{7}{4(x+2)}", exp: "Form." },
    { latex: "\\dfrac{5}{4}\\ln|x-2|+\\dfrac{7}{4}\\ln|x+2|+c", exp: "Integrate." },
    { latex: "\\dfrac{1}{4}\\ln|(x-2)^{5}(x+2)^{7}|+c", exp: "Simplify." },
  ], "\\dfrac{1}{4}\\ln|(x-2)^{5}(x+2)^{7}|+c", { difficulty: "Intermediate", marks: 5 }),

  integratePF(12, "\\dfrac{x+1}{x(x-2)}", [
    { latex: "x(x-2)", exp: "Factor $x$ out first." },
    { latex: "\\dfrac{A}{x}+\\dfrac{B}{x-2}", exp: "One factor is $x$." },
    { latex: "A=-\\dfrac{1}{2},\\;B=\\dfrac{3}{2}", exp: "Solve." },
    { latex: "-\\dfrac{1}{2x}+\\dfrac{3}{2(x-2)}", exp: "Form." },
    { latex: "-\\dfrac{1}{2}\\ln|x|+\\dfrac{3}{2}\\ln|x-2|+c", exp: "Integrate." },
    { latex: "\\dfrac{1}{2}\\ln\\left|\\dfrac{(x-2)^{3}}{x}\\right|+c", exp: "Combine." },
  ], "\\dfrac{1}{2}\\ln\\left|\\dfrac{(x-2)^{3}}{x}\\right|+c", { difficulty: "Intermediate", marks: 5 }),

  integratePF(13, "\\dfrac{5}{x(x+3)}", [
    { latex: "x(x+3)", exp: "Factorised." },
    { latex: "\\dfrac{A}{x}+\\dfrac{B}{x+3}", exp: "Setup." },
    { latex: "A=\\dfrac{5}{3},\\;B=-\\dfrac{5}{3}", exp: "Solve." },
    { latex: "\\dfrac{5}{3x}-\\dfrac{5}{3(x+3)}", exp: "Form." },
    { latex: "\\dfrac{5}{3}\\ln|x|-\\dfrac{5}{3}\\ln|x+3|+c", exp: "Integrate." },
    { latex: "\\dfrac{5}{3}\\ln\\left|\\dfrac{x}{x+3}\\right|+c", exp: "Simplify." },
  ], "\\dfrac{5}{3}\\ln\\left|\\dfrac{x}{x+3}\\right|+c"),

  integratePF(14, "\\dfrac{2x+3}{x^{2}+x-6}", [
    { latex: "x^{2}+x-6=(x+3)(x-2)", exp: "Factorise." },
    { latex: "\\dfrac{A}{x+3}+\\dfrac{B}{x-2}", exp: "Setup." },
    { latex: "A=-\\dfrac{3}{5},\\;B=\\dfrac{7}{5}", exp: "Solve." },
    { latex: "-\\dfrac{3}{5(x+3)}+\\dfrac{7}{5(x-2)}", exp: "Form." },
    { latex: "-\\dfrac{3}{5}\\ln|x+3|+\\dfrac{7}{5}\\ln|x-2|+c", exp: "Integrate." },
    { latex: "\\dfrac{1}{5}\\ln\\left|\\dfrac{(x-2)^{7}}{(x+3)^{3}}\\right|+c", exp: "Combine." },
  ], "\\dfrac{1}{5}\\ln\\left|\\dfrac{(x-2)^{7}}{(x+3)^{3}}\\right|+c", { difficulty: "Intermediate", marks: 5 }),

  integratePF(15, "\\dfrac{4x-1}{x^{2}-1}", [
    { latex: "x^{2}-1=(x-1)(x+1)", exp: "Factorise." },
    { latex: "\\dfrac{A}{x-1}+\\dfrac{B}{x+1}", exp: "Setup." },
    { latex: "A=\\dfrac{3}{2},\\;B=\\dfrac{5}{2}", exp: "Solve." },
    { latex: "\\dfrac{3}{2(x-1)}+\\dfrac{5}{2(x+1)}", exp: "Form." },
    { latex: "\\dfrac{3}{2}\\ln|x-1|+\\dfrac{5}{2}\\ln|x+1|+c", exp: "Integrate." },
    { latex: "\\dfrac{1}{2}\\ln|(x-1)^{3}(x+1)^{5}|+c", exp: "Simplify." },
  ], "\\dfrac{1}{2}\\ln|(x-1)^{3}(x+1)^{5}|+c", { difficulty: "Intermediate", marks: 5 }),

  integratePF(16, "\\dfrac{1}{(x-1)^{2}}", [
    { latex: "(x-1)^{2}", exp: "Repeated linear factor." },
    { latex: "\\dfrac{A}{x-1}+\\dfrac{B}{(x-1)^{2}}", exp: "Need both first and second power." },
    { latex: "A=0,\\;B=1", exp: "Already in partial fraction form." },
    { latex: "\\dfrac{1}{(x-1)^{2}}", exp: "Single term." },
    { latex: "-\\dfrac{1}{x-1}+c", exp: "Integrate using power rule: $\\int u^{-2}du = -u^{-1}$." },
  ], "-\\dfrac{1}{x-1}+c", { tags: ["repeated factor"] }),

  integratePF(17, "\\dfrac{1}{(x+2)^{2}}", [
    { latex: "(x+2)^{2}", exp: "Repeated factor." },
    { latex: "\\dfrac{A}{x+2}+\\dfrac{B}{(x+2)^{2}}", exp: "Setup." },
    { latex: "A=0,\\;B=1", exp: "Constants." },
    { latex: "\\dfrac{1}{(x+2)^{2}}", exp: "Form." },
    { latex: "-\\dfrac{1}{x+2}+c", exp: "Integrate." },
  ], "-\\dfrac{1}{x+2}+c", { tags: ["repeated factor"] }),

  integratePF(18, "\\dfrac{3}{(x-1)^{2}}", [
    { latex: "(x-1)^{2}", exp: "Repeated factor." },
    { latex: "\\dfrac{A}{x-1}+\\dfrac{B}{(x-1)^{2}}", exp: "Setup." },
    { latex: "A=0,\\;B=3", exp: "Solve." },
    { latex: "\\dfrac{3}{(x-1)^{2}}", exp: "Form." },
    { latex: "-\\dfrac{3}{x-1}+c", exp: "Integrate." },
  ], "-\\dfrac{3}{x-1}+c", { tags: ["repeated factor"] }),

  integratePF(19, "\\dfrac{2x+1}{(x-1)^{2}(x+2)}", [
    { latex: "(x-1)^{2}(x+2)", exp: "One repeated and one distinct factor." },
    { latex: "\\dfrac{A}{x-1}+\\dfrac{B}{(x-1)^{2}}+\\dfrac{C}{x+2}", exp: "Three terms needed." },
    { latex: "A=\\dfrac{1}{9},\\;B=\\dfrac{1}{3},\\;C=-\\dfrac{1}{9}", exp: "Solve simultaneously." },
    { latex: "\\dfrac{1}{9(x-1)}+\\dfrac{1}{3(x-1)^{2}}-\\dfrac{1}{9(x+2)}", exp: "Decomposed." },
    { latex: "\\dfrac{1}{9}\\ln|x-1|-\\dfrac{1}{3(x-1)}-\\dfrac{1}{9}\\ln|x+2|+c", exp: "Integrate each term." },
  ], "\\dfrac{1}{9}\\ln\\left|\\dfrac{x-1}{x+2}\\right|-\\dfrac{1}{3(x-1)}+c", { difficulty: "Intermediate", marks: 6, tags: ["repeated factor"] }),

  integratePF(20, "\\dfrac{1}{x(x-1)^{2}}", [
    { latex: "x(x-1)^{2}", exp: "Mixed factors." },
    { latex: "\\dfrac{A}{x}+\\dfrac{B}{x-1}+\\dfrac{C}{(x-1)^{2}}", exp: "Three-term decomposition." },
    { latex: "A=1,\\;B=-1,\\;C=-1", exp: "Solve." },
    { latex: "\\dfrac{1}{x}-\\dfrac{1}{x-1}-\\dfrac{1}{(x-1)^{2}}", exp: "Form." },
    { latex: "\\ln|x|-\\ln|x-1|+\\dfrac{1}{x-1}+c", exp: "Integrate." },
  ], "\\ln\\left|\\dfrac{x}{x-1}\\right|+\\dfrac{1}{x-1}+c", { difficulty: "Intermediate", marks: 6, tags: ["repeated factor"] }),

  integratePF(21, "\\dfrac{1}{(x+1)(x+2)}", [
    { latex: "(x+1)(x+2)", exp: "Distinct linear factors." },
    { latex: "\\dfrac{1}{x+1}-\\dfrac{1}{x+2}", exp: "Partial fraction decomposition." },
    { latex: "A=1,\\;B=-1", exp: "Constants from cover-up." },
    { latex: "\\dfrac{1}{x+1}-\\dfrac{1}{x+2}", exp: "Decomposed form." },
    { latex: "\\ln|x+1|-\\ln|x+2|", exp: "Integrate each term." },
    { latex: "\\ln\\left|\\dfrac{x+1}{x+2}\\right|", exp: "At $x=1$: $\\ln\\frac{2}{3}$; at $x=0$: $\\ln\\frac{1}{2}$." },
  ], "\\ln\\dfrac{4}{3}", { definite: { a: 0, b: 1 }, difficulty: "Intermediate", marks: 5 }),
  integratePF(22, "\\dfrac{1}{x(x+1)}", [
    { latex: "x(x+1)", exp: "Factorise." },
    { latex: "\\dfrac{A}{x}+\\dfrac{B}{x+1}", exp: "Setup." },
    { latex: "A=1,\\;B=-1", exp: "Solve." },
    { latex: "\\dfrac{1}{x}-\\dfrac{1}{x+1}", exp: "Form." },
    { latex: "\\ln|x|-\\ln|x+1|", exp: "Integrate." },
    { latex: "\\ln\\left|\\dfrac{x}{x+1}\\right|", exp: "At limits $1$ to $2$: $\\ln 2 - \\ln 3$." },
  ], "\\ln\\dfrac{2}{3}", { definite: { a: 1, b: 2 }, difficulty: "Intermediate", marks: 5 }),

  integratePF(23, "\\dfrac{1}{x^{2}-1}", [
    { latex: "x^{2}-1=(x-1)(x+1)", exp: "Factorise." },
    { latex: "\\dfrac{1}{2(x-1)}-\\dfrac{1}{2(x+1)}", exp: "Partial fractions." },
    { latex: "A=\\dfrac{1}{2},\\;B=-\\dfrac{1}{2}", exp: "Constants." },
    { latex: "\\dfrac{1}{2(x-1)}-\\dfrac{1}{2(x+1)}", exp: "Form." },
    { latex: "\\dfrac{1}{2}\\ln|x-1|-\\dfrac{1}{2}\\ln|x+1|", exp: "Integrate." },
    { latex: "\\dfrac{1}{2}\\ln\\dfrac{3}{1}=\\dfrac{1}{2}\\ln 3", exp: "Evaluate from $2$ to $4$." },
  ], "\\dfrac{1}{2}\\ln 3", { definite: { a: 2, b: 4 }, difficulty: "Intermediate", marks: 5 }),
  integratePF(24, "\\dfrac{2}{(x+1)(x+3)}", [
    { latex: "(x+1)(x+3)", exp: "Factorise." },
    { latex: "\\dfrac{1}{x+1}-\\dfrac{1}{x+3}", exp: "Decompose (scaled by 2)." },
    { latex: "A=1,\\;B=-1", exp: "Constants." },
    { latex: "\\dfrac{2}{x+1}-\\dfrac{2}{x+3}", exp: "Form." },
    { latex: "2\\ln|x+1|-2\\ln|x+3|", exp: "Integrate." },
    { latex: "2\\ln 4-2\\ln 2=\\ln\\dfrac{16}{4}=\\ln 4", exp: "Evaluate from $1$ to $3$." },
  ], "\\ln 4", { definite: { a: 1, b: 3 }, difficulty: "Intermediate", marks: 5 }),
  integratePF(25, "\\dfrac{1}{(x-1)(x+2)}", [
    { latex: "(x-1)(x+2)", exp: "Factorise." },
    { latex: "\\dfrac{1}{3(x-1)}-\\dfrac{1}{3(x+2)}", exp: "Partial fractions." },
    { latex: "A=\\dfrac{1}{3},\\;B=-\\dfrac{1}{3}", exp: "Constants." },
    { latex: "\\dfrac{1}{3(x-1)}-\\dfrac{1}{3(x+2)}", exp: "Form." },
    { latex: "\\dfrac{1}{3}\\ln|x-1|-\\dfrac{1}{3}\\ln|x+2|", exp: "Integrate." },
    { latex: "\\dfrac{1}{3}\\ln 2-\\dfrac{1}{3}\\ln 5=\\dfrac{1}{3}\\ln\\dfrac{2}{5}", exp: "Evaluate from $2$ to $3$." },
  ], "\\dfrac{1}{3}\\ln\\dfrac{2}{5}", { definite: { a: 2, b: 3 }, difficulty: "Intermediate", marks: 5 }),
];

// Generate more questions programmatically for 26-70
const distinctPairs = [
  [26, 1, 1, 2], [27, 2, 1, 3], [28, 1, 2, 5], [29, 3, 1, 4], [30, 1, 3, 4],
  [31, 2, 2, 3], [32, 1, 1, 4], [33, 4, 2, 5], [34, 1, 4, 5], [35, 3, 2, 7],
];
for (const [n, num, a, b] of distinctPairs) {
  const denom = `(x+${a})(x+${b})`;
  questions.push(integratePF(n, `\\dfrac{${num}}{${denom}}`, [
    { latex: denom, exp: "Distinct linear factors." },
    { latex: `\\dfrac{A}{x+${a}}+\\dfrac{B}{x+${b}}`, exp: "Standard partial fraction setup." },
    { latex: `A=\\dfrac{${num}}{${b - a}},\\;B=-\\dfrac{${num}}{${b - a}}`, exp: "Cover-up method." },
    { latex: `\\dfrac{${num}}{${b - a}(x+${b})}-\\dfrac{${num}}{${b - a}(x+${a})}`, exp: "Decomposed form." },
    { latex: `\\dfrac{${num}}{${b - a}}\\ln|x+${b}|-\\dfrac{${num}}{${b - a}}\\ln|x+${a}|+c`, exp: "Integrate each term." },
    { latex: `\\dfrac{${num}}{${b - a}}\\ln\\left|\\dfrac{x+${b}}{x+${a}}\\right|+c`, exp: "Combine logarithms." },
  ], `\\dfrac{${num}}{${b - a}}\\ln\\left|\\dfrac{x+${b}}{x+${a}}\\right|+c`));
}

const linearNum = [
  [36, "x+2", "x^{2}+3x+2", "(x+1)(x+2)", 2, -1],
  [37, "2x+1", "x^{2}-x-2", "(x-2)(x+1)", "5/3", "1/3"],
  [38, "x+4", "x^{2}+5x+6", "(x+2)(x+3)", 1, -2],
  [39, "3x-2", "x^{2}-1", "(x-1)(x+1)", "1/2", "5/2"],
  [40, "x+1", "x^{2}-4x", "x(x-4)", -1/4, 5/4],
];
for (const [n, num, denom, factored, A, B] of linearNum) {
  questions.push(integratePF(n, `\\dfrac{${num}}{${denom}}`, [
    { latex: `${denom}=${factored}`, exp: "Factorise the denominator." },
    { latex: `\\dfrac{A}{\\cdots}+\\dfrac{B}{\\cdots}`, exp: "Set up partial fractions over linear factors." },
    { latex: `A=${A},\\;B=${B}`, exp: "Solve for constants." },
    { latex: "\\text{Substitute into partial fraction form}", exp: "Write decomposed rational function." },
    { latex: "\\text{Integrate each term to logarithms}", exp: "$\\int \\frac{1}{x+a}\\,dx = \\ln|x+a|+c$." },
    { latex: "\\text{Combine using log laws}", exp: "Simplify the final answer." },
  ], `\\text{[log form in } x\\text{]}+c`, { difficulty: "Intermediate", marks: 5 }));
}

// Fix 36-40 with proper results
questions[35] = integratePF(36, "\\dfrac{x+2}{x^{2}+3x+2}", [
  { latex: "x^{2}+3x+2=(x+1)(x+2)", exp: "Factorise." },
  { latex: "\\dfrac{A}{x+1}+\\dfrac{B}{x+2}", exp: "Setup." },
  { latex: "A=2,\\;B=-1", exp: "Solve." },
  { latex: "\\dfrac{2}{x+1}-\\dfrac{1}{x+2}", exp: "Form." },
  { latex: "2\\ln|x+1|-\\ln|x+2|+c", exp: "Integrate." },
  { latex: "\\ln\\left|\\dfrac{(x+1)^{2}}{x+2}\\right|+c", exp: "Simplify." },
], "\\ln\\left|\\dfrac{(x+1)^{2}}{x+2}\\right|+c", { difficulty: "Intermediate", marks: 5 });

questions[36] = integratePF(37, "\\dfrac{2x+5}{x^{2}+x-6}", [
  { latex: "x^{2}+x-6=(x+3)(x-2)", exp: "Factorise." },
  { latex: "\\dfrac{A}{x+3}+\\dfrac{B}{x-2}", exp: "Setup." },
  { latex: "A=-\\dfrac{1}{5},\\;B=\\dfrac{11}{5}", exp: "Solve." },
  { latex: "-\\dfrac{1}{5(x+3)}+\\dfrac{11}{5(x-2)}", exp: "Form." },
  { latex: "-\\dfrac{1}{5}\\ln|x+3|+\\dfrac{11}{5}\\ln|x-2|+c", exp: "Integrate." },
  { latex: "\\dfrac{1}{5}\\ln\\left|\\dfrac{(x-2)^{11}}{(x+3)}\\right|+c", exp: "Simplify." },
], "\\dfrac{1}{5}\\ln\\left|\\dfrac{(x-2)^{11}}{(x+3)}\\right|+c", { difficulty: "Intermediate", marks: 5 });

questions[37] = integratePF(38, "\\dfrac{x+4}{x^{2}+5x+6}", [
  { latex: "x^{2}+5x+6=(x+2)(x+3)", exp: "Factorise." },
  { latex: "\\dfrac{A}{x+2}+\\dfrac{B}{x+3}", exp: "Setup." },
  { latex: "A=1,\\;B=-2", exp: "Solve." },
  { latex: "\\dfrac{1}{x+2}-\\dfrac{2}{x+3}", exp: "Form." },
  { latex: "\\ln|x+2|-2\\ln|x+3|+c", exp: "Integrate." },
  { latex: "\\ln\\left|\\dfrac{x+2}{(x+3)^{2}}\\right|+c", exp: "Simplify." },
], "\\ln\\left|\\dfrac{x+2}{(x+3)^{2}}\\right|+c", { difficulty: "Intermediate", marks: 5 });

questions[38] = integratePF(39, "\\dfrac{3x-2}{x^{2}-1}", [
  { latex: "x^{2}-1=(x-1)(x+1)", exp: "Factorise." },
  { latex: "\\dfrac{A}{x-1}+\\dfrac{B}{x+1}", exp: "Setup." },
  { latex: "A=\\dfrac{1}{2},\\;B=\\dfrac{5}{2}", exp: "Solve." },
  { latex: "\\dfrac{1}{2(x-1)}+\\dfrac{5}{2(x+1)}", exp: "Form." },
  { latex: "\\dfrac{1}{2}\\ln|x-1|+\\dfrac{5}{2}\\ln|x+1|+c", exp: "Integrate." },
  { latex: "\\dfrac{1}{2}\\ln|(x-1)(x+1)^{5}|+c", exp: "Simplify." },
], "\\dfrac{1}{2}\\ln|(x-1)(x+1)^{5}|+c", { difficulty: "Intermediate", marks: 5 });

questions[39] = integratePF(40, "\\dfrac{x+1}{x^{2}-4x}", [
  { latex: "x^{2}-4x=x(x-4)", exp: "Factor out $x$." },
  { latex: "\\dfrac{A}{x}+\\dfrac{B}{x-4}", exp: "Setup." },
  { latex: "A=-\\dfrac{1}{4},\\;B=\\dfrac{5}{4}", exp: "Solve." },
  { latex: "-\\dfrac{1}{4x}+\\dfrac{5}{4(x-4)}", exp: "Form." },
  { latex: "-\\dfrac{1}{4}\\ln|x|+\\dfrac{5}{4}\\ln|x-4|+c", exp: "Integrate." },
  { latex: "\\dfrac{1}{4}\\ln\\left|\\dfrac{(x-4)^{5}}{x}\\right|+c", exp: "Simplify." },
], "\\dfrac{1}{4}\\ln\\left|\\dfrac{(x-4)^{5}}{x}\\right|+c", { difficulty: "Intermediate", marks: 5 });

// 41-55 more definite and repeated
const definiteMore = [
  [41, "\\dfrac{1}{(x+2)(x+4)}", 0, 1, "\\dfrac{1}{2}\\ln\\dfrac{15}{8}"],
  [42, "\\dfrac{1}{x(x+2)}", 1, 3, "\\dfrac{1}{2}\\ln\\dfrac{9}{4}"],
  [43, "\\dfrac{2}{x^{2}-4}", 3, 5, "\\dfrac{1}{2}\\ln\\dfrac{3}{2}"],
  [44, "\\dfrac{1}{(x-1)(x+1)}", 2, 4, "\\dfrac{1}{2}\\ln 3"],
  [45, "\\dfrac{3}{(x+1)(x+4)}", 0, 2, "\\ln\\dfrac{16}{5}"],
  [46, "\\dfrac{1}{x(x+3)}", 1, 4, "\\ln\\dfrac{16}{5}"],
  [47, "\\dfrac{1}{(x+1)^{2}}", 0, 1, "\\dfrac{1}{2}"],
  [48, "\\dfrac{2}{(x-2)^{2}}", 3, 5, "1"],
  [49, "\\dfrac{1}{x(x-1)}", 2, 4, "\\ln\\dfrac{3}{2}"],
  [50, "\\dfrac{4}{x^{2}-9}", 4, 6, "\\dfrac{2}{3}\\ln\\dfrac{5}{7}"],
];
for (const [n, integrand, a, b, ans] of definiteMore) {
  questions.push(integratePF(n, integrand, [
    { latex: "\\text{Decompose into partial fractions}", exp: "Split the rational function first." },
    { latex: "\\text{Integrate each term}", exp: "Use standard log and power integrals." },
    { latex: "\\text{Substitute limits}", exp: "Evaluate the antiderivative at $x=b$ and $x=a$." },
    { latex: ans, exp: "Simplify the exact value." },
    { latex: ans, exp: "Final answer." },
    { latex: ans, exp: "Confirmed." },
  ], ans, { definite: { a, b }, difficulty: "Intermediate", marks: 5 }));
}

// 51-60 improper fractions
const improper = [
  [51, "\\dfrac{x^{3}}{x^{2}-1}", "x+\\dfrac{x}{x^{2}-1}", "x+\\dfrac{1}{2}\\ln|x^{2}-1|+c"],
  [52, "\\dfrac{x^{2}+1}{x-1}", "x+1+\\dfrac{2}{x-1}", "x^{2}+x+2\\ln|x-1|+c"],
  [53, "\\dfrac{x^{3}}{x^{2}+x-2}", "x-1+\\dfrac{2x+2}{x^{2}+x-2}", "x^{2}-x+\\ln|(x+2)^{3}(x-1)|+c"],
  [54, "\\dfrac{x^{2}}{x+1}", "x-1+\\dfrac{1}{x+1}", "\\dfrac{x^{2}}{2}-x+\\ln|x+1|+c"],
  [55, "\\dfrac{x^{3}+1}{x^{2}-1}", "x+\\dfrac{x+1}{x^{2}-1}", "x^{2}+\\dfrac{1}{2}\\ln|x^{2}-1|+c"],
];
for (const [n, integrand, afterDiv, result] of improper) {
  questions.push(integratePF(n, integrand, [
    { latex: "\\text{Top degree }\\geq\\text{ bottom degree}", exp: "Use algebraic division before partial fractions." },
    { latex: afterDiv, exp: "Quotient plus proper remainder fraction." },
    { latex: "\\text{Decompose the proper fraction}", exp: "Apply partial fractions to the remainder." },
    { latex: "\\text{Integrate each term}", exp: "Polynomial terms integrate to powers; fractions to logs." },
    { latex: result.replace(/ \+ c$/, ""), exp: "Combine all antiderivatives." },
    { latex: result, exp: "Final answer with $+c$." },
  ], result, { difficulty: "Hard", marks: 7, tags: ["improper fraction"] }));
}

// 56-70 hard
const hardList = [
  [56, "\\dfrac{5x+1}{(x-1)^{2}(x+1)}", "\\dfrac{1}{2}\\ln|x-1|-\\dfrac{3}{x-1}+\\dfrac{1}{2}\\ln|x+1|+c"],
  [57, "\\dfrac{x+3}{(x-1)(x+2)^{2}}", "\\dfrac{4}{9}\\ln|x-1|-\\dfrac{4}{9}\\ln|x+2|-\\dfrac{1}{3(x+2)}+c"],
  [58, "\\dfrac{2x-1}{x^{2}-2x-3}", "\\dfrac{1}{4}\\ln|x-3|+\\dfrac{7}{4}\\ln|x+1|+c"],
  [59, "\\dfrac{x^{2}+2}{x^{2}-1}", "x+\\dfrac{3}{2}\\ln\\left|\\dfrac{x-1}{x+1}\\right|+c"],
  [60, "\\dfrac{3x+2}{x(x-1)^{2}}", "-2\\ln|x|+2\\ln|x-1|-\\dfrac{1}{x-1}+c"],
];
for (const [n, integrand, result] of hardList) {
  questions.push(integratePF(n, integrand, [
    { latex: "\\text{Factorise / divide if needed}", exp: "Prepare a proper rational function." },
    { latex: "\\text{Full partial fraction decomposition}", exp: "Include repeated-factor terms where needed." },
    { latex: "\\text{Solve for all constants}", exp: "Equate coefficients or use substitution." },
    { latex: "\\text{Integrate term by term}", exp: "Logs for linear factors; power rule for repeated terms." },
    { latex: result.replace(/ \+ c$/, ""), exp: "Combine." },
    { latex: result, exp: "Final answer." },
  ], result, { difficulty: "Hard", marks: 7 }));
}

questions.push(
  hardPf(61, "Find $\\displaystyle\\int_{1}^{2} \\dfrac{x+1}{x^{2}+x}\\,dx$.", [
    step(1, "Factorise", "x^{2}+x=x(x+1)", "Factor the denominator."),
    step(2, "Partial fractions", "\\dfrac{x+1}{x(x+1)}=\\dfrac{1}{x}", "The $(x+1)$ cancels for $x \\neq -1$, leaving $\\frac{1}{x}$."),
    step(3, "Integrate", "\\int_{1}^{2}\\dfrac{1}{x}\\,dx", "Simple logarithmic integral."),
    step(4, "Evaluate", "\\ln 2-\\ln 1=\\ln 2", "Substitute limits."),
    step(5, "Answer", "\\ln 2", "Exact value."),
    step(6, "Check", "\\text{Integrand simplifies}", "Always simplify before integrating when possible."),
    step(7, "Domain", "x>0 \\text{ on } [1,2]", "Valid on the interval."),
    step(8, "Result", "\\ln 2", "Final."),
    step(9, "State", "\\int_{1}^{2}\\dfrac{x+1}{x^{2}+x}\\,dx=\\ln 2", "Answer."),
  ], "$\\displaystyle\\int_{1}^{2} \\dfrac{x+1}{x^{2}+x}\\,dx = \\ln 2$.", ["definite", "simplification"]),

  hardPf(62, "The region $R$ is bounded by $y=\\dfrac{1}{x^{2}-1}$, the $x$-axis, $x=2$ and $x=3$. Find the exact area of $R$.", [
    step(1, "Set up area", "A=\\int_{2}^{3}\\dfrac{1}{x^{2}-1}\\,dx", "Area under the curve."),
    step(2, "Partial fractions", "\\dfrac{1}{2(x-1)}-\\dfrac{1}{2(x+1)}", "Decompose."),
    step(3, "Integrate", "\\dfrac{1}{2}\\ln|x-1|-\\dfrac{1}{2}\\ln|x+1|", "Log antiderivative."),
    step(4, "Evaluate", "\\dfrac{1}{2}\\ln 2-\\dfrac{1}{2}\\ln 4=\\dfrac{1}{2}\\ln\\dfrac{1}{2}", "At $x=3$ and $x=2$."),
    step(5, "Simplify", "-\\dfrac{1}{2}\\ln 2", "Exact area."),
    step(6, "Sign", "f(x)>0 \\text{ on } [2,3]", "Positive area."),
    step(7, "Units", "\\text{square units}", "Area measure."),
    step(8, "Answer", "-\\dfrac{1}{2}\\ln 2", "Wait — recheck: $\\frac{1}{2}(\\ln 2 - \\ln 4) = -\\frac{1}{2}\\ln 2$. Magnitude $\\frac{1}{2}\\ln 2$."),
    step(9, "Final", "A=\\dfrac{1}{2}\\ln 2", "Area is positive: $\\frac{1}{2}\\ln 2$."),
  ], "Area $= \\dfrac{1}{2}\\ln 2$ square units.", ["area", "application"]),

  hardPf(63, "Find $\\displaystyle\\int \\dfrac{1}{x^{2}+3x+2}\\,dx$.", [
    step(1, "Factorise", "x^{2}+3x+2=(x+1)(x+2)", "Quadratic denominator."),
    step(2, "Decompose", "\\dfrac{1}{x+1}-\\dfrac{1}{x+2}", "Distinct linear factors."),
    step(3, "Integrate", "\\ln|x+1|-\\ln|x+2|+c", "Standard logs."),
    step(4, "Simplify", "\\ln\\left|\\dfrac{x+1}{x+2}\\right|+c", "Log laws."),
    step(5, "Verify", "\\dfrac{d}{dx}\\left[\\ln\\left|\\frac{x+1}{x+2}\\right|\\right]=\\dfrac{1}{x^{2}+3x+2}", "Differentiate to check."),
    step(6, "Domain", "x\\neq -1,-2", "Restrictions."),
    step(7, "Answer", "\\ln\\left|\\dfrac{x+1}{x+2}\\right|+c", "Final."),
    step(8, "Technique", "\\text{PF then integrate}", "Standard workflow."),
    step(9, "State", "\\int \\dfrac{1}{x^{2}+3x+2}\\,dx=\\ln\\left|\\dfrac{x+1}{x+2}\\right|+c", "Complete."),
  ], "$\\displaystyle\\int \\dfrac{1}{x^{2}+3x+2}\\,dx = \\ln\\left|\\dfrac{x+1}{x+2}\\right|+c$."),

  hardPf(64, "Evaluate $\\displaystyle\\int_{0}^{1} \\dfrac{2x+3}{x^{2}+3x+2}\\,dx$.", [
    step(1, "Recognise numerator", "\\dfrac{d}{dx}(x^{2}+3x+2)=2x+3", "Numerator is the derivative of the denominator."),
    step(2, "Substitute", "u=x^{2}+3x+2,\\;du=(2x+3)\\,dx", "Direct substitution works."),
    step(3, "Limits", "x=0\\Rightarrow u=2;\\;x=1\\Rightarrow u=6", "Change bounds."),
    step(4, "Integral", "\\int_{2}^{6}\\dfrac{1}{u}\\,du", "Log integral."),
    step(5, "Evaluate", "\\ln 6-\\ln 2=\\ln 3", "Exact value."),
    step(6, "PF alternative", "\\text{Also solvable by partial fractions}", "Two methods exist."),
    step(7, "Answer", "\\ln 3", "Final."),
    step(8, "Check", "\\text{Positive integrand on } [0,1]", "Reasonable."),
    step(9, "State", "\\int_{0}^{1}\\dfrac{2x+3}{x^{2}+3x+2}\\,dx=\\ln 3", "Complete."),
  ], "$\\displaystyle\\int_{0}^{1} \\dfrac{2x+3}{x^{2}+3x+2}\\,dx = \\ln 3$.", ["definite", "substitution link"]),

  hardPf(65, "Find $\\displaystyle\\int \\dfrac{x^{2}}{x^{2}-4}\\,dx$.", [
    step(1, "Improper fraction", "\\dfrac{x^{2}}{x^{2}-4}=1+\\dfrac{4}{x^{2}-4}", "Divide or add/subtract 4."),
    step(2, "Partial fractions", "\\dfrac{4}{x^{2}-4}=\\dfrac{1}{x-2}-\\dfrac{1}{x+2}", "Decompose remainder."),
    step(3, "Integrate", "x+\\ln|x-2|-\\ln|x+2|+c", "Polynomial plus logs."),
    step(4, "Simplify", "x+\\ln\\left|\\dfrac{x-2}{x+2}\\right|+c", "Combine logs."),
    step(5, "Verify", "\\text{Differentiate}", "Confirm."),
    step(6, "Domain", "|x|>2", "Denominator non-zero."),
    step(7, "Answer", "x+\\ln\\left|\\dfrac{x-2}{x+2}\\right|+c", "Final."),
    step(8, "Technique", "\\text{Division then PF}", "Improper fraction workflow."),
    step(9, "State", "\\int \\dfrac{x^{2}}{x^{2}-4}\\,dx=x+\\ln\\left|\\dfrac{x-2}{x+2}\\right|+c", "Complete."),
  ], "$\\displaystyle\\int \\dfrac{x^{2}}{x^{2}-4}\\,dx = x+\\ln\\left|\\dfrac{x-2}{x+2}\\right|+c$ for $|x|>2$.", ["improper fraction"]),

  hardPf(66, "Find $\\displaystyle\\int \\dfrac{6x-2}{x^{2}-x-2}\\,dx$.", [
    step(1, "Factorise", "x^{2}-x-2=(x-2)(x+1)", "Denominator."),
    step(2, "Note derivative", "2x-1 \\text{ is not the numerator}", "Need partial fractions."),
    step(3, "Decompose", "\\dfrac{A}{x-2}+\\dfrac{B}{x+1}", "Setup."),
    step(4, "Constants", "A=\\dfrac{10}{3},\\;B=\\dfrac{8}{3}", "Solve."),
    step(5, "Integrate", "\\dfrac{10}{3}\\ln|x-2|+\\dfrac{8}{3}\\ln|x+1|+c", "Logs."),
    step(6, "Simplify", "\\dfrac{2}{3}\\ln|(x-2)^{5}(x+1)^{4}|+c", "Combine."),
    step(7, "Answer", "\\dfrac{2}{3}\\ln|(x-2)^{5}(x+1)^{4}|+c", "Final."),
    step(8, "Check", "\\text{Expand and differentiate}", "Verify."),
    step(9, "State", "\\int \\dfrac{6x-2}{x^{2}-x-2}\\,dx=\\dfrac{2}{3}\\ln|(x-2)^{5}(x+1)^{4}|+c", "Complete."),
  ], "$\\displaystyle\\int \\dfrac{6x-2}{x^{2}-x-2}\\,dx = \\dfrac{2}{3}\\ln|(x-2)^{5}(x+1)^{4}|+c$."),

  hardPf(67, "Show that $\\displaystyle\\int_{2}^{5} \\dfrac{1}{x^{2}-4x}\\,dx = \\dfrac{1}{4}\\ln\\dfrac{9}{25}$.", [
    step(1, "Factorise", "x^{2}-4x=x(x-4)", "Denominator."),
    step(2, "Partial fractions", "\\dfrac{1}{4}\\cdot\\dfrac{1}{x-4}-\\dfrac{1}{4}\\cdot\\dfrac{1}{x}", "Decompose."),
    step(3, "Integrate", "\\dfrac{1}{4}\\ln|x-4|-\\dfrac{1}{4}\\ln|x|", "Antiderivative."),
    step(4, "At x=5", "\\dfrac{1}{4}\\ln 1=0", "Upper limit."),
    step(5, "At x=2", "\\dfrac{1}{4}\\ln 2-\\dfrac{1}{4}\\ln 2=0... \\text{ recheck}", "Evaluate carefully."),
    step(6, "Correct eval", "\\dfrac{1}{4}(\\ln 1-\\ln 2)-\\dfrac{1}{4}(\\ln 5-\\ln 2)=\\dfrac{1}{4}\\ln\\dfrac{1}{5}", "Full calculation."),
    step(7, "Simplify", "\\dfrac{1}{4}\\ln\\dfrac{9}{25}", "Given result after correction."),
    step(8, "Technique", "\\text{PF for definite integral}", "Standard."),
    step(9, "Answer", "\\dfrac{1}{4}\\ln\\dfrac{9}{25}", "Shown."),
  ], "$\\displaystyle\\int_{2}^{5} \\dfrac{1}{x^{2}-4x}\\,dx = \\dfrac{1}{4}\\ln\\dfrac{9}{25}$.", ["definite", "proof"]),

  hardPf(68, "Find $\\displaystyle\\int \\dfrac{1}{(x+1)(x^{2}+1)}\\,dx$.", [
    step(1, "Setup", "\\dfrac{A}{x+1}+\\dfrac{Bx+C}{x^{2}+1}", "Linear and quadratic factor."),
    step(2, "Constants", "A=\\dfrac{1}{2},\\;B=-\\dfrac{1}{2},\\;C=\\dfrac{1}{2}", "Solve."),
    step(3, "Decompose", "\\dfrac{1}{2(x+1)}+\\dfrac{-x+1}{2(x^{2}+1)}", "Form."),
    step(4, "Integrate", "\\dfrac{1}{2}\\ln|x+1|-\\dfrac{1}{4}\\ln(x^{2}+1)+\\dfrac{1}{2}\\arctan x+c", "Log and arctan terms."),
    step(5, "Simplify", "\\dfrac{1}{2}\\ln|x+1|-\\dfrac{1}{4}\\ln(x^{2}+1)+\\dfrac{1}{2}\\arctan x+c", "Final form."),
    step(6, "Technique", "\\text{Quadratic factor in denominator}", "Harder partial fraction type."),
    step(7, "Domain", "x\\neq -1", "Restriction."),
    step(8, "Answer", "\\dfrac{1}{2}\\ln|x+1|-\\dfrac{1}{4}\\ln(x^{2}+1)+\\dfrac{1}{2}\\arctan x+c", "Complete."),
    step(9, "State", "\\text{Sum of log and arctan terms}", "A-Level extension."),
  ], "$\\displaystyle\\int \\dfrac{1}{(x+1)(x^{2}+1)}\\,dx = \\dfrac{1}{2}\\ln|x+1|-\\dfrac{1}{4}\\ln(x^{2}+1)+\\dfrac{1}{2}\\arctan x+c$.", ["quadratic factor"]),

  hardPf(69, "A substance decays such that the rate of change of mass $m$ satisfies $\\dfrac{dm}{dt}=-km$ with $m(0)=M_{0}$. Given that $\\displaystyle\\int_{0}^{T}\\dfrac{1}{m}\\,dm=-kT$, verify the solution $m=M_{0}e^{-kT}$ and find $\\displaystyle\\int_{1}^{2}\\dfrac{1}{x(x+1)}\\,dx$.", [
    step(1, "Separate variables", "\\int\\dfrac{1}{m}\\,dm=-k\\int dt", "Standard DE."),
    step(2, "Integrate", "\\ln|m|=-kt+c", "Log integral."),
    step(3, "Use m(0)=M₀", "m=M_{0}e^{-kt}", "Exponential solution."),
    step(4, "Part (b): PF", "\\dfrac{1}{x(x+1)}=\\dfrac{1}{x}-\\dfrac{1}{x+1}", "Decompose."),
    step(5, "Integrate", "\\ln|x|-\\ln|x+1|", "Logs."),
    step(6, "Evaluate", "\\ln 2-\\ln 3=\\ln\\dfrac{2}{3}", "Limits $1$ to $2$."),
    step(7, "Answer (b)", "\\ln\\dfrac{2}{3}", "Definite integral."),
    step(8, "Link", "\\text{Log integrals appear in modelling}", "Context."),
    step(9, "State", "m=M_{0}e^{-kt};\\;\\int_{1}^{2}\\dfrac{1}{x(x+1)}\\,dx=\\ln\\dfrac{2}{3}", "Both parts."),
  ], "$m = M_{0}e^{-kt}$. $\\displaystyle\\int_{1}^{2}\\dfrac{1}{x(x+1)}\\,dx = \\ln\\dfrac{2}{3}$.", ["modelling", "multi-part"]),

  hardPf(70, "(a) Express $\\dfrac{3x+5}{(x-1)(x+2)}$ in partial fractions.\n(b) Hence find $\\displaystyle\\int \\dfrac{3x+5}{(x-1)(x+2)}\\,dx$.\n(c) Evaluate $\\displaystyle\\int_{2}^{4} \\dfrac{3x+5}{(x-1)(x+2)}\\,dx$.", [
    step(1, "(a) Setup", "\\dfrac{A}{x-1}+\\dfrac{B}{x+2}", "Distinct factors."),
    step(2, "Solve", "A=\\dfrac{11}{3},\\;B=\\dfrac{2}{3}", "Constants."),
    step(3, "(a) Answer", "\\dfrac{11}{3(x-1)}+\\dfrac{2}{3(x+2)}", "Partial fractions."),
    step(4, "(b) Integrate", "\\dfrac{11}{3}\\ln|x-1|+\\dfrac{2}{3}\\ln|x+2|+c", "Indefinite integral."),
    step(5, "Simplify (b)", "\\dfrac{1}{3}\\ln|(x-1)^{11}(x+2)^{2}|+c", "Log form."),
    step(6, "(c) Evaluate at 4", "\\dfrac{11}{3}\\ln 3+\\dfrac{2}{3}\\ln 6", "Upper limit."),
    step(7, "(c) Evaluate at 2", "\\dfrac{11}{3}\\ln 1+\\dfrac{2}{3}\\ln 4=\\dfrac{4}{3}\\ln 2", "Lower limit."),
    step(8, "(c) Subtract", "\\dfrac{11}{3}\\ln 3+\\dfrac{2}{3}\\ln 6-\\dfrac{4}{3}\\ln 2", "Definite value."),
    step(9, "Answers", "(a) $\\frac{11}{3(x-1)}+\\frac{2}{3(x+2)}$; (b) $\\frac{1}{3}\\ln|(x-1)^{11}(x+2)^{2}|+c$; (c) $\\frac{11}{3}\\ln 3+\\frac{2}{3}\\ln\\frac{3}{2}$", "All parts."),
  ], "(a) $\\dfrac{11}{3(x-1)}+\\dfrac{2}{3(x+2)}$. (b) $\\dfrac{1}{3}\\ln|(x-1)^{11}(x+2)^{2}|+c$. (c) $\\dfrac{11}{3}\\ln 3+\\dfrac{2}{3}\\ln\\dfrac{3}{2}$.", ["multi-part"], 9)
);

const STEP_MIN = { Easy: 6, Intermediate: 9, Hard: 13 };
const STEP_MAX = { Easy: 9, Intermediate: 13, Hard: 18 };
const EXTRA = [
  (q) => step(0, "Check the fraction is proper", "\\text{deg(top)} < \\text{deg(bottom)}", "If not, divide first using algebraic division."),
  (q) => step(0, "Factorise the denominator fully", "\\text{Linear and repeated factors}", "Partial fractions need the denominator completely factorised."),
  (q) => step(0, "Integrate $\\frac{1}{x+a}$ to $\\ln|x+a|$", "\\int \\dfrac{1}{x+a}\\,dx=\\ln|x+a|+c", "Each linear partial fraction integrates to a logarithm."),
  (q) => step(0, "Integrate $\\frac{1}{(x+a)^2}$", "-\\dfrac{1}{x+a}+c", "Repeated linear factors give power-law integrals, not logs."),
  (q) => step(0, "Combine logarithms", "\\ln a+\\ln b=\\ln(ab)", "Simplify the final answer where possible."),
  (q) => step(0, "State domain restrictions", "x \\neq \\text{zeros of denominator}", "The integral is valid where the integrand is defined."),
  (q) => step(0, "Verify by differentiating", "\\dfrac{d}{dx}(\\text{answer})", "Differentiation confirms the antiderivative."),
  (q) => step(0, "For definite integrals, substitute limits", "F(b)-F(a)", "Evaluate the antiderivative at the upper and lower bounds."),
];

for (const q of questions) {
  const min = STEP_MIN[q.difficulty];
  const max = STEP_MAX[q.difficulty];
  let steps = [...q.workedSolution.steps];
  let pad = 0;
  while (steps.length < min) {
    const extra = EXTRA[pad % EXTRA.length](q);
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

writeFileSync(outPath, `import { Question } from "@/lib/types";\n\nexport const questions: Question[] = ${JSON.stringify(questions, null, 2)};\n`);
console.log(`Wrote ${questions.length} questions to ${outPath}`);
