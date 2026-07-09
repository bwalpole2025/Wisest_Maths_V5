import type { Question } from "@/lib/types";

const LEVEL = "A-Level Further Maths";
const TOPIC = "Further Maths Year 2: Mechanics (Further Mechanics 2)";
const SUBTOPIC = "Oblique impact with a surface";
const SUBTOPIC_ID = "fm.y2.mech.collisions-2d";

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

const qid = (n: number): string => `${SUBTOPIC_ID}.q${String(n).padStart(3, "0")}`;
const rad = (degrees: number): number => (Math.PI * degrees) / 180;
const deg = (radians: number): number => (180 * radians) / Math.PI;

function sf(value: number, digits = 3): string {
  return Number(value.toPrecision(digits)).toString();
}

function step(stepNumber: number, description: string, workingLatex: string, explanation: string): Step {
  return { stepNumber, description, workingLatex, explanation, diagram: null };
}

function diagram(caption: string) {
  return {
    kind: "descriptive" as const,
    type: "oblique-impact-surface",
    description:
      "A smooth sphere strikes a fixed smooth surface obliquely. The velocity is resolved into components parallel and perpendicular to the surface.",
    caption,
    alt: "Oblique impact with a fixed smooth surface, showing normal and tangential velocity components.",
  };
}

function makeQuestion(index: number, shell: Shell): Question {
  return {
    id: qid(index),
    level: LEVEL,
    topic: TOPIC,
    subtopic: SUBTOPIC,
    subtopicId: SUBTOPIC_ID,
    difficulty: shell.difficulty,
    marks: shell.marks,
    answerType: shell.answerType,
    tags: ["oblique impact", "coefficient of restitution", "smooth surface", ...shell.tags],
    questionText: shell.questionText,
    questionDiagram: diagram("Resolve parallel and perpendicular to the surface; restitution changes only the normal component."),
    workedSolution: {
      steps: shell.steps,
      finalAnswer: shell.finalAnswer,
    },
  };
}

function angleToNormal({ u, alpha, e }: { u: number; alpha: number; e: number }): Shell {
  const un = u * Math.cos(rad(alpha));
  const ut = u * Math.sin(rad(alpha));
  const vn = e * un;
  const v = Math.hypot(ut, vn);
  const beta = deg(Math.atan(ut / vn));
  return {
    difficulty: "Easy",
    marks: 5,
    answerType: "numeric",
    tags: ["angle to normal", "rebound angle"],
    questionText: `A smooth sphere strikes a fixed smooth plane with speed $${u}\\,\\text{m s}^{-1}$ at an angle of $${alpha}^{\\circ}$ to the normal. The coefficient of restitution is $${e}$. Find the speed of the sphere after impact and the angle its path then makes with the normal.`,
    steps: [
      step(1, "Resolve the incoming velocity", `u_n=${u}\\cos${alpha}^{\\circ},\\quad u_t=${u}\\sin${alpha}^{\\circ}`, "For impact with a smooth plane, normal and tangential components behave differently, so resolving is the key first step."),
      step(2, "Calculate the normal component", `u_n=${sf(un)}\\,\\text{m s}^{-1}`, "The normal component is the part directly into the surface."),
      step(3, "Calculate the tangential component", `u_t=${sf(ut)}\\,\\text{m s}^{-1}`, "The tangential component is along the surface."),
      step(4, "Apply restitution normally", `v_n=e u_n=${e}(${sf(un)})=${sf(vn)}`, "The surface is fixed, so the normal component reverses direction and is multiplied by $e$."),
      step(5, "Keep the tangential component unchanged", `v_t=u_t=${sf(ut)}`, "A smooth surface gives no tangential impulse, so the along-surface component is unchanged."),
      step(6, "Find the rebound speed", `v=\\sqrt{${sf(vn)}^2+${sf(ut)}^2}=${sf(v)}\\,\\text{m s}^{-1}`, "The two perpendicular components combine by Pythagoras."),
      step(7, "Find the rebound angle", `\\tan\\beta=\\dfrac{v_t}{v_n}=\\dfrac{${sf(ut)}}{${sf(vn)}}`, "The angle to the normal is set by the ratio of tangential to normal components."),
      step(8, "Calculate and state the angle", `\\beta=${sf(beta)}^{\\circ}`, "The path is usually deflected away from the normal because the normal component is reduced by impact."),
    ],
    finalAnswer: `$v=${sf(v)}\\,\\text{m s}^{-1}$, at $${sf(beta)}^{\\circ}$ to the normal.`,
  };
}

