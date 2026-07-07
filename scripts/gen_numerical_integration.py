#!/usr/bin/env python3
"""Generate all 70 questions for Numerical integration (Year 2 Pure)."""
import json
import math

OUT = "/Users/benjaminwalpole/Wisest_Maths_V5/wisest-maths-content/src/data/questions/a-level-maths/year-2-pure/numerical-integration.ts"

SUBTOPIC = "Numerical integration"
SUBTOPIC_ID = "al.y2.pure.numerical-integration"


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


def trap_estimate(f, a, b, n):
    h = (b - a) / n
    xs = [a + i * h for i in range(n + 1)]
    ys = [f(x) for x in xs]
    inner = ys[0] + ys[-1] + 2 * sum(ys[1:-1])
    return (h / 2) * inner, h, xs, ys


def fmt(x, places=4):
    if abs(x - round(x)) < 1e-9:
        return str(int(round(x)))
    return f"{x:.{places}f}".rstrip("0").rstrip(".")


questions = []

# ══════════════════════════════════════════════════════════════════════════════
# EASY q001–q018: formula, basic application, over/under estimates
# ══════════════════════════════════════════════════════════════════════════════

questions.append(make_q(
    "q001", "Easy", 3, "written", ["trapezium rule", "formula"],
    "State the trapezium rule for estimating $\\displaystyle\\int_a^b f(x)\\,dx$ using $n$ strips of equal width.",
    [
        step(1, "Define the strip width", "h = \\dfrac{b-a}{n}",
             "Divide the interval $[a,b]$ into $n$ equal sub-intervals, each of width $h$."),
        step(2, "List the $x$-coordinates", "x_0 = a,\\; x_1 = a+h,\\; \\ldots,\\; x_n = b",
             "The ordinates are taken at the endpoints of each strip, including both ends of the interval."),
        step(3, "Weight the ordinates", "y_0,\\; 2y_1,\\; 2y_2,\\; \\ldots,\\; 2y_{n-1},\\; y_n",
             "The first and last ordinates appear once; every interior ordinate is counted twice because it borders two strips."),
        step(4, "Form the weighted sum", "S = y_0 + 2y_1 + 2y_2 + \\cdots + 2y_{n-1} + y_n",
             "Add the weighted ordinates to approximate the total area under the curve."),
        step(5, "Multiply by half the strip width", "\\displaystyle\\int_a^b f(x)\\,dx \\approx \\dfrac{h}{2}\\,S",
             "Each trapezium has area $\\tfrac{h}{2}(y_i + y_{i+1})$; summing and simplifying gives the factor $\\tfrac{h}{2}$."),
        step(6, "Write the full rule", "\\displaystyle\\int_a^b f(x)\\,dx \\approx \\dfrac{h}{2}\\bigl(y_0 + 2\\sum_{i=1}^{n-1} y_i + y_n\\bigr)",
             "This is the standard trapezium rule formula used at A-Level."),
    ],
    "$\\displaystyle\\int_a^b f(x)\\,dx \\approx \\dfrac{h}{2}\\bigl(y_0 + 2y_1 + 2y_2 + \\cdots + 2y_{n-1} + y_n\\bigr)$ where $h = \\dfrac{b-a}{n}$ and $y_i = f(x_i)$.",
))

questions.append(make_q(
    "q002", "Easy", 4, "written", ["trapezium rule", "concept"],
    "Explain in words what the trapezium rule does when approximating an integral.",
    [
        step(1, "Replace the curve with straight segments", "\\text{curve } y=f(x) \\to \\text{ straight chords}",
             "Instead of the actual curve, we join consecutive points with straight lines."),
        step(2, "Each strip becomes a trapezium", "\\text{area of each strip} \\approx \\text{area of a trapezium}",
             "On each sub-interval the region between the chord and the $x$-axis is a trapezium."),
        step(3, "Sum the trapezium areas", "\\text{total estimate} = \\sum \\text{trapezium areas}",
             "Adding the areas of all the trapezia gives an approximation to the area under the curve."),
        step(4, "More strips usually improve accuracy", "n \\uparrow \\Rightarrow \\text{chords follow the curve more closely}",
             "With more, narrower strips the straight lines hug the curve better, so the estimate typically improves."),
        step(5, "Link to definite integration", "\\displaystyle\\int_a^b f(x)\\,dx = \\text{exact area under } y=f(x)",
             "The trapezium rule estimates this exact area when an antiderivative is awkward or unknown."),
        step(6, "Summary", "\\text{chords} \\to \\text{trapezia} \\to \\text{approximate integral}",
             "The rule turns a curved area problem into a sum of simple trapezium areas."),
    ],
    "The trapezium rule approximates the area under $y = f(x)$ by replacing the curve with straight chords, finding the area of each trapezium formed, and summing them.",
))

questions.append(make_q(
    "q003", "Easy", 2, "numeric", ["strip width", "trapezium rule"],
    "The interval $[2, 10]$ is divided into $4$ strips of equal width. Find $h$.",
    [
        step(1, "Recall the width formula", "h = \\dfrac{b-a}{n}",
             "Equal strips mean each has width $h = (b-a)/n$."),
        step(2, "Substitute $a = 2$, $b = 10$, $n = 4$", "h = \\dfrac{10-2}{4} = \\dfrac{8}{4}",
             "The total interval length is $8$, split into $4$ parts."),
        step(3, "Simplify", "h = 2",
             "Each strip is $2$ units wide."),
        step(4, "List the $x$-values (check)", "x = 2,\\; 4,\\; 6,\\; 8,\\; 10",
             "Five ordinates are needed for $4$ strips: the endpoints plus three interior points."),
        step(5, "Verify spacing", "10 - 2 = 4 \\times 2",
             "Four strips of width $2$ exactly cover $[2,10]$."),
        step(6, "State the answer", "h = 2",
             "The strip width is $2$."),
    ],
    "$h = 2$.",
))

# Basic linear / constant integrals (exact with trapezium rule)
basic_easy = [
    ("q004", "x", lambda x: x, 0, 4, 4, 8, "linear"),
    ("q005", "2x + 1", lambda x: 2 * x + 1, 0, 3, 3, 12, "linear"),
    ("q006", "5", lambda x: 5, 1, 5, 4, 20, "constant"),
    ("q007", "3 - x", lambda x: 3 - x, 0, 3, 3, 4.5, "linear"),
]
for qid, label, f, a, b, n, exact, tag in basic_easy:
    est, h, xs, ys = trap_estimate(f, a, b, n)
    ordinates = ",\\; ".join(f"y_{i}={fmt(ys[i])}" for i in range(len(ys)))
    xlist = ",\\; ".join(fmt(x) for x in xs)
    questions.append(make_q(
        qid, "Easy", 4, "numeric", ["trapezium rule", tag],
        f"Use the trapezium rule with $n = {n}$ strips to estimate $\\displaystyle\\int_{{{a}}}^{{{b}}} ({label})\\,dx$.",
        [
            step(1, "Find the strip width", f"h = \\dfrac{{{b}-{a}}}{{{n}}} = {fmt(h)}",
                 "Divide the interval length by the number of strips."),
            step(2, "List the $x$-values", f"x: {xlist}",
                 "Start at $x = a$ and add $h$ each time until $x = b$."),
            step(3, "Evaluate $y = f(x)$ at each point", ordinates,
                 "Substitute each $x$-value into the integrand."),
            step(4, "Apply the weighting pattern", f"y_0 + 2y_1 + \\cdots + 2y_{{{n-1}}} + y_{n} = {fmt(ys[0] + 2*sum(ys[1:-1]) + ys[-1])}",
                 "End ordinates count once; interior ordinates count twice."),
            step(5, "Multiply by $\\tfrac{h}{2}$", f"\\dfrac{{{fmt(h)}}}{{2}} \\times {fmt(ys[0] + 2*sum(ys[1:-1]) + ys[-1])} = {fmt(est)}",
                 "This gives the trapezium-rule estimate of the integral."),
            step(6, "Note exactness for linear functions" if tag != "constant" else "Confirm with geometry",
                 f"\\text{{Estimate}} = {fmt(est)}" + (f" = {fmt(exact)} \\text{{ (exact for a {tag} function)}}" if tag == "linear" else f" = {fmt(exact)} \\text{{ (rectangle area)}}"),
                 "For a straight-line graph the chords lie on the curve, so the trapezium rule is exact."),
        ],
        f"${fmt(est)}$.",
    ))

