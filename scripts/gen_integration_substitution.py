#!/usr/bin/env python3
"""Generate all 70 questions for Integration by substitution (Year 2 Pure)."""
import json
from collections import Counter

OUT = "/Users/benjaminwalpole/Wisest_Maths_V5/wisest-maths-content/src/data/questions/a-level-maths/year-2-pure/integration-by-substitution.ts"
SUBTOPIC = "Integration by substitution"
SUBTOPIC_ID = "al.y2.pure.integration-substitution"


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
# EASY q001–q018: linear substitutions, reverse chain rule
# ══════════════════════════════════════════════════════════════════════════════

linear_cases = [
    ("q001", "(2x+1)^3", "u = 2x+1", "du = 2\\,dx", "\\dfrac{1}{8}(2x+1)^4 + c", "2", "4"),
    ("q002", "(3x-2)^5", "u = 3x-2", "du = 3\\,dx", "\\dfrac{1}{18}(3x-2)^6 + c", "3", "6"),
    ("q003", "\\sqrt{4x+1}", "u = 4x+1", "du = 4\\,dx", "\\dfrac{1}{6}(4x+1)^{3/2} + c", "4", "3/2"),
    ("q004", "\\dfrac{1}{3x+2}", "u = 3x+2", "du = 3\\,dx", "\\dfrac{1}{3}\\ln|3x+2| + c", "3", "1"),
    ("q005", "e^{5x}", "u = 5x", "du = 5\\,dx", "\\dfrac{1}{5}e^{5x} + c", "5", "1"),
    ("q006", "(1-x)^4", "u = 1-x", "du = -dx", "-\\dfrac{1}{5}(1-x)^5 + c", "1", "5"),
    ("q007", "\\dfrac{2}{5x-1}", "u = 5x-1", "du = 5\\,dx", "\\dfrac{2}{5}\\ln|5x-1| + c", "5", "1"),
    ("q008", "(x+3)^{-2}", "u = x+3", "du = dx", "-(x+3)^{-1} + c", "1", "-1"),
]

for qid, integrand, u_def, du, ans, k, power in linear_cases:
    steps = [
        step(1, "Identify a suitable substitution", u_def,
             "Look for a linear expression inside the integrand whose derivative is a constant."),
        step(2, "Differentiate to find $du$", du,
             "Differentiating $u$ gives $du$ in terms of $dx$, which we rearrange to replace $dx$."),
        step(3, "Rewrite the integral in terms of $u$",
             f"\\int u^{{{power}}} \\cdot \\dfrac{{du}}{{{k}}}" if power not in ("1", "-1") else
             ("\\int \\dfrac{1}{u} \\cdot \\dfrac{du}{" + k + "}" if power == "1" else "\\int u^{-2}\\,du"),
             "Every $x$ term is replaced using the substitution."),
        step(4, "Integrate with respect to $u$",
             ans.replace(" + c", "").replace("(2x+1)", "u").replace("(3x-2)", "u").replace("(4x+1)", "u")
             .replace("(3x+2)", "u").replace("(5x-1)", "u").replace("(1-x)", "u").replace("(x+3)", "u").replace("e^{5x}", "e^u"),
             "Integrate the simpler expression in $u$ using standard rules."),
        step(5, "Substitute back for $x$", ans.replace(" + c", ""),
             "Replace $u$ with the original expression in $x$."),
        step(6, "Add the constant of integration", ans,
             "Include $+c$ for an indefinite integral."),
    ]
    questions.append(make_q(
        qid, "Easy", 3, "expression", ["substitution", "linear substitution", "indefinite integral"],
        f"Find $\\displaystyle\\int {integrand}\\,dx$.",
        steps,
        f"$\\displaystyle\\int {integrand}\\,dx = {ans}$.",
    ))

# q009-q012: x times function of x^2 (reverse chain rule)
reverse_chain = [
    ("q009", "x(x^2+1)^3", "u = x^2+1", "du = 2x\\,dx", "\\dfrac{1}{8}(x^2+1)^4 + c"),
    ("q010", "x e^{x^2}", "u = x^2", "du = 2x\\,dx", "\\dfrac{1}{2}e^{x^2} + c"),
    ("q011", "\\dfrac{x}{x^2+4}", "u = x^2+4", "du = 2x\\,dx", "\\dfrac{1}{2}\\ln(x^2+4) + c"),
    ("q012", "x\\sqrt{x^2+9}", "u = x^2+9", "du = 2x\\,dx", "\\dfrac{1}{3}(x^2+9)^{3/2} + c"),
]
for qid, integrand, u_def, du, ans in reverse_chain:
    steps = [
        step(1, "Spot the reverse chain rule", u_def,
             "The integrand contains a function of $x^2$ (or similar) multiplied by (a constant times) its derivative."),
        step(2, "Define the substitution", f"{u_def}, \\quad {du}",
             "Let $u$ be the inner function; then $du$ appears as a factor in the integrand."),
        step(3, "Rewrite in terms of $u$", "\\text{integral becomes a standard form in } u",
             "The $x\\,dx$ factor combines with $du$ to leave a simple integral."),
        step(4, "Integrate", ans.replace(" + c", ""),
             "Apply the power rule, exponential rule, or logarithm rule in $u$."),
        step(5, "Substitute back", ans.replace(" + c", ""),
             "Replace $u$ with the expression in $x$."),
        step(6, "Check by differentiating", f"\\frac{{d}}{{dx}}\\left({ans.replace(' + c','')}\\right)",
             "Differentiating the answer should recover the integrand."),
    ]
    questions.append(make_q(
        qid, "Easy", 4, "expression", ["substitution", "reverse chain rule"],
        f"Find $\\displaystyle\\int {integrand}\\,dx$.",
        steps,
        f"$\\displaystyle\\int {integrand}\\,dx = {ans}$.",
    ))

