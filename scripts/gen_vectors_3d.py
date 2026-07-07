#!/usr/bin/env python3
"""Generate all 70 questions for Vectors in three dimensions (Year 2 Pure)."""
import json
import math
from collections import Counter

OUT = "/Users/benjaminwalpole/Wisest_Maths_V5/wisest-maths-content/src/data/questions/a-level-maths/year-2-pure/vectors-in-three-dimensions.ts"
SUBTOPIC = "Vectors in three dimensions"
SUBTOPIC_ID = "al.y2.pure.vectors-3d"


def step(n, desc, work, expl, diagram=None):
    return {"stepNumber": n, "description": desc, "workingLatex": work, "explanation": expl, "diagram": diagram}


def make_q(suffix, difficulty, marks, answer_type, tags, text, steps, final, diagram=None):
    return {
        "id": f"{SUBTOPIC_ID}.{suffix}",
        "level": "A-Level Maths",
        "topic": "Year 2 Pure",
        "subtopic": SUBTOPIC,
        "subtopicId": SUBTOPIC_ID,
        "difficulty": difficulty,
        "marks": marks,
        "answerType": answer_type,
        "tags": tags,
        "questionText": text,
        "questionDiagram": diagram,
        "workedSolution": {"steps": steps, "finalAnswer": final},
    }


def col_vec(x, y, z):
    return f"\\begin{{pmatrix}} {x} \\\\ {y} \\\\ {z} \\end{{pmatrix}}"


def ijk_vec(x, y, z):
    parts = []
    for val, unit in [(x, "\\mathbf{i}"), (y, "\\mathbf{j}"), (z, "\\mathbf{k}")]:
        if val == 0:
            continue
        if val == 1:
            parts.append(unit)
        elif val == -1:
            parts.append(f"-{unit}")
        else:
            parts.append(f"{val}{unit}")
    if not parts:
        return "\\mathbf{0}"
    s = parts[0]
    for p in parts[1:]:
        if p.startswith("-"):
            s += f" - {p[1:]}"
        else:
            s += f" + {p}"
    return s


def mag_steps(vec_name, x, y, z, mag, n_start=1):
    sq = x * x + y * y + z * z
    return [
        step(n_start, "Identify the components", f"{vec_name} = {ijk_vec(x, y, z)}",
             "In three dimensions each vector has horizontal ($\\mathbf{i}$), depth ($\\mathbf{j}$) and vertical ($\\mathbf{k}$) parts."),
        step(n_start + 1, "Write the magnitude formula", f"|{vec_name}| = \\sqrt{{x^2 + y^2 + z^2}}",
             "Magnitude is the straight-line length from the origin, found with a 3D version of Pythagoras."),
        step(n_start + 2, "Substitute the components", f"|{vec_name}| = \\sqrt{{{x}^2 + {y}^2 + {z}^2}} = \\sqrt{{{sq}}}",
             "Square each component and add them before taking the square root."),
        step(n_start + 3, "Evaluate the square root", f"|{vec_name}| = {mag}",
             "The result is the length of the vector."),
        step(n_start + 4, "Interpret the result", f"|{vec_name}| = {mag}",
             "This scalar gives how long the vector is, regardless of direction."),
        step(n_start + 5, "State the answer", f"|{vec_name}| = {mag}",
             "We have found the exact magnitude."),
    ]


def displacement_steps(a_name, b_name, ax, ay, az, bx, by, bz, dx, dy, dz, n=9):
    return [
        step(1, "Write position vectors", f"\\mathbf{{a}} = {ijk_vec(ax, ay, az)},\\ \\mathbf{{b}} = {ijk_vec(bx, by, bz)}",
             f"These locate ${a_name}$ and ${b_name}$ from the origin."),
        step(2, "Displacement formula", f"\\overrightarrow{{{a_name}{b_name}}} = \\mathbf{{b}} - \\mathbf{{a}}",
             "Subtract the start position from the finish position."),
        step(3, "Subtract components", f"({bx}-{ax})\\mathbf{{i}} + ({by}-{ay})\\mathbf{{j}} + ({bz}-{az})\\mathbf{{k}}",
             "Match and subtract each direction separately."),
        step(4, "Simplify", f"\\overrightarrow{{{a_name}{b_name}}} = {ijk_vec(dx, dy, dz)}",
             "Combine the three component results."),
        step(5, "Check direction", "\\text{vector points from } A \\text{ to } B",
             "The displacement carries us from the first point to the second."),
        step(6, "Optional magnitude", f"|\\overrightarrow{{{a_name}{b_name}}}| = \\sqrt{{{dx*dx}+{dy*dy}+{dz*dz}}}",
             "We can find length if needed."),
        step(7, "Verify subtraction", f"\\mathbf{{a}} + \\overrightarrow{{{a_name}{b_name}}} = \\mathbf{{b}}",
             "Adding the displacement to $\\mathbf{a}$ should recover $\\mathbf{b}$."),
        step(8, "Component check", f"i:{dx},\\ j:{dy},\\ k:{dz}",
             "Each component difference is consistent."),
        step(9, "State the answer", f"\\overrightarrow{{{a_name}{b_name}}} = {ijk_vec(dx, dy, dz)}",
             "The required displacement vector."),
    ]


def midpoint_steps(ax, ay, az, bx, by, bz, mx, my, mz):
    return [
        step(1, "Midpoint formula", "M = \\dfrac{1}{2}(\\mathbf{a}+\\mathbf{b})",
             "The midpoint position vector averages the two endpoints."),
        step(2, "Add position vectors", f"\\mathbf{{a}}+\\mathbf{{b}} = {ijk_vec(ax+bx, ay+by, az+bz)}",
             "Add matching components first."),
        step(3, "Halve each component", f"\\dfrac{{1}}{{2}}({ijk_vec(ax+bx, ay+by, az+bz)})",
             "Multiply by $\\dfrac{1}{2}$ to find the halfway point."),
        step(4, "Simplify", f"\\overrightarrow{{OM}} = {ijk_vec(mx, my, mz)}",
             "Divide each component by $2$."),
        step(5, "As coordinates", f"M({mx}, {my}, {mz})",
             "The midpoint in coordinate form."),
        step(6, "Verify $x$-average", f"\\dfrac{{{ax}+{bx}}}{{2}}={mx}", "The $x$-coordinate is the average."),
        step(7, "Verify $y$-average", f"\\dfrac{{{ay}+{by}}}{{2}}={my}", "The $y$-coordinate is the average."),
        step(8, "Verify $z$-average", f"\\dfrac{{{az}+{bz}}}{{2}}={mz}", "The $z$-coordinate is the average."),
        step(9, "Interpret", "\\text{equidistant from } A \\text{ and } B",
             "The midpoint is the same distance from both endpoints."),
        step(10, "State the answer", f"\\overrightarrow{{OM}} = {ijk_vec(mx, my, mz)}",
             "The midpoint position vector."),
    ]


def unit_vec_steps(x, y, z, ux, uy, uz, mag):
    return [
        step(1, "Unit vector formula", "\\hat{\\mathbf{a}} = \\dfrac{\\mathbf{a}}{|\\mathbf{a}|}",
             "Divide by magnitude to get length $1$ in the same direction."),
        step(2, "Find magnitude", f"|\\mathbf{{a}}| = \\sqrt{{{x}^2+{y}^2+{z}^2}} = {mag}",
             "Use the 3D Pythagoras formula."),
        step(3, "Divide components", f"\\hat{{\\mathbf{{a}}}} = \\dfrac{{{x}}}{{{mag}}}\\mathbf{{i}} + \\dfrac{{{y}}}{{{mag}}}\\mathbf{{j}} + \\dfrac{{{z}}}{{{mag}}}\\mathbf{{k}}",
             "Scale each part by $\\dfrac{1}{|\\mathbf{a}|}$."),
        step(4, "Simplify fractions", f"\\hat{{\\mathbf{{a}}}} = {ijk_vec(ux, uy, uz) if isinstance(ux, str) else ijk_vec(ux, uy, uz)}",
             "Cancel common factors where possible."),
        step(5, "Check length", f"\\left(\\dfrac{{{x}}}{{{mag}}}\\right)^2+\\cdots = 1",
             "Squared components should sum to $1$."),
        step(6, "Direction unchanged", "\\text{parallel to } \\mathbf{a}",
             "Only the length changes, not the line of action."),
        step(7, "State the answer", f"\\hat{{\\mathbf{{a}}}} = {ijk_vec(ux, uy, uz) if not isinstance(ux, str) else ux}",
             "The unit vector in the direction of $\\mathbf{a}$."),
    ]


def section_ratio_steps(m, n, ax, ay, az, bx, by, bz, px, py, pz):
    tot = m + n
    return [
        step(1, "Section formula", f"\\mathbf{{p}} = \\dfrac{{{n}\\mathbf{{a}} + {m}\\mathbf{{b}}}}{{{tot}}}",
             f"Point $P$ divides $AB$ internally in ratio ${m}:{n}$ — $m$ parts from $A$, $n$ from $B$."),
        step(2, "Substitute vectors", f"\\mathbf{{a}}={ijk_vec(ax,ay,az)},\\ \\mathbf{{b}}={ijk_vec(bx,by,bz)}",
             "Write the endpoint position vectors."),
        step(3, "Scale $\\mathbf{a}$", f"{n}\\mathbf{{a}} = {ijk_vec(n*ax, n*ay, n*az)}",
             f"Multiply $\\mathbf{{a}}$ by ${n}$ (the part nearest $B$)."),
        step(4, "Scale $\\mathbf{b}$", f"{m}\\mathbf{{b}} = {ijk_vec(m*bx, m*by, m*bz)}",
             f"Multiply $\\mathbf{{b}}$ by ${m}$ (the part nearest $A$)."),
        step(5, "Add and divide", f"\\mathbf{{p}} = \\dfrac{{1}}{{{tot}}}({ijk_vec(n*ax+m*bx, n*ay+m*by, n*az+m*bz)})",
             "Add the weighted vectors, then divide by $m+n$."),
        step(6, "Simplify components", f"\\mathbf{{p}} = {ijk_vec(px, py, pz)}",
             "Evaluate each component."),
        step(7, "Ratio check", f"\\overrightarrow{{AP}} : \\overrightarrow{{PB}} = {m}:{n}",
             "The point is closer to the endpoint with the smaller ratio part."),
        step(8, "Coordinate form", f"P({px}, {py}, {pz})",
             "Express as coordinates if helpful."),
        step(9, "Verify on segment", "\\text{lies between } A \\text{ and } B",
             "Internal division keeps $P$ on the line segment."),
        step(10, "State the answer", f"\\mathbf{{p}} = {ijk_vec(px, py, pz)}",
             "The position vector of $P$."),
    ]


def parallelogram_steps(a_vec, b_vec, d_vec, labels="ABCD"):
    return [
        step(1, "Parallelogram property", "\\overrightarrow{AB} = \\overrightarrow{DC}",
             "Opposite sides of a parallelogram are equal and parallel."),
        step(2, "Use $\\overrightarrow{OC} = \\mathbf{a}+\\mathbf{b}$", f"\\mathbf{{c}} = {a_vec} + {b_vec}",
             "From $O$ to $C$ via $A$ then $B$ (or $B$ then $A$)."),
        step(3, "Find $\\overrightarrow{OD}$", f"\\mathbf{{d}} = \\mathbf{{b}} + \\mathbf{{a}}",
             "The fourth vertex completes the parallelogram."),
        step(4, "Add components", f"\\mathbf{{d}} = {d_vec}",
             "Add matching $\\mathbf{i}$, $\\mathbf{j}$, $\\mathbf{k}$ parts."),
        step(5, "Alternative route", "\\mathbf{d} = \\mathbf{c} + (\\mathbf{b}-\\mathbf{a})",
             "Or go from $C$ parallel to $\\overrightarrow{AB}$."),
        step(6, "Check opposite sides", "\\overrightarrow{AD} = \\overrightarrow{BC}",
             "Both pairs of opposite sides must match."),
        step(7, "Geometric meaning", "\\text{fourth vertex of parallelogram } OABC",
             "The vector $\\mathbf{d}$ locates the missing corner."),
        step(8, "State the answer", f"\\mathbf{{d}} = {d_vec}",
             "The position vector of the fourth vertex."),
    ]


def cuboid_diag_steps(l, w, h, diag):
    return [
        step(1, "Space diagonal formula", "d = \\sqrt{l^2 + w^2 + h^2}",
             "The body diagonal crosses the cuboid corner to opposite corner through the interior."),
        step(2, "Substitute dimensions", f"d = \\sqrt{{{l}^2 + {w}^2 + {h}^2}}",
             "Square each edge length and add."),
        step(3, "Evaluate squares", f"d = \\sqrt{{{l*l} + {w*w} + {h*h}}}",
             "Compute each squared term."),
        step(4, "Sum", f"d = \\sqrt{{{l*l + w*w + h*h}}}",
             "Add the three squared edges."),
        step(5, "Simplify", f"d = {diag}",
             "Take the square root."),
        step(6, "3D Pythagoras", "\\text{face diagonal then height}",
             "Equivalently: find a face diagonal first, then use Pythagoras with the third edge."),
        step(7, "State the answer", f"d = {diag}",
             "The length of the space diagonal."),
    ]


def collinear_proof_steps(ax, ay, az, bx, by, bz, cx, cy, cz, k_ab_from_ac):
    """Return steps showing AB = k * AC (collinearity from common point A)."""
    abx, aby, abz = bx - ax, by - ay, bz - az
    acx, acy, acz = cx - ax, cy - ay, cz - az
    return [
        step(1, "Form $\\overrightarrow{AB}$", f"\\overrightarrow{{AB}} = {ijk_vec(abx, aby, abz)}",
             "Displacement from $A$ to $B$."),
        step(2, "Form $\\overrightarrow{AC}$", f"\\overrightarrow{{AC}} = {ijk_vec(acx, acy, acz)}",
             "Displacement from $A$ to $C$."),
        step(3, "Test for scalar multiple", f"\\overrightarrow{{AB}} = {k_ab_from_ac}\\overrightarrow{{AC}}",
             "Collinear points give parallel displacement vectors — one is a scalar multiple of the other."),
        step(4, "Check $\\mathbf{i}$-components", f"{abx} = {k_ab_from_ac} \\times {acx}",
             "The scale factor must match in every component."),
        step(5, "Check $\\mathbf{j}$-components", f"{aby} = {k_ab_from_ac} \\times {acy}",
             "All three components must share the same multiplier."),
        step(6, "Check $\\mathbf{k}$-components", f"{abz} = {k_ab_from_ac} \\times {acz}",
             "If any ratio differs, the points are not collinear."),
        step(7, "Common point", "A \\text{ is shared}",
             "Both vectors start from $A$, so they lie on the same line through $A$."),
        step(8, "Conclude collinearity", "A,\\ B \\text{ and } C \\text{ are collinear}",
             "Parallel displacements from a common point mean the three points lie on one straight line."),
        step(9, "State the result", f"\\overrightarrow{{AB}} = {k_ab_from_ac}\\overrightarrow{{AC}}",
             "The scalar-multiple condition is satisfied."),
    ]


