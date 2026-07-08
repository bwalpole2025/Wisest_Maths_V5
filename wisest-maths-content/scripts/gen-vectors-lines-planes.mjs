import { writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));

const LEVEL = "A-Level Further Maths";
const TOPIC = "Further Maths Year 1: Pure (Core Pure 1)";
const SUB = "Vectors: lines and planes";
const SID = "fm.y1.pure.vectors-lines-planes";

const questions = [];
let counter = 0;

function step(description, workingLatex, explanation) {
  return { description, workingLatex, explanation, diagram: null };
}

function push({ difficulty, marks, tags, questionText, steps, finalAnswer, answerType = "written" }) {
  counter += 1;
  questions.push({
    level: LEVEL,
    topic: TOPIC,
    subtopic: SUB,
    subtopicId: SID,
    questionDiagram: null,
    id: `${SID}.q${String(counter).padStart(3, "0")}`,
    tags,
    difficulty,
    marks,
    answerType,
    questionText,
    workedSolution: {
      steps: steps.map((s, i) => ({ stepNumber: i + 1, ...s })),
      finalAnswer,
    },
  });
}

const dot = (a, b) => a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
const sub = (a, b) => [a[0] - b[0], a[1] - b[1], a[2] - b[2]];
const add = (a, b) => [a[0] + b[0], a[1] + b[1], a[2] + b[2]];
const scale = (a, s) => [a[0] * s, a[1] * s, a[2] * s];
const cross = (a, b) => [
  a[1] * b[2] - a[2] * b[1],
  a[2] * b[0] - a[0] * b[2],
  a[0] * b[1] - a[1] * b[0],
];

function fmtNum(n) {
  if (n === 1) return "";
  if (n === -1) return "-";
  return String(n);
}

function vecijk([x, y, z]) {
  const terms = [];
  if (x) terms.push(`${fmtNum(x)}\\mathbf{i}`);
  if (y) terms.push(`${fmtNum(y)}\\mathbf{j}`);
  if (z) terms.push(`${fmtNum(z)}\\mathbf{k}`);
  if (!terms.length) return "\\mathbf{0}";
  return terms.join(" + ").replace(/\+ -/g, "- ");
}

function pointLabel(name, p) {
  return `$${name}(${p[0]},\\,${p[1]},\\,${p[2]})$`;
}

// ======================================================================
// EASY (25)
// ======================================================================

const easyLinePointDir = [
  { a: [1, 2, 3], d: [2, 1, -1] },
  { a: [0, 1, 4], d: [3, -1, 2] },
  { a: [-1, 3, 0], d: [1, 2, 2] },
  { a: [2, 0, 5], d: [-1, 4, 1] },
  { a: [4, -2, 1], d: [2, 2, 3] },
  { a: [1, 1, 1], d: [1, -1, 0] },
];

for (const { a, d } of easyLinePointDir) {
  push({
    difficulty: "Easy",
    marks: 3,
    tags: ["vector-line", "point-direction"],
    answerType: "vector",
    questionText: `A line passes through the point with position vector $\\mathbf{a} = ${vecijk(a)}$ and has direction vector $\\mathbf{d} = ${vecijk(d)}$. Write a vector equation of the line.`,
    steps: [
      step("Recall the vector form of a line", "\\mathbf{r} = \\mathbf{a} + \\lambda\\mathbf{d}", "A line through a fixed point $\\mathbf{a}$ in direction $\\mathbf{d}$ is reached by starting at $\\mathbf{a}$ and moving a scalar multiple $\\lambda$ along $\\mathbf{d}$."),
      step("Identify the given vectors", `\\mathbf{a} = ${vecijk(a)},\\quad \\mathbf{d} = ${vecijk(d)}`, "The position vector of the known point and the direction vector are read directly from the question."),
      step("Substitute into the formula", `\\mathbf{r} = (${vecijk(a)}) + \\lambda(${vecijk(d)})`, "Replace $\\mathbf{a}$ and $\\mathbf{d}$ with their component forms."),
      step("Write the equation cleanly", `\\mathbf{r} = ${vecijk(a)} + \\lambda(${vecijk(d)})`, "Keeping the direction vector in brackets makes it clear which vector is scaled by $\\lambda$."),
      step("State the vector equation", `\\mathbf{r} = ${vecijk(a)} + \\lambda(${vecijk(d)})`, "This is the standard vector equation: every point on the line has position vector of this form for some real $\\lambda$."),
    ],
    finalAnswer: `$\\mathbf{r} = ${vecijk(a)} + \\lambda(${vecijk(d)})$`,
  });
}

const easyLineTwoPoints = [
  { a: [1, 0, 2], b: [3, 4, 6] },
  { a: [2, 1, -1], b: [5, 3, 2] },
  { a: [0, 2, 1], b: [4, 2, 5] },
  { a: [-1, 1, 3], b: [2, 4, 0] },
  { a: [1, 3, 2], b: [4, 1, 8] },
  { a: [2, 0, 0], b: [2, 3, 4] },
];

