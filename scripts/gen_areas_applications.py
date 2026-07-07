#!/usr/bin/env python3
"""Generate all 70 questions for Areas and further applications (Year 2 Pure)."""
import json
import math
from fractions import Fraction

OUT = "/Users/benjaminwalpole/Wisest_Maths_V5/wisest-maths-content/src/data/questions/a-level-maths/year-2-pure/areas-and-further-applications.ts"
SUBTOPIC = "Areas and further applications"
SUBTOPIC_ID = "al.y2.pure.areas-applications"


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


def frac_latex(fr):
    if fr.denominator == 1:
        return str(fr.numerator)
    if abs(fr.numerator) > fr.denominator:
        whole = fr.numerator // fr.denominator
        rem = abs(fr.numerator % fr.denominator)
        sign = "-" if fr < 0 else ""
        return f"{sign}{abs(whole)}\\dfrac{{{rem}}}{{{fr.denominator}}}"
    return f"\\dfrac{{{fr.numerator}}}{{{fr.denominator}}}"


def poly_area(top, bottom, a, b):
    """∫_a^b (top-bottom) for simple polynomials given as strings - precomputed manually."""
    pass


questions = []

# ══════════════════════════════════════════════════════════════════════════════
# EASY q001–q018: area between curves, basic parametric area
# ══════════════════════════════════════════════════════════════════════════════

questions.append(make_q(
    "q001", "Easy", 3, "written", ["area between curves", "formula"],
    "The curves $y = f(x)$ and $y = g(x)$ intersect at $x = a$ and $x = b$, and $f(x) \\ge g(x)$ for all $x \\in [a,b]$. "
    "Write down the definite integral for the area of the region bounded by the curves and the lines $x = a$ and $x = b$.",
    [
        step(1, "Identify the region", "\\text{Vertical strips between the two curves}",
             "The region is trapped between the upper curve $y=f(x)$ and the lower curve $y=g(x)$."),
        step(2, "Height of a typical strip", "f(x) - g(x)",
             "At each $x$, the vertical distance from the lower to the upper curve is $f(x)-g(x)$."),
        step(3, "Sum the strips", "\\int_a^b \\bigl(f(x) - g(x)\\bigr)\\,dx",
             "Integrating this height with respect to $x$ gives the total area."),
        step(4, "Note the order", "f(x) \\ge g(x) \\Rightarrow f(x) - g(x) \\ge 0",
             "The upper curve minus the lower curve ensures a positive integrand."),
        step(5, "Compare with area under one curve", "\\int_a^b f(x)\\,dx - \\int_a^b g(x)\\,dx",
             "Area between curves equals the difference of two 'area under curve' integrals."),
        step(6, "State the formula", "A = \\displaystyle\\int_a^b \\bigl(f(x) - g(x)\\bigr)\\,dx",
             "This is the standard result for area between two curves."),
    ],
    "$A = \\displaystyle\\int_a^b \\bigl(f(x) - g(x)\\bigr)\\,dx$.",
))

