import type { Difficulty, Question, SolutionStep } from "@/lib/types";

const LEVEL = "A-Level Further Maths";
const TOPIC = "Further Maths Year 2: Pure (Core Pure 2)";
const SUBTOPIC = "Hyperbolic calculus";
const SUBTOPIC_ID = "fm.y2.pure.hyperbolic-calculus";

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

type DerivativeSpec = {
  functionLatex: string;
  functionName: string;
  ruleLatex: string;
  innerLatex: string;
  innerDerivative: string;
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
        explanation: `This is a ${spec.functionName} expression, so the main rule comes from the standard hyperbolic derivative table.`,
      },
      {
        description: "Recall the standard derivative",
        workingLatex: spec.ruleLatex,
        explanation: "The standard result gives the derivative of the outside hyperbolic function before any chain-rule adjustment.",
      },
      {
        description: "Identify the inner function",
        workingLatex: `u=${spec.innerLatex}`,
        explanation: "Separating the inside as $u$ makes it clear where the chain rule enters.",
      },
      {
        description: "Differentiate the inner function",
        workingLatex: `\\dfrac{du}{dx}=${spec.innerDerivative}`,
        explanation: "The derivative of the inside measures how quickly the input to the hyperbolic function is changing.",
      },
      {
        description: "Apply the chain rule",
        workingLatex: spec.chainLine,
        explanation: "Differentiate the outside with respect to $u$, then multiply by $du/dx$.",
      },
      {
        description: "Simplify the derivative",
        workingLatex: `\\dfrac{dy}{dx}=${spec.result}`,
        explanation: "Writing the result as one expression makes the final answer easy to read.",
      },
      {
        description: "Check the sign",
        workingLatex: spec.result,
        explanation: "Only $\\operatorname{sech}$, $\\operatorname{csch}$ and $\\operatorname{coth}$ have negative derivative signs, so checking the sign prevents a common error.",
      },
      {
        description: "State the answer",
        workingLatex: `\\boxed{${spec.result}}`,
        explanation: "The boxed expression is the required derivative.",
      },
    ],
    `$${spec.result}$`,
  );
}

type IntegralSpec = {
  integrand: string;
  ruleLatex: string;
  matchLine: string;
  adjustment: string;
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
        description: "Identify the standard form",
        workingLatex: `\\int ${spec.integrand}\\,dx`,
        explanation: "The integrand is built from a standard hyperbolic derivative, so integration reverses that known result.",
      },
      {
        description: "Recall the matching integral",
        workingLatex: spec.ruleLatex,
        explanation: "Starting from the standard integral helps keep signs and constant factors under control.",
      },
      {
        description: "Match the inner expression",
        workingLatex: spec.matchLine,
        explanation: "The inner linear expression determines the chain-rule factor that must be reversed.",
      },
      {
        description: "Adjust for the chain rule",
        workingLatex: spec.adjustment,
        explanation: "Integration divides by the coefficient that differentiation would have multiplied by.",
      },
      {
        description: "Write the antiderivative",
        workingLatex: spec.result,
        explanation: "This expression differentiates back to the original integrand.",
      },
      {
        description: "Add the constant",
        workingLatex: `${spec.result}+C`,
        explanation: "An indefinite integral represents a family of antiderivatives, so the arbitrary constant is needed.",
      },
      {
        description: "State the answer",
        workingLatex: `\\boxed{${spec.result}+C}`,
        explanation: "The final expression is the required indefinite integral.",
      },
    ],
    `$${spec.result}+C$`,
  );
}

type InverseDerivativeSpec = {
  functionLatex: string;
  inverseName: string;
  ruleLatex: string;
  innerLatex: string;
  innerDerivative: string;
  domainNote: string;
  chainLine: string;
  result: string;
  tags: string[];
};

function inverseDerivativeQuestion(number: number, spec: InverseDerivativeSpec): Question {
  return question(
    number,
    "Intermediate",
    6,
    spec.tags,
    "expression",
    `Differentiate $y=${spec.functionLatex}$ with respect to $x$.`,
    [
      {
        description: "Identify the inverse hyperbolic function",
        workingLatex: `y=${spec.functionLatex}`,
        explanation: `This is an ${spec.inverseName} expression, so the derivative comes from the inverse hyperbolic rule.`,
      },
      {
        description: "Recall the standard rule",
        workingLatex: spec.ruleLatex,
        explanation: "The standard rule describes the derivative with respect to the input of the inverse function.",
      },
      {
        description: "Identify the inner function",
        workingLatex: `u=${spec.innerLatex}`,
        explanation: "The inverse function is being applied to an inner expression, so the chain rule is needed.",
      },
      {
        description: "Differentiate the inner function",
        workingLatex: `\\dfrac{du}{dx}=${spec.innerDerivative}`,
        explanation: "The chain rule multiplies by this inner derivative.",
      },
      {
        description: "Apply the inverse hyperbolic derivative",
        workingLatex: spec.chainLine,
        explanation: "Substitute the inner expression into the standard derivative formula and multiply by $du/dx$.",
      },
      {
        description: "Record the domain condition",
        workingLatex: spec.domainNote,
        explanation: "Inverse hyperbolic derivatives can have domain restrictions, especially for $\\operatorname{arcosh}$ and $\\operatorname{artanh}$.",
      },
      {
        description: "Simplify",
        workingLatex: `\\dfrac{dy}{dx}=${spec.result}`,
        explanation: "The simplified derivative is clearer and easier to use in later calculations.",
      },
      {
        description: "Check the denominator",
        workingLatex: spec.result,
        explanation: "$\\operatorname{arsinh}$ gives a sum under the square root, while $\\operatorname{artanh}$ gives $1-u^2$; this distinguishes the common forms.",
      },
      {
        description: "State the answer",
        workingLatex: `\\boxed{${spec.result}}`,
        explanation: "This is the required derivative with respect to $x$.",
      },
    ],
    `$${spec.result}$`,
  );
}

type InverseIntegralSpec = {
  integrand: string;
  standardForm: string;
  matchLine: string;
  substitutionLine: string;
  result: string;
  tags: string[];
};

