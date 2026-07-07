#!/usr/bin/env python3
"""Generate all 70 questions for Rates of change subtopic (Year 2 Pure)."""
import json
import math

OUT = "/Users/benjaminwalpole/Wisest_Maths_V5/wisest-maths-content/src/data/questions/a-level-maths/year-2-pure/rates-of-change.ts"


def step(n, desc, work, expl, diagram=None):
    return {"stepNumber": n, "description": desc, "workingLatex": work, "explanation": expl, "diagram": diagram}


def make_q(suffix, difficulty, marks, answer_type, tags, text, steps, final, diagram=None):
    return {
        "id": f"al.y2.pure.connected-rates.{suffix}",
        "level": "A-Level Maths",
        "topic": "Year 2 Pure",
        "subtopic": "Rates of change",
        "subtopicId": "al.y2.pure.connected-rates",
        "difficulty": difficulty,
        "marks": marks,
        "answerType": answer_type,
        "tags": tags,
        "questionText": text,
        "questionDiagram": diagram,
        "workedSolution": {"steps": steps, "finalAnswer": final},
    }


def fmt(x, dp=2):
    if abs(x - round(x)) < 1e-9:
        return str(int(round(x)))
    return f"{x:.{dp}f}"


questions = []

# ══════════════════════════════════════════════════════════════════════════════
# EASY q001–q018: chain rule for related rates, simple y = f(x)
# ══════════════════════════════════════════════════════════════════════════════

questions.append(make_q(
    "q001", "Easy", 3, "written", ["chain rule", "related rates", "definition"],
    "A quantity $y$ depends on $x$, and $x$ changes with time $t$. "
    "Explain how to find $\\dfrac{dy}{dt}$ when you know $\\dfrac{dy}{dx}$ and $\\dfrac{dx}{dt}$.",
    [
        step(1, "State the chain rule for related rates",
             "\\frac{dy}{dt} = \\frac{dy}{dx} \\cdot \\frac{dx}{dt}",
             "When $y$ depends on $x$ and $x$ depends on $t$, the overall rate of change of $y$ is found by multiplying how fast $y$ changes with $x$ by how fast $x$ changes with time."),
        step(2, "Identify the two rates needed",
             "\\frac{dy}{dx} \\text{ and } \\frac{dx}{dt}",
             "$\\dfrac{dy}{dx}$ comes from differentiating the relationship $y = f(x)$; $\\dfrac{dx}{dt}$ is given by the problem."),
        step(3, "Multiply the rates",
             "\\frac{dy}{dt} = \\frac{dy}{dx} \\times \\frac{dx}{dt}",
             "The chain rule links the three rates: the time rate equals the spatial rate times the time rate of $x$."),
        step(4, "Units check",
             "\\text{units of } \\frac{dy}{dt} = \\text{units of } y \\text{ per unit time}",
             "The answer must have correct dimensions — e.g. cm s$^{-1}$ if $y$ is in cm and $t$ in seconds."),
        step(5, "When to use this",
             "\\text{Given } \\frac{dx}{dt} \\text{ and a formula linking } y \\text{ to } x",
             "Connected rates problems always give one time rate and ask for another, linked through an equation."),
        step(6, "Summary",
             "\\frac{dy}{dt} = \\frac{dy}{dx}\\cdot\\frac{dx}{dt}",
             "Differentiate $y$ with respect to $x$, then multiply by $\\dfrac{dx}{dt}$."),
    ],
    "$\\dfrac{dy}{dt} = \\dfrac{dy}{dx} \\cdot \\dfrac{dx}{dt}$.",
))

# q002–q008: y = x^n patterns
basic_cases = [
    ("q002", "x^2", "2x", 4, 3, 24, "y = x^2"),
    ("q003", "x^3", "3x^2", 2, 5, 60, "y = x^3"),
    ("q004", "5x", "5", 6, 2, 10, "y = 5x"),
    ("q005", "x^2 + 3x", "2x + 3", 5, 4, 52, "y = x^2 + 3x"),
    ("q006", "2x^2", "4x", 3, 6, 72, "y = 2x^2"),
    ("q007", "x^4", "4x^3", 2, 1, 32, "y = x^4"),
    ("q008", "3x^2 - x", "6x - 1", 4, 2, 46, "y = 3x^2 - x"),
]
for qid, y_expr, dydx_expr, x_val, dxdt, dydt, y_label in basic_cases:
    questions.append(make_q(
        qid, "Easy", 3, "numeric", ["chain rule", "polynomial"],
        f"Given that ${y_label}$ and $\\dfrac{{dx}}{{dt}} = {dxdt}$, find $\\dfrac{{dy}}{{dt}}$ when $x = {x_val}$.",
        [
            step(1, "Write the chain rule", "\\frac{dy}{dt} = \\frac{dy}{dx}\\cdot\\frac{dx}{dt}",
                 "We link the time rate of $y$ to the time rate of $x$ through the derivative $\\dfrac{dy}{dx}$."),
            step(2, "Differentiate $y$ with respect to $x$", f"\\frac{{dy}}{{dx}} = {dydx_expr}",
                 f"Differentiating ${y_label}$ gives $\\dfrac{{dy}}{{dx}} = {dydx_expr}$."),
            step(3, f"Substitute $x = {x_val}$", f"\\frac{{dy}}{{dx}}\\bigg|_{{x={x_val}}} = {dydx_expr.replace('x', str(x_val)) if 'x' in dydx_expr else dydx_expr}",
                 f"At $x = {x_val}$, evaluate the derivative."),
            step(4, "Evaluate $\\dfrac{dy}{dx}$ at the point",
                 f"\\frac{{dy}}{{dx}} = {fmt(dydt // dxdt if dxdt else dydt)}",
                 f"Substituting $x = {x_val}$ into $\\dfrac{{dy}}{{dx}} = {dydx_expr}$."),
            step(5, "Multiply by $\\dfrac{dx}{dt}$",
                 f"\\frac{{dy}}{{dt}} = {fmt(dydt // dxdt)} \\times {dxdt}",
                 f"Given $\\dfrac{{dx}}{{dt}} = {dxdt}$."),
            step(6, "Calculate the result", f"\\frac{{dy}}{{dt}} = {dydt}",
                 f"$\\dfrac{{dy}}{{dt}} = {dydt}$ at $x = {x_val}$."),
        ],
        f"$\\dfrac{{dy}}{{dt}} = {dydt}$",
    ))

# q009–q012: area of circle A = πr²
for i, (qid, r, drdt, dAdt) in enumerate([
    ("q009", 5, 2, 20 * math.pi),
    ("q010", 8, 0.5, 8 * math.pi),
    ("q011", 3, 4, 24 * math.pi),
    ("q012", 10, 1, 20 * math.pi),
]):
  questions.append(make_q(
      qid, "Easy", 4, "expression", ["geometry", "circle", "area"],
      f"The radius of a circular oil spill is increasing at $\\dfrac{{dr}}{{dt}} = {drdt}$ cm s$^{{-1}}$. "
      f"The area is $A = \\pi r^2$. Find $\\dfrac{{dA}}{{dt}}$ when $r = {r}$ cm.",
      [
          step(1, "Write the area formula", "A = \\pi r^2",
               "Area depends on radius, so we differentiate $A$ with respect to $r$."),
          step(2, "Differentiate with respect to $r$", "\\frac{dA}{dr} = 2\\pi r",
               "Power rule: derivative of $r^2$ is $2r$, times $\\pi$."),
          step(3, f"Substitute $r = {r}$", f"\\frac{{dA}}{{dr}} = 2\\pi \\times {r} = {2*r}\\pi",
               f"At $r = {r}$ cm, $\\dfrac{{dA}}{{dr}} = {2*r}\\pi$ cm$^2$ per cm."),
          step(4, "Apply the chain rule", "\\frac{dA}{dt} = \\frac{dA}{dr}\\cdot\\frac{dr}{dt}",
               "The rate of change of area with time equals the rate w.r.t. radius times the rate of radius."),
          step(5, f"Substitute $\\dfrac{{dr}}{{dt}} = {drdt}$",
               f"\\frac{{dA}}{{dt}} = {2*r}\\pi \\times {drdt}",
               f"Given $\\dfrac{{dr}}{{dt}} = {drdt}$ cm s$^{{-1}}$."),
          step(6, "Simplify", f"\\frac{{dA}}{{dt}} = {fmt(dAdt)}\\pi \\text{{ cm}}^2\\text{{ s}}^{{-1}}",
               f"The spill area grows at ${fmt(dAdt)}\\pi$ cm$^2$ s$^{{-1}}$."),
      ],
      f"$\\dfrac{{dA}}{{dt}} = {2*r*drdt}\\pi$ cm$^2$ s$^{{-1}}$",
  ))

