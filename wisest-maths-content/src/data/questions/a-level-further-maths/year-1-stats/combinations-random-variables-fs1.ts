import type { Question, WorkedSolution } from "@/lib/types";

const level = "A-Level Further Maths";
const topic = "Further Maths Year 1: Statistics (Further Statistics 1)";
const subtopic = "Combinations of random variables";
const subtopicId = "fm.y1.stats.combinations-random-variables";

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

const tidy = (n: number) => (Number.isInteger(n) ? String(n) : String(Number(n.toFixed(4))));
const square = (n: number) => n * n;
const signedTerm = (coefficient: number, variable: string) =>
  coefficient >= 0 ? `+ ${coefficient}${variable}` : `- ${Math.abs(coefficient)}${variable}`;

function buildLinearQuestion(index: number, spec: LinearSpec, difficulty: "Easy" | "Intermediate"): Question {
  const id = `${subtopicId}.q${String(index).padStart(3, "0")}`;
  const expression = `${spec.a}X ${signedTerm(spec.b, "Y")} ${spec.c >= 0 ? `+ ${spec.c}` : `- ${Math.abs(spec.c)}`}`;
  const mean = spec.a * spec.muX + spec.b * spec.muY + spec.c;
  const variance = square(spec.a) * spec.varX + square(spec.b) * spec.varY;
  const steps =
    difficulty === "Easy"
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
  "A postal depot records first-class letters and second-class letters sorted each hour.",
  "A juice bar records smoothie orders and coffee orders before noon.",
  "A workshop tracks bolts used and washers used per assembly.",
  "A garden centre models seed packets and bulb packets sold on a weekday.",
  "An orchard models crates of plums and cherries picked in a session.",
  "A charity shop records clothing sales and book sales in tens of pounds.",
  "A college models marks from a portfolio and marks from a presentation.",
  "A workshop records minor faults and serious faults logged in a day.",
  "A ferry models foot passengers and cycle passengers on a crossing.",
  "An archive records photo requests and document requests each day.",
  "A concert hall models tickets sold for the circle and for the stalls.",
  "A dental practice records check-up bookings and treatment bookings.",
  "A depot models pallets loaded by shift 1 and shift 2.",
  "A blog records subscribers from search and from social posts.",
  "A greengrocer models bags of carrots and onions sold.",
  "A deli records sandwiches and salads sold at lunch.",
  "A leisure centre models swim entries and gym entries.",
  "A study centre records geometry sessions and calculus sessions.",
  "An arena records lower-tier tickets and upper-tier tickets.",
  "A tram stop models contactless taps and paper tickets sold.",
  "A gallery records adult tickets and concession tickets.",
  "A rowing club models senior members and junior members.",
  "A copy shop records laminating jobs and binding jobs.",
  "A garage models routine services and diagnostic jobs.",
];

const easySpecs: QuestionSpec[] = linearContexts.map((context, i) => ({
  kind: "linear",
  difficulty: "Easy",
  context,
  xName: "the first quantity",
  yName: "the second quantity",
  muX: 5 + (i % 7),
  varX: 3 + (i % 4),
  muY: 2 + (i % 6),
  varY: 2 + ((3 * i) % 5),
  a: [2, 1, 3, 1][i % 4],
  b: [1, 2, -1, -2][i % 4],
  c: [4, -2, 5, 0, 3, -1][i % 6],
}));

const intermediateLinearSpecs: QuestionSpec[] = [
  { context: "A studio combines two independent weekly income streams.", xName: "class income in tens of pounds", yName: "hire income in tens of pounds", muX: 22, varX: 16, muY: 9, varY: 4, a: 2, b: 3, c: 6 },
  { context: "A metrology lab combines two independent measurement offsets.", xName: "gauge offset", yName: "probe offset", muX: 2, varX: 0.09, muY: -1, varY: 0.16, a: 5, b: -2, c: 3 },
  { context: "An arena models two independent seating revenue streams.", xName: "lower-tier revenue in hundreds", yName: "upper-tier revenue in hundreds", muX: 40, varX: 36, muY: 18, varY: 25, a: 1, b: 2, c: -10 },
  { context: "A build team combines two independent phase-duration estimates.", xName: "groundwork time", yName: "fit-out time", muX: 8, varX: 2.25, muY: 11, varY: 1.96, a: 2, b: 1, c: 5 },
  { context: "A vineyard combines two independent grape-yield variables.", xName: "red-grape yield", yName: "white-grape yield", muX: 18, varX: 7, muY: 13, varY: 4, a: 3, b: -1, c: 12 },
  { context: "A rail operator combines two independent luggage-weight variables.", xName: "checked-bag weight", yName: "hand-bag weight", muX: 23, varX: 10, muY: 6, varY: 3, a: 1, b: 2, c: 0 },
  { context: "A studio combines two independent score bonuses in a game.", xName: "combo bonus", yName: "streak bonus", muX: 45, varX: 49, muY: 28, varY: 16, a: 2, b: 2, c: -15 },
  { context: "A shop combines two independent daily saving totals.", xName: "coupon saving", yName: "member saving", muX: 9, varX: 4, muY: 4, varY: 1, a: 4, b: -3, c: 2 },
  { context: "A college combines two independent assessment components.", xName: "essay mark", yName: "viva mark", muX: 38, varX: 25, muY: 16, varY: 9, a: 1, b: 2, c: 0 },
  { context: "A surgery combines two independent waiting-time components.", xName: "reception time", yName: "assessment time", muX: 10, varX: 9, muY: 18, varY: 4, a: 2, b: 1, c: 4 },
  { context: "A plant combines two independent production outputs.", xName: "line A output", yName: "line B output", muX: 72, varX: 64, muY: 58, varY: 49, a: 3, b: -1, c: 15 },
  { context: "An appeal combines two independent donation variables.", xName: "text donations", yName: "postal donations", muX: 26, varX: 12, muY: 14, varY: 6, a: 2, b: 4, c: -8 },
].map((s) => ({ kind: "linear", difficulty: "Intermediate", ...s }));