function inverseIntegralQuestion(number: number, spec: InverseIntegralSpec): Question {
  return question(
    number,
    "Intermediate",
    6,
    spec.tags,
    "expression",
    `Find $\\displaystyle\\int ${spec.integrand}\\,dx$.`,
    [
      {
        description: "Identify the inverse hyperbolic form",
        workingLatex: `\\int ${spec.integrand}\\,dx`,
        explanation: "The reciprocal square-root or reciprocal difference form is a signal that an inverse hyperbolic function may appear.",
      },
      {
        description: "Recall the standard form",
        workingLatex: spec.standardForm,
        explanation: "The standard form tells us whether the result should involve $\\operatorname{arsinh}$, $\\operatorname{arcosh}$ or $\\operatorname{artanh}$.",
      },
      {
        description: "Match the constants",
        workingLatex: spec.matchLine,
        explanation: "Matching the constants prevents the scale factor in the final inverse function from being missed.",
      },
      {
        description: "Choose the substitution",
        workingLatex: spec.substitutionLine,
        explanation: "A simple scaling substitution converts the integrand into the standard table form.",
      },
      {
        description: "Apply the standard result",
        workingLatex: spec.result,
        explanation: "Once the form matches the table, the antiderivative follows directly.",
      },
      {
        description: "Check by differentiating",
        workingLatex: `\\dfrac{d}{dx}\\left(${spec.result}\\right)=${spec.integrand}`,
        explanation: "Differentiating the proposed antiderivative is the quickest way to verify the scale factor.",
      },
      {
        description: "Include the constant",
        workingLatex: `${spec.result}+C`,
        explanation: "The constant is required because this is an indefinite integral.",
      },
      {
        description: "State the answer",
        workingLatex: `\\boxed{${spec.result}+C}`,
        explanation: "This completes the inverse hyperbolic integral.",
      },
      {
        description: "Interpret the form",
        workingLatex: spec.result,
        explanation: "The inverse hyperbolic answer is often cleaner than rewriting it immediately as a logarithm.",
      },
    ],
    `$${spec.result}+C$`,
  );
}

type DefiniteSpec = {
  integral: string;
  antiderivative: string;
  upperSubstitution: string;
  lowerSubstitution: string;
  simplification: string;
  result: string;
  tags: string[];
};

function definiteQuestion(number: number, spec: DefiniteSpec): Question {
  return question(
    number,
    "Intermediate",
    6,
    spec.tags,
    "expression",
    `Evaluate $\\displaystyle ${spec.integral}$.`,
    [
      {
        description: "Identify the antiderivative",
        workingLatex: spec.antiderivative,
        explanation: "A definite integral is still evaluated by first finding a matching antiderivative.",
      },
      {
        description: "Apply the fundamental theorem",
        workingLatex: `\\left[${spec.antiderivative}\\right]`,
        explanation: "The value is found by substituting the upper limit and subtracting the lower limit.",
      },
      {
        description: "Substitute the upper limit",
        workingLatex: spec.upperSubstitution,
        explanation: "This gives the accumulated area or signed change up to the upper boundary.",
      },
      {
        description: "Substitute the lower limit",
        workingLatex: spec.lowerSubstitution,
        explanation: "Subtracting the lower value anchors the accumulation at the correct starting point.",
      },
      {
        description: "Subtract the endpoint values",
        workingLatex: spec.simplification,
        explanation: "Combining the two endpoint values gives the exact value of the definite integral.",
      },
      {
        description: "Use exponential definitions if needed",
        workingLatex: spec.result,
        explanation: "Exact values such as $\\tanh(\\ln 2)$ can be simplified using the definitions of hyperbolic functions.",
      },
      {
        description: "State the exact value",
        workingLatex: `\\boxed{${spec.result}}`,
        explanation: "The boxed value is the final exact value of the definite integral.",
      },
      {
        description: "Check the sign",
        workingLatex: spec.result,
        explanation: "For these intervals the integrands are non-negative, so the final value should be positive.",
      },
      {
        description: "Final answer",
        workingLatex: `\\boxed{${spec.result}}`,
        explanation: "This is the required value.",
      },
    ],
    `$${spec.result}$`,
  );
}

type ProductSpec = {
  functionLatex: string;
  first: string;
  second: string;
  firstDerivative: string;
  secondDerivative: string;
  productLine: string;
  result: string;
  tags: string[];
};

function productQuestion(number: number, spec: ProductSpec): Question {
  return question(
    number,
    "Intermediate",
    6,
    spec.tags,
    "expression",
    `Differentiate $y=${spec.functionLatex}$ with respect to $x$.`,
    [
      {
        description: "Recognise the product",
        workingLatex: `y=${spec.functionLatex}`,
        explanation: "The expression is a product, so differentiating each factor separately will not be enough.",
      },
      {
        description: "Name the two factors",
        workingLatex: `u=${spec.first},\\quad v=${spec.second}`,
        explanation: "Labelling the factors makes the product rule easier to apply cleanly.",
      },
      {
        description: "Recall the product rule",
        workingLatex: "\\dfrac{d}{dx}(uv)=u\\dfrac{dv}{dx}+v\\dfrac{du}{dx}",
        explanation: "The product rule accounts for the change in both factors.",
      },
      {
        description: "Differentiate the first factor",
        workingLatex: `\\dfrac{du}{dx}=${spec.firstDerivative}`,
        explanation: "This gives the contribution from the first factor changing.",
      },
      {
        description: "Differentiate the second factor",
        workingLatex: `\\dfrac{dv}{dx}=${spec.secondDerivative}`,
        explanation: "This uses the relevant hyperbolic derivative rule.",
      },
      {
        description: "Substitute into the product rule",
        workingLatex: spec.productLine,
        explanation: "Each derivative is paired with the other unchanged factor.",
      },
      {
        description: "Simplify",
        workingLatex: `\\dfrac{dy}{dx}=${spec.result}`,
        explanation: "Collecting the terms gives a cleaner final derivative.",
      },
      {
        description: "Check both terms",
        workingLatex: spec.result,
        explanation: "A product-rule derivative should usually contain two terms unless cancellation occurs.",
      },
      {
        description: "State the answer",
        workingLatex: `\\boxed{${spec.result}}`,
        explanation: "This is the required derivative.",
      },
    ],
    `$${spec.result}$`,
  );
}

type ByPartsSpec = {
  integrand: string;
  uChoice: string;
  dvChoice: string;
  du: string;
  v: string;
  partsLine: string;
  remainingIntegral: string;
  remainingValue: string;
  result: string;
  tags: string[];
};

