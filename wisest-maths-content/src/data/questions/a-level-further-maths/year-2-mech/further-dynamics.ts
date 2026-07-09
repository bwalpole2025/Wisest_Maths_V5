import { Question } from "@/lib/types";

const LEVEL = "A-Level Further Maths";
const TOPIC = "Further Maths Year 2: Mechanics (Further Mechanics 2)";
const SUBTOPIC = "Further dynamics";
const SUBTOPIC_ID = "fm.y2.mech.further-dynamics";

type Difficulty = Question["difficulty"];
type Step = Question["workedSolution"]["steps"][number];

interface Shell {
  difficulty: Difficulty;
  marks: number;
  answerType: string;
  tags: string[];
  questionText: string;
  steps: Step[];
  finalAnswer: string;
}

const fmt = (value: number, digits = 3): string => Number(value.toPrecision(digits)).toString();
const qid = (n: number): string => `${SUBTOPIC_ID}.q${String(n).padStart(3, "0")}`;

function step(stepNumber: number, description: string, workingLatex: string, explanation: string): Step {
  return { stepNumber, description, workingLatex, explanation, diagram: null };
}

function makeQuestion(index: number, shell: Shell): Question {
  return {
    level: LEVEL,
    topic: TOPIC,
    subtopic: SUBTOPIC,
    subtopicId: SUBTOPIC_ID,
    questionDiagram: null,
    id: qid(index),
    tags: shell.tags,
    difficulty: shell.difficulty,
    marks: shell.marks,
    answerType: shell.answerType,
    questionText: shell.questionText,
    workedSolution: {
      steps: shell.steps,
      finalAnswer: shell.finalAnswer,
    },
  };
}

function timeForceVelocity({ m, c, k, t, context }: { m: number; c: number; k: number; t: number; context: string }): Shell {
  const impulse = c * t + 0.5 * k * t * t;
  const v = impulse / m;
  return {
    difficulty: "Easy",
    marks: 4,
    answerType: "numeric",
    tags: ["variable force", "impulse", "time dependent force"],
    questionText: `${context} has mass $${m}\\,\\text{kg}$ and starts from rest. A force $F=${c}+${k}t$ newtons acts in its direction of motion for $${t}\\,\\text{s}$. Find its speed at that instant.`,
    steps: [
      step(1, "Use Newton's second law", `F=m\\dfrac{dv}{dt}`, "The force varies with time, so acceleration is best written as the time derivative of velocity."),
      step(2, "Substitute the force", `${c}+${k}t=${m}\\dfrac{dv}{dt}`, "This equation links the changing force directly to the changing speed."),
      step(3, "Rearrange for $dv/dt$", `\\dfrac{dv}{dt}=\\dfrac{${c}+${k}t}{${m}}`, "Dividing by the mass gives the acceleration as a function of time."),
      step(4, "Integrate from rest", `v=\\dfrac1{${m}}\\int_0^{${t}}(${c}+${k}t)\\,dt`, "Velocity change is the accumulated acceleration over the time interval."),
      step(5, "Evaluate the integral", `v=\\dfrac1{${m}}\\left[${c}t+\\dfrac{${k}t^2}{2}\\right]_0^{${t}}`, "The constant part contributes linearly and the $t$ part contributes a square term."),
      step(6, "Calculate the impulse", `${c}(${t})+\\dfrac{${k}(${t})^2}{2}=${fmt(impulse)}\\,\\text{N s}`, "Impulse is the total effect of the force over the time."),
      step(7, "Find the speed", `v=\\dfrac{${fmt(impulse)}}{${m}}=${fmt(v)}\\,\\text{m s}^{-1}`, "Since the particle starts from rest, impulse divided by mass gives the final speed."),
    ],
    finalAnswer: `$${fmt(v)}\\,\\text{m s}^{-1}$.`,
  };
}

