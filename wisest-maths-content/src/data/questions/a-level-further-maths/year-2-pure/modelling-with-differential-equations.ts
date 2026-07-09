import type { Difficulty, Question, SolutionStep } from "@/lib/types";

const LEVEL = "A-Level Further Maths";
const TOPIC = "Further Maths Year 2: Pure (Core Pure 2)";
const SUBTOPIC = "Modelling with differential equations";
const SUBTOPIC_ID = "fm.y2.pure.modelling-differential-equations";

type StepInput = Omit<SolutionStep, "stepNumber" | "diagram">;

function steps(items: StepInput[]): SolutionStep[] {
  return items.map((item, index) => ({
    stepNumber: index + 1,
    diagram: null,
    ...item,
  }));
}

function question(
  number: number,
  difficulty: Difficulty,
  marks: number,
  tags: string[],
  answerType: string,
  questionText: string,
  solutionSteps: StepInput[],
  finalAnswer: string,
): Question {
  return {
    id: `${SUBTOPIC_ID}.q${String(number).padStart(3, "0")}`,
    level: LEVEL,
    topic: TOPIC,
    subtopic: SUBTOPIC,
    subtopicId: SUBTOPIC_ID,
    difficulty,
    marks,
    answerType,
    tags,
    questionText,
    questionDiagram: null,
    workedSolution: {
      steps: steps(solutionSteps),
      finalAnswer,
    },
  };
}

type ExponentialSpec = {
  context: string;
  symbol: string;
  quantity: string;
  unit: string;
  timeUnit: string;
  initial: string;
  laterTime: string;
  laterValue: string;
  predictTime: string;
  tags: string[];
};

function exponentialQuestion(number: number, spec: ExponentialSpec): Question {
  const model = `${spec.symbol}=${spec.initial}e^{kt}`;
  const kValue = `k=\\dfrac{1}{${spec.laterTime}}\\ln\\left(\\dfrac{${spec.laterValue}}{${spec.initial}}\\right)`;
  const explicit = `${spec.symbol}=${spec.initial}e^{\\frac{t}{${spec.laterTime}}\\ln(${spec.laterValue}/${spec.initial})}`;
  const prediction = `${spec.symbol}(${spec.predictTime})=${spec.initial}e^{\\frac{${spec.predictTime}}{${spec.laterTime}}\\ln(${spec.laterValue}/${spec.initial})}`;

  return question(
    number,
    "Easy",
    5,
    ["modelling", "separable differential equations", "exponential model", ...spec.tags],
    "expression",
    `${spec.context} The rate of change of the ${spec.quantity} ${spec.symbol} is proportional to ${spec.symbol}. Initially ${spec.symbol}=${spec.initial}. After ${spec.laterTime} ${spec.timeUnit}, ${spec.symbol}=${spec.laterValue}. Find a model for ${spec.symbol} and use it to estimate ${spec.symbol} after ${spec.predictTime} ${spec.timeUnit}.`,
    [
      {
        description: "Write the modelling equation",
        workingLatex: `\\dfrac{d${spec.symbol}}{dt}=k${spec.symbol}`,
        explanation: "A rate proportional to the current amount is represented by multiplying the amount by a constant of proportionality.",
      },
      {
        description: "Separate the variables",
        workingLatex: `\\dfrac{1}{${spec.symbol}}\\,d${spec.symbol}=k\\,dt`,
        explanation: "Separation puts each variable with its own differential, which makes the equation ready to integrate.",
      },
      {
        description: "Integrate both sides",
        workingLatex: `\\ln ${spec.symbol}=kt+C`,
        explanation: "The logarithm appears because the integral of $1/${spec.symbol}$ is $\\ln ${spec.symbol}$ for a positive modelling quantity.",
      },
      {
        description: "Use the initial condition",
        workingLatex: `t=0,\\ ${spec.symbol}=${spec.initial}\\quad\\Rightarrow\\quad ${model}`,
        explanation: "The initial value turns the arbitrary constant into the starting amount in the exponential model.",
      },
      {
        description: "Use the later measurement",
        workingLatex: `${spec.laterValue}=${spec.initial}e^{${spec.laterTime}k}`,
        explanation: "The second data point fixes the growth or decay constant, so the model matches the observed situation.",
      },
      {
        description: "Find the constant",
        workingLatex: kValue,
        explanation: "Taking logarithms reverses the exponential and isolates the proportionality constant.",
      },
      {
        description: "State and use the model",
        workingLatex: `${explicit},\\quad ${prediction}`,
        explanation: "Substituting the requested time into the fitted model gives the estimate in the same units as the original data.",
      },
    ],
    `$${explicit}$, so $${prediction}\\ ${spec.unit}$.`,
  );
}

type NewtonCoolingSpec = {
  object: string;
  ambient: string;
  initialTemp: string;
  observedTime: string;
  observedTemp: string;
  targetTemp: string;
  tags: string[];
};

