import type { Difficulty, Question, SolutionStep } from "@/lib/types";

const LEVEL = "A-Level Further Maths";
const TOPIC = "Further Maths Year 2: Mechanics (Further Mechanics 2)";
const SUBTOPIC = "Centres of mass: solids and calculus";
const SUBTOPIC_ID = "fm.y2.mech.com-calculus";

type StepInput = Omit<SolutionStep, "stepNumber" | "diagram">;
type Fr = { n: number; d: number };

function gcd(a: number, b: number): number {
  return b === 0 ? Math.abs(a) : gcd(b, a % b);
}

function fr(n: number, d = 1): Fr {
  if (d === 0) throw new Error("Zero denominator");
  const sign = d < 0 ? -1 : 1;
  const g = gcd(n, d);
  return { n: sign * n / g, d: Math.abs(d) / g };
}

const add = (a: Fr, b: Fr): Fr => fr(a.n * b.d + b.n * a.d, a.d * b.d);
const sub = (a: Fr, b: Fr): Fr => fr(a.n * b.d - b.n * a.d, a.d * b.d);
const mul = (a: Fr, b: Fr): Fr => fr(a.n * b.n, a.d * b.d);
const div = (a: Fr, b: Fr): Fr => fr(a.n * b.d, a.d * b.n);

function latexFr(value: Fr): string {
  return value.d === 1 ? `${value.n}` : `\\frac{${value.n}}{${value.d}}`;
}

function piCoeff(value: Fr): string {
  if (value.n === 1 && value.d === 1) return "\\pi";
  return `${latexFr(value)}\\pi`;
}

function pow(base: number, exponent: number): number {
  return base ** exponent;
}

function variablePower(variable: string, exponent: number): string {
  return exponent === 1 ? variable : `${variable}^{${exponent}}`;
}

function monomial(coefficient: number, variable: string, exponent: number): string {
  const body = variablePower(variable, exponent);
  return coefficient === 1 ? body : `${coefficient}${body}`;
}

function squareMonomial(coefficient: number, variable: string, exponent: number): string {
  return monomial(coefficient * coefficient, variable, 2 * exponent);
}

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

type PowerSolidSpec = {
  coefficient: number;
  exponent: number;
  limit: number;
};

function powerSolidAboutXAxis(number: number, spec: PowerSolidSpec): Question {
  const { coefficient: k, exponent: p, limit: a } = spec;
  const y = monomial(k, "x", p);
  const ySquared = squareMonomial(k, "x", p);
  const volume = fr(k * k * pow(a, 2 * p + 1), 2 * p + 1);
  const moment = fr(k * k * pow(a, 2 * p + 2), 2 * p + 2);
  const xBar = div(moment, volume);

  return question(
    number,
    "Easy",
    4,
    ["centres of mass", "solids of revolution", "x-axis", "calculus"],
    "value",
    `A uniform solid is formed by rotating the region under $y=${y}$ from $x=0$ to $x=${a}$ through $360^\\circ$ about the $x$-axis. Find the distance of its centre of mass from the origin.`,
    [
      {
        description: "Use volume and first moment",
        workingLatex: "\\bar{x}=\\dfrac{\\int x\\,dV}{\\int dV}",
        explanation: "The centre of mass coordinate is a weighted average of the positions of many thin volume slices.",
      },
      {
        description: "Write the volume element",
        workingLatex: "dV=\\pi y^2\\,dx",
        explanation: "Rotating a thin vertical strip about the $x$-axis creates a thin disc whose cross-sectional area is $\\pi y^2$.",
      },
      {
        description: "Square the radius",
        workingLatex: `y^2=(${y})^2=${ySquared}`,
        explanation: "The radius of each disc is the height of the curve, so the volume contribution depends on the square of that height.",
      },
      {
        description: "Find the volume",
        workingLatex: `V=\\pi\\int_0^{${a}}${ySquared}\\,dx=${piCoeff(volume)}`,
        explanation: "This adds all the thin discs from the origin to the end of the solid.",
      },
      {
        description: "Find the first moment",
        workingLatex: `M=\\pi\\int_0^{${a}}x(${ySquared})\\,dx=${piCoeff(moment)}`,
        explanation: "Multiplying each slice by its $x$-position measures how strongly it pulls the centre of mass along the axis.",
      },
      {
        description: "Divide moment by volume",
        workingLatex: `\\bar{x}=\\dfrac{${piCoeff(moment)}}{${piCoeff(volume)}}`,
        explanation: "The common factor of $\\pi$ cancels because it appears in both the total volume and the first moment.",
      },
      {
        description: "Simplify",
        workingLatex: `\\bar{x}=${latexFr(xBar)}`,
        explanation: "The result is a distance along the axis of rotation, measured from the origin.",
      },
      {
        description: "State the centre of mass",
        workingLatex: `\\boxed{\\bar{x}=${latexFr(xBar)}}`,
        explanation: "By symmetry the centre of mass lies on the $x$-axis, so this single coordinate fixes its position.",
      },
    ],
    `$\\bar{x}=${latexFr(xBar)}$`,
  );
}

