import type { Difficulty, Question, SolutionStep } from "@/lib/types";

const LEVEL = "A-Level Further Maths";
const TOPIC = "Further Maths Year 2: Pure (Core Pure 2)";
const SUBTOPIC = "First-order differential equations";
const SUBTOPIC_ID = "fm.y2.pure.first-order-des";

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

type SeparableSpec = {
  equation: string;
  rearranged: string;
  integralLine: string;
  integrated: string;
  result: string;
  tags: string[];
};

function separableQuestion(number: number, spec: SeparableSpec): Question {
  return question(
    number,
    "Easy",
    4,
    spec.tags,
    "expression",
    `Solve the differential equation $${spec.equation}$.`,
    [
      {
        description: "Identify the equation type",
        workingLatex: spec.equation,
        explanation: "The variables can be separated, so we aim to put every $y$ term with $dy$ and every $x$ term with $dx$.",
      },
      {
        description: "Separate the variables",
        workingLatex: spec.rearranged,
        explanation: "Separating the variables turns the differential equation into two ordinary integrals.",
      },
      {
        description: "Set up the integrals",
        workingLatex: spec.integralLine,
        explanation: "Integrating both sides reverses the derivative and begins constructing the general solution.",
      },
      {
        description: "Integrate both sides",
        workingLatex: spec.integrated,
        explanation: "Each side is integrated with respect to its own variable.",
      },
      {
        description: "Include the arbitrary constant",
        workingLatex: `${spec.integrated}+C`,
        explanation: "A first-order differential equation has a one-parameter family of solutions, represented by the constant.",
      },
      {
        description: "Rearrange if helpful",
        workingLatex: spec.result,
        explanation: "Putting the answer into a clean explicit or implicit form makes the solution easier to use.",
      },
      {
        description: "Check the family form",
        workingLatex: spec.result,
        explanation: "One arbitrary constant is expected because the equation is first order.",
      },
      {
        description: "State the general solution",
        workingLatex: `\\boxed{${spec.result}}`,
        explanation: "This is the required general solution.",
      },
    ],
    `$${spec.result}$`,
  );
}

type LinearSpec = {
  equation: string;
  pLine: string;
  integratingFactor: string;
  multiplyLine: string;
  productLine: string;
  integrateLine: string;
  result: string;
  tags: string[];
};

function linearQuestion(number: number, spec: LinearSpec): Question {
  return question(
    number,
    "Intermediate",
    6,
    spec.tags,
    "expression",
    `Solve the linear differential equation $${spec.equation}$.`,
    [
      {
        description: "Put the equation in linear form",
        workingLatex: spec.equation,
        explanation: "A first-order linear equation has the form $\\frac{dy}{dx}+P(x)y=Q(x)$.",
      },
      {
        description: "Identify $P(x)$",
        workingLatex: spec.pLine,
        explanation: "The integrating factor is built from the coefficient of $y$.",
      },
      {
        description: "Find the integrating factor",
        workingLatex: spec.integratingFactor,
        explanation: "Multiplying by this factor makes the left-hand side become the derivative of a product.",
      },
      {
        description: "Multiply the equation",
        workingLatex: spec.multiplyLine,
        explanation: "The integrating factor is applied to every term in the equation.",
      },
      {
        description: "Recognise the product derivative",
        workingLatex: spec.productLine,
        explanation: "This is the key step: the left side is now a single derivative that can be integrated directly.",
      },
      {
        description: "Integrate both sides",
        workingLatex: spec.integrateLine,
        explanation: "Integrating removes the derivative and introduces the arbitrary constant.",
      },
      {
        description: "Solve for $y$",
        workingLatex: spec.result,
        explanation: "Dividing by the integrating factor gives the solution in terms of $x$.",
      },
      {
        description: "Check the constant",
        workingLatex: spec.result,
        explanation: "The constant appears after integration, as expected for a first-order equation.",
      },
      {
        description: "State the general solution",
        workingLatex: `\\boxed{${spec.result}}`,
        explanation: "This is the required general solution.",
      },
    ],
    `$${spec.result}$`,
  );
}

type IvSpec = LinearSpec & {
  condition: string;
  constantLine: string;
  particular: string;
};

function ivQuestion(number: number, spec: IvSpec): Question {
  return question(
    number,
    "Intermediate",
    7,
    spec.tags,
    "expression",
    `Solve $${spec.equation}$ subject to $${spec.condition}$.`,
    [
      {
        description: "Write the equation in linear form",
        workingLatex: spec.equation,
        explanation: "The integrating-factor method applies once the equation is in $y'+P(x)y=Q(x)$ form.",
      },
      {
        description: "Identify $P(x)$",
        workingLatex: spec.pLine,
        explanation: "The coefficient of $y$ determines the integrating factor.",
      },
      {
        description: "Find the integrating factor",
        workingLatex: spec.integratingFactor,
        explanation: "This factor is chosen so the left side becomes the derivative of a product.",
      },
      {
        description: "Multiply through",
        workingLatex: spec.multiplyLine,
        explanation: "Every term must be multiplied by the integrating factor.",
      },
      {
        description: "Use the product derivative",
        workingLatex: spec.productLine,
        explanation: "This is what makes the equation directly integrable.",
      },
      {
        description: "Integrate",
        workingLatex: spec.integrateLine,
        explanation: "Integration gives the general solution before the initial condition is used.",
      },
      {
        description: "Solve for $y$",
        workingLatex: spec.result,
        explanation: "This isolates the dependent variable.",
      },
      {
        description: "Apply the initial condition",
        workingLatex: spec.constantLine,
        explanation: "The condition selects one member of the family of solution curves.",
      },
      {
        description: "Write the particular solution",
        workingLatex: spec.particular,
        explanation: "Substituting the constant gives the specific solution required.",
      },
      {
        description: "Check the condition",
        workingLatex: spec.condition,
        explanation: "A quick substitution confirms that the particular solution passes through the given point.",
      },
    ],
    `$${spec.particular}$`,
  );
}

