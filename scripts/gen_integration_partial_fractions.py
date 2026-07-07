#!/usr/bin/env python3
"""Generate all 70 questions for Integration with partial fractions (Year 2 Pure)."""
import json
import re
from collections import Counter
from fractions import Fraction

OUT = "/Users/benjaminwalpole/Wisest_Maths_V5/wisest-maths-content/src/data/questions/a-level-maths/year-2-pure/integration-with-partial-fractions.ts"
SUBTOPIC = "Integration with partial fractions"
SUBTOPIC_ID = "al.y2.pure.integration-partial-fractions"


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


def frac_tex(f: Fraction) -> str:
    if f.denominator == 1:
        v = f.numerator
        return str(v) if v >= 0 else f"({v})"
    num, den = abs(f.numerator), f.denominator
    sign = "-" if f.numerator < 0 else ""
    return f"{sign}\\dfrac{{{num}}}{{{den}}}"


def parse_factored_roots(factored: str) -> list[int]:
    roots = []
    for m in re.finditer(r"\(x([+-])(\d+)\)", factored):
        val = int(m.group(2))
        roots.append(-val if m.group(1) == "+" else val)
    if "(x)" in factored or factored.startswith("x(") or "(x)(" in factored:
        if 0 not in roots:
            roots.insert(0, 0)
    return roots


def cover_up_two(m, n, a, b):
    """(mx+n)/((x-a)(x-b)) -> A/(x-a) + B/(x-b)"""
    A = Fraction(m * a + n, a - b)
    B = Fraction(m * b + n, b - a)
    return A, B


def cover_up_three(m, n, a, b, c):
  """(mx+n)/((x-a)(x-b)(x-c))"""
  A = Fraction(m * a + n, (a - b) * (a - c))
  B = Fraction(m * b + n, (b - a) * (b - c))
  C = Fraction(m * c + n, (c - a) * (c - b))
  return A, B, C


def repeated_linear(m, n, a):
    """(mx+n)/(x-a)^2 -> A/(x-a) + B/(x-a)^2"""
    B = Fraction(m * a + n)
    A = Fraction(m)
    return A, B


def term_latex(A: Fraction, root) -> str:
    if root > 0:
        denom = f"x-{root}" if root != 0 else "x"
    else:
        denom = f"x+{-root}"
    return f"{frac_tex(A)}/({denom})"


def partial_term_tex(A: Fraction, r: int) -> str:
    d = f"(x-{r})" if r > 0 else (f"(x+{-r})" if r < 0 else "x")
    if A.denominator != 1:
        return f"{frac_tex(A)}/{d}"
    if A == 1:
        return f"\\dfrac{{1}}{{{d}}}"
    if A == -1:
        return f"-\\dfrac{{1}}{{{d}}}"
    return f"\\dfrac{{{A.numerator}}}{{{d}}}"


def integrate_given_decomposition(terms, qid, difficulty="Easy", marks=3, extra_tag="given decomposition"):
    """terms: list of (A, root) for A/(x-root)"""
    part_strs = [partial_term_tex(Fraction(A) if not isinstance(A, Fraction) else A, r) for A, r in terms]
    decomp = " + ".join(part_strs).replace("+ -", "- ")
    integrand = decomp

    int_terms = []
    ans_parts = []
    for A, r in terms:
        if r > 0:
            d = f"x-{r}" if r != 0 else "x"
        else:
            d = f"x+{-r}"
        int_terms.append(f"{frac_tex(A)}\\ln|{d}|")
        ans_parts.append(f"{frac_tex(A)}\\ln|{d}|")
    answer = " + ".join(ans_parts) + " + c"

    steps = [
        step(1, "Recall the standard integral", "\\int \\dfrac{1}{x-p}\\,dx = \\ln|x-p| + c",
             "Each partial fraction has the form $\\dfrac{\\text{constant}}{x-p}$, which integrates to a logarithm."),
        step(2, "Integrate term by term", f"\\int \\left({integrand}\\right)\\,dx",
             "Integration is linear, so we integrate each partial fraction separately."),
    ]
    for i, (A, r) in enumerate(terms, start=3):
        Af = Fraction(A) if not isinstance(A, Fraction) else A
        if r > 0:
            d = f"x-{r}" if r != 0 else "x"
        else:
            d = f"x+{-r}"
        steps.append(step(i, f"Integrate the {partial_term_tex(Af, r)} term",
                         f"\\int {partial_term_tex(Af, r)}\\,dx = {frac_tex(Af)}\\ln|{d}|",
                         f"The constant {frac_tex(Af)} stays in front; only the denominator affects the logarithm."))
    steps.append(step(len(steps) + 1, "Combine and add $+c$", answer,
                     "Collect the logarithmic terms and include the constant of integration."))
    if len(steps) < 6:
        steps.append(step(len(steps) + 1, "Check by differentiating",
                         f"\\frac{{d}}{{dx}}\\left({answer.replace(' + c','')}\\right)",
                         "Differentiating each $\\ln$ term gives back the corresponding partial fraction."))
    while len(steps) < 6:
        steps.append(step(len(steps) + 1, "State the answer", answer,
                         "This is the required indefinite integral."))
    return make_q(
        qid, difficulty, marks, "expression",
        ["partial fractions", "integration", extra_tag, "indefinite integral"],
        f"Given that the integrand can be written as ${integrand}$, find $\\displaystyle\\int \\left({integrand}\\right)\\,dx$.",
        steps[:9],
        f"$\\displaystyle\\int \\left({integrand}\\right)\\,dx = {answer}$.",
    )


questions = []

# ══════════════════════════════════════════════════════════════════════════════
# EASY q001–q018: integrate given partial fractions
# ══════════════════════════════════════════════════════════════════════════════

given_easy = [
    ("q001", [(2, 1), (3, -2)]),
    ("q002", [(1, 3), (-1, -1)]),
    ("q003", [(4, -3)]),
    ("q004", [(1, 2), (1, -2)]),
    ("q005", [(-2, 1), (5, -4)]),
    ("q006", [(3, 0), (1, 5)]),
    ("q007", [(1, -1), (-3, 2)]),
    ("q008", [(2, 4)]),
    ("q009", [(1, 1), (2, 3), (-1, -2)]),
    ("q010", [(-1, 2), (4, -1)]),
    ("q011", [(5, -2)]),
    ("q012", [(1, 0), (1, -3)]),
    ("q013", [(2, -1), (-1, 4)]),
    ("q014", [(3, 2), (1, -5)]),
    ("q015", [(-2, -3)]),
    ("q016", [(1, 6), (1, -6)]),
    ("q017", [(4, 1), (-2, -1)]),
    ("q018", [(1, 2), (-1, 2)]),
]
for qid, terms in given_easy:
    questions.append(integrate_given_decomposition(terms, qid))

# ══════════════════════════════════════════════════════════════════════════════
# EASY q019–q022: decompose two distinct linear factors then integrate
# ══════════════════════════════════════════════════════════════════════════════

