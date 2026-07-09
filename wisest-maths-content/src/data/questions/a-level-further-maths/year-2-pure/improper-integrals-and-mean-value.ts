import type { Difficulty, Question, SolutionStep } from "@/lib/types";

const LEVEL = "A-Level Further Maths";
const TOPIC = "Further Maths Year 2: Pure (Core Pure 2)";
const SUBTOPIC = "Improper integrals and mean value";
const SUBTOPIC_ID = "fm.y2.pure.further-calculus";

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
  questionText: string,
  solutionSteps: StepInput[],
  finalAnswer: string,
): Question {
  const id = `${SUBTOPIC_ID}.q${String(number).padStart(3, "0")}`;

  return {
    level: LEVEL,
    topic: TOPIC,
    subtopic: SUBTOPIC,
    subtopicId: SUBTOPIC_ID,
    questionDiagram: null,
    id,
    difficulty,
    marks,
    answerType: "written",
    tags,
    questionText,
    workedSolution: {
      steps: steps(solutionSteps),
      finalAnswer,
    },
  };
}

type ExponentialSpec = {
  c: string;
  k: string;
  lower: string;
  answer: string;
  limitValue: string;
};

function exponentialQuestion(number: number, spec: ExponentialSpec): Question {
  const integral = `\\int_{${spec.lower}}^{\\infty} ${spec.c}e^{-${spec.k}x}\\,dx`;

  return question(
    number,
    "Easy",
    4,
    ["improper integrals", "exponential integrals", "infinite limits"],
    `Evaluate $\\displaystyle ${integral}$.`,
    [
      {
        description: "Recognise the improper limit",
        workingLatex: integral,
        explanation: "The upper limit is infinite, so the integral must be interpreted as a limit of ordinary definite integrals.",
      },
      {
        description: "Replace infinity with a finite upper limit",
        workingLatex: `${integral} = \\lim_{T\\to\\infty}\\int_{${spec.lower}}^{T} ${spec.c}e^{-${spec.k}x}\\,dx`,
        explanation: "Using $T$ lets us apply normal integration rules before taking the limiting value.",
      },
      {
        description: "Integrate the exponential",
        workingLatex: `\\int ${spec.c}e^{-${spec.k}x}\\,dx = -\\frac{${spec.c}}{${spec.k}}e^{-${spec.k}x}`,
        explanation: "Differentiating $e^{-kx}$ brings down a factor of $-k$, so integration divides by $-k$.",
      },
      {
        description: "Apply the finite bounds",
        workingLatex: `\\lim_{T\\to\\infty}\\left[-\\frac{${spec.c}}{${spec.k}}e^{-${spec.k}x}\\right]_{${spec.lower}}^{T}`,
        explanation: "The limit is taken only after the definite integral over a finite interval has been evaluated.",
      },
      {
        description: "Use the decay of the exponential",
        workingLatex: `\\lim_{T\\to\\infty}e^{-${spec.k}T}=0`,
        explanation: "A negative exponential tends to zero as $x$ becomes very large, which is why this improper integral converges.",
      },
      {
        description: "Substitute the lower-limit contribution",
        workingLatex: `0-\\left(-\\frac{${spec.c}}{${spec.k}}e^{-${spec.k}(${spec.lower})}\\right)=${spec.limitValue}`,
        explanation: "The value comes entirely from the lower endpoint once the upper-limit term has disappeared.",
      },
      {
        description: "State the value",
        workingLatex: `${integral}=${spec.answer}`,
        explanation: "This is the finite area under the decaying exponential tail.",
      },
    ],
    `$\\displaystyle ${integral}=${spec.answer}$.`,
  );
}

type ReciprocalSpec = {
  coefficient: string;
  shift: string;
  power: string;
  lower: string;
  antiderivative: string;
  lowerTerm: string;
  answer: string;
};

