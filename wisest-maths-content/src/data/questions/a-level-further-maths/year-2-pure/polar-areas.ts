import type { Difficulty, Question, SolutionStep } from "@/lib/types";

const LEVEL = "A-Level Further Maths";
const TOPIC = "Further Maths Year 2: Pure (Core Pure 2)";
const SUBTOPIC = "Polar areas and tangents";
const SUBTOPIC_ID = "fm.y2.pure.polar-areas";

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

type DirectAreaSpec = {
  curve: string;
  interval: string;
  squared: string;
  integralValue: string;
  area: string;
  tags: string[];
};

function directAreaQuestion(number: number, spec: DirectAreaSpec): Question {
  return question(
    number,
    "Easy",
    4,
    ["polar areas", ...spec.tags],
    "value",
    `For the polar curve $r=${spec.curve}$, find the exact area swept out as $\\theta$ ranges over $${spec.interval}$.`,
    [
      {
        description: "Recall the polar area formula",
        workingLatex: "A=\\frac12\\int_{\\alpha}^{\\beta} r^2\\,d\\theta",
        explanation: "A small polar sector has area approximately $\\frac12r^2\\Delta\\theta$, so adding many thin sectors gives this integral.",
      },
      {
        description: "Identify the limits",
        workingLatex: `\\alpha,\\beta\\text{ come from }${spec.interval}`,
        explanation: "The interval tells us exactly which part of the polar curve is being swept out.",
      },
      {
        description: "Substitute the curve",
        workingLatex: `A=\\frac12\\int \\left(${spec.curve}\\right)^2\\,d\\theta`,
        explanation: "The formula uses the square of the radius because sector area grows with the square of the distance from the pole.",
      },
      {
        description: "Square and simplify",
        workingLatex: `r^2=${spec.squared}`,
        explanation: "Simplifying $r^2$ first makes the trigonometric integral easier to evaluate accurately.",
      },
      {
        description: "Evaluate the integral of $r^2$",
        workingLatex: `\\int ${spec.squared}\\,d\\theta=${spec.integralValue}`,
        explanation: "This is the accumulated squared radius over the required angular interval.",
      },
      {
        description: "Apply the factor $\\frac12$",
        workingLatex: `A=\\frac12\\left(${spec.integralValue}\\right)=${spec.area}`,
        explanation: "The factor $\\frac12$ converts the accumulated squared radius into sector area.",
      },
      {
        description: "State the exact area",
        workingLatex: `\\boxed{${spec.area}}`,
        explanation: "The answer is left in exact form, using $\\pi$ or surds where needed.",
      },
    ],
    `$${spec.area}$`,
  );
}

type BetweenAreaSpec = {
  outer: string;
  inner: string;
  interval: string;
  difference: string;
  integralValue: string;
  area: string;
  tags: string[];
};

function betweenAreaQuestion(number: number, spec: BetweenAreaSpec): Question {
  return question(
    number,
    "Intermediate",
    6,
    ["polar areas", "area between curves", ...spec.tags],
    "value",
    `Find the exact area between the polar curves $r=${spec.outer}$ and $r=${spec.inner}$ for $${spec.interval}$.`,
    [
      {
        description: "Use the difference of polar areas",
        workingLatex: "A=\\frac12\\int_{\\alpha}^{\\beta}\\left(r_{\\text{outer}}^2-r_{\\text{inner}}^2\\right)d\\theta",
        explanation: "For each angle, the region is the larger sector minus the smaller sector.",
      },
      {
        description: "Identify the outer and inner radii",
        workingLatex: `r_{\\text{outer}}=${spec.outer},\\qquad r_{\\text{inner}}=${spec.inner}`,
        explanation: "The order matters because area must be positive on the stated interval.",
      },
      {
        description: "Substitute the limits",
        workingLatex: `\\theta\\in ${spec.interval}`,
        explanation: "The angular interval defines the part of the two curves that bounds the region.",
      },
      {
        description: "Form the squared-radius difference",
        workingLatex: `r_{\\text{outer}}^2-r_{\\text{inner}}^2=${spec.difference}`,
        explanation: "Subtracting the squares compares sector areas, not just radial lengths.",
      },
      {
        description: "Write the area integral",
        workingLatex: `A=\\frac12\\int ${spec.difference}\\,d\\theta`,
        explanation: "Once the integrand is formed, the rest is an ordinary trigonometric integral.",
      },
      {
        description: "Integrate over the interval",
        workingLatex: `\\int ${spec.difference}\\,d\\theta=${spec.integralValue}`,
        explanation: "This gives the total squared-radius excess of the outer curve over the inner curve.",
      },
      {
        description: "Apply the polar area factor",
        workingLatex: `A=\\frac12\\left(${spec.integralValue}\\right)`,
        explanation: "The factor $\\frac12$ appears for the same sector-area reason as in a single polar curve.",
      },
      {
        description: "Simplify the exact value",
        workingLatex: `A=${spec.area}`,
        explanation: "Combining the constants, $\\pi$ terms and surd terms gives a clear exact answer.",
      },
      {
        description: "Check the sign",
        workingLatex: `${spec.area}>0`,
        explanation: "A positive value confirms that the outer and inner curves were used in the correct order.",
      },
      {
        description: "State the area",
        workingLatex: `\\boxed{${spec.area}}`,
        explanation: "This is the exact area of the bounded polar region on the given interval.",
      },
    ],
    `$${spec.area}$`,
  );
}

type SlopeSpec = {
  curve: string;
  theta: string;
  r: string;
  derivative: string;
  numerator: string;
  denominator: string;
  slope: string;
  tags: string[];
};

