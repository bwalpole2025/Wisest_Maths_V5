import type { Diagram, Question } from "@/lib/types";

const LEVEL = "A-Level Further Maths";
const TOPIC = "Further Maths Year 2: Statistics (Further Statistics 2)";
const SUBTOPIC = "The continuous uniform distribution";
const SUBTOPIC_ID = "fm.y2.stats.continuous-uniform";

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

interface UniformCase {
  context: string;
  a: number;
  b: number;
  unit?: string;
}

interface IntervalCase extends UniformCase {
  c: number;
  d: number;
}

interface TailCase extends UniformCase {
  value: number;
  side: "less" | "greater";
}

interface InverseCase extends UniformCase {
  probability: number;
  side: "lower" | "upper";
}

interface LinearCase extends UniformCase {
  m: number;
  n: number;
}

const qid = (n: number): string => `${SUBTOPIC_ID}.q${String(n).padStart(3, "0")}`;

function sf(value: number, digits = 4): string {
  return Number(value.toPrecision(digits)).toString();
}

function dp(value: number, digits = 3): string {
  return Number(value.toFixed(digits)).toString();
}

function nice(value: number): string {
  return Number.isInteger(value) ? String(value) : dp(value, 3);
}

function latexNumber(value: number): string {
  return Number.isInteger(value) ? String(value) : dp(value, 3);
}

function frac(numerator: number, denominator: number): string {
  return `\\dfrac{${latexNumber(numerator)}}{${latexNumber(denominator)}}`;
}

function prob(value: number): string {
  return sf(value, value < 0.1 ? 3 : 4);
}

function step(stepNumber: number, description: string, workingLatex: string, explanation: string): Step {
  return { stepNumber, description, workingLatex, explanation, diagram: null };
}

function diagram(a: number, b: number, highlight?: string): Diagram {
  return {
    kind: "descriptive",
    type: "continuous-uniform-density",
    description: `A rectangular probability density graph. The density is constant from x = ${a} to x = ${b} and zero outside this interval.${highlight ? ` The region ${highlight} is shaded.` : ""}`,
    caption: `The density for $X \\sim U(${a}, ${b})$ is a rectangle with total area $1$.`,
    alt: `Rectangular probability density from ${a} to ${b}.`,
  };
}

function makeQuestion(index: number, shell: Shell): Question {
  return {
    id: qid(index),
    level: LEVEL,
    topic: TOPIC,
    subtopic: SUBTOPIC,
    subtopicId: SUBTOPIC_ID,
    difficulty: shell.difficulty,
    marks: shell.marks,
    answerType: shell.answerType,
    tags: ["continuous uniform", "rectangular distribution", ...shell.tags],
    questionText: shell.questionText,
    questionDiagram: null,
    workedSolution: {
      steps: shell.steps,
      finalAnswer: shell.finalAnswer,
    },
  };
}

function definitionQuestion({ context, a, b, unit }: UniformCase): Shell {
  const width = b - a;
  const density = 1 / width;
  const mean = (a + b) / 2;
  const variance = (width * width) / 12;
  const unitText = unit ? ` ${unit}` : "";
  return {
    difficulty: "Easy",
    marks: 5,
    answerType: "expression",
    tags: ["pdf", "cdf", "mean", "variance"],
    questionText: `${context} The random variable $X$ is uniformly distributed on $[${a}, ${b}]$. (a) Write down the probability density function of $X$. (b) Find $E(X)$ and $\\operatorname{Var}(X)$.`,
    steps: [
      step(1, "Identify the interval", `a=${a},\\quad b=${b}`, "For a continuous uniform distribution, the only information needed is the lower endpoint and the upper endpoint."),
      step(2, "Find the width", `b-a=${b}-${a}=${width}`, "The probability is spread evenly across the whole interval, so the width controls the constant height of the density."),
      step(3, "Write the density height", `f(x)=${frac(1, width)}\\quad \\text{for }${a}\\le x\\le ${b}`, "The area under a density must be $1$. A rectangle of width $b-a$ therefore needs height $1/(b-a)$."),
      step(4, "Set the density to zero outside the interval", `f(x)=0\\quad \\text{otherwise}`, "Values outside the stated interval are impossible under the model, so the density is zero there."),
      step(5, "Use the mean formula", `E(X)=\\dfrac{${a}+${b}}{2}=${nice(mean)}`, "The mean is the midpoint of the interval because the rectangular density is perfectly balanced."),
      step(6, "Use the variance formula", `\\operatorname{Var}(X)=\\dfrac{(${b}-${a})^2}{12}=\\dfrac{${width * width}}{12}=${nice(variance)}`, "The variance depends only on the width: wider intervals spread values further from the centre."),
      step(7, "State the results in context", `E(X)=${nice(mean)}${unitText},\\quad \\operatorname{Var}(X)=${nice(variance)}`, "The final answer gives the centre and spread of the model."),
    ],
    finalAnswer: `$f(x)=${frac(1, width)}$ for $${a}\\le x\\le ${b}$ and $0$ otherwise; $E(X)=${nice(mean)}$, $\\operatorname{Var}(X)=${nice(variance)}$.`,
  };
}

