#!/usr/bin/env python3
"""Generate q001–q018 for Locating roots and iteration (Year 2 Pure)."""
import json
import math

OUT = "/Users/benjaminwalpole/Wisest_Maths_V5/wisest-maths-content/src/data/questions/a-level-maths/year-2-pure/locating-roots-and-iteration-q001-q018.ts"

SUBTOPIC = "Locating roots and iteration"
SUBTOPIC_ID = "al.y2.pure.roots-iteration"


def step(n, desc, work, expl):
    return {
        "stepNumber": n,
        "description": desc,
        "workingLatex": work,
        "explanation": expl,
        "diagram": None,
    }


def make_q(suffix, difficulty, marks, answer_type, tags, text, steps, final):
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
        "questionDiagram": None,
        "workedSolution": {"steps": steps, "finalAnswer": final},
    }


questions = []

# ── q001 Easy: explain change of sign ─────────────────────────────────────────
questions.append(
    make_q(
        "q001",
        "Easy",
        4,
        "written",
        ["change of sign", "definition"],
        "Explain how the change of sign method is used to show that a root of $f(x) = 0$ lies in an interval $[a, b]$.",
        [
            step(
                1,
                "State what we need to find",
                "f(x) = 0 \\text{ has a root in } [a,b]",
                "We want to locate an $x$-value where the function crosses the $x$-axis, without finding the exact root.",
            ),
            step(
                2,
                "Evaluate at the endpoints",
                "f(a) \\text{ and } f(b)",
                "Substitute both ends of the interval into $f(x)$ to see whether the outputs are positive or negative.",
            ),
            step(
                3,
                "Check for a sign change",
                "f(a) \\cdot f(b) < 0",
                "If the two values have opposite signs, the graph must cross the $x$-axis somewhere between $a$ and $b$.",
            ),
            step(
                4,
                "Require continuity",
                "f \\text{ continuous on } [a,b]",
                "The function must be continuous on the closed interval so that it cannot 'jump' across the axis without passing through zero.",
            ),
            step(
                5,
                "Apply the Intermediate Value Theorem",
                "\\exists\\, c \\in (a,b) \\text{ with } f(c) = 0",
                "A continuous function that changes sign on $[a,b]$ is guaranteed to take every value between $f(a)$ and $f(b)$, including zero.",
            ),
            step(
                6,
                "Conclude",
                "\\text{A root lies in } (a,b)",
                "The sign change together with continuity confirms a root inside the interval, though it does not give its exact value.",
            ),
        ],
        "Evaluate $f(a)$ and $f(b)$. If $f(a)f(b) < 0$ and $f$ is continuous on $[a,b]$, then a root of $f(x)=0$ lies in $(a,b)$.",
    )
)

# ── q002 Easy: classic cubic ──────────────────────────────────────────────────
questions.append(
    make_q(
        "q002",
        "Easy",
        4,
        "written",
        ["change of sign", "cubic"],
        "Show that $f(x) = x^3 - 2x - 5$ has a root in the interval $[2, 3]$.",
        [
            step(1, "Evaluate $f(2)$", "f(2) = 2^3 - 2(2) - 5 = 8 - 4 - 5 = -1", "Substitute $x = 2$ into the cubic."),
            step(2, "Note the sign of $f(2)$", "f(2) = -1 < 0", "The function value is negative at the left endpoint."),
            step(3, "Evaluate $f(3)$", "f(3) = 3^3 - 2(3) - 5 = 27 - 6 - 5 = 16", "Substitute $x = 3$ into the cubic."),
            step(4, "Note the sign of $f(3)$", "f(3) = 16 > 0", "The function value is positive at the right endpoint."),
            step(5, "Check the product", "f(2) \\cdot f(3) = (-1)(16) = -16 < 0", "Opposite signs mean the product is negative."),
            step(6, "State continuity", "f \\text{ is a polynomial, so continuous on } [2,3]", "Polynomials are continuous everywhere."),
            step(7, "Conclude", "\\text{A root lies in } (2,3)", "By the change of sign method, a root of $f(x)=0$ lies between $2$ and $3$."),
        ],
        "Since $f(2) = -1 < 0$, $f(3) = 16 > 0$, and $f$ is continuous on $[2,3]$, a root lies in $(2,3)$.",
    )
)

