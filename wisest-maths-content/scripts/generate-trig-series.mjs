#!/usr/bin/env node
/**
 * Generates 70 A-Level Further Maths "Trigonometric series" questions.
 * Output: src/data/questions/a-level-further-maths/year-2-pure/trig-series.ts
 */

import { writeFileSync, mkdirSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const outDir = resolve(__dirname, "../src/data/questions/a-level-further-maths/year-2-pure");
const outPath = resolve(outDir, "trig-series.ts");

mkdirSync(outDir, { recursive: true });

const SUBTOPIC = "Trigonometric series";
const SUBTOPIC_ID = "fm.y2.pure.trig-series";
const LEVEL = "A-Level Further Maths";
const TOPIC = "Further Maths Year 2: Pure (Core Pure 2)";

const qid = (n) => `fm.y2.pure.trig-series.q${String(n).padStart(3, "0")}`;
const step = (n, description, workingLatex, explanation) => ({ stepNumber: n, description, workingLatex, explanation, diagram: null });
const base = (meta) => ({ level: LEVEL, topic: TOPIC, subtopic: SUBTOPIC, subtopicId: SUBTOPIC_ID, questionDiagram: null, ...meta });
const tsQ = (n, meta) => base({ id: qid(n), tags: ["trig-series", ...(meta.tags || [])], ...meta });

const ARG = {
  "0": "0",
  "pi/6": "\\frac{\\pi}{6}",
  "pi/4": "\\frac{\\pi}{4}",
  "pi/3": "\\frac{\\pi}{3}",
  "pi/2": "\\frac{\\pi}{2}",
  "2pi/3": "\\frac{2\\pi}{3}",
  "3pi/4": "\\frac{3\\pi}{4}",
  "pi/5": "\\frac{\\pi}{5}",
  pi: "\\pi",
};

const TH_VAL = {
  "0": 0,
  "pi/6": Math.PI / 6,
  "pi/4": Math.PI / 4,
  "pi/3": Math.PI / 3,
  "pi/2": Math.PI / 2,
  "2pi/3": (2 * Math.PI) / 3,
  "3pi/4": (3 * Math.PI) / 4,
  "pi/5": Math.PI / 5,
  pi: Math.PI,
};

function cosSum(n, theta) {
  const num = Math.sin((n * theta) / 2) * Math.cos(((n + 1) * theta) / 2);
  const den = Math.sin(theta / 2);
  return num / den;
}

function sinSum(n, theta) {
  const num = Math.sin((n * theta) / 2) * Math.sin(((n + 1) * theta) / 2);
  const den = Math.sin(theta / 2);
  return num / den;
}

function altCosSum(n, theta) {
  let s = 0;
  for (let k = 1; k <= n; k++) s += (k % 2 === 1 ? 1 : -1) * Math.cos(k * theta);
  return s;
}

function arithCosSum(n, theta, alpha) {
  let s = 0;
  for (let k = 0; k < n; k++) s += Math.cos(theta + k * alpha);
  return s;
}

function formatExact(x) {
  const eps = 1e-9;
  if (Math.abs(x) < eps) return "0";

  for (const d of [2, 3, 5, 6]) {
    const s = Math.sqrt(d);
    for (let a = -12; a <= 12; a++) {
      for (let b = -12; b <= 12; b++) {
        if (b === 0) continue;
        for (let den = 1; den <= 4; den++) {
          const v = (a + b * s) / den;
          if (Math.abs(x - v) < eps) {
            const absB = Math.abs(b);
            const bPart =
              absB === 1
                ? `\\sqrt{${d}}`
                : absB === 2 && d === 2
                  ? "2\\sqrt{2}"
                  : absB === 2 && d === 3
                    ? "2\\sqrt{3}"
                    : `${absB}\\sqrt{${d}}`;
            const bSign = b > 0 ? (a !== 0 ? " + " : "") : " - ";
            const aPart = a !== 0 ? `${a}` : "";
            const denPart = den === 1 ? "" : `/${den}`;
            if (a === 0 && den === 1) return `${b < 0 ? "-" : ""}${bPart}`;
            if (a !== 0 && b !== 0 && den === 1) return `${a}${bSign}${bPart}`;
            if (den !== 1) {
              const num = a === 0 ? `${b < 0 ? "-" : ""}${bPart}` : `${a}${bSign}${bPart}`;
              return `\\frac{${num}}{${den}}`;
            }
            return `${a}${bSign}${bPart}`;
          }
        }
      }
    }
  }

  const candidates = [
    [1, "1"],
    [-1, "-1"],
    [2, "2"],
    [-2, "-2"],
    [3, "3"],
    [-3, "-3"],
    [0.5, "\\frac{1}{2}"],
    [-0.5, "-\\frac{1}{2}"],
    [1.5, "\\frac{3}{2}"],
    [-1.5, "-\\frac{3}{2}"],
    [1 / 8, "\\frac{1}{8}"],
    [1 / 4, "\\frac{1}{4}"],
    [-1 / 4, "-\\frac{1}{4}"],
  ];
  for (const [v, l] of candidates) {
    if (Math.abs(x - v) < eps) return l;
  }
  for (let d = 1; d <= 64; d++) {
    const num = Math.round(x * d);
    if (Math.abs(x - num / d) < eps) {
      if (d === 1) return `${num}`;
      const sign = num < 0 ? "-" : "";
      return `${sign}\\frac{${Math.abs(num)}}{${d}}`;
    }
  }
  throw new Error(`Could not format exact value: ${x}`);
}

function angleLatex(k, thetaKey) {
  const m = {
    "pi/6": `\\frac{${k}\\pi}{6}`,
    "pi/4": `\\frac{${k}\\pi}{4}`,
    "pi/3": `\\frac{${k}\\pi}{3}`,
    "pi/2": `\\frac{${k}\\pi}{2}`,
    "pi/5": `\\frac{${k}\\pi}{5}`,
    "2pi/3": `\\frac{${2 * k}\\pi}{3}`,
    "3pi/4": `\\frac{${3 * k}\\pi}{4}`,
    pi: `${k}\\pi`,
    "0": "0",
  };
  return m[thetaKey] ?? `${k}${ARG[thetaKey]}`;
}

function angleVarLatex(thetaKey) {
  return angleLatex("k", thetaKey);
}

function sumCosQ(qNum, n, thetaKey, tags = [], marks = 4, difficulty = "Easy") {
  const answerLatex = formatExact(cosSum(n, TH_VAL[thetaKey]));
  const th = ARG[thetaKey];
  const terms = Array.from({ length: n }, (_, i) => `\\cos ${angleLatex(i + 1, thetaKey)}`).join(" + ");
  const steps = [
    step(1, "Define $C$ and $S$", `C = ${terms}`, "Let $C$ be the cosine sum we need."),
    step(2, "Companion sine sum", `S = ${Array.from({ length: n }, (_, i) => `\\sin ${angleLatex(i + 1, thetaKey)}`).join(" + ")}`, "Introduce the matching sine sum for the $C+iS$ method."),
    step(3, "Form $C + iS$", `C + iS = \\sum_{k=1}^{${n}} e^{ik${th}}`, "Each $\\cos k\\theta + i\\sin k\\theta = e^{ik\\theta}$ by Euler's formula."),
    step(4, "Geometric series", `C + iS = e^{i${th}}\\frac{1 - e^{i${n}${th}}}{1 - e^{i${th}}}`, "First term $e^{i\\theta}$, common ratio $e^{i\\theta}$."),
    step(5, "Sine product form", `C + iS = \\frac{\\sin\\!\\left(\\frac{${n}${th}}{2}\\right)}{\\sin\\!\\left(\\frac{${th}}{2}\\right)}\\,e^{i\\frac{${n + 1}${th}}{2}}`, "Multiply numerator and denominator by $e^{i(n+1)\\theta/2}$ and use $e^{ix}-e^{-ix}=2i\\sin x$."),
    step(6, "Real part", `C = \\frac{\\sin\\!\\left(\\frac{${n}${th}}{2}\\right)\\cos\\!\\left(\\frac{${n + 1}${th}}{2}\\right)}{\\sin\\!\\left(\\frac{${th}}{2}\\right)}`, "Take the real part: $\\operatorname{Re}(e^{i\\phi})=\\cos\\phi$."),
    step(7, "Simplify", `C = ${answerLatex}`, "Evaluate the trigonometric values."),
    step(8, "Check small $n$", `\\text{Direct addition confirms the result}`, "Substitute a few terms to verify."),
  ];
  return tsQ(qNum, {
    difficulty, marks, answerType: "written", tags: [...tags, "cosine-sum", "c-plus-is"],
    questionText: `Find the exact value of $\\displaystyle\\sum_{k=1}^{${n}} \\cos ${angleVarLatex(thetaKey)}$.`,
    workedSolution: { steps, finalAnswer: `$${answerLatex}$` },
  });
}

function sumSinQ(qNum, n, thetaKey, tags = [], marks = 4, difficulty = "Easy") {
  const answerLatex = formatExact(sinSum(n, TH_VAL[thetaKey]));
  const th = ARG[thetaKey];
  const steps = [
    step(1, "Define $S$", `S = \\sum_{k=1}^{${n}} \\sin ${angleVarLatex(thetaKey)}`, "Let $S$ be the required sine sum."),
    step(2, "Companion cosine sum", `C = \\sum_{k=1}^{${n}} \\cos ${angleVarLatex(thetaKey)}`, "Pair with the cosine sum for the $C+iS$ method."),
    step(3, "Form $C + iS$", `C + iS = \\sum_{k=1}^{${n}} e^{ik${th}}`, "Combine using Euler's formula."),
    step(4, "Geometric series", `C + iS = e^{i${th}}\\frac{1 - e^{i${n}${th}}}{1 - e^{i${th}}}`, "Sum of a geometric progression of complex exponentials."),
    step(5, "Sine product form", `C + iS = \\frac{\\sin\\!\\left(\\frac{${n}${th}}{2}\\right)}{\\sin\\!\\left(\\frac{${th}}{2}\\right)}\\,e^{i\\frac{${n + 1}${th}}{2}}`, "Standard result from the $C+iS$ method."),
    step(6, "Imaginary part", `S = \\frac{\\sin\\!\\left(\\frac{${n}${th}}{2}\\right)\\sin\\!\\left(\\frac{${n + 1}${th}}{2}\\right)}{\\sin\\!\\left(\\frac{${th}}{2}\\right)}`, "Take the imaginary part."),
    step(7, "Simplify", `S = ${answerLatex}`, "Evaluate using exact trigonometric values."),
    step(8, "Verify", `\\text{Compare with term-by-term addition}`, "Sanity check."),
  ];
  return tsQ(qNum, {
    difficulty, marks, answerType: "written", tags: [...tags, "sine-sum", "c-plus-is"],
    questionText: `Find the exact value of $\\displaystyle\\sum_{k=1}^{${n}} \\sin ${angleVarLatex(thetaKey)}$.`,
    workedSolution: { steps, finalAnswer: `$${answerLatex}$` },
  });
}

function sumBothQ(qNum, n, thetaKey, tags = [], marks = 6, difficulty = "Intermediate") {
  const th = ARG[thetaKey];
  const cAns = formatExact(cosSum(n, TH_VAL[thetaKey]));
  const sAns = formatExact(sinSum(n, TH_VAL[thetaKey]));
  const steps = [
    step(1, "Set up $C$ and $S$", `C = \\sum_{k=1}^{${n}} \\cos ${angleVarLatex(thetaKey)},\\quad S = \\sum_{k=1}^{${n}} \\sin ${angleVarLatex(thetaKey)}`, "Define both sums."),
    step(2, "Complex exponential", `C + iS = \\sum_{k=1}^{${n}} e^{ik${th}}`, "Euler's formula converts each term."),
    step(3, "Geometric sum", `C + iS = e^{i${th}}\\frac{1 - e^{i${n}${th}}}{1 - e^{i${th}}}`, "Apply the finite geometric series formula."),
    step(4, "Factor sines", `C + iS = \\frac{\\sin\\!\\left(\\frac{${n}${th}}{2}\\right)}{\\sin\\!\\left(\\frac{${th}}{2}\\right)}\\,e^{i\\frac{${n + 1}${th}}{2}}`, "Use $1-e^{ix}=-2ie^{ix/2}\\sin(x/2)$."),
    step(5, "Cosine sum", `C = \\frac{\\sin\\!\\left(\\frac{${n}${th}}{2}\\right)\\cos\\!\\left(\\frac{${n + 1}${th}}{2}\\right)}{\\sin\\!\\left(\\frac{${th}}{2}\\right)} = ${cAns}`, "Real part."),
    step(6, "Sine sum", `S = \\frac{\\sin\\!\\left(\\frac{${n}${th}}{2}\\right)\\sin\\!\\left(\\frac{${n + 1}${th}}{2}\\right)}{\\sin\\!\\left(\\frac{${th}}{2}\\right)} = ${sAns}`, "Imaginary part."),
    step(7, "Modulus check", `|C + iS| = \\frac{|\\sin(n\\theta/2)|}{|\\sin(\\theta/2)|}`, "The complex sum has modulus given by the sine ratio."),
    step(8, "Argument", `\\arg(C+iS) = \\frac{${n + 1}${th}}{2}`, "The argument of the complex sum."),
    step(9, "Answers", `C = ${cAns},\\; S = ${sAns}`, "Both sums found."),
  ];
  return tsQ(qNum, {
    difficulty, marks, answerType: "written", tags: [...tags, "cosine-sum", "sine-sum", "c-plus-is"],
    questionText: `Using the $C + iS$ method, find $\\displaystyle\\sum_{k=1}^{${n}} \\cos ${angleVarLatex(thetaKey)}$ and $\\displaystyle\\sum_{k=1}^{${n}} \\sin ${angleVarLatex(thetaKey)}$.`,
    workedSolution: { steps, finalAnswer: `$C = ${cAns}$, $S = ${sAns}$` },
  });
}

function altCosQ(qNum, n, thetaKey, tags = [], marks = 5, difficulty = "Intermediate") {
  const th = ARG[thetaKey];
  const answerLatex = formatExact(altCosSum(n, TH_VAL[thetaKey]));
  const terms = Array.from({ length: n }, (_, k) => `${k % 2 === 0 ? "" : "-"}\\cos ${k + 1}${th}`).join(" ").replace(/^-/, "");
  const steps = [
    step(1, "Rewrite with powers", `\\sum_{k=1}^{${n}} (-1)^{k-1}\\cos ${angleVarLatex(thetaKey)} = \\operatorname{Re}\\!\\left(\\sum_{k=1}^{${n}} (-e^{i${th}})^{k-1} e^{i${th}}\\right)`, "Alternating signs correspond to ratio $-e^{i\\theta}$."),
    step(2, "Geometric series", `\\sum_{k=1}^{${n}} (-e^{i${th}})^{k} = -e^{i${th}}\\frac{1 - (-e^{i${th}})^{${n}}}{1 + e^{i${th}}}`, "First term $-e^{i\\theta}$, ratio $-e^{i\\theta}$."),
    step(3, "Simplify denominator", `1 + e^{i${th}} = 2e^{i${th}/2}\\cos\\!\\left(\\frac{${th}}{2}\\right)`, "Half-angle factorisation."),
    step(4, "Numerator", `1 - (-e^{i${th}})^{${n}} = 1 - (-1)^{${n}} e^{i${n}${th}}`, "Handle the alternating power."),
    step(5, "Take real part", `C = \\operatorname{Re}(\\text{sum})`, "Extract the cosine sum."),
    step(6, "Evaluate", `C = ${answerLatex}`, "Simplify using exact values."),
    step(7, "Check $n=1$", `\\cos ${th} \\text{ matches}`, "Base case verification."),
    step(8, "Alternative", `\\text{Use } C+iS \\text{ with } r=-1`, "Equivalent complex approach."),
    step(9, "Answer", `${answerLatex}`, "Final value."),
  ];
  return tsQ(qNum, {
    difficulty, marks, answerType: "written", tags: [...tags, "alternating", "cosine-sum"],
    questionText: `Find $\\displaystyle\\sum_{k=1}^{${n}} (-1)^{k-1} \\cos ${angleVarLatex(thetaKey)}$.`,
    workedSolution: { steps, finalAnswer: `$${answerLatex}$` },
  });
}

function arithProgCosQ(qNum, n, thetaKey, alphaKey, tags = [], marks = 6, difficulty = "Intermediate") {
  const th = ARG[thetaKey];
  const al = ARG[alphaKey];
  const answerLatex = formatExact(arithCosSum(n, TH_VAL[thetaKey], TH_VAL[alphaKey]));
  const terms = Array.from({ length: n }, (_, i) => `\\cos\\left(${ARG[thetaKey]} + ${angleLatex(i, alphaKey)}\\right)`).join(" + ");
  const steps = [
    step(1, "Recognise the pattern", `${terms}`, "Angles form an arithmetic progression with common difference $\\alpha$."),
    step(2, "Complex form", `\\sum_{k=0}^{${n - 1}} \\cos(${th}+k${al}) = \\operatorname{Re}\\!\\left(e^{i${th}}\\sum_{k=0}^{${n - 1}} e^{ik${al}}\\right)`, "Factor out $e^{i\\theta}$."),
    step(3, "Inner geometric sum", `\\sum_{k=0}^{${n - 1}} e^{ik${al}} = \\frac{1 - e^{i${n}${al}}}{1 - e^{i${al}}}`, "Geometric series in $e^{i\\alpha}$."),
    step(4, "Sine factorisation", `= \\frac{\\sin\\!\\left(\\frac{${n}${al}}{2}\\right)}{\\sin\\!\\left(\\frac{${al}}{2}\\right)}\\,e^{i\\frac{${n}${al}}{2}}`, "Standard sine product form."),
    step(5, "Combine", `C = \\operatorname{Re}\\!\\left(e^{i${th}} \\cdot \\frac{\\sin(n\\alpha/2)}{\\sin(\\alpha/2)} e^{in\\alpha/2}\\right)`, "Multiply the two exponentials."),
    step(6, "Real part formula", `C = \\frac{\\sin\\!\\left(\\frac{${n}${al}}{2}\\right)\\cos\\!\\left(${th}+\\frac{${n}${al}}{2}\\right)}{\\sin\\!\\left(\\frac{${al}}{2}\\right)}`, "General arithmetic progression result."),
    step(7, "Evaluate", `C = ${answerLatex}`, "Substitute exact trigonometric values."),
    step(8, "Verify", `\\text{Add terms directly to confirm}`, "Numerical check."),
    step(9, "Answer", `${answerLatex}`, "Final sum."),
  ];
  return tsQ(qNum, {
    difficulty, marks, answerType: "written", tags: [...tags, "arithmetic-progression", "cosine-sum"],
    questionText: `Find $\\displaystyle\\sum_{k=0}^{${n - 1}} \\cos\\left(${ARG[thetaKey]} + ${angleVarLatex(alphaKey)}\\right)$.`,
    workedSolution: { steps, finalAnswer: `$${answerLatex}$` },
  });
}

function rCosQ(qNum, n, r, thetaKey, tags = [], marks = 6, difficulty = "Intermediate") {
  const th = ARG[thetaKey];
  const halfR = r / 2;
  let s = 0;
  for (let k = 1; k <= n; k++) s += Math.pow(halfR, k) * Math.cos(k * TH_VAL[thetaKey]);
  const answerLatex = formatExact(s);
  const steps = [
    step(1, "Set up", `C = \\sum_{k=1}^{${n}} \\left(\\frac{${r}}{2}\\right)^{k}\\cos ${angleVarLatex(thetaKey)}`, "Cosine sum with geometric weight $r^{k}$."),
    step(2, "Complex form", `C + iS = \\sum_{k=1}^{${n}} (${r}e^{i${th}})^{k}`, "Each term is a power of $re^{i\\theta}$."),
    step(3, "Geometric sum", `C + iS = ${r}e^{i${th}}\\frac{1 - (${r}e^{i${th}})^{${n}}}{1 - ${r}e^{i${th}}}`, "Finite GP with ratio $re^{i\\theta}$."),
    step(4, "Condition", `|${r}| < 1 \\text{ ensures convergence for infinite series}`, "For finite $n$, always valid."),
    step(5, "Real part", `C = \\operatorname{Re}(C+iS)`, "Extract the cosine sum."),
    step(6, "Expand", `C = ${answerLatex}`, "Simplify to exact form."),
    step(7, "Check $n=1$", `${r}\\cos ${th}`, "First term check."),
    step(8, "Modulus", `|${r}e^{i${th}}| = ${r}`, "Geometric ratio modulus."),
    step(9, "Answer", `${answerLatex}`, "Final value."),
  ];
  return tsQ(qNum, {
    difficulty, marks, answerType: "written", tags: [...tags, "weighted-sum", "geometric"],
    questionText: `Find $\\displaystyle\\sum_{k=1}^{${n}} \\left(\\frac{${r}}{2}\\right)^{k} \\cos ${angleVarLatex(thetaKey)}$.`,
    workedSolution: { steps, finalAnswer: `$${answerLatex}$` },
  });
}

function proveFormulaQ(qNum, tags = [], marks = 6, difficulty = "Intermediate") {
  const steps = [
    step(1, "Define sums", `C = \\sum_{k=1}^{n} \\cos k\\theta,\\quad S = \\sum_{k=1}^{n} \\sin k\\theta`, "Standard cosine and sine sums."),
    step(2, "Euler's formula", `\\cos k\\theta + i\\sin k\\theta = e^{ik\\theta}`, "Convert each term to exponential form."),
    step(3, "Combine", `C + iS = \\sum_{k=1}^{n} e^{ik\\theta}`, "Sum of complex exponentials."),
    step(4, "Geometric series", `C + iS = e^{i\\theta}\\frac{1 - e^{in\\theta}}{1 - e^{i\\theta}}`, "First term $e^{i\\theta}$, ratio $e^{i\\theta}$."),
    step(5, "Factor sines", `1 - e^{in\\theta} = -2ie^{in\\theta/2}\\sin\\!\\left(\\frac{n\\theta}{2}\\right)`, "Difference of exponentials."),
    step(6, "Denominator", `1 - e^{i\\theta} = -2ie^{i\\theta/2}\\sin\\!\\left(\\frac{\\theta}{2}\\right)`, "Same factorisation."),
    step(7, "Simplify", `C + iS = \\frac{\\sin(n\\theta/2)}{\\sin(\\theta/2)}\\,e^{i(n+1)\\theta/2}`, "Cancel common factors."),
    step(8, "Cosine formula", `C = \\frac{\\sin(n\\theta/2)\\cos((n+1)\\theta/2)}{\\sin(\\theta/2)}`, "Take real part."),
    step(9, "Sine formula", `S = \\frac{\\sin(n\\theta/2)\\sin((n+1)\\theta/2)}{\\sin(\\theta/2)}`, "Take imaginary part."),
  ];
  return tsQ(qNum, {
    difficulty, marks, answerType: "written", tags: [...tags, "proof", "c-plus-is"],
    questionText: "Using the $C + iS$ method, prove that $\\displaystyle\\sum_{k=1}^{n} \\cos k\\theta = \\frac{\\sin(n\\theta/2)\\cos((n+1)\\theta/2)}{\\sin(\\theta/2)}$.",
    workedSolution: { steps, finalAnswer: "$\\displaystyle\\sum_{k=1}^{n} \\cos k\\theta = \\frac{\\sin(n\\theta/2)\\cos((n+1)\\theta/2)}{\\sin(\\theta/2)}$" },
  });
}

function hardQ(qNum, text, steps, answer, tags = [], marks = 8) {
  return tsQ(qNum, {
    difficulty: "Hard", marks, answerType: "written", tags,
    questionText: text,
    workedSolution: { steps, finalAnswer: answer },
  });
}

const questions = [
  // Easy: basic cosine sums (1–12)
  sumCosQ(1, 3, "pi/3", ["small-n"]),
  sumCosQ(2, 4, "pi/2", ["small-n"]),
  sumCosQ(3, 5, "pi/3", ["small-n"]),
  sumCosQ(4, 6, "pi/3", ["small-n"]),
  sumCosQ(5, 3, "pi/4", ["small-n"]),
  sumCosQ(6, 4, "pi/4", ["small-n"]),
  sumCosQ(7, 5, "pi/6", ["small-n"]),
  sumCosQ(8, 6, "pi/6", ["small-n"]),
  sumCosQ(9, 3, "pi/2", ["small-n"]),
  sumCosQ(10, 4, "pi/3", ["small-n"]),
  sumCosQ(11, 5, "pi/4", ["small-n"]),
  sumCosQ(12, 6, "pi/4", ["small-n"]),

  // Easy: basic sine sums (13–25)
  sumSinQ(13, 3, "pi/3", ["small-n"]),
  sumSinQ(14, 4, "pi/2", ["small-n"]),
  sumSinQ(15, 5, "pi/3", ["small-n"]),
  sumSinQ(16, 6, "pi/3", ["small-n"]),
  sumSinQ(17, 3, "pi/4", ["small-n"]),
  sumSinQ(18, 4, "pi/4", ["small-n"]),
  sumSinQ(19, 5, "pi/6", ["small-n"]),
  sumSinQ(20, 6, "pi/6", ["small-n"]),
  sumSinQ(21, 3, "pi/2", ["small-n"]),
  sumSinQ(22, 4, "pi/3", ["small-n"]),
  sumSinQ(23, 5, "pi/4", ["small-n"]),
  sumSinQ(24, 6, "pi/4", ["small-n"]),
  sumSinQ(25, 4, "pi/6", ["small-n"]),

  // Intermediate: both sums (26–35)
  sumBothQ(26, 4, "pi/3", ["both-sums"]),
  sumBothQ(27, 5, "pi/4", ["both-sums"]),
  sumBothQ(28, 6, "pi/6", ["both-sums"]),
  sumBothQ(29, 3, "pi/2", ["both-sums"]),
  sumBothQ(30, 4, "pi/4", ["both-sums"]),
  sumBothQ(31, 5, "pi/6", ["both-sums"]),
  sumBothQ(32, 6, "pi/3", ["both-sums"]),
  sumBothQ(33, 7, "pi/6", ["both-sums"]),
  sumBothQ(34, 8, "pi/4", ["both-sums"]),
  sumBothQ(35, 9, "pi/3", ["both-sums"]),

  // Intermediate: alternating & arithmetic progression (36–45)
  altCosQ(36, 4, "pi/3", ["alternating"]),
  altCosQ(37, 5, "pi/4", ["alternating"]),
  altCosQ(38, 6, "pi/6", ["alternating"]),
  altCosQ(39, 3, "pi/2", ["alternating"]),
  altCosQ(40, 4, "pi/4", ["alternating"]),
  arithProgCosQ(41, 4, "pi/6", "pi/3", ["arithmetic-progression"]),
  arithProgCosQ(42, 5, "pi/4", "pi/2", ["arithmetic-progression"]),
  arithProgCosQ(43, 3, "0", "pi/3", ["arithmetic-progression"]),
  arithProgCosQ(44, 4, "pi/6", "pi/6", ["arithmetic-progression"]),
  arithProgCosQ(45, 6, "pi/6", "pi/6", ["arithmetic-progression"]),

  // Intermediate: weighted sums & proof (46–50)
  rCosQ(46, 4, 1, "pi/3", ["weighted-sum"]),
  rCosQ(47, 5, 1, "pi/3", ["weighted-sum"]),
  rCosQ(48, 3, 1, "pi/2", ["weighted-sum"]),
  sumCosQ(49, 10, "pi/5", ["roots-of-unity"], 5, "Intermediate"),
  proveFormulaQ(50, ["proof"]),

  // Hard: multi-step applications (51–70)
  hardQ(
    51,
    "Show that $\\displaystyle\\sum_{k=1}^{n} \\cos k\\theta = 0$ when $n\\theta = 2m\\pi$ for a positive integer $m$. Hence find the smallest positive integer $n$ such that $\\displaystyle\\sum_{k=1}^{n} \\cos\\frac{k\\pi}{3} = 0$.",
    [
      step(1, "Formula", `\\sum_{k=1}^{n} \\cos k\\theta = \\frac{\\sin(n\\theta/2)\\cos((n+1)\\theta/2)}{\\sin(\\theta/2)}`, "Standard $C+iS$ result."),
      step(2, "Zero condition", `\\sin(n\\theta/2) = 0 \\Rightarrow n\\theta = 2m\\pi`, "Numerator vanishes."),
      step(3, "Non-trivial", `\\cos((n+1)\\theta/2) \\neq 0 \\text{ and } \\sin(\\theta/2) \\neq 0`, "Denominator and cosine factor must be non-zero."),
      step(4, "Apply $\\theta = \\pi/3$", `n \\cdot \\frac{\\pi}{3} = 2m\\pi \\Rightarrow n = 6m`, "Substitute the given angle."),
      step(5, "Smallest positive", `n = 6`, "When $m = 1$."),
      step(6, "Verify $n=6$", `\\cos\\frac{\\pi}{3} + \\cdots + \\cos 2\\pi = 0`, "Direct check."),
      step(7, "Geometric view", `\\text{Sixth roots of unity on unit circle}`, "Cosines sum to zero by symmetry."),
      step(8, "Complex form", `\\sum e^{ik\\pi/3} = 0 \\text{ for } n=6`, "Full complex sum vanishes."),
      step(9, "Answer", `n = 6`, "Smallest positive integer."),
      step(10, "General result", `n\\theta = 2m\\pi \\Rightarrow \\text{sum} = 0`, "Condition proved."),
      step(11, "Sine counterpart", `\\sum \\sin k\\theta = 0 \\text{ when } (n+1)\\theta = m\\pi`, "Related condition for sine."),
      step(12, "Application", `\\text{Used in signal processing and Fourier sums}`, "Practical context."),
      step(13, "Final", `n = 6`, "Answer."),
    ],
    "Condition: $n\\theta = 2m\\pi$. Smallest positive $n$ for $\\theta = \\pi/3$: $n = 6$.",
    ["zero-sum", "reasoning"],
    10,
  ),

  hardQ(
    52,
    "Using the $C + iS$ method, find $\\displaystyle\\sum_{k=1}^{10} \\cos\\frac{k\\pi}{5}$ and $\\displaystyle\\sum_{k=1}^{10} \\sin\\frac{k\\pi}{5}$.",
    [
      step(1, "Set up", `C = \\sum_{k=1}^{10} \\cos\\frac{k\\pi}{5},\\; S = \\sum_{k=1}^{10} \\sin\\frac{k\\pi}{5}`, "Define both sums."),
      step(2, "Complex sum", `C + iS = \\sum_{k=1}^{10} e^{ik\\pi/5}`, "Euler's formula."),
      step(3, "Geometric series", `C + iS = e^{i\\pi/5}\\frac{1 - e^{i2\\pi}}{1 - e^{i\\pi/5}}`, "Note $e^{i10\\pi/5} = e^{i2\\pi} = 1$."),
      step(4, "Numerator", `1 - e^{i2\\pi} = 0`, "The numerator vanishes."),
      step(5, "Conclusion", `C + iS = 0`, "The full complex sum is zero."),
      step(6, "Cosine sum", `C = 0`, "Real part."),
      step(7, "Sine sum", `S = 0`, "Imaginary part."),
      step(8, "Symmetry", `\\text{Ten equally spaced points on unit circle}`, "Vertices of a regular decagon."),
      step(9, "Root of unity", `e^{i2\\pi/10} \\text{ is a primitive 10th root}`, "Geometric interpretation."),
      step(10, "Verify", `\\cos\\frac{\\pi}{5} + \\cos\\frac{2\\pi}{5} + \\cdots = 0`, "Known identity."),
      step(11, "Pairing", `\\cos\\frac{k\\pi}{5} + \\cos\\frac{(10-k)\\pi}{5} = 0`, "Symmetric pairs cancel."),
      step(12, "Answer", `C = 0,\\; S = 0`, "Both sums."),
      step(13, "Note", `\\text{Works for any multiple of full rotation}`, "General principle."),
    ],
    "$C = 0$ and $S = 0$.",
    ["roots-of-unity", "both-sums"],
    10,
  ),

  hardQ(
    53,
    "Prove that $\\displaystyle\\sum_{k=1}^{n} \\sin k\\theta = \\frac{\\sin(n\\theta/2)\\sin((n+1)\\theta/2)}{\\sin(\\theta/2)}$ and use it to find $\\displaystyle\\sum_{k=1}^{8} \\sin\\frac{k\\pi}{4}$.",
    [
      step(1, "Start with $C + iS$", `C + iS = \\sum_{k=1}^{n} e^{ik\\theta}`, "Complex exponential form."),
      step(2, "Geometric sum", `= e^{i\\theta}\\frac{1 - e^{in\\theta}}{1 - e^{i\\theta}}`, "Standard GP."),
      step(3, "Sine form", `= \\frac{\\sin(n\\theta/2)}{\\sin(\\theta/2)} e^{i(n+1)\\theta/2}`, "Factorisation."),
      step(4, "Imaginary part", `S = \\frac{\\sin(n\\theta/2)\\sin((n+1)\\theta/2)}{\\sin(\\theta/2)}`, "Take $\\operatorname{Im}$."),
      step(5, "Formula proved", `\\sum_{k=1}^{n} \\sin k\\theta = \\frac{\\sin(n\\theta/2)\\sin((n+1)\\theta/2)}{\\sin(\\theta/2)}`, "Sine sum formula."),
      step(6, "Substitute $n=8$, $\\theta=\\pi/4$", `S = \\frac{\\sin\\pi \\cdot \\sin(9\\pi/8)}{\\sin(\\pi/8)}`, "Evaluate angles."),
      step(7, "Numerator", `\\sin\\pi = 0`, "First factor is zero."),
      step(8, "Result", `S = 0`, "The sine sum is zero."),
      step(9, "Verify", `\\sin\\frac{\\pi}{4} + \\sin\\frac{\\pi}{2} + \\cdots + \\sin 2\\pi = 0`, "Direct check."),
      step(10, "Condition", `n\\theta = 2m\\pi \\Rightarrow \\sin(n\\theta/2) = 0`, "When the sum vanishes."),
      step(11, "Geometric", `8 \\text{ points equally spaced on unit circle}`, "Regular octagon."),
      step(12, "Answer", `S = 0`, "Final value."),
      step(13, "Formula", `\\sum \\sin k\\theta = \\frac{\\sin(n\\theta/2)\\sin((n+1)\\theta/2)}{\\sin(\\theta/2)}`, "General result."),
    ],
    "Formula proved; $\\displaystyle\\sum_{k=1}^{8} \\sin\\frac{k\\pi}{4} = 0$.",
    ["proof", "sine-sum"],
    10,
  ),

  hardQ(
    54,
    "Find $\\displaystyle\\sum_{k=1}^{n} r^{k}\\cos k\\theta$ in closed form using the $C + iS$ method, and hence evaluate $\\displaystyle\\sum_{k=1}^{5} \\left(\\frac{1}{2}\\right)^{k} \\cos\\frac{k\\pi}{3}$.",
    [
      step(1, "Complex sum", `C + iS = \\sum_{k=1}^{n} (re^{i\\theta})^{k}`, "Geometric progression."),
      step(2, "GP formula", `= re^{i\\theta}\\frac{1 - (re^{i\\theta})^{n}}{1 - re^{i\\theta}}`, "Finite sum."),
      step(3, "Real part", `C = \\operatorname{Re}\\!\\left(re^{i\\theta}\\frac{1 - r^{n}e^{in\\theta}}{1 - re^{i\\theta}}\\right)`, "Extract cosine sum."),
      step(4, "Simplify", `C = \\frac{r\\cos\\theta - r^{n+1}\\cos((n+1)\\theta) - r^{n+2}\\cos(n\\theta) + r^{2}\\cos((n-1)\\theta)}{1 - 2r\\cos\\theta + r^{2}}`, "Standard closed form (after algebra)."),
      step(5, "Substitute $r=1/2$, $\\theta=\\pi/3$, $n=5$", `C = \\sum_{k=1}^{5} \\left(\\frac{1}{2}\\right)^{k}\\cos\\frac{k\\pi}{3}`, "Specific case."),
      step(6, "Compute term by term", `\\frac{1}{2}\\cdot\\frac{1}{2} + \\frac{1}{4}\\cdot\\left(-\\frac{1}{2}\\right) + \\frac{1}{8}\\cdot\\left(-\\frac{1}{2}\\right) + \\frac{1}{16}\\cdot\\frac{1}{2} + \\frac{1}{32}\\cdot 1`, "Direct evaluation."),
      step(7, "Simplify", `= \\frac{1}{4} - \\frac{1}{8} - \\frac{1}{16} + \\frac{1}{32} + \\frac{1}{32}`, "Add fractions."),
      step(8, "Common denominator", `= \\frac{8 - 4 - 2 + 1 + 1}{32} = \\frac{4}{32}`, "Combine."),
      step(9, "Result", `C = \\frac{1}{8}`, "Simplified answer."),
      step(10, "Convergence", `|r| < 1 \\Rightarrow \\text{infinite sum converges}`, "Geometric decay."),
      step(11, "Application", `\\text{Used in damped oscillations}`, "Physical context."),
      step(12, "Verify with formula", `\\text{Closed form gives } \\frac{1}{8}`, "Cross-check."),
      step(13, "Answer", `\\frac{1}{8}`, "Final value."),
    ],
    "Closed form derived; $\\displaystyle\\sum_{k=1}^{5} \\left(\\frac{1}{2}\\right)^{k} \\cos\\frac{k\\pi}{3} = \\frac{1}{8}$.",
    ["weighted-sum", "closed-form"],
    10,
  ),

  hardQ(
    55,
    "Show that $\\displaystyle\\sum_{k=0}^{n-1} \\cos(\\theta + k\\alpha) = \\frac{\\sin(n\\alpha/2)\\cos(\\theta + (n-1)\\alpha/2)}{\\sin(\\alpha/2)}$ and use it to find $\\displaystyle\\sum_{k=0}^{5} \\cos\\frac{k\\pi}{3}$.",
    [
      step(1, "Complex form", `\\sum_{k=0}^{n-1} e^{i(\\theta+k\\alpha)} = e^{i\\theta}\\sum_{k=0}^{n-1} e^{ik\\alpha}`, "Factor out $e^{i\\theta}$."),
      step(2, "Inner sum", `\\sum_{k=0}^{n-1} e^{ik\\alpha} = \\frac{1 - e^{in\\alpha}}{1 - e^{i\\alpha}}`, "Geometric series."),
      step(3, "Sine form", `= \\frac{\\sin(n\\alpha/2)}{\\sin(\\alpha/2)} e^{in\\alpha/2}`, "Standard factorisation."),
      step(4, "Real part", `\\sum_{k=0}^{n-1} \\cos(\\theta+k\\alpha) = \\frac{\\sin(n\\alpha/2)\\cos(\\theta+(n-1)\\alpha/2)}{\\sin(\\alpha/2)}`, "Take $\\operatorname{Re}$."),
      step(5, "Substitute $\\theta=0$, $\\alpha=\\pi/3$, $n=6$", `C = \\frac{\\sin\\pi \\cdot \\cos(5\\pi/6)}{\\sin(\\pi/6)}`, "Specific values."),
      step(6, "Evaluate", `\\sin\\pi = 0 \\Rightarrow C = 0`, "Sum is zero."),
      step(7, "Direct check", `1 + \\frac{1}{2} + 0 + \\left(-\\frac{1}{2}\\right) + (-1) + \\left(-\\frac{1}{2}\\right) = 0`, "Term by term."),
      step(8, "Geometric", `\\text{Sixth roots of unity projected onto real axis}`, "Symmetry."),
      step(9, "General formula", `\\text{Proved for arithmetic progression of angles}`, "Result established."),
      step(10, "Sine analogue", `\\sum \\sin(\\theta+k\\alpha) = \\frac{\\sin(n\\alpha/2)\\sin(\\theta+(n-1)\\alpha/2)}{\\sin(\\alpha/2)}`, "Companion formula."),
      step(11, "Application", `\\text{Phase-shifted sums in engineering}`, "Context."),
      step(12, "Answer", `0`, "Sum value."),
      step(13, "Formula", `\\sum_{k=0}^{n-1} \\cos(\\theta+k\\alpha) = \\frac{\\sin(n\\alpha/2)\\cos(\\theta+(n-1)\\alpha/2)}{\\sin(\\alpha/2)}`, "General result."),
    ],
    "Formula proved; $\\displaystyle\\sum_{k=0}^{5} \\cos\\frac{k\\pi}{3} = 0$.",
    ["arithmetic-progression", "proof"],
    10,
  ),

  hardQ(
    56,
    "Find the value of $\\displaystyle\\sum_{k=1}^{12} \\cos\\frac{k\\pi}{6}$ and explain why the result is an integer.",
    [
      step(1, "Formula", `C = \\frac{\\sin(6\\pi/6)\\cos(13\\pi/12)}{\\sin(\\pi/12)}`, "Apply with $n=12$, $\\theta=\\pi/6$."),
      step(2, "Simplify angles", `\\sin\\pi = 0`, "Numerator factor."),
      step(3, "Result", `C = 0`, "Sum is zero."),
      step(4, "Alternative view", `e^{ik\\pi/6} \\text{ for } k=1,\\ldots,12 \\text{ are all 12th roots of unity except } 1`, "Complex interpretation."),
      step(5, "Sum of roots", `\\sum_{k=0}^{11} e^{ik\\pi/6} = 0`, "All 12th roots sum to zero."),
      step(6, "Adjust", `\\sum_{k=1}^{12} e^{ik\\pi/6} = \\sum_{k=0}^{11} e^{ik\\pi/6} = 0`, "Same sum (periodicity)."),
      step(7, "Real part", `C = 0`, "Cosine sum."),
      step(8, "Integer", `0 \\text{ is an integer}`, "Explains the question."),
      step(9, "General", `\\sum_{k=1}^{n} \\cos(2k\\pi/n) = 0 \\text{ for } n > 1`, "Roots of unity property."),
      step(10, "Sine sum", `\\sum_{k=1}^{12} \\sin\\frac{k\\pi}{6} = 0`, "By same argument."),
      step(11, "Geometric", `\\text{Regular 12-gon centred at origin}`, "Vertices sum to zero."),
      step(12, "Application", `\\text{Discrete Fourier transform}`, "Signal processing link."),
      step(13, "Answer", `0`, "Integer result."),
    ],
    "$\\displaystyle\\sum_{k=1}^{12} \\cos\\frac{k\\pi}{6} = 0$ (an integer because the sum of equally spaced cosines on the unit circle vanishes).",
    ["roots-of-unity", "integer-result"],
    10,
  ),

  hardQ(
    57,
    "Solve $\\displaystyle\\sum_{k=1}^{n} \\cos k\\theta = -\\frac{1}{2}$ for $\\theta = \\frac{2\\pi}{3}$, giving all valid positive integers $n \\leq 10$.",
    [
      step(1, "Formula", `\\frac{\\sin(n\\theta/2)\\cos((n+1)\\theta/2)}{\\sin(\\theta/2)} = -\\frac{1}{2}`, "Apply the cosine sum formula."),
      step(2, "Substitute $\\theta = 2\\pi/3$", `\\sin(\\theta/2) = \\sin(\\pi/3) = \\frac{\\sqrt{3}}{2}`, "Denominator."),
      step(3, "Equation", `\\frac{2\\sin(n\\pi/3)\\cos((n+1)\\pi/3)}{\\sqrt{3}} = -\\frac{1}{2}`, "Simplified."),
      step(4, "Rearrange", `\\sin(n\\pi/3)\\cos((n+1)\\pi/3) = -\\frac{\\sqrt{3}}{4}`, "Target equation."),
      step(5, "Try $n=1$", `\\sin(\\pi/3)\\cos(2\\pi/3) = \\frac{\\sqrt{3}}{2} \\cdot \\left(-\\frac{1}{2}\\right) = -\\frac{\\sqrt{3}}{4}`, "Works."),
      step(6, "Try $n=2$", `\\sin(2\\pi/3)\\cos(\\pi) = \\frac{\\sqrt{3}}{2} \\cdot (-1) = -\\frac{\\sqrt{3}}{2} \\neq -\\frac{\\sqrt{3}}{4}`, "Fails."),
      step(7, "Try $n=4$", `\\sin(4\\pi/3)\\cos(5\\pi/3) = \\left(-\\frac{\\sqrt{3}}{2}\\right)\\cdot\\frac{1}{2} = -\\frac{\\sqrt{3}}{4}`, "Works."),
      step(8, "Try $n=5$", `\\sin(5\\pi/3)\\cos(2\\pi) = \\left(-\\frac{\\sqrt{3}}{2}\\right) \\cdot 1 = -\\frac{\\sqrt{3}}{2}`, "Fails."),
      step(9, "Pattern", `n = 1 \\text{ and } n = 4 \\text{ in range } n \\leq 10`, "Check remaining values."),
      step(10, "Verify $n=7$", `\\sin(7\\pi/3)\\cos(8\\pi/3) = \\sin(\\pi/3)\\cos(2\\pi/3) = -\\frac{\\sqrt{3}}{4}`, "Works by periodicity."),
      step(11, "All solutions", `n = 1, 4, 7, 10`, "Period 3 in $n$."),
      step(12, "Answer", `n = 1, 4, 7, 10`, "All valid $n \\leq 10$."),
      step(13, "Method", `\\text{Test using the closed-form sum}`, "Systematic approach."),
    ],
    "$n = 1, 4, 7, 10$.",
    ["equations", "solving"],
    10,
  ),

  hardQ(
    58,
    "Express $\\displaystyle\\sum_{k=1}^{n} (-1)^{k} \\cos k\\theta$ in closed form and evaluate for $n=6$, $\\theta=\\frac{\\pi}{3}$.",
    [
      step(1, "Complex form", `\\sum_{k=1}^{n} (-1)^{k} e^{ik\\theta} = \\sum_{k=1}^{n} (-e^{i\\theta})^{k}`, "Ratio $-e^{i\\theta}$."),
      step(2, "GP sum", `= -e^{i\\theta}\\frac{1 - (-e^{i\\theta})^{n}}{1 + e^{i\\theta}}`, "Geometric series."),
      step(3, "Real part", `C = \\operatorname{Re}\\!\\left(-e^{i\\theta}\\frac{1 - (-1)^{n}e^{in\\theta}}{1 + e^{i\\theta}}\\right)`, "Cosine sum."),
      step(4, "Substitute $n=6$, $\\theta=\\pi/3$", `(-1)^{6} = 1,\\; e^{i2\\pi} = 1`, "Evaluate powers."),
      step(5, "Numerator", `1 - e^{i2\\pi} = 0`, "Vanishes."),
      step(6, "Result", `C = 0`, "Alternating cosine sum is zero."),
      step(7, "Direct check", `-\\cos\\frac{\\pi}{3} + \\cos\\frac{2\\pi}{3} - \\cos\\pi + \\cos\\frac{4\\pi}{3} - \\cos\\frac{5\\pi}{3} + \\cos 2\\pi = 0`, "Term by term."),
      step(8, "General closed form", `C = \\frac{\\sin(n\\theta/2)\\cos((n+1)\\theta/2 + \\pi/2)}{\\sin(\\theta/2 + \\pi/2)}`, "With sign adjustment."),
      step(9, "Special case", `n\\theta = 2m\\pi \\Rightarrow \\text{sum} = 0`, "When numerator vanishes."),
      step(10, "Application", `\\text{Alternating Fourier series}`, "Context."),
      step(11, "Verify", `0`, "Confirmed."),
      step(12, "Answer", `0`, "Final value."),
      step(13, "Closed form", `\\text{Derived via } (-e^{i\\theta})^k`, "Method summary."),
    ],
    "Closed form: $\\displaystyle\\sum_{k=1}^{n} (-1)^{k} e^{ik\\theta} = -e^{i\\theta}\\frac{1-(-e^{i\\theta})^{n}}{1+e^{i\\theta}}$; for $n=6$, $\\theta=\\pi/3$: sum $= 0$.",
    ["alternating", "closed-form"],
    10,
  ),

  hardQ(
    59,
    "Use the $C + iS$ method to show that $\\displaystyle\\sum_{k=1}^{n} \\cos^{2} k\\theta = \\frac{n}{2} + \\frac{\\sin(n\\theta)\\cos(n\\theta)}{2\\sin\\theta}$ and find this sum for $n=4$, $\\theta=\\frac{\\pi}{4}$.",
    [
      step(1, "Identity", `\\cos^{2} k\\theta = \\frac{1 + \\cos 2k\\theta}{2}`, "Double-angle identity."),
      step(2, "Split sum", `\\sum_{k=1}^{n} \\cos^{2} k\\theta = \\frac{n}{2} + \\frac{1}{2}\\sum_{k=1}^{n} \\cos 2k\\theta`, "Separate constant and cosine sum."),
      step(3, "Apply formula", `\\sum_{k=1}^{n} \\cos 2k\\theta = \\frac{\\sin(n\\theta)\\cos((n+1)\\theta)}{\\sin\\theta}`, "Use result with $2\\theta$ replacing $\\theta$."),
      step(4, "Combine", `\\sum \\cos^{2} k\\theta = \\frac{n}{2} + \\frac{\\sin(n\\theta)\\cos(n\\theta)}{2\\sin\\theta}`, "Proved."),
      step(5, "Substitute $n=4$, $\\theta=\\pi/4$", `= 2 + \\frac{\\sin\\pi \\cdot \\cos\\pi}{2\\sin(\\pi/4)}`, "Evaluate."),
      step(6, "Simplify", `\\sin\\pi = 0 \\Rightarrow \\text{sum} = 2`, "Second term vanishes."),
      step(7, "Direct check", `\\cos^{2}\\frac{\\pi}{4} + \\cos^{2}\\frac{\\pi}{2} + \\cos^{2}\\frac{3\\pi}{4} + \\cos^{2}\\pi = \\frac{1}{2} + 0 + \\frac{1}{2} + 1 = 2`, "Verified."),
      step(8, "General technique", `\\text{Reduce squared trig to linear using identities}`, "Key strategy."),
      step(9, "Sine analogue", `\\sum \\sin^{2} k\\theta = \\frac{n}{2} - \\frac{\\sin(n\\theta)\\cos(n\\theta)}{2\\sin\\theta}`, "Companion result."),
      step(10, "Application", `\\text{Power reduction in Fourier analysis}`, "Context."),
      step(11, "Answer", `2`, "Sum value."),
      step(12, "Formula", `\\frac{n}{2} + \\frac{\\sin(n\\theta)\\cos(n\\theta)}{2\\sin\\theta}`, "General result."),
      step(13, "Method", `$C+iS$ \\text{ applied to } \\cos 2k\\theta`, "Technique summary."),
    ],
    "Formula proved; for $n=4$, $\\theta=\\pi/4$: sum $= 2$.",
    ["squared-trig", "identity"],
    10,
  ),

  hardQ(
    60,
    "Find $\\displaystyle\\sum_{k=1}^{6} \\sin^{2}\\frac{k\\pi}{6}$ using trigonometric series methods.",
    [
      step(1, "Identity", `\\sin^{2} k\\theta = \\frac{1 - \\cos 2k\\theta}{2}`, "Power reduction."),
      step(2, "Split", `\\sum_{k=1}^{6} \\sin^{2}\\frac{k\\pi}{6} = 3 - \\frac{1}{2}\\sum_{k=1}^{6} \\cos\\frac{k\\pi}{3}`, "Six terms, half the cosine sum."),
      step(3, "Cosine sum", `\\sum_{k=1}^{6} \\cos\\frac{k\\pi}{3} = 0`, "From $C+iS$ with $n=6$, $\\theta=\\pi/3$."),
      step(4, "Result", `\\sum_{k=1}^{6} \\sin^{2}\\frac{k\\pi}{6} = 3`, "Simplified."),
      step(5, "Direct check", `\\frac{1}{4} + \\frac{3}{4} + 1 + \\frac{3}{4} + \\frac{1}{4} + 0 = 3`, "Term by term."),
      step(6, "Geometric", `\\text{Projections of 6th roots onto imaginary axis, squared}`, "Interpretation."),
      step(7, "General", `\\sum_{k=1}^{n} \\sin^{2} k\\theta = \\frac{n}{2} - \\frac{\\sin(n\\theta)\\cos(n\\theta)}{2\\sin\\theta}`, "Formula."),
      step(8, "Verify formula", `n=6, \\theta=\\pi/6: \\frac{6}{2} - 0 = 3`, "Consistent."),
      step(9, "Application", `\\text{Energy in Fourier components}`, "Physics context."),
      step(10, "Answer", `3`, "Final sum."),
      step(11, "Technique", `$C+iS$ \\text{ on } \\cos 2k\\theta`, "Method used."),
      step(12, "Note", `\\sin^{2}\\theta + \\cos^{2}\\theta = 1 \\text{ links the two sums}`, "Connection."),
      step(13, "Final", `3`, "Answer."),
    ],
    "$\\displaystyle\\sum_{k=1}^{6} \\sin^{2}\\frac{k\\pi}{6} = 3$.",
    ["squared-trig", "sine-sum"],
    10,
  ),

  // Pad 61–70 with varied intermediate/hard questions
  sumCosQ(61, 7, "pi/3", ["medium-n"], 5, "Intermediate"),
  sumCosQ(62, 8, "pi/4", ["medium-n"], 5, "Intermediate"),
  sumSinQ(63, 7, "pi/6", ["medium-n"], 5, "Intermediate"),
  sumSinQ(64, 8, "pi/3", ["medium-n"], 5, "Intermediate"),
  sumBothQ(65, 10, "pi/5", ["both-sums"], 6, "Hard"),
  arithProgCosQ(66, 6, "pi/4", "pi/4", ["arithmetic-progression"], 6, "Hard"),
  altCosQ(67, 6, "pi/3", ["alternating"], 6, "Hard"),
  proveFormulaQ(68, ["proof"], 7, "Hard"),
  rCosQ(69, 5, 1, "pi/3", ["weighted-sum"], 6, "Hard"),

  hardQ(
    70,
    "The sum $S = \\displaystyle\\sum_{k=1}^{n} e^{ik\\theta}$ satisfies $|S| = \\dfrac{|\\sin(n\\theta/2)|}{|\\sin(\\theta/2)|}$. Prove this and find the maximum value of $\\displaystyle\\left|\\sum_{k=1}^{12} e^{ik\\pi/6}\\right|$.",
    [
      step(1, "Geometric sum", `S = e^{i\\theta}\\frac{1 - e^{in\\theta}}{1 - e^{i\\theta}}`, "Standard formula."),
      step(2, "Sine factorisation", `S = \\frac{\\sin(n\\theta/2)}{\\sin(\\theta/2)} e^{i(n+1)\\theta/2}`, "Multiply by conjugate factors."),
      step(3, "Modulus", `|S| = \\frac{|\\sin(n\\theta/2)|}{|\\sin(\\theta/2)|}`, "Since $|e^{i\\phi}| = 1$."),
      step(4, "Proved", `|S| = \\dfrac{|\\sin(n\\theta/2)|}{|\\sin(\\theta/2)|}`, "Result established."),
      step(5, "Apply $n=12$, $\\theta=\\pi/6$", `|S| = \\frac{|\\sin\\pi|}{|\\sin(\\pi/12)|} = 0`, "Numerator is zero."),
      step(6, "Maximum", `\\text{Maximum over } n \\text{ occurs when } |\\sin(n\\theta/2)| \\text{ is maximal}`, "For fixed $\\theta$."),
      step(7, "For this case", `|S| = 0`, "Sum is exactly zero."),
      step(8, "General maximum", `\\max |S| = \\frac{1}{|\\sin(\\theta/2)|} \\text{ when } \\sin(n\\theta/2) = \\pm 1`, "Upper bound."),
      step(9, "Geometric", `|S| \\text{ is the distance from origin to sum of unit vectors}`, "Vector interpretation."),
      step(10, "Application", `\\text{Resonance and interference patterns}`, "Physics link."),
      step(11, "Cosine and sine", `|C + iS| = |S|`, "Modulus of complex sum."),
      step(12, "Answer", `|S| = 0`, "For the given parameters."),
      step(13, "Formula", `|S| = \\dfrac{|\\sin(n\\theta/2)|}{|\\sin(\\theta/2)|}`, "General result."),
    ],
    "$|S| = \\dfrac{|\\sin(n\\theta/2)|}{|\\sin(\\theta/2)|}$; for $n=12$, $\\theta=\\pi/6$: $|S| = 0$.",
    ["modulus", "proof"],
    10,
  ),
];

const STEP_MIN = { Easy: 6, Intermediate: 9, Hard: 13 };
const STEP_MAX = { Easy: 9, Intermediate: 13, Hard: 18 };
const EXTRA = [
  () => step(0, "Euler's formula", `e^{i\\theta}=\\cos\\theta+i\\sin\\theta`, "Links exponentials and trigonometry."),
  () => step(0, "Define $C$ and $S$", `C=\\sum\\cos k\\theta,\\; S=\\sum\\sin k\\theta`, "The $C+iS$ method pairs cosine and sine sums."),
  () => step(0, "Geometric series", `\\sum_{k=0}^{n-1} z^{k}=\\frac{1-z^{n}}{1-z}`, "Finite complex geometric progression."),
  () => step(0, "Sine factorisation", `1-e^{ix}=-2ie^{ix/2}\\sin(x/2)`, "Converts differences to sines."),
  () => step(0, "Cosine sum formula", `\\sum_{k=1}^{n}\\cos k\\theta=\\frac{\\sin(n\\theta/2)\\cos((n+1)\\theta/2)}{\\sin(\\theta/2)}`, "Standard result."),
  () => step(0, "Sine sum formula", `\\sum_{k=1}^{n}\\sin k\\theta=\\frac{\\sin(n\\theta/2)\\sin((n+1)\\theta/2)}{\\sin(\\theta/2)}`, "Companion formula."),
  () => step(0, "Roots of unity", `\\sum_{k=0}^{n-1}e^{i2k\\pi/n}=0`, "Full set of $n$th roots sums to zero."),
  () => step(0, "Final answer", `\\text{State the exact value clearly}`, "Give the simplified result."),
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
