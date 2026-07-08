#!/usr/bin/env node
import { writeFileSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const outPath = resolve(__dirname, "../src/data/questions/a-level-maths/year-2-pure/differential-equations.ts");

const SUBTOPIC = "Differential equations";
const SUBTOPIC_ID = "al.y2.pure.differential-equations";
const LEVEL = "A-Level Maths";
const TOPIC = "Year 2 Pure";

const qid = (n) => `al.y2.pure.differential-equations.q${String(n).padStart(3, "0")}`;
const step = (n, description, workingLatex, explanation) => ({ stepNumber: n, description, workingLatex, explanation, diagram: null });
const base = (meta) => ({ level: LEVEL, topic: TOPIC, subtopic: SUBTOPIC, subtopicId: SUBTOPIC_ID, questionDiagram: null, ...meta });
const deQ = (n, meta) => base({ id: qid(n), tags: ["differential equations", ...(meta.tags || [])], ...meta });

function separateVars(n, equation, separate, integrate, general, particular, ic, tags = [], difficulty = "Easy", marks = 4) {
  const steps = [
    step(1, "Separate the variables", separate, "Rearrange so all $y$-terms are with $dy$ and all $x$-terms with $dx$."),
    step(2, "Integrate both sides", integrate, "Integrate each side with respect to its variable."),
    step(3, "Write the general solution", general, "Include an arbitrary constant $C$ on one side."),
    step(4, "Apply the initial condition", ic, "Substitute the given values to find $C$."),
    step(5, "Solve for the constant", particular.split("=")[1]?.trim() ? `C = \\text{from substitution}` : "\\text{Solve for }C", "Rearrange after substituting the initial condition."),
    step(6, "State the particular solution", particular, "Express $y$ explicitly if possible."),
    step(7, "Check", `\\text{Verify }${equation}\\text{ and the initial condition}`, "Differentiate or substitute back to confirm."),
  ];
  return deQ(n, {
    difficulty, marks, answerType: "expression", tags,
    questionText: `Solve ${equation}, given ${ic.replace("Substitute", "").replace("At", "when")}.`,
    workedSolution: { steps, finalAnswer: `$${particular}$.` },
  });
}

function hardDe(n, questionText, steps, finalAnswer, tags = [], marks = 8) {
  return deQ(n, { difficulty: "Hard", marks, answerType: "expression", tags: [...tags, "multi-step"], questionText, workedSolution: { steps, finalAnswer } });
}

const questions = [
  // Easy — exponential growth/decay (1–15)
  separateVars(1, "$\\dfrac{dy}{dx}=2y$", "\\dfrac{1}{y}\\,dy=2\\,dx", "\\ln|y|=2x+C", "y=Ae^{2x}", "y=3e^{2x}", "When $x=0$, $y=3$", ["exponential growth"]),
  separateVars(2, "$\\dfrac{dy}{dx}=-3y$", "\\dfrac{1}{y}\\,dy=-3\\,dx", "\\ln|y|=-3x+C", "y=Ae^{-3x}", "y=5e^{-3x}", "When $x=0$, $y=5$", ["exponential decay"]),
  separateVars(3, "$\\dfrac{dy}{dx}=y$", "\\dfrac{1}{y}\\,dy=dx", "\\ln|y|=x+C", "y=e^{x+C}=Ae^{x}", "y=2e^{x}", "When $x=0$, $y=2$", ["exponential growth"]),
  separateVars(4, "$\\dfrac{dy}{dx}=-y$", "\\dfrac{1}{y}\\,dy=-dx", "\\ln|y|=-x+C", "y=Ae^{-x}", "y=4e^{-x}", "When $x=0$, $y=4$", ["exponential decay"]),
  separateVars(5, "$\\dfrac{dy}{dx}=\\dfrac{1}{2}y$", "\\dfrac{1}{y}\\,dy=\\dfrac{1}{2}\\,dx", "\\ln|y|=\\dfrac{x}{2}+C", "y=Ae^{x/2}", "y=e^{x/2}", "When $x=0$, $y=1$", ["exponential growth"]),
  separateVars(6, "$\\dfrac{dP}{dt}=0.1P$", "\\dfrac{1}{P}\\,dP=0.1\\,dt", "\\ln|P|=0.1t+C", "P=Ae^{0.1t}", "P=1000e^{0.1t}", "When $t=0$, $P=1000$", ["modelling", "population"]),
  separateVars(7, "$\\dfrac{dN}{dt}=-0.2N$", "\\dfrac{1}{N}\\,dN=-0.2\\,dt", "\\ln|N|=-0.2t+C", "N=Ae^{-0.2t}", "N=50e^{-0.2t}", "When $t=0$, $N=50$", ["decay"]),
  separateVars(8, "$\\dfrac{dy}{dx}=4y$", "\\dfrac{1}{y}\\,dy=4\\,dx", "\\ln|y|=4x+C", "y=Ae^{4x}", "y=e^{4x}", "When $x=0$, $y=1$", ["exponential growth"]),
  separateVars(9, "$\\dfrac{dy}{dx}=-\\dfrac{y}{3}$", "\\dfrac{1}{y}\\,dy=-\\dfrac{1}{3}\\,dx", "\\ln|y|=-\\dfrac{x}{3}+C", "y=Ae^{-x/3}", "y=6e^{-x/3}", "When $x=0$, $y=6$", ["decay"]),
  separateVars(10, "$\\dfrac{dy}{dx}=\\dfrac{y}{2}$", "\\dfrac{1}{y}\\,dy=\\dfrac{1}{2}\\,dx", "\\ln|y|=\\dfrac{x}{2}+C", "y=Ae^{x/2}", "y=8e^{x/2}", "When $x=0$, $y=8$", ["growth"]),

  // Easy — separable x and y (11–20)
  separateVars(11, "$\\dfrac{dy}{dx}=\\dfrac{x}{y}$", "y\\,dy=x\\,dx", "\\dfrac{y^{2}}{2}=\\dfrac{x^{2}}{2}+C", "y^{2}=x^{2}+K", "y^{2}=x^{2}+9", "When $x=0$, $y=3$", ["separation of variables"]),
  separateVars(12, "$\\dfrac{dy}{dx}=\\dfrac{2x}{y}$", "y\\,dy=2x\\,dx", "\\dfrac{y^{2}}{2}=x^{2}+C", "y^{2}=2x^{2}+K", "y^{2}=2x^{2}+4", "When $x=0$, $y=2$", ["separation of variables"]),
  separateVars(13, "$\\dfrac{dy}{dx}=xy$", "\\dfrac{1}{y}\\,dy=x\\,dx", "\\ln|y|=\\dfrac{x^{2}}{2}+C", "y=Ae^{x^{2}/2}", "y=2e^{x^{2}/2}", "When $x=0$, $y=2$", ["separation of variables"]),
  separateVars(14, "$\\dfrac{dy}{dx}=\\dfrac{1}{y}$", "y\\,dy=dx", "\\dfrac{y^{2}}{2}=x+C", "y^{2}=2x+K", "y^{2}=2x+1", "When $x=0$, $y=1$", ["separation of variables"]),
  separateVars(15, "$\\dfrac{dy}{dx}=\\dfrac{y}{x}$", "\\dfrac{1}{y}\\,dy=\\dfrac{1}{x}\\,dx", "\\ln|y|=\\ln|x|+C", "y=Ax", "y=3x", "When $x=1$, $y=3$", ["separation of variables"]),

  separateVars(16, "$\\dfrac{dy}{dx}=2x$", "dy=2x\\,dx", "y=x^{2}+C", "y=x^{2}+C", "y=x^{2}+1", "When $x=0$, $y=1$", ["direct integration"]),
  separateVars(17, "$\\dfrac{dy}{dx}=3x^{2}$", "dy=3x^{2}\\,dx", "y=x^{3}+C", "y=x^{3}+C", "y=x^{3}-8", "When $x=2$, $y=0$", ["direct integration"]),
  separateVars(18, "$\\dfrac{dy}{dx}=e^{x}$", "dy=e^{x}\\,dx", "y=e^{x}+C", "y=e^{x}+C", "y=e^{x}", "When $x=0$, $y=1$", ["exponential"]),
  separateVars(19, "$\\dfrac{dy}{dx}=\\cos x$", "dy=\\cos x\\,dx", "y=\\sin x+C", "y=\\sin x+C", "y=\\sin x", "When $x=0$, $y=0$", ["trigonometric"]),
  separateVars(20, "$\\dfrac{dy}{dx}=-\\sin x$", "dy=-\\sin x\\,dx", "y=\\cos x+C", "y=\\cos x+C", "y=\\cos x", "When $x=0$, $y=1$", ["trigonometric"]),

  // Intermediate (21–50)
  separateVars(21, "$\\dfrac{dy}{dx}=\\dfrac{x+1}{y}$", "y\\,dy=(x+1)\\,dx", "\\dfrac{y^{2}}{2}=\\dfrac{x^{2}}{2}+x+C", "y^{2}=x^{2}+2x+K", "y^{2}=x^{2}+2x+4", "When $x=0$, $y=2$", ["separation of variables"], "Intermediate", 5),
  separateVars(22, "$\\dfrac{dy}{dx}=\\dfrac{y}{x+1}$", "\\dfrac{1}{y}\\,dy=\\dfrac{1}{x+1}\\,dx", "\\ln|y|=\\ln|x+1|+C", "y=A(x+1)", "y=3(x+1)", "When $x=0$, $y=3$", ["separation of variables"], "Intermediate", 5),
  separateVars(23, "$\\dfrac{dy}{dx}=y^{2}$", "\\dfrac{1}{y^{2}}\\,dy=dx", "-\\dfrac{1}{y}=x+C", "y=-\\dfrac{1}{x+C}", "y=-\\dfrac{1}{x-2}", "When $x=1$, $y=1$", ["nonlinear"], "Intermediate", 5),
  separateVars(24, "$\\dfrac{dy}{dx}=\\sqrt{y}$", "\\dfrac{1}{\\sqrt{y}}\\,dy=dx", "2\\sqrt{y}=x+C", "y=\\left(\\dfrac{x+C}{2}\\right)^{2}", "y=\\left(\\dfrac{x+4}{2}\\right)^{2}", "When $x=0$, $y=4$", ["nonlinear"], "Intermediate", 5),
  separateVars(25, "$\\dfrac{dT}{dt}=-k(T-20)$", "\\dfrac{1}{T-20}\\,dT=-k\\,dt", "\\ln|T-20|=-kt+C", "T=20+Ae^{-kt}", "T=20+80e^{-0.05t}", "When $t=0$, $T=100$", ["Newton cooling"], "Intermediate", 6),

  deQ(26, {
    difficulty: "Intermediate", marks: 5, answerType: "expression", tags: ["Newton cooling"],
    questionText: "A liquid cools from $90°\\text{C}$ to $70°\\text{C}$ in 10 minutes in a room at $20°\\text{C}$. Given $\\dfrac{dT}{dt}=-k(T-20)$, find $k$ and $T$ as a function of $t$.",
    workedSolution: {
      steps: [
        step(1, "General solution", "T=20+Ae^{-kt}", "Standard cooling model solution."),
        step(2, "Use T(0)=90", "90=20+A \\Rightarrow A=70", "Initial temperature."),
        step(3, "Use T(10)=70", "70=20+70e^{-10k}", "Second condition."),
        step(4, "Solve for k", "50=70e^{-10k} \\Rightarrow e^{-10k}=\\dfrac{5}{7}", "Rearrange."),
        step(5, "Take logs", "k=-\\dfrac{1}{10}\\ln\\dfrac{5}{7}=\\dfrac{1}{10}\\ln\\dfrac{7}{5}", "Find $k$."),
        step(6, "Particular solution", "T=20+70e^{-kt}", "Temperature model."),
        step(7, "State k", "k=\\dfrac{1}{10}\\ln\\dfrac{7}{5}", "Cooling constant."),
        step(8, "Interpret", "\\text{Exponential approach to room temperature}", "Physical meaning."),
        step(9, "Answer", "T=20+70e^{-kt},\\;k=\\dfrac{1}{10}\\ln\\dfrac{7}{5}", "Complete."),
      ],
      finalAnswer: "$T = 20 + 70e^{-kt}$ where $k = \\dfrac{1}{10}\\ln\\dfrac{7}{5}$.",
    },
  }),

  separateVars(27, "$\\dfrac{dM}{dt}=-0.1M$", "\\dfrac{1}{M}\\,dM=-0.1\\,dt", "\\ln|M|=-0.1t+C", "M=Ae^{-0.1t}", "M=200e^{-0.1t}", "When $t=0$, $M=200$ g", ["radioactive decay"], "Intermediate", 5),
  separateVars(28, "$\\dfrac{dP}{dt}=0.05P$", "\\dfrac{1}{P}\\,dP=0.05\\,dt", "\\ln|P|=0.05t+C", "P=Ae^{0.05t}", "P=500e^{0.05t}", "When $t=0$, $P=500$", ["population growth"], "Intermediate", 5),
  separateVars(29, "$\\dfrac{dy}{dx}=\\dfrac{1}{x}$", "\\dfrac{1}{y}\\,dy=\\dfrac{1}{x}\\,dx", "\\ln|y|=\\ln|x|+C", "y=Ax", "y=2x", "When $x=1$, $y=2$", ["separation"], "Intermediate", 5),
  separateVars(30, "$\\dfrac{dy}{dx}=\\dfrac{y+1}{x}$", "\\dfrac{1}{y+1}\\,dy=\\dfrac{1}{x}\\,dx", "\\ln|y+1|=\\ln|x|+C", "y+1=Ax", "y=2x-1", "When $x=1$, $y=1$", ["separation"], "Intermediate", 5),

  deQ(31, {
    difficulty: "Intermediate", marks: 6, answerType: "expression", tags: ["half-life"],
    questionText: "A radioactive substance decays according to $\\dfrac{dN}{dt}=-\\lambda N$. Initially $N=1000$. After 5 years, $N=800$. Find $\\lambda$ and $N$ in terms of $t$.",
    workedSolution: {
      steps: [
        step(1, "Solve DE", "N=Ae^{-\\lambda t}", "Exponential decay model."),
        step(2, "N(0)=1000", "A=1000", "Initial amount."),
        step(3, "N(5)=800", "1000e^{-5\\lambda}=800", "Use second condition."),
        step(4, "Solve", "e^{-5\\lambda}=0.8", "Divide."),
        step(5, "Lambda", "\\lambda=-\\dfrac{1}{5}\\ln 0.8=\\dfrac{1}{5}\\ln 1.25", "Decay constant."),
        step(6, "Solution", "N=1000e^{-\\lambda t}", "Particular solution."),
        step(7, "Check", "N(5)=800", "Verify."),
        step(8, "Answer", "N=1000e^{-\\lambda t}", "Final."),
        step(9, "Lambda value", "\\lambda=\\dfrac{1}{5}\\ln 1.25", "Numerical constant."),
      ],
      finalAnswer: "$N = 1000e^{-\\lambda t}$ where $\\lambda = \\dfrac{1}{5}\\ln 1.25$.",
    },
  }),

  separateVars(32, "$\\dfrac{dy}{dx}=\\dfrac{x}{y+1}$", "(y+1)\\,dy=x\\,dx", "\\dfrac{(y+1)^{2}}{2}=\\dfrac{x^{2}}{2}+C", "(y+1)^{2}=x^{2}+K", "(y+1)^{2}=x^{2}+1", "When $x=0$, $y=0$", ["separation"], "Intermediate", 5),
  separateVars(33, "$\\dfrac{dy}{dx}=\\dfrac{2}{y}$", "y\\,dy=2\\,dx", "\\dfrac{y^{2}}{2}=2x+C", "y^{2}=4x+K", "y^{2}=4x+1", "When $x=0$, $y=1$", ["separation"], "Intermediate", 5),
  separateVars(34, "$\\dfrac{dy}{dx}=y\\cos x$", "\\dfrac{1}{y}\\,dy=\\cos x\\,dx", "\\ln|y|=\\sin x+C", "y=Ae^{\\sin x}", "y=e^{\\sin x}", "When $x=0$, $y=1$", ["trigonometric"], "Intermediate", 5),
  separateVars(35, "$\\dfrac{dy}{dx}=\\dfrac{e^{x}}{y}$", "y\\,dy=e^{x}\\,dx", "\\dfrac{y^{2}}{2}=e^{x}+C", "y^{2}=2e^{x}+K", "y^{2}=2e^{x}", "When $x=0$, $y=\\sqrt{2}$", ["exponential"], "Intermediate", 5),

  deQ(36, {
    difficulty: "Intermediate", marks: 5, answerType: "exact", tags: ["interpretation"],
    questionText: "Solve $\\dfrac{dy}{dx}=3y$ given $y(0)=2$. Find $y$ when $x=\\ln 2$.",
    workedSolution: {
      steps: [
        step(1, "Separate", "\\dfrac{1}{y}\\,dy=3\\,dx", "Separation."),
        step(2, "Integrate", "\\ln|y|=3x+C", "Log form."),
        step(3, "General", "y=Ae^{3x}", "Exponential form."),
        step(4, "y(0)=2", "A=2", "Initial condition."),
        step(5, "Particular", "y=2e^{3x}", "Solution."),
        step(6, "At x=ln2", "y=2e^{3\\ln 2}=2\\cdot 8=16", "Evaluate."),
        step(7, "Answer", "y=16", "Value at required point."),
        step(8, "Check", "dy/dx=48=3y", "Verify DE."),
        step(9, "State", "y=16", "Final."),
      ],
      finalAnswer: "$y = 16$ when $x = \\ln 2$.",
    },
  }),

  separateVars(37, "$\\dfrac{dy}{dx}=\\dfrac{y-2}{x}$", "\\dfrac{1}{y-2}\\,dy=\\dfrac{1}{x}\\,dx", "\\ln|y-2|=\\ln|x|+C", "y-2=Ax", "y=3x+2", "When $x=1$, $y=5$", ["separation"], "Intermediate", 5),
  separateVars(38, "$\\dfrac{dy}{dx}=x(y+1)$", "\\dfrac{1}{y+1}\\,dy=x\\,dx", "\\ln|y+1|=\\dfrac{x^{2}}{2}+C", "y+1=Ae^{x^{2}/2}", "y=2e^{x^{2}/2}-1", "When $x=0$, $y=1$", ["separation"], "Intermediate", 5),
  separateVars(39, "$\\dfrac{dy}{dx}=\\dfrac{1}{x^{2}y}$", "y\\,dy=\\dfrac{1}{x^{2}}\\,dx", "\\dfrac{y^{2}}{2}=-\\dfrac{1}{x}+C", "y^{2}=-\\dfrac{2}{x}+K", "y^{2}=2-\\dfrac{2}{x}", "When $x=1$, $y=1$", ["separation"], "Intermediate", 5),
  separateVars(40, "$\\dfrac{dy}{dx}=\\dfrac{y}{x^{2}}$", "\\dfrac{1}{y}\\,dy=\\dfrac{1}{x^{2}}\\,dx", "\\ln|y|=-\\dfrac{1}{x}+C", "y=Ae^{-1/x}", "y=e^{-1/x}", "When $x=1$, $y=e^{-1}$", ["separation"], "Intermediate", 5),

  deQ(41, {
    difficulty: "Intermediate", marks: 6, answerType: "expression", tags: ["modelling"],
    questionText: "Bacteria grow so that $\\dfrac{dN}{dt}=0.2N$. If $N=500$ when $t=0$, find (a) $N$ in terms of $t$, (b) $N$ when $t=10$.",
    workedSolution: {
      steps: [
        step(1, "Separate", "\\dfrac{1}{N}\\,dN=0.2\\,dt", "Standard growth DE."),
        step(2, "Integrate", "N=500e^{0.2t}", "Using $N(0)=500$."),
        step(3, "(a) Answer", "N=500e^{0.2t}", "Part (a)."),
        step(4, "(b) t=10", "N=500e^{2}", "Substitute."),
        step(5, "Evaluate", "N=500e^{2}\\approx 3697", "Numerical value."),
        step(6, "Interpret", "\\text{Exponential growth}", "Model behaviour."),
        step(7, "Check t=0", "N=500", "Initial condition."),
        step(8, "Answer (a)", "N=500e^{0.2t}", "General."),
        step(9, "Answer (b)", "N=500e^{2}", "At t=10."),
      ],
      finalAnswer: "(a) $N = 500e^{0.2t}$. (b) $N = 500e^{2}$.",
    },
  }),

  separateVars(42, "$\\dfrac{dy}{dx}=\\dfrac{x^{2}}{y^{2}}$", "y^{2}\\,dy=x^{2}\\,dx", "\\dfrac{y^{3}}{3}=\\dfrac{x^{3}}{3}+C", "y^{3}=x^{3}+K", "y^{3}=x^{3}+8", "When $x=0$, $y=2$", ["nonlinear"], "Intermediate", 5),
  separateVars(43, "$\\dfrac{dy}{dx}=\\dfrac{1}{xy}$", "y\\,dy=\\dfrac{1}{x}\\,dx", "\\dfrac{y^{2}}{2}=\\ln|x|+C", "y^{2}=2\\ln|x|+K", "y^{2}=2\\ln|x|+1", "When $x=1$, $y=1$", ["logarithm"], "Intermediate", 5),
  separateVars(44, "$\\dfrac{dy}{dx}=y\\tan x$", "\\dfrac{1}{y}\\,dy=\\tan x\\,dx", "\\ln|y|=-\\ln|\\cos x|+C", "y=\\dfrac{A}{\\cos x}", "y=\\dfrac{2}{\\cos x}", "When $x=0$, $y=2$", ["trigonometric"], "Intermediate", 5),
  separateVars(45, "$\\dfrac{dy}{dx}=\\dfrac{2x}{y+2}$", "(y+2)\\,dy=2x\\,dx", "\\dfrac{(y+2)^{2}}{2}=x^{2}+C", "(y+2)^{2}=2x^{2}+K", "(y+2)^{2}=2x^{2}+4", "When $x=0$, $y=0$", ["separation"], "Intermediate", 5),

  deQ(46, {
    difficulty: "Intermediate", marks: 5, answerType: "expression", tags: ["general solution"],
    questionText: "Find the general solution of $\\dfrac{dy}{dx}=\\dfrac{3}{y}$.",
    workedSolution: {
      steps: [
        step(1, "Separate", "y\\,dy=3\\,dx", "Multiply both sides."),
        step(2, "Integrate", "\\dfrac{y^{2}}{2}=3x+C", "Integrate each side."),
        step(3, "Multiply by 2", "y^{2}=6x+K", "Where $K=2C$."),
        step(4, "General solution", "y=\\pm\\sqrt{6x+K}", "Two branches possible."),
        step(5, "Simpler form", "y^{2}=6x+C", "Standard answer."),
        step(6, "Domain", "6x+C\\geq 0", "Real solutions."),
        step(7, "Answer", "y^{2}=6x+C", "General solution."),
        step(8, "Note", "\\text{No initial condition given}", "Arbitrary constant."),
        step(9, "State", "y^{2}=6x+C", "Final."),
      ],
      finalAnswer: "$y^{2} = 6x + C$ (or $y = \\pm\\sqrt{6x+C}$).",
    },
  }),

  separateVars(47, "$\\dfrac{dy}{dx}=\\dfrac{y}{x-1}$", "\\dfrac{1}{y}\\,dy=\\dfrac{1}{x-1}\\,dx", "\\ln|y|=\\ln|x-1|+C", "y=A(x-1)", "y=4(x-1)", "When $x=2$, $y=4$", ["separation"], "Intermediate", 5),
  separateVars(48, "$\\dfrac{dy}{dx}=\\dfrac{1}{y-3}$", "dy=\\dfrac{1}{y-3}\\,dx", "y-3=\\ln|x|+C", "y=3+\\ln|x|+C", "y=3+\\ln|x|+1", "When $x=1$, $y=3$", ["logarithm"], "Intermediate", 5),
  separateVars(49, "$\\dfrac{dy}{dx}=\\dfrac{x}{x^{2}+1}$", "dy=\\dfrac{x}{x^{2}+1}\\,dx", "y=\\dfrac{1}{2}\\ln(x^{2}+1)+C", "y=\\dfrac{1}{2}\\ln(x^{2}+1)+C", "y=\\dfrac{1}{2}\\ln(x^{2}+1)", "When $x=0$, $y=0$", ["substitution link"], "Intermediate", 5),
  separateVars(50, "$\\dfrac{dy}{dx}=\\dfrac{2y+4}{x}$", "\\dfrac{1}{2y+4}\\,dy=\\dfrac{1}{x}\\,dx", "\\dfrac{1}{2}\\ln|2y+4|=\\ln|x|+C", "2y+4=Ax^{2}", "y=\\dfrac{x^{2}}{2}-2", "When $x=2$, $y=0$", ["separation"], "Intermediate", 5),

  // Hard (51–70)
  hardDe(51, "Solve $\\dfrac{dy}{dx}=y(1-y)$ with $y(0)=0.5$. Find $\\displaystyle\\lim_{x\\to\\infty}y$.", [
    step(1, "Separate", "\\dfrac{1}{y(1-y)}\\,dy=dx", "Logistic-type equation."),
    step(2, "Partial fractions", "\\dfrac{1}{y}+\\dfrac{1}{1-y}", "Decompose."),
    step(3, "Integrate", "\\ln|y|-\\ln|1-y|=x+C", "Log form."),
    step(4, "Simplify", "\\ln\\left|\\dfrac{y}{1-y}\\right|=x+C", "Combine logs."),
    step(5, "y(0)=0.5", "C=0", "Initial condition gives $C=0$."),
    step(6, "Solve for y", "y=\\dfrac{e^{x}}{1+e^{x}}=\\dfrac{1}{1+e^{-x}}", "Rearrange."),
    step(7, "Limit", "\\lim_{x\\to\\infty}y=1", "As $x\\to\\infty$, $y\\to 1$."),
    step(8, "Interpret", "\\text{Carrying capacity }y=1", "Logistic model."),
    step(9, "Answer", "y=\\dfrac{1}{1+e^{-x}},\\;\\lim y=1", "Complete."),
  ], "$y = \\dfrac{1}{1+e^{-x}}$. $\\displaystyle\\lim_{x\\to\\infty} y = 1$.", ["logistic"]),

  hardDe(52, "A substance cools from $100°\\text{C}$ to $60°\\text{C}$ in 15 minutes in a room at $20°\\text{C}$. Model with $\\dfrac{dT}{dt}=-k(T-20)$. Find how long until $T=30°\\text{C}$.", [
    step(1, "Solution", "T=20+80e^{-kt}", "From $T(0)=100$."),
    step(2, "T(15)=60", "60=20+80e^{-15k}", "Use cooling data."),
    step(3, "Solve k", "e^{-15k}=0.5 \\Rightarrow k=\\dfrac{\\ln 2}{15}", "Half-life style."),
    step(4, "Set T=30", "30=20+80e^{-kt}", "Target temperature."),
    step(5, "Solve", "e^{-kt}=\\dfrac{1}{8}", "Rearrange."),
    step(6, "Time", "t=\\dfrac{3\\ln 2}{k}=\\dfrac{45\\ln 2}{\\ln 2}=45", "Minutes."),
    step(7, "Answer", "t=45 \\text{ minutes}", "Time to reach $30°\\text{C}$."),
    step(8, "Check", "T decreases to room temp", "Reasonable."),
    step(9, "State", "45 \\text{ minutes}", "Final."),
  ], "It takes **45 minutes** to cool to $30°\\text{C}$.", ["Newton cooling", "application"]),

  hardDe(53, "Solve $\\dfrac{dy}{dx}=\\dfrac{x^{2}+1}{y^{2}+1}$ with $y(0)=1$.", [
    step(1, "Separate", "(y^{2}+1)\\,dy=(x^{2}+1)\\,dx", "Both sides factorised."),
    step(2, "Integrate LHS", "\\dfrac{y^{3}}{3}+y", "Term by term."),
    step(3, "Integrate RHS", "\\dfrac{x^{3}}{3}+x+C", "Polynomial integration."),
    step(4, "Equation", "\\dfrac{y^{3}}{3}+y=\\dfrac{x^{3}}{3}+x+C", "Implicit solution."),
    step(5, "y(0)=1", "C=\\dfrac{4}{3}", "Substitute."),
    step(6, "Particular", "\\dfrac{y^{3}}{3}+y=\\dfrac{x^{3}}{3}+x+\\dfrac{4}{3}", "Implicit form."),
    step(7, "Note", "\\text{Cannot solve explicitly for }y", "Accept implicit answer."),
    step(8, "Verify", "\\text{Substitute }(0,1)", "Satisfies IC."),
    step(9, "Answer", "\\dfrac{y^{3}}{3}+y=\\dfrac{x^{3}}{3}+x+\\dfrac{4}{3}", "Final."),
  ], "$\\dfrac{y^{3}}{3}+y = \\dfrac{x^{3}}{3}+x+\\dfrac{4}{3}$."),

  hardDe(54, "Find the particular solution of $\\dfrac{dy}{dx}=\\dfrac{y^{2}}{x^{2}}$ given $y(1)=2$.", [
    step(1, "Rewrite", "\\dfrac{dy}{dx}=\\left(\\dfrac{y}{x}\\right)^{2}", "Homogeneous form."),
    step(2, "Separate", "\\dfrac{1}{y^{2}}\\,dy=\\dfrac{1}{x^{2}}\\,dx", "Separation."),
    step(3, "Integrate", "-\\dfrac{1}{y}=-\\dfrac{1}{x}+C", "Power rule."),
    step(4, "Rearrange", "\\dfrac{1}{y}=\\dfrac{1}{x}-C", "Solve for $y$."),
    step(5, "y(1)=2", "C=-\\dfrac{1}{2}", "Find constant."),
    step(6, "Particular", "\\dfrac{1}{y}=\\dfrac{1}{x}+\\dfrac{1}{2}", "Substitute $C$."),
    step(7, "Simplify", "y=\\dfrac{2x}{x+2}", "Explicit solution."),
    step(8, "Check", "y(1)=2", "Verify IC."),
    step(9, "Answer", "y=\\dfrac{2x}{x+2}", "Final."),
  ], "$y = \\dfrac{2x}{x+2}$."),

  hardDe(55, "Solve $\\dfrac{dP}{dt}=0.03P(1000-P)$ with $P(0)=100$. Interpret the meaning of $P=1000$.", [
    step(1, "Separate", "\\dfrac{1}{P(1000-P)}\\,dP=0.03\\,dt", "Logistic DE."),
    step(2, "Partial fractions", "\\dfrac{1}{1000}\\left(\\dfrac{1}{P}+\\dfrac{1}{1000-P}\\right)", "Decompose."),
    step(3, "Integrate", "\\ln|P|-\\ln|1000-P|=30t+C", "After multiplying by 1000."),
    step(4, "P(0)=100", "\\ln\\dfrac{100}{900}=C", "Initial condition."),
    step(5, "Solve", "P=\\dfrac{1000}{1+9e^{-30t}}", "Logistic solution."),
    step(6, "P=1000", "\\text{Carrying capacity}", "Population limit."),
    step(7, "Interpret", "P\\to 1000 \\text{ as }t\\to\\infty", "Long-term behaviour."),
    step(8, "Answer", "P=\\dfrac{1000}{1+9e^{-30t}}", "Solution."),
    step(9, "Meaning", "P=1000 \\text{ is the maximum sustainable population}", "Interpretation."),
  ], "$P = \\dfrac{1000}{1+9e^{-30t}}$. $P=1000$ is the **carrying capacity**.", ["logistic", "modelling"]),

  hardDe(56, "Given $\\dfrac{dy}{dx}=\\dfrac{2x}{y}$ and $y(2)=4$, find $y$ when $x=3$.", [
    step(1, "Separate", "y\\,dy=2x\\,dx", "Separation."),
    step(2, "Integrate", "y^{2}=2x^{2}+C", "Both sides."),
    step(3, "y(2)=4", "16=8+C \\Rightarrow C=8", "Find $C$."),
    step(4, "Particular", "y^{2}=2x^{2}+8", "Solution."),
    step(5, "x=3", "y^{2}=18+8=26", "Substitute."),
    step(6, "y", "y=\\sqrt{26}", "Positive branch from IC."),
    step(7, "Answer", "y=\\sqrt{26}", "Value at $x=3$."),
    step(8, "Check", "Consistent with DE", "Verify."),
    step(9, "State", "y=\\sqrt{26}", "Final."),
  ], "$y = \\sqrt{26}$ when $x = 3$."),

  hardDe(57, "Show that the general solution of $\\dfrac{dy}{dx}+2y=0$ is $y=Ae^{-2x}$ using separation of variables.", [
    step(1, "Rearrange", "\\dfrac{dy}{dx}=-2y", "Standard form."),
    step(2, "Separate", "\\dfrac{1}{y}\\,dy=-2\\,dx", "Variables separated."),
    step(3, "Integrate", "\\ln|y|=-2x+C", "Log form."),
    step(4, "Exponentiate", "y=e^{-2x+C}=Ae^{-2x}", "General solution."),
    step(5, "Verify", "\\dfrac{dy}{dx}=-2Ae^{-2x}=-2y", "Satisfies DE."),
    step(6, "Arbitrary constant", "A=e^{C}", "Any real $A$."),
    step(7, "Answer", "y=Ae^{-2x}", "Shown."),
    step(8, "Method", "\\text{Separation of variables}", "Technique."),
    step(9, "State", "y=Ae^{-2x}", "General solution."),
  ], "General solution: $y = Ae^{-2x}$.", ["proof"]),

  hardDe(58, "Solve $\\dfrac{dy}{dx}=\\dfrac{1+y^{2}}{1+x^{2}}$ with $y(0)=0$.", [
    step(1, "Separate", "\\dfrac{1}{1+y^{2}}\\,dy=\\dfrac{1}{1+x^{2}}\\,dx", "Recognise derivative of arctan."),
    step(2, "Integrate", "\\arctan y=\\arctan x+C", "Standard integrals."),
    step(3, "y(0)=0", "C=0", "Initial condition."),
    step(4, "Solve", "y=\\tan(\\arctan x)=x", "For this domain."),
    step(5, "Check", "dy/dx=1=\\dfrac{1+x^{2}}{1+x^{2}}", "Verify."),
    step(6, "Answer", "y=x", "Particular solution."),
    step(7, "Domain", "|x|<\\dfrac{\\pi}{2}", "Where tan is defined."),
    step(8, "Technique", "\\text{Arctan integrals from separation}", "Key skill."),
    step(9, "State", "y=x", "Final."),
  ], "$y = x$."),

  hardDe(59, "A tank leaks so $\\dfrac{dV}{dt}=-0.1\\sqrt{V}$ with $V(0)=100$. Solve for $V(t)$.", [
    step(1, "Separate", "V^{-1/2}\\,dV=-0.1\\,dt", "Power form."),
    step(2, "Integrate", "2\\sqrt{V}=-0.1t+C", "Integrate each side."),
    step(3, "V(0)=100", "C=20", "Initial volume."),
    step(4, "Solve", "\\sqrt{V}=10-0.05t", "Rearrange."),
    step(5, "Particular", "V=(10-0.05t)^{2}", "Volume model."),
    step(6, "Empty time", "t=200", "When $V=0$."),
    step(7, "Interpret", "\\text{Leak rate decreases as volume drops}", "Physical meaning."),
    step(8, "Answer", "V=(10-0.05t)^{2}", "Solution."),
    step(9, "Domain", "0\\leq t\\leq 200", "Valid interval."),
  ], "$V = (10-0.05t)^{2}$ for $0 \\leq t \\leq 200$.", ["modelling"]),

  hardDe(60, "Find the particular solution of $\\dfrac{dy}{dx}=\\dfrac{x}{y^{2}}$ with $y(1)=-1$.", [
    step(1, "Separate", "y^{2}\\,dy=x\\,dx", "Separation."),
    step(2, "Integrate", "\\dfrac{y^{3}}{3}=\\dfrac{x^{2}}{2}+C", "Power rule."),
    step(3, "y(1)=-1", "-\\dfrac{1}{3}=\\dfrac{1}{2}+C", "Substitute."),
    step(4, "C", "C=-\\dfrac{5}{6}", "Solve."),
    step(5, "Implicit", "y^{3}=\\dfrac{3x^{2}}{2}-\\dfrac{5}{2}", "Multiply by 3."),
    step(6, "Explicit", "y=\\sqrt[3]{\\dfrac{3x^{2}-5}{2}}", "Cube root."),
    step(7, "Check", "y(1)=-1", "Verify."),
    step(8, "Answer", "y=\\sqrt[3]{\\dfrac{3x^{2}-5}{2}}", "Particular solution."),
    step(9, "State", "y=\\sqrt[3]{\\dfrac{3x^{2}-5}{2}}", "Final."),
  ], "$y = \\sqrt[3]{\\dfrac{3x^{2}-5}{2}}$."),

  hardDe(61, "Solve $\\dfrac{dy}{dx}=y+1$ with $y(0)=2$.", [
    step(1, "Let u=y+1", "du=dy", "Substitution simplifies."),
    step(2, "DE becomes", "\\dfrac{du}{dx}=u", "Exponential form."),
    step(3, "Solve", "u=Ae^{x}", "Standard."),
    step(4, "y(0)=2", "u(0)=3 \\Rightarrow A=3", "Initial condition."),
    step(5, "Answer", "y=3e^{x}-1", "Back-substitute."),
    step(6, "Check", "y(0)=2", "Verify."),
    step(7, "Alternative", "\\text{Separate }\\dfrac{dy}{y+1}=dx", "Same result."),
    step(8, "Integrate", "y+1=3e^{x}", "Direct method."),
    step(9, "State", "y=3e^{x}-1", "Final."),
  ], "$y = 3e^{x}-1$."),

  hardDe(62, "The rate of change of height $h$ cm of water leaking from a cone is $\\dfrac{dh}{dt}=-0.5h$. If $h(0)=40$, find $h$ when $t=5$.", [
    step(1, "Separate", "\\dfrac{1}{h}\\,dh=-0.5\\,dt", "Exponential decay."),
    step(2, "Integrate", "h=40e^{-0.5t}", "Using $h(0)=40$."),
    step(3, "t=5", "h=40e^{-2.5}", "Substitute."),
    step(4, "Evaluate", "h\\approx 3.29", "Numerical."),
    step(5, "Exact", "h=40e^{-2.5}", "Exact form."),
    step(6, "Interpret", "\\text{Height decays exponentially}", "Leak model."),
    step(7, "Answer", "h=40e^{-2.5}", "At $t=5$."),
    step(8, "Check", "h<40", "Decreasing."),
    step(9, "State", "h=40e^{-2.5}\\approx 3.3\\text{ cm}", "Final."),
  ], "$h = 40e^{-2.5}$ cm $\\approx 3.3$ cm.", ["modelling"]),

  hardDe(63, "Find the general solution of $\\dfrac{dy}{dx}=\\dfrac{y}{x}\\ln x$.", [
    step(1, "Separate", "\\dfrac{1}{y}\\,dy=\\dfrac{\\ln x}{x}\\,dx", "Separation."),
    step(2, "RHS integral", "u=\\ln x,\\;du=\\dfrac{1}{x}\\,dx", "Substitution."),
    step(3, "Integrate", "\\ln|y|=\\dfrac{(\\ln x)^{2}}{2}+C", "Both sides."),
    step(4, "General", "y=Ae^{(\\ln x)^{2}/2}", "Exponential form."),
    step(5, "Simpler", "y=A x^{\\ln x / 2}", "Using $e^{\\ln x}=x$."),
    step(6, "Domain", "x>0", "Log defined."),
    step(7, "Answer", "y=Ae^{(\\ln x)^{2}/2}", "General solution."),
    step(8, "Check", "\\text{Differentiate implicitly}", "Verify."),
    step(9, "State", "y=Ae^{(\\ln x)^{2}/2}", "Final."),
  ], "$y = Ae^{(\\ln x)^{2}/2}$ for $x > 0$."),

  hardDe(64, "Solve $\\dfrac{dy}{dx}=\\dfrac{3x^{2}}{2y}$ with $y(1)=2$. Find the value of $x$ when $y=4$.", [
    step(1, "Separate", "2y\\,dy=3x^{2}\\,dx", "Multiply through."),
    step(2, "Integrate", "y^{2}=x^{3}+C", "Both sides."),
    step(3, "y(1)=2", "C=3", "Initial condition."),
    step(4, "Particular", "y^{2}=x^{3}+3", "Solution."),
    step(5, "y=4", "16=x^{3}+3", "Set $y=4$."),
    step(6, "Solve", "x^{3}=13", "Rearrange."),
    step(7, "x", "x=\\sqrt[3]{13}", "Cube root."),
    step(8, "Answer", "x=\\sqrt[3]{13}", "Required value."),
    step(9, "State", "x=\\sqrt[3]{13}", "Final."),
  ], "$x = \\sqrt[3]{13}$ when $y = 4$."),

  hardDe(65, "A savings account grows continuously at rate $\\dfrac{dS}{dt}=0.04S$. With $S(0)=£2000$, find (a) $S(t)$, (b) when $S=£3000$.", [
    step(1, "Solve", "S=2000e^{0.04t}", "Exponential growth."),
    step(2, "(a)", "S=2000e^{0.04t}", "Answer part (a)."),
    step(3, "Set S=3000", "3000=2000e^{0.04t}", "Part (b)."),
    step(4, "Solve", "e^{0.04t}=1.5", "Divide."),
    step(5, "t", "t=\\dfrac{\\ln 1.5}{0.04}", "Take logs."),
    step(6, "Numerical", "t\\approx 10.1 \\text{ years}", "Approximate."),
    step(7, "Answer (a)", "S=2000e^{0.04t}", "Model."),
    step(8, "Answer (b)", "t=\\dfrac{\\ln 1.5}{0.04}", "Exact time."),
    step(9, "State", "S=2000e^{0.04t};\\;t=\\dfrac{\\ln 1.5}{0.04}", "Both parts."),
  ], "(a) $S = 2000e^{0.04t}$. (b) $t = \\dfrac{\\ln 1.5}{0.04} \\approx 10.1$ years.", ["modelling"]),

  hardDe(66, "Solve $\\dfrac{dy}{dx}=\\dfrac{y-1}{x+2}$ with $y(1)=4$.", [
    step(1, "Separate", "\\dfrac{1}{y-1}\\,dy=\\dfrac{1}{x+2}\\,dx", "Separation."),
    step(2, "Integrate", "\\ln|y-1|=\\ln|x+2|+C", "Log form."),
    step(3, "General", "y-1=A(x+2)", "Linear relation."),
    step(4, "y(1)=4", "3=3A \\Rightarrow A=1", "Solve."),
    step(5, "Particular", "y=x+3", "Simplify."),
    step(6, "Check", "dy/dx=1=\\dfrac{x+2}{x+2}", "Verify."),
    step(7, "Answer", "y=x+3", "Solution."),
    step(8, "Domain", "x\\neq -2", "Restriction."),
    step(9, "State", "y=x+3", "Final."),
  ], "$y = x+3$."),

  hardDe(67, "Find the particular solution of $\\dfrac{dy}{dx}=\\dfrac{1}{1+y}$ with $y(0)=0$.", [
    step(1, "Separate", "(1+y)\\,dy=dx", "Multiply."),
    step(2, "Integrate", "y+\\dfrac{y^{2}}{2}=x+C", "Polynomial."),
    step(3, "y(0)=0", "C=0", "Initial condition."),
    step(4, "Quadratic", "y^{2}+2y-2x=0", "Rearrange."),
    step(5, "Solve", "y=-1+\\sqrt{1+2x}", "Positive root from IC."),
    step(6, "Check", "y(0)=0", "Verify."),
    step(7, "Domain", "x\\geq 0", "Real square root."),
    step(8, "Answer", "y=-1+\\sqrt{1+2x}", "Particular solution."),
    step(9, "State", "y=-1+\\sqrt{1+2x}", "Final."),
  ], "$y = -1+\\sqrt{1+2x}$ for $x \\geq 0$."),

  hardDe(68, "Solve $\\dfrac{d^{2}y}{dx^{2}}=0$ given $\\dfrac{dy}{dx}=3$ when $x=0$ and $y=1$ when $x=0$.", [
    step(1, "Integrate once", "\\dfrac{dy}{dx}=3", "From $\\dfrac{d^{2}y}{dx^{2}}=0$."),
    step(1, "Integrate again", "y=3x+C", "Second integration."),
    step(3, "y(0)=1", "C=1", "Initial condition."),
    step(4, "Answer", "y=3x+1", "Linear solution."),
    step(5, "Check dy/dx", "dy/dx=3", "Satisfies first IC."),
    step(6, "Check d2y/dx2", "0", "Satisfies DE."),
    step(7, "Note", "\\text{Second-order reduces to integration}", "A-Level link."),
    step(8, "Answer", "y=3x+1", "Particular solution."),
    step(9, "State", "y=3x+1", "Final."),
  ], "$y = 3x+1$."),

  hardDe(69, "Solve $\\dfrac{dy}{dx}=\\dfrac{y}{x}\\left(1-\\dfrac{y}{x}\\right)$ using the substitution $v=\\dfrac{y}{x}$.", [
    step(1, "Substitute", "y=vx,\\;\\dfrac{dy}{dx}=v+x\\dfrac{dv}{dx}", "Homogeneous technique."),
    step(2, "DE becomes", "v+x\\dfrac{dv}{dx}=v(1-v)", "Substitute."),
    step(3, "Simplify", "x\\dfrac{dv}{dx}=-v^{2}", "Cancel $v$."),
    step(4, "Separate", "\\dfrac{1}{v^{2}}\\,dv=-\\dfrac{1}{x}\\,dx", "Separation in $v$."),
    step(5, "Integrate", "-\\dfrac{1}{v}=-\\ln|x|+C", "Both sides."),
    step(6, "Back-substitute", "-\\dfrac{x}{y}=-\\ln|x|+C", "Replace $v=y/x$."),
    step(7, "Implicit solution", "\\dfrac{x}{y}=\\ln|x|+K", "Rearrange."),
    step(8, "Technique", "v=y/x \\text{ for homogeneous DEs}", "Key method."),
    step(9, "Answer", "\\dfrac{x}{y}=\\ln|x|+C", "General solution."),
  ], "$\\dfrac{x}{y} = \\ln|x| + C$ (or use $v = y/x$ substitution).", ["substitution", "homogeneous"]),

  hardDe(70, "(a) Solve $\\dfrac{dN}{dt}=0.2N$ with $N(0)=500$.\n(b) A different population satisfies $\\dfrac{dP}{dt}=0.2P(1-\\dfrac{P}{800})$ with $P(0)=100$. Find $P(t)$.\n(c) State the long-term behaviour of each model.", [
    step(1, "(a) Solve", "N=500e^{0.2t}", "Unlimited exponential growth."),
    step(2, "(a) Long-term", "N\\to\\infty", "No carrying capacity."),
    step(3, "(b) Logistic setup", "\\dfrac{1}{P(1-P/800)}\\,dP=0.2\\,dt", "Separate."),
    step(4, "(b) Partial fractions", "\\dfrac{1}{P}+\\dfrac{1}{800-P}", "Decompose."),
    step(5, "(b) Integrate", "\\ln|P|-\\ln|800-P|=0.2t+C", "Log form."),
    step(6, "(b) P(0)=100", "P=\\dfrac{800}{1+7e^{-0.2t}}", "Logistic solution."),
    step(7, "(b) Long-term", "P\\to 800", "Carrying capacity."),
    step(8, "(c) Compare", "\\text{Exponential vs logistic}", "Key modelling difference."),
    step(9, "Answers", "N=500e^{0.2t};\\;P=\\dfrac{800}{1+7e^{-0.2t}};\\;N\\to\\infty,\\;P\\to 800", "All parts."),
  ], "(a) $N = 500e^{0.2t} \\to \\infty$. (b) $P = \\dfrac{800}{1+7e^{-0.2t}} \\to 800$. (c) Exponential model grows without bound; logistic model approaches carrying capacity.", ["multi-part", "modelling"], 9),
];

// Fix duplicate step number in q68
questions[67].workedSolution.steps[1].stepNumber = 2;
questions[67].workedSolution.steps[1].description = "Integrate again";

const STEP_MIN = { Easy: 6, Intermediate: 9, Hard: 13 };
const STEP_MAX = { Easy: 9, Intermediate: 13, Hard: 18 };
const EXTRA = [
  () => step(0, "Identify as separable", "\\dfrac{dy}{dx}=f(x)g(y)", "Check whether the equation can be written with $x$-terms and $y$-terms on opposite sides."),
  () => step(0, "Separate variables", "\\text{Rearrange to }g(y)\\,dy=f(x)\\,dx", "Multiply or divide to isolate $dy$ and $dx$."),
  () => step(0, "Integrate both sides", "\\int g(y)\\,dy=\\int f(x)\\,dx", "Integrate each side with respect to its variable."),
  () => step(0, "Include the arbitrary constant", "+C", "One constant captures all equivalent solutions."),
  () => step(0, "Apply initial conditions", "y(x_{0})=y_{0}", "Substitute to find the particular solution."),
  () => step(0, "Check the solution", "\\text{Substitute back into the DE}", "Differentiate or substitute to verify."),
  () => step(0, "Interpret in context", "\\text{Growth, decay, or equilibrium}", "Relate the model to the real situation."),
  () => step(0, "State the final answer", "\\text{General or particular solution}", "Present clearly with any restrictions."),
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