# q013-q015: trig product sin x cos x
trig_easy = [
    ("q013", "\\sin x \\cos x", "u = \\sin x", "du = \\cos x\\,dx", "\\dfrac{1}{2}\\sin^2 x + c"),
    ("q014", "\\sin x \\cos^2 x", "u = \\cos x", "du = -\\sin x\\,dx", "-\\dfrac{1}{3}\\cos^3 x + c"),
    ("q015", "2\\sin x \\cos x", "u = \\sin x", "du = \\cos x\\,dx", "\\sin^2 x + c"),
]
for qid, integrand, u_def, du, ans in trig_easy:
    steps = [
        step(1, "Choose a substitution", u_def,
             "One trig factor is the derivative (up to sign) of the inner function in the other factor."),
        step(2, "Find $du$", du,
             "Differentiate $u$ to obtain $du$."),
        step(3, "Rewrite the integral", "\\int u^n\\,du \\text{ (after adjusting constants)}",
             "The remaining trig factor becomes part of $du$."),
        step(4, "Integrate", ans.replace(" + c", ""),
             "Use the power rule on $u$."),
        step(5, "Substitute back", ans.replace(" + c", ""),
             "Express the answer in terms of $x$."),
        step(6, "Alternative check", "\\text{Could also use } u = \\cos x",
             "Some trig products allow either substitution; both give equivalent answers differing by a constant."),
    ]
    questions.append(make_q(
        qid, "Easy", 3, "expression", ["substitution", "trigonometry"],
        f"Find $\\displaystyle\\int {integrand}\\,dx$, where $x$ is in radians.",
        steps,
        f"$\\displaystyle\\int {integrand}\\,dx = {ans}$.",
    ))

# q016-q018: conceptual / show that
questions.append(make_q(
    "q016", "Easy", 3, "written", ["substitution", "method"],
    "Explain why $u$-substitution works for integrating $\\displaystyle\\int f(g(x))g'(x)\\,dx$.",
    [
        step(1, "State the substitution", "u = g(x)",
             "Let $u$ equal the inner function."),
        step(2, "Differentiate", "\\dfrac{du}{dx} = g'(x) \\Rightarrow du = g'(x)\\,dx",
             "The derivative of the inner function provides the $dx$ replacement."),
        step(3, "Rewrite the integral", "\\int f(g(x))g'(x)\\,dx = \\int f(u)\\,du",
             "Every part of the integrand is now in terms of $u$."),
        step(4, "Integrate in $u$", "\\int f(u)\\,du = F(u) + c",
             "The integral becomes a standard form in the new variable."),
        step(5, "Reverse substitute", "F(g(x)) + c",
             "Replace $u$ with $g(x)$ to express the answer in $x$."),
        step(6, "Connect to the chain rule", "\\frac{d}{dx}F(g(x)) = f(g(x))g'(x)",
             "Substitution is the reverse of the chain rule for differentiation — which is why the $g'(x)$ factor must be present."),
    ],
    "With $u = g(x)$, $du = g'(x)\\,dx$, so $\\int f(g(x))g'(x)\\,dx = \\int f(u)\\,du$; this is the reverse of the chain rule.",
))

questions.append(make_q(
    "q017", "Easy", 3, "expression", ["substitution", "logarithm"],
    "Find $\\displaystyle\\int \\dfrac{\\ln x}{x}\\,dx$, where $x > 0$.",
    [
        step(1, "Choose $u = \\ln x$", "u = \\ln x",
             "The derivative of $\\ln x$ is $\\dfrac{1}{x}$, which appears as a factor."),
        step(2, "Find $du$", "du = \\dfrac{1}{x}\\,dx",
             "Differentiating $\\ln x$ gives the reciprocal factor in the integrand."),
        step(3, "Rewrite", "\\int u\\,du",
             "The integral becomes a simple polynomial in $u$."),
        step(4, "Integrate", "\\dfrac{1}{2}u^2 + c",
             "Integrate $u$ using the power rule."),
        step(5, "Substitute back", "\\dfrac{1}{2}(\\ln x)^2 + c",
             "Replace $u$ with $\\ln x$."),
        step(6, "State the answer", "\\dfrac{1}{2}(\\ln x)^2 + c",
             "The integral of $\\dfrac{\\ln x}{x}$ is half the square of $\\ln x$, plus a constant."),
    ],
    "$\\displaystyle\\int \\dfrac{\\ln x}{x}\\,dx = \\dfrac{1}{2}(\\ln x)^2 + c$.",
))

questions.append(make_q(
    "q018", "Easy", 4, "expression", ["substitution", "exponential"],
    "Find $\\displaystyle\\int x e^{x^2}\\,dx$.",
    [
        step(1, "Identify the inner function", "u = x^2",
             "The exponent $x^2$ is differentiated to give $2x$, which appears (up to a factor) in the integrand."),
        step(2, "Differentiate", "du = 2x\\,dx",
             "So $x\\,dx = \\dfrac{1}{2}du$."),
        step(3, "Substitute", "\\int e^u \\cdot \\dfrac{1}{2}\\,du = \\dfrac{1}{2}\\int e^u\\,du",
             "The integral reduces to the standard exponential."),
        step(4, "Integrate", "\\dfrac{1}{2}e^u + c",
             "$e^u$ is its own antiderivative."),
        step(5, "Back-substitute", "\\dfrac{1}{2}e^{x^2} + c",
             "Replace $u$ with $x^2$."),
        step(6, "Verify", "\\frac{d}{dx}\\left(\\dfrac{1}{2}e^{x^2}\\right) = x e^{x^2}",
             "Differentiating confirms the result."),
    ],
    "$\\displaystyle\\int x e^{x^2}\\,dx = \\dfrac{1}{2}e^{x^2} + c$.",
))

