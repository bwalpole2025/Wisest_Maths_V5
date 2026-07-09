import { Question } from "@/lib/types";

const LEVEL = "A-Level Further Maths";
const TOPIC = "Further Maths Year 2: Statistics (Further Statistics 2)";
const SUBTOPIC = "Continuous random variables";
const SUBTOPIC_ID = "fm.y2.stats.continuous-rv";

type Difficulty = Question["difficulty"];
type Step = Question["workedSolution"]["steps"][number];

interface Shell {
  difficulty: Difficulty;
  marks: number;
  answerType: string;
  tags: string[];
  questionText: string;
  steps: Step[];
  finalAnswer: string;
}

const qid = (n: number): string => `${SUBTOPIC_ID}.q${String(n).padStart(3, "0")}`;
const round = (value: number, places = 4): number => Number(value.toFixed(places));
const fmt = (value: number, places = 4): string => round(value, places).toString();
const money = (value: number): string => Number(value.toFixed(3)).toString();
const pow = (base: number, exponent: number): number => base ** exponent;

function step(stepNumber: number, description: string, workingLatex: string, explanation: string): Step {
  return { stepNumber, description, workingLatex, explanation, diagram: null };
}

function makeQuestion(index: number, shell: Shell): Question {
  return {
    level: LEVEL,
    topic: TOPIC,
    subtopic: SUBTOPIC,
    subtopicId: SUBTOPIC_ID,
    questionDiagram: null,
    id: qid(index),
    tags: shell.tags,
    difficulty: shell.difficulty,
    marks: shell.marks,
    answerType: shell.answerType,
    questionText: shell.questionText,
    workedSolution: {
      steps: shell.steps,
      finalAnswer: shell.finalAnswer,
    },
  };
}

function uniformPdf({ a, b, t, context }: { a: number; b: number; t: number; context: string }): Shell {
  const width = b - a;
  const k = 1 / width;
  const prob = (b - t) / width;
  const mean = (a + b) / 2;
  return {
    difficulty: "Easy",
    marks: 5,
    answerType: "numeric",
    tags: ["pdf", "uniform-density", "cdf", "expectation"],
    questionText: `${context} is modelled by a continuous random variable $X$ with probability density function $f(x)=k$ for $${a}\\leq x\\leq ${b}$, and $f(x)=0$ otherwise. Find $k$, $F(x)$ for $${a}\\leq x\\leq ${b}$, $P(X>${t})$, and $E(X)$.`,
    steps: [
      step(1, "Use the total probability condition", `\\int_{${a}}^{${b}} k\\,dx=1`, "A probability density must have total area 1 over its support."),
      step(2, "Evaluate the area", `k(${b}-${a})=1`, "For a constant density, the area is simply the rectangle height times its width."),
      step(3, "Find the density height", `k=\\dfrac1{${width}}=${fmt(k)}`, "The wider the interval, the lower the constant density must be."),
      step(4, "Integrate from the left endpoint for the CDF", `F(x)=\\int_{${a}}^x ${fmt(k)}\\,dt=\\dfrac{x-${a}}{${width}}`, "The cumulative distribution function measures the area accumulated up to $x$."),
      step(5, "Find the upper-tail probability", `P(X>${t})=\\int_{${t}}^{${b}} ${fmt(k)}\\,dx=\\dfrac{${b}-${t}}{${width}}=${fmt(prob)}`, "For a uniform density, probability is proportional to interval length."),
      step(6, "Use symmetry for the mean", `E(X)=\\dfrac{${a}+${b}}2=${fmt(mean)}`, "The balance point of a constant density is the midpoint of the interval."),
      step(7, "State the answers", `k=${fmt(k)},\\quad F(x)=\\dfrac{x-${a}}{${width}},\\quad P(X>${t})=${fmt(prob)},\\quad E(X)=${fmt(mean)}`, "Collecting the results makes clear which quantities answer each part of the question."),
    ],
    finalAnswer: `$k=${fmt(k)}$, $F(x)=\\dfrac{x-${a}}{${width}}$ on $${a}\\leq x\\leq ${b}$, $P(X>${t})=${fmt(prob)}$, and $E(X)=${fmt(mean)}$.`,
  };
}

