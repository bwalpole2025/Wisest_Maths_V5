import type { Difficulty, Question, SolutionStep } from "@/lib/types";

const LEVEL = "A-Level Further Maths";
const TOPIC = "Further Maths Year 2: Pure (Core Pure 2)";
const SUBTOPIC = "Second-order differential equations";
const SUBTOPIC_ID = "fm.y2.pure.second-order-differential-equations";

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

type HomogeneousSpec = {
  equation: string;
  characteristic: string;
  factorisation: string;
  roots: string;
  solution: string;
  rootType: string;
  tags: string[];
};

function homogeneousQuestion(number: number, spec: HomogeneousSpec): Question {
  return question(
    number,
    "Easy",
    4,
    ["second-order differential equations", "homogeneous equations", ...spec.tags],
    "expression",
    `Find the general solution of $${spec.equation}$.`,
    [
      {
        description: "Identify the type of equation",
        workingLatex: spec.equation,
        explanation: "This is a linear homogeneous second-order differential equation with constant coefficients, so the characteristic equation method is appropriate.",
      },
      {
        description: "Use the trial solution",
        workingLatex: "y=e^{mx}",
        explanation: "Exponential trial solutions work because differentiating $e^{mx}$ only multiplies it by powers of $m$.",
      },
      {
        description: "Form the characteristic equation",
        workingLatex: spec.characteristic,
        explanation: "Substituting $y=e^{mx}$ turns the differential equation into an algebraic equation for $m$.",
      },
      {
        description: "Factorise the characteristic equation",
        workingLatex: spec.factorisation,
        explanation: "Factoring reveals the possible exponential rates in the complementary function.",
      },
      {
        description: "Find the roots",
        workingLatex: spec.roots,
        explanation: `The ${spec.rootType} roots determine the form of the two independent solutions.`,
      },
      {
        description: "Translate roots into functions",
        workingLatex: spec.solution,
        explanation: "Each real root $m$ gives a term proportional to $e^{mx}$ in the general solution.",
      },
      {
        description: "Include arbitrary constants",
        workingLatex: `y=${spec.solution}`,
        explanation: "A second-order equation needs two arbitrary constants because two integrations' worth of information are involved.",
      },
      {
        description: "State the general solution",
        workingLatex: `\\boxed{y=${spec.solution}}`,
        explanation: "The boxed expression gives all solutions of the homogeneous equation.",
      },
    ],
    `$y=${spec.solution}$`,
  );
}

type RepeatedSpec = {
  equation: string;
  characteristic: string;
  factorisation: string;
  root: string;
  solution: string;
  tags: string[];
};

function repeatedRootQuestion(number: number, spec: RepeatedSpec): Question {
  return question(
    number,
    "Easy",
    4,
    ["second-order differential equations", "repeated roots", ...spec.tags],
    "expression",
    `Find the general solution of $${spec.equation}$.`,
    [
      {
        description: "Recognise the constant-coefficient form",
        workingLatex: spec.equation,
        explanation: "The coefficients are constants and the right-hand side is zero, so we use a characteristic equation.",
      },
      {
        description: "Use an exponential trial solution",
        workingLatex: "y=e^{mx}",
        explanation: "This turns derivatives into powers of $m$, changing the differential equation into algebra.",
      },
      {
        description: "Write the characteristic equation",
        workingLatex: spec.characteristic,
        explanation: "The coefficients of $y''$, $y'$ and $y$ become the coefficients of $m^2$, $m$ and the constant term.",
      },
      {
        description: "Factorise",
        workingLatex: spec.factorisation,
        explanation: "The repeated factor shows that both independent solutions are associated with the same root.",
      },
      {
        description: "Identify the repeated root",
        workingLatex: `m=${spec.root}\\text{ repeated}`,
        explanation: "A repeated root cannot give two different exponentials, so the second independent solution needs an extra factor of $x$.",
      },
      {
        description: "Write the repeated-root form",
        workingLatex: spec.solution,
        explanation: "For a repeated root $m=r$, the complementary function is $(A+Bx)e^{rx}$.",
      },
      {
        description: "Check the number of constants",
        workingLatex: "A\\text{ and }B\\text{ are arbitrary constants}",
        explanation: "Two constants are required for a general solution of a second-order differential equation.",
      },
      {
        description: "State the answer",
        workingLatex: `\\boxed{y=${spec.solution}}`,
        explanation: "This is the complete general solution for the repeated-root case.",
      },
    ],
    `$y=${spec.solution}$`,
  );
}

type ComplexSpec = {
  equation: string;
  characteristic: string;
  completed: string;
  roots: string;
  alpha: string;
  beta: string;
  solution: string;
  tags: string[];
};

function complexRootQuestion(number: number, spec: ComplexSpec): Question {
  return question(
    number,
    "Intermediate",
    6,
    ["second-order differential equations", "complex roots", ...spec.tags],
    "expression",
    `Find the general real solution of $${spec.equation}$.`,
    [
      {
        description: "Set up the characteristic equation",
        workingLatex: spec.characteristic,
        explanation: "The exponential trial solution changes the differential equation into a quadratic equation in $m$.",
      },
      {
        description: "Prepare to solve the quadratic",
        workingLatex: spec.completed,
        explanation: "Completing the square or using the discriminant shows why complex roots will appear.",
      },
      {
        description: "Find the complex roots",
        workingLatex: spec.roots,
        explanation: "Complex conjugate roots always appear in pairs because the differential equation has real coefficients.",
      },
      {
        description: "Identify the real and imaginary parts",
        workingLatex: `\\alpha=${spec.alpha},\\quad \\beta=${spec.beta}`,
        explanation: "For roots $\\alpha\\pm \\beta i$, the real part controls exponential growth or decay and the imaginary part controls oscillation.",
      },
      {
        description: "Recall the real solution form",
        workingLatex: "y=e^{\\alpha x}(A\\cos \\beta x+B\\sin \\beta x)",
        explanation: "Euler's formula converts the complex exponentials into real sine and cosine terms.",
      },
      {
        description: "Substitute the values",
        workingLatex: spec.solution,
        explanation: "Putting in $\\alpha$ and $\\beta$ gives the real complementary function for this equation.",
      },
      {
        description: "Check independence",
        workingLatex: "\\cos(\\beta x)\\text{ and }\\sin(\\beta x)\\text{ are independent}",
        explanation: "The two trigonometric terms carry the two arbitrary constants needed for a second-order equation.",
      },
      {
        description: "Connect to the original equation",
        workingLatex: "y''+ay'+by=0",
        explanation: "Because there is no forcing term, this complementary function is already the full general solution.",
      },
      {
        description: "State the answer",
        workingLatex: `\\boxed{y=${spec.solution}}`,
        explanation: "The answer is written in real-valued form, as normally required for real differential equations.",
      },
    ],
    `$y=${spec.solution}$`,
  );
}

type ForcingSpec = {
  equation: string;
  characteristic: string;
  roots: string;
  complementary: string;
  forcing: string;
  trial: string;
  derivatives: string;
  substitution: string;
  coefficients: string;
  particular: string;
  solution: string;
  difficulty: Difficulty;
  tags: string[];
};

