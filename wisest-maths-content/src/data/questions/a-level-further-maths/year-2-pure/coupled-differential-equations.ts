import type { Difficulty, Question, SolutionStep } from "@/lib/types";

const LEVEL = "A-Level Further Maths";
const TOPIC = "Further Maths Year 2: Pure (Core Pure 2)";
const SUBTOPIC = "Coupled differential equations";
const SUBTOPIC_ID = "fm.y2.pure.coupled-differential-equations";

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

function rateLatex(rate: number): string {
  if (rate === 1) return "t";
  if (rate === -1) return "-t";
  return `${rate}t`;
}

function expLatex(rate: number): string {
  return `e^{${rateLatex(rate)}}`;
}

function coeffVariable(coeff: number, variable: string): string {
  const absCoeff = Math.abs(coeff);
  const body = absCoeff === 1 ? variable : `${absCoeff}${variable}`;
  return coeff < 0 ? `-${body}` : body;
}

function linearExpression(terms: Array<[number, string]>): string {
  const nonZero = terms.filter(([coeff]) => coeff !== 0);
  if (nonZero.length === 0) return "0";

  return nonZero
    .map(([coeff, variable], index) => {
      const part = coeffVariable(coeff, variable);
      if (index === 0) return part;
      return coeff > 0 ? `+${part}` : part;
    })
    .join("");
}

function coefficientExpTerm(coeff: number, rate: number): { sign: "+" | "-"; body: string } | null {
  if (coeff === 0) return null;
  const absCoeff = Math.abs(coeff);
  const magnitude = absCoeff === 1 ? "" : `${absCoeff}`;
  return {
    sign: coeff < 0 ? "-" : "+",
    body: `${magnitude}${expLatex(rate)}`,
  };
}

function combineExpTerms(terms: Array<[number, number]>): string {
  const parts = terms.map(([coeff, rate]) => coefficientExpTerm(coeff, rate)).filter(Boolean) as Array<{
    sign: "+" | "-";
    body: string;
  }>;

  if (parts.length === 0) return "0";

  return parts
    .map((part, index) => {
      if (index === 0) return part.sign === "-" ? `-${part.body}` : part.body;
      return part.sign === "-" ? `-${part.body}` : `+${part.body}`;
    })
    .join("");
}

function spaced(expression: string): string {
  return expression.replace(/\+/g, " + ").replace(/-/g, " - ").replace(/^ - /, "-");
}

type SymmetricSpec = {
  a: number;
  b: number;
  x0: number;
  y0: number;
};

function symmetricValues(spec: SymmetricSpec) {
  const p = (spec.a + spec.b) / 2;
  const q = (spec.a - spec.b) / 2;
  const u0 = spec.x0 + spec.y0;
  const v0 = spec.x0 - spec.y0;
  const xA = u0 / 2;
  const xB = v0 / 2;
  const yA = u0 / 2;
  const yB = -v0 / 2;

  return {
    p,
    q,
    u0,
    v0,
    xSolution: combineExpTerms([
      [xA, spec.a],
      [xB, spec.b],
    ]),
    ySolution: combineExpTerms([
      [yA, spec.a],
      [yB, spec.b],
    ]),
  };
}

