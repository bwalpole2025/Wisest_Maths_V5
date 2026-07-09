import type { Difficulty, Question, SolutionStep } from "@/lib/types";

const LEVEL = "A-Level Further Maths";
const TOPIC = "Further Maths Year 2: Pure (Core Pure 2)";
const SUBTOPIC = "Inverse trigonometric calculus";
const SUBTOPIC_ID = "fm.y2.pure.inverse-trig-calculus";

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
  inverseName: string;
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
        description: "Identify the inverse trigonometric function",
        workingLatex: `y=${spec.functionLatex}`,
        explanation: `This is a ${spec.inverseName} expression, so the main rule comes from the derivative of an inverse trigonometric function.`,
      },
      {
        description: "Recall the standard derivative",
        workingLatex: spec.ruleLatex,
        explanation: "The standard result is the anchor for the calculation; any expression inside the inverse function is then handled by the chain rule.",
      },
      {
        description: "Identify the inner function",
        workingLatex: `u=${spec.innerLatex}`,
        explanation: "Treating the inside as $u$ keeps the inverse-trig rule separate from the differentiation of the inner expression.",
      },
      {
        description: "Differentiate the inner function",
        workingLatex: `\\dfrac{du}{dx}=${spec.innerDerivative}`,
        explanation: "The chain rule needs the rate at which the inside changes with respect to $x$.",
      },
      {
        description: "Apply the chain rule",
        workingLatex: spec.chainLine,
        explanation: "The derivative of the outside is evaluated at the inner function, then multiplied by the derivative of the inner function.",
      },
      {
        description: "Simplify the expression",
        workingLatex: `\\dfrac{dy}{dx}=${spec.result}`,
        explanation: "Writing the derivative as a single clean expression makes the final answer easier to read and use.",
      },
      {
        description: "State the derivative",
        workingLatex: `\\boxed{${spec.result}}`,
        explanation: "This is the required derivative with respect to $x$.",
      },
    ],
    `$${spec.result}$`,
  );
}

type IntegralSpec = {
  integrand: string;
  ruleLatex: string;
  matchLine: string;
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
        description: "Recognise the inverse-trig form",
        workingLatex: `\\int ${spec.integrand}\\,dx`,
        explanation: "The square-root or quadratic denominator is a signal that the antiderivative may be an inverse trigonometric function.",
      },
      {
        description: "Recall the matching standard result",
        workingLatex: spec.ruleLatex,
        explanation: "Using the standard result avoids trying to force the integral into a logarithmic or power-rule form.",
      },
      {
        description: "Match the given integrand to the rule",
        workingLatex: spec.matchLine,
        explanation: "Comparing coefficients shows which scaling has already been included in the numerator or denominator.",
      },
      {
        description: "Write down the antiderivative",
        workingLatex: `\\int ${spec.integrand}\\,dx=${spec.result}+C`,
        explanation: "Once the form and scaling match, the inverse-trig expression follows directly.",
      },
      {
        description: "Check by differentiating mentally",
        workingLatex: `\\dfrac{d}{dx}\\left(${spec.result}\\right)=${spec.integrand}`,
        explanation: "A quick derivative check confirms that the chain-rule factor has been handled correctly.",
      },
      {
        description: "Include the constant",
        workingLatex: `${spec.result}+C`,
        explanation: "An indefinite integral represents a family of antiderivatives, so the constant of integration is required.",
      },
      {
        description: "State the answer",
        workingLatex: `\\boxed{${spec.result}+C}`,
        explanation: "This is the simplest exact form of the antiderivative.",
      },
    ],
    `$${spec.result}+C$`,
  );
}

type DefiniteSpec = {
  integral: string;
  antiderivative: string;
  lower: string;
  upper: string;
  lowerValue: string;
  upperValue: string;
  result: string;
  tags: string[];
};

function definiteQuestion(number: number, spec: DefiniteSpec): Question {
  return question(
    number,
    "Intermediate",
    6,
    spec.tags,
    "exact",
    `Evaluate $\\displaystyle ${spec.integral}$.`,
    [
      {
        description: "Recognise the definite inverse-trig integral",
        workingLatex: spec.integral,
        explanation: "The integrand matches a standard derivative of an inverse trigonometric function, so the exact value will come from inverse-trig endpoint values.",
      },
      {
        description: "Choose an antiderivative",
        workingLatex: `F(x)=${spec.antiderivative}`,
        explanation: "Finding the antiderivative first turns the area problem into evaluating two endpoint values.",
      },
      {
        description: "Apply the fundamental theorem of calculus",
        workingLatex: `${spec.integral}=\\left[${spec.antiderivative}\\right]_{${spec.lower}}^{${spec.upper}}`,
        explanation: "For a continuous integrand on the interval, the definite integral is the change in an antiderivative.",
      },
      {
        description: "Evaluate the upper endpoint",
        workingLatex: `F(${spec.upper})=${spec.upperValue}`,
        explanation: "The upper endpoint usually gives a familiar inverse-trig exact value or a clean inverse-trig expression.",
      },
      {
        description: "Evaluate the lower endpoint",
        workingLatex: `F(${spec.lower})=${spec.lowerValue}`,
        explanation: "The lower endpoint is subtracted, so it must be evaluated with the same antiderivative.",
      },
      {
        description: "Subtract the endpoint values",
        workingLatex: `${spec.upperValue}-(${spec.lowerValue})`,
        explanation: "Definite integration measures net change in the antiderivative from the lower limit to the upper limit.",
      },
      {
        description: "Simplify the exact value",
        workingLatex: `${spec.upperValue}-(${spec.lowerValue})=${spec.result}`,
        explanation: "Keeping exact angles such as $\\pi/6$ or $\\pi/4$ preserves the exactness of the answer.",
      },
      {
        description: "Check the sign",
        workingLatex: `${spec.result}>0`,
        explanation: "The integrands here are positive over their intervals, so a positive result is a useful consistency check.",
      },
      {
        description: "State the value",
        workingLatex: `\\boxed{${spec.result}}`,
        explanation: "This is the exact value of the definite integral.",
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
        description: "Recognise the product structure",
        workingLatex: `y=${spec.first}\\cdot ${spec.second}`,
        explanation: "The expression is a product of two functions of $x$, so the product rule is needed rather than differentiating each factor separately.",
      },
      {
        description: "Recall the product rule",
        workingLatex: "\\dfrac{d}{dx}(uv)=u\\dfrac{dv}{dx}+v\\dfrac{du}{dx}",
        explanation: "The product rule accounts for the fact that both factors change as $x$ changes.",
      },
      {
        description: "Set the two factors",
        workingLatex: `u=${spec.first},\\quad v=${spec.second}`,
        explanation: "Naming the factors makes it clear which derivative belongs to which part of the product rule.",
      },
      {
        description: "Differentiate the first factor",
        workingLatex: `\\dfrac{du}{dx}=${spec.firstDerivative}`,
        explanation: "This gives the contribution from the change in the algebraic or exponential factor.",
      },
      {
        description: "Differentiate the inverse-trig factor",
        workingLatex: `\\dfrac{dv}{dx}=${spec.secondDerivative}`,
        explanation: "The inverse-trig derivative supplies the characteristic square-root or quadratic denominator.",
      },
      {
        description: "Substitute into the product rule",
        workingLatex: spec.productLine,
        explanation: "Each term keeps one original factor and differentiates the other, which is the key structure of the product rule.",
      },
      {
        description: "Collect the terms",
        workingLatex: `\\dfrac{dy}{dx}=${spec.result}`,
        explanation: "Writing the result compactly makes both contributions to the derivative visible.",
      },
      {
        description: "Check the inverse-trig derivative",
        workingLatex: spec.secondDerivative,
        explanation: "This is the place where sign and chain-rule errors most often occur, so it is worth checking before finalising.",
      },
      {
        description: "State the derivative",
        workingLatex: `\\boxed{${spec.result}}`,
        explanation: "The expression now gives the full derivative of the original product.",
      },
    ],
    `$${spec.result}$`,
  );
}