type ModelSpec = {
  prompt: string;
  modelLine: string;
  equation: string;
  separatedOrIf: string;
  integrated: string;
  conditionLine: string;
  solution: string;
  interpretation: string;
  tags: string[];
};

function modelQuestion(number: number, spec: ModelSpec): Question {
  return question(
    number,
    "Hard",
    8,
    spec.tags,
    "written",
    spec.prompt,
    [
      {
        description: "Define the dependent variable",
        workingLatex: spec.modelLine,
        explanation: "A modelling problem needs a clear variable and unit context before solving the differential equation.",
      },
      {
        description: "Write the differential equation",
        workingLatex: spec.equation,
        explanation: "The words in the problem translate into a rate equation.",
      },
      {
        description: "Choose the solution method",
        workingLatex: spec.separatedOrIf,
        explanation: "Recognising whether the equation is separable or linear determines the most efficient method.",
      },
      {
        description: "Integrate or use the integrating factor",
        workingLatex: spec.integrated,
        explanation: "This step produces the general mathematical model.",
      },
      {
        description: "Use the initial information",
        workingLatex: spec.conditionLine,
        explanation: "The given starting value fixes the arbitrary constant.",
      },
      {
        description: "Write the particular model",
        workingLatex: spec.solution,
        explanation: "The particular solution is the model that matches the data in the question.",
      },
      {
        description: "Interpret the result",
        workingLatex: spec.interpretation,
        explanation: "The mathematical expression should be connected back to the real quantity being modelled.",
      },
      {
        description: "Check behaviour",
        workingLatex: spec.solution,
        explanation: "A sensible model should have behaviour consistent with the context, such as decay, growth or approach to equilibrium.",
      },
      {
        description: "State the final answer",
        workingLatex: `\\boxed{${spec.solution}}`,
        explanation: "This is the required model solution.",
      },
      {
        description: "Mention the modelling assumption",
        workingLatex: spec.equation,
        explanation: "The answer depends on the rate law assumed in the problem.",
      },
      {
        description: "Final interpretation",
        workingLatex: spec.interpretation,
        explanation: "This gives the result in the language of the original problem.",
      },
      {
        description: "Complete the solution",
        workingLatex: `\\boxed{${spec.solution}}`,
        explanation: "The solution has been found and interpreted.",
      },
      {
        description: "Conclusion",
        workingLatex: spec.solution,
        explanation: "This completes the first-order modelling problem.",
      },
    ],
    `$${spec.solution}$`,
  );
}

type HomogeneousSpec = {
  equation: string;
  substitution: string;
  derivativeLine: string;
  substituted: string;
  separated: string;
  integrated: string;
  result: string;
  tags: string[];
};

function homogeneousQuestion(number: number, spec: HomogeneousSpec): Question {
  return question(
    number,
    "Hard",
    8,
    spec.tags,
    "expression",
    `Solve the homogeneous differential equation $${spec.equation}$.`,
    [
      {
        description: "Recognise the homogeneous form",
        workingLatex: spec.equation,
        explanation: "The right-hand side depends on the ratio $y/x$, so the substitution $y=vx$ is appropriate.",
      },
      {
        description: "Make the substitution",
        workingLatex: spec.substitution,
        explanation: "Writing $y$ as $vx$ changes the equation into one involving $v$ and $x$.",
      },
      {
        description: "Differentiate the substitution",
        workingLatex: spec.derivativeLine,
        explanation: "Because $v$ depends on $x$, the product rule is needed.",
      },
      {
        description: "Substitute into the equation",
        workingLatex: spec.substituted,
        explanation: "This replaces $y$ and $dy/dx$ with expressions involving $v$.",
      },
      {
        description: "Simplify to a separable equation",
        workingLatex: spec.separated,
        explanation: "After simplification, the variables can be separated.",
      },
      {
        description: "Integrate",
        workingLatex: spec.integrated,
        explanation: "Integration gives an implicit relationship between $v$ and $x$.",
      },
      {
        description: "Substitute back",
        workingLatex: spec.result,
        explanation: "Replacing $v$ by $y/x$ returns the solution to the original variables.",
      },
      {
        description: "Include the constant",
        workingLatex: spec.result,
        explanation: "The arbitrary constant represents the family of solution curves.",
      },
      {
        description: "Check the substitution",
        workingLatex: spec.substitution,
        explanation: "The final answer should be expressed in $x$ and $y$, not in $v$ alone.",
      },
      {
        description: "State the answer",
        workingLatex: `\\boxed{${spec.result}}`,
        explanation: "This is the general solution.",
      },
      {
        description: "Confirm first-order family",
        workingLatex: spec.result,
        explanation: "One arbitrary constant is consistent with solving a first-order differential equation.",
      },
      {
        description: "Final answer",
        workingLatex: `\\boxed{${spec.result}}`,
        explanation: "The homogeneous equation is solved.",
      },
      {
        description: "Conclusion",
        workingLatex: spec.result,
        explanation: "This completes the solution.",
      },
    ],
    `$${spec.result}$`,
  );
}

type DirectionSpec = {
  equation: string;
  point: string;
  gradient: string;
  tangent: string;
  family: string;
  tags: string[];
};