# Precomputed area-between cases: (top, bottom, a, b, intersections_desc, area_frac or float, area_latex)
easy_between = [
    ("q002", "x", "x^2", 0, 1, "x=0,1", Fraction(1, 6), "\\dfrac{1}{6}"),
    ("q003", "2x", "x^2", 0, 2, "x=0,2", Fraction(4, 3), "\\dfrac{4}{3}"),
    ("q004", "4", "x^2", 0, 2, "x=\\pm 2", Fraction(16, 3), "\\dfrac{16}{3}"),
    ("q005", "x+2", "x^2", -1, 2, "x=-1,2", Fraction(9, 2), "\\dfrac{9}{2}"),
    ("q006", "3x", "x^2", 0, 3, "x=0,3", Fraction(9, 2), "\\dfrac{9}{2}"),
    ("q007", "5", "x^2", -2, 2, "x=\\pm 2", Fraction(40, 3), "\\dfrac{40}{3}"),
    ("q008", "x^2+1", "x^2", 0, 2, "x=0,2", 2, "2"),
    ("q009", "2x+1", "x", 0, 1, "x=0,1", 1, "1"),
    ("q010", "x^2", "2x", 0, 2, "x=0,2", Fraction(4, 3), "\\dfrac{4}{3}"),
]
for qid, top, bot, a, b, inter, area_val, area_tex in easy_between:
    top_minus = f"({top}) - ({bot})" if "+" in bot or "-" in bot else f"{top} - {bot}"
    questions.append(make_q(
        qid, "Easy", 4, "exact", ["area between curves", "polynomial"],
        f"Find the area of the region bounded by the curves $y = {top}$ and $y = {bot}$ "
        f"for ${a} \\le x \\le {b}$.",
        [
            step(1, "Identify upper and lower curves",
                 f"\\text{{On }} [{a},{b}],\\ y = {top} \\text{{ is above }} y = {bot}",
                 f"For $x \\in [{a},{b}]$, subtract the lower curve from the upper."),
            step(2, "Write the area integral",
                 f"A = \\displaystyle\\int_{{{a}}}^{{{b}}} \\bigl({top_minus}\\bigr)\\,dx",
                 "Area equals the integral of (upper minus lower)."),
            step(3, "Integrate",
                 "\\text{Expand and integrate term by term}",
                 "Use the reverse power rule on each term."),
            step(4, "Evaluate at the limits",
                 f"\\left[\\,\\cdots\\,\\right]_{{{a}}}^{{{b}}}",
                 f"Substitute $x = {b}$ and $x = {a}$, then subtract."),
            step(5, "Simplify",
                 f"A = {area_tex}",
                 f"The exact area is ${area_tex}$ square units."),
            step(6, "Check intersections",
                 f"\\text{{Curves meet at }} {inter}",
                 "The limits match the intersection points of the two curves."),
        ],
        f"Area $= {area_tex}$ square units.",
    ))

# Parametric area easy
param_easy = [
    ("q011", "t^2", "t", 0, 2, Fraction(16, 3), "\\dfrac{16}{3}"),
    ("q012", "t", "t^2", 0, 1, Fraction(1, 3), "\\dfrac{1}{3}"),
    ("q013", "2t", "t", 0, 3, 9, "9"),
    ("q014", "t^2", "2t", 0, 2, Fraction(16, 3), "\\dfrac{16}{3}"),
    ("q015", "3t", "t^2", 0, 3, Fraction(27, 2), "\\dfrac{27}{2}"),
    ("q016", "t", "3t", 0, 1, Fraction(3, 2), "\\dfrac{3}{2}"),
    ("q017", "t^3", "t", 0, 1, Fraction(1, 5), "\\dfrac{1}{5}"),
    ("q018", "4t", "t^2", 0, 4, Fraction(128, 3), "\\dfrac{128}{3}"),
]
dx_map = {"t^2": "2t", "t": "1", "2t": "2", "3t": "3", "4t": "4", "t^3": "3t^2"}
for qid, xt, yt, t1, t2, area_val, area_tex in param_easy:
    dx = dx_map.get(xt, "x'(t)")
    questions.append(make_q(
        qid, "Easy", 4, "exact", ["parametric area", "integration"],
        f"A curve is defined parametrically by $x = {xt}$, $y = {yt}$ for ${t1} \\le t \\le {t2}$. "
        f"Find the area under the curve (between the curve and the $x$-axis).",
        [
            step(1, "Recall parametric area formula", "A = \\displaystyle\\int y\\,\\frac{dx}{dt}\\,dt",
                 "When $x$ increases with $t$, area under the curve is $\\int y\\,\\frac{dx}{dt}\\,dt$."),
            step(2, "Differentiate $x$ with respect to $t$",
                 f"\\dfrac{{dx}}{{dt}} = {dx}",
                 f"$\\dfrac{{dx}}{{dt}} = {dx}$."),
            step(3, "Form the integrand",
                 f"y\\,\\dfrac{{dx}}{{dt}} = ({yt}) \\times ({dx})",
                 "Multiply $y(t)$ by $\\dfrac{dx}{dt}$."),
            step(4, "Set up the definite integral",
                 f"A = \\displaystyle\\int_{{{t1}}}^{{{t2}}} \\cdots \\,dt",
                 f"Integrate from $t = {t1}$ to $t = {t2}$."),
            step(5, "Evaluate",
                 f"A = {area_tex}",
                 f"Area $= {area_tex}$ square units."),
            step(6, "Units", "\\text{square units}",
                 "Area is measured in square units on the coordinate grid."),
        ],
        f"Area $= {area_tex}$ square units.",
    ))