type TangentSpec = {
  functionLatex: string;
  x0: string;
  y0: string;
  derivative: string;
  slope: string;
  line: string;
  tags: string[];
};

function tangentQuestion(number: number, spec: TangentSpec): Question {
  return question(
    number,
    "Intermediate",
    7,
    spec.tags,
    "equation",
    `Find the equation of the tangent to $y=${spec.functionLatex}$ at $x=${spec.x0}$.`,
    [
      {
        description: "Find the point on the curve",
        workingLatex: `y(${spec.x0})=${spec.y0}`,
        explanation: "A tangent line needs both a point and a gradient, so the function value gives the point of contact.",
      },
      {
        description: "Differentiate the function",
        workingLatex: `\\dfrac{dy}{dx}=${spec.derivative}`,
        explanation: "The derivative gives the gradient of the curve, and hence the gradient of the tangent, at any allowed $x$-value.",
      },
      {
        description: "Substitute the point's $x$-coordinate",
        workingLatex: `m=\\left.\\dfrac{dy}{dx}\\right|_{x=${spec.x0}}`,
        explanation: "The tangent gradient is the derivative evaluated exactly at the point of contact.",
      },
      {
        description: "Evaluate the gradient",
        workingLatex: `m=${spec.slope}`,
        explanation: "Keeping the gradient exact avoids rounding errors in the final line equation.",
      },
      {
        description: "Use point-gradient form",
        workingLatex: `y-${spec.y0}=m(x-${spec.x0})`,
        explanation: "Point-gradient form is the quickest way to build a line once a point and slope are known.",
      },
      {
        description: "Substitute the exact gradient",
        workingLatex: `y-${spec.y0}=${spec.slope}\\left(x-${spec.x0}\\right)`,
        explanation: "This line passes through the curve at the specified point and has the same local gradient as the curve.",
      },
      {
        description: "Write the final tangent",
        workingLatex: spec.line,
        explanation: "This is already an exact equation of the tangent, so no decimal approximation is needed.",
      },
      {
        description: "Check the contact point",
        workingLatex: `x=${spec.x0}\\Rightarrow y=${spec.y0}`,
        explanation: "Substituting the contact $x$-value into the line returns the curve's $y$-value, confirming it goes through the right point.",
      },
      {
        description: "Check the gradient",
        workingLatex: `\\text{gradient}=${spec.slope}`,
        explanation: "The line's gradient matches the derivative at the contact point, which is exactly the tangent condition.",
      },
      {
        description: "State the tangent equation",
        workingLatex: `\\boxed{${spec.line}}`,
        explanation: "The tangent equation is now fully determined.",
      },
    ],
    `$${spec.line}$`,
  );
}

type ByPartsSpec = {
  integrand: string;
  inverseFactor: string;
  dv: string;
  inverseDerivative: string;
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
        description: "Recognise the integration-by-parts structure",
        workingLatex: `\\int ${spec.integrand}\\,dx`,
        explanation: "An inverse trigonometric function by itself is usually integrated by treating it as multiplied by $1$.",
      },
      {
        description: "Choose $u$ and $dv$",
        workingLatex: `u=${spec.inverseFactor},\\quad dv=${spec.dv}\\,dx`,
        explanation: "Choosing the inverse-trig expression as $u$ is helpful because its derivative is an algebraic expression.",
      },
      {
        description: "Differentiate $u$",
        workingLatex: `du=${spec.inverseDerivative}\\,dx`,
        explanation: "This converts the inverse trigonometric function into a standard rational or square-root form.",
      },
      {
        description: "Integrate $dv$",
        workingLatex: "v=x",
        explanation: "Since $dv=1\\,dx$, the integrated factor is simply $x$.",
      },
      {
        description: "Recall integration by parts",
        workingLatex: "\\int u\\,dv=uv-\\int v\\,du",
        explanation: "This formula transfers the derivative onto the inverse-trig factor, which is the useful part of the method.",
      },
      {
        description: "Substitute into the formula",
        workingLatex: `\\int ${spec.integrand}\\,dx=x${spec.inverseFactor}-${spec.remainingIntegral}`,
        explanation: "The original integral has been replaced by a product term and a more standard remaining integral.",
      },
      {
        description: "Simplify the remaining integral",
        workingLatex: spec.remainingIntegral,
        explanation: "The remaining integral is now algebraic, so it can be evaluated with substitution or a logarithmic form.",
      },
      {
        description: "Evaluate the remaining integral",
        workingLatex: `${spec.remainingIntegral}=${spec.remainingValue}`,
        explanation: "This is where the inverse-trig part disappears and the calculation becomes a standard algebraic antiderivative.",
      },
      {
        description: "Substitute back",
        workingLatex: `\\int ${spec.integrand}\\,dx=x${spec.inverseFactor}-${spec.remainingValue}+C`,
        explanation: "Replacing the remaining integral gives an antiderivative entirely in terms of $x$.",
      },
      {
        description: "Simplify signs and constants",
        workingLatex: `${spec.result}+C`,
        explanation: "Combining the signs carefully gives the cleanest final antiderivative.",
      },
      {
        description: "Check the product term",
        workingLatex: `\\dfrac{d}{dx}\\left(x${spec.inverseFactor}\\right)=${spec.inverseFactor}+x(${spec.inverseDerivative})`,
        explanation: "The derivative of the product creates the original inverse-trig term plus an extra term that the remaining part cancels.",
      },
      {
        description: "Check the cancellation",
        workingLatex: `\\dfrac{d}{dx}\\left(${spec.result}\\right)=${spec.integrand}`,
        explanation: "This confirms that the algebraic term has exactly cancelled the extra product-rule contribution.",
      },
      {
        description: "Include the constant of integration",
        workingLatex: `${spec.result}+C`,
        explanation: "Because this is an indefinite integral, all antiderivatives differ by a constant.",
      },
      {
        description: "State the antiderivative",
        workingLatex: `\\boxed{${spec.result}+C}`,
        explanation: "This is the required exact antiderivative.",
      },
    ],
    `$${spec.result}+C$`,
  );
}