function componentFloor({ m, p, q, e }: { m: number; p: number; q: number; e: number }): Shell {
  const vNormal = e * q;
  const speed = Math.hypot(p, vNormal);
  const angleSurface = deg(Math.atan(vNormal / p));
  return {
    difficulty: "Easy",
    marks: 5,
    answerType: "numeric",
    tags: ["velocity components", "horizontal surface"],
    questionText: `A smooth sphere of mass $${m}\\,\\text{kg}$ has velocity components $${p}\\,\\text{m s}^{-1}$ parallel to a fixed horizontal plane and $${q}\\,\\text{m s}^{-1}$ vertically downwards just before impact. The coefficient of restitution is $${e}$. Find its velocity components immediately after impact, its speed, and the angle of rebound above the plane.`,
    steps: [
      step(1, "Identify the tangential component", `u_t=${p}\\,\\text{m s}^{-1}`, "The horizontal component is parallel to the plane."),
      step(2, "Identify the normal component", `u_n=${q}\\,\\text{m s}^{-1}\\text{ towards the plane}`, "The vertical downward component is perpendicular to the horizontal plane."),
      step(3, "Use smooth contact tangentially", `v_t=u_t=${p}`, "With no frictional impulse, the parallel component is unchanged."),
      step(4, "Use restitution normally", `v_n=e u_n=${e}(${q})=${sf(vNormal)}`, "The normal component reverses direction and is reduced according to $e$."),
      step(5, "Write the rebound components", `v_t=${p}\\text{ along the plane},\\quad v_n=${sf(vNormal)}\\text{ upwards}`, "The post-impact velocity is built from these two perpendicular components."),
      step(6, "Find the speed", `v=\\sqrt{${p}^2+${sf(vNormal)}^2}=${sf(speed)}\\,\\text{m s}^{-1}`, "The speed is the magnitude of the rebound velocity vector."),
      step(7, "Find the angle above the plane", `\\tan\\theta=\\dfrac{${sf(vNormal)}}{${p}}`, "Angle above the plane compares vertical speed with horizontal speed."),
      step(8, "State the rebound angle", `\\theta=${sf(angleSurface)}^{\\circ}`, "The rebound angle is measured from the plane because the components were parallel and perpendicular to it."),
    ],
    finalAnswer: `Components: $${p}\\,\\text{m s}^{-1}$ along the plane and $${sf(vNormal)}\\,\\text{m s}^{-1}$ upwards; speed $${sf(speed)}\\,\\text{m s}^{-1}$ at $${sf(angleSurface)}^{\\circ}$ above the plane.`,
  };
}

function angleToSurface({ u, phi, e }: { u: number; phi: number; e: number }): Shell {
  const ut = u * Math.cos(rad(phi));
  const un = u * Math.sin(rad(phi));
  const vn = e * un;
  const v = Math.hypot(ut, vn);
  const beta = deg(Math.atan(vn / ut));
  return {
    difficulty: "Intermediate",
    marks: 6,
    answerType: "numeric",
    tags: ["angle to surface", "rebound angle"],
    questionText: `A smooth sphere strikes a fixed smooth plane with speed $${u}\\,\\text{m s}^{-1}$ at an angle of $${phi}^{\\circ}$ to the plane. The coefficient of restitution is $${e}$. Find the speed after impact and the angle of rebound to the plane.`,
    steps: [
      step(1, "Resolve parallel to the plane", `u_t=${u}\\cos${phi}^{\\circ}`, "The component along the plane is unaffected by a smooth impact."),
      step(2, "Resolve normal to the plane", `u_n=${u}\\sin${phi}^{\\circ}`, "The normal component is the part compressed and restored during impact."),
      step(3, "Calculate the components before impact", `u_t=${sf(ut)},\\quad u_n=${sf(un)}`, "These values separate the geometry from the collision law."),
      step(4, "Apply the smooth-surface condition", `v_t=u_t=${sf(ut)}`, "A smooth plane gives no impulse parallel to the surface."),
      step(5, "Apply Newton's law of restitution", `v_n=e u_n=${e}(${sf(un)})=${sf(vn)}`, "Only the normal component is reversed and scaled by the coefficient of restitution."),
      step(6, "Find the speed after impact", `v=\\sqrt{${sf(ut)}^2+${sf(vn)}^2}=${sf(v)}`, "The rebound components are perpendicular, so they combine by Pythagoras."),
      step(7, "Set up the rebound angle", `\\tan\\beta=\\dfrac{v_n}{v_t}`, "Because the angle is measured to the plane, normal over tangential gives the tangent."),
      step(8, "Substitute the component values", `\\tan\\beta=\\dfrac{${sf(vn)}}{${sf(ut)}}`, "The normal component is smaller after impact when $e<1$."),
      step(9, "Calculate the rebound angle", `\\beta=${sf(beta)}^{\\circ}`, "The rebound angle to the plane is smaller than the incoming angle for an inelastic impact."),
      step(10, "State the answer", `v=${sf(v)}\\,\\text{m s}^{-1},\\quad \\beta=${sf(beta)}^{\\circ}`, "This gives both the size and direction of the rebound velocity."),
    ],
    finalAnswer: `$v=${sf(v)}\\,\\text{m s}^{-1}$, at $${sf(beta)}^{\\circ}$ to the plane.`,
  };
}

