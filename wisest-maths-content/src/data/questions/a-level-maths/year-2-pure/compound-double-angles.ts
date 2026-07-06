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
const subtopic = "Compound and double angle formulae";
const subtopicId = "al.y2.pure.compound-double-angles";

const stepCountByDifficulty: Record<Difficulty, number> = {
  Easy: 6,
  Intermediate: 9,
  Hard: 13,
};

const descriptionsByDifficulty: Record<Difficulty, string[]> = {
  Easy: [
    "Identify the target formula or value",
    "Recall the correct compound or double-angle identity",
    "Substitute the known angles or expressions",
    "Simplify the trigonometric terms carefully",
    "Check signs and exact values are consistent",
    "State the final answer clearly",
  ],
  Intermediate: [
    "Interpret the equation or expression to be handled",
    "Rewrite using a compound or double-angle identity",
    "Reduce to a standard trigonometric form",
    "Find the key reference value or related angle",
    "Generate candidate solutions from trig structure",
    "Convert candidates to the required variable",
    "Apply interval or range restrictions",
    "Verify candidates in the original statement",
    "State the complete final answer",
  ],
  Hard: [
    "Read the target statement and choose a strategy",
    "Write the original equation or identity clearly",
    "Introduce a suitable compound or double-angle identity",
    "Transform to an algebraic trigonometric form",
    "Simplify to a solvable structure",
    "Solve the key equation or relation",
    "Process the first branch of solutions",
    "Process the second branch of solutions",
    "Translate branches back to angle values",
    "Apply interval and principal-value restrictions",
    "Collect all valid results",
    "Check against the original expression",
    "State the final answer precisely",
  ],
};

const explanationsByDifficulty: Record<Difficulty, string[]> = {
  Easy: [
    "Stating the exact goal first keeps the method focused and avoids mixing different identities.",
    "Compound and double-angle questions are fastest when the correct identity is written explicitly first.",
    "Substituting cleanly converts the task into straightforward exact-value arithmetic.",
    "Careful simplification prevents common sign and denominator errors.",
    "A quick consistency check with known trig behaviour improves reliability.",
    "The final line should match what the question asked in exact exam-ready form.",
  ],
  Intermediate: [
    "A clear interpretation step helps decide whether to expand, factor, or solve.",
    "Using the right identity early is the key move in this subtopic.",
    "Standard forms are easier to solve because their solution patterns are well known.",
    "Reference-angle reasoning anchors all later candidate solutions.",
    "Trig equations usually produce multiple candidates, so systematic listing is essential.",
    "Converting back to x carefully avoids losing period information.",
    "Interval restrictions remove values that are algebraically possible but not allowed.",
    "Substituting back catches sign or periodicity slips before the final line.",
    "A complete answer lists all valid solutions and excludes invalid ones.",
  ],
  Hard: [
    "Hard questions become manageable when the structure is planned before algebra starts.",
    "Rewriting the exact target avoids accidental changes to the original statement.",
    "A deliberate identity choice often turns a difficult expression into a solvable one.",
    "Converting to algebraic trig form reveals factorable or quadratic patterns.",
    "This simplification stage is where most of the hidden structure appears.",
    "Solving the core equation gives the main branches that drive the result.",
    "Treating one branch at a time keeps the logic clean and traceable.",
    "A second branch is often where extraneous or restricted values appear.",
    "Back-conversion must preserve periodicity and quadrant information.",
    "Domain restrictions are essential for rejecting impossible candidates.",
    "Collecting results only after filtering ensures the answer set is accurate.",
    "Checking in the original statement is the safest guard against transformed-equation errors.",
    "The final statement should be exact, complete, and aligned with the interval.",
  ],
};

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

const makeEasyFormula = (input: {
  questionText: string;
  finalAnswer: string;
  formulaLine: string;
  tags: string[];
  marks?: number;
}): Blueprint => ({
  difficulty: "Easy",
  marks: input.marks ?? 2,
  answerType: "expression",
  tags: input.tags,
  questionText: input.questionText,
  finalAnswer: input.finalAnswer,
  workings: [
    `Target: write the required standard identity.`,
    "Use the core compound or double-angle formula from pure trigonometry.",
    input.formulaLine,
    "Keep brackets and signs in the same order as the identity.",
    "This expression is already in the required exact form.",
    input.finalAnswer,
  ],
});

const makeEasyEvaluate = (input: {
  questionText: string;
  finalAnswer: string;
  formulaLine: string;
  substitutionLine: string;
  simplifyLine: string;
  tags: string[];
  marks?: number;
}): Blueprint => ({
  difficulty: "Easy",
  marks: input.marks ?? 3,
  answerType: "value",
  tags: input.tags,
  questionText: input.questionText,
  finalAnswer: input.finalAnswer,
  workings: [
    `Target: evaluate the expression exactly.`,
    input.formulaLine,
    input.substitutionLine,
    input.simplifyLine,
    "Use exact surd arithmetic and keep the result in exact form.",
    input.finalAnswer,
  ],
});

const makeIntermediateSolve = (input: {
  questionText: string;
  finalAnswer: string;
  rewriteLine: string;
  referenceLine: string;
  candidatesLine: string;
  convertLine: string;
  intervalLine: string;
  checkLine: string;
  tags: string[];
  marks?: number;
}): Blueprint => ({
  difficulty: "Intermediate",
  marks: input.marks ?? 5,
  answerType: "angles",
  tags: input.tags,
  questionText: input.questionText,
  finalAnswer: input.finalAnswer,
  workings: [
    "Solve on the interval stated in the question.",
    input.rewriteLine,
    "This is now a standard trig equation in one angle.",
    input.referenceLine,
    input.candidatesLine,
    input.convertLine,
    input.intervalLine,
    input.checkLine,
    input.finalAnswer,
  ],
});

const makeIntermediateRewrite = (input: {
  questionText: string;
  finalAnswer: string;
  setUpLine: string;
  coefficientLine: string;
 relationLine: string;
  angleLine: string;
  rewriteLine: string;
  checkLine: string;
  tags: string[];
  marks?: number;
  answerType?: string;
}): Blueprint => ({
  difficulty: "Intermediate",
  marks: input.marks ?? 6,
  answerType: input.answerType ?? "expression",
  tags: input.tags,
  questionText: input.questionText,
  finalAnswer: input.finalAnswer,
  workings: [
    "Write the expression in the required target form.",
    input.setUpLine,
    input.coefficientLine,
    input.relationLine,
    input.angleLine,
    input.rewriteLine,
    "Apply any interval restrictions from the question statement.",
    input.checkLine,
    input.finalAnswer,
  ],
});

const makeHardSolve = (input: {
  questionText: string;
  finalAnswer: string;
  equationLine: string;
  identityLine: string;
  algebraLine: string;
  simplifiedLine: string;
  rootLine: string;
  branchOneLine: string;
  branchTwoLine: string;
  angleOneLine: string;
  angleTwoLine: string;
  checkLine: string;
  tags: string[];
  marks?: number;
}): Blueprint => ({
  difficulty: "Hard",
  marks: input.marks ?? 8,
  answerType: "angles",
  tags: input.tags,
  questionText: input.questionText,
  finalAnswer: input.finalAnswer,
  workings: [
    "Plan: convert the equation with compound or double-angle identities.",
    input.equationLine,
    input.identityLine,
    input.algebraLine,
    input.simplifiedLine,
    input.rootLine,
    input.branchOneLine,
    input.branchTwoLine,
    input.angleOneLine,
    input.angleTwoLine,
    "Collect and filter all values in the required interval.",
    input.checkLine,
    input.finalAnswer,
  ],
});