function cdfQuestion({ context, a, b }: UniformCase): Shell {
  const width = b - a;
  return {
    difficulty: "Easy",
    marks: 5,
    answerType: "expression",
    tags: ["cdf", "piecewise function"],
    questionText: `${context} Let $X\\sim U(${a}, ${b})$. Write down the cumulative distribution function $F(x)$.`,
    steps: [
      step(1, "Recall the density", `f(x)=${frac(1, width)}\\quad (${a}\\le x\\le ${b})`, "The CDF is found by accumulating the constant density from the left of the interval."),
      step(2, "Handle values below the interval", `F(x)=0\\quad (x<${a})`, "No probability has accumulated before the lower endpoint because $X$ cannot be below $a$."),
      step(3, "Integrate inside the interval", `F(x)=\\int_${a}^{x}${frac(1, width)}\\,dt`, "For $x$ between the endpoints, the CDF is the area of the rectangle from $a$ up to $x$."),
      step(4, "Evaluate the integral", `F(x)=\\dfrac{x-${a}}{${width}}\\quad (${a}\\le x\\le ${b})`, "The accumulated area is width $x-a$ multiplied by height $1/(b-a)$."),
      step(5, "Handle values above the interval", `F(x)=1\\quad (x>${b})`, "Once $x$ has passed the upper endpoint, the whole probability mass has been included."),
      step(6, "Write the piecewise CDF", `F(x)=\\begin{cases}0,&x<${a},\\\\ ${frac(1, width)}(x-${a}),&${a}\\le x\\le ${b},\\\\ 1,&x>${b}.\\end{cases}`, "The three pieces match the three regions: before, during and after the uniform interval."),
    ],
    finalAnswer: `$F(x)=0$ for $x<${a}$, $F(x)=${frac(1, width)}(x-${a})$ for $${a}\\le x\\le ${b}$, and $F(x)=1$ for $x>${b}$.`,
  };
}

function intervalQuestion({ context, a, b, c, d, unit }: IntervalCase): Shell {
  const width = b - a;
  const intervalWidth = d - c;
  const p = intervalWidth / width;
  const unitText = unit ? `\\,\\text{${unit}}` : "";
  return {
    difficulty: "Easy",
    marks: 4,
    answerType: "numeric",
    tags: ["probability", "interval"],
    questionText: `${context} Suppose $X\\sim U(${a}, ${b})$. Find $P(${c}<X<${d})$, giving your answer as a decimal.`,
    steps: [
      step(1, "State the total interval width", `b-a=${b}-${a}=${width}`, "The total width is the whole range over which the probability is spread evenly."),
      step(2, "State the requested interval width", `${d}-${c}=${intervalWidth}`, "For a uniform distribution, probability is proportional to interval length."),
      step(3, "Use the uniform probability rule", `P(${c}<X<${d})=\\dfrac{${d}-${c}}{${b}-${a}}`, "The event is a sub-interval inside the support, so its probability is its width divided by the total width."),
      step(4, "Substitute the widths", `P(${c}<X<${d})=${frac(intervalWidth, width)}`, "Both endpoints lie within the uniform interval, so no truncation is needed."),
      step(5, "Convert to a decimal", `${frac(intervalWidth, width)}=${prob(p)}`, "A decimal is requested, so we evaluate the fraction."),
      step(6, "Interpret the answer", `P(${c}<X<${d})=${prob(p)}`, `The interval has width $${intervalWidth}${unitText}$ out of the full width $${width}${unitText}$, so the probability is $${prob(p)}$.`),
    ],
    finalAnswer: `$P(${c}<X<${d})=${prob(p)}$.`,
  };
}