function powerSolidAboutYAxis(number: number, spec: PowerSolidSpec): Question {
  const { coefficient: k, exponent: p, limit: a } = spec;
  const x = monomial(k, "y", p);
  const xSquared = squareMonomial(k, "y", p);
  const volume = fr(k * k * pow(a, 2 * p + 1), 2 * p + 1);
  const moment = fr(k * k * pow(a, 2 * p + 2), 2 * p + 2);
  const yBar = div(moment, volume);

  return question(
    number,
    "Easy",
    4,
    ["centres of mass", "solids of revolution", "y-axis", "calculus"],
    "value",
    `A uniform solid is formed by rotating the region bounded by $x=${x}$, the $y$-axis, $y=0$ and $y=${a}$ through $360^\\circ$ about the $y$-axis. Find $\\bar{y}$, the distance of the centre of mass above the origin.`,
    [
      {
        description: "Use volume and first moment",
        workingLatex: "\\bar{y}=\\dfrac{\\int y\\,dV}{\\int dV}",
        explanation: "The vertical coordinate of the centre of mass is the volume-weighted average of the heights of the slices.",
      },
      {
        description: "Write the volume element",
        workingLatex: "dV=\\pi x^2\\,dy",
        explanation: "A thin horizontal strip rotates into a disc whose radius is the $x$-value of the curve.",
      },
      {
        description: "Square the radius",
        workingLatex: `x^2=(${x})^2=${xSquared}`,
        explanation: "The area of each circular slice depends on the square of the radius.",
      },
      {
        description: "Find the volume",
        workingLatex: `V=\\pi\\int_0^{${a}}${xSquared}\\,dy=${piCoeff(volume)}`,
        explanation: "The volume is found by adding the disc volumes through the full height of the solid.",
      },
      {
        description: "Find the first moment",
        workingLatex: `M=\\pi\\int_0^{${a}}y(${xSquared})\\,dy=${piCoeff(moment)}`,
        explanation: "Each slice is weighted by its height because slices higher up have a larger effect on $\\bar{y}$.",
      },
      {
        description: "Divide moment by volume",
        workingLatex: `\\bar{y}=\\dfrac{${piCoeff(moment)}}{${piCoeff(volume)}}`,
        explanation: "Taking moment divided by volume turns the accumulated moment into an average height.",
      },
      {
        description: "Simplify",
        workingLatex: `\\bar{y}=${latexFr(yBar)}`,
        explanation: "The simplified value gives the position along the axis of symmetry.",
      },
      {
        description: "State the centre of mass",
        workingLatex: `\\boxed{\\bar{y}=${latexFr(yBar)}}`,
        explanation: "The rotational symmetry means the centre of mass lies on the $y$-axis.",
      },
    ],
    `$\\bar{y}=${latexFr(yBar)}$`,
  );
}

type StandardSolidSpec = {
  solid: "cone" | "hemisphere";
  radius: number;
  height?: number;
};