print(f"Easy: {len(questions)}")

# ══════════════════════════════════════════════════════════════════════════════
# INTERMEDIATE q019–q050
# ══════════════════════════════════════════════════════════════════════════════

intermediate_cases = [
    ("q019", "\\sin^3 x \\cos x", "u = \\sin x", "du = \\cos x\\,dx", "\\dfrac{1}{4}\\sin^4 x + c", 4),
    ("q020", "\\cos^3 x \\sin x", "u = \\cos x", "du = -\\sin x\\,dx", "-\\dfrac{1}{4}\\cos^4 x + c", 4),
    ("q021", "\\tan x \\sec^2 x", "u = \\tan x", "du = \\sec^2 x\\,dx", "\\dfrac{1}{2}\\tan^2 x + c", 2),
    ("q022", "\\dfrac{e^x}{e^x+1}", "u = e^x+1", "du = e^x\\,dx", "\\ln(e^x+1) + c", 1),
    ("q023", "\\dfrac{3x^2}{x^3+1}", "u = x^3+1", "du = 3x^2\\,dx", "\\ln(x^3+1) + c", 1),
    ("q024", "x(x^2-1)^2", "u = x^2-1", "du = 2x\\,dx", "\\dfrac{1}{6}(x^2-1)^3 + c", 3),
    ("q025", "\\dfrac{1}{\\sqrt{2x+3}}", "u = 2x+3", "du = 2\\,dx", "\\sqrt{2x+3} + c", "1/2"),
    ("q026", "x^3(x^4+2)^5", "u = x^4+2", "du = 4x^3\\,dx", "\\dfrac{1}{24}(x^4+2)^6 + c", 6),
    ("q027", "\\sin^2 x \\cos x", "u = \\sin x", "du = \\cos x\\,dx", "\\dfrac{1}{3}\\sin^3 x + c", 3),
    ("q028", "\\dfrac{2x}{x^2-5}", "u = x^2-5", "du = 2x\\,dx", "\\ln|x^2-5| + c", 1),
    ("q029", "e^{3x}(e^{3x}+2)^4", "u = e^{3x}+2", "du = 3e^{3x}\\,dx", "\\dfrac{1}{15}(e^{3x}+2)^5 + c", 5),
    ("q030", "\\dfrac{\\cos x}{\\sin x}", "u = \\sin x", "du = \\cos x\\,dx", "\\ln|\\sin x| + c", 1),
]

for qid, integrand, u_def, du, ans, power in intermediate_cases:
    steps = [
        step(1, "Choose the substitution", u_def,
             "Identify the inner function whose derivative appears as a factor."),
        step(2, "Differentiate to find $du$", du,
             "Compute $du$ and solve for the matching factor in the integrand."),
        step(3, "Express $dx$ or combine factors", "\\text{rewrite integral in } u",
             "Replace every $x$-term using the substitution."),
        step(4, "Simplify the integral", f"\\int u^{{{power}}}\\,du" if isinstance(power, int) else "\\int u^{1/2}\\,du",
             "The integral should now be a standard power or logarithm form."),
        step(5, "Integrate with respect to $u$", ans.replace(" + c", ""),
             "Apply the appropriate integration rule."),
        step(6, "Substitute back for $x$", ans.replace(" + c", ""),
             "Replace $u$ with the original expression."),
        step(7, "Include $+c$", ans,
             "Add the constant of integration."),
        step(8, "Check by differentiating", f"\\frac{{d}}{{dx}}\\left({ans.replace(' + c','')}\\right)",
             "Differentiation confirms the antiderivative."),
        step(9, "State the final answer", f"\\int {integrand}\\,dx = {ans}",
             "This is the required indefinite integral."),
    ]
    questions.append(make_q(
        qid, "Intermediate", 4, "expression", ["substitution", "indefinite integral"],
        f"Find $\\displaystyle\\int {integrand}\\,dx$, where $x$ is in radians where applicable.",
        steps,
        f"$\\displaystyle\\int {integrand}\\,dx = {ans}$.",
    ))

# Definite integrals q031-q038
definite_cases = [
    ("q031", "2x\\sqrt{x^2+1}", "0", "2", "u = x^2+1", "0", "5", "\\dfrac{2}{3}(5^{3/2}-1) = \\dfrac{2}{3}(5\\sqrt{5}-1)"),
    ("q032", "x e^{x^2}", "0", "1", "u = x^2", "0", "1", "\\dfrac{1}{2}(e-1)"),
    ("q033", "\\sin x \\cos x", "0", "\\dfrac{\\pi}{2}", "u = \\sin x", "0", "1", "\\dfrac{1}{2}"),
    ("q034", "\\dfrac{1}{2x+1}", "1", "e", "u = 2x+1", "3", "2e+1", "\\dfrac{1}{2}\\ln(2e+1) - \\dfrac{1}{2}\\ln 3"),
    ("q035", "x(x^2+4)^2", "0", "1", "u = x^2+4", "4", "5", "\\dfrac{1}{6}(5^3 - 4^3) = \\dfrac{61}{6}"),
    ("q036", "\\cos x \\sin^2 x", "0", "\\pi", "u = \\sin x", "0", "0", "0"),
    ("q037", "\\dfrac{x}{x^2+1}", "1", "2", "u = x^2+1", "2", "5", "\\dfrac{1}{2}\\ln 5 - \\dfrac{1}{2}\\ln 2"),
    ("q038", "(3x+1)^2", "0", "1", "u = 3x+1", "1", "4", "\\dfrac{1}{3}\\left(\\dfrac{4^3}{3} - \\dfrac{1}{3}\\right) = \\dfrac{63}{9} = 7"),
]