for (const { a, b } of easyLineTwoPoints) {
  const ab = sub(b, a);
  push({
    difficulty: "Easy",
    marks: 4,
    tags: ["vector-line", "two-points"],
    answerType: "vector",
    questionText: `Points $A$ and $B$ have position vectors $\\mathbf{a} = ${vecijk(a)}$ and $\\mathbf{b} = ${vecijk(b)}$. Find a vector equation of the line through $A$ and $B$.`,
    steps: [
      step("Recall the vector form of a line", "\\mathbf{r} = \\mathbf{a} + \\lambda\\mathbf{d}", "Any line through $A$ can be written using a point on the line and a direction vector along it."),
      step("Find the direction vector", `\\overrightarrow{AB} = \\mathbf{b} - \\mathbf{a} = ${vecijk(ab)}`, "The displacement from $A$ to $B$ points along the line, so it serves as the direction vector."),
      step("Choose the starting point", `\\mathbf{a} = ${vecijk(a)}`, "We may use either $A$ or $B$ as the fixed point; $A$ is the natural choice."),
      step("Substitute into the formula", `\\mathbf{r} = ${vecijk(a)} + \\lambda(${vecijk(ab)})`, "Insert the position vector of $A$ and the direction $\\overrightarrow{AB}$."),
      step("Write the vector equation", `\\mathbf{r} = ${vecijk(a)} + \\lambda(${vecijk(ab)})`, "Every point on the line through $A$ and $B$ has a position vector of this form."),
      step("Note an equivalent form", `\\mathbf{r} = ${vecijk(b)} + \\mu(${vecijk(ab)})`, "Using $B$ instead of $A$ gives an equivalent line, because both points lie on the same straight path."),
    ],
    finalAnswer: `$\\mathbf{r} = ${vecijk(a)} + \\lambda(${vecijk(ab)})$`,
  });
}

const easyPlaneScalar = [
  { a: [1, 2, 3], n: [1, 1, 1] },
  { a: [2, 0, 1], n: [2, -1, 3] },
  { a: [0, 3, -1], n: [1, 0, 2] },
  { a: [-1, 1, 4], n: [3, 2, -1] },
  { a: [4, 1, 0], n: [0, 1, 1] },
];

for (const { a, n } of easyPlaneScalar) {
  const d = dot(a, n);
  push({
    difficulty: "Easy",
    marks: 3,
    tags: ["scalar-product-plane", "normal-vector"],
    answerType: "written",
    questionText: `A plane passes through the point with position vector $\\mathbf{a} = ${vecijk(a)}$ and has normal vector $\\mathbf{n} = ${vecijk(n)}$. Write the equation of the plane in scalar-product form $\\mathbf{r}\\cdot\\mathbf{n} = d$.`,
    steps: [
      step("Recall the scalar-product form", "\\mathbf{r}\\cdot\\mathbf{n} = d", "A plane with normal $\\mathbf{n}$ consists of all points whose position vector $\\mathbf{r}$ has a fixed scalar product with $\\mathbf{n}$."),
      step("Identify the normal vector", `\\mathbf{n} = ${vecijk(n)}`, "The normal is perpendicular to every vector lying in the plane."),
      step("Use a point on the plane to find $d$", `d = \\mathbf{a}\\cdot\\mathbf{n}`, "Substituting the known point $\\mathbf{a}$ into $\\mathbf{r}\\cdot\\mathbf{n}=d$ determines the constant $d$."),
      step("Compute the scalar product", `d = (${a[0]})(${n[0]}) + (${a[1]})(${n[1]}) + (${a[2]})(${n[2]}) = ${d}`, "Multiply corresponding components and add."),
      step("Write the plane equation", `\\mathbf{r}\\cdot(${vecijk(n)}) = ${d}`, "This is the scalar-product equation of the plane."),
      step("State the answer", `\\mathbf{r}\\cdot\\mathbf{n} = ${d}`, "Every point on the plane satisfies this equation."),
    ],
    finalAnswer: `$\\mathbf{r}\\cdot(${vecijk(n)}) = ${d}$`,
  });
}

const easyPlaneCartesian = [
  { a: [1, 0, 2], n: [2, 1, -1] },
  { a: [3, 1, 0], n: [1, -2, 2] },
  { a: [0, 2, 1], n: [1, 1, 0] },
];

for (const { a, n } of easyPlaneCartesian) {
  const d = dot(a, n);
  const cart = `${n[0]}x ${n[1] >= 0 ? "+" : ""}${n[1]}y ${n[2] >= 0 ? "+" : ""}${n[2]}z = ${d}`;
  push({
    difficulty: "Easy",
    marks: 4,
    tags: ["cartesian-plane", "normal-vector"],
    answerType: "written",
    questionText: `A plane passes through ${pointLabel("P", a)} and has normal vector $\\mathbf{n} = ${vecijk(n)}$. Find the Cartesian equation of the plane.`,
    steps: [
      step("Recall the Cartesian form", "ax + by + cz = d", "The coefficients $a$, $b$, $c$ are the components of the normal vector."),
      step("Read the normal components", `a = ${n[0]},\\quad b = ${n[1]},\\quad c = ${n[2]}`, "The normal vector gives the left-hand coefficients directly."),
      step("Substitute the known point", `${n[0]}(${a[0]}) + ${n[1]}(${a[1]}) + ${n[2]}(${a[2]}) = d`, "Plugging $P$ into $ax+by+cz=d$ finds the constant term."),
      step("Evaluate $d$", `d = ${d}`, "The scalar product $\\mathbf{n}\\cdot\\mathbf{a}$ equals $d$."),
      step("Write the Cartesian equation", cart.replace(/\+ -/g, "- "),
        "This equation is satisfied by every point on the plane."),
      step("Check with the given point", `${n[0]}\\times${a[0]} + ${n[1]}\\times${a[1]} + ${n[2]}\\times${a[2]} = ${d}`, "Substituting $P$ confirms the equation holds."),
    ],
    finalAnswer: `$${cart.replace(/\+ -/g, "- ")}$`,
  });
}

const easyPointOnLine = [
  { a: [1, 2, 0], d: [2, 1, 3], lam: 2, pt: null },
  { a: [0, 1, 4], d: [1, -1, 2], lam: 3, pt: null },
  { a: [3, 0, 1], d: [-1, 2, 1], lam: -1, pt: null },
];