function forcingQuestion(number: number, spec: ForcingSpec): Question {
  return question(
    number,
    spec.difficulty,
    spec.difficulty === "Hard" ? 8 : 6,
    ["second-order differential equations", "particular integrals", ...spec.tags],
    "expression",
    `Find the general solution of $${spec.equation}$.`,
    [
      {
        description: "Solve the complementary equation first",
        workingLatex: spec.characteristic,
        explanation: "The complementary function describes the natural behaviour before accounting for the forcing term.",
      },
      {
        description: "Find the characteristic roots",
        workingLatex: spec.roots,
        explanation: "These roots determine the homogeneous part of the solution.",
      },
      {
        description: "Write the complementary function",
        workingLatex: `y_c=${spec.complementary}`,
        explanation: "This part solves the same differential equation with the right-hand side replaced by zero.",
      },
      {
        description: "Identify the forcing term",
        workingLatex: spec.forcing,
        explanation: "The shape of the forcing term suggests the shape of the particular integral to try.",
      },
      {
        description: "Choose a trial particular integral",
        workingLatex: spec.trial,
        explanation: "Undetermined coefficients works by choosing a trial expression from the same family as the forcing term.",
      },
      {
        description: "Differentiate the trial expression",
        workingLatex: spec.derivatives,
        explanation: "The differential equation contains $y''$ and possibly $y'$, so these derivatives are needed for substitution.",
      },
      {
        description: "Substitute into the differential equation",
        workingLatex: spec.substitution,
        explanation: "Substitution lets us match the trial expression to the required forcing term.",
      },
      {
        description: "Match coefficients",
        workingLatex: spec.coefficients,
        explanation: "Two expressions are equal for all $x$ only when the coefficients of the matching functions agree.",
      },
      {
        description: "Write the particular integral",
        workingLatex: `y_p=${spec.particular}`,
        explanation: "The particular integral is one solution that accounts for the non-zero right-hand side.",
      },
      {
        description: "Combine complementary and particular parts",
        workingLatex: `y=${spec.complementary}+${spec.particular}`,
        explanation: "For a linear equation, the general solution is the complementary function plus any particular integral.",
      },
      {
        description: "Simplify and state the answer",
        workingLatex: `\\boxed{y=${spec.solution}}`,
        explanation: "The final expression gives the full family of solutions to the non-homogeneous equation.",
      },
    ],
    `$y=${spec.solution}$`,
  );
}

type ConditionSpec = {
  equation: string;
  general: string;
  derivative: string;
  conditionOne: string;
  equationOne: string;
  conditionTwo: string;
  equationTwo: string;
  constants: string;
  solution: string;
  context: string;
  tags: string[];
};

function conditionsQuestion(number: number, spec: ConditionSpec): Question {
  return question(
    number,
    "Intermediate",
    7,
    ["second-order differential equations", "initial conditions", ...spec.tags],
    "expression",
    `${spec.context} Given that $${spec.equation}$, find the particular solution.`,
    [
      {
        description: "Start from the general solution",
        workingLatex: `y=${spec.general}`,
        explanation: "The differential equation has already been solved in general form, but the constants must be fixed using the conditions.",
      },
      {
        description: "Differentiate the general solution",
        workingLatex: `y'=${spec.derivative}`,
        explanation: "Conditions involving gradients or velocities require the first derivative.",
      },
      {
        description: "Apply the first condition",
        workingLatex: spec.conditionOne,
        explanation: "Substituting the given value of $x$ turns the condition into an equation for the constants.",
      },
      {
        description: "Record the first constants equation",
        workingLatex: spec.equationOne,
        explanation: "This equation captures the information from the first condition.",
      },
      {
        description: "Apply the second condition",
        workingLatex: spec.conditionTwo,
        explanation: "A second-order equation needs a second independent condition to determine both constants.",
      },
      {
        description: "Record the second constants equation",
        workingLatex: spec.equationTwo,
        explanation: "Together, the two equations determine the two unknown constants.",
      },
      {
        description: "Solve for the constants",
        workingLatex: spec.constants,
        explanation: "Solving the simultaneous equations fixes the one member of the solution family that satisfies the conditions.",
      },
      {
        description: "Substitute the constants",
        workingLatex: `y=${spec.solution}`,
        explanation: "Replacing the arbitrary constants gives the required particular solution.",
      },
      {
        description: "Check against the conditions",
        workingLatex: `${spec.conditionOne},\\quad ${spec.conditionTwo}`,
        explanation: "A quick substitution check confirms that the chosen constants satisfy the information given.",
      },
      {
        description: "State the particular solution",
        workingLatex: `\\boxed{y=${spec.solution}}`,
        explanation: "The boxed expression is the particular solution, not just the general family.",
      },
    ],
    `$y=${spec.solution}$`,
  );
}

type BoundarySpec = {
  equation: string;
  general: string;
  conditionOne: string;
  equationOne: string;
  conditionTwo: string;
  equationTwo: string;
  constants: string;
  solution: string;
  tags: string[];
};

function boundaryQuestion(number: number, spec: BoundarySpec): Question {
  return question(
    number,
    "Hard",
    8,
    ["second-order differential equations", "boundary conditions", ...spec.tags],
    "expression",
    `The general solution of $${spec.equation}$ is $y=${spec.general}$. Use the boundary conditions to find the particular solution.`,
    [
      {
        description: "Begin with the general solution",
        workingLatex: `y=${spec.general}`,
        explanation: "Boundary conditions select one solution from the two-constant family.",
      },
      {
        description: "Use the first boundary condition",
        workingLatex: spec.conditionOne,
        explanation: "Substituting a boundary value gives a linear equation in the constants.",
      },
      {
        description: "Form the first equation",
        workingLatex: spec.equationOne,
        explanation: "This equation records the restriction imposed at the first boundary.",
      },
      {
        description: "Use the second boundary condition",
        workingLatex: spec.conditionTwo,
        explanation: "The second boundary condition supplies the second equation needed for a second-order problem.",
      },
      {
        description: "Form the second equation",
        workingLatex: spec.equationTwo,
        explanation: "Now there is enough information to solve for both constants.",
      },
      {
        description: "Solve the simultaneous equations",
        workingLatex: spec.constants,
        explanation: "The boundary information fixes the constants, just as initial conditions would.",
      },
      {
        description: "Substitute back into the general solution",
        workingLatex: `y=${spec.solution}`,
        explanation: "The arbitrary constants are replaced by their determined values.",
      },
      {
        description: "Verify the first boundary",
        workingLatex: spec.conditionOne,
        explanation: "Checking the first endpoint helps catch sign errors in exponential or trigonometric terms.",
      },
      {
        description: "Verify the second boundary",
        workingLatex: spec.conditionTwo,
        explanation: "The solution must satisfy both endpoints to be the required boundary-value solution.",
      },
      {
        description: "State the particular solution",
        workingLatex: `\\boxed{y=${spec.solution}}`,
        explanation: "This solution satisfies the differential equation and both boundary conditions.",
      },
      {
        description: "Interpret uniqueness",
        workingLatex: "A\\text{ and }B\\text{ have been determined uniquely}",
        explanation: "A well-posed pair of independent boundary conditions usually fixes a unique member of the solution family.",
      },
      {
        description: "Final answer",
        workingLatex: `\\boxed{y=${spec.solution}}`,
        explanation: "The boxed result is the requested particular solution.",
      },
    ],
    `$y=${spec.solution}$`,
  );
}

type ReductionSpec = {
  equation: string;
  substitution: string;
  reducedEquation: string;
  firstIntegration: string;
  secondIntegration: string;
  solution: string;
  tags: string[];
};

