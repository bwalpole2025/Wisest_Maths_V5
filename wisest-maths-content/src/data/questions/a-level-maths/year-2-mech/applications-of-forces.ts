import { Question } from "@/lib/types";

/**
 * A-Level Maths · Year 2 Mechanics · Applications of forces
 * Statics and dynamics of particles on slopes; connected bodies; pulleys;
 * lifts and apparent weight; rough and smooth planes. 70 questions with full worked solutions.
 */
export const questions: Question[] = 
[
  {
    "id": "al.y2.mech.applications-forces.q001",
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Applications of forces",
    "subtopicId": "al.y2.mech.applications-forces",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "written",
    "tags": [
      "slope",
      "resolving",
      "weight-components"
    ],
    "questionText": "A particle of mass $m$ rests on a smooth plane inclined at angle $\\alpha$ to the horizontal. Explain how to resolve the weight into components parallel and perpendicular to the plane, and state the magnitude of each component in terms of $m$, $g$, and $\\alpha$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Draw the weight vertically downward",
          "workingLatex": "W = mg",
          "explanation": "The weight acts vertically through the centre of the particle.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify the angle between weight and the plane",
          "workingLatex": "\\text{Angle between vertical and normal} = \\alpha",
          "explanation": "The normal is perpendicular to the plane, so the angle between weight and normal is $\\alpha$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Component perpendicular to the plane",
          "workingLatex": "W_{\\perp} = mg\\cos\\alpha",
          "explanation": "This component presses the particle into the plane.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Component parallel to the plane",
          "workingLatex": "W_{\\parallel} = mg\\sin\\alpha",
          "explanation": "This component tends to slide the particle down the slope.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Normal reaction on a smooth plane",
          "workingLatex": "R = mg\\cos\\alpha",
          "explanation": "With no perpendicular acceleration, the reaction balances $W_{\\perp}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Summarise",
          "workingLatex": "W_{\\parallel} = mg\\sin\\alpha, \\quad W_{\\perp} = mg\\cos\\alpha = R",
          "explanation": "Resolving weight is the first step in almost every slope problem.",
          "diagram": null
        }
      ],
      "finalAnswer": "$W_{\\parallel} = mg\\sin\\alpha$ down the plane; $W_{\\perp} = mg\\cos\\alpha = R$."
    }
  },
  {
    "id": "al.y2.mech.applications-forces.q002",
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Applications of forces",
    "subtopicId": "al.y2.mech.applications-forces",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "numeric",
    "tags": [
      "weight-components",
      "slope"
    ],
    "questionText": "A particle of mass $4\\,\\text{kg}$ is on a plane inclined at $30°$ to the horizontal. Taking $g = 9.8\\,\\text{m s}^{-2}$, find the components of the weight parallel and perpendicular to the plane.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Calculate the weight",
          "workingLatex": "W = mg = 4 \\times 9.8 = 39.20\\,\\text{N}",
          "explanation": "Weight $= 39.20\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Parallel component",
          "workingLatex": "W_{\\parallel} = W\\sin 30° = 39.20\\sin 30°",
          "explanation": "Use sine for the downslope component.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Evaluate parallel",
          "workingLatex": "W_{\\parallel} = 19.60\\,\\text{N}",
          "explanation": "$W_{\\parallel} = 19.60\\,\\text{N}$ down the plane.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Perpendicular component",
          "workingLatex": "W_{\\perp} = W\\cos 30° = 39.20\\cos 30°",
          "explanation": "Use cosine for the into-plane component.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate perpendicular",
          "workingLatex": "W_{\\perp} = 33.95\\,\\text{N}",
          "explanation": "$W_{\\perp} = 33.95\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "W_{\\parallel} = 19.60\\,\\text{N}, \\quad W_{\\perp} = 33.95\\,\\text{N}",
          "explanation": "Parallel: $19.60\\,\\text{N}$; perpendicular: $33.95\\,\\text{N}$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$W_{\\parallel} = 19.60\\,\\text{N}$, $W_{\\perp} = 33.95\\,\\text{N}$"
    }
  },
  {
    "id": "al.y2.mech.applications-forces.q003",
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Applications of forces",
    "subtopicId": "al.y2.mech.applications-forces",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "numeric",
    "tags": [
      "weight-components",
      "slope"
    ],
    "questionText": "A particle of mass $6\\,\\text{kg}$ is on a plane inclined at $25°$ to the horizontal. Taking $g = 9.8\\,\\text{m s}^{-2}$, find the components of the weight parallel and perpendicular to the plane.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Calculate the weight",
          "workingLatex": "W = mg = 6 \\times 9.8 = 58.80\\,\\text{N}",
          "explanation": "Weight $= 58.80\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Parallel component",
          "workingLatex": "W_{\\parallel} = W\\sin 25° = 58.80\\sin 25°",
          "explanation": "Use sine for the downslope component.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Evaluate parallel",
          "workingLatex": "W_{\\parallel} = 24.85\\,\\text{N}",
          "explanation": "$W_{\\parallel} = 24.85\\,\\text{N}$ down the plane.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Perpendicular component",
          "workingLatex": "W_{\\perp} = W\\cos 25° = 58.80\\cos 25°",
          "explanation": "Use cosine for the into-plane component.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate perpendicular",
          "workingLatex": "W_{\\perp} = 53.29\\,\\text{N}",
          "explanation": "$W_{\\perp} = 53.29\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "W_{\\parallel} = 24.85\\,\\text{N}, \\quad W_{\\perp} = 53.29\\,\\text{N}",
          "explanation": "Parallel: $24.85\\,\\text{N}$; perpendicular: $53.29\\,\\text{N}$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$W_{\\parallel} = 24.85\\,\\text{N}$, $W_{\\perp} = 53.29\\,\\text{N}$"
    }
  },
  {
    "id": "al.y2.mech.applications-forces.q004",
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Applications of forces",
    "subtopicId": "al.y2.mech.applications-forces",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "numeric",
    "tags": [
      "weight-components",
      "slope"
    ],
    "questionText": "A particle of mass $5\\,\\text{kg}$ is on a plane inclined at $40°$ to the horizontal. Taking $g = 9.8\\,\\text{m s}^{-2}$, find the components of the weight parallel and perpendicular to the plane.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Calculate the weight",
          "workingLatex": "W = mg = 5 \\times 9.8 = 49\\,\\text{N}",
          "explanation": "Weight $= 49\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Parallel component",
          "workingLatex": "W_{\\parallel} = W\\sin 40° = 49\\sin 40°",
          "explanation": "Use sine for the downslope component.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Evaluate parallel",
          "workingLatex": "W_{\\parallel} = 31.50\\,\\text{N}",
          "explanation": "$W_{\\parallel} = 31.50\\,\\text{N}$ down the plane.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Perpendicular component",
          "workingLatex": "W_{\\perp} = W\\cos 40° = 49\\cos 40°",
          "explanation": "Use cosine for the into-plane component.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate perpendicular",
          "workingLatex": "W_{\\perp} = 37.54\\,\\text{N}",
          "explanation": "$W_{\\perp} = 37.54\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "W_{\\parallel} = 31.50\\,\\text{N}, \\quad W_{\\perp} = 37.54\\,\\text{N}",
          "explanation": "Parallel: $31.50\\,\\text{N}$; perpendicular: $37.54\\,\\text{N}$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$W_{\\parallel} = 31.50\\,\\text{N}$, $W_{\\perp} = 37.54\\,\\text{N}$"
    }
  },
  {
    "id": "al.y2.mech.applications-forces.q005",
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Applications of forces",
    "subtopicId": "al.y2.mech.applications-forces",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "numeric",
    "tags": [
      "weight-components",
      "slope"
    ],
    "questionText": "A particle of mass $8\\,\\text{kg}$ is on a plane inclined at $20°$ to the horizontal. Taking $g = 9.8\\,\\text{m s}^{-2}$, find the components of the weight parallel and perpendicular to the plane.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Calculate the weight",
          "workingLatex": "W = mg = 8 \\times 9.8 = 78.40\\,\\text{N}",
          "explanation": "Weight $= 78.40\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Parallel component",
          "workingLatex": "W_{\\parallel} = W\\sin 20° = 78.40\\sin 20°",
          "explanation": "Use sine for the downslope component.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Evaluate parallel",
          "workingLatex": "W_{\\parallel} = 26.81\\,\\text{N}",
          "explanation": "$W_{\\parallel} = 26.81\\,\\text{N}$ down the plane.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Perpendicular component",
          "workingLatex": "W_{\\perp} = W\\cos 20° = 78.40\\cos 20°",
          "explanation": "Use cosine for the into-plane component.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate perpendicular",
          "workingLatex": "W_{\\perp} = 73.67\\,\\text{N}",
          "explanation": "$W_{\\perp} = 73.67\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "W_{\\parallel} = 26.81\\,\\text{N}, \\quad W_{\\perp} = 73.67\\,\\text{N}",
          "explanation": "Parallel: $26.81\\,\\text{N}$; perpendicular: $73.67\\,\\text{N}$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$W_{\\parallel} = 26.81\\,\\text{N}$, $W_{\\perp} = 73.67\\,\\text{N}$"
    }
  },
  {
    "id": "al.y2.mech.applications-forces.q006",
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Applications of forces",
    "subtopicId": "al.y2.mech.applications-forces",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "numeric",
    "tags": [
      "weight-components",
      "slope"
    ],
    "questionText": "A particle of mass $3\\,\\text{kg}$ is on a plane inclined at $35°$ to the horizontal. Taking $g = 9.8\\,\\text{m s}^{-2}$, find the components of the weight parallel and perpendicular to the plane.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Calculate the weight",
          "workingLatex": "W = mg = 3 \\times 9.8 = 29.40\\,\\text{N}",
          "explanation": "Weight $= 29.40\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Parallel component",
          "workingLatex": "W_{\\parallel} = W\\sin 35° = 29.40\\sin 35°",
          "explanation": "Use sine for the downslope component.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Evaluate parallel",
          "workingLatex": "W_{\\parallel} = 16.86\\,\\text{N}",
          "explanation": "$W_{\\parallel} = 16.86\\,\\text{N}$ down the plane.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Perpendicular component",
          "workingLatex": "W_{\\perp} = W\\cos 35° = 29.40\\cos 35°",
          "explanation": "Use cosine for the into-plane component.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate perpendicular",
          "workingLatex": "W_{\\perp} = 24.08\\,\\text{N}",
          "explanation": "$W_{\\perp} = 24.08\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "W_{\\parallel} = 16.86\\,\\text{N}, \\quad W_{\\perp} = 24.08\\,\\text{N}",
          "explanation": "Parallel: $16.86\\,\\text{N}$; perpendicular: $24.08\\,\\text{N}$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$W_{\\parallel} = 16.86\\,\\text{N}$, $W_{\\perp} = 24.08\\,\\text{N}$"
    }
  },
  {
    "id": "al.y2.mech.applications-forces.q007",
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Applications of forces",
    "subtopicId": "al.y2.mech.applications-forces",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "numeric",
    "tags": [
      "weight-components",
      "slope"
    ],
    "questionText": "A particle of mass $10\\,\\text{kg}$ is on a plane inclined at $15°$ to the horizontal. Taking $g = 9.8\\,\\text{m s}^{-2}$, find the components of the weight parallel and perpendicular to the plane.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Calculate the weight",
          "workingLatex": "W = mg = 10 \\times 9.8 = 98\\,\\text{N}",
          "explanation": "Weight $= 98\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Parallel component",
          "workingLatex": "W_{\\parallel} = W\\sin 15° = 98\\sin 15°",
          "explanation": "Use sine for the downslope component.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Evaluate parallel",
          "workingLatex": "W_{\\parallel} = 25.36\\,\\text{N}",
          "explanation": "$W_{\\parallel} = 25.36\\,\\text{N}$ down the plane.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Perpendicular component",
          "workingLatex": "W_{\\perp} = W\\cos 15° = 98\\cos 15°",
          "explanation": "Use cosine for the into-plane component.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate perpendicular",
          "workingLatex": "W_{\\perp} = 94.66\\,\\text{N}",
          "explanation": "$W_{\\perp} = 94.66\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "W_{\\parallel} = 25.36\\,\\text{N}, \\quad W_{\\perp} = 94.66\\,\\text{N}",
          "explanation": "Parallel: $25.36\\,\\text{N}$; perpendicular: $94.66\\,\\text{N}$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$W_{\\parallel} = 25.36\\,\\text{N}$, $W_{\\perp} = 94.66\\,\\text{N}$"
    }
  },
  {
    "id": "al.y2.mech.applications-forces.q008",
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Applications of forces",
    "subtopicId": "al.y2.mech.applications-forces",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "numeric",
    "tags": [
      "normal-reaction",
      "smooth-slope"
    ],
    "questionText": "A particle of mass $5\\,\\text{kg}$ rests on a smooth plane inclined at $30°$ to the horizontal. Taking $g = 9.8\\,\\text{m s}^{-2}$, find the normal reaction.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Resolve perpendicular to the plane",
          "workingLatex": "R = mg\\cos\\alpha",
          "explanation": "On a smooth plane, the reaction balances the perpendicular component of weight.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute",
          "workingLatex": "R = 5 \\times 9.8 \\times \\cos 30°",
          "explanation": "$m = 5\\,\\text{kg}$, $\\alpha = 30°$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Calculate",
          "workingLatex": "R = 42.44\\,\\text{N}",
          "explanation": "$R = 42.44\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Note no friction",
          "workingLatex": "\\text{Smooth plane } \\Rightarrow F = 0",
          "explanation": "Without friction, no force opposes motion along the plane.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Downslope component",
          "workingLatex": "mg\\sin 30° = 24.50\\,\\text{N}",
          "explanation": "The unbalanced parallel component causes acceleration.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "R = 42.44\\,\\text{N}",
          "explanation": "Normal reaction $= 42.44\\,\\text{N}$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$R = 42.44\\,\\text{N}$"
    }
  },
  {
    "id": "al.y2.mech.applications-forces.q009",
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Applications of forces",
    "subtopicId": "al.y2.mech.applications-forces",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "numeric",
    "tags": [
      "normal-reaction",
      "smooth-slope"
    ],
    "questionText": "A particle of mass $7\\,\\text{kg}$ rests on a smooth plane inclined at $25°$ to the horizontal. Taking $g = 9.8\\,\\text{m s}^{-2}$, find the normal reaction.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Resolve perpendicular to the plane",
          "workingLatex": "R = mg\\cos\\alpha",
          "explanation": "On a smooth plane, the reaction balances the perpendicular component of weight.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute",
          "workingLatex": "R = 7 \\times 9.8 \\times \\cos 25°",
          "explanation": "$m = 7\\,\\text{kg}$, $\\alpha = 25°$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Calculate",
          "workingLatex": "R = 62.17\\,\\text{N}",
          "explanation": "$R = 62.17\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Note no friction",
          "workingLatex": "\\text{Smooth plane } \\Rightarrow F = 0",
          "explanation": "Without friction, no force opposes motion along the plane.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Downslope component",
          "workingLatex": "mg\\sin 25° = 28.99\\,\\text{N}",
          "explanation": "The unbalanced parallel component causes acceleration.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "R = 62.17\\,\\text{N}",
          "explanation": "Normal reaction $= 62.17\\,\\text{N}$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$R = 62.17\\,\\text{N}$"
    }
  },
  {
    "id": "al.y2.mech.applications-forces.q010",
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Applications of forces",
    "subtopicId": "al.y2.mech.applications-forces",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "numeric",
    "tags": [
      "normal-reaction",
      "smooth-slope"
    ],
    "questionText": "A particle of mass $4\\,\\text{kg}$ rests on a smooth plane inclined at $40°$ to the horizontal. Taking $g = 9.8\\,\\text{m s}^{-2}$, find the normal reaction.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Resolve perpendicular to the plane",
          "workingLatex": "R = mg\\cos\\alpha",
          "explanation": "On a smooth plane, the reaction balances the perpendicular component of weight.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute",
          "workingLatex": "R = 4 \\times 9.8 \\times \\cos 40°",
          "explanation": "$m = 4\\,\\text{kg}$, $\\alpha = 40°$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Calculate",
          "workingLatex": "R = 30.03\\,\\text{N}",
          "explanation": "$R = 30.03\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Note no friction",
          "workingLatex": "\\text{Smooth plane } \\Rightarrow F = 0",
          "explanation": "Without friction, no force opposes motion along the plane.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Downslope component",
          "workingLatex": "mg\\sin 40° = 25.20\\,\\text{N}",
          "explanation": "The unbalanced parallel component causes acceleration.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "R = 30.03\\,\\text{N}",
          "explanation": "Normal reaction $= 30.03\\,\\text{N}$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$R = 30.03\\,\\text{N}$"
    }
  },
  {
    "id": "al.y2.mech.applications-forces.q011",
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Applications of forces",
    "subtopicId": "al.y2.mech.applications-forces",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "numeric",
    "tags": [
      "normal-reaction",
      "smooth-slope"
    ],
    "questionText": "A particle of mass $9\\,\\text{kg}$ rests on a smooth plane inclined at $20°$ to the horizontal. Taking $g = 9.8\\,\\text{m s}^{-2}$, find the normal reaction.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Resolve perpendicular to the plane",
          "workingLatex": "R = mg\\cos\\alpha",
          "explanation": "On a smooth plane, the reaction balances the perpendicular component of weight.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute",
          "workingLatex": "R = 9 \\times 9.8 \\times \\cos 20°",
          "explanation": "$m = 9\\,\\text{kg}$, $\\alpha = 20°$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Calculate",
          "workingLatex": "R = 82.88\\,\\text{N}",
          "explanation": "$R = 82.88\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Note no friction",
          "workingLatex": "\\text{Smooth plane } \\Rightarrow F = 0",
          "explanation": "Without friction, no force opposes motion along the plane.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Downslope component",
          "workingLatex": "mg\\sin 20° = 30.17\\,\\text{N}",
          "explanation": "The unbalanced parallel component causes acceleration.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "R = 82.88\\,\\text{N}",
          "explanation": "Normal reaction $= 82.88\\,\\text{N}$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$R = 82.88\\,\\text{N}$"
    }
  },
  {
    "id": "al.y2.mech.applications-forces.q012",
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Applications of forces",
    "subtopicId": "al.y2.mech.applications-forces",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "numeric",
    "tags": [
      "normal-reaction",
      "smooth-slope"
    ],
    "questionText": "A particle of mass $6\\,\\text{kg}$ rests on a smooth plane inclined at $35°$ to the horizontal. Taking $g = 9.8\\,\\text{m s}^{-2}$, find the normal reaction.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Resolve perpendicular to the plane",
          "workingLatex": "R = mg\\cos\\alpha",
          "explanation": "On a smooth plane, the reaction balances the perpendicular component of weight.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute",
          "workingLatex": "R = 6 \\times 9.8 \\times \\cos 35°",
          "explanation": "$m = 6\\,\\text{kg}$, $\\alpha = 35°$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Calculate",
          "workingLatex": "R = 48.17\\,\\text{N}",
          "explanation": "$R = 48.17\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Note no friction",
          "workingLatex": "\\text{Smooth plane } \\Rightarrow F = 0",
          "explanation": "Without friction, no force opposes motion along the plane.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Downslope component",
          "workingLatex": "mg\\sin 35° = 33.73\\,\\text{N}",
          "explanation": "The unbalanced parallel component causes acceleration.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "R = 48.17\\,\\text{N}",
          "explanation": "Normal reaction $= 48.17\\,\\text{N}$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$R = 48.17\\,\\text{N}$"
    }
  },
  {
    "id": "al.y2.mech.applications-forces.q013",
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Applications of forces",
    "subtopicId": "al.y2.mech.applications-forces",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "numeric",
    "tags": [
      "smooth-slope",
      "acceleration",
      "F=ma"
    ],
    "questionText": "A particle of mass $4\\,\\text{kg}$ slides down a smooth plane inclined at $30°$ to the horizontal. Taking $g = 9.8\\,\\text{m s}^{-2}$, find the acceleration of the particle.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Resolve along the plane",
          "workingLatex": "ma = mg\\sin\\alpha",
          "explanation": "The only force along the plane is the weight component; no friction on a smooth surface.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Cancel the mass",
          "workingLatex": "a = g\\sin\\alpha",
          "explanation": "Mass cancels — all particles accelerate at the same rate on a smooth slope.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute",
          "workingLatex": "a = 9.8\\sin 30°",
          "explanation": "$g = 9.8\\,\\text{m s}^{-2}$, $\\alpha = 30°$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Calculate",
          "workingLatex": "a = 4.90\\,\\text{m s}^{-2}",
          "explanation": "$a = 4.90\\,\\text{m s}^{-2}$ down the plane.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Direction",
          "workingLatex": "\\text{Acceleration is down the plane}",
          "explanation": "The weight component points downslope, so acceleration is downslope.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "a = 4.90\\,\\text{m s}^{-2}",
          "explanation": "Acceleration $= 4.90\\,\\text{m s}^{-2}$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$a = 4.90\\,\\text{m s}^{-2}$ down the plane"
    }
  },
  {
    "id": "al.y2.mech.applications-forces.q014",
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Applications of forces",
    "subtopicId": "al.y2.mech.applications-forces",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "numeric",
    "tags": [
      "smooth-slope",
      "acceleration",
      "F=ma"
    ],
    "questionText": "A particle of mass $6\\,\\text{kg}$ slides down a smooth plane inclined at $25°$ to the horizontal. Taking $g = 9.8\\,\\text{m s}^{-2}$, find the acceleration of the particle.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Resolve along the plane",
          "workingLatex": "ma = mg\\sin\\alpha",
          "explanation": "The only force along the plane is the weight component; no friction on a smooth surface.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Cancel the mass",
          "workingLatex": "a = g\\sin\\alpha",
          "explanation": "Mass cancels — all particles accelerate at the same rate on a smooth slope.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute",
          "workingLatex": "a = 9.8\\sin 25°",
          "explanation": "$g = 9.8\\,\\text{m s}^{-2}$, $\\alpha = 25°$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Calculate",
          "workingLatex": "a = 4.14\\,\\text{m s}^{-2}",
          "explanation": "$a = 4.14\\,\\text{m s}^{-2}$ down the plane.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Direction",
          "workingLatex": "\\text{Acceleration is down the plane}",
          "explanation": "The weight component points downslope, so acceleration is downslope.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "a = 4.14\\,\\text{m s}^{-2}",
          "explanation": "Acceleration $= 4.14\\,\\text{m s}^{-2}$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$a = 4.14\\,\\text{m s}^{-2}$ down the plane"
    }
  },
  {
    "id": "al.y2.mech.applications-forces.q015",
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Applications of forces",
    "subtopicId": "al.y2.mech.applications-forces",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "numeric",
    "tags": [
      "smooth-slope",
      "acceleration",
      "F=ma"
    ],
    "questionText": "A particle of mass $5\\,\\text{kg}$ slides down a smooth plane inclined at $40°$ to the horizontal. Taking $g = 9.8\\,\\text{m s}^{-2}$, find the acceleration of the particle.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Resolve along the plane",
          "workingLatex": "ma = mg\\sin\\alpha",
          "explanation": "The only force along the plane is the weight component; no friction on a smooth surface.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Cancel the mass",
          "workingLatex": "a = g\\sin\\alpha",
          "explanation": "Mass cancels — all particles accelerate at the same rate on a smooth slope.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute",
          "workingLatex": "a = 9.8\\sin 40°",
          "explanation": "$g = 9.8\\,\\text{m s}^{-2}$, $\\alpha = 40°$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Calculate",
          "workingLatex": "a = 6.30\\,\\text{m s}^{-2}",
          "explanation": "$a = 6.30\\,\\text{m s}^{-2}$ down the plane.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Direction",
          "workingLatex": "\\text{Acceleration is down the plane}",
          "explanation": "The weight component points downslope, so acceleration is downslope.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "a = 6.30\\,\\text{m s}^{-2}",
          "explanation": "Acceleration $= 6.30\\,\\text{m s}^{-2}$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$a = 6.30\\,\\text{m s}^{-2}$ down the plane"
    }
  },
  {
    "id": "al.y2.mech.applications-forces.q016",
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Applications of forces",
    "subtopicId": "al.y2.mech.applications-forces",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "numeric",
    "tags": [
      "smooth-slope",
      "acceleration",
      "F=ma"
    ],
    "questionText": "A particle of mass $8\\,\\text{kg}$ slides down a smooth plane inclined at $20°$ to the horizontal. Taking $g = 9.8\\,\\text{m s}^{-2}$, find the acceleration of the particle.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Resolve along the plane",
          "workingLatex": "ma = mg\\sin\\alpha",
          "explanation": "The only force along the plane is the weight component; no friction on a smooth surface.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Cancel the mass",
          "workingLatex": "a = g\\sin\\alpha",
          "explanation": "Mass cancels — all particles accelerate at the same rate on a smooth slope.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute",
          "workingLatex": "a = 9.8\\sin 20°",
          "explanation": "$g = 9.8\\,\\text{m s}^{-2}$, $\\alpha = 20°$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Calculate",
          "workingLatex": "a = 3.35\\,\\text{m s}^{-2}",
          "explanation": "$a = 3.35\\,\\text{m s}^{-2}$ down the plane.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Direction",
          "workingLatex": "\\text{Acceleration is down the plane}",
          "explanation": "The weight component points downslope, so acceleration is downslope.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "a = 3.35\\,\\text{m s}^{-2}",
          "explanation": "Acceleration $= 3.35\\,\\text{m s}^{-2}$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$a = 3.35\\,\\text{m s}^{-2}$ down the plane"
    }
  },
  {
    "id": "al.y2.mech.applications-forces.q017",
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Applications of forces",
    "subtopicId": "al.y2.mech.applications-forces",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "numeric",
    "tags": [
      "F=ma",
      "friction",
      "horizontal"
    ],
    "questionText": "A particle of mass $5\\,\\text{kg}$ is pulled along a rough horizontal surface with a horizontal force of $20\\,\\text{N}$. The coefficient of friction is $\\mu = 0.3$ and the particle is sliding. Taking $g = 9.8\\,\\text{m s}^{-2}$, find the acceleration.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Normal reaction",
          "workingLatex": "R = mg = 49\\,\\text{N}",
          "explanation": "$R = 49\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Friction (sliding)",
          "workingLatex": "F = \\mu R = 0.3 \\times 49 = 14.70\\,\\text{N}",
          "explanation": "Kinetic/limiting friction $= 14.70\\,\\text{N}$ opposing motion.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Apply Newton's second law",
          "workingLatex": "ma = P - F",
          "explanation": "Resultant force along the direction of motion equals mass times acceleration.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute",
          "workingLatex": "5a = 20 - 14.70",
          "explanation": "Pull $20\\,\\text{N}$, friction $14.70\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve for $a$",
          "workingLatex": "a = 1.06\\,\\text{m s}^{-2}",
          "explanation": "$a = 1.06\\,\\text{m s}^{-2}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "a = 1.06\\,\\text{m s}^{-2}",
          "explanation": "Acceleration $= 1.06\\,\\text{m s}^{-2}$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$a = 1.06\\,\\text{m s}^{-2}$"
    }
  },
  {
    "id": "al.y2.mech.applications-forces.q018",
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Applications of forces",
    "subtopicId": "al.y2.mech.applications-forces",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "numeric",
    "tags": [
      "F=ma",
      "friction",
      "horizontal"
    ],
    "questionText": "A particle of mass $8\\,\\text{kg}$ is pulled along a rough horizontal surface with a horizontal force of $35\\,\\text{N}$. The coefficient of friction is $\\mu = 0.4$ and the particle is sliding. Taking $g = 9.8\\,\\text{m s}^{-2}$, find the acceleration.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Normal reaction",
          "workingLatex": "R = mg = 78.40\\,\\text{N}",
          "explanation": "$R = 78.40\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Friction (sliding)",
          "workingLatex": "F = \\mu R = 0.4 \\times 78.40 = 31.36\\,\\text{N}",
          "explanation": "Kinetic/limiting friction $= 31.36\\,\\text{N}$ opposing motion.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Apply Newton's second law",
          "workingLatex": "ma = P - F",
          "explanation": "Resultant force along the direction of motion equals mass times acceleration.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute",
          "workingLatex": "8a = 35 - 31.36",
          "explanation": "Pull $35\\,\\text{N}$, friction $31.36\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve for $a$",
          "workingLatex": "a = 0.45\\,\\text{m s}^{-2}",
          "explanation": "$a = 0.45\\,\\text{m s}^{-2}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "a = 0.45\\,\\text{m s}^{-2}",
          "explanation": "Acceleration $= 0.45\\,\\text{m s}^{-2}$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$a = 0.45\\,\\text{m s}^{-2}$"
    }
  },
  {
    "id": "al.y2.mech.applications-forces.q019",
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Applications of forces",
    "subtopicId": "al.y2.mech.applications-forces",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "numeric",
    "tags": [
      "rough-slope",
      "acceleration",
      "friction"
    ],
    "questionText": "A particle of mass $4\\,\\text{kg}$ slides down a rough plane inclined at $30°$ to the horizontal. The coefficient of friction is $\\mu = 0.2$. Taking $g = 9.8\\,\\text{m s}^{-2}$, find the acceleration of the particle.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Resolve weight along the plane",
          "workingLatex": "W_{\\parallel} = mg\\sin 30° = 19.60\\,\\text{N}",
          "explanation": "Weight component along plane: $19.60\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Normal reaction",
          "workingLatex": "R = mg\\cos 30° = 33.95\\,\\text{N}",
          "explanation": "$R = 33.95\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Limiting friction",
          "workingLatex": "F = \\mu R = 0.2 \\times 33.95 = 6.79\\,\\text{N}",
          "explanation": "Friction $= 6.79\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply $F = ma$ along the plane",
          "workingLatex": "ma = mg\\sin\\alpha - \\mu mg\\cos\\alpha",
          "explanation": "Friction opposes the direction of motion.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify",
          "workingLatex": "a = g(\\sin 30° - 0.2\\cos 30°)",
          "explanation": "Factor out $g$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Calculate",
          "workingLatex": "a = 3.20\\,\\text{m s}^{-2}",
          "explanation": "$a = 3.20\\,\\text{m s}^{-2}$ down the plane.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check motion is possible",
          "workingLatex": "a = 3.20 > 0",
          "explanation": "Positive acceleration confirms the stated direction of motion.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Verify friction direction",
          "workingLatex": "\\text{Friction acts up the plane}",
          "explanation": "Friction always opposes motion.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "a = 3.20\\,\\text{m s}^{-2}",
          "explanation": "Acceleration $= 3.20\\,\\text{m s}^{-2}$ down the plane.",
          "diagram": null
        }
      ],
      "finalAnswer": "$a = 3.20\\,\\text{m s}^{-2}$ down the plane."
    }
  },
  {
    "id": "al.y2.mech.applications-forces.q020",
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Applications of forces",
    "subtopicId": "al.y2.mech.applications-forces",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "numeric",
    "tags": [
      "rough-slope",
      "acceleration",
      "friction"
    ],
    "questionText": "A particle of mass $6\\,\\text{kg}$ slides down a rough plane inclined at $25°$ to the horizontal. The coefficient of friction is $\\mu = 0.3$. Taking $g = 9.8\\,\\text{m s}^{-2}$, find the acceleration of the particle.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Resolve weight along the plane",
          "workingLatex": "W_{\\parallel} = mg\\sin 25° = 24.85\\,\\text{N}",
          "explanation": "Weight component along plane: $24.85\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Normal reaction",
          "workingLatex": "R = mg\\cos 25° = 53.29\\,\\text{N}",
          "explanation": "$R = 53.29\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Limiting friction",
          "workingLatex": "F = \\mu R = 0.3 \\times 53.29 = 15.99\\,\\text{N}",
          "explanation": "Friction $= 15.99\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply $F = ma$ along the plane",
          "workingLatex": "ma = mg\\sin\\alpha - \\mu mg\\cos\\alpha",
          "explanation": "Friction opposes the direction of motion.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify",
          "workingLatex": "a = g(\\sin 25° - 0.3\\cos 25°)",
          "explanation": "Factor out $g$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Calculate",
          "workingLatex": "a = 1.48\\,\\text{m s}^{-2}",
          "explanation": "$a = 1.48\\,\\text{m s}^{-2}$ down the plane.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check motion is possible",
          "workingLatex": "a = 1.48 > 0",
          "explanation": "Positive acceleration confirms the stated direction of motion.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Verify friction direction",
          "workingLatex": "\\text{Friction acts up the plane}",
          "explanation": "Friction always opposes motion.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "a = 1.48\\,\\text{m s}^{-2}",
          "explanation": "Acceleration $= 1.48\\,\\text{m s}^{-2}$ down the plane.",
          "diagram": null
        }
      ],
      "finalAnswer": "$a = 1.48\\,\\text{m s}^{-2}$ down the plane."
    }
  },
  {
    "id": "al.y2.mech.applications-forces.q021",
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Applications of forces",
    "subtopicId": "al.y2.mech.applications-forces",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "numeric",
    "tags": [
      "rough-slope",
      "acceleration",
      "friction"
    ],
    "questionText": "A particle of mass $5\\,\\text{kg}$ slides down a rough plane inclined at $35°$ to the horizontal. The coefficient of friction is $\\mu = 0.25$. Taking $g = 9.8\\,\\text{m s}^{-2}$, find the acceleration of the particle.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Resolve weight along the plane",
          "workingLatex": "W_{\\parallel} = mg\\sin 35° = 28.11\\,\\text{N}",
          "explanation": "Weight component along plane: $28.11\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Normal reaction",
          "workingLatex": "R = mg\\cos 35° = 40.14\\,\\text{N}",
          "explanation": "$R = 40.14\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Limiting friction",
          "workingLatex": "F = \\mu R = 0.25 \\times 40.14 = 10.03\\,\\text{N}",
          "explanation": "Friction $= 10.03\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply $F = ma$ along the plane",
          "workingLatex": "ma = mg\\sin\\alpha - \\mu mg\\cos\\alpha",
          "explanation": "Friction opposes the direction of motion.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify",
          "workingLatex": "a = g(\\sin 35° - 0.25\\cos 35°)",
          "explanation": "Factor out $g$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Calculate",
          "workingLatex": "a = 3.61\\,\\text{m s}^{-2}",
          "explanation": "$a = 3.61\\,\\text{m s}^{-2}$ down the plane.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check motion is possible",
          "workingLatex": "a = 3.61 > 0",
          "explanation": "Positive acceleration confirms the stated direction of motion.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Verify friction direction",
          "workingLatex": "\\text{Friction acts up the plane}",
          "explanation": "Friction always opposes motion.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "a = 3.61\\,\\text{m s}^{-2}",
          "explanation": "Acceleration $= 3.61\\,\\text{m s}^{-2}$ down the plane.",
          "diagram": null
        }
      ],
      "finalAnswer": "$a = 3.61\\,\\text{m s}^{-2}$ down the plane."
    }
  },
  {
    "id": "al.y2.mech.applications-forces.q022",
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Applications of forces",
    "subtopicId": "al.y2.mech.applications-forces",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "numeric",
    "tags": [
      "rough-slope",
      "acceleration",
      "friction"
    ],
    "questionText": "A particle of mass $8\\,\\text{kg}$ slides down a rough plane inclined at $20°$ to the horizontal. The coefficient of friction is $\\mu = 0.4$. Taking $g = 9.8\\,\\text{m s}^{-2}$, find the acceleration of the particle.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Resolve weight along the plane",
          "workingLatex": "W_{\\parallel} = mg\\sin 20° = 26.81\\,\\text{N}",
          "explanation": "Weight component along plane: $26.81\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Normal reaction",
          "workingLatex": "R = mg\\cos 20° = 73.67\\,\\text{N}",
          "explanation": "$R = 73.67\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Limiting friction",
          "workingLatex": "F = \\mu R = 0.4 \\times 73.67 = 29.47\\,\\text{N}",
          "explanation": "Friction $= 29.47\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply $F = ma$ along the plane",
          "workingLatex": "ma = mg\\sin\\alpha - \\mu mg\\cos\\alpha",
          "explanation": "Friction opposes the direction of motion.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify",
          "workingLatex": "a = g(\\sin 20° - 0.4\\cos 20°)",
          "explanation": "Factor out $g$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Calculate",
          "workingLatex": "a = -0.33\\,\\text{m s}^{-2}",
          "explanation": "$a = -0.33\\,\\text{m s}^{-2}$ down the plane.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check motion is possible",
          "workingLatex": "a = -0.33 > 0",
          "explanation": "Positive acceleration confirms the stated direction of motion.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Verify friction direction",
          "workingLatex": "\\text{Friction acts up the plane}",
          "explanation": "Friction always opposes motion.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "a = -0.33\\,\\text{m s}^{-2}",
          "explanation": "Acceleration $= -0.33\\,\\text{m s}^{-2}$ down the plane.",
          "diagram": null
        }
      ],
      "finalAnswer": "$a = -0.33\\,\\text{m s}^{-2}$ down the plane."
    }
  },
  {
    "id": "al.y2.mech.applications-forces.q023",
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Applications of forces",
    "subtopicId": "al.y2.mech.applications-forces",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "numeric",
    "tags": [
      "rough-slope",
      "acceleration",
      "friction"
    ],
    "questionText": "A particle of mass $3\\,\\text{kg}$ slides down a rough plane inclined at $40°$ to the horizontal. The coefficient of friction is $\\mu = 0.5$. Taking $g = 9.8\\,\\text{m s}^{-2}$, find the acceleration of the particle.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Resolve weight along the plane",
          "workingLatex": "W_{\\parallel} = mg\\sin 40° = 18.90\\,\\text{N}",
          "explanation": "Weight component along plane: $18.90\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Normal reaction",
          "workingLatex": "R = mg\\cos 40° = 22.52\\,\\text{N}",
          "explanation": "$R = 22.52\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Limiting friction",
          "workingLatex": "F = \\mu R = 0.5 \\times 22.52 = 11.26\\,\\text{N}",
          "explanation": "Friction $= 11.26\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply $F = ma$ along the plane",
          "workingLatex": "ma = mg\\sin\\alpha - \\mu mg\\cos\\alpha",
          "explanation": "Friction opposes the direction of motion.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify",
          "workingLatex": "a = g(\\sin 40° - 0.5\\cos 40°)",
          "explanation": "Factor out $g$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Calculate",
          "workingLatex": "a = 2.55\\,\\text{m s}^{-2}",
          "explanation": "$a = 2.55\\,\\text{m s}^{-2}$ down the plane.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check motion is possible",
          "workingLatex": "a = 2.55 > 0",
          "explanation": "Positive acceleration confirms the stated direction of motion.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Verify friction direction",
          "workingLatex": "\\text{Friction acts up the plane}",
          "explanation": "Friction always opposes motion.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "a = 2.55\\,\\text{m s}^{-2}",
          "explanation": "Acceleration $= 2.55\\,\\text{m s}^{-2}$ down the plane.",
          "diagram": null
        }
      ],
      "finalAnswer": "$a = 2.55\\,\\text{m s}^{-2}$ down the plane."
    }
  },
  {
    "id": "al.y2.mech.applications-forces.q024",
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Applications of forces",
    "subtopicId": "al.y2.mech.applications-forces",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "numeric",
    "tags": [
      "rough-slope",
      "acceleration",
      "friction"
    ],
    "questionText": "A particle of mass $10\\,\\text{kg}$ slides down a rough plane inclined at $15°$ to the horizontal. The coefficient of friction is $\\mu = 0.15$. Taking $g = 9.8\\,\\text{m s}^{-2}$, find the acceleration of the particle.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Resolve weight along the plane",
          "workingLatex": "W_{\\parallel} = mg\\sin 15° = 25.36\\,\\text{N}",
          "explanation": "Weight component along plane: $25.36\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Normal reaction",
          "workingLatex": "R = mg\\cos 15° = 94.66\\,\\text{N}",
          "explanation": "$R = 94.66\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Limiting friction",
          "workingLatex": "F = \\mu R = 0.15 \\times 94.66 = 14.20\\,\\text{N}",
          "explanation": "Friction $= 14.20\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply $F = ma$ along the plane",
          "workingLatex": "ma = mg\\sin\\alpha - \\mu mg\\cos\\alpha",
          "explanation": "Friction opposes the direction of motion.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify",
          "workingLatex": "a = g(\\sin 15° - 0.15\\cos 15°)",
          "explanation": "Factor out $g$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Calculate",
          "workingLatex": "a = 1.12\\,\\text{m s}^{-2}",
          "explanation": "$a = 1.12\\,\\text{m s}^{-2}$ down the plane.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check motion is possible",
          "workingLatex": "a = 1.12 > 0",
          "explanation": "Positive acceleration confirms the stated direction of motion.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Verify friction direction",
          "workingLatex": "\\text{Friction acts up the plane}",
          "explanation": "Friction always opposes motion.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "a = 1.12\\,\\text{m s}^{-2}",
          "explanation": "Acceleration $= 1.12\\,\\text{m s}^{-2}$ down the plane.",
          "diagram": null
        }
      ],
      "finalAnswer": "$a = 1.12\\,\\text{m s}^{-2}$ down the plane."
    }
  },
  {
    "id": "al.y2.mech.applications-forces.q025",
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Applications of forces",
    "subtopicId": "al.y2.mech.applications-forces",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "written",
    "tags": [
      "connected-particles",
      "pulley",
      "smooth-slope"
    ],
    "questionText": "A particle of mass $4\\,\\text{kg}$ is on a smooth plane inclined at $30°$ to the horizontal. It is connected by a light inextensible string passing over a smooth pulley to a particle of mass $3\\,\\text{kg}$ hanging vertically. Taking $g = 9.8\\,\\text{m s}^{-2}$, find the acceleration of the system and the tension in the string.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the system",
          "workingLatex": "m_1 = 4\\,\\text{kg} \\text{ on slope}, \\quad m_2 = 3\\,\\text{kg} \\text{ hanging}",
          "explanation": "The string connects the two particles over a smooth pulley.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Equation for $m_2$ (downward positive)",
          "workingLatex": "m_2 g - T = m_2 a",
          "explanation": "Weight minus tension gives resultant on the hanging mass.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Equation for $m_1$ (up slope positive)",
          "workingLatex": "T - m_1 g\\sin\\alpha = m_1 a",
          "explanation": "Tension minus downslope weight component.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Add the equations to eliminate $T$",
          "workingLatex": "m_2 g - m_1 g\\sin 30° = (m_1 + m_2)a",
          "explanation": "Adding eliminates the internal tension force.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve for $a$",
          "workingLatex": "a = \\dfrac{g(3 - 4\\sin 30°)}{4+3} = 1.40\\,\\text{m s}^{-2}",
          "explanation": "$a = 1.40\\,\\text{m s}^{-2}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Determine direction",
          "workingLatex": "\\text{$m_2$ moves down, $m_1$ moves up the slope}",
          "explanation": "Sign of $a$ tells us the direction of motion.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Find tension",
          "workingLatex": "T = m_2(g - a) = 25.20\\,\\text{N}",
          "explanation": "$T = 25.20\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check with $m_1$ equation",
          "workingLatex": "T - 19.60 = 5.60",
          "explanation": "Substituting back confirms consistency.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "a = 1.40\\,\\text{m s}^{-2}, \\quad T = 25.20\\,\\text{N}",
          "explanation": "Acceleration $= 1.40\\,\\text{m s}^{-2}$; tension $= 25.20\\,\\text{N}$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$a = 1.40\\,\\text{m s}^{-2}$; $T = 25.20\\,\\text{N}$."
    }
  },
  {
    "id": "al.y2.mech.applications-forces.q026",
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Applications of forces",
    "subtopicId": "al.y2.mech.applications-forces",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "written",
    "tags": [
      "connected-particles",
      "pulley",
      "smooth-slope"
    ],
    "questionText": "A particle of mass $6\\,\\text{kg}$ is on a smooth plane inclined at $25°$ to the horizontal. It is connected by a light inextensible string passing over a smooth pulley to a particle of mass $2\\,\\text{kg}$ hanging vertically. Taking $g = 9.8\\,\\text{m s}^{-2}$, find the acceleration of the system and the tension in the string.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the system",
          "workingLatex": "m_1 = 6\\,\\text{kg} \\text{ on slope}, \\quad m_2 = 2\\,\\text{kg} \\text{ hanging}",
          "explanation": "The string connects the two particles over a smooth pulley.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Equation for $m_2$ (downward positive)",
          "workingLatex": "m_2 g - T = m_2 a",
          "explanation": "Weight minus tension gives resultant on the hanging mass.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Equation for $m_1$ (up slope positive)",
          "workingLatex": "T - m_1 g\\sin\\alpha = m_1 a",
          "explanation": "Tension minus downslope weight component.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Add the equations to eliminate $T$",
          "workingLatex": "m_2 g - m_1 g\\sin 25° = (m_1 + m_2)a",
          "explanation": "Adding eliminates the internal tension force.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve for $a$",
          "workingLatex": "a = \\dfrac{g(2 - 6\\sin 25°)}{6+2} = -0.66\\,\\text{m s}^{-2}",
          "explanation": "$a = -0.66\\,\\text{m s}^{-2}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Determine direction",
          "workingLatex": "\\text{$m_2$ moves up, $m_1$ moves down the slope}",
          "explanation": "Sign of $a$ tells us the direction of motion.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Find tension",
          "workingLatex": "T = m_2(g - a) = 20.91\\,\\text{N}",
          "explanation": "$T = 20.91\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check with $m_1$ equation",
          "workingLatex": "T - 24.85 = -3.94",
          "explanation": "Substituting back confirms consistency.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "a = -0.66\\,\\text{m s}^{-2}, \\quad T = 20.91\\,\\text{N}",
          "explanation": "Acceleration $= -0.66\\,\\text{m s}^{-2}$; tension $= 20.91\\,\\text{N}$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$a = -0.66\\,\\text{m s}^{-2}$; $T = 20.91\\,\\text{N}$."
    }
  },
  {
    "id": "al.y2.mech.applications-forces.q027",
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Applications of forces",
    "subtopicId": "al.y2.mech.applications-forces",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "written",
    "tags": [
      "connected-particles",
      "pulley",
      "smooth-slope"
    ],
    "questionText": "A particle of mass $5\\,\\text{kg}$ is on a smooth plane inclined at $35°$ to the horizontal. It is connected by a light inextensible string passing over a smooth pulley to a particle of mass $4\\,\\text{kg}$ hanging vertically. Taking $g = 9.8\\,\\text{m s}^{-2}$, find the acceleration of the system and the tension in the string.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the system",
          "workingLatex": "m_1 = 5\\,\\text{kg} \\text{ on slope}, \\quad m_2 = 4\\,\\text{kg} \\text{ hanging}",
          "explanation": "The string connects the two particles over a smooth pulley.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Equation for $m_2$ (downward positive)",
          "workingLatex": "m_2 g - T = m_2 a",
          "explanation": "Weight minus tension gives resultant on the hanging mass.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Equation for $m_1$ (up slope positive)",
          "workingLatex": "T - m_1 g\\sin\\alpha = m_1 a",
          "explanation": "Tension minus downslope weight component.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Add the equations to eliminate $T$",
          "workingLatex": "m_2 g - m_1 g\\sin 35° = (m_1 + m_2)a",
          "explanation": "Adding eliminates the internal tension force.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve for $a$",
          "workingLatex": "a = \\dfrac{g(4 - 5\\sin 35°)}{5+4} = 1.23\\,\\text{m s}^{-2}",
          "explanation": "$a = 1.23\\,\\text{m s}^{-2}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Determine direction",
          "workingLatex": "\\text{$m_2$ moves down, $m_1$ moves up the slope}",
          "explanation": "Sign of $a$ tells us the direction of motion.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Find tension",
          "workingLatex": "T = m_2(g - a) = 34.27\\,\\text{N}",
          "explanation": "$T = 34.27\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check with $m_1$ equation",
          "workingLatex": "T - 28.11 = 6.16",
          "explanation": "Substituting back confirms consistency.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "a = 1.23\\,\\text{m s}^{-2}, \\quad T = 34.27\\,\\text{N}",
          "explanation": "Acceleration $= 1.23\\,\\text{m s}^{-2}$; tension $= 34.27\\,\\text{N}$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$a = 1.23\\,\\text{m s}^{-2}$; $T = 34.27\\,\\text{N}$."
    }
  },
  {
    "id": "al.y2.mech.applications-forces.q028",
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Applications of forces",
    "subtopicId": "al.y2.mech.applications-forces",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "written",
    "tags": [
      "connected-particles",
      "pulley",
      "smooth-slope"
    ],
    "questionText": "A particle of mass $8\\,\\text{kg}$ is on a smooth plane inclined at $20°$ to the horizontal. It is connected by a light inextensible string passing over a smooth pulley to a particle of mass $3\\,\\text{kg}$ hanging vertically. Taking $g = 9.8\\,\\text{m s}^{-2}$, find the acceleration of the system and the tension in the string.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the system",
          "workingLatex": "m_1 = 8\\,\\text{kg} \\text{ on slope}, \\quad m_2 = 3\\,\\text{kg} \\text{ hanging}",
          "explanation": "The string connects the two particles over a smooth pulley.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Equation for $m_2$ (downward positive)",
          "workingLatex": "m_2 g - T = m_2 a",
          "explanation": "Weight minus tension gives resultant on the hanging mass.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Equation for $m_1$ (up slope positive)",
          "workingLatex": "T - m_1 g\\sin\\alpha = m_1 a",
          "explanation": "Tension minus downslope weight component.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Add the equations to eliminate $T$",
          "workingLatex": "m_2 g - m_1 g\\sin 20° = (m_1 + m_2)a",
          "explanation": "Adding eliminates the internal tension force.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve for $a$",
          "workingLatex": "a = \\dfrac{g(3 - 8\\sin 20°)}{8+3} = 0.24\\,\\text{m s}^{-2}",
          "explanation": "$a = 0.24\\,\\text{m s}^{-2}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Determine direction",
          "workingLatex": "\\text{$m_2$ moves down, $m_1$ moves up the slope}",
          "explanation": "Sign of $a$ tells us the direction of motion.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Find tension",
          "workingLatex": "T = m_2(g - a) = 28.69\\,\\text{N}",
          "explanation": "$T = 28.69\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check with $m_1$ equation",
          "workingLatex": "T - 26.81 = 1.88",
          "explanation": "Substituting back confirms consistency.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "a = 0.24\\,\\text{m s}^{-2}, \\quad T = 28.69\\,\\text{N}",
          "explanation": "Acceleration $= 0.24\\,\\text{m s}^{-2}$; tension $= 28.69\\,\\text{N}$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$a = 0.24\\,\\text{m s}^{-2}$; $T = 28.69\\,\\text{N}$."
    }
  },
  {
    "id": "al.y2.mech.applications-forces.q029",
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Applications of forces",
    "subtopicId": "al.y2.mech.applications-forces",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "written",
    "tags": [
      "connected-particles",
      "pulley",
      "smooth-slope"
    ],
    "questionText": "A particle of mass $3\\,\\text{kg}$ is on a smooth plane inclined at $40°$ to the horizontal. It is connected by a light inextensible string passing over a smooth pulley to a particle of mass $5\\,\\text{kg}$ hanging vertically. Taking $g = 9.8\\,\\text{m s}^{-2}$, find the acceleration of the system and the tension in the string.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the system",
          "workingLatex": "m_1 = 3\\,\\text{kg} \\text{ on slope}, \\quad m_2 = 5\\,\\text{kg} \\text{ hanging}",
          "explanation": "The string connects the two particles over a smooth pulley.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Equation for $m_2$ (downward positive)",
          "workingLatex": "m_2 g - T = m_2 a",
          "explanation": "Weight minus tension gives resultant on the hanging mass.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Equation for $m_1$ (up slope positive)",
          "workingLatex": "T - m_1 g\\sin\\alpha = m_1 a",
          "explanation": "Tension minus downslope weight component.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Add the equations to eliminate $T$",
          "workingLatex": "m_2 g - m_1 g\\sin 40° = (m_1 + m_2)a",
          "explanation": "Adding eliminates the internal tension force.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve for $a$",
          "workingLatex": "a = \\dfrac{g(5 - 3\\sin 40°)}{3+5} = 3.76\\,\\text{m s}^{-2}",
          "explanation": "$a = 3.76\\,\\text{m s}^{-2}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Determine direction",
          "workingLatex": "\\text{$m_2$ moves down, $m_1$ moves up the slope}",
          "explanation": "Sign of $a$ tells us the direction of motion.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Find tension",
          "workingLatex": "T = m_2(g - a) = 30.19\\,\\text{N}",
          "explanation": "$T = 30.19\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check with $m_1$ equation",
          "workingLatex": "T - 18.90 = 11.29",
          "explanation": "Substituting back confirms consistency.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "a = 3.76\\,\\text{m s}^{-2}, \\quad T = 30.19\\,\\text{N}",
          "explanation": "Acceleration $= 3.76\\,\\text{m s}^{-2}$; tension $= 30.19\\,\\text{N}$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$a = 3.76\\,\\text{m s}^{-2}$; $T = 30.19\\,\\text{N}$."
    }
  },
  {
    "id": "al.y2.mech.applications-forces.q030",
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Applications of forces",
    "subtopicId": "al.y2.mech.applications-forces",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "written",
    "tags": [
      "connected-particles",
      "pulley",
      "smooth-slope"
    ],
    "questionText": "A particle of mass $10\\,\\text{kg}$ is on a smooth plane inclined at $15°$ to the horizontal. It is connected by a light inextensible string passing over a smooth pulley to a particle of mass $4\\,\\text{kg}$ hanging vertically. Taking $g = 9.8\\,\\text{m s}^{-2}$, find the acceleration of the system and the tension in the string.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the system",
          "workingLatex": "m_1 = 10\\,\\text{kg} \\text{ on slope}, \\quad m_2 = 4\\,\\text{kg} \\text{ hanging}",
          "explanation": "The string connects the two particles over a smooth pulley.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Equation for $m_2$ (downward positive)",
          "workingLatex": "m_2 g - T = m_2 a",
          "explanation": "Weight minus tension gives resultant on the hanging mass.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Equation for $m_1$ (up slope positive)",
          "workingLatex": "T - m_1 g\\sin\\alpha = m_1 a",
          "explanation": "Tension minus downslope weight component.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Add the equations to eliminate $T$",
          "workingLatex": "m_2 g - m_1 g\\sin 15° = (m_1 + m_2)a",
          "explanation": "Adding eliminates the internal tension force.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve for $a$",
          "workingLatex": "a = \\dfrac{g(4 - 10\\sin 15°)}{10+4} = 0.99\\,\\text{m s}^{-2}",
          "explanation": "$a = 0.99\\,\\text{m s}^{-2}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Determine direction",
          "workingLatex": "\\text{$m_2$ moves down, $m_1$ moves up the slope}",
          "explanation": "Sign of $a$ tells us the direction of motion.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Find tension",
          "workingLatex": "T = m_2(g - a) = 35.25\\,\\text{N}",
          "explanation": "$T = 35.25\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check with $m_1$ equation",
          "workingLatex": "T - 25.36 = 9.88",
          "explanation": "Substituting back confirms consistency.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "a = 0.99\\,\\text{m s}^{-2}, \\quad T = 35.25\\,\\text{N}",
          "explanation": "Acceleration $= 0.99\\,\\text{m s}^{-2}$; tension $= 35.25\\,\\text{N}$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$a = 0.99\\,\\text{m s}^{-2}$; $T = 35.25\\,\\text{N}$."
    }
  },
  {
    "id": "al.y2.mech.applications-forces.q031",
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Applications of forces",
    "subtopicId": "al.y2.mech.applications-forces",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "written",
    "tags": [
      "connected-particles",
      "rough-slope",
      "pulley"
    ],
    "questionText": "A particle of mass $5\\,\\text{kg}$ is on a rough plane inclined at $30°$ ($\\mu = 0.2$). It is connected to a hanging mass of $3\\,\\text{kg}$ by a light string over a smooth pulley. Taking $g = 9.8\\,\\text{m s}^{-2}$, find the acceleration and tension.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Model friction on $m_1$",
          "workingLatex": "F = \\mu R = 0.2 \\times 42.44 = 8.49\\,\\text{N}",
          "explanation": "Friction $8.49\\,\\text{N}$ down the plane (opposing upward motion).",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Equation for hanging mass $m_2$",
          "workingLatex": "3g - T = 3a",
          "explanation": "Taking downward as positive for $m_2$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Equation for mass on slope",
          "workingLatex": "T - m_1 g\\sin\\alpha - F = m_1 a",
          "explanation": "Tension minus weight component minus friction.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Add equations",
          "workingLatex": "(3 - 5\\sin 30° - 0.2\\times5\\cos 30°)g = (5+3)a",
          "explanation": "Eliminate $T$ by adding the two equations of motion.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve for $a$",
          "workingLatex": "a = -0.45\\,\\text{m s}^{-2}",
          "explanation": "$a = -0.45\\,\\text{m s}^{-2}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Interpret direction",
          "workingLatex": "\\text{$a < 0$: $m_2$ moves upward}",
          "explanation": "Sign of acceleration determines motion.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Find tension",
          "workingLatex": "T = 3(g - a) = 30.75\\,\\text{N}",
          "explanation": "$T = 30.75\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Verify $T > 0$",
          "workingLatex": "T = 30.75 > 0",
          "explanation": "String must remain taut.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "a = -0.45\\,\\text{m s}^{-2}, \\quad T = 30.75\\,\\text{N}",
          "explanation": "Acceleration and tension found.",
          "diagram": null
        }
      ],
      "finalAnswer": "$a = -0.45\\,\\text{m s}^{-2}$; $T = 30.75\\,\\text{N}$."
    }
  },
  {
    "id": "al.y2.mech.applications-forces.q032",
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Applications of forces",
    "subtopicId": "al.y2.mech.applications-forces",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "written",
    "tags": [
      "connected-particles",
      "rough-slope",
      "pulley"
    ],
    "questionText": "A particle of mass $6\\,\\text{kg}$ is on a rough plane inclined at $25°$ ($\\mu = 0.3$). It is connected to a hanging mass of $2\\,\\text{kg}$ by a light string over a smooth pulley. Taking $g = 9.8\\,\\text{m s}^{-2}$, find the acceleration and tension.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Model friction on $m_1$",
          "workingLatex": "F = \\mu R = 0.3 \\times 53.29 = 15.99\\,\\text{N}",
          "explanation": "Friction $15.99\\,\\text{N}$ down the plane (opposing upward motion).",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Equation for hanging mass $m_2$",
          "workingLatex": "2g - T = 2a",
          "explanation": "Taking downward as positive for $m_2$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Equation for mass on slope",
          "workingLatex": "T - m_1 g\\sin\\alpha - F = m_1 a",
          "explanation": "Tension minus weight component minus friction.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Add equations",
          "workingLatex": "(2 - 6\\sin 25° - 0.3\\times6\\cos 25°)g = (6+2)a",
          "explanation": "Eliminate $T$ by adding the two equations of motion.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve for $a$",
          "workingLatex": "a = -2.65\\,\\text{m s}^{-2}",
          "explanation": "$a = -2.65\\,\\text{m s}^{-2}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Interpret direction",
          "workingLatex": "\\text{$a < 0$: $m_2$ moves upward}",
          "explanation": "Sign of acceleration determines motion.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Find tension",
          "workingLatex": "T = 2(g - a) = 24.91\\,\\text{N}",
          "explanation": "$T = 24.91\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Verify $T > 0$",
          "workingLatex": "T = 24.91 > 0",
          "explanation": "String must remain taut.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "a = -2.65\\,\\text{m s}^{-2}, \\quad T = 24.91\\,\\text{N}",
          "explanation": "Acceleration and tension found.",
          "diagram": null
        }
      ],
      "finalAnswer": "$a = -2.65\\,\\text{m s}^{-2}$; $T = 24.91\\,\\text{N}$."
    }
  },
  {
    "id": "al.y2.mech.applications-forces.q033",
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Applications of forces",
    "subtopicId": "al.y2.mech.applications-forces",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "written",
    "tags": [
      "connected-particles",
      "rough-slope",
      "pulley"
    ],
    "questionText": "A particle of mass $4\\,\\text{kg}$ is on a rough plane inclined at $35°$ ($\\mu = 0.25$). It is connected to a hanging mass of $4\\,\\text{kg}$ by a light string over a smooth pulley. Taking $g = 9.8\\,\\text{m s}^{-2}$, find the acceleration and tension.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Model friction on $m_1$",
          "workingLatex": "F = \\mu R = 0.25 \\times 32.11 = 8.03\\,\\text{N}",
          "explanation": "Friction $8.03\\,\\text{N}$ down the plane (opposing upward motion).",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Equation for hanging mass $m_2$",
          "workingLatex": "4g - T = 4a",
          "explanation": "Taking downward as positive for $m_2$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Equation for mass on slope",
          "workingLatex": "T - m_1 g\\sin\\alpha - F = m_1 a",
          "explanation": "Tension minus weight component minus friction.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Add equations",
          "workingLatex": "(4 - 4\\sin 35° - 0.25\\times4\\cos 35°)g = (4+4)a",
          "explanation": "Eliminate $T$ by adding the two equations of motion.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve for $a$",
          "workingLatex": "a = 1.09\\,\\text{m s}^{-2}",
          "explanation": "$a = 1.09\\,\\text{m s}^{-2}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Interpret direction",
          "workingLatex": "\\text{$a > 0$: $m_2$ moves downward}",
          "explanation": "Sign of acceleration determines motion.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Find tension",
          "workingLatex": "T = 4(g - a) = 34.86\\,\\text{N}",
          "explanation": "$T = 34.86\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Verify $T > 0$",
          "workingLatex": "T = 34.86 > 0",
          "explanation": "String must remain taut.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "a = 1.09\\,\\text{m s}^{-2}, \\quad T = 34.86\\,\\text{N}",
          "explanation": "Acceleration and tension found.",
          "diagram": null
        }
      ],
      "finalAnswer": "$a = 1.09\\,\\text{m s}^{-2}$; $T = 34.86\\,\\text{N}$."
    }
  },
  {
    "id": "al.y2.mech.applications-forces.q034",
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Applications of forces",
    "subtopicId": "al.y2.mech.applications-forces",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "written",
    "tags": [
      "connected-particles",
      "rough-slope",
      "pulley"
    ],
    "questionText": "A particle of mass $8\\,\\text{kg}$ is on a rough plane inclined at $20°$ ($\\mu = 0.4$). It is connected to a hanging mass of $3\\,\\text{kg}$ by a light string over a smooth pulley. Taking $g = 9.8\\,\\text{m s}^{-2}$, find the acceleration and tension.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Model friction on $m_1$",
          "workingLatex": "F = \\mu R = 0.4 \\times 73.67 = 29.47\\,\\text{N}",
          "explanation": "Friction $29.47\\,\\text{N}$ down the plane (opposing upward motion).",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Equation for hanging mass $m_2$",
          "workingLatex": "3g - T = 3a",
          "explanation": "Taking downward as positive for $m_2$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Equation for mass on slope",
          "workingLatex": "T - m_1 g\\sin\\alpha - F = m_1 a",
          "explanation": "Tension minus weight component minus friction.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Add equations",
          "workingLatex": "(3 - 8\\sin 20° - 0.4\\times8\\cos 20°)g = (8+3)a",
          "explanation": "Eliminate $T$ by adding the two equations of motion.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve for $a$",
          "workingLatex": "a = -2.44\\,\\text{m s}^{-2}",
          "explanation": "$a = -2.44\\,\\text{m s}^{-2}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Interpret direction",
          "workingLatex": "\\text{$a < 0$: $m_2$ moves upward}",
          "explanation": "Sign of acceleration determines motion.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Find tension",
          "workingLatex": "T = 3(g - a) = 36.73\\,\\text{N}",
          "explanation": "$T = 36.73\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Verify $T > 0$",
          "workingLatex": "T = 36.73 > 0",
          "explanation": "String must remain taut.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "a = -2.44\\,\\text{m s}^{-2}, \\quad T = 36.73\\,\\text{N}",
          "explanation": "Acceleration and tension found.",
          "diagram": null
        }
      ],
      "finalAnswer": "$a = -2.44\\,\\text{m s}^{-2}$; $T = 36.73\\,\\text{N}$."
    }
  },
  {
    "id": "al.y2.mech.applications-forces.q035",
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Applications of forces",
    "subtopicId": "al.y2.mech.applications-forces",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "written",
    "tags": [
      "connected-particles",
      "rough-slope",
      "pulley"
    ],
    "questionText": "A particle of mass $10\\,\\text{kg}$ is on a rough plane inclined at $15°$ ($\\mu = 0.15$). It is connected to a hanging mass of $5\\,\\text{kg}$ by a light string over a smooth pulley. Taking $g = 9.8\\,\\text{m s}^{-2}$, find the acceleration and tension.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Model friction on $m_1$",
          "workingLatex": "F = \\mu R = 0.15 \\times 94.66 = 14.20\\,\\text{N}",
          "explanation": "Friction $14.20\\,\\text{N}$ down the plane (opposing upward motion).",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Equation for hanging mass $m_2$",
          "workingLatex": "5g - T = 5a",
          "explanation": "Taking downward as positive for $m_2$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Equation for mass on slope",
          "workingLatex": "T - m_1 g\\sin\\alpha - F = m_1 a",
          "explanation": "Tension minus weight component minus friction.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Add equations",
          "workingLatex": "(5 - 10\\sin 15° - 0.15\\times10\\cos 15°)g = (10+5)a",
          "explanation": "Eliminate $T$ by adding the two equations of motion.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve for $a$",
          "workingLatex": "a = 0.63\\,\\text{m s}^{-2}",
          "explanation": "$a = 0.63\\,\\text{m s}^{-2}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Interpret direction",
          "workingLatex": "\\text{$a > 0$: $m_2$ moves downward}",
          "explanation": "Sign of acceleration determines motion.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Find tension",
          "workingLatex": "T = 5(g - a) = 45.85\\,\\text{N}",
          "explanation": "$T = 45.85\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Verify $T > 0$",
          "workingLatex": "T = 45.85 > 0",
          "explanation": "String must remain taut.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "a = 0.63\\,\\text{m s}^{-2}, \\quad T = 45.85\\,\\text{N}",
          "explanation": "Acceleration and tension found.",
          "diagram": null
        }
      ],
      "finalAnswer": "$a = 0.63\\,\\text{m s}^{-2}$; $T = 45.85\\,\\text{N}$."
    }
  },
  {
    "id": "al.y2.mech.applications-forces.q036",
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Applications of forces",
    "subtopicId": "al.y2.mech.applications-forces",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "written",
    "tags": [
      "connected-particles",
      "rough-slope",
      "pulley"
    ],
    "questionText": "A particle of mass $7\\,\\text{kg}$ is on a rough plane inclined at $40°$ ($\\mu = 0.35$). It is connected to a hanging mass of $3\\,\\text{kg}$ by a light string over a smooth pulley. Taking $g = 9.8\\,\\text{m s}^{-2}$, find the acceleration and tension.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Model friction on $m_1$",
          "workingLatex": "F = \\mu R = 0.35 \\times 52.55 = 18.39\\,\\text{N}",
          "explanation": "Friction $18.39\\,\\text{N}$ down the plane (opposing upward motion).",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Equation for hanging mass $m_2$",
          "workingLatex": "3g - T = 3a",
          "explanation": "Taking downward as positive for $m_2$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Equation for mass on slope",
          "workingLatex": "T - m_1 g\\sin\\alpha - F = m_1 a",
          "explanation": "Tension minus weight component minus friction.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Add equations",
          "workingLatex": "(3 - 7\\sin 40° - 0.35\\times7\\cos 40°)g = (7+3)a",
          "explanation": "Eliminate $T$ by adding the two equations of motion.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve for $a$",
          "workingLatex": "a = -3.31\\,\\text{m s}^{-2}",
          "explanation": "$a = -3.31\\,\\text{m s}^{-2}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Interpret direction",
          "workingLatex": "\\text{$a < 0$: $m_2$ moves upward}",
          "explanation": "Sign of acceleration determines motion.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Find tension",
          "workingLatex": "T = 3(g - a) = 39.33\\,\\text{N}",
          "explanation": "$T = 39.33\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Verify $T > 0$",
          "workingLatex": "T = 39.33 > 0",
          "explanation": "String must remain taut.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "a = -3.31\\,\\text{m s}^{-2}, \\quad T = 39.33\\,\\text{N}",
          "explanation": "Acceleration and tension found.",
          "diagram": null
        }
      ],
      "finalAnswer": "$a = -3.31\\,\\text{m s}^{-2}$; $T = 39.33\\,\\text{N}$."
    }
  },
  {
    "id": "al.y2.mech.applications-forces.q037",
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Applications of forces",
    "subtopicId": "al.y2.mech.applications-forces",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "tags": [
      "equilibrium",
      "rough-slope",
      "limiting"
    ],
    "questionText": "A particle of mass $5\\,\\text{kg}$ rests on a rough plane inclined at $35°$ to the horizontal, with $\\mu = 0.4$. Taking $g = 9.8\\,\\text{m s}^{-2}$, determine whether the particle remains in equilibrium or slides.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Weight component down slope",
          "workingLatex": "W_{\\parallel} = 28.11\\,\\text{N}",
          "explanation": "Downslope force: $28.11\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Maximum friction up slope",
          "workingLatex": "F_{\\max} = \\mu R = 16.06\\,\\text{N}",
          "explanation": "Maximum friction: $16.06\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compare forces",
          "workingLatex": "W_{\\parallel} = 28.11\\,\\text{N}, \\quad F_{\\max} = 16.06\\,\\text{N}",
          "explanation": "Will friction be sufficient?",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Conclusion",
          "workingLatex": "\\text{Particle slides}",
          "explanation": "Weight component exceeds friction.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "If equilibrium, friction magnitude",
          "workingLatex": "F = 16.06\\,\\text{N}",
          "explanation": "Friction $= 16.06\\,\\text{N}$ up the plane.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Critical angle",
          "workingLatex": "\\tan\\alpha_{\\text{crit}} = \\mu = 0.4",
          "explanation": "Critical angle: $\\alpha_{\\text{crit}} = 21.8°$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Compare with given angle",
          "workingLatex": "\\alpha = 35°",
          "explanation": "Given angle exceeds the critical angle.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State friction law",
          "workingLatex": "F \\le \\mu R",
          "explanation": "Friction adjusts up to its limit to maintain equilibrium.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "\\text{The particle slides down the plane}",
          "explanation": "Slides.",
          "diagram": null
        }
      ],
      "finalAnswer": "The particle slides down the plane."
    }
  },
  {
    "id": "al.y2.mech.applications-forces.q038",
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Applications of forces",
    "subtopicId": "al.y2.mech.applications-forces",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "tags": [
      "equilibrium",
      "rough-slope",
      "limiting"
    ],
    "questionText": "A particle of mass $8\\,\\text{kg}$ rests on a rough plane inclined at $30°$ to the horizontal, with $\\mu = 0.3$. Taking $g = 9.8\\,\\text{m s}^{-2}$, determine whether the particle remains in equilibrium or slides.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Weight component down slope",
          "workingLatex": "W_{\\parallel} = 39.20\\,\\text{N}",
          "explanation": "Downslope force: $39.20\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Maximum friction up slope",
          "workingLatex": "F_{\\max} = \\mu R = 20.37\\,\\text{N}",
          "explanation": "Maximum friction: $20.37\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compare forces",
          "workingLatex": "W_{\\parallel} = 39.20\\,\\text{N}, \\quad F_{\\max} = 20.37\\,\\text{N}",
          "explanation": "Will friction be sufficient?",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Conclusion",
          "workingLatex": "\\text{Particle slides}",
          "explanation": "Weight component exceeds friction.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "If equilibrium, friction magnitude",
          "workingLatex": "F = 20.37\\,\\text{N}",
          "explanation": "Friction $= 20.37\\,\\text{N}$ up the plane.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Critical angle",
          "workingLatex": "\\tan\\alpha_{\\text{crit}} = \\mu = 0.3",
          "explanation": "Critical angle: $\\alpha_{\\text{crit}} = 16.7°$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Compare with given angle",
          "workingLatex": "\\alpha = 30°",
          "explanation": "Given angle exceeds the critical angle.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State friction law",
          "workingLatex": "F \\le \\mu R",
          "explanation": "Friction adjusts up to its limit to maintain equilibrium.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "\\text{The particle slides down the plane}",
          "explanation": "Slides.",
          "diagram": null
        }
      ],
      "finalAnswer": "The particle slides down the plane."
    }
  },
  {
    "id": "al.y2.mech.applications-forces.q039",
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Applications of forces",
    "subtopicId": "al.y2.mech.applications-forces",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "tags": [
      "equilibrium",
      "rough-slope",
      "limiting"
    ],
    "questionText": "A particle of mass $6\\,\\text{kg}$ rests on a rough plane inclined at $40°$ to the horizontal, with $\\mu = 0.5$. Taking $g = 9.8\\,\\text{m s}^{-2}$, determine whether the particle remains in equilibrium or slides.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Weight component down slope",
          "workingLatex": "W_{\\parallel} = 37.80\\,\\text{N}",
          "explanation": "Downslope force: $37.80\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Maximum friction up slope",
          "workingLatex": "F_{\\max} = \\mu R = 22.52\\,\\text{N}",
          "explanation": "Maximum friction: $22.52\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compare forces",
          "workingLatex": "W_{\\parallel} = 37.80\\,\\text{N}, \\quad F_{\\max} = 22.52\\,\\text{N}",
          "explanation": "Will friction be sufficient?",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Conclusion",
          "workingLatex": "\\text{Particle slides}",
          "explanation": "Weight component exceeds friction.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "If equilibrium, friction magnitude",
          "workingLatex": "F = 22.52\\,\\text{N}",
          "explanation": "Friction $= 22.52\\,\\text{N}$ up the plane.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Critical angle",
          "workingLatex": "\\tan\\alpha_{\\text{crit}} = \\mu = 0.5",
          "explanation": "Critical angle: $\\alpha_{\\text{crit}} = 26.6°$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Compare with given angle",
          "workingLatex": "\\alpha = 40°",
          "explanation": "Given angle exceeds the critical angle.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State friction law",
          "workingLatex": "F \\le \\mu R",
          "explanation": "Friction adjusts up to its limit to maintain equilibrium.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "\\text{The particle slides down the plane}",
          "explanation": "Slides.",
          "diagram": null
        }
      ],
      "finalAnswer": "The particle slides down the plane."
    }
  },
  {
    "id": "al.y2.mech.applications-forces.q040",
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Applications of forces",
    "subtopicId": "al.y2.mech.applications-forces",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "tags": [
      "equilibrium",
      "rough-slope",
      "limiting"
    ],
    "questionText": "A particle of mass $4\\,\\text{kg}$ rests on a rough plane inclined at $25°$ to the horizontal, with $\\mu = 0.25$. Taking $g = 9.8\\,\\text{m s}^{-2}$, determine whether the particle remains in equilibrium or slides.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Weight component down slope",
          "workingLatex": "W_{\\parallel} = 16.57\\,\\text{N}",
          "explanation": "Downslope force: $16.57\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Maximum friction up slope",
          "workingLatex": "F_{\\max} = \\mu R = 8.88\\,\\text{N}",
          "explanation": "Maximum friction: $8.88\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compare forces",
          "workingLatex": "W_{\\parallel} = 16.57\\,\\text{N}, \\quad F_{\\max} = 8.88\\,\\text{N}",
          "explanation": "Will friction be sufficient?",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Conclusion",
          "workingLatex": "\\text{Particle slides}",
          "explanation": "Weight component exceeds friction.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "If equilibrium, friction magnitude",
          "workingLatex": "F = 8.88\\,\\text{N}",
          "explanation": "Friction $= 8.88\\,\\text{N}$ up the plane.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Critical angle",
          "workingLatex": "\\tan\\alpha_{\\text{crit}} = \\mu = 0.25",
          "explanation": "Critical angle: $\\alpha_{\\text{crit}} = 14.0°$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Compare with given angle",
          "workingLatex": "\\alpha = 25°",
          "explanation": "Given angle exceeds the critical angle.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State friction law",
          "workingLatex": "F \\le \\mu R",
          "explanation": "Friction adjusts up to its limit to maintain equilibrium.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "\\text{The particle slides down the plane}",
          "explanation": "Slides.",
          "diagram": null
        }
      ],
      "finalAnswer": "The particle slides down the plane."
    }
  },
  {
    "id": "al.y2.mech.applications-forces.q041",
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Applications of forces",
    "subtopicId": "al.y2.mech.applications-forces",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "numeric",
    "tags": [
      "constant-speed",
      "rough-slope",
      "applied-force"
    ],
    "questionText": "A particle of mass $5\\,\\text{kg}$ is pushed up a rough plane inclined at $30°$ at constant speed. The coefficient of friction is $\\mu = 0.3$. Taking $g = 9.8\\,\\text{m s}^{-2}$, find the force applied parallel to the plane.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Constant speed means zero acceleration",
          "workingLatex": "a = 0",
          "explanation": "Forces along the plane must balance.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Forces up the plane",
          "workingLatex": "P = W_{\\parallel} + F",
          "explanation": "Applied force balances weight component and friction.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Weight component",
          "workingLatex": "W_{\\parallel} = 24.50\\,\\text{N}",
          "explanation": "Downslope component: $24.50\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Friction (limiting, down the plane)",
          "workingLatex": "F = \\mu R = 12.73\\,\\text{N}",
          "explanation": "Friction opposes upward motion: $12.73\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve for applied force",
          "workingLatex": "P = 24.50 + 12.73 = 37.23\\,\\text{N}",
          "explanation": "$P = 37.23\\,\\text{N}$ up the plane.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Verify equilibrium",
          "workingLatex": "P = W_{\\parallel} + F",
          "explanation": "All forces along the plane sum to zero.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Note minimum force",
          "workingLatex": "P_{\\min} = 37.23\\,\\text{N}",
          "explanation": "Any smaller force cannot maintain constant speed uphill.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Compare with weight",
          "workingLatex": "P = 37.23\\,\\text{N} > mg\\sin\\alpha",
          "explanation": "Pushing up requires overcoming both gravity and friction.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "P = 37.23\\,\\text{N}",
          "explanation": "Force required $= 37.23\\,\\text{N}$ parallel to the plane.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P = 37.23\\,\\text{N}$ up the plane."
    }
  },
  {
    "id": "al.y2.mech.applications-forces.q042",
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Applications of forces",
    "subtopicId": "al.y2.mech.applications-forces",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "numeric",
    "tags": [
      "constant-speed",
      "rough-slope",
      "applied-force"
    ],
    "questionText": "A particle of mass $8\\,\\text{kg}$ is pushed up a rough plane inclined at $25°$ at constant speed. The coefficient of friction is $\\mu = 0.4$. Taking $g = 9.8\\,\\text{m s}^{-2}$, find the force applied parallel to the plane.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Constant speed means zero acceleration",
          "workingLatex": "a = 0",
          "explanation": "Forces along the plane must balance.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Forces up the plane",
          "workingLatex": "P = W_{\\parallel} + F",
          "explanation": "Applied force balances weight component and friction.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Weight component",
          "workingLatex": "W_{\\parallel} = 33.13\\,\\text{N}",
          "explanation": "Downslope component: $33.13\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Friction (limiting, down the plane)",
          "workingLatex": "F = \\mu R = 28.42\\,\\text{N}",
          "explanation": "Friction opposes upward motion: $28.42\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve for applied force",
          "workingLatex": "P = 33.13 + 28.42 = 61.56\\,\\text{N}",
          "explanation": "$P = 61.56\\,\\text{N}$ up the plane.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Verify equilibrium",
          "workingLatex": "P = W_{\\parallel} + F",
          "explanation": "All forces along the plane sum to zero.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Note minimum force",
          "workingLatex": "P_{\\min} = 61.56\\,\\text{N}",
          "explanation": "Any smaller force cannot maintain constant speed uphill.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Compare with weight",
          "workingLatex": "P = 61.56\\,\\text{N} > mg\\sin\\alpha",
          "explanation": "Pushing up requires overcoming both gravity and friction.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "P = 61.56\\,\\text{N}",
          "explanation": "Force required $= 61.56\\,\\text{N}$ parallel to the plane.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P = 61.56\\,\\text{N}$ up the plane."
    }
  },
  {
    "id": "al.y2.mech.applications-forces.q043",
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Applications of forces",
    "subtopicId": "al.y2.mech.applications-forces",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "numeric",
    "tags": [
      "constant-speed",
      "rough-slope",
      "applied-force"
    ],
    "questionText": "A particle of mass $6\\,\\text{kg}$ is pushed up a rough plane inclined at $35°$ at constant speed. The coefficient of friction is $\\mu = 0.25$. Taking $g = 9.8\\,\\text{m s}^{-2}$, find the force applied parallel to the plane.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Constant speed means zero acceleration",
          "workingLatex": "a = 0",
          "explanation": "Forces along the plane must balance.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Forces up the plane",
          "workingLatex": "P = W_{\\parallel} + F",
          "explanation": "Applied force balances weight component and friction.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Weight component",
          "workingLatex": "W_{\\parallel} = 33.73\\,\\text{N}",
          "explanation": "Downslope component: $33.73\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Friction (limiting, down the plane)",
          "workingLatex": "F = \\mu R = 12.04\\,\\text{N}",
          "explanation": "Friction opposes upward motion: $12.04\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve for applied force",
          "workingLatex": "P = 33.73 + 12.04 = 45.77\\,\\text{N}",
          "explanation": "$P = 45.77\\,\\text{N}$ up the plane.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Verify equilibrium",
          "workingLatex": "P = W_{\\parallel} + F",
          "explanation": "All forces along the plane sum to zero.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Note minimum force",
          "workingLatex": "P_{\\min} = 45.77\\,\\text{N}",
          "explanation": "Any smaller force cannot maintain constant speed uphill.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Compare with weight",
          "workingLatex": "P = 45.77\\,\\text{N} > mg\\sin\\alpha",
          "explanation": "Pushing up requires overcoming both gravity and friction.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "P = 45.77\\,\\text{N}",
          "explanation": "Force required $= 45.77\\,\\text{N}$ parallel to the plane.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P = 45.77\\,\\text{N}$ up the plane."
    }
  },
  {
    "id": "al.y2.mech.applications-forces.q044",
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Applications of forces",
    "subtopicId": "al.y2.mech.applications-forces",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "numeric",
    "tags": [
      "constant-speed",
      "rough-slope",
      "applied-force"
    ],
    "questionText": "A particle of mass $10\\,\\text{kg}$ is pushed up a rough plane inclined at $20°$ at constant speed. The coefficient of friction is $\\mu = 0.35$. Taking $g = 9.8\\,\\text{m s}^{-2}$, find the force applied parallel to the plane.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Constant speed means zero acceleration",
          "workingLatex": "a = 0",
          "explanation": "Forces along the plane must balance.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Forces up the plane",
          "workingLatex": "P = W_{\\parallel} + F",
          "explanation": "Applied force balances weight component and friction.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Weight component",
          "workingLatex": "W_{\\parallel} = 33.52\\,\\text{N}",
          "explanation": "Downslope component: $33.52\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Friction (limiting, down the plane)",
          "workingLatex": "F = \\mu R = 32.23\\,\\text{N}",
          "explanation": "Friction opposes upward motion: $32.23\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve for applied force",
          "workingLatex": "P = 33.52 + 32.23 = 65.75\\,\\text{N}",
          "explanation": "$P = 65.75\\,\\text{N}$ up the plane.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Verify equilibrium",
          "workingLatex": "P = W_{\\parallel} + F",
          "explanation": "All forces along the plane sum to zero.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Note minimum force",
          "workingLatex": "P_{\\min} = 65.75\\,\\text{N}",
          "explanation": "Any smaller force cannot maintain constant speed uphill.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Compare with weight",
          "workingLatex": "P = 65.75\\,\\text{N} > mg\\sin\\alpha",
          "explanation": "Pushing up requires overcoming both gravity and friction.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "P = 65.75\\,\\text{N}",
          "explanation": "Force required $= 65.75\\,\\text{N}$ parallel to the plane.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P = 65.75\\,\\text{N}$ up the plane."
    }
  },
  {
    "id": "al.y2.mech.applications-forces.q045",
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Applications of forces",
    "subtopicId": "al.y2.mech.applications-forces",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "numeric",
    "tags": [
      "lift",
      "apparent-weight",
      "normal-reaction"
    ],
    "questionText": "A person of mass $60\\,\\text{kg}$ stands on a scale in a lift that is accelerating upward with acceleration $2\\,\\text{m s}^{-2}$. Taking $g = 9.8\\,\\text{m s}^{-2}$, find the reading on the scale.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Apply Newton's second law vertically",
          "workingLatex": "R - mg = ma",
          "explanation": "Taking upward as positive; $R$ is the normal reaction (scale reading).",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Rearrange for $R$",
          "workingLatex": "R = m(g + a)",
          "explanation": "The reaction equals mass times (g plus acceleration).",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute",
          "workingLatex": "R = 60(9.8 + 2)",
          "explanation": "$m = 60\\,\\text{kg}$, $a = 2\\,\\text{m s}^{-2}$ upward.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Calculate",
          "workingLatex": "R = 708\\,\\text{N}",
          "explanation": "Scale reading: $708\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Compare with weight",
          "workingLatex": "mg = 588\\,\\text{N}",
          "explanation": "True weight $= 588\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Interpret apparent weight",
          "workingLatex": "\\text{Apparent weight greater than true weight}",
          "explanation": "When the lift accelerates upward, the scale reads more than $mg$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Explain physically",
          "workingLatex": "\\text{Floor pushes harder on passenger when lift accelerates up}",
          "explanation": "The floor must provide extra upward force to accelerate the person upward.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Formula for lift problems",
          "workingLatex": "R = m(g + a)",
          "explanation": "Use this whenever a particle accelerates vertically in a lift.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "R = 708\\,\\text{N}",
          "explanation": "Normal reaction (apparent weight) $= 708\\,\\text{N}$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$R = 708\\,\\text{N}$"
    }
  },
  {
    "id": "al.y2.mech.applications-forces.q046",
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Applications of forces",
    "subtopicId": "al.y2.mech.applications-forces",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "numeric",
    "tags": [
      "lift",
      "apparent-weight",
      "normal-reaction"
    ],
    "questionText": "A person of mass $80\\,\\text{kg}$ stands on a scale in a lift that is accelerating upward with acceleration $1.5\\,\\text{m s}^{-2}$. Taking $g = 9.8\\,\\text{m s}^{-2}$, find the reading on the scale.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Apply Newton's second law vertically",
          "workingLatex": "R - mg = ma",
          "explanation": "Taking upward as positive; $R$ is the normal reaction (scale reading).",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Rearrange for $R$",
          "workingLatex": "R = m(g + a)",
          "explanation": "The reaction equals mass times (g plus acceleration).",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute",
          "workingLatex": "R = 80(9.8 + 1.5)",
          "explanation": "$m = 80\\,\\text{kg}$, $a = 1.5\\,\\text{m s}^{-2}$ upward.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Calculate",
          "workingLatex": "R = 904\\,\\text{N}",
          "explanation": "Scale reading: $904\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Compare with weight",
          "workingLatex": "mg = 784\\,\\text{N}",
          "explanation": "True weight $= 784\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Interpret apparent weight",
          "workingLatex": "\\text{Apparent weight greater than true weight}",
          "explanation": "When the lift accelerates upward, the scale reads more than $mg$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Explain physically",
          "workingLatex": "\\text{Floor pushes harder on passenger when lift accelerates up}",
          "explanation": "The floor must provide extra upward force to accelerate the person upward.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Formula for lift problems",
          "workingLatex": "R = m(g + a)",
          "explanation": "Use this whenever a particle accelerates vertically in a lift.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "R = 904\\,\\text{N}",
          "explanation": "Normal reaction (apparent weight) $= 904\\,\\text{N}$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$R = 904\\,\\text{N}$"
    }
  },
  {
    "id": "al.y2.mech.applications-forces.q047",
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Applications of forces",
    "subtopicId": "al.y2.mech.applications-forces",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "numeric",
    "tags": [
      "lift",
      "apparent-weight",
      "normal-reaction"
    ],
    "questionText": "A person of mass $50\\,\\text{kg}$ stands on a scale in a lift that is accelerating downward with acceleration $1.5\\,\\text{m s}^{-2}$. Taking $g = 9.8\\,\\text{m s}^{-2}$, find the reading on the scale.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Apply Newton's second law vertically",
          "workingLatex": "R - mg = ma",
          "explanation": "Taking upward as positive; $R$ is the normal reaction (scale reading).",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Rearrange for $R$",
          "workingLatex": "R = m(g + a)",
          "explanation": "The reaction equals mass times (g plus acceleration).",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute",
          "workingLatex": "R = 50(9.8 + -1.5)",
          "explanation": "$m = 50\\,\\text{kg}$, $a = -1.5\\,\\text{m s}^{-2}$ downward.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Calculate",
          "workingLatex": "R = 415\\,\\text{N}",
          "explanation": "Scale reading: $415\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Compare with weight",
          "workingLatex": "mg = 490\\,\\text{N}",
          "explanation": "True weight $= 490\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Interpret apparent weight",
          "workingLatex": "\\text{Apparent weight less than true weight}",
          "explanation": "When the lift accelerates downward, the scale reads less than $mg$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Explain physically",
          "workingLatex": "\\text{Floor pushes harder on passenger when lift accelerates up}",
          "explanation": "The floor must provide extra upward force to accelerate the person upward.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Formula for lift problems",
          "workingLatex": "R = m(g + a)",
          "explanation": "Use this whenever a particle accelerates vertically in a lift.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "R = 415\\,\\text{N}",
          "explanation": "Normal reaction (apparent weight) $= 415\\,\\text{N}$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$R = 415\\,\\text{N}$"
    }
  },
  {
    "id": "al.y2.mech.applications-forces.q048",
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Applications of forces",
    "subtopicId": "al.y2.mech.applications-forces",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "numeric",
    "tags": [
      "lift",
      "apparent-weight",
      "normal-reaction"
    ],
    "questionText": "A person of mass $70\\,\\text{kg}$ stands on a scale in a lift that is accelerating upward with acceleration $3\\,\\text{m s}^{-2}$. Taking $g = 9.8\\,\\text{m s}^{-2}$, find the reading on the scale.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Apply Newton's second law vertically",
          "workingLatex": "R - mg = ma",
          "explanation": "Taking upward as positive; $R$ is the normal reaction (scale reading).",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Rearrange for $R$",
          "workingLatex": "R = m(g + a)",
          "explanation": "The reaction equals mass times (g plus acceleration).",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute",
          "workingLatex": "R = 70(9.8 + 3)",
          "explanation": "$m = 70\\,\\text{kg}$, $a = 3\\,\\text{m s}^{-2}$ upward.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Calculate",
          "workingLatex": "R = 896\\,\\text{N}",
          "explanation": "Scale reading: $896\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Compare with weight",
          "workingLatex": "mg = 686\\,\\text{N}",
          "explanation": "True weight $= 686\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Interpret apparent weight",
          "workingLatex": "\\text{Apparent weight greater than true weight}",
          "explanation": "When the lift accelerates upward, the scale reads more than $mg$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Explain physically",
          "workingLatex": "\\text{Floor pushes harder on passenger when lift accelerates up}",
          "explanation": "The floor must provide extra upward force to accelerate the person upward.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Formula for lift problems",
          "workingLatex": "R = m(g + a)",
          "explanation": "Use this whenever a particle accelerates vertically in a lift.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "R = 896\\,\\text{N}",
          "explanation": "Normal reaction (apparent weight) $= 896\\,\\text{N}$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$R = 896\\,\\text{N}$"
    }
  },
  {
    "id": "al.y2.mech.applications-forces.q049",
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Applications of forces",
    "subtopicId": "al.y2.mech.applications-forces",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "tags": [
      "connected-particles",
      "horizontal",
      "tension"
    ],
    "questionText": "Two particles of masses $3\\,\\text{kg}$ and $2\\,\\text{kg}$ are connected by a light inextensible string on a smooth horizontal table. A horizontal force of $15\\,\\text{N}$ is applied to the $3\\,\\text{kg}$ particle. Taking $g = 9.8\\,\\text{m s}^{-2}$, find the acceleration and the tension in the string.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Treat as one system",
          "workingLatex": "(3+2)a = P",
          "explanation": "Both particles accelerate together; internal tension cancels.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find acceleration",
          "workingLatex": "a = \\dfrac{15}{3+2} = 3\\,\\text{m s}^{-2}",
          "explanation": "$a = 3\\,\\text{m s}^{-2}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Consider $m_2$ alone",
          "workingLatex": "T = m_2 a",
          "explanation": "Tension provides the force accelerating the trailing particle.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Calculate tension",
          "workingLatex": "T = 2 \\times 3 = 6\\,\\text{N}",
          "explanation": "$T = 6\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check with $m_1$",
          "workingLatex": "P - T = 9 = m_1 a",
          "explanation": "Pull minus tension accelerates the leading particle.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Verify $P - T = m_1 a$",
          "workingLatex": "15 - 6 = 9",
          "explanation": "Consistent with $m_1 a = {fmt(m1*a)}$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Light inextensible string",
          "workingLatex": "\\text{Both particles have the same acceleration}",
          "explanation": "The string ensures equal acceleration.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Tension is internal",
          "workingLatex": "\\text{Tension does not affect the whole-system equation}",
          "explanation": "Only external force $P$ drives the system.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "a = 3\\,\\text{m s}^{-2}, \\quad T = 6\\,\\text{N}",
          "explanation": "Acceleration $= 3\\,\\text{m s}^{-2}$; tension $= 6\\,\\text{N}$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$a = 3\\,\\text{m s}^{-2}$; $T = 6\\,\\text{N}$."
    }
  },
  {
    "id": "al.y2.mech.applications-forces.q050",
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Applications of forces",
    "subtopicId": "al.y2.mech.applications-forces",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "tags": [
      "connected-particles",
      "horizontal",
      "tension"
    ],
    "questionText": "Two particles of masses $5\\,\\text{kg}$ and $4\\,\\text{kg}$ are connected by a light inextensible string on a smooth horizontal table. A horizontal force of $25\\,\\text{N}$ is applied to the $5\\,\\text{kg}$ particle. Taking $g = 9.8\\,\\text{m s}^{-2}$, find the acceleration and the tension in the string.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Treat as one system",
          "workingLatex": "(5+4)a = P",
          "explanation": "Both particles accelerate together; internal tension cancels.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find acceleration",
          "workingLatex": "a = \\dfrac{25}{5+4} = 2.78\\,\\text{m s}^{-2}",
          "explanation": "$a = 2.78\\,\\text{m s}^{-2}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Consider $m_2$ alone",
          "workingLatex": "T = m_2 a",
          "explanation": "Tension provides the force accelerating the trailing particle.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Calculate tension",
          "workingLatex": "T = 4 \\times 2.78 = 11.11\\,\\text{N}",
          "explanation": "$T = 11.11\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check with $m_1$",
          "workingLatex": "P - T = 13.89 = m_1 a",
          "explanation": "Pull minus tension accelerates the leading particle.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Verify $P - T = m_1 a$",
          "workingLatex": "25 - 11.11 = 13.89",
          "explanation": "Consistent with $m_1 a = {fmt(m1*a)}$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Light inextensible string",
          "workingLatex": "\\text{Both particles have the same acceleration}",
          "explanation": "The string ensures equal acceleration.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Tension is internal",
          "workingLatex": "\\text{Tension does not affect the whole-system equation}",
          "explanation": "Only external force $P$ drives the system.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "a = 2.78\\,\\text{m s}^{-2}, \\quad T = 11.11\\,\\text{N}",
          "explanation": "Acceleration $= 2.78\\,\\text{m s}^{-2}$; tension $= 11.11\\,\\text{N}$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$a = 2.78\\,\\text{m s}^{-2}$; $T = 11.11\\,\\text{N}$."
    }
  },
  {
    "id": "al.y2.mech.applications-forces.q051",
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Applications of forces",
    "subtopicId": "al.y2.mech.applications-forces",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "numeric",
    "tags": [
      "horizontal-push",
      "rough-slope",
      "dynamics"
    ],
    "questionText": "A particle of mass $5\\,\\text{kg}$ is on a rough plane inclined at $30°$ ($\\mu = 0.3$). A horizontal force of $40\\,\\text{N}$ pushes it up the plane. Taking $g = 9.8\\,\\text{m s}^{-2}$, find the acceleration of the particle.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Resolve horizontal push parallel to plane",
          "workingLatex": "P_{\\parallel} = 40\\cos 30° = 34.64\\,\\text{N}",
          "explanation": "Up-slope component: $34.64\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Resolve horizontal push into plane",
          "workingLatex": "P_{\\perp} = 40\\sin 30° = 20\\,\\text{N}",
          "explanation": "Increases normal reaction.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Normal reaction",
          "workingLatex": "R = mg\\cos\\alpha + P_{\\perp} = 62.44\\,\\text{N}",
          "explanation": "$R = 62.44\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Friction down the plane",
          "workingLatex": "F = \\mu R = 18.73\\,\\text{N}",
          "explanation": "Friction: $18.73\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Weight component down slope",
          "workingLatex": "W_{\\parallel} = 24.50\\,\\text{N}",
          "explanation": "Downslope: $24.50\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Apply $F = ma$ up the plane",
          "workingLatex": "ma = P_{\\parallel} - W_{\\parallel} - F",
          "explanation": "Resultant up-slope force equals $ma$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Substitute",
          "workingLatex": "5a = 34.64 - 24.50 - 18.73",
          "explanation": "All forces along the plane.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Solve for $a$",
          "workingLatex": "a = -1.72\\,\\text{m s}^{-2}",
          "explanation": "$a = -1.72\\,\\text{m s}^{-2}$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Direction",
          "workingLatex": "\\text{Particle accelerates down the plane}",
          "explanation": "Sign of $a$ gives direction.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Note effect of horizontal push on $R$",
          "workingLatex": "\\text{Horizontal push increases } R \\text{ and hence friction}",
          "explanation": "Pushing horizontally into the slope increases friction.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Compare with parallel push only",
          "workingLatex": "\\text{Horizontal push has components both up and into the plane}",
          "explanation": "Resolving is essential for angled applied forces.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Verify $a > 0$",
          "workingLatex": "a = -1.72",
          "explanation": "Positive acceleration means motion up the slope.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Answer",
          "workingLatex": "a = -1.72\\,\\text{m s}^{-2}",
          "explanation": "Acceleration $= -1.72\\,\\text{m s}^{-2}$ up the plane.",
          "diagram": null
        }
      ],
      "finalAnswer": "$a = -1.72\\,\\text{m s}^{-2}$ up the plane."
    }
  },
  {
    "id": "al.y2.mech.applications-forces.q052",
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Applications of forces",
    "subtopicId": "al.y2.mech.applications-forces",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "numeric",
    "tags": [
      "horizontal-push",
      "rough-slope",
      "dynamics"
    ],
    "questionText": "A particle of mass $8\\,\\text{kg}$ is on a rough plane inclined at $25°$ ($\\mu = 0.35$). A horizontal force of $50\\,\\text{N}$ pushes it up the plane. Taking $g = 9.8\\,\\text{m s}^{-2}$, find the acceleration of the particle.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Resolve horizontal push parallel to plane",
          "workingLatex": "P_{\\parallel} = 50\\cos 25° = 45.32\\,\\text{N}",
          "explanation": "Up-slope component: $45.32\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Resolve horizontal push into plane",
          "workingLatex": "P_{\\perp} = 50\\sin 25° = 21.13\\,\\text{N}",
          "explanation": "Increases normal reaction.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Normal reaction",
          "workingLatex": "R = mg\\cos\\alpha + P_{\\perp} = 92.19\\,\\text{N}",
          "explanation": "$R = 92.19\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Friction down the plane",
          "workingLatex": "F = \\mu R = 32.26\\,\\text{N}",
          "explanation": "Friction: $32.26\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Weight component down slope",
          "workingLatex": "W_{\\parallel} = 33.13\\,\\text{N}",
          "explanation": "Downslope: $33.13\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Apply $F = ma$ up the plane",
          "workingLatex": "ma = P_{\\parallel} - W_{\\parallel} - F",
          "explanation": "Resultant up-slope force equals $ma$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Substitute",
          "workingLatex": "8a = 45.32 - 33.13 - 32.26",
          "explanation": "All forces along the plane.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Solve for $a$",
          "workingLatex": "a = -2.51\\,\\text{m s}^{-2}",
          "explanation": "$a = -2.51\\,\\text{m s}^{-2}$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Direction",
          "workingLatex": "\\text{Particle accelerates down the plane}",
          "explanation": "Sign of $a$ gives direction.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Note effect of horizontal push on $R$",
          "workingLatex": "\\text{Horizontal push increases } R \\text{ and hence friction}",
          "explanation": "Pushing horizontally into the slope increases friction.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Compare with parallel push only",
          "workingLatex": "\\text{Horizontal push has components both up and into the plane}",
          "explanation": "Resolving is essential for angled applied forces.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Verify $a > 0$",
          "workingLatex": "a = -2.51",
          "explanation": "Positive acceleration means motion up the slope.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Answer",
          "workingLatex": "a = -2.51\\,\\text{m s}^{-2}",
          "explanation": "Acceleration $= -2.51\\,\\text{m s}^{-2}$ up the plane.",
          "diagram": null
        }
      ],
      "finalAnswer": "$a = -2.51\\,\\text{m s}^{-2}$ up the plane."
    }
  },
  {
    "id": "al.y2.mech.applications-forces.q053",
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Applications of forces",
    "subtopicId": "al.y2.mech.applications-forces",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "numeric",
    "tags": [
      "horizontal-push",
      "rough-slope",
      "dynamics"
    ],
    "questionText": "A particle of mass $6\\,\\text{kg}$ is on a rough plane inclined at $35°$ ($\\mu = 0.4$). A horizontal force of $35\\,\\text{N}$ pushes it up the plane. Taking $g = 9.8\\,\\text{m s}^{-2}$, find the acceleration of the particle.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Resolve horizontal push parallel to plane",
          "workingLatex": "P_{\\parallel} = 35\\cos 35° = 28.67\\,\\text{N}",
          "explanation": "Up-slope component: $28.67\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Resolve horizontal push into plane",
          "workingLatex": "P_{\\perp} = 35\\sin 35° = 20.08\\,\\text{N}",
          "explanation": "Increases normal reaction.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Normal reaction",
          "workingLatex": "R = mg\\cos\\alpha + P_{\\perp} = 68.24\\,\\text{N}",
          "explanation": "$R = 68.24\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Friction down the plane",
          "workingLatex": "F = \\mu R = 27.30\\,\\text{N}",
          "explanation": "Friction: $27.30\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Weight component down slope",
          "workingLatex": "W_{\\parallel} = 33.73\\,\\text{N}",
          "explanation": "Downslope: $33.73\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Apply $F = ma$ up the plane",
          "workingLatex": "ma = P_{\\parallel} - W_{\\parallel} - F",
          "explanation": "Resultant up-slope force equals $ma$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Substitute",
          "workingLatex": "6a = 28.67 - 33.73 - 27.30",
          "explanation": "All forces along the plane.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Solve for $a$",
          "workingLatex": "a = -5.39\\,\\text{m s}^{-2}",
          "explanation": "$a = -5.39\\,\\text{m s}^{-2}$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Direction",
          "workingLatex": "\\text{Particle accelerates down the plane}",
          "explanation": "Sign of $a$ gives direction.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Note effect of horizontal push on $R$",
          "workingLatex": "\\text{Horizontal push increases } R \\text{ and hence friction}",
          "explanation": "Pushing horizontally into the slope increases friction.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Compare with parallel push only",
          "workingLatex": "\\text{Horizontal push has components both up and into the plane}",
          "explanation": "Resolving is essential for angled applied forces.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Verify $a > 0$",
          "workingLatex": "a = -5.39",
          "explanation": "Positive acceleration means motion up the slope.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Answer",
          "workingLatex": "a = -5.39\\,\\text{m s}^{-2}",
          "explanation": "Acceleration $= -5.39\\,\\text{m s}^{-2}$ up the plane.",
          "diagram": null
        }
      ],
      "finalAnswer": "$a = -5.39\\,\\text{m s}^{-2}$ up the plane."
    }
  },
  {
    "id": "al.y2.mech.applications-forces.q054",
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Applications of forces",
    "subtopicId": "al.y2.mech.applications-forces",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "numeric",
    "tags": [
      "horizontal-push",
      "rough-slope",
      "dynamics"
    ],
    "questionText": "A particle of mass $10\\,\\text{kg}$ is on a rough plane inclined at $20°$ ($\\mu = 0.25$). A horizontal force of $60\\,\\text{N}$ pushes it up the plane. Taking $g = 9.8\\,\\text{m s}^{-2}$, find the acceleration of the particle.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Resolve horizontal push parallel to plane",
          "workingLatex": "P_{\\parallel} = 60\\cos 20° = 56.38\\,\\text{N}",
          "explanation": "Up-slope component: $56.38\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Resolve horizontal push into plane",
          "workingLatex": "P_{\\perp} = 60\\sin 20° = 20.52\\,\\text{N}",
          "explanation": "Increases normal reaction.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Normal reaction",
          "workingLatex": "R = mg\\cos\\alpha + P_{\\perp} = 112.61\\,\\text{N}",
          "explanation": "$R = 112.61\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Friction down the plane",
          "workingLatex": "F = \\mu R = 28.15\\,\\text{N}",
          "explanation": "Friction: $28.15\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Weight component down slope",
          "workingLatex": "W_{\\parallel} = 33.52\\,\\text{N}",
          "explanation": "Downslope: $33.52\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Apply $F = ma$ up the plane",
          "workingLatex": "ma = P_{\\parallel} - W_{\\parallel} - F",
          "explanation": "Resultant up-slope force equals $ma$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Substitute",
          "workingLatex": "10a = 56.38 - 33.52 - 28.15",
          "explanation": "All forces along the plane.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Solve for $a$",
          "workingLatex": "a = -0.53\\,\\text{m s}^{-2}",
          "explanation": "$a = -0.53\\,\\text{m s}^{-2}$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Direction",
          "workingLatex": "\\text{Particle accelerates down the plane}",
          "explanation": "Sign of $a$ gives direction.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Note effect of horizontal push on $R$",
          "workingLatex": "\\text{Horizontal push increases } R \\text{ and hence friction}",
          "explanation": "Pushing horizontally into the slope increases friction.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Compare with parallel push only",
          "workingLatex": "\\text{Horizontal push has components both up and into the plane}",
          "explanation": "Resolving is essential for angled applied forces.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Verify $a > 0$",
          "workingLatex": "a = -0.53",
          "explanation": "Positive acceleration means motion up the slope.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Answer",
          "workingLatex": "a = -0.53\\,\\text{m s}^{-2}",
          "explanation": "Acceleration $= -0.53\\,\\text{m s}^{-2}$ up the plane.",
          "diagram": null
        }
      ],
      "finalAnswer": "$a = -0.53\\,\\text{m s}^{-2}$ up the plane."
    }
  },
  {
    "id": "al.y2.mech.applications-forces.q055",
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Applications of forces",
    "subtopicId": "al.y2.mech.applications-forces",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "numeric",
    "tags": [
      "equilibrium",
      "pulley",
      "find-mu"
    ],
    "questionText": "A particle of mass $4\\,\\text{kg}$ is on a rough plane inclined at $30°$ and connected by a string over a pulley to a hanging mass of $5\\,\\text{kg}$. The system is in equilibrium. Taking $g = 9.8\\,\\text{m s}^{-2}$, find $\\mu$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Condition for equilibrium",
          "workingLatex": "a = 0",
          "explanation": "No acceleration means forces balance.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "For hanging mass",
          "workingLatex": "T = m_2 g = 49\\,\\text{N}",
          "explanation": "Tension equals weight of hanging mass: $49\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "For mass on slope (up slope forces = down slope forces)",
          "workingLatex": "T = m_1 g\\sin\\alpha + \\mu m_1 g\\cos\\alpha",
          "explanation": "Tension balances weight component and friction.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute tension",
          "workingLatex": "m_2 g = m_1 g\\sin\\alpha + \\mu m_1 g\\cos\\alpha",
          "explanation": "Set the two expressions for $T$ equal.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Cancel $g$ and solve for $\\mu$",
          "workingLatex": "\\mu = \\dfrac{m_2 - m_1\\sin\\alpha}{m_1\\cos\\alpha}",
          "explanation": "Rearrange to find the coefficient of friction.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute values",
          "workingLatex": "\\mu = \\dfrac{5 - 4\\sin 30°}{4\\cos 30°}",
          "explanation": "Numerical substitution.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Calculate",
          "workingLatex": "\\mu = 0.866",
          "explanation": "$\\mu = 0.866$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Interpret",
          "workingLatex": "\\text{For } \\mu = 0.866, \\text{ the system is in equilibrium}",
          "explanation": "This is the minimum $\\mu$ needed if $m_2$ tends to pull $m_1$ up the slope.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Check $m_2 > m_1\\sin\\alpha$",
          "workingLatex": "5 > 2",
          "explanation": "Hanging mass must tend to pull the system for this equilibrium.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Physical meaning",
          "workingLatex": "\\text{Friction prevents $m_1$ from sliding down}",
          "explanation": "Without sufficient friction, $m_1$ would slide down despite the hanging mass.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Verify tension",
          "workingLatex": "T = 49\\,\\text{N}",
          "explanation": "Both equations give the same tension.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Answer",
          "workingLatex": "\\mu = 0.866",
          "explanation": "Coefficient of friction for equilibrium: $0.866$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Exam note",
          "workingLatex": "\\text{Set } a = 0 \\text{ in both equations of motion}",
          "explanation": "Equilibrium problems use $F=0$ or $a=0$ rather than $F=ma$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\mu = 0.866$"
    }
  },
  {
    "id": "al.y2.mech.applications-forces.q056",
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Applications of forces",
    "subtopicId": "al.y2.mech.applications-forces",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "numeric",
    "tags": [
      "equilibrium",
      "pulley",
      "find-mu"
    ],
    "questionText": "A particle of mass $6\\,\\text{kg}$ is on a rough plane inclined at $35°$ and connected by a string over a pulley to a hanging mass of $4\\,\\text{kg}$. The system is in equilibrium. Taking $g = 9.8\\,\\text{m s}^{-2}$, find $\\mu$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Condition for equilibrium",
          "workingLatex": "a = 0",
          "explanation": "No acceleration means forces balance.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "For hanging mass",
          "workingLatex": "T = m_2 g = 39.20\\,\\text{N}",
          "explanation": "Tension equals weight of hanging mass: $39.20\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "For mass on slope (up slope forces = down slope forces)",
          "workingLatex": "T = m_1 g\\sin\\alpha + \\mu m_1 g\\cos\\alpha",
          "explanation": "Tension balances weight component and friction.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute tension",
          "workingLatex": "m_2 g = m_1 g\\sin\\alpha + \\mu m_1 g\\cos\\alpha",
          "explanation": "Set the two expressions for $T$ equal.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Cancel $g$ and solve for $\\mu$",
          "workingLatex": "\\mu = \\dfrac{m_2 - m_1\\sin\\alpha}{m_1\\cos\\alpha}",
          "explanation": "Rearrange to find the coefficient of friction.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute values",
          "workingLatex": "\\mu = \\dfrac{4 - 6\\sin 35°}{6\\cos 35°}",
          "explanation": "Numerical substitution.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Calculate",
          "workingLatex": "\\mu = 0.114",
          "explanation": "$\\mu = 0.114$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Interpret",
          "workingLatex": "\\text{For } \\mu = 0.114, \\text{ the system is in equilibrium}",
          "explanation": "This is the minimum $\\mu$ needed if $m_2$ tends to pull $m_1$ up the slope.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Check $m_2 > m_1\\sin\\alpha$",
          "workingLatex": "4 > 3.44",
          "explanation": "Hanging mass must tend to pull the system for this equilibrium.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Physical meaning",
          "workingLatex": "\\text{Friction prevents $m_1$ from sliding down}",
          "explanation": "Without sufficient friction, $m_1$ would slide down despite the hanging mass.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Verify tension",
          "workingLatex": "T = 39.20\\,\\text{N}",
          "explanation": "Both equations give the same tension.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Answer",
          "workingLatex": "\\mu = 0.114",
          "explanation": "Coefficient of friction for equilibrium: $0.114$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Exam note",
          "workingLatex": "\\text{Set } a = 0 \\text{ in both equations of motion}",
          "explanation": "Equilibrium problems use $F=0$ or $a=0$ rather than $F=ma$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\mu = 0.114$"
    }
  },
  {
    "id": "al.y2.mech.applications-forces.q057",
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Applications of forces",
    "subtopicId": "al.y2.mech.applications-forces",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "numeric",
    "tags": [
      "equilibrium",
      "pulley",
      "find-mu"
    ],
    "questionText": "A particle of mass $8\\,\\text{kg}$ is on a rough plane inclined at $25°$ and connected by a string over a pulley to a hanging mass of $6\\,\\text{kg}$. The system is in equilibrium. Taking $g = 9.8\\,\\text{m s}^{-2}$, find $\\mu$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Condition for equilibrium",
          "workingLatex": "a = 0",
          "explanation": "No acceleration means forces balance.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "For hanging mass",
          "workingLatex": "T = m_2 g = 58.80\\,\\text{N}",
          "explanation": "Tension equals weight of hanging mass: $58.80\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "For mass on slope (up slope forces = down slope forces)",
          "workingLatex": "T = m_1 g\\sin\\alpha + \\mu m_1 g\\cos\\alpha",
          "explanation": "Tension balances weight component and friction.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute tension",
          "workingLatex": "m_2 g = m_1 g\\sin\\alpha + \\mu m_1 g\\cos\\alpha",
          "explanation": "Set the two expressions for $T$ equal.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Cancel $g$ and solve for $\\mu$",
          "workingLatex": "\\mu = \\dfrac{m_2 - m_1\\sin\\alpha}{m_1\\cos\\alpha}",
          "explanation": "Rearrange to find the coefficient of friction.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute values",
          "workingLatex": "\\mu = \\dfrac{6 - 8\\sin 25°}{8\\cos 25°}",
          "explanation": "Numerical substitution.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Calculate",
          "workingLatex": "\\mu = 0.361",
          "explanation": "$\\mu = 0.361$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Interpret",
          "workingLatex": "\\text{For } \\mu = 0.361, \\text{ the system is in equilibrium}",
          "explanation": "This is the minimum $\\mu$ needed if $m_2$ tends to pull $m_1$ up the slope.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Check $m_2 > m_1\\sin\\alpha$",
          "workingLatex": "6 > 3.38",
          "explanation": "Hanging mass must tend to pull the system for this equilibrium.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Physical meaning",
          "workingLatex": "\\text{Friction prevents $m_1$ from sliding down}",
          "explanation": "Without sufficient friction, $m_1$ would slide down despite the hanging mass.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Verify tension",
          "workingLatex": "T = 58.80\\,\\text{N}",
          "explanation": "Both equations give the same tension.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Answer",
          "workingLatex": "\\mu = 0.361",
          "explanation": "Coefficient of friction for equilibrium: $0.361$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Exam note",
          "workingLatex": "\\text{Set } a = 0 \\text{ in both equations of motion}",
          "explanation": "Equilibrium problems use $F=0$ or $a=0$ rather than $F=ma$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\mu = 0.361$"
    }
  },
  {
    "id": "al.y2.mech.applications-forces.q058",
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Applications of forces",
    "subtopicId": "al.y2.mech.applications-forces",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "numeric",
    "tags": [
      "equilibrium",
      "pulley",
      "find-mu"
    ],
    "questionText": "A particle of mass $5\\,\\text{kg}$ is on a rough plane inclined at $40°$ and connected by a string over a pulley to a hanging mass of $3\\,\\text{kg}$. The system is in equilibrium. Taking $g = 9.8\\,\\text{m s}^{-2}$, find $\\mu$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Condition for equilibrium",
          "workingLatex": "a = 0",
          "explanation": "No acceleration means forces balance.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "For hanging mass",
          "workingLatex": "T = m_2 g = 29.40\\,\\text{N}",
          "explanation": "Tension equals weight of hanging mass: $29.40\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "For mass on slope (up slope forces = down slope forces)",
          "workingLatex": "T = m_1 g\\sin\\alpha + \\mu m_1 g\\cos\\alpha",
          "explanation": "Tension balances weight component and friction.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute tension",
          "workingLatex": "m_2 g = m_1 g\\sin\\alpha + \\mu m_1 g\\cos\\alpha",
          "explanation": "Set the two expressions for $T$ equal.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Cancel $g$ and solve for $\\mu$",
          "workingLatex": "\\mu = \\dfrac{m_2 - m_1\\sin\\alpha}{m_1\\cos\\alpha}",
          "explanation": "Rearrange to find the coefficient of friction.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute values",
          "workingLatex": "\\mu = \\dfrac{3 - 5\\sin 40°}{5\\cos 40°}",
          "explanation": "Numerical substitution.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Calculate",
          "workingLatex": "\\mu = 0",
          "explanation": "$\\mu = 0$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Interpret",
          "workingLatex": "\\text{For } \\mu = 0, \\text{ the system is in equilibrium}",
          "explanation": "This is the minimum $\\mu$ needed if $m_2$ tends to pull $m_1$ up the slope.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Check $m_2 > m_1\\sin\\alpha$",
          "workingLatex": "3 <= 3.21",
          "explanation": "Hanging mass must tend to pull the system for this equilibrium.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Physical meaning",
          "workingLatex": "\\text{Friction prevents $m_1$ from sliding down}",
          "explanation": "Without sufficient friction, $m_1$ would slide down despite the hanging mass.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Verify tension",
          "workingLatex": "T = 29.40\\,\\text{N}",
          "explanation": "Both equations give the same tension.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Answer",
          "workingLatex": "\\mu = 0",
          "explanation": "Coefficient of friction for equilibrium: $0$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Exam note",
          "workingLatex": "\\text{Set } a = 0 \\text{ in both equations of motion}",
          "explanation": "Equilibrium problems use $F=0$ or $a=0$ rather than $F=ma$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\mu = 0$"
    }
  },
  {
    "id": "al.y2.mech.applications-forces.q059",
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Applications of forces",
    "subtopicId": "al.y2.mech.applications-forces",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "numeric",
    "tags": [
      "lift",
      "find-acceleration",
      "apparent-weight"
    ],
    "questionText": "A person of mass $60\\,\\text{kg}$ stands on a scale in a lift. The scale reads $700\\,\\text{N}$. Taking $g = 9.8\\,\\text{m s}^{-2}$, find the acceleration of the lift and state whether it is moving up or down.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Use the lift formula",
          "workingLatex": "R = m(g + a)",
          "explanation": "Normal reaction equals apparent weight.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Rearrange for $a$",
          "workingLatex": "a = \\dfrac{R}{m} - g",
          "explanation": "Solve for acceleration from the scale reading.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute",
          "workingLatex": "a = \\dfrac{700}{60} - 9.8",
          "explanation": "$R = 700\\,\\text{N}$, $m = 60\\,\\text{kg}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Calculate",
          "workingLatex": "a = 1.87\\,\\text{m s}^{-2}",
          "explanation": "$a = 1.87\\,\\text{m s}^{-2}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Determine direction",
          "workingLatex": "\\text{Lift accelerates upward}",
          "explanation": "Positive acceleration.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Compare with weight",
          "workingLatex": "mg = 588\\,\\text{N}",
          "explanation": "True weight $= 588\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Compare reading with weight",
          "workingLatex": "R = 700\\,\\text{N} > mg = 588\\,\\text{N}",
          "explanation": "Scale reads more when accelerating up, less when accelerating down.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Verify formula",
          "workingLatex": "R = 60(9.8 + 1.87) = 700\\,\\text{N}",
          "explanation": "Substituting $a$ back gives the given reading.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Physical interpretation",
          "workingLatex": "\\text{Passenger feels heavier}",
          "explanation": "Apparent weight sensation matches the scale reading.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Free fall case",
          "workingLatex": "R = 0 \\Rightarrow a = -g",
          "explanation": "If the lift falls freely, the scale reads zero.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Constant velocity",
          "workingLatex": "a = 0 \\Rightarrow R = mg",
          "explanation": "At constant speed, apparent weight equals true weight.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Answer",
          "workingLatex": "a = 1.87\\,\\text{m s}^{-2}",
          "explanation": "Acceleration of lift $= 1.87\\,\\text{m s}^{-2}$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Method summary",
          "workingLatex": "a = R/m - g \\text{ for lift problems}",
          "explanation": "Quick formula when scale reading and mass are known.",
          "diagram": null
        }
      ],
      "finalAnswer": "$a = 1.87\\,\\text{m s}^{-2}$; the lift is accelerating upward."
    }
  },
  {
    "id": "al.y2.mech.applications-forces.q060",
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Applications of forces",
    "subtopicId": "al.y2.mech.applications-forces",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "numeric",
    "tags": [
      "lift",
      "find-acceleration",
      "apparent-weight"
    ],
    "questionText": "A person of mass $80\\,\\text{kg}$ stands on a scale in a lift. The scale reads $600\\,\\text{N}$. Taking $g = 9.8\\,\\text{m s}^{-2}$, find the acceleration of the lift and state whether it is moving up or down.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Use the lift formula",
          "workingLatex": "R = m(g + a)",
          "explanation": "Normal reaction equals apparent weight.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Rearrange for $a$",
          "workingLatex": "a = \\dfrac{R}{m} - g",
          "explanation": "Solve for acceleration from the scale reading.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute",
          "workingLatex": "a = \\dfrac{600}{80} - 9.8",
          "explanation": "$R = 600\\,\\text{N}$, $m = 80\\,\\text{kg}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Calculate",
          "workingLatex": "a = -2.30\\,\\text{m s}^{-2}",
          "explanation": "$a = -2.30\\,\\text{m s}^{-2}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Determine direction",
          "workingLatex": "\\text{Lift accelerates downward}",
          "explanation": "Negative acceleration.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Compare with weight",
          "workingLatex": "mg = 784\\,\\text{N}",
          "explanation": "True weight $= 784\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Compare reading with weight",
          "workingLatex": "R = 600\\,\\text{N} < mg = 784\\,\\text{N}",
          "explanation": "Scale reads more when accelerating up, less when accelerating down.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Verify formula",
          "workingLatex": "R = 80(9.8 + -2.30) = 600\\,\\text{N}",
          "explanation": "Substituting $a$ back gives the given reading.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Physical interpretation",
          "workingLatex": "\\text{Passenger feels lighter}",
          "explanation": "Apparent weight sensation matches the scale reading.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Free fall case",
          "workingLatex": "R = 0 \\Rightarrow a = -g",
          "explanation": "If the lift falls freely, the scale reads zero.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Constant velocity",
          "workingLatex": "a = 0 \\Rightarrow R = mg",
          "explanation": "At constant speed, apparent weight equals true weight.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Answer",
          "workingLatex": "a = -2.30\\,\\text{m s}^{-2}",
          "explanation": "Acceleration of lift $= -2.30\\,\\text{m s}^{-2}$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Method summary",
          "workingLatex": "a = R/m - g \\text{ for lift problems}",
          "explanation": "Quick formula when scale reading and mass are known.",
          "diagram": null
        }
      ],
      "finalAnswer": "$a = -2.30\\,\\text{m s}^{-2}$; the lift is accelerating downward."
    }
  },
  {
    "id": "al.y2.mech.applications-forces.q061",
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Applications of forces",
    "subtopicId": "al.y2.mech.applications-forces",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "numeric",
    "tags": [
      "lift",
      "find-acceleration",
      "apparent-weight"
    ],
    "questionText": "A person of mass $50\\,\\text{kg}$ stands on a scale in a lift. The scale reads $750\\,\\text{N}$. Taking $g = 9.8\\,\\text{m s}^{-2}$, find the acceleration of the lift and state whether it is moving up or down.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Use the lift formula",
          "workingLatex": "R = m(g + a)",
          "explanation": "Normal reaction equals apparent weight.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Rearrange for $a$",
          "workingLatex": "a = \\dfrac{R}{m} - g",
          "explanation": "Solve for acceleration from the scale reading.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute",
          "workingLatex": "a = \\dfrac{750}{50} - 9.8",
          "explanation": "$R = 750\\,\\text{N}$, $m = 50\\,\\text{kg}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Calculate",
          "workingLatex": "a = 5.20\\,\\text{m s}^{-2}",
          "explanation": "$a = 5.20\\,\\text{m s}^{-2}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Determine direction",
          "workingLatex": "\\text{Lift accelerates upward}",
          "explanation": "Positive acceleration.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Compare with weight",
          "workingLatex": "mg = 490\\,\\text{N}",
          "explanation": "True weight $= 490\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Compare reading with weight",
          "workingLatex": "R = 750\\,\\text{N} > mg = 490\\,\\text{N}",
          "explanation": "Scale reads more when accelerating up, less when accelerating down.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Verify formula",
          "workingLatex": "R = 50(9.8 + 5.20) = 750\\,\\text{N}",
          "explanation": "Substituting $a$ back gives the given reading.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Physical interpretation",
          "workingLatex": "\\text{Passenger feels heavier}",
          "explanation": "Apparent weight sensation matches the scale reading.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Free fall case",
          "workingLatex": "R = 0 \\Rightarrow a = -g",
          "explanation": "If the lift falls freely, the scale reads zero.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Constant velocity",
          "workingLatex": "a = 0 \\Rightarrow R = mg",
          "explanation": "At constant speed, apparent weight equals true weight.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Answer",
          "workingLatex": "a = 5.20\\,\\text{m s}^{-2}",
          "explanation": "Acceleration of lift $= 5.20\\,\\text{m s}^{-2}$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Method summary",
          "workingLatex": "a = R/m - g \\text{ for lift problems}",
          "explanation": "Quick formula when scale reading and mass are known.",
          "diagram": null
        }
      ],
      "finalAnswer": "$a = 5.20\\,\\text{m s}^{-2}$; the lift is accelerating upward."
    }
  },
  {
    "id": "al.y2.mech.applications-forces.q062",
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Applications of forces",
    "subtopicId": "al.y2.mech.applications-forces",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "numeric",
    "tags": [
      "lift",
      "find-acceleration",
      "apparent-weight"
    ],
    "questionText": "A person of mass $70\\,\\text{kg}$ stands on a scale in a lift. The scale reads $560\\,\\text{N}$. Taking $g = 9.8\\,\\text{m s}^{-2}$, find the acceleration of the lift and state whether it is moving up or down.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Use the lift formula",
          "workingLatex": "R = m(g + a)",
          "explanation": "Normal reaction equals apparent weight.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Rearrange for $a$",
          "workingLatex": "a = \\dfrac{R}{m} - g",
          "explanation": "Solve for acceleration from the scale reading.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute",
          "workingLatex": "a = \\dfrac{560}{70} - 9.8",
          "explanation": "$R = 560\\,\\text{N}$, $m = 70\\,\\text{kg}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Calculate",
          "workingLatex": "a = -1.80\\,\\text{m s}^{-2}",
          "explanation": "$a = -1.80\\,\\text{m s}^{-2}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Determine direction",
          "workingLatex": "\\text{Lift accelerates downward}",
          "explanation": "Negative acceleration.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Compare with weight",
          "workingLatex": "mg = 686\\,\\text{N}",
          "explanation": "True weight $= 686\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Compare reading with weight",
          "workingLatex": "R = 560\\,\\text{N} < mg = 686\\,\\text{N}",
          "explanation": "Scale reads more when accelerating up, less when accelerating down.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Verify formula",
          "workingLatex": "R = 70(9.8 + -1.80) = 560\\,\\text{N}",
          "explanation": "Substituting $a$ back gives the given reading.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Physical interpretation",
          "workingLatex": "\\text{Passenger feels lighter}",
          "explanation": "Apparent weight sensation matches the scale reading.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Free fall case",
          "workingLatex": "R = 0 \\Rightarrow a = -g",
          "explanation": "If the lift falls freely, the scale reads zero.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Constant velocity",
          "workingLatex": "a = 0 \\Rightarrow R = mg",
          "explanation": "At constant speed, apparent weight equals true weight.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Answer",
          "workingLatex": "a = -1.80\\,\\text{m s}^{-2}",
          "explanation": "Acceleration of lift $= -1.80\\,\\text{m s}^{-2}$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Method summary",
          "workingLatex": "a = R/m - g \\text{ for lift problems}",
          "explanation": "Quick formula when scale reading and mass are known.",
          "diagram": null
        }
      ],
      "finalAnswer": "$a = -1.80\\,\\text{m s}^{-2}$; the lift is accelerating downward."
    }
  },
  {
    "id": "al.y2.mech.applications-forces.q063",
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Applications of forces",
    "subtopicId": "al.y2.mech.applications-forces",
    "difficulty": "Hard",
    "marks": 9,
    "answerType": "written",
    "tags": [
      "multi-part",
      "pulley",
      "rough-slope"
    ],
    "questionText": "A particle of mass $5\\,\\text{kg}$ is on a rough plane inclined at $30°$ ($\\mu = 0.2$), connected to a hanging mass of $3\\,\\text{kg}$. Taking $g = 9.8\\,\\text{m s}^{-2}$, find:\n\n(a) the acceleration of the system,\n(b) the tension in the string,\n(c) the normal reaction on $m_1$,\n(d) the frictional force on $m_1$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Part (a): model the system",
          "workingLatex": "m_1 = 5\\,\\text{kg on rough slope}, \\quad m_2 = 3\\,\\text{kg hanging}",
          "explanation": "Light inextensible string over smooth pulley.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Forces on $m_2$",
          "workingLatex": "m_2 g - T = m_2 a",
          "explanation": "Downward positive for the hanging mass.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Forces on $m_1$",
          "workingLatex": "T - m_1 g\\sin\\alpha - \\mu m_1 g\\cos\\alpha = m_1 a",
          "explanation": "Friction $8.49\\,\\text{N}$ down the plane.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Add equations",
          "workingLatex": "(3 - 5\\sin 30° - 0.2\\times5\\cos 30°)g = (5+3)a",
          "explanation": "Eliminate $T$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Part (a): acceleration",
          "workingLatex": "a = -0.45\\,\\text{m s}^{-2}",
          "explanation": "(a) $a = -0.45\\,\\text{m s}^{-2}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Part (b): tension",
          "workingLatex": "T = m_2(g-a) = 30.75\\,\\text{N}",
          "explanation": "(b) $T = 30.75\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Part (c): normal reaction on $m_1$",
          "workingLatex": "R = 42.44\\,\\text{N}",
          "explanation": "(c) $R = 42.44\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Part (d): friction magnitude",
          "workingLatex": "F = 8.49\\,\\text{N}",
          "explanation": "(d) Friction $= 8.49\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Verify direction of motion",
          "workingLatex": "\\text{$m_2$ moves up}",
          "explanation": "Consistent with sign of $a$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Check tension positive",
          "workingLatex": "T = 30.75 > 0",
          "explanation": "String remains taut.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Energy perspective (optional)",
          "workingLatex": "\\text{Loss in PE of one mass = gain in KE of both + work against friction}",
          "explanation": "Confirms the dynamics are physically reasonable.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Summarise (a) and (b)",
          "workingLatex": "a = -0.45\\,\\text{m s}^{-2}, \\quad T = 30.75\\,\\text{N}",
          "explanation": "Key results.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Summarise (c) and (d)",
          "workingLatex": "R = 42.44\\,\\text{N}, \\quad F = 8.49\\,\\text{N}",
          "explanation": "Normal reaction and friction on slope.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Method recap",
          "workingLatex": "\\text{Two equations, add to eliminate } T",
          "explanation": "Standard approach for connected particle problems.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "Final answers",
          "workingLatex": "a = -0.45\\,\\text{m s}^{-2}, \\quad T = 30.75\\,\\text{N}, \\quad R = 42.44\\,\\text{N}, \\quad F = 8.49\\,\\text{N}",
          "explanation": "Complete solution.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $a = -0.45\\,\\text{m s}^{-2}$; (b) $T = 30.75\\,\\text{N}$; (c) $R = 42.44\\,\\text{N}$; (d) $F = 8.49\\,\\text{N}$."
    }
  },
  {
    "id": "al.y2.mech.applications-forces.q064",
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Applications of forces",
    "subtopicId": "al.y2.mech.applications-forces",
    "difficulty": "Hard",
    "marks": 9,
    "answerType": "written",
    "tags": [
      "multi-part",
      "pulley",
      "rough-slope"
    ],
    "questionText": "A particle of mass $8\\,\\text{kg}$ is on a rough plane inclined at $25°$ ($\\mu = 0.3$), connected to a hanging mass of $4\\,\\text{kg}$. Taking $g = 9.8\\,\\text{m s}^{-2}$, find:\n\n(a) the acceleration of the system,\n(b) the tension in the string,\n(c) the normal reaction on $m_1$,\n(d) the frictional force on $m_1$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Part (a): model the system",
          "workingLatex": "m_1 = 8\\,\\text{kg on rough slope}, \\quad m_2 = 4\\,\\text{kg hanging}",
          "explanation": "Light inextensible string over smooth pulley.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Forces on $m_2$",
          "workingLatex": "m_2 g - T = m_2 a",
          "explanation": "Downward positive for the hanging mass.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Forces on $m_1$",
          "workingLatex": "T - m_1 g\\sin\\alpha - \\mu m_1 g\\cos\\alpha = m_1 a",
          "explanation": "Friction $21.32\\,\\text{N}$ down the plane.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Add equations",
          "workingLatex": "(4 - 8\\sin 25° - 0.3\\times8\\cos 25°)g = (8+4)a",
          "explanation": "Eliminate $T$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Part (a): acceleration",
          "workingLatex": "a = -1.27\\,\\text{m s}^{-2}",
          "explanation": "(a) $a = -1.27\\,\\text{m s}^{-2}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Part (b): tension",
          "workingLatex": "T = m_2(g-a) = 44.28\\,\\text{N}",
          "explanation": "(b) $T = 44.28\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Part (c): normal reaction on $m_1$",
          "workingLatex": "R = 71.05\\,\\text{N}",
          "explanation": "(c) $R = 71.05\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Part (d): friction magnitude",
          "workingLatex": "F = 21.32\\,\\text{N}",
          "explanation": "(d) Friction $= 21.32\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Verify direction of motion",
          "workingLatex": "\\text{$m_2$ moves up}",
          "explanation": "Consistent with sign of $a$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Check tension positive",
          "workingLatex": "T = 44.28 > 0",
          "explanation": "String remains taut.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Energy perspective (optional)",
          "workingLatex": "\\text{Loss in PE of one mass = gain in KE of both + work against friction}",
          "explanation": "Confirms the dynamics are physically reasonable.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Summarise (a) and (b)",
          "workingLatex": "a = -1.27\\,\\text{m s}^{-2}, \\quad T = 44.28\\,\\text{N}",
          "explanation": "Key results.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Summarise (c) and (d)",
          "workingLatex": "R = 71.05\\,\\text{N}, \\quad F = 21.32\\,\\text{N}",
          "explanation": "Normal reaction and friction on slope.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Method recap",
          "workingLatex": "\\text{Two equations, add to eliminate } T",
          "explanation": "Standard approach for connected particle problems.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "Final answers",
          "workingLatex": "a = -1.27\\,\\text{m s}^{-2}, \\quad T = 44.28\\,\\text{N}, \\quad R = 71.05\\,\\text{N}, \\quad F = 21.32\\,\\text{N}",
          "explanation": "Complete solution.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $a = -1.27\\,\\text{m s}^{-2}$; (b) $T = 44.28\\,\\text{N}$; (c) $R = 71.05\\,\\text{N}$; (d) $F = 21.32\\,\\text{N}$."
    }
  },
  {
    "id": "al.y2.mech.applications-forces.q065",
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Applications of forces",
    "subtopicId": "al.y2.mech.applications-forces",
    "difficulty": "Hard",
    "marks": 9,
    "answerType": "written",
    "tags": [
      "multi-part",
      "pulley",
      "rough-slope"
    ],
    "questionText": "A particle of mass $6\\,\\text{kg}$ is on a rough plane inclined at $35°$ ($\\mu = 0.25$), connected to a hanging mass of $2\\,\\text{kg}$. Taking $g = 9.8\\,\\text{m s}^{-2}$, find:\n\n(a) the acceleration of the system,\n(b) the tension in the string,\n(c) the normal reaction on $m_1$,\n(d) the frictional force on $m_1$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Part (a): model the system",
          "workingLatex": "m_1 = 6\\,\\text{kg on rough slope}, \\quad m_2 = 2\\,\\text{kg hanging}",
          "explanation": "Light inextensible string over smooth pulley.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Forces on $m_2$",
          "workingLatex": "m_2 g - T = m_2 a",
          "explanation": "Downward positive for the hanging mass.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Forces on $m_1$",
          "workingLatex": "T - m_1 g\\sin\\alpha - \\mu m_1 g\\cos\\alpha = m_1 a",
          "explanation": "Friction $12.04\\,\\text{N}$ down the plane.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Add equations",
          "workingLatex": "(2 - 6\\sin 35° - 0.25\\times6\\cos 35°)g = (6+2)a",
          "explanation": "Eliminate $T$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Part (a): acceleration",
          "workingLatex": "a = -3.27\\,\\text{m s}^{-2}",
          "explanation": "(a) $a = -3.27\\,\\text{m s}^{-2}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Part (b): tension",
          "workingLatex": "T = m_2(g-a) = 26.14\\,\\text{N}",
          "explanation": "(b) $T = 26.14\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Part (c): normal reaction on $m_1$",
          "workingLatex": "R = 48.17\\,\\text{N}",
          "explanation": "(c) $R = 48.17\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Part (d): friction magnitude",
          "workingLatex": "F = 12.04\\,\\text{N}",
          "explanation": "(d) Friction $= 12.04\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Verify direction of motion",
          "workingLatex": "\\text{$m_2$ moves up}",
          "explanation": "Consistent with sign of $a$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Check tension positive",
          "workingLatex": "T = 26.14 > 0",
          "explanation": "String remains taut.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Energy perspective (optional)",
          "workingLatex": "\\text{Loss in PE of one mass = gain in KE of both + work against friction}",
          "explanation": "Confirms the dynamics are physically reasonable.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Summarise (a) and (b)",
          "workingLatex": "a = -3.27\\,\\text{m s}^{-2}, \\quad T = 26.14\\,\\text{N}",
          "explanation": "Key results.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Summarise (c) and (d)",
          "workingLatex": "R = 48.17\\,\\text{N}, \\quad F = 12.04\\,\\text{N}",
          "explanation": "Normal reaction and friction on slope.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Method recap",
          "workingLatex": "\\text{Two equations, add to eliminate } T",
          "explanation": "Standard approach for connected particle problems.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "Final answers",
          "workingLatex": "a = -3.27\\,\\text{m s}^{-2}, \\quad T = 26.14\\,\\text{N}, \\quad R = 48.17\\,\\text{N}, \\quad F = 12.04\\,\\text{N}",
          "explanation": "Complete solution.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $a = -3.27\\,\\text{m s}^{-2}$; (b) $T = 26.14\\,\\text{N}$; (c) $R = 48.17\\,\\text{N}$; (d) $F = 12.04\\,\\text{N}$."
    }
  },
  {
    "id": "al.y2.mech.applications-forces.q066",
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Applications of forces",
    "subtopicId": "al.y2.mech.applications-forces",
    "difficulty": "Hard",
    "marks": 9,
    "answerType": "written",
    "tags": [
      "multi-part",
      "pulley",
      "rough-slope"
    ],
    "questionText": "A particle of mass $10\\,\\text{kg}$ is on a rough plane inclined at $20°$ ($\\mu = 0.4$), connected to a hanging mass of $5\\,\\text{kg}$. Taking $g = 9.8\\,\\text{m s}^{-2}$, find:\n\n(a) the acceleration of the system,\n(b) the tension in the string,\n(c) the normal reaction on $m_1$,\n(d) the frictional force on $m_1$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Part (a): model the system",
          "workingLatex": "m_1 = 10\\,\\text{kg on rough slope}, \\quad m_2 = 5\\,\\text{kg hanging}",
          "explanation": "Light inextensible string over smooth pulley.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Forces on $m_2$",
          "workingLatex": "m_2 g - T = m_2 a",
          "explanation": "Downward positive for the hanging mass.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Forces on $m_1$",
          "workingLatex": "T - m_1 g\\sin\\alpha - \\mu m_1 g\\cos\\alpha = m_1 a",
          "explanation": "Friction $36.84\\,\\text{N}$ down the plane.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Add equations",
          "workingLatex": "(5 - 10\\sin 20° - 0.4\\times10\\cos 20°)g = (10+5)a",
          "explanation": "Eliminate $T$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Part (a): acceleration",
          "workingLatex": "a = -1.42\\,\\text{m s}^{-2}",
          "explanation": "(a) $a = -1.42\\,\\text{m s}^{-2}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Part (b): tension",
          "workingLatex": "T = m_2(g-a) = 56.12\\,\\text{N}",
          "explanation": "(b) $T = 56.12\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Part (c): normal reaction on $m_1$",
          "workingLatex": "R = 92.09\\,\\text{N}",
          "explanation": "(c) $R = 92.09\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Part (d): friction magnitude",
          "workingLatex": "F = 36.84\\,\\text{N}",
          "explanation": "(d) Friction $= 36.84\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Verify direction of motion",
          "workingLatex": "\\text{$m_2$ moves up}",
          "explanation": "Consistent with sign of $a$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Check tension positive",
          "workingLatex": "T = 56.12 > 0",
          "explanation": "String remains taut.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Energy perspective (optional)",
          "workingLatex": "\\text{Loss in PE of one mass = gain in KE of both + work against friction}",
          "explanation": "Confirms the dynamics are physically reasonable.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Summarise (a) and (b)",
          "workingLatex": "a = -1.42\\,\\text{m s}^{-2}, \\quad T = 56.12\\,\\text{N}",
          "explanation": "Key results.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Summarise (c) and (d)",
          "workingLatex": "R = 92.09\\,\\text{N}, \\quad F = 36.84\\,\\text{N}",
          "explanation": "Normal reaction and friction on slope.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Method recap",
          "workingLatex": "\\text{Two equations, add to eliminate } T",
          "explanation": "Standard approach for connected particle problems.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "Final answers",
          "workingLatex": "a = -1.42\\,\\text{m s}^{-2}, \\quad T = 56.12\\,\\text{N}, \\quad R = 92.09\\,\\text{N}, \\quad F = 36.84\\,\\text{N}",
          "explanation": "Complete solution.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $a = -1.42\\,\\text{m s}^{-2}$; (b) $T = 56.12\\,\\text{N}$; (c) $R = 92.09\\,\\text{N}$; (d) $F = 36.84\\,\\text{N}$."
    }
  },
  {
    "id": "al.y2.mech.applications-forces.q067",
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Applications of forces",
    "subtopicId": "al.y2.mech.applications-forces",
    "difficulty": "Hard",
    "marks": 9,
    "answerType": "numeric",
    "tags": [
      "angled-force",
      "rough-slope",
      "dynamics"
    ],
    "questionText": "A particle of mass $5\\,\\text{kg}$ is on a rough plane inclined at $30°$ ($\\mu = 0.3$). A force of $30\\,\\text{N}$ acts at $20°$ above the plane, pulling up the slope. Taking $g = 9.8\\,\\text{m s}^{-2}$, find the acceleration of the particle.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Resolve applied force parallel to plane",
          "workingLatex": "P_{\\parallel} = 30\\cos 20° = 28.19\\,\\text{N}",
          "explanation": "Force up the slope: $28.19\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Resolve applied force perpendicular to plane",
          "workingLatex": "P_{\\perp} = 30\\sin 20° = 10.26\\,\\text{N}",
          "explanation": "Component away from plane reduces normal reaction.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Normal reaction",
          "workingLatex": "R = mg\\cos\\alpha - P_{\\perp} = 32.17\\,\\text{N}",
          "explanation": "$R = 32.17\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Friction down the plane",
          "workingLatex": "F = \\mu R = 9.65\\,\\text{N}",
          "explanation": "Friction: $9.65\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Weight component down slope",
          "workingLatex": "W_{\\parallel} = 24.50\\,\\text{N}",
          "explanation": "Downslope: $24.50\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Apply Newton's second law up the plane",
          "workingLatex": "ma = P_{\\parallel} - W_{\\parallel} - F",
          "explanation": "Net force up the slope.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Solve for $a$",
          "workingLatex": "a = -1.19\\,\\text{m s}^{-2}",
          "explanation": "$a = -1.19\\,\\text{m s}^{-2}$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Effect of angled pull on friction",
          "workingLatex": "\\text{Pulling away from plane reduces } R \\text{ and hence friction}",
          "explanation": "An upward component of the applied force makes sliding easier.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Compare with parallel push",
          "workingLatex": "\\text{Angled force has both parallel and perpendicular effects}",
          "explanation": "Must resolve in both directions.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Direction of motion",
          "workingLatex": "\\text{Accelerates down the plane}",
          "explanation": "Sign of $a$ determines direction.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Check limiting friction applies",
          "workingLatex": "F = F_{\\max} = 9.65\\,\\text{N}",
          "explanation": "Particle is sliding, so friction is at its maximum.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Verify all forces",
          "workingLatex": "P_{\\parallel} - W_{\\parallel} - F = -5.96 = ma",
          "explanation": "Force balance check.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Tension alternative",
          "workingLatex": "\\text{Same method applies if force is a tension in a cable}",
          "explanation": "Resolve the tension at its given angle.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Summarise key values",
          "workingLatex": "R = 32.17\\,\\text{N}, \\quad F = 9.65\\,\\text{N}, \\quad a = -1.19\\,\\text{m s}^{-2}",
          "explanation": "Normal reaction, friction, and acceleration.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "Final answer",
          "workingLatex": "a = -1.19\\,\\text{m s}^{-2}",
          "explanation": "Acceleration $= -1.19\\,\\text{m s}^{-2}$ up the plane.",
          "diagram": null
        },
        {
          "stepNumber": 16,
          "description": "Problem-solving checklist",
          "workingLatex": "\\text{Resolve all forces } \\rightarrow R \\rightarrow F = \\mu R \\rightarrow F = ma",
          "explanation": "Systematic approach for slope dynamics.",
          "diagram": null
        }
      ],
      "finalAnswer": "$a = -1.19\\,\\text{m s}^{-2}$ up the plane."
    }
  },
  {
    "id": "al.y2.mech.applications-forces.q068",
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Applications of forces",
    "subtopicId": "al.y2.mech.applications-forces",
    "difficulty": "Hard",
    "marks": 9,
    "answerType": "numeric",
    "tags": [
      "angled-force",
      "rough-slope",
      "dynamics"
    ],
    "questionText": "A particle of mass $8\\,\\text{kg}$ is on a rough plane inclined at $25°$ ($\\mu = 0.35$). A force of $40\\,\\text{N}$ acts at $15°$ above the plane, pulling up the slope. Taking $g = 9.8\\,\\text{m s}^{-2}$, find the acceleration of the particle.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Resolve applied force parallel to plane",
          "workingLatex": "P_{\\parallel} = 40\\cos 15° = 38.64\\,\\text{N}",
          "explanation": "Force up the slope: $38.64\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Resolve applied force perpendicular to plane",
          "workingLatex": "P_{\\perp} = 40\\sin 15° = 10.35\\,\\text{N}",
          "explanation": "Component away from plane reduces normal reaction.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Normal reaction",
          "workingLatex": "R = mg\\cos\\alpha - P_{\\perp} = 60.70\\,\\text{N}",
          "explanation": "$R = 60.70\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Friction down the plane",
          "workingLatex": "F = \\mu R = 21.25\\,\\text{N}",
          "explanation": "Friction: $21.25\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Weight component down slope",
          "workingLatex": "W_{\\parallel} = 33.13\\,\\text{N}",
          "explanation": "Downslope: $33.13\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Apply Newton's second law up the plane",
          "workingLatex": "ma = P_{\\parallel} - W_{\\parallel} - F",
          "explanation": "Net force up the slope.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Solve for $a$",
          "workingLatex": "a = -1.97\\,\\text{m s}^{-2}",
          "explanation": "$a = -1.97\\,\\text{m s}^{-2}$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Effect of angled pull on friction",
          "workingLatex": "\\text{Pulling away from plane reduces } R \\text{ and hence friction}",
          "explanation": "An upward component of the applied force makes sliding easier.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Compare with parallel push",
          "workingLatex": "\\text{Angled force has both parallel and perpendicular effects}",
          "explanation": "Must resolve in both directions.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Direction of motion",
          "workingLatex": "\\text{Accelerates down the plane}",
          "explanation": "Sign of $a$ determines direction.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Check limiting friction applies",
          "workingLatex": "F = F_{\\max} = 21.25\\,\\text{N}",
          "explanation": "Particle is sliding, so friction is at its maximum.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Verify all forces",
          "workingLatex": "P_{\\parallel} - W_{\\parallel} - F = -15.74 = ma",
          "explanation": "Force balance check.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Tension alternative",
          "workingLatex": "\\text{Same method applies if force is a tension in a cable}",
          "explanation": "Resolve the tension at its given angle.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Summarise key values",
          "workingLatex": "R = 60.70\\,\\text{N}, \\quad F = 21.25\\,\\text{N}, \\quad a = -1.97\\,\\text{m s}^{-2}",
          "explanation": "Normal reaction, friction, and acceleration.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "Final answer",
          "workingLatex": "a = -1.97\\,\\text{m s}^{-2}",
          "explanation": "Acceleration $= -1.97\\,\\text{m s}^{-2}$ up the plane.",
          "diagram": null
        },
        {
          "stepNumber": 16,
          "description": "Problem-solving checklist",
          "workingLatex": "\\text{Resolve all forces } \\rightarrow R \\rightarrow F = \\mu R \\rightarrow F = ma",
          "explanation": "Systematic approach for slope dynamics.",
          "diagram": null
        }
      ],
      "finalAnswer": "$a = -1.97\\,\\text{m s}^{-2}$ up the plane."
    }
  },
  {
    "id": "al.y2.mech.applications-forces.q069",
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Applications of forces",
    "subtopicId": "al.y2.mech.applications-forces",
    "difficulty": "Hard",
    "marks": 9,
    "answerType": "numeric",
    "tags": [
      "angled-force",
      "rough-slope",
      "dynamics"
    ],
    "questionText": "A particle of mass $6\\,\\text{kg}$ is on a rough plane inclined at $35°$ ($\\mu = 0.4$). A force of $25\\,\\text{N}$ acts at $25°$ above the plane, pulling up the slope. Taking $g = 9.8\\,\\text{m s}^{-2}$, find the acceleration of the particle.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Resolve applied force parallel to plane",
          "workingLatex": "P_{\\parallel} = 25\\cos 25° = 22.66\\,\\text{N}",
          "explanation": "Force up the slope: $22.66\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Resolve applied force perpendicular to plane",
          "workingLatex": "P_{\\perp} = 25\\sin 25° = 10.57\\,\\text{N}",
          "explanation": "Component away from plane reduces normal reaction.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Normal reaction",
          "workingLatex": "R = mg\\cos\\alpha - P_{\\perp} = 37.60\\,\\text{N}",
          "explanation": "$R = 37.60\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Friction down the plane",
          "workingLatex": "F = \\mu R = 15.04\\,\\text{N}",
          "explanation": "Friction: $15.04\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Weight component down slope",
          "workingLatex": "W_{\\parallel} = 33.73\\,\\text{N}",
          "explanation": "Downslope: $33.73\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Apply Newton's second law up the plane",
          "workingLatex": "ma = P_{\\parallel} - W_{\\parallel} - F",
          "explanation": "Net force up the slope.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Solve for $a$",
          "workingLatex": "a = -4.35\\,\\text{m s}^{-2}",
          "explanation": "$a = -4.35\\,\\text{m s}^{-2}$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Effect of angled pull on friction",
          "workingLatex": "\\text{Pulling away from plane reduces } R \\text{ and hence friction}",
          "explanation": "An upward component of the applied force makes sliding easier.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Compare with parallel push",
          "workingLatex": "\\text{Angled force has both parallel and perpendicular effects}",
          "explanation": "Must resolve in both directions.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Direction of motion",
          "workingLatex": "\\text{Accelerates down the plane}",
          "explanation": "Sign of $a$ determines direction.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Check limiting friction applies",
          "workingLatex": "F = F_{\\max} = 15.04\\,\\text{N}",
          "explanation": "Particle is sliding, so friction is at its maximum.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Verify all forces",
          "workingLatex": "P_{\\parallel} - W_{\\parallel} - F = -26.11 = ma",
          "explanation": "Force balance check.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Tension alternative",
          "workingLatex": "\\text{Same method applies if force is a tension in a cable}",
          "explanation": "Resolve the tension at its given angle.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Summarise key values",
          "workingLatex": "R = 37.60\\,\\text{N}, \\quad F = 15.04\\,\\text{N}, \\quad a = -4.35\\,\\text{m s}^{-2}",
          "explanation": "Normal reaction, friction, and acceleration.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "Final answer",
          "workingLatex": "a = -4.35\\,\\text{m s}^{-2}",
          "explanation": "Acceleration $= -4.35\\,\\text{m s}^{-2}$ up the plane.",
          "diagram": null
        },
        {
          "stepNumber": 16,
          "description": "Problem-solving checklist",
          "workingLatex": "\\text{Resolve all forces } \\rightarrow R \\rightarrow F = \\mu R \\rightarrow F = ma",
          "explanation": "Systematic approach for slope dynamics.",
          "diagram": null
        }
      ],
      "finalAnswer": "$a = -4.35\\,\\text{m s}^{-2}$ up the plane."
    }
  },
  {
    "id": "al.y2.mech.applications-forces.q070",
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Applications of forces",
    "subtopicId": "al.y2.mech.applications-forces",
    "difficulty": "Hard",
    "marks": 9,
    "answerType": "numeric",
    "tags": [
      "angled-force",
      "rough-slope",
      "dynamics"
    ],
    "questionText": "A particle of mass $10\\,\\text{kg}$ is on a rough plane inclined at $20°$ ($\\mu = 0.25$). A force of $50\\,\\text{N}$ acts at $10°$ above the plane, pulling up the slope. Taking $g = 9.8\\,\\text{m s}^{-2}$, find the acceleration of the particle.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Resolve applied force parallel to plane",
          "workingLatex": "P_{\\parallel} = 50\\cos 10° = 49.24\\,\\text{N}",
          "explanation": "Force up the slope: $49.24\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Resolve applied force perpendicular to plane",
          "workingLatex": "P_{\\perp} = 50\\sin 10° = 8.68\\,\\text{N}",
          "explanation": "Component away from plane reduces normal reaction.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Normal reaction",
          "workingLatex": "R = mg\\cos\\alpha - P_{\\perp} = 83.41\\,\\text{N}",
          "explanation": "$R = 83.41\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Friction down the plane",
          "workingLatex": "F = \\mu R = 20.85\\,\\text{N}",
          "explanation": "Friction: $20.85\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Weight component down slope",
          "workingLatex": "W_{\\parallel} = 33.52\\,\\text{N}",
          "explanation": "Downslope: $33.52\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Apply Newton's second law up the plane",
          "workingLatex": "ma = P_{\\parallel} - W_{\\parallel} - F",
          "explanation": "Net force up the slope.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Solve for $a$",
          "workingLatex": "a = -0.51\\,\\text{m s}^{-2}",
          "explanation": "$a = -0.51\\,\\text{m s}^{-2}$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Effect of angled pull on friction",
          "workingLatex": "\\text{Pulling away from plane reduces } R \\text{ and hence friction}",
          "explanation": "An upward component of the applied force makes sliding easier.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Compare with parallel push",
          "workingLatex": "\\text{Angled force has both parallel and perpendicular effects}",
          "explanation": "Must resolve in both directions.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Direction of motion",
          "workingLatex": "\\text{Accelerates down the plane}",
          "explanation": "Sign of $a$ determines direction.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Check limiting friction applies",
          "workingLatex": "F = F_{\\max} = 20.85\\,\\text{N}",
          "explanation": "Particle is sliding, so friction is at its maximum.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Verify all forces",
          "workingLatex": "P_{\\parallel} - W_{\\parallel} - F = -5.13 = ma",
          "explanation": "Force balance check.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Tension alternative",
          "workingLatex": "\\text{Same method applies if force is a tension in a cable}",
          "explanation": "Resolve the tension at its given angle.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Summarise key values",
          "workingLatex": "R = 83.41\\,\\text{N}, \\quad F = 20.85\\,\\text{N}, \\quad a = -0.51\\,\\text{m s}^{-2}",
          "explanation": "Normal reaction, friction, and acceleration.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "Final answer",
          "workingLatex": "a = -0.51\\,\\text{m s}^{-2}",
          "explanation": "Acceleration $= -0.51\\,\\text{m s}^{-2}$ up the plane.",
          "diagram": null
        },
        {
          "stepNumber": 16,
          "description": "Problem-solving checklist",
          "workingLatex": "\\text{Resolve all forces } \\rightarrow R \\rightarrow F = \\mu R \\rightarrow F = ma",
          "explanation": "Systematic approach for slope dynamics.",
          "diagram": null
        }
      ],
      "finalAnswer": "$a = -0.51\\,\\text{m s}^{-2}$ up the plane."
    }
  }
];