function increasingLinearPdf({ b, t, context }: { b: number; t: number; context: string }): Shell {
  const k = 2 / (b * b);
  const prob = 1 - (t * t) / (b * b);
  const mean = (2 * b) / 3;
  return {
    difficulty: "Easy",
    marks: 5,
    answerType: "numeric",
    tags: ["pdf", "linear-density", "cdf", "expectation"],
    questionText: `${context} has density $f(x)=kx$ for $0\\leq x\\leq ${b}$, and $0$ otherwise. Find $k$, $P(X>${t})$, and $E(X)$.`,
    steps: [
      step(1, "Normalise the density", `\\int_0^{${b}} kx\\,dx=1`, "The area under a valid density curve must be 1."),
      step(2, "Integrate the linear density", `\\left[\\dfrac{kx^2}{2}\\right]_0^{${b}}=1`, "Integrating $x$ gives the triangular area under the increasing line."),
      step(3, "Solve for $k$", `\\dfrac{k(${b})^2}{2}=1\\quad\\Rightarrow\\quad k=${fmt(k)}`, "The constant scales the line so the total area is exactly 1."),
      step(4, "Write the CDF", `F(x)=\\int_0^x ${fmt(k)}t\\,dt=\\dfrac{x^2}{${b * b}}`, "The CDF is the accumulated area from 0 to $x$."),
      step(5, "Use the complement for the upper tail", `P(X>${t})=1-F(${t})=1-\\dfrac{${t * t}}{${b * b}}=${fmt(prob)}`, "The complement is quicker because the CDF gives $P(X\\leq t)$."),
      step(6, "Find the expectation", `E(X)=\\int_0^{${b}} x(${fmt(k)}x)\\,dx=\\left[\\dfrac{${fmt(k)}x^3}{3}\\right]_0^{${b}}=${fmt(mean)}`, "Expectation weights each value by its density, so larger values count more here."),
      step(7, "State the answers", `k=${fmt(k)},\\quad P(X>${t})=${fmt(prob)},\\quad E(X)=${fmt(mean)}`, "The mean lies above the midpoint because the density increases with $x$."),
    ],
    finalAnswer: `$k=${fmt(k)}$, $P(X>${t})=${fmt(prob)}$, and $E(X)=${fmt(mean)}$.`,
  };
}

function decreasingLinearPdf({ b, t, context }: { b: number; t: number; context: string }): Shell {
  const k = 2 / (b * b);
  const f = `${fmt(k)}(${b}-x)`;
  const prob = k * ((b * b) / 2 - (b * t - (t * t) / 2));
  const mean = b / 3;
  return {
    difficulty: "Easy",
    marks: 5,
    answerType: "numeric",
    tags: ["pdf", "linear-density", "tail-probability", "expectation"],
    questionText: `${context} has density $f(x)=k(${b}-x)$ for $0\\leq x\\leq ${b}$, and $0$ otherwise. Find $k$, $P(X>${t})$, and $E(X)$.`,
    steps: [
      step(1, "Normalise the density", `\\int_0^{${b}} k(${b}-x)\\,dx=1`, "The total area under the density must be 1."),
      step(2, "Integrate over the support", `k\\left[${b}x-\\dfrac{x^2}{2}\\right]_0^{${b}}=1`, "This area is a triangle with its highest point at $x=0$."),
      step(3, "Solve for $k$", `k\\left(${b * b}-\\dfrac{${b * b}}2\\right)=1\\quad\\Rightarrow\\quad k=${fmt(k)}`, "The scaling constant makes the triangular area a total probability."),
      step(4, "Set up the upper-tail probability", `P(X>${t})=\\int_{${t}}^{${b}} ${f}\\,dx`, "Only the area to the right of $t$ is required."),
      step(5, "Evaluate the tail integral", `P(X>${t})=${fmt(k)}\\left[${b}x-\\dfrac{x^2}{2}\\right]_{${t}}^{${b}}=${fmt(prob)}`, "The upper tail is smaller than for a uniform distribution because density is falling."),
      step(6, "Set up the expectation", `E(X)=\\int_0^{${b}} x\\,{${f}}\\,dx`, "Expectation is the first moment of the density about the origin."),
      step(7, "Evaluate the expectation", `E(X)=${fmt(k)}\\int_0^{${b}}(${b}x-x^2)\\,dx=${fmt(mean)}`, "The mean is below the midpoint because more probability is concentrated near 0."),
      step(8, "State the answers", `k=${fmt(k)},\\quad P(X>${t})=${fmt(prob)},\\quad E(X)=${fmt(mean)}`, "These values summarise the normalised density and its main consequences."),
    ],
    finalAnswer: `$k=${fmt(k)}$, $P(X>${t})=${fmt(prob)}$, and $E(X)=${fmt(mean)}$.`,
  };
}