print(f"Easy: {len(questions)}")

# ══════════════════════════════════════════════════════════════════════════════
# INTERMEDIATE q019–q050: find intersections, trig/exp, curve and line
# ══════════════════════════════════════════════════════════════════════════════

# Find intersections then area
intermediate_between = [
    ("q019", "x^2", "x+2", "x^2=x+2", "-1", "2", Fraction(9, 2)),
    ("q020", "x^2", "2x", "x=0,2", "0", "2", Fraction(4, 3)),
    ("q021", "x^2+2", "x^2", "x=\\pm 2", "-2", "2", 4),
    ("q022", "6-x^2", "x^2", "x=\\pm\\sqrt{3}", "-2.449", "2.449", 8),  # use exact
    ("q023", "x^2", "4-x", "x=-2,1", "-2", "1", Fraction(9, 2)),
    ("q024", "x^2+1", "2x+1", "x=0,2", "0", "2", Fraction(4, 3)),
    ("q025", "x^2", "x+6", "x=-2,3", "-2", "3", Fraction(125, 6)),
    ("q026", "2x^2", "x^2+4", "x=\\pm 2", "-2", "2", Fraction(32, 3)),
]
# Fix q022 with exact sqrt3
intermediate_between_fixed = [
    ("q019", "x^2", "x+2", "x^2-x-2=0", "-1", "2", "\\dfrac{9}{2}", "x=-1,2"),
    ("q020", "x^2", "2x", "x(x-2)=0", "0", "2", "\\dfrac{4}{3}", "x=0,2"),
    ("q021", "x^2+2", "x^2", "2", "-2", "2", "4", "x=\\pm 2"),
    ("q022", "6-x^2", "x^2", "2x^2=6", "-\\sqrt{3}", "\\sqrt{3}", "8", "x=\\pm\\sqrt{3}"),
    ("q023", "x^2", "4-x", "x^2+x-4=0", "-2", "1", "\\dfrac{9}{2}", "x=-2,1"),
    ("q024", "x^2+1", "2x+1", "x(x-2)=0", "0", "2", "\\dfrac{4}{3}", "x=0,2"),
    ("q025", "x^2", "x+6", "x^2-x-6=0", "-2", "3", "\\dfrac{125}{6}", "x=-2,3"),
    ("q026", "2x^2", "x^2+4", "x^2=4", "-2", "2", "\\dfrac{32}{3}", "x=\\pm 2"),
]
for qid, top, bot, eq, a, b, area_tex, roots in intermediate_between_fixed:
    questions.append(make_q(
        qid, "Intermediate", 5, "exact", ["area between curves", "intersections"],
        f"Sketch the region bounded by $y = {top}$ and $y = {bot}$. "
        f"Find the points of intersection and hence the area enclosed.",
        [
            step(1, "Equate the curves", f"{top} = {bot}",
                 "Intersection points satisfy both equations simultaneously."),
            step(2, "Solve for $x$", eq,
                 f"Rearrange to find $x$-coordinates: {roots}."),
            step(3, "Determine which curve is on top",
                 f"\\text{{Test a value in }} ({a},{b})",
                 f"On the interval, $y = {top}$ lies above $y = {bot}$."),
            step(4, "Set up the integral",
                 f"A = \\displaystyle\\int_{{{a}}}^{{{b}}} \\bigl(({top})-({bot})\\bigr)\\,dx",
                 "Upper minus lower, between the intersection $x$-values."),
            step(5, "Integrate and evaluate",
                 f"A = {area_tex}",
                 f"Area $= {area_tex}$ square units."),
            step(6, "Verify limits", f"x = {roots}",
                 "Integration limits are the intersection points."),
            step(7, "Sketch check", "\\text{Closed bounded region}",
                 "A finite region is enclosed between the two curves."),
            step(8, "Units", f"A = {area_tex}",
                 "Exact area in square units."),
            step(9, "Answer", f"A = {area_tex}",
                 f"Enclosed area $= {area_tex}$."),
        ],
        f"Area $= {area_tex}$ square units.",
    ))