function standardSolidQuestion(number: number, spec: StandardSolidSpec): Question {
  const isCone = spec.solid === "cone";
  const height = spec.height ?? spec.radius;
  const distance = isCone ? fr(height, 4) : fr(3 * spec.radius, 8);
  const questionText = isCone
    ? `A uniform solid right circular cone has radius ${spec.radius} and height ${height}. Its base lies in the plane $x=0$ and its axis is the positive $x$-axis. Find the distance of its centre of mass from the base.`
    : `A uniform solid hemisphere has radius ${spec.radius}. Its flat circular face lies in the plane $x=0$ and the curved part lies in $x>0$. Find the distance of its centre of mass from the flat face.`;
  const formula = isCone ? "\\bar{x}=\\frac{h}{4}" : "\\bar{x}=\\frac{3R}{8}";

  return question(
    number,
    "Easy",
    4,
    ["centres of mass", "standard solids", isCone ? "cone" : "hemisphere"],
    "value",
    questionText,
    [
      {
        description: "Use symmetry",
        workingLatex: "\\text{Centre of mass lies on the axis of symmetry}",
        explanation: "Every off-axis piece has a matching piece on the opposite side, so sideways moments cancel.",
      },
      {
        description: "Select the standard result",
        workingLatex: formula,
        explanation: "This standard centre-of-mass result comes from integrating parallel slices of the solid.",
      },
      {
        description: "Identify the relevant dimension",
        workingLatex: isCone ? `h=${height}` : `R=${spec.radius}`,
        explanation: "The formula uses the axial height for a cone and the radius for a hemisphere.",
      },
      {
        description: "Substitute the value",
        workingLatex: isCone ? `\\bar{x}=\\dfrac{${height}}{4}` : `\\bar{x}=\\dfrac{3(${spec.radius})}{8}`,
        explanation: "Substitution converts the general standard result into the value for this particular solid.",
      },
      {
        description: "Simplify the distance",
        workingLatex: `\\bar{x}=${latexFr(distance)}`,
        explanation: "The answer is measured from the reference plane stated in the question.",
      },
      {
        description: "Check the location is sensible",
        workingLatex: isCone ? "\\bar{x}<\\frac{h}{2}" : "\\bar{x}<R",
        explanation: isCone
          ? "A cone has more material near its base, so its centre of mass is closer to the base than the midpoint."
          : "A hemisphere has all its material within one radius of the flat face, so the centre must lie between the face and the curved surface.",
      },
      {
        description: "State the result",
        workingLatex: `\\boxed{\\bar{x}=${latexFr(distance)}}`,
        explanation: "The axis coordinate gives the full centre of mass because of rotational symmetry.",
      },
    ],
    `$\\bar{x}=${latexFr(distance)}$`,
  );
}

type ConeCylinderSpec = {
  radius: number;
  cylinderLength: number;
  coneHeight: number;
};