function powerPdf({ a, n, t, context }: { a: number; n: number; t: number; context: string }): Shell {
  const k = (n + 1) / pow(a, n + 1);
  const prob = pow(t / a, n + 1);
  const mean = ((n + 1) / (n + 2)) * a;
  const ex2 = ((n + 1) / (n + 3)) * a * a;
  const variance = ex2 - mean * mean;
  return {
    difficulty: "Intermediate",
    marks: 7,
    answerType: "numeric",
    tags: ["pdf", "power-density", "cdf", "variance"],
    questionText: `${context} has density $f(x)=kx^{${n}}$ for $0\\leq x\\leq ${a}$, and $0$ otherwise. Find $k$, $F(${t})$, $E(X)$ and $\\operatorname{Var}(X)$.`,
    steps: [
      step(1, "Use the normalising condition", `\\int_0^{${a}} kx^{${n}}\\,dx=1`, "A density is valid only when its total area is 1."),
      step(2, "Integrate the density", `k\\left[\\dfrac{x^{${n + 1}}}{${n + 1}}\\right]_0^{${a}}=1`, "The power rule turns the density into an area expression."),
      step(3, "Solve for $k$", `k\\dfrac{${a}^{${n + 1}}}{${n + 1}}=1\\quad\\Rightarrow\\quad k=${money(k)}`, "The constant rescales the curve to become a probability density."),
      step(4, "Write the CDF formula", `F(x)=\\int_0^x ${money(k)}t^{${n}}\\,dt=\\left(\\dfrac{x}{${a}}\\right)^{${n + 1}}`, "The CDF is the fraction of total accumulated area up to $x$."),
      step(5, "Evaluate the requested CDF value", `F(${t})=\\left(\\dfrac{${t}}{${a}}\\right)^{${n + 1}}=${fmt(prob)}`, "Substitution gives the probability that $X$ is at most this value."),
      step(6, "Set up the first moment", `E(X)=\\int_0^{${a}} x\\,{${money(k)}x^{${n}}}\\,dx`, "Multiplying by $x$ forms the probability-weighted average."),
      step(7, "Evaluate the first moment", `E(X)=${money(k)}\\left[\\dfrac{x^{${n + 2}}}{${n + 2}}\\right]_0^{${a}}=${fmt(mean)}`, "The mean is pulled toward the right because the density increases with $x$."),
      step(8, "Set up the second moment", `E(X^2)=\\int_0^{${a}} x^2\\,{${money(k)}x^{${n}}}\\,dx`, "Variance is easiest to find from $E(X^2)-[E(X)]^2$."),
      step(9, "Evaluate the second moment", `E(X^2)=${money(k)}\\left[\\dfrac{x^{${n + 3}}}{${n + 3}}\\right]_0^{${a}}=${fmt(ex2)}`, "The second moment measures spread from the origin before centring at the mean."),
      step(10, "Find the variance", `\\operatorname{Var}(X)=${fmt(ex2)}-${fmt(mean)}^2=${fmt(variance)}`, "Subtracting the square of the mean converts the raw second moment into spread about the mean."),
    ],
    finalAnswer: `$k=${money(k)}$, $F(${t})=${fmt(prob)}$, $E(X)=${fmt(mean)}$, and $\\operatorname{Var}(X)=${fmt(variance)}$.`,
  };
}

