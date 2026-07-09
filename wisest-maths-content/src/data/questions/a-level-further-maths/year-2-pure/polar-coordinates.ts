import type { Difficulty, Question, SolutionStep } from "@/lib/types";

const LEVEL = "A-Level Further Maths";
const TOPIC = "Further Maths Year 2: Pure (Core Pure 2)";
const SUBTOPIC = "Polar coordinates";
const SUBTOPIC_ID = "fm.y2.pure.polar-coordinates";

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


type PolarPointSpec = {
  r: string;
  theta: string;
  xLine: string;
  yLine: string;
  cartesian: string;
  tags: string[];
};

function polarPointQuestion(number: number, spec: PolarPointSpec): Question {
  return question(
    number,
    "Easy",
    4,
    ["polar coordinates", "polar to Cartesian", ...spec.tags],
    "coordinate",
    `Convert the polar coordinate $(${spec.r},${spec.theta})$ into Cartesian coordinates.`,
    [
      {
        description: "Recall the coordinate conversion",
        workingLatex: "x=r\\cos\\theta,\\quad y=r\\sin\\theta",
        explanation: "A polar point is located by moving a distance $r$ along a ray at angle $\\theta$, so its horizontal and vertical components are found with cosine and sine.",
      },
      {
        description: "Identify the radius and angle",
        workingLatex: `r=${spec.r},\\quad \\theta=${spec.theta}`,
        explanation: "These are the two values that control the point's distance from the pole and direction from the initial line.",
      },
      {
        description: "Find the $x$-coordinate",
        workingLatex: spec.xLine,
        explanation: "The $x$-coordinate is the horizontal projection of the radius.",
      },
      {
        description: "Find the $y$-coordinate",
        workingLatex: spec.yLine,
        explanation: "The $y$-coordinate is the vertical projection of the radius.",
      },
      {
        description: "Combine the two coordinates",
        workingLatex: spec.cartesian,
        explanation: "Cartesian coordinates are written as an ordered pair $(x,y)$.",
      },
      {
        description: "Check the quadrant",
        workingLatex: `(${spec.r},${spec.theta})\\mapsto ${spec.cartesian}`,
        explanation: "The signs of $x$ and $y$ should match the direction of the polar angle and any negative radius.",
      },
      {
        description: "State the answer",
        workingLatex: `\\boxed{${spec.cartesian}}`,
        explanation: "This is the Cartesian form of the given polar coordinate.",
      },
    ],
    `$${spec.cartesian}$`,
  );
}

type CartesianPointSpec = {
  point: string;
  radiusLine: string;
  angleLine: string;
  thetaLine: string;
  polar: string;
  tags: string[];
};

function cartesianPointQuestion(number: number, spec: CartesianPointSpec): Question {
  return question(
    number,
    "Easy",
    4,
    ["polar coordinates", "Cartesian to polar", ...spec.tags],
    "coordinate",
    `Convert the Cartesian coordinate $${spec.point}$ into polar form, using $0\\le\\theta<2\\pi$.`,
    [
      {
        description: "Recall the radius formula",
        workingLatex: "r=\\sqrt{x^2+y^2}",
        explanation: "The polar radius is the distance from the origin, so Pythagoras gives its value.",
      },
      {
        description: "Calculate the radius",
        workingLatex: spec.radiusLine,
        explanation: "This gives the positive distance from the pole to the point.",
      },
      {
        description: "Use the tangent ratio",
        workingLatex: "\\tan\\theta=\\dfrac{y}{x}",
        explanation: "The tangent ratio gives the reference angle made with the initial line.",
      },
      {
        description: "Substitute the coordinates",
        workingLatex: spec.angleLine,
        explanation: "The sign of the ratio helps identify the reference angle but not the quadrant by itself.",
      },
      {
        description: "Choose the correct quadrant",
        workingLatex: spec.thetaLine,
        explanation: "The signs of $x$ and $y$ determine where the ray lies, so the angle is adjusted into $0\\le\\theta<2\\pi$.",
      },
      {
        description: "Write the polar coordinate",
        workingLatex: spec.polar,
        explanation: "Polar form records the distance first and the angle second.",
      },
      {
        description: "Check against the original point",
        workingLatex: `x=r\\cos\\theta,\\quad y=r\\sin\\theta`,
        explanation: "A quick conversion back confirms that the chosen angle and radius represent the original Cartesian point.",
      },
      {
        description: "State the answer",
        workingLatex: `\\boxed{${spec.polar}}`,
        explanation: "This is the requested polar form with a non-negative radius.",
      },
    ],
    `$${spec.polar}$`,
  );
}

type CartesianEquationSpec = {
  equation: string;
  substituted: string;
  polar: string;
  tags: string[];
};