function coneCylinderQuestion(number: number, spec: ConeCylinderSpec): Question {
  const { radius: r, cylinderLength: l, coneHeight: h } = spec;
  const cylinderMass = fr(r * r * l);
  const coneMass = fr(r * r * h, 3);
  const cylinderX = fr(l, 2);
  const coneX = add(fr(l), fr(h, 4));
  const numerator = add(mul(cylinderMass, cylinderX), mul(coneMass, coneX));
  const denominator = add(cylinderMass, coneMass);
  const xBar = div(numerator, denominator);

  return question(
    number,
    "Intermediate",
    6,
    ["centres of mass", "composite solids", "cone", "cylinder"],
    "value",
    `A uniform solid consists of a cylinder of radius ${r} and length ${l}, with a cone of the same base radius and height ${h} attached to its right-hand end. The cylinder starts at $x=0$ and its axis is the $x$-axis. Find the distance of the centre of mass of the composite solid from $x=0$.`,
    [
      {
        description: "Set up the axis",
        workingLatex: "\\text{Measure }x\\text{ from the left-hand end of the cylinder}",
        explanation: "A clear origin lets us combine moments from the two parts consistently.",
      },
      {
        description: "Use symmetry",
        workingLatex: "\\text{Centre of mass lies on the common axis}",
        explanation: "The cylinder and cone are both rotationally symmetric about the same line.",
      },
      {
        description: "Find the cylinder volume factor",
        workingLatex: `V_c=\\pi r^2l=\\pi(${r})^2(${l})=${piCoeff(cylinderMass)}`,
        explanation: "For centre-of-mass ratios, volume is proportional to mass because the solid is uniform.",
      },
      {
        description: "Locate the cylinder centre",
        workingLatex: `x_c=\\dfrac{${l}}{2}=${latexFr(cylinderX)}`,
        explanation: "A uniform cylinder balances halfway along its length.",
      },
      {
        description: "Find the cone volume factor",
        workingLatex: `V_k=\\dfrac13\\pi r^2h=\\dfrac13\\pi(${r})^2(${h})=${piCoeff(coneMass)}`,
        explanation: "The cone has one third of the volume of a cylinder with the same base and height.",
      },
      {
        description: "Locate the cone centre",
        workingLatex: `x_k=${l}+\\dfrac{${h}}{4}=${latexFr(coneX)}`,
        explanation: "A cone's centre is one quarter of its height from its base towards the vertex.",
      },
      {
        description: "Take moments",
        workingLatex: `M=${piCoeff(cylinderMass)}(${latexFr(cylinderX)})+${piCoeff(coneMass)}(${latexFr(coneX)})`,
        explanation: "The total moment is the sum of each part's mass multiplied by its own centre position.",
      },
      {
        description: "Add the volume factors",
        workingLatex: `V=${piCoeff(cylinderMass)}+${piCoeff(coneMass)}`,
        explanation: "The total mass is proportional to the total volume of the two joined solids.",
      },
      {
        description: "Divide total moment by total volume",
        workingLatex: `\\bar{x}=\\dfrac{${latexFr(numerator)}}{${latexFr(denominator)}}=${latexFr(xBar)}`,
        explanation: "The common factor $\\pi$ cancels, leaving a weighted average of the two centre positions.",
      },
      {
        description: "State the result",
        workingLatex: `\\boxed{\\bar{x}=${latexFr(xBar)}}`,
        explanation: "This is the distance from the left-hand end of the cylinder to the centre of mass.",
      },
    ],
    `$\\bar{x}=${latexFr(xBar)}$`,
  );
}

type HemisphereCylinderSpec = {
  radius: number;
  cylinderLength: number;
};

function hemisphereCylinderQuestion(number: number, spec: HemisphereCylinderSpec): Question {
  const { radius: r, cylinderLength: l } = spec;
  const cylinderMass = fr(r * r * l);
  const hemisphereMass = fr(2 * r * r * r, 3);
  const cylinderX = fr(l, 2);
  const hemisphereX = add(fr(l), fr(3 * r, 8));
  const numerator = add(mul(cylinderMass, cylinderX), mul(hemisphereMass, hemisphereX));
  const denominator = add(cylinderMass, hemisphereMass);
  const xBar = div(numerator, denominator);

  return question(
    number,
    "Intermediate",
    6,
    ["centres of mass", "composite solids", "hemisphere", "cylinder"],
    "value",
    `A uniform solid consists of a cylinder of radius ${r} and length ${l}, with a solid hemispherical cap of radius ${r} attached to the right-hand end. The cylinder starts at $x=0$ and its axis is the $x$-axis. Find the distance of the centre of mass from $x=0$.`,
    [
      {
        description: "Use the common axis",
        workingLatex: "\\text{All centres lie on the }x\\text{-axis}",
        explanation: "The cylinder and hemisphere have the same axis of rotational symmetry.",
      },
      {
        description: "Find the cylinder volume factor",
        workingLatex: `V_c=\\pi(${r})^2(${l})=${piCoeff(cylinderMass)}`,
        explanation: "The volume factor represents mass up to the common density.",
      },
      {
        description: "Locate the cylinder centre",
        workingLatex: `x_c=\\dfrac{${l}}{2}=${latexFr(cylinderX)}`,
        explanation: "A uniform cylinder balances at its midpoint.",
      },
      {
        description: "Find the hemisphere volume factor",
        workingLatex: `V_h=\\dfrac{2}{3}\\pi(${r})^3=${piCoeff(hemisphereMass)}`,
        explanation: "A solid hemisphere is half of a sphere, so its volume is $\\frac23\\pi r^3$.",
      },
      {
        description: "Locate the hemisphere centre",
        workingLatex: `x_h=${l}+\\dfrac{3(${r})}{8}=${latexFr(hemisphereX)}`,
        explanation: "The centre of a solid hemisphere is $3r/8$ from its flat face, towards the curved surface.",
      },
      {
        description: "Write the total moment",
        workingLatex: `M=${piCoeff(cylinderMass)}(${latexFr(cylinderX)})+${piCoeff(hemisphereMass)}(${latexFr(hemisphereX)})`,
        explanation: "Each part pulls the combined centre according to its volume and where its own centre lies.",
      },
      {
        description: "Write the total volume",
        workingLatex: `V=${piCoeff(cylinderMass)}+${piCoeff(hemisphereMass)}`,
        explanation: "Since the density is uniform, adding volumes is equivalent to adding masses.",
      },
      {
        description: "Form the weighted average",
        workingLatex: `\\bar{x}=\\dfrac{${latexFr(numerator)}}{${latexFr(denominator)}}`,
        explanation: "Moment divided by mass gives the balance point of the combined solid.",
      },
      {
        description: "Simplify",
        workingLatex: `\\bar{x}=${latexFr(xBar)}`,
        explanation: "The exact fraction is the required distance along the axis.",
      },
      {
        description: "State the result",
        workingLatex: `\\boxed{\\bar{x}=${latexFr(xBar)}}`,
        explanation: "This gives the centre of mass measured from the left-hand end of the cylinder.",
      },
    ],
    `$\\bar{x}=${latexFr(xBar)}$`,
  );
}