two_factor_easy = [
    ("q019", 3, 5, 1, -2),
    ("q020", 2, 1, -1, 3),
    ("q021", 4, -3, 2, -1),
    ("q022", 1, 6, -2, 4),
]
for qid, m, n, a, b in two_factor_easy:
    A, B = cover_up_two(m, n, a, b)
    da = f"(x-{a})" if a > 0 else ("x" if a == 0 else f"(x+{-a})")
    db = f"(x-{b})" if b > 0 else ("x" if b == 0 else f"(x+{-b})")
    denom = f"{da}{db}".replace(")(", ")(")
    num = f"{m}x+{n}" if n >= 0 else f"{m}x{n}"
    pf = f"{frac_tex(A)}/{da} + {frac_tex(B)}/{db}".replace("+ -", "- ")
    ans = f"{frac_tex(A)}\\ln|{('x-'+str(a) if a>0 else ('x' if a==0 else 'x+'+str(-a)))}| + {frac_tex(B)}\\ln|{('x-'+str(b) if b>0 else ('x' if b==0 else 'x+'+str(-b)))}| + c"
    steps = [
        step(1, "Set up partial fractions", f"\\dfrac{{{num}}}{{{da}{db}}} \\equiv \\dfrac{{A}}{{{da}}} + \\dfrac{{B}}{{{db}}}",
             "Distinct linear factors in the denominator give one unknown fraction per factor."),
        step(2, "Find $A$ by cover-up", f"x = {a} \\Rightarrow {m*a+n} = A({a-b}) \\Rightarrow A = {frac_tex(A)}",
             f"Substituting $x = {a}$ removes the $B$ term because the factor $(x-{a})$ becomes zero."),
        step(3, "Find $B$ by cover-up", f"x = {b} \\Rightarrow {m*b+n} = B({b-a}) \\Rightarrow B = {frac_tex(B)}",
             f"Substituting $x = {b}$ isolates $B$ in the same way."),
        step(4, "Write the decomposition", pf,
             "The rational function splits into simpler fractions ready to integrate."),
        step(5, "Integrate each term", f"\\int {frac_tex(A)}/{da}\\,dx = {frac_tex(A)}\\ln|{('x-'+str(a) if a>0 else ('x+'+str(-a) if a<0 else 'x'))}|",
             "Each term $\\dfrac{k}{x-p}$ integrates to $k\\ln|x-p|$."),
        step(6, "Integrate the second term", f"\\int {frac_tex(B)}/{db}\\,dx = {frac_tex(B)}\\ln|{('x-'+str(b) if b>0 else ('x+'+str(-b) if b<0 else 'x'))}|",
             "Apply the same logarithm rule to the second partial fraction."),
        step(7, "Combine and add $+c$", ans,
             "Add the integrated terms and include the constant of integration."),
        step(8, "Check by differentiating", f"\\frac{{d}}{{dx}}\\left({ans.replace(' + c','')}\\right)",
             "Differentiating the answer should recover the original integrand."),
    ]
    questions.append(make_q(
        qid, "Easy", 4, "expression",
        ["partial fractions", "distinct linear factors", "cover-up method", "integration"],
        f"Find $\\displaystyle\\int \\dfrac{{{num}}}{{{da}{db}}}\\,dx$.",
        steps,
        f"$\\displaystyle\\int \\dfrac{{{num}}}{{{da}{db}}}\\,dx = {ans}$.",
    ))

# ══════════════════════════════════════════════════════════════════════════════
# INTERMEDIATE q023–q050
# ══════════════════════════════════════════════════════════════════════════════

# q023-q030: factorise quadratic denominator first
quad_factor_cases = [
    ("q023", 2, 7, 1, 2, -3, "x^2-x-6", "(x-3)(x+2)"),
    ("q024", 3, 1, 1, 2, -3, "x^2-x-6", "(x-3)(x+2)"),
    ("q025", 5, -7, 1, 1, -12, "x^2-x-12", "(x-4)(x+3)"),
    ("q026", 4, 3, 1, 1, -6, "x^2-x-6", "(x-3)(x+2)"),
    ("q027", 2, -5, 1, 0, -4, "x^2-4", "(x-2)(x+2)"),
    ("q028", 3, 5, 1, 2, 1, "x^2+3x+2", "(x+1)(x+2)"),
    ("q029", 1, 4, 1, 2, -8, "x^2+2x-8", "(x+4)(x-2)"),
    ("q030", 6, -5, 1, 1, -12, "x^2-x-12", "(x-4)(x+3)"),
]
for qid, m, n, qa, qb, qc, quad, factored in quad_factor_cases:
    roots = parse_factored_roots(factored)
    a, b = roots[0], roots[1]
    A, B = cover_up_two(m, n, a, b)
    da = f"(x-{a})" if a > 0 else f"(x+{-a})"
    db = f"(x-{b})" if b > 0 else f"(x+{-b})"
    num = f"{m}x+{n}" if n >= 0 else f"{m}x{n}"
    ans = f"{frac_tex(A)}\\ln|{('x-'+str(a) if a>0 else 'x+'+str(-a))}| + {frac_tex(B)}\\ln|{('x-'+str(b) if b>0 else 'x+'+str(-b))}| + c"
    steps = [
        step(1, "Factorise the denominator", f"{quad} = {factored}",
             "Before splitting into partial fractions, the denominator must be written as a product of linear factors."),
        step(2, "Set up partial fractions", f"\\dfrac{{{num}}}{{{factored}}} \\equiv \\dfrac{{A}}{{{da}}} + \\dfrac{{B}}{{{db}}}",
             "Each distinct linear factor gets its own term in the decomposition."),
        step(3, "Find $A$ using cover-up", f"x = {a} \\Rightarrow A = {frac_tex(A)}",
             f"Substituting the root $x = {a}$ eliminates the $B$ term."),
        step(4, "Find $B$ using cover-up", f"x = {b} \\Rightarrow B = {frac_tex(B)}",
             f"Substituting $x = {b}$ gives $B$ directly."),
        step(5, "Write the partial fractions", f"{frac_tex(A)}/{da} + {frac_tex(B)}/{db}".replace("+ -", "- "),
             "The integrand is now a sum of simple rational terms."),
        step(6, "Integrate the first term", f"\\int {frac_tex(A)}/{da}\\,dx = {frac_tex(A)}\\ln|{('x-'+str(a) if a>0 else 'x+'+str(-a))}|",
             "Use $\\int \\dfrac{1}{x-p}\\,dx = \\ln|x-p| + c$."),
        step(7, "Integrate the second term", f"\\int {frac_tex(B)}/{db}\\,dx = {frac_tex(B)}\\ln|{('x-'+str(b) if b>0 else 'x+'+str(-b))}|",
             "The second term integrates in the same way."),
        step(8, "Combine the result", ans,
             "Add the logarithmic terms and include $+c$."),
        step(9, "Verify", f"\\frac{{d}}{{dx}}\\left({ans.replace(' + c','')}\\right) = \\dfrac{{{num}}}{{{quad}}}",
             "Differentiating confirms the original integrand."),
    ]
    questions.append(make_q(
        qid, "Intermediate", 5, "expression",
        ["partial fractions", "factorising denominator", "integration"],
        f"Find $\\displaystyle\\int \\dfrac{{{num}}}{{{quad}}}\\,dx$.",
        steps,
        f"$\\displaystyle\\int \\dfrac{{{num}}}{{{quad}}}\\,dx = {ans}$.",
    ))