function reductionQuestion(number: number, spec: ReductionSpec): Question {
  return question(
    number,
    "Easy",
    4,
    ["second-order differential equations", "reduction", ...spec.tags],
    "expression",
    `Find the general solution of $${spec.equation}$.`,
    [
      {
        description: "Notice the missing dependent variable",
        workingLatex: spec.equation,
        explanation: "When $y$ itself is absent, the equation can often be reduced by treating $y'$ as a new variable.",
      },
      {
        description: "Make the substitution",
        workingLatex: spec.substitution,
        explanation: "This lowers the order from second order to first order.",
      },
      {
        description: "Write the reduced equation",
        workingLatex: spec.reducedEquation,
        explanation: "The new equation is simpler because it involves $v$ and $v'$ instead of $y'$ and $y''$.",
      },
      {
        description: "Integrate once",
        workingLatex: spec.firstIntegration,
        explanation: "The first integration finds $y'$ up to one arbitrary constant.",
      },
      {
        description: "Return to $y$",
        workingLatex: "v=y'",
        explanation: "The original unknown is $y$, so one more integration is needed.",
      },
      {
        description: "Integrate again",
        workingLatex: spec.secondIntegration,
        explanation: "The second integration introduces the second arbitrary constant required for a second-order equation.",
      },
      {
        description: "State the general solution",
        workingLatex: `\\boxed{y=${spec.solution}}`,
        explanation: "The result contains two arbitrary constants, so it is the general solution.",
      },
    ],
    `$y=${spec.solution}$`,
  );
}

type ResonanceSpec = {
  equation: string;
  characteristic: string;
  complementary: string;
  forcing: string;
  failedTrial: string;
  trial: string;
  derivatives: string;
  substitution: string;
  coefficient: string;
  particular: string;
  solution: string;
  tags: string[];
};

function resonanceQuestion(number: number, spec: ResonanceSpec): Question {
  return question(
    number,
    "Hard",
    9,
    ["second-order differential equations", "resonance", ...spec.tags],
    "expression",
    `Find the general solution of $${spec.equation}$.`,
    [
      {
        description: "Solve the homogeneous part",
        workingLatex: spec.characteristic,
        explanation: "The characteristic equation gives the complementary function before the forcing term is considered.",
      },
      {
        description: "Write the complementary function",
        workingLatex: `y_c=${spec.complementary}`,
        explanation: "These terms solve the associated homogeneous equation.",
      },
      {
        description: "Inspect the forcing term",
        workingLatex: spec.forcing,
        explanation: "The forcing term suggests a trial expression, but we must check whether that expression already appears in the complementary function.",
      },
      {
        description: "Reject the duplicate trial",
        workingLatex: spec.failedTrial,
        explanation: "A trial that duplicates part of $y_c$ would be absorbed by the arbitrary constants and cannot produce a new particular integral.",
      },
      {
        description: "Choose the modified trial",
        workingLatex: spec.trial,
        explanation: "Multiplying by $x$ creates a linearly independent trial expression for the resonant case.",
      },
      {
        description: "Differentiate the trial",
        workingLatex: spec.derivatives,
        explanation: "The derivatives are needed because the equation contains second-order and possibly first-order terms.",
      },
      {
        description: "Substitute into the equation",
        workingLatex: spec.substitution,
        explanation: "Substitution reduces the problem to finding the unknown coefficient in the trial expression.",
      },
      {
        description: "Match the forcing coefficient",
        workingLatex: spec.coefficient,
        explanation: "The particular integral must reproduce the exact right-hand side.",
      },
      {
        description: "Write the particular integral",
        workingLatex: `y_p=${spec.particular}`,
        explanation: "This is a single solution caused by the forcing term.",
      },
      {
        description: "Combine the two parts",
        workingLatex: `y=${spec.complementary}+${spec.particular}`,
        explanation: "Linearity lets us add the complementary function and particular integral.",
      },
      {
        description: "State the answer",
        workingLatex: `\\boxed{y=${spec.solution}}`,
        explanation: "The final expression is the full general solution, including the resonant particular term.",
      },
      {
        description: "Check independence",
        workingLatex: `${spec.particular}\\notin y_c`,
        explanation: "The extra factor of $x$ ensures the particular integral is not already part of the complementary function.",
      },
      {
        description: "Final answer",
        workingLatex: `\\boxed{y=${spec.solution}}`,
        explanation: "This completes the solution of the non-homogeneous second-order equation.",
      },
    ],
    `$y=${spec.solution}$`,
  );
}

const homogeneousSpecs: HomogeneousSpec[] = [
  { equation: "y''-5y'+6y=0", characteristic: "m^2-5m+6=0", factorisation: "(m-2)(m-3)=0", roots: "m=2,\\ 3", solution: "Ae^{2x}+Be^{3x}", rootType: "distinct real", tags: ["distinct roots"] },
  { equation: "y''+5y'+6y=0", characteristic: "m^2+5m+6=0", factorisation: "(m+2)(m+3)=0", roots: "m=-2,\\ -3", solution: "Ae^{-2x}+Be^{-3x}", rootType: "distinct real", tags: ["distinct roots", "decay"] },
  { equation: "y''-y'-12y=0", characteristic: "m^2-m-12=0", factorisation: "(m-4)(m+3)=0", roots: "m=4,\\ -3", solution: "Ae^{4x}+Be^{-3x}", rootType: "distinct real", tags: ["distinct roots"] },
  { equation: "y''+2y'-8y=0", characteristic: "m^2+2m-8=0", factorisation: "(m+4)(m-2)=0", roots: "m=-4,\\ 2", solution: "Ae^{-4x}+Be^{2x}", rootType: "distinct real", tags: ["distinct roots"] },
  { equation: "y''-7y'+10y=0", characteristic: "m^2-7m+10=0", factorisation: "(m-5)(m-2)=0", roots: "m=5,\\ 2", solution: "Ae^{5x}+Be^{2x}", rootType: "distinct real", tags: ["distinct roots"] },
  { equation: "y''+y'-20y=0", characteristic: "m^2+m-20=0", factorisation: "(m+5)(m-4)=0", roots: "m=-5,\\ 4", solution: "Ae^{-5x}+Be^{4x}", rootType: "distinct real", tags: ["distinct roots"] },
  { equation: "2y''-3y'-2y=0", characteristic: "2m^2-3m-2=0", factorisation: "(2m+1)(m-2)=0", roots: "m=-\\dfrac12,\\ 2", solution: "Ae^{-x/2}+Be^{2x}", rootType: "distinct real", tags: ["non-monic characteristic"] },
  { equation: "3y''+5y'-2y=0", characteristic: "3m^2+5m-2=0", factorisation: "(3m-1)(m+2)=0", roots: "m=\\dfrac13,\\ -2", solution: "Ae^{x/3}+Be^{-2x}", rootType: "distinct real", tags: ["non-monic characteristic"] },
  { equation: "y''-9y=0", characteristic: "m^2-9=0", factorisation: "(m-3)(m+3)=0", roots: "m=3,\\ -3", solution: "Ae^{3x}+Be^{-3x}", rootType: "distinct real", tags: ["difference of squares"] },
  { equation: "4y''-y=0", characteristic: "4m^2-1=0", factorisation: "(2m-1)(2m+1)=0", roots: "m=\\dfrac12,\\ -\\dfrac12", solution: "Ae^{x/2}+Be^{-x/2}", rootType: "distinct real", tags: ["difference of squares"] },
  { equation: "y''-4y'+3y=0", characteristic: "m^2-4m+3=0", factorisation: "(m-1)(m-3)=0", roots: "m=1,\\ 3", solution: "Ae^x+Be^{3x}", rootType: "distinct real", tags: ["distinct roots"] },
  { equation: "y''+6y'+5y=0", characteristic: "m^2+6m+5=0", factorisation: "(m+1)(m+5)=0", roots: "m=-1,\\ -5", solution: "Ae^{-x}+Be^{-5x}", rootType: "distinct real", tags: ["distinct roots", "decay"] },
];

