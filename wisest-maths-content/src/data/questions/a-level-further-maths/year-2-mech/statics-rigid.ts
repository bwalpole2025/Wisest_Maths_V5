import type { Diagram, Question } from "@/lib/types";

const LEVEL = "A-Level Further Maths";
const TOPIC = "Further Maths Year 2: Mechanics (Further Mechanics 2)";
const SUBTOPIC = "Statics of rigid bodies";
const SUBTOPIC_ID = "fm.y2.mech.statics-rigid";
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

interface Load {
  force: number;
  distance: number;
}

const qid = (n: number): string => `${SUBTOPIC_ID}.q${String(n).padStart(3, "0")}`;
const rad = (degrees: number): number => (Math.PI * degrees) / 180;
const deg = (radians: number): number => (180 * radians) / Math.PI;

function sf(value: number, digits = 3): string {
  return Number(value.toPrecision(digits)).toString();
}

function money(value: number): string {
  return sf(value, Math.abs(value) >= 100 ? 4 : 3);
}

function step(stepNumber: number, description: string, workingLatex: string, explanation: string): Step {
  return { stepNumber, description, workingLatex, explanation, diagram: null };
}

function diagram(type: string, caption: string): Diagram {
  return {
    kind: "descriptive",
    type,
    description:
      "A rigid body is in equilibrium. The diagram should show the body, its weight, contact reactions, friction where relevant, and the chosen pivot for moments.",
    caption,
    alt: "Rigid body statics diagram showing forces and a moment pivot.",
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
    tags: ["statics", "rigid bodies", ...shell.tags],
    questionText: shell.questionText,
    questionDiagram: diagram(shell.tags[0] ?? "rigid-body", "Resolve forces and take moments for the rigid body."),
    workedSolution: {
      steps: shell.steps,
      finalAnswer: shell.finalAnswer,
    },
  };
}

function totalMoment(loads: Load[]): number {
  return loads.reduce((sum, load) => sum + load.force * load.distance, 0);
}

function beamSingle({ L, W, P, x, context }: { L: number; W: number; P: number; x: number; context: string }): Shell {
  const RB = (W * (L / 2) + P * x) / L;
  const RA = W + P - RB;
  return {
    difficulty: "Easy",
    marks: 5,
    answerType: "numeric",
    tags: ["beam reactions", "moments"],
    questionText: `${context} A uniform beam $AB$ of length $${L}\\,\\text{m}$ and weight $${W}\\,\\text{N}$ rests horizontally on supports at $A$ and $B$. A point load of $${P}\\,\\text{N}$ acts at a point $${x}\\,\\text{m}$ from $A$. Find the reactions at the two supports.`,
    steps: [
      step(1, "Name the reactions", "R_A,\\ R_B", "The supports push up on the beam, so the unknown contact forces are vertical reactions."),
      step(2, "Place the beam weight", `W=${W}\\text{ N at }${L / 2}\\text{ m from }A`, "A uniform beam has its weight acting at its midpoint."),
      step(3, "Write vertical equilibrium", `R_A+R_B=${W}+${P}`, "For a body at rest, the upward forces must balance the downward forces."),
      step(4, "Take moments about A", `R_B(${L})=${W}(${L / 2})+${P}(${x})`, "Taking moments about A removes $R_A$ because its line of action passes through the pivot."),
      step(5, "Find the reaction at B", `R_B=\\dfrac{${W}(${L / 2})+${P}(${x})}{${L}}=${money(RB)}\\text{ N}`, "The reaction at B is fixed by balancing the clockwise and anticlockwise turning effects."),
      step(6, "Find the reaction at A", `R_A=${W}+${P}-${money(RB)}=${money(RA)}\\text{ N}`, "Once one reaction is known, vertical equilibrium gives the other."),
      step(7, "State the reactions", `R_A=${money(RA)}\\text{ N},\\quad R_B=${money(RB)}\\text{ N}`, "Both reactions are positive, so both supports are pressing upward on the beam."),
    ],
    finalAnswer: `$R_A=${money(RA)}\\,\\text{N},\\quad R_B=${money(RB)}\\,\\text{N}$`,
  };
}

