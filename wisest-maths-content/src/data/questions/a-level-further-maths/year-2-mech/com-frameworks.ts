import type { Difficulty, Question, SolutionStep } from "@/lib/types";

const LEVEL = "A-Level Further Maths";
const TOPIC = "Further Maths Year 2: Mechanics (Further Mechanics 2)";
const SUBTOPIC = "Centres of mass: frameworks";
const SUBTOPIC_ID = "fm.y2.mech.com-frameworks";

type StepInput = Omit<SolutionStep, "stepNumber" | "diagram">;

interface Component {
  label: string;
  description: string;
  mass: number;
  x: number;
  y: number;
  massLatex: string;
  centreLatex: string;
}

interface FrameworkSpec {
  difficulty: Difficulty;
  marks: number;
  tags: string[];
  prompt: string;
  components: Component[];
}

function trim(n: number): string {
  const value = Math.abs(n) < 10 ? n.toFixed(3) : n.toFixed(2);
  return value.replace(/\.?0+$/, "");
}

function coord(x: number, y: number): string {
  return `(${trim(x)},\\,${trim(y)})`;
}

function length(x1: number, y1: number, x2: number, y2: number): number {
  return Math.hypot(x2 - x1, y2 - y1);
}

function rod(label: string, x1: number, y1: number, x2: number, y2: number, density = 1): Component {
  const l = length(x1, y1, x2, y2);
  const m = density * l;
  const densityText = density === 1 ? "" : ` with density factor ${trim(density)}`;
  return {
    label,
    description: `rod ${label} from $${coord(x1, y1)}$ to $${coord(x2, y2)}$${densityText}`,
    mass: m,
    x: (x1 + x2) / 2,
    y: (y1 + y2) / 2,
    massLatex: density === 1 ? trim(l) : `${trim(density)}\\times ${trim(l)}=${trim(m)}`,
    centreLatex: coord((x1 + x2) / 2, (y1 + y2) / 2),
  };
}

function semiArc(label: string, radius: number, upper = true, density = 1): Component {
  const y = (upper ? 1 : -1) * (2 * radius) / Math.PI;
  const m = density * Math.PI * radius;
  const densityText = density === 1 ? "" : `, density factor ${trim(density)}`;
  return {
    label,
    description: `${upper ? "upper" : "lower"} semicircular wire ${label} with centre $(0,\\,0)$ and radius $${trim(radius)}$${densityText}`,
    mass: m,
    x: 0,
    y,
    massLatex: density === 1 ? `${trim(radius)}\\pi` : `${trim(density)}\\times ${trim(radius)}\\pi=${trim(m)}`,
    centreLatex: `(0,\\,${trim(y)})`,
  };
}

function quarterArc(label: string, radius: number, density = 1): Component {
  const c = (2 * radius) / Math.PI;
  const m = density * Math.PI * radius / 2;
  const densityText = density === 1 ? "" : `, density factor ${trim(density)}`;
  return {
    label,
    description: `quarter-circular wire ${label} in the first quadrant with centre $(0,\\,0)$ and radius $${trim(radius)}$${densityText}`,
    mass: m,
    x: c,
    y: c,
    massLatex: density === 1 ? `${trim(radius)}\\pi/2` : `${trim(density)}\\times ${trim(radius)}\\pi/2=${trim(m)}`,
    centreLatex: `(${trim(c)},\\,${trim(c)})`,
  };
}

function steps(items: StepInput[]): SolutionStep[] {
  return items.map((item, index) => ({
    stepNumber: index + 1,
    diagram: null,
    ...item,
  }));
}

function tableLatex(components: Component[]): string {
  const rows = components
    .map((c) => `${c.label} & ${c.massLatex} & ${c.centreLatex}`)
    .join("\\\\ ");
  return `\\begin{array}{c|c|c}\\text{component}&\\text{mass factor}&\\text{component centre}\\\\ ${rows}\\end{array}`;
}

function sum(components: Component[], selector: (c: Component) => number): number {
  return components.reduce((total, component) => total + selector(component), 0);
}