function newtonCoolingQuestion(number: number, spec: NewtonCoolingSpec): Question {
  const excessInitial = `(${spec.initialTemp}-${spec.ambient})`;
  const excessObserved = `(${spec.observedTemp}-${spec.ambient})`;
  const model = `T=${spec.ambient}+${excessInitial}e^{-kt}`;
  const kValue = `k=\\dfrac{1}{${spec.observedTime}}\\ln\\left(\\dfrac{${excessInitial}}{${excessObserved}}\\right)`;
  const targetTime = `t=\\dfrac{1}{k}\\ln\\left(\\dfrac{${excessInitial}}{${spec.targetTemp}-${spec.ambient}}\\right)`;

  return question(
    number,
    "Intermediate",
    7,
    ["modelling", "Newton cooling", "separable differential equations", ...spec.tags],
    "expression",
    `A ${spec.object} is placed in a room at constant temperature $${spec.ambient}^{\\circ}\\mathrm{C}$. Its temperature $T^{\\circ}\\mathrm{C}$ satisfies $\\dfrac{dT}{dt}=-k(T-${spec.ambient})$. Initially $T=${spec.initialTemp}$, and after ${spec.observedTime} minutes $T=${spec.observedTemp}$. Find the time when $T=${spec.targetTemp}$.`,
    [
      {
        description: "Identify the excess temperature",
        workingLatex: `u=T-${spec.ambient}`,
        explanation: "Newton cooling depends on how far the object is from room temperature, not on the absolute temperature alone.",
      },
      {
        description: "Rewrite the differential equation",
        workingLatex: `\\dfrac{du}{dt}=-ku`,
        explanation: "Since the ambient temperature is constant, differentiating $u=T-${spec.ambient}$ gives the same derivative as $T$.",
      },
      {
        description: "Separate the variables",
        workingLatex: `\\dfrac{1}{u}\\,du=-k\\,dt`,
        explanation: "The separated form shows that the excess temperature changes exponentially.",
      },
      {
        description: "Integrate",
        workingLatex: `\\ln u=-kt+C`,
        explanation: "Integrating converts the proportional-rate equation into a logarithmic relationship.",
      },
      {
        description: "Return to temperature",
        workingLatex: `T-${spec.ambient}=Ae^{-kt}`,
        explanation: "The constant $A$ represents the initial excess temperature above the surroundings.",
      },
      {
        description: "Use the initial temperature",
        workingLatex: model,
        explanation: "At $t=0$, the exponential factor is 1, so the coefficient is the starting excess temperature.",
      },
      {
        description: "Use the observed temperature",
        workingLatex: `${excessObserved}=${excessInitial}e^{-${spec.observedTime}k}`,
        explanation: "This measurement determines how quickly the excess temperature is being lost.",
      },
      {
        description: "Find the cooling constant",
        workingLatex: kValue,
        explanation: "Taking logarithms isolates $k$ while keeping it positive for cooling towards the room temperature.",
      },
      {
        description: "Set up the target equation",
        workingLatex: `${spec.targetTemp}-${spec.ambient}=${excessInitial}e^{-kt}`,
        explanation: "The target temperature is converted into a target excess temperature before solving for time.",
      },
      {
        description: "Solve for the time",
        workingLatex: targetTime,
        explanation: "The logarithm reverses the exponential decay and gives the time since the object was placed in the room.",
      },
    ],
    `$${targetTime}$ minutes, where $${kValue}$.`,
  );
}

type LimitedGrowthSpec = {
  population: string;
  symbol: string;
  limitingValue: string;
  initial: string;
  observedTime: string;
  observedValue: string;
  targetValue: string;
  tags: string[];
};

function limitedGrowthQuestion(number: number, spec: LimitedGrowthSpec): Question {
  const gapInitial = `(${spec.limitingValue}-${spec.initial})`;
  const gapObserved = `(${spec.limitingValue}-${spec.observedValue})`;
  const model = `${spec.symbol}=${spec.limitingValue}-${gapInitial}e^{-kt}`;
  const kValue = `k=\\dfrac{1}{${spec.observedTime}}\\ln\\left(\\dfrac{${gapInitial}}{${gapObserved}}\\right)`;
  const targetTime = `t=\\dfrac{1}{k}\\ln\\left(\\dfrac{${gapInitial}}{${spec.limitingValue}-${spec.targetValue}}\\right)`;

  return question(
    number,
    "Intermediate",
    7,
    ["modelling", "limited growth", "separable differential equations", ...spec.tags],
    "expression",
    `The size ${spec.symbol} of ${spec.population} is modelled by $\\dfrac{d${spec.symbol}}{dt}=k(${spec.limitingValue}-${spec.symbol})$. Initially ${spec.symbol}=${spec.initial}. After ${spec.observedTime} hours, ${spec.symbol}=${spec.observedValue}. Find when ${spec.symbol}=${spec.targetValue}.`,
    [
      {
        description: "Recognise the remaining gap",
        workingLatex: `u=${spec.limitingValue}-${spec.symbol}`,
        explanation: "The rate is proportional to the gap left before the limiting value is reached.",
      },
      {
        description: "Differentiate the gap",
        workingLatex: `\\dfrac{du}{dt}=-\\dfrac{d${spec.symbol}}{dt}`,
        explanation: "As the quantity increases, the remaining gap decreases, so the derivative changes sign.",
      },
      {
        description: "Rewrite the equation",
        workingLatex: `\\dfrac{du}{dt}=-ku`,
        explanation: "The gap follows exponential decay because a fixed fraction of the remaining gap closes per unit time.",
      },
      {
        description: "Solve the gap equation",
        workingLatex: `u=Ae^{-kt}`,
        explanation: "A proportional decay equation has an exponential solution.",
      },
      {
        description: "Use the initial value",
        workingLatex: `u(0)=${gapInitial}`,
        explanation: "The initial gap is the difference between the limiting value and the starting value.",
      },
      {
        description: "Write the model",
        workingLatex: model,
        explanation: "Converting back from the gap gives the model for the original quantity.",
      },
      {
        description: "Use the observation",
        workingLatex: `${gapObserved}=${gapInitial}e^{-${spec.observedTime}k}`,
        explanation: "The observed value tells us how much of the original gap remains after the given time.",
      },
      {
        description: "Find the constant",
        workingLatex: kValue,
        explanation: "Taking logarithms extracts the rate constant from the exponential factor.",
      },
      {
        description: "Set up the target gap",
        workingLatex: `${spec.limitingValue}-${spec.targetValue}=${gapInitial}e^{-kt}`,
        explanation: "Solving for a target value is easiest when it is expressed as a remaining gap.",
      },
      {
        description: "Solve for time",
        workingLatex: targetTime,
        explanation: "The time is obtained by undoing the exponential decay of the gap.",
      },
    ],
    `$${targetTime}$ hours, where $${kValue}$.`,
  );
}

