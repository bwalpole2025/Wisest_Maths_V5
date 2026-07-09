import type { Question, WorkedSolution } from "@/lib/types";

const level = "A-Level Further Maths";
const topic = "Further Maths Year 2: Statistics (Further Statistics 2)";
const subtopic = "Combinations of random variables";
const subtopicId = "fm.y2.stats.combining-rv";

type LinearSpec = {
  context: string;
  xName: string;
  yName: string;
  muX: number;
  varX: number;
  muY: number;
  varY: number;
  a: number;
  b: number;
  c: number;
};

type RepeatedSpec = {
  context: string;
  name: string;
  mean: number;
  variance: number;
  n: number;
  scale: number;
  shift: number;
};

type CovSpec = LinearSpec & {
  covariance: number;
};

type QuestionSpec =
  | ({ kind: "linear"; difficulty: "Easy" | "Intermediate" } & LinearSpec)
  | ({ kind: "repeated"; difficulty: "Intermediate" } & RepeatedSpec)
  | ({ kind: "covariance"; difficulty: "Hard" } & CovSpec);

const tidy = (n: number) => Number.isInteger(n) ? String(n) : String(Number(n.toFixed(4)));
const square = (n: number) => n * n;
const signedTerm = (coefficient: number, variable: string) =>
  coefficient >= 0 ? `+ ${coefficient}${variable}` : `- ${Math.abs(coefficient)}${variable}`;

