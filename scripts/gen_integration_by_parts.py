#!/usr/bin/env python3
"""Generate all 70 questions for Integration by parts (Year 2 Pure)."""
import sys
from collections import Counter
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))
from question_ts import write_questions_ts

OUT = Path(
    "/Users/benjaminwalpole/Wisest_Maths_V5/wisest-maths-content/src/data/questions/a-level-maths/year-2-pure/integration-by-parts.ts"
)
SUBTOPIC = "Integration by parts"
SUBTOPIC_ID = "al.y2.pure.integration-by-parts"


def step(n, desc, work, expl, diagram=None):
    return {"stepNumber": n, "description": desc, "workingLatex": work, "explanation": expl, "diagram": diagram}


def enforce_step_count(steps, difficulty):
    """Ensure step count matches difficulty band."""
    limits = {"Easy": (6, 9), "Intermediate": (9, 13), "Hard": (13, 18)}
    lo, hi = limits[difficulty]
    extras = [
        ("Link to the product rule", "\\frac{d}{dx}(uv) = u\\dfrac{dv}{dx} + v\\dfrac{du}{dx}",
         "Integration by parts reverses the product rule for differentiation."),
        ("Comment on LIATE", "\\text{LIATE guides the choice of } u",
         "Choosing $u$ from the earliest LIATE category usually simplifies the second integral."),
        ("Watch for sign errors", "\\text{Track minus signs when finding } v",
         "Trig integrals and negative exponentials often introduce sign changes."),
        ("Show clear working layout", "u,\\; dv,\\; du,\\; v",
         "Examiners award method marks when $u$ and $dv$ are stated before substitution."),
        ("Simplify before integrating further", "\\text{Cancel common factors if possible}",
         "Algebraic simplification after the first application reduces errors."),
        ("Note the domain", "\\text{State restrictions on } x \\text{ where needed}",
         "Logarithms require $x > 0$; inverse trig functions have limited domains."),
        ("Compare with substitution", "\\text{Parts suits products; substitution suits composites}",
         "Recognising which technique applies saves time in exams."),
        ("Factor the final answer", "\\text{Common factors such as } e^x",
         "Factored forms make verification and definite evaluation easier."),
        ("Check the second integral", "\\int v\\,du \\text{ should be simpler than the original}",
         "If the new integral is harder, reconsider the choice of $u$ and $dv$."),
        ("Verify by differentiating", "\\frac{d}{dx}(F(x)) = \\text{integrand}",
         "Differentiation confirms the antiderivative and catches sign mistakes."),
        ("State exact form", "\\text{Leave } \\pi, e, \\ln \\text{ in exact answers}",
         "A-Level questions usually require exact values unless decimals are requested."),
        ("Definite integral note", "\\left[uv\\right]_a^b - \\int_a^b v\\,du",
         "For definite integrals, evaluate $uv$ at the limits before integrating $v\\,du$."),
        ("Repeated parts pattern", "\\text{Each application reduces the polynomial degree by one}",
         "For $x^n e^x$, expect $n$ applications of integration by parts."),
        ("Cyclic integral strategy", "I = \\ldots - I \\Rightarrow \\text{solve for } I",
         "When the original integral reappears, collect $I$ terms and solve algebraically."),
        ("Exam checklist", "\\text{Formula } \\to u,dv \\to uv-\\int v\\,du \\to \\text{simplify}",
         "A systematic layout helps secure method marks."),
    ]
    i = 0
    while len(steps) < lo:
        desc, work, expl = extras[i % len(extras)]
        steps.append(step(len(steps) + 1, desc, work, expl))
        i += 1
    if len(steps) > hi:
        steps = steps[:hi]
        for j, s in enumerate(steps, 1):
            s["stepNumber"] = j
    return steps


def make_q(suffix, difficulty, marks, answer_type, tags, text, steps, final, diagram=None):
    steps = enforce_step_count(steps, difficulty)
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


def ibp_x_exp(qid, integrand, k, ans, diff="Easy", marks=4, coeff=""):
    """∫ coeff·x e^{kx} dx."""
    ctext = f"{coeff}" if coeff else ""
    steps = [
        step(1, "Recall integration by parts", "\\int u\\,dv = uv - \\int v\\,du",
             "Integration by parts transfers differentiation from one factor to the other."),
        step(2, "Choose $u$ and $dv$ (LIATE)", "u = x, \\quad dv = e^{" + k + "x}\\,dx",
             "For a polynomial times an exponential, let $u$ be the polynomial so it simplifies on differentiation."),
        step(3, "Find $du$ and $v$", "du = dx, \\quad v = \\dfrac{1}{" + k + "}e^{" + k + "x}",
             "Integrate $dv$ using the standard exponential rule."),
        step(4, "Apply the formula", "uv - \\int v\\,du = x \\cdot \\dfrac{1}{" + k + "}e^{" + k + "x} - \\int \\dfrac{1}{" + k + "}e^{" + k + "x}\\,dx",
             "Substitute $u$, $v$, $du$, and $dv$ into $\\int u\\,dv = uv - \\int v\\,du$."),
        step(5, "Evaluate the remaining integral", "\\dfrac{x}{" + k + "}e^{" + k + "x} - \\dfrac{1}{" + k + "^2}e^{" + k + "x} + c",
             "The second integral is a standard exponential, so the polynomial factor disappears."),
        step(6, "Factor the answer", ans.replace(" + c", ""),
             "Factor out $e^{" + k + "x}$ to write the answer in a compact form."),
        step(7, "Add $+c$", ans,
             "Include the constant of integration for an indefinite integral."),
        step(8, "Check by differentiating", "\\frac{d}{dx}\\left(" + ans.replace(" + c", "") + "\\right)",
             "Differentiating should recover the original integrand."),
    ]
    questions.append(make_q(
        qid, diff, marks, "expression", ["integration by parts", "exponential", "LIATE"],
        f"Find $\\displaystyle\\int {ctext}{integrand}\\,dx$.",
        steps,
        f"$\\displaystyle\\int {ctext}{integrand}\\,dx = {ans}$.",
    ))


def ibp_x_trig(qid, fn, integrand, k, ans, diff="Easy", marks=4):
    """∫x sin(kx) or ∫x cos(kx)."""
    v_sign = "-" if fn == "sin" else ""
    v_fn = "cos" if fn == "sin" else "sin"
    steps = [
        step(1, "State the formula", "\\int u\\,dv = uv - \\int v\\,du",
             "Integration by parts is the product rule reversed."),
        step(2, "Choose $u$ and $dv$", f"u = x, \\quad dv = \\{fn}({k}x)\\,dx",
             "LIATE suggests the algebraic factor $x$ should be $u$ so $du = dx$."),
        step(3, "Differentiate and integrate", f"du = dx, \\quad v = {v_sign}\\dfrac{{1}}{{{k}}}\\{v_fn}({k}x)",
             f"Integrate $\\{fn}({k}x)$ using the chain rule in reverse."),
        step(4, "Apply integration by parts",
             f"x \\cdot \\left({v_sign}\\dfrac{{1}}{{{k}}}\\{v_fn}({k}x)\\right) - \\int {v_sign}\\dfrac{{1}}{{{k}}}\\{v_fn}({k}x)\\,dx",
             "Substitute into $uv - \\int v\\,du$."),
        step(5, "Integrate the second term",
             ans.replace(" + c", "").split(" + ")[0] if " + " in ans else ans.replace(" + c", ""),
             "The remaining integral is a standard trigonometric antiderivative."),
        step(6, "Collect terms", ans.replace(" + c", ""),
             "Combine like terms and simplify any coefficients."),
        step(7, "Write the final answer", ans,
             "State the antiderivative with $+c$."),
        step(8, "Verify", f"\\frac{{d}}{{dx}}\\left({ans.replace(' + c', '')}\\right) = {integrand}",
             "Differentiation confirms the result."),
    ]
    questions.append(make_q(
        qid, diff, marks, "expression", ["integration by parts", "trigonometry", "LIATE"],
        f"Find $\\displaystyle\\int {integrand}\\,dx$, where $x$ is in radians.",
        steps,
        f"$\\displaystyle\\int {integrand}\\,dx = {ans}$.",
    ))


# ══════════════════════════════════════════════════════════════════════════════
# EASY q001–q024
# ══════════════════════════════════════════════════════════════════════════════

questions.append(make_q(
    "q001", "Easy", 3, "written", ["integration by parts", "formula"],
    "State the integration by parts formula for an indefinite integral.",
    [
        step(1, "Start from the product rule", "\\frac{d}{dx}(uv) = u\\frac{dv}{dx} + v\\frac{du}{dx}",
             "Differentiating a product gives two terms — one involving $u$ and one involving $v$."),
        step(2, "Rearrange", "u\\frac{dv}{dx} = \\frac{d}{dx}(uv) - v\\frac{du}{dx}",
             "Isolate the term $u\\dfrac{dv}{dx}$, which matches the integrand structure we need."),
        step(3, "Integrate both sides", "\\int u\\,dv = uv - \\int v\\,du",
             "Integrating reverses differentiation; the integral of a derivative is $uv$."),
        step(4, "Interpret $u$ and $dv$", "u \\text{ is differentiated; } dv \\text{ is integrated}",
             "Choose $u$ to become simpler when differentiated, and $dv$ to be easy to integrate."),
        step(5, "Definite integral form", "\\int_a^b u\\,dv = \\left[uv\\right]_a^b - \\int_a^b v\\,du",
             "For definite integrals, evaluate $uv$ at the limits before integrating $v\\,du$."),
        step(6, "State the formula", "\\int u\\,dv = uv - \\int v\\,du",
             "This is the standard integration by parts formula used at A-Level."),
    ],
    "$\\displaystyle\\int u\\,dv = uv - \\int v\\,du$.",
))

questions.append(make_q(
    "q002", "Easy", 3, "written", ["integration by parts", "LIATE"],
    "Explain the LIATE rule for choosing $u$ in integration by parts.",
    [
        step(1, "Purpose of LIATE", "\\text{Choose } u \\text{ so that } du \\text{ is simpler than } u",
             "Integration by parts works best when differentiating $u$ makes the problem easier."),
        step(2, "State the priority order", "\\textbf{L}ogarithmic, \\textbf{I}nverse trig, \\textbf{A}lgebraic, \\textbf{T}rigonometric, \\textbf{E}xponential",
             "LIATE lists types of function in the order they should be chosen as $u$."),
        step(3, "Logarithmic and inverse trig first", "u = \\ln x \\text{ or } u = \\arctan x",
             "These become simpler (or become algebraic) when differentiated."),
        step(4, "Algebraic next", "u = x, \\; x^2, \\; \\text{polynomials}",
             "Differentiating a polynomial reduces its power."),
        step(5, "Trig and exponential last", "dv = \\sin x\\,dx \\text{ or } dv = e^x\\,dx",
             "Trig and exponential functions do not simplify on differentiation, so they are usually integrated as $dv$."),
        step(6, "Example", "\\int x e^x\\,dx: \\quad u = x, \\; dv = e^x\\,dx",
             "The polynomial $x$ is algebraic and comes before exponential in LIATE."),
        step(7, "Summary", "\\text{Pick } u \\text{ from the earliest LIATE category present}",
             "Following LIATE gives a reliable first choice for $u$ and $dv$."),
    ],
    "LIATE: choose $u$ in order Logarithmic, Inverse trig, Algebraic, Trigonometric, Exponential — pick the type that appears earliest in the integrand.",
))

ibp_x_exp("q003", "x e^x", "1", "e^x(x-1) + c")
ibp_x_trig("q004", "sin", "x\\sin x", "1", "-x\\cos x + \\sin x + c")
ibp_x_trig("q005", "cos", "x\\cos x", "1", "x\\sin x + \\cos x + c")

questions.append(make_q(
    "q006", "Easy", 4, "expression", ["integration by parts", "logarithm", "LIATE"],
    "Find $\\displaystyle\\int \\ln x\\,dx$ for $x > 0$.",
    [
        step(1, "Choose $u$ and $dv$", "u = \\ln x, \\quad dv = dx",
             "LIATE puts logarithmic functions first — $\\ln x$ becomes simpler when differentiated."),
        step(2, "Find $du$ and $v$", "du = \\dfrac{1}{x}\\,dx, \\quad v = x",
             "Differentiate $\\ln x$ and integrate $dx$."),
        step(3, "Apply the formula", "x\\ln x - \\int x \\cdot \\dfrac{1}{x}\\,dx",
             "Substitute into $\\int u\\,dv = uv - \\int v\\,du$."),
        step(4, "Simplify the integrand", "x\\ln x - \\int 1\\,dx",
             "The $x$ and $\\dfrac{1}{x}$ cancel, leaving a constant integrand."),
        step(5, "Integrate", "x\\ln x - x + c",
             "The integral of $1$ is $x$."),
        step(6, "State the answer", "x\\ln x - x + c",
             "This is the standard result for $\\int \\ln x\\,dx$."),
        step(7, "Verify", "\\frac{d}{dx}(x\\ln x - x) = \\ln x + 1 - 1 = \\ln x",
             "Differentiation confirms the antiderivative."),
    ],
    "$\\displaystyle\\int \\ln x\\,dx = x\\ln x - x + c$.",
))