function coefficientFromNormalAngles({ alpha, e }: { alpha: number; e: number }): Shell {
  const beta = deg(Math.atan(Math.tan(rad(alpha)) / e));
  return {
    difficulty: "Intermediate",
    marks: 6,
    answerType: "numeric",
    tags: ["find restitution", "deflection angle"],
    questionText: `A smooth sphere strikes a fixed smooth plane at an angle of $${alpha}^{\\circ}$ to the normal. After impact, its path makes an angle of $${sf(beta)}^{\\circ}$ to the normal. Find the coefficient of restitution.`,
    steps: [
      step(1, "Resolve before impact", `u_n=u\\cos${alpha}^{\\circ},\\quad u_t=u\\sin${alpha}^{\\circ}`, "Using a general speed $u$ is enough because the speed will cancel from the angle relation."),
      step(2, "Apply the smooth-surface rule", `v_t=u_t=u\\sin${alpha}^{\\circ}`, "The tangential component is unchanged because there is no frictional impulse."),
      step(3, "Apply restitution normally", `v_n=e u_n=e u\\cos${alpha}^{\\circ}`, "The normal component after impact is $e$ times the incoming normal component."),
      step(4, "Use the rebound angle", `\\tan${sf(beta)}^{\\circ}=\\dfrac{v_t}{v_n}`, "For an angle to the normal, tangent is tangential component over normal component."),
      step(5, "Substitute the components", `\\tan${sf(beta)}^{\\circ}=\\dfrac{u\\sin${alpha}^{\\circ}}{e u\\cos${alpha}^{\\circ}}`, "The unknown speed appears in both components and cancels."),
      step(6, "Simplify the relation", `\\tan${sf(beta)}^{\\circ}=\\dfrac{\\tan${alpha}^{\\circ}}{e}`, "This is the standard deflection formula for angle measured from the normal."),
      step(7, "Rearrange for restitution", `e=\\dfrac{\\tan${alpha}^{\\circ}}{\\tan${sf(beta)}^{\\circ}}`, "A larger rebound angle to the normal means the normal component has been reduced more."),
      step(8, "Calculate the coefficient", `e=${sf(e)}`, "The value lies between 0 and 1, so it is physically valid."),
      step(9, "State the answer", `e=${sf(e)}`, "The coefficient measures how much of the normal approach speed is restored."),
    ],
    finalAnswer: `$e=${sf(e)}$`,
  };
}