function byPartsQuestion(number: number, spec: ByPartsSpec): Question {
  return question(
    number,
    "Hard",
    8,
    spec.tags,
    "expression",
    `Find $\\displaystyle\\int ${spec.integrand}\\,dx$.`,
    [
      {
        description: "Recognise the structure",
        workingLatex: `\\int ${spec.integrand}\\,dx`,
        explanation: "The integrand is a product of $x$ and a hyperbolic function, so integration by parts is a natural method.",
      },
      {
        description: "Choose $u$",
        workingLatex: `u=${spec.uChoice}`,
        explanation: "Choosing the algebraic factor as $u$ makes it simpler after differentiation.",
      },
      {
        description: "Choose $dv$",
        workingLatex: `dv=${spec.dvChoice}\\,dx`,
        explanation: "The hyperbolic factor has a standard antiderivative, so it is suitable for $dv$.",
      },
      {
        description: "Differentiate $u$",
        workingLatex: `du=${spec.du}\\,dx`,
        explanation: "This reduces the algebraic part of the integrand.",
      },
      {
        description: "Integrate $dv$",
        workingLatex: `v=${spec.v}`,
        explanation: "This uses the standard hyperbolic integral table.",
      },
      {
        description: "Recall integration by parts",
        workingLatex: "\\int u\\,dv=uv-\\int v\\,du",
        explanation: "The formula transfers differentiation from one factor to the other.",
      },
      {
        description: "Substitute into the formula",
        workingLatex: spec.partsLine,
        explanation: "The original product has been rewritten as a boundary-like product term minus a simpler integral.",
      },
      {
        description: "Identify the remaining integral",
        workingLatex: spec.remainingIntegral,
        explanation: "The remaining integral is now a standard hyperbolic integral.",
      },
      {
        description: "Evaluate the remaining integral",
        workingLatex: spec.remainingValue,
        explanation: "This completes the integration by parts calculation.",
      },
      {
        description: "Combine the terms",
        workingLatex: spec.result,
        explanation: "Substituting the remaining integral back gives the full antiderivative.",
      },
      {
        description: "Add the constant",
        workingLatex: `${spec.result}+C`,
        explanation: "A constant of integration is needed for an indefinite integral.",
      },
      {
        description: "Check by differentiating",
        workingLatex: `\\dfrac{d}{dx}\\left(${spec.result}\\right)=${spec.integrand}`,
        explanation: "Differentiation confirms that the product-rule terms collapse back to the original integrand.",
      },
      {
        description: "State the answer",
        workingLatex: `\\boxed{${spec.result}+C}`,
        explanation: "This is the required antiderivative.",
      },
    ],
    `$${spec.result}+C$`,
  );
}

type ProofSpec = {
  prompt: string;
  setup: string;
  line2: string;
  line3: string;
  line4: string;
  line5: string;
  line6: string;
  line7: string;
  line8: string;
  line9: string;
  line10: string;
  line11: string;
  conclusion: string;
  tags: string[];
};

function proofQuestion(number: number, spec: ProofSpec): Question {
  return question(
    number,
    "Hard",
    8,
    spec.tags,
    "written",
    spec.prompt,
    [
      {
        description: "Set up the argument",
        workingLatex: spec.setup,
        explanation: "A proof-style calculus question needs a clear starting expression before any differentiation or integration begins.",
      },
      {
        description: "Use the relevant definition",
        workingLatex: spec.line2,
        explanation: "Definitions connect the hyperbolic expression to algebraic or exponential forms that can be manipulated reliably.",
      },
      {
        description: "Differentiate or transform the expression",
        workingLatex: spec.line3,
        explanation: "This is the main calculus move in the proof.",
      },
      {
        description: "Substitute the known relationship",
        workingLatex: spec.line4,
        explanation: "Replacing one expression using the defining relationship reduces the number of variables involved.",
      },
      {
        description: "Simplify the denominator or factor",
        workingLatex: spec.line5,
        explanation: "Simplification reveals the standard hyperbolic form hiding inside the calculation.",
      },
      {
        description: "Choose the appropriate branch",
        workingLatex: spec.line6,
        explanation: "Inverse hyperbolic functions use principal branches, so the sign or domain choice matters.",
      },
      {
        description: "Continue the simplification",
        workingLatex: spec.line7,
        explanation: "This step turns the intermediate expression into the target form.",
      },
      {
        description: "Apply the calculus rule",
        workingLatex: spec.line8,
        explanation: "The derivative or integral rule now applies directly.",
      },
      {
        description: "Substitute back",
        workingLatex: spec.line9,
        explanation: "Returning to the original variable gives a result in the form requested by the question.",
      },
      {
        description: "Check consistency",
        workingLatex: spec.line10,
        explanation: "This confirms that the expression matches the required domain and sign.",
      },
      {
        description: "Reach the target statement",
        workingLatex: spec.line11,
        explanation: "The target statement has now been derived from standard definitions and calculus rules.",
      },
      {
        description: "State the conclusion",
        workingLatex: spec.conclusion,
        explanation: "The final line clearly states what has been proved or evaluated.",
      },
      {
        description: "Final answer",
        workingLatex: `\\boxed{${spec.conclusion}}`,
        explanation: "This completes the proof-style solution.",
      },
    ],
    `$${spec.conclusion}$`,
  );
}

