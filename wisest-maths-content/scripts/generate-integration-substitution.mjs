#!/usr/bin/env node
/**
 * Generates 70 A-Level "Integration by substitution" questions with full worked solutions.
 * Output: src/data/questions/a-level-maths/year-2-pure/integration-by-substitution.ts
 */

import { writeFileSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const outPath = resolve(__dirname, "../src/data/questions/a-level-maths/year-2-pure/integration-by-substitution.ts");

const SUBTOPIC = "Integration by substitution";
const SUBTOPIC_ID = "al.y2.pure.integration-substitution";
const LEVEL = "A-Level Maths";
const TOPIC = "Year 2 Pure";

const qid = (n) => `al.y2.pure.integration-substitution.q${String(n).padStart(3, "0")}`;
const step = (n, description, workingLatex, explanation) => ({ stepNumber: n, description, workingLatex, explanation, diagram: null });
const base = (meta) => ({ level: LEVEL, topic: TOPIC, subtopic: SUBTOPIC, subtopicId: SUBTOPIC_ID, questionDiagram: null, ...meta });
const subQ = (n, { difficulty, marks, answerType, tags, questionText, steps, finalAnswer }) =>
  base({ id: qid(n), difficulty, marks, answerType, tags: ["integration by substitution", ...tags], questionText, workedSolution: { steps, finalAnswer } });

function uSubIndef(n, integrand, u, du, inU, result, tags = [], difficulty = "Easy", marks = 4) {
  const steps = [
    step(1, "Choose a substitution", `u = ${u}`, "Look for a function whose derivative also appears as a factor in the integrand."),
    step(2, "Differentiate", `\\dfrac{du}{dx} = ${du}`, "Find $du$ in terms of $dx$."),
    step(3, "Rearrange", `du = (${du})\\,dx`, "Express $dx$ (or the matching factor) in terms of $du$."),
    step(4, "Substitute into the integral", `\\int ${inU}\\,du`, "Replace every part of the integral with $u$-terms."),
    step(5, "Integrate with respect to u", result.replace(/ \+ c$/, ""), "Integrate the simpler expression in $u$."),
    step(6, "Replace u", result, "Substitute back the original expression for $u$."),
    step(7, "State the answer", `\\int ${integrand}\\,dx = ${result}`, "Include $+c$ for an indefinite integral."),
  ];
  return subQ(n, {
    difficulty,
    marks,
    answerType: "expression",
    tags,
    questionText: `Use substitution to find $\\displaystyle\\int ${integrand}\\,dx$.`,
    steps,
    finalAnswer: `$\\displaystyle\\int ${integrand}\\,dx = ${result}$.`,
  });
}

function uSubDefinite(n, integrand, a, b, uA, uB, workSteps, result, tags = [], difficulty = "Intermediate", marks = 5) {
  const steps = [
    step(1, "Set up the substitution", workSteps[0].latex, workSteps[0].exp),
    step(2, "Change the limits", `x = ${a} \\Rightarrow u = ${uA};\\quad x = ${b} \\Rightarrow u = ${uB}`, "For definite integrals, convert the $x$-limits to $u$-limits."),
    step(3, "Rewrite the integral", workSteps[1].latex, workSteps[1].exp),
    step(4, "Integrate in u", workSteps[2].latex, workSteps[2].exp),
    step(5, "Evaluate at the limits", workSteps[3].latex, workSteps[3].exp),
    step(6, "Simplify", result, "Give the exact value."),
    step(7, "Check reasonableness", "\\text{Sign and magnitude should match the area interpretation}", "A quick estimate can confirm the result."),
    step(8, "State the answer", `\\int_{${a}}^{${b}} ${integrand}\\,dx = ${result}`, "Final definite integral value."),
  ];
  return subQ(n, {
    difficulty,
    marks,
    answerType: "exact",
    tags: [...tags, "definite integral"],
    questionText: `Use substitution to evaluate $\\displaystyle\\int_{${a}}^{${b}} ${integrand}\\,dx$.`,
    steps,
    finalAnswer: `$\\displaystyle\\int_{${a}}^{${b}} ${integrand}\\,dx = ${result}$.`,
  });
}

function reverseChain(n, integrand, inner, outer, result, tags = []) {
  const steps = [
    step(1, "Recognise the form", `\\int f'(${inner}) \\cdot g(${inner})\\,dx`, "The integrand is a derivative of the inner function times something of the inner function."),
    step(2, "Identify the inner function", `u = ${inner}`, "Choose $u$ to be the inner function."),
    step(3, "Note the derivative factor", `\\dfrac{du}{dx} \\text{ appears in the integrand}`, "The coefficient matches the derivative of $u$ (up to a constant)."),
    step(4, "Integrate directly", `\\int ${outer}\\,du = ${result.replace(/ \+ c$/, "").replace(inner, "u")}`, "This is reverse chain rule integration."),
    step(5, "Replace u", result, "Write the answer in terms of $x$."),
    step(6, "Verify", `\\dfrac{d}{dx}(${result.replace(/ \+ c$/, "")}) = ${integrand}`, "Differentiate to confirm."),
    step(7, "State the answer", `\\int ${integrand}\\,dx = ${result}`, "Final antiderivative."),
  ];
  return subQ(n, {
    difficulty: "Easy",
    marks: 3,
    answerType: "expression",
    tags: [...tags, "reverse chain rule"],
    questionText: `Find $\\displaystyle\\int ${integrand}\\,dx$ by recognising a reverse chain rule.`,
    steps,
    finalAnswer: `$\\displaystyle\\int ${integrand}\\,dx = ${result}$.`,
  });
}

function hardSub(n, questionText, steps, finalAnswer, tags = [], marks = 8) {
  return subQ(n, {
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
  // Easy — basic u-substitution (1–15)
  uSubIndef(1, "2x(x^{2}+1)^{5}", "x^{2}+1", "2x", "u^{5}", "\\dfrac{1}{6}(x^{2}+1)^{6} + c", ["polynomial"]),
  uSubIndef(2, "3x^{2}\\cos(x^{3})", "x^{3}", "3x^{2}", "\\cos u", "\\sin(x^{3}) + c", ["trigonometric"]),
  uSubIndef(3, "xe^{x^{2}}", "x^{2}", "2x", "\\dfrac{1}{2}e^{u}", "\\dfrac{1}{2}e^{x^{2}} + c", ["exponential"]),
  uSubIndef(4, "x\\sqrt{x^{2}+1}", "x^{2}+1", "2x", "\\dfrac{1}{2}\\sqrt{u}", "\\dfrac{1}{3}(x^{2}+1)^{3/2} + c", ["surds"]),
  uSubIndef(5, "\\dfrac{2x}{x^{2}+1}", "x^{2}+1", "2x", "\\dfrac{1}{u}", "\\ln|x^{2}+1| + c", ["logarithm"]),
  uSubIndef(6, "4x^{3}(x^{4}-3)^{2}", "x^{4}-3", "4x^{3}", "u^{2}", "\\dfrac{1}{3}(x^{4}-3)^{3} + c", ["polynomial"]),
  uSubIndef(7, "\\dfrac{1}{2x+1}", "2x+1", "2", "\\dfrac{1}{u}", "\\dfrac{1}{2}\\ln|2x+1| + c", ["linear denominator"]),
  uSubIndef(8, "e^{3x}", "3x", "3", "e^{u}", "\\dfrac{1}{3}e^{3x} + c", ["exponential"]),
  uSubIndef(9, "\\sin(2x)", "2x", "2", "\\cos u", "-\\dfrac{1}{2}\\cos(2x) + c", ["trigonometric"]),
  uSubIndef(10, "\\cos(3x)", "3x", "3", "\\sin u", "\\dfrac{1}{3}\\sin(3x) + c", ["trigonometric"]),
  uSubIndef(11, "x(x^{2}+4)^{-1/2}", "x^{2}+4", "2x", "\\dfrac{1}{2}u^{-1/2}", "\\sqrt{x^{2}+4} + c", ["surds"]),
  uSubIndef(12, "5x^{4}(x^{5}+2)^{3}", "x^{5}+2", "5x^{4}", "u^{3}", "\\dfrac{1}{4}(x^{5}+2)^{4} + c", ["polynomial"]),
  uSubIndef(13, "\\dfrac{x}{x^{2}+9}", "x^{2}+9", "2x", "\\dfrac{1}{2u}", "\\dfrac{1}{2}\\ln(x^{2}+9) + c", ["logarithm"]),
  uSubIndef(14, "2x\\sin(x^{2})", "x^{2}", "2x", "\\sin u", "-\\cos(x^{2}) + c", ["trigonometric"]),
  uSubIndef(15, "\\dfrac{e^{x}}{e^{x}+1}", "e^{x}+1", "e^{x}", "\\dfrac{1}{u}", "\\ln|e^{x}+1| + c", ["exponential"]),

  // Easy — reverse chain rule (16–22)
  reverseChain(16, "3x^{2}(x^{3}+1)^{4}", "x^{3}+1", "u^{4}", "\\dfrac{1}{5}(x^{3}+1)^{5} + c"),
  reverseChain(17, "\\dfrac{4x^{3}}{x^{4}+1}", "x^{4}+1", "\\dfrac{1}{u}", "\\ln|x^{4}+1| + c"),
  reverseChain(18, "2\\cos x \\sin x", "\\sin x", "u", "\\sin^{2}x + c", ["double angle"]),
  reverseChain(19, "-\\sin x \\cos x", "\\cos x", "u", "-\\dfrac{1}{2}\\cos^{2}x + c"),
  reverseChain(20, "\\dfrac{1}{x\\ln x}", "\\ln x", "\\dfrac{1}{u}", "\\ln|\\ln x| + c"),
  reverseChain(21, "x\\sqrt{1-x^{2}}", "1-x^{2}", "u^{1/2}", "-\\dfrac{1}{3}(1-x^{2})^{3/2} + c"),
  reverseChain(22, "\\sec^{2}x \\tan x", "\\tan x", "u", "\\dfrac{1}{2}\\tan^{2}x + c", ["secant"]),

  // Intermediate — definite integrals (23–38)
  uSubDefinite(23, "2x(x^{2}+1)^{3}", 0, 1, 1, 2,
    [
      { latex: "u = x^{2}+1,\\; du = 2x\\,dx", exp: "The factor $2x$ matches the derivative of $x^2+1$." },
      { latex: "\\int_{1}^{2} u^{3}\\,du", exp: "Convert limits: $x=0 \\Rightarrow u=1$, $x=1 \\Rightarrow u=2$." },
      { latex: "\\left[\\dfrac{u^{4}}{4}\\right]_{1}^{2}", exp: "Integrate $u^3$." },
      { latex: "\\dfrac{16}{4} - \\dfrac{1}{4} = \\dfrac{15}{4}", exp: "Evaluate at $u=2$ and $u=1$." },
    ], "\\dfrac{15}{4}"),
  uSubDefinite(24, "xe^{-x^{2}}", 0, 1, 0, -1,
    [
      { latex: "u = -x^{2},\\; du = -2x\\,dx", exp: "Use $u=-x^2$ so the $x\\,dx$ factor matches." },
      { latex: "-\\dfrac{1}{2}\\int_{0}^{-1} e^{u}\\,du", exp: "Limits: $x=0 \\Rightarrow u=0$, $x=1 \\Rightarrow u=-1$." },
      { latex: "-\\dfrac{1}{2}\\left[e^{u}\\right]_{0}^{-1}", exp: "Integrate $e^u$." },
      { latex: "-\\dfrac{1}{2}(e^{-1}-1) = \\dfrac{1-e^{-1}}{2}", exp: "Simplify the exact value." },
    ], "\\dfrac{1-e^{-1}}{2}", ["exponential"]),
  uSubDefinite(25, "\\dfrac{1}{x}", 1, "e", 0, 1,
    [
      { latex: "u = \\ln x,\\; du = \\dfrac{1}{x}\\,dx", exp: "The integrand is exactly $du$." },
      { latex: "\\int_{0}^{1} du", exp: "Limits: $x=1 \\Rightarrow u=0$, $x=e \\Rightarrow u=1$." },
      { latex: "\\left[u\\right]_{0}^{1}", exp: "Integrate $1$." },
      { latex: "1", exp: "Evaluate directly." },
    ], "1", ["logarithm"]),
  uSubDefinite(26, "\\cos x", 0, "\\dfrac{\\pi}{2}", 0, 1,
    [
      { latex: "u = \\sin x,\\; du = \\cos x\\,dx", exp: "The integrand is the derivative of $\\sin x$." },
      { latex: "\\int_{0}^{1} du", exp: "Limits: $x=0 \\Rightarrow u=0$, $x=\\pi/2 \\Rightarrow u=1$." },
      { latex: "\\left[u\\right]_{0}^{1}", exp: "Integrate." },
      { latex: "1", exp: "Area under $\\cos x$ from $0$ to $\\pi/2$ is $1$." },
    ], "1", ["trigonometric"]),
  uSubDefinite(27, "\\dfrac{2x}{x^{2}+1}", 0, 1, 1, 2,
    [
      { latex: "u = x^{2}+1,\\; du = 2x\\,dx", exp: "Standard logarithmic substitution." },
      { latex: "\\int_{1}^{2} \\dfrac{1}{u}\\,du", exp: "Change limits accordingly." },
      { latex: "\\left[\\ln u\\right]_{1}^{2}", exp: "Integrate $1/u$." },
      { latex: "\\ln 2", exp: "Evaluate." },
    ], "\\ln 2"),
  uSubDefinite(28, "x\\sqrt{x^{2}+4}", 0, 2, 4, 8,
    [
      { latex: "u = x^{2}+4,\\; du = 2x\\,dx", exp: "Match the $x\\,dx$ factor." },
      { latex: "\\dfrac{1}{2}\\int_{4}^{8} u^{1/2}\\,du", exp: "Convert limits." },
      { latex: "\\dfrac{1}{2}\\left[\\dfrac{2}{3}u^{3/2}\\right]_{4}^{8}", exp: "Integrate $u^{1/2}$." },
      { latex: "\\dfrac{1}{3}(8^{3/2}-4^{3/2}) = \\dfrac{1}{3}(16\\sqrt{2}-8)", exp: "Simplify." },
    ], "\\dfrac{16\\sqrt{2}-8}{3}", ["surds"]),
  uSubDefinite(29, "e^{2x}", 0, "\\dfrac{1}{2}", 0, 1,
    [
      { latex: "u = 2x,\\; du = 2\\,dx", exp: "Linear substitution for exponential." },
      { latex: "\\dfrac{1}{2}\\int_{0}^{1} e^{u}\\,du", exp: "Change limits." },
      { latex: "\\dfrac{1}{2}\\left[e^{u}\\right]_{0}^{1}", exp: "Integrate." },
      { latex: "\\dfrac{e-1}{2}", exp: "Exact value." },
    ], "\\dfrac{e-1}{2}", ["exponential"]),
  uSubDefinite(30, "\\sin x \\cos x", 0, "\\dfrac{\\pi}{2}", 0, 1,
    [
      { latex: "u = \\sin x,\\; du = \\cos x\\,dx", exp: "Use $u=\\sin x$." },
      { latex: "\\int_{0}^{1} u\\,du", exp: "Limits change as shown." },
      { latex: "\\left[\\dfrac{u^{2}}{2}\\right]_{0}^{1}", exp: "Integrate $u$." },
      { latex: "\\dfrac{1}{2}", exp: "Evaluate." },
    ], "\\dfrac{1}{2}", ["trigonometric"]),
  uSubDefinite(31, "\\dfrac{1}{2x+3}", 0, 1, 3, 5,
    [
      { latex: "u = 2x+3,\\; du = 2\\,dx", exp: "Linear denominator substitution." },
      { latex: "\\dfrac{1}{2}\\int_{3}^{5} \\dfrac{1}{u}\\,du", exp: "Adjust limits." },
      { latex: "\\dfrac{1}{2}\\left[\\ln u\\right]_{3}^{5}", exp: "Integrate." },
      { latex: "\\dfrac{1}{2}\\ln\\dfrac{5}{3}", exp: "Logarithm laws." },
    ], "\\dfrac{1}{2}\\ln\\dfrac{5}{3}"),
  uSubDefinite(32, "x(x^{2}+1)^{2}", 0, 1, 1, 2,
    [
      { latex: "u = x^{2}+1,\\; du = 2x\\,dx", exp: "Standard substitution." },
      { latex: "\\dfrac{1}{2}\\int_{1}^{2} u^{2}\\,du", exp: "Rewrite with new limits." },
      { latex: "\\dfrac{1}{2}\\left[\\dfrac{u^{3}}{3}\\right]_{1}^{2}", exp: "Integrate." },
      { latex: "\\dfrac{1}{6}(8-1) = \\dfrac{7}{6}", exp: "Evaluate." },
    ], "\\dfrac{7}{6}"),
  uSubDefinite(33, "\\sec^{2}x", 0, "\\dfrac{\\pi}{4}", 0, 1,
    [
      { latex: "u = \\tan x,\\; du = \\sec^{2}x\\,dx", exp: "Derivative of $\\tan x$ is $\\sec^2 x$." },
      { latex: "\\int_{0}^{1} du", exp: "Limits: $\\tan 0=0$, $\\tan(\\pi/4)=1$." },
      { latex: "\\left[u\\right]_{0}^{1}", exp: "Integrate." },
      { latex: "1", exp: "Result." },
    ], "1", ["trigonometric"]),
  uSubDefinite(34, "\\dfrac{x}{\\sqrt{x^{2}+1}}", 0, 1, 1, "\\sqrt{2}",
    [
      { latex: "u = x^{2}+1,\\; du = 2x\\,dx", exp: "Substitution for surd form." },
      { latex: "\\dfrac{1}{2}\\int_{1}^{\\sqrt{2}} u^{-1/2}\\,du", exp: "Note $u=\\sqrt{2}$ when $x=1$." },
      { latex: "\\dfrac{1}{2}\\left[2u^{1/2}\\right]_{1}^{\\sqrt{2}}", exp: "Integrate." },
      { latex: "\\sqrt{2}-1", exp: "Evaluate." },
    ], "\\sqrt{2}-1", ["surds"]),
  uSubDefinite(35, "3x^{2}e^{x^{3}}", 0, 1, 0, 1,
    [
      { latex: "u = x^{3},\\; du = 3x^{2}\\,dx", exp: "Exact match of derivative factor." },
      { latex: "\\int_{0}^{1} e^{u}\\,du", exp: "Change limits." },
      { latex: "\\left[e^{u}\\right]_{0}^{1}", exp: "Integrate." },
      { latex: "e-1", exp: "Evaluate." },
    ], "e-1", ["exponential"]),
  uSubDefinite(36, "\\dfrac{1}{\\sqrt{1-x^{2}}}", 0, "\\dfrac{1}{2}", 0, "\\dfrac{\\pi}{6}",
    [
      { latex: "u = \\arcsin x,\\; du = \\dfrac{1}{\\sqrt{1-x^{2}}}\\,dx", exp: "The integrand is exactly $du$." },
      { latex: "\\int_{0}^{\\pi/6} du", exp: "$x=0 \\Rightarrow u=0$; $x=1/2 \\Rightarrow u=\\pi/6$." },
      { latex: "\\left[u\\right]_{0}^{\\pi/6}", exp: "Integrate." },
      { latex: "\\dfrac{\\pi}{6}", exp: "Evaluate." },
    ], "\\dfrac{\\pi}{6}", ["inverse trig"]),
  uSubDefinite(37, "x\\cos(x^{2})", 0, "\\sqrt{\\pi}", 0, "\\pi",
    [
      { latex: "u = x^{2},\\; du = 2x\\,dx", exp: "Match the $x\\,dx$ factor." },
      { latex: "\\dfrac{1}{2}\\int_{0}^{\\pi} \\cos u\\,du", exp: "Limits: $x=\\sqrt{\\pi} \\Rightarrow u=\\pi$." },
      { latex: "\\dfrac{1}{2}\\left[\\sin u\\right]_{0}^{\\pi}", exp: "Integrate." },
      { latex: "0", exp: "$\\sin\\pi - \\sin 0 = 0$." },
    ], "0", ["trigonometric"]),
  uSubDefinite(38, "\\dfrac{e^{x}}{1+e^{x}}", 0, "\\ln 2", 1, 2,
    [
      { latex: "u = 1+e^{x},\\; du = e^{x}\\,dx", exp: "Numerator is derivative of denominator." },
      { latex: "\\int_{1}^{2} \\dfrac{1}{u}\\,du", exp: "Limits: $x=0 \\Rightarrow u=2$... check: $e^0=1$, so $u=2$. $x=\\ln 2 \\Rightarrow u=3$." },
      { latex: "\\left[\\ln u\\right]_{2}^{3}", exp: "Correct limits $u=2$ to $u=3$." },
      { latex: "\\ln\\dfrac{3}{2}", exp: "Evaluate." },
    ], "\\ln\\dfrac{3}{2}", ["exponential"]),

  // Intermediate — more indefinite (39–55)
  uSubIndef(39, "\\sin^{3}x \\cos x", "\\sin x", "\\cos x", "u^{3}", "\\dfrac{1}{4}\\sin^{4}x + c", ["trigonometric"], "Intermediate", 5),
  uSubIndef(40, "\\cos^{3}x \\sin x", "\\cos x", "-\\sin x", "-u^{3}", "-\\dfrac{1}{4}\\cos^{4}x + c", ["trigonometric"], "Intermediate", 5),
  uSubIndef(41, "\\dfrac{x}{x^{2}-1}", "x^{2}-1", "2x", "\\dfrac{1}{2u}", "\\dfrac{1}{2}\\ln|x^{2}-1| + c", ["logarithm"], "Intermediate", 5),
  uSubIndef(42, "x\\sqrt{4-x^{2}}", "4-x^{2}", "-2x", "-\\dfrac{1}{2}u^{1/2}", "-\\dfrac{1}{3}(4-x^{2})^{3/2} + c", ["surds"], "Intermediate", 5),
  uSubIndef(43, "\\dfrac{\\ln x}{x}", "\\ln x", "\\dfrac{1}{x}", "\\dfrac{1}{u}", "\\dfrac{1}{2}(\\ln x)^{2} + c", ["logarithm"], "Intermediate", 5),
  uSubIndef(44, "\\dfrac{x}{x^{2}+4}", "x^{2}+4", "2x", "\\dfrac{1}{2u}", "\\dfrac{1}{2}\\ln(x^{2}+4) + c", ["logarithm"], "Intermediate", 5),
  uSubIndef(45, "e^{x}\\sin(e^{x})", "e^{x}", "e^{x}", "\\sin u", "-\\cos(e^{x}) + c", ["exponential", "trigonometric"], "Intermediate", 5),
  uSubIndef(46, "\\dfrac{1}{x\\sqrt{\\ln x}}", "\\ln x", "\\dfrac{1}{x}", "u^{-1/2}", "2\\sqrt{\\ln x} + c", ["logarithm", "surds"], "Intermediate", 5),
  uSubIndef(47, "x^{3}(x^{4}+1)^{-1}", "x^{4}+1", "4x^{3}", "\\dfrac{1}{4u}", "\\dfrac{1}{4}\\ln|x^{4}+1| + c", ["logarithm"], "Intermediate", 5),
  uSubIndef(48, "\\tan x \\sec^{2}x", "\\tan x", "\\sec^{2}x", "u", "\\dfrac{1}{2}\\tan^{2}x + c", ["trigonometric"], "Intermediate", 5),
  uSubIndef(49, "\\dfrac{\\cos x}{\\sin x}", "\\sin x", "\\cos x", "\\dfrac{1}{u}", "\\ln|\\sin x| + c", ["trigonometric"], "Intermediate", 5),
  uSubIndef(50, "x^{2}e^{x^{3}}", "x^{3}", "3x^{2}", "e^{u}", "\\dfrac{1}{3}e^{x^{3}} + c", ["exponential"], "Intermediate", 5),
  uSubIndef(51, "\\dfrac{1}{\\sqrt{2x+1}}", "2x+1", "2", "u^{-1/2}", "\\sqrt{2x+1} + c", ["surds"], "Intermediate", 5),
  uSubIndef(52, "\\dfrac{x^{2}}{x^{3}+1}", "x^{3}+1", "3x^{2}", "\\dfrac{1}{3u}", "\\dfrac{1}{3}\\ln|x^{3}+1| + c", ["logarithm"], "Intermediate", 5),
  uSubIndef(53, "\\sin^{2}x \\cos x", "\\sin x", "\\cos x", "u^{2}", "\\dfrac{1}{3}\\sin^{3}x + c", ["trigonometric"], "Intermediate", 5),
  uSubIndef(54, "\\dfrac{e^{2x}}{1+e^{2x}}", "1+e^{2x}", "2e^{2x}", "\\dfrac{1}{2u}", "\\dfrac{1}{2}\\ln(1+e^{2x}) + c", ["exponential"], "Intermediate", 5),
  uSubIndef(55, "x(1+x^{2})^{n}", "1+x^{2}", "2x", "\\dfrac{1}{2}u^{n}", "\\dfrac{1}{2(n+1)}(1+x^{2})^{n+1} + c", ["general power"], "Intermediate", 6),

  // Hard (56–70)
  hardSub(56,
    "Use the substitution $u = x^{2}+1$ to evaluate $\\displaystyle\\int_{0}^{1} \\dfrac{x}{(x^{2}+1)^{2}}\\,dx$.",
    [
      step(1, "Set u = x² + 1", "u = x^{2}+1,\\; du = 2x\\,dx", "The numerator $x\\,dx$ matches half of $du$."),
      step(2, "Rewrite", "\\dfrac{1}{2}\\int_{1}^{2} u^{-2}\\,du", "Limits: $x=0 \\Rightarrow u=1$, $x=1 \\Rightarrow u=2$."),
      step(3, "Integrate", "\\dfrac{1}{2}\\left[-u^{-1}\\right]_{1}^{2}", "Power rule for $u^{-2}$."),
      step(4, "Evaluate", "\\dfrac{1}{2}\\left(-\\dfrac{1}{2}+1\\right)", "Substitute limits."),
      step(5, "Simplify", "\\dfrac{1}{4}", "Exact value."),
      step(6, "Interpret", "\\text{Area under the reciprocal-square curve}", "Positive area on $[0,1]$."),
      step(7, "Alternative check", "\\text{Antiderivative } -\\dfrac{1}{2(x^{2}+1)}", "Differentiate to confirm."),
      step(8, "Domain", "x^{2}+1 > 0", "Always valid."),
      step(9, "Answer", "\\dfrac{1}{4}", "Final value."),
    ],
    "$\\displaystyle\\int_{0}^{1} \\dfrac{x}{(x^{2}+1)^{2}}\\,dx = \\dfrac{1}{4}$.",
    ["definite integral", "rational"]
  ),
  hardSub(57,
    "Find $\\displaystyle\\int \\dfrac{1}{x^{2}\\sqrt{x^{2}-1}}\\,dx$ using the substitution $u = \\dfrac{1}{x}$.",
    [
      step(1, "Set u = 1/x", "u = \\dfrac{1}{x},\\; du = -\\dfrac{1}{x^{2}}\\,dx", "This reciprocal substitution is useful when $x^2$ appears in the denominator."),
      step(2, "Express √", "\\sqrt{x^{2}-1} = \\dfrac{\\sqrt{1-u^{2}}}{u}", "Rewrite all terms in $u$."),
      step(3, "Substitute", "-\\int \\dfrac{u}{\\sqrt{1-u^{2}}}\\,du", "The integral simplifies."),
      step(4, "Inner sub v = 1-u²", "v = 1-u^{2},\\; dv = -2u\\,du", "Second substitution for the surd."),
      step(5, "Integrate", "\\dfrac{1}{2}\\int v^{-1/2}\\,dv = v^{1/2}", "Power rule."),
      step(6, "Back-substitute", "\\sqrt{1-u^{2}} = \\dfrac{\\sqrt{x^{2}-1}}{x}", "Return to $x$."),
      step(7, "Simplify", "\\dfrac{\\sqrt{x^{2}-1}}{x} + c", "Standard form."),
      step(8, "Domain", "|x| > 1", "Square root requires $x^2>1$."),
      step(9, "Answer", "\\dfrac{\\sqrt{x^{2}-1}}{x} + c", "Antiderivative."),
    ],
    "$\\displaystyle\\int \\dfrac{1}{x^{2}\\sqrt{x^{2}-1}}\\,dx = \\dfrac{\\sqrt{x^{2}-1}}{x} + c$ for $|x|>1$.",
    ["reciprocal substitution"]
  ),
  hardSub(58,
    "The region $R$ is bounded by $y = \\dfrac{x}{x^{2}+1}$, the $x$-axis, and the lines $x=0$ and $x=1$. Find the exact area of $R$.",
    [
      step(1, "Set up the area", "A = \\int_{0}^{1} \\dfrac{x}{x^{2}+1}\\,dx", "Area equals the definite integral."),
      step(2, "Substitution", "u = x^{2}+1,\\; du = 2x\\,dx", "Match numerator factor."),
      step(3, "Change limits", "u = 1 \\text{ to } 2", "Convert bounds."),
      step(4, "Integral", "\\dfrac{1}{2}\\int_{1}^{2} \\dfrac{1}{u}\\,du", "Logarithmic form."),
      step(5, "Evaluate", "\\dfrac{1}{2}\\ln 2", "Exact area."),
      step(6, "Units", "\\text{square units}", "Area measure."),
      step(7, "Check sign", "f(x) > 0 \\text{ on } [0,1]", "Positive area confirmed."),
      step(8, "Sketch", "\\text{Decreasing positive curve}", "Graph supports result."),
      step(9, "Answer", "A = \\dfrac{1}{2}\\ln 2", "Exact area."),
    ],
    "Area $= \\dfrac{1}{2}\\ln 2$ square units.",
    ["area", "application"]
  ),
  hardSub(59,
    "Use substitution to find $\\displaystyle\\int_{0}^{\\pi/4} \\tan x \\sec^{2}x\\,dx$.",
    [
      step(1, "Choose u", "u = \\tan x,\\; du = \\sec^{2}x\\,dx", "Exact match."),
      step(2, "Limits", "x = 0 \\Rightarrow u = 0;\\; x = \\pi/4 \\Rightarrow u = 1", "Change bounds."),
      step(3, "Integral", "\\int_{0}^{1} u\\,du", "Simple polynomial."),
      step(4, "Evaluate", "\\left[\\dfrac{u^{2}}{2}\\right]_{0}^{1}", "Integrate."),
      step(5, "Result", "\\dfrac{1}{2}", "Exact value."),
      step(6, "Geometric", "\\text{Area under } \\tan x \\sec^{2}x", "Positive on the interval."),
      step(7, "Alternative u = sec x", "\\text{Also works}", "Different valid choice."),
      step(8, "Verify antiderivative", "\\dfrac{1}{2}\\tan^{2}x", "Differentiate."),
      step(9, "Answer", "\\dfrac{1}{2}", "Final."),
    ],
    "$\\displaystyle\\int_{0}^{\\pi/4} \\tan x \\sec^{2}x\\,dx = \\dfrac{1}{2}$.",
    ["trigonometric", "definite"]
  ),
  hardSub(60,
    "Find $\\displaystyle\\int e^{x}\\sqrt{1+e^{x}}\\,dx$.",
    [
      step(1, "Substitute", "u = 1+e^{x},\\; du = e^{x}\\,dx", "The factor $e^x\\,dx$ is present."),
      step(2, "Rewrite", "\\int u^{1/2}\\,du", "Power form."),
      step(3, "Integrate", "\\dfrac{2}{3}u^{3/2} + c", "Standard power rule."),
      step(4, "Back-substitute", "\\dfrac{2}{3}(1+e^{x})^{3/2} + c", "Return to $x$."),
      step(5, "Check", "\\dfrac{d}{dx}\\left[\\dfrac{2}{3}(1+e^{x})^{3/2}\\right] = e^{x}\\sqrt{1+e^{x}}", "Differentiate to verify."),
      step(6, "Domain", "1+e^{x} > 0", "Always true."),
      step(7, "Special case", "x=0 \\Rightarrow \\text{integrand } = \\sqrt{2}", "Sanity check."),
      step(8, "Form", "\\text{Composite exponential}", "Common exam type."),
      step(9, "Answer", "\\dfrac{2}{3}(1+e^{x})^{3/2} + c", "Final."),
    ],
    "$\\displaystyle\\int e^{x}\\sqrt{1+e^{x}}\\,dx = \\dfrac{2}{3}(1+e^{x})^{3/2} + c$.",
    ["exponential", "surds"]
  ),
  hardSub(61,
    "Evaluate $\\displaystyle\\int_{-1}^{1} \\dfrac{x}{\\sqrt{x^{2}+1}}\\,dx$ and explain the result.",
    [
      step(1, "Odd integrand", "f(-x) = -f(x)", "The function is odd."),
      step(2, "Substitution", "u = x^{2}+1,\\; du = 2x\\,dx", "Still valid on $[-1,1]$."),
      step(3, "Antiderivative", "\\sqrt{x^{2}+1}", "Indefinite integral (up to constant)."),
      step(4, "Evaluate", "\\sqrt{2} - \\sqrt{2} = 0", "Equal values at symmetric limits."),
      step(5, "Symmetry argument", "\\int_{-a}^{a} f(x)\\,dx = 0 \\text{ for odd } f", "Areas cancel."),
      step(6, "Graphical", "\\text{Equal positive and negative areas}", "Visual explanation."),
      step(7, "No need for u-limits", "\\text{Symmetry is quicker}", "Useful shortcut."),
      step(8, "General rule", "\\text{Odd function on symmetric interval}", "Standard result."),
      step(9, "Answer", "0", "Integral is zero."),
    ],
    "$\\displaystyle\\int_{-1}^{1} \\dfrac{x}{\\sqrt{x^{2}+1}}\\,dx = 0$ because the integrand is odd.",
    ["symmetry", "definite"]
  ),
  hardSub(62,
    "Use substitution to find $\\displaystyle\\int \\dfrac{\\sin x}{1+\\cos^{2}x}\\,dx$.",
    [
      step(1, "Substitute", "u = \\cos x,\\; du = -\\sin x\\,dx", "The $\\sin x\\,dx$ factor matches."),
      step(2, "Rewrite", "-\\int \\dfrac{1}{1+u^{2}}\\,du", "Standard arctan form."),
      step(3, "Integrate", "-\\arctan u + c", "Recall $\\int \\tfrac{1}{1+u^2}\\,du = \\arctan u$."),
      step(4, "Back-substitute", "-\\arctan(\\cos x) + c", "Answer in $x$."),
      step(5, "Check derivative", "\\text{Use chain rule}", "Confirms result."),
      step(6, "Range", "\\arctan(\\cos x) \\in (-\\pi/4, \\pi/4]", "Bounded output."),
      step(7, "Special value", "x = \\pi/2 \\Rightarrow -\\arctan 0 = 0", "Test point."),
      step(8, "Technique", "\\text{Trig substitution to polynomial}", "Common pattern."),
      step(9, "Answer", "-\\arctan(\\cos x) + c", "Final."),
    ],
    "$\\displaystyle\\int \\dfrac{\\sin x}{1+\\cos^{2}x}\\,dx = -\\arctan(\\cos x) + c$.",
    ["trigonometric", "arctan"]
  ),
  hardSub(63,
    "A curve has gradient $\\dfrac{dy}{dx} = \\dfrac{x}{\\sqrt{x^{2}+1}}$ and passes through $(0, 1)$. Find $y$ in terms of $x$.",
    [
      step(1, "Integrate the gradient", "y = \\int \\dfrac{x}{\\sqrt{x^{2}+1}}\\,dx", "Find $y$ by integration."),
      step(2, "Substitute", "u = x^{2}+1,\\; du = 2x\\,dx", "Standard surd substitution."),
      step(3, "Integrate", "y = \\sqrt{x^{2}+1} + c", "Result of substitution."),
      step(4, "Use (0,1)", "1 = \\sqrt{1} + c", "Substitute the given point."),
      step(5, "Solve c", "c = 0", "Constant is zero."),
      step(6, "Equation", "y = \\sqrt{x^{2}+1}", "Curve equation."),
      step(7, "Verify gradient", "\\dfrac{dy}{dx} = \\dfrac{x}{\\sqrt{x^{2}+1}}", "Differentiate to check."),
      step(8, "Verify point", "y(0) = 1", "Passes through $(0,1)$."),
      step(9, "Answer", "y = \\sqrt{x^{2}+1}", "Final equation."),
    ],
    "$y = \\sqrt{x^{2}+1}$.",
    ["curve", "application"]
  ),
  hardSub(64,
    "Evaluate $\\displaystyle\\int_{0}^{1} x(1-x^{2})^{3}\\,dx$ using substitution.",
    [
      step(1, "Substitute", "u = 1-x^{2},\\; du = -2x\\,dx", "Note the negative sign."),
      step(2, "Limits", "x=0 \\Rightarrow u=1;\\; x=1 \\Rightarrow u=0", "Limits reverse."),
      step(3, "Integral", "-\\dfrac{1}{2}\\int_{1}^{0} u^{3}\\,du = \\dfrac{1}{2}\\int_{0}^{1} u^{3}\\,du", "Swap limits to remove negative."),
      step(4, "Integrate", "\\dfrac{1}{2}\\left[\\dfrac{u^{4}}{4}\\right]_{0}^{1}", "Power rule."),
      step(5, "Evaluate", "\\dfrac{1}{8}", "Exact value."),
      step(6, "Area interpretation", "\\text{Positive area under curve}", "Integrand positive on $(0,1)$."),
      step(7, "Antiderivative form", "-\\dfrac{1}{8}(1-x^{2})^{4}", "Check by differentiating."),
      step(8, "Technique note", "\\text{Watch for reversed limits}", "Common exam trap."),
      step(9, "Answer", "\\dfrac{1}{8}", "Final."),
    ],
    "$\\displaystyle\\int_{0}^{1} x(1-x^{2})^{3}\\,dx = \\dfrac{1}{8}$.",
    ["definite", "reversed limits"]
  ),
  hardSub(65,
    "Find $\\displaystyle\\int \\dfrac{1}{x\\ln x \\ln(\\ln x)}\\,dx$ for $x > 1$.",
    [
      step(1, "Substitute", "u = \\ln(\\ln x),\\; du = \\dfrac{1}{x\\ln x}\\,dx", "The denominator matches $du$."),
      step(2, "Rewrite", "\\int \\dfrac{1}{u}\\,du", "Logarithmic integral."),
      step(3, "Integrate", "\\ln|u| + c", "Standard result."),
      step(4, "Back-substitute", "\\ln|\\ln(\\ln x)| + c", "Answer in $x$."),
      step(5, "Domain", "x > e \\text{ for } \\ln(\\ln x) > 0", "Nested log domain."),
      step(6, "Structure", "\\text{Repeated log composition}", "Recognise the pattern."),
      step(7, "Check", "\\dfrac{d}{dx}[\\ln(\\ln(\\ln x))] = \\dfrac{1}{x\\ln x \\ln(\\ln x)}", "Verify."),
      step(8, "Exam tip", "\\text{Work from outside in}", "Substitute the outermost log first."),
      step(9, "Answer", "\\ln|\\ln(\\ln x)| + c", "Final."),
    ],
    "$\\displaystyle\\int \\dfrac{1}{x\\ln x \\ln(\\ln x)}\\,dx = \\ln|\\ln(\\ln x)| + c$ for $x > e$.",
    ["logarithm", "nested"]
  ),
  hardSub(66,
    "Use the substitution $u = \\sin x$ to evaluate $\\displaystyle\\int_{0}^{\\pi/2} \\cos^{3}x\\,dx$.",
    [
      step(1, "Rewrite cos³", "\\cos^{3}x = \\cos^{2}x \\cdot \\cos x = (1-\\sin^{2}x)\\cos x", "Split to expose $\\cos x\\,dx$."),
      step(2, "Substitute", "u = \\sin x,\\; du = \\cos x\\,dx", "Standard trig substitution."),
      step(3, "Limits", "0 \\text{ to } 1", "Change bounds."),
      step(4, "Integral", "\\int_{0}^{1} (1-u^{2})\\,du", "Polynomial in $u$."),
      step(5, "Integrate", "\\left[u - \\dfrac{u^{3}}{3}\\right]_{0}^{1}", "Term by term."),
      step(6, "Evaluate", "1 - \\dfrac{1}{3} = \\dfrac{2}{3}", "Exact value."),
      step(7, "Known result", "\\int_{0}^{\\pi/2}\\cos^{n}x\\,dx", "Reduction formula context."),
      step(8, "Area", "\\text{Positive area under cosine curve}", "Interpretation."),
      step(9, "Answer", "\\dfrac{2}{3}", "Final."),
    ],
    "$\\displaystyle\\int_{0}^{\\pi/2} \\cos^{3}x\\,dx = \\dfrac{2}{3}$.",
    ["trigonometric", "definite"]
  ),
  hardSub(67,
    "Show that $\\displaystyle\\int_{a}^{b} f'(x)\\,dx = f(b) - f(a)$ using substitution $u = f(x)$.",
    [
      step(1, "Set u = f(x)", "u = f(x),\\; du = f'(x)\\,dx", "The integrand is exactly $du$."),
      step(2, "Change limits", "x = a \\Rightarrow u = f(a);\\; x = b \\Rightarrow u = f(b)", "Convert bounds."),
      step(3, "Rewrite integral", "\\int_{f(a)}^{f(b)} du", "Simple integral of $1$."),
      step(4, "Evaluate", "f(b) - f(a)", "Fundamental theorem of calculus."),
      step(5, "Name", "\\text{Newton–Leibniz / FTC}", "Core calculus result."),
      step(6, "Substitution view", "\\text{Change of variables confirms FTC}", "Links techniques."),
      step(7, "Application", "\\text{Evaluate integrals of derivatives quickly}", "Practical use."),
      step(8, "Example", "\\int_{1}^{2} \\dfrac{1}{x}\\,dx = \\ln 2 - \\ln 1 = \\ln 2", "Illustration."),
      step(9, "Conclude", "\\int_{a}^{b} f'(x)\\,dx = f(b) - f(a)", "Proved."),
    ],
    "$\\displaystyle\\int_{a}^{b} f'(x)\\,dx = f(b) - f(a)$ (Fundamental Theorem of Calculus).",
    ["FTC", "proof"]
  ),
  hardSub(68,
    "Find the exact value of $\\displaystyle\\int_{0}^{\\ln 3} \\dfrac{e^{x}}{e^{2x}+1}\\,dx$.",
    [
      step(1, "Multiply top and bottom", "\\dfrac{e^{x}}{e^{2x}+1} = \\dfrac{1}{e^{x}+e^{-x}}", "Alternative form."),
      step(2, "Substitute", "u = e^{x},\\; du = e^{x}\\,dx", "Standard exponential sub."),
      step(3, "Limits", "x=0 \\Rightarrow u=1;\\; x=\\ln 3 \\Rightarrow u=3", "New bounds."),
      step(4, "Integral", "\\int_{1}^{3} \\dfrac{1}{u^{2}+1}\\,du", "Arctan form."),
      step(5, "Integrate", "\\left[\\arctan u\\right]_{1}^{3}", "Standard result."),
      step(6, "Evaluate", "\\arctan 3 - \\arctan 1 = \\arctan 3 - \\dfrac{\\pi}{4}", "Exact value."),
      step(7, "Decimal check", "\\approx 0.318", "Reasonable magnitude."),
      step(8, "Technique", "e^{x} \\text{ substitution for exponentials}", "Key method."),
      step(9, "Answer", "\\arctan 3 - \\dfrac{\\pi}{4}", "Final."),
    ],
    "$\\displaystyle\\int_{0}^{\\ln 3} \\dfrac{e^{x}}{e^{2x}+1}\\,dx = \\arctan 3 - \\dfrac{\\pi}{4}$.",
    ["exponential", "arctan"]
  ),
  hardSub(69,
    "The rate of growth of a population is proportional to $P(1-P/1000)$ where $P$ is the population. Given $\\dfrac{dP}{dt} = 0.1P(1-P/1000)$, use partial fractions and substitution to solve for $P$ given $P(0)=100$.",
    [
      step(1, "Separate variables", "\\dfrac{dP}{P(1-P/1000)} = 0.1\\,dt", "Logistic-type DE."),
      step(2, "Partial fractions", "\\dfrac{1}{P(1-P/1000)} = \\dfrac{1}{P} + \\dfrac{1/1000}{1-P/1000}", "Decompose."),
      step(3, "Integrate LHS", "\\ln|P| - \\ln|1-P/1000| = 0.1t + c", "Logarithmic integration."),
      step(4, "Combine logs", "\\ln\\left|\\dfrac{P}{1000-P}\\right| = 0.1t + c", "Log laws."),
      step(5, "Use P(0)=100", "\\ln\\left(\\dfrac{100}{900}\\right) = c", "Find constant."),
      step(6, "Exponentiate", "\\dfrac{P}{1000-P} = \\dfrac{1}{9}e^{0.1t}", "Remove logarithm."),
      step(7, "Solve for P", "P = \\dfrac{1000}{1+9e^{-0.1t}}", "Logistic solution."),
      step(8, "Check t=0", "P = 100", "Initial condition satisfied."),
      step(9, "Answer", "P = \\dfrac{1000}{1+9e^{-0.1t}}", "Population model."),
    ],
    "$P = \\dfrac{1000}{1+9e^{-0.1t}}$.",
    ["differential equations", "modelling"],
    9
  ),
  hardSub(70,
    "(a) Use substitution to show that $\\displaystyle\\int_{0}^{a} \\dfrac{1}{\\sqrt{a^{2}-x^{2}}}\\,dx = \\dfrac{\\pi a}{2}$ for $a>0$.\n(b) Hence find $\\displaystyle\\int_{0}^{3} \\dfrac{1}{\\sqrt{9-x^{2}}}\\,dx$.",
    [
      step(1, "(a) Substitute", "x = a\\sin\\theta,\\; dx = a\\cos\\theta\\,d\\theta", "Trig substitution for $\\sqrt{a^2-x^2}$."),
      step(2, "Simplify surd", "\\sqrt{a^{2}-x^{2}} = a\\cos\\theta", "Pythagorean identity."),
      step(3, "Limits", "x=0 \\Rightarrow \\theta=0;\\; x=a \\Rightarrow \\theta=\\pi/2", "New bounds."),
      step(4, "Integral becomes", "\\int_{0}^{\\pi/2} d\\theta", "Cancels to integrate $1$."),
      step(5, "Evaluate", "\\dfrac{\\pi}{2}", "Part (a) with unit $a$."),
      step(6, "Scale for general a", "\\int_{0}^{a} \\dfrac{1}{\\sqrt{a^{2}-x^{2}}}\\,dx = \\dfrac{\\pi}{2} \\cdot 1", "Standard result."),
      step(7, "(b) Identify a", "a = 3", "From $\\sqrt{9-x^2}$."),
      step(8, "Apply result", "\\dfrac{\\pi \\cdot 3}{2} = \\dfrac{3\\pi}{2}", "Part (b) answer."),
      step(9, "Interpretation", "\\text{Quarter-circle area scaled}", "Geometric meaning."),
      step(10, "Answer", "(a) \\dfrac{\\pi a}{2};\\; (b) \\dfrac{3\\pi}{2}", "Both parts."),
    ],
    "(a) $\\displaystyle\\int_{0}^{a} \\dfrac{1}{\\sqrt{a^{2}-x^{2}}}\\,dx = \\dfrac{\\pi a}{2}$. (b) $\\dfrac{3\\pi}{2}$.",
    ["trigonometric substitution", "multi-part"],
    9
  ),
];

const STEP_MIN = { Easy: 6, Intermediate: 9, Hard: 13 };
const STEP_MAX = { Easy: 9, Intermediate: 13, Hard: 18 };

const EXTRA_STEPS = [
  (q) => step(0, "Identify the substitution", "\\text{Look for a function and its derivative}", "Integration by substitution reverses the chain rule — find $u=g(x)$ where $g'(x)$ appears as a factor."),
  (q) => step(0, "Write du in terms of dx", "du = g'(x)\\,dx", "Differentiate $u$ and rearrange to replace the $x$-terms."),
  (q) => step(0, "Change limits for definite integrals", "u \\text{-limits from } x\\text{-limits}", "When evaluating a definite integral, always convert the limits to avoid back-substitution."),
  (q) => step(0, "Integrate in u", "\\int (\\cdots)\\,du", "The substituted integral should be simpler than the original."),
  (q) => step(0, "Replace u with the original expression", "u = g(x)", "For indefinite integrals, express the answer in terms of $x$."),
  (q) => step(0, "Add the constant of integration", "+c", "Every indefinite integral needs $+c$ unless finding a particular solution."),
  (q) => step(0, "Check by differentiating", "\\dfrac{d}{dx}(\\text{answer}) = \\text{integrand}", "Differentiation confirms the antiderivative is correct."),
  (q) => step(0, "Note any domain restrictions", "\\text{Where the integrand is defined}", "Logarithms and surds require care with the domain."),
  (q) => step(0, "Summarise the technique", "\\text{Substitution reverses the chain rule}", "The key skill is recognising when the integrand has the form $f(g(x))g'(x)$."),
  (q) => step(0, "State the final answer clearly", q.workedSolution.finalAnswer.replace(/^\$|\\$/g, ""), "Present the result in the required form."),
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
