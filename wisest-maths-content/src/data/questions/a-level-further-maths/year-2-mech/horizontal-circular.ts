import { Question } from "@/lib/types";

const LEVEL = "A-Level Further Maths";
const TOPIC = "Further Maths Year 2: Mechanics (Further Mechanics 2)";
const SUBTOPIC = "Horizontal circular motion";
const SUBTOPIC_ID = "fm.y2.mech.horizontal-circular";
const g = 9.8;

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

const sf = (value: number, digits = 3): string => Number(value.toPrecision(digits)).toString();
const deg = (rad: number): number => (180 * rad) / Math.PI;
const rad = (degrees: number): number => (Math.PI * degrees) / 180;
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

function speedRadius({ r, v, context }: { r: number; v: number; context: string }): Shell {
  const omega = v / r;
  const a = (v * v) / r;
  return {
    difficulty: "Easy",
    marks: 4,
    answerType: "numeric",
    tags: ["angular speed", "centripetal acceleration", "speed-radius"],
    questionText: `${context} moves in a horizontal circle of radius $${r}\\,\\text{m}$ with constant speed $${v}\\,\\text{m s}^{-1}$. Find its angular speed and its acceleration towards the centre.`,
    steps: [
      step(1, "Identify the radius and speed", `r=${r},\\quad v=${v}`, "For uniform circular motion, the speed is constant but the direction of velocity is continually changing."),
      step(2, "Recall angular speed", "\\omega=\\dfrac{v}{r}", "Angular speed measures how quickly the radius turns, so linear speed is radius multiplied by angular speed."),
      step(3, "Substitute into angular speed", `\\omega=\\dfrac{${v}}{${r}}`, "The given speed and radius go directly into the formula."),
      step(4, "Calculate angular speed", `\\omega=${sf(omega)}\\,\\text{rad s}^{-1}`, "Radians are dimensionless, but we include rad s^{-1} to show this is an angular rate."),
      step(5, "Recall centripetal acceleration", `a=\\dfrac{v^{2}}{r}`, "The acceleration points towards the centre because the velocity direction is turning inwards."),
      step(6, "Substitute and calculate acceleration", `a=\\dfrac{${v}^{2}}{${r}}=${sf(a)}\\,\\text{m s}^{-2}`, "Squaring the speed reflects that faster motion needs much more inward acceleration."),
      step(7, "State the answer", `\\omega=${sf(omega)}\\,\\text{rad s}^{-1},\\quad a=${sf(a)}\\,\\text{m s}^{-2}`, "Both quantities describe the same circular motion: one angular, one linear."),
    ],
    finalAnswer: `$\\omega=${sf(omega)}\\,\\text{rad s}^{-1}$ and $a=${sf(a)}\\,\\text{m s}^{-2}$ towards the centre.`,
  };
}

function force({ m, r, v, context }: { m: number; r: number; v: number; context: string }): Shell {
  const f = (m * v * v) / r;
  return {
    difficulty: "Easy",
    marks: 4,
    answerType: "numeric",
    tags: ["centripetal force", "newton second law"],
    questionText: `${context} of mass $${m}\\,\\text{kg}$ travels at $${v}\\,\\text{m s}^{-1}$ in a horizontal circle of radius $${r}\\,\\text{m}$. Find the resultant force towards the centre.`,
    steps: [
      step(1, "Record the data", `m=${m},\\quad v=${v},\\quad r=${r}`, "The mass tells us how much force is needed for a given centripetal acceleration."),
      step(2, "Recall centripetal acceleration", `a=\\dfrac{v^{2}}{r}`, "Circular motion requires an inward acceleration even when the speed is constant."),
      step(3, "Use Newton's second law", `F=ma`, "The resultant inward force is mass multiplied by the inward acceleration."),
      step(4, "Combine the formulae", `F=m\\dfrac{v^{2}}{r}`, "This gives the standard centripetal force formula."),
      step(5, "Substitute the values", `F=${m}\\times\\dfrac{${v}^{2}}{${r}}`, "All units are SI units, so the force will be in newtons."),
      step(6, "Calculate the force", `F=${sf(f)}\\,\\text{N}`, "The force is directed horizontally towards the centre of the circle."),
      step(7, "State the answer", `\\text{Resultant inward force}=${sf(f)}\\,\\text{N}`, "Without this inward resultant, the body would continue in a straight line."),
    ],
    finalAnswer: `$${sf(f)}\\,\\text{N}$ towards the centre.`,
  };
}

