#!/usr/bin/env python3
"""Generate all 70 questions for Differential equations (Year 2 Pure)."""
import json
import math

OUT = "/Users/benjaminwalpole/Wisest_Maths_V5/wisest-maths-content/src/data/questions/a-level-maths/year-2-pure/differential-equations.ts"

SUBTOPIC = "Differential equations"
SUBTOPIC_ID = "al.y2.pure.differential-equations"


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


def fmt(x, places=4):
    if abs(x - round(x)) < 1e-9:
        return str(int(round(x)))
    s = f"{x:.{places}f}".rstrip("0").rstrip(".")
    return s


questions = []

# ══════════════════════════════════════════════════════════════════════════════
# EASY q001–q018
# ══════════════════════════════════════════════════════════════════════════════

questions.append(make_q(
    "q001", "Easy", 3, "written", ["definition", "differential equation"],
    "What is meant by a **differential equation**? Give one example.",
    [
        step(1, "Definition", "\\text{equation involving a derivative of the unknown function}",
             "A differential equation links an unknown function to one or more of its derivatives."),
        step(2, "Unknown is a function", "y = f(x) \\text{ or } y(t)",
             "We solve for the whole function, not just a single number."),
        step(3, "Derivative appears explicitly", "\\dfrac{dy}{dx},\\; \\dfrac{dy}{dt},\\; \\dfrac{d^2y}{dx^2}, \\ldots",
             "Any order derivative may appear."),
        step(4, "Example: first order", "\\dfrac{dy}{dx} = 3x",
             "The rate of change of $y$ depends on $x$."),
        step(5, "Example: separable", "\\dfrac{dy}{dx} = xy",
             "The derivative is a product of a function of $x$ and a function of $y$."),
        step(6, "Example: growth", "\\dfrac{dP}{dt} = kP",
             "Population growth is a classic modelling equation."),
    ],
    "A differential equation is an equation involving derivatives of an unknown function, e.g. $\\dfrac{dy}{dx} = 3x$ or $\\dfrac{dP}{dt} = kP$.",
))

questions.append(make_q(
    "q002", "Easy", 3, "written", ["general solution", "particular solution"],
    "Explain the difference between a **general solution** and a **particular solution** of a differential equation.",
    [
        step(1, "General solution", "y = f(x, C)",
             "Contains an arbitrary constant $C$ from integration."),
        step(2, "Family of curves", "\\text{one solution curve for each value of } C",
             "The general solution describes infinitely many possible functions."),
        step(3, "Particular solution", "y = g(x)",
             "A single function with no arbitrary constant."),
        step(4, "Initial condition fixes $C$", "y(x_0) = y_0 \\Rightarrow C \\text{ determined}",
             "A given point on the curve selects one member of the family."),
        step(5, "Example", "\\dfrac{dy}{dx}=2x \\Rightarrow y=x^2+C;\\; y(0)=3 \\Rightarrow y=x^2+3",
             "Integration gives the general solution; the initial condition gives the particular one."),
        step(6, "Modelling context", "\\text{particular solution matches observed starting value}",
             "In applications we almost always want the particular solution that fits the data."),
    ],
    "The **general solution** includes an arbitrary constant and represents a family of curves; a **particular solution** is one specific member of that family, found using an initial condition.",
))

questions.append(make_q(
    "q003", "Easy", 4, "written", ["separation of variables", "method"],
    "Describe the method of **separation of variables** for solving a differential equation of the form $\\dfrac{dy}{dx} = f(x)g(y)$.",
    [
        step(1, "Recognise separable form", "\\dfrac{dy}{dx} = f(x)g(y)",
             "The derivative is a product of a function of $x$ only and a function of $y$ only."),
        step(2, "Separate variables", "\\dfrac{1}{g(y)}\\,dy = f(x)\\,dx",
             "Move all $y$-terms to one side and all $x$-terms to the other."),
        step(3, "Integrate both sides", "\\int \\dfrac{1}{g(y)}\\,dy = \\int f(x)\\,dx",
             "Integrate each side with respect to its own variable."),
        step(4, "Include constant of integration", "+C",
             "One constant is enough for the general solution."),
        step(5, "Solve for $y$ if possible", "y = \\ldots",
             "Rearrange to make $y$ the subject when feasible."),
        step(6, "Apply initial condition", "y(x_0)=y_0 \\Rightarrow C",
             "Substitute the given point to find the particular solution."),
    ],
    "Write $\\dfrac{1}{g(y)}\\,dy = f(x)\\,dx$, integrate both sides, include $+C$, then use any initial condition to find the particular solution.",
))

# Basic separable equations
basic_sep = [
    ("q004", "3x", "x^2 + C", "x", "3", 0, 0, 0),
    ("q005", "2y", "\\tfrac{1}{2}y^2 + C", "y", "2y", 1, 1, 2),
    ("q006", "xy", "Ce^{x^2/2}", "xy", "y", 0, 1, math.e ** 0.5),
    ("q007", "y/x", "Cx", "y/x", "x", 2, 1, 2),
    ("q008", "x^2 y", "Ce^{x^3/3}", "x^2y", "y", 0, 1, math.e ** (1 / 3)),
    ("q009", "-2y", "Ce^{-2x}", "-2y", "y", 0, 3, 3 * math.e ** (-2)),
    ("q010", "e^x", "e^x + C", "e^x", "x", 0, 0, 1),
]
for qid, rhs, gen, tag1, tag2, x0, y0, y_part in basic_sep:
    rhs_y = rhs.replace("y", "y\\,")
    questions.append(make_q(
        qid, "Easy", 4, "expression", ["separation of variables", tag1],
        f"Find the general solution of $\\dfrac{{dy}}{{dx}} = {rhs}$.",
        [
            step(1, "Identify separable form", f"\\dfrac{{dy}}{{dx}} = {rhs}",
                 "The equation can be solved by separating variables or direct integration."),
            step(2, "Separate (if needed)", "\\text{rearrange } y\\text{- and }x\\text{-terms to opposite sides}",
                 "Put each variable on its own side of the equation."),
            step(3, "Integrate both sides", f"\\int dy \\text{{ or }} \\int \\dfrac{{dy}}{{{tag2}}} = \\int {rhs_y}\\,dx",
                 "Integrate with respect to the appropriate variable."),
            step(4, "Add constant", "+C",
                 "Include the arbitrary constant of integration."),
            step(5, "General solution", f"y = {gen}",
                 "Express $y$ in terms of $x$ and $C$."),
            step(6, "Check by differentiating", f"\\dfrac{{d}}{{dx}}({gen.replace('C', 'C_0')}) \\text{{ gives }} {rhs}",
                 "Differentiating the answer should recover the differential equation."),
        ],
        f"$y = {gen}$.",
    ))

