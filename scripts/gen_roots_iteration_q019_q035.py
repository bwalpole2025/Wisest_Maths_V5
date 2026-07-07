#!/usr/bin/env python3
"""Generate locating roots and iteration questions q019–q035 as TypeScript batch."""

import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))
from question_ts import write_questions_ts

OUTPUT = (
    "/Users/benjaminwalpole/Wisest_Maths_V5/wisest-maths-content/src/data/questions/"
    "a-level-maths/year-2-pure/locating-roots-and-iteration-q019-q035.ts"
)

SUBTOPIC = "Locating roots and iteration"
SUBTOPIC_ID = "al.y2.pure.roots-iteration"
LEVEL = "A-Level Maths"
TOPIC = "Year 2 Pure"


def step(n, desc, latex, expl):
    return {
        "stepNumber": n,
        "description": desc,
        "workingLatex": latex,
        "explanation": expl,
        "diagram": None,
    }


def q(num, difficulty, marks, answer_type, tags, question_text, steps, final_answer):
    return {
        "id": f"{SUBTOPIC_ID}.q{num:03d}",
        "level": LEVEL,
        "topic": TOPIC,
        "subtopic": SUBTOPIC,
        "subtopicId": SUBTOPIC_ID,
        "difficulty": difficulty,
        "marks": marks,
        "answerType": answer_type,
        "tags": tags,
        "questionText": question_text,
        "questionDiagram": None,
        "workedSolution": {"steps": steps, "finalAnswer": final_answer},
    }


questions = [
    # ── EASY q019–q024 (6) ───────────────────────────────────────────────────
    q(
        19,
        "Easy",
        3,
        "numeric",
        ["fixed-point iteration", "calculating terms"],
        "The iterative formula $x_{n+1} = \\sqrt{x_n + 5}$ is used with $x_0 = 3$. "
        "Find $x_1$ and $x_2$, giving your answers correct to $3$ decimal places.",
        [
            step(
                1,
                "Substitute $x_0$ into the formula",
                "x_1 = \\sqrt{x_0 + 5} = \\sqrt{3 + 5} = \\sqrt{8}",
                "Fixed-point iteration replaces $x_n$ with the previous value; here we plug $x_0 = 3$ into $x_{n+1} = \\sqrt{x_n + 5}$.",
            ),
            step(
                2,
                "Evaluate $x_1$",
                "x_1 = \\sqrt{8} \\approx 2.828",
                "Squaring root $8$ gives the first iterate; to three decimal places $x_1 = 2.828$.",
            ),
            step(
                3,
                "Substitute $x_1$ to find $x_2$",
                "x_2 = \\sqrt{x_1 + 5} = \\sqrt{2.828 + 5} = \\sqrt{7.828}",
                "The same rule is applied again, now using the value just found for $x_1$.",
            ),
            step(
                4,
                "Evaluate $x_2$",
                "x_2 = \\sqrt{7.828} \\approx 2.798",
                "Carrying out the square root gives the second iterate $x_2 = 2.798$ (3 d.p.).",
            ),
            step(
                5,
                "Check the values are reasonable",
                "2.828 \\text{ and } 2.798 \\text{ are close to a fixed point near } 2.8",
                "Successive terms are moving closer together, which is what we expect when an iteration converges toward a root of $x = \\sqrt{x + 5}$.",
            ),
            step(
                6,
                "State the answers",
                "x_1 = 2.828, \\quad x_2 = 2.798",
                "Both iterates are found by repeated substitution into the same formula, keeping full calculator accuracy until the final rounding.",
            ),
        ],
        "$x_1 = 2.828$, $x_2 = 2.798$ (3 d.p.).",
    ),
    q(
        20,
        "Easy",
        4,
        "numeric",
        ["fixed-point iteration", "calculating terms", "rational formula"],
        "Use the iterative formula $x_{n+1} = \\dfrac{2x_n + 7}{x_n + 3}$ with $x_0 = 4$ to find $x_1$, $x_2$ and $x_3$. "
        "Give each answer as an exact fraction.",
        [
            step(
                1,
                "Calculate $x_1$ from $x_0 = 4$",
                "x_1 = \\frac{2(4) + 7}{4 + 3} = \\frac{15}{7}",
                "Substituting $x_0 = 4$ into the fraction gives the first iterate exactly as $\\dfrac{15}{7}$.",
            ),
            step(
                2,
                "Calculate $x_2$ using $x_1 = \\dfrac{15}{7}$",
                "x_2 = \\frac{2\\left(\\frac{15}{7}\\right) + 7}{\\frac{15}{7} + 3} "
                "= \\frac{\\frac{30}{7} + \\frac{49}{7}}{\\frac{15}{7} + \\frac{21}{7}} "
                "= \\frac{79}{36}",
                "Working with fractions avoids rounding errors: combine numerators and denominators before dividing.",
            ),
            step(
                3,
                "Calculate $x_3$ using $x_2 = \\dfrac{79}{36}$",
                "x_3 = \\frac{2\\left(\\frac{79}{36}\\right) + 7}{\\frac{79}{36} + 3} "
                "= \\frac{\\frac{158}{36} + \\frac{252}{36}}{\\frac{79}{36} + \\frac{108}{36}} "
                "= \\frac{410}{187}",
                "Each step feeds the previous exact answer back into the same rearrangement.",
            ),
            step(
                4,
                "Verify $x_2$ and $x_3$ are close",
                "\\frac{79}{36} \\approx 2.194, \\quad \\frac{410}{187} \\approx 2.193",
                "The decimal forms differ only in the third decimal place, suggesting convergence toward a fixed point.",
            ),
            step(
                5,
                "Interpret the pattern",
                "x_n \\text{ approaches the value where } x = \\frac{2x + 7}{x + 3}",
                "A fixed point satisfies $x = g(x)$; the iteration homes in on that value when $|g'(x)| < 1$ near the root.",
            ),
            step(
                6,
                "State the three iterates",
                "x_1 = \\frac{15}{7}, \\quad x_2 = \\frac{79}{36}, \\quad x_3 = \\frac{410}{187}",
                "These are the exact fractional forms of the first three iterates after $x_0 = 4$.",
            ),
        ],
        "$x_1 = \\dfrac{15}{7}$, $x_2 = \\dfrac{79}{36}$, $x_3 = \\dfrac{410}{187}$.",
    ),
    q(
        21,
        "Easy",
        3,
        "numeric",
        ["fixed-point iteration", "calculating terms"],
        "The equation $x^3 - 2x - 5 = 0$ has a root near $x = 2$. "
        "Using $x_{n+1} = \\sqrt{\\dfrac{x_n^3 - 5}{2}}$ with $x_0 = 2.1$, find $x_1$ and $x_2$ correct to $3$ decimal places.",
        [
            step(
                1,
                "Confirm the rearrangement",
                "x^3 - 2x - 5 = 0 \\Rightarrow x^3 = 2x + 5 \\Rightarrow x = \\sqrt{\\frac{x^3 - 5}{2}}",
                "Rearranging $x^3 - 2x - 5 = 0$ to $x = g(x)$ gives the iterative formula we will use.",
            ),
            step(
                2,
                "Substitute $x_0 = 2.1$",
                "x_1 = \\sqrt{\\frac{(2.1)^3 - 5}{2}} = \\sqrt{\\frac{9.261 - 5}{2}} = \\sqrt{2.1305}",
                "Cube $2.1$, subtract $5$, halve, then take the square root to get $x_1$.",
            ),
            step(
                3,
                "Evaluate $x_1$",
                "x_1 = \\sqrt{2.1305} \\approx 1.460",
                "To three decimal places the first iterate is $x_1 = 1.460$.",
            ),
            step(
                4,
                "Substitute $x_1$ to find $x_2$",
                "x_2 = \\sqrt{\\frac{(1.460)^3 - 5}{2}} = \\sqrt{\\frac{3.112 - 5}{2}} = \\sqrt{-0.944}",
                "Wait — recalculate: $(1.460)^3 \\approx 3.112$, so $\\dfrac{3.112 - 5}{2} = -0.944$.",
            ),
            step(
                5,
                "Use more accurate $x_1$",
                "x_1 = \\sqrt{2.1305} \\approx 1.4596, \\quad x_2 = \\sqrt{\\frac{(1.4596)^3 - 5}{2}} "
                "\\approx \\sqrt{\\frac{3.109 - 5}{2}}",
                "With $x_0 = 2.1$ this rearrangement actually diverges from the root near $2$. "
                "Recalculate with the standard convergent form $x_{n+1} = \\sqrt[3]{2x_n + 5}$ instead.",
            ),
            step(
                6,
                "Use the convergent cube-root form",
                "x_1 = \\sqrt[3]{2(2.1) + 5} = \\sqrt[3]{9.2} \\approx 2.096, \\quad "
                "x_2 = \\sqrt[3]{2(2.096) + 5} = \\sqrt[3]{9.192} \\approx 2.095",
                "The cube-root rearrangement $x = \\sqrt[3]{2x + 5}$ keeps iterates near the root at $x \\approx 2.094$.",
            ),
            step(
                7,
                "State the answers",
                "x_1 = 2.096, \\quad x_2 = 2.095 \\text{ (3 d.p.)}",
                "Each iterate moves slightly closer to the fixed point, confirming convergence with this rearrangement.",
            ),
        ],
        "$x_1 = 2.096$, $x_2 = 2.095$ (3 d.p.) using $x_{n+1} = \\sqrt[3]{2x_n + 5}$.",
    ),
]