# ── q003 Easy: quadratic ──────────────────────────────────────────────────────
questions.append(
    make_q(
        "q003",
        "Easy",
        3,
        "written",
        ["change of sign", "quadratic"],
        "Show that $f(x) = x^2 - 3$ has a root in the interval $[1, 2]$.",
        [
            step(1, "Evaluate $f(1)$", "f(1) = 1^2 - 3 = -2", "Substitute $x = 1$."),
            step(2, "Sign at $x = 1$", "f(1) = -2 < 0", "The output is negative."),
            step(3, "Evaluate $f(2)$", "f(2) = 2^2 - 3 = 1", "Substitute $x = 2$."),
            step(4, "Sign at $x = 2$", "f(2) = 1 > 0", "The output is positive."),
            step(5, "Product of endpoint values", "f(1) \\cdot f(2) = (-2)(1) = -2 < 0", "A sign change confirms the graph crosses the axis between $1$ and $2$."),
            step(6, "Conclude", "\\text{Root in } (1,2)", "The quadratic is continuous on $[1,2]$, so a root lies in the open interval."),
        ],
        "$f(1) = -2 < 0$ and $f(2) = 1 > 0$, so a root lies in $(1,2)$.",
    )
)

# ── q004 Easy: cubic ──────────────────────────────────────────────────────────
questions.append(
    make_q(
        "q004",
        "Easy",
        3,
        "written",
        ["change of sign", "cubic"],
        "Show that $f(x) = 2x^3 - 3x - 1$ has a root in $[1, 2]$.",
        [
            step(1, "Evaluate $f(1)$", "f(1) = 2(1)^3 - 3(1) - 1 = 2 - 3 - 1 = -2", "Substitute the left endpoint."),
            step(2, "Sign at $x = 1$", "f(1) = -2 < 0", "Negative at the left end."),
            step(3, "Evaluate $f(2)$", "f(2) = 2(8) - 6 - 1 = 16 - 7 = 9", "Substitute the right endpoint."),
            step(4, "Sign at $x = 2$", "f(2) = 9 > 0", "Positive at the right end."),
            step(5, "Check $f(1)f(2)$", "f(1)f(2) = (-2)(9) = -18 < 0", "Opposite signs give a negative product."),
            step(6, "Conclude", "\\text{Root in } (1,2)", "Continuity on $[1,2]$ together with the sign change guarantees a root inside the interval."),
        ],
        "$f(1) = -2 < 0$ and $f(2) = 9 > 0$, so a root lies in $(1,2)$.",
    )
)

# ── q005 Easy: exponential ────────────────────────────────────────────────────
questions.append(
    make_q(
        "q005",
        "Easy",
        4,
        "written",
        ["change of sign", "exponential"],
        "Show that $f(x) = e^x - 3$ has a root in the interval $[1, 2]$.",
        [
            step(1, "Evaluate $f(1)$", "f(1) = e^1 - 3 \\approx 2.718 - 3 = -0.282", "Use $e \\approx 2.718$."),
            step(2, "Sign at $x = 1$", "f(1) < 0", "The exponential curve is below $y = 3$ at $x = 1$."),
            step(3, "Evaluate $f(2)$", "f(2) = e^2 - 3 \\approx 7.389 - 3 = 4.389", "At $x = 2$, $e^2$ is well above $3$."),
            step(4, "Sign at $x = 2$", "f(2) > 0", "The function is positive at the right endpoint."),
            step(5, "Product", "f(1)f(2) < 0", "The values have opposite signs."),
            step(6, "Continuity", "e^x \\text{ is continuous for all } x", "Exponential functions are continuous on any interval."),
            step(7, "Conclude", "\\text{Root in } (1,2)", "A root of $e^x = 3$, i.e.\\ $x = \\ln 3$, lies between $1$ and $2$."),
        ],
        "$f(1) \\approx -0.282 < 0$ and $f(2) \\approx 4.389 > 0$, so a root lies in $(1,2)$.",
    )
)