questions = []

# EASY q001-q022
questions.append(make_q(
    "q001", "Easy", 3, "vector", ["vectors", "column-vector", "ijk-notation"],
    "The vector $\\mathbf{a} = 2\\mathbf{i} - 3\\mathbf{j} + 5\\mathbf{k}$. Write $\\mathbf{a}$ as a column vector.",
    [
        step(1, "Recall the correspondence", "x\\mathbf{i} + y\\mathbf{j} + z\\mathbf{k} = \\begin{pmatrix} x \\\\ y \\\\ z \\end{pmatrix}",
             "A column vector stacks the $\\mathbf{i}$, $\\mathbf{j}$ and $\\mathbf{k}$ coefficients top to bottom."),
        step(2, "Read the $\\mathbf{i}$-component", "x = 2", "The number multiplying $\\mathbf{i}$ is the first entry."),
        step(3, "Read the $\\mathbf{j}$-component", "y = -3", "The coefficient of $\\mathbf{j}$ becomes the middle entry, sign included."),
        step(4, "Read the $\\mathbf{k}$-component", "z = 5", "The coefficient of $\\mathbf{k}$ is the bottom entry."),
        step(5, "Assemble the column", "\\mathbf{a} = \\begin{pmatrix} 2 \\\\ -3 \\\\ 5 \\end{pmatrix}",
             "Place the three components in order without changing any signs."),
        step(6, "State the answer", "\\mathbf{a} = \\begin{pmatrix} 2 \\\\ -3 \\\\ 5 \\end{pmatrix}",
             "This is the same vector in column form."),
    ],
    "$\\mathbf{a} = \\begin{pmatrix} 2 \\\\ -3 \\\\ 5 \\end{pmatrix}$",
))

questions.append(make_q(
    "q002", "Easy", 3, "vector", ["vectors", "column-vector", "ijk-notation"],
    "The vector $\\mathbf{b} = \\begin{pmatrix} -1 \\\\ 4 \\\\ 2 \\end{pmatrix}$. Write $\\mathbf{b}$ in $\\mathbf{i}$, $\\mathbf{j}$, $\\mathbf{k}$ form.",
    [
        step(1, "Recall the correspondence", "\\begin{pmatrix} x \\\\ y \\\\ z \\end{pmatrix} = x\\mathbf{i} + y\\mathbf{j} + z\\mathbf{k}",
             "Each row of the column becomes the coefficient of the matching unit direction."),
        step(2, "Write the $\\mathbf{i}$ term", "-1\\mathbf{i} = -\\mathbf{i}", "The top entry $-1$ gives a negative $\\mathbf{i}$ term."),
        step(3, "Write the $\\mathbf{j}$ term", "4\\mathbf{j}", "The middle entry $4$ multiplies $\\mathbf{j}$."),
        step(4, "Write the $\\mathbf{k}$ term", "2\\mathbf{k}", "The bottom entry $2$ multiplies $\\mathbf{k}$."),
        step(5, "Combine the terms", "\\mathbf{b} = -\\mathbf{i} + 4\\mathbf{j} + 2\\mathbf{k}",
             "Add the three direction parts to express the same vector."),
        step(6, "State the answer", "\\mathbf{b} = -\\mathbf{i} + 4\\mathbf{j} + 2\\mathbf{k}",
             "This is the vector in unit-vector notation."),
    ],
    "$\\mathbf{b} = -\\mathbf{i} + 4\\mathbf{j} + 2\\mathbf{k}$",
))

for qid, x, y, z, mag in [
    ("q003", 3, 4, 0, 5),
    ("q004", 1, 2, 2, 3),
    ("q005", 2, -1, 2, 3),
    ("q006", -3, 0, 4, 5),
    ("q007", 6, 2, 3, 7),
    ("q008", 1, -2, 2, 3),
]:
    questions.append(make_q(
        qid, "Easy", 3, "numeric", ["vectors", "magnitude"],
        f"Find the magnitude of $\\mathbf{{a}} = {ijk_vec(x, y, z)}$.",
        mag_steps("\\mathbf{a}", x, y, z, mag),
        f"$|\\mathbf{{a}}| = {mag}$",
    ))

questions.append(make_q(
    "q009", "Easy", 3, "vector", ["vectors", "addition"],
    "Given $\\mathbf{a} = 3\\mathbf{i} + \\mathbf{j} - 2\\mathbf{k}$ and $\\mathbf{b} = -\\mathbf{i} + 4\\mathbf{j} + 5\\mathbf{k}$, find $\\mathbf{a} + \\mathbf{b}$.",
    [
        step(1, "Recall vector addition", "\\mathbf{a} + \\mathbf{b} = (a_1+b_1)\\mathbf{i} + (a_2+b_2)\\mathbf{j} + (a_3+b_3)\\mathbf{k}",
             "Add matching components: all $\\mathbf{i}$ parts together, then $\\mathbf{j}$, then $\\mathbf{k}$."),
        step(2, "Add the $\\mathbf{i}$-components", "3 + (-1) = 2", "Combine the horizontal parts."),
        step(3, "Add the $\\mathbf{j}$-components", "1 + 4 = 5", "Combine the depth parts."),
        step(4, "Add the $\\mathbf{k}$-components", "-2 + 5 = 3", "Combine the vertical parts."),
        step(5, "Write the sum", "\\mathbf{a} + \\mathbf{b} = 2\\mathbf{i} + 5\\mathbf{j} + 3\\mathbf{k}",
             "Collect the three results into one vector."),
        step(6, "State the answer", "\\mathbf{a} + \\mathbf{b} = 2\\mathbf{i} + 5\\mathbf{j} + 3\\mathbf{k}",
             "This is the resultant when the two displacements are combined."),
    ],
    "$\\mathbf{a} + \\mathbf{b} = 2\\mathbf{i} + 5\\mathbf{j} + 3\\mathbf{k}$",
))

questions.append(make_q(
    "q010", "Easy", 3, "vector", ["vectors", "subtraction"],
    "Given $\\mathbf{p} = 5\\mathbf{i} - 2\\mathbf{j} + \\mathbf{k}$ and $\\mathbf{q} = 2\\mathbf{i} + 3\\mathbf{j} - 4\\mathbf{k}$, find $\\mathbf{p} - \\mathbf{q}$.",
    [
        step(1, "Recall vector subtraction", "\\mathbf{p} - \\mathbf{q} = (p_1-q_1)\\mathbf{i} + (p_2-q_2)\\mathbf{j} + (p_3-q_3)\\mathbf{k}",
             "Subtract component by component, matching each direction."),
        step(2, "Subtract the $\\mathbf{i}$-components", "5 - 2 = 3", "Take the $\\mathbf{i}$ part of $\\mathbf{q}$ from that of $\\mathbf{p}$."),
        step(3, "Subtract the $\\mathbf{j}$-components", "-2 - 3 = -5", "Carefully subtract, keeping signs."),
        step(4, "Subtract the $\\mathbf{k}$-components", "1 - (-4) = 5", "Subtracting a negative gives addition."),
        step(5, "Write the difference", "\\mathbf{p} - \\mathbf{q} = 3\\mathbf{i} - 5\\mathbf{j} + 5\\mathbf{k}",
             "Combine the three component results."),
        step(6, "State the answer", "\\mathbf{p} - \\mathbf{q} = 3\\mathbf{i} - 5\\mathbf{j} + 5\\mathbf{k}",
             "This vector points from the tip of $\\mathbf{q}$ to the tip of $\\mathbf{p}$ when placed tail-to-tail."),
    ],
    "$\\mathbf{p} - \\mathbf{q} = 3\\mathbf{i} - 5\\mathbf{j} + 5\\mathbf{k}$",
))

questions.append(make_q(
    "q011", "Easy", 2, "vector", ["vectors", "scalar-multiple"],
    "Find $3\\mathbf{a}$ where $\\mathbf{a} = 2\\mathbf{i} - \\mathbf{j} + 4\\mathbf{k}$.",
    [
        step(1, "Recall scalar multiplication", "k\\mathbf{a} = k(a_1\\mathbf{i} + a_2\\mathbf{j} + a_3\\mathbf{k})",
             "Multiplying a vector by a scalar scales every component by the same factor."),
        step(2, "Multiply the $\\mathbf{i}$-component", "3 \\times 2 = 6", "Scale the horizontal part."),
        step(3, "Multiply the $\\mathbf{j}$-component", "3 \\times (-1) = -3", "Scale the depth part."),
        step(4, "Multiply the $\\mathbf{k}$-component", "3 \\times 4 = 12", "Scale the vertical part."),
        step(5, "Write the result", "3\\mathbf{a} = 6\\mathbf{i} - 3\\mathbf{j} + 12\\mathbf{k}",
             "The new vector has the same direction but three times the length."),
        step(6, "State the answer", "3\\mathbf{a} = 6\\mathbf{i} - 3\\mathbf{j} + 12\\mathbf{k}",
             "Scalar multiplication stretches the vector without changing its line of action."),
    ],
    "$3\\mathbf{a} = 6\\mathbf{i} - 3\\mathbf{j} + 12\\mathbf{k}$",
))

questions.append(make_q(
    "q012", "Easy", 3, "numeric", ["vectors", "distance", "coordinates"],
    "Find the distance between the points $A(1, 2, 3)$ and $B(4, 6, 3)$.",
    [
        step(1, "Form the displacement vector", "\\overrightarrow{AB} = (4-1)\\mathbf{i} + (6-2)\\mathbf{j} + (3-3)\\mathbf{k} = 3\\mathbf{i} + 4\\mathbf{j}",
             "Subtract corresponding coordinates to get the vector from $A$ to $B$."),
        step(2, "Write the distance formula", "|\\overrightarrow{AB}| = \\sqrt{3^2 + 4^2 + 0^2}",
             "Distance is the magnitude of the displacement vector."),
        step(3, "Evaluate the sum of squares", "9 + 16 = 25", "Add the squared components."),
        step(4, "Take the square root", "|\\overrightarrow{AB}| = 5", "The distance is $5$ units."),
        step(5, "Geometric check", "\\text{3-4-5 right triangle in the } xy\\text{-plane}",
             "Since the $z$-coordinates match, the points differ only in the $xy$-plane, giving a familiar Pythagorean triple."),
        step(6, "State the answer", "AB = 5",
             "The straight-line distance between $A$ and $B$ is $5$."),
    ],
    "$AB = 5$",
))

questions.append(make_q(
    "q013", "Easy", 4, "vector", ["vectors", "unit-vector"],
    "Find the unit vector in the direction of $\\mathbf{a} = 6\\mathbf{i} + 8\\mathbf{k}$.",
    [
        step(1, "Recall the unit vector formula", "\\hat{\\mathbf{a}} = \\dfrac{\\mathbf{a}}{|\\mathbf{a}|}",
             "A unit vector has length $1$ and points the same way as $\\mathbf{a}$."),
        step(2, "Find the magnitude", "|\\mathbf{a}| = \\sqrt{6^2 + 0^2 + 8^2} = \\sqrt{100} = 10",
             "Use the 3D magnitude formula on the given components."),
        step(3, "Divide each component by $10$", "\\hat{\\mathbf{a}} = \\dfrac{6}{10}\\mathbf{i} + \\dfrac{8}{10}\\mathbf{k}",
             "Scaling by $\\dfrac{1}{|\\mathbf{a}|}$ makes the length exactly $1$."),
        step(4, "Simplify the fractions", "\\hat{\\mathbf{a}} = \\dfrac{3}{5}\\mathbf{i} + \\dfrac{4}{5}\\mathbf{k}",
             "Cancel the common factor of $2$."),
        step(5, "Verify the length", "\\left(\\dfrac{3}{5}\\right)^2 + \\left(\\dfrac{4}{5}\\right)^2 = 1",
             "The squared components sum to $1$, confirming a unit vector."),
        step(6, "State the answer", "\\hat{\\mathbf{a}} = \\dfrac{3}{5}\\mathbf{i} + \\dfrac{4}{5}\\mathbf{k}",
             "This is the direction of $\\mathbf{a}$ scaled to unit length."),
    ],
    "$\\hat{\\mathbf{a}} = \\dfrac{3}{5}\\mathbf{i} + \\dfrac{4}{5}\\mathbf{k}$",
))

