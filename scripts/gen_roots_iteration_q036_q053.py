#!/usr/bin/env python3
"""Generate q036–q053 for Locating roots and iteration (Year 2 Pure)."""
import json
import math

OUT = "/Users/benjaminwalpole/Wisest_Maths_V5/wisest-maths-content/src/data/questions/a-level-maths/year-2-pure/locating-roots-and-iteration-q036-q053.ts"

SUBTOPIC = "Locating roots and iteration"
SUBTOPIC_ID = "al.y2.pure.roots-iteration"


def step(n, desc, work, expl):
    return {"stepNumber": n, "description": desc, "workingLatex": work, "explanation": expl, "diagram": None}


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

# ── q036 Intermediate: change of sign fails at double root ──────────────────
questions.append(make_q(
    "q036", "Intermediate", 5, "written",
    ["change of sign", "limitations", "double root"],
    "The function $f(x) = (x - 2)^2$ has a root at $x = 2$. "
    "Explain why evaluating $f(1)$ and $f(3)$ does **not** demonstrate a sign change, "
    "and state what this reveals about the limitations of the sign-change method.",
    [
        step(1, "Evaluate $f(1)$",
             "f(1) = (1-2)^2 = 1",
             "Substituting $x = 1$ gives a positive value because the squared term is never negative."),
        step(2, "Evaluate $f(3)$",
             "f(3) = (3-2)^2 = 1",
             "Substituting $x = 3$ also gives $1$, so both endpoints share the same sign."),
        step(3, "Compare the signs",
             "f(1) > 0 \\text{ and } f(3) > 0",
             "There is no sign change across the interval $[1,3]$, even though a root exists at $x = 2$."),
        step(4, "Explain the graph behaviour at the root",
             "f(x) \\text{ touches the } x\\text{-axis at } x=2 \\text{ but does not cross it}",
             "At a repeated root the curve meets the axis tangentially, so the function stays on one side of zero near the root."),
        step(5, "State the method's requirement",
             "\\text{Sign-change method requires } f(a)\\,f(b) < 0",
             "The method is built on the Intermediate Value Theorem for continuous functions that actually cross the axis."),
        step(6, "Identify the failure type",
             "\\text{Failure: root of even multiplicity (touching, not crossing)}",
             "A double root produces a 'touch' rather than a 'cross', so the function may remain non-negative (or non-positive) throughout an interval containing the root."),
        step(7, "Contrast with a simple crossing root",
             "\\text{e.g. } f(x)=x-2 \\Rightarrow f(1)<0,\\; f(3)>0",
             "When the graph crosses the axis, the function values on either side must have opposite signs — that is the situation the method is designed for."),
        step(8, "Note continuity is still satisfied here",
             "f \\text{ is continuous on } [1,3]",
             "Continuity alone is not enough; the sign must also change, which fails at a tangent touch."),
        step(9, "Summarise the limitation",
             "\\text{No sign change } \\not\\Rightarrow \\text{ no root; sign change needed to locate via IVT}",
             "Students must recognise that absence of a sign change does not prove absence of a root, and presence of a root does not guarantee a detectable sign change."),
        step(10, "Conclusion",
             "\\text{Double roots can invalidate sign-change location}",
             "Always inspect the graph or algebra when a root is suspected but endpoint values have the same sign."),
    ],
    "Both $f(1) = 1$ and $f(3) = 1$ are positive, so there is no sign change. "
    "The sign-change method fails here because the root at $x = 2$ is a double root: the curve touches the $x$-axis without crossing, "
    "so $f(x)$ does not change sign in any interval containing the root.",
))

# ── q037 Intermediate: locate root by sign change ─────────────────────────
questions.append(make_q(
    "q037", "Intermediate", 4, "written",
    ["change of sign", "interval", "cubic"],
    "Show that the equation $x^3 - 4x - 1 = 0$ has a root in the interval $[2, 3]$.",
    [
        step(1, "Define the function",
             "f(x) = x^3 - 4x - 1",
             "Rewriting the equation as $f(x) = 0$ lets us test endpoint values for a sign change."),
        step(2, "Evaluate at the left endpoint",
             "f(2) = 8 - 8 - 1 = -1",
             "At $x = 2$ the value is negative."),
        step(3, "Evaluate at the right endpoint",
             "f(3) = 27 - 12 - 1 = 14",
             "At $x = 3$ the value is positive."),
        step(4, "Compare signs",
             "f(2) = -1 < 0 \\quad\\text{and}\\quad f(3) = 14 > 0",
             "The endpoints have opposite signs."),
        step(5, "Check continuity",
             "f \\text{ is a polynomial, hence continuous on } [2,3]",
             "Polynomials are continuous everywhere, so the Intermediate Value Theorem applies on this closed interval."),
        step(6, "Apply the sign-change principle",
             "f(2)\\,f(3) < 0",
             "A continuous function that changes sign over an interval must cross zero at least once inside that interval."),
        step(7, "State the IVT conclusion",
             "\\exists\\, \\alpha \\in (2,3) \\text{ such that } f(\\alpha) = 0",
             "Therefore the equation has at least one root strictly between $2$ and $3$."),
        step(8, "Interpret for the original equation",
             "x^3 - 4x - 1 = 0 \\text{ has a root in } (2,3)",
             "This is the standard A-level 'show that' argument for locating a root."),
        step(9, "Optional refinement note",
             "f'(x) = 3x^2 - 4 > 0 \\text{ for } x \\ge 2",
             "The function is increasing on $[2,3]$, so there is exactly one root in the interval — a useful extra observation in exams."),
    ],
    "Since $f(2) = -1 < 0$ and $f(3) = 14 > 0$, with $f$ continuous on $[2,3]$, "
    "there is a root of $x^3 - 4x - 1 = 0$ in the interval $(2, 3)$.",
))

# ── q038 Intermediate: cobweb vs staircase for cos iteration ────────────────
questions.append(make_q(
    "q038", "Intermediate", 5, "written",
    ["iteration", "cobweb", "staircase", "convergence"],
    "The iteration $x_{n+1} = \\cos(x_n)$ with $x_0 = 0.5$ converges to the root of $x = \\cos x$. "
    "(a) Calculate $x_1$, $x_2$ and $x_3$ to 3 decimal places. "
    "(b) Classify the convergence as cobweb or staircase, giving a reason.",
    [
        step(1, "Compute $x_1$",
             "x_1 = \\cos(0.5) \\approx 0.878",
             "Substitute $x_0 = 0.5$ into the iteration formula."),
        step(2, "Compute $x_2$",
             "x_2 = \\cos(0.878) \\approx 0.639",
             "Each new value is obtained by applying $\\cos$ to the previous iterate."),
        step(3, "Compute $x_3$",
             "x_3 = \\cos(0.639) \\approx 0.803",
             "The values are moving toward the fixed point $\\alpha \\approx 0.739$."),
        step(4, "Identify the iteration function",
             "g(x) = \\cos x",
             "Fixed points satisfy $\\alpha = \\cos\\alpha$."),
        step(5, "Differentiate $g$",
             "g'(x) = -\\sin x",
             "The derivative at the root controls whether iterates overshoot (cobweb) or approach from one side (staircase)."),
        step(6, "Evaluate $|g'(\\alpha)|$ at the root",
             "|g'(\\alpha)| = |-\\sin\\alpha| = \\sin\\alpha \\approx 0.694 < 1",
             "Since $\\sin\\alpha < 1$ at the root, the gradient magnitude is less than $1$, which is the condition for convergence."),
        step(7, "Check the sign of $g'(\\alpha)$",
             "g'(\\alpha) = -\\sin\\alpha < 0",
             "A negative gradient at the fixed point means successive iterates alternate above and below $\\alpha$."),
        step(8, "Observe the iterate pattern",
             "x_0 < \\alpha < x_1,\\; x_2 < \\alpha < x_3,\\; \\ldots",
             "The sequence oscillates around the root while narrowing — the hallmark of cobweb convergence."),
        step(9, "State the classification",
             "\\text{Cobweb convergence because } g'(\\alpha) < 0 \\text{ and } |g'(\\alpha)| < 1",
             "Staircase convergence occurs when $0 < g'(\\alpha) < 1$, so iterates approach from one side only."),
        step(10, "Summarise",
             "x_1 \\approx 0.878,\\; x_2 \\approx 0.639,\\; x_3 \\approx 0.803; \\text{ cobweb}",
             "The negative gradient causes alternating overshoots that spiral inward to the root."),
    ],
    "(a) $x_1 \\approx 0.878$, $x_2 \\approx 0.639$, $x_3 \\approx 0.803$. "
    "(b) Cobweb convergence: $g'(\\alpha) = -\\sin\\alpha < 0$ with $|g'(\\alpha)| < 1$, so iterates alternate above and below the root while converging.",
))