function slopeQuestion(number: number, spec: SlopeSpec): Question {
  return question(
    number,
    "Easy",
    4,
    ["polar tangents", "gradient", ...spec.tags],
    "expression",
    `For the polar curve $r=${spec.curve}$, find $\\dfrac{dy}{dx}$ at $\\theta=${spec.theta}$.`,
    [
      {
        description: "Recall the polar gradient formula",
        workingLatex: "\\frac{dy}{dx}=\\frac{\\frac{dr}{d\\theta}\\sin\\theta+r\\cos\\theta}{\\frac{dr}{d\\theta}\\cos\\theta-r\\sin\\theta}",
        explanation: "In polar coordinates both $x$ and $y$ depend on $\\theta$, so the gradient is found by dividing $dy/d\\theta$ by $dx/d\\theta$.",
      },
      {
        description: "Differentiate the polar equation",
        workingLatex: `\\frac{dr}{d\\theta}=${spec.derivative}`,
        explanation: "The derivative of the radius controls how the point moves radially as the angle changes.",
      },
      {
        description: "Find the radius at the angle",
        workingLatex: `r=${spec.r}\\quad\\text{when }\\theta=${spec.theta}`,
        explanation: "The gradient formula needs both the current radius and its rate of change.",
      },
      {
        description: "Evaluate the numerator",
        workingLatex: `\\frac{dr}{d\\theta}\\sin\\theta+r\\cos\\theta=${spec.numerator}`,
        explanation: "This is $dy/d\\theta$, the vertical rate of change along the curve.",
      },
      {
        description: "Evaluate the denominator",
        workingLatex: `\\frac{dr}{d\\theta}\\cos\\theta-r\\sin\\theta=${spec.denominator}`,
        explanation: "This is $dx/d\\theta$, the horizontal rate of change along the curve.",
      },
      {
        description: "Divide the rates",
        workingLatex: `\\frac{dy}{dx}=\\frac{${spec.numerator}}{${spec.denominator}}=${spec.slope}`,
        explanation: "The Cartesian gradient compares the vertical and horizontal rates of motion.",
      },
      {
        description: "State the gradient",
        workingLatex: `\\boxed{${spec.slope}}`,
        explanation: "This gives the slope of the tangent to the polar curve at the specified angle.",
      },
    ],
    `$${spec.slope}$`,
  );
}

type TangentAnglesSpec = {
  curve: string;
  interval: string;
  direction: "parallel to the initial line" | "perpendicular to the initial line";
  derivative: string;
  condition: string;
  simplified: string;
  solveLine: string;
  solutions: string;
  tags: string[];
};

function tangentAnglesQuestion(number: number, spec: TangentAnglesSpec): Question {
  const conditionName = spec.direction === "parallel to the initial line" ? "dy/d\\theta=0" : "dx/d\\theta=0";

  return question(
    number,
    "Intermediate",
    6,
    ["polar tangents", "tangent conditions", ...spec.tags],
    "set",
    `For the polar curve $r=${spec.curve}$, find the values of $\\theta$ in $${spec.interval}$ where the tangent is ${spec.direction}.`,
    [
      {
        description: "Recall the polar gradient structure",
        workingLatex: "\\frac{dy}{dx}=\\frac{dy/d\\theta}{dx/d\\theta}",
        explanation: "Horizontal and vertical tangents are easier to locate by looking at the numerator and denominator separately.",
      },
      {
        description: "Choose the correct tangent condition",
        workingLatex: conditionName,
        explanation: spec.direction === "parallel to the initial line" ? "A tangent parallel to the initial line is horizontal, so the vertical rate of change must be zero." : "A tangent perpendicular to the initial line is vertical, so the horizontal rate of change must be zero.",
      },
      {
        description: "Differentiate the radius",
        workingLatex: `\\frac{dr}{d\\theta}=${spec.derivative}`,
        explanation: "The tangent direction depends on how the radius changes as the angle changes.",
      },
      {
        description: "Substitute into the condition",
        workingLatex: spec.condition,
        explanation: "This converts the geometric tangent condition into a trigonometric equation.",
      },
      {
        description: "Simplify the trigonometric equation",
        workingLatex: spec.simplified,
        explanation: "Simplification exposes the standard sine or cosine values that determine the angles.",
      },
      {
        description: "Solve the main trigonometric equation",
        workingLatex: spec.solveLine,
        explanation: "Solving within one full turn gives all candidate directions for the tangent.",
      },
      {
        description: "Apply the stated interval",
        workingLatex: `\\theta\\in ${spec.interval}`,
        explanation: "Only angles in the requested interval should be retained.",
      },
      {
        description: "List the valid angles",
        workingLatex: `\\theta=${spec.solutions}`,
        explanation: "These are the directions where the tangent has the required orientation.",
      },
      {
        description: "Check for excluded singular cases",
        workingLatex: "\\text{The opposite rate is not simultaneously zero at the retained values.}",
        explanation: "This avoids counting a cusp or undefined point as an ordinary tangent unless the question intends it.",
      },
      {
        description: "State the answer",
        workingLatex: `\\boxed{\\theta=${spec.solutions}}`,
        explanation: "The final answer is given as exact angles in radians.",
      },
    ],
    `$\\theta=${spec.solutions}$`,
  );
}

type CompositeSpec = {
  curve: string;
  interval: string;
  squared: string;
  integralValue: string;
  area: string;
  theta: string;
  derivative: string;
  r: string;
  point: string;
  numerator: string;
  denominator: string;
  slope: string;
  tangent: string;
  tags: string[];
};