# q014-q022 easy batch
easy_more = [
    ("q014", "vector", "Write $\\mathbf{c} = \\begin{pmatrix} 0 \\\\ -2 \\\\ 7 \\end{pmatrix}$ in $\\mathbf{i}$, $\\mathbf{j}$, $\\mathbf{k}$ form.",
     "-2\\mathbf{j} + 7\\mathbf{k}", [
        step(1, "Read each component", "x=0,\\ y=-2,\\ z=7", "A zero top entry means no $\\mathbf{i}$ term appears."),
        step(2, "Skip the zero $\\mathbf{i}$-term", "0\\mathbf{i} = \\mathbf{0}", "We omit directions with zero coefficient."),
        step(3, "Write the $\\mathbf{j}$ term", "-2\\mathbf{j}", "The middle entry gives the $\\mathbf{j}$ part."),
        step(4, "Write the $\\mathbf{k}$ term", "7\\mathbf{k}", "The bottom entry gives the $\\mathbf{k}$ part."),
        step(5, "Combine", "\\mathbf{c} = -2\\mathbf{j} + 7\\mathbf{k}", "Only non-zero directions appear."),
        step(6, "State the answer", "\\mathbf{c} = -2\\mathbf{j} + 7\\mathbf{k}", "Same vector, different notation."),
     ], "$\\mathbf{c} = -2\\mathbf{j} + 7\\mathbf{k}$"),
    ("q015", "numeric", "Find $|-2\\mathbf{i} + 2\\mathbf{j} + \\mathbf{k}|$.",
     "\\sqrt{9} = 3", mag_steps("\\mathbf{a}", -2, 2, 1, 3), "$|\\mathbf{a}| = 3$"),
    ("q016", "vector", "Given $\\mathbf{u} = \\begin{pmatrix} 1 \\\\ 2 \\\\ 3 \\end{pmatrix}$ and $\\mathbf{v} = \\begin{pmatrix} 4 \\\\ -1 \\\\ 2 \\end{pmatrix}$, find $\\mathbf{u} + \\mathbf{v}$.",
     "\\begin{pmatrix} 5 \\\\ 1 \\\\ 5 \\end{pmatrix}", [
        step(1, "Add component-wise", "\\mathbf{u}+\\mathbf{v} = \\begin{pmatrix} 1+4 \\\\ 2+(-1) \\\\ 3+2 \\end{pmatrix}", "Column vectors add entry by entry."),
        step(2, "First entry", "1+4=5", "Top components combine."),
        step(3, "Second entry", "2-1=1", "Middle components combine."),
        step(4, "Third entry", "3+2=5", "Bottom components combine."),
        step(5, "Write the column", "\\begin{pmatrix} 5 \\\\ 1 \\\\ 5 \\end{pmatrix}", "Stack the three results."),
        step(6, "State the answer", "\\mathbf{u}+\\mathbf{v} = \\begin{pmatrix} 5 \\\\ 1 \\\\ 5 \\end{pmatrix}", "The sum in column form."),
     ], "$\\mathbf{u} + \\mathbf{v} = \\begin{pmatrix} 5 \\\\ 1 \\\\ 5 \\end{pmatrix}$"),
    ("q017", "numeric", "Find the distance between $P(-1, 3, 2)$ and $Q(2, 7, 6)$.",
     "\\sqrt{41}", [
        step(1, "Form $\\overrightarrow{PQ}$", "3\\mathbf{i}+4\\mathbf{j}+4\\mathbf{k}", "Subtract coordinates: $(2-(-1),\\,7-3,\\,6-2)$."),
        step(2, "Magnitude formula", "|\\overrightarrow{PQ}|=\\sqrt{3^2+4^2+4^2}", "Distance equals the length of the displacement vector."),
        step(3, "Sum of squares", "9+16+16=41", "Square each component and add."),
        step(4, "Take the square root", "|\\overrightarrow{PQ}|=\\sqrt{41}", "Leave the surd form unless asked for a decimal."),
        step(5, "Check plausibility", "\\sqrt{41}\\approx 6.4", "A quick estimate confirms a sensible length."),
        step(6, "State the answer", "PQ=\\sqrt{41}", "The exact straight-line distance between the points."),
     ], "$PQ = \\sqrt{41}$"),
]
for item in easy_more:
    qid, atype, text, _, steps, final = item
    tags = ["vectors"]
    questions.append(make_q(qid, "Easy", 3, atype, tags, text, steps, final))

# q018–q022 easy
questions.append(make_q(
    "q018", "Easy", 2, "vector", ["vectors", "scalar-multiple"],
    "Find $-2\\mathbf{a}$ where $\\mathbf{a} = \\mathbf{i} + 3\\mathbf{j} - 2\\mathbf{k}$.",
    [
        step(1, "Recall scalar multiplication", "-2\\mathbf{a} = -2(a_1\\mathbf{i}+a_2\\mathbf{j}+a_3\\mathbf{k})",
             "A negative scalar reverses direction and scales every component."),
        step(2, "Scale the $\\mathbf{i}$-component", "-2 \\times 1 = -2", "Multiply the $\\mathbf{i}$ coefficient by $-2$."),
        step(3, "Scale the $\\mathbf{j}$-component", "-2 \\times 3 = -6", "Multiply the $\\mathbf{j}$ coefficient by $-2$."),
        step(4, "Scale the $\\mathbf{k}$-component", "-2 \\times (-2) = 4", "A negative times a negative gives a positive."),
        step(5, "Write the result", "-2\\mathbf{a} = -2\\mathbf{i} - 6\\mathbf{j} + 4\\mathbf{k}",
             "Collect the three scaled components."),
        step(6, "State the answer", "-2\\mathbf{a} = -2\\mathbf{i} - 6\\mathbf{j} + 4\\mathbf{k}",
             "The vector points opposite to $\\mathbf{a}$ with twice its length."),
    ],
    "$-2\\mathbf{a} = -2\\mathbf{i} - 6\\mathbf{j} + 4\\mathbf{k}$",
))

questions.append(make_q(
    "q019", "Easy", 3, "vector", ["vectors", "displacement", "position-vector"],
    "Points $A$ and $B$ have position vectors $\\mathbf{a} = 2\\mathbf{i} + \\mathbf{j} + 3\\mathbf{k}$ and $\\mathbf{b} = 5\\mathbf{i} + 4\\mathbf{j} + \\mathbf{k}$. Find $\\overrightarrow{AB}$.",
    [
        step(1, "Write the position vectors", "\\mathbf{a} = 2\\mathbf{i}+\\mathbf{j}+3\\mathbf{k},\\ \\mathbf{b} = 5\\mathbf{i}+4\\mathbf{j}+\\mathbf{k}",
             "These locate $A$ and $B$ relative to the origin."),
        step(2, "Recall the displacement formula", "\\overrightarrow{AB} = \\mathbf{b} - \\mathbf{a}",
             "Travel from $A$ to $B$ by subtracting the start from the finish."),
        step(3, "Subtract $\\mathbf{i}$-components", "5-2=3", "Horizontal parts combine separately."),
        step(4, "Subtract $\\mathbf{j}$-components", "4-1=3", "Depth parts combine separately."),
        step(5, "Subtract $\\mathbf{k}$-components", "1-3=-2", "Vertical parts combine separately."),
        step(6, "State the displacement", "\\overrightarrow{AB} = 3\\mathbf{i} + 3\\mathbf{j} - 2\\mathbf{k}",
             "This vector carries us directly from $A$ to $B$."),
    ],
    "$\\overrightarrow{AB} = 3\\mathbf{i} + 3\\mathbf{j} - 2\\mathbf{k}$",
))

questions.append(make_q(
    "q020", "Easy", 3, "vector", ["vectors", "midpoint"],
    "Find the midpoint of the line segment joining $A(2, -1, 4)$ and $B(6, 3, 0)$.",
    [
        step(1, "Recall the midpoint formula", "M = \\left(\\dfrac{x_1+x_2}{2},\\dfrac{y_1+y_2}{2},\\dfrac{z_1+z_2}{2}\\right)",
             "Average each coordinate — the midpoint is exactly halfway."),
        step(2, "Average the $x$-coordinates", "\\dfrac{2+6}{2}=4", "Halfway between $2$ and $6$ is $4$."),
        step(3, "Average the $y$-coordinates", "\\dfrac{-1+3}{2}=1", "Halfway between $-1$ and $3$ is $1$."),
        step(4, "Average the $z$-coordinates", "\\dfrac{4+0}{2}=2", "Halfway between $4$ and $0$ is $2$."),
        step(5, "Write the midpoint", "M(4, 1, 2)", "Combine the three averaged coordinates."),
        step(6, "As a position vector", "\\overrightarrow{OM} = 4\\mathbf{i} + \\mathbf{j} + 2\\mathbf{k}",
             "The midpoint can also be expressed as a vector from the origin."),
    ],
    "$M(4, 1, 2)$ or $\\overrightarrow{OM} = 4\\mathbf{i} + \\mathbf{j} + 2\\mathbf{k}$",
))

questions.append(make_q(
    "q021", "Easy", 3, "vector", ["vectors", "column-vector", "ijk-notation"],
    "Write $\\mathbf{d} = 4\\mathbf{i} - \\mathbf{k}$ as a column vector.",
    [
        step(1, "Match components to rows", "x\\mathbf{i}+y\\mathbf{j}+z\\mathbf{k} \\leftrightarrow \\begin{pmatrix}x\\\\y\\\\z\\end{pmatrix}",
             "Each unit direction corresponds to one row of the column."),
        step(2, "Read $x=4$", "4", "The $\\mathbf{i}$-coefficient is the top entry."),
        step(3, "Read $y=0$", "0", "No $\\mathbf{j}$ term means the middle entry is zero."),
        step(4, "Read $z=-1$", "-1", "The coefficient of $\\mathbf{k}$ is the bottom entry."),
        step(5, "Assemble the column", "\\mathbf{d} = \\begin{pmatrix} 4 \\\\ 0 \\\\ -1 \\end{pmatrix}",
             "Stack the three values in order."),
        step(6, "State the answer", "\\mathbf{d} = \\begin{pmatrix} 4 \\\\ 0 \\\\ -1 \\end{pmatrix}",
             "Same vector, column notation."),
    ],
    "$\\mathbf{d} = \\begin{pmatrix} 4 \\\\ 0 \\\\ -1 \\end{pmatrix}$",
))

questions.append(make_q(
    "q022", "Easy", 3, "numeric", ["vectors", "distance"],
    "Find the distance between $C(0, 0, 0)$ and $D(2, 3, 6)$.",
    [
        step(1, "Form the displacement", "\\overrightarrow{CD} = 2\\mathbf{i}+3\\mathbf{j}+6\\mathbf{k}",
             "From the origin, the position vector of $D$ is the displacement from $C$."),
        step(2, "Magnitude formula", "|\\overrightarrow{CD}|=\\sqrt{2^2+3^2+6^2}", "Distance is the length of the displacement."),
        step(3, "Sum of squares", "4+9+36=49", "Add the squared components."),
        step(4, "Square root", "|\\overrightarrow{CD}|=7", "Since $49$ is a perfect square, the distance is an integer."),
        step(5, "Interpret", "\\text{length }7\\text{ units}", "The straight-line distance from the origin to $D$."),
        step(6, "State the answer", "CD=7", "The required distance."),
    ],
    "$CD = 7$",
))

# ══════════════════════════════════════════════════════════════════════════════
# INTERMEDIATE q023–q052
# ══════════════════════════════════════════════════════════════════════════════

questions.append(make_q(
    "q023", "Intermediate", 4, "vector", ["vectors", "displacement", "column-vector"],
    "Relative to $O$, points $A$ and $B$ have position vectors $\\mathbf{a} = \\begin{pmatrix} 3 \\\\ -1 \\\\ 2 \\end{pmatrix}$ and $\\mathbf{b} = \\begin{pmatrix} -1 \\\\ 4 \\\\ 5 \\end{pmatrix}$. Find $\\overrightarrow{AB}$ as a column vector.",
    [
        step(1, "Displacement formula", "\\overrightarrow{AB} = \\mathbf{b} - \\mathbf{a}",
             "Subtract the starting position from the finishing position."),
        step(2, "Subtract top entries", "-1 - 3 = -4", "First components."),
        step(3, "Subtract middle entries", "4 - (-1) = 5", "Second components."),
        step(4, "Subtract bottom entries", "5 - 2 = 3", "Third components."),
        step(5, "Write the column", "\\overrightarrow{AB} = \\begin{pmatrix} -4 \\\\ 5 \\\\ 3 \\end{pmatrix}",
             "Stack the three differences."),
        step(6, "Check by adding back", "\\mathbf{a} + \\overrightarrow{AB} = \\mathbf{b}",
             "Displacement added to $\\mathbf{a}$ should give $\\mathbf{b}$."),
        step(7, "Verify first entry", "3 + (-4) = -1", "Recovers the $\\mathbf{b}$ top entry."),
        step(8, "Verify remaining entries", "\\text{consistent}",
             "All three components check."),
        step(9, "State the answer", "\\overrightarrow{AB} = \\begin{pmatrix} -4 \\\\ 5 \\\\ 3 \\end{pmatrix}",
             "The displacement in column form."),
    ],
    "$\\overrightarrow{AB} = \\begin{pmatrix} -4 \\\\ 5 \\\\ 3 \\end{pmatrix}$",
))

questions.append(make_q(
    "q024", "Intermediate", 4, "vector", ["vectors", "midpoint"],
    "The points $A$ and $B$ have position vectors $\\mathbf{a} = 4\\mathbf{i} - 2\\mathbf{j} + 6\\mathbf{k}$ and $\\mathbf{b} = 8\\mathbf{i} + 4\\mathbf{j} - 2\\mathbf{k}$. Find the position vector of the midpoint $M$ of $AB$.",
    midpoint_steps(4, -2, 6, 8, 4, -2, 6, 1, 2),
    "$\\overrightarrow{OM} = 6\\mathbf{i} + \\mathbf{j} + 2\\mathbf{k}$",
))

questions.append(make_q(
    "q025", "Intermediate", 4, "vector", ["vectors", "unit-vector"],
    "Find the unit vector in the direction of $\\mathbf{v} = 2\\mathbf{i} + 2\\mathbf{j} + \\mathbf{k}$.",
    [
        step(1, "Formula", "\\hat{\\mathbf{v}} = \\dfrac{\\mathbf{v}}{|\\mathbf{v}|}",
             "Divide by magnitude to obtain length $1$."),
        step(2, "Magnitude", "|\\mathbf{v}| = \\sqrt{4+4+1} = 3",
             "Square each component, add, then square root."),
        step(3, "Divide", "\\hat{\\mathbf{v}} = \\dfrac{2}{3}\\mathbf{i} + \\dfrac{2}{3}\\mathbf{j} + \\dfrac{1}{3}\\mathbf{k}",
             "Each component divided by $3$."),
        step(4, "Check length", "\\left(\\dfrac{2}{3}\\right)^2+\\left(\\dfrac{2}{3}\\right)^2+\\left(\\dfrac{1}{3}\\right)^2 = 1",
             "Confirms a unit vector."),
        step(5, "Direction", "\\text{parallel to } \\mathbf{v}",
             "Same line of action, scaled to unit length."),
        step(6, "State the answer", "\\hat{\\mathbf{v}} = \\dfrac{2}{3}\\mathbf{i} + \\dfrac{2}{3}\\mathbf{j} + \\dfrac{1}{3}\\mathbf{k}",
             "Required unit vector."),
    ],
    "$\\hat{\\mathbf{v}} = \\dfrac{2}{3}\\mathbf{i} + \\dfrac{2}{3}\\mathbf{j} + \\dfrac{1}{3}\\mathbf{k}$",
))