function reciprocalQuestion(number: number, spec: ReciprocalSpec): Question {
  const denominator = spec.shift === "0" ? `x^{${spec.power}}` : `(x+${spec.shift})^{${spec.power}}`;
  const integral = `\\int_{${spec.lower}}^{\\infty}\\frac{${spec.coefficient}}{${denominator}}\\,dx`;

  return question(
    number,
    "Intermediate",
    6,
    ["improper integrals", "rational functions", "convergence"],
    `Evaluate $\\displaystyle ${integral}$.`,
    [
      {
        description: "Identify the infinite interval",
        workingLatex: integral,
        explanation: "An infinite upper limit means the integral is defined through a limiting process.",
      },
      {
        description: "Introduce a finite endpoint",
        workingLatex: `${integral}=\\lim_{T\\to\\infty}\\int_{${spec.lower}}^{T}\\frac{${spec.coefficient}}{${denominator}}\\,dx`,
        explanation: "This turns the problem into a standard definite integral first.",
      },
      {
        description: "Check the power behaviour",
        workingLatex: `\\frac{${spec.coefficient}}{${denominator}}\\sim \\frac{C}{x^{${spec.power}}}`,
        explanation: "A reciprocal power tail with power greater than $1$ has finite area, so we expect convergence.",
      },
      {
        description: "Find an antiderivative",
        workingLatex: `\\int\\frac{${spec.coefficient}}{${denominator}}\\,dx=${spec.antiderivative}`,
        explanation: "We increase the power by one when integrating the negative power form.",
      },
      {
        description: "Apply the finite bounds",
        workingLatex: `\\lim_{T\\to\\infty}\\left[${spec.antiderivative}\\right]_{${spec.lower}}^{T}`,
        explanation: "The finite upper limit keeps both endpoint substitutions meaningful.",
      },
      {
        description: "Evaluate the upper-limit term",
        workingLatex: `\\lim_{T\\to\\infty}${spec.antiderivative.replaceAll("x", "T")}=0`,
        explanation: "The antiderivative still contains a negative power, so it tends to zero at infinity.",
      },
      {
        description: "Evaluate the lower-limit term",
        workingLatex: `${spec.antiderivative.replaceAll("x", `(${spec.lower})`)}=${spec.lowerTerm}`,
        explanation: "The lower endpoint supplies the finite quantity that remains after the upper endpoint vanishes.",
      },
      {
        description: "Subtract lower value from upper value",
        workingLatex: `0-(${spec.lowerTerm})=${spec.answer}`,
        explanation: "Definite integration always uses upper value minus lower value.",
      },
      {
        description: "State the result",
        workingLatex: `${integral}=${spec.answer}`,
        explanation: "The integral converges to this exact finite value.",
      },
    ],
    `$\\displaystyle ${integral}=${spec.answer}$.`,
  );
}

type EndpointSpec = {
  integral: string;
  limitSetup: string;
  antiderivative: string;
  singularLimit: string;
  upperValue: string;
  answer: string;
  tag: string;
};

function endpointQuestion(number: number, spec: EndpointSpec): Question {
  return question(
    number,
    "Easy",
    5,
    ["improper integrals", "endpoint singularities", spec.tag],
    `Evaluate $\\displaystyle ${spec.integral}$.`,
    [
      {
        description: "Recognise the endpoint issue",
        workingLatex: spec.integral,
        explanation: "The integrand is not defined at one endpoint, so the integral is improper even though the interval is finite.",
      },
      {
        description: "Replace the singular endpoint by a variable",
        workingLatex: spec.limitSetup,
        explanation: "Moving slightly inside the interval avoids substituting directly into the singular expression.",
      },
      {
        description: "Use an antiderivative",
        workingLatex: spec.antiderivative,
        explanation: "The antiderivative lets us evaluate the finite integral before taking the endpoint limit.",
      },
      {
        description: "Evaluate the regular endpoint",
        workingLatex: spec.upperValue,
        explanation: "The nonsingular endpoint can be substituted normally.",
      },
      {
        description: "Take the singular-endpoint limit",
        workingLatex: spec.singularLimit,
        explanation: "Although the integrand becomes unbounded, the accumulated area near the endpoint can still remain finite.",
      },
      {
        description: "Subtract the endpoint values",
        workingLatex: spec.answer,
        explanation: "The final value is the limiting upper contribution minus the limiting lower contribution.",
      },
      {
        description: "State convergence",
        workingLatex: `${spec.integral}=${spec.answer}`,
        explanation: "Because the limiting value is finite, the improper integral converges.",
      },
    ],
    `$\\displaystyle ${spec.integral}=${spec.answer}$.`,
  );
}

type LogSpec = {
  integral: string;
  antiderivative: string;
  upperValue: string;
  lowerLimit: string;
  answer: string;
};