function compositeQuestion(number: number, spec: CompositeSpec): Question {
  return question(
    number,
    "Hard",
    8,
    ["polar areas", "polar tangents", "mixed problem", ...spec.tags],
    "written",
    `For the polar curve $r=${spec.curve}$: (a) find the exact area swept out for $${spec.interval}$; (b) find the equation of the tangent at $\\theta=${spec.theta}$.`,
    [
      {
        description: "Start with the polar area formula",
        workingLatex: "A=\\frac12\\int r^2\\,d\\theta",
        explanation: "The first part is an accumulated sector area, so the square of the radius is integrated with respect to the angle.",
      },
      {
        description: "Use the given angular interval",
        workingLatex: `\\theta\\in ${spec.interval}`,
        explanation: "These limits describe exactly the part of the curve whose area is being found.",
      },
      {
        description: "Square the polar radius",
        workingLatex: `r^2=${spec.squared}`,
        explanation: "Squaring the radius is essential because sector area depends on $r^2$, not $r$.",
      },
      {
        description: "Evaluate the squared-radius integral",
        workingLatex: `\\int ${spec.squared}\\,d\\theta=${spec.integralValue}`,
        explanation: "This collects the total squared radial contribution across the interval.",
      },
      {
        description: "Apply the area factor",
        workingLatex: `A=\\frac12\\left(${spec.integralValue}\\right)=${spec.area}`,
        explanation: "The factor $\\frac12$ changes the integral of $r^2$ into the actual polar area.",
      },
      {
        description: "Record the area result",
        workingLatex: `A=${spec.area}`,
        explanation: "Keeping the area result separate makes the tangent work in the second part cleaner.",
      },
      {
        description: "Recall the polar tangent formula",
        workingLatex: "\\frac{dy}{dx}=\\frac{\\frac{dr}{d\\theta}\\sin\\theta+r\\cos\\theta}{\\frac{dr}{d\\theta}\\cos\\theta-r\\sin\\theta}",
        explanation: "The tangent gradient comes from differentiating $x=r\\cos\\theta$ and $y=r\\sin\\theta$ with respect to $\\theta$.",
      },
      {
        description: "Differentiate the radius",
        workingLatex: `\\frac{dr}{d\\theta}=${spec.derivative}`,
        explanation: "The derivative measures the radial part of the motion along the polar curve.",
      },
      {
        description: "Evaluate the radius at the tangent point",
        workingLatex: `r=${spec.r}\\quad\\text{at }\\theta=${spec.theta}`,
        explanation: "The tangent point is determined by both the angle and the radius at that angle.",
      },
      {
        description: "Convert the point to Cartesian coordinates",
        workingLatex: `(x,y)=(${spec.point})`,
        explanation: "A Cartesian tangent line needs a Cartesian point through which the line passes.",
      },
      {
        description: "Evaluate $dy/d\\theta$",
        workingLatex: `\\frac{dr}{d\\theta}\\sin\\theta+r\\cos\\theta=${spec.numerator}`,
        explanation: "This gives the vertical component of the curve's instantaneous motion.",
      },
      {
        description: "Evaluate $dx/d\\theta$",
        workingLatex: `\\frac{dr}{d\\theta}\\cos\\theta-r\\sin\\theta=${spec.denominator}`,
        explanation: "This gives the horizontal component of the same motion.",
      },
      {
        description: "Find the tangent gradient",
        workingLatex: `\\frac{dy}{dx}=\\frac{${spec.numerator}}{${spec.denominator}}=${spec.slope}`,
        explanation: "Dividing the two rates gives the slope of the Cartesian tangent line.",
      },
      {
        description: "State both requested results",
        workingLatex: `\\boxed{A=${spec.area}},\\qquad \\boxed{${spec.tangent}}`,
        explanation: "The problem asks for an area and a tangent equation, so both exact results are included in the final answer.",
      },
    ],
    `$A=${spec.area}$ and $${spec.tangent}$`,
  );
}

