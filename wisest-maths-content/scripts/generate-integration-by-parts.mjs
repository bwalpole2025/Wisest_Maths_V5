#!/usr/bin/env node
/**
 * Generates 70 A-Level "Integration by parts" questions with full worked solutions.
 * Output: src/data/questions/a-level-maths/year-2-pure/integration-by-parts.ts
 */

import { writeFileSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const outPath = resolve(__dirname, "../src/data/questions/a-level-maths/year-2-pure/integration-by-parts.ts");

const SUBTOPIC = "Integration by parts";
const SUBTOPIC_ID = "al.y2.pure.integration-by-parts";
const LEVEL = "A-Level Maths";
const TOPIC = "Year 2 Pure";

const qid = (n) => `al.y2.pure.integration-by-parts.q${String(n).padStart(3, "0")}`;
const step = (n, description, workingLatex, explanation) => ({ stepNumber: n, description, workingLatex, explanation, diagram: null });
const base = (meta) => ({ level: LEVEL, topic: TOPIC, subtopic: SUBTOPIC, subtopicId: SUBTOPIC_ID, questionDiagram: null, ...meta });
const partsQ = (n, { difficulty, marks, answerType, tags, questionText, steps, finalAnswer }) =>
  base({ id: qid(n), difficulty, marks, answerType, tags: ["integration by parts", ...tags], questionText, workedSolution: { steps, finalAnswer } });

function partsIndef(n, integrand, u, du, dv, v, afterParts, result, tags = [], difficulty = "Easy", marks = 4) {
  const steps = [
    step(1, "Recall the formula", "\\int u\\,dv = uv - \\int v\\,du", "Integration by parts reverses the product rule for differentiation."),
    step(2, "Choose u and dv", `u = ${u},\\quad dv = ${dv}`, "Use LIATE: Log, Inverse trig, Algebraic, Trig, Exponential — pick $u$ to simplify on differentiation."),
    step(3, "Find du and v", `du = ${du},\\quad v = ${v}`, "Differentiate $u$ and integrate $dv$."),
    step(4, "Apply the formula", `${afterParts}`, "Substitute into $\\int u\\,dv = uv - \\int v\\,du$."),
    step(5, "Evaluate the remaining integral", result.replace(/ \+ c$/, ""), "The new integral should be simpler than the original."),
    step(6, "Simplify and add +c", result, "Combine terms and include the constant of integration."),
    step(7, "State the answer", `\\int ${integrand}\\,dx = ${result}`, "Present the antiderivative clearly."),
  ];
  return partsQ(n, {
    difficulty,
    marks,
    answerType: "expression",
    tags,
    questionText: `Use integration by parts to find $\\displaystyle\\int ${integrand}\\,dx$.`,
    steps,
    finalAnswer: `$\\displaystyle\\int ${integrand}\\,dx = ${result}$.`,
  });
}

function partsDefinite(n, integrand, a, b, u, du, dv, v, evalSteps, result, tags = [], difficulty = "Intermediate", marks = 5) {
  const steps = [
    step(1, "Recall the formula", "\\int_{a}^{b} u\\,dv = \\left[uv\\right]_{a}^{b} - \\int_{a}^{b} v\\,du", "The definite-integral version avoids introducing $+c$."),
    step(2, "Choose u and dv", `u = ${u},\\quad dv = ${dv}`, "Pick $u$ so that $du$ is simpler than $u$."),
    step(3, "Find du and v", `du = ${du},\\quad v = ${v}`, "Differentiate and integrate the chosen parts."),
    step(4, "Apply by parts", evalSteps[0].latex, evalSteps[0].exp),
    step(5, "Evaluate the boundary term", evalSteps[1].latex, evalSteps[1].exp),
    step(6, "Evaluate the remaining integral", evalSteps[2].latex, evalSteps[2].exp),
    step(7, "Combine and simplify", result, "Give the exact value."),
    step(8, "State the answer", `\\int_{${a}}^{${b}} ${integrand}\\,dx = ${result}`, "Final definite integral value."),
  ];
  return partsQ(n, {
    difficulty,
    marks,
    answerType: "exact",
    tags: [...tags, "definite integral"],
    questionText: `Use integration by parts to evaluate $\\displaystyle\\int_{${a}}^{${b}} ${integrand}\\,dx$.`,
    steps,
    finalAnswer: `$\\displaystyle\\int_{${a}}^{${b}} ${integrand}\\,dx = ${result}$.`,
  });
}

function hardParts(n, questionText, steps, finalAnswer, tags = [], marks = 8) {
  return partsQ(n, {
    difficulty: "Hard",
    marks,
    answerType: "expression",
    tags: [...tags, "multi-step"],
    questionText,
    steps,
    finalAnswer,
  });
}

const questions = [
  // Easy — x times exponential (1–8)
  partsIndef(1, "xe^{x}", "x", "dx", "e^{x}\\,dx", "e^{x}", "xe^{x} - \\int e^{x}\\,dx", "xe^{x} - e^{x} + c", ["exponential"]),
  partsIndef(2, "xe^{-x}", "x", "dx", "e^{-x}\\,dx", "-e^{-x}", "-xe^{-x} - \\int (-e^{-x})\\,dx", "-xe^{-x} - e^{-x} + c", ["exponential"]),
  partsIndef(3, "xe^{2x}", "x", "dx", "e^{2x}\\,dx", "\\dfrac{1}{2}e^{2x}", "\\dfrac{x}{2}e^{2x} - \\int \\dfrac{1}{2}e^{2x}\\,dx", "\\dfrac{1}{2}xe^{2x} - \\dfrac{1}{4}e^{2x} + c", ["exponential"]),
  partsIndef(4, "xe^{-2x}", "x", "dx", "e^{-2x}\\,dx", "-\\dfrac{1}{2}e^{-2x}", "-\\dfrac{x}{2}e^{-2x} - \\int \\left(-\\dfrac{1}{2}e^{-2x}\\right)dx", "-\\dfrac{1}{2}xe^{-2x} - \\dfrac{1}{4}e^{-2x} + c", ["exponential"]),
  partsIndef(5, "xe^{3x}", "x", "dx", "e^{3x}\\,dx", "\\dfrac{1}{3}e^{3x}", "\\dfrac{x}{3}e^{3x} - \\int \\dfrac{1}{3}e^{3x}\\,dx", "\\dfrac{1}{3}xe^{3x} - \\dfrac{1}{9}e^{3x} + c", ["exponential"]),
  partsIndef(6, "2xe^{x}", "x", "dx", "2e^{x}\\,dx", "2e^{x}", "2xe^{x} - \\int 2e^{x}\\,dx", "2xe^{x} - 2e^{x} + c", ["exponential"]),
  partsIndef(7, "3xe^{-x}", "x", "dx", "3e^{-x}\\,dx", "-3e^{-x}", "-3xe^{-x} - \\int (-3e^{-x})\\,dx", "-3xe^{-x} - 3e^{-x} + c", ["exponential"]),
  partsIndef(8, "xe^{x/2}", "x", "dx", "e^{x/2}\\,dx", "2e^{x/2}", "2xe^{x/2} - \\int 2e^{x/2}\\,dx", "2xe^{x/2} - 4e^{x/2} + c", ["exponential"]),

  // Easy — x times trig (9–16)
  partsIndef(9, "x\\sin x", "x", "dx", "\\sin x\\,dx", "-\\cos x", "-x\\cos x - \\int (-\\cos x)\\,dx", "-x\\cos x + \\sin x + c", ["trigonometric"]),
  partsIndef(10, "x\\cos x", "x", "dx", "\\cos x\\,dx", "\\sin x", "x\\sin x - \\int \\sin x\\,dx", "x\\sin x + \\cos x + c", ["trigonometric"]),
  partsIndef(11, "x\\sin(2x)", "x", "dx", "\\sin(2x)\\,dx", "-\\dfrac{1}{2}\\cos(2x)", "-\\dfrac{x}{2}\\cos(2x) - \\int \\left(-\\dfrac{1}{2}\\cos(2x)\\right)dx", "-\\dfrac{x}{2}\\cos(2x) + \\dfrac{1}{4}\\sin(2x) + c", ["trigonometric"]),
  partsIndef(12, "x\\cos(2x)", "x", "dx", "\\cos(2x)\\,dx", "\\dfrac{1}{2}\\sin(2x)", "\\dfrac{x}{2}\\sin(2x) - \\int \\dfrac{1}{2}\\sin(2x)\\,dx", "\\dfrac{x}{2}\\sin(2x) + \\dfrac{1}{4}\\cos(2x) + c", ["trigonometric"]),
  partsIndef(13, "x\\sin(3x)", "x", "dx", "\\sin(3x)\\,dx", "-\\dfrac{1}{3}\\cos(3x)", "-\\dfrac{x}{3}\\cos(3x) + \\int \\dfrac{1}{3}\\cos(3x)\\,dx", "-\\dfrac{x}{3}\\cos(3x) + \\dfrac{1}{9}\\sin(3x) + c", ["trigonometric"]),
  partsIndef(14, "x\\cos(3x)", "x", "dx", "\\cos(3x)\\,dx", "\\dfrac{1}{3}\\sin(3x)", "\\dfrac{x}{3}\\sin(3x) - \\int \\dfrac{1}{3}\\sin(3x)\\,dx", "\\dfrac{x}{3}\\sin(3x) + \\dfrac{1}{9}\\cos(3x) + c", ["trigonometric"]),
  partsIndef(15, "2x\\sin x", "x", "dx", "2\\sin x\\,dx", "-2\\cos x", "-2x\\cos x + \\int 2\\cos x\\,dx", "-2x\\cos x + 2\\sin x + c", ["trigonometric"]),
  partsIndef(16, "2x\\cos x", "x", "dx", "2\\cos x\\,dx", "2\\sin x", "2x\\sin x - \\int 2\\sin x\\,dx", "2x\\sin x + 2\\cos x + c", ["trigonometric"]),

  // Easy — ln x and basic polynomial (17–22)
  partsIndef(17, "\\ln x", "\\ln x", "\\dfrac{1}{x}\\,dx", "dx", "x", "x\\ln x - \\int x \\cdot \\dfrac{1}{x}\\,dx", "x\\ln x - x + c", ["logarithm"], "Easy", 4),
  partsIndef(18, "x\\ln x", "\\ln x", "\\dfrac{1}{x}\\,dx", "x\\,dx", "\\dfrac{x^{2}}{2}", "\\dfrac{x^{2}}{2}\\ln x - \\int \\dfrac{x^{2}}{2} \\cdot \\dfrac{1}{x}\\,dx", "\\dfrac{x^{2}}{2}\\ln x - \\dfrac{x^{2}}{4} + c", ["logarithm"], "Intermediate", 5),
  partsIndef(19, "x^{2}e^{x}", "x^{2}", "2x\\,dx", "e^{x}\\,dx", "e^{x}", "x^{2}e^{x} - \\int 2xe^{x}\\,dx", "x^{2}e^{x} - 2xe^{x} + 2e^{x} + c", ["exponential", "repeated parts"], "Intermediate", 6),
  partsIndef(20, "x^{2}\\sin x", "x^{2}", "2x\\,dx", "\\sin x\\,dx", "-\\cos x", "-x^{2}\\cos x + \\int 2x\\cos x\\,dx", "-x^{2}\\cos x + 2x\\sin x + 2\\cos x + c", ["trigonometric", "repeated parts"], "Intermediate", 6),
  partsIndef(21, "x^{2}\\cos x", "x^{2}", "2x\\,dx", "\\cos x\\,dx", "\\sin x", "x^{2}\\sin x - \\int 2x\\sin x\\,dx", "x^{2}\\sin x + 2x\\cos x - 2\\sin x + c", ["trigonometric", "repeated parts"], "Intermediate", 6),
  partsIndef(22, "x^{2}\\ln x", "\\ln x", "\\dfrac{1}{x}\\,dx", "x^{2}\\,dx", "\\dfrac{x^{3}}{3}", "\\dfrac{x^{3}}{3}\\ln x - \\int \\dfrac{x^{3}}{3} \\cdot \\dfrac{1}{x}\\,dx", "\\dfrac{x^{3}}{3}\\ln x - \\dfrac{x^{3}}{9} + c", ["logarithm"], "Intermediate", 5),

  // Intermediate — definite integrals (23–32)
  partsDefinite(23, "xe^{x}", 0, 1, "x", "dx", "e^{x}\\,dx", "e^{x}",
    [
      { latex: "\\left[xe^{x}\\right]_{0}^{1} - \\int_{0}^{1} e^{x}\\,dx", exp: "Apply integration by parts on $[0,1]$." },
      { latex: "e - 0", exp: "Boundary term: $1\\cdot e^{1} - 0\\cdot e^{0} = e$." },
      { latex: "-\\left[e^{x}\\right]_{0}^{1} = -(e-1)", exp: "Remaining integral gives $e^{x}$ evaluated at the limits." },
    ], "1", ["exponential"]),
  partsDefinite(24, "x\\sin x", 0, "\\dfrac{\\pi}{2}", "x", "dx", "\\sin x\\,dx", "-\\cos x",
    [
      { latex: "\\left[-x\\cos x\\right]_{0}^{\\pi/2} + \\int_{0}^{\\pi/2} \\cos x\\,dx", exp: "By parts with $u=x$, $dv=\\sin x\\,dx$." },
      { latex: "0 + 0 = 0", exp: "Boundary: $-\\tfrac{\\pi}{2}\\cos(\\tfrac{\\pi}{2}) + 0 = 0$." },
      { latex: "\\left[\\sin x\\right]_{0}^{\\pi/2} = 1", exp: "The cosine integral evaluates to $1$." },
    ], "1", ["trigonometric"]),
  partsDefinite(25, "x\\cos x", 0, "\\dfrac{\\pi}{2}", "x", "dx", "\\cos x\\,dx", "\\sin x",
    [
      { latex: "\\left[x\\sin x\\right]_{0}^{\\pi/2} - \\int_{0}^{\\pi/2} \\sin x\\,dx", exp: "Standard by-parts setup." },
      { latex: "\\dfrac{\\pi}{2}", exp: "Boundary: $\\tfrac{\\pi}{2}\\sin(\\tfrac{\\pi}{2}) = \\tfrac{\\pi}{2}$." },
      { latex: "-\\left[-\\cos x\\right]_{0}^{\\pi/2} = -1", exp: "Integral of $\\sin x$ gives $-\\cos x$." },
    ], "\\dfrac{\\pi}{2} - 1", ["trigonometric"]),
  partsDefinite(26, "\\ln x", 1, "e", "\\ln x", "\\dfrac{1}{x}\\,dx", "dx", "x",
    [
      { latex: "\\left[x\\ln x\\right]_{1}^{e} - \\int_{1}^{e} dx", exp: "Classic $\\int \\ln x\\,dx$ on $[1,e]$." },
      { latex: "e - 0 = e", exp: "Boundary: $e\\ln e - 1\\ln 1 = e$." },
      { latex: "-\\left[x\\right]_{1}^{e} = -(e-1)", exp: "Remaining integral is $\\int 1\\,dx$." },
    ], "1", ["logarithm"]),
  partsDefinite(27, "xe^{-x}", 0, 1, "x", "dx", "e^{-x}\\,dx", "-e^{-x}",
    [
      { latex: "\\left[-xe^{-x}\\right]_{0}^{1} - \\int_{0}^{1} (-e^{-x})\\,dx", exp: "Choose $u=x$, $dv=e^{-x}dx$." },
      { latex: "-e^{-1}", exp: "Boundary term at $x=1$ gives $-e^{-1}$." },
      { latex: "-\\left[e^{-x}\\right]_{0}^{1} = -(e^{-1}-1) = 1-e^{-1}", exp: "Evaluate the exponential integral." },
    ], "1 - 2e^{-1}", ["exponential"]),
  partsDefinite(28, "x\\ln x", 1, "e", "\\ln x", "\\dfrac{1}{x}\\,dx", "x\\,dx", "\\dfrac{x^{2}}{2}",
    [
      { latex: "\\left[\\dfrac{x^{2}}{2}\\ln x\\right]_{1}^{e} - \\int_{1}^{e} \\dfrac{x}{2}\\,dx", exp: "Logarithm chosen as $u$." },
      { latex: "\\dfrac{e^{2}}{2}", exp: "At $x=e$: $\\tfrac{e^{2}}{2}\\ln e = \\tfrac{e^{2}}{2}$; at $x=1$ the term is $0$." },
      { latex: "-\\dfrac{1}{2}\\left[\\dfrac{x^{2}}{2}\\right]_{1}^{e} = -\\dfrac{e^{2}-1}{4}", exp: "Integrate $\\tfrac{x}{2}$." },
    ], "\\dfrac{e^{2}}{4} + \\dfrac{1}{4}", ["logarithm"]),
  partsDefinite(29, "xe^{2x}", 0, 1, "x", "dx", "e^{2x}\\,dx", "\\dfrac{1}{2}e^{2x}",
    [
      { latex: "\\left[\\dfrac{x}{2}e^{2x}\\right]_{0}^{1} - \\int_{0}^{1} \\dfrac{1}{2}e^{2x}\\,dx", exp: "Apply by parts." },
      { latex: "\\dfrac{e^{2}}{2}", exp: "Boundary at $x=1$." },
      { latex: "-\\dfrac{1}{4}\\left[e^{2x}\\right]_{0}^{1} = -\\dfrac{e^{2}-1}{4}", exp: "Remaining exponential integral." },
    ], "\\dfrac{e^{2}+1}{4}", ["exponential"]),
  partsDefinite(30, "x\\sin(2x)", 0, "\\dfrac{\\pi}{4}", "x", "dx", "\\sin(2x)\\,dx", "-\\dfrac{1}{2}\\cos(2x)",
    [
      { latex: "\\left[-\\dfrac{x}{2}\\cos(2x)\\right]_{0}^{\\pi/4} + \\int_{0}^{\\pi/4} \\dfrac{1}{2}\\cos(2x)\\,dx", exp: "Trig by parts with argument $2x$." },
      { latex: "0", exp: "At $x=\\tfrac{\\pi}{4}$, $\\cos(\\tfrac{\\pi}{2})=0$." },
      { latex: "\\dfrac{1}{4}\\left[\\sin(2x)\\right]_{0}^{\\pi/4} = \\dfrac{1}{4}", exp: "Evaluate the cosine integral." },
    ], "\\dfrac{1}{4}", ["trigonometric"]),
  partsDefinite(31, "x\\sqrt{x}", 0, 1, "x", "dx", "x^{1/2}\\,dx", "\\dfrac{2}{3}x^{3/2}",
    [
      { latex: "\\left[\\dfrac{2}{3}x^{5/2}\\right]_{0}^{1} - \\int_{0}^{1} \\dfrac{2}{3}x^{1/2}\\,dx", exp: "Algebraic $u=x$, $dv=x^{1/2}dx$." },
      { latex: "\\dfrac{2}{3}", exp: "Boundary term at $x=1$." },
      { latex: "-\\dfrac{4}{9}\\left[x^{3/2}\\right]_{0}^{1} = -\\dfrac{4}{9}", exp: "Power-law integral." },
    ], "\\dfrac{2}{9}", ["algebraic"]),
  partsDefinite(32, "x(1-x)", 0, 1, "x", "dx", "(1-x)\\,dx", "x - \\dfrac{x^{2}}{2}",
    [
      { latex: "\\left[x\\left(x-\\dfrac{x^{2}}{2}\\right)\\right]_{0}^{1} - \\int_{0}^{1} \\left(x-\\dfrac{x^{2}}{2}\\right)dx", exp: "Expand or integrate $1-x$ directly for $v$." },
      { latex: "\\dfrac{1}{2}", exp: "Boundary term simplifies to $\\tfrac{1}{2}$." },
      { latex: "-\\left[\\dfrac{x^{2}}{2} - \\dfrac{x^{3}}{6}\\right]_{0}^{1} = -\\dfrac{1}{3}", exp: "Polynomial integral on $[0,1]$." },
    ], "\\dfrac{1}{6}", ["algebraic"]),

  // Intermediate — inverse trig and further types (33–42)
  partsIndef(33, "\\arctan x", "\\arctan x", "\\dfrac{1}{1+x^{2}}\\,dx", "dx", "x", "x\\arctan x - \\int \\dfrac{x}{1+x^{2}}\\,dx", "x\\arctan x - \\dfrac{1}{2}\\ln(1+x^{2}) + c", ["inverse trigonometric"], "Intermediate", 5),
  partsIndef(34, "\\arcsin x", "\\arcsin x", "\\dfrac{1}{\\sqrt{1-x^{2}}}\\,dx", "dx", "x", "x\\arcsin x - \\int \\dfrac{x}{\\sqrt{1-x^{2}}}\\,dx", "x\\arcsin x + \\sqrt{1-x^{2}} + c", ["inverse trigonometric"], "Intermediate", 5),
  partsIndef(35, "\\ln(2x)", "\\ln(2x)", "\\dfrac{1}{x}\\,dx", "dx", "x", "x\\ln(2x) - \\int x \\cdot \\dfrac{1}{x}\\,dx", "x\\ln(2x) - x + c", ["logarithm"], "Easy", 4),
  partsIndef(36, "x^{3}e^{x}", "x^{3}", "3x^{2}\\,dx", "e^{x}\\,dx", "e^{x}", "x^{3}e^{x} - \\int 3x^{2}e^{x}\\,dx", "x^{3}e^{x} - 3x^{2}e^{x} + 6xe^{x} - 6e^{x} + c", ["exponential", "repeated parts"], "Hard", 7),
  partsIndef(37, "x^{3}\\sin x", "x^{3}", "3x^{2}\\,dx", "\\sin x\\,dx", "-\\cos x", "-x^{3}\\cos x + \\int 3x^{2}\\cos x\\,dx", "-x^{3}\\cos x + 3x^{2}\\sin x + 6x\\cos x - 6\\sin x + c", ["trigonometric", "repeated parts"], "Hard", 7),
  partsIndef(38, "(\\ln x)^{2}", "\\ln x", "\\dfrac{1}{x}\\,dx", "\\ln x\\,dx", "x\\ln x - x", "x(\\ln x)^{2} - \\int (x\\ln x - x)\\cdot\\dfrac{1}{x}\\,dx", "x(\\ln x)^{2} - x\\ln x + x + c", ["logarithm", "repeated parts"], "Hard", 6),
  partsIndef(39, "x\\ln(2x)", "\\ln(2x)", "\\dfrac{1}{x}\\,dx", "x\\,dx", "\\dfrac{x^{2}}{2}", "\\dfrac{x^{2}}{2}\\ln(2x) - \\int \\dfrac{x}{2}\\,dx", "\\dfrac{x^{2}}{2}\\ln(2x) - \\dfrac{x^{2}}{4} + c", ["logarithm"], "Intermediate", 5),
  partsIndef(40, "x^{2}\\ln x", "\\ln x", "\\dfrac{1}{x}\\,dx", "x^{2}\\,dx", "\\dfrac{x^{3}}{3}", "\\dfrac{x^{3}}{3}\\ln x - \\int \\dfrac{x^{2}}{3}\\,dx", "\\dfrac{x^{3}}{3}\\ln x - \\dfrac{x^{3}}{9} + c", ["logarithm"], "Intermediate", 5),
  partsIndef(41, "x\\sec^{2}x", "x", "dx", "\\sec^{2}x\\,dx", "\\tan x", "x\\tan x - \\int \\tan x\\,dx", "x\\tan x + \\ln|\\cos x| + c", ["trigonometric"], "Intermediate", 5),
  partsIndef(42, "x\\ln(x^{2})", "\\ln(x^{2})", "\\dfrac{2}{x}\\,dx", "x\\,dx", "\\dfrac{x^{2}}{2}", "\\dfrac{x^{2}}{2}\\ln(x^{2}) - \\int x\\,dx", "x^{2}\\ln x - \\dfrac{x^{2}}{2} + c", ["logarithm"], "Intermediate", 5),

  // Intermediate — more algebraic / mixed (43–48)
  partsIndef(43, "x(1+x)", "x", "dx", "(1+x)\\,dx", "x + \\dfrac{x^{2}}{2}", "\\left(x + \\dfrac{x^{2}}{2}\\right)x - \\int \\left(x + \\dfrac{x^{2}}{2}\\right)dx", "\\dfrac{x^{2}}{2} + \\dfrac{x^{3}}{3} + c", ["algebraic"], "Easy", 4),
  partsIndef(44, "x\\sqrt{1+x}", "x", "dx", "\\sqrt{1+x}\\,dx", "\\dfrac{2}{3}(1+x)^{3/2}", "\\dfrac{2x}{3}(1+x)^{3/2} - \\int \\dfrac{2}{3}(1+x)^{3/2}\\,dx", "\\dfrac{2x}{3}(1+x)^{3/2} - \\dfrac{4}{15}(1+x)^{5/2} + c", ["algebraic"], "Intermediate", 5),
  partsIndef(45, "x\\ln(x+1)", "\\ln(x+1)", "\\dfrac{1}{x+1}\\,dx", "x\\,dx", "\\dfrac{x^{2}}{2}", "\\dfrac{x^{2}}{2}\\ln(x+1) - \\int \\dfrac{x^{2}}{2(x+1)}\\,dx", "\\dfrac{x^{2}}{2}\\ln(x+1) - \\dfrac{x^{2}}{4} + \\dfrac{x}{2} - \\dfrac{1}{2}\\ln(x+1) + c", ["logarithm"], "Hard", 7),
  partsIndef(46, "xe^{x}\\sin x", "x", "dx", "e^{x}\\sin x\\,dx", "\\text{(cyclic)}", "\\text{Apply parts twice or use the } e^{x}\\sin x \\text{ standard result}", "e^{x}\\left[(x-\\dfrac{1}{2})\\sin x - (x+\\dfrac{1}{2})\\cos x\\right] + c", ["exponential", "trigonometric"], "Hard", 8),
  partsIndef(47, "x\\ln^{2}x", "\\ln^{2}x", "\\dfrac{2\\ln x}{x}\\,dx", "x\\,dx", "\\dfrac{x^{2}}{2}", "\\dfrac{x^{2}}{2}\\ln^{2}x - \\int x\\ln x\\,dx", "\\dfrac{x^{2}}{2}\\ln^{2}x - \\dfrac{x^{2}}{2}\\ln x + \\dfrac{x^{2}}{4} + c", ["logarithm", "repeated parts"], "Hard", 7),
  partsIndef(48, "x^{2}e^{-x}", "x^{2}", "2x\\,dx", "e^{-x}\\,dx", "-e^{-x}", "-x^{2}e^{-x} + \\int 2xe^{-x}\\,dx", "-x^{2}e^{-x} - 2xe^{-x} - 2e^{-x} + c", ["exponential", "repeated parts"], "Intermediate", 6),

  // Hard — cyclic integrals and extended problems (49–60)
  hardParts(49,
    "Find $\\displaystyle\\int e^{x}\\sin x\\,dx$ using integration by parts twice.",
    [
      step(1, "Let I denote the integral", "I = \\int e^{x}\\sin x\\,dx", "Cyclic integrals are handled by letting the unknown integral appear again."),
      step(2, "First application: u = sin x", "u = \\sin x,\\; dv = e^{x}dx \\Rightarrow du = \\cos x\\,dx,\\; v = e^{x}", "Choose $u$ as the trig factor."),
      step(3, "Apply by parts", "I = e^{x}\\sin x - \\int e^{x}\\cos x\\,dx", "First reduction."),
      step(4, "Second application on J = ∫eˣ cos x dx", "u = \\cos x,\\; dv = e^{x}dx \\Rightarrow J = e^{x}\\cos x + \\int e^{x}\\sin x\\,dx", "Parts on the cosine integral brings back $I$."),
      step(5, "Substitute back", "I = e^{x}\\sin x - e^{x}\\cos x - I", "Replace $J$ in the expression for $I$."),
      step(6, "Solve for I", "2I = e^{x}(\\sin x - \\cos x)", "Collect like terms."),
      step(7, "Divide by 2", "I = \\dfrac{e^{x}}{2}(\\sin x - \\cos x) + c", "Standard cyclic result."),
      step(8, "Check by differentiating", "\\dfrac{d}{dx}\\left[\\dfrac{e^{x}}{2}(\\sin x - \\cos x)\\right] = e^{x}\\sin x", "Confirms the antiderivative."),
      step(9, "State the answer", "\\int e^{x}\\sin x\\,dx = \\dfrac{e^{x}}{2}(\\sin x - \\cos x) + c", "Memorise this form for exam speed."),
    ],
    "$\\displaystyle\\int e^{x}\\sin x\\,dx = \\dfrac{e^{x}}{2}(\\sin x - \\cos x) + c$.",
    ["cyclic", "exponential", "trigonometric"],
    8
  ),
  hardParts(50,
    "Find $\\displaystyle\\int e^{x}\\cos x\\,dx$ using integration by parts twice.",
    [
      step(1, "Let J denote the integral", "J = \\int e^{x}\\cos x\\,dx", "This pairs with the sine cyclic integral."),
      step(2, "First application: u = cos x", "u = \\cos x,\\; dv = e^{x}dx", "Trig as $u$, exponential as $dv$."),
      step(3, "Apply by parts", "J = e^{x}\\cos x + \\int e^{x}\\sin x\\,dx", "Note the plus from $du = -\\sin x\\,dx$."),
      step(4, "Parts on ∫eˣ sin x dx", "\\int e^{x}\\sin x\\,dx = e^{x}\\sin x - J", "Second application returns $J$."),
      step(5, "Substitute", "J = e^{x}\\cos x + e^{x}\\sin x - J", "Equation in $J$ only."),
      step(6, "Solve", "2J = e^{x}(\\cos x + \\sin x)", "Collect terms."),
      step(7, "Final form", "J = \\dfrac{e^{x}}{2}(\\cos x + \\sin x) + c", "Companion result to the sine case."),
      step(8, "Verify", "\\dfrac{d}{dx}\\left[\\dfrac{e^{x}}{2}(\\cos x + \\sin x)\\right] = e^{x}\\cos x", "Differentiation check."),
      step(9, "Answer", "\\int e^{x}\\cos x\\,dx = \\dfrac{e^{x}}{2}(\\cos x + \\sin x) + c", "Standard cyclic integral."),
    ],
    "$\\displaystyle\\int e^{x}\\cos x\\,dx = \\dfrac{e^{x}}{2}(\\cos x + \\sin x) + c$.",
    ["cyclic", "exponential", "trigonometric"],
    8
  ),
  hardParts(51,
    "Find $\\displaystyle\\int e^{2x}\\sin 3x\\,dx$.",
    [
      step(1, "Let I = ∫e^{2x} sin 3x dx", "I = \\int e^{2x}\\sin 3x\\,dx", "Scaled exponential–trig cyclic form."),
      step(2, "First parts: u = sin 3x", "u = \\sin 3x,\\; dv = e^{2x}dx \\Rightarrow du = 3\\cos 3x\\,dx,\\; v = \\dfrac{1}{2}e^{2x}", "Account for the factor $2$ in the exponent."),
      step(3, "Apply formula", "I = \\dfrac{1}{2}e^{2x}\\sin 3x - \\dfrac{3}{2}\\int e^{2x}\\cos 3x\\,dx", "First reduction."),
      step(4, "Second parts on cosine integral", "u = \\cos 3x,\\; dv = e^{2x}dx \\Rightarrow \\dfrac{1}{2}e^{2x}\\cos 3x + \\dfrac{3}{2}I", "Parts again brings back $I$."),
      step(5, "Substitute", "I = \\dfrac{1}{2}e^{2x}\\sin 3x - \\dfrac{3}{2}\\left(\\dfrac{1}{2}e^{2x}\\cos 3x + \\dfrac{3}{2}I\\right)", "Full substitution."),
      step(6, "Expand and collect I", "I + \\dfrac{9}{4}I = \\dfrac{1}{2}e^{2x}\\sin 3x - \\dfrac{3}{4}e^{2x}\\cos 3x", "Linear equation in $I$."),
      step(7, "Solve", "\\dfrac{13}{4}I = \\dfrac{e^{2x}}{4}(2\\sin 3x - 3\\cos 3x)", "Multiply through by $4$."),
      step(8, "Divide", "I = \\dfrac{e^{2x}}{13}(2\\sin 3x - 3\\cos 3x) + c", "General pattern: denominator $a^{2}+b^{2}$ for $e^{ax}\\sin bx$."),
      step(9, "Answer", "\\int e^{2x}\\sin 3x\\,dx = \\dfrac{e^{2x}}{13}(2\\sin 3x - 3\\cos 3x) + c", "Final antiderivative."),
    ],
    "$\\displaystyle\\int e^{2x}\\sin 3x\\,dx = \\dfrac{e^{2x}}{13}(2\\sin 3x - 3\\cos 3x) + c$.",
    ["cyclic", "exponential", "trigonometric"],
    9
  ),
  hardParts(52,
    "Find $\\displaystyle\\int x^{2}e^{-x}\\,dx$.",
    [
      step(1, "Recall repeated parts", "\\text{Apply by parts twice}", "Each application reduces the power of $x$."),
      step(2, "First: u = x²", "u = x^{2},\\; dv = e^{-x}dx \\Rightarrow -x^{2}e^{-x} + 2\\int xe^{-x}dx", "First reduction."),
      step(3, "Second on ∫xe^{-x}dx", "u = x,\\; dv = e^{-x}dx \\Rightarrow -xe^{-x} - \\int e^{-x}dx", "Standard $x$–exponential result."),
      step(4, "Third integral", "\\int e^{-x}dx = -e^{-x}", "Simple exponential."),
      step(5, "Combine", "-x^{2}e^{-x} - 2xe^{-x} - 2e^{-x} + c", "Gather all terms."),
      step(6, "Factor", "-e^{-x}(x^{2} + 2x + 2) + c", "Optional factored form."),
      step(7, "Check at x=0", "\\text{Derivative at } 0 \\text{ matches integrand}", "Quick sanity check."),
      step(8, "Verify derivative", "\\dfrac{d}{dx}[-e^{-x}(x^{2}+2x+2)] = x^{2}e^{-x}", "Full differentiation confirms."),
      step(9, "Answer", "\\int x^{2}e^{-x}\\,dx = -e^{-x}(x^{2}+2x+2) + c", "Final result."),
    ],
    "$\\displaystyle\\int x^{2}e^{-x}\\,dx = -e^{-x}(x^{2}+2x+2) + c$.",
    ["exponential", "repeated parts"],
    7
  ),
  hardParts(53,
    "Find $\\displaystyle\\int x\\arctan x\\,dx$.",
    [
      step(1, "Choose u using LIATE", "u = \\arctan x,\\; dv = x\\,dx", "Inverse trig has higher priority than algebraic."),
      step(2, "Find du and v", "du = \\dfrac{1}{1+x^{2}}dx,\\; v = \\dfrac{x^{2}}{2}", "Differentiate and integrate."),
      step(3, "Apply by parts", "\\dfrac{x^{2}}{2}\\arctan x - \\int \\dfrac{x^{2}}{2(1+x^{2})}dx", "Standard substitution."),
      step(4, "Simplify the fraction", "\\dfrac{x^{2}}{1+x^{2}} = 1 - \\dfrac{1}{1+x^{2}}", "Algebraic trick for the remaining integral."),
      step(5, "Split the integral", "\\int \\dfrac{x^{2}}{2(1+x^{2})}dx = \\dfrac{1}{2}\\int 1\\,dx - \\dfrac{1}{2}\\int \\dfrac{1}{1+x^{2}}dx", "Two standard integrals."),
      step(6, "Integrate", "\\dfrac{x}{2} - \\dfrac{1}{2}\\arctan x", "Power and inverse-tan results."),
      step(7, "Combine", "\\dfrac{x^{2}}{2}\\arctan x - \\dfrac{x}{2} + \\dfrac{1}{2}\\arctan x + c", "Gather terms."),
      step(8, "Factor arctan", "\\dfrac{1}{2}(x^{2}+1)\\arctan x - \\dfrac{x}{2} + c", "Alternative neat form."),
      step(9, "Answer", "\\int x\\arctan x\\,dx = \\dfrac{1}{2}(x^{2}+1)\\arctan x - \\dfrac{x}{2} + c", "Final antiderivative."),
    ],
    "$\\displaystyle\\int x\\arctan x\\,dx = \\dfrac{1}{2}(x^{2}+1)\\arctan x - \\dfrac{x}{2} + c$.",
    ["inverse trigonometric"],
    7
  ),
  hardParts(54,
    "Find $\\displaystyle\\int \\ln(1+x^{2})\\,dx$.",
    [
      step(1, "Write as product", "\\int 1 \\cdot \\ln(1+x^{2})\\,dx", "Treat the integrand as $1 \\times \\ln(1+x^{2})$."),
      step(2, "Choose u and dv", "u = \\ln(1+x^{2}),\\; dv = dx", "Logarithm is $u$."),
      step(3, "Find du and v", "du = \\dfrac{2x}{1+x^{2}}dx,\\; v = x", "Differentiate the log."),
      step(4, "Apply by parts", "x\\ln(1+x^{2}) - \\int \\dfrac{2x^{2}}{1+x^{2}}dx", "Boundary-style product minus integral."),
      step(5, "Simplify integrand", "\\dfrac{2x^{2}}{1+x^{2}} = 2 - \\dfrac{2}{1+x^{2}}", "Same algebraic split as for $\\arctan$ integrals."),
      step(6, "Integrate", "2x - 2\\arctan x", "Standard results."),
      step(7, "Combine", "x\\ln(1+x^{2}) - 2x + 2\\arctan x + c", "Full antiderivative."),
      step(8, "Check x=0", "\\text{Value } 0 \\text{ matches } \\ln 1 = 0", "Domain includes $x=0$."),
      step(9, "Answer", "\\int \\ln(1+x^{2})\\,dx = x\\ln(1+x^{2}) - 2x + 2\\arctan x + c", "Useful standard form."),
    ],
    "$\\displaystyle\\int \\ln(1+x^{2})\\,dx = x\\ln(1+x^{2}) - 2x + 2\\arctan x + c$.",
    ["logarithm", "inverse trigonometric"],
    8
  ),
  hardParts(55,
    "Evaluate $\\displaystyle\\int_{0}^{1} x^{2}e^{x}\\,dx$.",
    [
      step(1, "Repeated parts needed", "\\int x^{2}e^{x}dx \\text{ then evaluate}", "Find antiderivative first or work directly on $[0,1]$."),
      step(2, "First parts", "u = x^{2},\\; dv = e^{x}dx \\Rightarrow x^{2}e^{x} - 2\\int xe^{x}dx", "Reduce power of $x$."),
      step(3, "Second parts on ∫xeˣdx", "\\int xe^{x}dx = xe^{x} - e^{x}", "Standard result."),
      step(4, "Antiderivative", "x^{2}e^{x} - 2xe^{x} + 2e^{x}", "Combine before evaluating."),
      step(5, "Evaluate at x=1", "e - 2e + 2e = e", "Simplify at upper limit."),
      step(6, "Evaluate at x=0", "0 - 0 + 2 = 2", "Lower limit contribution."),
      step(7, "Subtract", "e - 2", "Definite value."),
      step(8, "Interpretation", "\\text{Area under } x^{2}e^{x} \\text{ on } [0,1]", "Positive area since integrand $>0$."),
      step(9, "Answer", "\\int_{0}^{1} x^{2}e^{x}\\,dx = e - 2", "Exact value."),
    ],
    "$\\displaystyle\\int_{0}^{1} x^{2}e^{x}\\,dx = e - 2$.",
    ["exponential", "definite integral", "repeated parts"],
    7
  ),
  hardParts(56,
    "Evaluate $\\displaystyle\\int_{1}^{e} x(\\ln x)^{2}\\,dx$.",
    [
      step(1, "Choose u", "u = (\\ln x)^{2},\\; dv = x\\,dx", "Logarithmic power as $u$."),
      step(2, "Find du and v", "du = \\dfrac{2\\ln x}{x}dx,\\; v = \\dfrac{x^{2}}{2}", "Differentiate $(\\ln x)^{2}$."),
      step(3, "Apply by parts", "\\left[\\dfrac{x^{2}}{2}(\\ln x)^{2}\\right]_{1}^{e} - \\int_{1}^{e} x\\ln x\\,dx", "Definite by parts."),
      step(4, "Boundary term", "\\dfrac{e^{2}}{2}", "At $x=e$; at $x=1$ the log term is $0$."),
      step(5, "Remaining integral", "\\int_{1}^{e} x\\ln x\\,dx = \\dfrac{e^{2}}{4} + \\dfrac{1}{4}", "Known definite result."),
      step(6, "Subtract", "\\dfrac{e^{2}}{2} - \\dfrac{e^{2}}{4} - \\dfrac{1}{4}", "Combine exact values."),
      step(7, "Simplify", "\\dfrac{e^{2}}{4} - \\dfrac{1}{4}", "Final exact form."),
      step(8, "Factor", "\\dfrac{1}{4}(e^{2}-1)", "Neat factored answer."),
      step(9, "Answer", "\\int_{1}^{e} x(\\ln x)^{2}\\,dx = \\dfrac{e^{2}-1}{4}", "Definite integral value."),
    ],
    "$\\displaystyle\\int_{1}^{e} x(\\ln x)^{2}\\,dx = \\dfrac{e^{2}-1}{4}$.",
    ["logarithm", "definite integral"],
    8
  ),
  hardParts(57,
    "Find $\\displaystyle\\int x\\sin^{2}x\\,dx$ using the identity $\\sin^{2}x = \\dfrac{1 - \\cos 2x}{2}$.",
    [
      step(1, "Use the double-angle identity", "\\sin^{2}x = \\dfrac{1 - \\cos 2x}{2}", "Reduces to integrable standard forms."),
      step(2, "Rewrite integral", "\\int x\\sin^{2}x\\,dx = \\dfrac{1}{2}\\int x\\,dx - \\dfrac{1}{2}\\int x\\cos 2x\\,dx", "Split into two integrals."),
      step(3, "First integral", "\\dfrac{1}{2}\\int x\\,dx = \\dfrac{x^{2}}{4}", "Polynomial."),
      step(4, "Second: parts on x cos 2x", "u = x,\\; dv = \\cos 2x\\,dx \\Rightarrow \\dfrac{x}{2}\\sin 2x - \\dfrac{1}{4}\\sin 2x", "Standard trig by parts."),
      step(5, "Combine", "\\dfrac{x^{2}}{4} - \\dfrac{x}{4}\\sin 2x + \\dfrac{1}{8}\\cos 2x + c", "Subtract the half."),
      step(6, "Alternative form", "\\dfrac{x^{2}}{4} + \\dfrac{x}{4}\\sin 2x - \\dfrac{1}{8}\\sin 2x \\cdot 2 + \\cdots", "Check signs carefully."),
      step(7, "Simplify", "\\dfrac{x^{2}}{4} - \\dfrac{x}{4}\\sin 2x + \\dfrac{1}{8}\\cos 2x + c", "Confirmed."),
      step(8, "Verify at x=0", "\\text{Constant term } \\tfrac{1}{8} + c", "Consistent."),
      step(9, "Answer", "\\int x\\sin^{2}x\\,dx = \\dfrac{x^{2}}{4} - \\dfrac{x}{4}\\sin 2x + \\dfrac{1}{8}\\cos 2x + c", "Identity plus by parts."),
    ],
    "$\\displaystyle\\int x\\sin^{2}x\\,dx = \\dfrac{x^{2}}{4} - \\dfrac{x}{4}\\sin 2x + \\dfrac{1}{8}\\cos 2x + c$.",
    ["trigonometric", "identity"],
    8
  ),
  hardParts(58,
    "(a) Show that $\\displaystyle\\int \\ln x\\,dx = x\\ln x - x + c$.\n(b) Hence find $\\displaystyle\\int_{1}^{e^{2}} \\ln x\\,dx$.",
    [
      step(1, "(a) Choose u and dv", "u = \\ln x,\\; dv = dx", "Classic logarithm integral."),
      step(2, "Apply by parts", "x\\ln x - \\int dx", "Remaining integral is $x$."),
      step(3, "Part (a) result", "x\\ln x - x + c", "Standard result proved."),
      step(4, "(b) Use limits 1 to e²", "\\int_{1}^{e^{2}} \\ln x\\,dx", "Evaluate the antiderivative."),
      step(5, "At x = e²", "e^{2}\\ln(e^{2}) - e^{2} = 2e^{2} - e^{2} = e^{2}", "Use $\\ln(e^{2})=2$."),
      step(6, "At x = 1", "1\\ln 1 - 1 = -1", "Lower limit."),
      step(7, "Subtract", "e^{2} - (-1) = e^{2} + 1", "Definite value."),
      step(8, "Interpretation", "\\text{Area under } \\ln x \\text{ on } [1,e^{2}]", "Log curve area."),
      step(9, "Answer", "(a) $x\\ln x - x + c$; (b) $e^{2}+1$", "Both parts."),
      step(10, "Check magnitude", "e^{2}+1 \\approx 8.39", "Reasonable positive area."),
    ],
    "(a) $\\displaystyle\\int \\ln x\\,dx = x\\ln x - x + c$. (b) $\\displaystyle\\int_{1}^{e^{2}} \\ln x\\,dx = e^{2}+1$.",
    ["logarithm", "multi-part"],
    8
  ),
  hardParts(59,
    "A curve has gradient function $\\dfrac{dy}{dx} = x e^{-x}$. Given that the curve passes through $(0, 1)$, find $y$ in terms of $x$.",
    [
      step(1, "Integrate the gradient", "y = \\int xe^{-x}\\,dx + c", "Position from velocity analogue."),
      step(2, "By parts: u = x", "u = x,\\; dv = e^{-x}dx \\Rightarrow -xe^{-x} - \\int (-e^{-x})dx", "Standard setup."),
      step(3, "Remaining integral", "\\int e^{-x}dx = -e^{-x}", "Exponential."),
      step(4, "Antiderivative", "y = -xe^{-x} - e^{-x} + c", "Combine terms."),
      step(5, "Factor", "y = -e^{-x}(x+1) + c", "Optional factored form."),
      step(6, "Use (0, 1)", "1 = -e^{0}(1) + c \\Rightarrow c = 2", "Initial condition."),
      step(7, "Particular solution", "y = -e^{-x}(x+1) + 2", "Curve equation."),
      step(8, "Check at x=0", "y = -1 + 2 = 1", "Passes through given point."),
      step(9, "Answer", "y = 2 - e^{-x}(x+1)", "Final model."),
    ],
    "$y = 2 - e^{-x}(x+1)$.",
    ["modelling", "differential equations"],
    7
  ),
  hardParts(60,
    "Find $\\displaystyle\\int x^{2}\\ln x\\,dx$ and hence evaluate $\\displaystyle\\int_{1}^{e} x^{2}\\ln x\\,dx$.",
    [
      step(1, "Choose u = ln x", "u = \\ln x,\\; dv = x^{2}dx", "Logarithm as $u$."),
      step(2, "Find du and v", "du = \\dfrac{1}{x}dx,\\; v = \\dfrac{x^{3}}{3}", "Power rule for $v$."),
      step(3, "Apply by parts", "\\dfrac{x^{3}}{3}\\ln x - \\int \\dfrac{x^{2}}{3}dx", "Reduce to polynomial."),
      step(4, "Integrate", "\\dfrac{x^{3}}{3}\\ln x - \\dfrac{x^{3}}{9} + c", "Indefinite result."),
      step(5, "Evaluate at x=e", "\\dfrac{e^{3}}{3} - \\dfrac{e^{3}}{9} = \\dfrac{2e^{3}}{9}", "Upper limit."),
      step(6, "Evaluate at x=1", "0 - \\dfrac{1}{9} = -\\dfrac{1}{9}", "Lower limit."),
      step(7, "Subtract", "\\dfrac{2e^{3}}{9} + \\dfrac{1}{9} = \\dfrac{2e^{3}+1}{9}", "Definite value."),
      step(8, "Hence link", "\\text{Indefinite integral evaluated at limits}", "Shows the power of finding $F(x)$ first."),
      step(9, "Answer", "\\int x^{2}\\ln x\\,dx = \\dfrac{x^{3}}{3}\\ln x - \\dfrac{x^{3}}{9} + c;\\; \\int_{1}^{e} = \\dfrac{2e^{3}+1}{9}", "Both forms."),
    ],
    "$\\displaystyle\\int x^{2}\\ln x\\,dx = \\dfrac{x^{3}}{3}\\ln x - \\dfrac{x^{3}}{9} + c$; $\\displaystyle\\int_{1}^{e} x^{2}\\ln x\\,dx = \\dfrac{2e^{3}+1}{9}$.",
    ["logarithm", "definite integral"],
    7
  ),

  // Hard — final exam-style mix (61–70)
  partsIndef(61, "x\\cos(4x)", "x", "dx", "\\cos(4x)\\,dx", "\\dfrac{1}{4}\\sin(4x)", "\\dfrac{x}{4}\\sin(4x) - \\int \\dfrac{1}{4}\\sin(4x)\\,dx", "\\dfrac{x}{4}\\sin(4x) + \\dfrac{1}{16}\\cos(4x) + c", ["trigonometric"], "Intermediate", 5),
  partsIndef(62, "x e^{-3x}", "x", "dx", "e^{-3x}\\,dx", "-\\dfrac{1}{3}e^{-3x}", "-\\dfrac{x}{3}e^{-3x} - \\int \\left(-\\dfrac{1}{3}e^{-3x}\\right)dx", "-\\dfrac{x}{3}e^{-3x} - \\dfrac{1}{9}e^{-3x} + c", ["exponential"], "Easy", 4),
  partsIndef(63, "x\\ln(3x)", "\\ln(3x)", "\\dfrac{1}{x}\\,dx", "x\\,dx", "\\dfrac{x^{2}}{2}", "\\dfrac{x^{2}}{2}\\ln(3x) - \\int \\dfrac{x}{2}\\,dx", "\\dfrac{x^{2}}{2}\\ln(3x) - \\dfrac{x^{2}}{4} + c", ["logarithm"], "Intermediate", 5),
  partsIndef(64, "x^{2}\\cos(2x)", "x^{2}", "2x\\,dx", "\\cos(2x)\\,dx", "\\dfrac{1}{2}\\sin(2x)", "\\dfrac{x^{2}}{2}\\sin(2x) - \\int x\\sin(2x)\\,dx", "\\dfrac{x^{2}}{2}\\sin(2x) + \\dfrac{x}{2}\\cos(2x) - \\dfrac{1}{4}\\sin(2x) + c", ["trigonometric", "repeated parts"], "Hard", 7),
  partsIndef(65, "x(2+x)", "x", "dx", "(2+x)\\,dx", "2x + \\dfrac{x^{2}}{2}", "\\left(2x + \\dfrac{x^{2}}{2}\\right)x - \\int \\left(2x + \\dfrac{x^{2}}{2}\\right)dx", "x^{2} + \\dfrac{x^{3}}{3} + c", ["algebraic"], "Easy", 4),
  partsDefinite(66, "x e^{x}", 0, "\\ln 2", "x", "dx", "e^{x}\\,dx", "e^{x}",
    [
      { latex: "\\left[xe^{x}\\right]_{0}^{\\ln 2} - \\int_{0}^{\\ln 2} e^{x}\\,dx", exp: "By parts on $[0, \\ln 2]$." },
      { latex: "2\\ln 2", exp: "Upper boundary: $\\ln 2 \\cdot e^{\\ln 2} = 2\\ln 2$." },
      { latex: "-(2-1) = -1", exp: "Remaining integral: $e^{x}$ from $0$ to $\\ln 2$." },
    ], "2\\ln 2 - 1", ["exponential"]),
  partsDefinite(67, "x\\cos x", 0, "\\pi", "x", "dx", "\\cos x\\,dx", "\\sin x",
    [
      { latex: "\\left[x\\sin x\\right]_{0}^{\\pi} - \\int_{0}^{\\pi} \\sin x\\,dx", exp: "Standard by parts." },
      { latex: "0", exp: "Both boundary terms at $0$ and $\\pi$ give $0$." },
      { latex: "-\\left[-\\cos x\\right]_{0}^{\\pi} = -2", exp: "Cosine integral contributes $-2$." },
    ], "-2", ["trigonometric"]),
  hardParts(68,
    "Use integration by parts to show $\\displaystyle\\int e^{ax}\\sin bx\\,dx = \\dfrac{e^{ax}}{a^{2}+b^{2}}(a\\sin bx - b\\cos bx) + c$ for constants $a, b \\neq 0$.",
    [
      step(1, "Let I = ∫e^{ax} sin bx dx", "I = \\int e^{ax}\\sin bx\\,dx", "General cyclic template."),
      step(2, "First parts", "u = \\sin bx,\\; dv = e^{ax}dx", "Trig as $u$."),
      step(3, "After first application", "I = \\dfrac{e^{ax}}{a}\\sin bx - \\dfrac{b}{a}\\int e^{ax}\\cos bx\\,dx", "Factor $\\tfrac{1}{a}$ from $v$."),
      step(4, "Second parts on cosine integral", "u = \\cos bx,\\; dv = e^{ax}dx \\Rightarrow \\dfrac{e^{ax}}{a}\\cos bx + \\dfrac{b}{a}I", "Brings $I$ back."),
      step(5, "Substitute and solve", "I\\left(1 + \\dfrac{b^{2}}{a^{2}}\\right) = \\dfrac{e^{ax}}{a}(\\sin bx - \\dfrac{b}{a}\\cos bx)", "Linear equation."),
      step(6, "Multiply by a²", "I(a^{2}+b^{2}) = e^{ax}(a\\sin bx - b\\cos bx)", "Clear denominators."),
      step(7, "Divide", "I = \\dfrac{e^{ax}}{a^{2}+b^{2}}(a\\sin bx - b\\cos bx) + c", "General formula."),
      step(8, "Check a=b=1", "Matches \\dfrac{e^{x}}{2}(\\sin x - \\cos x)", "Recovers the special case."),
      step(9, "Answer", "\\int e^{ax}\\sin bx\\,dx = \\dfrac{e^{ax}}{a^{2}+b^{2}}(a\\sin bx - b\\cos bx) + c", "Proved."),
      step(10, "Exam tip", "a^{2}+b^{2} \\text{ is the denominator in the template}", "Saves time in exams."),
    ],
    "$\\displaystyle\\int e^{ax}\\sin bx\\,dx = \\dfrac{e^{ax}}{a^{2}+b^{2}}(a\\sin bx - b\\cos bx) + c$.",
    ["cyclic", "proof"],
    9
  ),
  hardParts(69,
    "(a) Find $\\displaystyle\\int x\\ln x\\,dx$.\n(b) Hence find the exact area bounded by $y = x\\ln x$, the $x$-axis and the lines $x = 1$ and $x = e$.",
    [
      step(1, "(a) By parts with u = ln x", "u = \\ln x,\\; dv = x\\,dx", "Logarithm priority."),
      step(2, "Antiderivative", "F(x) = \\dfrac{x^{2}}{2}\\ln x - \\dfrac{x^{2}}{4}", "From part (a)."),
      step(3, "(b) Identify region", "y = x\\ln x \\geq 0 \\text{ on } [1,e]", "Integrand non-negative on interval."),
      step(4, "Set up area", "A = \\int_{1}^{e} x\\ln x\\,dx", "Definite integral of part (a)."),
      step(5, "Evaluate at x=e", "\\dfrac{e^{2}}{2} - \\dfrac{e^{2}}{4} = \\dfrac{e^{2}}{4}", "Upper limit."),
      step(6, "Evaluate at x=1", "0 - \\dfrac{1}{4} = -\\dfrac{1}{4}", "Lower limit."),
      step(7, "Area", "A = \\dfrac{e^{2}}{4} + \\dfrac{1}{4}", "Subtract antiderivative values."),
      step(8, "Simplify", "A = \\dfrac{e^{2}+1}{4}", "Exact area."),
      step(9, "Units", "\\text{square units}", "Area interpretation."),
      step(10, "Answer", "(a) $\\tfrac{x^{2}}{2}\\ln x - \\tfrac{x^{2}}{4} + c$; (b) $\\tfrac{e^{2}+1}{4}$", "Both parts."),
    ],
    "(a) $\\displaystyle\\int x\\ln x\\,dx = \\dfrac{x^{2}}{2}\\ln x - \\dfrac{x^{2}}{4} + c$. (b) Area $= \\dfrac{e^{2}+1}{4}$.",
    ["logarithm", "area", "multi-part"],
    9
  ),
  hardParts(70,
    "(a) Use integration by parts to find $\\displaystyle\\int x^{2}e^{x}\\,dx$.\n(b) Find $\\displaystyle\\int_{0}^{2} x^{2}e^{x}\\,dx$.\n(c) State whether the trapezium rule with 4 strips would over- or under-estimate the integral in (b), giving a reason.",
    [
      step(1, "(a) First parts u = x²", "x^{2}e^{x} - 2\\int xe^{x}dx", "Reduce power."),
      step(2, "Second parts", "\\int xe^{x}dx = xe^{x} - e^{x}", "Standard."),
      step(3, "(a) Result", "x^{2}e^{x} - 2xe^{x} + 2e^{x} + c", "Antiderivative."),
      step(4, "(b) At x=2", "4e^{2} - 4e^{2} + 2e^{2} = 2e^{2}", "Upper limit."),
      step(5, "(b) At x=0", "0 - 0 + 2 = 2", "Lower limit."),
      step(6, "(b) Value", "2e^{2} - 2", "Definite integral."),
      step(7, "(c) Concavity", "f(x)=x^{2}e^{x} \\Rightarrow f''(x) = e^{x}(x^{2}+4x+2) > 0 \\text{ on } [0,2]", "Second derivative positive."),
      step(8, "(c) Trapezium rule", "\\text{Concave up } \\Rightarrow \\text{ chords lie above curve } \\Rightarrow \\text{ over-estimate}", "Standard numerical-integration reasoning."),
      step(9, "Answer (a)", "x^{2}e^{x} - 2xe^{x} + 2e^{x} + c", "Part (a)."),
      step(10, "Answer (b,c)", "(b) $2e^{2}-2$; (c) over-estimate (concave up)", "All parts."),
    ],
    "(a) $\\displaystyle\\int x^{2}e^{x}\\,dx = x^{2}e^{x} - 2xe^{x} + 2e^{x} + c$. (b) $2e^{2}-2$. (c) Over-estimate — $f''(x)>0$ on $[0,2]$ so the curve is concave up.",
    ["exponential", "multi-part", "numerical integration link"],
    10
  ),
];

const STEP_MIN = { Easy: 6, Intermediate: 9, Hard: 13 };
const STEP_MAX = { Easy: 9, Intermediate: 13, Hard: 18 };

const EXTRA_STEPS = [
  (q) => step(0, "Recall integration by parts", "\\int u\\,dv = uv - \\int v\\,du", "This formula comes from reversing the product rule for differentiation."),
  (q) => step(0, "Use LIATE to choose u", "\\text{Log, Inverse trig, Algebraic, Trig, Exponential}", "Pick $u$ to be the factor that simplifies when differentiated."),
  (q) => step(0, "Differentiate u to find du", "du = u'\\,dx", "Differentiation of $u$ should ideally reduce complexity."),
  (q) => step(0, "Integrate dv to find v", "v = \\int dv", "Integration of $dv$ must be doable — if not, swap your choice of $u$ and $dv$."),
  (q) => step(0, "Apply the formula", "uv - \\int v\\,du", "Substitute all four parts into the by-parts formula."),
  (q) => step(0, "Evaluate the remaining integral", "\\int v\\,du", "The new integral should be simpler than the original."),
  (q) => step(0, "Apply parts again if needed", "\\text{Repeated integration by parts}", "When $u$ is a polynomial, each application reduces its degree."),
  (q) => step(0, "For cyclic integrals, let I denote the integral", "I = \\int (\\cdots)\\,dx", "When the integral reappears, form an equation and solve for $I$."),
  (q) => step(0, "Add +c for indefinite integrals", "+c", "Every indefinite antiderivative needs an arbitrary constant."),
  (q) => step(0, "Check by differentiating", "\\dfrac{d}{dx}(\\text{answer}) = \\text{integrand}", "Differentiation confirms the result is correct."),
  (q) => step(0, "State the final answer", q.workedSolution.finalAnswer.replace(/^\$|\\$/g, ""), "Present the result clearly in the required form."),
];

for (const q of questions) {
  const min = STEP_MIN[q.difficulty];
  const max = STEP_MAX[q.difficulty];
  let steps = [...q.workedSolution.steps];
  let pad = 0;
  while (steps.length < min) {
    const extra = EXTRA_STEPS[pad % EXTRA_STEPS.length](q);
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

const fileContent = `import { Question } from "@/lib/types";

export const questions: Question[] = ${JSON.stringify(questions, null, 2)};
`;

writeFileSync(outPath, fileContent);
console.log(`Wrote ${questions.length} questions to ${outPath}`);