function cartesianEquationQuestion(number: number, spec: CartesianEquationSpec): Question {
  return question(
    number,
    "Intermediate",
    6,
    ["polar coordinates", "Cartesian equation to polar", ...spec.tags],
    "equation",
    `Convert the Cartesian equation $${spec.equation}$ into polar form.`,
    [
      {
        description: "Recall the conversion identities",
        workingLatex: "x=r\\cos\\theta,\\quad y=r\\sin\\theta,\\quad x^2+y^2=r^2",
        explanation: "These identities connect Cartesian distances and components with the polar radius and angle.",
      },
      {
        description: "Start with the Cartesian equation",
        workingLatex: spec.equation,
        explanation: "The aim is to remove $x$ and $y$ so that the equation uses only $r$ and $\\theta$.",
      },
      {
        description: "Substitute polar expressions",
        workingLatex: spec.substituted,
        explanation: "Each Cartesian part is replaced by its polar equivalent.",
      },
      {
        description: "Use trigonometric identities if needed",
        workingLatex: "\\cos^2\\theta+\\sin^2\\theta=1,\\quad \\cos2\\theta=\\cos^2\\theta-\\sin^2\\theta",
        explanation: "Standard identities help simplify the equation into a recognisable polar form.",
      },
      {
        description: "Simplify the polar equation",
        workingLatex: spec.polar,
        explanation: "After simplification, the relation is expressed directly in polar coordinates.",
      },
      {
        description: "Check the form",
        workingLatex: spec.polar,
        explanation: "A good polar form should no longer contain $x$ or $y$.",
      },
      {
        description: "Consider the pole if division occurred",
        workingLatex: "r=0\\text{ may need separate interpretation}",
        explanation: "When cancelling a factor of $r$, the pole can be a special point on the original curve.",
      },
      {
        description: "State the answer",
        workingLatex: `\\boxed{${spec.polar}}`,
        explanation: "This is the polar equation corresponding to the Cartesian curve.",
      },
      {
        description: "Final answer",
        workingLatex: `\\boxed{${spec.polar}}`,
        explanation: "The equation is now written using the polar variables $r$ and $\\theta$.",
      },
    ],
    `$${spec.polar}$`,
  );
}

type PolarEquationSpec = {
  equation: string;
  multiplied: string;
  cartesian: string;
  simplified: string;
  tags: string[];
};

function polarEquationQuestion(number: number, spec: PolarEquationSpec): Question {
  return question(
    number,
    "Intermediate",
    6,
    ["polar coordinates", "polar equation to Cartesian", ...spec.tags],
    "equation",
    `Convert the polar equation $${spec.equation}$ into Cartesian form.`,
    [
      {
        description: "Recall the key substitutions",
        workingLatex: "x=r\\cos\\theta,\\quad y=r\\sin\\theta,\\quad r^2=x^2+y^2",
        explanation: "Cartesian form is reached by replacing polar components with $x$, $y$ and $x^2+y^2$.",
      },
      {
        description: "Start from the polar equation",
        workingLatex: spec.equation,
        explanation: "The equation may first need rearranging so that $r\\cos\\theta$ or $r\\sin\\theta$ appears.",
      },
      {
        description: "Rearrange to create Cartesian pieces",
        workingLatex: spec.multiplied,
        explanation: "Multiplying by $r$ or by a denominator often creates $r^2$, $r\\cos\\theta$ and $r\\sin\\theta$.",
      },
      {
        description: "Replace polar pieces",
        workingLatex: spec.cartesian,
        explanation: "Now the expression can be written using $x$ and $y$.",
      },
      {
        description: "Simplify the Cartesian equation",
        workingLatex: spec.simplified,
        explanation: "Completing the square or collecting terms makes the curve easier to recognise.",
      },
      {
        description: "Identify the curve type if helpful",
        workingLatex: spec.simplified,
        explanation: "Recognising a line, circle or hyperbola helps check that the conversion is sensible.",
      },
      {
        description: "Check no polar variables remain",
        workingLatex: spec.simplified,
        explanation: "The final Cartesian form should not contain $r$ or $\\theta$.",
      },
      {
        description: "State the answer",
        workingLatex: `\\boxed{${spec.simplified}}`,
        explanation: "This is the Cartesian equation of the same curve.",
      },
      {
        description: "Final answer",
        workingLatex: `\\boxed{${spec.simplified}}`,
        explanation: "The curve has been expressed in Cartesian coordinates.",
      },
    ],
    `$${spec.simplified}$`,
  );
}

type CurveFeatureSpec = {
  curve: string;
  curveType: string;
  symmetry: string;
  zero: string;
  max: string;
  description: string;
  tags: string[];
};