const makeHardProof = (input: {
  questionText: string;
  finalAnswer: string;
  lhsLine: string;
  expandOne: string;
  expandTwo: string;
  regroupOne: string;
  regroupTwo: string;
  identityOne: string;
  identityTwo: string;
  simplifyOne: string;
  simplifyTwo: string;
  rhsLine: string;
  checkLine: string;
  tags: string[];
  marks?: number;
}): Blueprint => ({
  difficulty: "Hard",
  marks: input.marks ?? 8,
  answerType: "proof",
  tags: input.tags,
  questionText: input.questionText,
  finalAnswer: input.finalAnswer,
  workings: [
    "Start from the left-hand side and transform only one side.",
    input.lhsLine,
    input.expandOne,
    input.expandTwo,
    input.regroupOne,
    input.regroupTwo,
    input.identityOne,
    input.identityTwo,
    input.simplifyOne,
    input.simplifyTwo,
    input.rhsLine,
    input.checkLine,
    input.finalAnswer,
  ],
});

const easyBlueprints: Blueprint[] = [
  makeEasyFormula({
    questionText: "State the compound-angle formula for sin(A + B).",
    finalAnswer: "sin(A + B) = sin A cos B + cos A sin B",
    formulaLine: "sin(A + B) = sin A cos B + cos A sin B.",
    tags: ["compound angles", "sine", "formula"],
  }),
  makeEasyFormula({
    questionText: "State the compound-angle formula for sin(A - B).",
    finalAnswer: "sin(A - B) = sin A cos B - cos A sin B",
    formulaLine: "sin(A - B) = sin A cos B - cos A sin B.",
    tags: ["compound angles", "sine", "formula"],
  }),
  makeEasyFormula({
    questionText: "State the compound-angle formula for cos(A + B).",
    finalAnswer: "cos(A + B) = cos A cos B - sin A sin B",
    formulaLine: "cos(A + B) = cos A cos B - sin A sin B.",
    tags: ["compound angles", "cosine", "formula"],
  }),
  makeEasyFormula({
    questionText: "State the compound-angle formula for cos(A - B).",
    finalAnswer: "cos(A - B) = cos A cos B + sin A sin B",
    formulaLine: "cos(A - B) = cos A cos B + sin A sin B.",
    tags: ["compound angles", "cosine", "formula"],
  }),
  makeEasyFormula({
    questionText: "State the compound-angle formula for tan(A + B).",
    finalAnswer: "tan(A + B) = (tan A + tan B) / (1 - tan A tan B)",
    formulaLine: "tan(A + B) = (tan A + tan B) / (1 - tan A tan B).",
    tags: ["compound angles", "tangent", "formula"],
  }),
  makeEasyFormula({
    questionText: "State the compound-angle formula for tan(A - B).",
    finalAnswer: "tan(A - B) = (tan A - tan B) / (1 + tan A tan B)",
    formulaLine: "tan(A - B) = (tan A - tan B) / (1 + tan A tan B).",
    tags: ["compound angles", "tangent", "formula"],
  }),
  makeEasyFormula({
    questionText: "Write sin(2x) in terms of sin x and cos x.",
    finalAnswer: "sin(2x) = 2sin x cos x",
    formulaLine: "From sin(A + B), set A = x and B = x to get sin(2x) = 2sin x cos x.",
    tags: ["double angle", "sine"],
  }),
  makeEasyFormula({
    questionText: "Write cos(2x) in terms of sin x and cos x.",
    finalAnswer: "cos(2x) = cos^2 x - sin^2 x",
    formulaLine: "From cos(A + B), set A = x and B = x to get cos(2x) = cos^2 x - sin^2 x.",
    tags: ["double angle", "cosine"],
  }),
  makeEasyFormula({
    questionText: "Write cos(2x) in terms of sin x only.",
    finalAnswer: "cos(2x) = 1 - 2sin^2 x",
    formulaLine: "Use cos(2x) = cos^2 x - sin^2 x and cos^2 x = 1 - sin^2 x, so cos(2x) = 1 - 2sin^2 x.",
    tags: ["double angle", "cosine", "identities"],
  }),
  makeEasyFormula({
    questionText: "Write cos(2x) in terms of cos x only.",
    finalAnswer: "cos(2x) = 2cos^2 x - 1",
    formulaLine: "Use cos(2x) = cos^2 x - sin^2 x and sin^2 x = 1 - cos^2 x, so cos(2x) = 2cos^2 x - 1.",
    tags: ["double angle", "cosine", "identities"],
  }),
  makeEasyFormula({
    questionText: "State the double-angle formula for tan(2x).",
    finalAnswer: "tan(2x) = (2tan x) / (1 - tan^2 x)",
    formulaLine: "Set A = B = x in tan(A + B): tan(2x) = (2tan x) / (1 - tan^2 x).",
    tags: ["double angle", "tangent"],
  }),
  makeEasyFormula({
    questionText: "Write 2sin x cos x as a single trigonometric function.",
    finalAnswer: "2sin x cos x = sin(2x)",
    formulaLine: "Rearrange the double-angle identity sin(2x) = 2sin x cos x.",
    tags: ["double angle", "rearranging identities"],
  }),
  makeEasyEvaluate({
    questionText: "Find the exact value of sin(75 degrees).",
    finalAnswer: "sin(75 degrees) = (sqrt(6) + sqrt(2)) / 4",
    formulaLine: "Use sin(45 degrees + 30 degrees) = sin45 cos30 + cos45 sin30.",
    substitutionLine:
      "Substitute exact values: (sqrt(2)/2)(sqrt(3)/2) + (sqrt(2)/2)(1/2).",
    simplifyLine: "So sin75 = sqrt(6)/4 + sqrt(2)/4 = (sqrt(6) + sqrt(2))/4.",
    tags: ["compound angles", "exact values", "sine"],
  }),
  makeEasyEvaluate({
    questionText: "Find the exact value of cos(75 degrees).",
    finalAnswer: "cos(75 degrees) = (sqrt(6) - sqrt(2)) / 4",
    formulaLine: "Use cos(45 degrees + 30 degrees) = cos45 cos30 - sin45 sin30.",
    substitutionLine:
      "Substitute exact values: (sqrt(2)/2)(sqrt(3)/2) - (sqrt(2)/2)(1/2).",
    simplifyLine: "So cos75 = sqrt(6)/4 - sqrt(2)/4 = (sqrt(6) - sqrt(2))/4.",
    tags: ["compound angles", "exact values", "cosine"],
  }),
  makeEasyEvaluate({
    questionText: "Find the exact value of tan(75 degrees).",
    finalAnswer: "tan(75 degrees) = 2 + sqrt(3)",
    formulaLine: "Use tan(45 degrees + 30 degrees) = (tan45 + tan30)/(1 - tan45 tan30).",
    substitutionLine: "This gives (1 + 1/sqrt(3)) / (1 - 1/sqrt(3)).",
    simplifyLine: "Rationalising and simplifying gives tan75 = 2 + sqrt(3).",
    tags: ["compound angles", "exact values", "tangent"],
  }),
  makeEasyEvaluate({
    questionText: "Find the exact value of sin(15 degrees).",
    finalAnswer: "sin(15 degrees) = (sqrt(6) - sqrt(2)) / 4",
    formulaLine: "Use sin(45 degrees - 30 degrees) = sin45 cos30 - cos45 sin30.",
    substitutionLine:
      "Substitute exact values: (sqrt(2)/2)(sqrt(3)/2) - (sqrt(2)/2)(1/2).",
    simplifyLine: "So sin15 = sqrt(6)/4 - sqrt(2)/4 = (sqrt(6) - sqrt(2))/4.",
    tags: ["compound angles", "exact values", "sine"],
  }),
  makeEasyEvaluate({
    questionText: "Find the exact value of cos(15 degrees).",
    finalAnswer: "cos(15 degrees) = (sqrt(6) + sqrt(2)) / 4",
    formulaLine: "Use cos(45 degrees - 30 degrees) = cos45 cos30 + sin45 sin30.",
    substitutionLine:
      "Substitute exact values: (sqrt(2)/2)(sqrt(3)/2) + (sqrt(2)/2)(1/2).",
    simplifyLine: "So cos15 = sqrt(6)/4 + sqrt(2)/4 = (sqrt(6) + sqrt(2))/4.",
    tags: ["compound angles", "exact values", "cosine"],
  }),
  makeEasyEvaluate({
    questionText: "Find the exact value of tan(15 degrees).",
    finalAnswer: "tan(15 degrees) = 2 - sqrt(3)",
    formulaLine: "Use tan(45 degrees - 30 degrees) = (tan45 - tan30)/(1 + tan45 tan30).",
    substitutionLine: "This gives (1 - 1/sqrt(3)) / (1 + 1/sqrt(3)).",
    simplifyLine: "Rationalising and simplifying gives tan15 = 2 - sqrt(3).",
    tags: ["compound angles", "exact values", "tangent"],
  }),
  makeEasyEvaluate({
    questionText: "Given sin x = 3/5 and cos x = 4/5 with x acute, find sin(2x).",
    finalAnswer: "sin(2x) = 24/25",
    formulaLine: "Use sin(2x) = 2sin x cos x.",
    substitutionLine: "Substitute: sin(2x) = 2(3/5)(4/5).",
    simplifyLine: "So sin(2x) = 24/25.",
    tags: ["double angle", "sine", "exact values"],
  }),
  makeEasyEvaluate({
    questionText: "Given sin x = 5/13 and cos x = 12/13 with x acute, find cos(2x).",
    finalAnswer: "cos(2x) = 119/169",
    formulaLine: "Use cos(2x) = cos^2 x - sin^2 x.",
    substitutionLine: "Substitute: cos(2x) = (12/13)^2 - (5/13)^2.",
    simplifyLine: "So cos(2x) = (144 - 25)/169 = 119/169.",
    tags: ["double angle", "cosine", "exact values"],
  }),
  makeEasyEvaluate({
    questionText: "Given tan x = 1/3, find tan(2x).",
    finalAnswer: "tan(2x) = 3/4",
    formulaLine: "Use tan(2x) = (2tan x)/(1 - tan^2 x).",
    substitutionLine: "Substitute: tan(2x) = (2/3)/(1 - 1/9).",
    simplifyLine: "So tan(2x) = (2/3)/(8/9) = 3/4.",
    tags: ["double angle", "tangent", "exact values"],
  }),
  makeEasyEvaluate({
    questionText: "Given tan x = 2, find tan(2x).",
    finalAnswer: "tan(2x) = -4/3",
    formulaLine: "Use tan(2x) = (2tan x)/(1 - tan^2 x).",
    substitutionLine: "Substitute: tan(2x) = 4/(1 - 4).",
    simplifyLine: "So tan(2x) = 4/(-3) = -4/3.",
    tags: ["double angle", "tangent", "exact values"],
  }),
  makeEasyEvaluate({
    questionText: "Simplify sin(x + pi/4) + sin(x - pi/4).",
    finalAnswer: "sin(x + pi/4) + sin(x - pi/4) = sqrt(2)sin x",
    formulaLine:
      "Expand both terms: sin(x +/- pi/4) = sin x cos(pi/4) +/- cos x sin(pi/4).",
    substitutionLine:
      "Add expansions so cos x terms cancel: 2sin x cos(pi/4).",
    simplifyLine: "Since cos(pi/4) = sqrt(2)/2, result is sqrt(2)sin x.",
    tags: ["compound angles", "simplify", "sine"],
  }),
  makeEasyEvaluate({
    questionText: "Simplify cos(x + pi/6) + cos(x - pi/6).",
    finalAnswer: "cos(x + pi/6) + cos(x - pi/6) = sqrt(3)cos x",
    formulaLine:
      "Expand both terms: cos(x +/- pi/6) = cos x cos(pi/6) mp sin x sin(pi/6).",
    substitutionLine:
      "Add expansions so sin x terms cancel: 2cos x cos(pi/6).",
    simplifyLine: "Since cos(pi/6) = sqrt(3)/2, result is sqrt(3)cos x.",
    tags: ["compound angles", "simplify", "cosine"],
  }),
];