function symmetricModeQuestion(number: number, spec: SymmetricSpec): Question {
  const values = symmetricValues(spec);
  const dx = linearExpression([
    [values.p, "x"],
    [values.q, "y"],
  ]);
  const dy = linearExpression([
    [values.q, "x"],
    [values.p, "y"],
  ]);

  return question(
    number,
    "Easy",
    5,
    ["coupled differential equations", "normal modes", "initial conditions"],
    "expression",
    `Solve the coupled system $\\dfrac{dx}{dt}=${dx}$, $\\dfrac{dy}{dt}=${dy}$, given $x(0)=${spec.x0}$ and $y(0)=${spec.y0}$.`,
    [
      {
        description: "Introduce sum and difference variables",
        workingLatex: "u=x+y,\\qquad v=x-y",
        explanation: "For this symmetric pair of equations, the sum and difference are natural modes because the coupling terms combine neatly.",
      },
      {
        description: "Differentiate the sum",
        workingLatex: `\\dfrac{du}{dt}=\\dfrac{dx}{dt}+\\dfrac{dy}{dt}=${spec.a}(x+y)=${spec.a}u`,
        explanation: "Adding the two equations removes the mixing and gives a single differential equation for $u$.",
      },
      {
        description: "Differentiate the difference",
        workingLatex: `\\dfrac{dv}{dt}=\\dfrac{dx}{dt}-\\dfrac{dy}{dt}=${spec.b}(x-y)=${spec.b}v`,
        explanation: "Subtracting the equations isolates the second independent mode.",
      },
      {
        description: "Use the initial values",
        workingLatex: `u(0)=${spec.x0}+${spec.y0}=${values.u0},\\qquad v(0)=${spec.x0}-${spec.y0}=${values.v0}`,
        explanation: "The initial conditions for $x$ and $y$ translate directly into initial conditions for the two modes.",
      },
      {
        description: "Solve the equation for $u$",
        workingLatex: `u=${values.u0}${expLatex(spec.a)}`,
        explanation: "An equation of the form $u'=ku$ has exponential solution $u=u(0)e^{kt}$.",
      },
      {
        description: "Solve the equation for $v$",
        workingLatex: `v=${values.v0}${expLatex(spec.b)}`,
        explanation: "The second mode evolves independently with its own exponential rate.",
      },
      {
        description: "Convert back to $x$ and $y$",
        workingLatex: `x=\\dfrac{u+v}{2}=${values.xSolution},\\qquad y=\\dfrac{u-v}{2}=${values.ySolution}`,
        explanation: "Once the independent modes are known, the original variables are recovered by reversing the definitions of $u$ and $v$.",
      },
      {
        description: "State the solution",
        workingLatex: `\\boxed{x=${values.xSolution},\\quad y=${values.ySolution}}`,
        explanation: "This gives both functions and satisfies the two initial conditions.",
      },
    ],
    `$x=${values.xSolution},\\ y=${values.ySolution}$`,
  );
}

type TriangularSpec = {
  a: number;
  b: number;
  c: number;
  x0: number;
  y0: number;
};

function triangularValues(spec: TriangularSpec) {
  const k = (spec.c * spec.x0) / (spec.a - spec.b);
  const bConstant = spec.y0 - k;
  return {
    k,
    bConstant,
    xSolution: combineExpTerms([[spec.x0, spec.a]]),
    ySolution: combineExpTerms([
      [bConstant, spec.b],
      [k, spec.a],
    ]),
  };
}