function curveFeatureQuestion(number: number, spec: CurveFeatureSpec): Question {
  return question(
    number,
    "Intermediate",
    6,
    ["polar coordinates", "sketching polar curves", ...spec.tags],
    "written",
    `Describe the key features needed to sketch the polar curve $r=${spec.curve}$.`,
    [
      {
        description: "Identify the curve family",
        workingLatex: spec.curveType,
        explanation: "Recognising the family gives a reliable starting shape before plotting individual points.",
      },
      {
        description: "Check symmetry",
        workingLatex: spec.symmetry,
        explanation: "Symmetry reduces the amount of plotting needed and helps place the curve accurately.",
      },
      {
        description: "Find where the curve meets the pole",
        workingLatex: spec.zero,
        explanation: "Values where $r=0$ mark passes through the origin or cusps of the curve.",
      },
      {
        description: "Find the largest radius",
        workingLatex: spec.max,
        explanation: "Maximum radius values locate the outermost points or petal tips.",
      },
      {
        description: "Plot standard-angle values",
        workingLatex: "\\theta=0,\\frac{\\pi}{2},\\pi,\\frac{3\\pi}{2}",
        explanation: "Standard angles anchor the sketch on the main axes.",
      },
      {
        description: "Account for negative radius values",
        workingLatex: "r<0\\text{ means plot in the opposite direction}",
        explanation: "Negative $r$ values do not disappear; they place the point on the ray rotated by $\\pi$.",
      },
      {
        description: "Describe the sketch",
        workingLatex: spec.description,
        explanation: "A verbal description records the shape and orientation that the sketch should show.",
      },
      {
        description: "Check the orientation",
        workingLatex: spec.symmetry,
        explanation: "The curve's symmetry and maximum points should agree with the direction of its lobes or loop.",
      },
      {
        description: "State the key features",
        workingLatex: `\\boxed{${spec.description}}`,
        explanation: "These features are enough to produce a clear exam-style sketch.",
      },
      {
        description: "Final answer",
        workingLatex: `\\boxed{${spec.description}}`,
        explanation: "The sketch should reflect the listed intercepts, symmetry and curve type.",
      },
    ],
    `$${spec.description}$`,
  );
}

type IntersectionSpec = {
  first: string;
  second: string;
  equation: string;
  simplified: string;
  theta: string;
  radius: string;
  points: string;
  tags: string[];
};

function intersectionQuestion(number: number, spec: IntersectionSpec): Question {
  return question(
    number,
    "Intermediate",
    7,
    ["polar coordinates", "intersections", ...spec.tags],
    "set",
    `Find the polar coordinates of the intersections of $${spec.first}$ and $${spec.second}$ for $0\\le\\theta<2\\pi$.`,
    [
      {
        description: "Set the radii equal",
        workingLatex: spec.equation,
        explanation: "At an intersection with the same angle, both curves give the same distance from the pole.",
      },
      {
        description: "Simplify the trigonometric equation",
        workingLatex: spec.simplified,
        explanation: "This isolates the trigonometric condition that determines the possible angles.",
      },
      {
        description: "Solve for the angles",
        workingLatex: spec.theta,
        explanation: "All angles in the required interval must be included.",
      },
      {
        description: "Find the corresponding radius",
        workingLatex: spec.radius,
        explanation: "Substituting each angle into either curve gives the radius at the intersection.",
      },
      {
        description: "Write the polar points",
        workingLatex: spec.points,
        explanation: "Each solution is written as a polar coordinate pair.",
      },
      {
        description: "Consider pole intersections",
        workingLatex: "r=0\\text{ should be checked separately if either curve reaches the pole}",
        explanation: "Different angles can represent the same pole, so equality of radii is not always the only possible intersection test.",
      },
      {
        description: "Check for duplicate representations",
        workingLatex: "(r,\\theta)\\equiv(-r,\\theta+\\pi)",
        explanation: "Polar coordinates are not unique, so repeated descriptions of the same point should not be overcounted.",
      },
      {
        description: "State the intersections",
        workingLatex: `\\boxed{${spec.points}}`,
        explanation: "These are the intersection points in the requested interval.",
      },
      {
        description: "Final answer",
        workingLatex: `\\boxed{${spec.points}}`,
        explanation: "The listed polar coordinates satisfy both equations.",
      },
    ],
    `$${spec.points}$`,
  );
}

type ChallengeSketchSpec = {
  curve: string;
  curveType: string;
  symmetry: string;
  range: string;
  zero: string;
  max: string;
  axisPoints: string;
  description: string;
  tags: string[];
};

function challengeSketchQuestion(number: number, spec: ChallengeSketchSpec): Question {
  return question(
    number,
    "Hard",
    8,
    ["polar coordinates", "sketching polar curves", "curve analysis", ...spec.tags],
    "written",
    `Analyse and sketch the polar curve $r=${spec.curve}$, stating its symmetry, key points and overall shape.`,
    [
      {
        description: "Identify the curve family",
        workingLatex: spec.curveType,
        explanation: "The family gives the overall template for the curve before detailed features are added.",
      },
      {
        description: "Test symmetry",
        workingLatex: spec.symmetry,
        explanation: "Symmetry controls how features repeat around the pole.",
      },
      {
        description: "Find the range of $r$",
        workingLatex: spec.range,
        explanation: "The range shows whether negative radius values or inner loops are possible.",
      },
      {
        description: "Find pole crossings",
        workingLatex: spec.zero,
        explanation: "Solving $r=0$ locates cusps or loop crossings through the pole.",
      },
      {
        description: "Find maximum radius points",
        workingLatex: spec.max,
        explanation: "These points usually mark the tips of loops or petals.",
      },
      {
        description: "Evaluate axis points",
        workingLatex: spec.axisPoints,
        explanation: "Axis values anchor the sketch and make its orientation clear.",
      },
      {
        description: "Interpret any negative radius values",
        workingLatex: "r<0\\Rightarrow\\text{ plot on the opposite ray}",
        explanation: "This is especially important for inner-loop limacons and rose curves.",
      },
      {
        description: "Assemble the main shape",
        workingLatex: spec.description,
        explanation: "Combining symmetry, intercepts and radius range gives the full shape.",
      },
      {
        description: "Check the orientation",
        workingLatex: spec.symmetry,
        explanation: "The largest radius should point in the direction predicted by the sine or cosine form.",
      },
      {
        description: "Check the number of loops or petals",
        workingLatex: spec.curveType,
        explanation: "The curve family determines whether the sketch should show one loop, an inner loop, or several petals.",
      },
      {
        description: "Summarise the sketch",
        workingLatex: spec.description,
        explanation: "A clear summary is enough to guide an accurate labelled sketch.",
      },
      {
        description: "State the final description",
        workingLatex: `\\boxed{${spec.description}}`,
        explanation: "This is the requested analysis of the polar curve.",
      },
      {
        description: "Final answer",
        workingLatex: `\\boxed{${spec.description}}`,
        explanation: "The sketch should match these features.",
      },
    ],
    `$${spec.description}$`,
  );
}