function logQuestion(number: number, spec: LogSpec): Question {
  return question(
    number,
    "Intermediate",
    6,
    ["improper integrals", "logarithmic integrals", "endpoint limits"],
    `Evaluate $\\displaystyle ${spec.integral}$.`,
    [
      {
        description: "Identify the logarithmic singularity",
        workingLatex: spec.integral,
        explanation: "The logarithm is not defined at $x=0$, so the lower endpoint must be handled by a limit.",
      },
      {
        description: "Move the lower limit to $t$",
        workingLatex: `${spec.integral}=\\lim_{t\\to0^{+}}\\int_{t}^{\\text{upper}} f(x)\\,dx`,
        explanation: "This avoids putting $0$ directly into $\\ln x$.",
      },
      {
        description: "Use the antiderivative",
        workingLatex: spec.antiderivative,
        explanation: "Logarithmic integrals often come from integration by parts or a standard result.",
      },
      {
        description: "Evaluate the upper endpoint",
        workingLatex: spec.upperValue,
        explanation: "The upper endpoint is inside the domain, so it can be substituted directly.",
      },
      {
        description: "Consider the lower endpoint expression",
        workingLatex: spec.lowerLimit,
        explanation: "The expression contains a product involving $\\ln t$, so the limiting behaviour needs care.",
      },
      {
        description: "Use the standard limiting result",
        workingLatex: `\\lim_{t\\to0^{+}}t^{a}\\ln t=0\\quad(a>0)`,
        explanation: "A positive power of $t$ shrinks faster than $\\ln t$ grows in magnitude.",
      },
      {
        description: "Find the lower contribution",
        workingLatex: `\\lim_{t\\to0^{+}}(${spec.lowerLimit})=0`,
        explanation: "The lower endpoint contributes nothing after the limit is taken.",
      },
      {
        description: "Subtract the endpoint values",
        workingLatex: `${spec.upperValue}-0=${spec.answer}`,
        explanation: "The finite value is the upper contribution minus the limiting lower contribution.",
      },
      {
        description: "State the result",
        workingLatex: `${spec.integral}=${spec.answer}`,
        explanation: "The logarithmic singularity is integrable here, so the improper integral converges.",
      },
    ],
    `$\\displaystyle ${spec.integral}=${spec.answer}$.`,
  );
}

type MeanSpec = {
  functionText: string;
  interval: string;
  integral: string;
  width: string;
  antiderivative: string;
  definiteValue: string;
  mean: string;
  difficulty?: Difficulty;
};

function meanValueQuestion(number: number, spec: MeanSpec): Question {
  return question(
    number,
    spec.difficulty ?? "Easy",
    spec.difficulty === "Intermediate" ? 6 : 4,
    ["mean value", "average value", "definite integrals"],
    `Find the mean value of $f(x)=${spec.functionText}$ on the interval ${spec.interval}.`,
    [
      {
        description: "Recall the mean value formula",
        workingLatex: `\\bar f=\\frac{1}{b-a}\\int_a^b f(x)\\,dx`,
        explanation: "The mean value is the constant height that would give the same signed area over the same interval.",
      },
      {
        description: "Substitute the interval width",
        workingLatex: `b-a=${spec.width}`,
        explanation: "The width of the interval divides the total area to turn it into an average height.",
      },
      {
        description: "Set up the definite integral",
        workingLatex: `\\bar f=\\frac{1}{${spec.width}}${spec.integral}`,
        explanation: "We integrate the function over exactly the interval stated in the question.",
      },
      {
        description: "Find an antiderivative",
        workingLatex: spec.antiderivative,
        explanation: "The antiderivative is the tool that converts the accumulated area into endpoint values.",
      },
      {
        description: "Evaluate the definite integral",
        workingLatex: spec.definiteValue,
        explanation: "This gives the total signed area of the graph over the interval.",
      },
      {
        description: "Divide by the interval width",
        workingLatex: `\\bar f=\\frac{${spec.definiteValue}}{${spec.width}}=${spec.mean}`,
        explanation: "Dividing area by width gives the average height of the function.",
      },
      {
        description: "State the mean value",
        workingLatex: `\\bar f=${spec.mean}`,
        explanation: "This is the single constant value with the same total area over the interval.",
      },
    ],
    `The mean value is $${spec.mean}$.`,
  );
}

type ParameterSpec = {
  questionText: string;
  setup: string;
  equation: string;
  solveLine1: string;
  solveLine2: string;
  answer: string;
  tags: string[];
};