# q013–q016: volume V = r³ (simplified, no π)
vol_cases = [
    ("q013", 4, 3, 48, "V = r^3"),
    ("q014", 5, 2, 150, "V = r^3"),
    ("q015", 3, 5, 135, "V = r^3"),
    ("q016", 6, 1, 108, "V = r^3"),
]
for qid, r, drdt, dVdt, v_expr in vol_cases:
    questions.append(make_q(
        qid, "Easy", 3, "numeric", ["volume", "chain rule"],
        f"A cube-shaped container has volume ${v_expr}$ (in m$^3$) where $r$ is the side length in metres. "
        f"If $\\dfrac{{dr}}{{dt}} = {drdt}$ m s$^{{-1}}$ when $r = {r}$ m, find $\\dfrac{{dV}}{{dt}}$.",
        [
            step(1, "Differentiate the volume formula", "\\frac{dV}{dr} = 3r^2",
                 "Derivative of $r^3$ is $3r^2$ by the power rule."),
            step(2, f"Evaluate at $r = {r}$", f"\\frac{{dV}}{{dr}} = 3 \\times {r}^2 = {3*r*r}",
                 f"At $r = {r}$ m, $\\dfrac{{dV}}{{dr}} = {3*r*r}$ m$^2$."),
            step(3, "Apply the chain rule", "\\frac{dV}{dt} = \\frac{dV}{dr}\\cdot\\frac{dr}{dt}",
                 "Connect the time rate of volume to the time rate of side length."),
            step(4, f"Substitute known values", f"\\frac{{dV}}{{dt}} = {3*r*r} \\times {drdt}",
                 f"With $\\dfrac{{dr}}{{dt}} = {drdt}$ m s$^{{-1}}$."),
            step(5, "Calculate", f"\\frac{{dV}}{{dt}} = {dVdt}",
                 f"Volume increases at ${dVdt}$ m$^3$ s$^{{-1}}$."),
            step(6, "Interpret", f"\\text{{The container fills at }} {dVdt} \\text{{ m}}^3\\text{{ s}}^{{-1}}",
                 "A positive rate means the volume is growing."),
        ],
        f"$\\dfrac{{dV}}{{dt}} = {dVdt}$ m$^3$ s$^{{-1}}$",
    ))

# q017–q018: y = √x and y = 1/x
questions.append(make_q(
    "q017", "Easy", 4, "numeric", ["chain rule", "surds"],
    "Given $y = \\sqrt{x}$ and $\\dfrac{dx}{dt} = 8$, find $\\dfrac{dy}{dt}$ when $x = 16$.",
    [
        step(1, "Rewrite as a power", "y = x^{1/2}",
             "Square root is the same as power $\\frac{1}{2}$, which is easier to differentiate."),
        step(2, "Differentiate", "\\frac{dy}{dx} = \\frac{1}{2}x^{-1/2} = \\frac{1}{2\\sqrt{x}}",
             "Power rule: bring down $\\frac{1}{2}$ and reduce the exponent."),
        step(3, "Substitute $x = 16$", "\\frac{dy}{dx} = \\frac{1}{2\\sqrt{16}} = \\frac{1}{8}",
             "$\\sqrt{16} = 4$, so $\\dfrac{dy}{dx} = \\frac{1}{8}$."),
        step(4, "Apply the chain rule", "\\frac{dy}{dt} = \\frac{dy}{dx}\\cdot\\frac{dx}{dt}",
             "Multiply by the given rate $\\dfrac{dx}{dt}$."),
        step(5, "Substitute $\\dfrac{dx}{dt} = 8$", "\\frac{dy}{dt} = \\frac{1}{8} \\times 8 = 1",
             "The rates combine to give $\\dfrac{dy}{dt} = 1$."),
        step(6, "Check units", "\\text{units of } y \\text{ per unit time}",
             "If $x$ and $y$ share units, the rate has consistent dimensions."),
    ],
    "$\\dfrac{dy}{dt} = 1$",
))

questions.append(make_q(
    "q018", "Easy", 4, "numeric", ["chain rule", "reciprocal"],
    "Given $y = \\dfrac{1}{x}$ and $\\dfrac{dx}{dt} = -2$, find $\\dfrac{dy}{dt}$ when $x = 5$.",
    [
        step(1, "Rewrite", "y = x^{-1}",
             "Reciprocal form makes differentiation straightforward."),
        step(2, "Differentiate", "\\frac{dy}{dx} = -x^{-2} = -\\frac{1}{x^2}",
             "Power rule gives $-1 \\cdot x^{-2}$."),
        step(3, "Substitute $x = 5$", "\\frac{dy}{dx} = -\\frac{1}{25}",
             "At $x = 5$, the spatial rate is $-\\frac{1}{25}$."),
        step(4, "Chain rule", "\\frac{dy}{dt} = \\frac{dy}{dx}\\cdot\\frac{dx}{dt}",
             "Link to the time rate."),
        step(5, "Substitute $\\dfrac{dx}{dt} = -2$",
             "\\frac{dy}{dt} = -\\frac{1}{25} \\times (-2) = \\frac{2}{25}",
             "Negative times negative gives positive."),
        step(6, "Decimal form", "\\frac{dy}{dt} = 0.08",
             "$\\dfrac{2}{25} = 0.08$."),
    ],
    "$\\dfrac{dy}{dt} = \\dfrac{2}{25}$ (or $0.08$)",
))

# ══════════════════════════════════════════════════════════════════════════════
# INTERMEDIATE q019–q053: ladder, sphere, growth/decay, geometry
# ══════════════════════════════════════════════════════════════════════════════

# q019: classic ladder
questions.append(make_q(
    "q019", "Intermediate", 5, "numeric", ["ladder", "Pythagoras", "implicit"],
    "A $10$ m ladder leans against a vertical wall. The foot of the ladder slides away from the wall "
    "at $0.5$ m s$^{-1}$. How fast is the top sliding down when the foot is $6$ m from the wall?",
    [
        step(1, "Draw and label", "x = \\text{distance from wall},\\; y = \\text{height on wall}",
             "Let $x$ be horizontal distance and $y$ vertical height; both change with time."),
        step(2, "Pythagoras", "x^2 + y^2 = 100",
             "The ladder length $10$ m is fixed, so $x^2 + y^2 = 10^2 = 100$."),
        step(3, "Find $y$ when $x = 6$", "y^2 = 100 - 36 = 64 \\Rightarrow y = 8",
             "The top is $8$ m up the wall."),
        step(4, "Differentiate implicitly w.r.t. $t$",
             "2x\\frac{dx}{dt} + 2y\\frac{dy}{dt} = 0",
             "Both $x$ and $y$ depend on $t$, so we differentiate the whole equation with respect to time."),
        step(5, "Solve for $\\dfrac{dy}{dt}$",
             "\\frac{dy}{dt} = -\\frac{x}{y}\\cdot\\frac{dx}{dt}",
             "Rearrange: the vertical rate is proportional to the horizontal rate, scaled by $-x/y$."),
        step(6, "Substitute $x = 6$, $y = 8$, $\\dfrac{dx}{dt} = 0.5$",
             "\\frac{dy}{dt} = -\\frac{6}{8} \\times 0.5 = -\\frac{3}{8}",
             "Negative means the top moves down."),
        step(7, "Interpret", "\\frac{dy}{dt} = -0.375 \\text{ m s}^{-1}",
             "The top slides down at $0.375$ m s$^{-1}$."),
        step(8, "Why negative?", "\\text{height decreasing}",
             "A downward motion gives a negative rate for $y$."),
        step(9, "Check magnitude", "|\\frac{dy}{dt}| < |\\frac{dx}{dt}|",
             "When the ladder is shallow, vertical motion is slower than horizontal."),
    ],
    "$\\dfrac{dy}{dt} = -0.375$ m s$^{-1}$ (top slides down at $0.375$ m s$^{-1}$)",
))

