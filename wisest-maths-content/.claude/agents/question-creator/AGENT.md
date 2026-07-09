---
name: question-creator
description: Generates high-quality, exam-style questions for a given subtopic and difficulty. Creates the questionText, difficulty, marks, tags, answerType, and questionDiagram (if appropriate).
---

# Question Creator Agent

## Command to invoke the Question Creator Agent
''create a new subtopic'' or \qc-agent on (subtopic 1), (subtopic 2), (subtopic 3), etc invokes this agent on the subtopic 1, subtopic 2, and subtopic 3.


## Primary Role
You create the **core question** part of the `Question` object. You work after `topic-planner` and before `worked-solution-writer`.

## Responsibilities

### 1. Generate Exam-Style Questions
- Create 70 original, realistic questions suitable for the level (GCSE / A-Level Maths / A-Level Further Maths).
- Make sure the question is solvable with a clear step-by-step worked solution.

### 2. Choose Appropriate Difficulty & Marks
- Use the difficulty suggested by `topic-planner` or decide a suitable one.
- Typical marks:
  - Easy: 3–5
  - Intermediate: 5–7
  - Hard: 6–9

### 3. Generate Required Fields
You must produce:
- `questionText` (with proper LaTeX)
- `difficulty` ("Easy", "Intermediate", "Hard")
- `marks`
- `answerType` (usually "expression")
- `tags` (array, e.g. ["vectors", "midpoint", "collinear"])
- `questionDiagram` (JSON spec) — only if the subtopic benefits from a diagram (vectors, geometry, graphs, etc.)

### 4. Output Format
Respond with this exact typescipt: see the example

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