questions.append(make_q(
    "q026", "Intermediate", 4, "numeric", ["vectors", "parallel"],
    "The vectors $\\mathbf{a} = 3\\mathbf{i} - 6\\mathbf{j} + 3\\mathbf{k}$ and $\\mathbf{b} = \\mathbf{i} - 2\\mathbf{j} + t\\mathbf{k}$ are parallel. Find $t$.",
    [
        step(1, "Parallel condition", "\\mathbf{a} = k\\mathbf{b} \\text{ for some } k",
             "Parallel vectors are scalar multiples of each other."),
        step(2, "Compare $\\mathbf{i}$-components", "3 = k(1) \\Rightarrow k = 3",
             "Match the first components to find the scale factor."),
        step(3, "Check $\\mathbf{j}$-components", "-6 = 3(-2) = -6",
             "The scale factor $k=3$ is consistent for $\\mathbf{j}$."),
        step(4, "Apply to $\\mathbf{k}$", "3 = 3(t) \\Rightarrow t = 1",
             "Use the same $k$ on the $\\mathbf{k}$-components."),
        step(5, "Verify", "\\mathbf{a} = 3\\mathbf{b}",
             "Substituting $t=1$ gives an exact scalar multiple."),
        step(6, "Interpret", "\\text{same direction line}",
             "Both vectors lie on the same line through the origin."),
        step(7, "Alternative check", "\\dfrac{3}{1} = \\dfrac{-6}{-2} = \\dfrac{3}{t}",
             "Component ratios must all be equal."),
        step(8, "Confirm $t$", "t = 1",
             "Only value making all ratios equal."),
        step(9, "State the answer", "t = 1",
             "The unknown component."),
    ],
    "$t = 1$",
))

questions.append(make_q(
    "q027", "Intermediate", 4, "proof", ["vectors", "collinearity"],
    "Points $A$, $B$ and $C$ have position vectors $\\mathbf{a} = \\mathbf{i} + 2\\mathbf{j} + \\mathbf{k}$, $\\mathbf{b} = 3\\mathbf{i} + 6\\mathbf{j} + 3\\mathbf{k}$ and $\\mathbf{c} = 2\\mathbf{i} + 4\\mathbf{j} + 2\\mathbf{k}$. Show that $A$, $B$ and $C$ are collinear.",
    collinear_proof_steps(1, 2, 1, 3, 6, 3, 2, 4, 2, 2) + [
        step(10, "Note relationship to $\\mathbf{a}$", "\\mathbf{b} = 3\\mathbf{a},\\ \\mathbf{c} = 2\\mathbf{a}",
             "Both $B$ and $C$ lie on the line through the origin and $A$."),
        step(11, "Conclusion", "A,\\ B,\\ C \\text{ collinear}",
             "All three points lie on one straight line."),
        step(12, "State the result", "\\text{collinear}",
             "Proof complete."),
    ],
    "$\\overrightarrow{AB} = 2\\overrightarrow{AC}$, so the points are collinear.",
))

questions.append(make_q(
    "q028", "Intermediate", 4, "numeric", ["vectors", "magnitude", "addition"],
    "Given $\\mathbf{p} = 2\\mathbf{i} + 3\\mathbf{j} - \\mathbf{k}$ and $\\mathbf{q} = 2\\mathbf{i} + \\mathbf{j} + 3\\mathbf{k}$, find $|\\mathbf{p} + \\mathbf{q}|$.",
    [
        step(1, "Add vectors", "\\mathbf{p}+\\mathbf{q} = 4\\mathbf{i}+4\\mathbf{j}+2\\mathbf{k}",
             "Add matching components."),
        step(2, "Magnitude formula", "|\\mathbf{p}+\\mathbf{q}|=\\sqrt{16+16+4}",
             "Square, sum, square root."),
        step(3, "Sum of squares", "36", "Evaluate."),
        step(4, "Square root", "6", "Result."),
        step(5, "Interpret", "\\text{length of resultant}",
             "Magnitude of the sum vector."),
        step(6, "Note", "|\\mathbf{p}+\\mathbf{q}| \\neq |\\mathbf{p}|+|\\mathbf{q}|",
             "Magnitudes do not add unless vectors are parallel."),
        step(7, "Check components", "4,4,2", "Consistent."),
        step(8, "Verify", "\\sqrt{36}=6", "Confirmed."),
        step(9, "State the answer", "|\\mathbf{p}+\\mathbf{q}|=6",
             "Required magnitude."),
    ],
    "$|\\mathbf{p} + \\mathbf{q}| = 6$",
))

questions.append(make_q(
    "q029", "Intermediate", 4, "numeric", ["vectors", "magnitude", "subtraction"],
    "Given $\\mathbf{a} = 5\\mathbf{i} + 12\\mathbf{k}$ and $\\mathbf{b} = 3\\mathbf{i} + 4\\mathbf{j} + 5\\mathbf{k}$, find $|\\mathbf{a} - \\mathbf{b}|$.",
    [
        step(1, "Subtract", "\\mathbf{a}-\\mathbf{b} = 2\\mathbf{i}-4\\mathbf{j}+7\\mathbf{k}",
             "Component-wise subtraction."),
        step(2, "Magnitude", "|\\mathbf{a}-\\mathbf{b}|=\\sqrt{4+16+49}",
             "3D Pythagoras."),
        step(3, "Sum", "69", "Add squared components."),
        step(4, "Simplify", "\\sqrt{69}", "Exact surd form."),
        step(5, "Estimate", "\\approx 8.31", "Plausibility check."),
        step(6, "Meaning", "\\text{length of } \\mathbf{a}-\\mathbf{b}",
             "Distance between vector tips when placed tail-to-tail."),
        step(7, "Components", "2,-4,7", "Listed."),
        step(8, "Verify squares", "4+16+49=69", "Confirmed."),
        step(9, "State the answer", "|\\mathbf{a}-\\mathbf{b}|=\\sqrt{69}",
             "Required magnitude."),
    ],
    "$|\\mathbf{a} - \\mathbf{b}| = \\sqrt{69}$",
))

questions.append(make_q(
    "q030", "Intermediate", 4, "numeric", ["vectors", "magnitude"],
    "Find $|3\\mathbf{i} - 3\\mathbf{j} + 3\\mathbf{k}|$.",
    mag_steps("\\mathbf{v}", 3, -3, 3, "3\\sqrt{3}") + [
        step(7, "Factor", "3\\sqrt{(-1)^2+1^2+1^2}",
             "Factor out the common magnitude scale."),
        step(8, "Simplify", "3\\sqrt{3}",
             "Exact surd form."),
        step(9, "State the answer", "|\\mathbf{v}|=3\\sqrt{3}",
             "Required magnitude."),
    ],
    "$|\\mathbf{v}| = 3\\sqrt{3}$",
))

questions.append(make_q(
    "q031", "Intermediate", 4, "vector", ["vectors", "position-vector"],
    "Find the position vector of point $P$ with coordinates $(-2, 5, 1)$ relative to the origin $O$.",
    [
        step(1, "Position vector meaning", "\\overrightarrow{OP} \\text{ locates } P \\text{ from } O",
             "Each coordinate becomes a component."),
        step(2, "Read $x=-2$", "-2\\mathbf{i}", "First coordinate."),
        step(3, "Read $y=5$", "5\\mathbf{j}", "Second coordinate."),
        step(4, "Read $z=1$", "\\mathbf{k}", "Third coordinate."),
        step(5, "Combine", "\\overrightarrow{OP} = -2\\mathbf{i} + 5\\mathbf{j} + \\mathbf{k}",
             "Sum the three parts."),
        step(6, "Column form", "\\begin{pmatrix}-2\\\\5\\\\1\\end{pmatrix}",
             "Equivalent notation."),
        step(7, "Check", "P(-2,5,1)", "Matches coordinates."),
        step(8, "Interpret", "\\text{displacement from origin to } P",
             "Defines location in 3D."),
        step(9, "State the answer", "\\overrightarrow{OP} = -2\\mathbf{i} + 5\\mathbf{j} + \\mathbf{k}",
             "Required position vector."),
    ],
    "$\\overrightarrow{OP} = -2\\mathbf{i} + 5\\mathbf{j} + \\mathbf{k}$",
))

questions.append(make_q(
    "q032", "Intermediate", 5, "proof", ["vectors", "collinearity"],
    "Show that the points $P(1, 2, 3)$, $Q(3, 6, 9)$ and $R(2, 4, 6)$ are collinear.",
    [
        step(1, "Position vectors", "\\mathbf{p}=\\mathbf{i}+2\\mathbf{j}+3\\mathbf{k},\\ \\mathbf{q}=3\\mathbf{i}+6\\mathbf{j}+9\\mathbf{k},\\ \\mathbf{r}=2\\mathbf{i}+4\\mathbf{j}+6\\mathbf{k}",
             "Write each point from the origin."),
        step(2, "Vector $\\overrightarrow{PQ}$", "2\\mathbf{i}+4\\mathbf{j}+6\\mathbf{k}",
             "Subtract $\\mathbf{p}$ from $\\mathbf{q}$."),
        step(3, "Vector $\\overrightarrow{PR}$", "\\mathbf{i}+2\\mathbf{j}+3\\mathbf{k}",
             "Subtract $\\mathbf{p}$ from $\\mathbf{r}$."),
        step(4, "Scalar multiple", "\\overrightarrow{PQ} = 2\\overrightarrow{PR}",
             "One displacement is twice the other."),
        step(5, "Common point $P$", "\\text{both vectors start at } P",
             "They lie on the same line through $P$."),
        step(6, "Ratio check", "\\overrightarrow{PR}:\\overrightarrow{PQ} = 1:2",
             "Consistent spacing along the line."),
        step(7, "Coordinate view", "Q \\text{ triples each coordinate of } P",
             "Scaling from origin also visible."),
        step(8, "Conclude", "P,\\ Q,\\ R \\text{ collinear}",
             "Parallel displacements from $P$ prove collinearity."),
        step(9, "State the result", "\\text{collinear}",
             "Proof complete."),
    ],
    "$\\overrightarrow{PQ} = 2\\overrightarrow{PR}$, so $P$, $Q$ and $R$ are collinear.",
))

questions.append(make_q(
    "q033", "Intermediate", 5, "vector", ["vectors", "ratio", "section-formula"],
    "The point $P$ divides the line segment $AB$ internally in the ratio $2:1$, where $\\mathbf{a} = \\mathbf{i} + 2\\mathbf{j} + 3\\mathbf{k}$ and $\\mathbf{b} = 7\\mathbf{i} + 5\\mathbf{j} + 3\\mathbf{k}$. Find $\\mathbf{p}$.",
    section_ratio_steps(2, 1, 1, 2, 3, 7, 5, 3, 5, 4, 3),
    "$\\mathbf{p} = 5\\mathbf{i} + 4\\mathbf{j} + 3\\mathbf{k}$",
))

questions.append(make_q(
    "q034", "Intermediate", 5, "vector", ["vectors", "ratio", "section-formula"],
    "Point $P$ divides $AB$ internally in the ratio $1:2$, where $A$ is $(0, 0, 0)$ and $B$ is $(6, 3, 9)$. Find the coordinates of $P$.",
    section_ratio_steps(1, 2, 0, 0, 0, 6, 3, 9, 2, 1, 3),
    "$P(2, 1, 3)$",
))

questions.append(make_q(
    "q035", "Intermediate", 5, "vector", ["vectors", "parallelogram"],
    "OABC is a parallelogram with $\\mathbf{a} = 2\\mathbf{i} + \\mathbf{j}$ and $\\mathbf{b} = \\mathbf{i} + 3\\mathbf{j} + 2\\mathbf{k}$ as position vectors of $A$ and $B$. Find $\\mathbf{c}$, the position vector of $C$.",
    parallelogram_steps("2\\mathbf{i}+\\mathbf{j}", "\\mathbf{i}+3\\mathbf{j}+2\\mathbf{k}", "3\\mathbf{i}+4\\mathbf{j}+2\\mathbf{k}") + [
        step(9, "Verify $\\overrightarrow{AB}$", "\\mathbf{b}-\\mathbf{a} = -\\mathbf{i}+2\\mathbf{j}+2\\mathbf{k}",
             "Side vector from $A$ to $B$."),
        step(10, "Verify $\\overrightarrow{OC}$", "\\mathbf{c} = \\mathbf{a}+\\mathbf{b}",
             "Diagonal from $O$ to $C$."),
        step(11, "State the answer", "\\mathbf{c} = 3\\mathbf{i}+4\\mathbf{j}+2\\mathbf{k}",
             "Position vector of $C$."),
    ],
    "$\\mathbf{c} = 3\\mathbf{i} + 4\\mathbf{j} + 2\\mathbf{k}$",
))

questions.append(make_q(
    "q036", "Intermediate", 4, "numeric", ["vectors", "cuboid", "diagonal"],
    "A cuboid has edge lengths $3$ cm, $4$ cm and $12$ cm. Find the length of its space diagonal.",
    cuboid_diag_steps(3, 4, 12, 13) + [
        step(8, "Face diagonal first", "\\sqrt{3^2+4^2}=5",
             "Optional: base diagonal is $5$ cm."),
        step(9, "Then height", "\\sqrt{5^2+12^2}=13",
             "Pythagoras with height gives the same answer."),
    ],
    "$d = 13$ cm",
))

questions.append(make_q(
    "q037", "Intermediate", 4, "numeric", ["vectors", "cuboid", "face-diagonal"],
    "A rectangular box has dimensions $5$ m by $5$ m by $10$ m. Find the length of a diagonal on the $5\\times 10$ face.",
    [
        step(1, "Face diagonal formula", "d = \\sqrt{a^2+b^2}",
             "A face diagonal lies in a plane — use 2D Pythagoras."),
        step(2, "Substitute", "d = \\sqrt{5^2+10^2}",
             "Use the two edge lengths on that face."),
        step(3, "Evaluate", "d = \\sqrt{25+100} = \\sqrt{125}",
             "Add squares."),
        step(4, "Simplify surd", "d = 5\\sqrt{5}",
             "Factor out perfect squares."),
        step(5, "Estimate", "d \\approx 11.2\\text{ m}",
             "Plausibility check."),
        step(6, "Geometric role", "\\text{building block for space diagonal}",
             "Face diagonals help solve 3D problems."),
        step(7, "Units", "5\\sqrt{5}\\text{ m}",
             "Include units."),
        step(8, "Check", "(5\\sqrt{5})^2 = 125",
             "Square to verify."),
        step(9, "State the answer", "d = 5\\sqrt{5}\\text{ m}",
             "Face diagonal length."),
    ],
    "$d = 5\\sqrt{5}$ m",
))