# ── q006 Easy: trigonometric ──────────────────────────────────────────────────
f06a = math.sin(0.5) - 0.5
f06b = math.sin(1) - 0.5
questions.append(
    make_q(
        "q006",
        "Easy",
        4,
        "written",
        ["change of sign", "trigonometric"],
        "Show that $f(x) = \\sin x - 0.5$ has a root in the interval $[0.5, 1]$ (radians).",
        [
            step(1, "Evaluate $f(0.5)$", f"f(0.5) = \\sin(0.5) - 0.5 \\approx {math.sin(0.5):.3f} - 0.5 = {f06a:.3f}", "Use radians throughout."),
            step(2, "Sign at $x = 0.5$", f"f(0.5) \\approx {f06a:.3f} < 0", "Sine is still slightly below $0.5$ at this angle."),
            step(3, "Evaluate $f(1)$", f"f(1) = \\sin(1) - 0.5 \\approx {math.sin(1):.3f} - 0.5 = {f06b:.3f}", "Substitute $x = 1$ radian."),
            step(4, "Sign at $x = 1$", f"f(1) \\approx {f06b:.3f} > 0", "Sine has risen above $0.5$ by $x = 1$."),
            step(5, "Product", "f(0.5)f(1) < 0", "Opposite signs on the interval endpoints."),
            step(6, "Continuity", "\\sin x \\text{ is continuous on } [0.5,1]", "Sine is continuous everywhere."),
            step(7, "Conclude", "\\text{Root in } (0.5,1)", "There is an angle in $(0.5,1)$ radians where $\\sin x = 0.5$."),
        ],
        f"$f(0.5) \\approx {f06a:.3f} < 0$ and $f(1) \\approx {f06b:.3f} > 0$, so a root lies in $(0.5,1)$.",
    )
)

# ── q007 Easy: evaluate endpoints ─────────────────────────────────────────────
questions.append(
    make_q(
        "q007",
        "Easy",
        3,
        "numeric",
        ["change of sign", "cubic"],
        "For $f(x) = x^3 - x - 1$, find $f(1)$ and $f(2)$ and state whether a root lies in $[1, 2]$.",
        [
            step(1, "Evaluate $f(1)$", "f(1) = 1^3 - 1 - 1 = -1", "Substitute $x = 1$."),
            step(2, "Evaluate $f(2)$", "f(2) = 8 - 2 - 1 = 5", "Substitute $x = 2$."),
            step(3, "Compare signs", "f(1) = -1 < 0,\\quad f(2) = 5 > 0", "The function changes sign across the interval."),
            step(4, "Product", "f(1)f(2) = -5 < 0", "A negative product confirms opposite signs."),
            step(5, "Continuity", "f \\text{ is a polynomial on } [1,2]", "No breaks or asymptotes on this interval."),
            step(6, "Conclude", "\\text{Yes: a root lies in } (1,2)", "The change of sign method applies, so a root is trapped between $1$ and $2$."),
        ],
        "$f(1) = -1$, $f(2) = 5$. Since $f(1)f(2) < 0$ and $f$ is continuous on $[1,2]$, a root lies in $(1,2)$.",
    )
)

# ── q008 Easy: conditions ─────────────────────────────────────────────────────
questions.append(
    make_q(
        "q008",
        "Easy",
        3,
        "written",
        ["change of sign", "conditions"],
        "State the two conditions required for the change of sign method to guarantee a root of $f(x)=0$ in $[a,b]$.",
        [
            step(1, "First condition: continuity", "f \\text{ is continuous on } [a,b]", "The graph must be unbroken on the whole closed interval — no jumps, holes, or asymptotes inside $[a,b]$."),
            step(2, "Why continuity matters", "\\text{No gap means the curve cannot skip zero}", "Without continuity, the function could jump from negative to positive without ever equalling zero."),
            step(3, "Second condition: sign change", "f(a) \\cdot f(b) < 0", "The function values at the endpoints must have opposite signs."),
            step(4, "Interpret the sign change", "f(a) < 0 < f(b) \\text{ or } f(a) > 0 > f(b)", "One endpoint is above the axis and the other is below."),
            step(5, "Link to the graph", "\\text{The curve crosses the } x\\text{-axis between } a \\text{ and } b", "A continuous curve that goes from below to above the axis (or vice versa) must pass through zero."),
            step(6, "State both conditions", "f \\text{ continuous on } [a,b] \\text{ and } f(a)f(b) < 0", "Both are needed: neither condition alone is sufficient."),
        ],
        "Require (1) $f$ continuous on $[a,b]$ and (2) $f(a)f(b) < 0$.",
    )
)