function period({ r, v, context }: { r: number; v: number; context: string }): Shell {
  const omega = v / r;
  const t = (2 * Math.PI) / omega;
  return {
    difficulty: "Easy",
    marks: 4,
    answerType: "numeric",
    tags: ["period", "angular speed"],
    questionText: `${context} moves in a horizontal circle of radius $${r}\\,\\text{m}$ at speed $${v}\\,\\text{m s}^{-1}$. Find the time for one complete revolution.`,
    steps: [
      step(1, "Identify the circular path", `r=${r},\\quad v=${v}`, "One complete revolution means the radius has turned through $2\\pi$ radians."),
      step(2, "Find angular speed", `\\omega=\\dfrac{v}{r}=\\dfrac{${v}}{${r}}`, "Angular speed connects the linear speed to the rate of turning."),
      step(3, "Calculate angular speed", `\\omega=${sf(omega)}\\,\\text{rad s}^{-1}`, "This is the angle swept out each second."),
      step(4, "Use the period relation", `T=\\dfrac{2\\pi}{\\omega}`, "The period is the total angle in one lap divided by the angular speed."),
      step(5, "Substitute", `T=\\dfrac{2\\pi}{${sf(omega)}}`, "Using radians keeps the circular-motion formula consistent."),
      step(6, "Calculate the period", `T=${sf(t)}\\,\\text{s}`, "This is the time for exactly one circuit."),
      step(7, "State the answer", `\\text{Period}=${sf(t)}\\,\\text{s}`, "A larger angular speed would give a smaller period."),
    ],
    finalAnswer: `$${sf(t)}\\,\\text{s}$ for one complete revolution.`,
  };
}

function flatFrictionMu({ r, v, context }: { r: number; v: number; context: string }): Shell {
  const mu = (v * v) / (r * g);
  return {
    difficulty: "Easy",
    marks: 4,
    answerType: "numeric",
    tags: ["friction", "flat curve", "minimum coefficient"],
    questionText: `${context} moves at $${v}\\,\\text{m s}^{-1}$ round a flat horizontal circular path of radius $${r}\\,\\text{m}$. Assuming friction alone supplies the centripetal force, find the least coefficient of friction needed. Take $g=9.8\\,\\text{m s}^{-2}$.`,
    steps: [
      step(1, "Identify the force source", `F_{\\text{friction}}=\\mu R`, "On a flat track, friction is the horizontal force that can point towards the centre."),
      step(2, "Use vertical equilibrium", `R=mg`, "There is no vertical acceleration, so the normal reaction balances the weight."),
      step(3, "Write the limiting friction", `F_{\\max}=\\mu mg`, "The least coefficient occurs when friction is just at its limiting value."),
      step(4, "Set friction equal to centripetal force", `\\mu mg=\\dfrac{mv^{2}}{r}`, "The required inward resultant must equal the centripetal force."),
      step(5, "Cancel the mass", `\\mu g=\\dfrac{v^{2}}{r}`, "The mass cancels because both friction and required force scale with mass."),
      step(6, "Calculate the coefficient", `\\mu=\\dfrac{${v}^{2}}{${r}\\times 9.8}=${sf(mu)}`, "A higher speed or smaller radius needs a larger coefficient."),
      step(7, "State the answer", `\\mu_{\\min}=${sf(mu)}`, "This is the threshold value: any smaller coefficient would not provide enough inward force."),
    ],
    finalAnswer: `$\\mu_{\\min}=${sf(mu)}$.`,
  };
}

function flatMaxSpeed({ r, mu, context }: { r: number; mu: number; context: string }): Shell {
  const v = Math.sqrt(mu * r * g);
  return {
    difficulty: "Easy",
    marks: 4,
    answerType: "numeric",
    tags: ["friction", "maximum speed", "flat curve"],
    questionText: `${context} travels round a flat horizontal circular bend of radius $${r}\\,\\text{m}$. The coefficient of friction is $${mu}$. Find the greatest speed without skidding. Take $g=9.8\\,\\text{m s}^{-2}$.`,
    steps: [
      step(1, "Use friction as the centripetal force", `F=\\mu R`, "On a flat bend, there is no inward component of the normal reaction, so friction must provide the inward force."),
      step(2, "Use vertical equilibrium", `R=mg`, "The vehicle has no vertical acceleration."),
      step(3, "Write limiting friction", `F_{\\max}=\\mu mg`, "At the greatest speed, friction is just about to reach its limiting value."),
      step(4, "Equate to centripetal force", `\\mu mg=\\dfrac{mv^{2}}{r}`, "The largest possible inward force sets the largest possible speed."),
      step(5, "Solve for speed", `v=\\sqrt{\\mu rg}`, "The mass cancels, so the result depends on grip, radius and gravity."),
      step(6, "Substitute and calculate", `v=\\sqrt{${mu}\\times ${r}\\times 9.8}=${sf(v)}\\,\\text{m s}^{-1}`, "A larger radius or larger friction coefficient allows a higher speed."),
      step(7, "State the answer", `v_{\\max}=${sf(v)}\\,\\text{m s}^{-1}`, "Above this speed, friction would be insufficient to keep the circular path."),
    ],
    finalAnswer: `$${sf(v)}\\,\\text{m s}^{-1}$.`,
  };
}

