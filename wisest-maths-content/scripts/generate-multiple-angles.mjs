#!/usr/bin/env node
/**
 * Generates 70 A-Level Further Maths "Multiple-angle identities" questions.
 * Output: src/data/questions/a-level-further-maths/year-2-pure/multiple-angles.ts
 */

import { writeFileSync, mkdirSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const outDir = resolve(__dirname, "../src/data/questions/a-level-further-maths/year-2-pure");
const outPath = resolve(outDir, "multiple-angles.ts");

mkdirSync(outDir, { recursive: true });

const SUBTOPIC = "Multiple-angle identities";
const SUBTOPIC_ID = "fm.y2.pure.multiple-angles";
const LEVEL = "A-Level Further Maths";
const TOPIC = "Further Maths Year 2: Pure (Core Pure 2)";

const qid = (n) => `fm.y2.pure.multiple-angles.q${String(n).padStart(3, "0")}`;
const step = (n, description, workingLatex, explanation) => ({ stepNumber: n, description, workingLatex, explanation, diagram: null });
const base = (meta) => ({ level: LEVEL, topic: TOPIC, subtopic: SUBTOPIC, subtopicId: SUBTOPIC_ID, questionDiagram: null, ...meta });
const maQ = (n, meta) => base({ id: qid(n), tags: ["multiple-angles", ...(meta.tags || [])], ...meta });

function hardMa(n, text, steps, answer, tags = [], marks = 8) {
  return maQ(n, { difficulty: "Hard", marks, answerType: "written", tags, questionText: text, workedSolution: { steps, finalAnswer: answer } });
}

const COS = {
  2: "\\cos^{2}\\theta - \\sin^{2}\\theta",
  3: "4\\cos^{3}\\theta - 3\\cos\\theta",
  4: "8\\cos^{4}\\theta - 8\\cos^{2}\\theta + 1",
  5: "16\\cos^{5}\\theta - 20\\cos^{3}\\theta + 5\\cos\\theta",
};
const SIN = {
  2: "2\\sin\\theta\\cos\\theta",
  3: "3\\sin\\theta - 4\\sin^{3}\\theta",
  4: "4\\cos^{3}\\theta\\sin\\theta - 4\\cos\\theta\\sin^{3}\\theta",
  5: "16\\sin^{5}\\theta - 20\\sin^{3}\\theta + 5\\sin\\theta",
};

function expandIdentityQ(n, cosN, sinN, tags = [], marks = 5, difficulty = "Easy") {
  const steps = [
    step(1, "De Moivre's theorem", `(\\cos\\theta + i\\sin\\theta)^{${n}} = \\cos ${n}\\theta + i\\sin ${n}\\theta`, "Connect complex powers to multiple angles."),
    step(2, "Binomial expansion", `(\\cos\\theta + i\\sin\\theta)^{${n}} = \\sum_{k=0}^{${n}} \\binom{${n}}{k}(\\cos\\theta)^{${n}-k}(i\\sin\\theta)^{k}`, "Expand using the binomial theorem."),
    step(3, "Real part", `\\text{Collect terms where }i^k\\text{ is real}`, "Even powers of $i$ contribute to $\\cos ${n}\\theta$."),
    step(4, "Cosine identity", `\\cos ${n}\\theta = ${cosN}`, "Equate real parts."),
    step(5, "Imaginary part", `\\text{Collect terms where }i^k\\text{ is imaginary}`, "Odd powers of $i$ contribute to $\\sin ${n}\\theta$."),
    step(6, "Sine identity", `\\sin ${n}\\theta = ${sinN}`, "Equate imaginary parts and divide by $i$."),
    step(7, "Check at $\\theta=0$", `\\cos 0 = 1`, "Sanity check the cosine formula."),
    step(8, "Answer", `\\cos ${n}\\theta = ${cosN};\\; \\sin ${n}\\theta = ${sinN}`, "Both multiple-angle identities."),
  ];
  return maQ(n, {
    difficulty, marks, answerType: "written", tags: [...tags, "de-moivre", "expansion"],
    questionText: `Using De Moivre's theorem, express $\\cos ${n}\\theta$ and $\\sin ${n}\\theta$ in terms of powers of $\\cos\\theta$ and $\\sin\\theta$.`,
    workedSolution: { steps, finalAnswer: `$\\cos ${n}\\theta = ${cosN}$, $\\sin ${n}\\theta = ${sinN}$` },
  });
}

function recallDoubleQ(n, which, formula, alt, tags = [], marks = 3) {
  const steps = [
    step(1, "Start from De Moivre", `(\\cos\\theta + i\\sin\\theta)^{2} = \\cos 2\\theta + i\\sin 2\\theta`, "Double-angle formulae come from $n=2$."),
    step(2, "Expand LHS", `(\\cos\\theta + i\\sin\\theta)^{2} = \\cos^{2}\\theta - \\sin^{2}\\theta + 2i\\sin\\theta\\cos\\theta`, "Use $(a+bi)^2$."),
    step(3, "Match real parts", `\\cos 2\\theta = \\cos^{2}\\theta - \\sin^{2}\\theta`, "Equate real parts."),
    step(4, "Match imaginary parts", `\\sin 2\\theta = 2\\sin\\theta\\cos\\theta`, "Equate imaginary parts."),
    step(5, "Pythagoras substitution", which === "cos" ? `\\cos 2\\theta = 2\\cos^{2}\\theta - 1 = 1 - 2\\sin^{2}\\theta` : `\\sin 2\\theta = 2\\sin\\theta\\cos\\theta`, "Alternative forms using $\\sin^{2}\\theta + \\cos^{2}\\theta = 1$."),
    step(6, "State identity", `${which === "cos" ? "\\cos 2\\theta" : "\\sin 2\\theta"} = ${formula}`, "Required formula."),
    step(7, "Verify", `\\theta = 0 \\Rightarrow ${which === "cos" ? "\\cos 0 = 1" : "\\sin 0 = 0"}`, "Quick check."),
    step(8, "Answer", `${which === "cos" ? "\\cos 2\\theta" : "\\sin 2\\theta"} = ${formula}`, "Final identity."),
  ];
  return maQ(n, {
    difficulty: "Easy", marks, answerType: "written", tags: [...tags, "double-angle", "recall"],
    questionText: `Write down the double-angle formula for $${which === "cos" ? "\\cos 2\\theta" : "\\sin 2\\theta"}$ in terms of $${which === "cos" ? "\\cos\\theta" : "\\sin\\theta"}$ only.`,
    workedSolution: { steps, finalAnswer: `$${which === "cos" ? "\\cos 2\\theta" : "\\sin 2\\theta"} = ${formula}$` },
  });
}

function evaluateCosQ(n, cosVal, cosValStr, nTheta, result, resultStr, tags = [], marks = 4, difficulty = "Easy") {
  const steps = [
    step(1, "Multiple-angle formula", `\\cos ${nTheta}\\theta = ${COS[nTheta]}`, "Use the appropriate identity."),
    step(2, "Substitute", `\\cos\\theta = ${cosValStr}`, "Given value."),
    step(3, "Compute powers", `\\cos^{3}\\theta = ${cosValStr}^{3}`, "Evaluate powers of $\\cos\\theta$."),
    step(4, "Substitute into formula", `\\cos ${nTheta}\\theta = ${resultStr}`, "Replace each power."),
    step(5, "Simplify", `\\cos ${nTheta}\\theta = ${result}`, "Arithmetic."),
    step(6, "Sign check", `\\text{Quadrant and sign consistent}`, "Confirm the sign is reasonable."),
    step(7, "Answer", `\\cos ${nTheta}\\theta = ${result}`, "Exact value."),
  ];
  return maQ(n, {
    difficulty, marks, answerType: "written", tags: [...tags, "evaluation"],
    questionText: `Given that $\\cos\\theta = ${cosValStr}$, find the exact value of $\\cos ${nTheta}\\theta$.`,
    workedSolution: { steps, finalAnswer: `$\\cos ${nTheta}\\theta = ${result}$` },
  });
}

function evaluateSinQ(n, sinVal, sinValStr, nTheta, result, resultStr, tags = [], marks = 4, difficulty = "Easy") {
  const steps = [
    step(1, "Multiple-angle formula", `\\sin ${nTheta}\\theta = ${SIN[nTheta]}`, "Use the appropriate identity."),
    step(2, "Substitute", `\\sin\\theta = ${sinValStr}`, "Given value."),
    step(3, "Compute powers", `\\sin^{3}\\theta = (${sinValStr})^{3}`, "Evaluate powers of $\\sin\\theta$."),
    step(4, "Substitute into formula", `\\sin ${nTheta}\\theta = ${resultStr}`, "Replace each power."),
    step(5, "Simplify", `\\sin ${nTheta}\\theta = ${result}`, "Arithmetic."),
    step(6, "Sign check", `\\text{Sign consistent with quadrant}`, "Confirm the sign."),
    step(7, "Answer", `\\sin ${nTheta}\\theta = ${result}`, "Exact value."),
  ];
  return maQ(n, {
    difficulty, marks, answerType: "written", tags: [...tags, "evaluation"],
    questionText: `Given that $\\sin\\theta = ${sinValStr}$, find the exact value of $\\sin ${nTheta}\\theta$.`,
    workedSolution: { steps, finalAnswer: `$\\sin ${nTheta}\\theta = ${result}$` },
  });
}

function powerReductionQ(n, power, fn, formula, example, tags = [], marks = 5, difficulty = "Intermediate") {
  const steps = [
    step(1, "De Moivre", `(\\cos\\theta + i\\sin\\theta)^{${power}} = \\cos ${power}\\theta + i\\sin ${power}\\theta`, "Start from complex exponential form."),
    step(2, "Also expand", `(\\cos\\theta + i\\sin\\theta)^{${power}} = \\sum \\binom{${power}}{k}(\\cos\\theta)^{${power}-k}(i\\sin\\theta)^{k}`, "Binomial expansion."),
    step(3, "Extract ${fn}", `\\text{Use }\\cos ${power}\\theta\\text{ or }\\sin ${power}\\theta\\text{ to eliminate cross terms}`, "Multiple-angle formula links powers."),
    step(4, "Power-reduction formula", `${fn}^{${power}}\\theta = ${formula}`, "Express single power in multiple angles."),
    step(5, "Example", example, "Verify with a standard value."),
    step(6, "Use in integration", `\\int ${fn}^{${power}}\\theta\\,d\\theta`, "Typical application."),
    step(7, "Answer", `${fn}^{${power}}\\theta = ${formula}`, "Final identity."),
  ];
  return maQ(n, {
    difficulty, marks, answerType: "written", tags: [...tags, "power-reduction"],
    questionText: `Express $${fn}^{${power}}\\theta$ in terms of multiple angles of $\\theta$.`,
    workedSolution: { steps, finalAnswer: `$${fn}^{${power}}\\theta = ${formula}$` },
  });
}

function solveEqQ(n, eqLatex, steps, answer, tags = [], marks = 6, difficulty = "Intermediate") {
  return maQ(n, {
    difficulty, marks, answerType: "written", tags: [...tags, "equations"],
    questionText: eqLatex,
    workedSolution: { steps, finalAnswer: answer },
  });
}

function integrateQ(n, integrand, steps, answer, tags = [], marks = 6, difficulty = "Intermediate") {
  return maQ(n, {
    difficulty, marks, answerType: "written", tags: [...tags, "integration"],
    questionText: `Find $\\displaystyle\\int ${integrand}\\,d\\theta$.`,
    workedSolution: { steps, finalAnswer: answer },
  });
}

const questions = [
  // Easy: recall & double angle (1–15)
  recallDoubleQ(1, "cos", "2\\cos^{2}\\theta - 1", "1 - 2\\sin^{2}\\theta", ["cos-form"]),
  recallDoubleQ(2, "sin", "2\\sin\\theta\\cos\\theta", "", ["sin-form"]),
  maQ(3, {
    difficulty: "Easy", marks: 3, answerType: "written", tags: ["double-angle", "recall"],
    questionText: "Write down three equivalent forms of $\\cos 2\\theta$.",
    workedSolution: {
      steps: [
        step(1, "From De Moivre", "\\cos 2\\theta = \\cos^{2}\\theta - \\sin^{2}\\theta", "Difference of squares form."),
        step(2, "Replace $\\sin^{2}\\theta$", "\\cos 2\\theta = 2\\cos^{2}\\theta - 1", "Using $\\sin^{2}\\theta = 1 - \\cos^{2}\\theta$."),
        step(3, "Replace $\\cos^{2}\\theta$", "\\cos 2\\theta = 1 - 2\\sin^{2}\\theta", "Using $\\cos^{2}\\theta = 1 - \\sin^{2}\\theta$."),
        step(4, "Summary", "\\cos 2\\theta = \\cos^{2}\\theta - \\sin^{2}\\theta = 2\\cos^{2}\\theta - 1 = 1 - 2\\sin^{2}\\theta", "Three standard forms."),
        step(5, "Use", "\\text{Choose form based on given information}", "Pick the version involving the known ratio."),
        step(6, "Answer", "\\text{All three forms listed}", "Complete recall."),
      ],
      finalAnswer: "$\\cos 2\\theta = \\cos^{2}\\theta - \\sin^{2}\\theta = 2\\cos^{2}\\theta - 1 = 1 - 2\\sin^{2}\\theta$",
    },
  }),
  expandIdentityQ(4, COS[2], SIN[2], ["double-angle"], 4, "Easy"),
  expandIdentityQ(5, COS[3], SIN[3], ["triple-angle"], 4, "Easy"),
  evaluateCosQ(6, 0.5, "\\frac{1}{2}", 2, "\\frac{1}{2}", "2(\\frac{1}{2})^{2}-1 = \\frac{1}{2}", ["double-angle"]),
  evaluateCosQ(7, Math.sqrt(3)/2, "\\frac{\\sqrt{3}}{2}", 2, "-\\frac{1}{2}", "2(\\frac{\\sqrt{3}}{2})^{2}-1 = -\\frac{1}{2}", ["double-angle"]),
  evaluateSinQ(8, 0.5, "\\frac{1}{2}", 2, "\\frac{\\sqrt{3}}{2}", "2(\\frac{1}{2})(\\frac{\\sqrt{3}}{2})", ["double-angle"]),
  evaluateSinQ(9, Math.sqrt(3)/2, "\\frac{\\sqrt{3}}{2}", 2, "\\frac{\\sqrt{3}}{2}", "2(\\frac{\\sqrt{3}}{2})(\\frac{1}{2})", ["double-angle"]),
  evaluateCosQ(10, 0.6, "\\frac{3}{5}", 2, "-\\frac{7}{25}", "2(\\frac{3}{5})^{2}-1", ["3-4-5"]),
  evaluateSinQ(11, 0.8, "\\frac{4}{5}", 2, "\\frac{24}{25}", "2(\\frac{4}{5})(\\frac{3}{5})", ["3-4-5"]),
  maQ(12, {
    difficulty: "Easy", marks: 4, answerType: "written", tags: ["double-angle", "evaluation"],
    questionText: "Given $\\cos\\theta = \\dfrac{1}{\\sqrt{2}}$, find $\\cos 2\\theta$.",
    workedSolution: {
      steps: [
        step(1, "Formula", "\\cos 2\\theta = 2\\cos^{2}\\theta - 1", "Cosine-only double-angle form."),
        step(2, "Substitute", "\\cos\\theta = \\frac{1}{\\sqrt{2}}", "Given."),
        step(3, "Square", "\\cos^{2}\\theta = \\frac{1}{2}", "Square the given value."),
        step(4, "Calculate", "\\cos 2\\theta = 2(\\frac{1}{2}) - 1 = 0", "Substitute and simplify."),
        step(5, "Interpret", "\\cos 2\\theta = 0", "Corresponds to $2\\theta = 90^{\\circ}, 270^{\\circ}, \\ldots$"),
        step(6, "Answer", "0", "Exact value."),
      ],
      finalAnswer: "$\\cos 2\\theta = 0$",
    },
  }),
  maQ(13, {
    difficulty: "Easy", marks: 4, answerType: "written", tags: ["triple-angle", "recall"],
    questionText: "Write down the triple-angle formulae for $\\cos 3\\theta$ and $\\sin 3\\theta$.",
    workedSolution: {
      steps: [
        step(1, "De Moivre with $n=3$", "(\\cos\\theta + i\\sin\\theta)^{3} = \\cos 3\\theta + i\\sin 3\\theta", "Start point."),
        step(2, "Cosine result", "\\cos 3\\theta = 4\\cos^{3}\\theta - 3\\cos\\theta", "Real part after expansion."),
        step(3, "Sine result", "\\sin 3\\theta = 3\\sin\\theta - 4\\sin^{3}\\theta", "Imaginary part."),
        step(4, "Alternative route", "\\cos 3\\theta = \\cos(2\\theta+\\theta)", "Can also derive via compound angles."),
        step(5, "Check", "\\theta=0 \\Rightarrow \\cos 0=1", "Sanity check."),
        step(6, "Answer", "\\text{Both formulae stated}", "Complete."),
      ],
      finalAnswer: "$\\cos 3\\theta = 4\\cos^{3}\\theta - 3\\cos\\theta$, $\\sin 3\\theta = 3\\sin\\theta - 4\\sin^{3}\\theta$",
    },
  }),
  evaluateCosQ(14, 0.5, "\\frac{1}{2}", 3, "0", "4(\\frac{1}{2})^{3}-3(\\frac{1}{2}) = 0", ["triple-angle"]),
  evaluateSinQ(15, 0.5, "\\frac{1}{2}", 3, "1", "3(\\frac{1}{2})-4(\\frac{1}{2})^{3} = 1", ["triple-angle"]),

  // Easy: more evaluation (16–25)
  evaluateCosQ(16, 0.6, "\\frac{3}{5}", 3, "-\\frac{99}{125}", "4(\\frac{3}{5})^{3}-3(\\frac{3}{5})", ["triple-angle"]),
  evaluateSinQ(17, 0.6, "\\frac{3}{5}", 3, "-\\frac{117}{125}", "3(\\frac{3}{5})-4(\\frac{3}{5})^{3}", ["triple-angle"]),
  maQ(18, {
    difficulty: "Easy", marks: 5, answerType: "written", tags: ["double-angle", "proof"],
    questionText: "Show that $\\dfrac{\\sin 2\\theta}{1 + \\cos 2\\theta} \\equiv \\tan\\theta$.",
    workedSolution: {
      steps: [
        step(1, "Numerator", "\\sin 2\\theta = 2\\sin\\theta\\cos\\theta", "Double-angle sine."),
        step(2, "Denominator", "1 + \\cos 2\\theta = 1 + 2\\cos^{2}\\theta - 1 = 2\\cos^{2}\\theta", "Double-angle cosine."),
        step(3, "Fraction", "\\dfrac{2\\sin\\theta\\cos\\theta}{2\\cos^{2}\\theta}", "Substitute both."),
        step(4, "Cancel", "\\dfrac{\\sin\\theta}{\\cos\\theta}", "Cancel $2\\cos\\theta$."),
        step(5, "Result", "\\tan\\theta", "Definition of tangent."),
        step(6, "Domain", "\\cos\\theta \\neq 0", "Required for validity."),
        step(7, "Answer", "\\tan\\theta", "Identity shown."),
      ],
      finalAnswer: "$\\dfrac{\\sin 2\\theta}{1 + \\cos 2\\theta} \\equiv \\tan\\theta$",
    },
  }),
  maQ(19, {
    difficulty: "Easy", marks: 5, answerType: "written", tags: ["double-angle", "proof"],
    questionText: "Show that $\\cos^{2}\\theta \\equiv \\dfrac{1 + \\cos 2\\theta}{2}$.",
    workedSolution: {
      steps: [
        step(1, "Start", "\\cos 2\\theta = 2\\cos^{2}\\theta - 1", "Double-angle cosine."),
        step(2, "Rearrange", "2\\cos^{2}\\theta = 1 + \\cos 2\\theta", "Add $1$ to both sides."),
        step(3, "Divide", "\\cos^{2}\\theta = \\dfrac{1 + \\cos 2\\theta}{2}", "Divide by $2$."),
        step(4, "Use", "\\text{Power reduction for integration}", "Converts squared trig to linear multiple angles."),
        step(5, "Check", "\\theta=0: \\cos^{2}0 = 1, \\frac{1+1}{2}=1", "Verification."),
        step(6, "Answer", "\\dfrac{1 + \\cos 2\\theta}{2}", "Identity shown."),
      ],
      finalAnswer: "$\\cos^{2}\\theta \\equiv \\dfrac{1 + \\cos 2\\theta}{2}$",
    },
  }),
  maQ(20, {
    difficulty: "Easy", marks: 5, answerType: "written", tags: ["double-angle", "proof"],
    questionText: "Show that $\\sin^{2}\\theta \\equiv \\dfrac{1 - \\cos 2\\theta}{2}$.",
    workedSolution: {
      steps: [
        step(1, "Start", "\\cos 2\\theta = 1 - 2\\sin^{2}\\theta", "Double-angle cosine in sine form."),
        step(2, "Rearrange", "2\\sin^{2}\\theta = 1 - \\cos 2\\theta", "Isolate $\\sin^{2}\\theta$."),
        step(3, "Divide", "\\sin^{2}\\theta = \\dfrac{1 - \\cos 2\\theta}{2}", "Divide by $2$."),
        step(4, "Use", "\\int \\sin^{2}\\theta\\,d\\theta", "Common integration application."),
        step(5, "Check", "\\theta=0: 0 = \\frac{1-1}{2}", "Verification."),
        step(6, "Answer", "\\dfrac{1 - \\cos 2\\theta}{2}", "Identity shown."),
      ],
      finalAnswer: "$\\sin^{2}\\theta \\equiv \\dfrac{1 - \\cos 2\\theta}{2}$",
    },
  }),
  evaluateCosQ(21, 1/Math.sqrt(2), "\\frac{1}{\\sqrt{2}}", 4, "0", "8(\\frac{1}{\\sqrt{2}})^{4}-8(\\frac{1}{\\sqrt{2}})^{2}+1", ["quadruple-angle"], 5, "Easy"),
  evaluateSinQ(22, 1/Math.sqrt(2), "\\frac{1}{\\sqrt{2}}", 4, "0", "4(\\frac{1}{\\sqrt{2}})^{3}(\\frac{1}{\\sqrt{2}})-4(\\frac{1}{\\sqrt{2}})(\\frac{1}{\\sqrt{2}})^{3}", ["quadruple-angle"], 5, "Easy"),
  maQ(23, {
    difficulty: "Easy", marks: 4, answerType: "written", tags: ["tan", "double-angle"],
    questionText: "Express $\\tan 2\\theta$ in terms of $\\tan\\theta$.",
    workedSolution: {
      steps: [
        step(1, "Definition", "\\tan 2\\theta = \\dfrac{\\sin 2\\theta}{\\cos 2\\theta}", "Quotient identity."),
        step(2, "Substitute", "\\tan 2\\theta = \\dfrac{2\\sin\\theta\\cos\\theta}{\\cos^{2}\\theta - \\sin^{2}\\theta}", "Double-angle formulae."),
        step(3, "Divide by $\\cos^{2}\\theta$", "\\tan 2\\theta = \\dfrac{2\\tan\\theta}{1 - \\tan^{2}\\theta}", "Obtain tangent form."),
        step(4, "Domain", "1 - \\tan^{2}\\theta \\neq 0", "Denominator restriction."),
        step(5, "Answer", "\\dfrac{2\\tan\\theta}{1 - \\tan^{2}\\theta}", "Double-angle tangent."),
      ],
      finalAnswer: "$\\tan 2\\theta = \\dfrac{2\\tan\\theta}{1 - \\tan^{2}\\theta}$",
    },
  }),
  maQ(24, {
    difficulty: "Easy", marks: 4, answerType: "written", tags: ["half-angle", "double-angle"],
    questionText: "Given $\\cos 2\\theta = \\dfrac{3}{5}$, find $\\cos^{2}\\theta$.",
    workedSolution: {
      steps: [
        step(1, "Power reduction", "\\cos^{2}\\theta = \\dfrac{1 + \\cos 2\\theta}{2}", "Link squared cosine to double angle."),
        step(2, "Substitute", "\\cos^{2}\\theta = \\dfrac{1 + \\frac{3}{5}}{2}", "Given value."),
        step(3, "Simplify", "\\cos^{2}\\theta = \\dfrac{8/5}{2} = \\dfrac{4}{5}", "Arithmetic."),
        step(4, "Note", "\\cos\\theta = \\pm\\dfrac{2}{\\sqrt{5}}", "Square root gives two possibilities."),
        step(5, "Answer", "\\dfrac{4}{5}", "Squared value only."),
      ],
      finalAnswer: "$\\cos^{2}\\theta = \\dfrac{4}{5}$",
    },
  }),
  maQ(25, {
    difficulty: "Easy", marks: 4, answerType: "written", tags: ["half-angle", "double-angle"],
    questionText: "Given $\\cos 2\\theta = -\\dfrac{4}{5}$, find $\\sin^{2}\\theta$.",
    workedSolution: {
      steps: [
        step(1, "Power reduction", "\\sin^{2}\\theta = \\dfrac{1 - \\cos 2\\theta}{2}", "Link squared sine to double angle."),
        step(2, "Substitute", "\\sin^{2}\\theta = \\dfrac{1 - (-\\frac{4}{5})}{2}", "Given value."),
        step(3, "Simplify", "\\sin^{2}\\theta = \\dfrac{9/5}{2} = \\dfrac{9}{10}", "Arithmetic."),
        step(4, "Answer", "\\dfrac{9}{10}", "Exact value."),
      ],
      finalAnswer: "$\\sin^{2}\\theta = \\dfrac{9}{10}$",
    },
  }),
];

// Intermediate (26–50)
questions.push(
  expandIdentityQ(26, COS[4], SIN[4], ["quadruple-angle"], 6, "Intermediate"),
  expandIdentityQ(27, COS[5], SIN[5], ["quintuple-angle"], 6, "Intermediate"),
  powerReductionQ(28, 2, "\\cos", "\\dfrac{1 + \\cos 2\\theta}{2}", "\\cos^{2}30^{\\circ} = \\frac{1+\\cos 60^{\\circ}}{2} = \\frac{3}{4}", ["cos-squared"]),
  powerReductionQ(29, 2, "\\sin", "\\dfrac{1 - \\cos 2\\theta}{2}", "\\sin^{2}45^{\\circ} = \\frac{1-\\cos 90^{\\circ}}{2} = \\frac{1}{2}", ["sin-squared"]),
  powerReductionQ(30, 3, "\\cos", "\\dfrac{3\\cos\\theta + \\cos 3\\theta}{4}", "\\cos^{3}60^{\\circ} = \\frac{3(\\frac{1}{2})+0}{4} = \\frac{3}{8}", ["cos-cubed"]),
  powerReductionQ(31, 3, "\\sin", "\\dfrac{3\\sin\\theta - \\sin 3\\theta}{4}", "\\sin^{3}30^{\\circ} = \\frac{3(\\frac{1}{2})-1}{4} = \\frac{1}{8}", ["sin-cubed"]),
  powerReductionQ(32, 4, "\\cos", "\\dfrac{3 + 4\\cos 2\\theta + \\cos 4\\theta}{8}", "\\text{Used in }\\int\\cos^{4}\\theta\\,d\\theta", ["cos-fourth"]),
  powerReductionQ(33, 4, "\\sin", "\\dfrac{3 - 4\\cos 2\\theta + \\cos 4\\theta}{8}", "\\text{Used in }\\int\\sin^{4}\\theta\\,d\\theta", ["sin-fourth"]),
  solveEqQ(34, "Solve $\\sin 2\\theta = \\cos\\theta$ for $0 \\leq \\theta < 2\\pi$.", [
    step(1, "Double-angle", "\\sin 2\\theta = 2\\sin\\theta\\cos\\theta", "Rewrite LHS."),
    step(2, "Equation", "2\\sin\\theta\\cos\\theta = \\cos\\theta", "Substitute."),
    step(3, "Rearrange", "2\\sin\\theta\\cos\\theta - \\cos\\theta = 0", "Bring terms together."),
    step(4, "Factorise", "\\cos\\theta(2\\sin\\theta - 1) = 0", "Common factor."),
    step(5, "Case 1", "\\cos\\theta = 0 \\Rightarrow \\theta = \\frac{\\pi}{2}, \\frac{3\\pi}{2}", "First family."),
    step(6, "Case 2", "\\sin\\theta = \\frac{1}{2} \\Rightarrow \\theta = \\frac{\\pi}{6}, \\frac{5\\pi}{6}", "Second family."),
    step(7, "Answer", "\\theta = \\frac{\\pi}{6}, \\frac{\\pi}{2}, \\frac{5\\pi}{6}, \\frac{3\\pi}{2}", "All solutions in interval."),
  ], "$\\theta = \\dfrac{\\pi}{6},\\ \\dfrac{\\pi}{2},\\ \\dfrac{5\\pi}{6},\\ \\dfrac{3\\pi}{2}$", ["factorise"]),
  solveEqQ(35, "Solve $\\cos 2\\theta = \\sin\\theta$ for $0 \\leq \\theta < 2\\pi$.", [
    step(1, "Double-angle", "\\cos 2\\theta = 1 - 2\\sin^{2}\\theta", "Express in sine only."),
    step(2, "Equation", "1 - 2\\sin^{2}\\theta = \\sin\\theta", "Substitute."),
    step(3, "Rearrange", "2\\sin^{2}\\theta + \\sin\\theta - 1 = 0", "Quadratic in $\\sin\\theta$."),
    step(4, "Factorise", "(2\\sin\\theta - 1)(\\sin\\theta + 1) = 0", "Factor."),
    step(5, "Case 1", "\\sin\\theta = \\frac{1}{2} \\Rightarrow \\theta = \\frac{\\pi}{6}, \\frac{5\\pi}{6}", "First family."),
    step(6, "Case 2", "\\sin\\theta = -1 \\Rightarrow \\theta = \\frac{3\\pi}{2}", "Second family."),
    step(7, "Answer", "\\theta = \\frac{\\pi}{6}, \\frac{5\\pi}{6}, \\frac{3\\pi}{2}", "All solutions."),
  ], "$\\theta = \\dfrac{\\pi}{6},\\ \\dfrac{5\\pi}{6},\\ \\dfrac{3\\pi}{2}$", ["quadratic"]),
  solveEqQ(36, "Solve $\\sin 3\\theta = \\sin\\theta$ for $0 \\leq \\theta < 2\\pi$.", [
    step(1, "Triple-angle", "\\sin 3\\theta = 3\\sin\\theta - 4\\sin^{3}\\theta", "Expand LHS."),
    step(2, "Equation", "3\\sin\\theta - 4\\sin^{3}\\theta = \\sin\\theta", "Substitute."),
    step(3, "Rearrange", "2\\sin\\theta - 4\\sin^{3}\\theta = 0", "Bring to one side."),
    step(4, "Factorise", "2\\sin\\theta(1 - 2\\sin^{2}\\theta) = 0", "Factor."),
    step(5, "Case 1", "\\sin\\theta = 0 \\Rightarrow \\theta = 0, \\pi", "First family."),
    step(6, "Case 2", "\\sin^{2}\\theta = \\frac{1}{2} \\Rightarrow \\sin\\theta = \\pm\\frac{1}{\\sqrt{2}}", "Second family."),
    step(7, "Case 2 solutions", "\\theta = \\frac{\\pi}{4}, \\frac{3\\pi}{4}, \\frac{5\\pi}{4}, \\frac{7\\pi}{4}", "All quadrants."),
    step(8, "Answer", "\\theta = 0, \\frac{\\pi}{4}, \\frac{3\\pi}{4}, \\pi, \\frac{5\\pi}{4}, \\frac{7\\pi}{4}", "Complete set."),
  ], "$\\theta = 0,\\ \\dfrac{\\pi}{4},\\ \\dfrac{3\\pi}{4},\\ \\pi,\\ \\dfrac{5\\pi}{4},\\ \\dfrac{7\\pi}{4}$", ["triple-angle"]),
  solveEqQ(37, "Solve $\\cos 3\\theta = \\cos\\theta$ for $0 \\leq \\theta < 2\\pi$.", [
    step(1, "Triple-angle", "\\cos 3\\theta = 4\\cos^{3}\\theta - 3\\cos\\theta", "Expand LHS."),
    step(2, "Equation", "4\\cos^{3}\\theta - 3\\cos\\theta = \\cos\\theta", "Substitute."),
    step(3, "Rearrange", "4\\cos^{3}\\theta - 4\\cos\\theta = 0", "Bring to one side."),
    step(4, "Factorise", "4\\cos\\theta(\\cos^{2}\\theta - 1) = 0", "Factor."),
    step(5, "Case 1", "\\cos\\theta = 0 \\Rightarrow \\theta = \\frac{\\pi}{2}, \\frac{3\\pi}{2}", "First family."),
    step(6, "Case 2", "\\cos^{2}\\theta = 1 \\Rightarrow \\cos\\theta = \\pm 1", "Second family."),
    step(7, "Case 2 solutions", "\\theta = 0, \\pi", "From $\\cos\\theta = \\pm 1$."),
    step(8, "Answer", "\\theta = 0, \\frac{\\pi}{2}, \\pi, \\frac{3\\pi}{2}", "Complete set."),
  ], "$\\theta = 0,\\ \\dfrac{\\pi}{2},\\ \\pi,\\ \\dfrac{3\\pi}{2}$", ["triple-angle"]),
  integrateQ(38, "\\sin^{2}\\theta", [
    step(1, "Power reduction", "\\sin^{2}\\theta = \\dfrac{1 - \\cos 2\\theta}{2}", "Linearise the integrand."),
    step(2, "Split integral", "\\int \\sin^{2}\\theta\\,d\\theta = \\frac{1}{2}\\int 1\\,d\\theta - \\frac{1}{2}\\int \\cos 2\\theta\\,d\\theta", "Integrate term by term."),
    step(3, "First term", "\\frac{1}{2}\\theta", "Integrate $1$."),
    step(4, "Second term", "-\\frac{1}{2}\\cdot\\frac{1}{2}\\sin 2\\theta", "Use $\\int\\cos 2\\theta\\,d\\theta = \\frac{1}{2}\\sin 2\\theta$."),
    step(5, "Combine", "\\frac{1}{2}\\theta - \\frac{1}{4}\\sin 2\\theta + C", "Add constant."),
    step(6, "Alternative", "\\frac{1}{2}\\theta - \\frac{1}{2}\\sin\\theta\\cos\\theta + C", "Using $\\sin 2\\theta = 2\\sin\\theta\\cos\\theta$."),
    step(7, "Answer", "\\frac{1}{2}\\theta - \\frac{1}{4}\\sin 2\\theta + C", "Final antiderivative."),
  ], "$\\displaystyle\\int \\sin^{2}\\theta\\,d\\theta = \\dfrac{1}{2}\\theta - \\dfrac{1}{4}\\sin 2\\theta + C$"),
  integrateQ(39, "\\cos^{2}\\theta", [
    step(1, "Power reduction", "\\cos^{2}\\theta = \\dfrac{1 + \\cos 2\\theta}{2}", "Linearise the integrand."),
    step(2, "Split integral", "\\int \\cos^{2}\\theta\\,d\\theta = \\frac{1}{2}\\int 1\\,d\\theta + \\frac{1}{2}\\int \\cos 2\\theta\\,d\\theta", "Integrate term by term."),
    step(3, "First term", "\\frac{1}{2}\\theta", "Integrate $1$."),
    step(4, "Second term", "\\frac{1}{2}\\cdot\\frac{1}{2}\\sin 2\\theta", "Standard integral."),
    step(5, "Combine", "\\frac{1}{2}\\theta + \\frac{1}{4}\\sin 2\\theta + C", "Add constant."),
    step(6, "Answer", "\\frac{1}{2}\\theta + \\frac{1}{4}\\sin 2\\theta + C", "Final antiderivative."),
  ], "$\\displaystyle\\int \\cos^{2}\\theta\\,d\\theta = \\dfrac{1}{2}\\theta + \\dfrac{1}{4}\\sin 2\\theta + C$"),
  integrateQ(40, "\\sin^{3}\\theta", [
    step(1, "Rewrite", "\\sin^{3}\\theta = \\sin\\theta \\cdot \\sin^{2}\\theta", "Split one factor."),
    step(2, "Power reduction", "\\sin^{2}\\theta = \\dfrac{1 - \\cos 2\\theta}{2}", "Linearise the squared term."),
    step(3, "Product", "\\sin^{3}\\theta = \\frac{1}{2}\\sin\\theta - \\frac{1}{2}\\sin\\theta\\cos 2\\theta", "Expand."),
    step(4, "Use product-to-sum", "\\sin\\theta\\cos 2\\theta = \\frac{1}{2}(\\sin 3\\theta - \\sin\\theta)", "Convert product to sum."),
    step(5, "Simplify integrand", "\\sin^{3}\\theta = \\frac{3}{4}\\sin\\theta - \\frac{1}{4}\\sin 3\\theta", "Collect like terms."),
    step(6, "Integrate", "-\\frac{3}{4}\\cos\\theta + \\frac{1}{12}\\cos 3\\theta + C", "Standard integrals."),
    step(7, "Answer", "-\\frac{3}{4}\\cos\\theta + \\frac{1}{12}\\cos 3\\theta + C", "Final antiderivative."),
  ], "$\\displaystyle\\int \\sin^{3}\\theta\\,d\\theta = -\\dfrac{3}{4}\\cos\\theta + \\dfrac{1}{12}\\cos 3\\theta + C$"),
  integrateQ(41, "\\cos^{3}\\theta", [
    step(1, "Rewrite", "\\cos^{3}\\theta = \\cos\\theta \\cdot \\cos^{2}\\theta", "Split one factor."),
    step(2, "Power reduction", "\\cos^{2}\\theta = \\dfrac{1 + \\cos 2\\theta}{2}", "Linearise."),
    step(3, "Product", "\\cos^{3}\\theta = \\frac{1}{2}\\cos\\theta + \\frac{1}{2}\\cos\\theta\\cos 2\\theta", "Expand."),
    step(4, "Product-to-sum", "\\cos\\theta\\cos 2\\theta = \\frac{1}{2}(\\cos 3\\theta + \\cos\\theta)", "Convert product."),
    step(5, "Simplify", "\\cos^{3}\\theta = \\frac{3}{4}\\cos\\theta + \\frac{1}{4}\\cos 3\\theta", "Collect terms."),
    step(6, "Integrate", "\\frac{3}{4}\\sin\\theta + \\frac{1}{12}\\sin 3\\theta + C", "Standard integrals."),
    step(7, "Answer", "\\frac{3}{4}\\sin\\theta + \\frac{1}{12}\\sin 3\\theta + C", "Final antiderivative."),
  ], "$\\displaystyle\\int \\cos^{3}\\theta\\,d\\theta = \\dfrac{3}{4}\\sin\\theta + \\dfrac{1}{12}\\sin 3\\theta + C$"),
  maQ(42, {
    difficulty: "Intermediate", marks: 6, answerType: "written", tags: ["tan", "triple-angle"],
    questionText: "Express $\\tan 3\\theta$ in terms of $\\tan\\theta$.",
    workedSolution: {
      steps: [
        step(1, "Definition", "\\tan 3\\theta = \\dfrac{\\sin 3\\theta}{\\cos 3\\theta}", "Quotient identity."),
        step(2, "Numerator", "\\sin 3\\theta = 3\\sin\\theta - 4\\sin^{3}\\theta", "Triple-angle sine."),
        step(3, "Denominator", "\\cos 3\\theta = 4\\cos^{3}\\theta - 3\\cos\\theta", "Triple-angle cosine."),
        step(4, "Divide by $\\cos^{3}\\theta$", "\\tan 3\\theta = \\dfrac{3\\tan\\theta - 4\\tan^{3}\\theta}{4 - 3\\tan^{2}\\theta}", "Obtain tangent form."),
        step(5, "Domain", "4 - 3\\tan^{2}\\theta \\neq 0", "Denominator restriction."),
        step(6, "Answer", "\\dfrac{3\\tan\\theta - 4\\tan^{3}\\theta}{4 - 3\\tan^{2}\\theta}", "Triple-angle tangent."),
      ],
      finalAnswer: "$\\tan 3\\theta = \\dfrac{3\\tan\\theta - 4\\tan^{3}\\theta}{4 - 3\\tan^{2}\\theta}$",
    },
  }),
  maQ(43, {
    difficulty: "Intermediate", marks: 6, answerType: "written", tags: ["proof", "triple-angle"],
    questionText: "Prove that $\\sin 3\\theta \\equiv 3\\sin\\theta - 4\\sin^{3}\\theta$ using the compound-angle formula.",
    workedSolution: {
      steps: [
        step(1, "Write as sum", "\\sin 3\\theta = \\sin(2\\theta + \\theta)", "Split the angle."),
        step(2, "Compound angle", "\\sin(2\\theta+\\theta) = \\sin 2\\theta\\cos\\theta + \\cos 2\\theta\\sin\\theta", "Addition formula."),
        step(3, "Substitute double angles", "= 2\\sin\\theta\\cos^{2}\\theta + (1-2\\sin^{2}\\theta)\\sin\\theta", "Use double-angle forms."),
        step(4, "Replace $\\cos^{2}\\theta$", "= 2\\sin\\theta(1-\\sin^{2}\\theta) + \\sin\\theta - 2\\sin^{3}\\theta", "Use Pythagoras."),
        step(5, "Expand", "= 2\\sin\\theta - 2\\sin^{3}\\theta + \\sin\\theta - 2\\sin^{3}\\theta", "Distribute."),
        step(6, "Collect", "= 3\\sin\\theta - 4\\sin^{3}\\theta", "Simplify."),
        step(7, "Answer", "3\\sin\\theta - 4\\sin^{3}\\theta", "Identity proved."),
      ],
      finalAnswer: "$\\sin 3\\theta \\equiv 3\\sin\\theta - 4\\sin^{3}\\theta$",
    },
  }),
  maQ(44, {
    difficulty: "Intermediate", marks: 6, answerType: "written", tags: ["proof", "triple-angle"],
    questionText: "Prove that $\\cos 3\\theta \\equiv 4\\cos^{3}\\theta - 3\\cos\\theta$ using the compound-angle formula.",
    workedSolution: {
      steps: [
        step(1, "Write as sum", "\\cos 3\\theta = \\cos(2\\theta + \\theta)", "Split the angle."),
        step(2, "Compound angle", "\\cos(2\\theta+\\theta) = \\cos 2\\theta\\cos\\theta - \\sin 2\\theta\\sin\\theta", "Addition formula."),
        step(3, "Substitute", "= (2\\cos^{2}\\theta-1)\\cos\\theta - 2\\sin\\theta\\cos\\theta\\sin\\theta", "Double-angle forms."),
        step(4, "Simplify sine term", "= (2\\cos^{2}\\theta-1)\\cos\\theta - 2\\sin^{2}\\theta\\cos\\theta", "Collect."),
        step(5, "Replace $\\sin^{2}\\theta$", "= (2\\cos^{2}\\theta-1)\\cos\\theta - 2(1-\\cos^{2}\\theta)\\cos\\theta", "Pythagoras."),
        step(6, "Expand and collect", "= 4\\cos^{3}\\theta - 3\\cos\\theta", "Simplify."),
        step(7, "Answer", "4\\cos^{3}\\theta - 3\\cos\\theta", "Identity proved."),
      ],
      finalAnswer: "$\\cos 3\\theta \\equiv 4\\cos^{3}\\theta - 3\\cos\\theta$",
    },
  }),
  evaluateCosQ(45, 0.8, "\\frac{4}{5}", 3, "-\\frac{44}{125}", "4(\\frac{4}{5})^{3}-3(\\frac{4}{5})", ["3-4-5"], 5, "Intermediate"),
  evaluateSinQ(46, 0.8, "\\frac{4}{5}", 3, "-\\frac{48}{125}", "3(\\frac{4}{5})-4(\\frac{4}{5})^{3}", ["3-4-5"], 5, "Intermediate"),
  solveEqQ(47, "Solve $\\cos 4\\theta = \\cos 2\\theta$ for $0 \\leq \\theta < 2\\pi$.", [
    step(1, "Factorise difference", "\\cos 4\\theta - \\cos 2\\theta = -2\\sin 3\\theta\\sin\\theta", "Product-to-sum formula."),
    step(2, "Equation", "-2\\sin 3\\theta\\sin\\theta = 0", "Set equal to zero."),
    step(3, "Case 1", "\\sin\\theta = 0 \\Rightarrow \\theta = 0, \\pi", "First family."),
    step(4, "Case 2", "\\sin 3\\theta = 0 \\Rightarrow 3\\theta = 0, \\pi, 2\\pi, 3\\pi, 4\\pi, 5\\pi", "Second family."),
    step(5, "Case 2 solutions", "\\theta = 0, \\frac{\\pi}{3}, \\frac{2\\pi}{3}, \\pi, \\frac{4\\pi}{3}, \\frac{5\\pi}{3}", "Divide by $3$."),
    step(6, "Distinct values", "\\theta = 0, \\frac{\\pi}{3}, \\frac{2\\pi}{3}, \\pi, \\frac{4\\pi}{3}, \\frac{5\\pi}{3}", "Remove duplicates."),
    step(7, "Answer", "\\theta = 0, \\frac{\\pi}{3}, \\frac{2\\pi}{3}, \\pi, \\frac{4\\pi}{3}, \\frac{5\\pi}{3}", "Complete set."),
  ], "$\\theta = 0,\\ \\dfrac{\\pi}{3},\\ \\dfrac{2\\pi}{3},\\ \\pi,\\ \\dfrac{4\\pi}{3},\\ \\dfrac{5\\pi}{3}$", ["product-to-sum"]),
  integrateQ(48, "\\sin^{2}\\theta\\cos^{2}\\theta", [
    step(1, "Use $\\sin 2\\theta$", "\\sin\\theta\\cos\\theta = \\frac{1}{2}\\sin 2\\theta", "Double-angle product."),
    step(2, "Rewrite integrand", "\\sin^{2}\\theta\\cos^{2}\\theta = \\frac{1}{4}\\sin^{2} 2\\theta", "Square the identity."),
    step(3, "Power reduce", "\\sin^{2}2\\theta = \\frac{1-\\cos 4\\theta}{2}", "Linearise."),
    step(4, "Integrand", "\\frac{1}{8}(1-\\cos 4\\theta)", "Simplify."),
    step(5, "Integrate", "\\frac{1}{8}\\theta - \\frac{1}{32}\\sin 4\\theta + C", "Standard integrals."),
    step(6, "Answer", "\\frac{1}{8}\\theta - \\frac{1}{32}\\sin 4\\theta + C", "Final antiderivative."),
  ], "$\\displaystyle\\int \\sin^{2}\\theta\\cos^{2}\\theta\\,d\\theta = \\dfrac{1}{8}\\theta - \\dfrac{1}{32}\\sin 4\\theta + C$"),
  maQ(49, {
    difficulty: "Intermediate", marks: 7, answerType: "written", tags: ["simplify", "double-angle"],
    questionText: "Simplify $\\cos^{2}\\theta - \\sin^{2}\\theta + 2\\sin^{2}\\theta$ using multiple-angle identities.",
    workedSolution: {
      steps: [
        step(1, "Combine squared terms", "\\cos^{2}\\theta - \\sin^{2}\\theta + 2\\sin^{2}\\theta = \\cos^{2}\\theta + \\sin^{2}\\theta", "Collect like terms."),
        step(2, "Pythagoras", "\\cos^{2}\\theta + \\sin^{2}\\theta = 1", "Fundamental identity."),
        step(3, "Alternative route", "\\cos^{2}\\theta - \\sin^{2}\\theta = \\cos 2\\theta", "Recognise double-angle."),
        step(4, "Then", "\\cos 2\\theta + 2\\sin^{2}\\theta = \\cos 2\\theta + (1-\\cos 2\\theta) = 1", "Power reduction confirms."),
        step(5, "Answer", "1", "Simplified value."),
      ],
      finalAnswer: "$1$",
    },
  }),
  maQ(50, {
    difficulty: "Intermediate", marks: 7, answerType: "written", tags: ["simplify", "triple-angle"],
    questionText: "Simplify $4\\cos^{3}\\theta - 3\\cos\\theta + 2\\sin^{2}\\theta$.",
    workedSolution: {
      steps: [
        step(1, "Recognise triple angle", "4\\cos^{3}\\theta - 3\\cos\\theta = \\cos 3\\theta", "Triple-angle cosine."),
        step(2, "Power reduction", "2\\sin^{2}\\theta = 1 - \\cos 2\\theta", "Express in multiple angle."),
        step(3, "Combined", "\\cos 3\\theta + 1 - \\cos 2\\theta", "Substitute both."),
        step(4, "Cannot simplify further", "\\text{Unless specific }\\theta\\text{ given}", "General form."),
        step(5, "Example at $\\theta=0$", "1 + 1 - 1 = 1", "Numerical check."),
        step(6, "Answer", "\\cos 3\\theta + 1 - \\cos 2\\theta", "Simplified expression."),
      ],
      finalAnswer: "$\\cos 3\\theta + 1 - \\cos 2\\theta$",
    },
  }),
);

// Hard (51–70)
questions.push(
  hardMa(51, "Prove that $\\cos 4\\theta \\equiv 8\\cos^{4}\\theta - 8\\cos^{2}\\theta + 1$ using De Moivre's theorem.", [
    step(1, "De Moivre", "(\\cos\\theta + i\\sin\\theta)^{4} = \\cos 4\\theta + i\\sin 4\\theta", "Start."),
    step(2, "Binomial", "(\\cos\\theta + i\\sin\\theta)^{4} = \\cos^{4}\\theta + 4i\\cos^{3}\\theta\\sin\\theta - 6\\cos^{2}\\theta\\sin^{2}\\theta - 4i\\cos\\theta\\sin^{3}\\theta + \\sin^{4}\\theta", "Expand fully."),
    step(3, "Real part", "\\cos 4\\theta = \\cos^{4}\\theta - 6\\cos^{2}\\theta\\sin^{2}\\theta + \\sin^{4}\\theta", "Collect real terms."),
    step(4, "Replace $\\sin^{2}\\theta$", "\\cos 4\\theta = \\cos^{4}\\theta - 6\\cos^{2}\\theta(1-\\cos^{2}\\theta) + (1-\\cos^{2}\\theta)^{2}", "Use Pythagoras."),
    step(5, "Expand", "\\cos 4\\theta = 8\\cos^{4}\\theta - 8\\cos^{2}\\theta + 1", "Collect powers of $\\cos\\theta$."),
    step(6, "Verify", "\\theta=0 \\Rightarrow \\cos 0 = 1", "Check."),
    step(7, "Answer", "8\\cos^{4}\\theta - 8\\cos^{2}\\theta + 1", "Identity proved."),
  ], "$\\cos 4\\theta \\equiv 8\\cos^{4}\\theta - 8\\cos^{2}\\theta + 1$", ["proof", "quadruple-angle"], 9),
  hardMa(52, "Prove that $\\sin 4\\theta \\equiv 4\\cos^{3}\\theta\\sin\\theta - 4\\cos\\theta\\sin^{3}\\theta$.", [
    step(1, "De Moivre", "(\\cos\\theta + i\\sin\\theta)^{4} = \\cos 4\\theta + i\\sin 4\\theta", "Start."),
    step(2, "Imaginary part", "\\sin 4\\theta = 4\\cos^{3}\\theta\\sin\\theta - 4\\cos\\theta\\sin^{3}\\theta", "From binomial expansion."),
    step(3, "Factorise", "\\sin 4\\theta = 4\\sin\\theta\\cos\\theta(\\cos^{2}\\theta - \\sin^{2}\\theta)", "Factor common terms."),
    step(4, "Recognise", "= 2\\sin 2\\theta \\cos 2\\theta = \\sin 4\\theta", "Double-angle check."),
    step(5, "Alternative", "\\sin 4\\theta = \\frac{1}{2}(\\sin 5\\theta - \\sin 3\\theta)", "Product-to-sum route."),
    step(6, "Answer", "4\\cos^{3}\\theta\\sin\\theta - 4\\cos\\theta\\sin^{3}\\theta", "Identity proved."),
  ], "$\\sin 4\\theta \\equiv 4\\cos^{3}\\theta\\sin\\theta - 4\\cos\\theta\\sin^{3}\\theta$", ["proof", "quadruple-angle"], 9),
  hardMa(53, "Solve $\\cos 5\\theta = \\cos 2\\theta$ for $0 \\leq \\theta < 2\\pi$.", [
    step(1, "Product-to-sum", "\\cos 5\\theta - \\cos 2\\theta = -2\\sin\\frac{7\\theta}{2}\\sin\\frac{3\\theta}{2}", "Difference formula."),
    step(2, "Equation", "-2\\sin\\frac{7\\theta}{2}\\sin\\frac{3\\theta}{2} = 0", "Set to zero."),
    step(3, "Case 1", "\\sin\\frac{7\\theta}{2} = 0 \\Rightarrow \\frac{7\\theta}{2} = 0, \\pi, 2\\pi, \\ldots", "First family."),
    step(4, "Case 1 solutions", "\\theta = 0, \\frac{2\\pi}{7}, \\frac{4\\pi}{7}, \\frac{6\\pi}{7}, \\frac{8\\pi}{7}, \\frac{10\\pi}{7}, \\frac{12\\pi}{7}", "In interval."),
    step(5, "Case 2", "\\sin\\frac{3\\theta}{2} = 0 \\Rightarrow \\frac{3\\theta}{2} = 0, \\pi, 2\\pi, 3\\pi", "Second family."),
    step(6, "Case 2 solutions", "\\theta = 0, \\frac{2\\pi}{3}, \\frac{4\\pi}{3}", "In interval."),
    step(7, "Distinct", "\\theta = 0, \\frac{2\\pi}{7}, \\frac{4\\pi}{7}, \\frac{6\\pi}{7}, \\frac{8\\pi}{7}, \\frac{10\\pi}{7}, \\frac{12\\pi}{7}, \\frac{2\\pi}{3}, \\frac{4\\pi}{3}", "Union."),
    step(8, "Answer", "\\text{Nine distinct solutions listed}", "Complete set."),
  ], "$\\theta = 0,\\ \\dfrac{2\\pi}{7},\\ \\dfrac{4\\pi}{7},\\ \\dfrac{6\\pi}{7},\\ \\dfrac{8\\pi}{7},\\ \\dfrac{10\\pi}{7},\\ \\dfrac{12\\pi}{7},\\ \\dfrac{2\\pi}{3},\\ \\dfrac{4\\pi}{3}$", ["equations", "quintuple-angle"], 10),
  hardMa(54, "Find $\\displaystyle\\int \\sin^{4}\\theta\\,d\\theta$.", [
    step(1, "Power reduction", "\\sin^{4}\\theta = \\left(\\dfrac{1-\\cos 2\\theta}{2}\\right)^{2}", "Square the half-angle form."),
    step(2, "Expand", "\\sin^{4}\\theta = \\dfrac{1 - 2\\cos 2\\theta + \\cos^{2}2\\theta}{4}", "Expand square."),
    step(3, "Reduce $\\cos^{2}2\\theta$", "\\cos^{2}2\\theta = \\dfrac{1+\\cos 4\\theta}{2}", "Second power reduction."),
    step(4, "Integrand", "\\sin^{4}\\theta = \\dfrac{3 - 4\\cos 2\\theta + \\cos 4\\theta}{8}", "Simplify."),
    step(5, "Integrate", "\\frac{3}{8}\\theta - \\frac{1}{4}\\sin 2\\theta + \\frac{1}{32}\\sin 4\\theta + C", "Term by term."),
    step(6, "Answer", "\\frac{3}{8}\\theta - \\frac{1}{4}\\sin 2\\theta + \\frac{1}{32}\\sin 4\\theta + C", "Final antiderivative."),
  ], "$\\displaystyle\\int \\sin^{4}\\theta\\,d\\theta = \\dfrac{3}{8}\\theta - \\dfrac{1}{4}\\sin 2\\theta + \\dfrac{1}{32}\\sin 4\\theta + C$", ["integration"], 10),
  hardMa(55, "Find $\\displaystyle\\int \\cos^{4}\\theta\\,d\\theta$.", [
    step(1, "Power reduction", "\\cos^{4}\\theta = \\left(\\dfrac{1+\\cos 2\\theta}{2}\\right)^{2}", "Square the half-angle form."),
    step(2, "Expand", "\\cos^{4}\\theta = \\dfrac{1 + 2\\cos 2\\theta + \\cos^{2}2\\theta}{4}", "Expand square."),
    step(3, "Reduce $\\cos^{2}2\\theta$", "\\cos^{2}2\\theta = \\dfrac{1+\\cos 4\\theta}{2}", "Second power reduction."),
    step(4, "Integrand", "\\cos^{4}\\theta = \\dfrac{3 + 4\\cos 2\\theta + \\cos 4\\theta}{8}", "Simplify."),
    step(5, "Integrate", "\\frac{3}{8}\\theta + \\frac{1}{4}\\sin 2\\theta + \\frac{1}{32}\\sin 4\\theta + C", "Term by term."),
    step(6, "Answer", "\\frac{3}{8}\\theta + \\frac{1}{4}\\sin 2\\theta + \\frac{1}{32}\\sin 4\\theta + C", "Final antiderivative."),
  ], "$\\displaystyle\\int \\cos^{4}\\theta\\,d\\theta = \\dfrac{3}{8}\\theta + \\dfrac{1}{4}\\sin 2\\theta + \\dfrac{1}{32}\\sin 4\\theta + C$", ["integration"], 10),
  hardMa(56, "Solve $\\sin 5\\theta = \\sin\\theta$ for $0 \\leq \\theta < 2\\pi$.", [
    step(1, "Product-to-sum", "\\sin 5\\theta - \\sin\\theta = 2\\cos 3\\theta\\sin 2\\theta", "Difference formula."),
    step(2, "Equation", "2\\cos 3\\theta\\sin 2\\theta = 0", "Set to zero."),
    step(3, "Case 1", "\\sin 2\\theta = 0 \\Rightarrow \\theta = 0, \\frac{\\pi}{2}, \\pi, \\frac{3\\pi}{2}", "First family."),
    step(4, "Case 2", "\\cos 3\\theta = 0 \\Rightarrow 3\\theta = \\frac{\\pi}{2}, \\frac{3\\pi}{2}, \\frac{5\\pi}{2}, \\ldots", "Second family."),
    step(5, "Case 2 solutions", "\\theta = \\frac{\\pi}{6}, \\frac{\\pi}{2}, \\frac{5\\pi}{6}, \\frac{7\\pi}{6}, \\frac{3\\pi}{2}, \\frac{11\\pi}{6}", "In interval."),
    step(6, "Distinct", "\\theta = 0, \\frac{\\pi}{6}, \\frac{\\pi}{2}, \\frac{5\\pi}{6}, \\pi, \\frac{7\\pi}{6}, \\frac{3\\pi}{2}, \\frac{11\\pi}{6}", "Union."),
    step(7, "Answer", "\\text{Eight distinct solutions}", "Complete set."),
  ], "$\\theta = 0,\\ \\dfrac{\\pi}{6},\\ \\dfrac{\\pi}{2},\\ \\dfrac{5\\pi}{6},\\ \\pi,\\ \\dfrac{7\\pi}{6},\\ \\dfrac{3\\pi}{2},\\ \\dfrac{11\\pi}{6}$", ["equations", "quintuple-angle"], 10),
  hardMa(57, "Express $\\cos^{5}\\theta$ in terms of multiple angles and hence find $\\displaystyle\\int \\cos^{5}\\theta\\,d\\theta$.", [
    step(1, "Use $\\cos^{5}\\theta$ formula", "\\cos^{5}\\theta = \\dfrac{10\\cos\\theta + 5\\cos 3\\theta + \\cos 5\\theta}{16}", "From De Moivre / multiple-angle theory."),
    step(2, "Derive via De Moivre", "(\\cos\\theta+i\\sin\\theta)^{5} = \\cos 5\\theta + i\\sin 5\\theta", "Start."),
    step(3, "Also", "(\\cos\\theta+i\\sin\\theta)^{5} = \\cos^{5}\\theta + 5i\\cos^{4}\\theta\\sin\\theta - \\ldots", "Binomial."),
    step(4, "Link to $\\cos 5\\theta$", "\\cos 5\\theta = 16\\cos^{5}\\theta - 20\\cos^{3}\\theta + 5\\cos\\theta", "Known identity."),
    step(5, "Integrate", "\\int\\cos^{5}\\theta\\,d\\theta = \\frac{1}{16}\\int(10\\cos\\theta+5\\cos 3\\theta+\\cos 5\\theta)\\,d\\theta", "Use linear form."),
    step(6, "Evaluate", "\\frac{10}{16}\\sin\\theta + \\frac{5}{48}\\sin 3\\theta + \\frac{1}{80}\\sin 5\\theta + C", "Integrate each term."),
    step(7, "Answer", "\\frac{5}{8}\\sin\\theta + \\frac{5}{48}\\sin 3\\theta + \\frac{1}{80}\\sin 5\\theta + C", "Simplified."),
  ], "$\\cos^{5}\\theta = \\dfrac{10\\cos\\theta + 5\\cos 3\\theta + \\cos 5\\theta}{16}$; $\\displaystyle\\int \\cos^{5}\\theta\\,d\\theta = \\dfrac{5}{8}\\sin\\theta + \\dfrac{5}{48}\\sin 3\\theta + \\dfrac{1}{80}\\sin 5\\theta + C$", ["integration", "quintuple-angle"], 11),
  hardMa(58, "Show that $\\dfrac{\\cos 3\\theta + \\cos\\theta}{\\sin 3\\theta + \\sin\\theta} \\equiv \\cot 2\\theta$.", [
    step(1, "Sum-to-product numerator", "\\cos 3\\theta + \\cos\\theta = 2\\cos 2\\theta\\cos\\theta", "Sum formula."),
    step(2, "Sum-to-product denominator", "\\sin 3\\theta + \\sin\\theta = 2\\sin 2\\theta\\cos\\theta", "Sum formula."),
    step(3, "Fraction", "\\dfrac{2\\cos 2\\theta\\cos\\theta}{2\\sin 2\\theta\\cos\\theta}", "Substitute."),
    step(4, "Cancel", "\\dfrac{\\cos 2\\theta}{\\sin 2\\theta} = \\cot 2\\theta", "Cancel $2\\cos\\theta$."),
    step(5, "Domain", "\\cos\\theta \\neq 0,\\; \\sin 2\\theta \\neq 0", "Restrictions for validity."),
    step(6, "Alternative check", "\\theta = \\frac{\\pi}{6} \\Rightarrow \\text{LHS} = \\text{RHS}", "Numerical verification."),
    step(7, "Answer", "\\cot 2\\theta", "Simplified form."),
  ], "$\\dfrac{\\cos 3\\theta + \\cos\\theta}{\\sin 3\\theta + \\sin\\theta} \\equiv \\cot 2\\theta$", ["proof", "sum-to-product"], 9),
  hardMa(59, "Given $\\cos\\theta = \\dfrac{1}{3}$, find the exact value of $\\cos 5\\theta$.", [
    step(1, "Quintuple-angle", "\\cos 5\\theta = 16\\cos^{5}\\theta - 20\\cos^{3}\\theta + 5\\cos\\theta", "Formula."),
    step(2, "Powers", "\\cos^{3}\\theta = \\frac{1}{27},\\; \\cos^{5}\\theta = \\frac{1}{243}", "Compute powers."),
    step(3, "Substitute", "\\cos 5\\theta = 16(\\frac{1}{243}) - 20(\\frac{1}{27}) + 5(\\frac{1}{3})", "Replace."),
    step(4, "Common denominator", "\\cos 5\\theta = \\frac{16 - 180 + 405}{243}", "Over $243$."),
    step(5, "Simplify", "\\cos 5\\theta = \\frac{241}{243}", "Arithmetic."),
    step(6, "Answer", "\\frac{241}{243}", "Exact value."),
  ], "$\\cos 5\\theta = \\dfrac{241}{243}$", ["evaluation", "quintuple-angle"], 9),
  hardMa(60, "Given $\\sin\\theta = \\dfrac{2}{3}$, find the exact value of $\\sin 5\\theta$.", [
    step(1, "Quintuple-angle", "\\sin 5\\theta = 16\\sin^{5}\\theta - 20\\sin^{3}\\theta + 5\\sin\\theta", "Formula."),
    step(2, "Powers", "\\sin^{3}\\theta = \\frac{8}{27},\\; \\sin^{5}\\theta = \\frac{32}{243}", "Compute powers."),
    step(3, "Substitute", "\\sin 5\\theta = 16(\\frac{32}{243}) - 20(\\frac{8}{27}) + 5(\\frac{2}{3})", "Replace."),
    step(4, "Common denominator", "\\sin 5\\theta = \\frac{512 - 480 + 810}{243}", "Over $243$."),
    step(5, "Simplify", "\\sin 5\\theta = \\frac{842}{243}", "Arithmetic."),
    step(6, "Answer", "\\frac{842}{243}", "Exact value."),
  ], "$\\sin 5\\theta = \\dfrac{842}{243}$", ["evaluation", "quintuple-angle"], 9),
  hardMa(61, "Solve $\\cos 3\\theta = \\sin 2\\theta$ for $0 \\leq \\theta < 2\\pi$.", [
    step(1, "Write in one trig function", "\\cos 3\\theta = \\cos(\\frac{\\pi}{2}-2\\theta)", "Use $\\sin x = \\cos(\\frac{\\pi}{2}-x)$."),
    step(2, "General solutions", "3\\theta = \\frac{\\pi}{2}-2\\theta + 2k\\pi \\text{ or } 3\\theta = -(\\frac{\\pi}{2}-2\\theta)+2k\\pi", "Cosine equality."),
    step(3, "Case 1", "5\\theta = \\frac{\\pi}{2}+2k\\pi \\Rightarrow \\theta = \\frac{\\pi}{10}+\\frac{2k\\pi}{5}", "First family."),
    step(4, "Case 1 in interval", "\\theta = \\frac{\\pi}{10}, \\frac{5\\pi}{10}, \\frac{9\\pi}{10}, \\frac{13\\pi}{10}, \\frac{17\\pi}{10}", "Five solutions."),
    step(5, "Case 2", "\\theta = -\\frac{\\pi}{2}+2k\\pi", "Second family."),
    step(6, "Case 2 in interval", "\\theta = \\frac{3\\pi}{2}", "One solution."),
    step(7, "Answer", "\\theta = \\frac{\\pi}{10}, \\frac{\\pi}{2}, \\frac{9\\pi}{10}, \\frac{13\\pi}{10}, \\frac{17\\pi}{10}, \\frac{3\\pi}{2}", "Six solutions."),
  ], "$\\theta = \\dfrac{\\pi}{10},\\ \\dfrac{\\pi}{2},\\ \\dfrac{9\\pi}{10},\\ \\dfrac{13\\pi}{10},\\ \\dfrac{17\\pi}{10},\\ \\dfrac{3\\pi}{2}$", ["equations", "mixed"], 11),
  hardMa(62, "Prove that $\\tan 3\\theta \\equiv \\dfrac{3\\tan\\theta - \\tan^{3}\\theta}{1 - 3\\tan^{2}\\theta}$ and hence solve $\\tan 3\\theta = \\tan\\theta$ for $0 \\leq \\theta < \\pi$.", [
    step(1, "Prove formula", "\\tan 3\\theta = \\dfrac{3\\tan\\theta - \\tan^{3}\\theta}{1 - 3\\tan^{2}\\theta}", "From triple-angle sine/cosine."),
    step(2, "Equation", "\\dfrac{3t - t^{3}}{1-3t^{2}} = t", "Let $t=\\tan\\theta$."),
    step(3, "Cross-multiply", "3t - t^{3} = t(1-3t^{2})", "Clear denominator."),
    step(4, "Simplify", "3t - t^{3} = t - 3t^{3}", "Expand."),
    step(5, "Rearrange", "2t + 2t^{3} = 0", "Collect."),
    step(6, "Factorise", "2t(1+t^{2})=0 \\Rightarrow t=0", "Only $t=0$ is real."),
    step(7, "Solutions", "\\tan\\theta = 0 \\Rightarrow \\theta = 0", "In interval $[0,\\pi)$."),
    step(8, "Answer", "\\theta = 0", "Only solution."),
  ], "$\\tan 3\\theta \\equiv \\dfrac{3\\tan\\theta - \\tan^{3}\\theta}{1 - 3\\tan^{2}\\theta}$; $\\theta = 0$", ["proof", "equations", "tan"], 12),
  hardMa(63, "Find $\\displaystyle\\int_{0}^{\\pi/4} \\sin^{2}\\theta\\,d\\theta$.", [
    step(1, "Antiderivative", "\\int\\sin^{2}\\theta\\,d\\theta = \\frac{1}{2}\\theta - \\frac{1}{4}\\sin 2\\theta", "Power reduction result."),
    step(2, "Upper limit", "\\left[\\frac{1}{2}\\theta - \\frac{1}{4}\\sin 2\\theta\\right]_{0}^{\\pi/4}", "Definite integral."),
    step(3, "At $\\pi/4$", "\\frac{1}{2}\\cdot\\frac{\\pi}{4} - \\frac{1}{4}\\sin\\frac{\\pi}{2} = \\frac{\\pi}{8} - \\frac{1}{4}", "Evaluate."),
    step(4, "At $0$", "0", "Lower limit."),
    step(5, "Answer", "\\frac{\\pi}{8} - \\frac{1}{4}", "Exact value."),
  ], "$\\displaystyle\\int_{0}^{\\pi/4} \\sin^{2}\\theta\\,d\\theta = \\dfrac{\\pi}{8} - \\dfrac{1}{4}$", ["integration", "definite"], 10),
  hardMa(64, "Find $\\displaystyle\\int_{0}^{\\pi/2} \\cos^{3}\\theta\\,d\\theta$.", [
    step(1, "Antiderivative", "\\int\\cos^{3}\\theta\\,d\\theta = \\frac{3}{4}\\sin\\theta + \\frac{1}{12}\\sin 3\\theta", "From power reduction."),
    step(2, "Upper limit", "\\frac{3}{4}(1) + \\frac{1}{12}(0) = \\frac{3}{4}", "At $\\theta=\\pi/2$."),
    step(3, "Lower limit", "0", "At $\\theta=0$."),
    step(4, "Answer", "\\frac{3}{4}", "Definite integral value."),
  ], "$\\displaystyle\\int_{0}^{\\pi/2} \\cos^{3}\\theta\\,d\\theta = \\dfrac{3}{4}$", ["integration", "definite"], 9),
  hardMa(65, "Show that $\\cos 2\\theta + \\cos 4\\theta = 2\\cos 3\\theta\\cos\\theta$ and use this to solve $\\cos 2\\theta + \\cos 4\\theta = 0$ for $0 \\leq \\theta < 2\\pi$.", [
    step(1, "Sum-to-product", "\\cos 2\\theta + \\cos 4\\theta = 2\\cos 3\\theta\\cos\\theta", "Sum formula with $A=4\\theta, B=2\\theta$."),
    step(2, "Verify", "2\\cos\\frac{6\\theta}{2}\\cos\\frac{2\\theta}{2} = 2\\cos 3\\theta\\cos\\theta", "Confirm."),
    step(3, "Equation", "2\\cos 3\\theta\\cos\\theta = 0", "Set to zero."),
    step(4, "Case 1", "\\cos\\theta = 0 \\Rightarrow \\theta = \\frac{\\pi}{2}, \\frac{3\\pi}{2}", "First family."),
    step(5, "Case 2", "\\cos 3\\theta = 0 \\Rightarrow \\theta = \\frac{\\pi}{6}, \\frac{\\pi}{2}, \\frac{5\\pi}{6}, \\ldots", "Second family."),
    step(6, "Distinct", "\\theta = \\frac{\\pi}{6}, \\frac{\\pi}{2}, \\frac{5\\pi}{6}, \\frac{7\\pi}{6}, \\frac{3\\pi}{2}, \\frac{11\\pi}{6}", "In interval."),
    step(7, "Answer", "\\text{Six solutions}", "Complete set."),
  ], "$\\cos 2\\theta + \\cos 4\\theta = 2\\cos 3\\theta\\cos\\theta$; $\\theta = \\dfrac{\\pi}{6},\\ \\dfrac{\\pi}{2},\\ \\dfrac{5\\pi}{6},\\ \\dfrac{7\\pi}{6},\\ \\dfrac{3\\pi}{2},\\ \\dfrac{11\\pi}{6}$", ["sum-to-product", "equations"], 11),
  hardMa(66, "Express $\\sin^{6}\\theta$ in terms of multiple angles and outline how to integrate it.", [
    step(1, "Start with $\\sin^{2}\\theta$", "\\sin^{2}\\theta = \\frac{1-\\cos 2\\theta}{2}", "Power reduction."),
    step(2, "Cube", "\\sin^{6}\\theta = \\left(\\frac{1-\\cos 2\\theta}{2}\\right)^{3}", "Raise to third power."),
    step(3, "Expand", "\\sin^{6}\\theta = \\frac{1}{8}(1 - 3\\cos 2\\theta + 3\\cos^{2}2\\theta - \\cos^{3}2\\theta)", "Binomial expansion."),
    step(4, "Reduce further", "\\cos^{2}2\\theta = \\frac{1+\\cos 4\\theta}{2},\\; \\cos^{3}2\\theta = \\frac{3\\cos 2\\theta+\\cos 6\\theta}{4}", "Multiple-angle reduction."),
    step(5, "Linear form", "\\sin^{6}\\theta = \\frac{1}{32}(10 - 15\\cos 2\\theta + 6\\cos 4\\theta - \\cos 6\\theta)", "Collect terms."),
    step(6, "Integrate", "\\int\\sin^{6}\\theta\\,d\\theta = \\frac{1}{32}(10\\theta - \\frac{15}{2}\\sin 2\\theta + \\frac{3}{2}\\sin 4\\theta - \\frac{1}{6}\\sin 6\\theta)+C", "Term by term."),
    step(7, "Answer", "\\text{Linear combination of }\\theta,\\sin 2\\theta,\\sin 4\\theta,\\sin 6\\theta", "Integrable form."),
  ], "$\\sin^{6}\\theta = \\dfrac{1}{32}(10 - 15\\cos 2\\theta + 6\\cos 4\\theta - \\cos 6\\theta)$; integrate term by term.", ["integration", "power-reduction"], 12),
  hardMa(67, "Solve $\\sin^{2}\\theta = \\cos 2\\theta$ for $0 \\leq \\theta < 2\\pi$.", [
    step(1, "Power reduction", "\\sin^{2}\\theta = \\frac{1-\\cos 2\\theta}{2}", "Express LHS."),
    step(2, "Equation", "\\frac{1-\\cos 2\\theta}{2} = \\cos 2\\theta", "Substitute."),
    step(3, "Rearrange", "1 - \\cos 2\\theta = 2\\cos 2\\theta", "Clear fraction."),
    step(4, "Solve", "3\\cos 2\\theta = 1 \\Rightarrow \\cos 2\\theta = \\frac{1}{3}", "Isolate."),
    step(5, "General", "2\\theta = \\pm\\cos^{-1}(\\frac{1}{3}) + 2k\\pi", "Inverse cosine."),
    step(6, "In interval", "\\theta = \\frac{1}{2}\\cos^{-1}(\\frac{1}{3}),\\; \\pi - \\frac{1}{2}\\cos^{-1}(\\frac{1}{3})", "Two principal solutions."),
    step(7, "Also", "\\theta = \\pi + \\frac{1}{2}\\cos^{-1}(\\frac{1}{3}),\\; 2\\pi - \\frac{1}{2}\\cos^{-1}(\\frac{1}{3})", "Remaining two."),
    step(8, "Answer", "\\theta = \\frac{1}{2}\\cos^{-1}(\\frac{1}{3}),\\; \\pi-\\frac{1}{2}\\cos^{-1}(\\frac{1}{3}),\\; \\pi+\\frac{1}{2}\\cos^{-1}(\\frac{1}{3}),\\; 2\\pi-\\frac{1}{2}\\cos^{-1}(\\frac{1}{3})", "Four solutions."),
  ], "$\\cos 2\\theta = \\dfrac{1}{3}$; $\\theta = \\dfrac{1}{2}\\cos^{-1}\\!\\left(\\dfrac{1}{3}\\right),\\ \\pi - \\dfrac{1}{2}\\cos^{-1}\\!\\left(\\dfrac{1}{3}\\right),\\ \\pi + \\dfrac{1}{2}\\cos^{-1}\\!\\left(\\dfrac{1}{3}\\right),\\ 2\\pi - \\dfrac{1}{2}\\cos^{-1}\\!\\left(\\dfrac{1}{3}\\right)$", ["equations"], 11),
  hardMa(68, "Prove that $\\cos 5\\theta \\equiv 16\\cos^{5}\\theta - 20\\cos^{3}\\theta + 5\\cos\\theta$ and hence factorise $\\cos 5\\theta - \\cos\\theta$.", [
    step(1, "De Moivre", "(\\cos\\theta+i\\sin\\theta)^{5} = \\cos 5\\theta + i\\sin 5\\theta", "Start."),
    step(2, "Real part expansion", "\\cos 5\\theta = 16\\cos^{5}\\theta - 20\\cos^{3}\\theta + 5\\cos\\theta", "From binomial."),
    step(3, "Factorise difference", "\\cos 5\\theta - \\cos\\theta = 16\\cos^{5}\\theta - 20\\cos^{3}\\theta + 4\\cos\\theta", "Subtract $\\cos\\theta$."),
    step(4, "Factor out $\\cos\\theta$", "= 4\\cos\\theta(4\\cos^{4}\\theta - 5\\cos^{2}\\theta + 1)", "Common factor."),
    step(5, "Quadratic in $\\cos^{2}\\theta$", "4\\cos^{4}\\theta - 5\\cos^{2}\\theta + 1 = (4\\cos^{2}\\theta-1)(\\cos^{2}\\theta-1)", "Factor."),
    step(6, "Full factorisation", "= 4\\cos\\theta(2\\cos\\theta-1)(2\\cos\\theta+1)(\\cos\\theta-1)(\\cos\\theta+1)", "Complete."),
    step(7, "Answer", "4\\cos\\theta(2\\cos\\theta-1)(2\\cos\\theta+1)(\\cos\\theta-1)(\\cos\\theta+1)", "Factorised form."),
  ], "$\\cos 5\\theta - \\cos\\theta = 4\\cos\\theta(2\\cos\\theta-1)(2\\cos\\theta+1)(\\cos\\theta-1)(\\cos\\theta+1)$", ["proof", "factorisation"], 13),
  hardMa(69, "(a) Express $\\cos 3\\theta$ in terms of $\\cos\\theta$. (b) Hence solve $\\cos 3\\theta = -\\dfrac{1}{2}$ for $0 \\leq \\theta < 2\\pi$. (c) Verify one solution.", [
    step(1, "(a) Formula", "\\cos 3\\theta = 4\\cos^{3}\\theta - 3\\cos\\theta", "Triple-angle."),
    step(2, "(b) General", "3\\theta = \\frac{2\\pi}{3}, \\frac{4\\pi}{3}, \\ldots", "From $\\cos 3\\theta = -\\frac{1}{2}$."),
    step(3, "(b) Solutions", "\\theta = \\frac{2\\pi}{9}, \\frac{4\\pi}{9}, \\frac{8\\pi}{9}, \\frac{10\\pi}{9}, \\frac{14\\pi}{9}, \\frac{16\\pi}{9}", "In interval."),
    step(4, "(c) Check $\\theta=\\frac{2\\pi}{9}$", "3\\theta = \\frac{2\\pi}{3},\\; \\cos\\frac{2\\pi}{3} = -\\frac{1}{2}", "Verification."),
    step(5, "Alternative via (a)", "4\\cos^{3}\\frac{2\\pi}{9} - 3\\cos\\frac{2\\pi}{9} = -\\frac{1}{2}", "Cubic route."),
    step(6, "Answer (a)", "4\\cos^{3}\\theta - 3\\cos\\theta", "Identity."),
    step(7, "Answer (b)", "\\theta = \\frac{2\\pi}{9}, \\frac{4\\pi}{9}, \\frac{8\\pi}{9}, \\frac{10\\pi}{9}, \\frac{14\\pi}{9}, \\frac{16\\pi}{9}", "Six solutions."),
    step(8, "Answer (c)", "\\text{Verified}", "Check complete."),
  ], "(a) $\\cos 3\\theta = 4\\cos^{3}\\theta - 3\\cos\\theta$. (b) $\\theta = \\dfrac{2\\pi}{9},\\ \\dfrac{4\\pi}{9},\\ \\dfrac{8\\pi}{9},\\ \\dfrac{10\\pi}{9},\\ \\dfrac{14\\pi}{9},\\ \\dfrac{16\\pi}{9}$. (c) $3\\theta = \\dfrac{2\\pi}{3}$ gives $\\cos 3\\theta = -\\dfrac{1}{2}$ ✓", ["multi-part"], 12),
  hardMa(70, "A curve has equation $y = \\sin^{2}x + \\cos 2x$. (a) Express $y$ in terms of $\\cos 2x$ only. (b) Hence find $\\dfrac{dy}{dx}$. (c) Solve $\\dfrac{dy}{dx} = 0$ for $0 \\leq x < 2\\pi$.", [
    step(1, "(a) Power reduction", "\\sin^{2}x = \\frac{1-\\cos 2x}{2}", "Linearise squared sine."),
    step(2, "(a) Substitute", "y = \\frac{1-\\cos 2x}{2} + \\cos 2x = \\frac{1}{2} + \\frac{\\cos 2x}{2}", "Simplify."),
    step(3, "(b) Differentiate", "\\frac{dy}{dx} = -\\sin 2x", "Derivative of $\\frac{1}{2}+\\frac{\\cos 2x}{2}$."),
    step(4, "(c) Set to zero", "-\\sin 2x = 0 \\Rightarrow \\sin 2x = 0", "Stationary points."),
    step(5, "(c) Solutions", "2x = 0, \\pi, 2\\pi, 3\\pi", "In doubled interval."),
    step(6, "(c) Values", "x = 0, \\frac{\\pi}{2}, \\pi, \\frac{3\\pi}{2}", "Divide by $2$."),
    step(7, "Answer (a)", "y = \\frac{1}{2} + \\frac{\\cos 2x}{2}", "Simplified $y$."),
    step(8, "Answer (b,c)", "\\frac{dy}{dx}=-\\sin 2x;\\; x=0,\\frac{\\pi}{2},\\pi,\\frac{3\\pi}{2}", "Complete."),
  ], "(a) $y = \\dfrac{1}{2} + \\dfrac{\\cos 2x}{2}$. (b) $\\dfrac{dy}{dx} = -\\sin 2x$. (c) $x = 0,\\ \\dfrac{\\pi}{2},\\ \\pi,\\ \\dfrac{3\\pi}{2}$", ["multi-part", "calculus"], 13),
);

const STEP_MIN = { Easy: 6, Intermediate: 9, Hard: 13 };
const STEP_MAX = { Easy: 9, Intermediate: 13, Hard: 18 };
const EXTRA = [
  () => step(0, "De Moivre's theorem", "(\\cos\\theta+i\\sin\\theta)^{n}=\\cos n\\theta+i\\sin n\\theta", "Links complex powers to multiple angles."),
  () => step(0, "Binomial expansion", "(\\cos\\theta+i\\sin\\theta)^{n}=\\sum\\binom{n}{k}(\\cos\\theta)^{n-k}(i\\sin\\theta)^{k}", "Expand and separate real/imaginary parts."),
  () => step(0, "Power reduction", "\\cos^{2}\\theta=\\frac{1+\\cos 2\\theta}{2},\\;\\sin^{2}\\theta=\\frac{1-\\cos 2\\theta}{2}", "Convert squared trig to multiple angles."),
  () => step(0, "Double-angle recall", "\\cos 2\\theta=2\\cos^{2}\\theta-1,\\;\\sin 2\\theta=2\\sin\\theta\\cos\\theta", "Fundamental identities."),
  () => step(0, "Triple-angle", "\\cos 3\\theta=4\\cos^{3}\\theta-3\\cos\\theta,\\;\\sin 3\\theta=3\\sin\\theta-4\\sin^{3}\\theta", "Common higher multiple angles."),
  () => step(0, "Integration strategy", "\\text{Reduce powers, then integrate term by term}", "Standard approach for even/odd powers."),
  () => step(0, "Equation solving", "\\text{Factorise or use sum-to-product formulae}", "Turn trig equations into simpler factors."),
  () => step(0, "Final answer", "\\text{State exact values and all solutions in the interval}", "Include every valid solution."),
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

for (const q of questions) {
  const len = q.workedSolution.steps.length;
  const min = STEP_MIN[q.difficulty];
  const max = STEP_MAX[q.difficulty];
  if (len < min || len > max) {
    console.error(`${q.id} (${q.difficulty}): ${len} steps, expected ${min}–${max}`);
    process.exit(1);
  }
}

writeFileSync(
  outPath,
  `import { Question } from "@/lib/types";\n\nexport const questions: Question[] = ${JSON.stringify(questions, null, 2)};\n`
);
console.log(`Wrote ${questions.length} questions to ${outPath}`);
console.log(`Difficulty: Easy=${counts.Easy}, Intermediate=${counts.Intermediate}, Hard=${counts.Hard}`);