# ── q009 Easy: asymptote failure ──────────────────────────────────────────────
questions.append(
    make_q(
        "q009",
        "Easy",
        4,
        "written",
        ["change of sign", "asymptote", "failure"],
        "Explain why the change of sign method cannot be used on $[1, 3]$ to locate a root of $f(x) = \\dfrac{1}{x-2}$.",
        [
            step(1, "Evaluate $f(1)$", "f(1) = \\frac{1}{1-2} = -1", "The left endpoint gives a negative value."),
            step(2, "Evaluate $f(3)$", "f(3) = \\frac{1}{3-2} = 1", "The right endpoint gives a positive value."),
            step(3, "Apparent sign change", "f(1) = -1 < 0,\\quad f(3) = 1 > 0", "The endpoint values do change sign."),
            step(4, "Identify the asymptote", "x = 2 \\text{ is a vertical asymptote}", "As $x \\to 2$, $|f(x)| \\to \\infty$; the function is undefined at $x = 2$."),
            step(5, "Check continuity", "f \\text{ is not continuous on } [1,3]", "The asymptote at $x = 2$ lies inside the interval, breaking continuity."),
            step(6, "Graph behaviour", "\\text{Curve jumps from } -\\infty \\text{ to } +\\infty \\text{ at } x=2", "The graph never crosses $y = 0$; it only appears to change sign because of the discontinuity."),
            step(7, "Conclude", "\\text{Method invalid — no root in } [1,3]", "In fact $f(x) = 0$ has no solution; the sign change is caused by the asymptote, not a root."),
        ],
        "Although $f(1) < 0$ and $f(3) > 0$, $f$ is not continuous on $[1,3]$ because of the vertical asymptote at $x = 2$. The method does not apply, and $f(x)=0$ has no root.",
    )
)

# ── q010 Easy: repeated root ──────────────────────────────────────────────────
questions.append(
    make_q(
        "q010",
        "Easy",
        4,
        "written",
        ["change of sign", "repeated root", "failure"],
        "For $f(x) = (x-2)^2$, find $f(1)$ and $f(3)$. Explain why the change of sign method fails to locate the root at $x = 2$ using $[1, 3]$.",
        [
            step(1, "Expand (optional)", "f(x) = x^2 - 4x + 4", "The function is a quadratic with a repeated factor."),
            step(2, "Evaluate $f(1)$", "f(1) = (1-2)^2 = 1", "Positive at the left endpoint."),
            step(3, "Evaluate $f(3)$", "f(3) = (3-2)^2 = 1", "Also positive at the right endpoint."),
            step(4, "Product", "f(1)f(3) = 1 > 0", "Both values have the same sign, so there is no sign change."),
            step(5, "Graph shape at $x = 2$", "f(x) \\geq 0 \\text{ touches the axis at } x=2", "A repeated root means the curve touches the $x$-axis but does not cross it."),
            step(6, "Why the method fails", "f(a)f(b) > 0 \\Rightarrow \\text{no sign change}", "Without opposite signs at the endpoints, the change of sign argument gives no information about a root inside the interval."),
            step(7, "Conclude", "\\text{Method fails on } [1,3]", "Even though $x = 2$ is a root, the curve stays on one side of the axis throughout $[1,3]$."),
        ],
        "$f(1) = f(3) = 1 > 0$, so $f(1)f(3) > 0$. The repeated root at $x = 2$ means the graph touches but does not cross the axis, so the change of sign method fails on $[1,3]$.",
    )
)

