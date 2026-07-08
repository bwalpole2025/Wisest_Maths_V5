import { Question } from "@/lib/types";

export const questions: Question[] = [
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Mechanics (Further Mechanics 1)",
    "subtopic": "Elastic collisions in one dimension",
    "subtopicId": "fm.y1.mech.collisions-1d",
    "questionDiagram": null,
    "id": "fm.y1.mech.collisions-1d.q001",
    "tags": [
      "restitution",
      "definition"
    ],
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "numeric",
    "questionText": "Two smooth spheres collide directly. The speed of approach is $8\\ \\text{m s}^{-1}$ and the speed of separation is $6\\ \\text{m s}^{-1}$. Find the coefficient of restitution.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Newton's law of restitution",
          "workingLatex": "e = \\dfrac{\\text{speed of separation}}{\\text{speed of approach}}",
          "explanation": "The coefficient of restitution compares how fast the bodies move apart to how fast they came together.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute speeds",
          "workingLatex": "e = \\dfrac{6}{8}",
          "explanation": "Use the given approach and separation speeds along the line of centres.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Evaluate",
          "workingLatex": "e = 0.75",
          "explanation": "Divide to find the coefficient.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Interpret",
          "workingLatex": "\\text{Partially elastic}",
          "explanation": "Values near 1 mean little kinetic energy is lost; $e = 0$ means the bodies coalesce.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Range",
          "workingLatex": "0 \\le e \\le 1",
          "explanation": "Restitution is always between zero and one for real collisions.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "e = 0.75",
          "explanation": "Coefficient of restitution.",
          "diagram": null
        }
      ],
      "finalAnswer": "$e = 0.75$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Mechanics (Further Mechanics 1)",
    "subtopic": "Elastic collisions in one dimension",
    "subtopicId": "fm.y1.mech.collisions-1d",
    "questionDiagram": null,
    "id": "fm.y1.mech.collisions-1d.q002",
    "tags": [
      "restitution",
      "definition"
    ],
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "numeric",
    "questionText": "In a collision the approach speed is $10\\ \\text{m s}^{-1}$ and the separation speed is also $10\\ \\text{m s}^{-1}$. Find $e$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Newton's law of restitution",
          "workingLatex": "e = \\dfrac{\\text{speed of separation}}{\\text{speed of approach}}",
          "explanation": "The coefficient of restitution compares how fast the bodies move apart to how fast they came together.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute speeds",
          "workingLatex": "e = \\dfrac{10}{10}",
          "explanation": "Use the given approach and separation speeds along the line of centres.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Evaluate",
          "workingLatex": "e = 1",
          "explanation": "Divide to find the coefficient.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Interpret",
          "workingLatex": "\\text{Perfectly elastic}",
          "explanation": "Values near 1 mean little kinetic energy is lost; $e = 0$ means the bodies coalesce.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Range",
          "workingLatex": "0 \\le e \\le 1",
          "explanation": "Restitution is always between zero and one for real collisions.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "e = 1",
          "explanation": "Coefficient of restitution.",
          "diagram": null
        }
      ],
      "finalAnswer": "$e = 1$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Mechanics (Further Mechanics 1)",
    "subtopic": "Elastic collisions in one dimension",
    "subtopicId": "fm.y1.mech.collisions-1d",
    "questionDiagram": null,
    "id": "fm.y1.mech.collisions-1d.q003",
    "tags": [
      "restitution",
      "definition"
    ],
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "numeric",
    "questionText": "Two particles coalesce on impact. The approach speed is $12\\ \\text{m s}^{-1}$ and they move together after collision. Find $e$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Newton's law of restitution",
          "workingLatex": "e = \\dfrac{\\text{speed of separation}}{\\text{speed of approach}}",
          "explanation": "The coefficient of restitution compares how fast the bodies move apart to how fast they came together.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute speeds",
          "workingLatex": "e = \\dfrac{0}{12}",
          "explanation": "Use the given approach and separation speeds along the line of centres.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Evaluate",
          "workingLatex": "e = 0",
          "explanation": "Divide to find the coefficient.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Interpret",
          "workingLatex": "\\text{Perfectly inelastic}",
          "explanation": "Values near 1 mean little kinetic energy is lost; $e = 0$ means the bodies coalesce.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Range",
          "workingLatex": "0 \\le e \\le 1",
          "explanation": "Restitution is always between zero and one for real collisions.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "e = 0",
          "explanation": "Coefficient of restitution.",
          "diagram": null
        }
      ],
      "finalAnswer": "$e = 0$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Mechanics (Further Mechanics 1)",
    "subtopic": "Elastic collisions in one dimension",
    "subtopicId": "fm.y1.mech.collisions-1d",
    "questionDiagram": null,
    "id": "fm.y1.mech.collisions-1d.q004",
    "tags": [
      "restitution",
      "definition"
    ],
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "numeric",
    "questionText": "The approach speed in a direct impact is $5\\ \\text{m s}^{-1}$ and the separation speed is $4\\ \\text{m s}^{-1}$. Calculate the coefficient of restitution.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Newton's law of restitution",
          "workingLatex": "e = \\dfrac{\\text{speed of separation}}{\\text{speed of approach}}",
          "explanation": "The coefficient of restitution compares how fast the bodies move apart to how fast they came together.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute speeds",
          "workingLatex": "e = \\dfrac{4}{5}",
          "explanation": "Use the given approach and separation speeds along the line of centres.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Evaluate",
          "workingLatex": "e = 0.8",
          "explanation": "Divide to find the coefficient.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Interpret",
          "workingLatex": "\\text{Partially elastic}",
          "explanation": "Values near 1 mean little kinetic energy is lost; $e = 0$ means the bodies coalesce.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Range",
          "workingLatex": "0 \\le e \\le 1",
          "explanation": "Restitution is always between zero and one for real collisions.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "e = 0.8",
          "explanation": "Coefficient of restitution.",
          "diagram": null
        }
      ],
      "finalAnswer": "$e = 0.8$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Mechanics (Further Mechanics 1)",
    "subtopic": "Elastic collisions in one dimension",
    "subtopicId": "fm.y1.mech.collisions-1d",
    "questionDiagram": null,
    "id": "fm.y1.mech.collisions-1d.q005",
    "tags": [
      "restitution",
      "definition"
    ],
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "numeric",
    "questionText": "Find $e$ when the approach speed is $6\\ \\text{m s}^{-1}$ and the separation speed is $3\\ \\text{m s}^{-1}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Newton's law of restitution",
          "workingLatex": "e = \\dfrac{\\text{speed of separation}}{\\text{speed of approach}}",
          "explanation": "The coefficient of restitution compares how fast the bodies move apart to how fast they came together.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute speeds",
          "workingLatex": "e = \\dfrac{3}{6}",
          "explanation": "Use the given approach and separation speeds along the line of centres.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Evaluate",
          "workingLatex": "e = 0.5",
          "explanation": "Divide to find the coefficient.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Interpret",
          "workingLatex": "\\text{Partially elastic}",
          "explanation": "Values near 1 mean little kinetic energy is lost; $e = 0$ means the bodies coalesce.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Range",
          "workingLatex": "0 \\le e \\le 1",
          "explanation": "Restitution is always between zero and one for real collisions.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "e = 0.5",
          "explanation": "Coefficient of restitution.",
          "diagram": null
        }
      ],
      "finalAnswer": "$e = 0.5$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Mechanics (Further Mechanics 1)",
    "subtopic": "Elastic collisions in one dimension",
    "subtopicId": "fm.y1.mech.collisions-1d",
    "questionDiagram": null,
    "id": "fm.y1.mech.collisions-1d.q006",
    "tags": [
      "wall",
      "rebound"
    ],
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "numeric",
    "questionText": "A smooth sphere of mass $2\\ \\text{kg}$ moving at $5\\ \\text{m s}^{-1}$ hits a smooth fixed vertical wall. Given $e = 0.6$, find its speed after rebound.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Impact with a smooth fixed wall",
          "workingLatex": "e = \\dfrac{\\text{speed of separation}}{\\text{speed of approach}}",
          "explanation": "The wall is modelled as a body of infinite mass that does not move.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Approach speed",
          "workingLatex": "\\text{Approach speed} = 5\\ \\text{m s}^{-1}",
          "explanation": "Speed just before impact, measured along the normal to the wall.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Separation speed",
          "workingLatex": "\\text{Separation speed} = e \\times 5",
          "explanation": "The rebound speed equals $e$ times the approach speed.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Rebound velocity",
          "workingLatex": "v = -3\\ \\text{m s}^{-1}",
          "explanation": "Take the sign opposite to the approach direction.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Momentum note",
          "workingLatex": "\\text{Wall exerts large impulse}",
          "explanation": "The wall absorbs momentum without moving appreciably.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "v = -3\\ \\text{m s}^{-1}",
          "explanation": "Rebound speed along the line of motion.",
          "diagram": null
        }
      ],
      "finalAnswer": "$v = -3\\ \\text{m s}^{-1}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Mechanics (Further Mechanics 1)",
    "subtopic": "Elastic collisions in one dimension",
    "subtopicId": "fm.y1.mech.collisions-1d",
    "questionDiagram": null,
    "id": "fm.y1.mech.collisions-1d.q007",
    "tags": [
      "wall",
      "rebound"
    ],
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "numeric",
    "questionText": "A particle of mass $3\\ \\text{kg}$ strikes a smooth wall at $8\\ \\text{m s}^{-1}$. The coefficient of restitution is $0.5$. Find its rebound speed.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Impact with a smooth fixed wall",
          "workingLatex": "e = \\dfrac{\\text{speed of separation}}{\\text{speed of approach}}",
          "explanation": "The wall is modelled as a body of infinite mass that does not move.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Approach speed",
          "workingLatex": "\\text{Approach speed} = 8\\ \\text{m s}^{-1}",
          "explanation": "Speed just before impact, measured along the normal to the wall.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Separation speed",
          "workingLatex": "\\text{Separation speed} = e \\times 8",
          "explanation": "The rebound speed equals $e$ times the approach speed.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Rebound velocity",
          "workingLatex": "v = -4\\ \\text{m s}^{-1}",
          "explanation": "Take the sign opposite to the approach direction.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Momentum note",
          "workingLatex": "\\text{Wall exerts large impulse}",
          "explanation": "The wall absorbs momentum without moving appreciably.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "v = -4\\ \\text{m s}^{-1}",
          "explanation": "Rebound speed along the line of motion.",
          "diagram": null
        }
      ],
      "finalAnswer": "$v = -4\\ \\text{m s}^{-1}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Mechanics (Further Mechanics 1)",
    "subtopic": "Elastic collisions in one dimension",
    "subtopicId": "fm.y1.mech.collisions-1d",
    "questionDiagram": null,
    "id": "fm.y1.mech.collisions-1d.q008",
    "tags": [
      "wall",
      "rebound"
    ],
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "numeric",
    "questionText": "A smooth sphere hits a wall at $10\\ \\text{m s}^{-1}$. The collision is perfectly elastic ($e = 1$). Find the rebound speed.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Impact with a smooth fixed wall",
          "workingLatex": "e = \\dfrac{\\text{speed of separation}}{\\text{speed of approach}}",
          "explanation": "The wall is modelled as a body of infinite mass that does not move.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Approach speed",
          "workingLatex": "\\text{Approach speed} = 10\\ \\text{m s}^{-1}",
          "explanation": "Speed just before impact, measured along the normal to the wall.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Separation speed",
          "workingLatex": "\\text{Separation speed} = e \\times 10",
          "explanation": "The rebound speed equals $e$ times the approach speed.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Rebound velocity",
          "workingLatex": "v = -10\\ \\text{m s}^{-1}",
          "explanation": "Take the sign opposite to the approach direction.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Momentum note",
          "workingLatex": "\\text{Wall exerts large impulse}",
          "explanation": "The wall absorbs momentum without moving appreciably.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "v = -10\\ \\text{m s}^{-1}",
          "explanation": "Rebound speed along the line of motion.",
          "diagram": null
        }
      ],
      "finalAnswer": "$v = -10\\ \\text{m s}^{-1}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Mechanics (Further Mechanics 1)",
    "subtopic": "Elastic collisions in one dimension",
    "subtopicId": "fm.y1.mech.collisions-1d",
    "questionDiagram": null,
    "id": "fm.y1.mech.collisions-1d.q009",
    "tags": [
      "wall",
      "rebound"
    ],
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "numeric",
    "questionText": "A $4\\ \\text{kg}$ particle moving at $6\\ \\text{m s}^{-1}$ hits a smooth wall with $e = 0.75$. Find its speed after impact.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Impact with a smooth fixed wall",
          "workingLatex": "e = \\dfrac{\\text{speed of separation}}{\\text{speed of approach}}",
          "explanation": "The wall is modelled as a body of infinite mass that does not move.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Approach speed",
          "workingLatex": "\\text{Approach speed} = 6\\ \\text{m s}^{-1}",
          "explanation": "Speed just before impact, measured along the normal to the wall.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Separation speed",
          "workingLatex": "\\text{Separation speed} = e \\times 6",
          "explanation": "The rebound speed equals $e$ times the approach speed.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Rebound velocity",
          "workingLatex": "v = -4.5\\ \\text{m s}^{-1}",
          "explanation": "Take the sign opposite to the approach direction.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Momentum note",
          "workingLatex": "\\text{Wall exerts large impulse}",
          "explanation": "The wall absorbs momentum without moving appreciably.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "v = -4.5\\ \\text{m s}^{-1}",
          "explanation": "Rebound speed along the line of motion.",
          "diagram": null
        }
      ],
      "finalAnswer": "$v = -4.5\\ \\text{m s}^{-1}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Mechanics (Further Mechanics 1)",
    "subtopic": "Elastic collisions in one dimension",
    "subtopicId": "fm.y1.mech.collisions-1d",
    "questionDiagram": null,
    "id": "fm.y1.mech.collisions-1d.q010",
    "tags": [
      "wall",
      "rebound"
    ],
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "numeric",
    "questionText": "A sphere strikes a wall at $12\\ \\text{m s}^{-1}$. Given $e = 0.25$, find the rebound speed.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Impact with a smooth fixed wall",
          "workingLatex": "e = \\dfrac{\\text{speed of separation}}{\\text{speed of approach}}",
          "explanation": "The wall is modelled as a body of infinite mass that does not move.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Approach speed",
          "workingLatex": "\\text{Approach speed} = 12\\ \\text{m s}^{-1}",
          "explanation": "Speed just before impact, measured along the normal to the wall.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Separation speed",
          "workingLatex": "\\text{Separation speed} = e \\times 12",
          "explanation": "The rebound speed equals $e$ times the approach speed.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Rebound velocity",
          "workingLatex": "v = -3\\ \\text{m s}^{-1}",
          "explanation": "Take the sign opposite to the approach direction.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Momentum note",
          "workingLatex": "\\text{Wall exerts large impulse}",
          "explanation": "The wall absorbs momentum without moving appreciably.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "v = -3\\ \\text{m s}^{-1}",
          "explanation": "Rebound speed along the line of motion.",
          "diagram": null
        }
      ],
      "finalAnswer": "$v = -3\\ \\text{m s}^{-1}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Mechanics (Further Mechanics 1)",
    "subtopic": "Elastic collisions in one dimension",
    "subtopicId": "fm.y1.mech.collisions-1d",
    "questionDiagram": null,
    "id": "fm.y1.mech.collisions-1d.q011",
    "tags": [
      "wall",
      "find-e"
    ],
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "numeric",
    "questionText": "A particle hits a smooth wall at $8\\ \\text{m s}^{-1}$ and rebounds at $4\\ \\text{m s}^{-1}$. Find the coefficient of restitution.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Restitution with a wall",
          "workingLatex": "e = \\dfrac{|v|}{|u|}",
          "explanation": "Separation speed divided by approach speed.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Approach speed",
          "workingLatex": "|u| = 8\\ \\text{m s}^{-1}",
          "explanation": "Speed toward the wall before impact.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Separation speed",
          "workingLatex": "|v| = 4\\ \\text{m s}^{-1}",
          "explanation": "Speed away from the wall after impact.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Calculate $e$",
          "workingLatex": "e = \\dfrac{4}{8} = 0.5",
          "explanation": "Divide separation by approach.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Direction check",
          "workingLatex": "\\text{Velocity reverses on rebound}",
          "explanation": "The particle changes direction at the wall.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "e = 0.5",
          "explanation": "Coefficient of restitution for the impact.",
          "diagram": null
        }
      ],
      "finalAnswer": "$e = 0.5$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Mechanics (Further Mechanics 1)",
    "subtopic": "Elastic collisions in one dimension",
    "subtopicId": "fm.y1.mech.collisions-1d",
    "questionDiagram": null,
    "id": "fm.y1.mech.collisions-1d.q012",
    "tags": [
      "wall",
      "find-e"
    ],
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "numeric",
    "questionText": "A smooth sphere strikes a wall at $10\\ \\text{m s}^{-1}$ and rebounds at $10\\ \\text{m s}^{-1}$. Find $e$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Restitution with a wall",
          "workingLatex": "e = \\dfrac{|v|}{|u|}",
          "explanation": "Separation speed divided by approach speed.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Approach speed",
          "workingLatex": "|u| = 10\\ \\text{m s}^{-1}",
          "explanation": "Speed toward the wall before impact.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Separation speed",
          "workingLatex": "|v| = 10\\ \\text{m s}^{-1}",
          "explanation": "Speed away from the wall after impact.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Calculate $e$",
          "workingLatex": "e = \\dfrac{10}{10} = 1",
          "explanation": "Divide separation by approach.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Direction check",
          "workingLatex": "\\text{Velocity reverses on rebound}",
          "explanation": "The particle changes direction at the wall.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "e = 1",
          "explanation": "Coefficient of restitution for the impact.",
          "diagram": null
        }
      ],
      "finalAnswer": "$e = 1$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Mechanics (Further Mechanics 1)",
    "subtopic": "Elastic collisions in one dimension",
    "subtopicId": "fm.y1.mech.collisions-1d",
    "questionDiagram": null,
    "id": "fm.y1.mech.collisions-1d.q013",
    "tags": [
      "wall",
      "find-e"
    ],
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "numeric",
    "questionText": "After hitting a smooth wall at $6\\ \\text{m s}^{-1}$, a particle rebounds at $3\\ \\text{m s}^{-1}$. Calculate $e$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Restitution with a wall",
          "workingLatex": "e = \\dfrac{|v|}{|u|}",
          "explanation": "Separation speed divided by approach speed.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Approach speed",
          "workingLatex": "|u| = 6\\ \\text{m s}^{-1}",
          "explanation": "Speed toward the wall before impact.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Separation speed",
          "workingLatex": "|v| = 3\\ \\text{m s}^{-1}",
          "explanation": "Speed away from the wall after impact.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Calculate $e$",
          "workingLatex": "e = \\dfrac{3}{6} = 0.5",
          "explanation": "Divide separation by approach.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Direction check",
          "workingLatex": "\\text{Velocity reverses on rebound}",
          "explanation": "The particle changes direction at the wall.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "e = 0.5",
          "explanation": "Coefficient of restitution for the impact.",
          "diagram": null
        }
      ],
      "finalAnswer": "$e = 0.5$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Mechanics (Further Mechanics 1)",
    "subtopic": "Elastic collisions in one dimension",
    "subtopicId": "fm.y1.mech.collisions-1d",
    "questionDiagram": null,
    "id": "fm.y1.mech.collisions-1d.q014",
    "tags": [
      "wall",
      "find-e"
    ],
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "numeric",
    "questionText": "A particle approaches a wall at $15\\ \\text{m s}^{-1}$ and leaves at $9\\ \\text{m s}^{-1}$. Find the coefficient of restitution.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Restitution with a wall",
          "workingLatex": "e = \\dfrac{|v|}{|u|}",
          "explanation": "Separation speed divided by approach speed.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Approach speed",
          "workingLatex": "|u| = 15\\ \\text{m s}^{-1}",
          "explanation": "Speed toward the wall before impact.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Separation speed",
          "workingLatex": "|v| = 9\\ \\text{m s}^{-1}",
          "explanation": "Speed away from the wall after impact.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Calculate $e$",
          "workingLatex": "e = \\dfrac{9}{15} = 0.6",
          "explanation": "Divide separation by approach.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Direction check",
          "workingLatex": "\\text{Velocity reverses on rebound}",
          "explanation": "The particle changes direction at the wall.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "e = 0.6",
          "explanation": "Coefficient of restitution for the impact.",
          "diagram": null
        }
      ],
      "finalAnswer": "$e = 0.6$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Mechanics (Further Mechanics 1)",
    "subtopic": "Elastic collisions in one dimension",
    "subtopicId": "fm.y1.mech.collisions-1d",
    "questionDiagram": null,
    "id": "fm.y1.mech.collisions-1d.q015",
    "tags": [
      "wall",
      "find-e"
    ],
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "numeric",
    "questionText": "A sphere hits a wall at $20\\ \\text{m s}^{-1}$ and rebounds at $5\\ \\text{m s}^{-1}$. Find $e$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Restitution with a wall",
          "workingLatex": "e = \\dfrac{|v|}{|u|}",
          "explanation": "Separation speed divided by approach speed.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Approach speed",
          "workingLatex": "|u| = 20\\ \\text{m s}^{-1}",
          "explanation": "Speed toward the wall before impact.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Separation speed",
          "workingLatex": "|v| = 5\\ \\text{m s}^{-1}",
          "explanation": "Speed away from the wall after impact.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Calculate $e$",
          "workingLatex": "e = \\dfrac{5}{20} = 0.25",
          "explanation": "Divide separation by approach.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Direction check",
          "workingLatex": "\\text{Velocity reverses on rebound}",
          "explanation": "The particle changes direction at the wall.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "e = 0.25",
          "explanation": "Coefficient of restitution for the impact.",
          "diagram": null
        }
      ],
      "finalAnswer": "$e = 0.25$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Mechanics (Further Mechanics 1)",
    "subtopic": "Elastic collisions in one dimension",
    "subtopicId": "fm.y1.mech.collisions-1d",
    "questionDiagram": null,
    "id": "fm.y1.mech.collisions-1d.q016",
    "tags": [
      "impulse"
    ],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "numeric",
    "questionText": "A $2\\ \\text{kg}$ particle moving at $5\\ \\text{m s}^{-1}$ rebounds from a wall at $3\\ \\text{m s}^{-1}$ in the opposite direction. Find the impulse on the particle.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Impulse–momentum",
          "workingLatex": "I = m(v - u)",
          "explanation": "Impulse equals change in momentum.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute",
          "workingLatex": "I = 2(-3 - 5)",
          "explanation": "Insert mass and velocities.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Calculate change",
          "workingLatex": "I = 2 \\times -8",
          "explanation": "Subtract initial from final velocity.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate",
          "workingLatex": "I = -16\\ \\text{N s}",
          "explanation": "Magnitude of impulse (include sign for direction).",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Direction",
          "workingLatex": "\\text{Impulse acts in negative direction}",
          "explanation": "The sign shows which way the impulse acts.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "I = -16\\ \\text{N s}",
          "explanation": "Impulse on the particle during the collision.",
          "diagram": null
        }
      ],
      "finalAnswer": "$I = -16\\ \\text{N s}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Mechanics (Further Mechanics 1)",
    "subtopic": "Elastic collisions in one dimension",
    "subtopicId": "fm.y1.mech.collisions-1d",
    "questionDiagram": null,
    "id": "fm.y1.mech.collisions-1d.q017",
    "tags": [
      "impulse"
    ],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "numeric",
    "questionText": "A $3\\ \\text{kg}$ particle hits a wall at $8\\ \\text{m s}^{-1}$ and rebounds at $4\\ \\text{m s}^{-1}$. Find the impulse.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Impulse–momentum",
          "workingLatex": "I = m(v - u)",
          "explanation": "Impulse equals change in momentum.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute",
          "workingLatex": "I = 3(-4 - 8)",
          "explanation": "Insert mass and velocities.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Calculate change",
          "workingLatex": "I = 3 \\times -12",
          "explanation": "Subtract initial from final velocity.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate",
          "workingLatex": "I = -36\\ \\text{N s}",
          "explanation": "Magnitude of impulse (include sign for direction).",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Direction",
          "workingLatex": "\\text{Impulse acts in negative direction}",
          "explanation": "The sign shows which way the impulse acts.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "I = -36\\ \\text{N s}",
          "explanation": "Impulse on the particle during the collision.",
          "diagram": null
        }
      ],
      "finalAnswer": "$I = -36\\ \\text{N s}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Mechanics (Further Mechanics 1)",
    "subtopic": "Elastic collisions in one dimension",
    "subtopicId": "fm.y1.mech.collisions-1d",
    "questionDiagram": null,
    "id": "fm.y1.mech.collisions-1d.q018",
    "tags": [
      "impulse"
    ],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "numeric",
    "questionText": "A $4\\ \\text{kg}$ particle has velocity $6\\ \\text{m s}^{-1}$ before a collision and $2\\ \\text{m s}^{-1}$ after. Find the impulse received.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Impulse–momentum",
          "workingLatex": "I = m(v - u)",
          "explanation": "Impulse equals change in momentum.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute",
          "workingLatex": "I = 4(2 - 6)",
          "explanation": "Insert mass and velocities.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Calculate change",
          "workingLatex": "I = 4 \\times -4",
          "explanation": "Subtract initial from final velocity.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate",
          "workingLatex": "I = -16\\ \\text{N s}",
          "explanation": "Magnitude of impulse (include sign for direction).",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Direction",
          "workingLatex": "\\text{Impulse acts in negative direction}",
          "explanation": "The sign shows which way the impulse acts.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "I = -16\\ \\text{N s}",
          "explanation": "Impulse on the particle during the collision.",
          "diagram": null
        }
      ],
      "finalAnswer": "$I = -16\\ \\text{N s}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Mechanics (Further Mechanics 1)",
    "subtopic": "Elastic collisions in one dimension",
    "subtopicId": "fm.y1.mech.collisions-1d",
    "questionDiagram": null,
    "id": "fm.y1.mech.collisions-1d.q019",
    "tags": [
      "find-e",
      "restitution"
    ],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "numeric",
    "questionText": "Particle A ($2\\ \\text{kg}$) moving at $5\\ \\text{m s}^{-1}$ collides with particle B ($3\\ \\text{kg}$) at rest. After impact A moves at $1\\ \\text{m s}^{-1}$ and B at $4\\ \\text{m s}^{-1}$. Find $e$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Restitution formula",
          "workingLatex": "e = \\dfrac{v_2 - v_1}{u_1 - u_2}",
          "explanation": "Ratio of relative separation to relative approach speed.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Separation speed",
          "workingLatex": "v_2 - v_1 = 4 - (1) = 3",
          "explanation": "Relative speed after collision.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Approach speed",
          "workingLatex": "u_1 - u_2 = 5 - (0) = 5",
          "explanation": "Relative speed before collision.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Calculate $e$",
          "workingLatex": "e = \\dfrac{3}{5} = 0.8",
          "explanation": "Divide separation by approach.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Verify momentum",
          "workingLatex": "2(5) + 3(0) = 10",
          "explanation": "Check initial momentum.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "e = 0.8",
          "explanation": "Coefficient of restitution.",
          "diagram": null
        }
      ],
      "finalAnswer": "$e = 0.8$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Mechanics (Further Mechanics 1)",
    "subtopic": "Elastic collisions in one dimension",
    "subtopicId": "fm.y1.mech.collisions-1d",
    "questionDiagram": null,
    "id": "fm.y1.mech.collisions-1d.q020",
    "tags": [
      "find-e",
      "restitution"
    ],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "numeric",
    "questionText": "A $3\\ \\text{kg}$ particle at $6\\ \\text{m s}^{-1}$ hits a $2\\ \\text{kg}$ particle at rest. After collision the speeds are $2\\ \\text{m s}^{-1}$ and $6\\ \\text{m s}^{-1}$ respectively. Find $e$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Restitution formula",
          "workingLatex": "e = \\dfrac{v_2 - v_1}{u_1 - u_2}",
          "explanation": "Ratio of relative separation to relative approach speed.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Separation speed",
          "workingLatex": "v_2 - v_1 = 6 - (2) = 4",
          "explanation": "Relative speed after collision.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Approach speed",
          "workingLatex": "u_1 - u_2 = 6 - (0) = 6",
          "explanation": "Relative speed before collision.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Calculate $e$",
          "workingLatex": "e = \\dfrac{4}{6} = 1",
          "explanation": "Divide separation by approach.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Verify momentum",
          "workingLatex": "3(6) + 2(0) = 18",
          "explanation": "Check initial momentum.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "e = 1",
          "explanation": "Coefficient of restitution.",
          "diagram": null
        }
      ],
      "finalAnswer": "$e = 1$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Mechanics (Further Mechanics 1)",
    "subtopic": "Elastic collisions in one dimension",
    "subtopicId": "fm.y1.mech.collisions-1d",
    "questionDiagram": null,
    "id": "fm.y1.mech.collisions-1d.q021",
    "tags": [
      "find-e",
      "restitution"
    ],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "numeric",
    "questionText": "Particles of mass $4\\ \\text{kg}$ and $1\\ \\text{kg}$ approach with velocities $8\\ \\text{m s}^{-1}$ and $-2\\ \\text{m s}^{-1}$. After collision their velocities are $0\\ \\text{m s}^{-1}$ and $6\\ \\text{m s}^{-1}$. Find $e$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Restitution formula",
          "workingLatex": "e = \\dfrac{v_2 - v_1}{u_1 - u_2}",
          "explanation": "Ratio of relative separation to relative approach speed.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Separation speed",
          "workingLatex": "v_2 - v_1 = 6 - (0) = 6",
          "explanation": "Relative speed after collision.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Approach speed",
          "workingLatex": "u_1 - u_2 = 8 - (-2) = 10",
          "explanation": "Relative speed before collision.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Calculate $e$",
          "workingLatex": "e = \\dfrac{6}{10} = 0.5",
          "explanation": "Divide separation by approach.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Verify momentum",
          "workingLatex": "4(8) + 1(-2) = 30",
          "explanation": "Check initial momentum.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "e = 0.5",
          "explanation": "Coefficient of restitution.",
          "diagram": null
        }
      ],
      "finalAnswer": "$e = 0.5$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Mechanics (Further Mechanics 1)",
    "subtopic": "Elastic collisions in one dimension",
    "subtopicId": "fm.y1.mech.collisions-1d",
    "questionDiagram": null,
    "id": "fm.y1.mech.collisions-1d.q022",
    "tags": [
      "find-e",
      "restitution"
    ],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "numeric",
    "questionText": "Two $2\\ \\text{kg}$ particles: one at $4\\ \\text{m s}^{-1}$ hits another at rest. After impact the first stops and the second moves at $4\\ \\text{m s}^{-1}$. Find $e$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Restitution formula",
          "workingLatex": "e = \\dfrac{v_2 - v_1}{u_1 - u_2}",
          "explanation": "Ratio of relative separation to relative approach speed.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Separation speed",
          "workingLatex": "v_2 - v_1 = 4 - (0) = 4",
          "explanation": "Relative speed after collision.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Approach speed",
          "workingLatex": "u_1 - u_2 = 4 - (0) = 4",
          "explanation": "Relative speed before collision.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Calculate $e$",
          "workingLatex": "e = \\dfrac{4}{4} = 1",
          "explanation": "Divide separation by approach.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Verify momentum",
          "workingLatex": "2(4) + 2(0) = 8",
          "explanation": "Check initial momentum.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "e = 1",
          "explanation": "Coefficient of restitution.",
          "diagram": null
        }
      ],
      "finalAnswer": "$e = 1$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Mechanics (Further Mechanics 1)",
    "subtopic": "Elastic collisions in one dimension",
    "subtopicId": "fm.y1.mech.collisions-1d",
    "questionDiagram": null,
    "id": "fm.y1.mech.collisions-1d.q023",
    "tags": [
      "find-e",
      "restitution"
    ],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "numeric",
    "questionText": "A $5\\ \\text{kg}$ particle at $10\\ \\text{m s}^{-1}$ collides with a $3\\ \\text{kg}$ particle at rest. After impact the speeds are $4\\ \\text{m s}^{-1}$ and $10\\ \\text{m s}^{-1}$. Find $e$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Restitution formula",
          "workingLatex": "e = \\dfrac{v_2 - v_1}{u_1 - u_2}",
          "explanation": "Ratio of relative separation to relative approach speed.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Separation speed",
          "workingLatex": "v_2 - v_1 = 10 - (4) = 6",
          "explanation": "Relative speed after collision.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Approach speed",
          "workingLatex": "u_1 - u_2 = 10 - (0) = 10",
          "explanation": "Relative speed before collision.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Calculate $e$",
          "workingLatex": "e = \\dfrac{6}{10} = 0.6",
          "explanation": "Divide separation by approach.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Verify momentum",
          "workingLatex": "5(10) + 3(0) = 50",
          "explanation": "Check initial momentum.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "e = 0.6",
          "explanation": "Coefficient of restitution.",
          "diagram": null
        }
      ],
      "finalAnswer": "$e = 0.6$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Mechanics (Further Mechanics 1)",
    "subtopic": "Elastic collisions in one dimension",
    "subtopicId": "fm.y1.mech.collisions-1d",
    "questionDiagram": null,
    "id": "fm.y1.mech.collisions-1d.q024",
    "tags": [
      "restitution",
      "definition"
    ],
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "numeric",
    "questionText": "In a direct impact the approach speed is $4\\ \\text{m s}^{-1}$ and separation speed is $3.2\\ \\text{m s}^{-1}$. Find $e$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Newton's law of restitution",
          "workingLatex": "e = \\dfrac{\\text{speed of separation}}{\\text{speed of approach}}",
          "explanation": "The coefficient of restitution compares how fast the bodies move apart to how fast they came together.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute speeds",
          "workingLatex": "e = \\dfrac{3.2}{4}",
          "explanation": "Use the given approach and separation speeds along the line of centres.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Evaluate",
          "workingLatex": "e = 0.8",
          "explanation": "Divide to find the coefficient.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Interpret",
          "workingLatex": "\\text{Partially elastic}",
          "explanation": "Values near 1 mean little kinetic energy is lost; $e = 0$ means the bodies coalesce.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Range",
          "workingLatex": "0 \\le e \\le 1",
          "explanation": "Restitution is always between zero and one for real collisions.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "e = 0.8",
          "explanation": "Coefficient of restitution.",
          "diagram": null
        }
      ],
      "finalAnswer": "$e = 0.8$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Mechanics (Further Mechanics 1)",
    "subtopic": "Elastic collisions in one dimension",
    "subtopicId": "fm.y1.mech.collisions-1d",
    "questionDiagram": null,
    "id": "fm.y1.mech.collisions-1d.q025",
    "tags": [
      "restitution",
      "definition"
    ],
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "numeric",
    "questionText": "The approach speed is $9\\ \\text{m s}^{-1}$ and the separation speed is $4.5\\ \\text{m s}^{-1}$. Calculate $e$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Newton's law of restitution",
          "workingLatex": "e = \\dfrac{\\text{speed of separation}}{\\text{speed of approach}}",
          "explanation": "The coefficient of restitution compares how fast the bodies move apart to how fast they came together.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute speeds",
          "workingLatex": "e = \\dfrac{4.5}{9}",
          "explanation": "Use the given approach and separation speeds along the line of centres.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Evaluate",
          "workingLatex": "e = 0.5",
          "explanation": "Divide to find the coefficient.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Interpret",
          "workingLatex": "\\text{Partially elastic}",
          "explanation": "Values near 1 mean little kinetic energy is lost; $e = 0$ means the bodies coalesce.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Range",
          "workingLatex": "0 \\le e \\le 1",
          "explanation": "Restitution is always between zero and one for real collisions.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "e = 0.5",
          "explanation": "Coefficient of restitution.",
          "diagram": null
        }
      ],
      "finalAnswer": "$e = 0.5$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Mechanics (Further Mechanics 1)",
    "subtopic": "Elastic collisions in one dimension",
    "subtopicId": "fm.y1.mech.collisions-1d",
    "questionDiagram": null,
    "id": "fm.y1.mech.collisions-1d.q026",
    "tags": [
      "two-body",
      "restitution"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "numeric",
    "questionText": "A smooth sphere of mass $2\\ \\text{kg}$ moving at $5\\ \\text{m s}^{-1}$ collides with a $3\\ \\text{kg}$ sphere at rest. Given $e = 0.8$, find both final velocities.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Choose positive direction",
          "workingLatex": "\\text{State direction along the line}",
          "explanation": "Consistent signs are essential in one-dimensional collision problems.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Conservation of momentum",
          "workingLatex": "m_1 u_1 + m_2 u_2 = m_1 v_1 + m_2 v_2",
          "explanation": "No external impulse along the line, so total momentum is conserved.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Newton's law of restitution",
          "workingLatex": "v_2 - v_1 = e(u_1 - u_2)",
          "explanation": "The relative separation speed equals $e$ times the relative approach speed.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute known values",
          "workingLatex": "2(5) + 3(0) = 2 v_1 + 3 v_2",
          "explanation": "Insert masses and velocities before impact.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Total initial momentum",
          "workingLatex": "10 = 2 v_1 + 3 v_2",
          "explanation": "Sum the momentum of both particles.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Restitution equation",
          "workingLatex": "v_2 - v_1 = 0.8(5 - 0) = 4",
          "explanation": "Substitute $e$ and the approach speed.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Solve simultaneously",
          "workingLatex": "v_1 = -0.4,\\quad v_2 = 3.6",
          "explanation": "Use substitution or the standard collision formulae.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Verify momentum",
          "workingLatex": "2(-0.4) + 3(3.6) = 10",
          "explanation": "Check that total momentum is unchanged.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "v_1 = -0.4\\ \\text{m s}^{-1},\\quad v_2 = 3.6\\ \\text{m s}^{-1}",
          "explanation": "Final velocities of both particles.",
          "diagram": null
        }
      ],
      "finalAnswer": "$v_1 = -0.4\\ \\text{m s}^{-1}$, $v_2 = 3.6\\ \\text{m s}^{-1}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Mechanics (Further Mechanics 1)",
    "subtopic": "Elastic collisions in one dimension",
    "subtopicId": "fm.y1.mech.collisions-1d",
    "questionDiagram": null,
    "id": "fm.y1.mech.collisions-1d.q027",
    "tags": [
      "two-body",
      "restitution"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "numeric",
    "questionText": "A $3\\ \\text{kg}$ particle at $6\\ \\text{m s}^{-1}$ hits a $2\\ \\text{kg}$ particle at rest. Given $e = 0.5$, find the final velocities.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Choose positive direction",
          "workingLatex": "\\text{State direction along the line}",
          "explanation": "Consistent signs are essential in one-dimensional collision problems.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Conservation of momentum",
          "workingLatex": "m_1 u_1 + m_2 u_2 = m_1 v_1 + m_2 v_2",
          "explanation": "No external impulse along the line, so total momentum is conserved.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Newton's law of restitution",
          "workingLatex": "v_2 - v_1 = e(u_1 - u_2)",
          "explanation": "The relative separation speed equals $e$ times the relative approach speed.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute known values",
          "workingLatex": "3(6) + 2(0) = 3 v_1 + 2 v_2",
          "explanation": "Insert masses and velocities before impact.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Total initial momentum",
          "workingLatex": "18 = 3 v_1 + 2 v_2",
          "explanation": "Sum the momentum of both particles.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Restitution equation",
          "workingLatex": "v_2 - v_1 = 0.5(6 - 0) = 3",
          "explanation": "Substitute $e$ and the approach speed.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Solve simultaneously",
          "workingLatex": "v_1 = 2.4,\\quad v_2 = 5.4",
          "explanation": "Use substitution or the standard collision formulae.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Verify momentum",
          "workingLatex": "3(2.4) + 2(5.4) = 18",
          "explanation": "Check that total momentum is unchanged.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "v_1 = 2.4\\ \\text{m s}^{-1},\\quad v_2 = 5.4\\ \\text{m s}^{-1}",
          "explanation": "Final velocities of both particles.",
          "diagram": null
        }
      ],
      "finalAnswer": "$v_1 = 2.4\\ \\text{m s}^{-1}$, $v_2 = 5.4\\ \\text{m s}^{-1}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Mechanics (Further Mechanics 1)",
    "subtopic": "Elastic collisions in one dimension",
    "subtopicId": "fm.y1.mech.collisions-1d",
    "questionDiagram": null,
    "id": "fm.y1.mech.collisions-1d.q028",
    "tags": [
      "two-body",
      "restitution"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "numeric",
    "questionText": "A $4\\ \\text{kg}$ sphere moving at $8\\ \\text{m s}^{-1}$ collides with a $1\\ \\text{kg}$ sphere at rest. Given $e = 0.75$, find both speeds after impact.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Choose positive direction",
          "workingLatex": "\\text{State direction along the line}",
          "explanation": "Consistent signs are essential in one-dimensional collision problems.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Conservation of momentum",
          "workingLatex": "m_1 u_1 + m_2 u_2 = m_1 v_1 + m_2 v_2",
          "explanation": "No external impulse along the line, so total momentum is conserved.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Newton's law of restitution",
          "workingLatex": "v_2 - v_1 = e(u_1 - u_2)",
          "explanation": "The relative separation speed equals $e$ times the relative approach speed.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute known values",
          "workingLatex": "4(8) + 1(0) = 4 v_1 + 1 v_2",
          "explanation": "Insert masses and velocities before impact.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Total initial momentum",
          "workingLatex": "32 = 4 v_1 + 1 v_2",
          "explanation": "Sum the momentum of both particles.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Restitution equation",
          "workingLatex": "v_2 - v_1 = 0.75(8 - 0) = 6",
          "explanation": "Substitute $e$ and the approach speed.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Solve simultaneously",
          "workingLatex": "v_1 = 5.2,\\quad v_2 = 11.2",
          "explanation": "Use substitution or the standard collision formulae.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Verify momentum",
          "workingLatex": "4(5.2) + 1(11.2) = 32",
          "explanation": "Check that total momentum is unchanged.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "v_1 = 5.2\\ \\text{m s}^{-1},\\quad v_2 = 11.2\\ \\text{m s}^{-1}",
          "explanation": "Final velocities of both particles.",
          "diagram": null
        }
      ],
      "finalAnswer": "$v_1 = 5.2\\ \\text{m s}^{-1}$, $v_2 = 11.2\\ \\text{m s}^{-1}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Mechanics (Further Mechanics 1)",
    "subtopic": "Elastic collisions in one dimension",
    "subtopicId": "fm.y1.mech.collisions-1d",
    "questionDiagram": null,
    "id": "fm.y1.mech.collisions-1d.q029",
    "tags": [
      "elastic",
      "e-equals-1"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "numeric",
    "questionText": "Two smooth spheres of equal mass $2\\ \\text{kg}$ collide. One is moving at $4\\ \\text{m s}^{-1}$ and the other is at rest. The collision is perfectly elastic. Find both final velocities.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Perfectly elastic collision",
          "workingLatex": "e = 1",
          "explanation": "Kinetic energy as well as momentum is conserved.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Conservation of momentum",
          "workingLatex": "2(4) + 2(0) = 2 v_1 + 2 v_2",
          "explanation": "Total momentum is conserved.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Restitution with $e = 1$",
          "workingLatex": "v_2 - v_1 = u_1 - u_2",
          "explanation": "Separation speed equals approach speed.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Solve",
          "workingLatex": "v_1 = 0,\\quad v_2 = 4",
          "explanation": "Solve the pair of simultaneous equations.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check kinetic energy",
          "workingLatex": "\\tfrac{1}{2}2(4)^2 + \\tfrac{1}{2}2(0)^2 = \\tfrac{1}{2}2(0)^2 + \\tfrac{1}{2}2(4)^2",
          "explanation": "Total KE is unchanged.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Special case",
          "workingLatex": "\\text{Equal masses exchange speeds}",
          "explanation": "Equal-mass head-on elastic collisions swap velocities.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Answer",
          "workingLatex": "v_1 = 0\\ \\text{m s}^{-1},\\quad v_2 = 4\\ \\text{m s}^{-1}",
          "explanation": "Final velocities.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Smooth spheres",
          "workingLatex": "\\text{No friction at contact}",
          "explanation": "Standard A-level model for direct impacts.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Line of centres",
          "workingLatex": "\\text{Velocities along the line of impact}",
          "explanation": "In 1D all motion is along one axis.",
          "diagram": null
        }
      ],
      "finalAnswer": "$v_1 = 0\\ \\text{m s}^{-1}$, $v_2 = 4\\ \\text{m s}^{-1}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Mechanics (Further Mechanics 1)",
    "subtopic": "Elastic collisions in one dimension",
    "subtopicId": "fm.y1.mech.collisions-1d",
    "questionDiagram": null,
    "id": "fm.y1.mech.collisions-1d.q030",
    "tags": [
      "elastic",
      "e-equals-1"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "numeric",
    "questionText": "A $3\\ \\text{kg}$ particle at $5\\ \\text{m s}^{-1}$ collides elastically with a $1\\ \\text{kg}$ particle at rest. Find both final velocities.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Perfectly elastic collision",
          "workingLatex": "e = 1",
          "explanation": "Kinetic energy as well as momentum is conserved.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Conservation of momentum",
          "workingLatex": "3(5) + 1(0) = 3 v_1 + 1 v_2",
          "explanation": "Total momentum is conserved.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Restitution with $e = 1$",
          "workingLatex": "v_2 - v_1 = u_1 - u_2",
          "explanation": "Separation speed equals approach speed.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Solve",
          "workingLatex": "v_1 = 2.5,\\quad v_2 = 7.5",
          "explanation": "Solve the pair of simultaneous equations.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check kinetic energy",
          "workingLatex": "\\tfrac{1}{2}3(5)^2 + \\tfrac{1}{2}1(0)^2 = \\tfrac{1}{2}3(2.5)^2 + \\tfrac{1}{2}1(7.5)^2",
          "explanation": "Total KE is unchanged.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Special case",
          "workingLatex": "\\text{Use general formulae}",
          "explanation": "Equal-mass head-on elastic collisions swap velocities.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Answer",
          "workingLatex": "v_1 = 2.5\\ \\text{m s}^{-1},\\quad v_2 = 7.5\\ \\text{m s}^{-1}",
          "explanation": "Final velocities.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Smooth spheres",
          "workingLatex": "\\text{No friction at contact}",
          "explanation": "Standard A-level model for direct impacts.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Line of centres",
          "workingLatex": "\\text{Velocities along the line of impact}",
          "explanation": "In 1D all motion is along one axis.",
          "diagram": null
        }
      ],
      "finalAnswer": "$v_1 = 2.5\\ \\text{m s}^{-1}$, $v_2 = 7.5\\ \\text{m s}^{-1}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Mechanics (Further Mechanics 1)",
    "subtopic": "Elastic collisions in one dimension",
    "subtopicId": "fm.y1.mech.collisions-1d",
    "questionDiagram": null,
    "id": "fm.y1.mech.collisions-1d.q031",
    "tags": [
      "two-body",
      "restitution"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "numeric",
    "questionText": "A $2\\ \\text{kg}$ particle moving at $6\\ \\text{m s}^{-1}$ overtakes a $4\\ \\text{kg}$ particle moving at $2\\ \\text{m s}^{-1}$ in the same direction. Given $e = 0.6$, find both final velocities.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Choose positive direction",
          "workingLatex": "\\text{State direction along the line}",
          "explanation": "Consistent signs are essential in one-dimensional collision problems.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Conservation of momentum",
          "workingLatex": "m_1 u_1 + m_2 u_2 = m_1 v_1 + m_2 v_2",
          "explanation": "No external impulse along the line, so total momentum is conserved.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Newton's law of restitution",
          "workingLatex": "v_2 - v_1 = e(u_1 - u_2)",
          "explanation": "The relative separation speed equals $e$ times the relative approach speed.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute known values",
          "workingLatex": "2(6) + 4(2) = 2 v_1 + 4 v_2",
          "explanation": "Insert masses and velocities before impact.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Total initial momentum",
          "workingLatex": "20 = 2 v_1 + 4 v_2",
          "explanation": "Sum the momentum of both particles.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Restitution equation",
          "workingLatex": "v_2 - v_1 = 0.6(6 - 2) = 2.4",
          "explanation": "Substitute $e$ and the approach speed.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Solve simultaneously",
          "workingLatex": "v_1 = 1.7333,\\quad v_2 = 4.1333",
          "explanation": "Use substitution or the standard collision formulae.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Verify momentum",
          "workingLatex": "2(1.7333) + 4(4.1333) = 20",
          "explanation": "Check that total momentum is unchanged.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "v_1 = 1.7333\\ \\text{m s}^{-1},\\quad v_2 = 4.1333\\ \\text{m s}^{-1}",
          "explanation": "Final velocities of both particles.",
          "diagram": null
        }
      ],
      "finalAnswer": "$v_1 = 1.7333\\ \\text{m s}^{-1}$, $v_2 = 4.1333\\ \\text{m s}^{-1}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Mechanics (Further Mechanics 1)",
    "subtopic": "Elastic collisions in one dimension",
    "subtopicId": "fm.y1.mech.collisions-1d",
    "questionDiagram": null,
    "id": "fm.y1.mech.collisions-1d.q032",
    "tags": [
      "two-body",
      "restitution"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "numeric",
    "questionText": "Particles of mass $5\\ \\text{kg}$ and $3\\ \\text{kg}$ move at $10\\ \\text{m s}^{-1}$ and $-2\\ \\text{m s}^{-1}$ respectively. Given $e = 0.5$, find their velocities after direct impact.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Choose positive direction",
          "workingLatex": "\\text{State direction along the line}",
          "explanation": "Consistent signs are essential in one-dimensional collision problems.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Conservation of momentum",
          "workingLatex": "m_1 u_1 + m_2 u_2 = m_1 v_1 + m_2 v_2",
          "explanation": "No external impulse along the line, so total momentum is conserved.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Newton's law of restitution",
          "workingLatex": "v_2 - v_1 = e(u_1 - u_2)",
          "explanation": "The relative separation speed equals $e$ times the relative approach speed.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute known values",
          "workingLatex": "5(10) + 3(-2) = 5 v_1 + 3 v_2",
          "explanation": "Insert masses and velocities before impact.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Total initial momentum",
          "workingLatex": "44 = 5 v_1 + 3 v_2",
          "explanation": "Sum the momentum of both particles.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Restitution equation",
          "workingLatex": "v_2 - v_1 = 0.5(10 - -2) = 6",
          "explanation": "Substitute $e$ and the approach speed.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Solve simultaneously",
          "workingLatex": "v_1 = 3.25,\\quad v_2 = 9.25",
          "explanation": "Use substitution or the standard collision formulae.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Verify momentum",
          "workingLatex": "5(3.25) + 3(9.25) = 44",
          "explanation": "Check that total momentum is unchanged.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "v_1 = 3.25\\ \\text{m s}^{-1},\\quad v_2 = 9.25\\ \\text{m s}^{-1}",
          "explanation": "Final velocities of both particles.",
          "diagram": null
        }
      ],
      "finalAnswer": "$v_1 = 3.25\\ \\text{m s}^{-1}$, $v_2 = 9.25\\ \\text{m s}^{-1}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Mechanics (Further Mechanics 1)",
    "subtopic": "Elastic collisions in one dimension",
    "subtopicId": "fm.y1.mech.collisions-1d",
    "questionDiagram": null,
    "id": "fm.y1.mech.collisions-1d.q033",
    "tags": [
      "elastic",
      "e-equals-1"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "numeric",
    "questionText": "Two $1\\ \\text{kg}$ particles approach each other at $8\\ \\text{m s}^{-1}$ and $4\\ \\text{m s}^{-1}$. The collision is perfectly elastic. Find both final velocities.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Perfectly elastic collision",
          "workingLatex": "e = 1",
          "explanation": "Kinetic energy as well as momentum is conserved.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Conservation of momentum",
          "workingLatex": "1(8) + 1(-4) = 1 v_1 + 1 v_2",
          "explanation": "Total momentum is conserved.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Restitution with $e = 1$",
          "workingLatex": "v_2 - v_1 = u_1 - u_2",
          "explanation": "Separation speed equals approach speed.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Solve",
          "workingLatex": "v_1 = -4,\\quad v_2 = 8",
          "explanation": "Solve the pair of simultaneous equations.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check kinetic energy",
          "workingLatex": "\\tfrac{1}{2}1(8)^2 + \\tfrac{1}{2}1(-4)^2 = \\tfrac{1}{2}1(-4)^2 + \\tfrac{1}{2}1(8)^2",
          "explanation": "Total KE is unchanged.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Special case",
          "workingLatex": "\\text{Equal masses exchange speeds}",
          "explanation": "Equal-mass head-on elastic collisions swap velocities.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Answer",
          "workingLatex": "v_1 = -4\\ \\text{m s}^{-1},\\quad v_2 = 8\\ \\text{m s}^{-1}",
          "explanation": "Final velocities.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Smooth spheres",
          "workingLatex": "\\text{No friction at contact}",
          "explanation": "Standard A-level model for direct impacts.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Line of centres",
          "workingLatex": "\\text{Velocities along the line of impact}",
          "explanation": "In 1D all motion is along one axis.",
          "diagram": null
        }
      ],
      "finalAnswer": "$v_1 = -4\\ \\text{m s}^{-1}$, $v_2 = 8\\ \\text{m s}^{-1}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Mechanics (Further Mechanics 1)",
    "subtopic": "Elastic collisions in one dimension",
    "subtopicId": "fm.y1.mech.collisions-1d",
    "questionDiagram": null,
    "id": "fm.y1.mech.collisions-1d.q034",
    "tags": [
      "two-body",
      "restitution"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "numeric",
    "questionText": "A $6\\ \\text{kg}$ particle at $4\\ \\text{m s}^{-1}$ collides with a $2\\ \\text{kg}$ particle at rest. Given $e = 0.5$, find both final speeds.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Choose positive direction",
          "workingLatex": "\\text{State direction along the line}",
          "explanation": "Consistent signs are essential in one-dimensional collision problems.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Conservation of momentum",
          "workingLatex": "m_1 u_1 + m_2 u_2 = m_1 v_1 + m_2 v_2",
          "explanation": "No external impulse along the line, so total momentum is conserved.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Newton's law of restitution",
          "workingLatex": "v_2 - v_1 = e(u_1 - u_2)",
          "explanation": "The relative separation speed equals $e$ times the relative approach speed.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute known values",
          "workingLatex": "6(4) + 2(0) = 6 v_1 + 2 v_2",
          "explanation": "Insert masses and velocities before impact.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Total initial momentum",
          "workingLatex": "24 = 6 v_1 + 2 v_2",
          "explanation": "Sum the momentum of both particles.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Restitution equation",
          "workingLatex": "v_2 - v_1 = 0.5(4 - 0) = 2",
          "explanation": "Substitute $e$ and the approach speed.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Solve simultaneously",
          "workingLatex": "v_1 = 2.5,\\quad v_2 = 4.5",
          "explanation": "Use substitution or the standard collision formulae.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Verify momentum",
          "workingLatex": "6(2.5) + 2(4.5) = 24",
          "explanation": "Check that total momentum is unchanged.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "v_1 = 2.5\\ \\text{m s}^{-1},\\quad v_2 = 4.5\\ \\text{m s}^{-1}",
          "explanation": "Final velocities of both particles.",
          "diagram": null
        }
      ],
      "finalAnswer": "$v_1 = 2.5\\ \\text{m s}^{-1}$, $v_2 = 4.5\\ \\text{m s}^{-1}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Mechanics (Further Mechanics 1)",
    "subtopic": "Elastic collisions in one dimension",
    "subtopicId": "fm.y1.mech.collisions-1d",
    "questionDiagram": null,
    "id": "fm.y1.mech.collisions-1d.q035",
    "tags": [
      "two-body",
      "restitution"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "numeric",
    "questionText": "Two $3\\ \\text{kg}$ particles both move at $9\\ \\text{m s}^{-1}$ and $3\\ \\text{m s}^{-1}$ in the same direction. Given $e = 0.8$, find their velocities after the faster overtakes the slower.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Choose positive direction",
          "workingLatex": "\\text{State direction along the line}",
          "explanation": "Consistent signs are essential in one-dimensional collision problems.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Conservation of momentum",
          "workingLatex": "m_1 u_1 + m_2 u_2 = m_1 v_1 + m_2 v_2",
          "explanation": "No external impulse along the line, so total momentum is conserved.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Newton's law of restitution",
          "workingLatex": "v_2 - v_1 = e(u_1 - u_2)",
          "explanation": "The relative separation speed equals $e$ times the relative approach speed.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute known values",
          "workingLatex": "3(9) + 3(3) = 3 v_1 + 3 v_2",
          "explanation": "Insert masses and velocities before impact.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Total initial momentum",
          "workingLatex": "36 = 3 v_1 + 3 v_2",
          "explanation": "Sum the momentum of both particles.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Restitution equation",
          "workingLatex": "v_2 - v_1 = 0.8(9 - 3) = 4.8",
          "explanation": "Substitute $e$ and the approach speed.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Solve simultaneously",
          "workingLatex": "v_1 = 3.6,\\quad v_2 = 8.4",
          "explanation": "Use substitution or the standard collision formulae.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Verify momentum",
          "workingLatex": "3(3.6) + 3(8.4) = 36",
          "explanation": "Check that total momentum is unchanged.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "v_1 = 3.6\\ \\text{m s}^{-1},\\quad v_2 = 8.4\\ \\text{m s}^{-1}",
          "explanation": "Final velocities of both particles.",
          "diagram": null
        }
      ],
      "finalAnswer": "$v_1 = 3.6\\ \\text{m s}^{-1}$, $v_2 = 8.4\\ \\text{m s}^{-1}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Mechanics (Further Mechanics 1)",
    "subtopic": "Elastic collisions in one dimension",
    "subtopicId": "fm.y1.mech.collisions-1d",
    "questionDiagram": null,
    "id": "fm.y1.mech.collisions-1d.q036",
    "tags": [
      "ke-loss",
      "energy"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "numeric",
    "questionText": "A $2\\ \\text{kg}$ particle at $5\\ \\text{m s}^{-1}$ collides with a $3\\ \\text{kg}$ particle at rest. Given $e = 0.8$, find the kinetic energy lost.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Kinetic energy before impact",
          "workingLatex": "KE_{\\text{before}} = \\tfrac{1}{2}2(5)^2 + \\tfrac{1}{2}3(0)^2 = 25\\ \\text{J}",
          "explanation": "Sum the KE of both particles.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find final velocities",
          "workingLatex": "v_1 = -0.4,\\quad v_2 = 3.6",
          "explanation": "Use momentum and restitution with $e = 0.8$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Kinetic energy after impact",
          "workingLatex": "KE_{\\text{after}} = \\tfrac{1}{2}2(-0.4)^2 + \\tfrac{1}{2}3(3.6)^2 = 19.6\\ \\text{J}",
          "explanation": "Calculate total KE after collision.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Energy loss",
          "workingLatex": "\\Delta KE = KE_{\\text{after}} - KE_{\\text{before}} = -5.4\\ \\text{J}",
          "explanation": "Negative value means energy is lost.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Magnitude of loss",
          "workingLatex": "\\text{Loss} = 5.4\\ \\text{J}",
          "explanation": "Report the energy dissipated.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Link to $e$",
          "workingLatex": "\\text{KE lost when } e < 1",
          "explanation": "Only perfectly elastic collisions conserve kinetic energy.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Answer",
          "workingLatex": "\\text{KE lost} = 5.4\\ \\text{J}",
          "explanation": "Kinetic energy lost in the collision.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Smooth spheres",
          "workingLatex": "\\text{No friction at contact}",
          "explanation": "Standard A-level model for direct impacts.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Line of centres",
          "workingLatex": "\\text{Velocities along the line of impact}",
          "explanation": "In 1D all motion is along one axis.",
          "diagram": null
        }
      ],
      "finalAnswer": "KE lost $= 5.4\\ \\text{J}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Mechanics (Further Mechanics 1)",
    "subtopic": "Elastic collisions in one dimension",
    "subtopicId": "fm.y1.mech.collisions-1d",
    "questionDiagram": null,
    "id": "fm.y1.mech.collisions-1d.q037",
    "tags": [
      "ke-loss",
      "energy"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "numeric",
    "questionText": "A $3\\ \\text{kg}$ particle at $6\\ \\text{m s}^{-1}$ hits a $2\\ \\text{kg}$ particle at rest with $e = 0.5$. Find the KE lost in the collision.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Kinetic energy before impact",
          "workingLatex": "KE_{\\text{before}} = \\tfrac{1}{2}3(6)^2 + \\tfrac{1}{2}2(0)^2 = 54\\ \\text{J}",
          "explanation": "Sum the KE of both particles.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find final velocities",
          "workingLatex": "v_1 = 2.4,\\quad v_2 = 5.4",
          "explanation": "Use momentum and restitution with $e = 0.5$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Kinetic energy after impact",
          "workingLatex": "KE_{\\text{after}} = \\tfrac{1}{2}3(2.4)^2 + \\tfrac{1}{2}2(5.4)^2 = 37.8\\ \\text{J}",
          "explanation": "Calculate total KE after collision.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Energy loss",
          "workingLatex": "\\Delta KE = KE_{\\text{after}} - KE_{\\text{before}} = -16.2\\ \\text{J}",
          "explanation": "Negative value means energy is lost.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Magnitude of loss",
          "workingLatex": "\\text{Loss} = 16.2\\ \\text{J}",
          "explanation": "Report the energy dissipated.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Link to $e$",
          "workingLatex": "\\text{KE lost when } e < 1",
          "explanation": "Only perfectly elastic collisions conserve kinetic energy.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Answer",
          "workingLatex": "\\text{KE lost} = 16.2\\ \\text{J}",
          "explanation": "Kinetic energy lost in the collision.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Smooth spheres",
          "workingLatex": "\\text{No friction at contact}",
          "explanation": "Standard A-level model for direct impacts.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Line of centres",
          "workingLatex": "\\text{Velocities along the line of impact}",
          "explanation": "In 1D all motion is along one axis.",
          "diagram": null
        }
      ],
      "finalAnswer": "KE lost $= 16.2\\ \\text{J}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Mechanics (Further Mechanics 1)",
    "subtopic": "Elastic collisions in one dimension",
    "subtopicId": "fm.y1.mech.collisions-1d",
    "questionDiagram": null,
    "id": "fm.y1.mech.collisions-1d.q038",
    "tags": [
      "ke-loss",
      "energy"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "numeric",
    "questionText": "Find the kinetic energy lost when a $4\\ \\text{kg}$ particle at $8\\ \\text{m s}^{-1}$ collides with a $1\\ \\text{kg}$ particle at rest, given $e = 0.75$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Kinetic energy before impact",
          "workingLatex": "KE_{\\text{before}} = \\tfrac{1}{2}4(8)^2 + \\tfrac{1}{2}1(0)^2 = 128\\ \\text{J}",
          "explanation": "Sum the KE of both particles.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find final velocities",
          "workingLatex": "v_1 = 5.2,\\quad v_2 = 11.2",
          "explanation": "Use momentum and restitution with $e = 0.75$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Kinetic energy after impact",
          "workingLatex": "KE_{\\text{after}} = \\tfrac{1}{2}4(5.2)^2 + \\tfrac{1}{2}1(11.2)^2 = 116.8\\ \\text{J}",
          "explanation": "Calculate total KE after collision.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Energy loss",
          "workingLatex": "\\Delta KE = KE_{\\text{after}} - KE_{\\text{before}} = -11.2\\ \\text{J}",
          "explanation": "Negative value means energy is lost.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Magnitude of loss",
          "workingLatex": "\\text{Loss} = 11.2\\ \\text{J}",
          "explanation": "Report the energy dissipated.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Link to $e$",
          "workingLatex": "\\text{KE lost when } e < 1",
          "explanation": "Only perfectly elastic collisions conserve kinetic energy.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Answer",
          "workingLatex": "\\text{KE lost} = 11.2\\ \\text{J}",
          "explanation": "Kinetic energy lost in the collision.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Smooth spheres",
          "workingLatex": "\\text{No friction at contact}",
          "explanation": "Standard A-level model for direct impacts.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Line of centres",
          "workingLatex": "\\text{Velocities along the line of impact}",
          "explanation": "In 1D all motion is along one axis.",
          "diagram": null
        }
      ],
      "finalAnswer": "KE lost $= 11.2\\ \\text{J}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Mechanics (Further Mechanics 1)",
    "subtopic": "Elastic collisions in one dimension",
    "subtopicId": "fm.y1.mech.collisions-1d",
    "questionDiagram": null,
    "id": "fm.y1.mech.collisions-1d.q039",
    "tags": [
      "ke-loss",
      "energy"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "numeric",
    "questionText": "Two equal $2\\ \\text{kg}$ spheres collide elastically. One moves at $4\\ \\text{m s}^{-1}$, the other is at rest. Find the kinetic energy lost.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Kinetic energy before impact",
          "workingLatex": "KE_{\\text{before}} = \\tfrac{1}{2}2(4)^2 + \\tfrac{1}{2}2(0)^2 = 16\\ \\text{J}",
          "explanation": "Sum the KE of both particles.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find final velocities",
          "workingLatex": "v_1 = 0,\\quad v_2 = 4",
          "explanation": "Use momentum and restitution with $e = 1$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Kinetic energy after impact",
          "workingLatex": "KE_{\\text{after}} = \\tfrac{1}{2}2(0)^2 + \\tfrac{1}{2}2(4)^2 = 16\\ \\text{J}",
          "explanation": "Calculate total KE after collision.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Energy loss",
          "workingLatex": "\\Delta KE = KE_{\\text{after}} - KE_{\\text{before}} = 0\\ \\text{J}",
          "explanation": "Negative value means energy is lost.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Magnitude of loss",
          "workingLatex": "\\text{Loss} = 0\\ \\text{J}",
          "explanation": "Report the energy dissipated.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Link to $e$",
          "workingLatex": "\\text{No KE lost when } e = 1",
          "explanation": "Only perfectly elastic collisions conserve kinetic energy.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Answer",
          "workingLatex": "\\text{KE lost} = 0\\ \\text{J}",
          "explanation": "Kinetic energy lost in the collision.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Smooth spheres",
          "workingLatex": "\\text{No friction at contact}",
          "explanation": "Standard A-level model for direct impacts.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Line of centres",
          "workingLatex": "\\text{Velocities along the line of impact}",
          "explanation": "In 1D all motion is along one axis.",
          "diagram": null
        }
      ],
      "finalAnswer": "KE lost $= 0\\ \\text{J}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Mechanics (Further Mechanics 1)",
    "subtopic": "Elastic collisions in one dimension",
    "subtopicId": "fm.y1.mech.collisions-1d",
    "questionDiagram": null,
    "id": "fm.y1.mech.collisions-1d.q040",
    "tags": [
      "ke-loss",
      "energy"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "numeric",
    "questionText": "Particles of mass $5\\ \\text{kg}$ and $3\\ \\text{kg}$ move at $10\\ \\text{m s}^{-1}$ and $-2\\ \\text{m s}^{-1}$. Given $e = 0.5$, find the KE lost.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Kinetic energy before impact",
          "workingLatex": "KE_{\\text{before}} = \\tfrac{1}{2}5(10)^2 + \\tfrac{1}{2}3(-2)^2 = 256\\ \\text{J}",
          "explanation": "Sum the KE of both particles.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find final velocities",
          "workingLatex": "v_1 = 3.25,\\quad v_2 = 9.25",
          "explanation": "Use momentum and restitution with $e = 0.5$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Kinetic energy after impact",
          "workingLatex": "KE_{\\text{after}} = \\tfrac{1}{2}5(3.25)^2 + \\tfrac{1}{2}3(9.25)^2 = 154.75\\ \\text{J}",
          "explanation": "Calculate total KE after collision.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Energy loss",
          "workingLatex": "\\Delta KE = KE_{\\text{after}} - KE_{\\text{before}} = -101.25\\ \\text{J}",
          "explanation": "Negative value means energy is lost.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Magnitude of loss",
          "workingLatex": "\\text{Loss} = 101.25\\ \\text{J}",
          "explanation": "Report the energy dissipated.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Link to $e$",
          "workingLatex": "\\text{KE lost when } e < 1",
          "explanation": "Only perfectly elastic collisions conserve kinetic energy.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Answer",
          "workingLatex": "\\text{KE lost} = 101.25\\ \\text{J}",
          "explanation": "Kinetic energy lost in the collision.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Smooth spheres",
          "workingLatex": "\\text{No friction at contact}",
          "explanation": "Standard A-level model for direct impacts.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Line of centres",
          "workingLatex": "\\text{Velocities along the line of impact}",
          "explanation": "In 1D all motion is along one axis.",
          "diagram": null
        }
      ],
      "finalAnswer": "KE lost $= 101.25\\ \\text{J}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Mechanics (Further Mechanics 1)",
    "subtopic": "Elastic collisions in one dimension",
    "subtopicId": "fm.y1.mech.collisions-1d",
    "questionDiagram": null,
    "id": "fm.y1.mech.collisions-1d.q041",
    "tags": [
      "given-v2",
      "two-body",
      "find-velocity"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "numeric",
    "questionText": "A $2\\ \\text{kg}$ particle at $5\\ \\text{m s}^{-1}$ collides with a $3\\ \\text{kg}$ particle at rest. Given $e = 0.8$ and the $3\\ \\text{kg}$ particle moves at 3.6 m s$^{-1}$ after impact, find the velocity of the $2\\ \\text{kg}$ particle.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Conservation of momentum",
          "workingLatex": "2 u_1 + 3 u_2 = 2 v_1 + 3 v_2",
          "explanation": "Total momentum before equals total momentum after.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Restitution",
          "workingLatex": "v_2 - v_1 = 0.8(u_1 - u_2)",
          "explanation": "Newton's law links the relative velocities.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute",
          "workingLatex": "2(5) + 3(0) = 2 v_1 + 3 v_2",
          "explanation": "Insert the given initial velocities.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Known final velocity",
          "workingLatex": "v_2 = 3.6",
          "explanation": "Use the given final speed of one particle.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve for unknown",
          "workingLatex": "v_1 = -0.4",
          "explanation": "Substitute into both equations.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check restitution",
          "workingLatex": "v_2 - v_1 = 4",
          "explanation": "Should equal 4.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Answer",
          "workingLatex": "v_1 = -0.4\\ \\text{m s}^{-1}",
          "explanation": "Required final velocity.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Smooth spheres",
          "workingLatex": "\\text{No friction at contact}",
          "explanation": "Standard A-level model for direct impacts.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Line of centres",
          "workingLatex": "\\text{Velocities along the line of impact}",
          "explanation": "In 1D all motion is along one axis.",
          "diagram": null
        }
      ],
      "finalAnswer": "$v_1 = -0.4\\ \\text{m s}^{-1}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Mechanics (Further Mechanics 1)",
    "subtopic": "Elastic collisions in one dimension",
    "subtopicId": "fm.y1.mech.collisions-1d",
    "questionDiagram": null,
    "id": "fm.y1.mech.collisions-1d.q042",
    "tags": [
      "given-v1",
      "two-body",
      "find-velocity"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "numeric",
    "questionText": "A $3\\ \\text{kg}$ particle at $6\\ \\text{m s}^{-1}$ hits a $2\\ \\text{kg}$ particle at rest. Given $e = 0.5$ and the $3\\ \\text{kg}$ particle moves at 2.4 m s$^{-1}$ after impact, find the velocity of the $2\\ \\text{kg}$ particle.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Conservation of momentum",
          "workingLatex": "3 u_1 + 2 u_2 = 3 v_1 + 2 v_2",
          "explanation": "Total momentum before equals total momentum after.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Restitution",
          "workingLatex": "v_2 - v_1 = 0.5(u_1 - u_2)",
          "explanation": "Newton's law links the relative velocities.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute",
          "workingLatex": "3(6) + 2(0) = 3 v_1 + 2 v_2",
          "explanation": "Insert the given initial velocities.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Known final velocity",
          "workingLatex": "v_1 = 2.4",
          "explanation": "Use the given final speed of one particle.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve for unknown",
          "workingLatex": "v_2 = 5.4",
          "explanation": "Substitute into both equations.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check restitution",
          "workingLatex": "v_2 - v_1 = 3",
          "explanation": "Should equal 3.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Answer",
          "workingLatex": "v_2 = 5.4\\ \\text{m s}^{-1}",
          "explanation": "Required final velocity.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Smooth spheres",
          "workingLatex": "\\text{No friction at contact}",
          "explanation": "Standard A-level model for direct impacts.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Line of centres",
          "workingLatex": "\\text{Velocities along the line of impact}",
          "explanation": "In 1D all motion is along one axis.",
          "diagram": null
        }
      ],
      "finalAnswer": "$v_2 = 5.4\\ \\text{m s}^{-1}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Mechanics (Further Mechanics 1)",
    "subtopic": "Elastic collisions in one dimension",
    "subtopicId": "fm.y1.mech.collisions-1d",
    "questionDiagram": null,
    "id": "fm.y1.mech.collisions-1d.q043",
    "tags": [
      "wall",
      "rebound"
    ],
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "numeric",
    "questionText": "A $5\\ \\text{kg}$ smooth sphere moving at $4\\ \\text{m s}^{-1}$ hits a vertical wall. Given $e = 0.5$, find the rebound speed.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Impact with a smooth fixed wall",
          "workingLatex": "e = \\dfrac{\\text{speed of separation}}{\\text{speed of approach}}",
          "explanation": "The wall is modelled as a body of infinite mass that does not move.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Approach speed",
          "workingLatex": "\\text{Approach speed} = 4\\ \\text{m s}^{-1}",
          "explanation": "Speed just before impact, measured along the normal to the wall.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Separation speed",
          "workingLatex": "\\text{Separation speed} = e \\times 4",
          "explanation": "The rebound speed equals $e$ times the approach speed.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Rebound velocity",
          "workingLatex": "v = -2\\ \\text{m s}^{-1}",
          "explanation": "Take the sign opposite to the approach direction.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Momentum note",
          "workingLatex": "\\text{Wall exerts large impulse}",
          "explanation": "The wall absorbs momentum without moving appreciably.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "v = -2\\ \\text{m s}^{-1}",
          "explanation": "Rebound speed along the line of motion.",
          "diagram": null
        }
      ],
      "finalAnswer": "$v = -2\\ \\text{m s}^{-1}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Mechanics (Further Mechanics 1)",
    "subtopic": "Elastic collisions in one dimension",
    "subtopicId": "fm.y1.mech.collisions-1d",
    "questionDiagram": null,
    "id": "fm.y1.mech.collisions-1d.q044",
    "tags": [
      "impulse"
    ],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "numeric",
    "questionText": "A $5\\ \\text{kg}$ particle hits a wall at $4\\ \\text{m s}^{-1}$ and rebounds at $2\\ \\text{m s}^{-1}$. Find the impulse on the particle.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Impulse–momentum",
          "workingLatex": "I = m(v - u)",
          "explanation": "Impulse equals change in momentum.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute",
          "workingLatex": "I = 5(-2 - 4)",
          "explanation": "Insert mass and velocities.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Calculate change",
          "workingLatex": "I = 5 \\times -6",
          "explanation": "Subtract initial from final velocity.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate",
          "workingLatex": "I = -30\\ \\text{N s}",
          "explanation": "Magnitude of impulse (include sign for direction).",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Direction",
          "workingLatex": "\\text{Impulse acts in negative direction}",
          "explanation": "The sign shows which way the impulse acts.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "I = -30\\ \\text{N s}",
          "explanation": "Impulse on the particle during the collision.",
          "diagram": null
        }
      ],
      "finalAnswer": "$I = -30\\ \\text{N s}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Mechanics (Further Mechanics 1)",
    "subtopic": "Elastic collisions in one dimension",
    "subtopicId": "fm.y1.mech.collisions-1d",
    "questionDiagram": null,
    "id": "fm.y1.mech.collisions-1d.q045",
    "tags": [
      "elastic",
      "e-equals-1"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "numeric",
    "questionText": "A $4\\ \\text{kg}$ particle at $6\\ \\text{m s}^{-1}$ collides elastically with a $2\\ \\text{kg}$ particle at rest. Find both final velocities.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Perfectly elastic collision",
          "workingLatex": "e = 1",
          "explanation": "Kinetic energy as well as momentum is conserved.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Conservation of momentum",
          "workingLatex": "4(6) + 2(0) = 4 v_1 + 2 v_2",
          "explanation": "Total momentum is conserved.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Restitution with $e = 1$",
          "workingLatex": "v_2 - v_1 = u_1 - u_2",
          "explanation": "Separation speed equals approach speed.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Solve",
          "workingLatex": "v_1 = 2,\\quad v_2 = 8",
          "explanation": "Solve the pair of simultaneous equations.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check kinetic energy",
          "workingLatex": "\\tfrac{1}{2}4(6)^2 + \\tfrac{1}{2}2(0)^2 = \\tfrac{1}{2}4(2)^2 + \\tfrac{1}{2}2(8)^2",
          "explanation": "Total KE is unchanged.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Special case",
          "workingLatex": "\\text{Use general formulae}",
          "explanation": "Equal-mass head-on elastic collisions swap velocities.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Answer",
          "workingLatex": "v_1 = 2\\ \\text{m s}^{-1},\\quad v_2 = 8\\ \\text{m s}^{-1}",
          "explanation": "Final velocities.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Smooth spheres",
          "workingLatex": "\\text{No friction at contact}",
          "explanation": "Standard A-level model for direct impacts.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Line of centres",
          "workingLatex": "\\text{Velocities along the line of impact}",
          "explanation": "In 1D all motion is along one axis.",
          "diagram": null
        }
      ],
      "finalAnswer": "$v_1 = 2\\ \\text{m s}^{-1}$, $v_2 = 8\\ \\text{m s}^{-1}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Mechanics (Further Mechanics 1)",
    "subtopic": "Elastic collisions in one dimension",
    "subtopicId": "fm.y1.mech.collisions-1d",
    "questionDiagram": null,
    "id": "fm.y1.mech.collisions-1d.q046",
    "tags": [
      "successive",
      "wall-then-particle",
      "multi-step"
    ],
    "difficulty": "Hard",
    "marks": 9,
    "answerType": "numeric",
    "questionText": "A smooth sphere of mass $2\\ \\text{kg}$ moving at $6\\ \\text{m s}^{-1}$ hits a smooth vertical wall ($e = 0.6$), rebounds, and then collides with a $3\\ \\text{kg}$ sphere at rest. The particle–particle collision has $e = 0.8$. Find the velocity of the $3\\ \\text{kg}$ sphere after the second collision.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Stage 1: wall impact",
          "workingLatex": "v = -eu = -0.6 \\times 6 = -3.6\\ \\text{m s}^{-1}",
          "explanation": "The sphere rebounds from the wall.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Stage 2: collision with 3 kg",
          "workingLatex": "2(-3.6) + 3(0) = 2v_1 + 3v_2",
          "explanation": "Conservation of momentum for the particle collision.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Restitution for stage 2",
          "workingLatex": "v_2 - v_1 = 0.8(-3.6 - 0) = -2.88",
          "explanation": "Apply Newton's law with $e = 0.8$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Solve",
          "workingLatex": "v_2 = -2.592",
          "explanation": "Solve the simultaneous equations.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Interpret",
          "workingLatex": "\\text{Two-stage problem}",
          "explanation": "Apply wall restitution first, then particle collision.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check momentum",
          "workingLatex": "\\text{Total momentum conserved at each stage}",
          "explanation": "Verify at each impact.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Answer",
          "workingLatex": "v_2 = -2.592\\ \\text{m s}^{-1}",
          "explanation": "Final velocity of the $3\\ \\text{kg}$ sphere.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Smooth spheres",
          "workingLatex": "\\text{No friction at contact}",
          "explanation": "Standard A-level model for direct impacts.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Line of centres",
          "workingLatex": "\\text{Velocities along the line of impact}",
          "explanation": "In 1D all motion is along one axis.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Sign convention",
          "workingLatex": "\\text{Choose positive direction first}",
          "explanation": "Consistent signs prevent errors.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Restitution range",
          "workingLatex": "0 \\le e \\le 1",
          "explanation": "Real collisions have $e$ between 0 and 1.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Momentum conserved",
          "workingLatex": "\\text{No external impulse along the line}",
          "explanation": "Internal collision forces cancel in pairs.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "KE and e",
          "workingLatex": "e = 1 \\Leftrightarrow \\text{KE conserved}",
          "explanation": "Only perfectly elastic collisions conserve kinetic energy.",
          "diagram": null
        }
      ],
      "finalAnswer": "$v_2 = -2.592\\ \\text{m s}^{-1}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Mechanics (Further Mechanics 1)",
    "subtopic": "Elastic collisions in one dimension",
    "subtopicId": "fm.y1.mech.collisions-1d",
    "questionDiagram": null,
    "id": "fm.y1.mech.collisions-1d.q047",
    "tags": [
      "proof",
      "equal-mass",
      "multi-step"
    ],
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "written",
    "questionText": "A smooth sphere of mass $m\\ \\text{kg}$ moving at speed $u\\ \\text{m s}^{-1}$ collides elastically with an identical sphere at rest. Show that they exchange velocities.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up",
          "workingLatex": "m_1 = m_2 = m,\\; u_2 = 0,\\; e = 1",
          "explanation": "Equal masses, one at rest, perfectly elastic.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Momentum",
          "workingLatex": "mu + 0 = mv_1 + mv_2",
          "explanation": "Total momentum is $mu$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Simplify",
          "workingLatex": "u = v_1 + v_2",
          "explanation": "Divide by $m$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Restitution",
          "workingLatex": "v_2 - v_1 = u - 0 = u",
          "explanation": "With $e = 1$, separation equals approach.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Add equations",
          "workingLatex": "2v_2 = 2u \\Rightarrow v_2 = u",
          "explanation": "Adding momentum and restitution equations.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute back",
          "workingLatex": "v_1 = u - u = 0",
          "explanation": "The moving sphere stops.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Conclusion",
          "workingLatex": "\\text{Velocities are exchanged}",
          "explanation": "The stationary sphere leaves at speed $u$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Answer",
          "workingLatex": "v_1 = 0,\\; v_2 = u",
          "explanation": "Equal-mass elastic collision swaps speeds.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Smooth spheres",
          "workingLatex": "\\text{No friction at contact}",
          "explanation": "Standard A-level model for direct impacts.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Line of centres",
          "workingLatex": "\\text{Velocities along the line of impact}",
          "explanation": "In 1D all motion is along one axis.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Sign convention",
          "workingLatex": "\\text{Choose positive direction first}",
          "explanation": "Consistent signs prevent errors.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Restitution range",
          "workingLatex": "0 \\le e \\le 1",
          "explanation": "Real collisions have $e$ between 0 and 1.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Momentum conserved",
          "workingLatex": "\\text{No external impulse along the line}",
          "explanation": "Internal collision forces cancel in pairs.",
          "diagram": null
        }
      ],
      "finalAnswer": "The moving sphere stops and the stationary sphere moves at speed $u$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Mechanics (Further Mechanics 1)",
    "subtopic": "Elastic collisions in one dimension",
    "subtopicId": "fm.y1.mech.collisions-1d",
    "questionDiagram": null,
    "id": "fm.y1.mech.collisions-1d.q048",
    "tags": [
      "impulse",
      "two-body",
      "multi-step"
    ],
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "numeric",
    "questionText": "A $2\\ \\text{kg}$ particle at $8\\ \\text{m s}^{-1}$ collides with a $1\\ \\text{kg}$ particle at rest. Given $e = 0.5$, find both final velocities and the impulse on the $1\\ \\text{kg}$ particle.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Momentum",
          "workingLatex": "2(8) + 0 = 2v_1 + v_2",
          "explanation": "Conservation of momentum.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Restitution",
          "workingLatex": "v_2 - v_1 = 0.5(8 - 0) = 4",
          "explanation": "Newton's law with $e = 0.5$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Solve",
          "workingLatex": "v_1 = 4,\\quad v_2 = 8",
          "explanation": "Simultaneous equations.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Impulse on 1 kg",
          "workingLatex": "I = 1(8 - 0) = 8\\ \\text{N s}",
          "explanation": "Impulse equals change in momentum.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Impulse on 2 kg",
          "workingLatex": "I = 2(4 - 8) = -8\\ \\text{N s}",
          "explanation": "Equal and opposite.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "KE check",
          "workingLatex": "\\text{KE lost} = 16\\ \\text{J}",
          "explanation": "Energy is dissipated when $e < 1$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Answer",
          "workingLatex": "v_1 = 4,\\; v_2 = 8,\\; I = 8\\ \\text{N s}",
          "explanation": "Velocities and impulse.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Smooth spheres",
          "workingLatex": "\\text{No friction at contact}",
          "explanation": "Standard A-level model for direct impacts.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Line of centres",
          "workingLatex": "\\text{Velocities along the line of impact}",
          "explanation": "In 1D all motion is along one axis.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Sign convention",
          "workingLatex": "\\text{Choose positive direction first}",
          "explanation": "Consistent signs prevent errors.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Restitution range",
          "workingLatex": "0 \\le e \\le 1",
          "explanation": "Real collisions have $e$ between 0 and 1.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Momentum conserved",
          "workingLatex": "\\text{No external impulse along the line}",
          "explanation": "Internal collision forces cancel in pairs.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "KE and e",
          "workingLatex": "e = 1 \\Leftrightarrow \\text{KE conserved}",
          "explanation": "Only perfectly elastic collisions conserve kinetic energy.",
          "diagram": null
        }
      ],
      "finalAnswer": "$v_1 = 4\\ \\text{m s}^{-1}$, $v_2 = 8\\ \\text{m s}^{-1}$, impulse $= 8\\ \\text{N s}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Mechanics (Further Mechanics 1)",
    "subtopic": "Elastic collisions in one dimension",
    "subtopicId": "fm.y1.mech.collisions-1d",
    "questionDiagram": null,
    "id": "fm.y1.mech.collisions-1d.q049",
    "tags": [
      "successive",
      "three-body",
      "multi-step"
    ],
    "difficulty": "Hard",
    "marks": 9,
    "answerType": "numeric",
    "questionText": "A $3\\ \\text{kg}$ particle at $6\\ \\text{m s}^{-1}$ collides with a $2\\ \\text{kg}$ particle at rest ($e = 0.5$). The $2\\ \\text{kg}$ particle then collides with a $4\\ \\text{kg}$ particle at rest ($e = 0.5$). Find the final velocity of the $4\\ \\text{kg}$ particle.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "First collision: 3 kg and 2 kg",
          "workingLatex": "v_{2\\text{kg}} = 5.4\\ \\text{m s}^{-1}",
          "explanation": "Find velocity of the $2\\ \\text{kg}$ particle after first impact.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Second collision: 2 kg and 4 kg",
          "workingLatex": "2(5.4) + 0 = 2v + 4V",
          "explanation": "The $2\\ \\text{kg}$ particle hits the $4\\ \\text{kg}$ particle.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Restitution",
          "workingLatex": "V - v = 0.5(5.4 - 0)",
          "explanation": "Apply Newton's law for the second collision.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Solve",
          "workingLatex": "V = 4.5\\ \\text{m s}^{-1}",
          "explanation": "Velocity of the $4\\ \\text{kg}$ particle.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Sequential collisions",
          "workingLatex": "\\text{Apply conservation at each stage}",
          "explanation": "Each collision is solved separately.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Overall momentum",
          "workingLatex": "3(6) = 3(2.4) + 2(5.4) + 4(4.5)",
          "explanation": "Total momentum conserved throughout.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Answer",
          "workingLatex": "V = 4.5\\ \\text{m s}^{-1}",
          "explanation": "Final velocity of the $4\\ \\text{kg}$ particle.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Smooth spheres",
          "workingLatex": "\\text{No friction at contact}",
          "explanation": "Standard A-level model for direct impacts.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Line of centres",
          "workingLatex": "\\text{Velocities along the line of impact}",
          "explanation": "In 1D all motion is along one axis.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Sign convention",
          "workingLatex": "\\text{Choose positive direction first}",
          "explanation": "Consistent signs prevent errors.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Restitution range",
          "workingLatex": "0 \\le e \\le 1",
          "explanation": "Real collisions have $e$ between 0 and 1.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Momentum conserved",
          "workingLatex": "\\text{No external impulse along the line}",
          "explanation": "Internal collision forces cancel in pairs.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "KE and e",
          "workingLatex": "e = 1 \\Leftrightarrow \\text{KE conserved}",
          "explanation": "Only perfectly elastic collisions conserve kinetic energy.",
          "diagram": null
        }
      ],
      "finalAnswer": "$V = 4.5\\ \\text{m s}^{-1}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Mechanics (Further Mechanics 1)",
    "subtopic": "Elastic collisions in one dimension",
    "subtopicId": "fm.y1.mech.collisions-1d",
    "questionDiagram": null,
    "id": "fm.y1.mech.collisions-1d.q050",
    "tags": [
      "wall-then-elastic",
      "multi-step"
    ],
    "difficulty": "Hard",
    "marks": 9,
    "answerType": "numeric",
    "questionText": "A particle of mass $2\\ \\text{kg}$ moving at $5\\ \\text{m s}^{-1}$ hits a smooth wall ($e = 0.8$) and rebounds into a $3\\ \\text{kg}$ particle at rest. The particle–particle collision is perfectly elastic. Find the final velocity of the $3\\ \\text{kg}$ particle.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Rebound from wall",
          "workingLatex": "v = -0.8 \\times 5 = -4\\ \\text{m s}^{-1}",
          "explanation": "Speed after wall impact.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Elastic collision with 3 kg",
          "workingLatex": "2(-4) + 0 = 2v_1 + 3v_2",
          "explanation": "Momentum conserved.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Restitution $e = 1$",
          "workingLatex": "v_2 - v_1 = -4 - 0 = -4",
          "explanation": "Perfectly elastic particle collision.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Solve",
          "workingLatex": "v_2 = -3.2\\ \\text{m s}^{-1}",
          "explanation": "Final velocity of the $3\\ \\text{kg}$ particle.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "KE conserved",
          "workingLatex": "\\text{No energy lost in particle collision}",
          "explanation": "Elastic means $e = 1$ for the second impact.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Note wall loss",
          "workingLatex": "\\text{KE lost at wall only}",
          "explanation": "The wall impact dissipates energy.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Answer",
          "workingLatex": "v_2 = -3.2\\ \\text{m s}^{-1}",
          "explanation": "Velocity of the $3\\ \\text{kg}$ particle.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Smooth spheres",
          "workingLatex": "\\text{No friction at contact}",
          "explanation": "Standard A-level model for direct impacts.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Line of centres",
          "workingLatex": "\\text{Velocities along the line of impact}",
          "explanation": "In 1D all motion is along one axis.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Sign convention",
          "workingLatex": "\\text{Choose positive direction first}",
          "explanation": "Consistent signs prevent errors.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Restitution range",
          "workingLatex": "0 \\le e \\le 1",
          "explanation": "Real collisions have $e$ between 0 and 1.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Momentum conserved",
          "workingLatex": "\\text{No external impulse along the line}",
          "explanation": "Internal collision forces cancel in pairs.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "KE and e",
          "workingLatex": "e = 1 \\Leftrightarrow \\text{KE conserved}",
          "explanation": "Only perfectly elastic collisions conserve kinetic energy.",
          "diagram": null
        }
      ],
      "finalAnswer": "$v_2 = -3.2\\ \\text{m s}^{-1}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Mechanics (Further Mechanics 1)",
    "subtopic": "Elastic collisions in one dimension",
    "subtopicId": "fm.y1.mech.collisions-1d",
    "questionDiagram": null,
    "id": "fm.y1.mech.collisions-1d.q051",
    "tags": [
      "two-body",
      "restitution"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "numeric",
    "questionText": "A $6\\ \\text{kg}$ particle at $3\\ \\text{m s}^{-1}$ overtakes a $2\\ \\text{kg}$ particle at $1\\ \\text{m s}^{-1}$. Given $e = 0.75$, find both final velocities.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Choose positive direction",
          "workingLatex": "\\text{State direction along the line}",
          "explanation": "Consistent signs are essential in one-dimensional collision problems.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Conservation of momentum",
          "workingLatex": "m_1 u_1 + m_2 u_2 = m_1 v_1 + m_2 v_2",
          "explanation": "No external impulse along the line, so total momentum is conserved.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Newton's law of restitution",
          "workingLatex": "v_2 - v_1 = e(u_1 - u_2)",
          "explanation": "The relative separation speed equals $e$ times the relative approach speed.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute known values",
          "workingLatex": "6(3) + 2(1) = 6 v_1 + 2 v_2",
          "explanation": "Insert masses and velocities before impact.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Total initial momentum",
          "workingLatex": "20 = 6 v_1 + 2 v_2",
          "explanation": "Sum the momentum of both particles.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Restitution equation",
          "workingLatex": "v_2 - v_1 = 0.75(3 - 1) = 1.5",
          "explanation": "Substitute $e$ and the approach speed.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Solve simultaneously",
          "workingLatex": "v_1 = 2.125,\\quad v_2 = 3.625",
          "explanation": "Use substitution or the standard collision formulae.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Verify momentum",
          "workingLatex": "6(2.125) + 2(3.625) = 20",
          "explanation": "Check that total momentum is unchanged.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "v_1 = 2.125\\ \\text{m s}^{-1},\\quad v_2 = 3.625\\ \\text{m s}^{-1}",
          "explanation": "Final velocities of both particles.",
          "diagram": null
        }
      ],
      "finalAnswer": "$v_1 = 2.125\\ \\text{m s}^{-1}$, $v_2 = 3.625\\ \\text{m s}^{-1}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Mechanics (Further Mechanics 1)",
    "subtopic": "Elastic collisions in one dimension",
    "subtopicId": "fm.y1.mech.collisions-1d",
    "questionDiagram": null,
    "id": "fm.y1.mech.collisions-1d.q052",
    "tags": [
      "two-body",
      "restitution"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "numeric",
    "questionText": "Particles of mass $1\\ \\text{kg}$ and $4\\ \\text{kg}$ move at $12\\ \\text{m s}^{-1}$ and $-3\\ \\text{m s}^{-1}$. Given $e = 0.6$, find their velocities after collision.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Choose positive direction",
          "workingLatex": "\\text{State direction along the line}",
          "explanation": "Consistent signs are essential in one-dimensional collision problems.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Conservation of momentum",
          "workingLatex": "m_1 u_1 + m_2 u_2 = m_1 v_1 + m_2 v_2",
          "explanation": "No external impulse along the line, so total momentum is conserved.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Newton's law of restitution",
          "workingLatex": "v_2 - v_1 = e(u_1 - u_2)",
          "explanation": "The relative separation speed equals $e$ times the relative approach speed.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute known values",
          "workingLatex": "1(12) + 4(-3) = 1 v_1 + 4 v_2",
          "explanation": "Insert masses and velocities before impact.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Total initial momentum",
          "workingLatex": "0 = 1 v_1 + 4 v_2",
          "explanation": "Sum the momentum of both particles.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Restitution equation",
          "workingLatex": "v_2 - v_1 = 0.6(12 - -3) = 9",
          "explanation": "Substitute $e$ and the approach speed.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Solve simultaneously",
          "workingLatex": "v_1 = -7.2,\\quad v_2 = 1.8",
          "explanation": "Use substitution or the standard collision formulae.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Verify momentum",
          "workingLatex": "1(-7.2) + 4(1.8) = 0",
          "explanation": "Check that total momentum is unchanged.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "v_1 = -7.2\\ \\text{m s}^{-1},\\quad v_2 = 1.8\\ \\text{m s}^{-1}",
          "explanation": "Final velocities of both particles.",
          "diagram": null
        }
      ],
      "finalAnswer": "$v_1 = -7.2\\ \\text{m s}^{-1}$, $v_2 = 1.8\\ \\text{m s}^{-1}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Mechanics (Further Mechanics 1)",
    "subtopic": "Elastic collisions in one dimension",
    "subtopicId": "fm.y1.mech.collisions-1d",
    "questionDiagram": null,
    "id": "fm.y1.mech.collisions-1d.q053",
    "tags": [
      "two-body",
      "restitution"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "numeric",
    "questionText": "A $5\\ \\text{kg}$ particle at rest is hit from behind by another $5\\ \\text{kg}$ particle at $8\\ \\text{m s}^{-1}$. Given $e = 0.4$, find both final velocities.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Choose positive direction",
          "workingLatex": "\\text{State direction along the line}",
          "explanation": "Consistent signs are essential in one-dimensional collision problems.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Conservation of momentum",
          "workingLatex": "m_1 u_1 + m_2 u_2 = m_1 v_1 + m_2 v_2",
          "explanation": "No external impulse along the line, so total momentum is conserved.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Newton's law of restitution",
          "workingLatex": "v_2 - v_1 = e(u_1 - u_2)",
          "explanation": "The relative separation speed equals $e$ times the relative approach speed.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute known values",
          "workingLatex": "5(0) + 5(8) = 5 v_1 + 5 v_2",
          "explanation": "Insert masses and velocities before impact.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Total initial momentum",
          "workingLatex": "40 = 5 v_1 + 5 v_2",
          "explanation": "Sum the momentum of both particles.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Restitution equation",
          "workingLatex": "v_2 - v_1 = 0.4(0 - 8) = -3.2",
          "explanation": "Substitute $e$ and the approach speed.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Solve simultaneously",
          "workingLatex": "v_1 = 5.6,\\quad v_2 = 2.4",
          "explanation": "Use substitution or the standard collision formulae.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Verify momentum",
          "workingLatex": "5(5.6) + 5(2.4) = 40",
          "explanation": "Check that total momentum is unchanged.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "v_1 = 5.6\\ \\text{m s}^{-1},\\quad v_2 = 2.4\\ \\text{m s}^{-1}",
          "explanation": "Final velocities of both particles.",
          "diagram": null
        }
      ],
      "finalAnswer": "$v_1 = 5.6\\ \\text{m s}^{-1}$, $v_2 = 2.4\\ \\text{m s}^{-1}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Mechanics (Further Mechanics 1)",
    "subtopic": "Elastic collisions in one dimension",
    "subtopicId": "fm.y1.mech.collisions-1d",
    "questionDiagram": null,
    "id": "fm.y1.mech.collisions-1d.q054",
    "tags": [
      "elastic",
      "e-equals-1"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "numeric",
    "questionText": "An $8\\ \\text{kg}$ particle at $2\\ \\text{m s}^{-1}$ collides elastically with a $2\\ \\text{kg}$ particle at $6\\ \\text{m s}^{-1}$ in the same direction. Find both final velocities.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Perfectly elastic collision",
          "workingLatex": "e = 1",
          "explanation": "Kinetic energy as well as momentum is conserved.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Conservation of momentum",
          "workingLatex": "8(2) + 2(6) = 8 v_1 + 2 v_2",
          "explanation": "Total momentum is conserved.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Restitution with $e = 1$",
          "workingLatex": "v_2 - v_1 = u_1 - u_2",
          "explanation": "Separation speed equals approach speed.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Solve",
          "workingLatex": "v_1 = 3.6,\\quad v_2 = -0.4",
          "explanation": "Solve the pair of simultaneous equations.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check kinetic energy",
          "workingLatex": "\\tfrac{1}{2}8(2)^2 + \\tfrac{1}{2}2(6)^2 = \\tfrac{1}{2}8(3.6)^2 + \\tfrac{1}{2}2(-0.4)^2",
          "explanation": "Total KE is unchanged.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Special case",
          "workingLatex": "\\text{Use general formulae}",
          "explanation": "Equal-mass head-on elastic collisions swap velocities.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Answer",
          "workingLatex": "v_1 = 3.6\\ \\text{m s}^{-1},\\quad v_2 = -0.4\\ \\text{m s}^{-1}",
          "explanation": "Final velocities.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Smooth spheres",
          "workingLatex": "\\text{No friction at contact}",
          "explanation": "Standard A-level model for direct impacts.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Line of centres",
          "workingLatex": "\\text{Velocities along the line of impact}",
          "explanation": "In 1D all motion is along one axis.",
          "diagram": null
        }
      ],
      "finalAnswer": "$v_1 = 3.6\\ \\text{m s}^{-1}$, $v_2 = -0.4\\ \\text{m s}^{-1}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Mechanics (Further Mechanics 1)",
    "subtopic": "Elastic collisions in one dimension",
    "subtopicId": "fm.y1.mech.collisions-1d",
    "questionDiagram": null,
    "id": "fm.y1.mech.collisions-1d.q055",
    "tags": [
      "two-body",
      "restitution"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "numeric",
    "questionText": "A $3\\ \\text{kg}$ particle at $4\\ \\text{m s}^{-1}$ meets a $6\\ \\text{kg}$ particle at $-2\\ \\text{m s}^{-1}$. Given $e = 0.5$, find both final velocities.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Choose positive direction",
          "workingLatex": "\\text{State direction along the line}",
          "explanation": "Consistent signs are essential in one-dimensional collision problems.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Conservation of momentum",
          "workingLatex": "m_1 u_1 + m_2 u_2 = m_1 v_1 + m_2 v_2",
          "explanation": "No external impulse along the line, so total momentum is conserved.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Newton's law of restitution",
          "workingLatex": "v_2 - v_1 = e(u_1 - u_2)",
          "explanation": "The relative separation speed equals $e$ times the relative approach speed.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute known values",
          "workingLatex": "3(4) + 6(-2) = 3 v_1 + 6 v_2",
          "explanation": "Insert masses and velocities before impact.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Total initial momentum",
          "workingLatex": "0 = 3 v_1 + 6 v_2",
          "explanation": "Sum the momentum of both particles.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Restitution equation",
          "workingLatex": "v_2 - v_1 = 0.5(4 - -2) = 3",
          "explanation": "Substitute $e$ and the approach speed.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Solve simultaneously",
          "workingLatex": "v_1 = -2,\\quad v_2 = 1",
          "explanation": "Use substitution or the standard collision formulae.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Verify momentum",
          "workingLatex": "3(-2) + 6(1) = 0",
          "explanation": "Check that total momentum is unchanged.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "v_1 = -2\\ \\text{m s}^{-1},\\quad v_2 = 1\\ \\text{m s}^{-1}",
          "explanation": "Final velocities of both particles.",
          "diagram": null
        }
      ],
      "finalAnswer": "$v_1 = -2\\ \\text{m s}^{-1}$, $v_2 = 1\\ \\text{m s}^{-1}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Mechanics (Further Mechanics 1)",
    "subtopic": "Elastic collisions in one dimension",
    "subtopicId": "fm.y1.mech.collisions-1d",
    "questionDiagram": null,
    "id": "fm.y1.mech.collisions-1d.q056",
    "tags": [
      "ke-loss",
      "energy"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "numeric",
    "questionText": "A $2\\ \\text{kg}$ particle at $10\\ \\text{m s}^{-1}$ hits a $1\\ \\text{kg}$ particle at rest with $e = 0.5$. Find the KE lost.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Kinetic energy before impact",
          "workingLatex": "KE_{\\text{before}} = \\tfrac{1}{2}2(10)^2 + \\tfrac{1}{2}1(0)^2 = 100\\ \\text{J}",
          "explanation": "Sum the KE of both particles.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find final velocities",
          "workingLatex": "v_1 = 5,\\quad v_2 = 10",
          "explanation": "Use momentum and restitution with $e = 0.5$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Kinetic energy after impact",
          "workingLatex": "KE_{\\text{after}} = \\tfrac{1}{2}2(5)^2 + \\tfrac{1}{2}1(10)^2 = 75\\ \\text{J}",
          "explanation": "Calculate total KE after collision.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Energy loss",
          "workingLatex": "\\Delta KE = KE_{\\text{after}} - KE_{\\text{before}} = -25\\ \\text{J}",
          "explanation": "Negative value means energy is lost.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Magnitude of loss",
          "workingLatex": "\\text{Loss} = 25\\ \\text{J}",
          "explanation": "Report the energy dissipated.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Link to $e$",
          "workingLatex": "\\text{KE lost when } e < 1",
          "explanation": "Only perfectly elastic collisions conserve kinetic energy.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Answer",
          "workingLatex": "\\text{KE lost} = 25\\ \\text{J}",
          "explanation": "Kinetic energy lost in the collision.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Smooth spheres",
          "workingLatex": "\\text{No friction at contact}",
          "explanation": "Standard A-level model for direct impacts.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Line of centres",
          "workingLatex": "\\text{Velocities along the line of impact}",
          "explanation": "In 1D all motion is along one axis.",
          "diagram": null
        }
      ],
      "finalAnswer": "KE lost $= 25\\ \\text{J}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Mechanics (Further Mechanics 1)",
    "subtopic": "Elastic collisions in one dimension",
    "subtopicId": "fm.y1.mech.collisions-1d",
    "questionDiagram": null,
    "id": "fm.y1.mech.collisions-1d.q057",
    "tags": [
      "ke-loss",
      "energy"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "numeric",
    "questionText": "A $4\\ \\text{kg}$ particle at $5\\ \\text{m s}^{-1}$ collides with a $2\\ \\text{kg}$ particle at rest. Given $e = 0.25$, find the kinetic energy lost.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Kinetic energy before impact",
          "workingLatex": "KE_{\\text{before}} = \\tfrac{1}{2}4(5)^2 + \\tfrac{1}{2}2(0)^2 = 50\\ \\text{J}",
          "explanation": "Sum the KE of both particles.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find final velocities",
          "workingLatex": "v_1 = 2.9167,\\quad v_2 = 4.1667",
          "explanation": "Use momentum and restitution with $e = 0.25$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Kinetic energy after impact",
          "workingLatex": "KE_{\\text{after}} = \\tfrac{1}{2}4(2.9167)^2 + \\tfrac{1}{2}2(4.1667)^2 = 34.375\\ \\text{J}",
          "explanation": "Calculate total KE after collision.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Energy loss",
          "workingLatex": "\\Delta KE = KE_{\\text{after}} - KE_{\\text{before}} = -15.625\\ \\text{J}",
          "explanation": "Negative value means energy is lost.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Magnitude of loss",
          "workingLatex": "\\text{Loss} = 15.625\\ \\text{J}",
          "explanation": "Report the energy dissipated.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Link to $e$",
          "workingLatex": "\\text{KE lost when } e < 1",
          "explanation": "Only perfectly elastic collisions conserve kinetic energy.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Answer",
          "workingLatex": "\\text{KE lost} = 15.625\\ \\text{J}",
          "explanation": "Kinetic energy lost in the collision.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Smooth spheres",
          "workingLatex": "\\text{No friction at contact}",
          "explanation": "Standard A-level model for direct impacts.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Line of centres",
          "workingLatex": "\\text{Velocities along the line of impact}",
          "explanation": "In 1D all motion is along one axis.",
          "diagram": null
        }
      ],
      "finalAnswer": "KE lost $= 15.625\\ \\text{J}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Mechanics (Further Mechanics 1)",
    "subtopic": "Elastic collisions in one dimension",
    "subtopicId": "fm.y1.mech.collisions-1d",
    "questionDiagram": null,
    "id": "fm.y1.mech.collisions-1d.q058",
    "tags": [
      "proof",
      "wall",
      "ke-loss",
      "multi-step"
    ],
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "written",
    "questionText": "A smooth sphere hits a wall at $u\\ \\text{m s}^{-1}$ and rebounds at $eu\\ \\text{m s}^{-1}$. Show that the kinetic energy lost is $\\tfrac{1}{2}mu^2(1 - e^2)$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "KE before impact",
          "workingLatex": "KE_{\\text{before}} = \\tfrac{1}{2}mu^2",
          "explanation": "Particle approaching the wall.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "KE after impact",
          "workingLatex": "KE_{\\text{after}} = \\tfrac{1}{2}m(eu)^2 = \\tfrac{1}{2}me^2u^2",
          "explanation": "Rebound speed is $eu$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Energy loss",
          "workingLatex": "\\Delta KE = \\tfrac{1}{2}me^2u^2 - \\tfrac{1}{2}mu^2",
          "explanation": "Subtract initial from final.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Factor",
          "workingLatex": "\\Delta KE = \\tfrac{1}{2}mu^2(e^2 - 1)",
          "explanation": "Take out common factor.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Loss magnitude",
          "workingLatex": "\\text{Loss} = \\tfrac{1}{2}mu^2(1 - e^2)",
          "explanation": "Energy lost is positive when $e < 1$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Special cases",
          "workingLatex": "e = 1 \\Rightarrow \\text{no loss};\\; e = 0 \\Rightarrow \\text{all KE lost}",
          "explanation": "Boundary values check the formula.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Answer",
          "workingLatex": "\\text{KE lost} = \\tfrac{1}{2}mu^2(1 - e^2)",
          "explanation": "Standard result for wall impact.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Smooth spheres",
          "workingLatex": "\\text{No friction at contact}",
          "explanation": "Standard A-level model for direct impacts.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Line of centres",
          "workingLatex": "\\text{Velocities along the line of impact}",
          "explanation": "In 1D all motion is along one axis.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Sign convention",
          "workingLatex": "\\text{Choose positive direction first}",
          "explanation": "Consistent signs prevent errors.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Restitution range",
          "workingLatex": "0 \\le e \\le 1",
          "explanation": "Real collisions have $e$ between 0 and 1.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Momentum conserved",
          "workingLatex": "\\text{No external impulse along the line}",
          "explanation": "Internal collision forces cancel in pairs.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "KE and e",
          "workingLatex": "e = 1 \\Leftrightarrow \\text{KE conserved}",
          "explanation": "Only perfectly elastic collisions conserve kinetic energy.",
          "diagram": null
        }
      ],
      "finalAnswer": "KE lost $= \\tfrac{1}{2}mu^2(1 - e^2)$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Mechanics (Further Mechanics 1)",
    "subtopic": "Elastic collisions in one dimension",
    "subtopicId": "fm.y1.mech.collisions-1d",
    "questionDiagram": null,
    "id": "fm.y1.mech.collisions-1d.q059",
    "tags": [
      "find-e",
      "given-v1",
      "multi-step"
    ],
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "numeric",
    "questionText": "Two smooth spheres of masses $3\\ \\text{kg}$ and $2\\ \\text{kg}$ collide. Before impact their speeds are $6\\ \\text{m s}^{-1}$ and $1\\ \\text{m s}^{-1}$ in the same direction. After impact the $3\\ \\text{kg}$ sphere moves at $2\\ \\text{m s}^{-1}$. Find the speed of the $2\\ \\text{kg}$ sphere and the value of $e$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Momentum",
          "workingLatex": "3(6) + 2(1) = 3(2) + 2v_2",
          "explanation": "Conservation of momentum.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Solve for v_2",
          "workingLatex": "20 = 6 + 2v_2 \\Rightarrow v_2 = 7",
          "explanation": "Velocity of the $2\\ \\text{kg}$ sphere.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Restitution",
          "workingLatex": "e = \\dfrac{v_2 - v_1}{u_1 - u_2}",
          "explanation": "Newton's law.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute",
          "workingLatex": "e = \\dfrac{7 - 2}{6 - 1} = 1",
          "explanation": "Separation over approach.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Interpret",
          "workingLatex": "\\text{Perfectly elastic}",
          "explanation": "The collision conserves kinetic energy.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Verify KE",
          "workingLatex": "\\text{Total KE unchanged}",
          "explanation": "Check energy conservation.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Answer",
          "workingLatex": "v_2 = 7\\ \\text{m s}^{-1},\\; e = 1",
          "explanation": "Speed and coefficient of restitution.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Smooth spheres",
          "workingLatex": "\\text{No friction at contact}",
          "explanation": "Standard A-level model for direct impacts.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Line of centres",
          "workingLatex": "\\text{Velocities along the line of impact}",
          "explanation": "In 1D all motion is along one axis.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Sign convention",
          "workingLatex": "\\text{Choose positive direction first}",
          "explanation": "Consistent signs prevent errors.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Restitution range",
          "workingLatex": "0 \\le e \\le 1",
          "explanation": "Real collisions have $e$ between 0 and 1.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Momentum conserved",
          "workingLatex": "\\text{No external impulse along the line}",
          "explanation": "Internal collision forces cancel in pairs.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "KE and e",
          "workingLatex": "e = 1 \\Leftrightarrow \\text{KE conserved}",
          "explanation": "Only perfectly elastic collisions conserve kinetic energy.",
          "diagram": null
        }
      ],
      "finalAnswer": "$v_2 = 7\\ \\text{m s}^{-1}$, $e = 1$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Mechanics (Further Mechanics 1)",
    "subtopic": "Elastic collisions in one dimension",
    "subtopicId": "fm.y1.mech.collisions-1d",
    "questionDiagram": null,
    "id": "fm.y1.mech.collisions-1d.q060",
    "tags": [
      "overtake",
      "impulse",
      "multi-step"
    ],
    "difficulty": "Hard",
    "marks": 9,
    "answerType": "numeric",
    "questionText": "A $4\\ \\text{kg}$ particle moving at $5\\ \\text{m s}^{-1}$ collides with a $2\\ \\text{kg}$ particle moving at $2\\ \\text{m s}^{-1}$ in the same direction. Given $e = 0.5$, find both final velocities and the total impulse between the particles.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Momentum",
          "workingLatex": "4(5) + 2(2) = 4v_1 + 2v_2",
          "explanation": "Total momentum before impact.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Restitution",
          "workingLatex": "v_2 - v_1 = 0.5(5 - 2) = 1.5",
          "explanation": "Newton's law.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Solve",
          "workingLatex": "v_1 = 3.5,\\quad v_2 = 5",
          "explanation": "Simultaneous equations.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Impulse on 2 kg",
          "workingLatex": "I = 2(5 - 2) = 6\\ \\text{N s}",
          "explanation": "Change in momentum of lighter particle.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Impulse on 4 kg",
          "workingLatex": "I = 4(3.5 - 5) = -6\\ \\text{N s}",
          "explanation": "Equal and opposite.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "KE lost",
          "workingLatex": "\\text{Loss} = 4.5\\ \\text{J}",
          "explanation": "Energy dissipated.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Answer",
          "workingLatex": "v_1 = 3.5,\\; v_2 = 5",
          "explanation": "Final velocities.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Smooth spheres",
          "workingLatex": "\\text{No friction at contact}",
          "explanation": "Standard A-level model for direct impacts.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Line of centres",
          "workingLatex": "\\text{Velocities along the line of impact}",
          "explanation": "In 1D all motion is along one axis.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Sign convention",
          "workingLatex": "\\text{Choose positive direction first}",
          "explanation": "Consistent signs prevent errors.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Restitution range",
          "workingLatex": "0 \\le e \\le 1",
          "explanation": "Real collisions have $e$ between 0 and 1.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Momentum conserved",
          "workingLatex": "\\text{No external impulse along the line}",
          "explanation": "Internal collision forces cancel in pairs.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "KE and e",
          "workingLatex": "e = 1 \\Leftrightarrow \\text{KE conserved}",
          "explanation": "Only perfectly elastic collisions conserve kinetic energy.",
          "diagram": null
        }
      ],
      "finalAnswer": "$v_1 = 3.5\\ \\text{m s}^{-1}$, $v_2 = 5\\ \\text{m s}^{-1}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Mechanics (Further Mechanics 1)",
    "subtopic": "Elastic collisions in one dimension",
    "subtopicId": "fm.y1.mech.collisions-1d",
    "questionDiagram": null,
    "id": "fm.y1.mech.collisions-1d.q061",
    "tags": [
      "successive",
      "three-particle",
      "multi-step"
    ],
    "difficulty": "Hard",
    "marks": 10,
    "answerType": "numeric",
    "questionText": "Particle A ($2\\ \\text{kg}$) at $6\\ \\text{m s}^{-1}$ collides with B ($3\\ \\text{kg}$) at rest ($e = 0.6$). B then collides with C ($1\\ \\text{kg}$) at rest ($e = 0.8$). Find the final velocity of C.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "A hits B",
          "workingLatex": "v_B = 3.84\\ \\text{m s}^{-1}",
          "explanation": "Velocity of B after first collision.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "B hits C",
          "workingLatex": "3(3.84) + 0 = 3v_B' + v_C",
          "explanation": "Momentum for second collision.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Restitution B–C",
          "workingLatex": "v_C - v_B' = 0.8(3.84 - 0)",
          "explanation": "Newton's law for second impact.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Solve",
          "workingLatex": "v_C = 5.184\\ \\text{m s}^{-1}",
          "explanation": "Final velocity of C.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Three-particle chain",
          "workingLatex": "\\text{Solve each collision in sequence}",
          "explanation": "Standard successive collisions method.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Momentum check",
          "workingLatex": "2(6) = 2(0.24) + 3(3.84) + 1(5.184)",
          "explanation": "Total momentum conserved.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Answer",
          "workingLatex": "v_C = 5.184\\ \\text{m s}^{-1}",
          "explanation": "Final velocity of particle C.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Smooth spheres",
          "workingLatex": "\\text{No friction at contact}",
          "explanation": "Standard A-level model for direct impacts.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Line of centres",
          "workingLatex": "\\text{Velocities along the line of impact}",
          "explanation": "In 1D all motion is along one axis.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Sign convention",
          "workingLatex": "\\text{Choose positive direction first}",
          "explanation": "Consistent signs prevent errors.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Restitution range",
          "workingLatex": "0 \\le e \\le 1",
          "explanation": "Real collisions have $e$ between 0 and 1.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Momentum conserved",
          "workingLatex": "\\text{No external impulse along the line}",
          "explanation": "Internal collision forces cancel in pairs.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "KE and e",
          "workingLatex": "e = 1 \\Leftrightarrow \\text{KE conserved}",
          "explanation": "Only perfectly elastic collisions conserve kinetic energy.",
          "diagram": null
        }
      ],
      "finalAnswer": "$v_C = 5.184\\ \\text{m s}^{-1}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Mechanics (Further Mechanics 1)",
    "subtopic": "Elastic collisions in one dimension",
    "subtopicId": "fm.y1.mech.collisions-1d",
    "questionDiagram": null,
    "id": "fm.y1.mech.collisions-1d.q062",
    "tags": [
      "find-mass",
      "find-e",
      "multi-step"
    ],
    "difficulty": "Hard",
    "marks": 9,
    "answerType": "numeric",
    "questionText": "A particle of mass $3\\ \\text{kg}$ moving at $8\\ \\text{m s}^{-1}$ collides with a particle of mass $m\\ \\text{kg}$ at rest. After impact the $3\\ \\text{kg}$ particle moves at $2\\ \\text{m s}^{-1}$ and the other at $6\\ \\text{m s}^{-1}$. Find $m$ and $e$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Momentum",
          "workingLatex": "3(8) + 0 = 3(2) + m(6)",
          "explanation": "Conservation of momentum.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Solve for m",
          "workingLatex": "24 = 6 + 6m \\Rightarrow m = 3",
          "explanation": "Mass of the second particle.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Restitution",
          "workingLatex": "e = \\dfrac{6 - 2}{8 - 0} = 0.5",
          "explanation": "Separation over approach.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Verify momentum",
          "workingLatex": "3(8) = 3(2) + 3(6) = 24",
          "explanation": "Check with found mass.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "KE lost",
          "workingLatex": "\\text{Calculate energy dissipated}",
          "explanation": "Since $e < 1$, KE is not conserved.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "m = 3\\ \\text{kg},\\; e = 0.5",
          "explanation": "Mass and coefficient of restitution.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Smooth spheres",
          "workingLatex": "\\text{No friction at contact}",
          "explanation": "Standard A-level model for direct impacts.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Line of centres",
          "workingLatex": "\\text{Velocities along the line of impact}",
          "explanation": "In 1D all motion is along one axis.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Sign convention",
          "workingLatex": "\\text{Choose positive direction first}",
          "explanation": "Consistent signs prevent errors.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Restitution range",
          "workingLatex": "0 \\le e \\le 1",
          "explanation": "Real collisions have $e$ between 0 and 1.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Momentum conserved",
          "workingLatex": "\\text{No external impulse along the line}",
          "explanation": "Internal collision forces cancel in pairs.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "KE and e",
          "workingLatex": "e = 1 \\Leftrightarrow \\text{KE conserved}",
          "explanation": "Only perfectly elastic collisions conserve kinetic energy.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Wall model",
          "workingLatex": "\\text{Infinite mass, zero velocity}",
          "explanation": "A fixed wall does not move.",
          "diagram": null
        }
      ],
      "finalAnswer": "$m = 3\\ \\text{kg}$, $e = 0.5$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Mechanics (Further Mechanics 1)",
    "subtopic": "Elastic collisions in one dimension",
    "subtopicId": "fm.y1.mech.collisions-1d",
    "questionDiagram": null,
    "id": "fm.y1.mech.collisions-1d.q063",
    "tags": [
      "two-body",
      "restitution"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "numeric",
    "questionText": "A $10\\ \\text{kg}$ particle at $1\\ \\text{m s}^{-1}$ collides with a $5\\ \\text{kg}$ particle at rest. Given $e = 0.9$, find both final velocities.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Choose positive direction",
          "workingLatex": "\\text{State direction along the line}",
          "explanation": "Consistent signs are essential in one-dimensional collision problems.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Conservation of momentum",
          "workingLatex": "m_1 u_1 + m_2 u_2 = m_1 v_1 + m_2 v_2",
          "explanation": "No external impulse along the line, so total momentum is conserved.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Newton's law of restitution",
          "workingLatex": "v_2 - v_1 = e(u_1 - u_2)",
          "explanation": "The relative separation speed equals $e$ times the relative approach speed.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute known values",
          "workingLatex": "10(1) + 5(0) = 10 v_1 + 5 v_2",
          "explanation": "Insert masses and velocities before impact.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Total initial momentum",
          "workingLatex": "10 = 10 v_1 + 5 v_2",
          "explanation": "Sum the momentum of both particles.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Restitution equation",
          "workingLatex": "v_2 - v_1 = 0.9(1 - 0) = 0.9",
          "explanation": "Substitute $e$ and the approach speed.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Solve simultaneously",
          "workingLatex": "v_1 = 0.3667,\\quad v_2 = 1.2667",
          "explanation": "Use substitution or the standard collision formulae.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Verify momentum",
          "workingLatex": "10(0.3667) + 5(1.2667) = 10",
          "explanation": "Check that total momentum is unchanged.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "v_1 = 0.3667\\ \\text{m s}^{-1},\\quad v_2 = 1.2667\\ \\text{m s}^{-1}",
          "explanation": "Final velocities of both particles.",
          "diagram": null
        }
      ],
      "finalAnswer": "$v_1 = 0.3667\\ \\text{m s}^{-1}$, $v_2 = 1.2667\\ \\text{m s}^{-1}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Mechanics (Further Mechanics 1)",
    "subtopic": "Elastic collisions in one dimension",
    "subtopicId": "fm.y1.mech.collisions-1d",
    "questionDiagram": null,
    "id": "fm.y1.mech.collisions-1d.q064",
    "tags": [
      "two-body",
      "restitution"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "numeric",
    "questionText": "A $2\\ \\text{kg}$ particle at $3\\ \\text{m s}^{-1}$ collides with an $8\\ \\text{kg}$ particle at $-1\\ \\text{m s}^{-1}$. Given $e = 0.7$, find both final velocities.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Choose positive direction",
          "workingLatex": "\\text{State direction along the line}",
          "explanation": "Consistent signs are essential in one-dimensional collision problems.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Conservation of momentum",
          "workingLatex": "m_1 u_1 + m_2 u_2 = m_1 v_1 + m_2 v_2",
          "explanation": "No external impulse along the line, so total momentum is conserved.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Newton's law of restitution",
          "workingLatex": "v_2 - v_1 = e(u_1 - u_2)",
          "explanation": "The relative separation speed equals $e$ times the relative approach speed.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute known values",
          "workingLatex": "2(3) + 8(-1) = 2 v_1 + 8 v_2",
          "explanation": "Insert masses and velocities before impact.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Total initial momentum",
          "workingLatex": "-2 = 2 v_1 + 8 v_2",
          "explanation": "Sum the momentum of both particles.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Restitution equation",
          "workingLatex": "v_2 - v_1 = 0.7(3 - -1) = 2.8",
          "explanation": "Substitute $e$ and the approach speed.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Solve simultaneously",
          "workingLatex": "v_1 = -2.44,\\quad v_2 = 0.36",
          "explanation": "Use substitution or the standard collision formulae.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Verify momentum",
          "workingLatex": "2(-2.44) + 8(0.36) = -2",
          "explanation": "Check that total momentum is unchanged.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "v_1 = -2.44\\ \\text{m s}^{-1},\\quad v_2 = 0.36\\ \\text{m s}^{-1}",
          "explanation": "Final velocities of both particles.",
          "diagram": null
        }
      ],
      "finalAnswer": "$v_1 = -2.44\\ \\text{m s}^{-1}$, $v_2 = 0.36\\ \\text{m s}^{-1}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Mechanics (Further Mechanics 1)",
    "subtopic": "Elastic collisions in one dimension",
    "subtopicId": "fm.y1.mech.collisions-1d",
    "questionDiagram": null,
    "id": "fm.y1.mech.collisions-1d.q065",
    "tags": [
      "head-on",
      "impulse",
      "ke-loss",
      "multi-step"
    ],
    "difficulty": "Hard",
    "marks": 10,
    "answerType": "numeric",
    "questionText": "A smooth sphere of mass $2\\ \\text{kg}$ at $4\\ \\text{m s}^{-1}$ collides with a $2\\ \\text{kg}$ sphere at $-2\\ \\text{m s}^{-1}$. Given $e = 0.5$, find both final velocities, the impulse on each sphere, and the kinetic energy lost.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Momentum",
          "workingLatex": "2(4) + 2(-2) = 2v_1 + 2v_2",
          "explanation": "Total initial momentum is $4$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Simplify",
          "workingLatex": "v_1 + v_2 = 2",
          "explanation": "Divide by 2.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Restitution",
          "workingLatex": "v_2 - v_1 = 0.5(4 - (-2)) = 3",
          "explanation": "Approach speed is $6$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Solve",
          "workingLatex": "v_1 = -0.5,\\quad v_2 = 2.5",
          "explanation": "Add and subtract equations.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Impulse on sphere 1",
          "workingLatex": "I = 2(-0.5 - 4) = -9\\ \\text{N s}",
          "explanation": "Change in momentum.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "KE lost",
          "workingLatex": "\\text{Loss} = 13.5\\ \\text{J}",
          "explanation": "Energy dissipated.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Answer",
          "workingLatex": "v_1 = -0.5,\\; v_2 = 2.5",
          "explanation": "Final velocities.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Smooth spheres",
          "workingLatex": "\\text{No friction at contact}",
          "explanation": "Standard A-level model for direct impacts.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Line of centres",
          "workingLatex": "\\text{Velocities along the line of impact}",
          "explanation": "In 1D all motion is along one axis.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Sign convention",
          "workingLatex": "\\text{Choose positive direction first}",
          "explanation": "Consistent signs prevent errors.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Restitution range",
          "workingLatex": "0 \\le e \\le 1",
          "explanation": "Real collisions have $e$ between 0 and 1.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Momentum conserved",
          "workingLatex": "\\text{No external impulse along the line}",
          "explanation": "Internal collision forces cancel in pairs.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "KE and e",
          "workingLatex": "e = 1 \\Leftrightarrow \\text{KE conserved}",
          "explanation": "Only perfectly elastic collisions conserve kinetic energy.",
          "diagram": null
        }
      ],
      "finalAnswer": "$v_1 = -0.5\\ \\text{m s}^{-1}$, $v_2 = 2.5\\ \\text{m s}^{-1}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Mechanics (Further Mechanics 1)",
    "subtopic": "Elastic collisions in one dimension",
    "subtopicId": "fm.y1.mech.collisions-1d",
    "questionDiagram": null,
    "id": "fm.y1.mech.collisions-1d.q066",
    "tags": [
      "wall",
      "rebound"
    ],
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "numeric",
    "questionText": "A $3\\ \\text{kg}$ particle strikes a smooth wall at $10\\ \\text{m s}^{-1}$. Given $e = 0.8$, find the rebound speed and the kinetic energy lost.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Impact with a smooth fixed wall",
          "workingLatex": "e = \\dfrac{\\text{speed of separation}}{\\text{speed of approach}}",
          "explanation": "The wall is modelled as a body of infinite mass that does not move.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Approach speed",
          "workingLatex": "\\text{Approach speed} = 10\\ \\text{m s}^{-1}",
          "explanation": "Speed just before impact, measured along the normal to the wall.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Separation speed",
          "workingLatex": "\\text{Separation speed} = e \\times 10",
          "explanation": "The rebound speed equals $e$ times the approach speed.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Rebound velocity",
          "workingLatex": "v = -8\\ \\text{m s}^{-1}",
          "explanation": "Take the sign opposite to the approach direction.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Momentum note",
          "workingLatex": "\\text{Wall exerts large impulse}",
          "explanation": "The wall absorbs momentum without moving appreciably.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "v = -8\\ \\text{m s}^{-1}",
          "explanation": "Rebound speed along the line of motion.",
          "diagram": null
        }
      ],
      "finalAnswer": "$v = -8\\ \\text{m s}^{-1}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Mechanics (Further Mechanics 1)",
    "subtopic": "Elastic collisions in one dimension",
    "subtopicId": "fm.y1.mech.collisions-1d",
    "questionDiagram": null,
    "id": "fm.y1.mech.collisions-1d.q067",
    "tags": [
      "impulse"
    ],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "numeric",
    "questionText": "A $3\\ \\text{kg}$ particle hits a wall at $10\\ \\text{m s}^{-1}$ and rebounds at $8\\ \\text{m s}^{-1}$. Find the impulse on the particle.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Impulse–momentum",
          "workingLatex": "I = m(v - u)",
          "explanation": "Impulse equals change in momentum.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute",
          "workingLatex": "I = 3(-8 - 10)",
          "explanation": "Insert mass and velocities.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Calculate change",
          "workingLatex": "I = 3 \\times -18",
          "explanation": "Subtract initial from final velocity.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate",
          "workingLatex": "I = -54\\ \\text{N s}",
          "explanation": "Magnitude of impulse (include sign for direction).",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Direction",
          "workingLatex": "\\text{Impulse acts in negative direction}",
          "explanation": "The sign shows which way the impulse acts.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "I = -54\\ \\text{N s}",
          "explanation": "Impulse on the particle during the collision.",
          "diagram": null
        }
      ],
      "finalAnswer": "$I = -54\\ \\text{N s}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Mechanics (Further Mechanics 1)",
    "subtopic": "Elastic collisions in one dimension",
    "subtopicId": "fm.y1.mech.collisions-1d",
    "questionDiagram": null,
    "id": "fm.y1.mech.collisions-1d.q068",
    "tags": [
      "head-on",
      "ke-loss",
      "multi-step"
    ],
    "difficulty": "Hard",
    "marks": 9,
    "answerType": "numeric",
    "questionText": "Particles of mass $4\\ \\text{kg}$ and $1\\ \\text{kg}$ move towards each other at $5\\ \\text{m s}^{-1}$ and $3\\ \\text{m s}^{-1}$. Given $e = 0.6$, find both final velocities and show that kinetic energy is lost.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Assign directions",
          "workingLatex": "u_1 = 5,\\; u_2 = -3",
          "explanation": "Opposite directions along the line.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Momentum",
          "workingLatex": "4(5) + 1(-3) = 4v_1 + v_2",
          "explanation": "Total initial momentum is $17$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Restitution",
          "workingLatex": "v_2 - v_1 = 0.6(5 - (-3)) = 4.8",
          "explanation": "Approach speed is $8$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Solve",
          "workingLatex": "v_1 = 2.44,\\quad v_2 = 7.24",
          "explanation": "Simultaneous equations.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "KE before",
          "workingLatex": "KE = \\tfrac{1}{2}(4)(25) + \\tfrac{1}{2}(1)(9) = 54.5\\ \\text{J}",
          "explanation": "Total kinetic energy before.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "KE after",
          "workingLatex": "KE = 38.116\\ \\text{J}",
          "explanation": "Total after is less.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Conclusion",
          "workingLatex": "\\text{KE is lost when } e < 1",
          "explanation": "Energy dissipated in the collision.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Answer",
          "workingLatex": "v_1 = 2.44,\\; v_2 = 7.24",
          "explanation": "Final velocities.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Smooth spheres",
          "workingLatex": "\\text{No friction at contact}",
          "explanation": "Standard A-level model for direct impacts.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Line of centres",
          "workingLatex": "\\text{Velocities along the line of impact}",
          "explanation": "In 1D all motion is along one axis.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Sign convention",
          "workingLatex": "\\text{Choose positive direction first}",
          "explanation": "Consistent signs prevent errors.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Restitution range",
          "workingLatex": "0 \\le e \\le 1",
          "explanation": "Real collisions have $e$ between 0 and 1.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Momentum conserved",
          "workingLatex": "\\text{No external impulse along the line}",
          "explanation": "Internal collision forces cancel in pairs.",
          "diagram": null
        }
      ],
      "finalAnswer": "$v_1 = 2.44\\ \\text{m s}^{-1}$, $v_2 = 7.24\\ \\text{m s}^{-1}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Mechanics (Further Mechanics 1)",
    "subtopic": "Elastic collisions in one dimension",
    "subtopicId": "fm.y1.mech.collisions-1d",
    "questionDiagram": null,
    "id": "fm.y1.mech.collisions-1d.q069",
    "tags": [
      "two-body",
      "restitution"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "numeric",
    "questionText": "Two $5\\ \\text{kg}$ particles move at $12\\ \\text{m s}^{-1}$ and $4\\ \\text{m s}^{-1}$ in the same direction. Given $e = 0.5$, find both final velocities.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Choose positive direction",
          "workingLatex": "\\text{State direction along the line}",
          "explanation": "Consistent signs are essential in one-dimensional collision problems.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Conservation of momentum",
          "workingLatex": "m_1 u_1 + m_2 u_2 = m_1 v_1 + m_2 v_2",
          "explanation": "No external impulse along the line, so total momentum is conserved.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Newton's law of restitution",
          "workingLatex": "v_2 - v_1 = e(u_1 - u_2)",
          "explanation": "The relative separation speed equals $e$ times the relative approach speed.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute known values",
          "workingLatex": "5(12) + 5(4) = 5 v_1 + 5 v_2",
          "explanation": "Insert masses and velocities before impact.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Total initial momentum",
          "workingLatex": "80 = 5 v_1 + 5 v_2",
          "explanation": "Sum the momentum of both particles.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Restitution equation",
          "workingLatex": "v_2 - v_1 = 0.5(12 - 4) = 4",
          "explanation": "Substitute $e$ and the approach speed.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Solve simultaneously",
          "workingLatex": "v_1 = 6,\\quad v_2 = 10",
          "explanation": "Use substitution or the standard collision formulae.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Verify momentum",
          "workingLatex": "5(6) + 5(10) = 80",
          "explanation": "Check that total momentum is unchanged.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "v_1 = 6\\ \\text{m s}^{-1},\\quad v_2 = 10\\ \\text{m s}^{-1}",
          "explanation": "Final velocities of both particles.",
          "diagram": null
        }
      ],
      "finalAnswer": "$v_1 = 6\\ \\text{m s}^{-1}$, $v_2 = 10\\ \\text{m s}^{-1}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Mechanics (Further Mechanics 1)",
    "subtopic": "Elastic collisions in one dimension",
    "subtopicId": "fm.y1.mech.collisions-1d",
    "questionDiagram": null,
    "id": "fm.y1.mech.collisions-1d.q070",
    "tags": [
      "rebound",
      "find-e",
      "multi-step"
    ],
    "difficulty": "Hard",
    "marks": 9,
    "answerType": "numeric",
    "questionText": "A smooth sphere of mass $2\\ \\text{kg}$ moving at $7\\ \\text{m s}^{-1}$ collides with a $4\\ \\text{kg}$ sphere at rest. The coefficient of restitution is $e$. After impact the $2\\ \\text{kg}$ sphere moves at $-1\\ \\text{m s}^{-1}$ (i.e. it rebounds). Find $e$ and the velocity of the $4\\ \\text{kg}$ sphere.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Momentum",
          "workingLatex": "2(7) + 0 = 2(-1) + 4v_2",
          "explanation": "Conservation of momentum.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Solve for v_2",
          "workingLatex": "14 = -2 + 4v_2 \\Rightarrow v_2 = 4",
          "explanation": "The heavier sphere moves forward at $4\\ \\text{m s}^{-1}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Restitution",
          "workingLatex": "e = \\dfrac{v_2 - v_1}{u_1 - u_2} = \\dfrac{4 - (-1)}{7 - 0}",
          "explanation": "Newton's law.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Calculate e",
          "workingLatex": "e = \\dfrac{5}{7}",
          "explanation": "Coefficient of restitution.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Physical check",
          "workingLatex": "\\text{Lighter sphere rebounds}",
          "explanation": "The $2\\ \\text{kg}$ sphere reverses direction.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "KE lost",
          "workingLatex": "\\text{Loss} = 16\\ \\text{J}",
          "explanation": "Energy dissipated.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Answer",
          "workingLatex": "e = \\tfrac{5}{7},\\; v_2 = 4\\ \\text{m s}^{-1}",
          "explanation": "Restitution and final velocity.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Smooth spheres",
          "workingLatex": "\\text{No friction at contact}",
          "explanation": "Standard A-level model for direct impacts.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Line of centres",
          "workingLatex": "\\text{Velocities along the line of impact}",
          "explanation": "In 1D all motion is along one axis.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Sign convention",
          "workingLatex": "\\text{Choose positive direction first}",
          "explanation": "Consistent signs prevent errors.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Restitution range",
          "workingLatex": "0 \\le e \\le 1",
          "explanation": "Real collisions have $e$ between 0 and 1.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Momentum conserved",
          "workingLatex": "\\text{No external impulse along the line}",
          "explanation": "Internal collision forces cancel in pairs.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "KE and e",
          "workingLatex": "e = 1 \\Leftrightarrow \\text{KE conserved}",
          "explanation": "Only perfectly elastic collisions conserve kinetic energy.",
          "diagram": null
        }
      ],
      "finalAnswer": "$e = \\tfrac{5}{7}$, $v_2 = 4\\ \\text{m s}^{-1}$."
    }
  }
];