const directAreaSpecs: DirectAreaSpec[] = [
  { curve: "4", interval: "0\\le \\theta\\le \\frac{\\pi}{3}", squared: "16", integralValue: "\\frac{16\\pi}{3}", area: "\\frac{8\\pi}{3}", tags: ["sector"] },
  { curve: "3", interval: "0\\le \\theta\\le \\frac{\\pi}{2}", squared: "9", integralValue: "\\frac{9\\pi}{2}", area: "\\frac{9\\pi}{4}", tags: ["sector"] },
  { curve: "2\\sin\\theta", interval: "0\\le \\theta\\le \\pi", squared: "4\\sin^2\\theta", integralValue: "2\\pi", area: "\\pi", tags: ["circle"] },
  { curve: "4\\sin\\theta", interval: "0\\le \\theta\\le \\pi", squared: "16\\sin^2\\theta", integralValue: "8\\pi", area: "4\\pi", tags: ["circle"] },
  { curve: "6\\cos\\theta", interval: "-\\frac{\\pi}{2}\\le \\theta\\le \\frac{\\pi}{2}", squared: "36\\cos^2\\theta", integralValue: "18\\pi", area: "9\\pi", tags: ["circle"] },
  { curve: "3\\cos\\theta", interval: "-\\frac{\\pi}{2}\\le \\theta\\le \\frac{\\pi}{2}", squared: "9\\cos^2\\theta", integralValue: "\\frac{9\\pi}{2}", area: "\\frac{9\\pi}{4}", tags: ["circle"] },
  { curve: "2(1+\\cos\\theta)", interval: "0\\le \\theta\\le 2\\pi", squared: "4(1+2\\cos\\theta+\\cos^2\\theta)", integralValue: "12\\pi", area: "6\\pi", tags: ["cardioid"] },
  { curve: "3(1+\\cos\\theta)", interval: "0\\le \\theta\\le 2\\pi", squared: "9(1+2\\cos\\theta+\\cos^2\\theta)", integralValue: "27\\pi", area: "\\frac{27\\pi}{2}", tags: ["cardioid"] },
  { curve: "2(1-\\sin\\theta)", interval: "0\\le \\theta\\le 2\\pi", squared: "4(1-2\\sin\\theta+\\sin^2\\theta)", integralValue: "12\\pi", area: "6\\pi", tags: ["cardioid"] },
  { curve: "4\\sin 2\\theta", interval: "0\\le \\theta\\le \\frac{\\pi}{2}", squared: "16\\sin^2 2\\theta", integralValue: "4\\pi", area: "2\\pi", tags: ["rose curve"] },
  { curve: "6\\sin 3\\theta", interval: "0\\le \\theta\\le \\frac{\\pi}{3}", squared: "36\\sin^2 3\\theta", integralValue: "6\\pi", area: "3\\pi", tags: ["rose curve"] },
  { curve: "5\\cos 2\\theta", interval: "-\\frac{\\pi}{4}\\le \\theta\\le \\frac{\\pi}{4}", squared: "25\\cos^2 2\\theta", integralValue: "\\frac{25\\pi}{4}", area: "\\frac{25\\pi}{8}", tags: ["rose curve"] },
  { curve: "3(1+2\\cos\\theta)", interval: "0\\le \\theta\\le 2\\pi", squared: "9(1+4\\cos\\theta+4\\cos^2\\theta)", integralValue: "54\\pi", area: "27\\pi", tags: ["limacon"] },
  { curve: "2+\\cos\\theta", interval: "0\\le \\theta\\le 2\\pi", squared: "4+4\\cos\\theta+\\cos^2\\theta", integralValue: "9\\pi", area: "\\frac{9\\pi}{2}", tags: ["limacon"] },
];

const betweenAreaSpecs: BetweenAreaSpec[] = [
  { outer: "4", inner: "2", interval: "0\\le \\theta\\le \\frac{\\pi}{2}", difference: "12", integralValue: "6\\pi", area: "3\\pi", tags: ["sectors"] },
  { outer: "3", inner: "3\\sin\\theta", interval: "0\\le \\theta\\le \\pi", difference: "9\\cos^2\\theta", integralValue: "\\frac{9\\pi}{2}", area: "\\frac{9\\pi}{4}", tags: ["circle"] },
  { outer: "4\\cos\\theta", inner: "2\\cos\\theta", interval: "-\\frac{\\pi}{2}\\le \\theta\\le \\frac{\\pi}{2}", difference: "12\\cos^2\\theta", integralValue: "6\\pi", area: "3\\pi", tags: ["circle"] },
  { outer: "3\\sin\\theta", inner: "\\sin\\theta", interval: "0\\le \\theta\\le \\pi", difference: "8\\sin^2\\theta", integralValue: "4\\pi", area: "2\\pi", tags: ["circle"] },
  { outer: "2(1+\\cos\\theta)", inner: "2", interval: "0\\le \\theta\\le \\frac{\\pi}{2}", difference: "4(2\\cos\\theta+\\cos^2\\theta)", integralValue: "8+\\pi", area: "4+\\frac{\\pi}{2}", tags: ["cardioid"] },
  { outer: "3", inner: "3\\cos\\theta", interval: "-\\frac{\\pi}{2}\\le \\theta\\le \\frac{\\pi}{2}", difference: "9\\sin^2\\theta", integralValue: "\\frac{9\\pi}{2}", area: "\\frac{9\\pi}{4}", tags: ["circle"] },
  { outer: "4", inner: "4\\sin\\theta", interval: "0\\le \\theta\\le \\pi", difference: "16\\cos^2\\theta", integralValue: "8\\pi", area: "4\\pi", tags: ["circle"] },
  { outer: "5\\cos\\theta", inner: "3\\cos\\theta", interval: "-\\frac{\\pi}{2}\\le \\theta\\le \\frac{\\pi}{2}", difference: "16\\cos^2\\theta", integralValue: "8\\pi", area: "4\\pi", tags: ["circle"] },
  { outer: "3(1+\\cos\\theta)", inner: "3\\cos\\theta", interval: "0\\le \\theta\\le \\frac{\\pi}{2}", difference: "9(1+2\\cos\\theta)", integralValue: "\\frac{9\\pi}{2}+18", area: "\\frac{9\\pi}{4}+9", tags: ["cardioid"] },
  { outer: "2(1+\\sin\\theta)", inner: "2\\sin\\theta", interval: "0\\le \\theta\\le \\frac{\\pi}{2}", difference: "4(1+2\\sin\\theta)", integralValue: "2\\pi+8", area: "\\pi+4", tags: ["cardioid"] },
  { outer: "6\\cos\\theta", inner: "3", interval: "0\\le \\theta\\le \\frac{\\pi}{3}", difference: "36\\cos^2\\theta-9", integralValue: "3\\pi+\\frac{9\\sqrt3}{2}", area: "\\frac{3\\pi}{2}+\\frac{9\\sqrt3}{4}", tags: ["intersections"] },
  { outer: "4\\sin\\theta", inner: "2", interval: "\\frac{\\pi}{6}\\le \\theta\\le \\frac{5\\pi}{6}", difference: "16\\sin^2\\theta-4", integralValue: "\\frac{8\\pi}{3}+4\\sqrt3", area: "\\frac{4\\pi}{3}+2\\sqrt3", tags: ["intersections"] },
  { outer: "5", inner: "5\\cos\\theta", interval: "-\\frac{\\pi}{3}\\le \\theta\\le \\frac{\\pi}{3}", difference: "25\\sin^2\\theta", integralValue: "\\frac{25\\pi}{3}-\\frac{25\\sqrt3}{4}", area: "\\frac{25\\pi}{6}-\\frac{25\\sqrt3}{8}", tags: ["intersections"] },
  { outer: "3+\\cos\\theta", inner: "2+\\cos\\theta", interval: "0\\le \\theta\\le \\pi", difference: "5+2\\cos\\theta", integralValue: "5\\pi", area: "\\frac{5\\pi}{2}", tags: ["limacon"] },
];

