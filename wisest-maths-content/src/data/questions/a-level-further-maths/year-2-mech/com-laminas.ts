import type { Difficulty, Question, SolutionStep } from "@/lib/types";

const LEVEL = "A-Level Further Maths";
const TOPIC = "Further Maths Year 2: Mechanics (Further Mechanics 2)";
const SUBTOPIC = "Centres of mass: laminas";
const SUBTOPIC_ID = "fm.y2.mech.com-laminas";

type StepInput = Omit<SolutionStep, "stepNumber" | "diagram">;

function steps(items: StepInput[]): SolutionStep[] {
  return items.map((item, index) => ({
    stepNumber: index + 1,
    diagram: null,
    ...item,
  }));
}

function fmt(value: number): string {
  const rounded = Math.round(value * 1000) / 1000;
  if (Math.abs(rounded - Math.round(rounded)) < 1e-10) return String(Math.round(rounded));
  return rounded.toFixed(3).replace(/0+$/, "").replace(/\.$/, "");
}

function point(x: number, y: number): string {
  return `(${fmt(x)},${fmt(y)})`;
}

function question(
  number: number,
  difficulty: Difficulty,
  marks: number,
  tags: string[],
  questionText: string,
  solutionSteps: StepInput[],
  finalX: number,
  finalY: number,
): Question {
  return {
    id: `${SUBTOPIC_ID}.q${String(number).padStart(3, "0")}`,
    level: LEVEL,
    topic: TOPIC,
    subtopic: SUBTOPIC,
    subtopicId: SUBTOPIC_ID,
    difficulty,
    marks,
    answerType: "coordinate",
    tags,
    questionText,
    questionDiagram: null,
    workedSolution: {
      steps: steps(solutionSteps),
      finalAnswer: `$${point(finalX, finalY)}$`,
    },
  };
}

type RectangleSpec = { w: number; h: number };
type TriangleSpec = { a: number; b: number };
type AddTriangleSpec = { w: number; h: number; d: number };
type CutCornerSpec = { w: number; h: number; c: number; d: number };
type MixedSpec = { w: number; h: number; d: number; hx: number; hy: number; hw: number; hh: number };

function rectangleQuestion(number: number, spec: RectangleSpec): Question {
  const x = spec.w / 2;
  const y = spec.h / 2;

  return question(
    number,
    "Easy",
    3,
    ["centre of mass", "laminas", "rectangle", "symmetry"],
    `A uniform rectangular lamina has vertices $(0,0)$, $(${spec.w},0)$, $(${spec.w},${spec.h})$ and $(0,${spec.h})$. Find the coordinates of its centre of mass.`,
    [
      {
        description: "Use symmetry",
        workingLatex: "\\bar{x}=\\frac{\\text{width}}{2},\\quad \\bar{y}=\\frac{\\text{height}}{2}",
        explanation: "A uniform rectangle balances halfway across its width and halfway up its height because equal areas lie on both sides of each midline.",
      },
      {
        description: "Identify the dimensions",
        workingLatex: `\\text{width}=${spec.w},\\quad \\text{height}=${spec.h}`,
        explanation: "The coordinates show the rectangle starts at the origin, so the width and height are read directly from the far corner.",
      },
      {
        description: "Find the horizontal coordinate",
        workingLatex: `\\bar{x}=\\frac{${spec.w}}{2}=${fmt(x)}`,
        explanation: "The centre is halfway between the left and right vertical edges.",
      },
      {
        description: "Find the vertical coordinate",
        workingLatex: `\\bar{y}=\\frac{${spec.h}}{2}=${fmt(y)}`,
        explanation: "The centre is halfway between the bottom and top horizontal edges.",
      },
      {
        description: "Write as a coordinate pair",
        workingLatex: `(\\bar{x},\\bar{y})=${point(x, y)}`,
        explanation: "A centre of mass in the plane needs both a horizontal and a vertical coordinate.",
      },
      {
        description: "State the centre of mass",
        workingLatex: `\\boxed{${point(x, y)}}`,
        explanation: "This point is the balancing point of the uniform rectangular lamina.",
      },
    ],
    x,
    y,
  );
}

