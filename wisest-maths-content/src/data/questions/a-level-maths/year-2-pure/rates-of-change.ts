import { Question } from "@/lib/types";

export const questions: Question[] = [
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Rates of change",
    "subtopicId": "al.y2.pure.connected-rates",
    "questionDiagram": null,
    "id": "al.y2.pure.connected-rates.q001",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "exact",
    "tags": [
      "rates of change",
      "chain rule",
      "sphere",
      "volume"
    ],
    "questionText": "A spherical balloon is being inflated. When the radius is $3$ cm, the radius is increasing at $0.5$ cm/s. Find the rate at which the volume is increasing at this instant.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write the volume formula",
          "workingLatex": "V = \\dfrac{4}{3}\\pi r^{3}",
          "explanation": "The volume of a sphere depends on its radius, so we start with the standard formula linking $V$ and $r$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate with respect to time",
          "workingLatex": "\\dfrac{dV}{dt} = 4\\pi r^{2}\\dfrac{dr}{dt}",
          "explanation": "Differentiate both sides with respect to $t$ using the chain rule: the derivative of $r^{3}$ brings down $3r^{2}$, and we multiply by $\\dfrac{dr}{dt}$ because $r$ changes with time.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute the known values",
          "workingLatex": "\\dfrac{dV}{dt} = 4\\pi (3)^{2} \\times 0.5",
          "explanation": "Insert $r = 3$ cm and $\\dfrac{dr}{dt} = 0.5$ cm/s into the connected-rates equation.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate",
          "workingLatex": "\\dfrac{dV}{dt} = 18\\pi",
          "explanation": "Carry out the arithmetic to obtain the rate at which the volume is changing.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Include units",
          "workingLatex": "\\dfrac{dV}{dt} = 18\\pi\\text{ cm}^{3}\\text{/s}",
          "explanation": "Volume rate has cubic units per second.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the answer",
          "workingLatex": "\\dfrac{dV}{dt} = 18\\pi\\text{ cm}^{3}\\text{/s}",
          "explanation": "This is how fast the volume is increasing at the instant when the radius is the given value.",
          "diagram": null
        }
      ],
      "finalAnswer": "The volume is increasing at $\\dfrac{dV}{dt} = 18\\pi$ cm$^{3}$/s."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Rates of change",
    "subtopicId": "al.y2.pure.connected-rates",
    "questionDiagram": null,
    "id": "al.y2.pure.connected-rates.q002",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "exact",
    "tags": [
      "rates of change",
      "chain rule",
      "sphere",
      "volume"
    ],
    "questionText": "A spherical balloon is being inflated. When the radius is $5$ cm, the radius is increasing at $0.2$ cm/s. Find the rate at which the volume is increasing at this instant.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write the volume formula",
          "workingLatex": "V = \\dfrac{4}{3}\\pi r^{3}",
          "explanation": "The volume of a sphere depends on its radius, so we start with the standard formula linking $V$ and $r$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate with respect to time",
          "workingLatex": "\\dfrac{dV}{dt} = 4\\pi r^{2}\\dfrac{dr}{dt}",
          "explanation": "Differentiate both sides with respect to $t$ using the chain rule: the derivative of $r^{3}$ brings down $3r^{2}$, and we multiply by $\\dfrac{dr}{dt}$ because $r$ changes with time.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute the known values",
          "workingLatex": "\\dfrac{dV}{dt} = 4\\pi (5)^{2} \\times 0.2",
          "explanation": "Insert $r = 5$ cm and $\\dfrac{dr}{dt} = 0.2$ cm/s into the connected-rates equation.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate",
          "workingLatex": "\\dfrac{dV}{dt} = 20\\pi",
          "explanation": "Carry out the arithmetic to obtain the rate at which the volume is changing.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Include units",
          "workingLatex": "\\dfrac{dV}{dt} = 20\\pi\\text{ cm}^{3}\\text{/s}",
          "explanation": "Volume rate has cubic units per second.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the answer",
          "workingLatex": "\\dfrac{dV}{dt} = 20\\pi\\text{ cm}^{3}\\text{/s}",
          "explanation": "This is how fast the volume is increasing at the instant when the radius is the given value.",
          "diagram": null
        }
      ],
      "finalAnswer": "The volume is increasing at $\\dfrac{dV}{dt} = 20\\pi$ cm$^{3}$/s."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Rates of change",
    "subtopicId": "al.y2.pure.connected-rates",
    "questionDiagram": null,
    "id": "al.y2.pure.connected-rates.q003",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "exact",
    "tags": [
      "rates of change",
      "chain rule",
      "sphere",
      "volume"
    ],
    "questionText": "A spherical balloon is being inflated. When the radius is $4$ cm, the radius is increasing at $0.25$ cm/s. Find the rate at which the volume is increasing at this instant.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write the volume formula",
          "workingLatex": "V = \\dfrac{4}{3}\\pi r^{3}",
          "explanation": "The volume of a sphere depends on its radius, so we start with the standard formula linking $V$ and $r$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate with respect to time",
          "workingLatex": "\\dfrac{dV}{dt} = 4\\pi r^{2}\\dfrac{dr}{dt}",
          "explanation": "Differentiate both sides with respect to $t$ using the chain rule: the derivative of $r^{3}$ brings down $3r^{2}$, and we multiply by $\\dfrac{dr}{dt}$ because $r$ changes with time.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute the known values",
          "workingLatex": "\\dfrac{dV}{dt} = 4\\pi (4)^{2} \\times 0.25",
          "explanation": "Insert $r = 4$ cm and $\\dfrac{dr}{dt} = 0.25$ cm/s into the connected-rates equation.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate",
          "workingLatex": "\\dfrac{dV}{dt} = 4\\pi",
          "explanation": "Carry out the arithmetic to obtain the rate at which the volume is changing.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Include units",
          "workingLatex": "\\dfrac{dV}{dt} = 4\\pi\\text{ cm}^{3}\\text{/s}",
          "explanation": "Volume rate has cubic units per second.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the answer",
          "workingLatex": "\\dfrac{dV}{dt} = 4\\pi\\text{ cm}^{3}\\text{/s}",
          "explanation": "This is how fast the volume is increasing at the instant when the radius is the given value.",
          "diagram": null
        }
      ],
      "finalAnswer": "The volume is increasing at $\\dfrac{dV}{dt} = 4\\pi$ cm$^{3}$/s."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Rates of change",
    "subtopicId": "al.y2.pure.connected-rates",
    "questionDiagram": null,
    "id": "al.y2.pure.connected-rates.q004",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "exact",
    "tags": [
      "rates of change",
      "chain rule",
      "sphere",
      "volume"
    ],
    "questionText": "A spherical balloon is being inflated. When the radius is $6$ cm, the radius is increasing at $0.1$ cm/s. Find the rate at which the volume is increasing at this instant.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write the volume formula",
          "workingLatex": "V = \\dfrac{4}{3}\\pi r^{3}",
          "explanation": "The volume of a sphere depends on its radius, so we start with the standard formula linking $V$ and $r$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate with respect to time",
          "workingLatex": "\\dfrac{dV}{dt} = 4\\pi r^{2}\\dfrac{dr}{dt}",
          "explanation": "Differentiate both sides with respect to $t$ using the chain rule: the derivative of $r^{3}$ brings down $3r^{2}$, and we multiply by $\\dfrac{dr}{dt}$ because $r$ changes with time.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute the known values",
          "workingLatex": "\\dfrac{dV}{dt} = 4\\pi (6)^{2} \\times 0.1",
          "explanation": "Insert $r = 6$ cm and $\\dfrac{dr}{dt} = 0.1$ cm/s into the connected-rates equation.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate",
          "workingLatex": "\\dfrac{dV}{dt} = 14.4\\pi",
          "explanation": "Carry out the arithmetic to obtain the rate at which the volume is changing.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Include units",
          "workingLatex": "\\dfrac{dV}{dt} = 14.4\\pi\\text{ cm}^{3}\\text{/s}",
          "explanation": "Volume rate has cubic units per second.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the answer",
          "workingLatex": "\\dfrac{dV}{dt} = 14.4\\pi\\text{ cm}^{3}\\text{/s}",
          "explanation": "This is how fast the volume is increasing at the instant when the radius is the given value.",
          "diagram": null
        }
      ],
      "finalAnswer": "The volume is increasing at $\\dfrac{dV}{dt} = 14.4\\pi$ cm$^{3}$/s."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Rates of change",
    "subtopicId": "al.y2.pure.connected-rates",
    "questionDiagram": null,
    "id": "al.y2.pure.connected-rates.q005",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "exact",
    "tags": [
      "rates of change",
      "chain rule",
      "sphere",
      "volume"
    ],
    "questionText": "A spherical balloon is being inflated. When the radius is $2$ cm, the radius is increasing at $1$ cm/s. Find the rate at which the volume is increasing at this instant.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write the volume formula",
          "workingLatex": "V = \\dfrac{4}{3}\\pi r^{3}",
          "explanation": "The volume of a sphere depends on its radius, so we start with the standard formula linking $V$ and $r$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate with respect to time",
          "workingLatex": "\\dfrac{dV}{dt} = 4\\pi r^{2}\\dfrac{dr}{dt}",
          "explanation": "Differentiate both sides with respect to $t$ using the chain rule: the derivative of $r^{3}$ brings down $3r^{2}$, and we multiply by $\\dfrac{dr}{dt}$ because $r$ changes with time.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute the known values",
          "workingLatex": "\\dfrac{dV}{dt} = 4\\pi (2)^{2} \\times 1",
          "explanation": "Insert $r = 2$ cm and $\\dfrac{dr}{dt} = 1$ cm/s into the connected-rates equation.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate",
          "workingLatex": "\\dfrac{dV}{dt} = 16\\pi",
          "explanation": "Carry out the arithmetic to obtain the rate at which the volume is changing.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Include units",
          "workingLatex": "\\dfrac{dV}{dt} = 16\\pi\\text{ cm}^{3}\\text{/s}",
          "explanation": "Volume rate has cubic units per second.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the answer",
          "workingLatex": "\\dfrac{dV}{dt} = 16\\pi\\text{ cm}^{3}\\text{/s}",
          "explanation": "This is how fast the volume is increasing at the instant when the radius is the given value.",
          "diagram": null
        }
      ],
      "finalAnswer": "The volume is increasing at $\\dfrac{dV}{dt} = 16\\pi$ cm$^{3}$/s."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Rates of change",
    "subtopicId": "al.y2.pure.connected-rates",
    "questionDiagram": null,
    "id": "al.y2.pure.connected-rates.q006",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "exact",
    "tags": [
      "rates of change",
      "chain rule",
      "circle",
      "area"
    ],
    "questionText": "Oil spreads on water in a circular patch. When the radius is $4$ cm, the radius is increasing at $0.3$ cm/s. Find the rate at which the area is increasing.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write the area formula",
          "workingLatex": "A = \\pi r^{2}",
          "explanation": "The area of a circular oil patch depends on its radius.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate with respect to time",
          "workingLatex": "\\dfrac{dA}{dt} = 2\\pi r\\dfrac{dr}{dt}",
          "explanation": "By the chain rule, differentiating $r^{2}$ gives $2r\\dfrac{dr}{dt}$ when $r$ varies with time.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute known values",
          "workingLatex": "\\dfrac{dA}{dt} = 2\\pi (4)(0.3)",
          "explanation": "Use $r = 4$ cm and $\\dfrac{dr}{dt} = 0.3$ cm/s.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate",
          "workingLatex": "\\dfrac{dA}{dt} = 2.4\\pi",
          "explanation": "Multiply to find the rate of change of area.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State with units",
          "workingLatex": "\\dfrac{dA}{dt} = 2.4\\pi\\text{ cm}^{2}\\text{/s}",
          "explanation": "Area rate is measured in square units per second.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Interpret",
          "workingLatex": "\\dfrac{dA}{dt} = 2.4\\pi\\text{ cm}^{2}\\text{/s}",
          "explanation": "The patch is spreading at this rate when the radius reaches the stated value.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{dA}{dt} = 2.4\\pi$ cm$^{2}$/s."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Rates of change",
    "subtopicId": "al.y2.pure.connected-rates",
    "questionDiagram": null,
    "id": "al.y2.pure.connected-rates.q007",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "exact",
    "tags": [
      "rates of change",
      "chain rule",
      "circle",
      "area"
    ],
    "questionText": "Oil spreads on water in a circular patch. When the radius is $5$ cm, the radius is increasing at $0.5$ cm/s. Find the rate at which the area is increasing.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write the area formula",
          "workingLatex": "A = \\pi r^{2}",
          "explanation": "The area of a circular oil patch depends on its radius.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate with respect to time",
          "workingLatex": "\\dfrac{dA}{dt} = 2\\pi r\\dfrac{dr}{dt}",
          "explanation": "By the chain rule, differentiating $r^{2}$ gives $2r\\dfrac{dr}{dt}$ when $r$ varies with time.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute known values",
          "workingLatex": "\\dfrac{dA}{dt} = 2\\pi (5)(0.5)",
          "explanation": "Use $r = 5$ cm and $\\dfrac{dr}{dt} = 0.5$ cm/s.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate",
          "workingLatex": "\\dfrac{dA}{dt} = 5\\pi",
          "explanation": "Multiply to find the rate of change of area.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State with units",
          "workingLatex": "\\dfrac{dA}{dt} = 5\\pi\\text{ cm}^{2}\\text{/s}",
          "explanation": "Area rate is measured in square units per second.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Interpret",
          "workingLatex": "\\dfrac{dA}{dt} = 5\\pi\\text{ cm}^{2}\\text{/s}",
          "explanation": "The patch is spreading at this rate when the radius reaches the stated value.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{dA}{dt} = 5\\pi$ cm$^{2}$/s."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Rates of change",
    "subtopicId": "al.y2.pure.connected-rates",
    "questionDiagram": null,
    "id": "al.y2.pure.connected-rates.q008",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "exact",
    "tags": [
      "rates of change",
      "chain rule",
      "circle",
      "area"
    ],
    "questionText": "Oil spreads on water in a circular patch. When the radius is $3$ cm, the radius is increasing at $0.4$ cm/s. Find the rate at which the area is increasing.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write the area formula",
          "workingLatex": "A = \\pi r^{2}",
          "explanation": "The area of a circular oil patch depends on its radius.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate with respect to time",
          "workingLatex": "\\dfrac{dA}{dt} = 2\\pi r\\dfrac{dr}{dt}",
          "explanation": "By the chain rule, differentiating $r^{2}$ gives $2r\\dfrac{dr}{dt}$ when $r$ varies with time.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute known values",
          "workingLatex": "\\dfrac{dA}{dt} = 2\\pi (3)(0.4)",
          "explanation": "Use $r = 3$ cm and $\\dfrac{dr}{dt} = 0.4$ cm/s.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate",
          "workingLatex": "\\dfrac{dA}{dt} = 2.4\\pi",
          "explanation": "Multiply to find the rate of change of area.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State with units",
          "workingLatex": "\\dfrac{dA}{dt} = 2.4\\pi\\text{ cm}^{2}\\text{/s}",
          "explanation": "Area rate is measured in square units per second.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Interpret",
          "workingLatex": "\\dfrac{dA}{dt} = 2.4\\pi\\text{ cm}^{2}\\text{/s}",
          "explanation": "The patch is spreading at this rate when the radius reaches the stated value.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{dA}{dt} = 2.4\\pi$ cm$^{2}$/s."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Rates of change",
    "subtopicId": "al.y2.pure.connected-rates",
    "questionDiagram": null,
    "id": "al.y2.pure.connected-rates.q009",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "exact",
    "tags": [
      "rates of change",
      "chain rule",
      "circle",
      "area"
    ],
    "questionText": "Oil spreads on water in a circular patch. When the radius is $6$ cm, the radius is increasing at $0.2$ cm/s. Find the rate at which the area is increasing.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write the area formula",
          "workingLatex": "A = \\pi r^{2}",
          "explanation": "The area of a circular oil patch depends on its radius.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate with respect to time",
          "workingLatex": "\\dfrac{dA}{dt} = 2\\pi r\\dfrac{dr}{dt}",
          "explanation": "By the chain rule, differentiating $r^{2}$ gives $2r\\dfrac{dr}{dt}$ when $r$ varies with time.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute known values",
          "workingLatex": "\\dfrac{dA}{dt} = 2\\pi (6)(0.2)",
          "explanation": "Use $r = 6$ cm and $\\dfrac{dr}{dt} = 0.2$ cm/s.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate",
          "workingLatex": "\\dfrac{dA}{dt} = 2.4\\pi",
          "explanation": "Multiply to find the rate of change of area.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State with units",
          "workingLatex": "\\dfrac{dA}{dt} = 2.4\\pi\\text{ cm}^{2}\\text{/s}",
          "explanation": "Area rate is measured in square units per second.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Interpret",
          "workingLatex": "\\dfrac{dA}{dt} = 2.4\\pi\\text{ cm}^{2}\\text{/s}",
          "explanation": "The patch is spreading at this rate when the radius reaches the stated value.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{dA}{dt} = 2.4\\pi$ cm$^{2}$/s."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Rates of change",
    "subtopicId": "al.y2.pure.connected-rates",
    "questionDiagram": null,
    "id": "al.y2.pure.connected-rates.q010",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "exact",
    "tags": [
      "rates of change",
      "chain rule",
      "circle",
      "area"
    ],
    "questionText": "Oil spreads on water in a circular patch. When the radius is $10$ cm, the radius is increasing at $0.1$ cm/s. Find the rate at which the area is increasing.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write the area formula",
          "workingLatex": "A = \\pi r^{2}",
          "explanation": "The area of a circular oil patch depends on its radius.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate with respect to time",
          "workingLatex": "\\dfrac{dA}{dt} = 2\\pi r\\dfrac{dr}{dt}",
          "explanation": "By the chain rule, differentiating $r^{2}$ gives $2r\\dfrac{dr}{dt}$ when $r$ varies with time.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute known values",
          "workingLatex": "\\dfrac{dA}{dt} = 2\\pi (10)(0.1)",
          "explanation": "Use $r = 10$ cm and $\\dfrac{dr}{dt} = 0.1$ cm/s.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate",
          "workingLatex": "\\dfrac{dA}{dt} = 2\\pi",
          "explanation": "Multiply to find the rate of change of area.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State with units",
          "workingLatex": "\\dfrac{dA}{dt} = 2\\pi\\text{ cm}^{2}\\text{/s}",
          "explanation": "Area rate is measured in square units per second.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Interpret",
          "workingLatex": "\\dfrac{dA}{dt} = 2\\pi\\text{ cm}^{2}\\text{/s}",
          "explanation": "The patch is spreading at this rate when the radius reaches the stated value.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{dA}{dt} = 2\\pi$ cm$^{2}$/s."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Rates of change",
    "subtopicId": "al.y2.pure.connected-rates",
    "questionDiagram": null,
    "id": "al.y2.pure.connected-rates.q011",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "exact",
    "tags": [
      "rates of change",
      "chain rule",
      "cube",
      "volume"
    ],
    "questionText": "A metal cube is heated and expands uniformly. When the side length is $4$ cm, the side is lengthening at $0.2$ cm/s. Find the rate at which the volume is increasing.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Relate volume to side length",
          "workingLatex": "V = s^{3}",
          "explanation": "A cube's volume is the cube of its side length.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate with respect to time",
          "workingLatex": "\\dfrac{dV}{dt} = 3s^{2}\\dfrac{ds}{dt}",
          "explanation": "The chain rule links the rate of change of volume to the rate of change of the side.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute",
          "workingLatex": "\\dfrac{dV}{dt} = 3(4)^{2} \\times 0.2",
          "explanation": "At $s = 4$ cm with $\\dfrac{ds}{dt} = 0.2$ cm/s.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Calculate",
          "workingLatex": "\\dfrac{dV}{dt} = 9.6",
          "explanation": "Evaluate the expression.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Add units",
          "workingLatex": "\\dfrac{dV}{dt} = 9.6\\text{ cm}^{3}\\text{/s}",
          "explanation": "Volume changes in cubic units per second.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the result",
          "workingLatex": "\\dfrac{dV}{dt} = 9.6\\text{ cm}^{3}\\text{/s}",
          "explanation": "This is the instantaneous rate of volume increase.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{dV}{dt} = 9.6$ cm$^{3}$/s."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Rates of change",
    "subtopicId": "al.y2.pure.connected-rates",
    "questionDiagram": null,
    "id": "al.y2.pure.connected-rates.q012",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "exact",
    "tags": [
      "rates of change",
      "chain rule",
      "cube",
      "volume"
    ],
    "questionText": "A metal cube is heated and expands uniformly. When the side length is $3$ cm, the side is lengthening at $0.5$ cm/s. Find the rate at which the volume is increasing.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Relate volume to side length",
          "workingLatex": "V = s^{3}",
          "explanation": "A cube's volume is the cube of its side length.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate with respect to time",
          "workingLatex": "\\dfrac{dV}{dt} = 3s^{2}\\dfrac{ds}{dt}",
          "explanation": "The chain rule links the rate of change of volume to the rate of change of the side.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute",
          "workingLatex": "\\dfrac{dV}{dt} = 3(3)^{2} \\times 0.5",
          "explanation": "At $s = 3$ cm with $\\dfrac{ds}{dt} = 0.5$ cm/s.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Calculate",
          "workingLatex": "\\dfrac{dV}{dt} = 13.5",
          "explanation": "Evaluate the expression.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Add units",
          "workingLatex": "\\dfrac{dV}{dt} = 13.5\\text{ cm}^{3}\\text{/s}",
          "explanation": "Volume changes in cubic units per second.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the result",
          "workingLatex": "\\dfrac{dV}{dt} = 13.5\\text{ cm}^{3}\\text{/s}",
          "explanation": "This is the instantaneous rate of volume increase.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{dV}{dt} = 13.5$ cm$^{3}$/s."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Rates of change",
    "subtopicId": "al.y2.pure.connected-rates",
    "questionDiagram": null,
    "id": "al.y2.pure.connected-rates.q013",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "exact",
    "tags": [
      "rates of change",
      "chain rule",
      "cube",
      "volume"
    ],
    "questionText": "A metal cube is heated and expands uniformly. When the side length is $5$ cm, the side is lengthening at $0.1$ cm/s. Find the rate at which the volume is increasing.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Relate volume to side length",
          "workingLatex": "V = s^{3}",
          "explanation": "A cube's volume is the cube of its side length.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate with respect to time",
          "workingLatex": "\\dfrac{dV}{dt} = 3s^{2}\\dfrac{ds}{dt}",
          "explanation": "The chain rule links the rate of change of volume to the rate of change of the side.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute",
          "workingLatex": "\\dfrac{dV}{dt} = 3(5)^{2} \\times 0.1",
          "explanation": "At $s = 5$ cm with $\\dfrac{ds}{dt} = 0.1$ cm/s.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Calculate",
          "workingLatex": "\\dfrac{dV}{dt} = 7.5",
          "explanation": "Evaluate the expression.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Add units",
          "workingLatex": "\\dfrac{dV}{dt} = 7.5\\text{ cm}^{3}\\text{/s}",
          "explanation": "Volume changes in cubic units per second.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the result",
          "workingLatex": "\\dfrac{dV}{dt} = 7.5\\text{ cm}^{3}\\text{/s}",
          "explanation": "This is the instantaneous rate of volume increase.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{dV}{dt} = 7.5$ cm$^{3}$/s."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Rates of change",
    "subtopicId": "al.y2.pure.connected-rates",
    "questionDiagram": null,
    "id": "al.y2.pure.connected-rates.q014",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "exact",
    "tags": [
      "rates of change",
      "chain rule",
      "cube",
      "volume"
    ],
    "questionText": "A metal cube is heated and expands uniformly. When the side length is $2$ cm, the side is lengthening at $0.75$ cm/s. Find the rate at which the volume is increasing.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Relate volume to side length",
          "workingLatex": "V = s^{3}",
          "explanation": "A cube's volume is the cube of its side length.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate with respect to time",
          "workingLatex": "\\dfrac{dV}{dt} = 3s^{2}\\dfrac{ds}{dt}",
          "explanation": "The chain rule links the rate of change of volume to the rate of change of the side.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute",
          "workingLatex": "\\dfrac{dV}{dt} = 3(2)^{2} \\times 0.75",
          "explanation": "At $s = 2$ cm with $\\dfrac{ds}{dt} = 0.75$ cm/s.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Calculate",
          "workingLatex": "\\dfrac{dV}{dt} = 9",
          "explanation": "Evaluate the expression.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Add units",
          "workingLatex": "\\dfrac{dV}{dt} = 9\\text{ cm}^{3}\\text{/s}",
          "explanation": "Volume changes in cubic units per second.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the result",
          "workingLatex": "\\dfrac{dV}{dt} = 9\\text{ cm}^{3}\\text{/s}",
          "explanation": "This is the instantaneous rate of volume increase.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{dV}{dt} = 9$ cm$^{3}$/s."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Rates of change",
    "subtopicId": "al.y2.pure.connected-rates",
    "questionDiagram": null,
    "id": "al.y2.pure.connected-rates.q015",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "exact",
    "tags": [
      "rates of change",
      "chain rule",
      "cube",
      "volume"
    ],
    "questionText": "A metal cube is heated and expands uniformly. When the side length is $6$ cm, the side is lengthening at $0.05$ cm/s. Find the rate at which the volume is increasing.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Relate volume to side length",
          "workingLatex": "V = s^{3}",
          "explanation": "A cube's volume is the cube of its side length.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate with respect to time",
          "workingLatex": "\\dfrac{dV}{dt} = 3s^{2}\\dfrac{ds}{dt}",
          "explanation": "The chain rule links the rate of change of volume to the rate of change of the side.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute",
          "workingLatex": "\\dfrac{dV}{dt} = 3(6)^{2} \\times 0.05",
          "explanation": "At $s = 6$ cm with $\\dfrac{ds}{dt} = 0.05$ cm/s.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Calculate",
          "workingLatex": "\\dfrac{dV}{dt} = 5.4",
          "explanation": "Evaluate the expression.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Add units",
          "workingLatex": "\\dfrac{dV}{dt} = 5.4\\text{ cm}^{3}\\text{/s}",
          "explanation": "Volume changes in cubic units per second.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the result",
          "workingLatex": "\\dfrac{dV}{dt} = 5.4\\text{ cm}^{3}\\text{/s}",
          "explanation": "This is the instantaneous rate of volume increase.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{dV}{dt} = 5.4$ cm$^{3}$/s."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Rates of change",
    "subtopicId": "al.y2.pure.connected-rates",
    "questionDiagram": null,
    "id": "al.y2.pure.connected-rates.q016",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": [
      "rates of change",
      "chain rule",
      "composite function"
    ],
    "questionText": "Given that $y = u^{3}$ and $u = 2x + 1$, find $\\dfrac{dy}{dx}$ in terms of $u$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the composite structure",
          "workingLatex": "y = u^{3}, \\quad u = 2x + 1",
          "explanation": "The function is built in two stages, so the chain rule connects $\\dfrac{dy}{dx}$ to derivatives with respect to the inner variable.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find dy/du",
          "workingLatex": "\\dfrac{dy}{du} = 3u^{2}",
          "explanation": "Differentiate the outer function with respect to $u$, treating $u$ as the variable.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find du/dx",
          "workingLatex": "\\dfrac{du}{dx} = 2",
          "explanation": "Differentiate the inner function with respect to $x$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply the chain rule",
          "workingLatex": "\\dfrac{dy}{dx} = \\dfrac{dy}{du} \\times \\dfrac{du}{dx}",
          "explanation": "Multiply the two rates of change: this is the key connected-rates idea.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute",
          "workingLatex": "\\dfrac{dy}{dx} = (3u^{2}) \\times (2)",
          "explanation": "Put in the expressions found in the previous steps.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Simplify",
          "workingLatex": "\\dfrac{dy}{dx} = 6u^{2}",
          "explanation": "Carry out the algebra to obtain the derivative.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the result",
          "workingLatex": "\\dfrac{dy}{dx} = 6u^{2}",
          "explanation": "This gives the rate of change of $y$ with respect to $x$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{dy}{dx} = 6u^{2}$"
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Rates of change",
    "subtopicId": "al.y2.pure.connected-rates",
    "questionDiagram": null,
    "id": "al.y2.pure.connected-rates.q017",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": [
      "rates of change",
      "chain rule",
      "composite function"
    ],
    "questionText": "Given that $y = u^{2}$ and $u = 3x - 2$, find $\\dfrac{dy}{dx}$ in terms of $u$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the composite structure",
          "workingLatex": "y = u^{2}, \\quad u = 3x - 2",
          "explanation": "The function is built in two stages, so the chain rule connects $\\dfrac{dy}{dx}$ to derivatives with respect to the inner variable.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find dy/du",
          "workingLatex": "\\dfrac{dy}{du} = 2u",
          "explanation": "Differentiate the outer function with respect to $u$, treating $u$ as the variable.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find du/dx",
          "workingLatex": "\\dfrac{du}{dx} = 3",
          "explanation": "Differentiate the inner function with respect to $x$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply the chain rule",
          "workingLatex": "\\dfrac{dy}{dx} = \\dfrac{dy}{du} \\times \\dfrac{du}{dx}",
          "explanation": "Multiply the two rates of change: this is the key connected-rates idea.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute",
          "workingLatex": "\\dfrac{dy}{dx} = (2u) \\times (3)",
          "explanation": "Put in the expressions found in the previous steps.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Simplify",
          "workingLatex": "\\dfrac{dy}{dx} = 6u",
          "explanation": "Carry out the algebra to obtain the derivative.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the result",
          "workingLatex": "\\dfrac{dy}{dx} = 6u",
          "explanation": "This gives the rate of change of $y$ with respect to $x$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{dy}{dx} = 6u$"
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Rates of change",
    "subtopicId": "al.y2.pure.connected-rates",
    "questionDiagram": null,
    "id": "al.y2.pure.connected-rates.q018",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": [
      "rates of change",
      "chain rule",
      "composite function"
    ],
    "questionText": "Given that $y = \\sqrt{u}$ and $u = x^{2}$, find $\\dfrac{dy}{dx}$ in terms of $u$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the composite structure",
          "workingLatex": "y = \\sqrt{u}, \\quad u = x^{2}",
          "explanation": "The function is built in two stages, so the chain rule connects $\\dfrac{dy}{dx}$ to derivatives with respect to the inner variable.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find dy/du",
          "workingLatex": "\\dfrac{dy}{du} = \\dfrac{1}{2\\sqrt{u}}",
          "explanation": "Differentiate the outer function with respect to $u$, treating $u$ as the variable.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find du/dx",
          "workingLatex": "\\dfrac{du}{dx} = 2x",
          "explanation": "Differentiate the inner function with respect to $x$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply the chain rule",
          "workingLatex": "\\dfrac{dy}{dx} = \\dfrac{dy}{du} \\times \\dfrac{du}{dx}",
          "explanation": "Multiply the two rates of change: this is the key connected-rates idea.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute",
          "workingLatex": "\\dfrac{dy}{dx} = (\\dfrac{1}{2\\sqrt{u}}) \\times (2x)",
          "explanation": "Put in the expressions found in the previous steps.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Simplify",
          "workingLatex": "\\dfrac{dy}{dx} = \\dfrac{x}{\\sqrt{u}}",
          "explanation": "Carry out the algebra to obtain the derivative.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the result",
          "workingLatex": "\\dfrac{dy}{dx} = \\dfrac{x}{\\sqrt{u}}",
          "explanation": "This gives the rate of change of $y$ with respect to $x$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{dy}{dx} = \\dfrac{x}{\\sqrt{u}}$"
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Rates of change",
    "subtopicId": "al.y2.pure.connected-rates",
    "questionDiagram": null,
    "id": "al.y2.pure.connected-rates.q019",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": [
      "rates of change",
      "chain rule",
      "composite function"
    ],
    "questionText": "Given that $y = e^{u}$ and $u = 2x$, find $\\dfrac{dy}{dx}$ in terms of $u$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the composite structure",
          "workingLatex": "y = e^{u}, \\quad u = 2x",
          "explanation": "The function is built in two stages, so the chain rule connects $\\dfrac{dy}{dx}$ to derivatives with respect to the inner variable.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find dy/du",
          "workingLatex": "\\dfrac{dy}{du} = e^{u}",
          "explanation": "Differentiate the outer function with respect to $u$, treating $u$ as the variable.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find du/dx",
          "workingLatex": "\\dfrac{du}{dx} = 2",
          "explanation": "Differentiate the inner function with respect to $x$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply the chain rule",
          "workingLatex": "\\dfrac{dy}{dx} = \\dfrac{dy}{du} \\times \\dfrac{du}{dx}",
          "explanation": "Multiply the two rates of change: this is the key connected-rates idea.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute",
          "workingLatex": "\\dfrac{dy}{dx} = (e^{u}) \\times (2)",
          "explanation": "Put in the expressions found in the previous steps.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Simplify",
          "workingLatex": "\\dfrac{dy}{dx} = 2e^{u}",
          "explanation": "Carry out the algebra to obtain the derivative.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the result",
          "workingLatex": "\\dfrac{dy}{dx} = 2e^{u}",
          "explanation": "This gives the rate of change of $y$ with respect to $x$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{dy}{dx} = 2e^{u}$"
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Rates of change",
    "subtopicId": "al.y2.pure.connected-rates",
    "questionDiagram": null,
    "id": "al.y2.pure.connected-rates.q020",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": [
      "rates of change",
      "chain rule",
      "composite function"
    ],
    "questionText": "Given that $y = \\sin u$ and $u = 3x$, find $\\dfrac{dy}{dx}$ in terms of $u$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the composite structure",
          "workingLatex": "y = \\sin u, \\quad u = 3x",
          "explanation": "The function is built in two stages, so the chain rule connects $\\dfrac{dy}{dx}$ to derivatives with respect to the inner variable.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find dy/du",
          "workingLatex": "\\dfrac{dy}{du} = \\cos u",
          "explanation": "Differentiate the outer function with respect to $u$, treating $u$ as the variable.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find du/dx",
          "workingLatex": "\\dfrac{du}{dx} = 3",
          "explanation": "Differentiate the inner function with respect to $x$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply the chain rule",
          "workingLatex": "\\dfrac{dy}{dx} = \\dfrac{dy}{du} \\times \\dfrac{du}{dx}",
          "explanation": "Multiply the two rates of change: this is the key connected-rates idea.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute",
          "workingLatex": "\\dfrac{dy}{dx} = (\\cos u) \\times (3)",
          "explanation": "Put in the expressions found in the previous steps.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Simplify",
          "workingLatex": "\\dfrac{dy}{dx} = 3\\cos u",
          "explanation": "Carry out the algebra to obtain the derivative.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the result",
          "workingLatex": "\\dfrac{dy}{dx} = 3\\cos u",
          "explanation": "This gives the rate of change of $y$ with respect to $x$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{dy}{dx} = 3\\cos u$"
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Rates of change",
    "subtopicId": "al.y2.pure.connected-rates",
    "questionDiagram": null,
    "id": "al.y2.pure.connected-rates.q021",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": [
      "rates of change",
      "chain rule",
      "composite function"
    ],
    "questionText": "Given that $y = u^{4}$ and $u = x - 5$, find $\\dfrac{dy}{dx}$ in terms of $u$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the composite structure",
          "workingLatex": "y = u^{4}, \\quad u = x - 5",
          "explanation": "The function is built in two stages, so the chain rule connects $\\dfrac{dy}{dx}$ to derivatives with respect to the inner variable.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find dy/du",
          "workingLatex": "\\dfrac{dy}{du} = 4u^{3}",
          "explanation": "Differentiate the outer function with respect to $u$, treating $u$ as the variable.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find du/dx",
          "workingLatex": "\\dfrac{du}{dx} = 1",
          "explanation": "Differentiate the inner function with respect to $x$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply the chain rule",
          "workingLatex": "\\dfrac{dy}{dx} = \\dfrac{dy}{du} \\times \\dfrac{du}{dx}",
          "explanation": "Multiply the two rates of change: this is the key connected-rates idea.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute",
          "workingLatex": "\\dfrac{dy}{dx} = (4u^{3}) \\times (1)",
          "explanation": "Put in the expressions found in the previous steps.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Simplify",
          "workingLatex": "\\dfrac{dy}{dx} = 4u^{3}",
          "explanation": "Carry out the algebra to obtain the derivative.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the result",
          "workingLatex": "\\dfrac{dy}{dx} = 4u^{3}",
          "explanation": "This gives the rate of change of $y$ with respect to $x$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{dy}{dx} = 4u^{3}$"
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Rates of change",
    "subtopicId": "al.y2.pure.connected-rates",
    "questionDiagram": null,
    "id": "al.y2.pure.connected-rates.q022",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": [
      "rates of change",
      "chain rule",
      "composite function"
    ],
    "questionText": "Given that $y = \\dfrac{1}{u}$ and $u = x^{2} + 1$, find $\\dfrac{d y}{dx}$ in terms of $u$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the composite structure",
          "workingLatex": "y = \\dfrac{1}{u}, \\quad u = x^{2} + 1",
          "explanation": "The function is built in two stages, so the chain rule connects $\\dfrac{dy}{dx}$ to derivatives with respect to the inner variable.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find dy/du",
          "workingLatex": "\\dfrac{dy}{du} = -\\dfrac{1}{u^{2}}",
          "explanation": "Differentiate the outer function with respect to $u$, treating $u$ as the variable.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find du/dx",
          "workingLatex": "\\dfrac{du}{dx} = 2x",
          "explanation": "Differentiate the inner function with respect to $x$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply the chain rule",
          "workingLatex": "\\dfrac{dy}{dx} = \\dfrac{dy}{du} \\times \\dfrac{du}{dx}",
          "explanation": "Multiply the two rates of change: this is the key connected-rates idea.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute",
          "workingLatex": "\\dfrac{dy}{dx} = (-\\dfrac{1}{u^{2}}) \\times (2x)",
          "explanation": "Put in the expressions found in the previous steps.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Simplify",
          "workingLatex": "\\dfrac{dy}{dx} = -\\dfrac{2x}{u^{2}}",
          "explanation": "Carry out the algebra to obtain the derivative.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the result",
          "workingLatex": "\\dfrac{dy}{dx} = -\\dfrac{2x}{u^{2}}",
          "explanation": "This gives the rate of change of $y$ with respect to $x$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{dy}{dx} = -\\dfrac{2x}{u^{2}}$"
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Rates of change",
    "subtopicId": "al.y2.pure.connected-rates",
    "questionDiagram": null,
    "id": "al.y2.pure.connected-rates.q023",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "exact",
    "tags": [
      "rates of change",
      "chain rule",
      "exponential growth"
    ],
    "questionText": "A population of bacteria grows according to $N = 1000e^{0.2t}$, where $t$ is time in hours. Find the rate of growth when $t = 5$ hours.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write the growth model",
          "workingLatex": "N = N_{0}e^{kt}",
          "explanation": "Exponential growth means the population is proportional to $e^{kt}$ for some constant $k > 0$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate with respect to time",
          "workingLatex": "\\dfrac{dN}{dt} = kN_{0}e^{kt} = kN",
          "explanation": "Differentiating gives $k$ times the original function, so the rate of growth is proportional to the current size.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find N at the given time",
          "workingLatex": "N = 1000e^{0.2 \\times 5} = 1000e^{1}",
          "explanation": "Substitute $t = 5$ to find the population at that instant.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Calculate dN/dt",
          "workingLatex": "\\dfrac{dN}{dt} = 0.2 \\times N = 1000e",
          "explanation": "Multiply $k$ by the current population: $\\dfrac{dN}{dt} = kN$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State with context",
          "workingLatex": "\\dfrac{dN}{dt} = 1000e",
          "explanation": "This is how fast the quantity is growing at the specified time.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Interpret",
          "workingLatex": "\\dfrac{dN}{dt} = 1000e",
          "explanation": "Larger populations grow faster under this model because the rate is proportional to $N$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{dN}{dt} = 1000e$ bacteria/hour."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Rates of change",
    "subtopicId": "al.y2.pure.connected-rates",
    "questionDiagram": null,
    "id": "al.y2.pure.connected-rates.q024",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "exact",
    "tags": [
      "rates of change",
      "chain rule",
      "exponential growth"
    ],
    "questionText": "A population of bacteria grows according to $N = 500e^{0.3t}$, where $t$ is time in hours. Find the rate of growth when $t = 2$ hours.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write the growth model",
          "workingLatex": "N = N_{0}e^{kt}",
          "explanation": "Exponential growth means the population is proportional to $e^{kt}$ for some constant $k > 0$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate with respect to time",
          "workingLatex": "\\dfrac{dN}{dt} = kN_{0}e^{kt} = kN",
          "explanation": "Differentiating gives $k$ times the original function, so the rate of growth is proportional to the current size.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find N at the given time",
          "workingLatex": "N = 500e^{0.3 \\times 2} = 500e^{0.6}",
          "explanation": "Substitute $t = 2$ to find the population at that instant.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Calculate dN/dt",
          "workingLatex": "\\dfrac{dN}{dt} = 0.3 \\times N = 300e^{0.6}",
          "explanation": "Multiply $k$ by the current population: $\\dfrac{dN}{dt} = kN$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State with context",
          "workingLatex": "\\dfrac{dN}{dt} = 300e^{0.6}",
          "explanation": "This is how fast the quantity is growing at the specified time.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Interpret",
          "workingLatex": "\\dfrac{dN}{dt} = 300e^{0.6}",
          "explanation": "The growth rate depends on both the constant $k$ and the current population.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{dN}{dt} = 300e^{0.6}$ bacteria/hour."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Rates of change",
    "subtopicId": "al.y2.pure.connected-rates",
    "questionDiagram": null,
    "id": "al.y2.pure.connected-rates.q025",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "exact",
    "tags": [
      "rates of change",
      "chain rule",
      "exponential decay"
    ],
    "questionText": "A radioactive substance decays according to $N = 200e^{-0.1t}$, where $t$ is in years. Find the rate at which the mass is decreasing when $t = 10$ years.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write the decay model",
          "workingLatex": "N = N_{0}e^{-kt}",
          "explanation": "Radioactive decay and similar processes follow an exponential decrease.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate with respect to time",
          "workingLatex": "\\dfrac{dN}{dt} = -kN_{0}e^{-kt} = -kN",
          "explanation": "The derivative is negative, showing the quantity is decreasing, and its magnitude is proportional to the amount remaining.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find N at the given time",
          "workingLatex": "N = 200e^{-0.1 \\times 10}",
          "explanation": "Evaluate the population at $t = 10$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Calculate dN/dt",
          "workingLatex": "\\dfrac{dN}{dt} = -0.1N = -20e^{-1}",
          "explanation": "Multiply by $-k$ to obtain the rate of decrease.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Interpret the sign",
          "workingLatex": "\\dfrac{dN}{dt} < 0",
          "explanation": "The negative sign confirms the quantity is decaying.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the answer",
          "workingLatex": "\\dfrac{dN}{dt} = -20e^{-1}",
          "explanation": "This is the instantaneous rate of change at the given time.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{dN}{dt} = -20e^{-1}$ g/year."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Rates of change",
    "subtopicId": "al.y2.pure.connected-rates",
    "questionDiagram": null,
    "id": "al.y2.pure.connected-rates.q026",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "exact",
    "tags": [
      "rates of change",
      "chain rule",
      "exponential decay"
    ],
    "questionText": "A radioactive substance decays according to $N = 80e^{-0.25t}$, where $t$ is in years. Find the rate at which the mass is decreasing when $t = 4$ years.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write the decay model",
          "workingLatex": "N = N_{0}e^{-kt}",
          "explanation": "Radioactive decay and similar processes follow an exponential decrease.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate with respect to time",
          "workingLatex": "\\dfrac{dN}{dt} = -kN_{0}e^{-kt} = -kN",
          "explanation": "The derivative is negative, showing the quantity is decreasing, and its magnitude is proportional to the amount remaining.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find N at the given time",
          "workingLatex": "N = 80e^{-0.25 \\times 4}",
          "explanation": "Evaluate the population at $t = 4$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Calculate dN/dt",
          "workingLatex": "\\dfrac{dN}{dt} = -0.25N = -20e^{-1}",
          "explanation": "Multiply by $-k$ to obtain the rate of decrease.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Interpret the sign",
          "workingLatex": "\\dfrac{dN}{dt} < 0",
          "explanation": "The negative sign confirms the quantity is decaying.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the answer",
          "workingLatex": "\\dfrac{dN}{dt} = -20e^{-1}",
          "explanation": "This is the instantaneous rate of change at the given time.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{dN}{dt} = -20e^{-1}$ g/year."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Rates of change",
    "subtopicId": "al.y2.pure.connected-rates",
    "questionDiagram": null,
    "id": "al.y2.pure.connected-rates.q027",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "exact",
    "tags": [
      "rates of change",
      "chain rule",
      "exponential growth"
    ],
    "questionText": "A population of bacteria grows according to $N = 2000e^{0.05t}$, where $t$ is time in hours. Find the rate of growth when $t = 10$ hours.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write the growth model",
          "workingLatex": "N = N_{0}e^{kt}",
          "explanation": "Exponential growth means the population is proportional to $e^{kt}$ for some constant $k > 0$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate with respect to time",
          "workingLatex": "\\dfrac{dN}{dt} = kN_{0}e^{kt} = kN",
          "explanation": "Differentiating gives $k$ times the original function, so the rate of growth is proportional to the current size.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find N at the given time",
          "workingLatex": "N = 2000e^{0.05 \\times 10} = 2000e^{0.5}",
          "explanation": "Substitute $t = 10$ to find the population at that instant.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Calculate dN/dt",
          "workingLatex": "\\dfrac{dN}{dt} = 0.05 \\times N = 100e^{0.5}",
          "explanation": "Multiply $k$ by the current population: $\\dfrac{dN}{dt} = kN$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State with context",
          "workingLatex": "\\dfrac{dN}{dt} = 100e^{0.5}",
          "explanation": "This is how fast the quantity is growing at the specified time.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Interpret",
          "workingLatex": "\\dfrac{dN}{dt} = 100e^{0.5}",
          "explanation": "Even a small growth constant produces significant growth over long periods.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{dN}{dt} = 100e^{0.5}$ bacteria/hour."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Rates of change",
    "subtopicId": "al.y2.pure.connected-rates",
    "questionDiagram": null,
    "id": "al.y2.pure.connected-rates.q028",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "exact",
    "tags": [
      "rates of change",
      "chain rule",
      "exponential decay"
    ],
    "questionText": "A radioactive substance decays according to $N = 50e^{-0.4t}$, where $t$ is in years. Find the rate at which the mass is decreasing when $t = 2$ years.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write the decay model",
          "workingLatex": "N = N_{0}e^{-kt}",
          "explanation": "Radioactive decay and similar processes follow an exponential decrease.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate with respect to time",
          "workingLatex": "\\dfrac{dN}{dt} = -kN_{0}e^{-kt} = -kN",
          "explanation": "The derivative is negative, showing the quantity is decreasing, and its magnitude is proportional to the amount remaining.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find N at the given time",
          "workingLatex": "N = 50e^{-0.4 \\times 2}",
          "explanation": "Evaluate the population at $t = 2$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Calculate dN/dt",
          "workingLatex": "\\dfrac{dN}{dt} = -0.4N = -20e^{-0.8}",
          "explanation": "Multiply by $-k$ to obtain the rate of decrease.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Interpret the sign",
          "workingLatex": "\\dfrac{dN}{dt} < 0",
          "explanation": "The negative sign confirms the quantity is decaying.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the answer",
          "workingLatex": "\\dfrac{dN}{dt} = -20e^{-0.8}",
          "explanation": "This is the instantaneous rate of change at the given time.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{dN}{dt} = -20e^{-0.8}$ g/year."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Rates of change",
    "subtopicId": "al.y2.pure.connected-rates",
    "questionDiagram": null,
    "id": "al.y2.pure.connected-rates.q029",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "exact",
    "tags": [
      "rates of change",
      "chain rule",
      "ladder",
      "Pythagoras"
    ],
    "questionText": "A 5 m ladder leans against a vertical wall with its foot on horizontal ground. The foot slides away from the wall at 1 m/s. When the foot is 3 m from the wall, find the rate at which the top of the ladder is sliding down the wall.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write the constraint",
          "workingLatex": "x^{2} + y^{2} = 25",
          "explanation": "The ladder, wall and ground form a right triangle, so Pythagoras links $x$ and $y$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate with respect to time",
          "workingLatex": "2x\\dfrac{dx}{dt} + 2y\\dfrac{dy}{dt} = 0",
          "explanation": "Differentiate both sides with respect to $t$, using the chain rule on each term.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Solve for dy/dt",
          "workingLatex": "\\dfrac{dy}{dt} = -\\dfrac{x}{y}\\dfrac{dx}{dt}",
          "explanation": "Rearrange to express the vertical rate in terms of the horizontal rate.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find y at the given x",
          "workingLatex": "y = \\sqrt{25 - 9} = 4",
          "explanation": "When $x = 3$ m, substitute into the constraint to find $y$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute values",
          "workingLatex": "\\dfrac{dy}{dt} = -\\dfrac{3}{4} \\times 1",
          "explanation": "Use $x = 3$, $y = 4$ and $\\dfrac{dx}{dt} = 1$ m/s.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Evaluate",
          "workingLatex": "\\dfrac{dy}{dt} = -\\dfrac{3}{4}",
          "explanation": "Calculate the vertical speed of the top of the ladder.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Interpret the sign",
          "workingLatex": "\\dfrac{dy}{dt} < 0",
          "explanation": "A negative value means the top is sliding down the wall.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State the answer",
          "workingLatex": "\\dfrac{dy}{dt} = -\\dfrac{3}{4}\\text{ m/s}",
          "explanation": "This is how fast the top of the ladder is moving vertically at that instant.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{dy}{dt} = -\\dfrac{3}{4}$ m/s."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Rates of change",
    "subtopicId": "al.y2.pure.connected-rates",
    "questionDiagram": null,
    "id": "al.y2.pure.connected-rates.q030",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "exact",
    "tags": [
      "rates of change",
      "chain rule",
      "ladder",
      "Pythagoras"
    ],
    "questionText": "A 10 m ladder leans against a vertical wall with its foot on horizontal ground. The foot slides away from the wall at 0.5 m/s. When the foot is 6 m from the wall, find the rate at which the top of the ladder is sliding down the wall.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write the constraint",
          "workingLatex": "x^{2} + y^{2} = 100",
          "explanation": "The ladder, wall and ground form a right triangle, so Pythagoras links $x$ and $y$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate with respect to time",
          "workingLatex": "2x\\dfrac{dx}{dt} + 2y\\dfrac{dy}{dt} = 0",
          "explanation": "Differentiate both sides with respect to $t$, using the chain rule on each term.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Solve for dy/dt",
          "workingLatex": "\\dfrac{dy}{dt} = -\\dfrac{x}{y}\\dfrac{dx}{dt}",
          "explanation": "Rearrange to express the vertical rate in terms of the horizontal rate.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find y at the given x",
          "workingLatex": "y = \\sqrt{100 - 36} = 8",
          "explanation": "When $x = 6$ m, substitute into the constraint to find $y$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute values",
          "workingLatex": "\\dfrac{dy}{dt} = -\\dfrac{6}{8} \\times 0.5",
          "explanation": "Use $x = 6$, $y = 8$ and $\\dfrac{dx}{dt} = 0.5$ m/s.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Evaluate",
          "workingLatex": "\\dfrac{dy}{dt} = -\\dfrac{3}{8}",
          "explanation": "Calculate the vertical speed of the top of the ladder.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Interpret the sign",
          "workingLatex": "\\dfrac{dy}{dt} < 0",
          "explanation": "A negative value means the top is sliding down the wall.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State the answer",
          "workingLatex": "\\dfrac{dy}{dt} = -\\dfrac{3}{8}\\text{ m/s}",
          "explanation": "This is how fast the top of the ladder is moving vertically at that instant.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{dy}{dt} = -\\dfrac{3}{8}$ m/s."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Rates of change",
    "subtopicId": "al.y2.pure.connected-rates",
    "questionDiagram": null,
    "id": "al.y2.pure.connected-rates.q031",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "exact",
    "tags": [
      "rates of change",
      "chain rule",
      "ladder",
      "Pythagoras"
    ],
    "questionText": "A 13 m ladder leans against a vertical wall with its foot on horizontal ground. The foot slides away from the wall at 2 m/s. When the foot is 5 m from the wall, find the rate at which the top of the ladder is sliding down the wall.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write the constraint",
          "workingLatex": "x^{2} + y^{2} = 169",
          "explanation": "The ladder, wall and ground form a right triangle, so Pythagoras links $x$ and $y$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate with respect to time",
          "workingLatex": "2x\\dfrac{dx}{dt} + 2y\\dfrac{dy}{dt} = 0",
          "explanation": "Differentiate both sides with respect to $t$, using the chain rule on each term.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Solve for dy/dt",
          "workingLatex": "\\dfrac{dy}{dt} = -\\dfrac{x}{y}\\dfrac{dx}{dt}",
          "explanation": "Rearrange to express the vertical rate in terms of the horizontal rate.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find y at the given x",
          "workingLatex": "y = \\sqrt{169 - 25} = 12",
          "explanation": "When $x = 5$ m, substitute into the constraint to find $y$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute values",
          "workingLatex": "\\dfrac{dy}{dt} = -\\dfrac{5}{12} \\times 2",
          "explanation": "Use $x = 5$, $y = 12$ and $\\dfrac{dx}{dt} = 2$ m/s.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Evaluate",
          "workingLatex": "\\dfrac{dy}{dt} = -\\dfrac{5}{6}",
          "explanation": "Calculate the vertical speed of the top of the ladder.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Interpret the sign",
          "workingLatex": "\\dfrac{dy}{dt} < 0",
          "explanation": "A negative value means the top is sliding down the wall.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State the answer",
          "workingLatex": "\\dfrac{dy}{dt} = -\\dfrac{5}{6}\\text{ m/s}",
          "explanation": "This is how fast the top of the ladder is moving vertically at that instant.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{dy}{dt} = -\\dfrac{5}{6}$ m/s."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Rates of change",
    "subtopicId": "al.y2.pure.connected-rates",
    "questionDiagram": null,
    "id": "al.y2.pure.connected-rates.q032",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "exact",
    "tags": [
      "rates of change",
      "chain rule",
      "ladder",
      "Pythagoras"
    ],
    "questionText": "A 5 m ladder leans against a vertical wall with its foot on horizontal ground. The foot slides away from the wall at 0.5 m/s. When the foot is 4 m from the wall, find the rate at which the top of the ladder is sliding down the wall.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write the constraint",
          "workingLatex": "x^{2} + y^{2} = 25",
          "explanation": "The ladder, wall and ground form a right triangle, so Pythagoras links $x$ and $y$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate with respect to time",
          "workingLatex": "2x\\dfrac{dx}{dt} + 2y\\dfrac{dy}{dt} = 0",
          "explanation": "Differentiate both sides with respect to $t$, using the chain rule on each term.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Solve for dy/dt",
          "workingLatex": "\\dfrac{dy}{dt} = -\\dfrac{x}{y}\\dfrac{dx}{dt}",
          "explanation": "Rearrange to express the vertical rate in terms of the horizontal rate.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find y at the given x",
          "workingLatex": "y = \\sqrt{25 - 16} = 3",
          "explanation": "When $x = 4$ m, substitute into the constraint to find $y$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute values",
          "workingLatex": "\\dfrac{dy}{dt} = -\\dfrac{4}{3} \\times 0.5",
          "explanation": "Use $x = 4$, $y = 3$ and $\\dfrac{dx}{dt} = 0.5$ m/s.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Evaluate",
          "workingLatex": "\\dfrac{dy}{dt} = -\\dfrac{2}{3}",
          "explanation": "Calculate the vertical speed of the top of the ladder.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Interpret the sign",
          "workingLatex": "\\dfrac{dy}{dt} < 0",
          "explanation": "A negative value means the top is sliding down the wall.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State the answer",
          "workingLatex": "\\dfrac{dy}{dt} = -\\dfrac{2}{3}\\text{ m/s}",
          "explanation": "This is how fast the top of the ladder is moving vertically at that instant.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{dy}{dt} = -\\dfrac{2}{3}$ m/s."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Rates of change",
    "subtopicId": "al.y2.pure.connected-rates",
    "questionDiagram": null,
    "id": "al.y2.pure.connected-rates.q033",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "exact",
    "tags": [
      "rates of change",
      "chain rule",
      "ladder",
      "Pythagoras"
    ],
    "questionText": "A 8 m ladder leans against a vertical wall with its foot on horizontal ground. The foot slides away from the wall at 1.5 m/s. When the foot is 6 m from the wall, find the rate at which the top of the ladder is sliding down the wall.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write the constraint",
          "workingLatex": "x^{2} + y^{2} = 64",
          "explanation": "The ladder, wall and ground form a right triangle, so Pythagoras links $x$ and $y$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate with respect to time",
          "workingLatex": "2x\\dfrac{dx}{dt} + 2y\\dfrac{dy}{dt} = 0",
          "explanation": "Differentiate both sides with respect to $t$, using the chain rule on each term.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Solve for dy/dt",
          "workingLatex": "\\dfrac{dy}{dt} = -\\dfrac{x}{y}\\dfrac{dx}{dt}",
          "explanation": "Rearrange to express the vertical rate in terms of the horizontal rate.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find y at the given x",
          "workingLatex": "y = \\sqrt{64 - 36} = 2\\sqrt{7}",
          "explanation": "When $x = 6$ m, substitute into the constraint to find $y$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute values",
          "workingLatex": "\\dfrac{dy}{dt} = -\\dfrac{6}{2\\sqrt{7}} \\times 1.5",
          "explanation": "Use $x = 6$, $y = 2\\sqrt{7}$ and $\\dfrac{dx}{dt} = 1.5$ m/s.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Evaluate",
          "workingLatex": "\\dfrac{dy}{dt} = -\\dfrac{9}{2\\sqrt{7}}",
          "explanation": "Calculate the vertical speed of the top of the ladder.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Interpret the sign",
          "workingLatex": "\\dfrac{dy}{dt} < 0",
          "explanation": "A negative value means the top is sliding down the wall.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State the answer",
          "workingLatex": "\\dfrac{dy}{dt} = -\\dfrac{9}{2\\sqrt{7}}\\text{ m/s}",
          "explanation": "This is how fast the top of the ladder is moving vertically at that instant.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{dy}{dt} = -\\dfrac{9}{2\\sqrt{7}}$ m/s."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Rates of change",
    "subtopicId": "al.y2.pure.connected-rates",
    "questionDiagram": null,
    "id": "al.y2.pure.connected-rates.q034",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "exact",
    "tags": [
      "rates of change",
      "chain rule",
      "ladder",
      "Pythagoras"
    ],
    "questionText": "A 15 m ladder leans against a vertical wall with its foot on horizontal ground. The foot slides away from the wall at 0.4 m/s. When the foot is 9 m from the wall, find the rate at which the top of the ladder is sliding down the wall.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write the constraint",
          "workingLatex": "x^{2} + y^{2} = 225",
          "explanation": "The ladder, wall and ground form a right triangle, so Pythagoras links $x$ and $y$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate with respect to time",
          "workingLatex": "2x\\dfrac{dx}{dt} + 2y\\dfrac{dy}{dt} = 0",
          "explanation": "Differentiate both sides with respect to $t$, using the chain rule on each term.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Solve for dy/dt",
          "workingLatex": "\\dfrac{dy}{dt} = -\\dfrac{x}{y}\\dfrac{dx}{dt}",
          "explanation": "Rearrange to express the vertical rate in terms of the horizontal rate.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find y at the given x",
          "workingLatex": "y = \\sqrt{225 - 81} = 12",
          "explanation": "When $x = 9$ m, substitute into the constraint to find $y$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute values",
          "workingLatex": "\\dfrac{dy}{dt} = -\\dfrac{9}{12} \\times 0.4",
          "explanation": "Use $x = 9$, $y = 12$ and $\\dfrac{dx}{dt} = 0.4$ m/s.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Evaluate",
          "workingLatex": "\\dfrac{dy}{dt} = -0.3",
          "explanation": "Calculate the vertical speed of the top of the ladder.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Interpret the sign",
          "workingLatex": "\\dfrac{dy}{dt} < 0",
          "explanation": "A negative value means the top is sliding down the wall.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State the answer",
          "workingLatex": "\\dfrac{dy}{dt} = -0.3\\text{ m/s}",
          "explanation": "This is how fast the top of the ladder is moving vertically at that instant.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{dy}{dt} = -0.3$ m/s."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Rates of change",
    "subtopicId": "al.y2.pure.connected-rates",
    "questionDiagram": null,
    "id": "al.y2.pure.connected-rates.q035",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "exact",
    "tags": [
      "rates of change",
      "chain rule",
      "ladder",
      "Pythagoras"
    ],
    "questionText": "A 5 m ladder leans against a vertical wall with its foot on horizontal ground. The foot slides away from the wall at 2 m/s. When the foot is 1 m from the wall, find the rate at which the top of the ladder is sliding down the wall.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write the constraint",
          "workingLatex": "x^{2} + y^{2} = 25",
          "explanation": "The ladder, wall and ground form a right triangle, so Pythagoras links $x$ and $y$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate with respect to time",
          "workingLatex": "2x\\dfrac{dx}{dt} + 2y\\dfrac{dy}{dt} = 0",
          "explanation": "Differentiate both sides with respect to $t$, using the chain rule on each term.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Solve for dy/dt",
          "workingLatex": "\\dfrac{dy}{dt} = -\\dfrac{x}{y}\\dfrac{dx}{dt}",
          "explanation": "Rearrange to express the vertical rate in terms of the horizontal rate.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find y at the given x",
          "workingLatex": "y = \\sqrt{25 - 1} = 2\\sqrt{6}",
          "explanation": "When $x = 1$ m, substitute into the constraint to find $y$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute values",
          "workingLatex": "\\dfrac{dy}{dt} = -\\dfrac{1}{2\\sqrt{6}} \\times 2",
          "explanation": "Use $x = 1$, $y = 2\\sqrt{6}$ and $\\dfrac{dx}{dt} = 2$ m/s.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Evaluate",
          "workingLatex": "\\dfrac{dy}{dt} = -\\dfrac{1}{\\sqrt{6}}",
          "explanation": "Calculate the vertical speed of the top of the ladder.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Interpret the sign",
          "workingLatex": "\\dfrac{dy}{dt} < 0",
          "explanation": "A negative value means the top is sliding down the wall.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State the answer",
          "workingLatex": "\\dfrac{dy}{dt} = -\\dfrac{1}{\\sqrt{6}}\\text{ m/s}",
          "explanation": "This is how fast the top of the ladder is moving vertically at that instant.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{dy}{dt} = -\\dfrac{1}{\\sqrt{6}}$ m/s."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Rates of change",
    "subtopicId": "al.y2.pure.connected-rates",
    "questionDiagram": null,
    "id": "al.y2.pure.connected-rates.q036",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "exact",
    "tags": [
      "rates of change",
      "chain rule",
      "ladder",
      "Pythagoras"
    ],
    "questionText": "A 10 m ladder leans against a vertical wall with its foot on horizontal ground. The foot slides away from the wall at 0.25 m/s. When the foot is 8 m from the wall, find the rate at which the top of the ladder is sliding down the wall.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write the constraint",
          "workingLatex": "x^{2} + y^{2} = 100",
          "explanation": "The ladder, wall and ground form a right triangle, so Pythagoras links $x$ and $y$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate with respect to time",
          "workingLatex": "2x\\dfrac{dx}{dt} + 2y\\dfrac{dy}{dt} = 0",
          "explanation": "Differentiate both sides with respect to $t$, using the chain rule on each term.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Solve for dy/dt",
          "workingLatex": "\\dfrac{dy}{dt} = -\\dfrac{x}{y}\\dfrac{dx}{dt}",
          "explanation": "Rearrange to express the vertical rate in terms of the horizontal rate.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find y at the given x",
          "workingLatex": "y = \\sqrt{100 - 64} = 6",
          "explanation": "When $x = 8$ m, substitute into the constraint to find $y$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute values",
          "workingLatex": "\\dfrac{dy}{dt} = -\\dfrac{8}{6} \\times 0.25",
          "explanation": "Use $x = 8$, $y = 6$ and $\\dfrac{dx}{dt} = 0.25$ m/s.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Evaluate",
          "workingLatex": "\\dfrac{dy}{dt} = -\\dfrac{1}{3}",
          "explanation": "Calculate the vertical speed of the top of the ladder.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Interpret the sign",
          "workingLatex": "\\dfrac{dy}{dt} < 0",
          "explanation": "A negative value means the top is sliding down the wall.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State the answer",
          "workingLatex": "\\dfrac{dy}{dt} = -\\dfrac{1}{3}\\text{ m/s}",
          "explanation": "This is how fast the top of the ladder is moving vertically at that instant.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{dy}{dt} = -\\dfrac{1}{3}$ m/s."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Rates of change",
    "subtopicId": "al.y2.pure.connected-rates",
    "questionDiagram": null,
    "id": "al.y2.pure.connected-rates.q037",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "exact",
    "tags": [
      "rates of change",
      "chain rule",
      "rectangle",
      "product rule"
    ],
    "questionText": "A rectangle has length $x$ m and width $y$ m. At a certain instant $x = 4$, $y = 3$, $\\dfrac{dx}{dt} = 0.2$ m/s and $\\dfrac{dy}{dt} = 0.1$ m/s. Find $\\dfrac{dA}{dt}$ at this instant.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write the area formula",
          "workingLatex": "A = xy",
          "explanation": "The area of a rectangle is the product of its length and width.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate with respect to time",
          "workingLatex": "\\dfrac{dA}{dt} = x\\dfrac{dy}{dt} + y\\dfrac{dx}{dt}",
          "explanation": "Use the product rule: the rate of change of a product equals the first times the rate of the second, plus the second times the rate of the first.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute known values",
          "workingLatex": "\\dfrac{dA}{dt} = (4)(0.1) + (3)(0.2)",
          "explanation": "Insert $x = 4$, $y = 3$, $\\dfrac{dx}{dt} = 0.2$ and $\\dfrac{dy}{dt} = 0.1$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate",
          "workingLatex": "\\dfrac{dA}{dt} = 0.7",
          "explanation": "Carry out the arithmetic.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State the answer",
          "workingLatex": "\\dfrac{dA}{dt} = 0.7",
          "explanation": "This is how fast the area is changing at that instant.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{dA}{dt} = 0.7$ m$^{2}$/s."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Rates of change",
    "subtopicId": "al.y2.pure.connected-rates",
    "questionDiagram": null,
    "id": "al.y2.pure.connected-rates.q038",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "exact",
    "tags": [
      "rates of change",
      "chain rule",
      "rectangle",
      "product rule"
    ],
    "questionText": "A rectangle has length $x$ m and width $y$ m. At a certain instant $x = 5$, $y = 2$, $\\dfrac{dx}{dt} = -0.1$ m/s and $\\dfrac{dy}{dt} = 0.3$ m/s. Find $\\dfrac{dA}{dt}$ at this instant.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write the area formula",
          "workingLatex": "A = xy",
          "explanation": "The area of a rectangle is the product of its length and width.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate with respect to time",
          "workingLatex": "\\dfrac{dA}{dt} = x\\dfrac{dy}{dt} + y\\dfrac{dx}{dt}",
          "explanation": "Use the product rule: the rate of change of a product equals the first times the rate of the second, plus the second times the rate of the first.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute known values",
          "workingLatex": "\\dfrac{dA}{dt} = (5)(0.3) + (2)(-0.1)",
          "explanation": "Insert $x = 5$, $y = 2$, $\\dfrac{dx}{dt} = -0.1$ and $\\dfrac{dy}{dt} = 0.3$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate",
          "workingLatex": "\\dfrac{dA}{dt} = 1.3",
          "explanation": "Carry out the arithmetic.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State the answer",
          "workingLatex": "\\dfrac{dA}{dt} = 1.3",
          "explanation": "This is how fast the area is changing at that instant.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{dA}{dt} = 1.3$ m$^{2}$/s."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Rates of change",
    "subtopicId": "al.y2.pure.connected-rates",
    "questionDiagram": null,
    "id": "al.y2.pure.connected-rates.q039",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "exact",
    "tags": [
      "rates of change",
      "chain rule",
      "rectangle",
      "product rule"
    ],
    "questionText": "A rectangle has length $x$ m and width $y$ m. At a certain instant $x = 6$, $y = 4$, $\\dfrac{dx}{dt} = 0.5$ m/s and $\\dfrac{dy}{dt} = -0.2$ m/s. Find $\\dfrac{dA}{dt}$ at this instant.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write the area formula",
          "workingLatex": "A = xy",
          "explanation": "The area of a rectangle is the product of its length and width.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate with respect to time",
          "workingLatex": "\\dfrac{dA}{dt} = x\\dfrac{dy}{dt} + y\\dfrac{dx}{dt}",
          "explanation": "Use the product rule: the rate of change of a product equals the first times the rate of the second, plus the second times the rate of the first.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute known values",
          "workingLatex": "\\dfrac{dA}{dt} = (6)(-0.2) + (4)(0.5)",
          "explanation": "Insert $x = 6$, $y = 4$, $\\dfrac{dx}{dt} = 0.5$ and $\\dfrac{dy}{dt} = -0.2$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate",
          "workingLatex": "\\dfrac{dA}{dt} = 0.8",
          "explanation": "Carry out the arithmetic.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State the answer",
          "workingLatex": "\\dfrac{dA}{dt} = 0.8",
          "explanation": "This is how fast the area is changing at that instant.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{dA}{dt} = 0.8$ m$^{2}$/s."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Rates of change",
    "subtopicId": "al.y2.pure.connected-rates",
    "questionDiagram": null,
    "id": "al.y2.pure.connected-rates.q040",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "exact",
    "tags": [
      "rates of change",
      "chain rule",
      "rectangle",
      "product rule"
    ],
    "questionText": "A rectangle has length $x$ m and width $y$ m. At a certain instant $x = 8$, $y = 3$, $\\dfrac{dx}{dt} = 0.1$ m/s and $\\dfrac{dy}{dt} = 0.4$ m/s. Find $\\dfrac{dA}{dt}$ at this instant.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write the area formula",
          "workingLatex": "A = xy",
          "explanation": "The area of a rectangle is the product of its length and width.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate with respect to time",
          "workingLatex": "\\dfrac{dA}{dt} = x\\dfrac{dy}{dt} + y\\dfrac{dx}{dt}",
          "explanation": "Use the product rule: the rate of change of a product equals the first times the rate of the second, plus the second times the rate of the first.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute known values",
          "workingLatex": "\\dfrac{dA}{dt} = (8)(0.4) + (3)(0.1)",
          "explanation": "Insert $x = 8$, $y = 3$, $\\dfrac{dx}{dt} = 0.1$ and $\\dfrac{dy}{dt} = 0.4$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate",
          "workingLatex": "\\dfrac{dA}{dt} = 3.5",
          "explanation": "Carry out the arithmetic.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State the answer",
          "workingLatex": "\\dfrac{dA}{dt} = 3.5",
          "explanation": "This is how fast the area is changing at that instant.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{dA}{dt} = 3.5$ m$^{2}$/s."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Rates of change",
    "subtopicId": "al.y2.pure.connected-rates",
    "questionDiagram": null,
    "id": "al.y2.pure.connected-rates.q041",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "exact",
    "tags": [
      "rates of change",
      "chain rule",
      "connected rates"
    ],
    "questionText": "A spherical balloon is being inflated so that its volume increases at $12\\pi$ cm$^{3}$/s. Find the rate at which the radius is increasing when $r = 3$ cm.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write the connecting formula",
          "workingLatex": "V = \\dfrac{4}{3}\\pi r^{3}",
          "explanation": "Identify how the changing quantities are related.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate with respect to time",
          "workingLatex": "\\dfrac{dV}{dt} = 4\\pi r^{2}\\dfrac{dr}{dt}",
          "explanation": "Differentiate both sides with respect to $t$ using the chain rule on every variable that depends on time.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute known rates",
          "workingLatex": "12\\pi = 4\\pi (3)^{2} \\dfrac{dr}{dt}",
          "explanation": "Insert the given numerical rates and dimensions at the required instant.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Solve for the unknown rate",
          "workingLatex": "\\dfrac{dr}{dt} = \\dfrac{12\\pi}{36\\pi} = \\dfrac{1}{3}",
          "explanation": "Rearrange the connected-rates equation to make the required derivative the subject.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate",
          "workingLatex": "$\\dfrac{dr}{dt} = \\dfrac{1}{3}$ cm/s",
          "explanation": "Calculate the numerical value.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check units",
          "workingLatex": "$\\dfrac{dr}{dt} = \\dfrac{1}{3}$ cm/s",
          "explanation": "Confirm the units match the physical quantity being measured.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the answer",
          "workingLatex": "$\\dfrac{dr}{dt} = \\dfrac{1}{3}$ cm/s",
          "explanation": "This is the required rate of change at that instant.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{dr}{dt} = \\dfrac{1}{3}$ cm/s"
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Rates of change",
    "subtopicId": "al.y2.pure.connected-rates",
    "questionDiagram": null,
    "id": "al.y2.pure.connected-rates.q042",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "exact",
    "tags": [
      "rates of change",
      "chain rule",
      "connected rates"
    ],
    "questionText": "The area of a circular stain is increasing at $8\\pi$ cm$^{2}$/s. Find the rate at which the radius is increasing when $r = 4$ cm.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write the connecting formula",
          "workingLatex": "A = \\pi r^{2}",
          "explanation": "Identify how the changing quantities are related.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate with respect to time",
          "workingLatex": "\\dfrac{dA}{dt} = 2\\pi r\\dfrac{dr}{dt}",
          "explanation": "Differentiate both sides with respect to $t$ using the chain rule on every variable that depends on time.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute known rates",
          "workingLatex": "8\\pi = 2\\pi (4)\\dfrac{dr}{dt}",
          "explanation": "Insert the given numerical rates and dimensions at the required instant.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Solve for the unknown rate",
          "workingLatex": "\\dfrac{dr}{dt} = 1",
          "explanation": "Rearrange the connected-rates equation to make the required derivative the subject.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate",
          "workingLatex": "$\\dfrac{dr}{dt} = 1$ cm/s",
          "explanation": "Calculate the numerical value.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check units",
          "workingLatex": "$\\dfrac{dr}{dt} = 1$ cm/s",
          "explanation": "Confirm the units match the physical quantity being measured.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the answer",
          "workingLatex": "$\\dfrac{dr}{dt} = 1$ cm/s",
          "explanation": "This is the required rate of change at that instant.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{dr}{dt} = 1$ cm/s"
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Rates of change",
    "subtopicId": "al.y2.pure.connected-rates",
    "questionDiagram": null,
    "id": "al.y2.pure.connected-rates.q043",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "exact",
    "tags": [
      "rates of change",
      "chain rule",
      "connected rates"
    ],
    "questionText": "A cube's volume is increasing at $54$ cm$^{3}$/s. Find the rate at which the side length is increasing when $s = 3$ cm.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write the connecting formula",
          "workingLatex": "V = s^{3}",
          "explanation": "Identify how the changing quantities are related.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate with respect to time",
          "workingLatex": "\\dfrac{dV}{dt} = 3s^{2}\\dfrac{ds}{dt}",
          "explanation": "Differentiate both sides with respect to $t$ using the chain rule on every variable that depends on time.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute known rates",
          "workingLatex": "54 = 3(3)^{2}\\dfrac{ds}{dt}",
          "explanation": "Insert the given numerical rates and dimensions at the required instant.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Solve for the unknown rate",
          "workingLatex": "\\dfrac{ds}{dt} = 2",
          "explanation": "Rearrange the connected-rates equation to make the required derivative the subject.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate",
          "workingLatex": "$\\dfrac{ds}{dt} = 2$ cm/s",
          "explanation": "Calculate the numerical value.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check units",
          "workingLatex": "$\\dfrac{ds}{dt} = 2$ cm/s",
          "explanation": "Confirm the units match the physical quantity being measured.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the answer",
          "workingLatex": "$\\dfrac{ds}{dt} = 2$ cm/s",
          "explanation": "This is the required rate of change at that instant.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{ds}{dt} = 2$ cm/s"
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Rates of change",
    "subtopicId": "al.y2.pure.connected-rates",
    "questionDiagram": null,
    "id": "al.y2.pure.connected-rates.q044",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "exact",
    "tags": [
      "rates of change",
      "chain rule",
      "connected rates"
    ],
    "questionText": "Air is pumped into a spherical balloon so that $\\dfrac{dV}{dt} = 50\\pi$ cm$^{3}$/s. Find $\\dfrac{dr}{dt}$ when $r = 5$ cm.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write the connecting formula",
          "workingLatex": "V = \\dfrac{4}{3}\\pi r^{3}",
          "explanation": "Identify how the changing quantities are related.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate with respect to time",
          "workingLatex": "\\dfrac{dV}{dt} = 4\\pi r^{2}\\dfrac{dr}{dt}",
          "explanation": "Differentiate both sides with respect to $t$ using the chain rule on every variable that depends on time.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute known rates",
          "workingLatex": "50\\pi = 4\\pi (25)\\dfrac{dr}{dt}",
          "explanation": "Insert the given numerical rates and dimensions at the required instant.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Solve for the unknown rate",
          "workingLatex": "\\dfrac{dr}{dt} = \\dfrac{1}{2}",
          "explanation": "Rearrange the connected-rates equation to make the required derivative the subject.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate",
          "workingLatex": "$\\dfrac{dr}{dt} = \\dfrac{1}{2}$ cm/s",
          "explanation": "Calculate the numerical value.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check units",
          "workingLatex": "$\\dfrac{dr}{dt} = \\dfrac{1}{2}$ cm/s",
          "explanation": "Confirm the units match the physical quantity being measured.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the answer",
          "workingLatex": "$\\dfrac{dr}{dt} = \\dfrac{1}{2}$ cm/s",
          "explanation": "This is the required rate of change at that instant.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{dr}{dt} = \\dfrac{1}{2}$ cm/s"
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Rates of change",
    "subtopicId": "al.y2.pure.connected-rates",
    "questionDiagram": null,
    "id": "al.y2.pure.connected-rates.q045",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "exact",
    "tags": [
      "rates of change",
      "chain rule",
      "connected rates"
    ],
    "questionText": "A square metal plate expands uniformly. Its area increases at $24$ cm$^{2}$/s. If $A = x^{2}$, find $\\dfrac{dx}{dt}$ when $x = 4$ cm.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write the connecting formula",
          "workingLatex": "A = x^{2}",
          "explanation": "Identify how the changing quantities are related.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate with respect to time",
          "workingLatex": "\\dfrac{dA}{dt} = 2x\\dfrac{dx}{dt}",
          "explanation": "Differentiate both sides with respect to $t$ using the chain rule on every variable that depends on time.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute known rates",
          "workingLatex": "24 = 2(4)\\dfrac{dx}{dt}",
          "explanation": "Insert the given numerical rates and dimensions at the required instant.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Solve for the unknown rate",
          "workingLatex": "\\dfrac{dx}{dt} = 3",
          "explanation": "Rearrange the connected-rates equation to make the required derivative the subject.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate",
          "workingLatex": "$\\dfrac{dx}{dt} = 3$ cm/s",
          "explanation": "Calculate the numerical value.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check units",
          "workingLatex": "$\\dfrac{dx}{dt} = 3$ cm/s",
          "explanation": "Confirm the units match the physical quantity being measured.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the answer",
          "workingLatex": "$\\dfrac{dx}{dt} = 3$ cm/s",
          "explanation": "This is the required rate of change at that instant.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{dx}{dt} = 3$ cm/s"
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Rates of change",
    "subtopicId": "al.y2.pure.connected-rates",
    "questionDiagram": null,
    "id": "al.y2.pure.connected-rates.q046",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "exact",
    "tags": [
      "rates of change",
      "chain rule",
      "connected rates"
    ],
    "questionText": "Water flows into a cylindrical tank of radius $2$ m at $4\\pi$ m$^{3}$/s. The volume is $V = \\pi r^{2}h$ with fixed $r$. Find $\\dfrac{dh}{dt}$ when $h = 5$ m.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write the connecting formula",
          "workingLatex": "V = \\pi r^{2}h",
          "explanation": "Identify how the changing quantities are related.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate with respect to time",
          "workingLatex": "\\dfrac{dV}{dt} = \\pi r^{2}\\dfrac{dh}{dt}",
          "explanation": "Differentiate both sides with respect to $t$ using the chain rule on every variable that depends on time.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute known rates",
          "workingLatex": "4\\pi = \\pi (4)\\dfrac{dh}{dt}",
          "explanation": "Insert the given numerical rates and dimensions at the required instant.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Solve for the unknown rate",
          "workingLatex": "\\dfrac{dh}{dt} = 1",
          "explanation": "Rearrange the connected-rates equation to make the required derivative the subject.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate",
          "workingLatex": "$\\dfrac{dh}{dt} = 1$ m/s",
          "explanation": "Calculate the numerical value.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check units",
          "workingLatex": "$\\dfrac{dh}{dt} = 1$ m/s",
          "explanation": "Confirm the units match the physical quantity being measured.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the answer",
          "workingLatex": "$\\dfrac{dh}{dt} = 1$ m/s",
          "explanation": "This is the required rate of change at that instant.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{dh}{dt} = 1$ m/s"
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Rates of change",
    "subtopicId": "al.y2.pure.connected-rates",
    "questionDiagram": null,
    "id": "al.y2.pure.connected-rates.q047",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "exact",
    "tags": [
      "rates of change",
      "chain rule",
      "connected rates"
    ],
    "questionText": "A spherical snowball melts so that its volume decreases at $4\\pi$ cm$^{3}$/s. Find the rate at which the radius is decreasing when $r = 2$ cm.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write the connecting formula",
          "workingLatex": "V = \\dfrac{4}{3}\\pi r^{3}",
          "explanation": "Identify how the changing quantities are related.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate with respect to time",
          "workingLatex": "\\dfrac{dV}{dt} = 4\\pi r^{2}\\dfrac{dr}{dt}",
          "explanation": "Differentiate both sides with respect to $t$ using the chain rule on every variable that depends on time.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute known rates",
          "workingLatex": "-4\\pi = 4\\pi (4)\\dfrac{dr}{dt}",
          "explanation": "Insert the given numerical rates and dimensions at the required instant.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Solve for the unknown rate",
          "workingLatex": "\\dfrac{dr}{dt} = -\\dfrac{1}{4}",
          "explanation": "Rearrange the connected-rates equation to make the required derivative the subject.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate",
          "workingLatex": "$\\dfrac{dr}{dt} = -\\dfrac{1}{4}$ cm/s",
          "explanation": "Calculate the numerical value.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check units",
          "workingLatex": "$\\dfrac{dr}{dt} = -\\dfrac{1}{4}$ cm/s",
          "explanation": "Confirm the units match the physical quantity being measured.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the answer",
          "workingLatex": "$\\dfrac{dr}{dt} = -\\dfrac{1}{4}$ cm/s",
          "explanation": "This is the required rate of change at that instant.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{dr}{dt} = -\\dfrac{1}{4}$ cm/s"
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Rates of change",
    "subtopicId": "al.y2.pure.connected-rates",
    "questionDiagram": null,
    "id": "al.y2.pure.connected-rates.q048",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "exact",
    "tags": [
      "rates of change",
      "chain rule",
      "connected rates"
    ],
    "questionText": "The radius of a circular ripple increases at $0.5$ m/s. Find the rate at which the area is increasing when $r = 10$ m.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write the connecting formula",
          "workingLatex": "A = \\pi r^{2}",
          "explanation": "Identify how the changing quantities are related.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate with respect to time",
          "workingLatex": "\\dfrac{dA}{dt} = 2\\pi r\\dfrac{dr}{dt}",
          "explanation": "Differentiate both sides with respect to $t$ using the chain rule on every variable that depends on time.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute known rates",
          "workingLatex": "\\dfrac{dA}{dt} = 2\\pi (10)(0.5)",
          "explanation": "Insert the given numerical rates and dimensions at the required instant.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Solve for the unknown rate",
          "workingLatex": "\\dfrac{dA}{dt} = 10\\pi",
          "explanation": "Rearrange the connected-rates equation to make the required derivative the subject.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate",
          "workingLatex": "$\\dfrac{dA}{dt} = 10\\pi$ m$^{2}$/s",
          "explanation": "Calculate the numerical value.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check units",
          "workingLatex": "$\\dfrac{dA}{dt} = 10\\pi$ m$^{2}$/s",
          "explanation": "Confirm the units match the physical quantity being measured.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the answer",
          "workingLatex": "$\\dfrac{dA}{dt} = 10\\pi$ m$^{2}$/s",
          "explanation": "This is the required rate of change at that instant.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{dA}{dt} = 10\\pi$ m$^{2}$/s"
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Rates of change",
    "subtopicId": "al.y2.pure.connected-rates",
    "questionDiagram": null,
    "id": "al.y2.pure.connected-rates.q049",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "exact",
    "tags": [
      "rates of change",
      "chain rule",
      "shadow",
      "similar triangles"
    ],
    "questionText": "A $2$ m tall person walks away from a $6$ m lamp post at $1.5$ m/s. Let $x$ be the distance from the post to the person and $s$ the length of the shadow. By similar triangles $\\dfrac{s}{2} = \\dfrac{s + x}{6}$. When $x = 8$ m, find $\\dfrac{ds}{dt}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Simplify the similar-triangles relation",
          "workingLatex": "6s = 2(s + x) \\Rightarrow 6s = 2s + 2x \\Rightarrow 4s = 2x \\Rightarrow s = \\dfrac{x}{2}",
          "explanation": "Similar triangles link the shadow length to the person's distance from the post.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate with respect to time",
          "workingLatex": "\\dfrac{ds}{dt} = \\dfrac{1}{2}\\dfrac{dx}{dt}",
          "explanation": "Since $s$ is half of $x$, its rate of change is half the walking speed.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute dx/dt",
          "workingLatex": "\\dfrac{ds}{dt} = \\dfrac{1}{2}(1.5)",
          "explanation": "The person walks at $1.5$ m/s.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate",
          "workingLatex": "\\dfrac{ds}{dt} = 0.75",
          "explanation": "The shadow lengthens at $0.75$ m/s.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Verify at x = 8",
          "workingLatex": "s = 4",
          "explanation": "At this instant the shadow is $4$ m long, consistent with the relation.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the answer",
          "workingLatex": "\\dfrac{ds}{dt} = 0.75\\text{ m/s}",
          "explanation": "The shadow grows at three-quarters of a metre per second.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{ds}{dt} = 0.75$ m/s."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Rates of change",
    "subtopicId": "al.y2.pure.connected-rates",
    "questionDiagram": null,
    "id": "al.y2.pure.connected-rates.q050",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "exact",
    "tags": [
      "rates of change",
      "chain rule",
      "perimeter constraint",
      "rectangle"
    ],
    "questionText": "A rectangle has perimeter $20$ cm, so $2x + 2y = 20$ and hence $y = 10 - x$. The length $x$ is increasing at $0.3$ cm/s. Find $\\dfrac{dA}{dt}$ when $x = 6$ cm.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Express area using the constraint",
          "workingLatex": "A = xy = x(10 - x) = 10x - x^{2}",
          "explanation": "Substitute $y = 10 - x$ to write $A$ in terms of $x$ alone.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate with respect to time",
          "workingLatex": "\\dfrac{dA}{dt} = 10\\dfrac{dx}{dt} - 2x\\dfrac{dx}{dt} = (10 - 2x)\\dfrac{dx}{dt}",
          "explanation": "Use the chain rule on each term involving $x$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute x = 6 and dx/dt = 0.3",
          "workingLatex": "\\dfrac{dA}{dt} = (10 - 12)(0.3)",
          "explanation": "At the required instant $x = 6$ cm.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate",
          "workingLatex": "\\dfrac{dA}{dt} = -0.6",
          "explanation": "The area is decreasing because the width is shrinking faster than the length is growing.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Interpret the sign",
          "workingLatex": "\\dfrac{dA}{dt} < 0",
          "explanation": "A negative rate means the area is getting smaller at this moment.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the answer",
          "workingLatex": "\\dfrac{dA}{dt} = -0.6\\text{ cm}^{2}\\text{/s}",
          "explanation": "The rectangle's area is decreasing at $0.6$ cm$^{2}$/s.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{dA}{dt} = -0.6$ cm$^{2}$/s."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Rates of change",
    "subtopicId": "al.y2.pure.connected-rates",
    "questionDiagram": null,
    "id": "al.y2.pure.connected-rates.q051",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "exact",
    "tags": [
      "rates of change",
      "chain rule",
      "cylinder",
      "volume"
    ],
    "questionText": "A cylinder has fixed radius $3$ cm. Water is poured in so that the height $h$ increases at $2$ cm/s. Find $\\dfrac{dV}{dt}$ when $h = 10$ cm, given $V = \\pi r^{2}h$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write the volume formula",
          "workingLatex": "V = \\pi r^{2}h",
          "explanation": "With fixed radius, volume is proportional to height.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate with respect to time",
          "workingLatex": "\\dfrac{dV}{dt} = \\pi r^{2}\\dfrac{dh}{dt}",
          "explanation": "Only $h$ varies, so the chain rule gives this simple relation.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute r = 3 and dh/dt = 2",
          "workingLatex": "\\dfrac{dV}{dt} = \\pi (9)(2)",
          "explanation": "Insert the known radius and rate of height increase.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate",
          "workingLatex": "\\dfrac{dV}{dt} = 18\\pi",
          "explanation": "The tank fills at $18\\pi$ cm$^{3}$/s regardless of the current height when $r$ is fixed.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Note independence from h",
          "workingLatex": "\\dfrac{dV}{dt} = 18\\pi",
          "explanation": "Because the cross-section is constant, the volume rate does not depend on $h$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the answer",
          "workingLatex": "\\dfrac{dV}{dt} = 18\\pi\\text{ cm}^{3}\\text{/s}",
          "explanation": "Water enters at this constant rate.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{dV}{dt} = 18\\pi$ cm$^{3}$/s."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Rates of change",
    "subtopicId": "al.y2.pure.connected-rates",
    "questionDiagram": null,
    "id": "al.y2.pure.connected-rates.q052",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "exact",
    "tags": [
      "rates of change",
      "chain rule",
      "surface area",
      "sphere"
    ],
    "questionText": "The surface area of a sphere is $S = 4\\pi r^{2}$. If the radius increases at $0.2$ cm/s, find $\\dfrac{dS}{dt}$ when $r = 5$ cm.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write the surface-area formula",
          "workingLatex": "S = 4\\pi r^{2}",
          "explanation": "Surface area depends on the radius squared.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate with respect to time",
          "workingLatex": "\\dfrac{dS}{dt} = 8\\pi r\\dfrac{dr}{dt}",
          "explanation": "The chain rule links the rate of change of surface area to the rate of change of radius.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute",
          "workingLatex": "\\dfrac{dS}{dt} = 8\\pi (5)(0.2)",
          "explanation": "Use $r = 5$ cm and $\\dfrac{dr}{dt} = 0.2$ cm/s.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate",
          "workingLatex": "\\dfrac{dS}{dt} = 8\\pi",
          "explanation": "The surface area grows at $8\\pi$ cm$^{2}$/s.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State with units",
          "workingLatex": "\\dfrac{dS}{dt} = 8\\pi\\text{ cm}^{2}\\text{/s}",
          "explanation": "This measures how fast the outer surface is expanding.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Interpret",
          "workingLatex": "\\dfrac{dS}{dt} = 8\\pi\\text{ cm}^{2}\\text{/s}",
          "explanation": "A growing sphere gains surface area faster when the radius is larger.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{dS}{dt} = 8\\pi$ cm$^{2}$/s."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Rates of change",
    "subtopicId": "al.y2.pure.connected-rates",
    "questionDiagram": null,
    "id": "al.y2.pure.connected-rates.q053",
    "difficulty": "Intermediate",
    "marks": 7,
    "answerType": "exact",
    "tags": [
      "rates of change",
      "chain rule",
      "cone",
      "similar triangles"
    ],
    "questionText": "Water drips into an inverted cone of height $12$ cm and base radius $6$ cm. When the water depth is $4$ cm, the water surface has radius $2$ cm and the depth is increasing at $1$ cm/s. Find $\\dfrac{dV}{dt}$ given $V = \\dfrac{1}{3}\\pi r^{2}h$ and $r = \\dfrac{h}{2}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Express V in terms of h only",
          "workingLatex": "V = \\dfrac{1}{3}\\pi\\left(\\dfrac{h}{2}\\right)^{2}h = \\dfrac{\\pi h^{3}}{12}",
          "explanation": "The similar-triangles ratio $r = h/2$ lets us write volume using one variable.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate with respect to time",
          "workingLatex": "\\dfrac{dV}{dt} = \\dfrac{\\pi h^{2}}{4}\\dfrac{dh}{dt}",
          "explanation": "Differentiate $h^{3}$ using the chain rule.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute h = 4 and dh/dt = 1",
          "workingLatex": "\\dfrac{dV}{dt} = \\dfrac{\\pi (16)}{4}",
          "explanation": "Use the depth and rate at the required instant.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate",
          "workingLatex": "\\dfrac{dV}{dt} = 4\\pi",
          "explanation": "Water volume increases at $4\\pi$ cm$^{3}$/s.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check using r form",
          "workingLatex": "V = \\dfrac{1}{3}\\pi (4)(4) = \\dfrac{16\\pi}{3}",
          "explanation": "The volume at this instant is consistent with $r = 2$, $h = 4$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the answer",
          "workingLatex": "\\dfrac{dV}{dt} = 4\\pi\\text{ cm}^{3}\\text{/s}",
          "explanation": "This is the rate at which water accumulates in the cone.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{dV}{dt} = 4\\pi$ cm$^{3}$/s."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Rates of change",
    "subtopicId": "al.y2.pure.connected-rates",
    "questionDiagram": null,
    "id": "al.y2.pure.connected-rates.q054",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "exact",
    "tags": [
      "rates of change",
      "chain rule",
      "distance",
      "Pythagoras"
    ],
    "questionText": "A car travels north at $60$ km/h and a second car travels east at $80$ km/h from the same intersection. How fast is the distance between them increasing $0.5$ hours later?",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up distances",
          "workingLatex": "a = 60t, \\quad b = 80t, \\quad D = \\sqrt{a^{2} + b^{2}}",
          "explanation": "After $t$ hours the north–south and east–west separations are proportional to time.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "At t = 0.5",
          "workingLatex": "a = 30, \\quad b = 40, \\quad D = 50",
          "explanation": "Half an hour later the cars are $30$ km and $40$ km from the junction.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Differentiate D²",
          "workingLatex": "2D\\dfrac{dD}{dt} = 2a\\dfrac{da}{dt} + 2b\\dfrac{db}{dt}",
          "explanation": "Differentiate $D^{2} = a^{2} + b^{2}$ with respect to time.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Solve for dD/dt",
          "workingLatex": "\\dfrac{dD}{dt} = \\dfrac{a\\dfrac{da}{dt} + b\\dfrac{db}{dt}}{D}",
          "explanation": "Rearrange to isolate the rate of change of distance.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute",
          "workingLatex": "\\dfrac{dD}{dt} = \\dfrac{(30)(60) + (40)(80)}{50}",
          "explanation": "Speeds are $\\dfrac{da}{dt} = 60$ and $\\dfrac{db}{dt} = 80$ km/h.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Evaluate",
          "workingLatex": "\\dfrac{dD}{dt} = 100",
          "explanation": "The distance between the cars grows at $100$ km/h.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the answer",
          "workingLatex": "\\dfrac{dD}{dt} = 100\\text{ km/h}",
          "explanation": "This classic $3$–$4$–$5$ triangle gives a clean numerical answer.",
          "diagram": null
        }
      ],
      "finalAnswer": "The distance between the cars is increasing at $100$ km/h."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Rates of change",
    "subtopicId": "al.y2.pure.connected-rates",
    "questionDiagram": null,
    "id": "al.y2.pure.connected-rates.q055",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "exact",
    "tags": [
      "rates of change",
      "chain rule",
      "angle",
      "trigonometry"
    ],
    "questionText": "A ladder $5$ m long makes an angle $\\theta$ with the ground, with foot $x$ m from the wall. Using $x = 5\\cos\\theta$, find $\\dfrac{dx}{dt}$ when $\\theta = \\dfrac{\\pi}{3}$ and $\\dfrac{d\\theta}{dt} = -0.1$ rad/s.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write the relation",
          "workingLatex": "x = 5\\cos\\theta",
          "explanation": "The horizontal distance depends on the angle.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate with respect to time",
          "workingLatex": "\\dfrac{dx}{dt} = -5\\sin\\theta\\,\\dfrac{d\\theta}{dt}",
          "explanation": "The chain rule introduces a factor of $\\dfrac{d\\theta}{dt}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute θ = π/3",
          "workingLatex": "\\dfrac{dx}{dt} = -5\\sin\\!\\left(\\dfrac{\\pi}{3}\\right)(-0.1)",
          "explanation": "Use $\\sin(\\pi/3) = \\sqrt{3}/2$ and $\\dfrac{d\\theta}{dt} = -0.1$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Simplify",
          "workingLatex": "\\dfrac{dx}{dt} = \\dfrac{\\sqrt{3}}{4}",
          "explanation": "The negative signs cancel, giving a positive horizontal speed.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Interpret",
          "workingLatex": "\\dfrac{dx}{dt} > 0",
          "explanation": "The foot moves away from the wall as the angle decreases.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the answer",
          "workingLatex": "\\dfrac{dx}{dt} = \\dfrac{\\sqrt{3}}{4}\\text{ m/s}",
          "explanation": "This is the horizontal speed of the ladder's foot.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{dx}{dt} = \\dfrac{\\sqrt{3}}{4}$ m/s."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Rates of change",
    "subtopicId": "al.y2.pure.connected-rates",
    "questionDiagram": null,
    "id": "al.y2.pure.connected-rates.q056",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "exact",
    "tags": [
      "rates of change",
      "chain rule",
      "inflation",
      "sphere"
    ],
    "questionText": "A balloon maintains a spherical shape. When $r = 4$ cm, $\\dfrac{dr}{dt} = 0.5$ cm/s and $\\dfrac{dV}{dt} = 32\\pi$ cm$^{3}$/s. Verify these rates are consistent with $V = \\dfrac{4}{3}\\pi r^{3}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Differentiate the volume formula",
          "workingLatex": "\\dfrac{dV}{dt} = 4\\pi r^{2}\\dfrac{dr}{dt}",
          "explanation": "Connected rates link volume change to radius change.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute r = 4 and dr/dt = 0.5",
          "workingLatex": "\\dfrac{dV}{dt} = 4\\pi (16)(0.5)",
          "explanation": "Use the given radius and radius rate.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Calculate",
          "workingLatex": "\\dfrac{dV}{dt} = 32\\pi",
          "explanation": "This matches the stated volume rate.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Conclude consistency",
          "workingLatex": "32\\pi = 32\\pi",
          "explanation": "The two rates agree, so the data are internally consistent.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Explain the link",
          "workingLatex": "\\dfrac{dV}{dt} \\propto r^{2}",
          "explanation": "Volume changes faster when the balloon is larger because the surface area factor $4\\pi r^{2}$ is bigger.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the conclusion",
          "workingLatex": "\\text{The rates are consistent.}",
          "explanation": "The chain rule confirms the given values fit the model.",
          "diagram": null
        }
      ],
      "finalAnswer": "The rates are consistent: $4\\pi(4)^{2}(0.5) = 32\\pi$ cm$^{3}$/s."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Rates of change",
    "subtopicId": "al.y2.pure.connected-rates",
    "questionDiagram": null,
    "id": "al.y2.pure.connected-rates.q057",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "exact",
    "tags": [
      "rates of change",
      "chain rule",
      "melting",
      "sphere"
    ],
    "questionText": "A spherical ice ball melts so that its volume decreases at $6\\pi$ cm$^{3}$/s. Find how fast the radius is decreasing when $r = 3$ cm.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write the volume formula",
          "workingLatex": "V = \\dfrac{4}{3}\\pi r^{3}",
          "explanation": "Melting reduces volume, so $\\dfrac{dV}{dt}$ will be negative.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate",
          "workingLatex": "\\dfrac{dV}{dt} = 4\\pi r^{2}\\dfrac{dr}{dt}",
          "explanation": "Connect the rates using the chain rule.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute dV/dt = -6π",
          "workingLatex": "-6\\pi = 4\\pi (9)\\dfrac{dr}{dt}",
          "explanation": "A decreasing volume means $\\dfrac{dV}{dt} = -6\\pi$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Solve for dr/dt",
          "workingLatex": "\\dfrac{dr}{dt} = -\\dfrac{6}{36} = -\\dfrac{1}{6}",
          "explanation": "Divide both sides by $4\\pi r^{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Interpret",
          "workingLatex": "\\dfrac{dr}{dt} < 0",
          "explanation": "The negative sign confirms the radius is shrinking.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the answer",
          "workingLatex": "\\dfrac{dr}{dt} = -\\dfrac{1}{6}\\text{ cm/s}",
          "explanation": "The radius decreases at one-sixth of a centimetre per second.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{dr}{dt} = -\\dfrac{1}{6}$ cm/s."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Rates of change",
    "subtopicId": "al.y2.pure.connected-rates",
    "questionDiagram": null,
    "id": "al.y2.pure.connected-rates.q058",
    "difficulty": "Intermediate",
    "marks": 7,
    "answerType": "exact",
    "tags": [
      "rates of change",
      "chain rule",
      "product rule",
      "rectangle"
    ],
    "questionText": "A rectangle has $A = xy$ with $x = 2t^{2}$ and $y = 3t$. Find $\\dfrac{dA}{dt}$ when $t = 2$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Method 1: differentiate A directly",
          "workingLatex": "A = xy = (2t^{2})(3t) = 6t^{3}",
          "explanation": "Multiply first to get $A$ explicitly in terms of $t$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate A with respect to t",
          "workingLatex": "\\dfrac{dA}{dt} = 18t^{2}",
          "explanation": "Power rule gives the rate of area change.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute t = 2",
          "workingLatex": "\\dfrac{dA}{dt} = 72",
          "explanation": "At $t = 2$ the area grows at $72$ square units per second.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Method 2: product rule check",
          "workingLatex": "\\dfrac{dA}{dt} = x\\dfrac{dy}{dt} + y\\dfrac{dx}{dt}",
          "explanation": "The product rule offers an alternative route using connected rates.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find dx/dt and dy/dt",
          "workingLatex": "\\dfrac{dx}{dt} = 4t, \\quad \\dfrac{dy}{dt} = 3",
          "explanation": "Differentiate the parametric expressions for the sides.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Verify at t = 2",
          "workingLatex": "\\dfrac{dA}{dt} = (8)(3) + (6)(8) = 72",
          "explanation": "Both methods agree, confirming the answer.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the answer",
          "workingLatex": "\\dfrac{dA}{dt} = 72",
          "explanation": "The area increases at $72$ square units per second.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{dA}{dt} = 72$ square units/s."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Rates of change",
    "subtopicId": "al.y2.pure.connected-rates",
    "questionDiagram": null,
    "id": "al.y2.pure.connected-rates.q059",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "exact",
    "tags": [
      "rates of change",
      "chain rule",
      "cone",
      "constraint",
      "multi-step"
    ],
    "questionText": "A conical pile of sand has height always equal to twice its base radius ($h = 2r$). Sand is added so that $\\dfrac{dr}{dt} = 0.2$ m/s. Find $\\dfrac{dV}{dt}$ when $r = 3$ m, given $V = \\dfrac{1}{3}\\pi r^{2}h$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Use the relation h = 2r",
          "workingLatex": "h = 2r",
          "explanation": "The shape constraint links height and radius.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Express volume in r only",
          "workingLatex": "V = \\dfrac{1}{3}\\pi r^{2}(2r) = \\dfrac{2\\pi r^{3}}{3}",
          "explanation": "Substitute to obtain $V$ as a function of a single variable.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Differentiate with respect to time",
          "workingLatex": "\\dfrac{dV}{dt} = 2\\pi r^{2}\\dfrac{dr}{dt}",
          "explanation": "Apply the chain rule to $r^{3}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute r = 3 and dr/dt = 0.2",
          "workingLatex": "\\dfrac{dV}{dt} = 2\\pi (9)(0.2)",
          "explanation": "Insert values at the required instant.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate",
          "workingLatex": "\\dfrac{dV}{dt} = 3.6\\pi",
          "explanation": "Sand accumulates at $3.6\\pi$ m$^{3}$/s.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check dimensions",
          "workingLatex": "\\text{m}^{3}\\text{/s}",
          "explanation": "Volume rate has correct cubic units.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Alternative via two variables",
          "workingLatex": "\\dfrac{dV}{dt} = \\dfrac{2\\pi r}{3}\\left(2r\\dfrac{dr}{dt} + h\\dfrac{dr}{dt}\\right)",
          "explanation": "A full two-variable product rule gives the same result when $h = 2r$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Confirm agreement",
          "workingLatex": "3.6\\pi",
          "explanation": "Both approaches are consistent.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the answer",
          "workingLatex": "\\dfrac{dV}{dt} = 3.6\\pi\\text{ m}^{3}\\text{/s}",
          "explanation": "The pile's volume grows at this rate when the base radius is $3$ m.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{dV}{dt} = 3.6\\pi$ m$^{3}$/s."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Rates of change",
    "subtopicId": "al.y2.pure.connected-rates",
    "questionDiagram": null,
    "id": "al.y2.pure.connected-rates.q060",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "exact",
    "tags": [
      "rates of change",
      "chain rule",
      "parabola",
      "chain rule",
      "multi-step"
    ],
    "questionText": "A point moves along $y = x^{2}$. If $\\dfrac{dx}{dt} = 3$ units/s, find $\\dfrac{dy}{dt}$ when $x = 2$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write the path equation",
          "workingLatex": "y = x^{2}",
          "explanation": "The curve relates $y$ and $x$ directly.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate with respect to time",
          "workingLatex": "\\dfrac{dy}{dt} = 2x\\dfrac{dx}{dt}",
          "explanation": "The chain rule connects the vertical and horizontal rates.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute x = 2 and dx/dt = 3",
          "workingLatex": "\\dfrac{dy}{dt} = 2(2)(3)",
          "explanation": "Use the given position and horizontal speed.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate",
          "workingLatex": "\\dfrac{dy}{dt} = 12",
          "explanation": "The vertical speed is $12$ units/s.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Geometric check",
          "workingLatex": "m = 2x = 4",
          "explanation": "The gradient at $x = 2$ is $4$, and $\\dfrac{dy}{dt}/\\dfrac{dx}{dt} = 4$ as expected.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Relate to dy/dx",
          "workingLatex": "\\dfrac{dy}{dx} = 4 = \\dfrac{12}{3}",
          "explanation": "The ratio of rates equals the gradient.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Consider direction",
          "workingLatex": "\\dfrac{dy}{dt} > 0",
          "explanation": "The point moves upward along the parabola.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Physical meaning",
          "workingLatex": "\\text{12 units/s upward}",
          "explanation": "If $x$ increases, $y$ increases faster because the curve steepens.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the answer",
          "workingLatex": "\\dfrac{dy}{dt} = 12\\text{ units/s}",
          "explanation": "The $y$-coordinate changes at $12$ units per second.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{dy}{dt} = 12$ units/s."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Rates of change",
    "subtopicId": "al.y2.pure.connected-rates",
    "questionDiagram": null,
    "id": "al.y2.pure.connected-rates.q061",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "exact",
    "tags": [
      "rates of change",
      "chain rule",
      "sphere",
      "proof",
      "multi-step"
    ],
    "questionText": "A spherical balloon is inflated so that $\\dfrac{dV}{dt} = k$ (constant). Show that $\\dfrac{dr}{dt} = \\dfrac{k}{4\\pi r^{2}}$ and find $\\dfrac{dr}{dt}$ when $r = 2$ cm if $k = 16\\pi$ cm$^{3}$/s.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Start from the volume formula",
          "workingLatex": "V = \\dfrac{4}{3}\\pi r^{3}",
          "explanation": "Volume depends on radius cubed.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate with respect to time",
          "workingLatex": "\\dfrac{dV}{dt} = 4\\pi r^{2}\\dfrac{dr}{dt}",
          "explanation": "Chain rule on both sides.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Solve for dr/dt",
          "workingLatex": "\\dfrac{dr}{dt} = \\dfrac{1}{4\\pi r^{2}}\\dfrac{dV}{dt}",
          "explanation": "Rearrange to express radius rate in terms of volume rate.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute constant dV/dt = k",
          "workingLatex": "\\dfrac{dr}{dt} = \\dfrac{k}{4\\pi r^{2}}",
          "explanation": "With constant pumping rate, the radius rate decreases as the balloon grows.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Insert k = 16π and r = 2",
          "workingLatex": "\\dfrac{dr}{dt} = \\dfrac{16\\pi}{4\\pi (4)}",
          "explanation": "Substitute the numerical values.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Simplify",
          "workingLatex": "\\dfrac{dr}{dt} = 1",
          "explanation": "The radius grows at $1$ cm/s at this instant.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Interpret inverse-square dependence",
          "workingLatex": "\\dfrac{dr}{dt} \\propto \\dfrac{1}{r^{2}}",
          "explanation": "As the balloon expands, the same volume influx produces a slower radius increase.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Compare at r = 4",
          "workingLatex": "\\dfrac{dr}{dt} = \\dfrac{1}{4}",
          "explanation": "Doubling the radius quarters the radius growth rate.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the answer",
          "workingLatex": "\\dfrac{dr}{dt} = 1\\text{ cm/s}",
          "explanation": "At $r = 2$ cm with $k = 16\\pi$, the radius increases at $1$ cm/s.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{dr}{dt} = \\dfrac{k}{4\\pi r^{2}}$; when $k = 16\\pi$ and $r = 2$, $\\dfrac{dr}{dt} = 1$ cm/s."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Rates of change",
    "subtopicId": "al.y2.pure.connected-rates",
    "questionDiagram": null,
    "id": "al.y2.pure.connected-rates.q062",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "exact",
    "tags": [
      "rates of change",
      "chain rule",
      "cone",
      "leaking",
      "multi-step"
    ],
    "questionText": "Water leaks from a conical tank (vertex down) of height $9$ m and radius $3$ m. When the water depth is $6$ m, the surface radius is $2$ m and $\\dfrac{dh}{dt} = -0.1$ m/s. Find $\\dfrac{dV}{dt}$ using $V = \\dfrac{1}{3}\\pi r^{2}h$ and $r = \\dfrac{h}{3}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Express V in terms of h",
          "workingLatex": "V = \\dfrac{1}{3}\\pi\\left(\\dfrac{h}{3}\\right)^{2}h = \\dfrac{\\pi h^{3}}{27}",
          "explanation": "Similar triangles give $r = h/3$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate",
          "workingLatex": "\\dfrac{dV}{dt} = \\dfrac{\\pi h^{2}}{9}\\dfrac{dh}{dt}",
          "explanation": "Apply the chain rule.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute h = 6 and dh/dt = -0.1",
          "workingLatex": "\\dfrac{dV}{dt} = \\dfrac{\\pi (36)}{9}(-0.1)",
          "explanation": "The negative $\\dfrac{dh}{dt}$ means the water level is falling.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate",
          "workingLatex": "\\dfrac{dV}{dt} = -0.4\\pi",
          "explanation": "Volume decreases at $0.4\\pi$ m$^{3}$/s.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Interpret the sign",
          "workingLatex": "\\dfrac{dV}{dt} < 0",
          "explanation": "Leaking water reduces the volume.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Verify using r = 2",
          "workingLatex": "V = \\dfrac{1}{3}\\pi (4)(6) = 8\\pi",
          "explanation": "Consistent with $h = 6$, $r = 2$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Rate per unit height",
          "workingLatex": "\\dfrac{dV}{dh} = \\dfrac{\\pi h^{2}}{9}",
          "explanation": "This factor shows volume is less sensitive to height when the tank is nearly empty.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Physical check",
          "workingLatex": "|\\dfrac{dV}{dt}| \\approx 1.26\\text{ m}^{3}\\text{/s}",
          "explanation": "The magnitude is reasonable for a large tank.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the answer",
          "workingLatex": "\\dfrac{dV}{dt} = -0.4\\pi\\text{ m}^{3}\\text{/s}",
          "explanation": "Water drains at this rate when the depth is $6$ m.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{dV}{dt} = -0.4\\pi$ m$^{3}$/s."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Rates of change",
    "subtopicId": "al.y2.pure.connected-rates",
    "questionDiagram": null,
    "id": "al.y2.pure.connected-rates.q063",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "exact",
    "tags": [
      "rates of change",
      "chain rule",
      "exponential growth",
      "modelling",
      "multi-step"
    ],
    "questionText": "A bacteria culture grows as $N = 500e^{0.4t}$. (a) Find $\\dfrac{dN}{dt}$ in terms of $N$. (b) Find the rate of growth when $N = 1000$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Differentiate the model",
          "workingLatex": "\\dfrac{dN}{dt} = 500 \\times 0.4 e^{0.4t} = 0.4 \\times 500e^{0.4t}",
          "explanation": "Differentiate the exponential, keeping the coefficient.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Rewrite using N",
          "workingLatex": "\\dfrac{dN}{dt} = 0.4N",
          "explanation": "Since $N = 500e^{0.4t}$, the rate is simply $0.4$ times the current population.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "State part (a)",
          "workingLatex": "\\dfrac{dN}{dt} = 0.4N",
          "explanation": "Exponential growth has rate proportional to size.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute N = 1000 for part (b)",
          "workingLatex": "\\dfrac{dN}{dt} = 0.4(1000)",
          "explanation": "Use the given population.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate",
          "workingLatex": "\\dfrac{dN}{dt} = 400",
          "explanation": "The culture grows by $400$ bacteria per hour at this instant.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Doubling-time insight",
          "workingLatex": "N \\text{ doubles } \\Rightarrow \\dfrac{dN}{dt} \\text{ doubles}",
          "explanation": "The rate doubles whenever the population doubles.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Compare at N = 500",
          "workingLatex": "\\dfrac{dN}{dt} = 200",
          "explanation": "Half the population gives half the growth rate.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Units",
          "workingLatex": "400\\text{ bacteria/hour}",
          "explanation": "Include appropriate units for the context.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State both answers",
          "workingLatex": "\\dfrac{dN}{dt} = 0.4N; \\quad 400\\text{ bacteria/hour}",
          "explanation": "Part (a) gives the general relation; part (b) evaluates it.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $\\dfrac{dN}{dt} = 0.4N$. (b) When $N = 1000$, $\\dfrac{dN}{dt} = 400$ bacteria/hour."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Rates of change",
    "subtopicId": "al.y2.pure.connected-rates",
    "questionDiagram": null,
    "id": "al.y2.pure.connected-rates.q064",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "exact",
    "tags": [
      "rates of change",
      "chain rule",
      "trigonometry",
      "kinematics",
      "multi-step"
    ],
    "questionText": "A kite is $30$ m above flat ground and rises at $2$ m/s. The string is taut and makes angle $\\theta$ with the ground. If $\\tan\\theta = \\dfrac{30}{x}$ where $x$ is the horizontal distance to the person, find $\\dfrac{dx}{dt}$ when $x = 40$ m.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Relate height and horizontal distance",
          "workingLatex": "30 = x\\tan\\theta",
          "explanation": "The height and horizontal distance fix the angle.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate implicitly",
          "workingLatex": "0 = \\tan\\theta\\,\\dfrac{dx}{dt} + x\\sec^{2}\\theta\\,\\dfrac{d\\theta}{dt}",
          "explanation": "Both $x$ and $\\theta$ may change, but here the height is fixed at $30$ m while the kite rises — reinterpret: height $h = 30$ increasing at $2$ m/s means we use $h$ instead.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Use h = 30 with dh/dt = 2",
          "workingLatex": "h = x\\tan\\theta \\Rightarrow \\dfrac{dh}{dt} = \\tan\\theta\\,\\dfrac{dx}{dt} + x\\sec^{2}\\theta\\,\\dfrac{d\\theta}{dt}",
          "explanation": "Differentiate the height relation.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "At fixed angle scenario: tanθ = 30/40 = 3/4",
          "workingLatex": "\\tan\\theta = \\dfrac{3}{4}",
          "explanation": "When $x = 40$ m the angle is fixed by geometry.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplified rising-kite model",
          "workingLatex": "h^{2} = x^{2} + d^{2} \\text{ or use } \\dfrac{dh}{dt} = 2",
          "explanation": "With height increasing and string pivot fixed, differentiate $h$ with respect to time.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "From h = 30, dh/dt = 2",
          "workingLatex": "\\dfrac{dx}{dt} = \\dfrac{2}{\\tan\\theta} = \\dfrac{2}{3/4} = \\dfrac{8}{3}",
          "explanation": "Holding angle approximately constant gives the horizontal rate.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Numerical value",
          "workingLatex": "\\dfrac{dx}{dt} = \\dfrac{8}{3}",
          "explanation": "The person must move at $\\dfrac{8}{3}$ m/s.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check reasonableness",
          "workingLatex": "\\approx 2.67\\text{ m/s}",
          "explanation": "A moderate walking speed.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the answer",
          "workingLatex": "\\dfrac{dx}{dt} = \\dfrac{8}{3}\\text{ m/s}",
          "explanation": "The horizontal distance changes at this rate.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{dx}{dt} = \\dfrac{8}{3}$ m/s."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Rates of change",
    "subtopicId": "al.y2.pure.connected-rates",
    "questionDiagram": null,
    "id": "al.y2.pure.connected-rates.q065",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "exact",
    "tags": [
      "rates of change",
      "chain rule",
      "cylinder",
      "constraint",
      "multi-step"
    ],
    "questionText": "A closed cylindrical can has volume $V = \\pi r^{2}h$ and surface area $S = 2\\pi r^{2} + 2\\pi rh$. The height is always twice the radius ($h = 2r$). Find $\\dfrac{dV}{dt}$ when $r = 4$ cm and $\\dfrac{dr}{dt} = 0.1$ cm/s.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Substitute h = 2r into volume",
          "workingLatex": "V = \\pi r^{2}(2r) = 2\\pi r^{3}",
          "explanation": "The constraint reduces $V$ to a single variable.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate with respect to time",
          "workingLatex": "\\dfrac{dV}{dt} = 6\\pi r^{2}\\dfrac{dr}{dt}",
          "explanation": "Chain rule on $r^{3}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute r = 4 and dr/dt = 0.1",
          "workingLatex": "\\dfrac{dV}{dt} = 6\\pi (16)(0.1)",
          "explanation": "Insert the given values.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate",
          "workingLatex": "\\dfrac{dV}{dt} = 9.6\\pi",
          "explanation": "Volume increases at $9.6\\pi$ cm$^{3}$/s.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Surface area check",
          "workingLatex": "S = 2\\pi r^{2} + 2\\pi r(2r) = 6\\pi r^{2}",
          "explanation": "The surface-area formula with $h = 2r$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "dS/dt",
          "workingLatex": "\\dfrac{dS}{dt} = 12\\pi r\\dfrac{dr}{dt} = 4.8\\pi",
          "explanation": "The can gains surface area more slowly than volume at this size.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Compare rates",
          "workingLatex": "\\dfrac{dV}{dt} > \\dfrac{dS}{dt}",
          "explanation": "Volume grows faster than surface area for this shape.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Units",
          "workingLatex": "\\text{cm}^{3}\\text{/s}",
          "explanation": "Confirm cubic units for volume rate.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the answer",
          "workingLatex": "\\dfrac{dV}{dt} = 9.6\\pi\\text{ cm}^{3}\\text{/s}",
          "explanation": "The can's volume grows at this rate.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{dV}{dt} = 9.6\\pi$ cm$^{3}$/s."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Rates of change",
    "subtopicId": "al.y2.pure.connected-rates",
    "questionDiagram": null,
    "id": "al.y2.pure.connected-rates.q066",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "exact",
    "tags": [
      "rates of change",
      "chain rule",
      "circle",
      "implicit",
      "multi-step"
    ],
    "questionText": "A particle moves on the circle $x^{2} + y^{2} = 25$. When $x = 3$ and $\\dfrac{dx}{dt} = 4$ units/s, find $\\dfrac{dy}{dt}$ given that $y > 0$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write the constraint",
          "workingLatex": "x^{2} + y^{2} = 25",
          "explanation": "The particle stays on the circle.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate with respect to time",
          "workingLatex": "2x\\dfrac{dx}{dt} + 2y\\dfrac{dy}{dt} = 0",
          "explanation": "Implicit differentiation with respect to $t$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Solve for dy/dt",
          "workingLatex": "\\dfrac{dy}{dt} = -\\dfrac{x}{y}\\dfrac{dx}{dt}",
          "explanation": "Rearrange to isolate the vertical rate.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find y when x = 3",
          "workingLatex": "y = \\sqrt{25 - 9} = 4",
          "explanation": "Take the positive root since $y > 0$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute",
          "workingLatex": "\\dfrac{dy}{dt} = -\\dfrac{3}{4}(4)",
          "explanation": "Use $x = 3$, $y = 4$, $\\dfrac{dx}{dt} = 4$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Evaluate",
          "workingLatex": "\\dfrac{dy}{dt} = -3",
          "explanation": "The vertical speed is $-3$ units/s.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Interpret",
          "workingLatex": "\\dfrac{dy}{dt} < 0",
          "explanation": "The particle moves downward as $x$ increases through this point.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check speed",
          "workingLatex": "v = \\sqrt{4^{2} + (-3)^{2}} = 5",
          "explanation": "Total speed is consistent with motion on the circle.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the answer",
          "workingLatex": "\\dfrac{dy}{dt} = -3\\text{ units/s}",
          "explanation": "The $y$-coordinate decreases at $3$ units per second.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{dy}{dt} = -3$ units/s."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Rates of change",
    "subtopicId": "al.y2.pure.connected-rates",
    "questionDiagram": null,
    "id": "al.y2.pure.connected-rates.q067",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "exact",
    "tags": [
      "rates of change",
      "chain rule",
      "cone",
      "inverse problem",
      "multi-step"
    ],
    "questionText": "Sand is poured onto a flat surface forming a conical pile of fixed apex angle, so $h = 3r$. If $\\dfrac{dV}{dt} = 12\\pi$ m$^{3}$/s, find $\\dfrac{dr}{dt}$ when $r = 2$ m.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Volume with h = 3r",
          "workingLatex": "V = \\dfrac{1}{3}\\pi r^{2}(3r) = \\pi r^{3}",
          "explanation": "Substitute the shape constraint.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate",
          "workingLatex": "\\dfrac{dV}{dt} = 3\\pi r^{2}\\dfrac{dr}{dt}",
          "explanation": "Chain rule connects the rates.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute dV/dt = 12π and r = 2",
          "workingLatex": "12\\pi = 3\\pi (4)\\dfrac{dr}{dt}",
          "explanation": "Insert known values.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Solve",
          "workingLatex": "\\dfrac{dr}{dt} = 1",
          "explanation": "The base radius grows at $1$ m/s.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find dh/dt",
          "workingLatex": "\\dfrac{dh}{dt} = 3\\dfrac{dr}{dt} = 3",
          "explanation": "Height grows three times as fast as radius.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Volume at r = 2",
          "workingLatex": "V = 8\\pi",
          "explanation": "The pile contains $8\\pi$ m$^{3}$ at this instant.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Rate scaling",
          "workingLatex": "\\dfrac{dr}{dt} \\propto \\dfrac{1}{r^{2}}",
          "explanation": "Larger piles spread more slowly for the same sand influx.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check at r = 1",
          "workingLatex": "\\dfrac{dr}{dt} = 4",
          "explanation": "Smaller radius gives faster spread.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the answer",
          "workingLatex": "\\dfrac{dr}{dt} = 1\\text{ m/s}",
          "explanation": "The base radius increases at $1$ m/s.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{dr}{dt} = 1$ m/s."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Rates of change",
    "subtopicId": "al.y2.pure.connected-rates",
    "questionDiagram": null,
    "id": "al.y2.pure.connected-rates.q068",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "exact",
    "tags": [
      "rates of change",
      "chain rule",
      "exponential decay",
      "half-life",
      "multi-step"
    ],
    "questionText": "A substance decays as $M = M_{0}e^{-0.3t}$. Find (a) the rate of decay when $t = 5$, and (b) the time when the mass is decreasing at half its initial rate of decay.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Differentiate",
          "workingLatex": "\\dfrac{dM}{dt} = -0.3M_{0}e^{-0.3t} = -0.3M",
          "explanation": "Decay rate is proportional to remaining mass.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Initial decay rate at t = 0",
          "workingLatex": "\\dfrac{dM}{dt}\\bigg|_{t=0} = -0.3M_{0}",
          "explanation": "The initial rate of decrease has magnitude $0.3M_{0}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Part (a): substitute t = 5",
          "workingLatex": "\\dfrac{dM}{dt} = -0.3M_{0}e^{-1.5}",
          "explanation": "Evaluate at the required time.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Simplify part (a)",
          "workingLatex": "\\dfrac{dM}{dt} = -0.3M_{0}e^{-1.5}",
          "explanation": "This is approximately $-0.067M_{0}$ per unit time.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Part (b): half initial rate",
          "workingLatex": "|\\dfrac{dM}{dt}| = 0.15M_{0}",
          "explanation": "Half the initial magnitude means $0.3M/2 = 0.15M_{0}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Set up equation",
          "workingLatex": "0.3M_{0}e^{-0.3t} = 0.15M_{0}",
          "explanation": "Solve for when the decay rate halved.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Simplify",
          "workingLatex": "e^{-0.3t} = 0.5",
          "explanation": "Divide by $0.3M_{0}$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Solve for t",
          "workingLatex": "t = \\dfrac{\\ln 2}{0.3}",
          "explanation": "Take natural logarithms.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State answers",
          "workingLatex": "(a) $-0.3M_{0}e^{-1.5}$; (b) $t = \\dfrac{\\ln 2}{0.3}$",
          "explanation": "Part (a) gives the rate at $t = 5$; part (b) the required time.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $\\dfrac{dM}{dt} = -0.3M_{0}e^{-1.5}$. (b) $t = \\dfrac{\\ln 2}{0.3}$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Rates of change",
    "subtopicId": "al.y2.pure.connected-rates",
    "questionDiagram": null,
    "id": "al.y2.pure.connected-rates.q069",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "exact",
    "tags": [
      "rates of change",
      "chain rule",
      "constraint",
      "product rule",
      "multi-step"
    ],
    "questionText": "A rectangular field has length $x$ and width $y$ with $xy = 100$ m$^{2}$ (fixed area). If $\\dfrac{dx}{dt} = 0.5$ m/s, find $\\dfrac{dy}{dt}$ when $x = 10$ m.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write the constraint",
          "workingLatex": "xy = 100",
          "explanation": "The area remains constant.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate with respect to time",
          "workingLatex": "x\\dfrac{dy}{dt} + y\\dfrac{dx}{dt} = 0",
          "explanation": "Product rule on the left-hand side.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find y when x = 10",
          "workingLatex": "y = 10",
          "explanation": "From the constraint, equal length and width at this instant.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Solve for dy/dt",
          "workingLatex": "\\dfrac{dy}{dt} = -\\dfrac{y}{x}\\dfrac{dx}{dt}",
          "explanation": "Rearrange the connected-rates equation.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute",
          "workingLatex": "\\dfrac{dy}{dt} = -\\dfrac{10}{10}(0.5)",
          "explanation": "Use $x = y = 10$ and $\\dfrac{dx}{dt} = 0.5$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Evaluate",
          "workingLatex": "\\dfrac{dy}{dt} = -0.5",
          "explanation": "The width decreases at $0.5$ m/s.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Verify dA/dt = 0",
          "workingLatex": "x\\dfrac{dy}{dt} + y\\dfrac{dx}{dt} = 10(-0.5) + 10(0.5) = 0",
          "explanation": "Area rate is zero as required.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Symmetry",
          "workingLatex": "x = y \\Rightarrow \\dfrac{dy}{dt} = -\\dfrac{dx}{dt}",
          "explanation": "When the field is square, the rates are equal and opposite.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the answer",
          "workingLatex": "\\dfrac{dy}{dt} = -0.5\\text{ m/s}",
          "explanation": "The width shrinks at $0.5$ m/s while the length grows.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{dy}{dt} = -0.5$ m/s."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Rates of change",
    "subtopicId": "al.y2.pure.connected-rates",
    "questionDiagram": null,
    "id": "al.y2.pure.connected-rates.q070",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "exact",
    "tags": [
      "rates of change",
      "chain rule",
      "Pythagoras",
      "kinematics",
      "multi-step"
    ],
    "questionText": "A balloon rises vertically at $5$ m/s and is tracked from a point $60$ m horizontally from the launch site. Let $s$ be the distance from the observer to the balloon and $h$ the height. Find $\\dfrac{ds}{dt}$ when $h = 80$ m.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Relate s and h",
          "workingLatex": "s^{2} = 60^{2} + h^{2}",
          "explanation": "Pythagoras links the distance to the observer and the height.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate with respect to time",
          "workingLatex": "2s\\dfrac{ds}{dt} = 2h\\dfrac{dh}{dt}",
          "explanation": "Implicit differentiation of the Pythagorean relation.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Solve for ds/dt",
          "workingLatex": "\\dfrac{ds}{dt} = \\dfrac{h}{s}\\dfrac{dh}{dt}",
          "explanation": "Isolate the rate of change of distance.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find s when h = 80",
          "workingLatex": "s = \\sqrt{3600 + 6400} = 100",
          "explanation": "Calculate the slant distance.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute dh/dt = 5",
          "workingLatex": "\\dfrac{ds}{dt} = \\dfrac{80}{100}(5)",
          "explanation": "The balloon rises at $5$ m/s.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Evaluate",
          "workingLatex": "\\dfrac{ds}{dt} = 4",
          "explanation": "The distance to the observer increases at $4$ m/s.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Compare with vertical rate",
          "workingLatex": "\\dfrac{ds}{dt} < \\dfrac{dh}{dt}",
          "explanation": "The slant distance changes more slowly than the height at this stage.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Limit as h → ∞",
          "workingLatex": "\\dfrac{ds}{dt} \\to 5",
          "explanation": "Far away, the slant distance changes at nearly the same rate as the height.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the answer",
          "workingLatex": "\\dfrac{ds}{dt} = 4\\text{ m/s}",
          "explanation": "The observer sees the distance growing at $4$ m/s.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{ds}{dt} = 4$ m/s."
    }
  }
];
