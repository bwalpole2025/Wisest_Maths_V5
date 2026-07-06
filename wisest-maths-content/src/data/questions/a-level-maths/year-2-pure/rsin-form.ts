import { Question } from "@/lib/types";

type Difficulty = Question["difficulty"];

interface Blueprint {
  difficulty: Difficulty;
  marks: number;
  answerType: string;
  tags: string[];
  questionText: string;
  finalAnswer: string;
  workings: string[];
}

const level = "A-Level Maths";
const topic = "Year 2 Pure";
const subtopic = "The form Rsin(θ + α)";
const subtopicId = "al.y2.pure.rsin-form";

const stepCountByDifficulty: Record<Difficulty, number> = {
  Easy: 6,
  Intermediate: 9,
  Hard: 13,
};

const descriptionsByDifficulty: Record<Difficulty, string[]> = {
  Easy: [
    "Identify the target form or quantity",
    "Write the standard R-form setup",
    "Substitute the known coefficients",
    "Simplify the key relation",
    "Check sign and magnitude consistency",
    "State the result in required form",
  ],
  Intermediate: [
    "Interpret what must be rewritten or solved",
    "Set up the expression in Rsin form",
    "Compare coefficients carefully",
    "Find R from the coefficient pair",
    "Find alpha from the tangent ratio",
    "Rewrite the equation in shifted-sine form",
    "Apply trig solution branches correctly",
    "Filter to the given interval",
    "State the complete final answer",
  ],
  Hard: [
    "Plan a method before expanding algebra",
    "Write the original equation clearly",
    "Introduce the Rsin(x + alpha) substitution",
    "Calculate R exactly",
    "Determine alpha using coefficient ratios",
    "Transform to a standard sine equation",
    "Solve for the shifted angle first",
    "Process branch one of solutions",
    "Process branch two of solutions",
    "Convert branches back to x values",
    "Apply the full interval restriction",
    "Check the transformed and original forms agree",
    "State all valid solutions clearly",
  ],
};

const explanationsByDifficulty: Record<Difficulty, string[]> = {
  Easy: [
    "A clear target prevents mixing up R, alpha, and the final expression.",
    "The standard setup turns two trig terms into one controllable shifted sine term.",
    "Substituting coefficients early keeps the algebra concrete and less error-prone.",
    "Simplifying in one place helps avoid sign mistakes in later steps.",
    "Checking size and sign confirms the expression still matches the original coefficients.",
    "A final exam-style statement makes the answer easy to mark and verify.",
  ],
  Intermediate: [
    "This decides whether the task is coefficient matching, equation solving, or both.",
    "Writing one target form first gives a stable structure for all later steps.",
    "Coefficient comparison links abstract parameters directly to the given numbers.",
    "R sets the amplitude, so it must be exact before solving anything else.",
    "The alpha angle controls the phase shift and must carry the correct sign.",
    "A single sine equation is simpler to solve than mixed sine and cosine terms.",
    "Systematic branch handling prevents missing valid trig solutions.",
    "Interval filtering removes mathematically possible but context-invalid values.",
    "The final line should include every valid value and no extras.",
  ],
  Hard: [
    "Hard trig questions are safest when the structure is chosen before computation.",
    "Keeping the original equation visible reduces accidental transformation errors.",
    "The R-form substitution is the key move that reveals solution branches cleanly.",
    "Exact amplitude values keep all later trig ratios precise.",
    "Correct alpha selection ensures the phase shift matches the signs of coefficients.",
    "Standard sine forms are easier to solve and reason about systematically.",
    "Solving in the shifted variable avoids premature substitution mistakes.",
    "Working one branch at a time keeps periodic solutions organized.",
    "A separate second-branch pass prevents missed roots.",
    "Converting back to x is where sign and period errors often occur, so be explicit.",
    "Large intervals need disciplined filtering to keep only valid solutions.",
    "A check in context confirms no branch was misapplied during conversion.",
    "A complete final set is essential in multi-solution trig equations.",
  ],
};

const formatExpression = (a: number, b: number, variable = "x"): string =>
  `${a}sin ${variable} ${b >= 0 ? "+" : "-"} ${Math.abs(b)}cos ${variable}`;

const alphaFromCoefficients = (a: number, b: number): string => {
  const ratio = `${Math.abs(b)}/${Math.abs(a)}`;
  return b >= 0 ? `arctan(${ratio})` : `-arctan(${ratio})`;
};