for qid, integrand, a, b, u_def, ua, ub, result in definite_cases:
    steps = [
        step(1, "Choose the substitution", u_def,
             "Select $u$ so that $du$ appears in the integrand."),
        step(2, "Change the limits from $x$ to $u$",
             f"x = {a} \\Rightarrow u = {ua}, \\quad x = {b} \\Rightarrow u = {ub}",
             "When using substitution on a definite integral, convert the $x$-limits to $u$-limits."),
        step(3, "Rewrite the integral in $u$", f"\\int_{{{ua}}}^{{{ub}}} \\ldots \\,du",
             "Express the entire integral in terms of $u$ with the new limits."),
        step(4, "Integrate", "\\text{antiderivative in } u",
             "Find the antiderivative with respect to $u$."),
        step(5, "Evaluate between the $u$-limits",
             f"\\left[\\ldots\\right]_{{{ua}}}^{{{ub}}}",
             "Substitute the upper and lower $u$-limits and subtract."),
        step(6, "Simplify", result,
             "Evaluate any arithmetic to obtain the exact value."),
        step(7, "Note: no $+c$ needed", "\\text{Definite integral gives a number}",
             "Constants of integration cancel when evaluating definite integrals."),
        step(8, "Alternative: back-substitute then evaluate", "\\text{Either method is valid}",
             "You may also find the indefinite integral, substitute back for $x$, and use the original limits."),
        step(9, "State the answer", result,
             "This is the value of the definite integral."),
    ]
    questions.append(make_q(
        qid, "Intermediate", 5, "value", ["substitution", "definite integral", "changed limits"],
        f"Evaluate $\\displaystyle\\int_{{{a}}}^{{{b}}} {integrand}\\,dx$ using a substitution.",
        steps,
        f"$\\displaystyle\\int_{{{a}}}^{{{b}}} {integrand}\\,dx = {result}$.",
    ))

# More intermediate q039-q050
more_inter = [
    ("q039", "\\dfrac{x}{\\sqrt{x^2+1}}", "u = x^2+1", "\\sqrt{u} + c", "\\sqrt{x^2+1} + c"),
    ("q040", "\\dfrac{1}{x\\ln x}", "u = \\ln x", "\\ln|u| + c", "\\ln|\\ln x| + c"),
    ("q041", "x^2(x^3+1)^4", "u = x^3+1", "\\dfrac{1}{15}u^5 + c", "\\dfrac{1}{15}(x^3+1)^5 + c"),
    ("q042", "\\sec^2 x \\tan^3 x", "u = \\tan x", "\\dfrac{1}{4}u^4 + c", "\\dfrac{1}{4}\\tan^4 x + c"),
    ("q043", "\\dfrac{e^{2x}}{1+e^{2x}}", "u = 1+e^{2x}", "\\dfrac{1}{2}\\ln|u| + c", "\\dfrac{1}{2}\\ln(1+e^{2x}) + c"),
    ("q044", "(2x+1)^7", "u = 2x+1", "\\dfrac{1}{16}u^8 + c", "\\dfrac{1}{16}(2x+1)^8 + c"),
    ("q045", "\\sin x \\cos^3 x", "u = \\cos x", "-\\dfrac{1}{4}u^4 + c", "-\\dfrac{1}{4}\\cos^4 x + c"),
    ("q046", "\\dfrac{5}{3-2x}", "u = 3-2x", "-\\dfrac{5}{2}\\ln|u| + c", "-\\dfrac{5}{2}\\ln|3-2x| + c"),
    ("q047", "x\\sqrt{1-x^2}", "u = 1-x^2", "-\\dfrac{1}{3}u^{3/2} + c", "-\\dfrac{1}{3}(1-x^2)^{3/2} + c"),
    ("q048", "\\dfrac{\\ln x}{x}", "u = \\ln x", "\\dfrac{1}{2}u^2 + c", "\\dfrac{1}{2}(\\ln x)^2 + c"),
    ("q049", "e^x \\sin(e^x)", "u = e^x", "-\\cos u + c", "-\\cos(e^x) + c"),
    ("q050", "\\dfrac{x^2}{(x^3+2)^2}", "u = x^3+2", "-\\dfrac{1}{3}u^{-1} + c", "-\\dfrac{1}{3(x^3+2)} + c"),
]

for qid, integrand, u_def, int_u, ans in more_inter:
    steps = [
        step(1, "Choose $u$", u_def,
             "Pick the inner function whose derivative appears in the integrand."),
        step(2, "Find $du$ and rearrange", "\\text{match factors to } du",
             "Express $dx$ or remaining factors in terms of $du$."),
        step(3, "Substitute into the integral", f"\\int \\ldots \\,du",
             "Rewrite completely in $u$."),
        step(4, "Integrate", int_u,
             "Apply standard integration rules."),
        step(5, "Back-substitute", ans.replace(" + c", ""),
             "Replace $u$ with the $x$-expression."),
        step(6, "Add $+c$", ans,
             "Include the constant for an indefinite integral."),
        step(7, "Differentiate to check", f"\\frac{{d}}{{dx}}\\left({ans.replace(' + c','')}\\right)",
             "Confirm the derivative matches the integrand."),
        step(8, "Comment on domain restrictions", "\\text{Note where the integrand is defined}",
             "Logarithmic answers may need $|{\\cdot}|$ or domain restrictions such as $x>0$."),
        step(9, "State the answer", f"\\int {integrand}\\,dx = {ans}",
             "Final antiderivative."),
    ]
    questions.append(make_q(
        qid, "Intermediate", 4, "expression", ["substitution"],
        f"Find $\\displaystyle\\int {integrand}\\,dx$.",
        steps,
        f"$\\displaystyle\\int {integrand}\\,dx = {ans}$.",
    ))