# ── q039 Intermediate: classify iteration from g'(x) ───────────────────────
questions.append(make_q(
    "q039", "Intermediate", 4, "written",
    ["iteration", "gradient", "classification"],
    "For the iteration $x_{n+1} = \\sqrt{4 - x_n}$, the fixed point $\\alpha$ satisfies $\\alpha = \\sqrt{4 - \\alpha}$. "
    "Find $\\alpha$ and determine whether convergence is cobweb or staircase.",
    [
        step(1, "Set up the fixed-point equation",
             "\\alpha = \\sqrt{4 - \\alpha}",
             "Squaring is valid here because both sides are non-negative for the convergent root in context."),
        step(2, "Square both sides",
             "\\alpha^2 = 4 - \\alpha",
             "This removes the square root and gives a quadratic."),
        step(3, "Rearrange to standard form",
             "\\alpha^2 + \\alpha - 4 = 0",
             "Collect terms on one side."),
        step(4, "Solve the quadratic",
             "\\alpha = \\frac{-1 + \\sqrt{17}}{2} \\approx 1.562",
             "Take the positive root because $\\sqrt{4-\\alpha}$ is non-negative."),
        step(5, "Write $g(x)$",
             "g(x) = \\sqrt{4 - x}",
             "The iteration is $x_{n+1} = g(x_n)$."),
        step(6, "Differentiate",
             "g'(x) = -\\frac{1}{2\\sqrt{4-x}}",
             "Use the chain rule on $(4-x)^{1/2}$."),
        step(7, "Evaluate $g'(\\alpha)$",
             "g'(\\alpha) = -\\frac{1}{2\\alpha} \\approx -0.320",
             "At the fixed point, $g'(\\alpha)$ is negative."),
        step(8, "Check convergence condition",
             "|g'(\\alpha)| \\approx 0.320 < 1",
             "A magnitude less than $1$ guarantees local convergence to the fixed point."),
        step(9, "Classify the convergence type",
             "g'(\\alpha) < 0 \\Rightarrow \\text{cobweb convergence}",
             "Negative gradient means iterates bounce from one side of $\\alpha$ to the other while closing in."),
        step(10, "State the answer",
             "\\alpha \\approx 1.562,\\; \\text{cobweb}",
             "If $g'(\\alpha)$ were positive with $|g'(\\alpha)| < 1$, the pattern would be a staircase instead."),
    ],
    "$\\alpha = \\dfrac{-1 + \\sqrt{17}}{2} \\approx 1.562$. "
    "Since $g'(\\alpha) = -\\dfrac{1}{2\\alpha} < 0$ and $|g'(\\alpha)| < 1$, convergence is **cobweb**.",
))

# ── q040 Intermediate: perform iterations ───────────────────────────────────
questions.append(make_q(
    "q040", "Intermediate", 4, "numeric",
    ["iteration", "fixed point", "square root"],
    "Use the iteration $x_{n+1} = \\sqrt{5 - x_n}$ with $x_0 = 1.5$ to find $x_1$, $x_2$ and $x_3$, "
    "each correct to 3 decimal places.",
    [
        step(1, "State the iteration",
             "x_{n+1} = \\sqrt{5 - x_n}, \\quad x_0 = 1.5",
             "Each step substitutes the previous value into the square-root formula."),
        step(2, "Calculate $x_1$",
             "x_1 = \\sqrt{5 - 1.5} = \\sqrt{3.5} \\approx 1.871",
             "Under the square root we need a non-negative value; $5 - 1.5 = 3.5 > 0$."),
        step(3, "Calculate $x_2$",
             "x_2 = \\sqrt{5 - 1.871} = \\sqrt{3.129} \\approx 1.769",
             "The iterates are approaching the fixed point from above."),
        step(4, "Calculate $x_3$",
             "x_3 = \\sqrt{5 - 1.769} = \\sqrt{3.231} \\approx 1.798",
             "Small adjustments show the sequence is converging."),
        step(5, "Identify the fixed point (for context)",
             "\\alpha^2 = 5 - \\alpha \\Rightarrow \\alpha \\approx 1.791",
             "The true root of $\\alpha = \\sqrt{5-\\alpha}$ is about $1.791$, consistent with our iterates."),
        step(6, "Check $g'(\\alpha)$ for convergence",
             "g'(\\alpha) = -\\frac{1}{2\\alpha} \\approx -0.279,\\; |g'(\\alpha)| < 1",
             "The gradient condition confirms the iteration converges locally."),
        step(7, "Note the convergence pattern",
             "x_0 < \\alpha < x_1,\\; x_2 < \\alpha < x_3",
             "Alternating above and below indicates cobweb behaviour."),
        step(8, "Round consistently",
             "\\text{All values to 3 d.p.: } 1.871,\\; 1.769,\\; 1.798",
             "Keep the same rounding at each stage as required by the question."),
        step(9, "Present the final iterates",
             "x_1 \\approx 1.871,\\; x_2 \\approx 1.769,\\; x_3 \\approx 1.798",
             "These are the required three iterations from the given starting value."),
    ],
    "$x_1 \\approx 1.871$, $x_2 \\approx 1.769$, $x_3 \\approx 1.798$ (3 d.p.).",
))