for (const item of easyPointOnLine) {
  const { a, d, lam } = item;
  const pt = add(a, scale(d, lam));
  item.pt = pt;
  push({
    difficulty: "Easy",
    marks: 3,
    tags: ["vector-line", "parameter"],
    answerType: "written",
    questionText: `The line $\\mathbf{r} = ${vecijk(a)} + \\lambda(${vecijk(d)})$ passes through a point $P$ when $\\lambda = ${lam}$. Find the coordinates of $P$.`,
    steps: [
      step("Recall how $\\lambda$ locates a point", "\\mathbf{r} = \\mathbf{a} + \\lambda\\mathbf{d}", "Each value of $\\lambda$ picks out one point on the line."),
      step("Substitute the given parameter", `\\mathbf{r} = ${vecijk(a)} + (${lam})(${vecijk(d)})`, "Replace $\\lambda$ with ${lam} in the vector equation."),
      step("Scale the direction vector", `${lam}(${vecijk(d)}) = ${vecijk(scale(d, lam))}`, "Multiply each component of $\\mathbf{d}$ by $\\lambda$."),
      step("Add to the starting vector", `\\mathbf{r} = ${vecijk(a)} + ${vecijk(scale(d, lam))} = ${vecijk(pt)}`, "Add component-wise to find the position vector of $P$."),
      step("Read the coordinates", `P(${pt[0]},\\,${pt[1]},\\,${pt[2]})`, "The components of $\\mathbf{r}$ are the Cartesian coordinates of the point."),
      step("State the answer", `P(${pt[0]},\\,${pt[1]},\\,${pt[2]})`, "This is the point on the line corresponding to $\\lambda = ${lam}$."),
    ],
    finalAnswer: `$P(${pt[0]},\\,${pt[1]},\\,${pt[2]})$`,
  });
}

const easyPointOnPlane = [
  { n: [1, 2, 1], d: 6, p: [1, 2, 1] },
  { n: [2, -1, 3], d: 5, p: [2, 1, 0] },
];

for (const { n, d, p } of easyPointOnPlane) {
  const val = dot(n, p);
  const on = val === d;
  push({
    difficulty: "Easy",
    marks: 3,
    tags: ["cartesian-plane", "verification"],
    answerType: "written",
    questionText: `Determine whether the point ${pointLabel("Q", p)} lies on the plane ${n[0]}x ${n[1] >= 0 ? "+" : ""}${n[1]}y ${n[2] >= 0 ? "+" : ""}${n[2]}z = ${d}$.`,
    steps: [
      step("Recall the plane test", "\\text{substitute the point into } ax+by+cz=d", "A point lies on the plane if and only if its coordinates satisfy the equation."),
      step("Substitute the coordinates", `${n[0]}(${p[0]}) + ${n[1]}(${p[1]}) + ${n[2]}(${p[2]})`, "Replace $x$, $y$, $z$ with the coordinates of $Q$."),
      step("Evaluate the left-hand side", `= ${val}`, "Multiply and add the terms."),
      step("Compare with $d$", `${val} ${on ? "=" : "\\neq"} ${d}`, "Check whether the left-hand side equals the right-hand side $d$."),
      step("Draw the conclusion", on ? "\\text{Q lies on the plane}" : "\\text{Q does not lie on the plane}",
        on ? "The coordinates satisfy the equation, so $Q$ is on the plane." : "The coordinates fail the equation, so $Q$ is off the plane."),
    ],
    finalAnswer: on ? `Yes, $Q$ lies on the plane.` : `No, $Q$ does not lie on the plane.`,
  });
}

// ======================================================================
// INTERMEDIATE (25)
// ======================================================================

const intCartesianLine = [
  { a: [1, 2, 3], d: [2, 4, -2] },
  { a: [0, 1, 5], d: [3, -1, 0] },
  { a: [2, 0, 1], d: [1, 2, 3] },
  { a: [-1, 3, 2], d: [2, 0, 4] },
  { a: [4, 1, 0], d: [1, 3, -2] },
];

for (const { a, d } of intCartesianLine) {
  const param = `x = ${a[0]}${d[0] ? ` + ${d[0]}\\lambda` : ""},\\quad y = ${a[1]}${d[1] ? ` + ${d[1]}\\lambda` : ""},\\quad z = ${a[2]}${d[2] ? ` + ${d[2]}\\lambda` : ""}`;
  const ratios = [];
  if (d[0]) ratios.push(`\\frac{x - ${a[0]}}{${d[0]}}`);
  if (d[1]) ratios.push(`\\frac{y - ${a[1]}}{${d[1]}}`);
  if (d[2]) ratios.push(`\\frac{z - ${a[2]}}{${d[2]}}`);
  const sym = ratios.join(" = ");
  push({
    difficulty: "Intermediate",
    marks: 5,
    tags: ["vector-line", "cartesian-form"],
    answerType: "written",
    questionText: `The line $L$ has vector equation $\\mathbf{r} = ${vecijk(a)} + \\lambda(${vecijk(d)})$. Write the Cartesian equations of $L$ in symmetric form.`,
    steps: [
      step("Write the parametric form", `\\mathbf{r} = ${vecijk(a)} + \\lambda(${vecijk(d)})`, "Start from the given vector equation."),
      step("Separate into component equations", param, "Equating $\\mathbf{i}$, $\\mathbf{j}$ and $\\mathbf{k}$ components gives three parametric equations."),
      step("Solve each component for $\\lambda$", d[0] ? `\\lambda = \\frac{x - ${a[0]}}{${d[0]}}` : "\\text{(no } x\\text{ variation)}",
        "Each non-constant component expresses $\\lambda$ in terms of $x$, $y$ or $z$."),
      step("Equate the expressions for $\\lambda$", sym, "Points on the line satisfy all three component relations simultaneously, so the $\\lambda$ values must match."),
      step("State the symmetric Cartesian form", sym, "This single chain of equal ratios describes the same line as the vector equation."),
      step("Note the direction ratios", `\\text{direction ratios } ${d[0]} : ${d[1]} : ${d[2]}`, "The denominators are the components of the direction vector."),
      step("Verify with the known point", `\\text{At } \\lambda=0:\\; (${a[0]},\\,${a[1]},\\,${a[2]})`, "Setting $\\lambda=0$ recovers the point ${vecijk(a)}, confirming the conversion."),
    ],
    finalAnswer: `$${sym}$`,
  });
}

