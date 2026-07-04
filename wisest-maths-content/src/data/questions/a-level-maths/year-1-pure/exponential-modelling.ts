import { Question } from "@/lib/types";

export const questions: Question[] = [
  {
    "id": "al.y1.pure.exp-modelling.q001",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Exponential modelling",
    "subtopicId": "al.y1.pure.exp-modelling",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "value",
    "tags": [
      "exponential-model",
      "growth",
      "substitution"
    ],
    "questionText": "The population of a rare bird is modelled by $P = 500e^{0.08t}$, where $t$ is the time in years. Find the population when $t = 10$, giving your answer to the nearest whole number.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write down the model and the value to substitute",
          "workingLatex": "P=500e^{0.08t},\\quad t=10",
          "explanation": "Noting the model and the value of $t$ before calculating keeps the goal clear and avoids slips.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute $t = 10$ into the model",
          "workingLatex": "P=500e^{0.08\\times 10}",
          "explanation": "The value at a particular time is found simply by putting that time into the formula.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Simplify the power",
          "workingLatex": "P=500e^{0.8}",
          "explanation": "Working out the exponent first, $0.08\\times 10 = 0.8$, tidies the expression before using the exponential.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate the exponential",
          "workingLatex": "e^{0.8}\\approx 2.22554",
          "explanation": "$e^{0.8}$ is just over $2$, which tells us the population has more than doubled its starting size.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Multiply by the initial value",
          "workingLatex": "P\\approx 500\\times 2.22554=1112.77",
          "explanation": "Multiplying the growth factor by the starting population of $500$ gives the actual head count.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Round to the nearest whole number and interpret",
          "workingLatex": "P\\approx 1113",
          "explanation": "A population must be a whole number, so we round to about $1113$ birds after $10$ years.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P \\approx 1113$"
    }
  },
  {
    "id": "al.y1.pure.exp-modelling.q002",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Exponential modelling",
    "subtopicId": "al.y1.pure.exp-modelling",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "value",
    "tags": [
      "exponential-model",
      "growth",
      "substitution"
    ],
    "questionText": "A colony of bacteria is modelled by $N = 150e^{0.4t}$, where $t$ is the time in hours. (a) State the initial number of bacteria. (b) Find the number of bacteria after $5$ hours, to the nearest whole number.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write down the model",
          "workingLatex": "N=150e^{0.4t}",
          "explanation": "Having the model written out makes it easy to read off the starting value and to substitute later.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Part (a): substitute $t = 0$",
          "workingLatex": "N=150e^{0.4\\times 0}=150e^{0}",
          "explanation": "The initial amount is always the value at $t=0$, the moment the count begins.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Use $e^{0} = 1$",
          "workingLatex": "N=150\\times 1=150",
          "explanation": "Any number to the power zero is $1$, so the constant in front, $150$, is exactly the starting number.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Part (b): substitute $t = 5$",
          "workingLatex": "N=150e^{0.4\\times 5}=150e^{2}",
          "explanation": "For the later count we replace $t$ with $5$ and simplify the power, $0.4\\times 5 = 2$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate the exponential",
          "workingLatex": "e^{2}\\approx 7.38906",
          "explanation": "$e^{2}$ is about $7.39$, showing the colony grows to over seven times its size in five hours.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Multiply by the initial value",
          "workingLatex": "N\\approx 150\\times 7.38906=1108.36",
          "explanation": "Scaling the starting number by the growth factor gives the population after five hours.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Round and interpret",
          "workingLatex": "N\\approx 1108",
          "explanation": "Bacteria are counted in whole numbers, so there are about $1108$ after $5$ hours.",
          "diagram": null
        }
      ],
      "finalAnswer": "$N = 150$ initially; $N \\approx 1108$ after $5$ hours"
    }
  },
  {
    "id": "al.y1.pure.exp-modelling.q003",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Exponential modelling",
    "subtopicId": "al.y1.pure.exp-modelling",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "value",
    "tags": [
      "exponential-model",
      "growth",
      "percentage-rate"
    ],
    "questionText": "A savings account starts with $£2000$ and grows by $4\\%$ each year. (a) Write down a model for the balance $£A$ after $t$ years. (b) Find the balance after $3$ years, to the nearest penny.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Turn the percentage into a multiplier",
          "workingLatex": "1+\\frac{4}{100}=1.04",
          "explanation": "A $4\\%$ increase means each year the balance becomes $104\\%$ of the year before, i.e. multiply by $1.04$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Part (a): write the model",
          "workingLatex": "A=2000(1.04)^{t}",
          "explanation": "Repeatedly multiplying by $1.04$ over $t$ years is captured by raising $1.04$ to the power $t$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Part (b): substitute $t = 3$",
          "workingLatex": "A=2000(1.04)^{3}",
          "explanation": "Putting $t=3$ into the model gives the balance after three years of interest.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate the power",
          "workingLatex": "1.04^{3}=1.124864",
          "explanation": "This factor, about $1.1249$, is the total growth after three years of compounding.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Multiply by the starting amount",
          "workingLatex": "A=2000\\times 1.124864=2249.728",
          "explanation": "Scaling the initial $£2000$ by the growth factor gives the money in the account.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Round to the nearest penny and interpret",
          "workingLatex": "A\\approx 2249.73",
          "explanation": "Money is given to the nearest penny, so the balance is about $£2249.73$ after three years.",
          "diagram": null
        }
      ],
      "finalAnswer": "$A = 2000(1.04)^{t}$; balance $\\approx £2249.73$"
    }
  },
  {
    "id": "al.y1.pure.exp-modelling.q004",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Exponential modelling",
    "subtopicId": "al.y1.pure.exp-modelling",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "value",
    "tags": [
      "exponential-model",
      "decay",
      "percentage-rate"
    ],
    "questionText": "A new car is worth $£18000$ and loses $15\\%$ of its value each year. (a) Write down a model for its value $£V$ after $t$ years. (b) Find its value after $4$ years, to the nearest penny.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Turn the percentage loss into a multiplier",
          "workingLatex": "1-\\frac{15}{100}=0.85",
          "explanation": "Losing $15\\%$ leaves $85\\%$ behind, so each year the value is multiplied by $0.85$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Part (a): write the model",
          "workingLatex": "V=18000(0.85)^{t}",
          "explanation": "Multiplying by $0.85$ once per year for $t$ years means raising $0.85$ to the power $t$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Part (b): substitute $t = 4$",
          "workingLatex": "V=18000(0.85)^{4}",
          "explanation": "Setting $t=4$ gives the value after four years of depreciation.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate the power",
          "workingLatex": "0.85^{4}=0.52200625",
          "explanation": "After four years the car keeps about $52\\%$ of its original value.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Multiply by the starting value",
          "workingLatex": "V=18000\\times 0.52200625=9396.1125",
          "explanation": "Scaling the original $£18000$ by this factor gives the current worth.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Round and interpret",
          "workingLatex": "V\\approx 9396.11",
          "explanation": "To the nearest penny the car is worth about $£9396.11$ after four years.",
          "diagram": null
        }
      ],
      "finalAnswer": "$V = 18000(0.85)^{t}$; value $\\approx £9396.11$"
    }
  },
  {
    "id": "al.y1.pure.exp-modelling.q005",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Exponential modelling",
    "subtopicId": "al.y1.pure.exp-modelling",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "value",
    "tags": [
      "exponential-model",
      "decay",
      "substitution"
    ],
    "questionText": "The mass of a radioactive sample is modelled by $m = 40e^{-0.03t}$, where $m$ is in grams and $t$ is in days. (a) State the initial mass. (b) Find the mass after $20$ days, to $2$ decimal places.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write down the model",
          "workingLatex": "m=40e^{-0.03t}",
          "explanation": "The negative power tells us this is decay: the mass falls as time goes on.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Part (a): substitute $t = 0$",
          "workingLatex": "m=40e^{0}=40\\times 1=40",
          "explanation": "At $t=0$ the exponential equals $1$, so the initial mass is just the constant $40$ grams.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Part (b): substitute $t = 20$",
          "workingLatex": "m=40e^{-0.03\\times 20}",
          "explanation": "For the later mass we replace $t$ with $20$ days.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Simplify the power",
          "workingLatex": "m=40e^{-0.6}",
          "explanation": "Working out $-0.03\\times 20 = -0.6$ prepares the expression for the exponential.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate the exponential",
          "workingLatex": "e^{-0.6}\\approx 0.548812",
          "explanation": "$e^{-0.6}$ is about $0.55$, so a little over half the sample remains after $20$ days.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Multiply by the initial mass",
          "workingLatex": "m\\approx 40\\times 0.548812=21.9525",
          "explanation": "Scaling the starting $40$ g by the decay factor gives the mass that is left.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Round and interpret",
          "workingLatex": "m\\approx 21.95",
          "explanation": "To $2$ decimal places about $21.95$ g remains after $20$ days.",
          "diagram": null
        }
      ],
      "finalAnswer": "$m = 40$ g initially; $m \\approx 21.95$ g after $20$ days"
    }
  },
  {
    "id": "al.y1.pure.exp-modelling.q006",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Exponential modelling",
    "subtopicId": "al.y1.pure.exp-modelling",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "value",
    "tags": [
      "exponential-model",
      "decay",
      "substitution"
    ],
    "questionText": "The amount of a drug in a patient's bloodstream is modelled by $D = 50e^{-0.2t}$, where $D$ is in mg and $t$ is in hours. Find the amount remaining after $6$ hours, to $2$ decimal places.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write down the model and the time",
          "workingLatex": "D=50e^{-0.2t},\\quad t=6",
          "explanation": "The negative exponent shows the drug is clearing from the body over time.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute $t = 6$",
          "workingLatex": "D=50e^{-0.2\\times 6}",
          "explanation": "The amount left is found by putting the elapsed time into the model.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Simplify the power",
          "workingLatex": "D=50e^{-1.2}",
          "explanation": "Computing $-0.2\\times 6 = -1.2$ tidies the expression before evaluating.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate the exponential",
          "workingLatex": "e^{-1.2}\\approx 0.301194",
          "explanation": "$e^{-1.2}\\approx 0.30$, so roughly $30\\%$ of the dose is still present after six hours.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Multiply by the initial dose",
          "workingLatex": "D\\approx 50\\times 0.301194=15.0597",
          "explanation": "Scaling the starting $50$ mg by the decay factor gives the remaining amount.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Round and interpret",
          "workingLatex": "D\\approx 15.06",
          "explanation": "To $2$ decimal places about $15.06$ mg of the drug remains.",
          "diagram": null
        }
      ],
      "finalAnswer": "$D \\approx 15.06$ mg"
    }
  },
  {
    "id": "al.y1.pure.exp-modelling.q007",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Exponential modelling",
    "subtopicId": "al.y1.pure.exp-modelling",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "value",
    "tags": [
      "exponential-model",
      "decay",
      "substitution"
    ],
    "questionText": "A cup of coffee cools according to $T = 20 + 60e^{-0.1t}$, where $T$ is the temperature in $^{\\circ}\\mathrm{C}$ and $t$ is the time in minutes. Find the temperature after $5$ minutes, to $2$ decimal places.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write down the model and the time",
          "workingLatex": "T=20+60e^{-0.1t},\\quad t=5",
          "explanation": "The constant $20$ is the room temperature the coffee cools towards; the exponential term is the extra heat that fades away.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute $t = 5$",
          "workingLatex": "T=20+60e^{-0.1\\times 5}",
          "explanation": "The temperature after five minutes comes from putting $t=5$ into the model.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Simplify the power",
          "workingLatex": "T=20+60e^{-0.5}",
          "explanation": "Working out $-0.1\\times 5 = -0.5$ prepares the exponential term.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate the exponential",
          "workingLatex": "e^{-0.5}\\approx 0.606531",
          "explanation": "$e^{-0.5}\\approx 0.61$, so about $61\\%$ of the original excess heat is still there after five minutes.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Work out the exponential term",
          "workingLatex": "60e^{-0.5}\\approx 60\\times 0.606531=36.3918",
          "explanation": "This is how many degrees above room temperature the coffee still is.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Add the room temperature",
          "workingLatex": "T\\approx 20+36.3918=56.3918",
          "explanation": "Adding the $20\\,^{\\circ}\\mathrm{C}$ baseline gives the actual temperature of the coffee.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Round and interpret",
          "workingLatex": "T\\approx 56.39",
          "explanation": "To $2$ decimal places the coffee is about $56.39\\,^{\\circ}\\mathrm{C}$ after five minutes, still cooling toward $20\\,^{\\circ}\\mathrm{C}$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$T \\approx 56.39\\,^{\\circ}\\mathrm{C}$"
    }
  },
  {
    "id": "al.y1.pure.exp-modelling.q008",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Exponential modelling",
    "subtopicId": "al.y1.pure.exp-modelling",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "value",
    "tags": [
      "exponential-model",
      "growth",
      "percentage-rate"
    ],
    "questionText": "A town's population grows by $2.5\\%$ each year and is currently $40000$. (a) Write down a model for the population $P$ after $t$ years. (b) Find the population after $6$ years, to the nearest whole number.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Turn the percentage into a multiplier",
          "workingLatex": "1+\\frac{2.5}{100}=1.025",
          "explanation": "A $2.5\\%$ rise means each year's population is $102.5\\%$ of the last, i.e. multiply by $1.025$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Part (a): write the model",
          "workingLatex": "P=40000(1.025)^{t}",
          "explanation": "Applying the multiplier once per year for $t$ years gives the power $1.025^{t}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Part (b): substitute $t = 6$",
          "workingLatex": "P=40000(1.025)^{6}",
          "explanation": "Setting $t=6$ gives the population six years from now.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate the power",
          "workingLatex": "1.025^{6}\\approx 1.159693",
          "explanation": "Over six years the population grows by a factor of about $1.16$, roughly a $16\\%$ rise.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Multiply by the current population",
          "workingLatex": "P\\approx 40000\\times 1.159693=46387.7",
          "explanation": "Scaling the present $40000$ by the growth factor gives the future head count.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Round and interpret",
          "workingLatex": "P\\approx 46388",
          "explanation": "People are whole, so the population is about $46388$ after six years.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P = 40000(1.025)^{t}$; population $\\approx 46388$"
    }
  },
  {
    "id": "al.y1.pure.exp-modelling.q009",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Exponential modelling",
    "subtopicId": "al.y1.pure.exp-modelling",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "value",
    "tags": [
      "exponential-model",
      "growth",
      "substitution"
    ],
    "questionText": "The number of shares of a social media post doubles every hour and is modelled by $S = 500\\times 2^{t}$, where $t$ is the time in hours. (a) State the number of shares at $t = 0$. (b) Find the number of shares after $5$ hours.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write down the model",
          "workingLatex": "S=500\\times 2^{t}",
          "explanation": "The base $2$ means the count doubles for every extra hour that passes.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Part (a): substitute $t = 0$",
          "workingLatex": "S=500\\times 2^{0}=500\\times 1=500",
          "explanation": "At $t=0$ the power $2^{0}=1$, so the starting number of shares is $500$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Part (b): substitute $t = 5$",
          "workingLatex": "S=500\\times 2^{5}",
          "explanation": "For five hours later we replace $t$ with $5$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate the power",
          "workingLatex": "2^{5}=32",
          "explanation": "Doubling five times multiplies the count by $2^{5}=32$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Multiply by the initial value",
          "workingLatex": "S=500\\times 32=16000",
          "explanation": "Scaling the original $500$ shares by $32$ gives the total after five hours.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Interpret the result",
          "workingLatex": "S=16000",
          "explanation": "The post has $16000$ shares after five hours, having doubled five times over.",
          "diagram": null
        }
      ],
      "finalAnswer": "$S = 500$ at $t = 0$; $S = 16000$ after $5$ hours"
    }
  },
  {
    "id": "al.y1.pure.exp-modelling.q010",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Exponential modelling",
    "subtopicId": "al.y1.pure.exp-modelling",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "time",
    "tags": [
      "exponential-model",
      "growth",
      "logarithms"
    ],
    "questionText": "An investment is modelled by $A = 5000e^{0.04t}$, where $£A$ is its value after $t$ years. Find the time for the investment to double to $£10000$, to $2$ decimal places.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up the equation to solve",
          "workingLatex": "10000=5000e^{0.04t}",
          "explanation": "Doubling means the value reaches $£10000$, so we set the model equal to this target.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Divide both sides by $5000$",
          "workingLatex": "2=e^{0.04t}",
          "explanation": "Isolating the exponential first makes the equation ready for logarithms.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Take natural logarithms of both sides",
          "workingLatex": "\\ln 2=0.04t",
          "explanation": "Since $\\ln$ and $e$ are inverse operations, $\\ln(e^{0.04t})=0.04t$, freeing the exponent.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Make $t$ the subject",
          "workingLatex": "t=\\frac{\\ln 2}{0.04}",
          "explanation": "Dividing by $0.04$ leaves the time on its own.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate",
          "workingLatex": "t=\\frac{0.693147}{0.04}=17.3287",
          "explanation": "Using $\\ln 2\\approx 0.6931$ gives the doubling time in years.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Round and interpret",
          "workingLatex": "t\\approx 17.33",
          "explanation": "It takes about $17.33$ years for the investment to double at this rate.",
          "diagram": null
        }
      ],
      "finalAnswer": "$t \\approx 17.33$ years"
    }
  },
  {
    "id": "al.y1.pure.exp-modelling.q011",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Exponential modelling",
    "subtopicId": "al.y1.pure.exp-modelling",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "value",
    "tags": [
      "exponential-model",
      "decay",
      "percentage-rate"
    ],
    "questionText": "A radioactive material has mass $500$ g and loses $10\\%$ of its mass each year. (a) Write down a model for the mass $m$ grams after $t$ years. (b) Find the mass after $5$ years, to the nearest gram.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Turn the percentage loss into a multiplier",
          "workingLatex": "1-\\frac{10}{100}=0.9",
          "explanation": "Losing $10\\%$ leaves $90\\%$, so each year the mass is multiplied by $0.9$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Part (a): write the model",
          "workingLatex": "m=500(0.9)^{t}",
          "explanation": "Multiplying by $0.9$ once per year for $t$ years gives the power $0.9^{t}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Part (b): substitute $t = 5$",
          "workingLatex": "m=500(0.9)^{5}",
          "explanation": "Setting $t=5$ gives the mass after five years of decay.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate the power",
          "workingLatex": "0.9^{5}=0.59049",
          "explanation": "After five years about $59\\%$ of the material is left.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Multiply by the initial mass",
          "workingLatex": "m=500\\times 0.59049=295.245",
          "explanation": "Scaling the starting $500$ g by the decay factor gives the remaining mass.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Round and interpret",
          "workingLatex": "m\\approx 295",
          "explanation": "To the nearest gram about $295$ g of the material remains after five years.",
          "diagram": null
        }
      ],
      "finalAnswer": "$m = 500(0.9)^{t}$; mass $\\approx 295$ g"
    }
  },
  {
    "id": "al.y1.pure.exp-modelling.q012",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Exponential modelling",
    "subtopicId": "al.y1.pure.exp-modelling",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "time",
    "tags": [
      "exponential-model",
      "solve-for-time",
      "natural-log"
    ],
    "questionText": "The value of an investment is $V = 2000e^{0.05t}$ pounds after $t$ years. Find, to the nearest year, when the investment is worth $\\pounds 3000$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set the model equal to the target value",
          "workingLatex": "2000e^{0.05t} = 3000",
          "explanation": "We want the time when the value reaches $3000$, so we set the model equal to that amount and solve for $t$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Divide by the initial amount",
          "workingLatex": "e^{0.05t} = 1.5",
          "explanation": "Dividing both sides by $2000$ isolates the exponential term, since $3000 \\div 2000 = 1.5$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Take the natural logarithm of both sides",
          "workingLatex": "\\ln\\left(e^{0.05t}\\right) = \\ln 1.5",
          "explanation": "The unknown is stuck in the exponent, so we apply $\\ln$, the inverse of $e^x$, to bring it down.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Use $\\ln(e^x)=x$ to simplify",
          "workingLatex": "0.05t = \\ln 1.5",
          "explanation": "Because $\\ln$ and $e$ undo each other, the left-hand side collapses to just the exponent.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate the logarithm",
          "workingLatex": "0.05t = 0.4055",
          "explanation": "Using a calculator, $\\ln 1.5 = 0.4055$ to four decimal places.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Solve for $t$",
          "workingLatex": "t = \\frac{0.4055}{0.05} = 8.11",
          "explanation": "Dividing by $0.05$ isolates $t$ and gives the time in years.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Round and interpret",
          "workingLatex": "t \\approx 8",
          "explanation": "To the nearest year, the investment is worth $3000$ after about $8$ years.",
          "diagram": null
        }
      ],
      "finalAnswer": "$t \\approx 8$ years"
    }
  },
  {
    "id": "al.y1.pure.exp-modelling.q013",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Exponential modelling",
    "subtopicId": "al.y1.pure.exp-modelling",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "time",
    "tags": [
      "exponential-model",
      "solve-for-time",
      "logarithms"
    ],
    "questionText": "A colony of bacteria is modelled by $N = 500(1.05)^t$, where $N$ is the number of bacteria after $t$ hours. Find, to the nearest hour, when the colony reaches $1000$ bacteria.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set the model equal to the target",
          "workingLatex": "500(1.05)^t = 1000",
          "explanation": "We want the time when the count reaches $1000$, so we set the model equal to $1000$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Divide by the initial amount",
          "workingLatex": "(1.05)^t = 2",
          "explanation": "Dividing by $500$ leaves the growth factor raised to the power $t$; reaching $1000$ from $500$ simply means doubling.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Take logarithms of both sides",
          "workingLatex": "\\ln\\left((1.05)^t\\right) = \\ln 2",
          "explanation": "The unknown $t$ is an exponent, so taking $\\ln$ lets us bring it down using the power rule.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply the power rule of logs",
          "workingLatex": "t\\ln 1.05 = \\ln 2",
          "explanation": "The rule $\\ln(a^t)=t\\ln a$ moves the exponent to the front as an ordinary multiplier.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate the logarithms",
          "workingLatex": "0.04879t = 0.6931",
          "explanation": "Using a calculator, $\\ln 1.05 = 0.04879$ and $\\ln 2 = 0.6931$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Solve for $t$",
          "workingLatex": "t = \\frac{0.6931}{0.04879} = 14.21",
          "explanation": "Dividing isolates $t$ and gives the time in hours.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Round and interpret",
          "workingLatex": "t \\approx 14",
          "explanation": "To the nearest hour, the colony reaches $1000$ bacteria after about $14$ hours.",
          "diagram": null
        }
      ],
      "finalAnswer": "$t \\approx 14$ hours"
    }
  },
  {
    "id": "al.y1.pure.exp-modelling.q014",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Exponential modelling",
    "subtopicId": "al.y1.pure.exp-modelling",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "time",
    "tags": [
      "exponential-model",
      "cooling",
      "solve-for-time"
    ],
    "questionText": "The temperature of a cooling drink is $T = 80e^{-0.03t}$, measured in °C, after $t$ minutes. Find, to the nearest minute, when the temperature falls to $50$ °C.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set the model equal to the target temperature",
          "workingLatex": "80e^{-0.03t} = 50",
          "explanation": "We want the time when the temperature reaches $50$, so we set the model equal to $50$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Divide by the starting temperature",
          "workingLatex": "e^{-0.03t} = 0.625",
          "explanation": "Dividing by $80$ isolates the exponential, since $50 \\div 80 = 0.625$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Take natural logs of both sides",
          "workingLatex": "-0.03t = \\ln 0.625",
          "explanation": "The unknown is in the exponent, so we apply $\\ln$, the inverse of $e^x$, to bring it down.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate the logarithm",
          "workingLatex": "-0.03t = -0.4700",
          "explanation": "A value below $1$ has a negative log: $\\ln 0.625 = -0.4700$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve for $t$",
          "workingLatex": "t = \\frac{-0.4700}{-0.03} = 15.67",
          "explanation": "The two negatives cancel, leaving a positive time in minutes.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Round and interpret",
          "workingLatex": "t \\approx 16",
          "explanation": "To the nearest minute, the drink cools to $50$ °C after about $16$ minutes.",
          "diagram": null
        }
      ],
      "finalAnswer": "$t \\approx 16$ minutes"
    }
  },
  {
    "id": "al.y1.pure.exp-modelling.q015",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Exponential modelling",
    "subtopicId": "al.y1.pure.exp-modelling",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "time",
    "tags": [
      "exponential-model",
      "radioactive-decay",
      "half-life"
    ],
    "questionText": "A radioactive substance decays so that its mass is $m = 50e^{-0.002t}$ grams after $t$ years. Find, to the nearest year, the time for the mass to halve to $25$ grams.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set the model equal to half the mass",
          "workingLatex": "50e^{-0.002t} = 25",
          "explanation": "Halving the $50$ g sample means we want the time when the mass is $25$ g.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Divide by the initial mass",
          "workingLatex": "e^{-0.002t} = 0.5",
          "explanation": "Dividing by $50$ leaves the exponential equal to $0.5$, reflecting the half we are looking for.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Take natural logs of both sides",
          "workingLatex": "-0.002t = \\ln 0.5",
          "explanation": "Taking $\\ln$ undoes the exponential and brings the unknown out of the power.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate the logarithm",
          "workingLatex": "-0.002t = -0.6931",
          "explanation": "Since $0.5<1$, its log is negative: $\\ln 0.5 = -0.6931$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve for $t$",
          "workingLatex": "t = \\frac{-0.6931}{-0.002} = 346.6",
          "explanation": "Dividing the two negatives gives a positive time in years.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Round and interpret",
          "workingLatex": "t \\approx 347",
          "explanation": "The mass halves after about $347$ years, which is the half-life of the substance.",
          "diagram": null
        }
      ],
      "finalAnswer": "$t \\approx 347$ years"
    }
  },
  {
    "id": "al.y1.pure.exp-modelling.q016",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Exponential modelling",
    "subtopicId": "al.y1.pure.exp-modelling",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "time",
    "tags": [
      "exponential-model",
      "depreciation",
      "solve-for-time"
    ],
    "questionText": "A car bought for $\\pounds 15000$ is modelled to be worth $V = 15000(0.85)^t$ pounds after $t$ years. Find, to the nearest year, when the car is worth $\\pounds 8000$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set the model equal to the target value",
          "workingLatex": "15000(0.85)^t = 8000",
          "explanation": "We want the time when the car's value reaches $8000$, so we set the model equal to $8000$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Divide by the initial value",
          "workingLatex": "(0.85)^t = 0.5333",
          "explanation": "Dividing by $15000$ isolates the decay factor, since $8000 \\div 15000 = 0.5333$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Take logarithms of both sides",
          "workingLatex": "\\ln\\left((0.85)^t\\right) = \\ln 0.5333",
          "explanation": "The unknown $t$ is an exponent, so taking $\\ln$ lets us bring it down.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply the power rule of logs",
          "workingLatex": "t\\ln 0.85 = \\ln 0.5333",
          "explanation": "The rule $\\ln(a^t)=t\\ln a$ moves the exponent to the front.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate the logarithms",
          "workingLatex": "-0.1625t = -0.6286",
          "explanation": "Both values are less than $1$, so both logs are negative: $\\ln 0.85 = -0.1625$ and $\\ln 0.5333 = -0.6286$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Solve for $t$",
          "workingLatex": "t = \\frac{-0.6286}{-0.1625} = 3.87",
          "explanation": "Dividing the two negatives gives a positive time in years.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Round and interpret",
          "workingLatex": "t \\approx 4",
          "explanation": "To the nearest year, the car is worth about $8000$ after $4$ years.",
          "diagram": null
        }
      ],
      "finalAnswer": "$t \\approx 4$ years"
    }
  },
  {
    "id": "al.y1.pure.exp-modelling.q017",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Exponential modelling",
    "subtopicId": "al.y1.pure.exp-modelling",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "time",
    "tags": [
      "exponential-model",
      "drug-concentration",
      "solve-for-time"
    ],
    "questionText": "The concentration of a drug in the blood is $C = 10e^{-0.2t}$ mg/l after $t$ hours. Find, to the nearest hour, when the concentration falls to $4$ mg/l.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set the model equal to the target concentration",
          "workingLatex": "10e^{-0.2t} = 4",
          "explanation": "We want the time when the concentration reaches $4$, so we set the model equal to $4$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Divide by the initial concentration",
          "workingLatex": "e^{-0.2t} = 0.4",
          "explanation": "Dividing by $10$ isolates the exponential term, since $4 \\div 10 = 0.4$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Take natural logs of both sides",
          "workingLatex": "-0.2t = \\ln 0.4",
          "explanation": "Applying $\\ln$ brings the unknown down from the exponent.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate the logarithm",
          "workingLatex": "-0.2t = -0.9163",
          "explanation": "As $0.4<1$, the log is negative: $\\ln 0.4 = -0.9163$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve for $t$",
          "workingLatex": "t = \\frac{-0.9163}{-0.2} = 4.58",
          "explanation": "The negatives cancel to give a positive time in hours.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Round and interpret",
          "workingLatex": "t \\approx 5",
          "explanation": "To the nearest hour, the concentration falls to $4$ mg/l after about $5$ hours.",
          "diagram": null
        }
      ],
      "finalAnswer": "$t \\approx 5$ hours"
    }
  },
  {
    "id": "al.y1.pure.exp-modelling.q018",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Exponential modelling",
    "subtopicId": "al.y1.pure.exp-modelling",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": [
      "exponential-model",
      "form-model",
      "continuous-growth"
    ],
    "questionText": "An investment of $\\pounds 4000$ grows continuously at a rate of $3\\%$ per year. (a) Write down a model for the value $V$ after $t$ years. (b) Use it to find the value after $10$ years, to the nearest penny.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the initial value",
          "workingLatex": "N_0 = 4000",
          "explanation": "At $t=0$ the investment is worth $\\pounds 4000$, so this is the starting amount $N_0$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify the continuous growth rate",
          "workingLatex": "k = 0.03",
          "explanation": "A continuous rate of $3\\%$ becomes the decimal $0.03$ in the exponent.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write the continuous growth model",
          "workingLatex": "V = N_0 e^{kt}",
          "explanation": "Continuous growth always has the form $N_0 e^{kt}$, where $N_0$ is the start and $k$ the rate.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute the values",
          "workingLatex": "V = 4000e^{0.03t}",
          "explanation": "Putting $N_0 = 4000$ and $k = 0.03$ into the standard form gives the model.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute $t=10$ to check",
          "workingLatex": "V = 4000e^{0.3}",
          "explanation": "To test the model, find the value after $10$ years by putting $t=10$, so the exponent is $0.03 \\times 10 = 0.3$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Evaluate the exponential",
          "workingLatex": "V = 4000 \\times 1.3499",
          "explanation": "Using a calculator, $e^{0.3} = 1.3499$ to four decimal places.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Compute and interpret",
          "workingLatex": "V = 5399.44",
          "explanation": "After $10$ years the investment is worth about $\\pounds 5399.44$, confirming steady growth from $\\pounds 4000$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$V = 4000e^{0.03t}$; after $10$ years $V \\approx \\pounds 5399.44$"
    }
  },
  {
    "id": "al.y1.pure.exp-modelling.q019",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Exponential modelling",
    "subtopicId": "al.y1.pure.exp-modelling",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "value",
    "tags": [
      "exponential-model",
      "form-model",
      "depreciation"
    ],
    "questionText": "A machine bought for $\\pounds 18000$ loses $12\\%$ of its value each year. (a) Write down a model for its value $V$ after $t$ years. (b) Find its value after $5$ years, to the nearest pound.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the initial value",
          "workingLatex": "N_0 = 18000",
          "explanation": "The machine is worth $\\pounds 18000$ when new, at $t=0$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find the yearly multiplier",
          "workingLatex": "1 - 0.12 = 0.88",
          "explanation": "Losing $12\\%$ each year means keeping $88\\%$, so the value is multiplied by $0.88$ every year.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write the decay model",
          "workingLatex": "V = 18000(0.88)^t",
          "explanation": "Repeated multiplication by $0.88$ gives a power model with base $0.88$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute $t=5$",
          "workingLatex": "V = 18000(0.88)^5",
          "explanation": "To find the value after $5$ years, put $t=5$ into the model.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate the power",
          "workingLatex": "(0.88)^5 = 0.5277",
          "explanation": "Raising $0.88$ to the fifth power gives $0.5277$ to four decimal places.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Compute the value",
          "workingLatex": "V = 18000 \\times 0.5277 = 9499",
          "explanation": "Multiplying by the starting value gives the worth after $5$ years.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Round and interpret",
          "workingLatex": "V \\approx 9499",
          "explanation": "After $5$ years the machine is worth about $\\pounds 9499$, roughly half its original value.",
          "diagram": null
        }
      ],
      "finalAnswer": "$V = 18000(0.88)^t$; after $5$ years $V \\approx \\pounds 9499$"
    }
  },
  {
    "id": "al.y1.pure.exp-modelling.q020",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Exponential modelling",
    "subtopicId": "al.y1.pure.exp-modelling",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "value",
    "tags": [
      "exponential-model",
      "interpret-parameter",
      "continuous-growth"
    ],
    "questionText": "The number of bacteria in a culture is modelled by $N = 200e^{0.4t}$, where $t$ is measured in hours. (a) State the initial number of bacteria. (b) Explain what the $0.4$ represents. (c) Find the number after $3$ hours.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Find the value at $t=0$",
          "workingLatex": "N = 200e^{0} = 200",
          "explanation": "At the start $t=0$, and since $e^0 = 1$, the model gives the initial number directly.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "State the initial amount",
          "workingLatex": "N_0 = 200",
          "explanation": "So the culture begins with $200$ bacteria.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Identify the rate constant",
          "workingLatex": "k = 0.4",
          "explanation": "The number multiplying $t$ in the exponent is the continuous growth rate.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Interpret the rate",
          "workingLatex": "0.4 = 40\\%",
          "explanation": "A value of $k = 0.4$ means the culture grows continuously at $40\\%$ per hour.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute $t=3$",
          "workingLatex": "N = 200e^{1.2}",
          "explanation": "To find the count after $3$ hours, put $t=3$, giving exponent $0.4 \\times 3 = 1.2$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Evaluate the exponential",
          "workingLatex": "N = 200 \\times 3.3201",
          "explanation": "Using a calculator, $e^{1.2} = 3.3201$ to four decimal places.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Compute and interpret",
          "workingLatex": "N \\approx 664",
          "explanation": "After $3$ hours there are about $664$ bacteria — the population has more than tripled.",
          "diagram": null
        }
      ],
      "finalAnswer": "Initial number $200$; the $0.4$ is the continuous growth rate of $40\\%$ per hour; after $3$ hours $N \\approx 664$"
    }
  },
  {
    "id": "al.y1.pure.exp-modelling.q021",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Exponential modelling",
    "subtopicId": "al.y1.pure.exp-modelling",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "time",
    "tags": [
      "exponential-model",
      "radioactive-decay",
      "solve-for-time"
    ],
    "questionText": "A radioactive sample has mass $m = 12e^{-0.05t}$ grams after $t$ days. Find, to the nearest day, when the mass has fallen to $9$ grams.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set the model equal to the target mass",
          "workingLatex": "12e^{-0.05t} = 9",
          "explanation": "We want the time when the mass reaches $9$ g, so we set the model equal to $9$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Divide by the initial mass",
          "workingLatex": "e^{-0.05t} = 0.75",
          "explanation": "Dividing by $12$ isolates the exponential, since $9 \\div 12 = 0.75$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Take natural logs of both sides",
          "workingLatex": "-0.05t = \\ln 0.75",
          "explanation": "Applying $\\ln$ undoes the exponential and frees the unknown from the power.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate the logarithm",
          "workingLatex": "-0.05t = -0.2877",
          "explanation": "Since $0.75<1$, the log is negative: $\\ln 0.75 = -0.2877$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve for $t$",
          "workingLatex": "t = \\frac{-0.2877}{-0.05} = 5.75",
          "explanation": "The negatives cancel, leaving a positive time in days.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Round and interpret",
          "workingLatex": "t \\approx 6",
          "explanation": "To the nearest day, the sample falls to $9$ g after about $6$ days.",
          "diagram": null
        }
      ],
      "finalAnswer": "$t \\approx 6$ days"
    }
  },
  {
    "id": "al.y1.pure.exp-modelling.q022",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Exponential modelling",
    "subtopicId": "al.y1.pure.exp-modelling",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "time",
    "tags": [
      "exponential-model",
      "compound-interest",
      "solve-for-time"
    ],
    "questionText": "A sum of $\\pounds 2500$ is invested at $4\\%$ compound interest per year, giving a value $V = 2500(1.04)^t$ pounds after $t$ years. Find, to the nearest year, when the investment reaches $\\pounds 4000$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set the model equal to the target value",
          "workingLatex": "2500(1.04)^t = 4000",
          "explanation": "We want the time when the value reaches $4000$, so we set the model equal to $4000$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Divide by the initial amount",
          "workingLatex": "(1.04)^t = 1.6",
          "explanation": "Dividing by $2500$ isolates the growth factor, since $4000 \\div 2500 = 1.6$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Take logarithms of both sides",
          "workingLatex": "\\ln\\left((1.04)^t\\right) = \\ln 1.6",
          "explanation": "The unknown $t$ is an exponent, so taking $\\ln$ lets us bring it down.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply the power rule of logs",
          "workingLatex": "t\\ln 1.04 = \\ln 1.6",
          "explanation": "The rule $\\ln(a^t)=t\\ln a$ moves the exponent to the front as a multiplier.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate the logarithms",
          "workingLatex": "0.03922t = 0.4700",
          "explanation": "Using a calculator, $\\ln 1.04 = 0.03922$ and $\\ln 1.6 = 0.4700$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Solve for $t$",
          "workingLatex": "t = \\frac{0.4700}{0.03922} = 11.98",
          "explanation": "Dividing isolates $t$ and gives the time in years.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Round and interpret",
          "workingLatex": "t \\approx 12",
          "explanation": "To the nearest year, the investment reaches $4000$ after about $12$ years.",
          "diagram": null
        }
      ],
      "finalAnswer": "$t \\approx 12$ years"
    }
  },
  {
    "id": "al.y1.pure.exp-modelling.q023",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Exponential modelling",
    "subtopicId": "al.y1.pure.exp-modelling",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "time",
    "tags": [
      "exponential-decay",
      "half-life",
      "natural-log"
    ],
    "questionText": "The mass of a radioactive isotope is modelled by $m = 120e^{-0.025t}$, where $m$ is the mass in grams and $t$ is the time in years. Find the half-life of the isotope, giving your answer to 3 significant figures.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State what the half-life means for this model",
          "workingLatex": "m = \\tfrac{1}{2} \\times 120 = 60",
          "explanation": "The half-life is the time taken for the mass to fall to half of its starting value. The initial mass is $120$ g, so we want the time when $m = 60$ g.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute this value into the model",
          "workingLatex": "60 = 120e^{-0.025t}",
          "explanation": "Replacing $m$ with $60$ turns the model into an equation whose only unknown is the time $t$ we are looking for.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Divide both sides by 120 to isolate the exponential",
          "workingLatex": "0.5 = e^{-0.025t}",
          "explanation": "Getting $e^{-0.025t}$ on its own is the key move, because we can only undo the exponential once nothing else is multiplying it.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Take natural logarithms of both sides",
          "workingLatex": "\\ln(0.5) = -0.025t",
          "explanation": "The natural log is the inverse of $e$, so $\\ln\\!\\left(e^{-0.025t}\\right)$ simplifies to just the exponent $-0.025t$, freeing $t$ from the exponential.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate the logarithm",
          "workingLatex": "\\ln(0.5) = -0.69315",
          "explanation": "Working out $\\ln(0.5)$ gives a concrete number so the equation becomes a simple linear one in $t$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Write the linear equation",
          "workingLatex": "-0.69315 = -0.025t",
          "explanation": "With the logarithm evaluated, the relationship between the two sides is now just a straightforward multiple of $t$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Solve for t",
          "workingLatex": "t = \\dfrac{-0.69315}{-0.025} = 27.726",
          "explanation": "Dividing both sides by $-0.025$ isolates $t$. The two negatives cancel, giving a sensible positive time.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Round to 3 significant figures",
          "workingLatex": "t \\approx 27.7 \\text{ years}",
          "explanation": "Rounding the exact value to the required accuracy gives the half-life.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Interpret the result in context",
          "workingLatex": "120 \\to 60 \\to 30 \\to \\ldots \\text{ every } 27.7 \\text{ years}",
          "explanation": "The half-life of $27.7$ years does not depend on the starting mass: the sample loses half of whatever remains every $27.7$ years, so $120$ g becomes $60$ g, then $30$ g, and so on.",
          "diagram": null
        }
      ],
      "finalAnswer": "Half-life $\\approx 27.7$ years"
    }
  },
  {
    "id": "al.y1.pure.exp-modelling.q024",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Exponential modelling",
    "subtopicId": "al.y1.pure.exp-modelling",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "time",
    "tags": [
      "exponential-growth",
      "doubling-time",
      "population"
    ],
    "questionText": "A population of fish in a lake is modelled by $P = 5000e^{0.018t}$, where $P$ is the number of fish and $t$ is the time in years. Find the time taken for the population to double, giving your answer to 3 significant figures.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State what the doubling time means for this model",
          "workingLatex": "P = 2 \\times 5000 = 10000",
          "explanation": "The doubling time is how long it takes the population to reach twice its starting size. The initial population is $5000$, so we want the time when $P = 10000$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute this value into the model",
          "workingLatex": "10000 = 5000e^{0.018t}",
          "explanation": "Setting $P = 10000$ produces an equation whose only unknown is the time $t$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Divide both sides by 5000",
          "workingLatex": "2 = e^{0.018t}",
          "explanation": "Isolating the exponential term leaves it ready to be undone with a logarithm. Notice the starting number $5000$ has vanished, which hints the answer will not depend on it.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Take natural logarithms of both sides",
          "workingLatex": "\\ln(2) = 0.018t",
          "explanation": "Applying $\\ln$ cancels the exponential, since $\\ln\\!\\left(e^{0.018t}\\right) = 0.018t$, bringing $t$ down to ground level.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate the logarithm",
          "workingLatex": "\\ln(2) = 0.69315",
          "explanation": "Replacing $\\ln(2)$ with its numerical value turns the equation into a simple linear one.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Write the linear equation",
          "workingLatex": "0.69315 = 0.018t",
          "explanation": "Both sides are now ordinary numbers apart from the single factor of $t$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Solve for t",
          "workingLatex": "t = \\dfrac{0.69315}{0.018} = 38.508",
          "explanation": "Dividing by $0.018$ isolates $t$ and gives the doubling time in years.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Round to 3 significant figures",
          "workingLatex": "t \\approx 38.5 \\text{ years}",
          "explanation": "Rounding to the required accuracy gives the final doubling time.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Interpret the result in context",
          "workingLatex": "5000 \\to 10000 \\to 20000 \\text{ every } 38.5 \\text{ years}",
          "explanation": "Because the $5000$ cancelled out, the doubling time is a fixed $38.5$ years regardless of the current size, so the population keeps doubling every $38.5$ years.",
          "diagram": null
        }
      ],
      "finalAnswer": "Doubling time $\\approx 38.5$ years"
    }
  },
  {
    "id": "al.y1.pure.exp-modelling.q025",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Exponential modelling",
    "subtopicId": "al.y1.pure.exp-modelling",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "time",
    "tags": [
      "exponential-growth",
      "bacteria",
      "natural-log"
    ],
    "questionText": "A colony of bacteria is modelled by $N = 400e^{0.25t}$, where $N$ is the number of bacteria and $t$ is the time in hours. Find the time taken for the colony to reach $5000$ bacteria, giving your answer to 3 significant figures.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the target and form the equation",
          "workingLatex": "5000 = 400e^{0.25t}",
          "explanation": "We want the number of bacteria to reach $5000$, so we set $N = 5000$ in the model and solve for the time $t$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Divide both sides by 400",
          "workingLatex": "12.5 = e^{0.25t}",
          "explanation": "Dividing by the starting amount leaves the exponential on its own, which is the only form we can undo directly with a logarithm.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Take natural logarithms of both sides",
          "workingLatex": "\\ln(12.5) = \\ln\\!\\left(e^{0.25t}\\right) = 0.25t",
          "explanation": "The natural log undoes the exponential, so the right-hand side collapses to the exponent $0.25t$ and $t$ is no longer trapped.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate the logarithm",
          "workingLatex": "\\ln(12.5) = 2.52573",
          "explanation": "Computing $\\ln(12.5)$ gives a numerical value, making the equation linear in $t$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Write the linear equation",
          "workingLatex": "2.52573 = 0.25t",
          "explanation": "The equation now relates a known number to a simple multiple of $t$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Solve for t",
          "workingLatex": "t = \\dfrac{2.52573}{0.25} = 10.103",
          "explanation": "Dividing by $0.25$ isolates $t$ and gives the time in hours.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Round to 3 significant figures",
          "workingLatex": "t \\approx 10.1 \\text{ hours}",
          "explanation": "Rounding to the required precision gives the final time.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Prepare to check the answer",
          "workingLatex": "N = 400e^{0.25 \\times 10.103}",
          "explanation": "A quick way to confirm the answer is to substitute it back into the original model and see whether the population really is $5000$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Verify the check",
          "workingLatex": "400e^{2.52573} = 400 \\times 12.5 = 5000 \\; \\checkmark",
          "explanation": "The substitution reproduces the target of $5000$ bacteria, confirming that $10.1$ hours is correct.",
          "diagram": null
        }
      ],
      "finalAnswer": "$t \\approx 10.1$ hours"
    }
  },
  {
    "id": "al.y1.pure.exp-modelling.q026",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Exponential modelling",
    "subtopicId": "al.y1.pure.exp-modelling",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "value",
    "tags": [
      "exponential-decay",
      "rate-constant",
      "cooling"
    ],
    "questionText": "The temperature of a cooling liquid above room temperature is modelled by $\\theta = Ae^{-kt}$, where $\\theta$ is in degrees Celsius and $t$ is in minutes. When $t = 2$, $\\theta = 50$, and when $t = 6$, $\\theta = 30$. Find the value of the constant $k$, giving your answer to 3 significant figures.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write the equation for the first data point",
          "workingLatex": "50 = Ae^{-2k}",
          "explanation": "Substituting $t = 2$ and $\\theta = 50$ into the model gives one equation linking the two unknowns $A$ and $k$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the equation for the second data point",
          "workingLatex": "30 = Ae^{-6k}",
          "explanation": "Substituting $t = 6$ and $\\theta = 30$ gives a second equation, so we now have two equations for the two unknowns.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Divide the first equation by the second",
          "workingLatex": "\\dfrac{50}{30} = \\dfrac{Ae^{-2k}}{Ae^{-6k}}",
          "explanation": "Dividing the equations makes the unknown constant $A$ cancel, because it appears in both. This leaves a single equation in $k$ only.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Simplify both sides",
          "workingLatex": "\\tfrac{5}{3} = e^{-2k - (-6k)} = e^{4k}",
          "explanation": "The $A$ terms cancel and the exponents subtract, so $e^{-2k}/e^{-6k} = e^{4k}$, leaving a clean exponential equation.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Take natural logarithms of both sides",
          "workingLatex": "\\ln\\!\\left(\\tfrac{5}{3}\\right) = 4k",
          "explanation": "The natural log undoes the exponential, bringing the exponent $4k$ down so $k$ can be found.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Evaluate the logarithm",
          "workingLatex": "\\ln\\!\\left(\\tfrac{5}{3}\\right) = 0.51083",
          "explanation": "Computing $\\ln(5/3)$ turns the equation into a simple linear one in $k$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Write the linear equation",
          "workingLatex": "0.51083 = 4k",
          "explanation": "The equation now expresses a known number as four times $k$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Solve for k",
          "workingLatex": "k = \\dfrac{0.51083}{4} = 0.127706",
          "explanation": "Dividing by $4$ isolates the rate constant $k$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Round to 3 significant figures",
          "workingLatex": "k \\approx 0.128",
          "explanation": "Rounding gives the required value of the rate constant.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Interpret the result in context",
          "workingLatex": "e^{-0.128} \\approx 0.880",
          "explanation": "A rate constant of $0.128$ per minute means the temperature difference above room temperature is multiplied by about $0.880$ each minute, so the liquid loses roughly $12\\%$ of its remaining excess heat every minute.",
          "diagram": null
        }
      ],
      "finalAnswer": "$k \\approx 0.128$"
    }
  },
  {
    "id": "al.y1.pure.exp-modelling.q027",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Exponential modelling",
    "subtopicId": "al.y1.pure.exp-modelling",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "time",
    "tags": [
      "exponential-growth",
      "doubling-time",
      "compound-interest"
    ],
    "questionText": "An investment grows according to $V = 2500 \\times 1.045^{t}$, where $V$ is the value in pounds and $t$ is the time in years. Find the time taken for the investment to double in value, giving your answer to 3 significant figures.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State what the doubling time means for this model",
          "workingLatex": "V = 2 \\times 2500 = 5000",
          "explanation": "Doubling the investment means the value reaches twice the starting amount of $\\pounds 2500$, so we want the time when $V = 5000$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute this value into the model",
          "workingLatex": "5000 = 2500 \\times 1.045^{t}",
          "explanation": "Setting $V = 5000$ gives an equation whose only unknown is the number of years $t$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Divide both sides by 2500",
          "workingLatex": "2 = 1.045^{t}",
          "explanation": "Dividing by the starting amount isolates the growth factor raised to the power $t$. The starting value cancels, so the doubling time will not depend on it.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Take natural logarithms of both sides",
          "workingLatex": "\\ln(2) = t\\,\\ln(1.045)",
          "explanation": "Taking logs lets us use the power law $\\ln(a^{t}) = t\\ln a$, which brings the exponent $t$ down as a multiplier so it can be isolated.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate both logarithms",
          "workingLatex": "\\ln(2) = 0.69315, \\quad \\ln(1.045) = 0.04402",
          "explanation": "Replacing each logarithm with its numerical value turns the equation into a simple linear one in $t$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Write the linear equation",
          "workingLatex": "0.69315 = 0.04402\\,t",
          "explanation": "The equation now relates a known number to a multiple of $t$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Solve for t",
          "workingLatex": "t = \\dfrac{0.69315}{0.04402} = 15.747",
          "explanation": "Dividing by $\\ln(1.045)$ isolates $t$ and gives the doubling time in years.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Round to 3 significant figures",
          "workingLatex": "t \\approx 15.7 \\text{ years}",
          "explanation": "Rounding to the required accuracy gives the final answer.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Interpret the result in context",
          "workingLatex": "\\pounds 2500 \\to \\pounds 5000 \\text{ every } 15.7 \\text{ years}",
          "explanation": "At a fixed growth rate of $4.5\\%$ per year the money doubles roughly every $15.7$ years, whatever the current balance happens to be.",
          "diagram": null
        }
      ],
      "finalAnswer": "Doubling time $\\approx 15.7$ years"
    }
  },
  {
    "id": "al.y1.pure.exp-modelling.q028",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Exponential modelling",
    "subtopicId": "al.y1.pure.exp-modelling",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "time",
    "tags": [
      "exponential-decay",
      "half-life",
      "drug-elimination"
    ],
    "questionText": "The amount of a drug in a patient's bloodstream is modelled by $A = 8e^{-0.19t}$, where $A$ is the amount in milligrams and $t$ is the time in hours after the dose. Find the half-life of the drug in the bloodstream, giving your answer to 3 significant figures.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State what the half-life means for this model",
          "workingLatex": "A = \\tfrac{1}{2} \\times 8 = 4",
          "explanation": "The half-life is the time for the amount of drug to fall to half its initial value. The dose is $8$ mg, so we want the time when $A = 4$ mg.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute this value into the model",
          "workingLatex": "4 = 8e^{-0.19t}",
          "explanation": "Setting $A = 4$ gives an equation whose only unknown is the time $t$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Divide both sides by 8",
          "workingLatex": "0.5 = e^{-0.19t}",
          "explanation": "Isolating the exponential prepares it to be undone by a logarithm, and the starting amount cancels, so the half-life will not depend on the dose.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Take natural logarithms of both sides",
          "workingLatex": "\\ln(0.5) = -0.19t",
          "explanation": "The natural log is the inverse of $e$, so it removes the exponential and leaves the exponent $-0.19t$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate the logarithm",
          "workingLatex": "\\ln(0.5) = -0.69315",
          "explanation": "Computing $\\ln(0.5)$ makes the equation linear in $t$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Write the linear equation",
          "workingLatex": "-0.69315 = -0.19t",
          "explanation": "Both sides are now plain numbers apart from the single factor of $t$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Solve for t",
          "workingLatex": "t = \\dfrac{-0.69315}{-0.19} = 3.6481",
          "explanation": "Dividing by $-0.19$ isolates $t$, and the two negatives cancel to give a positive time.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Round to 3 significant figures",
          "workingLatex": "t \\approx 3.65 \\text{ hours}",
          "explanation": "Rounding to the required accuracy gives the half-life.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Interpret the result in context",
          "workingLatex": "8 \\to 4 \\to 2 \\text{ mg every } 3.65 \\text{ hours}",
          "explanation": "Every $3.65$ hours the amount of drug remaining is halved, so an $8$ mg dose falls to $4$ mg after about $3.65$ hours and to $2$ mg after about $7.3$ hours.",
          "diagram": null
        }
      ],
      "finalAnswer": "Half-life $\\approx 3.65$ hours"
    }
  },
  {
    "id": "al.y1.pure.exp-modelling.q029",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Exponential modelling",
    "subtopicId": "al.y1.pure.exp-modelling",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "value",
    "tags": [
      "exponential-growth",
      "finding-base",
      "population"
    ],
    "questionText": "The population of a town is modelled by $P = Ab^{t}$, where $P$ is the population and $t$ is the time in years. When $t = 1$ the population is $8000$, and when $t = 4$ the population is $16000$. Find the value of the base $b$, giving your answer to 3 significant figures.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write the equation for the first data point",
          "workingLatex": "8000 = Ab^{1}",
          "explanation": "Substituting $t = 1$ and $P = 8000$ into the model gives one equation linking the unknowns $A$ and $b$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the equation for the second data point",
          "workingLatex": "16000 = Ab^{4}",
          "explanation": "Substituting $t = 4$ and $P = 16000$ gives a second equation, so we now have two equations for the two unknowns.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Divide the second equation by the first",
          "workingLatex": "\\dfrac{16000}{8000} = \\dfrac{Ab^{4}}{Ab^{1}}",
          "explanation": "Dividing the equations makes the unknown constant $A$ cancel, leaving a single equation in $b$ only.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Simplify both sides",
          "workingLatex": "2 = b^{3}",
          "explanation": "The $A$ terms cancel and the powers subtract, since $b^{4}/b^{1} = b^{3}$, leaving a clean equation for $b$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Take natural logarithms of both sides",
          "workingLatex": "\\ln(2) = 3\\ln(b)",
          "explanation": "Using the power law $\\ln(b^{3}) = 3\\ln b$ brings the power down as a multiplier, so we can solve for $\\ln b$ first.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Evaluate the logarithm and rearrange",
          "workingLatex": "0.69315 = 3\\ln(b)",
          "explanation": "Replacing $\\ln(2)$ with its value gives a linear equation in $\\ln b$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Solve for ln(b)",
          "workingLatex": "\\ln(b) = \\dfrac{0.69315}{3} = 0.231049",
          "explanation": "Dividing by $3$ isolates $\\ln b$, ready to be turned back into $b$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Exponentiate to find b",
          "workingLatex": "b = e^{0.231049} = 1.2599",
          "explanation": "Applying $e$ to both sides undoes the natural log and recovers the base $b$ itself.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Round to 3 significant figures",
          "workingLatex": "b \\approx 1.26",
          "explanation": "Rounding gives the required value of the growth factor.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Interpret the result in context",
          "workingLatex": "b = 1.26 \\Rightarrow +26\\% \\text{ per year}",
          "explanation": "A base of $1.26$ means the population is multiplied by $1.26$ each year, which is a growth of about $26\\%$ per year.",
          "diagram": null
        }
      ],
      "finalAnswer": "$b \\approx 1.26$"
    }
  },
  {
    "id": "al.y1.pure.exp-modelling.q030",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Exponential modelling",
    "subtopicId": "al.y1.pure.exp-modelling",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "time",
    "tags": [
      "exponential-growth",
      "compound-interest",
      "natural-log"
    ],
    "questionText": "The value of a savings account is modelled by $V = 3000 \\times 1.06^{t}$, where $V$ is the value in pounds and $t$ is the time in years. Find the time taken for the account to first reach $\\pounds 4500$, giving your answer to 3 significant figures.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the target and form the equation",
          "workingLatex": "4500 = 3000 \\times 1.06^{t}",
          "explanation": "We want the value to reach $\\pounds 4500$, so we set $V = 4500$ in the model and solve for the number of years $t$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Divide both sides by 3000",
          "workingLatex": "1.5 = 1.06^{t}",
          "explanation": "Dividing by the starting amount isolates the growth factor raised to the power $t$, the form we can undo with a logarithm.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Take natural logarithms of both sides",
          "workingLatex": "\\ln(1.5) = \\ln\\!\\left(1.06^{t}\\right)",
          "explanation": "Taking logs of both sides keeps the equation balanced and lets us bring the power down in the next step.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply the power law of logarithms",
          "workingLatex": "\\ln(1.5) = t\\,\\ln(1.06)",
          "explanation": "The rule $\\ln(a^{t}) = t\\ln a$ moves the exponent $t$ out in front as a multiplier, so it is no longer trapped in the power.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate both logarithms",
          "workingLatex": "\\ln(1.5) = 0.40546, \\quad \\ln(1.06) = 0.05827",
          "explanation": "Replacing each logarithm with its numerical value turns the equation into a simple linear one in $t$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Write the linear equation",
          "workingLatex": "0.40546 = 0.05827\\,t",
          "explanation": "The equation now relates a known number to a multiple of $t$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Solve for t",
          "workingLatex": "t = \\dfrac{0.40546}{0.05827} = 6.9585",
          "explanation": "Dividing by $\\ln(1.06)$ isolates $t$ and gives the time in years.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Round to 3 significant figures",
          "workingLatex": "t \\approx 6.96 \\text{ years}",
          "explanation": "Rounding to the required accuracy gives the time to reach $\\pounds 4500$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Check the answer in the original model",
          "workingLatex": "3000 \\times 1.06^{6.9585} = 3000 \\times 1.5 = 4500 \\; \\checkmark",
          "explanation": "Substituting the time back into the model returns the target value of $\\pounds 4500$, confirming the answer is correct.",
          "diagram": null
        }
      ],
      "finalAnswer": "$t \\approx 6.96$ years"
    }
  },
  {
    "id": "al.y1.pure.exp-modelling.q031",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Exponential modelling",
    "subtopicId": "al.y1.pure.exp-modelling",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "value",
    "tags": [
      "exponential-decay",
      "rate-constant",
      "radioactive-decay"
    ],
    "questionText": "The activity of a radioactive source is modelled by $N = N_{0}e^{-kt}$, where $N$ is the activity and $t$ is the time in days. When $t = 3$ the activity is $850$, and when $t = 8$ the activity is $500$. Find the value of the decay constant $k$, giving your answer to 3 significant figures.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write the equation for the first data point",
          "workingLatex": "850 = N_{0}e^{-3k}",
          "explanation": "Substituting $t = 3$ and $N = 850$ into the model gives one equation linking the two unknowns $N_{0}$ and $k$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the equation for the second data point",
          "workingLatex": "500 = N_{0}e^{-8k}",
          "explanation": "Substituting $t = 8$ and $N = 500$ gives a second equation, so we now have two equations for the two unknowns.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Divide the first equation by the second",
          "workingLatex": "\\dfrac{850}{500} = \\dfrac{N_{0}e^{-3k}}{N_{0}e^{-8k}}",
          "explanation": "Dividing the equations makes the unknown initial activity $N_{0}$ cancel, leaving a single equation in $k$ only.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Simplify both sides",
          "workingLatex": "1.7 = e^{-3k - (-8k)} = e^{5k}",
          "explanation": "The $N_{0}$ terms cancel and the exponents subtract, so $e^{-3k}/e^{-8k} = e^{5k}$, giving a clean exponential equation.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Take natural logarithms of both sides",
          "workingLatex": "\\ln(1.7) = 5k",
          "explanation": "The natural log undoes the exponential and brings the exponent $5k$ down so that $k$ can be found.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Evaluate the logarithm",
          "workingLatex": "\\ln(1.7) = 0.53063",
          "explanation": "Computing $\\ln(1.7)$ turns the equation into a simple linear one in $k$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Write the linear equation",
          "workingLatex": "0.53063 = 5k",
          "explanation": "The equation now expresses a known number as five times $k$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Solve for k",
          "workingLatex": "k = \\dfrac{0.53063}{5} = 0.106126",
          "explanation": "Dividing by $5$ isolates the decay constant $k$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Round to 3 significant figures",
          "workingLatex": "k \\approx 0.106",
          "explanation": "Rounding gives the required value of the decay constant.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Interpret the result in context",
          "workingLatex": "k \\approx 0.106 \\text{ per day} > 0",
          "explanation": "A positive decay constant of about $0.106$ per day confirms the source is decaying, with the activity falling by roughly $10\\%$ of its remaining value each day.",
          "diagram": null
        }
      ],
      "finalAnswer": "$k \\approx 0.106$"
    }
  },
  {
    "id": "al.y1.pure.exp-modelling.q032",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Exponential modelling",
    "subtopicId": "al.y1.pure.exp-modelling",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "time",
    "tags": [
      "exponential-decay",
      "cooling",
      "natural-log"
    ],
    "questionText": "The temperature of a hot drink is modelled by $\\theta = 20 + 60e^{-0.08t}$, where $\\theta$ is in degrees Celsius and $t$ is the time in minutes. Find the time taken for the drink to cool to $35^{\\circ}$C, giving your answer to 3 significant figures.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the target and form the equation",
          "workingLatex": "35 = 20 + 60e^{-0.08t}",
          "explanation": "We want the temperature to reach $35^{\\circ}$C, so we set $\\theta = 35$ in the model and solve for the time $t$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Subtract the room temperature",
          "workingLatex": "15 = 60e^{-0.08t}",
          "explanation": "The constant $20$ is the room temperature the drink cools towards. Subtracting it leaves only the exponential part, which describes how far the drink is still above room temperature.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Divide both sides by 60",
          "workingLatex": "0.25 = e^{-0.08t}",
          "explanation": "Isolating the exponential term prepares it to be undone by a logarithm, since nothing else is now multiplying it.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Take natural logarithms of both sides",
          "workingLatex": "\\ln(0.25) = -0.08t",
          "explanation": "The natural log is the inverse of $e$, so it removes the exponential and leaves the exponent $-0.08t$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate the logarithm",
          "workingLatex": "\\ln(0.25) = -1.38629",
          "explanation": "Computing $\\ln(0.25)$ makes the equation linear in $t$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Write the linear equation",
          "workingLatex": "-1.38629 = -0.08t",
          "explanation": "Both sides are now plain numbers apart from the single factor of $t$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Solve for t",
          "workingLatex": "t = \\dfrac{-1.38629}{-0.08} = 17.329",
          "explanation": "Dividing by $-0.08$ isolates $t$, and the two negatives cancel to give a positive time.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Round to 3 significant figures",
          "workingLatex": "t \\approx 17.3 \\text{ minutes}",
          "explanation": "Rounding to the required accuracy gives the cooling time.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Check the answer in the original model",
          "workingLatex": "20 + 60e^{-0.08 \\times 17.329} = 20 + 60(0.25) = 35 \\; \\checkmark",
          "explanation": "Substituting the time back into the full model returns exactly $35^{\\circ}$C, confirming the answer is correct.",
          "diagram": null
        }
      ],
      "finalAnswer": "$t \\approx 17.3$ minutes"
    }
  },
  {
    "id": "al.y1.pure.exp-modelling.q033",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Exponential modelling",
    "subtopicId": "al.y1.pure.exp-modelling",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "expression",
    "tags": [
      "reduction-to-linear",
      "log-linear",
      "gradient-intercept"
    ],
    "questionText": "A company's monthly sales are modelled by $y = ab^{x}$, where $y$ is the sales (in thousands) and $x$ is the number of months since launch. When $\\log_{10} y$ is plotted against $x$, a straight line of gradient $0.3$ and intercept $1.2$ is obtained. Find the values of $a$ and $b$, giving each to $3$ significant figures.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Take base-10 logs of both sides of the model",
          "workingLatex": "\\log_{10} y = \\log_{10}(ab^{x})",
          "explanation": "Taking $\\log_{10}$ of both sides is what turns a product-and-power model into something that can behave like a straight line.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Split the right-hand side using the log laws",
          "workingLatex": "\\log_{10} y = \\log_{10} a + \\log_{10}(b^{x}) = \\log_{10} a + x\\log_{10} b",
          "explanation": "The log of a product becomes a sum, and the power $x$ can be brought down in front, so the right-hand side is now a constant plus a multiple of $x$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compare with the straight-line form",
          "workingLatex": "Y = c + mX,\\quad Y = \\log_{10} y,\\ X = x",
          "explanation": "Writing $\\log_{10} y$ as $Y$ and $x$ as $X$ shows the equation matches $Y = mX + c$, so the gradient is $\\log_{10} b$ and the intercept is $\\log_{10} a$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Equate the gradient",
          "workingLatex": "\\log_{10} b = 0.3",
          "explanation": "The coefficient of $x$ in the model must equal the gradient of the fitted line, since both play the same role.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve for b",
          "workingLatex": "b = 10^{0.3}",
          "explanation": "Undoing a base-10 log means raising $10$ to that power, which isolates $b$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Evaluate b",
          "workingLatex": "b = 10^{0.3} = 1.9953\\ldots",
          "explanation": "Rounding to $3$ significant figures gives a clean value for the multiplier.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Equate the intercept",
          "workingLatex": "\\log_{10} a = 1.2",
          "explanation": "The constant term in the model must equal the intercept of the fitted line, as both are the value when $x = 0$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Solve for a",
          "workingLatex": "a = 10^{1.2}",
          "explanation": "Again we undo the log by raising $10$ to the intercept value.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Evaluate a",
          "workingLatex": "a = 10^{1.2} = 15.848\\ldots",
          "explanation": "Rounding to $3$ significant figures gives the initial sales value $a$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Check against the intercept",
          "workingLatex": "\\log_{10}(15.8) \\approx 1.20 \\checkmark",
          "explanation": "Substituting $a \\approx 15.8$ back and taking its log recovers the intercept $1.2$, confirming the model $y \\approx 15.8 \\times 2.00^{x}$ is consistent with the graph.",
          "diagram": null
        }
      ],
      "finalAnswer": "$a \\approx 15.8,\\ b \\approx 2.00$"
    }
  },
  {
    "id": "al.y1.pure.exp-modelling.q034",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Exponential modelling",
    "subtopicId": "al.y1.pure.exp-modelling",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "expression",
    "tags": [
      "reduction-to-linear",
      "log-linear",
      "gradient-intercept"
    ],
    "questionText": "The number of bacteria in a culture is modelled by $N = 500 \\times 3^{t}$, where $t$ is the time in hours. Show that plotting $\\log_{10} N$ against $t$ produces a straight line, and state the gradient and the $y$-intercept of this line, each to $3$ significant figures.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Take base-10 logs of both sides",
          "workingLatex": "\\log_{10} N = \\log_{10}(500 \\times 3^{t})",
          "explanation": "Taking logs is the standard move for a model of the form (constant)$\\times$(number)$^t$, because it separates the fixed part from the growing part.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Split the product using the log law",
          "workingLatex": "\\log_{10} N = \\log_{10} 500 + \\log_{10}(3^{t})",
          "explanation": "The log of a product is the sum of the logs, so the constant $500$ and the power term come apart.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Bring down the power",
          "workingLatex": "\\log_{10} N = \\log_{10} 500 + t\\log_{10} 3",
          "explanation": "The exponent $t$ can be brought in front of the log, which is exactly what creates a term linear in $t$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Compare with the straight-line form",
          "workingLatex": "Y = c + mt,\\quad Y = \\log_{10} N",
          "explanation": "With $Y = \\log_{10} N$ the equation matches $Y = mt + c$, so the graph of $\\log_{10} N$ against $t$ is a straight line.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Identify the gradient",
          "workingLatex": "m = \\log_{10} 3",
          "explanation": "The gradient is the coefficient of $t$, which here is $\\log_{10} 3$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Evaluate the gradient",
          "workingLatex": "m = \\log_{10} 3 = 0.4771\\ldots",
          "explanation": "Rounding to $3$ significant figures gives a usable numerical gradient.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Identify the intercept",
          "workingLatex": "c = \\log_{10} 500",
          "explanation": "The intercept is the constant term, which is the log of the initial count $500$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Evaluate the intercept",
          "workingLatex": "c = \\log_{10} 500 = 2.6989\\ldots",
          "explanation": "Rounding to $3$ significant figures gives the value where the line crosses the vertical axis.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the conclusion",
          "workingLatex": "\\log_{10} N = 2.70 + 0.477\\,t",
          "explanation": "Since the relationship has the form $Y = mt + c$, the plot is a straight line with gradient $0.477$ and intercept $2.70$; the intercept is $\\log_{10}$ of the starting population of $500$.",
          "diagram": null
        }
      ],
      "finalAnswer": "Gradient $= \\log_{10} 3 \\approx 0.477$, intercept $= \\log_{10} 500 \\approx 2.70$"
    }
  },
  {
    "id": "al.y1.pure.exp-modelling.q035",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Exponential modelling",
    "subtopicId": "al.y1.pure.exp-modelling",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "expression",
    "tags": [
      "reduction-to-linear",
      "log-linear",
      "gradient-intercept"
    ],
    "questionText": "The concentration of a drug in a patient's bloodstream is modelled by $y = ab^{t}$, where $y$ is the concentration in mg/l and $t$ is the time in hours after the dose. When $\\ln y$ is plotted against $t$, a straight line of gradient $-0.05$ and intercept $4.6$ is obtained. Find the values of $a$ and $b$, giving each to $3$ significant figures.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Take natural logs of both sides",
          "workingLatex": "\\ln y = \\ln(ab^{t})",
          "explanation": "Because the line was drawn using $\\ln y$, we take natural logs of the model so the two match up.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Split using the log laws",
          "workingLatex": "\\ln y = \\ln a + t\\ln b",
          "explanation": "The log of the product becomes a sum, and bringing down the power $t$ gives a term that is linear in $t$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compare with the straight-line form",
          "workingLatex": "Y = c + mt,\\quad Y = \\ln y",
          "explanation": "Matching $Y = mt + c$ tells us the gradient is $\\ln b$ and the intercept is $\\ln a$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Equate the gradient",
          "workingLatex": "\\ln b = -0.05",
          "explanation": "The coefficient of $t$ in the model equals the gradient of the fitted line; the negative sign already hints the concentration is falling.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve for b",
          "workingLatex": "b = e^{-0.05}",
          "explanation": "Undoing a natural log means raising $e$ to that power, which isolates $b$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Evaluate b",
          "workingLatex": "b = e^{-0.05} = 0.95123\\ldots",
          "explanation": "To $3$ significant figures the multiplier is a little below $1$, as expected for a decreasing quantity.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Equate the intercept",
          "workingLatex": "\\ln a = 4.6",
          "explanation": "The constant term equals the intercept, since both give the value at $t = 0$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Solve for a",
          "workingLatex": "a = e^{4.6}",
          "explanation": "We undo the natural log by raising $e$ to the intercept value.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Evaluate a",
          "workingLatex": "a = e^{4.6} = 99.484\\ldots",
          "explanation": "Rounding to $3$ significant figures gives the initial concentration $a$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Interpret the result",
          "workingLatex": "1 - 0.951 = 0.049",
          "explanation": "Since $b \\approx 0.951 < 1$, each hour the concentration is multiplied by about $0.951$, i.e. it falls by roughly $4.9\\%$ per hour, starting from about $99.5$ mg/l.",
          "diagram": null
        }
      ],
      "finalAnswer": "$a \\approx 99.5,\\ b \\approx 0.951$"
    }
  },
  {
    "id": "al.y1.pure.exp-modelling.q036",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Exponential modelling",
    "subtopicId": "al.y1.pure.exp-modelling",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "expression",
    "tags": [
      "reduction-to-linear",
      "log-linear",
      "gradient-intercept"
    ],
    "questionText": "In a school, the number of students who have heard a rumour is modelled by $P = 8 \\times 2.5^{t}$, where $t$ is the time in hours since the rumour started. Show that plotting $\\log_{10} P$ against $t$ gives a straight line, and find its gradient and $y$-intercept, each to $3$ significant figures.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Take base-10 logs of both sides",
          "workingLatex": "\\log_{10} P = \\log_{10}(8 \\times 2.5^{t})",
          "explanation": "Taking logs of a (constant)$\\times$(number)$^t$ model is what lets us separate the fixed starting value from the growth.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Split the product",
          "workingLatex": "\\log_{10} P = \\log_{10} 8 + \\log_{10}(2.5^{t})",
          "explanation": "The log of a product is the sum of the logs, pulling the constant $8$ apart from the power term.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Bring down the power",
          "workingLatex": "\\log_{10} P = \\log_{10} 8 + t\\log_{10} 2.5",
          "explanation": "Bringing the exponent $t$ to the front produces a term proportional to $t$, which is what makes the plot linear.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Compare with the straight-line form",
          "workingLatex": "Y = c + mt,\\quad Y = \\log_{10} P",
          "explanation": "With $Y = \\log_{10} P$ the equation is of the form $Y = mt + c$, so the graph is a straight line.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Identify the gradient",
          "workingLatex": "m = \\log_{10} 2.5",
          "explanation": "The gradient is the coefficient of $t$, here $\\log_{10} 2.5$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Evaluate the gradient",
          "workingLatex": "m = \\log_{10} 2.5 = 0.39794\\ldots",
          "explanation": "Rounding to $3$ significant figures gives the numerical gradient.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Identify the intercept",
          "workingLatex": "c = \\log_{10} 8",
          "explanation": "The intercept is the constant term, which is the log of the $8$ students who first knew the rumour.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Evaluate the intercept",
          "workingLatex": "c = \\log_{10} 8 = 0.90309\\ldots",
          "explanation": "Rounding to $3$ significant figures gives the vertical-axis crossing.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the conclusion",
          "workingLatex": "\\log_{10} P = 0.903 + 0.398\\,t",
          "explanation": "The relationship has the form $Y = mt + c$, so the plot is a straight line with gradient $0.398$ and intercept $0.903$; the intercept is $\\log_{10}$ of the initial $8$ students.",
          "diagram": null
        }
      ],
      "finalAnswer": "Gradient $= \\log_{10} 2.5 \\approx 0.398$, intercept $= \\log_{10} 8 \\approx 0.903$"
    }
  },
  {
    "id": "al.y1.pure.exp-modelling.q037",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Exponential modelling",
    "subtopicId": "al.y1.pure.exp-modelling",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "expression",
    "tags": [
      "reduction-to-linear",
      "log-linear",
      "gradient-intercept"
    ],
    "questionText": "The balance in a savings account is modelled by $M = ab^{t}$, where $M$ is the balance in pounds and $t$ is the number of years. When $\\log_{10} M$ is plotted against $t$, a straight line of gradient $0.021$ and intercept $3$ is obtained. Find $a$ and $b$, and interpret the value of $b$ in the context of the model. Give $a$ exactly and $b$ to $3$ significant figures.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Take base-10 logs of both sides",
          "workingLatex": "\\log_{10} M = \\log_{10}(ab^{t})",
          "explanation": "Taking logs converts the product-and-power model into an expression that can match a straight line.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Split using the log laws",
          "workingLatex": "\\log_{10} M = \\log_{10} a + t\\log_{10} b",
          "explanation": "The log of the product becomes a sum, and the exponent $t$ comes down to give a term linear in $t$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compare with the straight-line form",
          "workingLatex": "Y = c + mt,\\quad m = \\log_{10} b,\\ c = \\log_{10} a",
          "explanation": "Matching $Y = mt + c$ identifies the gradient as $\\log_{10} b$ and the intercept as $\\log_{10} a$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Equate the gradient",
          "workingLatex": "\\log_{10} b = 0.021",
          "explanation": "The coefficient of $t$ in the model matches the gradient of the fitted line.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve for b",
          "workingLatex": "b = 10^{0.021}",
          "explanation": "Raising $10$ to the gradient undoes the log and isolates the yearly multiplier.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Evaluate b",
          "workingLatex": "b = 10^{0.021} = 1.04954\\ldots",
          "explanation": "To $3$ significant figures the multiplier is just above $1$, consistent with steady growth.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Equate the intercept",
          "workingLatex": "\\log_{10} a = 3",
          "explanation": "The constant term equals the intercept, giving the balance at $t = 0$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Solve for a",
          "workingLatex": "a = 10^{3} = 1000",
          "explanation": "Raising $10$ to the intercept undoes the log and gives an exact value here.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Interpret the multiplier b",
          "workingLatex": "b \\approx 1.05",
          "explanation": "Because the balance is multiplied by about $1.05$ each year, the account grows by roughly $5\\%$ per year.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Interpret a and confirm",
          "workingLatex": "M(0) = a b^{0} = a = 1000",
          "explanation": "At $t = 0$ the balance equals $a = \\pounds 1000$, and $\\log_{10} 1000 = 3$ matches the intercept, so the account starts at $\\pounds 1000$ and grows about $5\\%$ each year.",
          "diagram": null
        }
      ],
      "finalAnswer": "$a = 1000,\\ b \\approx 1.05$ (about $5\\%$ growth per year)"
    }
  },
  {
    "id": "al.y1.pure.exp-modelling.q038",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Exponential modelling",
    "subtopicId": "al.y1.pure.exp-modelling",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "expression",
    "tags": [
      "reduction-to-linear",
      "log-linear",
      "gradient-intercept"
    ],
    "questionText": "The population of yeast cells in a fermentation tank is modelled by $N = 200 \\times 1.8^{t}$, where $t$ is the time in hours. Show that plotting $\\ln N$ against $t$ gives a straight line, and state its gradient and $y$-intercept, each to $3$ significant figures.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Take natural logs of both sides",
          "workingLatex": "\\ln N = \\ln(200 \\times 1.8^{t})",
          "explanation": "Here the quantity to be plotted is $\\ln N$, so we take natural logs of the model to match.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Split the product",
          "workingLatex": "\\ln N = \\ln 200 + \\ln(1.8^{t})",
          "explanation": "The log of a product is the sum of the logs, separating the constant $200$ from the power term.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Bring down the power",
          "workingLatex": "\\ln N = \\ln 200 + t\\ln 1.8",
          "explanation": "The exponent $t$ comes down in front of the log, creating a term proportional to $t$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Compare with the straight-line form",
          "workingLatex": "Y = c + mt,\\quad Y = \\ln N",
          "explanation": "With $Y = \\ln N$ the equation matches $Y = mt + c$, confirming the plot is a straight line.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Identify the gradient",
          "workingLatex": "m = \\ln 1.8",
          "explanation": "The gradient is the coefficient of $t$, which is $\\ln 1.8$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Evaluate the gradient",
          "workingLatex": "m = \\ln 1.8 = 0.58779\\ldots",
          "explanation": "Rounding to $3$ significant figures gives the numerical gradient.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Identify the intercept",
          "workingLatex": "c = \\ln 200",
          "explanation": "The intercept is the constant term, the natural log of the starting count $200$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Evaluate the intercept",
          "workingLatex": "c = \\ln 200 = 5.29832\\ldots",
          "explanation": "Rounding to $3$ significant figures gives the vertical-axis crossing.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the conclusion",
          "workingLatex": "\\ln N = 5.30 + 0.588\\,t",
          "explanation": "Since the equation has the form $Y = mt + c$, the plot is a straight line with gradient $0.588$ and intercept $5.30$; the intercept is $\\ln$ of the initial $200$ cells.",
          "diagram": null
        }
      ],
      "finalAnswer": "Gradient $= \\ln 1.8 \\approx 0.588$, intercept $= \\ln 200 \\approx 5.30$"
    }
  },
  {
    "id": "al.y1.pure.exp-modelling.q039",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Exponential modelling",
    "subtopicId": "al.y1.pure.exp-modelling",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "expression",
    "tags": [
      "reduction-to-linear",
      "log-linear",
      "gradient-intercept"
    ],
    "questionText": "A new app's total number of downloads $y$ after $x$ weeks is modelled by $y = ab^{x}$. Fitting the data gives the straight line $\\log_{10} y = 1.4 + 0.15x$. Find the values of $a$ and $b$ to $3$ significant figures, and use the model to predict the number of downloads after $6$ weeks.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write the linearised model",
          "workingLatex": "\\log_{10} y = \\log_{10} a + (\\log_{10} b)\\,x",
          "explanation": "Taking logs of $y = ab^{x}$ gives this form, so we can read off which parts of the fitted line correspond to $a$ and $b$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Match the intercept",
          "workingLatex": "\\log_{10} a = 1.4",
          "explanation": "The constant term of the fitted line, $1.4$, must equal $\\log_{10} a$ since both are the value when $x = 0$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Solve for a",
          "workingLatex": "a = 10^{1.4} = 25.119\\ldots",
          "explanation": "Raising $10$ to the intercept undoes the log; to $3$ significant figures $a \\approx 25.1$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Match the gradient",
          "workingLatex": "\\log_{10} b = 0.15",
          "explanation": "The coefficient of $x$ in the fitted line, $0.15$, must equal $\\log_{10} b$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve for b",
          "workingLatex": "b = 10^{0.15} = 1.41254\\ldots",
          "explanation": "Raising $10$ to the gradient recovers the weekly multiplier; to $3$ significant figures $b \\approx 1.41$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the model",
          "workingLatex": "y \\approx 25.1 \\times 1.41^{x}",
          "explanation": "Putting $a$ and $b$ together gives the exponential model in its original form.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Substitute x = 6 into the fitted line",
          "workingLatex": "\\log_{10} y = 1.4 + 0.15 \\times 6",
          "explanation": "It is easiest to predict by using the straight-line equation directly, then converting back at the end.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Simplify",
          "workingLatex": "\\log_{10} y = 1.4 + 0.9 = 2.3",
          "explanation": "Working out the right-hand side gives the value of $\\log_{10} y$ at $6$ weeks.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Convert back to y",
          "workingLatex": "y = 10^{2.3}",
          "explanation": "Undoing the log by raising $10$ to the power returns the actual number of downloads.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Evaluate the prediction",
          "workingLatex": "y = 10^{2.3} = 199.5\\ldots",
          "explanation": "This rounds to about $200$ downloads.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Interpret the result",
          "workingLatex": "y(6) \\approx 200",
          "explanation": "The model predicts roughly $200$ downloads after $6$ weeks, which is sensible as it grows from the starting $a \\approx 25.1$ by a factor of about $1.41$ each week.",
          "diagram": null
        }
      ],
      "finalAnswer": "$a \\approx 25.1,\\ b \\approx 1.41$; about $200$ downloads after $6$ weeks"
    }
  },
  {
    "id": "al.y1.pure.exp-modelling.q040",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Exponential modelling",
    "subtopicId": "al.y1.pure.exp-modelling",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "expression",
    "tags": [
      "reduction-to-linear",
      "log-linear",
      "gradient-intercept"
    ],
    "questionText": "The mass of a radioactive isotope is modelled by $m = ab^{t}$, where $m$ is the mass in grams and $t$ is the time in years. When $\\ln m$ is plotted against $t$, a straight line of gradient $-0.12$ and intercept $5.3$ is obtained. Find $a$ and $b$ to $3$ significant figures, and state the initial mass of the isotope.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Take natural logs of both sides",
          "workingLatex": "\\ln m = \\ln(ab^{t})",
          "explanation": "Since the graph uses $\\ln m$, we take natural logs of the model so the two line up.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Split using the log laws",
          "workingLatex": "\\ln m = \\ln a + t\\ln b",
          "explanation": "The log of the product becomes a sum, and the exponent $t$ comes down to give a term linear in $t$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compare with the straight-line form",
          "workingLatex": "Y = c + mt,\\quad \\text{gradient} = \\ln b,\\ \\text{intercept} = \\ln a",
          "explanation": "Matching $Y = mt + c$ shows the gradient corresponds to $\\ln b$ and the intercept to $\\ln a$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Equate the gradient",
          "workingLatex": "\\ln b = -0.12",
          "explanation": "The coefficient of $t$ equals the gradient of the fitted line; the negative value signals decay.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve for b",
          "workingLatex": "b = e^{-0.12}",
          "explanation": "Raising $e$ to the gradient undoes the natural log and isolates $b$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Evaluate b",
          "workingLatex": "b = e^{-0.12} = 0.88692\\ldots",
          "explanation": "To $3$ significant figures the multiplier is below $1$, confirming the mass shrinks each year.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Equate the intercept",
          "workingLatex": "\\ln a = 5.3",
          "explanation": "The constant term equals the intercept, giving the mass at $t = 0$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Solve for a",
          "workingLatex": "a = e^{5.3}",
          "explanation": "Raising $e$ to the intercept undoes the natural log to recover $a$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Evaluate a",
          "workingLatex": "a = e^{5.3} = 200.34\\ldots",
          "explanation": "Rounding to $3$ significant figures gives $a \\approx 200$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the initial mass",
          "workingLatex": "m(0) = a b^{0} = a \\approx 200\\ \\text{g}",
          "explanation": "At $t = 0$ the mass equals $a$, so the isotope starts at about $200$ g, and since $b \\approx 0.887 < 1$ it loses roughly $11\\%$ of its mass each year.",
          "diagram": null
        }
      ],
      "finalAnswer": "$a \\approx 200,\\ b \\approx 0.887$; initial mass $\\approx 200$ g"
    }
  },
  {
    "id": "al.y1.pure.exp-modelling.q041",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Exponential modelling",
    "subtopicId": "al.y1.pure.exp-modelling",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "expression",
    "tags": [
      "reduction-to-linear",
      "log-linear",
      "gradient-intercept"
    ],
    "questionText": "The number of daily visitors to a website is modelled by $y = ab^{x}$, where $x$ is the number of days since launch. A graph of $\\log_{10} y$ against $x$ is a straight line passing through the points $(1,\\ 1.5)$ and $(5,\\ 3.1)$. Find the values of $a$ and $b$, giving each to $3$ significant figures.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the linear relationship",
          "workingLatex": "\\log_{10} y = c + m x",
          "explanation": "Because $\\log_{10} y$ against $x$ is a straight line, it obeys $Y = mx + c$; we first find $m$ and $c$ from the two given points.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Set up the gradient",
          "workingLatex": "m = \\dfrac{3.1 - 1.5}{5 - 1}",
          "explanation": "The gradient is the change in $\\log_{10} y$ divided by the change in $x$ between the two points.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compute the gradient",
          "workingLatex": "m = \\dfrac{1.6}{4} = 0.4",
          "explanation": "Dividing the differences gives a clean gradient of $0.4$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Use a point to find the intercept",
          "workingLatex": "1.5 = c + 0.4 \\times 1",
          "explanation": "Substituting the point $(1,\\ 1.5)$ into $Y = mx + c$ lets us solve for the intercept $c$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve for the intercept",
          "workingLatex": "c = 1.5 - 0.4 = 1.1",
          "explanation": "Rearranging gives the value where the line crosses the vertical axis.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Write the fitted line",
          "workingLatex": "\\log_{10} y = 1.1 + 0.4x",
          "explanation": "This is the equation of the straight line through the two points.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Relate to the model",
          "workingLatex": "\\log_{10} b = 0.4,\\quad \\log_{10} a = 1.1",
          "explanation": "Comparing with $\\log_{10} y = \\log_{10} a + (\\log_{10} b)x$ matches the gradient to $\\log_{10} b$ and the intercept to $\\log_{10} a$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Solve for b",
          "workingLatex": "b = 10^{0.4} = 2.51189\\ldots",
          "explanation": "Raising $10$ to the gradient recovers the daily multiplier; to $3$ significant figures $b \\approx 2.51$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Solve for a",
          "workingLatex": "a = 10^{1.1} = 12.589\\ldots",
          "explanation": "Raising $10$ to the intercept recovers the starting value; to $3$ significant figures $a \\approx 12.6$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Check with the other point",
          "workingLatex": "1.1 + 0.4 \\times 5 = 3.1 \\checkmark",
          "explanation": "Substituting $x = 5$ into the fitted line gives $3.1$, matching the second point, so the model $y \\approx 12.6 \\times 2.51^{x}$ is confirmed.",
          "diagram": null
        }
      ],
      "finalAnswer": "$a \\approx 12.6,\\ b \\approx 2.51$"
    }
  },
  {
    "id": "al.y1.pure.exp-modelling.q042",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Exponential modelling",
    "subtopicId": "al.y1.pure.exp-modelling",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "expression",
    "tags": [
      "reduction-to-linear",
      "log-log",
      "power-law"
    ],
    "questionText": "Two physical quantities are related by the power law $y = ax^{n}$. When $\\log_{10} y$ is plotted against $\\log_{10} x$, the result is a straight line with gradient $1.5$ and vertical intercept $0.6$. Find the values of $a$ and $n$, giving $a$ to $3$ significant figures.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write down the model to be linearised",
          "workingLatex": "y = ax^{n}",
          "explanation": "As it stands this is a curve, so we look for a way to make the data plot as a straight line, whose gradient and intercept we can read off.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Take logs of both sides",
          "workingLatex": "\\log_{10} y = \\log_{10}(ax^{n})",
          "explanation": "Taking $\\log_{10}$ is the tool that straightens a power law, because logs turn a product and a power into a sum.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Split the log of the product",
          "workingLatex": "\\log_{10} y = \\log_{10} a + \\log_{10}(x^{n})",
          "explanation": "The log of a product is the sum of the logs, which separates the constant $a$ from the variable part.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Bring the power down using the power law of logs",
          "workingLatex": "\\log_{10} y = \\log_{10} a + n\\log_{10} x",
          "explanation": "The power rule $\\log(x^{n}) = n\\log x$ pulls the exponent out to the front, leaving something linear in $\\log_{10} x$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Compare with the equation of a straight line",
          "workingLatex": "Y = mX + c,\\quad Y = \\log_{10} y,\\ X = \\log_{10} x",
          "explanation": "Matching the two forms lets the gradient and intercept of the plotted line carry a direct meaning.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Identify the gradient",
          "workingLatex": "m = n = 1.5",
          "explanation": "The gradient multiplies $X = \\log_{10} x$, and in our model that multiplier is exactly $n$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Identify the intercept",
          "workingLatex": "c = \\log_{10} a = 0.6",
          "explanation": "The constant term in the line is the constant term in our model, which is $\\log_{10} a$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Solve for a",
          "workingLatex": "a = 10^{0.6}",
          "explanation": "To undo a base-$10$ logarithm we raise $10$ to that power, recovering $a$ itself.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Evaluate a",
          "workingLatex": "a = 10^{0.6} \\approx 3.98",
          "explanation": "Rounding to $3$ significant figures gives the constant in the original power law.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Interpret the result",
          "workingLatex": "y \\approx 3.98\\,x^{1.5}",
          "explanation": "The recovered model tells us that $y$ grows faster than in direct proportion, since the power $n = 1.5$ is greater than $1$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$n = 1.5,\\ a \\approx 3.98$"
    }
  },
  {
    "id": "al.y1.pure.exp-modelling.q043",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Exponential modelling",
    "subtopicId": "al.y1.pure.exp-modelling",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "expression",
    "tags": [
      "reduction-to-linear",
      "log-log",
      "allometry"
    ],
    "questionText": "In biology, the resting metabolic rate $R$ watts of a mammal is modelled in terms of its body mass $m$ kg by $R = am^{n}$. A plot of $\\log_{10} R$ against $\\log_{10} m$ is a straight line of gradient $0.75$ passing through the point $(0,\\ 0.85)$. Find $a$ and $n$, and estimate the metabolic rate of a mammal of mass $20$ kg. Give your answers to $3$ significant figures.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write down the model",
          "workingLatex": "R = am^{n}",
          "explanation": "This allometric power law is a curve, so we linearise it to read the constants off a straight-line graph.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Take logs of both sides",
          "workingLatex": "\\log_{10} R = \\log_{10}(am^{n})",
          "explanation": "Taking $\\log_{10}$ converts the product and power into a sum, which is what makes the plot linear.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Apply the log laws",
          "workingLatex": "\\log_{10} R = \\log_{10} a + n\\log_{10} m",
          "explanation": "Splitting the product and bringing down the power gives a linear relationship between $\\log_{10} R$ and $\\log_{10} m$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Compare with a straight line",
          "workingLatex": "Y = mX + c,\\quad Y = \\log_{10} R,\\ X = \\log_{10} m",
          "explanation": "This matching links the biology to the geometry of the line, so gradient and intercept become meaningful.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Read off the power from the gradient",
          "workingLatex": "n = 0.75",
          "explanation": "The gradient of the log-log line is precisely the exponent $n$ in the power law.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Use the intercept point",
          "workingLatex": "\\log_{10} a = 0.85",
          "explanation": "The line passes through $(0,\\ 0.85)$, so when $\\log_{10} m = 0$ we have $\\log_{10} R = 0.85$, which equals $\\log_{10} a$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Solve for a",
          "workingLatex": "a = 10^{0.85} \\approx 7.08",
          "explanation": "Raising $10$ to the intercept undoes the logarithm and gives the constant $a$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State the fitted model",
          "workingLatex": "R \\approx 7.08\\,m^{0.75}",
          "explanation": "With both constants known we now have a formula we can substitute into for any mass.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Substitute the given mass",
          "workingLatex": "R = 7.08 \\times 20^{0.75}",
          "explanation": "We put $m = 20$ into the model to predict the metabolic rate of that mammal.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Evaluate the power",
          "workingLatex": "20^{0.75} \\approx 9.46",
          "explanation": "Working out the power first keeps the arithmetic clean before multiplying by the constant.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Compute the prediction",
          "workingLatex": "R \\approx 7.08 \\times 9.46 \\approx 67.0",
          "explanation": "Multiplying gives the estimated resting metabolic rate to $3$ significant figures.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Interpret the answer in context",
          "workingLatex": "R \\approx 67\\text{ W}",
          "explanation": "A $20$ kg mammal is predicted to dissipate about $67$ watts at rest, roughly the power of a household light bulb.",
          "diagram": null
        }
      ],
      "finalAnswer": "$n = 0.75,\\ a \\approx 7.08,\\ R \\approx 67\\text{ W}$"
    }
  },
  {
    "id": "al.y1.pure.exp-modelling.q044",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Exponential modelling",
    "subtopicId": "al.y1.pure.exp-modelling",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "expression",
    "tags": [
      "reduction-to-linear",
      "log-log",
      "power-law"
    ],
    "questionText": "For a certain electrical component the current $I$ amps is related to the voltage $V$ volts by $I = aV^{n}$. Measurements give $I = 0.5$ when $V = 2$, and $I = 4$ when $V = 8$. By plotting $\\log_{10} I$ against $\\log_{10} V$, or otherwise, find $a$ and $n$. Give $a$ to $3$ significant figures.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write down the model",
          "workingLatex": "I = aV^{n}",
          "explanation": "The relationship is a power law, so taking logs will turn the two data points into two points on a straight line.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Take logs of both sides",
          "workingLatex": "\\log_{10} I = \\log_{10} a + n\\log_{10} V",
          "explanation": "Taking $\\log_{10}$ and applying the log laws gives a straight line of $\\log_{10} I$ against $\\log_{10} V$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Recognise the gradient as n",
          "workingLatex": "\\text{gradient} = n",
          "explanation": "Since the linear form has gradient $n$, we can find $n$ from the change in $\\log_{10} I$ over the change in $\\log_{10} V$ between the two points.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Set up the gradient from the two points",
          "workingLatex": "n = \\frac{\\log_{10} 4 - \\log_{10} 0.5}{\\log_{10} 8 - \\log_{10} 2}",
          "explanation": "The gradient is the difference in the $\\log_{10} I$ values divided by the difference in the $\\log_{10} V$ values.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate the logs",
          "workingLatex": "n = \\frac{0.6021 - (-0.3010)}{0.9031 - 0.3010} = \\frac{0.9031}{0.6021}",
          "explanation": "Working out each logarithm turns the expression into a simple ratio.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Compute n",
          "workingLatex": "n = 1.5",
          "explanation": "The ratio simplifies exactly, giving the exponent in the power law.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Substitute a data point to find a",
          "workingLatex": "0.5 = a \\times 2^{1.5}",
          "explanation": "With $n$ known, one data point is enough to pin down the remaining constant $a$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Evaluate the power and rearrange",
          "workingLatex": "a = \\frac{0.5}{2^{1.5}} = \\frac{0.5}{2.828}",
          "explanation": "Computing $2^{1.5} \\approx 2.828$ and dividing isolates $a$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Compute a",
          "workingLatex": "a \\approx 0.177",
          "explanation": "This gives the constant to $3$ significant figures.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Check with the second data point",
          "workingLatex": "0.177 \\times 8^{1.5} = 0.177 \\times 22.63 \\approx 4.0",
          "explanation": "Substituting $V = 8$ reproduces the measured current of $4$ A, confirming both constants are correct.",
          "diagram": null
        }
      ],
      "finalAnswer": "$n = 1.5,\\ a \\approx 0.177$"
    }
  },
  {
    "id": "al.y1.pure.exp-modelling.q045",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Exponential modelling",
    "subtopicId": "al.y1.pure.exp-modelling",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "expression",
    "tags": [
      "newtons-law-of-cooling",
      "exponential-decay",
      "modelling"
    ],
    "questionText": "A cup of coffee cools in a room at $20^{\\circ}\\text{C}$ according to Newton's law of cooling, $\\theta = 20 + Ae^{-kt}$, where $\\theta$ is the temperature in $^{\\circ}\\text{C}$ and $t$ is the time in minutes. The coffee starts at $90^{\\circ}\\text{C}$, and after $5$ minutes it has cooled to $65^{\\circ}\\text{C}$. Find $A$ and $k$, giving $k$ to $3$ significant figures.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Apply the initial condition",
          "workingLatex": "90 = 20 + Ae^{-k(0)}",
          "explanation": "At the start $t = 0$, so substituting the initial temperature lets us find $A$ first.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Simplify to find A",
          "workingLatex": "90 = 20 + A \\Rightarrow A = 70",
          "explanation": "Since $e^{0} = 1$, the exponential disappears and $A$ is just the initial gap above room temperature.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write the model with A known",
          "workingLatex": "\\theta = 20 + 70e^{-kt}",
          "explanation": "Only $k$ remains unknown, so we now use the second measurement to find it.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply the second condition",
          "workingLatex": "65 = 20 + 70e^{-5k}",
          "explanation": "Substituting $\\theta = 65$ at $t = 5$ gives an equation in $k$ alone.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Isolate the exponential term",
          "workingLatex": "45 = 70e^{-5k}",
          "explanation": "We must get the exponential on its own before taking logs, so we subtract the ambient temperature first.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Divide to expose the exponential",
          "workingLatex": "e^{-5k} = \\frac{45}{70} = 0.6429",
          "explanation": "Dividing leaves $e^{-5k}$ by itself, ready for a natural log.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Take natural logs",
          "workingLatex": "-5k = \\ln(0.6429)",
          "explanation": "The natural log is the exact inverse of $e$, so it brings the exponent down to ground level.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Evaluate the logarithm",
          "workingLatex": "-5k = -0.4418",
          "explanation": "The log of a number less than $1$ is negative, matching the fact that the coffee is cooling.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Solve for k",
          "workingLatex": "k = \\frac{0.4418}{5} \\approx 0.0884",
          "explanation": "Dividing by $5$ gives the cooling rate constant to $3$ significant figures.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Interpret the long-term behaviour",
          "workingLatex": "t \\to \\infty \\Rightarrow e^{-kt} \\to 0 \\Rightarrow \\theta \\to 20",
          "explanation": "Because the exponential decays to zero, the model predicts the coffee eventually settles at room temperature, $20^{\\circ}\\text{C}$, which is exactly what we expect.",
          "diagram": null
        }
      ],
      "finalAnswer": "$A = 70,\\ k \\approx 0.0884\\text{ min}^{-1}$"
    }
  },
  {
    "id": "al.y1.pure.exp-modelling.q046",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Exponential modelling",
    "subtopicId": "al.y1.pure.exp-modelling",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "expression",
    "tags": [
      "newtons-law-of-cooling",
      "exponential-decay",
      "modelling"
    ],
    "questionText": "A metal component cools in air at $25^{\\circ}\\text{C}$ so that its temperature $\\theta\\ ^{\\circ}\\text{C}$ after $t$ minutes is $\\theta = 25 + 175e^{-0.03t}$. Find the time taken for the component to cool to $60^{\\circ}\\text{C}$, giving your answer to $3$ significant figures.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Read off the initial temperature",
          "workingLatex": "\\theta(0) = 25 + 175e^{0} = 200",
          "explanation": "Setting $t = 0$ shows the component starts at $200^{\\circ}\\text{C}$, which frames the size of the cooling we are studying.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Set the target temperature",
          "workingLatex": "60 = 25 + 175e^{-0.03t}",
          "explanation": "We want the time at which the temperature is $60^{\\circ}\\text{C}$, so we substitute that value of $\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Isolate the exponential term",
          "workingLatex": "35 = 175e^{-0.03t}",
          "explanation": "Subtracting the ambient temperature strips away the constant so the exponential stands alone.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Divide to expose the exponential",
          "workingLatex": "e^{-0.03t} = \\frac{35}{175} = 0.2",
          "explanation": "Dividing both sides isolates $e^{-0.03t}$, which is the form we can take logs of.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Take natural logs",
          "workingLatex": "-0.03t = \\ln(0.2)",
          "explanation": "The natural log undoes the exponential and brings the power of $t$ down to a linear term.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Evaluate the logarithm",
          "workingLatex": "-0.03t = -1.6094",
          "explanation": "The log is negative because the temperature difference has shrunk to a fifth of its start.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Rearrange for t",
          "workingLatex": "t = \\frac{1.6094}{0.03}",
          "explanation": "Dividing by the coefficient of $t$ leaves the time on its own.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Compute the time",
          "workingLatex": "t \\approx 53.6",
          "explanation": "This is the cooling time in minutes, given to $3$ significant figures.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Check the answer",
          "workingLatex": "25 + 175e^{-0.03 \\times 53.6} \\approx 25 + 175(0.200) = 60",
          "explanation": "Substituting the time back into the model returns $60^{\\circ}\\text{C}$, confirming the result is consistent.",
          "diagram": null
        }
      ],
      "finalAnswer": "$t \\approx 53.6\\text{ minutes}$"
    }
  },
  {
    "id": "al.y1.pure.exp-modelling.q047",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Exponential modelling",
    "subtopicId": "al.y1.pure.exp-modelling",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "expression",
    "tags": [
      "reduction-to-linear",
      "log-log",
      "power-law"
    ],
    "questionText": "The power output $P$ kilowatts of a small wind turbine is modelled by $P = 0.15v^{3}$, where $v$ is the wind speed in $\\text{m s}^{-1}$. State the gradient and vertical intercept of the graph of $\\log_{10} P$ against $\\log_{10} v$, and use the model to find the power output when $v = 12\\ \\text{m s}^{-1}$. Give the intercept to $3$ significant figures.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write down the model",
          "workingLatex": "P = 0.15v^{3}",
          "explanation": "Here the constants are already known, so we work in reverse to describe the straight line the model would produce.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Take logs of both sides",
          "workingLatex": "\\log_{10} P = \\log_{10}(0.15v^{3})",
          "explanation": "Taking $\\log_{10}$ is what turns this power law into the straight-line form we are asked about.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Split the log of the product",
          "workingLatex": "\\log_{10} P = \\log_{10} 0.15 + \\log_{10}(v^{3})",
          "explanation": "The log of a product is the sum of the logs, separating the constant from the variable.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Bring down the power",
          "workingLatex": "\\log_{10} P = \\log_{10} 0.15 + 3\\log_{10} v",
          "explanation": "The power rule pulls the exponent $3$ to the front, giving a linear form in $\\log_{10} v$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Read off the gradient",
          "workingLatex": "\\text{gradient} = 3",
          "explanation": "The number multiplying $\\log_{10} v$ is the gradient, and here it equals the power in the model.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Read off and evaluate the intercept",
          "workingLatex": "\\text{intercept} = \\log_{10} 0.15 \\approx -0.824",
          "explanation": "The constant term is $\\log_{10} 0.15$; it is negative because $0.15$ is less than $1$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Substitute the wind speed",
          "workingLatex": "P = 0.15 \\times 12^{3}",
          "explanation": "To find the power at $v = 12$ we use the original model directly.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Evaluate the cube",
          "workingLatex": "12^{3} = 1728",
          "explanation": "Cubing the wind speed first keeps the final multiplication straightforward.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Compute the power",
          "workingLatex": "P = 0.15 \\times 1728 = 259.2",
          "explanation": "Multiplying by the constant gives the power output in kilowatts.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Interpret the cubic relationship",
          "workingLatex": "P = 259.2\\text{ kW}",
          "explanation": "Because the gradient is $3$, doubling the wind speed multiplies the power by $2^{3} = 8$, so power is very sensitive to wind speed.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\text{gradient} = 3,\\ \\text{intercept} \\approx -0.824,\\ P = 259.2\\text{ kW}$"
    }
  },
  {
    "id": "al.y1.pure.exp-modelling.q048",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Exponential modelling",
    "subtopicId": "al.y1.pure.exp-modelling",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "expression",
    "tags": [
      "newtons-law-of-cooling",
      "exponential-decay",
      "modelling"
    ],
    "questionText": "A hot drink cools in a room at $22^{\\circ}\\text{C}$ according to $\\theta = 22 + Ae^{-kt}$, where $t$ is in minutes and $k = 0.05\\ \\text{min}^{-1}$. Find the time taken for the temperature difference between the drink and the room to fall to half of its initial value. Give your answer to $3$ significant figures.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the temperature difference",
          "workingLatex": "\\theta - 22 = Ae^{-kt}",
          "explanation": "The quantity that decays exponentially is the gap between the drink and the room, so we work with that difference.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "State the initial difference",
          "workingLatex": "\\theta(0) - 22 = Ae^{0} = A",
          "explanation": "At $t = 0$ the exponential is $1$, so the starting temperature difference is exactly $A$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Set the difference to half its start",
          "workingLatex": "Ae^{-kt} = \\tfrac{1}{2}A",
          "explanation": "We want the moment when the gap has shrunk to one half of its original size $A$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Cancel the constant A",
          "workingLatex": "e^{-kt} = \\tfrac{1}{2}",
          "explanation": "Since $A$ appears on both sides it divides out, and notice the starting temperature no longer matters.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Take natural logs",
          "workingLatex": "-kt = \\ln\\!\\left(\\tfrac{1}{2}\\right)",
          "explanation": "The natural log undoes the exponential, bringing $t$ out of the power.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Simplify the logarithm",
          "workingLatex": "-kt = -\\ln 2 = -0.6931",
          "explanation": "Using $\\ln(1/2) = -\\ln 2$ tidies the expression into a familiar constant.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Rearrange for t",
          "workingLatex": "t = \\frac{\\ln 2}{k}",
          "explanation": "Dividing by $k$ isolates the time; this is the standard half-life formula.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Substitute the rate constant",
          "workingLatex": "t = \\frac{0.6931}{0.05}",
          "explanation": "Putting in $k = 0.05$ turns the formula into a number.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Compute the time",
          "workingLatex": "t \\approx 13.9",
          "explanation": "This is the time in minutes for the temperature difference to halve, to $3$ significant figures.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Interpret the result",
          "workingLatex": "t = \\frac{\\ln 2}{k}\\ \\text{(independent of }A\\text{)}",
          "explanation": "Because $A$ cancelled, this halving time is the same no matter how hot the drink started, just like a half-life.",
          "diagram": null
        }
      ],
      "finalAnswer": "$t \\approx 13.9\\text{ minutes}$"
    }
  },
  {
    "id": "al.y1.pure.exp-modelling.q049",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Exponential modelling",
    "subtopicId": "al.y1.pure.exp-modelling",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "expression",
    "tags": [
      "reduction-to-linear",
      "log-log",
      "power-law"
    ],
    "questionText": "The period $P$ seconds of a swinging pendulum is modelled by $P = aL^{n}$, where $L$ is its length in metres. A pendulum of length $0.25$ m has period $1.0$ s, and one of length $1.0$ m has period $2.0$ s. Find $a$ and $n$, and hence predict the period of a pendulum of length $2.25$ m.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write down the model",
          "workingLatex": "P = aL^{n}",
          "explanation": "The period follows a power law in the length, so logs will make the two data points lie on a straight line.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Take logs of both sides",
          "workingLatex": "\\log_{10} P = \\log_{10} a + n\\log_{10} L",
          "explanation": "Applying $\\log_{10}$ and the log laws gives a linear relationship of $\\log_{10} P$ against $\\log_{10} L$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Set up the gradient from the two points",
          "workingLatex": "n = \\frac{\\log_{10} 2.0 - \\log_{10} 1.0}{\\log_{10} 1.0 - \\log_{10} 0.25}",
          "explanation": "The gradient of the log-log line is the exponent $n$, found from the change in each logged coordinate.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate the logs",
          "workingLatex": "n = \\frac{0.3010 - 0}{0 - (-0.6021)} = \\frac{0.3010}{0.6021}",
          "explanation": "Substituting the logarithms reduces the gradient to a simple ratio.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Compute n",
          "workingLatex": "n = 0.5",
          "explanation": "The ratio is exactly one half, telling us the period grows like the square root of the length.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute a point to find a",
          "workingLatex": "2.0 = a \\times 1.0^{0.5}",
          "explanation": "Using the convenient point $L = 1.0$ makes the power term equal $1$, isolating $a$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Solve for a",
          "workingLatex": "a = 2",
          "explanation": "Since $1^{0.5} = 1$, the constant is simply the period at unit length.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State the fitted model",
          "workingLatex": "P = 2\\sqrt{L}",
          "explanation": "Writing $L^{0.5}$ as a square root shows clearly how the period depends on length.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Substitute the required length",
          "workingLatex": "P = 2\\sqrt{2.25}",
          "explanation": "To predict the new period we put $L = 2.25$ into the model.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Compute the prediction",
          "workingLatex": "P = 2 \\times 1.5 = 3.0",
          "explanation": "Since $\\sqrt{2.25} = 1.5$, the predicted period is $3.0$ seconds.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Check with the first data point",
          "workingLatex": "2\\sqrt{0.25} = 2 \\times 0.5 = 1.0",
          "explanation": "The model reproduces the measured period of $1.0$ s at $L = 0.25$, confirming both constants.",
          "diagram": null
        }
      ],
      "finalAnswer": "$n = 0.5,\\ a = 2,\\ P = 3.0\\text{ s}$"
    }
  },
  {
    "id": "al.y1.pure.exp-modelling.q050",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Exponential modelling",
    "subtopicId": "al.y1.pure.exp-modelling",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "expression",
    "tags": [
      "newtons-law-of-cooling",
      "exponential-decay",
      "modelling"
    ],
    "questionText": "A liquid cools in a container kept at $18^{\\circ}\\text{C}$, so that its temperature satisfies $\\theta = 18 + Ae^{-kt}$, with $t$ in minutes. When $t = 2$ the temperature is $70^{\\circ}\\text{C}$, and when $t = 6$ it is $46^{\\circ}\\text{C}$. Find $A$ and $k$, giving each to $3$ significant figures.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Isolate the exponential part",
          "workingLatex": "\\theta - 18 = Ae^{-kt}",
          "explanation": "Subtracting the ambient temperature leaves the pure exponential, which is what the data must be applied to.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Use the first measurement",
          "workingLatex": "70 - 18 = 52 = Ae^{-2k}",
          "explanation": "Substituting $t = 2$ gives one equation linking $A$ and $k$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Use the second measurement",
          "workingLatex": "46 - 18 = 28 = Ae^{-6k}",
          "explanation": "Substituting $t = 6$ gives a second equation, so we now have two equations in two unknowns.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Divide the equations to eliminate A",
          "workingLatex": "\\frac{52}{28} = \\frac{Ae^{-2k}}{Ae^{-6k}}",
          "explanation": "Dividing cancels the common factor $A$, leaving an equation in $k$ only.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify the exponentials",
          "workingLatex": "1.857 = e^{-2k-(-6k)} = e^{4k}",
          "explanation": "Subtracting the exponents collapses the right-hand side to a single power of $e$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Take natural logs",
          "workingLatex": "4k = \\ln(1.857)",
          "explanation": "The natural log brings the exponent down so we can solve for $k$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Evaluate the logarithm",
          "workingLatex": "4k = 0.6190",
          "explanation": "The log is positive because the ratio is greater than $1$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Solve for k",
          "workingLatex": "k = \\frac{0.6190}{4} \\approx 0.155",
          "explanation": "Dividing by $4$ gives the cooling rate constant to $3$ significant figures.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Substitute back to find A",
          "workingLatex": "A = 52\\,e^{2k} = 52\\,e^{0.3095}",
          "explanation": "Rearranging the first equation and using our value of $k$ isolates $A$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Compute A",
          "workingLatex": "A = 52 \\times 1.363 \\approx 70.9",
          "explanation": "Evaluating the exponential and multiplying gives the constant $A$ to $3$ significant figures.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Check with the second data point",
          "workingLatex": "18 + 70.9\\,e^{-6(0.155)} \\approx 18 + 70.9(0.395) = 46.0",
          "explanation": "Substituting $t = 6$ reproduces the measured $46^{\\circ}\\text{C}$, confirming both constants are consistent.",
          "diagram": null
        }
      ],
      "finalAnswer": "$A \\approx 70.9,\\ k \\approx 0.155\\text{ min}^{-1}$"
    }
  },
  {
    "id": "al.y1.pure.exp-modelling.q051",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Exponential modelling",
    "subtopicId": "al.y1.pure.exp-modelling",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "value",
    "tags": [
      "modelling",
      "log-linear",
      "exponential-growth",
      "interpretation"
    ],
    "questionText": "During an outbreak, the number of infected people $I$ after $t$ days is modelled by $I = I_0 e^{kt}$. A graph of $\\ln I$ against $t$ is a straight line passing through $(0, 3.0)$ and $(10, 5.4)$. (a) Find $I_0$ and $k$. (b) Use the model to predict the number infected when $t = 21$. (c) Explain why the model is likely to fail for large $t$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the model and identify the unknowns",
          "workingLatex": "I = I_0 e^{kt}",
          "explanation": "The number of infected people $I$ is assumed to grow exponentially from an initial value $I_0$ at a constant rate $k$; the task is to find both constants from the fitted line.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall the equation of a straight line",
          "workingLatex": "y = c + mx",
          "explanation": "A fitted straight line has intercept $c$ and gradient $m$; matching our model to this form is what lets us read the constants off the graph.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Linearise the model by taking natural logs",
          "workingLatex": "\\ln I = \\ln I_0 + kt",
          "explanation": "Taking $\\ln$ of both sides turns the exponential curve into a straight line in $t$, because the power $kt$ comes down as a term added to $\\ln I_0$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Match the log form to the straight line",
          "workingLatex": "\\text{intercept} = \\ln I_0, \\quad \\text{gradient} = k",
          "explanation": "Comparing $\\ln I = \\ln I_0 + kt$ with $y = c + mx$ shows the graph's intercept is $\\ln I_0$ and its gradient is the growth constant $k$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Read the intercept from the point (0, 3.0)",
          "workingLatex": "\\ln I_0 = 3.0",
          "explanation": "The line crosses the vertical axis at $3.0$, so when $t = 0$ we have $\\ln I = 3.0$, which is exactly $\\ln I_0$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Solve for the initial number infected",
          "workingLatex": "I_0 = e^{3.0} \\approx 20",
          "explanation": "Exponentiating undoes the logarithm, giving about $20$ people infected at the start of the outbreak.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Find the gradient from the two points",
          "workingLatex": "k = \\frac{5.4 - 3.0}{10 - 0} = \\frac{2.4}{10} = 0.24",
          "explanation": "The gradient of the log-linear line is the growth constant; a positive $k = 0.24$ per day confirms exponential growth.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Interpret k as a doubling time",
          "workingLatex": "t_2 = \\frac{\\ln 2}{k} = \\frac{0.6931}{0.24} \\approx 2.9",
          "explanation": "Dividing $\\ln 2$ by $k$ gives the doubling time: the number of cases doubles roughly every $2.9$ days, which makes the size of $k$ tangible.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Write the complete model",
          "workingLatex": "I = 20 e^{0.24 t}",
          "explanation": "With both constants known we have a working model ready to make predictions.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Substitute t = 21 into the linear form",
          "workingLatex": "\\ln I = 3.0 + 0.24 \\times 21 = 3.0 + 5.04 = 8.04",
          "explanation": "Working in the log form keeps the arithmetic small; we just evaluate the straight line at $t = 21$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Exponentiate to recover I",
          "workingLatex": "I = e^{8.04}",
          "explanation": "To return from $\\ln I$ back to $I$ we apply the exponential, reversing the log taken earlier.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Evaluate the prediction",
          "workingLatex": "I = e^{8.04} \\approx 3103",
          "explanation": "The model predicts about $3100$ infected people on day $21$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Sanity-check the size of the answer",
          "workingLatex": "\\frac{3103}{20} \\approx 155",
          "explanation": "The prediction is roughly a $150$-fold increase over three weeks, which is plausible for fast early-epidemic spread and a useful check that no arithmetic slip has occurred.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "State why the model fails for large t",
          "workingLatex": "t \\to \\infty \\Rightarrow I \\to \\infty",
          "explanation": "The exponential grows without limit, but a real population is finite; as susceptible people run out the spread must slow, so for large $t$ the model overestimates $I$ and an S-shaped (logistic) model becomes more appropriate.",
          "diagram": null
        }
      ],
      "finalAnswer": "$I_0 = e^{3.0} \\approx 20$, $k = 0.24$ per day; the model gives $I(21) = e^{8.04} \\approx 3103$ infected. For large $t$ the exponential grows without bound, but the susceptible population is finite, so the growth must slow and a logistic (S-shaped) model is more realistic."
    }
  },
  {
    "id": "al.y1.pure.exp-modelling.q052",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Exponential modelling",
    "subtopicId": "al.y1.pure.exp-modelling",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "value",
    "tags": [
      "modelling",
      "exponential-growth",
      "simultaneous",
      "interpretation"
    ],
    "questionText": "The value $V$ (in pounds) of an investment after $t$ years is modelled by $V = A e^{rt}$. After $3$ years the value is £6000 and after $8$ years it is £9000. (a) Find the values of $A$ and $r$. (b) Find, to the nearest tenth of a year, when the investment is first worth £12000. (c) State one limitation of using this model for large $t$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the model and unknowns",
          "workingLatex": "V = A e^{rt}",
          "explanation": "The value grows exponentially from an initial amount $A$ at continuous rate $r$; both must be found from the two given values.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write an equation for each data point",
          "workingLatex": "A e^{3r} = 6000, \\quad A e^{8r} = 9000",
          "explanation": "Substituting the two $(t, V)$ pairs gives two equations in the two unknowns $A$ and $r$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Divide to eliminate A",
          "workingLatex": "\\frac{A e^{8r}}{A e^{3r}} = \\frac{9000}{6000}",
          "explanation": "Dividing the equations cancels $A$, leaving a single equation in $r$ — the standard trick for two exponential data points.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Simplify using index laws",
          "workingLatex": "e^{5r} = 1.5",
          "explanation": "Subtracting the powers gives $e^{8r}/e^{3r} = e^{5r}$, and the right side simplifies to $1.5$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Take natural logs",
          "workingLatex": "5r = \\ln 1.5 = 0.4055",
          "explanation": "Logs bring the exponent down so we can isolate $r$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Solve for the rate",
          "workingLatex": "r = \\frac{0.4055}{5} \\approx 0.0811",
          "explanation": "So the investment grows at about $8.11\\%$ per year, compounded continuously.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Back-substitute to find A",
          "workingLatex": "A = \\frac{6000}{e^{3 \\times 0.0811}} = \\frac{6000}{e^{0.2433}}",
          "explanation": "Rearranging the first equation isolates $A$, using the value of $r$ just found.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Evaluate A",
          "workingLatex": "A = \\frac{6000}{1.2754} \\approx 4704",
          "explanation": "The initial investment was about £4704.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Check against the second data point",
          "workingLatex": "4704 \\times e^{8 \\times 0.0811} = 4704 \\times 1.9131 \\approx 9000",
          "explanation": "Substituting back reproduces the £9000 figure, confirming both constants are consistent.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the fitted model",
          "workingLatex": "V = 4704 e^{0.0811 t}",
          "explanation": "This is the model, ready to answer part (b).",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Set the value equal to 12000",
          "workingLatex": "12000 = 4704 e^{0.0811 t}",
          "explanation": "We want the time at which the balance first reaches £12000.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Isolate the exponential",
          "workingLatex": "e^{0.0811 t} = \\frac{12000}{4704} = 2.5510",
          "explanation": "Dividing both sides by $A$ leaves the exponential alone, ready for logs.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Take natural logs",
          "workingLatex": "0.0811 t = \\ln 2.5510 = 0.9365",
          "explanation": "Logs undo the exponential so the time becomes accessible.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Solve for the time",
          "workingLatex": "t = \\frac{0.9365}{0.0811} \\approx 11.5",
          "explanation": "The investment first reaches £12000 after about $11.5$ years.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "State a limitation of the model",
          "workingLatex": "t \\to \\infty \\Rightarrow V \\to \\infty",
          "explanation": "A fixed continuous rate makes the value grow without bound, which is unrealistic: real interest rates fluctuate and no investment grows exponentially forever, so the model is only trustworthy over a limited period.",
          "diagram": null
        }
      ],
      "finalAnswer": "$A \\approx$ £4704, $r \\approx 0.0811$ (about $8.11\\%$ per year); the investment first reaches £12000 after $t \\approx 11.5$ years. Limitation: a constant continuous growth rate is unrealistic in the long term, since rates fluctuate and unbounded exponential growth cannot persist."
    }
  },
  {
    "id": "al.y1.pure.exp-modelling.q053",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Exponential modelling",
    "subtopicId": "al.y1.pure.exp-modelling",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "value",
    "tags": [
      "modelling",
      "log-linear",
      "exponential-decay",
      "half-life"
    ],
    "questionText": "The mass $m$ grams of a radioactive isotope after $t$ years is modelled by $m = m_0 e^{-\\lambda t}$. A graph of $\\ln m$ against $t$ is a straight line with intercept $4.0$ that also passes through $(20, 2.8)$. (a) Find $m_0$ and $\\lambda$. (b) Find the half-life of the isotope. (c) Predict the mass remaining when $t = 50$ and comment on the reliability of the model.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the model and goals",
          "workingLatex": "m = m_0 e^{-\\lambda t}",
          "explanation": "The mass decays exponentially from $m_0$ with decay constant $\\lambda$; we must find both, then the half-life.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Linearise by taking logs",
          "workingLatex": "\\ln m = \\ln m_0 - \\lambda t",
          "explanation": "Taking $\\ln$ makes the relationship linear in $t$, with the decay showing up as a negative gradient.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Match to a straight line",
          "workingLatex": "\\text{intercept} = \\ln m_0, \\quad \\text{gradient} = -\\lambda",
          "explanation": "Comparing with $y = c + mx$, the intercept gives $\\ln m_0$ and the gradient gives $-\\lambda$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Use the intercept",
          "workingLatex": "\\ln m_0 = 4.0",
          "explanation": "The line's intercept is stated as $4.0$, which equals $\\ln m_0$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find the initial mass",
          "workingLatex": "m_0 = e^{4.0} \\approx 54.6",
          "explanation": "Exponentiating gives an initial mass of about $54.6$ grams.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find the gradient",
          "workingLatex": "-\\lambda = \\frac{2.8 - 4.0}{20 - 0} = \\frac{-1.2}{20} = -0.06",
          "explanation": "Using the intercept point $(0, 4.0)$ and $(20, 2.8)$ gives the gradient of the line.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the decay constant",
          "workingLatex": "\\lambda = 0.06",
          "explanation": "The decay constant is $0.06$ per year; the minus sign in the model already accounts for the loss of mass.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Write the model",
          "workingLatex": "m = 54.6 e^{-0.06 t}",
          "explanation": "This fitted model now answers the remaining parts.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Set up the half-life condition",
          "workingLatex": "e^{-0.06 t} = \\tfrac{1}{2}",
          "explanation": "The half-life is when the mass has halved, so the exponential factor equals $\\tfrac{1}{2}$; note $m_0$ cancels, so the half-life does not depend on the starting amount.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Take logs",
          "workingLatex": "-0.06 t = \\ln 0.5 = -0.6931",
          "explanation": "Logs bring the exponent down so we can solve for $t$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Solve for the half-life",
          "workingLatex": "t = \\frac{0.6931}{0.06} \\approx 11.6",
          "explanation": "The half-life is about $11.6$ years.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Predict the mass at t = 50 using the log form",
          "workingLatex": "\\ln m = 4.0 - 0.06 \\times 50 = 1.0",
          "explanation": "Evaluating the straight line at $t = 50$ avoids awkward powers.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Exponentiate",
          "workingLatex": "m = e^{1.0} \\approx 2.72",
          "explanation": "About $2.72$ grams remain after $50$ years.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Comment on reliability",
          "workingLatex": "\\frac{50}{11.6} \\approx 4.3 \\text{ half-lives}",
          "explanation": "Fifty years is over four half-lives, so little mass remains; the exponential law describes large samples very well, but for a tiny number of atoms decay is random and the smooth model becomes unreliable.",
          "diagram": null
        }
      ],
      "finalAnswer": "$m_0 = e^{4.0} \\approx 54.6$ g, $\\lambda = 0.06$ per year; the half-life is $\\approx 11.6$ years and $m(50) = e^{1.0} \\approx 2.72$ g. The exponential law is reliable for large samples but breaks down for very few remaining atoms, where individual decay is random."
    }
  },
  {
    "id": "al.y1.pure.exp-modelling.q054",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Exponential modelling",
    "subtopicId": "al.y1.pure.exp-modelling",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "value",
    "tags": [
      "modelling",
      "log-linear",
      "log-base-10",
      "interpretation"
    ],
    "questionText": "The population $P$ of a city is modelled by $P = P_0 \\times 10^{bt}$, where $t$ is the number of years after $1960$. A graph of $\\log_{10} P$ against $t$ is a straight line through $(0, 5.0)$ and $(40, 5.8)$. (a) Find $P_0$ and $b$. (b) Use the model to predict the population in $2020$. (c) Give one reason why this prediction should be treated with caution.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the model and unknowns",
          "workingLatex": "P = P_0 \\times 10^{bt}",
          "explanation": "The population is modelled as growing by a fixed factor each year; $P_0$ is the $1960$ population and $b$ controls the growth rate.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Linearise using base-10 logs",
          "workingLatex": "\\log_{10} P = \\log_{10} P_0 + bt",
          "explanation": "Because the model uses powers of $10$, taking $\\log_{10}$ is the natural choice to straighten it into a line in $t$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Match to a straight line",
          "workingLatex": "\\text{intercept} = \\log_{10} P_0, \\quad \\text{gradient} = b",
          "explanation": "Comparing with $y = c + mx$ identifies the intercept and gradient with the two constants.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Read the intercept",
          "workingLatex": "\\log_{10} P_0 = 5.0",
          "explanation": "The line passes through $(0, 5.0)$, so $\\log_{10} P_0 = 5.0$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find the 1960 population",
          "workingLatex": "P_0 = 10^{5.0} = 100000",
          "explanation": "Raising $10$ to the intercept gives an initial population of $100{,}000$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find the gradient",
          "workingLatex": "b = \\frac{5.8 - 5.0}{40 - 0} = \\frac{0.8}{40} = 0.02",
          "explanation": "The gradient of the log-linear line is $b = 0.02$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the model",
          "workingLatex": "P = 10^{5.0} \\times 10^{0.02 t}",
          "explanation": "With both constants found we can predict future populations.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Find t for the year 2020",
          "workingLatex": "t = 2020 - 1960 = 60",
          "explanation": "Since $t$ is measured from $1960$, the year $2020$ corresponds to $t = 60$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Evaluate the log form",
          "workingLatex": "\\log_{10} P = 5.0 + 0.02 \\times 60 = 6.2",
          "explanation": "Substituting into the straight line gives $\\log_{10} P = 6.2$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Convert back to a population",
          "workingLatex": "P = 10^{6.2} = 10^{6} \\times 10^{0.2}",
          "explanation": "Splitting the power separates the round million from the fractional part for easy evaluation.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Evaluate",
          "workingLatex": "P = 10^{6} \\times 1.585 \\approx 1585000",
          "explanation": "So the predicted population in $2020$ is about $1.58$ million.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Interpret the annual growth factor",
          "workingLatex": "10^{0.02} \\approx 1.047",
          "explanation": "Each year the model multiplies the population by about $1.047$, i.e. steady growth of roughly $4.7\\%$ per year.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "State why to be cautious",
          "workingLatex": "P(60) = 10^{6.2}",
          "explanation": "Extrapolating a constant growth factor $60$ years beyond the data assumes birth, death and migration rates never change; in reality growth usually slows as a city fills, so the figure is likely an overestimate.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P_0 = 10^{5} = 100000$, $b = 0.02$ (annual growth factor $10^{0.02} \\approx 1.047$); the predicted $2020$ population is $10^{6.2} \\approx 1.58$ million. This should be treated with caution because extrapolating $60$ years assumes an unchanging growth factor, making it likely an overestimate."
    }
  },
  {
    "id": "al.y1.pure.exp-modelling.q055",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Exponential modelling",
    "subtopicId": "al.y1.pure.exp-modelling",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "value",
    "tags": [
      "modelling",
      "exponential-decay",
      "newton-cooling",
      "interpretation"
    ],
    "questionText": "A cup of coffee cools in a room at $20^{\\circ}\\text{C}$. Its temperature $\\theta\\,^{\\circ}\\text{C}$ after $t$ minutes is modelled by $\\theta = 20 + A e^{-kt}$. Initially the coffee is at $90^{\\circ}\\text{C}$, and after $10$ minutes it is at $56^{\\circ}\\text{C}$. (a) Find $A$ and $k$. (b) Predict the temperature after $25$ minutes. (c) Describe the long-term behaviour of the temperature and state an assumption of the model.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the model and unknowns",
          "workingLatex": "\\theta = 20 + A e^{-kt}",
          "explanation": "The coffee cools toward the room temperature $20^{\\circ}\\text{C}$; $A$ is the initial temperature difference and $k$ the cooling rate.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Use the initial condition",
          "workingLatex": "90 = 20 + A e^{0}",
          "explanation": "At $t = 0$ the coffee is $90^{\\circ}\\text{C}$, and $e^{0} = 1$, so this fixes $A$ immediately.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Solve for A",
          "workingLatex": "A = 90 - 20 = 70",
          "explanation": "The starting temperature is $70^{\\circ}\\text{C}$ above the room, so $A = 70$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Use the second data point",
          "workingLatex": "56 = 20 + 70 e^{-10k}",
          "explanation": "Substituting $t = 10$, $\\theta = 56$ gives an equation for $k$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Isolate the exponential",
          "workingLatex": "70 e^{-10k} = 36 \\Rightarrow e^{-10k} = \\frac{36}{70} = 0.5143",
          "explanation": "Subtracting $20$ and dividing by $70$ leaves the exponential term alone.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Take logs",
          "workingLatex": "-10k = \\ln 0.5143 = -0.6650",
          "explanation": "Logs bring the exponent down so $k$ can be found.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Solve for k",
          "workingLatex": "k = \\frac{0.6650}{10} \\approx 0.0665",
          "explanation": "The cooling constant is about $0.0665$ per minute.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Write the model",
          "workingLatex": "\\theta = 20 + 70 e^{-0.0665 t}",
          "explanation": "This fitted model predicts the temperature at any time.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Substitute t = 25",
          "workingLatex": "-0.0665 \\times 25 = -1.6624",
          "explanation": "First compute the exponent for the required time.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Evaluate the exponential",
          "workingLatex": "e^{-1.6624} \\approx 0.1897",
          "explanation": "The exponential factor has shrunk to about $0.19$, meaning most of the initial gap has closed.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Compute the temperature",
          "workingLatex": "\\theta = 20 + 70 \\times 0.1897 = 20 + 13.28 \\approx 33.3",
          "explanation": "After $25$ minutes the coffee is about $33.3^{\\circ}\\text{C}$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Examine the long-term behaviour",
          "workingLatex": "t \\to \\infty \\Rightarrow e^{-kt} \\to 0 \\Rightarrow \\theta \\to 20",
          "explanation": "As time grows the exponential term vanishes, so the temperature approaches $20^{\\circ}\\text{C}$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Interpret and state an assumption",
          "workingLatex": "\\theta \\to 20^{\\circ}\\text{C}",
          "explanation": "The coffee settles at room temperature and cannot cool below it, matching everyday experience; the model assumes the surroundings stay at a constant $20^{\\circ}\\text{C}$ and ignores effects such as evaporation and draughts.",
          "diagram": null
        }
      ],
      "finalAnswer": "$A = 70$, $k \\approx 0.0665$ per minute; $\\theta(25) \\approx 33.3^{\\circ}\\text{C}$. As $t \\to \\infty$, $\\theta \\to 20^{\\circ}\\text{C}$: the coffee approaches room temperature and cannot cool below it. The model assumes a constant surrounding temperature (and ignores evaporation and draughts)."
    }
  },
  {
    "id": "al.y1.pure.exp-modelling.q056",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Exponential modelling",
    "subtopicId": "al.y1.pure.exp-modelling",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "value",
    "tags": [
      "modelling",
      "exponential-decay",
      "interpretation"
    ],
    "questionText": "The recoverable oil reserves $R$ (billion barrels) of a field are modelled by $R = R_0 e^{-ct}$, where $t$ is the number of years after $2000$. In $2000$ the reserves were $1500$ billion barrels, and in $2010$ they were $1230$ billion barrels. (a) Find $R_0$ and $c$. (b) Predict the year in which the reserves fall to $800$ billion barrels. (c) State one limitation of the model.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the model and unknowns",
          "workingLatex": "R = R_0 e^{-ct}",
          "explanation": "Reserves are assumed to decline exponentially from an initial amount $R_0$ at proportional rate $c$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Use the year-2000 value",
          "workingLatex": "t = 0: \\; R_0 = 1500",
          "explanation": "At $t = 0$ (the year $2000$) the exponential factor is $1$, so $R_0$ is simply the $2000$ figure.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Use the year-2010 value",
          "workingLatex": "1230 = 1500 e^{-10c}",
          "explanation": "Substituting $t = 10$, $R = 1230$ gives an equation for $c$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Isolate the exponential",
          "workingLatex": "e^{-10c} = \\frac{1230}{1500} = 0.82",
          "explanation": "Dividing by $R_0$ leaves the exponential factor alone.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Take logs",
          "workingLatex": "-10c = \\ln 0.82 = -0.1985",
          "explanation": "Logs bring the exponent down to find $c$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Solve for the decline rate",
          "workingLatex": "c = \\frac{0.1985}{10} \\approx 0.0198",
          "explanation": "Reserves fall by about $1.98\\%$ of what remains each year.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Write the model",
          "workingLatex": "R = 1500 e^{-0.0198 t}",
          "explanation": "This fitted model lets us predict when reserves reach a target level.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Set reserves equal to 800",
          "workingLatex": "800 = 1500 e^{-0.0198 t}",
          "explanation": "We want the time at which reserves have fallen to $800$ billion barrels.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Isolate the exponential",
          "workingLatex": "e^{-0.0198 t} = \\frac{800}{1500} = 0.5333",
          "explanation": "Dividing by $R_0$ prepares the equation for logs.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Take logs",
          "workingLatex": "-0.0198 t = \\ln 0.5333 = -0.6286",
          "explanation": "Logs bring the exponent down so the time can be isolated.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Solve for t",
          "workingLatex": "t = \\frac{0.6286}{0.0198} \\approx 31.7",
          "explanation": "It takes about $31.7$ years from $2000$ for reserves to reach $800$ billion barrels.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Convert to a calendar year",
          "workingLatex": "2000 + 31.7 \\approx 2032",
          "explanation": "Adding the elapsed time to the start year places this around $2032$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Sanity-check the trend",
          "workingLatex": "1500 \\to 1230 \\to \\dots \\to 800",
          "explanation": "Reserves fall steadily but ever more slowly in absolute terms, which is the signature of exponential decay and matches the numbers.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "State a limitation",
          "workingLatex": "c = \\text{constant?}",
          "explanation": "The model assumes a fixed proportional extraction rate, but new discoveries, improved technology and changing demand all alter $c$, so extrapolating decades ahead is unreliable.",
          "diagram": null
        }
      ],
      "finalAnswer": "$R_0 = 1500$ billion barrels, $c \\approx 0.0198$ per year; reserves fall to $800$ after $t \\approx 31.7$ years, i.e. around $2032$. Limitation: a constant proportional extraction rate ignores new discoveries, technology and demand changes, so long-range extrapolation is unreliable."
    }
  },
  {
    "id": "al.y1.pure.exp-modelling.q057",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Exponential modelling",
    "subtopicId": "al.y1.pure.exp-modelling",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "value",
    "tags": [
      "modelling",
      "log-linear",
      "exponential-decay",
      "half-life"
    ],
    "questionText": "The concentration $C$ mg/L of a drug in a patient's blood after $t$ hours is modelled by $C = C_0 e^{-kt}$. A graph of $\\ln C$ against $t$ passes through $(0, 2.3)$ and $(6, 1.1)$. (a) Find $C_0$ and $k$. (b) Find the time taken for the concentration to fall to $2$ mg/L. (c) State one situation in which the model may not be valid.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the model and unknowns",
          "workingLatex": "C = C_0 e^{-kt}",
          "explanation": "The drug concentration decays exponentially from an initial dose $C_0$ with elimination constant $k$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Linearise by taking logs",
          "workingLatex": "\\ln C = \\ln C_0 - kt",
          "explanation": "Taking $\\ln$ turns the decay curve into a straight line in $t$ with a negative gradient.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Match to a straight line",
          "workingLatex": "\\text{intercept} = \\ln C_0, \\quad \\text{gradient} = -k",
          "explanation": "Comparing with $y = c + mx$ links the intercept to $\\ln C_0$ and the gradient to $-k$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Read the intercept",
          "workingLatex": "\\ln C_0 = 2.3",
          "explanation": "The line passes through $(0, 2.3)$, so $\\ln C_0 = 2.3$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find the initial concentration",
          "workingLatex": "C_0 = e^{2.3} \\approx 9.97",
          "explanation": "Exponentiating gives an initial concentration of about $9.97$ mg/L.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find the gradient",
          "workingLatex": "-k = \\frac{1.1 - 2.3}{6 - 0} = \\frac{-1.2}{6} = -0.2",
          "explanation": "The gradient of the log-linear line gives $-k$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the elimination constant",
          "workingLatex": "k = 0.2",
          "explanation": "The elimination constant is $0.2$ per hour.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Write the model",
          "workingLatex": "C = 9.97 e^{-0.2 t}",
          "explanation": "This fitted model lets us find when the concentration reaches a given level.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Set the concentration to 2 mg/L",
          "workingLatex": "2 = 9.97 e^{-0.2 t}",
          "explanation": "We want the time at which the concentration has fallen to $2$ mg/L.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Isolate the exponential",
          "workingLatex": "e^{-0.2 t} = \\frac{2}{9.97} = 0.2006",
          "explanation": "Dividing by $C_0$ leaves the exponential factor ready for logs.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Take logs",
          "workingLatex": "-0.2 t = \\ln 0.2006 = -1.6064",
          "explanation": "Logs bring the exponent down so the time can be found.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Solve for t",
          "workingLatex": "t = \\frac{1.6064}{0.2} \\approx 8.03",
          "explanation": "The concentration falls to $2$ mg/L after about $8.03$ hours.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Find the half-life for interpretation",
          "workingLatex": "t_{1/2} = \\frac{\\ln 2}{0.2} \\approx 3.47",
          "explanation": "The concentration halves every $3.47$ hours, a convenient way to describe how quickly the drug clears.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "State when the model may fail",
          "workingLatex": "k = \\text{constant?}",
          "explanation": "First-order elimination assumes a constant $k$, but at high doses the body's enzymes can saturate and clear the drug at a fixed maximum rate (zero-order), so the simple exponential model would no longer hold.",
          "diagram": null
        }
      ],
      "finalAnswer": "$C_0 = e^{2.3} \\approx 9.97$ mg/L, $k = 0.2$ per hour (half-life $\\approx 3.47$ h); the concentration falls to $2$ mg/L after $t \\approx 8.03$ hours. The model may fail at high doses, where the eliminating enzymes saturate and clearance becomes zero-order rather than first-order."
    }
  },
  {
    "id": "al.y1.pure.exp-modelling.q058",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Exponential modelling",
    "subtopicId": "al.y1.pure.exp-modelling",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "value",
    "tags": [
      "modelling",
      "log-linear",
      "exponential-growth",
      "interpretation"
    ],
    "questionText": "Algae spreading on a lake cover an area $A$ m$^2$ after $t$ weeks, modelled by $A = A_0 e^{kt}$. A graph of $\\ln A$ against $t$ passes through $(0, 1.6)$ and $(8, 3.6)$. (a) Find $A_0$ and $k$. (b) Predict the area covered when $t = 14$. (c) The lake has a surface area of $2000$ m$^2$. Find when the model predicts the lake is fully covered and comment on the model's validity.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the model and unknowns",
          "workingLatex": "A = A_0 e^{kt}",
          "explanation": "The algae-covered area is assumed to grow exponentially from an initial area $A_0$ at rate $k$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Linearise by taking logs",
          "workingLatex": "\\ln A = \\ln A_0 + kt",
          "explanation": "Taking $\\ln$ straightens the growth curve into a line in $t$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Match to a straight line",
          "workingLatex": "\\text{intercept} = \\ln A_0, \\quad \\text{gradient} = k",
          "explanation": "Comparing with $y = c + mx$ identifies the intercept and gradient.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Read the intercept",
          "workingLatex": "\\ln A_0 = 1.6",
          "explanation": "The line passes through $(0, 1.6)$, so $\\ln A_0 = 1.6$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find the initial area",
          "workingLatex": "A_0 = e^{1.6} \\approx 4.95",
          "explanation": "Exponentiating gives an initial covered area of about $4.95$ m$^2$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find the gradient",
          "workingLatex": "k = \\frac{3.6 - 1.6}{8 - 0} = \\frac{2.0}{8} = 0.25",
          "explanation": "The gradient gives the growth constant $k = 0.25$ per week.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Write the model",
          "workingLatex": "A = 4.95 e^{0.25 t}",
          "explanation": "This fitted model answers the prediction and validity parts.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Substitute t = 14 into the log form",
          "workingLatex": "\\ln A = 1.6 + 0.25 \\times 14 = 5.1",
          "explanation": "Evaluating the straight line at $t = 14$ keeps the arithmetic simple.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Exponentiate",
          "workingLatex": "A = e^{5.1} \\approx 164",
          "explanation": "The model predicts about $164$ m$^2$ covered after $14$ weeks.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Set the area equal to the whole lake",
          "workingLatex": "2000 = 4.95 e^{0.25 t}",
          "explanation": "The lake is fully covered when the model reaches its $2000$ m$^2$ surface area.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Isolate the exponential",
          "workingLatex": "e^{0.25 t} = \\frac{2000}{4.95} \\approx 404.0",
          "explanation": "Dividing by $A_0$ prepares the equation for logs.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Take logs",
          "workingLatex": "0.25 t = \\ln 404.0 \\approx 6.001",
          "explanation": "Logs bring the exponent down so the time can be found.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Solve for t",
          "workingLatex": "t = \\frac{6.001}{0.25} \\approx 24.0",
          "explanation": "The model predicts full coverage at about $24$ weeks.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Comment on validity",
          "workingLatex": "A \\le 2000",
          "explanation": "Beyond $24$ weeks the exponential would exceed the lake's area, which is impossible; growth must slow as space and nutrients run out, so the model is only realistic while $A$ is much smaller than $2000$ m$^2$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$A_0 = e^{1.6} \\approx 4.95$ m$^2$, $k = 0.25$ per week; $A(14) = e^{5.1} \\approx 164$ m$^2$. The model predicts the whole $2000$ m$^2$ lake is covered at $t \\approx 24$ weeks; beyond this exponential growth is impossible, so the model is valid only while $A \\ll 2000$ m$^2$."
    }
  },
  {
    "id": "al.y1.pure.exp-modelling.q059",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Exponential modelling",
    "subtopicId": "al.y1.pure.exp-modelling",
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "value",
    "tags": [
      "modelling",
      "log-linear",
      "exponential-decay",
      "interpretation"
    ],
    "questionText": "Atmospheric pressure $P$ kPa at height $h$ km above sea level is modelled by $P = P_0 e^{-\\lambda h}$. A graph of $\\ln P$ against $h$ passes through $(0, 4.6)$ and $(8, 3.8)$. (a) Find $P_0$ and $\\lambda$. (b) Predict the pressure at a height of $15$ km. (c) State one assumption that limits the accuracy of this model.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the model and unknowns",
          "workingLatex": "P = P_0 e^{-\\lambda h}",
          "explanation": "Pressure is assumed to fall exponentially with height $h$, from sea-level pressure $P_0$ at rate $\\lambda$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Linearise by taking logs",
          "workingLatex": "\\ln P = \\ln P_0 - \\lambda h",
          "explanation": "Taking $\\ln$ straightens the decay curve into a line in $h$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Match to a straight line",
          "workingLatex": "\\text{intercept} = \\ln P_0, \\quad \\text{gradient} = -\\lambda",
          "explanation": "Comparing with $y = c + mx$ links the intercept to $\\ln P_0$ and the gradient to $-\\lambda$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Read the intercept",
          "workingLatex": "\\ln P_0 = 4.6",
          "explanation": "The line passes through $(0, 4.6)$, so $\\ln P_0 = 4.6$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find sea-level pressure",
          "workingLatex": "P_0 = e^{4.6} \\approx 99.5",
          "explanation": "Exponentiating gives a sea-level pressure of about $99.5$ kPa.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find the gradient",
          "workingLatex": "-\\lambda = \\frac{3.8 - 4.6}{8 - 0} = \\frac{-0.8}{8} = -0.1",
          "explanation": "The gradient of the log-linear line gives $-\\lambda$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the decay constant",
          "workingLatex": "\\lambda = 0.1",
          "explanation": "Pressure falls with constant $\\lambda = 0.1$ per km.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Write the model",
          "workingLatex": "P = 99.5 e^{-0.1 h}",
          "explanation": "This fitted model predicts pressure at any altitude.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Substitute h = 15 into the log form",
          "workingLatex": "\\ln P = 4.6 - 0.1 \\times 15 = 3.1",
          "explanation": "Evaluating the straight line at $h = 15$ keeps the arithmetic simple.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Exponentiate",
          "workingLatex": "P = e^{3.1} \\approx 22.2",
          "explanation": "The model predicts about $22.2$ kPa at $15$ km.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Interpret the decay constant",
          "workingLatex": "\\frac{1}{\\lambda} = \\frac{1}{0.1} = 10",
          "explanation": "The scale height is $10$ km: pressure falls by a factor of $e$ every $10$ km of ascent, which makes $\\lambda$ tangible.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Check with the scale height",
          "workingLatex": "P(10) = 99.5 e^{-1} \\approx 36.6",
          "explanation": "At $10$ km the pressure should be $P_0/e \\approx 36.6$ kPa, consistent with the model — a quick check.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "State a limiting assumption",
          "workingLatex": "\\lambda = \\text{constant?}",
          "explanation": "The model assumes a constant temperature (isothermal atmosphere) and uniform gravity, but in reality temperature changes with altitude, so $\\lambda$ is not truly constant and the prediction is only approximate.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P_0 = e^{4.6} \\approx 99.5$ kPa, $\\lambda = 0.1$ per km; $P(15) = e^{3.1} \\approx 22.2$ kPa. The model assumes a constant temperature (isothermal atmosphere) and uniform gravity, but real temperature varies with altitude, so $\\lambda$ is not truly constant."
    }
  },
  {
    "id": "al.y1.pure.exp-modelling.q060",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Exponential modelling",
    "subtopicId": "al.y1.pure.exp-modelling",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "value",
    "tags": [
      "modelling",
      "log-linear",
      "exponential-decay",
      "half-life"
    ],
    "questionText": "In a dating laboratory the activity $A$ counts per minute of $^{14}\\text{C}$ in organic remains is modelled by $A = A_0 e^{-\\lambda t}$, where $t$ is measured in thousands of years. A calibration graph of $\\ln A$ against $t$ passes through $(0, 2.7)$ and $(6, 1.8)$. (a) Find $A_0$ and $\\lambda$. (b) A bone sample has an activity of $5$ counts per minute. Estimate its age. (c) Find the half-life and state one reason the estimated age may be unreliable.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the model and unknowns",
          "workingLatex": "A = A_0 e^{-\\lambda t}",
          "explanation": "The $^{14}\\text{C}$ activity decays exponentially from an initial value $A_0$ with decay constant $\\lambda$; here $t$ is in thousands of years.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Linearise by taking logs",
          "workingLatex": "\\ln A = \\ln A_0 - \\lambda t",
          "explanation": "Taking $\\ln$ straightens the decay curve into a line in $t$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Match to a straight line",
          "workingLatex": "\\text{intercept} = \\ln A_0, \\quad \\text{gradient} = -\\lambda",
          "explanation": "Comparing with $y = c + mx$ links the intercept to $\\ln A_0$ and the gradient to $-\\lambda$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Read the intercept",
          "workingLatex": "\\ln A_0 = 2.7",
          "explanation": "The calibration line passes through $(0, 2.7)$, so $\\ln A_0 = 2.7$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find the initial activity",
          "workingLatex": "A_0 = e^{2.7} \\approx 14.9",
          "explanation": "Exponentiating gives an initial activity of about $14.9$ counts per minute.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find the gradient",
          "workingLatex": "-\\lambda = \\frac{1.8 - 2.7}{6 - 0} = \\frac{-0.9}{6} = -0.15",
          "explanation": "The gradient of the log-linear line gives $-\\lambda$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the decay constant",
          "workingLatex": "\\lambda = 0.15",
          "explanation": "The decay constant is $0.15$ per thousand years.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Write the model",
          "workingLatex": "A = 14.9 e^{-0.15 t}",
          "explanation": "This fitted model lets us date a sample from its measured activity.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Set the activity to the measured value",
          "workingLatex": "5 = 14.9 e^{-0.15 t}",
          "explanation": "The bone gives $5$ counts per minute, so we solve for the age $t$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Isolate the exponential",
          "workingLatex": "e^{-0.15 t} = \\frac{5}{14.9} \\approx 0.3356",
          "explanation": "Dividing by $A_0$ leaves the exponential factor ready for logs.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Take logs and solve",
          "workingLatex": "-0.15 t = \\ln 0.3356 = -1.0919 \\Rightarrow t = 7.28",
          "explanation": "Logs bring the exponent down, giving an age of about $7.28$ thousand years.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Convert to years",
          "workingLatex": "t \\approx 7.28 \\times 1000 = 7280",
          "explanation": "In everyday units the sample is roughly $7280$ years old.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Find the half-life",
          "workingLatex": "t_{1/2} = \\frac{\\ln 2}{0.15} \\approx 4.62",
          "explanation": "The activity halves every $4.62$ thousand years, i.e. about $4620$ years — a useful check that a $7280$-year age lies between one and two half-lives.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "State a reason the age may be unreliable",
          "workingLatex": "A_0 = \\text{assumed}",
          "explanation": "The date relies on knowing the original $^{14}\\text{C}$ level and on the sample not being contaminated; either a different starting activity or added modern carbon would shift the estimated age, so the result should be quoted with caution.",
          "diagram": null
        }
      ],
      "finalAnswer": "$A_0 = e^{2.7} \\approx 14.9$ cpm, $\\lambda = 0.15$ per thousand years (half-life $\\approx 4620$ years); a sample of $5$ cpm has age $t \\approx 7.28$ thousand years $\\approx 7280$ years. The age is unreliable if the original $^{14}\\text{C}$ level was different or the sample is contaminated, since either would shift the result."
    }
  },
  {
    "id": "al.y1.pure.exp-modelling.q061",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Exponential modelling",
    "subtopicId": "al.y1.pure.exp-modelling",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "value",
    "tags": [
      "newtons-law-cooling",
      "forensic",
      "natural-log"
    ],
    "questionText": "A body is discovered in a room held at a constant $18^{\\circ}\\text{C}$. Forensic investigators model its temperature by $\\theta = 18 + Ae^{-kt}$, where $\\theta$ is in $^{\\circ}\\text{C}$ and $t$ is the time in hours after discovery. At the moment of discovery the body is at $30^{\\circ}\\text{C}$, and $2$ hours later it is $26^{\\circ}\\text{C}$. (a) Find $A$ and $k$. (b) Assuming the body was at the normal living temperature of $37^{\\circ}\\text{C}$ at the instant of death, estimate how long before discovery death occurred. (c) State the temperature the model predicts for very large $t$ and comment on whether this is sensible.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write the model and read off the ambient temperature",
          "workingLatex": "\\theta = 18 + Ae^{-kt},\\quad \\theta_s = 18^{\\circ}\\text{C}",
          "explanation": "The constant $18$ is the temperature the exponential term decays towards, so it must be the surrounding room temperature.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Use the discovery condition at t=0 to find A",
          "workingLatex": "t=0:\\ 30 = 18 + Ae^{0} \\Rightarrow A = 12",
          "explanation": "At $t=0$ the factor $e^{0}=1$, so $A$ is simply the temperature gap above the room at discovery, $30-18$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute A back into the model",
          "workingLatex": "\\theta = 18 + 12e^{-kt}",
          "explanation": "Fixing $A$ leaves only $k$ unknown, so one more data point will pin the model down completely.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply the second reading at t=2",
          "workingLatex": "t=2:\\ 26 = 18 + 12e^{-2k}",
          "explanation": "Substituting the known temperature two hours later gives an equation in the single unknown $k$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Isolate the exponential term",
          "workingLatex": "12e^{-2k} = 8 \\Rightarrow e^{-2k} = \\tfrac{2}{3}",
          "explanation": "Always strip away the ambient offset and the coefficient first, so the exponential stands alone before taking logarithms.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Take natural logarithms to release k",
          "workingLatex": "-2k = \\ln\\tfrac{2}{3} \\Rightarrow k = \\tfrac{1}{2}\\ln\\tfrac{3}{2}",
          "explanation": "Taking $\\ln$ undoes the exponential; flipping the fraction to $\\tfrac{3}{2}$ removes the minus sign and keeps $k$ positive.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Evaluate k",
          "workingLatex": "k \\approx 0.2027",
          "explanation": "A positive $k$ confirms cooling, since the body temperature falls over time towards the room value.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State the fully determined model",
          "workingLatex": "\\theta = 18 + 12e^{-0.2027t}",
          "explanation": "With both constants known, the model can now be run forwards or backwards in time.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Set up the time-of-death equation",
          "workingLatex": "37 = 18 + 12e^{-kt}",
          "explanation": "Death corresponds to the last moment the body was at $37^{\\circ}\\text{C}$, so we solve the model for that temperature.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Isolate the exponential",
          "workingLatex": "12e^{-kt} = 19 \\Rightarrow e^{-kt} = \\tfrac{19}{12}",
          "explanation": "The gap above room temperature at death is $37-18=19$, larger than the $12$ at discovery, which is why the answer will be a negative time.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Take logarithms",
          "workingLatex": "-kt = \\ln\\tfrac{19}{12} \\approx 0.4595",
          "explanation": "The right side exceeds $1$, so its logarithm is positive, forcing $t$ to come out negative.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Solve for t",
          "workingLatex": "t = \\dfrac{0.4595}{-0.2027} \\approx -2.27\\ \\text{hours}",
          "explanation": "A negative $t$ means the event happened before the clock started at discovery.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Interpret the time of death",
          "workingLatex": "\\text{death} \\approx 2.27\\ \\text{hours before discovery}",
          "explanation": "Reading the sign in context turns the abstract $t=-2.27$ into a concrete estimate for investigators.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Examine and interpret the long-term limit",
          "workingLatex": "t\\to\\infty:\\ e^{-kt}\\to 0,\\ \\theta\\to 18^{\\circ}\\text{C}",
          "explanation": "The body can only cool as far as its surroundings, so the limit equalling the room temperature confirms the model behaves realistically.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $A = 12,\\ k = \\tfrac{1}{2}\\ln\\tfrac{3}{2} \\approx 0.203$. (b) Death occurred about $2.27$ hours before discovery. (c) As $t\\to\\infty,\\ \\theta\\to 18^{\\circ}\\text{C}$, the room temperature, which is sensible since a body cannot cool below its surroundings."
    }
  },
  {
    "id": "al.y1.pure.exp-modelling.q062",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Exponential modelling",
    "subtopicId": "al.y1.pure.exp-modelling",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "value",
    "tags": [
      "newtons-law-cooling",
      "coffee",
      "natural-log"
    ],
    "questionText": "A cup of coffee cools in a room at $22^{\\circ}\\text{C}$ according to $\\theta = 22 + Ae^{-kt}$, where $\\theta$ is in $^{\\circ}\\text{C}$ and $t$ is in minutes. Initially the coffee is at $88^{\\circ}\\text{C}$, and after $4$ minutes it is $66^{\\circ}\\text{C}$. (a) Find $A$ and $k$. (b) Find the temperature after $10$ minutes. (c) Find the time taken for the coffee to cool to $40^{\\circ}\\text{C}$. (d) State the temperature approached for large $t$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the model and identify the ambient temperature",
          "workingLatex": "\\theta = 22 + Ae^{-kt},\\quad \\theta_s = 22^{\\circ}\\text{C}",
          "explanation": "The additive constant is the room temperature that the coffee settles towards as the exponential dies away.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Apply the initial condition",
          "workingLatex": "t=0:\\ 88 = 22 + Ae^{0} \\Rightarrow A = 66",
          "explanation": "At $t=0$ the exponential equals $1$, so $A$ is the initial excess of the coffee over the room, $88-22$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write the model with A known",
          "workingLatex": "\\theta = 22 + 66e^{-kt}",
          "explanation": "With $A$ fixed, a single further measurement determines the cooling rate $k$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply the reading at t=4",
          "workingLatex": "t=4:\\ 66 = 22 + 66e^{-4k}",
          "explanation": "Substituting the four-minute temperature produces one equation in $k$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Isolate the exponential",
          "workingLatex": "66e^{-4k} = 44 \\Rightarrow e^{-4k} = \\tfrac{2}{3}",
          "explanation": "Removing the offset and coefficient leaves the exponential alone, ready for logarithms.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Take natural logarithms",
          "workingLatex": "-4k = \\ln\\tfrac{2}{3} \\Rightarrow k = \\tfrac{1}{4}\\ln\\tfrac{3}{2}",
          "explanation": "Inverting the fraction to $\\tfrac{3}{2}$ makes the logarithm positive and gives a positive cooling constant.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Evaluate k",
          "workingLatex": "k \\approx 0.1014",
          "explanation": "A positive $k$ correctly encodes that the coffee is losing heat over time.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Set up the temperature at t=10",
          "workingLatex": "\\theta(10) = 22 + 66e^{-0.1014\\times 10}",
          "explanation": "Forward prediction is a direct substitution once the constants are known.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Evaluate the exponential",
          "workingLatex": "e^{-1.0137} \\approx 0.36289",
          "explanation": "Computing the exponent first and then the exponential avoids rounding slips.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Complete part (b)",
          "workingLatex": "\\theta(10) = 22 + 66(0.36289) \\approx 46.0^{\\circ}\\text{C}",
          "explanation": "The coffee has dropped well below its start but is still comfortably above room temperature.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Set up the equation for cooling to 40 degrees",
          "workingLatex": "40 = 22 + 66e^{-kt} \\Rightarrow e^{-kt} = \\tfrac{18}{66} = \\tfrac{3}{11}",
          "explanation": "Rearranging isolates the exponential so that a logarithm will free the time $t$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Take logarithms",
          "workingLatex": "-kt = \\ln\\tfrac{3}{11} \\approx -1.2993",
          "explanation": "The fraction is less than $1$, so its logarithm is negative, which pairs with the negative $-k$ to give a positive time.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Solve for the time",
          "workingLatex": "t = \\dfrac{1.2993}{0.1014} \\approx 12.8\\ \\text{minutes}",
          "explanation": "Dividing the two negatives leaves a positive time in minutes.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "State the long-term limit",
          "workingLatex": "t\\to\\infty:\\ \\theta\\to 22^{\\circ}\\text{C}",
          "explanation": "The exponential vanishes, so the coffee can never fall below the room temperature it is heading towards.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "Check consistency of the answers",
          "workingLatex": "\\theta(10)\\approx 46 > 40,\\ \\text{so } 40^{\\circ}\\text{C at } t\\approx 12.8 > 10\\ \\checkmark",
          "explanation": "The coffee is still above $40^{\\circ}\\text{C}$ at ten minutes, so reaching it a little later at $12.8$ minutes is fully consistent.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $A = 66,\\ k = \\tfrac{1}{4}\\ln\\tfrac{3}{2} \\approx 0.101$. (b) $\\theta(10) \\approx 46.0^{\\circ}\\text{C}$. (c) $t \\approx 12.8$ minutes. (d) As $t\\to\\infty,\\ \\theta\\to 22^{\\circ}\\text{C}$."
    }
  },
  {
    "id": "al.y1.pure.exp-modelling.q063",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Exponential modelling",
    "subtopicId": "al.y1.pure.exp-modelling",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "value",
    "tags": [
      "reduction-to-linear",
      "capacitor",
      "natural-log"
    ],
    "questionText": "A charged capacitor discharges so that its voltage $V$ (volts) at time $t$ (seconds) is modelled by $V = V_0 e^{-kt}$. Measured values of $V$ are plotted as $\\ln V$ against $t$, giving a straight line that passes through the points $(0,\\ 2.485)$ and $(5,\\ 0.485)$. (a) Find $V_0$ and $k$. (b) Interpret the gradient and the vertical intercept of the line in the context of the discharge. (c) Find the time for the voltage to fall to $2\\text{ V}$, and state the voltage approached for large $t$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Linearise the model by taking logarithms",
          "workingLatex": "V = V_0 e^{-kt} \\Rightarrow \\ln V = \\ln V_0 - kt",
          "explanation": "Taking $\\ln$ turns the exponential into a straight-line relationship, which is why plotting $\\ln V$ against $t$ gives a line.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Match the linear form to y = mx + c",
          "workingLatex": "y = \\ln V,\\ x = t:\\ \\text{gradient} = -k,\\ \\text{intercept} = \\ln V_0",
          "explanation": "Comparing term by term tells us exactly which model constant each graphical feature encodes.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find the gradient from the two points",
          "workingLatex": "m = \\dfrac{0.485 - 2.485}{5 - 0} = -0.4",
          "explanation": "The gradient is the change in $\\ln V$ divided by the change in $t$ between the given points.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Deduce k from the gradient",
          "workingLatex": "-k = -0.4 \\Rightarrow k = 0.4\\ \\text{s}^{-1}",
          "explanation": "Since the gradient equals $-k$, the decay constant is just its magnitude.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Read off the intercept",
          "workingLatex": "\\ln V_0 = 2.485",
          "explanation": "The line meets the vertical axis at $t=0$, where $\\ln V$ equals $\\ln V_0$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Solve for the initial voltage",
          "workingLatex": "V_0 = e^{2.485} \\approx 12.0\\ \\text{V}",
          "explanation": "Undoing the logarithm recovers the actual starting voltage from its log value.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Interpret the intercept in context",
          "workingLatex": "\\ln V_0 = 2.485 \\Rightarrow V_0 \\approx 12.0\\ \\text{V at } t=0",
          "explanation": "The intercept represents the log of the voltage at the instant the capacitor begins to discharge, namely its full charge of about $12$ V.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Interpret the gradient in context",
          "workingLatex": "\\text{gradient} = -k = -0.4\\ \\text{s}^{-1}",
          "explanation": "The gradient is the constant fractional rate of decay; a steeper negative slope would mean the capacitor discharges faster.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the model explicitly",
          "workingLatex": "V = 12e^{-0.4t}",
          "explanation": "Collecting the constants gives a usable equation for any later voltage or time.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Set up the equation for V = 2",
          "workingLatex": "2 = 12e^{-0.4t}",
          "explanation": "We solve the model for the target voltage to find when it is reached.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Isolate the exponential",
          "workingLatex": "e^{-0.4t} = \\tfrac{1}{6}",
          "explanation": "Dividing by the initial voltage leaves the exponential alone, ready for logarithms.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Take logarithms",
          "workingLatex": "-0.4t = \\ln\\tfrac{1}{6} = -\\ln 6 \\approx -1.7918",
          "explanation": "The logarithm of a fraction below $1$ is negative, matching the falling voltage.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Solve for the time",
          "workingLatex": "t = \\dfrac{1.7918}{0.4} \\approx 4.48\\ \\text{s}",
          "explanation": "Dividing removes $k$ and gives the time in seconds.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "State and interpret the long-term behaviour",
          "workingLatex": "t\\to\\infty:\\ V = 12e^{-0.4t}\\to 0",
          "explanation": "The voltage decays towards zero, meaning the capacitor eventually fully discharges, which fits real behaviour.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $V_0 \\approx 12.0\\text{ V},\\ k = 0.4\\text{ s}^{-1}$. (b) The intercept $2.485$ is $\\ln V_0$, so the initial voltage is $e^{2.485}\\approx 12\\text{ V}$; the gradient $-0.4$ is $-k$, the constant fractional rate of discharge. (c) $t \\approx 4.48\\text{ s}$; as $t\\to\\infty,\\ V\\to 0\\text{ V}$ (fully discharged)."
    }
  },
  {
    "id": "al.y1.pure.exp-modelling.q064",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Exponential modelling",
    "subtopicId": "al.y1.pure.exp-modelling",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "value",
    "tags": [
      "reduction-to-linear",
      "atmospheric-pressure",
      "natural-log"
    ],
    "questionText": "Atmospheric pressure $P$ (in kPa) is modelled in terms of altitude $h$ (in km) by $P = P_0 e^{-kh}$. Data are plotted as $\\ln P$ against $h$, giving a straight line through the points $(0,\\ 4.605)$ and $(8,\\ 3.605)$. (a) Find $P_0$ and $k$. (b) Interpret the gradient and the vertical intercept in context. (c) Find the altitude at which the pressure falls to $40\\text{ kPa}$, and comment on the model's prediction as $h$ increases without bound.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Linearise the model",
          "workingLatex": "P = P_0 e^{-kh} \\Rightarrow \\ln P = \\ln P_0 - kh",
          "explanation": "Taking logarithms converts the multiplicative exponential model into a straight line in $h$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Match to the straight-line form",
          "workingLatex": "y = \\ln P,\\ x = h:\\ \\text{gradient} = -k,\\ \\text{intercept} = \\ln P_0",
          "explanation": "Identifying each part of $y = mx + c$ shows which physical constant the slope and intercept carry.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compute the gradient",
          "workingLatex": "m = \\dfrac{3.605 - 4.605}{8 - 0} = -0.125",
          "explanation": "The gradient is the drop in $\\ln P$ per kilometre of altitude between the two plotted points.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find k",
          "workingLatex": "-k = -0.125 \\Rightarrow k = 0.125\\ \\text{km}^{-1}",
          "explanation": "Because the gradient equals $-k$, the decay constant is its magnitude.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Read the intercept",
          "workingLatex": "\\ln P_0 = 4.605",
          "explanation": "At $h=0$ the value of $\\ln P$ is $\\ln P_0$, so the intercept is the log of sea-level pressure.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Solve for the sea-level pressure",
          "workingLatex": "P_0 = e^{4.605} \\approx 100\\ \\text{kPa}",
          "explanation": "Exponentiating recovers the actual pressure at ground level.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Interpret the intercept",
          "workingLatex": "P_0 \\approx 100\\ \\text{kPa at } h = 0",
          "explanation": "The intercept represents the pressure at sea level, about $100$ kPa, before any altitude reduces it.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Interpret the gradient",
          "workingLatex": "\\text{gradient} = -k = -0.125\\ \\text{km}^{-1}",
          "explanation": "The gradient is the constant fractional rate at which pressure falls with height; each kilometre multiplies the pressure by $e^{-0.125}\\approx 0.88$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Write the model",
          "workingLatex": "P = 100e^{-0.125h}",
          "explanation": "The explicit equation lets us solve for any altitude or pressure.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Set up the equation for P = 40",
          "workingLatex": "40 = 100e^{-0.125h}",
          "explanation": "Substituting the target pressure gives an equation for the required altitude.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Isolate the exponential",
          "workingLatex": "e^{-0.125h} = 0.4",
          "explanation": "Dividing by the sea-level pressure leaves the exponential alone.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Take logarithms",
          "workingLatex": "-0.125h = \\ln 0.4 \\approx -0.9163",
          "explanation": "The logarithm of $0.4$ is negative because the pressure has fallen below its starting value.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Solve for the altitude",
          "workingLatex": "h = \\dfrac{0.9163}{0.125} \\approx 7.33\\ \\text{km}",
          "explanation": "Dividing by $k$ gives the height at which pressure is $40$ kPa.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Comment on the limiting behaviour and validity",
          "workingLatex": "h\\to\\infty:\\ P = 100e^{-0.125h}\\to 0",
          "explanation": "The model predicts pressure approaching but never reaching zero; this idealises reality, since real atmospheric temperature and composition vary with height, so the fit is only reliable over a limited altitude range.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $P_0 \\approx 100\\text{ kPa},\\ k = 0.125\\text{ km}^{-1}$. (b) The intercept $4.605 = \\ln P_0$ gives sea-level pressure $\\approx 100\\text{ kPa}$; the gradient $-0.125 = -k$ is the constant fractional fall in pressure per km. (c) $h \\approx 7.33\\text{ km}$; as $h\\to\\infty,\\ P\\to 0$ but never reaches it, and the model is only realistic over a limited altitude range."
    }
  },
  {
    "id": "al.y1.pure.exp-modelling.q065",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Exponential modelling",
    "subtopicId": "al.y1.pure.exp-modelling",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "value",
    "tags": [
      "newtons-law-cooling",
      "simultaneous",
      "natural-log"
    ],
    "questionText": "A metal component is removed from a furnace and cools in a workshop held at $20^{\\circ}\\text{C}$, following $\\theta = 20 + Ae^{-kt}$, where $\\theta$ is in $^{\\circ}\\text{C}$ and $t$ is in minutes. When $t = 4$ its temperature is $100^{\\circ}\\text{C}$, and when $t = 8$ it is $60^{\\circ}\\text{C}$. (a) Find $A$ and $k$. (b) Find the temperature of the component at the instant it left the furnace. (c) Find the time taken for it to cool to $30^{\\circ}\\text{C}$, and state the temperature approached for large $t$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the model and ambient temperature",
          "workingLatex": "\\theta = 20 + Ae^{-kt},\\quad \\theta_s = 20^{\\circ}\\text{C}",
          "explanation": "Neither reading is taken at $t=0$, so both $A$ and $k$ are unknown and we will need two equations.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Form the first equation from t = 4",
          "workingLatex": "t=4:\\ 100 = 20 + Ae^{-4k} \\Rightarrow Ae^{-4k} = 80",
          "explanation": "Subtracting the ambient temperature isolates the exponential part for the first data point.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Form the second equation from t = 8",
          "workingLatex": "t=8:\\ 60 = 20 + Ae^{-8k} \\Rightarrow Ae^{-8k} = 40",
          "explanation": "Doing the same at the second reading gives a matching equation, setting up a solvable pair.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Divide the equations to eliminate A",
          "workingLatex": "\\dfrac{Ae^{-8k}}{Ae^{-4k}} = \\dfrac{40}{80} \\Rightarrow e^{-4k} = \\tfrac{1}{2}",
          "explanation": "Dividing cancels the unknown $A$ and, using laws of indices, leaves a single exponential in $k$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Take logarithms to find k",
          "workingLatex": "-4k = \\ln\\tfrac{1}{2} = -\\ln 2 \\Rightarrow k = \\tfrac{1}{4}\\ln 2 \\approx 0.1733",
          "explanation": "The logarithm releases $k$; dividing by $4$ gives a positive cooling constant.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute back to find A",
          "workingLatex": "Ae^{-4k} = 80,\\ e^{-4k} = \\tfrac{1}{2} \\Rightarrow A = 160",
          "explanation": "With $e^{-4k}$ now known, the first equation gives $A$ directly.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Write the complete model",
          "workingLatex": "\\theta = 20 + 160e^{-0.1733t}",
          "explanation": "Both constants are found, so the model can be used at any time, including $t=0$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Find the temperature leaving the furnace",
          "workingLatex": "t=0:\\ \\theta = 20 + 160e^{0} = 180^{\\circ}\\text{C}",
          "explanation": "Setting $t=0$ recovers the initial temperature, the excess $160$ above the workshop plus the ambient $20$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Set up the equation for cooling to 30 degrees",
          "workingLatex": "30 = 20 + 160e^{-kt}",
          "explanation": "Substituting the target temperature gives an equation for the required time.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Isolate the exponential",
          "workingLatex": "160e^{-kt} = 10 \\Rightarrow e^{-kt} = \\tfrac{1}{16}",
          "explanation": "Stripping the offset and coefficient leaves a clean exponential to take logs of.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Take logarithms",
          "workingLatex": "-kt = \\ln\\tfrac{1}{16} = -\\ln 16 \\approx -2.7726",
          "explanation": "The small fraction gives a negative log, which cancels the negative $-k$ to leave a positive time.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Solve for the time",
          "workingLatex": "t = \\dfrac{2.7726}{0.1733} = 16\\ \\text{minutes}",
          "explanation": "Since $\\ln 16 = 4\\ln 2$ and $k = \\tfrac{1}{4}\\ln 2$, the answer works out to exactly $16$ minutes.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "State the long-term limit",
          "workingLatex": "t\\to\\infty:\\ \\theta\\to 20^{\\circ}\\text{C}",
          "explanation": "The exponential decays to zero, so the component can cool no further than the workshop temperature.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Check the model against a given reading",
          "workingLatex": "\\theta(8) = 20 + 160e^{-8k} = 20 + 160(0.25) = 60^{\\circ}\\text{C}\\ \\checkmark",
          "explanation": "Recovering the original $60^{\\circ}\\text{C}$ at $t=8$ confirms the constants are correct.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $A = 160,\\ k = \\tfrac{1}{4}\\ln 2 \\approx 0.173$. (b) The component left the furnace at $180^{\\circ}\\text{C}$. (c) It reaches $30^{\\circ}\\text{C}$ after exactly $16$ minutes; as $t\\to\\infty,\\ \\theta\\to 20^{\\circ}\\text{C}$."
    }
  },
  {
    "id": "al.y1.pure.exp-modelling.q066",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Exponential modelling",
    "subtopicId": "al.y1.pure.exp-modelling",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "value",
    "tags": [
      "competing-exponentials",
      "population",
      "natural-log"
    ],
    "questionText": "In a culture, the number of bacteria of strain $A$ is modelled by $N_A = 500e^{0.08t}$ and of strain $B$ by $N_B = 2000e^{-0.05t}$, where $t$ is measured in hours. (a) Find the time at which the two strains have equal numbers. (b) Find that common number of bacteria. (c) Describe the long-term behaviour of each strain and state which eventually dominates.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Compare the two starting populations",
          "workingLatex": "N_A(0) = 500,\\quad N_B(0) = 2000",
          "explanation": "At $t=0$ strain $B$ is four times more numerous, but its negative exponent means it is declining while strain $A$ grows.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Set the two models equal",
          "workingLatex": "500e^{0.08t} = 2000e^{-0.05t}",
          "explanation": "The strains are equal in number exactly when their two expressions match, so we equate them.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Divide both sides by 500",
          "workingLatex": "e^{0.08t} = 4e^{-0.05t}",
          "explanation": "Reducing the numerical coefficients keeps the algebra clean before collecting the exponentials.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Collect the exponentials using index laws",
          "workingLatex": "e^{0.08t}\\cdot e^{0.05t} = 4 \\Rightarrow e^{0.13t} = 4",
          "explanation": "Multiplying by $e^{0.05t}$ combines the two powers into one, since adding exponents multiplies exponentials.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Take logarithms",
          "workingLatex": "0.13t = \\ln 4 \\approx 1.3863",
          "explanation": "Taking $\\ln$ of both sides releases $t$ from the exponent.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Solve for the time",
          "workingLatex": "t = \\dfrac{1.3863}{0.13} \\approx 10.7\\ \\text{hours}",
          "explanation": "Dividing by the combined rate gives the crossover time in hours.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Substitute to find the common population",
          "workingLatex": "N_A = 500e^{0.08\\times 10.66}",
          "explanation": "Either model gives the same value at the crossover, so we substitute back into strain $A$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Evaluate the exponential",
          "workingLatex": "e^{0.8531} \\approx 2.347",
          "explanation": "Computing the exponent then the exponential keeps rounding under control.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Find the common number",
          "workingLatex": "N_A \\approx 500(2.347) \\approx 1173",
          "explanation": "This is the size each strain reaches at the moment they are equal.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Check with the other model",
          "workingLatex": "N_B = 2000e^{-0.05\\times 10.66} \\approx 2000(0.5868) \\approx 1173\\ \\checkmark",
          "explanation": "Both models agreeing confirms the crossover value is correct.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Describe the behaviour before and after crossover",
          "workingLatex": "t < 10.7:\\ N_B > N_A;\\quad t > 10.7:\\ N_A > N_B",
          "explanation": "The rising and falling curves swap over exactly at the crossover time.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "State the long-term limit of each strain",
          "workingLatex": "t\\to\\infty:\\ N_A\\to\\infty,\\quad N_B\\to 0",
          "explanation": "The growing exponential increases without bound while the decaying one vanishes.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Conclude which strain dominates and comment",
          "workingLatex": "\\text{Strain } A \\text{ dominates for large } t",
          "explanation": "Strain $A$ eventually overwhelms $B$; in reality limited nutrients would cap $A$'s growth, so the unbounded prediction is only valid in the short term.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $t = \\dfrac{\\ln 4}{0.13} \\approx 10.7$ hours. (b) Each strain numbers about $1173$ bacteria. (c) As $t\\to\\infty,\\ N_A\\to\\infty$ (unbounded growth) and $N_B\\to 0$ (dies out), so strain $A$ dominates in the long run, though real resource limits make the unbounded growth unrealistic."
    }
  },
  {
    "id": "al.y1.pure.exp-modelling.q067",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Exponential modelling",
    "subtopicId": "al.y1.pure.exp-modelling",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "value",
    "tags": [
      "newtons-law-cooling",
      "unknown-ambient",
      "natural-log"
    ],
    "questionText": "A hot liquid cools according to $\\theta = \\theta_s + Ae^{-kt}$, where $\\theta_s$ is the unknown constant room temperature, $\\theta$ is in $^{\\circ}\\text{C}$ and $t$ is in minutes. Three readings are taken at equal intervals: $\\theta = 80^{\\circ}\\text{C}$ at $t = 0$, $\\theta = 50^{\\circ}\\text{C}$ at $t = 10$, and $\\theta = 35^{\\circ}\\text{C}$ at $t = 20$. (a) Find the room temperature $\\theta_s$. (b) Find $A$ and $k$. (c) Predict the temperature at $t = 30$ and state the temperature approached for large $t$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write each reading in terms of the model",
          "workingLatex": "80 - \\theta_s = A,\\ \\ 50 - \\theta_s = Ae^{-10k},\\ \\ 35 - \\theta_s = Ae^{-20k}",
          "explanation": "Subtracting the unknown ambient temperature from each reading isolates the three exponential values.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recognise a geometric relationship",
          "workingLatex": "\\text{ratio } = e^{-10k}\\ \\text{constant, so } (50-\\theta_s),(80-\\theta_s),(35-\\theta_s)\\text{ form a GP}",
          "explanation": "Because the times are equally spaced, each excess is the previous one multiplied by the same factor $e^{-10k}$, so the three excesses form a geometric progression.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Apply the geometric mean condition",
          "workingLatex": "(50-\\theta_s)^2 = (80-\\theta_s)(35-\\theta_s)",
          "explanation": "In a GP the middle term squared equals the product of its neighbours, which turns three unknown-ambient equations into one equation for $\\theta_s$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Expand both sides",
          "workingLatex": "2500 - 100\\theta_s + \\theta_s^2 = 2800 - 115\\theta_s + \\theta_s^2",
          "explanation": "Multiplying out prepares to cancel the quadratic terms.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Cancel and solve for the ambient temperature",
          "workingLatex": "15\\theta_s = 300 \\Rightarrow \\theta_s = 20^{\\circ}\\text{C}",
          "explanation": "The $\\theta_s^2$ terms cancel, leaving a simple linear equation for the room temperature.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find A from the first reading",
          "workingLatex": "A = 80 - \\theta_s = 80 - 20 = 60",
          "explanation": "With $\\theta_s$ known, the $t=0$ excess gives $A$ immediately.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Form an equation for k",
          "workingLatex": "50 - 20 = 60e^{-10k} \\Rightarrow e^{-10k} = \\tfrac{30}{60} = \\tfrac{1}{2}",
          "explanation": "Using the second reading with $A$ and $\\theta_s$ known isolates the exponential in $k$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Take logarithms to find k",
          "workingLatex": "-10k = \\ln\\tfrac{1}{2} = -\\ln 2 \\Rightarrow k = \\tfrac{1}{10}\\ln 2 \\approx 0.0693",
          "explanation": "The logarithm frees $k$, and dividing by $10$ gives the cooling constant.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the complete model",
          "workingLatex": "\\theta = 20 + 60e^{-0.0693t}",
          "explanation": "All three constants are now fixed, allowing prediction at any time.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Set up the prediction at t = 30",
          "workingLatex": "\\theta(30) = 20 + 60e^{-0.0693\\times 30}",
          "explanation": "Substituting $t=30$ into the finished model gives the required temperature.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Simplify the exponential using index laws",
          "workingLatex": "e^{-30k} = (e^{-10k})^3 = (\\tfrac{1}{2})^3 = \\tfrac{1}{8}",
          "explanation": "Since $e^{-10k}=\\tfrac{1}{2}$, the value at $t=30$ is just that halving applied three times.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Compute the predicted temperature",
          "workingLatex": "\\theta(30) = 20 + 60\\cdot\\tfrac{1}{8} = 20 + 7.5 = 27.5^{\\circ}\\text{C}",
          "explanation": "The neat fraction makes the prediction exact rather than approximate.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Check the model against the t = 20 reading",
          "workingLatex": "\\theta(20) = 20 + 60(\\tfrac{1}{2})^2 = 20 + 15 = 35^{\\circ}\\text{C}\\ \\checkmark",
          "explanation": "Recovering the given $35^{\\circ}\\text{C}$ confirms all three constants are consistent.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "State the long-term limit and interpret",
          "workingLatex": "t\\to\\infty:\\ \\theta\\to 20^{\\circ}\\text{C}",
          "explanation": "The liquid cools towards the room temperature we deduced, so the limit correctly equals $\\theta_s$.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $\\theta_s = 20^{\\circ}\\text{C}$. (b) $A = 60,\\ k = \\tfrac{1}{10}\\ln 2 \\approx 0.0693$. (c) $\\theta(30) = 27.5^{\\circ}\\text{C}$; as $t\\to\\infty,\\ \\theta\\to 20^{\\circ}\\text{C}$, the room temperature."
    }
  },
  {
    "id": "al.y1.pure.exp-modelling.q068",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Exponential modelling",
    "subtopicId": "al.y1.pure.exp-modelling",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "value",
    "tags": [
      "competing-exponentials",
      "radioactive-decay",
      "natural-log"
    ],
    "questionText": "A sample contains two radioactive isotopes. The mass of isotope $P$ is modelled by $m_P = 30e^{-0.05t}$ grams and the mass of isotope $Q$ by $m_Q = 80e^{-0.15t}$ grams, where $t$ is in days. (a) Find the time at which the two isotopes have equal mass. (b) Find that common mass. (c) State the long-term behaviour of each mass and explain which isotope eventually makes up the greater share of the sample.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Compare the two isotopes initially",
          "workingLatex": "m_P(0) = 30,\\ m_Q(0) = 80,\\ \\text{but } k_Q = 0.15 > k_P = 0.05",
          "explanation": "Isotope $Q$ starts heavier but decays three times faster, so $P$ can overtake it later.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Set the masses equal",
          "workingLatex": "30e^{-0.05t} = 80e^{-0.15t}",
          "explanation": "Equal mass occurs exactly where the two decay expressions coincide.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Divide both sides by 30",
          "workingLatex": "e^{-0.05t} = \\tfrac{8}{3}e^{-0.15t}",
          "explanation": "Simplifying the coefficients first makes it easier to combine the exponentials.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Collect the exponentials",
          "workingLatex": "e^{-0.05t}\\cdot e^{0.15t} = \\tfrac{8}{3} \\Rightarrow e^{0.10t} = \\tfrac{8}{3}",
          "explanation": "Multiplying by $e^{0.15t}$ merges the two powers, since exponents add.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Take logarithms",
          "workingLatex": "0.10t = \\ln\\tfrac{8}{3} \\approx 0.9808",
          "explanation": "Taking $\\ln$ brings the unknown $t$ down from the exponent.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Solve for the time",
          "workingLatex": "t = \\dfrac{0.9808}{0.10} \\approx 9.81\\ \\text{days}",
          "explanation": "Dividing by the combined decay rate gives the day on which the masses are equal.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Substitute to find the common mass",
          "workingLatex": "m_P = 30e^{-0.05\\times 9.808}",
          "explanation": "Either model gives the shared mass, so we use $P$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Evaluate",
          "workingLatex": "e^{-0.4904} \\approx 0.6124 \\Rightarrow m_P \\approx 30(0.6124) \\approx 18.4\\ \\text{g}",
          "explanation": "Working the exponent then the exponential avoids compounding rounding errors.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Check using the other isotope",
          "workingLatex": "m_Q = 80e^{-0.15\\times 9.808} \\approx 80(0.2296) \\approx 18.4\\ \\text{g}\\ \\checkmark",
          "explanation": "Both models agreeing confirms the common mass is correct.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Describe behaviour before and after the crossover",
          "workingLatex": "t < 9.81:\\ m_Q > m_P;\\quad t > 9.81:\\ m_P > m_Q",
          "explanation": "The faster-decaying isotope falls below the slower one once enough time has passed.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "State the long-term limits",
          "workingLatex": "t\\to\\infty:\\ m_P\\to 0,\\quad m_Q\\to 0",
          "explanation": "Both exponentials decay, so eventually almost none of either isotope remains.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Compare the ratio for large t",
          "workingLatex": "\\dfrac{m_P}{m_Q} = \\tfrac{30}{80}e^{0.10t} \\to \\infty",
          "explanation": "Their ratio grows without bound, so although both shrink, $P$ shrinks far more slowly.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Interpret which isotope dominates",
          "workingLatex": "\\text{Isotope } P \\text{ forms the greater share for large } t",
          "explanation": "Because $P$ has the smaller decay constant it persists longer, so it makes up almost the entire remaining sample as time goes on.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $t = \\dfrac{\\ln(8/3)}{0.10} \\approx 9.81$ days. (b) Common mass $\\approx 18.4$ g. (c) As $t\\to\\infty$ both $m_P\\to 0$ and $m_Q\\to 0$, but since $P$ decays more slowly its ratio to $Q$ grows without bound, so isotope $P$ eventually makes up the greater share of the sample."
    }
  },
  {
    "id": "al.y1.pure.exp-modelling.q069",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Exponential modelling",
    "subtopicId": "al.y1.pure.exp-modelling",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "value",
    "tags": [
      "reduction-to-linear",
      "logarithms",
      "growth-model"
    ],
    "questionText": "A start-up's annual revenue $R$ (in thousands of pounds) is modelled by $R = ab^t$, where $t$ is the number of years since launch. Values of $R$ are plotted as $\\log_{10} R$ against $t$, giving a straight line with gradient $0.08$ and vertical intercept $1.5$. (a) Find $a$ and $b$. (b) Interpret $a$ and $b$ in context. (c) Predict the revenue when $t = 10$, and comment on the validity of the model for large $t$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Linearise the model with base-10 logarithms",
          "workingLatex": "R = ab^t \\Rightarrow \\log_{10}R = \\log_{10}a + (\\log_{10}b)\\,t",
          "explanation": "Taking $\\log_{10}$ turns the product and power into a sum, giving a straight line in $t$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Match to the straight-line form",
          "workingLatex": "y = \\log_{10}R,\\ x = t:\\ \\text{gradient} = \\log_{10}b,\\ \\text{intercept} = \\log_{10}a",
          "explanation": "Comparing with $y = mx + c$ shows the intercept carries $a$ and the gradient carries $b$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Use the intercept to find a",
          "workingLatex": "\\log_{10}a = 1.5 \\Rightarrow a = 10^{1.5} \\approx 31.62",
          "explanation": "The intercept is $\\log_{10}a$, so raising $10$ to that power recovers $a$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Use the gradient to find b",
          "workingLatex": "\\log_{10}b = 0.08 \\Rightarrow b = 10^{0.08} \\approx 1.2023",
          "explanation": "Similarly, exponentiating the gradient recovers the growth factor $b$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Interpret a in context",
          "workingLatex": "a = R(0) \\approx 31.62\\ (\\pounds 31{,}600)",
          "explanation": "At $t=0$ the model gives $R=a$, so $a$ is the revenue in the launch year, about $\\pounds31{,}600$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Interpret b in context",
          "workingLatex": "b \\approx 1.2023",
          "explanation": "Each year multiplies the revenue by about $1.20$, an annual growth of roughly $20\\%$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Write the model explicitly",
          "workingLatex": "R = 31.62\\times 1.2023^{\\,t}",
          "explanation": "With both constants found the model can predict revenue for any year.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Set up the prediction at t = 10 in log form",
          "workingLatex": "\\log_{10}R = 1.5 + 0.08\\times 10 = 2.3",
          "explanation": "Using the linear form avoids raising an awkward decimal to a power directly.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Undo the logarithm",
          "workingLatex": "R = 10^{2.3} \\approx 199.5",
          "explanation": "Exponentiating recovers the revenue from its log value.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the prediction in context",
          "workingLatex": "R(10) \\approx 199.5\\ (\\pounds 199{,}500)",
          "explanation": "The predicted revenue after ten years is about $\\pounds199{,}500$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Check the model at t = 0",
          "workingLatex": "R(0) = 10^{1.5} \\approx 31.6\\ \\checkmark",
          "explanation": "The launch-year value matches $a$, confirming the constants are consistent.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Note the growth rate for large t",
          "workingLatex": "t\\to\\infty:\\ R = 31.62\\times 1.2023^{\\,t}\\to\\infty",
          "explanation": "With $b>1$ the model grows without limit, doubling every few years.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Comment on validity",
          "workingLatex": "\\text{Unbounded growth is unrealistic for large } t",
          "explanation": "Real revenue is eventually capped by market size and competition, so the exponential model is only reliable for the early years and overestimates the far future.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $a = 10^{1.5} \\approx 31.6,\\ b = 10^{0.08} \\approx 1.20$. (b) $a$ is the launch-year revenue $\\approx\\pounds31{,}600$; $b\\approx1.20$ is the annual multiplier, about $20\\%$ growth per year. (c) $R(10) = 10^{2.3} \\approx 199.5$, i.e. $\\approx\\pounds199{,}500$; as $t\\to\\infty,\\ R\\to\\infty$, which is unrealistic since real revenue is limited by market saturation."
    }
  },
  {
    "id": "al.y1.pure.exp-modelling.q070",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Exponential modelling",
    "subtopicId": "al.y1.pure.exp-modelling",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "value",
    "tags": [
      "newtons-law-warming",
      "simultaneous",
      "natural-log"
    ],
    "questionText": "A cold drink is taken from a fridge into a room at $24^{\\circ}\\text{C}$ and warms up according to $\\theta = 24 - Ae^{-kt}$, where $\\theta$ is in $^{\\circ}\\text{C}$ and $t$ is in minutes. Initially the drink is at $4^{\\circ}\\text{C}$, and after $10$ minutes it is $12^{\\circ}\\text{C}$. (a) Find $A$ and $k$. (b) Find the temperature after $25$ minutes. (c) Find the time taken for the drink to reach $20^{\\circ}\\text{C}$, and state the temperature approached for large $t$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Interpret the minus sign in the model",
          "workingLatex": "\\theta = 24 - Ae^{-kt},\\quad \\theta_s = 24^{\\circ}\\text{C}",
          "explanation": "The drink starts below the room, so the term $Ae^{-kt}$ is subtracted and shrinks as the drink warms towards $24^{\\circ}\\text{C}$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Apply the initial condition to find A",
          "workingLatex": "t=0:\\ 4 = 24 - Ae^{0} \\Rightarrow A = 20",
          "explanation": "At $t=0$ the exponential equals $1$, so $A$ is the initial gap below the room, $24-4$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write the model with A known",
          "workingLatex": "\\theta = 24 - 20e^{-kt}",
          "explanation": "Fixing $A$ leaves only $k$ to be found from the second reading.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply the reading at t = 10",
          "workingLatex": "t=10:\\ 12 = 24 - 20e^{-10k}",
          "explanation": "Substituting the ten-minute temperature gives an equation in $k$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Isolate the exponential",
          "workingLatex": "20e^{-10k} = 12 \\Rightarrow e^{-10k} = 0.6",
          "explanation": "Rearranging leaves the exponential alone; note the excess below room has fallen from $20$ to $12$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Take natural logarithms",
          "workingLatex": "-10k = \\ln 0.6 \\approx -0.5108",
          "explanation": "The log of a value below $1$ is negative, which will give a positive $k$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Solve for k",
          "workingLatex": "k \\approx 0.0511",
          "explanation": "A positive $k$ means the gap to room temperature keeps shrinking, i.e. the drink is warming.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Set up the temperature at t = 25",
          "workingLatex": "\\theta(25) = 24 - 20e^{-0.0511\\times 25}",
          "explanation": "Prediction is a direct substitution once both constants are known.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Evaluate the exponential",
          "workingLatex": "e^{-1.2771} \\approx 0.2789",
          "explanation": "Computing the exponent first keeps the arithmetic accurate.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Complete part (b)",
          "workingLatex": "\\theta(25) = 24 - 20(0.2789) \\approx 18.4^{\\circ}\\text{C}",
          "explanation": "The drink has warmed substantially but is still short of the room temperature.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Set up the equation for reaching 20 degrees",
          "workingLatex": "20 = 24 - 20e^{-kt} \\Rightarrow 20e^{-kt} = 4",
          "explanation": "Substituting the target temperature and rearranging isolates the exponential.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Simplify and take logarithms",
          "workingLatex": "e^{-kt} = 0.2 \\Rightarrow -kt = \\ln 0.2 \\approx -1.6094",
          "explanation": "Dividing gives a clean value, and its logarithm frees the time from the exponent.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Solve for the time",
          "workingLatex": "t = \\dfrac{1.6094}{0.0511} \\approx 31.5\\ \\text{minutes}",
          "explanation": "Dividing the two negatives leaves a positive time in minutes.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "State and interpret the long-term limit",
          "workingLatex": "t\\to\\infty:\\ e^{-kt}\\to 0,\\ \\theta\\to 24^{\\circ}\\text{C}",
          "explanation": "The subtracted term vanishes, so the drink can warm no further than the room temperature it approaches.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "Check the model against the given reading",
          "workingLatex": "\\theta(10) = 24 - 20(0.6) = 12^{\\circ}\\text{C}\\ \\checkmark",
          "explanation": "Recovering the original $12^{\\circ}\\text{C}$ at ten minutes confirms $A$ and $k$ are correct.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $A = 20,\\ k = -\\tfrac{1}{10}\\ln 0.6 \\approx 0.0511$. (b) $\\theta(25) \\approx 18.4^{\\circ}\\text{C}$. (c) The drink reaches $20^{\\circ}\\text{C}$ after $t \\approx 31.5$ minutes; as $t\\to\\infty,\\ \\theta\\to 24^{\\circ}\\text{C}$, the room temperature."
    }
  }
];