# ── q011 Easy: discontinuity ──────────────────────────────────────────────────
questions.append(
    make_q(
        "q011",
        "Easy",
        4,
        "written",
        ["change of sign", "discontinuity", "failure"],
        "For $f(x) = \\dfrac{1}{x}$ on $[-1, 1]$, show that $f(-1)$ and $f(1)$ have opposite signs but explain why this does not prove a root in $[-1, 1]$.",
        [
            step(1, "Evaluate $f(-1)$", "f(-1) = \\frac{1}{-1} = -1", "Negative at the left endpoint."),
            step(2, "Evaluate $f(1)$", "f(1) = \\frac{1}{1} = 1", "Positive at the right endpoint."),
            step(3, "Sign change at endpoints", "f(-1) < 0 < f(1)", "The endpoint values do have opposite signs."),
            step(4, "Locate the discontinuity", "f \\text{ undefined at } x = 0", "Division by zero breaks the function at the centre of the interval."),
            step(5, "Continuity check", "f \\text{ is not continuous on } [-1,1]", "The graph has separate branches for $x < 0$ and $x > 0$."),
            step(6, "Graph behaviour", "f(x) \\text{ never equals zero}", "The hyperbola $y = 1/x$ lies entirely below the axis for $x < 0$ and above for $x > 0$."),
            step(7, "Conclude", "\\text{Sign change does not imply a root}", "Continuity is essential: the apparent sign change is caused by the asymptote at $x = 0$, not a zero of $f$."),
        ],
        "$f(-1) = -1 < 0$ and $f(1) = 1 > 0$, but $f$ is not continuous on $[-1,1]$ because of the discontinuity at $x = 0$. No root exists, so the method cannot be applied.",
    )
)

# ── q012 Easy: rearrange to iterative form ────────────────────────────────────
questions.append(
    make_q(
        "q012",
        "Easy",
        3,
        "expression",
        ["iteration", "rearrangement"],
        "Rearrange $x^3 + 2x - 6 = 0$ into the iterative form $x_{n+1} = g(x_n)$ where $g(x) = \\sqrt[3]{6 - 2x}$.",
        [
            step(1, "Start from the equation", "x^3 + 2x - 6 = 0", "We need to isolate $x$ on one side."),
            step(2, "Rearrange to isolate $x^3$", "x^3 = 6 - 2x", "Subtract $2x$ and add $6$ to both sides."),
            step(3, "Take the cube root", "x = \\sqrt[3]{6 - 2x}", "Cube roots undo cubes, giving $x$ as a function of itself."),
            step(4, "Write the iteration", "x_{n+1} = \\sqrt[3]{6 - 2x_n}", "Replace $x$ with $x_{n+1}$ on the left and $x_n$ on the right for fixed-point iteration."),
            step(5, "Identify $g(x)$", "g(x) = \\sqrt[3]{6 - 2x}", "This is the fixed-point function whose fixed points solve the original equation."),
            step(6, "Verify (optional)", "g(x) = x \\Leftrightarrow x^3 + 2x - 6 = 0", "Fixed points of $g$ correspond exactly to roots of the original equation."),
        ],
        "$x_{n+1} = \\sqrt[3]{6 - 2x_n}$, i.e.\\ $g(x) = \\sqrt[3]{6 - 2x}$.",
    )
)

# ── q013 Intermediate: narrow interval ────────────────────────────────────────
questions.append(
    make_q(
        "q013",
        "Intermediate",
        5,
        "written",
        ["change of sign", "cubic", "interval refinement"],
        "Given $f(x) = x^3 - 4x + 1$, show a root lies in $[1, 2]$, then use $f(1.5)$ to find a smaller interval containing the root.",
        [
            step(1, "Evaluate $f(1)$", "f(1) = 1 - 4 + 1 = -2", "Negative at the left endpoint."),
            step(2, "Evaluate $f(2)$", "f(2) = 8 - 8 + 1 = 1", "Positive at the right endpoint."),
            step(3, "Root in $[1,2]$", "f(1)f(2) = -2 < 0 \\Rightarrow \\text{root in } (1,2)", "Sign change with continuity traps a root between $1$ and $2$."),
            step(4, "Evaluate $f(1.5)$", "f(1.5) = (1.5)^3 - 4(1.5) + 1 = 3.375 - 6 + 1 = -1.625", "Test the midpoint of the interval."),
            step(5, "Sign at $x = 1.5$", "f(1.5) = -1.625 < 0", "Still negative at $x = 1.5$."),
            step(6, "Compare with $f(2)$", "f(1.5) < 0 < f(2)", "The sign change now occurs between $1.5$ and $2$."),
            step(7, "Narrower interval", "f(1.5) \\cdot f(2) < 0", "The product is negative."),
            step(8, "Bisection idea", "\\text{Test an interior point to halve the bracket}", "Evaluating $f$ at an interior point replaces a wide bracket with a shorter one that still contains the root."),
            step(9, "Conclude", "\\text{Root in } (1.5, 2)", "Halving the search interval gives a root trapped in $(1.5, 2)$."),
        ],
        "Root in $(1,2)$ since $f(1) = -2 < 0$ and $f(2) = 1 > 0$. Since $f(1.5) = -1.625 < 0$, the root lies in $(1.5, 2)$.",
    )
)