function triangleQuestion(number: number, spec: TriangleSpec): Question {
  const x = spec.a / 3;
  const y = spec.b / 3;

  return question(
    number,
    "Easy",
    4,
    ["centre of mass", "laminas", "triangle", "centroid"],
    `A uniform triangular lamina has vertices $(0,0)$, $(${spec.a},0)$ and $(0,${spec.b})$. Find the coordinates of its centre of mass.`,
    [
      {
        description: "Recall the centroid formula",
        workingLatex: `(\\bar{x},\\bar{y})=\\left(\\frac{x_1+x_2+x_3}{3},\\frac{y_1+y_2+y_3}{3}\\right)`,
        explanation: "For a uniform triangular lamina, the centre of mass is the average of the three vertex coordinates.",
      },
      {
        description: "List the vertices",
        workingLatex: `(0,0),\\quad (${spec.a},0),\\quad (0,${spec.b})`,
        explanation: "Writing the vertices clearly prevents mixing horizontal and vertical coordinates.",
      },
      {
        description: "Find the horizontal coordinate",
        workingLatex: `\\bar{x}=\\frac{0+${spec.a}+0}{3}=${fmt(x)}`,
        explanation: "The average of the three $x$-coordinates gives the horizontal balancing coordinate.",
      },
      {
        description: "Find the vertical coordinate",
        workingLatex: `\\bar{y}=\\frac{0+0+${spec.b}}{3}=${fmt(y)}`,
        explanation: "The average of the three $y$-coordinates gives the vertical balancing coordinate.",
      },
      {
        description: "Combine the coordinates",
        workingLatex: `(\\bar{x},\\bar{y})=${point(x, y)}`,
        explanation: "The two centroid coordinates describe one point in the plane.",
      },
      {
        description: "Check the position",
        workingLatex: `0<${fmt(x)}<${spec.a},\\quad 0<${fmt(y)}<${spec.b}`,
        explanation: "The centre of mass should lie inside the triangular lamina.",
      },
      {
        description: "State the centre of mass",
        workingLatex: `\\boxed{${point(x, y)}}`,
        explanation: "This is the balancing point of the uniform triangular lamina.",
      },
    ],
    x,
    y,
  );
}

function addTriangleQuestion(number: number, spec: AddTriangleSpec): Question {
  const rectArea = spec.w * spec.h;
  const triArea = (spec.d * spec.h) / 2;
  const rectX = spec.w / 2;
  const rectY = spec.h / 2;
  const triX = spec.w + spec.d / 3;
  const triY = spec.h / 3;
  const totalArea = rectArea + triArea;
  const x = (rectArea * rectX + triArea * triX) / totalArea;
  const y = (rectArea * rectY + triArea * triY) / totalArea;

  return question(
    number,
    "Intermediate",
    6,
    ["centre of mass", "laminas", "composite lamina", "moments"],
    `A uniform lamina is made from a rectangle with vertices $(0,0)$, $(${spec.w},0)$, $(${spec.w},${spec.h})$ and $(0,${spec.h})$, together with a right triangular lamina with vertices $(${spec.w},0)$, $(${spec.w},${spec.h})$ and $(${spec.w + spec.d},0)$. Find the centre of mass of the composite lamina.`,
    [
      {
        description: "Split the lamina into standard shapes",
        workingLatex: "\\text{composite lamina}=\\text{rectangle}+\\text{right triangle}",
        explanation: "Centres of mass of composite laminas are found by replacing each simple part with its area acting at its own centroid.",
      },
      {
        description: "Find the rectangle area and centroid",
        workingLatex: `A_R=${spec.w}\\times ${spec.h}=${fmt(rectArea)},\\quad G_R=${point(rectX, rectY)}`,
        explanation: "The rectangle's centroid is found by symmetry at the midpoint of its width and height.",
      },
      {
        description: "Find the triangle area",
        workingLatex: `A_T=\\frac{1}{2}\\times ${spec.d}\\times ${spec.h}=${fmt(triArea)}`,
        explanation: `The attached triangle has base ${spec.d} horizontally and height ${spec.h} vertically.`,
      },
      {
        description: "Find the triangle centroid",
        workingLatex: `G_T=\\left(${spec.w}+\\frac{${spec.d}}{3},\\frac{${spec.h}}{3}\\right)=${point(triX, triY)}`,
        explanation: "A triangle's centroid is one third of the way from each side toward the opposite vertex.",
      },
      {
        description: "Find the total area",
        workingLatex: `A=${fmt(rectArea)}+${fmt(triArea)}=${fmt(totalArea)}`,
        explanation: "The total mass is proportional to total area because the lamina is uniform.",
      },
      {
        description: "Take moments about the $y$-axis",
        workingLatex: `A\\bar{x}=${fmt(rectArea)}(${fmt(rectX)})+${fmt(triArea)}(${fmt(triX)})`,
        explanation: "Horizontal moments combine each part's area with its horizontal centroid coordinate.",
      },
      {
        description: "Calculate $\\bar{x}$",
        workingLatex: `\\bar{x}=\\frac{${fmt(rectArea * rectX)}+${fmt(triArea * triX)}}{${fmt(totalArea)}}=${fmt(x)}`,
        explanation: "Dividing the total horizontal moment by the total area gives the horizontal balancing coordinate.",
      },
      {
        description: "Take moments about the $x$-axis",
        workingLatex: `A\\bar{y}=${fmt(rectArea)}(${fmt(rectY)})+${fmt(triArea)}(${fmt(triY)})`,
        explanation: "Vertical moments are found in the same way, using the vertical centroid coordinates.",
      },
      {
        description: "Calculate $\\bar{y}$",
        workingLatex: `\\bar{y}=\\frac{${fmt(rectArea * rectY)}+${fmt(triArea * triY)}}{${fmt(totalArea)}}=${fmt(y)}`,
        explanation: "The vertical balancing coordinate is the total vertical moment divided by the total area.",
      },
      {
        description: "State the centre of mass",
        workingLatex: `\\boxed{${point(x, y)}}`,
        explanation: "The result lies between the centroids of the two pieces, weighted toward the larger area.",
      },
    ],
    x,
    y,
  );
}