function question(number: number, spec: FrameworkSpec): Question {
  const totalMass = sum(spec.components, (c) => c.mass);
  const xMoment = sum(spec.components, (c) => c.mass * c.x);
  const yMoment = sum(spec.components, (c) => c.mass * c.y);
  const xBar = xMoment / totalMass;
  const yBar = yMoment / totalMass;
  const description = spec.components.map((c) => c.description).join("; ");
  const commonSteps: StepInput[] = [
    {
      description: "Use the framework centre of mass formula",
      workingLatex: "\\bar{x}=\\frac{\\sum m_i x_i}{\\sum m_i},\\qquad \\bar{y}=\\frac{\\sum m_i y_i}{\\sum m_i}",
      explanation: "A framework is handled component by component: each rod or arc contributes as if its own mass were concentrated at its own centre of mass.",
    },
    {
      description: "Model mass factors",
      workingLatex: "m_i\\propto \\text{length}\\times \\text{linear density factor}",
      explanation: "The common density cancels from every moment ratio, so we only need relative mass factors rather than actual masses.",
    },
    {
      description: "List the components",
      workingLatex: tableLatex(spec.components),
      explanation: "Each straight rod has its centre at its midpoint; the standard arc formula places the centre of a semicircular or quarter-circular wire on its symmetry line.",
    },
    {
      description: "Total mass factor",
      workingLatex: `M=${trim(totalMass)}`,
      explanation: "Adding the component mass factors gives the denominator for both centre of mass coordinates.",
    },
    {
      description: "Take moments about the y-axis",
      workingLatex: `\\sum m_i x_i=${trim(xMoment)}`,
      explanation: "Moments about the y-axis measure the horizontal balance of the whole framework.",
    },
    {
      description: "Find the x-coordinate",
      workingLatex: `\\bar{x}=\\frac{${trim(xMoment)}}{${trim(totalMass)}}=${trim(xBar)}`,
      explanation: "Dividing the horizontal moment by the total mass factor gives the horizontal position of the centre of mass.",
    },
    {
      description: "Take moments about the x-axis",
      workingLatex: `\\sum m_i y_i=${trim(yMoment)}`,
      explanation: "Moments about the x-axis measure the vertical balance of the whole framework.",
    },
    {
      description: "Find the y-coordinate",
      workingLatex: `\\bar{y}=\\frac{${trim(yMoment)}}{${trim(totalMass)}}=${trim(yBar)}`,
      explanation: "Dividing the vertical moment by the total mass factor gives the height of the centre of mass.",
    },
    {
      description: "State the centre of mass",
      workingLatex: `(\\bar{x},\\bar{y})=${coord(xBar, yBar)}`,
      explanation: "Combining the two coordinates gives the single point where the framework balances.",
    },
  ];

  const solutionSteps =
    spec.difficulty === "Hard"
      ? [
          commonSteps[0],
          {
            description: "Choose a consistent origin",
            workingLatex: "\\text{Use the coordinates given in the question}",
            explanation: "Keeping one coordinate system throughout prevents signs and distances from being mixed when the framework has several pieces.",
          },
          commonSteps[1],
          commonSteps[2],
          {
            description: "Check the component centres",
            workingLatex: "\\text{rods: midpoints; arcs: standard wire-centre positions}",
            explanation: "This separates the geometry of each piece from the final moment calculation, which is the safest way to handle composite frameworks.",
          },
          commonSteps[3],
          commonSteps[4],
          commonSteps[5],
          commonSteps[6],
          commonSteps[7],
          {
            description: "Check the answer is plausible",
            workingLatex: `${coord(xBar, yBar)}\\text{ lies within the spread of the framework}`,
            explanation: "A centre of mass should lie toward the heavier or longer parts of the framework, so this check guards against arithmetic slips.",
          },
          commonSteps[8],
          {
            description: "Give the requested accuracy",
            workingLatex: `(\\bar{x},\\bar{y})=${coord(xBar, yBar)}\\text{ m}\\quad (3\\text{ s.f.})`,
            explanation: "The component data are in metres, so the centre of mass coordinates are also in metres.",
          },
        ]
      : commonSteps;

  return {
    id: `${SUBTOPIC_ID}.q${String(number).padStart(3, "0")}`,
    level: LEVEL,
    topic: TOPIC,
    subtopic: SUBTOPIC,
    subtopicId: SUBTOPIC_ID,
    difficulty: spec.difficulty,
    marks: spec.marks,
    answerType: "coordinate",
    tags: ["centres of mass", "frameworks", ...spec.tags],
    questionText: `${spec.prompt} The framework consists of ${description}. Find the coordinates of its centre of mass, giving your answer to $3$ significant figures.`,
    questionDiagram: null,
    workedSolution: {
      steps: steps(solutionSteps),
      finalAnswer: `$(\\bar{x},\\bar{y})=${coord(xBar, yBar)}\\text{ m}$`,
    },
  };
}