# q020–q024: more ladder problems
ladder_cases = [
    ("q020", 13, 5, 12, 1.5, -5/8),
    ("q021", 5, 3, 4, 2, -3/2),
    ("q022", 8, 6, math.sqrt(64-36), 0.4, -6/10*0.4),
    ("q023", 15, 9, 12, 1, -9/12),
    ("q024", 10, 8, 6, 0.25, -8/6*0.25),
]
for qid, L, x, y, dxdt, dydt in ladder_cases:
    L2 = L * L
    questions.append(make_q(
        qid, "Intermediate", 5, "numeric", ["ladder", "related rates"],
        f"A ${L}$ m ladder slides with its foot moving away from a wall at $\\dfrac{{dx}}{{dt}} = {dxdt}$ m s$^{{-1}}$. "
        f"Find $\\dfrac{{dy}}{{dt}}$ when the foot is ${x}$ m from the wall.",
        [
            step(1, "Set up", f"x^2 + y^2 = {L2}",
                 f"Fixed ladder length ${L}$ m gives $x^2 + y^2 = {L2}$."),
            step(2, f"Find $y$ when $x = {x}$", f"y = \\sqrt{{{L2} - {x*x}}} = {fmt(y)}",
                 f"Height on wall is ${fmt(y)}$ m."),
            step(3, "Differentiate w.r.t. $t$", "2x\\frac{dx}{dt} + 2y\\frac{dy}{dt} = 0",
                 "Implicit differentiation links the two time rates."),
            step(4, "Rearrange", "\\frac{dy}{dt} = -\\frac{x}{y}\\cdot\\frac{dx}{dt}",
                 "Solve for the vertical rate."),
            step(5, f"Substitute values", f"\\frac{{dy}}{{dt}} = -\\frac{{{x}}}{{{fmt(y)}}} \\times {dxdt}",
                 f"With $x = {x}$, $y = {fmt(y)}$, $\\dfrac{{dx}}{{dt}} = {dxdt}$."),
            step(6, "Calculate", f"\\frac{{dy}}{{dt}} = {fmt(dydt)}",
                 f"$\\dfrac{{dy}}{{dt}} = {fmt(dydt)}$ m s$^{{-1}}$."),
            step(7, "Sign interpretation", "\\text{negative} \\Rightarrow \\text{top moves down}",
                 "The top descends as the foot moves out."),
            step(8, "Units", "\\text{m s}^{-1}",
                 "Rate of change of height in metres per second."),
            step(9, "Magnitude", f"|\\frac{{dy}}{{dt}}| = {fmt(abs(dydt))}",
                 f"Speed of descent is ${fmt(abs(dydt))}$ m s$^{{-1}}$."),
        ],
        f"$\\dfrac{{dy}}{{dt}} = {fmt(dydt)}$ m s$^{{-1}}$",
    ))

# q025–q030: sphere volume V = (4/3)πr³
sphere_cases = [
    ("q025", 3, 0.2, 4*math.pi*9*0.2),
    ("q026", 5, 0.1, 4*math.pi*25*0.1),
    ("q027", 2, 1.5, 4*math.pi*4*1.5),
    ("q028", 4, 0.5, 4*math.pi*16*0.5),
    ("q029", 6, 0.3, 4*math.pi*36*0.3),
    ("q030", 10, 0.05, 4*math.pi*100*0.05),
]
for qid, r, drdt, dVdt in sphere_cases:
    questions.append(make_q(
        qid, "Intermediate", 5, "expression", ["sphere", "volume"],
        f"A spherical balloon is being inflated. Its volume is $V = \\dfrac{{4}}{{3}}\\pi r^3$. "
        f"When $r = {r}$ cm, $\\dfrac{{dr}}{{dt}} = {drdt}$ cm s$^{{-1}}$. Find $\\dfrac{{dV}}{{dt}}$.",
        [
            step(1, "Volume formula", "V = \\frac{4}{3}\\pi r^3",
                 "Standard volume of a sphere."),
            step(2, "Differentiate w.r.t. $r$", "\\frac{dV}{dr} = 4\\pi r^2",
                 "Derivative of $r^3$ is $3r^2$; $\\frac{4}{3}\\pi \\times 3r^2 = 4\\pi r^2$."),
            step(3, f"At $r = {r}$", f"\\frac{{dV}}{{dr}} = 4\\pi \\times {r}^2 = {4*r*r}\\pi",
                 f"Surface-area-like factor ${4*r*r}\\pi$ at this radius."),
            step(4, "Chain rule", "\\frac{dV}{dt} = \\frac{dV}{dr}\\cdot\\frac{dr}{dt}",
                 "Link volume rate to radius rate."),
            step(5, f"Substitute $\\dfrac{{dr}}{{dt}} = {drdt}$",
                 f"\\frac{{dV}}{{dt}} = {4*r*r}\\pi \\times {drdt}",
                 "Multiply the two rates."),
            step(6, "Simplify", f"\\frac{{dV}}{{dt}} = {fmt(4*r*r*drdt)}\\pi \\text{{ cm}}^3\\text{{ s}}^{{-1}}",
                 f"Volume grows at ${fmt(4*r*r*drdt)}\\pi$ cm$^3$ s$^{{-1}}$."),
            step(7, "Physical meaning", "\\text{inflation rate}",
                 "How fast the balloon's volume is increasing."),
            step(8, "Units check", "\\text{cm}^3\\text{ s}^{-1}",
                 "Volume per unit time."),
            step(9, "Compare to surface", "4\\pi r^2 \\times \\frac{dr}{dt}",
                 "Volume rate equals surface area times radial expansion rate."),
        ],
        f"$\\dfrac{{dV}}{{dt}} = {4*r*r*drdt}\\pi$ cm$^3$ s$^{{-1}}$",
    ))