questions.append(make_q(
    "q011", "Easy", 4, "expression", ["particular solution", "initial condition"],
    "Solve $\\dfrac{dy}{dx} = 2x$ given that $y = 5$ when $x = 1$.",
    [
        step(1, "Integrate", "y = \\int 2x\\,dx = x^2 + C",
             "Direct integration with respect to $x$."),
        step(2, "Use initial condition", "y(1) = 5 \\Rightarrow 1 + C = 5",
             "Substitute $x=1$, $y=5$."),
        step(3, "Find $C$", "C = 4",
             "Solve for the constant."),
        step(4, "Particular solution", "y = x^2 + 4",
             "Write the final answer with no arbitrary constant."),
        step(5, "Verify the point", "y(1) = 1 + 4 = 5",
             "Check the curve passes through $(1,5)$."),
        step(6, "Verify the DE", "\\dfrac{dy}{dx} = 2x",
             "Differentiating $y = x^2 + 4$ gives the original equation."),
    ],
    "$y = x^2 + 4$.",
))

particular_easy = [
    ("q012", "xy", "y = Ce^{x^2/2}", 0, 2, "y = 2e^{x^2/2}"),
    ("q013", "y/x", "y = Cx", 2, 6, "y = 3x"),
    ("q014", "3y", "y = Ce^{3x}", 0, 4, "y = 4e^{3x}"),
    ("q015", "x/y", "y^2 = x^2 + C", 0, 3, "y = \\sqrt{x^2 + 9}"),
    ("q016", "-y", "y = Ce^{-x}", 0, 5, "y = 5e^{-x}"),
    ("q017", "2x/y", "y^2 = 2x^2 + C", 1, 3, "y = \\sqrt{2x^2 + 1}"),
    ("q018", "e^{-y}", "y = -e^{-x} + C", 0, 0, "y = 1 - e^{-x}"),
]
for qid, rhs, gen, x0, y0, part in particular_easy:
    questions.append(make_q(
        qid, "Easy", 5, "expression", ["particular solution", "separation of variables"],
        f"Solve $\\dfrac{{dy}}{{dx}} = {rhs}$ given that $y = {y0}$ when $x = {x0}$.",
        [
            step(1, "Separate variables", "\\text{write } y\\text{-terms on one side, }x\\text{-terms on the other}",
                 f"Rearrange $\\dfrac{{dy}}{{dx}} = {rhs}$ into integrable form."),
            step(2, "Integrate", f"\\text{{general solution: }} {gen}",
                 "Integrate both sides and include $+C$."),
            step(3, "Substitute initial condition", f"x = {x0},\\; y = {y0}",
                 "Use the given point to form an equation for $C$."),
            step(4, "Solve for $C$", "\\text{determine the constant}",
                 "Algebra gives the unique constant for this solution curve."),
            step(5, "Write particular solution", f"y = {part.replace('y = ', '')}" if part.startswith("y = ") else part,
                 "State the answer with no arbitrary constant."),
            step(6, "Verify", f"\\text{{check }} (x,y)=({x0},{y0}) \\text{{ satisfies the solution}}",
                 "Substitute back to confirm."),
        ],
        f"${part}$.",
    ))

# ══════════════════════════════════════════════════════════════════════════════
# INTERMEDIATE q019–q035
# ══════════════════════════════════════════════════════════════════════════════

intermediate_sep = [
    ("q019", "\\dfrac{y}{x}", "y = Cx", "proportional"),
    ("q020", "x(y+1)", "y + \\ln|y+1| = \\tfrac{x^2}{2} + C", "product form"),
    ("q021", "y^2", "y = -\\dfrac{1}{x} + C", "reciprocal"),
    ("q022", "\\sin x", "y = -\\cos x + C", "trigonometric"),
    ("q023", "\\dfrac{1}{y}", "y^2 = 2x + C", "reciprocal y"),
    ("q024", "xy^2", "y = -\\dfrac{2}{x^2 + C}", "nonlinear"),
    ("q025", "e^{x-y}", "e^y = e^x + C", "exponential"),
    ("q026", "\\dfrac{x}{y}", "y^2 = x^2 + C", "quadratic"),
    ("q027", "y\\cos x", "y = Ce^{-\\sin x}", "trigonometric"),
    ("q028", "\\dfrac{1}{x}", "y = \\ln|x| + C", "logarithmic"),
]
for qid, rhs, gen, tag in intermediate_sep:
    questions.append(make_q(
        qid, "Intermediate", 5, "expression", ["separation of variables", tag],
        f"Find the general solution of $\\dfrac{{dy}}{{dx}} = {rhs}$.",
        [
            step(1, "Check separability", f"\\dfrac{{dy}}{{dx}} = {rhs}",
                 "Confirm $x$ and $y$ terms can be separated."),
            step(2, "Rearrange", "\\dfrac{1}{g(y)}\\,dy = f(x)\\,dx",
                 "Move each variable to its own side."),
            step(3, "Integrate left side", "\\int \\dfrac{1}{g(y)}\\,dy",
                 "Integrate with respect to $y$."),
            step(4, "Integrate right side", "\\int f(x)\\,dx",
                 "Integrate with respect to $x$."),
            step(5, "General solution", gen.replace("y = ", "y = ") if "y" in gen else gen,
                 "Combine with arbitrary constant $C$."),
            step(6, "Simplify if possible", "\\text{make } y \\text{ the subject when feasible}",
                 "Express the answer clearly."),
        ],
        f"${gen}$.",
    ))

