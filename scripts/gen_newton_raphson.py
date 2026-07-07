#!/usr/bin/env python3
"""Generate all 70 questions for Newton–Raphson (Year 2 Pure)."""
import math
import sys
from fractions import Fraction
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))
from question_ts import write_questions_ts

OUT = Path(
    "/Users/benjaminwalpole/Wisest_Maths_V5/wisest-maths-content/src/data/questions/a-level-maths/year-2-pure/newton-raphson.ts"
)

SUBTOPIC = "Newton–Raphson"
SUBTOPIC_ID = "al.y2.pure.newton-raphson"


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


def fmt_frac(x):
    fr = Fraction(x).limit_denominator(1000)
    if fr.denominator == 1:
        return str(fr.numerator)
    return f"\\dfrac{{{fr.numerator}}}{{{fr.denominator}}}"


def fmt_dec(x, dp=3):
    return f"{x:.{dp}f}"


def nr_next(x, f, fp):
    return x - f(x) / fp(x)


questions = []

# ══════════════════════════════════════════════════════════════════════════════
# EASY q001–q024: formula, geometry, one-step, f', failures, convergence
# ══════════════════════════════════════════════════════════════════════════════

questions.append(make_q(
    "q001", "Easy", 3, "written", ["Newton-Raphson", "formula"],
    "State the Newton–Raphson iterative formula for approximating a root of $f(x) = 0$.",
    [
        step(1, "Start from the tangent line", "y - f(x_n) = f'(x_n)(x - x_n)",
             "At $x = x_n$, the tangent to $y = f(x)$ has gradient $f'(x_n)$ and passes through $(x_n, f(x_n))$."),
        step(2, "Find where the tangent crosses the $x$-axis", "0 - f(x_n) = f'(x_n)(x_{n+1} - x_n)",
             "Set $y = 0$ in the tangent equation to locate where the straight line meets the horizontal axis."),
        step(3, "Rearrange for $x_{n+1}$", "x_{n+1} = x_n - \\dfrac{f(x_n)}{f'(x_n)}",
             "Solve for the $x$-coordinate of the intercept; this becomes the next approximation."),
        step(4, "Interpret the correction term", "\\dfrac{f(x_n)}{f'(x_n)} = \\text{horizontal shift along the tangent}",
             "The fraction measures how far to move along the tangent to reach the axis."),
        step(5, "Repeat the process", "x_0 \\to x_1 \\to x_2 \\to \\cdots",
             "Each new $x$-value is found by drawing a tangent at the previous point and reading off its $x$-intercept."),
        step(6, "State the formula", "x_{n+1} = x_n - \\dfrac{f(x_n)}{f'(x_n)}",
             "This is the standard Newton–Raphson iteration used at A-Level."),
    ],
    "$x_{n+1} = x_n - \\dfrac{f(x_n)}{f'(x_n)}$, provided $f'(x_n) \\neq 0$.",
))

questions.append(make_q(
    "q002", "Easy", 4, "written", ["geometric interpretation", "tangent"],
    "Describe the geometric meaning of one step of the Newton–Raphson method.",
    [
        step(1, "Choose a starting value", "x_n",
             "Begin with an approximation $x_n$ on the $x$-axis."),
        step(2, "Mark the point on the curve", "(x_n, f(x_n))",
             "Evaluate $f(x_n)$ to locate where the graph is at this $x$-value."),
        step(3, "Draw the tangent at that point", "gradient = f'(x_n)",
             "The tangent is the best local straight-line approximation to the curve."),
        step(4, "Find the tangent's $x$-intercept", "x_{n+1}",
             "The intercept is where the tangent line crosses $y = 0$."),
        step(5, "Use this as the next guess", "x_{n+1} \\text{ replaces } x_n",
             "The intercept is taken as a better estimate of the root because the tangent points toward the axis."),
        step(6, "Repeat with a new tangent", "\\text{new tangent at } (x_{n+1}, f(x_{n+1}))",
             "Each iteration replaces the curve locally with a tangent and reads off where that tangent hits the axis."),
        step(7, "Summary", "x_{n+1} = x_n - \\dfrac{f(x_n)}{f'(x_n)}",
             "Geometrically, Newton–Raphson follows tangents to the $x$-axis, refining the root estimate each time."),
    ],
    "At $x_n$, draw the tangent to $y = f(x)$. Its $x$-intercept is $x_{n+1}$; repeat to refine the root.",
))

questions.append(make_q(
    "q003", "Easy", 4, "written", ["Babylonian method", "square root"],
    "Show that applying Newton–Raphson to $f(x) = x^2 - N$ with $x_0 > 0$ gives the Babylonian (Heron's) formula $x_{n+1} = \\dfrac{1}{2}\\left(x_n + \\dfrac{N}{x_n}\\right)$.",
    [
        step(1, "Write down $f(x)$ and $f'(x)$", "f(x) = x^2 - N, \\quad f'(x) = 2x",
             "To find $\\sqrt{N}$, we solve $x^2 - N = 0$ using Newton's method."),
        step(2, "Substitute into the NR formula", "x_{n+1} = x_n - \\dfrac{x_n^2 - N}{2x_n}",
             "Replace $f(x_n)$ and $f'(x_n)$ in $x_{n+1} = x_n - f(x_n)/f'(x_n)$."),
        step(3, "Combine over a common denominator", "x_{n+1} = \\dfrac{2x_n^2 - (x_n^2 - N)}{2x_n}",
             "Write $x_n$ as $2x_n^2/(2x_n)$ so everything shares the denominator $2x_n$."),
        step(4, "Simplify the numerator", "2x_n^2 - x_n^2 + N = x_n^2 + N",
             "The $x_n^2$ terms combine, leaving $x_n^2 + N$ on top."),
        step(5, "Split the fraction", "x_{n+1} = \\dfrac{x_n^2}{2x_n} + \\dfrac{N}{2x_n} = \\dfrac{x_n}{2} + \\dfrac{N}{2x_n}",
             "Separate into two simpler fractions."),
        step(6, "Factor out $\\dfrac{1}{2}$", "x_{n+1} = \\dfrac{1}{2}\\left(x_n + \\dfrac{N}{x_n}\\right)",
             "This is the classical Babylonian square-root iteration."),
        step(7, "Interpret", "\\text{Average of } x_n \\text{ and } N/x_n",
             "Each step replaces $x_n$ by the arithmetic mean of $x_n$ and $N/x_n$, which converges rapidly to $\\sqrt{N}$."),
    ],
    "$x_{n+1} = \\dfrac{1}{2}\\left(x_n + \\dfrac{N}{x_n}\\right)$ — the Babylonian formula for $\\sqrt{N}$.",
))

questions.append(make_q(
    "q004", "Easy", 3, "written", ["convergence", "simple root"],
    "State one condition under which Newton–Raphson converges quickly to a root $\\alpha$.",
    [
        step(1, "Identify the target", "\\alpha \\text{ with } f(\\alpha) = 0",
             "We want iterates $x_n$ to approach the actual root."),
        step(2, "Simple root condition", "f'(\\alpha) \\neq 0",
             "At a simple root the curve crosses the axis with non-zero gradient, not merely touches it."),
        step(3, "Why this matters", "f'(\\alpha) \\neq 0 \\Rightarrow \\text{tangent not horizontal at the root}",
             "A non-horizontal tangent gives a well-defined intercept direction toward the root."),
        step(4, "Local convergence", "x_0 \\text{ sufficiently close to } \\alpha",
             "Newton's method is local: a good starting value in the basin of attraction is needed."),
        step(5, "Rate of convergence", "\\text{Quadratic convergence near a simple root}",
             "When $f'(\\alpha) \\neq 0$, the number of correct digits typically doubles each step."),
        step(6, "State the condition", "f'(\\alpha) \\neq 0 \\text{ and } x_0 \\text{ close to } \\alpha",
             "A simple root with a nearby starting value gives rapid Newton–Raphson convergence."),
    ],
    "Newton–Raphson converges quickly when $\\alpha$ is a simple root ($f'(\\alpha) \\neq 0$) and $x_0$ is sufficiently close to $\\alpha$.",
))

# One-step polynomial NR (exact fractions) — loop q005–q010
poly_one_step = [
    ("q005", "x^2 - 5", "2x", lambda x: x**2 - 5, lambda x: 2*x, 2, -1, 4, "quadratic"),
    ("q006", "x^2 - 2", "2x", lambda x: x**2 - 2, lambda x: 2*x, 1, -1, 2, "quadratic"),
    ("q007", "x^2 - 3", "2x", lambda x: x**2 - 3, lambda x: 2*x, 2, 1, 4, "quadratic"),
    ("q008", "x^2 - 7", "2x", lambda x: x**2 - 7, lambda x: 2*x, 3, 2, 6, "quadratic"),
    ("q009", "2x^2 - 9", "4x", lambda x: 2*x**2 - 9, lambda x: 4*x, 2, -1, 8, "quadratic"),
    ("q010", "x^3 - 2", "3x^2", lambda x: x**3 - 2, lambda x: 3*x**2, 1, -1, 3, "cubic"),
]
for qid, expr, dexpr, f, fp, x0, fx0, fpx0, tag in poly_one_step:
    x1 = nr_next(x0, f, fp)
    x1_latex = fmt_frac(x1)
    fx0_latex = fmt_frac(fx0) if fx0 < 0 else str(fx0)
    questions.append(make_q(
        qid, "Easy", 4, "numeric", ["Newton-Raphson", "one step", tag],
        f"Use one step of Newton–Raphson with $x_0 = {x0}$ to approximate a root of $f(x) = {expr}$. Give $x_1$ as an exact fraction.",
        [
            step(1, "Recall the formula", "x_{n+1} = x_n - \\dfrac{f(x_n)}{f'(x_n)}",
                 "Newton's method moves along the tangent to the $x$-axis."),
            step(2, "Differentiate", f"f'(x) = {dexpr}",
                 f"Differentiate $f(x) = {expr}$ term by term."),
            step(3, f"Evaluate at $x_0 = {x0}$",
                 f"f({x0}) = {fx0_latex}, \\quad f'({x0}) = {fpx0}",
                 "Substitute the starting value into $f$ and $f'$."),
            step(4, "Substitute into the formula",
                 f"x_1 = {x0} - \\dfrac{{({fx0_latex})}}{{{fpx0}}} = {x1_latex}",
                 "The sign of $f(x_0)$ and $f'(x_0)$ determines whether the next guess moves left or right."),
            step(5, "Simplify exactly", f"x_1 = {x1_latex}",
                 "Write the first iterate as an exact fraction."),
            step(6, "Interpret", f"x_1 = {x1_latex} \\text{{ is closer to the root}}",
                 "One Newton step refines the starting approximation toward the true root."),
        ],
        f"$x_1 = {x1_latex}$.",
    ))

# One-step decimal NR — q011–q014
dec_one_step = [
    ("q011", "x^3 - x - 1", "3x^2 - 1", lambda x: x**3 - x - 1, lambda x: 3*x**2 - 1, 2),
    ("q012", "x^3 - 2x - 5", "3x^2 - 2", lambda x: x**3 - 2*x - 5, lambda x: 3*x**2 - 2, 2),
    ("q013", "x^3 + x - 3", "3x^2 + 1", lambda x: x**3 + x - 3, lambda x: 3*x**2 + 1, 1),
    ("q014", "x^3 - 3x + 1", "3x^2 - 3", lambda x: x**3 - 3*x + 1, lambda x: 3*x**2 - 3, 2),
]
for qid, expr, dexpr, f, fp, x0 in dec_one_step:
    fx0 = f(x0)
    fpx0 = fp(x0)
    x1 = nr_next(x0, f, fp)
    questions.append(make_q(
        qid, "Easy", 4, "numeric", ["Newton-Raphson", "one step", "cubic"],
        f"Use one step of Newton–Raphson with $x_0 = {x0}$ for $f(x) = {expr}$. Give $x_1$ correct to $3$ decimal places.",
        [
            step(1, "Formula", "x_{n+1} = x_n - \\dfrac{f(x_n)}{f'(x_n)}",
                 "Apply the standard Newton–Raphson iteration."),
            step(2, "Derivative", f"f'(x) = {dexpr}",
                 f"Differentiate $f(x) = {expr}$."),
            step(3, f"Values at $x_0 = {x0}$",
                 f"f({x0}) = {fx0}, \\quad f'({x0}) = {fpx0}",
                 "Evaluate the function and its gradient at the starting point."),
            step(4, "Compute $x_1$",
                 f"x_1 = {x0} - \\dfrac{{{fmt_dec(fx0, 4)}}}{{{fpx0}}} = {fmt_dec(x1, 4)}",
                 "Substitute into the iterative formula."),
            step(5, "Round to 3 d.p.", f"x_1 = {fmt_dec(x1, 3)}",
                 "Give the answer to the required accuracy."),
            step(6, "Sense check", f"x_1 = {fmt_dec(x1, 3)} \\text{{ refines }} x_0 = {x0}",
                 "The new estimate should move toward the root near this starting value."),
        ],
        f"$x_1 = {fmt_dec(x1, 3)}$.",
    ))