const polarPointSpecs: PolarPointSpec[] = [
  { r: "4", theta: "\\dfrac{\\pi}{3}", xLine: "4\\cos\\frac{\\pi}{3}=2", yLine: "4\\sin\\frac{\\pi}{3}=2\\sqrt3", cartesian: "(2,2\\sqrt3)", tags: ["exact trigonometry"] },
  { r: "6", theta: "\\dfrac{\\pi}{6}", xLine: "6\\cos\\frac{\\pi}{6}=3\\sqrt3", yLine: "6\\sin\\frac{\\pi}{6}=3", cartesian: "(3\\sqrt3,3)", tags: ["exact trigonometry"] },
  { r: "5", theta: "\\dfrac{2\\pi}{3}", xLine: "5\\cos\\frac{2\\pi}{3}=-\\dfrac52", yLine: "5\\sin\\frac{2\\pi}{3}=\\dfrac{5\\sqrt3}{2}", cartesian: "\\left(-\\dfrac52,\\dfrac{5\\sqrt3}{2}\\right)", tags: ["quadrant two"] },
  { r: "8", theta: "\\dfrac{3\\pi}{4}", xLine: "8\\cos\\frac{3\\pi}{4}=-4\\sqrt2", yLine: "8\\sin\\frac{3\\pi}{4}=4\\sqrt2", cartesian: "(-4\\sqrt2,4\\sqrt2)", tags: ["quadrant two"] },
  { r: "3", theta: "\\dfrac{5\\pi}{6}", xLine: "3\\cos\\frac{5\\pi}{6}=-\\dfrac{3\\sqrt3}{2}", yLine: "3\\sin\\frac{5\\pi}{6}=\\dfrac32", cartesian: "\\left(-\\dfrac{3\\sqrt3}{2},\\dfrac32\\right)", tags: ["quadrant two"] },
  { r: "7", theta: "\\dfrac{4\\pi}{3}", xLine: "7\\cos\\frac{4\\pi}{3}=-\\dfrac72", yLine: "7\\sin\\frac{4\\pi}{3}=-\\dfrac{7\\sqrt3}{2}", cartesian: "\\left(-\\dfrac72,-\\dfrac{7\\sqrt3}{2}\\right)", tags: ["quadrant three"] },
  { r: "2\\sqrt2", theta: "\\dfrac{7\\pi}{4}", xLine: "2\\sqrt2\\cos\\frac{7\\pi}{4}=2", yLine: "2\\sqrt2\\sin\\frac{7\\pi}{4}=-2", cartesian: "(2,-2)", tags: ["quadrant four"] },
  { r: "10", theta: "\\dfrac{11\\pi}{6}", xLine: "10\\cos\\frac{11\\pi}{6}=5\\sqrt3", yLine: "10\\sin\\frac{11\\pi}{6}=-5", cartesian: "(5\\sqrt3,-5)", tags: ["quadrant four"] },
  { r: "-4", theta: "\\dfrac{\\pi}{6}", xLine: "-4\\cos\\frac{\\pi}{6}=-2\\sqrt3", yLine: "-4\\sin\\frac{\\pi}{6}=-2", cartesian: "(-2\\sqrt3,-2)", tags: ["negative radius"] },
  { r: "-6", theta: "\\dfrac{2\\pi}{3}", xLine: "-6\\cos\\frac{2\\pi}{3}=3", yLine: "-6\\sin\\frac{2\\pi}{3}=-3\\sqrt3", cartesian: "(3,-3\\sqrt3)", tags: ["negative radius"] },
];