function stringTension({ m, r, v, context }: { m: number; r: number; v: number; context: string }): Shell {
  const tension = (m * v * v) / r;
  return {
    difficulty: "Easy",
    marks: 4,
    answerType: "numeric",
    tags: ["tension", "smooth table", "centripetal force"],
    questionText: `${context} of mass $${m}\\,\\text{kg}$ moves on a smooth horizontal table in a circle of radius $${r}\\,\\text{m}$, held by a light string. If its speed is $${v}\\,\\text{m s}^{-1}$, find the tension in the string.`,
    steps: [
      step(1, "Identify the horizontal force", `T\\text{ acts towards the centre}`, "On a smooth table there is no friction, so the string tension supplies the inward force."),
      step(2, "Write the centripetal force requirement", `F=\\dfrac{mv^{2}}{r}`, "The inward resultant needed for circular motion is $mv^2/r$."),
      step(3, "Equate tension to resultant force", `T=\\dfrac{mv^{2}}{r}`, "The tension is the only horizontal force, so it equals the required resultant."),
      step(4, "Substitute", `T=\\dfrac{${m}\\times ${v}^{2}}{${r}}`, "The speed is squared because changing direction faster becomes rapidly more demanding."),
      step(5, "Calculate", `T=${sf(tension)}\\,\\text{N}`, "The answer is a force, so the unit is newtons."),
      step(6, "Check direction", `T\\text{ is towards the centre}`, "Tension always pulls along the string towards the fixed centre."),
      step(7, "State the answer", `T=${sf(tension)}\\,\\text{N}`, "This is the constant tension needed for uniform circular motion."),
    ],
    finalAnswer: `$T=${sf(tension)}\\,\\text{N}$.`,
  };
}

function omegaFromAccel({ r, a, context }: { r: number; a: number; context: string }): Shell {
  const omega = Math.sqrt(a / r);
  const v = r * omega;
  return {
    difficulty: "Easy",
    marks: 4,
    answerType: "numeric",
    tags: ["angular speed", "centripetal acceleration"],
    questionText: `${context} moves in a horizontal circle of radius $${r}\\,\\text{m}$. Its acceleration towards the centre has magnitude $${a}\\,\\text{m s}^{-2}$. Find its angular speed and speed.`,
    steps: [
      step(1, "Write the acceleration formula", `a=r\\omega^{2}`, "This version is useful because the radius and centripetal acceleration are given."),
      step(2, "Substitute", `${a}=${r}\\omega^{2}`, "The unknown is the angular speed."),
      step(3, "Solve for angular speed", `\\omega=\\sqrt{\\dfrac{${a}}{${r}}}`, "Taking the positive square root gives the physical angular speed."),
      step(4, "Calculate angular speed", `\\omega=${sf(omega)}\\,\\text{rad s}^{-1}`, "Angular speed is the rate at which the radius turns."),
      step(5, "Use linear speed relation", `v=r\\omega`, "Linear speed is radius multiplied by angular speed."),
      step(6, "Calculate speed", `v=${r}\\times ${sf(omega)}=${sf(v)}\\,\\text{m s}^{-1}`, "This converts from angular motion back to ordinary speed."),
      step(7, "State the answer", `\\omega=${sf(omega)}\\,\\text{rad s}^{-1},\\quad v=${sf(v)}\\,\\text{m s}^{-1}`, "These values describe the same uniform circular motion."),
    ],
    finalAnswer: `$\\omega=${sf(omega)}\\,\\text{rad s}^{-1}$ and $v=${sf(v)}\\,\\text{m s}^{-1}$.`,
  };
}

function conicalOmega({ m, l, omega }: { m: number; l: number; omega: number }): Shell {
  const c = g / (omega * omega * l);
  const theta = deg(Math.acos(c));
  const radius = l * Math.sin(rad(theta));
  const tension = m * omega * omega * l;
  return {
    difficulty: "Intermediate",
    marks: 7,
    answerType: "numeric",
    tags: ["conical pendulum", "angular speed", "tension"],
    questionText: `A particle of mass $${m}\\,\\text{kg}$ is attached to a light string of length $${l}\\,\\text{m}$ and moves as a conical pendulum with angular speed $${omega}\\,\\text{rad s}^{-1}$. Find the angle the string makes with the vertical, the radius of the circular path, and the tension. Take $g=9.8\\,\\text{m s}^{-2}$.`,
    steps: [
      step(1, "Define the geometry", `r=l\\sin\\theta`, "The particle moves in a horizontal circle whose radius is the horizontal component of the string length."),
      step(2, "Resolve vertically", `T\\cos\\theta=mg`, "There is no vertical acceleration, so the vertical component of tension balances the weight."),
      step(3, "Resolve horizontally", `T\\sin\\theta=m\\omega^{2}r`, "The horizontal component of tension supplies the centripetal force."),
      step(4, "Substitute the radius", `T\\sin\\theta=m\\omega^{2}l\\sin\\theta`, "The circular radius is controlled by the string angle."),
      step(5, "Simplify the horizontal equation", `T=m\\omega^{2}l`, "Since the motion is a non-zero circle, $\\sin\\theta$ cancels."),
      step(6, "Combine with the vertical equation", `m\\omega^{2}l\\cos\\theta=mg`, "Substituting for $T$ links the angle directly to angular speed."),
      step(7, "Solve for the angle", `\\cos\\theta=\\dfrac{g}{\\omega^{2}l}=\\dfrac{9.8}{${omega}^{2}\\times ${l}}=${sf(c)}`, "A larger angular speed makes the string lean further from the vertical."),
      step(8, "Calculate the angle", `\\theta=${sf(theta)}^{\\circ}`, "The inverse cosine gives the physical angle to the vertical."),
      step(9, "Find the radius", `r=${l}\\sin ${sf(theta)}^{\\circ}=${sf(radius)}\\,\\text{m}`, "Once the angle is known, the horizontal radius follows from the right triangle."),
      step(10, "Find the tension", `T=${m}\\times ${omega}^{2}\\times ${l}=${sf(tension)}\\,\\text{N}`, "The tension must both support the weight and pull the particle inwards."),
    ],
    finalAnswer: `$\\theta=${sf(theta)}^{\\circ}$, $r=${sf(radius)}\\,\\text{m}$, $T=${sf(tension)}\\,\\text{N}$.`,
  };
}