function lFrame(w: number, h: number): FrameworkSpec {
  return {
    difficulty: "Easy",
    marks: 4,
    tags: ["rods", "l-shaped framework"],
    prompt: "A uniform wire framework lies in the $xy$-plane.",
    components: [rod("AB", 0, 0, w, 0), rod("BC", w, 0, w, h)],
  };
}

function uFrame(w: number, h: number): FrameworkSpec {
  return {
    difficulty: "Easy",
    marks: 5,
    tags: ["rods", "u-shaped framework"],
    prompt: "A uniform U-shaped wire framework lies in the $xy$-plane.",
    components: [rod("AB", 0, 0, w, 0), rod("AD", 0, 0, 0, h), rod("BC", w, 0, w, h)],
  };
}

function triangleFrame(w: number, h: number): FrameworkSpec {
  return {
    difficulty: "Easy",
    marks: 5,
    tags: ["rods", "triangular framework"],
    prompt: "A uniform triangular wire framework lies in the $xy$-plane.",
    components: [rod("AB", 0, 0, w, 0), rod("AC", 0, 0, 0, h), rod("BC", w, 0, 0, h)],
  };
}

function tFrame(w: number, h: number): FrameworkSpec {
  return {
    difficulty: "Easy",
    marks: 4,
    tags: ["rods", "t-shaped framework"],
    prompt: "A uniform T-shaped wire framework lies in the $xy$-plane.",
    components: [rod("AB", -w / 2, h, w / 2, h), rod("CO", 0, 0, 0, h)],
  };
}

function weightedLFrame(w: number, h: number, d1: number, d2: number): FrameworkSpec {
  return {
    difficulty: "Intermediate",
    marks: 6,
    tags: ["non-uniform density", "moments"],
    prompt: "A wire framework is made from two joined rods with different linear densities.",
    components: [rod("AB", 0, 0, w, 0, d1), rod("BC", w, 0, w, h, d2)],
  };
}

function semiCircularFrame(radius: number, upper: boolean, diameterDensity = 1, arcDensity = 1): FrameworkSpec {
  return {
    difficulty: "Intermediate",
    marks: 6,
    tags: ["circular arc", "semicircular wire"],
    prompt: "A framework consists of a diameter rod and a semicircular wire arc.",
    components: [rod("diameter", -radius, 0, radius, 0, diameterDensity), semiArc("arc", radius, upper, arcDensity)],
  };
}

function quarterFrame(radius: number, radialDensity = 1, arcDensity = 1): FrameworkSpec {
  return {
    difficulty: "Intermediate",
    marks: 7,
    tags: ["circular arc", "quarter circle"],
    prompt: "A framework consists of two perpendicular radius rods and a quarter-circular wire arc.",
    components: [
      rod("OA", 0, 0, radius, 0, radialDensity),
      rod("OB", 0, 0, 0, radius, radialDensity),
      quarterArc("AB", radius, arcDensity),
    ],
  };
}

function rectangleWithDiagonal(w: number, h: number, diagonalDensity = 1): FrameworkSpec {
  return {
    difficulty: "Intermediate",
    marks: 6,
    tags: ["composite framework", "diagonal rod"],
    prompt: "A rectangular wire frame has one diagonal brace.",
    components: [
      rod("AB", 0, 0, w, 0),
      rod("BC", w, 0, w, h),
      rod("CD", w, h, 0, h),
      rod("DA", 0, h, 0, 0),
      rod("AC", 0, 0, w, h, diagonalDensity),
    ],
  };
}