function buildLinearQuestion(index: number, spec: LinearSpec, difficulty: "Easy" | "Intermediate"): Question {
  const id = `${subtopicId}.q${String(index).padStart(3, "0")}`;
  const expression = `${spec.a}X ${signedTerm(spec.b, "Y")} ${spec.c >= 0 ? `+ ${spec.c}` : `- ${Math.abs(spec.c)}`}`;
  const mean = spec.a * spec.muX + spec.b * spec.muY + spec.c;
  const variance = square(spec.a) * spec.varX + square(spec.b) * spec.varY;
  const steps = difficulty === "Easy"
    ? [
        {
          stepNumber: 1,
          description: "State the linear combination",
          workingLatex: `T=${expression}`,
          explanation: "Writing the combination first makes it clear which constants multiply each random variable.",
          diagram: null,
        },
        {
          stepNumber: 2,
          description: "Use linearity of expectation",
          workingLatex: `E(T)=${spec.a}E(X)${spec.b >= 0 ? "+" : ""}${spec.b}E(Y)${spec.c >= 0 ? "+" : ""}${spec.c}`,
          explanation: "Expectation is linear, so constants pass through expectation and the constant term is added directly.",
          diagram: null,
        },
        {
          stepNumber: 3,
          description: "Calculate the mean",
          workingLatex: `E(T)=${spec.a}(${spec.muX})${spec.b >= 0 ? "+" : ""}${spec.b}(${spec.muY})${spec.c >= 0 ? "+" : ""}${spec.c}=${tidy(mean)}`,
          explanation: "Substitute the two means and simplify the arithmetic.",
          diagram: null,
        },
        {
          stepNumber: 4,
          description: "Use independence for variance",
          workingLatex: `\\operatorname{Var}(T)=${spec.a}^{2}\\operatorname{Var}(X)+${spec.b}^{2}\\operatorname{Var}(Y)`,
          explanation: "For independent variables, variances add after each coefficient has been squared.",
          diagram: null,
        },
        {
          stepNumber: 5,
          description: "Calculate the variance",
          workingLatex: `\\operatorname{Var}(T)=${square(spec.a)}(${spec.varX})+${square(spec.b)}(${spec.varY})=${tidy(variance)}`,
          explanation: "The constant term does not affect variance because it only shifts every value by the same amount.",
          diagram: null,
        },
        {
          stepNumber: 6,
          description: "Give the result",
          workingLatex: `E(T)=${tidy(mean)},\\quad \\operatorname{Var}(T)=${tidy(variance)}`,
          explanation: "The mean describes the centre of the new variable and the variance describes its spread.",
          diagram: null,
        },
      ]
    : [
        {
          stepNumber: 1,
          description: "Define the target variable",
          workingLatex: `T=${expression}`,
          explanation: "A named variable keeps the calculation organised.",
          diagram: null,
        },
        {
          stepNumber: 2,
          description: "Recall expectation rule",
          workingLatex: `E(aX+bY+c)=aE(X)+bE(Y)+c`,
          explanation: "The average of a linear combination is the same linear combination of the averages.",
          diagram: null,
        },
        {
          stepNumber: 3,
          description: "Substitute the means",
          workingLatex: `E(T)=${spec.a}(${spec.muX})${spec.b >= 0 ? "+" : ""}${spec.b}(${spec.muY})${spec.c >= 0 ? "+" : ""}${spec.c}`,
          explanation: "Each random variable is replaced by its expected value.",
          diagram: null,
        },
        {
          stepNumber: 4,
          description: "Simplify the mean",
          workingLatex: `E(T)=${tidy(mean)}`,
          explanation: "This gives the long-run average value of the combined quantity.",
          diagram: null,
        },
        {
          stepNumber: 5,
          description: "Recall the variance rule",
          workingLatex: `\\operatorname{Var}(aX+bY+c)=a^2\\operatorname{Var}(X)+b^2\\operatorname{Var}(Y)`,
          explanation: "Independence removes the covariance term, and the constant shift has no effect on spread.",
          diagram: null,
        },
        {
          stepNumber: 6,
          description: "Substitute the variances",
          workingLatex: `\\operatorname{Var}(T)=${spec.a}^{2}(${spec.varX})+${spec.b}^{2}(${spec.varY})`,
          explanation: "The multipliers are squared because variance is measured in squared units.",
          diagram: null,
        },
        {
          stepNumber: 7,
          description: "Simplify the variance",
          workingLatex: `\\operatorname{Var}(T)=${square(spec.a)}(${spec.varX})+${square(spec.b)}(${spec.varY})=${tidy(variance)}`,
          explanation: "Adding the two independent contributions gives the total variance.",
          diagram: null,
        },
        {
          stepNumber: 8,
          description: "Find the standard deviation",
          workingLatex: `\\sigma_T=\\sqrt{${tidy(variance)}}=${tidy(Math.sqrt(variance))}`,
          explanation: "The standard deviation is the square root of the variance, returning to the original units.",
          diagram: null,
        },
        {
          stepNumber: 9,
          description: "Give the result",
          workingLatex: `E(T)=${tidy(mean)},\\quad \\operatorname{Var}(T)=${tidy(variance)},\\quad \\sigma_T=${tidy(Math.sqrt(variance))}`,
          explanation: "These values summarise the centre and spread of the combined random variable.",
          diagram: null,
        },
      ];

  return {
    level,
    topic,
    subtopic,
    subtopicId,
    questionDiagram: null,
    id,
    tags: ["linear-combination", "expectation", "variance", "independence"],
    difficulty,
    marks: difficulty === "Easy" ? 4 : 6,
    answerType: "written",
    questionText: `${spec.context} Let $X$ represent ${spec.xName} and $Y$ represent ${spec.yName}. Given $E(X)=${spec.muX}$, $\\operatorname{Var}(X)=${spec.varX}$, $E(Y)=${spec.muY}$ and $\\operatorname{Var}(Y)=${spec.varY}$, with $X$ and $Y$ independent, find $E(T)$ and $\\operatorname{Var}(T)$ for $T=${expression}$.`,
    workedSolution: {
      steps,
      finalAnswer: `$E(T)=${tidy(mean)}$ and $\\operatorname{Var}(T)=${tidy(variance)}$.`,
    },
  };
}