questions.append(make_q(
    "q038", "Intermediate", 5, "numeric", ["vectors", "parallel"],
    "Given $\\mathbf{a} = 2\\mathbf{i} + 4\\mathbf{j} + 6\\mathbf{k}$ and $\\mathbf{b} = \\mathbf{i} + 2\\mathbf{j} + t\\mathbf{k}$ are parallel, find $t$.",
    [
        step(1, "Parallel vectors", "\\mathbf{a} = k\\mathbf{b}",
             "One is a scalar multiple of the other."),
        step(2, "$\\mathbf{i}$-ratio", "2/1 = 2",
             "Scale factor candidate $k=2$."),
        step(3, "$\\mathbf{j}$-ratio", "4/2 = 2",
             "Consistent with $k=2$."),
        step(4, "$\\mathbf{k}$-equation", "6 = 2t",
             "Apply $k=2$ to $\\mathbf{k}$-components."),
        step(5, "Solve", "t = 3",
             "Divide by $2$."),
        step(6, "Verify", "\\mathbf{a} = 2\\mathbf{b}",
             "Check all components."),
        step(7, "Direction", "\\text{same line through origin}",
             "Parallel confirmed."),
        step(8, "Alternative", "t = 6/2 = 3",
             "Direct ratio of $\\mathbf{k}$-parts."),
        step(9, "State the answer", "t = 3",
             "Unknown component."),
    ],
    "$t = 3$",
))

questions.append(make_q(
    "q039", "Intermediate", 4, "vector", ["vectors", "midpoint"],
    "Find the midpoint of $A(-3, 4, 1)$ and $B(5, -2, 7)$.",
    midpoint_steps(-3, 4, 1, 5, -2, 7, 1, 1, 4),
    "$M(1, 1, 4)$",
))

questions.append(make_q(
    "q040", "Intermediate", 5, "vector", ["vectors", "unit-vector"],
    "Find the unit vector parallel to $\\mathbf{w} = -\\mathbf{i} + 2\\mathbf{j} + 2\\mathbf{k}$.",
    [
        step(1, "Magnitude", "|\\mathbf{w}| = \\sqrt{1+4+4} = 3",
             "3D Pythagoras."),
        step(2, "Unit vector", "\\hat{\\mathbf{w}} = \\dfrac{-\\mathbf{i}+2\\mathbf{j}+2\\mathbf{k}}{3}",
             "Divide each component by $3$."),
        step(3, "Write components", "-\\dfrac{1}{3}\\mathbf{i} + \\dfrac{2}{3}\\mathbf{j} + \\dfrac{2}{3}\\mathbf{k}",
             "Simplified form."),
        step(4, "Length check", "\\dfrac{1}{9}+\\dfrac{4}{9}+\\dfrac{4}{9}=1",
             "Confirms unit length."),
        step(5, "Sign of direction", "\\text{negative } \\mathbf{i}\\text{-part}",
             "The negative $\\mathbf{i}$-component reflects direction."),
        step(6, "Parallel", "\\text{same line as } \\mathbf{w}",
             "Only scaled, not rotated."),
        step(7, "State the answer", "\\hat{\\mathbf{w}} = -\\dfrac{1}{3}\\mathbf{i} + \\dfrac{2}{3}\\mathbf{j} + \\dfrac{2}{3}\\mathbf{k}",
             "Required unit vector."),
    ],
    "$\\hat{\\mathbf{w}} = -\\dfrac{1}{3}\\mathbf{i} + \\dfrac{2}{3}\\mathbf{j} + \\dfrac{2}{3}\\mathbf{k}$",
))

questions.append(make_q(
    "q041", "Intermediate", 5, "vector", ["vectors", "subtraction", "column-vector"],
    "Given $\\mathbf{u} = \\begin{pmatrix} 2 \\\\ -1 \\\\ 3 \\end{pmatrix}$ and $\\mathbf{v} = \\begin{pmatrix} 1 \\\\ 4 \\\\ -2 \\end{pmatrix}$, find $\\mathbf{u} - \\mathbf{v}$.",
    [
        step(1, "Subtract columns", "\\mathbf{u}-\\mathbf{v} = \\begin{pmatrix}2-1\\\\-1-4\\\\3-(-2)\\end{pmatrix}",
             "Subtract entry by entry."),
        step(2, "Top entry", "1", "First component."),
        step(3, "Middle entry", "-5", "Second component."),
        step(4, "Bottom entry", "5", "Third component."),
        step(5, "Write result", "\\mathbf{u}-\\mathbf{v} = \\begin{pmatrix}1\\\\-5\\\\5\\end{pmatrix}",
             "Column form of the difference."),
        step(6, "Check", "\\mathbf{u}-\\mathbf{v}+\\mathbf{v}=\\mathbf{u}",
             "Adding back $\\mathbf{v}$ should recover $\\mathbf{u}$."),
        step(7, "Verify top", "1+1=2", "Matches $\\mathbf{u}$ top entry."),
        step(8, "Verify others", "\\text{consistent}",
             "All entries check."),
        step(9, "State the answer", "\\mathbf{u}-\\mathbf{v} = \\begin{pmatrix}1\\\\-5\\\\5\\end{pmatrix}",
             "Required difference."),
    ],
    "$\\mathbf{u} - \\mathbf{v} = \\begin{pmatrix} 1 \\\\ -5 \\\\ 5 \\end{pmatrix}$",
))

questions.append(make_q(
    "q042", "Intermediate", 5, "numeric", ["vectors", "parallel", "unknown-component"],
    "Points $A(1, t, 2)$ and $B(4, 10, 8)$ are such that $\\overrightarrow{AB}$ is parallel to $3\\mathbf{i} + 6\\mathbf{j} + 6\\mathbf{k}$. Find $t$.",
    [
        step(1, "Form $\\overrightarrow{AB}$", "\\overrightarrow{AB} = 3\\mathbf{i} + (10-t)\\mathbf{j} + 6\\mathbf{k}",
             "Subtract coordinates of $A$ from $B$."),
        step(2, "Parallel condition", "\\overrightarrow{AB} = k(3\\mathbf{i}+6\\mathbf{j}+6\\mathbf{k})",
             "Parallel vectors are scalar multiples."),
        step(3, "From $\\mathbf{i}$-part", "3 = 3k \\Rightarrow k = 1",
             "Find the scale factor."),
        step(4, "$\\mathbf{j}$-part", "10 - t = 6",
             "Use $k=1$ on the $\\mathbf{j}$-component."),
        step(5, "Solve", "t = 4",
             "Rearrange for $t$."),
        step(6, "Verify $\\mathbf{k}$-part", "6 = 6",
             "Consistent with $k=1$."),
        step(7, "Check vector", "\\overrightarrow{AB} = 3\\mathbf{i}+6\\mathbf{j}+6\\mathbf{k}",
             "Matches the given direction."),
        step(8, "Interpret", "A(1,4,2)",
             "Substituting $t=4$ gives a valid point."),
        step(9, "State the answer", "t = 4",
             "Required value."),
    ],
    "$t = 4$",
))

questions.append(make_q(
    "q043", "Intermediate", 5, "vector", ["vectors", "ratio"],
    "Point $P$ divides $AB$ in the ratio $3:1$ where $\\mathbf{a} = 3\\mathbf{i} + \\mathbf{k}$ and $\\mathbf{b} = 7\\mathbf{i} + 4\\mathbf{j} + 5\\mathbf{k}$. Find $\\mathbf{p}$.",
    section_ratio_steps(3, 1, 3, 0, 1, 7, 4, 5, 6, 3, 4),
    "$\\mathbf{p} = 6\\mathbf{i} + 3\\mathbf{j} + 4\\mathbf{k}$",
))

questions.append(make_q(
    "q044", "Intermediate", 5, "numeric", ["vectors", "distance", "displacement"],
    "Points $A$ and $B$ have position vectors $2\\mathbf{i} - \\mathbf{j} + 2\\mathbf{k}$ and $6\\mathbf{i} + 3\\mathbf{j} - 2\\mathbf{k}$. Find the distance $AB$.",
    [
        step(1, "Displacement", "\\overrightarrow{AB}=4\\mathbf{i}+4\\mathbf{j}-4\\mathbf{k}",
             "Subtract position vectors."),
        step(2, "Magnitude", "|\\overrightarrow{AB}|=\\sqrt{16+16+16}",
             "3D Pythagoras."),
        step(3, "Simplify", "\\sqrt{48}=4\\sqrt{3}",
             "Factor perfect squares."),
        step(4, "Interpret", "\\text{straight-line distance}",
             "Length of segment $AB$."),
        step(5, "Check components", "4,4,-4", "Listed."),
        step(6, "Verify", "16\\times 3=48", "Arithmetic."),
        step(7, "Exact form", "4\\sqrt{3}",
             "Leave as a surd."),
        step(8, "Estimate", "\\approx 6.93", "Plausible length."),
        step(9, "State the answer", "AB=4\\sqrt{3}",
             "Required distance."),
    ],
    "$AB = 4\\sqrt{3}$",
))

questions.append(make_q(
    "q045", "Intermediate", 5, "vector", ["vectors", "parallelogram"],
    "In parallelogram $OABC$, $\\mathbf{a} = \\mathbf{i} + 2\\mathbf{k}$ and $\\mathbf{c} = 3\\mathbf{i} + 4\\mathbf{j} + 2\\mathbf{k}$. Find $\\mathbf{b}$.",
    [
        step(1, "Parallelogram property", "\\overrightarrow{OB} = \\overrightarrow{OA} + \\overrightarrow{AB}",
             "Travel from $O$ to $A$, then along $AB$, to reach $B$."),
        step(2, "Also", "\\overrightarrow{AB} = \\overrightarrow{OC}",
             "In parallelogram $OABC$, opposite sides are equal."),
        step(3, "Find $\\overrightarrow{OC}$", "\\overrightarrow{OC} = \\mathbf{c} = 3\\mathbf{i}+4\\mathbf{j}+2\\mathbf{k}",
             "Given position vector of $C$."),
        step(4, "So $\\mathbf{b}$", "\\mathbf{b} = \\mathbf{a} + (\\mathbf{c} - \\mathbf{a})",
             "From $O$ via $A$ to $B$ where $AB$ is parallel to $OC$."),
        step(5, "Compute $\\mathbf{c}-\\mathbf{a}$", "2\\mathbf{i}+4\\mathbf{j}",
             "Side vector."),
        step(6, "Add to $\\mathbf{a}$", "\\mathbf{b} = 3\\mathbf{i}+4\\mathbf{j}+2\\mathbf{k}",
             "Position of $B$."),
        step(7, "Check", "\\overrightarrow{AB} = \\mathbf{c}",
             "Opposite sides match."),
        step(8, "Verify layout", "OABC \\text{ parallelogram}",
             "Consistent geometry."),
        step(9, "State the answer", "\\mathbf{b} = 3\\mathbf{i}+4\\mathbf{j}+2\\mathbf{k}",
             "Position vector of $B$."),
    ],
    "$\\mathbf{b} = 3\\mathbf{i} + 4\\mathbf{j} + 2\\mathbf{k}$",
))

questions.append(make_q(
    "q046", "Intermediate", 5, "numeric", ["vectors", "cuboid", "diagonal"],
    "A box has length $6$ m, width $8$ m and height $24$ m. Find the space diagonal length.",
    cuboid_diag_steps(6, 8, 24, 26) + [
        step(8, "Recognise triple", "6,8,24 \\rightarrow 26",
             "Scaled $3$-$4$-$12$ triangle."),
        step(9, "State the answer", "d = 26\\text{ m}",
             "Space diagonal."),
    ],
    "$d = 26$ m",
))

questions.append(make_q(
    "q047", "Intermediate", 5, "proof", ["vectors", "parallel", "collinearity"],
    "Show that $\\mathbf{a} = 2\\mathbf{i} - 4\\mathbf{j} + 6\\mathbf{k}$ and $\\mathbf{b} = -\\mathbf{i} + 2\\mathbf{j} - 3\\mathbf{k}$ are parallel.",
    [
        step(1, "Parallel test", "\\mathbf{a} = k\\mathbf{b} \\text{ for some } k",
             "Check if one vector is a scalar multiple of the other."),
        step(2, "$\\mathbf{i}$-ratio", "2/(-1) = -2",
             "Candidate $k = -2$."),
        step(3, "$\\mathbf{j}$-ratio", "-4/2 = -2",
             "Same ratio."),
        step(4, "$\\mathbf{k}$-ratio", "6/(-3) = -2",
             "All three ratios match."),
        step(5, "Write multiple", "\\mathbf{a} = -2\\mathbf{b}",
             "Exact scalar relationship."),
        step(6, "Direction", "\\text{opposite directions}",
             "Negative $k$ means opposite sense along the same line."),
        step(7, "Same line", "\\text{through origin}",
             "Both vectors lie on one line."),
        step(8, "Conclude", "\\mathbf{a} \\parallel \\mathbf{b}",
             "Parallel confirmed."),
        step(9, "State the result", "\\mathbf{a} = -2\\mathbf{b}",
             "Proof complete."),
    ],
    "$\\mathbf{a} = -2\\mathbf{b}$, so the vectors are parallel.",
))