const shiftedAngle = (alpha: string, variable = "x"): string =>
  alpha.startsWith("-") ? `${variable} - ${alpha.slice(1)}` : `${variable} + ${alpha}`;

const doubleAlpha = (alpha: string): string => (alpha.startsWith("-") ? `2(${alpha})` : `2${alpha}`);

const buildQuestion = (index: number, blueprint: Blueprint): Question => {
  const expectedSteps = stepCountByDifficulty[blueprint.difficulty];
  if (blueprint.workings.length !== expectedSteps) {
    throw new Error(
      `Question ${index + 1} has ${blueprint.workings.length} steps, expected ${expectedSteps}.`,
    );
  }

  const descriptions = descriptionsByDifficulty[blueprint.difficulty];
  const explanations = explanationsByDifficulty[blueprint.difficulty];

  return {
    id: `${subtopicId}.q${String(index + 1).padStart(3, "0")}`,
    level,
    topic,
    subtopic,
    subtopicId,
    difficulty: blueprint.difficulty,
    marks: blueprint.marks,
    answerType: blueprint.answerType,
    tags: blueprint.tags,
    questionText: blueprint.questionText,
    questionDiagram: null,
    workedSolution: {
      steps: blueprint.workings.map((workingLatex, stepIndex) => ({
        stepNumber: stepIndex + 1,
        description: descriptions[stepIndex],
        workingLatex,
        explanation: explanations[stepIndex],
        diagram: null,
      })),
      finalAnswer: blueprint.finalAnswer,
    },
  };
};

const makeEasyFindR = (input: { a: number; b: number; r: number }): Blueprint => ({
  difficulty: "Easy",
  marks: 2,
  answerType: "value",
  tags: ["R-form", "amplitude", "coefficients"],
  questionText: `Given ${formatExpression(input.a, input.b)} = Rsin(x + alpha), find R.`,
  finalAnswer: `R = ${input.r}`,
  workings: [
    `Write ${formatExpression(input.a, input.b)} as Rsin(x + alpha).`,
    "Use R^2 = a^2 + b^2 for coefficients of sin x and cos x.",
    `R^2 = ${input.a}^2 + ${Math.abs(input.b)}^2.`,
    `R^2 = ${input.r ** 2}.`,
    "R is defined positive in the R-form convention.",
    `R = ${input.r}.`,
  ],
});

const makeEasyFindTanAlpha = (input: { a: number; b: number }): Blueprint => ({
  difficulty: "Easy",
  marks: 2,
  answerType: "value",
  tags: ["R-form", "phase shift", "tan alpha"],
  questionText: `Given ${formatExpression(input.a, input.b)} = Rsin(x + alpha) with 0 < alpha < pi/2, find tan alpha.`,
  finalAnswer: `tan alpha = ${input.b}/${input.a}`,
  workings: [
    `Assume ${formatExpression(input.a, input.b)} = Rsin(x + alpha).`,
    "Expand: Rsin(x + alpha) = Rsin x cos alpha + Rcos x sin alpha.",
    `Match coefficients: Rcos alpha = ${input.a} and Rsin alpha = ${input.b}.`,
    "Use tan alpha = (Rsin alpha)/(Rcos alpha).",
    `tan alpha = ${input.b}/${input.a}.`,
    `tan alpha = ${input.b}/${input.a}.`,
  ],
});

const makeEasyFindAlpha = (input: { a: number; b: number }): Blueprint => ({
  difficulty: "Easy",
  marks: 2,
  answerType: "value",
  tags: ["R-form", "phase shift", "alpha"],
  questionText: `Given ${formatExpression(input.a, input.b)} = Rsin(x + alpha) with 0 < alpha < pi/2, find alpha.`,
  finalAnswer: `alpha = arctan(${input.b}/${input.a})`,
  workings: [
    `Assume ${formatExpression(input.a, input.b)} = Rsin(x + alpha).`,
    "Expand in the standard form and compare coefficients.",
    `Rcos alpha = ${input.a}, Rsin alpha = ${input.b}.`,
    `tan alpha = ${input.b}/${input.a}.`,
    `Since 0 < alpha < pi/2, alpha is the principal acute angle.`,
    `alpha = arctan(${input.b}/${input.a}).`,
  ],
});