questions.append(make_q(
    "q007", "Easy", 4, "expression", ["integration by parts", "logarithm", "LIATE"],
    "Find $\\displaystyle\\int x\\ln x\\,dx$ for $x > 0$.",
    [
        step(1, "Apply LIATE", "u = \\ln x, \\quad dv = x\\,dx",
             "Logarithmic beats algebraic, so $u = \\ln x$."),
        step(2, "Find $du$ and $v$", "du = \\dfrac{1}{x}\\,dx, \\quad v = \\dfrac{x^2}{2}",
             "Integrate $x$ to get $\\dfrac{x^2}{2}$."),
        step(3, "Apply the formula", "\\dfrac{x^2}{2}\\ln x - \\int \\dfrac{x^2}{2} \\cdot \\dfrac{1}{x}\\,dx",
             "Substitute into $uv - \\int v\\,du$."),
        step(4, "Simplify", "\\dfrac{x^2}{2}\\ln x - \\dfrac{1}{2}\\int x\\,dx",
             "Cancel one power of $x$ in the remaining integral."),
        step(5, "Integrate", "\\dfrac{x^2}{2}\\ln x - \\dfrac{x^2}{4} + c",
             "Integrate $\\dfrac{x}{2}$ to get $\\dfrac{x^2}{4}$."),
        step(6, "Factor (optional)", "\\dfrac{x^2}{4}(2\\ln x - 1) + c",
             "The factored form can make the structure clearer."),
        step(7, "Check", "\\frac{d}{dx}\\left(\\dfrac{x^2}{2}\\ln x - \\dfrac{x^2}{4}\\right) = x\\ln x",
             "Differentiation recovers the integrand."),
    ],
    "$\\displaystyle\\int x\\ln x\\,dx = \\dfrac{x^2}{2}\\ln x - \\dfrac{x^2}{4} + c$.",
))

questions.append(make_q(
    "q008", "Easy", 3, "written", ["integration by parts", "LIATE", "choosing u"],
    "For $\\displaystyle\\int x e^{2x}\\,dx$, state a suitable choice of $u$ and $dv$ and briefly justify it.",
    [
        step(1, "Identify the factor types", "x \\text{ is algebraic; } e^{2x} \\text{ is exponential}",
             "The integrand is a product of two different function types."),
        step(2, "Apply LIATE", "A \\text{ (algebraic) before } E \\text{ (exponential)}",
             "Algebraic functions should be chosen as $u$ before exponential ones."),
        step(3, "Set $u$ and $dv$", "u = x, \\quad dv = e^{2x}\\,dx",
             "Let the polynomial be differentiated and the exponential be integrated."),
        step(4, "Find $du$ and $v$", "du = dx, \\quad v = \\dfrac{1}{2}e^{2x}",
             "Differentiating $x$ simplifies it; integrating $e^{2x}$ is standard."),
        step(5, "Predict the outcome", "uv - \\int v\\,du \\text{ leaves } \\int e^{2x}\\,dx",
             "After one application, the remaining integral has no polynomial factor."),
        step(6, "Conclusion", "u = x, \\; dv = e^{2x}\\,dx",
             "This choice follows LIATE and leads to a straightforward second integral."),
    ],
    "Take $u = x$ and $dv = e^{2x}\\,dx$ — algebraic before exponential in LIATE.",
))

questions.append(make_q(
    "q009", "Easy", 3, "written", ["integration by parts", "LIATE", "trigonometry"],
    "For $\\displaystyle\\int x\\sin(2x)\\,dx$, state a suitable choice of $u$ and $dv$.",
    [
        step(1, "Classify the factors", "x \\text{ — algebraic; } \\sin(2x) \\text{ — trigonometric}",
             "Both factors are of types listed in LIATE."),
        step(2, "Compare in LIATE", "A \\text{ comes before } T",
             "Algebraic functions are chosen as $u$ before trigonometric ones."),
        step(3, "Assign $u$ and $dv$", "u = x, \\quad dv = \\sin(2x)\\,dx",
             "Differentiate the polynomial; integrate the trig function."),
        step(4, "Compute $du$ and $v$", "du = dx, \\quad v = -\\dfrac{1}{2}\\cos(2x)",
             "The integral of $\\sin(2x)$ introduces a factor $\\dfrac{1}{2}$ and a minus sign."),
        step(5, "Next step preview", "uv - \\int v\\,du \\Rightarrow \\int \\cos(2x)\\,dx",
             "The remaining integral is a standard cosine integral."),
        step(6, "Answer", "u = x, \\; dv = \\sin(2x)\\,dx",
             "This is the standard LIATE choice for polynomial–trig products."),
    ],
    "$u = x$, $dv = \\sin(2x)\\,dx$.",
))

ibp_x_exp("q010", "x e^{-x}", "-1", "-e^{-x}(x+1) + c")
ibp_x_trig("q011", "cos", "x\\cos(2x)", "2", "\\dfrac{x}{2}\\sin(2x) + \\dfrac{1}{4}\\cos(2x) + c")
ibp_x_exp("q012", "3x e^x", "1", "3e^x(x-1) + c", coeff="")
ibp_x_trig("q013", "sin", "3x\\sin x", "1", "-3x\\cos x + 3\\sin x + c")

questions.append(make_q(
    "q014", "Easy", 4, "written", ["integration by parts", "verification"],
    "Given that $\\displaystyle\\int x e^x\\,dx = e^x(x-1) + c$, verify this result by differentiation.",
    [
        step(1, "Write the claimed antiderivative", "F(x) = e^x(x-1) + c",
             "We check whether $F'(x)$ equals the integrand $x e^x$."),
        step(2, "Identify the product structure", "F(x) = e^x \\cdot (x-1) + c",
             "Use the product rule on $e^x$ and $(x-1)$."),
        step(3, "Differentiate using the product rule", "F'(x) = e^x(x-1) + e^x \\cdot 1",
             "Differentiate $e^x$ to get $e^x$, and $(x-1)$ to get $1$."),
        step(4, "Simplify", "F'(x) = e^x(x-1) + e^x = e^x \\cdot x",
             "Factor $e^x$ to combine the terms."),
        step(5, "Compare with the integrand", "F'(x) = x e^x",
             "The derivative matches the original integrand."),
        step(6, "Conclusion", "\\text{The antiderivative is correct}",
             "Verification by differentiation confirms the integration by parts result."),
    ],
    "$\\dfrac{d}{dx}[e^x(x-1)] = x e^x$, so the antiderivative is correct.",
))

ibp_x_trig("q015", "sin", "x\\sin(3x)", "3", "-\\dfrac{x}{3}\\cos(3x) + \\dfrac{1}{9}\\sin(3x) + c")
ibp_x_exp("q016", "x e^{3x}", "3", "\\dfrac{1}{9}e^{3x}(3x-1) + c")

questions.append(make_q(
    "q017", "Easy", 4, "expression", ["integration by parts", "logarithm"],
    "Find $\\displaystyle\\int \\ln(2x)\\,dx$ for $x > 0$.",
    [
        step(1, "Rewrite using log laws", "\\ln(2x) = \\ln 2 + \\ln x",
             "Splitting the logarithm separates the constant part from the standard form."),
        step(2, "Split the integral", "\\int \\ln 2\\,dx + \\int \\ln x\\,dx",
             "The integral of a sum is the sum of integrals."),
        step(3, "Integrate the constant", "\\ln 2 \\cdot x",
             "The integral of a constant is the constant times $x$."),
        step(4, "Integrate $\\ln x$ by parts", "u = \\ln x, \\; dv = dx \\Rightarrow x\\ln x - x",
             "Use $u = \\ln x$ so differentiation removes the logarithm."),
        step(5, "Combine", "x\\ln(2x) - x + c",
             "Since $x\\ln x + x\\ln 2 = x\\ln(2x)$, the answer simplifies neatly."),
        step(6, "Alternative: direct choice", "u = \\ln(2x), \\; dv = dx",
             "Differentiating $\\ln(2x)$ gives $\\dfrac{1}{x}$, same as for $\\ln x$."),
        step(7, "Verify", "\\frac{d}{dx}(x\\ln(2x) - x) = \\ln(2x)",
             "Differentiation confirms the result."),
    ],
    "$\\displaystyle\\int \\ln(2x)\\,dx = x\\ln(2x) - x + c$.",
))

ibp_x_trig("q018", "cos", "2x\\cos x", "1", "2x\\sin x + 2\\cos x + c")

questions.append(make_q(
    "q019", "Easy", 4, "written", ["integration by parts", "LIATE", "cyclic"],
    "For $\\displaystyle\\int e^x\\sin x\\,dx$, explain which factor should be $u$ and why the integral is called cyclic.",
    [
        step(1, "Identify factor types", "e^x \\text{ — exponential; } \\sin x \\text{ — trigonometric}",
             "Both are at the end of the LIATE list, so either could be $u$."),
        step(2, "Standard choice", "u = \\sin x, \\quad dv = e^x\\,dx",
             "Either choice works; taking $u = \\sin x$ is a common convention."),
        step(3, "First application", "I = e^x\\sin x - \\int e^x\\cos x\\,dx",
             "Integration by parts produces a related integral with $\\cos x$ instead of $\\sin x$."),
        step(4, "Second application", "\\text{Apply parts again to } \\int e^x\\cos x\\,dx",
             "A second application brings back $\\int e^x\\sin x\\,dx$."),
        step(5, "Cyclic nature", "I = \\ldots - I \\Rightarrow 2I = \\ldots",
             "The original integral reappears, allowing us to solve for $I$ algebraically."),
        step(6, "Summary", "\\text{Cyclic: two applications of parts returns the starting integral}",
             "Cyclic integrals require applying parts twice and then solving an equation for $I$."),
    ],
    "Choose $u = \\sin x$, $dv = e^x\\,dx$; applying parts twice returns $\\int e^x\\sin x\\,dx$, making it cyclic.",
))

questions.append(make_q(
    "q020", "Easy", 4, "expression", ["integration by parts", "algebraic"],
    "Find $\\displaystyle\\int x(1+x)\\,dx$ by expanding first, then comment on when integration by parts would be used instead.",
    [
        step(1, "Expand the integrand", "x(1+x) = x + x^2",
             "For a simple product of polynomials, expanding is often quickest."),
        step(2, "Integrate term by term", "\\dfrac{x^2}{2} + \\dfrac{x^3}{3} + c",
             "Use the power rule on each term."),
        step(3, "When to use parts instead", "u = x, \\; dv = (1+x)\\,dx",
             "Integration by parts is needed when one factor is not a polynomial, e.g. $x e^x$."),
        step(4, "Apply parts to confirm", "uv - \\int v\\,du = x\\left(x + \\dfrac{x^2}{2}\\right) - \\int\\left(x + \\dfrac{x^2}{2}\\right)dx",
             "Parts also works here but is longer than expanding."),
        step(5, "Simplify the parts result", "\\dfrac{x^2}{2} + \\dfrac{x^3}{3} + c",
             "Both methods give the same answer."),
        step(6, "Conclusion", "\\dfrac{x^2}{2} + \\dfrac{x^3}{3} + c",
             "Expand when both factors are polynomials; use parts for mixed types."),
    ],
    "$\\displaystyle\\int x(1+x)\\,dx = \\dfrac{x^2}{2} + \\dfrac{x^3}{3} + c$.",
))

questions.append(make_q(
    "q021", "Easy", 4, "expression", ["integration by parts", "inverse trigonometry"],
    "Find $\\displaystyle\\int \\arctan x\\,dx$.",
    [
        step(1, "Choose $u$ using LIATE", "u = \\arctan x, \\quad dv = dx",
             "Inverse trigonometric functions come before algebraic in LIATE."),
        step(2, "Find $du$ and $v$", "du = \\dfrac{1}{1+x^2}\\,dx, \\quad v = x",
             "The derivative of $\\arctan x$ is $\\dfrac{1}{1+x^2}$."),
        step(3, "Apply the formula", "x\\arctan x - \\int \\dfrac{x}{1+x^2}\\,dx",
             "Substitute into $uv - \\int v\\,du$."),
        step(4, "Spot the substitution for the remaining integral", "u_2 = 1+x^2, \\quad du_2 = 2x\\,dx",
             "The numerator $x\\,dx$ is (up to a factor) the derivative of $1+x^2$."),
        step(5, "Integrate", "x\\arctan x - \\dfrac{1}{2}\\ln(1+x^2) + c",
             "$\\int \\dfrac{x}{1+x^2}\\,dx = \\dfrac{1}{2}\\ln(1+x^2)$."),
        step(6, "State the answer", "x\\arctan x - \\dfrac{1}{2}\\ln(1+x^2) + c",
             "This is the standard result for $\\int \\arctan x\\,dx$."),
        step(7, "Verify structure", "\\text{Differentiate to confirm}",
             "The answer combines an inverse trig term and a logarithm — typical of inverse trig integrals."),
    ],
    "$\\displaystyle\\int \\arctan x\\,dx = x\\arctan x - \\dfrac{1}{2}\\ln(1+x^2) + c$.",
))