type BoundSpec = {
  integral: string;
  antiderivative: string;
  equation: string;
  inverseEquation: string;
  trigEquation: string;
  result: string;
  domainLine: string;
  tags: string[];
};

function boundQuestion(number: number, spec: BoundSpec): Question {
  return question(
    number,
    "Hard",
    8,
    spec.tags,
    "value",
    `Find the positive value of $a$ such that $\\displaystyle ${spec.integral}$.`,
    [
      {
        description: "Interpret the condition",
        workingLatex: spec.integral,
        explanation: "The unknown upper limit means the integral becomes an equation involving an inverse trigonometric function.",
      },
      {
        description: "Choose an antiderivative",
        workingLatex: `F(x)=${spec.antiderivative}`,
        explanation: "The integrand is one of the standard inverse-trig derivative forms, so the antiderivative is known exactly.",
      },
      {
        description: "Apply the upper and lower limits",
        workingLatex: `\\left[${spec.antiderivative}\\right]_{0}^{a}`,
        explanation: "Using the bounds turns the area condition into an equation for $a$.",
      },
      {
        description: "Use the lower endpoint",
        workingLatex: "F(0)=0",
        explanation: "These examples are chosen so the lower endpoint contributes zero, leaving only the upper endpoint.",
      },
      {
        description: "Form the equation",
        workingLatex: spec.equation,
        explanation: "The definite integral condition now says that a particular inverse-trig value must equal a known angle.",
      },
      {
        description: "Undo the inverse trigonometric function",
        workingLatex: spec.inverseEquation,
        explanation: "Applying the corresponding trigonometric function to both sides converts the inverse-trig equation into an algebraic one.",
      },
      {
        description: "Use the exact trigonometric value",
        workingLatex: spec.trigEquation,
        explanation: "Special-angle values give an exact value of $a$ without a calculator.",
      },
      {
        description: "Solve for $a$",
        workingLatex: `a=${spec.result}`,
        explanation: "Rearranging the algebraic equation gives the candidate upper limit.",
      },
      {
        description: "Check the domain",
        workingLatex: spec.domainLine,
        explanation: "The inverse sine cases require the upper limit to stay inside the allowed domain, while arctangent cases allow any positive upper limit.",
      },
      {
        description: "Check positivity",
        workingLatex: `${spec.result}>0`,
        explanation: "The question asks for the positive value, so the admissible solution must be greater than zero.",
      },
      {
        description: "Substitute back into the inverse equation",
        workingLatex: spec.equation,
        explanation: "This confirms that the chosen value gives the required exact angle in the integral condition.",
      },
      {
        description: "Reject any inadmissible alternatives",
        workingLatex: "a>0",
        explanation: "Inverse trigonometric principal values and the positive-limit condition remove any extraneous alternatives.",
      },
      {
        description: "State the value",
        workingLatex: `\\boxed{a=${spec.result}}`,
        explanation: "This is the positive upper limit satisfying the integral equation.",
      },
    ],
    `$a=${spec.result}$`,
  );
}