function tailQuestion({ context, a, b, value, side }: TailCase): Shell {
  const width = b - a;
  const eventWidth = side === "less" ? value - a : b - value;
  const symbol = side === "less" ? "<" : ">";
  const p = eventWidth / width;
  const eventLatex = `X${symbol}${value}`;
  return {
    difficulty: "Easy",
    marks: 4,
    answerType: "numeric",
    tags: ["probability", "tail probability"],
    questionText: `${context} Let $X\\sim U(${a}, ${b})$. Find $P(${eventLatex})$.`,
    steps: [
      step(1, "Find the total width", `${b}-${a}=${width}`, "The full interval carries probability $1$."),
      step(2, "Find the event width", side === "less" ? `${value}-${a}=${eventWidth}` : `${b}-${value}=${eventWidth}`, "The relevant tail is just a length along the uniform interval."),
      step(3, "Use area as probability", `P(${eventLatex})=\\dfrac{${eventWidth}}{${width}}`, "With a constant density, the probability of a tail is its width divided by the total width."),
      step(4, "Evaluate", `\\dfrac{${eventWidth}}{${width}}=${prob(p)}`, "This converts the width ratio into the required probability."),
      step(5, "Check the size", `${eventWidth}<${width}`, "The event is only part of the interval, so the probability should be between $0$ and $1$."),
      step(6, "State the answer", `P(${eventLatex})=${prob(p)}`, "The value is the area of the appropriate rectangular tail."),
    ],
    finalAnswer: `$P(${eventLatex})=${prob(p)}$.`,
  };
}

function inverseQuestion({ context, a, b, probability, side }: InverseCase): Shell {
  const width = b - a;
  const eventWidth = probability * width;
  const value = side === "lower" ? a + eventWidth : b - eventWidth;
  const eventLatex = side === "lower" ? `X<c` : `X>c`;
  return {
    difficulty: "Intermediate",
    marks: 6,
    answerType: "numeric",
    tags: ["inverse probability", "percentile"],
    questionText: `${context} The random variable $X$ has distribution $U(${a}, ${b})$. Find the value of $c$ such that $P(${eventLatex})=${probability}$.`,
    steps: [
      step(1, "Find the total width", `b-a=${b}-${a}=${width}`, "The whole interval has width $b-a$ and total probability $1$."),
      step(2, "Connect probability to length", `\\text{event width}=(${probability})(${width})=${nice(eventWidth)}`, "For a uniform distribution, a probability is the same fraction of the total width."),
      step(3, "Choose the correct side of the interval", side === "lower" ? "\\text{lower tail starts at }a" : "\\text{upper tail ends at }b", "The condition says which end of the interval contains the probability."),
      step(4, "Write the endpoint equation", side === "lower" ? `c-${a}=${nice(eventWidth)}` : `${b}-c=${nice(eventWidth)}`, "The distance from the relevant endpoint to $c$ must equal the event width."),
      step(5, "Solve for c", side === "lower" ? `c=${a}+${nice(eventWidth)}=${nice(value)}` : `c=${b}-${nice(eventWidth)}=${nice(value)}`, "Adding or subtracting the event width places the cutoff in the correct position."),
      step(6, "Check the position", `${a}<${nice(value)}<${b}`, "The cutoff lies inside the support, so it is a valid value for this uniform distribution."),
      step(7, "State the value", `c=${nice(value)}`, "This cutoff leaves the required proportion of the rectangle on the stated side."),
      step(8, "Interpret the result", side === "lower" ? `P(X<${nice(value)})=${probability}` : `P(X>${nice(value)})=${probability}`, "The final statement matches the probability condition in the question."),
      step(9, "Use continuity", `P(X=${nice(value)})=0`, "For a continuous distribution, strict and non-strict inequalities give the same probability because a single point has probability zero."),
    ],
    finalAnswer: `$c=${nice(value)}$.`,
  };
}

function percentileQuestion({ context, a, b, probability }: InverseCase): Shell {
  const width = b - a;
  const value = a + probability * width;
  const percent = probability * 100;
  return {
    difficulty: "Intermediate",
    marks: 6,
    answerType: "numeric",
    tags: ["percentile", "cdf"],
    questionText: `${context} If $X\\sim U(${a}, ${b})$, find the ${nice(percent)}th percentile of $X$.`,
    steps: [
      step(1, "Translate the percentile", `P(X\\le q)=${probability}`, "The ${nice(percent)}th percentile is the value with ${nice(percent)}% of the distribution at or below it."),
      step(2, "Use the CDF inside the interval", `F(q)=\\dfrac{q-${a}}{${width}}`, "Inside a uniform interval, the CDF increases linearly from $0$ to $1$."),
      step(3, "Set the CDF equal to the percentile probability", `\\dfrac{q-${a}}{${width}}=${probability}`, "This equation says that the accumulated fraction of the rectangle is the required percentile."),
      step(4, "Multiply by the width", `q-${a}=(${probability})(${width})=${nice(probability * width)}`, "Multiplying by the total width converts the probability into a distance along the interval."),
      step(5, "Solve for q", `q=${a}+${nice(probability * width)}=${nice(value)}`, "Adding this distance to the lower endpoint gives the percentile value."),
      step(6, "Check the value", `${a}<${nice(value)}<${b}`, "A percentile between $0$ and $100$ should fall inside the support."),
      step(7, "State the percentile", `q=${nice(value)}`, "This is the point where the requested proportion of the distribution lies to the left."),
      step(8, "Use continuity", `P(X\\le ${nice(value)})=P(X<${nice(value)})`, "The distinction between $<$ and $\\le$ does not matter for a continuous random variable."),
      step(9, "Conclude in context", `\\text{${nice(percent)}th percentile}=${nice(value)}`, "The result is a direct read-off from the linear CDF."),
    ],
    finalAnswer: `The ${nice(percent)}th percentile is $${nice(value)}$.`,
  };
}