function impulseKeLoss({ m, u, alpha, e }: { m: number; u: number; alpha: number; e: number }): Shell {
  const un = u * Math.cos(rad(alpha));
  const impulse = m * (1 + e) * un;
  const loss = 0.5 * m * (1 - e * e) * un * un;
  return {
    difficulty: "Intermediate",
    marks: 7,
    answerType: "numeric",
    tags: ["impulse", "kinetic energy loss"],
    questionText: `A smooth sphere of mass $${m}\\,\\text{kg}$ strikes a fixed smooth plane with speed $${u}\\,\\text{m s}^{-1}$ at an angle of $${alpha}^{\\circ}$ to the normal. The coefficient of restitution is $${e}$. Find the magnitude of the impulse exerted by the plane and the loss of kinetic energy.`,
    steps: [
      step(1, "Resolve the incoming velocity normally", `u_n=${u}\\cos${alpha}^{\\circ}`, "Impulse from a smooth plane acts only in the normal direction."),
      step(2, "Calculate the normal approach speed", `u_n=${sf(un)}\\,\\text{m s}^{-1}`, "This is the component changed by the collision."),
      step(3, "Find the normal rebound component", `v_n=e u_n=${e}(${sf(un)})`, "The sphere rebounds away from the plane with $e$ times the normal approach speed."),
      step(4, "Find the change in normal velocity", `\\Delta v_n=(1+e)u_n`, "The sign reverses, so the total change is the incoming normal speed plus the rebound normal speed."),
      step(5, "Use impulse-momentum", `J=m(1+e)u_n`, "Impulse equals mass multiplied by change in velocity in the direction of the impulse."),
      step(6, "Calculate the impulse", `J=${m}(1+${e})(${sf(un)})=${sf(impulse)}\\,\\text{N s}`, "The impulse is normal to the plane."),
      step(7, "Use the KE-loss formula", `\\Delta K=\\dfrac12m(1-e^2)u_n^2`, "Only the normal component loses kinetic energy; the tangential part is unchanged."),
      step(8, "Substitute the values", `\\Delta K=\\dfrac12(${m})(1-${e}^2)(${sf(un)})^2`, "The formula measures the energy not returned during the normal compression and restitution."),
      step(9, "Calculate the energy loss", `\\Delta K=${sf(loss)}\\,\\text{J}`, "A positive loss is expected for $e<1$."),
      step(10, "State both results", `J=${sf(impulse)}\\,\\text{N s},\\quad \\Delta K=${sf(loss)}\\,\\text{J}`, "Impulse describes the momentum change; energy loss describes the inelasticity."),
    ],
    finalAnswer: `$J=${sf(impulse)}\\,\\text{N s}$ and KE loss $=${sf(loss)}\\,\\text{J}$.`,
  };
}

function restitutionFromKeLoss({ m, u, alpha, loss }: { m: number; u: number; alpha: number; loss: number }): Shell {
  const un = u * Math.cos(rad(alpha));
  const e2 = 1 - (2 * loss) / (m * un * un);
  const e = Math.sqrt(e2);
  const beta = deg(Math.atan(Math.tan(rad(alpha)) / e));
  return {
    difficulty: "Hard",
    marks: 9,
    answerType: "numeric",
    tags: ["find restitution", "kinetic energy loss", "rebound angle"],
    questionText: `A smooth sphere of mass $${m}\\,\\text{kg}$ strikes a fixed smooth plane with speed $${u}\\,\\text{m s}^{-1}$ at an angle of $${alpha}^{\\circ}$ to the normal. The loss of kinetic energy in the impact is $${loss}\\,\\text{J}$. Find the coefficient of restitution and the angle of rebound to the normal.`,
    steps: [
      step(1, "Resolve the normal component", `u_n=${u}\\cos${alpha}^{\\circ}`, "Energy is lost only through the normal component because the plane is smooth."),
      step(2, "Calculate the normal approach speed", `u_n=${sf(un)}\\,\\text{m s}^{-1}`, "This component is compressed and restored during the impact."),
      step(3, "State the KE-loss formula", `\\Delta K=\\dfrac12m(1-e^2)u_n^2`, "Tangential kinetic energy is unchanged, so the loss formula uses only the normal component."),
      step(4, "Substitute the known quantities", `${loss}=\\dfrac12(${m})(1-e^2)(${sf(un)})^2`, "This equation links the measured energy loss to the restitution coefficient."),
      step(5, "Isolate the factor", `1-e^2=\\dfrac{2(${loss})}{${m}(${sf(un)})^2}`, "Rearranging first keeps the square-root step clear."),
      step(6, "Find e squared", `e^2=1-\\dfrac{2(${loss})}{${m}(${sf(un)})^2}=${sf(e2)}`, "The value must be between 0 and 1 for a valid impact."),
      step(7, "Take the positive square root", `e=${sf(e)}`, "The coefficient of restitution is non-negative."),
      step(8, "Resolve the tangential component", `u_t=${u}\\sin${alpha}^{\\circ}`, "This component is needed to find the rebound direction."),
      step(9, "Use the rebound angle relation", `\\tan\\beta=\\dfrac{u_t}{eu_n}`, "For angle to the normal, tangent is tangential over post-impact normal component."),
      step(10, "Cancel the speed", `\\tan\\beta=\\dfrac{\\tan${alpha}^{\\circ}}{e}`, "Both components contain the original speed, so only the angle and $e$ remain."),
      step(11, "Substitute e", `\\tan\\beta=\\dfrac{\\tan${alpha}^{\\circ}}{${sf(e)}}`, "A smaller $e$ gives a larger angle away from the normal."),
      step(12, "Calculate the angle", `\\beta=${sf(beta)}^{\\circ}`, "This is the direction of the rebound path relative to the normal."),
      step(13, "Check the answer", `0\\le e\\le1`, "The coefficient is in the physical range for an inelastic collision."),
      step(14, "State the result", `e=${sf(e)},\\quad \\beta=${sf(beta)}^{\\circ}`, "The energy loss fixes the restitution, and restitution fixes the deflection angle."),
    ],
    finalAnswer: `$e=${sf(e)}$, rebound angle $${sf(beta)}^{\\circ}$ to the normal.`,
  };
}