type MixingSpec = {
  tank: string;
  volume: string;
  rate: string;
  concentration: string;
  initialSalt: string;
  time: string;
  tags: string[];
};

function mixingQuestion(number: number, spec: MixingSpec): Question {
  const equilibrium = `${spec.volume}\\cdot ${spec.concentration}`;
  const model = `S=${equilibrium}+(${spec.initialSalt}-${equilibrium})e^{-(${spec.rate}/${spec.volume})t}`;
  const value = `S(${spec.time})=${equilibrium}+(${spec.initialSalt}-${equilibrium})e^{-(${spec.rate}/${spec.volume})${spec.time}}`;

  return question(
    number,
    "Intermediate",
    7,
    ["modelling", "mixing problems", "linear differential equations", ...spec.tags],
    "expression",
    `${spec.tank} contains ${spec.volume} litres of liquid. Brine with salt concentration ${spec.concentration} kg/litre flows in and out at ${spec.rate} litres/minute, so the volume stays constant. If initially there are ${spec.initialSalt} kg of salt in the tank, find the amount $S$ of salt after ${spec.time} minutes.`,
    [
      {
        description: "Write the rate in",
        workingLatex: `\\text{rate in}=${spec.rate}\\cdot ${spec.concentration}`,
        explanation: "Salt enters at flow rate multiplied by concentration, giving kilograms per minute.",
      },
      {
        description: "Write the concentration in the tank",
        workingLatex: `\\text{tank concentration}=\\dfrac{S}{${spec.volume}}`,
        explanation: "The mixture is assumed well stirred, so the outgoing concentration equals the current tank concentration.",
      },
      {
        description: "Write the rate out",
        workingLatex: `\\text{rate out}=${spec.rate}\\cdot\\dfrac{S}{${spec.volume}}`,
        explanation: "Salt leaves with the outflow at the current concentration.",
      },
      {
        description: "Form the differential equation",
        workingLatex: `\\dfrac{dS}{dt}=${spec.rate}\\cdot ${spec.concentration}-\\dfrac{${spec.rate}}{${spec.volume}}S`,
        explanation: "The change in salt is the amount entering minus the amount leaving.",
      },
      {
        description: "Identify the equilibrium amount",
        workingLatex: `S_{\\infty}=${equilibrium}`,
        explanation: "At equilibrium, the tank concentration matches the incoming concentration.",
      },
      {
        description: "Use the equilibrium shift",
        workingLatex: `u=S-${equilibrium}`,
        explanation: "Shifting by the equilibrium turns the linear equation into a simple exponential decay equation.",
      },
      {
        description: "Solve for the shifted variable",
        workingLatex: `u=(${spec.initialSalt}-${equilibrium})e^{-(${spec.rate}/${spec.volume})t}`,
        explanation: "The difference from equilibrium decays because fresh mixture continually replaces old mixture.",
      },
      {
        description: "Write the salt model",
        workingLatex: model,
        explanation: "Adding the equilibrium amount back gives the amount of salt in the tank.",
      },
      {
        description: "Substitute the time",
        workingLatex: value,
        explanation: "The requested time is placed into the model without changing the units.",
      },
      {
        description: "Interpret the answer",
        workingLatex: `S(${spec.time})\\text{ kg}`,
        explanation: "The value represents the mass of salt in the tank, not the concentration.",
      },
    ],
    `$${value}\\ \\mathrm{kg}$.`,
  );
}

type ResistanceSpec = {
  object: string;
  terminalSpeed: string;
  targetSpeed: string;
  tags: string[];
};