function beamTwoLoads({ L, W, loads, context }: { L: number; W: number; loads: [Load, Load]; context: string }): Shell {
  const moment = W * (L / 2) + totalMoment(loads);
  const RB = moment / L;
  const RA = W + loads[0].force + loads[1].force - RB;
  const loadText = loads.map((load) => `$${load.force}\\,\\text{N}$ at $${load.distance}\\,\\text{m}$ from $A$`).join(" and ");
  return {
    difficulty: "Intermediate",
    marks: 6,
    answerType: "numeric",
    tags: ["beam reactions", "multiple loads", "moments"],
    questionText: `${context} A uniform beam $AB$ has length $${L}\\,\\text{m}$ and weight $${W}\\,\\text{N}$. It is supported at $A$ and $B$. Two point loads act on the beam: ${loadText}. Find the reactions at $A$ and $B$.`,
    steps: [
      step(1, "Introduce the reactions", "R_A\\text{ at }A,\\quad R_B\\text{ at }B", "Each support supplies an upward force because the beam is resting on it."),
      step(2, "Locate the beam's own weight", `${W}\\text{ N at }${L / 2}\\text{ m from }A`, "Uniformity lets us replace the beam's weight by one force at the midpoint."),
      step(3, "Write total downward force", `${W}+${loads[0].force}+${loads[1].force}=${W + loads[0].force + loads[1].force}`, "Vertical equilibrium will later connect the two reactions."),
      step(4, "Take moments about A", `R_B(${L})=${W}(${L / 2})+${loads[0].force}(${loads[0].distance})+${loads[1].force}(${loads[1].distance})`, "This pivot removes $R_A$, leaving a single unknown in the moment equation."),
      step(5, "Calculate the load moment", `\\sum M_A=${money(moment)}\\text{ N m}`, "Each load contributes force times perpendicular distance from the pivot."),
      step(6, "Find the reaction at B", `R_B=\\dfrac{${money(moment)}}{${L}}=${money(RB)}\\text{ N}`, "The reaction at B must create an opposite moment of the same size."),
      step(7, "Use vertical equilibrium", `R_A+R_B=${W + loads[0].force + loads[1].force}`, "No vertical acceleration means the upward and downward totals are equal."),
      step(8, "Find the reaction at A", `R_A=${W + loads[0].force + loads[1].force}-${money(RB)}=${money(RA)}\\text{ N}`, "Substituting the known value of $R_B$ leaves the remaining support reaction."),
      step(9, "Check the signs", `R_A>0,\\quad R_B>0`, "Positive reactions mean both supports remain in contact with the beam."),
      step(10, "State the answer", `R_A=${money(RA)}\\text{ N},\\quad R_B=${money(RB)}\\text{ N}`, "The support nearer the heavier turning effect has the larger reaction."),
    ],
    finalAnswer: `$R_A=${money(RA)}\\,\\text{N},\\quad R_B=${money(RB)}\\,\\text{N}$`,
  };
}