const slopeSpecs: SlopeSpec[] = [
  { curve: "2\\cos\\theta", theta: "\\frac{\\pi}{4}", r: "\\sqrt2", derivative: "-2\\sin\\theta", numerator: "0", denominator: "-2", slope: "0", tags: ["circle", "horizontal tangent"] },
  { curve: "2\\sin\\theta", theta: "\\frac{\\pi}{6}", r: "1", derivative: "2\\cos\\theta", numerator: "\\sqrt3", denominator: "1", slope: "\\sqrt3", tags: ["circle"] },
  { curve: "3", theta: "\\frac{\\pi}{3}", r: "3", derivative: "0", numerator: "\\frac32", denominator: "-\\frac{3\\sqrt3}{2}", slope: "-\\frac{1}{\\sqrt3}", tags: ["sector"] },
  { curve: "4", theta: "\\frac{\\pi}{4}", r: "4", derivative: "0", numerator: "2\\sqrt2", denominator: "-2\\sqrt2", slope: "-1", tags: ["sector"] },
  { curve: "1+\\cos\\theta", theta: "\\frac{\\pi}{2}", r: "1", derivative: "-\\sin\\theta", numerator: "-1", denominator: "-1", slope: "1", tags: ["cardioid"] },
  { curve: "2+\\sin\\theta", theta: "0", r: "2", derivative: "\\cos\\theta", numerator: "2", denominator: "1", slope: "2", tags: ["limacon"] },
  { curve: "3+2\\cos\\theta", theta: "\\frac{\\pi}{2}", r: "3", derivative: "-2\\sin\\theta", numerator: "-2", denominator: "-3", slope: "\\frac23", tags: ["limacon"] },
  { curve: "4\\sin2\\theta", theta: "\\frac{\\pi}{6}", r: "2\\sqrt3", derivative: "8\\cos2\\theta", numerator: "5", denominator: "\\sqrt3", slope: "\\frac{5}{\\sqrt3}", tags: ["rose curve"] },
  { curve: "3\\cos2\\theta", theta: "\\frac{\\pi}{6}", r: "\\frac32", derivative: "-6\\sin2\\theta", numerator: "-\\frac{3\\sqrt3}{4}", denominator: "-\\frac{21}{4}", slope: "\\frac{\\sqrt3}{7}", tags: ["rose curve"] },
  { curve: "2+2\\cos\\theta", theta: "\\frac{\\pi}{2}", r: "2", derivative: "-2\\sin\\theta", numerator: "-2", denominator: "-2", slope: "1", tags: ["cardioid"] },
];