type DrilledCylinderSpec = {
  radius: number;
  cylinderLength: number;
  coneDepth: number;
};

function drilledCylinderQuestion(number: number, spec: DrilledCylinderSpec): Question {
  const { radius: r, cylinderLength: l, coneDepth: h } = spec;
  const cylinderMass = fr(r * r * l);
  const removedMass = fr(r * r * h, 3);
  const cylinderX = fr(l, 2);
  const removedX = sub(fr(l), fr(h, 4));
  const numerator = sub(mul(cylinderMass, cylinderX), mul(removedMass, removedX));
  const denominator = sub(cylinderMass, removedMass);
  const xBar = div(numerator, denominator);

  return question(
    number,
    "Hard",
    8,
    ["centres of mass", "cut-out solids", "cone", "cylinder", "moments"],
    "value",
    `A uniform cylinder has radius ${r} and length ${l}, with its axis along the $x$-axis from $x=0$ to $x=${l}$. A conical cavity of depth ${h} and base radius ${r} is drilled coaxially from the right-hand end, with its base at $x=${l}$. Find the distance of the centre of mass of the remaining solid from $x=0$.`,
    [
      {
        description: "Model the cavity as removed mass",
        workingLatex: "\\text{remaining solid} = \\text{full cylinder} - \\text{cone}",
        explanation: "A hole can be handled by subtracting both its volume and its moment from the original solid.",
      },
      {
        description: "Use the axis of symmetry",
        workingLatex: "\\text{The remaining centre of mass lies on the }x\\text{-axis}",
        explanation: "The drilling is coaxial, so the remaining shape is still rotationally symmetric.",
      },
      {
        description: "Find the full cylinder volume factor",
        workingLatex: `V_c=\\pi(${r})^2(${l})=${piCoeff(cylinderMass)}`,
        explanation: "The full cylinder provides the starting mass before the cavity is removed.",
      },
      {
        description: "Locate the full cylinder centre",
        workingLatex: `x_c=\\dfrac{${l}}{2}=${latexFr(cylinderX)}`,
        explanation: "The full cylinder balances at its midpoint.",
      },
      {
        description: "Find the removed cone volume factor",
        workingLatex: `V_r=\\dfrac13\\pi(${r})^2(${h})=${piCoeff(removedMass)}`,
        explanation: "The cavity has the volume of a cone, and this volume must be subtracted.",
      },
      {
        description: "Locate the removed cone centre",
        workingLatex: `x_r=${l}-\\dfrac{${h}}{4}=${latexFr(removedX)}`,
        explanation: "The cone's centre is one quarter of its height from its base towards its vertex, which is to the left here.",
      },
      {
        description: "Subtract the removed moment",
        workingLatex: `M=${piCoeff(cylinderMass)}(${latexFr(cylinderX)})-${piCoeff(removedMass)}(${latexFr(removedX)})`,
        explanation: "Removing material removes its turning effect about the origin as well as its mass.",
      },
      {
        description: "Subtract the removed volume",
        workingLatex: `V=${piCoeff(cylinderMass)}-${piCoeff(removedMass)}`,
        explanation: "The remaining mass is proportional to the full cylinder volume minus the cavity volume.",
      },
      {
        description: "Form the centre of mass ratio",
        workingLatex: `\\bar{x}=\\dfrac{${latexFr(numerator)}}{${latexFr(denominator)}}`,
        explanation: "Moment divided by remaining mass gives the new balance point of the drilled solid.",
      },
      {
        description: "Cancel common constants",
        workingLatex: "\\text{The common factors }\\rho\\text{ and }\\pi\\text{ cancel}",
        explanation: "Uniform density and the factor $\\pi$ affect all masses equally, so they do not change the weighted average.",
      },
      {
        description: "Simplify the exact value",
        workingLatex: `\\bar{x}=${latexFr(xBar)}`,
        explanation: "The cavity is near the right-hand end, so the centre of mass shifts left compared with the full cylinder midpoint.",
      },
      {
        description: "Check the value lies inside the solid",
        workingLatex: `0<${latexFr(xBar)}<${l}`,
        explanation: "A centre of mass for a remaining solid on this axis should lie between the two ends of the cylinder.",
      },
      {
        description: "State the result",
        workingLatex: `\\boxed{\\bar{x}=${latexFr(xBar)}}`,
        explanation: "This is measured from the left-hand end of the original cylinder.",
      },
    ],
    `$\\bar{x}=${latexFr(xBar)}$`,
  );
}