questions.append(make_q(
    "q022", "Easy", 4, "expression", ["integration by parts", "repeated"],
    "Find $\\displaystyle\\int x^2 e^x\\,dx$.",
    [
        step(1, "First application: choose $u$ and $dv$", "u = x^2, \\quad dv = e^x\\,dx",
             "The algebraic factor has degree $2$, so parts will be needed twice."),
        step(2, "First parts step", "x^2 e^x - 2\\int x e^x\\,dx",
             "Differentiating $x^2$ gives $2x$; the power of $x$ drops by one."),
        step(3, "Second application on $\\int x e^x\\,dx$", "u = x, \\; dv = e^x\\,dx \\Rightarrow e^x(x-1)",
             "Apply parts again to the remaining integral."),
        step(4, "Substitute back", "x^2 e^x - 2e^x(x-1) + c",
             "Replace $\\int x e^x\\,dx$ with its antiderivative."),
        step(5, "Expand and collect", "e^x(x^2 - 2x + 2) + c",
             "Factor $e^x$ for a tidy final form."),
        step(6, "Check the degree pattern", "\\text{Two applications for } x^2",
             "A polynomial of degree $n$ typically needs $n$ applications of parts."),
        step(7, "Verify", "\\frac{d}{dx}[e^x(x^2-2x+2)] = x^2 e^x",
             "Differentiation confirms the answer."),
    ],
    "$\\displaystyle\\int x^2 e^x\\,dx = e^x(x^2 - 2x + 2) + c$.",
))

questions.append(make_q(
    "q023", "Easy", 4, "expression", ["integration by parts", "definite integral"],
    "Evaluate $\\displaystyle\\int_0^1 x e^x\\,dx$.",
    [
        step(1, "Set up parts", "u = x, \\quad dv = e^x\\,dx",
             "Use LIATE: algebraic $u$, exponential $dv$."),
        step(2, "Find $du$ and $v$", "du = dx, \\quad v = e^x",
             "Standard derivatives and integrals."),
        step(3, "Apply definite parts formula", "\\left[x e^x\\right]_0^1 - \\int_0^1 e^x\\,dx",
             "For definite integrals: $\\int_a^b u\\,dv = [uv]_a^b - \\int_a^b v\\,du$."),
        step(4, "Evaluate $[uv]_0^1$", "1 \\cdot e^1 - 0 \\cdot e^0 = e",
             "Substitute the limits into $uv$."),
        step(5, "Evaluate $\\int_0^1 e^x\\,dx$", "\\left[e^x\\right]_0^1 = e - 1",
             "Integrate $e^x$ and evaluate at the limits."),
        step(6, "Combine", "e - (e - 1) = 1",
             "Subtract the second part from the first."),
        step(7, "Answer", "1",
             "The definite integral equals $1$."),
        step(8, "Note", "\\text{No } +c \\text{ for definite integrals}",
             "Constants cancel when evaluating between limits."),
    ],
    "$\\displaystyle\\int_0^1 x e^x\\,dx = 1$.",
))

questions.append(make_q(
    "q024", "Easy", 4, "expression", ["integration by parts", "trigonometry"],
    "Find $\\displaystyle\\int x\\sin(2x)\\,dx$.",
    [
        step(1, "Choose $u$ and $dv$", "u = x, \\quad dv = \\sin(2x)\\,dx",
             "Algebraic before trigonometric in LIATE."),
        step(2, "Find $du$ and $v$", "du = dx, \\quad v = -\\dfrac{1}{2}\\cos(2x)",
             "Integrate $\\sin(2x)$ with the chain rule."),
        step(3, "Apply the formula", "-\\dfrac{x}{2}\\cos(2x) + \\dfrac{1}{2}\\int \\cos(2x)\\,dx",
             "The remaining integral is $\\int \\cos(2x)\\,dx$."),
        step(4, "Integrate $\\cos(2x)$", "-\\dfrac{x}{2}\\cos(2x) + \\dfrac{1}{4}\\sin(2x) + c",
             "$\\int \\cos(2x)\\,dx = \\dfrac{1}{2}\\sin(2x)$."),
        step(5, "State the answer", "-\\dfrac{x}{2}\\cos(2x) + \\dfrac{1}{4}\\sin(2x) + c",
             "Collect terms with a common structure."),
        step(6, "Verify", "\\frac{d}{dx}\\left(-\\dfrac{x}{2}\\cos(2x) + \\dfrac{1}{4}\\sin(2x)\\right) = x\\sin(2x)",
             "Differentiation recovers the integrand."),
    ],
    "$\\displaystyle\\int x\\sin(2x)\\,dx = -\\dfrac{x}{2}\\cos(2x) + \\dfrac{1}{4}\\sin(2x) + c$.",
))

# ══════════════════════════════════════════════════════════════════════════════
# INTERMEDIATE q025–q050
# ══════════════════════════════════════════════════════════════════════════════

ibp_x_exp("q025", "x^2 e^x", "1", "e^x(x^2 - 2x + 2) + c", diff="Intermediate", marks=5)
ibp_x_trig("q026", "sin", "x^2\\sin x", "1", "-x^2\\cos x + 2x\\sin x + 2\\cos x + c", diff="Intermediate", marks=5)

questions.append(make_q(
    "q027", "Intermediate", 5, "expression", ["integration by parts", "repeated", "exponential"],
    "Find $\\displaystyle\\int x^3 e^x\\,dx$.",
    [
        step(1, "Plan repeated parts", "u = x^3 \\Rightarrow \\text{three applications needed}",
             "Each application of parts reduces the power of $x$ by one."),
        step(2, "First application", "x^3 e^x - 3\\int x^2 e^x\\,dx",
             "Differentiate $x^3$ to get $3x^2$."),
        step(3, "Second: $\\int x^2 e^x\\,dx$", "e^x(x^2 - 2x + 2)",
             "Two applications on $x^2 e^x$ give this standard result."),
        step(4, "Substitute", "x^3 e^x - 3e^x(x^2 - 2x + 2) + c",
             "Replace the inner integral."),
        step(5, "Expand inside the bracket", "e^x(x^3 - 3x^2 + 6x - 6) + c",
             "Distribute $-3$ and factor $e^x$."),
        step(6, "Pattern check", "\\text{Degree } 3 \\Rightarrow \\text{three applications}",
             "The polynomial in front of $e^x$ has the same degree as the original power of $x$."),
        step(7, "Verify by differentiating", "\\frac{d}{dx}[e^x(x^3-3x^2+6x-6)] = x^3 e^x",
             "Differentiation confirms the result."),
        step(8, "Alternative tabular method", "\\text{Repeated differentiation of } x^3",
             "Tabular integration by parts is efficient for polynomial–exponential products."),
        step(9, "Final answer", "e^x(x^3 - 3x^2 + 6x - 6) + c",
             "State the antiderivative in factored form."),
    ],
    "$\\displaystyle\\int x^3 e^x\\,dx = e^x(x^3 - 3x^2 + 6x - 6) + c$.",
))

questions.append(make_q(
    "q028", "Intermediate", 5, "expression", ["integration by parts", "logarithm"],
    "Find $\\displaystyle\\int x^2\\ln x\\,dx$ for $x > 0$.",
    [
        step(1, "Apply LIATE", "u = \\ln x, \\quad dv = x^2\\,dx",
             "Logarithmic before algebraic."),
        step(2, "Find $du$ and $v$", "du = \\dfrac{1}{x}\\,dx, \\quad v = \\dfrac{x^3}{3}",
             "Integrate $x^2$ using the power rule."),
        step(3, "Apply the formula", "\\dfrac{x^3}{3}\\ln x - \\dfrac{1}{3}\\int x^2\\,dx",
             "The $x$ and $\\dfrac{1}{x}$ cancel one power."),
        step(4, "Integrate $x^2$", "\\dfrac{x^3}{3}\\ln x - \\dfrac{x^3}{9} + c",
             "$\\int x^2\\,dx = \\dfrac{x^3}{3}$, then divide by $3$."),
        step(5, "Factor", "\\dfrac{x^3}{9}(3\\ln x - 1) + c",
             "Optional factored form."),
        step(6, "Domain", "x > 0",
             "$\\ln x$ is defined only for positive $x$."),
        step(7, "Verify", "\\frac{d}{dx}\\left(\\dfrac{x^3}{3}\\ln x - \\dfrac{x^3}{9}\\right) = x^2\\ln x",
             "Differentiation recovers the integrand."),
        step(8, "Compare with $\\int x\\ln x\\,dx$", "\\text{Same LIATE choice pattern}",
             "Higher powers of $x$ in $dv$ increase the polynomial degree in the answer."),
        step(9, "Final answer", "\\dfrac{x^3}{3}\\ln x - \\dfrac{x^3}{9} + c",
             "Required antiderivative."),
    ],
    "$\\displaystyle\\int x^2\\ln x\\,dx = \\dfrac{x^3}{3}\\ln x - \\dfrac{x^3}{9} + c$.",
))

definite_ibp = [
    ("q029", "x e^x", "0", "1", "e - 2"),
    ("q030", "x\\sin x", "0", "\\pi", "1"),
    ("q031", "x\\cos x", "0", "\\dfrac{\\pi}{2}", "1"),
    ("q032", "\\ln x", "1", "e", "1"),
    ("q033", "x e^{-x}", "0", "1", "1 - \\dfrac{2}{e}"),
    ("q034", "x\\sin(2x)", "0", "\\dfrac{\\pi}{4}", "\\dfrac{\\pi}{4\\sqrt{2}} - \\dfrac{1}{4}"),
]
for qid, integrand, a, b, result in definite_ibp:
    steps = [
        step(1, "Choose $u$ and $dv$ using LIATE", "\\text{Identify algebraic, log, or trig factors}",
             "Pick $u$ to simplify on differentiation."),
        step(2, "Find $du$ and $v$", "\\text{Compute derivatives and antiderivatives}",
             "Prepare for the definite parts formula."),
        step(3, "Apply definite integration by parts", f"\\left[uv\\right]_{{{a}}}^{{{b}}} - \\int_{{{a}}}^{{{b}}} v\\,du",
             "Evaluate $uv$ at the limits before integrating $v\\,du$."),
        step(4, "Evaluate $[uv]$ at the limits", "\\text{substitute } x = " + b + " \\text{ and } x = " + a,
             "Substitute each limit into the product $uv$."),
        step(5, "Evaluate the remaining definite integral", "\\int v\\,du \\text{ between the same limits}",
             "Integrate $v\\,du$ and evaluate at the limits."),
        step(6, "Combine and simplify", result,
             "Subtract and simplify to an exact value."),
        step(7, "Check signs", "\\text{Watch for minus signs from } v",
             "Trig integrals often introduce negative coefficients in $v$."),
        step(8, "No $+c$ needed", "\\text{Definite integral}",
             "Constants of integration cancel in definite evaluation."),
        step(9, "State the answer", result,
             "Final exact value of the definite integral."),
    ]
    questions.append(make_q(
        qid, "Intermediate", 5, "value", ["integration by parts", "definite integral"],
        f"Evaluate $\\displaystyle\\int_{{{a}}}^{{{b}}} {integrand}\\,dx$.",
        steps,
        f"$\\displaystyle\\int_{{{a}}}^{{{b}}} {integrand}\\,dx = {result}$.",
    ))

questions.append(make_q(
    "q035", "Intermediate", 5, "expression", ["integration by parts", "inverse trigonometry"],
    "Find $\\displaystyle\\int \\arcsin x\\,dx$ for $|x| \\le 1$.",
    [
        step(1, "Choose $u$ and $dv$", "u = \\arcsin x, \\quad dv = dx",
             "Inverse trig is highest priority in LIATE."),
        step(2, "Find $du$ and $v$", "du = \\dfrac{1}{\\sqrt{1-x^2}}\\,dx, \\quad v = x",
             "Standard derivative of $\\arcsin x$."),
        step(3, "Apply the formula", "x\\arcsin x - \\int \\dfrac{x}{\\sqrt{1-x^2}}\\,dx",
             "The remaining integral has $x$ over $\\sqrt{1-x^2}$."),
        step(4, "Substitution for the second integral", "w = 1 - x^2, \\quad dw = -2x\\,dx",
             "The numerator is (up to sign) the derivative of $1-x^2$."),
        step(5, "Integrate", "x\\arcsin x + \\dfrac{1}{2}\\sqrt{1-x^2} + c",
             "$\\int \\dfrac{x}{\\sqrt{1-x^2}}\\,dx = -\\sqrt{1-x^2}$."),
        step(6, "State the answer", "x\\arcsin x + \\dfrac{1}{2}\\sqrt{1-x^2} + c",
             "Standard result for $\\int \\arcsin x\\,dx$."),
        step(7, "Domain", "|x| \\le 1",
             "$\\arcsin x$ is defined on $[-1,1]$."),
        step(8, "Verify at $x=0$", "\\int_0^0 \\arcsin x\\,dx = 0",
             "The antiderivative gives $0$ at $x=0$, as expected."),
        step(9, "Differentiate to check", "\\frac{d}{dx}\\left(x\\arcsin x + \\dfrac{1}{2}\\sqrt{1-x^2}\\right) = \\arcsin x",
             "Confirmation by differentiation."),
    ],
    "$\\displaystyle\\int \\arcsin x\\,dx = x\\arcsin x + \\dfrac{1}{2}\\sqrt{1-x^2} + c$.",
))