function resistanceQuestion(number: number, spec: ResistanceSpec): Question {
  const model = `v=${spec.terminalSpeed}\\left(1-e^{-gt/${spec.terminalSpeed}}\\right)`;
  const time = `t=-\\dfrac{${spec.terminalSpeed}}{g}\\ln\\left(1-\\dfrac{${spec.targetSpeed}}{${spec.terminalSpeed}}\\right)`;

  return question(
    number,
    "Intermediate",
    7,
    ["modelling", "resisted motion", "terminal velocity", ...spec.tags],
    "expression",
    `A ${spec.object} falls from rest in a resisting medium. Its speed $v$ satisfies $\\dfrac{dv}{dt}=g-kv$, and its terminal speed is ${spec.terminalSpeed} m/s. Find a model for $v$ and the time when $v=${spec.targetSpeed}$ m/s.`,
    [
      {
        description: "Use the terminal speed",
        workingLatex: `0=g-k(${spec.terminalSpeed})`,
        explanation: "At terminal speed the acceleration is zero, so gravity and resistance balance.",
      },
      {
        description: "Find the resistance constant",
        workingLatex: `k=\\dfrac{g}{${spec.terminalSpeed}}`,
        explanation: "The terminal speed gives the constant in the differential equation without needing an extra measurement.",
      },
      {
        description: "Substitute into the equation",
        workingLatex: `\\dfrac{dv}{dt}=g-\\dfrac{g}{${spec.terminalSpeed}}v`,
        explanation: "This form shows the speed increasing towards the terminal value.",
      },
      {
        description: "Separate the variables",
        workingLatex: `\\dfrac{dv}{g-(g/${spec.terminalSpeed})v}=dt`,
        explanation: "Separation lets us integrate the speed equation directly.",
      },
      {
        description: "Integrate",
        workingLatex: `-\\dfrac{${spec.terminalSpeed}}{g}\\ln\\left(g-\\dfrac{g}{${spec.terminalSpeed}}v\\right)=t+C`,
        explanation: "The logarithm appears because the denominator is a linear function of $v$.",
      },
      {
        description: "Use the initial condition",
        workingLatex: `v(0)=0`,
        explanation: "Starting from rest fixes the constant of integration.",
      },
      {
        description: "Write the velocity model",
        workingLatex: model,
        explanation: "The model starts at zero and approaches the terminal speed as time increases.",
      },
      {
        description: "Set the target speed",
        workingLatex: `${spec.targetSpeed}=${spec.terminalSpeed}\\left(1-e^{-gt/${spec.terminalSpeed}}\\right)`,
        explanation: "Substituting the target speed turns the model into an equation for time.",
      },
      {
        description: "Solve for the exponential",
        workingLatex: `e^{-gt/${spec.terminalSpeed}}=1-\\dfrac{${spec.targetSpeed}}{${spec.terminalSpeed}}`,
        explanation: "Isolating the exponential prepares the equation for logarithms.",
      },
      {
        description: "Solve for time",
        workingLatex: time,
        explanation: "The logarithm gives the time required to reach the chosen fraction of terminal speed.",
      },
    ],
    `$${model}$ and $${time}$ seconds.`,
  );
}

type LogisticKnownSpec = {
  context: string;
  symbol: string;
  carryingCapacity: string;
  initial: string;
  rate: string;
  target: string;
  tags: string[];
};