function triangularQuestion(number: number, spec: TriangularSpec): Question {
  const values = triangularValues(spec);

  return question(
    number,
    "Intermediate",
    6,
    ["coupled differential equations", "first-order systems", "substitution"],
    "expression",
    `Solve the coupled system $\\dfrac{dx}{dt}=${spec.a}x$, $\\dfrac{dy}{dt}=${spec.b}y+${spec.c}x$, with $x(0)=${spec.x0}$ and $y(0)=${spec.y0}$.`,
    [
      {
        description: "Notice the triangular structure",
        workingLatex: "\\dfrac{dx}{dt}=ax\\quad\\text{does not involve }y",
        explanation: "The first equation can be solved immediately, then its solution becomes the forcing term in the second equation.",
      },
      {
        description: "Solve for $x$",
        workingLatex: `x=${spec.x0}${expLatex(spec.a)}`,
        explanation: "The equation $x'=ax$ gives exponential growth or decay from the initial value.",
      },
      {
        description: "Substitute $x(t)$ into the second equation",
        workingLatex: `\\dfrac{dy}{dt}=${spec.b}y+${spec.c}\\left(${spec.x0}${expLatex(spec.a)}\\right)`,
        explanation: "This turns the coupled system into one linear first-order equation for $y$.",
      },
      {
        description: "Write the forced equation",
        workingLatex: `\\dfrac{dy}{dt}-${spec.b}y=${spec.c * spec.x0}${expLatex(spec.a)}`,
        explanation: "Putting the $y$ terms on the left makes the standard linear-equation structure clear.",
      },
      {
        description: "Find an exponential particular part",
        workingLatex: `y_p=K${expLatex(spec.a)}\\Rightarrow (${spec.a}-${spec.b})K=${spec.c * spec.x0},\\quad K=${values.k}`,
        explanation: "Because the forcing is exponential, trying a matching exponential gives the particular solution efficiently.",
      },
      {
        description: "Write the general form of $y$",
        workingLatex: `y=B${expLatex(spec.b)}+${values.k}${expLatex(spec.a)}`,
        explanation: "The complementary part comes from $y'=${spec.b}y$, and the particular part responds to the forcing from $x$.",
      },
      {
        description: "Use the initial value for $y$",
        workingLatex: `${spec.y0}=B+${values.k}\\Rightarrow B=${values.bConstant}`,
        explanation: "At $t=0$, each exponential equals 1, so the constant is found by simple substitution.",
      },
      {
        description: "Combine the two components",
        workingLatex: `x=${values.xSolution},\\qquad y=${values.ySolution}`,
        explanation: "The pair now gives the solution to the original coupled system.",
      },
      {
        description: "Check the coupling direction",
        workingLatex: `\\dfrac{d}{dt}\\left(${values.xSolution}\\right)=${spec.a}\\left(${values.xSolution}\\right)`,
        explanation: "The solved $x$ still satisfies the independent first equation, so it is valid to use it in the second.",
      },
      {
        description: "State the solution",
        workingLatex: `\\boxed{x=${values.xSolution},\\quad y=${values.ySolution}}`,
        explanation: "Both functions are now written explicitly in terms of $t$.",
      },
    ],
    `$x=${values.xSolution},\\ y=${values.ySolution}$`,
  );
}

type StabilitySpec = {
  a: number;
  b: number;
};

function stabilityLabel(a: number, b: number): string {
  if (a < 0 && b < 0) return "asymptotically stable";
  if (a > 0 && b > 0) return "unstable source";
  return "saddle-type unstable";
}