const tangentAnglesSpecs: TangentAnglesSpec[] = [
  { curve: "4\\cos\\theta", interval: "-\\frac{\\pi}{2}<\\theta<\\frac{\\pi}{2}", direction: "parallel to the initial line", derivative: "-4\\sin\\theta", condition: "-4\\sin^2\\theta+4\\cos^2\\theta=0", simplified: "4\\cos2\\theta=0", solveLine: "\\cos2\\theta=0", solutions: "-\\frac{\\pi}{4},\\frac{\\pi}{4}", tags: ["circle", "horizontal tangent"] },
  { curve: "4\\cos\\theta", interval: "-\\frac{\\pi}{2}<\\theta<\\frac{\\pi}{2}", direction: "perpendicular to the initial line", derivative: "-4\\sin\\theta", condition: "-4\\sin\\theta\\cos\\theta-4\\cos\\theta\\sin\\theta=0", simplified: "-4\\sin2\\theta=0", solveLine: "\\sin2\\theta=0", solutions: "0", tags: ["circle", "vertical tangent"] },
  { curve: "3\\sin\\theta", interval: "0<\\theta<\\pi", direction: "parallel to the initial line", derivative: "3\\cos\\theta", condition: "3\\cos\\theta\\sin\\theta+3\\sin\\theta\\cos\\theta=0", simplified: "3\\sin2\\theta=0", solveLine: "\\sin2\\theta=0", solutions: "\\frac{\\pi}{2}", tags: ["circle", "horizontal tangent"] },
  { curve: "3\\sin\\theta", interval: "0<\\theta<\\pi", direction: "perpendicular to the initial line", derivative: "3\\cos\\theta", condition: "3\\cos^2\\theta-3\\sin^2\\theta=0", simplified: "3\\cos2\\theta=0", solveLine: "\\cos2\\theta=0", solutions: "\\frac{\\pi}{4},\\frac{3\\pi}{4}", tags: ["circle", "vertical tangent"] },
  { curve: "2(1+\\cos\\theta)", interval: "0<\\theta<2\\pi", direction: "parallel to the initial line", derivative: "-2\\sin\\theta", condition: "-2\\sin^2\\theta+2(1+\\cos\\theta)\\cos\\theta=0", simplified: "2\\cos\\theta+2\\cos2\\theta=0", solveLine: "2\\cos^2\\theta+\\cos\\theta-1=0", solutions: "\\frac{\\pi}{3},\\frac{5\\pi}{3}", tags: ["cardioid", "horizontal tangent"] },
  { curve: "2(1+\\cos\\theta)", interval: "0<\\theta<2\\pi", direction: "perpendicular to the initial line", derivative: "-2\\sin\\theta", condition: "-2\\sin\\theta\\cos\\theta-2(1+\\cos\\theta)\\sin\\theta=0", simplified: "-2\\sin\\theta(1+2\\cos\\theta)=0", solveLine: "\\cos\\theta=-\\frac12", solutions: "\\frac{2\\pi}{3},\\frac{4\\pi}{3}", tags: ["cardioid", "vertical tangent"] },
  { curve: "3(1+\\sin\\theta)", interval: "0<\\theta<2\\pi", direction: "parallel to the initial line", derivative: "3\\cos\\theta", condition: "3\\cos\\theta\\sin\\theta+3(1+\\sin\\theta)\\cos\\theta=0", simplified: "3\\cos\\theta(1+2\\sin\\theta)=0", solveLine: "\\cos\\theta=0\\text{ or }\\sin\\theta=-\\frac12", solutions: "\\frac{\\pi}{2},\\frac{7\\pi}{6},\\frac{3\\pi}{2},\\frac{11\\pi}{6}", tags: ["cardioid", "horizontal tangent"] },
  { curve: "3(1+\\sin\\theta)", interval: "0<\\theta<2\\pi", direction: "perpendicular to the initial line", derivative: "3\\cos\\theta", condition: "3\\cos^2\\theta-3(1+\\sin\\theta)\\sin\\theta=0", simplified: "1-2\\sin^2\\theta-\\sin\\theta=0", solveLine: "\\sin\\theta=\\frac12\\text{ or }-1", solutions: "\\frac{\\pi}{6},\\frac{5\\pi}{6},\\frac{3\\pi}{2}", tags: ["cardioid", "vertical tangent"] },
  { curve: "2+\\cos\\theta", interval: "0<\\theta<2\\pi", direction: "parallel to the initial line", derivative: "-\\sin\\theta", condition: "-\\sin^2\\theta+(2+\\cos\\theta)\\cos\\theta=0", simplified: "2\\cos^2\\theta+2\\cos\\theta-1=0", solveLine: "\\cos\\theta=\\frac{-1+\\sqrt3}{2}", solutions: "\\cos^{-1}\\left(\\frac{-1+\\sqrt3}{2}\\right),2\\pi-\\cos^{-1}\\left(\\frac{-1+\\sqrt3}{2}\\right)", tags: ["limacon", "horizontal tangent"] },
  { curve: "2+\\cos\\theta", interval: "0<\\theta<2\\pi", direction: "perpendicular to the initial line", derivative: "-\\sin\\theta", condition: "-\\sin\\theta\\cos\\theta-(2+\\cos\\theta)\\sin\\theta=0", simplified: "-2\\sin\\theta(1+\\cos\\theta)=0", solveLine: "\\sin\\theta=0", solutions: "\\pi", tags: ["limacon", "vertical tangent"] },
  { curve: "2+\\sin\\theta", interval: "0<\\theta<2\\pi", direction: "parallel to the initial line", derivative: "\\cos\\theta", condition: "\\cos\\theta\\sin\\theta+(2+\\sin\\theta)\\cos\\theta=0", simplified: "2\\cos\\theta(1+\\sin\\theta)=0", solveLine: "\\cos\\theta=0", solutions: "\\frac{\\pi}{2},\\frac{3\\pi}{2}", tags: ["limacon", "horizontal tangent"] },
  { curve: "2+\\sin\\theta", interval: "0<\\theta<2\\pi", direction: "perpendicular to the initial line", derivative: "\\cos\\theta", condition: "\\cos^2\\theta-(2+\\sin\\theta)\\sin\\theta=0", simplified: "1-2\\sin^2\\theta-2\\sin\\theta=0", solveLine: "\\sin\\theta=\\frac{-1+\\sqrt3}{2}", solutions: "\\sin^{-1}\\left(\\frac{-1+\\sqrt3}{2}\\right),\\pi-\\sin^{-1}\\left(\\frac{-1+\\sqrt3}{2}\\right)", tags: ["limacon", "vertical tangent"] },
  { curve: "4\\sin2\\theta", interval: "0<\\theta<\\frac{\\pi}{2}", direction: "parallel to the initial line", derivative: "8\\cos2\\theta", condition: "8\\cos2\\theta\\sin\\theta+4\\sin2\\theta\\cos\\theta=0", simplified: "4\\sin\\theta(4\\cos^2\\theta-1)=0", solveLine: "\\cos\\theta=\\frac12", solutions: "\\frac{\\pi}{3}", tags: ["rose curve", "horizontal tangent"] },
  { curve: "4\\sin2\\theta", interval: "0<\\theta<\\frac{\\pi}{2}", direction: "perpendicular to the initial line", derivative: "8\\cos2\\theta", condition: "8\\cos2\\theta\\cos\\theta-4\\sin2\\theta\\sin\\theta=0", simplified: "4\\cos\\theta(4\\cos^2\\theta-3)=0", solveLine: "\\cos\\theta=\\frac{\\sqrt3}{2}", solutions: "\\frac{\\pi}{6}", tags: ["rose curve", "vertical tangent"] },
  { curve: "3\\cos2\\theta", interval: "-\\frac{\\pi}{4}<\\theta<\\frac{\\pi}{4}", direction: "parallel to the initial line", derivative: "-6\\sin2\\theta", condition: "-6\\sin2\\theta\\sin\\theta+3\\cos2\\theta\\cos\\theta=0", simplified: "3\\cos\\theta(6\\cos^2\\theta-5)=0", solveLine: "\\cos^2\\theta=\\frac56", solutions: "\\pm\\cos^{-1}\\sqrt{\\frac56}", tags: ["rose curve", "horizontal tangent"] },
  { curve: "3\\cos2\\theta", interval: "-\\frac{\\pi}{4}<\\theta<\\frac{\\pi}{4}", direction: "perpendicular to the initial line", derivative: "-6\\sin2\\theta", condition: "-6\\sin2\\theta\\cos\\theta-3\\cos2\\theta\\sin\\theta=0", simplified: "-3\\sin\\theta(6\\cos^2\\theta+\\cos2\\theta)=0", solveLine: "\\sin\\theta=0", solutions: "0", tags: ["rose curve", "vertical tangent"] },
];