const derivativeSpecs: DerivativeSpec[] = [
  { functionLatex: "\\sinh x", functionName: "hyperbolic sine", ruleLatex: "\\dfrac{d}{dx}\\sinh u=\\cosh u\\dfrac{du}{dx}", innerLatex: "x", innerDerivative: "1", chainLine: "\\dfrac{dy}{dx}=\\cosh x\\cdot1", result: "\\cosh x", tags: ["hyperbolic functions", "differentiation", "sinh"] },
  { functionLatex: "\\cosh x", functionName: "hyperbolic cosine", ruleLatex: "\\dfrac{d}{dx}\\cosh u=\\sinh u\\dfrac{du}{dx}", innerLatex: "x", innerDerivative: "1", chainLine: "\\dfrac{dy}{dx}=\\sinh x\\cdot1", result: "\\sinh x", tags: ["hyperbolic functions", "differentiation", "cosh"] },
  { functionLatex: "\\tanh x", functionName: "hyperbolic tangent", ruleLatex: "\\dfrac{d}{dx}\\tanh u=\\operatorname{sech}^{2}u\\dfrac{du}{dx}", innerLatex: "x", innerDerivative: "1", chainLine: "\\dfrac{dy}{dx}=\\operatorname{sech}^{2}x\\cdot1", result: "\\operatorname{sech}^{2}x", tags: ["hyperbolic functions", "differentiation", "tanh"] },
  { functionLatex: "\\sinh(3x)", functionName: "hyperbolic sine", ruleLatex: "\\dfrac{d}{dx}\\sinh u=\\cosh u\\dfrac{du}{dx}", innerLatex: "3x", innerDerivative: "3", chainLine: "\\dfrac{dy}{dx}=\\cosh(3x)\\cdot3", result: "3\\cosh(3x)", tags: ["hyperbolic functions", "chain rule", "sinh"] },
  { functionLatex: "\\cosh(2x-1)", functionName: "hyperbolic cosine", ruleLatex: "\\dfrac{d}{dx}\\cosh u=\\sinh u\\dfrac{du}{dx}", innerLatex: "2x-1", innerDerivative: "2", chainLine: "\\dfrac{dy}{dx}=\\sinh(2x-1)\\cdot2", result: "2\\sinh(2x-1)", tags: ["hyperbolic functions", "chain rule", "cosh"] },
  { functionLatex: "\\tanh(4x)", functionName: "hyperbolic tangent", ruleLatex: "\\dfrac{d}{dx}\\tanh u=\\operatorname{sech}^{2}u\\dfrac{du}{dx}", innerLatex: "4x", innerDerivative: "4", chainLine: "\\dfrac{dy}{dx}=\\operatorname{sech}^{2}(4x)\\cdot4", result: "4\\operatorname{sech}^{2}(4x)", tags: ["hyperbolic functions", "chain rule", "tanh"] },
  { functionLatex: "\\operatorname{sech}x", functionName: "hyperbolic secant", ruleLatex: "\\dfrac{d}{dx}\\operatorname{sech}u=-\\operatorname{sech}u\\tanh u\\dfrac{du}{dx}", innerLatex: "x", innerDerivative: "1", chainLine: "\\dfrac{dy}{dx}=-\\operatorname{sech}x\\tanh x\\cdot1", result: "-\\operatorname{sech}x\\tanh x", tags: ["hyperbolic functions", "differentiation", "sech"] },
  { functionLatex: "\\operatorname{csch}x", functionName: "hyperbolic cosecant", ruleLatex: "\\dfrac{d}{dx}\\operatorname{csch}u=-\\operatorname{csch}u\\coth u\\dfrac{du}{dx}", innerLatex: "x", innerDerivative: "1", chainLine: "\\dfrac{dy}{dx}=-\\operatorname{csch}x\\coth x\\cdot1", result: "-\\operatorname{csch}x\\coth x", tags: ["hyperbolic functions", "differentiation", "csch"] },
  { functionLatex: "\\coth(5x)", functionName: "hyperbolic cotangent", ruleLatex: "\\dfrac{d}{dx}\\coth u=-\\operatorname{csch}^{2}u\\dfrac{du}{dx}", innerLatex: "5x", innerDerivative: "5", chainLine: "\\dfrac{dy}{dx}=-\\operatorname{csch}^{2}(5x)\\cdot5", result: "-5\\operatorname{csch}^{2}(5x)", tags: ["hyperbolic functions", "chain rule", "coth"] },
  { functionLatex: "\\operatorname{sech}(2x+1)", functionName: "hyperbolic secant", ruleLatex: "\\dfrac{d}{dx}\\operatorname{sech}u=-\\operatorname{sech}u\\tanh u\\dfrac{du}{dx}", innerLatex: "2x+1", innerDerivative: "2", chainLine: "\\dfrac{dy}{dx}=-\\operatorname{sech}(2x+1)\\tanh(2x+1)\\cdot2", result: "-2\\operatorname{sech}(2x+1)\\tanh(2x+1)", tags: ["hyperbolic functions", "chain rule", "sech"] },
  { functionLatex: "\\sinh(x^{2})", functionName: "hyperbolic sine", ruleLatex: "\\dfrac{d}{dx}\\sinh u=\\cosh u\\dfrac{du}{dx}", innerLatex: "x^{2}", innerDerivative: "2x", chainLine: "\\dfrac{dy}{dx}=\\cosh(x^{2})\\cdot2x", result: "2x\\cosh(x^{2})", tags: ["hyperbolic functions", "chain rule", "sinh"] },
  { functionLatex: "\\tanh(x^{2}+1)", functionName: "hyperbolic tangent", ruleLatex: "\\dfrac{d}{dx}\\tanh u=\\operatorname{sech}^{2}u\\dfrac{du}{dx}", innerLatex: "x^{2}+1", innerDerivative: "2x", chainLine: "\\dfrac{dy}{dx}=\\operatorname{sech}^{2}(x^{2}+1)\\cdot2x", result: "2x\\operatorname{sech}^{2}(x^{2}+1)", tags: ["hyperbolic functions", "chain rule", "tanh"] },
];

const integralSpecs: IntegralSpec[] = [
  { integrand: "\\cosh x", ruleLatex: "\\int\\cosh u\\,du=\\sinh u+C", matchLine: "u=x", adjustment: "\\dfrac{du}{dx}=1", result: "\\sinh x", tags: ["hyperbolic functions", "integration", "cosh"] },
  { integrand: "\\sinh x", ruleLatex: "\\int\\sinh u\\,du=\\cosh u+C", matchLine: "u=x", adjustment: "\\dfrac{du}{dx}=1", result: "\\cosh x", tags: ["hyperbolic functions", "integration", "sinh"] },
  { integrand: "\\operatorname{sech}^{2}x", ruleLatex: "\\int\\operatorname{sech}^{2}u\\,du=\\tanh u+C", matchLine: "u=x", adjustment: "\\dfrac{du}{dx}=1", result: "\\tanh x", tags: ["hyperbolic functions", "integration", "sech squared"] },
  { integrand: "\\cosh(3x)", ruleLatex: "\\int\\cosh u\\,du=\\sinh u+C", matchLine: "u=3x", adjustment: "\\dfrac{du}{dx}=3\\Rightarrow\\text{ divide by }3", result: "\\dfrac13\\sinh(3x)", tags: ["hyperbolic functions", "integration", "chain rule"] },
  { integrand: "\\sinh(2x-1)", ruleLatex: "\\int\\sinh u\\,du=\\cosh u+C", matchLine: "u=2x-1", adjustment: "\\dfrac{du}{dx}=2\\Rightarrow\\text{ divide by }2", result: "\\dfrac12\\cosh(2x-1)", tags: ["hyperbolic functions", "integration", "chain rule"] },
  { integrand: "4\\operatorname{sech}^{2}(4x)", ruleLatex: "\\int k\\operatorname{sech}^{2}(kx)\\,dx=\\tanh(kx)+C", matchLine: "k=4", adjustment: "\\dfrac{d}{dx}(4x)=4", result: "\\tanh(4x)", tags: ["hyperbolic functions", "integration", "tanh"] },
  { integrand: "\\operatorname{csch}^{2}x", ruleLatex: "\\int\\operatorname{csch}^{2}u\\,du=-\\coth u+C", matchLine: "u=x", adjustment: "\\dfrac{du}{dx}=1", result: "-\\coth x", tags: ["hyperbolic functions", "integration", "csch squared"] },
  { integrand: "\\operatorname{sech}x\\tanh x", ruleLatex: "\\int\\operatorname{sech}u\\tanh u\\,du=-\\operatorname{sech}u+C", matchLine: "u=x", adjustment: "\\dfrac{du}{dx}=1", result: "-\\operatorname{sech}x", tags: ["hyperbolic functions", "integration", "sech"] },
  { integrand: "\\operatorname{csch}x\\coth x", ruleLatex: "\\int\\operatorname{csch}u\\coth u\\,du=-\\operatorname{csch}u+C", matchLine: "u=x", adjustment: "\\dfrac{du}{dx}=1", result: "-\\operatorname{csch}x", tags: ["hyperbolic functions", "integration", "csch"] },
  { integrand: "2\\operatorname{sech}(2x)\\tanh(2x)", ruleLatex: "\\int k\\operatorname{sech}(kx)\\tanh(kx)\\,dx=-\\operatorname{sech}(kx)+C", matchLine: "k=2", adjustment: "\\dfrac{d}{dx}(2x)=2", result: "-\\operatorname{sech}(2x)", tags: ["hyperbolic functions", "integration", "chain rule"] },
  { integrand: "3\\operatorname{csch}^{2}(3x)", ruleLatex: "\\int k\\operatorname{csch}^{2}(kx)\\,dx=-\\coth(kx)+C", matchLine: "k=3", adjustment: "\\dfrac{d}{dx}(3x)=3", result: "-\\coth(3x)", tags: ["hyperbolic functions", "integration", "coth"] },
  { integrand: "\\sinh(x+2)", ruleLatex: "\\int\\sinh u\\,du=\\cosh u+C", matchLine: "u=x+2", adjustment: "\\dfrac{du}{dx}=1", result: "\\cosh(x+2)", tags: ["hyperbolic functions", "integration", "translation"] },
];