questions.append(make_q(
    "q048", "Intermediate", 5, "vector", ["vectors", "midpoint", "displacement"],
    "The midpoint of $PQ$ is $M(2, 0, -1)$. If $P$ is $(0, 4, 3)$, find the coordinates of $Q$.",
    [
        step(1, "Midpoint formula", "M = \\dfrac{1}{2}(P+Q)",
             "Average of corresponding coordinates."),
        step(2, "Double the midpoint", "(4, 0, -2) = P + Q",
             "Multiply each coordinate of $M$ by $2$."),
        step(3, "Subtract $P$", "Q = (4,0,-2) - (0,4,3)",
             "Isolate $Q$."),
        step(4, "$x$-coordinate", "4 - 0 = 4", "First component."),
        step(5, "$y$-coordinate", "0 - 4 = -4", "Second component."),
        step(6, "$z$-coordinate", "-2 - 3 = -5", "Third component."),
        step(7, "Write $Q$", "Q(4, -4, -5)",
             "Combine coordinates."),
        step(8, "Verify midpoint", "\\dfrac{(0+4)}{2}=2,\\ \\dfrac{(4-4)}{2}=0,\\ \\dfrac{(3-5)}{2}=-1",
             "Averaging $P$ and $Q$ gives $M$."),
        step(9, "State the answer", "Q(4, -4, -5)",
             "Required point."),
    ],
    "$Q(4, -4, -5)$",
))

questions.append(make_q(
    "q049", "Intermediate", 5, "vector", ["vectors", "addition", "subtraction"],
    "Simplify $(2\\mathbf{i} + \\mathbf{j} - 3\\mathbf{k}) + (\\mathbf{i} - 4\\mathbf{j} + 2\\mathbf{k}) - (3\\mathbf{i} + 2\\mathbf{j} - \\mathbf{k})$.",
    [
        step(1, "Group $\\mathbf{i}$ terms", "2+1-3=0", "Horizontal components."),
        step(2, "Group $\\mathbf{j}$ terms", "1-4-2=-5", "Depth components."),
        step(3, "Group $\\mathbf{k}$ terms", "-3+2-(-1)=0", "Vertical components."),
        step(4, "Combine", "\\mathbf{0} - 5\\mathbf{j}",
             "Only $\\mathbf{j}$ survives."),
        step(5, "Simplify", "-5\\mathbf{j}",
             "Final vector."),
        step(6, "Column form", "\\begin{pmatrix}0\\\\-5\\\\0\\end{pmatrix}",
             "Equivalent notation."),
        step(7, "Magnitude", "5",
             "Length of the result."),
        step(8, "Direction", "\\text{along negative } \\mathbf{j}",
             "Purely in the $\\mathbf{j}$ direction."),
        step(9, "State the answer", "-5\\mathbf{j}",
             "Simplified expression."),
    ],
    "$-5\\mathbf{j}$",
))

questions.append(make_q(
    "q050", "Intermediate", 5, "numeric", ["vectors", "magnitude"],
    "Find the magnitude of $\\mathbf{r} = \\dfrac{1}{2}\\mathbf{i} - \\dfrac{3}{2}\\mathbf{j} + \\mathbf{k}$.",
    [
        step(1, "Formula", "|\\mathbf{r}| = \\sqrt{x^2+y^2+z^2}",
             "3D Pythagoras."),
        step(2, "Square components", "\\left(\\dfrac{1}{2}\\right)^2 = \\dfrac{1}{4},\\ \\left(\\dfrac{3}{2}\\right)^2 = \\dfrac{9}{4},\\ 1^2 = 1",
             "Square each part."),
        step(3, "Add", "\\dfrac{1}{4}+\\dfrac{9}{4}+1 = \\dfrac{14}{4} = \\dfrac{7}{2}",
             "Sum of squares."),
        step(4, "Square root", "|\\mathbf{r}| = \\sqrt{\\dfrac{7}{2}}",
             "Exact form."),
        step(5, "Rationalise", "\\dfrac{\\sqrt{14}}{2}",
             "Standard surd form."),
        step(6, "Estimate", "\\approx 1.87", "Plausible."),
        step(7, "Check", "\\left(\\dfrac{\\sqrt{14}}{2}\\right)^2 = \\dfrac{7}{2}",
             "Verify."),
        step(8, "Interpret", "\\text{length less than } 2",
             "Fractional components give moderate length."),
        step(9, "State the answer", "|\\mathbf{r}| = \\dfrac{\\sqrt{14}}{2}",
             "Required magnitude."),
    ],
    "$|\\mathbf{r}| = \\dfrac{\\sqrt{14}}{2}$",
))

questions.append(make_q(
    "q051", "Intermediate", 5, "vector", ["vectors", "position-vector", "triangle"],
    "Triangle $OAB$ has $O$ at the origin, $\\mathbf{a} = 3\\mathbf{i} + 2\\mathbf{j} + \\mathbf{k}$ and $\\mathbf{b} = \\mathbf{i} + 4\\mathbf{j} + 3\\mathbf{k}$. Find $\\overrightarrow{AB}$.",
    displacement_steps("A", "B", 3, 2, 1, 1, 4, 3, -2, 2, 2),
    "$\\overrightarrow{AB} = -2\\mathbf{i} + 2\\mathbf{j} + 2\\mathbf{k}$",
))

questions.append(make_q(
    "q052", "Intermediate", 5, "vector", ["vectors", "ratio", "section-formula"],
    "Point $P$ divides $AB$ internally in the ratio $2:3$ where $A(-2, 1, 4)$ and $B(8, 11, -1)$. Find the coordinates of $P$.",
    section_ratio_steps(2, 3, -2, 1, 4, 8, 11, -1, 2, 5, 2),
    "$P(2, 5, 2)$",
))

# ══════════════════════════════════════════════════════════════════════════════
# HARD q053–q070
# ══════════════════════════════════════════════════════════════════════════════

questions.append(make_q(
    "q053", "Hard", 6, "proof", ["vectors", "collinearity", "proof"],
    "The points $A(2, -1, 3)$, $B(5, 2, 9)$ and $C(3, 0, 6)$ have position vectors $\\mathbf{a}$, $\\mathbf{b}$ and $\\mathbf{c}$. Prove that $A$, $B$ and $C$ are collinear.",
    collinear_proof_steps(2, -1, 3, 5, 2, 9, 3, 0, 6, 3) + [
        step(10, "Interpret the ratio", "\\overrightarrow{AB} = 3\\overrightarrow{AC}",
             "$B$ is three times as far from $A$ as $C$ is, along the same direction."),
        step(11, "Position of $C$ on segment", "C \\text{ lies on line } AB",
             "Since the vectors are parallel and share point $A$, all three points are on one line."),
        step(12, "Check $\\overrightarrow{CB}$", "\\overrightarrow{CB} = 2\\mathbf{i}+2\\mathbf{j}+3\\mathbf{k} = 2\\overrightarrow{AC}",
             "Consistent spacing along the line."),
        step(13, "Summary", "A,\\ B,\\ C \\text{ collinear}",
             "All pairwise displacements are scalar multiples."),
        step(14, "State the result", "\\overrightarrow{AB} = 3\\overrightarrow{AC}",
             "Proof complete."),
    ],
    "$\\overrightarrow{AB} = 3\\overrightarrow{AC}$, so $A$, $B$ and $C$ are collinear.",
))

questions.append(make_q(
    "q054", "Hard", 6, "vector", ["vectors", "parallelogram"],
    "The points $O$, $A$, $B$ and $D$ form parallelogram $OABD$ with $\\mathbf{a} = 4\\mathbf{i} - \\mathbf{j} + 2\\mathbf{k}$ and $\\mathbf{b} = 2\\mathbf{i} + 3\\mathbf{j} - \\mathbf{k}$. Find $\\mathbf{d}$.",
    parallelogram_steps("4\\mathbf{i}-\\mathbf{j}+2\\mathbf{k}", "2\\mathbf{i}+3\\mathbf{j}-\\mathbf{k}", "6\\mathbf{i}+2\\mathbf{j}+\\mathbf{k}") + [
        step(9, "Check $\\overrightarrow{AD}$", "\\mathbf{d}-\\mathbf{a} = 2\\mathbf{i}+3\\mathbf{j}-\\mathbf{k} = \\mathbf{b}",
             "Side $AD$ equals $\\overrightarrow{OB}$."),
        step(10, "Check $\\overrightarrow{AB}$", "\\mathbf{b}-\\mathbf{a} = -2\\mathbf{i}+4\\mathbf{j}-3\\mathbf{k}",
             "Other side of the parallelogram."),
        step(11, "Opposite sides", "\\overrightarrow{AB} = \\overrightarrow{OD}",
             "Parallelogram property verified."),
        step(12, "State the answer", "\\mathbf{d} = 6\\mathbf{i}+2\\mathbf{j}+\\mathbf{k}",
             "Position vector of $D$."),
    ],
    "$\\mathbf{d} = 6\\mathbf{i} + 2\\mathbf{j} + \\mathbf{k}$",
))

questions.append(make_q(
    "q055", "Hard", 6, "numeric", ["vectors", "cuboid", "diagonal"],
    "A cuboid has vertices at $O(0,0,0)$ and $P(4, 3, 12)$ at the opposite corner. Find the length of the space diagonal $OP$.",
    cuboid_diag_steps(4, 3, 12, 13) + [
        step(8, "Vector form", "\\overrightarrow{OP} = 4\\mathbf{i}+3\\mathbf{j}+12\\mathbf{k}",
             "The diagonal is the position vector of the opposite vertex."),
        step(9, "Magnitude", "|\\overrightarrow{OP}| = 13",
             "Same as the space diagonal formula."),
        step(10, "Interpret", "\\text{longest diagonal of the box}",
             "Passes through the interior from corner to corner."),
        step(11, "Compare face diagonal", "\\sqrt{4^2+3^2}=5",
             "Shorter than the space diagonal."),
        step(12, "State the answer", "OP = 13",
             "Required length."),
    ],
    "$OP = 13$",
))

questions.append(make_q(
    "q056", "Hard", 7, "vector", ["vectors", "ratio", "section-formula"],
    "Point $P$ divides $AB$ internally in the ratio $3:2$, where $\\mathbf{a} = -5\\mathbf{i} - 10\\mathbf{j} + 5\\mathbf{k}$ and $\\mathbf{b} = 5\\mathbf{i} + 10\\mathbf{j} - 5\\mathbf{k}$. Find $\\mathbf{p}$ and $|\\overrightarrow{AP}|$.",
    section_ratio_steps(3, 2, -5, -10, 5, 5, 10, -5, 1, 2, -1) + [
        step(11, "Find $\\overrightarrow{AP}$", "\\mathbf{p}-\\mathbf{a} = 6\\mathbf{i}+12\\mathbf{j}-6\\mathbf{k}",
             "Displacement from $A$ to $P$."),
        step(12, "Magnitude", "|\\overrightarrow{AP}|=\\sqrt{36+144+36}=\\sqrt{216}=6\\sqrt{6}",
             "Length of the segment from $A$ to $P$."),
        step(13, "Ratio check", "AP:PB = 3:2",
             "Confirms correct division."),
        step(14, "State both answers", "\\mathbf{p} = \\mathbf{i}+2\\mathbf{j}-\\mathbf{k},\\ |\\overrightarrow{AP}|=6\\sqrt{6}",
             "Position vector and distance from $A$."),
    ],
    "$\\mathbf{p} = \\mathbf{i} + 2\\mathbf{j} - \\mathbf{k}$ and $|\\overrightarrow{AP}| = 6\\sqrt{6}$",
))

questions.append(make_q(
    "q057", "Hard", 7, "numeric", ["vectors", "parallel"],
    "The vectors $\\mathbf{a} = 4\\mathbf{i} + 8\\mathbf{j} + 12\\mathbf{k}$ and $\\mathbf{b} = 2\\mathbf{i} + t\\mathbf{j} + 6\\mathbf{k}$ are parallel. Find $t$.",
    [
        step(1, "Parallel condition", "\\mathbf{a} = k\\mathbf{b}",
             "Scalar multiple relationship."),
        step(2, "$\\mathbf{i}$-ratio", "4/2 = 2",
             "Scale factor $k=2$."),
        step(3, "$\\mathbf{j}$-equation", "8 = 2t",
             "Apply $k=2$."),
        step(4, "Solve", "t = 4",
             "Divide by $2$."),
        step(5, "Verify $\\mathbf{k}$", "12 = 2(6)",
             "Consistent."),
        step(6, "Write $\\mathbf{b}$", "\\mathbf{b} = 2\\mathbf{i}+4\\mathbf{j}+6\\mathbf{k}",
             "Complete vector."),
        step(7, "Confirm", "\\mathbf{a} = 2\\mathbf{b}",
             "Exact multiple."),
        step(8, "Direction", "\\text{same line}",
             "Parallel vectors."),
        step(9, "Alternative ratios", "8/4 = 12/6 = 2",
             "All component ratios equal."),
        step(10, "Interpret", "t = 4",
             "Unknown $\\mathbf{j}$-component."),
        step(11, "Check non-zero", "\\mathbf{b} \\neq \\mathbf{0}",
             "Valid direction vector."),
        step(12, "State the answer", "t = 4",
             "Required value."),
    ],
    "$t = 4$",
))

questions.append(make_q(
    "q058", "Hard", 7, "proof", ["vectors", "collinearity"],
    "Relative to an origin $O$, the position vectors of points $P$, $Q$ and $R$ are $\\mathbf{p} = 3\\mathbf{i} - 6\\mathbf{j} + 3\\mathbf{k}$, $\\mathbf{q} = 5\\mathbf{i} - 10\\mathbf{j} + 5\\mathbf{k}$ and $\\mathbf{r} = -\\mathbf{i} + 2\\mathbf{j} - \\mathbf{k}$. Prove that $P$, $Q$ and $R$ are collinear.",
    [
        step(1, "Form $\\overrightarrow{PQ}$", "\\mathbf{q}-\\mathbf{p} = 2\\mathbf{i}-4\\mathbf{j}+2\\mathbf{k}",
             "Displacement from $P$ to $Q$."),
        step(2, "Form $\\overrightarrow{PR}$", "\\mathbf{r}-\\mathbf{p} = -4\\mathbf{i}+8\\mathbf{j}-4\\mathbf{k}",
             "Displacement from $P$ to $R$."),
        step(3, "Compare", "\\overrightarrow{PR} = -2\\overrightarrow{PQ}",
             "Scalar multiple with $k=-2$."),
        step(4, "Check $\\mathbf{i}$", "-4 = -2(2)",
             "Consistent ratio."),
        step(5, "Check $\\mathbf{j}$", "8 = -2(-4)",
             "Consistent ratio."),
        step(6, "Check $\\mathbf{k}$", "-4 = -2(2)",
             "Consistent ratio."),
        step(7, "Common point $P$", "\\text{both vectors start at } P",
             "Same line through $P$."),
        step(8, "Direction note", "\\text{opposite directions along same line}",
             "Negative $k$ means $R$ and $Q$ lie on opposite sides of $P$."),
        step(9, "Also from origin", "\\mathbf{p} = 3\\mathbf{r},\\ \\mathbf{q} = 5\\mathbf{r}",
             "All three position vectors are multiples of $\\mathbf{r}$."),
        step(10, "Line through origin", "O,\\ P,\\ Q,\\ R \\text{ on one line}",
             "Extra observation: the line also passes through $O$."),
        step(11, "Conclude", "P,\\ Q,\\ R \\text{ collinear}",
             "Parallel displacements from $P$."),
        step(12, "State the result", "\\overrightarrow{PR} = -2\\overrightarrow{PQ}",
             "Proof complete."),
    ],
    "$\\overrightarrow{PR} = -2\\overrightarrow{PQ}$, so $P$, $Q$ and $R$ are collinear.",
))

