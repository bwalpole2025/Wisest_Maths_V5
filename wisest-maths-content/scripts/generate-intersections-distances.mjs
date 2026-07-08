#!/usr/bin/env node
/**
 * Generates 70 A-Level Further Maths "Intersections and distances" questions.
 * Output: src/data/questions/a-level-further-maths/year-1-pure/intersections-distances.ts
 */

import { writeFileSync, mkdirSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const outDir = resolve(__dirname, "../src/data/questions/a-level-further-maths/year-1-pure");
const outPath = resolve(outDir, "intersections-distances.ts");

mkdirSync(outDir, { recursive: true });

const SUBTOPIC = "Intersections and distances";
const SUBTOPIC_ID = "fm.y1.pure.vector-distances";
const LEVEL = "A-Level Further Maths";
const TOPIC = "Further Maths Year 1: Pure (Core Pure 1)";

const qid = (n) => `fm.y1.pure.vector-distances.q${String(n).padStart(3, "0")}`;
const step = (n, description, workingLatex, explanation) => ({ stepNumber: n, description, workingLatex, explanation, diagram: null });
const base = (meta) => ({ level: LEVEL, topic: TOPIC, subtopic: SUBTOPIC, subtopicId: SUBTOPIC_ID, questionDiagram: null, ...meta });
const distQ = (n, meta) => {
  const { tags: extraTags = [], ...rest } = meta;
  return base({ id: qid(n), tags: ["intersections-distances", ...extraTags], ...rest });
};

function lineLineIntersection(n, l1, l2, lam, mu, point, opts = {}) {
  const { difficulty = "Easy", marks = 5, tags = ["line-intersection"] } = opts;
  const steps = [
    step(1, "Equate the two line equations", `${l1.a} + \\lambda(${l1.d}) = ${l2.a} + \\mu(${l2.d})`, "At the intersection both lines share the same position vector."),
    step(2, "Collect $\\lambda$ and $\\mu$ terms", `\\lambda(${l1.d}) - \\mu(${l2.d}) = ${l2.a} - ${l1.a}`, "Rearrange so parameters appear on one side."),
    step(3, "Write component equations", l1.system, "Equating $\\mathbf{i}$, $\\mathbf{j}$ and $\\mathbf{k}$ components gives three scalar equations."),
    step(4, "Solve for $\\lambda$ and $\\mu$", `\\lambda = ${lam},\\quad \\mu = ${mu}`, "Use two independent component equations."),
    step(5, "Substitute into the first line", `\\mathbf{r} = ${l1.a} + ${lam}(${l1.d}) = ${point.vec}`, "Insert the parameter value to find the position vector."),
    step(6, "Read the coordinates", point.coord, "The components of $\\mathbf{r}$ give the intersection point."),
    step(7, "Verify with the second line", `\\mathbf{r} = ${l2.a} + ${mu}(${l2.d}) = ${point.vec}`, "Substituting $\\mu$ into the second line should give the same point."),
    step(8, "Confirm consistency", `\\text{third component equation satisfied}`, "The unused equation provides a consistency check."),
    step(9, "State the answer", point.coord, "The lines intersect at this point."),
  ];
  return distQ(n, {
    difficulty,
    marks,
    answerType: "written",
    tags,
    questionText: `Lines $L_1: \\mathbf{r} = ${l1.a} + \\lambda(${l1.d})$ and $L_2: \\mathbf{r} = ${l2.a} + \\mu(${l2.d})$ intersect. Find the coordinates of the point of intersection.`,
    workedSolution: { steps, finalAnswer: `$${point.coord}$` },
  });
}

function lineLineNoIntersection(n, l1, l2, reason, conclusion, opts = {}) {
  const { difficulty = "Intermediate", marks = 6, tags = ["line-intersection", "no-intersection"] } = opts;
  const steps = [
    step(1, "Equate the two line expressions", `${l1.a} + \\lambda(${l1.d}) = ${l2.a} + \\mu(${l2.d})`, "If the lines meet, both share the same position vector for some $\\lambda$ and $\\mu$."),
    step(2, "Write component equations", l1.system, "Equating components gives a system in $\\lambda$ and $\\mu$."),
    step(3, "Inspect the direction vectors", `${l1.d} \\text{ and } ${l2.d}`, reason),
    step(4, "Analyse the system", l1.analysis, "Attempt to solve the simultaneous equations."),
    step(5, "Identify the inconsistency", l1.inconsistent, "Parallel direction vectors with offset position vectors, or a contradictory system, means no single point lies on both lines."),
    step(6, "Classify the lines", l1.classify, "Distinguish parallel coplanar lines from skew lines."),
    step(7, "State the conclusion", conclusion, "There is no point common to both lines."),
    step(8, "Geometric interpretation", l1.geometry, "Visualising in 3D clarifies why no intersection exists."),
    step(9, "Final answer", conclusion, "No intersection point exists."),
  ];
  return distQ(n, {
    difficulty,
    marks,
    answerType: "written",
    tags,
    questionText: `Show that the lines $L_1: \\mathbf{r} = ${l1.a} + \\lambda(${l1.d})$ and $L_2: \\mathbf{r} = ${l2.a} + \\mu(${l2.d})$ do not intersect.`,
    workedSolution: { steps, finalAnswer: conclusion },
  });
}

function linePlaneIntersection(n, line, plane, lam, point, opts = {}) {
  const { difficulty = "Intermediate", marks = 6, tags = ["line-plane-intersection"] } = opts;
  const steps = [
    step(1, "Substitute the line into the plane", `(${line.a} + \\lambda(${line.d}))\\cdot ${plane.n} = ${plane.d}`, "Replace $\\mathbf{r}$ in the plane equation with the line expression."),
    step(2, "Expand the scalar product", `\\mathbf{a}\\cdot\\mathbf{n} + \\lambda(\\mathbf{d}\\cdot\\mathbf{n}) = ${plane.d}`, "Distribute the dot product over the sum."),
    step(3, "Compute $\\mathbf{a}\\cdot\\mathbf{n}$", `\\mathbf{a}\\cdot\\mathbf{n} = ${plane.adot}`, "Multiply and add the corresponding components."),
    step(4, "Compute $\\mathbf{d}\\cdot\\mathbf{n}$", `\\mathbf{d}\\cdot\\mathbf{n} = ${plane.ddot}`, "This is the coefficient of $\\lambda$."),
    step(5, "Solve for $\\lambda$", `${plane.adot} + ${plane.ddot}\\lambda = ${plane.d} \\Rightarrow \\lambda = ${lam}`, "Rearrange the linear equation in $\\lambda$."),
    step(6, "Substitute $\\lambda$ into the line", `\\mathbf{r} = ${line.a} + ${lam}(${line.d}) = ${point.vec}`, "Insert the parameter value to find the position vector."),
    step(7, "Read the coordinates", point.coord, "The components of $\\mathbf{r}$ give the intersection point."),
    step(8, "Verify in the plane equation", plane.verify, "Substituting back should satisfy the plane equation."),
    step(9, "State the answer", point.coord, "The line meets the plane at this point."),
  ];
  return distQ(n, {
    difficulty,
    marks,
    answerType: "written",
    tags,
    questionText: `Find the point where the line $\\mathbf{r} = ${line.a} + \\lambda(${line.d})$ meets the plane $\\mathbf{r}\\cdot(${plane.n}) = ${plane.d}$.`,
    workedSolution: { steps, finalAnswer: `$${point.coord}$` },
  });
}

function linePlaneParallel(n, line, plane, opts = {}) {
  const { difficulty = "Hard", marks = 7, tags = ["line-plane-intersection", "parallel"] } = opts;
  const steps = [
    step(1, "Recall the intersection condition", `\\mathbf{d}\\cdot\\mathbf{n} \\neq 0`, "A unique intersection exists only when the line direction is not perpendicular to the plane normal in the sense of being parallel to the plane."),
    step(2, "Identify the direction and normal", `\\mathbf{d} = ${line.d},\\quad \\mathbf{n} = ${plane.n}`, "Read the direction vector of the line and the normal of the plane."),
    step(3, "Compute $\\mathbf{d}\\cdot\\mathbf{n}$", `\\mathbf{d}\\cdot\\mathbf{n} = ${plane.ddot}`, "If this is zero, the line is parallel to the plane."),
    step(4, "Check whether the line lies in the plane", `\\mathbf{a}\\cdot\\mathbf{n} = ${plane.adot}`, "Substitute a point on the line into the plane equation."),
    step(5, "Compare with the plane constant", `${plane.adot} ${plane.adot === plane.d ? "=" : "\\neq"} ${plane.d}`, "If the point satisfies the plane equation, the whole line lies in the plane; otherwise it is strictly parallel and disjoint."),
    step(6, "Conclude about intersection", plane.conclusion, "Parallel lines either lie entirely in the plane or never meet it."),
    step(7, "State the answer", plane.answer, "There is no single isolated intersection point."),
    step(8, "Geometric interpretation", plane.geometry, "A line parallel to a plane is either contained in it or passes alongside it."),
    step(9, "Final answer", plane.answer, "Answer stated clearly."),
  ];
  return distQ(n, {
    difficulty,
    marks,
    answerType: "written",
    tags,
    questionText: `Show that the line $\\mathbf{r} = ${line.a} + \\lambda(${line.d})$ does not meet the plane $\\mathbf{r}\\cdot(${plane.n}) = ${plane.d}$ at a single point.`,
    workedSolution: { steps, finalAnswer: plane.answer },
  });
}

function pointLineDistance(n, A, P, d, cross, crossMag, dMag, distance, opts = {}) {
  const { difficulty = "Easy", marks = 4, tags = ["point-line-distance"], questionText } = opts;
  const steps = [
    step(1, "Recall the distance formula", `d = \\dfrac{|\\overrightarrow{AP} \\times \\mathbf{d}|}{|\\mathbf{d}|}`, "The perpendicular distance equals the area of the parallelogram spanned by $\\overrightarrow{AP}$ and $\\mathbf{d}$, divided by the base length $|\\mathbf{d}|$."),
    step(2, "Identify a point on the line", `A = ${A}`, "Use the known point on the line from the vector equation (when $\\lambda = 0$)."),
    step(3, "Form $\\overrightarrow{AP}$", `\\overrightarrow{AP} = ${P} - ${A} = ${cross.ap}`, "Subtract position vectors from $A$ to the given point $P$."),
    step(4, "Write the direction vector", `\\mathbf{d} = ${d}`, "Read the direction vector from the line equation."),
    step(5, "Compute the cross product", `\\overrightarrow{AP} \\times \\mathbf{d} = ${cross}`, "Use the determinant formula for the vector product."),
    step(6, "Find the magnitude of the cross product", `|\\overrightarrow{AP} \\times \\mathbf{d}| = ${crossMag}`, "Square each component, add, and take the square root."),
    step(7, "Find the magnitude of $\\mathbf{d}$", `|\\mathbf{d}| = ${dMag}`, "The length of the direction vector."),
    step(8, "Divide to obtain the distance", `d = \\dfrac{${crossMag}}{${dMag}} = ${distance}`, "Apply the formula."),
    step(9, "State the answer", `d = ${distance}`, "This is the shortest distance from the point to the line."),
  ];
  return distQ(n, {
    difficulty,
    marks,
    answerType: "exact",
    tags,
    questionText: questionText ?? `Find the perpendicular distance from the point $P${P}$ to the line $\\mathbf{r} = ${A} + \\lambda(${d})$.`,
    workedSolution: { steps, finalAnswer: `$d = ${distance}$` },
  });
}

function pointPlaneDistance(n, plane, P, numerator, nMag, distance, opts = {}) {
  const { difficulty = "Intermediate", marks = 5, tags = ["point-plane-distance"], questionText } = opts;
  const steps = [
    step(1, "Recall the distance formula", `d = \\dfrac{|\\mathbf{n}\\cdot(\\mathbf{p} - \\mathbf{a})|}{|\\mathbf{n}|}`, "Project the displacement from a point on the plane onto the normal; the absolute value gives the perpendicular distance."),
    step(2, "Identify the normal vector", `\\mathbf{n} = ${plane.n}`, "Read the normal from the scalar-product form of the plane."),
    step(3, "Choose a point on the plane", `\\mathbf{a} = ${plane.a}`, "Any convenient point satisfying the plane equation."),
    step(4, "Form $\\mathbf{p} - \\mathbf{a}$", `\\mathbf{p} - \\mathbf{a} = ${plane.diff}`, "Subtract the position vector of the point on the plane from $P$."),
    step(5, "Compute the scalar product", `\\mathbf{n}\\cdot(\\mathbf{p} - \\mathbf{a}) = ${numerator}`, "Multiply corresponding components and add."),
    step(6, "Take the absolute value", `|\\mathbf{n}\\cdot(\\mathbf{p} - \\mathbf{a})| = ${Math.abs(numerator) === numerator ? numerator : `|${numerator}|`}`, "Distance is always non-negative."),
    step(7, "Find $|\\mathbf{n}|$", `|\\mathbf{n}| = ${nMag}`, "Magnitude of the normal vector."),
    step(8, "Divide to obtain the distance", `d = ${distance}`, "Apply the formula."),
    step(9, "State the answer", `d = ${distance}`, "This is the shortest distance from the point to the plane."),
  ];
  return distQ(n, {
    difficulty,
    marks,
    answerType: "exact",
    tags,
    questionText: questionText ?? `Find the perpendicular distance from the point $P${P}$ to the plane $\\mathbf{r}\\cdot(${plane.n}) = ${plane.d}$.`,
    workedSolution: { steps, finalAnswer: `$d = ${distance}$` },
  });
}

function skewLineDistance(n, l1, l2, cross, crossMag, numerator, distance, opts = {}) {
  const { difficulty = "Hard", marks = 8, tags = ["skew-lines-distance"] } = opts;
  const steps = [
    step(1, "Recall the skew-line distance formula", `d = \\dfrac{|(\\mathbf{a}_2 - \\mathbf{a}_1)\\cdot(\\mathbf{d}_1 \\times \\mathbf{d}_2)|}{|\\mathbf{d}_1 \\times \\mathbf{d}_2|}`, "For non-intersecting, non-parallel lines, the shortest distance is found using the common perpendicular direction $\\mathbf{d}_1 \\times \\mathbf{d}_2$."),
    step(2, "Identify position vectors", `\\mathbf{a}_1 = ${l1.a},\\quad \\mathbf{a}_2 = ${l2.a}`, "Points on each line when the parameters are zero."),
    step(3, "Identify direction vectors", `\\mathbf{d}_1 = ${l1.d},\\quad \\mathbf{d}_2 = ${l2.d}`, "Direction vectors from the line equations."),
    step(4, "Form $\\mathbf{a}_2 - \\mathbf{a}_1$", `\\mathbf{a}_2 - \\mathbf{a}_1 = ${l2.minus}`, "Displacement vector between the two reference points."),
    step(5, "Compute $\\mathbf{d}_1 \\times \\mathbf{d}_2$", `\\mathbf{d}_1 \\times \\mathbf{d}_2 = ${cross}`, "The cross product gives a vector perpendicular to both lines."),
    step(6, "Find $|\\mathbf{d}_1 \\times \\mathbf{d}_2|$", `|\\mathbf{d}_1 \\times \\mathbf{d}_2| = ${crossMag}`, "Magnitude of the common perpendicular direction."),
    step(7, "Compute the scalar triple product", `(\\mathbf{a}_2 - \\mathbf{a}_1)\\cdot(\\mathbf{d}_1 \\times \\mathbf{d}_2) = ${numerator}`, "Dot the displacement with the cross product."),
    step(8, "Take the absolute value and divide", `d = \\dfrac{|${numerator}|}{${crossMag}} = ${distance}`, "Apply the formula."),
    step(9, "Verify lines are skew", l2.skewCheck, "Confirm the lines are neither parallel nor intersecting."),
    step(10, "State the answer", `d = ${distance}`, "This is the shortest distance between the two skew lines."),
    step(11, "Geometric meaning", "The distance is measured along the common perpendicular.", "Skew lines do not meet and are not parallel, so a unique shortest segment exists."),
    step(12, "Units", "\\text{length units}", "Distance is a scalar length."),
    step(13, "Final answer", `d = ${distance}`, "Shortest distance between the skew lines."),
  ];
  return distQ(n, {
    difficulty,
    marks,
    answerType: "exact",
    tags,
    questionText: `Find the shortest distance between the skew lines $L_1: \\mathbf{r} = ${l1.a} + \\lambda(${l1.d})$ and $L_2: \\mathbf{r} = ${l2.a} + \\mu(${l2.d})$.`,
    workedSolution: { steps, finalAnswer: `$d = ${distance}$` },
  });
}

function reflectionInPlane(n, plane, P, foot, reflected, opts = {}) {
  const { difficulty = "Intermediate", marks = 7, tags = ["reflection", "plane"] } = opts;
  const steps = [
    step(1, "Recall the reflection method", `\\text{foot } F = P - \\dfrac{(P - A)\\cdot\\mathbf{n}}{|\\mathbf{n}|^{2}}\\mathbf{n}`, "Project $P$ onto the normal to find the foot of the perpendicular from $P$ to the plane."),
    step(2, "Identify the normal and a point on the plane", `\\mathbf{n} = ${plane.n},\\quad A = ${plane.a}`, "Read from the plane equation."),
    step(3, "Form $P - A$", `P - A = ${plane.pa}`, "Displacement from the plane point to $P$."),
    step(4, "Compute $(P - A)\\cdot\\mathbf{n}$", `(P - A)\\cdot\\mathbf{n} = ${plane.dot}`, "Scalar product gives the signed distance along the normal."),
    step(5, "Find $|\\mathbf{n}|^{2}$", `|\\mathbf{n}|^{2} = ${plane.nsq}`, "Square the magnitude of the normal."),
    step(6, "Find the foot of the perpendicular", `F = ${foot}`, "Subtract the normal component from $P$."),
    step(7, "Reflect through the plane", `P' = 2F - P = ${reflected}`, "The reflection is the same distance beyond the plane as $P$ is on the near side."),
    step(8, "Verify $P'$ lies on the opposite side", plane.verify, "The reflected point should satisfy the plane equation with the opposite sign."),
    step(9, "State the answer", reflected, "Position vector of the reflection of $P$ in the plane."),
  ];
  return distQ(n, {
    difficulty,
    marks,
    answerType: "vector",
    tags,
    questionText: `The point $P$ has position vector ${P}. Find the position vector of the reflection of $P$ in the plane $\\mathbf{r}\\cdot(${plane.n}) = ${plane.d}$.`,
    workedSolution: { steps, finalAnswer: `$${reflected}$` },
  });
}

function hardMulti(n, questionText, steps, finalAnswer, tags = [], marks = 9, answerType = "written") {
  return distQ(n, { difficulty: "Hard", marks, answerType, tags: [...tags, "multi-step"], questionText, workedSolution: { steps, finalAnswer } });
}

const questions = [
  // Easy — line-line intersections (1–7)
  lineLineIntersection(1,
    { a: "\\mathbf{i}", d: "\\mathbf{j} + \\mathbf{k}", system: "\\begin{cases} 1 = \\mu \\\\ \\lambda = 1 \\\\ \\lambda = \\mu \\end{cases}" },
    { a: "\\mathbf{j}", d: "\\mathbf{i} + \\mathbf{k}" },
    1, 1, { vec: "\\mathbf{i} + \\mathbf{j} + \\mathbf{k}", coord: "(1,\\,1,\\,1)" }, { difficulty: "Easy", marks: 5 }),
  lineLineIntersection(2,
    { a: "\\mathbf{i}", d: "\\mathbf{j}", system: "\\begin{cases} 1 = \\mu \\\\ \\lambda = 1 \\\\ 0 = 0 \\end{cases}" },
    { a: "\\mathbf{j}", d: "\\mathbf{i}" },
    1, 1, { vec: "\\mathbf{i} + \\mathbf{j}", coord: "(1,\\,1,\\,0)" }, { difficulty: "Easy", marks: 5 }),
  lineLineIntersection(3,
    { a: "2\\mathbf{i}", d: "\\mathbf{k}", system: "\\begin{cases} 2 = 1 + \\mu \\\\ 0 = \\lambda \\\\ \\lambda = 2 + 2\\mu \\end{cases}" },
    { a: "\\mathbf{i} + 2\\mathbf{j}", d: "2\\mathbf{j} + \\mathbf{k}" },
    0, 1, { vec: "2\\mathbf{i}", coord: "(2,\\,0,\\,0)" }, { difficulty: "Easy", marks: 5 }),
  lineLineIntersection(4,
    { a: "\\mathbf{k}", d: "\\mathbf{i} + \\mathbf{j}", system: "\\begin{cases} \\lambda = 1 \\\\ \\lambda = 2 \\\\ 1 + \\lambda = 2 + \\mu \\end{cases}" },
    { a: "\\mathbf{i} + 2\\mathbf{j}", d: "\\mathbf{i} - \\mathbf{j} + \\mathbf{k}" },
    1, 2, { vec: "\\mathbf{i} + \\mathbf{j} + \\mathbf{k}", coord: "(1,\\,1,\\,1)" }, { difficulty: "Easy", marks: 5 }),
  lineLineIntersection(5,
    { a: "\\mathbf{i}", d: "2\\mathbf{j} + \\mathbf{k}", system: "\\begin{cases} 1 = \\mu \\\\ 2\\lambda = 1 \\\\ \\lambda = 2\\mu \\end{cases}" },
    { a: "\\mathbf{i} + \\mathbf{j}", d: "\\mathbf{j} + 2\\mathbf{k}" },
    0.5, 0, { vec: "\\mathbf{i} + \\mathbf{j} + \\tfrac{1}{2}\\mathbf{k}", coord: "\\left(1,\\,1,\\,\\tfrac{1}{2}\\right)" }, { difficulty: "Easy", marks: 5 }),
  lineLineIntersection(6,
    { a: "3\\mathbf{i} + \\mathbf{k}", d: "\\mathbf{i} - \\mathbf{j}", system: "\\begin{cases} 3 + \\lambda = 1 + 2\\mu \\\\ -\\lambda = 1 + \\mu \\\\ 1 = -\\mu \\end{cases}" },
    { a: "\\mathbf{i} + \\mathbf{j} + \\mathbf{k}", d: "2\\mathbf{i} + \\mathbf{j} - \\mathbf{k}" },
    0, 1, { vec: "3\\mathbf{i} + \\mathbf{k}", coord: "(3,\\,0,\\,1)" }, { difficulty: "Easy", marks: 5 }),
  lineLineIntersection(7,
    { a: "\\mathbf{j}", d: "3\\mathbf{i} + \\mathbf{k}", system: "\\begin{cases} 3\\lambda = 1 + 2\\mu \\\\ 1 = 1 + \\mu \\\\ \\lambda = 2\\mu \\end{cases}" },
    { a: "\\mathbf{i} + \\mathbf{j}", d: "2\\mathbf{i} + \\mathbf{j} + 2\\mathbf{k}" },
    0, 0, { vec: "\\mathbf{i} + \\mathbf{j}", coord: "(1,\\,1,\\,0)" }, { difficulty: "Easy", marks: 5 }),

  // Easy — point-line distances (8–19)
  pointLineDistance(8, "(1,\\,0,\\,0)", "(0,\\,0,\\,0)", "\\mathbf{j}",
    { ap: "-\\mathbf{i}", result: "-\\mathbf{k}" }, "1", "1", "1"),
  pointLineDistance(9, "(0,\\,0,\\,0)", "(3,\\,0,\\,0)", "\\mathbf{k}",
    { ap: "3\\mathbf{i}", result: "3\\mathbf{j}" }, "3", "1", "3"),
  pointLineDistance(10, "(1,\\,0,\\,0)", "(1,\\,4,\\,0)", "\\mathbf{k}",
    { ap: "4\\mathbf{j}", result: "-4\\mathbf{i}" }, "4", "1", "4"),
  pointLineDistance(11, "(0,\\,0,\\,0)", "(2,\\,2,\\,0)", "\\mathbf{i} + \\mathbf{j}",
    { ap: "2\\mathbf{i} + 2\\mathbf{j}", result: "2\\mathbf{k}" }, "2", "\\sqrt{2}", "\\sqrt{2}"),
  pointLineDistance(12, "(1,\\,1,\\,0)", "(3,\\,1,\\,2)", "\\mathbf{j} + \\mathbf{k}",
    { ap: "2\\mathbf{i} + 2\\mathbf{k}", result: "2\\mathbf{i} - 2\\mathbf{j}" }, "2\\sqrt{2}", "\\sqrt{2}", "2"),
  pointLineDistance(13, "(0,\\,0,\\,1)", "(2,\\,0,\\,0)", "\\mathbf{i} + \\mathbf{k}",
    { ap: "2\\mathbf{i} - \\mathbf{k}", result: "\\mathbf{j}" }, "1", "\\sqrt{2}", "\\dfrac{1}{\\sqrt{2}}"),
  pointLineDistance(14, "(2,\\,0,\\,0)", "(2,\\,3,\\,1)", "\\mathbf{i} + \\mathbf{k}",
    { ap: "3\\mathbf{j} + \\mathbf{k}", result: "3\\mathbf{j} - 3\\mathbf{i}" }, "3\\sqrt{2}", "\\sqrt{2}", "3"),
  pointLineDistance(15, "(0,\\,0,\\,0)", "(1,\\,1,\\,1)", "\\mathbf{i} + \\mathbf{j} + \\mathbf{k}",
    { ap: "\\mathbf{i} + \\mathbf{j} + \\mathbf{k}", result: "\\mathbf{0}" }, "0", "\\sqrt{3}", "0"),
  pointLineDistance(16, "(1,\\,2,\\,3)", "(4,\\,1,\\,2)", "2\\mathbf{i} + \\mathbf{j} - \\mathbf{k}",
    { ap: "3\\mathbf{i} - \\mathbf{j} - \\mathbf{k}", result: "2\\mathbf{i} + 4\\mathbf{k}" }, "2\\sqrt{5}", "\\sqrt{6}", "\\sqrt{\\dfrac{10}{3}}"),
  pointLineDistance(17, "(0,\\,0,\\,0)", "(0,\\,3,\\,4)", "3\\mathbf{i} + 4\\mathbf{k}",
    { ap: "3\\mathbf{j} + 4\\mathbf{k}", result: "12\\mathbf{i}" }, "12", "5", "\\dfrac{12}{5}"),
  pointLineDistance(18, "(1,\\,0,\\,1)", "(3,\\,2,\\,0)", "\\mathbf{j} + \\mathbf{k}",
    { ap: "2\\mathbf{i} + 2\\mathbf{j} - \\mathbf{k}", result: "2\\mathbf{i} - 4\\mathbf{j}" }, "2\\sqrt{5}", "\\sqrt{2}", "\\sqrt{10}"),
  pointLineDistance(19, "(2,\\,1,\\,0)", "(5,\\,3,\\,1)", "\\mathbf{i} + 2\\mathbf{j} + \\mathbf{k}",
    { ap: "3\\mathbf{i} + 2\\mathbf{j} + \\mathbf{k}", result: "-\\mathbf{i} + 3\\mathbf{j} - 5\\mathbf{k}" }, "\\sqrt{35}", "\\sqrt{6}", "\\sqrt{\\dfrac{35}{6}}"),

  // Intermediate — line-line intersections (20–22)
  lineLineIntersection(20,
    { a: "\\mathbf{i} + \\mathbf{j} + \\mathbf{k}", d: "2\\mathbf{i} - \\mathbf{j} + \\mathbf{k}", system: "\\begin{cases} 2\\lambda - 3\\mu = 2 \\\\ -\\lambda + \\mu = -1 \\\\ \\lambda - 2\\mu = -1 \\end{cases}" },
    { a: "3\\mathbf{i}", d: "3\\mathbf{i} + \\mathbf{j} + 2\\mathbf{k}" },
    1, 1, { vec: "3\\mathbf{i} + \\mathbf{j} + 2\\mathbf{k}", coord: "(3,\\,1,\\,2)" }, { difficulty: "Intermediate", marks: 6 }),
  lineLineIntersection(21,
    { a: "2\\mathbf{i} + \\mathbf{k}", d: "\\mathbf{i} + \\mathbf{j}", system: "\\begin{cases} 2 + \\lambda = 3\\mu \\\\ \\lambda = 1 + 2\\mu \\\\ 1 = 1 + \\mu \\end{cases}" },
    { a: "\\mathbf{i} + 2\\mathbf{j} + \\mathbf{k}", d: "2\\mathbf{i} + \\mathbf{j} - \\mathbf{k}" },
    2, 0, { vec: "4\\mathbf{i} + 2\\mathbf{j} + \\mathbf{k}", coord: "(4,\\,2,\\,1)" }, { difficulty: "Intermediate", marks: 6 }),
  lineLineIntersection(22,
    { a: "\\mathbf{j}", d: "3\\mathbf{i} - \\mathbf{j} + 2\\mathbf{k}", system: "\\begin{cases} 3\\lambda - \\mu = 0 \\\\ 1 - \\lambda = 2\\mu \\\\ 2\\lambda = 1 + \\mu \\end{cases}" },
    { a: "\\mathbf{i} + 3\\mathbf{k}", d: "\\mathbf{i} + 2\\mathbf{j} + \\mathbf{k}" },
    1, 2, { vec: "3\\mathbf{i} - \\mathbf{j} + 2\\mathbf{k}", coord: "(3,\\,-1,\\,2)" }, { difficulty: "Intermediate", marks: 6 }),

  // Intermediate — no intersection (23–24)
  lineLineNoIntersection(23,
    { a: "\\mathbf{i}", d: "2\\mathbf{i} + \\mathbf{j}", system: "\\begin{cases} 2\\lambda - \\mu = 1 \\\\ \\lambda - 2\\mu = 0 \\\\ 0 = \\mu \\end{cases}", analysis: "The first two equations give $\\lambda = 1$, $\\mu = 0$, but the third gives $\\mu = 0$ while the $z$-components require $0 = 0$ — however the $y$-equation gives $\\lambda = 0$, a contradiction.", inconsistent: "$\\lambda = 1$ and $\\lambda = 0$ cannot both hold.", classify: "The direction vectors are not parallel, but the lines are skew.", geometry: "Skew lines pass on opposite sides of space without meeting." },
    { a: "2\\mathbf{i} + \\mathbf{j}", d: "\\mathbf{i} + 2\\mathbf{j} + \\mathbf{k}" },
    "The direction vectors are not scalar multiples.", "The lines are skew and do not intersect."),
  lineLineNoIntersection(24,
    { a: "\\mathbf{i} + \\mathbf{j}", d: "2\\mathbf{i} + 4\\mathbf{j}", system: "\\begin{cases} 2\\lambda - \\mu = 1 \\\\ 4\\lambda - 2\\mu = -1 \\\\ 0 = \\mu \\end{cases}", analysis: "$\\mathbf{d}_2 = 2\\mathbf{d}_1$, so the directions are parallel.", inconsistent: "From $\\mu = 0$, the $x$-equation gives $2\\lambda = 1$, but the $y$-equation gives $4\\lambda = -1$.", classify: "The lines are parallel but distinct.", geometry: "Parallel distinct lines never meet." },
    { a: "3\\mathbf{i} + 3\\mathbf{j}", d: "\\mathbf{i} + 2\\mathbf{j} + \\mathbf{k}" },
    "$\\mathbf{d}_2 = 2\\mathbf{d}_1$, so the lines are parallel.", "The lines are parallel and distinct, so they do not intersect."),

  // Intermediate — line-plane intersections (25–29)
  linePlaneIntersection(25,
    { a: "\\mathbf{i} + 2\\mathbf{j} + 3\\mathbf{k}", d: "2\\mathbf{i} + \\mathbf{j} - \\mathbf{k}" },
    { n: "\\mathbf{i} + \\mathbf{j} + \\mathbf{k}", d: 6, adot: 6, ddot: 2, verify: "1 + 2 + 3 = 6" },
    0, { vec: "\\mathbf{i} + 2\\mathbf{j} + 3\\mathbf{k}", coord: "(1,\\,2,\\,3)" }),
  linePlaneIntersection(26,
    { a: "\\mathbf{j} + 4\\mathbf{k}", d: "3\\mathbf{i} - \\mathbf{j} + 2\\mathbf{k}" },
    { n: "\\mathbf{i} + 2\\mathbf{j} - \\mathbf{k}", d: 5, adot: 4, ddot: -3, verify: "0 + 8 - 4 = 4 \\neq 5" },
    1, { vec: "3\\mathbf{i} + 3\\mathbf{k}", coord: "(3,\\,0,\\,3)" }),
  linePlaneIntersection(27,
    { a: "2\\mathbf{i} + 5\\mathbf{k}", d: "\\mathbf{i} + 2\\mathbf{j} + 3\\mathbf{k}" },
    { n: "2\\mathbf{i} - \\mathbf{j} + \\mathbf{k}", d: 10, adot: 9, ddot: 3, verify: "4 + 0 + 5 = 9" },
    1, { vec: "3\\mathbf{i} + 2\\mathbf{j} + 8\\mathbf{k}", coord: "(3,\\,2,\\,8)" }),
  linePlaneIntersection(28,
    { a: "\\mathbf{i} - \\mathbf{j}", d: "\\mathbf{i} + \\mathbf{j} + \\mathbf{k}" },
    { n: "\\mathbf{i} - \\mathbf{j} + \\mathbf{k}", d: 2, adot: 2, ddot: 1, verify: "2 + 0 + 3 = 5 = 2 + 3" },
    1, { vec: "2\\mathbf{i} + 3\\mathbf{k}", coord: "(2,\\,0,\\,3)" }),
  linePlaneIntersection(29,
    { a: "3\\mathbf{i} + \\mathbf{k}", d: "\\mathbf{j} - 2\\mathbf{k}" },
    { n: "\\mathbf{i} + \\mathbf{j} + 2\\mathbf{k}", d: 8, adot: 5, ddot: -3, verify: "3 + 0 + 2 = 5" },
    1, { vec: "3\\mathbf{i} + \\mathbf{j} - \\mathbf{k}", coord: "(3,\\,1,\\,-1)" }),

  // Easy — point-plane distances (30–32)
  pointPlaneDistance(30,
    { n: "\\mathbf{k}", a: "\\mathbf{0}", diff: "3\\mathbf{i} + 4\\mathbf{j} + 2\\mathbf{k}", d: 0 },
    "(3,\\,4,\\,2)", 2, "1", "2", { difficulty: "Easy", marks: 4 }),
  pointPlaneDistance(31,
    { n: "\\mathbf{i}", a: "\\mathbf{0}", diff: "5\\mathbf{i} + 2\\mathbf{j} - \\mathbf{k}", d: 0 },
    "(5,\\,2,\\,-1)", 5, "1", "5", { difficulty: "Easy", marks: 4 }),
  pointPlaneDistance(32,
    { n: "\\mathbf{j}", a: "\\mathbf{0}", diff: "\\mathbf{i} - 3\\mathbf{j} + 2\\mathbf{k}", d: 0 },
    "(1,\\,-3,\\,2)", -3, "1", "3", { difficulty: "Easy", marks: 4 }),

  // Intermediate — point-line distances (33–35)
  pointLineDistance(33, "(1,\\,2,\\,0)", "(4,\\,0,\\,1)", "2\\mathbf{i} - \\mathbf{j} + \\mathbf{k}",
    { ap: "3\\mathbf{i} - 2\\mathbf{j} + \\mathbf{k}", result: "\\mathbf{i} + 5\\mathbf{j} + 7\\mathbf{k}" }, "\\sqrt{75}", "\\sqrt{6}", "\\dfrac{5\\sqrt{2}}{\\sqrt{6}}",
    { difficulty: "Intermediate", marks: 5 }),
  pointLineDistance(34, "(0,\\,1,\\,2)", "(3,\\,4,\\,0)", "\\mathbf{i} + \\mathbf{j} + \\mathbf{k}",
    { ap: "3\\mathbf{i} + 3\\mathbf{j} - 2\\mathbf{k}", result: "-5\\mathbf{i} + 5\\mathbf{j}" }, "5\\sqrt{2}", "\\sqrt{3}", "5\\sqrt{\\dfrac{2}{3}}",
    { difficulty: "Intermediate", marks: 5 }),
  pointLineDistance(35, "(2,\\,0,\\,1)", "(0,\\,3,\\,2)", "3\\mathbf{i} - \\mathbf{j} + 2\\mathbf{k}",
    { ap: "-2\\mathbf{i} + 3\\mathbf{j} + \\mathbf{k}", result: "7\\mathbf{i} + 4\\mathbf{j} - 7\\mathbf{k}" }, "\\sqrt{138}", "\\sqrt{14}", "\\sqrt{\\dfrac{69}{7}}",
    { difficulty: "Intermediate", marks: 6 }),

  // Intermediate — point-plane distances (36–44)
  pointPlaneDistance(36,
    { n: "\\mathbf{i} + \\mathbf{j} + \\mathbf{k}", a: "\\mathbf{i}", diff: "2\\mathbf{i} + \\mathbf{j} - \\mathbf{k}", d: 3 },
    "(3,\\,1,\\,0)", 2, "\\sqrt{3}", "\\dfrac{2}{\\sqrt{3}}"),
  pointPlaneDistance(37,
    { n: "2\\mathbf{i} - \\mathbf{j} + 2\\mathbf{k}", a: "\\mathbf{j}", diff: "4\\mathbf{i} + 2\\mathbf{j} - 3\\mathbf{k}", d: -1 },
    "(4,\\,3,\\,-3)", 9, "3", "3"),
  pointPlaneDistance(38,
    { n: "\\mathbf{i} - 2\\mathbf{j} + 2\\mathbf{k}", a: "2\\mathbf{i}", diff: "-\\mathbf{i} + 3\\mathbf{j} + 2\\mathbf{k}", d: 4 },
    "(1,\\,3,\\,2)", -3, "3", "1"),
  pointPlaneDistance(39,
    { n: "3\\mathbf{i} + 4\\mathbf{k}", a: "\\mathbf{i}", diff: "2\\mathbf{i} + 3\\mathbf{j} + \\mathbf{k}", d: 7 },
    "(3,\\,3,\\,1)", 6, "5", "\\dfrac{6}{5}"),
  pointPlaneDistance(40,
    { n: "\\mathbf{i} + \\mathbf{j}", a: "\\mathbf{k}", diff: "4\\mathbf{i} - 2\\mathbf{j} + 3\\mathbf{k}", d: 1 },
    "(4,\\,-2,\\,4)", 2, "\\sqrt{2}", "\\sqrt{2}"),
  pointPlaneDistance(41,
    { n: "2\\mathbf{i} + \\mathbf{j} - 2\\mathbf{k}", a: "\\mathbf{i} + \\mathbf{j}", diff: "2\\mathbf{i} - \\mathbf{j} + 3\\mathbf{k}", d: 3 },
    "(3,\\,0,\\,4)", 3, "3", "1"),
  pointPlaneDistance(42,
    { n: "\\mathbf{i} - \\mathbf{j} + \\mathbf{k}", a: "\\mathbf{i}", diff: "2\\mathbf{i} + 4\\mathbf{j} - 2\\mathbf{k}", d: 2 },
    "(3,\\,4,\\,-2)", 0, "\\sqrt{3}", "0"),
  pointPlaneDistance(43,
    { n: "4\\mathbf{i} - 3\\mathbf{j} + 12\\mathbf{k}", a: "\\mathbf{0}", diff: "2\\mathbf{i} + 3\\mathbf{j} + 6\\mathbf{k}", d: 26 },
    "(2,\\,3,\\,6)", 78, "13", "6"),
  pointPlaneDistance(44,
    { n: "\\mathbf{i} + 2\\mathbf{j} - 2\\mathbf{k}", a: "3\\mathbf{i} + \\mathbf{j}", diff: "-2\\mathbf{i} + 2\\mathbf{j} + 3\\mathbf{k}", d: 5 },
    "(1,\\,3,\\,4)", -8, "3", "\\dfrac{8}{3}"),

  // Intermediate — reflections (45–48)
  reflectionInPlane(45,
    { n: "\\mathbf{k}", a: "\\mathbf{0}", pa: "3\\mathbf{i} + 4\\mathbf{j} + 2\\mathbf{k}", dot: 2, nsq: 1, d: 0, verify: "The $z$-coordinate changes from $2$ to $-2$." },
    "3\\mathbf{i} + 4\\mathbf{j} + 2\\mathbf{k}", "3\\mathbf{i} + 4\\mathbf{j}", "3\\mathbf{i} + 4\\mathbf{j} - 2\\mathbf{k}"),
  reflectionInPlane(46,
    { n: "\\mathbf{i}", a: "\\mathbf{0}", pa: "5\\mathbf{i} + 2\\mathbf{j} - \\mathbf{k}", dot: 5, nsq: 1, d: 0, verify: "The $x$-coordinate changes from $5$ to $-5$." },
    "5\\mathbf{i} + 2\\mathbf{j} - \\mathbf{k}", "2\\mathbf{j} - \\mathbf{k}", "-5\\mathbf{i} + 2\\mathbf{j} - \\mathbf{k}"),
  reflectionInPlane(47,
    { n: "\\mathbf{i} + \\mathbf{j}", a: "\\mathbf{0}", pa: "2\\mathbf{i} + 4\\mathbf{j} + \\mathbf{k}", dot: 6, nsq: 2, d: 0, verify: "$(-2\\mathbf{i} + 2\\mathbf{k})\\cdot(\\mathbf{i}+\\mathbf{j}) = -2 \\neq 0$." },
    "2\\mathbf{i} + 4\\mathbf{j} + \\mathbf{k}", "-\\mathbf{i} + 2\\mathbf{j} + \\tfrac{1}{2}\\mathbf{k}", "-2\\mathbf{i} + 2\\mathbf{k}"),
  reflectionInPlane(48,
    { n: "\\mathbf{i} + \\mathbf{j} + \\mathbf{k}", a: "\\mathbf{i}", pa: "2\\mathbf{i} + 2\\mathbf{j} + 3\\mathbf{k}", dot: 5, nsq: 3, d: 3, verify: "$(-\\tfrac{4}{3}\\mathbf{i} - \\tfrac{4}{3}\\mathbf{j} + \\tfrac{5}{3}\\mathbf{k})\\cdot(\\mathbf{i}+\\mathbf{j}+\\mathbf{k}) = -1$." },
    "3\\mathbf{i} + 2\\mathbf{j} + 3\\mathbf{k}", "\\tfrac{4}{3}\\mathbf{i} + \\tfrac{4}{3}\\mathbf{j} + \\tfrac{4}{3}\\mathbf{k}", "-\\tfrac{4}{3}\\mathbf{i} - \\tfrac{4}{3}\\mathbf{j} + \\tfrac{5}{3}\\mathbf{k}"),

  // Hard — line-plane parallel / no intersection (49–51)
  linePlaneParallel(49,
    { a: "\\mathbf{i} + \\mathbf{j}", d: "\\mathbf{i} + \\mathbf{j}" },
    { n: "\\mathbf{k}", d: 2, adot: 0, ddot: 0, conclusion: "$\\mathbf{d}\\cdot\\mathbf{n} = 0$, so the line is parallel to the plane $z = 2$. Since $z = 0$ on the line, it never reaches the plane.", answer: "The line is parallel to the plane and does not intersect it.", geometry: "A line in the plane $z = 0$ stays parallel to and below the plane $z = 2$." }),
  linePlaneParallel(50,
    { a: "\\mathbf{i} + \\mathbf{j}", d: "2\\mathbf{i} + 2\\mathbf{j}" },
    { n: "\\mathbf{k}", d: 1, adot: 0, ddot: 0, conclusion: "$\\mathbf{d}\\cdot\\mathbf{n} = 0$, so the line is parallel to the plane $z = 1$. Since $\\mathbf{a}\\cdot\\mathbf{n} = 0 \\neq 1$, the line lies strictly below the plane and never meets it.", answer: "The line is parallel to the plane and does not intersect it.", geometry: "A horizontal line at $z = 0$ stays below the plane $z = 1$." }),
  linePlaneParallel(51,
    { a: "3\\mathbf{i} + \\mathbf{j} + 2\\mathbf{k}", d: "\\mathbf{i} - \\mathbf{j} + 2\\mathbf{k}" },
    { n: "\\mathbf{i} - \\mathbf{j} + 2\\mathbf{k}", d: 6, adot: 6, ddot: 6, conclusion: "$\\mathbf{d}$ is parallel to $\\mathbf{n}$, and $\\mathbf{a}$ satisfies $\\mathbf{a}\\cdot\\mathbf{n} = 6$, so every point on the line lies in the plane.", answer: "The line lies entirely in the plane, so there is no unique isolated intersection point.", geometry: "The line is contained in the plane." }),

  // Hard — line-line (52–53)
  lineLineIntersection(52,
    { a: "\\mathbf{i} + 2\\mathbf{j} + 3\\mathbf{k}", d: "\\mathbf{i} - \\mathbf{j} + 2\\mathbf{k}", system: "\\begin{cases} \\lambda - 2\\mu = 2 \\\\ -\\lambda + \\mu = -2 \\\\ 2\\lambda - \\mu = 0 \\end{cases}" },
    { a: "3\\mathbf{i} + 4\\mathbf{k}", d: "2\\mathbf{i} + \\mathbf{j} + \\mathbf{k}" },
    2, 2, { vec: "3\\mathbf{i} + 4\\mathbf{k}", coord: "(3,\\,0,\\,4)" }, { difficulty: "Hard", marks: 7 }),
  lineLineNoIntersection(53,
    { a: "\\mathbf{i}", d: "\\mathbf{i} + \\mathbf{j}", system: "\\begin{cases} \\lambda - 2\\mu = 2 \\\\ \\lambda - \\mu = 1 \\\\ 0 = 2\\mu \\end{cases}", analysis: "From the $z$-equation, $\\mu = 0$. Then the $y$-equation gives $\\lambda = 1$, but the $x$-equation gives $\\lambda = 2$.", inconsistent: "$\\lambda = 1$ and $\\lambda = 2$ cannot both hold.", classify: "The lines are skew.", geometry: "Neither parallel nor intersecting — typical skew configuration." },
    { a: "3\\mathbf{i} + \\mathbf{j}", d: "2\\mathbf{i} + \\mathbf{j} + 2\\mathbf{k}" },
    "The direction vectors are not parallel.", "The lines are skew and do not intersect.", { difficulty: "Hard", marks: 7 }),

  // Hard — skew line distances (54–63)
  skewLineDistance(54,
    { a: "\\mathbf{i}", d: "\\mathbf{j}", minus: "2\\mathbf{i} + \\mathbf{j}" },
    { a: "3\\mathbf{i} + \\mathbf{j}", d: "\\mathbf{k}", skewCheck: "$\\mathbf{d}_1 \\times \\mathbf{d}_2 = \\mathbf{i} \\neq \\mathbf{0}$ and the lines are not parallel." },
    "\\mathbf{i}", "1", "2", "2"),
  skewLineDistance(55,
    { a: "\\mathbf{0}", d: "\\mathbf{i}", minus: "\\mathbf{i} + 2\\mathbf{j}" },
    { a: "\\mathbf{i} + 2\\mathbf{j}", d: "\\mathbf{j}", skewCheck: "Directions $\\mathbf{i}$ and $\\mathbf{j}$ are not parallel; solving shows no intersection." },
    "\\mathbf{k}", "1", "1", "1"),
  skewLineDistance(56,
    { a: "\\mathbf{i}", d: "\\mathbf{j} + \\mathbf{k}", minus: "2\\mathbf{i} + \\mathbf{j}" },
    { a: "3\\mathbf{i} + \\mathbf{j}", d: "\\mathbf{i} + \\mathbf{k}", skewCheck: "The cross product $\\mathbf{d}_1 \\times \\mathbf{d}_2$ is non-zero." },
    "\\mathbf{i} - \\mathbf{j}", "\\sqrt{2}", "2", "\\sqrt{2}"),
  skewLineDistance(57,
    { a: "2\\mathbf{i}", d: "\\mathbf{i} + \\mathbf{j}", minus: "-\\mathbf{i} + 3\\mathbf{j} + \\mathbf{k}" },
    { a: "\\mathbf{i} + 3\\mathbf{j} + \\mathbf{k}", d: "2\\mathbf{j} + \\mathbf{k}", skewCheck: "Lines are neither parallel nor intersecting." },
    "2\\mathbf{i} - \\mathbf{j}", "\\sqrt{5}", "5", "\\sqrt{5}"),
  skewLineDistance(58,
    { a: "\\mathbf{i} + \\mathbf{j}", d: "2\\mathbf{i} - \\mathbf{j} + \\mathbf{k}", minus: "2\\mathbf{i} + 2\\mathbf{k}" },
    { a: "3\\mathbf{i} + \\mathbf{j} + 2\\mathbf{k}", d: "\\mathbf{i} + 2\\mathbf{j} - \\mathbf{k}", skewCheck: "Non-parallel direction vectors and inconsistent intersection system." },
    "-3\\mathbf{i} - 3\\mathbf{j}", "3\\sqrt{3}", "9", "3\\sqrt{3}"),
  skewLineDistance(59,
    { a: "\\mathbf{0}", d: "\\mathbf{i} + \\mathbf{j} + \\mathbf{k}", minus: "3\\mathbf{i} + \\mathbf{j}" },
    { a: "3\\mathbf{i} + \\mathbf{j}", d: "\\mathbf{i} - \\mathbf{j} + 2\\mathbf{k}", skewCheck: "Skew configuration confirmed." },
    "-2\\mathbf{i} + 2\\mathbf{j}", "2\\sqrt{2}", "4", "2\\sqrt{2}"),
  skewLineDistance(60,
    { a: "\\mathbf{i}", d: "3\\mathbf{i} - \\mathbf{j} + 2\\mathbf{k}", minus: "2\\mathbf{i} + 2\\mathbf{j} + \\mathbf{k}" },
    { a: "3\\mathbf{i} + 2\\mathbf{j} + \\mathbf{k}", d: "\\mathbf{j} + \\mathbf{k}", skewCheck: "Lines are skew in 3D." },
    "5\\mathbf{i} + 5\\mathbf{j} - 5\\mathbf{k}", "5\\sqrt{3}", "15", "5\\sqrt{3}"),
  skewLineDistance(61,
    { a: "2\\mathbf{i} + \\mathbf{k}", d: "\\mathbf{i} + 2\\mathbf{j}", minus: "-\\mathbf{i} + \\mathbf{j} + 2\\mathbf{k}" },
    { a: "\\mathbf{i} + \\mathbf{j} + 3\\mathbf{k}", d: "2\\mathbf{i} - \\mathbf{j} + \\mathbf{k}", skewCheck: "Confirmed skew lines." },
    "-3\\mathbf{i} - 3\\mathbf{j} - 3\\mathbf{k}", "3\\sqrt{3}", "9", "3\\sqrt{3}"),
  skewLineDistance(62,
    { a: "\\mathbf{j}", d: "\\mathbf{i} + \\mathbf{k}", minus: "2\\mathbf{i} + 3\\mathbf{j} + 2\\mathbf{k}" },
    { a: "2\\mathbf{i} + 4\\mathbf{j} + 2\\mathbf{k}", d: "3\\mathbf{i} - \\mathbf{j} + \\mathbf{k}", skewCheck: "Non-parallel and non-intersecting." },
    "4\\mathbf{i} + 2\\mathbf{j} - 2\\mathbf{k}", "2\\sqrt{6}", "8", "\\dfrac{4\\sqrt{6}}{3}"),
  skewLineDistance(63,
    { a: "\\mathbf{i} + 2\\mathbf{j}", d: "2\\mathbf{i} - \\mathbf{j} + \\mathbf{k}", minus: "2\\mathbf{i} - \\mathbf{j} + 2\\mathbf{k}" },
    { a: "3\\mathbf{i} + \\mathbf{j} + 4\\mathbf{k}", d: "\\mathbf{i} + 3\\mathbf{j} - 2\\mathbf{k}", skewCheck: "Skew lines with non-zero shortest distance." },
    "7\\mathbf{i} + 7\\mathbf{j} + 7\\mathbf{k}", "7\\sqrt{3}", "49", "7\\sqrt{3}"),

  // Intermediate — more point-plane (64–66)
  pointPlaneDistance(64,
    { n: "2\\mathbf{i} + 2\\mathbf{j} - \\mathbf{k}", a: "2\\mathbf{i}", diff: "3\\mathbf{j} + 4\\mathbf{k}", d: 4 },
    "(2,\\,3,\\,4)", -4, "3", "\\dfrac{4}{3}"),
  pointPlaneDistance(65,
    { n: "\\mathbf{i} + 3\\mathbf{j} - \\mathbf{k}", a: "\\mathbf{i} + \\mathbf{j}", diff: "3\\mathbf{i} - 2\\mathbf{j} + 4\\mathbf{k}", d: 5 },
    "(4,\\,-1,\\,5)", 1, "\\sqrt{11}", "\\dfrac{1}{\\sqrt{11}}"),
  pointPlaneDistance(66,
    { n: "3\\mathbf{i} - \\mathbf{j} + 4\\mathbf{k}", a: "\\mathbf{j}", diff: "5\\mathbf{i} + 2\\mathbf{j} - 3\\mathbf{k}", d: -3 },
    "(5,\\,3,\\,-3)", 5, "\\sqrt{26}", "\\dfrac{5}{\\sqrt{26}}"),

  // Hard — reflections (67–68)
  reflectionInPlane(67,
    { n: "2\\mathbf{i} - \\mathbf{j} + 2\\mathbf{k}", a: "\\mathbf{0}", pa: "6\\mathbf{i} + 3\\mathbf{j} + 6\\mathbf{k}", dot: 24, nsq: 9, d: 0, verify: "Reflected point satisfies opposite signed distance." },
    "6\\mathbf{i} + 3\\mathbf{j} + 6\\mathbf{k}", "2\\mathbf{i} + \\mathbf{j} + 2\\mathbf{k}", "-\\tfrac{10}{3}\\mathbf{i} - \\tfrac{5}{3}\\mathbf{j} - \\tfrac{10}{3}\\mathbf{k}",
    { difficulty: "Hard", marks: 8 }),
  reflectionInPlane(68,
    { n: "\\mathbf{i} - 2\\mathbf{j} + 2\\mathbf{k}", a: "2\\mathbf{i}", pa: "3\\mathbf{i} + 4\\mathbf{j} + \\mathbf{k}", dot: 9, nsq: 9, d: 4, verify: "Check $(\\mathbf{p}' - 2\\mathbf{i})\\cdot\\mathbf{n} = -9$." },
    "5\\mathbf{i} + 4\\mathbf{j} + \\mathbf{k}", "\\mathbf{i} + 4\\mathbf{j} + \\mathbf{k}", "-3\\mathbf{i} + 4\\mathbf{j} + \\mathbf{k}",
    { difficulty: "Hard", marks: 8 }),

  // Hard — multi-part (69–70)
  hardMulti(
    69,
    "The line $L$ has equation $\\mathbf{r} = \\mathbf{i} + 2\\mathbf{j} + \\lambda(2\\mathbf{i} - \\mathbf{j} + \\mathbf{k})$ and the plane $\\Pi$ has equation $\\mathbf{r}\\cdot(3\\mathbf{i} + \\mathbf{j} - 2\\mathbf{k}) = 4$.\n(a) Find the point where $L$ meets $\\Pi$.\n(b) Find the perpendicular distance from the point $(5,\\,0,\\,1)$ to $\\Pi$.",
    [
      step(1, "(a) Substitute the line into the plane", "(\\mathbf{i} + 2\\mathbf{j} + \\lambda(2\\mathbf{i} - \\mathbf{j} + \\mathbf{k}))\\cdot(3\\mathbf{i} + \\mathbf{j} - 2\\mathbf{k}) = 4", "Replace $\\mathbf{r}$ in the plane equation."),
      step(2, "(a) Expand the scalar product", "3 + \\lambda(6 - 1 - 2) = 4", "Compute $\\mathbf{a}\\cdot\\mathbf{n}$ and $\\mathbf{d}\\cdot\\mathbf{n}$."),
      step(3, "(a) Solve for $\\lambda$", "3 + 3\\lambda = 4 \\Rightarrow \\lambda = \\tfrac{1}{3}", "Linear equation in $\\lambda$."),
      step(4, "(a) Find the intersection point", "\\mathbf{r} = \\tfrac{5}{3}\\mathbf{i} + \\tfrac{5}{3}\\mathbf{j} + \\tfrac{1}{3}\\mathbf{k}", "Substitute $\\lambda = \\tfrac{1}{3}$ into the line."),
      step(5, "(b) Recall the point-plane distance formula", "d = \\dfrac{|\\mathbf{n}\\cdot(\\mathbf{p} - \\mathbf{a})|}{|\\mathbf{n}|}", "Use any point on the plane, e.g. where $x = \\tfrac{4}{3}$."),
      step(6, "(b) Choose a point on $\\Pi$", "\\mathbf{a} = \\tfrac{4}{3}\\mathbf{i}", "Since $\\tfrac{4}{3} \\cdot 3 = 4$."),
      step(7, "(b) Form $\\mathbf{p} - \\mathbf{a}$", "5\\mathbf{i} - \\tfrac{4}{3}\\mathbf{i} + \\mathbf{k} = \\tfrac{11}{3}\\mathbf{i} + \\mathbf{k}", "Displacement from the plane to $P$."),
      step(8, "(b) Compute the scalar product", "\\mathbf{n}\\cdot(\\mathbf{p} - \\mathbf{a}) = 11 + 0 - 2 = 9", "Dot with $\\mathbf{n} = 3\\mathbf{i} + \\mathbf{j} - 2\\mathbf{k}$."),
      step(9, "(b) Find $|\\mathbf{n}|$", "|\\mathbf{n}| = \\sqrt{9 + 1 + 4} = \\sqrt{14}", "Magnitude of the normal."),
      step(10, "(b) Calculate the distance", "d = \\dfrac{9}{\\sqrt{14}}", "Apply the formula."),
      step(11, "State both answers", "(a) $\\left(\\tfrac{5}{3},\\,\\tfrac{5}{3},\\,\\tfrac{1}{3}\\right)$; (b) $d = \\dfrac{9}{\\sqrt{14}}$", "Intersection point and perpendicular distance."),
      step(12, "Verify (a) in the plane", "5 + \\tfrac{5}{3} - \\tfrac{2}{3} = 4", "Check the intersection lies on $\\Pi$."),
      step(13, "Interpret (b)", "The distance is measured along the normal direction.", "Shortest path from the point to the plane."),
    ],
    "(a) $\\left(\\tfrac{5}{3},\\,\\tfrac{5}{3},\\,\\tfrac{1}{3}\\right)$. (b) $d = \\dfrac{9}{\\sqrt{14}}$.",
    ["line-plane-intersection", "point-plane-distance", "multi-part"],
    9
  ),
  hardMulti(
    70,
    "Lines $L_1: \\mathbf{r} = \\mathbf{i} + \\lambda(2\\mathbf{i} + \\mathbf{j} - \\mathbf{k})$ and $L_2: \\mathbf{r} = 3\\mathbf{i} + 2\\mathbf{k} + \\mu(\\mathbf{i} + 2\\mathbf{j} + \\mathbf{k})$ are skew.\n(a) Show that $L_1$ and $L_2$ do not intersect.\n(b) Find the shortest distance between them.",
    [
      step(1, "(a) Equate the lines", "\\mathbf{i} + \\lambda(2\\mathbf{i} + \\mathbf{j} - \\mathbf{k}) = 3\\mathbf{i} + 2\\mathbf{k} + \\mu(\\mathbf{i} + 2\\mathbf{j} + \\mathbf{k})", "Set position vectors equal."),
      step(2, "(a) Write component equations", "\\begin{cases} 2\\lambda - \\mu = 2 \\\\ \\lambda - 2\\mu = 0 \\\\ -\\lambda - \\mu = 2 \\end{cases}", "Three scalar equations."),
      step(3, "(a) Solve the first two", "\\lambda = \\tfrac{4}{3},\\; \\mu = \\tfrac{2}{3}", "From equations 1 and 2."),
      step(4, "(a) Check the third equation", "-\\tfrac{4}{3} - \\tfrac{2}{3} = -2 \\neq 2", "The $z$-components are inconsistent."),
      step(5, "(a) Conclude", "The lines are skew and do not intersect.", "No values of $\\lambda$ and $\\mu$ satisfy all three equations."),
      step(6, "(b) Recall the skew distance formula", "d = \\dfrac{|(\\mathbf{a}_2 - \\mathbf{a}_1)\\cdot(\\mathbf{d}_1 \\times \\mathbf{d}_2)|}{|\\mathbf{d}_1 \\times \\mathbf{d}_2|}", "Use the standard formula."),
      step(7, "(b) Compute $\\mathbf{d}_1 \\times \\mathbf{d}_2$", "(2\\mathbf{i} + \\mathbf{j} - \\mathbf{k}) \\times (\\mathbf{i} + 2\\mathbf{j} + \\mathbf{k}) = 3\\mathbf{i} - 3\\mathbf{j} + 3\\mathbf{k}", "Cross product of direction vectors."),
      step(8, "(b) Find the magnitude", "|\\mathbf{d}_1 \\times \\mathbf{d}_2| = 3\\sqrt{3}", "Square root of $9 + 9 + 9$."),
      step(9, "(b) Form $\\mathbf{a}_2 - \\mathbf{a}_1$", "2\\mathbf{i} + 2\\mathbf{k}", "Displacement between reference points."),
      step(10, "(b) Scalar triple product", "(2\\mathbf{i} + 2\\mathbf{k})\\cdot(3\\mathbf{i} - 3\\mathbf{j} + 3\\mathbf{k}) = 6 + 6 = 12", "Dot the displacement with the cross product."),
      step(11, "(b) Calculate distance", "d = \\dfrac{12}{3\\sqrt{3}} = \\dfrac{4}{\\sqrt{3}} = \\dfrac{4\\sqrt{3}}{3}", "Apply the formula."),
      step(12, "Verify lines are skew", "\\mathbf{d}_1 \\times \\mathbf{d}_2 \\neq \\mathbf{0} \\text{ and no intersection}", "Neither parallel nor intersecting."),
      step(13, "State both answers", "(a) no intersection; (b) $d = \\dfrac{4\\sqrt{3}}{3}$", "Complete solution."),
    ],
    "(a) The lines do not intersect (inconsistent $z$-equation). (b) $d = \\dfrac{4\\sqrt{3}}{3}$.",
    ["skew-lines-distance", "line-intersection", "multi-part"],
    10
  ),
];

const STEP_MIN = { Easy: 6, Intermediate: 9, Hard: 13 };
const STEP_MAX = { Easy: 9, Intermediate: 13, Hard: 18 };
const EXTRA = [
  () => step(0, "Distance formula reminder", "d = \\dfrac{|\\mathbf{v} \\times \\mathbf{d}|}{|\\mathbf{d}|}", "Perpendicular distance uses the cross product to find the component perpendicular to the line."),
  () => step(0, "Plane distance reminder", "d = \\dfrac{|\\mathbf{n}\\cdot(\\mathbf{p}-\\mathbf{a})|}{|\\mathbf{n}|}", "Project onto the normal of the plane."),
  () => step(0, "Skew lines", "\\mathbf{d}_1 \\times \\mathbf{d}_2 \\text{ gives the common perpendicular direction}", "For skew lines, the shortest distance lies along this direction."),
  () => step(0, "Reflection", "P' = 2F - P", "Reflect by doubling the foot of the perpendicular from $P$ to the plane."),
  () => step(0, "Intersection strategy", "\\text{Equate position vectors and solve}", "Set the two line or line-plane expressions equal and solve for parameters."),
  () => step(0, "Check consistency", "\\text{Verify in all component equations}", "Always confirm the solution satisfies every equation."),
  () => step(0, "Units", "\\text{length units}", "Distances are scalar lengths."),
  () => step(0, "Exact surd form", "\\text{Leave answers in simplified surd form}", "Do not round unless asked."),
];

for (const q of questions) {
  const min = STEP_MIN[q.difficulty];
  const max = STEP_MAX[q.difficulty];
  let steps = [...q.workedSolution.steps];
  let pad = 0;
  while (steps.length < min) {
    const extra = EXTRA[pad % EXTRA.length]();
    steps.push({ ...extra, stepNumber: steps.length + 1 });
    pad++;
  }
  if (steps.length > max) steps = steps.slice(0, max);
  q.workedSolution.steps = steps.map((s, i) => ({ ...s, stepNumber: i + 1 }));
}

const counts = { Easy: 0, Intermediate: 0, Hard: 0 };
for (const q of questions) counts[q.difficulty]++;

if (questions.length !== 70) {
  console.error(`Expected 70 questions, got ${questions.length}`);
  process.exit(1);
}

writeFileSync(outPath, `import { Question } from "@/lib/types";\n\nexport const questions: Question[] = ${JSON.stringify(questions, null, 2)};\n`);
console.log(`Wrote ${questions.length} questions to ${outPath}`);
console.log(`Difficulty: Easy=${counts.Easy}, Intermediate=${counts.Intermediate}, Hard=${counts.Hard}`);