function directionQuestion(number: number, spec: DirectionSpec): Question {
  return question(
    number,
    "Easy",
    4,
    spec.tags,
    "expression",
    `For the differential equation $${spec.equation}$, find the gradient and tangent to the solution curve at $${spec.point}$.`,
    [
      {
        description: "Identify the gradient function",
        workingLatex: spec.equation,
        explanation: "A first-order equation gives the gradient of each solution curve at a point.",
      },
      {
        description: "Substitute the point",
        workingLatex: spec.point,
        explanation: "The gradient at a point is found by substituting that point into the right-hand side.",
      },
      {
        description: "Find the gradient",
        workingLatex: spec.gradient,
        explanation: "This is the slope of the solution curve at the specified point.",
      },
      {
        description: "Use point-gradient form",
        workingLatex: "y-y_1=m(x-x_1)",
        explanation: "The tangent line uses the point and the gradient just found.",
      },
      {
        description: "Write the tangent",
        workingLatex: spec.tangent,
        explanation: "This line has the same gradient as the solution curve at the point.",
      },
      {
        description: "Connect to the family of curves",
        workingLatex: spec.family,
        explanation: "The tangent describes one local direction within the family of solution curves.",
      },
      {
        description: "State the answer",
        workingLatex: `\\boxed{${spec.tangent}}`,
        explanation: "This is the tangent to the solution curve at the given point.",
      },
    ],
    `$${spec.tangent}$`,
  );
}

const separableSpecs: SeparableSpec[] = [
  { equation: "\\dfrac{dy}{dx}=xy", rearranged: "\\dfrac1y\\,dy=x\\,dx", integralLine: "\\int\\dfrac1y\\,dy=\\int x\\,dx", integrated: "\\ln|y|=\\dfrac{x^{2}}2", result: "y=Ae^{x^{2}/2}", tags: ["separable equations", "exponential solutions"] },
  { equation: "\\dfrac{dy}{dx}=3x^{2}y", rearranged: "\\dfrac1y\\,dy=3x^{2}\\,dx", integralLine: "\\int\\dfrac1y\\,dy=\\int3x^{2}\\,dx", integrated: "\\ln|y|=x^{3}", result: "y=Ae^{x^{3}}", tags: ["separable equations", "exponential solutions"] },
  { equation: "\\dfrac{dy}{dx}=\\dfrac{x}{y}", rearranged: "y\\,dy=x\\,dx", integralLine: "\\int y\\,dy=\\int x\\,dx", integrated: "\\dfrac{y^{2}}2=\\dfrac{x^{2}}2", result: "y^{2}=x^{2}+C", tags: ["separable equations", "implicit solutions"] },
  { equation: "\\dfrac{dy}{dx}=\\dfrac{2x}{1+y}", rearranged: "(1+y)\\,dy=2x\\,dx", integralLine: "\\int(1+y)\\,dy=\\int2x\\,dx", integrated: "y+\\dfrac{y^{2}}2=x^{2}", result: "y+\\dfrac{y^{2}}2=x^{2}+C", tags: ["separable equations", "implicit solutions"] },
  { equation: "\\dfrac{dy}{dx}=x(1+y^{2})", rearranged: "\\dfrac1{1+y^{2}}\\,dy=x\\,dx", integralLine: "\\int\\dfrac1{1+y^{2}}\\,dy=\\int x\\,dx", integrated: "\\arctan y=\\dfrac{x^{2}}2", result: "y=\\tan\\left(\\dfrac{x^{2}}2+C\\right)", tags: ["separable equations", "trigonometric solutions"] },
  { equation: "\\dfrac{dy}{dx}=e^{x-y}", rearranged: "e^{y}\\,dy=e^{x}\\,dx", integralLine: "\\int e^{y}\\,dy=\\int e^{x}\\,dx", integrated: "e^{y}=e^{x}", result: "e^{y}=e^{x}+C", tags: ["separable equations", "exponential functions"] },
  { equation: "\\dfrac{dy}{dx}=\\dfrac{y}{x}", rearranged: "\\dfrac1y\\,dy=\\dfrac1x\\,dx", integralLine: "\\int\\dfrac1y\\,dy=\\int\\dfrac1x\\,dx", integrated: "\\ln|y|=\\ln|x|", result: "y=Cx", tags: ["separable equations", "power laws"] },
  { equation: "\\dfrac{dy}{dx}=\\dfrac{2y}{x}", rearranged: "\\dfrac1y\\,dy=2\\dfrac1x\\,dx", integralLine: "\\int\\dfrac1y\\,dy=\\int\\dfrac2x\\,dx", integrated: "\\ln|y|=2\\ln|x|", result: "y=Cx^{2}", tags: ["separable equations", "power laws"] },
  { equation: "\\dfrac{dy}{dx}=\\dfrac{x^{2}}{y^{2}}", rearranged: "y^{2}\\,dy=x^{2}\\,dx", integralLine: "\\int y^{2}\\,dy=\\int x^{2}\\,dx", integrated: "\\dfrac{y^{3}}3=\\dfrac{x^{3}}3", result: "y^{3}=x^{3}+C", tags: ["separable equations", "implicit solutions"] },
  { equation: "\\dfrac{dy}{dx}=\\cos x\\,e^{-y}", rearranged: "e^{y}\\,dy=\\cos x\\,dx", integralLine: "\\int e^{y}\\,dy=\\int\\cos x\\,dx", integrated: "e^{y}=\\sin x", result: "e^{y}=\\sin x+C", tags: ["separable equations", "trigonometric functions"] },
  { equation: "\\dfrac{dy}{dx}=\\dfrac{\\sin x}{\\cos y}", rearranged: "\\cos y\\,dy=\\sin x\\,dx", integralLine: "\\int\\cos y\\,dy=\\int\\sin x\\,dx", integrated: "\\sin y=-\\cos x", result: "\\sin y+\\cos x=C", tags: ["separable equations", "trigonometric functions"] },
  { equation: "\\dfrac{dy}{dx}=\\dfrac{x+1}{y-2}", rearranged: "(y-2)\\,dy=(x+1)\\,dx", integralLine: "\\int(y-2)\\,dy=\\int(x+1)\\,dx", integrated: "\\dfrac{y^{2}}2-2y=\\dfrac{x^{2}}2+x", result: "\\dfrac{y^{2}}2-2y=\\dfrac{x^{2}}2+x+C", tags: ["separable equations", "implicit solutions"] },
];