function timeAccelerationDisplacement({ u, p, q, t, context }: { u: number; p: number; q: number; t: number; context: string }): Shell {
  const v = u + p * t + 0.5 * q * t * t;
  const s = u * t + 0.5 * p * t * t + (q * t * t * t) / 6;
  return {
    difficulty: "Easy",
    marks: 5,
    answerType: "numeric",
    tags: ["variable acceleration", "displacement", "time dependent acceleration"],
    questionText: `${context} moves in a straight line with initial speed $${u}\\,\\text{m s}^{-1}$. Its acceleration after $t$ seconds is $a=${p}+${q}t\\,\\text{m s}^{-2}$. Find its speed and displacement after $${t}\\,\\text{s}$.`,
    steps: [
      step(1, "Write acceleration as a derivative", `a=\\dfrac{dv}{dt}=${p}+${q}t`, "Acceleration is the rate of change of velocity."),
      step(2, "Integrate for velocity", `v=${u}+\\int_0^t(${p}+${q}t)\\,dt`, "The initial speed is added because integration gives the change in speed."),
      step(3, "Obtain the velocity function", `v=${u}+${p}t+\\dfrac{${q}t^2}{2}`, "This gives speed at any time during the motion."),
      step(4, "Substitute the time", `v=${u}+${p}(${t})+\\dfrac{${q}(${t})^2}{2}=${fmt(v)}`, "The requested instant is found by putting in the given value of time."),
      step(5, "Use velocity for displacement", `s=\\int_0^{${t}}v\\,dt`, "Displacement is the accumulated velocity."),
      step(6, "Integrate the velocity function", `s=\\left[${u}t+\\dfrac{${p}t^2}{2}+\\dfrac{${q}t^3}{6}\\right]_0^{${t}}`, "Each term in velocity contributes an area under the velocity-time graph."),
      step(7, "Calculate displacement", `s=${fmt(s)}\\,\\text{m}`, "The positive value means the particle has moved in its initial positive direction."),
      step(8, "State both quantities", `v=${fmt(v)}\\,\\text{m s}^{-1},\\quad s=${fmt(s)}\\,\\text{m}`, "Further dynamics problems often require both integration stages."),
    ],
    finalAnswer: `$v=${fmt(v)}\\,\\text{m s}^{-1}$ and $s=${fmt(s)}\\,\\text{m}$.`,
  };
}

function vdvSpeed({ u, a, b, x, context }: { u: number; a: number; b: number; x: number; context: string }): Shell {
  const v2 = u * u + a * x * x + 2 * b * x;
  const v = Math.sqrt(v2);
  return {
    difficulty: "Intermediate",
    marks: 6,
    answerType: "numeric",
    tags: ["a equals v dv dx", "variable acceleration", "speed-distance"],
    questionText: `${context} moves along a straight line from $x=0$ with initial speed $${u}\\,\\text{m s}^{-1}$. Its acceleration is $a=${a}x+${b}\\,\\text{m s}^{-2}$. Find its speed when $x=${x}\\,\\text{m}$.`,
    steps: [
      step(1, "Choose the distance form of acceleration", `a=v\\dfrac{dv}{dx}`, "Acceleration is given in terms of position, so the $v\\,dv/dx$ form avoids introducing time."),
      step(2, "Substitute the given acceleration", `v\\dfrac{dv}{dx}=${a}x+${b}`, "This relates speed directly to position."),
      step(3, "Separate the variables", `v\\,dv=(${a}x+${b})\\,dx`, "Putting $v$ terms and $x$ terms on opposite sides prepares for integration."),
      step(4, "Set up definite integrals", `\\int_${u}^{v} v\\,dv=\\int_0^{${x}}(${a}x+${b})\\,dx`, "The limits encode the initial speed and initial position."),
      step(5, "Integrate the left side", `\\int_${u}^{v} v\\,dv=\\dfrac12(v^2-${u * u})`, "The left side measures the change in $\\tfrac12v^2$."),
      step(6, "Integrate the right side", `\\int_0^{${x}}(${a}x+${b})\\,dx=\\dfrac{${a}(${x})^2}{2}+${b}(${x})`, "The acceleration contribution accumulates over distance."),
      step(7, "Form the speed equation", `\\dfrac12(v^2-${u * u})=${fmt(0.5 * a * x * x + b * x)}`, "This is the work-energy style result from the $v\\,dv/dx$ method."),
      step(8, "Solve for $v^2$", `v^2=${fmt(v2)}`, "Multiplying by 2 and adding the initial speed squared gives the new speed squared."),
      step(9, "Take the positive root", `v=${fmt(v)}\\,\\text{m s}^{-1}`, "Speed is a magnitude, so the positive square root is used."),
      step(10, "State the answer", `\\boxed{v=${fmt(v)}\\,\\text{m s}^{-1}}`, "The result is the speed at the specified displacement."),
    ],
    finalAnswer: `$${fmt(v)}\\,\\text{m s}^{-1}$.`,
  };
}