function expectationQuestion({ context, a, b }: UniformCase): Shell {
  const width = b - a;
  const mean = (a + b) / 2;
  const secondMoment = (a * a + a * b + b * b) / 3;
  const variance = (width * width) / 12;
  return {
    difficulty: "Intermediate",
    marks: 7,
    answerType: "numeric",
    tags: ["expectation", "variance", "moments"],
    questionText: `${context} Let $X\\sim U(${a}, ${b})$. Use integration to find $E(X)$ and $\\operatorname{Var}(X)$.`,
    steps: [
      step(1, "Write the density", `f(x)=${frac(1, width)}\\quad (${a}\\le x\\le ${b})`, "Expectation for a continuous variable is found by integrating against the density."),
      step(2, "Set up E(X)", `E(X)=\\int_${a}^{${b}}x${frac(1, width)}\\,dx`, "The integral averages all possible $x$ values, weighted by their density."),
      step(3, "Evaluate E(X)", `E(X)=${frac(1, width)}\\left[\\dfrac{x^2}{2}\\right]_${a}^{${b}}=${nice(mean)}`, "The rectangle is symmetric, so the integral gives the midpoint of the interval."),
      step(4, "Set up E(X^2)", `E(X^2)=\\int_${a}^{${b}}x^2${frac(1, width)}\\,dx`, "Variance uses $E(X^2)$ as well as $E(X)$, so we average the squared values."),
      step(5, "Evaluate E(X^2)", `E(X^2)=${frac(1, width)}\\left[\\dfrac{x^3}{3}\\right]_${a}^{${b}}=${nice(secondMoment)}`, "This captures the average squared distance from zero, not yet from the mean."),
      step(6, "Use the variance identity", `\\operatorname{Var}(X)=E(X^2)-[E(X)]^2`, "Variance is the average squared value minus the square of the average value."),
      step(7, "Substitute the moments", `\\operatorname{Var}(X)=${nice(secondMoment)}-${nice(mean)}^2=${nice(variance)}`, "Subtracting the square of the mean recentres the spread around the mean."),
      step(8, "Check against the shortcut", `\\dfrac{(${b}-${a})^2}{12}=\\dfrac{${width * width}}{12}=${nice(variance)}`, "The result agrees with the standard uniform variance formula, which is a useful check."),
      step(9, "State the result", `E(X)=${nice(mean)},\\quad \\operatorname{Var}(X)=${nice(variance)}`, "The mean is the centre of the interval and the variance measures the width-driven spread."),
    ],
    finalAnswer: `$E(X)=${nice(mean)}$ and $\\operatorname{Var}(X)=${nice(variance)}$.`,
  };
}

function linearQuestion({ context, a, b, m, n }: LinearCase): Shell {
  const width = b - a;
  const meanX = (a + b) / 2;
  const varX = (width * width) / 12;
  const meanY = m * meanX + n;
  const varY = m * m * varX;
  const lower = Math.min(m * a + n, m * b + n);
  const upper = Math.max(m * a + n, m * b + n);
  return {
    difficulty: "Intermediate",
    marks: 7,
    answerType: "numeric",
    tags: ["linear transformation", "mean", "variance"],
    questionText: `${context} Let $X\\sim U(${a}, ${b})$ and define $Y=${m}X${n >= 0 ? `+${n}` : n}$. Find the distribution of $Y$, $E(Y)$ and $\\operatorname{Var}(Y)$.`,
    steps: [
      step(1, "Find the endpoints for Y", `Y=${m}X${n >= 0 ? `+${n}` : n}`, "A linear transformation sends the endpoints of the interval to the endpoints of the new interval."),
      step(2, "Transform the lower endpoint", `${m}(${a})${n >= 0 ? `+${n}` : n}=${nice(m * a + n)}`, "Substituting the lower endpoint gives one end of the new support."),
      step(3, "Transform the upper endpoint", `${m}(${b})${n >= 0 ? `+${n}` : n}=${nice(m * b + n)}`, "Substituting the upper endpoint gives the other end of the new support."),
      step(4, "State the distribution of Y", `Y\\sim U(${nice(lower)},${nice(upper)})`, "A linear transformation of a continuous uniform variable is still uniform on the transformed interval."),
      step(5, "Find E(X)", `E(X)=\\dfrac{${a}+${b}}{2}=${nice(meanX)}`, "The original mean is the midpoint of the original interval."),
      step(6, "Transform the mean", `E(Y)=${m}E(X)${n >= 0 ? `+${n}` : n}=${nice(meanY)}`, "Expectation follows the same linear transformation as the random variable."),
      step(7, "Find Var(X)", `\\operatorname{Var}(X)=\\dfrac{(${b}-${a})^2}{12}=${nice(varX)}`, "The original variance depends only on the interval width."),
      step(8, "Transform the variance", `\\operatorname{Var}(Y)=${m}^2\\operatorname{Var}(X)=${nice(varY)}`, "Adding a constant does not change spread, while multiplying by $m$ scales variance by $m^2$."),
      step(9, "State the results", `Y\\sim U(${nice(lower)},${nice(upper)}),\\quad E(Y)=${nice(meanY)},\\quad \\operatorname{Var}(Y)=${nice(varY)}`, "The distribution and moments now describe the transformed variable."),
    ],
    finalAnswer: `$Y\\sim U(${nice(lower)}, ${nice(upper)})$, $E(Y)=${nice(meanY)}$, $\\operatorname{Var}(Y)=${nice(varY)}$.`,
  };
}