# x^2 easy applications
quad_easy = [
    ("q008", 0, 1, 2, 1 / 3),
    ("q009", 0, 2, 2, 8 / 3),
    ("q010", 1, 3, 4, 26 / 3),
    ("q011", 0, 1, 4, 1 / 3),
]
for qid, a, b, n, exact in quad_easy:
    f = lambda x: x ** 2
    est, h, xs, ys = trap_estimate(f, a, b, n)
    terms = " + ".join(
        [f"y_0"] + [f"2y_{i}" for i in range(1, n)] + [f"y_{n}"]
    )
    yvals = ",\\; ".join(f"f({fmt(x)})={fmt(y)}" for x, y in zip(xs, ys))
    questions.append(make_q(
        qid, "Easy", 4, "numeric", ["trapezium rule", "quadratic"],
        f"Use the trapezium rule with $n = {n}$ strips to estimate $\\displaystyle\\int_{{{a}}}^{{{b}}} x^2\\,dx$.",
        [
            step(1, "Strip width", f"h = \\dfrac{{{b}-{a}}}{{{n}}} = {fmt(h)}",
                 "Compute $h = (b-a)/n$."),
            step(2, "Ordinates", yvals,
                 "Evaluate $f(x)=x^2$ at each required $x$-value."),
            step(3, "Weighted sum", f"{terms} = {fmt(ys[0] + 2*sum(ys[1:-1]) + ys[-1])}",
                 "Apply the trapezium-rule weighting."),
            step(4, "Estimate", f"\\dfrac{{{fmt(h)}}}{{2}} \\times {fmt(ys[0] + 2*sum(ys[1:-1]) + ys[-1])} = {fmt(est)}",
                 "Multiply the weighted sum by $h/2$."),
            step(5, "Exact value (for comparison)", f"\\displaystyle\\int_{{{a}}}^{{{b}}} x^2\\,dx = {fmt(exact, 4)}",
                 "Integrating exactly lets us see how close the estimate is."),
            step(6, "Comment on accuracy", f"\\text{{estimate }} {fmt(est)} \\text{{ vs exact }} {fmt(exact, 4)}",
                 "With only a few strips the estimate is reasonable but not exact because $x^2$ is curved."),
        ],
        f"${fmt(est)}$.",
    ))

# Over/under estimate easy
questions.append(make_q(
    "q012", "Easy", 3, "written", ["over-estimate", "concavity"],
    "The graph of $y = f(x)$ is concave up on $[a, b]$. Does the trapezium rule give an over-estimate or an under-estimate of $\\displaystyle\\int_a^b f(x)\\,dx$? Explain briefly.",
    [
        step(1, "Picture a concave-up curve", "f''(x) > 0 \\Rightarrow \\text{curve bends upward}",
             "A concave-up graph lies below its tangents and the chords sit above the curve."),
        step(2, "Compare chord and curve on one strip", "\\text{chord} \\ge \\text{curve on that strip}",
             "On each sub-interval the straight chord lies on or above the actual graph."),
        step(3, "Trapezium area vs true area", "\\text{trapezium area} \\ge \\text{true area under curve}",
             "Each approximating trapezium covers at least as much area as the curve beneath it."),
        step(4, "Sum over all strips", "\\text{total trapezium area} \\ge \\int_a^b f(x)\\,dx",
             "Adding the inequalities strip by strip gives an over-estimate overall."),
        step(5, "Everyday check: $y = x^2$", "\\text{chords above the parabola on } [0,1]",
             "For a parabola opening upward, straight chords bulge above the curve."),
        step(6, "Conclusion", "\\text{over-estimate}",
             "Concave up $\\Rightarrow$ trapezium rule over-estimates the integral."),
    ],
    "**Over-estimate.** When the curve is concave up, each chord lies above the graph, so the trapezium areas are too large.",
))

questions.append(make_q(
    "q013", "Easy", 3, "written", ["under-estimate", "concavity"],
    "The graph of $y = f(x)$ is concave down on $[a, b]$. Does the trapezium rule give an over-estimate or an under-estimate? Explain briefly.",
    [
        step(1, "Concave down means bending downward", "f''(x) < 0 \\Rightarrow \\text{arch shape}",
             "The graph curves like an inverted bowl."),
        step(2, "Chord lies below the curve on a strip", "\\text{chord} < \\text{curve between endpoints}",
             "For a concave-down function, the straight chord joining two points lies below the graph between them."),
        step(3, "Compare areas on one strip", "\\text{trapezium area} < \\text{true area under curve}",
             "Each approximating trapezium misses area because the chord cuts under the curve."),
        step(4, "Sum the strips", "\\text{total estimate} < \\int_a^b f(x)\\,dx",
             "Adding the inequalities strip by strip gives an under-estimate overall."),
        step(5, "Example: $y = \\sqrt{x}$ on $[0,1]$", "\\text{chords cut under the curve}",
             "Root functions are concave down for $x>0$; chords miss area near the curve."),
        step(6, "Conclusion", "\\text{under-estimate}",
             "Concave down $\\Rightarrow$ trapezium rule under-estimates."),
    ],
    "**Under-estimate.** When the curve is concave down, chords lie below the graph, so the trapezium areas are too small.",
))

questions.append(make_q(
    "q014", "Easy", 4, "written", ["over-estimate", "quadratic"],
    "Use the trapezium rule with $n = 2$ strips to estimate $\\displaystyle\\int_0^2 x^2\\,dx$. State whether your estimate is an over-estimate or an under-estimate, giving a reason.",
    [
        step(1, "Width", "h = 1", "Two strips on $[0,2]$ each have width $1$."),
        step(2, "Ordinates", "f(0)=0,\\; f(1)=1,\\; f(2)=4",
             "Evaluate $y=x^2$ at $x=0,1,2$."),
        step(3, "Trapezium rule", "\\dfrac{1}{2}(0 + 2(1) + 4) = \\dfrac{1}{2}(6) = 3",
             "Apply $\\tfrac{h}{2}(y_0+2y_1+y_2)$."),
        step(4, "Exact integral", "\\displaystyle\\int_0^2 x^2\\,dx = \\left[\\dfrac{x^3}{3}\\right]_0^2 = \\dfrac{8}{3}",
             "The true area is $\\tfrac{8}{3} \\approx 2.67$."),
        step(5, "Compare", "3 > \\dfrac{8}{3}",
             "The estimate is larger than the exact value."),
        step(6, "Reason via concavity", "x^2 \\text{ is concave up on } [0,2] \\Rightarrow \\text{over-estimate}",
             "A concave-up parabola lies below its chords, so trapezia are too large."),
    ],
    "Estimate $= 3$. This is an **over-estimate** because $y = x^2$ is concave up on $[0,2]$ (exact value $= \\tfrac{8}{3}$).",
))