function buildRepeatedQuestion(index: number, spec: RepeatedSpec): Question {
  const id = `${subtopicId}.q${String(index).padStart(3, "0")}`;
  const mean = spec.scale * spec.n * spec.mean + spec.shift;
  const variance = square(spec.scale) * spec.n * spec.variance;
  const expression = `${spec.scale}(X_1+\\cdots+X_${spec.n})${spec.shift >= 0 ? `+${spec.shift}` : spec.shift}`;

  const workedSolution: WorkedSolution = {
    steps: [
      {
        stepNumber: 1,
        description: "Define the independent copies",
        workingLatex: `X_1,\\ldots,X_${spec.n}\\text{ are independent copies of }X`,
        explanation: "The phrase independent copies means each variable has the same mean and variance, and no copy affects another.",
        diagram: null,
      },
      {
        stepNumber: 2,
        description: "Write the total",
        workingLatex: `T=${expression}`,
        explanation: "The total is a scaled sum of repeated random variables, with a fixed adjustment.",
        diagram: null,
      },
      {
        stepNumber: 3,
        description: "Expectation of the sum",
        workingLatex: `E(X_1+\\cdots+X_${spec.n})=${spec.n}E(X)=${spec.n}(${spec.mean})`,
        explanation: "Expectations add even before using independence.",
        diagram: null,
      },
      {
        stepNumber: 4,
        description: "Expectation of the total",
        workingLatex: `E(T)=${spec.scale}\\cdot ${spec.n}(${spec.mean})${spec.shift >= 0 ? "+" : ""}${spec.shift}=${tidy(mean)}`,
        explanation: "Scaling multiplies the mean, and the fixed shift is then added.",
        diagram: null,
      },
      {
        stepNumber: 5,
        description: "Variance of the sum",
        workingLatex: `\\operatorname{Var}(X_1+\\cdots+X_${spec.n})=${spec.n}\\operatorname{Var}(X)=${spec.n}(${spec.variance})`,
        explanation: "Independence lets the variances of the repeated copies add.",
        diagram: null,
      },
      {
        stepNumber: 6,
        description: "Apply the scale factor",
        workingLatex: `\\operatorname{Var}(T)=${spec.scale}^{2}\\cdot ${spec.n}(${spec.variance})`,
        explanation: "A scale factor is squared in a variance calculation.",
        diagram: null,
      },
      {
        stepNumber: 7,
        description: "Simplify the variance",
        workingLatex: `\\operatorname{Var}(T)=${tidy(variance)}`,
        explanation: "The fixed shift does not change the spread.",
        diagram: null,
      },
      {
        stepNumber: 8,
        description: "Find the standard deviation",
        workingLatex: `\\sigma_T=\\sqrt{${tidy(variance)}}=${tidy(Math.sqrt(variance))}`,
        explanation: "The standard deviation reports spread in the same units as the total.",
        diagram: null,
      },
      {
        stepNumber: 9,
        description: "State the answer",
        workingLatex: `E(T)=${tidy(mean)},\\quad \\operatorname{Var}(T)=${tidy(variance)}`,
        explanation: "These are the required summary measures for the combination.",
        diagram: null,
      },
    ],
    finalAnswer: `$E(T)=${tidy(mean)}$ and $\\operatorname{Var}(T)=${tidy(variance)}$.`,
  };

  return {
    level,
    topic,
    subtopic,
    subtopicId,
    questionDiagram: null,
    id,
    tags: ["repeated-independent-variables", "sum", "expectation", "variance"],
    difficulty: "Intermediate",
    marks: 6,
    answerType: "written",
    questionText: `${spec.context} The random variable $X$ has $E(X)=${spec.mean}$ and $\\operatorname{Var}(X)=${spec.variance}$. Independent observations $X_1,\\ldots,X_${spec.n}$ are taken. For $T=${expression}$, find $E(T)$ and $\\operatorname{Var}(T)$.`,
    workedSolution,
  };
}