function cutCornerQuestion(number: number, spec: CutCornerSpec): Question {
  const rectArea = spec.w * spec.h;
  const cutArea = (spec.c * spec.d) / 2;
  const rectX = spec.w / 2;
  const rectY = spec.h / 2;
  const cutX = spec.w - spec.c / 3;
  const cutY = spec.h - spec.d / 3;
  const totalArea = rectArea - cutArea;
  const x = (rectArea * rectX - cutArea * cutX) / totalArea;
  const y = (rectArea * rectY - cutArea * cutY) / totalArea;

  return question(
    number,
    "Intermediate",
    7,
    ["centre of mass", "laminas", "cut-out", "moments"],
    `A uniform rectangular lamina with vertices $(0,0)$, $(${spec.w},0)$, $(${spec.w},${spec.h})$ and $(0,${spec.h})$ has a right triangular corner removed from the top right. The removed triangle has vertices $(${spec.w},${spec.h})$, $(${spec.w - spec.c},${spec.h})$ and $(${spec.w},${spec.h - spec.d})$. Find the centre of mass of the remaining lamina.`,
    [
      {
        description: "Model the remaining lamina",
        workingLatex: "\\text{remaining lamina}=\\text{full rectangle}-\\text{removed triangle}",
        explanation: "A cut-out is handled by subtracting its area and subtracting its moments from the original shape.",
      },
      {
        description: "Find the rectangle area and centroid",
        workingLatex: `A_R=${spec.w}\\times ${spec.h}=${fmt(rectArea)},\\quad G_R=${point(rectX, rectY)}`,
        explanation: "The full rectangle is the simple shape before the corner is removed.",
      },
      {
        description: "Find the removed area",
        workingLatex: `A_C=\\frac{1}{2}\\times ${spec.c}\\times ${spec.d}=${fmt(cutArea)}`,
        explanation: "The cut-out is a right triangle, so its area is half base times height.",
      },
      {
        description: "Find the removed triangle centroid",
        workingLatex: `G_C=\\left(${spec.w}-\\frac{${spec.c}}{3},${spec.h}-\\frac{${spec.d}}{3}\\right)=${point(cutX, cutY)}`,
        explanation: "The centroid is one third of the way from the right-angle vertex along each perpendicular direction.",
      },
      {
        description: "Find the remaining area",
        workingLatex: `A=${fmt(rectArea)}-${fmt(cutArea)}=${fmt(totalArea)}`,
        explanation: "The mass of the remaining lamina is proportional to the area left after the cut-out.",
      },
      {
        description: "Take moments about the $y$-axis",
        workingLatex: `A\\bar{x}=${fmt(rectArea)}(${fmt(rectX)})-${fmt(cutArea)}(${fmt(cutX)})`,
        explanation: "The removed triangle's horizontal moment is subtracted because that material is no longer present.",
      },
      {
        description: "Calculate $\\bar{x}$",
        workingLatex: `\\bar{x}=\\frac{${fmt(rectArea * rectX)}-${fmt(cutArea * cutX)}}{${fmt(totalArea)}}=${fmt(x)}`,
        explanation: "Dividing the remaining horizontal moment by the remaining area gives the horizontal coordinate.",
      },
      {
        description: "Take moments about the $x$-axis",
        workingLatex: `A\\bar{y}=${fmt(rectArea)}(${fmt(rectY)})-${fmt(cutArea)}(${fmt(cutY)})`,
        explanation: "The same subtraction is used for vertical moments.",
      },
      {
        description: "Calculate $\\bar{y}$",
        workingLatex: `\\bar{y}=\\frac{${fmt(rectArea * rectY)}-${fmt(cutArea * cutY)}}{${fmt(totalArea)}}=${fmt(y)}`,
        explanation: "The vertical coordinate moves away from the removed corner because mass has been taken from the top right.",
      },
      {
        description: "State the centre of mass",
        workingLatex: `\\boxed{${point(x, y)}}`,
        explanation: "This coordinate gives the balancing point of the remaining lamina.",
      },
    ],
    x,
    y,
  );
}