const inverseDerivativeSpecs: InverseDerivativeSpec[] = [
  { functionLatex: "\\operatorname{arsinh}x", inverseName: "inverse hyperbolic sine", ruleLatex: "\\dfrac{d}{dx}\\operatorname{arsinh}u=\\dfrac{u'}{\\sqrt{1+u^{2}}}", innerLatex: "x", innerDerivative: "1", domainNote: "x\\in\\mathbb{R}", chainLine: "\\dfrac{dy}{dx}=\\dfrac{1}{\\sqrt{1+x^{2}}}", result: "\\dfrac{1}{\\sqrt{1+x^{2}}}", tags: ["inverse hyperbolic functions", "differentiation", "arsinh"] },
  { functionLatex: "\\operatorname{arcosh}x", inverseName: "inverse hyperbolic cosine", ruleLatex: "\\dfrac{d}{dx}\\operatorname{arcosh}u=\\dfrac{u'}{\\sqrt{u-1}\\sqrt{u+1}}", innerLatex: "x", innerDerivative: "1", domainNote: "x>1", chainLine: "\\dfrac{dy}{dx}=\\dfrac{1}{\\sqrt{x-1}\\sqrt{x+1}}", result: "\\dfrac{1}{\\sqrt{x-1}\\sqrt{x+1}}", tags: ["inverse hyperbolic functions", "differentiation", "arcosh"] },
  { functionLatex: "\\operatorname{artanh}x", inverseName: "inverse hyperbolic tangent", ruleLatex: "\\dfrac{d}{dx}\\operatorname{artanh}u=\\dfrac{u'}{1-u^{2}}", innerLatex: "x", innerDerivative: "1", domainNote: "|x|<1", chainLine: "\\dfrac{dy}{dx}=\\dfrac{1}{1-x^{2}}", result: "\\dfrac{1}{1-x^{2}}", tags: ["inverse hyperbolic functions", "differentiation", "artanh"] },
  { functionLatex: "\\operatorname{arsinh}(2x)", inverseName: "inverse hyperbolic sine", ruleLatex: "\\dfrac{d}{dx}\\operatorname{arsinh}u=\\dfrac{u'}{\\sqrt{1+u^{2}}}", innerLatex: "2x", innerDerivative: "2", domainNote: "x\\in\\mathbb{R}", chainLine: "\\dfrac{dy}{dx}=\\dfrac{2}{\\sqrt{1+(2x)^{2}}}", result: "\\dfrac{2}{\\sqrt{1+4x^{2}}}", tags: ["inverse hyperbolic functions", "chain rule", "arsinh"] },
  { functionLatex: "\\operatorname{arcosh}(3x)", inverseName: "inverse hyperbolic cosine", ruleLatex: "\\dfrac{d}{dx}\\operatorname{arcosh}u=\\dfrac{u'}{\\sqrt{u-1}\\sqrt{u+1}}", innerLatex: "3x", innerDerivative: "3", domainNote: "3x>1", chainLine: "\\dfrac{dy}{dx}=\\dfrac{3}{\\sqrt{3x-1}\\sqrt{3x+1}}", result: "\\dfrac{3}{\\sqrt{3x-1}\\sqrt{3x+1}}", tags: ["inverse hyperbolic functions", "chain rule", "arcosh"] },
  { functionLatex: "\\operatorname{artanh}(4x)", inverseName: "inverse hyperbolic tangent", ruleLatex: "\\dfrac{d}{dx}\\operatorname{artanh}u=\\dfrac{u'}{1-u^{2}}", innerLatex: "4x", innerDerivative: "4", domainNote: "|4x|<1", chainLine: "\\dfrac{dy}{dx}=\\dfrac{4}{1-(4x)^{2}}", result: "\\dfrac{4}{1-16x^{2}}", tags: ["inverse hyperbolic functions", "chain rule", "artanh"] },
  { functionLatex: "\\operatorname{arsinh}(x^{2})", inverseName: "inverse hyperbolic sine", ruleLatex: "\\dfrac{d}{dx}\\operatorname{arsinh}u=\\dfrac{u'}{\\sqrt{1+u^{2}}}", innerLatex: "x^{2}", innerDerivative: "2x", domainNote: "x\\in\\mathbb{R}", chainLine: "\\dfrac{dy}{dx}=\\dfrac{2x}{\\sqrt{1+x^{4}}}", result: "\\dfrac{2x}{\\sqrt{1+x^{4}}}", tags: ["inverse hyperbolic functions", "chain rule", "arsinh"] },
  { functionLatex: "\\operatorname{artanh}(1-2x)", inverseName: "inverse hyperbolic tangent", ruleLatex: "\\dfrac{d}{dx}\\operatorname{artanh}u=\\dfrac{u'}{1-u^{2}}", innerLatex: "1-2x", innerDerivative: "-2", domainNote: "|1-2x|<1", chainLine: "\\dfrac{dy}{dx}=\\dfrac{-2}{1-(1-2x)^{2}}", result: "-\\dfrac{2}{1-(1-2x)^{2}}", tags: ["inverse hyperbolic functions", "chain rule", "linear substitution"] },
  { functionLatex: "\\operatorname{arcosh}(x^{2}+1)", inverseName: "inverse hyperbolic cosine", ruleLatex: "\\dfrac{d}{dx}\\operatorname{arcosh}u=\\dfrac{u'}{\\sqrt{u-1}\\sqrt{u+1}}", innerLatex: "x^{2}+1", innerDerivative: "2x", domainNote: "x^{2}+1>1\\text{ for }x\\ne0", chainLine: "\\dfrac{dy}{dx}=\\dfrac{2x}{\\sqrt{x^{2}}\\sqrt{x^{2}+2}}", result: "\\dfrac{2x}{\\sqrt{x^{2}}\\sqrt{x^{2}+2}}", tags: ["inverse hyperbolic functions", "chain rule", "arcosh"] },
  { functionLatex: "\\operatorname{arsinh}\\left(\\dfrac{x}{3}\\right)", inverseName: "inverse hyperbolic sine", ruleLatex: "\\dfrac{d}{dx}\\operatorname{arsinh}u=\\dfrac{u'}{\\sqrt{1+u^{2}}}", innerLatex: "\\dfrac{x}{3}", innerDerivative: "\\dfrac13", domainNote: "x\\in\\mathbb{R}", chainLine: "\\dfrac{dy}{dx}=\\dfrac{1/3}{\\sqrt{1+x^{2}/9}}", result: "\\dfrac{1}{\\sqrt{x^{2}+9}}", tags: ["inverse hyperbolic functions", "chain rule", "arsinh"] },
];

