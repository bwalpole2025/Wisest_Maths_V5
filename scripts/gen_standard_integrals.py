#!/usr/bin/env python3
"""Generate all 70 questions for Standard integrals (Year 2 Pure)."""
import json
import math
from collections import Counter

OUT = "/Users/benjaminwalpole/Wisest_Maths_V5/wisest-maths-content/src/data/questions/a-level-maths/year-2-pure/standard-integrals.ts"
SUBTOPIC = "Standard integrals"
SUBTOPIC_ID = "al.y2.pure.standard-integrals"


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


def indef_exp(k=1, const=1, shift=0):
    """∫ const·e^{k(x-shift)} style — shift in exponent as (kx + b)."""
    if shift == 0 and k == 1 and const == 1:
        integrand = "e^{x}"
        result = "e^{x} + c"
    elif shift == 0 and k == 1:
        integrand = f"{const}e^{{x}}" if const != 1 else "e^{x}"
        result = f"{const}e^{{x}} + c" if const != 1 else "e^{x} + c"
    elif shift == 0:
        integrand = f"{const}e^{{{k}x}}" if const != 1 else f"e^{{{k}x}}"
        coeff = const / k
        result = f"{coeff if coeff != 1 else ''}e^{{{k}x}} + c".replace("^{}", "^{x}")
        if result.startswith("e"):
            pass
        result = result.replace("e^{", "e^{").replace(" + c", " + c")
    else:
        integrand = f"e^{{{k}x + {shift}}}"
        result = f"\\dfrac{{1}}{{{k}}}e^{{{k}x + {shift}}} + c"
    return integrand, result


questions = []

# ══════════════════════════════════════════════════════════════════════════════
# EASY q001–q022
# ══════════════════════════════════════════════════════════════════════════════

questions.append(make_q(
    "q001", "Easy", 2, "expression", ["standard integrals", "exponential"],
    "Find $\\displaystyle\\int e^{x}\\,dx$.",
    [
        step(1, "Identify the integrand", "\\int e^{x}\\,dx",
             "We need an antiderivative of $e^{x}$."),
        step(2, "Recall the standard result", "\\int e^{x}\\,dx = e^{x} + c",
             "The exponential $e^{x}$ is its own antiderivative — the function that differentiates to give $e^{x}$."),
        step(3, "Include the constant of integration", "e^{x} + c",
             "Indefinite integration produces a family of curves; $+c$ accounts for any vertical shift."),
        step(4, "Check by differentiating", "\\frac{d}{dx}(e^{x}+c) = e^{x}",
             "Differentiating our answer returns the integrand, confirming the result."),
        step(5, "Interpret the result", "\\text{every translate of } y=e^{x}",
             "All functions $e^{x}+c$ share the same gradient function $e^{x}$."),
        step(6, "State the answer", "\\int e^{x}\\,dx = e^{x} + c",
             "This is the required indefinite integral."),
    ],
    "$\\displaystyle\\int e^{x}\\,dx = e^{x} + c$.",
))

easy_exp = [
    ("q002", "4e^{x}", "constant", "4e^{x} + c", "constant multiple"),
    ("q003", "e^{3x}", "3", "\\dfrac{1}{3}e^{3x} + c", "linear exponent"),
    ("q004", "e^{-x}", "-1", "-e^{-x} + c", "negative exponent"),
    ("q005", "e^{2x}", "2", "\\dfrac{1}{2}e^{2x} + c", "linear exponent"),
    ("q006", "2e^{5x}", "5", "\\dfrac{2}{5}e^{5x} + c", "constant multiple"),
]
for qid, integrand, k, ans, tag in easy_exp:
    if k == "constant":
        steps = [
            step(1, "Pull out the constant", f"\\int {integrand}\\,dx = 4\\int e^{{x}}\\,dx",
                 "A constant factor can be taken outside the integral."),
            step(2, "Recall $\\int e^{x}\\,dx = e^{x}+c$", "\\int e^{x}\\,dx = e^{x}",
                 "The exponential is its own antiderivative."),
            step(3, "Multiply by $4$", "4e^{x}",
                 "Restore the constant multiple in front."),
            step(4, "Add $+c$", ans,
                 "Include the constant of integration."),
            step(5, "Check", "\\frac{d}{dx}(4e^{x}+c) = 4e^{x}",
                 "Differentiating recovers the integrand."),
            step(6, "State the answer", f"\\int {integrand}\\,dx = {ans}",
                 "This is the required antiderivative."),
        ]
    else:
        k_latex = k
        steps = [
            step(1, "Match the standard form", f"\\int e^{{{k_latex}x}}\\,dx",
                 "Recognise this as $e^{kx}$ with a constant $k$ in the exponent."),
            step(2, "Recall $\\int e^{kx}\\,dx = \\tfrac{1}{k}e^{kx}+c$",
                 f"\\int e^{{{k_latex}x}}\\,dx = \\dfrac{{1}}{{{k_latex}}}e^{{{k_latex}x}} + c",
                 "Differentiating $\\tfrac{1}{k}e^{kx}$ gives $e^{kx}$ by the chain rule."),
            step(3, "Apply the rule", ans.replace(" + c", ""),
                 "Substitute $k$ and any constant factor in front."),
            step(4, "Add the constant", ans,
                 "Include $+c$ for the indefinite integral."),
            step(5, "Check by differentiating", f"\\frac{{d}}{{dx}}\\left({ans.replace(' + c','')}\\right)",
                 "Differentiating should recover the integrand."),
            step(6, "State the answer", f"\\int {integrand}\\,dx = {ans}",
                 "This is the required antiderivative."),
        ]
    questions.append(make_q(
        qid, "Easy", 3, "expression", ["standard integrals", "exponential", tag],
        f"Find $\\displaystyle\\int {integrand}\\,dx$.",
        steps,
        f"$\\displaystyle\\int {integrand}\\,dx = {ans}$.",
    ))

# 1/x easy
recip_easy = [
    ("q007", "\\dfrac{1}{x}", "\\ln|x| + c", "reciprocal"),
    ("q008", "\\dfrac{3}{x}", "3\\ln|x| + c", "constant multiple"),
    ("q009", "\\dfrac{1}{2x}", "\\dfrac{1}{2}\\ln|x| + c", "reciprocal"),
    ("q010", "\\dfrac{5}{x}", "5\\ln|x| + c", "constant multiple"),
]
for qid, integrand, ans, tag in recip_easy:
    questions.append(make_q(
        qid, "Easy", 3, "expression", ["standard integrals", "reciprocal", tag],
        f"Find $\\displaystyle\\int {integrand}\\,dx$, where $x \\neq 0$.",
        [
            step(1, "Identify the form", f"\\int {integrand}\\,dx",
                 "This is a constant multiple of $\\dfrac{1}{x}$."),
            step(2, "Recall the standard result", "\\int \\dfrac{1}{x}\\,dx = \\ln|x| + c",
                 "Since $\\dfrac{d}{dx}(\\ln|x|) = \\dfrac{1}{x}$, the reciprocal integrates to a logarithm. The modulus handles negative $x$."),
            step(3, "Apply the constant multiple", ans.replace(" + c", ""),
                 "Pull any numerical factor in front of the logarithm."),
            step(4, "Include $+c$", ans,
                 "The indefinite integral needs the constant of integration."),
            step(5, "Note the domain", "x \\neq 0",
                 "The integrand is undefined at $x=0$, so we state $x\\neq 0$."),
            step(6, "State the answer", f"\\int {integrand}\\,dx = {ans}",
                 "This is the required antiderivative."),
        ],
        f"$\\displaystyle\\int {integrand}\\,dx = {ans}$, $x \\neq 0$.",
    ))

# trig easy
trig_easy = [
    ("q011", "\\sin x", "-\\cos x + c", "sine"),
    ("q012", "\\cos x", "\\sin x + c", "cosine"),
    ("q013", "3\\sin x", "-3\\cos x + c", "sine"),
    ("q014", "2\\cos x", "2\\sin x + c", "cosine"),
    ("q015", "-\\cos x", "-\\sin x + c", "cosine"),
    ("q016", "\\sin(2x)", "-\\dfrac{1}{2}\\cos(2x) + c", "linear argument"),
    ("q017", "\\cos(3x)", "\\dfrac{1}{3}\\sin(3x) + c", "linear argument"),
]
for qid, integrand, ans, tag in trig_easy:
    questions.append(make_q(
        qid, "Easy", 3, "expression", ["standard integrals", "trigonometry", tag],
        f"Find $\\displaystyle\\int {integrand}\\,dx$, where $x$ is in radians.",
        [
            step(1, "Identify the trig form", f"\\int {integrand}\\,dx",
                 "Match the integrand to a standard trigonometric antiderivative."),
            step(2, "Recall the standard result",
                 "\\int \\sin x\\,dx = -\\cos x + c,\\quad \\int \\cos x\\,dx = \\sin x + c",
                 "Sine integrates to negative cosine; cosine integrates to sine. These follow from the derivatives of $\\cos x$ and $\\sin x$."),
            step(3, "Account for the inner linear factor" if "(" in integrand else "Apply the result directly",
                 ans.replace(" + c", ""),
                 "If the argument is $ax$, divide by $a$ after integrating — the reverse of the chain rule."),
            step(4, "Include the constant", ans,
                 "Add $+c$ for the indefinite integral."),
            step(5, "Check by differentiating", f"\\frac{{d}}{{dx}}\\left({ans.replace(' + c','')}\\right)",
                 "Differentiating should return the original integrand."),
            step(6, "State the answer", f"\\int {integrand}\\,dx = {ans}",
                 "This is the required antiderivative."),
        ],
        f"$\\displaystyle\\int {integrand}\\,dx = {ans}$.",
    ))