const repeatedSpecs: RepeatedSpec[] = [
  { equation: "y''-4y'+4y=0", characteristic: "m^2-4m+4=0", factorisation: "(m-2)^2=0", root: "2", solution: "(A+Bx)e^{2x}", tags: ["positive repeated root"] },
  { equation: "y''+6y'+9y=0", characteristic: "m^2+6m+9=0", factorisation: "(m+3)^2=0", root: "-3", solution: "(A+Bx)e^{-3x}", tags: ["negative repeated root"] },
  { equation: "y''-2y'+y=0", characteristic: "m^2-2m+1=0", factorisation: "(m-1)^2=0", root: "1", solution: "(A+Bx)e^x", tags: ["repeated root"] },
  { equation: "y''+8y'+16y=0", characteristic: "m^2+8m+16=0", factorisation: "(m+4)^2=0", root: "-4", solution: "(A+Bx)e^{-4x}", tags: ["repeated root", "decay"] },
  { equation: "4y''-12y'+9y=0", characteristic: "4m^2-12m+9=0", factorisation: "(2m-3)^2=0", root: "\\dfrac32", solution: "(A+Bx)e^{3x/2}", tags: ["non-monic characteristic"] },
  { equation: "9y''+12y'+4y=0", characteristic: "9m^2+12m+4=0", factorisation: "(3m+2)^2=0", root: "-\\dfrac23", solution: "(A+Bx)e^{-2x/3}", tags: ["non-monic characteristic"] },
  { equation: "y''=0", characteristic: "m^2=0", factorisation: "m^2=0", root: "0", solution: "A+Bx", tags: ["zero repeated root"] },
  { equation: "y''+10y'+25y=0", characteristic: "m^2+10m+25=0", factorisation: "(m+5)^2=0", root: "-5", solution: "(A+Bx)e^{-5x}", tags: ["repeated root", "decay"] },
];

const complexSpecs: ComplexSpec[] = [
  { equation: "y''+9y=0", characteristic: "m^2+9=0", completed: "m^2=-9", roots: "m=\\pm 3i", alpha: "0", beta: "3", solution: "A\\cos 3x+B\\sin 3x", tags: ["simple harmonic motion"] },
  { equation: "y''+4y=0", characteristic: "m^2+4=0", completed: "m^2=-4", roots: "m=\\pm 2i", alpha: "0", beta: "2", solution: "A\\cos 2x+B\\sin 2x", tags: ["oscillation"] },
  { equation: "y''+2y'+5y=0", characteristic: "m^2+2m+5=0", completed: "(m+1)^2=-4", roots: "m=-1\\pm 2i", alpha: "-1", beta: "2", solution: "e^{-x}(A\\cos 2x+B\\sin 2x)", tags: ["damped oscillation"] },
  { equation: "y''-4y'+13y=0", characteristic: "m^2-4m+13=0", completed: "(m-2)^2=-9", roots: "m=2\\pm 3i", alpha: "2", beta: "3", solution: "e^{2x}(A\\cos 3x+B\\sin 3x)", tags: ["complex roots"] },
  { equation: "y''+6y'+13y=0", characteristic: "m^2+6m+13=0", completed: "(m+3)^2=-4", roots: "m=-3\\pm 2i", alpha: "-3", beta: "2", solution: "e^{-3x}(A\\cos 2x+B\\sin 2x)", tags: ["damped oscillation"] },
  { equation: "y''-2y'+10y=0", characteristic: "m^2-2m+10=0", completed: "(m-1)^2=-9", roots: "m=1\\pm 3i", alpha: "1", beta: "3", solution: "e^x(A\\cos 3x+B\\sin 3x)", tags: ["complex roots"] },
  { equation: "4y''+4y'+5y=0", characteristic: "4m^2+4m+5=0", completed: "(2m+1)^2=-4", roots: "m=-\\dfrac12\\pm i", alpha: "-\\dfrac12", beta: "1", solution: "e^{-x/2}(A\\cos x+B\\sin x)", tags: ["non-monic characteristic"] },
  { equation: "y''+8y'+25y=0", characteristic: "m^2+8m+25=0", completed: "(m+4)^2=-9", roots: "m=-4\\pm 3i", alpha: "-4", beta: "3", solution: "e^{-4x}(A\\cos 3x+B\\sin 3x)", tags: ["damped oscillation"] },
  { equation: "y''-6y'+18y=0", characteristic: "m^2-6m+18=0", completed: "(m-3)^2=-9", roots: "m=3\\pm 3i", alpha: "3", beta: "3", solution: "e^{3x}(A\\cos 3x+B\\sin 3x)", tags: ["complex roots"] },
  { equation: "9y''+6y'+10y=0", characteristic: "9m^2+6m+10=0", completed: "(3m+1)^2=-9", roots: "m=-\\dfrac13\\pm i", alpha: "-\\dfrac13", beta: "1", solution: "e^{-x/3}(A\\cos x+B\\sin x)", tags: ["non-monic characteristic"] },
];