function logisticKnownQuestion(number: number, spec: LogisticKnownSpec): Question {
  const a = `\\dfrac{${spec.carryingCapacity}-${spec.initial}}{${spec.initial}}`;
  const model = `${spec.symbol}=\\dfrac{${spec.carryingCapacity}}{1+(${a})e^{-${spec.rate}t}}`;
  const time = `t=\\dfrac{1}{${spec.rate}}\\ln\\left(\\dfrac{${a}}{${spec.carryingCapacity}/${spec.target}-1}\\right)`;

  return question(
    number,
    "Hard",
    9,
    ["modelling", "logistic differential equations", "separable differential equations", ...spec.tags],
    "expression",
    `${spec.context} is modelled by the logistic equation $\\dfrac{d${spec.symbol}}{dt}=${spec.rate}${spec.symbol}\\left(1-\\dfrac{${spec.symbol}}{${spec.carryingCapacity}}\\right)$. Initially ${spec.symbol}=${spec.initial}. Find the model and the time when ${spec.symbol}=${spec.target}.`,
    [
      {
        description: "Write the equation in separated form",
        workingLatex: `\\dfrac{d${spec.symbol}}{{${spec.symbol}(1-${spec.symbol}/${spec.carryingCapacity})}}=${spec.rate}\\,dt`,
        explanation: "Separating the variables puts all population terms on one side and time on the other.",
      },
      {
        description: "Rewrite the fraction",
        workingLatex: `\\dfrac{1}{${spec.symbol}(1-${spec.symbol}/${spec.carryingCapacity})}=\\dfrac{${spec.carryingCapacity}}{${spec.symbol}(${spec.carryingCapacity}-${spec.symbol})}`,
        explanation: "This form is suitable for partial fractions.",
      },
      {
        description: "Use partial fractions",
        workingLatex: `\\dfrac{${spec.carryingCapacity}}{${spec.symbol}(${spec.carryingCapacity}-${spec.symbol})}=\\dfrac{1}{${spec.symbol}}+\\dfrac{1}{${spec.carryingCapacity}-${spec.symbol}}`,
        explanation: "Partial fractions split the expression into two standard logarithmic integrals.",
      },
      {
        description: "Integrate both sides",
        workingLatex: `\\ln ${spec.symbol}-\\ln(${spec.carryingCapacity}-${spec.symbol})=${spec.rate}t+C`,
        explanation: "The second logarithm is negative because the derivative of the denominator is $-1$.",
      },
      {
        description: "Combine the logarithms",
        workingLatex: `\\ln\\left(\\dfrac{${spec.symbol}}{${spec.carryingCapacity}-${spec.symbol}}\\right)=${spec.rate}t+C`,
        explanation: "A single logarithm makes it easier to exponentiate and solve for the variable.",
      },
      {
        description: "Exponentiate",
        workingLatex: `\\dfrac{${spec.symbol}}{${spec.carryingCapacity}-${spec.symbol}}=Be^{${spec.rate}t}`,
        explanation: "Exponentiating reverses the logarithm and absorbs $e^C$ into a positive constant.",
      },
      {
        description: "Use the initial condition",
        workingLatex: `B=\\dfrac{${spec.initial}}{${spec.carryingCapacity}-${spec.initial}}`,
        explanation: "The initial value fixes the ratio of actual amount to remaining capacity at the start.",
      },
      {
        description: "Rearrange into logistic form",
        workingLatex: model,
        explanation: "Solving for the variable gives the standard logistic curve with a horizontal carrying capacity.",
      },
      {
        description: "Set the target value",
        workingLatex: `${spec.target}=\\dfrac{${spec.carryingCapacity}}{1+(${a})e^{-${spec.rate}t}}`,
        explanation: "The target value is substituted into the model so that only time is unknown.",
      },
      {
        description: "Invert the fraction",
        workingLatex: `1+(${a})e^{-${spec.rate}t}=\\dfrac{${spec.carryingCapacity}}{${spec.target}}`,
        explanation: "Inverting clears the main fraction and isolates the exponential term.",
      },
      {
        description: "Isolate the exponential",
        workingLatex: `e^{-${spec.rate}t}=\\dfrac{${spec.carryingCapacity}/${spec.target}-1}{${a}}`,
        explanation: "This step separates the time-dependent part from the constants.",
      },
      {
        description: "Take logarithms",
        workingLatex: `-${spec.rate}t=\\ln\\left(\\dfrac{${spec.carryingCapacity}/${spec.target}-1}{${a}}\\right)`,
        explanation: "The logarithm reverses the exponential so the time can be isolated.",
      },
      {
        description: "Solve for time",
        workingLatex: time,
        explanation: "Changing the sign places the larger starting ratio in the numerator.",
      },
      {
        description: "State the modelling conclusion",
        workingLatex: `${spec.symbol}\\to ${spec.carryingCapacity}\\text{ as }t\\to\\infty`,
        explanation: "The model approaches the carrying capacity, which matches the interpretation of limited resources.",
      },
    ],
    `$${model}$ and $${time}$.`,
  );
}

type LogisticDataSpec = {
  context: string;
  symbol: string;
  carryingCapacity: string;
  initial: string;
  observedTime: string;
  observedValue: string;
  predictTime: string;
  tags: string[];
};

function logisticDataQuestion(number: number, spec: LogisticDataSpec): Question {
  const a = `\\dfrac{${spec.carryingCapacity}-${spec.initial}}{${spec.initial}}`;
  const b = `${spec.carryingCapacity}/${spec.observedValue}-1`;
  const r = `r=\\dfrac{1}{${spec.observedTime}}\\ln\\left(\\dfrac{${a}}{${b}}\\right)`;
  const model = `${spec.symbol}=\\dfrac{${spec.carryingCapacity}}{1+(${a})e^{-rt}}`;
  const prediction = `${spec.symbol}(${spec.predictTime})=\\dfrac{${spec.carryingCapacity}}{1+(${a})e^{-r${spec.predictTime}}}`;

  return question(
    number,
    "Hard",
    9,
    ["modelling", "logistic model fitting", "differential equations", ...spec.tags],
    "expression",
    `${spec.context} has carrying capacity ${spec.carryingCapacity}. It is modelled by $${spec.symbol}=\\dfrac{${spec.carryingCapacity}}{1+Ae^{-rt}}$. Initially ${spec.symbol}=${spec.initial}, and after ${spec.observedTime} days ${spec.symbol}=${spec.observedValue}. Find $A$ and $r$, then estimate ${spec.symbol} after ${spec.predictTime} days.`,
    [
      {
        description: "Start from the logistic model",
        workingLatex: `${spec.symbol}=\\dfrac{${spec.carryingCapacity}}{1+Ae^{-rt}}`,
        explanation: "The carrying capacity is built into the numerator, so the model tends towards that value.",
      },
      {
        description: "Use the initial value",
        workingLatex: `${spec.initial}=\\dfrac{${spec.carryingCapacity}}{1+A}`,
        explanation: "At $t=0$, the exponential is 1, leaving a simple equation for $A$.",
      },
      {
        description: "Find the initial constant",
        workingLatex: `A=${a}`,
        explanation: "The constant measures the initial remaining capacity relative to the initial amount.",
      },
      {
        description: "Substitute the observed value",
        workingLatex: `${spec.observedValue}=\\dfrac{${spec.carryingCapacity}}{1+(${a})e^{-r${spec.observedTime}}}`,
        explanation: "The second data point is used to determine the growth-rate parameter.",
      },
      {
        description: "Invert the equation",
        workingLatex: `1+(${a})e^{-r${spec.observedTime}}=\\dfrac{${spec.carryingCapacity}}{${spec.observedValue}}`,
        explanation: "Inverting clears the main fraction and moves the exponential into an accessible position.",
      },
      {
        description: "Isolate the exponential",
        workingLatex: `(${a})e^{-r${spec.observedTime}}=${b}`,
        explanation: "The right-hand side is the observed remaining-capacity ratio.",
      },
      {
        description: "Divide by the initial ratio",
        workingLatex: `e^{-r${spec.observedTime}}=\\dfrac{${b}}{${a}}`,
        explanation: "This leaves only the exponential term containing $r$.",
      },
      {
        description: "Take logarithms",
        workingLatex: `-r${spec.observedTime}=\\ln\\left(\\dfrac{${b}}{${a}}\\right)`,
        explanation: "The logarithm reverses the exponential and allows the rate to be isolated.",
      },
      {
        description: "Solve for the rate",
        workingLatex: r,
        explanation: "Writing the reciprocal ratio keeps the rate positive when the population is increasing.",
      },
      {
        description: "Write the fitted model",
        workingLatex: model,
        explanation: "Both constants are now determined by the initial and observed data.",
      },
      {
        description: "Substitute the prediction time",
        workingLatex: prediction,
        explanation: "The fitted model can now be used for interpolation or cautious extrapolation.",
      },
      {
        description: "Keep the modelling units",
        workingLatex: `t\\text{ is measured in days}`,
        explanation: "The rate parameter depends on the time unit used in the data.",
      },
      {
        description: "Check the limiting behaviour",
        workingLatex: `${spec.symbol}\\to ${spec.carryingCapacity}`,
        explanation: "The prediction should remain below the carrying capacity for positive initial data.",
      },
      {
        description: "State the estimate",
        workingLatex: prediction,
        explanation: "The final expression gives the requested estimate using the calibrated logistic model.",
      },
    ],
    `$A=${a}$, $${r}$, and $${prediction}$.`,
  );
}