const linearSpecs: LinearSpec[] = [
  { equation: "\\dfrac{dy}{dx}+y=e^{x}", pLine: "P(x)=1", integratingFactor: "\\mu=e^{\\int1\\,dx}=e^{x}", multiplyLine: "e^{x}\\dfrac{dy}{dx}+e^{x}y=e^{2x}", productLine: "\\dfrac{d}{dx}(e^{x}y)=e^{2x}", integrateLine: "e^{x}y=\\dfrac12e^{2x}+C", result: "y=\\dfrac12e^{x}+Ce^{-x}", tags: ["linear equations", "integrating factors"] },
  { equation: "\\dfrac{dy}{dx}-y=e^{2x}", pLine: "P(x)=-1", integratingFactor: "\\mu=e^{-x}", multiplyLine: "e^{-x}\\dfrac{dy}{dx}-e^{-x}y=e^{x}", productLine: "\\dfrac{d}{dx}(e^{-x}y)=e^{x}", integrateLine: "e^{-x}y=e^{x}+C", result: "y=e^{2x}+Ce^{x}", tags: ["linear equations", "integrating factors"] },
  { equation: "\\dfrac{dy}{dx}+2y=6", pLine: "P(x)=2", integratingFactor: "\\mu=e^{2x}", multiplyLine: "e^{2x}\\dfrac{dy}{dx}+2e^{2x}y=6e^{2x}", productLine: "\\dfrac{d}{dx}(e^{2x}y)=6e^{2x}", integrateLine: "e^{2x}y=3e^{2x}+C", result: "y=3+Ce^{-2x}", tags: ["linear equations", "constant forcing"] },
  { equation: "\\dfrac{dy}{dx}+3y=\\sin x", pLine: "P(x)=3", integratingFactor: "\\mu=e^{3x}", multiplyLine: "e^{3x}y'+3e^{3x}y=e^{3x}\\sin x", productLine: "\\dfrac{d}{dx}(e^{3x}y)=e^{3x}\\sin x", integrateLine: "e^{3x}y=\\dfrac{e^{3x}(3\\sin x-\\cos x)}{10}+C", result: "y=\\dfrac{3\\sin x-\\cos x}{10}+Ce^{-3x}", tags: ["linear equations", "trigonometric forcing"] },
  { equation: "\\dfrac{dy}{dx}+y=\\cos x", pLine: "P(x)=1", integratingFactor: "\\mu=e^{x}", multiplyLine: "e^{x}y'+e^{x}y=e^{x}\\cos x", productLine: "\\dfrac{d}{dx}(e^{x}y)=e^{x}\\cos x", integrateLine: "e^{x}y=\\dfrac{e^{x}(\\sin x+\\cos x)}2+C", result: "y=\\dfrac{\\sin x+\\cos x}{2}+Ce^{-x}", tags: ["linear equations", "trigonometric forcing"] },
  { equation: "\\dfrac{dy}{dx}+\\dfrac{1}{x}y=x", pLine: "P(x)=\\dfrac1x", integratingFactor: "\\mu=e^{\\int1/x\\,dx}=x", multiplyLine: "x\\dfrac{dy}{dx}+y=x^{2}", productLine: "\\dfrac{d}{dx}(xy)=x^{2}", integrateLine: "xy=\\dfrac{x^{3}}3+C", result: "y=\\dfrac{x^{2}}3+\\dfrac{C}{x}", tags: ["linear equations", "variable coefficients"] },
  { equation: "\\dfrac{dy}{dx}+\\dfrac{2}{x}y=x^{2}", pLine: "P(x)=\\dfrac2x", integratingFactor: "\\mu=x^{2}", multiplyLine: "x^{2}y'+2xy=x^{4}", productLine: "\\dfrac{d}{dx}(x^{2}y)=x^{4}", integrateLine: "x^{2}y=\\dfrac{x^{5}}5+C", result: "y=\\dfrac{x^{3}}5+\\dfrac{C}{x^{2}}", tags: ["linear equations", "variable coefficients"] },
  { equation: "\\dfrac{dy}{dx}-\\dfrac{1}{x}y=x^{2}", pLine: "P(x)=-\\dfrac1x", integratingFactor: "\\mu=x^{-1}", multiplyLine: "\\dfrac1x y'-\\dfrac1{x^{2}}y=x", productLine: "\\dfrac{d}{dx}\\left(\\dfrac{y}{x}\\right)=x", integrateLine: "\\dfrac{y}{x}=\\dfrac{x^{2}}2+C", result: "y=\\dfrac{x^{3}}2+Cx", tags: ["linear equations", "variable coefficients"] },
  { equation: "\\dfrac{dy}{dx}+2xy=2x", pLine: "P(x)=2x", integratingFactor: "\\mu=e^{x^{2}}", multiplyLine: "e^{x^{2}}y'+2xe^{x^{2}}y=2xe^{x^{2}}", productLine: "\\dfrac{d}{dx}(e^{x^{2}}y)=2xe^{x^{2}}", integrateLine: "e^{x^{2}}y=e^{x^{2}}+C", result: "y=1+Ce^{-x^{2}}", tags: ["linear equations", "integrating factors"] },
  { equation: "\\dfrac{dy}{dx}-2xy=x", pLine: "P(x)=-2x", integratingFactor: "\\mu=e^{-x^{2}}", multiplyLine: "e^{-x^{2}}y'-2xe^{-x^{2}}y=xe^{-x^{2}}", productLine: "\\dfrac{d}{dx}(e^{-x^{2}}y)=xe^{-x^{2}}", integrateLine: "e^{-x^{2}}y=-\\dfrac12e^{-x^{2}}+C", result: "y=-\\dfrac12+Ce^{x^{2}}", tags: ["linear equations", "integrating factors"] },
  { equation: "\\dfrac{dy}{dx}+\\tan x\\,y=\\sec x", pLine: "P(x)=\\tan x", integratingFactor: "\\mu=e^{\\int\\tan x\\,dx}=\\sec x", multiplyLine: "\\sec x\\,y'+\\sec x\\tan x\\,y=\\sec^{2}x", productLine: "\\dfrac{d}{dx}(y\\sec x)=\\sec^{2}x", integrateLine: "y\\sec x=\\tan x+C", result: "y=\\sin x+C\\cos x", tags: ["linear equations", "trigonometric coefficients"] },
  { equation: "\\dfrac{dy}{dx}-\\cot x\\,y=\\sin x", pLine: "P(x)=-\\cot x", integratingFactor: "\\mu=e^{-\\int\\cot x\\,dx}=\\csc x", multiplyLine: "\\csc x\\,y'-\\csc x\\cot x\\,y=1", productLine: "\\dfrac{d}{dx}(y\\csc x)=1", integrateLine: "y\\csc x=x+C", result: "y=(x+C)\\sin x", tags: ["linear equations", "trigonometric coefficients"] },
  { equation: "\\dfrac{dy}{dx}+4y=8e^{-x}", pLine: "P(x)=4", integratingFactor: "\\mu=e^{4x}", multiplyLine: "e^{4x}y'+4e^{4x}y=8e^{3x}", productLine: "\\dfrac{d}{dx}(e^{4x}y)=8e^{3x}", integrateLine: "e^{4x}y=\\dfrac83e^{3x}+C", result: "y=\\dfrac83e^{-x}+Ce^{-4x}", tags: ["linear equations", "exponential forcing"] },
  { equation: "\\dfrac{dy}{dx}+\\dfrac{3}{x}y=1", pLine: "P(x)=\\dfrac3x", integratingFactor: "\\mu=x^{3}", multiplyLine: "x^{3}y'+3x^{2}y=x^{3}", productLine: "\\dfrac{d}{dx}(x^{3}y)=x^{3}", integrateLine: "x^{3}y=\\dfrac{x^{4}}4+C", result: "y=\\dfrac{x}{4}+\\dfrac{C}{x^{3}}", tags: ["linear equations", "variable coefficients"] },
  { equation: "\\dfrac{dy}{dx}+\\dfrac{1}{1+x}y=1", pLine: "P(x)=\\dfrac{1}{1+x}", integratingFactor: "\\mu=1+x", multiplyLine: "(1+x)y'+y=1+x", productLine: "\\dfrac{d}{dx}((1+x)y)=1+x", integrateLine: "(1+x)y=x+\\dfrac{x^{2}}2+C", result: "y=\\dfrac{x+x^{2}/2+C}{1+x}", tags: ["linear equations", "variable coefficients"] },
  { equation: "\\dfrac{dy}{dx}-\\dfrac{2}{1+x}y=(1+x)^{2}", pLine: "P(x)=-\\dfrac{2}{1+x}", integratingFactor: "\\mu=(1+x)^{-2}", multiplyLine: "(1+x)^{-2}y'-2(1+x)^{-3}y=1", productLine: "\\dfrac{d}{dx}((1+x)^{-2}y)=1", integrateLine: "(1+x)^{-2}y=x+C", result: "y=(x+C)(1+x)^{2}", tags: ["linear equations", "variable coefficients"] },
];

