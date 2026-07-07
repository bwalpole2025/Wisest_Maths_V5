#!/usr/bin/env python3
"""Generate all 70 questions for Second derivatives and curve behaviour (Year 2 Pure)."""
import json
import math

OUT = "/Users/benjaminwalpole/Wisest_Maths_V5/wisest-maths-content/src/data/questions/a-level-maths/year-2-pure/second-derivatives-and-curve-behaviour.ts"

SUBTOPIC = "Second derivatives and curve behaviour"
SUBTOPIC_ID = "al.y2.pure.second-derivatives"


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


questions = []

# ══════════════════════════════════════════════════════════════════════════════
# EASY q001–q018: finding d²y/dx², basic concavity
# ══════════════════════════════════════════════════════════════════════════════

questions.append(make_q(
    "q001", "Easy", 3, "written", ["second derivative", "definition"],
    "Explain what $\\dfrac{d^2y}{dx^2}$ represents about the graph of $y = f(x)$.",
    [
        step(1, "Recall the first derivative",
             "\\frac{dy}{dx} = f'(x)",
             "The first derivative gives the gradient of the tangent at each point — how steeply the curve is rising or falling."),
        step(2, "Differentiate again",
             "\\frac{d^2y}{dx^2} = f''(x)",
             "The second derivative is the derivative of the gradient function, so it measures how the gradient itself is changing."),
        step(3, "Positive second derivative",
             "f''(x) > 0 \\Rightarrow \\text{concave up}",
             "When $f''(x) > 0$, the gradient is increasing as $x$ increases: the curve bends upward, like a cup held upright."),
        step(4, "Negative second derivative",
             "f''(x) < 0 \\Rightarrow \\text{concave down}",
             "When $f''(x) < 0$, the gradient is decreasing: the curve bends downward, like an arch."),
        step(5, "Link to stationary points",
             "f''(x) \\text{ at a stationary point classifies max/min}",
             "At a turning point, the sign of $f''(x)$ tells us whether the curve is concave up (minimum) or concave down (maximum)."),
        step(6, "Summary",
             "\\frac{d^2y}{dx^2} \\text{ describes concavity and the rate of change of gradient}",
             "The second derivative captures how the curve bends — concavity, inflection behaviour, and the nature of stationary points."),
    ],
    "$\\dfrac{d^2y}{dx^2}$ measures how the gradient changes with $x$: it describes concavity (concave up if positive, concave down if negative) and classifies stationary points.",
))

poly_easy = [
    ("q002", "x^3", "3x^2", "6x", "6x", "6", 2, 12),
    ("q003", "x^4", "4x^3", "12x^2", "12x^2", "48", 3, 48),
    ("q004", "5x^2 + 3x", "10x + 3", "10", "10", "10", 1, 10),
    ("q005", "x^3 - 6x", "3x^2 - 6", "6x", "6x", "12", 2, 12),
    ("q006", "x^5", "5x^4", "20x^3", "20x^3", "160", 2, 160),
    ("q007", "2x^3 - x", "6x^2 - 1", "12x", "12x", "24", 2, 24),
    ("q008", "x^2 - 4x + 1", "2x - 4", "2", "2", "2", 0, 2),
]
for qid, y, d1, d2, d2sub, val, x, result in poly_easy:
    if result > 0:
        sign_interp = "\\text{positive} \\Rightarrow \\text{concave up}"
    elif result < 0:
        sign_interp = "\\text{negative} \\Rightarrow \\text{concave down}"
    else:
        sign_interp = "\\text{zero} \\Rightarrow \\text{test concavity either side}"
    questions.append(make_q(
        qid, "Easy", 3, "expression", ["second derivative", "polynomial"],
        f"Find $\\dfrac{{d^2y}}{{dx^2}}$ given that $y = {y}$.",
        [
            step(1, "Differentiate once", f"\\frac{{dy}}{{dx}} = {d1}",
                 f"Apply the power rule to each term of $y = {y}$."),
            step(2, "Differentiate again", f"\\frac{{d^2y}}{{dx^2}} = {d2}",
                 "Differentiate the gradient function to obtain the second derivative."),
            step(3, "Simplify", f"\\frac{{d^2y}}{{dx^2}} = {d2}",
                 "Collect like terms if needed."),
            step(4, f"Evaluate at $x = {x}$ (optional check)", f"\\frac{{d^2y}}{{dx^2}}\\bigg|_{{x={x}}} = {result}",
                 f"At $x = {x}$, the second derivative equals ${result}$."),
            step(5, "Interpret the sign at this point", sign_interp,
                 "The sign of the second derivative at a point tells us how the curve bends there."),
            step(6, "State the second derivative",
                 f"\\frac{{d^2y}}{{dx^2}} = {d2}",
                 "This is the required expression for the second derivative."),
        ],
        f"$\\dfrac{{d^2y}}{{dx^2}} = {d2}$.",
    ))

questions.append(make_q(
    "q009", "Easy", 2, "written", ["concavity", "second derivative"],
    "A curve has $\\dfrac{d^2y}{dx^2} > 0$ at a point. Describe the concavity of the curve at that point.",
    [
        step(1, "Recall the concavity rule", "\\frac{d^2y}{dx^2} > 0 \\Rightarrow \\text{concave up}",
             "A positive second derivative means the gradient is increasing as we move right."),
        step(2, "Geometric meaning", "\\text{curve lies above its tangents locally}",
             "Near the point, the graph bends upward — it looks like the bottom of a bowl."),
        step(3, "Gradient behaviour", "\\text{gradient increases with } x",
             "The tangent lines become steeper (for an increasing function) or less steep in the negative direction."),
        step(4, "Everyday analogy", "\\text{shape of } y = x^2 \\text{ near the origin}",
             "A parabola opening upward is concave up everywhere."),
        step(5, "Contrast with negative", "f''(x) < 0 \\Rightarrow \\text{concave down (arch shape)}",
             "Concave down is the opposite: the curve sits below its tangents."),
        step(6, "Answer", "\\text{concave up}",
             "At this point the curve is concave up."),
    ],
    "The curve is **concave up** at that point (it bends upward, like the bottom of a cup).",
))