const derivativeSpecs: DerivativeSpec[] = [
  { functionLatex: "\\arcsin x", inverseName: "arcsine", ruleLatex: "\\dfrac{d}{dx}\\arcsin x=\\dfrac{1}{\\sqrt{1-x^{2}}}", innerLatex: "x", innerDerivative: "1", chainLine: "\\dfrac{dy}{dx}=\\dfrac{1}{\\sqrt{1-x^{2}}}\\cdot 1", result: "\\dfrac{1}{\\sqrt{1-x^{2}}}", tags: ["inverse trig", "differentiation", "arcsin"] },
  { functionLatex: "\\arccos x", inverseName: "arccosine", ruleLatex: "\\dfrac{d}{dx}\\arccos x=-\\dfrac{1}{\\sqrt{1-x^{2}}}", innerLatex: "x", innerDerivative: "1", chainLine: "\\dfrac{dy}{dx}=-\\dfrac{1}{\\sqrt{1-x^{2}}}\\cdot 1", result: "-\\dfrac{1}{\\sqrt{1-x^{2}}}", tags: ["inverse trig", "differentiation", "arccos"] },
  { functionLatex: "\\arctan x", inverseName: "arctangent", ruleLatex: "\\dfrac{d}{dx}\\arctan x=\\dfrac{1}{1+x^{2}}", innerLatex: "x", innerDerivative: "1", chainLine: "\\dfrac{dy}{dx}=\\dfrac{1}{1+x^{2}}\\cdot 1", result: "\\dfrac{1}{1+x^{2}}", tags: ["inverse trig", "differentiation", "arctan"] },
  { functionLatex: "\\arcsin(2x)", inverseName: "arcsine", ruleLatex: "\\dfrac{d}{dx}\\arcsin u=\\dfrac{u'}{\\sqrt{1-u^{2}}}", innerLatex: "2x", innerDerivative: "2", chainLine: "\\dfrac{dy}{dx}=\\dfrac{2}{\\sqrt{1-(2x)^{2}}}", result: "\\dfrac{2}{\\sqrt{1-4x^{2}}}", tags: ["inverse trig", "chain rule", "arcsin"] },
  { functionLatex: "\\arccos(3x)", inverseName: "arccosine", ruleLatex: "\\dfrac{d}{dx}\\arccos u=-\\dfrac{u'}{\\sqrt{1-u^{2}}}", innerLatex: "3x", innerDerivative: "3", chainLine: "\\dfrac{dy}{dx}=-\\dfrac{3}{\\sqrt{1-(3x)^{2}}}", result: "-\\dfrac{3}{\\sqrt{1-9x^{2}}}", tags: ["inverse trig", "chain rule", "arccos"] },
  { functionLatex: "\\arctan(5x)", inverseName: "arctangent", ruleLatex: "\\dfrac{d}{dx}\\arctan u=\\dfrac{u'}{1+u^{2}}", innerLatex: "5x", innerDerivative: "5", chainLine: "\\dfrac{dy}{dx}=\\dfrac{5}{1+(5x)^{2}}", result: "\\dfrac{5}{1+25x^{2}}", tags: ["inverse trig", "chain rule", "arctan"] },
  { functionLatex: "\\arcsin\\left(\\dfrac{x}{4}\\right)", inverseName: "arcsine", ruleLatex: "\\dfrac{d}{dx}\\arcsin u=\\dfrac{u'}{\\sqrt{1-u^{2}}}", innerLatex: "\\dfrac{x}{4}", innerDerivative: "\\dfrac14", chainLine: "\\dfrac{dy}{dx}=\\dfrac{1/4}{\\sqrt{1-(x/4)^{2}}}", result: "\\dfrac{1}{\\sqrt{16-x^{2}}}", tags: ["inverse trig", "chain rule", "arcsin"] },
  { functionLatex: "\\arccos\\left(\\dfrac{x}{5}\\right)", inverseName: "arccosine", ruleLatex: "\\dfrac{d}{dx}\\arccos u=-\\dfrac{u'}{\\sqrt{1-u^{2}}}", innerLatex: "\\dfrac{x}{5}", innerDerivative: "\\dfrac15", chainLine: "\\dfrac{dy}{dx}=-\\dfrac{1/5}{\\sqrt{1-(x/5)^{2}}}", result: "-\\dfrac{1}{\\sqrt{25-x^{2}}}", tags: ["inverse trig", "chain rule", "arccos"] },
  { functionLatex: "\\arctan\\left(\\dfrac{x}{2}\\right)", inverseName: "arctangent", ruleLatex: "\\dfrac{d}{dx}\\arctan u=\\dfrac{u'}{1+u^{2}}", innerLatex: "\\dfrac{x}{2}", innerDerivative: "\\dfrac12", chainLine: "\\dfrac{dy}{dx}=\\dfrac{1/2}{1+(x/2)^{2}}", result: "\\dfrac{2}{x^{2}+4}", tags: ["inverse trig", "chain rule", "arctan"] },
  { functionLatex: "\\arcsin(1-2x)", inverseName: "arcsine", ruleLatex: "\\dfrac{d}{dx}\\arcsin u=\\dfrac{u'}{\\sqrt{1-u^{2}}}", innerLatex: "1-2x", innerDerivative: "-2", chainLine: "\\dfrac{dy}{dx}=\\dfrac{-2}{\\sqrt{1-(1-2x)^{2}}}", result: "-\\dfrac{2}{\\sqrt{1-(1-2x)^{2}}}", tags: ["inverse trig", "chain rule", "linear substitution"] },
  { functionLatex: "\\arccos(4x-1)", inverseName: "arccosine", ruleLatex: "\\dfrac{d}{dx}\\arccos u=-\\dfrac{u'}{\\sqrt{1-u^{2}}}", innerLatex: "4x-1", innerDerivative: "4", chainLine: "\\dfrac{dy}{dx}=-\\dfrac{4}{\\sqrt{1-(4x-1)^{2}}}", result: "-\\dfrac{4}{\\sqrt{1-(4x-1)^{2}}}", tags: ["inverse trig", "chain rule", "linear substitution"] },
  { functionLatex: "\\arctan(3x-2)", inverseName: "arctangent", ruleLatex: "\\dfrac{d}{dx}\\arctan u=\\dfrac{u'}{1+u^{2}}", innerLatex: "3x-2", innerDerivative: "3", chainLine: "\\dfrac{dy}{dx}=\\dfrac{3}{1+(3x-2)^{2}}", result: "\\dfrac{3}{1+(3x-2)^{2}}", tags: ["inverse trig", "chain rule", "linear substitution"] },
];