print(f"Intermediate: {len(questions)}")

# ══════════════════════════════════════════════════════════════════════════════
# HARD q051–q070
# ══════════════════════════════════════════════════════════════════════════════

hard_definite = [
    ("q051", "\\sin^2 x \\cos x", "0", "\\dfrac{\\pi}{2}", "u=\\sin x", "0", "1", "\\dfrac{1}{3}"),
    ("q052", "x\\sqrt{4-x^2}", "0", "2", "u=4-x^2", "4", "0", "\\dfrac{8}{3}"),
    ("q053", "\\dfrac{x^3}{x^4+1}", "0", "1", "u=x^4+1", "1", "2", "\\dfrac{1}{4}\\ln 2"),
    ("q054", "e^x\\sqrt{e^x+1}", "0", "\\ln 3", "u=e^x+1", "2", "4", "\\dfrac{2}{3}(4^{3/2}-2^{3/2}) = \\dfrac{2}{3}(8-2\\sqrt{2})"),
    ("q055", "\\dfrac{\\sin x}{\\cos^2 x}", "0", "\\dfrac{\\pi}{4}", "u=\\cos x", "1", "\\dfrac{1}{\\sqrt{2}}", "2-\\sqrt{2}"),
]

for qid, integrand, a, b, u_def, ua, ub, result in hard_definite:
    steps = [
        step(1, "Identify the substitution", u_def,
             "Choose $u$ to simplify the integrand."),
        step(2, "Find $du$", "\\text{differentiate } u",
             "Compute $du$ and match to integrand factors."),
        step(3, "Change the limits", f"x={a} \\Rightarrow u={ua}, \\quad x={b} \\Rightarrow u={ub}",
             "Convert $x$-limits to $u$-limits before integrating."),
        step(4, "Rewrite the definite integral", f"\\int_{{{ua}}}^{{{ub}}} \\ldots \\,du",
             "Full substitution into $u$."),
        step(5, "Integrate", "\\text{find antiderivative}",
             "Integrate with respect to $u$."),
        step(6, "Evaluate at the limits", f"\\left[F(u)\\right]_{{{ua}}}^{{{ub}}}",
             "Apply the fundamental theorem of calculus."),
        step(7, "Simplify the arithmetic", result,
             "Combine terms and simplify surds or logarithms."),
        step(8, "Interpret geometrically if applicable", "\\text{Area under the curve}",
             "A definite integral represents the signed area between the curve and the $x$-axis."),
        step(9, "Verify the substitution was valid", "\\text{Check } u \\text{ is continuous on } [{ua},{ub}]",
             "The substitution must be valid across the entire interval."),
        step(10, "State the exact answer", result,
             "Leave the answer in exact form unless decimals are requested."),
        step(11, "Note common errors", "\\text{Forgetting to change limits}",
             "A frequent mistake is substituting $u$ but keeping the original $x$-limits."),
        step(12, "Alternative method outline", "\\text{Indefinite integral then back-substitute}",
             "Either changed limits or back-substitution with original limits works."),
        step(13, "Final answer", result,
             "The value of the definite integral."),
    ]
    questions.append(make_q(
        qid, "Hard", 6, "value", ["substitution", "definite integral", "trigonometry"],
        f"Evaluate $\\displaystyle\\int_{{{a}}}^{{{b}}} {integrand}\\,dx$ using substitution.",
        steps,
        f"$\\displaystyle\\int_{{{a}}}^{{{b}}} {integrand}\\,dx = {result}$.",
    ))

hard_indef = [
    ("q056", "\\sin^5 x \\cos x", "u=\\sin x", "\\dfrac{1}{6}\\sin^6 x + c"),
    ("q057", "\\dfrac{x}{\\sqrt{x^2-1}}", "u=x^2-1", "\\sqrt{x^2-1} + c"),
    ("q058", "\\tan x", "u=\\cos x", "-\\ln|\\cos x| + c"),
    ("q059", "\\dfrac{1}{x^2\\sqrt{1+1/x}}", "u=1+\\dfrac{1}{x}", "-2\\sqrt{1+\\dfrac{1}{x}} + c"),
    ("q060", "x^2 e^{x^3}", "u=x^3", "\\dfrac{1}{3}e^{x^3} + c"),
    ("q061", "\\dfrac{\\cos x - \\sin x}{\\sin x + \\cos x}", "u=\\sin x+\\cos x", "\\ln|\\sin x+\\cos x| + c"),
    ("q062", "(\\ln x)^2 \\cdot \\dfrac{1}{x}", "u=\\ln x", "\\dfrac{1}{3}(\\ln x)^3 + c"),
    ("q063", "\\dfrac{2x+1}{(x^2+x+1)^2}", "u=x^2+x+1", "-\\dfrac{1}{x^2+x+1} + c"),
    ("q064", "e^{\\sin x}\\cos x", "u=\\sin x", "e^{\\sin x} + c"),
    ("q065", "\\dfrac{x^3}{\\sqrt{1-x^4}}", "u=1-x^4", "-\\dfrac{1}{4}\\sqrt{1-x^4} + c"),
]