function hingedRodVerticalString({ L, W, P, a }: { L: number; W: number; P: number; a: number }): Shell {
  const T = (W * (L / 2) + P * a) / L;
  const Ay = W + P - T;
  return {
    difficulty: "Intermediate",
    marks: 6,
    answerType: "numeric",
    tags: ["hinged rod", "tension", "moments"],
    questionText: `A uniform horizontal rod $AB$ of length $${L}\\,\\text{m}$ and weight $${W}\\,\\text{N}$ is hinged at $A$. The end $B$ is held by a vertical light string. A load of $${P}\\,\\text{N}$ is attached $${a}\\,\\text{m}$ from $A$. Find the tension in the string and the vertical component of the hinge reaction.`,
    steps: [
      step(1, "Identify the unknowns", "T\\text{ at }B,\\quad A_y\\text{ at the hinge}", "The hinge can supply a reaction, while the string supplies a vertical tension."),
      step(2, "Place the rod's weight", `${W}\\text{ N at }${L / 2}\\text{ m from }A`, "The rod is uniform, so its weight acts through its midpoint."),
      step(3, "Use the hinge as the moment pivot", "\\text{take moments about }A", "The hinge reaction has no moment about A, which keeps the equation simple."),
      step(4, "Write the moment equation", `T(${L})=${W}(${L / 2})+${P}(${a})`, "The string's anticlockwise moment balances the clockwise moments of the rod and attached load."),
      step(5, "Solve for tension", `T=\\dfrac{${W}(${L / 2})+${P}(${a})}{${L}}=${money(T)}\\text{ N}`, "The farther a load is from the hinge, the more tension is needed to balance it."),
      step(6, "Write vertical equilibrium", `A_y+T=${W}+${P}`, "The rod is not accelerating vertically, so upward forces equal downward forces."),
      step(7, "Substitute the tension", `A_y+${money(T)}=${W + P}`, "Only the vertical hinge component remains unknown."),
      step(8, "Find the hinge reaction component", `A_y=${W + P}-${money(T)}=${money(Ay)}\\text{ N}`, "The hinge supplies the rest of the upward support not provided by the string."),
      step(9, "Check contact direction", `A_y=${money(Ay)}\\text{ N}>0`, "A positive value means the hinge pushes upward on the rod."),
      step(10, "State the answer", `T=${money(T)}\\text{ N},\\quad A_y=${money(Ay)}\\text{ N}`, "The two upward forces together balance the rod and load."),
    ],
    finalAnswer: `$T=${money(T)}\\,\\text{N},\\quad A_y=${money(Ay)}\\,\\text{N}$ upward`,
  };
}

function hingedRodAngledString({ L, W, P, a, theta }: { L: number; W: number; P: number; a: number; theta: number }): Shell {
  const s = Math.sin(rad(theta));
  const c = Math.cos(rad(theta));
  const verticalT = (W * (L / 2) + P * a) / L;
  const T = verticalT / s;
  const Ax = T * c;
  const Ay = W + P - verticalT;
  return {
    difficulty: "Intermediate",
    marks: 7,
    answerType: "numeric",
    tags: ["hinged rod", "inclined string", "reaction components"],
    questionText: `A uniform horizontal rod $AB$ of length $${L}\\,\\text{m}$ and weight $${W}\\,\\text{N}$ is hinged at $A$. A light string attached to $B$ makes an angle of $${theta}^{\\circ}$ above the rod. A load of $${P}\\,\\text{N}$ acts $${a}\\,\\text{m}$ from $A$. Find the tension in the string and the horizontal and vertical components of the hinge reaction.`,
    steps: [
      step(1, "Resolve the string tension", "T_x=T\\cos\\theta,\\quad T_y=T\\sin\\theta", "Only the vertical component of the string tension creates a moment about the hinge."),
      step(2, "Place the weights", `${W}\\text{ N at }${L / 2}\\text{ m},\\quad ${P}\\text{ N at }${a}\\text{ m}`, "The moment arm for each vertical force is its horizontal distance from the hinge."),
      step(3, "Take moments about A", `T\\sin${theta}^{\\circ}(${L})=${W}(${L / 2})+${P}(${a})`, "The hinge reaction is removed from the moment equation by choosing the hinge as pivot."),
      step(4, "Find the required vertical string component", `T\\sin${theta}^{\\circ}=\\dfrac{${W}(${L / 2})+${P}(${a})}{${L}}=${money(verticalT)}`, "The vertical component must provide the balancing moment."),
      step(5, "Calculate the tension", `T=\\dfrac{${money(verticalT)}}{\\sin${theta}^{\\circ}}=${money(T)}\\text{ N}`, "The actual tension is larger than its vertical component because the string is inclined."),
      step(6, "Use horizontal equilibrium", `A_x=T\\cos${theta}^{\\circ}`, "The horizontal hinge reaction balances the horizontal pull of the string."),
      step(7, "Calculate the horizontal hinge component", `A_x=${money(T)}\\cos${theta}^{\\circ}=${money(Ax)}\\text{ N}`, "There are no other horizontal forces, so the hinge must supply this opposing component."),
      step(8, "Use vertical equilibrium", `A_y+T\\sin${theta}^{\\circ}=${W}+${P}`, "The upward vertical forces balance the two downward weights."),
      step(9, "Calculate the vertical hinge component", `A_y=${W + P}-${money(verticalT)}=${money(Ay)}\\text{ N}`, "The hinge supplies the remaining upward force after the string's vertical support."),
      step(10, "State the components", `A_x=${money(Ax)}\\text{ N},\\quad A_y=${money(Ay)}\\text{ N}`, "The hinge reaction is naturally described by components because its direction is not given."),
      step(11, "Check the tension direction", `T=${money(T)}\\text{ N}`, "A positive tension confirms the string is pulling rather than pushing."),
      step(12, "State the answer", `T=${money(T)}\\text{ N},\\ A_x=${money(Ax)}\\text{ N},\\ A_y=${money(Ay)}\\text{ N}`, "Together, these forces make both the resultant force and resultant moment zero."),
    ],
    finalAnswer: `$T=${money(T)}\\,\\text{N}$, with hinge components $${money(Ax)}\\,\\text{N}$ horizontal and $${money(Ay)}\\,\\text{N}$ upward`,
  };
}