function resistanceTerminal({ c, b, v0, context }: { c: number; b: number; v0: number; context: string }): Shell {
  const terminal = c / b;
  const acc = c - b * v0;
  return {
    difficulty: "Intermediate",
    marks: 6,
    answerType: "numeric",
    tags: ["resistance", "terminal speed", "velocity dependent force"],
    questionText: `${context} has acceleration $a=${c}-${b}v$, where $v$ is its speed in $\\text{m s}^{-1}$. Find its terminal speed and its acceleration when $v=${v0}\\,\\text{m s}^{-1}$.`,
    steps: [
      step(1, "Interpret terminal speed", `a=0`, "Terminal speed occurs when the acceleration has fallen to zero."),
      step(2, "Set the acceleration expression to zero", `${c}-${b}v=0`, "At terminal speed, the driving and resisting effects balance."),
      step(3, "Solve for terminal speed", `v=\\dfrac{${c}}{${b}}=${fmt(terminal)}\\,\\text{m s}^{-1}`, "This is the speed the motion approaches if the model remains valid."),
      step(4, "Substitute the given speed", `a=${c}-${b}(${v0})`, "To find the instantaneous acceleration, use the current value of $v$."),
      step(5, "Calculate acceleration", `a=${fmt(acc)}\\,\\text{m s}^{-2}`, "A positive value means the particle is still speeding up; a negative value means it is slowing down."),
      step(6, "Compare with terminal speed", `${v0}\\text{ compared with }${fmt(terminal)}`, "The sign of the acceleration should agree with whether the speed is below or above terminal speed."),
      step(7, "State the terminal speed", `v_T=${fmt(terminal)}\\,\\text{m s}^{-1}`, "This is the balance speed of the model."),
      step(8, "State the instantaneous acceleration", `a=${fmt(acc)}\\,\\text{m s}^{-2}`, "This is the acceleration at the specified speed."),
      step(9, "Give the final result", `\\boxed{v_T=${fmt(terminal)},\\ a=${fmt(acc)}}`, "Both requested values have now been found from the same model."),
    ],
    finalAnswer: `$v_T=${fmt(terminal)}\\,\\text{m s}^{-1}$ and $a=${fmt(acc)}\\,\\text{m s}^{-2}$.`,
  };
}