# ── q041 Intermediate: show interval then iterate ───────────────────────────
questions.append(make_q(
    "q041", "Intermediate", 6, "numeric",
    ["change of sign", "iteration", "cube root"],
    "(a) Show that $x^3 + x - 5 = 0$ has a root in $[1, 2]$. "
    "(b) Use $x_{n+1} = \\sqrt[3]{5 - x_n}$ with $x_0 = 1.5$ to find $x_1$ and $x_2$ to 3 decimal places.",
    [
        step(1, "Define $f(x)$ for part (a)",
             "f(x) = x^3 + x - 5",
             "Locating a root begins by testing convenient interval endpoints."),
        step(2, "Evaluate $f(1)$",
             "f(1) = 1 + 1 - 5 = -3",
             "The left endpoint gives a negative value."),
        step(3, "Evaluate $f(2)$",
             "f(2) = 8 + 2 - 5 = 5",
             "The right endpoint gives a positive value."),
        step(4, "Apply sign-change argument",
             "f(1) < 0,\\; f(2) > 0,\\; f \\text{ continuous} \\Rightarrow \\text{root in } (1,2)",
             "Opposite signs with continuity guarantee at least one root in the open interval."),
        step(5, "Rearrange for the iteration",
             "x^3 + x = 5 \\Rightarrow x = \\sqrt[3]{5 - x}",
             "Part (b) uses this rearrangement as the fixed-point formula."),
        step(6, "Compute $x_1$",
             "x_1 = \\sqrt[3]{5 - 1.5} = \\sqrt[3]{3.5} \\approx 1.518",
             "Substitute $x_0 = 1.5$ into the cube-root formula."),
        step(7, "Compute $x_2$",
             "x_2 = \\sqrt[3]{5 - 1.518} = \\sqrt[3]{3.482} \\approx 1.516",
             "The second iterate moves slightly closer to the fixed point."),
        step(8, "Estimate the fixed point",
             "\\alpha \\approx 1.516",
             "The iterates stabilise near $\\alpha \\approx 1.516$, confirming the method."),
        step(9, "Check convergence via $g'(\\alpha)$",
             "g(x)=\\sqrt[3]{5-x},\\; g'(\\alpha) = -(5-\\alpha)^{-2/3} \\approx -0.30",
             "With $|g'(\\alpha)| < 1$ and $g'(\\alpha) < 0$, convergence is cobweb."),
        step(10, "State part (a) and (b) answers",
             "\\text{Root in } (1,2);\\; x_1 \\approx 1.518,\\; x_2 \\approx 1.516",
             "This combined style mirrors typical exam questions linking location and iteration."),
    ],
    "(a) $f(1) = -3 < 0$ and $f(2) = 5 > 0$, so there is a root in $(1, 2)$. "
    "(b) $x_1 \\approx 1.518$, $x_2 \\approx 1.516$.",
))

# ── q042 Intermediate: g'(x) at root ───────────────────────────────────────
questions.append(make_q(
    "q042", "Intermediate", 4, "written",
    ["iteration", "gradient", "convergence"],
    "For the iteration $x_{n+1} = 0.5x + 2$, find the fixed point $\\alpha$ and the value of $g'(\\alpha)$. "
    "Explain why the iteration converges for any starting value near $\\alpha$.",
    [
        step(1, "Write the iteration function",
             "g(x) = 0.5x + 2",
             "Fixed points satisfy $x = g(x)$."),
        step(2, "Solve for the fixed point",
             "\\alpha = 0.5\\alpha + 2 \\Rightarrow 0.5\\alpha = 2 \\Rightarrow \\alpha = 4",
             "Rearranging the linear equation gives a unique fixed point."),
        step(3, "Differentiate $g$",
             "g'(x) = 0.5",
             "The derivative is constant for a linear iteration function."),
        step(4, "Evaluate at the root",
             "g'(\\alpha) = 0.5",
             "At the fixed point the gradient equals $0.5$ everywhere."),
        step(5, "Check the convergence condition",
             "|g'(\\alpha)| = 0.5 < 1",
             "When the magnitude of the gradient at the root is less than $1$, errors shrink by a factor of about $0.5$ each step."),
        step(6, "Note the sign of $g'(\\alpha)$",
             "g'(\\alpha) = 0.5 > 0",
             "A positive gradient less than $1$ in magnitude produces staircase convergence."),
        step(7, "Explain error reduction",
             "|x_{n+1} - \\alpha| \\approx |g'(\\alpha)|\\,|x_n - \\alpha|",
             "Each iterate is roughly half as far from $\\alpha$ as the previous one — a strong convergence rate."),
        step(8, "Comment on starting values",
             "\\text{Linear } g \\text{ with } |g'| < 1 \\Rightarrow \\text{convergence from any } x_0",
             "Because $g'(x) = 0.5$ everywhere, the contraction property holds globally, not just near $\\alpha$."),
        step(9, "Summarise",
             "\\alpha = 4,\\; g'(\\alpha) = 0.5,\\; \\text{staircase convergence}",
             "The iteration is well-behaved: fixed point $4$, gradient $0.5$, guaranteed convergence."),
    ],
    "$\\alpha = 4$ and $g'(\\alpha) = 0.5$. Since $|g'(\\alpha)| = 0.5 < 1$ and $g'(\\alpha) > 0$, "
    "the iteration converges in a staircase pattern; the constant gradient less than $1$ in magnitude ensures convergence from any reasonable starting value.",
))

# ── q043 Intermediate: discontinuity failure ────────────────────────────────
questions.append(make_q(
    "q043", "Intermediate", 5, "written",
    ["change of sign", "limitations", "discontinuity"],
    "Let $f(x) = \\dfrac{1}{x - 2} + 1$. "
    "(a) Show that $f(1.5) < 0$ and $f(2.5) > 0$. "
    "(b) Explain why this does **not** prove a root of $f(x) = 0$ lies in $[1.5, 2.5]$.",
    [
        step(1, "Evaluate $f(1.5)$",
             "f(1.5) = \\frac{1}{-0.5} + 1 = -2 + 1 = -1",
             "Below $x = 2$ the fraction $\\frac{1}{x-2}$ is negative."),
        step(2, "Evaluate $f(2.5)$",
             "f(2.5) = \\frac{1}{0.5} + 1 = 2 + 1 = 3",
             "Above $x = 2$ the fraction is positive."),
        step(3, "Record the sign change",
             "f(1.5) < 0 \\quad\\text{and}\\quad f(2.5) > 0",
             "Superficially, the endpoint values have opposite signs."),
        step(4, "Identify the discontinuity",
             "f \\text{ is undefined at } x = 2",
             "The denominator $x - 2$ equals zero at $x = 2$, which lies inside $[1.5, 2.5]$."),
        step(5, "Describe the asymptotic behaviour",
             "x \\to 2^- \\Rightarrow f(x) \\to -\\infty;\\quad x \\to 2^+ \\Rightarrow f(x) \\to +\\infty",
             "The function jumps from $-\\infty$ to $+\\infty$ across the vertical asymptote — it never equals zero."),
        step(6, "Solve $f(x) = 0$ directly",
             "\\frac{1}{x-2} + 1 = 0 \\Rightarrow \\frac{1}{x-2} = -1 \\Rightarrow x - 2 = -1 \\Rightarrow x = 1",
             "The only root is at $x = 1$, which lies **outside** the interval $[1.5, 2.5]$."),
        step(7, "State the IVT requirement",
             "\\text{IVT requires continuity on the whole interval } [a,b]",
             "A sign change across endpoints is only valid for locating roots when the function is continuous throughout."),
        step(8, "Explain the false conclusion",
             "\\text{Sign change across a discontinuity can mislead}",
             "The graph does not cross the axis between $1.5$ and $2.5$; it shoots to $\\pm\\infty$ at the asymptote instead."),
        step(9, "General lesson",
             "\\text{Always check for asymptotes and breaks before applying sign-change}",
             "This is a standard failure case students must be able to explain in exams."),
    ],
    "(a) $f(1.5) = -1 < 0$ and $f(2.5) = 3 > 0$. "
    "(b) $f$ is not continuous on $[1.5, 2.5]$ because of the vertical asymptote at $x = 2$. "
    "The IVT does not apply, and the actual root is at $x = 1$, outside the interval.",
))