type WasherSpec = {
  outerCoefficient: number;
  outerExponent: number;
  innerCoefficient: number;
  innerExponent: number;
  limit: number;
};

function washerCentreQuestion(number: number, spec: WasherSpec): Question {
  const { outerCoefficient: a, outerExponent: p, innerCoefficient: b, innerExponent: q, limit: l } = spec;
  const outer = monomial(a, "x", p);
  const inner = monomial(b, "x", q);
  const outerSquared = squareMonomial(a, "x", p);
  const innerSquared = squareMonomial(b, "x", q);
  const volume = sub(fr(a * a * pow(l, 2 * p + 1), 2 * p + 1), fr(b * b * pow(l, 2 * q + 1), 2 * q + 1));
  const moment = sub(fr(a * a * pow(l, 2 * p + 2), 2 * p + 2), fr(b * b * pow(l, 2 * q + 2), 2 * q + 2));
  const xBar = div(moment, volume);

  return question(
    number,
    "Hard",
    9,
    ["centres of mass", "solids of revolution", "washer method", "calculus"],
    "value",
    `The region between $y=${outer}$ and $y=${inner}$ for $0\\le x\\le ${l}$ is rotated through $360^\\circ$ about the $x$-axis to form a uniform solid. Find the $x$-coordinate of its centre of mass.`,
    [
      {
        description: "Use the washer volume element",
        workingLatex: "dV=\\pi(R^2-r^2)\\,dx",
        explanation: "Because the rotated region has an outer and inner radius, each thin slice forms a washer rather than a full disc.",
      },
      {
        description: "Identify the radii",
        workingLatex: `R=${outer},\\qquad r=${inner}`,
        explanation: "The outer curve gives the larger radius and the inner curve creates the hole through the solid.",
      },
      {
        description: "Square the radii",
        workingLatex: `R^2=${outerSquared},\\qquad r^2=${innerSquared}`,
        explanation: "Washer area depends on squared radii, so this is the key algebraic step before integrating.",
      },
      {
        description: "Form the volume integral",
        workingLatex: `V=\\pi\\int_0^{${l}}\\left(${outerSquared}-${innerSquared}\\right)\\,dx`,
        explanation: "This adds all washer volumes along the length of the solid.",
      },
      {
        description: "Evaluate the volume",
        workingLatex: `V=${piCoeff(volume)}`,
        explanation: "The exact volume is kept as a multiple of $\\pi$ so it can cancel later if possible.",
      },
      {
        description: "Set up the first moment",
        workingLatex: "M=\\pi\\int x(R^2-r^2)\\,dx",
        explanation: "For the centre of mass, each washer's volume is weighted by its $x$-position.",
      },
      {
        description: "Substitute the squared radii into the moment",
        workingLatex: `M=\\pi\\int_0^{${l}}x\\left(${outerSquared}-${innerSquared}\\right)\\,dx`,
        explanation: "This measures the total turning effect of the volume about the plane $x=0$.",
      },
      {
        description: "Evaluate the first moment",
        workingLatex: `M=${piCoeff(moment)}`,
        explanation: "The moment is larger for material farther from the origin because of the extra factor of $x$.",
      },
      {
        description: "Divide moment by volume",
        workingLatex: `\\bar{x}=\\dfrac{M}{V}=\\dfrac{${piCoeff(moment)}}{${piCoeff(volume)}}`,
        explanation: "The centre of mass coordinate is the moment per unit volume.",
      },
      {
        description: "Cancel $\\pi$",
        workingLatex: `\\bar{x}=\\dfrac{${latexFr(moment)}}{${latexFr(volume)}}`,
        explanation: "The factor $\\pi$ appears in both volume and moment because every slice is circular.",
      },
      {
        description: "Simplify",
        workingLatex: `\\bar{x}=${latexFr(xBar)}`,
        explanation: "The simplified fraction gives the exact axial position of the balance point.",
      },
      {
        description: "Interpret the coordinate",
        workingLatex: `0<${latexFr(xBar)}<${l}`,
        explanation: "The answer lies inside the interval of construction, which is a useful check on the calculation.",
      },
      {
        description: "State the result",
        workingLatex: `\\boxed{\\bar{x}=${latexFr(xBar)}}`,
        explanation: "By rotational symmetry, this $x$-coordinate fully locates the centre of mass.",
      },
    ],
    `$\\bar{x}=${latexFr(xBar)}$`,
  );
}