# q031–q035: rectangle area A = xy with one side changing
rect_cases = [
    ("q031", 4, 6, 2, 12, "width $x = 4$ m fixed, length $y$ grows"),
    ("q032", 5, 8, 3, 40, "length $y = 5$ m fixed, width $x$ grows"),
    ("q033", 3, 10, 1.5, 30, "fixed width"),
    ("q034", 7, 4, 0.5, 3.5, "fixed length"),
    ("q035", 6, 9, 2, 54, "both given"),
]
for qid, fixed_val, other, rate, dAdt, note in rect_cases:
    if "width" in note and "fixed" in note.split(",")[0]:
        x, y, dxdt, dydt = fixed_val, other, 0, rate
        dA = y * dxdt + x * dydt if dxdt else x * dydt
        if dxdt == 0:
            text = (f"A rectangle has fixed width $x = {x}$ m and length $y$ increasing at "
                    f"$\\dfrac{{dy}}{{dt}} = {rate}$ m s$^{{-1}}$. The area is $A = xy$. Find $\\dfrac{{dA}}{{dt}}$.")
            steps = [
                step(1, "Area formula", "A = xy", "Product of length and width."),
                step(2, "Differentiate (product rule or direct)", "\\frac{dA}{dt} = x\\frac{dy}{dt} + y\\frac{dx}{dt}",
                     "When both dimensions can change, use the product rule for $A = xy$."),
                step(3, f"Since $x = {x}$ is fixed", f"\\frac{{dx}}{{dt}} = 0",
                     "Fixed width means no change in $x$."),
                step(4, "Simplify", f"\\frac{{dA}}{{dt}} = {x} \\times {rate}",
                     f"Only the length contributes: $\\dfrac{{dA}}{{dt}} = x \\cdot \\dfrac{{dy}}{{dt}}$."),
                step(5, "Calculate", f"\\frac{{dA}}{{dt}} = {dAdt}",
                     f"Area increases at ${dAdt}$ m$^2$ s$^{{-1}}$."),
                step(6, "Interpret", "\\text{area grows as length extends}",
                     "Extending one side at constant rate gives linear area growth."),
                step(7, "Units", "\\text{m}^2\\text{ s}^{-1}", "Area per second."),
                step(8, "Check", f"{x} \\times {rate} = {dAdt}", "Consistent arithmetic."),
                step(9, "Model assumption", "\\text{other dimension constant}",
                     "Real rectangles may deform; here only one side changes."),
            ]
        else:
            x, y, dydt, dxdt = fixed_val, other, 0, rate
            dAdt = y * dxdt
            text = (f"A rectangle has fixed length $y = {y}$ m and width $x$ increasing at "
                    f"$\\dfrac{{dx}}{{dt}} = {rate}$ m s$^{{-1}}$. If $A = xy$, find $\\dfrac{{dA}}{{dt}}$.")
            steps = [
                step(1, "Area formula", "A = xy", "Area is product of sides."),
                step(2, "Differentiate w.r.t. $t$", "\\frac{dA}{dt} = y\\frac{dx}{dt} + x\\frac{dy}{dt}",
                     "Product rule for related rates."),
                step(3, f"Fixed length $y = {y}$", "\\frac{dy}{dt} = 0", "Length not changing."),
                step(4, "Simplify", f"\\frac{{dA}}{{dt}} = {y} \\times {rate}",
                     f"$\\dfrac{{dA}}{{dt}} = y \\cdot \\dfrac{{dx}}{{dt}}$."),
                step(5, "Calculate", f"\\frac{{dA}}{{dt}} = {dAdt}", f"Result: ${dAdt}$ m$^2$ s$^{{-1}}$."),
                step(6, "Geometric picture", "\\text{width expands, area grows linearly}",
                     "Like adding strips along the width."),
                step(7, "Units", "\\text{m}^2\\text{ s}^{-1}", "Correct dimensions."),
                step(8, "Verify", f"{y} \\times {rate} = {dAdt}", "Arithmetic check."),
                step(9, "Application", "\\text{carpet, field expansion}",
                     "Common in modelling growing rectangular regions."),
            ]
    else:
        x, y, dxdt, dydt = fixed_val, other, rate, 2
        dAdt = y * dxdt + x * dydt
        text = (f"A rectangle has $x = {x}$ m, $y = {y}$ m with $\\dfrac{{dx}}{{dt}} = {rate}$ m s$^{{-1}}$ "
                f"and $\\dfrac{{dy}}{{dt}} = 2$ m s$^{{-1}}$. Find $\\dfrac{{dA}}{{dt}}$ when $A = xy$.")
        steps = [
            step(1, "Area", "A = xy", "Product of sides."),
            step(2, "Differentiate", "\\frac{dA}{dt} = y\\frac{dx}{dt} + x\\frac{dy}{dt}",
                 "Both sides change, so both terms contribute."),
            step(3, "Substitute rates", f"\\frac{{dA}}{{dt}} = {y} \\times {rate} + {x} \\times 2",
                 "Plug in given values."),
            step(4, "First term", f"{y * rate}", f"${y} \\times {rate} = {y * rate}$."),
            step(5, "Second term", f"{x * 2}", f"${x} \\times 2 = {x * 2}$."),
            step(6, "Add", f"\\frac{{dA}}{{dt}} = {dAdt}", f"Total area rate ${dAdt}$ m$^2$ s$^{{-1}}$."),
            step(7, "Interpret", "\\text{both dimensions growing}",
                 "Area grows faster when both length and width increase."),
            step(8, "Units", "\\text{m}^2\\text{ s}^{-1}", "Area rate."),
            step(9, "Compare", "\\text{sum of two strip contributions}",
                 "Each changing side adds its own contribution."),
        ]
    questions.append(make_q(qid, "Intermediate", 5, "numeric", ["rectangle", "area", "product rule"],
                            text, steps, f"$\\dfrac{{dA}}{{dt}} = {dAdt}$ m$^2$ s$^{{-1}}$"))

# q036–q040: exponential growth dN/dt = kN
growth_cases = [
    ("q036", 1000, 0.05, 50),
    ("q037", 500, 0.08, 40),
    ("q038", 2000, 0.03, 60),
    ("q039", 800, 0.1, 80),
    ("q040", 1500, 0.04, 60),
]
for qid, N, k, dNdt in growth_cases:
    questions.append(make_q(
        qid, "Intermediate", 4, "numeric", ["exponential", "growth"],
        f"A population is modelled by $N = N_0 e^{{{k}t}}$ with $N_0 = {N}$. "
        f"Show that $\\dfrac{{dN}}{{dt}} = kN$ and find $\\dfrac{{dN}}{{dt}}$ when $t = 0$.",
        [
            step(1, "Write the model", f"N = {N}e^{{{k}t}}",
                 "Exponential growth with initial value $N_0$ and rate constant $k$."),
            step(2, "Differentiate w.r.t. $t$", f"\\frac{{dN}}{{dt}} = {N} \\times {k} e^{{{k}t}}",
                 "Derivative of $e^{kt}$ is $ke^{kt}$; constant $N_0$ stays."),
            step(3, "Factor", f"\\frac{{dN}}{{dt}} = {k} \\times {N}e^{{{k}t}} = {k}N",
                 "This confirms $\\dfrac{dN}{dt} = kN$: rate proportional to current size."),
            step(4, "At $t = 0$", f"N = {N}e^0 = {N}",
                 f"Population at start is ${N}$."),
            step(5, "Rate at $t = 0$", f"\\frac{{dN}}{{dt}} = {k} \\times {N} = {dNdt}",
                 f"Initial growth rate is ${dNdt}$ per unit time."),
            step(6, "Percentage interpretation", f"{k*100}\\% \\text{{ growth per unit time}}",
                 f"$k = {k}$ means {k*100}% growth rate."),
            step(7, "Units", "\\text{same as } N \\text{ per unit time}",
                 "Population units per year (or whatever $t$ measures)."),
            step(8, "Why proportional?", "\\text{larger population grows faster}",
                 "Exponential model: more individuals means more growth."),
            step(9, "Sign of $k$", f"k = {k} > 0 \\Rightarrow \\text{{growth}}",
                 "Positive $k$ means increase."),
        ],
        f"$\\dfrac{{dN}}{{dt}} = {k}N$; at $t = 0$, $\\dfrac{{dN}}{{dt}} = {dNdt}$",
    ))

# q041–q045: exponential decay
decay_cases = [
    ("q041", 500, -0.02, -10),
    ("q042", 1200, -0.05, -60),
    ("q043", 800, -0.03, -24),
    ("q044", 2000, -0.01, -20),
    ("q045", 350, -0.08, -28),
]
for qid, N0, k, dNdt in decay_cases:
    questions.append(make_q(
        qid, "Intermediate", 4, "numeric", ["exponential", "decay"],
        f"A radioactive substance has mass $M = {N0}e^{{{k}t}}$ grams. Find $\\dfrac{{dM}}{{dt}}$ when $t = 0$.",
        [
            step(1, "Model", f"M = {N0}e^{{{k}t}}",
                 "Exponential decay with negative rate constant."),
            step(2, "Differentiate", f"\\frac{{dM}}{{dt}} = {N0} \\times {k} e^{{{k}t}} = {k}M",
                 "Same form as growth: $\\dfrac{dM}{dt} = kM$."),
            step(3, "At $t = 0$", f"M = {N0}", f"Initial mass ${N0}$ g."),
            step(4, "Rate at start", f"\\frac{{dM}}{{dt}} = {k} \\times {N0} = {dNdt}",
                 f"Mass decreases at ${abs(dNdt)}$ g per unit time initially."),
            step(5, "Sign", f"{dNdt} < 0 \\Rightarrow \\text{{decay}}",
                 "Negative rate means mass is falling."),
            step(6, "Magnitude", f"|\\frac{{dM}}{{dt}}| = {abs(dNdt)} \\text{{ g per unit time}}",
                 "Speed of decay at $t = 0$."),
            step(7, "Half-life link", "\\text{larger } |k| \\Rightarrow \\text{faster decay}",
                 f"$k = {k}$ controls how quickly the substance disappears."),
            step(8, "Units", "\\text{g per unit time}", "Mass rate."),
            step(9, "Model validity", "\\text{exponential decay assumption}",
                 "Real decay follows this model well for many substances."),
        ],
        f"$\\dfrac{{dM}}{{dt}} = {dNdt}$ g per unit time at $t = 0$",
    ))