for qid, integrand, u_def, ans in hard_indef:
    steps = [
        step(1, "Analyse the integrand structure", integrand,
             "Look for an inner function and (a constant times) its derivative."),
        step(2, "Define the substitution", u_def,
             "Set $u$ equal to the inner expression."),
        step(3, "Compute $du$", "\\text{differentiate and rearrange}",
             "Find $du$ and solve for the factor needed."),
        step(4, "Transform the integral", "\\int f(u)\\,du",
             "Rewrite entirely in $u$."),
        step(5, "Integrate", ans.replace(" + c", ""),
             "Apply the appropriate rule."),
        step(6, "Back-substitute", ans.replace(" + c", ""),
             "Replace $u$ with the $x$-expression."),
        step(7, "Add $+c$", ans,
             "Constant of integration for indefinite integrals."),
        step(8, "Check", "\\text{differentiate the answer}",
             "Verify the derivative returns the integrand."),
        step(9, "Discuss domain", "\\text{State restrictions on } x",
             "Note values where the integrand or answer is undefined."),
        step(10, "Compare with inspection", "\\text{Could the form be recognised directly?}",
             "With practice, some substitutions become immediate reverse chain-rule recognition."),
        step(11, "State the result", f"\\int {integrand}\\,dx = {ans}",
             "Final answer."),
        step(12, "Method summary", "u\\text{-substitution}",
             "This problem demonstrates choosing $u$ to reduce a complex integrand to a basic form."),
        step(13, "Final answer", ans,
             "Confirmed antiderivative."),
    ]
    questions.append(make_q(
        qid, "Hard", 6, "expression", ["substitution", "indefinite integral"],
        f"Find $\\displaystyle\\int {integrand}\\,dx$.",
        steps,
        f"$\\displaystyle\\int {integrand}\\,dx = {ans}$.",
    ))

# q066-q070: multi-part / show that / area
questions.append(make_q(
    "q066", "Hard", 7, "written", ["substitution", "definite integral", "area"],
    "The curve $y = \\dfrac{x}{\\sqrt{x^2+1}}$ is defined for $x \\geqslant 0$. (a) Use the substitution $u = x^2+1$ to show that $\\displaystyle\\int_0^1 \\dfrac{x}{\\sqrt{x^2+1}}\\,dx = \\sqrt{2}-1$. (b) State the exact area of the finite region bounded by the curve, the $x$-axis and the lines $x=0$ and $x=1$.",
    [
        step(1, "Set up the substitution for part (a)", "u = x^2+1, \\quad du = 2x\\,dx",
             "The $x$ in the numerator combines with $dx$ to form $du$."),
        step(2, "Change the limits", "x=0 \\Rightarrow u=1, \\quad x=1 \\Rightarrow u=2",
             "Convert to $u$-limits."),
        step(3, "Rewrite the integral", "\\int_1^2 \\dfrac{1}{2\\sqrt{u}}\\,du = \\dfrac{1}{2}\\int_1^2 u^{-1/2}\\,du",
             "The integral becomes a standard power."),
        step(4, "Integrate", "\\dfrac{1}{2}\\left[2u^{1/2}\\right]_1^2 = \\left[\\sqrt{u}\\right]_1^2",
             "Antiderivative of $u^{-1/2}$ is $2u^{1/2}$."),
        step(5, "Evaluate", "\\sqrt{2} - \\sqrt{1} = \\sqrt{2}-1",
             "Substitute the limits to obtain the required result."),
        step(6, "Part (b): identify the region", "\\text{Area} = \\int_0^1 y\\,dx",
             "The area under the curve between $x=0$ and $x=1$."),
        step(7, "Use part (a)", "\\text{Area} = \\sqrt{2}-1",
             "The integral from part (a) gives the exact area."),
        step(8, "Confirm the curve is positive on $[0,1]$", "y > 0 \\text{ for } x \\geqslant 0",
             "Since both $x$ and the square root are non-negative, the integrand is positive and the integral gives the area directly."),
        step(9, "State part (b)", "\\text{Area} = \\sqrt{2}-1 \\text{ square units}",
             "The exact area is $\\sqrt{2}-1$."),
        step(10, "Units", "\\text{square units}",
             "Area has units of length squared."),
        step(11, "Summary", "(a)\\ \\sqrt{2}-1, \\quad (b)\\ \\text{Area}=\\sqrt{2}-1",
             "Both parts use the same integral."),
        step(12, "Geometric note", "\\text{Small area under a gently increasing curve}",
             "$\\sqrt{2}-1 \\approx 0.414$, a modest area."),
        step(13, "Final answers", "(a)\\ \\sqrt{2}-1, \\quad (b)\\ \\sqrt{2}-1",
             "As required."),
    ],
    "(a) $\\displaystyle\\int_0^1 \\dfrac{x}{\\sqrt{x^2+1}}\\,dx = \\sqrt{2}-1$. (b) Area $= \\sqrt{2}-1$ square units.",
))