function parameterQuestion(number: number, spec: ParameterSpec): Question {
  return question(
    number,
    "Hard",
    8,
    spec.tags,
    spec.questionText,
    [
      {
        description: "Identify the unknown parameter",
        workingLatex: spec.setup,
        explanation: "The parameter controls the size of the integral or mean value, so we first express the condition algebraically.",
      },
      {
        description: "Write the required condition",
        workingLatex: spec.equation,
        explanation: "Turning the words into an equation gives a clear target for the parameter.",
      },
      {
        description: "Check whether a limit is involved",
        workingLatex: `\\text{Improper endpoints must be treated with limits where needed.}`,
        explanation: "A parameter calculation is only meaningful after the underlying integral or mean value is correctly defined.",
      },
      {
        description: "Evaluate the integral or average expression",
        workingLatex: spec.solveLine1,
        explanation: "This simplifies the calculus part into an algebraic equation.",
      },
      {
        description: "Keep the parameter factor visible",
        workingLatex: spec.solveLine2,
        explanation: "Leaving the parameter as a factor makes the final rearrangement straightforward.",
      },
      {
        description: "Compare with the required value",
        workingLatex: spec.equation,
        explanation: "The calculated expression must equal the value specified in the question.",
      },
      {
        description: "Rearrange for the parameter",
        workingLatex: spec.answer,
        explanation: "Solving the resulting linear equation gives the only parameter value satisfying the condition.",
      },
      {
        description: "Substitute back mentally",
        workingLatex: `\\text{The condition is now satisfied exactly.}`,
        explanation: "A quick substitution check confirms that no factor has been lost.",
      },
      {
        description: "Check convergence or validity",
        workingLatex: `\\text{The relevant integral is finite on the stated interval.}`,
        explanation: "The computed parameter is valid only if the original calculus expression exists.",
      },
      {
        description: "Interpret the result",
        workingLatex: spec.answer,
        explanation: "The parameter scales the whole quantity, so the answer has the expected proportional effect.",
      },
      {
        description: "Write the exact form",
        workingLatex: spec.answer,
        explanation: "Keeping exact constants such as $\\pi$ and logarithms preserves the exact answer.",
      },
      {
        description: "Final check",
        workingLatex: `\\text{Required value obtained.}`,
        explanation: "The result matches the target value in the question.",
      },
      {
        description: "State the parameter value",
        workingLatex: spec.answer,
        explanation: "This completes the parameter problem.",
      },
    ],
    `$${spec.answer}$.`,
  );
}

const exponentialSpecs: ExponentialSpec[] = [
  { c: "3", k: "1", lower: "0", limitValue: "3", answer: "3" },
  { c: "4", k: "2", lower: "0", limitValue: "2", answer: "2" },
  { c: "6", k: "3", lower: "0", limitValue: "2", answer: "2" },
  { c: "5", k: "1", lower: "1", limitValue: "5e^{-1}", answer: "5e^{-1}" },
  { c: "8", k: "2", lower: "1", limitValue: "4e^{-2}", answer: "4e^{-2}" },
  { c: "9", k: "3", lower: "1", limitValue: "3e^{-3}", answer: "3e^{-3}" },
  { c: "10", k: "5", lower: "0", limitValue: "2", answer: "2" },
  { c: "12", k: "4", lower: "1", limitValue: "3e^{-4}", answer: "3e^{-4}" },
  { c: "7", k: "2", lower: "2", limitValue: "\\frac{7}{2}e^{-4}", answer: "\\frac{7}{2}e^{-4}" },
  { c: "15", k: "3", lower: "2", limitValue: "5e^{-6}", answer: "5e^{-6}" },
];

const reciprocalSpecs: ReciprocalSpec[] = [
  { coefficient: "1", shift: "0", power: "2", lower: "1", antiderivative: "-x^{-1}", lowerTerm: "-1", answer: "1" },
  { coefficient: "4", shift: "0", power: "3", lower: "1", antiderivative: "-2x^{-2}", lowerTerm: "-2", answer: "2" },
  { coefficient: "6", shift: "0", power: "4", lower: "1", antiderivative: "-2x^{-3}", lowerTerm: "-2", answer: "2" },
  { coefficient: "2", shift: "1", power: "2", lower: "0", antiderivative: "-2(x+1)^{-1}", lowerTerm: "-2", answer: "2" },
  { coefficient: "6", shift: "2", power: "2", lower: "0", antiderivative: "-6(x+2)^{-1}", lowerTerm: "-3", answer: "3" },
  { coefficient: "8", shift: "1", power: "3", lower: "0", antiderivative: "-4(x+1)^{-2}", lowerTerm: "-4", answer: "4" },
  { coefficient: "12", shift: "2", power: "3", lower: "0", antiderivative: "-6(x+2)^{-2}", lowerTerm: "-\\frac{3}{2}", answer: "\\frac{3}{2}" },
  { coefficient: "5", shift: "0", power: "2", lower: "5", antiderivative: "-5x^{-1}", lowerTerm: "-1", answer: "1" },
  { coefficient: "18", shift: "0", power: "3", lower: "3", antiderivative: "-9x^{-2}", lowerTerm: "-1", answer: "1" },
  { coefficient: "16", shift: "4", power: "2", lower: "0", antiderivative: "-16(x+4)^{-1}", lowerTerm: "-4", answer: "4" },
];

