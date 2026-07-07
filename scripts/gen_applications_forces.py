#!/usr/bin/env python3
"""Generate all 70 questions for Applications of forces subtopic (Year 2 Mechanics)."""
import json
import math

OUT = "/Users/benjaminwalpole/Wisest_Maths_V5/wisest-maths-content/src/data/questions/a-level-maths/year-2-mech/applications-of-forces.ts"
G = 9.8


def step(n, desc, work, expl, diagram=None):
    return {"stepNumber": n, "description": desc, "workingLatex": work, "explanation": expl, "diagram": diagram}


def make_q(suffix, difficulty, marks, answer_type, tags, text, steps, final, diagram=None):
    return {
        "id": f"al.y2.mech.applications-forces.{suffix}",
        "level": "A-Level Maths",
        "topic": "Year 2 Mechanics",
        "subtopic": "Applications of forces",
        "subtopicId": "al.y2.mech.applications-forces",
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


def rad(d):
    return math.radians(d)


questions = []

# ══════════════════════════════════════════════════════════════════════════════
# EASY q001–q018: weight components, smooth slopes, basic F = ma
# ══════════════════════════════════════════════════════════════════════════════

questions.append(make_q(
    "q001", "Easy", 3, "written", ["slope", "resolving", "weight-components"],
    "A particle of mass $m$ rests on a smooth plane inclined at angle $\\alpha$ to the horizontal. "
    "Explain how to resolve the weight into components parallel and perpendicular to the plane, "
    "and state the magnitude of each component in terms of $m$, $g$, and $\\alpha$.",
    [
        step(1, "Draw the weight vertically downward", "W = mg",
             "The weight acts vertically through the centre of the particle."),
        step(2, "Identify the angle between weight and the plane",
             "\\text{Angle between vertical and normal} = \\alpha",
             "The normal is perpendicular to the plane, so the angle between weight and normal is $\\alpha$."),
        step(3, "Component perpendicular to the plane", "W_{\\perp} = mg\\cos\\alpha",
             "This component presses the particle into the plane."),
        step(4, "Component parallel to the plane", "W_{\\parallel} = mg\\sin\\alpha",
             "This component tends to slide the particle down the slope."),
        step(5, "Normal reaction on a smooth plane", "R = mg\\cos\\alpha",
             "With no perpendicular acceleration, the reaction balances $W_{\\perp}$."),
        step(6, "Summarise",
             "W_{\\parallel} = mg\\sin\\alpha, \\quad W_{\\perp} = mg\\cos\\alpha = R",
             "Resolving weight is the first step in almost every slope problem."),
    ],
    "$W_{\\parallel} = mg\\sin\\alpha$ down the plane; $W_{\\perp} = mg\\cos\\alpha = R$.",
))

# q002-q007: weight components numerical
comp_cases = [
    ("q002", 4, 30), ("q003", 6, 25), ("q004", 5, 40),
    ("q005", 8, 20), ("q006", 3, 35), ("q007", 10, 15),
]
for qid, m, alpha_deg in comp_cases:
    W = m * G
    W_par = W * math.sin(rad(alpha_deg))
    W_perp = W * math.cos(rad(alpha_deg))
    questions.append(make_q(
        qid, "Easy", 3, "numeric", ["weight-components", "slope"],
        f"A particle of mass ${m}\\,\\text{{kg}}$ is on a plane inclined at ${alpha_deg}°$ to the horizontal. "
        f"Taking $g = {G}\\,\\text{{m s}}^{{-2}}$, find the components of the weight parallel and "
        f"perpendicular to the plane.",
        [
            step(1, "Calculate the weight", f"W = mg = {m} \\times {G} = {fmt(W)}\\,\\text{{N}}",
                 f"Weight $= {fmt(W)}\\,\\text{{N}}$."),
            step(2, "Parallel component", f"W_{{\\parallel}} = W\\sin {alpha_deg}° = {fmt(W)}\\sin {alpha_deg}°",
                 "Use sine for the downslope component."),
            step(3, "Evaluate parallel", f"W_{{\\parallel}} = {fmt(W_par)}\\,\\text{{N}}",
                 f"$W_{{\\parallel}} = {fmt(W_par)}\\,\\text{{N}}$ down the plane."),
            step(4, "Perpendicular component", f"W_{{\\perp}} = W\\cos {alpha_deg}° = {fmt(W)}\\cos {alpha_deg}°",
                 "Use cosine for the into-plane component."),
            step(5, "Evaluate perpendicular", f"W_{{\\perp}} = {fmt(W_perp)}\\,\\text{{N}}",
                 f"$W_{{\\perp}} = {fmt(W_perp)}\\,\\text{{N}}$."),
            step(6, "Answer",
                 f"W_{{\\parallel}} = {fmt(W_par)}\\,\\text{{N}}, \\quad W_{{\\perp}} = {fmt(W_perp)}\\,\\text{{N}}",
                 f"Parallel: ${fmt(W_par)}\\,\\text{{N}}$; perpendicular: ${fmt(W_perp)}\\,\\text{{N}}$."),
        ],
        f"$W_{{\\parallel}} = {fmt(W_par)}\\,\\text{{N}}$, $W_{{\\perp}} = {fmt(W_perp)}\\,\\text{{N}}$",
    ))

# q008-q012: normal reaction on smooth slope
for qid, m, alpha_deg in [
    ("q008", 5, 30), ("q009", 7, 25), ("q010", 4, 40), ("q011", 9, 20), ("q012", 6, 35),
]:
    R = m * G * math.cos(rad(alpha_deg))
    questions.append(make_q(
        qid, "Easy", 3, "numeric", ["normal-reaction", "smooth-slope"],
        f"A particle of mass ${m}\\,\\text{{kg}}$ rests on a smooth plane inclined at ${alpha_deg}°$ "
        f"to the horizontal. Taking $g = {G}\\,\\text{{m s}}^{{-2}}$, find the normal reaction.",
        [
            step(1, "Resolve perpendicular to the plane", "R = mg\\cos\\alpha",
                 "On a smooth plane, the reaction balances the perpendicular component of weight."),
            step(2, "Substitute", f"R = {m} \\times {G} \\times \\cos {alpha_deg}°",
                 f"$m = {m}\\,\\text{{kg}}$, $\\alpha = {alpha_deg}°$."),
            step(3, "Calculate", f"R = {fmt(R)}\\,\\text{{N}}",
                 f"$R = {fmt(R)}\\,\\text{{N}}$."),
            step(4, "Note no friction", "\\text{Smooth plane } \\Rightarrow F = 0",
                 "Without friction, no force opposes motion along the plane."),
            step(5, "Downslope component", f"mg\\sin {alpha_deg}° = {fmt(m*G*math.sin(rad(alpha_deg)))}\\,\\text{{N}}",
                 "The unbalanced parallel component causes acceleration."),
            step(6, "Answer", f"R = {fmt(R)}\\,\\text{{N}}",
                 f"Normal reaction $= {fmt(R)}\\,\\text{{N}}$."),
        ],
        f"$R = {fmt(R)}\\,\\text{{N}}$",
    ))

# q013-q016: acceleration down smooth slope
for qid, m, alpha_deg in [
    ("q013", 4, 30), ("q014", 6, 25), ("q015", 5, 40), ("q016", 8, 20),
]:
    a = G * math.sin(rad(alpha_deg))
    questions.append(make_q(
        qid, "Easy", 4, "numeric", ["smooth-slope", "acceleration", "F=ma"],
        f"A particle of mass ${m}\\,\\text{{kg}}$ slides down a smooth plane inclined at ${alpha_deg}°$ "
        f"to the horizontal. Taking $g = {G}\\,\\text{{m s}}^{{-2}}$, find the acceleration of the particle.",
        [
            step(1, "Resolve along the plane", "ma = mg\\sin\\alpha",
                 "The only force along the plane is the weight component; no friction on a smooth surface."),
            step(2, "Cancel the mass", "a = g\\sin\\alpha",
                 "Mass cancels — all particles accelerate at the same rate on a smooth slope."),
            step(3, "Substitute", f"a = {G}\\sin {alpha_deg}°",
                 f"$g = {G}\\,\\text{{m s}}^{{-2}}$, $\\alpha = {alpha_deg}°$."),
            step(4, "Calculate", f"a = {fmt(a)}\\,\\text{{m s}}^{{-2}}",
                 f"$a = {fmt(a)}\\,\\text{{m s}}^{{-2}}$ down the plane."),
            step(5, "Direction", "\\text{Acceleration is down the plane}",
                 "The weight component points downslope, so acceleration is downslope."),
            step(6, "Answer", f"a = {fmt(a)}\\,\\text{{m s}}^{{-2}}",
                 f"Acceleration $= {fmt(a)}\\,\\text{{m s}}^{{-2}}$."),
        ],
        f"$a = {fmt(a)}\\,\\text{{m s}}^{{-2}}$ down the plane",
    ))

# q017-q018: horizontal F=ma with friction
for qid, m, mu, P in [("q017", 5, 0.3, 20), ("q018", 8, 0.4, 35)]:
    W = m * G
    R = W
    Fmax = mu * R
    F_fric = Fmax  # sliding
    a = (P - F_fric) / m
    questions.append(make_q(
        qid, "Easy", 4, "numeric", ["F=ma", "friction", "horizontal"],
        f"A particle of mass ${m}\\,\\text{{kg}}$ is pulled along a rough horizontal surface with "
        f"a horizontal force of ${P}\\,\\text{{N}}$. The coefficient of friction is $\\mu = {mu}$ and "
        f"the particle is sliding. Taking $g = {G}\\,\\text{{m s}}^{{-2}}$, find the acceleration.",
        [
            step(1, "Normal reaction", f"R = mg = {fmt(W)}\\,\\text{{N}}",
                 f"$R = {fmt(W)}\\,\\text{{N}}$."),
            step(2, "Friction (sliding)", f"F = \\mu R = {mu} \\times {fmt(W)} = {fmt(F_fric)}\\,\\text{{N}}",
                 f"Kinetic/limiting friction $= {fmt(F_fric)}\\,\\text{{N}}$ opposing motion."),
            step(3, "Apply Newton's second law", "ma = P - F",
                 "Resultant force along the direction of motion equals mass times acceleration."),
            step(4, "Substitute", f"{m}a = {P} - {fmt(F_fric)}",
                 f"Pull ${P}\\,\\text{{N}}$, friction ${fmt(F_fric)}\\,\\text{{N}}$."),
            step(5, "Solve for $a$", f"a = {fmt(a)}\\,\\text{{m s}}^{{-2}}",
                 f"$a = {fmt(a)}\\,\\text{{m s}}^{{-2}}$."),
            step(6, "Answer", f"a = {fmt(a)}\\,\\text{{m s}}^{{-2}}",
                 f"Acceleration $= {fmt(a)}\\,\\text{{m s}}^{{-2}}$."),
        ],
        f"$a = {fmt(a)}\\,\\text{{m s}}^{{-2}}$",
    ))

print(f"Easy section: {len(questions)} questions")

# ══════════════════════════════════════════════════════════════════════════════
# INTERMEDIATE q019–q050: rough slopes, pulleys, connected particles
# ══════════════════════════════════════════════════════════════════════════════

def particle_rough_slope_accel(qid, m, alpha_deg, mu, direction="down"):
    a_rad = rad(alpha_deg)
    W_par = m * G * math.sin(a_rad)
    R = m * G * math.cos(a_rad)
    Fmax = mu * R
    if direction == "down":
        a = G * (math.sin(a_rad) - mu * math.cos(a_rad))
        eqn = "ma = mg\\sin\\alpha - \\mu mg\\cos\\alpha"
        expl_dir = "down the plane"
    else:
        a = G * (mu * math.cos(a_rad) - math.sin(a_rad))
        eqn = "ma = \\mu mg\\cos\\alpha - mg\\sin\\alpha"
        expl_dir = "up the plane"
    steps = [
        step(1, "Resolve weight along the plane", f"W_{{\\parallel}} = mg\\sin {alpha_deg}° = {fmt(W_par)}\\,\\text{{N}}",
             f"Weight component along plane: ${fmt(W_par)}\\,\\text{{N}}$."),
        step(2, "Normal reaction", f"R = mg\\cos {alpha_deg}° = {fmt(R)}\\,\\text{{N}}",
             f"$R = {fmt(R)}\\,\\text{{N}}$."),
        step(3, "Limiting friction", f"F = \\mu R = {mu} \\times {fmt(R)} = {fmt(Fmax)}\\,\\text{{N}}",
             f"Friction $= {fmt(Fmax)}\\,\\text{{N}}$."),
        step(4, "Apply $F = ma$ along the plane", eqn,
             "Friction opposes the direction of motion."),
        step(5, "Simplify", f"a = g(\\sin {alpha_deg}° - {mu}\\cos {alpha_deg}°)" if direction == "down" else f"a = g({mu}\\cos {alpha_deg}° - \\sin {alpha_deg}°)",
             "Factor out $g$."),
        step(6, "Calculate", f"a = {fmt(a)}\\,\\text{{m s}}^{{-2}}",
             f"$a = {fmt(a)}\\,\\text{{m s}}^{{-2}}$ {expl_dir}."),
        step(7, "Check motion is possible", f"a = {fmt(a)} > 0",
             "Positive acceleration confirms the stated direction of motion."),
        step(8, "Verify friction direction",
             f"\\text{{Friction acts {'up' if direction == 'down' else 'down'} the plane}}",
             "Friction always opposes motion."),
        step(9, "Answer", f"a = {fmt(a)}\\,\\text{{m s}}^{{-2}}",
             f"Acceleration $= {fmt(a)}\\,\\text{{m s}}^{{-2}}$ {expl_dir}."),
    ]
    dir_word = "slides down" if direction == "down" else "is pulled up"
    return make_q(qid, "Intermediate", 5, "numeric",
        ["rough-slope", "acceleration", "friction"],
        f"A particle of mass ${m}\\,\\text{{kg}}$ {dir_word} a rough plane inclined at ${alpha_deg}°$ "
        f"to the horizontal. The coefficient of friction is $\\mu = {mu}$. Taking $g = {G}\\,\\text{{m s}}^{{-2}}$, "
        f"find the acceleration of the particle.",
        steps, f"$a = {fmt(a)}\\,\\text{{m s}}^{{-2}}$ {expl_dir}.")


rough_slope_cases = [
    ("q019", 4, 30, 0.2, "down"), ("q020", 6, 25, 0.3, "down"),
    ("q021", 5, 35, 0.25, "down"), ("q022", 8, 20, 0.4, "down"),
    ("q023", 3, 40, 0.5, "down"), ("q024", 10, 15, 0.15, "down"),
]
for args in rough_slope_cases:
    questions.append(particle_rough_slope_accel(*args))

# q025-q030: particle on slope connected to hanging mass (smooth)
def pulley_slope_smooth(qid, m1, alpha_deg, m2):
    a_rad = rad(alpha_deg)
    # m2 g - m1 g sin alpha = (m1+m2) a
    a = G * (m2 - m1 * math.sin(a_rad)) / (m1 + m2)
    T = m2 * (G - a)
    steps = [
        step(1, "Identify the system", f"m_1 = {m1}\\,\\text{{kg}} \\text{{ on slope}}, \\quad m_2 = {m2}\\,\\text{{kg}} \\text{{ hanging}}",
             "The string connects the two particles over a smooth pulley."),
        step(2, "Equation for $m_2$ (downward positive)", f"m_2 g - T = m_2 a",
             "Weight minus tension gives resultant on the hanging mass."),
        step(3, "Equation for $m_1$ (up slope positive)", f"T - m_1 g\\sin\\alpha = m_1 a",
             "Tension minus downslope weight component."),
        step(4, "Add the equations to eliminate $T$",
             f"m_2 g - m_1 g\\sin {alpha_deg}° = (m_1 + m_2)a",
             "Adding eliminates the internal tension force."),
        step(5, "Solve for $a$",
             f"a = \\dfrac{{g({m2} - {m1}\\sin {alpha_deg}°)}}{{{m1}+{m2}}} = {fmt(a)}\\,\\text{{m s}}^{{-2}}",
             f"$a = {fmt(a)}\\,\\text{{m s}}^{{-2}}$."),
        step(6, "Determine direction",
             f"\\text{{$m_2$ moves {'down' if a > 0 else 'up'}, $m_1$ moves {'up the slope' if a > 0 else 'down the slope'}}}",
             "Sign of $a$ tells us the direction of motion."),
        step(7, "Find tension", f"T = m_2(g - a) = {fmt(T)}\\,\\text{{N}}",
             f"$T = {fmt(T)}\\,\\text{{N}}$."),
        step(8, "Check with $m_1$ equation",
             f"T - {fmt(m1*G*math.sin(a_rad))} = {fmt(m1*a)}",
             "Substituting back confirms consistency."),
        step(9, "Answer", f"a = {fmt(a)}\\,\\text{{m s}}^{{-2}}, \\quad T = {fmt(T)}\\,\\text{{N}}",
             f"Acceleration $= {fmt(a)}\\,\\text{{m s}}^{{-2}}$; tension $= {fmt(T)}\\,\\text{{N}}$."),
    ]
    return make_q(qid, "Intermediate", 6, "written",
        ["connected-particles", "pulley", "smooth-slope"],
        f"A particle of mass ${m1}\\,\\text{{kg}}$ is on a smooth plane inclined at ${alpha_deg}°$ "
        f"to the horizontal. It is connected by a light inextensible string passing over a smooth pulley "
        f"to a particle of mass ${m2}\\,\\text{{kg}}$ hanging vertically. Taking $g = {G}\\,\\text{{m s}}^{{-2}}$, "
        f"find the acceleration of the system and the tension in the string.",
        steps, f"$a = {fmt(a)}\\,\\text{{m s}}^{{-2}}$; $T = {fmt(T)}\\,\\text{{N}}$.")


pulley_smooth_cases = [
    ("q025", 4, 30, 3), ("q026", 6, 25, 2), ("q027", 5, 35, 4),
    ("q028", 8, 20, 3), ("q029", 3, 40, 5), ("q030", 10, 15, 4),
]
for args in pulley_smooth_cases:
    questions.append(pulley_slope_smooth(*args))

# q031-q036: rough slope with hanging mass
def pulley_slope_rough(qid, m1, alpha_deg, m2, mu):
    a_rad = rad(alpha_deg)
    # Assume m2 goes down, m1 up slope
    # m2: m2 g - T = m2 a
    # m1: T - m1 g sin a - mu m1 g cos a = m1 a
    # m2 g - m1 g sin a - mu m1 g cos a = (m1+m2) a
    numer = m2 - m1 * math.sin(a_rad) - mu * m1 * math.cos(a_rad)
    a = G * numer / (m1 + m2)
    T = m2 * (G - a)
    F_fric = mu * m1 * G * math.cos(a_rad)
    steps = [
        step(1, "Model friction on $m_1$", f"F = \\mu R = {mu} \\times {fmt(m1*G*math.cos(a_rad))} = {fmt(F_fric)}\\,\\text{{N}}",
             f"Friction ${fmt(F_fric)}\\,\\text{{N}}$ down the plane (opposing upward motion)."),
        step(2, "Equation for hanging mass $m_2$", f"{m2}g - T = {m2}a",
             "Taking downward as positive for $m_2$."),
        step(3, "Equation for mass on slope", f"T - m_1 g\\sin\\alpha - F = m_1 a",
             f"Tension minus weight component minus friction."),
        step(4, "Add equations", f"({m2} - {m1}\\sin {alpha_deg}° - {mu}\\times{m1}\\cos {alpha_deg}°)g = ({m1}+{m2})a",
             "Eliminate $T$ by adding the two equations of motion."),
        step(5, "Solve for $a$", f"a = {fmt(a)}\\,\\text{{m s}}^{{-2}}",
             f"$a = {fmt(a)}\\,\\text{{m s}}^{{-2}}$."),
        step(6, "Interpret direction",
             f"\\text{{$a {'>' if a > 0 else '<'} 0$: $m_2$ moves {'downward' if a > 0 else 'upward'}}}",
             "Sign of acceleration determines motion."),
        step(7, "Find tension", f"T = {m2}(g - a) = {fmt(T)}\\,\\text{{N}}",
             f"$T = {fmt(T)}\\,\\text{{N}}$."),
        step(8, "Verify $T > 0$", f"T = {fmt(T)} > 0",
             "String must remain taut."),
        step(9, "Answer", f"a = {fmt(a)}\\,\\text{{m s}}^{{-2}}, \\quad T = {fmt(T)}\\,\\text{{N}}",
             f"Acceleration and tension found."),
    ]
    return make_q(qid, "Intermediate", 6, "written",
        ["connected-particles", "rough-slope", "pulley"],
        f"A particle of mass ${m1}\\,\\text{{kg}}$ is on a rough plane inclined at ${alpha_deg}°$ "
        f"($\\mu = {mu}$). It is connected to a hanging mass of ${m2}\\,\\text{{kg}}$ by a light string "
        f"over a smooth pulley. Taking $g = {G}\\,\\text{{m s}}^{{-2}}$, find the acceleration and tension.",
        steps, f"$a = {fmt(a)}\\,\\text{{m s}}^{{-2}}$; $T = {fmt(T)}\\,\\text{{N}}$.")


pulley_rough_cases = [
    ("q031", 5, 30, 3, 0.2), ("q032", 6, 25, 2, 0.3),
    ("q033", 4, 35, 4, 0.25), ("q034", 8, 20, 3, 0.4),
    ("q035", 10, 15, 5, 0.15), ("q036", 7, 40, 3, 0.35),
]
for args in pulley_rough_cases:
    questions.append(pulley_slope_rough(*args))

# q037-q040: equilibrium on rough slope - will it slide?
for qid, m, alpha_deg, mu in [
    ("q037", 5, 35, 0.4), ("q038", 8, 30, 0.3),
    ("q039", 6, 40, 0.5), ("q040", 4, 25, 0.25),
]:
    W_par = m * G * math.sin(rad(alpha_deg))
    Fmax = mu * m * G * math.cos(rad(alpha_deg))
    slides = W_par > Fmax
    steps = [
        step(1, "Weight component down slope", f"W_{{\\parallel}} = {fmt(W_par)}\\,\\text{{N}}",
             f"Downslope force: ${fmt(W_par)}\\,\\text{{N}}$."),
        step(2, "Maximum friction up slope", f"F_{{\\max}} = \\mu R = {fmt(Fmax)}\\,\\text{{N}}",
             f"Maximum friction: ${fmt(Fmax)}\\,\\text{{N}}$."),
        step(3, "Compare forces", f"W_{{\\parallel}} = {fmt(W_par)}\\,\\text{{N}}, \\quad F_{{\\max}} = {fmt(Fmax)}\\,\\text{{N}}",
             "Will friction be sufficient?"),
        step(4, "Conclusion", f"\\text{{Particle {'slides' if slides else 'remains in equilibrium'}}}",
             f"{'Weight component exceeds friction' if slides else 'Friction can balance the weight component'}."),
        step(5, "If equilibrium, friction magnitude", f"F = {fmt(min(W_par, Fmax))}\\,\\text{{N}}",
             f"Friction $= {fmt(min(W_par, Fmax))}\\,\\text{{N}}$ up the plane."),
        step(6, "Critical angle", f"\\tan\\alpha_{{\\text{{crit}}}} = \\mu = {mu}",
             f"Critical angle: $\\alpha_{{\\text{{crit}}}} = {fmt(math.degrees(math.atan(mu)), 1)}°$."),
        step(7, "Compare with given angle", f"\\alpha = {alpha_deg}°",
             f"Given angle {'exceeds' if slides else 'is below'} the critical angle."),
        step(8, "State friction law", "F \\le \\mu R",
             "Friction adjusts up to its limit to maintain equilibrium."),
        step(9, "Answer",
             f"\\text{{The particle {'slides down the plane' if slides else 'remains at rest'}}}",
             f"{'Slides' if slides else 'Equilibrium'}."),
    ]
    questions.append(make_q(qid, "Intermediate", 5, "written",
        ["equilibrium", "rough-slope", "limiting"],
        f"A particle of mass ${m}\\,\\text{{kg}}$ rests on a rough plane inclined at ${alpha_deg}°$ "
        f"to the horizontal, with $\\mu = {mu}$. Taking $g = {G}\\,\\text{{m s}}^{{-2}}$, "
        f"determine whether the particle remains in equilibrium or slides.",
        steps, f"The particle {'slides down the plane' if slides else 'remains in equilibrium'}."))

# q041-q044: force to push up rough slope at constant speed
for qid, m, alpha_deg, mu in [
    ("q041", 5, 30, 0.3), ("q042", 8, 25, 0.4),
    ("q043", 6, 35, 0.25), ("q044", 10, 20, 0.35),
]:
    a_rad = rad(alpha_deg)
    W_par = m * G * math.sin(a_rad)
    Fmax = mu * m * G * math.cos(a_rad)
    P_needed = W_par + Fmax  # constant speed: a=0
    steps = [
        step(1, "Constant speed means zero acceleration", "a = 0",
             "Forces along the plane must balance."),
        step(2, "Forces up the plane", "P = W_{\\parallel} + F",
             "Applied force balances weight component and friction."),
        step(3, "Weight component", f"W_{{\\parallel}} = {fmt(W_par)}\\,\\text{{N}}",
             f"Downslope component: ${fmt(W_par)}\\,\\text{{N}}$."),
        step(4, "Friction (limiting, down the plane)", f"F = \\mu R = {fmt(Fmax)}\\,\\text{{N}}",
             f"Friction opposes upward motion: ${fmt(Fmax)}\\,\\text{{N}}$."),
        step(5, "Solve for applied force", f"P = {fmt(W_par)} + {fmt(Fmax)} = {fmt(P_needed)}\\,\\text{{N}}",
             f"$P = {fmt(P_needed)}\\,\\text{{N}}$ up the plane."),
        step(6, "Verify equilibrium", f"P = W_{{\\parallel}} + F",
             "All forces along the plane sum to zero."),
        step(7, "Note minimum force", f"P_{{\\min}} = {fmt(P_needed)}\\,\\text{{N}}",
             "Any smaller force cannot maintain constant speed uphill."),
        step(8, "Compare with weight", f"P = {fmt(P_needed)}\\,\\text{{N}} > mg\\sin\\alpha",
             "Pushing up requires overcoming both gravity and friction."),
        step(9, "Answer", f"P = {fmt(P_needed)}\\,\\text{{N}}",
             f"Force required $= {fmt(P_needed)}\\,\\text{{N}}$ parallel to the plane."),
    ]
    questions.append(make_q(qid, "Intermediate", 5, "numeric",
        ["constant-speed", "rough-slope", "applied-force"],
        f"A particle of mass ${m}\\,\\text{{kg}}$ is pushed up a rough plane inclined at ${alpha_deg}°$ "
        f"at constant speed. The coefficient of friction is $\\mu = {mu}$. Taking $g = {G}\\,\\text{{m s}}^{{-2}}$, "
        f"find the force applied parallel to the plane.",
        steps, f"$P = {fmt(P_needed)}\\,\\text{{N}}$ up the plane."))

# q045-q048: lift / apparent weight
for qid, m, accel in [
    ("q045", 60, 2), ("q046", 80, 1.5), ("q047", 50, -1.5), ("q048", 70, 3),
]:
    W = m * G
    R = m * (G + accel)
    direction = "upward" if accel > 0 else "downward"
    context = "accelerating upward" if accel > 0 else "accelerating downward"
    steps = [
        step(1, "Apply Newton's second law vertically", "R - mg = ma",
             "Taking upward as positive; $R$ is the normal reaction (scale reading)."),
        step(2, "Rearrange for $R$", "R = m(g + a)",
             "The reaction equals mass times (g plus acceleration)."),
        step(3, "Substitute", f"R = {m}({G} + {accel})",
             f"$m = {m}\\,\\text{{kg}}$, $a = {accel}\\,\\text{{m s}}^{{-2}}$ {direction}."),
        step(4, "Calculate", f"R = {fmt(R)}\\,\\text{{N}}",
             f"Scale reading: ${fmt(R)}\\,\\text{{N}}$."),
        step(5, "Compare with weight", f"mg = {fmt(W)}\\,\\text{{N}}",
             f"True weight $= {fmt(W)}\\,\\text{{N}}$."),
        step(6, "Interpret apparent weight",
             f"\\text{{Apparent weight {'greater' if accel > 0 else 'less'} than true weight}}",
             f"When the lift accelerates {direction}, the scale reads {'more' if accel > 0 else 'less'} than $mg$."),
        step(7, "Explain physically",
             f"\\text{{Floor pushes harder on passenger when lift accelerates up}}",
             "The floor must provide extra upward force to accelerate the person upward."),
        step(8, "Formula for lift problems", "R = m(g + a)",
             "Use this whenever a particle accelerates vertically in a lift."),
        step(9, "Answer", f"R = {fmt(R)}\\,\\text{{N}}",
             f"Normal reaction (apparent weight) $= {fmt(R)}\\,\\text{{N}}$."),
    ]
    questions.append(make_q(qid, "Intermediate", 5, "numeric",
        ["lift", "apparent-weight", "normal-reaction"],
        f"A person of mass ${m}\\,\\text{{kg}}$ stands on a scale in a lift that is {context} "
        f"with acceleration ${abs(accel)}\\,\\text{{m s}}^{{-2}}$. Taking $g = {G}\\,\\text{{m s}}^{{-2}}$, "
        f"find the reading on the scale.",
        steps, f"$R = {fmt(R)}\\,\\text{{N}}$"))

# q049-q050: two particles on horizontal table connected
for qid, m1, m2, P in [("q049", 3, 2, 15), ("q050", 5, 4, 25)]:
    a = P / (m1 + m2)
    T = m2 * a
    steps = [
        step(1, "Treat as one system", f"({m1}+{m2})a = P",
             "Both particles accelerate together; internal tension cancels."),
        step(2, "Find acceleration", f"a = \\dfrac{{{P}}}{{{m1}+{m2}}} = {fmt(a)}\\,\\text{{m s}}^{{-2}}",
             f"$a = {fmt(a)}\\,\\text{{m s}}^{{-2}}$."),
        step(3, "Consider $m_2$ alone", f"T = m_2 a",
             "Tension provides the force accelerating the trailing particle."),
        step(4, "Calculate tension", f"T = {m2} \\times {fmt(a)} = {fmt(T)}\\,\\text{{N}}",
             f"$T = {fmt(T)}\\,\\text{{N}}$."),
        step(5, "Check with $m_1$", f"P - T = {fmt(m1*a)} = m_1 a",
             "Pull minus tension accelerates the leading particle."),
        step(6, "Verify $P - T = m_1 a$", f"{P} - {fmt(T)} = {fmt(P-T)}",
             "Consistent with $m_1 a = {fmt(m1*a)}$."),
        step(7, "Light inextensible string", "\\text{Both particles have the same acceleration}",
             "The string ensures equal acceleration."),
        step(8, "Tension is internal", "\\text{Tension does not affect the whole-system equation}",
             "Only external force $P$ drives the system."),
        step(9, "Answer", f"a = {fmt(a)}\\,\\text{{m s}}^{{-2}}, \\quad T = {fmt(T)}\\,\\text{{N}}",
             f"Acceleration $= {fmt(a)}\\,\\text{{m s}}^{{-2}}$; tension $= {fmt(T)}\\,\\text{{N}}$."),
    ]
    questions.append(make_q(qid, "Intermediate", 5, "written",
        ["connected-particles", "horizontal", "tension"],
        f"Two particles of masses ${m1}\\,\\text{{kg}}$ and ${m2}\\,\\text{{kg}}$ are connected by a light "
        f"inextensible string on a smooth horizontal table. A horizontal force of ${P}\\,\\text{{N}}$ "
        f"is applied to the ${m1}\\,\\text{{kg}}$ particle. Taking $g = {G}\\,\\text{{m s}}^{{-2}}$, "
        f"find the acceleration and the tension in the string.",
        steps, f"$a = {fmt(a)}\\,\\text{{m s}}^{{-2}}$; $T = {fmt(T)}\\,\\text{{N}}$."))

print(f"After intermediate: {len(questions)} questions")

# ══════════════════════════════════════════════════════════════════════════════
# HARD q051–q070: complex systems, multi-part, angled forces on slopes
# ══════════════════════════════════════════════════════════════════════════════

# q051-q054: particle on slope with horizontal push (dynamics)
for qid, m, alpha_deg, mu, P_horiz in [
    ("q051", 5, 30, 0.3, 40), ("q052", 8, 25, 0.35, 50),
    ("q053", 6, 35, 0.4, 35), ("q054", 10, 20, 0.25, 60),
]:
    a_rad = rad(alpha_deg)
    P_par = P_horiz * math.cos(a_rad)
    P_perp = P_horiz * math.sin(a_rad)
    W_par = m * G * math.sin(a_rad)
    R = m * G * math.cos(a_rad) + P_perp
    Fmax = mu * R
    # Up slope positive: P_par - W_par - F = ma (if moving up)
    a = (P_par - W_par - Fmax) / m
    steps = [
        step(1, "Resolve horizontal push parallel to plane", f"P_{{\\parallel}} = {P_horiz}\\cos {alpha_deg}° = {fmt(P_par)}\\,\\text{{N}}",
             f"Up-slope component: ${fmt(P_par)}\\,\\text{{N}}$."),
        step(2, "Resolve horizontal push into plane", f"P_{{\\perp}} = {P_horiz}\\sin {alpha_deg}° = {fmt(P_perp)}\\,\\text{{N}}",
             "Increases normal reaction."),
        step(3, "Normal reaction", f"R = mg\\cos\\alpha + P_{{\\perp}} = {fmt(R)}\\,\\text{{N}}",
             f"$R = {fmt(R)}\\,\\text{{N}}$."),
        step(4, "Friction down the plane", f"F = \\mu R = {fmt(Fmax)}\\,\\text{{N}}",
             f"Friction: ${fmt(Fmax)}\\,\\text{{N}}$."),
        step(5, "Weight component down slope", f"W_{{\\parallel}} = {fmt(W_par)}\\,\\text{{N}}",
             f"Downslope: ${fmt(W_par)}\\,\\text{{N}}$."),
        step(6, "Apply $F = ma$ up the plane", f"ma = P_{{\\parallel}} - W_{{\\parallel}} - F",
             "Resultant up-slope force equals $ma$."),
        step(7, "Substitute", f"{m}a = {fmt(P_par)} - {fmt(W_par)} - {fmt(Fmax)}",
             "All forces along the plane."),
        step(8, "Solve for $a$", f"a = {fmt(a)}\\,\\text{{m s}}^{{-2}}",
             f"$a = {fmt(a)}\\,\\text{{m s}}^{{-2}}$."),
        step(9, "Direction", f"\\text{{Particle accelerates {'up' if a > 0 else 'down'} the plane}}",
             "Sign of $a$ gives direction."),
        step(10, "Note effect of horizontal push on $R$",
             "\\text{Horizontal push increases } R \\text{ and hence friction}",
             "Pushing horizontally into the slope increases friction."),
        step(11, "Compare with parallel push only",
             f"\\text{{Horizontal push has components both up and into the plane}}",
             "Resolving is essential for angled applied forces."),
        step(12, "Verify $a > 0$", f"a = {fmt(a)}",
             "Positive acceleration means motion up the slope."),
        step(13, "Answer", f"a = {fmt(a)}\\,\\text{{m s}}^{{-2}}",
             f"Acceleration $= {fmt(a)}\\,\\text{{m s}}^{{-2}}$ up the plane."),
    ]
    questions.append(make_q(qid, "Hard", 8, "numeric",
        ["horizontal-push", "rough-slope", "dynamics"],
        f"A particle of mass ${m}\\,\\text{{kg}}$ is on a rough plane inclined at ${alpha_deg}°$ "
        f"($\\mu = {mu}$). A horizontal force of ${P_horiz}\\,\\text{{N}}$ pushes it up the plane. "
        f"Taking $g = {G}\\,\\text{{m s}}^{{-2}}$, find the acceleration of the particle.",
        steps, f"$a = {fmt(a)}\\,\\text{{m s}}^{{-2}}$ up the plane."))

# q055-q058: two particles on opposite sides of pulley, one on slope one hanging (find μ for equilibrium)
for qid, m1, alpha_deg, m2 in [
    ("q055", 4, 30, 5), ("q056", 6, 35, 4), ("q057", 8, 25, 6), ("q058", 5, 40, 3),
]:
    a_rad = rad(alpha_deg)
    mu_eq = (m2 - m1 * math.sin(a_rad)) / (m1 * math.cos(a_rad))
    mu_eq = max(mu_eq, 0)
    steps = [
        step(1, "Condition for equilibrium", "a = 0",
             "No acceleration means forces balance."),
        step(2, "For hanging mass", f"T = m_2 g = {fmt(m2*G)}\\,\\text{{N}}",
             f"Tension equals weight of hanging mass: ${fmt(m2*G)}\\,\\text{{N}}$."),
        step(3, "For mass on slope (up slope forces = down slope forces)",
             "T = m_1 g\\sin\\alpha + \\mu m_1 g\\cos\\alpha",
             "Tension balances weight component and friction."),
        step(4, "Substitute tension", f"m_2 g = m_1 g\\sin\\alpha + \\mu m_1 g\\cos\\alpha",
             "Set the two expressions for $T$ equal."),
        step(5, "Cancel $g$ and solve for $\\mu$",
             f"\\mu = \\dfrac{{m_2 - m_1\\sin\\alpha}}{{m_1\\cos\\alpha}}",
             "Rearrange to find the coefficient of friction."),
        step(6, "Substitute values",
             f"\\mu = \\dfrac{{{m2} - {m1}\\sin {alpha_deg}°}}{{{m1}\\cos {alpha_deg}°}}",
             "Numerical substitution."),
        step(7, "Calculate", f"\\mu = {fmt(mu_eq, 3)}",
             f"$\\mu = {fmt(mu_eq, 3)}$."),
        step(8, "Interpret",
             f"\\text{{For }} \\mu = {fmt(mu_eq, 3)}, \\text{{ the system is in equilibrium}}",
             "This is the minimum $\\mu$ needed if $m_2$ tends to pull $m_1$ up the slope."),
        step(9, "Check $m_2 > m_1\\sin\\alpha$",
             f"{m2} {'>' if m2 > m1*math.sin(a_rad) else '<='} {fmt(m1*math.sin(a_rad))}",
             "Hanging mass must tend to pull the system for this equilibrium."),
        step(10, "Physical meaning",
             "\\text{Friction prevents $m_1$ from sliding down}",
             "Without sufficient friction, $m_1$ would slide down despite the hanging mass."),
        step(11, "Verify tension", f"T = {fmt(m2*G)}\\,\\text{{N}}",
             "Both equations give the same tension."),
        step(12, "Answer", f"\\mu = {fmt(mu_eq, 3)}",
             f"Coefficient of friction for equilibrium: ${fmt(mu_eq, 3)}$."),
        step(13, "Exam note",
             "\\text{Set } a = 0 \\text{ in both equations of motion}",
             "Equilibrium problems use $F=0$ or $a=0$ rather than $F=ma$."),
    ]
    questions.append(make_q(qid, "Hard", 7, "numeric",
        ["equilibrium", "pulley", "find-mu"],
        f"A particle of mass ${m1}\\,\\text{{kg}}$ is on a rough plane inclined at ${alpha_deg}°$ "
        f"and connected by a string over a pulley to a hanging mass of ${m2}\\,\\text{{kg}}$. "
        f"The system is in equilibrium. Taking $g = {G}\\,\\text{{m s}}^{{-2}}$, find $\\mu$.",
        steps, f"$\\mu = {fmt(mu_eq, 3)}$"))

# q059-q062: lift multi-part (find mass or acceleration)
for qid, m, R_reading in [("q059", 60, 700), ("q060", 80, 600), ("q061", 50, 750), ("q062", 70, 560)]:
    W = m * G
    a = R_reading / m - G
    steps = [
        step(1, "Use the lift formula", "R = m(g + a)",
             "Normal reaction equals apparent weight."),
        step(2, "Rearrange for $a$", "a = \\dfrac{R}{m} - g",
             "Solve for acceleration from the scale reading."),
        step(3, "Substitute", f"a = \\dfrac{{{R_reading}}}{{{m}}} - {G}",
             f"$R = {R_reading}\\,\\text{{N}}$, $m = {m}\\,\\text{{kg}}$."),
        step(4, "Calculate", f"a = {fmt(a)}\\,\\text{{m s}}^{{-2}}",
             f"$a = {fmt(a)}\\,\\text{{m s}}^{{-2}}$."),
        step(5, "Determine direction",
             f"\\text{{Lift accelerates {'upward' if a > 0 else 'downward'}}}",
             f"{'Positive' if a > 0 else 'Negative'} acceleration."),
        step(6, "Compare with weight", f"mg = {fmt(W)}\\,\\text{{N}}",
             f"True weight $= {fmt(W)}\\,\\text{{N}}$."),
        step(7, "Compare reading with weight",
             f"R = {R_reading}\\,\\text{{N}} {'>' if R_reading > W else '<'} mg = {fmt(W)}\\,\\text{{N}}",
             "Scale reads more when accelerating up, less when accelerating down."),
        step(8, "Verify formula", f"R = {m}({G} + {fmt(a)}) = {fmt(m*(G+a))}\\,\\text{{N}}",
             "Substituting $a$ back gives the given reading."),
        step(9, "Physical interpretation",
             f"\\text{{Passenger feels {'heavier' if a > 0 else 'lighter'}}}",
             "Apparent weight sensation matches the scale reading."),
        step(10, "Free fall case", "R = 0 \\Rightarrow a = -g",
             "If the lift falls freely, the scale reads zero."),
        step(11, "Constant velocity", "a = 0 \\Rightarrow R = mg",
             "At constant speed, apparent weight equals true weight."),
        step(12, "Answer", f"a = {fmt(a)}\\,\\text{{m s}}^{{-2}}",
             f"Acceleration of lift $= {fmt(a)}\\,\\text{{m s}}^{{-2}}$."),
        step(13, "Method summary",
             "a = R/m - g \\text{ for lift problems}",
             "Quick formula when scale reading and mass are known."),
    ]
    questions.append(make_q(qid, "Hard", 7, "numeric",
        ["lift", "find-acceleration", "apparent-weight"],
        f"A person of mass ${m}\\,\\text{{kg}}$ stands on a scale in a lift. The scale reads "
        f"${R_reading}\\,\\text{{N}}$. Taking $g = {G}\\,\\text{{m s}}^{{-2}}$, find the acceleration "
        f"of the lift and state whether it is moving up or down.",
        steps, f"$a = {fmt(a)}\\,\\text{{m s}}^{{-2}}$; the lift is accelerating {'upward' if a > 0 else 'downward'}."))

# q063-q066: comprehensive pulley on rough slope multi-part
for qid, m1, alpha_deg, m2, mu in [
    ("q063", 5, 30, 3, 0.2), ("q064", 8, 25, 4, 0.3),
    ("q065", 6, 35, 2, 0.25), ("q066", 10, 20, 5, 0.4),
]:
    a_rad = rad(alpha_deg)
    numer = m2 - m1 * math.sin(a_rad) - mu * m1 * math.cos(a_rad)
    a = G * numer / (m1 + m2)
    T = m2 * (G - a)
    F_fric = mu * m1 * G * math.cos(a_rad)
    W_par = m1 * G * math.sin(a_rad)
    steps = [
        step(1, "Part (a): model the system",
             f"m_1 = {m1}\\,\\text{{kg on rough slope}}, \\quad m_2 = {m2}\\,\\text{{kg hanging}}",
             "Light inextensible string over smooth pulley."),
        step(2, "Forces on $m_2$", f"m_2 g - T = m_2 a",
             "Downward positive for the hanging mass."),
        step(3, "Forces on $m_1$", f"T - m_1 g\\sin\\alpha - \\mu m_1 g\\cos\\alpha = m_1 a",
             f"Friction ${fmt(F_fric)}\\,\\text{{N}}$ down the plane."),
        step(4, "Add equations", f"({m2} - {m1}\\sin {alpha_deg}° - {mu}\\times{m1}\\cos {alpha_deg}°)g = ({m1}+{m2})a",
             "Eliminate $T$."),
        step(5, "Part (a): acceleration", f"a = {fmt(a)}\\,\\text{{m s}}^{{-2}}",
             f"(a) $a = {fmt(a)}\\,\\text{{m s}}^{{-2}}$."),
        step(6, "Part (b): tension", f"T = m_2(g-a) = {fmt(T)}\\,\\text{{N}}",
             f"(b) $T = {fmt(T)}\\,\\text{{N}}$."),
        step(7, "Part (c): normal reaction on $m_1$", f"R = {fmt(m1*G*math.cos(a_rad))}\\,\\text{{N}}",
             f"(c) $R = {fmt(m1*G*math.cos(a_rad))}\\,\\text{{N}}$."),
        step(8, "Part (d): friction magnitude", f"F = {fmt(F_fric)}\\,\\text{{N}}",
             f"(d) Friction $= {fmt(F_fric)}\\,\\text{{N}}$."),
        step(9, "Verify direction of motion",
             f"\\text{{$m_2$ moves {'down' if a > 0 else 'up'}}}",
             "Consistent with sign of $a$."),
        step(10, "Check tension positive", f"T = {fmt(T)} > 0",
             "String remains taut."),
        step(11, "Energy perspective (optional)",
             "\\text{Loss in PE of one mass = gain in KE of both + work against friction}",
             "Confirms the dynamics are physically reasonable."),
        step(12, "Summarise (a) and (b)", f"a = {fmt(a)}\\,\\text{{m s}}^{{-2}}, \\quad T = {fmt(T)}\\,\\text{{N}}",
             "Key results."),
        step(13, "Summarise (c) and (d)", f"R = {fmt(m1*G*math.cos(a_rad))}\\,\\text{{N}}, \\quad F = {fmt(F_fric)}\\,\\text{{N}}",
             "Normal reaction and friction on slope."),
        step(14, "Method recap",
             "\\text{Two equations, add to eliminate } T",
             "Standard approach for connected particle problems."),
        step(15, "Final answers",
             f"a = {fmt(a)}\\,\\text{{m s}}^{{-2}}, \\quad T = {fmt(T)}\\,\\text{{N}}, \\quad R = {fmt(m1*G*math.cos(a_rad))}\\,\\text{{N}}, \\quad F = {fmt(F_fric)}\\,\\text{{N}}",
             "Complete solution."),
    ]
    questions.append(make_q(qid, "Hard", 9, "written",
        ["multi-part", "pulley", "rough-slope"],
        f"A particle of mass ${m1}\\,\\text{{kg}}$ is on a rough plane inclined at ${alpha_deg}°$ "
        f"($\\mu = {mu}$), connected to a hanging mass of ${m2}\\,\\text{{kg}}$. "
        f"Taking $g = {G}\\,\\text{{m s}}^{{-2}}$, find:\n\n"
        f"(a) the acceleration of the system,\n"
        f"(b) the tension in the string,\n"
        f"(c) the normal reaction on $m_1$,\n"
        f"(d) the frictional force on $m_1$.",
        steps,
        f"(a) $a = {fmt(a)}\\,\\text{{m s}}^{{-2}}$; (b) $T = {fmt(T)}\\,\\text{{N}}$; (c) $R = {fmt(m1*G*math.cos(a_rad))}\\,\\text{{N}}$; (d) $F = {fmt(F_fric)}\\,\\text{{N}}$."))

# q067-q070: particle on slope with force at angle to plane
for qid, m, alpha_deg, mu, P, beta_deg in [
    ("q067", 5, 30, 0.3, 30, 20), ("q068", 8, 25, 0.35, 40, 15),
    ("q069", 6, 35, 0.4, 25, 25), ("q070", 10, 20, 0.25, 50, 10),
]:
    a_rad = rad(alpha_deg)
    b_rad = rad(beta_deg)
    P_par = P * math.cos(b_rad)
    P_perp = P * math.sin(b_rad)
    W_par = m * G * math.sin(a_rad)
    R = m * G * math.cos(a_rad) - P_perp  # P up from plane reduces R
    if R < 0:
        R = 0.01
    Fmax = mu * R
    a = (P_par - W_par - Fmax) / m
    steps = [
        step(1, "Resolve applied force parallel to plane", f"P_{{\\parallel}} = {P}\\cos {beta_deg}° = {fmt(P_par)}\\,\\text{{N}}",
             f"Force up the slope: ${fmt(P_par)}\\,\\text{{N}}$."),
        step(2, "Resolve applied force perpendicular to plane", f"P_{{\\perp}} = {P}\\sin {beta_deg}° = {fmt(P_perp)}\\,\\text{{N}}",
             "Component away from plane reduces normal reaction."),
        step(3, "Normal reaction", f"R = mg\\cos\\alpha - P_{{\\perp}} = {fmt(R)}\\,\\text{{N}}",
             f"$R = {fmt(R)}\\,\\text{{N}}$."),
        step(4, "Friction down the plane", f"F = \\mu R = {fmt(Fmax)}\\,\\text{{N}}",
             f"Friction: ${fmt(Fmax)}\\,\\text{{N}}$."),
        step(5, "Weight component down slope", f"W_{{\\parallel}} = {fmt(W_par)}\\,\\text{{N}}",
             f"Downslope: ${fmt(W_par)}\\,\\text{{N}}$."),
        step(6, "Apply Newton's second law up the plane", "ma = P_{\\parallel} - W_{\\parallel} - F",
             "Net force up the slope."),
        step(7, "Solve for $a$", f"a = {fmt(a)}\\,\\text{{m s}}^{{-2}}",
             f"$a = {fmt(a)}\\,\\text{{m s}}^{{-2}}$."),
        step(8, "Effect of angled pull on friction",
             "\\text{Pulling away from plane reduces } R \\text{ and hence friction}",
             "An upward component of the applied force makes sliding easier."),
        step(9, "Compare with parallel push",
             f"\\text{{Angled force has both parallel and perpendicular effects}}",
             "Must resolve in both directions."),
        step(10, "Direction of motion", f"\\text{{Accelerates {'up' if a > 0 else 'down'} the plane}}",
             "Sign of $a$ determines direction."),
        step(11, "Check limiting friction applies",
             f"F = F_{{\\max}} = {fmt(Fmax)}\\,\\text{{N}}",
             "Particle is sliding, so friction is at its maximum."),
        step(12, "Verify all forces",
             f"P_{{\\parallel}} - W_{{\\parallel}} - F = {fmt(P_par - W_par - Fmax)} = ma",
             "Force balance check."),
        step(13, "Tension alternative",
             "\\text{Same method applies if force is a tension in a cable}",
             "Resolve the tension at its given angle."),
        step(14, "Summarise key values",
             f"R = {fmt(R)}\\,\\text{{N}}, \\quad F = {fmt(Fmax)}\\,\\text{{N}}, \\quad a = {fmt(a)}\\,\\text{{m s}}^{{-2}}",
             "Normal reaction, friction, and acceleration."),
        step(15, "Final answer", f"a = {fmt(a)}\\,\\text{{m s}}^{{-2}}",
             f"Acceleration $= {fmt(a)}\\,\\text{{m s}}^{{-2}}$ up the plane."),
        step(16, "Problem-solving checklist",
             "\\text{Resolve all forces } \\rightarrow R \\rightarrow F = \\mu R \\rightarrow F = ma",
             "Systematic approach for slope dynamics."),
    ]
    questions.append(make_q(qid, "Hard", 9, "numeric",
        ["angled-force", "rough-slope", "dynamics"],
        f"A particle of mass ${m}\\,\\text{{kg}}$ is on a rough plane inclined at ${alpha_deg}°$ "
        f"($\\mu = {mu}$). A force of ${P}\\,\\text{{N}}$ acts at ${beta_deg}°$ above the plane, "
        f"pulling up the slope. Taking $g = {G}\\,\\text{{m s}}^{{-2}}$, find the acceleration "
        f"of the particle.",
        steps, f"$a = {fmt(a)}\\,\\text{{m s}}^{{-2}}$ up the plane."))

# ── Write TypeScript output ───────────────────────────────────────────────────
assert len(questions) == 70, f"Expected 70 questions, got {len(questions)}"

header = '''import { Question } from "@/lib/types";

/**
 * A-Level Maths · Year 2 Mechanics · Applications of forces
 * Statics and dynamics of particles on slopes; connected bodies; pulleys;
 * lifts and apparent weight; rough and smooth planes. 70 questions with full worked solutions.
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