const cartesianPointSpecs: CartesianPointSpec[] = [
  { point: "(3,3\\sqrt3)", radiusLine: "\\sqrt{3^2+(3\\sqrt3)^2}=6", angleLine: "\\tan\\theta=\\sqrt3", thetaLine: "\\theta=\\dfrac{\\pi}{3}", polar: "\\left(6,\\dfrac{\\pi}{3}\\right)", tags: ["quadrant one"] },
  { point: "(4,4)", radiusLine: "\\sqrt{4^2+4^2}=4\\sqrt2", angleLine: "\\tan\\theta=1", thetaLine: "\\theta=\\dfrac{\\pi}{4}", polar: "\\left(4\\sqrt2,\\dfrac{\\pi}{4}\\right)", tags: ["quadrant one"] },
  { point: "(-2,2\\sqrt3)", radiusLine: "\\sqrt{(-2)^2+(2\\sqrt3)^2}=4", angleLine: "\\tan\\theta=-\\sqrt3", thetaLine: "\\theta=\\dfrac{2\\pi}{3}", polar: "\\left(4,\\dfrac{2\\pi}{3}\\right)", tags: ["quadrant two"] },
  { point: "(-5,5)", radiusLine: "\\sqrt{(-5)^2+5^2}=5\\sqrt2", angleLine: "\\tan\\theta=-1", thetaLine: "\\theta=\\dfrac{3\\pi}{4}", polar: "\\left(5\\sqrt2,\\dfrac{3\\pi}{4}\\right)", tags: ["quadrant two"] },
  { point: "(-3\\sqrt3,-3)", radiusLine: "\\sqrt{(-3\\sqrt3)^2+(-3)^2}=6", angleLine: "\\tan\\theta=\\dfrac{1}{\\sqrt3}", thetaLine: "\\theta=\\dfrac{7\\pi}{6}", polar: "\\left(6,\\dfrac{7\\pi}{6}\\right)", tags: ["quadrant three"] },
  { point: "(-6,-6)", radiusLine: "\\sqrt{(-6)^2+(-6)^2}=6\\sqrt2", angleLine: "\\tan\\theta=1", thetaLine: "\\theta=\\dfrac{5\\pi}{4}", polar: "\\left(6\\sqrt2,\\dfrac{5\\pi}{4}\\right)", tags: ["quadrant three"] },
  { point: "(2,-2\\sqrt3)", radiusLine: "\\sqrt{2^2+(-2\\sqrt3)^2}=4", angleLine: "\\tan\\theta=-\\sqrt3", thetaLine: "\\theta=\\dfrac{5\\pi}{3}", polar: "\\left(4,\\dfrac{5\\pi}{3}\\right)", tags: ["quadrant four"] },
  { point: "(7,-7)", radiusLine: "\\sqrt{7^2+(-7)^2}=7\\sqrt2", angleLine: "\\tan\\theta=-1", thetaLine: "\\theta=\\dfrac{7\\pi}{4}", polar: "\\left(7\\sqrt2,\\dfrac{7\\pi}{4}\\right)", tags: ["quadrant four"] },
  { point: "(0,-5)", radiusLine: "\\sqrt{0^2+(-5)^2}=5", angleLine: "x=0,\\ y<0", thetaLine: "\\theta=\\dfrac{3\\pi}{2}", polar: "\\left(5,\\dfrac{3\\pi}{2}\\right)", tags: ["axis point"] },
  { point: "(-8,0)", radiusLine: "\\sqrt{(-8)^2+0^2}=8", angleLine: "x<0,\\ y=0", thetaLine: "\\theta=\\pi", polar: "(8,\\pi)", tags: ["axis point"] },
];

const cartesianEquationSpecs: CartesianEquationSpec[] = [
  { equation: "x^2+y^2=25", substituted: "r^2=25", polar: "r=5", tags: ["circle centred at origin"] },
  { equation: "x=4", substituted: "r\\cos\\theta=4", polar: "r=4\\sec\\theta", tags: ["vertical line"] },
  { equation: "y=-3", substituted: "r\\sin\\theta=-3", polar: "r=-3\\csc\\theta", tags: ["horizontal line"] },
  { equation: "x^2+y^2=6x", substituted: "r^2=6r\\cos\\theta", polar: "r=6\\cos\\theta", tags: ["circle through pole"] },
  { equation: "x^2+y^2=-8y", substituted: "r^2=-8r\\sin\\theta", polar: "r=-8\\sin\\theta", tags: ["circle through pole"] },
  { equation: "x^2+y^2=2x+4y", substituted: "r^2=2r\\cos\\theta+4r\\sin\\theta", polar: "r=2\\cos\\theta+4\\sin\\theta", tags: ["shifted circle"] },
  { equation: "xy=3", substituted: "r^2\\sin\\theta\\cos\\theta=3", polar: "r^2\\sin2\\theta=6", tags: ["double-angle form"] },
  { equation: "x^2-y^2=9", substituted: "r^2(\\cos^2\\theta-\\sin^2\\theta)=9", polar: "r^2\\cos2\\theta=9", tags: ["hyperbola"] },
  { equation: "y=x", substituted: "r\\sin\\theta=r\\cos\\theta", polar: "\\theta=\\dfrac{\\pi}{4}\\text{ or }\\dfrac{5\\pi}{4}", tags: ["line through pole"] },
  { equation: "y^2=4x", substituted: "r^2\\sin^2\\theta=4r\\cos\\theta", polar: "r\\sin^2\\theta=4\\cos\\theta", tags: ["parabola"] },
];