const ivSpecs: IvSpec[] = [
  { ...linearSpecs[0], condition: "y(0)=2", constantLine: "2=\\dfrac12+C\\Rightarrow C=\\dfrac32", particular: "y=\\dfrac12e^{x}+\\dfrac32e^{-x}" },
  { ...linearSpecs[2], condition: "y(0)=1", constantLine: "1=3+C\\Rightarrow C=-2", particular: "y=3-2e^{-2x}" },
  { ...linearSpecs[5], condition: "y(1)=2", constantLine: "2=\\dfrac13+C\\Rightarrow C=\\dfrac53", particular: "y=\\dfrac{x^{2}}3+\\dfrac{5}{3x}" },
  { ...linearSpecs[8], condition: "y(0)=4", constantLine: "4=1+C\\Rightarrow C=3", particular: "y=1+3e^{-x^{2}}" },
  { ...linearSpecs[10], condition: "y(0)=0", constantLine: "0=0+C\\Rightarrow C=0", particular: "y=\\sin x" },
  { ...linearSpecs[12], condition: "y(0)=5", constantLine: "5=\\dfrac83+C\\Rightarrow C=\\dfrac73", particular: "y=\\dfrac83e^{-x}+\\dfrac73e^{-4x}" },
  { ...linearSpecs[1], condition: "y(0)=3", constantLine: "3=1+C\\Rightarrow C=2", particular: "y=e^{2x}+2e^{x}" },
  { ...linearSpecs[6], condition: "y(1)=1", constantLine: "1=\\dfrac15+C\\Rightarrow C=\\dfrac45", particular: "y=\\dfrac{x^{3}}5+\\dfrac{4}{5x^{2}}" },
  { ...linearSpecs[7], condition: "y(1)=0", constantLine: "0=\\dfrac12+C\\Rightarrow C=-\\dfrac12", particular: "y=\\dfrac{x^{3}}2-\\dfrac{x}{2}" },
  { ...linearSpecs[9], condition: "y(0)=0", constantLine: "0=-\\dfrac12+C\\Rightarrow C=\\dfrac12", particular: "y=-\\dfrac12+\\dfrac12e^{x^{2}}" },
  { ...linearSpecs[13], condition: "y(1)=1", constantLine: "1=\\dfrac14+C\\Rightarrow C=\\dfrac34", particular: "y=\\dfrac{x}{4}+\\dfrac{3}{4x^{3}}" },
  { ...linearSpecs[14], condition: "y(0)=2", constantLine: "2=C", particular: "y=\\dfrac{x+x^{2}/2+2}{1+x}" },
  { ...linearSpecs[15], condition: "y(0)=1", constantLine: "1=C", particular: "y=(x+1)(1+x)^{2}" },
  { ...linearSpecs[11], condition: "y\\left(\\dfrac{\\pi}{2}\\right)=2", constantLine: "2=\\left(\\dfrac{\\pi}{2}+C\\right)\\Rightarrow C=2-\\dfrac{\\pi}{2}", particular: "y=\\left(x+2-\\dfrac{\\pi}{2}\\right)\\sin x" },
];