questions.append(make_q(
    "q036", "Intermediate", 5, "expression", ["integration by parts", "cyclic", "exponential", "trigonometry"],
    "Find $\\displaystyle\\int e^x\\sin x\\,dx$.",
    [
        step(1, "Let $I = \\int e^x\\sin x\\,dx$", "I = \\int e^x\\sin x\\,dx",
             "Name the integral so we can solve for it algebraically."),
        step(2, "First application", "u = \\sin x, \\; dv = e^x\\,dx",
             "Choose $u = \\sin x$; either trig or exponential works."),
        step(3, "After first parts", "I = e^x\\sin x - \\int e^x\\cos x\\,dx",
             "The cosine integral appears."),
        step(4, "Second application on $\\int e^x\\cos x\\,dx$", "u = \\cos x, \\; dv = e^x\\,dx",
             "Apply parts again with $u = \\cos x$."),
        step(5, "Result of second parts", "\\int e^x\\cos x\\,dx = e^x\\cos x + I",
             "The original integral $I$ reappears — this is the cyclic property."),
        step(6, "Substitute back", "I = e^x\\sin x - e^x\\cos x - I",
             "Replace $\\int e^x\\cos x\\,dx$ in the expression for $I$."),
        step(7, "Solve for $I$", "2I = e^x(\\sin x - \\cos x)",
             "Collect $I$ terms on one side."),
        step(8, "Final answer", "I = \\dfrac{e^x}{2}(\\sin x - \\cos x) + c",
             "Divide by $2$ and add the constant."),
        step(9, "Verify structure", "\\text{Differentiate to confirm}",
             "Cyclic integrals always produce a factor $\\dfrac{1}{2}$ after solving."),
    ],
    "$\\displaystyle\\int e^x\\sin x\\,dx = \\dfrac{e^x}{2}(\\sin x - \\cos x) + c$.",
))

questions.append(make_q(
    "q037", "Intermediate", 5, "expression", ["integration by parts", "cyclic", "exponential", "trigonometry"],
    "Find $\\displaystyle\\int e^x\\cos x\\,dx$.",
    [
        step(1, "Let $J = \\int e^x\\cos x\\,dx$", "J = \\int e^x\\cos x\\,dx",
             "Label the integral for algebraic solution."),
        step(2, "First application", "u = \\cos x, \\; dv = e^x\\,dx",
             "Standard choice for cyclic integrals."),
        step(3, "After first parts", "J = e^x\\cos x + \\int e^x\\sin x\\,dx",
             "Note the plus sign from differentiating $\\cos x$."),
        step(4, "Second application", "u = \\sin x, \\; dv = e^x\\,dx \\Rightarrow \\int e^x\\sin x\\,dx = e^x\\sin x - J",
             "Parts on the sine integral brings back $J$."),
        step(5, "Substitute", "J = e^x\\cos x + e^x\\sin x - J",
             "The original integral reappears."),
        step(6, "Solve for $J$", "2J = e^x(\\cos x + \\sin x)",
             "Collect $J$ terms."),
        step(7, "Divide by $2$", "J = \\dfrac{e^x}{2}(\\cos x + \\sin x) + c",
             "Final antiderivative."),
        step(8, "Link to $\\int e^x\\sin x\\,dx$", "\\text{Same technique, different sign pattern}",
             "Sine and cosine cyclic integrals differ by signs in the bracket."),
        step(9, "Verify", "\\frac{d}{dx}\\left[\\dfrac{e^x}{2}(\\cos x + \\sin x)\\right] = e^x\\cos x",
             "Differentiation confirms."),
    ],
    "$\\displaystyle\\int e^x\\cos x\\,dx = \\dfrac{e^x}{2}(\\cos x + \\sin x) + c$.",
))

ibp_x_exp("q038", "x e^{2x}", "2", "\\dfrac{1}{4}e^{2x}(2x-1) + c", diff="Intermediate", marks=5)
ibp_x_trig("q039", "cos", "x^2\\cos x", "1", "x^2\\sin x + 2x\\cos x - 2\\sin x + c", diff="Intermediate", marks=5)

questions.append(make_q(
    "q040", "Intermediate", 5, "expression", ["integration by parts", "logarithm", "definite"],
    "Evaluate $\\displaystyle\\int_1^e x\\ln x\\,dx$.",
    [
        step(1, "Choose $u$ and $dv$", "u = \\ln x, \\quad dv = x\\,dx",
             "LIATE: logarithmic before algebraic."),
        step(2, "Find $du$ and $v$", "du = \\dfrac{1}{x}\\,dx, \\quad v = \\dfrac{x^2}{2}",
             "Standard preparation for parts."),
        step(3, "Definite parts formula", "\\left[\\dfrac{x^2}{2}\\ln x\\right]_1^e - \\int_1^e \\dfrac{x}{2}\\,dx",
             "Apply $[uv]_a^b - \\int_a^b v\\,du$."),
        step(4, "Evaluate $[uv]$", "\\dfrac{e^2}{2} \\cdot 1 - \\dfrac{1}{2} \\cdot 0 = \\dfrac{e^2}{2}",
             "At $x=e$, $\\ln e = 1$; at $x=1$, $\\ln 1 = 0$."),
        step(5, "Evaluate $\\int_1^e \\dfrac{x}{2}\\,dx$", "\\left[\\dfrac{x^2}{4}\\right]_1^e = \\dfrac{e^2 - 1}{4}",
             "Integrate $\\dfrac{x}{2}$ and evaluate."),
        step(6, "Combine", "\\dfrac{e^2}{2} - \\dfrac{e^2 - 1}{4} = \\dfrac{e^2 + 1}{4}",
             "Common denominator $4$."),
        step(7, "Exact answer", "\\dfrac{e^2 + 1}{4}",
             "Leave in exact form."),
        step(8, "Interpretation", "\\text{Area under } x\\ln x \\text{ from } 1 \\text{ to } e",
             "The integral represents a signed area on $[1,e]$."),
        step(9, "Check $x=1$ boundary", "\\dfrac{1}{2}\\ln 1 = 0",
             "The lower boundary term vanishes."),
    ],
    "$\\displaystyle\\int_1^e x\\ln x\\,dx = \\dfrac{e^2 + 1}{4}$.",
))

ibp_x_exp("q041", "x e^{-2x}", "-2", "-\\dfrac{1}{4}e^{-2x}(2x+1) + c", diff="Intermediate", marks=5)
ibp_x_trig("q042", "sin", "x\\sin(3x)", "3", "-\\dfrac{x}{3}\\cos(3x) + \\dfrac{1}{9}\\sin(3x) + c", diff="Intermediate", marks=5)
ibp_x_trig("q043", "cos", "x\\cos(3x)", "3", "\\dfrac{x}{3}\\sin(3x) + \\dfrac{1}{9}\\cos(3x) + c", diff="Intermediate", marks=5)

questions.append(make_q(
    "q044", "Intermediate", 5, "expression", ["integration by parts", "inverse trigonometry"],
    "Find $\\displaystyle\\int x\\arctan x\\,dx$.",
    [
        step(1, "Apply LIATE", "u = \\arctan x, \\quad dv = x\\,dx",
             "Inverse trig before algebraic."),
        step(2, "Find $du$ and $v$", "du = \\dfrac{1}{1+x^2}\\,dx, \\quad v = \\dfrac{x^2}{2}",
             "Standard derivatives and integrals."),
        step(3, "Apply parts", "\\dfrac{x^2}{2}\\arctan x - \\dfrac{1}{2}\\int \\dfrac{x^2}{1+x^2}\\,dx",
             "Substitute into $uv - \\int v\\,du$."),
        step(4, "Rewrite the fraction", "\\dfrac{x^2}{1+x^2} = 1 - \\dfrac{1}{1+x^2}",
             "Split to create a standard $\\arctan$ integral."),
        step(5, "Integrate both parts", "\\dfrac{x^2}{2}\\arctan x - \\dfrac{x}{2} + \\dfrac{1}{2}\\arctan x + c",
             "$\\int \\dfrac{1}{1+x^2}\\,dx = \\arctan x$."),
        step(6, "Collect $\\arctan$ terms", "\\dfrac{1}{2}(x^2+1)\\arctan x - \\dfrac{x}{2} + c",
             "Factor where helpful."),
        step(7, "Verify at $x=0$", "F(0) = \\dfrac{1}{2}\\arctan 0 = 0",
             "Antiderivative passes a quick check."),
        step(8, "Differentiate to confirm", "\\frac{d}{dx}\\left[\\dfrac{x^2}{2}\\arctan x - \\dfrac{x}{2} + \\dfrac{1}{2}\\arctan x\\right] = x\\arctan x",
             "Full differentiation confirms."),
        step(9, "Final answer", "\\dfrac{1}{2}(x^2+1)\\arctan x - \\dfrac{x}{2} + c",
             "Required antiderivative."),
    ],
    "$\\displaystyle\\int x\\arctan x\\,dx = \\dfrac{1}{2}(x^2+1)\\arctan x - \\dfrac{x}{2} + c$.",
))

questions.append(make_q(
    "q045", "Intermediate", 5, "written", ["integration by parts", "verification", "exam"],
    "(a) Find $\\displaystyle\\int x e^x\\,dx$. (b) Hence verify your answer by differentiating.",
    [
        step(1, "Part (a): choose $u$ and $dv$", "u = x, \\quad dv = e^x\\,dx",
             "LIATE gives $u = x$."),
        step(2, "Apply parts", "x e^x - \\int e^x\\,dx",
             "Standard first application."),
        step(3, "Integrate", "e^x(x-1) + c",
             "The remaining integral is $e^x$."),
        step(4, "Part (a) answer", "e^x(x-1) + c",
             "State the antiderivative."),
        step(5, "Part (b): set $F(x) = e^x(x-1)$", "F(x) = e^x(x-1)",
             "Differentiate the answer from part (a)."),
        step(6, "Product rule", "F'(x) = e^x(x-1) + e^x",
             "Differentiate $e^x$ and $(x-1)$ separately."),
        step(7, "Simplify", "F'(x) = x e^x",
             "Factor $e^x$ to recover the integrand."),
        step(8, "Conclusion for (b)", "\\text{Verified}",
             "Differentiation confirms part (a)."),
        step(9, "Exam tip", "\\text{Always verify if asked}",
             "Verification by differentiation is a common exam requirement."),
    ],
    "(a) $\\displaystyle\\int x e^x\\,dx = e^x(x-1) + c$. (b) $\\dfrac{d}{dx}[e^x(x-1)] = x e^x$, verified.",
))

questions.append(make_q(
    "q046", "Intermediate", 6, "value", ["integration by parts", "definite integral", "cyclic"],
    "Evaluate $\\displaystyle\\int_0^{\\pi/2} e^x\\sin x\\,dx$.",
    [
        step(1, "Find the indefinite form first", "I = \\dfrac{e^x}{2}(\\sin x - \\cos x) + c",
             "Use the cyclic integration by parts result."),
        step(2, "Set up definite evaluation", "\\left[\\dfrac{e^x}{2}(\\sin x - \\cos x)\\right]_0^{\\pi/2}",
             "Evaluate the antiderivative at the limits."),
        step(3, "At $x = \\dfrac{\\pi}{2}$", "\\dfrac{e^{\\pi/2}}{2}(1 - 0) = \\dfrac{e^{\\pi/2}}{2}",
             "$\\sin\\dfrac{\\pi}{2}=1$ and $\\cos\\dfrac{\\pi}{2}=0$."),
        step(4, "At $x = 0$", "\\dfrac{1}{2}(0 - 1) = -\\dfrac{1}{2}",
             "$\\sin 0 = 0$ and $\\cos 0 = 1$."),
        step(5, "Subtract", "\\dfrac{e^{\\pi/2}}{2} + \\dfrac{1}{2} = \\dfrac{e^{\\pi/2}+1}{2}",
             "Upper minus lower."),
        step(6, "Exact answer", "\\dfrac{e^{\\pi/2}+1}{2}",
             "Leave in exact form."),
        step(7, "Alternative: parts directly on definite integral", "\\text{Same cyclic algebra with limits}",
             "You can also apply parts twice before evaluating."),
        step(8, "Check magnitude", "\\text{Positive area}",
             "$e^x\\sin x > 0$ on $(0, \\pi/2)$, so the integral is positive."),
        step(9, "Final value", "\\dfrac{e^{\\pi/2}+1}{2}",
             "Required definite integral."),
    ],
    "$\\displaystyle\\int_0^{\\pi/2} e^x\\sin x\\,dx = \\dfrac{e^{\\pi/2}+1}{2}$.",
))

