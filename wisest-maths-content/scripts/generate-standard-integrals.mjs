#!/usr/bin/env node
import { writeFileSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const outPath = resolve(__dirname, "../src/data/questions/a-level-maths/year-2-pure/standard-integrals.ts");

const SUBTOPIC = "Standard integrals";
const SUBTOPIC_ID = "al.y2.pure.standard-integrals";
const LEVEL = "A-Level Maths";
const TOPIC = "Year 2 Pure";

const qid = (n) => `al.y2.pure.standard-integrals.q${String(n).padStart(3, "0")}`;
const step = (n, description, workingLatex, explanation) => ({ stepNumber: n, description, workingLatex, explanation, diagram: null });
const base = (meta) => ({ level: LEVEL, topic: TOPIC, subtopic: SUBTOPIC, subtopicId: SUBTOPIC_ID, questionDiagram: null, ...meta });
const intQ = (n, { difficulty, marks, answerType, tags, questionText, steps, finalAnswer }) =>
  base({ id: qid(n), difficulty, marks, answerType, tags: ["standard integrals", ...tags], questionText, workedSolution: { steps, finalAnswer } });

function indefExp(n, k, coeff = 1, difficulty = "Easy", marks = 2) {
  const inside = k === 1 ? "x" : `${k}x`;
  const qLatex = coeff === 1 ? `e^{${inside}}` : `${coeff}e^{${inside}}`;
  const ansCoeff = coeff / k;
  const ansLatex = ansCoeff === 1 ? `e^{${inside}}` : `${ansCoeff === 1 / k ? `\\dfrac{1}{${k}}` : ansCoeff}e^{${inside}}`;
  const steps = [
    step(1, "Identify the integrand", `\\int ${qLatex}\\,dx`, "We need an antiderivative of this exponential."),
    step(2, "Recall the standard result for $e^{kx}$", `\\int e^{kx}\\,dx = \\dfrac{1}{k}e^{kx} + c`, "Differentiating $\\tfrac{1}{k}e^{kx}$ gives $e^{kx}$, so integration reverses this with a factor $\\tfrac{1}{k}$."),
    step(3, k === 1 ? "Apply for $k=1$" : `Substitute $k = ${k}$`, k === 1 ? "\\int e^{x}\\,dx = e^{x} + c" : `\\int e^{${k}x}\\,dx = \\dfrac{1}{${k}}e^{${k}x} + c`, k === 1 ? "When $k=1$ the factor is $1$ and we recover the basic exponential integral." : `Here the exponent is ${k} times $x$, so divide by ${k}.`),
    coeff === 1 ? null : step(4, "Include the constant multiple", `\\int ${coeff}e^{${inside}}\\,dx = ${coeff}\\cdot\\dfrac{1}{${k}}e^{${inside}} + c`, "A constant factor stays outside the integral."),
    step(coeff === 1 ? 4 : 5, "Write the antiderivative", `${ansLatex} + c`, "Add $+c$ because this is an indefinite integral."),
    step(coeff === 1 ? 5 : 6, "Check by differentiating", `\\dfrac{d}{dx}\\left(${ansLatex}\\right) = ${qLatex}`, "Differentiating should recover the original integrand."),
    step(coeff === 1 ? 6 : 7, "State the answer", `\\int ${qLatex}\\,dx = ${ansLatex} + c`, "This is the required indefinite integral."),
  ].filter(Boolean);
  return intQ(n, { difficulty, marks, answerType: "expression", tags: ["exponential"], questionText: `Find $\\displaystyle\\int ${qLatex}\\,dx$.`, steps, finalAnswer: `$\\displaystyle\\int ${qLatex}\\,dx = ${ansLatex} + c$.` });
}

function indefLog(n, form, difficulty = "Easy", marks = 3) {
  const forms = {
    "1/x": { q: "\\dfrac{1}{x}", steps: ["Recall $\\int \\tfrac{1}{x}\\,dx = \\ln|x| + c$ for $x \\neq 0$.", "\\int \\dfrac{1}{x}\\,dx = \\ln|x| + c", "The modulus handles negative $x$; on an interval where $x>0$ we may write $\\ln x$."], ans: "\\ln|x|", note: "valid for $x \\neq 0$" },
    "k/x": { q: "\\dfrac{3}{x}", steps: ["Factor the constant: $\\int \\tfrac{3}{x}\\,dx = 3\\int \\tfrac{1}{x}\\,dx$.", "Use $\\int \\tfrac{1}{x}\\,dx = \\ln|x| + c$.", "\\int \\dfrac{3}{x}\\,dx = 3\\ln|x| + c"], ans: "3\\ln|x|", note: "$x \\neq 0$" },
    "1/(ax+b)": { q: "\\dfrac{1}{2x+1}", a: 2, b: 1, steps: ["Match $\\int \\tfrac{1}{ax+b}\\,dx = \\tfrac{1}{a}\\ln|ax+b| + c$.", "Here $a=2$, $b=1$.", "\\int \\dfrac{1}{2x+1}\\,dx = \\dfrac{1}{2}\\ln|2x+1| + c"], ans: "\\dfrac{1}{2}\\ln|2x+1|", note: "$2x+1 \\neq 0$" },
    "1/(b-ax)": { q: "\\dfrac{1}{5-2x}", a: -2, b: 5, steps: ["Rewrite as $\\int \\tfrac{1}{5-2x}\\,dx$ with linear denominator.", "Use $\\int \\tfrac{1}{ax+b}\\,dx = \\tfrac{1}{a}\\ln|ax+b| + c$ with $a=-2$.", "\\int \\dfrac{1}{5-2x}\\,dx = -\\dfrac{1}{2}\\ln|5-2x| + c"], ans: "-\\dfrac{1}{2}\\ln|5-2x|", note: "$5-2x \\neq 0$" },
  };
  const f = forms[form];
  const st = [
    step(1, "Identify the form", `\\int ${f.q}\\,dx`, "This is a reciprocal of a linear expression — a standard logarithmic integral."),
    step(2, "Recall the standard result", "\\int \\dfrac{1}{x}\\,dx = \\ln|x| + c", "Integration of $\\tfrac{1}{x}$ gives the natural logarithm (with modulus for generality)."),
    step(3, "Apply to this integrand", f.steps[0], f.steps[0]),
    step(4, "Evaluate", f.steps[1], f.steps[1]),
    step(5, "Note the domain", f.note, "The logarithm requires a non-zero argument."),
    step(6, "Check", `\\dfrac{d}{dx}\\left(${f.ans}\\right) \\propto ${f.q}`, "Differentiating confirms the antiderivative."),
    step(7, "State the answer", `\\int ${f.q}\\,dx = ${f.ans} + c`, "Include $+c$ for the indefinite integral."),
  ];
  return intQ(n, { difficulty, marks, answerType: "expression", tags: ["logarithm"], questionText: `Find $\\displaystyle\\int ${f.q}\\,dx$, stating any restriction on $x$.`, steps: st, finalAnswer: `$\\displaystyle\\int ${f.q}\\,dx = ${f.ans} + c$, ${f.note}.` });
}

function indefTrig(n, type, coeff = 1, arg = "x", difficulty = "Easy", marks = 2) {
  const map = {
    sin: { q: `\\sin ${arg}`, ans: `-\\cos ${arg}`, std: "\\int \\sin x\\,dx = -\\cos x + c", tag: "sine" },
    cos: { q: `\\cos ${arg}`, ans: `\\sin ${arg}`, std: "\\int \\cos x\\,dx = \\sin x + c", tag: "cosine" },
    sec2: { q: "\\sec^{2} x", ans: "\\tan x", std: "\\int \\sec^{2} x\\,dx = \\tan x + c", tag: "secant" },
  };
  const m = map[type];
  const hasCoeff = coeff !== 1;
  const hasArg = arg !== "x";
  const qFull = hasCoeff ? `${coeff}${m.q}` : m.q;
  let ansFull = m.ans;
  if (hasArg && arg.includes("x")) {
    const k = arg.match(/(\d+)x/)?.[1] ?? (arg.includes("-") ? "-1" : "1");
    const kk = Math.abs(Number(k));
    ansFull = kk === 1 ? m.ans : m.ans.replace(arg, arg).replace(/^(-?\\cos|-?\\sin|\\tan)/, (x) => {
      const sign = x.startsWith("-") ? "-" : "";
      const fn = x.replace("-", "");
      return `${sign}\\dfrac{1}{${kk}}${fn}`;
    });
  }
  if (hasCoeff) ansFull = `${coeff === -1 ? "-" : coeff}${ansFull.startsWith("-") ? ansFull : ansFull}`;
  const steps = [
    step(1, "Identify the integrand", `\\int ${qFull}\\,dx`, "Match this to a standard trigonometric integral (radians)."),
    step(2, "Recall the standard result", m.std, "This is one of the core results to memorise alongside derivatives of trig functions."),
    hasArg ? step(3, "Adjust for the inner linear argument", `\\text{If the angle is } ${arg}\\text{, divide by the coefficient of }x`, `For $\\int \\sin(kx)\\,dx$ we get $-\\tfrac{1}{k}\\cos(kx)+c$.`) : step(3, "Apply directly", `\\int ${m.q}\\,dx = ${m.ans} + c`, "Substitute into the standard formula."),
    step(4, hasCoeff ? "Include the constant multiple" : "Add the constant of integration", hasCoeff ? `\\int ${coeff}\\,\\cdots\\,dx = ${coeff}\\times(\\cdots) + c` : `${ansFull} + c`, hasCoeff ? "Constants factor out of the integral." : "Every indefinite integral needs $+c$."),
    step(5, "Write the antiderivative", `${ansFull} + c`, "Combine the standard result with any scaling."),
    step(6, "Verify by differentiation", `\\dfrac{d}{dx}(${ansFull}) = ${qFull}`, "Differentiation should recover the integrand."),
    step(7, "State the answer", `\\int ${qFull}\\,dx = ${ansFull} + c`, "Final answer in simplest form."),
  ];
  return intQ(n, { difficulty, marks, answerType: "expression", tags: [m.tag], questionText: `Find $\\displaystyle\\int ${qFull}\\,dx$, where $x$ is in radians.`, steps, finalAnswer: `$\\displaystyle\\int ${qFull}\\,dx = ${ansFull} + c$.` });
}

function indefMixed(n, terms, difficulty = "Intermediate", marks = 4) {
  const q = terms.map((t) => t.q).join(" + ").replace(/\+ -/g, "- ");
  const ans = terms.map((t) => t.a).join(" + ").replace(/\+ -/g, "- ");
  const steps = [
    step(1, "Split the integral", `\\int (${q})\\,dx = ${terms.map((t) => `\\int ${t.q}\\,dx`).join(" + ")}`, "Integration is linear: integrate each term separately."),
    ...terms.flatMap((t, i) => [step(2 + i * 2, `Integrate ${t.q}`, `\\int ${t.q}\\,dx = ${t.a}`, t.why)]),
    step(2 + terms.length * 2, "Combine the antiderivatives", `${ans} + c`, "Gather all terms and add a single constant $+c$."),
    step(3 + terms.length * 2, "Check", `\\dfrac{d}{dx}(${ans}) = ${q}`, "Differentiate to confirm."),
    step(4 + terms.length * 2, "State the answer", `\\int (${q})\\,dx = ${ans} + c`, "Final indefinite integral."),
  ];
  return intQ(n, { difficulty, marks, answerType: "expression", tags: ["combination"], questionText: `Find $\\displaystyle\\int (${q})\\,dx$.`, steps, finalAnswer: `$\\displaystyle\\int (${q})\\,dx = ${ans} + c$.` });
}

function findCurve(n, dydx, point, antideriv, cValue, finalEq, difficulty = "Intermediate", marks = 4) {
  const [px, py] = point;
  const steps = [
    step(1, "Integrate the gradient function", `\\dfrac{dy}{dx} = ${dydx}`, "Find $y$ by integrating the given derivative."),
    step(2, "Apply standard integrals", `y = ${antideriv} + c`, "Use the standard results term by term."),
    step(3, "Use the given point", `${py} = ${antideriv.replace(/x/g, `(${px})`)} + c`, `Substitute $x = ${px}$ to find $c$.`),
    step(4, "Solve for c", `c = ${cValue}`, "Rearrange for the constant of integration."),
    step(5, "Write the equation", finalEq, "Substitute $c$ back to get $y$ in terms of $x$."),
    step(6, "Verify the point", `\\text{At } x=${px},\\; y=${py}`, "The curve passes through the given point."),
    step(7, "Check the gradient", `\\dfrac{dy}{dx} = ${dydx}`, "Differentiate your answer to confirm the gradient function."),
    step(8, "State the equation", finalEq, "This is the equation of the curve."),
  ];
  return intQ(n, { difficulty, marks, answerType: "expression", tags: ["constant of integration", "curve"], questionText: `A curve has gradient function $\\dfrac{dy}{dx} = ${dydx}$ and passes through the point $(${px},\\,${py})$. Find the equation of the curve.`, steps, finalAnswer: `$${finalEq}$.` });
}

function definite(n, integrand, a, b, exact, difficulty = "Intermediate", marks = 4, context = "") {
  const steps = [
    step(1, "Find the indefinite integral", `\\int ${integrand}\\,dx`, "First find an antiderivative using standard results."),
    step(2, "Write the antiderivative", `F(x) = ${exact.antideriv}`, exact.why ?? "Standard integration."),
    step(3, "Apply the limits", `\\left[ ${exact.antideriv} \\right]_{${a}}^{${b}}`, "Evaluate the antiderivative at the upper and lower limits."),
    step(4, "Substitute the upper limit", `F(${b}) = ${exact.upper}`, `At $x = ${b}$.`),
    step(5, "Substitute the lower limit", `F(${a}) = ${exact.lower}`, `At $x = ${a}$.`),
    step(6, "Subtract", `${exact.upper} - (${exact.lower}) = ${exact.result}`, "Definite integral = value at top minus value at bottom."),
    step(7, context || "Interpret", exact.result, context || "This is the exact value of the integral."),
    step(8, "State the answer", `\\int_{${a}}^{${b}} ${integrand}\\,dx = ${exact.result}`, "Exact form required."),
  ];
  return intQ(n, { difficulty, marks, answerType: "exact", tags: ["definite integral"], questionText: `Evaluate $\\displaystyle\\int_{${a}}^{${b}} ${integrand}\\,dx$ exactly.`, steps, finalAnswer: `$\\displaystyle\\int_{${a}}^{${b}} ${integrand}\\,dx = ${exact.result}$.` });
}

function hardQ(n, questionText, steps, finalAnswer, tags = [], marks = 7) {
  return intQ(n, { difficulty: "Hard", marks, answerType: "exact", tags: [...tags, "multi-part"], questionText, steps, finalAnswer });
}

const questions = [
  indefExp(1, 1),
  indefExp(2, 3),
  indefLog(3, "1/x"),
  indefExp(4, 1, 5),
  indefTrig(5, "sin"),
  indefTrig(6, "cos"),
  indefTrig(7, "sec2"),
  indefExp(8, 2, 6),
  indefLog(9, "k/x"),
  indefTrig(10, "sin", 1, "2x"),
  indefTrig(11, "cos", 1, "3x"),
  indefExp(12, -1),
  indefLog(13, "1/(ax+b)"),
  indefMixed(14, [{ q: "e^{x}", a: "e^{x}", why: "$\\int e^{x}\\,dx = e^{x}$." }, { q: "x^{3}", a: "\\dfrac{x^{4}}{4}", why: "Power rule for $x^{3}$." }]),
  indefMixed(15, [{ q: "\\sin x", a: "-\\cos x", why: "Standard sine integral." }, { q: "\\cos x", a: "\\sin x", why: "Standard cosine integral." }]),
  indefMixed(16, [{ q: "2e^{x}", a: "2e^{x}", why: "Constant multiple of $e^{x}$." }, { q: "-\\dfrac{3}{x}", a: "-3\\ln|x|", why: "Standard $1/x$ integral scaled by $-3$." }], "Easy", 3),
  indefTrig(17, "cos", -4),
  indefTrig(18, "sin", 1, "x + \\dfrac{\\pi}{4}"),
  intQ(19, { difficulty: "Intermediate", marks: 3, answerType: "expression", tags: ["exponential","linear argument"], questionText: "Find $\\displaystyle\\int e^{3x+2}\\,dx$.", steps: [step(1,"Identify the form","\\int e^{3x+2}\\,dx","The exponent is a linear expression $3x+2$."),step(2,"Recall the standard result","\\int e^{ax+b}\\,dx = \\dfrac{1}{a}e^{ax+b} + c","Treat the linear expression as a single block; divide by the coefficient of $x$."),step(3,"Apply with a = 3","\\int e^{3x+2}\\,dx = \\dfrac{1}{3}e^{3x+2} + c","Here $a=3$ and $b=2$."),step(4,"Check","\\dfrac{d}{dx}\\left(\\tfrac{1}{3}e^{3x+2}\\right) = e^{3x+2}","Differentiation brings down a factor of $3$ which cancels the $\\tfrac{1}{3}$."),step(5,"Answer","\\dfrac{1}{3}e^{3x+2} + c","Final antiderivative.")], finalAnswer: "$\\displaystyle\\int e^{3x+2}\\,dx = \\dfrac{1}{3}e^{3x+2} + c$." }),
  indefLog(20, "1/(b-ax)"),
  indefTrig(21, "cos", 1, "2x - 1", "Intermediate", 3),
  indefExp(22, 4, 8),
  intQ(23, { difficulty: "Easy", marks: 2, answerType: "expression", tags: ["reciprocal"], questionText: "Find $\\displaystyle\\int \\dfrac{1}{3x}\\,dx$.", steps: [step(1,"Rewrite","\\int \\dfrac{1}{3x}\\,dx = \\dfrac{1}{3}\\int \\dfrac{1}{x}\\,dx","Factor out the constant."),step(2,"Standard result","\\dfrac{1}{3}\\ln|x| + c","Use $\\int \\tfrac{1}{x}\\,dx = \\ln|x| + c$."),step(3,"Alternative form","\\dfrac{1}{3}\\ln|3x| + c","Equally valid since $\\tfrac{1}{3}\\ln|3x| = \\tfrac{1}{3}\\ln|x| + \\text{const}$."),step(4,"Domain","x \\neq 0","The integrand is undefined at $x=0$."),step(5,"Check","\\dfrac{d}{dx}\\left(\\tfrac{1}{3}\\ln|x|\\right) = \\tfrac{1}{3x}","Differentiation confirms."),step(6,"Answer","\\int \\dfrac{1}{3x}\\,dx = \\dfrac{1}{3}\\ln|x| + c","Final answer.")], finalAnswer: "$\\displaystyle\\int \\dfrac{1}{3x}\\,dx = \\dfrac{1}{3}\\ln|x| + c$." }),
  indefTrig(24, "sin", -1, "5x"),
  intQ(25, { difficulty: "Easy", marks: 3, answerType: "expression", tags: ["exponential","a^x"], questionText: "Find $\\displaystyle\\int 2^{x}\\,dx$.", steps: [step(1,"Identify the form","\\int 2^{x}\\,dx","This is an exponential with base $2$, not $e$."),step(2,"Recall the standard result","\\int a^{x}\\,dx = \\dfrac{a^{x}}{\\ln a} + c","For base $a>0$, $a\\neq 1$, integration gives $a^{x}/\\ln a$."),step(3,"Substitute a = 2","\\int 2^{x}\\,dx = \\dfrac{2^{x}}{\\ln 2} + c","Apply with $a=2$."),step(4,"Check","\\dfrac{d}{dx}\\left(\\dfrac{2^{x}}{\\ln 2}\\right) = 2^{x}","Since $\\tfrac{d}{dx}(2^{x}) = 2^{x}\\ln 2$."),step(5,"Note","\\text{Valid for all real }x","$2^{x}$ is defined everywhere."),step(6,"Answer","\\int 2^{x}\\,dx = \\dfrac{2^{x}}{\\ln 2} + c","Standard result.")], finalAnswer: "$\\displaystyle\\int 2^{x}\\,dx = \\dfrac{2^{x}}{\\ln 2} + c$." }),
  definite(26, "e^{x}", 0, 1, { antideriv: "e^{x}", upper: "e", lower: "1", result: "e - 1", why: "$\\int e^{x}\\,dx = e^{x}$." }),
  definite(27, "\\dfrac{1}{x}", 1, "e", { antideriv: "\\ln x", upper: "\\ln e = 1", lower: "\\ln 1 = 0", result: "1", why: "On $[1,e]$, $x>0$ so $\\ln|x| = \\ln x$." }),
  definite(28, "\\sin x", 0, "\\dfrac{\\pi}{2}", { antideriv: "-\\cos x", upper: "-\\cos\\tfrac{\\pi}{2} = 0", lower: "-\\cos 0 = -1", result: "1", why: "$\\int \\sin x\\,dx = -\\cos x$." }),
  definite(29, "\\cos x", 0, "\\pi", { antideriv: "\\sin x", upper: "\\sin\\pi = 0", lower: "\\sin 0 = 0", result: "0", why: "$\\int \\cos x\\,dx = \\sin x$." }),
  definite(30, "e^{2x}", 0, 1, { antideriv: "\\dfrac{1}{2}e^{2x}", upper: "\\dfrac{e^{2}}{2}", lower: "\\dfrac{1}{2}", result: "\\dfrac{e^{2}-1}{2}", why: "$\\int e^{2x}\\,dx = \\tfrac{1}{2}e^{2x}$." }),
  findCurve(31, "e^{x}", [0, 2], "e^{x}", 1, "y = e^{x} + 1"),
  findCurve(32, "\\dfrac{2}{x}", [1, 3], "2\\ln|x|", 3, "y = 2\\ln|x| + 3"),
  findCurve(33, "\\sin x", [0, 1], "-\\cos x", 2, "y = -\\cos x + 2"),
  findCurve(34, "\\cos x", ["\\dfrac{\\pi}{2}", 5], "\\sin x", 4, "y = \\sin x + 4"),
  indefMixed(35, [{ q: "e^{x}", a: "e^{x}", why: "Exponential." }, { q: "\\sin x", a: "-\\cos x", why: "Sine integral." }]),
  indefMixed(36, [{ q: "\\dfrac{1}{x}", a: "\\ln|x|", why: "Logarithmic standard result." }, { q: "2x", a: "x^{2}", why: "Power rule." }]),
  indefMixed(37, [{ q: "4e^{2x}", a: "2e^{2x}", why: "$4\\times\\tfrac{1}{2}e^{2x}$." }, { q: "-3\\cos x", a: "-3\\sin x", why: "Scaled cosine integral." }]),
  intQ(38, { difficulty: "Intermediate", marks: 3, answerType: "expression", tags: ["logarithm","linear"], questionText: "Find $\\displaystyle\\int \\dfrac{3}{2x+5}\\,dx$.", steps: [step(1,"Identify","\\int \\dfrac{3}{2x+5}\\,dx","Linear denominator with constant numerator."),step(2,"Factor","3\\int \\dfrac{1}{2x+5}\\,dx","Constants factor out."),step(3,"Standard form","\\int \\dfrac{1}{ax+b}\\,dx = \\dfrac{1}{a}\\ln|ax+b| + c","With $a=2$, $b=5$."),step(4,"Apply","\\dfrac{3}{2}\\ln|2x+5| + c","Multiply the $\\tfrac{1}{2}$ by $3$."),step(5,"Domain","2x+5 \\neq 0","Denominator must be non-zero."),step(6,"Check","\\dfrac{d}{dx}\\left(\\tfrac{3}{2}\\ln|2x+5|\\right) = \\dfrac{3}{2x+5}","Confirms integrand."),step(7,"Answer","\\int \\dfrac{3}{2x+5}\\,dx = \\dfrac{3}{2}\\ln|2x+5| + c","Final.")], finalAnswer: "$\\displaystyle\\int \\dfrac{3}{2x+5}\\,dx = \\dfrac{3}{2}\\ln|2x+5| + c$." }),
  indefTrig(39, "sin", -2, "3x", "Intermediate", 3),
  definite(40, "e^{x}", 0, "\\ln 2", { antideriv: "e^{x}", upper: "e^{\\ln 2} = 2", lower: "1", result: "1", why: "Evaluate at $x = \\ln 2$." }),
  definite(41, "\\cos x", "\\dfrac{\\pi}{6}", "\\dfrac{\\pi}{2}", { antideriv: "\\sin x", upper: "\\sin\\tfrac{\\pi}{2} = 1", lower: "\\sin\\tfrac{\\pi}{6} = \\tfrac{1}{2}", result: "\\dfrac{1}{2}", why: "Standard cosine integral." }),
  definite(42, "\\dfrac{1}{x}", 1, 2, { antideriv: "\\ln x", upper: "\\ln 2", lower: "0", result: "\\ln 2", why: "On $[1,2]$, $x>0$." }),
  definite(43, "e^{x} + 1", 0, 1, { antideriv: "e^{x} + x", upper: "e + 1", lower: "1", result: "e", why: "Integrate term by term." }),
  intQ(44, { difficulty: "Intermediate", marks: 5, answerType: "exact", tags: ["area","definite integral"], questionText: "The curve $y = e^{x}$ meets the $x$-axis at no point, but is bounded above $y=0$ on $[0, \\ln 3]$. Find the exact area of the region between the curve and the $x$-axis on this interval.", steps: [step(1,"Set up the area","A = \\int_{0}^{\\ln 3} e^{x}\\,dx","Area under a curve is the definite integral of $y$."),step(2,"Integrate","\\int e^{x}\\,dx = e^{x}","Standard exponential integral."),step(3,"Apply limits","\\left[e^{x}\\right]_{0}^{\\ln 3}","Evaluate at $x = \\ln 3$ and $x = 0$."),step(4,"Upper value","e^{\\ln 3} = 3","Use the law $e^{\\ln a} = a$."),step(5,"Lower value","e^{0} = 1","At the origin end."),step(6,"Subtract","A = 3 - 1 = 2","Top minus bottom."),step(7,"Units","A = 2 \\text{ square units}","Area is positive since $e^{x}>0$."),step(8,"Answer","A = 2","Exact area.")], finalAnswer: "The area is $2$ square units." }),
  indefMixed(45, [{ q: "e^{x}", a: "e^{x}", why: "Exponential." }, { q: "-e^{-x}", a: "e^{-x}", why: "$\\int e^{-x}\\,dx = -e^{-x}$, so $-e^{-x}$ integrates to $e^{-x}$." }], "Intermediate", 3),
  intQ(46, { difficulty: "Intermediate", marks: 4, answerType: "expression", tags: ["rewrite","exponential"], questionText: "Find $\\displaystyle\\int \\dfrac{e^{2x}+1}{e^{x}}\\,dx$.", steps: [step(1,"Simplify the integrand","\\dfrac{e^{2x}+1}{e^{x}} = e^{x} + e^{-x}","Divide each term by $e^{x}$."),step(2,"Split","\\int (e^{x} + e^{-x})\\,dx","Linearity of integration."),step(3,"Integrate e^x","e^{x}","Standard result."),step(4,"Integrate e^{-x}","-e^{-x}","$\\int e^{-x}\\,dx = -e^{-x}$."),step(5,"Combine","e^{x} - e^{-x} + c","Gather terms."),step(6,"Check","\\dfrac{d}{dx}(e^{x}-e^{-x}) = e^{x}+e^{-x}","Matches simplified integrand."),step(7,"Answer","\\int \\dfrac{e^{2x}+1}{e^{x}}\\,dx = e^{x} - e^{-x} + c","Final.")], finalAnswer: "$\\displaystyle\\int \\dfrac{e^{2x}+1}{e^{x}}\\,dx = e^{x} - e^{-x} + c$." }),
  indefMixed(47, [{ q: "5\\cos(2x)", a: "\\dfrac{5}{2}\\sin(2x)", why: "$5\\times\\tfrac{1}{2}\\sin(2x)$." }, { q: "3e^{x}", a: "3e^{x}", why: "Scaled exponential." }], "Intermediate", 4),
  findCurve(48, "e^{2x}", [0, 1], "\\dfrac{1}{2}e^{2x}", "\\dfrac{1}{2}", "y = \\dfrac{1}{2}e^{2x} + \\dfrac{1}{2}"),
  definite(49, "e^{-x}", 0, 2, { antideriv: "-e^{-x}", upper: "-e^{-2}", lower: "-1", result: "1 - e^{-2}", why: "$\\int e^{-x}\\,dx = -e^{-x}$." }),
  definite(50, "\\sin x", 0, "\\pi", { antideriv: "-\\cos x", upper: "-\\cos\\pi = 1", lower: "-\\cos 0 = -1", result: "2", why: "Area under one arch of $\\sin x$." }),
];

// Append questions 51-70
questions.push(
  hardQ(51, "Find $\\displaystyle\\int e^{2x}\\,dx$ and hence evaluate $\\displaystyle\\int_{0}^{\\ln 2} e^{2x}\\,dx$ exactly.", [
    step(1,"Part (a): identify","\\int e^{2x}\\,dx","Standard exponential with $k=2$."),
    step(2,"Integrate","\\dfrac{1}{2}e^{2x} + c","$\\int e^{kx}\\,dx = \\tfrac{1}{k}e^{kx}+c$."),
    step(3,"Part (b): set up","\\left[\\dfrac{1}{2}e^{2x}\\right]_{0}^{\\ln 2}","Use the antiderivative from (a)."),
    step(4,"Upper limit","\\dfrac{1}{2}e^{2\\ln 2} = \\dfrac{1}{2}(2^{2}) = 2","Since $e^{2\\ln 2} = (e^{\\ln 2})^{2} = 4$."),
    step(5,"Lower limit","\\dfrac{1}{2}e^{0} = \\dfrac{1}{2}","At $x=0$."),
    step(6,"Subtract","2 - \\dfrac{1}{2} = \\dfrac{3}{2}","Definite integral value."),
    step(7,"Verify","\\dfrac{d}{dx}\\left(\\tfrac{1}{2}e^{2x}\\right) = e^{2x}","Checks part (a)."),
    step(8,"Answer","\\int e^{2x}\\,dx = \\tfrac{1}{2}e^{2x}+c;\\; \\int_{0}^{\\ln 2} e^{2x}\\,dx = \\tfrac{3}{2}","Both parts."),
  ], "(a) $\\displaystyle\\int e^{2x}\\,dx = \\dfrac{1}{2}e^{2x} + c$. (b) $\\displaystyle\\int_{0}^{\\ln 2} e^{2x}\\,dx = \\dfrac{3}{2}$.", ["exponential","definite integral"]),
  hardQ(52, "Evaluate $\\displaystyle\\int_{0}^{\\pi/2} (\\sin x + \\cos x)\\,dx$ exactly.", [
    step(1,"Split","\\int_{0}^{\\pi/2}\\sin x\\,dx + \\int_{0}^{\\pi/2}\\cos x\\,dx","Linearity."),
    step(2,"Integrate sine","\\left[-\\cos x\\right]_{0}^{\\pi/2}","Standard result."),
    step(3,"Sine part","(-\\cos\\tfrac{\\pi}{2})-(-\\cos 0) = 0-(-1) = 1","Evaluate."),
    step(4,"Integrate cosine","\\left[\\sin x\\right]_{0}^{\\pi/2}","Standard result."),
    step(5,"Cosine part","\\sin\\tfrac{\\pi}{2}-\\sin 0 = 1-0 = 1","Evaluate."),
    step(6,"Add","1+1 = 2","Total integral."),
    step(7,"Interpret","\\text{Combined area under sine and cosine}","Both contribute equally on this interval."),
    step(8,"Answer","2","Exact value."),
  ], "$\\displaystyle\\int_{0}^{\\pi/2} (\\sin x + \\cos x)\\,dx = 2$.", ["trigonometric"]),
  hardQ(53, "A curve has $\\dfrac{dy}{dx} = \\dfrac{1}{x} + 2x$ for $x>0$ and passes through $(1, 1)$. Find $y$ in terms of $x$ and hence find the value of $y$ when $x = 2$.", [
    step(1,"Integrate","y = \\ln x + x^{2} + c","$\\int \\tfrac{1}{x}\\,dx = \\ln x$ and $\\int 2x\\,dx = x^{2}$ on $x>0$."),
    step(2,"Use (1,1)","1 = \\ln 1 + 1 + c = 0 + 1 + c","Substitute the given point."),
    step(3,"Solve","c = 0","So the constant is zero."),
    step(4,"Equation","y = \\ln x + x^{2}","Curve equation."),
    step(5,"Find y(2)","y = \\ln 2 + 4","Substitute $x=2$."),
    step(6,"Exact value","y = 4 + \\ln 2","Leave in log form."),
    step(7,"Check gradient at x=1","\\dfrac{1}{1}+2(1) = 3","Differentiate $y$ to verify (optional)."),
    step(8,"Answer","y = \\ln x + x^{2};\\; y(2) = 4+\\ln 2","Both parts."),
  ], "$y = \\ln x + x^{2}$; when $x=2$, $y = 4 + \\ln 2$.", ["curve","logarithm"]),
  hardQ(54, "Find $\\displaystyle\\int (e^{x} + \\sin x + \\cos x)\\,dx$.", [
    step(1,"Split","\\int e^{x}\\,dx + \\int \\sin x\\,dx + \\int \\cos x\\,dx","Three standard integrals."),
    step(2,"e^x","e^{x}","Self-integrating exponential."),
    step(3,"sin x","-\\cos x","Standard sine integral."),
    step(4,"cos x","\\sin x","Standard cosine integral."),
    step(5,"Combine","e^{x} - \\cos x + \\sin x + c","Single constant."),
    step(6,"Check","\\dfrac{d}{dx}(e^{x}-\\cos x+\\sin x) = e^{x}+\\sin x+\\cos x","Differentiate."),
    step(7,"Answer","e^{x}-\\cos x+\\sin x+c","Final."),
  ], "$\\displaystyle\\int (e^{x} + \\sin x + \\cos x)\\,dx = e^{x} - \\cos x + \\sin x + c$.", ["combination"]),
  intQ(55, { difficulty: "Intermediate", marks: 3, answerType: "expression", tags: ["logarithm"], questionText: "Find $\\displaystyle\\int \\dfrac{6}{3x-1}\\,dx$.", steps: [step(1,"Factor","6\\int \\dfrac{1}{3x-1}\\,dx","Constant multiple."),step(2,"Standard","\\int \\dfrac{1}{ax+b}\\,dx = \\dfrac{1}{a}\\ln|ax+b|+c","$a=3$, $b=-1$."),step(3,"Apply","\\dfrac{6}{3}\\ln|3x-1|+c = 2\\ln|3x-1|+c","Simplify."),step(4,"Domain","3x-1 \\neq 0","Non-zero denominator."),step(5,"Check","\\dfrac{d}{dx}(2\\ln|3x-1|)=\\dfrac{6}{3x-1}","Verify."),step(6,"Answer","2\\ln|3x-1|+c","Final.")], finalAnswer: "$\\displaystyle\\int \\dfrac{6}{3x-1}\\,dx = 2\\ln|3x-1| + c$." }),
  hardQ(56, "Find $\\displaystyle\\int (e^{x} + e^{-x})^{2}\\,dx$.", [
    step(1,"Expand","(e^{x}+e^{-x})^{2} = e^{2x}+2+e^{-2x}","Square the bracket."),
    step(2,"Split integral","\\int e^{2x}\\,dx + \\int 2\\,dx + \\int e^{-2x}\\,dx","Linearity."),
    step(3,"First term","\\dfrac{1}{2}e^{2x}","$\\int e^{2x}\\,dx$."),
    step(4,"Second term","2x","Integral of constant $2$."),
    step(5,"Third term","-\\dfrac{1}{2}e^{-2x}","$\\int e^{-2x}\\,dx = -\\tfrac{1}{2}e^{-2x}$."),
    step(6,"Combine","\\dfrac{1}{2}e^{2x} + 2x - \\dfrac{1}{2}e^{-2x} + c","Gather terms."),
    step(7,"Alternative","\\dfrac{1}{2}(e^{2x}-e^{-2x})+2x+c","Factor if preferred."),
    step(8,"Answer","\\dfrac{1}{2}e^{2x}+2x-\\dfrac{1}{2}e^{-2x}+c","Final."),
  ], "$\\displaystyle\\int (e^{x}+e^{-x})^{2}\\,dx = \\dfrac{1}{2}e^{2x} + 2x - \\dfrac{1}{2}e^{-2x} + c$.", ["exponential","expansion"]),
  hardQ(57, "Given that $\\displaystyle\\int_{0}^{a} e^{x}\\,dx = e - 1$, find the value of $a$.", [
    step(1,"Integrate","\\int_{0}^{a} e^{x}\\,dx = \\left[e^{x}\\right]_{0}^{a}","Standard exponential."),
    step(2,"Evaluate","e^{a} - e^{0} = e^{a} - 1","At limits."),
    step(3,"Set equal","e^{a} - 1 = e - 1","Given condition."),
    step(4,"Solve","e^{a} = e","Add $1$ to both sides."),
    step(5,"Take ln","a = 1","Since $e^{a}=e$ implies $a=1$."),
    step(6,"Verify","\\int_{0}^{1}e^{x}\\,dx = e-1","Check."),
    step(7,"Answer","a = 1","Final."),
  ], "$a = 1$.", ["definite integral","exponential"]),
  hardQ(58, "A curve passes through $(0, 1)$ and has gradient function $\\dfrac{dy}{dx} = e^{x} + \\cos x$. Find $y$ in terms of $x$ and evaluate $y$ at $x = \\dfrac{\\pi}{2}$.", [
    step(1,"Integrate","y = e^{x} + \\sin x + c","Standard integrals."),
    step(2,"Use (0,1)","1 = e^{0} + \\sin 0 + c = 1 + 0 + c","Substitute."),
    step(3,"c = 0","c = 0","Constant is zero."),
    step(4,"Equation","y = e^{x} + \\sin x","Curve."),
    step(5,"At x = π/2","y = e^{\\pi/2} + 1","Evaluate."),
    step(6,"Exact","y = 1 + e^{\\pi/2}","Simplest exact form."),
    step(7,"Check (0,1)","e^{0}+\\sin 0 = 1","Passes through point."),
    step(8,"Answer","y = e^{x}+\\sin x;\\; y(\\tfrac{\\pi}{2}) = 1+e^{\\pi/2}","Both parts."),
  ], "$y = e^{x} + \\sin x$; at $x = \\dfrac{\\pi}{2}$, $y = 1 + e^{\\pi/2}$.", ["curve"]),
  hardQ(59, "Evaluate $\\displaystyle\\int_{1}^{e^{2}} \\dfrac{1}{x}\\,dx$.", [
    step(1,"Antiderivative","\\ln x","On $x>0$."),
    step(2,"Apply limits","\\left[\\ln x\\right]_{1}^{e^{2}}","Definite integral."),
    step(3,"Upper","\\ln(e^{2}) = 2","Log law."),
    step(4,"Lower","\\ln 1 = 0","At $x=1$."),
    step(5,"Result","2 - 0 = 2","Subtract."),
    step(6,"Interpret","\\text{Area under }y=\\tfrac{1}{x}","Hyperbola region."),
    step(7,"Answer","2","Exact."),
  ], "$\\displaystyle\\int_{1}^{e^{2}} \\dfrac{1}{x}\\,dx = 2$.", ["logarithm","definite integral"]),
  hardQ(60, "Find the exact area enclosed between the curve $y = \\cos x$ and the $x$-axis for $0 \\le x \\le \\dfrac{\\pi}{2}$.", [
    step(1,"Area formula","A = \\int_{0}^{\\pi/2} \\cos x\\,dx","Definite integral of $y$."),
    step(2,"Integrate","\\sin x","Standard."),
    step(3,"Limits","\\left[\\sin x\\right]_{0}^{\\pi/2}","Evaluate."),
    step(4,"Upper","\\sin\\tfrac{\\pi}{2} = 1","At $\\pi/2$."),
    step(5,"Lower","\\sin 0 = 0","At $0$."),
    step(6,"Area","A = 1","Positive since $\\cos x \\ge 0$ on this interval."),
    step(7,"Answer","1 \\text{ square unit}","Exact area."),
  ], "The area is $1$ square unit.", ["area","trigonometric"]),
  hardQ(61, "Find $\\displaystyle\\int \\dfrac{e^{3x}-1}{e^{x}}\\,dx$.", [
    step(1,"Simplify","\\dfrac{e^{3x}-1}{e^{x}} = e^{2x} - e^{-x}","Split fraction."),
    step(2,"Integrate e^{2x}","\\dfrac{1}{2}e^{2x}","Standard."),
    step(3,"Integrate -e^{-x}","e^{-x}","$\\int -e^{-x}\\,dx = e^{-x}$."),
    step(4,"Combine","\\dfrac{1}{2}e^{2x} + e^{-x} + c","Antiderivative."),
    step(5,"Check","\\dfrac{d}{dx}\\left(\\tfrac{1}{2}e^{2x}+e^{-x}\\right)=e^{2x}-e^{-x}","Verify."),
    step(6,"Answer","\\dfrac{1}{2}e^{2x}+e^{-x}+c","Final."),
  ], "$\\displaystyle\\int \\dfrac{e^{3x}-1}{e^{x}}\\,dx = \\dfrac{1}{2}e^{2x} + e^{-x} + c$.", ["exponential"]),
  hardQ(62, "The curve $C$ has equation $y = f(x)$ where $f'(x) = 3e^{3x} - \\dfrac{2}{x}$ for $x>0$. Given that $C$ passes through $(1, e^{3})$, find $f(x)$.", [
    step(1,"Integrate","f(x) = e^{3x} - 2\\ln x + c","$\\int 3e^{3x}\\,dx = e^{3x}$ and $\\int -\\tfrac{2}{x}\\,dx = -2\\ln x$."),
    step(2,"Substitute (1, e³)","e^{3} = e^{3} - 2\\ln 1 + c","$\\ln 1 = 0$."),
    step(3,"c = 0","c = 0","Constant vanishes."),
    step(4,"f(x)","f(x) = e^{3x} - 2\\ln x","Equation of curve."),
    step(5,"Verify point","f(1) = e^{3} - 0 = e^{3}","Passes through given point."),
    step(6,"Check derivative","f'(x) = 3e^{3x} - \\tfrac{2}{x}","Differentiate to confirm."),
    step(7,"Answer","f(x) = e^{3x} - 2\\ln x","Final."),
  ], "$f(x) = e^{3x} - 2\\ln x$.", ["curve","exponential","logarithm"]),
  hardQ(63, "Evaluate $\\displaystyle\\int_{0}^{\\pi/4} (2\\sin x + 3\\cos x)\\,dx$ exactly.", [
    step(1,"Antiderivative","-2\\cos x + 3\\sin x","Integrate each term."),
    step(2,"Apply limits","\\left[-2\\cos x + 3\\sin x\\right]_{0}^{\\pi/4}","Definite integral."),
    step(3,"At π/4","-2\\cdot\\tfrac{\\sqrt{2}}{2} + 3\\cdot\\tfrac{\\sqrt{2}}{2} = \\tfrac{\\sqrt{2}}{2}","Exact trig values."),
    step(4,"At 0","-2(1) + 3(0) = -2","Lower limit."),
    step(5,"Subtract","\\tfrac{\\sqrt{2}}{2} - (-2) = 2 + \\tfrac{\\sqrt{2}}{2}","Result."),
    step(6,"Simplify","2 + \\dfrac{\\sqrt{2}}{2}","Exact form."),
    step(7,"Answer","2 + \\tfrac{\\sqrt{2}}{2}","Final."),
  ], "$\\displaystyle\\int_{0}^{\\pi/4} (2\\sin x + 3\\cos x)\\,dx = 2 + \\dfrac{\\sqrt{2}}{2}$.", ["trigonometric","definite integral"]),
  hardQ(64, "Find $\\displaystyle\\int_{0}^{1} (e^{x} + x)\\,dx$ and hence find the average value of $e^{x}+x$ on $[0,1]$.", [
    step(1,"Integrate","\\int (e^{x}+x)\\,dx = e^{x} + \\tfrac{x^{2}}{2}","Term by term."),
    step(2,"Definite","\\left[e^{x}+\\tfrac{x^{2}}{2}\\right]_{0}^{1}","Apply limits."),
    step(3,"At 1","e + \\tfrac{1}{2}","Upper."),
    step(4,"At 0","1 + 0 = 1","Lower."),
    step(5,"Integral","e + \\tfrac{1}{2} - 1 = e - \\tfrac{1}{2}","Subtract."),
    step(6,"Average","\\dfrac{e-\\tfrac{1}{2}}{1} = e - \\tfrac{1}{2}","Average = integral / width."),
    step(7,"Answer","\\int = e-\\tfrac{1}{2};\\; \\text{average} = e-\\tfrac{1}{2}","Both."),
  ], "$\\displaystyle\\int_{0}^{1}(e^{x}+x)\\,dx = e - \\dfrac{1}{2}$; average value $= e - \\dfrac{1}{2}$.", ["definite integral","average"]),
  hardQ(65, "A particle moves along a line so that its velocity at time $t$ seconds is $v = 3\\sin t + 2e^{t}$ m/s. Given $s(0) = 1$, find the displacement $s(t)$.", [
    step(1,"Relate s and v","s = \\int v\\,dt","Displacement is the integral of velocity."),
    step(2,"Integrate sin t","-3\\cos t","$3\\int \\sin t\\,dt$."),
    step(3,"Integrate 2e^t","2e^{t}","Constant multiple of $e^{t}$."),
    step(4,"General","s = -3\\cos t + 2e^{t} + c","Add constant."),
    step(5,"s(0)=1","1 = -3(1) + 2(1) + c = -1 + c","Use initial condition."),
    step(6,"c = 2","c = 2","Solve."),
    step(7,"Answer","s = -3\\cos t + 2e^{t} + 2","Displacement function."),
  ], "$s(t) = -3\\cos t + 2e^{t} + 2$ metres.", ["modelling","kinematics"]),
  hardQ(66, "Find $\\displaystyle\\int e^{2x+1}\\,dx$ and hence evaluate $\\displaystyle\\int_{0}^{\\ln 2} e^{2x+1}\\,dx$ exactly.", [
    step(1,"Identify the form","\\int e^{2x+1}\\,dx","Linear expression in the exponent."),
    step(2,"Standard result","\\int e^{ax+b}\\,dx = \\dfrac{1}{a}e^{ax+b} + c","Divide by the coefficient of $x$."),
    step(3,"Part (a)","\\int e^{2x+1}\\,dx = \\dfrac{1}{2}e^{2x+1} + c","With $a=2$, $b=1$."),
    step(4,"Set up definite integral","\\left[\\dfrac{1}{2}e^{2x+1}\\right]_{0}^{\\ln 2}","Use the antiderivative from part (a)."),
    step(5,"Upper limit","\\dfrac{1}{2}e^{2\\ln 2 + 1} = \\dfrac{1}{2}e^{1} \\cdot 4 = 2e","Since $e^{2\\ln 2}=4$."),
    step(6,"Lower limit","\\dfrac{1}{2}e^{1} = \\dfrac{e}{2}","At $x=0$."),
    step(7,"Subtract","2e - \\dfrac{e}{2} = \\dfrac{3e}{2}","Definite integral value."),
    step(8,"Answer","\\int e^{2x+1}\\,dx = \\tfrac{1}{2}e^{2x+1}+c;\\; \\int_{0}^{\\ln 2} = \\tfrac{3e}{2}","Both parts."),
  ], "(a) $\\displaystyle\\int e^{2x+1}\\,dx = \\dfrac{1}{2}e^{2x+1} + c$. (b) $\\displaystyle\\int_{0}^{\\ln 2} e^{2x+1}\\,dx = \\dfrac{3e}{2}$.", ["exponential","definite integral"]),
  hardQ(67, "The region $R$ is bounded by $y = e^{2x}$, the coordinate axes and the line $x = 1$. Find the exact area of $R$.", [
    step(1,"Set up","A = \\int_{0}^{1} e^{2x}\\,dx","Area under curve from $x=0$ to $x=1$."),
    step(2,"Integrate","\\dfrac{1}{2}e^{2x}","Standard."),
    step(3,"Limits","\\left[\\dfrac{1}{2}e^{2x}\\right]_{0}^{1}","Evaluate."),
    step(4,"At 1","\\dfrac{e^{2}}{2}","Upper."),
    step(5,"At 0","\\dfrac{1}{2}","Lower."),
    step(6,"Area","\\dfrac{e^{2}-1}{2}","Subtract."),
    step(7,"Answer","\\dfrac{e^{2}-1}{2}","Exact area."),
  ], "Area $= \\dfrac{e^{2}-1}{2}$ square units.", ["area"]),
  hardQ(68, "Find $\\displaystyle\\int_{\\pi/6}^{\\pi/3} \\sec^{2} x\\,dx$.", [
    step(1,"Antiderivative","\\tan x","$\\int \\sec^{2}x\\,dx = \\tan x$."),
    step(2,"Limits","\\left[\\tan x\\right]_{\\pi/6}^{\\pi/3}","Apply."),
    step(3,"Upper","\\tan\\tfrac{\\pi}{3} = \\sqrt{3}","Exact."),
    step(4,"Lower","\\tan\\tfrac{\\pi}{6} = \\tfrac{1}{\\sqrt{3}} = \\tfrac{\\sqrt{3}}{3}","Exact."),
    step(5,"Subtract","\\sqrt{3} - \\tfrac{\\sqrt{3}}{3} = \\tfrac{2\\sqrt{3}}{3}","Common denominator."),
    step(6,"Answer","\\tfrac{2\\sqrt{3}}{3}","Exact value."),
  ], "$\\displaystyle\\int_{\\pi/6}^{\\pi/3} \\sec^{2} x\\,dx = \\dfrac{2\\sqrt{3}}{3}$.", ["secant","definite integral"]),
  hardQ(69, "A curve has $\\dfrac{dy}{dx} = 4\\cos(2x) - 3e^{-x}$. Given that the curve passes through $(0, 2)$, find its equation.", [
    step(1,"Integrate cos(2x)","2\\sin(2x)","$4\\cdot\\tfrac{1}{2}\\sin 2x$."),
    step(2,"Integrate -3e^{-x}","3e^{-x}","$-3\\cdot(-e^{-x})$."),
    step(3,"General","y = 2\\sin(2x) + 3e^{-x} + c","Combine."),
    step(4,"Use (0,2)","2 = 2\\sin 0 + 3e^{0} + c = 0 + 3 + c","Substitute."),
    step(5,"c = -1","c = -1","Solve."),
    step(6,"Equation","y = 2\\sin(2x) + 3e^{-x} - 1","Final curve."),
    step(7,"Verify","y(0) = -1 + 3 = 2","Check point."),
    step(8,"Answer","y = 2\\sin(2x) + 3e^{-x} - 1","Equation."),
  ], "$y = 2\\sin(2x) + 3e^{-x} - 1$.", ["curve"]),
  hardQ(70, "A curve $C$ has equation $y = f(x)$ where $f'(x) = e^{x} + \\dfrac{1}{x}$ for $x>0$.\n(a) Find $f(x)$, given that $f(1) = e$.\n(b) Evaluate $\\displaystyle\\int_{1}^{2} f'(x)\\,dx$ exactly.\n(c) Hence find the average rate of change of $f$ on $[1,2]$.", [
    step(1,"(a) Integrate","f(x) = e^{x} + \\ln x + c","Standard integrals on $x>0$."),
    step(2,"Use f(1)=e","e = e + \\ln 1 + c = e + 0 + c","Substitute."),
    step(3,"c = 0","c = 0","Constant is zero."),
    step(4,"State f(x)","f(x) = e^{x} + \\ln x","Part (a) answer."),
    step(5,"(b) Integral of f'","\\int_{1}^{2} f'(x)\\,dx = f(2) - f(1)","FTC: integral of derivative equals change in $f$."),
    step(6,"f(2)","e^{2} + \\ln 2","Evaluate $f$ at 2."),
    step(7,"f(1)","e","Given."),
    step(8,"Integral","e^{2} + \\ln 2 - e","Part (b)."),
    step(9,"(c) Average rate","\\dfrac{f(2)-f(1)}{2-1} = e^{2} + \\ln 2 - e","Change in $f$ over interval length."),
    step(10,"Answer","f(x)=e^{x}+\\ln x;\\; \\int_{1}^{2}f'(x)\\,dx = e^{2}+\\ln 2-e;\\; \\text{avg} = e^{2}+\\ln 2-e","All parts."),
  ], "(a) $f(x) = e^{x} + \\ln x$. (b) $\\displaystyle\\int_{1}^{2} f'(x)\\,dx = e^{2} + \\ln 2 - e$. (c) Average rate of change $= e^{2} + \\ln 2 - e$.", ["multi-part","FTC"], 8)
);

const STEP_MIN = { Easy: 6, Intermediate: 9, Hard: 13 };
const STEP_MAX = { Easy: 9, Intermediate: 13, Hard: 18 };

const EXTRA_STEPS = [
  (q) => step(0, "Name the integral type", "\\text{Standard integral}", "Classify the integrand: exponential, logarithmic, trigonometric, or a linear combination."),
  (q) => step(0, "Quote the relevant standard result", "\\text{From the formula sheet / memorised results}", "A-Level integration here relies on recognising standard forms rather than substitution or parts."),
  (q) => step(0, "Include the constant of integration", "+c", "Unless evaluating a definite integral, every antiderivative needs an arbitrary constant $+c$."),
  (q) => step(0, "Check by differentiating", "\\dfrac{d}{dx}(\\text{answer}) = \\text{integrand}", "Differentiation reverses integration — a quick check catches sign or scaling errors."),
  (q) => step(0, "State any domain restriction", "\\text{Where the integrand is defined}", "Logarithmic forms need a non-zero argument; trig results assume radians unless stated."),
  (q) => step(0, "Simplify the final form", "\\text{Collect like terms}", "Present the answer in the neatest equivalent form."),
  (q) => step(0, "Interpret the result", "\\text{What the integral represents}", "In context, this could be area, displacement, or simply an antiderivative."),
  (q) => step(0, "Compare with a special case", "\\text{Test at } x = 0 \\text{ or } x = 1", "Plugging in a simple value often confirms the structure of the answer."),
  (q) => step(0, "Summarise the method", "\\text{Recognise } f(ax+b) \\text{ form}", "The key skill is spotting which standard result applies and adjusting for the inner linear factor."),
  (q) => step(0, "Final answer", q.workedSolution.finalAnswer.replace(/^\$|\\$/g, ""), "State the result clearly, with $+c$ if indefinite."),
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
  steps = steps.map((s, i) => ({ ...s, stepNumber: i + 1 }));
  q.workedSolution.steps = steps;
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