function conicalAngle({ m, l, theta }: { m: number; l: number; theta: number }): Shell {
  const c = Math.cos(rad(theta));
  const omega = Math.sqrt(g / (l * c));
  const periodValue = (2 * Math.PI) / omega;
  const tension = (m * g) / c;
  return {
    difficulty: "Intermediate",
    marks: 7,
    answerType: "numeric",
    tags: ["conical pendulum", "period", "tension"],
    questionText: `A conical pendulum has a particle of mass $${m}\\,\\text{kg}$ on a string of length $${l}\\,\\text{m}$. The string makes an angle of $${theta}^{\\circ}$ with the vertical. Find the angular speed, the period of the motion, and the tension. Take $g=9.8\\,\\text{m s}^{-2}$.`,
    steps: [
      step(1, "Use the conical pendulum geometry", `r=l\\sin\\theta`, "The radius of the horizontal circle is the horizontal projection of the string."),
      step(2, "Resolve vertically", `T\\cos\\theta=mg`, "The particle does not accelerate vertically."),
      step(3, "Resolve horizontally", `T\\sin\\theta=m\\omega^{2}r`, "The horizontal component of tension supplies the centripetal force."),
      step(4, "Substitute the radius", `T\\sin\\theta=m\\omega^{2}l\\sin\\theta`, "This expresses the circular radius using the string length and angle."),
      step(5, "Cancel the common factor", `T=m\\omega^{2}l`, "For a non-zero angle, $\sin\\theta$ appears on both sides."),
      step(6, "Use vertical balance", `m\\omega^{2}l\\cos\\theta=mg`, "Substituting $T$ into the vertical equation gives an equation for angular speed."),
      step(7, "Solve for angular speed", `\\omega=\\sqrt{\\dfrac{g}{l\\cos\\theta}}`, "The steeper the string, the larger the angular speed needed."),
      step(8, "Substitute", `\\omega=\\sqrt{\\dfrac{9.8}{${l}\\cos ${theta}^{\\circ}}}=${sf(omega)}\\,\\text{rad s}^{-1}`, "The angle must be used with cosine because it is measured from the vertical."),
      step(9, "Find the period", `T_{p}=\\dfrac{2\\pi}{\\omega}=\\dfrac{2\\pi}{${sf(omega)}}=${sf(periodValue)}\\,\\text{s}`, "The period is the time for one full $2\\pi$ radians of rotation."),
      step(10, "Find the string tension", `T=\\dfrac{mg}{\\cos\\theta}=\\dfrac{${m}\\times 9.8}{\\cos ${theta}^{\\circ}}=${sf(tension)}\\,\\text{N}`, "The vertical component of tension must support the weight."),
    ],
    finalAnswer: `$\\omega=${sf(omega)}\\,\\text{rad s}^{-1}$, period $=${sf(periodValue)}\\,\\text{s}$, tension $=${sf(tension)}\\,\\text{N}$.`,
  };
}