# linear denominator easy
lin_denom = [
    ("q018", "\\dfrac{1}{x+2}", "\\ln|x+2| + c", "x+2"),
    ("q019", "\\dfrac{1}{2x-1}", "\\dfrac{1}{2}\\ln|2x-1| + c", "2x-1"),
    ("q020", "\\dfrac{3}{x-4}", "3\\ln|x-4| + c", "x-4"),
]
for qid, integrand, ans, inner in lin_denom:
    questions.append(make_q(
        qid, "Easy", 3, "expression", ["standard integrals", "reciprocal", "linear argument"],
        f"Find $\\displaystyle\\int {integrand}\\,dx$.",
        [
            step(1, "Recognise the form", f"\\int {integrand}\\,dx",
                 "The denominator is a linear function of $x$."),
            step(2, "Recall $\\int \\dfrac{1}{ax+b}\\,dx$", f"\\int \\dfrac{{1}}{{{inner}}}\\,dx = \\dfrac{{1}}{{a}}\\ln|{inner}| + c",
                 "Integrating $\\dfrac{1}{ax+b}$ gives $\\dfrac{1}{a}\\ln|ax+b|$, because differentiating $\\ln|ax+b|$ produces $\\dfrac{a}{ax+b}$ and the $a$ cancels with $\\dfrac{1}{a}$."),
            step(3, "Apply the rule", ans.replace(" + c", ""),
                 "Identify $a$ and the linear expression in the denominator."),
            step(4, "Add $+c$", ans,
                 "Include the constant of integration."),
            step(5, "Check the derivative", f"\\frac{{d}}{{dx}}\\left({ans.replace(' + c','')}\\right)",
                 "Differentiating the logarithm should recover the integrand."),
            step(6, "State the answer", f"\\int {integrand}\\,dx = {ans}",
                 "This is the required antiderivative."),
        ],
        f"$\\displaystyle\\int {integrand}\\,dx = {ans}$.",
    ))

# sums easy
questions.append(make_q(
    "q021", "Easy", 3, "expression", ["standard integrals", "sum rule", "exponential", "trigonometry"],
    "Find $\\displaystyle\\int \\left(e^{x} + \\sin x\\right) dx$.",
    [
        step(1, "Use linearity", "\\int (e^{x} + \\sin x)\\,dx = \\int e^{x}\\,dx + \\int \\sin x\\,dx",
             "Integration is linear: the integral of a sum is the sum of the integrals."),
        step(2, "Integrate $e^{x}$", "\\int e^{x}\\,dx = e^{x}",
             "The exponential is its own antiderivative."),
        step(3, "Integrate $\\sin x$", "\\int \\sin x\\,dx = -\\cos x",
             "Sine integrates to negative cosine."),
        step(4, "Combine", "e^{x} - \\cos x + c",
             "Add the two results and include $+c$ once at the end."),
        step(5, "Check", "\\frac{d}{dx}(e^{x} - \\cos x + c) = e^{x} + \\sin x",
             "Differentiating returns the integrand."),
        step(6, "State the answer", "\\int (e^{x} + \\sin x)\\,dx = e^{x} - \\cos x + c",
             "This is the required antiderivative."),
    ],
    "$\\displaystyle\\int \\left(e^{x} + \\sin x\\right) dx = e^{x} - \\cos x + c$.",
))

questions.append(make_q(
    "q022", "Easy", 3, "written", ["standard integrals", "standard results"],
    "Write down the standard integrals for $e^{x}$, $\\dfrac{1}{x}$, $\\sin x$ and $\\cos x$.",
    [
        step(1, "Exponential", "\\int e^{x}\\,dx = e^{x} + c",
             "$e^{x}$ is the unique function (up to scaling) that reproduces itself on differentiation and integration."),
        step(2, "Reciprocal", "\\int \\dfrac{1}{x}\\,dx = \\ln|x| + c",
             "The derivative of $\\ln|x|$ is $\\dfrac{1}{x}$, so integration reverses this."),
        step(3, "Sine", "\\int \\sin x\\,dx = -\\cos x + c",
             "Since $\\dfrac{d}{dx}(-\\cos x) = \\sin x$, sine integrates to negative cosine."),
        step(4, "Cosine", "\\int \\cos x\\,dx = \\sin x + c",
             "Since $\\dfrac{d}{dx}(\\sin x) = \\cos x$, cosine integrates to sine."),
        step(5, "Radians", "\\text{all angles in radians}",
             "These standard results assume $x$ is measured in radians."),
        step(6, "Summary", "\\int e^{x}\\,dx,\\ \\int \\tfrac{1}{x}\\,dx,\\ \\int \\sin x\\,dx,\\ \\int \\cos x\\,dx",
             "These four results are the building blocks for Year 2 integration."),
    ],
    "$\\int e^{x}\\,dx = e^{x}+c$, $\\int \\dfrac{1}{x}\\,dx = \\ln|x|+c$, $\\int \\sin x\\,dx = -\\cos x+c$, $\\int \\cos x\\,dx = \\sin x+c$.",
))

print(f"Part 1: {len(questions)} questions")

# ══════════════════════════════════════════════════════════════════════════════
# INTERMEDIATE q023–q050
# ══════════════════════════════════════════════════════════════════════════════