const forcingSpecs: ForcingSpec[] = [
  { equation: "y''-3y'+2y=6e^{3x}", characteristic: "m^2-3m+2=0", roots: "m=1,\\ 2", complementary: "Ae^x+Be^{2x}", forcing: "6e^{3x}", trial: "y_p=Ce^{3x}", derivatives: "y_p'=3Ce^{3x},\\quad y_p''=9Ce^{3x}", substitution: "(9C-9C+2C)e^{3x}=6e^{3x}", coefficients: "2C=6\\Rightarrow C=3", particular: "3e^{3x}", solution: "Ae^x+Be^{2x}+3e^{3x}", difficulty: "Intermediate", tags: ["exponential forcing"] },
  { equation: "y''+y'-2y=8e^{2x}", characteristic: "m^2+m-2=0", roots: "m=1,\\ -2", complementary: "Ae^x+Be^{-2x}", forcing: "8e^{2x}", trial: "y_p=Ce^{2x}", derivatives: "y_p'=2Ce^{2x},\\quad y_p''=4Ce^{2x}", substitution: "(4C+2C-2C)e^{2x}=8e^{2x}", coefficients: "4C=8\\Rightarrow C=2", particular: "2e^{2x}", solution: "Ae^x+Be^{-2x}+2e^{2x}", difficulty: "Intermediate", tags: ["exponential forcing"] },
  { equation: "y''-4y=12x", characteristic: "m^2-4=0", roots: "m=2,\\ -2", complementary: "Ae^{2x}+Be^{-2x}", forcing: "12x", trial: "y_p=ax+b", derivatives: "y_p'=a,\\quad y_p''=0", substitution: "-4(ax+b)=12x", coefficients: "-4a=12,\\ -4b=0\\Rightarrow a=-3,\\ b=0", particular: "-3x", solution: "Ae^{2x}+Be^{-2x}-3x", difficulty: "Intermediate", tags: ["polynomial forcing"] },
  { equation: "y''+3y'+2y=4x+10", characteristic: "m^2+3m+2=0", roots: "m=-1,\\ -2", complementary: "Ae^{-x}+Be^{-2x}", forcing: "4x+10", trial: "y_p=ax+b", derivatives: "y_p'=a,\\quad y_p''=0", substitution: "3a+2(ax+b)=4x+10", coefficients: "2a=4,\\ 3a+2b=10\\Rightarrow a=2,\\ b=2", particular: "2x+2", solution: "Ae^{-x}+Be^{-2x}+2x+2", difficulty: "Intermediate", tags: ["polynomial forcing"] },
  { equation: "y''+y=5\\sin 2x", characteristic: "m^2+1=0", roots: "m=\\pm i", complementary: "A\\cos x+B\\sin x", forcing: "5\\sin 2x", trial: "y_p=C\\cos 2x+D\\sin 2x", derivatives: "y_p''=-4C\\cos2x-4D\\sin2x", substitution: "(-3C)\\cos2x+(-3D)\\sin2x=5\\sin2x", coefficients: "-3C=0,\\ -3D=5\\Rightarrow C=0,\\ D=-\\dfrac53", particular: "-\\dfrac53\\sin2x", solution: "A\\cos x+B\\sin x-\\dfrac53\\sin2x", difficulty: "Intermediate", tags: ["trigonometric forcing"] },
  { equation: "y''+4y=12\\cos x", characteristic: "m^2+4=0", roots: "m=\\pm2i", complementary: "A\\cos2x+B\\sin2x", forcing: "12\\cos x", trial: "y_p=C\\cos x+D\\sin x", derivatives: "y_p''=-C\\cos x-D\\sin x", substitution: "3C\\cos x+3D\\sin x=12\\cos x", coefficients: "3C=12,\\ 3D=0\\Rightarrow C=4,\\ D=0", particular: "4\\cos x", solution: "A\\cos2x+B\\sin2x+4\\cos x", difficulty: "Intermediate", tags: ["trigonometric forcing"] },
  { equation: "y''-2y'+y=x^2", characteristic: "m^2-2m+1=0", roots: "m=1\\text{ repeated}", complementary: "(A+Bx)e^x", forcing: "x^2", trial: "y_p=ax^2+bx+c", derivatives: "y_p'=2ax+b,\\quad y_p''=2a", substitution: "2a-2(2ax+b)+(ax^2+bx+c)=x^2", coefficients: "a=1,\\ b-4a=0,\\ 2a-2b+c=0\\Rightarrow a=1,\\ b=4,\\ c=6", particular: "x^2+4x+6", solution: "(A+Bx)e^x+x^2+4x+6", difficulty: "Hard", tags: ["quadratic forcing", "repeated roots"] },
  { equation: "y''+2y'+2y=e^x", characteristic: "m^2+2m+2=0", roots: "m=-1\\pm i", complementary: "e^{-x}(A\\cos x+B\\sin x)", forcing: "e^x", trial: "y_p=Ce^x", derivatives: "y_p'=Ce^x,\\quad y_p''=Ce^x", substitution: "(C+2C+2C)e^x=e^x", coefficients: "5C=1\\Rightarrow C=\\dfrac15", particular: "\\dfrac15e^x", solution: "e^{-x}(A\\cos x+B\\sin x)+\\dfrac15e^x", difficulty: "Intermediate", tags: ["exponential forcing", "complex roots"] },
  { equation: "y''+5y'+6y=18x^2", characteristic: "m^2+5m+6=0", roots: "m=-2,\\ -3", complementary: "Ae^{-2x}+Be^{-3x}", forcing: "18x^2", trial: "y_p=ax^2+bx+c", derivatives: "y_p'=2ax+b,\\quad y_p''=2a", substitution: "2a+5(2ax+b)+6(ax^2+bx+c)=18x^2", coefficients: "6a=18,\\ 10a+6b=0,\\ 2a+5b+6c=0\\Rightarrow a=3,\\ b=-5,\\ c=\\dfrac{19}{6}", particular: "3x^2-5x+\\dfrac{19}{6}", solution: "Ae^{-2x}+Be^{-3x}+3x^2-5x+\\dfrac{19}{6}", difficulty: "Hard", tags: ["quadratic forcing"] },
  { equation: "y''-y=2\\sinh x", characteristic: "m^2-1=0", roots: "m=1,\\ -1", complementary: "Ae^x+Be^{-x}", forcing: "2\\sinh x", trial: "y_p=Cx\\cosh x", derivatives: "y_p'=C\\cosh x+Cx\\sinh x,\\quad y_p''=2C\\sinh x+Cx\\cosh x", substitution: "y_p''-y_p=2C\\sinh x", coefficients: "2C=2\\Rightarrow C=1", particular: "x\\cosh x", solution: "Ae^x+Be^{-x}+x\\cosh x", difficulty: "Hard", tags: ["hyperbolic forcing", "resonance"] },
  { equation: "y''+4y=8\\sin 3x", characteristic: "m^2+4=0", roots: "m=\\pm2i", complementary: "A\\cos2x+B\\sin2x", forcing: "8\\sin3x", trial: "y_p=C\\cos3x+D\\sin3x", derivatives: "y_p''=-9C\\cos3x-9D\\sin3x", substitution: "(-5C)\\cos3x+(-5D)\\sin3x=8\\sin3x", coefficients: "-5C=0,\\ -5D=8\\Rightarrow D=-\\dfrac85", particular: "-\\dfrac85\\sin3x", solution: "A\\cos2x+B\\sin2x-\\dfrac85\\sin3x", difficulty: "Intermediate", tags: ["trigonometric forcing"] },
  { equation: "y''-6y'+9y=27", characteristic: "m^2-6m+9=0", roots: "m=3\\text{ repeated}", complementary: "(A+Bx)e^{3x}", forcing: "27", trial: "y_p=C", derivatives: "y_p'=0,\\quad y_p''=0", substitution: "9C=27", coefficients: "C=3", particular: "3", solution: "(A+Bx)e^{3x}+3", difficulty: "Intermediate", tags: ["constant forcing", "repeated roots"] },
];