function bankedSpeed({ m, r, theta }: { m: number; r: number; theta: number }): Shell {
  const t = Math.tan(rad(theta));
  const v = Math.sqrt(r * g * t);
  const reaction = (m * g) / Math.cos(rad(theta));
  return {
    difficulty: "Intermediate",
    marks: 7,
    answerType: "numeric",
    tags: ["banked track", "no friction", "normal reaction"],
    questionText: `A vehicle of mass $${m}\\,\\text{kg}$ travels round a smooth banked circular track of radius $${r}\\,\\text{m}$. The track is banked at $${theta}^{\\circ}$ to the horizontal. Find the speed for which no friction is required, and find the normal reaction. Take $g=9.8\\,\\text{m s}^{-2}$.`,
    steps: [
      step(1, "Identify the forces", `R\\text{ and }mg`, "On a smooth banked track there is no friction, so only weight and normal reaction act."),
      step(2, "Resolve vertically", `R\\cos\\theta=mg`, "There is no vertical acceleration."),
      step(3, "Resolve horizontally", `R\\sin\\theta=\\dfrac{mv^{2}}{r}`, "The horizontal component of the normal reaction supplies the centripetal force."),
      step(4, "Divide the equations", `\\tan\\theta=\\dfrac{v^{2}}{rg}`, "Dividing removes both $R$ and $m$, leaving the design speed relation."),
      step(5, "Solve for speed", `v=\\sqrt{rg\\tan\\theta}`, "A steeper bank or larger radius supports a greater speed without friction."),
      step(6, "Substitute", `v=\\sqrt{${r}\\times 9.8\\times \\tan ${theta}^{\\circ}}`, "The angle is measured from the horizontal."),
      step(7, "Calculate speed", `v=${sf(v)}\\,\\text{m s}^{-1}`, "This is the speed where the normal reaction alone gives the inward force."),
      step(8, "Find normal reaction", `R=\\dfrac{mg}{\\cos\\theta}`, "The vertical component of $R$ must balance the weight."),
      step(9, "Substitute for reaction", `R=\\dfrac{${m}\\times 9.8}{\\cos ${theta}^{\\circ}}=${sf(reaction)}\\,\\text{N}`, "The normal reaction is larger than the weight because it is tilted."),
      step(10, "State the answer", `v=${sf(v)}\\,\\text{m s}^{-1},\\quad R=${sf(reaction)}\\,\\text{N}`, "These values correspond to no sideways friction being needed."),
    ],
    finalAnswer: `$v=${sf(v)}\\,\\text{m s}^{-1}$ and $R=${sf(reaction)}\\,\\text{N}$.`,
  };
}

function bankedAngle({ r, v }: { r: number; v: number }): Shell {
  const theta = deg(Math.atan((v * v) / (r * g)));
  return {
    difficulty: "Intermediate",
    marks: 6,
    answerType: "numeric",
    tags: ["banked track", "design angle", "no friction"],
    questionText: `A smooth road bend has radius $${r}\\,\\text{m}$. Find the banking angle needed so that a vehicle can travel round it at $${v}\\,\\text{m s}^{-1}$ without relying on friction. Take $g=9.8\\,\\text{m s}^{-2}$.`,
    steps: [
      step(1, "List the forces", `R\\text{ and }mg`, "For a smooth banked road, the normal reaction must provide the horizontal centripetal effect."),
      step(2, "Resolve vertically", `R\\cos\\theta=mg`, "There is no vertical acceleration."),
      step(3, "Resolve horizontally", `R\\sin\\theta=\\dfrac{mv^{2}}{r}`, "The horizontal component of reaction points towards the centre."),
      step(4, "Divide the equations", `\\tan\\theta=\\dfrac{v^{2}}{rg}`, "Dividing eliminates the unknown reaction and the mass."),
      step(5, "Substitute", `\\tan\\theta=\\dfrac{${v}^{2}}{${r}\\times 9.8}`, "The ratio compares the required centripetal acceleration with gravity."),
      step(6, "Evaluate the tangent", `\\tan\\theta=${sf((v * v) / (r * g))}`, "This dimensionless number determines the banking angle."),
      step(7, "Find the angle", `\\theta=\\tan^{-1}(${sf((v * v) / (r * g))})=${sf(theta)}^{\\circ}`, "The inverse tangent converts the required ratio into an angle."),
      step(8, "Interpret the result", `\\theta=${sf(theta)}^{\\circ}`, "At this angle, no friction is needed at the stated speed."),
      step(9, "State the answer", `\\text{Banking angle}=${sf(theta)}^{\\circ}`, "A higher design speed would require a steeper bank."),
      step(10, "Check reasonableness", `0<\\theta<90^{\\circ}`, "The result is physically sensible for an ordinary banked bend."),
    ],
    finalAnswer: `$${sf(theta)}^{\\circ}$.`,
  };
}