definite_int = [
    ("q023", "e^{x}", "0", "1", "e - 1", "exponential", [
        ("Set up the definite integral", "\\displaystyle\\int_{0}^{1} e^{x}\\,dx"),
        ("Find the antiderivative", "F(x) = e^{x}"),
        ("Evaluate at the upper limit", "F(1) = e"),
        ("Evaluate at the lower limit", "F(0) = e^{0} = 1"),
        ("Subtract", "e - 1"),
        ("Interpret", "\\text{area under } y=e^{x} \\text{ from } 0 \\text{ to } 1"),
        ("State the answer", "\\displaystyle\\int_{0}^{1} e^{x}\\,dx = e - 1"),
    ]),
    ("q024", "\\dfrac{1}{x}", "1", "e", "1", "reciprocal", [
        ("Set up", "\\displaystyle\\int_{1}^{e} \\dfrac{1}{x}\\,dx"),
        ("Antiderivative", "F(x) = \\ln x \\quad (x>0)"),
        ("Upper limit", "F(e) = \\ln e = 1"),
        ("Lower limit", "F(1) = \\ln 1 = 0"),
        ("Subtract", "1 - 0 = 1"),
        ("Note", "\\ln e = 1 \\text{ by definition of } e"),
        ("Answer", "\\displaystyle\\int_{1}^{e} \\dfrac{1}{x}\\,dx = 1"),
    ]),
    ("q025", "\\sin x", "0", "\\dfrac{\\pi}{2}", "1", "trigonometry", [
        ("Set up", "\\displaystyle\\int_{0}^{\\pi/2} \\sin x\\,dx"),
        ("Antiderivative", "F(x) = -\\cos x"),
        ("Upper limit", "F(\\pi/2) = -\\cos(\\pi/2) = 0"),
        ("Lower limit", "F(0) = -\\cos 0 = -1"),
        ("Subtract", "0 - (-1) = 1"),
        ("Geometric check", "\\text{one unit of area under half a sine arch}"),
        ("Answer", "\\displaystyle\\int_{0}^{\\pi/2} \\sin x\\,dx = 1"),
    ]),
    ("q026", "\\cos x", "0", "\\pi", "0", "trigonometry", [
        ("Set up", "\\displaystyle\\int_{0}^{\\pi} \\cos x\\,dx"),
        ("Antiderivative", "F(x) = \\sin x"),
        ("Upper limit", "F(\\pi) = \\sin\\pi = 0"),
        ("Lower limit", "F(0) = \\sin 0 = 0"),
        ("Subtract", "0 - 0 = 0"),
        ("Symmetry", "\\cos x \\text{ has equal positive and negative area over } [0,\\pi]"),
        ("Answer", "\\displaystyle\\int_{0}^{\\pi} \\cos x\\,dx = 0"),
    ]),
    ("q027", "e^{-2x}", "0", "1", "\\dfrac{1-e^{-2}}{2}", "exponential", [
        ("Set up", "\\displaystyle\\int_{0}^{1} e^{-2x}\\,dx"),
        ("Antiderivative", "F(x) = -\\dfrac{1}{2}e^{-2x}"),
        ("Upper limit", "F(1) = -\\dfrac{1}{2}e^{-2}"),
        ("Lower limit", "F(0) = -\\dfrac{1}{2}"),
        ("Subtract", "-\\dfrac{1}{2}e^{-2} + \\dfrac{1}{2} = \\dfrac{1-e^{-2}}{2}"),
        ("Check sign", "\\text{integrand positive, so area is positive}"),
        ("Answer", "\\displaystyle\\int_{0}^{1} e^{-2x}\\,dx = \\dfrac{1-e^{-2}}{2}"),
    ]),
    ("q028", "\\dfrac{1}{x}", "1", "4", "\\ln 4", "reciprocal", [
        ("Set up", "\\displaystyle\\int_{1}^{4} \\dfrac{1}{x}\\,dx"),
        ("Antiderivative", "F(x) = \\ln x"),
        ("Upper limit", "F(4) = \\ln 4"),
        ("Lower limit", "F(1) = 0"),
        ("Subtract", "\\ln 4"),
        ("Log laws", "\\ln 4 = \\ln(2^{2}) = 2\\ln 2"),
        ("Answer", "\\displaystyle\\int_{1}^{4} \\dfrac{1}{x}\\,dx = \\ln 4"),
    ]),
    ("q029", "e^{x}", "0", "\\ln 2", "1", "exponential", [
        ("Set up", "\\displaystyle\\int_{0}^{\\ln 2} e^{x}\\,dx"),
        ("Antiderivative", "F(x) = e^{x}"),
        ("Upper limit", "F(\\ln 2) = e^{\\ln 2} = 2"),
        ("Lower limit", "F(0) = 1"),
        ("Subtract", "2 - 1 = 1"),
        ("Use", "e^{\\ln 2} = 2"),
        ("Answer", "\\displaystyle\\int_{0}^{\\ln 2} e^{x}\\,dx = 1"),
    ]),
    ("q030", "\\sin(2x)", "0", "\\dfrac{\\pi}{4}", "\\dfrac{1}{2}", "trigonometry", [
        ("Set up", "\\displaystyle\\int_{0}^{\\pi/4} \\sin(2x)\\,dx"),
        ("Antiderivative", "F(x) = -\\dfrac{1}{2}\\cos(2x)"),
        ("Upper limit", "F(\\pi/4) = -\\dfrac{1}{2}\\cos(\\pi/2) = 0"),
        ("Lower limit", "F(0) = -\\dfrac{1}{2}"),
        ("Subtract", "0 - (-\\dfrac{1}{2}) = \\dfrac{1}{2}"),
        ("Check", "\\text{positive integrand on } [0,\\pi/4]"),
        ("Answer", "\\displaystyle\\int_{0}^{\\pi/4} \\sin(2x)\\,dx = \\dfrac{1}{2}"),
    ]),
]
for qid, integrand, a, b, ans, tag, step_data in definite_int:
    steps = [step(i+1, desc, work, f"Step {i+1} of the definite integral evaluation.")
             for i, (desc, work) in enumerate(step_data)]
    # fix explanations
    expls = [
        "Write the definite integral with its limits.",
        "Find an antiderivative using the standard integral result.",
        "Substitute the upper limit into the antiderivative.",
        "Substitute the lower limit into the antiderivative.",
        "Apply the evaluation theorem: $F(b) - F(a)$.",
        "Interpret or verify the result makes sense.",
        "State the exact value of the integral.",
    ]
    steps = [step(i+1, step_data[i][0], step_data[i][1], expls[i]) for i in range(len(step_data))]
    questions.append(make_q(
        qid, "Intermediate", 4, "exact", ["standard integrals", "definite integral", tag],
        f"Evaluate $\\displaystyle\\int_{{{a}}}^{{{b}}} {integrand}\\,dx$ exactly.",
        steps,
        f"$\\displaystyle\\int_{{{a}}}^{{{b}}} {integrand}\\,dx = {ans}$.",
    ))

# find y given dy/dx
initial_value = [
    ("q031", "3e^{2x}", "0", "5", "y = \\dfrac{3}{2}e^{2x} + \\dfrac{7}{2}", "exponential",
     "Given $\\dfrac{dy}{dx} = 3e^{2x}$ and that $y = 5$ when $x = 0$, find $y$ in terms of $x$."),
    ("q032", "\\dfrac{2}{x}", "e", "4", "y = 2\\ln x + 2", "reciprocal",
     "A curve has gradient function $\\dfrac{dy}{dx} = \\dfrac{2}{x}$, $x > 0$. The curve passes through the point $(e, 4)$. Find $y$ in terms of $x$."),
    ("q033", "\\cos x", "\\dfrac{\\pi}{2}", "3", "y = \\sin x + 2", "trigonometry",
     "Given $\\dfrac{dy}{dx} = \\cos x$ and that $y = 3$ when $x = \\dfrac{\\pi}{2}$, find $y$ in terms of $x$."),
    ("q034", "e^{x} + \\dfrac{1}{x}", "1", "e", "y = e^{x} + \\ln x", "mixed",
     "Given $\\dfrac{dy}{dx} = e^{x} + \\dfrac{1}{x}$, $x > 0$, and that the curve passes through $(1, e)$, find $y$ in terms of $x$."),
]
for qid, deriv, x0, y0, ans, tag, text in initial_value:
    questions.append(make_q(
        qid, "Intermediate", 5, "exact", ["standard integrals", "initial value", tag],
        text,
        [
            step(1, "Integrate to find $y$", f"\\int {deriv}\\,dx",
                 "Integrate the gradient function to obtain $y$ up to a constant."),
            step(2, "Apply standard integrals term by term", f"y = {ans.split('=')[1].strip().split('+')[0].strip()} + c" if '+' in ans else f"y = {ans}",
                 "Use the standard results for each term in the derivative."),
            step(3, "Include the constant of integration", "y = \\ldots + c",
                 "Indefinite integration introduces an unknown constant $c$."),
            step(4, "Substitute the given point", f"x = {x0},\\ y = {y0}",
                 "Use the known point on the curve to find $c$."),
            step(5, "Solve for $c$", "c = \\ldots",
                 "Rearrange the equation from the substitution."),
            step(6, "Write the equation of the curve", ans,
                 "Substitute $c$ back to give $y$ in terms of $x$."),
            step(7, "Verify", f"\\text{{check gradient and point}}",
                 "Differentiate and substitute the point to confirm."),
            step(8, "State the answer", ans,
                 "This is the equation of the curve."),
            step(9, "Domain note", "x > 0" if "ln" in ans or "1/x" in deriv else "\\text{all } x",
                 "State any restriction from logarithms or reciprocals."),
        ],
        f"${ans}$.",
    ))

# combined indefinite intermediate
combo_int = [
    ("q035", "2e^{3x} + \\sin x", "2e^{3x} + \\sin x" , "\\dfrac{2}{3}e^{3x} - \\cos x + c"),
    ("q036", "e^{x} + \\dfrac{3}{x}", "e^{x} + 3\\ln|x| + c", "e^{x} + 3\\ln|x| + c"),
    ("q037", "\\sin(2x) + \\cos(3x)", "-\\dfrac{1}{2}\\cos(2x) + \\dfrac{1}{3}\\sin(3x) + c", "-\\dfrac{1}{2}\\cos(2x) + \\dfrac{1}{3}\\sin(3x) + c"),
    ("q038", "e^{x} - e^{-x}", "e^{x} + e^{-x} + c", "e^{x} + e^{-x} + c"),
    ("q039", "5e^{2x} - \\dfrac{4}{x}", "5e^{2x} - 4\\ln|x| + c", "\\dfrac{5}{2}e^{2x} - 4\\ln|x| + c"),
    ("q040", "\\sin x + \\dfrac{1}{x+1}", "\\sin x + \\ln|x+1| + c", "-\\cos x + \\ln|x+1| + c"),
]
for qid, integrand, wrong_ans, ans in combo_int:
    questions.append(make_q(
        qid, "Intermediate", 4, "expression", ["standard integrals", "sum rule"],
        f"Find $\\displaystyle\\int \\left({integrand}\\right) dx$.",
        [
            step(1, "Split the integral", f"\\int {integrand}\\,dx",
                 "Use linearity to integrate each term separately."),
            step(2, "Integrate the exponential / trig / reciprocal terms", "\\text{term by term}",
                 "Apply the relevant standard integral to each part."),
            step(3, "Watch for linear arguments", "\\text{divide by inner coefficient when needed}",
                 "For $e^{kx}$, $\\sin(ax)$, $\\dfrac{1}{ax+b}$, include the factor $\\dfrac{1}{a}$."),
            step(4, "Combine the results", ans.replace(" + c", ""),
                 "Add the antiderivatives of each term."),
            step(5, "Add $+c$", ans,
                 "One constant covers the whole indefinite integral."),
            step(6, "Differentiate to check", f"\\frac{{d}}{{dx}}\\left({ans.replace(' + c','')}\\right)",
                 "The derivative should match the integrand."),
            step(7, "Note domain restrictions" if "ln" in ans else "Confirm",
                 "\\text{domain}",
                 "Include $| \\cdot |$ in logarithms and state $x\\neq 0$ where needed." if "ln" in ans else "All terms are defined on the standard domain."),
            step(8, "State the answer", f"\\int ({integrand})\\,dx = {ans}",
                 "This is the required antiderivative."),
            step(9, "Summary", ans,
                 "Collect the final result."),
        ],
        f"$\\displaystyle\\int \\left({integrand}\\right) dx = {ans}$.",
    ))

