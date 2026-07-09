import type { Difficulty, Question, SolutionStep } from "@/lib/types";

const LEVEL = "A-Level Further Maths";
const TOPIC = "Further Maths Year 2: Pure (Core Pure 2)";
const SUBTOPIC = "Hyperbolic functions";
const SUBTOPIC_ID = "fm.y2.pure.hyperbolic-functions";

type StepInput = Omit<SolutionStep, "stepNumber" | "diagram">;

function steps(items: StepInput[]): SolutionStep[] {
  return items.map((item, index) => ({
    stepNumber: index + 1,
    diagram: null,
    ...item,
  }));
}

function question(
  number: number,
  difficulty: Difficulty,
  marks: number,
  tags: string[],
  answerType: string,
  questionText: string,
  solutionSteps: StepInput[],
  finalAnswer: string,
): Question {
  return {
    id: `${SUBTOPIC_ID}.q${String(number).padStart(3, "0")}`,
    level: LEVEL,
    topic: TOPIC,
    subtopic: SUBTOPIC,
    subtopicId: SUBTOPIC_ID,
    difficulty,
    marks,
    answerType,
    tags,
    questionText,
    questionDiagram: null,
    workedSolution: {
      steps: steps(solutionSteps),
      finalAnswer,
    },
  };
}

type EvaluationSpec = {
  prompt: string;
  startingExpression: string;
  definitionLine: string;
  substitutionLine: string;
  simplificationLine: string;
  result: string;
  tags: string[];
};

function evaluationQuestion(number: number, spec: EvaluationSpec): Question {
  return question(
    number,
    "Easy",
    4,
    spec.tags,
    "exact",
    spec.prompt,
    [
      {
        description: "Recall the relevant hyperbolic definition",
        workingLatex: spec.definitionLine,
        explanation: "Hyperbolic functions are defined using exponentials, so exact values usually come from rewriting them in terms of powers of $e$.",
      },
      {
        description: "Set up the expression",
        workingLatex: spec.startingExpression,
        explanation: "Writing the expression before substituting keeps the target of the calculation clear.",
      },
      {
        description: "Substitute into the exponential form",
        workingLatex: spec.substitutionLine,
        explanation: "This step changes the hyperbolic expression into ordinary exponential arithmetic.",
      },
      {
        description: "Use the given logarithm or exponential value",
        workingLatex: spec.simplificationLine,
        explanation: "The special input has been chosen so that the exponentials simplify exactly.",
      },
      {
        description: "Simplify the arithmetic",
        workingLatex: `${spec.startingExpression}=${spec.result}`,
        explanation: "Combining the exact fractions gives the value in its simplest useful form.",
      },
      {
        description: "Check the type of value",
        workingLatex: spec.result,
        explanation: "The result is exact, so there is no need to use a decimal approximation.",
      },
      {
        description: "State the exact answer",
        workingLatex: `\\boxed{${spec.result}}`,
        explanation: "This completes the evaluation using the exponential definition.",
      },
    ],
    `$${spec.result}$`,
  );
}

type IdentitySpec = {
  statement: string;
  leftSide: string;
  substitutionLine: string;
  expansionLine: string;
  simplificationLine: string;
  result: string;
  tags: string[];
};

function identityQuestion(number: number, spec: IdentitySpec): Question {
  return question(
    number,
    "Intermediate",
    6,
    spec.tags,
    "proof",
    `Prove that $${spec.statement}$.`,
    [
      {
        description: "Start with the left-hand side",
        workingLatex: spec.leftSide,
        explanation: "For an identity, it is usually clearest to transform one side until it matches the other.",
      },
      {
        description: "Recall the exponential definitions",
        workingLatex: "\\sinh x=\\frac{e^x-e^{-x}}{2},\\quad \\cosh x=\\frac{e^x+e^{-x}}{2}",
        explanation: "These definitions reduce the identity to algebra with exponentials.",
      },
      {
        description: "Substitute the definitions",
        workingLatex: spec.substitutionLine,
        explanation: "Replacing the hyperbolic functions exposes the cancellation or collection that proves the result.",
      },
      {
        description: "Expand the numerator",
        workingLatex: spec.expansionLine,
        explanation: "Expanding carefully makes the opposite exponential terms visible.",
      },
      {
        description: "Simplify the expression",
        workingLatex: spec.simplificationLine,
        explanation: "The defining feature of these identities is that the exponential terms combine into a much simpler expression.",
      },
      {
        description: "Match the right-hand side",
        workingLatex: `${spec.leftSide}=${spec.result}`,
        explanation: "The simplified left-hand side is exactly the expression required on the right-hand side.",
      },
      {
        description: "Check that the transformation is reversible",
        workingLatex: "\\text{Only definitions and algebraic simplification have been used.}",
        explanation: "Because no division by a variable expression or squaring step has introduced restrictions, the identity remains valid wherever the functions are defined.",
      },
      {
        description: "State the validity of the identity",
        workingLatex: "\\text{The equality holds for all allowed real }x.",
        explanation: "A hyperbolic identity is a general statement, so the conclusion should make clear that it is not just true for one value of $x$.",
      },
      {
        description: "Conclude the proof",
        workingLatex: `\\boxed{${spec.statement}}`,
        explanation: "Since one side has been transformed into the other, the identity is proved.",
      },
    ],
    `$${spec.statement}$`,
  );
}

type EquationSpec = {
  equation: string;
  firstStep: string;
  transformed: string;
  solvedLine: string;
  domainLine: string;
  result: string;
  tags: string[];
};