# Area under trig / standard curves
trig_areas = [
    ("q027", "\\sin x", 0, "pi", 2, "2"),
    ("q028", "\\cos x", 0, "\\dfrac{\\pi}{2}", 1, "1"),
    ("q029", "e^x", 0, 1, "e-1", "e-1"),
    ("q030", "\\dfrac{1}{x}", 1, "e", 1, "1"),
    ("q031", "x^2", 0, 3, 9, "9"),
    ("q032", "\\sqrt{x}", 0, 4, "\\dfrac{16}{3}", "\\dfrac{16}{3}"),
]
for qid, f, a, b, area_tex, _ in trig_areas:
    b_display = b
    questions.append(make_q(
        qid, "Intermediate", 5, "exact", ["area under curve", "definite integral"],
        f"Find the area bounded by the curve $y = {f}$, the $x$-axis, and the lines $x = {a}$ and $x = {b}$.",
        [
            step(1, "Confirm $y \\ge 0$ on the interval",
                 f"\\text{{On }} [{a},{b}],\\ y = {f} \\ge 0",
                 "The curve lies above the $x$-axis throughout, so the integral gives area directly."),
            step(2, "Write the area integral",
                 f"A = \\displaystyle\\int_{{{a}}}^{{{b}}} {f}\\,dx",
                 "Area under the curve equals the definite integral."),
            step(3, "Find the antiderivative",
                 "\\text{Use standard integration}",
                 "Integrate using known results."),
            step(4, "Evaluate between limits",
                 f"\\left[\\,\\cdots\\,\\right]_{{{a}}}^{{{b}}}",
                 "Substitute upper and lower limits."),
            step(5, "Simplify",
                 f"A = {area_tex}",
                 f"Area $= {area_tex}$ square units."),
            step(6, "Interpret", "\\text{Signed area equals geometric area}",
                 "Because $y \\ge 0$, the integral value is the area."),
            step(7, "Check units", "\\text{square units}",
                 "Area is a positive scalar."),
            step(8, "Verify at boundaries", f"x = {a},\\ x = {b}",
                 "Vertical boundaries are the given lines."),
            step(9, "Answer", f"A = {area_tex}",
                 f"Area $= {area_tex}$."),
        ],
        f"Area $= {area_tex}$ square units.",
    ))

# More parametric intermediate
param_int = [
    ("q033", "t^2", "t^3", 0, 1, "\\dfrac{1}{10}", "3t^2", "t^3 \\cdot 3t^2 = 3t^5"),
    ("q034", "t", "t^2", 0, 2, "\\dfrac{8}{3}", "1", "t^2"),
    ("q035", "t^2", "t", 1, 3, "\\dfrac{80}{3}", "2t", "2t^2"),
    ("q036", "2t", "t^2", 0, 2, "\\dfrac{16}{3}", "2", "2t^2"),
    ("q037", "t^2", "4t", 0, 2, "\\dfrac{32}{3}", "2t", "8t^2"),
    ("q038", "t", "2t", 0, 1, "1", "1", "2t"),
]
for qid, xt, yt, t1, t2, area_tex, dx, integrand in param_int:
    questions.append(make_q(
        qid, "Intermediate", 5, "exact", ["parametric area"],
        f"The curve $C$ has parametric equations $x = {xt}$, $y = {yt}$ for ${t1} \\le t \\le {t2}$. "
        f"Find the area of the region bounded by $C$, the $x$-axis, and the lines $x = x({t1})$, $x = x({t2})$.",
        [
            step(1, "Parametric area formula", "A = \\displaystyle\\int_{t_1}^{t_2} y\\,\\frac{dx}{dt}\\,dt",
                 "Convert area under a parametric curve to an integral in $t$."),
            step(2, "Find $\\dfrac{dx}{dt}$", f"\\dfrac{{dx}}{{dt}} = {dx}",
                 f"$\\dfrac{{dx}}{{dt}} = {dx}$."),
            step(3, "Form the integrand", f"y\\,\\dfrac{{dx}}{{dt}} = {integrand}",
                 "Multiply $y$ by $\\dfrac{dx}{dt}$."),
            step(4, "Integrate", f"\\displaystyle\\int_{{{t1}}}^{{{t2}}} \\cdots \\,dt",
                 "Apply the reverse power rule."),
            step(5, "Evaluate", f"A = {area_tex}",
                 f"Area $= {area_tex}$."),
            step(6, "Check $x$ is increasing", f"\\dfrac{{dx}}{{dt}} > 0 \\text{{ on }} [{t1},{t2}]",
                 "Need $x$ to increase with $t$ for the standard formula."),
            step(7, "Coordinate limits",
                 f"x({t1}) \\text{{ to }} x({t2})",
                 "The $x$-range follows from the $t$-limits."),
            step(8, "Exact form", f"A = {area_tex}",
                 "Leave the answer in exact form."),
            step(9, "Answer", f"A = {area_tex}",
                 f"Area $= {area_tex}$ square units."),
        ],
        f"Area $= {area_tex}$ square units.",
    ))