const endpointSpecs: EndpointSpec[] = [
  { integral: "\\int_{0}^{4}\\frac{1}{\\sqrt{x}}\\,dx", limitSetup: "\\lim_{t\\to0^{+}}\\int_t^4 x^{-1/2}\\,dx", antiderivative: "2\\sqrt{x}", singularLimit: "\\lim_{t\\to0^{+}}2\\sqrt{t}=0", upperValue: "2\\sqrt{4}=4", answer: "4", tag: "square-root singularities" },
  { integral: "\\int_{0}^{9}\\frac{1}{\\sqrt{x}}\\,dx", limitSetup: "\\lim_{t\\to0^{+}}\\int_t^9 x^{-1/2}\\,dx", antiderivative: "2\\sqrt{x}", singularLimit: "\\lim_{t\\to0^{+}}2\\sqrt{t}=0", upperValue: "2\\sqrt{9}=6", answer: "6", tag: "square-root singularities" },
  { integral: "\\int_{0}^{1}\\frac{3}{\\sqrt{x}}\\,dx", limitSetup: "\\lim_{t\\to0^{+}}\\int_t^1 3x^{-1/2}\\,dx", antiderivative: "6\\sqrt{x}", singularLimit: "\\lim_{t\\to0^{+}}6\\sqrt{t}=0", upperValue: "6\\sqrt{1}=6", answer: "6", tag: "square-root singularities" },
  { integral: "\\int_{0}^{16}\\frac{2}{\\sqrt{x}}\\,dx", limitSetup: "\\lim_{t\\to0^{+}}\\int_t^{16}2x^{-1/2}\\,dx", antiderivative: "4\\sqrt{x}", singularLimit: "\\lim_{t\\to0^{+}}4\\sqrt{t}=0", upperValue: "4\\sqrt{16}=16", answer: "16", tag: "square-root singularities" },
  { integral: "\\int_{0}^{1}\\frac{1}{\\sqrt{1-x}}\\,dx", limitSetup: "\\lim_{t\\to1^{-}}\\int_0^t(1-x)^{-1/2}\\,dx", antiderivative: "-2\\sqrt{1-x}", singularLimit: "\\lim_{t\\to1^{-}}-2\\sqrt{1-t}=0", upperValue: "-2\\sqrt{1-0}=-2", answer: "2", tag: "endpoint substitution" },
  { integral: "\\int_{0}^{3}\\frac{1}{\\sqrt{3-x}}\\,dx", limitSetup: "\\lim_{t\\to3^{-}}\\int_0^t(3-x)^{-1/2}\\,dx", antiderivative: "-2\\sqrt{3-x}", singularLimit: "\\lim_{t\\to3^{-}}-2\\sqrt{3-t}=0", upperValue: "-2\\sqrt{3}", answer: "2\\sqrt{3}", tag: "endpoint substitution" },
  { integral: "\\int_{0}^{4}\\frac{3}{\\sqrt{4-x}}\\,dx", limitSetup: "\\lim_{t\\to4^{-}}\\int_0^t3(4-x)^{-1/2}\\,dx", antiderivative: "-6\\sqrt{4-x}", singularLimit: "\\lim_{t\\to4^{-}}-6\\sqrt{4-t}=0", upperValue: "-6\\sqrt{4}=-12", answer: "12", tag: "endpoint substitution" },
  { integral: "\\int_{1}^{5}\\frac{2}{\\sqrt{x-1}}\\,dx", limitSetup: "\\lim_{t\\to1^{+}}\\int_t^5 2(x-1)^{-1/2}\\,dx", antiderivative: "4\\sqrt{x-1}", singularLimit: "\\lim_{t\\to1^{+}}4\\sqrt{t-1}=0", upperValue: "4\\sqrt{4}=8", answer: "8", tag: "shifted square-root singularities" },
  { integral: "\\int_{2}^{6}\\frac{5}{\\sqrt{x-2}}\\,dx", limitSetup: "\\lim_{t\\to2^{+}}\\int_t^6 5(x-2)^{-1/2}\\,dx", antiderivative: "10\\sqrt{x-2}", singularLimit: "\\lim_{t\\to2^{+}}10\\sqrt{t-2}=0", upperValue: "10\\sqrt{4}=20", answer: "20", tag: "shifted square-root singularities" },
  { integral: "\\int_{1}^{10}\\frac{1}{\\sqrt{x-1}}\\,dx", limitSetup: "\\lim_{t\\to1^{+}}\\int_t^{10}(x-1)^{-1/2}\\,dx", antiderivative: "2\\sqrt{x-1}", singularLimit: "\\lim_{t\\to1^{+}}2\\sqrt{t-1}=0", upperValue: "2\\sqrt{9}=6", answer: "6", tag: "shifted square-root singularities" },
];