function equationQuestion(number: number, spec: EquationSpec): Question {
  return question(
    number,
    "Intermediate",
    7,
    spec.tags,
    "exact",
    `Solve $${spec.equation}$ for real $x$.`,
    [
      {
        description: "Identify the hyperbolic equation",
        workingLatex: spec.equation,
        explanation: "The function involved determines whether the solution comes from a logarithmic inverse or from rewriting with $e^x$.",
      },
      {
        description: "Rewrite using a standard inverse or exponential form",
        workingLatex: spec.firstStep,
        explanation: "Hyperbolic equations become manageable once they are converted into logarithms or ordinary algebra.",
      },
      {
        description: "Obtain an equivalent equation",
        workingLatex: spec.transformed,
        explanation: "This equivalent form contains the same solutions but is easier to solve exactly.",
      },
      {
        description: "Solve the algebraic or logarithmic equation",
        workingLatex: spec.solvedLine,
        explanation: "Solving this simpler equation gives the candidate value or values of $x$.",
      },
      {
        description: "Check the real-domain condition",
        workingLatex: spec.domainLine,
        explanation: "Some hyperbolic equations, especially those involving $\\cosh x$ or $\\operatorname{artanh}x$, require a domain check.",
      },
      {
        description: "Collect the solution set",
        workingLatex: spec.result,
        explanation: "Only values that satisfy the original real equation are retained.",
      },
      {
        description: "Substitute back mentally",
        workingLatex: spec.equation,
        explanation: "A quick check against the original equation guards against mistakes from logarithms, reciprocals, or quadratic substitutions.",
      },
      {
        description: "Confirm no solutions have been lost",
        workingLatex: spec.domainLine,
        explanation: "The domain check also confirms whether the hyperbolic function is one-to-one or whether paired solutions are expected.",
      },
      {
        description: "State the exact answer",
        workingLatex: `\\boxed{${spec.result}}`,
        explanation: "Exact logarithmic form is preferred because it preserves the full precision of the solution.",
      },
    ],
    `$${spec.result}$`,
  );
}

type DerivativeSpec = {
  functionLatex: string;
  ruleLine: string;
  chainLine: string;
  result: string;
  tags: string[];
};

function derivativeQuestion(number: number, spec: DerivativeSpec): Question {
  return question(
    number,
    "Easy",
    4,
    spec.tags,
    "expression",
    `Differentiate $y=${spec.functionLatex}$ with respect to $x$.`,
    [
      {
        description: "Identify the hyperbolic function",
        workingLatex: `y=${spec.functionLatex}`,
        explanation: "The derivative follows from the standard hyperbolic differentiation rules, with the chain rule if the input is not just $x$.",
      },
      {
        description: "Recall the standard rule",
        workingLatex: spec.ruleLine,
        explanation: "Hyperbolic derivatives cycle between $\\sinh$ and $\\cosh$, while $\\tanh$ differentiates to $\\operatorname{sech}^{2}$.",
      },
      {
        description: "Identify any inner function",
        workingLatex: spec.chainLine,
        explanation: "The chain rule accounts for the rate at which the inside of the hyperbolic function changes.",
      },
      {
        description: "Apply the differentiation rule",
        workingLatex: `\\frac{dy}{dx}=${spec.result}`,
        explanation: "Combining the standard rule with the chain-rule factor gives the derivative.",
      },
      {
        description: "Check for simplification",
        workingLatex: spec.result,
        explanation: "The expression is already in a compact hyperbolic form.",
      },
      {
        description: "Use correct notation",
        workingLatex: `\\dfrac{dy}{dx}=${spec.result}`,
        explanation: "Clear derivative notation makes it explicit that the answer is with respect to $x$.",
      },
      {
        description: "State the derivative",
        workingLatex: `\\boxed{${spec.result}}`,
        explanation: "This is the required derivative.",
      },
    ],
    `$${spec.result}$`,
  );
}

type IntegralSpec = {
  integrand: string;
  ruleLine: string;
  chainLine: string;
  result: string;
  tags: string[];
};

function integralQuestion(number: number, spec: IntegralSpec): Question {
  return question(
    number,
    "Easy",
    4,
    spec.tags,
    "expression",
    `Find $\\displaystyle\\int ${spec.integrand}\\,dx$.`,
    [
      {
        description: "Recognise the hyperbolic integral",
        workingLatex: `\\int ${spec.integrand}\\,dx`,
        explanation: "The integrand is one of the standard hyperbolic forms, possibly with a linear input.",
      },
      {
        description: "Recall the matching rule",
        workingLatex: spec.ruleLine,
        explanation: "Hyperbolic integration reverses the corresponding differentiation rule.",
      },
      {
        description: "Account for any inner derivative",
        workingLatex: spec.chainLine,
        explanation: "If the input is $ax+b$, the antiderivative needs a factor of $1/a$.",
      },
      {
        description: "Write the antiderivative",
        workingLatex: `\\int ${spec.integrand}\\,dx=${spec.result}+C`,
        explanation: "The antiderivative follows once the scaling has been included.",
      },
      {
        description: "Check by differentiating",
        workingLatex: `\\dfrac{d}{dx}\\left(${spec.result}\\right)=${spec.integrand}`,
        explanation: "A quick derivative check confirms that the chain-rule factor has not been missed.",
      },
      {
        description: "Include the constant of integration",
        workingLatex: `${spec.result}+C`,
        explanation: "An indefinite integral represents a family of functions, so the constant is required.",
      },
      {
        description: "State the answer",
        workingLatex: `\\boxed{${spec.result}+C}`,
        explanation: "This is the simplest exact antiderivative.",
      },
    ],
    `$${spec.result}+C$`,
  );
}

type InverseSpec = {
  prompt: string;
  standardForm: string;
  substitutionLine: string;
  workingLine: string;
  result: string;
  tags: string[];
};

function inverseQuestion(number: number, spec: InverseSpec): Question {
  return question(
    number,
    "Intermediate",
    6,
    spec.tags,
    "expression",
    spec.prompt,
    [
      {
        description: "Identify the inverse hyperbolic form",
        workingLatex: spec.standardForm,
        explanation: "Inverse hyperbolic functions have standard logarithmic and differential forms, much like inverse trigonometric functions.",
      },
      {
        description: "Match the given expression",
        workingLatex: spec.substitutionLine,
        explanation: "Matching the expression to the standard form shows which scaling or substitution is needed.",
      },
      {
        description: "Apply the standard result",
        workingLatex: spec.workingLine,
        explanation: "The standard result does the main work once the expression is in the right shape.",
      },
      {
        description: "Simplify the expression",
        workingLatex: spec.result,
        explanation: "Simplifying gives a clean exact answer and makes domain restrictions easier to see.",
      },
      {
        description: "Track any scale factor",
        workingLatex: spec.substitutionLine,
        explanation: "Inverse hyperbolic results are sensitive to scaling inside the function, so the substitution is checked before finalising.",
      },
      {
        description: "Check the domain",
        workingLatex: "\\text{The stated real domain is satisfied.}",
        explanation: "Inverse hyperbolic expressions can have restrictions, so the real-valued domain must be considered.",
      },
      {
        description: "Verify against the standard form",
        workingLatex: spec.standardForm,
        explanation: "Comparing back to the standard form confirms that the answer has the correct inverse hyperbolic type.",
      },
      {
        description: "Write the result cleanly",
        workingLatex: spec.result,
        explanation: "The final form should be compact enough to use in later algebra or calculus.",
      },
      {
        description: "State the final result",
        workingLatex: `\\boxed{${spec.result}}`,
        explanation: "This is the required exact result in inverse hyperbolic or logarithmic form.",
      },
    ],
    `$${spec.result}$`,
  );
}