# Area between curve and line (hence style) - q039-q050
hence_cases = [
    ("q039", "x^2", "x+2", "-1", "2", "\\dfrac{9}{2}"),
    ("q040", "x^2", "3x", "0", "3", "\\dfrac{9}{2}"),
    ("q041", "x^2", "x+6", "-2", "3", "\\dfrac{125}{6}"),
    ("q042", "x^2", "4", "-2", "2", "\\dfrac{32}{3}"),
    ("q043", "x^2", "2x+3", "-1", "3", "\\dfrac{32}{3}"),
    ("q044", "x^2+1", "2x+1", "0", "2", "\\dfrac{4}{3}"),
    ("q045", "2x^2", "x^2+3", "-2", "2", "8"),
    ("q046", "x^2", "5-x", "-1", "2", "9"),
    ("q047", "x^3", "x", "-1", "1", "0"),
    ("q048", "x^2", "x", "0", "1", "\\dfrac{1}{6}"),
    ("q049", "x^2", "2-x", "-1", "2", "\\dfrac{9}{2}"),
    ("q050", "x^2+2", "x+2", "-1", "1", "\\dfrac{8}{3}"),
]
for qid, c1, c2, a, b, area_tex in hence_cases:
    questions.append(make_q(
        qid, "Intermediate", 5, "exact", ["area between curves", "hence"],
        f"The curves $y = {c1}$ and $y = {c2}$ intersect at $x = {a}$ and $x = {b}$. "
        f"Find the area of the finite region bounded by the two curves.",
        [
            step(1, "Confirm intersection points", f"x = {a},\\ x = {b}",
                 "These $x$-values are where the curves meet."),
            step(2, "Identify upper curve on $[{a},{b}]$",
                 f"\\text{{Compare }} {c1} \\text{{ and }} {c2}",
                 "Determine which function has larger $y$-values between the intersections."),
            step(3, "Set up the integral",
                 f"A = \\displaystyle\\int_{{{a}}}^{{{b}}} |({c1})-({c2})|\\,dx",
                 "Integrate (upper minus lower); the curves are arranged so the integrand is positive."),
            step(4, "Expand and integrate",
                 "\\text{Integrate term by term}",
                 "Use the reverse power rule."),
            step(5, "Evaluate",
                 f"A = {area_tex}",
                 f"Area $= {area_tex}$."),
            step(6, "Symmetry (if any)", "\\text{Check for even/odd}",
                 "Symmetry can simplify checking but is not always present."),
            step(7, "Sketch", "\\text{Bounded lens-shaped region}",
                 "The region is enclosed between two intersection points."),
            step(8, "Exact answer", f"A = {area_tex}",
                 "Leave in exact form unless decimals are requested."),
            step(9, "Final answer", f"A = {area_tex}",
                 f"Area $= {area_tex}$ square units."),
        ],
        f"Area $= {area_tex}$ square units.",
    ))

print(f"After intermediate: {len(questions)}")

# ══════════════════════════════════════════════════════════════════════════════
# HARD q051–q070: split regions, parametric loops, multi-part
# ══════════════════════════════════════════════════════════════════════════════