questions.append(make_q(
    "q015", "Easy", 4, "written", ["under-estimate", "square root"],
    "Use the trapezium rule with $n = 2$ strips to estimate $\\displaystyle\\int_0^4 \\sqrt{x}\\,dx$. State whether the estimate is an over-estimate or an under-estimate.",
    [
        step(1, "Strip width", "h = 2", "On $[0,4]$ with $n=2$, each strip has width $2$."),
        step(2, "Ordinates", "f(0)=0,\\; f(2)=\\sqrt{2},\\; f(4)=2",
             "Evaluate $y=\\sqrt{x}$ at the endpoints and midpoint."),
        step(3, "Estimate", f"\\dfrac{{2}}{{2}}(0 + 2\\sqrt{{2}} + 2) = 2 + 2\\sqrt{{2}} \\approx {fmt(2 + 2*math.sqrt(2))}",
             "Substitute into the trapezium-rule formula."),
        step(4, "Exact value", "\\displaystyle\\int_0^4 \\sqrt{x}\\,dx = \\left[\\dfrac{2}{3}x^{3/2}\\right]_0^4 = \\dfrac{16}{3}",
             "The exact area is $\\tfrac{16}{3} \\approx 5.33$."),
        step(5, "Compare", f"{fmt(2 + 2*math.sqrt(2))} < \\dfrac{{16}}{{3}}",
             "The trapezium estimate is smaller than the true integral."),
        step(6, "Concavity reason", "\\sqrt{x} \\text{ is concave down for } x>0 \\Rightarrow \\text{under-estimate}",
             "Chords lie below a concave-down curve, missing area."),
    ],
    f"Estimate $\\approx {fmt(2 + 2*math.sqrt(2))}$. This is an **under-estimate** because $y=\\sqrt{{x}}$ is concave down on $(0,4]$.",
))

questions.append(make_q(
    "q016", "Easy", 3, "numeric", ["strip width"],
    "For the trapezium rule on $[0, \\pi]$ with $6$ strips, find $h$ and list the $x$-values at which ordinates are taken.",
    [
        step(1, "Width", "h = \\dfrac{\\pi - 0}{6} = \\dfrac{\\pi}{6}",
             "Six equal strips on $[0,\\pi]$."),
        step(2, "Start at $x_0$", "x_0 = 0",
             "The first ordinate is at the left endpoint."),
        step(3, "Interior points", "x_1 = \\dfrac{\\pi}{6},\\; x_2 = \\dfrac{\\pi}{3},\\; x_3 = \\dfrac{\\pi}{2},\\; x_4 = \\dfrac{2\\pi}{3},\\; x_5 = \\dfrac{5\\pi}{6}",
             "Add $h$ repeatedly."),
        step(4, "Final point", "x_6 = \\pi",
             "The last ordinate is at the right endpoint."),
        step(5, "Count ordinates", "7 \\text{ ordinates for } 6 \\text{ strips}",
             "There are always $n+1$ ordinates for $n$ strips."),
        step(6, "Answer", "h = \\dfrac{\\pi}{6};\\; x = 0,\\, \\dfrac{\\pi}{6},\\, \\dfrac{\\pi}{3},\\, \\dfrac{\\pi}{2},\\, \\dfrac{2\\pi}{3},\\, \\dfrac{5\\pi}{6},\\, \\pi",
             "These are the inputs needed for the rule."),
    ],
    "$h = \\dfrac{\\pi}{6}$; ordinates at $x = 0,\\, \\dfrac{\\pi}{6},\\, \\dfrac{\\pi}{3},\\, \\dfrac{\\pi}{2},\\, \\dfrac{2\\pi}{3},\\, \\dfrac{5\\pi}{6},\\, \\pi$.",
))

# Table-based easy
questions.append(make_q(
    "q017", "Easy", 4, "numeric", ["trapezium rule", "table"],
    "The table gives values of $f(x)$ on $[0, 4]$ with strips of width $1$.\n\n| $x$ | 0 | 1 | 2 | 3 | 4 |\n|---|---|---|---|---|---|\n| $f(x)$ | 3 | 5 | 4 | 6 | 2 |\n\nUse the trapezium rule to estimate $\\displaystyle\\int_0^4 f(x)\\,dx$.",
    [
        step(1, "Identify $n$ and $h$", "n = 4,\\; h = 1",
             "Four strips of width $1$ on $[0,4]$."),
        step(2, "Read ordinates", "y_0=3,\\; y_1=5,\\; y_2=4,\\; y_3=6,\\; y_4=2",
             "Take values directly from the table."),
        step(3, "Weighted sum", "3 + 2(5) + 2(4) + 2(6) + 2 = 3 + 10 + 8 + 12 + 2 = 35",
             "End values once; interior values twice."),
        step(4, "Apply $\\tfrac{h}{2}$", "\\dfrac{1}{2} \\times 35 = 17.5",
             "Multiply by $h/2$ with $h=1$."),
        step(5, "Units check", "\\text{area units} = (y\\text{-units})\\times(x\\text{-units})",
             "The integral estimates accumulated quantity over $x$."),
        step(6, "State estimate", "\\displaystyle\\int_0^4 f(x)\\,dx \\approx 17.5",
             "This is the trapezium-rule approximation from the table."),
    ],
    "$17.5$.",
))

questions.append(make_q(
    "q018", "Easy", 3, "written", ["exact", "linear"],
    "Explain why the trapezium rule gives the **exact** value of $\\displaystyle\\int_1^5 (2x - 3)\\,dx$ for any number of strips $n \\ge 1$.",
    [
        step(1, "The integrand is linear", "f(x) = 2x - 3 \\Rightarrow \\text{graph is a straight line}",
             "No curvature means no gap between curve and chords."),
        step(2, "Chords coincide with the graph", "\\text{chord between two points on a line } = \\text{the line itself}",
             "Any straight segment joining two points on a line lies exactly on that line."),
        step(3, "Trapezium areas match true areas", "\\text{each strip: trapezium area} = \\text{true area under line}",
             "There is no missing or extra area on any sub-interval."),
        step(4, "Summing gives the exact integral", "\\sum \\text{strip areas} = \\int_1^5 (2x-3)\\,dx",
             "The approximation equals the true area for every $n$."),
        step(5, "Algebraic check", "\\displaystyle\\int_1^5 (2x-3)\\,dx = [x^2-3x]_1^5 = 10",
             "Direct integration gives $10$; the trapezium rule also gives $10$."),
        step(6, "General principle", "\\text{linear } f \\Rightarrow \\text{trapezium rule exact}",
             "Exactness holds for any linear function on any interval with any $n \\ge 1$."),
    ],
    "Because $y = 2x - 3$ is a straight line, every chord lies on the graph, so each trapezium area equals the true area under the line and the rule is exact for any $n$.",
))

# ══════════════════════════════════════════════════════════════════════════════
# INTERMEDIATE q019–q035
# ══════════════════════════════════════════════════════════════════════════════

intermediate_specs = [
    ("q019", "e^x", math.exp, 0, 1, 4, "exponential"),
    ("q020", "\\sin x", math.sin, 0, math.pi, 4, "trigonometric"),
    ("q021", "\\cos x", math.cos, 0, math.pi / 2, 4, "trigonometric"),
    ("q022", "\\dfrac{1}{x}", lambda x: 1 / x, 1, 3, 4, "reciprocal"),
    ("q023", "x^3", lambda x: x ** 3, 0, 2, 4, "cubic"),
    ("q024", "2^x", lambda x: 2 ** x, 0, 2, 4, "exponential"),
    ("q025", "x^2 + 1", lambda x: x ** 2 + 1, 0, 2, 6, "quadratic"),
    ("q026", "\\sqrt{x}", math.sqrt, 1, 9, 4, "square root"),
    ("q027", "x^2", lambda x: x ** 2, 0, 3, 6, "quadratic"),
    ("q028", "\\sin x", math.sin, 0, math.pi, 6, "trigonometric"),
]
for qid, label, f, a, b, n, tag in intermediate_specs:
    est, h, xs, ys = trap_estimate(f, a, b, n)
    a_s = fmt(a) if a != math.pi else "\\pi"
    b_s = fmt(b) if b not in (math.pi, math.pi / 2) else ("\\pi" if b == math.pi else "\\dfrac{\\pi}{2}")
    def x_tex(x):
        if abs(x - math.pi) < 1e-9:
            return "\\pi"
        if abs(x - math.pi / 2) < 1e-9:
            return "\\dfrac{\\pi}{2}"
        return fmt(x)

    ydetail = ",\\; ".join(f"f({x_tex(x)})={fmt(y)}" for x, y in zip(xs, ys))
    questions.append(make_q(
        qid, "Intermediate", 5, "numeric", ["trapezium rule", tag],
        f"Use the trapezium rule with $n = {n}$ strips to estimate $\\displaystyle\\int_{{{a_s}}}^{{{b_s}}} {label}\\,dx$. Give your answer to $3$ decimal places.",
        [
            step(1, "Strip width", f"h = {fmt(h, 4)}",
                 "Compute $h=(b-a)/n$."),
            step(2, "Evaluate ordinates", ydetail,
                 "Substitute each required $x$-value into the integrand."),
            step(3, "Form the weighted sum", f"S = {fmt(ys[0] + 2*sum(ys[1:-1]) + ys[-1], 4)}",
                 "Apply $y_0 + 2y_1 + \\cdots + 2y_{n-1} + y_n$."),
            step(4, "Multiply by $h/2$", f"\\dfrac{{{fmt(h,4)}}}{{2}} \\times {fmt(ys[0] + 2*sum(ys[1:-1]) + ys[-1], 4)} = {fmt(est, 3)}",
                 "This is the trapezium-rule estimate."),
            step(5, "Round appropriately", f"\\approx {fmt(est, 3)}",
                 "Give the final value to three decimal places as requested."),
            step(6, "Sanity check", "\\text{positive integrand } \\Rightarrow \\text{positive estimate}",
                 "A quick sign/size check helps catch arithmetic slips.", diagram=None),
        ],
        f"${fmt(est, 3)}$.",
    ))