type ApplicationSpec = {
  prompt: string;
  setup: string;
  identity: string;
  working: string;
  derivativeOrIntegral: string;
  simplification: string;
  result: string;
  tags: string[];
};

function applicationQuestion(number: number, spec: ApplicationSpec): Question {
  return question(
    number,
    "Hard",
    9,
    spec.tags,
    "written",
    spec.prompt,
    [
      {
        description: "Set up the problem",
        workingLatex: spec.setup,
        explanation: "A harder hyperbolic problem usually begins by choosing the identity or calculus rule that reveals the structure.",
      },
      {
        description: "Recall the key identity",
        workingLatex: spec.identity,
        explanation: "The identity is the main simplification tool because it converts an awkward expression into a standard form.",
      },
      {
        description: "Substitute the identity",
        workingLatex: spec.working,
        explanation: "Replacing the original expression by the identity creates a route through familiar algebra or calculus.",
      },
      {
        description: "Apply the required calculus or algebra",
        workingLatex: spec.derivativeOrIntegral,
        explanation: "This is the decisive step where the transformed expression is differentiated, integrated, or solved.",
      },
      {
        description: "Simplify the result",
        workingLatex: spec.simplification,
        explanation: "Simplification keeps the final answer exact and avoids unnecessary exponential clutter.",
      },
      {
        description: "Check consistency with the original problem",
        workingLatex: spec.result,
        explanation: "The result must answer the original question, not just the transformed intermediate version.",
      },
      {
        description: "Interpret any constant or sign choice",
        workingLatex: "\\text{Choose the value consistent with the given conditions.}",
        explanation: "Hyperbolic equations can introduce sign choices, so the conditions decide which branch is valid.",
      },
      {
        description: "Check for hidden restrictions",
        workingLatex: "\\text{Use the real domains of the hyperbolic functions involved.}",
        explanation: "Harder questions often combine identities and inverses, so domain restrictions must be checked before accepting the result.",
      },
      {
        description: "Check by differentiating, integrating or substituting",
        workingLatex: spec.setup,
        explanation: "Returning to the original form confirms that the transformed calculation answers the question that was asked.",
      },
      {
        description: "Remove unnecessary intermediate notation",
        workingLatex: spec.simplification,
        explanation: "The final answer should not depend on temporary variables or unused identities.",
      },
      {
        description: "Confirm the exact form is simplest",
        workingLatex: spec.result,
        explanation: "Leaving the result exact avoids rounding and keeps logarithmic or hyperbolic structure visible.",
      },
      {
        description: "Write the result in exact form",
        workingLatex: spec.result,
        explanation: "Exact hyperbolic and logarithmic forms are preferable to rounded decimals.",
      },
      {
        description: "State the final answer",
        workingLatex: `\\boxed{${spec.result}}`,
        explanation: "This completes the multi-step hyperbolic calculation.",
      },
    ],
    `$${spec.result}$`,
  );
}

const evaluationSpecs: EvaluationSpec[] = [
  { prompt: "Use the definition of $\\sinh x$ to find the exact value of $\\sinh(\\ln 2)$.", startingExpression: "\\sinh(\\ln 2)", definitionLine: "\\sinh x=\\dfrac{e^x-e^{-x}}{2}", substitutionLine: "\\sinh(\\ln 2)=\\dfrac{e^{\\ln2}-e^{-\\ln2}}{2}", simplificationLine: "\\dfrac{2-\\frac12}{2}", result: "\\frac34", tags: ["hyperbolic functions", "definitions", "exact values"] },
  { prompt: "Use the definition of $\\cosh x$ to find the exact value of $\\cosh(\\ln 2)$.", startingExpression: "\\cosh(\\ln 2)", definitionLine: "\\cosh x=\\dfrac{e^x+e^{-x}}{2}", substitutionLine: "\\cosh(\\ln 2)=\\dfrac{e^{\\ln2}+e^{-\\ln2}}{2}", simplificationLine: "\\dfrac{2+\\frac12}{2}", result: "\\frac54", tags: ["hyperbolic functions", "definitions", "exact values"] },
  { prompt: "Use the definition of $\\tanh x$ to find the exact value of $\\tanh(\\ln 3)$.", startingExpression: "\\tanh(\\ln 3)", definitionLine: "\\tanh x=\\dfrac{e^x-e^{-x}}{e^x+e^{-x}}", substitutionLine: "\\tanh(\\ln3)=\\dfrac{3-\\frac13}{3+\\frac13}", simplificationLine: "\\dfrac{\\frac83}{\\frac{10}{3}}", result: "\\frac45", tags: ["hyperbolic functions", "definitions", "tanh"] },
  { prompt: "Express $2\\cosh x+\\sinh x$ in terms of $e^x$ and $e^{-x}$.", startingExpression: "2\\cosh x+\\sinh x", definitionLine: "\\sinh x=\\dfrac{e^x-e^{-x}}{2},\\quad \\cosh x=\\dfrac{e^x+e^{-x}}{2}", substitutionLine: "2\\cosh x+\\sinh x=(e^x+e^{-x})+\\dfrac{e^x-e^{-x}}{2}", simplificationLine: "\\dfrac{3e^x+e^{-x}}{2}", result: "\\frac{3e^x+e^{-x}}{2}", tags: ["hyperbolic functions", "definitions", "exponentials"] },
  { prompt: "Express $\\cosh x-\\sinh x$ in terms of $e^x$ and $e^{-x}$.", startingExpression: "\\cosh x-\\sinh x", definitionLine: "\\sinh x=\\dfrac{e^x-e^{-x}}{2},\\quad \\cosh x=\\dfrac{e^x+e^{-x}}{2}", substitutionLine: "\\cosh x-\\sinh x=\\dfrac{e^x+e^{-x}}{2}-\\dfrac{e^x-e^{-x}}{2}", simplificationLine: "\\dfrac{2e^{-x}}{2}", result: "e^{-x}", tags: ["hyperbolic functions", "definitions", "exponentials"] },
  { prompt: "Find the exact value of $\\sinh(2\\ln 2)$.", startingExpression: "\\sinh(2\\ln2)", definitionLine: "\\sinh x=\\dfrac{e^x-e^{-x}}{2}", substitutionLine: "\\sinh(2\\ln2)=\\dfrac{e^{2\\ln2}-e^{-2\\ln2}}{2}", simplificationLine: "\\dfrac{4-\\frac14}{2}", result: "\\frac{15}{8}", tags: ["hyperbolic functions", "definitions", "exact values"] },
  { prompt: "Find the exact value of $\\cosh(\\ln 4)$.", startingExpression: "\\cosh(\\ln4)", definitionLine: "\\cosh x=\\dfrac{e^x+e^{-x}}{2}", substitutionLine: "\\cosh(\\ln4)=\\dfrac{4+\\frac14}{2}", simplificationLine: "\\dfrac{\\frac{17}{4}}{2}", result: "\\frac{17}{8}", tags: ["hyperbolic functions", "definitions", "exact values"] },
  { prompt: "Show that $\\sinh x+\\cosh x=e^x$.", startingExpression: "\\sinh x+\\cosh x", definitionLine: "\\sinh x=\\dfrac{e^x-e^{-x}}{2},\\quad \\cosh x=\\dfrac{e^x+e^{-x}}{2}", substitutionLine: "\\sinh x+\\cosh x=\\dfrac{e^x-e^{-x}}{2}+\\dfrac{e^x+e^{-x}}{2}", simplificationLine: "\\dfrac{2e^x}{2}", result: "e^x", tags: ["hyperbolic functions", "definitions", "exponentials"] },
  { prompt: "Show that $\\cosh x+3\\sinh x=2e^x-e^{-x}$.", startingExpression: "\\cosh x+3\\sinh x", definitionLine: "\\sinh x=\\dfrac{e^x-e^{-x}}{2},\\quad \\cosh x=\\dfrac{e^x+e^{-x}}{2}", substitutionLine: "\\cosh x+3\\sinh x=\\dfrac{e^x+e^{-x}}{2}+\\dfrac{3e^x-3e^{-x}}{2}", simplificationLine: "\\dfrac{4e^x-2e^{-x}}{2}", result: "2e^x-e^{-x}", tags: ["hyperbolic functions", "definitions", "exponentials"] },
  { prompt: "Find the exact value of $\\tanh(\\ln 2)$.", startingExpression: "\\tanh(\\ln2)", definitionLine: "\\tanh x=\\dfrac{e^x-e^{-x}}{e^x+e^{-x}}", substitutionLine: "\\tanh(\\ln2)=\\dfrac{2-\\frac12}{2+\\frac12}", simplificationLine: "\\dfrac{\\frac32}{\\frac52}", result: "\\frac35", tags: ["hyperbolic functions", "definitions", "tanh"] },
];