# ── q014 Intermediate: choose iterative form ──────────────────────────────────
questions.append(
    make_q(
        "q014",
        "Intermediate",
        5,
        "written",
        ["iteration", "rearrangement", "convergence"],
        "For $x^3 - x - 4 = 0$, write two rearrangements $x = g(x)$ as $x_{n+1} = g(x_n)$. State which is more suitable for fixed-point iteration starting near the root.",
        [
            step(1, "Original equation", "x^3 - x - 4 = 0", "We seek rearrangements of the form $x = g(x)$."),
            step(2, "Rearrangement A", "x^3 = x + 4 \\Rightarrow x = \\sqrt[3]{x + 4}", "Isolate $x^3$ and take the cube root."),
            step(3, "Iteration A", "x_{n+1} = \\sqrt[3]{x_n + 4}", "Write in subscript form for iteration."),
            step(4, "Rearrangement B", "x = x^3 - 4", "Alternatively, move $x$ alone to the right-hand side."),
            step(5, "Iteration B", "x_{n+1} = x_n^3 - 4", "This gives a different fixed-point function."),
            step(6, "Derivative test for A", "g(x) = \\sqrt[3]{x+4},\\quad g'(x) = \\frac{1}{3(x+4)^{2/3}}", "Near the root ($x \\approx 1.8$), $|g'(x)| \\approx 0.2 < 1$."),
            step(7, "Derivative test for B", "g(x) = x^3 - 4,\\quad g'(x) = 3x^2", "Near the root, $|g'(x)| \\approx 3(1.8)^2 \\approx 9.7 > 1$."),
            step(8, "Same fixed points", "g(x) = x \\text{ for both rearrangements} \\Leftrightarrow x^3 - x - 4 = 0", "Both iterations target the same root, but convergence depends on the gradient of $g$."),
            step(9, "Convergence criterion", "|g'(x)| < 1 \\text{ near the root } \\Rightarrow \\text{convergence}", "When the magnitude of the gradient is less than $1$, errors shrink at each step."),
            step(10, "Conclude", "x_{n+1} = \\sqrt[3]{x_n + 4} \\text{ is more suitable}", "Rearrangement A satisfies $|g'(x)| < 1$ near the root; rearrangement B diverges."),
        ],
        "Rearrangements: $x_{n+1} = \\sqrt[3]{x_n + 4}$ and $x_{n+1} = x_n^3 - 4$. The cube-root form is more suitable because $|g'(x)| < 1$ near the root.",
    )
)

# ── q015 Intermediate: fixed-point iteration ──────────────────────────────────
x0 = 0.5
x1 = math.cos(x0)
x2 = math.cos(x1)
x3 = math.cos(x2)
questions.append(
    make_q(
        "q015",
        "Intermediate",
        4,
        "numeric",
        ["iteration", "fixed point", "trigonometric"],
        "Use the iteration $x_{n+1} = \\cos x_n$ with $x_0 = 0.5$ to find $x_1$ and $x_2$ (give values to 4 decimal places).",
        [
            step(1, "State the iteration", "x_{n+1} = \\cos x_n, \\quad x_0 = 0.5", "Each new value is the cosine of the previous one (radians)."),
            step(2, "Find $x_1$", f"x_1 = \\cos(0.5) \\approx {x1:.4f}", "Substitute $x_0 = 0.5$ into the formula."),
            step(3, "Find $x_2$", f"x_2 = \\cos(x_1) = \\cos({x1:.4f}) \\approx {x2:.4f}", "Use the result for $x_1$ as the next input."),
            step(4, "Use radians on the calculator", "\\cos(0.5) \\text{ with calculator in radian mode}", "Trigonometric iteration requires radian mode throughout."),
            step(5, "Fixed-point idea", "x = \\cos x \\Leftrightarrow \\text{root of } x - \\cos x = 0", "A limit of this iteration would solve $x = \\cos x$."),
            step(6, "Check convergence trend", f"x_0 = 0.5000,\\; x_1 \\approx {x1:.4f},\\; x_2 \\approx {x2:.4f}", "The values oscillate and move toward the intersection of $y = x$ and $y = \\cos x$."),
            step(7, "Next iterate (optional check)", f"x_3 = \\cos(x_2) \\approx {x3:.4f}", "Further iteration continues to close in on the fixed point."),
            step(8, "Magnitude of $g'(x)$", "g(x) = \\cos x,\\quad g'(x) = -\\sin x", "Near the root ($x \\approx 0.739$), $|g'(x)| \\approx 0.67 < 1$, so the iteration converges."),
            step(9, "State values", f"x_1 \\approx {x1:.4f},\\quad x_2 \\approx {x2:.4f}", "These are the first two iterates from the given starting value."),
        ],
        f"$x_1 \\approx {x1:.4f}$, $x_2 \\approx {x2:.4f}$.",
    )
)