function workEnergyVariableForce({ m, u, c, k, x, context }: { m: number; u: number; c: number; k: number; x: number; context: string }): Shell {
  const work = c * x + 0.5 * k * x * x;
  const v2 = u * u + (2 * work) / m;
  const v = Math.sqrt(v2);
  return {
    difficulty: "Intermediate",
    marks: 7,
    answerType: "numeric",
    tags: ["variable force", "work energy", "force-distance"],
    questionText: `${context} of mass $${m}\\,\\text{kg}$ moves in a straight line with initial speed $${u}\\,\\text{m s}^{-1}$. A force $F=${c}+${k}x$ newtons acts in the direction of motion. Find its speed after it has moved $${x}\\,\\text{m}$.`,
    steps: [
      step(1, "Use the work-energy principle", `\\Delta K=\\int F\\,dx`, "A force depending on distance is naturally handled by integrating work."),
      step(2, "Write the change in kinetic energy", `\\Delta K=\\dfrac12m(v^2-u^2)`, "Kinetic energy depends on the square of the speed."),
      step(3, "Set up the work integral", `W=\\int_0^{${x}}(${c}+${k}x)\\,dx`, "The force changes with position, so the work is the area under the force-distance graph."),
      step(4, "Evaluate the work", `W=\\left[${c}x+\\dfrac{${k}x^2}{2}\\right]_0^{${x}}=${fmt(work)}\\,\\text{J}`, "The work done is positive because the force acts in the direction of motion."),
      step(5, "Equate work to kinetic energy change", `\\dfrac12(${m})(v^2-${u * u})=${fmt(work)}`, "The work increases the particle's kinetic energy."),
      step(6, "Rearrange for $v^2$", `v^2=${u * u}+\\dfrac{2(${fmt(work)})}{${m}}`, "Add the gained kinetic energy to the initial speed squared."),
      step(7, "Calculate $v^2$", `v^2=${fmt(v2)}`, "This value must be positive for the speed to be real."),
      step(8, "Find the speed", `v=${fmt(v)}\\,\\text{m s}^{-1}`, "Taking the positive square root gives speed rather than velocity direction."),
      step(9, "State the answer", `\\boxed{v=${fmt(v)}\\,\\text{m s}^{-1}}`, "The speed after the stated distance follows from the accumulated work."),
    ],
    finalAnswer: `$${fmt(v)}\\,\\text{m s}^{-1}$.`,
  };
}

function inverseSquareSpeed({ mu, r1, u, r2, context }: { mu: number; r1: number; u: number; r2: number; context: string }): Shell {
  const v2 = u * u + 2 * mu * (1 / r2 - 1 / r1);
  const v = Math.sqrt(v2);
  return {
    difficulty: "Hard",
    marks: 8,
    answerType: "numeric",
    tags: ["inverse square law", "gravitation", "energy"],
    questionText: `${context} moves radially away from a fixed centre under an inverse-square attraction of strength $\\mu=${mu}$. When it is $${r1}\\,\\text{m}$ from the centre its speed is $${u}\\,\\text{m s}^{-1}$. Find its speed when it is $${r2}\\,\\text{m}$ from the centre.`,
    steps: [
      step(1, "Identify the force model", `a=-\\dfrac{\\mu}{r^2}`, "The negative sign shows the acceleration is towards the centre while the particle moves outward."),
      step(2, "Use the radial acceleration form", `a=v\\dfrac{dv}{dr}`, "The acceleration depends on position, so this form connects speed to radius directly."),
      step(3, "Substitute the model", `v\\dfrac{dv}{dr}=-\\dfrac{${mu}}{r^2}`, "This gives a separable differential equation for speed as a function of radius."),
      step(4, "Separate variables", `v\\,dv=-${mu}r^{-2}\\,dr`, "The velocity terms and radius terms can now be integrated."),
      step(5, "Integrate from $r_1$ to $r_2$", `\\int_${u}^{v}v\\,dv=\\int_${r1}^{${r2}}-${mu}r^{-2}\\,dr`, "The limits represent the two stated positions."),
      step(6, "Evaluate the velocity side", `\\dfrac12(v^2-${u * u})`, "The integral of $v$ gives the change in half the speed squared."),
      step(7, "Evaluate the radius side", `${mu}\\left(\\dfrac1{${r2}}-\\dfrac1{${r1}}\\right)`, "Moving outward increases radius, so the attractive field removes kinetic energy."),
      step(8, "Write the energy equation", `\\dfrac12(v^2-${u * u})=${mu}\\left(\\dfrac1{${r2}}-\\dfrac1{${r1}}\\right)`, "This is the same conservation result as using potential $-\\mu/r$."),
      step(9, "Rearrange for $v^2$", `v^2=${u * u}+2(${mu})\\left(\\dfrac1{${r2}}-\\dfrac1{${r1}}\\right)`, "The bracket is negative here because the particle has moved farther from the centre."),
      step(10, "Calculate $v^2$", `v^2=${fmt(v2)}`, "A positive value means the particle reaches the new radius."),
      step(11, "Take the square root", `v=${fmt(v)}\\,\\text{m s}^{-1}`, "Speed is the positive magnitude."),
      step(12, "Check the trend", `${fmt(v)}<${u}`, "The speed has decreased, as expected while moving against attraction."),
      step(13, "State the answer", `\\boxed{v=${fmt(v)}\\,\\text{m s}^{-1}}`, "This is the speed at the larger radius."),
    ],
    finalAnswer: `$${fmt(v)}\\,\\text{m s}^{-1}$.`,
  };
}