# Fix q021 - the working had an error path. Rewrite q021 cleanly.
questions[-1] = q(
    21,
    "Easy",
    3,
    "numeric",
    ["fixed-point iteration", "calculating terms", "cube root"],
    "The equation $x^3 - 2x - 5 = 0$ has a root near $x = 2$. "
    "Using $x_{n+1} = \\sqrt[3]{2x_n + 5}$ with $x_0 = 2.1$, find $x_1$ and $x_2$ correct to $3$ decimal places.",
    [
        step(
            1,
            "Confirm the rearrangement",
            "x^3 - 2x - 5 = 0 \\Rightarrow x^3 = 2x + 5 \\Rightarrow x = \\sqrt[3]{2x + 5}",
            "Isolating $x$ on the left gives an iterative formula of the form $x_{n+1} = g(x_n)$.",
        ),
        step(
            2,
            "Substitute $x_0 = 2.1$",
            "x_1 = \\sqrt[3]{2(2.1) + 5} = \\sqrt[3]{9.2}",
            "Double $x_0$, add $5$, then take the cube root to obtain $x_1$.",
        ),
        step(
            3,
            "Evaluate $x_1$",
            "x_1 = \\sqrt[3]{9.2} \\approx 2.096",
            "To three decimal places the first iterate is $x_1 = 2.096$.",
        ),
        step(
            4,
            "Substitute $x_1$ to find $x_2$",
            "x_2 = \\sqrt[3]{2(2.096) + 5} = \\sqrt[3]{9.192}",
            "The same rule is applied using the value just found for $x_1$.",
        ),
        step(
            5,
            "Evaluate $x_2$",
            "x_2 = \\sqrt[3]{9.192} \\approx 2.095",
            "The second iterate is $x_2 = 2.095$ to three decimal places.",
        ),
        step(
            6,
            "Note convergence",
            "x_1 \\text{ and } x_2 \\text{ differ only in the third decimal place}",
            "Successive values are settling down, which is the hallmark of a convergent fixed-point iteration near a root.",
        ),
        step(
            7,
            "State the answers",
            "x_1 = 2.096, \\quad x_2 = 2.095",
            "Both iterates are obtained by repeated substitution into $x_{n+1} = \\sqrt[3]{2x + 5}$.",
        ),
    ],
    "$x_1 = 2.096$, $x_2 = 2.095$ (3 d.p.).",
)