# Finding f'(x) — q015–q020
questions.append(make_q(
    "q015", "Easy", 3, "expression", ["derivative", "polynomial"],
    "Given $f(x) = x^4 - 3x^2 + 2x - 1$, find $f'(x)$ for use in Newton–Raphson.",
    [
        step(1, "Differentiate term by term", "f'(x) = 4x^3 - 6x + 2",
             "Apply the power rule to each term of the quartic."),
        step(2, "Check the $x^3$ term", "4x^3",
             "The derivative of $x^4$ is $4x^3$."),
        step(3, "Check the $x^2$ term", "-6x",
             "The derivative of $-3x^2$ is $-6x$."),
        step(4, "Check the linear term", "+2",
             "The derivative of $2x$ is $2$."),
        step(5, "Constant term", "0",
             "The derivative of a constant is zero."),
        step(6, "State $f'(x)$", "f'(x) = 4x^3 - 6x + 2",
             "This expression is substituted into the Newton–Raphson formula."),
    ],
    "$f'(x) = 4x^3 - 6x + 2$.",
))

questions.append(make_q(
    "q016", "Easy", 3, "expression", ["derivative", "polynomial"],
    "Given $f(x) = 2x^3 - 5x + 4$, find $f'(x)$.",
    [
        step(1, "Differentiate", "f'(x) = 6x^2 - 5",
             "Differentiate each term using the power rule."),
        step(2, "$x^3$ term", "6x^2",
             "$2x^3$ differentiates to $6x^2$."),
        step(3, "$x$ term", "-5",
             "The derivative of $-5x$ is $-5$."),
        step(4, "Constant", "0",
             "The constant $4$ vanishes on differentiation."),
        step(5, "Simplify", "f'(x) = 6x^2 - 5",
             "Collect the surviving terms."),
        step(6, "Role in NR", "f'(x_n) \\text{ in denominator of iteration}",
             "This derivative appears in every Newton–Raphson step."),
    ],
    "$f'(x) = 6x^2 - 5$.",
))

questions.append(make_q(
    "q017", "Easy", 3, "expression", ["derivative", "polynomial"],
    "Given $f(x) = x^5 - 2x^3 + x$, find $f'(x)$.",
    [
        step(1, "Power rule on $x^5$", "5x^4",
             "Bring the power down and reduce the index by one."),
        step(2, "Power rule on $-2x^3$", "-6x^2",
             "Differentiate $-2x^3$ to get $-6x^2$."),
        step(3, "Power rule on $x$", "1",
             "The derivative of $x$ is $1$."),
        step(4, "Combine", "f'(x) = 5x^4 - 6x^2 + 1",
             "Write the full derivative."),
        step(5, "Factor (optional)", "f'(x) = (x^2 - 1)(5x^2 - 1) + \\cdots",
             "Factoring can help locate where $f'(x) = 0$, which stops Newton's method."),
        step(6, "State answer", "f'(x) = 5x^4 - 6x^2 + 1",
             "This is required for Newton–Raphson on the quintic."),
    ],
    "$f'(x) = 5x^4 - 6x^2 + 1$.",
))

questions.append(make_q(
    "q018", "Easy", 3, "expression", ["derivative", "exponential"],
    "Given $f(x) = e^{2x} - 5x$, find $f'(x)$ for Newton–Raphson.",
    [
        step(1, "Differentiate $e^{2x}$", "\\dfrac{d}{dx}(e^{2x}) = 2e^{2x}",
             "For $e^{kx}$, the derivative is $k e^{kx}$ by the chain rule."),
        step(2, "Differentiate $-5x$", "-5",
             "The linear term differentiates to its coefficient."),
        step(3, "Combine", "f'(x) = 2e^{2x} - 5",
             "Add the derivative of each term."),
        step(4, "Check at a sample point", "f'(0) = 2(1) - 5 = -3",
             "Substituting $x = 0$ gives a quick arithmetic check."),
        step(5, "Note always positive exponential part", "2e^{2x} > 0 \\text{ for all } x",
             "The exponential term is always positive; $f'$ can still change sign because of $-5$."),
        step(6, "State $f'(x)$", "f'(x) = 2e^{2x} - 5",
             "Use this in $x_{n+1} = x_n - f(x_n)/f'(x_n)$."),
    ],
    "$f'(x) = 2e^{2x} - 5$.",
))

questions.append(make_q(
    "q019", "Easy", 3, "expression", ["derivative", "logarithm"],
    "Given $f(x) = \\ln x - x + 2$, find $f'(x)$ (domain $x > 0$).",
    [
        step(1, "Differentiate $\\ln x$", "\\dfrac{1}{x}",
             "The derivative of $\\ln x$ is $1/x$ for $x > 0$."),
        step(2, "Differentiate $-x$", "-1",
             "The linear term gives $-1$."),
        step(3, "Constant term", "0",
             "The $+2$ differentiates to zero."),
        step(4, "Combine", "f'(x) = \\dfrac{1}{x} - 1",
             "Write the derivative as a single expression."),
        step(5, "Domain reminder", "x > 0",
             "Both $f$ and $f'$ require $x$ to be positive."),
        step(6, "State answer", "f'(x) = \\dfrac{1}{x} - 1",
             "This is substituted into the Newton–Raphson formula on $(0, \\infty)$."),
    ],
    "$f'(x) = \\dfrac{1}{x} - 1$ for $x > 0$.",
))

questions.append(make_q(
    "q020", "Easy", 3, "expression", ["derivative", "trigonometric"],
    "Given $f(x) = \\sin x - \\dfrac{x}{2}$, find $f'(x)$.",
    [
        step(1, "Differentiate $\\sin x$", "\\cos x",
             "The derivative of $\\sin x$ is $\\cos x$."),
        step(2, "Differentiate $x/2$", "\\dfrac{1}{2}",
             "The derivative of $\\dfrac{x}{2}$ is $\\dfrac{1}{2}$."),
        step(3, "Combine with sign", "f'(x) = \\cos x - \\dfrac{1}{2}",
             "Subtract the derivative of the linear term."),
        step(4, "Check at $x = 0$", "f'(0) = 1 - \\dfrac{1}{2} = \\dfrac{1}{2}",
             "A quick substitution verifies the expression."),
        step(5, "Role in NR", "f'(x_n) \\text{ must be non-zero}",
             "If $f'(x_n) = 0$, Newton's method cannot proceed at that step."),
        step(6, "State answer", "f'(x) = \\cos x - \\dfrac{1}{2}",
             "Use this when iterating with Newton–Raphson on the transcendental equation."),
    ],
    "$f'(x) = \\cos x - \\dfrac{1}{2}$.",
))

questions.append(make_q(
    "q021", "Easy", 4, "written", ["failure", "zero derivative"],
    "Explain why Newton–Raphson fails at a starting value $x_0$ if $f'(x_0) = 0$.",
    [
        step(1, "Recall the formula", "x_{n+1} = x_n - \\dfrac{f(x_n)}{f'(x_n)}",
             "The derivative appears in the denominator of each Newton step."),
        step(2, "Horizontal tangent", "f'(x_0) = 0 \\Rightarrow \\text{tangent is horizontal}",
             "Zero gradient means the tangent line is parallel to the $x$-axis."),
        step(3, "No $x$-intercept (unless on axis)", "\\text{Horizontal tangent may not cross } y = 0",
             "If the tangent is horizontal and $f(x_0) \\neq 0$, it never meets the $x$-axis."),
        step(4, "Division by zero", "f'(x_0) = 0 \\Rightarrow \\dfrac{f(x_0)}{f'(x_0)} \\text{ undefined}",
             "The iterative formula breaks down because we cannot divide by zero."),
        step(5, "Geometric picture", "\\text{Tangent does not point toward a root}",
             "Without a finite intercept, there is no next iterate from the tangent construction."),
        step(6, "Conclusion", "\\text{Choose a different } x_0",
             "Pick a starting value where the tangent is not horizontal, i.e.\\ $f'(x_0) \\neq 0$."),
    ],
    "If $f'(x_0) = 0$, the tangent is horizontal, the formula divides by zero, and no valid next iterate exists.",
))

questions.append(make_q(
    "q022", "Easy", 4, "written", ["failure", "poor starting value"],
    "Give one reason why a poor choice of $x_0$ can cause Newton–Raphson to fail or diverge.",
    [
        step(1, "Newton is a local method", "x_0 \\text{ must lie in the basin of attraction}",
             "Convergence is only guaranteed near the root, not from every starting point."),
        step(2, "Far starting value", "x_0 \\text{ far from } \\alpha \\Rightarrow \\text{tangent may miss the root}",
             "A tangent drawn far from the root can intercept the axis at an unhelpful location."),
        step(3, "Jump to wrong root", "\\text{Multiple roots } \\Rightarrow \\text{may converge elsewhere}",
             "The method follows the local tangent, which may lead toward a different root."),
        step(4, "Oscillation", "x_n \\text{ may bounce between values}",
             "Poor $x_0$ can cause iterates to alternate without approaching any root."),
        step(5, "Divergence", "|x_n| \\to \\infty",
             "In some cases iterates move increasingly far from the root."),
        step(6, "Practical advice", "\\text{Use a graph or sign-change interval to choose } x_0",
             "A sketch or change-of-sign argument helps pick a sensible starting value near the target root."),
    ],
    "A poor $x_0$ may lie outside the basin of attraction, causing divergence, oscillation, or convergence to the wrong root.",
))

questions.append(make_q(
    "q023", "Easy", 3, "written", ["convergence", "simple root"],
    "The root $\\alpha$ of $f(x) = 0$ satisfies $f(\\alpha) = 0$ and $f'(\\alpha) = 4$. Explain why Newton–Raphson is expected to converge quickly near $\\alpha$.",
    [
        step(1, "Simple root", "f'(\\alpha) = 4 \\neq 0",
             "A non-zero derivative at the root means the curve crosses the axis at a finite angle."),
        step(2, "Tangent direction", "\\text{Tangent at nearby points points toward } \\alpha",
             "Near a simple root, tangents have intercepts that pull iterates inward."),
        step(3, "Quadratic convergence", "\\text{Error roughly squares each step}",
             "Close to a simple root, Newton's method typically doubles correct digits per iteration."),
        step(4, "Compare to bisection", "\\text{Newton: fast; bisection: steady but slow}",
             "Newton trades robustness for speed when conditions are favourable."),
        step(5, "Need a good $x_0$", "x_0 \\text{ close enough to } \\alpha",
             "Fast convergence still requires a starting value in the local convergence zone."),
        step(6, "Conclusion", "f'(\\alpha) \\neq 0 \\Rightarrow \\text{rapid local convergence}",
             "The simple-root condition is the key reason Newton–Raphson is so efficient near $\\alpha$."),
    ],
    "Because $f'(\\alpha) \\neq 0$, $\\alpha$ is a simple root and Newton–Raphson has quadratic convergence for $x_0$ sufficiently close to $\\alpha$.",
))