const integralSpecs: IntegralSpec[] = [
  { integrand: "\\dfrac{1}{\\sqrt{1-x^{2}}}", ruleLatex: "\\int \\dfrac{1}{\\sqrt{1-x^{2}}}\\,dx=\\arcsin x+C", matchLine: "a=1", result: "\\arcsin x", tags: ["inverse trig", "integration", "arcsin"] },
  { integrand: "-\\dfrac{1}{\\sqrt{1-x^{2}}}", ruleLatex: "\\int -\\dfrac{1}{\\sqrt{1-x^{2}}}\\,dx=\\arccos x+C", matchLine: "a=1", result: "\\arccos x", tags: ["inverse trig", "integration", "arccos"] },
  { integrand: "\\dfrac{1}{1+x^{2}}", ruleLatex: "\\int \\dfrac{1}{1+x^{2}}\\,dx=\\arctan x+C", matchLine: "a=1", result: "\\arctan x", tags: ["inverse trig", "integration", "arctan"] },
  { integrand: "\\dfrac{2}{\\sqrt{1-4x^{2}}}", ruleLatex: "\\int \\dfrac{k}{\\sqrt{1-k^{2}x^{2}}}\\,dx=\\arcsin(kx)+C", matchLine: "k=2", result: "\\arcsin(2x)", tags: ["inverse trig", "integration", "chain rule"] },
  { integrand: "-\\dfrac{3}{\\sqrt{1-9x^{2}}}", ruleLatex: "\\int -\\dfrac{k}{\\sqrt{1-k^{2}x^{2}}}\\,dx=\\arccos(kx)+C", matchLine: "k=3", result: "\\arccos(3x)", tags: ["inverse trig", "integration", "chain rule"] },
  { integrand: "\\dfrac{4}{1+16x^{2}}", ruleLatex: "\\int \\dfrac{k}{1+k^{2}x^{2}}\\,dx=\\arctan(kx)+C", matchLine: "k=4", result: "\\arctan(4x)", tags: ["inverse trig", "integration", "arctan"] },
  { integrand: "\\dfrac{1}{\\sqrt{9-x^{2}}}", ruleLatex: "\\int \\dfrac{1}{\\sqrt{a^{2}-x^{2}}}\\,dx=\\arcsin\\left(\\dfrac{x}{a}\\right)+C", matchLine: "a=3", result: "\\arcsin\\left(\\dfrac{x}{3}\\right)", tags: ["inverse trig", "integration", "arcsin"] },
  { integrand: "-\\dfrac{1}{\\sqrt{16-x^{2}}}", ruleLatex: "\\int -\\dfrac{1}{\\sqrt{a^{2}-x^{2}}}\\,dx=\\arccos\\left(\\dfrac{x}{a}\\right)+C", matchLine: "a=4", result: "\\arccos\\left(\\dfrac{x}{4}\\right)", tags: ["inverse trig", "integration", "arccos"] },
  { integrand: "\\dfrac{1}{x^{2}+4}", ruleLatex: "\\int \\dfrac{1}{x^{2}+a^{2}}\\,dx=\\dfrac1a\\arctan\\left(\\dfrac{x}{a}\\right)+C", matchLine: "a=2", result: "\\dfrac12\\arctan\\left(\\dfrac{x}{2}\\right)", tags: ["inverse trig", "integration", "arctan"] },
  { integrand: "\\dfrac{3}{9x^{2}+1}", ruleLatex: "\\int \\dfrac{k}{1+k^{2}x^{2}}\\,dx=\\arctan(kx)+C", matchLine: "k=3", result: "\\arctan(3x)", tags: ["inverse trig", "integration", "arctan"] },
  { integrand: "\\dfrac{2}{4x^{2}+1}", ruleLatex: "\\int \\dfrac{k}{1+k^{2}x^{2}}\\,dx=\\arctan(kx)+C", matchLine: "k=2", result: "\\arctan(2x)", tags: ["inverse trig", "integration", "arctan"] },
  { integrand: "\\dfrac{5}{25x^{2}+1}", ruleLatex: "\\int \\dfrac{k}{1+k^{2}x^{2}}\\,dx=\\arctan(kx)+C", matchLine: "k=5", result: "\\arctan(5x)", tags: ["inverse trig", "integration", "arctan"] },
];

const definiteSpecs: DefiniteSpec[] = [
  { integral: "\\int_0^{1/2}\\dfrac{1}{\\sqrt{1-x^{2}}}\\,dx", antiderivative: "\\arcsin x", lower: "0", upper: "\\frac12", lowerValue: "0", upperValue: "\\frac{\\pi}{6}", result: "\\frac{\\pi}{6}", tags: ["inverse trig", "definite integrals", "arcsin"] },
  { integral: "\\int_0^{\\sqrt3}\\dfrac{1}{1+x^{2}}\\,dx", antiderivative: "\\arctan x", lower: "0", upper: "\\sqrt3", lowerValue: "0", upperValue: "\\frac{\\pi}{3}", result: "\\frac{\\pi}{3}", tags: ["inverse trig", "definite integrals", "arctan"] },
  { integral: "\\int_0^1\\dfrac{1}{4+x^{2}}\\,dx", antiderivative: "\\frac12\\arctan\\left(\\frac{x}{2}\\right)", lower: "0", upper: "1", lowerValue: "0", upperValue: "\\frac12\\arctan\\left(\\frac12\\right)", result: "\\frac12\\arctan\\left(\\frac12\\right)", tags: ["inverse trig", "definite integrals", "arctan"] },
  { integral: "\\int_0^2\\dfrac{1}{\\sqrt{9-x^{2}}}\\,dx", antiderivative: "\\arcsin\\left(\\frac{x}{3}\\right)", lower: "0", upper: "2", lowerValue: "0", upperValue: "\\arcsin\\left(\\frac23\\right)", result: "\\arcsin\\left(\\frac23\\right)", tags: ["inverse trig", "definite integrals", "arcsin"] },
  { integral: "\\int_0^{1/4}\\dfrac{4}{1+16x^{2}}\\,dx", antiderivative: "\\arctan(4x)", lower: "0", upper: "\\frac14", lowerValue: "0", upperValue: "\\frac{\\pi}{4}", result: "\\frac{\\pi}{4}", tags: ["inverse trig", "definite integrals", "chain rule"] },
  { integral: "\\int_{-1}^{1}\\dfrac{1}{1+x^{2}}\\,dx", antiderivative: "\\arctan x", lower: "-1", upper: "1", lowerValue: "-\\frac{\\pi}{4}", upperValue: "\\frac{\\pi}{4}", result: "\\frac{\\pi}{2}", tags: ["inverse trig", "definite integrals", "symmetry"] },
  { integral: "\\int_0^{1/3}\\dfrac{3}{\\sqrt{1-9x^{2}}}\\,dx", antiderivative: "\\arcsin(3x)", lower: "0", upper: "\\frac13", lowerValue: "0", upperValue: "\\frac{\\pi}{2}", result: "\\frac{\\pi}{2}", tags: ["inverse trig", "definite integrals", "chain rule"] },
  { integral: "\\int_0^1\\dfrac{2}{1+4x^{2}}\\,dx", antiderivative: "\\arctan(2x)", lower: "0", upper: "1", lowerValue: "0", upperValue: "\\arctan 2", result: "\\arctan 2", tags: ["inverse trig", "definite integrals", "arctan"] },
  { integral: "\\int_0^{\\sqrt3/2}\\dfrac{1}{\\sqrt{1-x^{2}}}\\,dx", antiderivative: "\\arcsin x", lower: "0", upper: "\\frac{\\sqrt3}{2}", lowerValue: "0", upperValue: "\\frac{\\pi}{3}", result: "\\frac{\\pi}{3}", tags: ["inverse trig", "definite integrals", "exact values"] },
  { integral: "\\int_0^3\\dfrac{1}{9+x^{2}}\\,dx", antiderivative: "\\frac13\\arctan\\left(\\frac{x}{3}\\right)", lower: "0", upper: "3", lowerValue: "0", upperValue: "\\frac{\\pi}{12}", result: "\\frac{\\pi}{12}", tags: ["inverse trig", "definite integrals", "arctan"] },
];