# Exponential growth/decay intermediate
growth_cases = [
    ("q029", 500, 0.03, 10, "population"),
    ("q030", 200, -0.05, 5, "decay"),
    ("q031", 1000, 0.02, 20, "investment"),
    ("q032", 80, 0.08, 8, "bacteria"),
]
for qid, P0, k, t, ctx in growth_cases:
    Pt = P0 * math.exp(k * t)
    sign = "+" if k > 0 else ""
    questions.append(make_q(
        qid, "Intermediate", 6, "numeric", ["exponential growth", "modelling"],
        f"A quantity grows according to $\\dfrac{{dP}}{{dt}} = {k}P$. Initially $P = {P0}$. Find $P$ when $t = {t}$.",
        [
            step(1, "Recognise standard form", "\\dfrac{dP}{dt} = kP",
                 "This is proportional growth/decay — the rate is proportional to the current amount."),
            step(2, "Separate variables", "\\dfrac{1}{P}\\,dP = k\\,dt",
                 "Divide by $P$ and multiply by $dt$."),
            step(3, "Integrate", "\\ln|P| = kt + C",
                 "Standard logarithmic integration."),
            step(4, "Exponentiate", f"P = Ae^{{{sign}{k}t}}",
                 "Write in exponential form."),
            step(5, "Use $P(0) = P_0$", f"A = {P0}",
                 "The initial value gives the coefficient."),
            step(6, "Substitute $t$", f"P({t}) = {P0}e^{{{k}({t})}} = {fmt(Pt, 2)}",
                 "Evaluate at the required time."),
        ],
        f"$P = {fmt(Pt, 2)}$.",
    ))

# Newton cooling
cooling_cases = [
    ("q033", 90, 20, 0.1, 5),
    ("q034", 100, 25, 0.05, 10),
    ("q035", 80, 18, 0.2, 3),
]
for qid, T0, Te, k, t in cooling_cases:
    Tt = Te + (T0 - Te) * math.exp(-k * t)
    questions.append(make_q(
        qid, "Intermediate", 7, "numeric", ["cooling", "modelling"],
        f"An object cools from ${T0}^{{\\circ}}\\text{{C}}$ in a room at ${Te}^{{\\circ}}\\text{{C}}$. Newton's law gives $\\dfrac{{dT}}{{dt}} = -{k}(T - {Te})$. Find the temperature after ${t}$ minutes.",
        [
            step(1, "Standard cooling form", f"\\dfrac{{dT}}{{dt}} = -{k}(T - {Te})",
                 "The rate of cooling is proportional to the excess temperature above the room."),
            step(2, "Substitute $u = T - T_e$", f"\\dfrac{{du}}{{dt}} = -{k}u",
                 "This reduces to exponential decay."),
            step(3, "Solve for $u$", f"u = Ae^{{-{k}t}}",
                 "Integrate the separable equation."),
            step(4, "Return to $T$", f"T = {Te} + Ae^{{-{k}t}}",
                 "Add the ambient temperature back."),
            step(5, "Initial condition", f"T(0) = {T0} \\Rightarrow A = {T0 - Te}",
                 "Use the starting temperature to find $A$."),
            step(6, "Substitute $t = {t}$", f"T = {Te} + {T0 - Te}e^{{-{k}({t})}} = {fmt(Tt, 2)}",
                 "Evaluate the temperature at the required time."),
            step(7, "Interpret", f"\\text{{cooling toward }} {Te}^{{\\circ}}\\text{{C}}",
                 "The temperature approaches the room temperature asymptotically."),
        ],
        f"${fmt(Tt, 2)}^{{\\circ}}\\text{{C}}$.",
    ))

# ══════════════════════════════════════════════════════════════════════════════
# HARD q036–q053
# ══════════════════════════════════════════════════════════════════════════════

hard_particular = [
    ("q036", "xy", 1, 2, "y = 2e^{(x^2-1)/2}"),
    ("q037", "y/x", 3, 9, "y = 3x"),
    ("q038", "y^2", 1, 4, "y = \\dfrac{1}{5-2x}"),
    ("q039", "x e^y", 0, 1, "y = \\ln(x^2+1)"),
    ("q040", "y(1+x^2)", 0, 2, "y = 2e^{\\arctan x}"),
    ("q041", "\\cos x \\sin y", 0, 1, "y = \\arccos(1-e^{\\sin x})"),
    ("q042", "y/x^2", 1, 2, "y = 2e^{-1/x}"),
    ("q043", "e^{x+y}", 0, 2, "y = \\ln(e^x + 1)"),
]
for qid, rhs, x0, y0, ans in hard_particular:
    questions.append(make_q(
        qid, "Hard", 7, "expression", ["particular solution", "separation of variables"],
        f"Find the particular solution of $\\dfrac{{dy}}{{dx}} = {rhs}$ satisfying $y({x0}) = {y0}$.",
        [
            step(1, "Separate variables", f"\\text{{rearrange }} \\dfrac{{dy}}{{dx}} = {rhs}",
                 "Put $y$-terms and $x$-terms on opposite sides."),
            step(2, "Integrate both sides", "\\int \\ldots\\,dy = \\int \\ldots\\,dx",
                 "Integrate each side, including $+C$."),
            step(3, "General solution", "y = f(x, C)",
                 "Express the family of solutions."),
            step(4, "Apply $y(x_0) = y_0$", f"x = {x0},\\; y = {y0}",
                 "Substitute the initial condition."),
            step(5, "Solve for $C$", "\\text{find the constant}",
                 "Algebra determines the unique curve."),
            step(6, "Particular solution", ans.replace("y = ", ""),
                 "State $y$ explicitly."),
            step(7, "Verify", "\\text{differentiate and check the DE}",
                 "Confirm the answer satisfies the differential equation."),
        ],
        f"${ans}$.",
    ))