const exponentialSpecs: ExponentialSpec[] = [
  { context: "A bacterial culture is growing in a nutrient solution.", symbol: "N", quantity: "number of bacteria", unit: "bacteria", timeUnit: "hours", initial: "1200", laterTime: "3", laterValue: "2100", predictTime: "8", tags: ["growth"] },
  { context: "A radioactive tracer is decaying in a laboratory sample.", symbol: "A", quantity: "activity", unit: "counts per minute", timeUnit: "hours", initial: "500", laterTime: "4", laterValue: "320", predictTime: "10", tags: ["decay"] },
  { context: "A rumour spreads through a small online group during its early stage.", symbol: "R", quantity: "number of people aware of it", unit: "people", timeUnit: "days", initial: "40", laterTime: "2", laterValue: "90", predictTime: "5", tags: ["growth"] },
  { context: "The mass of a medicine in the bloodstream is decreasing.", symbol: "M", quantity: "mass of medicine", unit: "mg", timeUnit: "hours", initial: "80", laterTime: "6", laterValue: "35", predictTime: "12", tags: ["decay"] },
  { context: "A colony of yeast is growing under controlled conditions.", symbol: "Y", quantity: "mass of yeast", unit: "g", timeUnit: "hours", initial: "2.5", laterTime: "5", laterValue: "4.1", predictTime: "9", tags: ["growth"] },
  { context: "The brightness of a glow-in-the-dark material is fading.", symbol: "B", quantity: "brightness", unit: "lux", timeUnit: "minutes", initial: "60", laterTime: "15", laterValue: "22", predictTime: "30", tags: ["decay"] },
  { context: "A population of cells grows exponentially while space is plentiful.", symbol: "P", quantity: "population", unit: "cells", timeUnit: "hours", initial: "300", laterTime: "4", laterValue: "540", predictTime: "11", tags: ["growth"] },
  { context: "A cooling chemical signal loses intensity over time.", symbol: "I", quantity: "intensity", unit: "units", timeUnit: "seconds", initial: "100", laterTime: "20", laterValue: "73", predictTime: "55", tags: ["decay"] },
  { context: "An investment fund is modelled continuously over a short period.", symbol: "V", quantity: "value", unit: "pounds", timeUnit: "years", initial: "15000", laterTime: "2", laterValue: "16800", predictTime: "7", tags: ["growth"] },
  { context: "A pollutant in a lake is removed at a rate proportional to the amount present.", symbol: "Q", quantity: "mass of pollutant", unit: "kg", timeUnit: "weeks", initial: "240", laterTime: "3", laterValue: "180", predictTime: "9", tags: ["decay"] },
  { context: "A viral video gains views during an early exponential phase.", symbol: "V", quantity: "view count", unit: "views", timeUnit: "hours", initial: "800", laterTime: "6", laterValue: "2500", predictTime: "18", tags: ["growth"] },
  { context: "A capacitor discharges through a resistor.", symbol: "C", quantity: "charge", unit: "coulombs", timeUnit: "seconds", initial: "12", laterTime: "5", laterValue: "7", predictTime: "16", tags: ["decay"] },
  { context: "A population of insects grows in the first days after hatching.", symbol: "P", quantity: "population", unit: "insects", timeUnit: "days", initial: "150", laterTime: "4", laterValue: "390", predictTime: "10", tags: ["growth"] },
  { context: "A disinfectant breaks down in water.", symbol: "D", quantity: "amount of disinfectant", unit: "ml", timeUnit: "hours", initial: "45", laterTime: "8", laterValue: "28", predictTime: "24", tags: ["decay"] },
];