function unknownEndpointQuestion({ context, mean, variance }: { context: string; mean: number; variance: number }): Shell {
  const width = Math.sqrt(12 * variance);
  const a = mean - width / 2;
  const b = mean + width / 2;
  return {
    difficulty: "Hard",
    marks: 8,
    answerType: "numeric",
    tags: ["unknown parameters", "mean", "variance"],
    questionText: `${context} A random variable $X$ has a continuous uniform distribution on $[a,b]$. Given that $E(X)=${mean}$ and $\\operatorname{Var}(X)=${variance}$, find $a$ and $b$.`,
    steps: [
      step(1, "Write the mean equation", `\\dfrac{a+b}{2}=${mean}`, "The centre of a uniform interval is its mean."),
      step(2, "Rearrange the mean equation", `a+b=${2 * mean}`, "This fixes the midpoint but not the width."),
      step(3, "Write the variance equation", `\\dfrac{(b-a)^2}{12}=${variance}`, "The variance gives the square of the interval width divided by $12$."),
      step(4, "Solve for the squared width", `(b-a)^2=${12 * variance}`, "Multiplying by $12$ isolates the square of the width."),
      step(5, "Take the positive width", `b-a=\\sqrt{${12 * variance}}=${nice(width)}`, "The width must be positive because $b$ is greater than $a$."),
      step(6, "Use sum and difference equations", `a+b=${2 * mean},\\quad b-a=${nice(width)}`, "The sum gives the centre and the difference gives the width."),
      step(7, "Add the equations", `2b=${nice(2 * mean + width)}`, "Adding removes $a$, leaving the upper endpoint."),
      step(8, "Find b", `b=${nice(b)}`, "Dividing by $2$ gives the upper endpoint."),
      step(9, "Find a", `a=${2 * mean}-${nice(b)}=${nice(a)}`, "Substituting back into the sum equation gives the lower endpoint."),
      step(10, "Check the mean", `\\dfrac{${nice(a)}+${nice(b)}}{2}=${mean}`, "The endpoints have the required midpoint."),
      step(11, "Check the variance", `\\dfrac{(${nice(b)}-${nice(a)})^2}{12}=${variance}`, "The endpoints also have the required spread."),
      step(12, "State the distribution", `X\\sim U(${nice(a)},${nice(b)})`, "The two endpoints fully determine the continuous uniform distribution."),
      step(13, "Conclude", `a=${nice(a)},\\quad b=${nice(b)}`, "Both parameters have been found from the moment information."),
    ],
    finalAnswer: `$a=${nice(a)}$ and $b=${nice(b)}$.`,
  };
}