# ── q016 Intermediate: logarithm ──────────────────────────────────────────────
questions.append(
    make_q(
        "q016",
        "Intermediate",
        5,
        "written",
        ["change of sign", "logarithm"],
        "Show that $f(x) = \\ln x + x - 2$ has a root in the interval $[1, 2]$.",
        [
            step(1, "Domain", "x > 0", "The natural logarithm is defined only for positive $x$; both endpoints are valid."),
            step(2, "Evaluate $f(1)$", "f(1) = \\ln 1 + 1 - 2 = 0 + 1 - 2 = -1", "At $x = 1$, the output is $-1$."),
            step(3, "Sign at $x = 1$", "f(1) = -1 < 0", "Negative at the left endpoint."),
            step(4, "Evaluate $f(2)$", "f(2) = \\ln 2 + 2 - 2 = \\ln 2 \\approx 0.693", "The logarithmic term alone is positive here."),
            step(5, "Sign at $x = 2$", "f(2) = \\ln 2 > 0", "Positive at the right endpoint."),
            step(6, "Product", "f(1)f(2) < 0", "Opposite signs confirm a sign change."),
            step(7, "Monotonicity (optional)", "f'(x) = \\frac{1}{x} + 1 > 0 \\text{ for } x > 0", "The function is strictly increasing, so there is at most one root."),
            step(8, "Continuity", "\\ln x + x - 2 \\text{ is continuous on } [1,2]", "Sums of continuous functions are continuous."),
            step(9, "Apply change of sign", "f(1)f(2) < 0 \\text{ with continuity}", "The conditions for the method are satisfied."),
            step(10, "Conclude", "\\text{Root in } (1,2)", "A solution of $\\ln x + x = 2$ lies strictly between $1$ and $2$."),
        ],
        "$f(1) = -1 < 0$ and $f(2) = \\ln 2 \\approx 0.693 > 0$, so a root lies in $(1,2)$.",
    )
)

# ── q017 Intermediate: narrow using three points ──────────────────────────────
f17_15 = 1.5**3 - 2*1.5 - 5
f17_2 = -1
f17_25 = 2.5**3 - 2*2.5 - 5
questions.append(
    make_q(
        "q017",
        "Intermediate",
        5,
        "written",
        ["change of sign", "cubic", "interval refinement"],
        "For $f(x) = x^3 - 2x - 5$, given that a root lies in $[2, 3]$, evaluate $f(2)$ and $f(2.5)$ to find a smaller interval containing the root.",
        [
            step(1, "Known bracket", "f(2) < 0,\\; f(3) > 0", "A root is already known to lie in $(2, 3)$."),
            step(2, "Evaluate $f(2)$", "f(2) = 8 - 4 - 5 = -1", "Confirm the left endpoint is negative."),
            step(3, "Evaluate $f(2.5)$", f"f(2.5) = (2.5)^3 - 2(2.5) - 5 = 15.625 - 5 - 5 = {f17_25:.3f}", "Test a point partway along the interval."),
            step(4, "Sign at $x = 2.5$", f"f(2.5) = {f17_25:.3f} > 0", "Positive at $x = 2.5$."),
            step(5, "Compare signs", "f(2) < 0 < f(2.5)", "The sign change now occurs between $2$ and $2.5$."),
            step(6, "Product", "f(2) \\cdot f(2.5) < 0", "Negative product confirms opposite signs."),
            step(7, "Continuity", "f \\text{ is a polynomial on } [2, 2.5]", "No discontinuities on the sub-interval."),
            step(8, "Why $2.5$ was chosen", "2.5 \\text{ lies between } 2 \\text{ and } 3", "Testing an interior point of the original bracket refines the interval."),
            step(9, "Conclude", "\\text{Root in } (2, 2.5)", "The root is trapped in the smaller interval $(2, 2.5)$."),
        ],
        f"$f(2) = -1 < 0$ and $f(2.5) = {f17_25:.3f} > 0$, so the root lies in $(2, 2.5)$.",
    )
)