function escapeSpeed({ mu, r, context }: { mu: number; r: number; context: string }): Shell {
  const v = Math.sqrt((2 * mu) / r);
  return {
    difficulty: "Hard",
    marks: 8,
    answerType: "numeric",
    tags: ["inverse square law", "escape speed", "gravitation"],
    questionText: `${context} is at distance $${r}\\,\\text{m}$ from a fixed centre attracting it with inverse-square strength $\\mu=${mu}$. Find the least radial speed needed to escape to infinity.`,
    steps: [
      step(1, "Use specific mechanical energy", `E=\\dfrac12v^2-\\dfrac{\\mu}{r}`, "For an inverse-square attraction, the potential energy per unit mass is $-\\mu/r$."),
      step(2, "Interpret escape", `r\\to\\infty`, "Escaping means the particle can reach arbitrarily large distance."),
      step(3, "Set the threshold condition", `v\\to0\\text{ as }r\\to\\infty`, "The least speed corresponds to arriving at infinity with zero spare speed."),
      step(4, "Find the final energy", `E_{\\infty}=0`, "At infinity the potential tends to zero and the limiting kinetic energy is also zero."),
      step(5, "Equate initial energy to zero", `\\dfrac12v^2-\\dfrac{${mu}}{${r}}=0`, "Energy is conserved, so the initial energy must equal the threshold final energy."),
      step(6, "Rearrange", `\\dfrac12v^2=\\dfrac{${mu}}{${r}}`, "The initial kinetic energy must exactly cancel the negative potential energy."),
      step(7, "Solve for $v^2$", `v^2=\\dfrac{2(${mu})}{${r}}`, "The factor 2 comes from kinetic energy."),
      step(8, "Calculate $v^2$", `v^2=${fmt((2 * mu) / r)}`, "This gives the square of the least escape speed."),
      step(9, "Take the square root", `v=${fmt(v)}\\,\\text{m s}^{-1}`, "The positive root is the speed required."),
      step(10, "Check dependence on radius", `v\\propto r^{-1/2}`, "Being farther away reduces the escape speed."),
      step(11, "Check dependence on field strength", `v\\propto \\sqrt{\\mu}`, "A stronger attraction requires a larger escape speed."),
      step(12, "State the threshold speed", `v_{\\min}=${fmt(v)}\\,\\text{m s}^{-1}`, "Any smaller speed would turn back before infinity."),
      step(13, "Give the final answer", `\\boxed{${fmt(v)}\\,\\text{m s}^{-1}}`, "This is the least radial speed for escape."),
    ],
    finalAnswer: `$${fmt(v)}\\,\\text{m s}^{-1}$.`,
  };
}