const logSpecs: LogSpec[] = [
  { integral: "\\int_{0}^{1}\\ln x\\,dx", antiderivative: "x\\ln x-x", upperValue: "-1", lowerLimit: "t\\ln t-t", answer: "-1" },
  { integral: "\\int_{0}^{2}\\ln x\\,dx", antiderivative: "x\\ln x-x", upperValue: "2\\ln2-2", lowerLimit: "t\\ln t-t", answer: "2\\ln2-2" },
  { integral: "\\int_{0}^{e}\\ln x\\,dx", antiderivative: "x\\ln x-x", upperValue: "0", lowerLimit: "t\\ln t-t", answer: "0" },
  { integral: "\\int_{0}^{1}x\\ln x\\,dx", antiderivative: "\\frac{x^{2}}{2}\\ln x-\\frac{x^{2}}{4}", upperValue: "-\\frac14", lowerLimit: "\\frac{t^{2}}{2}\\ln t-\\frac{t^{2}}{4}", answer: "-\\frac14" },
  { integral: "\\int_{0}^{1}x^{2}\\ln x\\,dx", antiderivative: "\\frac{x^{3}}{3}\\ln x-\\frac{x^{3}}{9}", upperValue: "-\\frac19", lowerLimit: "\\frac{t^{3}}{3}\\ln t-\\frac{t^{3}}{9}", answer: "-\\frac19" },
  { integral: "\\int_{0}^{1}2x\\ln x\\,dx", antiderivative: "x^{2}\\ln x-\\frac{x^{2}}{2}", upperValue: "-\\frac12", lowerLimit: "t^{2}\\ln t-\\frac{t^{2}}{2}", answer: "-\\frac12" },
  { integral: "\\int_{0}^{1}3x^{2}\\ln x\\,dx", antiderivative: "x^{3}\\ln x-\\frac{x^{3}}{3}", upperValue: "-\\frac13", lowerLimit: "t^{3}\\ln t-\\frac{t^{3}}{3}", answer: "-\\frac13" },
  { integral: "\\int_{0}^{4}\\ln\\sqrt{x}\\,dx", antiderivative: "\\frac12(x\\ln x-x)", upperValue: "2\\ln4-2", lowerLimit: "\\frac12(t\\ln t-t)", answer: "2\\ln4-2" },
];