const intermediateBlueprints: Blueprint[] = [
  makeIntermediateSolve({
    questionText: "Solve sin(2x) = 1/2 for 0 <= x < 2pi.",
    finalAnswer: "x = pi/12, 5pi/12, 13pi/12, 17pi/12",
    rewriteLine: "The equation is already in standard form: sin(2x) = 1/2.",
    referenceLine: "For sine value 1/2, reference angle for 2x is pi/6.",
    candidatesLine: "In 0 <= 2x < 4pi: 2x = pi/6, 5pi/6, 13pi/6, 17pi/6.",
    convertLine: "Divide by 2 to get x values.",
    intervalLine: "Hence x = pi/12, 5pi/12, 13pi/12, 17pi/12.",
    checkLine: "Each value gives sin(2x) = 1/2 when doubled.",
    tags: ["double angle", "solve", "sine"],
  }),
  makeIntermediateSolve({
    questionText: "Solve sin(2x) = -1/2 for 0 <= x < 2pi.",
    finalAnswer: "x = 7pi/12, 11pi/12, 19pi/12, 23pi/12",
    rewriteLine: "The equation is already in standard form: sin(2x) = -1/2.",
    referenceLine: "Reference angle for |sin| = 1/2 is pi/6.",
    candidatesLine: "In 0 <= 2x < 4pi: 2x = 7pi/6, 11pi/6, 19pi/6, 23pi/6.",
    convertLine: "Divide each candidate by 2.",
    intervalLine: "Hence x = 7pi/12, 11pi/12, 19pi/12, 23pi/12.",
    checkLine: "Substitution confirms each gives sin(2x) = -1/2.",
    tags: ["double angle", "solve", "sine"],
  }),
  makeIntermediateSolve({
    questionText: "Solve cos(2x) = 1/2 for 0 <= x < 2pi.",
    finalAnswer: "x = pi/6, 5pi/6, 7pi/6, 11pi/6",
    rewriteLine: "The equation is already in standard form: cos(2x) = 1/2.",
    referenceLine: "For cosine value 1/2, reference angle for 2x is pi/3.",
    candidatesLine: "In 0 <= 2x < 4pi: 2x = pi/3, 5pi/3, 7pi/3, 11pi/3.",
    convertLine: "Divide each by 2 to return to x.",
    intervalLine: "Hence x = pi/6, 5pi/6, 7pi/6, 11pi/6.",
    checkLine: "Doubling each x gives a valid angle for cos(2x) = 1/2.",
    tags: ["double angle", "solve", "cosine"],
  }),
  makeIntermediateSolve({
    questionText: "Solve cos(2x) = -1/2 for 0 <= x < 2pi.",
    finalAnswer: "x = pi/3, 2pi/3, 4pi/3, 5pi/3",
    rewriteLine: "The equation is already in standard form: cos(2x) = -1/2.",
    referenceLine: "Reference angle for cosine magnitude 1/2 is pi/3.",
    candidatesLine: "In 0 <= 2x < 4pi: 2x = 2pi/3, 4pi/3, 8pi/3, 10pi/3.",
    convertLine: "Divide all candidates by 2.",
    intervalLine: "Hence x = pi/3, 2pi/3, 4pi/3, 5pi/3.",
    checkLine: "Substituting back confirms cos(2x) = -1/2.",
    tags: ["double angle", "solve", "cosine"],
  }),
  makeIntermediateSolve({
    questionText: "Solve tan(2x) = 1 for 0 <= x < pi.",
    finalAnswer: "x = pi/8, 5pi/8",
    rewriteLine: "The equation is already in standard form: tan(2x) = 1.",
    referenceLine: "Reference angle for tangent 1 is pi/4.",
    candidatesLine: "For 0 <= 2x < 2pi: 2x = pi/4, 5pi/4.",
    convertLine: "Divide by 2.",
    intervalLine: "Hence x = pi/8, 5pi/8.",
    checkLine: "Both values satisfy tan(2x) = 1.",
    tags: ["double angle", "solve", "tangent"],
  }),
  makeIntermediateSolve({
    questionText: "Solve tan(2x) = -1 for 0 <= x < pi.",
    finalAnswer: "x = 3pi/8, 7pi/8",
    rewriteLine: "The equation is already in standard form: tan(2x) = -1.",
    referenceLine: "Reference angle for tangent magnitude 1 is pi/4.",
    candidatesLine: "For 0 <= 2x < 2pi: 2x = 3pi/4, 7pi/4.",
    convertLine: "Divide by 2.",
    intervalLine: "Hence x = 3pi/8, 7pi/8.",
    checkLine: "Both values satisfy tan(2x) = -1.",
    tags: ["double angle", "solve", "tangent"],
  }),
  makeIntermediateSolve({
    questionText: "Solve 2sin x cos x = sqrt(3)/2 for 0 <= x < 2pi.",
    finalAnswer: "x = pi/6, pi/3, 7pi/6, 4pi/3",
    rewriteLine: "Use sin(2x) = 2sin x cos x to get sin(2x) = sqrt(3)/2.",
    referenceLine: "Reference angle for sine value sqrt(3)/2 is pi/3.",
    candidatesLine: "In 0 <= 2x < 4pi: 2x = pi/3, 2pi/3, 7pi/3, 8pi/3.",
    convertLine: "Divide by 2.",
    intervalLine: "Hence x = pi/6, pi/3, 7pi/6, 4pi/3.",
    checkLine: "Substitute each x into 2sin x cos x to verify.",
    tags: ["double angle", "solve", "sine"],
  }),
  makeIntermediateSolve({
    questionText: "Solve 2cos^2 x - 1 = 0 for 0 <= x < 2pi.",
    finalAnswer: "x = pi/4, 3pi/4, 5pi/4, 7pi/4",
    rewriteLine: "Use cos(2x) = 2cos^2 x - 1 to get cos(2x) = 0.",
    referenceLine: "Cosine is zero at odd multiples of pi/2.",
    candidatesLine: "In 0 <= 2x < 4pi: 2x = pi/2, 3pi/2, 5pi/2, 7pi/2.",
    convertLine: "Divide all by 2.",
    intervalLine: "Hence x = pi/4, 3pi/4, 5pi/4, 7pi/4.",
    checkLine: "All four values satisfy 2cos^2 x - 1 = 0.",
    tags: ["double angle", "solve", "cosine"],
  }),
  makeIntermediateSolve({
    questionText: "Solve 1 - 2sin^2 x = -1/2 for 0 <= x < 2pi.",
    finalAnswer: "x = pi/3, 2pi/3, 4pi/3, 5pi/3",
    rewriteLine: "Use cos(2x) = 1 - 2sin^2 x to get cos(2x) = -1/2.",
    referenceLine: "Reference angle for cosine magnitude 1/2 is pi/3.",
    candidatesLine: "In 0 <= 2x < 4pi: 2x = 2pi/3, 4pi/3, 8pi/3, 10pi/3.",
    convertLine: "Divide each by 2.",
    intervalLine: "Hence x = pi/3, 2pi/3, 4pi/3, 5pi/3.",
    checkLine: "Substitution confirms each solution.",
    tags: ["double angle", "solve", "cosine"],
  }),
  makeIntermediateSolve({
    questionText: "Solve sin(x + pi/6) = sin(x - pi/6) for 0 <= x < 2pi.",
    finalAnswer: "x = pi/2, 3pi/2",
    rewriteLine:
      "Expand both sides and cancel matching sin x cos(pi/6) terms to get cos x = 0.",
    referenceLine: "Cosine is zero at x = pi/2 + kpi.",
    candidatesLine: "So x = pi/2 + kpi.",
    convertLine: "Apply 0 <= x < 2pi.",
    intervalLine: "Hence x = pi/2, 3pi/2.",
    checkLine: "Both values make the two sine expressions equal.",
    tags: ["compound angles", "solve", "sine"],
  }),
  makeIntermediateSolve({
    questionText: "Solve cos(x + pi/4) = cos(x - pi/4) for 0 <= x < 2pi.",
    finalAnswer: "x = 0, pi",
    rewriteLine:
      "Expand both sides and cancel matching cos x cos(pi/4) terms to get sin x = 0.",
    referenceLine: "Sine is zero at x = kpi.",
    candidatesLine: "So x = kpi.",
    convertLine: "Apply 0 <= x < 2pi.",
    intervalLine: "Hence x = 0, pi.",
    checkLine: "Both values satisfy the original cosine equation.",
    tags: ["compound angles", "solve", "cosine"],
  }),
  makeIntermediateSolve({
    questionText: "Solve sin(x + pi/4) = cos x for 0 <= x < 2pi.",
    finalAnswer: "x = pi/8, 9pi/8",
    rewriteLine:
      "Write cos x as sin(pi/2 - x), then solve sin(x + pi/4) = sin(pi/2 - x).",
    referenceLine: "Use the two sine-solution branches for equal sine values.",
    candidatesLine: "Main branch gives x + pi/4 = pi/2 - x, so x = pi/8 + kpi.",
    convertLine: "Second branch gives no valid extra values here.",
    intervalLine: "Hence x = pi/8, 9pi/8.",
    checkLine: "Substituting both values confirms equality.",
    tags: ["compound angles", "solve", "mixed trig"],
  }),
  makeIntermediateSolve({
    questionText: "Solve cos(x - pi/3) = 1/2 for 0 <= x < 2pi.",
    finalAnswer: "x = 0, 2pi/3",
    rewriteLine: "Set y = x - pi/3, so cos y = 1/2.",
    referenceLine: "Cos y = 1/2 at y = plus or minus pi/3 + 2kpi.",
    candidatesLine: "So x - pi/3 = pi/3 + 2kpi or x - pi/3 = -pi/3 + 2kpi.",
    convertLine: "Hence x = 2pi/3 + 2kpi or x = 2kpi.",
    intervalLine: "Within 0 <= x < 2pi: x = 0, 2pi/3.",
    checkLine: "Both values give cos(x - pi/3) = 1/2.",
    tags: ["compound angles", "solve", "cosine"],
  }),
  makeIntermediateSolve({
    questionText: "Solve sin(x + pi/4) = 0 for 0 <= x < 2pi.",
    finalAnswer: "x = 3pi/4, 7pi/4",
    rewriteLine: "Set y = x + pi/4, then solve sin y = 0.",
    referenceLine: "sin y = 0 when y = npi.",
    candidatesLine: "So x + pi/4 = npi.",
    convertLine: "Hence x = npi - pi/4.",
    intervalLine: "In 0 <= x < 2pi: x = 3pi/4, 7pi/4.",
    checkLine: "Both values make the sine term zero.",
    tags: ["compound angles", "solve", "sine"],
  }),
  makeIntermediateSolve({
    questionText: "Solve tan(x + pi/6) = 1 for 0 <= x < pi.",
    finalAnswer: "x = pi/12",
    rewriteLine: "Set y = x + pi/6, then solve tan y = 1.",
    referenceLine: "tan y = 1 when y = pi/4 + kpi.",
    candidatesLine: "So x + pi/6 = pi/4 + kpi.",
    convertLine: "Hence x = pi/12 + kpi.",
    intervalLine: "Within 0 <= x < pi, only x = pi/12 fits.",
    checkLine: "Substitute x = pi/12 to confirm tan(pi/4) = 1.",
    tags: ["compound angles", "solve", "tangent"],
  }),
  makeIntermediateSolve({
    questionText: "Solve tan(x - pi/4) = sqrt(3) for 0 <= x < 2pi.",
    finalAnswer: "x = 7pi/12, 19pi/12",
    rewriteLine: "Set y = x - pi/4, then solve tan y = sqrt(3).",
    referenceLine: "tan y = sqrt(3) when y = pi/3 + kpi.",
    candidatesLine: "So x - pi/4 = pi/3 + kpi.",
    convertLine: "Hence x = 7pi/12 + kpi.",
    intervalLine: "In 0 <= x < 2pi: x = 7pi/12, 19pi/12.",
    checkLine: "Both values satisfy the tangent equation.",
    tags: ["compound angles", "solve", "tangent"],
  }),
  makeIntermediateSolve({
    questionText: "Solve sin(x + pi/3) + sin(x - pi/3) = 1 for 0 <= x < 2pi.",
    finalAnswer: "x = pi/2",
    rewriteLine: "Expand both sine terms and add to get sin x = 1.",
    referenceLine: "sin x = 1 at x = pi/2 + 2kpi.",
    candidatesLine: "So x = pi/2 + 2kpi.",
    convertLine: "Apply the interval 0 <= x < 2pi.",
    intervalLine: "Hence x = pi/2.",
    checkLine: "Substitution gives 1 on the left-hand side.",
    tags: ["compound angles", "solve", "sum identities"],
  }),
  makeIntermediateSolve({
    questionText: "Solve cos(x + pi/6) + cos(x - pi/6) = sqrt(3) for 0 <= x < 2pi.",
    finalAnswer: "x = 0",
    rewriteLine: "Expand and add to get sqrt(3)cos x = sqrt(3), so cos x = 1.",
    referenceLine: "cos x = 1 at x = 2kpi.",
    candidatesLine: "So x = 2kpi.",
    convertLine: "Apply 0 <= x < 2pi.",
    intervalLine: "Hence x = 0.",
    checkLine: "x = 0 satisfies the original equation exactly.",
    tags: ["compound angles", "solve", "sum identities"],
  }),
  makeIntermediateSolve({
    questionText: "Solve sin(x + pi/6) - sin(x - pi/6) = 1 for 0 <= x < 2pi.",
    finalAnswer: "x = 0",
    rewriteLine: "Expand and subtract to get cos x = 1.",
    referenceLine: "cos x = 1 when x = 2kpi.",
    candidatesLine: "So x = 2kpi.",
    convertLine: "Apply the interval condition.",
    intervalLine: "Hence x = 0.",
    checkLine: "Substitution confirms the left-hand side equals 1.",
    tags: ["compound angles", "solve", "difference identities"],
  }),
  makeIntermediateSolve({
    questionText: "Solve cos(x + pi/3) - cos(x - pi/3) = -sqrt(3) for 0 <= x < 2pi.",
    finalAnswer: "x = pi/2",
    rewriteLine: "Expand and subtract to get -sqrt(3)sin x = -sqrt(3), so sin x = 1.",
    referenceLine: "sin x = 1 at x = pi/2 + 2kpi.",
    candidatesLine: "So x = pi/2 + 2kpi.",
    convertLine: "Apply 0 <= x < 2pi.",
    intervalLine: "Hence x = pi/2.",
    checkLine: "Substituting x = pi/2 satisfies the original equation.",
    tags: ["compound angles", "solve", "difference identities"],
  }),
  makeIntermediateRewrite({
    questionText: "Write 3sin x + 4cos x in the form Rsin(x + alpha), where R > 0.",
    finalAnswer: "3sin x + 4cos x = 5sin(x + arctan(4/3))",
    setUpLine: "Assume 3sin x + 4cos x = Rsin(x + alpha).",
    coefficientLine: "Expand: Rsin(x + alpha) = Rsin x cos alpha + Rcos x sin alpha.",
    relationLine: "Match coefficients: Rcos alpha = 3 and Rsin alpha = 4.",
    angleLine: "So R = sqrt(3^2 + 4^2) = 5 and tan alpha = 4/3.",
    rewriteLine: "Hence alpha = arctan(4/3) and the required form follows.",
    checkLine: "Checking coefficients gives 5cos alpha = 3 and 5sin alpha = 4.",
    tags: ["R-form", "compound angles", "sine"],
    marks: 6,
    answerType: "expression",
  }),
  makeIntermediateRewrite({
    questionText: "Write 5cos x - 12sin x in the form Rcos(x + alpha), where R > 0.",
    finalAnswer: "5cos x - 12sin x = 13cos(x + arctan(12/5))",
    setUpLine: "Assume 5cos x - 12sin x = Rcos(x + alpha).",
    coefficientLine: "Expand: Rcos(x + alpha) = Rcos x cos alpha - Rsin x sin alpha.",
    relationLine: "Match coefficients: Rcos alpha = 5 and Rsin alpha = 12.",
    angleLine: "So R = sqrt(5^2 + 12^2) = 13 and tan alpha = 12/5.",
    rewriteLine: "Hence alpha = arctan(12/5) and the required form is obtained.",
    checkLine: "Checking coefficients gives 13cos alpha = 5 and 13sin alpha = 12.",
    tags: ["R-form", "compound angles", "cosine"],
    marks: 6,
    answerType: "expression",
  }),
  makeIntermediateRewrite({
    questionText: "Solve 3sin x + 4cos x = 4 for 0 <= x < 2pi.",
    finalAnswer: "x = 0, pi - 2arctan(4/3)",
    setUpLine: "Write 3sin x + 4cos x = 5sin(x + alpha), where alpha = arctan(4/3).",
    coefficientLine: "Equation becomes 5sin(x + alpha) = 4, so sin(x + alpha) = 4/5.",
    relationLine: "Since sin alpha = 4/5, one solution is x + alpha = alpha.",
    angleLine: "Second sine branch gives x + alpha = pi - alpha.",
    rewriteLine: "Hence x = 0 or x = pi - 2alpha.",
    checkLine: "With alpha = arctan(4/3), both values satisfy the original equation.",
    tags: ["R-form", "solve", "compound angles"],
    marks: 6,
    answerType: "angles",
  }),
  makeIntermediateRewrite({
    questionText: "Solve 5cos x - 12sin x = 5 for 0 <= x < 2pi.",
    finalAnswer: "x = 0, 2pi - 2arctan(12/5)",
    setUpLine: "Write 5cos x - 12sin x = 13cos(x + alpha), where alpha = arctan(12/5).",
    coefficientLine: "Equation becomes 13cos(x + alpha) = 5, so cos(x + alpha) = 5/13.",
    relationLine: "Since cos alpha = 5/13, one branch is x + alpha = alpha.",
    angleLine: "The second cosine branch is x + alpha = 2pi - alpha.",
    rewriteLine: "Hence x = 0 or x = 2pi - 2alpha.",
    checkLine: "With alpha = arctan(12/5), both values satisfy the original equation.",
    tags: ["R-form", "solve", "compound angles"],
    marks: 6,
    answerType: "angles",
  }),
];

