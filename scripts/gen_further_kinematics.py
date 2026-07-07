#!/usr/bin/env python3
"""Generate all 70 questions for Further kinematics subtopic (Year 2 Mechanics)."""
import json
import math

OUT = "/Users/benjaminwalpole/Wisest_Maths_V5/wisest-maths-content/src/data/questions/a-level-maths/year-2-mech/further-kinematics.ts"


def step(n, desc, work, expl, diagram=None):
    return {"stepNumber": n, "description": desc, "workingLatex": work, "explanation": expl, "diagram": diagram}


def make_q(suffix, difficulty, marks, answer_type, tags, text, steps, final, diagram=None):
    return {
        "id": f"al.y2.mech.further-kinematics.{suffix}",
        "level": "A-Level Maths",
        "topic": "Year 2 Mechanics",
        "subtopic": "Further kinematics",
        "subtopicId": "al.y2.mech.further-kinematics",
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
# EASY q001–q018: vector basics, differentiate r to get v and a
# ══════════════════════════════════════════════════════════════════════════════

questions.append(make_q(
    "q001", "Easy", 3, "written", ["vectors", "position", "i-j-notation"],
    "A particle moves in a plane. Explain what is meant by the position vector "
    "$\\mathbf{r} = x\\mathbf{i} + y\\mathbf{j}$ and state how velocity and acceleration "
    "are related to $\\mathbf{r}$ using calculus.",
    [
        step(1, "Define the position vector",
             "\\mathbf{r} = x\\mathbf{i} + y\\mathbf{j}",
             "$\\mathbf{r}$ gives the displacement of the particle from the origin to its current position $(x, y)$."),
        step(2, "Explain the unit vectors", "\\mathbf{i} \\text{ and } \\mathbf{j}",
             "$\\mathbf{i}$ is the unit vector in the $x$-direction; $\\mathbf{j}$ is the unit vector in the $y$-direction."),
        step(3, "Define velocity", "\\mathbf{v} = \\dfrac{\\mathrm{d}\\mathbf{r}}{\\mathrm{d}t}",
             "Velocity is the rate of change of position with respect to time."),
        step(4, "Component form of velocity",
             "\\mathbf{v} = \\dfrac{\\mathrm{d}x}{\\mathrm{d}t}\\mathbf{i} + \\dfrac{\\mathrm{d}y}{\\mathrm{d}t}\\mathbf{j}",
             "Differentiate each component of $\\mathbf{r}$ separately."),
        step(5, "Define acceleration", "\\mathbf{a} = \\dfrac{\\mathrm{d}\\mathbf{v}}{\\mathrm{d}t} = \\dfrac{\\mathrm{d}^2\\mathbf{r}}{\\mathrm{d}t^2}",
             "Acceleration is the rate of change of velocity."),
        step(6, "Summarise the calculus chain",
             "\\mathbf{r} \\xrightarrow{\\text{diff}} \\mathbf{v} \\xrightarrow{\\text{diff}} \\mathbf{a}",
             "Differentiate position to get velocity, and velocity to get acceleration."),
    ],
    "$\\mathbf{r}$ is the position from the origin; $\\mathbf{v} = \\dfrac{\\mathrm{d}\\mathbf{r}}{\\mathrm{d}t}$; $\\mathbf{a} = \\dfrac{\\mathrm{d}\\mathbf{v}}{\\mathrm{d}t}$.",
))

# q002: differentiate r = (3t^2, 2t)
questions.append(make_q(
    "q002", "Easy", 3, "expression", ["differentiation", "velocity", "vectors"],
    "A particle moves so that $\\mathbf{r} = 3t^2\\mathbf{i} + 2t\\mathbf{j}$, where $t$ is in seconds. "
    "Find the velocity vector $\\mathbf{v}$ as a function of $t$.",
    [
        step(1, "Write the position vector", "\\mathbf{r} = 3t^2\\mathbf{i} + 2t\\mathbf{j}",
             "Position in component form."),
        step(2, "Recall the velocity formula", "\\mathbf{v} = \\dfrac{\\mathrm{d}\\mathbf{r}}{\\mathrm{d}t}",
             "Differentiate each component with respect to $t$."),
        step(3, "Differentiate the $\\mathbf{i}$-component", "\\dfrac{\\mathrm{d}}{\\mathrm{d}t}(3t^2) = 6t",
             "Power rule: $6t$."),
        step(4, "Differentiate the $\\mathbf{j}$-component", "\\dfrac{\\mathrm{d}}{\\mathrm{d}t}(2t) = 2",
             "Derivative of $2t$ is $2$."),
        step(5, "Combine", "\\mathbf{v} = 6t\\mathbf{i} + 2\\mathbf{j}",
             "Velocity vector in component form."),
        step(6, "State units", "\\text{m s}^{-1}",
             "Velocity is measured in metres per second."),
    ],
    "$\\mathbf{v} = 6t\\mathbf{i} + 2\\mathbf{j}$ m s$^{-1}$",
))

# q003-q008: differentiate r to get v (varied)
diff_r_cases = [
    ("q003", "4t^2", "3t", "8t", "3", "8t\\mathbf{i} + 3\\mathbf{j}"),
    ("q004", "t^3", "t^2", "3t^2", "2t", "3t^2\\mathbf{i} + 2t\\mathbf{j}"),
    ("q005", "5t", "t^2", "5", "2t", "5\\mathbf{i} + 2t\\mathbf{j}"),
    ("q006", "2t^2 + 1", "4t", "4t", "4", "4t\\mathbf{i} + 4\\mathbf{j}"),
    ("q007", "t^3 - t", "2t", "3t^2 - 1", "2", "(3t^2 - 1)\\mathbf{i} + 2\\mathbf{j}"),
    ("q008", "6t", "t^3", "6", "3t^2", "6\\mathbf{i} + 3t^2\\mathbf{j}"),
]
for qid, rx, ry, vx, vy, v_ans in diff_r_cases:
    questions.append(make_q(
        qid, "Easy", 3, "expression", ["differentiation", "velocity"],
        f"A particle moves with $\\mathbf{{r}} = ({rx})\\mathbf{{i}} + ({ry})\\mathbf{{j}}$. "
        f"Find $\\mathbf{{v}} = \\dfrac{{\\mathrm{{d}}\\mathbf{{r}}}}{{\\mathrm{{d}}t}}$.",
        [
            step(1, "Differentiate $\\mathbf{r}$", f"\\mathbf{{v}} = \\dfrac{{\\mathrm{{d}}\\mathbf{{r}}}}{{\\mathrm{{d}}t}}",
                 "Differentiate each component separately."),
            step(2, "Differentiate $\\mathbf{i}$-component", f"\\dfrac{{\\mathrm{{d}}}}{{\\mathrm{{d}}t}}({rx}) = {vx}",
                 f"$x$-component of velocity: ${vx}$."),
            step(3, "Differentiate $\\mathbf{j}$-component", f"\\dfrac{{\\mathrm{{d}}}}{{\\mathrm{{d}}t}}({ry}) = {vy}",
                 f"$y$-component of velocity: ${vy}$."),
            step(4, "Write velocity vector", f"\\mathbf{{v}} = {v_ans}",
                 "Combine the components."),
            step(5, "Check dimensions", "\\text{Each component has units m s}^{-1}",
                 "Velocity components are rates of change of displacement."),
            step(6, "Answer", f"\\mathbf{{v}} = {v_ans}",
                 f"$\\mathbf{{v}} = {v_ans}$."),
        ],
        f"$\\mathbf{{v}} = {v_ans}$",
    ))

# q009-q012: differentiate v to get a
diff_v_cases = [
    ("q009", "4t", "6", "4", "0", "4\\mathbf{i}"),
    ("q010", "3t^2", "2t", "6t", "2", "6t\\mathbf{i} + 2\\mathbf{j}"),
    ("q011", "5", "t^2", "0", "2t", "2t\\mathbf{j}"),
    ("q012", "2t + 1", "3t", "2", "3", "2\\mathbf{i} + 3\\mathbf{j}"),
]
for qid, vx, vy, ax, ay, a_ans in diff_v_cases:
    questions.append(make_q(
        qid, "Easy", 3, "expression", ["differentiation", "acceleration"],
        f"A particle has velocity $\\mathbf{{v}} = ({vx})\\mathbf{{i}} + ({vy})\\mathbf{{j}}$. "
        f"Find the acceleration $\\mathbf{{a}}$.",
        [
            step(1, "Recall the acceleration formula", "\\mathbf{a} = \\dfrac{\\mathrm{d}\\mathbf{v}}{\\mathrm{d}t}",
                 "Differentiate velocity with respect to time."),
            step(2, "Differentiate $\\mathbf{i}$-component", f"\\dfrac{{\\mathrm{{d}}}}{{\\mathrm{{d}}t}}({vx}) = {ax}",
                 f"$a_x = {ax}$."),
            step(3, "Differentiate $\\mathbf{j}$-component", f"\\dfrac{{\\mathrm{{d}}}}{{\\mathrm{{d}}t}}({vy}) = {ay}",
                 f"$a_y = {ay}$."),
            step(4, "Write acceleration", f"\\mathbf{{a}} = {a_ans}",
                 "Acceleration vector."),
            step(5, "Note the type of acceleration", "\\text{Check each component}",
                 "Constant components mean constant acceleration in that direction." if "t" not in ax+ay else "Acceleration varies with time."),
            step(6, "Answer", f"\\mathbf{{a}} = {a_ans}",
                 f"$\\mathbf{{a}} = {a_ans}$."),
        ],
        f"$\\mathbf{{a}} = {a_ans}$",
    ))

# q013-q016: speed |v|
speed_cases = [
    ("q013", 3, 4, 2, 5), ("q014", 6, 8, 3, 10),
    ("q015", 5, 0, 4, 5), ("q016", 0, 7, 2, 7),
]
for qid, vx_val, vy_val, t_val, speed in speed_cases:
    questions.append(make_q(
        qid, "Easy", 3, "numeric", ["speed", "magnitude"],
        f"At time $t = {t_val}\\,\\text{{s}}$, a particle has velocity $\\mathbf{{v}} = {vx_val}\\mathbf{{i}} + {vy_val}\\mathbf{{j}}$ m s$^{{-1}}$. "
        f"Find the speed of the particle.",
        [
            step(1, "Speed is the magnitude of velocity", "|\\mathbf{v}| = \\sqrt{v_x^2 + v_y^2}",
                 "Speed is a scalar — the size of the velocity vector."),
            step(2, "Identify components", f"v_x = {vx_val}, \\quad v_y = {vy_val}",
                 "Substitute the given components."),
            step(3, "Calculate", f"|\\mathbf{{v}}| = \\sqrt{{{vx_val}^2 + {vy_val}^2}} = \\sqrt{{{vx_val**2 + vy_val**2}}}",
                 f"$= \\sqrt{{{vx_val**2 + vy_val**2}}}$."),
            step(4, "Evaluate", f"|\\mathbf{{v}}| = {speed}\\,\\text{{m s}}^{{-1}}",
                 f"Speed $= {speed}\\,\\text{{m s}}^{{-1}}$."),
            step(5, "Note direction vs speed",
                 "\\text{Speed has no direction; velocity does}",
                 "The particle moves in the direction of $\\mathbf{v}$ at speed $|\\mathbf{v}|$."),
            step(6, "Answer", f"|\\mathbf{{v}}| = {speed}\\,\\text{{m s}}^{{-1}}",
                 f"Speed $= {speed}\\,\\text{{m s}}^{{-1}}$."),
        ],
        f"Speed $= {speed}\\,\\text{{m s}}^{{-1}}$",
    ))

# q017-q018: find v at specific t from r
for qid, rx_fn, ry_fn, t_val, vx_at, vy_at in [
    ("q017", "t^2", "3t", 2, 4, 3),
    ("q018", "2t^2", "t", 3, 12, 1),
]:
    speed = math.sqrt(vx_at**2 + vy_at**2)
    questions.append(make_q(
        qid, "Easy", 4, "numeric", ["velocity", "substitution"],
        f"A particle moves with $\\mathbf{{r}} = {rx_fn}\\mathbf{{i}} + {ry_fn}\\mathbf{{j}}$. "
        f"Find the velocity vector and the speed when $t = {t_val}\\,\\text{{s}}$.",
        [
            step(1, "Differentiate to find $\\mathbf{v}$",
                 f"\\mathbf{{v}} = \\dfrac{{\\mathrm{{d}}\\mathbf{{r}}}}{{\\mathrm{{d}}t}}",
                 f"Differentiate each component."),
            step(2, "Velocity in general",
                 f"\\mathbf{{v}} = {2 if 't^2' in rx_fn else '2'}t\\mathbf{{i}} + 3\\mathbf{{j}}" if qid == "q017" else f"\\mathbf{{v}} = 4t\\mathbf{{i}} + \\mathbf{{j}}",
                 "General velocity vector."),
            step(3, "Substitute $t$", f"t = {t_val}",
                 f"At $t = {t_val}\\,\\text{{s}}$."),
            step(4, "Velocity at $t$", f"\\mathbf{{v}} = {vx_at}\\mathbf{{i}} + {vy_at}\\mathbf{{j}}",
                 f"$\\mathbf{{v}} = {vx_at}\\mathbf{{i}} + {vy_at}\\mathbf{{j}}$."),
            step(5, "Find speed", f"|\\mathbf{{v}}| = \\sqrt{{{vx_at}^2 + {vy_at}^2}} = {fmt(speed)}",
                 f"Speed $= {fmt(speed)}\\,\\text{{m s}}^{{-1}}$."),
            step(6, "Answer", f"\\mathbf{{v}} = {vx_at}\\mathbf{{i}} + {vy_at}\\mathbf{{j}}, \\quad |\\mathbf{{v}}| = {fmt(speed)}\\,\\text{{m s}}^{{-1}}",
                 f"Velocity and speed at $t = {t_val}$."),
        ],
        f"$\\mathbf{{v}} = {vx_at}\\mathbf{{i}} + {vy_at}\\mathbf{{j}}$ m s$^{{-1}}$; speed $= {fmt(speed)}\\,\\text{{m s}}^{{-1}}$",
    ))

print(f"Easy section: {len(questions)} questions")

# ══════════════════════════════════════════════════════════════════════════════
# INTERMEDIATE q019–q050: integration, initial conditions, variable acceleration
# ══════════════════════════════════════════════════════════════════════════════

# q019-q024: integrate a to get v
int_a_cases = [
    ("q019", "4", "0", 0, 0, 3, "4t", "3", "4t\\mathbf{i} + 3\\mathbf{j}"),
    ("q020", "0", "6", 0, 0, 2, "3", "2t", "3\\mathbf{i} + 2t\\mathbf{j}"),
    ("q021", "2t", "4", 0, 0, 1, "t^2", "4t", "t^2\\mathbf{i} + 4t\\mathbf{j}"),
    ("q022", "6", "2t", 0, 0, 4, "6t", "t^2", "6t\\mathbf{i} + t^2\\mathbf{j}"),
    ("q023", "3t", "0", 0, 0, 2, "1.5t^2", "2", "1.5t^2\\mathbf{i} + 2\\mathbf{j}"),
    ("q024", "0", "8", 0, 0, 5, "8t", "5", "8t\\mathbf{i} + 5\\mathbf{j}"),
]
for qid, ax_fn, ay_fn, vx0, vy0, cx, vx_gen, vy_gen, v_ans in int_a_cases:
    questions.append(make_q(
        qid, "Intermediate", 5, "expression", ["integration", "velocity", "initial-conditions"],
        f"A particle moves with acceleration $\\mathbf{{a}} = ({ax_fn})\\mathbf{{i}} + ({ay_fn})\\mathbf{{j}}$ m s$^{{-2}}$. "
        f"Given that $\\mathbf{{v}} = \\mathbf{{0}}$ when $t = 0$, find $\\mathbf{{v}}$ as a function of $t$.",
        [
            step(1, "Integrate acceleration", "\\mathbf{v} = \\int \\mathbf{a}\\,\\mathrm{d}t",
                 "Velocity is the integral of acceleration with respect to time."),
            step(2, "Integrate $\\mathbf{i}$-component", f"\\int {ax_fn}\\,\\mathrm{{d}}t = {vx_gen}",
                 f"$x$-component: ${vx_gen}$ (plus constant)."),
            step(3, "Integrate $\\mathbf{j}$-component", f"\\int {ay_fn}\\,\\mathrm{{d}}t = {vy_gen}",
                 f"$y$-component: ${vy_gen}$ (plus constant)."),
            step(4, "Apply initial condition $\\mathbf{v} = \\mathbf{0}$ at $t = 0$",
                 f"\\mathbf{{v}} = {v_ans}",
                 "Constants of integration are determined by the initial velocity."),
            step(5, "Verify at $t = 0$", "\\mathbf{v} = \\mathbf{0}",
                 "Substituting $t = 0$ gives zero velocity."),
            step(6, "Differentiate to check", f"\\dfrac{{\\mathrm{{d}}\\mathbf{{v}}}}{{\\mathrm{{d}}t}} = ({ax_fn})\\mathbf{{i}} + ({ay_fn})\\mathbf{{j}} = \\mathbf{{a}}",
                 "Differentiating returns the given acceleration."),
            step(7, "Note vector constant of integration",
                 "\\mathbf{v} = \\int \\mathbf{a}\\,\\mathrm{d}t + \\mathbf{c}",
                 "A vector constant is needed when integrating vector acceleration."),
            step(8, "State general method",
                 "\\text{Integrate each component separately}",
                 "Treat $\\mathbf{i}$ and $\\mathbf{j}$ components independently."),
            step(9, "Answer", f"\\mathbf{{v}} = {v_ans}",
                 f"$\\mathbf{{v}} = {v_ans}$."),
        ],
        f"$\\mathbf{{v}} = {v_ans}$ m s$^{{-1}}$",
    ))

# q025-q030: integrate v to get r
int_v_cases = [
    ("q025", "4t", "3", 0, 0, 1, 0, "2t^2", "3t", "2t^2\\mathbf{i} + 3t\\mathbf{j}"),
    ("q026", "6", "2t", 0, 0, 2, 1, "6t", "t^2", "6t\\mathbf{i} + t^2\\mathbf{j} + (2\\mathbf{i} + \\mathbf{j})"),
    ("q027", "3t", "4", 0, 0, 0, 0, "1.5t^2", "4t", "1.5t^2\\mathbf{i} + 4t\\mathbf{j}"),
    ("q028", "5", "0", 0, 0, 3, 2, "5t", "2", "5t\\mathbf{i} + 2\\mathbf{j} + (3\\mathbf{i} + 2\\mathbf{j})"),
    ("q029", "2t", "6", 0, 0, 1, 1, "t^2", "6t", "t^2\\mathbf{i} + 6t\\mathbf{j} + (\\mathbf{i} + \\mathbf{j})"),
    ("q030", "8", "3t", 0, 0, 0, 4, "8t", "1.5t^2", "8t\\mathbf{i} + 1.5t^2\\mathbf{j} + 4\\mathbf{j}"),
]
for qid, vx_fn, vy_fn, x0, y0, rx0, ry0, rx_gen, ry_gen, r_ans in int_v_cases:
  has_offset = "+" in r_ans
  steps = [
      step(1, "Integrate velocity", "\\mathbf{r} = \\int \\mathbf{v}\\,\\mathrm{d}t",
           "Position is the integral of velocity."),
      step(2, "Integrate $\\mathbf{i}$-component", f"\\int ({vx_fn})\\,\\mathrm{{d}}t = {rx_gen}",
           f"$x$-component of displacement."),
      step(3, "Integrate $\\mathbf{j}$-component", f"\\int ({vy_fn})\\,\\mathrm{{d}}t = {ry_gen}",
           f"$y$-component of displacement."),
      step(4, "Apply initial position",
           f"\\mathbf{{r}} = {rx0}\\mathbf{{i}} + {ry0}\\mathbf{{j}} \\text{{ when }} t = 0",
           f"Initial position: $({rx0}, {ry0})$."),
      step(5, "Determine constants", f"\\mathbf{{r}} = {r_ans}",
           "Add vector constant of integration."),
      step(6, "Verify at $t = 0$", f"\\mathbf{{r}} = {rx0}\\mathbf{{i}} + {ry0}\\mathbf{{j}}",
           "Initial condition satisfied."),
      step(7, "Differentiate to check", f"\\dfrac{{\\mathrm{{d}}\\mathbf{{r}}}}{{\\mathrm{{d}}t}} = ({vx_fn})\\mathbf{{i}} + ({vy_fn})\\mathbf{{j}}",
           "Returns the given velocity."),
      step(8, "Distance from origin at general $t$",
           f"|\\mathbf{{r}}| = \\sqrt{{x^2 + y^2}}",
           "Can be found once $\\mathbf{r}$ is known."),
      step(9, "Answer", f"\\mathbf{{r}} = {r_ans}",
           f"$\\mathbf{{r}} = {r_ans}$."),
  ]
  questions.append(make_q(
      qid, "Intermediate", 5, "expression", ["integration", "position", "initial-conditions"],
      f"A particle has velocity $\\mathbf{{v}} = ({vx_fn})\\mathbf{{i}} + ({vy_fn})\\mathbf{{j}}$ m s$^{{-1}}$. "
      f"Given $\\mathbf{{r}} = {rx0}\\mathbf{{i}} + {ry0}\\mathbf{{j}}$ when $t = 0$, find $\\mathbf{{r}}$ as a function of $t$.",
      steps, f"$\\mathbf{{r}} = {r_ans}$ m",
  ))

# q031-q036: full chain a -> v -> r
full_chain = [
    ("q031", "4", "0", 0, 0, 0, 0, 2, "4t", "2t^2"),
    ("q032", "0", "6", 0, 0, 0, 0, 3, "6t", "3t^2"),
    ("q033", "2", "4", 0, 0, 1, 0, 1, "2t+1", "t^2+t"),
    ("q034", "3t", "0", 0, 0, 0, 2, 2, "1.5t^2", "t^2+2"),
    ("q035", "0", "4t", 0, 0, 0, 0, 0, "4t", "2t^2"),
    ("q036", "5", "2", 0, 0, 2, 1, 3, "5t+3", "5t+1"),
]
for qid, ax_c, ay_c, vx0, vy0, rx0, ry0, t_val, vx_fn, rx_fn in full_chain:
    ax, ay = int(ax_c) if ax_c.isdigit() else ax_c, int(ay_c) if ay_c.isdigit() else ay_c
    # compute v and r at t_val
    if ax_c == "3t":
        vx_at_t = 1.5 * t_val**2
        rx_at_t = 0.5 * t_val**3 + rx0
    elif ax_c == "0" and ay_c == "4t":
        vx_at_t = 0
        vy_at_t = 2 * t_val**2
        rx_at_t = rx0
        ry_at_t = (2/3) * t_val**3 + ry0
    else:
        vx_at_t = (int(ax_c) if str(ax_c).isdigit() else 0) * t_val + (3 if qid == "q036" else 0)
        vy_at_t = (int(ay_c) if str(ay_c).isdigit() else 0) * t_val
        rx_at_t = (int(ax_c) if str(ax_c).isdigit() else 0) * 0.5 * t_val**2 + (3*t_val if qid == "q036" else 0) + rx0
        ry_at_t = (int(ay_c) if str(ay_c).isdigit() else 0) * 0.5 * t_val**2 + ry0
        if qid == "q033":
            vx_at_t = 2*t_val + 1
            vy_at_t = 4*t_val
            rx_at_t = t_val**2 + t_val + 1
            ry_at_t = 2*t_val**2
        if qid == "q034":
            vx_at_t = 1.5*t_val**2
            vy_at_t = 2
            rx_at_t = 0.5*t_val**3
            ry_at_t = 2*t_val + 2
        if qid == "q031":
            vx_at_t = 4*t_val; vy_at_t = 0; rx_at_t = 2*t_val**2; ry_at_t = 0
        if qid == "q032":
            vx_at_t = 0; vy_at_t = 6*t_val; rx_at_t = 0; ry_at_t = 3*t_val**2
        if qid == "q035":
            vx_at_t = 0; vy_at_t = 4*t_val; rx_at_t = 0; ry_at_t = 2*t_val**2
        if qid == "q036":
            vx_at_t = 5*t_val+3; vy_at_t = 2*t_val; rx_at_t = 2.5*t_val**2+3*t_val+2; ry_at_t = t_val**2+2*t_val+1

    speed = math.sqrt(vx_at_t**2 + (vy_at_t if 'vy_at_t' in dir() else 0)**2)
    if qid in ("q031",):
        vy_at_t = 0; speed = abs(vx_at_t)
    if qid in ("q032", "q035"):
        speed = abs(vy_at_t)

    steps = [
        step(1, "Integrate $\\mathbf{a}$ to find $\\mathbf{v}$", "\\mathbf{v} = \\int \\mathbf{a}\\,\\mathrm{d}t + \\mathbf{c}_1",
             "First integration with velocity initial conditions."),
        step(2, "Apply $\\mathbf{v} = \\mathbf{0}$ at $t = 0$", f"\\mathbf{{v}} = ({vx_fn})\\mathbf{{i}} + ...",
             "Determine velocity vector."),
        step(3, "Integrate $\\mathbf{v}$ to find $\\mathbf{r}$", "\\mathbf{r} = \\int \\mathbf{v}\\,\\mathrm{d}t + \\mathbf{c}_2",
             "Second integration with position initial conditions."),
        step(4, "Apply initial position", f"\\mathbf{{r}} = {rx0}\\mathbf{{i}} + {ry0}\\mathbf{{j}} \\text{{ at }} t = 0",
             "Fix constants of integration."),
        step(5, f"Find $\\mathbf{{v}}$ at $t = {t_val}$",
             f"\\mathbf{{v}} = {fmt(vx_at_t)}\\mathbf{{i}} + {fmt(vy_at_t if qid not in ('q031',) else 0)}\\mathbf{{j}}",
             f"Velocity at $t = {t_val}$."),
        step(6, f"Find $\\mathbf{{r}}$ at $t = {t_val}$",
             f"\\mathbf{{r}} = {fmt(rx_at_t)}\\mathbf{{i}} + {fmt(ry_at_t)}\\mathbf{{j}}",
             f"Position at $t = {t_val}$."),
        step(7, "Find speed", f"|\\mathbf{{v}}| = {fmt(speed)}\\,\\text{{m s}}^{{-1}}",
             f"Speed $= {fmt(speed)}\\,\\text{{m s}}^{{-1}}$."),
        step(8, "Verify by differentiation",
             "\\dfrac{\\mathrm{d}^2\\mathbf{r}}{\\mathrm{d}t^2} = \\mathbf{a}",
             "Double differentiation of $\\mathbf{r}$ returns $\\mathbf{a}$."),
        step(9, "Summarise",
             f"\\mathbf{{r}} = {fmt(rx_at_t)}\\mathbf{{i}} + {fmt(ry_at_t)}\\mathbf{{j}}, \\quad |\\mathbf{{v}}| = {fmt(speed)}\\,\\text{{m s}}^{{-1}}",
             "Position and speed at the required time."),
    ]
    questions.append(make_q(
        qid, "Intermediate", 6, "written", ["full-chain", "integration", "variable-acceleration"],
        f"A particle moves with $\\mathbf{{a}} = {ax_c}\\mathbf{{i}} + {ay_c}\\mathbf{{j}}$ m s$^{{-2}}$. "
        f"Given $\\mathbf{{v}} = \\mathbf{{0}}$ and $\\mathbf{{r}} = {rx0}\\mathbf{{i}} + {ry0}\\mathbf{{j}}$ when $t = 0$, "
        f"find $\\mathbf{{r}}$ and the speed when $t = {t_val}\\,\\text{{s}}$.",
        steps,
        f"$\\mathbf{{r}} = {fmt(rx_at_t)}\\mathbf{{i}} + {fmt(ry_at_t)}\\mathbf{{j}}$ m; speed $= {fmt(speed)}\\,\\text{{m s}}^{{-1}}$.",
    ))

# q037-q040: find t when v = 0 (one component zero, or speed min)
for qid, ax_d, ay_d, t_zero in [
    ("q037", "2t - 4", "0", 2),
    ("q038", "0", "3t - 12", 4),
    ("q039", "4t - 8", "0", 2),
    ("q040", "0", "6t - 18", 3),
]:
    questions.append(make_q(
        qid, "Intermediate", 5, "numeric", ["velocity-zero", "variable-acceleration"],
        f"A particle moves with acceleration $\\mathbf{{a}} = ({ax_d})\\mathbf{{i}} + ({ay_d})\\mathbf{{j}}$ m s$^{{-2}}$. "
        f"Given $\\mathbf{{v}} = \\mathbf{{0}}$ when $t = 0$, find the time when the velocity next equals $\\mathbf{{0}}$.",
        [
            step(1, "Integrate to find $\\mathbf{v}$", "\\mathbf{v} = \\int \\mathbf{a}\\,\\mathrm{d}t",
                 "Integrate each component."),
            step(2, "Velocity components",
                 f"v_x = t^2 - 4t" if "2t" in ax_d else f"v_y = 1.5t^2 - 12t" if "3t" in ay_d else f"v_x = 2t^2 - 8t" if "4t" in ax_d else f"v_y = 3t^2 - 18t",
                 "General velocity after integrating and applying $\\mathbf{v}(0) = \\mathbf{0}$."),
            step(3, "Set $\\mathbf{v} = \\mathbf{0}$", "v_x = 0 \\text{ and/or } v_y = 0",
                 "Solve for $t$."),
            step(4, "Solve", f"t = 0 \\text{{ or }} t = {t_zero}",
                 f"$t = 0$ (initial) or $t = {t_zero}$."),
            step(5, "Identify the required time", f"t = {t_zero}\\,\\text{{s}}",
                 f"The velocity is zero again at $t = {t_zero}\\,\\text{{s}}$."),
            step(6, "Interpret physically",
                 "\\text{Particle momentarily at rest before reversing direction}",
                 "Zero velocity does not mean zero speed unless both components are zero."),
            step(7, "Check acceleration at $t$",
             f"\\mathbf{{a}} \\neq \\mathbf{{0}} \\text{{ at }} t = {t_zero}",
             "Acceleration is generally non-zero when velocity is zero."),
            step(8, "Sketch idea",
             "\\text{Velocity changes sign at this time}",
             "The particle reverses direction along the relevant axis."),
            step(9, "Answer", f"t = {t_zero}\\,\\text{{s}}",
                 f"$t = {t_zero}\\,\\text{{s}}$."),
        ],
        f"$t = {t_zero}\\,\\text{{s}}$",
    ))

# q041-q044: distance from origin |r|
for qid, rx_at, ry_at, dist in [
    ("q041", 3, 4, 5), ("q042", 6, 8, 10), ("q043", 5, 12, 13), ("q044", 8, 15, 17),
]:
    questions.append(make_q(
        qid, "Intermediate", 4, "numeric", ["distance-from-origin", "magnitude"],
        f"At time $t$, a particle has position $\\mathbf{{r}} = {rx_at}\\mathbf{{i}} + {ry_at}\\mathbf{{j}}$ m. "
        f"Find the distance of the particle from the origin.",
        [
            step(1, "Distance from origin", "|\\mathbf{r}| = \\sqrt{x^2 + y^2}",
                 "Magnitude of the position vector."),
            step(2, "Substitute", f"|\\mathbf{{r}}| = \\sqrt{{{rx_at}^2 + {ry_at}^2}}",
                 f"$x = {rx_at}$, $y = {ry_at}$."),
            step(3, "Calculate", f"|\\mathbf{{r}}| = \\sqrt{{{rx_at**2 + ry_at**2}}} = {dist}",
                 f"$= {dist}\\,\\text{{m}}$."),
            step(4, "Distinguish from displacement travelled",
                 "\\text{This is straight-line distance from } O",
                 "Not the total distance travelled along the path."),
            step(5, "Direction from origin",
             f"\\tan\\theta = \\dfrac{{{ry_at}}}{{{rx_at}}}",
             "Angle of position vector from the $x$-axis."),
            step(6, "Pythagoras triple" if dist in (5, 13) else "Application of Pythagoras",
             f"{rx_at}^2 + {ry_at}^2 = {dist}^2",
             "Standard 3-4-5 or similar triangle." if dist == 5 else "Direct calculation."),
            step(7, "Units", "\\text{metres}",
             "Distance is a scalar length."),
            step(8, "Compare with speed",
             "|\\mathbf{r}| \\neq |\\mathbf{v}| \\text{ in general}",
             "Distance from origin is different from speed."),
            step(9, "Answer", f"|\\mathbf{{r}}| = {dist}\\,\\text{{m}}",
             f"Distance from origin $= {dist}\\,\\text{{m}}$."),
        ],
        f"Distance $= {dist}\\,\\text{{m}}$",
    ))

# q045-q048: bearing / direction of velocity
for qid, vx, vy, bearing_desc, angle in [
    ("q045", 3, 4, "N of E", 53.1),
    ("q046", 5, 5, "NE", 45),
    ("q047", 0, 6, "due N", 90),
    ("q048", 7, 0, "due E", 0),
]:
    speed = math.sqrt(vx**2 + vy**2)
    questions.append(make_q(
        qid, "Intermediate", 5, "written", ["bearing", "direction", "velocity"],
        f"A particle has velocity $\\mathbf{{v}} = {vx}\\mathbf{{i}} + {vy}\\mathbf{{j}}$ m s$^{{-1}}$. "
        f"Find the speed and the direction of motion, measured as a bearing from North.",
        [
            step(1, "Find speed", f"|\\mathbf{{v}}| = \\sqrt{{{vx}^2 + {vy}^2}} = {fmt(speed)}\\,\\text{{m s}}^{{-1}}",
                 f"Speed $= {fmt(speed)}\\,\\text{{m s}}^{{-1}}$."),
            step(2, "Find angle from North", "\\tan\\theta = \\dfrac{v_x}{v_y}",
                 "Bearing is measured clockwise from North; use $\\tan\\theta = v_x / v_y$."),
            step(3, "Calculate", f"\\theta = \\tan^{{-1}}\\!\\left(\\dfrac{{{vx}}}{{{vy}}}\\right)" if vy != 0 else "\\theta = 90°",
                 f"Angle from North."),
            step(4, "Bearing", f"\\text{{Bearing}} \\approx {fmt(angle, 1)}°",
                 f"Bearing $\\approx {fmt(angle, 1)}°$ ({bearing_desc})."),
            step(5, "Direction vector", f"\\mathbf{{v}} = {vx}\\mathbf{{i}} + {vy}\\mathbf{{j}}",
                 "Velocity points in this direction."),
            step(6, "Unit vector in direction of motion",
             f"\\hat{{\\mathbf{{v}}}} = \\dfrac{{\\mathbf{{v}}}}{{|\\mathbf{{v}}|}}",
             "Divide by speed to get a unit vector."),
            step(7, "Interpret bearing",
             "\\text{Bearing is clockwise from North}",
             "In navigation, $000°$ is North, $090°$ is East."),
            step(8, "Compare with angle from $x$-axis",
             f"\\text{{From }} x\\text{{-axis: }} \\tan^{{-1}}(v_y/v_x)",
             "Different reference direction."),
            step(9, "Answer",
             f"\\text{{Speed }} {fmt(speed)}\\,\\text{{m s}}^{{-1}}, \\text{{ bearing }} {fmt(angle, 1)}°",
             f"Speed and bearing."),
        ],
        f"Speed $= {fmt(speed)}\\,\\text{{m s}}^{{-1}}$; bearing $\\approx {fmt(angle, 1)}°$ ({bearing_desc}).",
    ))

# q049-q050: constant acceleration vector (suvat in 2D)
for qid, ux, uy, ax, ay, t_val in [
    ("q049", 4, 3, 2, 0, 2),
    ("q050", 0, 5, 0, 3, 3),
]:
    rx = ux*t_val + 0.5*ax*t_val**2
    ry = uy*t_val + 0.5*ay*t_val**2
    vx = ux + ax*t_val
    vy = uy + ay*t_val
    speed = math.sqrt(vx**2 + vy**2)
    steps = [
        step(1, "Use vector SUVAT", "\\mathbf{r} = \\mathbf{u}t + \\tfrac{1}{2}\\mathbf{a}t^2",
             "Constant acceleration formula in vector form."),
        step(2, "Initial velocity", f"\\mathbf{{u}} = {ux}\\mathbf{{i}} + {uy}\\mathbf{{j}}",
             f"$\\mathbf{{u}} = {ux}\\mathbf{{i}} + {uy}\\mathbf{{j}}$ m s$^{{-1}}$."),
        step(3, "Acceleration", f"\\mathbf{{a}} = {ax}\\mathbf{{i}} + {ay}\\mathbf{{j}}",
             f"$\\mathbf{{a}} = {ax}\\mathbf{{i}} + {ay}\\mathbf{{j}}$ m s$^{{-2}}$."),
        step(4, "Position at $t$", f"\\mathbf{{r}} = ({ux}t + {ax if ax else 0}t^2)\\mathbf{{i}} + ...",
             "Substitute $t$ into the SUVAT formula."),
        step(5, "Calculate $\\mathbf{r}$", f"\\mathbf{{r}} = {fmt(rx)}\\mathbf{{i}} + {fmt(ry)}\\mathbf{{j}}",
             f"$\\mathbf{{r}} = {fmt(rx)}\\mathbf{{i}} + {fmt(ry)}\\mathbf{{j}}$ m."),
        step(6, "Velocity at $t$", f"\\mathbf{{v}} = \\mathbf{{u}} + \\mathbf{{a}}t = {fmt(vx)}\\mathbf{{i}} + {fmt(vy)}\\mathbf{{j}}",
             f"$\\mathbf{{v}} = {fmt(vx)}\\mathbf{{i}} + {fmt(vy)}\\mathbf{{j}}$."),
        step(7, "Speed", f"|\\mathbf{{v}}| = {fmt(speed)}\\,\\text{{m s}}^{{-1}}",
             f"Speed $= {fmt(speed)}\\,\\text{{m s}}^{{-1}}$."),
        step(8, "Component independence",
             "\\text{Each component satisfies SUVAT separately}",
             "$x$ and $y$ motions are independent with constant acceleration."),
        step(9, "Answer",
             f"\\mathbf{{r}} = {fmt(rx)}\\mathbf{{i}} + {fmt(ry)}\\mathbf{{j}}, \\quad |\\mathbf{{v}}| = {fmt(speed)}\\,\\text{{m s}}^{{-1}}",
             "Position and speed at the given time."),
    ]
    questions.append(make_q(
        qid, "Intermediate", 5, "written", ["vector-suvat", "constant-acceleration"],
        f"A particle starts from the origin with initial velocity "
        f"$\\mathbf{{u}} = {ux}\\mathbf{{i}} + {uy}\\mathbf{{j}}$ m s$^{{-1}}$ and constant acceleration "
        f"$\\mathbf{{a}} = {ax}\\mathbf{{i}} + {ay}\\mathbf{{j}}$ m s$^{{-2}}$. "
        f"Find $\\mathbf{{r}}$ and the speed when $t = {t_val}\\,\\text{{s}}$.",
        steps,
        f"$\\mathbf{{r}} = {fmt(rx)}\\mathbf{{i}} + {fmt(ry)}\\mathbf{{j}}$ m; speed $= {fmt(speed)}\\,\\text{{m s}}^{{-1}}$.",
    ))

print(f"After intermediate: {len(questions)} questions")

# ══════════════════════════════════════════════════════════════════════════════
# HARD q051–q070: complex vector calculus, multi-part, perpendicular motion
# ══════════════════════════════════════════════════════════════════════════════

# q051-q054: r = (f(t), g(t)) full analysis at t
hard_r_cases = [
    ("q051", "t^3", "t^2", 2, 12, 4, 6, 4),
    ("q052", "2t^2", "t^3", 3, 12, 9, 12, 18),
    ("q053", "t^2 - t", "2t", 2, 2, 3, 2, 4),
    ("q054", "3t", "t^2 - 4", 3, 3, 6, 9, 2),
]
for qid, rx_fn, ry_fn, t_val, vx, vy, ax, ay in hard_r_cases:
    speed = math.sqrt(vx**2 + vy**2)
    # compute r at t
    if qid == "q051":
        rx_v, ry_v = t_val**3, t_val**2
    elif qid == "q052":
        rx_v, ry_v = 2*t_val**2, t_val**3
    elif qid == "q053":
        rx_v, ry_v = t_val**2 - t_val, 2*t_val
    else:
        rx_v, ry_v = 3*t_val, t_val**2 - 4
    dist = math.sqrt(rx_v**2 + ry_v**2)
    steps = [
        step(1, "Differentiate $\\mathbf{r}$ once for $\\mathbf{v}$",
             "\\mathbf{v} = \\dfrac{\\mathrm{d}\\mathbf{r}}{\\mathrm{d}t}",
             "First derivative of position."),
        step(2, "Velocity at $t$", f"\\mathbf{{v}} = {vx}\\mathbf{{i}} + {vy}\\mathbf{{j}}",
             f"$\\mathbf{{v}} = {vx}\\mathbf{{i}} + {vy}\\mathbf{{j}}$ m s$^{{-1}}$."),
        step(3, "Differentiate again for $\\mathbf{a}$",
             "\\mathbf{a} = \\dfrac{\\mathrm{d}\\mathbf{v}}{\\mathrm{d}t}",
             "Second derivative of position."),
        step(4, "Acceleration at $t$", f"\\mathbf{{a}} = {ax}\\mathbf{{i}} + {ay}\\mathbf{{j}}",
             f"$\\mathbf{{a}} = {ax}\\mathbf{{i}} + {ay}\\mathbf{{j}}$ m s$^{{-2}}$."),
        step(5, "Speed", f"|\\mathbf{{v}}| = {fmt(speed)}\\,\\text{{m s}}^{{-1}}",
             f"Speed $= {fmt(speed)}\\,\\text{{m s}}^{{-1}}$."),
        step(6, "Position at $t$", f"\\mathbf{{r}} = {fmt(rx_v)}\\mathbf{{i}} + {fmt(ry_v)}\\mathbf{{j}}",
             f"$\\mathbf{{r}} = {fmt(rx_v)}\\mathbf{{i}} + {fmt(ry_v)}\\mathbf{{j}}$ m."),
        step(7, "Distance from origin", f"|\\mathbf{{r}}| = {fmt(dist)}\\,\\text{{m}}",
             f"Distance from $O$: ${fmt(dist)}\\,\\text{{m}}$."),
        step(8, "Magnitude of acceleration", f"|\\mathbf{{a}}| = {fmt(math.sqrt(ax**2+ay**2))}\\,\\text{{m s}}^{{-2}}",
             "Scalar acceleration."),
        step(9, "Are $\\mathbf{v}$ and $\\mathbf{a}$ parallel?",
             f"\\mathbf{{v}} \\cdot \\mathbf{{a}} = {vx*ax + vy*ay}",
             "Dot product indicates whether speed is increasing most rapidly."),
        step(10, "Tangential direction",
             "\\text{Velocity is tangent to the path}",
             "Direction of motion at each instant."),
        step(11, "Curved path",
             "\\text{Non-constant direction } \\Rightarrow \\text{ curved trajectory}",
             "Unless acceleration is purely along velocity."),
        step(12, "Summarise at $t$",
             f"\\mathbf{{r}} = {fmt(rx_v)}\\mathbf{{i}} + {fmt(ry_v)}\\mathbf{{j}}, \\quad |\\mathbf{{v}}| = {fmt(speed)}\\,\\text{{m s}}^{{-1}}",
             "Complete kinematic description."),
        step(13, "Method recap",
             "\\mathbf{r} \\xrightarrow{d/dt} \\mathbf{v} \\xrightarrow{d/dt} \\mathbf{a}",
             "Systematic differentiation chain."),
    ]
    questions.append(make_q(
        qid, "Hard", 8, "written", ["full-analysis", "differentiation"],
        f"A particle moves with $\\mathbf{{r}} = ({rx_fn})\\mathbf{{i}} + ({ry_fn})\\mathbf{{j}}$. "
        f"Find $\\mathbf{{v}}$, $\\mathbf{{a}}$, the speed, and the distance from the origin when $t = {t_val}\\,\\text{{s}}$.",
        steps,
        f"$\\mathbf{{v}} = {vx}\\mathbf{{i}} + {vy}\\mathbf{{j}}$ m s$^{{-1}}$; $\\mathbf{{a}} = {ax}\\mathbf{{i}} + {ay}\\mathbf{{j}}$ m s$^{{-2}}$; speed $= {fmt(speed)}\\,\\text{{m s}}^{{-1}}$; $|\\mathbf{{r}}| = {fmt(dist)}\\,\\text{{m}}$.",
    ))

# q055-q058: a = (f(t), g(t)) integrate with initial conditions, find at t
hard_a_cases = [
    ("q055", "2t", "4", 0, 0, 0, 0, 3, "t^2", "2t^2", 18, 12),
    ("q056", "6", "3t", 0, 0, 0, 0, 2, "6t", "1.5t^2", 12, 6),
    ("q057", "4t", "2", 0, 0, 1, 0, 2, "2t^2", "2t", 8, 4),
    ("q058", "3", "6t", 0, 0, 0, 1, 3, "3t", "3t^2", 9, 27),
]
for qid, ax_fn, ay_fn, vx0, vy0, rx0, ry0, t_val, vx_gen, vy_gen, vx_at, vy_at in hard_a_cases:
    rx_at = rx0 + (t_val**2 if "t^2" in vx_gen and qid != "q058" else 0) + (3*t_val**2 if qid == "q058" else 0)
    if qid == "q055":
        rx_at = t_val**2; ry_at = 2*t_val**2
    elif qid == "q056":
        rx_at = 6*t_val; ry_at = 1.5*t_val**2
    elif qid == "q057":
        rx_at = t_val**2 + 1; ry_at = 2*t_val
    else:
        rx_at = 3*t_val; ry_at = t_val**2 + 1
    speed = math.sqrt(vx_at**2 + vy_at**2)
    steps = [
        step(1, "Integrate $\\mathbf{a}$ to get $\\mathbf{v}$",
             "\\mathbf{v} = \\int \\mathbf{a}\\,\\mathrm{d}t + \\mathbf{c}_1",
             "First integration."),
        step(2, "Apply $\\mathbf{v}(0) = \\mathbf{0}$",
             f"\\mathbf{{v}} = ({vx_gen})\\mathbf{{i}} + ({vy_gen})\\mathbf{{j}}",
             "Velocity vector."),
        step(3, "Integrate $\\mathbf{v}$ to get $\\mathbf{r}$",
             "\\mathbf{r} = \\int \\mathbf{v}\\,\\mathrm{d}t + \\mathbf{c}_2",
             "Second integration."),
        step(4, "Apply $\\mathbf{r}(0)$",
             f"\\mathbf{{r}}(0) = {rx0}\\mathbf{{i}} + {ry0}\\mathbf{{j}}",
             "Initial position fixes constants."),
        step(5, f"Velocity at $t = {t_val}$",
             f"\\mathbf{{v}} = {vx_at}\\mathbf{{i}} + {vy_at}\\mathbf{{j}}",
             f"$\\mathbf{{v}} = {vx_at}\\mathbf{{i}} + {vy_at}\\mathbf{{j}}$."),
        step(6, f"Position at $t = {t_val}$",
             f"\\mathbf{{r}} = {fmt(rx_at)}\\mathbf{{i}} + {fmt(ry_at)}\\mathbf{{j}}",
             f"$\\mathbf{{r}} = {fmt(rx_at)}\\mathbf{{i}} + {fmt(ry_at)}\\mathbf{{j}}$."),
        step(7, "Speed", f"|\\mathbf{{v}}| = {fmt(speed)}\\,\\text{{m s}}^{{-1}}",
             f"Speed $= {fmt(speed)}\\,\\text{{m s}}^{{-1}}$."),
        step(8, "Verify $\\mathbf{a}$ by differentiation",
             f"\\dfrac{{\\mathrm{{d}}\\mathbf{{v}}}}{{\\mathrm{{d}}t}} = ({ax_fn})\\mathbf{{i}} + ({ay_fn})\\mathbf{{j}}",
             "Confirms the given acceleration."),
        step(9, "Distance from origin", f"|\\mathbf{{r}}| = {fmt(math.sqrt(rx_at**2+ry_at**2))}\\,\\text{{m}}",
             f"$|\\mathbf{{r}}| = {fmt(math.sqrt(rx_at**2+ry_at**2))}\\,\\text{{m}}$."),
        step(10, "Displacement from start",
             f"\\Delta\\mathbf{{r}} = {fmt(rx_at-rx0)}\\mathbf{{i}} + {fmt(ry_at-ry0)}\\mathbf{{j}}",
             "Change in position from $t = 0$."),
        step(11, "Compare displacement and distance",
             "|\\Delta\\mathbf{r}| \\le \\text{distance travelled}",
             "Straight-line displacement may be less than path length."),
        step(12, "Answer summary",
             f"\\mathbf{{r}} = {fmt(rx_at)}\\mathbf{{i}} + {fmt(ry_at)}\\mathbf{{j}}, \\quad |\\mathbf{{v}}| = {fmt(speed)}\\,\\text{{m s}}^{{-1}}",
             "Complete answer."),
        step(13, "Integration constants",
             "\\text{Two vector constants from two integrations}",
             "Always apply initial conditions to determine them."),
    ]
    questions.append(make_q(
        qid, "Hard", 8, "written", ["integration-chain", "variable-acceleration"],
        f"A particle has $\\mathbf{{a}} = ({ax_fn})\\mathbf{{i}} + ({ay_fn})\\mathbf{{j}}$ m s$^{{-2}}$, "
        f"$\\mathbf{{v}} = \\mathbf{{0}}$ and $\\mathbf{{r}} = {rx0}\\mathbf{{i}} + {ry0}\\mathbf{{j}}$ when $t = 0$. "
        f"Find $\\mathbf{{r}}$ and the speed when $t = {t_val}\\,\\text{{s}}$.",
        steps,
        f"$\\mathbf{{r}} = {fmt(rx_at)}\\mathbf{{i}} + {fmt(ry_at)}\\mathbf{{j}}$ m; speed $= {fmt(speed)}\\,\\text{{m s}}^{{-1}}$.",
    ))

# q059-q062: find t when r parallel to v (or perpendicular)
for qid, rx_fn, ry_fn, t_ans, condition in [
    ("q059", "t^2", "t^3", 0, "parallel at origin"),
    ("q060", "t", "2t", None, "always parallel"),
    ("q061", "t^2", "6t", 0, "parallel at t=0"),
    ("q062", "3t", "4t", None, "always parallel"),
]:
    if t_ans is not None:
        final = f"$t = {t_ans}\\,\\text{{s}}$ (and the motion is always along a straight line through the origin for $\\mathbf{{r}} \\parallel k\\mathbf{{v}}$)."
        if qid == "q059":
            final = "$\\mathbf{r}$ and $\\mathbf{v}$ are parallel at $t = 0$; for $t > 0$ they are not parallel in general."
    else:
        final = "$\\mathbf{r}$ and $\\mathbf{v}$ are parallel for all $t$ (motion along a straight line through the origin)."
    steps = [
        step(1, "Differentiate to find velocity", "\\mathbf{v} = \\dfrac{\\mathrm{d}\\mathbf{r}}{\\mathrm{d}t}",
             "Differentiate position."),
        step(2, "Write $\\mathbf{v}$ in component form",
             f"\\mathbf{{v}} = ({rx_fn})' \\mathbf{{i}} + ({ry_fn})' \\mathbf{{j}}",
             "Differentiate each component."),
        step(3, "Condition for parallel vectors",
             "\\mathbf{r} = k\\mathbf{v} \\text{ for some scalar } k",
             "Parallel vectors are scalar multiples of each other."),
        step(4, "Cross product test (2D)",
             "x v_y - y v_x = 0",
             "In 2D, parallel vectors have zero 'cross product'."),
        step(5, "Set up equation",
             "Solve for $t$",
             "Substitute components and solve."),
        step(6, "Interpret result",
             final.split(".")[0],
             "Physical meaning of the result."),
        step(7, "Straight-line motion",
             "\\mathbf{r} \\parallel \\mathbf{v} \\Rightarrow \\text{ motion along a straight line}",
             "When position and velocity are parallel, the path is a ray from the origin."),
        step(8, "Perpendicular case note",
             "\\mathbf{r} \\cdot \\mathbf{v} = 0 \\Rightarrow \\text{ perpendicular}",
             "Related condition for perpendicular vectors."),
        step(9, "Application",
             "\\text{Useful for identifying straight-line motion}",
             "Common exam question type."),
        step(10, "Verify at solution",
             "Substitute back to confirm",
             "Check the parallel condition holds."),
        step(11, "Sketch path",
             "\\text{Straight line or curved}",
             "Visualise the trajectory."),
        step(12, "Answer", final.split(";")[0] if ";" in final else final,
             "Time(s) when condition holds."),
        step(13, "Method",
             "\\text{Cross product or ratio of components}",
             "Either approach works in 2D."),
    ]
    questions.append(make_q(
        qid, "Hard", 7, "written", ["parallel-vectors", "direction"],
        f"A particle moves with $\\mathbf{{r}} = ({rx_fn})\\mathbf{{i}} + ({ry_fn})\\mathbf{{j}}$. "
        f"Find the value(s) of $t$ for which $\\mathbf{{r}}$ and $\\mathbf{{v}}$ are parallel.",
        steps, final,
    ))

# q063-q066: multi-part comprehensive
for qid, ax_fn, ay_fn, t_val in [
    ("q063", "2t", "3", 3), ("q064", "4", "2t", 2), ("q065", "3t", "5", 2), ("q066", "6", "4t", 3),
]:
    if qid == "q063":
        vx_at, vy_at = 2*t_val, 3*t_val
        rx_at, ry_at = t_val**2, 1.5*t_val**2
    elif qid == "q064":
        vx_at, vy_at = 4*t_val, t_val**2
        rx_at, ry_at = 2*t_val**2, t_val**3/3
    elif qid == "q065":
        vx_at, vy_at = 1.5*t_val**2, 5*t_val
        rx_at, ry_at = 0.5*t_val**3, 2.5*t_val**2
    else:
        vx_at, vy_at = 6*t_val, 2*t_val**2
        rx_at, ry_at = 3*t_val**2, (2/3)*t_val**3
    speed = math.sqrt(vx_at**2 + vy_at**2)
    dist = math.sqrt(rx_at**2 + ry_at**2)
    steps = [
        step(1, "(a) Integrate $\\mathbf{a}$ to find $\\mathbf{v}$",
             "\\mathbf{v} = \\int \\mathbf{a}\\,\\mathrm{d}t",
             "With $\\mathbf{v}(0) = \\mathbf{0}$."),
        step(2, "(a) Velocity at $t$", f"\\mathbf{{v}} = {fmt(vx_at)}\\mathbf{{i}} + {fmt(vy_at)}\\mathbf{{j}}",
             f"(a) $\\mathbf{{v}} = {fmt(vx_at)}\\mathbf{{i}} + {fmt(vy_at)}\\mathbf{{j}}$."),
        step(3, "(b) Integrate $\\mathbf{v}$ to find $\\mathbf{r}$",
             "\\mathbf{r} = \\int \\mathbf{v}\\,\\mathrm{d}t",
             "With $\\mathbf{r}(0) = \\mathbf{0}$."),
        step(4, "(b) Position at $t$", f"\\mathbf{{r}} = {fmt(rx_at)}\\mathbf{{i}} + {fmt(ry_at)}\\mathbf{{j}}",
             f"(b) $\\mathbf{{r}} = {fmt(rx_at)}\\mathbf{{i}} + {fmt(ry_at)}\\mathbf{{j}}$."),
        step(5, "(c) Speed", f"|\\mathbf{{v}}| = {fmt(speed)}\\,\\text{{m s}}^{{-1}}",
             f"(c) Speed $= {fmt(speed)}\\,\\text{{m s}}^{{-1}}$."),
        step(6, "(d) Distance from origin", f"|\\mathbf{{r}}| = {fmt(dist)}\\,\\text{{m}}",
             f"(d) $|\\mathbf{{r}}| = {fmt(dist)}\\,\\text{{m}}$."),
        step(7, "Verify by differentiation",
             f"\\dfrac{{\\mathrm{{d}}^2\\mathbf{{r}}}}{{\\mathrm{{d}}t^2}} = ({ax_fn})\\mathbf{{i}} + ({ay_fn})\\mathbf{{j}}",
             "Confirms acceleration."),
        step(8, "Direction of velocity",
             f"\\tan\\theta = \\dfrac{{v_y}}{{v_x}} = {fmt(vy_at/vx_at if vx_at else 0, 3)}",
             "Angle of motion from $x$-axis."),
        step(9, "Is speed increasing?",
             f"\\mathbf{{v}} \\cdot \\mathbf{{a}} > 0",
             "Dot product of velocity and acceleration."),
        step(10, "Magnitude of acceleration at $t$",
             f"|\\mathbf{{a}}| = {fmt(math.sqrt((2 if qid=='q063' else 4 if qid=='q064' else 3*t_val)**2 + (3 if qid=='q063' else 2*t_val if qid=='q064' else 5)**2))}\\,\\text{{m s}}^{{-2}}",
             "Scalar acceleration at the given time."),
        step(11, "Summarise (a)–(d)",
             f"\\mathbf{{v}}, \\mathbf{{r}}, |\\mathbf{{v}}|, |\\mathbf{{r}}|",
             "All four parts answered."),
        step(12, "Calculus chain complete",
             "\\mathbf{a} \\xrightarrow{\\int} \\mathbf{v} \\xrightarrow{\\int} \\mathbf{r}",
             "Full vector kinematics pipeline."),
        step(13, "Initial conditions essential",
             "\\text{Without ICs, constants are unknown}",
             "Always use given initial velocity and position."),
        step(14, "Units check",
             "\\mathbf{r}\\text{ in m}, \\mathbf{v}\\text{ in m s}^{-1}, \\mathbf{a}\\text{ in m s}^{-2}",
             "Consistent SI units throughout."),
        step(15, "Final answers",
             f"(a)\\ {fmt(vx_at)}\\mathbf{{i}}+{fmt(vy_at)}\\mathbf{{j}},\\ (b)\\ {fmt(rx_at)}\\mathbf{{i}}+{fmt(ry_at)}\\mathbf{{j}},\\ (c)\\ {fmt(speed)}\\,\\text{{m s}}^{{-1}},\\ (d)\\ {fmt(dist)}\\,\\text{{m}}",
             "Complete solution."),
    ]
    questions.append(make_q(
        qid, "Hard", 9, "written", ["multi-part", "vector-calculus"],
        f"A particle moves with $\\mathbf{{a}} = ({ax_fn})\\mathbf{{i}} + ({ay_fn})\\mathbf{{j}}$ m s$^{{-2}}$, "
        f"starting from rest at the origin. Taking $g = 9.8\\,\\text{{m s}}^{{-2}}$ where needed, "
        f"find when $t = {t_val}\\,\\text{{s}}$:\n\n"
        f"(a) the velocity $\\mathbf{{v}}$,\n"
        f"(b) the position $\\mathbf{{r}}$,\n"
        f"(c) the speed,\n"
        f"(d) the distance from the origin.",
        steps,
        f"(a) $\\mathbf{{v}} = {fmt(vx_at)}\\mathbf{{i}} + {fmt(vy_at)}\\mathbf{{j}}$ m s$^{{-1}}$; (b) $\\mathbf{{r}} = {fmt(rx_at)}\\mathbf{{i}} + {fmt(ry_at)}\\mathbf{{j}}$ m; (c) speed $= {fmt(speed)}\\,\\text{{m s}}^{{-1}}$; (d) $|\\mathbf{{r}}| = {fmt(dist)}\\,\\text{{m}}$.",
    ))

# q067-q070: hardest - a involves both components varying, find specific times
for qid, ax_fn, ay_fn, t_find, question_type in [
    ("q067", "2t", "3", 2, "speed"),
    ("q068", "4", "2t", 3, "distance"),
    ("q069", "3t", "6", 2, "speed"),
    ("q070", "5", "4t", 4, "distance"),
]:
    # v from integration: v(0)=0
    if qid == "q067":
        vx, vy = 2*t_find, 3*t_find
        rx, ry = t_find**2, 1.5*t_find**2
        target = math.sqrt(vx**2+vy**2)
        q_text = f"A particle has $\\mathbf{{a}} = 2t\\mathbf{{i}} + 3\\mathbf{{j}}$ m s$^{{-2}}$ with $\\mathbf{{v}} = \\mathbf{{0}}$ at $t = 0$. Find the speed when $t = {t_find}\\,\\text{{s}}$."
        final = f"Speed $= {fmt(target)}\\,\\text{{m s}}^{{-1}}$"
    elif qid == "q068":
        vx, vy = 4*t_find, t_find**2
        rx, ry = 2*t_find**2, t_find**3/3
        target = math.sqrt(rx**2+ry**2)
        q_text = f"A particle has $\\mathbf{{a}} = 4\\mathbf{{i}} + 2t\\mathbf{{j}}$ m s$^{{-2}}$ with $\\mathbf{{v}} = \\mathbf{{0}}$ and $\\mathbf{{r}} = \\mathbf{{0}}$ at $t = 0$. Find the distance from the origin when $t = {t_find}\\,\\text{{s}}$."
        final = f"$|\\mathbf{{r}}| = {fmt(target)}\\,\\text{{m}}$"
    elif qid == "q069":
        vx, vy = 1.5*t_find**2, 6*t_find
        rx, ry = 0.5*t_find**3, 3*t_find**2
        target = math.sqrt(vx**2+vy**2)
        q_text = f"A particle has $\\mathbf{{a}} = 3t\\mathbf{{i}} + 6\\mathbf{{j}}$ m s$^{{-2}}$ with $\\mathbf{{v}} = \\mathbf{{0}}$ at $t = 0$. Find the speed when $t = {t_find}\\,\\text{{s}}$."
        final = f"Speed $= {fmt(target)}\\,\\text{{m s}}^{{-1}}$"
    else:
        vx, vy = 5*t_find, 2*t_find**2
        rx, ry = 2.5*t_find**2, (2/3)*t_find**3
        target = math.sqrt(rx**2+ry**2)
        q_text = f"A particle has $\\mathbf{{a}} = 5\\mathbf{{i}} + 4t\\mathbf{{j}}$ m s$^{{-2}}$ with $\\mathbf{{v}} = \\mathbf{{0}}$ and $\\mathbf{{r}} = \\mathbf{{0}}$ at $t = 0$. Find the distance from the origin when $t = {t_find}\\,\\text{{s}}$."
        final = f"$|\\mathbf{{r}}| = {fmt(target)}\\,\\text{{m}}$"

    speed = math.sqrt(vx**2+vy**2)
    dist = math.sqrt(rx**2+ry**2)
    steps = [
        step(1, "Integrate $\\mathbf{a}$ to obtain $\\mathbf{v}$",
             "\\mathbf{v} = \\int \\mathbf{a}\\,\\mathrm{d}t + \\mathbf{c}_1",
             "First integration with $\\mathbf{v}(0) = \\mathbf{0}$."),
        step(2, "Velocity components",
             f"v_x = ...", f"v_y = ...",
             "Integrate each component and apply initial condition."),
        step(3, "Integrate $\\mathbf{v}$ to obtain $\\mathbf{r}$",
             "\\mathbf{r} = \\int \\mathbf{v}\\,\\mathrm{d}t + \\mathbf{c}_2",
             "Second integration with $\\mathbf{r}(0) = \\mathbf{0}$."),
        step(4, f"Substitute $t = {t_find}$ into $\\mathbf{{v}}$",
             f"\\mathbf{{v}} = {fmt(vx)}\\mathbf{{i}} + {fmt(vy)}\\mathbf{{j}}",
             f"Velocity at $t = {t_find}$."),
        step(5, f"Substitute $t = {t_find}$ into $\\mathbf{{r}}$",
             f"\\mathbf{{r}} = {fmt(rx)}\\mathbf{{i}} + {fmt(ry)}\\mathbf{{j}}",
             f"Position at $t = {t_find}$."),
        step(6, "Calculate speed", f"|\\mathbf{{v}}| = {fmt(speed)}\\,\\text{{m s}}^{{-1}}",
             f"Speed $= {fmt(speed)}\\,\\text{{m s}}^{{-1}}$."),
        step(7, "Calculate distance from origin", f"|\\mathbf{{r}}| = {fmt(dist)}\\,\\text{{m}}",
             f"$|\\mathbf{{r}}| = {fmt(dist)}\\,\\text{{m}}$."),
        step(8, "Verify by double differentiation",
             "\\dfrac{\\mathrm{d}^2\\mathbf{r}}{\\mathrm{d}t^2} = \\mathbf{a}",
             "Confirms the acceleration."),
        step(9, "Component-wise check",
             "\\text{Each component satisfies } d^2x/dt^2 = a_x",
             "Independent verification."),
        step(10, "Physical interpretation",
             f"\\text{{At }} t = {t_find}\\text{{, particle is at }} ({fmt(rx)}, {fmt(ry)})",
             "Position in the plane."),
        step(11, "Direction of motion",
             f"\\mathbf{{v}} = {fmt(vx)}\\mathbf{{i}} + {fmt(vy)}\\mathbf{{j}}",
             "Velocity direction at this instant."),
        step(12, "Magnitude required",
             f"|\\mathbf{{{'v' if question_type == 'speed' else 'r'}}}| = {fmt(target)}",
             "The question asks for a scalar magnitude."),
        step(13, "Integration technique",
             "\\text{Power rule on each component}",
             "Standard polynomial integration."),
        step(14, "Common error",
             "\\text{Forgetting vector constants of integration}",
             "Always apply initial conditions."),
        step(15, "Vector SUVAT does not apply",
             "\\text{Acceleration is not constant}",
             "Must use calculus, not SUVAT formulae."),
        step(16, "Final answer", final.replace("$", "").replace("\\mathbf{r}", "\\mathbf{r}"),
             final),
    ]
    questions.append(make_q(
        qid, "Hard", 8, "numeric",
        ["vector-calculus", question_type, "variable-acceleration"],
        q_text, steps, final,
    ))

# ── Write TypeScript output ───────────────────────────────────────────────────
assert len(questions) == 70, f"Expected 70 questions, got {len(questions)}"

header = '''import { Question } from "@/lib/types";

/**
 * A-Level Maths · Year 2 Mechanics · Further kinematics
 * Vector methods in 2D; position, velocity and acceleration vectors;
 * differentiation and integration with initial conditions; speed, distance and bearing. 70 questions.
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