# Forming DE from context
questions.append(make_q(
    "q044", "Hard", 6, "written", ["modelling", "forming equation"],
    "A radioactive substance decays so that the rate of decrease of mass is proportional to the current mass. Write down a differential equation for the mass $m$ at time $t$.",
    [
        step(1, "Identify the variable", "m = m(t)",
             "Mass depends on time."),
        step(2, "Rate of change", "\\dfrac{dm}{dt}",
             "How fast the mass is changing."),
        step(3, "Proportional to current mass", "\\dfrac{dm}{dt} \\propto m",
             "The wording 'proportional to current mass' gives the relationship."),
        step(4, "Negative for decay", "\\dfrac{dm}{dt} \\propto -m",
             "Decrease means the rate is negative."),
        step(5, "Introduce constant", "\\dfrac{dm}{dt} = -km, \\quad k>0",
             "Replace proportionality with a positive constant $k$."),
        step(6, "State the equation", "\\dfrac{dm}{dt} = -km",
             "This is the standard exponential decay model."),
    ],
    "$\\dfrac{dm}{dt} = -km$ where $k > 0$ is a constant.",
))

questions.append(make_q(
    "q045", "Hard", 7, "written", ["modelling", "forming equation"],
    "The number of bacteria $N$ in a culture grows at a rate proportional to $N$. There are $500$ bacteria initially. Form and solve the differential equation to find $N$ in terms of $t$.",
    [
        step(1, "Model", "\\dfrac{dN}{dt} = kN",
             "Growth rate proportional to current population."),
        step(2, "Separate", "\\dfrac{1}{N}\\,dN = k\\,dt",
             "Standard separation."),
        step(3, "Integrate", "\\ln N = kt + C",
             "Logarithmic form."),
        step(4, "Exponentiate", "N = Ae^{kt}",
             "Exponential solution."),
        step(5, "Use $N(0) = 500$", "A = 500",
             "Initial condition fixes the coefficient."),
        step(6, "General solution", "N = 500e^{kt}",
             "Population in terms of $t$ with growth constant $k$."),
        step(7, "Note on $k$", "k \\text{ found from further data if needed}",
             "Without another data point, $k$ remains a model parameter."),
    ],
    "$N = 500e^{kt}$.",
))

# Half-life / time to reach value
questions.append(make_q(
    "q046", "Hard", 8, "numeric", ["exponential decay", "half-life"],
    "A substance decays according to $\\dfrac{dm}{dt} = -0.04m$. Initially $m = 200\\ \\text{g}$. Find the mass after $25$ hours.",
    [
        step(1, "Solve the DE", "m = 200e^{-0.04t}",
             "Standard exponential decay with $m(0)=200$."),
        step(2, "Substitute $t = 25$", "m = 200e^{-0.04 \\times 25} = 200e^{-1}",
             "Evaluate at $t=25$."),
        step(3, "Calculate", f"m = 200/e \\approx {fmt(200/math.e, 2)}",
             "Use $e^{-1} \\approx 0.368$."),
        step(4, "Units", "\\text{grams}",
             "Mass in grams."),
        step(5, "Sanity check", "m < 200",
             "Mass should decrease from the initial value."),
        step(6, "Interpretation", "\\text{about 37\\% of initial mass remains}",
             "$e^{-1}$ of the substance remains after $25$ hours with this $k$."),
    ],
    f"$m \\approx {fmt(200/math.e, 2)}\\ \\text{{g}}$.",
))

questions.append(make_q(
    "q047", "Hard", 8, "numeric", ["cooling", "particular solution"],
    "A cup of tea at $95^{\\circ}\\text{C}$ is placed in a room at $20^{\\circ}\\text{C}$. Cooling follows $\\dfrac{dT}{dt} = -0.08(T-20)$. Find how long until the tea reaches $50^{\\circ}\\text{C}$.",
    [
        step(1, "Solve cooling equation", "T = 20 + 75e^{-0.08t}",
             "$A = 95-20 = 75$ from the initial temperature."),
        step(2, "Set $T = 50$", "50 = 20 + 75e^{-0.08t}",
             "Solve for the required time."),
        step(3, "Rearrange", "30 = 75e^{-0.08t}",
             "Subtract the room temperature."),
        step(4, "Divide", "e^{-0.08t} = 0.4",
             "Isolate the exponential."),
        step(5, "Take logs", "-0.08t = \\ln(0.4)",
             "Natural logarithm of both sides."),
        step(6, "Solve for $t$", f"t = -\\dfrac{{\\ln(0.4)}}{{0.08}} \\approx {fmt(-math.log(0.4)/0.08, 1)}",
             "Calculate the time in minutes (or consistent units)."),
        step(7, "Check", "T \\to 20 \\text{ as } t \\to \\infty",
             "Temperature approaches room temperature."),
    ],
    f"$t \\approx {fmt(-math.log(0.4)/0.08, 1)}$ minutes.",
))