# ── q044 Intermediate: Newton staircase ─────────────────────────────────────
questions.append(make_q(
    "q044", "Intermediate", 5, "numeric",
    ["Newton-Raphson", "iteration", "staircase"],
    "Use the Newton–Raphson formula $x_{n+1} = \\dfrac{1}{2}\\left(x_n + \\dfrac{5}{x_n}\\right)$ with $x_0 = 2$ "
    "to find $x_1$ and $x_2$. Briefly explain why convergence is staircase.",
    [
        step(1, "Recall Newton's method structure",
             "x_{n+1} = x_n - \\frac{f(x_n)}{f'(x_n)}",
             "This iteration targets a root of $f(x) = x^2 - 5$, i.e. $x = \\sqrt{5}$."),
        step(2, "Compute $x_1$",
             "x_1 = \\tfrac{1}{2}\\left(2 + \\tfrac{5}{2}\\right) = \\tfrac{1}{2}(2 + 2.5) = 2.25",
             "Substitute $x_0 = 2$ into the formula."),
        step(3, "Compute $x_2$",
             "x_2 = \\tfrac{1}{2}\\left(2.25 + \\tfrac{5}{2.25}\\right) = \\tfrac{1}{2}(2.25 + 2.\\overline{2}) \\approx 2.236",
             "Each step refines the estimate of $\\sqrt{5} \\approx 2.236$."),
        step(4, "Identify $g(x)$",
             "g(x) = \\tfrac{1}{2}\\left(x + \\tfrac{5}{x}\\right)",
             "The iteration function is $g(x_n)$."),
        step(5, "Differentiate $g$",
             "g'(x) = \\tfrac{1}{2}\\left(1 - \\tfrac{5}{x^2}\\right)",
             "Differentiate term by term."),
        step(6, "Evaluate at $\\alpha = \\sqrt{5}$",
             "g'(\\sqrt{5}) = \\tfrac{1}{2}\\left(1 - \\tfrac{5}{5}\\right) = 0",
             "At the root, $g'(\\alpha) = 0$, which is well inside $(-1, 1)$."),
        step(7, "Explain staircase behaviour",
             "x_0 < \\sqrt{5} < x_1,\\; x_2 \\text{ closer but still } > \\sqrt{5}",
             "All iterates stay on one side of $\\alpha$ because $g'(\\alpha) = 0 > -1$ and locally $g'(x) > 0$ near the root."),
        step(8, "Link to quadratic convergence",
             "g'(\\alpha) = 0 \\Rightarrow \\text{very fast convergence}",
             "Newton's method typically squares the error near a simple root, which is faster than linear fixed-point iteration."),
        step(9, "Classify",
             "g'(\\alpha) = 0 \\geq 0 \\Rightarrow \\text{staircase (no alternation)}",
             "No negative gradient means iterates do not bounce above and below the root."),
        step(10, "Final values",
             "x_1 = 2.25,\\; x_2 \\approx 2.236",
             "Staircase convergence toward $\\sqrt{5}$."),
    ],
    "$x_1 = 2.25$ and $x_2 \\approx 2.236$. Convergence is staircase because $g'(\\alpha) = 0 \\geq 0$ at $\\alpha = \\sqrt{5}$, "
    "so iterates approach from one side without alternating.",
))

# ── q045 Intermediate: e^x - 3x sign change ────────────────────────────────
questions.append(make_q(
    "q045", "Intermediate", 4, "written",
    ["change of sign", "exponential", "interval"],
    "Show that the equation $e^x = 3x$ has a root in the interval $[0, 1]$.",
    [
        step(1, "Rearrange to $f(x) = 0$",
             "f(x) = e^x - 3x",
             "A single function makes sign testing straightforward."),
        step(2, "Evaluate at $x = 0$",
             "f(0) = e^0 - 0 = 1",
             "At the origin, the exponential term dominates and the value is positive."),
        step(3, "Evaluate at $x = 1$",
             "f(1) = e - 3 \\approx 2.718 - 3 = -0.282",
             "At $x = 1$, the linear term $3x$ overtakes $e^x$, giving a negative value."),
        step(4, "Compare signs",
             "f(0) > 0 \\quad\\text{and}\\quad f(1) < 0",
             "The endpoints have opposite signs."),
        step(5, "Confirm continuity",
             "f \\text{ is continuous on } [0,1]",
             "Both $e^x$ and $3x$ are continuous, so their difference is too."),
        step(6, "Apply the sign-change / IVT argument",
             "f(0)\\,f(1) < 0 \\Rightarrow \\exists\\, \\alpha \\in (0,1) \\text{ with } f(\\alpha) = 0",
             "A continuous sign change forces at least one crossing of the $x$-axis."),
        step(7, "Translate back to the original equation",
             "f(\\alpha) = 0 \\Leftrightarrow e^\\alpha = 3\\alpha",
             "The root of $f$ is exactly a solution of the given equation."),
        step(8, "Note there is another root for large $x$",
             "f(2) = e^2 - 6 > 0",
             "For $x$ large, $e^x$ grows faster than $3x$, so another root exists for $x > 1$ — but that does not affect the $[0,1]$ argument."),
        step(9, "Conclude",
             "\\text{A root of } e^x = 3x \\text{ lies in } (0,1)",
             "This is the required 'show that' result for the specified interval."),
    ],
    "Since $f(0) = 1 > 0$ and $f(1) = e - 3 < 0$, with $f$ continuous on $[0,1]$, "
    "there is a root of $e^x - 3x = 0$, i.e. a solution of $e^x = 3x$, in $(0, 1)$.",
))

# ── q046 Hard: multi-part interval + iterate + classify ─────────────────────
questions.append(make_q(
    "q046", "Hard", 8, "numeric",
    ["change of sign", "iteration", "classification", "exam-style"],
    "Let $f(x) = x^3 - 3x - 1$.\n\n"
    "(a) Show that $f(x) = 0$ has a root $\\alpha$ in $[1, 2]$.\n"
    "(b) Show that the rearrangement $x = \\sqrt[3]{3x + 1}$ leads to the iteration $x_{n+1} = \\sqrt[3]{3x_n + 1}$.\n"
    "(c) Starting with $x_0 = 2$, find $x_1$, $x_2$ and $x_3$ to 3 decimal places.\n"
    "(d) Find $g'(\\alpha)$ where $g(x) = \\sqrt[3]{3x + 1}$ and classify the convergence.",
    [
        step(1, "Part (a): evaluate $f(1)$",
             "f(1) = 1 - 3 - 1 = -3",
             "The left endpoint is negative."),
        step(2, "Part (a): evaluate $f(2)$",
             "f(2) = 8 - 6 - 1 = 1",
             "The right endpoint is positive."),
        step(3, "Part (a): sign-change conclusion",
             "f(1) < 0,\\; f(2) > 0,\\; f \\text{ continuous} \\Rightarrow \\alpha \\in (1,2)",
             "Standard IVT argument locates the root."),
        step(4, "Part (b): rearrange $x^3 - 3x - 1 = 0$",
             "x^3 = 3x + 1",
             "Isolate $x^3$ on one side."),
        step(5, "Part (b): take cube roots",
             "x = \\sqrt[3]{3x + 1} \\Rightarrow x_{n+1} = \\sqrt[3]{3x_n + 1}",
             "Replacing $x$ with $x_n$ gives the stated iteration."),
        step(6, "Part (c): compute $x_1$",
             "x_1 = \\sqrt[3]{3(2) + 1} = \\sqrt[3]{7} \\approx 1.913",
             "Substitute $x_0 = 2$."),
        step(7, "Part (c): compute $x_2$",
             "x_2 = \\sqrt[3]{3(1.913) + 1} = \\sqrt[3]{6.739} \\approx 1.889",
             "Each iterate uses the previous result."),
        step(8, "Part (c): compute $x_3$",
             "x_3 = \\sqrt[3]{3(1.889) + 1} = \\sqrt[3]{6.667} \\approx 1.881",
             "Values approach $\\alpha \\approx 1.879$."),
        step(9, "Part (d): differentiate $g(x) = (3x+1)^{1/3}$",
             "g'(x) = \\tfrac{1}{3}(3x+1)^{-2/3}",
             "Power rule on the cube-root expression."),
        step(10, "Part (d): evaluate at $\\alpha \\approx 1.879$",
             "3\\alpha + 1 \\approx 6.637,\\quad g'(\\alpha) \\approx \\tfrac{1}{3}(6.637)^{-2/3} \\approx 0.27",
             "The gradient at the root is positive and less than $1$ in magnitude."),
        step(11, "Part (d): classify convergence",
             "0 < g'(\\alpha) < 1 \\Rightarrow \\text{staircase convergence}",
             "Positive gradient below $1$ means iterates approach $\\alpha$ from one side without alternating."),
        step(12, "Part (d): interpret the iterate pattern",
             "x_0 > \\alpha > x_1 > x_2 > x_3",
             "Each successive value decreases toward $\\alpha$ from above — consistent with staircase convergence."),
        step(13, "Summarise all parts",
             "\\alpha \\in (1,2);\\; x_1 \\approx 1.913,\\; x_2 \\approx 1.889,\\; x_3 \\approx 1.881;\\; \\text{staircase}",
             "This multi-part structure is typical of harder exam questions on numerical methods."),
    ],
    "(a) $f(1) = -3 < 0$, $f(2) = 1 > 0$ $\\Rightarrow$ root in $(1,2)$. "
    "(b) From $x^3 = 3x + 1$, $x_{n+1} = \\sqrt[3]{3x_n + 1}$. "
    "(c) $x_1 \\approx 1.913$, $x_2 \\approx 1.889$, $x_3 \\approx 1.881$. "
    "(d) $g'(\\alpha) \\approx 0.27$; staircase convergence since $0 < g'(\\alpha) < 1$.",
))