const makeEasyRewrite = (input: { a: number; b: number; r: number }): Blueprint => {
  const alpha = alphaFromCoefficients(input.a, input.b);
  return {
    difficulty: "Easy",
    marks: 3,
    answerType: "expression",
    tags: ["R-form", "rewrite", "single sine"],
    questionText: `Write ${formatExpression(input.a, input.b)} in the form Rsin(x + alpha), where R > 0 and 0 < alpha < pi/2.`,
    finalAnswer: `${formatExpression(input.a, input.b)} = ${input.r}sin(${shiftedAngle(alpha)})`,
    workings: [
      `Set ${formatExpression(input.a, input.b)} = Rsin(x + alpha).`,
      "Expand Rsin(x + alpha) and compare coefficients.",
      `Rcos alpha = ${input.a}, Rsin alpha = ${input.b}.`,
      `R = sqrt(${input.a}^2 + ${input.b}^2) = ${input.r}.`,
      `tan alpha = ${input.b}/${input.a}, so alpha = ${alpha}.`,
      `${formatExpression(input.a, input.b)} = ${input.r}sin(${shiftedAngle(alpha)}).`,
    ],
  };
};

const makeIntermediateRewrite = (input: { a: number; b: number; r: number }): Blueprint => {
  const alpha = alphaFromCoefficients(input.a, input.b);
  return {
    difficulty: "Intermediate",
    marks: 5,
    answerType: "expression",
    tags: ["R-form", "rewrite", "signed coefficients"],
    questionText: `Write ${formatExpression(input.a, input.b)} in the form Rsin(x + alpha), where R > 0 and -pi/2 < alpha < pi/2.`,
    finalAnswer: `${formatExpression(input.a, input.b)} = ${input.r}sin(${shiftedAngle(alpha)})`,
    workings: [
      `Start with ${formatExpression(input.a, input.b)} = Rsin(x + alpha).`,
      "Expand: Rsin(x + alpha) = Rsin x cos alpha + Rcos x sin alpha.",
      `Match coefficients to get Rcos alpha = ${input.a} and Rsin alpha = ${input.b}.`,
      `Compute amplitude: R = sqrt(${input.a}^2 + ${Math.abs(input.b)}^2) = ${input.r}.`,
      `Find phase ratio: tan alpha = ${input.b}/${input.a}.`,
      `So alpha = ${alpha}, consistent with -pi/2 < alpha < pi/2.`,
      `Rewrite as ${input.r}sin(${shiftedAngle(alpha)}).`,
      "A quick expansion check recovers the original sine and cosine coefficients.",
      `${formatExpression(input.a, input.b)} = ${input.r}sin(${shiftedAngle(alpha)}).`,
    ],
  };
};

type IntermediateSolveMode = "equals-b" | "equals-minus-b" | "equals-zero" | "equals-r";

const makeIntermediateSolve = (input: {
  a: number;
  b: number;
  r: number;
  mode: IntermediateSolveMode;
}): Blueprint => {
  const alpha = alphaFromCoefficients(input.a, input.b);
  const expression = formatExpression(input.a, input.b);
  let rhs = "";
  let equationLine = "";
  let shiftedLine = "";
  let candidateLine = "";
  let xLine = "";
  let finalAnswer = "";

  if (input.mode === "equals-b") {
    rhs = `${input.b}`;
    equationLine = `${input.r}sin(x + ${alpha}) = ${input.b}.`;
    shiftedLine = `sin(x + ${alpha}) = sin(${alpha}).`;
    candidateLine = `x + ${alpha} = ${alpha} or x + ${alpha} = pi - ${alpha}.`;
    xLine = `x = 0 or x = pi - ${doubleAlpha(alpha)}.`;
    finalAnswer = `x = 0, pi - ${doubleAlpha(alpha)}`;
  } else if (input.mode === "equals-minus-b") {
    rhs = `-${input.b}`;
    equationLine = `${input.r}sin(x + ${alpha}) = -${input.b}.`;
    shiftedLine = `sin(x + ${alpha}) = -sin(${alpha}).`;
    candidateLine = `x + ${alpha} = pi + ${alpha} or x + ${alpha} = 2pi - ${alpha}.`;
    xLine = `x = pi or x = 2pi - ${doubleAlpha(alpha)}.`;
    finalAnswer = `x = pi, 2pi - ${doubleAlpha(alpha)}`;
  } else if (input.mode === "equals-zero") {
    rhs = "0";
    equationLine = `${input.r}sin(x + ${alpha}) = 0.`;
    shiftedLine = "sin(x + alpha) = 0.";
    candidateLine = `x + ${alpha} = pi or x + ${alpha} = 2pi.`;
    xLine = `x = pi - ${alpha} or x = 2pi - ${alpha}.`;
    finalAnswer = `x = pi - ${alpha}, 2pi - ${alpha}`;
  } else {
    rhs = `${input.r}`;
    equationLine = `${input.r}sin(x + ${alpha}) = ${input.r}.`;
    shiftedLine = "sin(x + alpha) = 1.";
    candidateLine = `x + ${alpha} = pi/2.`;
    xLine = `x = pi/2 - ${alpha}.`;
    finalAnswer = `x = pi/2 - ${alpha}`;
  }

  return {
    difficulty: "Intermediate",
    marks: 6,
    answerType: "angles",
    tags: ["R-form", "solve equations", "shifted sine"],
    questionText: `Solve ${expression} = ${rhs} for 0 <= x < 2pi.`,
    finalAnswer,
    workings: [
      "Rewrite the left-hand side as a single shifted sine term.",
      `For ${expression}, use R = ${input.r} and alpha = ${alpha}.`,
      `${expression} = ${input.r}sin(x + ${alpha}).`,
      equationLine,
      shiftedLine,
      candidateLine,
      xLine,
      "Keep only solutions in 0 <= x < 2pi.",
      finalAnswer,
    ],
  };
};