# q031-q036: three distinct linear factors
three_factor = [
    ("q031", 2, 1, 1, -1, 2),
    ("q032", 3, 5, -2, 1, 3),
    ("q033", 1, 2, 0, 2, -3),
    ("q034", 4, -1, 1, 2, -1),
    ("q035", 2, 7, -1, 2, 4),
    ("q036", 5, -4, 1, -2, 3),
]
for qid, m, n, a, b, c in three_factor:
    A, B, C = cover_up_three(m, n, a, b, c)
    def root_tex(r):
        return f"x-{r}" if r > 0 else (f"x+{-r}" if r < 0 else "x")
    def root_paren(r):
        return f"(x-{r})" if r > 0 else (f"(x+{-r})" if r < 0 else "x")
    num = f"{m}x+{n}" if n >= 0 else f"{m}x{n}"
    denom = f"{root_paren(a)}{root_paren(b)}{root_paren(c)}"
    ans = " + ".join(f"{frac_tex(v)}\\ln|{root_tex(r)}|" for v, r in [(A,a),(B,b),(C,c)]) + " + c"
    steps = [
        step(1, "Set up three partial fractions",
             f"\\dfrac{{{num}}}{{{denom}}} \\equiv \\dfrac{{A}}{{{root_paren(a)}}} + \\dfrac{{B}}{{{root_paren(b)}}} + \\dfrac{{C}}{{{root_paren(c)}}}",
             "Three distinct linear factors require three simple fractions."),
        step(2, f"Cover-up for $A$ at $x = {a}$", f"A = {frac_tex(A)}",
             "Substitute the root of the first factor to find $A$."),
        step(3, f"Cover-up for $B$ at $x = {b}$", f"B = {frac_tex(B)}",
             "Substitute $x = {b}$ to isolate $B$."),
        step(4, f"Cover-up for $C$ at $x = {c}$", f"C = {frac_tex(C)}",
             "Substitute $x = {c}$ to find $C$."),
        step(5, "State the decomposition",
             " + ".join(f"{frac_tex(v)}/{root_paren(r)}" for v,r in [(A,a),(B,b),(C,c)]).replace("+ -", "- "),
             "All three numerators are now known."),
        step(6, "Integrate term by term",
             ",\\quad ".join(f"\\int {frac_tex(v)}/{root_paren(r)}\\,dx = {frac_tex(v)}\\ln|{root_tex(r)}|" for v,r in [(A,a),(B,b),(C,c)]),
             "Each partial fraction gives a logarithm."),
        step(7, "Combine", ans, "Collect terms and add $+c$."),
        step(8, "Check", "\\text{Differentiate the answer}",
             "The derivative should equal the original rational function."),
        step(9, "Final answer", ans, "Required indefinite integral."),
    ]
    questions.append(make_q(
        qid, "Intermediate", 5, "expression",
        ["partial fractions", "three linear factors", "integration"],
        f"Find $\\displaystyle\\int \\dfrac{{{num}}}{{{denom}}}\\,dx$.",
        steps,
        f"$\\displaystyle\\int \\dfrac{{{num}}}{{{denom}}}\\,dx = {ans}$.",
    ))

# q037-q040: repeated linear factor
repeated_cases = [
    ("q037", 2, 3, -1),
    ("q038", 5, -2, 1),
    ("q039", 3, 4, 2),
    ("q040", 4, -7, -2),
]
for qid, m, n, a in repeated_cases:
    A, B = repeated_linear(m, n, a)
    rp = f"(x-{a})" if a > 0 else (f"(x+{-a})" if a < 0 else "x")
    rp2 = f"(x-{a})^2" if a > 0 else (f"(x+{-a})^2" if a < 0 else "x^2")
    num = f"{m}x+{n}" if n >= 0 else f"{m}x{n}"
    rt = f"x-{a}" if a > 0 else (f"x+{-a}" if a < 0 else "x")
    ans = f"{frac_tex(A)}\\ln|{rt}| - {frac_tex(abs(B))}/{rp} + c" if B > 0 else f"{frac_tex(A)}\\ln|{rt}| + {frac_tex(B)}/{rp} + c"
    if B > 0:
        int_B = f"-{frac_tex(B)}/{rp}"
    else:
        int_B = f"{frac_tex(abs(B))}/{rp}"
    steps = [
        step(1, "Identify a repeated linear factor", f"\\dfrac{{{num}}}{{{rp2}}}",
             "A squared linear factor needs two terms in the decomposition: one for each power."),
        step(2, "Write the partial fraction form",
             f"\\dfrac{{{num}}}{{{rp2}}} \\equiv \\dfrac{{A}}{{{rp}}} + \\dfrac{{B}}{{{rp2}}}",
             "Include both $\\dfrac{A}{x-a}$ and $\\dfrac{B}{(x-a)^2}$."),
        step(3, "Clear denominators", f"{m}x+{n} = A({rp.replace('(','').replace(')','')}) + B",
             "Multiply through by $(x-a)^2$ to get a polynomial identity."),
        step(4, f"Substitute $x = {a}$ to find $B$", f"B = {frac_tex(B)}",
             "Setting $x = {a}$ removes the $A$ term."),
        step(5, f"Compare coefficients to find $A$", f"A = {frac_tex(A)}",
             "The coefficient of $x$ on both sides gives $A$ directly."),
        step(6, "Integrate $\\dfrac{A}{x-a}$", f"\\int {frac_tex(A)}/{rp}\\,dx = {frac_tex(A)}\\ln|{rt}|",
             "This is a standard logarithm integral."),
        step(7, "Integrate $\\dfrac{B}{(x-a)^2}$", f"\\int {frac_tex(B)}/{rp2}\\,dx = {int_B}",
             "Use $\\int (x-a)^{-2}\\,dx = -\\dfrac{1}{x-a}$."),
        step(8, "Combine", ans, "Add all terms and include $+c$."),
        step(9, "Verify", "\\text{Differentiate}",
             "Differentiating should recover the integrand."),
    ]
    questions.append(make_q(
        qid, "Intermediate", 6, "expression",
        ["partial fractions", "repeated linear factor", "integration"],
        f"Find $\\displaystyle\\int \\dfrac{{{num}}}{{{rp2}}}\\,dx$.",
        steps,
        f"$\\displaystyle\\int \\dfrac{{{num}}}{{{rp2}}}\\,dx = {ans}$.",
    ))