function hardComposite(radius: number, w: number, h: number, arcDensity: number): FrameworkSpec {
  return {
    difficulty: "Hard",
    marks: 8,
    tags: ["composite framework", "circular arc", "non-uniform density"],
    prompt: "A composite framework combines straight rods with a circular arc of different density.",
    components: [
      rod("AB", -w / 2, 0, w / 2, 0),
      rod("AC", -w / 2, 0, 0, h),
      rod("CB", 0, h, w / 2, 0),
      semiArc("arc", radius, true, arcDensity),
    ],
  };
}

function hardOffsetFrame(w: number, h: number, d: number): FrameworkSpec {
  return {
    difficulty: "Hard",
    marks: 8,
    tags: ["offset framework", "non-uniform density"],
    prompt: "A non-uniform offset framework lies in the coordinate plane.",
    components: [
      rod("AB", -w, 0, 0, 0, d),
      rod("BC", 0, 0, 0, h),
      rod("CD", 0, h, w / 2, h),
      rod("DE", w / 2, h, w / 2, -h / 2, 1.5),
      rod("EA", w / 2, -h / 2, -w, 0),
    ],
  };
}

const specs: FrameworkSpec[] = [
  ...[
    [4, 3],
    [6, 2],
    [5, 4],
    [8, 3],
    [3, 5],
    [7, 4],
    [6, 6],
    [9, 2],
  ].map(([w, h]) => lFrame(w, h)),
  ...[
    [4, 3],
    [6, 4],
    [5, 2],
    [8, 5],
    [3, 6],
    [7, 3],
  ].map(([w, h]) => uFrame(w, h)),
  ...[
    [3, 4],
    [6, 8],
    [5, 12],
    [8, 6],
    [7, 9],
  ].map(([w, h]) => triangleFrame(w, h)),
  ...[
    [4, 5],
    [6, 4],
    [8, 3],
    [10, 6],
    [5, 7],
  ].map(([w, h]) => tFrame(w, h)),
  ...[
    [4, 3, 1, 2],
    [6, 5, 2, 1],
    [5, 4, 1, 3],
    [8, 3, 1.5, 1],
    [7, 6, 2, 3],
    [9, 4, 3, 2],
    [6, 7, 1, 2.5],
  ].map(([w, h, d1, d2]) => weightedLFrame(w, h, d1, d2)),
  ...[
    [2, true, 1, 1],
    [3, true, 1, 2],
    [4, false, 1, 1],
    [5, true, 2, 1],
    [6, false, 1.5, 1],
    [3.5, true, 1, 1.5],
    [4.5, false, 2, 1],
  ].map(([r, upper, d1, d2]) => semiCircularFrame(r as number, upper as boolean, d1 as number, d2 as number)),
  ...[
    [2, 1, 1],
    [3, 1, 2],
    [4, 2, 1],
    [5, 1.5, 1],
    [6, 1, 1.5],
    [3.5, 2, 3],
    [4.5, 1, 2.5],
  ].map(([r, d1, d2]) => quarterFrame(r, d1, d2)),
  ...[
    [4, 3, 1],
    [6, 2, 2],
    [5, 5, 1.5],
    [8, 4, 1],
    [7, 3, 2.5],
    [9, 6, 1.25],
    [6, 8, 2],
  ].map(([w, h, d]) => rectangleWithDiagonal(w, h, d)),
  ...[
    [2, 4, 3, 2],
    [3, 6, 4, 1.5],
    [4, 8, 5, 2.5],
    [2.5, 5, 6, 3],
    [3.5, 7, 4, 2],
    [5, 10, 6, 1.75],
  ].map(([r, w, h, d]) => hardComposite(r, w, h, d)),
  ...[
    [4, 3, 2],
    [6, 4, 1.5],
    [8, 5, 2.5],
    [5, 6, 3],
    [7, 3, 2],
    [9, 6, 1.25],
  ].map(([w, h, d]) => hardOffsetFrame(w, h, d)),
  ...[
    [3, 6, 5, 2.25],
    [4, 8, 7, 1.4],
    [2, 5, 4, 3.5],
    [4.5, 9, 6, 2.2],
    [5.5, 11, 8, 1.6],
    [3.25, 7, 5, 2.8],
  ].map(([r, w, h, d]) => hardComposite(r, w, h, d)),
];

export const questions: Question[] = specs.map((spec, index) => question(index + 1, spec));