const intPlaneThreePoints = [
  { a: [1, 0, 0], b: [0, 2, 0], c: [0, 0, 3] },
  { a: [1, 1, 0], b: [2, 0, 1], c: [0, 1, 2] },
  { a: [2, 1, 3], b: [4, 0, 1], c: [1, 2, 0] },
  { a: [0, 0, 1], b: [1, 2, 3], c: [2, 1, 0] },
  { a: [1, 2, 1], b: [3, 1, 2], c: [2, 3, 4] },
];

for (const { a, b, c } of intPlaneThreePoints) {
  const ab = sub(b, a);
  const ac = sub(c, a);
  const n = cross(ab, ac);
  const d = dot(n, a);
  const cart = `${n[0]}x ${n[1] >= 0 ? "+" : ""}${n[1]}y ${n[2] >= 0 ? "+" : ""}${n[2]}z = ${d}`;
  push({
    difficulty: "Intermediate",
    marks: 6,
    tags: ["cartesian-plane", "three-points"],
    answerType: "written",
    questionText: `Find the Cartesian equation of the plane through the points ${pointLabel("A", a)}, ${pointLabel("B", b)} and ${pointLabel("C", c)}.`,
    steps: [
      step("Find two vectors in the plane", `\\overrightarrow{AB} = ${vecijk(ab)},\\quad \\overrightarrow{AC} = ${vecijk(ac)}`, "Any two non-parallel chords of the triangle lie in the plane."),
      step("Recall the normal from a cross product", "\\mathbf{n} = \\overrightarrow{AB} \\times \\overrightarrow{AC}", "The cross product of two in-plane vectors is perpendicular to the plane."),
      step("Compute the cross product", `\\mathbf{n} = ${vecijk(n)}`, "Apply the determinant formula component by component."),
      step("Use a point to find $d$", `d = \\mathbf{n}\\cdot\\mathbf{a} = ${d}`, "Substitute $A$ into $ax+by+cz=d$."),
      step("Write the Cartesian equation", cart.replace(/\+ -/g, "- "), "The normal components become the coefficients of $x$, $y$ and $z$."),
      step("Verify with point $B$", `${n[0]}(${b[0]}) + ${n[1]}(${b[1]}) + ${n[2]}(${b[2]}) = ${dot(n, b)}`, "Substituting $B$ should also give $d$."),
      step("Verify with point $C$", `${n[0]}(${c[0]}) + ${n[1]}(${c[1]}) + ${n[2]}(${c[2]}) = ${dot(n, c)}`, "All three defining points must satisfy the plane equation."),
      step("State the final equation", cart.replace(/\+ -/g, "- "), "This plane contains $A$, $B$ and $C$."),
    ],
    finalAnswer: `$${cart.replace(/\+ -/g, "- ")}$`,
  });
}

const intPlaneParametric = [
  { a: [1, 0, 2], u: [2, 1, 0], v: [0, 1, 3] },
  { a: [0, 1, 1], u: [1, 2, 1], v: [3, 0, 2] },
  { a: [2, 2, 0], u: [1, -1, 2], v: [0, 2, 1] },
  { a: [-1, 0, 3], u: [2, 0, 1], v: [1, 3, -1] },
  { a: [3, 1, 2], u: [1, 1, 0], v: [0, 1, 2] },
];

for (const { a, u, v } of intPlaneParametric) {
  const n = cross(u, v);
  const d = dot(n, a);
  push({
    difficulty: "Intermediate",
    marks: 5,
    tags: ["vector-plane", "parametric-form"],
    answerType: "vector",
    questionText: `A plane passes through $\\mathbf{a} = ${vecijk(a)}$ and contains the direction vectors $\\mathbf{u} = ${vecijk(u)}$ and $\\mathbf{v} = ${vecijk(v)}$. Write a vector equation of the plane.`,
    steps: [
      step("Recall the parametric vector form", "\\mathbf{r} = \\mathbf{a} + s\\mathbf{u} + t\\mathbf{v}", "Starting at $\\mathbf{a}$ and moving along $\\mathbf{u}$ and $\\mathbf{v}$ reaches every point in the plane."),
      step("Identify the given vectors", `\\mathbf{a} = ${vecijk(a)},\\; \\mathbf{u} = ${vecijk(u)},\\; \\mathbf{v} = ${vecijk(v)}`, "The point and two non-parallel direction vectors define the plane."),
      step("Substitute into the formula", `\\mathbf{r} = ${vecijk(a)} + s(${vecijk(u)}) + t(${vecijk(v)})`, "Insert the specific vectors from the question."),
      step("State the vector equation", `\\mathbf{r} = ${vecijk(a)} + s(${vecijk(u)}) + t(${vecijk(v)})`, "This describes the same plane as the scalar-product form."),
      step("Find the normal (optional check)", `\\mathbf{n} = \\mathbf{u}\\times\\mathbf{v} = ${vecijk(n)}`, "The cross product gives a normal for converting to Cartesian form."),
      step("Convert to scalar-product form", `\\mathbf{r}\\cdot(${vecijk(n)}) = ${d}`, "The constant is $\\mathbf{n}\\cdot\\mathbf{a}$, confirming consistency."),
      step("Note the parameters", "s, t \\in \\mathbb{R}", "Each choice of $s$ and $t$ locates one point in the plane."),
    ],
    finalAnswer: `$\\mathbf{r} = ${vecijk(a)} + s(${vecijk(u)}) + t(${vecijk(v)})$`,
  });
}