# Compare n vs 2n
for qid, a, b, n in [("q029", 0, 2, 2), ("q030", 0, 1, 2), ("q031", 1, 4, 3)]:
    f = (lambda x: x ** 2) if qid != "q031" else (lambda x: math.sqrt(x))
    label = "x^2" if qid != "q031" else "\\sqrt{x}"
    est1, h1, _, _ = trap_estimate(f, a, b, n)
    est2, h2, _, _ = trap_estimate(f, a, b, 2 * n)
    questions.append(make_q(
        qid, "Intermediate", 5, "written", ["trapezium rule", "accuracy"],
        f"Estimate $\\displaystyle\\int_{{{a}}}^{{{b}}} {label}\\,dx$ using the trapezium rule with (i) $n={n}$ strips and (ii) $n={2*n}$ strips. Which estimate is likely to be more accurate?",
        [
            step(1, f"Case (i): $n={n}$", f"h = {fmt(h1)};\\; \\text{{estimate}} \\approx {fmt(est1, 4)}",
                 "Apply the rule with fewer strips."),
            step(2, f"Case (ii): $n={2*n}$", f"h = {fmt(h2)};\\; \\text{{estimate}} \\approx {fmt(est2, 4)}",
                 "Halving $h$ by doubling the number of strips."),
            step(3, "Compare the two estimates", f"{fmt(est1,4)} \\text{{ vs }} {fmt(est2,4)}",
                 "See how the value changes when strips are refined."),
            step(4, "General principle", "n \\uparrow \\Rightarrow h \\downarrow \\Rightarrow \\text{better fit to curve}",
                 "More strips mean chords follow the graph more closely."),
            step(5, "Identify the better estimate", f"n={2*n} \\text{{ is more accurate}}",
                 "The estimate with twice as many strips is typically closer to the true integral."),
            step(6, "Note on concavity", "\\text{refining strips reduces error (usually)}",
                 "Unless the function is linear, extra strips improve the approximation."),
        ],
        f"(i) ${fmt(est1, 4)}$; (ii) ${fmt(est2, 4)}$. The $n={2*n}$ estimate is more accurate.",
    ))

# Percentage error intermediate
pe_specs = [
    ("q032", lambda x: x ** 2, 0, 2, 4, 8 / 3),
    ("q033", math.sin, 0, math.pi, 4, 2),
    ("q034", math.exp, 0, 1, 4, math.e - 1),
    ("q035", lambda x: 1 / x, 1, 2, 4, math.log(2)),
]
for qid, f, a, b, n, exact in pe_specs:
    est, h, _, _ = trap_estimate(f, a, b, n)
    pe = abs(est - exact) / exact * 100
    questions.append(make_q(
        qid, "Intermediate", 6, "numeric", ["percentage error", "trapezium rule"],
        f"The trapezium rule with $n = {n}$ strips gives an estimate of ${fmt(est, 4)}$ for $\\displaystyle\\int_{{{a}}}^{{{b}}} f(x)\\,dx$. Given that the exact value is ${fmt(exact, 4)}$, find the percentage error.",
        [
            step(1, "Recall percentage error formula", "\\text{percentage error} = \\dfrac{|\\text{estimate} - \\text{exact}|}{|\\text{exact}|} \\times 100\\%",
                 "Measure relative error against the true value."),
            step(2, "Find the absolute difference", f"|{fmt(est,4)} - {fmt(exact,4)}| = {fmt(abs(est-exact), 4)}",
                 "Subtract and take modulus."),
            step(3, "Divide by the exact value", f"\\dfrac{{{fmt(abs(est-exact),4)}}}{{{fmt(exact,4)}}}",
                 "Normalise by the true integral."),
            step(4, "Convert to percentage", f"\\times 100\\% = {fmt(pe, 2)}\\%",
                 "Multiply by $100$ for a percentage."),
            step(5, "Interpret", f"\\text{{error }} \\approx {fmt(pe,1)}\\%",
                 "This quantifies how far the trapezium estimate is from the exact area."),
            step(6, "Could improve by increasing $n$", "n \\uparrow \\Rightarrow \\text{error usually decreases}",
                 "More strips would typically shrink this percentage."),
        ],
        f"${fmt(pe, 2)}\\%$.",
    ))

# ══════════════════════════════════════════════════════════════════════════════
# HARD q036–q053
# ══════════════════════════════════════════════════════════════════════════════

hard_specs = [
    ("q036", "x^2", lambda x: x ** 2, 0, 1, 8, 1 / 3),
    ("q037", "e^x", math.exp, 0, 1, 8, math.e - 1),
    ("q038", "\\sin x", math.sin, 0, math.pi, 8, 2),
    ("q039", "\\cos x", math.cos, 0, math.pi, 8, 0),
    ("q040", "x^3 - 3x", lambda x: x ** 3 - 3 * x, 0, 2, 6, -2),
    ("q041", "\\dfrac{1}{1+x^2}", lambda x: 1 / (1 + x ** 2), 0, 1, 6, math.pi / 4),
    ("q042", "x e^{-x}", lambda x: x * math.exp(-x), 0, 2, 6, 1 - 3 * math.e ** (-2)),
    ("q043", "\\ln x", math.log, 1, math.e, 6, 0.5),
]
for qid, label, f, a, b, n, exact in hard_specs:
    est, h, xs, ys = trap_estimate(f, a, b, n)
    pe = abs(est - exact) / (abs(exact) if abs(exact) > 1e-6 else 1) * 100
    questions.append(make_q(
        qid, "Hard", 7, "numeric", ["trapezium rule", "comparison"],
        f"(a) Use the trapezium rule with $n = {n}$ strips to estimate $\\displaystyle\\int f(x)\\,dx$ for $f(x)={label}$ on $[{fmt(a) if a != math.pi else '0'}, {fmt(b) if b != math.e else 'e'}]$. (b) Find the exact integral. (c) State whether the rule over- or under-estimates on this interval.",
        [
            step(1, "Part (a): strip width", f"h = {fmt(h, 4)}",
                 "Set up the equal strips."),
            step(2, "Evaluate all ordinates", f"\\text{{use }} n={n} \\Rightarrow n+1 \\text{{ values}}",
                 "Systematic substitution avoids missing an interior point."),
            step(3, "Trapezium estimate", f"\\approx {fmt(est, 4)}",
                 "Apply the full weighting and multiply by $h/2$."),
            step(4, "Part (b): exact integral", f"\\displaystyle\\int = {fmt(exact, 4)}",
                 "Integrate analytically for comparison."),
            step(5, "Compare estimate and exact", f"{fmt(est,4)} \\text{{ vs }} {fmt(exact,4)}",
                 "See whether the rule is high or low."),
            step(6, "Part (c): concavity / over-under", "\\text{use } f''(x) \\text{ sign on interval}",
                 "Concave up $\\Rightarrow$ over-estimate; concave down $\\Rightarrow$ under-estimate."),
            step(7, "Percentage error (extra)", f"\\approx {fmt(pe, 2)}\\%",
                 "Quantifies accuracy with the chosen $n$."),
        ],
        f"(a) ${fmt(est, 4)}$; (b) exact $= {fmt(exact, 4)}$; (c) compare using concavity of $f$ on the interval.",
    ))