const repeatedSpecs: QuestionSpec[] = [
  { kind: "repeated", difficulty: "Intermediate", context: "A machine sells snacks with a random profit per sale.", name: "profit", mean: 0.9, variance: 0.16, n: 25, scale: 1, shift: 0 },
  { kind: "repeated", difficulty: "Intermediate", context: "A rider records the random time to complete one drop-off.", name: "drop-off time", mean: 6, variance: 2.25, n: 9, scale: 1, shift: 12 },
  { kind: "repeated", difficulty: "Intermediate", context: "A plant packs trays with a random mass variation per item.", name: "mass variation", mean: 0.4, variance: 0.09, n: 40, scale: 2, shift: -6 },
  { kind: "repeated", difficulty: "Intermediate", context: "A help desk models the random length of one query.", name: "query length", mean: 4, variance: 1.44, n: 15, scale: 1, shift: 5 },
  { kind: "repeated", difficulty: "Intermediate", context: "An examiner models the random marking time for one paper.", name: "marking time", mean: 5.5, variance: 1.69, n: 12, scale: 1, shift: 8 },
  { kind: "repeated", difficulty: "Intermediate", context: "A cycle route has independent random delays at several crossings.", name: "crossing delay", mean: 1.5, variance: 0.49, n: 10, scale: 3, shift: 0 },
  { kind: "repeated", difficulty: "Intermediate", context: "A bistro models the random spend of one diner.", name: "diner spend", mean: 7.2, variance: 3.24, n: 16, scale: 1, shift: -14 },
  { kind: "repeated", difficulty: "Intermediate", context: "A technician models the random power draw of one identical device.", name: "power draw", mean: 9, variance: 2.89, n: 11, scale: 2, shift: 4 },
  { kind: "repeated", difficulty: "Intermediate", context: "A poll gives a random rating from one respondent.", name: "rating", mean: 6, variance: 3, n: 20, scale: 1, shift: 0 },
  { kind: "repeated", difficulty: "Intermediate", context: "A filler models the random fill error for one bottle.", name: "fill error", mean: 0, variance: 0.25, n: 24, scale: 4, shift: 3 },
  { kind: "repeated", difficulty: "Intermediate", context: "A cafe records random loyalty points earned by one visitor.", name: "loyalty points", mean: 7, variance: 6, n: 13, scale: 2, shift: -5 },
  { kind: "repeated", difficulty: "Intermediate", context: "A ward models the random prep time for one patient.", name: "prep time", mean: 5, variance: 2.89, n: 8, scale: 3, shift: 7 },
  { kind: "repeated", difficulty: "Intermediate", context: "A stall models random prizes won on one go.", name: "prizes", mean: 2.2, variance: 1.44, n: 14, scale: 5, shift: 0 },
  { kind: "repeated", difficulty: "Intermediate", context: "A nursery models random sales from one shelf of plants.", name: "shelf sales", mean: 12, variance: 5.76, n: 7, scale: 2, shift: -9 },
  { kind: "repeated", difficulty: "Intermediate", context: "A server models random processing time for one job.", name: "processing time", mean: 0.6, variance: 0.04, n: 50, scale: 10, shift: 2 },
  { kind: "repeated", difficulty: "Intermediate", context: "A coach models random points scored by one athlete in a set.", name: "set points", mean: 3.5, variance: 2.5, n: 12, scale: 2, shift: 0 },
  { kind: "repeated", difficulty: "Intermediate", context: "A depot models random cost for one routine check.", name: "check cost", mean: 18, variance: 9, n: 6, scale: 3, shift: 20 },
  { kind: "repeated", difficulty: "Intermediate", context: "A press models random ink use for one run.", name: "ink use", mean: 1.2, variance: 0.16, n: 30, scale: 2, shift: -2 },
];