questions.append(make_q(
    "q024", "Easy", 4, "numeric", ["Newton-Raphson", "one step", "quadratic"],
    "Use one Newton–Raphson step with $x_0 = 3$ on $f(x) = x^2 - 10$. Give $x_1$ as an exact fraction.",
    [
        step(1, "Differentiate", "f'(x) = 2x",
             "The derivative of $x^2 - 10$ is $2x$."),
        step(2, "Evaluate at $x_0 = 3$", "f(3) = -1, \\quad f'(3) = 6",
             "Substitute $x_0 = 3$ into $f$ and $f'$."),
        step(3, "Apply the formula", "x_1 = 3 - \\dfrac{-1}{6} = 3 + \\dfrac{1}{6}",
             "Subtracting a negative fraction moves the estimate to the right."),
        step(4, "Simplify", "x_1 = \\dfrac{19}{6}",
             "Combine over a common denominator."),
        step(5, "Decimal check", "\\dfrac{19}{6} \\approx 3.167",
             "This is close to $\\sqrt{10} \\approx 3.162$."),
        step(6, "State $x_1$", "x_1 = \\dfrac{19}{6}",
             "The exact first iterate is $\\dfrac{19}{6}$."),
    ],
    "$x_1 = \\dfrac{19}{6}$.",
))

# ══════════════════════════════════════════════════════════════════════════════
# INTERMEDIATE q025–q050: two/three steps, transcendental, multi-part, oscillation
# ══════════════════════════════════════════════════════════════════════════════

def make_two_step(qid, expr, dexpr, f, fp, x0, tag, dp=3):
    x1 = nr_next(x0, f, fp)
    x2 = nr_next(x1, f, fp)
    return make_q(
        qid, "Intermediate", 5, "numeric", ["Newton-Raphson", "two steps", tag],
        f"Use Newton–Raphson with $x_0 = {x0}$ on $f(x) = {expr}$. Find $x_1$ and $x_2$, correct to ${dp}$ decimal places.",
        [
            step(1, "Formula and derivative", f"f'(x) = {dexpr}",
                 "State the Newton formula and differentiate $f$."),
            step(2, f"First iteration from $x_0 = {x0}$",
                 f"f({x0}) = {fmt_dec(f(x0), 6)}, \\; f'({x0}) = {fmt_dec(fp(x0), 6)}",
                 "Evaluate $f$ and $f'$ at the starting value."),
            step(3, "Compute $x_1$",
                 f"x_1 = {fmt_dec(x1, 6)} \\approx {fmt_dec(x1, dp)}",
                 "Substitute into $x_{n+1} = x_n - f(x_n)/f'(x_n)$."),
            step(4, f"Second iteration from $x_1$",
                 f"f({fmt_dec(x1, 6)}) = {fmt_dec(f(x1), 6)}, \\; f'({fmt_dec(x1, 6)}) = {fmt_dec(fp(x1), 6)}",
                 "Use $x_1$ as the input for the next Newton step."),
            step(5, "Compute $x_2$",
                 f"x_2 = {fmt_dec(x2, 6)} \\approx {fmt_dec(x2, dp)}",
                 "The second iterate refines the approximation further."),
            step(6, "Compare with $x_0$",
                 f"x_0 = {x0}, \\; x_1 = {fmt_dec(x1, dp)}, \\; x_2 = {fmt_dec(x2, dp)}",
                 "Each step should move closer to the root."),
            step(7, "Accuracy note",
                 f"|x_2 - x_1| \\approx {fmt_dec(abs(x2 - x1), 4)}",
                 "When successive iterates agree to the required d.p., the method has effectively converged."),
            step(8, "State answers",
                 f"x_1 = {fmt_dec(x1, dp)}, \\quad x_2 = {fmt_dec(x2, dp)}",
                 f"Both iterates rounded to {dp} decimal places."),
        ],
        f"$x_1 = {fmt_dec(x1, dp)}$, $x_2 = {fmt_dec(x2, dp)}$.",
    )

two_step_specs = [
    ("q025", "x^3 - 3x - 1", "3x^2 - 3", lambda x: x**3 - 3*x - 1, lambda x: 3*x**2 - 3, 2, "cubic"),
    ("q026", "x^3 - 2x - 5", "3x^2 - 2", lambda x: x**3 - 2*x - 5, lambda x: 3*x**2 - 2, 2, "cubic"),
    ("q027", "x^3 + x - 1", "3x^2 + 1", lambda x: x**3 + x - 1, lambda x: 3*x**2 + 1, 1, "cubic"),
    ("q028", "x^3 - x^2 - 1", "3x^2 - 2x", lambda x: x**3 - x**2 - 1, lambda x: 3*x**2 - 2*x, 1, "cubic"),
    ("q029", "x^2 - 5", "2x", lambda x: x**2 - 5, lambda x: 2*x, 2, "quadratic"),
    ("q030", "2x^3 - 3x - 1", "6x^2 - 3", lambda x: 2*x**3 - 3*x - 1, lambda x: 6*x**2 - 3, 1, "cubic"),
    ("q031", "x^3 - 6x + 2", "3x^2 - 6", lambda x: x**3 - 6*x + 2, lambda x: 3*x**2 - 6, 2, "cubic"),
    ("q032", "x^4 - 3x - 1", "4x^3 - 3", lambda x: x**4 - 3*x - 1, lambda x: 4*x**3 - 3, 1, "quartic"),
]
for spec in two_step_specs:
    questions.append(make_two_step(*spec))

# Transcendental two-step — q033–q036
questions.append(make_q(
    "q033", "Intermediate", 5, "numeric", ["Newton-Raphson", "exponential"],
    "Use Newton–Raphson with $x_0 = 1$ on $f(x) = e^x - 3$. Find $x_1$ and $x_2$ correct to $3$ decimal places.",
    [
        step(1, "Set up", "f(x) = e^x - 3, \\quad f'(x) = e^x",
             "The derivative of $e^x$ is $e^x$."),
        step(2, "First step at $x_0 = 1$", "f(1) = e - 3 \\approx -0.282, \\; f'(1) = e \\approx 2.718",
             "Evaluate at the starting point using $e \\approx 2.718$."),
        step(3, "Compute $x_1$", "x_1 = 1 - \\dfrac{e-3}{e} \\approx 1.104",
             "Substitute into the Newton formula."),
        step(4, "Second step", "f(1.104) \\approx -0.051, \\; f'(1.104) \\approx 3.016",
             "Re-evaluate $f$ and $f'$ at $x_1$."),
        step(5, "Compute $x_2$", "x_2 \\approx 1.121",
             "A second Newton step refines toward $\\ln 3 \\approx 1.099$."),
        step(6, "Compare", "x_0 = 1, \\; x_1 \\approx 1.104, \\; x_2 \\approx 1.121",
             "Track how the iterates approach the root."),
        step(7, "Note rapid improvement", "|x_2 - \\ln 3| < |x_1 - \\ln 3|",
             "Newton's method typically converges quickly for simple roots."),
        step(8, "Final values", "x_1 = 1.104, \\; x_2 = 1.121",
             "Answers to $3$ decimal places."),
        step(9, "Further iteration would refine", "x_3 \\approx 1.099",
             "One more step would give $\\ln 3$ to greater accuracy."),
    ],
    "$x_1 = 1.104$, $x_2 = 1.121$ (3 d.p.).",
))

x0, x1, x2 = 1.5, None, None
f = lambda x: math.log(x) + x - 2
fp = lambda x: 1/x + 1
x1 = nr_next(x0, f, fp)
x2 = nr_next(x1, f, fp)
questions.append(make_q(
    "q034", "Intermediate", 5, "numeric", ["Newton-Raphson", "logarithm"],
    "Use Newton–Raphson with $x_0 = 1.5$ on $f(x) = \\ln x + x - 2$. Find $x_1$ and $x_2$ correct to $3$ decimal places.",
    [
        step(1, "Derivative", "f'(x) = \\dfrac{1}{x} + 1",
             "Differentiate $\\ln x + x - 2$ term by term."),
        step(2, "At $x_0 = 1.5$", f"f(1.5) = {fmt_dec(f(x0), 4)}, \\; f'(1.5) = {fmt_dec(fp(x0), 4)}",
             "Evaluate at the starting value ($x > 0$ required)."),
        step(3, "First iterate", f"x_1 = {fmt_dec(x1, 4)}",
             "Apply the Newton formula once."),
        step(4, "At $x_1$", f"f({fmt_dec(x1, 4)}) = {fmt_dec(f(x1), 4)}, \\; f'({fmt_dec(x1, 4)}) = {fmt_dec(fp(x1), 4)}",
             "Substitute $x_1$ into $f$ and $f'$."),
        step(5, "Second iterate", f"x_2 = {fmt_dec(x2, 4)}",
             "Second Newton step."),
        step(6, "Round", f"x_1 = {fmt_dec(x1, 3)}, \\; x_2 = {fmt_dec(x2, 3)}",
             "Give answers to $3$ decimal places."),
        step(7, "Sense check", "\\text{Root near } x = 1",
             "Since $f(1) = -1 < 0$ and $f(2) > 0$, the root lies between $1$ and $2$."),
        step(8, "Convergence", f"x_2 = {fmt_dec(x2, 3)} \\text{{ closer to root}}",
             "Successive iterates move toward the solution."),
    ],
    f"$x_1 = {fmt_dec(x1, 3)}$, $x_2 = {fmt_dec(x2, 3)}$.",
))

f_sin = lambda x: math.sin(x) - 0.25
fp_sin = lambda x: math.cos(x)
x0 = 0.5
x1s = nr_next(x0, f_sin, fp_sin)
x2s = nr_next(x1s, f_sin, fp_sin)
questions.append(make_q(
    "q035", "Intermediate", 5, "numeric", ["Newton-Raphson", "trigonometric"],
    "Use Newton–Raphson with $x_0 = 0.5$ (radians) on $f(x) = \\sin x - 0.25$. Find $x_1$ and $x_2$ correct to $3$ decimal places.",
    [
        step(1, "Setup", "f'(x) = \\cos x",
             "Differentiate $\\sin x - 0.25$ to get $\\cos x$."),
        step(2, "At $x_0 = 0.5$", f"f(0.5) = {fmt_dec(f_sin(x0), 4)}, \\; f'(0.5) = {fmt_dec(fp_sin(x0), 4)}",
             "Use radians throughout."),
        step(3, "$x_1$", f"x_1 = {fmt_dec(x1s, 4)}",
             "First Newton iterate."),
        step(4, "At $x_1$", f"f({fmt_dec(x1s, 4)}) = {fmt_dec(f_sin(x1s), 4)}",
             "Re-evaluate the function at $x_1$."),
        step(5, "$x_2$", f"x_2 = {fmt_dec(x2s, 4)}",
             "Second iterate."),
        step(6, "3 d.p. answers", f"x_1 = {fmt_dec(x1s, 3)}, \\; x_2 = {fmt_dec(x2s, 3)}",
             "Round to the required accuracy."),
        step(7, "Interpretation", "\\sin x = 0.25",
             "We are approximating an angle whose sine is $0.25$."),
        step(8, "Check", f"x_2 \\approx {fmt_dec(x2s, 3)} \\text{{ near }} \\arcsin(0.25)",
             "The result should be consistent with the inverse sine."),
    ],
    f"$x_1 = {fmt_dec(x1s, 3)}$, $x_2 = {fmt_dec(x2s, 3)}$.",
))