const conditionSpecs: ConditionSpec[] = [
  { equation: "y''-3y'+2y=0,\\ y(0)=5,\\ y'(0)=8", general: "Ae^x+Be^{2x}", derivative: "Ae^x+2Be^{2x}", conditionOne: "y(0)=A+B=5", equationOne: "A+B=5", conditionTwo: "y'(0)=A+2B=8", equationTwo: "A+2B=8", constants: "B=3,\\ A=2", solution: "2e^x+3e^{2x}", context: "The complementary solution is $y=Ae^x+Be^{2x}$.", tags: ["initial conditions"] },
  { equation: "y''+5y'+6y=0,\\ y(0)=4,\\ y'(0)=-9", general: "Ae^{-2x}+Be^{-3x}", derivative: "-2Ae^{-2x}-3Be^{-3x}", conditionOne: "y(0)=A+B=4", equationOne: "A+B=4", conditionTwo: "y'(0)=-2A-3B=-9", equationTwo: "2A+3B=9", constants: "B=1,\\ A=3", solution: "3e^{-2x}+e^{-3x}", context: "The general solution is $y=Ae^{-2x}+Be^{-3x}$.", tags: ["initial conditions", "decay"] },
  { equation: "y''+4y=0,\\ y(0)=2,\\ y'(0)=6", general: "A\\cos2x+B\\sin2x", derivative: "-2A\\sin2x+2B\\cos2x", conditionOne: "y(0)=A=2", equationOne: "A=2", conditionTwo: "y'(0)=2B=6", equationTwo: "2B=6", constants: "A=2,\\ B=3", solution: "2\\cos2x+3\\sin2x", context: "The general solution is $y=A\\cos2x+B\\sin2x$.", tags: ["initial conditions", "oscillation"] },
  { equation: "y''+2y'+5y=0,\\ y(0)=1,\\ y'(0)=0", general: "e^{-x}(A\\cos2x+B\\sin2x)", derivative: "e^{-x}((-A+2B)\\cos2x+(-B-2A)\\sin2x)", conditionOne: "y(0)=A=1", equationOne: "A=1", conditionTwo: "y'(0)=-A+2B=0", equationTwo: "-1+2B=0", constants: "A=1,\\ B=\\dfrac12", solution: "e^{-x}\\left(\\cos2x+\\dfrac12\\sin2x\\right)", context: "The general solution is $y=e^{-x}(A\\cos2x+B\\sin2x)$.", tags: ["initial conditions", "damped oscillation"] },
  { equation: "y''-4y=12x,\\ y(0)=1,\\ y'(0)=0", general: "Ae^{2x}+Be^{-2x}-3x", derivative: "2Ae^{2x}-2Be^{-2x}-3", conditionOne: "y(0)=A+B=1", equationOne: "A+B=1", conditionTwo: "y'(0)=2A-2B-3=0", equationTwo: "2A-2B=3", constants: "A=\\dfrac54,\\ B=-\\dfrac14", solution: "\\dfrac54e^{2x}-\\dfrac14e^{-2x}-3x", context: "The general solution has already been found as $y=Ae^{2x}+Be^{-2x}-3x$.", tags: ["initial conditions", "particular integral"] },
  { equation: "y''+y=5\\sin2x,\\ y(0)=0,\\ y'(0)=1", general: "A\\cos x+B\\sin x-\\dfrac53\\sin2x", derivative: "-A\\sin x+B\\cos x-\\dfrac{10}{3}\\cos2x", conditionOne: "y(0)=A=0", equationOne: "A=0", conditionTwo: "y'(0)=B-\\dfrac{10}{3}=1", equationTwo: "B=\\dfrac{13}{3}", constants: "A=0,\\ B=\\dfrac{13}{3}", solution: "\\dfrac{13}{3}\\sin x-\\dfrac53\\sin2x", context: "The general solution is $y=A\\cos x+B\\sin x-\\frac53\\sin2x$.", tags: ["initial conditions", "trigonometric forcing"] },
  { equation: "y''-2y'+y=0,\\ y(0)=2,\\ y'(0)=5", general: "(A+Bx)e^x", derivative: "(A+B+Bx)e^x", conditionOne: "y(0)=A=2", equationOne: "A=2", conditionTwo: "y'(0)=A+B=5", equationTwo: "2+B=5", constants: "A=2,\\ B=3", solution: "(2+3x)e^x", context: "The repeated-root solution is $y=(A+Bx)e^x$.", tags: ["initial conditions", "repeated roots"] },
  { equation: "y''+6y'+9y=0,\\ y(0)=1,\\ y'(0)=-1", general: "(A+Bx)e^{-3x}", derivative: "(B-3A-3Bx)e^{-3x}", conditionOne: "y(0)=A=1", equationOne: "A=1", conditionTwo: "y'(0)=B-3A=-1", equationTwo: "B-3=-1", constants: "A=1,\\ B=2", solution: "(1+2x)e^{-3x}", context: "The general solution is $y=(A+Bx)e^{-3x}$.", tags: ["initial conditions", "repeated roots"] },
  { equation: "y''-y=0,\\ y(0)=3,\\ y'(0)=-1", general: "Ae^x+Be^{-x}", derivative: "Ae^x-Be^{-x}", conditionOne: "y(0)=A+B=3", equationOne: "A+B=3", conditionTwo: "y'(0)=A-B=-1", equationTwo: "A-B=-1", constants: "A=1,\\ B=2", solution: "e^x+2e^{-x}", context: "The general solution is $y=Ae^x+Be^{-x}$.", tags: ["initial conditions"] },
  { equation: "y''+9y=0,\\ y(0)=4,\\ y'(0)=-3", general: "A\\cos3x+B\\sin3x", derivative: "-3A\\sin3x+3B\\cos3x", conditionOne: "y(0)=A=4", equationOne: "A=4", conditionTwo: "y'(0)=3B=-3", equationTwo: "B=-1", constants: "A=4,\\ B=-1", solution: "4\\cos3x-\\sin3x", context: "The general solution is $y=A\\cos3x+B\\sin3x$.", tags: ["initial conditions", "oscillation"] },
  { equation: "y''+3y'+2y=4x+10,\\ y(0)=0,\\ y'(0)=1", general: "Ae^{-x}+Be^{-2x}+2x+2", derivative: "-Ae^{-x}-2Be^{-2x}+2", conditionOne: "y(0)=A+B+2=0", equationOne: "A+B=-2", conditionTwo: "y'(0)=-A-2B+2=1", equationTwo: "A+2B=1", constants: "B=3,\\ A=-5", solution: "-5e^{-x}+3e^{-2x}+2x+2", context: "The general solution is $y=Ae^{-x}+Be^{-2x}+2x+2$.", tags: ["initial conditions", "particular integral"] },
  { equation: "y''+2y'+2y=e^x,\\ y(0)=1,\\ y'(0)=0", general: "e^{-x}(A\\cos x+B\\sin x)+\\dfrac15e^x", derivative: "e^{-x}((-A+B)\\cos x+(-A-B)\\sin x)+\\dfrac15e^x", conditionOne: "y(0)=A+\\dfrac15=1", equationOne: "A=\\dfrac45", conditionTwo: "y'(0)=-A+B+\\dfrac15=0", equationTwo: "-\\dfrac45+B+\\dfrac15=0", constants: "A=\\dfrac45,\\ B=\\dfrac35", solution: "e^{-x}\\left(\\dfrac45\\cos x+\\dfrac35\\sin x\\right)+\\dfrac15e^x", context: "The general solution is $y=e^{-x}(A\\cos x+B\\sin x)+\\frac15e^x$.", tags: ["initial conditions", "complex roots", "particular integral"] },
];

const boundarySpecs: BoundarySpec[] = [
  { equation: "y''-y=0", general: "Ae^x+Be^{-x}", conditionOne: "y(0)=A+B=2", equationOne: "A+B=2", conditionTwo: "y(\\ln2)=2A+\\dfrac12B=5", equationTwo: "4A+B=10", constants: "A=\\dfrac83,\\ B=-\\dfrac23", solution: "\\dfrac83e^x-\\dfrac23e^{-x}", tags: ["exponential boundary conditions"] },
  { equation: "y''+4y=0", general: "A\\cos2x+B\\sin2x", conditionOne: "y(0)=A=1", equationOne: "A=1", conditionTwo: "y\\left(\\dfrac{\\pi}{4}\\right)=B=3", equationTwo: "B=3", constants: "A=1,\\ B=3", solution: "\\cos2x+3\\sin2x", tags: ["trigonometric boundary conditions"] },
  { equation: "y''-3y'+2y=0", general: "Ae^x+Be^{2x}", conditionOne: "y(0)=A+B=4", equationOne: "A+B=4", conditionTwo: "y(\\ln2)=2A+4B=10", equationTwo: "A+2B=5", constants: "B=1,\\ A=3", solution: "3e^x+e^{2x}", tags: ["exponential boundary conditions"] },
  { equation: "y''+9y=0", general: "A\\cos3x+B\\sin3x", conditionOne: "y(0)=A=2", equationOne: "A=2", conditionTwo: "y\\left(\\dfrac{\\pi}{6}\\right)=B=-1", equationTwo: "B=-1", constants: "A=2,\\ B=-1", solution: "2\\cos3x-\\sin3x", tags: ["trigonometric boundary conditions"] },
  { equation: "y''-4y=12x", general: "Ae^{2x}+Be^{-2x}-3x", conditionOne: "y(0)=A+B=0", equationOne: "A+B=0", conditionTwo: "y(\\ln2)=4A+\\dfrac14B-3\\ln2=1-3\\ln2", equationTwo: "4A+\\dfrac14B=1", constants: "A=\\dfrac4{15},\\ B=-\\dfrac4{15}", solution: "\\dfrac4{15}e^{2x}-\\dfrac4{15}e^{-2x}-3x", tags: ["boundary conditions", "particular integral"] },
  { equation: "y''-2y'+y=0", general: "(A+Bx)e^x", conditionOne: "y(0)=A=1", equationOne: "A=1", conditionTwo: "y(1)=(A+B)e=3e", equationTwo: "1+B=3", constants: "A=1,\\ B=2", solution: "(1+2x)e^x", tags: ["repeated roots", "boundary conditions"] },
  { equation: "y''+5y'+6y=0", general: "Ae^{-2x}+Be^{-3x}", conditionOne: "y(0)=A+B=3", equationOne: "A+B=3", conditionTwo: "y(\\ln2)=\\dfrac14A+\\dfrac18B=\\dfrac58", equationTwo: "2A+B=5", constants: "A=2,\\ B=1", solution: "2e^{-2x}+e^{-3x}", tags: ["decay", "boundary conditions"] },
  { equation: "y''+2y'+5y=0", general: "e^{-x}(A\\cos2x+B\\sin2x)", conditionOne: "y(0)=A=2", equationOne: "A=2", conditionTwo: "y\\left(\\dfrac{\\pi}{4}\\right)=e^{-\\pi/4}B=4e^{-\\pi/4}", equationTwo: "B=4", constants: "A=2,\\ B=4", solution: "e^{-x}(2\\cos2x+4\\sin2x)", tags: ["damped oscillation", "boundary conditions"] },
];