# Multi-part modelling hard
questions.append(make_q(
    "q044", "Hard", 8, "written", ["trapezium rule", "modelling"],
    "A river's cross-sectional area is modelled using widths measured every $2\\ \\text{m}$ across a $10\\ \\text{m}$ channel. The depths (in metres) at $0, 2, 4, 6, 8, 10\\ \\text{m}$ from the left bank are $0, 1.2, 1.8, 2.0, 1.5, 0$. Treating depth as $f(x)$, use the trapezium rule to estimate the cross-sectional area.",
    [
        step(1, "Set up the integral model", "\\text{area} = \\displaystyle\\int_0^{10} f(x)\\,dx",
             "Depth profile $f(x)$ gives area when integrated across the width."),
        step(2, "Identify strips", "n = 5,\\; h = 2",
             "Five strips of width $2\\ \\text{m}$ on $[0,10]$."),
        step(3, "Ordinates from data", "y_0=0,\\; y_1=1.2,\\; y_2=1.8,\\; y_3=2.0,\\; y_4=1.5,\\; y_5=0",
             "Read depths at each measurement point."),
        step(4, "Weighted sum", "0 + 2(1.2) + 2(1.8) + 2(2.0) + 2(1.5) + 0 = 14.0",
             "Apply trapezium weighting."),
        step(5, "Multiply by $h/2$", "\\dfrac{2}{2} \\times 14 = 14",
             "With $h=2$, the factor $h/2$ is $1$."),
        step(6, "Units", "14\\ \\text{m}^2",
             "Depth $\\times$ width gives area."),
        step(7, "Modelling note", "\\text{depths at discrete points } \\Rightarrow \\text{trapezium rule natural}",
             "Real data often arrives as equally spaced readings — ideal for this rule."),
        step(8, "Answer", "\\text{cross-sectional area} \\approx 14\\ \\text{m}^2",
             "This is the estimated area of the river cross-section."),
    ],
    "Cross-sectional area $\\approx 14\\ \\text{m}^2$.",
))

questions.append(make_q(
    "q045", "Hard", 8, "written", ["trapezium rule", "velocity"],
    "A car's velocity $v\\ \\text{(m s}^{-1}\\text{)}$ at times $t = 0, 1, 2, 3, 4\\ \\text{s}$ is $0, 8, 14, 18, 20$. Use the trapezium rule to estimate the distance travelled in the first $4\\ \\text{s}$.",
    [
        step(1, "Link distance to integral", "s = \\displaystyle\\int_0^4 v(t)\\,dt",
             "Area under the velocity-time graph equals displacement."),
        step(2, "Strip width", "h = 1,\\; n = 4",
             "Readings every second give four unit strips."),
        step(3, "Ordinates", "v_0=0,\\; v_1=8,\\; v_2=14,\\; v_3=18,\\; v_4=20",
             "Take velocities at each time."),
        step(4, "Weighted sum", "0 + 2(8) + 2(14) + 2(18) + 20 = 100",
             "Standard trapezium weighting."),
        step(5, "Apply $h/2$", "\\dfrac{1}{2} \\times 100 = 50",
             "Multiply by $\\tfrac{1}{2}$ since $h=1$."),
        step(6, "Units", "50\\ \\text{m}",
             "Velocity $\\times$ time gives distance."),
        step(7, "Interpretation", "\\text{estimate of total displacement}",
             "The car travels roughly $50\\ \\text{m}$ in $4\\ \\text{s}$ under this model."),
        step(8, "Could refine", "\\text{more frequent readings } \\Rightarrow \\text{ better estimate}",
             "Finer time steps would track changes in speed more closely."),
    ],
    "Distance $\\approx 50\\ \\text{m}$.",
))

# Find n for target accuracy (hard)
questions.append(make_q(
    "q046", "Hard", 9, "written", ["trapezium rule", "error"],
    "For $\\displaystyle\\int_0^1 x^2\\,dx$, the trapezium rule with $n=1$ gives $0.5$ and with $n=2$ gives $0.375$. The exact value is $\\tfrac{1}{3}$. Explain why doubling $n$ moved the estimate closer to the exact value, and predict whether $n=4$ will be closer still.",
    [
        step(1, "Exact value", "\\displaystyle\\int_0^1 x^2\\,dx = \\dfrac{1}{3}",
             "Baseline for comparison."),
        step(2, "Error at $n=1$", "|0.5 - \\tfrac{1}{3}| = \\tfrac{1}{6}",
             "A single strip is quite crude on a curved graph."),
        step(3, "Error at $n=2$", "|0.375 - \\tfrac{1}{3}| = \\tfrac{1}{24}",
             "Halving $h$ reduced the error substantially."),
        step(4, "Why improvement happens", "h \\text{ halved } \\Rightarrow \\text{ chords follow } x^2 \\text{ more closely}",
             "Narrower strips mean each chord spans a gentler part of the curve."),
        step(5, "Concavity", "x^2 \\text{ concave up } \\Rightarrow \\text{ over-estimate, but gap shrinks}",
             "Still an over-estimate at $n=2$, but by less."),
        step(6, "Compute $n=4$ (sketch)", "\\text{estimate} = 0.34375",
             "With four strips the estimate is $0.34375$."),
        step(7, "Error at $n=4$", "|0.34375 - \\tfrac{1}{3}| \\approx 0.0104",
             "Still smaller than the $n=2$ error."),
        step(8, "Prediction confirmed", "n=4 \\text{ is closer than } n=2",
             "Increasing strip count continues to improve accuracy for this smooth integrand."),
        step(9, "General remark", "\\text{error typically } O(h^2) \\text{ for trapezium rule}",
             "At A-Level we mainly observe that more strips help; the error shrinks as $h$ decreases."),
    ],
    "Halving $h$ lets chords hug $y=x^2$ better, reducing the over-estimate. $n=4$ gives $0.34375$, closer to $\\tfrac{1}{3}$ than $0.375$.",
))