const meanSpecs: MeanSpec[] = [
  { functionText: "2x+1", interval: "$[0,4]$", integral: "\\int_0^4(2x+1)\\,dx", width: "4", antiderivative: "x^{2}+x", definiteValue: "20", mean: "5" },
  { functionText: "3x-2", interval: "$[0,6]$", integral: "\\int_0^6(3x-2)\\,dx", width: "6", antiderivative: "\\frac{3x^{2}}{2}-2x", definiteValue: "42", mean: "7" },
  { functionText: "x+5", interval: "$[1,5]$", integral: "\\int_1^5(x+5)\\,dx", width: "4", antiderivative: "\\frac{x^{2}}{2}+5x", definiteValue: "32", mean: "8" },
  { functionText: "4-x", interval: "$[0,2]$", integral: "\\int_0^2(4-x)\\,dx", width: "2", antiderivative: "4x-\\frac{x^{2}}{2}", definiteValue: "6", mean: "3" },
  { functionText: "5-2x", interval: "$[1,3]$", integral: "\\int_1^3(5-2x)\\,dx", width: "2", antiderivative: "5x-x^{2}", definiteValue: "0", mean: "0" },
  { functionText: "x^{2}", interval: "$[0,3]$", integral: "\\int_0^3x^{2}\\,dx", width: "3", antiderivative: "\\frac{x^{3}}{3}", definiteValue: "9", mean: "3", difficulty: "Intermediate" },
  { functionText: "x^{2}+1", interval: "$[0,3]$", integral: "\\int_0^3(x^{2}+1)\\,dx", width: "3", antiderivative: "\\frac{x^{3}}{3}+x", definiteValue: "12", mean: "4", difficulty: "Intermediate" },
  { functionText: "x^{2}-2x", interval: "$[0,6]$", integral: "\\int_0^6(x^{2}-2x)\\,dx", width: "6", antiderivative: "\\frac{x^{3}}{3}-x^{2}", definiteValue: "36", mean: "6", difficulty: "Intermediate" },
  { functionText: "3x^{2}", interval: "$[0,2]$", integral: "\\int_0^2 3x^{2}\\,dx", width: "2", antiderivative: "x^{3}", definiteValue: "8", mean: "4", difficulty: "Intermediate" },
  { functionText: "x^{3}", interval: "$[0,2]$", integral: "\\int_0^2x^{3}\\,dx", width: "2", antiderivative: "\\frac{x^{4}}{4}", definiteValue: "4", mean: "2", difficulty: "Intermediate" },
  { functionText: "\\sin x", interval: "$[0,\\pi]$", integral: "\\int_0^\\pi\\sin x\\,dx", width: "\\pi", antiderivative: "-\\cos x", definiteValue: "2", mean: "\\frac{2}{\\pi}", difficulty: "Intermediate" },
  { functionText: "\\cos x", interval: "$[0,\\frac{\\pi}{2}]$", integral: "\\int_0^{\\pi/2}\\cos x\\,dx", width: "\\frac{\\pi}{2}", antiderivative: "\\sin x", definiteValue: "1", mean: "\\frac{2}{\\pi}", difficulty: "Intermediate" },
  { functionText: "2\\sin x", interval: "$[0,\\pi]$", integral: "\\int_0^\\pi 2\\sin x\\,dx", width: "\\pi", antiderivative: "-2\\cos x", definiteValue: "4", mean: "\\frac{4}{\\pi}", difficulty: "Intermediate" },
  { functionText: "\\sin 2x", interval: "$[0,\\frac{\\pi}{2}]$", integral: "\\int_0^{\\pi/2}\\sin 2x\\,dx", width: "\\frac{\\pi}{2}", antiderivative: "-\\frac12\\cos 2x", definiteValue: "1", mean: "\\frac{2}{\\pi}", difficulty: "Intermediate" },
  { functionText: "e^{x}", interval: "$[0,\\ln 2]$", integral: "\\int_0^{\\ln2}e^{x}\\,dx", width: "\\ln2", antiderivative: "e^{x}", definiteValue: "1", mean: "\\frac{1}{\\ln2}", difficulty: "Intermediate" },
  { functionText: "e^{2x}", interval: "$[0,\\ln 2]$", integral: "\\int_0^{\\ln2}e^{2x}\\,dx", width: "\\ln2", antiderivative: "\\frac12 e^{2x}", definiteValue: "\\frac32", mean: "\\frac{3}{2\\ln2}", difficulty: "Intermediate" },
  { functionText: "\\frac{1}{x}", interval: "$[1,e]$", integral: "\\int_1^e\\frac{1}{x}\\,dx", width: "e-1", antiderivative: "\\ln x", definiteValue: "1", mean: "\\frac{1}{e-1}", difficulty: "Intermediate" },
  { functionText: "\\frac{2}{x}", interval: "$[1,e^{2}]$", integral: "\\int_1^{e^2}\\frac{2}{x}\\,dx", width: "e^{2}-1", antiderivative: "2\\ln x", definiteValue: "4", mean: "\\frac{4}{e^{2}-1}", difficulty: "Intermediate" },
  { functionText: "\\sqrt{x}", interval: "$[0,4]$", integral: "\\int_0^4\\sqrt{x}\\,dx", width: "4", antiderivative: "\\frac{2}{3}x^{3/2}", definiteValue: "\\frac{16}{3}", mean: "\\frac{4}{3}", difficulty: "Intermediate" },
  { functionText: "\\frac{1}{\\sqrt{x}}", interval: "$[1,4]$", integral: "\\int_1^4\\frac{1}{\\sqrt{x}}\\,dx", width: "3", antiderivative: "2\\sqrt{x}", definiteValue: "2", mean: "\\frac{2}{3}", difficulty: "Intermediate" },
  { functionText: "1+\\cos x", interval: "$[0,\\pi]$", integral: "\\int_0^\\pi(1+\\cos x)\\,dx", width: "\\pi", antiderivative: "x+\\sin x", definiteValue: "\\pi", mean: "1", difficulty: "Intermediate" },
  { functionText: "2+\\sin x", interval: "$[0,\\pi]$", integral: "\\int_0^\\pi(2+\\sin x)\\,dx", width: "\\pi", antiderivative: "2x-\\cos x", definiteValue: "2\\pi+2", mean: "2+\\frac{2}{\\pi}", difficulty: "Intermediate" },
];