function bankedFrictionRange({ r, theta, mu }: { r: number; theta: number; mu: number }): Shell {
  const s = Math.sin(rad(theta));
  const c = Math.cos(rad(theta));
  const minSq = r * g * (s - mu * c) / (c + mu * s);
  const maxSq = r * g * (s + mu * c) / (c - mu * s);
  const vMin = Math.sqrt(Math.max(0, minSq));
  const vMax = Math.sqrt(maxSq);
  const minText = minSq <= 0 ? "0" : sf(vMin);
  return {
    difficulty: "Hard",
    marks: 9,
    answerType: "numeric",
    tags: ["banked track", "friction", "speed range"],
    questionText: `A circular track of radius $${r}\\,\\text{m}$ is banked at $${theta}^{\\circ}$ to the horizontal. The coefficient of friction is $${mu}$. Find the range of speeds for which a vehicle can move round the track without slipping. Take $g=9.8\\,\\text{m s}^{-2}$.`,
    steps: [
      step(1, "Set axes", `\\text{Horizontal inward and vertical upward}`, "Centripetal acceleration is horizontal towards the centre, while vertical acceleration is zero."),
      step(2, "Consider the high-speed limit", `\\text{friction acts down the slope}`, "At high speed the vehicle tends to move up the bank, so friction acts down the slope and has an inward component."),
      step(3, "Resolve vertically for high speed", `R\\cos\\theta-\\mu R\\sin\\theta=mg`, "The downward component of friction reduces the upward support."),
      step(4, "Resolve horizontally for high speed", `R\\sin\\theta+\\mu R\\cos\\theta=\\dfrac{mv_{\\max}^{2}}{r}`, "Both the reaction component and friction component help provide inward force."),
      step(5, "Divide for maximum speed", `v_{\\max}^{2}=rg\\dfrac{\\sin\\theta+\\mu\\cos\\theta}{\\cos\\theta-\\mu\\sin\\theta}`, "Dividing eliminates the normal reaction and mass."),
      step(6, "Substitute for maximum speed", `v_{\\max}^{2}=${r}\\times9.8\\dfrac{\\sin${theta}^{\\circ}+${mu}\\cos${theta}^{\\circ}}{\\cos${theta}^{\\circ}-${mu}\\sin${theta}^{\\circ}}`, "This is the largest speed before friction is no longer enough."),
      step(7, "Calculate maximum speed", `v_{\\max}=${sf(vMax)}\\,\\text{m s}^{-1}`, "Above this speed, the vehicle would tend to slip up the bank."),
      step(8, "Consider the low-speed limit", `\\text{friction acts up the slope}`, "At low speed the vehicle tends to slide down the bank, so friction acts up the slope."),
      step(9, "Resolve vertically for low speed", `R\\cos\\theta+\\mu R\\sin\\theta=mg`, "The upward component of friction helps support the vehicle."),
      step(10, "Resolve horizontally for low speed", `R\\sin\\theta-\\mu R\\cos\\theta=\\dfrac{mv_{\\min}^{2}}{r}`, "Friction now acts partly outward, reducing the inward resultant."),
      step(11, "Divide for minimum speed", `v_{\\min}^{2}=rg\\dfrac{\\sin\\theta-\\mu\\cos\\theta}{\\cos\\theta+\\mu\\sin\\theta}`, "This gives the lowest speed consistent with limiting friction."),
      step(12, "Substitute for minimum speed", `v_{\\min}^{2}=${r}\\times9.8\\dfrac{\\sin${theta}^{\\circ}-${mu}\\cos${theta}^{\\circ}}{\\cos${theta}^{\\circ}+${mu}\\sin${theta}^{\\circ}}`, "If this expression is negative, rest is also possible without slipping."),
      step(13, "Calculate minimum speed", `v_{\\min}=${minText}\\,\\text{m s}^{-1}`, "This is the lower boundary of the allowed speed interval."),
      step(14, "State the range", `${minText}\\le v\\le ${sf(vMax)}\\,\\text{m s}^{-1}`, "Within this interval, friction can adjust its size and direction to prevent slipping."),
    ],
    finalAnswer: `$${minText}\\le v\\le ${sf(vMax)}\\,\\text{m s}^{-1}$.`,
  };
}

function conicalSpeedLength({ m, l, v }: { m: number; l: number; v: number }): Shell {
  const a = g * l;
  const c = (-v * v + Math.sqrt(v ** 4 + 4 * a * a)) / (2 * a);
  const theta = deg(Math.acos(c));
  const radius = l * Math.sin(rad(theta));
  const tension = (m * g) / c;
  return {
    difficulty: "Hard",
    marks: 9,
    answerType: "numeric",
    tags: ["conical pendulum", "speed", "quadratic"],
    questionText: `A particle of mass $${m}\\,\\text{kg}$ moves as a conical pendulum on a string of length $${l}\\,\\text{m}$. Its speed is $${v}\\,\\text{m s}^{-1}$. Find the angle the string makes with the vertical, the radius of the circle, and the tension. Take $g=9.8\\,\\text{m s}^{-2}$.`,
    steps: [
      step(1, "Write the geometry", `r=l\\sin\\theta`, "The circular radius is the horizontal component of the string."),
      step(2, "Resolve vertically", `T\\cos\\theta=mg`, "The particle has no vertical acceleration."),
      step(3, "Resolve horizontally", `T\\sin\\theta=\\dfrac{mv^{2}}{r}`, "The horizontal component of tension provides the centripetal force."),
      step(4, "Substitute the radius", `T\\sin\\theta=\\dfrac{mv^{2}}{l\\sin\\theta}`, "The radius is not given directly, so we express it using the string length."),
      step(5, "Use the vertical equation for tension", `T=\\dfrac{mg}{\\cos\\theta}`, "This removes the unknown tension from the horizontal equation."),
      step(6, "Substitute tension", `\\dfrac{mg\\sin\\theta}{\\cos\\theta}=\\dfrac{mv^{2}}{l\\sin\\theta}`, "Now the only unknown in the equation is the angle."),
      step(7, "Cancel mass and rearrange", `gl\\sin^{2}\\theta=v^{2}\\cos\\theta`, "The mass cancels because it affects both weight and centripetal force in the same proportion."),
      step(8, "Let c = cos theta", `gl(1-c^{2})=v^{2}c`, "Using $\\sin^2\\theta=1-\\cos^2\\theta$ turns the equation into a quadratic."),
      step(9, "Form the quadratic", `glc^{2}+v^{2}c-gl=0`, "Only the positive root between 0 and 1 is physically possible."),
      step(10, "Substitute values", `${sf(a)}c^{2}+${v * v}c-${sf(a)}=0`, "This numerical quadratic determines the angle."),
      step(11, "Solve for cos theta", `c=${sf(c)}`, "The other root is negative or outside the physical range for this angle."),
      step(12, "Find the angle", `\\theta=\\cos^{-1}(${sf(c)})=${sf(theta)}^{\\circ}`, "A faster particle makes the string lean further out."),
      step(13, "Find radius and tension", `r=${l}\\sin ${sf(theta)}^{\\circ}=${sf(radius)},\\quad T=\\dfrac{${m}\\times9.8}{${sf(c)}}=${sf(tension)}`, "The radius follows from geometry, and tension follows from vertical balance."),
      step(14, "State the answer", `\\theta=${sf(theta)}^{\\circ},\\quad r=${sf(radius)}\\,\\text{m},\\quad T=${sf(tension)}\\,\\text{N}`, "These values are consistent with both vertical equilibrium and horizontal circular motion."),
    ],
    finalAnswer: `$\\theta=${sf(theta)}^{\\circ}$, $r=${sf(radius)}\\,\\text{m}$, $T=${sf(tension)}\\,\\text{N}$.`,
  };
}