# ── q047 Hard: asymptote false sign change ──────────────────────────────────
questions.append(make_q(
    "q047", "Hard", 6, "written",
    ["change of sign", "asymptote", "limitations"],
    "A student claims that because $f(0.5) = -1 < 0$ and $f(3.5) = 1 > 0$ for "
    "$f(x) = \\dfrac{x^2 - 4}{x - 2}$, a root of $f(x) = 0$ must lie in $[0.5, 3.5]$. "
    "Explain in detail why this reasoning is flawed, simplifying $f(x)$ where possible.",
    [
        step(1, "Factor the numerator",
             "x^2 - 4 = (x-2)(x+2)",
             "Difference of two squares factorisation."),
        step(2, "Simplify for $x \\neq 2$",
             "f(x) = \\frac{(x-2)(x+2)}{x-2} = x + 2",
             "Cancellation is valid only where the denominator is non-zero."),
        step(3, "State the domain restriction",
             "f \\text{ undefined at } x = 2",
             "The original rational function has a removable discontinuity (hole) or needs care at $x = 2$."),
        step(4, "Analyse the simplified function",
             "f(x) = x + 2 \\quad (x \\neq 2)",
             "Away from $x = 2$, the graph is a straight line with no zero crossings."),
        step(5, "Find any actual roots",
             "x + 2 = 0 \\Rightarrow x = -2",
             "The only root of the simplified form is at $x = -2$, outside $[0.5, 3.5]$."),
        step(6, "Verify endpoint signs using the original form",
             "f(0.5) = \\frac{0.25 - 4}{-1.5} = \\frac{-3.75}{-1.5} = 2.5 > 0",
             "Direct substitution gives a positive value; the student's claim that $f(0.5) = -1$ is arithmetically incorrect."),
        step(7, "Correct evaluation at both ends",
             "f(0.5) = 2.5 > 0,\\; f(3.5) = 5.5 > 0",
             "There is in fact **no** sign change when evaluated correctly."),
        step(8, "Explain the conceptual flaw",
             "\\text{Sign-change method requires a continuous } f \\text{ on } [a,b]",
             "Even if signs were opposite, a discontinuity or asymptote inside the interval invalidates the IVT conclusion."),
        step(9, "Describe what happens at $x = 2$",
             "\\lim_{x \\to 2} f(x) = 4 \\text{ (hole at } (2,4)\\text{)}",
             "The function can be extended continuously to $x+2$, but the original rational form is undefined at $x=2$."),
        step(10, "Address the student's arithmetic error",
             "\\text{Incorrect endpoint evaluation led to a false sign change}",
             "Always simplify carefully and re-check arithmetic before applying the sign-change rule."),
        step(11, "State the correct conclusion",
             "\\text{No root in } [0.5, 3.5]; \\text{ student's argument fails on arithmetic and reasoning}",
             "The only root is at $x = -2$; within $[0.5, 3.5]$ the simplified function $x+2$ is always positive."),
        step(12, "General warning",
             "\\text{Simplify, check continuity, verify signs}",
             "Three checks prevent the common exam trap of misapplying the sign-change method."),
        step(13, "Final exam-style response",
             "\\text{Reject the student's claim with corrected arithmetic and continuity reasoning}",
             "A complete answer cites the simplification, correct endpoint values, and the continuity requirement of the sign-change method."),
    ],
    "Simplifying, $f(x) = x + 2$ for $x \\neq 2$, which has root $x = -2$ only. "
    "Correct evaluation gives $f(0.5) = 2.5 > 0$ and $f(3.5) = 5.5 > 0$ — no sign change. "
    "The student's claim fails due to arithmetic error and because sign-change requires continuity on the whole interval.",
))

# ── q048 Hard: cobweb divergence |g'|>1 ─────────────────────────────────────
questions.append(make_q(
    "q048", "Hard", 6, "written",
    ["iteration", "divergence", "cobweb", "gradient"],
    "Consider $x_{n+1} = 2x_n - 3$ with fixed point $\\alpha$.\n\n"
    "(a) Find $\\alpha$. (b) Find $g'(x)$ and explain why the iteration diverges for $x_0 \\neq \\alpha$. "
    "(c) With $x_0 = 2.5$, find $x_1$, $x_2$, $x_3$ and describe the cobweb behaviour.",
    [
        step(1, "Part (a): set up fixed-point equation",
             "\\alpha = 2\\alpha - 3",
             "At a fixed point the input equals the output."),
        step(2, "Part (a): solve for $\\alpha$",
             "-\\alpha = -3 \\Rightarrow \\alpha = 3",
             "Linear rearrangement gives the unique fixed point."),
        step(3, "Part (b): identify $g(x)$",
             "g(x) = 2x - 3",
             "The iteration function is linear."),
        step(4, "Part (b): differentiate",
             "g'(x) = 2",
             "The gradient is constant everywhere."),
        step(5, "Part (b): convergence criterion",
             "|g'(\\alpha)| = 2 > 1 \\Rightarrow \\text{divergence}",
             "When the magnitude of the gradient at the root exceeds $1$, small errors grow instead of shrink."),
        step(6, "Part (b): explain cobweb divergence",
             "g'(\\alpha) = 2 > 0 \\Rightarrow \\text{iterates move away on one side}",
             "Positive gradient greater than $1$ produces a diverging staircase; if negative and $|g'|>1$, cobweb divergence occurs."),
        step(7, "Part (c): compute $x_1$",
             "x_1 = 2(2.5) - 3 = 2",
             "First step moves toward $\\alpha = 3$ from below."),
        step(8, "Part (c): compute $x_2$",
             "x_2 = 2(2) - 3 = 1",
             "Now the iterate has crossed to the other side and is moving away."),
        step(9, "Part (c): compute $x_3$",
             "x_3 = 2(1) - 3 = -1",
             "Values spiral further from $\\alpha$."),
        step(10, "Part (c): describe cobweb pattern",
             "x_0 = 2.5,\\; x_1 = 2,\\; x_2 = 1,\\; x_3 = -1 \\text{ — increasing distance from } \\alpha",
             "Although $g' > 0$ here gives monotone divergence (diverging staircase), the key exam point is $|g'| > 1$ prevents convergence."),
        step(11, "Link to exam language",
             "|g'(\\alpha)| > 1 \\Rightarrow \\text{iteration not suitable}",
             "Before iterating, always check whether the rearrangement gives $|g'(\\alpha)| < 1$."),
        step(12, "Final summary",
             "\\alpha = 3,\\; g'(\\alpha) = 2,\\; \\text{divergent iteration}",
             "This illustrates the failure case when the gradient condition is violated."),
        step(13, "Exam takeaway",
             "\\text{Always verify } |g'(\\alpha)| < 1 \\text{ before choosing an iteration}",
             "A rearrangement that algebraically works may still produce a divergent sequence if the gradient at the root is too large."),
    ],
    "(a) $\\alpha = 3$. (b) $g'(x) = 2$, so $|g'(\\alpha)| = 2 > 1$ and the iteration diverges. "
    "(c) $x_1 = 2$, $x_2 = 1$, $x_3 = -1$; iterates move increasingly far from $\\alpha$ (diverging staircase).",
))