const hardSpecs: QuestionSpec[] = [
  { kind: "covariance", difficulty: "Hard", context: "A fund combines two related weekly returns.", xName: "return from asset X", yName: "return from asset Y", muX: 6, varX: 5, muY: 4, varY: 8, a: 2, b: 3, c: 0, covariance: 1.2 },
  { kind: "covariance", difficulty: "Hard", context: "A climate model combines related pressure and cloud indices.", xName: "pressure index", yName: "cloud index", muX: 14, varX: 6, muY: 9, varY: 5, a: 2, b: -1, c: 3, covariance: 1 },
  { kind: "covariance", difficulty: "Hard", context: "A network model combines related tram and bus delay variables.", xName: "tram delay", yName: "bus delay", muX: 8, varX: 4, muY: 11, varY: 7, a: 3, b: 1, c: -5, covariance: -0.8 },
  { kind: "covariance", difficulty: "Hard", context: "A college combines two related assessment marks.", xName: "portfolio mark", yName: "test mark", muX: 33, varX: 20, muY: 52, varY: 30, a: 1, b: 1, c: 0, covariance: 7 },
  { kind: "covariance", difficulty: "Hard", context: "A plant combines two related sensor readings.", xName: "flow reading", yName: "temperature reading", muX: 22, varX: 8, muY: 15, varY: 6, a: 2, b: -3, c: 8, covariance: -1.5 },
  { kind: "covariance", difficulty: "Hard", context: "A retailer combines two related sales variables.", xName: "in-store sales", yName: "online sales", muX: 46, varX: 40, muY: 60, varY: 52, a: 1, b: 2, c: -12, covariance: 5 },
  { kind: "covariance", difficulty: "Hard", context: "A wellbeing study combines related steps and sleep scores.", xName: "steps score", yName: "sleep score", muX: 68, varX: 70, muY: 42, varY: 40, a: 2, b: 1, c: 6, covariance: 4 },
  { kind: "covariance", difficulty: "Hard", context: "A campaign combines related email and referral counts.", xName: "email sign-ups", yName: "referral sign-ups", muX: 28, varX: 22, muY: 24, varY: 16, a: 3, b: -2, c: 10, covariance: 2.5 },
  { kind: "covariance", difficulty: "Hard", context: "A farm model combines related sun and yield indices.", xName: "sunshine index", yName: "yield index", muX: 10, varX: 3, muY: 15, varY: 6, a: 4, b: 1, c: 0, covariance: 1 },
  { kind: "covariance", difficulty: "Hard", context: "A bistro combines related lunch and dinner revenue variables.", xName: "lunch revenue", yName: "dinner revenue", muX: 20, varX: 12, muY: 24, varY: 14, a: 2, b: 2, c: -6, covariance: 4.5 },
  { kind: "covariance", difficulty: "Hard", context: "A model combines related feature scores.", xName: "feature score X", yName: "feature score Y", muX: 5, varX: 2, muY: 7, varY: 3, a: 5, b: -1, c: 2, covariance: 0.5 },
  { kind: "covariance", difficulty: "Hard", context: "A finance team combines related revenue and cost variables.", xName: "revenue", yName: "cost", muX: 130, varX: 90, muY: 80, varY: 70, a: 1, b: -1, c: 0, covariance: 6 },
  { kind: "covariance", difficulty: "Hard", context: "An engineering model combines related force and strain measurements.", xName: "force", yName: "strain", muX: 16, varX: 5, muY: 12, varY: 4, a: 4, b: 2, c: -6, covariance: -0.6 },
  { kind: "covariance", difficulty: "Hard", context: "An analyst combines related attack and midfield ratings.", xName: "attack rating", yName: "midfield rating", muX: 26, varX: 10, muY: 21, varY: 7, a: 3, b: 1, c: 9, covariance: 3 },
  { kind: "covariance", difficulty: "Hard", context: "A logistics model combines related pick and pack times.", xName: "pick time", yName: "pack time", muX: 12, varX: 6, muY: 16, varY: 9, a: 2, b: -2, c: 18, covariance: -1 },
  { kind: "covariance", difficulty: "Hard", context: "A lab combines related readings from two instruments.", xName: "instrument X reading", yName: "instrument Y reading", muX: 7, varX: 3, muY: 10, varY: 5, a: 5, b: 3, c: -3, covariance: 0.8 },
];

const specs: QuestionSpec[] = [...easySpecs, ...intermediateLinearSpecs, ...repeatedSpecs, ...hardSpecs];

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