function conditionalQuestion({ context, a, b, c, d }: IntervalCase): Shell {
  const numeratorWidth = d - c;
  const denominatorWidth = b - c;
  const p = numeratorWidth / denominatorWidth;
  return {
    difficulty: "Hard",
    marks: 8,
    answerType: "numeric",
    tags: ["conditional probability", "interval"],
    questionText: `${context} Let $X\\sim U(${a}, ${b})$. Given that $X>${c}$, find $P(X<${d}\\mid X>${c})$.`,
    steps: [
      step(1, "Define the condition", `X>${c}`, "The condition restricts attention to the part of the original interval to the right of $c$."),
      step(2, "Find the width of the condition", `${b}-${c}=${denominatorWidth}`, "For a uniform distribution, conditional probabilities over intervals compare lengths within the restricted interval."),
      step(3, "Define the required event inside the condition", `${c}<X<${d}`, "If $X>${c}$ and $X<${d}$ both hold, then $X$ lies between $c$ and $d$."),
      step(4, "Find the intersection width", `${d}-${c}=${numeratorWidth}`, "This is the part of the conditioned interval that also satisfies the required event."),
      step(5, "Write the conditional probability ratio", `P(X<${d}\\mid X>${c})=\\dfrac{P(${c}<X<${d})}{P(X>${c})}`, "Conditional probability divides the overlap by the probability of the condition."),
      step(6, "Replace probabilities by widths", `=\\dfrac{${numeratorWidth}/${b - a}}{${denominatorWidth}/${b - a}}`, "The common total width cancels because both events come from the same uniform distribution."),
      step(7, "Cancel the total width", `=\\dfrac{${numeratorWidth}}{${denominatorWidth}}`, "After conditioning, only relative lengths inside the restricted interval matter."),
      step(8, "Evaluate", `\\dfrac{${numeratorWidth}}{${denominatorWidth}}=${prob(p)}`, "This gives the fraction of the conditioned interval that lies below $d$."),
      step(9, "Check the value", `0<${prob(p)}<1`, "A conditional probability must still lie between $0$ and $1$."),
      step(10, "Interpret the result", `P(X<${d}\\mid X>${c})=${prob(p)}`, "Among values already known to be above $c$, this is the proportion that are still below $d$."),
      step(11, "Use continuity", `P(X=${c})=P(X=${d})=0`, "Including or excluding the endpoints would not change the answer."),
      step(12, "State the final answer", `${prob(p)}`, "The calculation is complete once the conditional length ratio is evaluated."),
      step(13, "Summarise the geometry", `\\text{probability}=\\dfrac{\\text{favourable length}}{\\text{conditioned length}}`, "The rectangular density makes the conditional probability a simple length comparison."),
    ],
    finalAnswer: `$P(X<${d}\\mid X>${c})=${prob(p)}$.`,
  };
}

function modellingQuestion({ context, a, b, c, d }: IntervalCase): Shell {
  const width = b - a;
  const p = (d - c) / width;
  return {
    difficulty: "Hard",
    marks: 8,
    answerType: "numeric",
    tags: ["modelling", "expected frequency", "probability"],
    questionText: `${context} A quantity $X$ is modelled by $U(${a}, ${b})$. In a sample of $240$ independent observations, estimate how many observations are expected to lie between $${c}$ and $${d}$.`,
    steps: [
      step(1, "State the model", `X\\sim U(${a},${b})`, "The model says all equal-width intervals inside the support are equally likely."),
      step(2, "Find the total width", `${b}-${a}=${width}`, "This is the width over which the full probability $1$ is spread."),
      step(3, "Find the target width", `${d}-${c}=${d - c}`, "The target interval is the range of values counted in the sample."),
      step(4, "Find the probability for one observation", `P(${c}<X<${d})=\\dfrac{${d - c}}{${width}}=${prob(p)}`, "The probability for a single observation is the target width divided by the total width."),
      step(5, "Connect probability to expected frequency", `\\text{expected frequency}=n p`, "For repeated independent observations, the expected count is sample size times probability."),
      step(6, "Substitute n = 240", `240\\times ${prob(p)}`, "There are $240$ observations, each with the same probability of falling in the interval."),
      step(7, "Calculate the expected count", `240\\times ${prob(p)}=${nice(240 * p)}`, "Multiplying gives the long-run average number in that interval."),
      step(8, "Round if necessary", `\\text{expected count}\\approx ${nice(240 * p)}`, "Expected counts need not be whole numbers, but in context this is the estimated number of observations."),
      step(9, "Check the scale", `${nice(240 * p)}<240`, "Only part of the support is being counted, so the expected count should be less than the sample size."),
      step(10, "State the estimate", `${nice(240 * p)}\\text{ observations}`, "The model-based estimate follows directly from the uniform probability."),
      step(11, "Interpret the result", `\\text{about }${nice(240 * p)}\\text{ observations}`, "In an actual sample the count may vary, but this is the expected count under the model."),
      step(12, "Note the modelling assumption", "\\text{independent observations from the same uniform model}", "The expected frequency calculation relies on each observation following the stated distribution."),
      step(13, "Conclude", `${nice(240 * p)}`, "This completes the probability-to-frequency calculation."),
    ],
    finalAnswer: `About $${nice(240 * p)}$ observations are expected.`,
  };
}

const definitionCases: UniformCase[] = [
  { context: "A bus arrival delay, in minutes, is modelled uniformly between $0$ and $12$.", a: 0, b: 12, unit: "minutes" },
  { context: "A machine fill error, in grams, is modelled uniformly between $-4$ and $4$.", a: -4, b: 4, unit: "g" },
  { context: "The lifetime, in hours, of a component during a short test is modelled uniformly between $20$ and $32$.", a: 20, b: 32, unit: "hours" },
  { context: "The waiting time, in minutes, for a train is modelled uniformly between $2$ and $18$.", a: 2, b: 18, unit: "minutes" },
  { context: "The rounding error, in cm, from a measuring device is modelled uniformly between $-0.5$ and $0.5$.", a: -0.5, b: 0.5, unit: "cm" },
  { context: "A random calibration offset is modelled uniformly between $-3$ and $9$.", a: -3, b: 9 },
];