# ── q049 Hard: exam combined locate + iterate + classify ──────────────────
questions.append(make_q(
    "q049", "Hard", 9, "numeric",
    ["change of sign", "iteration", "exam-style", "classification"],
    "Consider $f(x) = x^3 - x - 1$.\n\n"
    "(a) Show that $f(x) = 0$ has a root in $[1, 2]$.\n"
    "(b) Verify that $x = \\sqrt[3]{x + 1}$ is a valid rearrangement and use $x_{n+1} = \\sqrt[3]{x_n + 1}$ "
    "with $x_0 = 1.5$ to find $x_1$, $x_2$, $x_3$ to 3 d.p.\n"
    "(c) Find $g'(\\alpha)$ and classify the convergence pattern.",
    [
        step(1, "Part (a): $f(1)$",
             "f(1) = 1 - 1 - 1 = -1",
             "Negative at the left endpoint."),
        step(2, "Part (a): $f(2)$",
             "f(2) = 8 - 2 - 1 = 5",
             "Positive at the right endpoint."),
        step(3, "Part (a): conclude root location",
             "f(1) < 0,\\; f(2) > 0 \\Rightarrow \\text{root } \\alpha \\in (1,2)",
             "Continuous sign change on $[1,2]$."),
        step(4, "Part (b): verify rearrangement",
             "x^3 - x - 1 = 0 \\Rightarrow x^3 = x + 1 \\Rightarrow x = \\sqrt[3]{x+1}",
             "Cube-rooting both sides is valid because $x^3$ and $x+1$ share the same sign at the root."),
        step(5, "Part (b): $x_1$",
             "x_1 = \\sqrt[3]{1.5 + 1} = \\sqrt[3]{2.5} \\approx 1.357",
             "Substitute $x_0 = 1.5$."),
        step(6, "Part (b): $x_2$",
             "x_2 = \\sqrt[3]{1.357 + 1} = \\sqrt[3]{2.357} \\approx 1.328",
             "Iterates decrease toward $\\alpha$."),
        step(7, "Part (b): $x_3$",
             "x_3 = \\sqrt[3]{1.328 + 1} = \\sqrt[3]{2.328} \\approx 1.325",
             "Close to $\\alpha \\approx 1.325$ (the plastic number)."),
        step(8, "Part (c): $g(x) = (x+1)^{1/3}$",
             "g'(x) = \\tfrac{1}{3}(x+1)^{-2/3}",
             "Differentiate using the power rule."),
        step(9, "Part (c): evaluate $g'(\\alpha)$",
             "g'(\\alpha) = \\tfrac{1}{3}(\\alpha+1)^{-2/3} = \\tfrac{1}{3\\alpha^2} \\approx 0.19",
             "Using $\\alpha^3 = \\alpha + 1$ at the fixed point to simplify."),
        step(10, "Part (c): classify",
             "0 < g'(\\alpha) < 1 \\Rightarrow \\text{staircase convergence}",
             "Iterates approach from one side without oscillation."),
        step(11, "Comment on suitability",
             "|g'(\\alpha)| \\approx 0.19 \\ll 1 \\Rightarrow \\text{good convergence rate}",
             "This rearrangement is well suited for fixed-point iteration near $\\alpha$."),
        step(12, "Full answer summary",
             "\\alpha \\in (1,2);\\; x_1 \\approx 1.357,\\; x_2 \\approx 1.328,\\; x_3 \\approx 1.325;\\; \\text{staircase}",
             "Combined location, iteration, and classification in one exam-style question."),
        step(13, "Link parts (a)–(c)",
             "\\text{Interval location justifies starting near } \\alpha; \\text{ gradient confirms method choice}",
             "Exam questions often chain these three skills: locate, iterate, then justify convergence."),
    ],
    "(a) Root in $(1,2)$ since $f(1) < 0$ and $f(2) > 0$. "
    "(b) $x_1 \\approx 1.357$, $x_2 \\approx 1.328$, $x_3 \\approx 1.325$. "
    "(c) $g'(\\alpha) \\approx 0.19$; staircase convergence.",
))