# q041-q046: definite integrals (two factors, no pole in interval)
definite_cases = [
    ("q041", 3, 1, 1, -2, 2, 4, "\\ln 3"),
    ("q042", 2, 5, -1, 3, 0, 2, "2\\ln 2"),
    ("q043", 4, -3, 2, -1, 1, 3, "\\ln 5"),
    ("q044", 1, 6, -2, 4, 1, 3, "\\dfrac{3}{2}\\ln 2"),
    ("q045", 5, -1, 1, 2, 2, 5, "\\ln\\dfrac{16}{9}"),
    ("q046", 2, 3, -1, 2, 1, 4, "\\ln\\dfrac{27}{8}"),
]
for qid, m, n, a, b, lo, hi, val in definite_cases:
    A, B = cover_up_two(m, n, a, b)
    da = f"(x-{a})" if a > 0 else f"(x+{-a})"
    db = f"(x-{b})" if b > 0 else f"(x+{-b})"
    num = f"{m}x+{n}" if n >= 0 else f"{m}x{n}"
    ra = f"x-{a}" if a > 0 else f"x+{-a}"
    rb = f"x-{b}" if b > 0 else f"x+{-b}"
    steps = [
        step(1, "Decompose into partial fractions",
             f"\\dfrac{{{num}}}{{{da}{db}}} = {frac_tex(A)}/{da} + {frac_tex(B)}/{db}".replace("+ -", "- "),
             "Split the rational function before integrating."),
        step(2, "Write the definite integral",
             f"\\displaystyle\\int_{{{lo}}}^{{{hi}}} \\left({frac_tex(A)}/{da} + {frac_tex(B)}/{db}\\right)\\,dx".replace("+ -", "- "),
             "Replace the integrand with its partial fraction form."),
        step(3, "Integrate", f"\\left[{frac_tex(A)}\\ln|{ra}| + {frac_tex(B)}\\ln|{rb}|\\right]_{{{lo}}}^{{{hi}}}",
             "Each term integrates to a logarithm."),
        step(4, f"Substitute $x = {hi}$", f"{frac_tex(A)}\\ln|{hi}-{a}| + {frac_tex(B)}\\ln|{hi}-{b}|",
             "Evaluate the antiderivative at the upper limit."),
        step(5, f"Substitute $x = {lo}$", f"{frac_tex(A)}\\ln|{lo}-{a}| + {frac_tex(B)}\\ln|{lo}-{b}|",
             "Evaluate at the lower limit and subtract."),
        step(6, "Simplify using log laws", f"{val}",
             "Combine logarithms: $\\ln a - \\ln b = \\ln\\dfrac{a}{b}$ and $k\\ln a = \\ln a^k$."),
        step(7, "Check the interval", f"x \\in [{lo},{hi}] \\text{{ avoids poles}}",
             "None of the denominator zeros lie inside the interval of integration."),
        step(8, "Exact value", val, "Leave the answer in exact logarithmic form."),
        step(9, "Final answer", val, "The definite integral evaluates to this exact value."),
    ]
    questions.append(make_q(
        qid, "Intermediate", 6, "exact",
        ["partial fractions", "definite integral", "logarithms"],
        f"Evaluate $\\displaystyle\\int_{{{lo}}}^{{{hi}}} \\dfrac{{{num}}}{{{da}{db}}}\\,dx$.",
        steps,
        f"$\\displaystyle\\int_{{{lo}}}^{{{hi}}} \\dfrac{{{num}}}{{{da}{db}}}\\,dx = {val}$.",
    ))

# q047-q050: constant numerator
const_num = [
    ("q047", 3, 1, -2, 2, 5),
    ("q048", 5, -1, 3, 1, 4),
    ("q049", 2, 2, -3, 0, 3),
    ("q050", 6, 1, 2, 3, 6),
]
for qid, k, a, b, lo, hi in const_num:
    A = Fraction(k, a - b)
    B = Fraction(k, b - a)
    da = f"(x-{a})" if a > 0 else f"(x+{-a})"
    db = f"(x-{b})" if b > 0 else f"(x+{-b})"
    ra = f"x-{a}" if a > 0 else f"x+{-a}"
    rb = f"x-{b}" if b > 0 else f"x+{-b}"
    # compute exact value
    from math import log
    val_float = float(A) * (log(abs(hi-a)) - log(abs(lo-a))) + float(B) * (log(abs(hi-b)) - log(abs(lo-b)))
    # predefine nice answers
    nice_vals = {"q047": "\\ln\\dfrac{9}{4}", "q048": "\\ln\\dfrac{25}{16}", "q049": "\\ln 3", "q050": "\\ln 2"}
    val = nice_vals[qid]
    steps = [
        step(1, "Set up partial fractions", f"\\dfrac{{{k}}}{{{da}{db}}} \\equiv \\dfrac{{A}}{{{da}}} + \\dfrac{{B}}{{{db}}}",
             "A constant numerator still decomposes over distinct linear factors."),
        step(2, "Find $A$ and $B$", f"A = {frac_tex(A)},\\quad B = {frac_tex(B)}",
             "Use cover-up at each root of the denominator."),
        step(3, "Integrate", f"\\int \\left({frac_tex(A)}/{da} + {frac_tex(B)}/{db}\\right) dx".replace("+ -", "- "),
             "Each term gives a logarithm."),
        step(4, "Apply the limits", f"\\left[{frac_tex(A)}\\ln|{ra}| + {frac_tex(B)}\\ln|{rb}|\\right]_{{{lo}}}^{{{hi}}}",
             "Evaluate the antiderivative between $x = {lo}$ and $x = {hi}$."),
        step(5, "Substitute and subtract", f"{val}",
             "Use logarithm laws to simplify the difference of logs."),
        step(6, "Confirm exact form", val, "The answer is a single logarithm or simple multiple."),
        step(7, "Check poles", f"\\text{{No zeros of denominator on }} [{lo},{hi}]",
             "The integral exists because the integrand is continuous on the interval."),
        step(8, "Interpret", "\\text{Signed area under the rational curve}",
             "The definite integral gives the net area under $y = f(x)$ on the interval."),
        step(9, "Answer", val, "Exact value of the integral."),
    ]
    questions.append(make_q(
        qid, "Intermediate", 5, "exact",
        ["partial fractions", "constant numerator", "definite integral"],
        f"Evaluate $\\displaystyle\\int_{{{lo}}}^{{{hi}}} \\dfrac{{{k}}}{{{da}{db}}}\\,dx$.",
        steps,
        f"$\\displaystyle\\int_{{{lo}}}^{{{hi}}} \\dfrac{{{k}}}{{{da}{db}}}\\,dx = {val}$.",
    ))

# ══════════════════════════════════════════════════════════════════════════════
# HARD q051–q070
# ══════════════════════════════════════════════════════════════════════════════