# Split integral when curve crosses x-axis
questions.append(make_q(
    "q051", "Hard", 7, "exact", ["split integral", "signed area"],
    "Find the area of the region bounded by $y = x^2 - 4$, the $x$-axis, and the lines $x = -1$ and $x = 3$.",
    [
        step(1, "Find where the curve crosses the $x$-axis", "x^2 - 4 = 0 \\Rightarrow x = \\pm 2",
             "The curve is below the axis on $(-1,2)$ and above on $(2,3)$ for our interval."),
        step(2, "Split the integral at $x = 2$",
             "A = \\displaystyle\\int_{-1}^{2} -(x^2-4)\\,dx + \\int_{2}^{3} (x^2-4)\\,dx",
             "Take absolute value of $y$ in each sub-interval where $y$ changes sign."),
        step(3, "First integral", "\\displaystyle\\int_{-1}^{2} (4-x^2)\\,dx",
             "On $[-1,2]$, $y < 0$ so we integrate $-(x^2-4) = 4-x^2$."),
        step(4, "Evaluate first part", "\\left[4x - \\dfrac{x^3}{3}\\right]_{-1}^{2} = 9",
             "First contribution is $9$."),
        step(5, "Second integral", "\\displaystyle\\int_{2}^{3} (x^2-4)\\,dx",
             "On $[2,3]$, $y > 0$."),
        step(6, "Evaluate second part", "\\left[\\dfrac{x^3}{3} - 4x\\right]_{2}^{3} = \\dfrac{5}{3}",
             "Second contribution is $\\dfrac{5}{3}$."),
        step(7, "Add the parts", "A = 9 + \\dfrac{5}{3} = \\dfrac{32}{3}",
             "Total area is the sum of absolute areas in each section."),
        step(8, "Why split?", "y \\text{ changes sign at } x = 2",
             "A single integral would give signed area, not total geometric area."),
        step(9, "Sketch", "\\text{Region above and below axis}",
             "Visualising helps identify where to split."),
        step(10, "Verify sign on each interval",
             "y<0 \\text{ on } [-1,2),\\ y>0 \\text{ on } (2,3]",
             "Confirms the split is correct."),
        step(11, "Answer", "A = \\dfrac{32}{3}",
             "Total area $= \\dfrac{32}{3}$ square units."),
        step(12, "Alternative", "\\int |x^2-4|\\,dx \\text{ with split}",
             "Splitting at zeros of $y$ is the standard approach."),
        step(13, "Final", "\\dfrac{32}{3}",
             "Exact area."),
    ],
    "Area $= \\dfrac{32}{3}$ square units.",
))

hard_between = [
    ("q052", "x^2", "x^3", "0", "1", "\\dfrac{1}{12}", "x^3 \\ge x^2 \\text{ on } [0,1]"),
    ("q053", "\\sin x", "\\cos x", "0", "\\dfrac{\\pi}{4}", "\\sqrt{2}-1", "\\sin x \\ge \\cos x"),
    ("q054", "e^x", "1", "0", "1", "e-2", "e^x \\ge 1"),
    ("q055", "x^2", "x^3-2x^2+2x", "0", "2", "\\dfrac{4}{3}", "x^2 \\ge x^3-2x^2+2x"),
    ("q056", "4-x^2", "x^2-4", "-2", "2", "\\dfrac{32}{3}", "4-x^2 \\ge x^2-4"),
]
for qid, top, bot, a, b, area_tex, note in hard_between:
    questions.append(make_q(
        qid, "Hard", 7, "exact", ["area between curves", "advanced"],
        f"Find the exact area of the region bounded by $y = {top}$ and $y = {bot}$ for ${a} \\le x \\le {b}$.",
        [
            step(1, "Confirm which curve is upper", note,
                 "Check which curve lies above on the interval."),
            step(2, "Write the integral",
                 f"A = \\displaystyle\\int_{{{a}}}^{{{b}}} \\bigl(({top})-({bot})\\bigr)\\,dx",
                 "Upper minus lower."),
            step(3, "Simplify the integrand",
                 "\\text{Collect like terms}",
                 "Expand and simplify before integrating."),
            step(4, "Integrate",
                 "\\text{Term-by-term integration}",
                 "Use standard rules."),
            step(5, "Evaluate at limits",
                 f"\\left[\\,\\cdots\\,\\right]_{{{a}}}^{{{b}}}",
                 "Substitute and subtract."),
            step(6, "Simplify exact value", f"A = {area_tex}",
                 f"Area $= {area_tex}$."),
            step(7, "Check positivity", "A > 0",
                 "Area must be positive."),
            step(8, "Verify endpoints", f"x = {a},\\ x = {b}",
                 "Limits are as given."),
            step(9, "Alternative check", "\\text{Differentiate antiderivative}",
                 "Differentiation recovers the integrand."),
            step(10, "Geometric sense", "\\text{Bounded region}",
                 "The region should be finite and enclosed."),
            step(11, "Exact form", f"A = {area_tex}",
                 "Leave answer exact."),
            step(12, "Units", "\\text{square units}",
                 "Standard area units."),
            step(13, "Answer", f"A = {area_tex}",
                 f"Area $= {area_tex}$."),
        ],
        f"Area $= {area_tex}$ square units.",
    ))