function ladderSmoothWall({ L, m, theta }: { L: number; m: number; theta: number }): Shell {
  const W = m * g;
  const Rw = (W * (L / 2) * Math.cos(rad(theta))) / (L * Math.sin(rad(theta)));
  const mu = Rw / W;
  return {
    difficulty: "Intermediate",
    marks: 7,
    answerType: "numeric",
    tags: ["ladder", "friction", "limiting equilibrium"],
    questionText: `A uniform ladder of length $${L}\\,\\text{m}$ and mass $${m}\\,\\text{kg}$ rests with its foot on rough horizontal ground and its top against a smooth vertical wall. The ladder makes an angle of $${theta}^{\\circ}$ with the ground. Find the reaction at the wall and the least coefficient of friction needed at the ground.`,
    steps: [
      step(1, "Draw the forces", "W=mg,\\quad R_W\\text{ at wall},\\quad N\\text{ and }F\\text{ at ground}", "The wall is smooth, so it supplies only a horizontal reaction."),
      step(2, "Calculate the weight", `W=${m}(${g})=${money(W)}\\text{ N}`, "The ladder's mass gives its downward weight."),
      step(3, "Use the foot as pivot", "\\text{take moments about the foot}", "The ground reaction and friction pass through the foot, so they have no moment about this pivot."),
      step(4, "Write the moment equation", `R_W L\\sin${theta}^{\\circ}=W\\left(\\dfrac{L}{2}\\cos${theta}^{\\circ}\\right)`, "The wall reaction has vertical lever arm $L\\sin\\theta$, while the weight has horizontal lever arm $\\frac L2\\cos\\theta$."),
      step(5, "Cancel the ladder length", `R_W=${money(W)}\\dfrac{\\cos${theta}^{\\circ}}{2\\sin${theta}^{\\circ}}`, "The same ladder length appears on both sides, so only the angle and weight matter."),
      step(6, "Calculate the wall reaction", `R_W=${money(Rw)}\\text{ N}`, "This is the horizontal push from the wall on the ladder."),
      step(7, "Use horizontal equilibrium", `F=R_W=${money(Rw)}\\text{ N}`, "Friction at the ground balances the wall's horizontal reaction."),
      step(8, "Use vertical equilibrium", `N=W=${money(W)}\\text{ N}`, "The wall is smooth and has no vertical component, so the ground supports the full weight."),
      step(9, "Find the least coefficient", `\\mu=\\dfrac{F}{N}=\\dfrac{${money(Rw)}}{${money(W)}}=${sf(mu)}`, "At the limiting value, friction is just large enough: $F=\\mu N$."),
      step(10, "State the answer", `R_W=${money(Rw)}\\text{ N},\\quad \\mu_{\\min}=${sf(mu)}`, "A larger coefficient would keep the ladder safely below limiting friction."),
    ],
    finalAnswer: `$R_W=${money(Rw)}\\,\\text{N},\\quad \\mu_{\\min}=${sf(mu)}$`,
  };
}