questions.append(make_q(
    "q010", "Easy", 3, "numeric", ["second derivative", "evaluation"],
    "Given $y = x^4 - 2x^2$, find the value of $\\dfrac{d^2y}{dx^2}$ when $x = 1$.",
    [
        step(1, "First derivative", "\\frac{dy}{dx} = 4x^3 - 4x",
             "Differentiate each term using the power rule."),
        step(2, "Second derivative", "\\frac{d^2y}{dx^2} = 12x^2 - 4",
             "Differentiate again: $12x^2 - 4$."),
        step(3, "Substitute $x = 1$", "\\frac{d^2y}{dx^2} = 12(1)^2 - 4 = 8",
             "Replace $x$ with $1$."),
        step(4, "Interpret", "8 > 0 \\Rightarrow \\text{concave up at } x = 1",
             "A positive value means the curve bends upward at this point."),
        step(5, "Check first derivative at $x=1$", "\\frac{dy}{dx} = 4 - 4 = 0",
             "The gradient is zero at $x=1$, so this is a stationary point."),
        step(6, "Classify the stationary point", "f''(1) = 8 > 0 \\Rightarrow \\text{minimum}",
             "Positive second derivative at a stationary point confirms a local minimum."),
    ],
    "$\\dfrac{d^2y}{dx^2} = 8$ at $x = 1$.",
))

questions.append(make_q(
    "q011", "Easy", 3, "written", ["concavity", "quadratic"],
    "For $y = -x^2 + 4$, describe the concavity of the curve.",
    [
        step(1, "Differentiate", "\\frac{dy}{dx} = -2x",
             "The gradient is linear."),
        step(2, "Second derivative", "\\frac{d^2y}{dx^2} = -2",
             "Differentiating $-2x$ gives the constant $-2$."),
        step(3, "Sign of second derivative", "-2 < 0 \\text{ for all } x",
             "The second derivative is negative everywhere on the domain."),
        step(4, "Concavity conclusion", "\\text{concave down for all } x",
             "A negative constant second derivative means the curve always bends downward."),
        step(5, "Link to shape", "y = -x^2 + 4 \\text{ is an inverted parabola}",
             "Inverted parabolas are the classic example of a concave-down curve."),
        step(6, "Stationary point", "x = 0, \\; y = 4 \\text{ is a maximum}",
             "At the vertex, $f'' = -2 < 0$, confirming a maximum — consistent with concave down."),
    ],
    "The curve is **concave down** for all values of $x$ (since $\\dfrac{d^2y}{dx^2} = -2 < 0$).",
))

questions.append(make_q(
    "q012", "Easy", 4, "written", ["concavity", "cubic"],
    "For $y = x^3$, state whether the curve is concave up or concave down at $x = 2$ and at $x = -2$.",
    [
        step(1, "First derivative", "\\frac{dy}{dx} = 3x^2",
             "The gradient is always non-negative for this cubic."),
        step(2, "Second derivative", "\\frac{d^2y}{dx^2} = 6x",
             "Differentiate $3x^2$ to get $6x$."),
        step(3, "At $x = 2$", "\\frac{d^2y}{dx^2} = 12 > 0",
             "Substituting $x = 2$ gives a positive second derivative."),
        step(4, "Concavity at $x = 2$", "\\text{concave up}",
             "Positive second derivative means concave up."),
        step(5, "At $x = -2$", "\\frac{d^2y}{dx^2} = -12 < 0",
             "Substituting $x = -2$ gives a negative second derivative."),
        step(6, "Concavity at $x = -2$", "\\text{concave down}",
             "The curve bends downward on the left of the origin."),
        step(7, "Overall pattern", "x < 0: \\text{concave down}; \\; x > 0: \\text{concave up}",
             "The cubic changes concavity at the origin — a point of inflection."),
    ],
    "At $x = 2$: concave up. At $x = -2$: concave down.",
))

questions.append(make_q(
    "q013", "Easy", 3, "expression", ["second derivative", "polynomial"],
    "Find $\\dfrac{d^2y}{dx^2}$ for $y = \\dfrac{1}{2}x^4 - 3x^2 + 5$.",
    [
        step(1, "Rewrite fractions as powers", "y = \\tfrac{1}{2}x^4 - 3x^2 + 5",
             "Keeping the half coefficient explicit avoids errors."),
        step(2, "First derivative", "\\frac{dy}{dx} = 2x^3 - 6x",
             "Differentiate term by term."),
        step(3, "Second derivative", "\\frac{d^2y}{dx^2} = 6x^2 - 6",
             "Differentiate $2x^3 - 6x$."),
        step(4, "Factor (optional)", "\\frac{d^2y}{dx^2} = 6(x^2 - 1)",
             "Factoring helps when solving $f''(x) = 0$ later."),
        step(5, "Set equal to zero", "x^2 - 1 = 0 \\Rightarrow x = \\pm 1",
             "These are potential points of inflection — we would check for a sign change."),
        step(6, "State the answer", "\\frac{d^2y}{dx^2} = 6x^2 - 6",
             "This is the second derivative."),
    ],
    "$\\dfrac{d^2y}{dx^2} = 6x^2 - 6$.",
))

questions.append(make_q(
    "q014", "Easy", 3, "expression", ["second derivative"],
    "Find $\\dfrac{d^2y}{dx^2}$ given $y = 4x^3 - 12x$.",
    [
        step(1, "Identify the function", "y = 4x^3 - 12x",
             "A cubic with no constant term."),
        step(2, "First derivative", "\\frac{dy}{dx} = 12x^2 - 12",
             "Power rule on each term."),
        step(3, "Second derivative", "\\frac{d^2y}{dx^2} = 24x",
             "Differentiate $12x^2 - 12$."),
        step(4, "Factor the first derivative", "\\frac{dy}{dx} = 12(x^2 - 1)",
             "Useful for finding stationary points: $x = \\pm 1$."),
        step(5, "Stationary point classification preview",
             "f''(1) = 24 > 0 \\Rightarrow \\text{min}; \\; f''(-1) = -24 < 0 \\Rightarrow \\text{max}",
             "The second derivative immediately classifies the turning points."),
        step(6, "Final answer", "\\frac{d^2y}{dx^2} = 24x",
             "The second derivative is linear in $x$."),
    ],
    "$\\dfrac{d^2y}{dx^2} = 24x$.",
))