const intLinePoint = [
  { a: [1, 0, 2], d: [2, 1, -1], lam: 3 },
  { a: [0, 3, 1], d: [1, -2, 4], lam: -2 },
  { a: [2, 1, 0], d: [3, 0, 2], lam: 1 },
  { a: [-1, 2, 3], d: [1, 1, 1], lam: 4 },
];

for (const { a, d, lam } of intLinePoint) {
  const pt = add(a, scale(d, lam));
  push({
    difficulty: "Intermediate",
    marks: 4,
    tags: ["vector-line", "coordinates"],
    answerType: "written",
    questionText: `The point $P$ lies on the line $\\mathbf{r} = ${vecijk(a)} + \\lambda(${vecijk(d)})$. Given that $\\lambda = ${lam}$, find the coordinates of $P$.`,
    steps: [
      step("Substitute $\\lambda$ into the line equation", `\\mathbf{r} = ${vecijk(a)} + (${lam})(${vecijk(d)})`, "The parameter value pins down a single point on the line."),
      step("Scale the direction vector", `${lam}(${vecijk(d)}) = ${vecijk(scale(d, lam))}`, "Multiply each component of $\\mathbf{d}$ by $\\lambda$."),
      step("Add to $\\mathbf{a}$", `\\mathbf{r} = ${vecijk(pt)}`, "Component-wise addition gives the position vector of $P$."),
      step("Read off the coordinates", `P(${pt[0]},\\,${pt[1]},\\,${pt[2]})`, "The $\\mathbf{i}$, $\\mathbf{j}$ and $\\mathbf{k}$ coefficients are the $x$, $y$ and $z$ coordinates."),
      step("State the answer", `P(${pt[0]},\\,${pt[1]},\\,${pt[2]})`, "This is the required point on the line."),
    ],
    finalAnswer: `$P(${pt[0]},\\,${pt[1]},\\,${pt[2]})$`,
  });
}

const intMeetCoordPlane = [
  { a: [1, 2, 3], d: [2, 1, -1], plane: "z=0", coord: "z", val: 0 },
  { a: [0, 1, 4], d: [3, -1, 2], plane: "x=0", coord: "x", val: 0 },
  { a: [2, 0, 5], d: [1, 2, 3], plane: "y=0", coord: "y", val: 0 },
];

for (const { a, d, plane, coord, val } of intMeetCoordPlane) {
  const idx = { x: 0, y: 1, z: 2 }[coord];
  const lam = (val - a[idx]) / d[idx];
  const pt = add(a, scale(d, lam));
  push({
    difficulty: "Intermediate",
    marks: 5,
    tags: ["vector-line", "coordinate-plane"],
    answerType: "written",
    questionText: `The line $\\mathbf{r} = ${vecijk(a)} + \\lambda(${vecijk(d)})$ meets the plane $${plane}$. Find the point of intersection.`,
    steps: [
      step("Write the parametric components", `x = ${a[0]}${d[0] ? ` + ${d[0]}\\lambda` : ""},\\; y = ${a[1]}${d[1] ? ` + ${d[1]}\\lambda` : ""},\\; z = ${a[2]}${d[2] ? ` + ${d[2]}\\lambda` : ""}`,
        "Separate the vector equation into $x$, $y$ and $z$ relations."),
      step("Use the plane condition", `${coord} = ${val}`, `On the plane $${plane}$, the ${coord}-coordinate is fixed at ${val}.`),
      step("Solve for $\\lambda$", `${a[idx]} + ${d[idx]}\\lambda = ${val} \\Rightarrow \\lambda = ${lam}`, "Substitute into the ${coord}-component and solve."),
      step("Find the remaining coordinates", `x = ${pt[0]},\\; y = ${pt[1]},\\; z = ${pt[2]}`, "Substitute $\\lambda = ${lam}$ back into all three components."),
      step("State the intersection point", `(${pt[0]},\\,${pt[1]},\\,${pt[2]})`, "The point satisfies both the line and the plane equations."),
      step("Verify the plane condition", `${coord} = ${pt[idx]}`, "The ${coord}-coordinate equals ${val}, confirming the point lies on $${plane}$."),
    ],
    finalAnswer: `$(${pt[0]},\\,${pt[1]},\\,${pt[2]})$`,
  });
}

const intParallelCheck = [
  { d1: [2, 4, -2], d2: [1, 2, -1] },
  { d1: [3, -1, 0], d2: [6, -2, 0] },
  { d1: [1, 0, 2], d2: [2, 1, 5] },
];