function circularOrbit({ mu, r, context }: { mu: number; r: number; context: string }): Shell {
  const v = Math.sqrt(mu / r);
  const period = (2 * Math.PI * r) / v;
  return {
    difficulty: "Hard",
    marks: 8,
    answerType: "numeric",
    tags: ["inverse square law", "circular orbit", "period"],
    questionText: `${context} moves in a circular orbit of radius $${r}\\,\\text{m}$ under an inverse-square attraction of strength $\\mu=${mu}$. Find its speed and the period of the orbit.`,
    steps: [
      step(1, "Write the inward acceleration for circular motion", `a=\\dfrac{v^2}{r}`, "Uniform circular motion requires acceleration towards the centre."),
      step(2, "Write the inverse-square acceleration", `a=\\dfrac{\\mu}{r^2}`, "The field supplies the inward acceleration."),
      step(3, "Equate the accelerations", `\\dfrac{v^2}{r}=\\dfrac{${mu}}{${r}^2}`, "For a circular orbit, the required centripetal acceleration equals the gravitational acceleration."),
      step(4, "Solve for $v^2$", `v^2=\\dfrac{${mu}}{${r}}`, "Multiplying by $r$ leaves the orbital speed squared."),
      step(5, "Find the speed", `v=${fmt(v)}\\,\\text{m s}^{-1}`, "A larger radius gives a lower circular-orbit speed in an inverse-square field."),
      step(6, "Recall the period relation", `T=\\dfrac{2\\pi r}{v}`, "The period is distance around the circle divided by speed."),
      step(7, "Substitute the circumference", `2\\pi r=2\\pi(${r})`, "One complete orbit travels one circumference."),
      step(8, "Substitute the speed", `T=\\dfrac{2\\pi(${r})}{${fmt(v)}}`, "The calculated orbital speed controls the time for a full circuit."),
      step(9, "Calculate the period", `T=${fmt(period)}\\,\\text{s}`, "This is the time for one complete orbit."),
      step(10, "Connect with Kepler form", `T=2\\pi\\sqrt{\\dfrac{r^3}{\\mu}}`, "The same result can be written directly from the inverse-square law."),
      step(11, "Check units", `\\sqrt{r^3/\\mu}\\text{ has units of seconds}`, "This confirms the period formula is dimensionally consistent."),
      step(12, "State the speed", `v=${fmt(v)}\\,\\text{m s}^{-1}`, "The speed is constant in a circular orbit."),
      step(13, "State the period", `T=${fmt(period)}\\,\\text{s}`, "The two results describe the same circular motion."),
    ],
    finalAnswer: `$v=${fmt(v)}\\,\\text{m s}^{-1}$ and $T=${fmt(period)}\\,\\text{s}$.`,
  };
}

function maximumRadius({ mu, r0, u, context }: { mu: number; r0: number; u: number; context: string }): Shell {
  const invR = 1 / r0 - (u * u) / (2 * mu);
  const rMax = 1 / invR;
  return {
    difficulty: "Hard",
    marks: 9,
    answerType: "numeric",
    tags: ["inverse square law", "maximum distance", "energy"],
    questionText: `${context} is projected radially away from a fixed attracting centre with speed $${u}\\,\\text{m s}^{-1}$ at distance $${r0}\\,\\text{m}$. The inverse-square strength is $\\mu=${mu}$. Assuming it does not escape, find its greatest distance from the centre.`,
    steps: [
      step(1, "Use specific energy", `E=\\dfrac12v^2-\\dfrac{\\mu}{r}`, "Inverse-square attraction has potential energy per unit mass $-\\mu/r$."),
      step(2, "Write the initial energy", `E=\\dfrac12(${u})^2-\\dfrac{${mu}}{${r0}}`, "The particle starts with kinetic energy but negative potential energy."),
      step(3, "Identify the turning point", `v=0\\text{ at }r=R`, "At the greatest distance, the particle momentarily stops before returning."),
      step(4, "Write the energy at greatest distance", `E=-\\dfrac{${mu}}{R}`, "There is no kinetic energy at the turning point."),
      step(5, "Equate energies", `\\dfrac12(${u})^2-\\dfrac{${mu}}{${r0}}=-\\dfrac{${mu}}{R}`, "Energy conservation links the launch point and the turning point."),
      step(6, "Move terms into reciprocal form", `\\dfrac{${mu}}{R}=\\dfrac{${mu}}{${r0}}-\\dfrac{${u * u}}{2}`, "Solving in terms of $1/R$ is simplest because the potential contains $1/r$."),
      step(7, "Divide by $\\mu$", `\\dfrac1R=\\dfrac1{${r0}}-\\dfrac{${u * u}}{2(${mu})}`, "This shows directly whether the particle escapes: the right side must be positive."),
      step(8, "Substitute the values", `\\dfrac1R=${fmt(invR, 4)}`, "The positive reciprocal confirms a finite greatest distance."),
      step(9, "Invert to find $R$", `R=${fmt(rMax)}\\,\\text{m}`, "The reciprocal form is now converted back to distance."),
      step(10, "Check the distance has increased", `${fmt(rMax)}>${r0}`, "The maximum distance should be larger than the launch distance."),
      step(11, "Check against escape", `${u}<\\sqrt{\\dfrac{2(${mu})}{${r0}}}`, "The launch speed is below escape speed, so a finite turning point is expected."),
      step(12, "State the physical meaning", `v=0\\text{ at }r=${fmt(rMax)}`, "At this point the outward motion stops instantaneously."),
      step(13, "Give the final answer", `\\boxed{R=${fmt(rMax)}\\,\\text{m}}`, "This is the greatest distance from the attracting centre."),
    ],
    finalAnswer: `$${fmt(rMax)}\\,\\text{m}$.`,
  };
}