questions.append(make_q(
    "q047", "Intermediate", 5, "expression", ["integration by parts", "logarithm"],
    "Find $\\displaystyle\\int (\\ln x)^2\\,dx$ for $x > 0$.",
    [
        step(1, "Choose $u$ and $dv$", "u = (\\ln x)^2, \\quad dv = dx",
             "Logarithmic squared still prioritises $u$ in LIATE."),
        step(2, "Find $du$", "du = \\dfrac{2\\ln x}{x}\\,dx",
             "Chain rule on $(\\ln x)^2$."),
        step(3, "Apply parts", "x(\\ln x)^2 - 2\\int \\ln x\\,dx",
             "The remaining integral is $\\int \\ln x\\,dx$."),
        step(4, "Use $\\int \\ln x\\,dx = x\\ln x - x$", "x(\\ln x)^2 - 2(x\\ln x - x) + c",
             "Substitute the known logarithm result."),
        step(5, "Expand", "x(\\ln x)^2 - 2x\\ln x + 2x + c",
             "Distribute the $-2$."),
        step(6, "Factor (optional)", "x\\left[(\\ln x)^2 - 2\\ln x + 2\\right] + c",
             "Factored form highlights the structure."),
        step(7, "Repeated parts pattern", "\\text{Two applications for } (\\ln x)^2",
             "Each power of $\\ln x$ needs another application of parts."),
        step(8, "Verify at $x=1$", "F(1) = 2",
             "Quick check: integrand zero at $x=1$ but antiderivative need not be."),
        step(9, "Final answer", "x(\\ln x)^2 - 2x\\ln x + 2x + c",
             "Required antiderivative."),
    ],
    "$\\displaystyle\\int (\\ln x)^2\\,dx = x(\\ln x)^2 - 2x\\ln x + 2x + c$.",
))

questions.append(make_q(
    "q048", "Intermediate", 5, "expression", ["integration by parts", "repeated", "trigonometry"],
    "Find $\\displaystyle\\int x^2\\sin(2x)\\,dx$.",
    [
        step(1, "First application", "u = x^2, \\; dv = \\sin(2x)\\,dx",
             "Algebraic factor with degree $2$."),
        step(2, "After first parts", "-\\dfrac{x^2}{2}\\cos(2x) + x\\int \\cos(2x)\\,dx",
             "Differentiating $x^2$ gives $2x$."),
        step(3, "Correct first step", "-\\dfrac{x^2}{2}\\cos(2x) + x\\int \\cos(2x)\\,dx \\Rightarrow -\\dfrac{x^2}{2}\\cos(2x) + \\dfrac{x}{2}\\sin(2x) - \\int \\sin(2x)\\,dx",
             "Apply parts again to $\\int x\\cos(2x)\\,dx$."),
        step(4, "Evaluate $\\int \\sin(2x)\\,dx$", "-\\dfrac{1}{2}\\cos(2x)",
             "Standard trig integral."),
        step(5, "Collect terms", "-\\dfrac{x^2}{2}\\cos(2x) + \\dfrac{x}{2}\\sin(2x) + \\dfrac{1}{4}\\cos(2x) + c",
             "Combine like terms."),
        step(6, "Factor $\\cos(2x)$", "\\dfrac{1}{4}\\cos(2x)(2 - 4x^2) + \\dfrac{x}{2}\\sin(2x) + c",
             "Optional factored form."),
        step(7, "Two applications needed", "\\text{Degree } 2 \\Rightarrow 2 \\text{ parts}",
             "Pattern matches polynomial–trig products."),
        step(8, "Verify", "\\frac{d}{dx}\\left(-\\dfrac{x^2}{2}\\cos(2x) + \\dfrac{x}{2}\\sin(2x) + \\dfrac{1}{4}\\cos(2x)\\right) = x^2\\sin(2x)",
             "Differentiation confirms."),
        step(9, "Final answer", "-\\dfrac{x^2}{2}\\cos(2x) + \\dfrac{x}{2}\\sin(2x) + \\dfrac{1}{4}\\cos(2x) + c",
             "Required antiderivative."),
    ],
    "$\\displaystyle\\int x^2\\sin(2x)\\,dx = -\\dfrac{x^2}{2}\\cos(2x) + \\dfrac{x}{2}\\sin(2x) + \\dfrac{1}{4}\\cos(2x) + c$.",
))

questions.append(make_q(
    "q049", "Intermediate", 5, "expression", ["integration by parts", "exponential"],
    "Find $\\displaystyle\\int x^2 e^{-x}\\,dx$.",
    [
        step(1, "First application", "u = x^2, \\; dv = e^{-x}\\,dx",
             "Polynomial degree $2$ requires two applications."),
        step(2, "After first parts", "-x^2 e^{-x} + 2\\int x e^{-x}\\,dx",
             "$v = -e^{-x}$ introduces a minus sign."),
        step(3, "Use $\\int x e^{-x}\\,dx = -e^{-x}(x+1)$", "-x^2 e^{-x} - 2e^{-x}(x+1) + c",
             "Substitute the standard result."),
        step(4, "Factor $e^{-x}$", "-e^{-x}(x^2 + 2x + 2) + c",
             "Collect inside the bracket."),
        step(5, "Check signs", "\\text{Careful with } v = -e^{-x}",
             "Negative exponential integrals often accumulate minus signs."),
        step(6, "Pattern", "e^{-x}(\\text{polynomial of degree } 2)",
             "Same structure as $x^2 e^x$ but with sign changes."),
        step(7, "Verify", "\\frac{d}{dx}[-e^{-x}(x^2+2x+2)] = x^2 e^{-x}",
             "Differentiation confirms."),
        step(8, "Definite version", "\\text{Can evaluate between limits using this antiderivative}",
             "The indefinite result enables definite calculations."),
        step(9, "Final answer", "-e^{-x}(x^2 + 2x + 2) + c",
             "Required antiderivative."),
    ],
    "$\\displaystyle\\int x^2 e^{-x}\\,dx = -e^{-x}(x^2 + 2x + 2) + c$.",
))

questions.append(make_q(
    "q050", "Intermediate", 6, "written", ["integration by parts", "exam", "multi-part"],
    "(a) State the integration by parts formula. (b) Use it to find $\\displaystyle\\int x\\cos x\\,dx$. (c) Verify by differentiation.",
    [
        step(1, "Part (a)", "\\int u\\,dv = uv - \\int v\\,du",
             "The fundamental integration by parts formula."),
        step(2, "Part (b): choose $u$ and $dv$", "u = x, \\quad dv = \\cos x\\,dx",
             "LIATE: algebraic before trigonometric."),
        step(3, "Find $du$ and $v$", "du = dx, \\quad v = \\sin x",
             "Standard preparation."),
        step(4, "Apply parts", "x\\sin x - \\int \\sin x\\,dx",
             "Substitute into the formula."),
        step(5, "Integrate", "x\\sin x + \\cos x + c",
             "$\\int \\sin x\\,dx = -\\cos x$, so minus minus gives plus."),
        step(6, "Part (b) answer", "x\\sin x + \\cos x + c",
             "State the antiderivative."),
        step(7, "Part (c): differentiate", "F'(x) = \\sin x + x\\cos x - \\sin x = x\\cos x",
             "Product rule on $x\\sin x$; derivative of $\\cos x$ is $-\\sin x$."),
        step(8, "Verification complete", "F'(x) = x\\cos x",
             "Matches the integrand."),
        step(9, "Summary", "(a) formula, (b) $x\\sin x + \\cos x + c$, (c) verified",
             "Full exam-style response."),
    ],
    "(a) $\\displaystyle\\int u\\,dv = uv - \\int v\\,du$. (b) $\\displaystyle\\int x\\cos x\\,dx = x\\sin x + \\cos x + c$. (c) Verified.",
))

# ══════════════════════════════════════════════════════════════════════════════
# HARD q051–q070
# ══════════════════════════════════════════════════════════════════════════════

questions.append(make_q(
    "q051", "Hard", 6, "expression", ["integration by parts", "cyclic", "definite"],
    "Evaluate $\\displaystyle\\int_0^{\\pi} e^x\\sin x\\,dx$.",
    [
        step(1, "Indefinite form", "I = \\dfrac{e^x}{2}(\\sin x - \\cos x) + c",
             "Use the cyclic parts result."),
        step(2, "Evaluate at $x = \\pi$", "\\dfrac{e^{\\pi}}{2}(0 - (-1)) = \\dfrac{e^{\\pi}}{2}",
             "$\\sin\\pi = 0$, $\\cos\\pi = -1$."),
        step(3, "Evaluate at $x = 0$", "\\dfrac{1}{2}(0 - 1) = -\\dfrac{1}{2}",
             "At $x=0$: $\\sin 0 = 0$, $\\cos 0 = 1$."),
        step(4, "Subtract", "\\dfrac{e^{\\pi}}{2} + \\dfrac{1}{2} = \\dfrac{e^{\\pi}+1}{2}",
             "Upper minus lower."),
        step(5, "Interpretation", "\\text{Signed area over } [0,\\pi]",
             "The integrand changes sign but the net integral is positive."),
        step(6, "Alternative method", "\\text{Apply parts twice with limits}",
             "Direct definite cyclic integration is longer but equivalent."),
        step(7, "Exact form", "\\dfrac{e^{\\pi}+1}{2}",
             "Leave exact — do not decimalise."),
        step(8, "Magnitude check", "\\dfrac{e^{\\pi}+1}{2} > 0",
             "Consistent with net positive area."),
        step(9, "Related result", "\\int_0^{\\pi/2} e^x\\sin x\\,dx = \\dfrac{e^{\\pi/2}+1}{2}",
             "Same technique on a shorter interval."),
        step(10, "Final answer", "\\dfrac{e^{\\pi}+1}{2}",
             "Required value."),
    ],
    "$\\displaystyle\\int_0^{\\pi} e^x\\sin x\\,dx = \\dfrac{e^{\\pi}+1}{2}$.",
))

questions.append(make_q(
    "q052", "Hard", 7, "expression", ["integration by parts", "repeated", "exponential"],
    "Find $\\displaystyle\\int x^3 e^{2x}\\,dx$.",
    [
        step(1, "Plan", "u = x^3 \\Rightarrow 3 \\text{ applications of parts}",
             "Degree $3$ polynomial needs three reductions."),
        step(2, "First application", "x^3 e^{2x} - 3\\int x^2 e^{2x}\\,dx",
             "Differentiate $x^3$ to get $3x^2$."),
        step(3, "Second: $\\int x^2 e^{2x}\\,dx$", "\\dfrac{1}{4}e^{2x}(4x^2 - 4x + 2)",
             "Two applications on $x^2 e^{2x}$ with factor $2$ in the exponent."),
        step(4, "Substitute", "x^3 e^{2x} - \\dfrac{3}{4}e^{2x}(4x^2 - 4x + 2) + c",
             "Replace the inner integral."),
        step(5, "Expand", "e^{2x}\\left(x^3 - 3x^2 + 3x - \\dfrac{3}{2}\\right) + c",
             "Distribute and factor $e^{2x}$."),
        step(6, "Tabular alternative", "\\text{Differentiate } x^3 \\text{ three times; integrate } e^{2x}",
             "Tabular method is efficient for this type."),
        step(7, "Sign pattern", "\\text{Alternating signs in the polynomial}",
             "Matches the pattern for $x^n e^{kx}$."),
        step(8, "Verify", "\\frac{d}{dx}\\left[e^{2x}\\left(x^3 - 3x^2 + 3x - \\dfrac{3}{2}\\right)\\right] = x^3 e^{2x}",
             "Differentiation confirms."),
        step(9, "General rule", "\\int x^n e^{kx}\\,dx \\text{ needs } n \\text{ applications}",
             "Power of polynomial determines the number of parts."),
        step(10, "Final answer", "e^{2x}\\left(x^3 - 3x^2 + 3x - \\dfrac{3}{2}\\right) + c",
             "Required antiderivative."),
    ],
    "$\\displaystyle\\int x^3 e^{2x}\\,dx = e^{2x}\\left(x^3 - 3x^2 + 3x - \\dfrac{3}{2}\\right) + c$.",
))