const identitySpecs: IdentitySpec[] = [
  { statement: "\\cosh^2x-\\sinh^2x=1", leftSide: "\\cosh^2x-\\sinh^2x", substitutionLine: "\\left(\\frac{e^x+e^{-x}}{2}\\right)^2-\\left(\\frac{e^x-e^{-x}}{2}\\right)^2", expansionLine: "\\frac{e^{2x}+2+e^{-2x}-(e^{2x}-2+e^{-2x})}{4}", simplificationLine: "\\frac{4}{4}=1", result: "1", tags: ["hyperbolic identities", "proof", "definitions"] },
  { statement: "1-\\tanh^2x=\\operatorname{sech}^2x", leftSide: "1-\\tanh^2x", substitutionLine: "1-\\left(\\frac{\\sinh x}{\\cosh x}\\right)^2", expansionLine: "\\frac{\\cosh^2x-\\sinh^2x}{\\cosh^2x}", simplificationLine: "\\frac{1}{\\cosh^2x}=\\operatorname{sech}^2x", result: "\\operatorname{sech}^2x", tags: ["hyperbolic identities", "tanh", "sech"] },
  { statement: "\\cosh 2x=\\cosh^2x+\\sinh^2x", leftSide: "\\cosh^2x+\\sinh^2x", substitutionLine: "\\left(\\frac{e^x+e^{-x}}{2}\\right)^2+\\left(\\frac{e^x-e^{-x}}{2}\\right)^2", expansionLine: "\\frac{e^{2x}+2+e^{-2x}+e^{2x}-2+e^{-2x}}{4}", simplificationLine: "\\frac{e^{2x}+e^{-2x}}{2}=\\cosh 2x", result: "\\cosh 2x", tags: ["double angle", "hyperbolic identities", "proof"] },
  { statement: "\\sinh 2x=2\\sinh x\\cosh x", leftSide: "2\\sinh x\\cosh x", substitutionLine: "2\\left(\\frac{e^x-e^{-x}}{2}\\right)\\left(\\frac{e^x+e^{-x}}{2}\\right)", expansionLine: "\\frac{(e^x-e^{-x})(e^x+e^{-x})}{2}", simplificationLine: "\\frac{e^{2x}-e^{-2x}}{2}=\\sinh 2x", result: "\\sinh 2x", tags: ["double angle", "hyperbolic identities", "proof"] },
  { statement: "\\cosh^2x=\\frac{\\cosh 2x+1}{2}", leftSide: "\\cosh^2x", substitutionLine: "\\cosh^2x=\\frac{(\\cosh^2x+\\sinh^2x)+(\\cosh^2x-\\sinh^2x)}{2}", expansionLine: "\\frac{\\cosh 2x+1}{2}", simplificationLine: "\\cosh^2x=\\frac{\\cosh 2x+1}{2}", result: "\\frac{\\cosh 2x+1}{2}", tags: ["double angle", "hyperbolic identities"] },
  { statement: "\\sinh^2x=\\frac{\\cosh 2x-1}{2}", leftSide: "\\sinh^2x", substitutionLine: "\\sinh^2x=\\frac{(\\cosh^2x+\\sinh^2x)-(\\cosh^2x-\\sinh^2x)}{2}", expansionLine: "\\frac{\\cosh 2x-1}{2}", simplificationLine: "\\sinh^2x=\\frac{\\cosh 2x-1}{2}", result: "\\frac{\\cosh 2x-1}{2}", tags: ["double angle", "hyperbolic identities"] },
  { statement: "\\tanh 2x=\\frac{2\\tanh x}{1+\\tanh^2x}", leftSide: "\\tanh 2x", substitutionLine: "\\tanh 2x=\\frac{\\sinh 2x}{\\cosh 2x}", expansionLine: "\\frac{2\\sinh x\\cosh x}{\\cosh^2x+\\sinh^2x}", simplificationLine: "\\frac{2\\tanh x}{1+\\tanh^2x}", result: "\\frac{2\\tanh x}{1+\\tanh^2x}", tags: ["double angle", "tanh", "hyperbolic identities"] },
  { statement: "\\operatorname{coth}^2x-1=\\operatorname{csch}^2x", leftSide: "\\operatorname{coth}^2x-1", substitutionLine: "\\left(\\frac{\\cosh x}{\\sinh x}\\right)^2-1", expansionLine: "\\frac{\\cosh^2x-\\sinh^2x}{\\sinh^2x}", simplificationLine: "\\frac{1}{\\sinh^2x}=\\operatorname{csch}^2x", result: "\\operatorname{csch}^2x", tags: ["reciprocal hyperbolic", "identities", "proof"] },
  { statement: "\\cosh(x+y)=\\cosh x\\cosh y+\\sinh x\\sinh y", leftSide: "\\cosh x\\cosh y+\\sinh x\\sinh y", substitutionLine: "\\frac{(e^x+e^{-x})(e^y+e^{-y})+(e^x-e^{-x})(e^y-e^{-y})}{4}", expansionLine: "\\frac{2e^{x+y}+2e^{-(x+y)}}{4}", simplificationLine: "\\frac{e^{x+y}+e^{-(x+y)}}{2}=\\cosh(x+y)", result: "\\cosh(x+y)", tags: ["addition formula", "hyperbolic identities", "proof"] },
  { statement: "\\sinh(x+y)=\\sinh x\\cosh y+\\cosh x\\sinh y", leftSide: "\\sinh x\\cosh y+\\cosh x\\sinh y", substitutionLine: "\\frac{(e^x-e^{-x})(e^y+e^{-y})+(e^x+e^{-x})(e^y-e^{-y})}{4}", expansionLine: "\\frac{2e^{x+y}-2e^{-(x+y)}}{4}", simplificationLine: "\\frac{e^{x+y}-e^{-(x+y)}}{2}=\\sinh(x+y)", result: "\\sinh(x+y)", tags: ["addition formula", "hyperbolic identities", "proof"] },
];