const compositeSpecs: CompositeSpec[] = [
  { curve: "2(1+\\cos\\theta)", interval: "0\\le \\theta\\le2\\pi", squared: "4(1+2\\cos\\theta+\\cos^2\\theta)", integralValue: "12\\pi", area: "6\\pi", theta: "\\frac{\\pi}{2}", derivative: "-2\\sin\\theta", r: "2", point: "0,2", numerator: "-2", denominator: "-2", slope: "1", tangent: "y-2=x", tags: ["cardioid"] },
  { curve: "3(1+\\cos\\theta)", interval: "0\\le \\theta\\le2\\pi", squared: "9(1+2\\cos\\theta+\\cos^2\\theta)", integralValue: "27\\pi", area: "\\frac{27\\pi}{2}", theta: "\\frac{\\pi}{2}", derivative: "-3\\sin\\theta", r: "3", point: "0,3", numerator: "-3", denominator: "-3", slope: "1", tangent: "y-3=x", tags: ["cardioid"] },
  { curve: "2(1+\\sin\\theta)", interval: "0\\le \\theta\\le2\\pi", squared: "4(1+2\\sin\\theta+\\sin^2\\theta)", integralValue: "12\\pi", area: "6\\pi", theta: "0", derivative: "2\\cos\\theta", r: "2", point: "2,0", numerator: "2", denominator: "2", slope: "1", tangent: "y=x-2", tags: ["cardioid"] },
  { curve: "3(1+\\sin\\theta)", interval: "0\\le \\theta\\le2\\pi", squared: "9(1+2\\sin\\theta+\\sin^2\\theta)", integralValue: "27\\pi", area: "\\frac{27\\pi}{2}", theta: "0", derivative: "3\\cos\\theta", r: "3", point: "3,0", numerator: "3", denominator: "3", slope: "1", tangent: "y=x-3", tags: ["cardioid"] },
  { curve: "4\\sin\\theta", interval: "0\\le \\theta\\le\\pi", squared: "16\\sin^2\\theta", integralValue: "8\\pi", area: "4\\pi", theta: "\\frac{\\pi}{6}", derivative: "4\\cos\\theta", r: "2", point: "\\sqrt3,1", numerator: "2\\sqrt3", denominator: "2", slope: "\\sqrt3", tangent: "y-1=\\sqrt3(x-\\sqrt3)", tags: ["circle"] },
  { curve: "6\\sin\\theta", interval: "0\\le \\theta\\le\\pi", squared: "36\\sin^2\\theta", integralValue: "18\\pi", area: "9\\pi", theta: "\\frac{\\pi}{6}", derivative: "6\\cos\\theta", r: "3", point: "\\frac{3\\sqrt3}{2},\\frac32", numerator: "3\\sqrt3", denominator: "3", slope: "\\sqrt3", tangent: "y-\\frac32=\\sqrt3\\left(x-\\frac{3\\sqrt3}{2}\\right)", tags: ["circle"] },
  { curve: "4\\cos\\theta", interval: "-\\frac{\\pi}{2}\\le \\theta\\le\\frac{\\pi}{2}", squared: "16\\cos^2\\theta", integralValue: "8\\pi", area: "4\\pi", theta: "\\frac{\\pi}{3}", derivative: "-4\\sin\\theta", r: "2", point: "1,\\sqrt3", numerator: "-2", denominator: "-2\\sqrt3", slope: "\\frac{1}{\\sqrt3}", tangent: "y-\\sqrt3=\\frac{1}{\\sqrt3}(x-1)", tags: ["circle"] },
  { curve: "6\\cos\\theta", interval: "-\\frac{\\pi}{2}\\le \\theta\\le\\frac{\\pi}{2}", squared: "36\\cos^2\\theta", integralValue: "18\\pi", area: "9\\pi", theta: "\\frac{\\pi}{3}", derivative: "-6\\sin\\theta", r: "3", point: "\\frac32,\\frac{3\\sqrt3}{2}", numerator: "-3", denominator: "-3\\sqrt3", slope: "\\frac{1}{\\sqrt3}", tangent: "y-\\frac{3\\sqrt3}{2}=\\frac{1}{\\sqrt3}\\left(x-\\frac32\\right)", tags: ["circle"] },
  { curve: "4\\sin2\\theta", interval: "0\\le \\theta\\le\\frac{\\pi}{2}", squared: "16\\sin^2 2\\theta", integralValue: "4\\pi", area: "2\\pi", theta: "\\frac{\\pi}{6}", derivative: "8\\cos2\\theta", r: "2\\sqrt3", point: "3,\\sqrt3", numerator: "5", denominator: "\\sqrt3", slope: "\\frac{5}{\\sqrt3}", tangent: "y-\\sqrt3=\\frac{5}{\\sqrt3}(x-3)", tags: ["rose curve"] },
  { curve: "6\\sin2\\theta", interval: "0\\le \\theta\\le\\frac{\\pi}{2}", squared: "36\\sin^2 2\\theta", integralValue: "9\\pi", area: "\\frac{9\\pi}{2}", theta: "\\frac{\\pi}{6}", derivative: "12\\cos2\\theta", r: "3\\sqrt3", point: "\\frac92,\\frac{3\\sqrt3}{2}", numerator: "\\frac{15}{2}", denominator: "\\frac{3\\sqrt3}{2}", slope: "\\frac{5}{\\sqrt3}", tangent: "y-\\frac{3\\sqrt3}{2}=\\frac{5}{\\sqrt3}\\left(x-\\frac92\\right)", tags: ["rose curve"] },
  { curve: "5\\cos2\\theta", interval: "-\\frac{\\pi}{4}\\le \\theta\\le\\frac{\\pi}{4}", squared: "25\\cos^2 2\\theta", integralValue: "\\frac{25\\pi}{4}", area: "\\frac{25\\pi}{8}", theta: "\\frac{\\pi}{6}", derivative: "-10\\sin2\\theta", r: "\\frac52", point: "\\frac{5\\sqrt3}{4},\\frac54", numerator: "-\\frac{5\\sqrt3}{4}", denominator: "-\\frac{35}{4}", slope: "\\frac{\\sqrt3}{7}", tangent: "y-\\frac54=\\frac{\\sqrt3}{7}\\left(x-\\frac{5\\sqrt3}{4}\\right)", tags: ["rose curve"] },
  { curve: "3\\cos2\\theta", interval: "-\\frac{\\pi}{4}\\le \\theta\\le\\frac{\\pi}{4}", squared: "9\\cos^2 2\\theta", integralValue: "\\frac{9\\pi}{4}", area: "\\frac{9\\pi}{8}", theta: "\\frac{\\pi}{6}", derivative: "-6\\sin2\\theta", r: "\\frac32", point: "\\frac{3\\sqrt3}{4},\\frac34", numerator: "-\\frac{3\\sqrt3}{4}", denominator: "-\\frac{21}{4}", slope: "\\frac{\\sqrt3}{7}", tangent: "y-\\frac34=\\frac{\\sqrt3}{7}\\left(x-\\frac{3\\sqrt3}{4}\\right)", tags: ["rose curve"] },
  { curve: "2+\\cos\\theta", interval: "0\\le \\theta\\le2\\pi", squared: "4+4\\cos\\theta+\\cos^2\\theta", integralValue: "9\\pi", area: "\\frac{9\\pi}{2}", theta: "\\frac{\\pi}{2}", derivative: "-\\sin\\theta", r: "2", point: "0,2", numerator: "-1", denominator: "-2", slope: "\\frac12", tangent: "y-2=\\frac12x", tags: ["limacon"] },
  { curve: "3+\\cos\\theta", interval: "0\\le \\theta\\le2\\pi", squared: "9+6\\cos\\theta+\\cos^2\\theta", integralValue: "19\\pi", area: "\\frac{19\\pi}{2}", theta: "\\frac{\\pi}{2}", derivative: "-\\sin\\theta", r: "3", point: "0,3", numerator: "-1", denominator: "-3", slope: "\\frac13", tangent: "y-3=\\frac13x", tags: ["limacon"] },
  { curve: "2+2\\cos\\theta", interval: "0\\le \\theta\\le2\\pi", squared: "4(1+2\\cos\\theta+\\cos^2\\theta)", integralValue: "12\\pi", area: "6\\pi", theta: "\\frac{\\pi}{3}", derivative: "-2\\sin\\theta", r: "3", point: "\\frac32,\\frac{3\\sqrt3}{2}", numerator: "0", denominator: "-3\\sqrt3", slope: "0", tangent: "y=\\frac{3\\sqrt3}{2}", tags: ["cardioid", "horizontal tangent"] },
  { curve: "3+3\\cos\\theta", interval: "0\\le \\theta\\le2\\pi", squared: "9(1+2\\cos\\theta+\\cos^2\\theta)", integralValue: "27\\pi", area: "\\frac{27\\pi}{2}", theta: "\\frac{\\pi}{3}", derivative: "-3\\sin\\theta", r: "\\frac92", point: "\\frac94,\\frac{9\\sqrt3}{4}", numerator: "0", denominator: "-3\\sqrt3", slope: "0", tangent: "y=\\frac{9\\sqrt3}{4}", tags: ["cardioid", "horizontal tangent"] },
];

export const questions: Question[] = [
  ...directAreaSpecs.map((spec, index) => directAreaQuestion(index + 1, spec)),
  ...betweenAreaSpecs.map((spec, index) => betweenAreaQuestion(index + 15, spec)),
  ...slopeSpecs.map((spec, index) => slopeQuestion(index + 29, spec)),
  ...tangentAnglesSpecs.map((spec, index) => tangentAnglesQuestion(index + 39, spec)),
  ...compositeSpecs.map((spec, index) => compositeQuestion(index + 55, spec)),
];