function mixedQuestion(number: number, spec: MixedSpec): Question {
  const rectArea = spec.w * spec.h;
  const triArea = (spec.d * spec.h) / 2;
  const holeArea = spec.hw * spec.hh;
  const rectX = spec.w / 2;
  const rectY = spec.h / 2;
  const triX = spec.w + spec.d / 3;
  const triY = spec.h / 3;
  const holeX = spec.hx + spec.hw / 2;
  const holeY = spec.hy + spec.hh / 2;
  const totalArea = rectArea + triArea - holeArea;
  const xMoment = rectArea * rectX + triArea * triX - holeArea * holeX;
  const yMoment = rectArea * rectY + triArea * triY - holeArea * holeY;
  const x = xMoment / totalArea;
  const y = yMoment / totalArea;

  return question(
    number,
    "Hard",
    9,
    ["centre of mass", "laminas", "composite lamina", "cut-out", "moments"],
    `A uniform lamina is formed from a rectangle with vertices $(0,0)$, $(${spec.w},0)$, $(${spec.w},${spec.h})$ and $(0,${spec.h})$, plus a right triangular extension with vertices $(${spec.w},0)$, $(${spec.w},${spec.h})$ and $(${spec.w + spec.d},0)$. A rectangular hole with vertices $(${spec.hx},${spec.hy})$, $(${spec.hx + spec.hw},${spec.hy})$, $(${spec.hx + spec.hw},${spec.hy + spec.hh})$ and $(${spec.hx},${spec.hy + spec.hh})$ is removed. Find the centre of mass of the remaining lamina.`,
    [
      {
        description: "Break the shape into signed parts",
        workingLatex: "\\text{lamina}=\\text{rectangle}+\\text{triangle}-\\text{rectangular hole}",
        explanation: "Using signed areas lets us add material that is present and subtract material that has been removed.",
      },
      {
        description: "Find the main rectangle area",
        workingLatex: `A_R=${spec.w}\\times ${spec.h}=${fmt(rectArea)}`,
        explanation: "The main rectangle supplies the largest positive contribution to the mass.",
      },
      {
        description: "Find the main rectangle centroid",
        workingLatex: `G_R=${point(rectX, rectY)}`,
        explanation: "A rectangle's centroid is at the intersection of its two lines of symmetry.",
      },
      {
        description: "Find the triangular extension area",
        workingLatex: `A_T=\\frac{1}{2}\\times ${spec.d}\\times ${spec.h}=${fmt(triArea)}`,
        explanation: "The triangular extension is a right triangle attached to the right side of the rectangle.",
      },
      {
        description: "Find the triangular extension centroid",
        workingLatex: `G_T=\\left(${spec.w}+\\frac{${spec.d}}{3},\\frac{${spec.h}}{3}\\right)=${point(triX, triY)}`,
        explanation: "The centroid of the triangle is found by averaging its three vertex coordinates.",
      },
      {
        description: "Find the hole area",
        workingLatex: `A_H=${spec.hw}\\times ${spec.hh}=${fmt(holeArea)}`,
        explanation: "The hole is treated as negative area because that material is absent.",
      },
      {
        description: "Find the hole centroid",
        workingLatex: `G_H=\\left(${spec.hx}+\\frac{${spec.hw}}{2},${spec.hy}+\\frac{${spec.hh}}{2}\\right)=${point(holeX, holeY)}`,
        explanation: "The centroid of the rectangular hole is its midpoint, just as for a solid rectangle.",
      },
      {
        description: "Find the signed total area",
        workingLatex: `A=${fmt(rectArea)}+${fmt(triArea)}-${fmt(holeArea)}=${fmt(totalArea)}`,
        explanation: "The remaining mass is proportional to this signed total area.",
      },
      {
        description: "Set up the horizontal moment equation",
        workingLatex: `A\\bar{x}=${fmt(rectArea)}(${fmt(rectX)})+${fmt(triArea)}(${fmt(triX)})-${fmt(holeArea)}(${fmt(holeX)})`,
        explanation: "Each part's area is multiplied by its own horizontal centroid coordinate, with the hole subtracted.",
      },
      {
        description: "Calculate the horizontal moment",
        workingLatex: `A\\bar{x}=${fmt(xMoment)}`,
        explanation: "Combining the signed moments gives the total turning effect about the $y$-axis.",
      },
      {
        description: "Find $\\bar{x}$",
        workingLatex: `\\bar{x}=\\frac{${fmt(xMoment)}}{${fmt(totalArea)}}=${fmt(x)}`,
        explanation: "Dividing by the total remaining area converts the moment back into a coordinate.",
      },
      {
        description: "Set up the vertical moment equation",
        workingLatex: `A\\bar{y}=${fmt(rectArea)}(${fmt(rectY)})+${fmt(triArea)}(${fmt(triY)})-${fmt(holeArea)}(${fmt(holeY)})`,
        explanation: "The vertical coordinate is found by taking moments about the $x$-axis.",
      },
      {
        description: "Find $\\bar{y}$",
        workingLatex: `\\bar{y}=\\frac{${fmt(yMoment)}}{${fmt(totalArea)}}=${fmt(y)}`,
        explanation: "This gives the vertical balancing coordinate after allowing for both the added triangle and the removed hole.",
      },
      {
        description: "State the centre of mass",
        workingLatex: `\\boxed{${point(x, y)}}`,
        explanation: "The centre of mass is the point where the remaining composite lamina would balance.",
      },
    ],
    x,
    y,
  );
}