function ladderWithPerson({ L, m, person, d, theta }: { L: number; m: number; person: number; d: number; theta: number }): Shell {
  const Wl = m * g;
  const Wp = person * g;
  const Rw = (Wl * (L / 2) * Math.cos(rad(theta)) + Wp * d * Math.cos(rad(theta))) / (L * Math.sin(rad(theta)));
  const N = Wl + Wp;
  const mu = Rw / N;
  return {
    difficulty: "Hard",
    marks: 9,
    answerType: "numeric",
    tags: ["ladder", "person on ladder", "limiting equilibrium"],
    questionText: `A uniform ladder of length $${L}\\,\\text{m}$ and mass $${m}\\,\\text{kg}$ rests with its foot on rough horizontal ground and its top against a smooth vertical wall. It makes an angle of $${theta}^{\\circ}$ with the ground. A person of mass $${person}\\,\\text{kg}$ stands $${d}\\,\\text{m}$ up the ladder from the foot. Find the reaction at the wall and the least coefficient of friction needed at the ground.`,
    steps: [
      step(1, "List the forces", "R_W,\\quad N,\\quad F,\\quad W_L,\\quad W_P", "The ladder has contact forces at the wall and ground, plus the weights of the ladder and person."),
      step(2, "Calculate the weights", `W_L=${m}(${g})=${money(Wl)},\\quad W_P=${person}(${g})=${money(Wp)}`, "Using weights keeps all force terms in newtons."),
      step(3, "Choose the foot as pivot", "\\text{take moments about the foot}", "This removes both ground forces, which are usually the awkward unknowns."),
      step(4, "Find the wall-reaction moment arm", `L\\sin${theta}^{\\circ}`, "The wall reaction is horizontal, so its perpendicular distance from the foot is the vertical height of the top."),
      step(5, "Find the ladder-weight moment arm", `\\dfrac{L}{2}\\cos${theta}^{\\circ}`, "The ladder's centre is halfway along the ladder, so its horizontal distance from the foot is this value."),
      step(6, "Find the person's moment arm", `${d}\\cos${theta}^{\\circ}`, "The person's weight acts vertically, so the horizontal distance from the foot is the perpendicular moment arm."),
      step(7, "Write the moment equation", `R_W(${L}\\sin${theta}^{\\circ})=${money(Wl)}\\left(\\dfrac{${L}}{2}\\cos${theta}^{\\circ}\\right)+${money(Wp)}(${d}\\cos${theta}^{\\circ})`, "The wall reaction balances the clockwise moments of both weights."),
      step(8, "Solve for the wall reaction", `R_W=${money(Rw)}\\text{ N}`, "The person increases the required wall reaction because their weight adds a turning effect."),
      step(9, "Use horizontal equilibrium", `F=R_W=${money(Rw)}\\text{ N}`, "The ground friction must balance the wall reaction."),
      step(10, "Use vertical equilibrium", `N=W_L+W_P=${money(N)}\\text{ N}`, "Only the ground supplies vertical support because the wall is smooth."),
      step(11, "Use limiting friction", `F=\\mu N`, "The least coefficient occurs when the friction is just at its limiting value."),
      step(12, "Calculate the coefficient", `\\mu=\\dfrac{${money(Rw)}}{${money(N)}}=${sf(mu)}`, "Dividing the required friction by the normal reaction gives the minimum coefficient."),
      step(13, "Check the model", `0<\\mu_{\\min}<1`, "The value is a plausible coefficient of friction for a rough contact."),
      step(14, "State the answer", `R_W=${money(Rw)}\\text{ N},\\quad \\mu_{\\min}=${sf(mu)}`, "These are the contact conditions needed for equilibrium with the person in place."),
    ],
    finalAnswer: `$R_W=${money(Rw)}\\,\\text{N},\\quad \\mu_{\\min}=${sf(mu)}$`,
  };
}