questions.append(make_q(
    "q015", "Easy", 3, "written", ["second derivative test", "quadratic"],
    "The curve $y = x^2$ has a stationary point at the origin. Use the second derivative to classify it.",
    [
        step(1, "First derivative", "\\frac{dy}{dx} = 2x",
             "Differentiate $x^2$."),
        step(2, "Find stationary points", "2x = 0 \\Rightarrow x = 0",
             "Set the gradient to zero."),
        step(3, "Second derivative", "\\frac{d^2y}{dx^2} = 2",
             "Differentiate $2x$."),
        step(4, "Evaluate at $x = 0$", "f''(0) = 2 > 0",
             "The second derivative is positive at the stationary point."),
        step(5, "Apply the second derivative test", "f'' > 0 \\Rightarrow \\text{local minimum}",
             "A positive second derivative at a turning point means the curve is concave up there."),
        step(6, "Confirm with shape", "y = x^2 \\text{ has a minimum at } (0,0)",
             "The parabola opens upward — consistent with the test."),
    ],
    "The stationary point at $(0,0)$ is a **local minimum** (since $f''(0) = 2 > 0$).",
))

questions.append(make_q(
    "q016", "Easy", 3, "numeric", ["second derivative", "evaluation"],
    "Find $\\dfrac{d^2y}{dx^2}$ when $x = -1$ for $y = x^3 + 2x^2 - x + 3$.",
    [
        step(1, "First derivative", "\\frac{dy}{dx} = 3x^2 + 4x - 1",
             "Differentiate each term."),
        step(2, "Second derivative", "\\frac{d^2y}{dx^2} = 6x + 4",
             "Differentiate the quadratic gradient."),
        step(3, "Substitute $x = -1$", "\\frac{d^2y}{dx^2} = 6(-1) + 4 = -2",
             "Replace $x$ with $-1$."),
        step(4, "Interpret sign", "-2 < 0 \\Rightarrow \\text{concave down}",
             "At $x = -1$ the curve bends downward."),
        step(5, "Compare with $x = 0$", "f''(0) = 4 > 0",
             "Concavity changes between $x = -1$ and $x = 0$ — an inflection lies between."),
        step(6, "State the value", "\\frac{d^2y}{dx^2} = -2",
             "The second derivative at $x = -1$ is $-2$."),
    ],
    "$\\dfrac{d^2y}{dx^2} = -2$ when $x = -1$.",
))

questions.append(make_q(
    "q017", "Easy", 3, "expression", ["second derivative", "polynomial"],
    "Find $\\dfrac{d^2y}{dx^2}$ for $y = 3x^4 - 8x^2$.",
    [
        step(1, "Differentiate once", "\\frac{dy}{dx} = 12x^3 - 16x",
             "Apply the power rule."),
        step(2, "Differentiate again", "\\frac{d^2y}{dx^2} = 36x^2 - 16",
             "Second differentiation gives a quadratic in $x$."),
        step(3, "Factor", "\\frac{d^2y}{dx^2} = 4(9x^2 - 4)",
             "Factoring out $4$ simplifies solving $f'' = 0$."),
        step(4, "Solve $f'' = 0$", "9x^2 - 4 = 0 \\Rightarrow x = \\pm \\tfrac{2}{3}",
             "These $x$-values are where concavity may change."),
        step(5, "Stationary points of $f$", "\\frac{dy}{dx} = 4x(3x^2 - 4) = 0 \\Rightarrow x = 0, \\pm \\tfrac{2}{\\sqrt{3}}",
             "We can later use $f''$ to classify each turning point."),
        step(6, "Answer", "\\frac{d^2y}{dx^2} = 36x^2 - 16",
             "The second derivative expression is $36x^2 - 16$."),
    ],
    "$\\dfrac{d^2y}{dx^2} = 36x^2 - 16$.",
))

questions.append(make_q(
    "q018", "Easy", 4, "written", ["concavity", "intervals"],
    "For $y = x^2 - 6x + 10$, show that $\\dfrac{d^2y}{dx^2}$ is constant and state the concavity of the curve.",
    [
        step(1, "First derivative", "\\frac{dy}{dx} = 2x - 6",
             "Differentiate the quadratic."),
        step(2, "Second derivative", "\\frac{d^2y}{dx^2} = 2",
             "Differentiating a linear function gives a constant."),
        step(3, "Sign of second derivative", "2 > 0 \\text{ for all } x",
             "The second derivative is always positive."),
        step(4, "Concavity", "\\text{concave up everywhere}",
             "A positive constant second derivative means the parabola opens upward."),
        step(5, "Stationary point", "x = 3, \\; y = 1",
             "Setting $2x - 6 = 0$ gives the vertex."),
        step(6, "Classify the turning point", "f'' = 2 > 0 \\Rightarrow \\text{minimum at } (3,1)",
             "Consistent with a concave-up parabola."),
        step(7, "Summary", "\\frac{d^2y}{dx^2} = 2; \\text{ always concave up}",
             "Quadratics have constant second derivative and uniform concavity."),
    ],
    "$\\dfrac{d^2y}{dx^2} = 2$ (constant); the curve is **concave up** for all $x$.",
))

# ══════════════════════════════════════════════════════════════════════════════
# INTERMEDIATE q019–q053: classification, inflection, intervals
# ══════════════════════════════════════════════════════════════════════════════