const newtonCoolingSpecs: NewtonCoolingSpec[] = [
  { object: "cup of coffee", ambient: "20", initialTemp: "88", observedTime: "6", observedTemp: "70", targetTemp: "45", tags: ["temperature"] },
  { object: "metal sphere", ambient: "18", initialTemp: "100", observedTime: "5", observedTemp: "76", targetTemp: "40", tags: ["temperature"] },
  { object: "bowl of soup", ambient: "21", initialTemp: "92", observedTime: "8", observedTemp: "65", targetTemp: "50", tags: ["temperature"] },
  { object: "heated tile", ambient: "16", initialTemp: "74", observedTime: "4", observedTemp: "59", targetTemp: "30", tags: ["temperature"] },
  { object: "test tube", ambient: "19", initialTemp: "85", observedTime: "7", observedTemp: "62", targetTemp: "38", tags: ["temperature"] },
  { object: "hot drink", ambient: "22", initialTemp: "94", observedTime: "10", observedTemp: "68", targetTemp: "55", tags: ["temperature"] },
  { object: "ceramic plate", ambient: "17", initialTemp: "80", observedTime: "6", observedTemp: "61", targetTemp: "35", tags: ["temperature"] },
  { object: "sample of wax", ambient: "24", initialTemp: "70", observedTime: "9", observedTemp: "55", targetTemp: "42", tags: ["temperature"] },
  { object: "glass rod", ambient: "15", initialTemp: "95", observedTime: "8", observedTemp: "66", targetTemp: "37", tags: ["temperature"] },
  { object: "pan of water", ambient: "20", initialTemp: "96", observedTime: "12", observedTemp: "72", targetTemp: "50", tags: ["temperature"] },
];

const limitedGrowthSpecs: LimitedGrowthSpec[] = [
  { population: "a population in a bounded habitat", symbol: "P", limitingValue: "5000", initial: "800", observedTime: "4", observedValue: "2100", targetValue: "4000", tags: ["population"] },
  { population: "a charging battery percentage", symbol: "B", limitingValue: "100", initial: "18", observedTime: "1.5", observedValue: "46", targetValue: "85", tags: ["charging"] },
  { population: "the mass of crystals formed in a solution", symbol: "M", limitingValue: "60", initial: "5", observedTime: "2", observedValue: "24", targetValue: "50", tags: ["chemistry"] },
  { population: "the number of students adopting a revision app", symbol: "S", limitingValue: "1200", initial: "90", observedTime: "3", observedValue: "420", targetValue: "900", tags: ["adoption"] },
  { population: "the water level in a filling tank", symbol: "H", limitingValue: "2.4", initial: "0.3", observedTime: "5", observedValue: "1.2", targetValue: "2.0", tags: ["filling"] },
  { population: "the length of a drying front in a material", symbol: "L", limitingValue: "40", initial: "6", observedTime: "2", observedValue: "17", targetValue: "32", tags: ["limited growth"] },
  { population: "the concentration approaching saturation", symbol: "C", limitingValue: "80", initial: "10", observedTime: "4", observedValue: "35", targetValue: "70", tags: ["saturation"] },
  { population: "the height of seedlings under a simple growth model", symbol: "H", limitingValue: "75", initial: "12", observedTime: "6", observedValue: "31", targetValue: "60", tags: ["growth"] },
  { population: "the number of households reached by a local campaign", symbol: "R", limitingValue: "3000", initial: "250", observedTime: "5", observedValue: "1000", targetValue: "2400", tags: ["adoption"] },
  { population: "the amount of dye absorbed by a fabric", symbol: "D", limitingValue: "25", initial: "2", observedTime: "3", observedValue: "11", targetValue: "20", tags: ["absorption"] },
];

const mixingSpecs: MixingSpec[] = [
  { tank: "A mixing tank", volume: "100", rate: "5", concentration: "0.4", initialSalt: "10", time: "30", tags: ["brine"] },
  { tank: "A laboratory vessel", volume: "80", rate: "4", concentration: "0.25", initialSalt: "5", time: "20", tags: ["brine"] },
  { tank: "A reservoir model", volume: "500", rate: "25", concentration: "0.08", initialSalt: "60", time: "40", tags: ["pollution"] },
  { tank: "A dye vat", volume: "120", rate: "6", concentration: "0.15", initialSalt: "4", time: "35", tags: ["dye"] },
  { tank: "A process tank", volume: "200", rate: "10", concentration: "0.3", initialSalt: "80", time: "25", tags: ["mixing"] },
  { tank: "A chemical bath", volume: "60", rate: "3", concentration: "0.5", initialSalt: "12", time: "18", tags: ["mixing"] },
  { tank: "A water treatment tank", volume: "1000", rate: "50", concentration: "0.02", initialSalt: "90", time: "60", tags: ["pollution"] },
  { tank: "A small brine tank", volume: "40", rate: "2", concentration: "0.6", initialSalt: "30", time: "16", tags: ["brine"] },
  { tank: "A dye-mixing container", volume: "150", rate: "5", concentration: "0.12", initialSalt: "6", time: "45", tags: ["dye"] },
  { tank: "A stirred reactor", volume: "300", rate: "15", concentration: "0.18", initialSalt: "20", time: "28", tags: ["mixing"] },
];