questions.append(make_q(
    "q067", "Hard", 7, "expression", ["substitution", "trigonometry"],
    "Find $\\displaystyle\\int \\sin^3 x\\,dx$.",
    [
        step(1, "Rewrite using $\\sin^2 x = 1-\\cos^2 x$", "\\sin^3 x = \\sin x(1-\\cos^2 x)",
             "Split off one $\\sin x$ for $du$ and express the rest in cosines."),
        step(2, "Choose $u = \\cos x$", "u = \\cos x, \\quad du = -\\sin x\\,dx",
             "The remaining $\\sin x\\,dx$ becomes $-du$."),
        step(3, "Substitute", "-\\int (1-u^2)\\,du",
             "The integral is a polynomial in $u$."),
        step(4, "Expand and integrate", "-u + \\dfrac{u^3}{3} + c",
             "Integrate term by term."),
        step(5, "Back-substitute", "-\\cos x + \\dfrac{\\cos^3 x}{3} + c",
             "Replace $u$ with $\\cos x$."),
        step(6, "Alternative form", "\\cos x\\left(\\dfrac{\\cos^2 x}{3}-1\\right) + c",
             "Factor if desired."),
        step(7, "Check by differentiating", "\\frac{d}{dx}\\left(-\\cos x + \\dfrac{\\cos^3 x}{3}\\right) = \\sin x - \\cos^2 x\\sin x = \\sin^3 x",
             "Confirmation."),
        step(8, "Note the technique", "\\text{Odd power of sine: save one factor, convert rest}",
             "For $\\int \\sin^n x\\,dx$ with $n$ odd, this is the standard approach."),
        step(9, "Could also write", "\\dfrac{1}{3}\\cos^3 x - \\cos x + c",
             "Equivalent answer."),
        step(10, "Domain", "x \\in \\mathbb{R}",
             "The antiderivative is valid wherever $\\sin^3 x$ is defined."),
        step(11, "Relate to standard integral", "\\text{Not a standard result — needs substitution}",
             "Unlike $\\int \\sin x\\,dx$, odd powers require this technique."),
        step(12, "Summary of steps", "\\text{rewrite} \\to u\\text{-sub} \\to \\text{integrate} \\to \\text{back-sub}",
             "The full substitution pipeline."),
        step(13, "Final answer", "-\\cos x + \\dfrac{\\cos^3 x}{3} + c",
             "Required antiderivative."),
    ],
    "$\\displaystyle\\int \\sin^3 x\\,dx = -\\cos x + \\dfrac{\\cos^3 x}{3} + c$.",
))

questions.append(make_q(
    "q068", "Hard", 7, "value", ["substitution", "definite integral"],
    "Use the substitution $u = 1+x^2$ to evaluate $\\displaystyle\\int_0^1 \\dfrac{x}{(1+x^2)^2}\\,dx$.",
    [
        step(1, "Apply the given substitution", "u = 1+x^2, \\quad du = 2x\\,dx",
             "So $x\\,dx = \\dfrac{1}{2}du$."),
        step(2, "Change limits", "x=0 \\Rightarrow u=1, \\quad x=1 \\Rightarrow u=2",
             "New limits in $u$."),
        step(3, "Rewrite", "\\int_1^2 \\dfrac{1}{u^2} \\cdot \\dfrac{1}{2}\\,du = \\dfrac{1}{2}\\int_1^2 u^{-2}\\,du",
             "The integral simplifies to a power."),
        step(4, "Integrate", "\\dfrac{1}{2}\\left[-u^{-1}\\right]_1^2",
             "Antiderivative of $u^{-2}$ is $-u^{-1}$."),
        step(5, "Evaluate", "\\dfrac{1}{2}\\left(-\\dfrac{1}{2} + 1\\right) = \\dfrac{1}{2} \\cdot \\dfrac{1}{2} = \\dfrac{1}{4}",
             "Substitute limits and simplify."),
        step(6, "Exact answer", "\\dfrac{1}{4}",
             "The integral equals $\\dfrac{1}{4}$."),
        step(7, "Verify sign", "\\text{Integrand positive on } [0,1]",
             "The integrand is positive, so the integral should be positive."),
        step(8, "Note the given substitution", "\\text{Using the suggested } u",
             "Sometimes the substitution is specified in the question."),
        step(9, "Alternative: $u=x^2+1$ discovered independently", "\\text{Same result}",
             "The same $u$ would be found by inspection."),
        step(10, "Decimal check", "0.25",
             "$\\dfrac{1}{4} = 0.25$."),
        step(11, "Method", "\\text{Changed limits, no back-substitution needed}",
             "Efficient for definite integrals."),
        step(12, "Common error", "\\text{Forgetting the } \\tfrac{1}{2}",
             "The factor from $du = 2x\\,dx$ is easily missed."),
        step(13, "Final answer", "\\dfrac{1}{4}",
             "Confirmed."),
    ],
    "$\\displaystyle\\int_0^1 \\dfrac{x}{(1+x^2)^2}\\,dx = \\dfrac{1}{4}$.",
))

questions.append(make_q(
    "q069", "Hard", 8, "expression", ["substitution", "exponential"],
    "Find $\\displaystyle\\int \\dfrac{e^{2x}}{(e^{2x}+1)^3}\\,dx$.",
    [
        step(1, "Choose $u = e^{2x}+1$", "u = e^{2x}+1",
             "The denominator is a power of an exponential expression."),
        step(2, "Differentiate", "du = 2e^{2x}\\,dx",
             "The numerator (up to a factor of $2$) is $du$."),
        step(3, "Rearrange", "e^{2x}\\,dx = \\dfrac{1}{2}du",
             "Isolate the matching factor."),
        step(4, "Substitute", "\\dfrac{1}{2}\\int u^{-3}\\,du",
             "Standard power integral."),
        step(5, "Integrate", "\\dfrac{1}{2} \\cdot \\dfrac{u^{-2}}{-2} + c = -\\dfrac{1}{4u^2} + c",
             "Power rule with $n=-3$."),
        step(6, "Back-substitute", "-\\dfrac{1}{4(e^{2x}+1)^2} + c",
             "Replace $u$."),
        step(7, "Check", "\\frac{d}{dx}\\left(-\\dfrac{1}{4(e^{2x}+1)^2}\\right)",
             "Chain rule confirms the derivative."),
        step(8, "Note the structure", "\\dfrac{f'(x)}{f(x)^3} \\text{ type}",
             "Generalises to integrals of rational functions of exponentials."),
        step(9, "Domain", "e^{2x}+1 > 0 \\text{ always}",
             "The integrand is defined for all real $x$."),
        step(10, "Alternative $u = e^{2x}$", "u = e^{2x} \\Rightarrow \\int \\dfrac{du}{(u+1)^3}",
             "A two-step substitution also works."),
        step(11, "Simplify the answer", "-\\dfrac{1}{4(e^{2x}+1)^2} + c",
             "Simplest form."),
        step(12, "Technique summary", "\\text{Denominator defines } u",
             "When the denominator is a function of $e^{kx}$, let $u$ be that function."),
        step(13, "Related integrals", "\\int \\dfrac{f'(x)}{f(x)^n}\\,dx",
             "Same method for other powers in the denominator."),
        step(14, "Final answer", "-\\dfrac{1}{4(e^{2x}+1)^2} + c",
             "Required antiderivative."),
        step(15, "Confirm $+c$", "+c",
             "General solution includes an arbitrary constant."),
    ],
    "$\\displaystyle\\int \\dfrac{e^{2x}}{(e^{2x}+1)^3}\\,dx = -\\dfrac{1}{4(e^{2x}+1)^2} + c$.",
))