# q046–q050: cone volume V = (1/3)πr²h with r/h constant
cone_cases = [
    ("q046", 6, 8, 0.1, 0.15),
    ("q047", 4, 10, 0.2, 0.32),
    ("q048", 5, 12, 0.05, 0.1),
    ("q049", 3, 9, 0.3, 0.27),
    ("q050", 8, 6, 0.08, 0.128),
]
for qid, r, h, dhdt, drdt_ratio in cone_cases:
    # V = (1/3)πr²h, if r = (r/h)*h = k*h then V = (1/3)πk²h³, dV/dt = πk²h² dh/dt
    k = r / h
    dVdt = math.pi * k * k * h * h * dhdt
    questions.append(make_q(
        qid, "Intermediate", 6, "numeric", ["cone", "volume", "similar shapes"],
        f"Water pours into a cone with fixed shape (radius $r = {k:.2g}h$ at height $h$). "
        f"When $h = {h}$ cm, $\\dfrac{{dh}}{{dt}} = {dhdt}$ cm s$^{{-1}}$. "
        f"Given $V = \\dfrac{{1}}{{3}}\\pi r^2 h$ and $r = {k:.2g}h$, find $\\dfrac{{dV}}{{dt}}$.",
        [
            step(1, "Substitute $r$ in terms of $h$", f"r = {k:.2g}h",
                 "Similar cones: radius proportional to height."),
            step(2, "Volume in one variable", f"V = \\frac{{1}}{{3}}\\pi ({k:.2g}h)^2 h = \\frac{{1}}{{3}}\\pi \\times {k*k:.4g} h^3",
                 f"$V = \\frac{{1}}{{3}}\\pi \\cdot {k*k:.4g} \\cdot h^3$."),
            step(3, "Differentiate w.r.t. $t$", f"\\frac{{dV}}{{dt}} = \\pi \\times {k*k:.4g} h^2 \\frac{{dh}}{{dt}}",
                 "Power rule on $h^3$, then chain rule."),
            step(4, f"Substitute $h = {h}$", f"h^2 = {h*h}",
                 f"At height ${h}$ cm."),
            step(5, f"Substitute $\\dfrac{{dh}}{{dt}} = {dhdt}$",
                 f"\\frac{{dV}}{{dt}} = \\pi \\times {k*k:.4g} \\times {h*h} \\times {dhdt}",
                 "Plug in all values."),
            step(6, "Calculate", f"\\frac{{dV}}{{dt}} \\approx {fmt(dVdt, 2)}",
                 f"Volume rate $\\approx {fmt(dVdt, 2)}$ cm$^3$ s$^{{-1}}$."),
            step(7, "Why $h^2$?", "\\text{cross-section area scales with } h^2",
                 "Filling rate depends on surface area at current level."),
            step(8, "Units", "\\text{cm}^3\\text{ s}^{-1}", "Volume per second."),
            step(9, "Tank problem classic", "\\text{cone gets wider as it fills}",
                 "Standard related rates application."),
            step(10, "Check reasonableness", "\\text{positive } \\frac{dV}{dt}",
                 "Water entering means volume increasing."),
        ],
        f"$\\dfrac{{dV}}{{dt}} \\approx {fmt(dVdt, 2)}$ cm$^3$ s$^{{-1}}$",
    ))

# q051–q053: angle changing
angle_cases = [
    ("q051", 5, 12, 1, -12/13),
    ("q052", 8, 15, 0.5, -6/17),
    ("q053", 3, 4, 2, -3/2),
]
for qid, x, y, dxdt, dthetadt in angle_cases:
    theta_deg = math.degrees(math.atan2(y, x))
    questions.append(make_q(
        qid, "Intermediate", 6, "numeric", ["angle", "trigonometry", "ladder"],
        f"A searchlight at the origin tracks a car at $({x}, {y})$ moving with "
        f"$\\dfrac{{dx}}{{dt}} = {dxdt}$ m s$^{{-1}}$ and $\\dfrac{{dy}}{{dt}} = 0$. "
        f"If $\\theta = \\arctan\\left(\\dfrac{{y}}{{x}}\\right)$, find $\\dfrac{{d\\theta}}{{dt}}$.",
        [
            step(1, "Relationship", "\\tan\\theta = \\frac{y}{x}",
                 "Angle depends on coordinates."),
            step(2, "Differentiate implicitly", "\\sec^2\\theta \\frac{d\\theta}{dt} = \\frac{x\\frac{dy}{dt} - y\\frac{dx}{dt}}{x^2}",
                 "Quotient rule on $\\dfrac{y}{x}$, then chain rule on $\\tan\\theta$."),
            step(3, "Or use the standard formula",
                 "\\frac{d\\theta}{dt} = \\frac{x\\dot{y} - y\\dot{x}}{x^2 + y^2}",
                 "Standard formula for angle rate in polar-like setup."),
            step(4, f"With $\\dfrac{{dy}}{{dt}} = 0$", f"\\frac{{d\\theta}}{{dt}} = \\frac{{-{y} \\times {dxdt}}}{{{x*x + y*y}}}",
                 "Only horizontal motion contributes."),
            step(5, "Calculate denominator", f"x^2 + y^2 = {x*x + y*y}",
                 f"Distance squared from origin."),
            step(6, "Calculate", f"\\frac{{d\\theta}}{{dt}} = {fmt(dthetadt)}",
                 f"$\\dfrac{{d\\theta}}{{dt}} = {fmt(dthetadt)}$ rad s$^{{-1}}$."),
            step(7, "Sign", "\\text{negative} \\Rightarrow \\text{angle decreasing}",
                 "As car moves right, bearing angle from x-axis decreases."),
            step(8, "Units", "\\text{rad s}^{-1}", "Radians per second."),
            step(9, "Application", "\\text{tracking, radar}",
                 "How fast to rotate the searchlight."),
            step(10, "At this instant", f"\\theta \\approx {fmt(theta_deg, 1)}^\\circ",
                 f"Current angle about ${fmt(theta_deg, 1)}^\\circ$."),
        ],
        f"$\\dfrac{{d\\theta}}{{dt}} = {fmt(dthetadt)}$ rad s$^{{-1}}$",
    ))

# ══════════════════════════════════════════════════════════════════════════════
# HARD q054–q070: multi-step, combined geometry, modelling
# ══════════════════════════════════════════════════════════════════════════════