const equationSpecs: EquationSpec[] = [
  { equation: "\\sinh x=\\frac34", firstStep: "x=\\operatorname{arsinh}\\left(\\frac34\\right)", transformed: "x=\\ln\\left(\\frac34+\\sqrt{\\frac{9}{16}+1}\\right)", solvedLine: "x=\\ln\\left(\\frac34+\\frac54\\right)", domainLine: "\\sinh x\\text{ is one-to-one on }\\mathbb{R}", result: "\\ln2", tags: ["hyperbolic equations", "sinh", "inverse hyperbolic"] },
  { equation: "\\cosh x=\\frac54", firstStep: "e^x+e^{-x}=\\frac52", transformed: "2e^{2x}-5e^x+2=0", solvedLine: "e^x=2\\text{ or }e^x=\\frac12", domainLine: "\\cosh x\\ge1\\text{ and is even}", result: "x=\\pm\\ln2", tags: ["hyperbolic equations", "cosh", "quadratics"] },
  { equation: "\\tanh x=\\frac35", firstStep: "x=\\operatorname{artanh}\\left(\\frac35\\right)", transformed: "x=\\frac12\\ln\\left(\\frac{1+\\frac35}{1-\\frac35}\\right)", solvedLine: "x=\\frac12\\ln4", domainLine: "\\left|\\frac35\\right|<1", result: "\\ln2", tags: ["hyperbolic equations", "tanh", "inverse hyperbolic"] },
  { equation: "\\sinh 2x=3", firstStep: "2x=\\operatorname{arsinh}3", transformed: "2x=\\ln(3+\\sqrt{10})", solvedLine: "x=\\frac12\\ln(3+\\sqrt{10})", domainLine: "\\sinh 2x\\text{ is one-to-one}", result: "\\frac12\\ln(3+\\sqrt{10})", tags: ["hyperbolic equations", "sinh", "chain rule"] },
  { equation: "\\cosh(2x)=\\frac{17}{8}", firstStep: "e^{2x}+e^{-2x}=\\frac{17}{4}", transformed: "4e^{4x}-17e^{2x}+4=0", solvedLine: "e^{2x}=4\\text{ or }e^{2x}=\\frac14", domainLine: "\\cosh(2x)\\text{ is even in }x", result: "x=\\pm\\ln2", tags: ["hyperbolic equations", "cosh", "quadratics"] },
  { equation: "2\\tanh x=1", firstStep: "\\tanh x=\\frac12", transformed: "x=\\frac12\\ln\\left(\\frac{1+\\frac12}{1-\\frac12}\\right)", solvedLine: "x=\\frac12\\ln3", domainLine: "\\left|\\frac12\\right|<1", result: "\\frac12\\ln3", tags: ["hyperbolic equations", "tanh"] },
  { equation: "\\cosh x+\\sinh x=5", firstStep: "\\cosh x+\\sinh x=e^x", transformed: "e^x=5", solvedLine: "x=\\ln5", domainLine: "e^x>0\\text{ for all real }x", result: "\\ln5", tags: ["hyperbolic equations", "definitions"] },
  { equation: "\\cosh x-\\sinh x=\\frac14", firstStep: "\\cosh x-\\sinh x=e^{-x}", transformed: "e^{-x}=\\frac14", solvedLine: "-x=\\ln\\frac14", domainLine: "e^{-x}>0\\text{ for all real }x", result: "\\ln4", tags: ["hyperbolic equations", "definitions"] },
  { equation: "\\operatorname{sech}x=\\frac45", firstStep: "\\cosh x=\\frac54", transformed: "2e^{2x}-5e^x+2=0", solvedLine: "e^x=2\\text{ or }e^x=\\frac12", domainLine: "0<\\operatorname{sech}x\\le1", result: "x=\\pm\\ln2", tags: ["reciprocal hyperbolic", "sech", "equations"] },
  { equation: "\\operatorname{coth}x=2", firstStep: "\\tanh x=\\frac12", transformed: "x=\\operatorname{artanh}\\frac12", solvedLine: "x=\\frac12\\ln3", domainLine: "x\\ne0\\text{ and }|\\tanh x|<1", result: "\\frac12\\ln3", tags: ["reciprocal hyperbolic", "coth", "equations"] },
];