# More hard through q053
extra_hard = [
    ("q047", "\\sin^2 x", lambda x: math.sin(x) ** 2, 0, math.pi, 6, math.pi / 2),
    ("q048", "x^2 e^{-x}", lambda x: x ** 2 * math.exp(-x), 0, 3, 8, 2 - 10 * math.e ** (-3)),
    ("q049", "\\dfrac{1}{\\sqrt{x}}", lambda x: 1 / math.sqrt(x), 1, 4, 6, 4),
    ("q050", "4 - x^2", lambda x: 4 - x ** 2, -2, 2, 8, 32 / 3),
    ("q051", "x\\ln x", lambda x: x * math.log(x) if x > 0 else 0, 1, math.e, 6, 0.25 * (math.e ** 2 + 1)),
    ("q052", "\\tan x", math.tan, 0, math.pi / 4, 4, 0.5 * math.log(2)),
    ("q053", "e^{-x^2}", lambda x: math.exp(-x ** 2), 0, 1, 8, None),
]
for qid, label, f, a, b, n, exact in extra_hard:
    est, h, xs, ys = trap_estimate(f, a, b, n)
    a_tex = "0" if a == 0 else ("\\pi" if a == math.pi else fmt(a))
    b_tex = "\\pi/4" if abs(b - math.pi / 4) < 1e-9 else ("e" if b == math.e else fmt(b))
    exact_note = f"Exact value $\\approx {fmt(exact, 4)}$." if exact is not None else "No elementary antiderivative — a numerical method is appropriate."
    questions.append(make_q(
        qid, "Hard", 8, "numeric", ["trapezium rule", "advanced"],
        f"Estimate $\\displaystyle\\int_{{{a_tex}}}^{{{b_tex}}} {label}\\,dx$ using the trapezium rule with $n = {n}$ strips. Give your answer to $4$ decimal places.",
        [
            step(1, "Strip width", f"h = {fmt(h, 4)}",
                 "Divide the interval into $n$ equal parts."),
            step(2, "Tabulate ordinates", f"\\text{{{n+1} values of }} f(x)",
                 "Evaluate the integrand at each $x_i = a + ih$."),
            step(3, "Weighted sum", f"S = {fmt(ys[0] + 2*sum(ys[1:-1]) + ys[-1], 4)}",
                 "Apply $y_0 + 2\\sum y_i + y_n$."),
            step(4, "Trapezium estimate", f"\\dfrac{{{fmt(h,4)}}}{{2}} \\times S = {fmt(est, 4)}",
                 "Multiply by $h/2$."),
            step(5, "Round to 4 d.p.", f"{fmt(est, 4)}",
                 "Final answer as requested."),
            step(6, "Exact comparison", exact_note,
                 "Compare mentally if an exact value is known."),
            step(7, "Concavity (if applicable)", "\\text{check } f'' \\text{ for over/under-estimate}",
                 "Sign of the second derivative explains systematic bias."),
            step(8, "Conclusion", f"\\displaystyle\\int \\approx {fmt(est, 4)}",
                 "Trapezium-rule approximation."),
        ],
        f"${fmt(est, 4)}$.",
    ))

# ══════════════════════════════════════════════════════════════════════════════
# CHALLENGE q054–q070
# ══════════════════════════════════════════════════════════════════════════════

questions.append(make_q(
    "q054", "Challenge", 10, "written", ["trapezium rule", "proof"],
    "Show that the trapezium rule is exact for any linear function $f(x) = mx + c$ on any interval $[a,b]$ with any $n \\ge 1$.",
    [
        step(1, "Area under a line", "\\displaystyle\\int_a^b (mx+c)\\,dx = m\\dfrac{b^2-a^2}{2} + c(b-a)",
             "Integrate term by term."),
        step(2, "Trapezium rule setup", "h = \\dfrac{b-a}{n}",
             "Equal strips."),
        step(3, "Ordinates on a line", "f(a+ih) = m(a+ih)+c",
             "Substitute into the linear function."),
        step(4, "Weighted sum of an arithmetic progression", "\\sum \\text{weighted } f(x_i) \\text{ simplifies}",
             "The weighted sum of equally spaced values of a linear function collapses neatly."),
        step(5, "Algebraic simplification", "\\dfrac{h}{2}\\times(\\text{weighted sum}) = m\\dfrac{b^2-a^2}{2} + c(b-a)",
             "After simplification the trapezium estimate matches the integral exactly."),
        step(6, "Geometric view", "\\text{chords on a line} = \\text{the line}",
             "No curvature means zero approximation error."),
        step(7, "Special case $m=0$", "f(x)=c \\Rightarrow \\text{rectangle areas exact}",
             "Constant functions are the horizontal-line case."),
        step(8, "Conclusion", "\\text{trapezium rule exact for all linear } f",
             "This is why linear integrands never need refinement."),
        step(9, "Exam relevance", "\\text{always check if integrand is linear before long calculations}",
             "Spotting linearity saves time."),
    ],
    "Chords on a straight-line graph coincide with the graph, so each trapezium area equals the true strip area and the sum equals the exact integral.",
))

questions.append(make_q(
    "q055", "Challenge", 10, "written", ["over-estimate", "concavity", "proof"],
    "Prove that if $f''(x) > 0$ on $[a,b]$, then the trapezium rule over-estimates $\\displaystyle\\int_a^b f(x)\\,dx$.",
    [
        step(1, "Concave up definition", "f''(x) > 0 \\Rightarrow f \\text{ concave up}",
             "The graph bends upward throughout the interval."),
        step(2, "Single strip geometry", "\\text{chord lies on or above } y=f(x)",
             "For a concave-up function, the line segment joining two graph points lies above the graph between them."),
        step(3, "Area comparison on one strip", "A_{\\text{trap}} \\ge A_{\\text{true}}",
             "The trapezium under the chord contains the area under the curve."),
        step(4, "Repeat for each strip", "\\text{sum of inequalities}",
             "Add the area inequalities over all $n$ strips."),
        step(5, "Total estimate", "\\text{trapezium rule} \\ge \\int_a^b f(x)\\,dx",
             "The full approximation is at least as large as the true integral."),
        step(6, "Strict inequality if strictly concave", "f'' > 0 \\Rightarrow \\text{strict over-estimate (unless } f \\text{ linear)}",
             "Genuine curvature creates a positive gap."),
        step(7, "Example", "x^2 \\text{ on } [0,1]",
             "Parabolas illustrate the result concretely."),
        step(8, "Contrast", "f'' < 0 \\Rightarrow \\text{under-estimate}",
             "Concave down reverses the inequality."),
        step(9, "Practical use", "\\text{know bias direction without computing exact integral}",
             "Concavity tells you whether the rule is high or low."),
    ],
    "If $f''(x)>0$, each chord lies above $y=f(x)$, so each trapezium area exceeds the true strip area; summing gives an over-estimate.",
))

# Challenge multi-step exam questions q056-q070
challenge_specs = [
    ("q056", "x^2", lambda x: x ** 2, 0, 2, 4, 8, "Find the trapezium-rule estimate with $n=4$, the exact integral, and the percentage error."),
    ("q057", "e^x", math.exp, 0, 2, 6, math.e ** 2 - 1, "Use $n=6$ strips; compare with the exact value and comment on over/under-estimation."),
    ("q058", "\\sin x", math.sin, 0, 2 * math.pi, 8, 0, "Estimate the integral (which equals $0$ exactly); explain why the trapezium estimate may be non-zero."),
    ("q059", "x^3", lambda x: x ** 3, -1, 1, 4, 0, "The function is odd on $[-1,1]$; discuss symmetry and the trapezium estimate."),
    ("q060", "\\sqrt{4-x^2}", lambda x: math.sqrt(4 - x ** 2), -2, 2, 8, math.pi, "Interpret the integral as a semicircle area; compare with the trapezium estimate."),
]
for qid, label, f, a, b, n, exact, prompt_extra in challenge_specs:
    est, h, xs, ys = trap_estimate(f, a, b, n)
    pe = abs(est - exact) / (abs(exact) if abs(exact) > 1e-6 else 1) * 100 if exact != 0 else abs(est)
    a_tex = "0" if a == 0 else fmt(a)
    b_tex = "2\\pi" if abs(b - 2 * math.pi) < 1e-9 else fmt(b)
    questions.append(make_q(
        qid, "Challenge", 12, "written", ["trapezium rule", "exam-style"],
        f"For $f(x)={label}$ on $[{a_tex}, {b_tex}]$, {prompt_extra}",
        [
            step(1, "Plan", "\\text{trapezium rule } \\to \\text{ exact } \\to \\text{ compare}",
                 "Structure the solution in clear parts."),
            step(2, "Strip width", f"h = {fmt(h, 4)}",
                 "Compute $h$ from the interval and $n$."),
            step(3, "Ordinates", f"\\text{{evaluate }} f \\text{{ at }} {n+1} \\text{{ points}}",
                 "Organise values in a table to avoid errors."),
            step(4, "Trapezium estimate", f"\\approx {fmt(est, 4)}",
                 "Apply the weighting and multiply by $h/2$."),
            step(5, "Exact integral", f"\\displaystyle\\int = {fmt(exact, 4)}" if exact != 0 else "\\displaystyle\\int = 0",
                 "Use known antiderivative or geometric interpretation."),
            step(6, "Compare", f"\\text{{estimate }} {fmt(est,4)} \\text{{ vs exact }} {fmt(exact,4)}",
                 "Quantify the difference."),
            step(7, "Percentage error or bias", f"\\text{{error/bias discussion}}",
                 "Link to concavity or symmetry as appropriate."),
            step(8, "Interpretation", prompt_extra.split(";")[-1].strip() if ";" in prompt_extra else "\\text{contextual conclusion}",
                 "Explain the result in context."),
            step(9, "Refinement", "n \\uparrow \\Rightarrow \\text{typically closer}",
                 "More strips would further reduce error where the function is curved."),
            step(10, "Final summary", f"\\text{{estimate }} {fmt(est,4)}",
                 "State the key numerical answer clearly."),
        ],
        f"Trapezium estimate $\\approx {fmt(est, 4)}$; exact $= {fmt(exact, 4)}$." if exact != 0 else f"Trapezium estimate $\\approx {fmt(est, 4)}$ (exact integral $= 0$).",
    ))