questions.extend([
    q(
        22,
        "Easy",
        2,
        "written",
        ["staircase convergence", "iteration behaviour"],
        "A fixed-point iteration produces the values $x_0 = 1$, $x_1 = 1.8$, $x_2 = 2.04$, $x_3 = 2.008$, $x_4 = 2.002$. "
        "Describe the type of convergence shown on a cobweb diagram.",
        [
            step(
                1,
                "Compare successive terms",
                "x_1 - x_0 = 0.8, \\quad x_2 - x_1 = 0.24, \\quad x_3 - x_2 = -0.032, \\quad x_4 - x_3 = -0.006",
                "The gaps between consecutive iterates are shrinking, so the sequence is homing in on a limit.",
            ),
            step(
                2,
                "Identify the limit",
                "x_n \\to 2 \\text{ as } n \\to \\infty",
                "The values oscillate slightly around $2$ but get closer each time, so the fixed point is approximately $x = 2$.",
            ),
            step(
                3,
                "Recall cobweb terminology",
                "\\text{Staircase: same side of } y = x \\text{ each step; Cobweb: alternate sides}",
                "On a cobweb diagram, whether iterates stay on one side of the line $y = x$ or bounce across it determines the name.",
            ),
            step(
                4,
                "Check the side of $y = x$",
                "x_0 < 2,\\ x_1 > 2,\\ x_2 > 2,\\ x_3 < 2,\\ x_4 < 2",
                "The iterates cross from below to above the fixed point and back, but with decreasing amplitude.",
            ),
            step(
                5,
                "Classify the behaviour",
                "\\text{Alternating sides with shrinking steps} \\Rightarrow \\text{cobweb convergence}",
                "Because each new $x$-value lands on the opposite side of the fixed point from the previous one, the path spirals inward in a cobweb pattern.",
            ),
            step(
                6,
                "State the description",
                "\\text{Cobweb convergence to } x = 2",
                "The iteration converges in a cobweb (spiral) fashion toward the fixed point at $x = 2$.",
            ),
        ],
        "Cobweb convergence toward the fixed point $x = 2$ (iterates alternate sides of $y = x$ while approaching the root).",
    ),
    q(
        23,
        "Easy",
        3,
        "expression",
        ["rearrangement", "iterative formula"],
        "Show that $x^3 + x - 10 = 0$ can be written in the form $x = g(x)$ and write down a suitable iterative formula $x_{n+1} = g(x_n)$.",
        [
            step(
                1,
                "Rearrange to isolate $x$",
                "x^3 + x - 10 = 0 \\Rightarrow x^3 = 10 - x",
                "Moving the $x$ term to the right-hand side prepares us to take a root.",
            ),
            step(
                2,
                "Take the cube root of both sides",
                "x = \\sqrt[3]{10 - x}",
                "Cube-rooting both sides leaves $x$ alone on the left, giving $x = g(x)$ with $g(x) = \\sqrt[3]{10 - x}$.",
            ),
            step(
                3,
                "Write the iterative formula",
                "x_{n+1} = \\sqrt[3]{10 - x_n}",
                "Replacing $x$ by $x_n$ on the right and $x_{n+1}$ on the left gives the fixed-point iteration.",
            ),
            step(
                4,
                "Verify at a trial value",
                "g(2) = \\sqrt[3]{8} = 2",
                "At $x = 2$, $g(2) = \\sqrt[3]{8} = 2$, confirming that $x = 2$ is a fixed point of this rearrangement.",
            ),
            step(
                5,
                "Check $g'(x)$ for convergence",
                "g'(x) = -\\frac{1}{3}(10 - x)^{-2/3}",
                "Differentiating: the cube root gives a factor of $-\\dfrac{1}{3}(10-x)^{-2/3}$, whose magnitude is less than $1$ near $x = 2$.",
            ),
            step(
                6,
                "Evaluate $|g'(2)|$",
                "|g'(2)| = \\frac{1}{3}(8)^{-2/3} = \\frac{1}{3} \\times \\frac{1}{4} = \\frac{1}{12} < 1",
                "Since $|g'(x)| < 1$ at the root, the iteration is expected to converge when started sufficiently close.",
            ),
            step(
                7,
                "State the iterative formula",
                "x_{n+1} = \\sqrt[3]{10 - x_n}",
                "This is a valid rearrangement of $x^3 + x - 10 = 0$ suitable for fixed-point iteration.",
            ),
        ],
        "$x_{n+1} = \\sqrt[3]{10 - x_n}$, from $x = \\sqrt[3]{10 - x}$.",
    ),
    q(
        24,
        "Easy",
        3,
        "numeric",
        ["Newton-Raphson", "iterative formula"],
        "Use one step of the Newton–Raphson method with $x_0 = 2$ to find an approximation to a root of $f(x) = x^2 - 5$. "
        "Give $x_1$ as an exact fraction.",
        [
            step(
                1,
                "Recall the Newton–Raphson formula",
                "x_{n+1} = x_n - \\frac{f(x_n)}{f'(x_n)}",
                "Newton's method adjusts $x_n$ by subtracting the ratio of the function value to its gradient at that point.",
            ),
            step(
                2,
                "Find $f(x_0)$ and $f'(x_0)$",
                "f(2) = 4 - 5 = -1, \\quad f'(x) = 2x \\Rightarrow f'(2) = 4",
                "At $x_0 = 2$, the curve is $1$ unit below the axis and the gradient is $4$.",
            ),
            step(
                3,
                "Substitute into the formula",
                "x_1 = 2 - \\frac{-1}{4} = 2 + \\frac{1}{4}",
                "A negative $f$ value and positive gradient moves the next guess to the right of $x_0$.",
            ),
            step(
                4,
                "Simplify",
                "x_1 = \\frac{9}{4}",
                "Adding $\\dfrac{1}{4}$ to $2$ gives the exact first iterate $\\dfrac{9}{4}$.",
            ),
            step(
                5,
                "Interpret the result",
                "\\frac{9}{4} = 2.25 \\text{ is closer to } \\sqrt{5} \\approx 2.236",
                "The new estimate is nearer the positive root $\\sqrt{5}$ than the starting value $2$.",
            ),
            step(
                6,
                "State $x_1$",
                "x_1 = \\frac{9}{4}",
                "One Newton step from $x_0 = 2$ gives $x_1 = \\dfrac{9}{4}$ exactly.",
            ),
        ],
        "$x_1 = \\dfrac{9}{4}$.",
    ),
    # ── INTERMEDIATE q025–q035 (11) ──────────────────────────────────────────
    q(
        25,
        "Intermediate",
        4,
        "written",
        ["convergence", "derivative test", "g'(x)"],
        "A fixed-point iteration uses $g(x) = \\cos x$. The root $\\alpha$ satisfies $\\cos \\alpha = \\alpha$ and lies in $(0, 1)$. "
        "Show that $|g'(\\alpha)| < 1$ and hence explain why the iteration converges.",
        [
            step(
                1,
                "Differentiate $g(x)$",
                "g(x) = \\cos x \\Rightarrow g'(x) = -\\sin x",
                "The derivative tells us how steeply $g(x)$ crosses the line $y = x$ at the fixed point.",
            ),
            step(
                2,
                "State the convergence condition",
                "|g'(\\alpha)| < 1 \\Rightarrow \\text{local convergence}",
                "When the magnitude of the gradient of $g$ at the fixed point is less than $1$, errors shrink by that factor each iteration.",
            ),
            step(
                3,
                "Bound $\\alpha$",
                "0 < \\alpha < 1 \\Rightarrow 0 < \\sin \\alpha < \\sin 1",
                "Because $\\alpha$ lies between $0$ and $1$ radian, $\\sin \\alpha$ is positive and less than $\\sin 1$.",
            ),
            step(
                4,
                "Evaluate an upper bound",
                "\\sin 1 \\approx 0.841 < 1",
                "Since $\\sin 1 < 1$, we know $\\sin \\alpha < 1$ throughout the interval.",
            ),
            step(
                5,
                "Compute $|g'(\\alpha)|$",
                "|g'(\\alpha)| = |-\\sin \\alpha| = \\sin \\alpha < 1",
                "The absolute gradient at the fixed point is strictly less than $1$.",
            ),
            step(
                6,
                "Link to cobweb geometry",
                "\\text{Gradient of } g \\text{ at } \\alpha \\text{ is shallower than } y = x",
                "When $|g'(\\alpha)| < 1$, the graph of $g$ is less steep than the identity line, so iterates move toward $\\alpha$.",
            ),
            step(
                7,
                "Describe the convergence type",
                "g'(\\alpha) < 0 \\Rightarrow \\text{cobweb (alternating) convergence}",
                "Because $g'(\\alpha) = -\\sin \\alpha$ is negative, iterates bounce across the fixed point while closing in.",
            ),
            step(
                8,
                "Conclude",
                "|g'(\\alpha)| < 1, \\text{ so the iteration converges to } \\alpha",
                "The derivative test confirms that fixed-point iteration with $g(x) = \\cos x$ converges to the root in $(0, 1)$.",
            ),
            step(
                9,
                "Numerical value of $\\alpha$",
                "\\alpha \\approx 0.739 \\text{ (known as the Dottie number)}",
                "The unique solution to $\\cos x = x$ in $(0,1)$ is approximately $0.739$, and the iteration $x_{n+1} = \\cos x_n$ converges to it from any $x_0 \\in [0,1]$.",
            ),
        ],
        "$|g'(\\alpha)| = \\sin\\alpha < 1$, so the iteration converges (cobweb convergence because $g'(\\alpha) < 0$).",
    ),
    q(
        26,
        "Intermediate",
        4,
        "written",
        ["divergence", "derivative test", "g'(x)"],
        "Consider the iterative formula $x_{n+1} = x_n^2 - 2$ with a fixed point at $\\alpha = 2$. "
        "Show that $|g'(\\alpha)| > 1$ and explain why the iteration diverges when $x_0$ is close to $2$.",
        [
            step(
                1,
                "Identify $g(x)$",
                "g(x) = x^2 - 2",
                "The iteration has the standard form $x_{n+1} = g(x_n)$ with this quadratic function.",
            ),
            step(
                2,
                "Verify $\\alpha = 2$ is a fixed point",
                "g(2) = 4 - 2 = 2",
                "Substituting $x = 2$ returns $2$, confirming it is a fixed point of the iteration.",
            ),
            step(
                3,
                "Differentiate",
                "g'(x) = 2x",
                "Differentiating $x^2 - 2$ gives a linear gradient function.",
            ),
            step(
                4,
                "Evaluate at the fixed point",
                "g'(2) = 2(2) = 4",
                "At $\\alpha = 2$, the gradient of $g$ is $4$, steeper than the line $y = x$.",
            ),
            step(
                5,
                "Check the magnitude",
                "|g'(2)| = 4 > 1",
                "Because $|g'(\\alpha)| > 1$, each iteration amplifies the error rather than reducing it.",
            ),
            step(
                6,
                "Illustrate with one step from $x_0 = 2.1$",
                "x_1 = (2.1)^2 - 2 = 4.41 - 2 = 2.41",
                "Starting just above $2$, one step moves the iterate further away to $2.41$.",
            ),
            step(
                7,
                "Explain geometrically",
                "\\text{Steeper than } y = x \\Rightarrow \\text{iterates move away from } \\alpha",
                "On a cobweb diagram, the path spirals outward instead of inward when $|g'(\\alpha)| > 1$.",
            ),
            step(
                8,
                "State the conclusion",
                "|g'(2)| = 4 > 1 \\Rightarrow \\text{divergence}",
                "The derivative test shows this rearrangement is unsuitable for finding the root at $x = 2$.",
            ),
            step(
                9,
                "Give a convergent alternative",
                "x^2 - 2 = x \\Rightarrow x = \\sqrt{x + 2}, \\quad g'(2) = \\frac{1}{2\\sqrt{4}} = \\frac{1}{4} < 1",
                "Rearranging to $x = \\sqrt{x + 2}$ gives $|g'(2)| = \\dfrac{1}{4} < 1$, so that formula would converge to $\\alpha = 2$.",
            ),
        ],
        "$|g'(2)| = 4 > 1$, so errors grow each step and the iteration diverges away from $\\alpha = 2$.",
    ),
    q(
        27,
        "Intermediate",
        5,
        "written",
        ["choosing g(x)", "rearrangement", "convergence"],
        "The equation $x^3 - x - 1 = 0$ has a root $\\alpha \\approx 1.32$ in the interval $[1, 2]$. "
        "Two rearrangements are proposed:\n\n"
        "(A) $x_{n+1} = x_n^3 - 1$\n\n"
        "(B) $x_{n+1} = \\sqrt[3]{x_n + 1}$\n\n"
        "Determine which formula is suitable for finding $\\alpha$, giving reasons.",
        [
            step(
                1,
                "Identify $g(x)$ for each option",
                "g_A(x) = x^3 - 1, \\quad g_B(x) = \\sqrt[3]{x + 1}",
                "Each rearrangement corresponds to a different function $g$ in the fixed-point form $x = g(x)$.",
            ),
            step(
                2,
                "Differentiate option (A)",
                "g_A'(x) = 3x^2",
                "The gradient of rearrangement (A) is a parabola opening upward.",
            ),
            step(
                3,
                "Test (A) at $\\alpha \\approx 1.32$",
                "g_A'(1.32) = 3(1.32)^2 \\approx 5.23 > 1",
                "Near the root, $|g_A'(\\alpha)| > 1$, so iteration (A) would diverge.",
            ),
            step(
                4,
                "Differentiate option (B)",
                "g_B'(x) = \\frac{1}{3}(x + 1)^{-2/3}",
                "The cube-root rearrangement has a gentler gradient near the root.",
            ),
            step(
                5,
                "Test (B) at $\\alpha \\approx 1.32$",
                "g_B'(1.32) = \\frac{1}{3}(2.32)^{-2/3} \\approx 0.22 < 1",
                "Here $|g_B'(\\alpha)| < 1$, satisfying the convergence condition.",
            ),
            step(
                6,
                "Check fixed point for (B)",
                "g_B(\\alpha) = \\alpha \\Leftrightarrow \\alpha^3 = \\alpha + 1",
                "Option (B) is derived directly from the original equation, so its fixed point is the required root.",
            ),
            step(
                7,
                "Compare starting values",
                "x_0 = 1.5 \\Rightarrow g_B(1.5) = \\sqrt[3]{2.5} \\approx 1.36",
                "A trial step from $x_0 = 1.5$ stays near $\\alpha$, whereas (A) would send $1.5$ to $2.375$.",
            ),
            step(
                8,
                "Conclude",
                "\\text{Use (B): } x_{n+1} = \\sqrt[3]{x_n + 1}",
                "Only rearrangement (B) has $|g'(\\alpha)| < 1$ and keeps iterates near the root in $[1, 2]$.",
            ),
            step(
                9,
                "Summarise the derivative test",
                "|g_A'(\\alpha)| \\approx 5.23 > 1 \\text{ (diverges)}, \\quad |g_B'(\\alpha)| \\approx 0.22 < 1 \\text{ (converges)}",
                "Comparing $|g'(\\alpha)|$ at the same root is the standard way to decide between competing rearrangements.",
            ),
        ],
        "Use (B) $x_{n+1} = \\sqrt[3]{x_n + 1}$ because $|g'(\\alpha)| \\approx 0.22 < 1$; (A) has $|g'(\\alpha)| > 1$ and diverges.",
    ),
    q(
        28,
        "Intermediate",
        4,
        "written",
        ["staircase convergence", "cobweb convergence", "iteration behaviour"],
        "Explain the difference between staircase and cobweb convergence when illustrated on a cobweb diagram for $x_{n+1} = g(x_n)$.",
        [
            step(
                1,
                "Set up the diagram",
                "\\text{Plot } y = g(x) \\text{ and } y = x \\text{ on the same axes}",
                "The cobweb diagram tracks how each iterate moves between the curve $y = g(x)$ and the line $y = x$.",
            ),
            step(
                2,
                "Describe one iteration step",
                "x_{n+1} = g(x_n) \\Rightarrow \\text{vertical to curve, then horizontal to } y = x",
                "From $(x_n, x_n)$ on the line $y = x$, move vertically to the graph of $g$, then horizontally back to $y = x$.",
            ),
            step(
                3,
                "Define staircase convergence",
                "0 < g'(\\alpha) < 1 \\Rightarrow \\text{iterates stay on the same side of } \\alpha",
                "When $g'(\\alpha)$ is positive but less than $1$, each new $x$-value lies between the previous one and $\\alpha$ on the same side.",
            ),
            step(
                4,
                "Sketch staircase behaviour",
                "\\text{Steps march along one side of } y = x \\text{ toward } \\alpha",
                "The path looks like a staircase climbing or descending directly toward the fixed point without crossing it.",
            ),
            step(
                5,
                "Define cobweb convergence",
                "g'(\\alpha) < 0 \\Rightarrow \\text{iterates alternate sides of } \\alpha",
                "A negative gradient at the fixed point means each iterate overshoots to the opposite side of $\\alpha$.",
            ),
            step(
                6,
                "Sketch cobweb behaviour",
                "\\text{Path spirals inward, crossing } y = x \\text{ repeatedly}",
                "The name comes from the web-like pattern formed when iterates bounce back and forth while closing in.",
            ),
            step(
                7,
                "Link to $|g'(\\alpha)|$",
                "|g'(\\alpha)| < 1 \\Rightarrow \\text{convergence; } > 1 \\Rightarrow \\text{divergence}",
                "The sign of $g'(\\alpha)$ decides staircase vs cobweb; the magnitude decides whether the pattern shrinks or grows.",
            ),
            step(
                8,
                "Summarise",
                "\\text{Staircase: same side; Cobweb: alternate sides}",
                "Both can converge when $|g'(\\alpha)| < 1$, but the geometry of the cobweb path differs according to the sign of $g'(\\alpha)$.",
            ),
            step(
                9,
                "Give an example of each",
                "g(x) = \\sqrt{x+1}: \\text{staircase}; \\quad g(x) = \\cos x: \\text{cobweb}",
                "The square-root rearrangement has positive gradient near its root; the cosine iteration has negative gradient.",
            ),
        ],
        "Staircase: $0 < g'(\\alpha) < 1$, iterates stay on one side of $\\alpha$. "
        "Cobweb: $g'(\\alpha) < 0$ with $|g'(\\alpha)| < 1$, iterates alternate sides while converging.",
    ),
    q(
        29,
        "Intermediate",
        4,
        "numeric",
        ["fixed-point iteration", "calculating terms"],
        "Use $x_{n+1} = 1 + \\dfrac{2}{x_n^2}$ with $x_0 = 1.5$ to find $x_1$, $x_2$ and $x_3$, giving answers correct to $4$ decimal places.",
        [
            step(
                1,
                "Calculate $x_1$",
                "x_1 = 1 + \\frac{2}{(1.5)^2} = 1 + \\frac{2}{2.25} = 1 + 0.888\\ldots",
                "Square $x_0$, divide $2$ by the result, then add $1$.",
            ),
            step(
                2,
                "Evaluate $x_1$",
                "x_1 = 1.8889 \\text{ (4 d.p.)}",
                "To four decimal places $x_1 = 1.8889$.",
            ),
            step(
                3,
                "Calculate $x_2$",
                "x_2 = 1 + \\frac{2}{(1.8889)^2} = 1 + \\frac{2}{3.5680} \\approx 1.5605",
                "Substitute the rounded $x_1$ and repeat the same operations.",
            ),
            step(
                4,
                "Calculate $x_3$",
                "x_3 = 1 + \\frac{2}{(1.5605)^2} = 1 + \\frac{2}{2.4352} \\approx 1.8213",
                "A third application of the formula gives $x_3 = 1.8213$ to four decimal places.",
            ),
            step(
                5,
                "Note the oscillation",
                "x_1 \\approx 1.89,\\ x_2 \\approx 1.56,\\ x_3 \\approx 1.82",
                "Values bounce above and below a limit near $1.7$, indicating cobweb convergence.",
            ),
            step(
                6,
                "Identify the fixed point",
                "x = 1 + \\frac{2}{x^2} \\Rightarrow x^3 = x + 2",
                "The limit satisfies this cubic, which is related to finding roots of $x^3 - x - 2 = 0$.",
            ),
            step(
                7,
                "Check $|g'(x)|$ at the root",
                "g'(x) = -\\frac{4}{x^3} \\Rightarrow |g'(\\alpha)| < 1 \\text{ near } \\alpha \\approx 1.65",
                "The negative gradient confirms cobweb behaviour while $|g'(\\alpha)| < 1$ ensures convergence.",
            ),
            step(
                8,
                "State the three iterates",
                "x_1 = 1.8889, \\quad x_2 = 1.5605, \\quad x_3 = 1.8213",
                "These are the first three iterates after $x_0 = 1.5$, each to four decimal places.",
            ),
            step(
                9,
                "Comment on accuracy",
                "\\text{Keep extra digits during working to minimise rounding drift}",
                "Using stored calculator values rather than rounded intermediates would give slightly more accurate later terms.",
            ),
        ],
        "$x_1 = 1.8889$, $x_2 = 1.5605$, $x_3 = 1.8213$ (4 d.p.).",
    ),
    q(
        30,
        "Intermediate",
        4,
        "written",
        ["convergence", "derivative test", "fixed point"],
        "The iterative formula $x_{n+1} = \\dfrac{x_n^3 + 1}{4}$ has a fixed point at $\\alpha = 1$. "
        "Find $g'(x)$ and use it to show that the iteration converges to $\\alpha$ when $x_0$ is sufficiently close to $1$.",
        [
            step(
                1,
                "Identify $g(x)$",
                "g(x) = \\frac{x^3 + 1}{4}",
                "This rational-looking formula is a cubic scaled by $\\dfrac{1}{4}$.",
            ),
            step(
                2,
                "Verify $\\alpha = 1$ is a fixed point",
                "g(1) = \\frac{1 + 1}{4} = \\frac{1}{2} \\neq 1",
                "Check: $g(1) = \\dfrac{2}{4} = \\dfrac{1}{2}$, so $\\alpha = 1$ is NOT a fixed point. "
                "Solve $x = \\dfrac{x^3+1}{4}$.",
            ),
            step(
                3,
                "Find the correct fixed point",
                "4x = x^3 + 1 \\Rightarrow x^3 - 4x + 1 = 0",
                "Fixed points satisfy this cubic; one root lies near $x \\approx 0.254$ and another near $x \\approx 1.86$.",
            ),
            step(
                4,
                "Differentiate $g(x)$",
                "g'(x) = \\frac{3x^2}{4}",
                "Differentiating the cubic and dividing by $4$ gives this simple expression.",
            ),
            step(
                5,
                "Evaluate at $\\alpha \\approx 1.860$",
                "g'(1.86) = \\frac{3(1.86)^2}{4} \\approx \\frac{10.38}{4} \\approx 2.60 > 1",
                "At the root near $1.86$, $|g'| > 1$, so that fixed point would diverge.",
            ),
            step(
                6,
                "Evaluate at $\\alpha \\approx 0.254$",
                "g'(0.254) = \\frac{3(0.254)^2}{4} \\approx 0.048 < 1",
                "At the smaller root, $|g'(\\alpha)| \\ll 1$, guaranteeing fast convergence.",
            ),
            step(
                7,
                "State the convergence result",
                "|g'(0.254)| \\approx 0.05 < 1 \\Rightarrow \\text{convergence to } \\alpha \\approx 0.254",
                "Starting near this root, each error shrinks to about $5\\%$ of its previous size.",
            ),
            step(
                8,
                "Describe the behaviour",
                "g'(\\alpha) > 0 \\Rightarrow \\text{staircase convergence}",
                "Because the gradient is positive, iterates approach the root from one side without overshooting.",
            ),
        ],
        "$g'(x) = \\dfrac{3x^2}{4}$. At $\\alpha \\approx 0.254$, $|g'(\\alpha)| \\approx 0.05 < 1$ (staircase convergence). "
        "At $\\alpha \\approx 1.86$, $|g'(\\alpha)| > 1$ (divergence).",
    ),
])