const cdfCases: UniformCase[] = [
  { context: "A call duration error is modelled by a continuous uniform distribution.", a: 1, b: 9 },
  { context: "A selected time within a booking window is modelled uniformly.", a: 4, b: 16 },
  { context: "A measurement error has a rectangular distribution.", a: -2, b: 6 },
  { context: "A delivery time is modelled uniformly over a fixed interval.", a: 10, b: 30 },
];

const intervalCases: IntervalCase[] = [
  { context: "The time until the next shuttle, in minutes, is uniformly distributed.", a: 0, b: 20, c: 5, d: 12, unit: "minutes" },
  { context: "A sensor reading is uniformly distributed over its operating range.", a: 10, b: 50, c: 18, d: 34 },
  { context: "A packaging error, in grams, is uniformly distributed.", a: -6, b: 6, c: -2, d: 3, unit: "g" },
  { context: "A delivery delay, in hours, is uniformly distributed.", a: 1, b: 13, c: 4, d: 9, unit: "hours" },
  { context: "A randomly selected angle, in degrees, is uniformly distributed.", a: 20, b: 80, c: 35, d: 62 },
  { context: "A temperature error, in degrees Celsius, is uniformly distributed.", a: -5, b: 15, c: 0, d: 7 },
  { context: "A waiting time, in seconds, is uniformly distributed.", a: 30, b: 90, c: 45, d: 75, unit: "seconds" },
  { context: "A file upload time, in seconds, is uniformly distributed.", a: 8, b: 28, c: 11, d: 19, unit: "seconds" },
  { context: "A random length, in cm, is uniformly distributed.", a: 100, b: 140, c: 112, d: 128, unit: "cm" },
  { context: "A randomly generated voltage is uniformly distributed.", a: 2, b: 10, c: 3.5, d: 8 },
  { context: "A commuter's walking time, in minutes, is uniformly distributed.", a: 6, b: 18, c: 9, d: 15, unit: "minutes" },
  { context: "A daily demand variable is uniformly distributed.", a: 40, b: 100, c: 55, d: 85 },
  { context: "A randomly selected mass, in grams, is uniformly distributed.", a: 200, b: 260, c: 215, d: 245, unit: "g" },
  { context: "A queueing time, in minutes, is uniformly distributed.", a: 1, b: 11, c: 2.5, d: 7.5, unit: "minutes" },
  { context: "A simulation value is uniformly distributed.", a: -20, b: 20, c: -8, d: 14 },
  { context: "A machine warm-up time, in seconds, is uniformly distributed.", a: 15, b: 75, c: 30, d: 66, unit: "seconds" },
];

const tailCases: TailCase[] = [
  { context: "A response time, in seconds, is uniformly distributed.", a: 0, b: 30, value: 18, side: "less" },
  { context: "A measurement error is uniformly distributed.", a: -8, b: 8, value: 2, side: "greater" },
  { context: "A delivery time is uniformly distributed.", a: 12, b: 36, value: 20, side: "less" },
  { context: "A fill amount is uniformly distributed.", a: 490, b: 510, value: 504, side: "greater" },
];

const inverseCases: InverseCase[] = [
  { context: "A bus waiting time, in minutes, is uniformly distributed.", a: 0, b: 15, probability: 0.4, side: "lower" },
  { context: "A machine error, in mm, is uniformly distributed.", a: -2, b: 6, probability: 0.25, side: "upper" },
  { context: "A download time, in seconds, is uniformly distributed.", a: 20, b: 80, probability: 0.7, side: "lower" },
  { context: "A service time, in minutes, is uniformly distributed.", a: 3, b: 23, probability: 0.15, side: "upper" },
  { context: "A temperature reading is uniformly distributed.", a: 5, b: 45, probability: 0.6, side: "lower" },
  { context: "A randomly selected length is uniformly distributed.", a: 100, b: 180, probability: 0.3, side: "upper" },
  { context: "A randomly selected reaction time is uniformly distributed.", a: 0.2, b: 1.4, probability: 0.5, side: "lower" },
  { context: "A delivery window error is uniformly distributed.", a: -15, b: 25, probability: 0.2, side: "upper" },
];