# ── q050 Hard: rearrangement with g'(α)<1 proof ─────────────────────────────
questions.append(make_q(
    "q050", "Hard", 7, "written",
    ["rearrangement", "convergence", "gradient"],
    "The equation $x^2 = x + 2$ has positive root $\\alpha = 2$.\n\n"
    "(a) Show that $x_{n+1} = \\sqrt{x_n + 2}$ is a valid iteration.\n"
    "(b) Find $g'(x)$ for $g(x) = \\sqrt{x + 2}$ and show that $|g'(\\alpha)| < 1$.\n"
    "(c) Hence state the type of convergence and whether the iteration is suitable.",
    [
        step(1, "Part (a): rearrange the equation",
             "x^2 = x + 2 \\Rightarrow x = \\sqrt{x + 2}",
             "Taking the positive square root is appropriate for the positive root $\\alpha = 2$."),
        step(2, "Part (a): write the iteration",
             "x_{n+1} = \\sqrt{x_n + 2}",
             "Replace $x$ with $x_n$ to obtain the iterative scheme."),
        step(3, "Part (a): verify $\\alpha$ is a fixed point",
             "\\sqrt{2 + 2} = \\sqrt{4} = 2 = \\alpha",
             "The positive root satisfies the fixed-point equation."),
        step(4, "Part (b): differentiate $g(x) = (x+2)^{1/2}$",
             "g'(x) = \\frac{1}{2\\sqrt{x+2}}",
             "Chain rule on the square-root expression."),
        step(5, "Part (b): evaluate at $\\alpha = 2$",
             "g'(2) = \\frac{1}{2\\sqrt{4}} = \\frac{1}{4}",
             "Substitute $x = 2$ directly."),
        step(6, "Part (b): check magnitude",
             "|g'(\\alpha)| = \\tfrac{1}{4} = 0.25 < 1",
             "The gradient condition for local convergence is satisfied."),
        step(7, "Part (b): note the sign",
             "g'(\\alpha) = \\tfrac{1}{4} > 0",
             "Positive gradient less than $1$ in magnitude."),
        step(8, "Part (c): classify convergence type",
             "0 < g'(\\alpha) < 1 \\Rightarrow \\text{staircase convergence}",
             "Iterates will approach $\\alpha = 2$ from one side, narrowing each step."),
        step(9, "Part (c): assess suitability",
             "|g'(\\alpha)| = 0.25 \\Rightarrow \\text{errors shrink by factor } \\approx 4 \\text{ each step}",
             "A small gradient magnitude means fast, reliable convergence — the iteration is suitable."),
        step(10, "Optional: domain note",
             "x_n + 2 > 0 \\text{ required}",
             "Starting near $\\alpha = 2$ keeps the square root defined."),
        step(11, "Contrast with a poor rearrangement",
             "x = x^2 - 2 \\Rightarrow g'(x) = 2x,\\; g'(2) = 4 > 1",
             "Not all rearrangements converge; choosing $g'(\\alpha) < 1$ is essential."),
        step(12, "Conclude",
             "\\text{Suitable iteration with staircase convergence to } \\alpha = 2",
             "This question tests the full convergence argument expected at A-level."),
        step(13, "Numerical illustration",
             "x_0 = 1.5 \\Rightarrow x_1 = \\sqrt{3.5} \\approx 1.871 \\Rightarrow x_2 \\approx 1.937 \\Rightarrow x_3 \\approx 1.984",
             "A quick calculation shows iterates climbing the staircase toward $2$ from below."),
    ],
    "(a) From $x^2 = x + 2$, $x_{n+1} = \\sqrt{x_n + 2}$. "
    "(b) $g'(\\alpha) = \\tfrac{1}{4}$, so $|g'(\\alpha)| < 1$. "
    "(c) Staircase convergence; the iteration is suitable.",
))

# ── q051 Hard: multiple roots in interval ───────────────────────────────────
questions.append(make_q(
    "q051", "Hard", 7, "written",
    ["change of sign", "limitations", "multiple roots"],
    "Let $f(x) = x^4 - 5x^2 + 4$.\n\n"
    "(a) Factorise $f(x)$ and state all real roots.\n"
    "(b) Show that $f(0) > 0$ and $f(1.5) < 0$.\n"
    "(c) Explain why a single sign change on $[0, 1.5]$ does not tell you how many roots lie in that interval.",
    [
        step(1, "Part (a): factorise as quadratic in $x^2$",
             "f(x) = x^4 - 5x^2 + 4 = (x^2 - 1)(x^2 - 4)",
             "Treat $x^2$ as a single variable to factorise the quartic."),
        step(2, "Part (a): factor further",
             "(x^2-1)(x^2-4) = (x-1)(x+1)(x-2)(x+2)",
             "Difference of squares on each quadratic factor."),
        step(3, "Part (a): list real roots",
             "x = -2,\\; -1,\\; 1,\\; 2",
             "Four distinct real roots from the linear factors."),
        step(4, "Part (b): evaluate $f(0)$",
             "f(0) = 0 - 0 + 4 = 4 > 0",
             "The constant term gives the value at the origin."),
        step(5, "Part (b): evaluate $f(1.5)$",
             "f(1.5) = (1.5)^4 - 5(1.5)^2 + 4 = 5.0625 - 11.25 + 4 = -2.1875 < 0",
             "At $x = 1.5$ the function is negative."),
        step(6, "Part (b): sign change confirmed",
             "f(0) > 0,\\; f(1.5) < 0",
             "There is a sign change on $[0, 1.5]$."),
        step(7, "Part (c): identify roots in the interval",
             "x = 1 \\in (0, 1.5) \\text{ and the graph crosses between } 0 \\text{ and } 1.5",
             "Actually $f(1) = 0$ exactly, and there is a crossing between $1$ and $1.5$ as well? "
             "f(1)=0, f(1.5)<0 — only the root at $x=1$ lies in $[0,1.5]$."),
        step(8, "Part (c): wider interval illustration",
             "\\text{On } [0,3]: f(0)>0, f(1.5)<0, f(2)=0, f(2.5)>0",
             "Multiple sign changes correspond to multiple roots — one sign change does not count them."),
        step(9, "Part (c): key limitation",
             "\\text{One sign change } \\Rightarrow \\text{ at least one root, not exactly one}",
             "The IVT guarantees existence, not uniqueness."),
        step(10, "Part (c): even multiplicity note",
             "f(x) = (x-1)(x+1)(x-2)(x+2) \\text{ — all simple roots}",
             "At $x=1$ the graph crosses; no touch-without-cross issue here."),
        step(11, "Part (c): exam advice",
             "\\text{Refine interval or sketch graph to count roots}",
             "Narrow the interval or use factorisation to determine how many roots are present."),
        step(12, "Summarise",
             "\\text{Sign change proves } \\geq 1 \\text{ root; factorisation shows exactly which}",
             "Understanding this distinction is essential for harder numerical methods questions."),
        step(13, "Apply to the given interval",
             "f(1) = 0 \\text{ and } f \\text{ crosses once between } 0 \\text{ and } 1.5",
             "On $[0,1.5]$ there is exactly one root at $x=1$, but the sign-change argument alone would not distinguish this from multiple crossings without further analysis."),
    ],
    "(a) $f(x) = (x-1)(x+1)(x-2)(x+2)$; roots $x = \\pm 1, \\pm 2$. "
    "(b) $f(0) = 4 > 0$, $f(1.5) \\approx -2.19 < 0$. "
    "(c) A single sign change only proves at least one root; it does not prove uniqueness — factorisation shows $x = 1$ is in $[0,1.5]$.",
))

# ── q052 Hard: e^{-x} cobweb ────────────────────────────────────────────────
questions.append(make_q(
    "q052", "Hard", 8, "numeric",
    ["iteration", "cobweb", "exponential", "exam-style"],
    "The equation $x = e^{-x}$ has root $\\alpha$.\n\n"
    "(a) Show that $\\alpha$ lies in $[0.5, 0.7]$.\n"
    "(b) Use $x_{n+1} = e^{-x_n}$ with $x_0 = 0.5$ to find $x_1$, $x_2$, $x_3$ to 3 d.p.\n"
    "(c) Find $g'(\\alpha)$ and classify the convergence.",
    [
        step(1, "Part (a): define $f(x) = x - e^{-x}$",
             "f(x) = 0 \\Leftrightarrow x = e^{-x}",
             "Standard sign-change setup."),
        step(2, "Part (a): $f(0.5)$",
             "f(0.5) = 0.5 - e^{-0.5} \\approx 0.5 - 0.607 = -0.107",
             "Negative at the left endpoint."),
        step(3, "Part (a): $f(0.7)$",
             "f(0.7) = 0.7 - e^{-0.7} \\approx 0.7 - 0.497 = 0.203",
             "Positive at the right endpoint."),
        step(4, "Part (a): conclude",
             "f(0.5) < 0,\\; f(0.7) > 0 \\Rightarrow \\alpha \\in (0.5, 0.7)",
             "Sign change with continuity locates the root."),
        step(5, "Part (b): $x_1$",
             "x_1 = e^{-0.5} \\approx 0.607",
             "First iteration jumps above $\\alpha$."),
        step(6, "Part (b): $x_2$",
             "x_2 = e^{-0.607} \\approx 0.545",
             "Second iterate drops below $\\alpha$."),
        step(7, "Part (b): $x_3$",
             "x_3 = e^{-0.545} \\approx 0.580",
             "Third iterate rises again — clear oscillation."),
        step(8, "Part (c): $g(x) = e^{-x}$",
             "g'(x) = -e^{-x}",
             "Differentiate the exponential."),
        step(9, "Part (c): evaluate at fixed point",
             "g'(\\alpha) = -e^{-\\alpha} = -\\alpha \\approx -0.567",
             "At the root, $e^{-\\alpha} = \\alpha$, so $g'(\\alpha) = -\\alpha$."),
        step(10, "Part (c): check magnitude",
             "|g'(\\alpha)| = \\alpha \\approx 0.567 < 1",
             "Magnitude less than $1$ ensures convergence."),
        step(11, "Part (c): classify",
             "g'(\\alpha) < 0 \\Rightarrow \\text{cobweb convergence}",
             "Alternating above and below $\\alpha$ with narrowing envelope."),
        step(12, "Note $\\alpha$ value",
             "\\alpha \\approx 0.567",
             "The iterates converge to this well-known fixed point of $x = e^{-x}$."),
        step(13, "Visualise cobweb pattern",
             "x_0 < \\alpha < x_1,\\; x_2 < \\alpha < x_3",
             "Plotting $y=x$ and $y=e^{-x}$ shows iterates bouncing between the curves toward the intersection."),
    ],
    "(a) $f(0.5) < 0$, $f(0.7) > 0$ $\\Rightarrow$ $\\alpha \\in (0.5, 0.7)$. "
    "(b) $x_1 \\approx 0.607$, $x_2 \\approx 0.545$, $x_3 \\approx 0.580$. "
    "(c) $g'(\\alpha) = -\\alpha \\approx -0.567$; cobweb convergence.",
))