type HardSolveMode = "equals-zero" | "equals-b";

const makeHardSolve = (input: { a: number; b: number; r: number; mode: HardSolveMode }): Blueprint => {
  const alpha = alphaFromCoefficients(input.a, input.b);
  const expression = formatExpression(input.a, input.b);
  const interval = "0 <= x < 4pi";

  let rhs = "";
  let transformed = "";
  let branchOne = "";
  let branchTwo = "";
  let convertLine = "";
  let finalAnswer = "";

  if (input.mode === "equals-zero") {
    rhs = "0";
    transformed = `sin(x + ${alpha}) = 0.`;
    branchOne = `x + ${alpha} = npi for integer n.`;
    branchTwo = `x = npi - ${alpha}.`;
    convertLine = `In ${interval}: x = pi - ${alpha}, 2pi - ${alpha}, 3pi - ${alpha}, 4pi - ${alpha}.`;
    finalAnswer = `x = pi - ${alpha}, 2pi - ${alpha}, 3pi - ${alpha}, 4pi - ${alpha}`;
  } else {
    rhs = `${input.b}`;
    transformed = `sin(x + ${alpha}) = sin(${alpha}).`;
    branchOne = `Branch 1: x + ${alpha} = ${alpha} + 2kpi, so x = 2kpi.`;
    branchTwo = `Branch 2: x + ${alpha} = pi - ${alpha} + 2kpi, so x = pi - ${doubleAlpha(alpha)} + 2kpi.`;
    convertLine = `In ${interval}: x = 0, pi - ${doubleAlpha(alpha)}, 2pi, 3pi - ${doubleAlpha(alpha)}.`;
    finalAnswer = `x = 0, pi - ${doubleAlpha(alpha)}, 2pi, 3pi - ${doubleAlpha(alpha)}`;
  }

  return {
    difficulty: "Hard",
    marks: 8,
    answerType: "angles",
    tags: ["R-form", "extended interval", "multi-branch trig"],
    questionText: `Solve ${expression} = ${rhs} for ${interval}.`,
    finalAnswer,
    workings: [
      "Convert the mixed sine-cosine expression into single-shift form first.",
      `Original equation: ${expression} = ${rhs}.`,
      `Let ${expression} = Rsin(x + alpha).`,
      `R = sqrt(${input.a}^2 + ${input.b}^2) = ${input.r}.`,
      `tan alpha = ${input.b}/${input.a}, so alpha = ${alpha}.`,
      `So ${expression} = ${input.r}sin(x + ${alpha}).`,
      `${input.r}sin(x + ${alpha}) = ${rhs}, hence ${transformed}`,
      "Now solve the shifted-sine equation by standard branches.",
      branchOne,
      branchTwo,
      "List all values generated by these branches in the stated interval.",
      convertLine,
      finalAnswer,
    ],
  };
};

const easyFindRData = [
  { a: 3, b: 4, r: 5 },
  { a: 5, b: 12, r: 13 },
  { a: 8, b: 15, r: 17 },
  { a: 7, b: 24, r: 25 },
  { a: 9, b: 40, r: 41 },
  { a: 12, b: 35, r: 37 },
  { a: 20, b: 21, r: 29 },
  { a: 11, b: 60, r: 61 },
];

const easyAlphaTanData = [
  { a: 3, b: 4 },
  { a: 5, b: 12 },
  { a: 8, b: 15 },
  { a: 7, b: 24 },
];