const parameterSpecs: ParameterSpec[] = [
  {
    questionText: "Find $a$ if $\\displaystyle\\int_{1}^{\\infty}\\frac{a}{(x+1)^2}\\,dx=3$.",
    setup: "\\int_{1}^{\\infty}\\frac{a}{(x+1)^2}\\,dx",
    equation: "\\frac{a}{2}=3",
    solveLine1: "\\int_{1}^{\\infty}(x+1)^{-2}\\,dx=\\frac12",
    solveLine2: "\\int_{1}^{\\infty}\\frac{a}{(x+1)^2}\\,dx=\\frac{a}{2}",
    answer: "a=6",
    tags: ["improper integrals", "parameters", "rational functions"],
  },
  {
    questionText: "Find $k$ if $\\displaystyle\\int_{0}^{\\infty}ke^{-2x}\\,dx=5$.",
    setup: "\\int_{0}^{\\infty}ke^{-2x}\\,dx",
    equation: "\\frac{k}{2}=5",
    solveLine1: "\\int_{0}^{\\infty}e^{-2x}\\,dx=\\frac12",
    solveLine2: "\\int_{0}^{\\infty}ke^{-2x}\\,dx=\\frac{k}{2}",
    answer: "k=10",
    tags: ["improper integrals", "parameters", "exponential integrals"],
  },
  {
    questionText: "The mean value of $f(x)=x^2+c$ on $[0,6]$ is $17$. Find $c$.",
    setup: "\\bar f=\\frac16\\int_0^6(x^2+c)\\,dx",
    equation: "12+c=17",
    solveLine1: "\\frac16\\int_0^6x^2\\,dx=12",
    solveLine2: "\\bar f=12+c",
    answer: "c=5",
    tags: ["mean value", "parameters", "quadratics"],
  },
  {
    questionText: "The mean value of $f(x)=cx+2$ on $[1,5]$ is $14$. Find $c$.",
    setup: "\\bar f=\\frac14\\int_1^5(cx+2)\\,dx",
    equation: "3c+2=14",
    solveLine1: "\\frac14\\int_1^5x\\,dx=3",
    solveLine2: "\\bar f=3c+2",
    answer: "c=4",
    tags: ["mean value", "parameters", "linear functions"],
  },
  {
    questionText: "Find $k$ if $\\displaystyle\\int_{0}^{4}\\frac{k}{\\sqrt{x}}\\,dx=12$.",
    setup: "\\int_{0}^{4}\\frac{k}{\\sqrt{x}}\\,dx",
    equation: "4k=12",
    solveLine1: "\\int_0^4x^{-1/2}\\,dx=4",
    solveLine2: "\\int_{0}^{4}\\frac{k}{\\sqrt{x}}\\,dx=4k",
    answer: "k=3",
    tags: ["improper integrals", "parameters", "endpoint singularities"],
  },
  {
    questionText: "The mean value of $f(x)=c\\sin x$ on $[0,\\pi]$ is $4$. Find $c$.",
    setup: "\\bar f=\\frac1\\pi\\int_0^\\pi c\\sin x\\,dx",
    equation: "\\frac{2c}{\\pi}=4",
    solveLine1: "\\int_0^\\pi\\sin x\\,dx=2",
    solveLine2: "\\bar f=\\frac{2c}{\\pi}",
    answer: "c=2\\pi",
    tags: ["mean value", "parameters", "trigonometric integrals"],
  },
  {
    questionText: "Find $k$ if $\\displaystyle\\int_{0}^{1}k\\ln x\\,dx=-6$.",
    setup: "\\int_0^1k\\ln x\\,dx",
    equation: "-k=-6",
    solveLine1: "\\int_0^1\\ln x\\,dx=-1",
    solveLine2: "\\int_0^1k\\ln x\\,dx=-k",
    answer: "k=6",
    tags: ["improper integrals", "parameters", "logarithmic integrals"],
  },
  {
    questionText: "Find $k$ if $\\displaystyle\\int_{2}^{\\infty}\\frac{k}{x^3}\\,dx=9$.",
    setup: "\\int_2^\\infty kx^{-3}\\,dx",
    equation: "\\frac{k}{8}=9",
    solveLine1: "\\int_2^\\infty x^{-3}\\,dx=\\frac18",
    solveLine2: "\\int_2^\\infty\\frac{k}{x^3}\\,dx=\\frac{k}{8}",
    answer: "k=72",
    tags: ["improper integrals", "parameters", "reciprocal powers"],
  },
  {
    questionText: "The mean value of $f(x)=ce^x$ on $[0,\\ln4]$ is $5$. Find $c$.",
    setup: "\\bar f=\\frac{1}{\\ln4}\\int_0^{\\ln4}ce^x\\,dx",
    equation: "\\frac{3c}{\\ln4}=5",
    solveLine1: "\\int_0^{\\ln4}e^x\\,dx=3",
    solveLine2: "\\bar f=\\frac{3c}{\\ln4}",
    answer: "c=\\frac{5\\ln4}{3}",
    tags: ["mean value", "parameters", "exponential integrals"],
  },
  {
    questionText: "Find $k$ if $\\displaystyle\\int_{0}^{1}\\frac{k}{\\sqrt{1-x}}\\,dx=8$.",
    setup: "\\int_0^1k(1-x)^{-1/2}\\,dx",
    equation: "2k=8",
    solveLine1: "\\int_0^1(1-x)^{-1/2}\\,dx=2",
    solveLine2: "\\int_0^1\\frac{k}{\\sqrt{1-x}}\\,dx=2k",
    answer: "k=4",
    tags: ["improper integrals", "parameters", "endpoint singularities"],
  },
];

export const questions: Question[] = [
  ...exponentialSpecs.map((spec, index) => exponentialQuestion(index + 1, spec)),
  ...reciprocalSpecs.map((spec, index) => reciprocalQuestion(index + 11, spec)),
  ...endpointSpecs.map((spec, index) => endpointQuestion(index + 21, spec)),
  ...logSpecs.map((spec, index) => logQuestion(index + 31, spec)),
  ...meanSpecs.map((spec, index) => meanValueQuestion(index + 39, spec)),
  ...parameterSpecs.map((spec, index) => parameterQuestion(index + 61, spec)),
];