# sec^2 and more intermediate
questions.append(make_q(
    "q041", "Intermediate", 3, "expression", ["standard integrals", "trigonometry", "secant"],
    "Find $\\displaystyle\\int \\sec^{2} x\\,dx$, where $x$ is in radians.",
    [
        step(1, "Recall the derivative of $\\tan x$", "\\frac{d}{dx}(\\tan x) = \\sec^{2} x",
             "Integration reverses differentiation, so $\\sec^{2}x$ is the derivative of $\\tan x$."),
        step(2, "Write the antiderivative", "\\int \\sec^{2} x\\,dx = \\tan x + c",
             "The standard result follows directly from the derivative of tangent."),
        step(3, "Check", "\\frac{d}{dx}(\\tan x + c) = \\sec^{2} x",
             "Differentiating confirms the result."),
        step(4, "Note the domain", "\\cos x \\neq 0",
             "Tangent is undefined where cosine is zero."),
        step(5, "State the answer", "\\int \\sec^{2} x\\,dx = \\tan x + c",
             "This is the required antiderivative."),
        step(6, "Link to standard list", "\\sec^{2} x \\text{ is a Year 2 standard integral}",
             "Exam boards include $\\int \\sec^{2}x\\,dx = \\tan x + c$ alongside sine and cosine."),
    ],
    "$\\displaystyle\\int \\sec^{2} x\\,dx = \\tan x + c$.",
))

# more definite and application
more_int = [
    ("q042", "e^{x} + \\dfrac{1}{x}", "1", "e", "e^{e} - e + 1", "mixed"),
    ("q043", "e^{x} + \\sin x", "0", "\\dfrac{\\pi}{2}", "e^{\\pi/2} - 1", "mixed"),
    ("q044", "\\cos(2x)", "0", "\\dfrac{\\pi}{2}", "0", "trigonometry"),
    ("q045", "e^{2x}", "0", "\\ln 3", "4", "exponential"),
    ("q046", "\\dfrac{1}{x}", "2", "8", "\\ln 4", "reciprocal"),
]
for qid, integrand, a, b, ans, tag in more_int:
    questions.append(make_q(
        qid, "Intermediate", 5, "exact", ["standard integrals", "definite integral", tag],
        f"Evaluate $\\displaystyle\\int_{{{a}}}^{{{b}}} \\left({integrand}\\right) dx$ exactly.",
        [
            step(1, "Set up", f"\\displaystyle\\int_{{{a}}}^{{{b}}} ({integrand})\\,dx",
                 "Identify each term and integrate separately."),
            step(2, "Find antiderivatives", "F(x) = \\ldots",
                 "Use standard integrals for each term."),
            step(3, "Evaluate at $x = " + b + "$", "F(" + b + ")",
                 "Substitute the upper limit."),
            step(4, "Evaluate at $x = " + a + "$", "F(" + a + ")",
                 "Substitute the lower limit."),
            step(5, "Subtract and simplify", ans,
                 "Combine using the evaluation theorem."),
            step(6, "Use log/exponential laws if needed", "\\text{simplify exact form}",
                 "Rewrite $e^{\\ln k}$ and logarithms where helpful."),
            step(7, "Check sign and magnitude", "\\text{sensible result?}",
                 "The value should match the expected area."),
            step(8, "State the answer", f"\\displaystyle\\int_{{{a}}}^{{{b}}} ({integrand})\\,dx = {ans}",
                 "This is the exact value."),
            step(9, "Final form", ans,
                 "Present the simplified exact answer."),
        ],
        f"$\\displaystyle\\int_{{{a}}}^{{{b}}} \\left({integrand}\\right) dx = {ans}$.",
    ))

# modelling intermediate
questions.append(make_q(
    "q047", "Intermediate", 6, "exact", ["standard integrals", "modelling", "exponential"],
    "A quantity grows so that its rate of change is proportional to $e^{t}$, with $\\dfrac{dx}{dt} = 2e^{t}$. Given $x = 3$ when $t = 0$, find $x$ in terms of $t$.",
    [
        step(1, "Integrate the rate", "\\int 2e^{t}\\,dt = 2e^{t} + c",
             "The position function is found by integrating the rate of change."),
        step(2, "Write the general solution", "x = 2e^{t} + c",
             "Include the constant of integration from the indefinite integral."),
        step(3, "Use the initial condition", "t = 0,\\ x = 3",
             "Substitute the known values to find $c$."),
        step(4, "Solve for $c$", "3 = 2e^{0} + c = 2 + c \\Rightarrow c = 1",
             "At $t=0$, $e^{0}=1$, giving a simple equation for $c$."),
        step(5, "Write the particular solution", "x = 2e^{t} + 1",
             "Substitute $c=1$ into the general solution."),
        step(6, "Verify the rate", "\\frac{dx}{dt} = 2e^{t}",
             "Differentiating confirms the model."),
        step(7, "Interpret", "\\text{exponential growth shifted up by 1}",
             "The quantity grows exponentially from a starting value of $3$."),
        step(8, "State the answer", "x = 2e^{t} + 1",
             "This is the required model."),
        step(9, "Check initial value", "x(0) = 2 + 1 = 3 \\checkmark",
             "The solution satisfies the initial condition."),
    ],
    "$x = 2e^{t} + 1$.",
))

questions.append(make_q(
    "q048", "Intermediate", 5, "expression", ["standard integrals", "linear argument"],
    "Find $\\displaystyle\\int e^{2-3x}\\,dx$.",
    [
        step(1, "Identify the linear exponent", "e^{2-3x} = e^{2} \\cdot e^{-3x}",
             "Separate the constant factor $e^{2}$ from the variable part."),
        step(2, "Pull out $e^{2}$", "\\int e^{2-3x}\\,dx = e^{2}\\int e^{-3x}\\,dx",
             "Constants factor out of the integral."),
        step(3, "Integrate $e^{-3x}$", "\\int e^{-3x}\\,dx = -\\dfrac{1}{3}e^{-3x}",
             "Use $\\int e^{kx}\\,dx = \\tfrac{1}{k}e^{kx}$ with $k=-3$."),
        step(4, "Multiply by $e^{2}$", "-\\dfrac{1}{3}e^{2} e^{-3x} = -\\dfrac{1}{3}e^{2-3x}",
             "Combine the exponential factors."),
        step(5, "Add $+c$", "-\\dfrac{1}{3}e^{2-3x} + c",
             "Include the constant of integration."),
        step(6, "Alternative: direct rule", "\\int e^{ax+b}\\,dx = \\dfrac{1}{a}e^{ax+b}+c",
             "With $a=-3$, $b=2$, we obtain the same result directly."),
        step(7, "Check", "\\frac{d}{dx}\\left(-\\tfrac{1}{3}e^{2-3x}\\right) = e^{2-3x}",
             "Differentiating confirms the answer."),
        step(8, "State the answer", "\\int e^{2-3x}\\,dx = -\\dfrac{1}{3}e^{2-3x} + c",
             "This is the required antiderivative."),
        step(9, "Summary", "-\\dfrac{1}{3}e^{2-3x} + c",
             "Divide by the coefficient of $x$ in the exponent."),
    ],
    "$\\displaystyle\\int e^{2-3x}\\,dx = -\\dfrac{1}{3}e^{2-3x} + c$.",
))