function topplingPush({ m, b, h, mu }: { m: number; b: number; h: number; mu: number }): Shell {
  const W = m * g;
  const FTopple = (W * b) / (2 * h);
  const FSlide = mu * W;
  const mode = FTopple < FSlide ? "topple" : "slide";
  const first = Math.min(FTopple, FSlide);
  return {
    difficulty: "Hard",
    marks: 8,
    answerType: "numeric",
    tags: ["toppling", "sliding", "limiting equilibrium"],
    questionText: `A rectangular block of mass $${m}\\,\\text{kg}$ has base width $${b}\\,\\text{m}$ and height $${h}\\,\\text{m}$. It rests on rough horizontal ground with coefficient of friction $${mu}$. A horizontal force is applied at the top edge. Determine whether the block first slides or topples as the force is increased, and find the corresponding force.`,
    steps: [
      step(1, "Calculate the weight", `W=mg=${m}(${g})=${money(W)}\\text{ N}`, "The weight controls both the friction limit and the resisting moment against toppling."),
      step(2, "Find the sliding threshold", `F_{\\text{slide}}=\\mu W=${mu}(${money(W)})=${money(FSlide)}\\text{ N}`, "Sliding begins when the applied force reaches the maximum available friction."),
      step(3, "Choose the toppling pivot", "\\text{outer bottom edge}", "At impending toppling the normal reaction shifts to the edge about which the block would rotate."),
      step(4, "Write the toppling moment balance", `Fh=W\\dfrac{b}{2}`, "The applied force turns the block about the edge, while the weight's line of action resists by half the base width."),
      step(5, "Solve for the toppling force", `F_{\\text{topple}}=\\dfrac{Wb}{2h}`, "A taller block needs less force to topple because the applied force has a larger moment arm."),
      step(6, "Substitute the dimensions", `F_{\\text{topple}}=\\dfrac{${money(W)}(${b})}{2(${h})}=${money(FTopple)}\\text{ N}`, "This is the force at which the weight's line of action passes through the edge."),
      step(7, "Compare the two thresholds", `${money(FTopple)}\\text{ N}\\ ${FTopple < FSlide ? "<" : ">"}\\ ${money(FSlide)}\\text{ N}`, "Whichever limiting condition needs the smaller force happens first."),
      step(8, "Identify the first motion", `\\text{first motion: ${mode}}`, "The body cannot reach the larger threshold because it has already started moving."),
      step(9, "State the critical force", `F=${money(first)}\\text{ N}`, "This is the applied force at the first loss of static equilibrium."),
      step(10, "Check the friction condition", `F_{\\text{first}}\\le F_{\\text{slide}}`, "If toppling occurs first, friction is still able to prevent sliding up to that point."),
      step(11, "Check the moment condition", `F_{\\text{first}}\\le F_{\\text{topple}}`, "If sliding occurs first, the block has not yet reached the toppling moment."),
      step(12, "Give the physical conclusion", `\\text{The block will ${mode}.}`, "This translates the numerical comparison into the behaviour of the rigid body."),
      step(13, "State the answer", `${mode}\\text{ first at }${money(first)}\\text{ N}`, "The critical force is the smaller of the sliding and toppling thresholds."),
    ],
    finalAnswer: `The block will ${mode} first, at an applied force of $${money(first)}\\,\\text{N}$.`,
  };
}