const RECTANGLE_SPECS: RectangleSpec[] = [
  { w: 6, h: 4 },
  { w: 8, h: 6 },
  { w: 10, h: 4 },
  { w: 12, h: 8 },
  { w: 7, h: 5 },
  { w: 9, h: 3 },
  { w: 14, h: 6 },
  { w: 5, h: 11 },
  { w: 16, h: 10 },
  { w: 18, h: 6 },
  { w: 20, h: 8 },
  { w: 15, h: 9 },
  { w: 11, h: 7 },
];

const TRIANGLE_SPECS: TriangleSpec[] = [
  { a: 6, b: 9 },
  { a: 9, b: 6 },
  { a: 12, b: 6 },
  { a: 15, b: 9 },
  { a: 8, b: 12 },
  { a: 10, b: 15 },
  { a: 18, b: 12 },
  { a: 21, b: 9 },
  { a: 14, b: 7 },
  { a: 16, b: 20 },
  { a: 24, b: 18 },
  { a: 30, b: 12 },
];

const ADD_TRIANGLE_SPECS: AddTriangleSpec[] = [
  { w: 6, h: 4, d: 3 },
  { w: 8, h: 6, d: 4 },
  { w: 10, h: 6, d: 5 },
  { w: 12, h: 8, d: 6 },
  { w: 9, h: 5, d: 3 },
  { w: 14, h: 6, d: 7 },
  { w: 16, h: 8, d: 4 },
  { w: 10, h: 10, d: 5 },
  { w: 18, h: 12, d: 6 },
  { w: 20, h: 10, d: 8 },
  { w: 15, h: 9, d: 6 },
  { w: 12, h: 6, d: 9 },
  { w: 7, h: 8, d: 4 },
  { w: 11, h: 7, d: 5 },
  { w: 13, h: 6, d: 3 },
];