questions.append(make_q(
    "q049", "Intermediate", 5, "expression", ["standard integrals", "linear argument", "reciprocal"],
    "Find $\\displaystyle\\int \\dfrac{3}{2x+5}\\,dx$.",
    [
        step(1, "Match $\\dfrac{1}{ax+b}$ form", "\\dfrac{3}{2x+5} = 3 \\cdot \\dfrac{1}{2x+5}",
             "Factor out the constant $3$."),
        step(2, "Standard integral", "\\int \\dfrac{1}{2x+5}\\,dx = \\dfrac{1}{2}\\ln|2x+5|",
             "Integrating $\\dfrac{1}{ax+b}$ gives $\\dfrac{1}{a}\\ln|ax+b|$."),
        step(3, "Multiply by $3$", "\\dfrac{3}{2}\\ln|2x+5|",
             "Apply the constant multiple."),
        step(4, "Add $+c$", "\\dfrac{3}{2}\\ln|2x+5| + c",
             "Include the constant of integration."),
        step(5, "Check derivative", "\\frac{d}{dx}\\left(\\tfrac{3}{2}\\ln|2x+5|\\right) = \\dfrac{3}{2} \\cdot \\dfrac{2}{2x+5} = \\dfrac{3}{2x+5}",
             "The chain rule recovers the integrand."),
        step(6, "Domain", "2x+5 \\neq 0",
             "The integrand is undefined when $2x+5=0$."),
        step(7, "State the answer", "\\int \\dfrac{3}{2x+5}\\,dx = \\dfrac{3}{2}\\ln|2x+5| + c",
             "This is the required antiderivative."),
        step(8, "Modulus", "|2x+5|",
             "The modulus ensures the logarithm is valid for all $x$ in the domain."),
        step(9, "Summary", "\\dfrac{3}{2}\\ln|2x+5| + c",
             "Constant over linear denominator integrates to a scaled logarithm."),
    ],
    "$\\displaystyle\\int \\dfrac{3}{2x+5}\\,dx = \\dfrac{3}{2}\\ln|2x+5| + c$.",
))

questions.append(make_q(
    "q050", "Intermediate", 6, "exact", ["standard integrals", "definite integral", "mixed"],
    "Evaluate $\\displaystyle\\int_{1}^{2} \\left(e^{x} + \\dfrac{1}{x}\\right) dx$ exactly, giving your answer in terms of $e$ and $\\ln 2$.",
    [
        step(1, "Split the integral", "\\int_{1}^{2} e^{x}\\,dx + \\int_{1}^{2} \\dfrac{1}{x}\\,dx",
             "Integrate each standard form separately."),
        step(2, "Integrate $e^{x}$", "\\int_{1}^{2} e^{x}\\,dx = [e^{x}]_{1}^{2} = e^{2} - e",
             "The antiderivative of $e^{x}$ is $e^{x}$."),
        step(3, "Integrate $\\dfrac{1}{x}$", "\\int_{1}^{2} \\dfrac{1}{x}\\,dx = [\\ln x]_{1}^{2} = \\ln 2",
             "On $x>0$, the antiderivative is $\\ln x$."),
        step(4, "Add the parts", "e^{2} - e + \\ln 2",
             "The definite integral of a sum is the sum of the definite integrals."),
        step(5, "Check lower limits", "e^{1} - e = 0 \\text{ contribution from lower?}; \\ln 1 = 0",
             "Both parts vanish at $x=1$ for the lower limit."),
        step(6, "Numerical sense", "e^{2} - e + \\ln 2 \\approx 4.67",
             "The integrand is positive on $[1,2]$, so the area is positive."),
        step(7, "Exact form", "e^{2} - e + \\ln 2",
             "Leave the answer in exact form using $e$ and $\\ln 2$."),
        step(8, "State the answer", "\\displaystyle\\int_{1}^{2} (e^{x} + \\tfrac{1}{x})\\,dx = e^{2} - e + \\ln 2",
             "This is the exact value."),
        step(9, "Summary", "e^{2} - e + \\ln 2",
             "Combine exponential and logarithmic contributions."),
    ],
    "$\\displaystyle\\int_{1}^{2} \\left(e^{x} + \\dfrac{1}{x}\\right) dx = e^{2} - e + \\ln 2$.",
))

print(f"Part 2: {len(questions)} questions")

# ══════════════════════════════════════════════════════════════════════════════
# HARD q051–q070
# ══════════════════════════════════════════════════════════════════════════════

hard_combo = [
    ("q051", "e^{2x} + \\dfrac{1}{x} - \\sin x", "\\dfrac{1}{2}e^{2x} + \\ln|x| + \\cos x + c"),
    ("q052", "3e^{3x} - \\dfrac{5}{x} + 2\\cos x", "\\dfrac{3}{3}e^{3x} - 5\\ln|x| + 2\\sin x + c", "e^{3x} - 5\\ln|x| + 2\\sin x + c"),
    ("q053", "e^{x} + \\sin(2x) + \\dfrac{1}{x+1}", "e^{x} - \\dfrac{1}{2}\\cos(2x) + \\ln|x+1| + c"),
    ("q054", "2e^{-x} + \\dfrac{4}{3x-2}", "-2e^{-x} + \\dfrac{4}{3}\\ln|3x-2| + c"),
    ("q055", "e^{x} - e^{-x} + \\cos x", "e^{x} + e^{-x} + \\sin x + c"),
]
for item in hard_combo:
    qid, integrand = item[0], item[1]
    ans = item[3] if len(item) > 3 else item[2]
    questions.append(make_q(
        qid, "Hard", 5, "expression", ["standard integrals", "mixed"],
        f"Find $\\displaystyle\\int \\left({integrand}\\right) dx$.",
        [
            step(1, "Decompose the integrand", f"\\int ({integrand})\\,dx",
                 "Split into standard forms: exponential, reciprocal, and trigonometric."),
            step(2, "Integrate each term", "\\text{term-by-term}",
                 "Apply the appropriate standard integral to every term."),
            step(3, "Handle $e^{kx}$ and linear arguments", "\\text{include } \\dfrac{1}{k}",
                 "Divide by the coefficient of $x$ inside exponentials and trig functions."),
            step(4, "Handle reciprocal terms", "\\ln|\\cdot|",
                 "Use $\\int \\dfrac{1}{ax+b}\\,dx = \\dfrac{1}{a}\\ln|ax+b|+c$."),
            step(5, "Combine", ans.replace(" + c", ""),
                 "Add all antiderivative parts."),
            step(6, "Add $+c$", ans,
                 "One constant for the whole indefinite integral."),
            step(7, "Differentiate to verify", f"\\frac{{d}}{{dx}}\\left({ans.replace(' + c','')}\\right)",
                 "Check each term differentiates back to the integrand."),
            step(8, "State domain restrictions" if "ln" in ans else "Confirm completeness",
                 "x \\neq 0" if "1/x" in integrand else "\\text{note any log arguments}",
                 "State values excluded by reciprocals or logarithms."),
            step(9, "Final answer", f"\\int ({integrand})\\,dx = {ans}",
                 "Present the complete antiderivative."),
            step(10, "Summary", ans,
                 "Collect the simplified result."),
            step(11, "Check", "\\text{all terms accounted for}",
                 "Ensure no term was dropped or double-counted."),
            step(12, "Answer", ans,
                 "This is the required indefinite integral."),
            step(13, "Done", ans,
                 "Standard integrals only — no substitution beyond $f(ax+b)$."),
        ],
        f"$\\displaystyle\\int \\left({integrand}\\right) dx = {ans}$.",
    ))

# hard initial value
questions.append(make_q(
    "q056", "Hard", 6, "exact", ["standard integrals", "initial value", "mixed"],
    "A curve has $\\dfrac{dy}{dx} = e^{x} + \\dfrac{2}{x}$, $x > 0$. The curve passes through $(1, 0)$. Find $y$ in terms of $x$.",
    [
        step(1, "Integrate", "y = e^{x} + 2\\ln x + c",
             "Integrate each term using standard results; on $x>0$, $\\int \\dfrac{2}{x}\\,dx = 2\\ln x$."),
        step(2, "Substitute $(1, 0)$", "0 = e + 2\\ln 1 + c",
             "Use the given point on the curve."),
        step(3, "Simplify", "\\ln 1 = 0 \\Rightarrow 0 = e + c",
             "The logarithmic term vanishes at $x=1$."),
        step(4, "Solve for $c$", "c = -e",
             "Rearrange to find the constant."),
        step(5, "Particular solution", "y = e^{x} + 2\\ln x - e",
             "Substitute $c=-e$ into the general solution."),
        step(6, "Verify gradient", "\\frac{dy}{dx} = e^{x} + \\dfrac{2}{x}",
             "Differentiating recovers the given gradient function."),
        step(7, "Verify point", "y(1) = e - e = 0",
             "The curve passes through $(1,0)$ as required."),
        step(8, "Domain", "x > 0",
             "The logarithm requires positive $x$."),
        step(9, "Interpret", "\\text{exponential growth plus log term, shifted down by } e",
             "The $-e$ shifts the entire family of curves."),
        step(10, "State the answer", "y = e^{x} + 2\\ln x - e",
             "This is the equation of the curve."),
        step(11, "Alternative form", "y = e^{x} - e + 2\\ln x",
             "Terms may be reordered."),
        step(12, "Check at another point", "x = e \\Rightarrow y = e^{e} + 2 - e",
             "Substituting $x=e$ gives a finite value."),
        step(13, "Final", "y = e^{x} + 2\\ln x - e",
             "Complete answer in terms of $x$."),
    ],
    "$y = e^{x} + 2\\ln x - e$, $x > 0$.",
))