const xAxisSpecs: PowerSolidSpec[] = [
  { coefficient: 1, exponent: 1, limit: 2 },
  { coefficient: 2, exponent: 1, limit: 3 },
  { coefficient: 3, exponent: 1, limit: 4 },
  { coefficient: 1, exponent: 2, limit: 2 },
  { coefficient: 2, exponent: 2, limit: 3 },
  { coefficient: 1, exponent: 3, limit: 2 },
  { coefficient: 3, exponent: 2, limit: 2 },
  { coefficient: 2, exponent: 3, limit: 3 },
  { coefficient: 1, exponent: 1, limit: 5 },
  { coefficient: 4, exponent: 1, limit: 2 },
  { coefficient: 1, exponent: 2, limit: 4 },
  { coefficient: 2, exponent: 2, limit: 5 },
  { coefficient: 1, exponent: 3, limit: 3 },
  { coefficient: 3, exponent: 3, limit: 2 },
  { coefficient: 2, exponent: 1, limit: 6 },
  { coefficient: 5, exponent: 1, limit: 2 },
  { coefficient: 1, exponent: 4, limit: 2 },
  { coefficient: 2, exponent: 4, limit: 3 },
  { coefficient: 3, exponent: 2, limit: 5 },
  { coefficient: 1, exponent: 5, limit: 2 },
];

const yAxisSpecs: PowerSolidSpec[] = [
  { coefficient: 1, exponent: 1, limit: 3 },
  { coefficient: 2, exponent: 1, limit: 4 },
  { coefficient: 1, exponent: 2, limit: 3 },
  { coefficient: 3, exponent: 1, limit: 2 },
  { coefficient: 2, exponent: 2, limit: 2 },
  { coefficient: 1, exponent: 3, limit: 4 },
  { coefficient: 4, exponent: 1, limit: 5 },
  { coefficient: 3, exponent: 2, limit: 3 },
  { coefficient: 2, exponent: 3, limit: 2 },
  { coefficient: 1, exponent: 4, limit: 3 },
];