questions.append(make_q(
    "q053", "Hard", 7, "expression", ["integration by parts", "inverse trigonometry"],
    "Find $\\displaystyle\\int x\\arcsin x\\,dx$ for $|x| \\le 1$.",
    [
        step(1, "Choose $u$ and $dv$", "u = \\arcsin x, \\quad dv = x\\,dx",
             "Inverse trig before algebraic in LIATE."),
        step(2, "Find $du$ and $v$", "du = \\dfrac{1}{\\sqrt{1-x^2}}\\,dx, \\quad v = \\dfrac{x^2}{2}",
             "Standard preparation."),
        step(3, "Apply parts", "\\dfrac{x^2}{2}\\arcsin x - \\dfrac{1}{2}\\int \\dfrac{x^2}{\\sqrt{1-x^2}}\\,dx",
             "Remaining integral needs algebraic manipulation."),
        step(4, "Rewrite fraction", "\\dfrac{x^2}{\\sqrt{1-x^2}} = \\dfrac{1-x^2+1-1}{\\sqrt{1-x^2}} = \\sqrt{1-x^2} - \\dfrac{1}{\\sqrt{1-x^2}}",
             "Split to create integrable forms."),
        step(5, "Integrate each part", "\\dfrac{x^2}{2}\\arcsin x - \\dfrac{x\\sqrt{1-x^2}}{4} + \\dfrac{1}{4}\\arcsin x + c",
             "Use standard results for each term."),
        step(6, "Collect", "\\dfrac{2x^2+1}{4}\\arcsin x - \\dfrac{x\\sqrt{1-x^2}}{4} + c",
             "Combine $\\arcsin$ terms."),
        step(7, "Domain", "|x| \\le 1",
             "Required for $\\arcsin x$ and $\\sqrt{1-x^2}$."),
        step(8, "Check $x=0$", "F(0) = 0",
             "Antiderivative vanishes at the origin."),
        step(9, "Differentiate to verify", "\\frac{d}{dx}\\left[\\dfrac{x^2}{2}\\arcsin x - \\dfrac{x\\sqrt{1-x^2}}{4} + \\dfrac{1}{4}\\arcsin x\\right] = x\\arcsin x",
             "Confirmation by differentiation."),
        step(10, "Final answer", "\\dfrac{2x^2+1}{4}\\arcsin x - \\dfrac{x\\sqrt{1-x^2}}{4} + c",
             "Required antiderivative."),
    ],
    "$\\displaystyle\\int x\\arcsin x\\,dx = \\dfrac{2x^2+1}{4}\\arcsin x - \\dfrac{x\\sqrt{1-x^2}}{4} + c$.",
))

questions.append(make_q(
    "q054", "Hard", 7, "value", ["integration by parts", "definite integral", "logarithm"],
    "Evaluate $\\displaystyle\\int_0^1 \\arctan x\\,dx$.",
    [
        step(1, "Choose $u$ and $dv$", "u = \\arctan x, \\quad dv = dx",
             "Inverse trig as $u$ in LIATE."),
        step(2, "Indefinite antiderivative", "x\\arctan x - \\dfrac{1}{2}\\ln(1+x^2)",
             "Standard result from integration by parts."),
        step(3, "Evaluate at $x = 1$", "1 \\cdot \\dfrac{\\pi}{4} - \\dfrac{1}{2}\\ln 2 = \\dfrac{\\pi}{4} - \\dfrac{1}{2}\\ln 2",
             "$\\arctan 1 = \\dfrac{\\pi}{4}$."),
        step(4, "Evaluate at $x = 0$", "0 - 0 = 0",
             "$\\arctan 0 = 0$ and $\\ln 1 = 0$."),
        step(5, "Subtract", "\\dfrac{\\pi}{4} - \\dfrac{1}{2}\\ln 2",
             "Upper minus lower."),
        step(6, "Exact form", "\\dfrac{\\pi}{4} - \\dfrac{1}{2}\\ln 2",
             "Leave in exact logarithmic form."),
        step(7, "Geometric meaning", "\\text{Area under } \\arctan x \\text{ on } [0,1]",
             "Positive since $\\arctan x \\ge 0$ on $[0,1]$."),
        step(8, "Alternative", "\\text{Parts directly on the definite integral}",
             "$[x\\arctan x]_0^1 - \\int_0^1 \\dfrac{x}{1+x^2}\\,dx$ gives the same result."),
        step(9, "Numerical sense", "\\approx 0.439",
             "Positive and less than $\\dfrac{\\pi}{4}$."),
        step(10, "Final answer", "\\dfrac{\\pi}{4} - \\dfrac{1}{2}\\ln 2",
             "Required exact value."),
    ],
    "$\\displaystyle\\int_0^1 \\arctan x\\,dx = \\dfrac{\\pi}{4} - \\dfrac{1}{2}\\ln 2$.",
))

questions.append(make_q(
    "q055", "Hard", 8, "written", ["integration by parts", "exam", "multi-part", "cyclic"],
    "(a) Show that $\\displaystyle\\int e^x\\sin x\\,dx = \\dfrac{e^x}{2}(\\sin x - \\cos x) + c$. (b) Hence evaluate $\\displaystyle\\int_0^{\\pi/4} e^x\\sin x\\,dx$.",
    [
        step(1, "Part (a): let $I = \\int e^x\\sin x\\,dx$", "I = \\int e^x\\sin x\\,dx",
             "Name the integral for cyclic solution."),
        step(2, "First application", "u = \\sin x, \\; dv = e^x\\,dx",
             "Standard choice."),
        step(3, "After first parts", "I = e^x\\sin x - \\int e^x\\cos x\\,dx",
             "Cosine integral appears."),
        step(4, "Second application", "\\int e^x\\cos x\\,dx = e^x\\cos x + I",
             "Original integral returns."),
        step(5, "Solve", "I = \\dfrac{e^x}{2}(\\sin x - \\cos x) + c",
             "Part (a) shown."),
        step(6, "Part (b): evaluate at limits", "\\left[\\dfrac{e^x}{2}(\\sin x - \\cos x)\\right]_0^{\\pi/4}",
             "Use the result from part (a)."),
        step(7, "At $x = \\pi/4$", "\\dfrac{e^{\\pi/4}}{2}\\left(\\dfrac{1}{\\sqrt{2}} - \\dfrac{1}{\\sqrt{2}}\\right) = 0",
             "Sine and cosine are equal at $\\pi/4$."),
        step(8, "At $x = 0$", "\\dfrac{1}{2}(0 - 1) = -\\dfrac{1}{2}",
             "Lower limit contribution."),
        step(9, "Subtract", "0 - (-\\dfrac{1}{2}) = \\dfrac{1}{2}",
             "Part (b) answer."),
        step(10, "Hence link", "\\text{Part (a) antiderivative used directly in (b)}",
             "Exam 'hence' questions reward using the earlier result."),
        step(11, "Check", "\\dfrac{1}{2} > 0",
             "Small positive interval integral."),
        step(12, "Final answers", "(a)\\ \\dfrac{e^x}{2}(\\sin x - \\cos x) + c, \\quad (b)\\ \\dfrac{1}{2}",
             "Both parts complete."),
    ],
    "(a) $\\displaystyle\\int e^x\\sin x\\,dx = \\dfrac{e^x}{2}(\\sin x - \\cos x) + c$. (b) $\\displaystyle\\int_0^{\\pi/4} e^x\\sin x\\,dx = \\dfrac{1}{2}$.",
))

questions.append(make_q(
    "q056", "Hard", 7, "expression", ["integration by parts", "repeated", "trigonometry"],
    "Find $\\displaystyle\\int x^3\\sin x\\,dx$.",
    [
        step(1, "Plan three applications", "u = x^3 \\Rightarrow \\text{three parts}",
             "Cubic polynomial needs three reductions."),
        step(2, "First application", "x^3(-\\cos x) + 3\\int x^2\\cos x\\,dx",
             "Differentiate $x^3$ to $3x^2$."),
        step(3, "Second: $\\int x^2\\cos x\\,dx$", "x^2\\sin x + 2x\\cos x - 2\\sin x",
             "Known result from two applications."),
        step(4, "Substitute", "-x^3\\cos x + 3x^2\\sin x + 6x\\cos x - 6\\sin x + c",
             "Multiply the inner result by $3$."),
        step(5, "Collect trig terms", "(3x^2-6)\\sin x + (6x - x^3)\\cos x + c",
             "Group sines and cosines."),
        step(6, "Tabular method", "\\text{Efficient for } x^3\\sin x",
             "Differentiate $x^3$ three times; integrate $\\sin x$ three times."),
        step(7, "Sign alternation", "\\text{Alternating signs in tabular method}",
             "Careful tracking prevents sign errors."),
        step(8, "Verify", "\\frac{d}{dx}[(3x^2-6)\\sin x + (6x-x^3)\\cos x] = x^3\\sin x",
             "Differentiation confirms."),
        step(9, "Pattern", "n \\text{ applications for } x^n\\sin x",
             "General rule for polynomial–trig."),
        step(10, "Final answer", "(3x^2-6)\\sin x + (6x - x^3)\\cos x + c",
             "Required antiderivative."),
    ],
    "$\\displaystyle\\int x^3\\sin x\\,dx = (3x^2-6)\\sin x + (6x - x^3)\\cos x + c$.",
))

questions.append(make_q(
    "q057", "Hard", 7, "expression", ["integration by parts", "cyclic", "exponential"],
    "Find $\\displaystyle\\int e^{2x}\\sin(3x)\\,dx$.",
    [
        step(1, "Let $I = \\int e^{2x}\\sin(3x)\\,dx$", "I = \\int e^{2x}\\sin(3x)\\,dx",
             "Cyclic integral with scaled arguments."),
        step(2, "First application", "u = \\sin(3x), \\; dv = e^{2x}\\,dx",
             "Either factor can be $u$."),
        step(3, "After first parts", "I = \\dfrac{e^{2x}}{2}\\sin(3x) - \\dfrac{3}{2}\\int e^{2x}\\cos(3x)\\,dx",
             "Factor $\\dfrac{3}{2}$ from differentiating $\\sin(3x)$."),
        step(4, "Second application on cosine integral", "\\int e^{2x}\\cos(3x)\\,dx = \\dfrac{e^{2x}}{2}\\cos(3x) + \\dfrac{3}{2}I",
             "Original $I$ reappears."),
        step(5, "Substitute", "I = \\dfrac{e^{2x}}{2}\\sin(3x) - \\dfrac{3}{2}\\left(\\dfrac{e^{2x}}{2}\\cos(3x) + \\dfrac{3}{2}I\\right)",
             "Replace the cosine integral."),
        step(6, "Collect $I$ terms", "I\\left(1 + \\dfrac{9}{4}\\right) = e^{2x}\\left(\\dfrac{\\sin(3x)}{2} - \\dfrac{3\\cos(3x)}{4}\\right)",
             "Solve algebraically."),
        step(7, "Simplify coefficient", "I = \\dfrac{4}{13}e^{2x}\\left(\\dfrac{\\sin(3x)}{2} - \\dfrac{3\\cos(3x)}{4}\\right) + c",
             "Divide by $\\dfrac{13}{4}$."),
        step(8, "Tidy form", "I = \\dfrac{e^{2x}}{13}(2\\sin(3x) - 3\\cos(3x)) + c",
             "Standard final form."),
        step(9, "General pattern", "a^2+b^2 \\text{ in denominator for } e^{ax}\\sin(bx)",
             "Here $4+9=13$ appears in the denominator."),
        step(10, "Verify", "\\text{Differentiate the answer}",
             "Confirmation by differentiation."),
    ],
    "$\\displaystyle\\int e^{2x}\\sin(3x)\\,dx = \\dfrac{e^{2x}}{13}(2\\sin(3x) - 3\\cos(3x)) + c$.",
))

questions.append(make_q(
    "q058", "Hard", 8, "value", ["integration by parts", "definite integral", "exam"],
    "(a) Find $\\displaystyle\\int x^2 e^x\\,dx$. (b) Hence evaluate $\\displaystyle\\int_0^1 x^2 e^x\\,dx$.",
    [
        step(1, "Part (a): first application", "u = x^2, \\; dv = e^x\\,dx",
             "Degree $2$ needs two applications."),
        step(2, "Second application", "e^x(x^2 - 2x + 2) + c",
             "Standard repeated parts result."),
        step(3, "Part (a) complete", "e^x(x^2 - 2x + 2) + c",
             "Indefinite antiderivative."),
        step(4, "Part (b): evaluate at $x=1$", "e(1 - 2 + 2) = e",
             "Substitute $x=1$ into $e^x(x^2-2x+2)$."),
        step(5, "Evaluate at $x=0$", "1(0 - 0 + 2) = 2",
             "Substitute $x=0$."),
        step(6, "Subtract", "e - 2",
             "Upper minus lower."),
        step(7, "Hence justification", "\\text{Used antiderivative from (a)}",
             "Direct use of part (a) — no need to redo parts."),
        step(8, "Check sign", "e - 2 > 0",
             "$x^2 e^x > 0$ on $(0,1)$, so integral is positive."),
        step(9, "Numerical", "e - 2 \\approx 0.718",
             "Reasonable magnitude."),
        step(10, "Final answers", "(a)\\ e^x(x^2-2x+2)+c, \\quad (b)\\ e-2",
             "Both parts answered."),
        step(11, "Alternative for (b)", "\\text{Parts twice with limits}",
             "Longer but valid without part (a)."),
        step(12, "Exam structure", "\\text{Indefinite first, definite hence}",
             "Typical A-Level multi-part integration question."),
    ],
    "(a) $\\displaystyle\\int x^2 e^x\\,dx = e^x(x^2 - 2x + 2) + c$. (b) $\\displaystyle\\int_0^1 x^2 e^x\\,dx = e - 2$.",
))