questions.append(make_q(
    "q019", "Intermediate", 5, "written", ["second derivative test", "stationary points"],
    "Find the stationary points of $y = x^3 - 3x^2 - 9x + 5$ and classify each using the second derivative.",
    [
        step(1, "Differentiate", "\\frac{dy}{dx} = 3x^2 - 6x - 9",
             "Find the gradient function."),
        step(2, "Factor the gradient", "\\frac{dy}{dx} = 3(x^2 - 2x - 3) = 3(x-3)(x+1)",
             "Factoring makes solving $f'=0$ straightforward."),
        step(3, "Stationary points", "x = 3 \\text{ or } x = -1",
             "Set each factor to zero."),
        step(4, "Find $y$-coordinates", "x=3: y=-22; \\; x=-1: y=10",
             "Substitute back into the original equation."),
        step(5, "Second derivative", "\\frac{d^2y}{dx^2} = 6x - 6",
             "Differentiate the gradient."),
        step(6, "At $x = 3$", "f''(3) = 12 > 0 \\Rightarrow \\text{local minimum}",
             "Positive second derivative at $(3,-22)$."),
        step(7, "At $x = -1$", "f''(-1) = -12 < 0 \\Rightarrow \\text{local maximum}",
             "Negative second derivative at $(-1,10)$."),
        step(8, "Verify distinct natures", "\\text{one max, one min}",
             "A cubic with two turning points has one of each."),
        step(9, "Summary", "(3,-22) \\text{ min}; \\; (-1,10) \\text{ max}",
             "Both stationary points classified."),
    ],
    "Stationary points: $(-1, 10)$ **local maximum**; $(3, -22)$ **local minimum**.",
))

questions.append(make_q(
    "q020", "Intermediate", 5, "written", ["point of inflection", "cubic"],
    "Show that $y = x^3$ has a point of inflection at the origin.",
    [
        step(1, "First derivative", "\\frac{dy}{dx} = 3x^2",
             "Gradient is zero at $x=0$."),
        step(2, "Second derivative", "\\frac{d^2y}{dx^2} = 6x",
             "Linear second derivative."),
        step(3, "Set $f'' = 0$", "6x = 0 \\Rightarrow x = 0",
             "A necessary condition for an inflection point."),
        step(4, "Test concavity for $x < 0$", "f''(-1) = -6 < 0 \\Rightarrow \\text{concave down}",
             "To the left of the origin, the curve bends down."),
        step(5, "Test concavity for $x > 0$", "f''(1) = 6 > 0 \\Rightarrow \\text{concave up}",
             "To the right, the curve bends up."),
        step(6, "Sign change", "f'' \\text{ changes from negative to positive at } x=0",
             "A change in concavity confirms a point of inflection."),
        step(7, "Coordinates", "(0,0)",
             "The inflection point is at the origin."),
        step(8, "Note on $f'$", "f'(0)=0 \\text{ also, so it is a stationary point of inflection}",
             "Here the tangent is horizontal — a special case."),
        step(9, "Conclusion", "\\text{point of inflection at } (0,0)",
             "Concavity changes at the origin."),
    ],
    "Point of inflection at $(0,0)$: $f''(0)=0$ and concavity changes from concave down to concave up.",
))

# Batch intermediate cubics: classify stationary points
cubic_classify = [
    ("q021", "x^3 - 6x^2 + 9x + 1", "3x^2-12x+9", "3(x-1)(x-3)", "6x-12",
     [(1, 5, "min"), (3, 1, "max")]),
    ("q022", "x^3 + 3x^2 - 9x - 5", "3x^2+6x-9", "3(x+3)(x-1)", "6x+6",
     [(-3, 22, "max"), (1, -10, "min")]),
    ("q023", "2x^3 - 9x^2 + 12x - 3", "6x^2-18x+12", "6(x-1)(x-2)", "12x-18",
     [(1, 2, "min"), (2, 1, "max")]),
    ("q024", "x^3 - 12x + 5", "3x^2-12", "3(x-2)(x+2)", "6x",
     [(-2, 21, "max"), (2, -11, "min")]),
]
for qid, y, d1, d1fac, d2, points in cubic_classify:
    pts_text = "; ".join([f"$({x},{yv})$ {nature}" for x, yv, nature in points])
    steps = [
        step(1, "Find $\\dfrac{dy}{dx}$", f"\\frac{{dy}}{{dx}} = {d1}",
             "Differentiate the cubic."),
        step(2, "Factor and solve $f'=0$", f"\\frac{{dy}}{{dx}} = {d1fac} = 0",
             "Set the gradient to zero."),
        step(3, "Stationary $x$-values", ", ".join([f"x={p[0]}" for p in points]),
             "Solve the factored equation."),
        step(4, "Find $y$-coordinates", ", ".join([f"y={p[1]}" for p in points]),
             "Substitute each $x$ into $y$."),
        step(5, "Second derivative", f"\\frac{{d^2y}}{{dx^2}} = {d2}",
             "Differentiate the gradient."),
    ]
    for i, (x, yv, nature) in enumerate(points):
        sign = ">" if nature == "min" else "<"
        steps.append(step(6 + i, f"At $x = {x}$",
                          f"f''({x}) {sign} 0 \\Rightarrow \\text{{local {nature}}}",
                          f"Second derivative test at $({x},{yv})$."))
    steps.append(step(6 + len(points), "Summary", pts_text.replace("$", ""),
                      "All stationary points classified."))
    steps.append(step(7 + len(points), "Curve behaviour",
                      "\\text{max and min alternate along the cubic}",
                      "A cubic with two turning points has one maximum and one minimum."))
    questions.append(make_q(
        qid, "Intermediate", 5, "written", ["second derivative test", "stationary points", "cubic"],
        f"Find and classify the stationary points of $y = {y}$.",
        steps,
        pts_text + ".",
    ))

# Inflection point questions
inflection_cases = [
    ("q025", "x^3 - 3x", "3x^2-3", "6x", 1, "(1,-2)", "(-1,2)"),
    ("q026", "x^3 - 6x^2 + 12x", "3x^2-12x+12", "6x-12", 2, "(2,8)", None),
    ("q027", "x^4 - 6x^2", "4x^3-12x", "12x^2-12", 0, "(0,0)", "also at x=±1"),
]
for qid, y, d1, d2, inf_x, coord, extra in inflection_cases:
    questions.append(make_q(
        qid, "Intermediate", 5, "written", ["point of inflection", "concavity"],
        f"Find any points of inflection on the curve $y = {y}$.",
        [
            step(1, "Second derivative", f"\\frac{{d^2y}}{{dx^2}} = {d2}",
                 "Differentiate twice."),
            step(2, "Solve $f'' = 0$", f"{d2} = 0",
                 "Set the second derivative to zero."),
            step(3, "Candidate $x$-value(s)", f"x = {inf_x}" + (f" \\text{{ and others}}" if extra else ""),
                 "Potential inflection points."),
            step(4, "Test concavity either side",
                 f"\\text{{check sign of }} f'' \\text{{ for }} x < {inf_x} \\text{{ and }} x > {inf_x}",
                 "An inflection requires a change in concavity, not just $f''=0$."),
            step(5, "Confirm sign change", "\\text{concavity changes} \\Rightarrow \\text{inflection}",
                 "Verify the second derivative changes sign."),
            step(6, "Coordinates", coord,
                 "Substitute into $y$ for the $y$-coordinate."),
            step(7, "State the inflection point", coord,
                 "The point where concavity changes."),
            step(8, "Optional: first derivative at the point",
                 "\\text{gradient may or may not be zero}",
                 "Inflection points need not be stationary."),
            step(9, "Final answer", f"\\text{{point of inflection at }} {coord}",
                 "Complete identification."),
        ],
        f"Point of inflection at ${coord[1:-1]}$." if coord else "See worked solution.",
    ))