const modelSpecs: ModelSpec[] = [
  { prompt: "A quantity $N$ grows at a rate proportional to $N$. Initially $N=50$ and $\\frac{dN}{dt}=0.2N$. Find $N(t)$.", modelLine: "N=N(t)", equation: "\\dfrac{dN}{dt}=0.2N", separatedOrIf: "\\dfrac1N\\,dN=0.2\\,dt", integrated: "\\ln N=0.2t+C", conditionLine: "N(0)=50\\Rightarrow C=\\ln50", solution: "N=50e^{0.2t}", interpretation: "N\\text{ grows exponentially from }50", tags: ["modelling", "exponential growth", "separable equations"] },
  { prompt: "A substance decays according to $\\frac{dM}{dt}=-0.3M$ with $M(0)=80$. Find $M(t)$.", modelLine: "M=M(t)", equation: "\\dfrac{dM}{dt}=-0.3M", separatedOrIf: "\\dfrac1M\\,dM=-0.3\\,dt", integrated: "\\ln M=-0.3t+C", conditionLine: "M(0)=80\\Rightarrow C=\\ln80", solution: "M=80e^{-0.3t}", interpretation: "M\\text{ decreases exponentially}", tags: ["modelling", "exponential decay", "separable equations"] },
  { prompt: "A tank contains salt amount $S$ grams satisfying $\\frac{dS}{dt}+0.1S=5$, with $S(0)=20$. Find $S(t)$.", modelLine: "S=S(t)", equation: "\\dfrac{dS}{dt}+0.1S=5", separatedOrIf: "\\mu=e^{0.1t}", integrated: "\\dfrac{d}{dt}(e^{0.1t}S)=5e^{0.1t}", conditionLine: "S=50+Ce^{-0.1t},\\quad S(0)=20\\Rightarrow C=-30", solution: "S=50-30e^{-0.1t}", interpretation: "S\\text{ tends to the equilibrium amount }50", tags: ["modelling", "linear equations", "mixing"] },
  { prompt: "A body cools in a room at $20^\\circ$C according to $\\frac{dT}{dt}=-0.4(T-20)$ with $T(0)=100$. Find $T(t)$.", modelLine: "T=T(t)", equation: "\\dfrac{dT}{dt}=-0.4(T-20)", separatedOrIf: "\\dfrac{1}{T-20}\\,dT=-0.4\\,dt", integrated: "\\ln|T-20|=-0.4t+C", conditionLine: "T(0)=100\\Rightarrow T-20=80", solution: "T=20+80e^{-0.4t}", interpretation: "T\\text{ approaches the room temperature }20", tags: ["modelling", "Newton cooling", "separable equations"] },
  { prompt: "A population $P$ satisfies $\\frac{dP}{dt}=0.5P(1-P/1000)$ with $P(0)=100$. Give the implicit separated solution.", modelLine: "P=P(t)", equation: "\\dfrac{dP}{dt}=0.5P\\left(1-\\dfrac{P}{1000}\\right)", separatedOrIf: "\\dfrac{1000}{P(1000-P)}\\,dP=0.5\\,dt", integrated: "\\ln\\left|\\dfrac{P}{1000-P}\\right|=0.5t+C", conditionLine: "P(0)=100\\Rightarrow \\dfrac{P}{1000-P}=\\dfrac19", solution: "\\dfrac{P}{1000-P}=\\dfrac19e^{0.5t}", interpretation: "P\\text{ grows towards the carrying capacity }1000", tags: ["modelling", "logistic growth", "separable equations"] },
  { prompt: "A velocity $v$ satisfies $\\frac{dv}{dt}+2v=10$ with $v(0)=0$. Find $v(t)$.", modelLine: "v=v(t)", equation: "\\dfrac{dv}{dt}+2v=10", separatedOrIf: "\\mu=e^{2t}", integrated: "\\dfrac{d}{dt}(e^{2t}v)=10e^{2t}", conditionLine: "v=5+Ce^{-2t},\\quad v(0)=0\\Rightarrow C=-5", solution: "v=5(1-e^{-2t})", interpretation: "v\\text{ tends to terminal velocity }5", tags: ["modelling", "terminal velocity", "linear equations"] },
  { prompt: "A capacitor charge $Q$ satisfies $\\frac{dQ}{dt}+3Q=12$, with $Q(0)=0$. Find $Q(t)$.", modelLine: "Q=Q(t)", equation: "\\dfrac{dQ}{dt}+3Q=12", separatedOrIf: "\\mu=e^{3t}", integrated: "\\dfrac{d}{dt}(e^{3t}Q)=12e^{3t}", conditionLine: "Q=4+Ce^{-3t},\\quad Q(0)=0\\Rightarrow C=-4", solution: "Q=4(1-e^{-3t})", interpretation: "Q\\text{ approaches the limiting charge }4", tags: ["modelling", "linear equations", "circuits"] },
  { prompt: "A concentration $C$ satisfies $\\frac{dC}{dt}=2-0.5C$, with $C(0)=10$. Find $C(t)$.", modelLine: "C=C(t)", equation: "\\dfrac{dC}{dt}+0.5C=2", separatedOrIf: "\\mu=e^{0.5t}", integrated: "\\dfrac{d}{dt}(e^{0.5t}C)=2e^{0.5t}", conditionLine: "C=4+Ae^{-0.5t},\\quad C(0)=10\\Rightarrow A=6", solution: "C=4+6e^{-0.5t}", interpretation: "C\\text{ tends to }4", tags: ["modelling", "linear equations", "equilibrium"] },
  { prompt: "A curve has gradient $\\frac{dy}{dx}=2x(y+1)$ and passes through $(0,2)$. Find its equation.", modelLine: "y=y(x)", equation: "\\dfrac{dy}{dx}=2x(y+1)", separatedOrIf: "\\dfrac1{y+1}\\,dy=2x\\,dx", integrated: "\\ln|y+1|=x^{2}+C", conditionLine: "y(0)=2\\Rightarrow y+1=3", solution: "y=3e^{x^{2}}-1", interpretation: "\\text{The curve passes through }(0,2)", tags: ["curves", "separable equations", "initial conditions"] },
  { prompt: "A curve has gradient $\\frac{dy}{dx}=\\frac{x}{y}$ and passes through $(3,4)$. Find the family member.", modelLine: "y=y(x)", equation: "\\dfrac{dy}{dx}=\\dfrac{x}{y}", separatedOrIf: "y\\,dy=x\\,dx", integrated: "y^{2}=x^{2}+C", conditionLine: "16=9+C\\Rightarrow C=7", solution: "y^{2}=x^{2}+7", interpretation: "\\text{The selected curve passes through }(3,4)", tags: ["curves", "separable equations", "initial conditions"] },
  { prompt: "A pollutant amount $A$ satisfies $\\frac{dA}{dt}+0.2A=12$, with $A(0)=30$. Find $A(t)$.", modelLine: "A=A(t)", equation: "\\dfrac{dA}{dt}+0.2A=12", separatedOrIf: "\\mu=e^{0.2t}", integrated: "\\dfrac{d}{dt}(e^{0.2t}A)=12e^{0.2t}", conditionLine: "A=60+Ce^{-0.2t},\\quad A(0)=30\\Rightarrow C=-30", solution: "A=60-30e^{-0.2t}", interpretation: "A\\text{ approaches }60", tags: ["modelling", "linear equations", "equilibrium"] },
  { prompt: "A quantity $X$ is removed at a rate proportional to $X-5$, so $\\frac{dX}{dt}=-0.6(X-5)$ and $X(0)=17$. Find $X(t)$.", modelLine: "X=X(t)", equation: "\\dfrac{dX}{dt}=-0.6(X-5)", separatedOrIf: "\\dfrac1{X-5}\\,dX=-0.6\\,dt", integrated: "\\ln|X-5|=-0.6t+C", conditionLine: "X(0)=17\\Rightarrow X-5=12", solution: "X=5+12e^{-0.6t}", interpretation: "X\\text{ approaches }5", tags: ["modelling", "separable equations", "equilibrium"] },
];