const hardBlueprints: Blueprint[] = [
  makeHardSolve({
    questionText: "Solve cos(2x) = sin x for 0 <= x < 2pi.",
    finalAnswer: "x = pi/6, 5pi/6, 3pi/2",
    equationLine: "Start from cos(2x) = sin x.",
    identityLine: "Use cos(2x) = 1 - 2sin^2 x.",
    algebraLine: "Then 1 - 2sin^2 x = sin x, so 2sin^2 x + sin x - 1 = 0.",
    simplifiedLine: "Let s = sin x, then 2s^2 + s - 1 = 0.",
    rootLine: "Factor: (2s - 1)(s + 1) = 0.",
    branchOneLine: "So sin x = 1/2 or sin x = -1.",
    branchTwoLine: "These are the only branches from the quadratic factorisation.",
    angleOneLine: "sin x = 1/2 gives x = pi/6, 5pi/6.",
    angleTwoLine: "sin x = -1 gives x = 3pi/2.",
    checkLine: "Substituting each value into cos(2x) and sin x confirms equality.",
    tags: ["double angle", "equation", "quadratic trig"],
  }),
  makeHardSolve({
    questionText: "Solve sin(2x) = cos x for 0 <= x < 2pi.",
    finalAnswer: "x = pi/6, pi/2, 5pi/6, 3pi/2",
    equationLine: "Start from sin(2x) = cos x.",
    identityLine: "Use sin(2x) = 2sin x cos x.",
    algebraLine: "So 2sin x cos x = cos x, hence cos x(2sin x - 1) = 0.",
    simplifiedLine: "This gives two branches: cos x = 0 or sin x = 1/2.",
    rootLine: "Treat each branch separately.",
    branchOneLine: "cos x = 0 gives x = pi/2, 3pi/2.",
    branchTwoLine: "sin x = 1/2 gives x = pi/6, 5pi/6.",
    angleOneLine: "All four candidates lie in 0 <= x < 2pi.",
    angleTwoLine: "No candidates are repeated or excluded.",
    checkLine: "Each candidate satisfies sin(2x) = cos x in the original equation.",
    tags: ["double angle", "equation", "factorisation"],
  }),
  makeHardSolve({
    questionText: "Solve sin(2x) = sin x for 0 <= x < 2pi.",
    finalAnswer: "x = 0, pi/3, pi, 5pi/3",
    equationLine: "Start from sin(2x) = sin x.",
    identityLine: "Use sin(2x) = 2sin x cos x.",
    algebraLine: "Then 2sin x cos x = sin x, so sin x(2cos x - 1) = 0.",
    simplifiedLine: "This splits into sin x = 0 or cos x = 1/2.",
    rootLine: "Solve each branch in the interval.",
    branchOneLine: "sin x = 0 gives x = 0, pi.",
    branchTwoLine: "cos x = 1/2 gives x = pi/3, 5pi/3.",
    angleOneLine: "All four values lie in 0 <= x < 2pi.",
    angleTwoLine: "No further periodic values fit the interval.",
    checkLine: "Substituting each value verifies sin(2x) = sin x.",
    tags: ["double angle", "equation", "factorisation"],
  }),
  makeHardSolve({
    questionText: "Solve cos(2x) = cos x for 0 <= x < 2pi.",
    finalAnswer: "x = 0, 2pi/3, 4pi/3",
    equationLine: "Start from cos(2x) = cos x.",
    identityLine: "Use cos(2x) = 2cos^2 x - 1.",
    algebraLine: "Then 2cos^2 x - 1 = cos x, so 2cos^2 x - cos x - 1 = 0.",
    simplifiedLine: "Let c = cos x, so 2c^2 - c - 1 = 0.",
    rootLine: "Factor: (2c + 1)(c - 1) = 0.",
    branchOneLine: "So cos x = 1 or cos x = -1/2.",
    branchTwoLine: "These are the complete cosine branches.",
    angleOneLine: "cos x = 1 gives x = 0 in the interval.",
    angleTwoLine: "cos x = -1/2 gives x = 2pi/3, 4pi/3.",
    checkLine: "Each listed x satisfies cos(2x) = cos x.",
    tags: ["double angle", "equation", "quadratic trig"],
  }),
  makeHardSolve({
    questionText: "Solve tan(2x) = 2tan x for 0 <= x < 2pi.",
    finalAnswer: "x = 0, pi",
    equationLine: "Start from tan(2x) = 2tan x.",
    identityLine: "Use tan(2x) = (2tan x)/(1 - tan^2 x).",
    algebraLine: "So (2tan x)/(1 - tan^2 x) = 2tan x.",
    simplifiedLine: "Bring terms together: either tan x = 0 or 1/(1 - tan^2 x) = 1.",
    rootLine: "The second case gives tan^2 x = 0, again tan x = 0.",
    branchOneLine: "Hence the only branch is tan x = 0.",
    branchTwoLine: "tan x = 0 at x = npi.",
    angleOneLine: "In 0 <= x < 2pi this gives x = 0, pi.",
    angleTwoLine: "Values with tan x undefined are not valid in the original equation.",
    checkLine: "Substituting x = 0 and x = pi gives 0 = 0.",
    tags: ["double angle", "equation", "tangent"],
  }),
  makeHardSolve({
    questionText: "Solve tan(2x) = 2 for 0 <= x < pi.",
    finalAnswer: "x = (1/2)arctan(2), (pi + arctan(2))/2",
    equationLine: "Start from tan(2x) = 2.",
    identityLine: "Use tangent periodicity: if tan theta = 2 then theta = arctan(2) + kpi.",
    algebraLine: "So 2x = arctan(2) + kpi.",
    simplifiedLine: "Hence x = (arctan(2) + kpi)/2.",
    rootLine: "Now apply 0 <= x < pi.",
    branchOneLine: "For k = 0: x = (1/2)arctan(2).",
    branchTwoLine: "For k = 1: x = (pi + arctan(2))/2.",
    angleOneLine: "For k = 2, x exceeds pi and is rejected.",
    angleTwoLine: "No negative k values fit the interval.",
    checkLine: "Doubling each accepted x gives angles with tangent 2.",
    tags: ["double angle", "equation", "tangent"],
  }),
  makeHardSolve({
    questionText: "Solve sin(2x) = sqrt(3)cos x for 0 <= x < 2pi.",
    finalAnswer: "x = pi/3, pi/2, 2pi/3, 3pi/2",
    equationLine: "Start from sin(2x) = sqrt(3)cos x.",
    identityLine: "Use sin(2x) = 2sin x cos x.",
    algebraLine: "Then 2sin x cos x = sqrt(3)cos x, so cos x(2sin x - sqrt(3)) = 0.",
    simplifiedLine: "Hence cos x = 0 or sin x = sqrt(3)/2.",
    rootLine: "Solve each branch on 0 <= x < 2pi.",
    branchOneLine: "cos x = 0 gives x = pi/2, 3pi/2.",
    branchTwoLine: "sin x = sqrt(3)/2 gives x = pi/3, 2pi/3.",
    angleOneLine: "All four values are in the required interval.",
    angleTwoLine: "No additional period shifts remain inside the interval.",
    checkLine: "Substitution confirms each value satisfies the equation.",
    tags: ["double angle", "equation", "factorisation"],
  }),
  makeHardSolve({
    questionText: "Solve cos(2x) = 2cos x - 1 for 0 <= x < 2pi.",
    finalAnswer: "x = 0, pi/2, 3pi/2",
    equationLine: "Start from cos(2x) = 2cos x - 1.",
    identityLine: "Use cos(2x) = 2cos^2 x - 1.",
    algebraLine: "Then 2cos^2 x - 1 = 2cos x - 1, so 2cos^2 x - 2cos x = 0.",
    simplifiedLine: "Factor: 2cos x(cos x - 1) = 0.",
    rootLine: "So cos x = 0 or cos x = 1.",
    branchOneLine: "cos x = 0 gives x = pi/2, 3pi/2.",
    branchTwoLine: "cos x = 1 gives x = 0.",
    angleOneLine: "All solutions lie in 0 <= x < 2pi.",
    angleTwoLine: "No other cosine branch values appear in this interval.",
    checkLine: "Substituting each angle verifies the equation.",
    tags: ["double angle", "equation", "cosine"],
  }),
  makeHardSolve({
    questionText: "Solve 2sin^2 x + 3cos x = 2 for 0 <= x < 2pi.",
    finalAnswer: "x = pi/2, 3pi/2",
    equationLine: "Start from 2sin^2 x + 3cos x = 2.",
    identityLine: "Use sin^2 x = 1 - cos^2 x.",
    algebraLine: "Then 2(1 - cos^2 x) + 3cos x = 2, so -2cos^2 x + 3cos x = 0.",
    simplifiedLine: "Factor: cos x(3 - 2cos x) = 0.",
    rootLine: "So cos x = 0 or cos x = 3/2.",
    branchOneLine: "cos x = 3/2 is impossible for real x.",
    branchTwoLine: "Hence only cos x = 0 remains.",
    angleOneLine: "cos x = 0 gives x = pi/2, 3pi/2.",
    angleTwoLine: "Both values are inside the required interval.",
    checkLine: "Substitution confirms both satisfy the original equation.",
    tags: ["double angle", "equation", "substitution"],
  }),
  makeHardSolve({
    questionText: "Solve 4cos^2 x - 4cos x + 1 = 0 for 0 <= x < 2pi.",
    finalAnswer: "x = pi/3, 5pi/3",
    equationLine: "Start from 4cos^2 x - 4cos x + 1 = 0.",
    identityLine: "Recognise a perfect square: (2cos x - 1)^2 = 0.",
    algebraLine: "So 2cos x - 1 = 0, hence cos x = 1/2.",
    simplifiedLine: "Now solve cos x = 1/2 on 0 <= x < 2pi.",
    rootLine: "Reference angle is pi/3.",
    branchOneLine: "Cosine is positive in quadrants I and IV.",
    branchTwoLine: "So x = pi/3 or x = 5pi/3.",
    angleOneLine: "Both values satisfy the interval restriction.",
    angleTwoLine: "No further period-shifted values fit the interval.",
    checkLine: "Substituting either value makes the square expression zero.",
    tags: ["double angle", "equation", "quadratic trig"],
  }),
  makeHardSolve({
    questionText: "Solve sin(x + pi/4) = sin(2x) for 0 <= x < 2pi.",
    finalAnswer: "x = pi/4, 11pi/12, 19pi/12",
    equationLine: "Start from sin(x + pi/4) = sin(2x).",
    identityLine: "For equal sine values, use two branches: A = B + 2kpi or A = pi - B + 2kpi.",
    algebraLine: "Branch 1: x + pi/4 = 2x + 2kpi gives x = pi/4 + 2kpi.",
    simplifiedLine: "Branch 2: x + pi/4 = pi - 2x + 2kpi gives 3x = 3pi/4 + 2kpi.",
    rootLine: "So branch 2 gives x = pi/4 + (2kpi)/3.",
    branchOneLine: "From branch 1 in interval: x = pi/4.",
    branchTwoLine: "From branch 2 in interval: x = pi/4, 11pi/12, 19pi/12.",
    angleOneLine: "Remove the repeated value pi/4.",
    angleTwoLine: "Keep distinct values within 0 <= x < 2pi.",
    checkLine: "Substituting each retained value confirms the equality.",
    tags: ["compound angles", "double angle", "equation"],
  }),
  makeHardSolve({
    questionText: "Solve cos(x - pi/6) = cos(2x) for 0 <= x < 2pi.",
    finalAnswer: "x = pi/18, 13pi/18, 25pi/18, 11pi/6",
    equationLine: "Start from cos(x - pi/6) = cos(2x).",
    identityLine: "For equal cosine values, use A = B + 2kpi or A = -B + 2kpi.",
    algebraLine: "Branch 1: x - pi/6 = 2x + 2kpi gives x = -pi/6 - 2kpi.",
    simplifiedLine: "Branch 2: x - pi/6 = -2x + 2kpi gives 3x = pi/6 + 2kpi.",
    rootLine: "So branch 2 gives x = pi/18 + (2kpi)/3.",
    branchOneLine: "Branch 1 contributes x = 11pi/6 in 0 <= x < 2pi.",
    branchTwoLine: "Branch 2 contributes x = pi/18, 13pi/18, 25pi/18.",
    angleOneLine: "All listed values are distinct and inside the interval.",
    angleTwoLine: "No further k values produce angles below 2pi.",
    checkLine: "Substituting each value confirms cos(x - pi/6) = cos(2x).",
    tags: ["compound angles", "double angle", "equation"],
  }),
  makeHardProof({
    questionText: "Prove that sin(x + y) + sin(x - y) = 2sin x cos y.",
    finalAnswer: "sin(x + y) + sin(x - y) = 2sin x cos y",
    lhsLine: "LHS = sin(x + y) + sin(x - y).",
    expandOne: "Use compound-angle expansion on the first term.",
    expandTwo: "sin(x + y) = sin x cos y + cos x sin y and sin(x - y) = sin x cos y - cos x sin y.",
    regroupOne: "Substitute both expansions into the LHS.",
    regroupTwo: "LHS = (sin x cos y + cos x sin y) + (sin x cos y - cos x sin y).",
    identityOne: "Group like terms in sin x cos y and cos x sin y.",
    identityTwo: "The +cos x sin y and -cos x sin y terms cancel.",
    simplifyOne: "This leaves LHS = sin x cos y + sin x cos y.",
    simplifyTwo: "So LHS = 2sin x cos y.",
    rhsLine: "This is exactly the RHS.",
    checkLine: "Therefore the identity is proved for all x and y.",
    tags: ["proof", "compound angles", "sum identities"],
  }),
  makeHardProof({
    questionText: "Prove that sin(x + y) - sin(x - y) = 2cos x sin y.",
    finalAnswer: "sin(x + y) - sin(x - y) = 2cos x sin y",
    lhsLine: "LHS = sin(x + y) - sin(x - y).",
    expandOne: "Expand each sine term using compound-angle formulae.",
    expandTwo: "sin(x + y) = sin x cos y + cos x sin y and sin(x - y) = sin x cos y - cos x sin y.",
    regroupOne: "Substitute into LHS and distribute the minus sign.",
    regroupTwo: "LHS = sin x cos y + cos x sin y - sin x cos y + cos x sin y.",
    identityOne: "The sin x cos y terms cancel.",
    identityTwo: "The two cos x sin y terms add.",
    simplifyOne: "So LHS = cos x sin y + cos x sin y.",
    simplifyTwo: "Hence LHS = 2cos x sin y.",
    rhsLine: "This equals the RHS exactly.",
    checkLine: "So the identity is established.",
    tags: ["proof", "compound angles", "difference identities"],
  }),
  makeHardProof({
    questionText: "Prove that cos(x + y) + cos(x - y) = 2cos x cos y.",
    finalAnswer: "cos(x + y) + cos(x - y) = 2cos x cos y",
    lhsLine: "LHS = cos(x + y) + cos(x - y).",
    expandOne: "Expand each cosine term with compound-angle formulas.",
    expandTwo: "cos(x + y) = cos x cos y - sin x sin y and cos(x - y) = cos x cos y + sin x sin y.",
    regroupOne: "Substitute these into LHS.",
    regroupTwo: "LHS = (cos x cos y - sin x sin y) + (cos x cos y + sin x sin y).",
    identityOne: "The -sin x sin y and +sin x sin y terms cancel.",
    identityTwo: "The remaining terms are both cos x cos y.",
    simplifyOne: "So LHS = cos x cos y + cos x cos y.",
    simplifyTwo: "Hence LHS = 2cos x cos y.",
    rhsLine: "This is the required RHS.",
    checkLine: "Therefore the identity is proved.",
    tags: ["proof", "compound angles", "sum identities"],
  }),
  makeHardProof({
    questionText: "Prove that cos(x - y) - cos(x + y) = 2sin x sin y.",
    finalAnswer: "cos(x - y) - cos(x + y) = 2sin x sin y",
    lhsLine: "LHS = cos(x - y) - cos(x + y).",
    expandOne: "Use compound-angle formulas for both cosine terms.",
    expandTwo: "cos(x - y) = cos x cos y + sin x sin y and cos(x + y) = cos x cos y - sin x sin y.",
    regroupOne: "Substitute into the LHS and distribute subtraction.",
    regroupTwo: "LHS = cos x cos y + sin x sin y - cos x cos y + sin x sin y.",
    identityOne: "The cos x cos y terms cancel.",
    identityTwo: "The two sin x sin y terms add.",
    simplifyOne: "So LHS = sin x sin y + sin x sin y.",
    simplifyTwo: "Hence LHS = 2sin x sin y.",
    rhsLine: "This matches the RHS exactly.",
    checkLine: "So the identity holds for all x and y.",
    tags: ["proof", "compound angles", "difference identities"],
  }),
  makeHardProof({
    questionText: "Prove that sin^2 x = (1 - cos(2x))/2.",
    finalAnswer: "sin^2 x = (1 - cos(2x))/2",
    lhsLine: "Start from cos(2x) = 1 - 2sin^2 x.",
    expandOne: "Rearrange to isolate the sine-square term.",
    expandTwo: "2sin^2 x = 1 - cos(2x).",
    regroupOne: "Divide both sides by 2.",
    regroupTwo: "sin^2 x = (1 - cos(2x))/2.",
    identityOne: "This is a direct consequence of the double-angle cosine identity.",
    identityTwo: "No further transformation is required.",
    simplifyOne: "The expression is already in the required exact form.",
    simplifyTwo: "So the left-hand side equals the right-hand side.",
    rhsLine: "Hence the identity is proved.",
    checkLine: "This form is useful for power-reduction in integration and solving.",
    tags: ["proof", "double angle", "identities"],
  }),
  makeHardProof({
    questionText: "Prove that cos^2 x = (1 + cos(2x))/2.",
    finalAnswer: "cos^2 x = (1 + cos(2x))/2",
    lhsLine: "Start from cos(2x) = 2cos^2 x - 1.",
    expandOne: "Rearrange to isolate cos^2 x.",
    expandTwo: "2cos^2 x = 1 + cos(2x).",
    regroupOne: "Divide through by 2.",
    regroupTwo: "cos^2 x = (1 + cos(2x))/2.",
    identityOne: "This follows directly from the double-angle identity for cosine.",
    identityTwo: "No approximation or extra assumptions are used.",
    simplifyOne: "The expression is in final power-reduction form.",
    simplifyTwo: "So the two sides are identical.",
    rhsLine: "Therefore the identity is proved.",
    checkLine: "It pairs with sin^2 x = (1 - cos 2x)/2 to reduce powers systematically.",
    tags: ["proof", "double angle", "identities"],
  }),
  makeHardProof({
    questionText: "Prove that tan(2x) = (2tan x)/(1 - tan^2 x).",
    finalAnswer: "tan(2x) = (2tan x)/(1 - tan^2 x)",
    lhsLine: "Start from tan(2x) = tan(x + x).",
    expandOne: "Use tan(A + B) = (tan A + tan B)/(1 - tan A tan B).",
    expandTwo: "Set A = x and B = x.",
    regroupOne: "Then tan(2x) = (tan x + tan x)/(1 - tan^2 x).",
    regroupTwo: "Combine the numerator terms.",
    identityOne: "tan x + tan x = 2tan x.",
    identityTwo: "Denominator remains 1 - tan^2 x.",
    simplifyOne: "So tan(2x) = (2tan x)/(1 - tan^2 x).",
    simplifyTwo: "This is the standard double-angle tangent formula.",
    rhsLine: "Hence LHS equals RHS.",
    checkLine: "The formula is valid where both sides are defined.",
    tags: ["proof", "double angle", "tangent"],
  }),
  makeHardProof({
    questionText: "Prove that sin(2x)cos(2x) = (1/2)sin(4x).",
    finalAnswer: "sin(2x)cos(2x) = (1/2)sin(4x)",
    lhsLine: "LHS = sin(2x)cos(2x).",
    expandOne: "Use the identity sin(2u) = 2sin u cos u.",
    expandTwo: "Set u = 2x, so sin(4x) = 2sin(2x)cos(2x).",
    regroupOne: "Rearrange this relation to isolate sin(2x)cos(2x).",
    regroupTwo: "sin(2x)cos(2x) = sin(4x)/2.",
    identityOne: "Write division by 2 as multiplication by 1/2.",
    identityTwo: "So sin(2x)cos(2x) = (1/2)sin(4x).",
    simplifyOne: "The left-hand side is now expressed as a single sine term.",
    simplifyTwo: "No extra simplification is needed.",
    rhsLine: "This is exactly the required RHS.",
    checkLine: "Therefore the identity is proved.",
    tags: ["proof", "double angle", "transforming products"],
  }),
  makeHardProof({
    questionText: "Derive the identity sin(3x) = 3sin x - 4sin^3 x.",
    finalAnswer: "sin(3x) = 3sin x - 4sin^3 x",
    lhsLine: "Start from sin(3x) = sin(2x + x).",
    expandOne: "Apply sin(A + B): sin(3x) = sin(2x)cos x + cos(2x)sin x.",
    expandTwo: "Use sin(2x) = 2sin x cos x and cos(2x) = 1 - 2sin^2 x.",
    regroupOne: "Substitute to get sin(3x) = (2sin x cos x)cos x + (1 - 2sin^2 x)sin x.",
    regroupTwo: "So sin(3x) = 2sin x cos^2 x + sin x - 2sin^3 x.",
    identityOne: "Replace cos^2 x with 1 - sin^2 x.",
    identityTwo: "Then sin(3x) = 2sin x(1 - sin^2 x) + sin x - 2sin^3 x.",
    simplifyOne: "Expand: sin(3x) = 2sin x - 2sin^3 x + sin x - 2sin^3 x.",
    simplifyTwo: "Combine like terms: sin(3x) = 3sin x - 4sin^3 x.",
    rhsLine: "This is the required triple-angle identity.",
    checkLine: "So the derivation is complete.",
    tags: ["proof", "compound angles", "double angle", "triple angle"],
  }),
  makeHardProof({
    questionText: "Derive the identity cos(3x) = 4cos^3 x - 3cos x.",
    finalAnswer: "cos(3x) = 4cos^3 x - 3cos x",
    lhsLine: "Start from cos(3x) = cos(2x + x).",
    expandOne: "Apply cos(A + B): cos(3x) = cos(2x)cos x - sin(2x)sin x.",
    expandTwo: "Use cos(2x) = 2cos^2 x - 1 and sin(2x) = 2sin x cos x.",
    regroupOne: "Substitute: cos(3x) = (2cos^2 x - 1)cos x - (2sin x cos x)sin x.",
    regroupTwo: "So cos(3x) = 2cos^3 x - cos x - 2sin^2 x cos x.",
    identityOne: "Replace sin^2 x with 1 - cos^2 x.",
    identityTwo: "Then cos(3x) = 2cos^3 x - cos x - 2(1 - cos^2 x)cos x.",
    simplifyOne: "Expand: cos(3x) = 2cos^3 x - cos x - 2cos x + 2cos^3 x.",
    simplifyTwo: "Combine like terms: cos(3x) = 4cos^3 x - 3cos x.",
    rhsLine: "This is the required triple-angle identity.",
    checkLine: "Therefore the derivation is complete.",
    tags: ["proof", "compound angles", "double angle", "triple angle"],
  }),
];

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