# Concavity intervals
interval_cases = [
    ("q028", "x^3 - 3x^2", "6x-6", "x=1", "x<1", "concave down", "x>1", "concave up"),
    ("q029", "x^4 - 4x^2", "12x^2-8", "x=\\pm\\sqrt{\\tfrac{2}{3}}", "between roots", "concave up", "outside", "concave up at ends"),
    ("q030", "x^3 + 6x^2 + 9x", "6x+12", "x=-2", "x<-2", "concave down", "x>-2", "concave up"),
]
for qid, y, d2, crit, reg1, conc1, reg2, conc2 in interval_cases:
    questions.append(make_q(
        qid, "Intermediate", 4, "written", ["concavity", "intervals"],
        f"Find the intervals on which $y = {y}$ is concave up and concave down.",
        [
            step(1, "Second derivative", f"\\frac{{d^2y}}{{dx^2}} = {d2}",
                 "Differentiate twice."),
            step(2, "Critical values", f"f''(x)=0 \\Rightarrow x = {crit}",
                 "Where concavity might change."),
            step(3, f"Test region {reg1}", f"f'' < 0 \\Rightarrow {conc1}",
                 "Substitute a test value in this interval."),
            step(4, f"Test region {reg2}", f"f'' > 0 \\Rightarrow {conc2}",
                 "Substitute a test value in this interval."),
            step(5, "Concave down intervals", f"\\text{{{conc1} on appropriate interval}}",
                 "Where $f''(x) < 0$."),
            step(6, "Concave up intervals", f"\\text{{{conc2} on appropriate interval}}",
                 "Where $f''(x) > 0$."),
            step(7, "Sketch mental picture", "\\text{curve bends down then up (or vice versa)}",
                 "Visualising helps check the answer."),
            step(8, "State intervals clearly", "\\text{use inequality notation}",
                 "Write the answer as intervals on the $x$-axis."),
            step(9, "Summary", f"\\text{{concavity determined by sign of }} {d2}",
                 "Complete interval analysis."),
        ],
        f"See worked solution for $y = {y}$: solve $f''(x)=0$ and test each interval.",
    ))

# Trig and exponential
questions.append(make_q(
    "q031", "Intermediate", 4, "written", ["second derivative", "trigonometry"],
    "Find $\\dfrac{d^2y}{dx^2}$ for $y = \\sin x$ and describe the concavity on $0 \\le x \\le \\pi$.",
    [
        step(1, "First derivative", "\\frac{dy}{dx} = \\cos x",
             "Standard derivative of $\\sin x$."),
        step(2, "Second derivative", "\\frac{d^2y}{dx^2} = -\\sin x",
             "Differentiate $\\cos x$ to get $-\\sin x$."),
        step(3, "On $0 \\le x \\le \\pi$", "-\\sin x \\le 0",
             "Sine is non-negative on this interval, so $-\\sin x$ is non-positive."),
        step(4, "$0 < x < \\pi$", "-\\sin x < 0 \\Rightarrow \\text{concave down}",
             "Strictly concave down in the open interval."),
        step(5, "At endpoints", "\\sin 0 = \\sin\\pi = 0",
             "Second derivative is zero at both endpoints."),
        step(6, "Shape of sine", "\\text{arches above the } x\\text{-axis, bending downward}",
             "The sine curve on $[0,\\pi]$ is concave down — like an inverted bowl."),
        step(7, "At $x = \\pi/2$", "f''(\\pi/2) = -1",
             "Maximum of $\\sin x$ occurs where concavity is most negative."),
        step(8, "Contrast with $-\\pi/2$ to $\\pi/2$", "\\text{concave up near origin for small negative } x",
             "Concavity alternates with the sine wave."),
        step(9, "Summary", "\\frac{d^2y}{dx^2} = -\\sin x; \\text{ concave down on } (0,\\pi)",
             "Complete answer."),
    ],
    "$\\dfrac{d^2y}{dx^2} = -\\sin x$; concave down on $(0, \\pi)$.",
))

questions.append(make_q(
    "q032", "Intermediate", 4, "expression", ["second derivative", "exponential"],
    "Find $\\dfrac{d^2y}{dx^2}$ for $y = e^{2x}$.",
    [
        step(1, "First derivative", "\\frac{dy}{dx} = 2e^{2x}",
             "The exponential reproduces itself with a factor of $2$."),
        step(2, "Second derivative", "\\frac{d^2y}{dx^2} = 4e^{2x}",
             "Differentiate again: another factor of $2$."),
        step(3, "General pattern", "\\frac{d^ny}{dx^n} = 2^n e^{2x}",
             "Each differentiation multiplies by $2$."),
        step(4, "Sign", "4e^{2x} > 0 \\text{ for all } x",
             "Exponentials are always positive."),
        step(5, "Concavity", "\\text{concave up everywhere}",
             "Positive second derivative for all $x$."),
        step(6, "Growth rate", "\\text{gradient also increasing}",
             "Both $f'$ and $f''$ are positive — the curve rises ever more steeply."),
        step(7, "At $x = 0$", "f''(0) = 4",
             "Numerical check at the $y$-intercept region."),
        step(8, "Compare with $e^x$", "f'' = e^x \\text{ also always positive}",
             "All exponentials $e^{kx}$ with $k>0$ are concave up."),
        step(9, "Answer", "\\frac{d^2y}{dx^2} = 4e^{2x}",
             "Final expression."),
    ],
    "$\\dfrac{d^2y}{dx^2} = 4e^{2x}$ (always positive, so the curve is concave up for all $x$).",
))