const CUT_CORNER_SPECS: CutCornerSpec[] = [
  { w: 10, h: 8, c: 4, d: 3 },
  { w: 12, h: 8, c: 6, d: 4 },
  { w: 15, h: 10, c: 5, d: 6 },
  { w: 14, h: 12, c: 4, d: 6 },
  { w: 18, h: 9, c: 6, d: 3 },
  { w: 16, h: 12, c: 8, d: 6 },
  { w: 20, h: 10, c: 5, d: 4 },
  { w: 9, h: 9, c: 3, d: 3 },
  { w: 22, h: 14, c: 6, d: 7 },
  { w: 24, h: 12, c: 8, d: 4 },
  { w: 13, h: 11, c: 5, d: 5 },
  { w: 17, h: 10, c: 4, d: 5 },
  { w: 19, h: 13, c: 7, d: 6 },
  { w: 21, h: 15, c: 6, d: 5 },
  { w: 11, h: 7, c: 3, d: 2 },
];

const MIXED_SPECS: MixedSpec[] = [
  { w: 10, h: 6, d: 4, hx: 2, hy: 2, hw: 2, hh: 1 },
  { w: 12, h: 8, d: 5, hx: 3, hy: 2, hw: 3, hh: 2 },
  { w: 14, h: 6, d: 4, hx: 4, hy: 1, hw: 2, hh: 3 },
  { w: 16, h: 10, d: 6, hx: 5, hy: 3, hw: 4, hh: 2 },
  { w: 18, h: 9, d: 7, hx: 2, hy: 2, hw: 3, hh: 3 },
  { w: 20, h: 12, d: 5, hx: 6, hy: 4, hw: 5, hh: 3 },
  { w: 15, h: 9, d: 6, hx: 4, hy: 2, hw: 2, hh: 4 },
  { w: 11, h: 7, d: 3, hx: 2, hy: 1, hw: 2, hh: 2 },
  { w: 13, h: 8, d: 5, hx: 5, hy: 2, hw: 3, hh: 3 },
  { w: 17, h: 11, d: 4, hx: 3, hy: 5, hw: 4, hh: 2 },
  { w: 19, h: 10, d: 6, hx: 7, hy: 3, hw: 5, hh: 2 },
  { w: 21, h: 14, d: 7, hx: 4, hy: 4, hw: 3, hh: 5 },
  { w: 22, h: 12, d: 8, hx: 8, hy: 2, hw: 4, hh: 4 },
  { w: 24, h: 16, d: 6, hx: 6, hy: 6, hw: 5, hh: 3 },
  { w: 18, h: 14, d: 5, hx: 5, hy: 5, hw: 4, hh: 4 },
];

export const questions: Question[] = [
  ...RECTANGLE_SPECS.map((spec, index) => rectangleQuestion(index + 1, spec)),
  ...TRIANGLE_SPECS.map((spec, index) => triangleQuestion(index + 1 + RECTANGLE_SPECS.length, spec)),
  ...ADD_TRIANGLE_SPECS.map((spec, index) =>
    addTriangleQuestion(index + 1 + RECTANGLE_SPECS.length + TRIANGLE_SPECS.length, spec),
  ),
  ...CUT_CORNER_SPECS.map((spec, index) =>
    cutCornerQuestion(index + 1 + RECTANGLE_SPECS.length + TRIANGLE_SPECS.length + ADD_TRIANGLE_SPECS.length, spec),
  ),
  ...MIXED_SPECS.map((spec, index) =>
    mixedQuestion(
      index +
        1 +
        RECTANGLE_SPECS.length +
        TRIANGLE_SPECS.length +
        ADD_TRIANGLE_SPECS.length +
        CUT_CORNER_SPECS.length,
      spec,
    ),
  ),
];