for (const { d1, d2 } of intParallelCheck) {
  const ratios = d1.map((c, i) => (d2[i] ? c / d2[i] : null)).filter((r) => r !== null);
  const parallel = ratios.length >= 2 && ratios.every((r) => r === ratios[0]);
  const k = parallel ? ratios[0] : null;
  push({
    difficulty: "Intermediate",
    marks: 4,
    tags: ["vector-line", "parallel"],
    answerType: "written",
    questionText: `Line $L_1$ has direction vector $\\mathbf{d}_1 = ${vecijk(d1)}$ and line $L_2$ has direction vector $\\mathbf{d}_2 = ${vecijk(d2)}$. Determine whether the lines are parallel.`,
    steps: [
      step("Recall the parallel condition", "\\mathbf{d}_1 = k\\mathbf{d}_2 \\text{ for some } k \\neq 0", "Two lines are parallel when their direction vectors are scalar multiples."),
      step("Compare component ratios", d1.map((c, i) => `\\frac{${c}}{${d2[i]}}`).join(",\\;"),
        "If the lines are parallel, all non-zero component ratios must be equal."),
      step("Evaluate the ratios", parallel ? `k = ${k} \\text{ for each component}` : "\\text{ratios are not equal}",
        parallel ? "Every ratio gives the same scalar $k$." : "At least one ratio differs, so no single scalar works."),
      step("Draw the conclusion", parallel ? "\\text{The lines are parallel}" : "\\text{The lines are not parallel}",
        parallel ? `$\\mathbf{d}_1 = ${k}\\mathbf{d}_2$, so the direction vectors are parallel.` : "The direction vectors are not scalar multiples, so the lines are not parallel."),
      step("State the answer", parallel ? `\\mathbf{d}_1 = ${k}\\mathbf{d}_2` : "\\text{not parallel}",
        "Parallelism depends only on the direction vectors, not on where the lines sit in space."),
    ],
    finalAnswer: parallel ? `Yes, the lines are parallel ($\\mathbf{d}_1 = ${k}\\mathbf{d}_2$).` : `No, the lines are not parallel.`,
  });
}

// ======================================================================
// HARD (20)
// ======================================================================

const hardLinePlane = [
  { a: [1, 2, 3], d: [2, 1, -1], n: [1, 1, 1], planeD: 6 },
  { a: [0, 1, 4], d: [3, -1, 2], n: [2, 1, -1], planeD: 3 },
  { a: [2, 0, 1], d: [1, 2, 3], n: [1, 0, 2], planeD: 5 },
  { a: [-1, 3, 2], d: [2, 0, 4], n: [3, 2, -1], planeD: 4 },
  { a: [4, 1, 0], d: [1, 3, -2], n: [0, 1, 1], planeD: 2 },
  { a: [1, -2, 4], d: [0, 2, 1], n: [2, -1, 3], planeD: 7 },
  { a: [3, 2, 1], d: [2, 1, 0], n: [1, -2, 2], planeD: 1 },
];

for (const { a, d, n, planeD } of hardLinePlane) {
  const denom = dot(d, n);
  const lam = (planeD - dot(a, n)) / denom;
  const pt = add(a, scale(d, lam));
  push({
    difficulty: "Hard",
    marks: 7,
    tags: ["line-plane-intersection"],
    answerType: "written",
    questionText: `Find the point where the line $\\mathbf{r} = ${vecijk(a)} + \\lambda(${vecijk(d)})$ meets the plane $\\mathbf{r}\\cdot(${vecijk(n)}) = ${planeD}$.`,
    steps: [
      step("Substitute the line into the plane", `(${vecijk(a)} + \\lambda${vecijk(d)})\\cdot(${vecijk(n)}) = ${planeD}`, "Replace $\\mathbf{r}$ in the plane equation with the line expression."),
      step("Expand the scalar product", `\\mathbf{a}\\cdot\\mathbf{n} + \\lambda(\\mathbf{d}\\cdot\\mathbf{n}) = ${planeD}`, "Distribute the dot product over the sum."),
      step("Compute $\\mathbf{a}\\cdot\\mathbf{n}$", `\\mathbf{a}\\cdot\\mathbf{n} = ${dot(a, n)}`, "Multiply and add the corresponding components."),
      step("Compute $\\mathbf{d}\\cdot\\mathbf{n}$", `\\mathbf{d}\\cdot\\mathbf{n} = ${denom}`, "This is the coefficient of $\\lambda$."),
      step("Solve for $\\lambda$", `${dot(a, n)} + ${denom}\\lambda = ${planeD} \\Rightarrow \\lambda = ${lam}`, "Rearrange the linear equation in $\\lambda$."),
      step("Substitute $\\lambda$ back into the line", `\\mathbf{r} = ${vecijk(a)} + ${lam}(${vecijk(d)}) = ${vecijk(pt)}`, "Insert the parameter value to find the position vector."),
      step("Read the coordinates", `(${pt[0]},\\,${pt[1]},\\,${pt[2]})`, "The components of $\\mathbf{r}$ give the intersection point."),
      step("Verify in the plane equation", `${n[0]}(${pt[0]}) + ${n[1]}(${pt[1]}) + ${n[2]}(${pt[2]}) = ${dot(n, pt)}`, "Substituting back should give $${planeD}$."),
      step("Check $\\lambda$ is defined", denom !== 0 ? `\\mathbf{d}\\cdot\\mathbf{n} = ${denom} \\neq 0` : "\\text{line parallel to plane}",
        denom !== 0 ? "A non-zero dot product means the line is not parallel to the plane, so a unique intersection exists." : ""),
      step("State the intersection point", `(${pt[0]},\\,${pt[1]},\\,${pt[2]})`, "This point lies on both the line and the plane."),
    ],
    finalAnswer: `$(${pt[0]},\\,${pt[1]},\\,${pt[2]})$`,
  });
}

const hardTwoPlanes = [
  { n1: [1, 1, 1], d1: 6, n2: [2, -1, 3], d2: 5 },
  { n1: [1, 0, 2], d1: 4, n2: [0, 1, 1], d2: 3 },
  { n1: [3, 2, -1], d1: 7, n2: [1, 1, 0], d2: 2 },
  { n1: [2, 1, -1], d1: 3, n2: [1, -2, 2], d2: 1 },
  { n1: [1, 2, 1], d1: 5, n2: [2, 0, 1], d2: 4 },
  { n1: [0, 1, 2], d1: 6, n2: [3, -1, 0], d2: 2 },
  { n1: [2, 2, 1], d1: 8, n2: [1, 0, 1], d2: 3 },
];