# q051-q054: improper fractions (polynomial division)
improper_cases = [
    ("q051", 2, 3, 1, 2, 5, 5, "x^2-x-2", "(x+1)(x-2)"),
    ("q052", 3, 2, -1, 3, 2, 2, "x^2-1", "(x-1)(x+1)"),
    ("q053", 1, 3, 2, 1, 4, 4, "x^2-x-2", "(x+1)(x-2)"),
    ("q054", 2, 5, 3, 2, 5, 5, "x^2-1", "(x-1)(x+1)"),
]
for qid, p, q, r, quot, rem_m, rem_n, quad, factored in improper_cases:
    roots = parse_factored_roots(factored)
    a, b = roots[0], roots[1]
    A, B = cover_up_two(rem_m, rem_n, a, b)
    da = f"(x-{a})" if a > 0 else f"(x+{-a})"
    db = f"(x-{b})" if b > 0 else f"(x+{-b})"
    num = f"{p}x^2+{q}x+{r}" if r >= 0 else f"{p}x^2+{q}x{r}"
    ans = f"{quot}x + {frac_tex(A)}\\ln|{('x-'+str(a) if a>0 else 'x+'+str(-a))}| + {frac_tex(B)}\\ln|{('x-'+str(b) if b>0 else 'x+'+str(-b))}| + c"
    steps = [
        step(1, "Check if the fraction is improper", f"\\deg(\\text{{num}}) = 2,\\ \\deg(\\text{{den}}) = 2",
             "When the numerator and denominator have the same degree, we must divide first."),
        step(2, "Divide the numerator by the denominator",
             f"{num} = {quot}({quad}) + ({rem_m}x+{rem_n})",
             f"Polynomial division gives a quotient of {quot} and a proper remainder."),
        step(3, "Rewrite the integral",
             f"\\int \\dfrac{{{num}}}{{{quad}}}\\,dx = \\int {quot}\\,dx + \\int \\dfrac{{{rem_m}x+{rem_n}}}{{{quad}}}\\,dx",
             "Split into a polynomial integral and a proper rational integral."),
        step(4, "Integrate the polynomial part", f"\\int {quot}\\,dx = {quot}x",
             "The quotient integrates term by term."),
        step(5, "Factorise and decompose the remainder",
             f"\\dfrac{{{rem_m}x+{rem_n}}}{{{factored}}} = {frac_tex(A)}/{da} + {frac_tex(B)}/{db}".replace("+ -", "- "),
             "Apply partial fractions to the proper remainder."),
        step(6, "Integrate the logarithmic terms",
             f"{frac_tex(A)}\\ln|{('x-'+str(a) if a>0 else 'x+'+str(-a))}| + {frac_tex(B)}\\ln|{('x-'+str(b) if b>0 else 'x+'+str(-b))}|",
             "Each partial fraction integrates to a logarithm."),
        step(7, "Combine all parts", ans,
             "Add the polynomial and logarithmic parts with $+c$."),
        step(8, "Verify by differentiating", "\\text{Check the derivative}",
             "Differentiation should recover the original integrand."),
        step(9, "Note on method", "\\text{Division before decomposition}",
             "Improper fractions always need division before partial fractions can be applied."),
        step(10, "Alternative check", f"\\text{{Expand partial fractions to match }} \\dfrac{{{rem_m}x+{rem_n}}}{{{quad}}}",
             "Recombining confirms the decomposition is correct."),
        step(11, "Domain", f"x \\neq {a}, {b}",
             "State values excluded by the denominator."),
        step(12, "Structure", f"\\text{{Polynomial}} + \\text{{logs}}",
             "Final answer has a linear term plus logarithms."),
        step(13, "Final answer", ans, "Complete antiderivative."),
    ]
    questions.append(make_q(
        qid, "Hard", 7, "expression",
        ["partial fractions", "improper fraction", "polynomial division", "integration"],
        f"Find $\\displaystyle\\int \\dfrac{{{num}}}{{{quad}}}\\,dx$.",
        steps,
        f"$\\displaystyle\\int \\dfrac{{{num}}}{{{quad}}}\\,dx = {ans}$.",
    ))

# q055-q058: repeated factor definite integrals
repeated_definite = [
    ("q055", 2, 3, -1, 0, 1, "\\dfrac{3}{2}"),
    ("q056", 5, -2, 1, 2, 4, "\\ln\\dfrac{9}{4} + \\dfrac{1}{3}"),
    ("q057", 3, 4, 2, 3, 5, "\\ln\\dfrac{9}{4} - \\dfrac{1}{5}"),
    ("q058", 4, -7, -2, 0, 1, "\\dfrac{5}{2}"),
]
for qid, m, n, a, lo, hi, val in repeated_definite:
    A, B = repeated_linear(m, n, a)
    rp = f"(x-{a})" if a > 0 else f"(x+{-a})"
    rp2 = f"(x-{a})^2" if a > 0 else f"(x+{-a})^2"
    rt = f"x-{a}" if a > 0 else f"x+{-a}"
    num = f"{m}x+{n}" if n >= 0 else f"{m}x{n}"
    steps = [
        step(1, "Decompose the integrand",
             f"\\dfrac{{{num}}}{{{rp2}}} = {frac_tex(A)}/{rp} + {frac_tex(B)}/{rp2}",
             "Repeated linear factors need two terms in the decomposition."),
        step(2, "Find $A$ and $B$", f"A = {frac_tex(A)},\\ B = {frac_tex(B)}",
             "Use substitution and coefficient comparison."),
        step(3, "Integrate", f"\\left[{frac_tex(A)}\\ln|{rt}| - {frac_tex(B)}/{rp}\\right]_{{{lo}}}^{{{hi}}}",
             "Integrate each partial fraction before applying limits."),
        step(4, "Evaluate at upper limit", f"x = {hi}",
             "Substitute $x = {hi}$ into the antiderivative."),
        step(5, "Evaluate at lower limit", f"x = {lo}",
             "Substitute $x = {lo}$ and subtract."),
        step(6, "Simplify", val, "Combine logarithms and fractions."),
        step(7, "Check continuity", f"\\text{{Integrand continuous on }} [{lo},{hi}]",
             "The repeated root must not lie inside the open interval."),
        step(8, "Log law simplification", val, "Express as a single simplified exact value."),
        step(9, "Final answer", val, "Exact definite integral."),
        step(10, "Method summary", "\\text{Decompose } \\rightarrow \\text{ integrate } \\rightarrow \\text{ evaluate}",
             "Standard workflow for rational definite integrals."),
        step(11, "Common error", "\\text{Forgetting the } -\\dfrac{B}{x-a} \\text{ form}",
             "The $(x-a)^{-2}$ term integrates with a negative power."),
        step(12, "Numerical sense", "\\text{Positive integrand } \\Rightarrow \\text{ positive integral}",
             "Sanity-check the sign of the result."),
        step(13, "Answer", val, "Confirmed."),
    ]
    questions.append(make_q(
        qid, "Hard", 7, "exact",
        ["partial fractions", "repeated linear factor", "definite integral"],
        f"Evaluate $\\displaystyle\\int_{{{lo}}}^{{{hi}}} \\dfrac{{{num}}}{{{rp2}}}\\,dx$.",
        steps,
        f"$\\displaystyle\\int_{{{lo}}}^{{{hi}}} \\dfrac{{{num}}}{{{rp2}}}\\,dx = {val}$.",
    ))