function blockOnIncline({ b, h, mu }: { b: number; h: number; mu: number }): Shell {
  const slideAngle = deg(Math.atan(mu));
  const toppleAngle = deg(Math.atan(b / h));
  const mode = toppleAngle < slideAngle ? "topple" : "slide";
  const first = Math.min(toppleAngle, slideAngle);
  return {
    difficulty: "Hard",
    marks: 8,
    answerType: "numeric",
    tags: ["inclined plane", "toppling", "sliding"],
    questionText: `A uniform rectangular block has base length $${b}\\,\\text{m}$ measured down a rough plane and height $${h}\\,\\text{m}$ perpendicular to the plane. The coefficient of friction between the block and plane is $${mu}$. As the angle of the plane is slowly increased, determine whether the block first slides or topples, and find the angle at which this happens.`,
    steps: [
      step(1, "Set up the sliding condition", `mg\\sin\\theta=\\mu mg\\cos\\theta`, "At impending sliding, the downslope component of weight equals limiting friction."),
      step(2, "Simplify the sliding condition", `\\tan\\theta=\\mu`, "The weight cancels, so sliding depends only on the coefficient of friction."),
      step(3, "Find the sliding angle", `\\theta_{\\text{slide}}=\\tan^{-1}(${mu})=${sf(slideAngle)}^{\\circ}`, "This is the angle at which friction is just fully used."),
      step(4, "Set up the toppling condition", "\\text{line of action of weight passes through the lower edge}", "Toppling begins when the centre of mass is vertically above the downhill edge."),
      step(5, "Use the block geometry", `\\tan\\theta_{\\text{topple}}=\\dfrac{b}{h}`, "The centre of mass is halfway across the base and halfway up the height, so the halves cancel in the ratio."),
      step(6, "Find the toppling angle", `\\theta_{\\text{topple}}=\\tan^{-1}\\left(\\dfrac{${b}}{${h}}\\right)=${sf(toppleAngle)}^{\\circ}`, "A taller, narrower block has a smaller toppling angle."),
      step(7, "Compare limiting angles", `${sf(toppleAngle)}^{\\circ}\\ ${toppleAngle < slideAngle ? "<" : ">"}\\ ${sf(slideAngle)}^{\\circ}`, "As the plane is raised, the smaller limiting angle is reached first."),
      step(8, "Identify the first motion", `\\text{first motion: ${mode}}`, "The block cannot remain in static equilibrium beyond the first limiting condition."),
      step(9, "State the critical angle", `\\theta=${sf(first)}^{\\circ}`, "This is the incline angle at the onset of motion."),
      step(10, "Check the alternative condition", `\\theta_{\\text{first}}\\le \\theta_{\\text{other}}`, "The other mode has not yet reached its own threshold."),
      step(11, "Interpret the result", `\\text{The block will ${mode}.}`, "The comparison tells us the physical behaviour, not just the angle values."),
      step(12, "State assumptions", "\\text{uniform rigid block, quasi-static increase of angle}", "These assumptions justify using centre of mass and limiting equilibrium rather than dynamics."),
      step(13, "Give the answer", `${mode}\\text{ first at }${sf(first)}^{\\circ}`, "The first loss of equilibrium is the required event."),
    ],
    finalAnswer: `The block will ${mode} first, at $${sf(first)}^{\\circ}$.`,
  };
}