function stabilityQuestion(number: number, spec: StabilitySpec): Question {
  const p = (spec.a + spec.b) / 2;
  const q = (spec.a - spec.b) / 2;
  const dx = linearExpression([
    [p, "x"],
    [q, "y"],
  ]);
  const dy = linearExpression([
    [q, "x"],
    [p, "y"],
  ]);
  const label = stabilityLabel(spec.a, spec.b);

  return question(
    number,
    "Intermediate",
    6,
    ["coupled differential equations", "stability", "eigenvalues"],
    "written",
    `For the system $\\dfrac{dx}{dt}=${dx}$, $\\dfrac{dy}{dt}=${dy}$, find the normal-mode solution and classify the equilibrium at $(0,0)$.`,
    [
      {
        description: "Use normal-mode variables",
        workingLatex: "u=x+y,\\qquad v=x-y",
        explanation: "The symmetry of the equations suggests using the sum and difference because these combinations decouple the system.",
      },
      {
        description: "Decouple the equations",
        workingLatex: `u'=${spec.a}u,\\qquad v'=${spec.b}v`,
        explanation: "The two normal modes evolve independently, so their coefficients are the eigenvalues of the system.",
      },
      {
        description: "Write the mode solutions",
        workingLatex: `u=A${expLatex(spec.a)},\\qquad v=B${expLatex(spec.b)}`,
        explanation: "Each normal mode follows a simple exponential law.",
      },
      {
        description: "Convert to $x$ and $y$",
        workingLatex: `x=\\dfrac{A${expLatex(spec.a)}+B${expLatex(spec.b)}}{2},\\qquad y=\\dfrac{A${expLatex(spec.a)}-B${expLatex(spec.b)}}{2}`,
        explanation: "The original variables are half the sum and half the difference of the two modes.",
      },
      {
        description: "Identify the eigenvalues",
        workingLatex: `\\lambda_1=${spec.a},\\qquad \\lambda_2=${spec.b}`,
        explanation: "The signs of the eigenvalues determine how nearby solutions behave as $t$ increases.",
      },
      {
        description: "Interpret the first mode",
        workingLatex: spec.a < 0 ? `${expLatex(spec.a)}\\to0\\quad(t\\to\\infty)` : `${expLatex(spec.a)}\\to\\infty\\quad(t\\to\\infty)`,
        explanation: spec.a < 0 ? "A negative eigenvalue makes this mode decay towards the equilibrium." : "A positive eigenvalue makes this mode grow away from the equilibrium.",
      },
      {
        description: "Interpret the second mode",
        workingLatex: spec.b < 0 ? `${expLatex(spec.b)}\\to0\\quad(t\\to\\infty)` : `${expLatex(spec.b)}\\to\\infty\\quad(t\\to\\infty)`,
        explanation: spec.b < 0 ? "A negative eigenvalue makes this mode decay towards the equilibrium." : "A positive eigenvalue makes this mode grow away from the equilibrium.",
      },
      {
        description: "Classify the equilibrium",
        workingLatex: `\\text{classification: }${label}`,
        explanation: "If both modes decay the equilibrium is stable; if any mode grows, there are nearby solutions moving away.",
      },
      {
        description: "State the result",
        workingLatex: `\\boxed{x=\\dfrac{A${expLatex(spec.a)}+B${expLatex(spec.b)}}{2},\\quad y=\\dfrac{A${expLatex(spec.a)}-B${expLatex(spec.b)}}{2};\\ \\text{${label}}}`,
        explanation: "This gives the general solution and the qualitative behaviour of the equilibrium.",
      },
    ],
    `$x=\\dfrac{A${expLatex(spec.a)}+B${expLatex(spec.b)}}{2},\\ y=\\dfrac{A${expLatex(spec.a)}-B${expLatex(spec.b)}}{2}$; ${label}`,
  );
}