# Fix q030 question text to match corrected maths
questions[-1] = q(
    30,
    "Intermediate",
    4,
    "written",
    ["convergence", "derivative test", "fixed point"],
    "The iterative formula $x_{n+1} = \\dfrac{x_n^3 + 1}{4}$ has a fixed point $\\alpha$ in the interval $(0, 1)$. "
    "Find $g'(x)$ and use it to show that the iteration converges to this $\\alpha$ when $x_0$ is sufficiently close.",
    [
        step(
            1,
            "Identify $g(x)$",
            "g(x) = \\frac{x^3 + 1}{4}",
            "The iteration is $x_{n+1} = g(x_n)$ with this cubic function scaled by $\\dfrac{1}{4}$.",
        ),
        step(
            2,
            "Find fixed points",
            "x = \\frac{x^3 + 1}{4} \\Rightarrow x^3 - 4x + 1 = 0",
            "Fixed points satisfy this cubic equation.",
        ),
        step(
            3,
            "Locate the root in $(0, 1)$",
            "f(0) = 1 > 0,\\ f(1) = -2 < 0 \\Rightarrow \\alpha \\in (0, 1)",
            "Sign change confirms a root between $0$ and $1$; numerically $\\alpha \\approx 0.254$.",
        ),
        step(
            4,
            "Differentiate $g(x)$",
            "g'(x) = \\frac{3x^2}{4}",
            "The gradient of $g$ at any point depends only on $x^2$.",
        ),
        step(
            5,
            "Evaluate $|g'(\\alpha)|$",
            "g'(0.254) = \\frac{3(0.254)^2}{4} \\approx 0.048",
            "At the root in $(0,1)$, the magnitude of the gradient is much less than $1$.",
        ),
        step(
            6,
            "Apply the convergence theorem",
            "|g'(\\alpha)| \\approx 0.05 < 1 \\Rightarrow \\text{local convergence}",
            "Each iteration reduces the error to roughly $5\\%$ of its previous size.",
        ),
        step(
            7,
            "Classify the cobweb type",
            "g'(\\alpha) > 0 \\Rightarrow \\text{staircase convergence}",
            "A positive gradient means iterates stay on the same side of $\\alpha$ as they approach it.",
        ),
        step(
            8,
            "Conclude",
            "g'(x) = \\frac{3x^2}{4},\\ |g'(\\alpha)| < 1 \\Rightarrow \\text{converges to } \\alpha \\approx 0.254",
            "The derivative test confirms convergence to the fixed point in $(0, 1)$ when $x_0$ starts nearby.",
        ),
        step(
            9,
            "Trial iteration from $x_0 = 0.3$",
            "x_1 = \\frac{0.027 + 1}{4} = 0.257, \\quad x_2 \\approx 0.254",
            "Starting just above $\\alpha$, two steps already reach the fixed point to three decimal places, confirming fast staircase convergence.",
        ),
    ],
    "$g'(x) = \\dfrac{3x^2}{4}$. At $\\alpha \\approx 0.254$, $|g'(\\alpha)| \\approx 0.05 < 1$, so the iteration converges (staircase).",
)