f_cos = lambda x: math.cos(x) - x
fp_cos = lambda x: -math.sin(x) - 1
x0 = 0.8
x1c = nr_next(x0, f_cos, fp_cos)
x2c = nr_next(x1c, f_cos, fp_cos)
questions.append(make_q(
    "q036", "Intermediate", 5, "numeric", ["Newton-Raphson", "transcendental"],
    "Use Newton–Raphson with $x_0 = 0.8$ on $f(x) = \\cos x - x$. Find $x_1$ and $x_2$ correct to $3$ decimal places.",
    [
        step(1, "Derivative", "f'(x) = -\\sin x - 1",
             "Differentiate $\\cos x - x$."),
        step(2, "At $x_0 = 0.8$", f"f(0.8) = {fmt_dec(f_cos(x0), 4)}, \\; f'(0.8) = {fmt_dec(fp_cos(x0), 4)}",
             "Evaluate at the starting point."),
        step(3, "$x_1$", f"x_1 = {fmt_dec(x1c, 4)}",
             "First Newton step toward the Dottie number $\\alpha \\approx 0.739$."),
        step(4, "Second step", f"x_2 = {fmt_dec(x2c, 4)}",
             "Continue iterating."),
        step(5, "3 d.p.", f"x_1 = {fmt_dec(x1c, 3)}, \\; x_2 = {fmt_dec(x2c, 3)}",
             "Round both answers."),
        step(6, "Known root", "\\alpha \\approx 0.739 \\text{ satisfies } \\cos\\alpha = \\alpha",
             "This famous fixed point lies in $(0,1)$."),
        step(7, "Convergence type", "f'(\\alpha) = -\\sin\\alpha - 1 < 0",
             "Negative gradient at the root gives cobweb-style convergence."),
        step(8, "Compare iterates", f"x_2 = {fmt_dec(x2c, 3)} \\text{{ nearer }} 0.739",
             "Each step closes in on the fixed point."),
    ],
    f"$x_1 = {fmt_dec(x1c, 3)}$, $x_2 = {fmt_dec(x2c, 3)}$.",
))

# Multi-part: locate root + NR — q037–q038
questions.append(make_q(
    "q037", "Intermediate", 7, "written", ["change of sign", "Newton-Raphson", "multi-part"],
    "$f(x) = x^3 - 2x - 5$.\n\n(a) Show that a root lies in $[2, 3]$.\n\n(b) Use Newton–Raphson with $x_0 = 2$ to find $x_1$, correct to $3$ decimal places.",
    [
        step(1, "Part (a): evaluate $f(2)$", "f(2) = 8 - 4 - 5 = -1 < 0",
             "Substitute the left endpoint."),
        step(2, "Evaluate $f(3)$", "f(3) = 27 - 6 - 5 = 16 > 0",
             "Substitute the right endpoint."),
        step(3, "Sign change", "f(2) \\cdot f(3) < 0",
             "Opposite signs confirm a root in $(2,3)$ by continuity."),
        step(4, "Part (b): differentiate", "f'(x) = 3x^2 - 2",
             "Newton's method needs the derivative."),
        step(5, "At $x_0 = 2$", "f(2) = -1, \\; f'(2) = 10",
             "Evaluate at the given starting value."),
        step(6, "Compute $x_1$", "x_1 = 2 - \\dfrac{-1}{10} = 2.1",
             "One Newton step from $x_0 = 2$."),
        step(7, "3 d.p.", "x_1 = 2.100",
             "State the answer to three decimal places."),
        step(8, "Link parts", "\\text{Root in } (2,3) \\text{ and } x_1 = 2.1 \\text{ refines toward it}",
             "The sign-change interval justifies choosing $x_0 = 2$ near the root."),
        step(9, "Summary", "\\text{(a) Root in } (2,3); \\text{ (b) } x_1 = 2.100",
             "Complete answer to both parts."),
    ],
    "(a) $f(2) = -1 < 0$, $f(3) = 16 > 0$, so a root lies in $(2,3)$. (b) $x_1 = 2.100$.",
))

questions.append(make_q(
    "q038", "Intermediate", 7, "written", ["change of sign", "Newton-Raphson", "multi-part"],
    "$f(x) = x^3 + x - 1$.\n\n(a) Show that $f(x) = 0$ has a root in $[0, 1]$.\n\n(b) Use Newton–Raphson with $x_0 = 1$ to find $x_1$ and $x_2$, correct to $3$ decimal places.",
    [
        step(1, "Part (a): $f(0)$", "f(0) = -1 < 0",
             "At $x = 0$ the cubic is negative."),
        step(2, "$f(1)$", "f(1) = 1 > 0",
             "At $x = 1$ the cubic is positive."),
        step(3, "Conclude (a)", "\\text{Root in } (0,1)",
             "Continuous $f$ with a sign change traps a root in the open interval."),
        step(4, "Part (b): $f'(x)$", "f'(x) = 3x^2 + 1",
             "The derivative is always positive, so $f'(x_n) \\neq 0$ always."),
        step(5, "From $x_0 = 1$", "x_1 = 1 - \\dfrac{1}{4} = 0.75",
             "First Newton iterate."),
        step(6, "From $x_1 = 0.75$", "x_2 \\approx 0.694",
             "Second iterate, computed numerically."),
        step(7, "3 d.p.", "x_1 = 0.750, \\; x_2 = 0.694",
             "Round to three decimal places."),
        step(8, "Check interval", "0.694 \\in (0,1)",
             "The iterates remain in the bracket from part (a)."),
        step(9, "Summary", "\\text{(a) Root in } (0,1); \\text{ (b) } x_1 = 0.750,\\; x_2 = 0.694",
             "Full solution to the multi-part question."),
    ],
    "(a) $f(0) < 0$, $f(1) > 0$, so a root lies in $(0,1)$. (b) $x_1 = 0.750$, $x_2 = 0.694$.",
))

# Oscillation and poor choice — q039–q040
questions.append(make_q(
    "q039", "Intermediate", 5, "written", ["failure", "oscillation"],
    "For $f(x) = x^3 - 2x + 2$, explain why Newton–Raphson with $x_0 = 0$ may produce oscillating iterates.",
    [
        step(1, "Compute $f'(x)$", "f'(x) = 3x^2 - 2",
             "The derivative controls the slope of each tangent."),
        step(2, "Evaluate near $x_0 = 0$", "f(0) = 2, \\; f'(0) = -2",
             "At the origin the function is above the axis with negative gradient."),
        step(3, "First step", "x_1 = 0 - \\dfrac{2}{-2} = 1",
             "The first iterate jumps to $x = 1$."),
        step(4, "Second step from $x_1 = 1$", "f(1) = 1, \\; f'(1) = 1 \\Rightarrow x_2 = 0",
             "From $x = 1$ the method returns to $x = 0$."),
        step(5, "Oscillation", "x_0 = 0 \\to x_1 = 1 \\to x_2 = 0 \\to \\cdots",
             "The iterates alternate between $0$ and $1$ without converging."),
        step(6, "Geometric reason", "\\text{Tangents overshoot and bounce}",
             "Each tangent intercept lands on the opposite side, causing a 2-cycle."),
        step(7, "Remedy", "\\text{Choose } x_0 \\text{ closer to the actual root}",
             "A better starting value avoids this periodic behaviour."),
        step(8, "General lesson", "\\text{NR can cycle without converging}",
             "Oscillation is a known failure mode for poorly chosen $x_0$."),
    ],
    "With $x_0 = 0$, Newton iterates alternate $0 \\leftrightarrow 1$ because tangents overshoot, producing a 2-cycle (oscillation).",
))

questions.append(make_q(
    "q040", "Intermediate", 5, "written", ["failure", "divergence"],
    "The equation $x^3 - 3x + 1 = 0$ has a root near $x = 2$. Explain why starting Newton–Raphson at $x_0 = -3$ might fail to find this root.",
    [
        step(1, "Multiple roots", "f(x) = 0 \\text{ has three real roots}",
             "A cubic can have more than one root; Newton follows the local tangent."),
        step(2, "Evaluate at $x_0 = -3$", "f(-3) = -27 + 9 + 1 = -17",
             "The function is negative far to the left."),
        step(3, "Derivative at $x_0$", "f'(-3) = 27 - 3 = 24",
             "The tangent slope is positive and steep."),
        step(4, "Tangent intercept", "x_1 = -3 + \\dfrac{17}{24} \\approx -2.29",
             "The first step moves rightward but may not head toward the root near $2$."),
        step(5, "Local basin", "\\text{Each root has its own attraction zone}",
             "Newton converges to whichever root its iterates are drawn toward."),
        step(6, "Wrong basin", "x_0 = -3 \\text{ likely converges to the negative root}",
             "Starting far left typically finds the root near $x \\approx -1.88$, not $x \\approx 2$."),
        step(7, "Practical fix", "\\text{Use sign change on } [1,3] \\text{ and } x_0 = 2",
             "Bracket the desired root and start nearby."),
        step(8, "Conclusion", "\\text{Poor } x_0 \\Rightarrow \\text{wrong root or slow progress}",
             "Newton is local; a distant $x_0$ may converge elsewhere."),
    ],
    "Starting at $x_0 = -3$ lies in the basin of attraction of a different root; Newton will not find the root near $x = 2$.",
))

# Three iterations to 3–4 d.p. — q041–q044
def make_three_step(qid, expr, dexpr, f, fp, x0, tag, dp=3):
    xs = [x0]
    for _ in range(3):
        xs.append(nr_next(xs[-1], f, fp))
    x1, x2, x3 = xs[1], xs[2], xs[3]
    return make_q(
        qid, "Intermediate", 6, "numeric", ["Newton-Raphson", "three steps", tag],
        f"Apply Newton–Raphson to $f(x) = {expr}$ with $x_0 = {x0}$. Find $x_1$, $x_2$, and $x_3$ correct to ${dp}$ decimal places.",
        [
            step(1, "Derivative", f"f'(x) = {dexpr}",
                 "Differentiate before iterating."),
            step(2, "$x_0$ to $x_1$", f"x_1 = {fmt_dec(x1, dp)}",
                 f"First Newton step from $x_0 = {x0}$."),
            step(3, "$x_1$ to $x_2$", f"x_2 = {fmt_dec(x2, dp)}",
                 "Second iteration."),
            step(4, "$x_2$ to $x_3$", f"x_3 = {fmt_dec(x3, dp)}",
                 "Third iteration."),
            step(5, "Monitor convergence", f"|x_3 - x_2| = {fmt_dec(abs(x3 - x2), 5)}",
                 "Successive differences shrink as the method converges."),
            step(6, "Compare all iterates",
                 f"x_0 = {x0},\\; x_1 = {fmt_dec(x1, dp)},\\; x_2 = {fmt_dec(x2, dp)},\\; x_3 = {fmt_dec(x3, dp)}",
                 "List the sequence of approximations."),
            step(7, "Accuracy", f"x_3 = {fmt_dec(x3, dp)} \\text{{ ({dp} d.p.)}}",
                 "State the third iterate to the required accuracy."),
            step(8, "Comment", "\\text{Typically } |x_{n+1} - \\alpha| \\ll |x_n - \\alpha|",
                 "Near a simple root, errors decrease very rapidly."),
            step(9, "Final answer",
                 f"x_1 = {fmt_dec(x1, dp)},\\; x_2 = {fmt_dec(x2, dp)},\\; x_3 = {fmt_dec(x3, dp)}",
                 "All three iterates to the required d.p."),
        ],
        f"$x_1 = {fmt_dec(x1, dp)}$, $x_2 = {fmt_dec(x2, dp)}$, $x_3 = {fmt_dec(x3, dp)}$.",
    )

for spec in [
    ("q041", "x^3 - 3x - 1", "3x^2 - 3", lambda x: x**3 - 3*x - 1, lambda x: 3*x**2 - 3, 2, "cubic"),
    ("q042", "x^3 - x - 1", "3x^2 - 1", lambda x: x**3 - x - 1, lambda x: 3*x**2 - 1, 1, "cubic"),
    ("q043", "x^3 - 5x + 1", "3x^2 - 5", lambda x: x**3 - 5*x + 1, lambda x: 3*x**2 - 5, 2, "cubic"),
    ("q044", "x^2 - 3", "2x", lambda x: x**2 - 3, lambda x: 2*x, 2, "quadratic"),
]:
    questions.append(make_three_step(*spec))