function bankedRequiredMu({ r, theta, v }: { r: number; theta: number; v: number }): Shell {
  const s = Math.sin(rad(theta));
  const c = Math.cos(rad(theta));
  const k = (v * v) / (r * g);
  const mu = (k * c - s) / (c + k * s);
  return {
    difficulty: "Hard",
    marks: 8,
    answerType: "numeric",
    tags: ["banked track", "coefficient of friction", "high speed"],
    questionText: `A vehicle travels at $${v}\\,\\text{m s}^{-1}$ round a circular track of radius $${r}\\,\\text{m}$ banked at $${theta}^{\\circ}$ to the horizontal. The speed is greater than the no-friction design speed, so friction acts down the slope. Find the least coefficient of friction needed. Take $g=9.8\\,\\text{m s}^{-2}$.`,
    steps: [
      step(1, "Identify friction direction", `\\text{friction acts down the slope}`, "At a speed above the smooth design speed, the vehicle tends to slip up the bank."),
      step(2, "Resolve vertically", `R\\cos\\theta-\\mu R\\sin\\theta=mg`, "The downward component of friction reduces the upward component supporting the vehicle."),
      step(3, "Resolve horizontally", `R\\sin\\theta+\\mu R\\cos\\theta=\\dfrac{mv^{2}}{r}`, "Both the inward component of reaction and friction contribute to centripetal force."),
      step(4, "Divide by the vertical equation", `\\dfrac{\\sin\\theta+\\mu\\cos\\theta}{\\cos\\theta-\\mu\\sin\\theta}=\\dfrac{v^{2}}{rg}`, "Dividing removes the unknown normal reaction and mass."),
      step(5, "Introduce k", `k=\\dfrac{v^{2}}{rg}`, "This keeps the algebra clear while solving for $\mu$."),
      step(6, "Rearrange", `\\sin\\theta+\\mu\\cos\\theta=k\\cos\\theta-k\\mu\\sin\\theta`, "Cross-multiplying puts all friction terms in one equation."),
      step(7, "Collect mu terms", `\\mu(\\cos\\theta+k\\sin\\theta)=k\\cos\\theta-\\sin\\theta`, "The coefficient is isolated by gathering all $\mu$ terms on one side."),
      step(8, "Solve for mu", `\\mu=\\dfrac{k\\cos\\theta-\\sin\\theta}{\\cos\\theta+k\\sin\\theta}`, "This gives the least coefficient because friction is limiting."),
      step(9, "Calculate k", `k=\\dfrac{${v}^{2}}{${r}\\times9.8}=${sf(k)}`, "The value compares required centripetal acceleration with gravity."),
      step(10, "Substitute", `\\mu=\\dfrac{${sf(k)}\\cos${theta}^{\\circ}-\\sin${theta}^{\\circ}}{\\cos${theta}^{\\circ}+${sf(k)}\\sin${theta}^{\\circ}}`, "The trigonometric components depend on the bank angle."),
      step(11, "Calculate", `\\mu=${sf(mu)}`, "This is the friction threshold for the stated speed."),
      step(12, "Check sign", `\\mu>0`, "A positive coefficient is consistent with the stated high-speed friction direction."),
      step(13, "State the answer", `\\mu_{\\min}=${sf(mu)}`, "Any smaller coefficient would not provide enough extra inward force."),
      step(14, "Interpret", `\\text{friction down the slope}`, "The direction of friction confirms the vehicle is above the no-friction design speed."),
    ],
    finalAnswer: `$\\mu_{\\min}=${sf(mu)}$.`,
  };
}