const resistanceSpecs: ResistanceSpec[] = [
  { object: "raindrop", terminalSpeed: "9", targetSpeed: "6", tags: ["falling body"] },
  { object: "small bead", terminalSpeed: "12", targetSpeed: "8", tags: ["falling body"] },
  { object: "parachutist before opening the parachute", terminalSpeed: "55", targetSpeed: "40", tags: ["falling body"] },
  { object: "steel ball in oil", terminalSpeed: "4", targetSpeed: "3", tags: ["viscous resistance"] },
  { object: "seed falling through still air", terminalSpeed: "3", targetSpeed: "2", tags: ["falling body"] },
  { object: "model rocket descending after engine cut-off", terminalSpeed: "30", targetSpeed: "20", tags: ["resisted motion"] },
  { object: "hailstone", terminalSpeed: "18", targetSpeed: "12", tags: ["falling body"] },
  { object: "particle moving through a fluid", terminalSpeed: "7", targetSpeed: "5", tags: ["viscous resistance"] },
];

const logisticKnownSpecs: LogisticKnownSpec[] = [
  { context: "The number $P$ of organisms in a culture", symbol: "P", carryingCapacity: "10000", initial: "500", rate: "0.32", target: "6000", tags: ["population"] },
  { context: "The spread $S$ of an innovation in a town", symbol: "S", carryingCapacity: "5000", initial: "200", rate: "0.45", target: "3500", tags: ["adoption"] },
  { context: "The biomass $B$ in a controlled habitat", symbol: "B", carryingCapacity: "800", initial: "60", rate: "0.28", target: "500", tags: ["population"] },
  { context: "The number $N$ of users on a new platform", symbol: "N", carryingCapacity: "200000", initial: "8000", rate: "0.18", target: "120000", tags: ["adoption"] },
  { context: "The area $A$ covered by algae in a pond", symbol: "A", carryingCapacity: "240", initial: "15", rate: "0.22", target: "160", tags: ["population"] },
  { context: "The percentage $P$ of a market using a product", symbol: "P", carryingCapacity: "100", initial: "8", rate: "0.35", target: "70", tags: ["adoption"] },
  { context: "The mass $M$ of bacteria in grams", symbol: "M", carryingCapacity: "50", initial: "2", rate: "0.40", target: "30", tags: ["population"] },
  { context: "The number $C$ of infected cells in a bounded sample", symbol: "C", carryingCapacity: "1000000", initial: "10000", rate: "0.12", target: "400000", tags: ["biology"] },
  { context: "The cumulative number $R$ of people reached by a campaign", symbol: "R", carryingCapacity: "75000", initial: "1500", rate: "0.25", target: "50000", tags: ["adoption"] },
  { context: "The number $F$ of fish in a managed lake", symbol: "F", carryingCapacity: "12000", initial: "900", rate: "0.16", target: "8000", tags: ["population"] },
];

const logisticDataSpecs: LogisticDataSpec[] = [
  { context: "A yeast culture", symbol: "Y", carryingCapacity: "100", initial: "5", observedTime: "4", observedValue: "18", predictTime: "10", tags: ["population"] },
  { context: "A social media trend", symbol: "S", carryingCapacity: "100000", initial: "2000", observedTime: "3", observedValue: "9000", predictTime: "8", tags: ["adoption"] },
  { context: "A pondweed sample", symbol: "P", carryingCapacity: "600", initial: "40", observedTime: "5", observedValue: "150", predictTime: "12", tags: ["biology"] },
  { context: "A disease model in a closed group", symbol: "I", carryingCapacity: "3000", initial: "30", observedTime: "7", observedValue: "210", predictTime: "16", tags: ["epidemic"] },
  { context: "A new app rollout", symbol: "U", carryingCapacity: "50000", initial: "1200", observedTime: "6", observedValue: "8000", predictTime: "15", tags: ["adoption"] },
  { context: "A bacterial population", symbol: "B", carryingCapacity: "2000", initial: "80", observedTime: "3", observedValue: "240", predictTime: "9", tags: ["population"] },
  { context: "A local campaign", symbol: "R", carryingCapacity: "10000", initial: "500", observedTime: "4", observedValue: "1600", predictTime: "11", tags: ["adoption"] },
  { context: "A fish population after restocking", symbol: "F", carryingCapacity: "8000", initial: "600", observedTime: "10", observedValue: "1800", predictTime: "25", tags: ["population"] },
];

export const questions: Question[] = [
  ...exponentialSpecs.map((spec, index) => exponentialQuestion(index + 1, spec)),
  ...newtonCoolingSpecs.map((spec, index) => newtonCoolingQuestion(index + 15, spec)),
  ...limitedGrowthSpecs.map((spec, index) => limitedGrowthQuestion(index + 25, spec)),
  ...mixingSpecs.map((spec, index) => mixingQuestion(index + 35, spec)),
  ...resistanceSpecs.map((spec, index) => resistanceQuestion(index + 45, spec)),
  ...logisticKnownSpecs.map((spec, index) => logisticKnownQuestion(index + 53, spec)),
  ...logisticDataSpecs.map((spec, index) => logisticDataQuestion(index + 63, spec)),
];