# Babylonian applications — q045–q046
questions.append(make_q(
    "q045", "Intermediate", 5, "numeric", ["Babylonian method", "square root"],
    "Use one step of the Babylonian formula with $N = 50$ and $x_0 = 7$ to estimate $\\sqrt{50}$. Give $x_1$ correct to $4$ decimal places.",
    [
        step(1, "Babylonian formula", "x_{n+1} = \\dfrac{1}{2}\\left(x_n + \\dfrac{N}{x_n}\\right)",
             "This is Newton–Raphson applied to $f(x) = x^2 - N$."),
        step(2, "Compute $N/x_0$", "50/7 \\approx 7.1429",
             "Divide $N$ by the current estimate."),
        step(3, "Average", "x_1 = \\dfrac{1}{2}(7 + 50/7) = \\dfrac{99}{14}",
             "Take the arithmetic mean of $x_0$ and $N/x_0$."),
        step(4, "Decimal value", "x_1 \\approx 7.0714",
             "Evaluate the fraction numerically."),
        step(5, "Compare with $\\sqrt{50}$", "\\sqrt{50} = 5\\sqrt{2} \\approx 7.0711",
             "One Babylonian step is already very accurate."),
        step(6, "Why it works", "f(x) = x^2 - N, \\; f'(x) = 2x",
             "Newton on this $f$ reproduces the Babylonian iteration."),
        step(7, "4 d.p. answer", "x_1 = 7.0714",
             "Round to four decimal places."),
        step(8, "Remark", "\\text{Quadratic convergence for square roots}",
             "The Babylonian method is one of the fastest manual root-finding schemes."),
    ],
    "$x_1 = 7.0714$.",
))

questions.append(make_q(
    "q046", "Intermediate", 5, "numeric", ["Babylonian method", "square root"],
    "Starting with $x_0 = 2$, apply the Babylonian formula twice to estimate $\\sqrt{7}$. Give $x_2$ correct to $4$ decimal places.",
    [
        step(1, "First step", "x_1 = \\dfrac{1}{2}\\left(2 + \\dfrac{7}{2}\\right) = \\dfrac{11}{4} = 2.75",
             "Average $x_0$ with $N/x_0$."),
        step(2, "Second step setup", "N/x_1 = 7/(11/4) = 28/11",
             "Divide $N$ by the updated estimate."),
        step(3, "Second step", "x_2 = \\dfrac{1}{2}\\left(\\dfrac{11}{4} + \\dfrac{28}{11}\\right) = \\dfrac{163}{44}",
             "Average again."),
        step(4, "Decimal", "x_2 \\approx 2.7045",
             "Convert to decimal form."),
        step(5, "Exact root", "\\sqrt{7} \\approx 2.6458",
             "Compare with the true value."),
        step(6, "Note", "x_2 = 2.7045 \\text{ overshoots slightly}",
             "Even Newton-type methods need a few steps for full accuracy."),
        step(7, "Third step would improve", "x_3 \\approx 2.6460",
             "Another iteration corrects the small error."),
        step(8, "4 d.p. answer", "x_2 = 2.7045",
             "State $x_2$ to four decimal places as requested."),
    ],
    "$x_2 = 2.7045$.",
))

# Comparison and exam style — q047–q050
questions.append(make_q(
    "q047", "Intermediate", 5, "written", ["Newton-Raphson", "comparison", "fixed-point"],
    "State one advantage and one disadvantage of Newton–Raphson compared with simple fixed-point iteration $x_{n+1} = g(x_n)$.",
    [
        step(1, "Advantage: speed", "\\text{Quadratic convergence near a simple root}",
             "Newton typically doubles correct digits per step when $f'(\\alpha) \\neq 0$."),
        step(2, "Advantage detail", "|x_{n+1} - \\alpha| \\approx C|x_n - \\alpha|^2",
             "Errors shrink much faster than the linear factor $|g'(\\alpha)|$ of fixed-point methods."),
        step(3, "Disadvantage: derivative needed", "f'(x) \\text{ must be computed each step}",
             "Fixed-point iteration only needs $g(x)$, which may be simpler."),
        step(4, "Disadvantage: local", "x_0 \\text{ must be chosen carefully}",
             "Newton can diverge or find the wrong root; fixed-point methods also need $|g'(\\alpha)| < 1$ but may be more forgiving."),
        step(5, "Disadvantage: $f' = 0$", "f'(x_n) = 0 \\text{ stops the method}",
             "Horizontal tangents break Newton; fixed-point has its own failure modes."),
        step(6, "When to prefer Newton", "\\text{Smooth } f,\\; f'(\\alpha) \\neq 0,\\; good x_0",
             "Newton excels when high accuracy is needed quickly."),
        step(7, "When to prefer fixed-point", "g(x) \\text{ easy to evaluate, derivative awkward}",
             "If $f'$ is messy but a rearrangement $x = g(x)$ is simple, fixed-point may be easier."),
        step(8, "Summary",
             "\\text{Advantage: fast; Disadvantage: needs } f' \\text{ and good } x_0",
             "Both methods have trade-offs in exam contexts."),
    ],
    "**Advantage:** quadratic (very fast) convergence near a simple root. **Disadvantage:** requires $f'(x)$ each step and a well-chosen $x_0$.",
))

questions.append(make_q(
    "q048", "Intermediate", 5, "written", ["geometric interpretation", "tangent"],
    "Sketch reasoning (no graph required): for $f(x) = x^2 - 2$ and $x_0 = 1$, explain how the tangent at $(1, f(1))$ gives $x_1 = \\dfrac{3}{2}$.",
    [
        step(1, "Point on curve", "(1, -1)",
             "At $x_0 = 1$, $f(1) = 1 - 2 = -1$, so the point is one unit below the axis."),
        step(2, "Gradient", "f'(1) = 2",
             "The tangent has slope $2$ at $x = 1$."),
        step(3, "Tangent equation", "y + 1 = 2(x - 1)",
             "Use point-gradient form through $(1,-1)$."),
        step(4, "Set $y = 0$", "1 = 2(x - 1)",
             "The $x$-intercept satisfies $y = 0$."),
        step(5, "Solve", "x = 1 + \\dfrac{1}{2} = \\dfrac{3}{2}",
             "The intercept is at $x = \\dfrac{3}{2}$."),
        step(6, "NR formula check", "x_1 = 1 - \\dfrac{-1}{2} = \\dfrac{3}{2}",
             "The algebraic formula gives the same result."),
        step(7, "Toward $\\sqrt{2}$", "\\sqrt{2} \\approx 1.414",
             "$\\dfrac{3}{2} = 1.5$ is closer to $\\sqrt{2}$ than $x_0 = 1$."),
        step(8, "Geometric summary", "\\text{Tangent at } (1,-1) \\text{ hits axis at } \\dfrac{3}{2}",
             "This is the geometric meaning of one Newton step."),
    ],
    "The tangent at $(1,-1)$ with slope $2$ crosses the $x$-axis at $x = \\dfrac{3}{2}$, which equals $x_1$.",
))

questions.append(make_q(
    "q049", "Intermediate", 6, "numeric", ["Newton-Raphson", "exponential"],
    "Solve $xe^x = 2$ using Newton–Raphson on $f(x) = xe^x - 2$ with $x_0 = 1$. Find $x_1$ and $x_2$ correct to $4$ decimal places.",
    [
        step(1, "Product rule", "f'(x) = e^x + xe^x = e^x(1 + x)",
             "Differentiate $xe^x - 2$ using the product rule."),
        step(2, "At $x_0 = 1$", "f(1) = e - 2 \\approx 0.718, \\; f'(1) = 2e \\approx 5.437",
             "Evaluate at the starting point."),
        step(3, "$x_1$", "x_1 = 1 - \\dfrac{e-2}{2e} \\approx 0.8680",
             "First Newton iterate."),
        step(4, "At $x_1$", "f(0.868) \\approx 0.045, \\; f'(0.868) \\approx 4.32",
             "Re-evaluate for the second step."),
        step(5, "$x_2$", "x_2 \\approx 0.8577",
             "Second iterate."),
        step(6, "4 d.p.", "x_1 = 0.8680, \\; x_2 = 0.8577",
             "Round to four decimal places."),
        step(7, "Check", "0.858 \\times e^{0.858} \\approx 2",
             "Substitute back into the original equation."),
        step(8, "Convergence", "|x_2 - x_1| \\approx 0.010",
             "The iterates are settling toward the solution."),
        step(9, "Answer", "x_1 = 0.8680, \\; x_2 = 0.8577",
             "Both values to $4$ d.p."),
    ],
    "$x_1 = 0.8680$, $x_2 = 0.8577$.",
))

questions.append(make_q(
    "q050", "Intermediate", 6, "written", ["Newton-Raphson", "cubic", "multi-part"],
    "$f(x) = x^3 - 4x + 1$.\n\n(a) Show there is a root in $[0, 1]$.\n\n(b) Explain why $f'(x) = 0$ for some $x$ in $(0,1)$ does not prevent Newton–Raphson from working with $x_0 = 0.5$.\n\n(c) Find $x_1$ with $x_0 = 0.5$, correct to $3$ d.p.",
    [
        step(1, "Part (a): $f(0)$", "f(0) = 1 > 0",
             "The constant term is positive."),
        step(2, "$f(1)$", "f(1) = 1 - 4 + 1 = -2 < 0",
             "Sign change across $[0,1]$."),
        step(3, "Conclude (a)", "\\text{Root in } (0,1)",
             "By continuity and change of sign."),
        step(4, "Part (b): $f'(x) = 3x^2 - 4$", "f'(x) = 0 \\Rightarrow x = \\dfrac{2}{\\sqrt{3}}",
             "Turning points of $f$ exist, but we need $f'(x_0) \\neq 0$ at the iterate used."),
        step(5, "At $x_0 = 0.5$", "f'(0.5) = 0.75 - 4 = -3.25 \\neq 0",
             "The starting value is not a stationary point."),
        step(6, "Clarify", "f'(\\xi) = 0 \\text{ somewhere} \\not\\Rightarrow f'(x_0) = 0",
             "Having a zero derivative somewhere on $(0,1)$ is different from $f'(x_0) = 0$."),
        step(7, "Part (c): $f(0.5)$", "f(0.5) = 0.125 - 2 + 1 = -0.875",
             "Evaluate at the starting point."),
        step(8, "Compute $x_1$", "x_1 = 0.5 - \\dfrac{-0.875}{-3.25} \\approx 0.231",
             "One Newton step."),
        step(9, "Answer", "\\text{(a) Root in } (0,1); \\text{ (b) } f'(0.5) \\neq 0; \\text{ (c) } x_1 = 0.231",
             "Complete solution."),
    ],
    "(a) $f(0) > 0$, $f(1) < 0$, root in $(0,1)$. (b) $f'(0.5) = -3.25 \\neq 0$, so NR proceeds. (c) $x_1 = 0.231$.",
))

# ══════════════════════════════════════════════════════════════════════════════
# HARD q051–q070: divergence, deep failure, 4-step, challenge multi-part
# ══════════════════════════════════════════════════════════════════════════════

questions.append(make_q(
    "q051", "Hard", 7, "written", ["failure", "zero derivative", "stationary point"],
    "$f(x) = x^3 - 3x^2 + 3$.\n\n(a) Show that $f$ has a stationary point at $x = 2$.\n\n(b) Explain why Newton–Raphson with $x_0 = 2$ cannot proceed.\n\n(c) Suggest a valid starting value near a root of $f(x) = 0$.",
    [
        step(1, "Part (a): differentiate", "f'(x) = 3x^2 - 6x",
             "Find the derivative to locate stationary points."),
        step(2, "Solve $f'(x) = 0$", "3x(x - 2) = 0 \\Rightarrow x = 0, 2",
             "Set the derivative equal to zero."),
        step(3, "Confirm $x = 2$", "f'(2) = 12 - 12 = 0",
             "Verify the stationary point at $x = 2$."),
        step(4, "Part (b): value at $x_0 = 2$", "f(2) = 8 - 12 + 3 = -1 \\neq 0",
             "The stationary point is not a root."),
        step(5, "Horizontal tangent", "f'(2) = 0 \\Rightarrow \\text{tangent horizontal}",
             "The tangent at $x = 2$ is parallel to the $x$-axis."),
        step(6, "Division by zero", "x_1 = 2 - \\dfrac{f(2)}{f'(2)} \\text{ undefined}",
             "Newton's formula fails because $f'(2) = 0$."),
        step(7, "Part (c): locate a root", "f(0) = 3 > 0, \\; f(1) = 1 > 0, \\; f(3) = 27 - 27 + 3 = 3 > 0",
             "Test values to find where $f$ changes sign."),
        step(8, "Try negative", "f(-1) = -1 - 3 + 3 = -1 < 0",
             "A sign change occurs between $x = -1$ and $x = 0$."),
        step(9, "Suggest $x_0$", "x_0 = -0.5 \\text{ (or any value with } f'(x_0) \\neq 0 \\text{ near the root)}",
             "Choose a starting point near the root in $(-1,0)$ where the tangent is not horizontal."),
        step(10, "Check $f'(-0.5)$", "f'(-0.5) = 0.75 + 3 = 3.75 \\neq 0",
             "Verify the derivative is non-zero at the suggested start."),
        step(11, "Summary", "\\text{(a) Stationary at } x=2; \\text{ (b) } f'(2)=0; \\text{ (c) e.g. } x_0=-0.5",
             "Complete answer to all parts."),
    ],
    "(a) $f'(2) = 0$. (b) $f'(2) = 0$ makes the NR formula undefined. (c) Use e.g.\\ $x_0 = -0.5$ near the root in $(-1,0)$.",
))