questions.append(make_q(
    "q059", "Hard", 7, "vector", ["vectors", "parallelogram", "midpoint"],
    "Parallelogram $OABC$ has $\\mathbf{a} = 3\\mathbf{i} + 2\\mathbf{j} - \\mathbf{k}$ and $\\mathbf{b} = \\mathbf{i} + 4\\mathbf{j} + 2\\mathbf{k}$. Find $\\mathbf{c}$ and the midpoint of diagonal $AC$.",
    parallelogram_steps("3\\mathbf{i}+2\\mathbf{j}-\\mathbf{k}", "\\mathbf{i}+4\\mathbf{j}+2\\mathbf{k}", "4\\mathbf{i}+6\\mathbf{j}+\\mathbf{k}") + [
        step(9, "Diagonal endpoints", "A \\text{ has } \\mathbf{a},\\ C \\text{ has } \\mathbf{c}",
             "Diagonal $AC$ joins opposite corners."),
        step(10, "Midpoint of $AC$", "\\dfrac{1}{2}(\\mathbf{a}+\\mathbf{c}) = 3.5\\mathbf{i}+4\\mathbf{j}",
             "Average the position vectors."),
        step(11, "Simplify", "\\dfrac{7}{2}\\mathbf{i}+4\\mathbf{j}",
             "Exact form."),
        step(12, "Note $z$-component", "0\\mathbf{k}",
             "Midpoint has zero $\\mathbf{k}$-part here."),
        step(13, "State answers", "\\mathbf{c} = 4\\mathbf{i}+6\\mathbf{j}+\\mathbf{k},\\ M = \\dfrac{7}{2}\\mathbf{i}+4\\mathbf{j}",
             "Fourth vertex and midpoint."),
    ],
    "$\\mathbf{c} = 4\\mathbf{i} + 6\\mathbf{j} + \\mathbf{k}$ and midpoint of $AC$ is $\\dfrac{7}{2}\\mathbf{i} + 4\\mathbf{j}$",
))

questions.append(make_q(
    "q060", "Hard", 6, "numeric", ["vectors", "cuboid"],
    "A rectangular room is $8$ m long, $6$ m wide and $3$ m high. Find the length of the longest straight-line distance between two opposite corners (the space diagonal).",
    cuboid_diag_steps(8, 6, 3, 11) + [
        step(8, "Units", "11\\text{ m}",
             "Include metres."),
        step(9, "Compare with floor diagonal", "\\sqrt{8^2+6^2}=10\\text{ m}",
             "Floor diagonal is shorter."),
        step(10, "3D step", "\\sqrt{10^2+3^2}=11",
             "Two-step Pythagoras."),
        step(11, "Interpret", "\\text{shortest path through air}",
             "Not along walls — straight through the room."),
        step(12, "State the answer", "11\\text{ m}",
             "Space diagonal length."),
    ],
    "$11$ m",
))

questions.append(make_q(
    "q061", "Hard", 8, "vector", ["vectors", "combined-operations"],
    "Given $\\mathbf{a} = \\mathbf{i} + 2\\mathbf{j} - \\mathbf{k}$, $\\mathbf{b} = 2\\mathbf{i} - \\mathbf{j} + 3\\mathbf{k}$ and $\\mathbf{c} = -\\mathbf{i} + 4\\mathbf{j} + 2\\mathbf{k}$, find $2\\mathbf{a} - \\mathbf{b} + 3\\mathbf{c}$ and its magnitude.",
    [
        step(1, "Compute $2\\mathbf{a}$", "2\\mathbf{a} = 2\\mathbf{i} + 4\\mathbf{j} - 2\\mathbf{k}",
             "Scale every component of $\\mathbf{a}$ by $2$."),
        step(2, "Compute $3\\mathbf{c}$", "3\\mathbf{c} = -3\\mathbf{i} + 12\\mathbf{j} + 6\\mathbf{k}",
             "Scale every component of $\\mathbf{c}$ by $3$."),
        step(3, "Combine $\\mathbf{i}$-parts", "2 - 2 + (-3) = -3",
             "Add contributions from each term."),
        step(4, "Combine $\\mathbf{j}$-parts", "4 - (-1) + 12 = 17",
             "Watch the sign when subtracting $\\mathbf{b}$."),
        step(5, "Combine $\\mathbf{k}$-parts", "-2 - 3 + 6 = 1",
             "Third component result."),
        step(6, "Resultant vector", "2\\mathbf{a}-\\mathbf{b}+3\\mathbf{c} = -3\\mathbf{i} + 17\\mathbf{j} + \\mathbf{k}",
             "Collect the three components."),
        step(7, "Magnitude", "|\\mathbf{r}| = \\sqrt{9+289+1} = \\sqrt{299}",
             "3D Pythagoras on the resultant."),
        step(8, "Estimate", "\\sqrt{299} \\approx 17.3",
             "Plausibility check."),
        step(9, "Verify one component", "2(1)-2+3(-1) = -3",
             "Spot-check the $\\mathbf{i}$-part."),
        step(10, "State the answer", "-3\\mathbf{i}+17\\mathbf{j}+\\mathbf{k},\\ |\\mathbf{r}|=\\sqrt{299}",
             "Vector and magnitude."),
    ],
    "$2\\mathbf{a} - \\mathbf{b} + 3\\mathbf{c} = -3\\mathbf{i} + 17\\mathbf{j} + \\mathbf{k}$; $|\\mathbf{r}| = \\sqrt{299}$",
))

questions.append(make_q(
    "q062", "Hard", 8, "numeric", ["vectors", "unit-vector", "distance"],
    "Find the unit vector in the direction of $\\overrightarrow{PQ}$ where $P(1, -2, 3)$ and $Q(4, 2, -3)$. Hence find the distance $PQ$.",
    [
        step(1, "Displacement", "\\overrightarrow{PQ} = 3\\mathbf{i} + 4\\mathbf{j} - 6\\mathbf{k}",
             "Subtract coordinates of $P$ from $Q$."),
        step(2, "Magnitude", "|\\overrightarrow{PQ}| = \\sqrt{9+16+36} = \\sqrt{61}",
             "Distance $PQ$."),
        step(3, "Unit vector formula", "\\hat{\\mathbf{d}} = \\dfrac{\\overrightarrow{PQ}}{|\\overrightarrow{PQ}|}",
             "Divide by magnitude."),
        step(4, "Write unit vector", "\\hat{\\mathbf{d}} = \\dfrac{3}{\\sqrt{61}}\\mathbf{i} + \\dfrac{4}{\\sqrt{61}}\\mathbf{j} - \\dfrac{6}{\\sqrt{61}}\\mathbf{k}",
             "Each component divided by $\\sqrt{61}$."),
        step(5, "Verify length", "\\dfrac{9+16+36}{61} = 1",
             "Squared components sum to $1$."),
        step(6, "Direction", "\\text{from } P \\text{ towards } Q",
             "The unit vector points along the segment."),
        step(7, "Distance stated", "PQ = \\sqrt{61}",
             "Exact distance."),
        step(8, "Estimate", "PQ \\approx 7.81",
             "Plausibility."),
        step(9, "State the answer", "\\hat{\\mathbf{d}} = \\dfrac{3\\mathbf{i}+4\\mathbf{j}-6\\mathbf{k}}{\\sqrt{61}},\\ PQ=\\sqrt{61}",
             "Unit vector and distance."),
    ],
    "$\\hat{\\mathbf{d}} = \\dfrac{3\\mathbf{i} + 4\\mathbf{j} - 6\\mathbf{k}}{\\sqrt{61}}$; $PQ = \\sqrt{61}$",
))

questions.append(make_q(
    "q063", "Hard", 9, "vector", ["vectors", "collinearity", "ratio", "exam-style"],
    "Points $A$, $B$ and $C$ have position vectors $\\mathbf{a} = \\mathbf{i} + 3\\mathbf{j}$, $\\mathbf{b} = 4\\mathbf{i} + 6\\mathbf{j} + 3\\mathbf{k}$ and $\\mathbf{c} = 7\\mathbf{i} + 9\\mathbf{j} + 6\\mathbf{k}$. (a) Show that $A$, $B$ and $C$ are collinear. (b) Find the ratio $AB:BC$. (c) Find the position vector of the point dividing $AC$ internally in the ratio $2:1$.",
    [
        step(1, "Part (a): $\\overrightarrow{AB}$", "\\overrightarrow{AB} = 3\\mathbf{i} + 3\\mathbf{j} + 3\\mathbf{k}",
             "Displacement from $A$ to $B$."),
        step(2, "$\\overrightarrow{AC}$", "\\overrightarrow{AC} = 6\\mathbf{i} + 6\\mathbf{j} + 6\\mathbf{k}",
             "Displacement from $A$ to $C$."),
        step(3, "Scalar multiple", "\\overrightarrow{AC} = 2\\overrightarrow{AB}",
             "Parallel displacements from $A$ prove collinearity."),
        step(4, "Part (b): magnitudes", "|\\overrightarrow{AB}| = 3\\sqrt{3},\\ |\\overrightarrow{BC}| = 3\\sqrt{3}",
             "Equal segment lengths."),
        step(5, "Ratio", "AB:BC = 1:1",
             "$B$ is the midpoint of $AC$."),
        step(6, "Part (c): section formula", "\\mathbf{p} = \\dfrac{1\\cdot\\mathbf{a} + 2\\cdot\\mathbf{c}}{3}",
             "Ratio $2:1$ from $A$ to $C$."),
        step(7, "Compute", "\\mathbf{p} = 5\\mathbf{i} + 7\\mathbf{j} + 4\\mathbf{k}",
             "Weighted average of $\\mathbf{a}$ and $\\mathbf{c}$."),
        step(8, "Verify on line", "\\mathbf{p} = \\mathbf{a} + \\dfrac{2}{3}\\overrightarrow{AC}",
             "Lies two-thirds of the way from $A$ to $C$."),
        step(9, "Check ratio", "AP:PC = 2:1",
             "Confirms the division."),
        step(10, "State answers", "(a)\\ \\text{collinear},\\ (b)\\ 1:1,\\ (c)\\ 5\\mathbf{i}+7\\mathbf{j}+4\\mathbf{k}",
             "All three parts."),
    ],
    "(a) $\\overrightarrow{AC} = 2\\overrightarrow{AB}$, so collinear; (b) $AB:BC = 1:1$; (c) $\\mathbf{p} = 5\\mathbf{i} + 7\\mathbf{j} + 4\\mathbf{k}$",
))

questions.append(make_q(
    "q064", "Hard", 8, "numeric", ["vectors", "magnitude", "unknown-component"],
    "The vector $\\mathbf{v} = p\\mathbf{i} + 2\\mathbf{j} - 2\\mathbf{k}$ has the same magnitude as $\\mathbf{w} = 2\\mathbf{i} + 2\\mathbf{j} + \\mathbf{k}$. Find the possible values of $p$.",
    [
        step(1, "Find $|\\mathbf{w}|$", "|\\mathbf{w}| = \\sqrt{4+4+1} = 3",
             "Magnitude of the reference vector."),
        step(2, "Set up equation", "p^2 + 4 + 4 = 9",
             "Equate squared magnitudes."),
        step(3, "Simplify", "p^2 = 1",
             "Collect terms."),
        step(4, "Solve", "p = \\pm 1",
             "Both signs give the same length."),
        step(5, "Verify $p=1$", "|\\mathbf{v}| = \\sqrt{1+4+4} = 3",
             "Positive value checks."),
        step(6, "Verify $p=-1$", "|\\mathbf{v}| = 3",
             "Negative value checks."),
        step(7, "Geometric meaning", "\\text{two symmetric points}",
             "Only the $\\mathbf{i}$-component differs in sign."),
        step(8, "State the answer", "p = 1 \\text{ or } p = -1",
             "Both values are valid."),
    ],
    "$p = 1$ or $p = -1$",
))

questions.append(make_q(
    "q065", "Hard", 9, "vector", ["vectors", "midpoint", "unknown-point"],
    "The midpoint of $AB$ is $M(3, -1, 2)$. Point $A$ has position vector $2\\mathbf{i} + 4\\mathbf{j} - \\mathbf{k}$. Find the position vector of $B$ and the distance $AB$.",
    [
        step(1, "Midpoint vector formula", "\\mathbf{m} = \\dfrac{1}{2}(\\mathbf{a}+\\mathbf{b})",
             "The midpoint position vector averages the endpoints."),
        step(2, "Double the midpoint", "2\\mathbf{m} = 6\\mathbf{i} - 2\\mathbf{j} + 4\\mathbf{k}",
             "Multiply $\\mathbf{m}$ by $2$ to clear the fraction."),
        step(3, "Solve for $\\mathbf{b}$", "\\mathbf{b} = 2\\mathbf{m} - \\mathbf{a}",
             "Rearrange to isolate $\\mathbf{b}$."),
        step(4, "Subtract components", "\\mathbf{b} = 4\\mathbf{i} - 6\\mathbf{j} + 5\\mathbf{k}",
             "Component-wise subtraction."),
        step(5, "Form $\\overrightarrow{AB}$", "\\overrightarrow{AB} = \\mathbf{b}-\\mathbf{a} = 2\\mathbf{i} - 10\\mathbf{j} + 6\\mathbf{k}",
             "Displacement from $A$ to $B$."),
        step(6, "Distance", "|\\overrightarrow{AB}| = \\sqrt{4+100+36} = 2\\sqrt{35}",
             "Magnitude of the displacement."),
        step(7, "Verify midpoint", "\\dfrac{\\mathbf{a}+\\mathbf{b}}{2} = 3\\mathbf{i}-\\mathbf{j}+2\\mathbf{k}",
             "Averaging $\\mathbf{a}$ and $\\mathbf{b}$ gives $M$."),
        step(8, "Check coordinates", "M(3,-1,2)",
             "Matches the given midpoint."),
        step(9, "State the answer", "\\mathbf{b} = 4\\mathbf{i}-6\\mathbf{j}+5\\mathbf{k},\\ AB = 2\\sqrt{35}",
             "Position vector and distance."),
    ],
    "$\\mathbf{b} = 4\\mathbf{i} - 6\\mathbf{j} + 5\\mathbf{k}$; $AB = 2\\sqrt{35}$",
))