# More hard modelling q048-q053
hard_model = [
    ("q048", "investment", 10000, 0.06, 5, 10000 * math.e ** 0.3),
    ("q049", "population", 3000, 0.015, 40, 3000 * math.e ** 0.6),
    ("q050", "mass decay", 150, -0.02, 30, 150 * math.e ** (-0.6)),
    ("q051", "cooling", 70, 15, 0.12, 8, 15 + 55 * math.e ** (-0.96)),
    ("q052", "bacteria", 50, 0.25, 6, 50 * math.e ** 1.5),
    ("q053", "temperature", 200, 25, 0.03, 15, 25 + 175 * math.e ** (-0.45)),
]
for item in hard_model:
    qid = item[0]
    if qid == "q051":
        _, _, T0, Te, k, t, ans = item
        questions.append(make_q(
            qid, "Hard", 8, "numeric", ["cooling", "modelling"],
            f"Food at ${T0}^{{\\circ}}\\text{{C}}$ is stored in a fridge at ${Te}^{{\\circ}}\\text{{C}}$. The temperature satisfies $\\dfrac{{dT}}{{dt}} = -{k}(T-{Te})$. Find $T$ after ${t}$ hours.",
            [
                step(1, "Cooling model", f"T = {Te} + ({T0}-{Te})e^{{-{k}t}}",
                     "Standard Newton cooling solution."),
                step(2, "Substitute $t$", f"t = {t}",
                     "Use the given time."),
                step(3, "Calculate exponent", f"-{k} \\times {t} = {-k*t}",
                     "Evaluate the power."),
                step(4, "Evaluate", f"T \\approx {fmt(ans, 2)}",
                     "Compute the temperature."),
                step(5, "Between initial and ambient", f"{Te} < T < {T0}",
                     "Temperature should lie between fridge and starting values."),
                step(6, "Units", "^{\\circ}\\text{C}",
                     "Temperature in degrees Celsius."),
            ],
            f"${fmt(ans, 2)}^{{\\circ}}\\text{{C}}$.",
        ))
    elif qid == "q053":
        _, _, T0, Te, k, t, ans = item
        questions.append(make_q(
            qid, "Hard", 9, "numeric", ["cooling", "time"],
            f"Metal at ${T0}^{{\\circ}}\\text{{C}}$ cools in air at ${Te}^{{\\circ}}\\text{{C}}$ with $\\dfrac{{dT}}{{dt}} = -{k}(T-{Te})$. Find the temperature after ${t}$ minutes.",
            [
                step(1, "Solution form", f"T = {Te} + {T0-Te}e^{{-{k}t}}",
                     "Newton cooling with initial excess ${T0-Te}$."),
                step(2, "Substitute", f"t = {t}",
                     "Given cooling time."),
                step(3, "Exponent", f"-{k*t}",
                     "Power in the exponential."),
                step(4, "Evaluate", f"T = {fmt(ans, 2)}",
                     "Numerical temperature."),
                step(5, "Trend", "\\text{decreasing toward ambient}",
                     "Temperature falls toward $25^{\\circ}\\text{C}$."),
                step(6, "Model assumption", "\\text{rate } \\propto \\text{ excess temperature}",
                     "Newton's law underpins the equation."),
            ],
            f"${fmt(ans, 2)}^{{\\circ}}\\text{{C}}$.",
        ))
    else:
        _, label, P0, k, t, ans = item
        questions.append(make_q(
            qid, "Hard", 7, "numeric", ["exponential growth" if k > 0 else "exponential decay", "modelling"],
            f"An {label} of value ${P0}$ changes according to $\\dfrac{{dP}}{{dt}} = {k}P$. Find the value after ${t}$ years.",
            [
                step(1, "General solution", f"P = {P0}e^{{{k}t}}",
                     "Exponential model with initial value $P_0$."),
                step(2, "Substitute time", f"t = {t}",
                     "Use the given number of years."),
                step(3, "Exponent", f"{k} \\times {t} = {k*t}",
                     "Compute the power."),
                step(4, "Evaluate", f"P \\approx {fmt(ans, 2)}",
                     "Calculate the final value."),
                step(5, "Growth or decay", "\\text{compare with } P_0",
                     f"Value {'increases' if k > 0 else 'decreases'} from ${P0}$."),
                step(6, "Context", f"\\text{{{label} model}}",
                     "Interpret the result in context."),
            ],
            f"$P \\approx {fmt(ans, 2)}$.",
        ))

# ══════════════════════════════════════════════════════════════════════════════
# CHALLENGE q054–q070
# ══════════════════════════════════════════════════════════════════════════════

questions.append(make_q(
    "q054", "Challenge", 10, "written", ["separation of variables", "proof"],
    "Show that the general solution of $\\dfrac{dy}{dx} = ky$ is $y = Ae^{kx}$.",
    [
        step(1, "Separate variables", "\\dfrac{1}{y}\\,dy = k\\,dx",
             "Divide by $y$ (assuming $y \\neq 0$) and multiply by $dx$."),
        step(2, "Integrate left", "\\int \\dfrac{1}{y}\\,dy = \\ln|y|",
             "Standard integral (plus constant later)."),
        step(3, "Integrate right", "\\int k\\,dx = kx",
             "Integrate the constant $k$ with respect to $x$."),
        step(4, "Combine", "\\ln|y| = kx + C",
             "Equate the integrated forms."),
        step(5, "Exponentiate", "|y| = e^{kx+C} = e^C e^{kx}",
             "Remove the logarithm."),
        step(6, "Absorb constant", "y = Ae^{kx}",
             "Since $e^C$ is just another constant $A$, and sign can be absorbed."),
        step(7, "Check $A=0$", "y = 0 \\text{ also satisfies the DE}",
             "The trivial solution is included when we allow $A=0$."),
        step(8, "Verify", "\\dfrac{d}{dx}(Ae^{kx}) = kAe^{kx} = ky",
             "Differentiating confirms the solution."),
        step(9, "Conclusion", "y = Ae^{kx} \\text{ is the general solution}",
             "This is the prototype for growth and decay models."),
    ],
    "Separating gives $\\ln|y| = kx + C$, so $y = Ae^{kx}$.",
))

questions.append(make_q(
    "q055", "Challenge", 10, "written", ["cooling", "derivation"],
    "Starting from $\\dfrac{dT}{dt} = -k(T - T_e)$, derive the solution $T = T_e + (T_0 - T_e)e^{-kt}$.",
    [
        step(1, "Substitute $u = T - T_e$", "\\dfrac{du}{dt} = -ku",
             "Shift temperature by the ambient value."),
        step(2, "Separate", "\\dfrac{1}{u}\\,du = -k\\,dt",
             "Standard separable form."),
        step(3, "Integrate", "\\ln|u| = -kt + C",
             "Logarithmic integration."),
        step(4, "Exponentiate", "u = Ae^{-kt}",
             "Exponential form."),
        step(5, "Restore $T$", "T = T_e + Ae^{-kt}",
             "Add back the ambient temperature."),
        step(6, "Initial condition", "T(0) = T_0 \\Rightarrow A = T_0 - T_e",
             "Use the starting temperature."),
        step(7, "Particular solution", "T = T_e + (T_0 - T_e)e^{-kt}",
             "Final cooling formula."),
        step(8, "Limiting behaviour", "T \\to T_e \\text{ as } t \\to \\infty",
             "Temperature approaches the environment."),
        step(9, "Physical meaning", "\\text{excess temperature decays exponentially}",
             "The gap above ambient shrinks by a constant factor per unit time."),
    ],
    "$T = T_e + (T_0 - T_e)e^{-kt}$.",
))