const standardSpecs: StandardSolidSpec[] = [
  { solid: "cone", radius: 3, height: 8 },
  { solid: "cone", radius: 4, height: 12 },
  { solid: "cone", radius: 5, height: 10 },
  { solid: "cone", radius: 2, height: 6 },
  { solid: "cone", radius: 6, height: 9 },
  { solid: "hemisphere", radius: 4 },
  { solid: "hemisphere", radius: 8 },
  { solid: "hemisphere", radius: 6 },
  { solid: "hemisphere", radius: 10 },
  { solid: "hemisphere", radius: 12 },
];

const coneCylinderSpecs: ConeCylinderSpec[] = [
  { radius: 2, cylinderLength: 6, coneHeight: 4 },
  { radius: 3, cylinderLength: 8, coneHeight: 6 },
  { radius: 4, cylinderLength: 5, coneHeight: 3 },
  { radius: 2, cylinderLength: 10, coneHeight: 5 },
  { radius: 5, cylinderLength: 6, coneHeight: 6 },
  { radius: 3, cylinderLength: 9, coneHeight: 4 },
  { radius: 4, cylinderLength: 12, coneHeight: 8 },
  { radius: 2, cylinderLength: 7, coneHeight: 9 },
  { radius: 6, cylinderLength: 8, coneHeight: 4 },
  { radius: 5, cylinderLength: 10, coneHeight: 2 },
];

const hemisphereCylinderSpecs: HemisphereCylinderSpec[] = [
  { radius: 3, cylinderLength: 6 },
  { radius: 4, cylinderLength: 8 },
  { radius: 2, cylinderLength: 10 },
  { radius: 5, cylinderLength: 6 },
  { radius: 6, cylinderLength: 9 },
  { radius: 3, cylinderLength: 12 },
  { radius: 4, cylinderLength: 5 },
  { radius: 2, cylinderLength: 7 },
];

const drilledCylinderSpecs: DrilledCylinderSpec[] = [
  { radius: 3, cylinderLength: 10, coneDepth: 4 },
  { radius: 4, cylinderLength: 12, coneDepth: 6 },
  { radius: 2, cylinderLength: 9, coneDepth: 3 },
  { radius: 5, cylinderLength: 15, coneDepth: 5 },
  { radius: 3, cylinderLength: 8, coneDepth: 6 },
  { radius: 6, cylinderLength: 14, coneDepth: 7 },
];

const washerSpecs: WasherSpec[] = [
  { outerCoefficient: 3, outerExponent: 1, innerCoefficient: 1, innerExponent: 2, limit: 2 },
  { outerCoefficient: 2, outerExponent: 1, innerCoefficient: 1, innerExponent: 2, limit: 1 },
  { outerCoefficient: 4, outerExponent: 1, innerCoefficient: 1, innerExponent: 2, limit: 3 },
  { outerCoefficient: 1, outerExponent: 1, innerCoefficient: 1, innerExponent: 2, limit: 1 },
  { outerCoefficient: 5, outerExponent: 1, innerCoefficient: 2, innerExponent: 2, limit: 2 },
  { outerCoefficient: 3, outerExponent: 2, innerCoefficient: 1, innerExponent: 3, limit: 2 },
];

export const questions: Question[] = [
  ...xAxisSpecs.map((spec, index) => powerSolidAboutXAxis(index + 1, spec)),
  ...yAxisSpecs.map((spec, index) => powerSolidAboutYAxis(index + 21, spec)),
  ...standardSpecs.map((spec, index) => standardSolidQuestion(index + 31, spec)),
  ...coneCylinderSpecs.map((spec, index) => coneCylinderQuestion(index + 41, spec)),
  ...hemisphereCylinderSpecs.map((spec, index) => hemisphereCylinderQuestion(index + 51, spec)),
  ...drilledCylinderSpecs.map((spec, index) => drilledCylinderQuestion(index + 59, spec)),
  ...washerSpecs.map((spec, index) => washerCentreQuestion(index + 65, spec)),
];