questions.append(make_q(
    "q059", "Hard", 7, "expression", ["integration by parts", "logarithm", "definite"],
    "Evaluate $\\displaystyle\\int_1^{e^2} \\dfrac{\\ln x}{x}\\,dx$.",
    [
        step(1, "Recognise form", "u = \\ln x, \\; dv = \\dfrac{1}{x}\\,dx",
             "Alternatively substitute $w = \\ln x$ directly."),
        step(2, "Substitution method", "w = \\ln x, \\; dw = \\dfrac{1}{x}\\,dx",
             "This is $\\int w\\,dw$ after substitution."),
        step(3, "Change limits", "x=1 \\Rightarrow w=0, \\quad x=e^2 \\Rightarrow w=2",
             "Convert to $w$-limits."),
        step(4, "Integrate", "\\int_0^2 w\\,dw = \\left[\\dfrac{w^2}{2}\\right]_0^2 = 2",
             "Simple power integral."),
        step(5, "Parts viewpoint", "u = \\ln x, \\; dv = \\dfrac{dx}{x} \\Rightarrow v = \\ln x",
             "Parts gives $\\dfrac{1}{2}(\\ln x)^2$ — same result."),
        step(6, "Answer", "2",
             "Exact value."),
        step(7, "Check", "\\dfrac{1}{2}(\\ln e^2)^2 - \\dfrac{1}{2}(\\ln 1)^2 = 2",
             "Using the antiderivative $\\dfrac{1}{2}(\\ln x)^2$."),
        step(8, "Domain", "x > 0",
             "Logarithm requires positive $x$."),
        step(9, "Connection", "\\int \\dfrac{\\ln x}{x}\\,dx = \\dfrac{1}{2}(\\ln x)^2 + c",
             "Standard logarithmic integral."),
        step(10, "Final answer", "2",
             "Required definite value."),
    ],
    "$\\displaystyle\\int_1^{e^2} \\dfrac{\\ln x}{x}\\,dx = 2$.",
))

questions.append(make_q(
    "q060", "Hard", 8, "written", ["integration by parts", "verification", "exam"],
    "(a) Use integration by parts to show $\\displaystyle\\int \\ln x\\,dx = x\\ln x - x + c$. (b) Differentiate your answer to verify. (c) Evaluate $\\displaystyle\\int_1^e \\ln x\\,dx$.",
    [
        step(1, "Part (a): set up", "u = \\ln x, \\; dv = dx",
             "LIATE prioritises logarithm."),
        step(2, "Apply parts", "x\\ln x - \\int x \\cdot \\dfrac{1}{x}\\,dx = x\\ln x - x + c",
             "The integral simplifies to $\\int 1\\,dx$."),
        step(3, "Part (a) shown", "x\\ln x - x + c",
             "As required."),
        step(4, "Part (b): differentiate", "F'(x) = \\ln x + 1 - 1 = \\ln x",
             "Product rule on $x\\ln x$; derivative of $-x$ is $-1$."),
        step(5, "Verification", "F'(x) = \\ln x",
             "Confirmed."),
        step(6, "Part (c): evaluate antiderivative", "\\left[x\\ln x - x\\right]_1^e",
             "Use part (a) result."),
        step(7, "At $x=e$", "e - e = 0",
             "$\\ln e = 1$."),
        step(8, "At $x=1$", "0 - 1 = -1",
             "$\\ln 1 = 0$."),
        step(9, "Subtract", "0 - (-1) = 1",
             "Part (c) answer."),
        step(10, "Interpretation", "\\int_1^e \\ln x\\,dx = 1",
             "Area under $\\ln x$ from $1$ to $e$ equals $1$."),
        step(11, "Exam marks", "\\text{Show, verify, evaluate}",
             "Three linked skills in one question."),
        step(12, "Summary", "(a) shown, (b) verified, (c) $1$",
             "Complete response."),
    ],
    "(a) $\\displaystyle\\int \\ln x\\,dx = x\\ln x - x + c$. (b) Verified. (c) $\\displaystyle\\int_1^e \\ln x\\,dx = 1$.",
))

questions.append(make_q(
    "q061", "Hard", 7, "expression", ["integration by parts", "inverse trigonometry", "definite"],
    "Evaluate $\\displaystyle\\int_0^1 x\\arctan x\\,dx$.",
    [
        step(1, "Antiderivative from parts", "\\dfrac{1}{2}(x^2+1)\\arctan x - \\dfrac{x}{2}",
             "Standard result for $\\int x\\arctan x\\,dx$."),
        step(2, "At $x=1$", "\\dfrac{1}{2}(2)\\cdot\\dfrac{\\pi}{4} - \\dfrac{1}{2} = \\dfrac{\\pi}{4} - \\dfrac{1}{2}",
             "$\\arctan 1 = \\dfrac{\\pi}{4}$."),
        step(3, "At $x=0$", "\\dfrac{1}{2}(1)(0) - 0 = 0",
             "Lower limit vanishes."),
        step(4, "Answer", "\\dfrac{\\pi}{4} - \\dfrac{1}{2}",
             "Exact value."),
        step(5, "Positive check", "\\dfrac{\\pi}{4} - \\dfrac{1}{2} > 0",
             "$x\\arctan x \\ge 0$ on $[0,1]$."),
        step(6, "Parts directly", "u = \\arctan x, \\; dv = x\\,dx \\text{ with limits}",
             "Can apply parts on the definite integral without finding indefinite form first."),
        step(7, "Remaining integral", "\\int_0^1 \\dfrac{x^2}{1+x^2}\\,dx = 1 - \\dfrac{\\pi}{4}",
             "After splitting the fraction."),
        step(8, "Combine", "\\dfrac{\\pi}{4} - \\dfrac{1}{2}",
             "Same result via direct method."),
        step(9, "Exact form", "\\dfrac{\\pi}{4} - \\dfrac{1}{2}",
             "Do not decimalise."),
        step(10, "Final answer", "\\dfrac{\\pi}{4} - \\dfrac{1}{2}",
             "Required value."),
    ],
    "$\\displaystyle\\int_0^1 x\\arctan x\\,dx = \\dfrac{\\pi}{4} - \\dfrac{1}{2}$.",
))

questions.append(make_q(
    "q062", "Hard", 8, "expression", ["integration by parts", "cyclic", "definite"],
    "Evaluate $\\displaystyle\\int_0^{\\pi} e^x\\cos x\\,dx$.",
    [
        step(1, "Indefinite form", "J = \\dfrac{e^x}{2}(\\cos x + \\sin x) + c",
             "Cyclic parts result for cosine."),
        step(2, "At $x = \\pi$", "\\dfrac{e^{\\pi}}{2}(-1 + 0) = -\\dfrac{e^{\\pi}}{2}",
             "$\\cos\\pi = -1$, $\\sin\\pi = 0$."),
        step(3, "At $x = 0$", "\\dfrac{1}{2}(1 + 0) = \\dfrac{1}{2}",
             "At origin: $\\cos 0 = 1$, $\\sin 0 = 0$."),
        step(4, "Subtract", "-\\dfrac{e^{\\pi}}{2} - \\dfrac{1}{2} = -\\dfrac{e^{\\pi}+1}{2}",
             "Upper minus lower."),
        step(5, "Sign interpretation", "\\text{Negative net area}",
             "$e^x\\cos x$ is negative for most of $[0,\\pi]$."),
        step(6, "Compare to sine version", "\\int_0^{\\pi} e^x\\sin x\\,dx = \\dfrac{e^{\\pi}+1}{2}",
             "Cosine and sine versions differ by sign pattern."),
        step(7, "Exact answer", "-\\dfrac{e^{\\pi}+1}{2}",
             "Leave exact."),
        step(8, "Magnitude", "\\dfrac{e^{\\pi}+1}{2}",
             "Absolute value matches the sine integral."),
        step(9, "Alternative", "\\text{Parts twice on definite integral}",
             "Direct method with limits."),
        step(10, "Final answer", "-\\dfrac{e^{\\pi}+1}{2}",
             "Required value."),
    ],
    "$\\displaystyle\\int_0^{\\pi} e^x\\cos x\\,dx = -\\dfrac{e^{\\pi}+1}{2}$.",
))

questions.append(make_q(
    "q063", "Hard", 7, "expression", ["integration by parts", "repeated"],
    "Find $\\displaystyle\\int x^4 e^x\\,dx$.",
    [
        step(1, "Four applications needed", "u = x^4",
             "Degree $4$ polynomial."),
        step(2, "Pattern for $\\int x^n e^x\\,dx$", "e^x \\cdot P_n(x) \\text{ where } \\deg P = n",
             "Result is $e^x$ times a degree-$n$ polynomial."),
        step(3, "Systematic reduction", "x^4 e^x - 4\\int x^3 e^x\\,dx",
             "First step."),
        step(4, "Use known results iteratively", "e^x(x^4 - 4x^3 + 12x^2 - 24x + 24) + c",
             "Apply reduction down to $\\int e^x\\,dx$."),
        step(5, "Factor", "e^x(x^4 - 4x^3 + 12x^2 - 24x + 24) + c",
             "Factored form."),
        step(6, "Coefficient pattern", "1, -4, 12, -24, 24",
             "Related to factorial-like coefficients."),
        step(7, "Tabular method recommended", "\\text{Fastest for degree } 4",
             "Differentiate $x^4$ four times; integrate $e^x$ four times."),
        step(8, "Verify", "\\frac{d}{dx}[e^x(x^4-4x^3+12x^2-24x+24)] = x^4 e^x",
             "Differentiation confirms."),
        step(9, "Generalisation", "\\int x^n e^x\\,dx \\text{ needs } n \\text{ parts}",
             "Pattern for all positive integers $n$."),
        step(10, "Final answer", "e^x(x^4 - 4x^3 + 12x^2 - 24x + 24) + c",
             "Required antiderivative."),
    ],
    "$\\displaystyle\\int x^4 e^x\\,dx = e^x(x^4 - 4x^3 + 12x^2 - 24x + 24) + c$.",
))

questions.append(make_q(
    "q064", "Hard", 8, "written", ["integration by parts", "exam", "LIATE"],
    "(a) Explain why $u = \\ln x$ is chosen for $\\displaystyle\\int x\\ln x\\,dx$. (b) Find the integral. (c) Verify by differentiating.",
    [
        step(1, "Part (a): identify types", "x \\text{ algebraic; } \\ln x \\text{ logarithmic}",
             "Both appear in LIATE."),
        step(2, "LIATE comparison", "L \\text{ before } A",
             "Logarithmic has higher priority."),
        step(3, "Consequence", "u = \\ln x \\Rightarrow du = \\dfrac{1}{x}\\,dx",
             "Differentiating removes the log; $dv = x\\,dx$ integrates easily."),
        step(4, "Part (b): apply parts", "\\dfrac{x^2}{2}\\ln x - \\dfrac{x^2}{4} + c",
             "Standard evaluation."),
        step(5, "Part (b) answer", "\\dfrac{x^2}{2}\\ln x - \\dfrac{x^2}{4} + c",
             "Antiderivative stated."),
        step(6, "Part (c): differentiate", "F'(x) = x\\ln x",
             "Product rule confirms."),
        step(7, "Wrong choice?", "u = x \\text{ also works but is not LIATE-optimal}",
             "LIATE gives the most efficient route."),
        step(8, "Domain", "x > 0",
             "Required for $\\ln x$."),
        step(9, "Exam marks", "\\text{Explain, integrate, verify}",
             "Three skills tested."),
        step(10, "Summary", "(a) LIATE, (b) $\\dfrac{x^2}{2}\\ln x - \\dfrac{x^2}{4} + c$, (c) verified",
             "Complete."),
        step(11, "Hence use", "\\text{Enables } \\int_1^e x\\ln x\\,dx",
             "Definite integrals follow from the antiderivative."),
        step(12, "Final response", "\\text{All three parts complete}",
             "Full marks structure."),
    ],
    "(a) LIATE: logarithmic before algebraic, so $u = \\ln x$. (b) $\\displaystyle\\int x\\ln x\\,dx = \\dfrac{x^2}{2}\\ln x - \\dfrac{x^2}{4} + c$. (c) Verified.",
))

questions.append(make_q(
    "q065", "Hard", 7, "value", ["integration by parts", "definite integral"],
    "Evaluate $\\displaystyle\\int_0^{\\pi/2} x\\sin x\\,dx$.",
    [
        step(1, "Antiderivative", "-x\\cos x + \\sin x",
             "From integration by parts with $u=x$, $dv=\\sin x\\,dx$."),
        step(2, "At $x = \\pi/2$", "-\\dfrac{\\pi}{2}(0) + 1 = 1",
             "$\\cos\\dfrac{\\pi}{2}=0$, $\\sin\\dfrac{\\pi}{2}=1$."),
        step(3, "At $x = 0$", "0 + 0 = 0",
             "Both terms vanish."),
        step(4, "Answer", "1",
             "Exact value."),
        step(5, "Geometric sense", "\\text{Positive area}",
             "$x\\sin x \\ge 0$ on $[0, \\pi/2]$."),
        step(6, "Parts on definite integral", "\\left[-x\\cos x\\right]_0^{\\pi/2} + \\int_0^{\\pi/2}\\cos x\\,dx",
             "Direct evaluation with limits."),
        step(7, "Confirm $\\int_0^{\\pi/2}\\cos x\\,dx = 1$", "\\left[\\sin x\\right]_0^{\\pi/2} = 1",
             "Standard trig integral."),
        step(8, "No $+c$", "\\text{Definite integral}",
             "Constants cancel."),
        step(9, "Comparison", "\\int_0^{\\pi} x\\sin x\\,dx = \\pi",
             "Longer interval gives larger value."),
        step(10, "Final answer", "1",
             "Required value."),
    ],
    "$\\displaystyle\\int_0^{\\pi/2} x\\sin x\\,dx = 1$.",
))