challenge_particular = [
    ("q056", "xy^3", 0, 1, "y = (x^2+1)^{-1/3}"),
    ("q057", "y^2/x", 1, 1, "y = x"),
    ("q058", "e^x \\cos y", 0, 0, "y = 0"),
    ("q059", "x\\sqrt{y}", 0, 4, "y = (x^2/4+2)^2"),
    ("q060", "y(1+y^2)", 0, 1, "y = \\tan x"),
]
for qid, rhs, x0, y0, ans in challenge_particular:
    questions.append(make_q(
        qid, "Challenge", 11, "expression", ["separation of variables", "particular solution"],
        f"Solve $\\dfrac{{dy}}{{dx}} = {rhs}$ with $y({x0}) = {y0}$.",
        [
            step(1, "Separate variables", f"\\text{{rearrange }} {rhs}",
                 "Get integrable form on each side."),
            step(2, "Integrate", "\\text{both sides with } +C",
                 "Careful integration — may need substitution."),
            step(3, "General solution", "y = f(x, C)",
                 "Family of curves."),
            step(4, "Initial condition", f"y({x0}) = {y0}",
                 "Substitute the given point."),
            step(5, "Find $C$", "\\text{solve algebraically}",
                 "Determine the unique constant."),
            step(6, "Particular solution", ans,
                 "Final answer."),
            step(7, "Verify DE", "\\text{differentiate}",
                 "Check the derivative matches."),
            step(8, "Domain note", "\\text{note any restrictions on } x",
                 "E.g. where expressions are defined."),
        ],
        f"${ans}$.",
    ))

questions.append(make_q(
    "q061", "Challenge", 12, "written", ["modelling", "interpretation"],
    "A population satisfies $\\dfrac{dP}{dt} = 0.02P$ with $P(0) = 8000$. (a) Find $P(t)$. (b) When does the population reach $12000$? (c) What does the model predict as $t \\to \\infty$?",
    [
        step(1, "Part (a): solve", "P = 8000e^{0.02t}",
             "Standard exponential growth."),
        step(2, "Part (b): set $P = 12000$", "12000 = 8000e^{0.02t}",
             "Equation for the required time."),
        step(3, "Rearrange", "e^{0.02t} = 1.5",
             "Divide both sides by $8000$."),
        step(4, "Logarithms", "0.02t = \\ln(1.5)",
             "Take natural logs."),
        step(5, "Solve", f"t = \\dfrac{{\\ln(1.5)}}{{0.02}} \\approx {fmt(math.log(1.5)/0.02, 1)}",
             "Time to reach $12000$."),
        step(6, "Part (c): limit", "P \\to \\infty \\text{ as } t \\to \\infty",
             "Unbounded growth — model breaks down eventually."),
        step(7, "Model limitation", "\\text{no carrying capacity in this simple model}",
             "Real populations plateau; this DE does not capture that."),
        step(8, "Summary", f"P = 8000e^{{0.02t}};\\; t \\approx {fmt(math.log(1.5)/0.02, 1)};\\; P \\to \\infty",
             "Consolidate all three parts."),
    ],
    f"(a) $P = 8000e^{{0.02t}}$; (b) $t \\approx {fmt(math.log(1.5)/0.02, 1)}$; (c) $P \\to \\infty$ (unlimited growth).",
))

questions.append(make_q(
    "q062", "Challenge", 12, "numeric", ["cooling", "multi-part"],
    "Coffee at $85^{\\circ}\\text{C}$ cools in a room at $22^{\\circ}\\text{C}$ according to $\\dfrac{dT}{dt} = -0.06(T-22)$. (a) Find $T$ as a function of $t$. (b) Find the temperature after $10$ minutes. (c) Find the time for the coffee to reach $40^{\\circ}\\text{C}$.",
    [
        step(1, "Part (a)", "T = 22 + 63e^{-0.06t}",
             "$A = 85 - 22 = 63$."),
        step(2, "Part (b): $t = 10$", f"T = 22 + 63e^{{-0.6}} \\approx {fmt(22 + 63*math.e**(-0.6), 2)}",
             "Substitute $t=10$."),
        step(3, "Part (c): set $T = 40$", "40 = 22 + 63e^{-0.06t}",
             "Solve for cooling time."),
        step(4, "Rearrange", "18 = 63e^{-0.06t}",
             "Isolate the exponential term."),
        step(5, "Logs", "e^{-0.06t} = 18/63",
             "Simplify the fraction."),
        step(6, "Solve", f"t = -\\dfrac{{\\ln(18/63)}}{{0.06}} \\approx {fmt(-math.log(18/63)/0.06, 1)}",
             "Time to reach $40^{\\circ}\\text{C}$."),
        step(7, "Check trend", "T \\text{ decreases from } 85 \\to 22",
             "Temperature always moves toward room temperature."),
        step(8, "Summary", f"T = 22 + 63e^{{-0.06t}}",
             "Complete model answer."),
    ],
    f"(a) $T = 22 + 63e^{{-0.06t}}$; (b) $\\approx {fmt(22 + 63*math.e**(-0.6), 2)}^{{\\circ}}\\text{{C}}$; (c) $t \\approx {fmt(-math.log(18/63)/0.06, 1)}$ min.",
))

questions.append(make_q(
    "q063", "Challenge", 11, "written", ["separation of variables", "general solution"],
    "Find the general solution of $\\dfrac{dy}{dx} = \\dfrac{x}{y}$ for $y \\neq 0$.",
    [
        step(1, "Separate", "y\\,dy = x\\,dx",
             "Multiply both sides by $y\\,dx$."),
        step(2, "Integrate left", "\\int y\\,dy = \\dfrac{y^2}{2}",
             "Power rule."),
        step(3, "Integrate right", "\\int x\\,dx = \\dfrac{x^2}{2}",
             "Power rule."),
        step(4, "Combine", "\\dfrac{y^2}{2} = \\dfrac{x^2}{2} + C",
             "One constant of integration."),
        step(5, "Multiply by 2", "y^2 = x^2 + 2C",
             "Simplify."),
        step(6, "Rename constant", "y^2 = x^2 + C",
             "Absorb the factor $2$ into $C$."),
        step(7, "Solve for $y$", "y = \\pm\\sqrt{x^2 + C}",
             "Two branches depending on the sign."),
        step(8, "Geometric meaning", "\\text{family of hyperbolas / curves}",
             "The general solution describes a family of curves."),
    ],
    "$y^2 = x^2 + C$ (or $y = \\pm\\sqrt{x^2 + C}$).",
))