function eliminationQuestion(number: number, spec: SymmetricSpec): Question {
  const values = symmetricValues(spec);
  const dx = linearExpression([
    [values.p, "x"],
    [values.q, "y"],
  ]);
  const dy = linearExpression([
    [values.q, "x"],
    [values.p, "y"],
  ]);
  const trace = spec.a + spec.b;
  const product = spec.a * spec.b;
  const xPrime0 = values.p * spec.x0 + values.q * spec.y0;
  const characteristic = `m^2-${trace}m+${product}=0`;

  return question(
    number,
    "Hard",
    8,
    ["coupled differential equations", "elimination", "second-order differential equations"],
    "expression",
    `Use elimination to solve $\\dfrac{dx}{dt}=${dx}$, $\\dfrac{dy}{dt}=${dy}$, where $x(0)=${spec.x0}$ and $y(0)=${spec.y0}$.`,
    [
      {
        description: "Start with the first equation",
        workingLatex: `x'=${dx}`,
        explanation: "Elimination aims to turn the two first-order equations into one second-order equation for $x$.",
      },
      {
        description: "Express $y$ in terms of $x$ and $x'$",
        workingLatex: `y=\\dfrac{x'-${values.p}x}{${values.q}}`,
        explanation: "Solving the first equation for $y$ gives a way to remove $y$ later.",
      },
      {
        description: "Differentiate the first equation",
        workingLatex: `x''=${values.p}x'+${values.q}y'`,
        explanation: "A second derivative appears because we are reducing a two-variable first-order system to one equation in $x$.",
      },
      {
        description: "Substitute for $y'$",
        workingLatex: `x''=${values.p}x'+${values.q}(${values.q}x+${values.p}y)`,
        explanation: "Using the second equation starts the process of removing $y'$ from the calculation.",
      },
      {
        description: "Substitute for $y$",
        workingLatex: `x''=${values.p}x'+${values.q}^{2}x+${values.p}${values.q}\\left(\\dfrac{x'-${values.p}x}{${values.q}}\\right)`,
        explanation: "This step removes the remaining $y$, leaving an equation involving only $x$ and its derivatives.",
      },
      {
        description: "Simplify the second-order equation",
        workingLatex: `x''-${trace}x'+${product}x=0`,
        explanation: "The simplified equation has constant coefficients, so it can be solved with an auxiliary equation.",
      },
      {
        description: "Form the auxiliary equation",
        workingLatex: characteristic,
        explanation: "Trying $x=e^{mt}$ converts the differential equation into an algebraic equation for $m$.",
      },
      {
        description: "Find the roots",
        workingLatex: `(m-${spec.a})(m-${spec.b})=0\\Rightarrow m=${spec.a},\\ ${spec.b}`,
        explanation: "The roots are the exponential rates present in the solution.",
      },
      {
        description: "Write the general form of $x$",
        workingLatex: `x=C${expLatex(spec.a)}+D${expLatex(spec.b)}`,
        explanation: "Two roots give two independent exponential terms for the second-order equation.",
      },
      {
        description: "Use $x(0)$ and find $x'(0)$",
        workingLatex: `C+D=${spec.x0},\\qquad x'(0)=${values.p}(${spec.x0})+${values.q}(${spec.y0})=${xPrime0}`,
        explanation: "The original system supplies the missing initial derivative for the second-order equation.",
      },
      {
        description: "Solve for the constants",
        workingLatex: `${spec.a}C+${spec.b}D=${xPrime0}\\Rightarrow C=${values.u0 / 2},\\quad D=${values.v0 / 2}`,
        explanation: "The two initial conditions determine the two constants in $x(t)$.",
      },
      {
        description: "Recover $y$",
        workingLatex: `y=\\dfrac{x'-${values.p}x}{${values.q}}=${values.ySolution}`,
        explanation: "Substituting $x$ back into the expression for $y$ restores the second unknown function.",
      },
      {
        description: "Write both functions",
        workingLatex: `x=${values.xSolution},\\qquad y=${values.ySolution}`,
        explanation: "The pair of functions is now in the original variables.",
      },
      {
        description: "State the solution",
        workingLatex: `\\boxed{x=${values.xSolution},\\quad y=${values.ySolution}}`,
        explanation: "This solution satisfies the original coupled system and both initial conditions.",
      },
    ],
    `$x=${values.xSolution},\\ y=${values.ySolution}$`,
  );
}

const symmetricModeSpecs: SymmetricSpec[] = [
  { a: 3, b: 1, x0: 4, y0: 2 },
  { a: 4, b: 2, x0: 5, y0: 1 },
  { a: -1, b: -3, x0: 6, y0: 2 },
  { a: 2, b: -2, x0: 3, y0: 1 },
  { a: 5, b: 1, x0: 4, y0: 0 },
  { a: -2, b: -4, x0: 5, y0: -1 },
  { a: 1, b: -3, x0: 2, y0: 4 },
  { a: 6, b: 2, x0: 3, y0: -1 },
  { a: -1, b: 3, x0: 6, y0: 4 },
  { a: 4, b: -2, x0: 5, y0: 3 },
  { a: -3, b: 1, x0: 4, y0: -2 },
  { a: -2, b: 2, x0: 7, y0: 1 },
  { a: 5, b: 3, x0: 2, y0: 6 },
  { a: -5, b: -1, x0: 3, y0: -1 },
  { a: 3, b: -5, x0: 4, y0: 0 },
  { a: 7, b: 1, x0: 6, y0: 2 },
  { a: -6, b: -2, x0: 5, y0: 1 },
  { a: 2, b: -4, x0: 3, y0: -1 },
  { a: 6, b: -2, x0: 4, y0: 2 },
  { a: -3, b: -7, x0: 6, y0: 0 },
];

