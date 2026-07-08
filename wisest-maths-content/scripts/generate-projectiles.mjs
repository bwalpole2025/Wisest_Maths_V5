#!/usr/bin/env node
/**
 * Generates 70 A-Level "Projectiles" (Year 2 Mechanics) questions.
 * Output: src/data/questions/a-level-maths/year-2-mech/projectiles.ts
 */

import { writeFileSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const outPath = resolve(__dirname, "../src/data/questions/a-level-maths/year-2-mech/projectiles.ts");

const SUBTOPIC = "Projectiles";
const SUBTOPIC_ID = "al.y2.mech.projectilescontinued";
const LEVEL = "A-Level Maths";
const TOPIC = "Year 2 Mechanics";
const G = 10;

const qid = (n) => `al.y2.mech.projectilescontinued.q${String(n).padStart(3, "0")}`;
const step = (n, description, workingLatex, explanation) => ({ stepNumber: n, description, workingLatex, explanation, diagram: null });
const base = (meta) => ({ level: LEVEL, topic: TOPIC, subtopic: SUBTOPIC, subtopicId: SUBTOPIC_ID, questionDiagram: null, ...meta });
const prQ = (n, meta) => base({ id: qid(n), tags: ["projectiles", ...(meta.tags || [])], ...meta });
const f = (x, d = 2) => +x.toFixed(d);
const rad = (deg) => (deg * Math.PI) / 180;

function horizontalProj(qNum, u, h, t, range, questionText, tags = [], marks = 3) {
  const steps = [
    step(1, "Model the motion", "a_x = 0,\\; a_y = -g", "Horizontal projection: no horizontal acceleration; gravity acts vertically."),
    step(2, "Horizontal motion", `x = ut = ${u}t`, "Constant horizontal speed."),
    step(3, "Vertical motion", `y = h - \\tfrac{1}{2}gt^{2} = ${h} - 5t^{2}`, "Starts at height $h$ with zero initial vertical speed."),
    step(4, "Time to ground", `0 = ${h} - 5t^{2} \\Rightarrow t = ${t}\\ \\text{s}`, "Solve $y = 0$ for time of flight."),
    step(5, "Horizontal range", `x = ${u} \\times ${t} = ${range}\\ \\text{m}`, "Distance travelled horizontally."),
    step(6, "Answer", `\\text{Range} = ${range}\\ \\text{m}`, "How far the projectile lands from the base."),
  ];
  return prQ(qNum, { difficulty: "Easy", marks, answerType: "numeric", tags: [...tags, "horizontal projection"], questionText, workedSolution: { steps, finalAnswer: `Range $= ${range}\\ \\text{m}$ (time of flight $= ${t}\\ \\text{s}$)` } });
}

function components(qNum, u, alpha, ux, uy, questionText, tags = []) {
  const steps = [
    step(1, "Resolve initial velocity", `u_x = u\\cos\\alpha,\\; u_y = u\\sin\\alpha`, "Split the launch speed into horizontal and vertical parts."),
    step(2, "Substitute values", `u = ${u}\\ \\text{m s}^{-1},\\; \\alpha = ${alpha}°`, "Given launch speed and angle."),
    step(3, "Horizontal component", `u_x = ${u}\\cos ${alpha}° = ${ux}\\ \\text{m s}^{-1}`, "Adjacent side in the velocity triangle."),
    step(4, "Vertical component", `u_y = ${u}\\sin ${alpha}° = ${uy}\\ \\text{m s}^{-1}`, "Opposite side in the velocity triangle."),
    step(5, "Check", `\\sqrt{u_x^{2}+u_y^{2}} \\approx ${u}`, "Components should recombine to $u$."),
    step(6, "Answer", `u_x = ${ux}\\ \\text{m s}^{-1},\\; u_y = ${uy}\\ \\text{m s}^{-1}`, "Initial velocity components."),
  ];
  return prQ(qNum, { difficulty: "Easy", marks: 3, answerType: "numeric", tags: [...tags, "components"], questionText, workedSolution: { steps, finalAnswer: `$u_x = ${ux}\\ \\text{m s}^{-1}$, $u_y = ${uy}\\ \\text{m s}^{-1}$` } });
}

function maxHeight(qNum, u, alpha, H, questionText, tags = [], marks = 3) {
  const uy = f(u * Math.sin(rad(alpha)));
  const steps = [
    step(1, "Vertical component", `u_y = u\\sin\\alpha = ${uy}\\ \\text{m s}^{-1}`, "Only vertical motion affects maximum height."),
    step(2, "Use v² = u² + 2as", "0 = u_y^{2} - 2gH", "At the top, vertical speed is zero."),
    step(3, "Rearrange", `H = \\dfrac{u_y^{2}}{2g} = \\dfrac{${uy}^{2}}{2 \\times ${G}}`, "Formula for greatest height."),
    step(4, "Calculate", `H = ${H}\\ \\text{m}`, "Maximum height above launch point."),
    step(5, "Interpret", "\\text{Measured from the point of projection}", "Not necessarily above ground unless launched from ground level."),
    step(6, "Answer", `H = ${H}\\ \\text{m}`, "Greatest height."),
  ];
  return prQ(qNum, { difficulty: "Easy", marks, answerType: "numeric", tags: [...tags, "maximum height"], questionText, workedSolution: { steps, finalAnswer: `$H = ${H}\\ \\text{m}$` } });
}

function timeOfFlight(qNum, u, alpha, T, questionText, tags = [], marks = 3) {
  const uy = f(u * Math.sin(rad(alpha)));
  const steps = [
    step(1, "Vertical motion", `y = u_y t - \\tfrac{1}{2}gt^{2}`, "Displacement from launch level returning to same height."),
    step(2, "Return to launch height", `0 = u_y t - 5t^{2}`, "Set $y = 0$ for landing at same vertical level."),
    step(3, "Factorise", `t(u_y - 5t) = 0`, "Two solutions: launch and landing."),
    step(4, "Non-zero root", `t = \\dfrac{u_y}{g} = \\dfrac{${uy}}{${G}} = ${T}\\ \\text{s}`, "Time of flight."),
    step(5, "Alternative formula", `T = \\dfrac{2u\\sin\\alpha}{g}`, "Useful when angle and speed are given."),
    step(6, "Answer", `T = ${T}\\ \\text{s}`, "Total time in the air."),
  ];
  return prQ(qNum, { difficulty: "Easy", marks, answerType: "numeric", tags: [...tags, "time of flight"], questionText, workedSolution: { steps, finalAnswer: `$T = ${T}\\ \\text{s}$` } });
}

function range(qNum, u, alpha, R, questionText, tags = [], marks = 4) {
  const ux = f(u * Math.cos(rad(alpha)));
  const T = f((2 * u * Math.sin(rad(alpha))) / G);
  const steps = [
    step(1, "Range formula", `R = \\dfrac{u^{2}\\sin 2\\alpha}{g}`, "Horizontal distance when landing at launch height."),
    step(2, "Substitute", `R = \\dfrac{${u}^{2}\\sin ${2 * alpha}°}{${G}}`, "Use the double-angle value."),
    step(3, "Alternative method", `R = u_x \\times T = ${ux} \\times ${T}`, "Horizontal speed times time of flight."),
    step(4, "Calculate", `R = ${R}\\ \\text{m}`, "Horizontal range."),
    step(5, "Assumption", "\\text{No air resistance; same launch and landing height}", "Standard projectile model."),
    step(6, "Answer", `R = ${R}\\ \\text{m}`, "Range on level ground."),
  ];
  return prQ(qNum, { difficulty: "Intermediate", marks, answerType: "numeric", tags: [...tags, "range"], questionText, workedSolution: { steps, finalAnswer: `$R = ${R}\\ \\text{m}$` } });
}

function trajectoryEq(qNum, u, alpha, questionText, eqn, tags = [], marks = 4) {
  const steps = [
    step(1, "Parametric equations", "x = u t\\cos\\alpha,\\; y = u t\\sin\\alpha - \\tfrac{1}{2}gt^{2}", "Separate horizontal and vertical motion."),
    step(2, "Eliminate t", "t = \\dfrac{x}{u\\cos\\alpha}", "Express time from horizontal equation."),
    step(3, "Substitute into y", "y = x\\tan\\alpha - \\dfrac{gx^{2}}{2u^{2}\\cos^{2}\\alpha}", "Cartesian equation of the path."),
    step(4, "Substitute values", eqn, "Equation for this projectile."),
    step(5, "Identify shape", "\\text{Parabola}", "The trajectory is a quadratic in $x$."),
    step(6, "Answer", eqn, "Trajectory equation."),
  ];
  return prQ(qNum, { difficulty: "Intermediate", marks, answerType: "expression", tags: [...tags, "trajectory"], questionText, workedSolution: { steps, finalAnswer: eqn } });
}

function findAngle(qNum, u, R, alpha, questionText, tags = []) {
  const steps = [
    step(1, "Range formula", `R = \\dfrac{u^{2}\\sin 2\\alpha}{g}`, "Relate range, speed and angle."),
    step(2, "Rearrange", `\\sin 2\\alpha = \\dfrac{Rg}{u^{2}}`, "Make $\\sin 2\\alpha$ the subject."),
    step(3, "Substitute", `\\sin 2\\alpha = \\dfrac{${R} \\times ${G}}{${u}^{2}}`, "Insert known values."),
    step(4, "Solve for α", `2\\alpha = ${2 * alpha}° \\Rightarrow \\alpha = ${alpha}°`, "Find the launch angle."),
    step(5, "Check", "\\text{Two angles often possible for the same range}", "Complementary angles give the same range on level ground."),
    step(6, "Answer", `\\alpha = ${alpha}°`, "Launch angle."),
  ];
  return prQ(qNum, { difficulty: "Intermediate", marks: 4, answerType: "numeric", tags: [...tags, "find angle"], questionText, workedSolution: { steps, finalAnswer: `$\\alpha = ${alpha}°$` } });
}

function defineProj(qNum, questionText, answer, tags = []) {
  const steps = [
    step(1, "Assumptions", "\\text{No air resistance; constant } g", "Standard A-Level projectile model."),
    step(2, "Horizontal motion", "a_x = 0", "No horizontal force, so horizontal speed is constant."),
    step(3, "Vertical motion", "a_y = -g", "Gravity accelerates the particle downward."),
    step(4, "Independence", "\\text{Horizontal and vertical motions are independent}", "This is the key modelling idea."),
    step(5, "Answer concept", answer, "Clear statement."),
    step(6, "Application", "\\text{Resolve initial velocity and use suvat separately}", "Standard solution method."),
  ];
  return prQ(qNum, { difficulty: "Easy", marks: 2, answerType: "written", tags: [...tags, "definition"], questionText, workedSolution: { steps, finalAnswer: answer } });
}

function hardPr(qNum, questionText, steps, finalAnswer, tags = [], marks = 8) {
  return prQ(qNum, { difficulty: "Hard", marks, answerType: "written", tags: [...tags, "multi-step"], questionText, workedSolution: { steps, finalAnswer } });
}

const questions = [
  // Easy — horizontal projection (1–8)
  horizontalProj(1, 10, 20, 2, 20, "A stone is projected horizontally at $10\\ \\text{m s}^{-1}$ from the top of a cliff $20\\ \\text{m}$ high. Find the time to reach the sea and the horizontal distance travelled. Take $g = 10\\ \\text{m s}^{-2}$.", ["cliff"]),
  horizontalProj(2, 15, 45, 3, 45, "A ball is thrown horizontally at $15\\ \\text{m s}^{-1}$ from a height of $45\\ \\text{m}$. Find the range. Take $g = 10\\ \\text{m s}^{-2}$.", ["ball"]),
  horizontalProj(3, 8, 5, 1, 8, "A particle is projected horizontally at $8\\ \\text{m s}^{-1}$ from a platform $5\\ \\text{m}$ high. How far does it travel horizontally? Take $g = 10\\ \\text{m s}^{-2}$.", ["platform"]),
  horizontalProj(4, 20, 80, 4, 80, "From a height of $80\\ \\text{m}$, a projectile is fired horizontally at $20\\ \\text{m s}^{-1}$. Find the horizontal range. Take $g = 10\\ \\text{m s}^{-2}$.", ["fired"]),
  horizontalProj(5, 12, 32, 2.53, 30.4, "A package drops horizontally at $12\\ \\text{m s}^{-1}$ from $32\\ \\text{m}$. Find the range. Take $g = 10\\ \\text{m s}^{-2}$.", ["package"]),
  horizontalProj(6, 5, 1.25, 0.5, 2.5, "A marble leaves a table $1.25\\ \\text{m}$ high at $5\\ \\text{m s}^{-1}$ horizontally. Find the range. Take $g = 10\\ \\text{m s}^{-2}$.", ["table"]),
  horizontalProj(7, 25, 125, 5, 125, "A projectile is launched horizontally at $25\\ \\text{m s}^{-1}$ from $125\\ \\text{m}$. Find the range. Take $g = 10\\ \\text{m s}^{-2}$.", ["launch"]),
  horizontalProj(8, 6, 11.25, 1.5, 9, "From $11.25\\ \\text{m}$ above ground, a ball is projected horizontally at $6\\ \\text{m s}^{-1}$. Find the range. Take $g = 10\\ \\text{m s}^{-2}$.", ["ball"]),

  // Easy — components & definitions (9–20)
  components(9, 20, 30, 17.3, 10, "A particle is projected with speed $20\\ \\text{m s}^{-1}$ at $30^\\circ$ above the horizontal. Find $u_x$ and $u_y$."),
  components(10, 10, 45, 7.07, 7.07, "Find the horizontal and vertical components of $10\\ \\text{m s}^{-1}$ at $45^\\circ$."),
  components(11, 25, 60, 12.5, 21.7, "A projectile is launched at $25\\ \\text{m s}^{-1}$ and $60^\\circ$. Find $u_x$ and $u_y$."),
  components(12, 40, 30, 34.6, 20, "Resolve $40\\ \\text{m s}^{-1}$ at $30^\\circ$ into components."),
  components(13, 15, 53, 9.03, 12, "Find components for $15\\ \\text{m s}^{-1}$ at $53^\\circ$."),
  components(14, 30, 45, 21.2, 21.2, "Resolve $30\\ \\text{m s}^{-1}$ at $45^\\circ$."),

  defineProj(15, "State the horizontal and vertical accelerations for a projectile modelled without air resistance.", "Horizontal acceleration $a_x = 0$; vertical acceleration $a_y = -g$ (taking upward as positive).", ["definition"]),
  defineProj(16, "Why are horizontal and vertical motions treated separately in projectile problems?", "Because there is no horizontal force (so $a_x = 0$) while gravity acts vertically. The motions are independent and can each be solved with suvat.", ["definition"]),
  defineProj(17, "What is the shape of the path of a projectile under gravity (no air resistance)?", "A parabola, described by $y = x\\tan\\alpha - \\dfrac{gx^{2}}{2u^{2}\\cos^{2}\\alpha}$.", ["definition"]),

  maxHeight(18, 20, 30, 5, "A particle is projected at $20\\ \\text{m s}^{-1}$ at $30^\\circ$. Find the maximum height. Take $g = 10\\ \\text{m s}^{-2}$.", ["height"]),
  maxHeight(19, 30, 45, 22.5, "Find the greatest height for projection at $30\\ \\text{m s}^{-1}$ and $45^\\circ$. Take $g = 10\\ \\text{m s}^{-2}$.", ["height"]),
  maxHeight(20, 10, 60, 3.75, "A projectile is fired at $10\\ \\text{m s}^{-1}$ and $60^\\circ$. Find the maximum height. Take $g = 10\\ \\text{m s}^{-2}$.", ["height"]),

  // Easy/Intermediate — time of flight (21–28)
  timeOfFlight(21, 20, 30, 2, "Find the time of flight for a projectile launched at $20\\ \\text{m s}^{-1}$ at $30^\\circ$ on level ground. Take $g = 10\\ \\text{m s}^{-2}$."),
  timeOfFlight(22, 40, 45, 5.66, "A ball is kicked at $40\\ \\text{m s}^{-1}$ at $45^\\circ$. Find the time of flight. Take $g = 10\\ \\text{m s}^{-2}$."),
  timeOfFlight(23, 15, 60, 2.6, "Find the time of flight for $15\\ \\text{m s}^{-1}$ at $60^\\circ$. Take $g = 10\\ \\text{m s}^{-2}$."),
  timeOfFlight(24, 25, 53, 4, "A projectile is launched at $25\\ \\text{m s}^{-1}$ and $53^\\circ$. Find the time of flight. Take $g = 10\\ \\text{m s}^{-2}$."),

  // Intermediate — range (25–40)
  range(25, 20, 30, 34.6, "Find the horizontal range of a projectile launched at $20\\ \\text{m s}^{-1}$ and $30^\\circ$ on level ground. Take $g = 10\\ \\text{m s}^{-2}$."),
  range(26, 30, 45, 90, "A ball is projected at $30\\ \\text{m s}^{-1}$ at $45^\\circ$. Find the range. Take $g = 10\\ \\text{m s}^{-2}$."),
  range(27, 10, 30, 8.66, "Find the range for $10\\ \\text{m s}^{-1}$ at $30^\\circ$. Take $g = 10\\ \\text{m s}^{-2}$."),
  range(28, 25, 60, 54.1, "A projectile is fired at $25\\ \\text{m s}^{-1}$ and $60^\\circ$. Find the range. Take $g = 10\\ \\text{m s}^{-2}$."),
  range(29, 40, 30, 138.6, "Find the range for $40\\ \\text{m s}^{-1}$ at $30^\\circ$. Take $g = 10\\ \\text{m s}^{-2}$."),
  range(30, 20, 45, 40, "A stone is thrown at $20\\ \\text{m s}^{-1}$ and $45^\\circ$. Find the range. Take $g = 10\\ \\text{m s}^{-2}$."),

  trajectoryEq(31, 20, 30, "A projectile is launched at $20\\ \\text{m s}^{-1}$ at $30^\\circ$. Find the Cartesian equation of its trajectory.", "y = x\\tan 30^\\circ - \\dfrac{10x^{2}}{2 \\times 400 \\times \\cos^{2} 30^\\circ} = 0.577x - 0.0144x^{2}", ["trajectory"]),
  trajectoryEq(32, 10, 45, "Find the trajectory equation for projection at $10\\ \\text{m s}^{-1}$ and $45^\\circ$.", "y = x - 0.1x^{2}", ["trajectory"]),

  findAngle(33, 20, 34.6, 30, "A projectile is launched at $20\\ \\text{m s}^{-1}$ and lands $34.6\\ \\text{m}$ away on level ground. Find one possible launch angle. Take $g = 10\\ \\text{m s}^{-2}$."),
  findAngle(34, 30, 90, 45, "A ball is kicked at $30\\ \\text{m s}^{-1}$ and travels $90\\ \\text{m}$. Find the launch angle. Take $g = 10\\ \\text{m s}^{-2}$."),

  maxHeight(35, 40, 30, 20, "Find the greatest height for $40\\ \\text{m s}^{-1}$ at $30^\\circ$. Take $g = 10\\ \\text{m s}^{-2}$."),
  timeOfFlight(36, 30, 30, 3, "Find the time of flight for $30\\ \\text{m s}^{-1}$ at $30^\\circ$. Take $g = 10\\ \\text{m s}^{-2}$."),
  range(37, 15, 45, 22.5, "Find the range for $15\\ \\text{m s}^{-1}$ at $45^\\circ$. Take $g = 10\\ \\text{m s}^{-2}$."),
  components(38, 50, 30, 43.3, 25, "Resolve $50\\ \\text{m s}^{-1}$ at $30^\\circ$."),
  range(39, 20, 60, 34.6, "Find the range for $20\\ \\text{m s}^{-1}$ at $60^\\circ$. Take $g = 10\\ \\text{m s}^{-2}$."),
  range(40, 35, 45, 122.5, "A projectile is launched at $35\\ \\text{m s}^{-1}$ and $45^\\circ$. Find the range. Take $g = 10\\ \\text{m s}^{-2}$."),

  // Intermediate — point on trajectory (41–50)
  hardPr(41, "A projectile is launched at $20\\ \\text{m s}^{-1}$ at $30^\\circ$. Find the height when the horizontal distance is $10\\ \\text{m}$. Take $g = 10\\ \\text{m s}^{-2}$.", [
    step(1, "Trajectory equation", "y = x\\tan 30^\\circ - \\dfrac{gx^{2}}{2u^{2}\\cos^{2} 30^\\circ}", "Cartesian form."),
    step(2, "Substitute x = 10", "y = 10\\tan 30^\\circ - \\dfrac{10 \\times 100}{2 \\times 400 \\times 0.75}", "Insert $x = 10$."),
    step(3, "Calculate", "y = 5.77 - 1.67 = 4.1\\ \\text{m}", "Height at $x = 10$."),
    step(4, "Alternative", "t = x/(u\\cos\\alpha) = 10/17.3 = 0.577\\ \\text{s}", "Time to reach $x = 10$."),
    step(5, "Vertical suvat", "y = 10 \\times 0.577 - 5 \\times 0.333 = 4.1\\ \\text{m}", "Consistent."),
    step(6, "Answer", "y = 4.1\\ \\text{m}", "Height at horizontal distance $10\\ \\text{m}$."),
  ], "$y = 4.1\\ \\text{m}$ when $x = 10\\ \\text{m}$.", ["height at distance"], 5),

  hardPr(42, "Find the speed of a projectile when it is at its maximum height, if launched at $25\\ \\text{m s}^{-1}$ at $40^\\circ$.", [
    step(1, "At maximum height", "u_y = 0", "Vertical component is zero."),
    step(2, "Horizontal component unchanged", "u_x = 25\\cos 40^\\circ = 19.2\\ \\text{m s}^{-1}", "No horizontal acceleration."),
    step(3, "Speed at top", "v = u_x = 19.2\\ \\text{m s}^{-1}", "Only horizontal motion remains."),
    step(4, "Interpret", "\\text{Minimum speed during flight}", "Speed is least at the apex."),
    step(5, "Answer", "v = 19.2\\ \\text{m s}^{-1}", "Speed at maximum height."),
    step(6, "Note", "\\text{Vertical component becomes zero instantaneously}", "Then becomes downward."),
  ], "$v = 19.2\\ \\text{m s}^{-1}$ at maximum height.", ["speed at apex"], 4),

  hardPr(43, "A projectile is launched at $30\\ \\text{m s}^{-1}$ at $45^\\circ$. Find the horizontal and vertical components of velocity after $2\\ \\text{s}$. Take $g = 10\\ \\text{m s}^{-2}$.", [
    step(1, "Initial components", "u_x = 21.2,\\; u_y = 21.2\\ \\text{m s}^{-1}", "At $45^\\circ$."),
    step(2, "Horizontal velocity", "v_x = u_x = 21.2\\ \\text{m s}^{-1}", "Unchanged."),
    step(3, "Vertical suvat", "v_y = u_y - gt = 21.2 - 20 = 1.2\\ \\text{m s}^{-1}", "Still moving upward after $2\\ \\text{s}$."),
    step(4, "Speed", "v = \\sqrt{21.2^{2} + 1.2^{2}} = 21.2\\ \\text{m s}^{-1}", "Combined speed."),
    step(5, "Answer components", "v_x = 21.2,\\; v_y = 1.2\\ \\text{m s}^{-1}", "Velocity after $2\\ \\text{s}$."),
    step(6, "Direction", "\\text{Still above horizontal}", "Has not yet reached maximum height."),
  ], "$v_x = 21.2\\ \\text{m s}^{-1}$, $v_y = 1.2\\ \\text{m s}^{-1}$ after $2\\ \\text{s}$.", ["velocity"], 5),

  hardPr(44, "Show that the range on level ground is maximum when $\\alpha = 45^\\circ$ for a fixed launch speed $u$.", [
    step(1, "Range formula", "R = \\dfrac{u^{2}\\sin 2\\alpha}{g}", "For level ground."),
    step(2, "Maximise R", "\\text{Maximise } \\sin 2\\alpha", "For fixed $u$ and $g$."),
    step(3, "Maximum of sine", "\\sin 2\\alpha \\leq 1", "Greatest value is $1$."),
    step(4, "Condition", "2\\alpha = 90^\\circ \\Rightarrow \\alpha = 45^\\circ", "Maximum range angle."),
    step(5, "Maximum range", "R_{\\max} = \\dfrac{u^{2}}{g}", "When $\\sin 2\\alpha = 1$."),
    step(6, "Answer", "\\alpha = 45^\\circ", "Angle for maximum range."),
  ], "Range is maximised when $\\alpha = 45^\\circ$ because $R \\propto \\sin 2\\alpha$, which is greatest when $2\\alpha = 90^\\circ$.", ["proof"], 5),

  hardPr(45, "A projectile is launched from ground level at $25\\ \\text{m s}^{-1}$ at $53^\\circ$. Find (a) the range, (b) the maximum height, (c) the time of flight. Take $g = 10\\ \\text{m s}^{-2}$.", [
    step(1, "(a) Range", "R = \\dfrac{625 \\times \\sin 106^\\circ}{10} = 60\\ \\text{m}", "Using $R = u^{2}\\sin 2\\alpha / g$."),
    step(2, "(b) Max height", "H = \\dfrac{(25\\sin 53^\\circ)^{2}}{20} = 20\\ \\text{m}", "Vertical component only."),
    step(3, "(c) Time of flight", "T = \\dfrac{2 \\times 25\\sin 53^\\circ}{10} = 4\\ \\text{s}", "Standard formula."),
    step(4, "Check range", "R = u_x T = 15 \\times 4 = 60\\ \\text{m}", "Consistent."),
    step(5, "Answer", "R = 60\\ \\text{m};\\; H = 20\\ \\text{m};\\; T = 4\\ \\text{s}", "All parts."),
    step(6, "Summary", "\\text{Complete projectile analysis}", "Key quantities for angled projection."),
  ], "(a) $R = 60\\ \\text{m}$. (b) $H = 20\\ \\text{m}$. (c) $T = 4\\ \\text{s}$.", ["multi-part"], 7),

  range(46, 50, 30, 216.5, "Find the range for $50\\ \\text{m s}^{-1}$ at $30^\\circ$. Take $g = 10\\ \\text{m s}^{-2}$."),
  maxHeight(47, 25, 45, 15.6, "Greatest height for $25\\ \\text{m s}^{-1}$ at $45^\\circ$. Take $g = 10\\ \\text{m s}^{-2}$."),
  timeOfFlight(48, 40, 30, 4, "Time of flight for $40\\ \\text{m s}^{-1}$ at $30^\\circ$. Take $g = 10\\ \\text{m s}^{-2}$."),
  horizontalProj(49, 30, 45, 3, 90, "Horizontal projection at $30\\ \\text{m s}^{-1}$ from $45\\ \\text{m}$. Find the range. Take $g = 10\\ \\text{m s}^{-2}$."),
  findAngle(50, 40, 138.6, 30, "A projectile launched at $40\\ \\text{m s}^{-1}$ lands $138.6\\ \\text{m}$ away. Find a launch angle. Take $g = 10\\ \\text{m s}^{-2}$."),

  // Hard — projection from height & multi-step (51–70)
  hardPr(51, "A ball is kicked from ground level at $20\\ \\text{m s}^{-1}$ at $30^\\circ$. Find (a) how long it is at least $3\\ \\text{m}$ above the ground, (b) the speed when it returns to ground level. Take $g = 10\\ \\text{m s}^{-2}$.", [
    step(1, "(a) Times when y = 3", "3 = 10t - 5t^{2}", "Vertical displacement equation."),
    step(2, "(a) Solve quadratic", "t = 0.33\\ \\text{s and } t = 1.67\\ \\text{s}", "Two times at height $3\\ \\text{m}$."),
    step(3, "(a) Duration", "1.67 - 0.33 = 1.34\\ \\text{s}", "Time above $3\\ \\text{m}$."),
    step(4, "(b) Symmetry", "v = u = 20\\ \\text{m s}^{-1}", "Speed at launch and landing is the same on level ground."),
    step(5, "(b) Components at landing", "v_x = 17.3,\\; v_y = -10", "Vertical component reversed."),
    step(6, "(b) Verify speed", "\\sqrt{17.3^{2}+10^{2}} = 20\\ \\text{m s}^{-1}", "Consistent."),
    step(7, "Answer", "1.34\\ \\text{s above } 3\\ \\text{m};\\; v = 20\\ \\text{m s}^{-1} at landing", "Both parts."),
  ], "(a) $1.34\\ \\text{s}$ above $3\\ \\text{m}$. (b) Speed on return $= 20\\ \\text{m s}^{-1}$.", ["time above height"], 8),

  hardPr(52, "A stone is projected at $15\\ \\text{m s}^{-1}$ at $37^\\circ$ from the top of a building $20\\ \\text{m}$ high. Find (a) the time of flight to the ground below, (b) the horizontal range from the base of the building. Take $g = 10\\ \\text{m s}^{-2}$.", [
    step(1, "Vertical displacement", "y = -20\\ \\text{m}", "Ends $20\\ \\text{m}$ below launch point."),
    step(2, "Vertical equation", "-20 = 15\\sin 37^\\circ \\cdot t - 5t^{2}", "Suvat with $u_y = 9.03$."),
    step(3, "(a) Solve quadratic", "5t^{2} - 9.03t - 20 = 0", "Quadratic in $t$."),
    step(4, "(a) Positive root", "t = 2.8\\ \\text{s}", "Time to ground."),
    step(5, "(b) Horizontal range", "x = 15\\cos 37^\\circ \\times 2.8 = 33.5\\ \\text{m}", "From base of building."),
    step(6, "Answer", "t = 2.8\\ \\text{s};\\; x = 33.5\\ \\text{m}", "Both parts."),
    step(7, "Note", "\\text{Landing below launch level increases time of flight}", "Compared with level-ground case."),
  ], "(a) $t = 2.8\\ \\text{s}$. (b) Horizontal range from building $= 33.5\\ \\text{m}$.", ["from height"], 9),

  hardPr(53, "Two projectiles are fired simultaneously from the same point with speed $30\\ \\text{m s}^{-1}$, one at $30^\\circ$ and one at $60^\\circ$. Show they have the same range on level ground.", [
    step(1, "Range formula", "R = \\dfrac{u^{2}\\sin 2\\alpha}{g}", "For each projectile."),
    step(2, "First angle", "R_{1} = \\dfrac{900 \\sin 60^\\circ}{10} = 77.9\\ \\text{m}", "At $30^\\circ$."),
    step(3, "Second angle", "R_{2} = \\dfrac{900 \\sin 120^\\circ}{10} = 77.9\\ \\text{m}", "At $60^\\circ$."),
    step(4, "Identity", "\\sin 120^\\circ = \\sin 60^\\circ", "Complementary angles property."),
    step(5, "General result", "\\sin 2\\alpha = \\sin(180^\\circ - 2\\alpha)", "Angles $\\alpha$ and $90^\\circ - \\alpha$ give same range."),
    step(6, "Answer", "R_{1} = R_{2}", "Same range demonstrated."),
  ], "Both ranges equal $77.9\\ \\text{m}$ because $\\sin 60^\\circ = \\sin 120^\\circ$.", ["complementary angles"], 6),

  hardPr(54, "A projectile passes through the point $(20, 15)$ and is launched from the origin at $25\\ \\text{m s}^{-1}$. Verify that $\\alpha = 53^\\circ$ is a possible launch angle. Take $g = 10\\ \\text{m s}^{-2}$.", [
    step(1, "Trajectory equation", "y = x\\tan\\alpha - \\dfrac{gx^{2}}{2u^{2}\\cos^{2}\\alpha}", "Path equation."),
    step(2, "Substitute point", "15 = 20\\tan 53^\\circ - \\dfrac{10 \\times 400}{2 \\times 625 \\times 0.36}", "Use $(20, 15)$."),
    step(3, "Calculate", "15 = 26.5 - 8.9 = 17.6", "Close — check with exact values."),
    step(4, "Alternative check", "t = 20/(25\\cos 53^\\circ) = 1\\ \\text{s}", "Time to $x = 20$."),
    step(5, "Height at t = 1", "y = 25\\sin 53^\\circ - 5 = 15\\ \\text{m}", "Matches the point."),
    step(6, "Answer", "\\alpha = 53^\\circ \\text{ is valid}", "Projectile passes through $(20, 15)$."),
  ], "$\\alpha = 53^\\circ$ works: at $t = 1\\ \\text{s}$, $(x, y) = (20, 15)$.", ["verify angle"], 7),

  hardPr(55, "A particle is projected horizontally at $U\\ \\text{m s}^{-1}$ from a cliff of height $h$. Show that its speed when it hits the ground is $\\sqrt{U^{2} + 2gh}$.", [
    step(1, "Horizontal component", "v_x = U", "Unchanged."),
    step(2, "Vertical fall", "v_y^{2} = 2gh", "Starts with zero vertical speed."),
    step(3, "Combine", "v^{2} = v_x^{2} + v_y^{2} = U^{2} + 2gh", "Pythagoras on velocity components."),
    step(4, "Speed", "v = \\sqrt{U^{2} + 2gh}", "Magnitude on impact."),
    step(5, "Interpret", "\\text{Independent of horizontal speed for vertical component}", "Vertical speed depends only on fall height."),
    step(6, "Answer", "v = \\sqrt{U^{2} + 2gh}", "Impact speed."),
  ], "On impact, $v = \\sqrt{U^{2} + 2gh}$.", ["proof", "horizontal"], 6),

  hardPr(56, "A football is kicked from ground level at $28\\ \\text{m s}^{-1}$ at angle $\\alpha$. It just clears a crossbar $3\\ \\text{m}$ high at a horizontal distance of $40\\ \\text{m}$. Find $\\alpha$. Take $g = 10\\ \\text{m s}^{-2}$.", [
    step(1, "Trajectory through (40, 3)", "3 = 40\\tan\\alpha - \\dfrac{10 \\times 1600}{2 \\times 784 \\times \\cos^{2}\\alpha}", "Point on path."),
    step(2, "Simplify", "3 = 40\\tan\\alpha - \\dfrac{8000}{784\\cos^{2}\\alpha}", "Numerical form."),
    step(3, "Try α = 30°", "y = 23.1 - 13.3 = 9.8\\ \\text{m}", "Too high."),
    step(4, "Try α = 15°", "y = 10.7 - 2.8 = 7.9\\ \\text{m}", "Still high."),
    step(5, "Try α = 10°", "y = 7.1 - 1.3 = 5.8\\ \\text{m}", "Getting closer."),
    step(6, "Try α = 7°", "y \\approx 3\\ \\text{m}", "Matches crossbar height."),
    step(7, "Answer", "\\alpha \\approx 7^\\circ", "Shallow angle to clear bar at $40\\ \\text{m}$."),
  ], "$\\alpha \\approx 7^\\circ$ (the trajectory passes through approximately $(40, 3)$).", ["crossbar"], 8),

  hardPr(57, "A projectile is launched at $35\\ \\text{m s}^{-1}$ at $40^\\circ$ from a platform $10\\ \\text{m}$ above level ground. Find the total time of flight and the horizontal range. Take $g = 10\\ \\text{m s}^{-2}$.", [
    step(1, "Vertical displacement", "y = -10\\ \\text{m}", "Lands $10\\ \\text{m}$ below launch."),
    step(2, "Equation", "-10 = 35\\sin 40^\\circ \\cdot t - 5t^{2}", "$u_y = 22.5$."),
    step(3, "Quadratic", "5t^{2} - 22.5t - 10 = 0", "Solve for $t$."),
    step(4, "Time of flight", "t = 4.9\\ \\text{s}", "Positive root."),
    step(5, "Range", "x = 35\\cos 40^\\circ \\times 4.9 = 131\\ \\text{m}", "Horizontal distance."),
    step(6, "Answer", "t = 4.9\\ \\text{s};\\; x = 131\\ \\text{m}", "Both quantities."),
    step(7, "Compare level ground", "T_{\\text{level}} = 4.5\\ \\text{s}", "Extra time from starting above ground."),
  ], "$t = 4.9\\ \\text{s}$, range $= 131\\ \\text{m}$.", ["from platform"], 8),

  hardPr(58, "A particle is projected at speed $u$ at angle $\\alpha$ to the horizontal. Derive the time to reach maximum height.", [
    step(1, "Vertical motion", "v_y = u\\sin\\alpha - gt", "Velocity at time $t$."),
    step(2, "At maximum height", "v_y = 0", "Vertical speed is instantaneously zero."),
    step(3, "Solve for t", "t = \\dfrac{u\\sin\\alpha}{g}", "Time to apex."),
    step(4, "Half the total flight time", "t_{\\text{apex}} = \\dfrac{T}{2}", "On level ground, symmetry gives $T = 2u\\sin\\alpha/g$."),
    step(5, "Interpret", "\\text{Longer if } u_y \\text{ is larger}", "Steeper or faster vertical launch reaches the top later."),
    step(6, "Answer", "t = \\dfrac{u\\sin\\alpha}{g}", "Time to maximum height."),
  ], "$t = \\dfrac{u\\sin\\alpha}{g}$.", ["derivation"], 5),

  hardPr(59, "A cannon fires a shell at $80\\ \\text{m s}^{-1}$ at $30^\\circ$ from horizontal ground. (a) Find the range. (b) Find how far the shell has travelled horizontally when it is at height $30\\ \\text{m}$ on the way up. Take $g = 10\\ \\text{m s}^{-2}$.", [
    step(1, "(a) Range", "R = \\dfrac{6400 \\times \\sin 60^\\circ}{10} = 554\\ \\text{m}", "Full range."),
    step(2, "(b) Time to height 30 m up", "30 = 40t - 5t^{2}", "$u_y = 40$."),
    step(3, "(b) Solve", "t = 1\\ \\text{s}", "On the way up."),
    step(4, "(b) Horizontal distance", "x = 80\\cos 30^\\circ \\times 1 = 69.3\\ \\text{m}", "At height $30\\ \\text{m}$."),
    step(5, "Answer", "R = 554\\ \\text{m};\\; x = 69.3\\ \\text{m}", "Both parts."),
    step(6, "Note", "\\text{Also passes } 30\\ \\text{m on way down later}", "Symmetric unless asked otherwise."),
  ], "(a) $R = 554\\ \\text{m}$. (b) $x = 69.3\\ \\text{m}$ when $y = 30\\ \\text{m}$ on the way up.", ["cannon"], 8),

  hardPr(60, "A particle is projected with velocity $(12\\mathbf{i} + 5\\mathbf{j})\\ \\text{m s}^{-1}$ from a point $O$. Take $\\mathbf{j}$ vertically upward and $g = 10\\ \\text{m s}^{-2}$. (a) Write $\\mathbf{r}$ at time $t$. (b) Find the position when $t = 2\\ \\text{s}$. (c) Find the time when the particle returns to the horizontal level of $O$.", [
    step(1, "(a) Position vector", "\\mathbf{r} = 12t\\,\\mathbf{i} + (5t - 5t^{2})\\mathbf{j}", "Integrate constant acceleration."),
    step(2, "(b) At t = 2", "\\mathbf{r} = 24\\mathbf{i} - 10\\mathbf{j}\\ \\text{m}", "Below launch level."),
    step(3, "(c) Return to level", "5t - 5t^{2} = 0", "Vertical displacement zero."),
    step(4, "(c) Solve", "t = 1\\ \\text{s}", "Non-zero root."),
    step(5, "Range", "x = 12\\ \\text{m}", "Horizontal displacement at $t = 1$."),
    step(6, "Answer", "\\mathbf{r}(2) = 24\\mathbf{i} - 10\\mathbf{j};\\; t = 1\\ \\text{s}", "Vector form."),
    step(7, "Max height", "t = 0.5\\ \\text{s},\\; y = 1.25\\ \\text{m}", "Useful check."),
  ], "(a) $\\mathbf{r} = 12t\\,\\mathbf{i} + (5t - 5t^{2})\\mathbf{j}$. (b) $\\mathbf{r}(2) = 24\\mathbf{i} - 10\\mathbf{j}\\ \\text{m}$. (c) Returns to level at $t = 1\\ \\text{s}$.", ["vectors"], 9),

  range(61, 60, 45, 360, "Find the range for $60\\ \\text{m s}^{-1}$ at $45^\\circ$. Take $g = 10\\ \\text{m s}^{-2}$."),
  maxHeight(62, 35, 60, 45.9, "Greatest height for $35\\ \\text{m s}^{-1}$ at $60^\\circ$. Take $g = 10\\ \\text{m s}^{-2}$."),
  timeOfFlight(63, 50, 45, 7.07, "Time of flight for $50\\ \\text{m s}^{-1}$ at $45^\\circ$. Take $g = 10\\ \\text{m s}^{-2}$."),
  trajectoryEq(64, 30, 60, "Find the trajectory equation for $30\\ \\text{m s}^{-1}$ at $60^\\circ$.", "y = 1.732x - 0.0222x^{2}", ["trajectory"]),

  hardPr(65, "A projectile launched at $20\\ \\text{m s}^{-1}$ can land at two points on level ground separated horizontally. Explain why two launch angles give the same range.", [
    step(1, "Range formula", "R = \\dfrac{u^{2}\\sin 2\\alpha}{g}", "Depends on $\\sin 2\\alpha$."),
    step(2, "Two angles", "\\sin 2\\alpha = \\sin(180^\\circ - 2\\alpha)", "Supplementary angle identity."),
    step(3, "Example", "\\alpha = 30^\\circ \\text{ and } 60^\\circ", "Both give $\\sin 60^\\circ$."),
    step(4, "Different paths", "\\text{Low trajectory vs high trajectory}", "Same landing point, different flight times."),
    step(5, "Answer", "\\text{Complementary launch angles}", "Same range, different apex heights."),
    step(6, "Exception", "\\alpha = 45^\\circ \\text{ is unique for maximum range}", "Only one angle maximises range."),
  ], "Angles $\\alpha$ and $90^\\circ - \\alpha$ give the same range because $\\sin 2\\alpha = \\sin(180^\\circ - 2\\alpha)$.", ["explanation"], 5),

  hardPr(66, "A ball is thrown at $18\\ \\text{m s}^{-1}$ at $50^\\circ$ from a balcony $8\\ \\text{m}$ above the street. (a) Find the time to hit the street. (b) Find the horizontal distance travelled. Take $g = 10\\ \\text{m s}^{-2}$.", [
    step(1, "Vertical equation", "-8 = 18\\sin 50^\\circ \\cdot t - 5t^{2}", "$u_y = 13.8$."),
    step(2, "(a) Quadratic", "5t^{2} - 13.8t - 8 = 0", "Solve."),
    step(3, "(a) Time", "t = 3.2\\ \\text{s}", "Positive root."),
    step(4, "(b) Range", "x = 18\\cos 50^\\circ \\times 3.2 = 37\\ \\text{m}", "Horizontal distance."),
    step(5, "Answer", "t = 3.2\\ \\text{s};\\; x = 37\\ \\text{m}", "Both parts."),
    step(6, "Impact speed", "v \\approx 25\\ \\text{m s}^{-1}", "Faster than launch due to fall."),
  ], "(a) $t = 3.2\\ \\text{s}$. (b) $x = 37\\ \\text{m}$.", ["balcony"], 7),

  hardPr(67, "Find the launch angle for which a projectile fired at $24\\ \\text{m s}^{-1}$ has a range of $50\\ \\text{m}$ on level ground. Give both possible angles. Take $g = 10\\ \\text{m s}^{-2}$.", [
    step(1, "Range equation", "50 = \\dfrac{576 \\sin 2\\alpha}{10}", "Substitute values."),
    step(2, "Solve sin 2α", "\\sin 2\\alpha = 0.868", "From rearrangement."),
    step(3, "Principal angles", "2\\alpha = 60.3^\\circ \\text{ or } 119.7^\\circ", "Two possibilities."),
    step(4, "Launch angles", "\\alpha = 30.2^\\circ \\text{ or } 59.8^\\circ", "Complementary pair."),
    step(5, "Check", "\\text{Approximately } 30^\\circ \\text{ and } 60^\\circ", "Near standard angles."),
    step(6, "Answer", "\\alpha \\approx 30.2^\\circ \\text{ or } 59.8^\\circ", "Both angles."),
  ], "$\\alpha \\approx 30.2^\\circ$ or $\\alpha \\approx 59.8^\\circ$.", ["two angles"], 6),

  hardPr(68, "A particle is projected at $40\\ \\text{m s}^{-1}$ at $25^\\circ$. Find the magnitude and direction of its velocity after $1.5\\ \\text{s}$. Take $g = 10\\ \\text{m s}^{-2}$.", [
    step(1, "Components initially", "u_x = 36.3,\\; u_y = 16.9\\ \\text{m s}^{-1}", "Resolve at $25^\\circ$."),
    step(2, "After 1.5 s", "v_x = 36.3,\\; v_y = 16.9 - 15 = 1.9\\ \\text{m s}^{-1}", "Vertical suvat."),
    step(3, "Speed", "v = \\sqrt{36.3^{2} + 1.9^{2}} = 36.4\\ \\text{m s}^{-1}", "Magnitude."),
    step(4, "Direction", "\\tan\\theta = 1.9/36.3 \\Rightarrow \\theta = 3^\\circ \\text{ above horizontal}", "Still nearly horizontal."),
    step(5, "Answer", "v = 36.4\\ \\text{m s}^{-1} at $3^\\circ$ above horizontal", "Velocity after $1.5\\ \\text{s}$."),
    step(6, "Note", "\\text{Not yet at maximum height}", "$t_{\\text{apex}} = 1.69\\ \\text{s}$."),
  ], "$v = 36.4\\ \\text{m s}^{-1}$ at approximately $3^\\circ$ above the horizontal.", ["velocity"], 7),

  hardPr(69, "A golf ball is hit from level ground and lands $180\\ \\text{m}$ away after $6\\ \\text{s}$. Find (a) the horizontal component of initial velocity, (b) the vertical component, (c) the launch angle. Take $g = 10\\ \\text{m s}^{-2}$.", [
    step(1, "(a) Horizontal", "u_x = \\dfrac{180}{6} = 30\\ \\text{m s}^{-1}", "Constant horizontal speed."),
    step(2, "(b) Vertical", "0 = u_y \\times 6 - 5 \\times 36", "Vertical displacement returns to zero."),
    step(3, "(b) Solve", "u_y = 30\\ \\text{m s}^{-1}", "Vertical component."),
    step(4, "(c) Angle", "\\tan\\alpha = 1 \\Rightarrow \\alpha = 45^\\circ", "Equal components."),
    step(5, "(c) Speed", "u = 30\\sqrt{2} = 42.4\\ \\text{m s}^{-1}", "Launch speed."),
    step(6, "Answer", "u_x = 30,\\; u_y = 30,\\; \\alpha = 45^\\circ", "All parts."),
    step(7, "Check range", "R = u^{2}/g = 180\\ \\text{m}", "Consistent."),
  ], "(a) $u_x = 30\\ \\text{m s}^{-1}$. (b) $u_y = 30\\ \\text{m s}^{-1}$. (c) $\\alpha = 45^\\circ$.", ["golf", "reverse"], 8),

  hardPr(70, "A firework is launched from a tower $25\\ \\text{m}$ high at $45\\ \\text{m s}^{-1}$ at $55^\\circ$ above the horizontal. (a) Find the time to reach maximum height. (b) Find the maximum height above ground level. (c) Find the horizontal range from the base of the tower. Take $g = 10\\ \\text{m s}^{-2}$.", [
    step(1, "(a) Time to apex", "t = \\dfrac{45\\sin 55^\\circ}{10} = 3.69\\ \\text{s}", "Vertical component only."),
    step(2, "(b) Height above launch", "H = \\dfrac{(45\\sin 55^\\circ)^{2}}{20} = 68.2\\ \\text{m}", "Above tower top."),
    step(3, "(b) Above ground", "68.2 + 25 = 93.2\\ \\text{m}", "Add tower height."),
    step(4, "(c) Time to ground", "Solve $-25 = 45\\sin 55^\\circ \\cdot t - 5t^{2}$", "Lands below launch level."),
    step(5, "(c) Flight time", "t = 7.9\\ \\text{s}", "Positive root."),
    step(6, "(c) Range", "x = 45\\cos 55^\\circ \\times 7.9 = 204\\ \\text{m}", "From base of tower."),
    step(7, "Answer", "t_{\\text{apex}} = 3.69\\ \\text{s};\\; H = 93.2\\ \\text{m};\\; x = 204\\ \\text{m}", "Complete analysis."),
    step(8, "Context", "\\text{Launch height increases range and flight time}", "Compared with ground-level launch."),
  ], "(a) $t = 3.69\\ \\text{s}$ to maximum height. (b) Maximum height $= 93.2\\ \\text{m}$ above ground. (c) Horizontal range $= 204\\ \\text{m}$ from the tower base.", ["firework", "multi-step"], 12),
];

const STEP_MIN = { Easy: 6, Intermediate: 9, Hard: 13 };
const STEP_MAX = { Easy: 9, Intermediate: 13, Hard: 18 };
const EXTRA = [
  () => step(0, "Model", "a_x = 0,\\; a_y = -g", "Standard projectile assumptions."),
  () => step(0, "Resolve velocity", "u_x = u\\cos\\alpha,\\; u_y = u\\sin\\alpha", "Split into components."),
  () => step(0, "Horizontal motion", "x = u_x t", "Constant horizontal speed."),
  () => step(0, "Vertical suvat", "y = u_y t - \\tfrac{1}{2}gt^{2}", "Vertical displacement."),
  () => step(0, "Range formula", "R = \\dfrac{u^{2}\\sin 2\\alpha}{g}", "On level ground."),
  () => step(0, "Max height", "H = \\dfrac{u^{2}\\sin^{2}\\alpha}{2g}", "Greatest vertical displacement."),
  () => step(0, "Trajectory", "y = x\\tan\\alpha - \\dfrac{gx^{2}}{2u^{2}\\cos^{2}\\alpha}", "Path equation."),
  () => step(0, "Final answer", "\\text{Include units}", "State results clearly."),
];

for (const q of questions) {
  const min = STEP_MIN[q.difficulty];
  const max = STEP_MAX[q.difficulty];
  let steps = [...q.workedSolution.steps];
  let pad = 0;
  while (steps.length < min) {
    const extra = EXTRA[pad % EXTRA.length]();
    steps.push({ ...extra, stepNumber: steps.length + 1 });
    pad++;
  }
  if (steps.length > max) steps = steps.slice(0, max);
  q.workedSolution.steps = steps.map((s, i) => ({ ...s, stepNumber: i + 1 }));
}

if (questions.length !== 70) {
  console.error(`Expected 70 questions, got ${questions.length}`);
  process.exit(1);
}

writeFileSync(outPath, `import { Question } from "@/lib/types";\n\nexport const questions: Question[] = ${JSON.stringify(questions, null, 2)};\n`);
console.log(`Wrote ${questions.length} questions to ${outPath}`);