const derivativeSpecs: DerivativeSpec[] = [
  { functionLatex: "\\sinh(3x)", ruleLine: "\\dfrac{d}{du}\\sinh u=\\cosh u", chainLine: "u=3x,\\quad \\dfrac{du}{dx}=3", result: "3\\cosh(3x)", tags: ["hyperbolic differentiation", "sinh", "chain rule"] },
  { functionLatex: "\\cosh(2x-1)", ruleLine: "\\dfrac{d}{du}\\cosh u=\\sinh u", chainLine: "u=2x-1,\\quad \\dfrac{du}{dx}=2", result: "2\\sinh(2x-1)", tags: ["hyperbolic differentiation", "cosh", "chain rule"] },
  { functionLatex: "\\tanh(4x)", ruleLine: "\\dfrac{d}{du}\\tanh u=\\operatorname{sech}^2u", chainLine: "u=4x,\\quad \\dfrac{du}{dx}=4", result: "4\\operatorname{sech}^2(4x)", tags: ["hyperbolic differentiation", "tanh", "chain rule"] },
  { functionLatex: "x\\cosh x", ruleLine: "\\dfrac{d}{dx}\\cosh x=\\sinh x", chainLine: "\\dfrac{d}{dx}(uv)=u'v+uv'", result: "\\cosh x+x\\sinh x", tags: ["hyperbolic differentiation", "product rule"] },
  { functionLatex: "x\\sinh(2x)", ruleLine: "\\dfrac{d}{dx}\\sinh(2x)=2\\cosh(2x)", chainLine: "\\dfrac{d}{dx}(uv)=u'v+uv'", result: "\\sinh(2x)+2x\\cosh(2x)", tags: ["hyperbolic differentiation", "product rule", "chain rule"] },
  { functionLatex: "\\ln(\\cosh x)", ruleLine: "\\dfrac{d}{dx}\\ln u=\\dfrac{u'}{u}", chainLine: "u=\\cosh x,\\quad u'=\\sinh x", result: "\\tanh x", tags: ["hyperbolic differentiation", "logarithms", "tanh"] },
  { functionLatex: "\\operatorname{sech}(3x)", ruleLine: "\\dfrac{d}{du}\\operatorname{sech}u=-\\operatorname{sech}u\\tanh u", chainLine: "u=3x,\\quad \\dfrac{du}{dx}=3", result: "-3\\operatorname{sech}(3x)\\tanh(3x)", tags: ["reciprocal hyperbolic", "differentiation", "chain rule"] },
  { functionLatex: "\\operatorname{csch}(2x)", ruleLine: "\\dfrac{d}{du}\\operatorname{csch}u=-\\operatorname{csch}u\\operatorname{coth}u", chainLine: "u=2x,\\quad \\dfrac{du}{dx}=2", result: "-2\\operatorname{csch}(2x)\\operatorname{coth}(2x)", tags: ["reciprocal hyperbolic", "differentiation", "chain rule"] },
  { functionLatex: "\\operatorname{coth}(5x)", ruleLine: "\\dfrac{d}{du}\\operatorname{coth}u=-\\operatorname{csch}^2u", chainLine: "u=5x,\\quad \\dfrac{du}{dx}=5", result: "-5\\operatorname{csch}^2(5x)", tags: ["reciprocal hyperbolic", "differentiation", "chain rule"] },
  { functionLatex: "\\sinh^2x", ruleLine: "\\dfrac{d}{dx}\\sinh x=\\cosh x", chainLine: "y=(\\sinh x)^2", result: "2\\sinh x\\cosh x", tags: ["hyperbolic differentiation", "chain rule", "identities"] },
];

const integralSpecs: IntegralSpec[] = [
  { integrand: "\\sinh(3x)", ruleLine: "\\int \\sinh u\\,du=\\cosh u", chainLine: "u=3x\\Rightarrow du=3\\,dx", result: "\\frac13\\cosh(3x)", tags: ["hyperbolic integration", "sinh", "chain rule"] },
  { integrand: "\\cosh(2x-1)", ruleLine: "\\int \\cosh u\\,du=\\sinh u", chainLine: "u=2x-1\\Rightarrow du=2\\,dx", result: "\\frac12\\sinh(2x-1)", tags: ["hyperbolic integration", "cosh", "chain rule"] },
  { integrand: "\\operatorname{sech}^2(5x)", ruleLine: "\\int \\operatorname{sech}^2u\\,du=\\tanh u", chainLine: "u=5x\\Rightarrow du=5\\,dx", result: "\\frac15\\tanh(5x)", tags: ["hyperbolic integration", "sech", "chain rule"] },
  { integrand: "\\tanh x", ruleLine: "\\dfrac{d}{dx}\\ln(\\cosh x)=\\tanh x", chainLine: "u=\\cosh x,\\quad du=\\sinh x\\,dx", result: "\\ln(\\cosh x)", tags: ["hyperbolic integration", "tanh", "logarithms"] },
  { integrand: "\\sinh x\\cosh x", ruleLine: "\\int u\\,du=\\frac12u^2", chainLine: "u=\\sinh x,\\quad du=\\cosh x\\,dx", result: "\\frac12\\sinh^2x", tags: ["hyperbolic integration", "substitution"] },
  { integrand: "\\cosh x\\sinh^2x", ruleLine: "\\int u^2\\,du=\\frac13u^3", chainLine: "u=\\sinh x,\\quad du=\\cosh x\\,dx", result: "\\frac13\\sinh^3x", tags: ["hyperbolic integration", "substitution"] },
  { integrand: "\\operatorname{sech}x\\tanh x", ruleLine: "\\dfrac{d}{dx}\\operatorname{sech}x=-\\operatorname{sech}x\\tanh x", chainLine: "\\text{The integrand is the negative derivative of }\\operatorname{sech}x", result: "-\\operatorname{sech}x", tags: ["reciprocal hyperbolic", "integration"] },
  { integrand: "\\operatorname{csch}^2x", ruleLine: "\\dfrac{d}{dx}\\operatorname{coth}x=-\\operatorname{csch}^2x", chainLine: "\\text{The integrand is the negative derivative of }\\operatorname{coth}x", result: "-\\operatorname{coth}x", tags: ["reciprocal hyperbolic", "integration"] },
  { integrand: "\\cosh x-\\sinh x", ruleLine: "\\int \\cosh x\\,dx=\\sinh x,\\quad \\int\\sinh x\\,dx=\\cosh x", chainLine: "\\text{Integrate term by term}", result: "\\sinh x-\\cosh x", tags: ["hyperbolic integration", "definitions"] },
  { integrand: "2\\sinh x+3\\cosh x", ruleLine: "\\int \\sinh x\\,dx=\\cosh x,\\quad \\int\\cosh x\\,dx=\\sinh x", chainLine: "\\text{Use linearity of integration}", result: "2\\cosh x+3\\sinh x", tags: ["hyperbolic integration", "linearity"] },
];