const timeForceSpecs = [
  { m: 4, c: 6, k: 2, t: 5, context: "A particle" },
  { m: 3, c: 5, k: 1.5, t: 4, context: "A small trolley" },
  { m: 6, c: 8, k: 2, t: 6, context: "A smooth bead" },
  { m: 5, c: 10, k: 3, t: 3, context: "A block" },
  { m: 2.5, c: 4, k: 1.2, t: 5, context: "A particle" },
  { m: 7, c: 9, k: 2.5, t: 4, context: "A sledge" },
  { m: 8, c: 12, k: 1, t: 7, context: "A cart" },
  { m: 3.5, c: 7, k: 1.8, t: 6, context: "A bead" },
  { m: 9, c: 15, k: 2, t: 5, context: "A particle" },
  { m: 4.5, c: 5, k: 2.4, t: 4, context: "A trolley" },
];

const timeAccelerationSpecs = [
  { u: 2, p: 3, q: 0.8, t: 5, context: "A particle" },
  { u: 4, p: 2, q: 1.2, t: 4, context: "A small car" },
  { u: 1.5, p: 4, q: 0.5, t: 6, context: "A bead" },
  { u: 3, p: 1.8, q: 0.9, t: 5, context: "A trolley" },
  { u: 5, p: 2.5, q: 0.6, t: 4, context: "A particle" },
  { u: 2.2, p: 3.5, q: 0.7, t: 6, context: "A runner model" },
  { u: 1, p: 5, q: 0.4, t: 5, context: "A smooth bead" },
  { u: 3.5, p: 2.2, q: 1.1, t: 3, context: "A particle" },
];

const vdvSpecs = [
  { u: 3, a: 2, b: 4, x: 5, context: "A particle" },
  { u: 5, a: 1.5, b: 3, x: 6, context: "A small body" },
  { u: 4, a: 3, b: 2, x: 4, context: "A bead on a wire" },
  { u: 2, a: 2.5, b: 5, x: 3, context: "A particle" },
  { u: 6, a: 1.2, b: 4, x: 8, context: "A trolley" },
  { u: 3.5, a: 2.2, b: 3.5, x: 5, context: "A smooth bead" },
  { u: 4.5, a: 1.8, b: 2.5, x: 7, context: "A particle" },
  { u: 2.5, a: 3.2, b: 1.5, x: 4, context: "A small cart" },
  { u: 5.5, a: 0.9, b: 6, x: 6, context: "A particle" },
  { u: 3, a: 4, b: 1, x: 3, context: "A bead" },
  { u: 7, a: 1.4, b: 2.8, x: 5, context: "A body" },
  { u: 4, a: 2.6, b: 4.2, x: 4, context: "A particle" },
];

const resistanceSpecs = [
  { c: 12, b: 0.6, v0: 10, context: "A particle moving through a resisting medium" },
  { c: 15, b: 0.75, v0: 24, context: "A parachute model" },
  { c: 20, b: 0.8, v0: 15, context: "A small object in a fluid" },
  { c: 18, b: 0.9, v0: 12, context: "A particle under resistance" },
  { c: 10, b: 0.4, v0: 30, context: "A powered particle" },
  { c: 24, b: 1.2, v0: 16, context: "A vertical-motion model" },
  { c: 14, b: 0.5, v0: 20, context: "A body in a resisting medium" },
  { c: 16, b: 0.64, v0: 18, context: "A particle" },
];