questions.append(make_q(
    "q052", "Hard", 7, "written", ["failure", "divergence"],
    "For $f(x) = \\arctan x$ and $x_0 = 1.5$, explain why Newton–Raphson iterates can diverge.",
    [
        step(1, "Setup", "f'(x) = \\dfrac{1}{1 + x^2}",
             "The derivative of $\\arctan x$ is always positive and decreasing."),
        step(2, "Newton formula", "x_{n+1} = x_n - (1 + x_n^2)\\arctan(x_n)",
             "Substitute $f$ and $f'$ into the iteration."),
        step(3, "At $x_0 = 1.5$", "f(1.5) \\approx 0.983, \\; f'(1.5) = 1/3.25 \\approx 0.308",
             "Evaluate at the starting point."),
        step(4, "Large correction", "x_1 = 1.5 - 0.983/0.308 \\approx -1.69",
             "The first step overshoots far to the left of the root at $x = 0$."),
        step(5, "Subsequent behaviour", "x_1 < 0 \\Rightarrow \\text{ further large jumps}",
             "Negative starting values for the next step can produce even larger corrections."),
        step(6, "Magnitude grows", "|x_n| \\to \\infty",
             "Iterates can increase without bound — classic divergence."),
        step(7, "Inflection and curvature", "\\arctan x \\text{ has decreasing gradient but NR still overshoots}",
             "Even smooth functions can diverge if $x_0$ is outside the basin of attraction."),
        step(8, "Only root", "f(x) = 0 \\Leftrightarrow x = 0",
             "The sole root is at the origin, but iterates from $x_0 = 1.5$ move away."),
        step(9, "Remedy", "x_0 \\in (-1, 1) \\text{ typically converges}",
             "Choose $x_0$ closer to $0$ within the convergence region."),
        step(10, "Lesson", "\\text{NR is not globally convergent}",
             "Always check that iterates are approaching, not escaping, the expected root."),
    ],
    "From $x_0 = 1.5$, Newton overshoots to large negative values and iterates diverge ($|x_n| \\to \\infty$) instead of converging to the root $x = 0$.",
))

questions.append(make_q(
    "q053", "Hard", 6, "written", ["failure", "oscillation", "cubic"],
    "Show that Newton–Raphson applied to $f(x) = x^3 - 5x + 1$ with $x_0 = 0$ produces $x_1 = 0.2$ and $x_2 = 0.1996\\ldots$, but explain why starting at $x_0 = \\sqrt{5/3}$ would fail.",
    [
        step(1, "Derivative", "f'(x) = 3x^2 - 5",
             "Needed for every Newton step."),
        step(2, "At $x_0 = 0$", "f(0) = 1, \\; f'(0) = -5",
             "The origin is not a root but the derivative is non-zero."),
        step(3, "$x_1$", "x_1 = 0 - \\dfrac{1}{-5} = 0.2",
             "First iterate is $0.2$."),
        step(4, "$x_2$", "x_2 = 0.2 - \\dfrac{f(0.2)}{f'(0.2)} \\approx 0.1996",
             "Second iterate barely changes — near convergence to a nearby root."),
        step(5, "Stationary point", "f'(x) = 0 \\Rightarrow x = \\pm\\sqrt{5/3}",
             "Solve $3x^2 - 5 = 0$ for turning points."),
        step(6, "At $x_0 = \\sqrt{5/3}$", "f'(x_0) = 0",
             "Starting at a turning point gives a horizontal tangent."),
        step(7, "Failure", "x_1 \\text{ undefined}",
             "Division by $f'(x_0) = 0$ stops the method immediately."),
        step(8, "Distinction", "x_0 = 0 \\text{ works; } x_0 = \\sqrt{5/3} \\text{ fails}",
             "A zero derivative at the start — not merely somewhere on the domain — causes failure."),
        step(9, "General point", "f'(\\xi) = 0 \\not\\Leftrightarrow \\text{ NR fails}",
             "Only $f'(x_n) = 0$ at the current iterate blocks the next step."),
        step(10, "Practical check", "f'(x_0) \\neq 0 \\text{ before iterating}",
             "Always verify the starting value is not a stationary point."),
    ],
    "$x_1 = 0.2$, $x_2 \\approx 0.200$; but $x_0 = \\sqrt{5/3}$ gives $f'(x_0) = 0$, so Newton cannot proceed.",
))

questions.append(make_q(
    "q054", "Hard", 8, "written", ["failure", "multiple roots"],
    "$f(x) = x^3 - 6x^2 + 11x - 6 = (x-1)(x-2)(x-3)$.\n\n(a) State the three roots.\n\n(b) With $x_0 = 0$, find $x_1$ and state which root the iteration is heading toward.\n\n(c) With $x_0 = 4$, find $x_1$ and state which root is approached.",
    [
        step(1, "Part (a): factorise", "f(x) = (x-1)(x-2)(x-3)",
             "The cubic splits into linear factors."),
        step(2, "Roots", "\\alpha_1 = 1,\\; \\alpha_2 = 2,\\; \\alpha_3 = 3",
             "Set each factor to zero."),
        step(3, "Derivative", "f'(x) = 3x^2 - 12x + 11",
             "Differentiate for Newton's formula."),
        step(4, "Part (b): at $x_0 = 0$", "f(0) = -6, \\; f'(0) = 11",
             "Evaluate below the smallest root."),
        step(5, "$x_1$ from $0$", "x_1 = 0 + \\dfrac{6}{11} \\approx 0.545",
             "First iterate is between $0$ and $1$."),
        step(6, "Basin of root $1$", "x_1 \\approx 0.545 \\Rightarrow \\text{ converges to } \\alpha_1 = 1",
             "Starting left of $1$ typically finds the root at $x = 1$."),
        step(7, "Part (c): at $x_0 = 4$", "f(4) = 64 - 96 + 44 - 6 = 6, \\; f'(4) = 48 - 48 + 11 = 11",
             "Evaluate to the right of the largest root."),
        step(8, "$x_1$ from $4$", "x_1 = 4 - \\dfrac{6}{11} \\approx 3.455",
             "First step moves leftward."),
        step(9, "Basin of root $3$", "x_1 \\approx 3.455 \\Rightarrow \\text{ converges to } \\alpha_3 = 3",
             "Starting right of $3$ leads to the root at $x = 3$."),
        step(10, "Voronoi intuition", "\\text{Each root has a basin of attraction}",
             "Newton converges to whichever root its iterates fall toward."),
        step(11, "Exam tip", "\\text{Bracket the desired root before choosing } x_0",
             "Use change of sign on an interval containing only the target root."),
        step(12, "Summary", "\\text{(a) } 1,2,3; \\text{ (b) } x_1 \\approx 0.545 \\to 1; \\text{ (c) } x_1 \\approx 3.455 \\to 3",
             "Complete solution."),
    ],
    "(a) Roots $1$, $2$, $3$. (b) $x_1 \\approx 0.545$, heading to root $1$. (c) $x_1 \\approx 3.455$, heading to root $3$.",
))

questions.append(make_q(
    "q055", "Hard", 6, "written", ["convergence", "repeated root"],
    "Explain why Newton–Raphson converges only linearly (not quadratically) if $f'(\\alpha) = 0$ at a root $\\alpha$ (a repeated root).",
    [
        step(1, "Repeated root", "f(x) = (x - \\alpha)^k g(x), \\; k \\geq 2",
             "At a repeated root the curve touches the axis without crossing cleanly."),
        step(2, "Derivative at $\\alpha$", "f'(\\alpha) = 0",
             "A repeated root forces $f'(\\alpha) = 0$."),
        step(3, "Taylor expansion near $\\alpha$", "f(x) \\approx \\dfrac{f''(\\alpha)}{2}(x - \\alpha)^2",
             "Near the root, $f$ behaves like a quadratic in $(x - \\alpha)$."),
        step(4, "Newton error relation", "x_{n+1} - \\alpha \\approx C(x_n - \\alpha)^2 \\text{ only if } f'(\\alpha) \\neq 0",
             "Quadratic convergence requires a simple root."),
        step(5, "When $f'(\\alpha) = 0$", "x_{n+1} - \\alpha \\approx k_n (x_n - \\alpha) \\text{ with } k_n \\not\\to 0 \\text{ as fast}",
             "The error multiplier does not square each step — convergence is linear at best."),
        step(6, "Geometric picture", "\\text{Tangent parallel to axis near } \\alpha",
             "Near a repeated root tangents are nearly horizontal, giving tiny corrections."),
        step(7, "Slow approach", "\\text{Many steps needed for high accuracy}",
             "Exam questions often warn about repeated roots for this reason."),
        step(8, "Modified Newton", "x_{n+1} = x_n - \\dfrac{f(x_n)f'(x_n)}{[f'(x_n)]^2 - f(x_n)f''(x_n)}",
             "Advanced variants restore quadratic speed, but A-Level uses standard NR."),
        step(9, "Simple-root test", "f'(\\alpha) \\neq 0 \\Leftrightarrow \\text{quadratic convergence}",
             "Always check whether the target root is simple."),
        step(10, "Conclusion", "f'(\\alpha) = 0 \\Rightarrow \\text{at most linear convergence}",
             "Repeated roots slow Newton–Raphson dramatically."),
    ],
    "If $f'(\\alpha) = 0$ (repeated root), tangents are nearly flat at $\\alpha$ and errors shrink linearly, not quadratically.",
))

# Four-step iterations — q056–q060
def make_four_step(qid, expr, dexpr, f, fp, x0, tag, dp=4):
    xs = [x0]
    for _ in range(4):
        xs.append(nr_next(xs[-1], f, fp))
    vals = [fmt_dec(x, dp) for x in xs[1:]]
    steps = [
        step(1, "Set up", f"f(x) = {expr}, \\quad f'(x) = {dexpr}",
             "State the function and its derivative."),
        step(2, "Iterate from $x_0$", f"x_0 = {x0}",
             "Record the starting value."),
    ]
    for i in range(1, 5):
        steps.append(step(
            i + 2, f"Compute $x_{i}$",
            f"x_{i} = {vals[i-1]}",
            f"Newton step {i} from $x_{{{i-1}}}$.",
        ))
    steps.extend([
        step(7, "Convergence check", f"|x_4 - x_3| = {fmt_dec(abs(xs[4] - xs[3]), 6)}",
             "Successive iterates should agree to the required accuracy."),
        step(8, "Sequence", ",\\; ".join(f"x_{i} = {vals[i-1]}" for i in range(1, 5)),
             "List all four iterates."),
        step(9, "Comment", "\\text{Quadratic convergence near a simple root}",
             "Each step typically adds correct digits rapidly."),
        step(10, "Final", f"x_4 = {vals[3]}",
             "The fourth iterate to ${dp}$ d.p."),
    ])
    return make_q(
        qid, "Hard", 8, "numeric", ["Newton-Raphson", "four steps", tag],
        f"Apply Newton–Raphson to $f(x) = {expr}$ with $x_0 = {x0}$. Find $x_1$ through $x_4$ correct to ${dp}$ decimal places.",
        steps,
        ", ".join(f"$x_{i} = {vals[i-1]}$" for i in range(1, 5)) + ".",
    )