function buildCovarianceQuestion(index: number, spec: CovSpec): Question {
  const id = `${subtopicId}.q${String(index).padStart(3, "0")}`;
  const expression = `${spec.a}X ${signedTerm(spec.b, "Y")} ${spec.c >= 0 ? `+ ${spec.c}` : `- ${Math.abs(spec.c)}`}`;
  const mean = spec.a * spec.muX + spec.b * spec.muY + spec.c;
  const variance = square(spec.a) * spec.varX + square(spec.b) * spec.varY + 2 * spec.a * spec.b * spec.covariance;
  const covarianceTerm = 2 * spec.a * spec.b * spec.covariance;

  return {
    level,
    topic,
    subtopic,
    subtopicId,
    questionDiagram: null,
    id,
    tags: ["linear-combination", "covariance", "expectation", "variance"],
    difficulty: "Hard",
    marks: 8,
    answerType: "written",
    questionText: `${spec.context} Let $X$ represent ${spec.xName} and $Y$ represent ${spec.yName}. Given $E(X)=${spec.muX}$, $\\operatorname{Var}(X)=${spec.varX}$, $E(Y)=${spec.muY}$, $\\operatorname{Var}(Y)=${spec.varY}$ and $\\operatorname{Cov}(X,Y)=${spec.covariance}$, find $E(T)$ and $\\operatorname{Var}(T)$ for $T=${expression}$.`,
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Identify the combination",
          workingLatex: `T=${expression}`,
          explanation: "The coefficients of $X$ and $Y$ determine both the mean calculation and the spread calculation.",
          diagram: null,
        },
        {
          stepNumber: 2,
          description: "Use linearity of expectation",
          workingLatex: `E(T)=${spec.a}E(X)${spec.b >= 0 ? "+" : ""}${spec.b}E(Y)${spec.c >= 0 ? "+" : ""}${spec.c}`,
          explanation: "Expectation is linear even when the variables are not independent.",
          diagram: null,
        },
        {
          stepNumber: 3,
          description: "Substitute the means",
          workingLatex: `E(T)=${spec.a}(${spec.muX})${spec.b >= 0 ? "+" : ""}${spec.b}(${spec.muY})${spec.c >= 0 ? "+" : ""}${spec.c}`,
          explanation: "Replace each variable by its average value.",
          diagram: null,
        },
        {
          stepNumber: 4,
          description: "Simplify the mean",
          workingLatex: `E(T)=${tidy(mean)}`,
          explanation: "This gives the centre of the combined variable.",
          diagram: null,
        },
        {
          stepNumber: 5,
          description: "Use the covariance variance rule",
          workingLatex: `\\operatorname{Var}(aX+bY+c)=a^2\\operatorname{Var}(X)+b^2\\operatorname{Var}(Y)+2ab\\operatorname{Cov}(X,Y)`,
          explanation: "Because $X$ and $Y$ may move together, the covariance term must be included.",
          diagram: null,
        },
        {
          stepNumber: 6,
          description: "Substitute all values",
          workingLatex: `\\operatorname{Var}(T)=${spec.a}^{2}(${spec.varX})+${spec.b}^{2}(${spec.varY})+2(${spec.a})(${spec.b})(${spec.covariance})`,
          explanation: "The sign of the coefficient matters inside the covariance term.",
          diagram: null,
        },
        {
          stepNumber: 7,
          description: "Calculate the first variance part",
          workingLatex: `${spec.a}^{2}(${spec.varX})=${tidy(square(spec.a) * spec.varX)}`,
          explanation: "This is the contribution from variation in $X$.",
          diagram: null,
        },
        {
          stepNumber: 8,
          description: "Calculate the second variance part",
          workingLatex: `${spec.b}^{2}(${spec.varY})=${tidy(square(spec.b) * spec.varY)}`,
          explanation: "This is the contribution from variation in $Y$.",
          diagram: null,
        },
        {
          stepNumber: 9,
          description: "Calculate the covariance part",
          workingLatex: `2(${spec.a})(${spec.b})(${spec.covariance})=${tidy(covarianceTerm)}`,
          explanation: "This term adjusts the spread depending on whether the variables tend to move together or in opposite directions.",
          diagram: null,
        },
        {
          stepNumber: 10,
          description: "Combine the parts",
          workingLatex: `\\operatorname{Var}(T)=${tidy(square(spec.a) * spec.varX)}+${tidy(square(spec.b) * spec.varY)}${covarianceTerm >= 0 ? "+" : ""}${tidy(covarianceTerm)}`,
          explanation: "The total variance is the sum of the two scaled variances and the covariance adjustment.",
          diagram: null,
        },
        {
          stepNumber: 11,
          description: "Simplify the variance",
          workingLatex: `\\operatorname{Var}(T)=${tidy(variance)}`,
          explanation: "A valid variance must be non-negative; this also checks the covariance has been used sensibly.",
          diagram: null,
        },
        {
          stepNumber: 12,
          description: "Find the standard deviation",
          workingLatex: `\\sigma_T=\\sqrt{${tidy(variance)}}=${tidy(Math.sqrt(variance))}`,
          explanation: "The standard deviation is often useful because it is measured in the original units.",
          diagram: null,
        },
        {
          stepNumber: 13,
          description: "State the answer",
          workingLatex: `E(T)=${tidy(mean)},\\quad \\operatorname{Var}(T)=${tidy(variance)}`,
          explanation: "The final values give the centre and spread of the combination.",
          diagram: null,
        },
      ],
      finalAnswer: `$E(T)=${tidy(mean)}$ and $\\operatorname{Var}(T)=${tidy(variance)}$.`,
    },
  };
}