const inverseSpecs: InverseSpec[] = [
  { prompt: "Differentiate $y=\\operatorname{arsinh}(2x)$ with respect to $x$.", standardForm: "\\dfrac{d}{dx}\\operatorname{arsinh}x=\\dfrac{1}{\\sqrt{1+x^2}}", substitutionLine: "u=2x,\\quad u'=2", workingLine: "\\dfrac{dy}{dx}=\\dfrac{2}{\\sqrt{1+4x^2}}", result: "\\dfrac{2}{\\sqrt{1+4x^2}}", tags: ["inverse hyperbolic", "differentiation", "arsinh"] },
  { prompt: "Differentiate $y=\\operatorname{arcosh}(3x)$ with respect to $x$, for $x>\\frac13$.", standardForm: "\\dfrac{d}{dx}\\operatorname{arcosh}x=\\dfrac{1}{\\sqrt{x^2-1}}", substitutionLine: "u=3x,\\quad u'=3", workingLine: "\\dfrac{dy}{dx}=\\dfrac{3}{\\sqrt{9x^2-1}}", result: "\\dfrac{3}{\\sqrt{9x^2-1}}", tags: ["inverse hyperbolic", "differentiation", "arcosh"] },
  { prompt: "Differentiate $y=\\operatorname{artanh}\\left(\\frac{x}{2}\\right)$ with respect to $x$, for $|x|<2$.", standardForm: "\\dfrac{d}{dx}\\operatorname{artanh}x=\\dfrac{1}{1-x^2}", substitutionLine: "u=\\frac{x}{2},\\quad u'=\\frac12", workingLine: "\\dfrac{dy}{dx}=\\frac{1}{2}\\cdot\\frac{1}{1-\\frac{x^2}{4}}", result: "\\dfrac{2}{4-x^2}", tags: ["inverse hyperbolic", "differentiation", "artanh"] },
  { prompt: "Write $\\operatorname{arsinh}x$ in logarithmic form.", standardForm: "y=\\operatorname{arsinh}x\\iff x=\\sinh y", substitutionLine: "x=\\frac{e^y-e^{-y}}{2}", workingLine: "e^{2y}-2xe^y-1=0", result: "\\ln\\left(x+\\sqrt{x^2+1}\\right)", tags: ["inverse hyperbolic", "logarithmic form", "arsinh"] },
  { prompt: "Write $\\operatorname{arcosh}x$ in logarithmic form for $x\\ge1$.", standardForm: "y=\\operatorname{arcosh}x\\iff x=\\cosh y", substitutionLine: "x=\\frac{e^y+e^{-y}}{2}", workingLine: "e^{2y}-2xe^y+1=0", result: "\\ln\\left(x+\\sqrt{x^2-1}\\right)", tags: ["inverse hyperbolic", "logarithmic form", "arcosh"] },
  { prompt: "Write $\\operatorname{artanh}x$ in logarithmic form for $|x|<1$.", standardForm: "y=\\operatorname{artanh}x\\iff x=\\tanh y", substitutionLine: "x=\\frac{e^{2y}-1}{e^{2y}+1}", workingLine: "e^{2y}=\\frac{1+x}{1-x}", result: "\\frac12\\ln\\left(\\frac{1+x}{1-x}\\right)", tags: ["inverse hyperbolic", "logarithmic form", "artanh"] },
  { prompt: "Find $\\displaystyle\\int \\frac{1}{\\sqrt{x^2+9}}\\,dx$.", standardForm: "\\int\\frac{1}{\\sqrt{x^2+a^2}}\\,dx=\\operatorname{arsinh}\\left(\\frac{x}{a}\\right)+C", substitutionLine: "a=3", workingLine: "\\int \\frac{1}{\\sqrt{x^2+9}}\\,dx=\\operatorname{arsinh}\\left(\\frac{x}{3}\\right)+C", result: "\\operatorname{arsinh}\\left(\\frac{x}{3}\\right)+C", tags: ["inverse hyperbolic", "integration", "arsinh"] },
  { prompt: "Find $\\displaystyle\\int \\frac{1}{\\sqrt{x^2-4}}\\,dx$ for $x>2$.", standardForm: "\\int\\frac{1}{\\sqrt{x^2-a^2}}\\,dx=\\operatorname{arcosh}\\left(\\frac{x}{a}\\right)+C", substitutionLine: "a=2", workingLine: "\\int \\frac{1}{\\sqrt{x^2-4}}\\,dx=\\operatorname{arcosh}\\left(\\frac{x}{2}\\right)+C", result: "\\operatorname{arcosh}\\left(\\frac{x}{2}\\right)+C", tags: ["inverse hyperbolic", "integration", "arcosh"] },
  { prompt: "Find $\\displaystyle\\int \\frac{1}{9-x^2}\\,dx$ for $|x|<3$.", standardForm: "\\int\\frac{1}{a^2-x^2}\\,dx=\\frac1a\\operatorname{artanh}\\left(\\frac{x}{a}\\right)+C", substitutionLine: "a=3", workingLine: "\\int\\frac{1}{9-x^2}\\,dx=\\frac13\\operatorname{artanh}\\left(\\frac{x}{3}\\right)+C", result: "\\frac13\\operatorname{artanh}\\left(\\frac{x}{3}\\right)+C", tags: ["inverse hyperbolic", "integration", "artanh"] },
  { prompt: "Solve $\\operatorname{arsinh}x=\\ln 3$ exactly.", standardForm: "\\operatorname{arsinh}x=a\\iff x=\\sinh a", substitutionLine: "x=\\sinh(\\ln3)", workingLine: "x=\\frac{3-\\frac13}{2}", result: "\\frac43", tags: ["inverse hyperbolic", "equations", "exact values"] },
];