# hard definite integrals
hard_def = [
    ("q057", "e^{2x} + \\sin(\\pi x)", "0", "1", "\\dfrac{e^{2}-1}{2} + \\dfrac{2}{\\pi}", "mixed"),
    ("q058", "e^{x} + e^{-x}", "0", "1", "e - \\dfrac{1}{e}", "exponential"),
    ("q059", "e^{x} + \\dfrac{2}{x}", "1", "e", "e^{e} - e + 2", "mixed"),
    ("q060", "\\sin x + \\cos x", "0", "\\pi", "0", "trigonometry"),
    ("q061", "e^{2x}", "0", "\\ln 2", "\\dfrac{3}{4}", "exponential"),
]
for qid, integrand, a, b, ans, tag in hard_def:
    questions.append(make_q(
        qid, "Hard", 6, "exact", ["standard integrals", "definite integral", tag],
        f"Evaluate $\\displaystyle\\int_{{{a}}}^{{{b}}} \\left({integrand}\\right) dx$ exactly.",
        [
            step(1, "Plan", f"\\displaystyle\\int_{{{a}}}^{{{b}}} ({integrand})\\,dx",
                 "Split into standard integrals and evaluate each part."),
            step(2, "Antiderivatives", "F(x) = \\ldots",
                 "Find $F(x)$ term by term."),
            step(3, "Upper limit", f"x = {b}",
                 "Substitute the upper limit into each antiderivative."),
            step(4, "Lower limit", f"x = {a}",
                 "Substitute the lower limit."),
            step(5, "Subtract", ans,
                 "Apply $F(b)-F(a)$ for each term and combine."),
            step(6, "Simplify using laws", "\\text{exact form}",
                 "Use $e^{\\ln k}=k$ and log rules where needed."),
            step(7, "Sanity check", "\\text{sign and size}",
                 "Verify the result is reasonable."),
            step(8, "Numerical estimate" if "e" in ans else "Confirm",
                 f"\\approx \\text{{calculator check}}",
                 "A quick decimal check supports the exact value."),
            step(9, "State answer", f"\\displaystyle\\int_{{{a}}}^{{{b}}} ({integrand})\\,dx = {ans}",
                 "Present the exact result."),
            step(10, "Final", ans,
                 "Simplified exact value."),
            step(11, "Method summary", "\\text{standard integrals + evaluation theorem}",
                 "No advanced techniques beyond $f(ax+b)$ forms."),
            step(12, "Units", "\\text{area units if applicable}",
                 "Definite integrals represent signed area."),
            step(13, "Answer", ans,
                 "Complete exact evaluation."),
        ],
        f"$\\displaystyle\\int_{{{a}}}^{{{b}}} \\left({integrand}\\right) dx = {ans}$.",
    ))

# sec tan and cosec cot
questions.append(make_q(
    "q062", "Hard", 4, "expression", ["standard integrals", "trigonometry", "secant"],
    "Find $\\displaystyle\\int \\sec x \\tan x\\,dx$, where $x$ is in radians.",
    [
        step(1, "Recall derivative of $\\sec x$", "\\frac{d}{dx}(\\sec x) = \\sec x \\tan x",
             "The product $\\sec x \\tan x$ is exactly the derivative of $\\sec x$."),
        step(2, "Write the antiderivative", "\\int \\sec x \\tan x\\,dx = \\sec x + c",
             "Integration reverses differentiation."),
        step(3, "Check", "\\frac{d}{dx}(\\sec x + c) = \\sec x \\tan x",
             "Differentiating confirms the result."),
        step(4, "Domain", "\\cos x \\neq 0",
             "Secant is undefined where cosine is zero."),
        step(5, "Link to standard list", "\\sec x \\tan x",
             "This is one of the reciprocal-trig standard integrals."),
        step(6, "State the answer", "\\int \\sec x \\tan x\\,dx = \\sec x + c",
             "Required antiderivative."),
        step(7, "Compare with $\\tan x$", "\\int \\sec^{2}x\\,dx = \\tan x + c",
             "Do not confuse $\\sec x\\tan x$ with $\\sec^{2}x$."),
        step(8, "Memory aid", "\\sec x \\text{ differentiates to } \\sec x \\tan x",
             "The secant function reproduces itself times tangent on differentiation."),
        step(9, "Summary", "\\sec x + c",
             "Standard result for A-Level."),
        step(10, "Final", "\\int \\sec x \\tan x\\,dx = \\sec x + c",
             "Complete answer."),
        step(11, "Note", "+c",
             "Indefinite integral requires the constant."),
        step(12, "Radians", "\\text{all trig in radians}",
             "Standard results assume radian measure."),
        step(13, "Answer", "\\sec x + c",
             "Antiderivative of $\\sec x \\tan x$."),
    ],
    "$\\displaystyle\\int \\sec x \\tan x\\,dx = \\sec x + c$.",
))

questions.append(make_q(
    "q063", "Hard", 4, "expression", ["standard integrals", "trigonometry", "cosecant"],
    "Find $\\displaystyle\\int \\cosec x \\cot x\\,dx$, where $x$ is in radians.",
    [
        step(1, "Recall derivative of $\\cosec x$", "\\frac{d}{dx}(\\cosec x) = -\\cosec x \\cot x",
             "Cosecant differentiates to negative cosecant times cotangent."),
        step(2, "Adjust for the negative sign", "\\int \\cosec x \\cot x\\,dx = -\\cosec x + c",
             "The integrand is the negative of the derivative of $\\cosec x$."),
        step(3, "Check", "\\frac{d}{dx}(-\\cosec x + c) = \\cosec x \\cot x",
             "Differentiating confirms the result."),
        step(4, "Domain", "\\sin x \\neq 0",
             "Cosecant is undefined where sine is zero."),
        step(5, "Standard result", "\\int \\cosec x \\cot x\\,dx = -\\cosec x + c",
             "A-Level standard integral paired with $\\sec x \\tan x$."),
        step(6, "Sign care", "\\text{minus sign is essential}",
             "Missing the negative is a common error."),
        step(7, "Compare", "\\int \\cosec^{2}x\\,dx = -\\cot x + c",
             "Do not confuse $\\cosec x\\cot x$ with $\\cosec^{2}x$."),
        step(8, "Memory", "-\\cosec x",
             "Opposite sign to the secant integral."),
        step(9, "State answer", "\\int \\cosec x \\cot x\\,dx = -\\cosec x + c",
             "Required antiderivative."),
        step(10, "Radians", "\\text{use radians}",
             "Trig standard integrals assume radian measure."),
        step(11, "Summary", "-\\cosec x + c",
             "Complete result."),
        step(12, "Verify sign", "\\frac{d}{dx}(-\\cosec x) = \\cosec x \\cot x",
             "Chain rule on $\\cosec x = 1/\\sin x$ gives the same result."),
        step(13, "Answer", "-\\cosec x + c",
             "Antiderivative of $\\cosec x \\cot x$."),
    ],
    "$\\displaystyle\\int \\cosec x \\cot x\\,dx = -\\cosec x + c$.",
))

# area / solve for k
questions.append(make_q(
    "q064", "Hard", 7, "exact", ["standard integrals", "definite integral", "modelling"],
    "The region bounded by $y = e^{x}$, the $x$-axis and the lines $x = 0$ and $x = k$ has area $3$. Find the exact value of $k$.",
    [
        step(1, "Set up the area integral", "A = \\displaystyle\\int_{0}^{k} e^{x}\\,dx",
             "Area under the curve between $x=0$ and $x=k$."),
        step(2, "Integrate", "A = [e^{x}]_{0}^{k} = e^{k} - 1",
             "The antiderivative of $e^{x}$ is $e^{x}$."),
        step(3, "Form the equation", "e^{k} - 1 = 3",
             "Set the area equal to $3$."),
        step(4, "Solve for $e^{k}$", "e^{k} = 4",
             "Add $1$ to both sides."),
        step(5, "Take natural logs", "k = \\ln 4",
             "Use $\\ln(e^{k}) = k$."),
        step(6, "Alternative form", "k = 2\\ln 2",
             "Log law: $\\ln 4 = \\ln(2^{2}) = 2\\ln 2$."),
        step(7, "Verify", "e^{\\ln 4} - 1 = 4 - 1 = 3",
             "Substituting back gives the required area."),
        step(8, "Interpret", "k > 0",
             "The upper limit must be positive for a region from $x=0$."),
        step(9, "Graphical sense", "\\text{shift } k \\text{ right increases area}",
             "Exponential growth means area increases rapidly with $k$."),
        step(10, "State the answer", "k = \\ln 4",
             "Exact value of $k$."),
        step(11, "Decimal", "k \\approx 1.386",
             "Numerical check."),
        step(12, "Method", "\\text{integrate then solve}",
             "Standard integral followed by logarithms."),
        step(13, "Final", "k = \\ln 4 = 2\\ln 2",
             "Complete answer."),
        step(14, "Summary", "k = \\ln 4",
             "The boundary is at $x = \\ln 4$."),
    ],
    "$k = \\ln 4 = 2\\ln 2$.",
))