function affinePdf({ a, s, t, context }: { a: number; s: number; t: number; context: string }): Shell {
  const area = (a * a) / 2 + s * a;
  const k = 1 / area;
  const cdf = ((t * t) / 2 + s * t) / area;
  const mean = ((a * a * a) / 3 + (s * a * a) / 2) / area;
  const ex2 = (pow(a, 4) / 4 + (s * pow(a, 3)) / 3) / area;
  const variance = ex2 - mean * mean;
  return {
    difficulty: "Intermediate",
    marks: 7,
    answerType: "numeric",
    tags: ["pdf", "affine-density", "cdf", "variance"],
    questionText: `${context} has density $f(x)=k(x+${s})$ for $0\\leq x\\leq ${a}$, and $0$ otherwise. Find $k$, $P(X\\leq ${t})$, $E(X)$ and $\\operatorname{Var}(X)$.`,
    steps: [
      step(1, "Normalise the density", `\\int_0^{${a}} k(x+${s})\\,dx=1`, "The area under the full density curve represents total probability."),
      step(2, "Integrate the bracket", `k\\left[\\dfrac{x^2}{2}+${s}x\\right]_0^{${a}}=1`, "The density combines a sloping part and a constant offset."),
      step(3, "Solve for the constant", `k\\left(\\dfrac{${a}^2}{2}+${s}(${a})\\right)=1\\quad\\Rightarrow\\quad k=${fmt(k)}`, "The normalising constant makes the total area equal to 1."),
      step(4, "Build the CDF", `F(x)=${fmt(k)}\\left(\\dfrac{x^2}{2}+${s}x\\right)`, "Accumulated area from 0 to $x$ gives the CDF on the support."),
      step(5, "Evaluate the probability", `P(X\\leq ${t})=F(${t})=${fmt(cdf)}`, "For a continuous variable, $P(X\\leq t)$ is read directly from the CDF."),
      step(6, "Set up $E(X)$", `E(X)=\\int_0^{${a}}x\\,{${fmt(k)}(x+${s})}\\,dx`, "The mean is found by weighting each value by its density."),
      step(7, "Expand the first moment integrand", `E(X)=${fmt(k)}\\int_0^{${a}}(x^2+${s}x)\\,dx`, "Expanding separates the integral into standard powers of $x$."),
      step(8, "Evaluate the mean", `E(X)=${fmt(mean)}`, "The positive slope shifts the mean to the right of the interval's midpoint."),
      step(9, "Set up $E(X^2)$", `E(X^2)=\\int_0^{${a}}x^2\\,{${fmt(k)}(x+${s})}\\,dx`, "The second moment is needed before variance can be calculated."),
      step(10, "Evaluate the second moment", `E(X^2)=${fmt(k)}\\int_0^{${a}}(x^3+${s}x^2)\\,dx=${fmt(ex2)}`, "This gives the raw measure of spread from zero."),
      step(11, "Find the variance", `\\operatorname{Var}(X)=${fmt(ex2)}-${fmt(mean)}^2=${fmt(variance)}`, "Variance centres the second moment around the mean."),
    ],
    finalAnswer: `$k=${fmt(k)}$, $P(X\\leq ${t})=${fmt(cdf)}$, $E(X)=${fmt(mean)}$, and $\\operatorname{Var}(X)=${fmt(variance)}$.`,
  };
}