# Table challenge q061
questions.append(make_q(
    "q061", "Challenge", 11, "numeric", ["trapezium rule", "table"],
    "The table shows $f(x)$ for $0 \\le x \\le 6$ with strips of width $1.5$.\n\n| $x$ | 0 | 1.5 | 3 | 4.5 | 6 |\n|---|---|---|---|---|---|\n| $f(x)$ | 1 | 2.5 | 3 | 2.8 | 2 |\n\n(a) Find $n$ and $h$. (b) Estimate $\\displaystyle\\int_0^6 f(x)\\,dx$. (c) Given that $f''(x) < 0$ on $[0,6]$, classify the estimate.",
    [
        step(1, "Part (a): count strips", "n = 4",
             "Four intervals between five tabulated points."),
        step(2, "Strip width", "h = 1.5",
             "Each strip is $1.5$ units wide."),
        step(3, "Part (b): ordinates", "1,\\; 2.5,\\; 3,\\; 2.8,\\; 2",
             "Read from the table."),
        step(4, "Weighted sum", "1 + 2(2.5) + 2(3) + 2(2.8) + 2 = 1 + 5 + 6 + 5.6 + 2 = 19.6",
             "Standard weighting."),
        step(5, "Multiply by $h/2$", "\\dfrac{1.5}{2} \\times 19.6 = 14.7",
             "Apply the trapezium factor."),
        step(6, "Part (c): concavity", "f'' < 0 \\Rightarrow \\text{concave down}",
             "Given information about the second derivative."),
        step(7, "Classify estimate", "\\text{under-estimate}",
             "Concave down implies chords lie below the curve."),
        step(8, "Full answer", "n=4,\\; h=1.5,\\; \\int \\approx 14.7,\\; \\text{under-estimate}",
             "Combine all parts."),
    ],
    "(a) $n=4$, $h=1.5$; (b) $14.7$; (c) under-estimate.",
))

# Remaining challenge q062-q070
remaining = [
    ("q062", "Compare $n=4$ and $n=8$ for $\\int_0^1 e^x\\,dx$ and find which is within $1\\%$ of $e-1$.", math.exp, 0, 1, 4, math.e - 1),
    ("q063", "For $\\int_0^{\\pi/2} \\cos x\\,dx$ with $n=4$, find the estimate and exact value $1$.", math.cos, 0, math.pi / 2, 4, 1),
    ("q064", "Estimate $\\int_1^4 \\ln x\\,dx$ with $n=6$; exact value is $4\\ln 4 - 3$.", math.log, 1, 4, 6, 4 * math.log(4) - 3),
    ("q065", "Water flows into a tank so that the rate $r$ (litres per minute) at times $0,5,10,15,20$ min is $0,12,20,25,28$. Estimate the total volume using the trapezium rule.", None, 0, 20, 4, None),
    ("q066", "Use the trapezium rule with $n=10$ on $\\int_0^1 \\dfrac{1}{1+x^2}\\,dx$; compare with $\\pi/4$.", lambda x: 1 / (1 + x ** 2), 0, 1, 10, math.pi / 4),
    ("q067", "For $f(x)=x^2$ on $[0,1]$, find the minimum $n$ such that the trapezium estimate differs from $1/3$ by less than $0.01$.", lambda x: x ** 2, 0, 1, None, 1 / 3),
    ("q068", "Explain why the trapezium rule cannot be expected to be exact for $f(x)=\\sin x$ on $[0,\\pi]$ unless $n$ is very large.", math.sin, 0, math.pi, 4, 2),
    ("q069", "Estimate $\\int_0^2 |x-1|\\,dx$ with $n=4$ (piecewise linear integrand).", lambda x: abs(x - 1), 0, 2, 4, 1),
    ("q070", "A student claims the trapezium rule always improves when $n$ is doubled. Give a counterexample or explain when the claim holds.", None, 0, 1, 2, None),
]