for spec in [
    ("q056", "x^3 - 3x - 1", "3x^2 - 3", lambda x: x**3 - 3*x - 1, lambda x: 3*x**2 - 3, 2, "cubic"),
    ("q057", "x^3 - 2x - 5", "3x^2 - 2", lambda x: x**3 - 2*x - 5, lambda x: 3*x**2 - 2, 2, "cubic"),
    ("q058", "x^3 + x - 1", "3x^2 + 1", lambda x: x**3 + x - 1, lambda x: 3*x**2 + 1, 1, "cubic"),
    ("q059", "x^4 - 8x + 1", "4x^3 - 8", lambda x: x**4 - 8*x + 1, lambda x: 4*x**3 - 8, 2, "quartic"),
    ("q060", "x^3 - 5x + 2", "3x^2 - 5", lambda x: x**3 - 5*x + 2, lambda x: 3*x**2 - 5, 2, "cubic"),
]:
    questions.append(make_four_step(*spec))

# Challenge multi-part and transcendental — q061–q070
questions.append(make_q(
    "q061", "Hard", 9, "written", ["change of sign", "Newton-Raphson", "multi-part", "cubic"],
    "$f(x) = 2x^3 - 9x^2 + 12x - 3$.\n\n(a) Show that $f(x) = 0$ has a root in $[0, 1]$.\n\n(b) Show that $f'(x) > 0$ on $[2, 3]$.\n\n(c) Use Newton–Raphson with $x_0 = 2.5$ to find $x_1$ and $x_2$, correct to $4$ d.p.\n\n(d) Explain why the result in (b) supports stable iteration on $[2, 3]$.",
    [
        step(1, "Part (a): $f(0)$", "f(0) = -3 < 0",
             "Substitute the left endpoint."),
        step(2, "$f(1)$", "f(1) = 2 - 9 + 12 - 3 = 2 > 0",
             "Substitute the right endpoint."),
        step(3, "Sign change", "f(0) \\cdot f(1) < 0",
             "Opposite signs on a continuous polynomial guarantee a root in $(0,1)$."),
        step(4, "Conclude (a)", "\\text{Root in } (0,1)",
             "By the change of sign method."),
        step(5, "Part (b): $f'(x)$", "f'(x) = 6x^2 - 18x + 12 = 6(x-1)(x-2)",
             "Differentiate and factorise."),
        step(6, "On $[2,3]$", "x \\geq 2 \\Rightarrow (x-1)(x-2) \\geq 0",
             "Both factors are non-negative when $x \\geq 2$."),
        step(7, "Therefore", "f'(x) \\geq 0 \\text{ on } [2,3]",
             "The function is increasing on this interval."),
        step(8, "Part (c): at $x_0 = 2.5$", "f(2.5) = 2, \\; f'(2.5) = 4.5",
             "Evaluate at the starting value."),
        step(9, "$x_1$", "x_1 = 2.5 - \\dfrac{2}{4.5} \\approx 2.0556",
             "First Newton iterate."),
        step(10, "$x_2$", "x_2 \\approx 1.2345",
             "Second iterate moves toward the root in $(0,1)$."),
        step(11, "Part (d)", "f' > 0 \\Rightarrow f \\text{ is increasing on } [2,3]",
             "An increasing function cannot oscillate on this interval, aiding predictable iteration."),
        step(12, "Summary", "\\text{(a) Root in } (0,1); \\text{ (b) } f' \\geq 0; \\text{ (c) } x_1 = 2.0556,\\; x_2 = 1.2345",
             "Complete multi-part solution."),
    ],
    "(a) $f(0) < 0$, $f(1) > 0$, root in $(0,1)$. (b) $f'(x) = 6(x-1)(x-2) \\geq 0$ on $[2,3]$. (c) $x_1 = 2.0556$, $x_2 = 1.2345$. (d) Increasing $f$ prevents oscillation on $[2,3]$.",
))

questions.append(make_q(
    "q062", "Hard", 8, "numeric", ["Newton-Raphson", "transcendental", "exponential"],
    "Find the positive root of $e^x = 5x$ using Newton–Raphson on $f(x) = e^x - 5x$ with $x_0 = 2$. Give $x_1$, $x_2$, and $x_3$ correct to $4$ decimal places.",
    [
        step(1, "Derivative", "f'(x) = e^x - 5",
             "Differentiate the exponential-linear combination."),
        step(2, "At $x_0 = 2$", "f(2) = e^2 - 10 \\approx -2.610, \\; f'(2) = e^2 - 5 \\approx 2.389",
             "Evaluate at the start."),
        step(3, "$x_1$", "x_1 \\approx 3.093",
             "First Newton step overshoots slightly."),
        step(4, "At $x_1$", "f(3.093) \\approx 0.456, \\; f'(3.093) \\approx 17.1",
             "Re-evaluate."),
        step(5, "$x_2$", "x_2 \\approx 3.066",
             "Second iterate corrects the overshoot."),
        step(6, "At $x_2$", "f(3.066) \\approx 0.006",
             "Function value is now very small."),
        step(7, "$x_3$", "x_3 \\approx 3.0656",
             "Third iterate to high accuracy."),
        step(8, "4 d.p.", "x_1 = 3.0931, \\; x_2 = 3.0664, \\; x_3 = 3.0656",
             "Round all three."),
        step(9, "Verify", "e^{3.0656} \\approx 5 \\times 3.0656",
             "Check in the original equation."),
        step(10, "Note two roots", "e^x = 5x \\text{ has two positive roots}",
             "Newton from $x_0 = 2$ finds the larger one near $x \\approx 3.07$."),
    ],
    "$x_1 = 3.0931$, $x_2 = 3.0664$, $x_3 = 3.0656$.",
))

questions.append(make_q(
    "q063", "Hard", 8, "numeric", ["Newton-Raphson", "logarithm"],
    "Solve $\\ln x = 3 - x$ using Newton–Raphson on $f(x) = \\ln x + x - 3$ with $x_0 = 2$. Find $x_1$, $x_2$, and $x_3$ correct to $4$ decimal places.",
    [
        step(1, "Domain", "x > 0",
             "Logarithm requires a positive argument."),
        step(2, "Derivative", "f'(x) = \\dfrac{1}{x} + 1",
             "Always positive on $(0, \\infty)$."),
        step(3, "At $x_0 = 2$", "f(2) = \\ln 2 - 1 \\approx -0.307, \\; f'(2) = 1.5",
             "Starting below the root."),
        step(4, "$x_1$", "x_1 \\approx 2.205",
             "First iterate moves right."),
        step(5, "$x_2$", "x_2 \\approx 2.1984",
             "Second iterate refines."),
        step(6, "$x_3$", "x_3 \\approx 2.1981",
             "Third iterate stabilises."),
        step(7, "4 d.p.", "x_1 = 2.2049, \\; x_2 = 2.1984, \\; x_3 = 2.1981",
             "Round to four decimal places."),
        step(8, "Check", "\\ln(2.1981) + 2.1981 \\approx 3",
             "Verify in the original equation."),
        step(9, "Bracket", "f(1) = -2 < 0, \\; f(3) = \\ln 3 > 0",
             "Root lies between $1$ and $3$."),
        step(10, "Convergence", "|x_3 - x_2| < 0.001",
             "Rapid agreement by the third step."),
    ],
    "$x_1 = 2.2049$, $x_2 = 2.1984$, $x_3 = 2.1981$.",
))

questions.append(make_q(
    "q064", "Hard", 8, "numeric", ["Newton-Raphson", "trigonometric"],
    "Solve $\\cos x = x$ for $x$ in $[0, \\pi/2]$ using Newton–Raphson with $x_0 = 1$. Find $x_1$ through $x_4$ correct to $5$ decimal places.",
    [
        step(1, "Formulation", "f(x) = \\cos x - x, \\quad f'(x) = -\\sin x - 1",
             "Standard transcendental equation."),
        step(2, "$x_1$", "x_1 \\approx 0.7504",
             "First Newton step from $x_0 = 1$."),
        step(3, "$x_2$", "x_2 \\approx 0.7391",
             "Approaching the Dottie number."),
        step(4, "$x_3$", "x_3 \\approx 0.7390851",
             "High accuracy by the third step."),
        step(5, "$x_4$", "x_4 \\approx 0.7390851",
             "Fourth iterate agrees to $5$ d.p."),
        step(6, "5 d.p. answers", "x_1 = 0.75036, \\; x_2 = 0.73911, \\; x_3 = 0.73909, \\; x_4 = 0.73909",
             "List all four to five decimal places."),
        step(7, "Verify", "\\cos(0.73909) \\approx 0.73909",
             "Check the fixed point."),
        step(8, "Uniqueness on interval", "\\text{Only one solution in } [0, \\pi/2]",
             "$\\cos x$ decreases from $1$ to $0$ while $x$ increases."),
        step(9, "Cobweb convergence", "f'(\\alpha) < 0",
             "Alternating approach to the fixed point."),
        step(10, "Final", "x_4 = 0.73909",
             "Answer to $5$ d.p."),
    ],
    "$x_1 = 0.75036$, $x_2 = 0.73911$, $x_3 = 0.73909$, $x_4 = 0.73909$.",
))

questions.append(make_q(
    "q065", "Hard", 9, "written", ["Newton-Raphson", "multi-part", "quadratic"],
    "$f(x) = x^2 - 5x + 3$.\n\n(a) Find the roots exactly using the quadratic formula.\n\n(b) Show that Newton–Raphson with $x_0 = 5$ converges to the larger root.\n\n(c) Find $x_1$ and $x_2$ exactly as fractions.\n\n(d) Explain why convergence is rapid.",
    [
        step(1, "Part (a): quadratic formula", "x = \\dfrac{5 \\pm \\sqrt{25 - 12}}{2} = \\dfrac{5 \\pm \\sqrt{13}}{2}",
             "Apply the standard formula."),
        step(2, "Larger root", "\\alpha = \\dfrac{5 + \\sqrt{13}}{2} \\approx 4.303",
             "The plus sign gives the larger root."),
        step(3, "Smaller root", "\\dfrac{5 - \\sqrt{13}}{2} \\approx 0.697",
             "The minus sign gives the smaller root."),
        step(4, "Part (b): $f(5) = 3$", "f(5) = 25 - 25 + 3 = 3 > 0",
             "Evaluate at the starting point."),
        step(5, "$f'(5) = 5$", "f'(5) = 10 - 5 = 5 \\neq 0",
             "Non-zero derivative ensures the iteration can proceed."),
        step(6, "$x_1$ from $5$", "x_1 = 5 - \\dfrac{3}{5} = \\dfrac{22}{5}",
             "First iterate moves left toward the larger root."),
        step(7, "Direction", "x_1 = 4.4 > \\alpha \\approx 4.303",
             "Iterate approaches from above."),
        step(8, "Part (c): $x_2$", "x_2 = \\dfrac{22}{5} - \\dfrac{f(22/5)}{f'(22/5)} = \\dfrac{143}{32}",
             "Second exact iterate (after simplification)."),
        step(9, "Part (d): simple root", "f'(\\alpha) = 5 + \\sqrt{13} \\neq 0",
             "The larger root is simple, giving quadratic convergence."),
        step(10, "Fraction values", "x_1 = \\dfrac{22}{5}, \\; x_2 = \\dfrac{143}{32}",
             "Exact fractional answers."),
        step(11, "Decimal check", "x_2 = 4.46875 \\to 4.303",
             "Rapid approach to $\\alpha$."),
        step(12, "Summary", "\\text{Converges to } \\dfrac{5+\\sqrt{13}}{2}",
             "Newton from $x_0 = 5$ finds the larger root quickly."),
    ],
    "(a) $x = \\dfrac{5 \\pm \\sqrt{13}}{2}$. (b) Iterates decrease toward the larger root. (c) $x_1 = \\dfrac{22}{5}$, $x_2 = \\dfrac{143}{32}$. (d) Simple root $\\Rightarrow$ quadratic convergence.",
))