function moundPdf({ a, c, d, context }: { a: number; c: number; d: number; context: string }): Shell {
  const k = 6 / pow(a, 3);
  const probFrom = (x: number) => k * ((a * x * x) / 2 - (x * x * x) / 3);
  const denominator = 1 - probFrom(d);
  const numerator = 1 - probFrom(c);
  const conditional = numerator / denominator;
  const mean = a / 2;
  const variance = (a * a) / 20;
  return {
    difficulty: "Hard",
    marks: 9,
    answerType: "numeric",
    tags: ["pdf", "quadratic-density", "conditional-probability", "variance"],
    questionText: `${context} has density $f(x)=kx(${a}-x)$ for $0\\leq x\\leq ${a}$, and $0$ otherwise. Find $k$, $E(X)$, $\\operatorname{Var}(X)$, and $P(X>${c}\\mid X>${d})$.`,
    steps: [
      step(1, "Apply the total probability condition", `\\int_0^{${a}}kx(${a}-x)\\,dx=1`, "The unknown constant is fixed by making the whole area under the curve equal 1."),
      step(2, "Expand the integrand", `kx(${a}-x)=k(${a}x-x^2)`, "Expanding gives simple powers that can be integrated directly."),
      step(3, "Integrate the density", `k\\left[\\dfrac{${a}x^2}{2}-\\dfrac{x^3}{3}\\right]_0^{${a}}=1`, "This accumulates the area under the curved density."),
      step(4, "Solve for $k$", `k\\left(\\dfrac{${a}^3}{2}-\\dfrac{${a}^3}{3}\\right)=1\\quad\\Rightarrow\\quad k=${fmt(k)}`, "The bracket is the unscaled area, so its reciprocal is the required constant."),
      step(5, "Notice the symmetry", `f(x)=f(${a}-x)`, "The density is symmetric about the midpoint of the interval."),
      step(6, "Use symmetry for the mean", `E(X)=\\dfrac{${a}}2=${fmt(mean)}`, "For a symmetric density, the balance point is the centre of symmetry."),
      step(7, "Set up the second moment", `E(X^2)=\\int_0^{${a}}x^2\\,{${fmt(k)}x(${a}-x)}\\,dx`, "Variance needs $E(X^2)$ as well as the mean."),
      step(8, "Expand for the second moment", `E(X^2)=${fmt(k)}\\int_0^{${a}}(${a}x^3-x^4)\\,dx`, "Expanding keeps the calculation as a pair of power integrals."),
      step(9, "Evaluate the second moment", `E(X^2)=${fmt(k)}\\left[\\dfrac{${a}x^4}{4}-\\dfrac{x^5}{5}\\right]_0^{${a}}=${fmt(variance + mean * mean)}`, "This raw second moment measures spread from zero."),
      step(10, "Find the variance", `\\operatorname{Var}(X)=${fmt(variance + mean * mean)}-${fmt(mean)}^2=${fmt(variance)}`, "Subtracting the squared mean recentres the spread around the expected value."),
      step(11, "Write the CDF on the support", `F(x)=${fmt(k)}\\left(\\dfrac{${a}x^2}{2}-\\dfrac{x^3}{3}\\right)`, "Conditional probabilities are easier once tail probabilities are expressed through the CDF."),
      step(12, "Convert the conditional probability", `P(X>${c}\\mid X>${d})=\\dfrac{P(X>${c})}{P(X>${d})}`, "Because $c>d$, the event $X>c$ is contained within the event $X>d$."),
      step(13, "Evaluate the two tail probabilities", `P(X>${c})=${fmt(numerator)},\\quad P(X>${d})=${fmt(denominator)}`, "Each tail probability is $1-F(x)$ at the threshold."),
      step(14, "Divide the tail probabilities", `P(X>${c}\\mid X>${d})=\\dfrac{${fmt(numerator)}}{${fmt(denominator)}}=${fmt(conditional)}`, "Conditioning rescales the remaining probability space to the part where $X>d$."),
    ],
    finalAnswer: `$k=${fmt(k)}$, $E(X)=${fmt(mean)}$, $\\operatorname{Var}(X)=${fmt(variance)}$, and $P(X>${c}\\mid X>${d})=${fmt(conditional)}$.`,
  };
}