const linearContexts = [
  "A delivery firm records daily small-parcel demand and large-parcel demand.",
  "A cafe records morning orders and afternoon orders.",
  "A science department tracks practical-kit usage and worksheet usage.",
  "A shop models weekday returns and weekend returns.",
  "A farm models the number of boxes of apples and pears sold.",
  "A charity records online donations and cash donations in hundreds of pounds.",
  "A school models points from coursework and points from an exam component.",
  "A factory records minor defects and major defects on a shift.",
  "A bus company models adult passengers and child passengers.",
  "A library records fiction loans and non-fiction loans.",
  "A cinema models tickets sold for standard seats and premium seats.",
  "A clinic records new appointments and follow-up appointments.",
  "A warehouse models boxes loaded by team A and team B.",
  "A website records sign-ups from adverts and referrals.",
  "A florist models bunches of roses and lilies sold.",
  "A bakery records sales of loaves and cakes.",
  "A gym models day passes and class bookings.",
  "A tutoring centre records algebra sessions and statistics sessions.",
  "A theatre records balcony tickets and stalls tickets.",
  "A train station models paper tickets and e-tickets sold.",
  "A museum records adult entries and student entries.",
  "A sports club models home memberships and away memberships.",
  "A printer records colour jobs and black-and-white jobs.",
  "A repair shop models simple repairs and complex repairs.",
];

const easySpecs: QuestionSpec[] = linearContexts.map((context, i) => ({
  kind: "linear",
  difficulty: "Easy",
  context,
  xName: "the first quantity",
  yName: "the second quantity",
  muX: 4 + (i % 6),
  varX: 2 + (i % 5),
  muY: 3 + (i % 7),
  varY: 1 + ((2 * i) % 6),
  a: [1, 2, 3, 2][i % 4],
  b: [1, -1, 2, -2][i % 4],
  c: [-3, 0, 4, 6, -2, 5][i % 6],
}));

const intermediateLinearSpecs: QuestionSpec[] = [
  { context: "A company combines two independent monthly cost components.", xName: "staff cost in thousands", yName: "materials cost in thousands", muX: 18, varX: 9, muY: 11, varY: 4, a: 2, b: 3, c: 5 },
  { context: "A laboratory combines two independent measurement readings.", xName: "calibration error", yName: "instrument error", muX: 1, varX: 0.16, muY: -2, varY: 0.25, a: 4, b: -3, c: 2 },
  { context: "A theatre models two independent ticket revenue streams.", xName: "standard-ticket revenue in hundreds", yName: "premium-ticket revenue in hundreds", muX: 32, varX: 25, muY: 14, varY: 16, a: 1, b: 2, c: -8 },
  { context: "A project manager combines two independent task-time estimates.", xName: "design time", yName: "testing time", muX: 6, varX: 1.44, muY: 9, varY: 2.25, a: 3, b: 1, c: 4 },
  { context: "A farm combines two independent crop-yield variables.", xName: "wheat yield", yName: "barley yield", muX: 15, varX: 6, muY: 12, varY: 5, a: 2, b: -1, c: 10 },
  { context: "An airline combines two independent luggage-weight variables.", xName: "hold-luggage weight", yName: "cabin-luggage weight", muX: 20, varX: 9, muY: 7, varY: 2, a: 1, b: 3, c: 0 },
  { context: "A game designer combines two independent score bonuses.", xName: "speed bonus", yName: "accuracy bonus", muX: 50, varX: 36, muY: 30, varY: 25, a: 2, b: 2, c: -20 },
  { context: "A retailer combines two independent daily discount totals.", xName: "voucher discount", yName: "loyalty discount", muX: 8, varX: 3, muY: 5, varY: 2, a: 5, b: -2, c: 1 },
  { context: "A school combines two independent marks components.", xName: "written mark", yName: "oral mark", muX: 42, varX: 16, muY: 18, varY: 9, a: 1, b: 2, c: 0 },
  { context: "A hospital combines two independent waiting-time components.", xName: "triage time", yName: "consultation time", muX: 12, varX: 4, muY: 21, varY: 9, a: 2, b: 1, c: 3 },
  { context: "A manufacturer combines two independent production outputs.", xName: "machine A output", yName: "machine B output", muX: 80, varX: 49, muY: 65, varY: 36, a: 3, b: -1, c: 12 },
  { context: "A fundraiser combines two independent donation variables.", xName: "online donations", yName: "event donations", muX: 24, varX: 10, muY: 15, varY: 8, a: 2, b: 4, c: -6 },
].map((s) => ({ kind: "linear", difficulty: "Intermediate", ...s }));