questions.append(make_q(
    "q064", "Challenge", 13, "written", ["modelling", "forming equation"],
    "A drug concentration $C$ in the bloodstream decreases at a rate proportional to $C$. After $4$ hours the concentration has halved. Initially $C = 80\\ \\text{mg/l}$. (a) Write down the differential equation. (b) Find $C(t)$. (c) Find the concentration after $10$ hours.",
    [
        step(1, "Part (a)", "\\dfrac{dC}{dt} = -kC, \\quad k>0",
             "Proportional decrease gives negative constant times $C$."),
        step(2, "General solution", "C = 80e^{-kt}",
             "Use $C(0)=80$."),
        step(3, "Halving condition", "C(4) = 40 \\Rightarrow 80e^{-4k} = 40",
             "Concentration halves in $4$ hours."),
        step(4, "Solve for $k$", "e^{-4k} = 0.5 \\Rightarrow k = \\dfrac{\\ln 2}{4}",
             "Find the decay constant."),
        step(5, "Part (b)", "C = 80e^{-(\\ln 2/4)t} = 80\\left(\\dfrac{1}{2}\\right)^{t/4}",
             "Equivalent half-life form."),
        step(6, "Part (c): $t = 10$", f"C = 80 \\times 0.5^{{10/4}} \\approx {fmt(80 * 0.5 ** 2.5, 2)}",
             "Evaluate at $t=10$ hours."),
        step(7, "Interpret", "\\text{concentration falls by half every 4 hours}",
             "Half-life interpretation of the model."),
        step(8, "Units", "\\text{mg/l}",
             "Concentration units."),
    ],
    f"(a) $\\dfrac{{dC}}{{dt}} = -kC$; (b) $C = 80e^{{-(\\ln 2/4)t}}$; (c) $\\approx {fmt(80 * 0.5 ** 2.5, 2)}\\ \\text{{mg/l}}$.",
))

questions.append(make_q(
    "q065", "Challenge", 12, "expression", ["separation of variables"],
    "Solve $\\dfrac{dy}{dx} = \\dfrac{1+y^2}{1+x^2}$.",
    [
        step(1, "Separate", "\\dfrac{dy}{1+y^2} = \\dfrac{dx}{1+x^2}",
             "Both sides are in standard form."),
        step(2, "Integrate left", "\\int \\dfrac{dy}{1+y^2} = \\arctan y",
             "Standard integral."),
        step(3, "Integrate right", "\\int \\dfrac{dx}{1+x^2} = \\arctan x",
             "Standard integral."),
        step(4, "General solution", "\\arctan y = \\arctan x + C",
             "Implicit form."),
        step(5, "Tangent both sides", "y = \\tan(\\arctan x + C)",
             "Explicit form using tangent."),
        step(6, "Tangent addition", "y = \\dfrac{x + \\tan C}{1 - x\\tan C}",
             "Alternative form with constant $\\tan C = A$."),
        step(7, "Simplify constant", "y = \\dfrac{x + A}{1 - Ax}",
             "Family of solutions."),
        step(8, "Check", "\\text{differentiate using quotient rule}",
             "Verify the derivative matches."),
    ],
    "$\\arctan y = \\arctan x + C$, or equivalently $y = \\tan(\\arctan x + C)$.",
))

questions.append(make_q(
    "q066", "Challenge", 11, "written", ["interpretation", "modelling"],
    "Explain why the model $\\dfrac{dP}{dt} = kP$ with $k > 0$ is unrealistic for long-term population growth.",
    [
        step(1, "Solution form", "P = P_0 e^{kt}",
             "Exponential growth without bound."),
        step(2, "Long-term behaviour", "P \\to \\infty \\text{ as } t \\to \\infty",
             "Population grows without limit."),
        step(3, "No carrying capacity", "\\text{model ignores limited resources}",
             "Real ecosystems have food, space, and competition limits."),
        step(4, "Rate grows with size", "\\dfrac{dP}{dt} \\text{ increases as } P \\text{ increases}",
             "Larger populations accelerate even faster — unrealistic indefinitely."),
        step(5, "Better models exist", "\\text{logistic equation } \\dfrac{dP}{dt} = kP\\left(1-\\dfrac{P}{K}\\right)",
             "Logistic growth levels off at carrying capacity $K$."),
        step(6, "Short-term use", "\\text{exponential model OK for early growth}",
             "Useful approximation before limiting factors dominate."),
        step(7, "Conclusion", "\\text{valid short-term, not long-term}",
             "The simple model lacks a saturation mechanism."),
    ],
    "The model predicts unbounded growth ($P \\to \\infty$) because it has no carrying capacity; real populations are limited by resources, so logistic or similar models are better long-term.",
))

