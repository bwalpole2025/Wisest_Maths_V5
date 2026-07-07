#!/usr/bin/env python3
"""Generate all 70 questions for Forces and friction subtopic (Year 2 Mechanics)."""
import json
import math

OUT = "/Users/benjaminwalpole/Wisest_Maths_V5/wisest-maths-content/src/data/questions/a-level-maths/year-2-mech/forces-and-friction.ts"
G = 9.8


def step(n, desc, work, expl, diagram=None):
    return {"stepNumber": n, "description": desc, "workingLatex": work, "explanation": expl, "diagram": diagram}


def make_q(suffix, difficulty, marks, answer_type, tags, text, steps, final, diagram=None):
    return {
        "id": f"al.y2.mech.forces-friction.{suffix}",
        "level": "A-Level Maths",
        "topic": "Year 2 Mechanics",
        "subtopic": "Forces and friction",
        "subtopicId": "al.y2.mech.forces-friction",
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


def deg(rad):
    return math.degrees(rad)


def rad(d):
    return math.radians(d)


questions = []

# ══════════════════════════════════════════════════════════════════════════════
# EASY q001–q018: F = μR, F ≤ μR, basic concepts, horizontal surfaces
# ══════════════════════════════════════════════════════════════════════════════

# q001 conceptual
questions.append(make_q(
    "q001", "Easy", 3, "written", ["friction", "definition", "limiting"],
    "State the law of friction for a particle on a rough horizontal surface, and explain what is meant by limiting friction.",
    [
        step(1, "State the friction inequality", "F \\le \\mu R",
             "The frictional force $F$ acting on a particle can never exceed $\\mu R$, where $\\mu$ is the coefficient of friction and $R$ is the normal reaction."),
        step(2, "Define the coefficient of friction", "\\mu = \\dfrac{F_{\\max}}{R}",
             "$\\mu$ is a dimensionless constant that depends on the materials in contact."),
        step(3, "Explain limiting friction", "F = \\mu R \\quad \\text{(limiting case)}",
             "When the particle is on the point of sliding, friction reaches its maximum possible value $F_{\\max} = \\mu R$."),
        step(4, "Describe static friction", "0 \\le F \\le \\mu R",
             "Before sliding begins, friction adjusts to match the applied force up to the limit $\\mu R$."),
        step(5, "State the direction rule", "\\text{Friction opposes the tendency to slide}",
             "Friction always acts parallel to the surface and points opposite to the direction in which the particle would move."),
        step(6, "Summarise", "F \\le \\mu R; \\text{ limiting friction } = \\mu R",
             "The law of friction bounds the frictional force; at limiting equilibrium it equals $\\mu R$."),
    ],
    "Friction satisfies $F \\le \\mu R$, where $R$ is the normal reaction. Limiting friction is the maximum value $F_{\\max} = \\mu R$, reached when the particle is about to slide.",
))

# q002: find max friction
mu, R = 0.4, 50
Fmax = mu * R
questions.append(make_q(
    "q002", "Easy", 2, "numeric", ["limiting-friction", "muR"],
    f"A particle rests on a rough horizontal surface. The normal reaction is ${R}\\,\\text{{N}}$ and the coefficient of friction is $\\mu = {mu}$. Find the magnitude of the limiting frictional force.",
    [
        step(1, "Recall limiting friction", "F_{{\\max}} = \\mu R",
             "At the point of sliding, friction takes its maximum value $\\mu R$."),
        step(2, "Substitute the values", f"F_{{\\max}} = {mu} \\times {R}",
             f"$\\mu = {mu}$ and $R = {R}\\,\\text{{N}}$."),
        step(3, "Calculate", f"F_{{\\max}} = {fmt(Fmax)}\\,\\text{{N}}",
             f"${mu} \\times {R} = {fmt(Fmax)}$."),
        step(4, "Interpret", f"F_{{\\max}} = {fmt(Fmax)}\\,\\text{{N}}",
             f"No horizontal force greater than ${fmt(Fmax)}\\,\\text{{N}}$ can be overcome without sliding."),
        step(5, "State units", "\\text{N}",
             "Friction is a force, measured in newtons."),
        step(6, "Final answer", f"F_{{\\max}} = {fmt(Fmax)}\\,\\text{{N}}",
             f"The limiting frictional force is ${fmt(Fmax)}\\,\\text{{N}}$."),
    ],
    f"$F_{{\\max}} = {fmt(Fmax)}\\,\\text{{N}}$",
))

# q003: find mu
F, R = 18, 60
mu_val = F / R
questions.append(make_q(
    "q003", "Easy", 3, "numeric", ["coefficient-of-friction", "mu"],
    f"A particle is on the point of sliding along a horizontal surface. The frictional force is ${F}\\,\\text{{N}}$ and the normal reaction is ${R}\\,\\text{{N}}$. Find $\\mu$.",
    [
        step(1, "Identify limiting equilibrium", "F = \\mu R",
             "On the point of sliding, friction equals its maximum value."),
        step(2, "Rearrange for $\\mu$", "\\mu = \\dfrac{F}{R}",
             "Dividing friction by the normal reaction gives the coefficient of friction."),
        step(3, "Substitute", f"\\mu = \\dfrac{{{F}}}{{{R}}}",
             f"$F = {F}\\,\\text{{N}}$, $R = {R}\\,\\text{{N}}$."),
        step(4, "Evaluate", f"\\mu = {fmt(mu_val, 3)}",
             f"$\\mu = {fmt(mu_val, 3)}$."),
        step(5, "Check magnitude", f"0 < \\mu = {fmt(mu_val, 3)} < 1",
             "For many common surfaces $\\mu$ is between 0 and 1."),
        step(6, "Answer", f"\\mu = {fmt(mu_val, 3)}",
             f"The coefficient of friction is ${fmt(mu_val, 3)}$."),
    ],
    f"$\\mu = {fmt(mu_val, 3)}$",
))

# q004-q010: loop basic F = mu R
basic_cases = [
    ("q004", 0.3, 40, "A crate rests on a warehouse floor"),
    ("q005", 0.5, 24, "A box sits on a rough table"),
    ("q006", 0.25, 80, "A package is on a loading bay"),
    ("q007", 0.6, 15, "A toolbox rests on a workbench"),
    ("q008", 0.35, 100, "A pallet sits on a factory floor"),
    ("q009", 0.45, 32, "A suitcase is on a rough platform"),
    ("q010", 0.2, 150, "A heavy block rests on concrete"),
]
for qid, muv, Rv, ctx in basic_cases:
    Fv = muv * Rv
    questions.append(make_q(
        qid, "Easy", 2, "numeric", ["limiting-friction", "muR"],
        f"{ctx}. The normal reaction is ${Rv}\\,\\text{{N}}$ and $\\mu = {muv}$. Find the limiting frictional force.",
        [
            step(1, "State limiting friction", "F_{{\\max}} = \\mu R",
                 "Maximum friction before sliding is $\\mu R$."),
            step(2, "Substitute", f"F_{{\\max}} = {muv} \\times {Rv}",
                 f"$\\mu = {muv}$, $R = {Rv}\\,\\text{{N}}$."),
            step(3, "Calculate", f"F_{{\\max}} = {fmt(Fv)}\\,\\text{{N}}",
                 f"${muv} \\times {Rv} = {fmt(Fv)}$."),
            step(4, "Interpret physically",
                 f"F_{{\\max}} = {fmt(Fv)}\\,\\text{{N}}",
                 "This is the largest horizontal force friction can balance without sliding."),
            step(5, "Note direction", "\\text{Friction acts horizontally along the surface}",
                 "It opposes any tendency to slide."),
            step(6, "Answer", f"F_{{\\max}} = {fmt(Fv)}\\,\\text{{N}}",
                 f"Limiting friction is ${fmt(Fv)}\\,\\text{{N}}$."),
        ],
        f"$F_{{\\max}} = {fmt(Fv)}\\,\\text{{N}}$",
    ))

# q011: normal reaction on horizontal
m = 5
W = m * G
questions.append(make_q(
    "q011", "Easy", 3, "numeric", ["normal-reaction", "weight", "horizontal"],
    f"A particle of mass ${m}\\,\\text{{kg}}$ rests on a rough horizontal surface. Taking $g = {G}\\,\\text{{m s}}^{{-2}}$, find the normal reaction.",
    [
        step(1, "Draw a force diagram", "\\text{Weight } W \\text{ down, normal } R \\text{ up}",
             "On a horizontal surface with no vertical acceleration, the only vertical forces are weight and reaction."),
        step(2, "Calculate the weight", f"W = mg = {m} \\times {G} = {fmt(W)}\\,\\text{{N}}",
             f"Weight is mass times $g$: ${fmt(W)}\\,\\text{{N}}$ downward."),
        step(3, "Apply vertical equilibrium", "R - W = 0",
             "The particle is not accelerating vertically, so upward and downward forces balance."),
        step(4, "Solve for $R$", f"R = {fmt(W)}\\,\\text{{N}}",
             f"The normal reaction equals the weight: ${fmt(W)}\\,\\text{{N}}$."),
        step(5, "Note for friction", f"R = {fmt(W)}\\,\\text{{N}} \\Rightarrow F_{{\\max}} = \\mu \\times {fmt(W)}",
             "This reaction is used in $F \\le \\mu R$ for horizontal friction problems."),
        step(6, "Answer", f"R = {fmt(W)}\\,\\text{{N}}",
             f"$R = {fmt(W)}\\,\\text{{N}}$."),
    ],
    f"$R = {fmt(W)}\\,\\text{{N}}$",
))

# q012: is friction sufficient?
mu12, m12, P = 0.4, 8, 25
W12 = m12 * G
R12 = W12
Fmax12 = mu12 * R12
slides = P > Fmax12
questions.append(make_q(
    "q012", "Easy", 4, "written", ["F-le-muR", "equilibrium", "horizontal"],
    f"A particle of mass ${m12}\\,\\text{{kg}}$ rests on a rough horizontal surface with $\\mu = {mu12}$. "
    f"A horizontal force of ${P}\\,\\text{{N}}$ is applied. Taking $g = {G}\\,\\text{{m s}}^{{-2}}$, "
    f"state whether the particle slides, justifying your answer.",
    [
        step(1, "Find the weight", f"W = {m12} \\times {G} = {fmt(W12)}\\,\\text{{N}}",
             f"Weight is ${fmt(W12)}\\,\\text{{N}}$ downward."),
        step(2, "Find the normal reaction", f"R = {fmt(R12)}\\,\\text{{N}}",
             "On a horizontal surface with no vertical forces other than weight, $R = W$."),
        step(3, "Calculate limiting friction", f"F_{{\\max}} = \\mu R = {mu12} \\times {fmt(R12)} = {fmt(Fmax12)}\\,\\text{{N}}",
             f"Maximum friction is ${fmt(Fmax12)}\\,\\text{{N}}$."),
        step(4, "Compare with applied force", f"P = {P}\\,\\text{{N}} \\quad \\text{{vs}} \\quad F_{{\\max}} = {fmt(Fmax12)}\\,\\text{{N}}",
             f"The applied force is ${P}\\,\\text{{N}}$."),
        step(5, "Apply the friction law",
             f"P {'>' if slides else '≤'} F_{{\\max}}",
             f"Since ${P} {'exceeds' if slides else 'does not exceed'} {fmt(Fmax12)}, friction {'cannot' if slides else 'can'} balance the applied force."),
        step(6, "Conclusion",
             f"\\text{{The particle {'slides' if slides else 'remains in equilibrium'}}}",
             f"The particle {'slides' if slides else 'does not slide'} because the applied force {'exceeds' if slides else 'does not exceed'} limiting friction."),
    ],
    f"The particle {'slides' if slides else 'does not slide'}; $F_{{\\max}} = {fmt(Fmax12)}\\,\\text{{N}}$ and $P = {P}\\,\\text{{N}}$.",
))

# q013-q018: more easy horizontal / conceptual
easy_more = [
    ("q013", 0.3, 6, 12, False),
    ("q014", 0.5, 10, 40, True),
    ("q015", 0.25, 4, 8, False),
    ("q016", 0.6, 3, 20, True),
    ("q017", 0.35, 12, 35, True),
    ("q018", 0.45, 7, 25, False),
]
for qid, muv, mv, Pv, slides in easy_more:
    Wv = mv * G
    Rv = Wv
    Fmaxv = muv * Rv
    questions.append(make_q(
        qid, "Easy", 4, "written", ["horizontal", "limiting-friction", "equilibrium"],
        f"A particle of mass ${mv}\\,\\text{{kg}}$ is on a rough horizontal plane with $\\mu = {muv}$. "
        f"A horizontal pull of ${Pv}\\,\\text{{N}}$ acts on it. Taking $g = {G}\\,\\text{{m s}}^{{-2}}$, "
        f"determine whether the particle is in limiting equilibrium, in equilibrium without sliding, or sliding.",
        [
            step(1, "Calculate weight and reaction", f"W = R = {fmt(Wv)}\\,\\text{{N}}",
                 f"$W = mg = {fmt(Wv)}\\,\\text{{N}}$; on a horizontal surface $R = W$."),
            step(2, "Find limiting friction", f"F_{{\\max}} = {muv} \\times {fmt(Wv)} = {fmt(Fmaxv)}\\,\\text{{N}}",
                 f"$F_{{\\max}} = \\mu R = {fmt(Fmaxv)}\\,\\text{{N}}$."),
            step(3, "Compare forces", f"P = {Pv}\\,\\text{{N}}, \\quad F_{{\\max}} = {fmt(Fmaxv)}\\,\\text{{N}}",
                 "Compare the applied pull with the maximum possible friction."),
            step(4, "Classify the motion",
                 ("\\text{Sliding}" if slides else "\\text{Limiting equilibrium}" if abs(Pv - Fmaxv) < 0.01 else "\\text{Equilibrium (not at limit)}"),
                 f"Since the applied force {'exceeds' if slides else 'equals' if abs(Pv-Fmaxv)<0.01 else 'is less than'} limiting friction, the particle {'slides' if slides else 'is in equilibrium'}."),
            step(5, "State friction magnitude",
                 f"F = {fmt(min(Pv, Fmaxv))}\\,\\text{{N}}",
                 f"Friction equals {'limiting value' if slides or abs(Pv-Fmaxv)<0.01 else 'applied force'} ${fmt(min(Pv, Fmaxv))}\\,\\text{{N}}$."),
            step(6, "Conclusion",
                 f"\\text{{The particle {'slides' if slides else 'remains at rest'}}}",
                 f"{'Applied force exceeds limiting friction.' if slides else 'Friction balances the applied force.'}"),
        ],
        f"{'The particle slides' if slides else 'The particle remains in equilibrium'}; $F_{{\\max}} = {fmt(Fmaxv)}\\,\\text{{N}}$.",
    ))

print(f"Easy section: {len(questions)} questions")

# ══════════════════════════════════════════════════════════════════════════════
# INTERMEDIATE q019–q050: inclined planes, resolving, tan θ = μ
# ══════════════════════════════════════════════════════════════════════════════

def particle_on_slope_equilibrium(qid, m, alpha_deg, mu_val, find="friction"):
    """Particle on rough inclined plane at angle alpha, in equilibrium."""
    a = rad(alpha_deg)
    W = m * G
    R = W * math.cos(a)
    W_par = W * math.sin(a)
    Fmax = mu_val * R
    F = W_par  # equilibrium down slope
    at_limit = abs(F - Fmax) < 0.05

    if find == "friction":
        text = (
            f"A particle of mass ${m}\\,\\text{{kg}}$ rests in equilibrium on a rough plane inclined at "
            f"${alpha_deg}°$ to the horizontal. The coefficient of friction is $\\mu = {mu_val}$. "
            f"Taking $g = {G}\\,\\text{{m s}}^{{-2}}$, find the frictional force acting on the particle "
            f"and state its direction."
        )
        final = f"$F = {fmt(F)}\\,\\text{{N}}$ up the plane (friction opposes the tendency to slide down)."
        steps = [
            step(1, "Resolve weight parallel to the plane", f"W_{{\\parallel}} = mg\\sin\\alpha = {fmt(W)}\\sin {alpha_deg}° = {fmt(W_par)}\\,\\text{{N}}",
                 f"The component of weight down the slope is ${fmt(W_par)}\\,\\text{{N}}$."),
            step(2, "Resolve weight perpendicular to the plane", f"W_{{\\perp}} = mg\\cos\\alpha = {fmt(W)}\\cos {alpha_deg}° = {fmt(R)}\\,\\text{{N}}",
                 f"This equals the normal reaction: $R = {fmt(R)}\\,\\text{{N}}$."),
            step(3, "Apply equilibrium parallel to the plane", "F = W_{\\parallel}",
                 "Friction balances the weight component down the slope."),
            step(4, "Calculate friction", f"F = {fmt(F)}\\,\\text{{N}}",
                 f"Friction is ${fmt(F)}\\,\\text{{N}}$."),
            step(5, "Determine direction", "\\text{Friction acts up the plane}",
                 "The weight tends to slide the particle down, so friction opposes this by acting up the slope."),
            step(6, "Check $F \\le \\mu R$", f"F = {fmt(F)} \\le \\mu R = {fmt(Fmax)}\\,\\text{{N}}",
                 f"Since ${fmt(F)} \\le {fmt(Fmax)}$, equilibrium is possible."),
            step(7, "State whether at limiting equilibrium",
                 f"\\text{{{'At the limit' if at_limit else 'Not at the limit'}}}",
                 f"Friction {'equals' if at_limit else 'is less than'} limiting friction."),
            step(8, "Final answer", f"F = {fmt(F)}\\,\\text{{N}} \\text{{ up the plane}}",
                 f"Frictional force: ${fmt(F)}\\,\\text{{N}}$ up the plane."),
            step(9, "Summarise resolving method",
                 "\\text{Resolve weight, then apply } F = ma \\text{ parallel and perpendicular}",
                 "Resolving is the standard approach for inclined-plane problems."),
        ]
    else:
        text = (
            f"A particle of mass ${m}\\,\\text{{kg}}$ is on the point of sliding down a rough plane "
            f"inclined at ${alpha_deg}°$ to the horizontal. Taking $g = {G}\\,\\text{{m s}}^{{-2}}$, find $\\mu$."
        )
        mu_calc = math.tan(a)
        final = f"$\\mu = {fmt(mu_calc, 3)}$"
        steps = [
            step(1, "Identify limiting equilibrium down the plane", "F = \\mu R = mg\\sin\\alpha",
                 "At the point of sliding, friction equals $\\mu R$ and balances the downslope component of weight."),
            step(2, "Write the normal reaction", f"R = mg\\cos\\alpha = {fmt(R)}\\,\\text{{N}}",
                 f"$R = {fmt(R)}\\,\\text{{N}}$."),
            step(3, "Set up limiting equation", "\\mu mg\\cos\\alpha = mg\\sin\\alpha",
                 "Limiting friction equals the weight component down the slope."),
            step(4, "Cancel $mg$", "\\mu\\cos\\alpha = \\sin\\alpha",
                 "Mass and $g$ cancel from both sides."),
            step(5, "Solve for $\\mu$", f"\\mu = \\tan\\alpha = \\tan {alpha_deg}°",
                 "Dividing by $\\cos\\alpha$ gives $\\mu = \\tan\\alpha$."),
            step(6, "Evaluate", f"\\mu = {fmt(mu_calc, 3)}",
                 f"$\\mu = {fmt(mu_calc, 3)}$."),
            step(7, "Interpret", f"\\tan {alpha_deg}° = {fmt(mu_calc, 3)}",
                 "The angle of the plane equals the angle of friction at limiting equilibrium."),
            step(8, "Verify with $F = \\mu R$",
                 f"\\mu R = {fmt(mu_calc, 3)} \\times {fmt(R)} = {fmt(mu_calc * R)}\\,\\text{{N}} = mg\\sin\\alpha",
                 "Both sides of the equilibrium equation match."),
            step(9, "Answer", f"\\mu = {fmt(mu_calc, 3)}",
                 f"Coefficient of friction is ${fmt(mu_calc, 3)}$."),
        ]
    return make_q(qid, "Intermediate", 5, "written",
        ["inclined-plane", "resolving", "friction"],
        text, steps, final)


slope_cases = [
    ("q019", 4, 20, 0.5, "friction"),
    ("q020", 6, 30, 0.4, "friction"),
    ("q021", 3, 15, 0.6, "friction"),
    ("q022", 8, 25, 0.35, "friction"),
    ("q023", 5, 35, 0.7, "friction"),
    ("q024", 10, 18, 0.55, "friction"),
    ("q025", 2, 40, 0.8, "friction"),
    ("q026", 7, 22, 0.45, "friction"),
]
for args in slope_cases:
    questions.append(particle_on_slope_equilibrium(*args))

# q027-q034: find mu from angle at limiting equilibrium
limiting_mu_cases = [
    ("q027", 5, 15), ("q028", 8, 20), ("q029", 4, 30), ("q030", 6, 25),
    ("q031", 10, 18), ("q032", 3, 35), ("q033", 12, 22), ("q034", 7, 28),
]
for qid, m, alpha_deg in limiting_mu_cases:
    questions.append(particle_on_slope_equilibrium(qid, m, alpha_deg, 0, "mu"))

# q035-q040: find angle from mu at limiting equilibrium
for i, (qid, m, mu_v) in enumerate([
    ("q035", 4, 0.25), ("q036", 6, 0.4), ("q037", 5, 0.5),
    ("q038", 8, 0.6), ("q039", 3, 0.75), ("q040", 10, 0.35),
]):
    alpha_v = deg(math.atan(mu_v))
    W = m * G
    text = (
        f"A particle of mass ${m}\\,\\text{{kg}}$ is on the point of sliding down a rough inclined plane. "
        f"The coefficient of friction is $\\mu = {mu_v}$. Taking $g = {G}\\,\\text{{m s}}^{{-2}}$, "
        f"find the angle of inclination of the plane."
    )
    steps = [
        step(1, "Use limiting equilibrium condition", "\\mu = \\tan\\alpha",
             "When the particle is about to slide down, $\\mu$ equals the tangent of the angle of inclination."),
        step(2, "Write the equation for $\\alpha$", f"\\tan\\alpha = {mu_v}",
             f"Given $\\mu = {mu_v}$."),
        step(3, "Find $\\alpha$", f"\\alpha = \\tan^{{-1}}({mu_v}) = {fmt(alpha_v, 1)}°",
             f"$\\alpha = {fmt(alpha_v, 1)}°$."),
        step(4, "Verify with weight components",
             f"mg\\sin\\alpha = {fmt(W)}\\sin {fmt(alpha_v,1)}° = {fmt(W * math.sin(rad(alpha_v)))}\\,\\text{{N}}",
             "Downslope component of weight."),
        step(5, "Check limiting friction",
             f"\\mu R = {mu_v} \\times {fmt(W * math.cos(rad(alpha_v)))} = {fmt(mu_v * W * math.cos(rad(alpha_v)))}\\,\\text{{N}}",
             "Limiting friction matches the downslope component."),
        step(6, "Interpret the angle of friction",
             f"\\alpha = {fmt(alpha_v, 1)}° \\text{{ is the angle of friction}}",
             "This is the steepest slope the particle can rest on without sliding."),
        step(7, "State answer", f"\\alpha = {fmt(alpha_v, 1)}°",
             f"Angle of inclination is ${fmt(alpha_v, 1)}°$."),
        step(8, "Comment on stability",
             "\\text{Any smaller angle: particle remains at rest}",
             "If the plane were less steep, friction would not reach its limit."),
        step(9, "Final answer", f"\\alpha = {fmt(alpha_v, 1)}°",
             f"$\\alpha = {fmt(alpha_v, 1)}°$."),
    ]
    questions.append(make_q(qid, "Intermediate", 5, "numeric",
        ["angle-of-friction", "tan-alpha", "limiting-equilibrium"],
        text, steps, f"$\\alpha = {fmt(alpha_v, 1)}°$"))


def horizontal_push_on_slope(qid, m, alpha_deg, mu_v, P):
    """Horizontal force P pushing a particle up a rough inclined plane."""
    a = rad(alpha_deg)
    W = m * G
    # Resolve P: parallel up slope = P cos alpha, into plane = P sin alpha
    P_par = P * math.cos(a)
    P_perp = P * math.sin(a)
    R = W * math.cos(a) + P_perp
    Fmax = mu_v * R
    # Equilibrium up plane: P cos a = W sin a + F (friction down plane opposing motion up)
    F_needed = P_par - W * math.sin(a)
    at_limit = abs(F_needed - Fmax) < 0.1

    text = (
        f"A particle of mass ${m}\\,\\text{{kg}}$ rests on a rough plane inclined at ${alpha_deg}°$ "
        f"to the horizontal. A horizontal force of ${P}\\,\\text{{N}}$ acts on the particle, "
        f"pushing it up the plane. The coefficient of friction is $\\mu = {mu_v}$. "
        f"Taking $g = {G}\\,\\text{{m s}}^{{-2}}$, find the frictional force and state whether the particle moves."
    )
    moves = F_needed > Fmax + 0.01 or F_needed < -0.01
    steps = [
        step(1, "Resolve the horizontal force parallel to the plane",
             f"P\\cos\\alpha = {P}\\cos {alpha_deg}° = {fmt(P_par)}\\,\\text{{N}}",
             f"Component up the slope: ${fmt(P_par)}\\,\\text{{N}}$."),
        step(2, "Resolve the horizontal force perpendicular to the plane",
             f"P\\sin\\alpha = {P}\\sin {alpha_deg}° = {fmt(P_perp)}\\,\\text{{N}}",
             f"Component into the plane increases the normal reaction."),
        step(3, "Resolve weight", f"W_{{\\parallel}} = {fmt(W * math.sin(a))}\\,\\text{{N}}, \\quad W_{{\\perp}} = {fmt(W * math.cos(a))}\\,\\text{{N}}",
             "Weight components parallel and perpendicular to the slope."),
        step(4, "Find the normal reaction", f"R = W_{{\\perp}} + P\\sin\\alpha = {fmt(R)}\\,\\text{{N}}",
             f"Forces into the plane give $R = {fmt(R)}\\,\\text{{N}}$."),
        step(5, "Calculate limiting friction", f"F_{{\\max}} = \\mu R = {fmt(Fmax)}\\,\\text{{N}}",
             f"Maximum friction is ${fmt(Fmax)}\\,\\text{{N}}$."),
        step(6, "Apply equilibrium parallel to the plane",
             f"P\\cos\\alpha = W_{{\\parallel}} + F",
             "Up-slope push balances weight component and friction down the plane."),
        step(7, "Solve for friction", f"F = {fmt(P_par)} - {fmt(W * math.sin(a))} = {fmt(F_needed)}\\,\\text{{N}}",
             f"Friction required is ${fmt(F_needed)}\\,\\text{{N}}$ down the plane."),
        step(8, "Compare with limiting value",
             f"F = {fmt(F_needed)} \\quad \\text{{vs}} \\quad F_{{\\max}} = {fmt(Fmax)}",
             f"Check whether $|F| \\le F_{{\\max}}$."),
        step(9, "Conclusion on motion",
             f"\\text{{The particle {'moves up the plane' if moves else 'remains in equilibrium'}}}",
             f"{'Friction exceeds the limit or force is insufficient.' if moves else 'Friction can balance the forces.'}"),
        step(10, "State friction direction", "\\text{Friction acts down the plane}",
             "The push tends to move the particle up, so friction opposes by acting down the slope."),
        step(11, "Final answer",
             f"F = {fmt(abs(F_needed))}\\,\\text{{N}} \\text{{ down the plane}}",
             f"Frictional force: ${fmt(abs(F_needed))}\\,\\text{{N}}$ down the plane."),
    ]
    return make_q(qid, "Intermediate", 6, "written",
        ["horizontal-force", "inclined-plane", "resolving"],
        text, steps,
        f"$F = {fmt(abs(F_needed))}\\,\\text{{N}}$ down the plane; the particle {'moves' if moves else 'is in equilibrium'}.")


horizontal_push_cases = [
    ("q041", 4, 25, 0.4, 30),
    ("q042", 6, 30, 0.35, 50),
    ("q043", 5, 20, 0.5, 25),
    ("q044", 8, 15, 0.3, 40),
    ("q045", 3, 35, 0.6, 20),
    ("q046", 10, 18, 0.45, 60),
]
for args in horizontal_push_cases:
    questions.append(horizontal_push_on_slope(*args))

# q047-q050: minimum force to prevent sliding down slope
def min_force_prevent_sliding(qid, m, alpha_deg, mu_v):
    a = rad(alpha_deg)
    W = m * G
    R = W * math.cos(a)
    Fmax = mu_v * R
    W_par = W * math.sin(a)
    # Equilibrium down plane: friction up = W sin a, need F up >= 0 with limiting friction
    # Minimum extra force up slope = 0 if mu R >= W sin a
    deficit = W_par - Fmax
    needs_force = deficit > 0.01
    F_min = deficit if needs_force else 0

    text = (
        f"A particle of mass ${m}\\,\\text{{kg}}$ rests on a rough plane inclined at ${alpha_deg}°$ "
        f"to the horizontal, with $\\mu = {mu_v}$. Taking $g = {G}\\,\\text{{m s}}^{{-2}}$, "
        f"find the minimum force parallel to the plane, acting up the slope, needed to prevent the particle sliding."
    )
    steps = [
        step(1, "Resolve weight down the plane", f"W_{{\\parallel}} = mg\\sin\\alpha = {fmt(W_par)}\\,\\text{{N}}",
             f"Component tending to slide the particle down: ${fmt(W_par)}\\,\\text{{N}}$."),
        step(2, "Find the normal reaction", f"R = mg\\cos\\alpha = {fmt(R)}\\,\\text{{N}}",
             f"$R = {fmt(R)}\\,\\text{{N}}$."),
        step(3, "Calculate maximum friction up the plane", f"F_{{\\max}} = \\mu R = {fmt(Fmax)}\\,\\text{{N}}",
             f"Limiting friction up the slope: ${fmt(Fmax)}\\,\\text{{N}}$."),
        step(4, "Compare friction capacity with downslope pull",
             f"W_{{\\parallel}} = {fmt(W_par)}\\,\\text{{N}}, \\quad F_{{\\max}} = {fmt(Fmax)}\\,\\text{{N}}",
             "Check whether friction alone can prevent sliding."),
        step(5, "Determine if extra force is needed",
             f"\\text{{{'Extra force needed' if needs_force else 'No extra force needed'}}}",
             f"{'Friction is insufficient' if needs_force else 'Friction alone balances the weight component'}."),
        step(6, "Set up equilibrium equation up the plane",
             "F_{\\text{applied}} + F = W_{\\parallel}",
             "Applied force plus friction up the plane balance weight down the slope."),
        step(7, "Use limiting friction", f"F = F_{{\\max}} = {fmt(Fmax)}\\,\\text{{N}}",
             "Minimum applied force occurs when friction is at its maximum."),
        step(8, "Solve for minimum applied force",
             f"F_{{\\text{{applied}}}} = W_{{\\parallel}} - F_{{\\max}} = {fmt(F_min)}\\,\\text{{N}}",
             f"Minimum force up the plane: ${fmt(F_min)}\\,\\text{{N}}$."),
        step(9, "Interpret",
             f"F_{{\\min}} = {fmt(F_min)}\\,\\text{{N}}",
             f"{'A force of at least' if needs_force else 'No additional force —'} ${fmt(F_min)}\\,\\text{{N}}$ up the slope is needed."),
        step(10, "Final answer", f"F_{{\\min}} = {fmt(F_min)}\\,\\text{{N}}",
             f"Minimum force: ${fmt(F_min)}\\,\\text{{N}}$ up the plane."),
    ]
    return make_q(qid, "Intermediate", 6, "numeric",
        ["minimum-force", "inclined-plane", "limiting-friction"],
        text, steps, f"$F_{{\\min}} = {fmt(F_min)}\\,\\text{{N}}$ up the plane.")


min_force_cases = [
    ("q047", 5, 30, 0.3),
    ("q048", 8, 35, 0.25),
    ("q049", 4, 40, 0.4),
    ("q050", 6, 25, 0.5),
]
for args in min_force_cases:
    questions.append(min_force_prevent_sliding(*args))

print(f"After intermediate: {len(questions)} questions")

# ══════════════════════════════════════════════════════════════════════════════
# HARD q051–q070: ladders, angled pulls, multi-step inclined plane problems
# ══════════════════════════════════════════════════════════════════════════════

def ladder_problem(qid, m, L, alpha_deg, mu_ground):
    """Uniform ladder against smooth wall, rough ground."""
    a = rad(alpha_deg)
    W = m * G
    # Moments about base: R_wall * L sin a = W * (L/2) cos a + F * L sin a ... 
    # Actually standard: ladder length L, angle alpha to ground
    # Forces: W at L/2, R_wall at top horizontal, R_ground vertical, F friction at base horizontal
    # Moments about base: R_wall * L sin(alpha) = W * (L/2) cos(alpha)
    R_wall = W * math.cos(a) / (2 * math.sin(a))
    R_ground = W
    F_friction = R_wall
    F_max = mu_ground * R_ground
    at_limit = abs(F_friction - F_max) < 0.5

    text = (
        f"A uniform ladder of mass ${m}\\,\\text{{kg}}$ and length ${L}\\,\\text{{m}}$ rests against "
        f"a smooth vertical wall with its foot on rough horizontal ground. The ladder makes an angle of "
        f"${alpha_deg}°$ with the ground. The coefficient of friction between the ladder and the ground "
        f"is $\\mu = {mu_ground}$. Taking $g = {G}\\,\\text{{m s}}^{{-2}}$, find the frictional force at "
        f"the foot of the ladder and determine whether the ladder is in limiting equilibrium."
    )
    steps = [
        step(1, "Draw the force diagram",
             "\\text{Weight at centre, normal at wall, reaction and friction at ground}",
             "The smooth wall exerts only a horizontal normal force. The ground exerts vertical reaction and horizontal friction."),
        step(2, "Calculate the weight", f"W = mg = {fmt(W)}\\,\\text{{N}}",
             f"Weight ${fmt(W)}\\,\\text{{N}}$ acts at the midpoint of the ladder."),
        step(3, "Resolve vertically", f"R_{{\\text{{ground}}}} = W = {fmt(R_ground)}\\,\\text{{N}}",
             "Vertical equilibrium: ground reaction equals weight."),
        step(4, "Take moments about the foot of the ladder",
             f"R_{{\\text{{wall}}}} \\times L\\sin\\alpha = W \\times \\dfrac{{L}}{{2}}\\cos\\alpha",
             "Moments about the base eliminate ground friction and reaction from the equation."),
        step(5, "Solve for the wall reaction",
             f"R_{{\\text{{wall}}}} = \\dfrac{{W\\cos\\alpha}}{{2\\sin\\alpha}} = {fmt(R_wall)}\\,\\text{{N}}",
             f"Wall reaction: ${fmt(R_wall)}\\,\\text{{N}}$."),
        step(6, "Resolve horizontally", f"F = R_{{\\text{{wall}}}} = {fmt(F_friction)}\\,\\text{{N}}",
             "Horizontal equilibrium: friction at ground equals wall reaction."),
        step(7, "Calculate limiting friction", f"F_{{\\max}} = \\mu R_{{\\text{{ground}}}} = {fmt(F_max)}\\,\\text{{N}}",
             f"Maximum friction: ${fmt(F_max)}\\,\\text{{N}}$."),
        step(8, "Compare friction with limit",
             f"F = {fmt(F_friction)} \\quad \\text{{vs}} \\quad F_{{\\max}} = {fmt(F_max)}",
             "Check whether the ladder is about to slip."),
        step(9, "Conclusion on limiting equilibrium",
             f"\\text{{{'In limiting equilibrium' if at_limit else 'Not at limiting equilibrium'}}}",
             f"Friction {'equals' if at_limit else 'is less than'} the maximum value."),
        step(10, "State direction of friction",
             "\\text{Friction acts horizontally towards the wall}",
             "The wall pushes the ladder away from the wall; friction at the ground opposes the tendency of the foot to slide outward."),
        step(11, "Check ladder angle criterion",
             f"\\tan\\alpha = {fmt(math.tan(a), 3)} \\quad \\text{{vs}} \\quad 2\\mu = {fmt(2*mu_ground, 3)}",
             "For limiting equilibrium at the foot: $\\tan\\alpha = 2\\mu$."),
        step(12, "Comment on stability",
             f"\\text{{Ladder {'is about to slip' if F_friction > F_max - 0.5 else 'remains in equilibrium'}}}",
             "If friction is insufficient, the ladder would slip at the ground."),
        step(13, "Final answer",
             f"F = {fmt(F_friction)}\\,\\text{{N}}, \\quad \\text{{{'limiting' if at_limit else 'not limiting'}}}",
             f"Friction at ground: ${fmt(F_friction)}\\,\\text{{N}}$."),
    ]
    return make_q(qid, "Hard", 8, "written",
        ["ladder", "moments", "limiting-equilibrium"],
        text, steps,
        f"$F = {fmt(F_friction)}\\,\\text{{N}}$ at the foot; {'limiting equilibrium' if at_limit else 'not at the limit'} ($F_{{\\max}} = {fmt(F_max)}\\,\\text{{N}}$).")


ladder_cases = [
    ("q051", 8, 5, 60, 0.4),
    ("q052", 10, 6, 65, 0.35),
    ("q053", 6, 4, 55, 0.5),
    ("q054", 12, 7, 70, 0.3),
]
for args in ladder_cases:
    questions.append(ladder_problem(*args))


def angled_pull_horizontal(qid, m, mu_v, P, theta_deg):
    """Force P at angle theta above horizontal on rough horizontal surface."""
    t = rad(theta_deg)
    W = m * G
    P_hor = P * math.cos(t)
    P_ver = P * math.sin(t)
    R = W - P_ver  # P lifts slightly if upward component
    if R < 0:
        R = 0
    Fmax = mu_v * R
    F_needed = P_hor
    slides = F_needed > Fmax + 0.01

    text = (
        f"A particle of mass ${m}\\,\\text{{kg}}$ rests on a rough horizontal surface with $\\mu = {mu_v}$. "
        f"A force of ${P}\\,\\text{{N}}$ is applied at ${theta_deg}°$ above the horizontal. "
        f"Taking $g = {G}\\,\\text{{m s}}^{{-2}}$, find the normal reaction, the frictional force, "
        f"and determine whether the particle slides."
    )
    steps = [
        step(1, "Resolve the applied force horizontally", f"P\\cos\\theta = {P}\\cos {theta_deg}° = {fmt(P_hor)}\\,\\text{{N}}",
             f"Horizontal component: ${fmt(P_hor)}\\,\\text{{N}}$."),
        step(2, "Resolve the applied force vertically", f"P\\sin\\theta = {P}\\sin {theta_deg}° = {fmt(P_ver)}\\,\\text{{N}}",
             f"Upward component reduces the normal reaction."),
        step(3, "Calculate the weight", f"W = mg = {fmt(W)}\\,\\text{{N}}",
             f"Weight: ${fmt(W)}\\,\\text{{N}}$."),
        step(4, "Find the normal reaction", f"R = W - P\\sin\\theta = {fmt(R)}\\,\\text{{N}}",
             f"Vertical equilibrium gives $R = {fmt(R)}\\,\\text{{N}}$."),
        step(5, "Calculate limiting friction", f"F_{{\\max}} = \\mu R = {fmt(Fmax)}\\,\\text{{N}}",
             f"Maximum friction: ${fmt(Fmax)}\\,\\text{{N}}$."),
        step(6, "Apply horizontal equilibrium", f"F = P\\cos\\theta = {fmt(F_needed)}\\,\\text{{N}}",
             f"Friction balances the horizontal component: ${fmt(F_needed)}\\,\\text{{N}}$."),
        step(7, "Compare with limiting friction",
             f"F = {fmt(F_needed)} \\quad \\text{{vs}} \\quad F_{{\\max}} = {fmt(Fmax)}",
             "Check whether friction can balance the pull."),
        step(8, "Determine motion",
             f"\\text{{The particle {'slides' if slides else 'remains in equilibrium'}}}",
             f"{'Applied horizontal component exceeds limiting friction.' if slides else 'Friction is sufficient.'}"),
        step(9, "Note effect of angled pull",
             "\\text{Pulling at an angle reduces } R \\text{ and hence reduces } F_{\\max}",
             "An upward component of the pull makes sliding easier by reducing the normal reaction."),
        step(10, "State friction direction", "\\text{Friction opposes the horizontal component of the pull}",
             "Friction acts opposite to the tendency to move horizontally."),
        step(11, "Summarise forces",
             f"R = {fmt(R)}\\,\\text{{N}}, \\quad F = {fmt(min(F_needed, Fmax))}\\,\\text{{N}}",
             f"Normal reaction ${fmt(R)}\\,\\text{{N}}$, friction ${fmt(min(F_needed, Fmax))}\\,\\text{{N}}$."),
        step(12, "Verify $F \\le \\mu R$",
             f"{fmt(min(F_needed, Fmax))} \\le {fmt(Fmax)}",
             "Friction law is satisfied."),
        step(13, "Final answer",
             f"R = {fmt(R)}\\,\\text{{N}}, \\quad F = {fmt(min(F_needed, Fmax))}\\,\\text{{N}}, \\quad \\text{{{'slides' if slides else 'equilibrium'}}}",
             f"$R = {fmt(R)}\\,\\text{{N}}$, $F = {fmt(min(F_needed, Fmax))}\\,\\text{{N}}$; particle {'slides' if slides else 'in equilibrium'}."),
    ]
    return make_q(qid, "Hard", 7, "written",
        ["angled-force", "horizontal", "resolving"],
        text, steps,
        f"$R = {fmt(R)}\\,\\text{{N}}$, $F = {fmt(min(F_needed, Fmax))}\\,\\text{{N}}$; the particle {'slides' if slides else 'is in equilibrium'}.")


angled_cases = [
    ("q055", 5, 0.4, 30, 25),
    ("q056", 8, 0.35, 50, 30),
    ("q057", 6, 0.5, 40, 20),
    ("q058", 10, 0.3, 60, 35),
]
for args in angled_cases:
    questions.append(angled_pull_horizontal(*args))


def particle_on_slope_with_pull_angle(qid, m, alpha_deg, mu_v, P, beta_deg):
    """Force P at angle beta above the inclined plane."""
    a = rad(alpha_deg)
    b = rad(beta_deg)
    W = m * G
    P_par = P * math.cos(b)
    P_perp = P * math.sin(b)
    W_par = W * math.sin(a)
    W_perp = W * math.cos(a)
    R = W_perp - P_perp  # P up from plane reduces R
    if R < 0:
        R = 0
    Fmax = mu_v * R
    # Equilibrium up plane: P_par = W_par + F (friction down)
    F = P_par - W_par
    slides = abs(F) > Fmax + 0.01

    text = (
        f"A particle of mass ${m}\\,\\text{{kg}}$ rests on a rough plane inclined at ${alpha_deg}°$ "
        f"to the horizontal. A force of ${P}\\,\\text{{N}}$ acts at ${beta_deg}°$ above the inclined plane, "
        f"pulling up the slope. The coefficient of friction is $\\mu = {mu_v}$. "
        f"Taking $g = {G}\\,\\text{{m s}}^{{-2}}$, find the normal reaction, the frictional force, "
        f"and state whether the particle is on the point of sliding."
    )
    steps = [
        step(1, "Resolve weight parallel to the plane", f"W_{{\\parallel}} = {fmt(W_par)}\\,\\text{{N}}",
             f"Downslope component: ${fmt(W_par)}\\,\\text{{N}}$."),
        step(2, "Resolve weight perpendicular to the plane", f"W_{{\\perp}} = {fmt(W_perp)}\\,\\text{{N}}",
             f"Into-plane component: ${fmt(W_perp)}\\,\\text{{N}}$."),
        step(3, "Resolve the pull parallel to the plane", f"P_{{\\parallel}} = {P}\\cos {beta_deg}° = {fmt(P_par)}\\,\\text{{N}}",
             f"Up-slope component of pull: ${fmt(P_par)}\\,\\text{{N}}$."),
        step(4, "Resolve the pull perpendicular to the plane", f"P_{{\\perp}} = {P}\\sin {beta_deg}° = {fmt(P_perp)}\\,\\text{{N}}",
             "Component away from the plane reduces the normal reaction."),
        step(5, "Find the normal reaction", f"R = W_{{\\perp}} - P_{{\\perp}} = {fmt(R)}\\,\\text{{N}}",
             f"$R = {fmt(R)}\\,\\text{{N}}$."),
        step(6, "Calculate limiting friction", f"F_{{\\max}} = \\mu R = {fmt(Fmax)}\\,\\text{{N}}",
             f"Maximum friction: ${fmt(Fmax)}\\,\\text{{N}}$."),
        step(7, "Apply equilibrium parallel to the plane", f"P_{{\\parallel}} = W_{{\\parallel}} + F",
             "Up-slope pull balances weight component and friction."),
        step(8, "Solve for friction", f"F = {fmt(P_par)} - {fmt(W_par)} = {fmt(F)}\\,\\text{{N}}",
             f"Friction: ${fmt(F)}\\,\\text{{N}}$ (down the plane if positive)."),
        step(9, "Compare with limiting value", f"|F| = {fmt(abs(F))} \\quad \\text{{vs}} \\quad F_{{\\max}} = {fmt(Fmax)}",
             "Check if friction reaches its limit."),
        step(10, "Determine limiting equilibrium",
             f"\\text{{{'On the point of sliding' if abs(abs(F)-Fmax)<0.5 else 'Not at the limit'}}}",
             f"Friction {'equals' if abs(abs(F)-Fmax)<0.5 else 'does not equal'} $\\mu R$."),
        step(11, "State friction direction",
             f"\\text{{Friction acts {'down' if F >= 0 else 'up'} the plane}}",
             "Friction opposes the tendency to slide."),
        step(12, "Check overall motion",
             f"\\text{{Particle {'slides' if slides else 'in equilibrium'}}}",
             "Friction exceeds limit." if slides else "Forces balance with $F \\le \\mu R$."),
        step(13, "Summarise key results",
             f"R = {fmt(R)}\\,\\text{{N}}, \\quad F = {fmt(abs(F))}\\,\\text{{N}}",
             f"Normal reaction ${fmt(R)}\\,\\text{{N}}$, friction ${fmt(abs(F))}\\,\\text{{N}}$."),
        step(14, "Final answer",
             f"R = {fmt(R)}\\,\\text{{N}}, \\quad F = {fmt(abs(F))}\\,\\text{{N}} \\text{{ {'down' if F >= 0 else 'up'} the plane}}",
             f"$R = {fmt(R)}\\,\\text{{N}}$, $F = {fmt(abs(F))}\\,\\text{{N}}$."),
        step(15, "Method recap",
             "\\text{Resolve all forces parallel and perpendicular to the plane}",
             "This systematic approach handles angled pulls on slopes."),
    ]
    return make_q(qid, "Hard", 8, "written",
        ["inclined-plane", "angled-pull", "limiting-equilibrium"],
        text, steps,
        f"$R = {fmt(R)}\\,\\text{{N}}$, $F = {fmt(abs(F))}\\,\\text{{N}}$ {'down' if F >= 0 else 'up'} the plane.")


slope_pull_cases = [
    ("q059", 5, 30, 0.4, 25, 15),
    ("q060", 8, 25, 0.35, 40, 20),
    ("q061", 6, 35, 0.5, 30, 10),
    ("q062", 4, 20, 0.45, 20, 25),
]
for args in slope_pull_cases:
    questions.append(particle_on_slope_with_pull_angle(*args))


# q063-q066: find minimum mu for equilibrium on given slope
for qid, m, alpha_deg in [
    ("q063", 6, 35), ("q064", 8, 40), ("q065", 5, 28), ("q066", 10, 32),
]:
    mu_req = math.tan(rad(alpha_deg))
    W = m * G
    text = (
        f"A particle of mass ${m}\\,\\text{{kg}}$ rests in equilibrium on a plane inclined at "
        f"${alpha_deg}°$ to the horizontal. Find the minimum coefficient of friction needed "
        f"for the particle to remain at rest."
    )
    steps = [
        step(1, "Identify the worst case", "\\text{Friction acts up the plane at its maximum}",
             "Minimum $\\mu$ occurs when friction is at limiting equilibrium, just preventing sliding down."),
        step(2, "Resolve weight parallel to the plane", f"W_{{\\parallel}} = mg\\sin {alpha_deg}° = {fmt(W * math.sin(rad(alpha_deg)))}\\,\\text{{N}}",
             "This is the downslope force friction must balance."),
        step(3, "Resolve weight perpendicular to the plane", f"R = mg\\cos {alpha_deg}° = {fmt(W * math.cos(rad(alpha_deg)))}\\,\\text{{N}}",
             f"Normal reaction: ${fmt(W * math.cos(rad(alpha_deg)))}\\,\\text{{N}}$."),
        step(4, "Write limiting equilibrium", "\\mu R = mg\\sin\\alpha",
             "At the minimum $\\mu$, friction equals $\\mu R$ and balances the downslope component."),
        step(5, "Solve for $\\mu$", f"\\mu = \\tan\\alpha = \\tan {alpha_deg}°",
             "Dividing by $R$ gives $\\mu = \\tan\\alpha$."),
        step(6, "Evaluate", f"\\mu = {fmt(mu_req, 3)}",
             f"Minimum $\\mu = {fmt(mu_req, 3)}$."),
        step(7, "Interpret",
             f"\\text{{For }} \\mu < {fmt(mu_req, 3)}, \\text{{ the particle slides}}",
             "If $\\mu$ is smaller, friction cannot hold the particle on the slope."),
        step(8, "Verify with friction magnitude",
             f"F = \\mu R = {fmt(mu_req * W * math.cos(rad(alpha_deg)))}\\,\\text{{N}} = mg\\sin\\alpha",
             "Limiting friction exactly balances the weight component."),
        step(9, "Link to angle of friction",
             f"\\alpha = {alpha_deg}° \\text{{ is the critical angle}}",
             "The angle of the plane equals the angle of friction at the critical value."),
        step(10, "State the minimum coefficient",
             f"\\mu_{{\\min}} = {fmt(mu_req, 3)}",
             f"Minimum coefficient of friction: ${fmt(mu_req, 3)}$."),
        step(11, "Note for exam technique",
             "\\mu_{\\min} = \\tan\\alpha \\text{ for a particle on a slope}",
             "This is a standard result worth remembering."),
        step(12, "Check with an example",
             f"\\text{{At }} \\mu = {fmt(mu_req, 3)}, \\text{{ friction is exactly sufficient}}",
             "Any smaller value would be insufficient."),
        step(13, "Final answer", f"\\mu_{{\\min}} = {fmt(mu_req, 3)}",
             f"Minimum $\\mu = {fmt(mu_req, 3)}$."),
    ]
    questions.append(make_q(qid, "Hard", 7, "numeric",
        ["minimum-mu", "inclined-plane", "tan-alpha"],
        text, steps, f"$\\mu_{{\\min}} = {fmt(mu_req, 3)}$"))


# q067-q070: complex multi-part inclined plane with horizontal force
complex_cases = [
    ("q067", 6, 30, 0.4, 45),
    ("q068", 8, 25, 0.35, 55),
    ("q069", 5, 35, 0.5, 35),
    ("q070", 10, 20, 0.45, 70),
]
for qid, m, alpha_deg, mu_v, P in complex_cases:
    a = rad(alpha_deg)
    W = m * G
    P_par = P * math.cos(a)
    P_perp = P * math.sin(a)
    W_par = W * math.sin(a)
    W_perp = W * math.cos(a)
    R = W_perp + P_perp
    Fmax = mu_v * R
    F = P_par - W_par
    mu_min = math.tan(a)
    slides = F > Fmax + 0.01 or F < 0

    text = (
        f"A particle of mass ${m}\\,\\text{{kg}}$ is on a rough plane inclined at ${alpha_deg}°$ "
        f"to the horizontal. A horizontal force of ${P}\\,\\text{{N}}$ pushes the particle up the plane. "
        f"The coefficient of friction is $\\mu = {mu_v}$. Taking $g = {G}\\,\\text{{m s}}^{{-2}}$:\n\n"
        f"(a) Find the normal reaction.\n"
        f"(b) Find the frictional force.\n"
        f"(c) Determine whether the particle moves up the plane, remains in equilibrium, or slides down."
    )
    steps = [
        step(1, "Part (a): resolve forces perpendicular to the plane",
             f"R = W\\cos\\alpha + P\\sin\\alpha",
             "Weight component and horizontal push both press the particle into the plane."),
        step(2, "Calculate weight perpendicular component", f"W\\cos\\alpha = {fmt(W_perp)}\\,\\text{{N}}",
             f"$W\\cos {alpha_deg}° = {fmt(W_perp)}\\,\\text{{N}}$."),
        step(3, "Calculate push perpendicular component", f"P\\sin\\alpha = {fmt(P_perp)}\\,\\text{{N}}",
             f"Horizontal push contributes ${fmt(P_perp)}\\,\\text{{N}}$ into the plane."),
        step(4, "Find normal reaction", f"R = {fmt(W_perp)} + {fmt(P_perp)} = {fmt(R)}\\,\\text{{N}}",
             f"(a) $R = {fmt(R)}\\,\\text{{N}}$."),
        step(5, "Part (b): resolve forces parallel to the plane",
             "P\\cos\\alpha = W\\sin\\alpha + F",
             "Up-slope component of push balances weight down the slope and friction."),
        step(6, "Calculate parallel components",
             f"P\\cos\\alpha = {fmt(P_par)}\\,\\text{{N}}, \\quad W\\sin\\alpha = {fmt(W_par)}\\,\\text{{N}}",
             f"Parallel push: ${fmt(P_par)}\\,\\text{{N}}$; downslope weight: ${fmt(W_par)}\\,\\text{{N}}$."),
        step(7, "Solve for friction", f"F = {fmt(P_par)} - {fmt(W_par)} = {fmt(F)}\\,\\text{{N}}",
             f"(b) Friction: ${fmt(F)}\\,\\text{{N}}$ down the plane."),
        step(8, "Calculate limiting friction", f"F_{{\\max}} = \\mu R = {mu_v} \\times {fmt(R)} = {fmt(Fmax)}\\,\\text{{N}}",
             f"Maximum friction: ${fmt(Fmax)}\\,\\text{{N}}$."),
        step(9, "Part (c): compare friction with limit",
             f"F = {fmt(F)} \\le F_{{\\max}} = {fmt(Fmax)}",
             "Check whether required friction exceeds the limit."),
        step(10, "Determine motion",
             f"\\text{{Particle {'slides down' if F < 0 else 'moves up' if slides else 'remains in equilibrium'}}}",
             f"(c) The particle {'slides down' if F < 0 else 'moves up the plane' if slides else 'is in equilibrium'}."),
        step(11, "Verify friction direction",
             "\\text{Friction acts down the plane, opposing upward motion}",
             "Since the push tends to move the particle up, friction acts down the slope."),
        step(12, "Cross-check with $\\mu_{\\min}$ for resting on slope",
             f"\\tan\\alpha = {fmt(mu_min, 3)}",
             f"Without the push, the particle would {'slide' if mu_v < mu_min else 'rest'} on the slope."),
        step(13, "Summarise part (a)", f"R = {fmt(R)}\\,\\text{{N}}",
             f"Normal reaction: ${fmt(R)}\\,\\text{{N}}$."),
        step(14, "Summarise part (b)", f"F = {fmt(abs(F))}\\,\\text{{N}}",
             f"Frictional force: ${fmt(abs(F))}\\,\\text{{N}}$."),
        step(15, "Summarise part (c)",
             f"\\text{{Equilibrium {'not' if slides or F < 0 else ''} achieved}}",
             f"The particle {'is in equilibrium' if not slides and F >= 0 else 'is not in equilibrium'}."),
        step(16, "Final combined answer",
             f"R = {fmt(R)}\\,\\text{{N}}, \\quad F = {fmt(abs(F))}\\,\\text{{N}}, \\quad \\text{{{'equilibrium' if not slides and F >= 0 else 'motion occurs'}}}",
             f"(a) $R = {fmt(R)}\\,\\text{{N}}$; (b) $F = {fmt(abs(F))}\\,\\text{{N}}$; (c) {'equilibrium' if not slides and F >= 0 else 'the particle moves'}."),
    ]
    questions.append(make_q(qid, "Hard", 9, "written",
        ["multi-part", "horizontal-force", "inclined-plane"],
        text, steps,
        f"(a) $R = {fmt(R)}\\,\\text{{N}}$; (b) $F = {fmt(abs(F))}\\,\\text{{N}}$ down the plane; (c) {'equilibrium' if not slides and F >= 0 else 'the particle moves'}."))

# ── Write TypeScript output ───────────────────────────────────────────────────
assert len(questions) == 70, f"Expected 70 questions, got {len(questions)}"

header = '''import { Question } from "@/lib/types";

/**
 * A-Level Maths · Year 2 Mechanics · Forces and friction
 * Resolving on inclined planes; F ≤ μR; limiting equilibrium; ladders;
 * horizontal and angled forces on rough surfaces. 70 questions with full worked solutions.
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