const polarEquationSpecs: PolarEquationSpec[] = [
  { equation: "r=4\\cos\\theta", multiplied: "r^2=4r\\cos\\theta", cartesian: "x^2+y^2=4x", simplified: "(x-2)^2+y^2=4", tags: ["circle"] },
  { equation: "r=6\\sin\\theta", multiplied: "r^2=6r\\sin\\theta", cartesian: "x^2+y^2=6y", simplified: "x^2+(y-3)^2=9", tags: ["circle"] },
  { equation: "r=3\\sec\\theta", multiplied: "r\\cos\\theta=3", cartesian: "x=3", simplified: "x=3", tags: ["vertical line"] },
  { equation: "r=-2\\csc\\theta", multiplied: "r\\sin\\theta=-2", cartesian: "y=-2", simplified: "y=-2", tags: ["horizontal line"] },
  { equation: "r^2=16", multiplied: "x^2+y^2=16", cartesian: "x^2+y^2=16", simplified: "x^2+y^2=16", tags: ["circle centred at origin"] },
  { equation: "r=\\dfrac{5}{\\cos\\theta+2\\sin\\theta}", multiplied: "r\\cos\\theta+2r\\sin\\theta=5", cartesian: "x+2y=5", simplified: "x+2y=5", tags: ["straight line"] },
  { equation: "r=\\dfrac{4}{2\\cos\\theta-\\sin\\theta}", multiplied: "2r\\cos\\theta-r\\sin\\theta=4", cartesian: "2x-y=4", simplified: "2x-y=4", tags: ["straight line"] },
  { equation: "r^2\\cos2\\theta=12", multiplied: "r^2(\\cos^2\\theta-\\sin^2\\theta)=12", cartesian: "x^2-y^2=12", simplified: "x^2-y^2=12", tags: ["hyperbola"] },
  { equation: "r=2\\cos\\theta+6\\sin\\theta", multiplied: "r^2=2r\\cos\\theta+6r\\sin\\theta", cartesian: "x^2+y^2=2x+6y", simplified: "(x-1)^2+(y-3)^2=10", tags: ["shifted circle"] },
  { equation: "r^2\\sin2\\theta=18", multiplied: "2r^2\\sin\\theta\\cos\\theta=18", cartesian: "2xy=18", simplified: "xy=9", tags: ["hyperbola"] },
];

const curveFeatureSpecs: CurveFeatureSpec[] = [
  { curve: "4\\cos\\theta", curveType: "circle", symmetry: "initial line", zero: "r=0\\text{ at }\\theta=\\dfrac{\\pi}{2},\\dfrac{3\\pi}{2}", max: "r_{\\max}=4\\text{ at }\\theta=0", description: "circle centre $(2,0)$, radius $2$", tags: ["circle", "sketching"] },
  { curve: "6\\sin\\theta", curveType: "circle", symmetry: "line $\\theta=\\dfrac{\\pi}{2}$", zero: "r=0\\text{ at }\\theta=0,\\pi", max: "r_{\\max}=6\\text{ at }\\theta=\\dfrac{\\pi}{2}", description: "circle centre $(0,3)$, radius $3$", tags: ["circle", "sketching"] },
  { curve: "3(1+\\cos\\theta)", curveType: "cardioid", symmetry: "initial line", zero: "r=0\\text{ at }\\theta=\\pi", max: "r_{\\max}=6\\text{ at }\\theta=0", description: "cardioid with cusp at the pole and bulge to the right", tags: ["cardioid"] },
  { curve: "2(1-\\sin\\theta)", curveType: "cardioid", symmetry: "line $\\theta=\\dfrac{\\pi}{2}$", zero: "r=0\\text{ at }\\theta=\\dfrac{\\pi}{2}", max: "r_{\\max}=4\\text{ at }\\theta=\\dfrac{3\\pi}{2}", description: "cardioid with cusp above the pole and bulge downward", tags: ["cardioid"] },
  { curve: "2+\\cos\\theta", curveType: "limacon", symmetry: "initial line", zero: "1\\le r\\le3", max: "r_{\\max}=3\\text{ at }\\theta=0", description: "dimple-free limacon bulging to the right", tags: ["limacon"] },
  { curve: "3-2\\cos\\theta", curveType: "limacon", symmetry: "initial line", zero: "1\\le r\\le5", max: "r_{\\max}=5\\text{ at }\\theta=\\pi", description: "limacon bulging to the left with no inner loop", tags: ["limacon"] },
  { curve: "1+2\\cos\\theta", curveType: "limacon with inner loop", symmetry: "initial line", zero: "r=0\\text{ when }\\cos\\theta=-\\dfrac12", max: "r_{\\max}=3\\text{ at }\\theta=0", description: "inner-loop limacon facing right", tags: ["inner loop"] },
  { curve: "2+4\\sin\\theta", curveType: "limacon with inner loop", symmetry: "line $\\theta=\\dfrac{\\pi}{2}$", zero: "r=0\\text{ when }\\sin\\theta=-\\dfrac12", max: "r_{\\max}=6\\text{ at }\\theta=\\dfrac{\\pi}{2}", description: "inner-loop limacon facing upward", tags: ["inner loop"] },
  { curve: "4\\cos2\\theta", curveType: "four-petal rose", symmetry: "both coordinate axes", zero: "r=0\\text{ when }\\theta=\\dfrac{\\pi}{4},\\dfrac{3\\pi}{4},\\ldots", max: "|r|_{\\max}=4", description: "four petals on the coordinate axes", tags: ["rose curve"] },
  { curve: "3\\sin2\\theta", curveType: "four-petal rose", symmetry: "lines $\\theta=\\dfrac{\\pi}{4}$ and $\\theta=\\dfrac{3\\pi}{4}$", zero: "r=0\\text{ when }\\theta=0,\\dfrac{\\pi}{2},\\pi,\\ldots", max: "|r|_{\\max}=3", description: "four petals on the diagonal lines", tags: ["rose curve"] },
  { curve: "2\\cos3\\theta", curveType: "three-petal rose", symmetry: "initial line", zero: "r=0\\text{ when }\\cos3\\theta=0", max: "|r|_{\\max}=2", description: "three equally spaced petals, one on the initial line", tags: ["rose curve"] },
  { curve: "5\\sin3\\theta", curveType: "three-petal rose", symmetry: "line $\\theta=\\dfrac{\\pi}{2}$", zero: "r=0\\text{ when }\\sin3\\theta=0", max: "|r|_{\\max}=5", description: "three equally spaced petals, one centred vertically", tags: ["rose curve"] },
  { curve: "\\theta", curveType: "Archimedean spiral", symmetry: "no line symmetry on the full interval", zero: "r=0\\text{ at }\\theta=0", max: "r=2\\pi\\text{ at }\\theta=2\\pi", description: "one outward turn of a spiral", tags: ["spiral"] },
  { curve: "2\\theta", curveType: "Archimedean spiral", symmetry: "no line symmetry on the full interval", zero: "r=0\\text{ at }\\theta=0", max: "r=4\\pi\\text{ at }\\theta=2\\pi", description: "one steeper outward turn of a spiral", tags: ["spiral"] },
  { curve: "\\dfrac{4}{\\theta}", curveType: "reciprocal spiral", symmetry: "no line symmetry on $\\theta>0$", zero: "r\\to\\infty\\text{ as }\\theta\\to0^+", max: "r\\to0\\text{ as }\\theta\\to\\infty", description: "spiral approaches the pole as the angle increases", tags: ["spiral"] },
];