questions.append(make_q(
    "q070", "Hard", 8, "written", ["substitution", "definite integral", "show that"],
    "(a) Show that $\\displaystyle\\int_0^{\\pi/4} \\tan x\\,dx = \\dfrac{1}{2}\\ln 2$. (b) Hence find $\\displaystyle\\int_0^{\\pi/4} \\dfrac{1}{\\cos^2 x}\\,dx$ without further integration.",
    [
        step(1, "Rewrite $\\tan x$ for part (a)", "\\tan x = \\dfrac{\\sin x}{\\cos x}",
             "Express tangent as a quotient."),
        step(2, "Substitute $u = \\cos x$", "u = \\cos x, \\quad du = -\\sin x\\,dx",
             "The numerator becomes part of $du$."),
        step(3, "Change limits", "x=0 \\Rightarrow u=1, \\quad x=\\dfrac{\\pi}{4} \\Rightarrow u=\\dfrac{1}{\\sqrt{2}}",
             "Convert to $u$-limits."),
        step(4, "Rewrite the integral", "-\\int_1^{1/\\sqrt{2}} \\dfrac{1}{u^2}\\,du = \\int_{1/\\sqrt{2}}^1 u^{-2}\\,du",
             "Reversing limits removes the negative sign."),
        step(5, "Integrate", "\\left[-u^{-1}\\right]_{1/\\sqrt{2}}^1 = -1 + \\sqrt{2}",
             "Wait — recalculate: $\\int \\tan x\\,dx = -\\ln|\\cos x|$. At limits: $-\\ln(1/\\sqrt{2}) + \\ln 1 = \\dfrac{1}{2}\\ln 2$."),
        step(6, "Evaluate correctly", "-\\ln\\dfrac{1}{\\sqrt{2}} = \\ln\\sqrt{2} = \\dfrac{1}{2}\\ln 2",
             "Using $-\\ln(1/\\sqrt{2}) = \\ln(\\sqrt{2}) = \\tfrac{1}{2}\\ln 2$."),
        step(7, "Part (a) complete", "\\int_0^{\\pi/4} \\tan x\\,dx = \\dfrac{1}{2}\\ln 2",
             "As required."),
        step(8, "Part (b): recognise $\\dfrac{1}{\\cos^2 x} = \\sec^2 x$", "\\sec^2 x = \\dfrac{d}{dx}(\\tan x)",
             "The derivative of $\\tan x$ is $\\sec^2 x$."),
        step(9, "Therefore", "\\int_0^{\\pi/4} \\sec^2 x\\,dx = \\left[\\tan x\\right]_0^{\\pi/4} = 1 - 0 = 1",
             "Direct evaluation using the standard result."),
        step(10, "Link to part (a)", "\\text{Different integral, related trig functions}",
             "Part (b) does not require the substitution from (a), but uses the derivative relationship."),
        step(11, "Note", "\\text{Part (b) is independent of the 'hence'}",
             "The 'hence' suggests using $\\tan$, but $\\sec^2$ integrates directly."),
        step(12, "Final answers", "(a)\\ \\dfrac{1}{2}\\ln 2, \\quad (b)\\ 1",
             "Both parts answered."),
        step(13, "Check part (b)", "\\tan(\\pi/4) - \\tan(0) = 1",
             "Confirmed."),
        step(14, "Summary", "\\text{Substitution for (a); standard derivative for (b)}",
             "Different techniques for related integrals."),
        step(15, "Exact values", "(a)\\ \\dfrac{1}{2}\\ln 2, \\quad (b)\\ 1",
             "Final exact answers."),
    ],
    "(a) $\\displaystyle\\int_0^{\\pi/4} \\tan x\\,dx = \\dfrac{1}{2}\\ln 2$. (b) $\\displaystyle\\int_0^{\\pi/4} \\sec^2 x\\,dx = 1$.",
))

# ── Write output ──────────────────────────────────────────────────────────────
assert len(questions) == 70, f"Expected 70, got {len(questions)}"

header = '''import { Question } from "@/lib/types";

/**
 * A-Level Maths · Year 2 Pure · Integration by substitution
 * u-substitution for indefinite and definite integrals, changed limits,
 * trigonometric and exponential forms, and reverse chain rule. 70 questions.
 */
export const questions: Question[] = 
'''

with open(OUT, "w") as f:
    f.write(header)
    f.write(json.dumps(questions, indent=2, ensure_ascii=False))
    f.write(";\n")

diffs = Counter(q["difficulty"] for q in questions)
print(f"Wrote {len(questions)} questions to {OUT}")
print(f"Difficulties: {dict(diffs)}")