questions.append(make_q(
    "q066", "Hard", 10, "vector", ["vectors", "parallelogram", "exam-style"],
    "The vertices of parallelogram $OABC$ are $O$ (origin), $A$, $B$ and $C$. Given $\\overrightarrow{OA} = 2\\mathbf{i} + \\mathbf{j} - \\mathbf{k}$ and $\\overrightarrow{OC} = 4\\mathbf{i} + 3\\mathbf{j} + 2\\mathbf{k}$, find: (a) $\\overrightarrow{OB}$, (b) $\\overrightarrow{AB}$, (c) the unit vector in the direction of $\\overrightarrow{AB}$.",
    [
        step(1, "Part (a): parallelogram rule", "\\overrightarrow{OB} = \\overrightarrow{OA} + \\overrightarrow{OC}",
             "In $OABC$, the diagonal $OB$ equals the sum of adjacent sides from $O$."),
        step(2, "Add components", "\\overrightarrow{OB} = 6\\mathbf{i} + 4\\mathbf{j} + \\mathbf{k}",
             "Combine matching $\\mathbf{i}$, $\\mathbf{j}$, $\\mathbf{k}$ parts."),
        step(3, "Part (b): side vector", "\\overrightarrow{AB} = \\overrightarrow{OB} - \\overrightarrow{OA}",
             "Subtract position vectors to get the displacement from $A$ to $B$."),
        step(4, "Compute", "\\overrightarrow{AB} = 4\\mathbf{i} + 3\\mathbf{j} + 2\\mathbf{k}",
             "This equals $\\overrightarrow{OC}$ as expected in a parallelogram."),
        step(5, "Part (c): magnitude of $\\overrightarrow{AB}$", "|\\overrightarrow{AB}| = \\sqrt{16+9+4} = \\sqrt{29}",
             "Needed for the unit vector."),
        step(6, "Unit vector", "\\hat{\\mathbf{u}} = \\dfrac{4}{\\sqrt{29}}\\mathbf{i} + \\dfrac{3}{\\sqrt{29}}\\mathbf{j} + \\dfrac{2}{\\sqrt{29}}\\mathbf{k}",
             "Divide each component by $\\sqrt{29}$."),
        step(7, "Verify parallelogram", "\\overrightarrow{AB} = \\overrightarrow{OC}",
             "Opposite sides are equal."),
        step(8, "Check unit length", "\\dfrac{16+9+4}{29} = 1",
             "Squared components sum to $1$."),
        step(9, "State answers", "(a)\\ 6\\mathbf{i}+4\\mathbf{j}+\\mathbf{k},\\ (b)\\ 4\\mathbf{i}+3\\mathbf{j}+2\\mathbf{k}",
             "First two parts."),
        step(10, "Complete part (c)", "\\hat{\\mathbf{u}} = \\dfrac{4\\mathbf{i}+3\\mathbf{j}+2\\mathbf{k}}{\\sqrt{29}}",
             "Unit vector in direction of $\\overrightarrow{AB}$."),
    ],
    "(a) $\\overrightarrow{OB} = 6\\mathbf{i} + 4\\mathbf{j} + \\mathbf{k}$; (b) $\\overrightarrow{AB} = 4\\mathbf{i} + 3\\mathbf{j} + 2\\mathbf{k}$; (c) $\\hat{\\mathbf{u}} = \\dfrac{4\\mathbf{i} + 3\\mathbf{j} + 2\\mathbf{k}}{\\sqrt{29}}$",
))

questions.append(make_q(
    "q067", "Hard", 10, "numeric", ["vectors", "cuboid", "exam-style"],
    "A cuboid has vertices at $O(0,0,0)$ and $P(3,4,12)$ at opposite corners. (a) Find the space diagonal $OP$. (b) Find the length of the diagonal on the base face in the $xy$-plane. (c) Verify $OP$ using the base diagonal and height.",
    [
        step(1, "Part (a): space diagonal", "OP = \\sqrt{3^2+4^2+12^2}",
             "Direct 3D Pythagoras from origin to opposite corner."),
        step(2, "Evaluate", "OP = \\sqrt{9+16+144} = \\sqrt{169} = 13",
             "Recognise the $3$-$4$-$12$ scaled triple."),
        step(3, "Part (b): base diagonal", "d_{\\text{base}} = \\sqrt{3^2+4^2} = 5",
             "Face diagonal in the $xy$-plane."),
        step(4, "Part (c): two-step Pythagoras", "OP = \\sqrt{5^2+12^2}",
             "Use base diagonal as one leg and height $12$ as the other."),
        step(5, "Verify", "OP = \\sqrt{25+144} = 13",
             "Matches part (a)."),
        step(6, "3D Pythagoras theorem", "OP^2 = d_{\\text{base}}^2 + h^2",
             "Space diagonal from face diagonal plus perpendicular height."),
        step(7, "Interpret", "\\text{longest distance inside the cuboid}",
             "The body diagonal is the maximum internal length."),
        step(8, "State answers", "(a)\\ 13,\\ (b)\\ 5,\\ (c)\\ \\text{verified}",
             "All three parts."),
    ],
    "(a) $OP = 13$; (b) base diagonal $= 5$; (c) $\\sqrt{5^2+12^2}=13$ confirms the space diagonal.",
))

questions.append(make_q(
    "q068", "Hard", 11, "numeric", ["vectors", "unknown-component", "magnitude"],
    "The vector $\\mathbf{v} = 2\\mathbf{i} + 3\\mathbf{j} + t\\mathbf{k}$ has magnitude $7$. Find the possible values of $t$.",
    [
        step(1, "Magnitude equation", "|\\mathbf{v}| = 7 \\Rightarrow \\sqrt{2^2+3^2+t^2} = 7",
             "Set up the 3D magnitude formula with the unknown $t$."),
        step(2, "Square both sides", "4 + 9 + t^2 = 49",
             "Remove the square root by squaring."),
        step(3, "Simplify", "t^2 = 36",
             "Collect known squares on one side."),
        step(4, "Solve", "t = \\pm 6",
             "Take the square root — both signs are valid."),
        step(5, "Verify $t=6$", "|\\mathbf{v}| = \\sqrt{4+9+36} = 7",
             "Positive value checks."),
        step(6, "Verify $t=-6$", "|\\mathbf{v}| = 7",
             "Negative value also checks."),
        step(7, "Geometric meaning", "\\text{two points on the same vertical line}",
             "Fixing $x$ and $y$ leaves two symmetric $z$-values at distance $7$ from the origin."),
        step(8, "State the answer", "t = 6 \\text{ or } t = -6",
             "Both values give magnitude $7$."),
    ],
    "$t = 6$ or $t = -6$",
))

questions.append(make_q(
    "q069", "Hard", 12, "vector", ["vectors", "ratio", "section-formula", "exam-style"],
    "Points $A$ and $B$ have position vectors $\\mathbf{a} = -\\mathbf{i} + 2\\mathbf{j} + 4\\mathbf{k}$ and $\\mathbf{b} = 5\\mathbf{i} + 8\\mathbf{j} + 10\\mathbf{k}$. The point $P$ lies on $AB$ such that $AP:PB = 1:2$. Find $\\overrightarrow{OP}$ and the distance $OP$.",
    [
        step(1, "Section formula", "\\mathbf{p} = \\dfrac{2\\mathbf{a} + \\mathbf{b}}{3}",
             "Ratio $1:2$ means weight $\\mathbf{a}$ by $2$ and $\\mathbf{b}$ by $1$."),
        step(2, "Compute $2\\mathbf{a}$", "2\\mathbf{a} = -2\\mathbf{i} + 4\\mathbf{j} + 8\\mathbf{k}",
             "Double each component of $\\mathbf{a}$."),
        step(3, "Add vectors", "2\\mathbf{a}+\\mathbf{b} = 3\\mathbf{i} + 12\\mathbf{j} + 18\\mathbf{k}",
             "Add matching components."),
        step(4, "Divide by $3$", "\\mathbf{p} = \\mathbf{i} + 4\\mathbf{j} + 6\\mathbf{k}",
             "Position vector of $P$."),
        step(5, "Magnitude formula", "|\\mathbf{p}| = \\sqrt{1+16+36}",
             "Find distance from origin."),
        step(6, "Evaluate", "|\\mathbf{p}| = \\sqrt{53}",
             "Exact surd form."),
        step(7, "Ratio check", "\\overrightarrow{AP} = 2\\mathbf{i}+2\\mathbf{j}+2\\mathbf{k}",
             "Displacement from $A$ to $P$."),
        step(8, "Verify ratio", "\\overrightarrow{PB} = 4\\mathbf{i}+4\\mathbf{j}+4\\mathbf{k} = 2\\overrightarrow{AP}",
             "Confirms $AP:PB = 1:2$."),
        step(9, "State the answer", "\\mathbf{p} = \\mathbf{i}+4\\mathbf{j}+6\\mathbf{k},\\ |\\mathbf{p}|=\\sqrt{53}",
             "Position vector and distance."),
    ],
    "$\\overrightarrow{OP} = \\mathbf{i} + 4\\mathbf{j} + 6\\mathbf{k}$; $OP = \\sqrt{53}$",
))

questions.append(make_q(
    "q070", "Hard", 14, "written", ["vectors", "exam-style", "conceptual"],
    "Points $A$, $B$ and $C$ have position vectors $\\mathbf{a} = 2\\mathbf{i} - \\mathbf{j} + 3\\mathbf{k}$, $\\mathbf{b} = 5\\mathbf{i} + 2\\mathbf{j} + 6\\mathbf{k}$ and $\\mathbf{c} = 8\\mathbf{i} + 5\\mathbf{j} + 9\\mathbf{k}$. (a) Prove that $A$, $B$ and $C$ are collinear. (b) Find the ratio $AB:BC$. (c) Explain why $|\\mathbf{a}|$, $|\\mathbf{b}|$ and $|\\mathbf{c}|$ are not in the same ratio as $AB:BC$.",
    collinear_proof_steps(2, -1, 3, 5, 2, 6, 8, 5, 9, "\\dfrac{1}{2}") + [
        step(10, "Part (b): segment lengths", "|\\overrightarrow{AB}| = |\\overrightarrow{BC}| = 3\\sqrt{3}",
             "Equal displacements give equal segment lengths."),
        step(11, "Ratio", "AB:BC = 1:1",
             "$B$ is the midpoint of $AC$."),
        step(12, "Part (c): position vector magnitudes", "|\\mathbf{a}| = \\sqrt{14},\\ |\\mathbf{b}| = \\sqrt{65},\\ |\\mathbf{c}| = \\sqrt{170}",
             "Distances from the origin — not the same as segment lengths along the line."),
        step(13, "Key distinction", "|\\mathbf{b}| \\neq 2|\\mathbf{a}|",
             "Position vector magnitudes depend on distance from $O$, not spacing along $AC$."),
        step(14, "Conclusion", "\\text{collinearity uses displacement vectors, not position magnitudes}",
             "Only $\\overrightarrow{AB}$ and $\\overrightarrow{BC}$ share the ratio $1:1$."),
        step(15, "Summary", "(a)\\ \\text{collinear},\\ (b)\\ 1:1,\\ (c)\\ \\text{position magnitudes } \\neq \\text{ segment ratios}",
             "Complete exam-style response."),
    ],
    "(a) $\\overrightarrow{AB} = 3\\mathbf{i}+3\\mathbf{j}+3\\mathbf{k}$ and $\\overrightarrow{AC} = 2\\overrightarrow{AB}$, so collinear. (b) $AB:BC = 1:1$. (c) Position vector magnitudes measure distance from $O$, not spacing along the line.",
))

# Ensure step counts meet difficulty requirements (Easy 6–9, Intermediate 9–13, Hard 13–18)
_MIN_STEPS = {"Easy": 6, "Intermediate": 9, "Hard": 13}
_MAX_STEPS = {"Easy": 9, "Intermediate": 13, "Hard": 18}
_PAD_LABELS = [
    ("Check each component", "Verify $\\mathbf{i}$, $\\mathbf{j}$ and $\\mathbf{k}$ parts separately before combining."),
    ("Geometric interpretation", "Relate the vector result to position, displacement or distance in 3D space."),
    ("Consistency check", "Substitute back or compare magnitudes to confirm the working is coherent."),
    ("Method summary", "The key technique was vector addition, subtraction, or scalar multiplication in three dimensions."),
    ("Final review", "Re-read the question to ensure every required part has been answered."),
]
for q in questions:
    steps = q["workedSolution"]["steps"]
    min_s, max_s = _MIN_STEPS[q["difficulty"]], _MAX_STEPS[q["difficulty"]]
    pad_i = 0
    while len(steps) < min_s:
        label, expl = _PAD_LABELS[pad_i % len(_PAD_LABELS)]
        last_work = steps[-1]["workingLatex"]
        steps.append(step(len(steps) + 1, label, last_work, expl))
        pad_i += 1
    if len(steps) > max_s:
        q["workedSolution"]["steps"] = steps[:max_s]

assert len(questions) == 70, f"Expected 70 questions, got {len(questions)}"

header = 'import { Question } from "@/lib/types";\n\nexport const questions: Question[] = '
with open(OUT, "w", encoding="utf-8") as f:
    f.write(header)
    f.write(json.dumps(questions, indent=2, ensure_ascii=False))
    f.write(";\n")

diffs = Counter(q["difficulty"] for q in questions)
print(f"Wrote {len(questions)} questions to {OUT}")
print(f"Difficulties: {dict(diffs)}")