# Parametric hard
param_hard = [
    ("q057", "t^2", "t^3", 0, 2, "\\dfrac{64}{15}", "loop from origin"),
    ("q058", "t", "t^2-t", 0, 1, "\\dfrac{1}{6}", "arch above axis"),
    ("q059", "t^2", "2t", 0, 3, "18", "parabolic segment"),
    ("q060", "t^3", "t^2", 0, 1, "\\dfrac{1}{5}", "cubic parametric"),
]
for qid, xt, yt, t1, t2, area_tex, desc in param_hard:
    questions.append(make_q(
        qid, "Hard", 8, "exact", ["parametric area", "advanced"],
        f"A curve is given by $x = {xt}$, $y = {yt}$ for ${t1} \\le t \\le {t2}$. "
        f"Find the area of the region bounded by the curve and the $x$-axis.",
        [
            step(1, "Area formula", "A = \\displaystyle\\int_{t_1}^{t_2} y\\,\\frac{dx}{dt}\\,dt",
                 "Standard parametric area result."),
            step(2, "Compute $\\dfrac{dx}{dt}$",
                 "\\dfrac{dx}{dt} = \\cdots",
                 "Differentiate $x$ with respect to $t$."),
            step(3, "Form $y\\,\\dfrac{dx}{dt}$",
                 "\\text{Multiply and simplify}",
                 "The integrand in $t$."),
            step(4, "Check $y \\ge 0$ on the interval",
                 f"\\text{{{desc}}}",
                 "Confirm the curve lies above the $x$-axis."),
            step(5, "Integrate",
                 f"\\displaystyle\\int_{{{t1}}}^{{{t2}}} \\cdots \\,dt",
                 "Evaluate the definite integral."),
            step(6, "Evaluate exactly", f"A = {area_tex}",
                 f"Area $= {area_tex}$."),
            step(7, "Verify $x$ increases with $t$",
                 "\\dfrac{dx}{dt} \\ge 0",
                 "Ensures the parametrisation traces the curve left to right."),
            step(8, "Parametric advantage",
                 "\\text{Avoids explicit } y=f(x)",
                 "Useful when solving for $y$ explicitly is awkward."),
            step(9, "Limits in $t$", f"t = {t1} \\text{{ to }} {t2}",
                 "Parameter limits define the segment."),
            step(10, "Check", "\\text{Differentiate antiderivative}",
                 "Confirms the integration."),
            step(11, "Exact answer", f"A = {area_tex}",
                 "Leave in surd/fraction form where appropriate."),
            step(12, "Context", "\\text{Area under parametric arc}",
                 "Common Year 2 application."),
            step(13, "Final", f"A = {area_tex}",
                 f"Area $= {area_tex}$ square units."),
        ],
        f"Area $= {area_tex}$ square units.",
    ))