const homogeneousSpecs: HomogeneousSpec[] = [
  { equation: "\\dfrac{dy}{dx}=\\dfrac{x+y}{x}", substitution: "y=vx", derivativeLine: "\\dfrac{dy}{dx}=v+x\\dfrac{dv}{dx}", substituted: "v+x\\dfrac{dv}{dx}=1+v", separated: "x\\dfrac{dv}{dx}=1\\Rightarrow dv=\\dfrac{dx}{x}", integrated: "v=\\ln|x|+C", result: "\\dfrac{y}{x}=\\ln|x|+C", tags: ["homogeneous equations", "substitution"] },
  { equation: "\\dfrac{dy}{dx}=\\dfrac{y}{x}+x", substitution: "y=vx", derivativeLine: "\\dfrac{dy}{dx}=v+x\\dfrac{dv}{dx}", substituted: "v+x\\dfrac{dv}{dx}=v+x", separated: "\\dfrac{dv}{dx}=1", integrated: "v=x+C", result: "y=x^{2}+Cx", tags: ["substitution", "first-order equations"] },
  { equation: "\\dfrac{dy}{dx}=\\dfrac{x-y}{x}", substitution: "y=vx", derivativeLine: "\\dfrac{dy}{dx}=v+x\\dfrac{dv}{dx}", substituted: "v+x\\dfrac{dv}{dx}=1-v", separated: "\\dfrac{dv}{1-2v}=\\dfrac{dx}{x}", integrated: "-\\dfrac12\\ln|1-2v|=\\ln|x|+C", result: "1-\\dfrac{2y}{x}=\\dfrac{C}{x^{2}}", tags: ["homogeneous equations", "substitution"] },
  { equation: "\\dfrac{dy}{dx}=\\left(\\dfrac{y}{x}\\right)^{2}", substitution: "y=vx", derivativeLine: "\\dfrac{dy}{dx}=v+x\\dfrac{dv}{dx}", substituted: "v+x\\dfrac{dv}{dx}=v^{2}", separated: "\\dfrac{dv}{v^{2}-v}=\\dfrac{dx}{x}", integrated: "\\ln\\left|\\dfrac{v-1}{v}\\right|=\\ln|x|+C", result: "\\dfrac{y-x}{y}=Cx", tags: ["homogeneous equations", "substitution"] },
  { equation: "\\dfrac{dy}{dx}=1+\\dfrac{y}{x}+\\left(\\dfrac{y}{x}\\right)^{2}", substitution: "y=vx", derivativeLine: "\\dfrac{dy}{dx}=v+x\\dfrac{dv}{dx}", substituted: "v+x\\dfrac{dv}{dx}=1+v+v^{2}", separated: "\\dfrac{dv}{1+v^{2}}=\\dfrac{dx}{x}", integrated: "\\arctan v=\\ln|x|+C", result: "\\arctan\\left(\\dfrac{y}{x}\\right)=\\ln|x|+C", tags: ["homogeneous equations", "substitution"] },
  { equation: "\\dfrac{dy}{dx}=\\dfrac{2y+x}{x}", substitution: "y=vx", derivativeLine: "\\dfrac{dy}{dx}=v+x\\dfrac{dv}{dx}", substituted: "v+x\\dfrac{dv}{dx}=2v+1", separated: "\\dfrac{dv}{v+1}=\\dfrac{dx}{x}", integrated: "\\ln|v+1|=\\ln|x|+C", result: "\\dfrac{y}{x}+1=Cx", tags: ["homogeneous equations", "substitution"] },
  { equation: "\\dfrac{dy}{dx}=\\dfrac{y-x}{x}", substitution: "y=vx", derivativeLine: "\\dfrac{dy}{dx}=v+x\\dfrac{dv}{dx}", substituted: "v+x\\dfrac{dv}{dx}=v-1", separated: "dv=-\\dfrac{dx}{x}", integrated: "v=-\\ln|x|+C", result: "\\dfrac{y}{x}=C-\\ln|x|", tags: ["homogeneous equations", "substitution"] },
  { equation: "\\dfrac{dy}{dx}=\\dfrac{x}{y}", substitution: "y=vx", derivativeLine: "\\dfrac{dy}{dx}=v+x\\dfrac{dv}{dx}", substituted: "v+x\\dfrac{dv}{dx}=\\dfrac1v", separated: "\\dfrac{v}{1-v^{2}}\\,dv=\\dfrac{dx}{x}", integrated: "-\\dfrac12\\ln|1-v^{2}|=\\ln|x|+C", result: "1-\\dfrac{y^{2}}{x^{2}}=\\dfrac{C}{x^{2}}", tags: ["homogeneous equations", "substitution"] },
];