const repeatedSpecs: QuestionSpec[] = [
  { kind: "repeated", difficulty: "Intermediate", context: "A vending machine dispenses cans with random profit per sale.", name: "profit", mean: 1.2, variance: 0.09, n: 20, scale: 1, shift: 0 },
  { kind: "repeated", difficulty: "Intermediate", context: "A courier records the random time for one delivery stop.", name: "stop time", mean: 7, variance: 4, n: 8, scale: 1, shift: 15 },
  { kind: "repeated", difficulty: "Intermediate", context: "A factory packs boxes with random mass variation per item.", name: "mass variation", mean: 0.5, variance: 0.04, n: 30, scale: 2, shift: -5 },
  { kind: "repeated", difficulty: "Intermediate", context: "A call centre models the random duration of one short call.", name: "call duration", mean: 3, variance: 1.21, n: 12, scale: 1, shift: 6 },
  { kind: "repeated", difficulty: "Intermediate", context: "A teacher models the random marking time for one script.", name: "marking time", mean: 4.5, variance: 1.44, n: 16, scale: 1, shift: 10 },
  { kind: "repeated", difficulty: "Intermediate", context: "A delivery route has independent random delays at several junctions.", name: "junction delay", mean: 2, variance: 0.64, n: 9, scale: 3, shift: 0 },
  { kind: "repeated", difficulty: "Intermediate", context: "A cafe models random spend for one customer.", name: "customer spend", mean: 6.5, variance: 2.25, n: 14, scale: 1, shift: -12 },
  { kind: "repeated", difficulty: "Intermediate", context: "A technician models the random energy use of one identical unit.", name: "energy use", mean: 11, variance: 3.24, n: 10, scale: 2, shift: 5 },
  { kind: "repeated", difficulty: "Intermediate", context: "A survey gives a random score for one respondent.", name: "survey score", mean: 5, variance: 2, n: 25, scale: 1, shift: 0 },
  { kind: "repeated", difficulty: "Intermediate", context: "A packaging process models the random fill error for one packet.", name: "fill error", mean: 0, variance: 0.36, n: 18, scale: 4, shift: 2 },
  { kind: "repeated", difficulty: "Intermediate", context: "A shop records random reward points earned by one customer.", name: "reward points", mean: 8, variance: 5, n: 11, scale: 2, shift: -4 },
  { kind: "repeated", difficulty: "Intermediate", context: "A clinic models the random preparation time for one patient.", name: "preparation time", mean: 6, variance: 2.56, n: 7, scale: 3, shift: 9 },
  { kind: "repeated", difficulty: "Intermediate", context: "A fairground game models random tokens won on one play.", name: "tokens", mean: 1.8, variance: 1.16, n: 15, scale: 5, shift: 0 },
  { kind: "repeated", difficulty: "Intermediate", context: "A garden centre models random sales from one tray of plants.", name: "tray sales", mean: 13, variance: 6.25, n: 6, scale: 2, shift: -10 },
  { kind: "repeated", difficulty: "Intermediate", context: "A data system models random processing time for one file.", name: "processing time", mean: 0.8, variance: 0.01, n: 40, scale: 10, shift: 3 },
  { kind: "repeated", difficulty: "Intermediate", context: "A coach models random points scored by one player in a drill.", name: "drill points", mean: 4, variance: 3, n: 13, scale: 2, shift: 0 },
  { kind: "repeated", difficulty: "Intermediate", context: "A maintenance team models random cost for one minor repair.", name: "repair cost", mean: 22, variance: 16, n: 5, scale: 3, shift: 25 },
  { kind: "repeated", difficulty: "Intermediate", context: "A printer models random ink use for one batch.", name: "ink use", mean: 1.5, variance: 0.25, n: 24, scale: 2, shift: -1 },
];