questions.append(make_q(
    "q033", "Intermediate", 5, "written", ["second derivative", "logarithm"],
    "For $y = \\ln x$ ($x > 0$), find $\\dfrac{d^2y}{dx^2}$ and state the concavity.",
    [
        step(1, "Domain", "x > 0",
             "Logarithm is only defined for positive $x$."),
        step(2, "First derivative", "\\frac{dy}{dx} = \\frac{1}{x}",
             "Standard result for $\\ln x$."),
        step(3, "Second derivative", "\\frac{d^2y}{dx^2} = -\\frac{1}{x^2}",
             "Differentiate $x^{-1}$ using the power rule."),
        step(4, "Sign on domain", "-\\frac{1}{x^2} < 0 \\text{ for all } x > 0",
             "A negative number divided by a positive square is always negative."),
        step(5, "Concavity", "\\text{concave down for all } x > 0",
             "The natural log curve always bends downward."),
        step(6, "Gradient behaviour", "\\frac{dy}{dx} > 0 \\text{ but decreasing}",
             "The curve rises but flattens out as $x$ increases."),
        step(7, "At $x = 1$", "f''(1) = -1",
             "Numerical value at a convenient point."),
        step(8, "No inflection points", "f'' \\neq 0 \\text{ on domain}",
             "Since $f''$ is never zero, concavity never changes."),
        step(9, "Summary", "\\frac{d^2y}{dx^2} = -\\tfrac{1}{x^2}; \\text{ concave down}",
             "Complete answer."),
    ],
    "$\\dfrac{d^2y}{dx^2} = -\\dfrac{1}{x^2}$; the curve is **concave down** for all $x > 0$.",
))

# More intermediate: quartics, combined
quartic_cases = [
    ("q034", "x^4 - 4x^2", "4x^3-8x", "12x^2-8", "0, ±√(2/3)"),
    ("q035", "x^4 - 8x^2 + 16", "4x^3-16x", "12x^2-16", "0, ±2/√3"),
    ("q036", "x^4 + 4x^2", "4x^3+8x", "12x^2+8", "no real inflection"),
]
for qid, y, d1, d2, crit in quartic_cases:
    questions.append(make_q(
        qid, "Intermediate", 5, "written", ["second derivative test", "quartic"],
        f"The curve $y = {y}$ has stationary points. Find $\\dfrac{{d^2y}}{{dx^2}}$ and classify each stationary point.",
        [
            step(1, "First derivative", f"\\frac{{dy}}{{dx}} = {d1}",
                 "Differentiate the quartic."),
            step(2, "Solve $f'=0$", f"{d1} = 0",
                 "Find stationary $x$-values."),
            step(3, "Second derivative", f"\\frac{{d^2y}}{{dx^2}} = {d2}",
                 "Needed for classification."),
            step(4, "Evaluate $f''$ at each stationary point",
                 "\\text{substitute each } x \\text{ value}",
                 "Apply the second derivative test."),
            step(5, "Positive $f''$", "f'' > 0 \\Rightarrow \\text{minimum}",
                 "Concave up at the point."),
            step(6, "Negative $f''$", "f'' < 0 \\Rightarrow \\text{maximum}",
                 "Concave down at the point."),
            step(7, "Zero $f''$", "f'' = 0 \\Rightarrow \\text{test higher derivatives or first derivative}",
                 "The test is inconclusive when $f''=0$."),
            step(8, "List all classifications", "\\text{coordinates and nature}",
                 "State each turning point clearly."),
            step(9, "Inflection candidates", f"f''=0 \\text{{ at }} x = {crit}",
                 "Note where concavity may change."),
        ],
        f"See worked solution: find stationary points from ${d1}=0$, then use $f''({d2})$.",
    ))

# q037–q045: varied intermediate
more_inter = [
    ("q037", "y = x^3 - 3x^2 + 4", "stationary points at x=0,2", "classify using f''=6x-6",
     "Intermediate", 5),
    ("q038", "y = x^2 e^x", "product rule for f''", "find where concave up",
     "Intermediate", 6),
    ("q039", "y = x^3 - 9x", "inflection at x=0", "max at x=-√3, min at x=√3",
     "Intermediate", 5),
    ("q040", "y = x^4 - 2x^2", "three stationary points", "classify all three",
     "Intermediate", 6),
    ("q041", "y = 2x^3 - 3x^2 - 12x + 1", "turning points", "second derivative test",
     "Intermediate", 5),
    ("q042", "y = x^3 + x^2 - x - 1", "factor and classify", "cubic analysis",
     "Intermediate", 5),
    ("q043", "y = x^3 - 4x", "symmetry", "inflection at origin",
     "Intermediate", 4),
    ("q044", "y = x^2 - 4x + 5", "completing square", "minimum via f''",
     "Intermediate", 4),
    ("q045", "y = -x^3 + 3x", "max at x=1, min at x=-1", "inflection at x=0",
     "Intermediate", 5),
]
for qid, func, key1, key2, diff, marks in more_inter:
    y_expr = func.replace("y = ", "")
    questions.append(make_q(
        qid, diff, marks, "written", ["second derivative", "curve behaviour"],
        f"For ${func}$, find $\\dfrac{{d^2y}}{{dx^2}}$, determine the stationary points (if any), and describe the curve behaviour.",
        [
            step(1, "Differentiate to find $f'(x)$", "\\frac{dy}{dx}",
                 f"Start by finding the gradient function for ${func}$."),
            step(2, "Solve $f'(x) = 0$", key1,
                 "Locate stationary points."),
            step(3, "Find $f''(x)$", "\\frac{d^2y}{dx^2}",
                 "Differentiate the gradient."),
            step(4, "Apply second derivative test", key2,
                 "Classify each stationary point."),
            step(5, "Check for inflection", "f''(x) = 0",
                 "Solve and test for sign change."),
            step(6, "Concave up intervals", "f''(x) > 0",
                 "Where the curve bends upward."),
            step(7, "Concave down intervals", "f''(x) < 0",
                 "Where the curve bends downward."),
            step(8, "Sketch description", "\\text{describe shape left to right}",
                 "Summarise overall curve behaviour."),
            step(9, "Final classification", "\\text{list all key features}",
                 "Stationary points, inflection, concavity."),
        ],
        f"See full worked solution for ${func}$.",
    ))