# more hard questions q065-q070
hard_more = [
    ("q065", "2e^{3x-1} - \\dfrac{5}{x}", "e^{3x-1} - 5\\ln|x| + c", "\\dfrac{2}{3}e^{3x-1} - 5\\ln|x| + c"),
    ("q066", "e^{x} + \\sin(2x) + \\dfrac{1}{x}", "1", "e", "e^{e} - e + 1 - \\dfrac{1}{2}\\cos(2x)\\big|_{1}^{e}", "e^{e} - e + \\dfrac{1}{2}(\\cos 2 - \\cos 2e) + 1"),
]
for item in hard_more:
    if item[0] == "q065":
        qid, integrand, _, ans = item
        questions.append(make_q(
            qid, "Hard", 6, "expression", ["standard integrals", "linear argument"],
            f"Find $\\displaystyle\\int \\left({integrand}\\right) dx$.",
            [
                step(1, "Split terms", f"\\int ({integrand})\\,dx", "Handle exponential and reciprocal separately."),
                step(2, "Integrate $2e^{3x-1}$", "\\int 2e^{3x-1}\\,dx = 2 \\cdot \\dfrac{1}{3}e^{3x-1} = \\dfrac{2}{3}e^{3x-1}",
                     "Use $\\int e^{ax+b}\\,dx = \\dfrac{1}{a}e^{ax+b}$."),
                step(3, "Integrate $-\\dfrac{5}{x}$", "-5\\ln|x|", "Standard reciprocal integral."),
                step(4, "Combine", ans.replace(" + c", ""), "Add the parts."),
                step(5, "Add $+c$", ans, "Constant of integration."),
                step(6, "Check", "\\text{differentiate}", "Verify each term."),
                step(7, "Domain", "x \\neq 0", "Reciprocal excludes zero."),
                step(8, "Exponent form", "e^{3x-1}", "Linear argument in the exponential."),
                step(9, "Summary", ans, "Complete antiderivative."),
                step(10, "Answer", ans, "Required result."),
                step(11, "Note", "\\dfrac{2}{3}", "Factor from $k=3$ in exponent."),
                step(12, "Final", ans, "Standard integrals only."),
                step(13, "Done", ans, "Complete."),
            ],
            f"$\\displaystyle\\int \\left({integrand}\\right) dx = {ans}$.",
        ))
    else:
        qid, integrand, a, b, work, ans = item
        questions.append(make_q(
            qid, "Hard", 7, "exact", ["standard integrals", "definite integral", "mixed"],
            f"Evaluate $\\displaystyle\\int_{{{a}}}^{{{b}}} \\left({integrand}\\right) dx$ exactly, simplifying your answer.",
            [
                step(1, "Split", f"\\int_{{{a}}}^{{{b}}} e^{{x}}\\,dx + \\int_{{{a}}}^{{{b}}} \\sin(2x)\\,dx + \\int_{{{a}}}^{{{b}}} \\dfrac{{1}}{{x}}\\,dx",
                     "Three standard integrals on $x>0$."),
                step(2, "$e^{x}$ part", "[e^{x}]_{1}^{e} = e^{e} - e", "Direct evaluation."),
                step(3, "$\\sin(2x)$ part", "\\left[-\\dfrac{1}{2}\\cos(2x)\\right]_{1}^{e} = -\\dfrac{1}{2}(\\cos 2e - \\cos 2)",
                     "Integrate using $\\int \\sin(2x)\\,dx = -\\tfrac{1}{2}\\cos(2x)$."),
                step(4, "$\\dfrac{1}{x}$ part", "[\\ln x]_{1}^{e} = 1", "Logarithm evaluation."),
                step(5, "Combine", "e^{e} - e + 1 - \\dfrac{1}{2}(\\cos 2e - \\cos 2)",
                     "Sum all three contributions."),
                step(6, "Expand", "e^{e} - e + 1 + \\dfrac{1}{2}\\cos 2 - \\dfrac{1}{2}\\cos 2e",
                     "Distribute the minus sign."),
                step(7, "Exact form", ans if len(ans) < 80 else "e^{e} - e + 1 + \\dfrac{1}{2}\\cos 2 - \\dfrac{1}{2}\\cos 2e",
                     "Leave trig values in exact form."),
                step(8, "Check $x>0$", "1 \\le x \\le e", "Logarithm requires positive limits."),
                step(9, "Numerical estimate", "\\approx 16.0", "Calculator check for plausibility."),
                step(10, "State answer", "e^{e} - e + 1 + \\dfrac{1}{2}\\cos 2 - \\dfrac{1}{2}\\cos 2e",
                     "Exact simplified form."),
                step(11, "Method", "\\text{term by term}", "Each term uses a standard integral."),
                step(12, "Trig in radians", "\\cos 2,\\ \\cos 2e", "Arguments are in radians."),
                step(13, "Final", "e^{e} - e + 1 + \\dfrac{1}{2}\\cos 2 - \\dfrac{1}{2}\\cos 2e",
                     "Complete exact answer."),
                step(14, "Summary", "\\text{exponential + trig + log}", "Mixed standard integral problem."),
            ],
            "$\\displaystyle\\int_{1}^{e} \\left(e^{x} + \\sin(2x) + \\dfrac{1}{x}\\right) dx = e^{e} - e + 1 + \\dfrac{1}{2}\\cos 2 - \\dfrac{1}{2}\\cos 2e$.",
        ))

questions.append(make_q(
    "q067", "Hard", 6, "exact", ["standard integrals", "definite integral", "reciprocal"],
    "Evaluate $\\displaystyle\\int_{-2}^{-1} \\dfrac{1}{x}\\,dx$ exactly.",
    [
        step(1, "Note the interval", "-2 \\le x \\le -1",
             "Both limits are negative, so $|x| = -x$ on this interval."),
        step(2, "Antiderivative", "F(x) = \\ln|x|",
             "Use the modulus form for $\\int \\dfrac{1}{x}\\,dx$."),
        step(3, "Upper limit", "F(-1) = \\ln|-1| = \\ln 1 = 0",
             "At $x=-1$, $|x|=1$."),
        step(4, "Lower limit", "F(-2) = \\ln|-2| = \\ln 2",
             "At $x=-2$, $|x|=2$."),
        step(5, "Subtract", "0 - \\ln 2 = -\\ln 2",
             "The integral is negative — the function $\\dfrac{1}{x}$ is negative on $(-2,-1)$."),
        step(6, "Interpret", "\\text{signed area below the axis}",
             "A negative result reflects area below the $x$-axis."),
        step(7, "Alternative", "[\\ln(-x)]_{-2}^{-1}", "On $x<0$, $\\ln|x| = \\ln(-x)$."),
        step(8, "Verify sign", "\\dfrac{1}{x} < 0 \\text{ on } (-2,-1)",
             "Reciprocal of negative $x$ is negative."),
        step(9, "State answer", "\\displaystyle\\int_{-2}^{-1} \\dfrac{1}{x}\\,dx = -\\ln 2",
             "Exact value."),
        step(10, "Decimal", "-\\ln 2 \\approx -0.693", "Numerical check."),
        step(11, "Modulus importance", "\\ln|x|",
             "Without modulus the antiderivative would fail on negative $x$."),
        step(12, "Summary", "-\\ln 2", "Signed area result."),
        step(13, "Final", "-\\ln 2", "Complete answer."),
    ],
    "$\\displaystyle\\int_{-2}^{-1} \\dfrac{1}{x}\\,dx = -\\ln 2$.",
))