const directionSpecs: DirectionSpec[] = [
  { equation: "\\dfrac{dy}{dx}=x+y", point: "(1,2)", gradient: "m=1+2=3", tangent: "y-2=3(x-1)", family: "\\text{Each solution curve has local gradient }x+y", tags: ["direction fields", "tangents"] },
  { equation: "\\dfrac{dy}{dx}=xy", point: "(2,3)", gradient: "m=2\\cdot3=6", tangent: "y-3=6(x-2)", family: "\\text{The family has gradients proportional to }xy", tags: ["direction fields", "tangents"] },
  { equation: "\\dfrac{dy}{dx}=x-y", point: "(4,1)", gradient: "m=4-1=3", tangent: "y-1=3(x-4)", family: "\\text{The gradient depends on the difference }x-y", tags: ["direction fields", "tangents"] },
  { equation: "\\dfrac{dy}{dx}=2x+y", point: "(0,5)", gradient: "m=0+5=5", tangent: "y-5=5x", family: "\\text{The tangent shows the local solution direction}", tags: ["direction fields", "tangents"] },
  { equation: "\\dfrac{dy}{dx}=\\dfrac{x}{y}", point: "(6,3)", gradient: "m=\\dfrac63=2", tangent: "y-3=2(x-6)", family: "\\text{This tangent is one segment of the direction field}", tags: ["direction fields", "tangents"] },
  { equation: "\\dfrac{dy}{dx}=y(1-y)", point: "(0,\\frac12)", gradient: "m=\\dfrac12\\left(1-\\dfrac12\\right)=\\dfrac14", tangent: "y-\\dfrac12=\\dfrac14x", family: "\\text{The gradient is positive between }0\\text{ and }1", tags: ["direction fields", "logistic equations"] },
  { equation: "\\dfrac{dy}{dx}=3-y", point: "(2,1)", gradient: "m=2", tangent: "y-1=2(x-2)", family: "\\text{The solution curves approach the equilibrium }y=3", tags: ["direction fields", "equilibrium"] },
  { equation: "\\dfrac{dy}{dx}=x^{2}+y", point: "(1,-1)", gradient: "m=1^{2}-1=0", tangent: "y=-1", family: "\\text{A zero gradient gives a horizontal tangent}", tags: ["direction fields", "stationary tangents"] },
];

export const questions: Question[] = [
  ...separableSpecs.map((spec, index) => separableQuestion(index + 1, spec)),
  ...linearSpecs.map((spec, index) => linearQuestion(index + 13, spec)),
  ...ivSpecs.map((spec, index) => ivQuestion(index + 29, spec)),
  ...modelSpecs.map((spec, index) => modelQuestion(index + 43, spec)),
  ...homogeneousSpecs.map((spec, index) => homogeneousQuestion(index + 55, spec)),
  ...directionSpecs.map((spec, index) => directionQuestion(index + 63, spec)),
];