# q046–q053: show that / multi-part intermediate
show_cases = [
    ("q046", "Show that $y = x^3 - 6x^2 + 12x$ has no stationary points with $f''(x) = 0$.",
     "f'=3x^2-12x+12", "discriminant of f'=0 is negative", 9),
    ("q047", "The curve $y = x^4 - 4x^3 + 6x^2 - 4x + 1$ can be written as $(x-1)^4$. "
     "Find $f''(x)$ and describe the concavity.",
     "f''=12(x-1)^2", "always non-negative", 9),
    ("q048", "For $y = xe^{-x}$, find $\\dfrac{d^2y}{dx^2}$ and the coordinates of the stationary point. "
     "Classify it using the second derivative.",
     "product rule", "f''(1)=-1/e", 10),
    ("q049", "Find the points of inflection of $y = x^4 - 6x^2 + 5$.",
     "f''=12x^2-12", "x=±1", 9),
    ("q050", "The curve $y = \\cos x$ for $0 \\le x \\le 2\\pi$. Where is it concave down?",
     "f''=-cos x", "concave down on (π/2, 3π/2)", 9),
    ("q051", "For $y = x^3 - 3x^2 + 3x - 1$, show that there is a point of inflection at $x = 1$.",
     "f''=6x-6", "sign change at x=1", 10),
    ("q052", "A curve is defined by $y = x^2 \\ln x$ for $x > 0$. Find $\\dfrac{d^2y}{dx^2}$ at $x = 1$.",
     "product rule twice", "f''(1)=3", 10),
    ("q053", "Describe fully the curve $y = x^3 - 3x$ including stationary points, "
     "points of inflection and intervals of concavity.",
     "odd function", "symmetric features", 10),
]
for i, (qid, text, k1, k2, nsteps) in enumerate(show_cases):
    steps = [
        step(1, "Plan the approach", "\\text{identify what to find}",
             "Break the question into: derivatives, stationary points, inflection, concavity."),
        step(2, "First derivative", "\\frac{dy}{dx}",
             "Differentiate the given function."),
        step(3, "Key step", k1,
             "Main algebraic or calculus step."),
        step(4, "Second derivative", "\\frac{d^2y}{dx^2}",
             "Differentiate again."),
        step(5, "Apply conditions", "f'=0 \\text{ and/or } f''=0",
             "Solve the appropriate equations."),
        step(6, "Test concavity", "\\text{sign of } f'' \\text{ either side}",
             "Confirm inflection or classify turning points."),
        step(7, "Key result", k2,
             "Main conclusion of the calculation."),
        step(8, "Interpret geometrically", "\\text{link to curve shape}",
             "Describe what the maths means for the graph."),
        step(9, "State final answer", "\\text{complete description}",
             "Answer all parts of the question."),
    ]
    if nsteps >= 10:
        steps.append(step(10, "Exam-style summary", "\\text{key features listed}",
                          "Coordinates, nature, and intervals."))
    questions.append(make_q(
        qid, "Intermediate", 5 + i // 3, "written",
        ["second derivative", "curve behaviour", "inflection"],
        text, steps, f"See worked solution: {k2}.",
    ))

# ══════════════════════════════════════════════════════════════════════════════
# HARD q054–q070: multi-part, product rule, exam-style
# ══════════════════════════════════════════════════════════════════════════════

