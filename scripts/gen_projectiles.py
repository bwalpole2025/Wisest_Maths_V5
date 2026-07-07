#!/usr/bin/env python3
"""Generate all 70 questions for Projectiles subtopic (Year 2 Mechanics)."""
import json
import math

OUT = "/Users/benjaminwalpole/Wisest_Maths_V5/wisest-maths-content/src/data/questions/a-level-maths/year-2-mech/projectiles.ts"
G = 9.8


def step(n, desc, work, expl, diagram=None):
    return {"stepNumber": n, "description": desc, "workingLatex": work, "explanation": expl, "diagram": diagram}


def make_q(suffix, difficulty, marks, answer_type, tags, text, steps, final, diagram=None):
    return {
        "id": f"al.y2.mech.projectiles.{suffix}",
        "level": "A-Level Maths",
        "topic": "Year 2 Mechanics",
        "subtopic": "Projectiles",
        "subtopicId": "al.y2.mech.projectiles",
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


def deg(r):
    return math.degrees(r)


questions = []

# ══════════════════════════════════════════════════════════════════════════════
# EASY q001–q018: components, horizontal projection, basic vertical motion
# ══════════════════════════════════════════════════════════════════════════════

# q001 conceptual
questions.append(make_q(
    "q001", "Easy", 3, "written", ["independence", "components", "projectile"],
    "A particle is projected with initial speed $u$ at an angle $\\alpha$ above the horizontal. "
    "Explain why the horizontal and vertical motions can be treated separately, and state the "
    "acceleration in each direction (ignoring air resistance).",
    [
        step(1, "Identify the only force", "\\text{Weight acts vertically downward}",
             "With no air resistance, the only force is gravity, which acts vertically."),
        step(2, "Horizontal acceleration", "a_x = 0",
             "Gravity has no horizontal component, so horizontal velocity stays constant."),
        step(3, "Vertical acceleration", f"a_y = -g = -{G}\\,\\text{{m s}}^{{-2}}",
             f"Gravity causes constant downward acceleration $g = {G}\\,\\text{{m s}}^{{-2}}$."),
        step(4, "State horizontal motion", "x = (u\\cos\\alpha)\\,t",
             "Horizontal displacement grows uniformly because speed $u\\cos\\alpha$ is constant."),
        step(5, "State vertical motion", "y = (u\\sin\\alpha)\\,t - \\tfrac{1}{2}gt^2",
             "Vertical motion is SUVAT with initial speed $u\\sin\\alpha$ and acceleration $-g$."),
        step(6, "Explain independence",
             "\\text{No horizontal force } \\Rightarrow \\text{ motions are independent}",
             "Because horizontal acceleration is zero, vertical equations can be solved without affecting horizontal motion, and vice versa."),
    ],
    "Horizontal acceleration is $0$; vertical acceleration is $-g$. Motions are independent because gravity acts only vertically.",
))

# q002: resolve velocity components
u, alpha = 20, 30
ux = u * math.cos(rad(alpha))
uy = u * math.sin(rad(alpha))
questions.append(make_q(
    "q002", "Easy", 3, "numeric", ["components", "resolving"],
    f"A particle is projected with speed ${u}\\,\\text{{m s}}^{{-1}}$ at ${alpha}°$ above the horizontal. "
    f"Find the horizontal and vertical components of the initial velocity.",
    [
        step(1, "Draw a velocity triangle", "u, \\quad \\alpha \\text{ above horizontal}",
             "Resolve the initial velocity into horizontal and vertical parts using trigonometry."),
        step(2, "Horizontal component", f"u_x = u\\cos\\alpha = {u}\\cos {alpha}°",
             f"$u_x = u\\cos\\alpha$."),
        step(3, "Calculate $u_x$", f"u_x = {fmt(ux)}\\,\\text{{m s}}^{{-1}}",
             f"Horizontal component: ${fmt(ux)}\\,\\text{{m s}}^{{-1}}$."),
        step(4, "Vertical component", f"u_y = u\\sin\\alpha = {u}\\sin {alpha}°",
             f"$u_y = u\\sin\\alpha$."),
        step(5, "Calculate $u_y$", f"u_y = {fmt(uy)}\\,\\text{{m s}}^{{-1}}",
             f"Vertical component: ${fmt(uy)}\\,\\text{{m s}}^{{-1}}$."),
        step(6, "Verify with Pythagoras",
             f"u_x^2 + u_y^2 = {fmt(ux**2 + uy**2, 1)} \\approx {u**2}",
             "Components should combine to give the original speed."),
    ],
    f"$u_x = {fmt(ux)}\\,\\text{{m s}}^{{-1}}$, $u_y = {fmt(uy)}\\,\\text{{m s}}^{{-1}}$",
))

# q003-q008: component resolution loop
comp_cases = [
    ("q003", 15, 40), ("q004", 25, 60), ("q005", 10, 53),
    ("q006", 30, 25), ("q007", 18, 70), ("q008", 40, 45),
]
for qid, uv, av in comp_cases:
    ux_v = uv * math.cos(rad(av))
    uy_v = uv * math.sin(rad(av))
    questions.append(make_q(
        qid, "Easy", 3, "numeric", ["components", "resolving"],
        f"A ball is projected with speed ${uv}\\,\\text{{m s}}^{{-1}}$ at ${av}°$ above the horizontal. "
        f"Find $u_x$ and $u_y$, the horizontal and vertical components of the initial velocity.",
        [
            step(1, "Resolve horizontally", f"u_x = {uv}\\cos {av}°",
                 "Horizontal speed uses cosine of the angle."),
            step(2, "Calculate $u_x$", f"u_x = {fmt(ux_v)}\\,\\text{{m s}}^{{-1}}",
                 f"$u_x = {fmt(ux_v)}\\,\\text{{m s}}^{{-1}}$."),
            step(3, "Resolve vertically", f"u_y = {uv}\\sin {av}°",
                 "Vertical speed uses sine of the angle."),
            step(4, "Calculate $u_y$", f"u_y = {fmt(uy_v)}\\,\\text{{m s}}^{{-1}}",
                 f"$u_y = {fmt(uy_v)}\\,\\text{{m s}}^{{-1}}$."),
            step(5, "Note signs", "\\text{Both components positive for projection above horizontal}",
                 "The angle is above the horizontal, so both components are positive initially."),
            step(6, "Answer", f"u_x = {fmt(ux_v)}, \\quad u_y = {fmt(uy_v)}",
                 f"Components: ${fmt(ux_v)}\\,\\text{{m s}}^{{-1}}$ and ${fmt(uy_v)}\\,\\text{{m s}}^{{-1}}$."),
        ],
        f"$u_x = {fmt(ux_v)}\\,\\text{{m s}}^{{-1}}$, $u_y = {fmt(uy_v)}\\,\\text{{m s}}^{{-1}}$",
    ))

# q009-q012: horizontal projection from cliff - time to hit ground
horiz_cases = [
    ("q009", 80, 10), ("q010", 45, 15), ("q011", 125, 8), ("q012", 20, 20),
]
for qid, h, u_horiz in horiz_cases:
    t = math.sqrt(2 * h / G)
    R = u_horiz * t
    questions.append(make_q(
        qid, "Easy", 4, "numeric", ["horizontal-projection", "time-of-flight", "cliff"],
        f"A stone is projected horizontally with speed ${u_horiz}\\,\\text{{m s}}^{{-1}}$ from the top of "
        f"a cliff ${h}\\,\\text{{m}}$ high. Taking $g = {G}\\,\\text{{m s}}^{{-2}}$, find the time taken "
        f"to reach the ground.",
        [
            step(1, "Model the vertical motion", "y = h - \\tfrac{1}{2}gt^2",
                 "Taking the ground as $y = 0$, the vertical displacement is $h - \\tfrac{1}{2}gt^2$."),
            step(2, "Set $y = 0$ at impact", "0 = h - \\tfrac{1}{2}gt^2",
                 "When the stone hits the ground, vertical displacement from the launch point is $-h$."),
            step(3, "Rearrange for $t$", f"\\tfrac{{1}}{{2}}gt^2 = {h}",
                 f"$\\tfrac{{1}}{{2}}gt^2 = {h}$."),
            step(4, "Solve for $t$", f"t = \\sqrt{{\\dfrac{{2h}}{{g}}}} = \\sqrt{{\\dfrac{{{2*h}}}{{{G}}}}} = {fmt(t)}\\,\\text{{s}}",
                 f"$t = {fmt(t)}\\,\\text{{s}}$."),
            step(5, "Note horizontal motion", f"x = {u_horiz}t = {fmt(R)}\\,\\text{{m}}",
                 f"In this time the stone travels ${fmt(R)}\\,\\text{{m}}$ horizontally."),
            step(6, "Answer", f"t = {fmt(t)}\\,\\text{{s}}",
                 f"Time to reach the ground: ${fmt(t)}\\,\\text{{s}}$."),
        ],
        f"$t = {fmt(t)}\\,\\text{{s}}$",
    ))

# q013-q016: horizontal projection - range
range_horiz_cases = [
    ("q013", 50, 12), ("q014", 80, 20), ("q015", 45, 25), ("q016", 20, 30),
]
for qid, h, u_horiz in range_horiz_cases:
    t = math.sqrt(2 * h / G)
    R = u_horiz * t
    questions.append(make_q(
        qid, "Easy", 4, "numeric", ["horizontal-projection", "range"],
        f"A ball is projected horizontally at ${u_horiz}\\,\\text{{m s}}^{{-1}}$ from a platform "
        f"${h}\\,\\text{{m}}$ above level ground. Taking $g = {G}\\,\\text{{m s}}^{{-2}}$, "
        f"find the horizontal distance travelled before hitting the ground.",
        [
            step(1, "Find time to reach the ground", f"t = \\sqrt{{\\dfrac{{2h}}{{g}}}} = \\sqrt{{\\dfrac{{{2*h}}}{{{G}}}}} = {fmt(t)}\\,\\text{{s}}",
                 f"Vertical SUVAT gives $t = {fmt(t)}\\,\\text{{s}}$."),
            step(2, "Horizontal speed is constant", f"u_x = {u_horiz}\\,\\text{{m s}}^{{-1}}",
                 "No horizontal acceleration, so speed stays at the launch value."),
            step(3, "Calculate horizontal distance", f"R = u_x \\times t = {u_horiz} \\times {fmt(t)}",
                 "Range equals horizontal speed multiplied by flight time."),
            step(4, "Evaluate", f"R = {fmt(R)}\\,\\text{{m}}",
                 f"Horizontal distance: ${fmt(R)}\\,\\text{{m}}$."),
            step(5, "Interpret", f"\\text{{The ball lands {fmt(R)} m from the base of the platform}}",
                 "This is the horizontal range from the point directly below the launch."),
            step(6, "Answer", f"R = {fmt(R)}\\,\\text{{m}}",
                 f"Range $= {fmt(R)}\\,\\text{{m}}$."),
        ],
        f"$R = {fmt(R)}\\,\\text{{m}}$",
    ))

# q017: time to max height (angled)
u17, a17 = 24, 40
t_max = u17 * math.sin(rad(a17)) / G
questions.append(make_q(
    "q017", "Easy", 4, "numeric", ["time-to-max-height", "vertical-motion"],
    f"A particle is projected with speed ${u17}\\,\\text{{m s}}^{{-1}}$ at ${a17}°$ above the horizontal. "
    f"Taking $g = {G}\\,\\text{{m s}}^{{-2}}$, find the time taken to reach the greatest height.",
    [
        step(1, "Vertical initial speed", f"u_y = {u17}\\sin {a17}° = {fmt(u17 * math.sin(rad(a17)))}\\,\\text{{m s}}^{{-1}}",
             f"$u_y = {fmt(u17 * math.sin(rad(a17)))}\\,\\text{{m s}}^{{-1}}$."),
        step(2, "At greatest height $v_y = 0$", "v_y = u_y - gt = 0",
             "Vertical velocity becomes zero at the top of the trajectory."),
        step(3, "Solve for $t$", f"t = \\dfrac{{u_y}}{{g}} = \\dfrac{{{fmt(u17 * math.sin(rad(a17)))}}}{{{G}}}",
             "Rearranging gives time to maximum height."),
        step(4, "Calculate", f"t = {fmt(t_max)}\\,\\text{{s}}",
             f"$t = {fmt(t_max)}\\,\\text{{s}}$."),
        step(5, "Note symmetry", f"\\text{{Total flight time}} = 2t = {fmt(2*t_max)}\\,\\text{{s}}",
             "For launch and landing at the same height, total time is twice this value."),
        step(6, "Answer", f"t = {fmt(t_max)}\\,\\text{{s}}",
             f"Time to greatest height: ${fmt(t_max)}\\,\\text{{s}}$."),
    ],
    f"$t = {fmt(t_max)}\\,\\text{{s}}$",
))

# q018: max height (angled)
u18, a18 = 30, 53
H18 = (u18 * math.sin(rad(a18))) ** 2 / (2 * G)
questions.append(make_q(
    "q018", "Easy", 4, "numeric", ["max-height", "vertical-motion"],
    f"A projectile is launched with speed ${u18}\\,\\text{{m s}}^{{-1}}$ at ${a18}°$ above the horizontal. "
    f"Taking $g = {G}\\,\\text{{m s}}^{{-2}}$, find the greatest height reached.",
    [
        step(1, "Use the max height formula", "H = \\dfrac{u_y^2}{2g} = \\dfrac{u^2\\sin^2\\alpha}{2g}",
             "At the top, vertical kinetic energy is converted to gravitational potential."),
        step(2, "Find $u_y$", f"u_y = {u18}\\sin {a18}° = {fmt(u18 * math.sin(rad(a18)))}\\,\\text{{m s}}^{{-1}}",
             f"$u_y = {fmt(u18 * math.sin(rad(a18)))}\\,\\text{{m s}}^{{-1}}$."),
        step(3, "Substitute into the formula",
             f"H = \\dfrac{{({fmt(u18 * math.sin(rad(a18)))})^2}}{{2 \\times {G}}}",
             "Square the vertical component and divide by $2g$."),
        step(4, "Calculate", f"H = {fmt(H18)}\\,\\text{{m}}",
             f"Greatest height: ${fmt(H18)}\\,\\text{{m}}$."),
        step(5, "Alternative via SUVAT", f"v_y^2 = u_y^2 - 2gH \\Rightarrow H = {fmt(H18)}\\,\\text{{m}}",
             "Using $v_y = 0$ at the top gives the same result."),
        step(6, "Answer", f"H = {fmt(H18)}\\,\\text{{m}}",
             f"Maximum height $= {fmt(H18)}\\,\\text{{m}}$."),
    ],
    f"$H = {fmt(H18)}\\,\\text{{m}}$",
))

print(f"Easy section: {len(questions)} questions")

# ══════════════════════════════════════════════════════════════════════════════
# INTERMEDIATE q019–q050: time of flight, range, speed/angle unknowns
# ══════════════════════════════════════════════════════════════════════════════

def angled_full(qid, u, alpha_deg, find="all"):
    a = rad(alpha_deg)
    uy = u * math.sin(a)
    ux = u * math.cos(a)
    T = 2 * uy / G
    H = uy ** 2 / (2 * G)
    R = u ** 2 * math.sin(2 * a) / G

    text = (
        f"A particle is projected from level ground with speed ${u}\\,\\text{{m s}}^{{-1}}$ "
        f"at ${alpha_deg}°$ above the horizontal. Taking $g = {G}\\,\\text{{m s}}^{{-2}}$, "
        f"find (a) the time of flight, (b) the greatest height, and (c) the horizontal range."
    )
    steps = [
        step(1, "Resolve the initial velocity",
             f"u_x = {fmt(ux)}\\,\\text{{m s}}^{{-1}}, \\quad u_y = {fmt(uy)}\\,\\text{{m s}}^{{-1}}",
             f"Horizontal: ${fmt(ux)}\\,\\text{{m s}}^{{-1}}$; vertical: ${fmt(uy)}\\,\\text{{m s}}^{{-1}}$."),
        step(2, "Part (a): time of flight", "T = \\dfrac{2u_y}{g}",
             "Time to go up equals time to come down; total time is $2u_y/g$."),
        step(3, "Calculate time of flight", f"T = \\dfrac{{2 \\times {fmt(uy)}}}{{{G}}} = {fmt(T)}\\,\\text{{s}}",
             f"(a) $T = {fmt(T)}\\,\\text{{s}}$."),
        step(4, "Part (b): greatest height", "H = \\dfrac{u_y^2}{2g}",
             "Use vertical SUVAT with $v_y = 0$ at the top."),
        step(5, "Calculate greatest height", f"H = \\dfrac{{({fmt(uy)})^2}}{{2 \\times {G}}} = {fmt(H)}\\,\\text{{m}}",
             f"(b) $H = {fmt(H)}\\,\\text{{m}}$."),
        step(6, "Part (c): horizontal range", "R = u_x \\times T",
             "Range equals horizontal speed times time of flight."),
        step(7, "Calculate range", f"R = {fmt(ux)} \\times {fmt(T)} = {fmt(R)}\\,\\text{{m}}",
             f"(c) $R = {fmt(R)}\\,\\text{{m}}$."),
        step(8, "Verify range formula", f"R = \\dfrac{{u^2\\sin 2\\alpha}}{{g}} = {fmt(R)}\\,\\text{{m}}",
             f"Using $R = u^2\\sin 2\\alpha / g$ confirms ${fmt(R)}\\,\\text{{m}}$."),
        step(9, "Summarise", f"T = {fmt(T)}\\,\\text{{s}}, \\quad H = {fmt(H)}\\,\\text{{m}}, \\quad R = {fmt(R)}\\,\\text{{m}}",
             "All three key projectile quantities found from resolving and SUVAT."),
    ]
    return make_q(qid, "Intermediate", 6, "written",
        ["time-of-flight", "max-height", "range", "angled-projection"],
        text, steps,
        f"(a) $T = {fmt(T)}\\,\\text{{s}}$; (b) $H = {fmt(H)}\\,\\text{{m}}$; (c) $R = {fmt(R)}\\,\\text{{m}}$.")


angled_cases = [
    ("q019", 20, 30), ("q020", 25, 45), ("q021", 15, 60),
    ("q022", 30, 40), ("q023", 18, 50), ("q024", 35, 25),
    ("q025", 22, 70), ("q026", 40, 35),
]
for args in angled_cases:
    questions.append(angled_full(*args))

# q027-q032: find u given range and angle
for i, (qid, R_given, alpha_deg) in enumerate([
    ("q027", 40, 30), ("q028", 60, 45), ("q029", 25, 60),
    ("q030", 80, 25), ("q031", 50, 40), ("q032", 35, 50),
]):
    a = rad(alpha_deg)
    sin2a = math.sin(2 * a)
    u_sq = R_given * G / sin2a
    u_found = math.sqrt(u_sq)
    steps = [
        step(1, "Recall the range formula", "R = \\dfrac{u^2\\sin 2\\alpha}{g}",
             "For launch from level ground, range depends on $u$, $\\alpha$, and $g$."),
        step(2, "Substitute known values", f"{R_given} = \\dfrac{{u^2 \\sin {2*alpha_deg}°}}{{{G}}}",
             f"$R = {R_given}\\,\\text{{m}}$, $\\alpha = {alpha_deg}°$."),
        step(3, "Rearrange for $u^2$", f"u^2 = \\dfrac{{{R_given} \\times {G}}}{{\\sin {2*alpha_deg}°}} = {fmt(u_sq, 1)}",
             f"$u^2 = {fmt(u_sq, 1)}$."),
        step(4, "Take the square root", f"u = {fmt(u_found)}\\,\\text{{m s}}^{{-1}}",
             f"$u = {fmt(u_found)}\\,\\text{{m s}}^{{-1}}$."),
        step(5, "Verify the range",
             f"R = \\dfrac{{{fmt(u_found)}^2 \\times \\sin {2*alpha_deg}°}}{{{G}}} = {fmt(u_found**2 * sin2a / G)}\\,\\text{{m}}",
             "Substituting back confirms the given range."),
        step(6, "Check $u > 0$", f"u = {fmt(u_found)} > 0",
             "Speed must be positive."),
        step(7, "Note two angles give same range",
             f"\\alpha = {alpha_deg}° \\text{{ and }} {90-alpha_deg}° \\text{{ give the same range for fixed }} u",
             "Complementary angles produce the same horizontal range."),
        step(8, "Answer", f"u = {fmt(u_found)}\\,\\text{{m s}}^{{-1}}",
             f"Initial speed: ${fmt(u_found)}\\,\\text{{m s}}^{{-1}}$."),
        step(9, "Method summary",
             "\\text{Range formula } \\Rightarrow \\text{ solve for } u",
             "When range and angle are known, rearrange $R = u^2\\sin 2\\alpha/g$."),
    ]
    questions.append(make_q(qid, "Intermediate", 5, "numeric",
        ["range-formula", "find-speed"],
        f"A particle is projected from level ground at ${alpha_deg}°$ above the horizontal "
        f"and lands ${R_given}\\,\\text{{m}}$ away. Taking $g = {G}\\,\\text{{m s}}^{{-2}}$, "
        f"find the initial speed.",
        steps, f"$u = {fmt(u_found)}\\,\\text{{m s}}^{{-1}}$"))


# q033-q036: height at given horizontal distance
for qid, u, alpha_deg, x_target in [
    ("q033", 20, 30, 15), ("q034", 25, 45, 20),
    ("q035", 30, 40, 25), ("q036", 18, 60, 10),
]:
    a = rad(alpha_deg)
    ux = u * math.cos(a)
    uy = u * math.sin(a)
    t_val = x_target / ux
    y_val = uy * t_val - 0.5 * G * t_val ** 2
    steps = [
        step(1, "Horizontal motion", f"u_x = {fmt(ux)}\\,\\text{{m s}}^{{-1}}",
             f"Horizontal speed: ${fmt(ux)}\\,\\text{{m s}}^{{-1}}$."),
        step(2, "Find time to reach $x = x_target$", f"t = \\dfrac{{x}}{{u_x}} = \\dfrac{{{x_target}}}{{{fmt(ux)}}} = {fmt(t_val)}\\,\\text{{s}}",
             f"When $x = {x_target}\\,\\text{{m}}$, $t = {fmt(t_val)}\\,\\text{{s}}$."),
        step(3, "Vertical motion equation", "y = u_y t - \\tfrac{1}{2}gt^2",
             "Substitute the time into the vertical displacement formula."),
        step(4, "Substitute", f"y = {fmt(uy)} \\times {fmt(t_val)} - \\tfrac{{1}}{{2}} \\times {G} \\times ({fmt(t_val)})^2",
             f"$u_y = {fmt(uy)}\\,\\text{{m s}}^{{-1}}$."),
        step(5, "Calculate", f"y = {fmt(y_val)}\\,\\text{{m}}",
             f"Height at $x = {x_target}\\,\\text{{m}}$: ${fmt(y_val)}\\,\\text{{m}}$."),
        step(6, "Check $y \\ge 0$", f"y = {fmt(y_val)} \\ge 0",
             "The particle is still above ground at this point."),
        step(7, "Alternative: trajectory equation",
             f"y = x\\tan\\alpha - \\dfrac{{gx^2}}{{2u^2\\cos^2\\alpha}}",
             "The Cartesian equation of the path gives the same height."),
        step(8, "Interpret", f"\\text{{At {x_target} m horizontally, height is {fmt(y_val)} m}}",
             "This is a point on the parabolic trajectory."),
        step(9, "Answer", f"y = {fmt(y_val)}\\,\\text{{m}}",
             f"Height $= {fmt(y_val)}\\,\\text{{m}}$."),
    ]
    questions.append(make_q(qid, "Intermediate", 5, "numeric",
        ["trajectory", "height-at-distance"],
        f"A particle is projected with speed ${u}\\,\\text{{m s}}^{{-1}}$ at ${alpha_deg}°$ above the horizontal "
        f"from level ground. Taking $g = {G}\\,\\text{{m s}}^{{-2}}$, find the height of the particle when "
        f"it is ${x_target}\\,\\text{{m}}$ horizontally from the launch point.",
        steps, f"$y = {fmt(y_val)}\\,\\text{{m}}$"))


# q037-q040: speed at max height
for qid, u, alpha_deg in [
    ("q037", 24, 40), ("q038", 30, 53), ("q039", 20, 60), ("q040", 35, 25),
]:
    a = rad(alpha_deg)
    v_at_top = u * math.cos(a)
    steps = [
        step(1, "At greatest height", "v_y = 0",
             "The vertical component of velocity is zero at the top of the path."),
        step(2, "Horizontal speed is unchanged", "v_x = u_x = u\\cos\\alpha",
             "No horizontal acceleration means $v_x$ stays constant throughout."),
        step(3, "Speed at the top", "v = v_x = u\\cos\\alpha",
             "When $v_y = 0$, the speed equals the horizontal component."),
        step(4, "Substitute", f"v = {u}\\cos {alpha_deg}°",
             f"$u = {u}\\,\\text{{m s}}^{{-1}}$, $\\alpha = {alpha_deg}°$."),
        step(5, "Calculate", f"v = {fmt(v_at_top)}\\,\\text{{m s}}^{{-1}}",
             f"Speed at greatest height: ${fmt(v_at_top)}\\,\\text{{m s}}^{{-1}}$."),
        step(6, "Compare with launch speed",
             f"v = {fmt(v_at_top)} < u = {u}",
             "Speed is less than at launch because the vertical component has been lost."),
        step(7, "Energy interpretation",
             "\\text{Vertical KE converted to gravitational PE}",
             "Kinetic energy decreases as the particle rises."),
        step(8, "Note direction", "\\text{Velocity is purely horizontal at the top}",
             "The velocity vector points horizontally at the maximum height."),
        step(9, "Answer", f"v = {fmt(v_at_top)}\\,\\text{{m s}}^{{-1}}",
             f"Speed at greatest height $= {fmt(v_at_top)}\\,\\text{{m s}}^{{-1}}$."),
    ]
    questions.append(make_q(qid, "Intermediate", 4, "numeric",
        ["max-height", "speed", "components"],
        f"A particle is projected with speed ${u}\\,\\text{{m s}}^{{-1}}$ at ${alpha_deg}°$ above the horizontal. "
        f"Find the speed of the particle at its greatest height.",
        steps, f"$v = {fmt(v_at_top)}\\,\\text{{m s}}^{{-1}}$"))


# q041-q044: time of flight only (varied)
tof_cases = [
    ("q041", 20, 30), ("q042", 25, 45), ("q043", 15, 60), ("q044", 32, 40),
]
for qid, u, alpha_deg in tof_cases:
    uy = u * math.sin(rad(alpha_deg))
    T = 2 * uy / G
    questions.append(make_q(
        qid, "Intermediate", 4, "numeric", ["time-of-flight"],
        f"A ball is projected from ground level with speed ${u}\\,\\text{{m s}}^{{-1}}$ at ${alpha_deg}°$ "
        f"above the horizontal. Taking $g = {G}\\,\\text{{m s}}^{{-2}}$, find the time of flight.",
        [
            step(1, "Vertical component", f"u_y = {u}\\sin {alpha_deg}° = {fmt(uy)}\\,\\text{{m s}}^{{-1}}",
                 f"$u_y = {fmt(uy)}\\,\\text{{m s}}^{{-1}}$."),
            step(2, "Time of flight formula", "T = \\dfrac{2u_y}{g}",
                 "Launch and landing at the same height: total time is twice the time to max height."),
            step(3, "Substitute", f"T = \\dfrac{{2 \\times {fmt(uy)}}}{{{G}}}",
                 "Substitute $u_y$ and $g$."),
            step(4, "Calculate", f"T = {fmt(T)}\\,\\text{{s}}",
                 f"$T = {fmt(T)}\\,\\text{{s}}$."),
            step(5, "Check via symmetry", f"t_{{\\text{{up}}}} = \\dfrac{{u_y}}{{g}} = {fmt(uy/G)}\\,\\text{{s}}",
                 f"Time to top is ${fmt(uy/G)}\\,\\text{{s}}$; double gives ${fmt(T)}\\,\\text{{s}}$."),
            step(6, "Horizontal distance in this time",
                 f"R = u\\cos\\alpha \\times T = {fmt(u * math.cos(rad(alpha_deg)) * T)}\\,\\text{{m}}",
                 "Range can be found once time of flight is known."),
            step(7, "Verify landing", "y = u_y T - \\tfrac{1}{2}gT^2 = 0",
                 "Substituting $T = 2u_y/g$ gives $y = 0$, confirming return to ground level."),
            step(8, "Answer", f"T = {fmt(T)}\\,\\text{{s}}",
                 f"Time of flight $= {fmt(T)}\\,\\text{{s}}$."),
            step(9, "Physical meaning",
                 f"\\text{{The ball is in the air for {fmt(T)} s}}",
                 "This is the total duration from launch to landing."),
        ],
        f"$T = {fmt(T)}\\,\\text{{s}}$",
    ))

# q045-q048: range formula direct
range_cases = [
    ("q045", 20, 30), ("q046", 25, 45), ("q047", 30, 40), ("q048", 18, 60),
]
for qid, u, alpha_deg in range_cases:
    a = rad(alpha_deg)
    R = u ** 2 * math.sin(2 * a) / G
    questions.append(make_q(
        qid, "Intermediate", 5, "numeric", ["range-formula"],
        f"A particle is projected from level ground with speed ${u}\\,\\text{{m s}}^{{-1}}$ at ${alpha_deg}°$ "
        f"above the horizontal. Taking $g = {G}\\,\\text{{m s}}^{{-2}}$, find the horizontal range.",
        [
            step(1, "State the range formula", "R = \\dfrac{u^2\\sin 2\\alpha}{g}",
                 "For projection from and to the same horizontal level."),
            step(2, "Calculate $\\sin 2\\alpha$", f"\\sin {2*alpha_deg}° = {fmt(math.sin(2*a), 4)}",
                 f"$\\sin {2*alpha_deg}° = {fmt(math.sin(2*a), 4)}$."),
            step(3, "Substitute into the formula",
                 f"R = \\dfrac{{{u}^2 \\times {fmt(math.sin(2*a), 4)}}}{{{G}}}",
                 f"$u = {u}\\,\\text{{m s}}^{{-1}}$."),
            step(4, "Evaluate", f"R = {fmt(R)}\\,\\text{{m}}",
                 f"Range $= {fmt(R)}\\,\\text{{m}}$."),
            step(5, "Alternative method", f"R = u_x \\times T = {fmt(u * math.cos(a))} \\times {fmt(2*u*math.sin(a)/G)} = {fmt(R)}\\,\\text{{m}}",
                 "Using $R = u\\cos\\alpha \\times 2u\\sin\\alpha/g$ confirms the answer."),
            step(6, "Note maximum range at $45°$",
             "\\text{Maximum range when } \\sin 2\\alpha = 1 \\Rightarrow \\alpha = 45°",
             "$\\sin 2\\alpha$ is maximised at $\\alpha = 45°$."),
            step(7, "Compare with complementary angle",
             f"\\alpha = {90-alpha_deg}° \\text{{ gives the same range}}",
             f"$\\sin {2*alpha_deg}° = \\sin {180-2*alpha_deg}°$."),
            step(8, "Answer", f"R = {fmt(R)}\\,\\text{{m}}",
                 f"Horizontal range $= {fmt(R)}\\,\\text{{m}}$."),
            step(9, "Context",
             f"\\text{{The particle lands {fmt(R)} m from the launch point}}",
             "Measured horizontally along the ground."),
        ],
        f"$R = {fmt(R)}\\,\\text{{m}}$",
    ))

# q049-q050: projection from height (angled)
for qid, u, alpha_deg, h_launch in [
    ("q049", 20, 30, 10), ("q050", 25, 45, 15),
]:
    a = rad(alpha_deg)
    ux = u * math.cos(a)
    uy = u * math.sin(a)
    # y = h + uy*t - g*t^2/2 = 0
    # g*t^2/2 - uy*t - h = 0
    disc = uy ** 2 + 2 * G * h_launch
    T = (uy + math.sqrt(disc)) / G  # positive root
    R = ux * T
    steps = [
        step(1, "Set up vertical motion from height $h$",
             f"y = {h_launch} + u_y t - \\tfrac{{1}}{{2}}gt^2",
             f"Launch height ${h_launch}\\,\\text{{m}}$; ground at $y = 0$."),
        step(2, "Resolve velocity", f"u_x = {fmt(ux)}, \\quad u_y = {fmt(uy)}",
             f"Components: ${fmt(ux)}\\,\\text{{m s}}^{{-1}}$ and ${fmt(uy)}\\,\\text{{m s}}^{{-1}}$."),
        step(3, "Solve $y = 0$ for $t$",
             f"\\tfrac{{1}}{{2}}gt^2 - u_y t - h = 0",
             "Quadratic in $t$; take the positive root."),
        step(4, "Apply the quadratic formula",
             f"t = \\dfrac{{u_y + \\sqrt{{u_y^2 + 2gh}}}}{{g}}",
             "The positive sign gives the time when the particle lands."),
        step(5, "Calculate discriminant", f"u_y^2 + 2gh = {fmt(disc, 1)}",
             f"$u_y^2 + 2gh = {fmt(disc, 1)}$."),
        step(6, "Find time of flight", f"T = {fmt(T)}\\,\\text{{s}}",
             f"$T = {fmt(T)}\\,\\text{{s}}$."),
        step(7, "Calculate horizontal range", f"R = u_x T = {fmt(ux)} \\times {fmt(T)} = {fmt(R)}\\,\\text{{m}}",
             f"Range $= {fmt(R)}\\,\\text{{m}}$."),
        step(8, "Note longer flight than from ground",
             f"T = {fmt(T)}\\,\\text{{s}} > \\dfrac{{2u_y}}{{g}} = {fmt(2*uy/G)}\\,\\text{{s}}",
             "Launching from a height increases the time of flight."),
        step(9, "Verify $y$ at $t = T$", "y = 0",
             "Substituting $T$ back gives zero vertical displacement from ground."),
        step(10, "Answer", f"R = {fmt(R)}\\,\\text{{m}}",
             f"Horizontal range $= {fmt(R)}\\,\\text{{m}}$."),
    ]
    questions.append(make_q(qid, "Intermediate", 6, "numeric",
        ["projection-from-height", "range"],
        f"A particle is projected with speed ${u}\\,\\text{{m s}}^{{-1}}$ at ${alpha_deg}°$ above the horizontal "
        f"from a point ${h_launch}\\,\\text{{m}}$ above level ground. Taking $g = {G}\\,\\text{{m s}}^{{-2}}$, "
        f"find the horizontal range.",
        steps, f"$R = {fmt(R)}\\,\\text{{m}}$"))

print(f"After intermediate: {len(questions)} questions")

# ══════════════════════════════════════════════════════════════════════════════
# HARD q051–q070: trajectory equation, angles, barriers, multi-part
# ══════════════════════════════════════════════════════════════════════════════

# q051: trajectory equation
u51, a51 = 20, 30
a51r = rad(a51)
traj_coeff = G / (2 * u51 ** 2 * math.cos(a51r) ** 2)
x51 = 10
y51 = x51 * math.tan(a51r) - traj_coeff * x51 ** 2
questions.append(make_q(
    "q051", "Hard", 7, "numeric", ["trajectory-equation", "cartesian"],
    f"A particle is projected with speed ${u51}\\,\\text{{m s}}^{{-1}}$ at ${a51}°$ above the horizontal "
    f"from the origin. Taking $g = {G}\\,\\text{{m s}}^{{-2}}$, use the equation of the trajectory "
    f"$y = x\\tan\\alpha - \\dfrac{{gx^2}}{{2u^2\\cos^2\\alpha}}$ to find the height when $x = {x51}\\,\\text{{m}}$.",
    [
        step(1, "State the trajectory equation", "y = x\\tan\\alpha - \\dfrac{gx^2}{2u^2\\cos^2\\alpha}",
             "This Cartesian form eliminates $t$ and gives $y$ as a function of $x$."),
        step(2, "Identify known values",
             f"u = {u51}, \\quad \\alpha = {a51}°, \\quad x = {x51}\\,\\text{{m}}",
             "Substitute these into the equation."),
        step(3, "Calculate $\\tan\\alpha$", f"\\tan {a51}° = {fmt(math.tan(a51r), 4)}",
             f"$\\tan {a51}° = {fmt(math.tan(a51r), 4)}$."),
        step(4, "Calculate the coefficient of $x^2$",
             f"\\dfrac{{g}}{{2u^2\\cos^2\\alpha}} = {fmt(traj_coeff, 5)}",
             f"Coefficient: ${fmt(traj_coeff, 5)}$."),
        step(5, "Substitute $x = {x51}$",
             f"y = {x51} \\times {fmt(math.tan(a51r), 4)} - {fmt(traj_coeff, 5)} \\times {x51}^2",
             "Evaluate each term."),
        step(6, "Calculate", f"y = {fmt(y51)}\\,\\text{{m}}",
             f"Height: ${fmt(y51)}\\,\\text{{m}}$."),
        step(7, "Verify with parametric method",
             f"t = x/u_x = {fmt(x51/(u51*math.cos(a51r)))}\\,\\text{{s}}, \\quad y = {fmt(y51)}\\,\\text{{m}}",
             "Using $t = x/u_x$ in $y = u_y t - \\tfrac{1}{2}gt^2$ gives the same answer."),
        step(8, "Note the parabolic shape",
             "y = Ax - Bx^2 \\quad (\\text{parabola})",
             "The trajectory is a parabola opening downward."),
        step(9, "State the domain", f"0 \\le x \\le R",
             "Valid for $x$ between launch and landing."),
        step(10, "Check $y > 0$", f"y = {fmt(y51)} > 0",
             "The point is above ground."),
        step(11, "Interpret", f"\\text{{At }} x = {x51}\\,\\text{{m, height is }} {fmt(y51)}\\,\\text{{m}}",
             "A point on the flight path."),
        step(12, "Answer", f"y = {fmt(y51)}\\,\\text{{m}}",
             f"Height $= {fmt(y51)}\\,\\text{{m}}$."),
        step(13, "When to use this equation",
             "\\text{Use when given } x \\text{ and needing } y \\text{ without finding } t",
             "The trajectory equation is efficient for clearance problems."),
    ],
    f"$y = {fmt(y51)}\\,\\text{{m}}$",
))

# q052-q055: find angle given range and speed (two solutions)
for qid, u, R_target in [
    ("q052", 20, 30), ("q053", 25, 40), ("q054", 30, 50), ("q055", 15, 12),
]:
    sin2a = R_target * G / (u ** 2)
    if sin2a > 1:
        sin2a = min(sin2a, 1)
    alpha1 = deg(math.asin(sin2a) / 2)
    alpha2 = 90 - alpha1
    steps = [
        step(1, "Use the range formula", "R = \\dfrac{u^2\\sin 2\\alpha}{g}",
             "Rearrange to find the angle."),
        step(2, "Rearrange for $\\sin 2\\alpha$", f"\\sin 2\\alpha = \\dfrac{{Rg}}{{u^2}} = {fmt(sin2a, 4)}",
             f"$\\sin 2\\alpha = {fmt(sin2a, 4)}$."),
        step(3, "Find $2\\alpha$", f"2\\alpha = \\sin^{{-1}}({fmt(sin2a, 4)})",
             "Take the inverse sine."),
        step(4, "First solution", f"\\alpha = {fmt(alpha1, 1)}°",
             f"One angle: $\\alpha = {fmt(alpha1, 1)}°$."),
        step(5, "Second solution from symmetry",
             f"\\alpha = 90° - {fmt(alpha1, 1)}° = {fmt(alpha2, 1)}°",
             f"Complementary angle: $\\alpha = {fmt(alpha2, 1)}°$."),
        step(6, "Verify first angle",
             f"R = \\dfrac{{{u}^2 \\sin {fmt(2*alpha1,1)}°}}{{{G}}} = {fmt(u**2*math.sin(rad(2*alpha1))/G)}\\,\\text{{m}}",
             "Confirms the range for the first angle."),
        step(7, "Verify second angle",
             f"R = \\dfrac{{{u}^2 \\sin {fmt(2*alpha2,1)}°}}{{{G}}} = {fmt(u**2*math.sin(rad(2*alpha2))/G)}\\,\\text{{m}}",
             "Both angles give the same range."),
        step(8, "Physical interpretation",
             "\\text{Two launch angles give the same range for fixed speed}",
             "The lower angle gives a flatter, faster trajectory; the higher angle gives a steeper path."),
        step(9, "Identify the lower and higher angles",
             f"\\alpha_1 = {fmt(alpha1, 1)}°, \\quad \\alpha_2 = {fmt(alpha2, 1)}°",
             f"Lower: ${fmt(alpha1, 1)}°$; higher: ${fmt(alpha2, 1)}°$."),
        step(10, "Note maximum possible range",
             f"R_{{\\max}} = \\dfrac{{u^2}}{{g}} = {fmt(u**2/G)}\\,\\text{{m}} \\text{{ at }} \\alpha = 45°",
             "The given range must not exceed this."),
        step(11, "Check feasibility", f"{R_target} \\le {fmt(u**2/G)}",
             "The target range is achievable."),
        step(12, "Answer",
             f"\\alpha = {fmt(alpha1, 1)}° \\text{{ or }} {fmt(alpha2, 1)}°",
             f"Two possible angles: ${fmt(alpha1, 1)}°$ and ${fmt(alpha2, 1)}°$."),
        step(13, "Exam tip",
             "\\text{Always give both angles unless one is excluded by context}",
             "Unless the problem specifies a low or high trajectory, both are valid."),
    ]
    questions.append(make_q(qid, "Hard", 8, "written",
        ["find-angle", "two-solutions", "range"],
        f"A particle is projected from level ground with speed ${u}\\,\\text{{m s}}^{{-1}}$ "
        f"and lands ${R_target}\\,\\text{{m}}$ away. Taking $g = {G}\\,\\text{{m s}}^{{-2}}$, "
        f"find the two possible angles of projection.",
        steps, f"$\\alpha = {fmt(alpha1, 1)}°$ or $\\alpha = {fmt(alpha2, 1)}°$"))


# q056-q058: clears a wall / barrier
for qid, u, alpha_deg, wall_dist, wall_height in [
    ("q056", 20, 30, 15, 5), ("q057", 25, 45, 20, 8), ("q058", 30, 40, 25, 10),
]:
    a = rad(alpha_deg)
    coeff = G / (2 * u ** 2 * math.cos(a) ** 2)
    y_at_wall = wall_dist * math.tan(a) - coeff * wall_dist ** 2
    clears = y_at_wall > wall_height
    steps = [
        step(1, "Model the trajectory", "y = x\\tan\\alpha - \\dfrac{gx^2}{2u^2\\cos^2\\alpha}",
             "Use the Cartesian equation of the path."),
        step(2, "Substitute $x =$ wall distance",
             f"y = {wall_dist}\\tan {alpha_deg}° - \\dfrac{{{G} \\times {wall_dist}^2}}{{2 \\times {u}^2 \\cos^2 {alpha_deg}°}}",
             f"Find height when $x = {wall_dist}\\,\\text{{m}}$."),
        step(3, "Evaluate $\\tan\\alpha$ and $\\cos\\alpha$",
             f"\\tan {alpha_deg}° = {fmt(math.tan(a), 4)}, \\quad \\cos {alpha_deg}° = {fmt(math.cos(a), 4)}",
             "Trigonometric values for substitution."),
        step(4, "Calculate height at the wall", f"y = {fmt(y_at_wall)}\\,\\text{{m}}",
             f"Trajectory height at the wall: ${fmt(y_at_wall)}\\,\\text{{m}}$."),
        step(5, "Compare with wall height", f"y = {fmt(y_at_wall)}\\,\\text{{m}} \\quad \\text{{vs}} \\quad h_{{\\text{{wall}}}} = {wall_height}\\,\\text{{m}}",
             "Does the projectile clear the obstacle?"),
        step(6, "Conclusion",
             f"\\text{{The projectile {'clears' if clears else 'does not clear'} the wall}}",
             f"{'Height exceeds wall top.' if clears else 'The path is below the wall top at this distance.'}"),
        step(7, "Margin of clearance" if clears else "Shortfall",
             f"\\text{{Clearance = {fmt(y_at_wall - wall_height)} m}}" if clears else f"\\text{{Short by {fmt(wall_height - y_at_wall)} m}}",
             "How much the projectile passes above or below the wall."),
        step(8, "Alternative: find time to wall",
             f"t = \\dfrac{{{wall_dist}}}{{u\\cos\\alpha}} = {fmt(wall_dist/(u*math.cos(a)))}\\,\\text{{s}}",
             "Then use $y = u_y t - \\tfrac{1}{2}gt^2$."),
        step(9, "Confirm with parametric", f"y = {fmt(y_at_wall)}\\,\\text{{m}}",
             "Both methods agree."),
        step(10, "Practical context",
             f"\\text{{Wall at {wall_dist} m, height {wall_height} m}}",
             "Common exam scenario: does the ball clear a fence or building?"),
        step(11, "What if it just clears?",
             f"y = {wall_height} \\Rightarrow \\text{{adjust }} u \\text{{ or }} \\alpha",
             "Setting $y = h_{\\text{wall}}$ finds the minimum speed or angle needed."),
        step(12, "State answer clearly",
             f"\\text{{Projectile {'clears' if clears else 'hits below'} the {wall_height} m wall at {wall_dist} m}}",
             f"{'Clears' if clears else 'Does not clear'} the wall."),
        step(13, "Key technique",
             "\\text{Trajectory equation avoids finding } t \\text{ first}",
             "Substitute the horizontal distance directly into $y(x)$."),
    ]
    questions.append(make_q(qid, "Hard", 7, "written",
        ["clearance", "trajectory", "barrier"],
        f"A particle is projected with speed ${u}\\,\\text{{m s}}^{{-1}}$ at ${alpha_deg}°$ above the horizontal "
        f"from ground level. A vertical wall of height ${wall_height}\\,\\text{{m}}$ stands at a horizontal "
        f"distance of ${wall_dist}\\,\\text{{m}}$ from the launch point. Taking $g = {G}\\,\\text{{m s}}^{{-2}}$, "
        f"determine whether the particle clears the wall.",
        steps,
        f"The projectile {'clears' if clears else 'does not clear'} the wall; height at $x = {wall_dist}\\,\\text{{m}}$ is ${fmt(y_at_wall)}\\,\\text{{m}}$."))


# q059-q062: minimum speed to clear wall
for qid, alpha_deg, wall_dist, wall_height in [
    ("q059", 30, 15, 6), ("q060", 45, 20, 8), ("q061", 40, 18, 7), ("q062", 35, 12, 5),
]:
    a = rad(alpha_deg)
    # y = x tan a - g x^2 / (2 u^2 cos^2 a) >= wall_height
    # u^2 >= g x^2 / (2 cos^2 a (x tan a - h))
    numer = G * wall_dist ** 2
    denom = 2 * math.cos(a) ** 2 * (wall_dist * math.tan(a) - wall_height)
    u_min = math.sqrt(numer / denom)
    steps = [
        step(1, "Set up the clearance condition",
             f"y({wall_dist}) \\ge {wall_height}",
             f"At $x = {wall_dist}\\,\\text{{m}}$, the trajectory must be at least ${wall_height}\\,\\text{{m}}$ high."),
        step(2, "Write the trajectory equation", "y = x\\tan\\alpha - \\dfrac{gx^2}{2u^2\\cos^2\\alpha}",
             "Express height in terms of $u$ and $\\alpha$."),
        step(3, "Substitute the wall position",
             f"{wall_height} = {wall_dist}\\tan {alpha_deg}° - \\dfrac{{{G} \\times {wall_dist}^2}}{{2u^2\\cos^2 {alpha_deg}°}}",
             "Set $y$ equal to the wall height for the minimum-speed case."),
        step(4, "Rearrange for $u^2$",
             f"u^2 = \\dfrac{{gx^2}}{{2\\cos^2\\alpha(x\\tan\\alpha - h)}}",
             "Isolate $u^2$ on one side."),
        step(5, "Calculate the denominator",
             f"x\\tan\\alpha - h = {fmt(wall_dist * math.tan(a) - wall_height)}",
             f"Denominator: ${fmt(wall_dist * math.tan(a) - wall_height)}$."),
        step(6, "Calculate $u^2$", f"u^2 = {fmt(u_min**2, 1)}",
             f"$u^2 = {fmt(u_min**2, 1)}$."),
        step(7, "Find minimum speed", f"u_{{\\min}} = {fmt(u_min)}\\,\\text{{m s}}^{{-1}}",
             f"$u_{{\\min}} = {fmt(u_min)}\\,\\text{{m s}}^{{-1}}$."),
        step(8, "Verify clearance at $u_{min}$",
             f"y = {fmt(wall_height)}\\,\\text{{m}} = h_{{\\text{{wall}}}}",
             "At minimum speed, the trajectory just touches the top of the wall."),
        step(9, "Interpret",
             f"\\text{{Any speed }} u \\ge {fmt(u_min)} \\text{{ clears the wall at angle }} {alpha_deg}°",
             "Faster launches give higher trajectories."),
        step(10, "Check angle is suitable",
             f"\\tan {alpha_deg}° > h/x",
             "Need $x\\tan\\alpha > h$ for a real solution."),
        step(11, "Energy perspective",
             "\\text{More speed } \\Rightarrow \\text{ higher trajectory}",
             "Greater initial kinetic energy allows the particle to rise higher."),
        step(12, "Answer", f"u_{{\\min}} = {fmt(u_min)}\\,\\text{{m s}}^{{-1}}",
             f"Minimum speed: ${fmt(u_min)}\\,\\text{{m s}}^{{-1}}$."),
        step(13, "Exam strategy",
             "\\text{Set } y(x) = h \\text{ and solve for } u",
             "Equality gives the borderline case; inequality gives the minimum."),
    ]
    questions.append(make_q(qid, "Hard", 8, "numeric",
        ["minimum-speed", "clearance", "trajectory"],
        f"A particle is projected at ${alpha_deg}°$ above the horizontal from ground level. "
        f"A wall of height ${wall_height}\\,\\text{{m}}$ is at a horizontal distance of ${wall_dist}\\,\\text{{m}}$. "
        f"Taking $g = {G}\\,\\text{{m s}}^{{-2}}$, find the minimum initial speed needed to clear the wall.",
        steps, f"$u_{{\\min}} = {fmt(u_min)}\\,\\text{{m s}}^{{-1}}$"))


# q063-q066: horizontal projection from cliff - full analysis
for qid, h, u_horiz in [
    ("q063", 100, 15), ("q064", 45, 25), ("q065", 80, 20), ("q066", 60, 30),
]:
    t = math.sqrt(2 * h / G)
    R = u_horiz * t
    vy_final = G * t
    v_final = math.sqrt(u_horiz ** 2 + vy_final ** 2)
    steps = [
        step(1, "Vertical motion: find time to ground",
             f"t = \\sqrt{{\\dfrac{{2h}}{{g}}}} = \\sqrt{{\\dfrac{{{2*h}}}{{{G}}}}} = {fmt(t)}\\,\\text{{s}}",
             f"Time of flight: ${fmt(t)}\\,\\text{{s}}$."),
        step(2, "Horizontal range", f"R = u t = {u_horiz} \\times {fmt(t)} = {fmt(R)}\\,\\text{{m}}",
             f"Range: ${fmt(R)}\\,\\text{{m}}$."),
        step(3, "Vertical velocity at impact", f"v_y = gt = {G} \\times {fmt(t)} = {fmt(vy_final)}\\,\\text{{m s}}^{{-1}}",
             f"Downward speed at impact: ${fmt(vy_final)}\\,\\text{{m s}}^{{-1}}$."),
        step(4, "Horizontal velocity at impact", f"v_x = {u_horiz}\\,\\text{{m s}}^{{-1}}",
             "Unchanged throughout the flight."),
        step(5, "Speed at impact", f"v = \\sqrt{{v_x^2 + v_y^2}} = \\sqrt{{{u_horiz}^2 + {fmt(vy_final)}^2}} = {fmt(v_final)}\\,\\text{{m s}}^{{-1}}",
             f"Impact speed: ${fmt(v_final)}\\,\\text{{m s}}^{{-1}}$."),
        step(6, "Direction at impact",
             f"\\tan\\theta = \\dfrac{{v_y}}{{v_x}} = {fmt(vy_final/u_horiz, 3)}",
             f"Angle below horizontal: $\\theta = {fmt(deg(math.atan(vy_final/u_horiz)), 1)}°$."),
        step(7, "Displacement vector",
             f"\\text{{Horizontal: {fmt(R)} m, vertical: {h} m}}",
             "Total displacement from launch to impact."),
        step(8, "Independence of motions",
             "\\text{Horizontal and vertical calculated separately}",
             "Key principle for all projectile problems."),
        step(9, "Energy check (optional)",
             f"\\tfrac{{1}}{{2}}mv^2 = \\tfrac{{1}}{{2}}mu^2 + mgh",
             "Kinetic energy at impact equals initial KE plus gravitational PE lost."),
        step(10, "Summarise (a) time", f"t = {fmt(t)}\\,\\text{{s}}",
             f"Time: ${fmt(t)}\\,\\text{{s}}$."),
        step(11, "Summarise (b) range", f"R = {fmt(R)}\\,\\text{{m}}",
             f"Range: ${fmt(R)}\\,\\text{{m}}$."),
        step(12, "Summarise (c) impact speed", f"v = {fmt(v_final)}\\,\\text{{m s}}^{{-1}}",
             f"Speed at impact: ${fmt(v_final)}\\,\\text{{m s}}^{{-1}}$."),
        step(13, "Context",
             f"\\text{{Stone falls {h} m while travelling {fmt(R)} m horizontally}}",
             "Typical cliff-projection scenario."),
        step(14, "Method recap",
             "\\text{Find } t \\text{ from vertical, then use for horizontal}",
             "Always solve vertical motion first for horizontal projection."),
        step(15, "Final answers",
             f"t = {fmt(t)}\\,\\text{{s}}, \\quad R = {fmt(R)}\\,\\text{{m}}, \\quad v = {fmt(v_final)}\\,\\text{{m s}}^{{-1}}",
             "Complete description of the motion."),
    ]
    questions.append(make_q(qid, "Hard", 9, "written",
        ["horizontal-projection", "impact-speed", "multi-part"],
        f"A stone is projected horizontally with speed ${u_horiz}\\,\\text{{m s}}^{{-1}}$ from the top of a cliff "
        f"${h}\\,\\text{{m}}$ high. Taking $g = {G}\\,\\text{{m s}}^{{-2}}$, find:\n\n"
        f"(a) the time to hit the ground,\n"
        f"(b) the horizontal distance from the base of the cliff,\n"
        f"(c) the speed of the stone when it hits the ground.",
        steps,
        f"(a) $t = {fmt(t)}\\,\\text{{s}}$; (b) $R = {fmt(R)}\\,\\text{{m}}$; (c) $v = {fmt(v_final)}\\,\\text{{m s}}^{{-1}}$."))


# q067-q070: comprehensive angled projection multi-part
complex_angled = [
    ("q067", 25, 40), ("q068", 30, 35), ("q069", 20, 50), ("q070", 35, 30),
]
for qid, u, alpha_deg in complex_angled:
    a = rad(alpha_deg)
    ux = u * math.cos(a)
    uy = u * math.sin(a)
    t_up = uy / G
    T = 2 * uy / G
    H = uy ** 2 / (2 * G)
    R = ux * T
    v_top = ux
    vy_half = uy - G * (T / 2)
    y_half_T = uy * (T / 2) - 0.5 * G * (T / 2) ** 2

    steps = [
        step(1, "Resolve initial velocity",
             f"u_x = {fmt(ux)}\\,\\text{{m s}}^{{-1}}, \\quad u_y = {fmt(uy)}\\,\\text{{m s}}^{{-1}}",
             f"Components: ${fmt(ux)}\\,\\text{{m s}}^{{-1}}$ horizontal, ${fmt(uy)}\\,\\text{{m s}}^{{-1}}$ vertical."),
        step(2, "(a) Time to greatest height", f"t = \\dfrac{{u_y}}{{g}} = {fmt(t_up)}\\,\\text{{s}}",
             f"Time to top: ${fmt(t_up)}\\,\\text{{s}}$."),
        step(3, "(b) Greatest height", f"H = \\dfrac{{u_y^2}}{{2g}} = {fmt(H)}\\,\\text{{m}}",
             f"Maximum height: ${fmt(H)}\\,\\text{{m}}$."),
        step(4, "(c) Speed at greatest height", f"v = u_x = {fmt(v_top)}\\,\\text{{m s}}^{{-1}}",
             f"Speed at top: ${fmt(v_top)}\\,\\text{{m s}}^{{-1}}$ (horizontal only)."),
        step(5, "(d) Time of flight", f"T = \\dfrac{{2u_y}}{{g}} = {fmt(T)}\\,\\text{{s}}",
             f"Total time: ${fmt(T)}\\,\\text{{s}}$."),
        step(6, "(e) Horizontal range", f"R = u_x T = {fmt(R)}\\,\\text{{m}}",
             f"Range: ${fmt(R)}\\,\\text{{m}}$."),
        step(7, "Verify range formula", f"R = \\dfrac{{u^2\\sin {2*alpha_deg}°}}{{g}} = {fmt(R)}\\,\\text{{m}}",
             "Confirms using $R = u^2\\sin 2\\alpha/g$."),
        step(8, "Height at half the flight time",
             f"y_{{T/2}} = {fmt(y_half_T)}\\,\\text{{m}}",
             f"At $t = T/2$: height $= {fmt(y_half_T)}\\,\\text{{m}}$ (not the maximum)."),
        step(9, "Velocity components at landing",
             f"v_x = {fmt(ux)}\\,\\text{{m s}}^{{-1}}, \\quad v_y = -{fmt(uy)}\\,\\text{{m s}}^{{-1}}",
             "Vertical component is equal in magnitude but opposite to launch."),
        step(10, "Speed at landing equals launch speed",
             f"v_{{\\text{{land}}}} = u = {u}\\,\\text{{m s}}^{{-1}}",
             "Energy conservation: same height means same speed."),
        step(11, "Symmetry of motion",
             "\\text{Time up = time down; speed at landing = launch speed}",
             "The trajectory is symmetric about the maximum height."),
        step(12, "Equation of trajectory",
             f"y = x\\tan {alpha_deg}° - \\dfrac{{gx^2}}{{2u^2\\cos^2 {alpha_deg}°}}",
             "Cartesian form for any point on the path."),
        step(13, "Maximum range comparison",
             f"R_{{\\max}} \\text{{ at }} 45° = {fmt(u**2/G)}\\,\\text{{m}}",
             f"Given range ${fmt(R)}\\,\\text{{m}}$ compared with maximum possible ${fmt(u**2/G)}\\,\\text{{m}}$."),
        step(14, "Summarise key results",
             f"t_{{\\text{{up}}}} = {fmt(t_up)}\\,\\text{{s}}, \\quad H = {fmt(H)}\\,\\text{{m}}, \\quad R = {fmt(R)}\\,\\text{{m}}",
             "The three most commonly requested quantities."),
        step(15, "Final answers",
             f"(a)\\ {fmt(t_up)}\\,\\text{{s}},\\ (b)\\ {fmt(H)}\\,\\text{{m}},\\ (c)\\ {fmt(v_top)}\\,\\text{{m s}}^{{-1}},\\ (d)\\ {fmt(T)}\\,\\text{{s}},\\ (e)\\ {fmt(R)}\\,\\text{{m}}",
             "Complete solution to all parts."),
        step(16, "Problem-solving framework",
             "\\text{Resolve } \\rightarrow \\text{ vertical SUVAT } \\rightarrow \\text{ horizontal } \\times t",
             "Systematic approach for any projectile question."),
    ]
    questions.append(make_q(qid, "Hard", 10, "written",
        ["comprehensive", "angled-projection", "multi-part"],
        f"A particle is projected from level ground with speed ${u}\\,\\text{{m s}}^{{-1}}$ at ${alpha_deg}°$ "
        f"above the horizontal. Taking $g = {G}\\,\\text{{m s}}^{{-2}}$, find:\n\n"
        f"(a) the time to reach greatest height,\n"
        f"(b) the greatest height,\n"
        f"(c) the speed at greatest height,\n"
        f"(d) the time of flight,\n"
        f"(e) the horizontal range.",
        steps,
        f"(a) ${fmt(t_up)}\\,\\text{{s}}$; (b) ${fmt(H)}\\,\\text{{m}}$; (c) ${fmt(v_top)}\\,\\text{{m s}}^{{-1}}$; (d) ${fmt(T)}\\,\\text{{s}}$; (e) ${fmt(R)}\\,\\text{{m}}$."))

# ── Write TypeScript output ───────────────────────────────────────────────────
assert len(questions) == 70, f"Expected 70 questions, got {len(questions)}"

header = '''import { Question } from "@/lib/types";

/**
 * A-Level Maths · Year 2 Mechanics · Projectiles
 * Horizontal and angled projection; resolving; time of flight, range, greatest height;
 * trajectory equation; clearance problems. 70 questions with full worked solutions.
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