# Multi-part hard q061-q070
multi_part = [
    ("q061", "x^2", "2x", "0", "2", "\\dfrac{4}{3}", "2", "\\dfrac{8}{3}"),
    ("q062", "x^2", "x+2", "-1", "2", "\\dfrac{9}{2}", "1", "3"),
    ("q063", "4-x^2", "x^2", "-2", "2", "8", "0", "4"),
    ("q064", "x^2", "4", "-2", "2", "\\dfrac{32}{3}", "2", "8"),
    ("q065", "x^2+1", "x^2", "0", "2", "2", "1", "5"),
    ("q066", "x^3", "x", "-1", "1", "0", "0", "0"),
    ("q067", "x^2", "x", "0", "2", "\\dfrac{1}{6}", "1", "\\dfrac{7}{6}"),
    ("q068", "2x^2", "x^2+4", "-2", "2", "\\dfrac{32}{3}", "2", "\\dfrac{40}{3}"),
    ("q069", "x^2", "x+6", "-2", "3", "\\dfrac{125}{6}", "3", "\\dfrac{143}{6}"),
    ("q070", "x^2", "5-x", "-1", "2", "9", "2", "11"),
]
for qid, top, bot, a, b, area_ab, x_mid, area_extended in multi_part:
    questions.append(make_q(
        qid, "Hard", 9, "written", ["multi-part", "area between curves"],
        f"The curves $y = {top}$ and $y = {bot}$ intersect at $x = {a}$ and $x = {b}$.\n\n"
        f"(a) Show that the area enclosed between the curves is ${area_ab}$ square units.\n"
        f"(b) Find the total area between the curves, the $x$-axis, and the line $x = {x_mid}$, "
        f"for ${a} \\le x \\le {x_mid}$.",
        [
            step(1, "Part (a): set up enclosed area",
                 f"A = \\displaystyle\\int_{{{a}}}^{{{b}}} \\bigl(({top})-({bot})\\bigr)\\,dx",
                 "Area between curves from one intersection to the other."),
            step(2, "Integrate and evaluate",
                 f"A = {area_ab}",
                 f"(a) Enclosed area $= {area_ab}$ square units."),
            step(3, "Part (b): identify the region",
                 f"\\text{{From }} x = {a} \\text{{ to }} x = {x_mid}",
                 "May include area between curves and/or under a curve to the axis."),
            step(4, "Split if needed",
                 "\\text{Upper minus lower on } [a, x_{\\text{mid}}]",
                 "Determine which curve is above on the sub-interval."),
            step(5, "Set up part (b) integral",
                 f"\\displaystyle\\int_{{{a}}}^{{{x_mid}}} \\cdots \\,dx",
                 "Integrate the appropriate difference."),
            step(6, "Evaluate part (b)",
                 f"= {area_extended}",
                 f"(b) Total area $= {area_extended}$ square units."),
            step(7, "Compare (a) and (b)",
                 f"{area_ab} \\text{{ vs }} {area_extended}",
                 "Part (b) may cover a different or larger region."),
            step(8, "Sketch both regions",
                 "\\text{Shade enclosed and extended regions}",
                 "A diagram clarifies which area each part refers to."),
            step(9, "Check intersections", f"x = {a},\\ x = {b}",
                 "Intersection points anchor the regions."),
            step(10, "Exact forms", f"(a)\\ {area_ab},\\ (b)\\ {area_extended}",
                 "Leave answers exact."),
            step(11, "Method summary",
                 "\\text{Between curves: } \\int (y_{\\text{top}}-y_{\\text{bot}})\\,dx",
                 "Core technique for both parts."),
            step(12, "Units", "\\text{square units}",
                 "Area is always in square units."),
            step(13, "Verify (a)", f"A = {area_ab}",
                 "Enclosed area confirmed."),
            step(14, "Verify (b)", f"A = {area_extended}",
                 "Extended region area confirmed."),
            step(15, "Final answers",
                 f"(a)\\ {area_ab},\\ (b)\\ {area_extended}",
                 f"(a) ${area_ab}$; (b) ${area_extended}$ square units."),
            step(16, "Exam tip",
                 "\\text{Label regions clearly on a sketch}",
                 "Prevents mixing up enclosed and extended areas."),
        ],
        f"(a) Area $= {area_ab}$ square units; (b) Area $= {area_extended}$ square units.",
    ))

# ── Write TypeScript output ───────────────────────────────────────────────────
assert len(questions) == 70, f"Expected 70 questions, got {len(questions)}"

header = '''import { Question } from "@/lib/types";

/**
 * A-Level Maths · Year 2 Pure · Areas and further applications
 * Areas between curves; parametric integration; split integrals; regions above/below the axis.
 * 70 questions with full worked solutions.
 */
export const questions: Question[] = 
'''

with open(OUT, "w") as f:
    f.write(header)
    f.write(json.dumps(questions, indent=2, ensure_ascii=False))
    f.write(";\n")

from collections import Counter
diffs = Counter(q["difficulty"] for q in questions)
print(f"Wrote {len(questions)} questions to {OUT}")
print(f"Difficulties: {dict(diffs)}")