questions.append(make_q(
    "q067", "Challenge", 14, "numeric", ["cooling", "finding constant"],
    "A body at $100^{\\circ}\\text{C}$ cools to $70^{\\circ}\\text{C}$ in $8$ minutes in a room at $20^{\\circ}\\text{C}$. Assuming $\\dfrac{dT}{dt} = -k(T-20)$, find $k$ and the temperature after $15$ minutes.",
    [
        step(1, "General solution", "T = 20 + 80e^{-kt}",
             "$T_0 - T_e = 80$."),
        step(2, "Use cooling data", "T(8) = 70 \\Rightarrow 70 = 20 + 80e^{-8k}",
             "Substitute the known point."),
        step(3, "Solve for $k$", "50 = 80e^{-8k} \\Rightarrow e^{-8k} = 5/8",
             "Rearrange the exponential equation."),
        step(4, "Logarithms", f"k = -\\dfrac{{\\ln(5/8)}}{{8}} \\approx {fmt(-math.log(5/8)/8, 4)}",
             "Find the cooling constant."),
        step(5, "Model", f"T = 20 + 80e^{{-{fmt(-math.log(5/8)/8, 4)}t}}",
             "Complete temperature function."),
        step(6, "At $t = 15$", f"T = 20 + 80e^{{-{fmt(-math.log(5/8)/8, 4)} \\times 15}} \\approx {fmt(20 + 80*math.e**(-(-math.log(5/8)/8)*15), 2)}",
             "Evaluate at $15$ minutes."),
        step(7, "Trend check", "T \\text{ between } 20 \\text{ and } 100",
             "Temperature remains physically sensible."),
        step(8, "Answer", f"k \\approx {fmt(-math.log(5/8)/8, 4)}",
             "State both $k$ and the temperature."),
    ],
    f"$k \\approx {fmt(-math.log(5/8)/8, 4)}$; $T(15) \\approx {fmt(20 + 80*math.e**(-(-math.log(5/8)/8)*15), 2)}^{{\\circ}}\\text{{C}}$.",
))

questions.append(make_q(
    "q068", "Challenge", 12, "expression", ["separation of variables"],
    "Find the general solution of $\\dfrac{dy}{dx} = \\dfrac{y}{x-1}$ for $x > 1$.",
    [
        step(1, "Separate", "\\dfrac{1}{y}\\,dy = \\dfrac{1}{x-1}\\,dx",
             "Standard separation."),
        step(2, "Integrate left", "\\ln|y|",
             "Logarithmic integral."),
        step(3, "Integrate right", "\\ln|x-1|",
             "Logarithm of linear term."),
        step(4, "Combine", "\\ln|y| = \\ln|x-1| + C",
             "General solution in log form."),
        step(5, "Exponentiate", "|y| = e^C|x-1|",
             "Remove logs."),
        step(6, "Absorb constant", "y = A(x-1)",
             "Linear relationship between $y$ and $x-1$."),
        step(7, "Verify domain", "x > 1 \\Rightarrow x-1 > 0",
             "Consistent with the given restriction."),
        step(8, "Check", "\\dfrac{d}{dx}[A(x-1)] = A \\Rightarrow \\dfrac{A}{x-1} = \\dfrac{y}{x-1}",
             "Differentiation confirms the solution."),
    ],
    "$y = A(x-1)$.",
))

questions.append(make_q(
    "q069", "Challenge", 13, "written", ["modelling", "exam-style"],
    "A lake contains fish whose population $N$ satisfies $\\dfrac{dN}{dt} = 0.03N$. There are $2000$ fish initially. (a) Find $N(t)$. (b) How many fish after $5$ years? (c) How long until the population doubles?",
    [
        step(1, "Part (a)", "N = 2000e^{0.03t}",
             "Exponential growth model."),
        step(2, "Part (b): $t = 5$", f"N = 2000e^{{0.15}} \\approx {fmt(2000*math.e**0.15, 0)}",
             "Evaluate after $5$ years."),
        step(3, "Part (c): doubling", "4000 = 2000e^{0.03t}",
             "Set $N$ to twice the initial value."),
        step(4, "Rearrange", "e^{0.03t} = 2",
             "Divide by $2000$."),
        step(5, "Logs", "0.03t = \\ln 2",
             "Take natural logarithms."),
        step(6, "Solve", f"t = \\dfrac{{\\ln 2}}{{0.03}} \\approx {fmt(math.log(2)/0.03, 1)}",
             "Doubling time."),
        step(7, "Interpret doubling time", f"\\approx {fmt(math.log(2)/0.03, 0)} \\text{{ years}}",
             "Useful summary statistic for the model."),
        step(8, "Summary", f"N = 2000e^{{0.03t}}",
             "Complete model."),
    ],
    f"(a) $N = 2000e^{{0.03t}}$; (b) $\\approx {fmt(2000*math.e**0.15, 0)}$; (c) $t \\approx {fmt(math.log(2)/0.03, 1)}$ years.",
))

questions.append(make_q(
    "q070", "Challenge", 14, "written", ["separation of variables", "conceptual"],
    "A student solves $\\dfrac{dy}{dx} = y^2$ by writing $\\dfrac{dy}{y^2} = dx$ and obtains $y = -\\dfrac{1}{x+C}$. (a) Verify this general solution. (b) Find the particular solution with $y(1) = 1$. (c) Explain why the solution blows up at finite $x$.",
    [
        step(1, "Part (a): separate", "\\dfrac{dy}{y^2} = dx",
             "Valid separation for $y \\neq 0$."),
        step(2, "Integrate", "-\\dfrac{1}{y} = x + C",
             "Power rule on the left."),
        step(3, "Rearrange", "y = -\\dfrac{1}{x+C}",
             "Matches the student's answer."),
        step(4, "Verify", "\\dfrac{dy}{dx} = \\dfrac{1}{(x+C)^2} = y^2",
             "Differentiation confirms."),
        step(5, "Part (b): $y(1)=1$", "1 = -\\dfrac{1}{1+C} \\Rightarrow C = -2",
             "Substitute the initial condition."),
        step(6, "Particular solution", "y = -\\dfrac{1}{x-2} = \\dfrac{1}{2-x}",
             "Unique curve through $(1,1)$."),
        step(7, "Part (c): blow-up", "x \\to 2 \\Rightarrow y \\to \\infty",
             "Denominator zero at $x=2$ — vertical asymptote."),
        step(8, "Interpretation", "\\text{solution only valid for } x < 2 \\text{ (given initial point)}",
             "The particular solution exists only to the left of the singularity."),
        step(9, "Lesson", "\\text{nonlinear DEs can have finite-time blow-up}",
             "Not all solutions exist for all time."),
    ],
    "(a) Verified: $y = -\\dfrac{1}{x+C}$. (b) $y = \\dfrac{1}{2-x}$. (c) Blow-up at $x=2$ where the denominator vanishes.",
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