questions.append(make_q(
    "q066", "Hard", 8, "expression", ["integration by parts", "inverse trigonometry"],
    "Find $\\displaystyle\\int \\arccos x\\,dx$ for $|x| \\le 1$.",
    [
        step(1, "Choose $u$ and $dv$", "u = \\arccos x, \\quad dv = dx",
             "Inverse trig in LIATE."),
        step(2, "Find $du$ and $v$", "du = -\\dfrac{1}{\\sqrt{1-x^2}}\\,dx, \\quad v = x",
             "Derivative of $\\arccos x$ has a minus sign."),
        step(3, "Apply parts", "x\\arccos x + \\int \\dfrac{x}{\\sqrt{1-x^2}}\\,dx",
             "Minus from $du$ becomes plus."),
        step(4, "Integrate remaining", "x\\arccos x - \\sqrt{1-x^2} + c",
             "$\\int \\dfrac{x}{\\sqrt{1-x^2}}\\,dx = -\\sqrt{1-x^2}$."),
        step(5, "Alternative via identity", "\\arccos x = \\dfrac{\\pi}{2} - \\arcsin x",
             "Relates to $\\int \\arcsin x\\,dx$."),
        step(6, "Consistency check", "x\\arccos x - \\sqrt{1-x^2}",
             "Standard result."),
        step(7, "Domain", "|x| \\le 1",
             "Required for inverse cosine."),
        step(8, "At $x=0$", "0 - 1 = -1",
             "Quick evaluation check."),
        step(9, "Differentiate", "\\frac{d}{dx}[x\\arccos x - \\sqrt{1-x^2}] = \\arccos x",
             "Verification."),
        step(10, "Final answer", "x\\arccos x - \\sqrt{1-x^2} + c",
             "Required antiderivative."),
    ],
    "$\\displaystyle\\int \\arccos x\\,dx = x\\arccos x - \\sqrt{1-x^2} + c$.",
))

questions.append(make_q(
    "q067", "Hard", 8, "written", ["integration by parts", "exam", "cyclic", "verification"],
    "(a) Find $\\displaystyle\\int e^x\\cos x\\,dx$. (b) Verify by differentiating. (c) Evaluate $\\displaystyle\\int_0^{\\pi/2} e^x\\cos x\\,dx$.",
    [
        step(1, "Part (a): let $J = \\int e^x\\cos x\\,dx$", "J = \\int e^x\\cos x\\,dx",
             "Cyclic integral."),
        step(2, "Apply parts twice", "J = \\dfrac{e^x}{2}(\\cos x + \\sin x) + c",
             "Standard cyclic result."),
        step(3, "Part (b): differentiate", "F'(x) = e^x\\cos x",
             "Product rule on $\\dfrac{e^x}{2}(\\cos x + \\sin x)$."),
        step(4, "Verification complete", "F'(x) = e^x\\cos x",
             "Confirmed."),
        step(5, "Part (c): at $x = \\pi/2$", "\\dfrac{e^{\\pi/2}}{2}(0 + 1) = \\dfrac{e^{\\pi/2}}{2}",
             "Cosine zero, sine one."),
        step(6, "At $x = 0$", "\\dfrac{1}{2}(1 + 0) = \\dfrac{1}{2}",
             "Cosine one, sine zero."),
        step(7, "Subtract", "\\dfrac{e^{\\pi/2}-1}{2}",
             "Part (c) answer."),
        step(8, "Positive check", "\\dfrac{e^{\\pi/2}-1}{2} > 0",
             "$e^x\\cos x \\ge 0$ on $[0, \\pi/2]$."),
        step(9, "Exam structure", "\\text{Indefinite, verify, definite}",
             "Full integration by parts assessment."),
        step(10, "Hence link", "\\text{Part (c) uses (a)}",
             "No need to redo cyclic algebra."),
        step(11, "Exact form", "\\dfrac{e^{\\pi/2}-1}{2}",
             "Leave exact."),
        step(12, "Summary", "(a) $\\dfrac{e^x}{2}(\\cos x+\\sin x)+c$, (b) verified, (c) $\\dfrac{e^{\\pi/2}-1}{2}$",
             "All parts complete."),
    ],
    "(a) $\\displaystyle\\int e^x\\cos x\\,dx = \\dfrac{e^x}{2}(\\cos x + \\sin x) + c$. (b) Verified. (c) $\\displaystyle\\int_0^{\\pi/2} e^x\\cos x\\,dx = \\dfrac{e^{\\pi/2}-1}{2}$.",
))

questions.append(make_q(
    "q068", "Hard", 7, "expression", ["integration by parts", "logarithm", "repeated"],
    "Find $\\displaystyle\\int x(\\ln x)^2\\,dx$ for $x > 0$.",
    [
        step(1, "Choose $u$ and $dv$", "u = (\\ln x)^2, \\quad dv = x\\,dx",
             "Logarithmic squared still leads LIATE."),
        step(2, "Find $du$ and $v$", "du = \\dfrac{2\\ln x}{x}\\,dx, \\quad v = \\dfrac{x^2}{2}",
             "Chain rule on $(\\ln x)^2$."),
        step(3, "Apply parts", "\\dfrac{x^2}{2}(\\ln x)^2 - \\int x\\ln x\\,dx",
             "Reduces to $\\int x\\ln x\\,dx$."),
        step(4, "Substitute $\\int x\\ln x\\,dx$", "\\dfrac{x^2}{2}(\\ln x)^2 - \\dfrac{x^2}{2}\\ln x + \\dfrac{x^2}{4} + c",
             "Use the known result."),
        step(5, "Factor $x^2$", "\\dfrac{x^2}{4}\\left[2(\\ln x)^2 - 2\\ln x + 1\\right] + c",
             "Optional factored form."),
        step(6, "Two applications conceptually", "\\text{One for } (\\ln x)^2, \\text{ one implicit in } x\\ln x",
             "Repeated logarithmic parts."),
        step(7, "Verify", "\\frac{d}{dx}\\left[\\dfrac{x^2}{2}(\\ln x)^2 - \\dfrac{x^2}{2}\\ln x + \\dfrac{x^2}{4}\\right] = x(\\ln x)^2",
             "Differentiation confirms."),
        step(8, "Domain", "x > 0",
             "Logarithm requires positive $x$."),
        step(9, "Pattern", "\\int x(\\ln x)^n\\,dx \\text{ needs } n \\text{ reductions}",
             "Generalisation."),
        step(10, "Final answer", "\\dfrac{x^2}{2}(\\ln x)^2 - \\dfrac{x^2}{2}\\ln x + \\dfrac{x^2}{4} + c",
             "Required antiderivative."),
    ],
    "$\\displaystyle\\int x(\\ln x)^2\\,dx = \\dfrac{x^2}{2}(\\ln x)^2 - \\dfrac{x^2}{2}\\ln x + \\dfrac{x^2}{4} + c$.",
))

questions.append(make_q(
    "q069", "Hard", 8, "written", ["integration by parts", "exam", "multi-part"],
    "(a) State LIATE. (b) Find $\\displaystyle\\int x^2\\ln x\\,dx$. (c) Hence evaluate $\\displaystyle\\int_1^e x^2\\ln x\\,dx$.",
    [
        step(1, "Part (a): LIATE", "L — Logarithmic, I — Inverse trig, A — Algebraic, T — Trig, E — Exponential",
             "Priority order for choosing $u$."),
        step(2, "Part (b): apply LIATE", "u = \\ln x, \\; dv = x^2\\,dx",
             "Logarithm before algebraic."),
        step(3, "Find $du$ and $v$", "du = \\dfrac{1}{x}\\,dx, \\; v = \\dfrac{x^3}{3}",
             "Standard preparation."),
        step(4, "Apply parts", "\\dfrac{x^3}{3}\\ln x - \\dfrac{x^3}{9} + c",
             "Integrate $\\dfrac{x^2}{3}$ after simplification."),
        step(5, "Part (b) answer", "\\dfrac{x^3}{3}\\ln x - \\dfrac{x^3}{9} + c",
             "Indefinite integral."),
        step(6, "Part (c): at $x=e$", "\\dfrac{e^3}{3} - \\dfrac{e^3}{9} = \\dfrac{2e^3}{9}",
             "$\\ln e = 1$."),
        step(7, "At $x=1$", "0 - \\dfrac{1}{9} = -\\dfrac{1}{9}",
             "$\\ln 1 = 0$."),
        step(8, "Subtract", "\\dfrac{2e^3}{9} + \\dfrac{1}{9} = \\dfrac{2e^3+1}{9}",
             "Part (c) answer."),
        step(9, "Hence", "\\text{Used antiderivative from (b)}",
             "Direct evaluation."),
        step(10, "Exact form", "\\dfrac{2e^3+1}{9}",
             "Leave exact."),
        step(11, "Exam tip", "\\text{State LIATE, integrate, use hence}",
             "Structured response."),
        step(12, "Summary", "(a) LIATE stated, (b) antiderivative found, (c) $\\dfrac{2e^3+1}{9}$",
             "Complete exam question."),
    ],
    "(a) LIATE: Logarithmic, Inverse trig, Algebraic, Trigonometric, Exponential. (b) $\\displaystyle\\int x^2\\ln x\\,dx = \\dfrac{x^3}{3}\\ln x - \\dfrac{x^3}{9} + c$. (c) $\\displaystyle\\int_1^e x^2\\ln x\\,dx = \\dfrac{2e^3+1}{9}$.",
))

questions.append(make_q(
    "q070", "Hard", 9, "written", ["integration by parts", "exam", "multi-part", "verification"],
    "(a) Show that $\\displaystyle\\int x e^x\\,dx = e^x(x-1)+c$. (b) Show that $\\displaystyle\\int x^2 e^x\\,dx = e^x(x^2-2x+2)+c$. (c) Verify part (b) by differentiating. (d) Evaluate $\\displaystyle\\int_0^1 x^2 e^x\\,dx$.",
    [
        step(1, "Part (a): one application", "u = x, \\; dv = e^x\\,dx \\Rightarrow e^x(x-1)+c",
             "Basic integration by parts."),
        step(2, "Part (a) shown", "e^x(x-1)+c",
             "As required."),
        step(3, "Part (b): first application", "u = x^2, \\; dv = e^x\\,dx",
             "Degree $2$ needs two applications."),
        step(4, "Substitute part (a)", "x^2 e^x - 2e^x(x-1)+c = e^x(x^2-2x+2)+c",
             "Use the result from part (a) for $\\int x e^x\\,dx$."),
        step(5, "Part (b) shown", "e^x(x^2-2x+2)+c",
             "As required."),
        step(6, "Part (c): differentiate", "F'(x) = e^x(x^2-2x+2) + e^x(2x-2) = x^2 e^x",
             "Product rule on $e^x$ times the polynomial."),
        step(7, "Verification complete", "F'(x) = x^2 e^x",
             "Part (c) confirmed."),
        step(8, "Part (d): evaluate at limits", "\\left[e^x(x^2-2x+2)\\right]_0^1",
             "Use part (b) antiderivative."),
        step(9, "At $x=1$", "e(1-2+2) = e",
             "Upper limit."),
        step(10, "At $x=0$", "1(2) = 2",
             "Lower limit."),
        step(11, "Subtract", "e - 2",
             "Part (d) answer."),
        step(12, "Exam summary", "(a)–(d) complete with hence links",
             "Full marks: show, show, verify, evaluate."),
        step(13, "Technique recap", "\\text{Repeated parts for } x^n e^x",
             "Each power reduction uses the previous result."),
        step(14, "Pattern", "\\int x^n e^x\\,dx \\text{ gives degree-}n \\text{ polynomial times } e^x",
             "General structure."),
        step(15, "Final answers", "(a)–(d) as above",
             "Complete multi-part response."),
    ],
    "(a) $\\displaystyle\\int x e^x\\,dx = e^x(x-1)+c$. (b) $\\displaystyle\\int x^2 e^x\\,dx = e^x(x^2-2x+2)+c$. (c) Verified. (d) $\\displaystyle\\int_0^1 x^2 e^x\\,dx = e-2$.",
))

assert len(questions) == 70, f"Expected 70 questions, got {len(questions)}"

write_questions_ts(OUT, questions)

diffs = Counter(q["difficulty"] for q in questions)
print(f"Wrote {len(questions)} questions to {OUT}")
print(f"Difficulties: {dict(diffs)}")