const productSpecs: ProductSpec[] = [
  { functionLatex: "x\\arcsin x", first: "x", second: "\\arcsin x", firstDerivative: "1", secondDerivative: "\\dfrac{1}{\\sqrt{1-x^{2}}}", productLine: "\\dfrac{dy}{dx}=x\\cdot\\dfrac{1}{\\sqrt{1-x^{2}}}+\\arcsin x\\cdot1", result: "\\arcsin x+\\dfrac{x}{\\sqrt{1-x^{2}}}", tags: ["inverse trig", "product rule", "arcsin"] },
  { functionLatex: "x\\arccos x", first: "x", second: "\\arccos x", firstDerivative: "1", secondDerivative: "-\\dfrac{1}{\\sqrt{1-x^{2}}}", productLine: "\\dfrac{dy}{dx}=x\\left(-\\dfrac{1}{\\sqrt{1-x^{2}}}\\right)+\\arccos x", result: "\\arccos x-\\dfrac{x}{\\sqrt{1-x^{2}}}", tags: ["inverse trig", "product rule", "arccos"] },
  { functionLatex: "x\\arctan x", first: "x", second: "\\arctan x", firstDerivative: "1", secondDerivative: "\\dfrac{1}{1+x^{2}}", productLine: "\\dfrac{dy}{dx}=x\\cdot\\dfrac{1}{1+x^{2}}+\\arctan x", result: "\\arctan x+\\dfrac{x}{1+x^{2}}", tags: ["inverse trig", "product rule", "arctan"] },
  { functionLatex: "e^{x}\\arctan x", first: "e^{x}", second: "\\arctan x", firstDerivative: "e^{x}", secondDerivative: "\\dfrac{1}{1+x^{2}}", productLine: "\\dfrac{dy}{dx}=e^{x}\\cdot\\dfrac{1}{1+x^{2}}+\\arctan x\\cdot e^{x}", result: "e^{x}\\arctan x+\\dfrac{e^{x}}{1+x^{2}}", tags: ["inverse trig", "product rule", "exponentials"] },
  { functionLatex: "(x^{2}+1)\\arcsin x", first: "x^{2}+1", second: "\\arcsin x", firstDerivative: "2x", secondDerivative: "\\dfrac{1}{\\sqrt{1-x^{2}}}", productLine: "\\dfrac{dy}{dx}=(x^{2}+1)\\dfrac{1}{\\sqrt{1-x^{2}}}+2x\\arcsin x", result: "2x\\arcsin x+\\dfrac{x^{2}+1}{\\sqrt{1-x^{2}}}", tags: ["inverse trig", "product rule", "polynomials"] },
  { functionLatex: "\\ln x\\,\\arctan x", first: "\\ln x", second: "\\arctan x", firstDerivative: "\\dfrac1x", secondDerivative: "\\dfrac{1}{1+x^{2}}", productLine: "\\dfrac{dy}{dx}=\\ln x\\cdot\\dfrac{1}{1+x^{2}}+\\arctan x\\cdot\\dfrac1x", result: "\\dfrac{\\ln x}{1+x^{2}}+\\dfrac{\\arctan x}{x}", tags: ["inverse trig", "product rule", "logarithms"] },
  { functionLatex: "x^{2}\\arctan(2x)", first: "x^{2}", second: "\\arctan(2x)", firstDerivative: "2x", secondDerivative: "\\dfrac{2}{1+4x^{2}}", productLine: "\\dfrac{dy}{dx}=x^{2}\\cdot\\dfrac{2}{1+4x^{2}}+2x\\arctan(2x)", result: "2x\\arctan(2x)+\\dfrac{2x^{2}}{1+4x^{2}}", tags: ["inverse trig", "product rule", "chain rule"] },
  { functionLatex: "x\\arcsin(3x)", first: "x", second: "\\arcsin(3x)", firstDerivative: "1", secondDerivative: "\\dfrac{3}{\\sqrt{1-9x^{2}}}", productLine: "\\dfrac{dy}{dx}=x\\cdot\\dfrac{3}{\\sqrt{1-9x^{2}}}+\\arcsin(3x)", result: "\\arcsin(3x)+\\dfrac{3x}{\\sqrt{1-9x^{2}}}", tags: ["inverse trig", "product rule", "chain rule"] },
  { functionLatex: "(1-x)\\arccos x", first: "1-x", second: "\\arccos x", firstDerivative: "-1", secondDerivative: "-\\dfrac{1}{\\sqrt{1-x^{2}}}", productLine: "\\dfrac{dy}{dx}=-(1-x)\\dfrac{1}{\\sqrt{1-x^{2}}}-\\arccos x", result: "-\\arccos x-\\dfrac{1-x}{\\sqrt{1-x^{2}}}", tags: ["inverse trig", "product rule", "arccos"] },
  { functionLatex: "(x+2)\\arctan(x-1)", first: "x+2", second: "\\arctan(x-1)", firstDerivative: "1", secondDerivative: "\\dfrac{1}{1+(x-1)^{2}}", productLine: "\\dfrac{dy}{dx}=(x+2)\\dfrac{1}{1+(x-1)^{2}}+\\arctan(x-1)", result: "\\arctan(x-1)+\\dfrac{x+2}{1+(x-1)^{2}}", tags: ["inverse trig", "product rule", "linear substitution"] },
];