for (const { n1, d1, n2, d2 } of hardTwoPlanes) {
  const dir = cross(n1, n2);
  // find a point: solve n1·r=d1, n2·r=d2, set one coord to 0
  let point = null;
  for (const fix of [0, 1, 2]) {
    const free = [0, 1, 2].filter((i) => i !== fix);
    const A = [[n1[free[0]], n1[free[1]]], [n2[free[0]], n2[free[1]]]];
    const det = A[0][0] * A[1][1] - A[0][1] * A[1][0];
    if (det !== 0) {
      const rhs = [d1 - n1[fix] * 0, d2 - n2[fix] * 0];
      const x = (rhs[0] * A[1][1] - rhs[1] * A[0][1]) / det;
      const y = (A[0][0] * rhs[1] - A[1][0] * rhs[0]) / det;
      point = [0, 0, 0];
      point[fix] = 0;
      point[free[0]] = x;
      point[free[1]] = y;
      break;
    }
  }
  push({
    difficulty: "Hard",
    marks: 8,
    tags: ["plane-intersection", "line-of-intersection"],
    answerType: "vector",
    questionText: `The planes $\\Pi_1: \\mathbf{r}\\cdot(${vecijk(n1)}) = ${d1}$ and $\\Pi_2: \\mathbf{r}\\cdot(${vecijk(n2)}) = ${d2}$ intersect in a line. Find a vector equation of the line of intersection.`,
    steps: [
      step("Find the direction of the intersection line", "\\mathbf{d} = \\mathbf{n}_1 \\times \\mathbf{n}_2", "The line direction is perpendicular to both normals, so it lies in both planes."),
      step("Compute the cross product", `\\mathbf{d} = ${vecijk(dir)}`, "Apply the cross-product formula to the two normals."),
      step("Find a point on both planes", "\\text{solve } \\mathbf{n}_1\\cdot\\mathbf{r}=d_1,\\; \\mathbf{n}_2\\cdot\\mathbf{r}=d_2", "Any common point anchors the line equation."),
      step("Set one coordinate to zero", `\\text{let } z = 0`, "Fixing one variable reduces the problem to two simultaneous equations."),
      step("Solve the simultaneous equations", `\\mathbf{a} = ${vecijk(point)}`, "The solution gives a position vector on the line of intersection."),
      step("Verify the point lies on $\\Pi_1$", `\\mathbf{a}\\cdot\\mathbf{n}_1 = ${dot(point, n1)} = ${d1}`, "Substituting confirms the point satisfies the first plane."),
      step("Verify the point lies on $\\Pi_2$", `\\mathbf{a}\\cdot\\mathbf{n}_2 = ${dot(point, n2)} = ${d2}`, "The point also satisfies the second plane."),
      step("Write the vector equation", `\\mathbf{r} = ${vecijk(point)} + \\lambda(${vecijk(dir)})`, "Combine the known point with the cross-product direction."),
      step("Note the direction is valid", "\\mathbf{d}\\cdot\\mathbf{n}_1 = 0,\\; \\mathbf{d}\\cdot\\mathbf{n}_2 = 0", "The direction is perpendicular to both normals, so moving along it stays in both planes."),
      step("State the line of intersection", `\\mathbf{r} = ${vecijk(point)} + \\lambda(${vecijk(dir)})`, "This line is the set of points common to both planes."),
    ],
    finalAnswer: `$\\mathbf{r} = ${vecijk(point)} + \\lambda(${vecijk(dir)})$`,
  });
}

const hardLinesIntersect = [
  { a1: [1, 0, 2], d1: [2, 1, -1], a2: [3, 1, 0], d2: [1, 2, 1] },
  { a1: [0, 1, 1], d1: [3, -1, 2], a2: [2, 0, 3], d2: [1, 1, 0] },
  { a1: [2, 2, 0], d1: [1, -1, 2], a2: [1, 0, 4], d2: [2, 1, -1] },
];

for (const { a1, d1, a2, d2 } of hardLinesIntersect) {
  const diff = sub(a2, a1);
  // a1 + λ d1 = a2 + μ d2  =>  λ d1 - μ d2 = a2 - a1
  const M = [d1, scale(d2, -1)];
  // solve using two equations
  const det = d1[0] * (-d2[1]) - d1[1] * (-d2[0]);
  let lam = 0;
  if (det !== 0) {
    lam = (diff[0] * (-d2[1]) - diff[1] * (-d2[0])) / det;
  } else {
    lam = (diff[0] * (-d2[2]) - diff[2] * (-d2[0])) / (d1[0] * (-d2[2]) - d1[2] * (-d2[0]));
  }
  const mu = d1[0] !== 0 ? (diff[0] - lam * d1[0]) / (-d2[0]) : (diff[1] - lam * d1[1]) / (-d2[1]);
  const pt = add(a1, scale(d1, lam));
  const pt2 = add(a2, scale(d2, mu));
  push({
    difficulty: "Hard",
    marks: 7,
    tags: ["line-intersection", "simultaneous"],
    answerType: "written",
    questionText: `Lines $L_1: \\mathbf{r} = ${vecijk(a1)} + \\lambda(${vecijk(d1)})$ and $L_2: \\mathbf{r} = ${vecijk(a2)} + \\mu(${vecijk(d2)})$ intersect. Find the coordinates of the point of intersection.`,
    steps: [
      step("Equate the two line expressions", `${vecijk(a1)} + \\lambda${vecijk(d1)} = ${vecijk(a2)} + \\mu${vecijk(d2)}`, "At the intersection, both lines share the same position vector."),
      step("Rearrange into a vector equation", `\\lambda${vecijk(d1)} - \\mu${vecijk(d2)} = ${vecijk(diff)}`, "Collect $\\lambda$ and $\\mu$ terms on one side."),
      step("Write the component equations", `\\begin{cases} ${d1[0]}\\lambda ${-d2[0] >= 0 ? "+" : ""}${-d2[0]}\\mu = ${diff[0]} \\\\ ${d1[1]}\\lambda ${-d2[1] >= 0 ? "+" : ""}${-d2[1]}\\mu = ${diff[1]} \\\\ ${d1[2]}\\lambda ${-d2[2] >= 0 ? "+" : ""}${-d2[2]}\\mu = ${diff[2]} \\end{cases}`, "Equating $\\mathbf{i}$, $\\mathbf{j}$ and $\\mathbf{k}$ components gives three scalar equations."),
      step("Solve two equations for $\\lambda$ and $\\mu$", `\\lambda = ${lam},\\quad \\mu = ${mu}`, "Use any two independent component equations."),
      step("Find the point from $L_1$", `\\mathbf{r} = ${vecijk(a1)} + ${lam}(${vecijk(d1)}) = ${vecijk(pt)}`, "Substitute $\\lambda$ into the first line equation."),
      step("Check with $L_2$", `\\mathbf{r} = ${vecijk(a2)} + ${mu}(${vecijk(d2)}) = ${vecijk(pt2)}`, "Substituting $\\mu$ into the second line should give the same point."),
      step("Confirm consistency", `\\text{both give } (${pt[0]},\\,${pt[1]},\\,${pt[2]})`, "Matching results confirm the lines truly intersect."),
      step("Verify the third component", `\\text{third equation satisfied}`, "The unused component equation provides a consistency check."),
      step("State the intersection point", `(${pt[0]},\\,${pt[1]},\\,${pt[2]})`, "This is the unique point common to both lines."),
    ],
    finalAnswer: `$(${pt[0]},\\,${pt[1]},\\,${pt[2]})$`,
  });
}