const inverseIntegralSpecs: InverseIntegralSpec[] = [
  { integrand: "\\dfrac{1}{\\sqrt{x^{2}+1}}", standardForm: "\\int\\dfrac{1}{\\sqrt{x^{2}+a^{2}}}\\,dx=\\operatorname{arsinh}\\left(\\dfrac{x}{a}\\right)+C", matchLine: "a=1", substitutionLine: "u=x", result: "\\operatorname{arsinh}x", tags: ["inverse hyperbolic functions", "integration", "arsinh"] },
  { integrand: "\\dfrac{1}{\\sqrt{x^{2}+4}}", standardForm: "\\int\\dfrac{1}{\\sqrt{x^{2}+a^{2}}}\\,dx=\\operatorname{arsinh}\\left(\\dfrac{x}{a}\\right)+C", matchLine: "a=2", substitutionLine: "u=\\dfrac{x}{2}", result: "\\operatorname{arsinh}\\left(\\dfrac{x}{2}\\right)", tags: ["inverse hyperbolic functions", "integration", "arsinh"] },
  { integrand: "\\dfrac{1}{\\sqrt{x^{2}-1}}", standardForm: "\\int\\dfrac{1}{\\sqrt{x^{2}-a^{2}}}\\,dx=\\operatorname{arcosh}\\left(\\dfrac{x}{a}\\right)+C", matchLine: "a=1,\\ x>1", substitutionLine: "u=x", result: "\\operatorname{arcosh}x", tags: ["inverse hyperbolic functions", "integration", "arcosh"] },
  { integrand: "\\dfrac{1}{\\sqrt{x^{2}-9}}", standardForm: "\\int\\dfrac{1}{\\sqrt{x^{2}-a^{2}}}\\,dx=\\operatorname{arcosh}\\left(\\dfrac{x}{a}\\right)+C", matchLine: "a=3,\\ x>3", substitutionLine: "u=\\dfrac{x}{3}", result: "\\operatorname{arcosh}\\left(\\dfrac{x}{3}\\right)", tags: ["inverse hyperbolic functions", "integration", "arcosh"] },
  { integrand: "\\dfrac{1}{1-x^{2}}", standardForm: "\\int\\dfrac{1}{1-x^{2}}\\,dx=\\operatorname{artanh}x+C", matchLine: "a=1", substitutionLine: "u=x", result: "\\operatorname{artanh}x", tags: ["inverse hyperbolic functions", "integration", "artanh"] },
  { integrand: "\\dfrac{1}{4-x^{2}}", standardForm: "\\int\\dfrac{1}{a^{2}-x^{2}}\\,dx=\\dfrac1a\\operatorname{artanh}\\left(\\dfrac{x}{a}\\right)+C", matchLine: "a=2", substitutionLine: "u=\\dfrac{x}{2}", result: "\\dfrac12\\operatorname{artanh}\\left(\\dfrac{x}{2}\\right)", tags: ["inverse hyperbolic functions", "integration", "artanh"] },
  { integrand: "\\dfrac{2}{\\sqrt{4x^{2}+1}}", standardForm: "\\int\\dfrac{k}{\\sqrt{k^{2}x^{2}+1}}\\,dx=\\operatorname{arsinh}(kx)+C", matchLine: "k=2", substitutionLine: "u=2x", result: "\\operatorname{arsinh}(2x)", tags: ["inverse hyperbolic functions", "integration", "chain rule"] },
  { integrand: "\\dfrac{3}{\\sqrt{9x^{2}+1}}", standardForm: "\\int\\dfrac{k}{\\sqrt{k^{2}x^{2}+1}}\\,dx=\\operatorname{arsinh}(kx)+C", matchLine: "k=3", substitutionLine: "u=3x", result: "\\operatorname{arsinh}(3x)", tags: ["inverse hyperbolic functions", "integration", "chain rule"] },
  { integrand: "\\dfrac{3}{1-9x^{2}}", standardForm: "\\int\\dfrac{k}{1-k^{2}x^{2}}\\,dx=\\operatorname{artanh}(kx)+C", matchLine: "k=3", substitutionLine: "u=3x", result: "\\operatorname{artanh}(3x)", tags: ["inverse hyperbolic functions", "integration", "artanh"] },
  { integrand: "\\dfrac{5}{1-25x^{2}}", standardForm: "\\int\\dfrac{k}{1-k^{2}x^{2}}\\,dx=\\operatorname{artanh}(kx)+C", matchLine: "k=5", substitutionLine: "u=5x", result: "\\operatorname{artanh}(5x)", tags: ["inverse hyperbolic functions", "integration", "artanh"] },
  { integrand: "\\dfrac{1}{x^{2}-4}", standardForm: "\\int\\dfrac{1}{x^{2}-a^{2}}\\,dx=-\\dfrac1a\\operatorname{artanh}\\left(\\dfrac{x}{a}\\right)+C", matchLine: "a=2", substitutionLine: "u=\\dfrac{x}{2}", result: "-\\dfrac12\\operatorname{artanh}\\left(\\dfrac{x}{2}\\right)", tags: ["inverse hyperbolic functions", "integration", "artanh"] },
  { integrand: "\\dfrac{1}{x\\sqrt{x^{2}-1}}", standardForm: "\\int\\dfrac{1}{x\\sqrt{x^{2}-1}}\\,dx=\\operatorname{arcsech}\\left(\\dfrac1x\\right)+C\\quad(x>1)", matchLine: "x>1", substitutionLine: "u=\\dfrac1x", result: "\\operatorname{arcsech}\\left(\\dfrac1x\\right)", tags: ["inverse hyperbolic functions", "integration", "arcsech"] },
];