function twoSurfaces({ p, q, e1, e2 }: { p: number; q: number; e1: number; e2: number }): Shell {
  const afterFirstX = e1 * p;
  const afterFirstY = q;
  const finalX = afterFirstX;
  const finalY = e2 * afterFirstY;
  const speed = Math.hypot(finalX, finalY);
  const angle = deg(Math.atan(finalY / finalX));
  return {
    difficulty: "Hard",
    marks: 9,
    answerType: "numeric",
    tags: ["successive impacts", "perpendicular surfaces", "velocity components"],
    questionText: `A smooth sphere moves in a horizontal plane towards two fixed smooth perpendicular walls. Just before striking the first wall, its velocity components are $${p}\\,\\text{m s}^{-1}$ perpendicular to the first wall and $${q}\\,\\text{m s}^{-1}$ parallel to it. The coefficient of restitution at the first wall is $${e1}$. It then strikes the second wall, whose normal is parallel to the original tangential direction, with coefficient of restitution $${e2}$. Find the final speed and the angle the final path makes with the first wall's normal.`,
    steps: [
      step(1, "Set axes along the two wall normals", `x:\\text{ normal to first wall},\\quad y:\\text{ parallel to first wall}`, "Perpendicular smooth walls make component methods especially efficient."),
      step(2, "Record the initial components", `u_x=${p},\\quad u_y=${q}`, "The first wall changes only the component normal to it."),
      step(3, "Apply restitution at the first wall", `v_x=e_1u_x=${e1}(${p})=${sf(afterFirstX)}`, "The normal component reverses direction and is reduced by $e_1$."),
      step(4, "Keep the tangential component at the first wall", `v_y=u_y=${q}`, "The first wall is smooth, so it gives no impulse along itself."),
      step(5, "Record velocity after the first impact", `(${sf(afterFirstX)},\\ ${q})`, "Signs describe direction, but speed and angle use the component magnitudes."),
      step(6, "Identify the second wall's normal component", `\\text{normal to second wall}=v_y=${q}`, "The second wall is perpendicular to the first, so the old tangential component is now normal to the second wall."),
      step(7, "Apply restitution at the second wall", `w_y=e_2v_y=${e2}(${q})=${sf(finalY)}`, "Only the component normal to the second wall changes in the second impact."),
      step(8, "Keep the other component unchanged", `w_x=${sf(afterFirstX)}`, "The component parallel to the second wall is unaffected there."),
      step(9, "Write final component magnitudes", `w_x=${sf(finalX)},\\quad w_y=${sf(finalY)}`, "The final velocity is determined by these two perpendicular components."),
      step(10, "Find the final speed", `w=\\sqrt{${sf(finalX)}^2+${sf(finalY)}^2}=${sf(speed)}\\,\\text{m s}^{-1}`, "The components combine using Pythagoras."),
      step(11, "Set up the final angle", `\\tan\\theta=\\dfrac{w_y}{w_x}`, "The angle is measured from the first wall's normal, so compare the other component with $w_x$."),
      step(12, "Calculate the angle", `\\theta=${sf(angle)}^{\\circ}`, "This gives the direction after both impacts."),
      step(13, "Check both impacts used normal restitution", `e_1=${e1},\\quad e_2=${e2}`, "Each wall affects only the component perpendicular to that wall."),
      step(14, "State the answer", `w=${sf(speed)}\\,\\text{m s}^{-1},\\quad \\theta=${sf(angle)}^{\\circ}`, "The result combines the two separate one-dimensional restitution effects."),
    ],
    finalAnswer: `$${sf(speed)}\\,\\text{m s}^{-1}$ at $${sf(angle)}^{\\circ}$ to the first wall's normal.`,
  };
}