const triangularSpecs: TriangularSpec[] = [
  { a: 2, b: 1, c: 1, x0: 3, y0: 2 },
  { a: 3, b: 1, c: 2, x0: 2, y0: 1 },
  { a: 1, b: -1, c: 2, x0: 1, y0: 4 },
  { a: -1, b: -3, c: 2, x0: 2, y0: 1 },
  { a: 4, b: 2, c: 1, x0: 4, y0: 5 },
  { a: 2, b: -2, c: 4, x0: 1, y0: 0 },
  { a: 5, b: 3, c: 2, x0: 3, y0: 1 },
  { a: -2, b: -4, c: 1, x0: 4, y0: 3 },
  { a: 3, b: -1, c: 4, x0: 2, y0: -1 },
  { a: 1, b: -2, c: 3, x0: 1, y0: 2 },
  { a: 4, b: 1, c: 3, x0: 2, y0: 0 },
  { a: -1, b: -5, c: 4, x0: 1, y0: 3 },
  { a: 6, b: 2, c: 2, x0: 4, y0: 1 },
  { a: 2, b: -1, c: 3, x0: 2, y0: -2 },
  { a: -3, b: -4, c: 1, x0: 5, y0: 2 },
  { a: 3, b: 2, c: 1, x0: 6, y0: 1 },
  { a: -2, b: 1, c: -3, x0: 1, y0: 4 },
  { a: 1, b: 4, c: -3, x0: 2, y0: 0 },
  { a: -4, b: -1, c: -3, x0: 2, y0: 5 },
  { a: 5, b: 1, c: 4, x0: 1, y0: -1 },
];

const stabilitySpecs: StabilitySpec[] = [
  { a: -2, b: -5 },
  { a: 1, b: 4 },
  { a: 3, b: -1 },
  { a: -4, b: 2 },
  { a: -1, b: -3 },
  { a: 2, b: 6 },
  { a: -5, b: 1 },
  { a: 4, b: -2 },
  { a: -3, b: -7 },
  { a: 5, b: 1 },
  { a: -6, b: -2 },
  { a: 2, b: -4 },
];

const eliminationSpecs: SymmetricSpec[] = [
  { a: 3, b: 1, x0: 4, y0: 2 },
  { a: 4, b: 2, x0: 6, y0: 2 },
  { a: -1, b: -3, x0: 2, y0: 4 },
  { a: 2, b: -2, x0: 5, y0: 1 },
  { a: 5, b: 1, x0: 6, y0: 2 },
  { a: -2, b: -4, x0: 4, y0: 0 },
  { a: 1, b: -3, x0: 3, y0: -1 },
  { a: 6, b: 2, x0: 2, y0: 4 },
  { a: -1, b: 3, x0: 5, y0: 1 },
  { a: 4, b: -2, x0: 4, y0: -2 },
  { a: -3, b: 1, x0: 2, y0: 6 },
  { a: -2, b: 2, x0: 6, y0: 4 },
  { a: 5, b: 3, x0: 1, y0: 3 },
  { a: -5, b: -1, x0: 3, y0: 1 },
  { a: 3, b: -5, x0: 4, y0: 0 },
  { a: 7, b: 1, x0: 2, y0: -2 },
  { a: -6, b: -2, x0: 4, y0: 2 },
  { a: 2, b: -4, x0: 6, y0: 0 },
];

export const questions: Question[] = [
  ...symmetricModeSpecs.map((spec, index) => symmetricModeQuestion(index + 1, spec)),
  ...triangularSpecs.map((spec, index) => triangularQuestion(index + 21, spec)),
  ...stabilitySpecs.map((spec, index) => stabilityQuestion(index + 41, spec)),
  ...eliminationSpecs.map((spec, index) => eliminationQuestion(index + 53, spec)),
];