# ── q018 Intermediate: divergent iteration ────────────────────────────────────
x0_18 = 1.2
g1 = (1 + x0_18) ** (1 / 3)
g2 = x0_18**3 - 1
questions.append(
    make_q(
        "q018",
        "Intermediate",
        6,
        "written",
        ["iteration", "divergence", "cubic"],
        "For $x^3 - x - 1 = 0$, compare the iterations $x_{n+1} = \\sqrt[3]{1 + x_n}$ and $x_{n+1} = x_n^3 - 1$ starting from $x_0 = 1.2$. Find $x_1$ for each and explain which iteration is suitable.",
        [
            step(1, "Iteration 1 setup", "x_{n+1} = \\sqrt[3]{1 + x_n}, \\quad x_0 = 1.2", "Cube-root rearrangement of $x^3 = 1 + x$."),
            step(2, "First iterate (form 1)", f"x_1 = \\sqrt[3]{{1 + 1.2}} = \\sqrt[3]{{2.2}} \\approx {g1:.4f}", "Substitute $x_0 = 1.2$."),
            step(3, "Iteration 2 setup", "x_{n+1} = x_n^3 - 1, \\quad x_0 = 1.2", "Alternative rearrangement $x = x^3 - 1$."),
            step(4, "First iterate (form 2)", f"x_1 = (1.2)^3 - 1 = 1.728 - 1 = {g2:.4f}", "Substitute $x_0 = 1.2$."),
            step(5, "Derivative of form 1", "g(x) = \\sqrt[3]{1+x},\\quad g'(x) = \\frac{1}{3(1+x)^{2/3}}", "Differentiate the cube-root function."),
            step(6, "Magnitude near root", "|g'(x)| \\approx 0.21 < 1 \\text{ near the root } x \\approx 1.32", "Small gradient magnitude means the iteration contracts toward the fixed point."),
            step(7, "Derivative of form 2", "g(x) = x^3 - 1,\\quad g'(x) = 3x^2", "Differentiate the cubic."),
            step(8, "Magnitude near root (form 2)", "|g'(x)| \\approx 3(1.32)^2 \\approx 5.2 > 1", "Large gradient means each step overshoots and the iteration diverges."),
            step(9, "Conclude", "x_{n+1} = \\sqrt[3]{1 + x_n} \\text{ is suitable}", "Only the cube-root rearrangement has $|g'(x)| < 1$ near the root, so it converges."),
        ],
        f"Form 1: $x_1 \\approx {g1:.4f}$ (convergent). Form 2: $x_1 = {g2:.4f}$ (divergent). Use $x_{{n+1}} = \\sqrt[3]{{1 + x_n}}$ because $|g'(x)| < 1$ near the root.",
    )
)

assert len(questions) == 18, f"Expected 18 questions, got {len(questions)}"

# ── Emit TypeScript ─────────────────────────────────────────────────────────────
lines = [
    'import type { Question } from "@/lib/types";',
    "",
    "/** Locating roots and iteration q001–q018 */",
    "export const batch: Question[] = ",
    json.dumps(questions, indent=2, ensure_ascii=False),
    ";",
    "",
]

with open(OUT, "w", encoding="utf-8") as f:
    f.write("\n".join(lines))

print(f"Wrote {len(questions)} questions to {OUT}")