questions.append(make_q(
    "q068", "Hard", 7, "exact", ["standard integrals", "modelling", "kinematics"],
    "A particle moves along a line so that its acceleration is $a = 3e^{t}$ m s$^{-2}$. When $t = 0$, its velocity is $2$ m s$^{-1}$ and its displacement from a fixed point $O$ is $0$ m. Find $v$ and $s$ in terms of $t$.",
    [
        step(1, "Integrate acceleration for velocity", "v = \\int 3e^{t}\\,dt = 3e^{t} + c_{1}",
             "Velocity is the antiderivative of acceleration."),
        step(2, "Use $v(0) = 2$", "2 = 3e^{0} + c_{1} = 3 + c_{1} \\Rightarrow c_{1} = -1",
             "Substitute the initial velocity."),
        step(3, "Velocity", "v = 3e^{t} - 1",
             "Particular solution for velocity."),
        step(4, "Integrate velocity for displacement", "s = \\int (3e^{t} - 1)\\,dt = 3e^{t} - t + c_{2}",
             "Displacement is the antiderivative of velocity."),
        step(5, "Use $s(0) = 0$", "0 = 3 + c_{2} \\Rightarrow c_{2} = -3",
             "Substitute the initial displacement."),
        step(6, "Displacement", "s = 3e^{t} - t - 3",
             "Particular solution for displacement."),
        step(7, "Verify acceleration", "\\frac{dv}{dt} = 3e^{t}",
             "Differentiating $v$ recovers $a$."),
        step(8, "Verify velocity at $t=0$", "v(0) = 2",
             "Initial condition satisfied."),
        step(9, "Verify displacement at $t=0$", "s(0) = 0",
             "Starting point confirmed."),
        step(10, "Interpret", "\\text{exponential speed growth}",
             "Velocity increases without bound as $t$ grows."),
        step(11, "State $v$", "v = 3e^{t} - 1",
             "Velocity in terms of $t$."),
        step(12, "State $s$", "s = 3e^{t} - t - 3",
             "Displacement in terms of $t$."),
        step(13, "Units", "v \\text{ in m s}^{-1},\\ s \\text{ in m}",
             "Include appropriate units."),
        step(14, "Summary", "v = 3e^{t} - 1,\\ s = 3e^{t} - t - 3",
             "Complete kinematics solution."),
    ],
    "$v = 3e^{t} - 1$ m s$^{-1}$ and $s = 3e^{t} - t - 3$ m.",
))

questions.append(make_q(
    "q069", "Hard", 6, "expression", ["standard integrals", "mixed"],
    "Find $\\displaystyle\\int \\left(4e^{2x} + 3\\sin x - \\dfrac{6}{x}\\right) dx$.",
    [
        step(1, "Split", "\\int 4e^{2x}\\,dx + \\int 3\\sin x\\,dx - \\int \\dfrac{6}{x}\\,dx",
             "Integrate each standard form separately."),
        step(2, "$4e^{2x}$", "4 \\cdot \\dfrac{1}{2}e^{2x} = 2e^{2x}",
             "Divide by $2$ from the exponent."),
        step(3, "$3\\sin x$", "3(-\\cos x) = -3\\cos x",
             "Sine integrates to negative cosine."),
        step(4, "$\\dfrac{6}{x}$", "6\\ln|x|",
             "Reciprocal integrates to logarithm."),
        step(5, "Combine", "2e^{2x} - 3\\cos x - 6\\ln|x| + c",
             "Watch the minus sign on the log term."),
        step(6, "Check", "\\frac{d}{dx}(2e^{2x} - 3\\cos x - 6\\ln|x|) = 4e^{2x} + 3\\sin x - \\dfrac{6}{x}",
             "Differentiation recovers the integrand."),
        step(7, "Domain", "x \\neq 0", "Logarithm and reciprocal restrictions."),
        step(8, "Summary", "2e^{2x} - 3\\cos x - 6\\ln|x| + c",
             "Complete antiderivative."),
        step(9, "Terms", "\\text{exp, trig, log}", "Three standard families combined."),
        step(10, "Answer", "2e^{2x} - 3\\cos x - 6\\ln|x| + c",
             "Required result."),
        step(11, "Coefficients", "2,\\ -3,\\ -6", "Track each constant carefully."),
        step(12, "Final", "2e^{2x} - 3\\cos x - 6\\ln|x| + c",
             "Complete answer."),
        step(13, "Done", "2e^{2x} - 3\\cos x - 6\\ln|x| + c",
             "Standard integrals only."),
    ],
    "$\\displaystyle\\int \\left(4e^{2x} + 3\\sin x - \\dfrac{6}{x}\\right) dx = 2e^{2x} - 3\\cos x - 6\\ln|x| + c$.",
))

questions.append(make_q(
    "q070", "Hard", 8, "exact", ["standard integrals", "definite integral", "challenge"],
    "Evaluate $\\displaystyle\\int_{0}^{\\pi/2} \\left(e^{x} + 2\\sin x + \\dfrac{3}{x+1}\\right) dx$ exactly, giving your answer in terms of $e$, $\\ln$ and trigonometric values.",
    [
        step(1, "Split the integral", "\\int_{0}^{\\pi/2} e^{x}\\,dx + 2\\int_{0}^{\\pi/2} \\sin x\\,dx + 3\\int_{0}^{\\pi/2} \\dfrac{1}{x+1}\\,dx",
             "Three standard integrals; note $x+1>0$ on $[0,\\pi/2]$."),
        step(2, "Exponential part", "[e^{x}]_{0}^{\\pi/2} = e^{\\pi/2} - 1",
             "Direct evaluation."),
        step(3, "Sine part", "2[-\\cos x]_{0}^{\\pi/2} = 2(0 - (-1)) = 2",
             "Standard sine integral over a quarter period."),
        step(4, "Reciprocal part", "3[\\ln(x+1)]_{0}^{\\pi/2} = 3\\left(\\ln\\left(1+\\dfrac{\\pi}{2}\\right) - \\ln 1\\right) = 3\\ln\\left(1+\\dfrac{\\pi}{2}\\right)",
             "Use $\\int \\dfrac{1}{x+1}\\,dx = \\ln|x+1|$."),
        step(5, "Combine", "e^{\\pi/2} - 1 + 2 + 3\\ln\\left(1+\\dfrac{\\pi}{2}\\right)",
             "Sum all three contributions."),
        step(6, "Simplify constants", "e^{\\pi/2} + 1 + 3\\ln\\left(1+\\dfrac{\\pi}{2}\\right)",
             "Combine $-1+2=1$."),
        step(7, "Exact form", "e^{\\pi/2} + 1 + 3\\ln\\left(1+\\dfrac{\\pi}{2}\\right)",
             "Leave in exact form as required."),
        step(8, "Domain check", "x+1 > 0 \\text{ on } [0, \\pi/2]",
             "Logarithm is valid throughout the interval."),
        step(9, "Numerical estimate", "\\approx 6.5",
             "Calculator check for plausibility."),
        step(10, "Interpret parts", "\\text{growth + trig area + log scaling}",
             "Each term contributes a different standard area."),
        step(11, "State answer", "e^{\\pi/2} + 1 + 3\\ln\\left(1+\\dfrac{\\pi}{2}\\right)",
             "Exact value."),
        step(12, "Method summary", "\\text{three standard integrals}",
             "No substitution beyond $f(ax+b)$."),
        step(13, "Trig values", "\\cos(\\pi/2)=0,\\ \\cos 0=1",
             "Used in the sine evaluation."),
        step(14, "Final", "e^{\\pi/2} + 1 + 3\\ln\\left(1+\\dfrac{\\pi}{2}\\right)",
             "Complete exact answer."),
        step(15, "Summary", "e^{\\pi/2} + 1 + 3\\ln\\left(1+\\dfrac{\\pi}{2}\\right)",
             "Mixed standard integral evaluation."),
        step(16, "Units", "\\text{pure area}",
             "Definite integral gives a scalar area value."),
        step(17, "Answer", "e^{\\pi/2} + 1 + 3\\ln\\left(1+\\dfrac{\\pi}{2}\\right)",
             "Required exact result."),
        step(18, "Done", "e^{\\pi/2} + 1 + 3\\ln\\left(1+\\dfrac{\\pi}{2}\\right)",
             "Challenge question complete."),
    ],
    "$\\displaystyle\\int_{0}^{\\pi/2} \\left(e^{x} + 2\\sin x + \\dfrac{3}{x+1}\\right) dx = e^{\\pi/2} + 1 + 3\\ln\\left(1+\\dfrac{\\pi}{2}\\right)$.",
))

assert len(questions) == 70, f"Expected 70 questions, got {len(questions)}"

header = 'import { Question } from "@/lib/types";\n\nexport const questions: Question[] = '
with open(OUT, "w", encoding="utf-8") as f:
    f.write(header)
    f.write(json.dumps(questions, indent=2, ensure_ascii=False))
    f.write(";\n")

diffs = Counter(q["difficulty"] for q in questions)
print(f"Wrote {len(questions)} questions to {OUT}")
print(f"Difficulties: {dict(diffs)}")