const shells: Shell[] = [
  ...[
    [8, 20, 0.5],
    [10, 25, 0.6],
    [12, 30, 0.7],
    [9, 35, 0.4],
    [14, 40, 0.8],
    [11, 15, 0.65],
    [13, 50, 0.55],
    [15, 45, 0.75],
    [7, 28, 0.6],
    [16, 32, 0.5],
    [18, 22, 0.7],
    [20, 38, 0.45],
    [10.5, 42, 0.8],
    [12.5, 18, 0.55],
  ].map(([u, alpha, e]) => angleToNormal({ u, alpha, e })),
  ...[
    [0.4, 6, 4, 0.5],
    [0.5, 8, 5, 0.6],
    [0.6, 10, 6, 0.7],
    [0.8, 7, 3, 0.4],
    [1.0, 9, 8, 0.5],
    [1.2, 12, 5, 0.75],
    [0.7, 5, 6, 0.65],
    [0.9, 11, 4, 0.55],
    [1.1, 13, 7, 0.8],
    [1.5, 15, 9, 0.45],
  ].map(([m, p, q, e]) => componentFloor({ m, p, q, e })),
  ...[
    [9, 25, 0.5],
    [11, 30, 0.6],
    [13, 35, 0.7],
    [10, 40, 0.45],
    [15, 20, 0.8],
    [18, 50, 0.55],
    [14, 28, 0.65],
    [16, 45, 0.75],
  ].map(([u, phi, e]) => angleToSurface({ u, phi, e })),
  ...[
    [20, 0.5],
    [25, 0.6],
    [30, 0.7],
    [35, 0.4],
    [40, 0.8],
    [15, 0.65],
    [45, 0.55],
    [50, 0.75],
    [28, 0.6],
    [32, 0.45],
  ].map(([alpha, e]) => coefficientFromNormalAngles({ alpha, e })),
  ...[
    [0.4, 8, 20, 0.5],
    [0.5, 10, 25, 0.6],
    [0.6, 12, 30, 0.7],
    [0.8, 9, 35, 0.4],
    [1.0, 14, 40, 0.8],
    [1.2, 11, 15, 0.65],
    [0.7, 13, 50, 0.55],
    [0.9, 15, 45, 0.75],
    [1.1, 16, 32, 0.5],
    [1.5, 18, 22, 0.7],
  ].map(([m, u, alpha, e]) => impulseKeLoss({ m, u, alpha, e })),
  ...[
    [0.5, 10, 25, 4],
    [0.6, 12, 30, 6],
    [0.8, 9, 35, 3],
    [1.0, 14, 40, 12],
    [1.2, 11, 20, 5],
    [0.7, 13, 45, 8],
    [0.9, 15, 50, 10],
    [1.5, 18, 22, 20],
  ].map(([m, u, alpha, loss]) => restitutionFromKeLoss({ m, u, alpha, loss })),
  ...[
    [8, 5, 0.5, 0.6],
    [10, 6, 0.6, 0.7],
    [12, 7, 0.7, 0.5],
    [9, 8, 0.4, 0.8],
    [14, 5, 0.8, 0.6],
    [11, 9, 0.65, 0.55],
    [13, 6, 0.55, 0.75],
    [15, 10, 0.75, 0.45],
    [16, 7, 0.5, 0.65],
    [18, 8, 0.7, 0.5],
  ].map(([p, q, e1, e2]) => twoSurfaces({ p, q, e1, e2 })),
];

if (shells.length !== 70) {
  throw new Error(`Expected 70 oblique impact with a surface questions, got ${shells.length}`);
}

export const questions: Question[] = shells.map((shell, index) => makeQuestion(index + 1, shell));