const hardSpecs: QuestionSpec[] = [
  { kind: "covariance", difficulty: "Hard", context: "A portfolio combines two related daily returns.", xName: "return from fund X", yName: "return from fund Y", muX: 5, varX: 4, muY: 3, varY: 9, a: 3, b: 2, c: 0, covariance: 1 },
  { kind: "covariance", difficulty: "Hard", context: "A weather model combines related temperature and humidity indices.", xName: "temperature index", yName: "humidity index", muX: 12, varX: 5, muY: 8, varY: 6, a: 2, b: -1, c: 4, covariance: 1.5 },
  { kind: "covariance", difficulty: "Hard", context: "A transport model combines related bus and train delay variables.", xName: "bus delay", yName: "train delay", muX: 7, varX: 3, muY: 10, varY: 8, a: 4, b: 1, c: -6, covariance: -0.5 },
  { kind: "covariance", difficulty: "Hard", context: "A school combines two related assessment marks.", xName: "coursework mark", yName: "exam mark", muX: 35, varX: 16, muY: 55, varY: 25, a: 1, b: 1, c: 0, covariance: 6 },
  { kind: "covariance", difficulty: "Hard", context: "A factory combines two related sensor readings.", xName: "pressure reading", yName: "temperature reading", muX: 20, varX: 7, muY: 14, varY: 5, a: 2, b: -3, c: 10, covariance: -1 },
  { kind: "covariance", difficulty: "Hard", context: "A retailer combines two related sales variables.", xName: "weekday sales", yName: "weekend sales", muX: 48, varX: 36, muY: 62, varY: 49, a: 1, b: 2, c: -15, covariance: 4 },
  { kind: "covariance", difficulty: "Hard", context: "A health study combines related activity and sleep scores.", xName: "activity score", yName: "sleep score", muX: 70, varX: 64, muY: 40, varY: 36, a: 2, b: 1, c: 5, covariance: 3 },
  { kind: "covariance", difficulty: "Hard", context: "A marketing model combines related advert and referral counts.", xName: "advert sign-ups", yName: "referral sign-ups", muX: 30, varX: 20, muY: 25, varY: 18, a: 3, b: -2, c: 12, covariance: 2 },
  { kind: "covariance", difficulty: "Hard", context: "A farm model combines related rainfall and yield indices.", xName: "rainfall index", yName: "yield index", muX: 9, varX: 2, muY: 16, varY: 7, a: 5, b: 1, c: 0, covariance: 0.8 },
  { kind: "covariance", difficulty: "Hard", context: "A cafe combines related lunch and evening revenue variables.", xName: "lunch revenue", yName: "evening revenue", muX: 18, varX: 10, muY: 22, varY: 12, a: 2, b: 2, c: -4, covariance: 5 },
  { kind: "covariance", difficulty: "Hard", context: "A machine-learning model combines related feature scores.", xName: "feature score X", yName: "feature score Y", muX: 4, varX: 1.5, muY: 6, varY: 2.5, a: 6, b: -1, c: 3, covariance: 0.4 },
  { kind: "covariance", difficulty: "Hard", context: "A finance team combines related income and expense variables.", xName: "income", yName: "expense", muX: 120, varX: 81, muY: 75, varY: 64, a: 1, b: -1, c: 0, covariance: 5 },
  { kind: "covariance", difficulty: "Hard", context: "An engineering model combines related load and stress measurements.", xName: "load", yName: "stress", muX: 15, varX: 4, muY: 11, varY: 3, a: 4, b: 2, c: -7, covariance: -0.75 },
  { kind: "covariance", difficulty: "Hard", context: "A sports analyst combines related attack and defence ratings.", xName: "attack rating", yName: "defence rating", muX: 28, varX: 9, muY: 19, varY: 6, a: 3, b: 1, c: 10, covariance: 2.5 },
  { kind: "covariance", difficulty: "Hard", context: "A logistics model combines related loading and unloading times.", xName: "loading time", yName: "unloading time", muX: 13, varX: 5, muY: 17, varY: 8, a: 2, b: -2, c: 20, covariance: -1.2 },
  { kind: "covariance", difficulty: "Hard", context: "A science model combines related readings from two instruments.", xName: "instrument X reading", yName: "instrument Y reading", muX: 6, varX: 2.25, muY: 9, varY: 4, a: 5, b: 3, c: -2, covariance: 0.6 },
];

const specs: QuestionSpec[] = [
  ...easySpecs,
  ...intermediateLinearSpecs,
  ...repeatedSpecs,
  ...hardSpecs,
];

export const questions: Question[] = specs.map((spec, index) => {
  const questionNumber = index + 1;

  if (spec.kind === "linear") {
    return buildLinearQuestion(questionNumber, spec, spec.difficulty);
  }

  if (spec.kind === "repeated") {
    return buildRepeatedQuestion(questionNumber, spec);
  }

  return buildCovarianceQuestion(questionNumber, spec);
});