const intersectionSpecs: IntersectionSpec[] = [
  { first: "r=2\\cos\\theta", second: "r=1", equation: "2\\cos\\theta=1", simplified: "\\cos\\theta=\\dfrac12", theta: "\\theta=\\dfrac{\\pi}{3},\\dfrac{5\\pi}{3}", radius: "r=1", points: "\\left(1,\\dfrac{\\pi}{3}\\right),\\left(1,\\dfrac{5\\pi}{3}\\right)", tags: ["intersections"] },
  { first: "r=3\\sin\\theta", second: "r=3\\cos\\theta", equation: "3\\sin\\theta=3\\cos\\theta", simplified: "\\tan\\theta=1", theta: "\\theta=\\dfrac{\\pi}{4},\\dfrac{5\\pi}{4}", radius: "r=\\dfrac{3\\sqrt2}{2},-\\dfrac{3\\sqrt2}{2}", points: "\\left(\\dfrac{3\\sqrt2}{2},\\dfrac{\\pi}{4}\\right)\\text{ and the pole-equivalent opposite point}", tags: ["intersections"] },
  { first: "r=2+2\\cos\\theta", second: "r=2", equation: "2+2\\cos\\theta=2", simplified: "\\cos\\theta=0", theta: "\\theta=\\dfrac{\\pi}{2},\\dfrac{3\\pi}{2}", radius: "r=2", points: "\\left(2,\\dfrac{\\pi}{2}\\right),\\left(2,\\dfrac{3\\pi}{2}\\right)", tags: ["cardioid", "circle"] },
  { first: "r=4\\sin\\theta", second: "r=2", equation: "4\\sin\\theta=2", simplified: "\\sin\\theta=\\dfrac12", theta: "\\theta=\\dfrac{\\pi}{6},\\dfrac{5\\pi}{6}", radius: "r=2", points: "\\left(2,\\dfrac{\\pi}{6}\\right),\\left(2,\\dfrac{5\\pi}{6}\\right)", tags: ["circle"] },
  { first: "r=1+\\cos\\theta", second: "r=1", equation: "1+\\cos\\theta=1", simplified: "\\cos\\theta=0", theta: "\\theta=\\dfrac{\\pi}{2},\\dfrac{3\\pi}{2}", radius: "r=1", points: "\\left(1,\\dfrac{\\pi}{2}\\right),\\left(1,\\dfrac{3\\pi}{2}\\right)", tags: ["cardioid"] },
  { first: "r=3", second: "r=6\\cos\\theta", equation: "3=6\\cos\\theta", simplified: "\\cos\\theta=\\dfrac12", theta: "\\theta=\\dfrac{\\pi}{3},\\dfrac{5\\pi}{3}", radius: "r=3", points: "\\left(3,\\dfrac{\\pi}{3}\\right),\\left(3,\\dfrac{5\\pi}{3}\\right)", tags: ["circle"] },
  { first: "r=2\\sin\\theta", second: "r=2\\cos\\theta", equation: "2\\sin\\theta=2\\cos\\theta", simplified: "\\tan\\theta=1", theta: "\\theta=\\dfrac{\\pi}{4},\\dfrac{5\\pi}{4}", radius: "r=\\sqrt2,-\\sqrt2", points: "\\left(\\sqrt2,\\dfrac{\\pi}{4}\\right)\\text{ and the pole-equivalent opposite point}", tags: ["circles"] },
  { first: "r=4", second: "r=4\\sin2\\theta", equation: "4=4\\sin2\\theta", simplified: "\\sin2\\theta=1", theta: "\\theta=\\dfrac{\\pi}{4},\\dfrac{5\\pi}{4}", radius: "r=4", points: "\\left(4,\\dfrac{\\pi}{4}\\right),\\left(4,\\dfrac{5\\pi}{4}\\right)", tags: ["rose curve"] },
  { first: "r=2+\\sin\\theta", second: "r=3\\sin\\theta", equation: "2+\\sin\\theta=3\\sin\\theta", simplified: "\\sin\\theta=1", theta: "\\theta=\\dfrac{\\pi}{2}", radius: "r=3", points: "\\left(3,\\dfrac{\\pi}{2}\\right)", tags: ["limacon", "circle"] },
  { first: "r=2\\cos2\\theta", second: "r=1", equation: "2\\cos2\\theta=1", simplified: "\\cos2\\theta=\\dfrac12", theta: "\\theta=\\dfrac{\\pi}{6},\\dfrac{5\\pi}{6},\\dfrac{7\\pi}{6},\\dfrac{11\\pi}{6}", radius: "r=1", points: "\\left(1,\\dfrac{\\pi}{6}\\right),\\left(1,\\dfrac{5\\pi}{6}\\right),\\left(1,\\dfrac{7\\pi}{6}\\right),\\left(1,\\dfrac{11\\pi}{6}\\right)", tags: ["rose curve"] },
];