for item in remaining:
    qid = item[0]
    prompt = item[1]
    f = item[2]
    a = item[3]
    b = item[4]
    n = item[5]
    exact = item[6]

    if qid == "q065":
        questions.append(make_q(
            qid, "Challenge", 12, "numeric", ["modelling", "trapezium rule"],
            prompt,
            [
                step(1, "Model volume as integral", "V = \\displaystyle\\int_0^{20} r(t)\\,dt",
                     "Integrating flow rate gives total volume."),
                step(2, "Strip width", "h = 5,\\; n = 4",
                     "Readings every $5$ minutes."),
                step(3, "Ordinates", "0,\\; 12,\\; 20,\\; 25,\\; 28",
                     "Rates at each time."),
                step(4, "Weighted sum", "0 + 2(12) + 2(20) + 2(25) + 28 = 142",
                     "Trapezium weighting."),
                step(5, "Apply $h/2$", "\\dfrac{5}{2} \\times 142 = 355",
                     "Multiply by $\\tfrac{5}{2}$."),
                step(6, "Units", "355\\ \\text{litres}",
                     "Rate $\\times$ time gives volume."),
                step(7, "Modelling assumption", "\\text{rate varies linearly between readings}",
                     "Trapezium rule assumes linear interpolation between data points."),
                step(8, "Could improve", "\\text{more frequent sampling}",
                     "Finer time steps track rapid changes better."),
                step(9, "Answer", "V \\approx 355\\ \\text{L}",
                     "Estimated total volume in the first $20$ minutes."),
            ],
            "$355$ litres.",
        ))
        continue

    if qid == "q067":
        n_best = 1
        for trial in range(1, 51):
            est, _, _, _ = trap_estimate(f, a, b, trial)
            if abs(est - exact) < 0.01:
                n_best = trial
                break
        est, h, _, _ = trap_estimate(f, a, b, n_best)
        questions.append(make_q(
            qid, "Challenge", 14, "numeric", ["trapezium rule", "error bound"],
            prompt,
            [
                step(1, "Target", "|\\text{{estimate}} - \\tfrac{{1}}{{3}}| < 0.01",
                     "We need the trapezium value within one hundredth of the exact integral."),
                step(2, "Try $n=1$", "0.5 \\Rightarrow \\text{error } 0.167",
                     "Too large."),
                step(3, "Try $n=2$", "0.375 \\Rightarrow \\text{error } 0.042",
                     "Still too large."),
                step(4, "Try $n=4$", "0.34375 \\Rightarrow \\text{error } 0.0104",
                     "Just above the tolerance."),
                step(5, "Try $n=5$", f"\\text{{estimate}} \\approx {fmt(trap_estimate(f,a,b,5)[0],4)}",
                     "Check the next strip count."),
                step(6, "Find first $n$ that works", f"n = {n_best}",
                     "Systematic trial finds the smallest suitable $n$."),
                step(7, "Verify", f"\\text{{estimate}} = {fmt(est,4)},\\; |{fmt(est,4)} - \\tfrac{{1}}{{3}}| < 0.01",
                     "Confirm the error bound is met."),
                step(8, "Concavity note", "x^2 \\text{ concave up } \\Rightarrow \\text{ over-estimate}",
                     "All estimates exceed $\\tfrac{1}{3}$; we need them close from above."),
            ],
            f"Minimum $n = {n_best}$ (estimate $\\approx {fmt(est, 4)}$).",
        ))
        continue

    if qid == "q068":
        est, h, _, _ = trap_estimate(f, a, b, n)
        questions.append(make_q(
            qid, "Challenge", 10, "written", ["trapezium rule", "curvature"],
            prompt,
            [
                step(1, "Exact integral", "\\displaystyle\\int_0^{\\pi} \\sin x\\,dx = 2",
                     "Standard antiderivative."),
                step(2, "Curved graph", "\\sin x \\text{ is not linear on } [0,\\pi]",
                     "Chords cut across the curve unless strips are very narrow."),
                step(3, "Small $n$ estimate", f"n=4 \\Rightarrow \\approx {fmt(est,4)}",
                     "A coarse estimate is close but not exact."),
                step(4, "Alternating concavity", "\\sin x \\text{ concave down then up on } [0,\\pi]",
                     "Bias direction can vary across strips."),
                step(5, "Net error", "\\text{errors partly cancel but do not vanish for small } n",
                     "Symmetry helps accuracy but does not give exactness."),
                step(6, "Exactness condition", "\\text{exact only if chords lie on curve (linear pieces)}",
                     "That requires infinitely many strips in the limit."),
                step(7, "Limit", "n \\to \\infty \\Rightarrow \\text{estimate } \\to 2",
                     "The rule converges to the true integral for smooth functions."),
                step(8, "Exam message", "\\text{finite } n \\Rightarrow \\text{approximation}",
                     "Always treat the trapezium rule as an estimate unless $f$ is linear."),
            ],
            "Because $\\sin x$ is curved (and alternates concavity on $[0,\\pi]$), finite $n$ gives chords that do not lie on the graph; exactness requires the limit $n \\to \\infty$ (or a linear integrand).",
        ))
        continue

    if qid == "q070":
        questions.append(make_q(
            qid, "Challenge", 12, "written", ["trapezium rule", "conceptual"],
            prompt,
            [
                step(1, "What the claim says", "\\text{doubling } n \\text{ always improves accuracy}",
                     "We test whether a larger estimate is always closer to the truth."),
                step(2, "True for smooth integrands", "f \\text{ nice } \\Rightarrow \\text{error } \\to 0 \\text{ as } n \\to \\infty",
                     "For well-behaved functions, refinement eventually helps."),
                step(3, "Monotonicity of error is not guaranteed strip-by-strip", "\\text{error can oscillate slightly with } n",
                     "In practice errors decrease on average but need not strictly fall every doubling."),
                step(4, "Linear case", "f \\text{ linear } \\Rightarrow \\text{exact for all } n",
                     "Doubling $n$ neither helps nor hurts — already exact."),
                step(5, "Rounded arithmetic", "\\text{calculator rounding can make } n=2n \\text{ appear worse}",
                     "Finite precision is a practical caveat."),
                step(6, "Correct statement", "\\text{error generally decreases as } h \\to 0",
                     "The rigorous A-Level statement is that more strips improve the approximation in the limit."),
                step(7, "Student claim", "\\text{too strong if interpreted as strict improvement every time}",
                     "Better: doubling $n$ usually reduces error for curved integrands."),
                step(8, "Conclusion", "\\text{claim is not universally true, but increasing } n \\text{ is standard practice}",
                     "Use more strips when greater accuracy is needed."),
            ],
            "Doubling $n$ does not **always** strictly improve the estimate (e.g. linear $f$ is already exact), but for typical curved integrands increasing $n$ reduces error as $h \\to 0$.",
        ))
        continue

    est, h, _, _ = trap_estimate(f, a, b, n)
    if qid == "q062":
        est8, _, _, _ = trap_estimate(f, a, b, 8)
        pe4 = abs(est - exact) / exact * 100
        pe8 = abs(est8 - exact) / exact * 100
        better = "n=8" if pe8 < pe4 else "n=4"
        within = "n=8" if pe8 < 1 else ("n=4" if pe4 < 1 else "neither within 1% without more strips")
        questions.append(make_q(
            qid, "Challenge", 12, "written", ["trapezium rule", "comparison"],
            prompt,
            [
                step(1, "Exact value", f"e - 1 \\approx {fmt(exact,4)}",
                     "Baseline for percentage errors."),
                step(2, "$n=4$ estimate", f"\\approx {fmt(est,4)}",
                     "Apply the rule with four strips."),
                step(3, "$n=4$ percentage error", f"{fmt(pe4,2)}\\%",
                     "Relative error at $n=4$."),
                step(4, "$n=8$ estimate", f"\\approx {fmt(est8,4)}",
                     "Double the strips."),
                step(5, "$n=8$ percentage error", f"{fmt(pe8,2)}\\%",
                     "Typically smaller than at $n=4$."),
                step(6, "Which is more accurate?", better,
                     "Compare percentage errors directly."),
                step(7, "Within $1\\%$?", within,
                     "Check which estimate meets the $1\\%$ tolerance."),
                step(8, "Concavity", "e^x \\text{ concave up } \\Rightarrow \\text{over-estimate both}",
                     "Both estimates exceed the true value but $n=8$ is closer."),
            ],
            f"$n=4$: ${fmt(est,4)}$ ({fmt(pe4,2)}\\% error); $n=8$: ${fmt(est8,4)}$ ({fmt(pe8,2)}\\% error). {within} is within $1\\%$.",
        ))
    else:
        pe = abs(est - exact) / abs(exact) * 100 if exact and abs(exact) > 1e-9 else None
        steps = [
            step(1, "Set up", f"n={n},\\; h={fmt(h,4)}",
                 "Equal strips on the interval."),
            step(2, "Trapezium estimate", f"\\approx {fmt(est,4)}",
                 "Full application of the rule."),
            step(3, "Exact value", f"{fmt(exact,4)}" if exact is not None else "\\text{use geometry}",
                 "Known integral or interpretation."),
            step(4, "Compare", f"\\text{{difference}} \\approx {fmt(abs(est-exact),4)}" if exact is not None else "\\text{compare}",
                 "See how close the estimate is."),
            step(5, "Percentage error", f"{fmt(pe,2)}\\%" if pe is not None else "\\text{n/a}",
                 "Quantify relative accuracy."),
            step(6, "Concavity / shape", "\\text{explain bias if applicable}",
                 "Link systematic error to $f''$."),
            step(7, "Context", prompt,
                 "Answer the full exam-style prompt."),
            step(8, "Final answer", f"\\text{{estimate }} {fmt(est,4)}",
                 "State the numerical result clearly."),
        ]
        if qid in ("q066", "q069"):
            steps.append(step(9, "Interpretation", "\\text{geometric or piecewise insight}",
                              "Connect the integral to area or linear pieces."))
            steps.append(step(10, "Summary", f"{fmt(est,4)}",
                              "Consolidated result."))
        questions.append(make_q(
            qid, "Challenge", 11 if qid != "q066" else 13, "numeric" if qid != "q068" else "written",
            ["trapezium rule", "challenge"],
            prompt,
            steps,
            f"Estimate $\\approx {fmt(est, 4)}" + (f"$; exact $= {fmt(exact, 4)}$." if exact is not None else "$."),
        ))

assert len(questions) == 70, f"Expected 70 questions, got {len(questions)}"

header = 'import { Question } from "@/lib/types";\n\nexport const questions: Question[] = '
with open(OUT, "w", encoding="utf-8") as f:
    f.write(header)
    f.write(json.dumps(questions, indent=2, ensure_ascii=False))
    f.write(";\n")

from collections import Counter
diffs = Counter(q["difficulty"] for q in questions)
print(f"Wrote {len(questions)} questions to {OUT}")
print(f"Difficulties: {dict(diffs)}")