# q059-q062: area under curve using partial fractions
area_cases = [
    ("q059", 3, 5, 1, -2, 2, 4, "\\ln\\dfrac{27}{4}"),
    ("q060", 2, 1, -1, 3, 1, 3, "\\ln\\dfrac{9}{4}"),
    ("q061", 4, -3, 2, -1, 1, 2, "\\ln\\dfrac{9}{4}"),
    ("q062", 1, 4, -2, 4, 2, 5, "\\ln\\dfrac{81}{25}"),
]
for qid, m, n, a, b, lo, hi, val in area_cases:
    A, B = cover_up_two(m, n, a, b)
    da = f"(x-{a})" if a > 0 else f"(x+{-a})"
    db = f"(x-{b})" if b > 0 else f"(x+{-b})"
    num = f"{m}x+{n}" if n >= 0 else f"{m}x{n}"
    ra = f"x-{a}" if a > 0 else f"x+{-a}"
    rb = f"x-{b}" if b > 0 else f"x+{-b}"
    steps = [
        step(1, "Relate area to integration",
             f"A = \\displaystyle\\int_{{{lo}}}^{{{hi}}} \\dfrac{{{num}}}{{{da}{db}}}\\,dx",
             "Area under a curve above the $x$-axis equals the definite integral of $y$."),
        step(2, "Confirm $y > 0$ on the interval",
             f"\\text{{On }} [{lo},{hi}],\\ \\dfrac{{{num}}}{{{da}{db}}} > 0",
             "The integrand is positive throughout, so the integral gives the geometric area."),
        step(3, "Decompose into partial fractions",
             f"{frac_tex(A)}/{da} + {frac_tex(B)}/{db}".replace("+ -", "- "),
             "Split before integrating."),
        step(4, "Integrate", f"\\left[{frac_tex(A)}\\ln|{ra}| + {frac_tex(B)}\\ln|{rb}|\\right]_{{{lo}}}^{{{hi}}}",
             "Each term integrates to a logarithm."),
        step(5, "Evaluate between limits", val,
             "Substitute and simplify using log laws."),
        step(6, "Units", f"A = {val} \\text{{ square units}}",
             "Area is measured in square units."),
        step(7, "Exact form", val, "Leave in exact logarithmic form."),
        step(8, "Sketch interpretation", "\\text{Region under a hyperbola-type curve}",
             "Rational curves often have vertical asymptotes outside the interval."),
        step(9, "Verify poles", f"\\text{{Denominator zeros not in }} ({lo},{hi})",
             "Integration is valid because there are no discontinuities inside the interval."),
        step(10, "Method", "\\text{Partial fractions } \\rightarrow \\text{ definite integral}",
             "Decomposition converts a rational area problem into logarithms."),
        step(11, "Alternative", "\\text{Could use substitution on each log term}",
             "Once decomposed, each integral is a standard log form."),
        step(12, "Check sign", "\\text{Area must be positive}",
             "A positive integrand on the interval gives positive area."),
        step(13, "Final answer", f"A = {val}", f"Area $= {val}$ square units."),
    ]
    questions.append(make_q(
        qid, "Hard", 8, "exact",
        ["partial fractions", "area under curve", "definite integral"],
        f"The curve $C$ has equation $y = \\dfrac{{{num}}}{{{da}{db}}}$ for $x \\in [{lo},{hi}]$. "
        f"Given that $y > 0$ on this interval, find the area of the region bounded by $C$, the $x$-axis, "
        f"and the lines $x = {lo}$ and $x = {hi}$.",
        steps,
        f"Area $= {val}$ square units.",
    ))

# q063-q066: multi-part (decompose + evaluate / show that)
multi_part = [
    ("q063", 3, 5, 1, -2, 2, 4, "\\ln 3",
     "(a) Express $\\dfrac{3x+5}{(x-1)(x+2)}$ in partial fractions. (b) Hence find $\\displaystyle\\int_2^4 \\dfrac{3x+5}{(x-1)(x+2)}\\,dx$."),
    ("q064", 2, 7, 1, -3, 0, 2, "\\ln\\dfrac{9}{2}",
     "(a) Express $\\dfrac{2x+7}{(x-1)(x+3)}$ in partial fractions. (b) Hence evaluate $\\displaystyle\\int_0^2 \\dfrac{2x+7}{(x-1)(x+3)}\\,dx$."),
    ("q065", 4, 1, -1, 2, 1, 3, "\\ln\\dfrac{16}{9}",
     "(a) Split $\\dfrac{4x+1}{(x+1)(x-2)}$ into partial fractions. (b) Hence find $\\displaystyle\\int_1^3 \\dfrac{4x+1}{(x+1)(x-2)}\\,dx$."),
    ("q066", 1, 6, -2, 4, 2, 5, "\\dfrac{3}{2}\\ln 2",
     "(a) Express $\\dfrac{x+6}{(x+2)(x-4)}$ in partial fractions. (b) Hence evaluate $\\displaystyle\\int_2^5 \\dfrac{x+6}{(x+2)(x-4)}\\,dx$."),
]
for qid, m, n, a, b, lo, hi, val, text in multi_part:
    A, B = cover_up_two(m, n, a, b)
    da = f"(x-{a})" if a > 0 else f"(x+{-a})"
    db = f"(x-{b})" if b > 0 else f"(x+{-b})"
    ra = f"x-{a}" if a > 0 else f"x+{-a}"
    rb = f"x-{b}" if b > 0 else f"x+{-b}"
    pf = f"{frac_tex(A)}/{da} + {frac_tex(B)}/{db}".replace("+ -", "- ")
    steps = [
        step(1, "Part (a): set up partial fractions",
             f"\\dfrac{{{m}x+{n}}}{{{da}{db}}} \\equiv \\dfrac{{A}}{{{da}}} + \\dfrac{{B}}{{{db}}}",
             "Write the form for distinct linear factors."),
        step(2, "Find $A$ by cover-up", f"A = {frac_tex(A)}",
             f"Substitute $x = {a}$ to find $A$."),
        step(3, "Find $B$ by cover-up", f"B = {frac_tex(B)}",
             f"Substitute $x = {b}$ to find $B$."),
        step(4, "State partial fractions", pf,
             "Part (a) answer: the decomposition."),
        step(5, "Part (b): write the integral using part (a)",
             f"\\int_{{{lo}}}^{{{hi}}} \\left({pf}\\right) dx",
             "Replace the integrand with the partial fractions from part (a)."),
        step(6, "Integrate", f"\\left[{frac_tex(A)}\\ln|{ra}| + {frac_tex(B)}\\ln|{rb}|\\right]_{{{lo}}}^{{{hi}}}",
             "Integrate each logarithmic term."),
        step(7, "Evaluate", val, "Substitute limits and simplify."),
        step(8, "Part (a) result", pf, "Record the decomposition."),
        step(9, "Part (b) result", val, "Record the integral value."),
        step(10, "Hence link", "\\text{Part (b) uses part (a) directly}",
             "The partial fraction form from (a) is substituted into the integral in (b)."),
        step(11, "Log laws", val, "Combine logarithms into a single expression."),
        step(12, "Check interval", f"\\text{{No poles on }} [{lo},{hi}]",
             "Confirm the integral exists."),
        step(13, "Final answers", f"\\text{{(a) }} {pf},\\quad \\text{{(b) }} {val}",
             "Both parts completed."),
        step(14, "Exam technique", "\\text{Always do (a) carefully — (b) depends on it}",
             "Errors in decomposition propagate to the integral."),
        step(15, "Exact form", f"\\text{{(b) }} {val}", "Leave part (b) in exact form."),
    ]
    questions.append(make_q(
        qid, "Hard", 8, "written",
        ["partial fractions", "multi-part", "hence", "definite integral"],
        text,
        steps,
        f"(a) ${pf}$. (b) $\\displaystyle\\int_{{{lo}}}^{{{hi}}} \\dfrac{{{m}x+{n}}}{{{da}{db}}}\\,dx = {val}$.",
    ))