const definiteSpecs: DefiniteSpec[] = [
  { integral: "\\int_0^{\\ln 2}\\cosh x\\,dx", antiderivative: "\\sinh x", upperSubstitution: "\\sinh(\\ln2)", lowerSubstitution: "\\sinh0=0", simplification: "\\sinh(\\ln2)-0", result: "\\dfrac34", tags: ["hyperbolic functions", "definite integrals", "exact values"] },
  { integral: "\\int_0^{\\ln 3}\\sinh x\\,dx", antiderivative: "\\cosh x", upperSubstitution: "\\cosh(\\ln3)", lowerSubstitution: "\\cosh0=1", simplification: "\\cosh(\\ln3)-1", result: "\\dfrac23", tags: ["hyperbolic functions", "definite integrals", "exact values"] },
  { integral: "\\int_0^1\\operatorname{sech}^{2}x\\,dx", antiderivative: "\\tanh x", upperSubstitution: "\\tanh1", lowerSubstitution: "\\tanh0=0", simplification: "\\tanh1-0", result: "\\tanh1", tags: ["hyperbolic functions", "definite integrals", "tanh"] },
  { integral: "\\int_0^{\\ln2}\\operatorname{sech}^{2}x\\,dx", antiderivative: "\\tanh x", upperSubstitution: "\\tanh(\\ln2)", lowerSubstitution: "\\tanh0=0", simplification: "\\tanh(\\ln2)-0", result: "\\dfrac35", tags: ["hyperbolic functions", "definite integrals", "exact values"] },
  { integral: "\\int_0^{\\ln2}\\sinh(2x)\\,dx", antiderivative: "\\dfrac12\\cosh(2x)", upperSubstitution: "\\dfrac12\\cosh(2\\ln2)", lowerSubstitution: "\\dfrac12\\cosh0=\\dfrac12", simplification: "\\dfrac12\\cosh(2\\ln2)-\\dfrac12", result: "\\dfrac9{16}", tags: ["hyperbolic functions", "definite integrals", "chain rule"] },
  { integral: "\\int_0^{\\ln2}\\cosh(2x)\\,dx", antiderivative: "\\dfrac12\\sinh(2x)", upperSubstitution: "\\dfrac12\\sinh(2\\ln2)", lowerSubstitution: "\\dfrac12\\sinh0=0", simplification: "\\dfrac12\\sinh(2\\ln2)", result: "\\dfrac{15}{16}", tags: ["hyperbolic functions", "definite integrals", "chain rule"] },
  { integral: "\\int_0^{1/2}\\dfrac{1}{\\sqrt{1+x^{2}}}\\,dx", antiderivative: "\\operatorname{arsinh}x", upperSubstitution: "\\operatorname{arsinh}\\left(\\dfrac12\\right)", lowerSubstitution: "\\operatorname{arsinh}0=0", simplification: "\\operatorname{arsinh}\\left(\\dfrac12\\right)-0", result: "\\operatorname{arsinh}\\left(\\dfrac12\\right)", tags: ["inverse hyperbolic functions", "definite integrals", "arsinh"] },
  { integral: "\\int_0^{1/6}\\dfrac{3}{1-9x^{2}}\\,dx", antiderivative: "\\operatorname{artanh}(3x)", upperSubstitution: "\\operatorname{artanh}\\left(\\dfrac12\\right)", lowerSubstitution: "\\operatorname{artanh}0=0", simplification: "\\operatorname{artanh}\\left(\\dfrac12\\right)-0", result: "\\dfrac12\\ln3", tags: ["inverse hyperbolic functions", "definite integrals", "artanh"] },
];

const productSpecs: ProductSpec[] = [
  { functionLatex: "x\\sinh x", first: "x", second: "\\sinh x", firstDerivative: "1", secondDerivative: "\\cosh x", productLine: "\\dfrac{dy}{dx}=x\\cosh x+\\sinh x", result: "x\\cosh x+\\sinh x", tags: ["hyperbolic functions", "product rule", "sinh"] },
  { functionLatex: "x\\cosh x", first: "x", second: "\\cosh x", firstDerivative: "1", secondDerivative: "\\sinh x", productLine: "\\dfrac{dy}{dx}=x\\sinh x+\\cosh x", result: "x\\sinh x+\\cosh x", tags: ["hyperbolic functions", "product rule", "cosh"] },
  { functionLatex: "x\\tanh x", first: "x", second: "\\tanh x", firstDerivative: "1", secondDerivative: "\\operatorname{sech}^{2}x", productLine: "\\dfrac{dy}{dx}=x\\operatorname{sech}^{2}x+\\tanh x", result: "x\\operatorname{sech}^{2}x+\\tanh x", tags: ["hyperbolic functions", "product rule", "tanh"] },
  { functionLatex: "e^{x}\\sinh x", first: "e^{x}", second: "\\sinh x", firstDerivative: "e^{x}", secondDerivative: "\\cosh x", productLine: "\\dfrac{dy}{dx}=e^{x}\\cosh x+e^{x}\\sinh x", result: "e^{x}(\\cosh x+\\sinh x)", tags: ["hyperbolic functions", "product rule", "exponentials"] },
  { functionLatex: "x^{2}\\cosh(2x)", first: "x^{2}", second: "\\cosh(2x)", firstDerivative: "2x", secondDerivative: "2\\sinh(2x)", productLine: "\\dfrac{dy}{dx}=2x^{2}\\sinh(2x)+2x\\cosh(2x)", result: "2x^{2}\\sinh(2x)+2x\\cosh(2x)", tags: ["hyperbolic functions", "product rule", "chain rule"] },
  { functionLatex: "\\ln x\\,\\tanh x", first: "\\ln x", second: "\\tanh x", firstDerivative: "\\dfrac1x", secondDerivative: "\\operatorname{sech}^{2}x", productLine: "\\dfrac{dy}{dx}=\\ln x\\operatorname{sech}^{2}x+\\dfrac{\\tanh x}{x}", result: "\\ln x\\operatorname{sech}^{2}x+\\dfrac{\\tanh x}{x}", tags: ["hyperbolic functions", "product rule", "logarithms"] },
  { functionLatex: "(x+1)\\operatorname{sech}x", first: "x+1", second: "\\operatorname{sech}x", firstDerivative: "1", secondDerivative: "-\\operatorname{sech}x\\tanh x", productLine: "\\dfrac{dy}{dx}=-(x+1)\\operatorname{sech}x\\tanh x+\\operatorname{sech}x", result: "\\operatorname{sech}x-(x+1)\\operatorname{sech}x\\tanh x", tags: ["hyperbolic functions", "product rule", "sech"] },
  { functionLatex: "x\\operatorname{csch}(2x)", first: "x", second: "\\operatorname{csch}(2x)", firstDerivative: "1", secondDerivative: "-2\\operatorname{csch}(2x)\\coth(2x)", productLine: "\\dfrac{dy}{dx}=-2x\\operatorname{csch}(2x)\\coth(2x)+\\operatorname{csch}(2x)", result: "\\operatorname{csch}(2x)-2x\\operatorname{csch}(2x)\\coth(2x)", tags: ["hyperbolic functions", "product rule", "csch"] },
];