# q054: find dx/dt given dy/dt (reverse ladder)
questions.append(make_q(
    "q054", "Hard", 7, "numeric", ["ladder", "reverse"],
    "A $13$ m ladder has its top sliding down a wall at $1.2$ m s$^{-1}$ when the top is $5$ m high. "
    "How fast is the foot moving away from the wall?",
    [
        step(1, "Set up", "x^2 + y^2 = 169", "Pythagoras with ladder $13$ m."),
        step(2, "Find $x$ when $y = 5$", "x = \\sqrt{169 - 25} = 12", "Foot is $12$ m from wall."),
        step(3, "Differentiate", "2x\\frac{dx}{dt} + 2y\\frac{dy}{dt} = 0",
             "Implicit differentiation."),
        step(4, "Solve for $\\dfrac{dx}{dt}$", "\\frac{dx}{dt} = -\\frac{y}{x}\\cdot\\frac{dy}{dt}",
             "Rearrange for horizontal rate."),
        step(5, "Substitute $\\dfrac{dy}{dt} = -1.2$", "\\frac{dx}{dt} = -\\frac{5}{12} \\times (-1.2)",
             "Top sliding down means $\\dfrac{dy}{dt}$ is negative."),
        step(6, "Calculate", "\\frac{dx}{dt} = \\frac{5}{12} \\times 1.2 = 0.5",
             "Foot moves away at $0.5$ m s$^{-1}$."),
        step(7, "Interpret sign", "\\frac{dx}{dt} > 0 \\Rightarrow \\text{foot moves away}",
             "Positive horizontal rate confirms outward motion."),
        step(8, "Verify geometry", "x = 12, y = 5, \\sqrt{144+25} = 13", "Consistent triangle."),
        step(9, "Rate comparison", "|\\frac{dy}{dt}| > |\\frac{dx}{dt}|",
             "Near the top, vertical motion dominates."),
        step(10, "Units", "\\text{m s}^{-1}", "Speed of foot."),
        step(11, "Safety context", "\\text{ladder slipping}",
             "Classic related rates scenario."),
        step(12, "Alternative check", "\\frac{dx}{dt} = \\frac{12}{5} \\times 0.5", "Ratio $x/y$ method."),
        step(13, "Final answer", "\\frac{dx}{dt} = 0.5 \\text{ m s}^{-1}",
             "Foot speed $0.5$ m s$^{-1}$ away from wall."),
    ],
    "$\\dfrac{dx}{dt} = 0.5$ m s$^{-1}$",
))

# q055–q059: combined sphere + surface area
for i, (qid, r, drdt) in enumerate([
    ("q055", 4, 0.3),
    ("q056", 6, 0.15),
    ("q057", 3, 0.5),
    ("q058", 8, 0.08),
    ("q059", 5, 0.25),
]):
    dVdt = 4 * math.pi * r * r * drdt
    dSdt = 8 * math.pi * r * drdt
    questions.append(make_q(
        qid, "Hard", 8, "expression", ["sphere", "surface area", "multi-part"],
        f"A spherical cell has radius $r$ cm. When $r = {r}$ cm, $\\dfrac{{dr}}{{dt}} = {drdt}$ cm s$^{{-1}}$. "
        f"(a) Find $\\dfrac{{dV}}{{dt}}$ where $V = \\dfrac{{4}}{{3}}\\pi r^3$. "
        f"(b) Find $\\dfrac{{dS}}{{dt}}$ where $S = 4\\pi r^2$ is the surface area.",
        [
            step(1, "Part (a): volume rate", "\\frac{dV}{dt} = \\frac{dV}{dr}\\cdot\\frac{dr}{dt}",
                 "Chain rule for volume."),
            step(2, "Differentiate volume", "\\frac{dV}{dr} = 4\\pi r^2",
                 "Derivative of sphere volume."),
            step(3, f"At $r = {r}$", f"\\frac{{dV}}{{dr}} = {4*r*r}\\pi",
                 f"$\\dfrac{{dV}}{{dr}} = {4*r*r}\\pi$."),
            step(4, "Volume rate", f"\\frac{{dV}}{{dt}} = {4*r*r}\\pi \\times {drdt} = {fmt(4*r*r*drdt)}\\pi",
                 f"(a) $\\dfrac{{dV}}{{dt}} = {4*r*r*drdt}\\pi$ cm$^3$ s$^{{-1}}$."),
            step(5, "Part (b): surface area", "S = 4\\pi r^2",
                 "Surface area formula."),
            step(6, "Differentiate", "\\frac{dS}{dr} = 8\\pi r",
                 "Derivative of $4\\pi r^2$."),
            step(7, f"At $r = {r}$", f"\\frac{{dS}}{{dt}} = 8\\pi \\times {r} \\times {drdt} = {fmt(8*r*drdt)}\\pi",
                 f"(b) $\\dfrac{{dS}}{{dt}} = {8*r*drdt}\\pi$ cm$^2$ s$^{{-1}}$."),
            step(8, "Compare rates", f"\\frac{{dS}}{{dt}} / \\frac{{dV}}{{dt}} = \\frac{{2}}{{r}}",
                 "Surface grows slower relative to volume at larger $r$."),
            step(9, "Biological meaning", "\\text{membrane vs volume growth}",
                 "Cells balance surface and volume growth."),
            step(10, "Units (a)", "\\text{cm}^3\\text{ s}^{-1}", "Volume rate."),
            step(11, "Units (b)", "\\text{cm}^2\\text{ s}^{-1}", "Area rate."),
            step(12, "Both use same $\\dfrac{dr}{dt}$",
                 f"\\frac{{dr}}{{dt}} = {drdt}",
                 "Single expansion rate drives both."),
            step(13, "Summary",
                 f"(a) $\\dfrac{{dV}}{{dt}} = {4*r*r*drdt}\\pi$; (b) $\\dfrac{{dS}}{{dt}} = {8*r*drdt}\\pi$",
                 "Both answers in terms of $\\pi$."),
        ],
        f"(a) $\\dfrac{{dV}}{{dt}} = {4*r*r*drdt}\\pi$ cm$^3$ s$^{{-1}}$; (b) $\\dfrac{{dS}}{{dt}} = {8*r*drdt}\\pi$ cm$^2$ s$^{{-1}}$",
    ))

# q060–q063: find time for growth/decay given rate
time_cases = [
    ("q060", 100, 150, 0.05, 10),
    ("q061", 200, 100, -0.03, None),
    ("q062", 50, 80, 0.08, None),
    ("q063", 1000, 500, -0.02, None),
]
for qid, N0, N_target, k, t_exact in time_cases:
    if k > 0:
        t_val = math.log(N_target / N0) / k
        text = (f"A population $N = {N0}e^{{{k}t}}$ grows according to the model. "
                f"At what time does $\\dfrac{{dN}}{{dt}}$ first equal $k \\times N$ with $N = {N_target}$? "
                f"Find $t$ when $N = {N_target}$.")
        steps = [
            step(1, "Growth rate formula", "\\frac{dN}{dt} = kN", "Always true for this model."),
            step(2, "At any time", f"\\frac{{dN}}{{dt}} = {k}N",
                 f"Rate is ${k}$ times current population."),
            step(3, "Find $t$ when $N = {N_target}$", f"{N0}e^{{{k}t}} = {N_target}",
                 "Set model equal to target population."),
            step(4, "Divide by initial", f"e^{{{k}t}} = {N_target/N0}",
                 f"Growth factor ${N_target/N0}$."),
            step(5, "Take natural log", f"{k}t = \\ln\\left({N_target/N0}\\right)",
                 "Log both sides."),
            step(6, "Solve for $t$", f"t = \\frac{{\\ln({N_target/N0})}}{{{k}}} \\approx {fmt(t_val, 2)}",
                 f"$t \\approx {fmt(t_val, 2)}$ time units."),
            step(7, "Rate at that time", f"\\frac{{dN}}{{dt}} = {k} \\times {N_target} = {k*N_target}",
                 f"Growth rate then is ${k*N_target}$."),
            step(8, "Check substitution", f"N = {N0}e^{{{k} \\times {fmt(t_val,2)}}} \\approx {N_target}",
                 "Verify population at this time."),
            step(9, "Model assumption", "\\text{continuous exponential growth}",
                 "Real populations may deviate."),
            step(10, "Units of $t$", "\\text{same as in model}",
                 "Years, hours, etc. as defined."),
            step(11, "Increasing rate?", f"kN \\text{{ increases as }} N \\text{{ grows}}",
                 "Bigger population means faster absolute growth."),
            step(12, "Log laws", "\\ln(a/b) = \\ln a - \\ln b",
                 "Useful for rearranging."),
            step(13, "Final", f"t \\approx {fmt(t_val, 2)}",
                 f"Population reaches ${N_target}$ at $t \\approx {fmt(t_val, 2)}$."),
        ]
        final = f"$t \\approx {fmt(t_val, 2)}$; at this time $\\dfrac{{dN}}{{dt}} = {k*N_target}$"
    else:
        t_val = math.log(N_target / N0) / k
        text = (f"A mass $M = {N0}e^{{{k}t}}$ decays. Find $t$ when $M = {N_target}$ and "
                f"state $\\dfrac{{dM}}{{dt}}$ at that instant.")
        steps = [
            step(1, "Decay model", f"M = {N0}e^{{{k}t}}", f"$k = {k}$ negative."),
            step(2, "Rate formula", "\\frac{dM}{dt} = kM", "Proportional to current mass."),
            step(3, "Solve for $t$", f"{N0}e^{{{k}t}} = {N_target}",
                 "Set mass equal to target."),
            step(4, "Exponential factor", f"e^{{{k}t}} = {N_target/N0}",
                 "Ratio of masses."),
            step(5, "Logarithm", f"{k}t = \\ln\\left({N_target/N0}\\right)",
                 "Natural log of both sides."),
            step(6, "Solve", f"t = \\frac{{\\ln({N_target/N0})}}{{{k}}} \\approx {fmt(t_val, 2)}",
                 f"$t \\approx {fmt(t_val, 2)}$ (positive time)."),
            step(7, "Rate at that time", f"\\frac{{dM}}{{dt}} = {k} \\times {N_target} = {k*N_target}",
                 f"Decay rate ${k*N_target}$ g per unit time."),
            step(8, "Still negative", f"{k*N_target} < 0",
                 "Mass still decreasing."),
            step(9, "Half-life connection", "\\text{each step loses fixed fraction}",
                 "Exponential decay loses constant percentage."),
            step(10, "Verify", f"M = {N0}e^{{{k} \\times {fmt(t_val,2)}}} \\approx {N_target}",
                 "Check mass at $t$."),
            step(11, "Physical meaning", "\\text{time to reach given mass}",
                 "When substance has decayed to target."),
            step(12, "Units", "\\text{consistent with model}",
                 "Time units as defined."),
            step(13, "Answer", f"t \\approx {fmt(t_val, 2)}",
                 f"Mass is ${N_target}$ at $t \\approx {fmt(t_val, 2)}$."),
        ]
        final = f"$t \\approx {fmt(t_val, 2)}$; $\\dfrac{{dM}}{{dt}} = {k*N_target}$ at that time"
    questions.append(make_q(qid, "Hard", 7, "numeric", ["exponential", "modelling"], text, steps, final))