const shells: Shell[] = [
  ...[
    { r: 5, v: 10, context: "A model car" },
    { r: 8, v: 12, context: "A particle" },
    { r: 12, v: 18, context: "A cyclist" },
    { r: 15, v: 20, context: "A small vehicle" },
  ].map(speedRadius),
  ...[
    { m: 0.5, r: 2, v: 4, context: "A puck" },
    { m: 1.2, r: 3, v: 6, context: "A particle" },
    { m: 2, r: 5, v: 10, context: "A block" },
    { m: 0.8, r: 4, v: 7, context: "A toy car" },
  ].map(force),
  ...[
    { r: 6, v: 3, context: "A bead" },
    { r: 10, v: 5, context: "A drone" },
    { r: 4, v: 8, context: "A particle" },
    { r: 18, v: 12, context: "A vehicle" },
  ].map(period),
  ...[
    { r: 50, v: 14, context: "A car" },
    { r: 80, v: 20, context: "A lorry" },
    { r: 35, v: 12, context: "A motorcycle" },
  ].map(flatFrictionMu),
  ...[
    { r: 60, mu: 0.4, context: "A car" },
    { r: 45, mu: 0.36, context: "A cyclist" },
    { r: 100, mu: 0.25, context: "A vehicle" },
  ].map(flatMaxSpeed),
  ...[
    { m: 0.3, r: 0.8, v: 2, context: "A particle" },
    { m: 0.6, r: 1.5, v: 3, context: "A bead" },
    { m: 1.5, r: 2.5, v: 5, context: "A puck" },
  ].map(stringTension),
  ...[
    { r: 2, a: 18, context: "A particle" },
    { r: 5, a: 20, context: "A model car" },
    { r: 7.5, a: 30, context: "A bead" },
  ].map(omegaFromAccel),
  ...[
    { m: 0.4, l: 1.2, omega: 3.2 },
    { m: 0.5, l: 1.5, omega: 3.1 },
    { m: 0.6, l: 2, omega: 2.5 },
    { m: 0.3, l: 1.8, omega: 2.8 },
    { m: 0.75, l: 2.4, omega: 2.2 },
    { m: 0.45, l: 1.4, omega: 3.4 },
    { m: 0.9, l: 2.2, omega: 2.4 },
    { m: 0.55, l: 1.6, omega: 3 },
  ].map(conicalOmega),
  ...[
    { m: 0.4, l: 1.2, theta: 35 },
    { m: 0.6, l: 1.6, theta: 40 },
    { m: 0.5, l: 2, theta: 30 },
    { m: 0.8, l: 1.8, theta: 45 },
    { m: 0.7, l: 2.5, theta: 25 },
    { m: 0.35, l: 1.4, theta: 50 },
    { m: 0.9, l: 2.2, theta: 38 },
    { m: 0.55, l: 1.7, theta: 42 },
  ].map(conicalAngle),
  ...[
    { m: 900, r: 80, theta: 12 },
    { m: 1200, r: 100, theta: 15 },
    { m: 750, r: 60, theta: 18 },
    { m: 1000, r: 150, theta: 10 },
    { m: 650, r: 45, theta: 20 },
    { m: 1100, r: 120, theta: 14 },
    { m: 850, r: 90, theta: 16 },
  ].map(bankedSpeed),
  ...[
    { r: 75, v: 16 },
    { r: 120, v: 22 },
    { r: 50, v: 14 },
    { r: 200, v: 30 },
    { r: 95, v: 19 },
    { r: 140, v: 24 },
    { r: 65, v: 15 },
  ].map(bankedAngle),
  ...[
    { r: 80, theta: 12, mu: 0.25 },
    { r: 100, theta: 15, mu: 0.2 },
    { r: 60, theta: 18, mu: 0.3 },
    { r: 150, theta: 10, mu: 0.18 },
    { r: 90, theta: 20, mu: 0.22 },
    { r: 120, theta: 14, mu: 0.28 },
    { r: 70, theta: 16, mu: 0.24 },
    { r: 200, theta: 8, mu: 0.16 },
  ].map(bankedFrictionRange),
  ...[
    { m: 0.5, l: 1.5, v: 2.8 },
    { m: 0.7, l: 2, v: 3.5 },
    { m: 0.4, l: 1.2, v: 2.4 },
    { m: 0.9, l: 2.5, v: 4 },
  ].map(conicalSpeedLength),
  ...[
    { r: 80, theta: 12, v: 18 },
    { r: 100, theta: 15, v: 24 },
    { r: 70, theta: 10, v: 17 },
    { r: 150, theta: 8, v: 26 },
  ].map(bankedRequiredMu),
];

export const questions: Question[] = shells.map((shell, index) => makeQuestion(index + 1, shell));