const reductionSpecs: ReductionSpec[] = [
  { equation: "y''=6x", substitution: "v=y'\\Rightarrow v'=6x", reducedEquation: "\\dfrac{dv}{dx}=6x", firstIntegration: "v=3x^2+A", secondIntegration: "y=x^3+Ax+B", solution: "x^3+Ax+B", tags: ["direct integration"] },
  { equation: "y''=12x^2-4", substitution: "v=y'\\Rightarrow v'=12x^2-4", reducedEquation: "\\dfrac{dv}{dx}=12x^2-4", firstIntegration: "v=4x^3-4x+A", secondIntegration: "y=x^4-2x^2+Ax+B", solution: "x^4-2x^2+Ax+B", tags: ["direct integration"] },
  { equation: "y''+3y'=0", substitution: "v=y'\\Rightarrow v'+3v=0", reducedEquation: "\\dfrac{dv}{dx}+3v=0", firstIntegration: "v=Ae^{-3x}", secondIntegration: "y=-\\dfrac{A}{3}e^{-3x}+B", solution: "Ce^{-3x}+D", tags: ["missing y"] },
  { equation: "y''-2y'=0", substitution: "v=y'\\Rightarrow v'-2v=0", reducedEquation: "\\dfrac{dv}{dx}-2v=0", firstIntegration: "v=Ae^{2x}", secondIntegration: "y=\\dfrac{A}{2}e^{2x}+B", solution: "Ce^{2x}+D", tags: ["missing y"] },
  { equation: "y''+y'=e^x", substitution: "v=y'\\Rightarrow v'+v=e^x", reducedEquation: "\\dfrac{dv}{dx}+v=e^x", firstIntegration: "v=\\dfrac12e^x+Ae^{-x}", secondIntegration: "y=\\dfrac12e^x-Ae^{-x}+B", solution: "\\dfrac12e^x+Ce^{-x}+D", tags: ["first-order reduction"] },
  { equation: "y''-y'=4", substitution: "v=y'\\Rightarrow v'-v=4", reducedEquation: "\\dfrac{dv}{dx}-v=4", firstIntegration: "v=Ae^x-4", secondIntegration: "y=Ae^x-4x+B", solution: "Ce^x-4x+D", tags: ["first-order reduction"] },
  { equation: "xy''=2\\quad(x>0)", substitution: "v=y'\\Rightarrow xv'=2", reducedEquation: "\\dfrac{dv}{dx}=\\dfrac2x", firstIntegration: "v=2\\ln x+A", secondIntegration: "y=2x\\ln x-2x+Ax+B", solution: "2x\\ln x-2x+Ax+B", tags: ["variable coefficient", "direct integration"] },
  { equation: "y''=e^{2x}", substitution: "v=y'\\Rightarrow v'=e^{2x}", reducedEquation: "\\dfrac{dv}{dx}=e^{2x}", firstIntegration: "v=\\dfrac12e^{2x}+A", secondIntegration: "y=\\dfrac14e^{2x}+Ax+B", solution: "\\dfrac14e^{2x}+Ax+B", tags: ["direct integration"] },
];