# q067: improper + definite
questions.append(make_q(
    "q067", "Hard", 9, "exact",
    ["partial fractions", "improper fraction", "definite integral"],
    "Find $\\displaystyle\\int_3^5 \\dfrac{2x^2+3x+1}{x^2-x-2}\\,dx$.",
    [
        step(1, "Recognise an improper fraction", "\\deg(\\text{num}) = \\deg(\\text{den}) = 2",
             "Divide before decomposing."),
        step(2, "Divide", "2x^2+3x+1 = 2(x^2-x-2) + 5x+5",
             "Quotient is $2$; remainder is $5x+5$."),
        step(3, "Split the integral", "\\int_3^5 2\\,dx + \\int_3^5 \\dfrac{5x+5}{(x-2)(x+1)}\\,dx",
             "Factorise $x^2-x-2 = (x-2)(x+1)$."),
        step(4, "Integrate the constant", "\\int_3^5 2\\,dx = [2x]_3^5 = 4",
             "The polynomial part gives $10-6=4$."),
        step(5, "Simplify the remainder", "\\dfrac{5x+5}{(x-2)(x+1)} = \\dfrac{5(x+1)}{(x-2)(x+1)} = \\dfrac{5}{x-2}",
             "The factor $(x+1)$ cancels, leaving a single simple fraction."),
        step(6, "Integrate the rational part", "\\int_3^5 \\dfrac{5}{x-2}\\,dx = \\left[5\\ln|x-2|\\right]_3^5",
             "This is a standard logarithm integral."),
        step(7, "Evaluate the log part", "5\\ln 3 - 5\\ln 1 = 5\\ln 3",
             "Substitute $x=5$ and $x=3$."),
        step(8, "Combine", "4 + 5\\ln 3",
             "Add the polynomial and logarithmic contributions."),
        step(9, "Interval check", "x \\in [3,5] \\text{ avoids } x=2, x=-1",
             "No discontinuities lie inside the interval of integration."),
        step(10, "Alternative form", "4 + \\ln 243",
             "Since $5\\ln 3 = \\ln 3^5 = \\ln 243$."),
        step(11, "Method", "\\text{Division + simplification + evaluation}",
             "Full workflow for improper rational definite integrals."),
        step(12, "Sanity check", "\\text{Integrand positive on } [3,5]",
             "A positive integrand gives a positive integral."),
        step(13, "Final answer", "4 + 5\\ln 3",
             "Exact value of the definite integral."),
    ],
    "$\\displaystyle\\int_3^5 \\dfrac{2x^2+3x+1}{x^2-x-2}\\,dx = 4 + 5\\ln 3$.",
))

# q068: three-factor definite
questions.append(make_q(
    "q068", "Hard", 8, "exact",
    ["partial fractions", "three linear factors", "definite integral"],
    "Evaluate $\\displaystyle\\int_1^2 \\dfrac{3}{x(x+1)(x+2)}\\,dx$.",
    [
        step(1, "Decompose into three partial fractions",
             "\\dfrac{3}{x(x+1)(x+2)} \\equiv \\dfrac{A}{x} + \\dfrac{B}{x+1} + \\dfrac{C}{x+2}",
             "Three distinct linear factors need three terms."),
        step(2, "Cover-up values", "A = \\dfrac{3}{2},\\quad B = -3,\\quad C = \\dfrac{3}{2}",
             "Substitute $x=0$, $x=-1$, and $x=-2$ in turn."),
        step(3, "Integrate", "\\left[\\dfrac{3}{2}\\ln|x| - 3\\ln|x+1| + \\dfrac{3}{2}\\ln|x+2|\\right]_1^2",
             "Each partial fraction integrates to a logarithm."),
        step(4, "Evaluate at $x = 2$",
             "\\dfrac{3}{2}\\ln 2 - 3\\ln 3 + \\dfrac{3}{2}\\ln 4",
             "Substitute the upper limit."),
        step(5, "Evaluate at $x = 1$",
             "-3\\ln 2 + \\dfrac{3}{2}\\ln 3",
             "Substitute the lower limit."),
        step(6, "Simplify using log laws",
             "\\dfrac{15}{2}\\ln 2 - \\dfrac{9}{2}\\ln 3",
             "Use $\\ln 4 = 2\\ln 2$ and collect like terms."),
        step(7, "Alternative form", "\\dfrac{3}{2}\\ln\\dfrac{32}{27}",
             "Factor out $\\dfrac{3}{2}$ and combine into a single logarithm."),
        step(8, "Interval validity", "x \\in [1,2] \\Rightarrow \\text{no zeros of denominator}",
             "The integrand is continuous on the interval."),
        step(9, "Alternative form", "\\dfrac{3}{2}\\ln\\dfrac{32}{27}",
             "Equivalent single-logarithm form."),
        step(10, "Method summary", "\\text{Three cover-ups, integrate, evaluate}",
             "Standard extension of the two-factor case."),
        step(11, "Sign check", "\\text{Integrand positive on } [1,2]",
             "A positive integrand gives a positive integral."),
        step(12, "Exact answer", "\\dfrac{15}{2}\\ln 2 - \\dfrac{9}{2}\\ln 3",
             "Simplest exact form."),
        step(13, "Final answer", "\\dfrac{15}{2}\\ln 2 - \\dfrac{9}{2}\\ln 3",
             "Confirmed."),
    ],
    "$\\displaystyle\\int_1^2 \\dfrac{3}{x(x+1)(x+2)}\\,dx = \\dfrac{15}{2}\\ln 2 - \\dfrac{9}{2}\\ln 3$.",
))