function squareTransform({ a, n, y, context }: { a: number; n: number; y: number; context: string }): Shell {
  const k = (n + 1) / pow(a, n + 1);
  const upper = a * a;
  const exponent = (n - 1) / 2;
  const coefficient = (n + 1) / (2 * pow(a, n + 1));
  const cdfAtY = pow(Math.sqrt(y) / a, n + 1);
  return {
    difficulty: "Hard",
    marks: 9,
    answerType: "expression",
    tags: ["transformation", "pdf", "cdf", "functions-of-random-variables"],
    questionText: `${context} has density $f_X(x)=kx^{${n}}$ for $0\\leq x\\leq ${a}$, and $0$ otherwise. Let $Y=X^2$. Find $k$, the density of $Y$, and $P(Y\\leq ${y})$.`,
    steps: [
      step(1, "Normalise the density of $X$", `\\int_0^{${a}}kx^{${n}}\\,dx=1`, "Before transforming the variable, the original density must be fully specified."),
      step(2, "Integrate the density", `k\\left[\\dfrac{x^{${n + 1}}}{${n + 1}}\\right]_0^{${a}}=1`, "The power rule gives the total unscaled area."),
      step(3, "Solve for $k$", `k=${money(k)}`, "This scales $f_X$ so that all probability over the support is 1."),
      step(4, "Find the support of $Y$", `0\\leq X\\leq ${a}\\quad\\Rightarrow\\quad 0\\leq Y\\leq ${upper}`, "Squaring maps the original interval onto a new non-negative interval."),
      step(5, "Use the inverse transformation", `y=x^2\\quad\\Rightarrow\\quad x=\\sqrt{y}`, "The positive square root is used because $X$ is non-negative."),
      step(6, "Differentiate the inverse", `\\dfrac{dx}{dy}=\\dfrac{1}{2\\sqrt{y}}`, "The derivative adjusts for the stretching of the horizontal scale under the transformation."),
      step(7, "Apply the density transformation formula", `f_Y(y)=f_X(\\sqrt{y})\\left|\\dfrac{dx}{dy}\\right|`, "Probability is preserved when the density is transformed through a monotonic function."),
      step(8, "Substitute into the formula", `f_Y(y)=${money(k)}(\\sqrt{y})^{${n}}\\cdot\\dfrac1{2\\sqrt{y}}`, "Replace $x$ by the inverse expression in terms of $y$."),
      step(9, "Simplify the power of $y$", `f_Y(y)=${money(coefficient)}y^{${exponent}}`, "The powers combine because $(\\sqrt{y})^n/\\sqrt{y}=y^{(n-1)/2}$."),
      step(10, "State the density with its support", `f_Y(y)=${money(coefficient)}y^{${exponent}},\\quad 0\\leq y\\leq ${upper}`, "A transformed density must include the interval on which it is valid."),
      step(11, "Convert the probability statement", `P(Y\\leq ${y})=P(X^2\\leq ${y})=P(X\\leq \\sqrt{${y}})`, "Since $X$ is non-negative, squaring preserves the order."),
      step(12, "Use the CDF of $X$", `P(X\\leq \\sqrt{${y}})=\\left(\\dfrac{\\sqrt{${y}}}{${a}}\\right)^{${n + 1}}`, "The original CDF gives the probability once the transformed threshold is converted back."),
      step(13, "Evaluate the probability", `P(Y\\leq ${y})=${fmt(cdfAtY)}`, "This is the required cumulative probability for the transformed variable."),
    ],
    finalAnswer: `$k=${money(k)}$, $f_Y(y)=${money(coefficient)}y^{${exponent}}$ for $0\\leq y\\leq ${upper}$, and $P(Y\\leq ${y})=${fmt(cdfAtY)}$.`,
  };
}

const uniformSpecs = [
  { a: 0, b: 4, t: 3, context: "The charging time in hours" },
  { a: 2, b: 8, t: 6, context: "The lifetime in years" },
  { a: 1, b: 5, t: 3, context: "The delivery delay in days" },
  { a: 3, b: 9, t: 7, context: "The repair time in hours" },
  { a: 10, b: 18, t: 15, context: "The mass in kilograms" },
  { a: 4, b: 12, t: 9, context: "The waiting time in minutes" },
  { a: 6, b: 14, t: 11, context: "The temperature reading" },
  { a: 20, b: 32, t: 26, context: "The journey time in minutes" },
];

const increasingSpecs = [
  { b: 4, t: 3, context: "A random error magnitude $X$" },
  { b: 5, t: 2, context: "A service score $X$" },
  { b: 6, t: 4, context: "A component wear measure $X$" },
  { b: 8, t: 5, context: "A rainfall amount $X$" },
  { b: 10, t: 7, context: "A delay length $X$" },
  { b: 12, t: 8, context: "A cable stretch $X$" },
  { b: 7, t: 4, context: "A demand index $X$" },
  { b: 9, t: 6, context: "A filling time $X$" },
];

const decreasingSpecs = [
  { b: 4, t: 1, context: "A small defect length $X$" },
  { b: 5, t: 2, context: "A response time $X$" },
  { b: 6, t: 3, context: "A waiting penalty $X$" },
  { b: 8, t: 3, context: "A machine tolerance $X$" },
  { b: 10, t: 4, context: "A loss amount $X$" },
  { b: 12, t: 5, context: "A delivery lead time $X$" },
  { b: 7, t: 2, context: "A surface roughness measure $X$" },
  { b: 9, t: 4, context: "A completion time $X$" },
];