const applicationSpecs: ApplicationSpec[] = [
  { prompt: "Find the equation of the tangent to $y=\\sinh x$ at $x=\\ln2$.", setup: "y_0=\\sinh(\\ln2)=\\frac34", identity: "\\dfrac{d}{dx}\\sinh x=\\cosh x", working: "m=\\cosh(\\ln2)=\\frac54", derivativeOrIntegral: "y-\\frac34=\\frac54(x-\\ln2)", simplification: "y=\\frac54x-\\frac54\\ln2+\\frac34", result: "y-\\frac34=\\frac54(x-\\ln2)", tags: ["tangents", "hyperbolic differentiation", "exact values"] },
  { prompt: "Find the stationary point of $y=\\cosh x-2\\sinh x+3$.", setup: "\\dfrac{dy}{dx}=\\sinh x-2\\cosh x", identity: "\\tanh x=\\frac{\\sinh x}{\\cosh x}", working: "\\sinh x-2\\cosh x=0\\Rightarrow \\tanh x=2", derivativeOrIntegral: "\\tanh x=2\\text{ has no real solution}", simplification: "\\text{There is no stationary point}", result: "\\text{no real stationary point}", tags: ["stationary points", "hyperbolic differentiation", "tanh"] },
  { prompt: "Evaluate $\\displaystyle\\int_0^{\\ln2}\\cosh x\\,dx$ exactly.", setup: "\\int_0^{\\ln2}\\cosh x\\,dx", identity: "\\int\\cosh x\\,dx=\\sinh x", working: "\\left[\\sinh x\\right]_0^{\\ln2}", derivativeOrIntegral: "\\sinh(\\ln2)-\\sinh0", simplification: "\\frac34-0", result: "\\frac34", tags: ["definite integrals", "hyperbolic integration", "exact values"] },
  { prompt: "Evaluate $\\displaystyle\\int_0^{\\ln2}\\sinh x\\,dx$ exactly.", setup: "\\int_0^{\\ln2}\\sinh x\\,dx", identity: "\\int\\sinh x\\,dx=\\cosh x", working: "\\left[\\cosh x\\right]_0^{\\ln2}", derivativeOrIntegral: "\\cosh(\\ln2)-\\cosh0", simplification: "\\frac54-1", result: "\\frac14", tags: ["definite integrals", "hyperbolic integration", "exact values"] },
  { prompt: "Show that $y=\\cosh x$ satisfies $\\left(\\frac{dy}{dx}\\right)^2=y^2-1$.", setup: "y=\\cosh x", identity: "\\cosh^2x-\\sinh^2x=1", working: "\\frac{dy}{dx}=\\sinh x", derivativeOrIntegral: "\\left(\\frac{dy}{dx}\\right)^2=\\sinh^2x", simplification: "\\sinh^2x=\\cosh^2x-1=y^2-1", result: "\\left(\\frac{dy}{dx}\\right)^2=y^2-1", tags: ["differential equations", "hyperbolic identities", "proof"] },
  { prompt: "Show that $y=\\sinh x$ satisfies $\\frac{d^2y}{dx^2}=y$.", setup: "y=\\sinh x", identity: "\\dfrac{d}{dx}\\sinh x=\\cosh x,\\quad \\dfrac{d}{dx}\\cosh x=\\sinh x", working: "\\frac{dy}{dx}=\\cosh x", derivativeOrIntegral: "\\frac{d^2y}{dx^2}=\\sinh x", simplification: "\\sinh x=y", result: "\\frac{d^2y}{dx^2}=y", tags: ["second derivatives", "hyperbolic differentiation", "proof"] },
  { prompt: "Find $\\displaystyle\\int \\cosh^2x\\,dx$ using a double-angle identity.", setup: "\\int\\cosh^2x\\,dx", identity: "\\cosh^2x=\\frac{\\cosh2x+1}{2}", working: "\\int\\frac{\\cosh2x+1}{2}\\,dx", derivativeOrIntegral: "\\frac14\\sinh2x+\\frac{x}{2}+C", simplification: "\\frac14\\sinh2x+\\frac{x}{2}+C", result: "\\frac14\\sinh2x+\\frac{x}{2}+C", tags: ["hyperbolic integration", "double angle", "identities"] },
  { prompt: "Find $\\displaystyle\\int \\sinh^2x\\,dx$ using a double-angle identity.", setup: "\\int\\sinh^2x\\,dx", identity: "\\sinh^2x=\\frac{\\cosh2x-1}{2}", working: "\\int\\frac{\\cosh2x-1}{2}\\,dx", derivativeOrIntegral: "\\frac14\\sinh2x-\\frac{x}{2}+C", simplification: "\\frac14\\sinh2x-\\frac{x}{2}+C", result: "\\frac14\\sinh2x-\\frac{x}{2}+C", tags: ["hyperbolic integration", "double angle", "identities"] },
  { prompt: "Solve $\\cosh x-\\sinh x=7$ exactly.", setup: "\\cosh x-\\sinh x=7", identity: "\\cosh x-\\sinh x=e^{-x}", working: "e^{-x}=7", derivativeOrIntegral: "-x=\\ln7", simplification: "x=-\\ln7", result: "-\\ln7", tags: ["hyperbolic equations", "definitions", "exponentials"] },
  { prompt: "Find the exact value of $\\operatorname{artanh}\\left(\\frac45\\right)$.", setup: "\\operatorname{artanh}\\left(\\frac45\\right)", identity: "\\operatorname{artanh}u=\\frac12\\ln\\left(\\frac{1+u}{1-u}\\right)", working: "\\frac12\\ln\\left(\\frac{1+\\frac45}{1-\\frac45}\\right)", derivativeOrIntegral: "\\frac12\\ln\\left(\\frac{\\frac95}{\\frac15}\\right)", simplification: "\\frac12\\ln9", result: "\\ln3", tags: ["inverse hyperbolic", "exact values", "artanh"] },
];

export const questions: Question[] = [
  ...evaluationSpecs.map((spec, index) => evaluationQuestion(index + 1, spec)),
  ...identitySpecs.map((spec, index) => identityQuestion(index + 11, spec)),
  ...equationSpecs.map((spec, index) => equationQuestion(index + 21, spec)),
  ...derivativeSpecs.map((spec, index) => derivativeQuestion(index + 31, spec)),
  ...integralSpecs.map((spec, index) => integralQuestion(index + 41, spec)),
  ...inverseSpecs.map((spec, index) => inverseQuestion(index + 51, spec)),
  ...applicationSpecs.map((spec, index) => applicationQuestion(index + 61, spec)),
];