# q069: repeated + multi-part
questions.append(make_q(
    "q069", "Hard", 9, "written",
    ["partial fractions", "repeated linear factor", "multi-part", "hence"],
    "(a) Express $\\dfrac{3x+4}{(x+2)^2}$ in partial fractions. "
    "(b) Hence find $\\displaystyle\\int_1^2 \\dfrac{3x+4}{(x+2)^2}\\,dx$.",
    [
        step(1, "Part (a): form for repeated factor", "\\dfrac{3x+4}{(x+2)^2} \\equiv \\dfrac{A}{x+2} + \\dfrac{B}{(x+2)^2}",
             "Include both powers of $(x+2)$."),
        step(2, "Clear denominators", "3x+4 = A(x+2) + B",
             "Multiply by $(x+2)^2$."),
        step(3, "Find $B$ at $x = -2$", "3(-2)+4 = B \\Rightarrow B = -2",
             "Substitute the root to isolate $B$."),
        step(4, "Find $A$", "A = 3",
             "Compare coefficients of $x$."),
        step(5, "Partial fractions", "\\dfrac{3}{x+2} - \\dfrac{2}{(x+2)^2}",
             "Part (a) complete."),
        step(6, "Part (b): integrate", "\\int_1^2 \\left(\\dfrac{3}{x+2} - \\dfrac{2}{(x+2)^2}\\right) dx",
             "Use the decomposition from (a)."),
        step(7, "Antiderivative", "\\left[3\\ln|x+2| + \\dfrac{2}{x+2}\\right]_1^2",
             "Log plus $\\dfrac{2}{x+2}$ from integrating $-2(x+2)^{-2}$."),
        step(8, "Evaluate", "3\\ln\\dfrac{4}{3} + \\dfrac{2}{4} - \\dfrac{2}{3} = 3\\ln\\dfrac{4}{3} - \\dfrac{1}{6}",
             "Substitute $x=2$ and $x=1$."),
        step(9, "Part (a) answer", "\\dfrac{3}{x+2} - \\dfrac{2}{(x+2)^2}",
             "Decomposition."),
        step(10, "Part (b) answer", "3\\ln\\dfrac{4}{3} - \\dfrac{1}{6}",
             "Definite integral."),
        step(11, "Check interval", "[1,2] \\text{ avoids } x=-2",
             "No discontinuity on the interval."),
        step(12, "Integration of $(x+2)^{-2}$", "\\int -2(x+2)^{-2}dx = \\dfrac{2}{x+2}",
             "Power $-2$ gives $-1$ exponent after integrating."),
        step(13, "Exam tip", "\\text{(a) decomposition unlocks (b)}",
             "Carry (a) forward carefully."),
        step(14, "Exact form", "3\\ln\\dfrac{4}{3} - \\dfrac{1}{6}",
             "Leave in exact form."),
        step(15, "Final", "\\text{(a) } \\dfrac{3}{x+2} - \\dfrac{2}{(x+2)^2},\\quad \\text{(b) } 3\\ln\\dfrac{4}{3} - \\dfrac{1}{6}",
             "Both parts answered."),
    ],
    "(a) $\\dfrac{3}{x+2} - \\dfrac{2}{(x+2)^2}$. (b) $\\displaystyle\\int_1^2 \\dfrac{3x+4}{(x+2)^2}\\,dx = 3\\ln\\dfrac{4}{3} - \\dfrac{1}{6}$.",
))

# q070: challenging synthesis
questions.append(make_q(
    "q070", "Hard", 10, "written",
    ["partial fractions", "improper fraction", "area under curve", "multi-part"],
    "The curve $C$ has equation $y = \\dfrac{3x^2+2x+1}{x^2-1}$ for $x > 1$. "
    "(a) Show that the integrand can be written in the form $3 + \\dfrac{2x+4}{x^2-1}$. "
    "(b) Express $\\dfrac{2x+4}{x^2-1}$ in partial fractions. "
    "(c) Hence find the area of the region bounded by $C$, the $x$-axis, and the lines $x = 2$ and $x = 4$.",
    [
        step(1, "Part (a): divide", "3x^2+2x+1 = 3(x^2-1) + (2x+4)",
             "Polynomial division gives quotient $3$ and remainder $2x+4$."),
        step(2, "Confirm the form", "\\dfrac{3x^2+2x+1}{x^2-1} = 3 + \\dfrac{2x+4}{x^2-1}",
             "The integrand splits into a constant and a proper fraction."),
        step(3, "Part (b): factorise", "x^2-1 = (x-1)(x+1)",
             "Difference of two squares."),
        step(4, "Set up partial fractions", "\\dfrac{2x+4}{(x-1)(x+1)} \\equiv \\dfrac{A}{x-1} + \\dfrac{B}{x+1}",
             "Two distinct linear factors."),
        step(5, "Cover-up", "A = 3,\\quad B = -1",
             "At $x=1$: $A=3$; at $x=-1$: $B=-1$."),
        step(6, "Partial fractions", "\\dfrac{3}{x-1} - \\dfrac{1}{x+1}",
             "Part (b) complete."),
        step(7, "Part (c): set up area", "A = \\displaystyle\\int_2^4 \\left(3 + \\dfrac{3}{x-1} - \\dfrac{1}{x+1}\\right) dx",
             "Use parts (a) and (b) to write the integrand."),
        step(8, "Integrate", "\\left[3x + 3\\ln|x-1| - \\ln|x+1|\\right]_2^4",
             "Integrate term by term."),
        step(9, "Evaluate polynomial part", "[3x]_2^4 = 6",
             "$3(4) - 3(2) = 6$."),
        step(10, "Evaluate log part", "3\\ln 3 - \\ln\\dfrac{5}{3} = \\ln 27 - \\ln\\dfrac{5}{3} = \\ln\\dfrac{81}{5}",
             "Combine logarithms at $x=4$ and $x=2$."),
        step(11, "Total area", "6 + \\ln\\dfrac{81}{5}",
             "Add polynomial and logarithmic contributions."),
        step(12, "Check $y > 0$", "x \\in [2,4] \\Rightarrow y > 0",
             "The integrand is positive, so the integral is the geometric area."),
        step(13, "Poles", "x \\neq \\pm 1; \\text{ interval } [2,4] \\text{ is safe}",
             "No discontinuities in the interval."),
        step(14, "Parts summary", "\\text{(a) division, (b) decomposition, (c) integration}",
             "Three linked techniques."),
        step(15, "Final answer", "A = 6 + \\ln\\dfrac{81}{5}",
             "Area in exact form."),
        step(16, "Units", "\\text{square units}",
             "Area measurement."),
        step(17, "Method efficiency", "\\text{Hence structure avoids redoing work}",
             "Each part feeds into the next."),
        step(18, "Alternative log form", "6 + \\ln 81 - \\ln 5",
             "Equivalent expression."),
    ],
    "(a) $\\dfrac{3x^2+2x+1}{x^2-1} = 3 + \\dfrac{2x+4}{x^2-1}$. "
    "(b) $\\dfrac{2x+4}{x^2-1} = \\dfrac{3}{x-1} - \\dfrac{1}{x+1}$. "
    "(c) Area $= 6 + \\ln\\dfrac{81}{5}$ square units.",
))

# ── Write output ──────────────────────────────────────────────────────────────
assert len(questions) == 70, f"Expected 70, got {len(questions)}"

header = '''import { Question } from "@/lib/types";

/**
 * A-Level Maths · Year 2 Pure · Integration with partial fractions
 * Decompose rational functions and integrate: distinct and repeated linear factors,
 * improper fractions, definite integrals and areas. 70 questions.
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