const tangentSpecs: TangentSpec[] = [
  { functionLatex: "\\arcsin x", x0: "\\frac12", y0: "\\frac{\\pi}{6}", derivative: "\\dfrac{1}{\\sqrt{1-x^{2}}}", slope: "\\dfrac{2}{\\sqrt3}", line: "y-\\frac{\\pi}{6}=\\frac{2}{\\sqrt3}\\left(x-\\frac12\\right)", tags: ["inverse trig", "tangents", "arcsin"] },
  { functionLatex: "\\arccos x", x0: "\\frac12", y0: "\\frac{\\pi}{3}", derivative: "-\\dfrac{1}{\\sqrt{1-x^{2}}}", slope: "-\\dfrac{2}{\\sqrt3}", line: "y-\\frac{\\pi}{3}=-\\frac{2}{\\sqrt3}\\left(x-\\frac12\\right)", tags: ["inverse trig", "tangents", "arccos"] },
  { functionLatex: "\\arctan x", x0: "1", y0: "\\frac{\\pi}{4}", derivative: "\\dfrac{1}{1+x^{2}}", slope: "\\frac12", line: "y-\\frac{\\pi}{4}=\\frac12(x-1)", tags: ["inverse trig", "tangents", "arctan"] },
  { functionLatex: "\\arcsin(2x)", x0: "\\frac14", y0: "\\frac{\\pi}{6}", derivative: "\\dfrac{2}{\\sqrt{1-4x^{2}}}", slope: "\\dfrac{4}{\\sqrt3}", line: "y-\\frac{\\pi}{6}=\\frac{4}{\\sqrt3}\\left(x-\\frac14\\right)", tags: ["inverse trig", "tangents", "chain rule"] },
  { functionLatex: "\\arctan(3x)", x0: "\\frac13", y0: "\\frac{\\pi}{4}", derivative: "\\dfrac{3}{1+9x^{2}}", slope: "\\frac32", line: "y-\\frac{\\pi}{4}=\\frac32\\left(x-\\frac13\\right)", tags: ["inverse trig", "tangents", "chain rule"] },
  { functionLatex: "\\arccos\\left(\\frac{x}{2}\\right)", x0: "1", y0: "\\frac{\\pi}{3}", derivative: "-\\dfrac{1}{\\sqrt{4-x^{2}}}", slope: "-\\dfrac{1}{\\sqrt3}", line: "y-\\frac{\\pi}{3}=-\\frac{1}{\\sqrt3}(x-1)", tags: ["inverse trig", "tangents", "arccos"] },
  { functionLatex: "\\arcsin\\left(\\frac{x}{3}\\right)", x0: "\\frac32", y0: "\\frac{\\pi}{6}", derivative: "\\dfrac{1}{\\sqrt{9-x^{2}}}", slope: "\\dfrac{2}{3\\sqrt3}", line: "y-\\frac{\\pi}{6}=\\frac{2}{3\\sqrt3}\\left(x-\\frac32\\right)", tags: ["inverse trig", "tangents", "arcsin"] },
  { functionLatex: "\\arctan\\left(\\frac{x}{2}\\right)", x0: "2", y0: "\\frac{\\pi}{4}", derivative: "\\dfrac{2}{x^{2}+4}", slope: "\\frac14", line: "y-\\frac{\\pi}{4}=\\frac14(x-2)", tags: ["inverse trig", "tangents", "arctan"] },
  { functionLatex: "x+\\arctan x", x0: "0", y0: "0", derivative: "1+\\dfrac{1}{1+x^{2}}", slope: "2", line: "y=2x", tags: ["inverse trig", "tangents", "sum rule"] },
  { functionLatex: "x-\\arcsin x", x0: "0", y0: "0", derivative: "1-\\dfrac{1}{\\sqrt{1-x^{2}}}", slope: "0", line: "y=0", tags: ["inverse trig", "tangents", "stationary tangent"] },
];

const byPartsSpecs: ByPartsSpec[] = [
  { integrand: "\\arcsin x", inverseFactor: "\\arcsin x", dv: "1", inverseDerivative: "\\dfrac{1}{\\sqrt{1-x^{2}}}", remainingIntegral: "\\int\\dfrac{x}{\\sqrt{1-x^{2}}}\\,dx", remainingValue: "-\\sqrt{1-x^{2}}", result: "x\\arcsin x+\\sqrt{1-x^{2}}", tags: ["inverse trig", "integration by parts", "arcsin"] },
  { integrand: "\\arccos x", inverseFactor: "\\arccos x", dv: "1", inverseDerivative: "-\\dfrac{1}{\\sqrt{1-x^{2}}}", remainingIntegral: "\\int -\\dfrac{x}{\\sqrt{1-x^{2}}}\\,dx", remainingValue: "\\sqrt{1-x^{2}}", result: "x\\arccos x-\\sqrt{1-x^{2}}", tags: ["inverse trig", "integration by parts", "arccos"] },
  { integrand: "\\arctan x", inverseFactor: "\\arctan x", dv: "1", inverseDerivative: "\\dfrac{1}{1+x^{2}}", remainingIntegral: "\\int\\dfrac{x}{1+x^{2}}\\,dx", remainingValue: "\\frac12\\ln(1+x^{2})", result: "x\\arctan x-\\frac12\\ln(1+x^{2})", tags: ["inverse trig", "integration by parts", "arctan"] },
  { integrand: "\\arcsin(2x)", inverseFactor: "\\arcsin(2x)", dv: "1", inverseDerivative: "\\dfrac{2}{\\sqrt{1-4x^{2}}}", remainingIntegral: "\\int\\dfrac{2x}{\\sqrt{1-4x^{2}}}\\,dx", remainingValue: "-\\frac12\\sqrt{1-4x^{2}}", result: "x\\arcsin(2x)+\\frac12\\sqrt{1-4x^{2}}", tags: ["inverse trig", "integration by parts", "chain rule"] },
  { integrand: "\\arctan(3x)", inverseFactor: "\\arctan(3x)", dv: "1", inverseDerivative: "\\dfrac{3}{1+9x^{2}}", remainingIntegral: "\\int\\dfrac{3x}{1+9x^{2}}\\,dx", remainingValue: "\\frac16\\ln(1+9x^{2})", result: "x\\arctan(3x)-\\frac16\\ln(1+9x^{2})", tags: ["inverse trig", "integration by parts", "arctan"] },
  { integrand: "\\arccos(3x)", inverseFactor: "\\arccos(3x)", dv: "1", inverseDerivative: "-\\dfrac{3}{\\sqrt{1-9x^{2}}}", remainingIntegral: "\\int-\\dfrac{3x}{\\sqrt{1-9x^{2}}}\\,dx", remainingValue: "\\frac13\\sqrt{1-9x^{2}}", result: "x\\arccos(3x)-\\frac13\\sqrt{1-9x^{2}}", tags: ["inverse trig", "integration by parts", "chain rule"] },
  { integrand: "\\arcsin\\left(\\dfrac{x}{2}\\right)", inverseFactor: "\\arcsin\\left(\\dfrac{x}{2}\\right)", dv: "1", inverseDerivative: "\\dfrac{1}{\\sqrt{4-x^{2}}}", remainingIntegral: "\\int\\dfrac{x}{\\sqrt{4-x^{2}}}\\,dx", remainingValue: "-\\sqrt{4-x^{2}}", result: "x\\arcsin\\left(\\dfrac{x}{2}\\right)+\\sqrt{4-x^{2}}", tags: ["inverse trig", "integration by parts", "arcsin"] },
  { integrand: "\\arctan\\left(\\dfrac{x}{2}\\right)", inverseFactor: "\\arctan\\left(\\dfrac{x}{2}\\right)", dv: "1", inverseDerivative: "\\dfrac{2}{x^{2}+4}", remainingIntegral: "\\int\\dfrac{2x}{x^{2}+4}\\,dx", remainingValue: "\\ln(x^{2}+4)", result: "x\\arctan\\left(\\dfrac{x}{2}\\right)-\\ln(x^{2}+4)", tags: ["inverse trig", "integration by parts", "arctan"] },
];