# ── q053 Hard: full exam combined ───────────────────────────────────────────
questions.append(make_q(
    "q053", "Hard", 10, "numeric",
    ["Newton-Raphson", "change of sign", "exam-style", "combined"],
    "Let $f(x) = x^2 \\ln x - 1$ for $x > 0$.\n\n"
    "(a) Show that $f(x) = 0$ has a root in $[1, 2]$.\n"
    "(b) The Newton–Raphson formula is $x_{n+1} = x_n - \\dfrac{f(x_n)}{f'(x_n)}$ where $f'(x) = 2x\\ln x + x$. "
    "Starting with $x_0 = 1.5$, find $x_1$ to 3 decimal places.\n"
    "(c) Explain why Newton's method typically converges faster than a simple rearrangement iteration near a simple root.",
    [
        step(1, "Part (a): $f(1)$",
             "f(1) = 1^2 \\cdot \\ln 1 - 1 = 0 - 1 = -1",
             "Since $\\ln 1 = 0$, the value is $-1$."),
        step(2, "Part (a): $f(2)$",
             "f(2) = 4 \\ln 2 - 1 \\approx 4(0.693) - 1 = 1.772",
             "At $x = 2$ the logarithmic term dominates."),
        step(3, "Part (a): sign-change argument",
             "f(1) < 0,\\; f(2) > 0,\\; f \\text{ continuous on } [1,2] \\Rightarrow \\text{root in } (1,2)",
             "Standard location of a root."),
        step(4, "Part (b): evaluate $f(1.5)$",
             "f(1.5) = 2.25 \\ln 1.5 - 1 \\approx 2.25(0.405) - 1 = -0.089",
             "The starting value is close to the root."),
        step(5, "Part (b): evaluate $f'(1.5)$",
             "f'(1.5) = 2(1.5)\\ln 1.5 + 1.5 = 3(0.405) + 1.5 \\approx 2.715",
             "Substitute into the derivative formula."),
        step(6, "Part (b): apply Newton's formula",
             "x_1 = 1.5 - \\frac{-0.089}{2.715} = 1.5 + 0.033 \\approx 1.533",
             "The correction moves the estimate toward the root."),
        step(7, "Part (b): interpret the step",
             "\\text{Tangent at } x_0 \\text{ crosses axis near } x_1",
             "Newton's method follows the tangent line to approximate the root."),
        step(8, "Part (c): fixed-point iteration order",
             "x_{n+1} = g(x_n) \\Rightarrow \\text{error } \\propto |g'(\\alpha)|^n",
             "Linear convergence when $|g'(\\alpha)| < 1$."),
        step(9, "Part (c): Newton's order at simple root",
             "g'(\\alpha) = 0 \\Rightarrow \\text{quadratic convergence}",
             "For Newton applied to a simple root, $g'(\\alpha) = 0$, so errors roughly square each step."),
        step(10, "Part (c): practical meaning",
             "\\text{Newton reaches high accuracy in fewer steps}",
             "Near a simple root, doubling correct digits per step beats the linear shrinkage of fixed-point iteration."),
        step(11, "Part (c): caveat",
             "f'(\\alpha) \\neq 0 \\text{ required (simple root)}",
             "At repeated roots Newton slows to linear convergence — the simple-root condition matters."),
        step(12, "Part (c): compare with rearrangement",
             "|g'(\\alpha)| \\text{ may be close to } 1 \\Rightarrow \\text{slow fixed-point iteration}",
             "Newton is often preferred when derivatives are available and the root is simple."),
        step(13, "Verify $f'(x)$ form",
             "f'(x) = 2x\\ln x + x \\text{ (product rule on } x^2 \\ln x\\text{)}",
             "Confirms the given derivative is correct."),
        step(14, "Summarise all parts",
             "\\text{Root in } (1,2);\\; x_1 \\approx 1.533;\\; \\text{Newton quadratic vs linear fixed-point}",
             "Full exam-style question combining location, Newton iteration, and method comparison."),
    ],
    "(a) $f(1) = -1 < 0$, $f(2) \\approx 1.772 > 0$ $\\Rightarrow$ root in $(1,2)$. "
    "(b) $x_1 \\approx 1.533$. "
    "(c) At a simple root, Newton has $g'(\\alpha) = 0$, giving quadratic convergence — much faster than linear fixed-point iteration where errors shrink by a constant factor $|g'(\\alpha)|$ each step.",
))

assert len(questions) == 18, f"Expected 18 questions, got {len(questions)}"

# Validate step counts
for q in questions:
    n = len(q["workedSolution"]["steps"])
    d = q["difficulty"]
    if d == "Intermediate" and not (9 <= n <= 13):
        raise ValueError(f"{q['id']}: Intermediate has {n} steps (need 9-13)")
    if d == "Hard" and not (13 <= n <= 18):
        raise ValueError(f"{q['id']}: Hard has {n} steps (need 13-18)")

inter = sum(1 for q in questions if q["difficulty"] == "Intermediate")
hard = sum(1 for q in questions if q["difficulty"] == "Hard")
assert inter == 10, f"Expected 10 Intermediate, got {inter}"
assert hard == 8, f"Expected 8 Hard, got {hard}"

# Write TypeScript
lines = [
    'import { Question } from "@/lib/types";',
    "",
    "/**",
    " * A-Level Maths · Year 2 Pure · Locating roots and iteration",
    " * Batch q036–q053: harder iteration, failure cases, cobweb/staircase, exam-style.",
    " */",
    "export const batch: Question[] = " + json.dumps(questions, indent=2, ensure_ascii=False) + ";",
    "",
]

with open(OUT, "w", encoding="utf-8") as f:
    f.write("\n".join(lines))

print(f"Wrote {len(questions)} questions to {OUT}")
print(f"Intermediate: {inter}, Hard: {hard}")