const shells: Shell[] = [
  ...[
    [6, 120, 80, 2, "A light machine part is being tested on two supports."],
    [8, 160, 120, 3, "A small bridge beam is modelled as a rigid uniform beam."],
    [10, 200, 150, 4, "A shelf is modelled as a uniform beam on two brackets."],
    [12, 240, 180, 5, "A walkway plank is treated as a rigid beam."],
    [9, 180, 100, 6, "A uniform barrier rests on two supports."],
    [7, 140, 90, 1.5, "A horizontal sign support is modelled as a beam."],
    [11, 220, 160, 7, "A loading ramp is temporarily supported at both ends."],
    [5, 100, 60, 3, "A short uniform beam lies across two trestles."],
    [13, 260, 200, 8, "A stage beam is supported at its ends."],
    [6.5, 130, 110, 4.5, "A rigid rail is supported at two points."],
    [9.5, 190, 140, 2.5, "A uniform timber beam rests horizontally."],
    [10.5, 210, 170, 7.5, "A laboratory beam is loaded while supported at both ends."],
    [7.5, 150, 130, 5.5, "A horizontal beam is used to support a hanging load."],
    [12.5, 250, 210, 3.5, "A uniform girder is modelled as a rigid beam."],
  ].map(([L, W, P, x, context]) =>
    beamSingle({ L: Number(L), W: Number(W), P: Number(P), x: Number(x), context: String(context) }),
  ),
  ...[
    [10, 180, 90, 2, 120, 7, "A beam carrying equipment is supported at both ends."],
    [12, 240, 150, 3, 100, 9, "A uniform beam is loaded at two points."],
    [8, 160, 70, 1.5, 130, 6, "A test beam rests on supports at A and B."],
    [14, 280, 180, 4, 220, 11, "A long horizontal beam carries two point loads."],
    [9, 150, 110, 2.5, 90, 7.5, "A rigid shelf is modelled as a beam."],
    [11, 210, 100, 3, 160, 8, "A plank is supported at its two ends."],
    [13, 260, 200, 5, 140, 10, "A bridge member is approximated by a uniform beam."],
    [7, 120, 60, 2, 80, 5, "A small beam is in static equilibrium."],
    [15, 300, 240, 6, 180, 12, "A loaded beam is held by end supports."],
    [9.5, 190, 130, 4, 170, 8, "A rigid bar lies horizontally on two supports."],
  ].map(([L, W, P1, x1, P2, x2, context]) =>
    beamTwoLoads({
      L: Number(L),
      W: Number(W),
      loads: [
        { force: Number(P1), distance: Number(x1) },
        { force: Number(P2), distance: Number(x2) },
      ],
      context: String(context),
    }),
  ),
  ...[
    [4, 80, 60, 3],
    [5, 100, 80, 2],
    [6, 120, 90, 4],
    [7, 140, 110, 5],
    [8, 160, 100, 6],
    [4.5, 90, 70, 1.5],
    [5.5, 110, 120, 4],
    [6.5, 130, 95, 2.5],
    [7.5, 150, 140, 5.5],
    [8.5, 170, 130, 3.5],
  ].map(([L, W, P, a]) => hingedRodVerticalString({ L, W, P, a })),
  ...[
    [4, 80, 60, 3, 30],
    [5, 100, 90, 2, 45],
    [6, 120, 80, 4, 60],
    [7, 140, 110, 5, 35],
    [8, 160, 130, 6, 50],
    [5.5, 110, 70, 3.5, 40],
    [6.5, 130, 100, 2.5, 55],
    [7.5, 150, 120, 6, 65],
  ].map(([L, W, P, a, theta]) => hingedRodAngledString({ L, W, P, a, theta })),
  ...[
    [5, 12, 60],
    [6, 15, 55],
    [7, 18, 50],
    [8, 20, 65],
    [4, 10, 58],
    [5.5, 14, 62],
    [6.5, 16, 48],
    [7.5, 19, 52],
    [8.5, 22, 57],
    [9, 25, 63],
  ].map(([L, m, theta]) => ladderSmoothWall({ L, m, theta })),
  ...[
    [6, 18, 70, 3, 60],
    [7, 20, 75, 4, 55],
    [8, 24, 80, 5, 58],
    [9, 26, 85, 6, 62],
    [5.5, 16, 65, 2.5, 57],
    [6.5, 19, 72, 4.5, 52],
    [7.5, 22, 78, 5.5, 65],
    [8.5, 25, 82, 6.5, 54],
  ].map(([L, m, person, d, theta]) => ladderWithPerson({ L, m, person, d, theta })),
  ...[
    [20, 0.6, 1.2, 0.4],
    [25, 0.8, 1.6, 0.35],
    [30, 0.7, 1.0, 0.5],
    [18, 0.5, 1.4, 0.3],
    [35, 1.0, 1.5, 0.45],
    [28, 0.9, 1.8, 0.25],
  ].map(([m, b, h, mu]) => topplingPush({ m, b, h, mu })),
  ...[
    [0.6, 1.2, 0.4],
    [0.8, 1.0, 0.5],
    [0.5, 1.5, 0.25],
    [1.0, 1.4, 0.8],
  ].map(([b, h, mu]) => blockOnIncline({ b, h, mu })),
];

if (shells.length !== 70) {
  throw new Error(`Expected 70 statics of rigid bodies questions, got ${shells.length}`);
}

export const questions: Question[] = shells.map((shell, index) => makeQuestion(index + 1, shell));