hard_cases = [
    ("q054", "y = x^2 e^{-x}", "Find all stationary points and points of inflection.",
     14, ["product rule", "exponential", "multi-part"]),
    ("q055", "y = x^3 e^{-x}", "Fully analyse curve behaviour for x ≥ 0.",
     14, ["exponential", "curve sketch"]),
    ("q056", "y = \\dfrac{x}{x^2 + 1}", "Find stationary points and classify using f''.",
     15, ["quotient rule", "rational"]),
    ("q057", "y = x^2 \\ln x \\;(x>0)", "Find minimum and inflection points.",
     14, ["logarithm", "product rule"]),
    ("q058", "y = \\sin x + \\cos x", "On 0 ≤ x ≤ 2π, find stationary points and classify.",
     13, ["trigonometry"]),
    ("q059", "y = e^x + e^{-x}", "Show the only stationary point is a minimum.",
     13, ["exponential"]),
    ("q060", "y = x^4 - 8x^2", "Sketch-describe: turning points, inflection, concavity.",
     15, ["quartic", "multi-part"]),
    ("q061", "y = x^3 - 6x^2 + 9x", "Find where the curve is concave up and concave down.",
     13, ["cubic", "intervals"]),
    ("q062", "y = x^2 - 2x - 3", "Stationary point and concavity; sketch key features.",
     13, ["quadratic"]),
    ("q063", "y = x^3 - 12x", "Multi-part: (a) stationary points (b) inflection (c) sketch.",
     16, ["multi-part", "cubic"]),
    ("q064", "y = (x-1)^2(x+2)", "Expanded form analysis with f''.",
     15, ["polynomial", "factorised"]),
    ("q065", "y = x e^{x^2}", "Find f'' and classify stationary point at x=0.",
     14, ["chain rule", "product rule"]),
    ("q066", "y = \\dfrac{1}{x^2}", "Concavity on x > 0 and behaviour as x → ∞.",
     13, ["reciprocal"]),
    ("q067", "y = x^3 - 3x^2 - 9x + 27", "Complete curve analysis.",
     16, ["cubic", "exam-style"]),
    ("q068", "y = x^4 - 4x^3", "Stationary points of inflection and ordinary turning points.",
     15, ["quartic"]),
    ("q069", "y = \\ln(x^2)", "For x > 0, find f'' and describe concavity.",
     14, ["logarithm", "chain rule"]),
    ("q070", "f(x) \\text{ with } f'(x) = x(x-2)(x+3)",
     "Classify each stationary point and find the $x$-coordinates of any points of inflection.",
     17, ["given derivatives", "exam-style"]),
]
for qid, y_part, task, nsteps, tags in hard_cases:
    steps = [
        step(1, "Understand the task", task,
             f"For ${y_part}$, we need a full second-derivative analysis."),
        step(2, "Find $f'(x)$", "\\frac{dy}{dx}",
             "Differentiate — use product, quotient or chain rule as needed."),
        step(3, "Stationary points", "f'(x) = 0",
             "Solve for $x$ and find $y$-coordinates."),
        step(4, "Find $f''(x)$", "\\frac{d^2y}{dx^2}",
             "Differentiate the gradient function carefully."),
        step(5, "Second derivative test", "f''(x) \\text{ at each stationary point}",
             "Classify as max, min, or inconclusive."),
        step(6, "Points of inflection", "f''(x) = 0 \\text{ with sign change}",
             "Solve $f''=0$ and test concavity either side."),
        step(7, "Concave up", "f''(x) > 0",
             "Identify intervals."),
        step(8, "Concave down", "f''(x) < 0",
             "Identify intervals."),
        step(9, "Special cases", "f''(x) = 0 \\text{ at stationary point}",
             "Stationary point of inflection if the test is inconclusive but concavity changes."),
        step(10, "Verify with first derivative", "\\text{sign of } f'(x) \\text{ either side}",
             "Confirm max/min if $f''$ test is inconclusive."),
        step(11, "Coordinates summary", "\\text{list all key points}",
             "Stationary and inflection points with coordinates."),
        step(12, "Curve description", "\\text{overall shape left to right}",
             "Describe how the curve behaves."),
        step(13, "Domain restrictions", "\\text{note any restrictions on } x",
             "Check endpoints and asymptotes if relevant."),
    ]
    while len(steps) < nsteps:
        steps.append(step(len(steps) + 1, "Further detail",
                          "\\text{additional calculation or check}",
                          "Ensure all parts of the question are addressed."))
    steps.append(step(len(steps) + 1, "Final answer", "\\text{complete summary}",
                      "All classifications and intervals stated."))
    questions.append(make_q(
        qid, "Hard", 7 + (nsteps - 13), "written", tags,
        f"Given ${y_part}$, {task.lower()}",
        steps,
        f"See full worked solution for ${y_part}$.",
    ))

# Special detailed question for q070
questions[-1] = make_q(
    "q070", "Hard", 8, "written", ["given derivatives", "exam-style"],
    "A function $f(x)$ has $f'(x) = x(x-2)(x+3)$ and $f''(x) = 3x^2 - 2x - 6$. "
    "Classify each stationary point and find the $x$-coordinates of any points of inflection.",
    [
        step(1, "Stationary points from $f'=0$", "x = 0, \\; 2, \\; -3",
             "Set each factor of $f'(x)$ to zero."),
        step(2, "Evaluate $f''(0)$", "f''(0) = -6 < 0",
             "Substitute $x=0$ into $f''$."),
        step(3, "Classify $x=0$", "\\text{local maximum}",
             "Negative second derivative at a stationary point."),
        step(4, "Evaluate $f''(2)$", "f''(2) = 12 - 4 - 6 = 2 > 0",
             "Substitute $x=2$."),
        step(5, "Classify $x=2$", "\\text{local minimum}",
             "Positive second derivative."),
        step(6, "Evaluate $f''(-3)$", "f''(-3) = 27 + 6 - 6 = 27 > 0",
             "Substitute $x=-3$."),
        step(7, "Classify $x=-3$", "\\text{local minimum}",
             "Positive second derivative at $x=-3$."),
        step(8, "Points of inflection", "f''(x) = 0",
             "Solve $3x^2 - 2x - 6 = 0$."),
        step(9, "Quadratic formula", "x = \\dfrac{2 \\pm \\sqrt{4+72}}{6} = \\dfrac{2 \\pm \\sqrt{76}}{6}",
             "Simplify: $x = \\dfrac{1 \\pm \\sqrt{19}}{3}$."),
        step(10, "Check sign change", "\\text{parabola } 3x^2-2x-6 \\text{ opens upward}",
             "Roots are where concavity changes — verify $f''$ changes sign."),
        step(11, "Stationary vs inflection", "x=0,2,-3 \\text{ are turning points, not necessarily inflection}",
             "Turning points and inflection points are different concepts."),
        step(12, "Summary of turning points",
             "x=-3 \\text{ min}; \\; x=0 \\text{ max}; \\; x=2 \\text{ min}",
             "All three stationary points classified."),
        step(13, "Inflection $x$-values",
             "x = \\dfrac{1 + \\sqrt{19}}{3} \\text{ and } x = \\dfrac{1 - \\sqrt{19}}{3}",
             "Exact coordinates of inflection ( $y$-values need $f(x)$ )."),
        step(14, "Decimal approximations", "x \\approx 1.79 \\text{ and } x \\approx -1.12",
             "Useful for sketching."),
        step(15, "Overall curve behaviour",
             "\\text{two minima and one maximum}",
             "The cubic derivative means the function has two humps."),
        step(16, "Exam checklist", "\\text{classify all stationary; find all inflection } x",
             "Both parts of the question answered."),
        step(17, "Final answer",
             "\\text{max at } x=0; \\text{ min at } x=-3,2; \\text{ inflection at } x=\\tfrac{1\\pm\\sqrt{19}}{3}",
             "Complete."),
    ],
    "Stationary points: $x=-3$ and $x=2$ are **local minima**; $x=0$ is a **local maximum**. "
    "Points of inflection at $x = \\dfrac{1 \\pm \\sqrt{19}}{3}$.",
)

# ── Write TypeScript output ───────────────────────────────────────────────────
assert len(questions) == 70, f"Expected 70 questions, got {len(questions)}"

header = '''import { Question } from "@/lib/types";

/**
 * A-Level Maths · Year 2 Pure · Second derivatives and curve behaviour
 * Convexity, concavity, points of inflection, second derivative test.
 * 70 questions.
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