const easyAlphaData = [
  { a: 9, b: 40 },
  { a: 12, b: 35 },
  { a: 20, b: 21 },
  { a: 11, b: 60 },
];

const easyRewriteData = [
  { a: 3, b: 4, r: 5 },
  { a: 5, b: 12, r: 13 },
  { a: 8, b: 15, r: 17 },
  { a: 7, b: 24, r: 25 },
  { a: 9, b: 40, r: 41 },
  { a: 12, b: 35, r: 37 },
  { a: 20, b: 21, r: 29 },
  { a: 11, b: 60, r: 61 },
];

const easyBlueprints: Blueprint[] = [
  ...easyFindRData.map((item) => makeEasyFindR(item)),
  ...easyAlphaTanData.map((item) => makeEasyFindTanAlpha(item)),
  ...easyAlphaData.map((item) => makeEasyFindAlpha(item)),
  ...easyRewriteData.map((item) => makeEasyRewrite(item)),
];

const intermediateRewriteData = [
  { a: 6, b: -8, r: 10 },
  { a: 9, b: -12, r: 15 },
  { a: 15, b: -8, r: 17 },
  { a: 24, b: -7, r: 25 },
  { a: 12, b: -5, r: 13 },
  { a: 40, b: -9, r: 41 },
  { a: 14, b: 48, r: 50 },
  { a: 18, b: 24, r: 30 },
  { a: 16, b: 63, r: 65 },
  { a: 28, b: 45, r: 53 },
  { a: 33, b: 56, r: 65 },
  { a: 45, b: 28, r: 53 },
];

const intermediateSolveData = [
  { a: 3, b: 4, r: 5, mode: "equals-b" as const },
  { a: 5, b: 12, r: 13, mode: "equals-minus-b" as const },
  { a: 8, b: 15, r: 17, mode: "equals-zero" as const },
  { a: 7, b: 24, r: 25, mode: "equals-r" as const },
  { a: 9, b: 40, r: 41, mode: "equals-b" as const },
  { a: 12, b: 35, r: 37, mode: "equals-zero" as const },
  { a: 20, b: 21, r: 29, mode: "equals-minus-b" as const },
  { a: 11, b: 60, r: 61, mode: "equals-r" as const },
  { a: 14, b: 48, r: 50, mode: "equals-b" as const },
  { a: 18, b: 24, r: 30, mode: "equals-zero" as const },
  { a: 16, b: 63, r: 65, mode: "equals-minus-b" as const },
  { a: 28, b: 45, r: 53, mode: "equals-r" as const },
];

const intermediateBlueprints: Blueprint[] = [
  ...intermediateRewriteData.map((item) => makeIntermediateRewrite(item)),
  ...intermediateSolveData.map((item) => makeIntermediateSolve(item)),
];

const hardCoreData = [
  { a: 12, b: 5, r: 13 },
  { a: 24, b: 7, r: 25 },
  { a: 40, b: 9, r: 41 },
  { a: 35, b: 12, r: 37 },
  { a: 20, b: 21, r: 29 },
  { a: 11, b: 60, r: 61 },
  { a: 16, b: 63, r: 65 },
  { a: 33, b: 56, r: 65 },
  { a: 45, b: 28, r: 53 },
  { a: 28, b: 45, r: 53 },
  { a: 14, b: 48, r: 50 },
];

const hardBlueprints: Blueprint[] = hardCoreData.flatMap((item) => [
  makeHardSolve({ ...item, mode: "equals-zero" }),
  makeHardSolve({ ...item, mode: "equals-b" }),
]);

if (easyBlueprints.length !== 24 || intermediateBlueprints.length !== 24 || hardBlueprints.length !== 22) {
  throw new Error(
    `Expected distribution 24/24/22 but found ${easyBlueprints.length}/${intermediateBlueprints.length}/${hardBlueprints.length}.`,
  );
}

export const questions: Question[] = [
  ...easyBlueprints.map((blueprint, index) => buildQuestion(index, blueprint)),
  ...intermediateBlueprints.map((blueprint, index) =>
    buildQuestion(easyBlueprints.length + index, blueprint),
  ),
  ...hardBlueprints.map((blueprint, index) =>
    buildQuestion(easyBlueprints.length + intermediateBlueprints.length + index, blueprint),
  ),
];

if (questions.length !== 70) {
  throw new Error(`Expected 70 questions for ${subtopicId} but found ${questions.length}.`);
}