const boundSpecs: BoundSpec[] = [
  { integral: "\\int_0^a\\dfrac{1}{1+x^{2}}\\,dx=\\frac{\\pi}{4}", antiderivative: "\\arctan x", equation: "\\arctan a=\\frac{\\pi}{4}", inverseEquation: "a=\\tan\\frac{\\pi}{4}", trigEquation: "a=1", result: "1", domainLine: "a>0\\text{ is allowed for }\\arctan a", tags: ["inverse trig", "definite integrals", "parameters"] },
  { integral: "\\int_0^a\\dfrac{1}{\\sqrt{1-x^{2}}}\\,dx=\\frac{\\pi}{6}", antiderivative: "\\arcsin x", equation: "\\arcsin a=\\frac{\\pi}{6}", inverseEquation: "a=\\sin\\frac{\\pi}{6}", trigEquation: "a=\\frac12", result: "\\frac12", domainLine: "0\\le a\\le1", tags: ["inverse trig", "definite integrals", "parameters"] },
  { integral: "\\int_0^a\\dfrac{1}{4+x^{2}}\\,dx=\\frac{\\pi}{8}", antiderivative: "\\frac12\\arctan\\left(\\frac{x}{2}\\right)", equation: "\\frac12\\arctan\\left(\\frac{a}{2}\\right)=\\frac{\\pi}{8}", inverseEquation: "\\frac{a}{2}=\\tan\\frac{\\pi}{4}", trigEquation: "\\frac{a}{2}=1", result: "2", domainLine: "a>0\\text{ is allowed for }\\arctan\\left(\\frac a2\\right)", tags: ["inverse trig", "definite integrals", "parameters"] },
  { integral: "\\int_0^a\\dfrac{2}{1+4x^{2}}\\,dx=\\frac{\\pi}{4}", antiderivative: "\\arctan(2x)", equation: "\\arctan(2a)=\\frac{\\pi}{4}", inverseEquation: "2a=\\tan\\frac{\\pi}{4}", trigEquation: "2a=1", result: "\\frac12", domainLine: "a>0\\text{ is allowed for }\\arctan(2a)", tags: ["inverse trig", "definite integrals", "parameters"] },
  { integral: "\\int_0^a\\dfrac{1}{\\sqrt{9-x^{2}}}\\,dx=\\frac{\\pi}{6}", antiderivative: "\\arcsin\\left(\\frac{x}{3}\\right)", equation: "\\arcsin\\left(\\frac{a}{3}\\right)=\\frac{\\pi}{6}", inverseEquation: "\\frac{a}{3}=\\sin\\frac{\\pi}{6}", trigEquation: "\\frac{a}{3}=\\frac12", result: "\\frac32", domainLine: "0\\le a\\le3", tags: ["inverse trig", "definite integrals", "parameters"] },
  { integral: "\\int_0^a\\dfrac{3}{1+9x^{2}}\\,dx=\\frac{\\pi}{3}", antiderivative: "\\arctan(3x)", equation: "\\arctan(3a)=\\frac{\\pi}{3}", inverseEquation: "3a=\\tan\\frac{\\pi}{3}", trigEquation: "3a=\\sqrt3", result: "\\frac{1}{\\sqrt3}", domainLine: "a>0\\text{ is allowed for }\\arctan(3a)", tags: ["inverse trig", "definite integrals", "parameters"] },
  { integral: "\\int_0^a\\dfrac{1}{\\sqrt{4-x^{2}}}\\,dx=\\frac{\\pi}{3}", antiderivative: "\\arcsin\\left(\\frac{x}{2}\\right)", equation: "\\arcsin\\left(\\frac{a}{2}\\right)=\\frac{\\pi}{3}", inverseEquation: "\\frac{a}{2}=\\sin\\frac{\\pi}{3}", trigEquation: "\\frac{a}{2}=\\frac{\\sqrt3}{2}", result: "\\sqrt3", domainLine: "0\\le a\\le2", tags: ["inverse trig", "definite integrals", "parameters"] },
  { integral: "\\int_0^a\\dfrac{5}{1+25x^{2}}\\,dx=\\frac{\\pi}{4}", antiderivative: "\\arctan(5x)", equation: "\\arctan(5a)=\\frac{\\pi}{4}", inverseEquation: "5a=\\tan\\frac{\\pi}{4}", trigEquation: "5a=1", result: "\\frac15", domainLine: "a>0\\text{ is allowed for }\\arctan(5a)", tags: ["inverse trig", "definite integrals", "parameters"] },
];

export const questions: Question[] = [
  ...derivativeSpecs.map((spec, index) => derivativeQuestion(index + 1, spec)),
  ...integralSpecs.map((spec, index) => integralQuestion(index + 13, spec)),
  ...definiteSpecs.map((spec, index) => definiteQuestion(index + 25, spec)),
  ...productSpecs.map((spec, index) => productQuestion(index + 35, spec)),
  ...tangentSpecs.map((spec, index) => tangentQuestion(index + 45, spec)),
  ...byPartsSpecs.map((spec, index) => byPartsQuestion(index + 55, spec)),
  ...boundSpecs.map((spec, index) => boundQuestion(index + 63, spec)),
];