const powerSpecs = [
  { a: 2, n: 2, t: 1, context: "The random variable $X$" },
  { a: 3, n: 2, t: 2, context: "The random variable $X$" },
  { a: 4, n: 2, t: 3, context: "The random variable $X$" },
  { a: 5, n: 2, t: 3, context: "The random variable $X$" },
  { a: 2, n: 3, t: 1, context: "The random variable $X$" },
  { a: 3, n: 3, t: 2, context: "The random variable $X$" },
  { a: 4, n: 3, t: 2, context: "The random variable $X$" },
  { a: 5, n: 3, t: 4, context: "The random variable $X$" },
  { a: 3, n: 4, t: 2, context: "The random variable $X$" },
  { a: 4, n: 4, t: 3, context: "The random variable $X$" },
  { a: 5, n: 4, t: 3, context: "The random variable $X$" },
  { a: 6, n: 4, t: 4, context: "The random variable $X$" },
  { a: 4, n: 5, t: 2, context: "The random variable $X$" },
  { a: 5, n: 5, t: 4, context: "The random variable $X$" },
  { a: 6, n: 5, t: 5, context: "The random variable $X$" },
  { a: 7, n: 5, t: 4, context: "The random variable $X$" },
];

const affineSpecs = [
  { a: 4, s: 1, t: 2, context: "A continuous random variable $X$" },
  { a: 5, s: 1, t: 3, context: "A continuous random variable $X$" },
  { a: 6, s: 1, t: 4, context: "A continuous random variable $X$" },
  { a: 4, s: 2, t: 3, context: "A continuous random variable $X$" },
  { a: 5, s: 2, t: 2, context: "A continuous random variable $X$" },
  { a: 6, s: 2, t: 5, context: "A continuous random variable $X$" },
  { a: 7, s: 2, t: 4, context: "A continuous random variable $X$" },
  { a: 5, s: 3, t: 4, context: "A continuous random variable $X$" },
  { a: 6, s: 3, t: 3, context: "A continuous random variable $X$" },
  { a: 8, s: 3, t: 6, context: "A continuous random variable $X$" },
  { a: 7, s: 4, t: 5, context: "A continuous random variable $X$" },
  { a: 8, s: 4, t: 4, context: "A continuous random variable $X$" },
  { a: 9, s: 4, t: 7, context: "A continuous random variable $X$" },
  { a: 10, s: 5, t: 6, context: "A continuous random variable $X$" },
];

const moundSpecs = [
  { a: 4, c: 3, d: 2, context: "A continuous random variable $X$" },
  { a: 5, c: 4, d: 2, context: "A continuous random variable $X$" },
  { a: 6, c: 4, d: 3, context: "A continuous random variable $X$" },
  { a: 8, c: 6, d: 4, context: "A continuous random variable $X$" },
  { a: 10, c: 7, d: 5, context: "A continuous random variable $X$" },
  { a: 12, c: 9, d: 6, context: "A continuous random variable $X$" },
  { a: 7, c: 5, d: 3, context: "A continuous random variable $X$" },
  { a: 9, c: 7, d: 4, context: "A continuous random variable $X$" },
  { a: 11, c: 8, d: 5, context: "A continuous random variable $X$" },
  { a: 6, c: 5, d: 2, context: "A continuous random variable $X$" },
];

const transformSpecs = [
  { a: 2, n: 1, y: 1, context: "A continuous random variable $X$" },
  { a: 3, n: 1, y: 4, context: "A continuous random variable $X$" },
  { a: 4, n: 2, y: 9, context: "A continuous random variable $X$" },
  { a: 5, n: 2, y: 16, context: "A continuous random variable $X$" },
  { a: 3, n: 3, y: 4, context: "A continuous random variable $X$" },
  { a: 6, n: 3, y: 25, context: "A continuous random variable $X$" },
];

export const questions: Question[] = [
  ...uniformSpecs.map((spec, index) => makeQuestion(index + 1, uniformPdf(spec))),
  ...increasingSpecs.map((spec, index) => makeQuestion(index + 9, increasingLinearPdf(spec))),
  ...decreasingSpecs.map((spec, index) => makeQuestion(index + 17, decreasingLinearPdf(spec))),
  ...powerSpecs.map((spec, index) => makeQuestion(index + 25, powerPdf(spec))),
  ...affineSpecs.map((spec, index) => makeQuestion(index + 41, affinePdf(spec))),
  ...moundSpecs.map((spec, index) => makeQuestion(index + 55, moundPdf(spec))),
  ...transformSpecs.map((spec, index) => makeQuestion(index + 65, squareTransform(spec))),
];