const challengeSketchSpecs: ChallengeSketchSpec[] = [
  { curve: "r=2+2\\cos\\theta", curveType: "cardioid", symmetry: "initial line", range: "0\\le r\\le4", zero: "r=0\\text{ at }\\theta=\\pi", max: "r=4\\text{ at }\\theta=0", axisPoints: "r=2\\text{ at }\\theta=\\dfrac{\\pi}{2},\\dfrac{3\\pi}{2}", description: "cusp at the pole and widest point on the positive $x$-axis", tags: ["cardioid", "sketching"] },
  { curve: "r=3-3\\sin\\theta", curveType: "cardioid", symmetry: "line $\\theta=\\dfrac{\\pi}{2}$", range: "0\\le r\\le6", zero: "r=0\\text{ at }\\theta=\\dfrac{\\pi}{2}", max: "r=6\\text{ at }\\theta=\\dfrac{3\\pi}{2}", axisPoints: "r=3\\text{ at }\\theta=0,\\pi", description: "cusp above the pole and widest point below", tags: ["cardioid", "sketching"] },
  { curve: "2+3\\cos\\theta", curveType: "inner-loop limacon", symmetry: "initial line", range: "-1\\le r\\le5", zero: "r=0\\text{ when }\\cos\\theta=-\\dfrac23", max: "r=5\\text{ at }\\theta=0", axisPoints: "r=2\\text{ at }\\theta=\\dfrac{\\pi}{2},\\dfrac{3\\pi}{2}", description: "large right loop and smaller inner loop", tags: ["limacon", "inner loop"] },
  { curve: "4\\sin2\\theta", curveType: "four-petal rose", symmetry: "diagonal lines", range: "-4\\le r\\le4", zero: "r=0\\text{ at multiples of }\\dfrac{\\pi}{2}", max: "|r|=4\\text{ when }2\\theta=\\dfrac{\\pi}{2},\\dfrac{3\\pi}{2},\\ldots", axisPoints: "petal tips lie on $\\theta=\\dfrac{\\pi}{4},\\dfrac{3\\pi}{4},\\dfrac{5\\pi}{4},\\dfrac{7\\pi}{4}$", description: "four equal petals on the diagonal axes", tags: ["rose curve"] },
  { curve: "3\\cos3\\theta", curveType: "three-petal rose", symmetry: "initial line", range: "-3\\le r\\le3", zero: "r=0\\text{ when }3\\theta=\\dfrac{\\pi}{2}+k\\pi", max: "|r|=3\\text{ when }3\\theta=k\\pi", axisPoints: "one petal tip is at $(3,0)$", description: "three equally spaced petals with one on the initial line", tags: ["rose curve"] },
];

export const questions: Question[] = [
  ...polarPointSpecs.map((spec, index) => polarPointQuestion(index + 1, spec)),
  ...cartesianPointSpecs.map((spec, index) => cartesianPointQuestion(index + 11, spec)),
  ...cartesianEquationSpecs.map((spec, index) => cartesianEquationQuestion(index + 21, spec)),
  ...polarEquationSpecs.map((spec, index) => polarEquationQuestion(index + 31, spec)),
  ...curveFeatureSpecs.map((spec, index) => curveFeatureQuestion(index + 41, spec)),
  ...intersectionSpecs.map((spec, index) => intersectionQuestion(index + 56, spec)),
  ...challengeSketchSpecs.map((spec, index) => challengeSketchQuestion(index + 66, spec)),
];