const resonanceSpecs: ResonanceSpec[] = [
  { equation: "y''-3y'+2y=e^x", characteristic: "m^2-3m+2=0\\Rightarrow m=1,2", complementary: "Ae^x+Be^{2x}", forcing: "e^x", failedTrial: "Ce^x\\text{ duplicates part of }y_c", trial: "y_p=Cxe^x", derivatives: "y_p'=C(1+x)e^x,\\quad y_p''=C(2+x)e^x", substitution: "C(2+x)e^x-3C(1+x)e^x+2Cxe^x=-Ce^x", coefficient: "-C=1\\Rightarrow C=-1", particular: "-xe^x", solution: "Ae^x+Be^{2x}-xe^x", tags: ["exponential resonance"] },
  { equation: "y''+4y=\\cos2x", characteristic: "m^2+4=0\\Rightarrow m=\\pm2i", complementary: "A\\cos2x+B\\sin2x", forcing: "\\cos2x", failedTrial: "C\\cos2x+D\\sin2x\\text{ duplicates }y_c", trial: "y_p=Cx\\sin2x", derivatives: "y_p'=C\\sin2x+2Cx\\cos2x,\\quad y_p''=4C\\cos2x-4Cx\\sin2x", substitution: "y_p''+4y_p=4C\\cos2x", coefficient: "4C=1\\Rightarrow C=\\dfrac14", particular: "\\dfrac14x\\sin2x", solution: "A\\cos2x+B\\sin2x+\\dfrac14x\\sin2x", tags: ["trigonometric resonance"] },
  { equation: "y''+9y=6\\sin3x", characteristic: "m^2+9=0\\Rightarrow m=\\pm3i", complementary: "A\\cos3x+B\\sin3x", forcing: "6\\sin3x", failedTrial: "C\\cos3x+D\\sin3x\\text{ duplicates }y_c", trial: "y_p=Cx\\cos3x", derivatives: "y_p'=C\\cos3x-3Cx\\sin3x,\\quad y_p''=-6C\\sin3x-9Cx\\cos3x", substitution: "y_p''+9y_p=-6C\\sin3x", coefficient: "-6C=6\\Rightarrow C=-1", particular: "-x\\cos3x", solution: "A\\cos3x+B\\sin3x-x\\cos3x", tags: ["trigonometric resonance"] },
  { equation: "y''-4y'+4y=e^{2x}", characteristic: "m^2-4m+4=0\\Rightarrow m=2\\text{ repeated}", complementary: "(A+Bx)e^{2x}", forcing: "e^{2x}", failedTrial: "Ce^{2x}\\text{ and }Cxe^{2x}\\text{ are already in }y_c", trial: "y_p=Cx^2e^{2x}", derivatives: "y_p'=C(2x+2x^2)e^{2x},\\quad y_p''=C(2+8x+4x^2)e^{2x}", substitution: "y_p''-4y_p'+4y_p=2Ce^{2x}", coefficient: "2C=1\\Rightarrow C=\\dfrac12", particular: "\\dfrac12x^2e^{2x}", solution: "(A+Bx)e^{2x}+\\dfrac12x^2e^{2x}", tags: ["repeated-root resonance"] },
  { equation: "y''+2y'+y=e^{-x}", characteristic: "m^2+2m+1=0\\Rightarrow m=-1\\text{ repeated}", complementary: "(A+Bx)e^{-x}", forcing: "e^{-x}", failedTrial: "Ce^{-x}\\text{ and }Cxe^{-x}\\text{ duplicate }y_c", trial: "y_p=Cx^2e^{-x}", derivatives: "y_p'=C(2x-x^2)e^{-x},\\quad y_p''=C(2-4x+x^2)e^{-x}", substitution: "y_p''+2y_p'+y_p=2Ce^{-x}", coefficient: "2C=1\\Rightarrow C=\\dfrac12", particular: "\\dfrac12x^2e^{-x}", solution: "(A+Bx)e^{-x}+\\dfrac12x^2e^{-x}", tags: ["repeated-root resonance"] },
  { equation: "y''-y=\\cosh x", characteristic: "m^2-1=0\\Rightarrow m=\\pm1", complementary: "Ae^x+Be^{-x}", forcing: "\\cosh x", failedTrial: "C\\cosh x+D\\sinh x\\text{ duplicates the homogeneous solutions}", trial: "y_p=Cx\\sinh x", derivatives: "y_p'=C\\sinh x+Cx\\cosh x,\\quad y_p''=2C\\cosh x+Cx\\sinh x", substitution: "y_p''-y_p=2C\\cosh x", coefficient: "2C=1\\Rightarrow C=\\dfrac12", particular: "\\dfrac12x\\sinh x", solution: "Ae^x+Be^{-x}+\\dfrac12x\\sinh x", tags: ["hyperbolic resonance"] },
  { equation: "y''+y=2\\cos x", characteristic: "m^2+1=0\\Rightarrow m=\\pm i", complementary: "A\\cos x+B\\sin x", forcing: "2\\cos x", failedTrial: "C\\cos x+D\\sin x\\text{ duplicates }y_c", trial: "y_p=Cx\\sin x", derivatives: "y_p'=C\\sin x+Cx\\cos x,\\quad y_p''=2C\\cos x-Cx\\sin x", substitution: "y_p''+y_p=2C\\cos x", coefficient: "2C=2\\Rightarrow C=1", particular: "x\\sin x", solution: "A\\cos x+B\\sin x+x\\sin x", tags: ["trigonometric resonance"] },
  { equation: "y''-2y'+y=e^x", characteristic: "m^2-2m+1=0\\Rightarrow m=1\\text{ repeated}", complementary: "(A+Bx)e^x", forcing: "e^x", failedTrial: "Ce^x\\text{ and }Cxe^x\\text{ duplicate }y_c", trial: "y_p=Cx^2e^x", derivatives: "y_p'=C(2x+x^2)e^x,\\quad y_p''=C(2+4x+x^2)e^x", substitution: "y_p''-2y_p'+y_p=2Ce^x", coefficient: "2C=1\\Rightarrow C=\\dfrac12", particular: "\\dfrac12x^2e^x", solution: "(A+Bx)e^x+\\dfrac12x^2e^x", tags: ["repeated-root resonance"] },
  { equation: "y''+6y'+9y=e^{-3x}", characteristic: "m^2+6m+9=0\\Rightarrow m=-3\\text{ repeated}", complementary: "(A+Bx)e^{-3x}", forcing: "e^{-3x}", failedTrial: "Ce^{-3x}\\text{ and }Cxe^{-3x}\\text{ duplicate }y_c", trial: "y_p=Cx^2e^{-3x}", derivatives: "y_p'=C(2x-3x^2)e^{-3x},\\quad y_p''=C(2-12x+9x^2)e^{-3x}", substitution: "y_p''+6y_p'+9y_p=2Ce^{-3x}", coefficient: "2C=1\\Rightarrow C=\\dfrac12", particular: "\\dfrac12x^2e^{-3x}", solution: "(A+Bx)e^{-3x}+\\dfrac12x^2e^{-3x}", tags: ["repeated-root resonance"] },
  { equation: "y''+16y=8\\sin4x", characteristic: "m^2+16=0\\Rightarrow m=\\pm4i", complementary: "A\\cos4x+B\\sin4x", forcing: "8\\sin4x", failedTrial: "C\\cos4x+D\\sin4x\\text{ duplicates }y_c", trial: "y_p=Cx\\cos4x", derivatives: "y_p'=C\\cos4x-4Cx\\sin4x,\\quad y_p''=-8C\\sin4x-16Cx\\cos4x", substitution: "y_p''+16y_p=-8C\\sin4x", coefficient: "-8C=8\\Rightarrow C=-1", particular: "-x\\cos4x", solution: "A\\cos4x+B\\sin4x-x\\cos4x", tags: ["trigonometric resonance"] },
  { equation: "y''-6y'+9y=e^{3x}", characteristic: "m^2-6m+9=0\\Rightarrow m=3\\text{ repeated}", complementary: "(A+Bx)e^{3x}", forcing: "e^{3x}", failedTrial: "Ce^{3x}\\text{ and }Cxe^{3x}\\text{ duplicate }y_c", trial: "y_p=Cx^2e^{3x}", derivatives: "y_p'=C(2x+3x^2)e^{3x},\\quad y_p''=C(2+12x+9x^2)e^{3x}", substitution: "y_p''-6y_p'+9y_p=2Ce^{3x}", coefficient: "2C=1\\Rightarrow C=\\dfrac12", particular: "\\dfrac12x^2e^{3x}", solution: "(A+Bx)e^{3x}+\\dfrac12x^2e^{3x}", tags: ["repeated-root resonance"] },
  { equation: "y''+25y=10\\cos5x", characteristic: "m^2+25=0\\Rightarrow m=\\pm5i", complementary: "A\\cos5x+B\\sin5x", forcing: "10\\cos5x", failedTrial: "C\\cos5x+D\\sin5x\\text{ duplicates }y_c", trial: "y_p=Cx\\sin5x", derivatives: "y_p'=C\\sin5x+5Cx\\cos5x,\\quad y_p''=10C\\cos5x-25Cx\\sin5x", substitution: "y_p''+25y_p=10C\\cos5x", coefficient: "10C=10\\Rightarrow C=1", particular: "x\\sin5x", solution: "A\\cos5x+B\\sin5x+x\\sin5x", tags: ["trigonometric resonance"] },
];

export const questions: Question[] = [
  ...homogeneousSpecs.map((spec, index) => homogeneousQuestion(index + 1, spec)),
  ...repeatedSpecs.map((spec, index) => repeatedRootQuestion(index + 13, spec)),
  ...complexSpecs.map((spec, index) => complexRootQuestion(index + 21, spec)),
  ...forcingSpecs.map((spec, index) => forcingQuestion(index + 31, spec)),
  ...conditionSpecs.map((spec, index) => conditionsQuestion(index + 43, spec)),
  ...boundarySpecs.slice(0, 6).map((spec, index) => boundaryQuestion(index + 55, spec)),
  ...reductionSpecs.slice(0, 4).map((spec, index) => reductionQuestion(index + 61, spec)),
  ...resonanceSpecs.slice(0, 6).map((spec, index) => resonanceQuestion(index + 65, spec)),
];