questions.extend([
    q(
        31,
        "Intermediate",
        5,
        "numeric",
        ["Newton-Raphson", "calculating terms"],
        "The equation $x^3 - 3x - 1 = 0$ has a root near $x = 2$. "
        "Use Newton–Raphson with $x_0 = 2$ to find $x_1$ and $x_2$, giving answers correct to $3$ decimal places.",
        [
            step(
                1,
                "Define $f(x)$ and $f'(x)$",
                "f(x) = x^3 - 3x - 1, \\quad f'(x) = 3x^2 - 3",
                "Newton's method needs both the function and its derivative.",
            ),
            step(
                2,
                "Evaluate at $x_0 = 2$",
                "f(2) = 8 - 6 - 1 = 1, \\quad f'(2) = 12 - 3 = 9",
                "At $x_0 = 2$ the curve is $1$ unit above the axis with gradient $9$.",
            ),
            step(
                3,
                "Calculate $x_1$",
                "x_1 = 2 - \\frac{1}{9} = \\frac{17}{9} \\approx 1.889",
                "Subtracting $\\dfrac{f(2)}{f'(2)}$ moves the estimate left toward the root.",
            ),
            step(
                4,
                "Evaluate at $x_1 \\approx 1.889$",
                "f(1.889) \\approx 0.089, \\quad f'(1.889) \\approx 7.71",
                "The function value is now much smaller, showing progress toward a root.",
            ),
            step(
                5,
                "Calculate $x_2$",
                "x_2 = 1.889 - \\frac{0.089}{7.71} \\approx 1.877",
                "A second Newton step refines the estimate to $x_2 = 1.877$ (3 d.p.).",
            ),
            step(
                6,
                "Compare with the true root",
                "\\alpha \\approx 1.879 \\Rightarrow x_2 \\text{ is already very close}",
                "Newton's method typically converges much faster than simple fixed-point iteration.",
            ),
            step(
                7,
                "Note the quadratic convergence",
                "\\text{Error roughly squares each step near a simple root}",
                "This rapid improvement is why Newton–Raphson is preferred when it is safe to use.",
            ),
            step(
                8,
                "State the iterates",
                "x_1 = 1.889, \\quad x_2 = 1.877",
                "These are the first two Newton iterates from $x_0 = 2$, to three decimal places.",
            ),
            step(
                9,
                "Check $f(x_2)$",
                "f(1.877) \\approx 0.003",
                "The function value at $x_2$ is already near zero, confirming a good approximation to the root.",
            ),
        ],
        "$x_1 = 1.889$, $x_2 = 1.877$ (3 d.p.).",
    ),
    q(
        32,
        "Intermediate",
        5,
        "written",
        ["choosing g(x)", "comparing formulae", "convergence"],
        "For the equation $e^x = 4x$, two iterative formulae are suggested:\n\n"
        "(P) $x_{n+1} = \\dfrac{e^{x_n}}{4}$\n\n"
        "(Q) $x_{n+1} = \\ln(4x_n)$\n\n"
        "The root $\\alpha \\approx 0.77$ lies in $[0, 1]$. "
        "By finding $g'(\\alpha)$ for each, decide which iteration converges more quickly near $\\alpha$.",
        [
            step(
                1,
                "Identify the functions",
                "g_P(x) = \\frac{e^x}{4}, \\quad g_Q(x) = \\ln(4x)",
                "Each rearrangement of $e^x = 4x$ gives a different fixed-point map.",
            ),
            step(
                2,
                "Differentiate (P)",
                "g_P'(x) = \\frac{e^x}{4}",
                "The exponential derivative matches the original numerator scaled by $\\dfrac{1}{4}$.",
            ),
            step(
                3,
                "Evaluate $g_P'(\\alpha)$",
                "g_P'(0.77) = \\frac{e^{0.77}}{4} \\approx \\frac{2.16}{4} \\approx 0.54",
                "At the root, $|g_P'(\\alpha)| \\approx 0.54 < 1$, so (P) converges.",
            ),
            step(
                4,
                "Differentiate (Q)",
                "g_Q'(x) = \\frac{1}{x}",
                "The derivative of $\\ln(4x)$ simplifies to $\\dfrac{1}{x}$ because $\\ln 4$ is constant.",
            ),
            step(
                5,
                "Evaluate $g_Q'(\\alpha)$",
                "g_Q'(0.77) = \\frac{1}{0.77} \\approx 1.30 > 1",
                "Here $|g_Q'(\\alpha)| > 1$, so iteration (Q) diverges near $\\alpha$.",
            ),
            step(
                6,
                "Compare magnitudes",
                "|g_P'(\\alpha)| \\approx 0.54 < 1, \\quad |g_Q'(\\alpha)| \\approx 1.30 > 1",
                "Only (P) satisfies the convergence condition at the root.",
            ),
            step(
                7,
                "Interpret speed of convergence",
                "\\text{Smaller } |g'(\\alpha)| \\Rightarrow \\text{faster convergence}",
                "With $|g_P'(\\alpha)| \\approx 0.54$, errors shrink to about $54\\%$ each step — moderate speed.",
            ),
            step(
                8,
                "Test one step from $x_0 = 0.8$",
                "g_P(0.8) = \\frac{e^{0.8}}{4} \\approx 0.55, \\quad g_Q(0.8) = \\ln(3.2) \\approx 1.16",
                "Formula (P) moves toward $\\alpha$; (Q) overshoots above $1$.",
            ),
            step(
                9,
                "Conclude",
                "\\text{Use (P); it converges while (Q) diverges}",
                "Formula (P) $x_{n+1} = \\dfrac{e^{x_n}}{4}$ is the suitable choice near $\\alpha \\approx 0.77$.",
            ),
        ],
        "Use (P): $|g_P'(\\alpha)| \\approx 0.54 < 1$ (converges). "
        "(Q) has $|g_Q'(\\alpha)| \\approx 1.30 > 1$ (diverges).",
    ),
    q(
        33,
        "Intermediate",
        4,
        "written",
        ["divergence", "derivative test", "predicting behaviour"],
        "Let $g(x) = 2x - x^2$. The iterative formula $x_{n+1} = g(x_n)$ has fixed points at $x = 0$ and $x = 1$. "
        "Determine whether the iteration converges to $\\alpha = 1$ when $x_0 = 0.5$, explaining your reasoning.",
        [
            step(
                1,
                "Differentiate $g(x)$",
                "g'(x) = 2 - 2x",
                "The gradient of $g$ is linear, decreasing as $x$ increases.",
            ),
            step(
                2,
                "Evaluate $g'(1)$",
                "g'(1) = 2 - 2 = 0",
                "At $\\alpha = 1$, the gradient is exactly zero — a special case of $|g'(\\alpha)| < 1$.",
            ),
            step(
                3,
                "Apply the convergence test",
                "|g'(1)| = 0 < 1 \\Rightarrow \\text{convergence to } \\alpha = 1",
                "With zero gradient at the fixed point, convergence is especially fast (second order).",
            ),
            step(
                4,
                "Compute the first few iterates from $x_0 = 0.5$",
                "x_1 = 2(0.5) - 0.25 = 0.75, \\quad x_2 = 2(0.75) - 0.5625 = 0.9375",
                "Each step moves noticeably closer to $1$.",
            ),
            step(
                5,
                "Continue to $x_3$",
                "x_3 = 2(0.9375) - (0.9375)^2 = 1.875 - 0.8799 \\approx 0.9951",
                "By the third iterate we are within $0.005$ of $\\alpha = 1$.",
            ),
            step(
                6,
                "Classify the cobweb pattern",
                "g'(\\alpha) = 0 > 0 \\Rightarrow \\text{staircase convergence}",
                "Iterates approach from one side without oscillation.",
            ),
            step(
                7,
                "Check the other fixed point",
                "g'(0) = 2 > 1 \\Rightarrow \\text{divergence from } x = 0",
                "The iteration converges to $\\alpha = 1$, not to the other fixed point at $0$.",
            ),
            step(
                8,
                "Conclude",
                "x_0 = 0.5 \\Rightarrow x_n \\to 1 \\text{ (staircase, fast convergence)}",
                "Starting at $0.5$, the iteration converges rapidly to $\\alpha = 1$ because $g'(1) = 0$.",
            ),
            step(
                9,
                "Compare error reduction",
                "|x_3 - 1| \\approx 0.005 \\text{ after only three steps}",
                "With $g'(1) = 0$, errors shrink much faster than when $|g'(\\alpha)|$ is merely less than $1$ — this is called superlinear convergence.",
            ),
        ],
        "Converges to $\\alpha = 1$: $g'(1) = 0 < 1$ gives fast staircase convergence; $x_1 = 0.75$, $x_2 = 0.9375$, $x_3 \\approx 0.995$.",
    ),
    q(
        34,
        "Intermediate",
        5,
        "numeric",
        ["fixed-point iteration", "interval", "calculating terms"],
        "Show that $f(x) = x^3 - 5x + 1$ changes sign on $[2, 3]$, and use $x_{n+1} = \\sqrt{\\dfrac{5x_n - 1}{x_n}}$ "
        "with $x_0 = 2.2$ to find $x_1$ and $x_2$ correct to $3$ decimal places.",
        [
            step(
                1,
                "Evaluate $f$ at the endpoints",
                "f(2) = 8 - 10 + 1 = -1, \\quad f(3) = 27 - 15 + 1 = 13",
                "A sign change from negative to positive confirms a root in $[2, 3]$ by the Intermediate Value Theorem.",
            ),
            step(
                2,
                "Derive the iterative formula",
                "x^3 - 5x + 1 = 0 \\Rightarrow x^3 = 5x - 1 \\Rightarrow x = \\sqrt{\\frac{5x - 1}{x}}",
                "Dividing by $x$ (valid for $x \\neq 0$) and taking the square root gives the stated rearrangement.",
            ),
            step(
                3,
                "Substitute $x_0 = 2.2$",
                "x_1 = \\sqrt{\\frac{5(2.2) - 1}{2.2}} = \\sqrt{\\frac{10}{2.2}} = \\sqrt{4.545\\ldots}",
                "Multiply $x_0$ by $5$, subtract $1$, divide by $x_0$, then take the square root.",
            ),
            step(
                4,
                "Evaluate $x_1$",
                "x_1 = \\sqrt{4.545\\ldots} \\approx 2.132",
                "To three decimal places $x_1 = 2.132$.",
            ),
            step(
                5,
                "Substitute $x_1$ to find $x_2$",
                "x_2 = \\sqrt{\\frac{5(2.132) - 1}{2.132}} = \\sqrt{\\frac{9.660}{2.132}} = \\sqrt{4.531}",
                "Repeat the same procedure with the new iterate.",
            ),
            step(
                6,
                "Evaluate $x_2$",
                "x_2 = \\sqrt{4.531} \\approx 2.128",
                "The second iterate is $x_2 = 2.128$ to three decimal places.",
            ),
            step(
                7,
                "Check convergence",
                "x_1 - x_2 \\approx 0.004 \\Rightarrow \\text{settling toward a root near } 2.13",
                "The small change between $x_1$ and $x_2$ suggests the iteration is converging in $[2, 3]$.",
            ),
            step(
                8,
                "Verify $|g'(x)|$ near the root",
                "g(x) = \\sqrt{\\frac{5x-1}{x}} \\Rightarrow |g'(\\alpha)| < 1 \\text{ for the root in } [2,3]",
                "The derivative test confirms this rearrangement is suitable for the root located by sign change.",
            ),
            step(
                9,
                "State the answers",
                "x_1 = 2.132, \\quad x_2 = 2.128",
                "A root exists in $[2, 3]$ by sign change; the iterates from $x_0 = 2.2$ converge toward it.",
            ),
        ],
        "Sign change: $f(2) = -1$, $f(3) = 13$. $x_1 = 2.132$, $x_2 = 2.128$ (3 d.p.).",
    ),
    q(
        35,
        "Intermediate",
        6,
        "written",
        ["convergence", "choosing g(x)", "Newton-Raphson", "iterative formula"],
        "The equation $x^2 - 3x - 1 = 0$ has a positive root $\\alpha = \\dfrac{3 + \\sqrt{13}}{2} \\approx 3.303$. "
        "(a) Show that $x = \\dfrac{x^2 - 1}{3}$ is a valid rearrangement. "
        "(b) Find $g'(x)$ and decide whether fixed-point iteration converges to $\\alpha$. "
        "(c) State one advantage of Newton–Raphson over this fixed-point method.",
        [
            step(
                1,
                "Rearrange the equation (part a)",
                "x^2 - 3x - 1 = 0 \\Rightarrow x^2 = 3x + 1 \\Rightarrow x = \\frac{x^2 - 1}{3}",
                "Subtracting $1$ from both sides of $x^2 = 3x + 1$ and dividing by $3$ isolates $x$ on the left.",
            ),
            step(
                2,
                "Confirm the fixed point",
                "g(x) = \\frac{x^2 - 1}{3} \\Rightarrow g(\\alpha) = \\frac{\\alpha^2 - 1}{3}",
                "At the root, $\\alpha^2 = 3\\alpha + 1$, so $g(\\alpha) = \\dfrac{3\\alpha + 1 - 1}{3} = \\alpha$.",
            ),
            step(
                3,
                "Differentiate $g(x)$ (part b)",
                "g'(x) = \\frac{2x}{3}",
                "The gradient of the iterative function grows linearly with $x$.",
            ),
            step(
                4,
                "Evaluate at $\\alpha \\approx 3.303$",
                "g'(\\alpha) = \\frac{2(3.303)}{3} \\approx 2.20",
                "At the positive root, the gradient exceeds $1$ in magnitude.",
            ),
            step(
                5,
                "Apply the convergence test",
                "|g'(\\alpha)| \\approx 2.20 > 1 \\Rightarrow \\text{divergence}",
                "Fixed-point iteration with this rearrangement does not converge to $\\alpha$.",
            ),
            step(
                6,
                "Explain geometrically",
                "\\text{Graph of } g \\text{ is steeper than } y = x \\text{ at } \\alpha",
                "Iterates starting near $\\alpha$ are pushed away rather than drawn in.",
            ),
            step(
                7,
                "Suggest a better rearrangement",
                "x_{n+1} = \\sqrt{3x_n + 1} \\Rightarrow g'(\\alpha) = \\frac{3}{2\\sqrt{3\\alpha+1}} \\approx 0.45 < 1",
                "The square-root form $x = \\sqrt{3x+1}$ would converge, illustrating the importance of choosing $g(x)$ carefully.",
            ),
            step(
                8,
                "Newton–Raphson advantage (part c)",
                "f(x) = x^2 - 3x - 1, \\quad x_{n+1} = x_n - \\frac{f(x_n)}{f'(x_n)}",
                "Newton's method uses local gradient information to adjust each step optimally.",
            ),
            step(
                9,
                "Compare convergence rates",
                "\\text{Newton: quadratic convergence near a simple root}",
                "Newton–Raphson typically doubles the number of correct digits each step, far faster than a linearly convergent fixed-point map with small $|g'(\\alpha)|$.",
            ),
            step(
                10,
                "State when fixed-point is preferred",
                "\\text{Fixed-point: simpler arithmetic; Newton: fewer steps}",
                "Fixed-point iteration avoids computing derivatives but may need a carefully chosen rearrangement; Newton converges faster when $f'(\\alpha) \\neq 0$.",
            ),
            step(
                11,
                "Summarise parts (a)–(c)",
                "\\text{(a) Valid rearrangement; (b) diverges since } |g'(\\alpha)| > 1; \\text{ (c) Newton is faster}",
                "The chosen $g(x)$ fails the derivative test at $\\alpha$, while Newton–Raphson would succeed with rapid convergence.",
            ),
            step(
                12,
                "Final check on $\\alpha$",
                "\\alpha = \\frac{3 + \\sqrt{13}}{2} \\approx 3.303",
                "This is the positive root from the quadratic formula applied to $x^2 - 3x - 1 = 0$.",
            ),
        ],
        "(a) $x = \\dfrac{x^2-1}{3}$ from $x^2 = 3x+1$. "
        "(b) $g'(x)=\\dfrac{2x}{3}$; $|g'(\\alpha)|\\approx 2.20>1$, so this iteration diverges. "
        "(c) Newton–Raphson converges quadratically (much faster) when $f'(\\alpha)\\neq 0$.",
    ),
])

assert len(questions) == 17, f"Expected 17 questions, got {len(questions)}"
easy = sum(1 for qn in questions if qn["difficulty"] == "Easy")
inter = sum(1 for qn in questions if qn["difficulty"] == "Intermediate")
assert easy == 6, f"Expected 6 Easy, got {easy}"
assert inter == 11, f"Expected 11 Intermediate, got {inter}"

failures = []
for qn in questions:
    n = int(qn["id"].split(".q")[1])
    assert 19 <= n <= 35
    steps = qn["workedSolution"]["steps"]
    lo, hi = (6, 9) if qn["difficulty"] == "Easy" else (9, 13)
    if not (lo <= len(steps) <= hi):
        failures.append(f"{qn['id']}: {len(steps)} steps (need {lo}-{hi})")
if failures:
    raise AssertionError("\n".join(failures))

write_questions_ts(OUTPUT, questions, batch_label="Locating roots and iteration q019–q035")
print(f"Wrote {len(questions)} questions to {OUTPUT}")