# q064–q067: shadow length problems
shadow_cases = [
    ("q064", 2, 6, 1.5, 4.5),
    ("q065", 1.8, 5, 2, 5.56),
    ("q066", 3, 8, 0.5, 1.33),
    ("q067", 2.5, 10, 1, 4),
]
for qid, h, s, dsdx, dxdt_needed in shadow_cases:
  # man height h, shadow s, sun angle: s/x = constant? Classic: h/H = s/S for lamp post
  # Simpler: 6ft man walks from 10ft lamp at 5ft/s - shadow on ground
  # Use: s = (h/L)*x where L is lamp height, x distance from lamp
  # ds/dt = (h/L) dx/dt
  L = 10
  rate = h / L * 5  # walking at 5 ft/s
  questions.append(make_q(
      qid, "Hard", 8, "numeric", ["shadow", "similar triangles"],
      f"A ${h}$ m tall person walks directly away from a ${L}$ m tall street lamp at $5$ m s$^{{-1}}$. "
      f"Their shadow length is $s$ m. Using similar triangles, $\\dfrac{{s}}{{{L-h}}} = \\dfrac{{x}}{{L}}$ "
      f"where $x$ is distance from lamp, show $\\dfrac{{ds}}{{dt}} = \\dfrac{{h}}{{L}} \\cdot \\dfrac{{dx}}{{dt}}$ "
      f"and find $\\dfrac{{ds}}{{dt}}$.",
      [
          step(1, "Similar triangles", "\\frac{s}{L - h} = \\frac{x}{L}",
               "Shadow geometry relates $s$ and $x$."),
          step(2, "Solve for $s$", f"s = \\frac{{L-h}}{{L}} x = \\frac{{{L-h}}}{{{L}}}x",
               f"$s = \\frac{{{L-h}}}{{{L}}}x$ — linear in $x$."),
          step(3, "Differentiate w.r.t. $t$", f"\\frac{{ds}}{{dt}} = \\frac{{{L-h}}}{{{L}}} \\cdot \\frac{{dx}}{{dt}}",
               "Constant ratio times walking rate."),
          step(4, "Simplify coefficient", f"\\frac{{ds}}{{dt}} = \\frac{{{h}}}{{{L}}} \\cdot \\frac{{dx}}{{dt}}",
               f"Since $L - h + h = L$, ratio simplifies to $\\dfrac{{h}}{{L}}$."),
          step(5, "Substitute $\\dfrac{dx}{dt} = 5$",
               f"\\frac{{ds}}{{dt}} = \\frac{{{h}}}{{{L}}} \\times 5",
               "Walking speed $5$ m s$^{-1}$."),
          step(6, "Calculate", f"\\frac{{ds}}{{dt}} = {fmt(h/L*5, 2)}",
               f"Shadow lengthens at ${fmt(h/L*5, 2)}$ m s$^{-1}$."),
          step(7, "Why less than 5?", f"\\frac{{h}}{{L}} < 1",
               "Shadow tip moves slower than the person."),
          step(8, "As person moves", "\\text{shadow length increases}",
               "Moving away from lamp lengthens shadow."),
          step(9, "Similar triangles proof", "\\frac{h}{L} = \\frac{s}{x+s}",
               "Alternative setup gives same result."),
          step(10, "Units", "\\text{m s}^{-1}", "Shadow tip speed."),
          step(11, "Limiting case", "h \\to L \\Rightarrow \\frac{ds}{dt} \\to \\frac{dx}{dt}",
               "Tall person: shadow tip tracks walking speed."),
          step(12, "Geometric insight", "\\text{shadow tip always on ground line}",
               "Light ray geometry."),
          step(13, "Final", f"\\frac{{ds}}{{dt}} = {fmt(h/L*5, 2)} \\text{{ m s}}^{{-1}}",
               f"Shadow lengthens at ${fmt(h/L*5, 2)}$ m s$^{-1}$."),
      ],
      f"$\\dfrac{{ds}}{{dt}} = \\dfrac{{{h}}}{{{L}}} \\times 5 = {fmt(h/L*5, 2)}$ m s$^{-1}$",
  ))

# q068–q070: challenging multi-variable
questions.append(make_q(
    "q068", "Hard", 9, "numeric", ["cone", "inverted", "draining"],
    "An inverted cone of height $12$ cm and base radius $6$ cm is draining. When the water depth is "
    "$8$ cm, the water level drops at $0.2$ cm s$^{-1}$. Find the rate at which the volume is "
    "decreasing. (Use $V = \\frac{1}{3}\\pi r^2 h$ with $r = \\frac{h}{2}$.)",
    [
        step(1, "Similar triangles for radius", "r = \\frac{h}{2}",
             "At full height $12$ cm, $r = 6$ cm, so $r/h = 1/2$ always."),
        step(2, "Volume in terms of $h$", "V = \\frac{1}{3}\\pi \\left(\\frac{h}{2}\\right)^2 h = \\frac{\\pi}{12}h^3",
             "Substitute $r = h/2$ into volume formula."),
        step(3, "Differentiate", "\\frac{dV}{dt} = \\frac{\\pi}{4}h^2 \\frac{dh}{dt}",
             "Chain rule on $h^3$."),
        step(4, "Substitute $h = 8$", "h^2 = 64",
             "At depth $8$ cm."),
        step(5, "Substitute $\\dfrac{dh}{dt} = -0.2$",
             "\\frac{dV}{dt} = \\frac{\\pi}{4} \\times 64 \\times (-0.2)",
             "Negative because water level falling."),
        step(6, "Calculate", "\\frac{dV}{dt} = -3.2\\pi",
             "Volume decreases at $3.2\\pi$ cm$^3$ s$^{-1}$."),
        step(7, "Magnitude", "|\\frac{dV}{dt}| = 3.2\\pi \\approx 10.1",
             "About $10.1$ cm$^3$ s$^{-1}$ draining."),
        step(8, "Why negative?", "\\text{draining} \\Rightarrow \\frac{dV}{dt} < 0",
             "Volume leaving the cone."),
        step(9, "Check dimensions", "\\text{cm}^3\\text{ s}^{-1}",
             "Correct units."),
        step(10, "Compare to inflow", "\\text{outflow problem}",
             "Classic draining tank."),
        step(11, "Radius at $h = 8$", "r = 4 \\text{ cm}",
             "Water surface radius $4$ cm."),
        step(12, "Cross-section", "\\pi r^2 = 16\\pi",
             "Area of water surface."),
        step(13, "Rate intuition", "\\text{larger opening at deeper level}",
             "More volume lost per cm drop when cone is wider."),
        step(14, "Alternative form", "\\frac{dV}{dt} = \\pi r^2 \\frac{dh}{dt}",
             "Base area times depth rate."),
        step(15, "Verify", "16\\pi \\times (-0.2) = -3.2\\pi",
             "Consistent with step 6."),
    ],
    "$\\dfrac{dV}{dt} = -3.2\\pi$ cm$^3$ s$^{-1}$ (volume decreasing at $3.2\\pi$ cm$^3$ s$^{-1}$)",
))