const percentileCases: InverseCase[] = [
  { context: "A variable is uniformly distributed over a fixed tolerance interval.", a: 0, b: 40, probability: 0.2, side: "lower" },
  { context: "A waiting time has a continuous uniform distribution.", a: 5, b: 25, probability: 0.75, side: "lower" },
  { context: "A generated random score is uniformly distributed.", a: 50, b: 90, probability: 0.1, side: "lower" },
  { context: "A calibration value has a rectangular distribution.", a: -10, b: 10, probability: 0.9, side: "lower" },
  { context: "A component thickness is uniformly distributed.", a: 1.2, b: 2.4, probability: 0.25, side: "lower" },
  { context: "A customer service time is uniformly distributed.", a: 6, b: 26, probability: 0.6, side: "lower" },
];

const expectationCases: UniformCase[] = [
  { context: "A continuous measurement error is rectangular.", a: -3, b: 5 },
  { context: "A processing time is uniformly distributed.", a: 4, b: 16 },
  { context: "A randomly selected load is uniformly distributed.", a: 30, b: 54 },
  { context: "A location error is uniformly distributed.", a: -12, b: 0 },
  { context: "A simulation input is uniformly distributed.", a: 2, b: 14 },
  { context: "A component lifetime in a controlled test is uniformly distributed.", a: 100, b: 160 },
  { context: "A batch processing duration is uniformly distributed.", a: 15, b: 45 },
  { context: "A random demand model is rectangular.", a: 60, b: 120 },
];

const linearCases: LinearCase[] = [
  { context: "A raw score is converted to a scaled score.", a: 0, b: 10, m: 3, n: 20 },
  { context: "A temperature in degrees Celsius is converted by a linear rule.", a: 10, b: 30, m: 1.8, n: 32 },
  { context: "A random input is transformed by a calibration equation.", a: -2, b: 4, m: 5, n: -1 },
  { context: "A timing variable is converted into a charge.", a: 2, b: 12, m: 0.5, n: 4 },
  { context: "A sensor output is linearly rescaled.", a: 3, b: 9, m: 2, n: -6 },
  { context: "A uniformly distributed index is transformed for a model.", a: 20, b: 60, m: -0.25, n: 25 },
  { context: "A uniformly distributed raw measurement is adjusted.", a: -4, b: 8, m: 1.5, n: 3 },
];

const unknownEndpointCases = [
  { context: "A tolerance interval is unknown.", mean: 10, variance: 12 },
  { context: "A rectangular error model has unknown endpoints.", mean: 5, variance: 3 },
  { context: "A uniform lifetime model has unknown limits.", mean: 40, variance: 75 },
];

const conditionalCases: IntervalCase[] = [
  { context: "A quality score is uniformly distributed.", a: 0, b: 100, c: 40, d: 70 },
  { context: "A waiting time is uniformly distributed.", a: 0, b: 30, c: 10, d: 18 },
  { context: "A measurement is uniformly distributed.", a: -5, b: 15, c: 0, d: 9 },
  { context: "A machine output value is uniformly distributed.", a: 50, b: 110, c: 65, d: 95 },
];

const modellingCases: IntervalCase[] = [
  { context: "The daily amount of a consumable, in litres, is modelled uniformly.", a: 20, b: 80, c: 35, d: 55 },
  { context: "The charging time of a device, in minutes, is modelled uniformly.", a: 40, b: 100, c: 50, d: 85 },
  { context: "The diameter of a manufactured part, in mm, is modelled uniformly.", a: 9.8, b: 10.2, c: 9.9, d: 10.05 },
  { context: "The completion time of a task, in minutes, is modelled uniformly.", a: 12, b: 72, c: 24, d: 48 },
];

const shells: Shell[] = [
  ...definitionCases.map(definitionQuestion),
  ...cdfCases.map(cdfQuestion),
  ...intervalCases.map(intervalQuestion),
  ...tailCases.map(tailQuestion),
  ...inverseCases.map(inverseQuestion),
  ...percentileCases.map(percentileQuestion),
  ...expectationCases.map(expectationQuestion),
  ...linearCases.map(linearQuestion),
  ...unknownEndpointCases.map(unknownEndpointQuestion),
  ...conditionalCases.map(conditionalQuestion),
  ...modellingCases.map(modellingQuestion),
];

if (shells.length !== 70) {
  throw new Error(`Expected 70 ${SUBTOPIC} questions, got ${shells.length}`);
}

export const questions: Question[] = shells.map((shell, index) => ({
  ...makeQuestion(index + 1, shell),
  questionDiagram:
    shell.tags.includes("probability") || shell.tags.includes("tail probability")
      ? diagram(
          Number(shell.questionText.match(/U\((-?\d+(?:\.\d+)?), (-?\d+(?:\.\d+)?)\)/)?.[1] ?? 0),
          Number(shell.questionText.match(/U\((-?\d+(?:\.\d+)?), (-?\d+(?:\.\d+)?)\)/)?.[2] ?? 1),
          "for the probability being found",
        )
      : null,
}));