const byPartsSpecs: ByPartsSpec[] = [
  { integrand: "x\\cosh x", uChoice: "x", dvChoice: "\\cosh x", du: "1", v: "\\sinh x", partsLine: "\\int x\\cosh x\\,dx=x\\sinh x-\\int\\sinh x\\,dx", remainingIntegral: "\\int\\sinh x\\,dx", remainingValue: "\\cosh x", result: "x\\sinh x-\\cosh x", tags: ["hyperbolic functions", "integration by parts", "cosh"] },
  { integrand: "x\\sinh x", uChoice: "x", dvChoice: "\\sinh x", du: "1", v: "\\cosh x", partsLine: "\\int x\\sinh x\\,dx=x\\cosh x-\\int\\cosh x\\,dx", remainingIntegral: "\\int\\cosh x\\,dx", remainingValue: "\\sinh x", result: "x\\cosh x-\\sinh x", tags: ["hyperbolic functions", "integration by parts", "sinh"] },
  { integrand: "x\\operatorname{sech}^{2}x", uChoice: "x", dvChoice: "\\operatorname{sech}^{2}x", du: "1", v: "\\tanh x", partsLine: "\\int x\\operatorname{sech}^{2}x\\,dx=x\\tanh x-\\int\\tanh x\\,dx", remainingIntegral: "\\int\\tanh x\\,dx", remainingValue: "\\ln(\\cosh x)", result: "x\\tanh x-\\ln(\\cosh x)", tags: ["hyperbolic functions", "integration by parts", "tanh"] },
  { integrand: "x\\operatorname{csch}^{2}x", uChoice: "x", dvChoice: "\\operatorname{csch}^{2}x", du: "1", v: "-\\coth x", partsLine: "\\int x\\operatorname{csch}^{2}x\\,dx=-x\\coth x+\\int\\coth x\\,dx", remainingIntegral: "\\int\\coth x\\,dx", remainingValue: "\\ln|\\sinh x|", result: "-x\\coth x+\\ln|\\sinh x|", tags: ["hyperbolic functions", "integration by parts", "coth"] },
];

const proofSpecs: ProofSpec[] = [
  {
    prompt: "Prove by differentiation that $\\cosh^{2}x-\\sinh^{2}x=1$ for all real $x$.",
    setup: "F(x)=\\cosh^{2}x-\\sinh^{2}x",
    line2: "\\dfrac{d}{dx}\\cosh x=\\sinh x,\\quad \\dfrac{d}{dx}\\sinh x=\\cosh x",
    line3: "F'(x)=2\\cosh x\\sinh x-2\\sinh x\\cosh x",
    line4: "F'(x)=0",
    line5: "F(x)\\text{ is constant}",
    line6: "F(0)=\\cosh^{2}0-\\sinh^{2}0",
    line7: "\\cosh0=1,\\quad\\sinh0=0",
    line8: "F(0)=1^{2}-0^{2}=1",
    line9: "F(x)=1",
    line10: "\\cosh^{2}x-\\sinh^{2}x=1",
    line11: "\\text{The identity holds for all real }x",
    conclusion: "\\cosh^{2}x-\\sinh^{2}x=1",
    tags: ["hyperbolic functions", "proof", "identities"],
  },
  {
    prompt: "Starting from $y=\\operatorname{arsinh}x$, derive $\\dfrac{dy}{dx}=\\dfrac{1}{\\sqrt{1+x^{2}}}$.",
    setup: "y=\\operatorname{arsinh}x",
    line2: "x=\\sinh y",
    line3: "\\dfrac{dx}{dy}=\\cosh y",
    line4: "\\dfrac{dy}{dx}=\\dfrac{1}{\\cosh y}",
    line5: "\\cosh^{2}y-\\sinh^{2}y=1",
    line6: "\\cosh y>0\\text{ for real }y",
    line7: "\\cosh y=\\sqrt{1+\\sinh^{2}y}",
    line8: "\\cosh y=\\sqrt{1+x^{2}}",
    line9: "\\dfrac{dy}{dx}=\\dfrac{1}{\\sqrt{1+x^{2}}}",
    line10: "x\\in\\mathbb{R}",
    line11: "\\dfrac{d}{dx}\\operatorname{arsinh}x=\\dfrac{1}{\\sqrt{1+x^{2}}}",
    conclusion: "\\dfrac{d}{dx}\\operatorname{arsinh}x=\\dfrac{1}{\\sqrt{1+x^{2}}}",
    tags: ["inverse hyperbolic functions", "proof", "arsinh"],
  },
  {
    prompt: "Starting from $y=\\operatorname{artanh}x$, derive $\\dfrac{dy}{dx}=\\dfrac{1}{1-x^{2}}$.",
    setup: "y=\\operatorname{artanh}x",
    line2: "x=\\tanh y",
    line3: "\\dfrac{dx}{dy}=\\operatorname{sech}^{2}y",
    line4: "\\dfrac{dy}{dx}=\\dfrac{1}{\\operatorname{sech}^{2}y}",
    line5: "\\operatorname{sech}^{2}y=1-\\tanh^{2}y",
    line6: "|x|<1",
    line7: "\\operatorname{sech}^{2}y=1-x^{2}",
    line8: "\\dfrac{dy}{dx}=\\dfrac{1}{1-x^{2}}",
    line9: "\\dfrac{d}{dx}\\operatorname{artanh}x=\\dfrac{1}{1-x^{2}}",
    line10: "\\text{This is valid for }|x|<1",
    line11: "\\text{The derivative has been derived from the inverse relation}",
    conclusion: "\\dfrac{d}{dx}\\operatorname{artanh}x=\\dfrac{1}{1-x^{2}}",
    tags: ["inverse hyperbolic functions", "proof", "artanh"],
  },
  {
    prompt: "Use a substitution to find $\\displaystyle\\int \\sinh^{3}x\\cosh x\\,dx$.",
    setup: "I=\\int \\sinh^{3}x\\cosh x\\,dx",
    line2: "u=\\sinh x",
    line3: "\\dfrac{du}{dx}=\\cosh x",
    line4: "du=\\cosh x\\,dx",
    line5: "I=\\int u^{3}\\,du",
    line6: "\\int u^{3}\\,du=\\dfrac{u^{4}}{4}+C",
    line7: "I=\\dfrac{u^{4}}{4}+C",
    line8: "u=\\sinh x",
    line9: "I=\\dfrac{\\sinh^{4}x}{4}+C",
    line10: "\\dfrac{d}{dx}\\left(\\dfrac{\\sinh^{4}x}{4}\\right)=\\sinh^{3}x\\cosh x",
    line11: "\\text{The derivative check matches the integrand}",
    conclusion: "\\int \\sinh^{3}x\\cosh x\\,dx=\\dfrac14\\sinh^{4}x+C",
    tags: ["hyperbolic functions", "substitution", "integration"],
  },
];

export const questions: Question[] = [
  ...derivativeSpecs.map((spec, index) => derivativeQuestion(index + 1, spec)),
  ...integralSpecs.map((spec, index) => integralQuestion(index + 13, spec)),
  ...inverseDerivativeSpecs.map((spec, index) => inverseDerivativeQuestion(index + 25, spec)),
  ...inverseIntegralSpecs.map((spec, index) => inverseIntegralQuestion(index + 35, spec)),
  ...definiteSpecs.map((spec, index) => definiteQuestion(index + 47, spec)),
  ...productSpecs.map((spec, index) => productQuestion(index + 55, spec)),
  ...byPartsSpecs.map((spec, index) => byPartsQuestion(index + 63, spec)),
  ...proofSpecs.map((spec, index) => proofQuestion(index + 67, spec)),
];