questions.append(make_q(
    "q069", "Hard", 8, "numeric", ["distance", "particle", "parametric"],
    "A particle moves along $y = x^2$. Its $x$-coordinate increases at $3$ m s$^{-1}$ when $x = 2$ m. "
    "(a) Find $\\dfrac{dy}{dt}$. (b) Find the speed of the particle.",
    [
        step(1, "Path equation", "y = x^2",
             "Parabolic path."),
        step(2, "Part (a): chain rule", "\\frac{dy}{dt} = \\frac{dy}{dx}\\cdot\\frac{dx}{dt} = 2x\\cdot\\frac{dx}{dt}",
             "Differentiate path w.r.t. $x$, then chain."),
        step(3, "Substitute $x = 2$, $\\dfrac{dx}{dt} = 3$",
             "\\frac{dy}{dt} = 2(2)(3) = 12",
             "(a) $\\dfrac{dy}{dt} = 12$ m s$^{-1}$."),
        step(4, "Velocity components", "v_x = 3,\\; v_y = 12",
             "Horizontal and vertical components."),
        step(5, "Part (b): speed", "|\\mathbf{v}| = \\sqrt{v_x^2 + v_y^2}",
             "Pythagoras on velocity components."),
        step(6, "Calculate", "|\\mathbf{v}| = \\sqrt{9 + 144} = \\sqrt{153}",
             "Speed $\\sqrt{153}$ m s$^{-1}$."),
        step(7, "Simplify surd", "\\sqrt{153} = 3\\sqrt{17} \\approx 12.37",
             "Exact form $3\\sqrt{17}$ m s$^{-1}$."),
        step(8, "Direction", "\\tan\\theta = \\frac{v_y}{v_x} = 4",
             "Steep upward motion on parabola."),
        step(9, "Why speed > $|v_x|$?", "v_y \\neq 0",
             "Vertical motion adds to speed."),
        step(10, "At $x = 2$", "y = 4",
             "Position $(2, 4)$."),
        step(11, "Tangent gradient", "\\frac{dy}{dx} = 4",
             "Slope of path at this point."),
        step(12, "Connection", "\\frac{v_y}{v_x} = \\frac{dy}{dx}",
             "Velocity direction matches tangent."),
        step(13, "Summary", "(a) 12 \\text{ m s}^{-1}; (b) 3\\sqrt{17} \\text{ m s}^{-1}",
             "Both parts answered."),
    ],
    "(a) $\\dfrac{dy}{dt} = 12$ m s$^{-1}$; (b) speed $= 3\\sqrt{17}$ m s$^{-1}$ (approx. $12.4$ m s$^{-1}$)",
))

questions.append(make_q(
    "q070", "Hard", 10, "numeric", ["modelling", "combined", "cylinder"],
    "A cylindrical tank of radius $4$ m is being filled with oil. The oil depth $h$ increases at "
    "$0.3$ m min$^{-1}$ when $h = 5$ m. (a) Find $\\dfrac{dV}{dt}$ where $V = \\pi r^2 h$. "
    "(b) If the tank is also being widened so $\\dfrac{dr}{dt} = 0.05$ m min$^{-1}$ at this instant, "
    "recalculate $\\dfrac{dV}{dt}$ using the full product rule.",
    [
        step(1, "Volume formula", "V = \\pi r^2 h",
             "Cylinder volume."),
        step(2, "Part (a): fixed radius", "r = 4 \\text{ m fixed}",
             "Only depth changes."),
        step(3, "Differentiate (fixed $r$)", "\\frac{dV}{dt} = \\pi r^2 \\frac{dh}{dt}",
             "Radius constant, so $\\dfrac{dV}{dt} = \\pi r^2 \\dfrac{dh}{dt}$."),
        step(4, "Substitute", "\\frac{dV}{dt} = \\pi \\times 16 \\times 0.3 = 4.8\\pi",
             "(a) $\\dfrac{dV}{dt} = 4.8\\pi$ m$^3$ min$^{-1}$."),
        step(5, "Part (b): both change", "\\frac{dV}{dt} = \\pi\\left(2r\\frac{dr}{dt}h + r^2\\frac{dh}{dt}\\right)",
             "Product rule on $\\pi r^2 h$."),
        step(6, "First term", "2r\\frac{dr}{dt}h = 2(4)(0.05)(5) = 2",
             "Contribution from widening: $2$."),
        step(7, "Second term", "r^2\\frac{dh}{dt} = 16 \\times 0.3 = 4.8",
             "Contribution from rising level: $4.8$."),
        step(8, "Sum inside brackets", "2 + 4.8 = 6.8",
             "Total coefficient before $\\pi$."),
        step(9, "Part (b) answer", "\\frac{dV}{dt} = 6.8\\pi \\text{ m}^3\\text{ min}^{-1}",
             "(b) $\\dfrac{dV}{dt} = 6.8\\pi$ m$^3$ min$^{-1}$."),
        step(10, "Compare (a) and (b)", "6.8\\pi > 4.8\\pi",
             "Widening adds extra volume rate."),
        step(11, "Units", "\\text{m}^3\\text{ min}^{-1}",
             "Volume per minute."),
        step(12, "Physical scenario", "\\text{unusual to widen while filling}",
             "Hypothetical combined change."),
        step(13, "Product rule form", "\\frac{dV}{dt} = \\frac{\\partial V}{\\partial r}\\frac{dr}{dt} + \\frac{\\partial V}{\\partial h}\\frac{dh}{dt}",
             "General multivariable chain idea."),
        step(14, "Numerical (a)", "4.8\\pi \\approx 15.1",
             "About $15.1$ m$^3$ min$^{-1}$."),
        step(15, "Numerical (b)", "6.8\\pi \\approx 21.4",
             "About $21.4$ m$^3$ min$^{-1}$ with widening."),
        step(16, "Exam tip", "\\text{read whether all dimensions change}",
             "Check if radius is fixed or not."),
        step(17, "Final summary", "(a) $4.8\\pi$; (b) $6.8\\pi$ m$^3$ min$^{-1}$",
             "Both parts complete."),
    ],
    "(a) $\\dfrac{dV}{dt} = 4.8\\pi$ m$^3$ min$^{-1}$; (b) $\\dfrac{dV}{dt} = 6.8\\pi$ m$^3$ min$^{-1}$",
))

# ── Write TypeScript output ───────────────────────────────────────────────────
assert len(questions) == 70, f"Expected 70 questions, got {len(questions)}"

header = '''import { Question } from "@/lib/types";

/**
 * A-Level Maths · Year 2 Pure · Rates of change
 * Connected rates via the chain rule; growth and decay; geometry (ladder, sphere, cone).
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
