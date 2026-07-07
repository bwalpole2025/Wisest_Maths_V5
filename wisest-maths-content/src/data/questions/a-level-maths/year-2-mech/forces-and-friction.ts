import { Question } from "@/lib/types";

/**
 * A-Level Maths · Year 2 Mechanics · Forces and friction
 * Resolving on inclined planes; F ≤ μR; limiting equilibrium; ladders;
 * horizontal and angled forces on rough surfaces. 70 questions with full worked solutions.
 */
export const questions: Question[] = 
[
  {
    "id": "al.y2.mech.forces-friction.q001",
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Forces and friction",
    "subtopicId": "al.y2.mech.forces-friction",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "written",
    "tags": [
      "friction",
      "definition",
      "limiting"
    ],
    "questionText": "State the law of friction for a particle on a rough horizontal surface, and explain what is meant by limiting friction.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the friction inequality",
          "workingLatex": "F \\le \\mu R",
          "explanation": "The frictional force $F$ acting on a particle can never exceed $\\mu R$, where $\\mu$ is the coefficient of friction and $R$ is the normal reaction.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Define the coefficient of friction",
          "workingLatex": "\\mu = \\dfrac{F_{\\max}}{R}",
          "explanation": "$\\mu$ is a dimensionless constant that depends on the materials in contact.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Explain limiting friction",
          "workingLatex": "F = \\mu R \\quad \\text{(limiting case)}",
          "explanation": "When the particle is on the point of sliding, friction reaches its maximum possible value $F_{\\max} = \\mu R$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Describe static friction",
          "workingLatex": "0 \\le F \\le \\mu R",
          "explanation": "Before sliding begins, friction adjusts to match the applied force up to the limit $\\mu R$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State the direction rule",
          "workingLatex": "\\text{Friction opposes the tendency to slide}",
          "explanation": "Friction always acts parallel to the surface and points opposite to the direction in which the particle would move.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Summarise",
          "workingLatex": "F \\le \\mu R; \\text{ limiting friction } = \\mu R",
          "explanation": "The law of friction bounds the frictional force; at limiting equilibrium it equals $\\mu R$.",
          "diagram": null
        }
      ],
      "finalAnswer": "Friction satisfies $F \\le \\mu R$, where $R$ is the normal reaction. Limiting friction is the maximum value $F_{\\max} = \\mu R$, reached when the particle is about to slide."
    }
  },
  {
    "id": "al.y2.mech.forces-friction.q002",
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Forces and friction",
    "subtopicId": "al.y2.mech.forces-friction",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "numeric",
    "tags": [
      "limiting-friction",
      "muR"
    ],
    "questionText": "A particle rests on a rough horizontal surface. The normal reaction is $50\\,\\text{N}$ and the coefficient of friction is $\\mu = 0.4$. Find the magnitude of the limiting frictional force.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall limiting friction",
          "workingLatex": "F_{{\\max}} = \\mu R",
          "explanation": "At the point of sliding, friction takes its maximum value $\\mu R$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute the values",
          "workingLatex": "F_{\\max} = 0.4 \\times 50",
          "explanation": "$\\mu = 0.4$ and $R = 50\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Calculate",
          "workingLatex": "F_{\\max} = 20\\,\\text{N}",
          "explanation": "$0.4 \\times 50 = 20$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Interpret",
          "workingLatex": "F_{\\max} = 20\\,\\text{N}",
          "explanation": "No horizontal force greater than $20\\,\\text{N}$ can be overcome without sliding.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State units",
          "workingLatex": "\\text{N}",
          "explanation": "Friction is a force, measured in newtons.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Final answer",
          "workingLatex": "F_{\\max} = 20\\,\\text{N}",
          "explanation": "The limiting frictional force is $20\\,\\text{N}$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$F_{\\max} = 20\\,\\text{N}$"
    }
  },
  {
    "id": "al.y2.mech.forces-friction.q003",
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Forces and friction",
    "subtopicId": "al.y2.mech.forces-friction",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "numeric",
    "tags": [
      "coefficient-of-friction",
      "mu"
    ],
    "questionText": "A particle is on the point of sliding along a horizontal surface. The frictional force is $18\\,\\text{N}$ and the normal reaction is $60\\,\\text{N}$. Find $\\mu$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify limiting equilibrium",
          "workingLatex": "F = \\mu R",
          "explanation": "On the point of sliding, friction equals its maximum value.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Rearrange for $\\mu$",
          "workingLatex": "\\mu = \\dfrac{F}{R}",
          "explanation": "Dividing friction by the normal reaction gives the coefficient of friction.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute",
          "workingLatex": "\\mu = \\dfrac{18}{60}",
          "explanation": "$F = 18\\,\\text{N}$, $R = 60\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate",
          "workingLatex": "\\mu = 0.300",
          "explanation": "$\\mu = 0.300$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check magnitude",
          "workingLatex": "0 < \\mu = 0.300 < 1",
          "explanation": "For many common surfaces $\\mu$ is between 0 and 1.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "\\mu = 0.300",
          "explanation": "The coefficient of friction is $0.300$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\mu = 0.300$"
    }
  },
  {
    "id": "al.y2.mech.forces-friction.q004",
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Forces and friction",
    "subtopicId": "al.y2.mech.forces-friction",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "numeric",
    "tags": [
      "limiting-friction",
      "muR"
    ],
    "questionText": "A crate rests on a warehouse floor. The normal reaction is $40\\,\\text{N}$ and $\\mu = 0.3$. Find the limiting frictional force.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State limiting friction",
          "workingLatex": "F_{{\\max}} = \\mu R",
          "explanation": "Maximum friction before sliding is $\\mu R$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute",
          "workingLatex": "F_{\\max} = 0.3 \\times 40",
          "explanation": "$\\mu = 0.3$, $R = 40\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Calculate",
          "workingLatex": "F_{\\max} = 12\\,\\text{N}",
          "explanation": "$0.3 \\times 40 = 12$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Interpret physically",
          "workingLatex": "F_{\\max} = 12\\,\\text{N}",
          "explanation": "This is the largest horizontal force friction can balance without sliding.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Note direction",
          "workingLatex": "\\text{Friction acts horizontally along the surface}",
          "explanation": "It opposes any tendency to slide.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "F_{\\max} = 12\\,\\text{N}",
          "explanation": "Limiting friction is $12\\,\\text{N}$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$F_{\\max} = 12\\,\\text{N}$"
    }
  },
  {
    "id": "al.y2.mech.forces-friction.q005",
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Forces and friction",
    "subtopicId": "al.y2.mech.forces-friction",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "numeric",
    "tags": [
      "limiting-friction",
      "muR"
    ],
    "questionText": "A box sits on a rough table. The normal reaction is $24\\,\\text{N}$ and $\\mu = 0.5$. Find the limiting frictional force.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State limiting friction",
          "workingLatex": "F_{{\\max}} = \\mu R",
          "explanation": "Maximum friction before sliding is $\\mu R$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute",
          "workingLatex": "F_{\\max} = 0.5 \\times 24",
          "explanation": "$\\mu = 0.5$, $R = 24\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Calculate",
          "workingLatex": "F_{\\max} = 12\\,\\text{N}",
          "explanation": "$0.5 \\times 24 = 12$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Interpret physically",
          "workingLatex": "F_{\\max} = 12\\,\\text{N}",
          "explanation": "This is the largest horizontal force friction can balance without sliding.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Note direction",
          "workingLatex": "\\text{Friction acts horizontally along the surface}",
          "explanation": "It opposes any tendency to slide.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "F_{\\max} = 12\\,\\text{N}",
          "explanation": "Limiting friction is $12\\,\\text{N}$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$F_{\\max} = 12\\,\\text{N}$"
    }
  },
  {
    "id": "al.y2.mech.forces-friction.q006",
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Forces and friction",
    "subtopicId": "al.y2.mech.forces-friction",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "numeric",
    "tags": [
      "limiting-friction",
      "muR"
    ],
    "questionText": "A package is on a loading bay. The normal reaction is $80\\,\\text{N}$ and $\\mu = 0.25$. Find the limiting frictional force.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State limiting friction",
          "workingLatex": "F_{{\\max}} = \\mu R",
          "explanation": "Maximum friction before sliding is $\\mu R$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute",
          "workingLatex": "F_{\\max} = 0.25 \\times 80",
          "explanation": "$\\mu = 0.25$, $R = 80\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Calculate",
          "workingLatex": "F_{\\max} = 20\\,\\text{N}",
          "explanation": "$0.25 \\times 80 = 20$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Interpret physically",
          "workingLatex": "F_{\\max} = 20\\,\\text{N}",
          "explanation": "This is the largest horizontal force friction can balance without sliding.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Note direction",
          "workingLatex": "\\text{Friction acts horizontally along the surface}",
          "explanation": "It opposes any tendency to slide.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "F_{\\max} = 20\\,\\text{N}",
          "explanation": "Limiting friction is $20\\,\\text{N}$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$F_{\\max} = 20\\,\\text{N}$"
    }
  },
  {
    "id": "al.y2.mech.forces-friction.q007",
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Forces and friction",
    "subtopicId": "al.y2.mech.forces-friction",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "numeric",
    "tags": [
      "limiting-friction",
      "muR"
    ],
    "questionText": "A toolbox rests on a workbench. The normal reaction is $15\\,\\text{N}$ and $\\mu = 0.6$. Find the limiting frictional force.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State limiting friction",
          "workingLatex": "F_{{\\max}} = \\mu R",
          "explanation": "Maximum friction before sliding is $\\mu R$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute",
          "workingLatex": "F_{\\max} = 0.6 \\times 15",
          "explanation": "$\\mu = 0.6$, $R = 15\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Calculate",
          "workingLatex": "F_{\\max} = 9\\,\\text{N}",
          "explanation": "$0.6 \\times 15 = 9$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Interpret physically",
          "workingLatex": "F_{\\max} = 9\\,\\text{N}",
          "explanation": "This is the largest horizontal force friction can balance without sliding.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Note direction",
          "workingLatex": "\\text{Friction acts horizontally along the surface}",
          "explanation": "It opposes any tendency to slide.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "F_{\\max} = 9\\,\\text{N}",
          "explanation": "Limiting friction is $9\\,\\text{N}$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$F_{\\max} = 9\\,\\text{N}$"
    }
  },
  {
    "id": "al.y2.mech.forces-friction.q008",
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Forces and friction",
    "subtopicId": "al.y2.mech.forces-friction",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "numeric",
    "tags": [
      "limiting-friction",
      "muR"
    ],
    "questionText": "A pallet sits on a factory floor. The normal reaction is $100\\,\\text{N}$ and $\\mu = 0.35$. Find the limiting frictional force.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State limiting friction",
          "workingLatex": "F_{{\\max}} = \\mu R",
          "explanation": "Maximum friction before sliding is $\\mu R$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute",
          "workingLatex": "F_{\\max} = 0.35 \\times 100",
          "explanation": "$\\mu = 0.35$, $R = 100\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Calculate",
          "workingLatex": "F_{\\max} = 35\\,\\text{N}",
          "explanation": "$0.35 \\times 100 = 35$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Interpret physically",
          "workingLatex": "F_{\\max} = 35\\,\\text{N}",
          "explanation": "This is the largest horizontal force friction can balance without sliding.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Note direction",
          "workingLatex": "\\text{Friction acts horizontally along the surface}",
          "explanation": "It opposes any tendency to slide.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "F_{\\max} = 35\\,\\text{N}",
          "explanation": "Limiting friction is $35\\,\\text{N}$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$F_{\\max} = 35\\,\\text{N}$"
    }
  },
  {
    "id": "al.y2.mech.forces-friction.q009",
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Forces and friction",
    "subtopicId": "al.y2.mech.forces-friction",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "numeric",
    "tags": [
      "limiting-friction",
      "muR"
    ],
    "questionText": "A suitcase is on a rough platform. The normal reaction is $32\\,\\text{N}$ and $\\mu = 0.45$. Find the limiting frictional force.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State limiting friction",
          "workingLatex": "F_{{\\max}} = \\mu R",
          "explanation": "Maximum friction before sliding is $\\mu R$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute",
          "workingLatex": "F_{\\max} = 0.45 \\times 32",
          "explanation": "$\\mu = 0.45$, $R = 32\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Calculate",
          "workingLatex": "F_{\\max} = 14.40\\,\\text{N}",
          "explanation": "$0.45 \\times 32 = 14.40$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Interpret physically",
          "workingLatex": "F_{\\max} = 14.40\\,\\text{N}",
          "explanation": "This is the largest horizontal force friction can balance without sliding.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Note direction",
          "workingLatex": "\\text{Friction acts horizontally along the surface}",
          "explanation": "It opposes any tendency to slide.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "F_{\\max} = 14.40\\,\\text{N}",
          "explanation": "Limiting friction is $14.40\\,\\text{N}$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$F_{\\max} = 14.40\\,\\text{N}$"
    }
  },
  {
    "id": "al.y2.mech.forces-friction.q010",
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Forces and friction",
    "subtopicId": "al.y2.mech.forces-friction",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "numeric",
    "tags": [
      "limiting-friction",
      "muR"
    ],
    "questionText": "A heavy block rests on concrete. The normal reaction is $150\\,\\text{N}$ and $\\mu = 0.2$. Find the limiting frictional force.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State limiting friction",
          "workingLatex": "F_{{\\max}} = \\mu R",
          "explanation": "Maximum friction before sliding is $\\mu R$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute",
          "workingLatex": "F_{\\max} = 0.2 \\times 150",
          "explanation": "$\\mu = 0.2$, $R = 150\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Calculate",
          "workingLatex": "F_{\\max} = 30\\,\\text{N}",
          "explanation": "$0.2 \\times 150 = 30$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Interpret physically",
          "workingLatex": "F_{\\max} = 30\\,\\text{N}",
          "explanation": "This is the largest horizontal force friction can balance without sliding.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Note direction",
          "workingLatex": "\\text{Friction acts horizontally along the surface}",
          "explanation": "It opposes any tendency to slide.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "F_{\\max} = 30\\,\\text{N}",
          "explanation": "Limiting friction is $30\\,\\text{N}$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$F_{\\max} = 30\\,\\text{N}$"
    }
  },
  {
    "id": "al.y2.mech.forces-friction.q011",
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Forces and friction",
    "subtopicId": "al.y2.mech.forces-friction",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "numeric",
    "tags": [
      "normal-reaction",
      "weight",
      "horizontal"
    ],
    "questionText": "A particle of mass $5\\,\\text{kg}$ rests on a rough horizontal surface. Taking $g = 9.8\\,\\text{m s}^{-2}$, find the normal reaction.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Draw a force diagram",
          "workingLatex": "\\text{Weight } W \\text{ down, normal } R \\text{ up}",
          "explanation": "On a horizontal surface with no vertical acceleration, the only vertical forces are weight and reaction.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Calculate the weight",
          "workingLatex": "W = mg = 5 \\times 9.8 = 49\\,\\text{N}",
          "explanation": "Weight is mass times $g$: $49\\,\\text{N}$ downward.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Apply vertical equilibrium",
          "workingLatex": "R - W = 0",
          "explanation": "The particle is not accelerating vertically, so upward and downward forces balance.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Solve for $R$",
          "workingLatex": "R = 49\\,\\text{N}",
          "explanation": "The normal reaction equals the weight: $49\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Note for friction",
          "workingLatex": "R = 49\\,\\text{N} \\Rightarrow F_{\\max} = \\mu \\times 49",
          "explanation": "This reaction is used in $F \\le \\mu R$ for horizontal friction problems.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "R = 49\\,\\text{N}",
          "explanation": "$R = 49\\,\\text{N}$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$R = 49\\,\\text{N}$"
    }
  },
  {
    "id": "al.y2.mech.forces-friction.q012",
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Forces and friction",
    "subtopicId": "al.y2.mech.forces-friction",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "written",
    "tags": [
      "F-le-muR",
      "equilibrium",
      "horizontal"
    ],
    "questionText": "A particle of mass $8\\,\\text{kg}$ rests on a rough horizontal surface with $\\mu = 0.4$. A horizontal force of $25\\,\\text{N}$ is applied. Taking $g = 9.8\\,\\text{m s}^{-2}$, state whether the particle slides, justifying your answer.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Find the weight",
          "workingLatex": "W = 8 \\times 9.8 = 78.40\\,\\text{N}",
          "explanation": "Weight is $78.40\\,\\text{N}$ downward.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find the normal reaction",
          "workingLatex": "R = 78.40\\,\\text{N}",
          "explanation": "On a horizontal surface with no vertical forces other than weight, $R = W$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Calculate limiting friction",
          "workingLatex": "F_{\\max} = \\mu R = 0.4 \\times 78.40 = 31.36\\,\\text{N}",
          "explanation": "Maximum friction is $31.36\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Compare with applied force",
          "workingLatex": "P = 25\\,\\text{N} \\quad \\text{vs} \\quad F_{\\max} = 31.36\\,\\text{N}",
          "explanation": "The applied force is $25\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Apply the friction law",
          "workingLatex": "P ≤ F_{\\max}",
          "explanation": "Since $25 does not exceed 31.36, friction can balance the applied force.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Conclusion",
          "workingLatex": "\\text{The particle remains in equilibrium}",
          "explanation": "The particle does not slide because the applied force does not exceed limiting friction.",
          "diagram": null
        }
      ],
      "finalAnswer": "The particle does not slide; $F_{\\max} = 31.36\\,\\text{N}$ and $P = 25\\,\\text{N}$."
    }
  },
  {
    "id": "al.y2.mech.forces-friction.q013",
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Forces and friction",
    "subtopicId": "al.y2.mech.forces-friction",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "written",
    "tags": [
      "horizontal",
      "limiting-friction",
      "equilibrium"
    ],
    "questionText": "A particle of mass $6\\,\\text{kg}$ is on a rough horizontal plane with $\\mu = 0.3$. A horizontal pull of $12\\,\\text{N}$ acts on it. Taking $g = 9.8\\,\\text{m s}^{-2}$, determine whether the particle is in limiting equilibrium, in equilibrium without sliding, or sliding.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Calculate weight and reaction",
          "workingLatex": "W = R = 58.80\\,\\text{N}",
          "explanation": "$W = mg = 58.80\\,\\text{N}$; on a horizontal surface $R = W$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find limiting friction",
          "workingLatex": "F_{\\max} = 0.3 \\times 58.80 = 17.64\\,\\text{N}",
          "explanation": "$F_{\\max} = \\mu R = 17.64\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compare forces",
          "workingLatex": "P = 12\\,\\text{N}, \\quad F_{\\max} = 17.64\\,\\text{N}",
          "explanation": "Compare the applied pull with the maximum possible friction.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Classify the motion",
          "workingLatex": "\\text{Equilibrium (not at limit)}",
          "explanation": "Since the applied force is less than limiting friction, the particle is in equilibrium.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State friction magnitude",
          "workingLatex": "F = 12\\,\\text{N}",
          "explanation": "Friction equals applied force $12\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Conclusion",
          "workingLatex": "\\text{The particle remains at rest}",
          "explanation": "Friction balances the applied force.",
          "diagram": null
        }
      ],
      "finalAnswer": "The particle remains in equilibrium; $F_{\\max} = 17.64\\,\\text{N}$."
    }
  },
  {
    "id": "al.y2.mech.forces-friction.q014",
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Forces and friction",
    "subtopicId": "al.y2.mech.forces-friction",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "written",
    "tags": [
      "horizontal",
      "limiting-friction",
      "equilibrium"
    ],
    "questionText": "A particle of mass $10\\,\\text{kg}$ is on a rough horizontal plane with $\\mu = 0.5$. A horizontal pull of $40\\,\\text{N}$ acts on it. Taking $g = 9.8\\,\\text{m s}^{-2}$, determine whether the particle is in limiting equilibrium, in equilibrium without sliding, or sliding.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Calculate weight and reaction",
          "workingLatex": "W = R = 98\\,\\text{N}",
          "explanation": "$W = mg = 98\\,\\text{N}$; on a horizontal surface $R = W$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find limiting friction",
          "workingLatex": "F_{\\max} = 0.5 \\times 98 = 49\\,\\text{N}",
          "explanation": "$F_{\\max} = \\mu R = 49\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compare forces",
          "workingLatex": "P = 40\\,\\text{N}, \\quad F_{\\max} = 49\\,\\text{N}",
          "explanation": "Compare the applied pull with the maximum possible friction.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Classify the motion",
          "workingLatex": "\\text{Sliding}",
          "explanation": "Since the applied force exceeds limiting friction, the particle slides.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State friction magnitude",
          "workingLatex": "F = 40\\,\\text{N}",
          "explanation": "Friction equals limiting value $40\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Conclusion",
          "workingLatex": "\\text{The particle slides}",
          "explanation": "Applied force exceeds limiting friction.",
          "diagram": null
        }
      ],
      "finalAnswer": "The particle slides; $F_{\\max} = 49\\,\\text{N}$."
    }
  },
  {
    "id": "al.y2.mech.forces-friction.q015",
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Forces and friction",
    "subtopicId": "al.y2.mech.forces-friction",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "written",
    "tags": [
      "horizontal",
      "limiting-friction",
      "equilibrium"
    ],
    "questionText": "A particle of mass $4\\,\\text{kg}$ is on a rough horizontal plane with $\\mu = 0.25$. A horizontal pull of $8\\,\\text{N}$ acts on it. Taking $g = 9.8\\,\\text{m s}^{-2}$, determine whether the particle is in limiting equilibrium, in equilibrium without sliding, or sliding.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Calculate weight and reaction",
          "workingLatex": "W = R = 39.20\\,\\text{N}",
          "explanation": "$W = mg = 39.20\\,\\text{N}$; on a horizontal surface $R = W$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find limiting friction",
          "workingLatex": "F_{\\max} = 0.25 \\times 39.20 = 9.80\\,\\text{N}",
          "explanation": "$F_{\\max} = \\mu R = 9.80\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compare forces",
          "workingLatex": "P = 8\\,\\text{N}, \\quad F_{\\max} = 9.80\\,\\text{N}",
          "explanation": "Compare the applied pull with the maximum possible friction.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Classify the motion",
          "workingLatex": "\\text{Equilibrium (not at limit)}",
          "explanation": "Since the applied force is less than limiting friction, the particle is in equilibrium.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State friction magnitude",
          "workingLatex": "F = 8\\,\\text{N}",
          "explanation": "Friction equals applied force $8\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Conclusion",
          "workingLatex": "\\text{The particle remains at rest}",
          "explanation": "Friction balances the applied force.",
          "diagram": null
        }
      ],
      "finalAnswer": "The particle remains in equilibrium; $F_{\\max} = 9.80\\,\\text{N}$."
    }
  },
  {
    "id": "al.y2.mech.forces-friction.q016",
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Forces and friction",
    "subtopicId": "al.y2.mech.forces-friction",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "written",
    "tags": [
      "horizontal",
      "limiting-friction",
      "equilibrium"
    ],
    "questionText": "A particle of mass $3\\,\\text{kg}$ is on a rough horizontal plane with $\\mu = 0.6$. A horizontal pull of $20\\,\\text{N}$ acts on it. Taking $g = 9.8\\,\\text{m s}^{-2}$, determine whether the particle is in limiting equilibrium, in equilibrium without sliding, or sliding.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Calculate weight and reaction",
          "workingLatex": "W = R = 29.40\\,\\text{N}",
          "explanation": "$W = mg = 29.40\\,\\text{N}$; on a horizontal surface $R = W$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find limiting friction",
          "workingLatex": "F_{\\max} = 0.6 \\times 29.40 = 17.64\\,\\text{N}",
          "explanation": "$F_{\\max} = \\mu R = 17.64\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compare forces",
          "workingLatex": "P = 20\\,\\text{N}, \\quad F_{\\max} = 17.64\\,\\text{N}",
          "explanation": "Compare the applied pull with the maximum possible friction.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Classify the motion",
          "workingLatex": "\\text{Sliding}",
          "explanation": "Since the applied force exceeds limiting friction, the particle slides.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State friction magnitude",
          "workingLatex": "F = 17.64\\,\\text{N}",
          "explanation": "Friction equals limiting value $17.64\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Conclusion",
          "workingLatex": "\\text{The particle slides}",
          "explanation": "Applied force exceeds limiting friction.",
          "diagram": null
        }
      ],
      "finalAnswer": "The particle slides; $F_{\\max} = 17.64\\,\\text{N}$."
    }
  },
  {
    "id": "al.y2.mech.forces-friction.q017",
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Forces and friction",
    "subtopicId": "al.y2.mech.forces-friction",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "written",
    "tags": [
      "horizontal",
      "limiting-friction",
      "equilibrium"
    ],
    "questionText": "A particle of mass $12\\,\\text{kg}$ is on a rough horizontal plane with $\\mu = 0.35$. A horizontal pull of $35\\,\\text{N}$ acts on it. Taking $g = 9.8\\,\\text{m s}^{-2}$, determine whether the particle is in limiting equilibrium, in equilibrium without sliding, or sliding.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Calculate weight and reaction",
          "workingLatex": "W = R = 117.60\\,\\text{N}",
          "explanation": "$W = mg = 117.60\\,\\text{N}$; on a horizontal surface $R = W$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find limiting friction",
          "workingLatex": "F_{\\max} = 0.35 \\times 117.60 = 41.16\\,\\text{N}",
          "explanation": "$F_{\\max} = \\mu R = 41.16\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compare forces",
          "workingLatex": "P = 35\\,\\text{N}, \\quad F_{\\max} = 41.16\\,\\text{N}",
          "explanation": "Compare the applied pull with the maximum possible friction.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Classify the motion",
          "workingLatex": "\\text{Sliding}",
          "explanation": "Since the applied force exceeds limiting friction, the particle slides.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State friction magnitude",
          "workingLatex": "F = 35\\,\\text{N}",
          "explanation": "Friction equals limiting value $35\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Conclusion",
          "workingLatex": "\\text{The particle slides}",
          "explanation": "Applied force exceeds limiting friction.",
          "diagram": null
        }
      ],
      "finalAnswer": "The particle slides; $F_{\\max} = 41.16\\,\\text{N}$."
    }
  },
  {
    "id": "al.y2.mech.forces-friction.q018",
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Forces and friction",
    "subtopicId": "al.y2.mech.forces-friction",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "written",
    "tags": [
      "horizontal",
      "limiting-friction",
      "equilibrium"
    ],
    "questionText": "A particle of mass $7\\,\\text{kg}$ is on a rough horizontal plane with $\\mu = 0.45$. A horizontal pull of $25\\,\\text{N}$ acts on it. Taking $g = 9.8\\,\\text{m s}^{-2}$, determine whether the particle is in limiting equilibrium, in equilibrium without sliding, or sliding.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Calculate weight and reaction",
          "workingLatex": "W = R = 68.60\\,\\text{N}",
          "explanation": "$W = mg = 68.60\\,\\text{N}$; on a horizontal surface $R = W$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find limiting friction",
          "workingLatex": "F_{\\max} = 0.45 \\times 68.60 = 30.87\\,\\text{N}",
          "explanation": "$F_{\\max} = \\mu R = 30.87\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compare forces",
          "workingLatex": "P = 25\\,\\text{N}, \\quad F_{\\max} = 30.87\\,\\text{N}",
          "explanation": "Compare the applied pull with the maximum possible friction.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Classify the motion",
          "workingLatex": "\\text{Equilibrium (not at limit)}",
          "explanation": "Since the applied force is less than limiting friction, the particle is in equilibrium.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State friction magnitude",
          "workingLatex": "F = 25\\,\\text{N}",
          "explanation": "Friction equals applied force $25\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Conclusion",
          "workingLatex": "\\text{The particle remains at rest}",
          "explanation": "Friction balances the applied force.",
          "diagram": null
        }
      ],
      "finalAnswer": "The particle remains in equilibrium; $F_{\\max} = 30.87\\,\\text{N}$."
    }
  },
  {
    "id": "al.y2.mech.forces-friction.q019",
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Forces and friction",
    "subtopicId": "al.y2.mech.forces-friction",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "tags": [
      "inclined-plane",
      "resolving",
      "friction"
    ],
    "questionText": "A particle of mass $4\\,\\text{kg}$ rests in equilibrium on a rough plane inclined at $20°$ to the horizontal. The coefficient of friction is $\\mu = 0.5$. Taking $g = 9.8\\,\\text{m s}^{-2}$, find the frictional force acting on the particle and state its direction.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Resolve weight parallel to the plane",
          "workingLatex": "W_{\\parallel} = mg\\sin\\alpha = 39.20\\sin 20° = 13.41\\,\\text{N}",
          "explanation": "The component of weight down the slope is $13.41\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Resolve weight perpendicular to the plane",
          "workingLatex": "W_{\\perp} = mg\\cos\\alpha = 39.20\\cos 20° = 36.84\\,\\text{N}",
          "explanation": "This equals the normal reaction: $R = 36.84\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Apply equilibrium parallel to the plane",
          "workingLatex": "F = W_{\\parallel}",
          "explanation": "Friction balances the weight component down the slope.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Calculate friction",
          "workingLatex": "F = 13.41\\,\\text{N}",
          "explanation": "Friction is $13.41\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Determine direction",
          "workingLatex": "\\text{Friction acts up the plane}",
          "explanation": "The weight tends to slide the particle down, so friction opposes this by acting up the slope.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check $F \\le \\mu R$",
          "workingLatex": "F = 13.41 \\le \\mu R = 18.42\\,\\text{N}",
          "explanation": "Since $13.41 \\le 18.42$, equilibrium is possible.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State whether at limiting equilibrium",
          "workingLatex": "\\text{Not at the limit}",
          "explanation": "Friction is less than limiting friction.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Final answer",
          "workingLatex": "F = 13.41\\,\\text{N} \\text{ up the plane}",
          "explanation": "Frictional force: $13.41\\,\\text{N}$ up the plane.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Summarise resolving method",
          "workingLatex": "\\text{Resolve weight, then apply } F = ma \\text{ parallel and perpendicular}",
          "explanation": "Resolving is the standard approach for inclined-plane problems.",
          "diagram": null
        }
      ],
      "finalAnswer": "$F = 13.41\\,\\text{N}$ up the plane (friction opposes the tendency to slide down)."
    }
  },
  {
    "id": "al.y2.mech.forces-friction.q020",
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Forces and friction",
    "subtopicId": "al.y2.mech.forces-friction",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "tags": [
      "inclined-plane",
      "resolving",
      "friction"
    ],
    "questionText": "A particle of mass $6\\,\\text{kg}$ rests in equilibrium on a rough plane inclined at $30°$ to the horizontal. The coefficient of friction is $\\mu = 0.4$. Taking $g = 9.8\\,\\text{m s}^{-2}$, find the frictional force acting on the particle and state its direction.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Resolve weight parallel to the plane",
          "workingLatex": "W_{\\parallel} = mg\\sin\\alpha = 58.80\\sin 30° = 29.40\\,\\text{N}",
          "explanation": "The component of weight down the slope is $29.40\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Resolve weight perpendicular to the plane",
          "workingLatex": "W_{\\perp} = mg\\cos\\alpha = 58.80\\cos 30° = 50.92\\,\\text{N}",
          "explanation": "This equals the normal reaction: $R = 50.92\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Apply equilibrium parallel to the plane",
          "workingLatex": "F = W_{\\parallel}",
          "explanation": "Friction balances the weight component down the slope.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Calculate friction",
          "workingLatex": "F = 29.40\\,\\text{N}",
          "explanation": "Friction is $29.40\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Determine direction",
          "workingLatex": "\\text{Friction acts up the plane}",
          "explanation": "The weight tends to slide the particle down, so friction opposes this by acting up the slope.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check $F \\le \\mu R$",
          "workingLatex": "F = 29.40 \\le \\mu R = 20.37\\,\\text{N}",
          "explanation": "Since $29.40 \\le 20.37$, equilibrium is possible.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State whether at limiting equilibrium",
          "workingLatex": "\\text{Not at the limit}",
          "explanation": "Friction is less than limiting friction.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Final answer",
          "workingLatex": "F = 29.40\\,\\text{N} \\text{ up the plane}",
          "explanation": "Frictional force: $29.40\\,\\text{N}$ up the plane.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Summarise resolving method",
          "workingLatex": "\\text{Resolve weight, then apply } F = ma \\text{ parallel and perpendicular}",
          "explanation": "Resolving is the standard approach for inclined-plane problems.",
          "diagram": null
        }
      ],
      "finalAnswer": "$F = 29.40\\,\\text{N}$ up the plane (friction opposes the tendency to slide down)."
    }
  },
  {
    "id": "al.y2.mech.forces-friction.q021",
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Forces and friction",
    "subtopicId": "al.y2.mech.forces-friction",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "tags": [
      "inclined-plane",
      "resolving",
      "friction"
    ],
    "questionText": "A particle of mass $3\\,\\text{kg}$ rests in equilibrium on a rough plane inclined at $15°$ to the horizontal. The coefficient of friction is $\\mu = 0.6$. Taking $g = 9.8\\,\\text{m s}^{-2}$, find the frictional force acting on the particle and state its direction.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Resolve weight parallel to the plane",
          "workingLatex": "W_{\\parallel} = mg\\sin\\alpha = 29.40\\sin 15° = 7.61\\,\\text{N}",
          "explanation": "The component of weight down the slope is $7.61\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Resolve weight perpendicular to the plane",
          "workingLatex": "W_{\\perp} = mg\\cos\\alpha = 29.40\\cos 15° = 28.40\\,\\text{N}",
          "explanation": "This equals the normal reaction: $R = 28.40\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Apply equilibrium parallel to the plane",
          "workingLatex": "F = W_{\\parallel}",
          "explanation": "Friction balances the weight component down the slope.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Calculate friction",
          "workingLatex": "F = 7.61\\,\\text{N}",
          "explanation": "Friction is $7.61\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Determine direction",
          "workingLatex": "\\text{Friction acts up the plane}",
          "explanation": "The weight tends to slide the particle down, so friction opposes this by acting up the slope.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check $F \\le \\mu R$",
          "workingLatex": "F = 7.61 \\le \\mu R = 17.04\\,\\text{N}",
          "explanation": "Since $7.61 \\le 17.04$, equilibrium is possible.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State whether at limiting equilibrium",
          "workingLatex": "\\text{Not at the limit}",
          "explanation": "Friction is less than limiting friction.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Final answer",
          "workingLatex": "F = 7.61\\,\\text{N} \\text{ up the plane}",
          "explanation": "Frictional force: $7.61\\,\\text{N}$ up the plane.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Summarise resolving method",
          "workingLatex": "\\text{Resolve weight, then apply } F = ma \\text{ parallel and perpendicular}",
          "explanation": "Resolving is the standard approach for inclined-plane problems.",
          "diagram": null
        }
      ],
      "finalAnswer": "$F = 7.61\\,\\text{N}$ up the plane (friction opposes the tendency to slide down)."
    }
  },
  {
    "id": "al.y2.mech.forces-friction.q022",
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Forces and friction",
    "subtopicId": "al.y2.mech.forces-friction",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "tags": [
      "inclined-plane",
      "resolving",
      "friction"
    ],
    "questionText": "A particle of mass $8\\,\\text{kg}$ rests in equilibrium on a rough plane inclined at $25°$ to the horizontal. The coefficient of friction is $\\mu = 0.35$. Taking $g = 9.8\\,\\text{m s}^{-2}$, find the frictional force acting on the particle and state its direction.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Resolve weight parallel to the plane",
          "workingLatex": "W_{\\parallel} = mg\\sin\\alpha = 78.40\\sin 25° = 33.13\\,\\text{N}",
          "explanation": "The component of weight down the slope is $33.13\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Resolve weight perpendicular to the plane",
          "workingLatex": "W_{\\perp} = mg\\cos\\alpha = 78.40\\cos 25° = 71.05\\,\\text{N}",
          "explanation": "This equals the normal reaction: $R = 71.05\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Apply equilibrium parallel to the plane",
          "workingLatex": "F = W_{\\parallel}",
          "explanation": "Friction balances the weight component down the slope.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Calculate friction",
          "workingLatex": "F = 33.13\\,\\text{N}",
          "explanation": "Friction is $33.13\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Determine direction",
          "workingLatex": "\\text{Friction acts up the plane}",
          "explanation": "The weight tends to slide the particle down, so friction opposes this by acting up the slope.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check $F \\le \\mu R$",
          "workingLatex": "F = 33.13 \\le \\mu R = 24.87\\,\\text{N}",
          "explanation": "Since $33.13 \\le 24.87$, equilibrium is possible.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State whether at limiting equilibrium",
          "workingLatex": "\\text{Not at the limit}",
          "explanation": "Friction is less than limiting friction.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Final answer",
          "workingLatex": "F = 33.13\\,\\text{N} \\text{ up the plane}",
          "explanation": "Frictional force: $33.13\\,\\text{N}$ up the plane.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Summarise resolving method",
          "workingLatex": "\\text{Resolve weight, then apply } F = ma \\text{ parallel and perpendicular}",
          "explanation": "Resolving is the standard approach for inclined-plane problems.",
          "diagram": null
        }
      ],
      "finalAnswer": "$F = 33.13\\,\\text{N}$ up the plane (friction opposes the tendency to slide down)."
    }
  },
  {
    "id": "al.y2.mech.forces-friction.q023",
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Forces and friction",
    "subtopicId": "al.y2.mech.forces-friction",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "tags": [
      "inclined-plane",
      "resolving",
      "friction"
    ],
    "questionText": "A particle of mass $5\\,\\text{kg}$ rests in equilibrium on a rough plane inclined at $35°$ to the horizontal. The coefficient of friction is $\\mu = 0.7$. Taking $g = 9.8\\,\\text{m s}^{-2}$, find the frictional force acting on the particle and state its direction.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Resolve weight parallel to the plane",
          "workingLatex": "W_{\\parallel} = mg\\sin\\alpha = 49\\sin 35° = 28.11\\,\\text{N}",
          "explanation": "The component of weight down the slope is $28.11\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Resolve weight perpendicular to the plane",
          "workingLatex": "W_{\\perp} = mg\\cos\\alpha = 49\\cos 35° = 40.14\\,\\text{N}",
          "explanation": "This equals the normal reaction: $R = 40.14\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Apply equilibrium parallel to the plane",
          "workingLatex": "F = W_{\\parallel}",
          "explanation": "Friction balances the weight component down the slope.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Calculate friction",
          "workingLatex": "F = 28.11\\,\\text{N}",
          "explanation": "Friction is $28.11\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Determine direction",
          "workingLatex": "\\text{Friction acts up the plane}",
          "explanation": "The weight tends to slide the particle down, so friction opposes this by acting up the slope.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check $F \\le \\mu R$",
          "workingLatex": "F = 28.11 \\le \\mu R = 28.10\\,\\text{N}",
          "explanation": "Since $28.11 \\le 28.10$, equilibrium is possible.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State whether at limiting equilibrium",
          "workingLatex": "\\text{At the limit}",
          "explanation": "Friction equals limiting friction.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Final answer",
          "workingLatex": "F = 28.11\\,\\text{N} \\text{ up the plane}",
          "explanation": "Frictional force: $28.11\\,\\text{N}$ up the plane.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Summarise resolving method",
          "workingLatex": "\\text{Resolve weight, then apply } F = ma \\text{ parallel and perpendicular}",
          "explanation": "Resolving is the standard approach for inclined-plane problems.",
          "diagram": null
        }
      ],
      "finalAnswer": "$F = 28.11\\,\\text{N}$ up the plane (friction opposes the tendency to slide down)."
    }
  },
  {
    "id": "al.y2.mech.forces-friction.q024",
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Forces and friction",
    "subtopicId": "al.y2.mech.forces-friction",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "tags": [
      "inclined-plane",
      "resolving",
      "friction"
    ],
    "questionText": "A particle of mass $10\\,\\text{kg}$ rests in equilibrium on a rough plane inclined at $18°$ to the horizontal. The coefficient of friction is $\\mu = 0.55$. Taking $g = 9.8\\,\\text{m s}^{-2}$, find the frictional force acting on the particle and state its direction.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Resolve weight parallel to the plane",
          "workingLatex": "W_{\\parallel} = mg\\sin\\alpha = 98\\sin 18° = 30.28\\,\\text{N}",
          "explanation": "The component of weight down the slope is $30.28\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Resolve weight perpendicular to the plane",
          "workingLatex": "W_{\\perp} = mg\\cos\\alpha = 98\\cos 18° = 93.20\\,\\text{N}",
          "explanation": "This equals the normal reaction: $R = 93.20\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Apply equilibrium parallel to the plane",
          "workingLatex": "F = W_{\\parallel}",
          "explanation": "Friction balances the weight component down the slope.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Calculate friction",
          "workingLatex": "F = 30.28\\,\\text{N}",
          "explanation": "Friction is $30.28\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Determine direction",
          "workingLatex": "\\text{Friction acts up the plane}",
          "explanation": "The weight tends to slide the particle down, so friction opposes this by acting up the slope.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check $F \\le \\mu R$",
          "workingLatex": "F = 30.28 \\le \\mu R = 51.26\\,\\text{N}",
          "explanation": "Since $30.28 \\le 51.26$, equilibrium is possible.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State whether at limiting equilibrium",
          "workingLatex": "\\text{Not at the limit}",
          "explanation": "Friction is less than limiting friction.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Final answer",
          "workingLatex": "F = 30.28\\,\\text{N} \\text{ up the plane}",
          "explanation": "Frictional force: $30.28\\,\\text{N}$ up the plane.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Summarise resolving method",
          "workingLatex": "\\text{Resolve weight, then apply } F = ma \\text{ parallel and perpendicular}",
          "explanation": "Resolving is the standard approach for inclined-plane problems.",
          "diagram": null
        }
      ],
      "finalAnswer": "$F = 30.28\\,\\text{N}$ up the plane (friction opposes the tendency to slide down)."
    }
  },
  {
    "id": "al.y2.mech.forces-friction.q025",
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Forces and friction",
    "subtopicId": "al.y2.mech.forces-friction",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "tags": [
      "inclined-plane",
      "resolving",
      "friction"
    ],
    "questionText": "A particle of mass $2\\,\\text{kg}$ rests in equilibrium on a rough plane inclined at $40°$ to the horizontal. The coefficient of friction is $\\mu = 0.8$. Taking $g = 9.8\\,\\text{m s}^{-2}$, find the frictional force acting on the particle and state its direction.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Resolve weight parallel to the plane",
          "workingLatex": "W_{\\parallel} = mg\\sin\\alpha = 19.60\\sin 40° = 12.60\\,\\text{N}",
          "explanation": "The component of weight down the slope is $12.60\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Resolve weight perpendicular to the plane",
          "workingLatex": "W_{\\perp} = mg\\cos\\alpha = 19.60\\cos 40° = 15.01\\,\\text{N}",
          "explanation": "This equals the normal reaction: $R = 15.01\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Apply equilibrium parallel to the plane",
          "workingLatex": "F = W_{\\parallel}",
          "explanation": "Friction balances the weight component down the slope.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Calculate friction",
          "workingLatex": "F = 12.60\\,\\text{N}",
          "explanation": "Friction is $12.60\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Determine direction",
          "workingLatex": "\\text{Friction acts up the plane}",
          "explanation": "The weight tends to slide the particle down, so friction opposes this by acting up the slope.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check $F \\le \\mu R$",
          "workingLatex": "F = 12.60 \\le \\mu R = 12.01\\,\\text{N}",
          "explanation": "Since $12.60 \\le 12.01$, equilibrium is possible.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State whether at limiting equilibrium",
          "workingLatex": "\\text{Not at the limit}",
          "explanation": "Friction is less than limiting friction.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Final answer",
          "workingLatex": "F = 12.60\\,\\text{N} \\text{ up the plane}",
          "explanation": "Frictional force: $12.60\\,\\text{N}$ up the plane.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Summarise resolving method",
          "workingLatex": "\\text{Resolve weight, then apply } F = ma \\text{ parallel and perpendicular}",
          "explanation": "Resolving is the standard approach for inclined-plane problems.",
          "diagram": null
        }
      ],
      "finalAnswer": "$F = 12.60\\,\\text{N}$ up the plane (friction opposes the tendency to slide down)."
    }
  },
  {
    "id": "al.y2.mech.forces-friction.q026",
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Forces and friction",
    "subtopicId": "al.y2.mech.forces-friction",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "tags": [
      "inclined-plane",
      "resolving",
      "friction"
    ],
    "questionText": "A particle of mass $7\\,\\text{kg}$ rests in equilibrium on a rough plane inclined at $22°$ to the horizontal. The coefficient of friction is $\\mu = 0.45$. Taking $g = 9.8\\,\\text{m s}^{-2}$, find the frictional force acting on the particle and state its direction.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Resolve weight parallel to the plane",
          "workingLatex": "W_{\\parallel} = mg\\sin\\alpha = 68.60\\sin 22° = 25.70\\,\\text{N}",
          "explanation": "The component of weight down the slope is $25.70\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Resolve weight perpendicular to the plane",
          "workingLatex": "W_{\\perp} = mg\\cos\\alpha = 68.60\\cos 22° = 63.60\\,\\text{N}",
          "explanation": "This equals the normal reaction: $R = 63.60\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Apply equilibrium parallel to the plane",
          "workingLatex": "F = W_{\\parallel}",
          "explanation": "Friction balances the weight component down the slope.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Calculate friction",
          "workingLatex": "F = 25.70\\,\\text{N}",
          "explanation": "Friction is $25.70\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Determine direction",
          "workingLatex": "\\text{Friction acts up the plane}",
          "explanation": "The weight tends to slide the particle down, so friction opposes this by acting up the slope.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check $F \\le \\mu R$",
          "workingLatex": "F = 25.70 \\le \\mu R = 28.62\\,\\text{N}",
          "explanation": "Since $25.70 \\le 28.62$, equilibrium is possible.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State whether at limiting equilibrium",
          "workingLatex": "\\text{Not at the limit}",
          "explanation": "Friction is less than limiting friction.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Final answer",
          "workingLatex": "F = 25.70\\,\\text{N} \\text{ up the plane}",
          "explanation": "Frictional force: $25.70\\,\\text{N}$ up the plane.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Summarise resolving method",
          "workingLatex": "\\text{Resolve weight, then apply } F = ma \\text{ parallel and perpendicular}",
          "explanation": "Resolving is the standard approach for inclined-plane problems.",
          "diagram": null
        }
      ],
      "finalAnswer": "$F = 25.70\\,\\text{N}$ up the plane (friction opposes the tendency to slide down)."
    }
  },
  {
    "id": "al.y2.mech.forces-friction.q027",
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Forces and friction",
    "subtopicId": "al.y2.mech.forces-friction",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "tags": [
      "inclined-plane",
      "resolving",
      "friction"
    ],
    "questionText": "A particle of mass $5\\,\\text{kg}$ is on the point of sliding down a rough plane inclined at $15°$ to the horizontal. Taking $g = 9.8\\,\\text{m s}^{-2}$, find $\\mu$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify limiting equilibrium down the plane",
          "workingLatex": "F = \\mu R = mg\\sin\\alpha",
          "explanation": "At the point of sliding, friction equals $\\mu R$ and balances the downslope component of weight.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the normal reaction",
          "workingLatex": "R = mg\\cos\\alpha = 47.33\\,\\text{N}",
          "explanation": "$R = 47.33\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Set up limiting equation",
          "workingLatex": "\\mu mg\\cos\\alpha = mg\\sin\\alpha",
          "explanation": "Limiting friction equals the weight component down the slope.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Cancel $mg$",
          "workingLatex": "\\mu\\cos\\alpha = \\sin\\alpha",
          "explanation": "Mass and $g$ cancel from both sides.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve for $\\mu$",
          "workingLatex": "\\mu = \\tan\\alpha = \\tan 15°",
          "explanation": "Dividing by $\\cos\\alpha$ gives $\\mu = \\tan\\alpha$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Evaluate",
          "workingLatex": "\\mu = 0.268",
          "explanation": "$\\mu = 0.268$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Interpret",
          "workingLatex": "\\tan 15° = 0.268",
          "explanation": "The angle of the plane equals the angle of friction at limiting equilibrium.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Verify with $F = \\mu R$",
          "workingLatex": "\\mu R = 0.268 \\times 47.33 = 12.68\\,\\text{N} = mg\\sin\\alpha",
          "explanation": "Both sides of the equilibrium equation match.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "\\mu = 0.268",
          "explanation": "Coefficient of friction is $0.268$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\mu = 0.268$"
    }
  },
  {
    "id": "al.y2.mech.forces-friction.q028",
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Forces and friction",
    "subtopicId": "al.y2.mech.forces-friction",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "tags": [
      "inclined-plane",
      "resolving",
      "friction"
    ],
    "questionText": "A particle of mass $8\\,\\text{kg}$ is on the point of sliding down a rough plane inclined at $20°$ to the horizontal. Taking $g = 9.8\\,\\text{m s}^{-2}$, find $\\mu$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify limiting equilibrium down the plane",
          "workingLatex": "F = \\mu R = mg\\sin\\alpha",
          "explanation": "At the point of sliding, friction equals $\\mu R$ and balances the downslope component of weight.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the normal reaction",
          "workingLatex": "R = mg\\cos\\alpha = 73.67\\,\\text{N}",
          "explanation": "$R = 73.67\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Set up limiting equation",
          "workingLatex": "\\mu mg\\cos\\alpha = mg\\sin\\alpha",
          "explanation": "Limiting friction equals the weight component down the slope.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Cancel $mg$",
          "workingLatex": "\\mu\\cos\\alpha = \\sin\\alpha",
          "explanation": "Mass and $g$ cancel from both sides.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve for $\\mu$",
          "workingLatex": "\\mu = \\tan\\alpha = \\tan 20°",
          "explanation": "Dividing by $\\cos\\alpha$ gives $\\mu = \\tan\\alpha$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Evaluate",
          "workingLatex": "\\mu = 0.364",
          "explanation": "$\\mu = 0.364$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Interpret",
          "workingLatex": "\\tan 20° = 0.364",
          "explanation": "The angle of the plane equals the angle of friction at limiting equilibrium.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Verify with $F = \\mu R$",
          "workingLatex": "\\mu R = 0.364 \\times 73.67 = 26.81\\,\\text{N} = mg\\sin\\alpha",
          "explanation": "Both sides of the equilibrium equation match.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "\\mu = 0.364",
          "explanation": "Coefficient of friction is $0.364$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\mu = 0.364$"
    }
  },
  {
    "id": "al.y2.mech.forces-friction.q029",
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Forces and friction",
    "subtopicId": "al.y2.mech.forces-friction",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "tags": [
      "inclined-plane",
      "resolving",
      "friction"
    ],
    "questionText": "A particle of mass $4\\,\\text{kg}$ is on the point of sliding down a rough plane inclined at $30°$ to the horizontal. Taking $g = 9.8\\,\\text{m s}^{-2}$, find $\\mu$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify limiting equilibrium down the plane",
          "workingLatex": "F = \\mu R = mg\\sin\\alpha",
          "explanation": "At the point of sliding, friction equals $\\mu R$ and balances the downslope component of weight.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the normal reaction",
          "workingLatex": "R = mg\\cos\\alpha = 33.95\\,\\text{N}",
          "explanation": "$R = 33.95\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Set up limiting equation",
          "workingLatex": "\\mu mg\\cos\\alpha = mg\\sin\\alpha",
          "explanation": "Limiting friction equals the weight component down the slope.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Cancel $mg$",
          "workingLatex": "\\mu\\cos\\alpha = \\sin\\alpha",
          "explanation": "Mass and $g$ cancel from both sides.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve for $\\mu$",
          "workingLatex": "\\mu = \\tan\\alpha = \\tan 30°",
          "explanation": "Dividing by $\\cos\\alpha$ gives $\\mu = \\tan\\alpha$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Evaluate",
          "workingLatex": "\\mu = 0.577",
          "explanation": "$\\mu = 0.577$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Interpret",
          "workingLatex": "\\tan 30° = 0.577",
          "explanation": "The angle of the plane equals the angle of friction at limiting equilibrium.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Verify with $F = \\mu R$",
          "workingLatex": "\\mu R = 0.577 \\times 33.95 = 19.60\\,\\text{N} = mg\\sin\\alpha",
          "explanation": "Both sides of the equilibrium equation match.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "\\mu = 0.577",
          "explanation": "Coefficient of friction is $0.577$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\mu = 0.577$"
    }
  },
  {
    "id": "al.y2.mech.forces-friction.q030",
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Forces and friction",
    "subtopicId": "al.y2.mech.forces-friction",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "tags": [
      "inclined-plane",
      "resolving",
      "friction"
    ],
    "questionText": "A particle of mass $6\\,\\text{kg}$ is on the point of sliding down a rough plane inclined at $25°$ to the horizontal. Taking $g = 9.8\\,\\text{m s}^{-2}$, find $\\mu$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify limiting equilibrium down the plane",
          "workingLatex": "F = \\mu R = mg\\sin\\alpha",
          "explanation": "At the point of sliding, friction equals $\\mu R$ and balances the downslope component of weight.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the normal reaction",
          "workingLatex": "R = mg\\cos\\alpha = 53.29\\,\\text{N}",
          "explanation": "$R = 53.29\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Set up limiting equation",
          "workingLatex": "\\mu mg\\cos\\alpha = mg\\sin\\alpha",
          "explanation": "Limiting friction equals the weight component down the slope.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Cancel $mg$",
          "workingLatex": "\\mu\\cos\\alpha = \\sin\\alpha",
          "explanation": "Mass and $g$ cancel from both sides.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve for $\\mu$",
          "workingLatex": "\\mu = \\tan\\alpha = \\tan 25°",
          "explanation": "Dividing by $\\cos\\alpha$ gives $\\mu = \\tan\\alpha$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Evaluate",
          "workingLatex": "\\mu = 0.466",
          "explanation": "$\\mu = 0.466$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Interpret",
          "workingLatex": "\\tan 25° = 0.466",
          "explanation": "The angle of the plane equals the angle of friction at limiting equilibrium.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Verify with $F = \\mu R$",
          "workingLatex": "\\mu R = 0.466 \\times 53.29 = 24.85\\,\\text{N} = mg\\sin\\alpha",
          "explanation": "Both sides of the equilibrium equation match.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "\\mu = 0.466",
          "explanation": "Coefficient of friction is $0.466$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\mu = 0.466$"
    }
  },
  {
    "id": "al.y2.mech.forces-friction.q031",
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Forces and friction",
    "subtopicId": "al.y2.mech.forces-friction",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "tags": [
      "inclined-plane",
      "resolving",
      "friction"
    ],
    "questionText": "A particle of mass $10\\,\\text{kg}$ is on the point of sliding down a rough plane inclined at $18°$ to the horizontal. Taking $g = 9.8\\,\\text{m s}^{-2}$, find $\\mu$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify limiting equilibrium down the plane",
          "workingLatex": "F = \\mu R = mg\\sin\\alpha",
          "explanation": "At the point of sliding, friction equals $\\mu R$ and balances the downslope component of weight.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the normal reaction",
          "workingLatex": "R = mg\\cos\\alpha = 93.20\\,\\text{N}",
          "explanation": "$R = 93.20\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Set up limiting equation",
          "workingLatex": "\\mu mg\\cos\\alpha = mg\\sin\\alpha",
          "explanation": "Limiting friction equals the weight component down the slope.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Cancel $mg$",
          "workingLatex": "\\mu\\cos\\alpha = \\sin\\alpha",
          "explanation": "Mass and $g$ cancel from both sides.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve for $\\mu$",
          "workingLatex": "\\mu = \\tan\\alpha = \\tan 18°",
          "explanation": "Dividing by $\\cos\\alpha$ gives $\\mu = \\tan\\alpha$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Evaluate",
          "workingLatex": "\\mu = 0.325",
          "explanation": "$\\mu = 0.325$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Interpret",
          "workingLatex": "\\tan 18° = 0.325",
          "explanation": "The angle of the plane equals the angle of friction at limiting equilibrium.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Verify with $F = \\mu R$",
          "workingLatex": "\\mu R = 0.325 \\times 93.20 = 30.28\\,\\text{N} = mg\\sin\\alpha",
          "explanation": "Both sides of the equilibrium equation match.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "\\mu = 0.325",
          "explanation": "Coefficient of friction is $0.325$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\mu = 0.325$"
    }
  },
  {
    "id": "al.y2.mech.forces-friction.q032",
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Forces and friction",
    "subtopicId": "al.y2.mech.forces-friction",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "tags": [
      "inclined-plane",
      "resolving",
      "friction"
    ],
    "questionText": "A particle of mass $3\\,\\text{kg}$ is on the point of sliding down a rough plane inclined at $35°$ to the horizontal. Taking $g = 9.8\\,\\text{m s}^{-2}$, find $\\mu$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify limiting equilibrium down the plane",
          "workingLatex": "F = \\mu R = mg\\sin\\alpha",
          "explanation": "At the point of sliding, friction equals $\\mu R$ and balances the downslope component of weight.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the normal reaction",
          "workingLatex": "R = mg\\cos\\alpha = 24.08\\,\\text{N}",
          "explanation": "$R = 24.08\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Set up limiting equation",
          "workingLatex": "\\mu mg\\cos\\alpha = mg\\sin\\alpha",
          "explanation": "Limiting friction equals the weight component down the slope.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Cancel $mg$",
          "workingLatex": "\\mu\\cos\\alpha = \\sin\\alpha",
          "explanation": "Mass and $g$ cancel from both sides.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve for $\\mu$",
          "workingLatex": "\\mu = \\tan\\alpha = \\tan 35°",
          "explanation": "Dividing by $\\cos\\alpha$ gives $\\mu = \\tan\\alpha$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Evaluate",
          "workingLatex": "\\mu = 0.700",
          "explanation": "$\\mu = 0.700$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Interpret",
          "workingLatex": "\\tan 35° = 0.700",
          "explanation": "The angle of the plane equals the angle of friction at limiting equilibrium.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Verify with $F = \\mu R$",
          "workingLatex": "\\mu R = 0.700 \\times 24.08 = 16.86\\,\\text{N} = mg\\sin\\alpha",
          "explanation": "Both sides of the equilibrium equation match.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "\\mu = 0.700",
          "explanation": "Coefficient of friction is $0.700$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\mu = 0.700$"
    }
  },
  {
    "id": "al.y2.mech.forces-friction.q033",
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Forces and friction",
    "subtopicId": "al.y2.mech.forces-friction",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "tags": [
      "inclined-plane",
      "resolving",
      "friction"
    ],
    "questionText": "A particle of mass $12\\,\\text{kg}$ is on the point of sliding down a rough plane inclined at $22°$ to the horizontal. Taking $g = 9.8\\,\\text{m s}^{-2}$, find $\\mu$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify limiting equilibrium down the plane",
          "workingLatex": "F = \\mu R = mg\\sin\\alpha",
          "explanation": "At the point of sliding, friction equals $\\mu R$ and balances the downslope component of weight.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the normal reaction",
          "workingLatex": "R = mg\\cos\\alpha = 109.04\\,\\text{N}",
          "explanation": "$R = 109.04\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Set up limiting equation",
          "workingLatex": "\\mu mg\\cos\\alpha = mg\\sin\\alpha",
          "explanation": "Limiting friction equals the weight component down the slope.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Cancel $mg$",
          "workingLatex": "\\mu\\cos\\alpha = \\sin\\alpha",
          "explanation": "Mass and $g$ cancel from both sides.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve for $\\mu$",
          "workingLatex": "\\mu = \\tan\\alpha = \\tan 22°",
          "explanation": "Dividing by $\\cos\\alpha$ gives $\\mu = \\tan\\alpha$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Evaluate",
          "workingLatex": "\\mu = 0.404",
          "explanation": "$\\mu = 0.404$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Interpret",
          "workingLatex": "\\tan 22° = 0.404",
          "explanation": "The angle of the plane equals the angle of friction at limiting equilibrium.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Verify with $F = \\mu R$",
          "workingLatex": "\\mu R = 0.404 \\times 109.04 = 44.05\\,\\text{N} = mg\\sin\\alpha",
          "explanation": "Both sides of the equilibrium equation match.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "\\mu = 0.404",
          "explanation": "Coefficient of friction is $0.404$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\mu = 0.404$"
    }
  },
  {
    "id": "al.y2.mech.forces-friction.q034",
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Forces and friction",
    "subtopicId": "al.y2.mech.forces-friction",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "tags": [
      "inclined-plane",
      "resolving",
      "friction"
    ],
    "questionText": "A particle of mass $7\\,\\text{kg}$ is on the point of sliding down a rough plane inclined at $28°$ to the horizontal. Taking $g = 9.8\\,\\text{m s}^{-2}$, find $\\mu$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify limiting equilibrium down the plane",
          "workingLatex": "F = \\mu R = mg\\sin\\alpha",
          "explanation": "At the point of sliding, friction equals $\\mu R$ and balances the downslope component of weight.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the normal reaction",
          "workingLatex": "R = mg\\cos\\alpha = 60.57\\,\\text{N}",
          "explanation": "$R = 60.57\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Set up limiting equation",
          "workingLatex": "\\mu mg\\cos\\alpha = mg\\sin\\alpha",
          "explanation": "Limiting friction equals the weight component down the slope.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Cancel $mg$",
          "workingLatex": "\\mu\\cos\\alpha = \\sin\\alpha",
          "explanation": "Mass and $g$ cancel from both sides.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve for $\\mu$",
          "workingLatex": "\\mu = \\tan\\alpha = \\tan 28°",
          "explanation": "Dividing by $\\cos\\alpha$ gives $\\mu = \\tan\\alpha$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Evaluate",
          "workingLatex": "\\mu = 0.532",
          "explanation": "$\\mu = 0.532$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Interpret",
          "workingLatex": "\\tan 28° = 0.532",
          "explanation": "The angle of the plane equals the angle of friction at limiting equilibrium.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Verify with $F = \\mu R$",
          "workingLatex": "\\mu R = 0.532 \\times 60.57 = 32.21\\,\\text{N} = mg\\sin\\alpha",
          "explanation": "Both sides of the equilibrium equation match.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "\\mu = 0.532",
          "explanation": "Coefficient of friction is $0.532$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\mu = 0.532$"
    }
  },
  {
    "id": "al.y2.mech.forces-friction.q035",
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Forces and friction",
    "subtopicId": "al.y2.mech.forces-friction",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "numeric",
    "tags": [
      "angle-of-friction",
      "tan-alpha",
      "limiting-equilibrium"
    ],
    "questionText": "A particle of mass $4\\,\\text{kg}$ is on the point of sliding down a rough inclined plane. The coefficient of friction is $\\mu = 0.25$. Taking $g = 9.8\\,\\text{m s}^{-2}$, find the angle of inclination of the plane.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Use limiting equilibrium condition",
          "workingLatex": "\\mu = \\tan\\alpha",
          "explanation": "When the particle is about to slide down, $\\mu$ equals the tangent of the angle of inclination.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the equation for $\\alpha$",
          "workingLatex": "\\tan\\alpha = 0.25",
          "explanation": "Given $\\mu = 0.25$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find $\\alpha$",
          "workingLatex": "\\alpha = \\tan^{-1}(0.25) = 14.0°",
          "explanation": "$\\alpha = 14.0°$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Verify with weight components",
          "workingLatex": "mg\\sin\\alpha = 39.20\\sin 14.0° = 9.51\\,\\text{N}",
          "explanation": "Downslope component of weight.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check limiting friction",
          "workingLatex": "\\mu R = 0.25 \\times 38.03 = 9.51\\,\\text{N}",
          "explanation": "Limiting friction matches the downslope component.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Interpret the angle of friction",
          "workingLatex": "\\alpha = 14.0° \\text{ is the angle of friction}",
          "explanation": "This is the steepest slope the particle can rest on without sliding.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State answer",
          "workingLatex": "\\alpha = 14.0°",
          "explanation": "Angle of inclination is $14.0°$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Comment on stability",
          "workingLatex": "\\text{Any smaller angle: particle remains at rest}",
          "explanation": "If the plane were less steep, friction would not reach its limit.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Final answer",
          "workingLatex": "\\alpha = 14.0°",
          "explanation": "$\\alpha = 14.0°$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\alpha = 14.0°$"
    }
  },
  {
    "id": "al.y2.mech.forces-friction.q036",
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Forces and friction",
    "subtopicId": "al.y2.mech.forces-friction",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "numeric",
    "tags": [
      "angle-of-friction",
      "tan-alpha",
      "limiting-equilibrium"
    ],
    "questionText": "A particle of mass $6\\,\\text{kg}$ is on the point of sliding down a rough inclined plane. The coefficient of friction is $\\mu = 0.4$. Taking $g = 9.8\\,\\text{m s}^{-2}$, find the angle of inclination of the plane.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Use limiting equilibrium condition",
          "workingLatex": "\\mu = \\tan\\alpha",
          "explanation": "When the particle is about to slide down, $\\mu$ equals the tangent of the angle of inclination.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the equation for $\\alpha$",
          "workingLatex": "\\tan\\alpha = 0.4",
          "explanation": "Given $\\mu = 0.4$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find $\\alpha$",
          "workingLatex": "\\alpha = \\tan^{-1}(0.4) = 21.8°",
          "explanation": "$\\alpha = 21.8°$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Verify with weight components",
          "workingLatex": "mg\\sin\\alpha = 58.80\\sin 21.8° = 21.84\\,\\text{N}",
          "explanation": "Downslope component of weight.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check limiting friction",
          "workingLatex": "\\mu R = 0.4 \\times 54.59 = 21.84\\,\\text{N}",
          "explanation": "Limiting friction matches the downslope component.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Interpret the angle of friction",
          "workingLatex": "\\alpha = 21.8° \\text{ is the angle of friction}",
          "explanation": "This is the steepest slope the particle can rest on without sliding.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State answer",
          "workingLatex": "\\alpha = 21.8°",
          "explanation": "Angle of inclination is $21.8°$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Comment on stability",
          "workingLatex": "\\text{Any smaller angle: particle remains at rest}",
          "explanation": "If the plane were less steep, friction would not reach its limit.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Final answer",
          "workingLatex": "\\alpha = 21.8°",
          "explanation": "$\\alpha = 21.8°$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\alpha = 21.8°$"
    }
  },
  {
    "id": "al.y2.mech.forces-friction.q037",
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Forces and friction",
    "subtopicId": "al.y2.mech.forces-friction",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "numeric",
    "tags": [
      "angle-of-friction",
      "tan-alpha",
      "limiting-equilibrium"
    ],
    "questionText": "A particle of mass $5\\,\\text{kg}$ is on the point of sliding down a rough inclined plane. The coefficient of friction is $\\mu = 0.5$. Taking $g = 9.8\\,\\text{m s}^{-2}$, find the angle of inclination of the plane.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Use limiting equilibrium condition",
          "workingLatex": "\\mu = \\tan\\alpha",
          "explanation": "When the particle is about to slide down, $\\mu$ equals the tangent of the angle of inclination.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the equation for $\\alpha$",
          "workingLatex": "\\tan\\alpha = 0.5",
          "explanation": "Given $\\mu = 0.5$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find $\\alpha$",
          "workingLatex": "\\alpha = \\tan^{-1}(0.5) = 26.6°",
          "explanation": "$\\alpha = 26.6°$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Verify with weight components",
          "workingLatex": "mg\\sin\\alpha = 49\\sin 26.6° = 21.91\\,\\text{N}",
          "explanation": "Downslope component of weight.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check limiting friction",
          "workingLatex": "\\mu R = 0.5 \\times 43.83 = 21.91\\,\\text{N}",
          "explanation": "Limiting friction matches the downslope component.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Interpret the angle of friction",
          "workingLatex": "\\alpha = 26.6° \\text{ is the angle of friction}",
          "explanation": "This is the steepest slope the particle can rest on without sliding.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State answer",
          "workingLatex": "\\alpha = 26.6°",
          "explanation": "Angle of inclination is $26.6°$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Comment on stability",
          "workingLatex": "\\text{Any smaller angle: particle remains at rest}",
          "explanation": "If the plane were less steep, friction would not reach its limit.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Final answer",
          "workingLatex": "\\alpha = 26.6°",
          "explanation": "$\\alpha = 26.6°$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\alpha = 26.6°$"
    }
  },
  {
    "id": "al.y2.mech.forces-friction.q038",
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Forces and friction",
    "subtopicId": "al.y2.mech.forces-friction",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "numeric",
    "tags": [
      "angle-of-friction",
      "tan-alpha",
      "limiting-equilibrium"
    ],
    "questionText": "A particle of mass $8\\,\\text{kg}$ is on the point of sliding down a rough inclined plane. The coefficient of friction is $\\mu = 0.6$. Taking $g = 9.8\\,\\text{m s}^{-2}$, find the angle of inclination of the plane.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Use limiting equilibrium condition",
          "workingLatex": "\\mu = \\tan\\alpha",
          "explanation": "When the particle is about to slide down, $\\mu$ equals the tangent of the angle of inclination.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the equation for $\\alpha$",
          "workingLatex": "\\tan\\alpha = 0.6",
          "explanation": "Given $\\mu = 0.6$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find $\\alpha$",
          "workingLatex": "\\alpha = \\tan^{-1}(0.6) = 31.0°",
          "explanation": "$\\alpha = 31.0°$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Verify with weight components",
          "workingLatex": "mg\\sin\\alpha = 78.40\\sin 31.0° = 40.34\\,\\text{N}",
          "explanation": "Downslope component of weight.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check limiting friction",
          "workingLatex": "\\mu R = 0.6 \\times 67.23 = 40.34\\,\\text{N}",
          "explanation": "Limiting friction matches the downslope component.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Interpret the angle of friction",
          "workingLatex": "\\alpha = 31.0° \\text{ is the angle of friction}",
          "explanation": "This is the steepest slope the particle can rest on without sliding.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State answer",
          "workingLatex": "\\alpha = 31.0°",
          "explanation": "Angle of inclination is $31.0°$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Comment on stability",
          "workingLatex": "\\text{Any smaller angle: particle remains at rest}",
          "explanation": "If the plane were less steep, friction would not reach its limit.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Final answer",
          "workingLatex": "\\alpha = 31.0°",
          "explanation": "$\\alpha = 31.0°$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\alpha = 31.0°$"
    }
  },
  {
    "id": "al.y2.mech.forces-friction.q039",
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Forces and friction",
    "subtopicId": "al.y2.mech.forces-friction",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "numeric",
    "tags": [
      "angle-of-friction",
      "tan-alpha",
      "limiting-equilibrium"
    ],
    "questionText": "A particle of mass $3\\,\\text{kg}$ is on the point of sliding down a rough inclined plane. The coefficient of friction is $\\mu = 0.75$. Taking $g = 9.8\\,\\text{m s}^{-2}$, find the angle of inclination of the plane.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Use limiting equilibrium condition",
          "workingLatex": "\\mu = \\tan\\alpha",
          "explanation": "When the particle is about to slide down, $\\mu$ equals the tangent of the angle of inclination.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the equation for $\\alpha$",
          "workingLatex": "\\tan\\alpha = 0.75",
          "explanation": "Given $\\mu = 0.75$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find $\\alpha$",
          "workingLatex": "\\alpha = \\tan^{-1}(0.75) = 36.9°",
          "explanation": "$\\alpha = 36.9°$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Verify with weight components",
          "workingLatex": "mg\\sin\\alpha = 29.40\\sin 36.9° = 17.64\\,\\text{N}",
          "explanation": "Downslope component of weight.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check limiting friction",
          "workingLatex": "\\mu R = 0.75 \\times 23.52 = 17.64\\,\\text{N}",
          "explanation": "Limiting friction matches the downslope component.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Interpret the angle of friction",
          "workingLatex": "\\alpha = 36.9° \\text{ is the angle of friction}",
          "explanation": "This is the steepest slope the particle can rest on without sliding.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State answer",
          "workingLatex": "\\alpha = 36.9°",
          "explanation": "Angle of inclination is $36.9°$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Comment on stability",
          "workingLatex": "\\text{Any smaller angle: particle remains at rest}",
          "explanation": "If the plane were less steep, friction would not reach its limit.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Final answer",
          "workingLatex": "\\alpha = 36.9°",
          "explanation": "$\\alpha = 36.9°$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\alpha = 36.9°$"
    }
  },
  {
    "id": "al.y2.mech.forces-friction.q040",
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Forces and friction",
    "subtopicId": "al.y2.mech.forces-friction",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "numeric",
    "tags": [
      "angle-of-friction",
      "tan-alpha",
      "limiting-equilibrium"
    ],
    "questionText": "A particle of mass $10\\,\\text{kg}$ is on the point of sliding down a rough inclined plane. The coefficient of friction is $\\mu = 0.35$. Taking $g = 9.8\\,\\text{m s}^{-2}$, find the angle of inclination of the plane.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Use limiting equilibrium condition",
          "workingLatex": "\\mu = \\tan\\alpha",
          "explanation": "When the particle is about to slide down, $\\mu$ equals the tangent of the angle of inclination.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the equation for $\\alpha$",
          "workingLatex": "\\tan\\alpha = 0.35",
          "explanation": "Given $\\mu = 0.35$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find $\\alpha$",
          "workingLatex": "\\alpha = \\tan^{-1}(0.35) = 19.3°",
          "explanation": "$\\alpha = 19.3°$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Verify with weight components",
          "workingLatex": "mg\\sin\\alpha = 98\\sin 19.3° = 32.37\\,\\text{N}",
          "explanation": "Downslope component of weight.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check limiting friction",
          "workingLatex": "\\mu R = 0.35 \\times 92.50 = 32.37\\,\\text{N}",
          "explanation": "Limiting friction matches the downslope component.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Interpret the angle of friction",
          "workingLatex": "\\alpha = 19.3° \\text{ is the angle of friction}",
          "explanation": "This is the steepest slope the particle can rest on without sliding.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State answer",
          "workingLatex": "\\alpha = 19.3°",
          "explanation": "Angle of inclination is $19.3°$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Comment on stability",
          "workingLatex": "\\text{Any smaller angle: particle remains at rest}",
          "explanation": "If the plane were less steep, friction would not reach its limit.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Final answer",
          "workingLatex": "\\alpha = 19.3°",
          "explanation": "$\\alpha = 19.3°$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\alpha = 19.3°$"
    }
  },
  {
    "id": "al.y2.mech.forces-friction.q041",
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Forces and friction",
    "subtopicId": "al.y2.mech.forces-friction",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "written",
    "tags": [
      "horizontal-force",
      "inclined-plane",
      "resolving"
    ],
    "questionText": "A particle of mass $4\\,\\text{kg}$ rests on a rough plane inclined at $25°$ to the horizontal. A horizontal force of $30\\,\\text{N}$ acts on the particle, pushing it up the plane. The coefficient of friction is $\\mu = 0.4$. Taking $g = 9.8\\,\\text{m s}^{-2}$, find the frictional force and state whether the particle moves.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Resolve the horizontal force parallel to the plane",
          "workingLatex": "P\\cos\\alpha = 30\\cos 25° = 27.19\\,\\text{N}",
          "explanation": "Component up the slope: $27.19\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Resolve the horizontal force perpendicular to the plane",
          "workingLatex": "P\\sin\\alpha = 30\\sin 25° = 12.68\\,\\text{N}",
          "explanation": "Component into the plane increases the normal reaction.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Resolve weight",
          "workingLatex": "W_{\\parallel} = 16.57\\,\\text{N}, \\quad W_{\\perp} = 35.53\\,\\text{N}",
          "explanation": "Weight components parallel and perpendicular to the slope.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find the normal reaction",
          "workingLatex": "R = W_{\\perp} + P\\sin\\alpha = 48.21\\,\\text{N}",
          "explanation": "Forces into the plane give $R = 48.21\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Calculate limiting friction",
          "workingLatex": "F_{\\max} = \\mu R = 19.28\\,\\text{N}",
          "explanation": "Maximum friction is $19.28\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Apply equilibrium parallel to the plane",
          "workingLatex": "P\\cos\\alpha = W_{\\parallel} + F",
          "explanation": "Up-slope push balances weight component and friction down the plane.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Solve for friction",
          "workingLatex": "F = 27.19 - 16.57 = 10.62\\,\\text{N}",
          "explanation": "Friction required is $10.62\\,\\text{N}$ down the plane.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Compare with limiting value",
          "workingLatex": "F = 10.62 \\quad \\text{vs} \\quad F_{\\max} = 19.28",
          "explanation": "Check whether $|F| \\le F_{\\max}$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Conclusion on motion",
          "workingLatex": "\\text{The particle remains in equilibrium}",
          "explanation": "Friction can balance the forces.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State friction direction",
          "workingLatex": "\\text{Friction acts down the plane}",
          "explanation": "The push tends to move the particle up, so friction opposes by acting down the slope.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Final answer",
          "workingLatex": "F = 10.62\\,\\text{N} \\text{ down the plane}",
          "explanation": "Frictional force: $10.62\\,\\text{N}$ down the plane.",
          "diagram": null
        }
      ],
      "finalAnswer": "$F = 10.62\\,\\text{N}$ down the plane; the particle is in equilibrium."
    }
  },
  {
    "id": "al.y2.mech.forces-friction.q042",
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Forces and friction",
    "subtopicId": "al.y2.mech.forces-friction",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "written",
    "tags": [
      "horizontal-force",
      "inclined-plane",
      "resolving"
    ],
    "questionText": "A particle of mass $6\\,\\text{kg}$ rests on a rough plane inclined at $30°$ to the horizontal. A horizontal force of $50\\,\\text{N}$ acts on the particle, pushing it up the plane. The coefficient of friction is $\\mu = 0.35$. Taking $g = 9.8\\,\\text{m s}^{-2}$, find the frictional force and state whether the particle moves.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Resolve the horizontal force parallel to the plane",
          "workingLatex": "P\\cos\\alpha = 50\\cos 30° = 43.30\\,\\text{N}",
          "explanation": "Component up the slope: $43.30\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Resolve the horizontal force perpendicular to the plane",
          "workingLatex": "P\\sin\\alpha = 50\\sin 30° = 25\\,\\text{N}",
          "explanation": "Component into the plane increases the normal reaction.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Resolve weight",
          "workingLatex": "W_{\\parallel} = 29.40\\,\\text{N}, \\quad W_{\\perp} = 50.92\\,\\text{N}",
          "explanation": "Weight components parallel and perpendicular to the slope.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find the normal reaction",
          "workingLatex": "R = W_{\\perp} + P\\sin\\alpha = 75.92\\,\\text{N}",
          "explanation": "Forces into the plane give $R = 75.92\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Calculate limiting friction",
          "workingLatex": "F_{\\max} = \\mu R = 26.57\\,\\text{N}",
          "explanation": "Maximum friction is $26.57\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Apply equilibrium parallel to the plane",
          "workingLatex": "P\\cos\\alpha = W_{\\parallel} + F",
          "explanation": "Up-slope push balances weight component and friction down the plane.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Solve for friction",
          "workingLatex": "F = 43.30 - 29.40 = 13.90\\,\\text{N}",
          "explanation": "Friction required is $13.90\\,\\text{N}$ down the plane.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Compare with limiting value",
          "workingLatex": "F = 13.90 \\quad \\text{vs} \\quad F_{\\max} = 26.57",
          "explanation": "Check whether $|F| \\le F_{\\max}$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Conclusion on motion",
          "workingLatex": "\\text{The particle remains in equilibrium}",
          "explanation": "Friction can balance the forces.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State friction direction",
          "workingLatex": "\\text{Friction acts down the plane}",
          "explanation": "The push tends to move the particle up, so friction opposes by acting down the slope.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Final answer",
          "workingLatex": "F = 13.90\\,\\text{N} \\text{ down the plane}",
          "explanation": "Frictional force: $13.90\\,\\text{N}$ down the plane.",
          "diagram": null
        }
      ],
      "finalAnswer": "$F = 13.90\\,\\text{N}$ down the plane; the particle is in equilibrium."
    }
  },
  {
    "id": "al.y2.mech.forces-friction.q043",
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Forces and friction",
    "subtopicId": "al.y2.mech.forces-friction",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "written",
    "tags": [
      "horizontal-force",
      "inclined-plane",
      "resolving"
    ],
    "questionText": "A particle of mass $5\\,\\text{kg}$ rests on a rough plane inclined at $20°$ to the horizontal. A horizontal force of $25\\,\\text{N}$ acts on the particle, pushing it up the plane. The coefficient of friction is $\\mu = 0.5$. Taking $g = 9.8\\,\\text{m s}^{-2}$, find the frictional force and state whether the particle moves.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Resolve the horizontal force parallel to the plane",
          "workingLatex": "P\\cos\\alpha = 25\\cos 20° = 23.49\\,\\text{N}",
          "explanation": "Component up the slope: $23.49\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Resolve the horizontal force perpendicular to the plane",
          "workingLatex": "P\\sin\\alpha = 25\\sin 20° = 8.55\\,\\text{N}",
          "explanation": "Component into the plane increases the normal reaction.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Resolve weight",
          "workingLatex": "W_{\\parallel} = 16.76\\,\\text{N}, \\quad W_{\\perp} = 46.04\\,\\text{N}",
          "explanation": "Weight components parallel and perpendicular to the slope.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find the normal reaction",
          "workingLatex": "R = W_{\\perp} + P\\sin\\alpha = 54.60\\,\\text{N}",
          "explanation": "Forces into the plane give $R = 54.60\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Calculate limiting friction",
          "workingLatex": "F_{\\max} = \\mu R = 27.30\\,\\text{N}",
          "explanation": "Maximum friction is $27.30\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Apply equilibrium parallel to the plane",
          "workingLatex": "P\\cos\\alpha = W_{\\parallel} + F",
          "explanation": "Up-slope push balances weight component and friction down the plane.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Solve for friction",
          "workingLatex": "F = 23.49 - 16.76 = 6.73\\,\\text{N}",
          "explanation": "Friction required is $6.73\\,\\text{N}$ down the plane.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Compare with limiting value",
          "workingLatex": "F = 6.73 \\quad \\text{vs} \\quad F_{\\max} = 27.30",
          "explanation": "Check whether $|F| \\le F_{\\max}$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Conclusion on motion",
          "workingLatex": "\\text{The particle remains in equilibrium}",
          "explanation": "Friction can balance the forces.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State friction direction",
          "workingLatex": "\\text{Friction acts down the plane}",
          "explanation": "The push tends to move the particle up, so friction opposes by acting down the slope.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Final answer",
          "workingLatex": "F = 6.73\\,\\text{N} \\text{ down the plane}",
          "explanation": "Frictional force: $6.73\\,\\text{N}$ down the plane.",
          "diagram": null
        }
      ],
      "finalAnswer": "$F = 6.73\\,\\text{N}$ down the plane; the particle is in equilibrium."
    }
  },
  {
    "id": "al.y2.mech.forces-friction.q044",
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Forces and friction",
    "subtopicId": "al.y2.mech.forces-friction",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "written",
    "tags": [
      "horizontal-force",
      "inclined-plane",
      "resolving"
    ],
    "questionText": "A particle of mass $8\\,\\text{kg}$ rests on a rough plane inclined at $15°$ to the horizontal. A horizontal force of $40\\,\\text{N}$ acts on the particle, pushing it up the plane. The coefficient of friction is $\\mu = 0.3$. Taking $g = 9.8\\,\\text{m s}^{-2}$, find the frictional force and state whether the particle moves.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Resolve the horizontal force parallel to the plane",
          "workingLatex": "P\\cos\\alpha = 40\\cos 15° = 38.64\\,\\text{N}",
          "explanation": "Component up the slope: $38.64\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Resolve the horizontal force perpendicular to the plane",
          "workingLatex": "P\\sin\\alpha = 40\\sin 15° = 10.35\\,\\text{N}",
          "explanation": "Component into the plane increases the normal reaction.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Resolve weight",
          "workingLatex": "W_{\\parallel} = 20.29\\,\\text{N}, \\quad W_{\\perp} = 75.73\\,\\text{N}",
          "explanation": "Weight components parallel and perpendicular to the slope.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find the normal reaction",
          "workingLatex": "R = W_{\\perp} + P\\sin\\alpha = 86.08\\,\\text{N}",
          "explanation": "Forces into the plane give $R = 86.08\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Calculate limiting friction",
          "workingLatex": "F_{\\max} = \\mu R = 25.82\\,\\text{N}",
          "explanation": "Maximum friction is $25.82\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Apply equilibrium parallel to the plane",
          "workingLatex": "P\\cos\\alpha = W_{\\parallel} + F",
          "explanation": "Up-slope push balances weight component and friction down the plane.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Solve for friction",
          "workingLatex": "F = 38.64 - 20.29 = 18.35\\,\\text{N}",
          "explanation": "Friction required is $18.35\\,\\text{N}$ down the plane.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Compare with limiting value",
          "workingLatex": "F = 18.35 \\quad \\text{vs} \\quad F_{\\max} = 25.82",
          "explanation": "Check whether $|F| \\le F_{\\max}$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Conclusion on motion",
          "workingLatex": "\\text{The particle remains in equilibrium}",
          "explanation": "Friction can balance the forces.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State friction direction",
          "workingLatex": "\\text{Friction acts down the plane}",
          "explanation": "The push tends to move the particle up, so friction opposes by acting down the slope.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Final answer",
          "workingLatex": "F = 18.35\\,\\text{N} \\text{ down the plane}",
          "explanation": "Frictional force: $18.35\\,\\text{N}$ down the plane.",
          "diagram": null
        }
      ],
      "finalAnswer": "$F = 18.35\\,\\text{N}$ down the plane; the particle is in equilibrium."
    }
  },
  {
    "id": "al.y2.mech.forces-friction.q045",
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Forces and friction",
    "subtopicId": "al.y2.mech.forces-friction",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "written",
    "tags": [
      "horizontal-force",
      "inclined-plane",
      "resolving"
    ],
    "questionText": "A particle of mass $3\\,\\text{kg}$ rests on a rough plane inclined at $35°$ to the horizontal. A horizontal force of $20\\,\\text{N}$ acts on the particle, pushing it up the plane. The coefficient of friction is $\\mu = 0.6$. Taking $g = 9.8\\,\\text{m s}^{-2}$, find the frictional force and state whether the particle moves.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Resolve the horizontal force parallel to the plane",
          "workingLatex": "P\\cos\\alpha = 20\\cos 35° = 16.38\\,\\text{N}",
          "explanation": "Component up the slope: $16.38\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Resolve the horizontal force perpendicular to the plane",
          "workingLatex": "P\\sin\\alpha = 20\\sin 35° = 11.47\\,\\text{N}",
          "explanation": "Component into the plane increases the normal reaction.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Resolve weight",
          "workingLatex": "W_{\\parallel} = 16.86\\,\\text{N}, \\quad W_{\\perp} = 24.08\\,\\text{N}",
          "explanation": "Weight components parallel and perpendicular to the slope.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find the normal reaction",
          "workingLatex": "R = W_{\\perp} + P\\sin\\alpha = 35.55\\,\\text{N}",
          "explanation": "Forces into the plane give $R = 35.55\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Calculate limiting friction",
          "workingLatex": "F_{\\max} = \\mu R = 21.33\\,\\text{N}",
          "explanation": "Maximum friction is $21.33\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Apply equilibrium parallel to the plane",
          "workingLatex": "P\\cos\\alpha = W_{\\parallel} + F",
          "explanation": "Up-slope push balances weight component and friction down the plane.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Solve for friction",
          "workingLatex": "F = 16.38 - 16.86 = -0.48\\,\\text{N}",
          "explanation": "Friction required is $-0.48\\,\\text{N}$ down the plane.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Compare with limiting value",
          "workingLatex": "F = -0.48 \\quad \\text{vs} \\quad F_{\\max} = 21.33",
          "explanation": "Check whether $|F| \\le F_{\\max}$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Conclusion on motion",
          "workingLatex": "\\text{The particle moves up the plane}",
          "explanation": "Friction exceeds the limit or force is insufficient.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State friction direction",
          "workingLatex": "\\text{Friction acts down the plane}",
          "explanation": "The push tends to move the particle up, so friction opposes by acting down the slope.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Final answer",
          "workingLatex": "F = 0.48\\,\\text{N} \\text{ down the plane}",
          "explanation": "Frictional force: $0.48\\,\\text{N}$ down the plane.",
          "diagram": null
        }
      ],
      "finalAnswer": "$F = 0.48\\,\\text{N}$ down the plane; the particle moves."
    }
  },
  {
    "id": "al.y2.mech.forces-friction.q046",
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Forces and friction",
    "subtopicId": "al.y2.mech.forces-friction",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "written",
    "tags": [
      "horizontal-force",
      "inclined-plane",
      "resolving"
    ],
    "questionText": "A particle of mass $10\\,\\text{kg}$ rests on a rough plane inclined at $18°$ to the horizontal. A horizontal force of $60\\,\\text{N}$ acts on the particle, pushing it up the plane. The coefficient of friction is $\\mu = 0.45$. Taking $g = 9.8\\,\\text{m s}^{-2}$, find the frictional force and state whether the particle moves.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Resolve the horizontal force parallel to the plane",
          "workingLatex": "P\\cos\\alpha = 60\\cos 18° = 57.06\\,\\text{N}",
          "explanation": "Component up the slope: $57.06\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Resolve the horizontal force perpendicular to the plane",
          "workingLatex": "P\\sin\\alpha = 60\\sin 18° = 18.54\\,\\text{N}",
          "explanation": "Component into the plane increases the normal reaction.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Resolve weight",
          "workingLatex": "W_{\\parallel} = 30.28\\,\\text{N}, \\quad W_{\\perp} = 93.20\\,\\text{N}",
          "explanation": "Weight components parallel and perpendicular to the slope.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find the normal reaction",
          "workingLatex": "R = W_{\\perp} + P\\sin\\alpha = 111.74\\,\\text{N}",
          "explanation": "Forces into the plane give $R = 111.74\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Calculate limiting friction",
          "workingLatex": "F_{\\max} = \\mu R = 50.29\\,\\text{N}",
          "explanation": "Maximum friction is $50.29\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Apply equilibrium parallel to the plane",
          "workingLatex": "P\\cos\\alpha = W_{\\parallel} + F",
          "explanation": "Up-slope push balances weight component and friction down the plane.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Solve for friction",
          "workingLatex": "F = 57.06 - 30.28 = 26.78\\,\\text{N}",
          "explanation": "Friction required is $26.78\\,\\text{N}$ down the plane.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Compare with limiting value",
          "workingLatex": "F = 26.78 \\quad \\text{vs} \\quad F_{\\max} = 50.29",
          "explanation": "Check whether $|F| \\le F_{\\max}$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Conclusion on motion",
          "workingLatex": "\\text{The particle remains in equilibrium}",
          "explanation": "Friction can balance the forces.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State friction direction",
          "workingLatex": "\\text{Friction acts down the plane}",
          "explanation": "The push tends to move the particle up, so friction opposes by acting down the slope.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Final answer",
          "workingLatex": "F = 26.78\\,\\text{N} \\text{ down the plane}",
          "explanation": "Frictional force: $26.78\\,\\text{N}$ down the plane.",
          "diagram": null
        }
      ],
      "finalAnswer": "$F = 26.78\\,\\text{N}$ down the plane; the particle is in equilibrium."
    }
  },
  {
    "id": "al.y2.mech.forces-friction.q047",
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Forces and friction",
    "subtopicId": "al.y2.mech.forces-friction",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "numeric",
    "tags": [
      "minimum-force",
      "inclined-plane",
      "limiting-friction"
    ],
    "questionText": "A particle of mass $5\\,\\text{kg}$ rests on a rough plane inclined at $30°$ to the horizontal, with $\\mu = 0.3$. Taking $g = 9.8\\,\\text{m s}^{-2}$, find the minimum force parallel to the plane, acting up the slope, needed to prevent the particle sliding.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Resolve weight down the plane",
          "workingLatex": "W_{\\parallel} = mg\\sin\\alpha = 24.50\\,\\text{N}",
          "explanation": "Component tending to slide the particle down: $24.50\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find the normal reaction",
          "workingLatex": "R = mg\\cos\\alpha = 42.44\\,\\text{N}",
          "explanation": "$R = 42.44\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Calculate maximum friction up the plane",
          "workingLatex": "F_{\\max} = \\mu R = 12.73\\,\\text{N}",
          "explanation": "Limiting friction up the slope: $12.73\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Compare friction capacity with downslope pull",
          "workingLatex": "W_{\\parallel} = 24.50\\,\\text{N}, \\quad F_{\\max} = 12.73\\,\\text{N}",
          "explanation": "Check whether friction alone can prevent sliding.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Determine if extra force is needed",
          "workingLatex": "\\text{Extra force needed}",
          "explanation": "Friction is insufficient.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Set up equilibrium equation up the plane",
          "workingLatex": "F_{\\text{applied}} + F = W_{\\parallel}",
          "explanation": "Applied force plus friction up the plane balance weight down the slope.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Use limiting friction",
          "workingLatex": "F = F_{\\max} = 12.73\\,\\text{N}",
          "explanation": "Minimum applied force occurs when friction is at its maximum.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Solve for minimum applied force",
          "workingLatex": "F_{\\text{applied}} = W_{\\parallel} - F_{\\max} = 11.77\\,\\text{N}",
          "explanation": "Minimum force up the plane: $11.77\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Interpret",
          "workingLatex": "F_{\\min} = 11.77\\,\\text{N}",
          "explanation": "A force of at least $11.77\\,\\text{N}$ up the slope is needed.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Final answer",
          "workingLatex": "F_{\\min} = 11.77\\,\\text{N}",
          "explanation": "Minimum force: $11.77\\,\\text{N}$ up the plane.",
          "diagram": null
        }
      ],
      "finalAnswer": "$F_{\\min} = 11.77\\,\\text{N}$ up the plane."
    }
  },
  {
    "id": "al.y2.mech.forces-friction.q048",
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Forces and friction",
    "subtopicId": "al.y2.mech.forces-friction",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "numeric",
    "tags": [
      "minimum-force",
      "inclined-plane",
      "limiting-friction"
    ],
    "questionText": "A particle of mass $8\\,\\text{kg}$ rests on a rough plane inclined at $35°$ to the horizontal, with $\\mu = 0.25$. Taking $g = 9.8\\,\\text{m s}^{-2}$, find the minimum force parallel to the plane, acting up the slope, needed to prevent the particle sliding.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Resolve weight down the plane",
          "workingLatex": "W_{\\parallel} = mg\\sin\\alpha = 44.97\\,\\text{N}",
          "explanation": "Component tending to slide the particle down: $44.97\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find the normal reaction",
          "workingLatex": "R = mg\\cos\\alpha = 64.22\\,\\text{N}",
          "explanation": "$R = 64.22\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Calculate maximum friction up the plane",
          "workingLatex": "F_{\\max} = \\mu R = 16.06\\,\\text{N}",
          "explanation": "Limiting friction up the slope: $16.06\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Compare friction capacity with downslope pull",
          "workingLatex": "W_{\\parallel} = 44.97\\,\\text{N}, \\quad F_{\\max} = 16.06\\,\\text{N}",
          "explanation": "Check whether friction alone can prevent sliding.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Determine if extra force is needed",
          "workingLatex": "\\text{Extra force needed}",
          "explanation": "Friction is insufficient.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Set up equilibrium equation up the plane",
          "workingLatex": "F_{\\text{applied}} + F = W_{\\parallel}",
          "explanation": "Applied force plus friction up the plane balance weight down the slope.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Use limiting friction",
          "workingLatex": "F = F_{\\max} = 16.06\\,\\text{N}",
          "explanation": "Minimum applied force occurs when friction is at its maximum.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Solve for minimum applied force",
          "workingLatex": "F_{\\text{applied}} = W_{\\parallel} - F_{\\max} = 28.91\\,\\text{N}",
          "explanation": "Minimum force up the plane: $28.91\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Interpret",
          "workingLatex": "F_{\\min} = 28.91\\,\\text{N}",
          "explanation": "A force of at least $28.91\\,\\text{N}$ up the slope is needed.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Final answer",
          "workingLatex": "F_{\\min} = 28.91\\,\\text{N}",
          "explanation": "Minimum force: $28.91\\,\\text{N}$ up the plane.",
          "diagram": null
        }
      ],
      "finalAnswer": "$F_{\\min} = 28.91\\,\\text{N}$ up the plane."
    }
  },
  {
    "id": "al.y2.mech.forces-friction.q049",
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Forces and friction",
    "subtopicId": "al.y2.mech.forces-friction",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "numeric",
    "tags": [
      "minimum-force",
      "inclined-plane",
      "limiting-friction"
    ],
    "questionText": "A particle of mass $4\\,\\text{kg}$ rests on a rough plane inclined at $40°$ to the horizontal, with $\\mu = 0.4$. Taking $g = 9.8\\,\\text{m s}^{-2}$, find the minimum force parallel to the plane, acting up the slope, needed to prevent the particle sliding.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Resolve weight down the plane",
          "workingLatex": "W_{\\parallel} = mg\\sin\\alpha = 25.20\\,\\text{N}",
          "explanation": "Component tending to slide the particle down: $25.20\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find the normal reaction",
          "workingLatex": "R = mg\\cos\\alpha = 30.03\\,\\text{N}",
          "explanation": "$R = 30.03\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Calculate maximum friction up the plane",
          "workingLatex": "F_{\\max} = \\mu R = 12.01\\,\\text{N}",
          "explanation": "Limiting friction up the slope: $12.01\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Compare friction capacity with downslope pull",
          "workingLatex": "W_{\\parallel} = 25.20\\,\\text{N}, \\quad F_{\\max} = 12.01\\,\\text{N}",
          "explanation": "Check whether friction alone can prevent sliding.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Determine if extra force is needed",
          "workingLatex": "\\text{Extra force needed}",
          "explanation": "Friction is insufficient.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Set up equilibrium equation up the plane",
          "workingLatex": "F_{\\text{applied}} + F = W_{\\parallel}",
          "explanation": "Applied force plus friction up the plane balance weight down the slope.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Use limiting friction",
          "workingLatex": "F = F_{\\max} = 12.01\\,\\text{N}",
          "explanation": "Minimum applied force occurs when friction is at its maximum.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Solve for minimum applied force",
          "workingLatex": "F_{\\text{applied}} = W_{\\parallel} - F_{\\max} = 13.19\\,\\text{N}",
          "explanation": "Minimum force up the plane: $13.19\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Interpret",
          "workingLatex": "F_{\\min} = 13.19\\,\\text{N}",
          "explanation": "A force of at least $13.19\\,\\text{N}$ up the slope is needed.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Final answer",
          "workingLatex": "F_{\\min} = 13.19\\,\\text{N}",
          "explanation": "Minimum force: $13.19\\,\\text{N}$ up the plane.",
          "diagram": null
        }
      ],
      "finalAnswer": "$F_{\\min} = 13.19\\,\\text{N}$ up the plane."
    }
  },
  {
    "id": "al.y2.mech.forces-friction.q050",
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Forces and friction",
    "subtopicId": "al.y2.mech.forces-friction",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "numeric",
    "tags": [
      "minimum-force",
      "inclined-plane",
      "limiting-friction"
    ],
    "questionText": "A particle of mass $6\\,\\text{kg}$ rests on a rough plane inclined at $25°$ to the horizontal, with $\\mu = 0.5$. Taking $g = 9.8\\,\\text{m s}^{-2}$, find the minimum force parallel to the plane, acting up the slope, needed to prevent the particle sliding.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Resolve weight down the plane",
          "workingLatex": "W_{\\parallel} = mg\\sin\\alpha = 24.85\\,\\text{N}",
          "explanation": "Component tending to slide the particle down: $24.85\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find the normal reaction",
          "workingLatex": "R = mg\\cos\\alpha = 53.29\\,\\text{N}",
          "explanation": "$R = 53.29\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Calculate maximum friction up the plane",
          "workingLatex": "F_{\\max} = \\mu R = 26.65\\,\\text{N}",
          "explanation": "Limiting friction up the slope: $26.65\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Compare friction capacity with downslope pull",
          "workingLatex": "W_{\\parallel} = 24.85\\,\\text{N}, \\quad F_{\\max} = 26.65\\,\\text{N}",
          "explanation": "Check whether friction alone can prevent sliding.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Determine if extra force is needed",
          "workingLatex": "\\text{No extra force needed}",
          "explanation": "Friction alone balances the weight component.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Set up equilibrium equation up the plane",
          "workingLatex": "F_{\\text{applied}} + F = W_{\\parallel}",
          "explanation": "Applied force plus friction up the plane balance weight down the slope.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Use limiting friction",
          "workingLatex": "F = F_{\\max} = 26.65\\,\\text{N}",
          "explanation": "Minimum applied force occurs when friction is at its maximum.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Solve for minimum applied force",
          "workingLatex": "F_{\\text{applied}} = W_{\\parallel} - F_{\\max} = 0\\,\\text{N}",
          "explanation": "Minimum force up the plane: $0\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Interpret",
          "workingLatex": "F_{\\min} = 0\\,\\text{N}",
          "explanation": "No additional force — $0\\,\\text{N}$ up the slope is needed.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Final answer",
          "workingLatex": "F_{\\min} = 0\\,\\text{N}",
          "explanation": "Minimum force: $0\\,\\text{N}$ up the plane.",
          "diagram": null
        }
      ],
      "finalAnswer": "$F_{\\min} = 0\\,\\text{N}$ up the plane."
    }
  },
  {
    "id": "al.y2.mech.forces-friction.q051",
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Forces and friction",
    "subtopicId": "al.y2.mech.forces-friction",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "written",
    "tags": [
      "ladder",
      "moments",
      "limiting-equilibrium"
    ],
    "questionText": "A uniform ladder of mass $8\\,\\text{kg}$ and length $5\\,\\text{m}$ rests against a smooth vertical wall with its foot on rough horizontal ground. The ladder makes an angle of $60°$ with the ground. The coefficient of friction between the ladder and the ground is $\\mu = 0.4$. Taking $g = 9.8\\,\\text{m s}^{-2}$, find the frictional force at the foot of the ladder and determine whether the ladder is in limiting equilibrium.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Draw the force diagram",
          "workingLatex": "\\text{Weight at centre, normal at wall, reaction and friction at ground}",
          "explanation": "The smooth wall exerts only a horizontal normal force. The ground exerts vertical reaction and horizontal friction.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Calculate the weight",
          "workingLatex": "W = mg = 78.40\\,\\text{N}",
          "explanation": "Weight $78.40\\,\\text{N}$ acts at the midpoint of the ladder.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Resolve vertically",
          "workingLatex": "R_{\\text{ground}} = W = 78.40\\,\\text{N}",
          "explanation": "Vertical equilibrium: ground reaction equals weight.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Take moments about the foot of the ladder",
          "workingLatex": "R_{\\text{wall}} \\times L\\sin\\alpha = W \\times \\dfrac{L}{2}\\cos\\alpha",
          "explanation": "Moments about the base eliminate ground friction and reaction from the equation.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve for the wall reaction",
          "workingLatex": "R_{\\text{wall}} = \\dfrac{W\\cos\\alpha}{2\\sin\\alpha} = 22.63\\,\\text{N}",
          "explanation": "Wall reaction: $22.63\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Resolve horizontally",
          "workingLatex": "F = R_{\\text{wall}} = 22.63\\,\\text{N}",
          "explanation": "Horizontal equilibrium: friction at ground equals wall reaction.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Calculate limiting friction",
          "workingLatex": "F_{\\max} = \\mu R_{\\text{ground}} = 31.36\\,\\text{N}",
          "explanation": "Maximum friction: $31.36\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Compare friction with limit",
          "workingLatex": "F = 22.63 \\quad \\text{vs} \\quad F_{\\max} = 31.36",
          "explanation": "Check whether the ladder is about to slip.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Conclusion on limiting equilibrium",
          "workingLatex": "\\text{Not at limiting equilibrium}",
          "explanation": "Friction is less than the maximum value.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State direction of friction",
          "workingLatex": "\\text{Friction acts horizontally towards the wall}",
          "explanation": "The wall pushes the ladder away from the wall; friction at the ground opposes the tendency of the foot to slide outward.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Check ladder angle criterion",
          "workingLatex": "\\tan\\alpha = 1.732 \\quad \\text{vs} \\quad 2\\mu = 0.800",
          "explanation": "For limiting equilibrium at the foot: $\\tan\\alpha = 2\\mu$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Comment on stability",
          "workingLatex": "\\text{Ladder remains in equilibrium}",
          "explanation": "If friction is insufficient, the ladder would slip at the ground.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Final answer",
          "workingLatex": "F = 22.63\\,\\text{N}, \\quad \\text{not limiting}",
          "explanation": "Friction at ground: $22.63\\,\\text{N}$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$F = 22.63\\,\\text{N}$ at the foot; not at the limit ($F_{\\max} = 31.36\\,\\text{N}$)."
    }
  },
  {
    "id": "al.y2.mech.forces-friction.q052",
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Forces and friction",
    "subtopicId": "al.y2.mech.forces-friction",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "written",
    "tags": [
      "ladder",
      "moments",
      "limiting-equilibrium"
    ],
    "questionText": "A uniform ladder of mass $10\\,\\text{kg}$ and length $6\\,\\text{m}$ rests against a smooth vertical wall with its foot on rough horizontal ground. The ladder makes an angle of $65°$ with the ground. The coefficient of friction between the ladder and the ground is $\\mu = 0.35$. Taking $g = 9.8\\,\\text{m s}^{-2}$, find the frictional force at the foot of the ladder and determine whether the ladder is in limiting equilibrium.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Draw the force diagram",
          "workingLatex": "\\text{Weight at centre, normal at wall, reaction and friction at ground}",
          "explanation": "The smooth wall exerts only a horizontal normal force. The ground exerts vertical reaction and horizontal friction.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Calculate the weight",
          "workingLatex": "W = mg = 98\\,\\text{N}",
          "explanation": "Weight $98\\,\\text{N}$ acts at the midpoint of the ladder.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Resolve vertically",
          "workingLatex": "R_{\\text{ground}} = W = 98\\,\\text{N}",
          "explanation": "Vertical equilibrium: ground reaction equals weight.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Take moments about the foot of the ladder",
          "workingLatex": "R_{\\text{wall}} \\times L\\sin\\alpha = W \\times \\dfrac{L}{2}\\cos\\alpha",
          "explanation": "Moments about the base eliminate ground friction and reaction from the equation.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve for the wall reaction",
          "workingLatex": "R_{\\text{wall}} = \\dfrac{W\\cos\\alpha}{2\\sin\\alpha} = 22.85\\,\\text{N}",
          "explanation": "Wall reaction: $22.85\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Resolve horizontally",
          "workingLatex": "F = R_{\\text{wall}} = 22.85\\,\\text{N}",
          "explanation": "Horizontal equilibrium: friction at ground equals wall reaction.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Calculate limiting friction",
          "workingLatex": "F_{\\max} = \\mu R_{\\text{ground}} = 34.30\\,\\text{N}",
          "explanation": "Maximum friction: $34.30\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Compare friction with limit",
          "workingLatex": "F = 22.85 \\quad \\text{vs} \\quad F_{\\max} = 34.30",
          "explanation": "Check whether the ladder is about to slip.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Conclusion on limiting equilibrium",
          "workingLatex": "\\text{Not at limiting equilibrium}",
          "explanation": "Friction is less than the maximum value.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State direction of friction",
          "workingLatex": "\\text{Friction acts horizontally towards the wall}",
          "explanation": "The wall pushes the ladder away from the wall; friction at the ground opposes the tendency of the foot to slide outward.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Check ladder angle criterion",
          "workingLatex": "\\tan\\alpha = 2.145 \\quad \\text{vs} \\quad 2\\mu = 0.700",
          "explanation": "For limiting equilibrium at the foot: $\\tan\\alpha = 2\\mu$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Comment on stability",
          "workingLatex": "\\text{Ladder remains in equilibrium}",
          "explanation": "If friction is insufficient, the ladder would slip at the ground.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Final answer",
          "workingLatex": "F = 22.85\\,\\text{N}, \\quad \\text{not limiting}",
          "explanation": "Friction at ground: $22.85\\,\\text{N}$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$F = 22.85\\,\\text{N}$ at the foot; not at the limit ($F_{\\max} = 34.30\\,\\text{N}$)."
    }
  },
  {
    "id": "al.y2.mech.forces-friction.q053",
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Forces and friction",
    "subtopicId": "al.y2.mech.forces-friction",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "written",
    "tags": [
      "ladder",
      "moments",
      "limiting-equilibrium"
    ],
    "questionText": "A uniform ladder of mass $6\\,\\text{kg}$ and length $4\\,\\text{m}$ rests against a smooth vertical wall with its foot on rough horizontal ground. The ladder makes an angle of $55°$ with the ground. The coefficient of friction between the ladder and the ground is $\\mu = 0.5$. Taking $g = 9.8\\,\\text{m s}^{-2}$, find the frictional force at the foot of the ladder and determine whether the ladder is in limiting equilibrium.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Draw the force diagram",
          "workingLatex": "\\text{Weight at centre, normal at wall, reaction and friction at ground}",
          "explanation": "The smooth wall exerts only a horizontal normal force. The ground exerts vertical reaction and horizontal friction.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Calculate the weight",
          "workingLatex": "W = mg = 58.80\\,\\text{N}",
          "explanation": "Weight $58.80\\,\\text{N}$ acts at the midpoint of the ladder.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Resolve vertically",
          "workingLatex": "R_{\\text{ground}} = W = 58.80\\,\\text{N}",
          "explanation": "Vertical equilibrium: ground reaction equals weight.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Take moments about the foot of the ladder",
          "workingLatex": "R_{\\text{wall}} \\times L\\sin\\alpha = W \\times \\dfrac{L}{2}\\cos\\alpha",
          "explanation": "Moments about the base eliminate ground friction and reaction from the equation.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve for the wall reaction",
          "workingLatex": "R_{\\text{wall}} = \\dfrac{W\\cos\\alpha}{2\\sin\\alpha} = 20.59\\,\\text{N}",
          "explanation": "Wall reaction: $20.59\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Resolve horizontally",
          "workingLatex": "F = R_{\\text{wall}} = 20.59\\,\\text{N}",
          "explanation": "Horizontal equilibrium: friction at ground equals wall reaction.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Calculate limiting friction",
          "workingLatex": "F_{\\max} = \\mu R_{\\text{ground}} = 29.40\\,\\text{N}",
          "explanation": "Maximum friction: $29.40\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Compare friction with limit",
          "workingLatex": "F = 20.59 \\quad \\text{vs} \\quad F_{\\max} = 29.40",
          "explanation": "Check whether the ladder is about to slip.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Conclusion on limiting equilibrium",
          "workingLatex": "\\text{Not at limiting equilibrium}",
          "explanation": "Friction is less than the maximum value.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State direction of friction",
          "workingLatex": "\\text{Friction acts horizontally towards the wall}",
          "explanation": "The wall pushes the ladder away from the wall; friction at the ground opposes the tendency of the foot to slide outward.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Check ladder angle criterion",
          "workingLatex": "\\tan\\alpha = 1.428 \\quad \\text{vs} \\quad 2\\mu = 1",
          "explanation": "For limiting equilibrium at the foot: $\\tan\\alpha = 2\\mu$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Comment on stability",
          "workingLatex": "\\text{Ladder remains in equilibrium}",
          "explanation": "If friction is insufficient, the ladder would slip at the ground.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Final answer",
          "workingLatex": "F = 20.59\\,\\text{N}, \\quad \\text{not limiting}",
          "explanation": "Friction at ground: $20.59\\,\\text{N}$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$F = 20.59\\,\\text{N}$ at the foot; not at the limit ($F_{\\max} = 29.40\\,\\text{N}$)."
    }
  },
  {
    "id": "al.y2.mech.forces-friction.q054",
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Forces and friction",
    "subtopicId": "al.y2.mech.forces-friction",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "written",
    "tags": [
      "ladder",
      "moments",
      "limiting-equilibrium"
    ],
    "questionText": "A uniform ladder of mass $12\\,\\text{kg}$ and length $7\\,\\text{m}$ rests against a smooth vertical wall with its foot on rough horizontal ground. The ladder makes an angle of $70°$ with the ground. The coefficient of friction between the ladder and the ground is $\\mu = 0.3$. Taking $g = 9.8\\,\\text{m s}^{-2}$, find the frictional force at the foot of the ladder and determine whether the ladder is in limiting equilibrium.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Draw the force diagram",
          "workingLatex": "\\text{Weight at centre, normal at wall, reaction and friction at ground}",
          "explanation": "The smooth wall exerts only a horizontal normal force. The ground exerts vertical reaction and horizontal friction.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Calculate the weight",
          "workingLatex": "W = mg = 117.60\\,\\text{N}",
          "explanation": "Weight $117.60\\,\\text{N}$ acts at the midpoint of the ladder.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Resolve vertically",
          "workingLatex": "R_{\\text{ground}} = W = 117.60\\,\\text{N}",
          "explanation": "Vertical equilibrium: ground reaction equals weight.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Take moments about the foot of the ladder",
          "workingLatex": "R_{\\text{wall}} \\times L\\sin\\alpha = W \\times \\dfrac{L}{2}\\cos\\alpha",
          "explanation": "Moments about the base eliminate ground friction and reaction from the equation.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve for the wall reaction",
          "workingLatex": "R_{\\text{wall}} = \\dfrac{W\\cos\\alpha}{2\\sin\\alpha} = 21.40\\,\\text{N}",
          "explanation": "Wall reaction: $21.40\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Resolve horizontally",
          "workingLatex": "F = R_{\\text{wall}} = 21.40\\,\\text{N}",
          "explanation": "Horizontal equilibrium: friction at ground equals wall reaction.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Calculate limiting friction",
          "workingLatex": "F_{\\max} = \\mu R_{\\text{ground}} = 35.28\\,\\text{N}",
          "explanation": "Maximum friction: $35.28\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Compare friction with limit",
          "workingLatex": "F = 21.40 \\quad \\text{vs} \\quad F_{\\max} = 35.28",
          "explanation": "Check whether the ladder is about to slip.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Conclusion on limiting equilibrium",
          "workingLatex": "\\text{Not at limiting equilibrium}",
          "explanation": "Friction is less than the maximum value.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State direction of friction",
          "workingLatex": "\\text{Friction acts horizontally towards the wall}",
          "explanation": "The wall pushes the ladder away from the wall; friction at the ground opposes the tendency of the foot to slide outward.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Check ladder angle criterion",
          "workingLatex": "\\tan\\alpha = 2.747 \\quad \\text{vs} \\quad 2\\mu = 0.600",
          "explanation": "For limiting equilibrium at the foot: $\\tan\\alpha = 2\\mu$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Comment on stability",
          "workingLatex": "\\text{Ladder remains in equilibrium}",
          "explanation": "If friction is insufficient, the ladder would slip at the ground.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Final answer",
          "workingLatex": "F = 21.40\\,\\text{N}, \\quad \\text{not limiting}",
          "explanation": "Friction at ground: $21.40\\,\\text{N}$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$F = 21.40\\,\\text{N}$ at the foot; not at the limit ($F_{\\max} = 35.28\\,\\text{N}$)."
    }
  },
  {
    "id": "al.y2.mech.forces-friction.q055",
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Forces and friction",
    "subtopicId": "al.y2.mech.forces-friction",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "written",
    "tags": [
      "angled-force",
      "horizontal",
      "resolving"
    ],
    "questionText": "A particle of mass $5\\,\\text{kg}$ rests on a rough horizontal surface with $\\mu = 0.4$. A force of $30\\,\\text{N}$ is applied at $25°$ above the horizontal. Taking $g = 9.8\\,\\text{m s}^{-2}$, find the normal reaction, the frictional force, and determine whether the particle slides.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Resolve the applied force horizontally",
          "workingLatex": "P\\cos\\theta = 30\\cos 25° = 27.19\\,\\text{N}",
          "explanation": "Horizontal component: $27.19\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Resolve the applied force vertically",
          "workingLatex": "P\\sin\\theta = 30\\sin 25° = 12.68\\,\\text{N}",
          "explanation": "Upward component reduces the normal reaction.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Calculate the weight",
          "workingLatex": "W = mg = 49\\,\\text{N}",
          "explanation": "Weight: $49\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find the normal reaction",
          "workingLatex": "R = W - P\\sin\\theta = 36.32\\,\\text{N}",
          "explanation": "Vertical equilibrium gives $R = 36.32\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Calculate limiting friction",
          "workingLatex": "F_{\\max} = \\mu R = 14.53\\,\\text{N}",
          "explanation": "Maximum friction: $14.53\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Apply horizontal equilibrium",
          "workingLatex": "F = P\\cos\\theta = 27.19\\,\\text{N}",
          "explanation": "Friction balances the horizontal component: $27.19\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Compare with limiting friction",
          "workingLatex": "F = 27.19 \\quad \\text{vs} \\quad F_{\\max} = 14.53",
          "explanation": "Check whether friction can balance the pull.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Determine motion",
          "workingLatex": "\\text{The particle slides}",
          "explanation": "Applied horizontal component exceeds limiting friction.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Note effect of angled pull",
          "workingLatex": "\\text{Pulling at an angle reduces } R \\text{ and hence reduces } F_{\\max}",
          "explanation": "An upward component of the pull makes sliding easier by reducing the normal reaction.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State friction direction",
          "workingLatex": "\\text{Friction opposes the horizontal component of the pull}",
          "explanation": "Friction acts opposite to the tendency to move horizontally.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Summarise forces",
          "workingLatex": "R = 36.32\\,\\text{N}, \\quad F = 14.53\\,\\text{N}",
          "explanation": "Normal reaction $36.32\\,\\text{N}$, friction $14.53\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Verify $F \\le \\mu R$",
          "workingLatex": "14.53 \\le 14.53",
          "explanation": "Friction law is satisfied.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Final answer",
          "workingLatex": "R = 36.32\\,\\text{N}, \\quad F = 14.53\\,\\text{N}, \\quad \\text{slides}",
          "explanation": "$R = 36.32\\,\\text{N}$, $F = 14.53\\,\\text{N}$; particle slides.",
          "diagram": null
        }
      ],
      "finalAnswer": "$R = 36.32\\,\\text{N}$, $F = 14.53\\,\\text{N}$; the particle slides."
    }
  },
  {
    "id": "al.y2.mech.forces-friction.q056",
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Forces and friction",
    "subtopicId": "al.y2.mech.forces-friction",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "written",
    "tags": [
      "angled-force",
      "horizontal",
      "resolving"
    ],
    "questionText": "A particle of mass $8\\,\\text{kg}$ rests on a rough horizontal surface with $\\mu = 0.35$. A force of $50\\,\\text{N}$ is applied at $30°$ above the horizontal. Taking $g = 9.8\\,\\text{m s}^{-2}$, find the normal reaction, the frictional force, and determine whether the particle slides.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Resolve the applied force horizontally",
          "workingLatex": "P\\cos\\theta = 50\\cos 30° = 43.30\\,\\text{N}",
          "explanation": "Horizontal component: $43.30\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Resolve the applied force vertically",
          "workingLatex": "P\\sin\\theta = 50\\sin 30° = 25\\,\\text{N}",
          "explanation": "Upward component reduces the normal reaction.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Calculate the weight",
          "workingLatex": "W = mg = 78.40\\,\\text{N}",
          "explanation": "Weight: $78.40\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find the normal reaction",
          "workingLatex": "R = W - P\\sin\\theta = 53.40\\,\\text{N}",
          "explanation": "Vertical equilibrium gives $R = 53.40\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Calculate limiting friction",
          "workingLatex": "F_{\\max} = \\mu R = 18.69\\,\\text{N}",
          "explanation": "Maximum friction: $18.69\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Apply horizontal equilibrium",
          "workingLatex": "F = P\\cos\\theta = 43.30\\,\\text{N}",
          "explanation": "Friction balances the horizontal component: $43.30\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Compare with limiting friction",
          "workingLatex": "F = 43.30 \\quad \\text{vs} \\quad F_{\\max} = 18.69",
          "explanation": "Check whether friction can balance the pull.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Determine motion",
          "workingLatex": "\\text{The particle slides}",
          "explanation": "Applied horizontal component exceeds limiting friction.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Note effect of angled pull",
          "workingLatex": "\\text{Pulling at an angle reduces } R \\text{ and hence reduces } F_{\\max}",
          "explanation": "An upward component of the pull makes sliding easier by reducing the normal reaction.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State friction direction",
          "workingLatex": "\\text{Friction opposes the horizontal component of the pull}",
          "explanation": "Friction acts opposite to the tendency to move horizontally.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Summarise forces",
          "workingLatex": "R = 53.40\\,\\text{N}, \\quad F = 18.69\\,\\text{N}",
          "explanation": "Normal reaction $53.40\\,\\text{N}$, friction $18.69\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Verify $F \\le \\mu R$",
          "workingLatex": "18.69 \\le 18.69",
          "explanation": "Friction law is satisfied.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Final answer",
          "workingLatex": "R = 53.40\\,\\text{N}, \\quad F = 18.69\\,\\text{N}, \\quad \\text{slides}",
          "explanation": "$R = 53.40\\,\\text{N}$, $F = 18.69\\,\\text{N}$; particle slides.",
          "diagram": null
        }
      ],
      "finalAnswer": "$R = 53.40\\,\\text{N}$, $F = 18.69\\,\\text{N}$; the particle slides."
    }
  },
  {
    "id": "al.y2.mech.forces-friction.q057",
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Forces and friction",
    "subtopicId": "al.y2.mech.forces-friction",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "written",
    "tags": [
      "angled-force",
      "horizontal",
      "resolving"
    ],
    "questionText": "A particle of mass $6\\,\\text{kg}$ rests on a rough horizontal surface with $\\mu = 0.5$. A force of $40\\,\\text{N}$ is applied at $20°$ above the horizontal. Taking $g = 9.8\\,\\text{m s}^{-2}$, find the normal reaction, the frictional force, and determine whether the particle slides.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Resolve the applied force horizontally",
          "workingLatex": "P\\cos\\theta = 40\\cos 20° = 37.59\\,\\text{N}",
          "explanation": "Horizontal component: $37.59\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Resolve the applied force vertically",
          "workingLatex": "P\\sin\\theta = 40\\sin 20° = 13.68\\,\\text{N}",
          "explanation": "Upward component reduces the normal reaction.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Calculate the weight",
          "workingLatex": "W = mg = 58.80\\,\\text{N}",
          "explanation": "Weight: $58.80\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find the normal reaction",
          "workingLatex": "R = W - P\\sin\\theta = 45.12\\,\\text{N}",
          "explanation": "Vertical equilibrium gives $R = 45.12\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Calculate limiting friction",
          "workingLatex": "F_{\\max} = \\mu R = 22.56\\,\\text{N}",
          "explanation": "Maximum friction: $22.56\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Apply horizontal equilibrium",
          "workingLatex": "F = P\\cos\\theta = 37.59\\,\\text{N}",
          "explanation": "Friction balances the horizontal component: $37.59\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Compare with limiting friction",
          "workingLatex": "F = 37.59 \\quad \\text{vs} \\quad F_{\\max} = 22.56",
          "explanation": "Check whether friction can balance the pull.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Determine motion",
          "workingLatex": "\\text{The particle slides}",
          "explanation": "Applied horizontal component exceeds limiting friction.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Note effect of angled pull",
          "workingLatex": "\\text{Pulling at an angle reduces } R \\text{ and hence reduces } F_{\\max}",
          "explanation": "An upward component of the pull makes sliding easier by reducing the normal reaction.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State friction direction",
          "workingLatex": "\\text{Friction opposes the horizontal component of the pull}",
          "explanation": "Friction acts opposite to the tendency to move horizontally.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Summarise forces",
          "workingLatex": "R = 45.12\\,\\text{N}, \\quad F = 22.56\\,\\text{N}",
          "explanation": "Normal reaction $45.12\\,\\text{N}$, friction $22.56\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Verify $F \\le \\mu R$",
          "workingLatex": "22.56 \\le 22.56",
          "explanation": "Friction law is satisfied.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Final answer",
          "workingLatex": "R = 45.12\\,\\text{N}, \\quad F = 22.56\\,\\text{N}, \\quad \\text{slides}",
          "explanation": "$R = 45.12\\,\\text{N}$, $F = 22.56\\,\\text{N}$; particle slides.",
          "diagram": null
        }
      ],
      "finalAnswer": "$R = 45.12\\,\\text{N}$, $F = 22.56\\,\\text{N}$; the particle slides."
    }
  },
  {
    "id": "al.y2.mech.forces-friction.q058",
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Forces and friction",
    "subtopicId": "al.y2.mech.forces-friction",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "written",
    "tags": [
      "angled-force",
      "horizontal",
      "resolving"
    ],
    "questionText": "A particle of mass $10\\,\\text{kg}$ rests on a rough horizontal surface with $\\mu = 0.3$. A force of $60\\,\\text{N}$ is applied at $35°$ above the horizontal. Taking $g = 9.8\\,\\text{m s}^{-2}$, find the normal reaction, the frictional force, and determine whether the particle slides.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Resolve the applied force horizontally",
          "workingLatex": "P\\cos\\theta = 60\\cos 35° = 49.15\\,\\text{N}",
          "explanation": "Horizontal component: $49.15\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Resolve the applied force vertically",
          "workingLatex": "P\\sin\\theta = 60\\sin 35° = 34.41\\,\\text{N}",
          "explanation": "Upward component reduces the normal reaction.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Calculate the weight",
          "workingLatex": "W = mg = 98\\,\\text{N}",
          "explanation": "Weight: $98\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find the normal reaction",
          "workingLatex": "R = W - P\\sin\\theta = 63.59\\,\\text{N}",
          "explanation": "Vertical equilibrium gives $R = 63.59\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Calculate limiting friction",
          "workingLatex": "F_{\\max} = \\mu R = 19.08\\,\\text{N}",
          "explanation": "Maximum friction: $19.08\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Apply horizontal equilibrium",
          "workingLatex": "F = P\\cos\\theta = 49.15\\,\\text{N}",
          "explanation": "Friction balances the horizontal component: $49.15\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Compare with limiting friction",
          "workingLatex": "F = 49.15 \\quad \\text{vs} \\quad F_{\\max} = 19.08",
          "explanation": "Check whether friction can balance the pull.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Determine motion",
          "workingLatex": "\\text{The particle slides}",
          "explanation": "Applied horizontal component exceeds limiting friction.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Note effect of angled pull",
          "workingLatex": "\\text{Pulling at an angle reduces } R \\text{ and hence reduces } F_{\\max}",
          "explanation": "An upward component of the pull makes sliding easier by reducing the normal reaction.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State friction direction",
          "workingLatex": "\\text{Friction opposes the horizontal component of the pull}",
          "explanation": "Friction acts opposite to the tendency to move horizontally.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Summarise forces",
          "workingLatex": "R = 63.59\\,\\text{N}, \\quad F = 19.08\\,\\text{N}",
          "explanation": "Normal reaction $63.59\\,\\text{N}$, friction $19.08\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Verify $F \\le \\mu R$",
          "workingLatex": "19.08 \\le 19.08",
          "explanation": "Friction law is satisfied.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Final answer",
          "workingLatex": "R = 63.59\\,\\text{N}, \\quad F = 19.08\\,\\text{N}, \\quad \\text{slides}",
          "explanation": "$R = 63.59\\,\\text{N}$, $F = 19.08\\,\\text{N}$; particle slides.",
          "diagram": null
        }
      ],
      "finalAnswer": "$R = 63.59\\,\\text{N}$, $F = 19.08\\,\\text{N}$; the particle slides."
    }
  },
  {
    "id": "al.y2.mech.forces-friction.q059",
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Forces and friction",
    "subtopicId": "al.y2.mech.forces-friction",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "written",
    "tags": [
      "inclined-plane",
      "angled-pull",
      "limiting-equilibrium"
    ],
    "questionText": "A particle of mass $5\\,\\text{kg}$ rests on a rough plane inclined at $30°$ to the horizontal. A force of $25\\,\\text{N}$ acts at $15°$ above the inclined plane, pulling up the slope. The coefficient of friction is $\\mu = 0.4$. Taking $g = 9.8\\,\\text{m s}^{-2}$, find the normal reaction, the frictional force, and state whether the particle is on the point of sliding.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Resolve weight parallel to the plane",
          "workingLatex": "W_{\\parallel} = 24.50\\,\\text{N}",
          "explanation": "Downslope component: $24.50\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Resolve weight perpendicular to the plane",
          "workingLatex": "W_{\\perp} = 42.44\\,\\text{N}",
          "explanation": "Into-plane component: $42.44\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Resolve the pull parallel to the plane",
          "workingLatex": "P_{\\parallel} = 25\\cos 15° = 24.15\\,\\text{N}",
          "explanation": "Up-slope component of pull: $24.15\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Resolve the pull perpendicular to the plane",
          "workingLatex": "P_{\\perp} = 25\\sin 15° = 6.47\\,\\text{N}",
          "explanation": "Component away from the plane reduces the normal reaction.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find the normal reaction",
          "workingLatex": "R = W_{\\perp} - P_{\\perp} = 35.96\\,\\text{N}",
          "explanation": "$R = 35.96\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Calculate limiting friction",
          "workingLatex": "F_{\\max} = \\mu R = 14.39\\,\\text{N}",
          "explanation": "Maximum friction: $14.39\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Apply equilibrium parallel to the plane",
          "workingLatex": "P_{\\parallel} = W_{\\parallel} + F",
          "explanation": "Up-slope pull balances weight component and friction.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Solve for friction",
          "workingLatex": "F = 24.15 - 24.50 = -0.35\\,\\text{N}",
          "explanation": "Friction: $-0.35\\,\\text{N}$ (down the plane if positive).",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Compare with limiting value",
          "workingLatex": "|F| = 0.35 \\quad \\text{vs} \\quad F_{\\max} = 14.39",
          "explanation": "Check if friction reaches its limit.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Determine limiting equilibrium",
          "workingLatex": "\\text{Not at the limit}",
          "explanation": "Friction does not equal $\\mu R$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "State friction direction",
          "workingLatex": "\\text{Friction acts up the plane}",
          "explanation": "Friction opposes the tendency to slide.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Check overall motion",
          "workingLatex": "\\text{Particle in equilibrium}",
          "explanation": "Forces balance with $F \\le \\mu R$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Summarise key results",
          "workingLatex": "R = 35.96\\,\\text{N}, \\quad F = 0.35\\,\\text{N}",
          "explanation": "Normal reaction $35.96\\,\\text{N}$, friction $0.35\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Final answer",
          "workingLatex": "R = 35.96\\,\\text{N}, \\quad F = 0.35\\,\\text{N} \\text{ up the plane}",
          "explanation": "$R = 35.96\\,\\text{N}$, $F = 0.35\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "Method recap",
          "workingLatex": "\\text{Resolve all forces parallel and perpendicular to the plane}",
          "explanation": "This systematic approach handles angled pulls on slopes.",
          "diagram": null
        }
      ],
      "finalAnswer": "$R = 35.96\\,\\text{N}$, $F = 0.35\\,\\text{N}$ up the plane."
    }
  },
  {
    "id": "al.y2.mech.forces-friction.q060",
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Forces and friction",
    "subtopicId": "al.y2.mech.forces-friction",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "written",
    "tags": [
      "inclined-plane",
      "angled-pull",
      "limiting-equilibrium"
    ],
    "questionText": "A particle of mass $8\\,\\text{kg}$ rests on a rough plane inclined at $25°$ to the horizontal. A force of $40\\,\\text{N}$ acts at $20°$ above the inclined plane, pulling up the slope. The coefficient of friction is $\\mu = 0.35$. Taking $g = 9.8\\,\\text{m s}^{-2}$, find the normal reaction, the frictional force, and state whether the particle is on the point of sliding.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Resolve weight parallel to the plane",
          "workingLatex": "W_{\\parallel} = 33.13\\,\\text{N}",
          "explanation": "Downslope component: $33.13\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Resolve weight perpendicular to the plane",
          "workingLatex": "W_{\\perp} = 71.05\\,\\text{N}",
          "explanation": "Into-plane component: $71.05\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Resolve the pull parallel to the plane",
          "workingLatex": "P_{\\parallel} = 40\\cos 20° = 37.59\\,\\text{N}",
          "explanation": "Up-slope component of pull: $37.59\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Resolve the pull perpendicular to the plane",
          "workingLatex": "P_{\\perp} = 40\\sin 20° = 13.68\\,\\text{N}",
          "explanation": "Component away from the plane reduces the normal reaction.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find the normal reaction",
          "workingLatex": "R = W_{\\perp} - P_{\\perp} = 57.37\\,\\text{N}",
          "explanation": "$R = 57.37\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Calculate limiting friction",
          "workingLatex": "F_{\\max} = \\mu R = 20.08\\,\\text{N}",
          "explanation": "Maximum friction: $20.08\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Apply equilibrium parallel to the plane",
          "workingLatex": "P_{\\parallel} = W_{\\parallel} + F",
          "explanation": "Up-slope pull balances weight component and friction.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Solve for friction",
          "workingLatex": "F = 37.59 - 33.13 = 4.45\\,\\text{N}",
          "explanation": "Friction: $4.45\\,\\text{N}$ (down the plane if positive).",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Compare with limiting value",
          "workingLatex": "|F| = 4.45 \\quad \\text{vs} \\quad F_{\\max} = 20.08",
          "explanation": "Check if friction reaches its limit.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Determine limiting equilibrium",
          "workingLatex": "\\text{Not at the limit}",
          "explanation": "Friction does not equal $\\mu R$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "State friction direction",
          "workingLatex": "\\text{Friction acts down the plane}",
          "explanation": "Friction opposes the tendency to slide.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Check overall motion",
          "workingLatex": "\\text{Particle in equilibrium}",
          "explanation": "Forces balance with $F \\le \\mu R$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Summarise key results",
          "workingLatex": "R = 57.37\\,\\text{N}, \\quad F = 4.45\\,\\text{N}",
          "explanation": "Normal reaction $57.37\\,\\text{N}$, friction $4.45\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Final answer",
          "workingLatex": "R = 57.37\\,\\text{N}, \\quad F = 4.45\\,\\text{N} \\text{ down the plane}",
          "explanation": "$R = 57.37\\,\\text{N}$, $F = 4.45\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "Method recap",
          "workingLatex": "\\text{Resolve all forces parallel and perpendicular to the plane}",
          "explanation": "This systematic approach handles angled pulls on slopes.",
          "diagram": null
        }
      ],
      "finalAnswer": "$R = 57.37\\,\\text{N}$, $F = 4.45\\,\\text{N}$ down the plane."
    }
  },
  {
    "id": "al.y2.mech.forces-friction.q061",
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Forces and friction",
    "subtopicId": "al.y2.mech.forces-friction",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "written",
    "tags": [
      "inclined-plane",
      "angled-pull",
      "limiting-equilibrium"
    ],
    "questionText": "A particle of mass $6\\,\\text{kg}$ rests on a rough plane inclined at $35°$ to the horizontal. A force of $30\\,\\text{N}$ acts at $10°$ above the inclined plane, pulling up the slope. The coefficient of friction is $\\mu = 0.5$. Taking $g = 9.8\\,\\text{m s}^{-2}$, find the normal reaction, the frictional force, and state whether the particle is on the point of sliding.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Resolve weight parallel to the plane",
          "workingLatex": "W_{\\parallel} = 33.73\\,\\text{N}",
          "explanation": "Downslope component: $33.73\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Resolve weight perpendicular to the plane",
          "workingLatex": "W_{\\perp} = 48.17\\,\\text{N}",
          "explanation": "Into-plane component: $48.17\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Resolve the pull parallel to the plane",
          "workingLatex": "P_{\\parallel} = 30\\cos 10° = 29.54\\,\\text{N}",
          "explanation": "Up-slope component of pull: $29.54\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Resolve the pull perpendicular to the plane",
          "workingLatex": "P_{\\perp} = 30\\sin 10° = 5.21\\,\\text{N}",
          "explanation": "Component away from the plane reduces the normal reaction.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find the normal reaction",
          "workingLatex": "R = W_{\\perp} - P_{\\perp} = 42.96\\,\\text{N}",
          "explanation": "$R = 42.96\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Calculate limiting friction",
          "workingLatex": "F_{\\max} = \\mu R = 21.48\\,\\text{N}",
          "explanation": "Maximum friction: $21.48\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Apply equilibrium parallel to the plane",
          "workingLatex": "P_{\\parallel} = W_{\\parallel} + F",
          "explanation": "Up-slope pull balances weight component and friction.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Solve for friction",
          "workingLatex": "F = 29.54 - 33.73 = -4.18\\,\\text{N}",
          "explanation": "Friction: $-4.18\\,\\text{N}$ (down the plane if positive).",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Compare with limiting value",
          "workingLatex": "|F| = 4.18 \\quad \\text{vs} \\quad F_{\\max} = 21.48",
          "explanation": "Check if friction reaches its limit.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Determine limiting equilibrium",
          "workingLatex": "\\text{Not at the limit}",
          "explanation": "Friction does not equal $\\mu R$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "State friction direction",
          "workingLatex": "\\text{Friction acts up the plane}",
          "explanation": "Friction opposes the tendency to slide.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Check overall motion",
          "workingLatex": "\\text{Particle in equilibrium}",
          "explanation": "Forces balance with $F \\le \\mu R$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Summarise key results",
          "workingLatex": "R = 42.96\\,\\text{N}, \\quad F = 4.18\\,\\text{N}",
          "explanation": "Normal reaction $42.96\\,\\text{N}$, friction $4.18\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Final answer",
          "workingLatex": "R = 42.96\\,\\text{N}, \\quad F = 4.18\\,\\text{N} \\text{ up the plane}",
          "explanation": "$R = 42.96\\,\\text{N}$, $F = 4.18\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "Method recap",
          "workingLatex": "\\text{Resolve all forces parallel and perpendicular to the plane}",
          "explanation": "This systematic approach handles angled pulls on slopes.",
          "diagram": null
        }
      ],
      "finalAnswer": "$R = 42.96\\,\\text{N}$, $F = 4.18\\,\\text{N}$ up the plane."
    }
  },
  {
    "id": "al.y2.mech.forces-friction.q062",
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Forces and friction",
    "subtopicId": "al.y2.mech.forces-friction",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "written",
    "tags": [
      "inclined-plane",
      "angled-pull",
      "limiting-equilibrium"
    ],
    "questionText": "A particle of mass $4\\,\\text{kg}$ rests on a rough plane inclined at $20°$ to the horizontal. A force of $20\\,\\text{N}$ acts at $25°$ above the inclined plane, pulling up the slope. The coefficient of friction is $\\mu = 0.45$. Taking $g = 9.8\\,\\text{m s}^{-2}$, find the normal reaction, the frictional force, and state whether the particle is on the point of sliding.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Resolve weight parallel to the plane",
          "workingLatex": "W_{\\parallel} = 13.41\\,\\text{N}",
          "explanation": "Downslope component: $13.41\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Resolve weight perpendicular to the plane",
          "workingLatex": "W_{\\perp} = 36.84\\,\\text{N}",
          "explanation": "Into-plane component: $36.84\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Resolve the pull parallel to the plane",
          "workingLatex": "P_{\\parallel} = 20\\cos 25° = 18.13\\,\\text{N}",
          "explanation": "Up-slope component of pull: $18.13\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Resolve the pull perpendicular to the plane",
          "workingLatex": "P_{\\perp} = 20\\sin 25° = 8.45\\,\\text{N}",
          "explanation": "Component away from the plane reduces the normal reaction.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find the normal reaction",
          "workingLatex": "R = W_{\\perp} - P_{\\perp} = 28.38\\,\\text{N}",
          "explanation": "$R = 28.38\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Calculate limiting friction",
          "workingLatex": "F_{\\max} = \\mu R = 12.77\\,\\text{N}",
          "explanation": "Maximum friction: $12.77\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Apply equilibrium parallel to the plane",
          "workingLatex": "P_{\\parallel} = W_{\\parallel} + F",
          "explanation": "Up-slope pull balances weight component and friction.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Solve for friction",
          "workingLatex": "F = 18.13 - 13.41 = 4.72\\,\\text{N}",
          "explanation": "Friction: $4.72\\,\\text{N}$ (down the plane if positive).",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Compare with limiting value",
          "workingLatex": "|F| = 4.72 \\quad \\text{vs} \\quad F_{\\max} = 12.77",
          "explanation": "Check if friction reaches its limit.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Determine limiting equilibrium",
          "workingLatex": "\\text{Not at the limit}",
          "explanation": "Friction does not equal $\\mu R$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "State friction direction",
          "workingLatex": "\\text{Friction acts down the plane}",
          "explanation": "Friction opposes the tendency to slide.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Check overall motion",
          "workingLatex": "\\text{Particle in equilibrium}",
          "explanation": "Forces balance with $F \\le \\mu R$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Summarise key results",
          "workingLatex": "R = 28.38\\,\\text{N}, \\quad F = 4.72\\,\\text{N}",
          "explanation": "Normal reaction $28.38\\,\\text{N}$, friction $4.72\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Final answer",
          "workingLatex": "R = 28.38\\,\\text{N}, \\quad F = 4.72\\,\\text{N} \\text{ down the plane}",
          "explanation": "$R = 28.38\\,\\text{N}$, $F = 4.72\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "Method recap",
          "workingLatex": "\\text{Resolve all forces parallel and perpendicular to the plane}",
          "explanation": "This systematic approach handles angled pulls on slopes.",
          "diagram": null
        }
      ],
      "finalAnswer": "$R = 28.38\\,\\text{N}$, $F = 4.72\\,\\text{N}$ down the plane."
    }
  },
  {
    "id": "al.y2.mech.forces-friction.q063",
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Forces and friction",
    "subtopicId": "al.y2.mech.forces-friction",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "numeric",
    "tags": [
      "minimum-mu",
      "inclined-plane",
      "tan-alpha"
    ],
    "questionText": "A particle of mass $6\\,\\text{kg}$ rests in equilibrium on a plane inclined at $35°$ to the horizontal. Find the minimum coefficient of friction needed for the particle to remain at rest.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the worst case",
          "workingLatex": "\\text{Friction acts up the plane at its maximum}",
          "explanation": "Minimum $\\mu$ occurs when friction is at limiting equilibrium, just preventing sliding down.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Resolve weight parallel to the plane",
          "workingLatex": "W_{\\parallel} = mg\\sin 35° = 33.73\\,\\text{N}",
          "explanation": "This is the downslope force friction must balance.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Resolve weight perpendicular to the plane",
          "workingLatex": "R = mg\\cos 35° = 48.17\\,\\text{N}",
          "explanation": "Normal reaction: $48.17\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write limiting equilibrium",
          "workingLatex": "\\mu R = mg\\sin\\alpha",
          "explanation": "At the minimum $\\mu$, friction equals $\\mu R$ and balances the downslope component.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve for $\\mu$",
          "workingLatex": "\\mu = \\tan\\alpha = \\tan 35°",
          "explanation": "Dividing by $R$ gives $\\mu = \\tan\\alpha$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Evaluate",
          "workingLatex": "\\mu = 0.700",
          "explanation": "Minimum $\\mu = 0.700$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Interpret",
          "workingLatex": "\\text{For } \\mu < 0.700, \\text{ the particle slides}",
          "explanation": "If $\\mu$ is smaller, friction cannot hold the particle on the slope.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Verify with friction magnitude",
          "workingLatex": "F = \\mu R = 33.73\\,\\text{N} = mg\\sin\\alpha",
          "explanation": "Limiting friction exactly balances the weight component.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Link to angle of friction",
          "workingLatex": "\\alpha = 35° \\text{ is the critical angle}",
          "explanation": "The angle of the plane equals the angle of friction at the critical value.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the minimum coefficient",
          "workingLatex": "\\mu_{\\min} = 0.700",
          "explanation": "Minimum coefficient of friction: $0.700$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Note for exam technique",
          "workingLatex": "\\mu_{\\min} = \\tan\\alpha \\text{ for a particle on a slope}",
          "explanation": "This is a standard result worth remembering.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Check with an example",
          "workingLatex": "\\text{At } \\mu = 0.700, \\text{ friction is exactly sufficient}",
          "explanation": "Any smaller value would be insufficient.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Final answer",
          "workingLatex": "\\mu_{\\min} = 0.700",
          "explanation": "Minimum $\\mu = 0.700$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\mu_{\\min} = 0.700$"
    }
  },
  {
    "id": "al.y2.mech.forces-friction.q064",
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Forces and friction",
    "subtopicId": "al.y2.mech.forces-friction",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "numeric",
    "tags": [
      "minimum-mu",
      "inclined-plane",
      "tan-alpha"
    ],
    "questionText": "A particle of mass $8\\,\\text{kg}$ rests in equilibrium on a plane inclined at $40°$ to the horizontal. Find the minimum coefficient of friction needed for the particle to remain at rest.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the worst case",
          "workingLatex": "\\text{Friction acts up the plane at its maximum}",
          "explanation": "Minimum $\\mu$ occurs when friction is at limiting equilibrium, just preventing sliding down.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Resolve weight parallel to the plane",
          "workingLatex": "W_{\\parallel} = mg\\sin 40° = 50.39\\,\\text{N}",
          "explanation": "This is the downslope force friction must balance.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Resolve weight perpendicular to the plane",
          "workingLatex": "R = mg\\cos 40° = 60.06\\,\\text{N}",
          "explanation": "Normal reaction: $60.06\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write limiting equilibrium",
          "workingLatex": "\\mu R = mg\\sin\\alpha",
          "explanation": "At the minimum $\\mu$, friction equals $\\mu R$ and balances the downslope component.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve for $\\mu$",
          "workingLatex": "\\mu = \\tan\\alpha = \\tan 40°",
          "explanation": "Dividing by $R$ gives $\\mu = \\tan\\alpha$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Evaluate",
          "workingLatex": "\\mu = 0.839",
          "explanation": "Minimum $\\mu = 0.839$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Interpret",
          "workingLatex": "\\text{For } \\mu < 0.839, \\text{ the particle slides}",
          "explanation": "If $\\mu$ is smaller, friction cannot hold the particle on the slope.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Verify with friction magnitude",
          "workingLatex": "F = \\mu R = 50.39\\,\\text{N} = mg\\sin\\alpha",
          "explanation": "Limiting friction exactly balances the weight component.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Link to angle of friction",
          "workingLatex": "\\alpha = 40° \\text{ is the critical angle}",
          "explanation": "The angle of the plane equals the angle of friction at the critical value.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the minimum coefficient",
          "workingLatex": "\\mu_{\\min} = 0.839",
          "explanation": "Minimum coefficient of friction: $0.839$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Note for exam technique",
          "workingLatex": "\\mu_{\\min} = \\tan\\alpha \\text{ for a particle on a slope}",
          "explanation": "This is a standard result worth remembering.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Check with an example",
          "workingLatex": "\\text{At } \\mu = 0.839, \\text{ friction is exactly sufficient}",
          "explanation": "Any smaller value would be insufficient.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Final answer",
          "workingLatex": "\\mu_{\\min} = 0.839",
          "explanation": "Minimum $\\mu = 0.839$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\mu_{\\min} = 0.839$"
    }
  },
  {
    "id": "al.y2.mech.forces-friction.q065",
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Forces and friction",
    "subtopicId": "al.y2.mech.forces-friction",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "numeric",
    "tags": [
      "minimum-mu",
      "inclined-plane",
      "tan-alpha"
    ],
    "questionText": "A particle of mass $5\\,\\text{kg}$ rests in equilibrium on a plane inclined at $28°$ to the horizontal. Find the minimum coefficient of friction needed for the particle to remain at rest.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the worst case",
          "workingLatex": "\\text{Friction acts up the plane at its maximum}",
          "explanation": "Minimum $\\mu$ occurs when friction is at limiting equilibrium, just preventing sliding down.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Resolve weight parallel to the plane",
          "workingLatex": "W_{\\parallel} = mg\\sin 28° = 23.00\\,\\text{N}",
          "explanation": "This is the downslope force friction must balance.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Resolve weight perpendicular to the plane",
          "workingLatex": "R = mg\\cos 28° = 43.26\\,\\text{N}",
          "explanation": "Normal reaction: $43.26\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write limiting equilibrium",
          "workingLatex": "\\mu R = mg\\sin\\alpha",
          "explanation": "At the minimum $\\mu$, friction equals $\\mu R$ and balances the downslope component.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve for $\\mu$",
          "workingLatex": "\\mu = \\tan\\alpha = \\tan 28°",
          "explanation": "Dividing by $R$ gives $\\mu = \\tan\\alpha$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Evaluate",
          "workingLatex": "\\mu = 0.532",
          "explanation": "Minimum $\\mu = 0.532$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Interpret",
          "workingLatex": "\\text{For } \\mu < 0.532, \\text{ the particle slides}",
          "explanation": "If $\\mu$ is smaller, friction cannot hold the particle on the slope.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Verify with friction magnitude",
          "workingLatex": "F = \\mu R = 23.00\\,\\text{N} = mg\\sin\\alpha",
          "explanation": "Limiting friction exactly balances the weight component.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Link to angle of friction",
          "workingLatex": "\\alpha = 28° \\text{ is the critical angle}",
          "explanation": "The angle of the plane equals the angle of friction at the critical value.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the minimum coefficient",
          "workingLatex": "\\mu_{\\min} = 0.532",
          "explanation": "Minimum coefficient of friction: $0.532$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Note for exam technique",
          "workingLatex": "\\mu_{\\min} = \\tan\\alpha \\text{ for a particle on a slope}",
          "explanation": "This is a standard result worth remembering.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Check with an example",
          "workingLatex": "\\text{At } \\mu = 0.532, \\text{ friction is exactly sufficient}",
          "explanation": "Any smaller value would be insufficient.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Final answer",
          "workingLatex": "\\mu_{\\min} = 0.532",
          "explanation": "Minimum $\\mu = 0.532$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\mu_{\\min} = 0.532$"
    }
  },
  {
    "id": "al.y2.mech.forces-friction.q066",
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Forces and friction",
    "subtopicId": "al.y2.mech.forces-friction",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "numeric",
    "tags": [
      "minimum-mu",
      "inclined-plane",
      "tan-alpha"
    ],
    "questionText": "A particle of mass $10\\,\\text{kg}$ rests in equilibrium on a plane inclined at $32°$ to the horizontal. Find the minimum coefficient of friction needed for the particle to remain at rest.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the worst case",
          "workingLatex": "\\text{Friction acts up the plane at its maximum}",
          "explanation": "Minimum $\\mu$ occurs when friction is at limiting equilibrium, just preventing sliding down.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Resolve weight parallel to the plane",
          "workingLatex": "W_{\\parallel} = mg\\sin 32° = 51.93\\,\\text{N}",
          "explanation": "This is the downslope force friction must balance.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Resolve weight perpendicular to the plane",
          "workingLatex": "R = mg\\cos 32° = 83.11\\,\\text{N}",
          "explanation": "Normal reaction: $83.11\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write limiting equilibrium",
          "workingLatex": "\\mu R = mg\\sin\\alpha",
          "explanation": "At the minimum $\\mu$, friction equals $\\mu R$ and balances the downslope component.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve for $\\mu$",
          "workingLatex": "\\mu = \\tan\\alpha = \\tan 32°",
          "explanation": "Dividing by $R$ gives $\\mu = \\tan\\alpha$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Evaluate",
          "workingLatex": "\\mu = 0.625",
          "explanation": "Minimum $\\mu = 0.625$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Interpret",
          "workingLatex": "\\text{For } \\mu < 0.625, \\text{ the particle slides}",
          "explanation": "If $\\mu$ is smaller, friction cannot hold the particle on the slope.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Verify with friction magnitude",
          "workingLatex": "F = \\mu R = 51.93\\,\\text{N} = mg\\sin\\alpha",
          "explanation": "Limiting friction exactly balances the weight component.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Link to angle of friction",
          "workingLatex": "\\alpha = 32° \\text{ is the critical angle}",
          "explanation": "The angle of the plane equals the angle of friction at the critical value.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the minimum coefficient",
          "workingLatex": "\\mu_{\\min} = 0.625",
          "explanation": "Minimum coefficient of friction: $0.625$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Note for exam technique",
          "workingLatex": "\\mu_{\\min} = \\tan\\alpha \\text{ for a particle on a slope}",
          "explanation": "This is a standard result worth remembering.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Check with an example",
          "workingLatex": "\\text{At } \\mu = 0.625, \\text{ friction is exactly sufficient}",
          "explanation": "Any smaller value would be insufficient.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Final answer",
          "workingLatex": "\\mu_{\\min} = 0.625",
          "explanation": "Minimum $\\mu = 0.625$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\mu_{\\min} = 0.625$"
    }
  },
  {
    "id": "al.y2.mech.forces-friction.q067",
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Forces and friction",
    "subtopicId": "al.y2.mech.forces-friction",
    "difficulty": "Hard",
    "marks": 9,
    "answerType": "written",
    "tags": [
      "multi-part",
      "horizontal-force",
      "inclined-plane"
    ],
    "questionText": "A particle of mass $6\\,\\text{kg}$ is on a rough plane inclined at $30°$ to the horizontal. A horizontal force of $45\\,\\text{N}$ pushes the particle up the plane. The coefficient of friction is $\\mu = 0.4$. Taking $g = 9.8\\,\\text{m s}^{-2}$:\n\n(a) Find the normal reaction.\n(b) Find the frictional force.\n(c) Determine whether the particle moves up the plane, remains in equilibrium, or slides down.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Part (a): resolve forces perpendicular to the plane",
          "workingLatex": "R = W\\cos\\alpha + P\\sin\\alpha",
          "explanation": "Weight component and horizontal push both press the particle into the plane.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Calculate weight perpendicular component",
          "workingLatex": "W\\cos\\alpha = 50.92\\,\\text{N}",
          "explanation": "$W\\cos 30° = 50.92\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Calculate push perpendicular component",
          "workingLatex": "P\\sin\\alpha = 22.50\\,\\text{N}",
          "explanation": "Horizontal push contributes $22.50\\,\\text{N}$ into the plane.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find normal reaction",
          "workingLatex": "R = 50.92 + 22.50 = 73.42\\,\\text{N}",
          "explanation": "(a) $R = 73.42\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Part (b): resolve forces parallel to the plane",
          "workingLatex": "P\\cos\\alpha = W\\sin\\alpha + F",
          "explanation": "Up-slope component of push balances weight down the slope and friction.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Calculate parallel components",
          "workingLatex": "P\\cos\\alpha = 38.97\\,\\text{N}, \\quad W\\sin\\alpha = 29.40\\,\\text{N}",
          "explanation": "Parallel push: $38.97\\,\\text{N}$; downslope weight: $29.40\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Solve for friction",
          "workingLatex": "F = 38.97 - 29.40 = 9.57\\,\\text{N}",
          "explanation": "(b) Friction: $9.57\\,\\text{N}$ down the plane.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Calculate limiting friction",
          "workingLatex": "F_{\\max} = \\mu R = 0.4 \\times 73.42 = 29.37\\,\\text{N}",
          "explanation": "Maximum friction: $29.37\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Part (c): compare friction with limit",
          "workingLatex": "F = 9.57 \\le F_{\\max} = 29.37",
          "explanation": "Check whether required friction exceeds the limit.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Determine motion",
          "workingLatex": "\\text{Particle remains in equilibrium}",
          "explanation": "(c) The particle is in equilibrium.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Verify friction direction",
          "workingLatex": "\\text{Friction acts down the plane, opposing upward motion}",
          "explanation": "Since the push tends to move the particle up, friction acts down the slope.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Cross-check with $\\mu_{\\min}$ for resting on slope",
          "workingLatex": "\\tan\\alpha = 0.577",
          "explanation": "Without the push, the particle would slide on the slope.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Summarise part (a)",
          "workingLatex": "R = 73.42\\,\\text{N}",
          "explanation": "Normal reaction: $73.42\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Summarise part (b)",
          "workingLatex": "F = 9.57\\,\\text{N}",
          "explanation": "Frictional force: $9.57\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "Summarise part (c)",
          "workingLatex": "\\text{Equilibrium  achieved}",
          "explanation": "The particle is in equilibrium.",
          "diagram": null
        },
        {
          "stepNumber": 16,
          "description": "Final combined answer",
          "workingLatex": "R = 73.42\\,\\text{N}, \\quad F = 9.57\\,\\text{N}, \\quad \\text{equilibrium}",
          "explanation": "(a) $R = 73.42\\,\\text{N}$; (b) $F = 9.57\\,\\text{N}$; (c) equilibrium.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $R = 73.42\\,\\text{N}$; (b) $F = 9.57\\,\\text{N}$ down the plane; (c) equilibrium."
    }
  },
  {
    "id": "al.y2.mech.forces-friction.q068",
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Forces and friction",
    "subtopicId": "al.y2.mech.forces-friction",
    "difficulty": "Hard",
    "marks": 9,
    "answerType": "written",
    "tags": [
      "multi-part",
      "horizontal-force",
      "inclined-plane"
    ],
    "questionText": "A particle of mass $8\\,\\text{kg}$ is on a rough plane inclined at $25°$ to the horizontal. A horizontal force of $55\\,\\text{N}$ pushes the particle up the plane. The coefficient of friction is $\\mu = 0.35$. Taking $g = 9.8\\,\\text{m s}^{-2}$:\n\n(a) Find the normal reaction.\n(b) Find the frictional force.\n(c) Determine whether the particle moves up the plane, remains in equilibrium, or slides down.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Part (a): resolve forces perpendicular to the plane",
          "workingLatex": "R = W\\cos\\alpha + P\\sin\\alpha",
          "explanation": "Weight component and horizontal push both press the particle into the plane.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Calculate weight perpendicular component",
          "workingLatex": "W\\cos\\alpha = 71.05\\,\\text{N}",
          "explanation": "$W\\cos 25° = 71.05\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Calculate push perpendicular component",
          "workingLatex": "P\\sin\\alpha = 23.24\\,\\text{N}",
          "explanation": "Horizontal push contributes $23.24\\,\\text{N}$ into the plane.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find normal reaction",
          "workingLatex": "R = 71.05 + 23.24 = 94.30\\,\\text{N}",
          "explanation": "(a) $R = 94.30\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Part (b): resolve forces parallel to the plane",
          "workingLatex": "P\\cos\\alpha = W\\sin\\alpha + F",
          "explanation": "Up-slope component of push balances weight down the slope and friction.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Calculate parallel components",
          "workingLatex": "P\\cos\\alpha = 49.85\\,\\text{N}, \\quad W\\sin\\alpha = 33.13\\,\\text{N}",
          "explanation": "Parallel push: $49.85\\,\\text{N}$; downslope weight: $33.13\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Solve for friction",
          "workingLatex": "F = 49.85 - 33.13 = 16.71\\,\\text{N}",
          "explanation": "(b) Friction: $16.71\\,\\text{N}$ down the plane.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Calculate limiting friction",
          "workingLatex": "F_{\\max} = \\mu R = 0.35 \\times 94.30 = 33.00\\,\\text{N}",
          "explanation": "Maximum friction: $33.00\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Part (c): compare friction with limit",
          "workingLatex": "F = 16.71 \\le F_{\\max} = 33.00",
          "explanation": "Check whether required friction exceeds the limit.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Determine motion",
          "workingLatex": "\\text{Particle remains in equilibrium}",
          "explanation": "(c) The particle is in equilibrium.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Verify friction direction",
          "workingLatex": "\\text{Friction acts down the plane, opposing upward motion}",
          "explanation": "Since the push tends to move the particle up, friction acts down the slope.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Cross-check with $\\mu_{\\min}$ for resting on slope",
          "workingLatex": "\\tan\\alpha = 0.466",
          "explanation": "Without the push, the particle would slide on the slope.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Summarise part (a)",
          "workingLatex": "R = 94.30\\,\\text{N}",
          "explanation": "Normal reaction: $94.30\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Summarise part (b)",
          "workingLatex": "F = 16.71\\,\\text{N}",
          "explanation": "Frictional force: $16.71\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "Summarise part (c)",
          "workingLatex": "\\text{Equilibrium  achieved}",
          "explanation": "The particle is in equilibrium.",
          "diagram": null
        },
        {
          "stepNumber": 16,
          "description": "Final combined answer",
          "workingLatex": "R = 94.30\\,\\text{N}, \\quad F = 16.71\\,\\text{N}, \\quad \\text{equilibrium}",
          "explanation": "(a) $R = 94.30\\,\\text{N}$; (b) $F = 16.71\\,\\text{N}$; (c) equilibrium.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $R = 94.30\\,\\text{N}$; (b) $F = 16.71\\,\\text{N}$ down the plane; (c) equilibrium."
    }
  },
  {
    "id": "al.y2.mech.forces-friction.q069",
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Forces and friction",
    "subtopicId": "al.y2.mech.forces-friction",
    "difficulty": "Hard",
    "marks": 9,
    "answerType": "written",
    "tags": [
      "multi-part",
      "horizontal-force",
      "inclined-plane"
    ],
    "questionText": "A particle of mass $5\\,\\text{kg}$ is on a rough plane inclined at $35°$ to the horizontal. A horizontal force of $35\\,\\text{N}$ pushes the particle up the plane. The coefficient of friction is $\\mu = 0.5$. Taking $g = 9.8\\,\\text{m s}^{-2}$:\n\n(a) Find the normal reaction.\n(b) Find the frictional force.\n(c) Determine whether the particle moves up the plane, remains in equilibrium, or slides down.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Part (a): resolve forces perpendicular to the plane",
          "workingLatex": "R = W\\cos\\alpha + P\\sin\\alpha",
          "explanation": "Weight component and horizontal push both press the particle into the plane.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Calculate weight perpendicular component",
          "workingLatex": "W\\cos\\alpha = 40.14\\,\\text{N}",
          "explanation": "$W\\cos 35° = 40.14\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Calculate push perpendicular component",
          "workingLatex": "P\\sin\\alpha = 20.08\\,\\text{N}",
          "explanation": "Horizontal push contributes $20.08\\,\\text{N}$ into the plane.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find normal reaction",
          "workingLatex": "R = 40.14 + 20.08 = 60.21\\,\\text{N}",
          "explanation": "(a) $R = 60.21\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Part (b): resolve forces parallel to the plane",
          "workingLatex": "P\\cos\\alpha = W\\sin\\alpha + F",
          "explanation": "Up-slope component of push balances weight down the slope and friction.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Calculate parallel components",
          "workingLatex": "P\\cos\\alpha = 28.67\\,\\text{N}, \\quad W\\sin\\alpha = 28.11\\,\\text{N}",
          "explanation": "Parallel push: $28.67\\,\\text{N}$; downslope weight: $28.11\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Solve for friction",
          "workingLatex": "F = 28.67 - 28.11 = 0.57\\,\\text{N}",
          "explanation": "(b) Friction: $0.57\\,\\text{N}$ down the plane.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Calculate limiting friction",
          "workingLatex": "F_{\\max} = \\mu R = 0.5 \\times 60.21 = 30.11\\,\\text{N}",
          "explanation": "Maximum friction: $30.11\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Part (c): compare friction with limit",
          "workingLatex": "F = 0.57 \\le F_{\\max} = 30.11",
          "explanation": "Check whether required friction exceeds the limit.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Determine motion",
          "workingLatex": "\\text{Particle remains in equilibrium}",
          "explanation": "(c) The particle is in equilibrium.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Verify friction direction",
          "workingLatex": "\\text{Friction acts down the plane, opposing upward motion}",
          "explanation": "Since the push tends to move the particle up, friction acts down the slope.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Cross-check with $\\mu_{\\min}$ for resting on slope",
          "workingLatex": "\\tan\\alpha = 0.700",
          "explanation": "Without the push, the particle would slide on the slope.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Summarise part (a)",
          "workingLatex": "R = 60.21\\,\\text{N}",
          "explanation": "Normal reaction: $60.21\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Summarise part (b)",
          "workingLatex": "F = 0.57\\,\\text{N}",
          "explanation": "Frictional force: $0.57\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "Summarise part (c)",
          "workingLatex": "\\text{Equilibrium  achieved}",
          "explanation": "The particle is in equilibrium.",
          "diagram": null
        },
        {
          "stepNumber": 16,
          "description": "Final combined answer",
          "workingLatex": "R = 60.21\\,\\text{N}, \\quad F = 0.57\\,\\text{N}, \\quad \\text{equilibrium}",
          "explanation": "(a) $R = 60.21\\,\\text{N}$; (b) $F = 0.57\\,\\text{N}$; (c) equilibrium.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $R = 60.21\\,\\text{N}$; (b) $F = 0.57\\,\\text{N}$ down the plane; (c) equilibrium."
    }
  },
  {
    "id": "al.y2.mech.forces-friction.q070",
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Forces and friction",
    "subtopicId": "al.y2.mech.forces-friction",
    "difficulty": "Hard",
    "marks": 9,
    "answerType": "written",
    "tags": [
      "multi-part",
      "horizontal-force",
      "inclined-plane"
    ],
    "questionText": "A particle of mass $10\\,\\text{kg}$ is on a rough plane inclined at $20°$ to the horizontal. A horizontal force of $70\\,\\text{N}$ pushes the particle up the plane. The coefficient of friction is $\\mu = 0.45$. Taking $g = 9.8\\,\\text{m s}^{-2}$:\n\n(a) Find the normal reaction.\n(b) Find the frictional force.\n(c) Determine whether the particle moves up the plane, remains in equilibrium, or slides down.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Part (a): resolve forces perpendicular to the plane",
          "workingLatex": "R = W\\cos\\alpha + P\\sin\\alpha",
          "explanation": "Weight component and horizontal push both press the particle into the plane.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Calculate weight perpendicular component",
          "workingLatex": "W\\cos\\alpha = 92.09\\,\\text{N}",
          "explanation": "$W\\cos 20° = 92.09\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Calculate push perpendicular component",
          "workingLatex": "P\\sin\\alpha = 23.94\\,\\text{N}",
          "explanation": "Horizontal push contributes $23.94\\,\\text{N}$ into the plane.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find normal reaction",
          "workingLatex": "R = 92.09 + 23.94 = 116.03\\,\\text{N}",
          "explanation": "(a) $R = 116.03\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Part (b): resolve forces parallel to the plane",
          "workingLatex": "P\\cos\\alpha = W\\sin\\alpha + F",
          "explanation": "Up-slope component of push balances weight down the slope and friction.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Calculate parallel components",
          "workingLatex": "P\\cos\\alpha = 65.78\\,\\text{N}, \\quad W\\sin\\alpha = 33.52\\,\\text{N}",
          "explanation": "Parallel push: $65.78\\,\\text{N}$; downslope weight: $33.52\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Solve for friction",
          "workingLatex": "F = 65.78 - 33.52 = 32.26\\,\\text{N}",
          "explanation": "(b) Friction: $32.26\\,\\text{N}$ down the plane.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Calculate limiting friction",
          "workingLatex": "F_{\\max} = \\mu R = 0.45 \\times 116.03 = 52.21\\,\\text{N}",
          "explanation": "Maximum friction: $52.21\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Part (c): compare friction with limit",
          "workingLatex": "F = 32.26 \\le F_{\\max} = 52.21",
          "explanation": "Check whether required friction exceeds the limit.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Determine motion",
          "workingLatex": "\\text{Particle remains in equilibrium}",
          "explanation": "(c) The particle is in equilibrium.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Verify friction direction",
          "workingLatex": "\\text{Friction acts down the plane, opposing upward motion}",
          "explanation": "Since the push tends to move the particle up, friction acts down the slope.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Cross-check with $\\mu_{\\min}$ for resting on slope",
          "workingLatex": "\\tan\\alpha = 0.364",
          "explanation": "Without the push, the particle would rest on the slope.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Summarise part (a)",
          "workingLatex": "R = 116.03\\,\\text{N}",
          "explanation": "Normal reaction: $116.03\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Summarise part (b)",
          "workingLatex": "F = 32.26\\,\\text{N}",
          "explanation": "Frictional force: $32.26\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "Summarise part (c)",
          "workingLatex": "\\text{Equilibrium  achieved}",
          "explanation": "The particle is in equilibrium.",
          "diagram": null
        },
        {
          "stepNumber": 16,
          "description": "Final combined answer",
          "workingLatex": "R = 116.03\\,\\text{N}, \\quad F = 32.26\\,\\text{N}, \\quad \\text{equilibrium}",
          "explanation": "(a) $R = 116.03\\,\\text{N}$; (b) $F = 32.26\\,\\text{N}$; (c) equilibrium.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $R = 116.03\\,\\text{N}$; (b) $F = 32.26\\,\\text{N}$ down the plane; (c) equilibrium."
    }
  }
];