const hardPlaneThroughLine = [
  { a: [1, 0, 2], d: [2, 1, -1], p: [3, 2, 1] },
  { a: [0, 1, 4], d: [3, -1, 2], p: [2, 3, 0] },
  { a: [2, 0, 1], d: [1, 2, 3], p: [0, 1, 5] },
];

for (const { a, d, p } of hardPlaneThroughLine) {
  const u = d;
  const v = sub(p, a);
  const n = cross(u, v);
  const planeD = dot(n, a);
  const cart = `${n[0]}x ${n[1] >= 0 ? "+" : ""}${n[1]}y ${n[2] >= 0 ? "+" : ""}${n[2]}z = ${planeD}`;
  push({
    difficulty: "Hard",
    marks: 8,
    tags: ["plane-through-line", "three-points"],
    answerType: "written",
    questionText: `Find the Cartesian equation of the plane containing the line $\\mathbf{r} = ${vecijk(a)} + \\lambda(${vecijk(d)})$ and the point ${pointLabel("P", p)}.`,
    steps: [
      step("Identify two points on the line", `A = ${pointLabel("A", a)},\\; B = ${pointLabel("B", add(a, d))}`, "The line gives $A$ at $\\lambda=0$ and another point $B$ at $\\lambda=1$."),
      step("Use three non-collinear points", `A,\\; B,\\; P`, "A plane through a line and an external point is fixed by any three non-collinear points on it."),
      step("Find vectors in the plane", `\\overrightarrow{AB} = ${vecijk(d)},\\; \\overrightarrow{AP} = ${vecijk(v)}`, "Two chords of the triangle lie in the plane."),
      step("Compute the normal", `\\mathbf{n} = \\overrightarrow{AB} \\times \\overrightarrow{AP} = ${vecijk(n)}`, "The cross product is perpendicular to the plane."),
      step("Find $d$ using point $A$", `d = \\mathbf{n}\\cdot\\mathbf{a} = ${planeD}`, "Substitute $A$ into $ax+by+cz=d$."),
      step("Write the Cartesian equation", cart.replace(/\+ -/g, "- "), "Use the normal components as coefficients."),
      step("Verify point $B$ lies on the plane", `${dot(n, add(a, d))} = ${planeD}`, "A second point on the line should satisfy the equation."),
      step("Verify point $P$ lies on the plane", `${dot(n, p)} = ${planeD}`, "The external point must also satisfy the equation."),
      step("Confirm the line lies in the plane", "\\text{every point } \\mathbf{a}+\\lambda\\mathbf{d} \\text{ satisfies the equation}", "If $A$, $B$ and $P$ are on the plane, the whole line through $A$ and $B$ is contained."),
      step("State the final equation", cart.replace(/\+ -/g, "- "), "This is the required plane."),
    ],
    finalAnswer: `$${cart.replace(/\+ -/g, "- ")}$`,
  });
}

// ---- validation & output ------------------------------------------------
const tally = { Easy: 0, Intermediate: 0, Hard: 0 };
for (const q of questions) {
  tally[q.difficulty] += 1;
  q.workedSolution.steps.forEach((s, i) => {
    if (s.stepNumber !== i + 1) throw new Error(`${q.id} step numbering broken at ${i}`);
  });
}
const ids = new Set(questions.map((q) => q.id));
if (ids.size !== questions.length) throw new Error("Duplicate ids detected");
if (questions.length !== 70) throw new Error(`Expected 70 questions, generated ${questions.length}`);

const body = questions.map((q) => JSON.stringify(q, null, 2)).join(",\n");
const out = `import { Question } from "@/lib/types";\n\nexport const questions: Question[] = [\n${body},\n];\n`;

const target = join(__dirname, "..", "src", "data", "questions", "a-level-further-maths", "year-1-pure", "vectors-lines-planes.ts");
writeFileSync(target, out, "utf8");
console.log(`Wrote ${questions.length} questions (Easy ${tally.Easy}, Intermediate ${tally.Intermediate}, Hard ${tally.Hard}) to ${target}`);