questions.append(make_q(
    "q066", "Hard", 7, "written", ["Babylonian method", "Newton-Raphson", "multi-part"],
    "(a) Derive the Babylonian formula for $\\sqrt{N}$ from Newton–Raphson on $f(x) = x^2 - N$.\n\n(b) Starting with $x_0 = 1$, find $x_1$ and $x_2$ for $N = 2$ as exact fractions.\n\n(c) Show $x_2$ is closer to $\\sqrt{2}$ than $x_1$.",
    [
        step(1, "Part (a): $f'(x) = 2x$", "x_{n+1} = x_n - \\dfrac{x_n^2 - N}{2x_n}",
             "Substitute into Newton's formula."),
        step(2, "Simplify", "x_{n+1} = \\dfrac{x_n^2 + N}{2x_n} = \\dfrac{1}{2}\\left(x_n + \\dfrac{N}{x_n}\\right)",
             "Recover the Babylonian iteration."),
        step(3, "Part (b): $x_1$", "x_1 = \\dfrac{1}{2}(1 + 2) = \\dfrac{3}{2}",
             "First Babylonian step for $\\sqrt{2}$."),
        step(4, "$x_2$", "x_2 = \\dfrac{1}{2}\\left(\\dfrac{3}{2} + \\dfrac{4}{3}\\right) = \\dfrac{17}{12}",
             "Second step as an exact fraction."),
        step(5, "Part (c): compare errors", "|\\dfrac{3}{2} - \\sqrt{2}| \\approx 0.086",
             "Error after one step."),
        step(6, "Error at $x_2$", "|\\dfrac{17}{12} - \\sqrt{2}| \\approx 0.002",
             "Much smaller error after two steps."),
        step(7, "Quadratic convergence", "\\text{Correct digits roughly double}",
             "Babylonian/Newton on $x^2 - N$ converges quadratically."),
        step(8, "Decimal values", "x_1 = 1.5, \\; x_2 \\approx 1.4167, \\; \\sqrt{2} \\approx 1.4142",
             "Numerical comparison confirms improvement."),
        step(9, "Conclusion", "x_2 \\text{ is significantly closer to } \\sqrt{2}",
             "Two Babylonian steps give excellent accuracy."),
    ],
    "(a) Babylonian formula derived. (b) $x_1 = \\dfrac{3}{2}$, $x_2 = \\dfrac{17}{12}$. (c) $|x_2 - \\sqrt{2}| \\ll |x_1 - \\sqrt{2}|$.",
))

questions.append(make_q(
    "q067", "Hard", 8, "written", ["failure", "oscillation", "divergence"],
    "Compare three failure modes of Newton–Raphson: (i) $f'(x_n) = 0$, (ii) oscillation, (iii) divergence. Give an example equation and starting value for each.",
    [
        step(1, "Failure (i): zero derivative", "f'(x_n) = 0",
             "The formula divides by $f'(x_n)$."),
        step(2, "Example (i)", "f(x) = x^3 - 3x^2 + 3, \\; x_0 = 2",
             "$f'(2) = 0$ at a non-root stationary point."),
        step(3, "Effect (i)", "x_{n+1} \\text{ undefined}",
             "The iteration cannot continue."),
        step(4, "Failure (ii): oscillation", "x_n \\text{ alternates without converging}",
             "Iterates bounce between values."),
        step(5, "Example (ii)", "f(x) = x^3 - 2x + 2, \\; x_0 = 0",
             "Produces the 2-cycle $0 \\leftrightarrow 1$."),
        step(6, "Effect (ii)", "x_0 \\to x_1 \\to x_2 = x_0 \\to \\cdots",
             "No progress toward any root."),
        step(7, "Failure (iii): divergence", "|x_n| \\to \\infty",
             "Iterates escape to infinity."),
        step(8, "Example (iii)", "f(x) = \\arctan x, \\; x_0 = 1.5",
             "First step jumps to large negative values."),
        step(9, "Effect (iii)", "|x_n| \\text{ grows without bound}",
             "No root is approached."),
        step(10, "Common theme", "x_0 \\text{ poorly chosen or } f'(x_n) = 0",
             "All three stem from unfavourable geometry or starting conditions."),
        step(11, "Prevention", "\\text{Sketch, bracket, check } f'(x_0)",
             "Exam strategy: verify before iterating."),
        step(12, "Summary table", "(i) zero $f'$; (ii) oscillation; (iii) divergence",
             "Three distinct failure modes with examples."),
    ],
    "(i) $f(x)=x^3-3x^2+3$, $x_0=2$: $f'(2)=0$. (ii) $f(x)=x^3-2x+2$, $x_0=0$: oscillates $0\\leftrightarrow1$. (iii) $f(x)=\\arctan x$, $x_0=1.5$: diverges.",
))

questions.append(make_q(
    "q068", "Hard", 8, "numeric", ["Newton-Raphson", "cubic"],
    "The equation $x^3 - 4x^2 + x + 2 = 0$ has a root near $x = 3$. Use Newton–Raphson with $x_0 = 3$ to find $x_1$ through $x_4$ correct to $5$ decimal places.",
    [
        step(1, "Derivative", "f'(x) = 3x^2 - 8x + 1",
             "Differentiate the cubic."),
        step(2, "Verify root neighbourhood", "f(3) = 27 - 36 + 3 + 2 = -4",
             "Function is negative at $x_0 = 3$."),
        step(3, "$f'(3) = 27 - 24 + 1 = 4$", "f'(3) = 4 \\neq 0",
             "Safe to iterate."),
        step(4, "$x_1$", "x_1 = 3 + 1 = 4",
             "First step lands at $x = 4$."),
        step(5, "$x_2$", "x_2 \\approx 3.6875",
             "Moving back toward the root."),
        step(6, "$x_3$", "x_3 \\approx 3.4277",
             "Continuing to converge."),
        step(7, "$x_4$", "x_4 \\approx 3.41421",
             "Near the root (close to $3 + \\sqrt{2}$)."),
        step(8, "5 d.p.", "x_1 = 4.00000, \\; x_2 = 3.68750, \\; x_3 = 3.42773, \\; x_4 = 3.41421",
             "All four iterates to five decimal places."),
        step(9, "Check $f(x_4)$", "f(3.41421) \\approx 0",
             "Function value near zero confirms accuracy."),
        step(10, "Note initial overshoot", "x_1 = 4 > \\text{root}",
             "Newton can overshoot before converging."),
    ],
    "$x_1 = 4.00000$, $x_2 = 3.68750$, $x_3 = 3.42773$, $x_4 = 3.41421$.",
))

questions.append(make_q(
    "q069", "Hard", 9, "written", ["Newton-Raphson", "multi-part", "transcendental"],
    "$f(x) = x\\ln x - 1$ for $x > 0$.\n\n(a) Show that $f(x) = 0$ has a root in $[1, 2]$.\n\n(b) Find $f'(x)$.\n\n(c) Use Newton–Raphson with $x_0 = 1.5$ to find $x_1$ and $x_2$ correct to $4$ d.p.\n\n(d) Explain why $f''(x) > 0$ for $x > 0$ implies the curve is concave up.",
    [
        step(1, "Part (a): $f(1)$", "f(1) = 0 - 1 = -1 < 0",
             "At $x = 1$, $\\ln 1 = 0$."),
        step(2, "$f(2)$", "f(2) = 2\\ln 2 - 1 \\approx 0.386 > 0",
             "Positive at $x = 2$."),
        step(3, "Conclude (a)", "\\text{Root in } (1,2)",
             "Sign change with continuity."),
        step(4, "Part (b): product rule", "f'(x) = \\ln x + 1",
             "Differentiate $x \\ln x - 1$."),
        step(5, "Part (c): at $x_0 = 1.5$", "f(1.5) = 1.5\\ln(1.5) - 1 \\approx -0.392, \\; f'(1.5) \\approx 1.405",
             "Evaluate for Newton steps."),
        step(6, "$x_1$", "x_1 \\approx 1.779",
             "First iterate."),
        step(7, "$x_2$", "x_2 \\approx 1.7632",
             "Second iterate."),
        step(8, "4 d.p.", "x_1 = 1.7789, \\; x_2 = 1.7632",
             "Round to four decimal places."),
        step(9, "Part (d): $f''(x)$", "f''(x) = \\dfrac{1}{x} > 0 \\text{ for } x > 0",
             "Second derivative positive means gradient increases as $x$ grows."),
        step(10, "Concave up", "f'' > 0 \\Rightarrow \\text{curve bends upward}",
             "The graph lies above its tangents locally."),
        step(11, "Implication for NR", "\\text{Tangents lie below a concave-up curve}",
             "This can help predict the direction of Newton corrections."),
        step(12, "Summary", "\\text{Root in } (1,2); \\; x_1 = 1.7789,\\; x_2 = 1.7632",
             "Complete solution."),
    ],
    "(a) $f(1) < 0$, $f(2) > 0$, root in $(1,2)$. (b) $f'(x) = \\ln x + 1$. (c) $x_1 = 1.7789$, $x_2 = 1.7632$. (d) $f''(x) = 1/x > 0$ so the curve is concave up.",
))

questions.append(make_q(
    "q070", "Hard", 10, "written", ["Newton-Raphson", "summary", "multi-part"],
    "A student must solve $f(x) = x^3 - 3x - 1 = 0$ numerically.\n\n(a) Show there is a root in $[1, 2]$.\n\n(b) Explain why Newton–Raphson is suitable with $x_0 = 2$.\n\n(c) Find $x_1$, $x_2$, and $x_3$ correct to $4$ d.p.\n\n(d) State one limitation of Newton–Raphson the student should remember.\n\n(e) Give the approximate root to $4$ d.p.",
    [
        step(1, "Part (a): $f(1)$", "f(1) = 1 - 3 - 1 = -3 < 0",
             "Negative at the left endpoint."),
        step(2, "$f(2)$", "f(2) = 8 - 6 - 1 = 1 > 0",
             "Positive at the right endpoint."),
        step(3, "Conclude (a)", "\\text{Root in } (1, 2)",
             "Continuous $f$ with a sign change traps a root in the open interval."),
        step(4, "Part (b): $f'(x) = 3x^2 - 3$", "f'(2) = 9 \\neq 0",
             "The derivative is non-zero at the starting value."),
        step(5, "Simple root", "f'(\\alpha) \\neq 0 \\text{ at the root in } (1,2)",
             "Expects rapid quadratic convergence near a simple root."),
        step(6, "Part (c): $f(2) = 1$", "f(2) = 1, \\; f'(2) = 9",
             "Evaluate at $x_0 = 2$."),
        step(7, "$x_1$", "x_1 = 2 - \\dfrac{1}{9} \\approx 1.8889",
             "First Newton step."),
        step(8, "$x_2$", "x_2 \\approx 1.8795",
             "Second iterate."),
        step(9, "$x_3$", "x_3 \\approx 1.8794",
             "Third iterate stabilises."),
        step(10, "4 d.p.", "x_1 = 1.8889, \\; x_2 = 1.8795, \\; x_3 = 1.8794",
             "Three iterates to four decimal places."),
        step(11, "Part (d): limitation", "f'(x_n) = 0, \\text{ poor } x_0, \\text{ or divergence}",
             "Any valid limitation: needs a good start and can fail at stationary points."),
        step(12, "Part (e): root", "\\alpha \\approx 1.8794",
             "The root to $4$ d.p."),
        step(13, "Verify", "f(1.8794) \\approx 0",
             "Substitute back to confirm."),
        step(14, "Exam checklist", "\\text{Bracket} \\to \\text{check } f'(x_0) \\to \\text{iterate} \\to \\text{verify}",
             "Systematic approach for full marks."),
    ],
    "(a) $f(1) < 0$, $f(2) > 0$, root in $(1,2)$. (b) $f'(2) \\neq 0$, simple root, fast convergence. (c) $x_1 = 1.8889$, $x_2 = 1.8795$, $x_3 = 1.8794$. (d) Requires good $x_0$; fails if $f'(x_n)=0$. (e) Root $\\approx 1.8794$.",
))

assert len(questions) == 70, f"Expected 70 questions, got {len(questions)}"

write_questions_ts(OUT, questions)

from collections import Counter
diffs = Counter(q["difficulty"] for q in questions)
print(f"Wrote {len(questions)} questions to {OUT}")
print(f"Difficulties: {dict(diffs)}")