const workEnergySpecs = [
  { m: 5, u: 2, c: 6, k: 3, x: 4, context: "A particle" },
  { m: 4, u: 3, c: 5, k: 2, x: 6, context: "A smooth block" },
  { m: 8, u: 1.5, c: 10, k: 1.5, x: 5, context: "A trolley" },
  { m: 6, u: 4, c: 8, k: 2.5, x: 3, context: "A particle" },
  { m: 3, u: 2.5, c: 4, k: 4, x: 5, context: "A bead" },
  { m: 7, u: 3.5, c: 9, k: 1.8, x: 4, context: "A body" },
  { m: 5.5, u: 1, c: 7, k: 2.2, x: 6, context: "A cart" },
  { m: 9, u: 5, c: 12, k: 1.2, x: 5, context: "A particle" },
  { m: 4.5, u: 2, c: 6, k: 2.8, x: 7, context: "A small trolley" },
  { m: 6.5, u: 3, c: 11, k: 1.6, x: 4, context: "A smooth bead" },
];

const inverseSquareSpeedSpecs = [
  { mu: 200, r1: 5, u: 12, r2: 10, context: "A particle" },
  { mu: 150, r1: 4, u: 14, r2: 8, context: "A small body" },
  { mu: 300, r1: 6, u: 13, r2: 12, context: "A particle" },
  { mu: 180, r1: 3, u: 16, r2: 9, context: "A bead" },
  { mu: 250, r1: 5, u: 15, r2: 15, context: "A body" },
  { mu: 120, r1: 4, u: 11, r2: 6, context: "A particle" },
  { mu: 350, r1: 7, u: 14, r2: 14, context: "A spacecraft model" },
  { mu: 220, r1: 5, u: 13, r2: 11, context: "A particle" },
];

const escapeSpecs = [
  { mu: 200, r: 5, context: "A particle" },
  { mu: 320, r: 8, context: "A spacecraft model" },
  { mu: 180, r: 4, context: "A small body" },
  { mu: 450, r: 10, context: "A particle" },
];

const orbitSpecs = [
  { mu: 200, r: 5, context: "A satellite model" },
  { mu: 500, r: 10, context: "A particle" },
  { mu: 288, r: 8, context: "A small body" },
  { mu: 432, r: 12, context: "A spacecraft model" },
  { mu: 125, r: 5, context: "A particle" },
];

const maximumRadiusSpecs = [
  { mu: 200, r0: 5, u: 7, context: "A particle" },
  { mu: 300, r0: 6, u: 8, context: "A small body" },
  { mu: 180, r0: 4, u: 6, context: "A bead" },
  { mu: 250, r0: 5, u: 8, context: "A particle" },
  { mu: 400, r0: 10, u: 6, context: "A spacecraft model" },
];

export const questions: Question[] = [
  ...timeForceSpecs.map((spec, index) => makeQuestion(index + 1, timeForceVelocity(spec))),
  ...timeAccelerationSpecs.map((spec, index) => makeQuestion(index + 11, timeAccelerationDisplacement(spec))),
  ...vdvSpecs.map((spec, index) => makeQuestion(index + 19, vdvSpeed(spec))),
  ...resistanceSpecs.map((spec, index) => makeQuestion(index + 31, resistanceTerminal(spec))),
  ...workEnergySpecs.map((spec, index) => makeQuestion(index + 39, workEnergyVariableForce(spec))),
  ...inverseSquareSpeedSpecs.map((spec, index) => makeQuestion(index + 49, inverseSquareSpeed(spec))),
  ...escapeSpecs.map((spec, index) => makeQuestion(index + 57, escapeSpeed(spec))),
  ...orbitSpecs.map((spec, index) => makeQuestion(index + 61, circularOrbit(spec))),
  ...maximumRadiusSpecs.map((spec, index) => makeQuestion(index + 66, maximumRadius(spec))),
];
