import { Question } from "@/lib/types";

/**
 * A-Level Maths · Year 2 Mechanics · Moments
 * Turning effects, the principle of moments, equilibrium of rods and beams,
 * tilting, and centres of mass of simple laminas. 70 questions with full worked solutions.
 */
export const questions: Question[] = 
[
  {
    "id": "al.y2.mech.moments.q001",
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Moments",
    "subtopicId": "al.y2.mech.moments",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "numeric",
    "tags": [
      "moment",
      "Fd",
      "units"
    ],
    "questionText": "A force of $12\\,\\text{N}$ acts perpendicular to a rod at a distance of $3\\,\\text{m}$ from a pivot. Find the magnitude of the moment about the pivot.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the moment formula",
          "workingLatex": "M = Fd",
          "explanation": "The moment of a force about a point equals the force multiplied by its perpendicular distance from that point.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify the force and distance",
          "workingLatex": "F = 12\\,\\text{N}, \\quad d = 3\\,\\text{m}",
          "explanation": "Both quantities are given and the force acts at right angles to the rod, so we can use $M = Fd$ directly.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute into the formula",
          "workingLatex": "M = 12 \\times 3",
          "explanation": "Multiplying force by perpendicular distance gives the turning effect.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate",
          "workingLatex": "M = 36\\,\\text{N m}",
          "explanation": "The moment has magnitude $36\\,\\text{N m}$, the standard unit for turning effect.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State the units",
          "workingLatex": "\\text{Moment is measured in newton metres (N m)}",
          "explanation": "Moments are forces times distances, so the unit is newtons multiplied by metres.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the answer",
          "workingLatex": "M = 36\\,\\text{N m}",
          "explanation": "A $12\\,\\text{N}$ force at $3\\,\\text{m}$ produces a moment of $36\\,\\text{N m}$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$M = 36\\,\\text{N m}$"
    }
  },
  {
    "id": "al.y2.mech.moments.q002",
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Moments",
    "subtopicId": "al.y2.mech.moments",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "numeric",
    "tags": [
      "moment",
      "Fd"
    ],
    "questionText": "A wrench applies a force of $25\\,\\text{N}$ at $0.4\\,\\text{m}$ from the bolt. Assuming the force is perpendicular to the wrench, find the moment about the bolt.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the moment formula",
          "workingLatex": "M = Fd",
          "explanation": "Turning effect depends on both how hard you push and how far from the pivot you push.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute the values",
          "workingLatex": "M = 25 \\times 0.4",
          "explanation": "Force $25\\,\\text{N}$ at distance $0.4\\,\\text{m}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Calculate",
          "workingLatex": "M = 10.0\\,\\text{N m}",
          "explanation": "$25 \\times 0.4 = 10.0$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Interpret",
          "workingLatex": "M = 10.0\\,\\text{N m}",
          "explanation": "Even a moderate force close to the pivot can produce a useful turning effect on a wrench.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check units",
          "workingLatex": "\\text{N} \\times \\text{m} = \\text{N m}",
          "explanation": "The units combine correctly to give newton metres.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Final answer",
          "workingLatex": "M = 10.0\\,\\text{N m}",
          "explanation": "The moment is $10.0\\,\\text{N m}$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$M = 10.0\\,\\text{N m}$"
    }
  },
  {
    "id": "al.y2.mech.moments.q003",
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Moments",
    "subtopicId": "al.y2.mech.moments",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "numeric",
    "tags": [
      "moment",
      "rearranging",
      "perpendicular-distance"
    ],
    "questionText": "A force of $9\\,\\text{N}$ creates a moment of $36\\,\\text{N m}$ about a pivot. The force acts perpendicular to the lever. Find the perpendicular distance from the pivot to the line of action of the force.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write the moment equation",
          "workingLatex": "M = Fd",
          "explanation": "Moment equals force times perpendicular distance.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Rearrange for $d$",
          "workingLatex": "d = \\dfrac{M}{F}",
          "explanation": "Dividing moment by force isolates the distance.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute",
          "workingLatex": "d = \\dfrac{36}{9}",
          "explanation": "$M = 36\\,\\text{N m}$ and $F = 9\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate",
          "workingLatex": "d = 4\\,\\text{m}",
          "explanation": "The perpendicular distance is $4\\,\\text{m}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Verify",
          "workingLatex": "9 \\times 4 = 36\\,\\text{N m}",
          "explanation": "Checking: force times distance returns the given moment.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the answer",
          "workingLatex": "d = 4\\,\\text{m}",
          "explanation": "The force acts $4\\,\\text{m}$ from the pivot.",
          "diagram": null
        }
      ],
      "finalAnswer": "$d = 4\\,\\text{m}$"
    }
  },
  {
    "id": "al.y2.mech.moments.q004",
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Moments",
    "subtopicId": "al.y2.mech.moments",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "numeric",
    "tags": [
      "moment",
      "rearranging",
      "force"
    ],
    "questionText": "A moment of $60\\,\\text{N m}$ is produced about a pivot when a force acts perpendicularly at $2.5\\,\\text{m}$ from the pivot. Find the magnitude of the force.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the formula",
          "workingLatex": "M = Fd",
          "explanation": "The moment depends on both the force and its perpendicular distance.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Rearrange for $F$",
          "workingLatex": "F = \\dfrac{M}{d}",
          "explanation": "Dividing the moment by the distance gives the force.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute",
          "workingLatex": "F = \\dfrac{60}{2.5}",
          "explanation": "$M = 60\\,\\text{N m}$, $d = 2.5\\,\\text{m}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate",
          "workingLatex": "F = 24\\,\\text{N}",
          "explanation": "The force is $24\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check",
          "workingLatex": "24 \\times 2.5 = 60\\,\\text{N m}",
          "explanation": "Multiplying back confirms the moment.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "F = 24\\,\\text{N}",
          "explanation": "A force of $24\\,\\text{N}$ is needed.",
          "diagram": null
        }
      ],
      "finalAnswer": "$F = 24\\,\\text{N}$"
    }
  },
  {
    "id": "al.y2.mech.moments.q005",
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Moments",
    "subtopicId": "al.y2.mech.moments",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "numeric",
    "tags": [
      "moment",
      "Fd"
    ],
    "questionText": "A horizontal force acts on a gate. The force is $8\\,\\text{N}$ and the perpendicular distance from the pivot is $2.5\\,\\text{m}$. Find the moment about the pivot.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall $M = Fd$",
          "workingLatex": "M = Fd",
          "explanation": "For a perpendicular force, moment is force times distance.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute",
          "workingLatex": "M = 8 \\times 2.5",
          "explanation": "$F = 8\\,\\text{N}$, $d = 2.5\\,\\text{m}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Calculate",
          "workingLatex": "M = 20.0\\,\\text{N m}",
          "explanation": "$8 \\times 2.5 = 20.0$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "State units",
          "workingLatex": "\\text{N m}",
          "explanation": "Moments are measured in newton metres.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Interpret the turning effect",
          "workingLatex": "M = 20.0\\,\\text{N m}",
          "explanation": "A moment of $20.0\\,\\text{N m}$ measures how strongly the force tends to rotate the object about the pivot.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "M = 20.0\\,\\text{N m}",
          "explanation": "The moment is $20.0\\,\\text{N m}$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$M = 20.0\\,\\text{N m}$"
    }
  },
  {
    "id": "al.y2.mech.moments.q006",
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Moments",
    "subtopicId": "al.y2.mech.moments",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "numeric",
    "tags": [
      "moment",
      "Fd"
    ],
    "questionText": "A force is applied to open a door. The force is $15\\,\\text{N}$ and the perpendicular distance from the pivot is $1.2\\,\\text{m}$. Find the moment about the pivot.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall $M = Fd$",
          "workingLatex": "M = Fd",
          "explanation": "For a perpendicular force, moment is force times distance.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute",
          "workingLatex": "M = 15 \\times 1.2",
          "explanation": "$F = 15\\,\\text{N}$, $d = 1.2\\,\\text{m}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Calculate",
          "workingLatex": "M = 18.0\\,\\text{N m}",
          "explanation": "$15 \\times 1.2 = 18.0$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "State units",
          "workingLatex": "\\text{N m}",
          "explanation": "Moments are measured in newton metres.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Interpret the turning effect",
          "workingLatex": "M = 18.0\\,\\text{N m}",
          "explanation": "A moment of $18.0\\,\\text{N m}$ measures how strongly the force tends to rotate the object about the pivot.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "M = 18.0\\,\\text{N m}",
          "explanation": "The moment is $18.0\\,\\text{N m}$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$M = 18.0\\,\\text{N m}$"
    }
  },
  {
    "id": "al.y2.mech.moments.q007",
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Moments",
    "subtopicId": "al.y2.mech.moments",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "numeric",
    "tags": [
      "moment",
      "Fd"
    ],
    "questionText": "A child pushes a swing bar. The force is $6\\,\\text{N}$ and the perpendicular distance from the pivot is $4\\,\\text{m}$. Find the moment about the pivot.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall $M = Fd$",
          "workingLatex": "M = Fd",
          "explanation": "For a perpendicular force, moment is force times distance.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute",
          "workingLatex": "M = 6 \\times 4",
          "explanation": "$F = 6\\,\\text{N}$, $d = 4\\,\\text{m}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Calculate",
          "workingLatex": "M = 24\\,\\text{N m}",
          "explanation": "$6 \\times 4 = 24$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "State units",
          "workingLatex": "\\text{N m}",
          "explanation": "Moments are measured in newton metres.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Interpret the turning effect",
          "workingLatex": "M = 24\\,\\text{N m}",
          "explanation": "A moment of $24\\,\\text{N m}$ measures how strongly the force tends to rotate the object about the pivot.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "M = 24\\,\\text{N m}",
          "explanation": "The moment is $24\\,\\text{N m}$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$M = 24\\,\\text{N m}$"
    }
  },
  {
    "id": "al.y2.mech.moments.q008",
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Moments",
    "subtopicId": "al.y2.mech.moments",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "numeric",
    "tags": [
      "moment",
      "Fd"
    ],
    "questionText": "A force acts on a spanner. The force is $20\\,\\text{N}$ and the perpendicular distance from the pivot is $0.75\\,\\text{m}$. Find the moment about the pivot.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall $M = Fd$",
          "workingLatex": "M = Fd",
          "explanation": "For a perpendicular force, moment is force times distance.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute",
          "workingLatex": "M = 20 \\times 0.75",
          "explanation": "$F = 20\\,\\text{N}$, $d = 0.75\\,\\text{m}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Calculate",
          "workingLatex": "M = 15.0\\,\\text{N m}",
          "explanation": "$20 \\times 0.75 = 15.0$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "State units",
          "workingLatex": "\\text{N m}",
          "explanation": "Moments are measured in newton metres.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Interpret the turning effect",
          "workingLatex": "M = 15.0\\,\\text{N m}",
          "explanation": "A moment of $15.0\\,\\text{N m}$ measures how strongly the force tends to rotate the object about the pivot.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "M = 15.0\\,\\text{N m}",
          "explanation": "The moment is $15.0\\,\\text{N m}$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$M = 15.0\\,\\text{N m}$"
    }
  },
  {
    "id": "al.y2.mech.moments.q009",
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Moments",
    "subtopicId": "al.y2.mech.moments",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "numeric",
    "tags": [
      "moment",
      "Fd"
    ],
    "questionText": "A force is applied to a wheel. The force is $5\\,\\text{N}$ and the perpendicular distance from the pivot is $6\\,\\text{m}$. Find the moment about the pivot.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall $M = Fd$",
          "workingLatex": "M = Fd",
          "explanation": "For a perpendicular force, moment is force times distance.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute",
          "workingLatex": "M = 5 \\times 6",
          "explanation": "$F = 5\\,\\text{N}$, $d = 6\\,\\text{m}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Calculate",
          "workingLatex": "M = 30\\,\\text{N m}",
          "explanation": "$5 \\times 6 = 30$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "State units",
          "workingLatex": "\\text{N m}",
          "explanation": "Moments are measured in newton metres.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Interpret the turning effect",
          "workingLatex": "M = 30\\,\\text{N m}",
          "explanation": "A moment of $30\\,\\text{N m}$ measures how strongly the force tends to rotate the object about the pivot.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "M = 30\\,\\text{N m}",
          "explanation": "The moment is $30\\,\\text{N m}$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$M = 30\\,\\text{N m}$"
    }
  },
  {
    "id": "al.y2.mech.moments.q010",
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Moments",
    "subtopicId": "al.y2.mech.moments",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "numeric",
    "tags": [
      "moment",
      "Fd"
    ],
    "questionText": "A force acts on a valve handle. The force is $30\\,\\text{N}$ and the perpendicular distance from the pivot is $0.5\\,\\text{m}$. Find the moment about the pivot.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall $M = Fd$",
          "workingLatex": "M = Fd",
          "explanation": "For a perpendicular force, moment is force times distance.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute",
          "workingLatex": "M = 30 \\times 0.5",
          "explanation": "$F = 30\\,\\text{N}$, $d = 0.5\\,\\text{m}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Calculate",
          "workingLatex": "M = 15.0\\,\\text{N m}",
          "explanation": "$30 \\times 0.5 = 15.0$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "State units",
          "workingLatex": "\\text{N m}",
          "explanation": "Moments are measured in newton metres.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Interpret the turning effect",
          "workingLatex": "M = 15.0\\,\\text{N m}",
          "explanation": "A moment of $15.0\\,\\text{N m}$ measures how strongly the force tends to rotate the object about the pivot.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "M = 15.0\\,\\text{N m}",
          "explanation": "The moment is $15.0\\,\\text{N m}$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$M = 15.0\\,\\text{N m}$"
    }
  },
  {
    "id": "al.y2.mech.moments.q011",
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Moments",
    "subtopicId": "al.y2.mech.moments",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "written",
    "tags": [
      "clockwise",
      "anticlockwise",
      "moment-direction"
    ],
    "questionText": "A uniform rod is free to rotate about a pivot at its centre. A force on the right side tends to rotate the rod clockwise, and a force on the left side tends to rotate it anticlockwise. Explain what is meant by clockwise and anticlockwise moments, and state the sign convention commonly used.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Define a clockwise moment",
          "workingLatex": "\\text{Clockwise: the force tends to rotate the object like clock hands}",
          "explanation": "If you look at the pivot from above, a clockwise moment turns the rod in the same direction as clock hands move.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Define an anticlockwise moment",
          "workingLatex": "\\text{Anticlockwise: the force tends to rotate opposite to clock hands}",
          "explanation": "An anticlockwise moment turns the rod the other way.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Explain why direction matters",
          "workingLatex": "\\text{Moments in opposite directions partially cancel}",
          "explanation": "When finding equilibrium, clockwise and anticlockwise moments are treated separately and must balance.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "State the common convention",
          "workingLatex": "\\text{Clockwise (CW) is often taken as positive; anticlockwise (ACW) as negative}",
          "explanation": "Alternatively, some textbooks use the reverse — what matters is being consistent within a single problem.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Link to equilibrium",
          "workingLatex": "\\sum M_{\\text{CW}} = \\sum M_{\\text{ACW}}",
          "explanation": "For a body in equilibrium, the total clockwise moment equals the total anticlockwise moment about any point.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Summarise",
          "workingLatex": "\\text{Direction tells us which way the body tends to turn}",
          "explanation": "Specifying clockwise or anticlockwise removes ambiguity when adding moments.",
          "diagram": null
        }
      ],
      "finalAnswer": "Clockwise moments turn the body like clock hands; anticlockwise moments turn the opposite way. A common convention is clockwise positive, anticlockwise negative."
    }
  },
  {
    "id": "al.y2.mech.moments.q012",
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Moments",
    "subtopicId": "al.y2.mech.moments",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "written",
    "tags": [
      "principle-of-moments",
      "equilibrium"
    ],
    "questionText": "State the principle of moments for a rigid body in equilibrium.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the condition",
          "workingLatex": "\\text{Body in equilibrium}",
          "explanation": "Equilibrium means the body is not accelerating translationally or rotationally — it is at rest or moving uniformly.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "State rotational equilibrium",
          "workingLatex": "\\text{No net turning effect}",
          "explanation": "If the body is not rotating, the total moment about any point must be zero.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write the principle of moments",
          "workingLatex": "\\sum M_{\\text{clockwise}} = \\sum M_{\\text{anticlockwise}}",
          "explanation": "The sum of clockwise moments about any point equals the sum of anticlockwise moments about that same point.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Note the freedom of pivot choice",
          "workingLatex": "\\text{Valid about ANY point}",
          "explanation": "A powerful feature: we can take moments about whichever point eliminates unknown forces.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Connect to supports",
          "workingLatex": "\\text{Used to find unknown reactions and forces}",
          "explanation": "On a beam, taking moments about one support eliminates the reaction at that support.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the principle clearly",
          "workingLatex": "\\text{For equilibrium: total clockwise moment} = \\text{total anticlockwise moment}",
          "explanation": "This is the fundamental tool for solving statics problems involving moments.",
          "diagram": null
        }
      ],
      "finalAnswer": "For a body in equilibrium, the sum of the clockwise moments about any point equals the sum of the anticlockwise moments about that point."
    }
  },
  {
    "id": "al.y2.mech.moments.q013",
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Moments",
    "subtopicId": "al.y2.mech.moments",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "numeric",
    "tags": [
      "principle-of-moments",
      "uniform-rod",
      "reactions"
    ],
    "questionText": "A uniform rod of mass $2\\,\\text{kg}$ and length $4\\,\\text{m}$ rests horizontally on supports at each end. A vertical load of $20\\,\\text{N}$ acts at $1\\,\\text{m}$ from the left support. Taking $g = 9.8\\,\\text{m s}^{-2}$, find the reaction at the right-hand support.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Draw a diagram and label forces",
          "workingLatex": "\\text{Left support } R_A, \\text{ right support } R_B, \\text{ rod weight } 19.6\\,\\text{N} \\text{ at centre}",
          "explanation": "The uniform rod's weight acts at its midpoint. The point load acts at the given position.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Take moments about the left support",
          "workingLatex": "\\sum M_A = 0",
          "explanation": "Choosing the left support as pivot eliminates $R_A$ from the moment equation.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write clockwise moments",
          "workingLatex": "R_B \\times 4",
          "explanation": "The reaction at the right support ($14.8\\,\\text{N}$) creates a clockwise moment about $A$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write anticlockwise moments",
          "workingLatex": "19.6 \\times 2.0 + 20 \\times 1",
          "explanation": "Rod weight at $2.0\\,\\text{m}$ and load at $1\\,\\text{m}$ both act anticlockwise about $A$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Apply the principle of moments",
          "workingLatex": "R_B \\times 4 = 19.6 \\times 2.0 + 20 \\times 1",
          "explanation": "Clockwise total equals anticlockwise total.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Calculate the right-hand side",
          "workingLatex": "R_B \\times 4 = 59.2",
          "explanation": "Sum of anticlockwise moments is $59.2\\,\\text{N m}$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$R_B = 14.8\\,\\text{N}$"
    }
  },
  {
    "id": "al.y2.mech.moments.q014",
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Moments",
    "subtopicId": "al.y2.mech.moments",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "numeric",
    "tags": [
      "principle-of-moments",
      "uniform-rod",
      "reactions"
    ],
    "questionText": "A uniform rod of mass $2\\,\\text{kg}$ and length $6\\,\\text{m}$ rests horizontally on supports at each end. A vertical load of $30\\,\\text{N}$ acts at $2\\,\\text{m}$ from the left support. Taking $g = 9.8\\,\\text{m s}^{-2}$, find the reaction at the right-hand support.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Draw a diagram and label forces",
          "workingLatex": "\\text{Left support } R_A, \\text{ right support } R_B, \\text{ rod weight } 19.6\\,\\text{N} \\text{ at centre}",
          "explanation": "The uniform rod's weight acts at its midpoint. The point load acts at the given position.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Take moments about the left support",
          "workingLatex": "\\sum M_A = 0",
          "explanation": "Choosing the left support as pivot eliminates $R_A$ from the moment equation.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write clockwise moments",
          "workingLatex": "R_B \\times 6",
          "explanation": "The reaction at the right support ($19.8\\,\\text{N}$) creates a clockwise moment about $A$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write anticlockwise moments",
          "workingLatex": "19.6 \\times 3.0 + 30 \\times 2",
          "explanation": "Rod weight at $3.0\\,\\text{m}$ and load at $2\\,\\text{m}$ both act anticlockwise about $A$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Apply the principle of moments",
          "workingLatex": "R_B \\times 6 = 19.6 \\times 3.0 + 30 \\times 2",
          "explanation": "Clockwise total equals anticlockwise total.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Calculate the right-hand side",
          "workingLatex": "R_B \\times 6 = 118.80000000000001",
          "explanation": "Sum of anticlockwise moments is $118.80000000000001\\,\\text{N m}$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$R_B = 19.8\\,\\text{N}$"
    }
  },
  {
    "id": "al.y2.mech.moments.q015",
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Moments",
    "subtopicId": "al.y2.mech.moments",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "numeric",
    "tags": [
      "principle-of-moments",
      "uniform-rod",
      "reactions"
    ],
    "questionText": "A uniform rod of mass $2\\,\\text{kg}$ and length $5\\,\\text{m}$ rests horizontally on supports at each end. A vertical load of $10\\,\\text{N}$ acts at $3.5\\,\\text{m}$ from the left support. Taking $g = 9.8\\,\\text{m s}^{-2}$, find the reaction at the right-hand support.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Draw a diagram and label forces",
          "workingLatex": "\\text{Left support } R_A, \\text{ right support } R_B, \\text{ rod weight } 19.6\\,\\text{N} \\text{ at centre}",
          "explanation": "The uniform rod's weight acts at its midpoint. The point load acts at the given position.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Take moments about the left support",
          "workingLatex": "\\sum M_A = 0",
          "explanation": "Choosing the left support as pivot eliminates $R_A$ from the moment equation.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write clockwise moments",
          "workingLatex": "R_B \\times 5",
          "explanation": "The reaction at the right support ($16.8\\,\\text{N}$) creates a clockwise moment about $A$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write anticlockwise moments",
          "workingLatex": "19.6 \\times 2.5 + 10 \\times 3.5",
          "explanation": "Rod weight at $2.5\\,\\text{m}$ and load at $3.5\\,\\text{m}$ both act anticlockwise about $A$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Apply the principle of moments",
          "workingLatex": "R_B \\times 5 = 19.6 \\times 2.5 + 10 \\times 3.5",
          "explanation": "Clockwise total equals anticlockwise total.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Calculate the right-hand side",
          "workingLatex": "R_B \\times 5 = 84.0",
          "explanation": "Sum of anticlockwise moments is $84.0\\,\\text{N m}$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$R_B = 16.8\\,\\text{N}$"
    }
  },
  {
    "id": "al.y2.mech.moments.q016",
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Moments",
    "subtopicId": "al.y2.mech.moments",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "numeric",
    "tags": [
      "principle-of-moments",
      "uniform-rod",
      "reactions"
    ],
    "questionText": "A uniform rod of mass $2\\,\\text{kg}$ and length $3\\,\\text{m}$ rests horizontally on supports at each end. A vertical load of $15\\,\\text{N}$ acts at $1.5\\,\\text{m}$ from the left support. Taking $g = 9.8\\,\\text{m s}^{-2}$, find the reaction at the right-hand support.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Draw a diagram and label forces",
          "workingLatex": "\\text{Left support } R_A, \\text{ right support } R_B, \\text{ rod weight } 19.6\\,\\text{N} \\text{ at centre}",
          "explanation": "The uniform rod's weight acts at its midpoint. The point load acts at the given position.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Take moments about the left support",
          "workingLatex": "\\sum M_A = 0",
          "explanation": "Choosing the left support as pivot eliminates $R_A$ from the moment equation.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write clockwise moments",
          "workingLatex": "R_B \\times 3",
          "explanation": "The reaction at the right support ($17.3\\,\\text{N}$) creates a clockwise moment about $A$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write anticlockwise moments",
          "workingLatex": "19.6 \\times 1.5 + 15 \\times 1.5",
          "explanation": "Rod weight at $1.5\\,\\text{m}$ and load at $1.5\\,\\text{m}$ both act anticlockwise about $A$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Apply the principle of moments",
          "workingLatex": "R_B \\times 3 = 19.6 \\times 1.5 + 15 \\times 1.5",
          "explanation": "Clockwise total equals anticlockwise total.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Calculate the right-hand side",
          "workingLatex": "R_B \\times 3 = 51.900000000000006",
          "explanation": "Sum of anticlockwise moments is $51.900000000000006\\,\\text{N m}$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$R_B = 17.3\\,\\text{N}$"
    }
  },
  {
    "id": "al.y2.mech.moments.q017",
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Moments",
    "subtopicId": "al.y2.mech.moments",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "numeric",
    "tags": [
      "principle-of-moments",
      "uniform-rod",
      "reactions"
    ],
    "questionText": "A uniform rod of mass $2\\,\\text{kg}$ and length $8\\,\\text{m}$ rests horizontally on supports at each end. A vertical load of $40\\,\\text{N}$ acts at $5\\,\\text{m}$ from the left support. Taking $g = 9.8\\,\\text{m s}^{-2}$, find the reaction at the right-hand support.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Draw a diagram and label forces",
          "workingLatex": "\\text{Left support } R_A, \\text{ right support } R_B, \\text{ rod weight } 19.6\\,\\text{N} \\text{ at centre}",
          "explanation": "The uniform rod's weight acts at its midpoint. The point load acts at the given position.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Take moments about the left support",
          "workingLatex": "\\sum M_A = 0",
          "explanation": "Choosing the left support as pivot eliminates $R_A$ from the moment equation.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write clockwise moments",
          "workingLatex": "R_B \\times 8",
          "explanation": "The reaction at the right support ($34.8\\,\\text{N}$) creates a clockwise moment about $A$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write anticlockwise moments",
          "workingLatex": "19.6 \\times 4.0 + 40 \\times 5",
          "explanation": "Rod weight at $4.0\\,\\text{m}$ and load at $5\\,\\text{m}$ both act anticlockwise about $A$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Apply the principle of moments",
          "workingLatex": "R_B \\times 8 = 19.6 \\times 4.0 + 40 \\times 5",
          "explanation": "Clockwise total equals anticlockwise total.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Calculate the right-hand side",
          "workingLatex": "R_B \\times 8 = 278.4",
          "explanation": "Sum of anticlockwise moments is $278.4\\,\\text{N m}$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$R_B = 34.8\\,\\text{N}$"
    }
  },
  {
    "id": "al.y2.mech.moments.q018",
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Moments",
    "subtopicId": "al.y2.mech.moments",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "numeric",
    "tags": [
      "principle-of-moments",
      "uniform-rod",
      "reactions"
    ],
    "questionText": "A uniform rod of mass $2\\,\\text{kg}$ and length $10\\,\\text{m}$ rests horizontally on supports at each end. A vertical load of $50\\,\\text{N}$ acts at $7\\,\\text{m}$ from the left support. Taking $g = 9.8\\,\\text{m s}^{-2}$, find the reaction at the right-hand support.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Draw a diagram and label forces",
          "workingLatex": "\\text{Left support } R_A, \\text{ right support } R_B, \\text{ rod weight } 19.6\\,\\text{N} \\text{ at centre}",
          "explanation": "The uniform rod's weight acts at its midpoint. The point load acts at the given position.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Take moments about the left support",
          "workingLatex": "\\sum M_A = 0",
          "explanation": "Choosing the left support as pivot eliminates $R_A$ from the moment equation.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write clockwise moments",
          "workingLatex": "R_B \\times 10",
          "explanation": "The reaction at the right support ($44.8\\,\\text{N}$) creates a clockwise moment about $A$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write anticlockwise moments",
          "workingLatex": "19.6 \\times 5.0 + 50 \\times 7",
          "explanation": "Rod weight at $5.0\\,\\text{m}$ and load at $7\\,\\text{m}$ both act anticlockwise about $A$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Apply the principle of moments",
          "workingLatex": "R_B \\times 10 = 19.6 \\times 5.0 + 50 \\times 7",
          "explanation": "Clockwise total equals anticlockwise total.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Calculate the right-hand side",
          "workingLatex": "R_B \\times 10 = 448.0",
          "explanation": "Sum of anticlockwise moments is $448.0\\,\\text{N m}$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$R_B = 44.8\\,\\text{N}$"
    }
  },
  {
    "id": "al.y2.mech.moments.q019",
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Moments",
    "subtopicId": "al.y2.mech.moments",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "tags": [
      "principle-of-moments",
      "reactions",
      "uniform-beam"
    ],
    "questionText": "A uniform beam of mass $3\\,\\text{kg}$ and length $4\\,\\text{m}$ rests on supports at each end. A vertical force of $20\\,\\text{N}$ acts downward at $1\\,\\text{m}$ from the left support. Taking $g = 9.8\\,\\text{m s}^{-2}$, find the reactions at each support.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Calculate the weight of the beam",
          "workingLatex": "W = mg = 3 \\times 9.8 = 29.4\\,\\text{N}",
          "explanation": "The uniform beam weighs $29.4\\,\\text{N}$, acting at its centre ($2.0\\,\\text{m}$ from either end).",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Take moments about the left support",
          "workingLatex": "\\sum M_A = 0",
          "explanation": "This eliminates $R_A$ from the moment equation.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write the moment equation",
          "workingLatex": "R_B \\times 4 = 29.4 \\times 2.0 + 20 \\times 1",
          "explanation": "Clockwise moment from $R_B$ balances anticlockwise moments from beam weight and extra load.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate the anticlockwise moments",
          "workingLatex": "= 78.8\\,\\text{N m}",
          "explanation": "Total anticlockwise moment is $78.8\\,\\text{N m}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve for $R_B$",
          "workingLatex": "R_B = 19.7\\,\\text{N}",
          "explanation": "$R_B = 19.7\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Use vertical equilibrium for $R_A$",
          "workingLatex": "R_A + R_B = 49.4",
          "explanation": "Total upward reaction equals total downward load.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Solve for $R_A$",
          "workingLatex": "R_A = 29.7\\,\\text{N}",
          "explanation": "$R_A = 49.4 - 19.7 = 29.7\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check: moments about right support",
          "workingLatex": "R_A \\times 4 = 118.8\\,\\text{N m}",
          "explanation": "Verifying about the right support confirms both reactions are consistent.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State both reactions",
          "workingLatex": "R_A = 29.7\\,\\text{N}, \\quad R_B = 19.7\\,\\text{N}",
          "explanation": "Both supports share the total load, with the nearer support to the extra load bearing more.",
          "diagram": null
        }
      ],
      "finalAnswer": "$R_A = 29.7\\,\\text{N}$, $R_B = 19.7\\,\\text{N}$."
    }
  },
  {
    "id": "al.y2.mech.moments.q020",
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Moments",
    "subtopicId": "al.y2.mech.moments",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "tags": [
      "principle-of-moments",
      "reactions",
      "uniform-beam"
    ],
    "questionText": "A uniform beam of mass $4\\,\\text{kg}$ and length $6\\,\\text{m}$ rests on supports at each end. A vertical force of $30\\,\\text{N}$ acts downward at $2\\,\\text{m}$ from the left support. Taking $g = 9.8\\,\\text{m s}^{-2}$, find the reactions at each support.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Calculate the weight of the beam",
          "workingLatex": "W = mg = 4 \\times 9.8 = 39.2\\,\\text{N}",
          "explanation": "The uniform beam weighs $39.2\\,\\text{N}$, acting at its centre ($3.0\\,\\text{m}$ from either end).",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Take moments about the left support",
          "workingLatex": "\\sum M_A = 0",
          "explanation": "This eliminates $R_A$ from the moment equation.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write the moment equation",
          "workingLatex": "R_B \\times 6 = 39.2 \\times 3.0 + 30 \\times 2",
          "explanation": "Clockwise moment from $R_B$ balances anticlockwise moments from beam weight and extra load.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate the anticlockwise moments",
          "workingLatex": "= 177.6\\,\\text{N m}",
          "explanation": "Total anticlockwise moment is $177.6\\,\\text{N m}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve for $R_B$",
          "workingLatex": "R_B = 29.6\\,\\text{N}",
          "explanation": "$R_B = 29.6\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Use vertical equilibrium for $R_A$",
          "workingLatex": "R_A + R_B = 69.2",
          "explanation": "Total upward reaction equals total downward load.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Solve for $R_A$",
          "workingLatex": "R_A = 39.6\\,\\text{N}",
          "explanation": "$R_A = 69.2 - 29.6 = 39.6\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check: moments about right support",
          "workingLatex": "R_A \\times 6 = 237.6\\,\\text{N m}",
          "explanation": "Verifying about the right support confirms both reactions are consistent.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State both reactions",
          "workingLatex": "R_A = 39.6\\,\\text{N}, \\quad R_B = 29.6\\,\\text{N}",
          "explanation": "Both supports share the total load, with the nearer support to the extra load bearing more.",
          "diagram": null
        }
      ],
      "finalAnswer": "$R_A = 39.6\\,\\text{N}$, $R_B = 29.6\\,\\text{N}$."
    }
  },
  {
    "id": "al.y2.mech.moments.q021",
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Moments",
    "subtopicId": "al.y2.mech.moments",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "tags": [
      "principle-of-moments",
      "reactions",
      "uniform-beam"
    ],
    "questionText": "A uniform beam of mass $2\\,\\text{kg}$ and length $5\\,\\text{m}$ rests on supports at each end. A vertical force of $15\\,\\text{N}$ acts downward at $3\\,\\text{m}$ from the left support. Taking $g = 9.8\\,\\text{m s}^{-2}$, find the reactions at each support.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Calculate the weight of the beam",
          "workingLatex": "W = mg = 2 \\times 9.8 = 19.6\\,\\text{N}",
          "explanation": "The uniform beam weighs $19.6\\,\\text{N}$, acting at its centre ($2.5\\,\\text{m}$ from either end).",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Take moments about the left support",
          "workingLatex": "\\sum M_A = 0",
          "explanation": "This eliminates $R_A$ from the moment equation.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write the moment equation",
          "workingLatex": "R_B \\times 5 = 19.6 \\times 2.5 + 15 \\times 3",
          "explanation": "Clockwise moment from $R_B$ balances anticlockwise moments from beam weight and extra load.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate the anticlockwise moments",
          "workingLatex": "= 94\\,\\text{N m}",
          "explanation": "Total anticlockwise moment is $94\\,\\text{N m}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve for $R_B$",
          "workingLatex": "R_B = 18.8\\,\\text{N}",
          "explanation": "$R_B = 18.8\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Use vertical equilibrium for $R_A$",
          "workingLatex": "R_A + R_B = 34.6",
          "explanation": "Total upward reaction equals total downward load.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Solve for $R_A$",
          "workingLatex": "R_A = 15.8\\,\\text{N}",
          "explanation": "$R_A = 34.6 - 18.8 = 15.8\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check: moments about right support",
          "workingLatex": "R_A \\times 5 = 79\\,\\text{N m}",
          "explanation": "Verifying about the right support confirms both reactions are consistent.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State both reactions",
          "workingLatex": "R_A = 15.8\\,\\text{N}, \\quad R_B = 18.8\\,\\text{N}",
          "explanation": "Both supports share the total load, with the nearer support to the extra load bearing more.",
          "diagram": null
        }
      ],
      "finalAnswer": "$R_A = 15.8\\,\\text{N}$, $R_B = 18.8\\,\\text{N}$."
    }
  },
  {
    "id": "al.y2.mech.moments.q022",
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Moments",
    "subtopicId": "al.y2.mech.moments",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "tags": [
      "principle-of-moments",
      "reactions",
      "uniform-beam"
    ],
    "questionText": "A uniform beam of mass $5\\,\\text{kg}$ and length $8\\,\\text{m}$ rests on supports at each end. A vertical force of $40\\,\\text{N}$ acts downward at $3\\,\\text{m}$ from the left support. Taking $g = 9.8\\,\\text{m s}^{-2}$, find the reactions at each support.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Calculate the weight of the beam",
          "workingLatex": "W = mg = 5 \\times 9.8 = 49\\,\\text{N}",
          "explanation": "The uniform beam weighs $49\\,\\text{N}$, acting at its centre ($4.0\\,\\text{m}$ from either end).",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Take moments about the left support",
          "workingLatex": "\\sum M_A = 0",
          "explanation": "This eliminates $R_A$ from the moment equation.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write the moment equation",
          "workingLatex": "R_B \\times 8 = 49 \\times 4.0 + 40 \\times 3",
          "explanation": "Clockwise moment from $R_B$ balances anticlockwise moments from beam weight and extra load.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate the anticlockwise moments",
          "workingLatex": "= 316\\,\\text{N m}",
          "explanation": "Total anticlockwise moment is $316\\,\\text{N m}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve for $R_B$",
          "workingLatex": "R_B = 39.5\\,\\text{N}",
          "explanation": "$R_B = 39.5\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Use vertical equilibrium for $R_A$",
          "workingLatex": "R_A + R_B = 89",
          "explanation": "Total upward reaction equals total downward load.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Solve for $R_A$",
          "workingLatex": "R_A = 49.5\\,\\text{N}",
          "explanation": "$R_A = 89 - 39.5 = 49.5\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check: moments about right support",
          "workingLatex": "R_A \\times 8 = 396\\,\\text{N m}",
          "explanation": "Verifying about the right support confirms both reactions are consistent.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State both reactions",
          "workingLatex": "R_A = 49.5\\,\\text{N}, \\quad R_B = 39.5\\,\\text{N}",
          "explanation": "Both supports share the total load, with the nearer support to the extra load bearing more.",
          "diagram": null
        }
      ],
      "finalAnswer": "$R_A = 49.5\\,\\text{N}$, $R_B = 39.5\\,\\text{N}$."
    }
  },
  {
    "id": "al.y2.mech.moments.q023",
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Moments",
    "subtopicId": "al.y2.mech.moments",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "tags": [
      "principle-of-moments",
      "reactions",
      "uniform-beam"
    ],
    "questionText": "A uniform beam of mass $2\\,\\text{kg}$ and length $3\\,\\text{m}$ rests on supports at each end. A vertical force of $10\\,\\text{N}$ acts downward at $1.5\\,\\text{m}$ from the left support. Taking $g = 9.8\\,\\text{m s}^{-2}$, find the reactions at each support.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Calculate the weight of the beam",
          "workingLatex": "W = mg = 2 \\times 9.8 = 19.6\\,\\text{N}",
          "explanation": "The uniform beam weighs $19.6\\,\\text{N}$, acting at its centre ($1.5\\,\\text{m}$ from either end).",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Take moments about the left support",
          "workingLatex": "\\sum M_A = 0",
          "explanation": "This eliminates $R_A$ from the moment equation.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write the moment equation",
          "workingLatex": "R_B \\times 3 = 19.6 \\times 1.5 + 10 \\times 1.5",
          "explanation": "Clockwise moment from $R_B$ balances anticlockwise moments from beam weight and extra load.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate the anticlockwise moments",
          "workingLatex": "= 44.4\\,\\text{N m}",
          "explanation": "Total anticlockwise moment is $44.4\\,\\text{N m}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve for $R_B$",
          "workingLatex": "R_B = 14.8\\,\\text{N}",
          "explanation": "$R_B = 14.8\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Use vertical equilibrium for $R_A$",
          "workingLatex": "R_A + R_B = 29.6",
          "explanation": "Total upward reaction equals total downward load.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Solve for $R_A$",
          "workingLatex": "R_A = 14.8\\,\\text{N}",
          "explanation": "$R_A = 29.6 - 14.8 = 14.8\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check: moments about right support",
          "workingLatex": "R_A \\times 3 = 44.4\\,\\text{N m}",
          "explanation": "Verifying about the right support confirms both reactions are consistent.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State both reactions",
          "workingLatex": "R_A = 14.8\\,\\text{N}, \\quad R_B = 14.8\\,\\text{N}",
          "explanation": "Both supports share the total load, with the nearer support to the extra load bearing more.",
          "diagram": null
        }
      ],
      "finalAnswer": "$R_A = 14.8\\,\\text{N}$, $R_B = 14.8\\,\\text{N}$."
    }
  },
  {
    "id": "al.y2.mech.moments.q024",
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Moments",
    "subtopicId": "al.y2.mech.moments",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "tags": [
      "principle-of-moments",
      "reactions",
      "uniform-beam"
    ],
    "questionText": "A uniform beam of mass $6\\,\\text{kg}$ and length $10\\,\\text{m}$ rests on supports at each end. A vertical force of $50\\,\\text{N}$ acts downward at $4\\,\\text{m}$ from the left support. Taking $g = 9.8\\,\\text{m s}^{-2}$, find the reactions at each support.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Calculate the weight of the beam",
          "workingLatex": "W = mg = 6 \\times 9.8 = 58.8\\,\\text{N}",
          "explanation": "The uniform beam weighs $58.8\\,\\text{N}$, acting at its centre ($5.0\\,\\text{m}$ from either end).",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Take moments about the left support",
          "workingLatex": "\\sum M_A = 0",
          "explanation": "This eliminates $R_A$ from the moment equation.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write the moment equation",
          "workingLatex": "R_B \\times 10 = 58.8 \\times 5.0 + 50 \\times 4",
          "explanation": "Clockwise moment from $R_B$ balances anticlockwise moments from beam weight and extra load.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate the anticlockwise moments",
          "workingLatex": "= 494\\,\\text{N m}",
          "explanation": "Total anticlockwise moment is $494\\,\\text{N m}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve for $R_B$",
          "workingLatex": "R_B = 49.4\\,\\text{N}",
          "explanation": "$R_B = 49.4\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Use vertical equilibrium for $R_A$",
          "workingLatex": "R_A + R_B = 108.8",
          "explanation": "Total upward reaction equals total downward load.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Solve for $R_A$",
          "workingLatex": "R_A = 59.4\\,\\text{N}",
          "explanation": "$R_A = 108.8 - 49.4 = 59.4\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check: moments about right support",
          "workingLatex": "R_A \\times 10 = 594\\,\\text{N m}",
          "explanation": "Verifying about the right support confirms both reactions are consistent.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State both reactions",
          "workingLatex": "R_A = 59.4\\,\\text{N}, \\quad R_B = 49.4\\,\\text{N}",
          "explanation": "Both supports share the total load, with the nearer support to the extra load bearing more.",
          "diagram": null
        }
      ],
      "finalAnswer": "$R_A = 59.4\\,\\text{N}$, $R_B = 49.4\\,\\text{N}$."
    }
  },
  {
    "id": "al.y2.mech.moments.q025",
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Moments",
    "subtopicId": "al.y2.mech.moments",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "tags": [
      "principle-of-moments",
      "reactions",
      "uniform-beam"
    ],
    "questionText": "A uniform beam of mass $3\\,\\text{kg}$ and length $7\\,\\text{m}$ rests on supports at each end. A vertical force of $25\\,\\text{N}$ acts downward at $5\\,\\text{m}$ from the left support. Taking $g = 9.8\\,\\text{m s}^{-2}$, find the reactions at each support.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Calculate the weight of the beam",
          "workingLatex": "W = mg = 3 \\times 9.8 = 29.4\\,\\text{N}",
          "explanation": "The uniform beam weighs $29.4\\,\\text{N}$, acting at its centre ($3.5\\,\\text{m}$ from either end).",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Take moments about the left support",
          "workingLatex": "\\sum M_A = 0",
          "explanation": "This eliminates $R_A$ from the moment equation.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write the moment equation",
          "workingLatex": "R_B \\times 7 = 29.4 \\times 3.5 + 25 \\times 5",
          "explanation": "Clockwise moment from $R_B$ balances anticlockwise moments from beam weight and extra load.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate the anticlockwise moments",
          "workingLatex": "= 227.9\\,\\text{N m}",
          "explanation": "Total anticlockwise moment is $227.9\\,\\text{N m}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve for $R_B$",
          "workingLatex": "R_B = 32.6\\,\\text{N}",
          "explanation": "$R_B = 32.6\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Use vertical equilibrium for $R_A$",
          "workingLatex": "R_A + R_B = 54.4",
          "explanation": "Total upward reaction equals total downward load.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Solve for $R_A$",
          "workingLatex": "R_A = 21.8\\,\\text{N}",
          "explanation": "$R_A = 54.4 - 32.6 = 21.8\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check: moments about right support",
          "workingLatex": "R_A \\times 7 = 152.9\\,\\text{N m}",
          "explanation": "Verifying about the right support confirms both reactions are consistent.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State both reactions",
          "workingLatex": "R_A = 21.8\\,\\text{N}, \\quad R_B = 32.6\\,\\text{N}",
          "explanation": "Both supports share the total load, with the nearer support to the extra load bearing more.",
          "diagram": null
        }
      ],
      "finalAnswer": "$R_A = 21.8\\,\\text{N}$, $R_B = 32.6\\,\\text{N}$."
    }
  },
  {
    "id": "al.y2.mech.moments.q026",
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Moments",
    "subtopicId": "al.y2.mech.moments",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "tags": [
      "principle-of-moments",
      "reactions",
      "uniform-beam"
    ],
    "questionText": "A uniform beam of mass $8\\,\\text{kg}$ and length $12\\,\\text{m}$ rests on supports at each end. A vertical force of $60\\,\\text{N}$ acts downward at $6\\,\\text{m}$ from the left support. Taking $g = 9.8\\,\\text{m s}^{-2}$, find the reactions at each support.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Calculate the weight of the beam",
          "workingLatex": "W = mg = 8 \\times 9.8 = 78.4\\,\\text{N}",
          "explanation": "The uniform beam weighs $78.4\\,\\text{N}$, acting at its centre ($6.0\\,\\text{m}$ from either end).",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Take moments about the left support",
          "workingLatex": "\\sum M_A = 0",
          "explanation": "This eliminates $R_A$ from the moment equation.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write the moment equation",
          "workingLatex": "R_B \\times 12 = 78.4 \\times 6.0 + 60 \\times 6",
          "explanation": "Clockwise moment from $R_B$ balances anticlockwise moments from beam weight and extra load.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate the anticlockwise moments",
          "workingLatex": "= 830.4\\,\\text{N m}",
          "explanation": "Total anticlockwise moment is $830.4\\,\\text{N m}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve for $R_B$",
          "workingLatex": "R_B = 69.2\\,\\text{N}",
          "explanation": "$R_B = 69.2\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Use vertical equilibrium for $R_A$",
          "workingLatex": "R_A + R_B = 138.4",
          "explanation": "Total upward reaction equals total downward load.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Solve for $R_A$",
          "workingLatex": "R_A = 69.2\\,\\text{N}",
          "explanation": "$R_A = 138.4 - 69.2 = 69.2\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check: moments about right support",
          "workingLatex": "R_A \\times 12 = 830.4\\,\\text{N m}",
          "explanation": "Verifying about the right support confirms both reactions are consistent.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State both reactions",
          "workingLatex": "R_A = 69.2\\,\\text{N}, \\quad R_B = 69.2\\,\\text{N}",
          "explanation": "Both supports share the total load, with the nearer support to the extra load bearing more.",
          "diagram": null
        }
      ],
      "finalAnswer": "$R_A = 69.2\\,\\text{N}$, $R_B = 69.2\\,\\text{N}$."
    }
  },
  {
    "id": "al.y2.mech.moments.q027",
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Moments",
    "subtopicId": "al.y2.mech.moments",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "numeric",
    "tags": [
      "principle-of-moments",
      "unknown-distance",
      "uniform-beam"
    ],
    "questionText": "A uniform plank of mass $2\\,\\text{kg}$ and length $4\\,\\text{m}$ has supports at each end. A load of $20\\,\\text{N}$ is placed on the plank. Given that the right-hand reaction is $22.4\\,\\text{N}$ and $g = 9.8\\,\\text{m s}^{-2}$, find the distance of the load from the left support.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Find the beam weight",
          "workingLatex": "W_{\\text{beam}} = 2 \\times 9.8 = 19.6\\,\\text{N}",
          "explanation": "The plank weighs $19.6\\,\\text{N}$ at its centre.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Take moments about the left support",
          "workingLatex": "R_B \\times 4 = W_{\\text{beam}} \\times 2.0 + 20 \\times x",
          "explanation": "Let $x$ be the distance of the load from the left support.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute the known reaction",
          "workingLatex": "22.4 \\times 4 = 39.2 + 20 \\times x",
          "explanation": "Left side: $89.6\\,\\text{N m}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Isolate the term with $x$",
          "workingLatex": "20 \\times x = 89.6 - 39.2",
          "explanation": "$= 50.4$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve for $x$",
          "workingLatex": "x = 2.5\\,\\text{m}",
          "explanation": "The load is $2.5\\,\\text{m}$ from the left support.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check $0 < x < L$",
          "workingLatex": "0 < 2.5 < 4",
          "explanation": "The load must lie between the two supports.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Verify by finding $R_A$",
          "workingLatex": "R_A = 17.2\\,\\text{N}",
          "explanation": "Vertical equilibrium gives a positive left reaction, confirming the setup is valid.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Confirm moment balance about right support",
          "workingLatex": "R_A \\times 4 = 68.8\\,\\text{N m}",
          "explanation": "The position is consistent with equilibrium about either support.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the answer",
          "workingLatex": "x = 2.5\\,\\text{m}",
          "explanation": "The load is placed $2.5\\,\\text{m}$ from the left support.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x = 2.5\\,\\text{m}$"
    }
  },
  {
    "id": "al.y2.mech.moments.q028",
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Moments",
    "subtopicId": "al.y2.mech.moments",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "numeric",
    "tags": [
      "principle-of-moments",
      "unknown-distance",
      "uniform-beam"
    ],
    "questionText": "A uniform plank of mass $3\\,\\text{kg}$ and length $6\\,\\text{m}$ has supports at each end. A load of $30\\,\\text{N}$ is placed on the plank. Given that the right-hand reaction is $28.5\\,\\text{N}$ and $g = 9.8\\,\\text{m s}^{-2}$, find the distance of the load from the left support.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Find the beam weight",
          "workingLatex": "W_{\\text{beam}} = 3 \\times 9.8 = 29.4\\,\\text{N}",
          "explanation": "The plank weighs $29.4\\,\\text{N}$ at its centre.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Take moments about the left support",
          "workingLatex": "R_B \\times 6 = W_{\\text{beam}} \\times 3.0 + 30 \\times x",
          "explanation": "Let $x$ be the distance of the load from the left support.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute the known reaction",
          "workingLatex": "28.5 \\times 6 = 88.2 + 30 \\times x",
          "explanation": "Left side: $171.0\\,\\text{N m}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Isolate the term with $x$",
          "workingLatex": "30 \\times x = 171.0 - 88.2",
          "explanation": "$= 82.8$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve for $x$",
          "workingLatex": "x = 2.8\\,\\text{m}",
          "explanation": "The load is $2.8\\,\\text{m}$ from the left support.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check $0 < x < L$",
          "workingLatex": "0 < 2.8 < 6",
          "explanation": "The load must lie between the two supports.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Verify by finding $R_A$",
          "workingLatex": "R_A = 30.9\\,\\text{N}",
          "explanation": "Vertical equilibrium gives a positive left reaction, confirming the setup is valid.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Confirm moment balance about right support",
          "workingLatex": "R_A \\times 6 = 185.4\\,\\text{N m}",
          "explanation": "The position is consistent with equilibrium about either support.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the answer",
          "workingLatex": "x = 2.8\\,\\text{m}",
          "explanation": "The load is placed $2.8\\,\\text{m}$ from the left support.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x = 2.8\\,\\text{m}$"
    }
  },
  {
    "id": "al.y2.mech.moments.q029",
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Moments",
    "subtopicId": "al.y2.mech.moments",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "numeric",
    "tags": [
      "principle-of-moments",
      "unknown-distance",
      "uniform-beam"
    ],
    "questionText": "A uniform plank of mass $4\\,\\text{kg}$ and length $5\\,\\text{m}$ has supports at each end. A load of $25\\,\\text{N}$ is placed on the plank. Given that the right-hand reaction is $35.2\\,\\text{N}$ and $g = 9.8\\,\\text{m s}^{-2}$, find the distance of the load from the left support.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Find the beam weight",
          "workingLatex": "W_{\\text{beam}} = 4 \\times 9.8 = 39.2\\,\\text{N}",
          "explanation": "The plank weighs $39.2\\,\\text{N}$ at its centre.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Take moments about the left support",
          "workingLatex": "R_B \\times 5 = W_{\\text{beam}} \\times 2.5 + 25 \\times x",
          "explanation": "Let $x$ be the distance of the load from the left support.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute the known reaction",
          "workingLatex": "35.2 \\times 5 = 98 + 25 \\times x",
          "explanation": "Left side: $176.0\\,\\text{N m}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Isolate the term with $x$",
          "workingLatex": "25 \\times x = 176.0 - 98",
          "explanation": "$= 78$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve for $x$",
          "workingLatex": "x = 3.1\\,\\text{m}",
          "explanation": "The load is $3.1\\,\\text{m}$ from the left support.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check $0 < x < L$",
          "workingLatex": "0 < 3.1 < 5",
          "explanation": "The load must lie between the two supports.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Verify by finding $R_A$",
          "workingLatex": "R_A = 29\\,\\text{N}",
          "explanation": "Vertical equilibrium gives a positive left reaction, confirming the setup is valid.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Confirm moment balance about right support",
          "workingLatex": "R_A \\times 5 = 145\\,\\text{N m}",
          "explanation": "The position is consistent with equilibrium about either support.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the answer",
          "workingLatex": "x = 3.1\\,\\text{m}",
          "explanation": "The load is placed $3.1\\,\\text{m}$ from the left support.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x = 3.1\\,\\text{m}$"
    }
  },
  {
    "id": "al.y2.mech.moments.q030",
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Moments",
    "subtopicId": "al.y2.mech.moments",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "numeric",
    "tags": [
      "principle-of-moments",
      "unknown-distance",
      "uniform-beam"
    ],
    "questionText": "A uniform plank of mass $5\\,\\text{kg}$ and length $8\\,\\text{m}$ has supports at each end. A load of $40\\,\\text{N}$ is placed on the plank. Given that the right-hand reaction is $52.0\\,\\text{N}$ and $g = 9.8\\,\\text{m s}^{-2}$, find the distance of the load from the left support.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Find the beam weight",
          "workingLatex": "W_{\\text{beam}} = 5 \\times 9.8 = 49\\,\\text{N}",
          "explanation": "The plank weighs $49\\,\\text{N}$ at its centre.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Take moments about the left support",
          "workingLatex": "R_B \\times 8 = W_{\\text{beam}} \\times 4.0 + 40 \\times x",
          "explanation": "Let $x$ be the distance of the load from the left support.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute the known reaction",
          "workingLatex": "52.0 \\times 8 = 196 + 40 \\times x",
          "explanation": "Left side: $416.0\\,\\text{N m}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Isolate the term with $x$",
          "workingLatex": "40 \\times x = 416.0 - 196",
          "explanation": "$= 220$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve for $x$",
          "workingLatex": "x = 5.5\\,\\text{m}",
          "explanation": "The load is $5.5\\,\\text{m}$ from the left support.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check $0 < x < L$",
          "workingLatex": "0 < 5.5 < 8",
          "explanation": "The load must lie between the two supports.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Verify by finding $R_A$",
          "workingLatex": "R_A = 37\\,\\text{N}",
          "explanation": "Vertical equilibrium gives a positive left reaction, confirming the setup is valid.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Confirm moment balance about right support",
          "workingLatex": "R_A \\times 8 = 296\\,\\text{N m}",
          "explanation": "The position is consistent with equilibrium about either support.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the answer",
          "workingLatex": "x = 5.5\\,\\text{m}",
          "explanation": "The load is placed $5.5\\,\\text{m}$ from the left support.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x = 5.5\\,\\text{m}$"
    }
  },
  {
    "id": "al.y2.mech.moments.q031",
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Moments",
    "subtopicId": "al.y2.mech.moments",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "written",
    "tags": [
      "centre-of-mass",
      "triangle"
    ],
    "questionText": "A uniform triangular lamina has height $h$. State the distance of its centre of mass from the base along the axis of symmetry.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the result for a uniform triangle",
          "workingLatex": "\\text{CoM lies on the median}",
          "explanation": "For a uniform triangle, the centre of mass lies on the line of symmetry (the median from the apex).",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "State the distance from the base",
          "workingLatex": "d = \\dfrac{h}{3}",
          "explanation": "The centre of mass is one-third of the height up from the base, along the median.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Explain why not at the midpoint",
          "workingLatex": "\\text{More mass is concentrated near the base}",
          "explanation": "A triangle is wider at the base, so the balance point is closer to the base than the apex.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Distance from apex",
          "workingLatex": "d_{\\text{apex}} = \\dfrac{2h}{3}",
          "explanation": "Equivalently, the CoM is two-thirds of the height down from the apex.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Note the symmetry requirement",
          "workingLatex": "\\text{The result applies along the axis of symmetry}",
          "explanation": "For an isosceles or equilateral triangle, this gives the full CoM position.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Compare with a rectangle",
          "workingLatex": "\\text{Rectangle CoM at } h/2, \\quad \\text{triangle at } h/3",
          "explanation": "The triangle's CoM is lower than a rectangle of the same height because of the tapering shape.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Physical interpretation",
          "workingLatex": "\\text{Suspending a triangular lamina from its CoM keeps it level}",
          "explanation": "The lamina balances when supported at the centre of mass.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Integration justification (outline)",
          "workingLatex": "\\bar{y} = \\dfrac{\\int y \\, dA}{\\int dA}",
          "explanation": "The one-third result follows from integrating over the triangular area, but the standard result can be quoted directly.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the answer",
          "workingLatex": "d = \\dfrac{h}{3} \\text{ from the base}",
          "explanation": "The centre of mass is at one-third of the height from the base.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{h}{3}$ from the base along the axis of symmetry."
    }
  },
  {
    "id": "al.y2.mech.moments.q032",
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Moments",
    "subtopicId": "al.y2.mech.moments",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "written",
    "tags": [
      "centre-of-mass",
      "rectangle"
    ],
    "questionText": "A uniform rectangular lamina has width $a$ and height $b$. Find the coordinates of its centre of mass relative to the bottom-left corner.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Use symmetry of a rectangle",
          "workingLatex": "\\text{CoM lies at the geometric centre}",
          "explanation": "A uniform rectangle is symmetric in both directions, so the CoM is at the centre.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find the $x$-coordinate",
          "workingLatex": "x = \\dfrac{a}{2}",
          "explanation": "Halfway across the width.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find the $y$-coordinate",
          "workingLatex": "y = \\dfrac{b}{2}",
          "explanation": "Halfway up the height.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "State the coordinates",
          "workingLatex": "\\left(\\dfrac{a}{2},\\ \\dfrac{b}{2}\\right)",
          "explanation": "The centre of mass is at the midpoint of the rectangle.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Explain the symmetry argument",
          "workingLatex": "\\text{Equal mass on each side of the centre line}",
          "explanation": "For every element of mass on one side, there is an equal element on the opposite side.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Generalise",
          "workingLatex": "\\text{For any uniform symmetric lamina, CoM lies on all axes of symmetry}",
          "explanation": "Rectangles have two perpendicular axes of symmetry, pinning the CoM at their intersection.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Application to hanging",
          "workingLatex": "\\text{Suspending from CoM keeps the lamina level}",
          "explanation": "This is why a uniform rectangle hangs horizontally when supported at its centre.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State the answer",
          "workingLatex": "\\text{CoM at } \\left(\\dfrac{a}{2},\\ \\dfrac{b}{2}\\right)",
          "explanation": "The centre of mass is at the geometric centre of the rectangle.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Note units",
          "workingLatex": "\\text{Coordinates in metres (or same unit as dimensions)}",
          "explanation": "The position is measured from the chosen origin.",
          "diagram": null
        }
      ],
      "finalAnswer": "Centre of mass at $\\left(\\dfrac{a}{2},\\ \\dfrac{b}{2}\\right)$ from the bottom-left corner."
    }
  },
  {
    "id": "al.y2.mech.moments.q033",
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Moments",
    "subtopicId": "al.y2.mech.moments",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "written",
    "tags": [
      "centre-of-mass",
      "composite-lamina",
      "L-shape"
    ],
    "questionText": "A uniform L-shaped lamina is formed from a rectangle of size $4\\,\\text{m} \\times 2\\,\\text{m}$ with a rectangle of size $2\\,\\text{m} \\times 3\\,\\text{m}$ attached to its right side (sharing the full $2\\,\\text{m}$ edge). Taking the bottom-left corner of the $4 \\times 2$ rectangle as the origin, find the $x$-coordinate of the centre of mass.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Split into two rectangles",
          "workingLatex": "\\text{Rectangle A: } 4 \\times 2, \\quad \\text{Rectangle B: } 2 \\times 3",
          "explanation": "Divide the L-shape into simple rectangles whose centres of mass are known.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find areas (proportional to mass)",
          "workingLatex": "A_A = 8\\,\\text{m}^2, \\quad A_B = 6\\,\\text{m}^2",
          "explanation": "For uniform laminas, mass is proportional to area.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "CoM of rectangle A",
          "workingLatex": "x_A = 2\\,\\text{m}",
          "explanation": "Centre of the $4 \\times 2$ rectangle is at $x = 2$ from the origin.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "CoM of rectangle B",
          "workingLatex": "x_B = 5\\,\\text{m}",
          "explanation": "The $2 \\times 3$ rectangle spans $x = 4$ to $x = 6$, so its centre is at $x = 5$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Use the composite CoM formula",
          "workingLatex": "\\bar{x} = \\dfrac{A_A x_A + A_B x_B}{A_A + A_B}",
          "explanation": "The combined CoM is the area-weighted average of the component CoMs.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute",
          "workingLatex": "\\bar{x} = \\dfrac{8 \\times 2 + 6 \\times 5}{8 + 6}",
          "explanation": "Numerator: sum of (area $\\times$ CoM coordinate) for each piece.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Evaluate",
          "workingLatex": "\\bar{x} = \\dfrac{16 + 30}{14} = \\dfrac{46}{14} = \\dfrac{23}{7} \\approx 3.29\\,\\text{m}",
          "explanation": "The $x$-coordinate of the centre of mass is $\\dfrac{23}{7}\\,\\text{m}$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Interpret",
          "workingLatex": "\\bar{x} \\approx 3.29\\,\\text{m}",
          "explanation": "The CoM is shifted right from the centre of rectangle A because of the extra mass on the right.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Note on $y$-coordinate",
          "workingLatex": "\\text{A separate calculation gives } \\bar{y}",
          "explanation": "The full CoM position requires finding $\\bar{y}$ similarly, but this question asks only for $\\bar{x}$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\bar{x} = \\dfrac{23}{7}\\,\\text{m} \\approx 3.29\\,\\text{m}$"
    }
  },
  {
    "id": "al.y2.mech.moments.q034",
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Moments",
    "subtopicId": "al.y2.mech.moments",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "tags": [
      "principle-of-moments",
      "reactions",
      "uniform-beam"
    ],
    "questionText": "A uniform beam of mass $3\\,\\text{kg}$ and length $5\\,\\text{m}$ rests on supports at each end. A vertical force of $0\\,\\text{N}$ acts downward at $0\\,\\text{m}$ from the left support. Taking $g = 9.8\\,\\text{m s}^{-2}$, find the reactions at each support.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Calculate the weight of the beam",
          "workingLatex": "W = mg = 3 \\times 9.8 = 29.4\\,\\text{N}",
          "explanation": "The uniform beam weighs $29.4\\,\\text{N}$, acting at its centre ($2.5\\,\\text{m}$ from either end).",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Take moments about the left support",
          "workingLatex": "\\sum M_A = 0",
          "explanation": "This eliminates $R_A$ from the moment equation.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write the moment equation",
          "workingLatex": "R_B \\times 5 = 29.4 \\times 2.5 + 0 \\times 0",
          "explanation": "Clockwise moment from $R_B$ balances anticlockwise moments from beam weight and extra load.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate the anticlockwise moments",
          "workingLatex": "= 73.5\\,\\text{N m}",
          "explanation": "Total anticlockwise moment is $73.5\\,\\text{N m}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve for $R_B$",
          "workingLatex": "R_B = 14.7\\,\\text{N}",
          "explanation": "$R_B = 14.7\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Use vertical equilibrium for $R_A$",
          "workingLatex": "R_A + R_B = 29.4",
          "explanation": "Total upward reaction equals total downward load.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Solve for $R_A$",
          "workingLatex": "R_A = 14.7\\,\\text{N}",
          "explanation": "$R_A = 29.4 - 14.7 = 14.7\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check: moments about right support",
          "workingLatex": "R_A \\times 5 = 73.5\\,\\text{N m}",
          "explanation": "Verifying about the right support confirms both reactions are consistent.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State both reactions",
          "workingLatex": "R_A = 14.7\\,\\text{N}, \\quad R_B = 14.7\\,\\text{N}",
          "explanation": "Both supports share the total load, with the nearer support to the extra load bearing more.",
          "diagram": null
        }
      ],
      "finalAnswer": "$R_A = 14.7\\,\\text{N}$, $R_B = 14.7\\,\\text{N}$."
    }
  },
  {
    "id": "al.y2.mech.moments.q035",
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Moments",
    "subtopicId": "al.y2.mech.moments",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "tags": [
      "principle-of-moments",
      "reactions",
      "uniform-beam"
    ],
    "questionText": "A uniform beam of mass $5\\,\\text{kg}$ and length $6\\,\\text{m}$ rests on supports at each end. A vertical force of $35\\,\\text{N}$ acts downward at $4\\,\\text{m}$ from the left support. Taking $g = 9.8\\,\\text{m s}^{-2}$, find the reactions at each support.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Calculate the weight of the beam",
          "workingLatex": "W = mg = 5 \\times 9.8 = 49\\,\\text{N}",
          "explanation": "The uniform beam weighs $49\\,\\text{N}$, acting at its centre ($3.0\\,\\text{m}$ from either end).",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Take moments about the left support",
          "workingLatex": "\\sum M_A = 0",
          "explanation": "This eliminates $R_A$ from the moment equation.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write the moment equation",
          "workingLatex": "R_B \\times 6 = 49 \\times 3.0 + 35 \\times 4",
          "explanation": "Clockwise moment from $R_B$ balances anticlockwise moments from beam weight and extra load.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate the anticlockwise moments",
          "workingLatex": "= 287\\,\\text{N m}",
          "explanation": "Total anticlockwise moment is $287\\,\\text{N m}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve for $R_B$",
          "workingLatex": "R_B = 47.8\\,\\text{N}",
          "explanation": "$R_B = 47.8\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Use vertical equilibrium for $R_A$",
          "workingLatex": "R_A + R_B = 84",
          "explanation": "Total upward reaction equals total downward load.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Solve for $R_A$",
          "workingLatex": "R_A = 36.2\\,\\text{N}",
          "explanation": "$R_A = 84 - 47.8 = 36.2\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check: moments about right support",
          "workingLatex": "R_A \\times 6 = 217\\,\\text{N m}",
          "explanation": "Verifying about the right support confirms both reactions are consistent.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State both reactions",
          "workingLatex": "R_A = 36.2\\,\\text{N}, \\quad R_B = 47.8\\,\\text{N}",
          "explanation": "Both supports share the total load, with the nearer support to the extra load bearing more.",
          "diagram": null
        }
      ],
      "finalAnswer": "$R_A = 36.2\\,\\text{N}$, $R_B = 47.8\\,\\text{N}$."
    }
  },
  {
    "id": "al.y2.mech.moments.q036",
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Moments",
    "subtopicId": "al.y2.mech.moments",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "tags": [
      "principle-of-moments",
      "reactions",
      "uniform-beam"
    ],
    "questionText": "A uniform beam of mass $2\\,\\text{kg}$ and length $4\\,\\text{m}$ rests on supports at each end. A vertical force of $18\\,\\text{N}$ acts downward at $2.5\\,\\text{m}$ from the left support. Taking $g = 9.8\\,\\text{m s}^{-2}$, find the reactions at each support.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Calculate the weight of the beam",
          "workingLatex": "W = mg = 2 \\times 9.8 = 19.6\\,\\text{N}",
          "explanation": "The uniform beam weighs $19.6\\,\\text{N}$, acting at its centre ($2.0\\,\\text{m}$ from either end).",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Take moments about the left support",
          "workingLatex": "\\sum M_A = 0",
          "explanation": "This eliminates $R_A$ from the moment equation.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write the moment equation",
          "workingLatex": "R_B \\times 4 = 19.6 \\times 2.0 + 18 \\times 2.5",
          "explanation": "Clockwise moment from $R_B$ balances anticlockwise moments from beam weight and extra load.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate the anticlockwise moments",
          "workingLatex": "= 84.2\\,\\text{N m}",
          "explanation": "Total anticlockwise moment is $84.2\\,\\text{N m}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve for $R_B$",
          "workingLatex": "R_B = 21.1\\,\\text{N}",
          "explanation": "$R_B = 21.1\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Use vertical equilibrium for $R_A$",
          "workingLatex": "R_A + R_B = 37.6",
          "explanation": "Total upward reaction equals total downward load.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Solve for $R_A$",
          "workingLatex": "R_A = 16.6\\,\\text{N}",
          "explanation": "$R_A = 37.6 - 21.1 = 16.6\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check: moments about right support",
          "workingLatex": "R_A \\times 4 = 66.2\\,\\text{N m}",
          "explanation": "Verifying about the right support confirms both reactions are consistent.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State both reactions",
          "workingLatex": "R_A = 16.6\\,\\text{N}, \\quad R_B = 21.1\\,\\text{N}",
          "explanation": "Both supports share the total load, with the nearer support to the extra load bearing more.",
          "diagram": null
        }
      ],
      "finalAnswer": "$R_A = 16.6\\,\\text{N}$, $R_B = 21.1\\,\\text{N}$."
    }
  },
  {
    "id": "al.y2.mech.moments.q037",
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Moments",
    "subtopicId": "al.y2.mech.moments",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "tags": [
      "principle-of-moments",
      "reactions",
      "uniform-beam"
    ],
    "questionText": "A uniform beam of mass $4\\,\\text{kg}$ and length $9\\,\\text{m}$ rests on supports at each end. A vertical force of $45\\,\\text{N}$ acts downward at $6\\,\\text{m}$ from the left support. Taking $g = 9.8\\,\\text{m s}^{-2}$, find the reactions at each support.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Calculate the weight of the beam",
          "workingLatex": "W = mg = 4 \\times 9.8 = 39.2\\,\\text{N}",
          "explanation": "The uniform beam weighs $39.2\\,\\text{N}$, acting at its centre ($4.5\\,\\text{m}$ from either end).",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Take moments about the left support",
          "workingLatex": "\\sum M_A = 0",
          "explanation": "This eliminates $R_A$ from the moment equation.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write the moment equation",
          "workingLatex": "R_B \\times 9 = 39.2 \\times 4.5 + 45 \\times 6",
          "explanation": "Clockwise moment from $R_B$ balances anticlockwise moments from beam weight and extra load.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate the anticlockwise moments",
          "workingLatex": "= 446.4\\,\\text{N m}",
          "explanation": "Total anticlockwise moment is $446.4\\,\\text{N m}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve for $R_B$",
          "workingLatex": "R_B = 49.6\\,\\text{N}",
          "explanation": "$R_B = 49.6\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Use vertical equilibrium for $R_A$",
          "workingLatex": "R_A + R_B = 84.2",
          "explanation": "Total upward reaction equals total downward load.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Solve for $R_A$",
          "workingLatex": "R_A = 34.6\\,\\text{N}",
          "explanation": "$R_A = 84.2 - 49.6 = 34.6\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check: moments about right support",
          "workingLatex": "R_A \\times 9 = 311.4\\,\\text{N m}",
          "explanation": "Verifying about the right support confirms both reactions are consistent.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State both reactions",
          "workingLatex": "R_A = 34.6\\,\\text{N}, \\quad R_B = 49.6\\,\\text{N}",
          "explanation": "Both supports share the total load, with the nearer support to the extra load bearing more.",
          "diagram": null
        }
      ],
      "finalAnswer": "$R_A = 34.6\\,\\text{N}$, $R_B = 49.6\\,\\text{N}$."
    }
  },
  {
    "id": "al.y2.mech.moments.q038",
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Moments",
    "subtopicId": "al.y2.mech.moments",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "tags": [
      "principle-of-moments",
      "reactions",
      "uniform-beam"
    ],
    "questionText": "A uniform beam of mass $6\\,\\text{kg}$ and length $7\\,\\text{m}$ rests on supports at each end. A vertical force of $55\\,\\text{N}$ acts downward at $2\\,\\text{m}$ from the left support. Taking $g = 9.8\\,\\text{m s}^{-2}$, find the reactions at each support.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Calculate the weight of the beam",
          "workingLatex": "W = mg = 6 \\times 9.8 = 58.8\\,\\text{N}",
          "explanation": "The uniform beam weighs $58.8\\,\\text{N}$, acting at its centre ($3.5\\,\\text{m}$ from either end).",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Take moments about the left support",
          "workingLatex": "\\sum M_A = 0",
          "explanation": "This eliminates $R_A$ from the moment equation.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write the moment equation",
          "workingLatex": "R_B \\times 7 = 58.8 \\times 3.5 + 55 \\times 2",
          "explanation": "Clockwise moment from $R_B$ balances anticlockwise moments from beam weight and extra load.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate the anticlockwise moments",
          "workingLatex": "= 315.8\\,\\text{N m}",
          "explanation": "Total anticlockwise moment is $315.8\\,\\text{N m}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve for $R_B$",
          "workingLatex": "R_B = 45.1\\,\\text{N}",
          "explanation": "$R_B = 45.1\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Use vertical equilibrium for $R_A$",
          "workingLatex": "R_A + R_B = 113.8",
          "explanation": "Total upward reaction equals total downward load.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Solve for $R_A$",
          "workingLatex": "R_A = 68.7\\,\\text{N}",
          "explanation": "$R_A = 113.8 - 45.1 = 68.7\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check: moments about right support",
          "workingLatex": "R_A \\times 7 = 480.8\\,\\text{N m}",
          "explanation": "Verifying about the right support confirms both reactions are consistent.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State both reactions",
          "workingLatex": "R_A = 68.7\\,\\text{N}, \\quad R_B = 45.1\\,\\text{N}",
          "explanation": "Both supports share the total load, with the nearer support to the extra load bearing more.",
          "diagram": null
        }
      ],
      "finalAnswer": "$R_A = 68.7\\,\\text{N}$, $R_B = 45.1\\,\\text{N}$."
    }
  },
  {
    "id": "al.y2.mech.moments.q039",
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Moments",
    "subtopicId": "al.y2.mech.moments",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "tags": [
      "principle-of-moments",
      "reactions",
      "uniform-beam"
    ],
    "questionText": "A uniform beam of mass $8\\,\\text{kg}$ and length $10\\,\\text{m}$ rests on supports at each end. A vertical force of $70\\,\\text{N}$ acts downward at $8\\,\\text{m}$ from the left support. Taking $g = 9.8\\,\\text{m s}^{-2}$, find the reactions at each support.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Calculate the weight of the beam",
          "workingLatex": "W = mg = 8 \\times 9.8 = 78.4\\,\\text{N}",
          "explanation": "The uniform beam weighs $78.4\\,\\text{N}$, acting at its centre ($5.0\\,\\text{m}$ from either end).",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Take moments about the left support",
          "workingLatex": "\\sum M_A = 0",
          "explanation": "This eliminates $R_A$ from the moment equation.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write the moment equation",
          "workingLatex": "R_B \\times 10 = 78.4 \\times 5.0 + 70 \\times 8",
          "explanation": "Clockwise moment from $R_B$ balances anticlockwise moments from beam weight and extra load.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate the anticlockwise moments",
          "workingLatex": "= 952\\,\\text{N m}",
          "explanation": "Total anticlockwise moment is $952\\,\\text{N m}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve for $R_B$",
          "workingLatex": "R_B = 95.2\\,\\text{N}",
          "explanation": "$R_B = 95.2\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Use vertical equilibrium for $R_A$",
          "workingLatex": "R_A + R_B = 148.4",
          "explanation": "Total upward reaction equals total downward load.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Solve for $R_A$",
          "workingLatex": "R_A = 53.2\\,\\text{N}",
          "explanation": "$R_A = 148.4 - 95.2 = 53.2\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check: moments about right support",
          "workingLatex": "R_A \\times 10 = 532\\,\\text{N m}",
          "explanation": "Verifying about the right support confirms both reactions are consistent.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State both reactions",
          "workingLatex": "R_A = 53.2\\,\\text{N}, \\quad R_B = 95.2\\,\\text{N}",
          "explanation": "Both supports share the total load, with the nearer support to the extra load bearing more.",
          "diagram": null
        }
      ],
      "finalAnswer": "$R_A = 53.2\\,\\text{N}$, $R_B = 95.2\\,\\text{N}$."
    }
  },
  {
    "id": "al.y2.mech.moments.q040",
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Moments",
    "subtopicId": "al.y2.mech.moments",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "tags": [
      "principle-of-moments",
      "reactions",
      "uniform-beam"
    ],
    "questionText": "A uniform beam of mass $3\\,\\text{kg}$ and length $5\\,\\text{m}$ rests on supports at each end. A vertical force of $22\\,\\text{N}$ acts downward at $4\\,\\text{m}$ from the left support. Taking $g = 9.8\\,\\text{m s}^{-2}$, find the reactions at each support.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Calculate the weight of the beam",
          "workingLatex": "W = mg = 3 \\times 9.8 = 29.4\\,\\text{N}",
          "explanation": "The uniform beam weighs $29.4\\,\\text{N}$, acting at its centre ($2.5\\,\\text{m}$ from either end).",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Take moments about the left support",
          "workingLatex": "\\sum M_A = 0",
          "explanation": "This eliminates $R_A$ from the moment equation.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write the moment equation",
          "workingLatex": "R_B \\times 5 = 29.4 \\times 2.5 + 22 \\times 4",
          "explanation": "Clockwise moment from $R_B$ balances anticlockwise moments from beam weight and extra load.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate the anticlockwise moments",
          "workingLatex": "= 161.5\\,\\text{N m}",
          "explanation": "Total anticlockwise moment is $161.5\\,\\text{N m}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve for $R_B$",
          "workingLatex": "R_B = 32.3\\,\\text{N}",
          "explanation": "$R_B = 32.3\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Use vertical equilibrium for $R_A$",
          "workingLatex": "R_A + R_B = 51.4",
          "explanation": "Total upward reaction equals total downward load.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Solve for $R_A$",
          "workingLatex": "R_A = 19.1\\,\\text{N}",
          "explanation": "$R_A = 51.4 - 32.3 = 19.1\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check: moments about right support",
          "workingLatex": "R_A \\times 5 = 95.5\\,\\text{N m}",
          "explanation": "Verifying about the right support confirms both reactions are consistent.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State both reactions",
          "workingLatex": "R_A = 19.1\\,\\text{N}, \\quad R_B = 32.3\\,\\text{N}",
          "explanation": "Both supports share the total load, with the nearer support to the extra load bearing more.",
          "diagram": null
        }
      ],
      "finalAnswer": "$R_A = 19.1\\,\\text{N}$, $R_B = 32.3\\,\\text{N}$."
    }
  },
  {
    "id": "al.y2.mech.moments.q041",
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Moments",
    "subtopicId": "al.y2.mech.moments",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "numeric",
    "tags": [
      "uniform-rod",
      "particle",
      "reactions"
    ],
    "questionText": "A light rod of length $4\\,\\text{m}$ has a particle of mass $3\\,\\text{kg}$ attached at $3.5\\,\\text{m}$ from one end. The rod itself has mass $2\\,\\text{kg}$ and is uniform. The rod rests horizontally on supports at each end. Taking $g = 9.8\\,\\text{m s}^{-2}$, find the reaction at the end nearer the particle.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Calculate weights",
          "workingLatex": "W_{\\text{rod}} = 19.6\\,\\text{N}, \\quad W_{\\text{particle}} = 29.4\\,\\text{N}",
          "explanation": "Both the rod and particle contribute to the total downward load.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify the nearer support",
          "workingLatex": "\\text{Particle at } 3.5\\,\\text{m} \\Rightarrow \\text{ nearer the right end}",
          "explanation": "The particle at $3.5\\,\\text{m}$ is closer to the right-hand support.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Take moments about the far support",
          "workingLatex": "\\sum M = 0",
          "explanation": "Taking moments about the far end eliminates the reaction there.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Set up the moment equation",
          "workingLatex": "R_{\\text{near}} \\times d = \\text{anticlockwise moments}",
          "explanation": "The nearer support's reaction creates the balancing moment.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Calculate using moments about left support",
          "workingLatex": "R_B \\times 4 = 19.6 \\times 2.0 + 29.4 \\times 3.5",
          "explanation": "Standard moment balance about the left support.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Solve",
          "workingLatex": "R_B = 35.5\\,\\text{N}, \\quad R_A = 13.5\\,\\text{N}",
          "explanation": "Both reactions found from moments and vertical equilibrium.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Identify the nearer reaction",
          "workingLatex": "R_{\\text{near}} = 35.5\\,\\text{N}",
          "explanation": "The right-hand support bears $35.5\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Explain why nearer support carries more",
          "workingLatex": "\\text{The particle is closer to this support}",
          "explanation": "Loads closer to a support increase the reaction at that support.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the answer",
          "workingLatex": "R_{\\text{near}} = 35.5\\,\\text{N}",
          "explanation": "The reaction at the end nearer the particle is $35.5\\,\\text{N}$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$R_{\\text{near}} = 35.5\\,\\text{N}$"
    }
  },
  {
    "id": "al.y2.mech.moments.q042",
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Moments",
    "subtopicId": "al.y2.mech.moments",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "numeric",
    "tags": [
      "uniform-rod",
      "particle",
      "reactions"
    ],
    "questionText": "A light rod of length $6\\,\\text{m}$ has a particle of mass $5\\,\\text{kg}$ attached at $5\\,\\text{m}$ from one end. The rod itself has mass $3\\,\\text{kg}$ and is uniform. The rod rests horizontally on supports at each end. Taking $g = 9.8\\,\\text{m s}^{-2}$, find the reaction at the end nearer the particle.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Calculate weights",
          "workingLatex": "W_{\\text{rod}} = 29.4\\,\\text{N}, \\quad W_{\\text{particle}} = 49\\,\\text{N}",
          "explanation": "Both the rod and particle contribute to the total downward load.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify the nearer support",
          "workingLatex": "\\text{Particle at } 5\\,\\text{m} \\Rightarrow \\text{ nearer the right end}",
          "explanation": "The particle at $5\\,\\text{m}$ is closer to the right-hand support.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Take moments about the far support",
          "workingLatex": "\\sum M = 0",
          "explanation": "Taking moments about the far end eliminates the reaction there.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Set up the moment equation",
          "workingLatex": "R_{\\text{near}} \\times d = \\text{anticlockwise moments}",
          "explanation": "The nearer support's reaction creates the balancing moment.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Calculate using moments about left support",
          "workingLatex": "R_B \\times 6 = 29.4 \\times 3.0 + 49 \\times 5",
          "explanation": "Standard moment balance about the left support.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Solve",
          "workingLatex": "R_B = 55.5\\,\\text{N}, \\quad R_A = 22.9\\,\\text{N}",
          "explanation": "Both reactions found from moments and vertical equilibrium.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Identify the nearer reaction",
          "workingLatex": "R_{\\text{near}} = 55.5\\,\\text{N}",
          "explanation": "The right-hand support bears $55.5\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Explain why nearer support carries more",
          "workingLatex": "\\text{The particle is closer to this support}",
          "explanation": "Loads closer to a support increase the reaction at that support.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the answer",
          "workingLatex": "R_{\\text{near}} = 55.5\\,\\text{N}",
          "explanation": "The reaction at the end nearer the particle is $55.5\\,\\text{N}$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$R_{\\text{near}} = 55.5\\,\\text{N}$"
    }
  },
  {
    "id": "al.y2.mech.moments.q043",
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Moments",
    "subtopicId": "al.y2.mech.moments",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "numeric",
    "tags": [
      "uniform-rod",
      "particle",
      "reactions"
    ],
    "questionText": "A light rod of length $5\\,\\text{m}$ has a particle of mass $4\\,\\text{kg}$ attached at $1\\,\\text{m}$ from one end. The rod itself has mass $2\\,\\text{kg}$ and is uniform. The rod rests horizontally on supports at each end. Taking $g = 9.8\\,\\text{m s}^{-2}$, find the reaction at the end nearer the particle.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Calculate weights",
          "workingLatex": "W_{\\text{rod}} = 19.6\\,\\text{N}, \\quad W_{\\text{particle}} = 39.2\\,\\text{N}",
          "explanation": "Both the rod and particle contribute to the total downward load.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify the nearer support",
          "workingLatex": "\\text{Particle at } 1\\,\\text{m} \\Rightarrow \\text{ nearer the left end}",
          "explanation": "The particle at $1\\,\\text{m}$ is closer to the left-hand support.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Take moments about the far support",
          "workingLatex": "\\sum M = 0",
          "explanation": "Taking moments about the far end eliminates the reaction there.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Set up the moment equation",
          "workingLatex": "R_{\\text{near}} \\times d = \\text{anticlockwise moments}",
          "explanation": "The nearer support's reaction creates the balancing moment.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Calculate using moments about left support",
          "workingLatex": "R_B \\times 5 = 19.6 \\times 2.5 + 39.2 \\times 1",
          "explanation": "Standard moment balance about the left support.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Solve",
          "workingLatex": "R_B = 17.6\\,\\text{N}, \\quad R_A = 41.2\\,\\text{N}",
          "explanation": "Both reactions found from moments and vertical equilibrium.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Identify the nearer reaction",
          "workingLatex": "R_{\\text{near}} = 41.2\\,\\text{N}",
          "explanation": "The left-hand support bears $41.2\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Explain why nearer support carries more",
          "workingLatex": "\\text{The particle is closer to this support}",
          "explanation": "Loads closer to a support increase the reaction at that support.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the answer",
          "workingLatex": "R_{\\text{near}} = 41.2\\,\\text{N}",
          "explanation": "The reaction at the end nearer the particle is $41.2\\,\\text{N}$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$R_{\\text{near}} = 41.2\\,\\text{N}$"
    }
  },
  {
    "id": "al.y2.mech.moments.q044",
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Moments",
    "subtopicId": "al.y2.mech.moments",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "numeric",
    "tags": [
      "uniform-rod",
      "particle",
      "reactions"
    ],
    "questionText": "A light rod of length $8\\,\\text{m}$ has a particle of mass $6\\,\\text{kg}$ attached at $7\\,\\text{m}$ from one end. The rod itself has mass $4\\,\\text{kg}$ and is uniform. The rod rests horizontally on supports at each end. Taking $g = 9.8\\,\\text{m s}^{-2}$, find the reaction at the end nearer the particle.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Calculate weights",
          "workingLatex": "W_{\\text{rod}} = 39.2\\,\\text{N}, \\quad W_{\\text{particle}} = 58.8\\,\\text{N}",
          "explanation": "Both the rod and particle contribute to the total downward load.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify the nearer support",
          "workingLatex": "\\text{Particle at } 7\\,\\text{m} \\Rightarrow \\text{ nearer the right end}",
          "explanation": "The particle at $7\\,\\text{m}$ is closer to the right-hand support.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Take moments about the far support",
          "workingLatex": "\\sum M = 0",
          "explanation": "Taking moments about the far end eliminates the reaction there.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Set up the moment equation",
          "workingLatex": "R_{\\text{near}} \\times d = \\text{anticlockwise moments}",
          "explanation": "The nearer support's reaction creates the balancing moment.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Calculate using moments about left support",
          "workingLatex": "R_B \\times 8 = 39.2 \\times 4.0 + 58.8 \\times 7",
          "explanation": "Standard moment balance about the left support.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Solve",
          "workingLatex": "R_B = 71.1\\,\\text{N}, \\quad R_A = 26.9\\,\\text{N}",
          "explanation": "Both reactions found from moments and vertical equilibrium.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Identify the nearer reaction",
          "workingLatex": "R_{\\text{near}} = 71.1\\,\\text{N}",
          "explanation": "The right-hand support bears $71.1\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Explain why nearer support carries more",
          "workingLatex": "\\text{The particle is closer to this support}",
          "explanation": "Loads closer to a support increase the reaction at that support.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the answer",
          "workingLatex": "R_{\\text{near}} = 71.1\\,\\text{N}",
          "explanation": "The reaction at the end nearer the particle is $71.1\\,\\text{N}$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$R_{\\text{near}} = 71.1\\,\\text{N}$"
    }
  },
  {
    "id": "al.y2.mech.moments.q045",
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Moments",
    "subtopicId": "al.y2.mech.moments",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "written",
    "tags": [
      "tilting",
      "limiting-equilibrium",
      "reactions"
    ],
    "questionText": "A uniform beam of mass $4\\,\\text{kg}$ and length $6\\,\\text{m}$ rests on supports at each end. A load of $50\\,\\text{N}$ is placed at $5.5\\,\\text{m}$ from the left support. Taking $g = 9.8\\,\\text{m s}^{-2}$, determine whether the beam is on the point of tilting about the right support, and find the reaction at the left support.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Calculate the beam weight",
          "workingLatex": "W = 39.2\\,\\text{N}",
          "explanation": "The beam weighs $39.2\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find reactions assuming both supports act",
          "workingLatex": "R_B = 65.4\\,\\text{N}, \\quad R_A = 23.8\\,\\text{N}",
          "explanation": "Using the standard moment and equilibrium equations.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Check if $R_A > 0$",
          "workingLatex": "R_A = 23.8 > 0",
          "explanation": "Both supports carry load — no tilting.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "State the tilting condition",
          "workingLatex": "R_A = 0 \\Rightarrow \\text{tilting about right support}",
          "explanation": "When the left reaction becomes zero, the beam is about to tip over the right support.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Derive the limiting position formula",
          "workingLatex": "W_{\\text{extra}}(L - x) = W \\times \\dfrac{L}{2}",
          "explanation": "At the point of tilting about the right support, moments about that support give this relationship.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Interpret the result",
          "workingLatex": "R_A = 23.8\\,\\text{N}",
          "explanation": "The beam remains in equilibrium on both supports.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Explain physically",
          "workingLatex": "\\text{Moving the load right reduces } R_A",
          "explanation": "As the load moves toward the right support, less reaction is needed at the left.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State whether tilting occurs",
          "workingLatex": "\\text{No tilting}",
          "explanation": "Both supports remain in contact.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Give the left reaction",
          "workingLatex": "R_A = 23.8\\,\\text{N}",
          "explanation": "The reaction at the left support is $23.8\\,\\text{N}$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$R_A = 23.8\\,\\text{N}$. No — both supports remain in contact."
    }
  },
  {
    "id": "al.y2.mech.moments.q046",
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Moments",
    "subtopicId": "al.y2.mech.moments",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "written",
    "tags": [
      "tilting",
      "limiting-equilibrium",
      "reactions"
    ],
    "questionText": "A uniform beam of mass $5\\,\\text{kg}$ and length $8\\,\\text{m}$ rests on supports at each end. A load of $80\\,\\text{N}$ is placed at $7\\,\\text{m}$ from the left support. Taking $g = 9.8\\,\\text{m s}^{-2}$, determine whether the beam is on the point of tilting about the right support, and find the reaction at the left support.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Calculate the beam weight",
          "workingLatex": "W = 49\\,\\text{N}",
          "explanation": "The beam weighs $49\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find reactions assuming both supports act",
          "workingLatex": "R_B = 94.5\\,\\text{N}, \\quad R_A = 34.5\\,\\text{N}",
          "explanation": "Using the standard moment and equilibrium equations.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Check if $R_A > 0$",
          "workingLatex": "R_A = 34.5 > 0",
          "explanation": "Both supports carry load — no tilting.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "State the tilting condition",
          "workingLatex": "R_A = 0 \\Rightarrow \\text{tilting about right support}",
          "explanation": "When the left reaction becomes zero, the beam is about to tip over the right support.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Derive the limiting position formula",
          "workingLatex": "W_{\\text{extra}}(L - x) = W \\times \\dfrac{L}{2}",
          "explanation": "At the point of tilting about the right support, moments about that support give this relationship.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Interpret the result",
          "workingLatex": "R_A = 34.5\\,\\text{N}",
          "explanation": "The beam remains in equilibrium on both supports.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Explain physically",
          "workingLatex": "\\text{Moving the load right reduces } R_A",
          "explanation": "As the load moves toward the right support, less reaction is needed at the left.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State whether tilting occurs",
          "workingLatex": "\\text{No tilting}",
          "explanation": "Both supports remain in contact.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Give the left reaction",
          "workingLatex": "R_A = 34.5\\,\\text{N}",
          "explanation": "The reaction at the left support is $34.5\\,\\text{N}$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$R_A = 34.5\\,\\text{N}$. No — both supports remain in contact."
    }
  },
  {
    "id": "al.y2.mech.moments.q047",
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Moments",
    "subtopicId": "al.y2.mech.moments",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "written",
    "tags": [
      "tilting",
      "limiting-equilibrium",
      "reactions"
    ],
    "questionText": "A uniform beam of mass $3\\,\\text{kg}$ and length $5\\,\\text{m}$ rests on supports at each end. A load of $100\\,\\text{N}$ is placed at $4.5\\,\\text{m}$ from the left support. Taking $g = 9.8\\,\\text{m s}^{-2}$, determine whether the beam is on the point of tilting about the right support, and find the reaction at the left support.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Calculate the beam weight",
          "workingLatex": "W = 29.4\\,\\text{N}",
          "explanation": "The beam weighs $29.4\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find reactions assuming both supports act",
          "workingLatex": "R_B = 104.7\\,\\text{N}, \\quad R_A = 24.7\\,\\text{N}",
          "explanation": "Using the standard moment and equilibrium equations.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Check if $R_A > 0$",
          "workingLatex": "R_A = 24.7 > 0",
          "explanation": "Both supports carry load — no tilting.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "State the tilting condition",
          "workingLatex": "R_A = 0 \\Rightarrow \\text{tilting about right support}",
          "explanation": "When the left reaction becomes zero, the beam is about to tip over the right support.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Derive the limiting position formula",
          "workingLatex": "W_{\\text{extra}}(L - x) = W \\times \\dfrac{L}{2}",
          "explanation": "At the point of tilting about the right support, moments about that support give this relationship.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Interpret the result",
          "workingLatex": "R_A = 24.7\\,\\text{N}",
          "explanation": "The beam remains in equilibrium on both supports.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Explain physically",
          "workingLatex": "\\text{Moving the load right reduces } R_A",
          "explanation": "As the load moves toward the right support, less reaction is needed at the left.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State whether tilting occurs",
          "workingLatex": "\\text{No tilting}",
          "explanation": "Both supports remain in contact.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Give the left reaction",
          "workingLatex": "R_A = 24.7\\,\\text{N}",
          "explanation": "The reaction at the left support is $24.7\\,\\text{N}$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$R_A = 24.7\\,\\text{N}$. No — both supports remain in contact."
    }
  },
  {
    "id": "al.y2.mech.moments.q048",
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Moments",
    "subtopicId": "al.y2.mech.moments",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "written",
    "tags": [
      "tilting",
      "limiting-equilibrium",
      "reactions"
    ],
    "questionText": "A uniform beam of mass $6\\,\\text{kg}$ and length $10\\,\\text{m}$ rests on supports at each end. A load of $60\\,\\text{N}$ is placed at $9\\,\\text{m}$ from the left support. Taking $g = 9.8\\,\\text{m s}^{-2}$, determine whether the beam is on the point of tilting about the right support, and find the reaction at the left support.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Calculate the beam weight",
          "workingLatex": "W = 58.8\\,\\text{N}",
          "explanation": "The beam weighs $58.8\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find reactions assuming both supports act",
          "workingLatex": "R_B = 83.4\\,\\text{N}, \\quad R_A = 35.4\\,\\text{N}",
          "explanation": "Using the standard moment and equilibrium equations.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Check if $R_A > 0$",
          "workingLatex": "R_A = 35.4 > 0",
          "explanation": "Both supports carry load — no tilting.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "State the tilting condition",
          "workingLatex": "R_A = 0 \\Rightarrow \\text{tilting about right support}",
          "explanation": "When the left reaction becomes zero, the beam is about to tip over the right support.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Derive the limiting position formula",
          "workingLatex": "W_{\\text{extra}}(L - x) = W \\times \\dfrac{L}{2}",
          "explanation": "At the point of tilting about the right support, moments about that support give this relationship.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Interpret the result",
          "workingLatex": "R_A = 35.4\\,\\text{N}",
          "explanation": "The beam remains in equilibrium on both supports.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Explain physically",
          "workingLatex": "\\text{Moving the load right reduces } R_A",
          "explanation": "As the load moves toward the right support, less reaction is needed at the left.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State whether tilting occurs",
          "workingLatex": "\\text{No tilting}",
          "explanation": "Both supports remain in contact.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Give the left reaction",
          "workingLatex": "R_A = 35.4\\,\\text{N}",
          "explanation": "The reaction at the left support is $35.4\\,\\text{N}$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$R_A = 35.4\\,\\text{N}$. No — both supports remain in contact."
    }
  },
  {
    "id": "al.y2.mech.moments.q049",
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Moments",
    "subtopicId": "al.y2.mech.moments",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "written",
    "tags": [
      "tilting",
      "limiting-equilibrium",
      "reactions"
    ],
    "questionText": "A uniform beam of mass $2\\,\\text{kg}$ and length $4\\,\\text{m}$ rests on supports at each end. A load of $40\\,\\text{N}$ is placed at $3.8\\,\\text{m}$ from the left support. Taking $g = 9.8\\,\\text{m s}^{-2}$, determine whether the beam is on the point of tilting about the right support, and find the reaction at the left support.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Calculate the beam weight",
          "workingLatex": "W = 19.6\\,\\text{N}",
          "explanation": "The beam weighs $19.6\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find reactions assuming both supports act",
          "workingLatex": "R_B = 47.8\\,\\text{N}, \\quad R_A = 11.8\\,\\text{N}",
          "explanation": "Using the standard moment and equilibrium equations.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Check if $R_A > 0$",
          "workingLatex": "R_A = 11.8 > 0",
          "explanation": "Both supports carry load — no tilting.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "State the tilting condition",
          "workingLatex": "R_A = 0 \\Rightarrow \\text{tilting about right support}",
          "explanation": "When the left reaction becomes zero, the beam is about to tip over the right support.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Derive the limiting position formula",
          "workingLatex": "W_{\\text{extra}}(L - x) = W \\times \\dfrac{L}{2}",
          "explanation": "At the point of tilting about the right support, moments about that support give this relationship.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Interpret the result",
          "workingLatex": "R_A = 11.8\\,\\text{N}",
          "explanation": "The beam remains in equilibrium on both supports.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Explain physically",
          "workingLatex": "\\text{Moving the load right reduces } R_A",
          "explanation": "As the load moves toward the right support, less reaction is needed at the left.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State whether tilting occurs",
          "workingLatex": "\\text{No tilting}",
          "explanation": "Both supports remain in contact.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Give the left reaction",
          "workingLatex": "R_A = 11.8\\,\\text{N}",
          "explanation": "The reaction at the left support is $11.8\\,\\text{N}$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$R_A = 11.8\\,\\text{N}$. No — both supports remain in contact."
    }
  },
  {
    "id": "al.y2.mech.moments.q050",
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Moments",
    "subtopicId": "al.y2.mech.moments",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "written",
    "tags": [
      "tilting",
      "limiting-equilibrium",
      "reactions"
    ],
    "questionText": "A uniform beam of mass $8\\,\\text{kg}$ and length $12\\,\\text{m}$ rests on supports at each end. A load of $90\\,\\text{N}$ is placed at $11\\,\\text{m}$ from the left support. Taking $g = 9.8\\,\\text{m s}^{-2}$, determine whether the beam is on the point of tilting about the right support, and find the reaction at the left support.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Calculate the beam weight",
          "workingLatex": "W = 78.4\\,\\text{N}",
          "explanation": "The beam weighs $78.4\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find reactions assuming both supports act",
          "workingLatex": "R_B = 121.7\\,\\text{N}, \\quad R_A = 46.7\\,\\text{N}",
          "explanation": "Using the standard moment and equilibrium equations.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Check if $R_A > 0$",
          "workingLatex": "R_A = 46.7 > 0",
          "explanation": "Both supports carry load — no tilting.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "State the tilting condition",
          "workingLatex": "R_A = 0 \\Rightarrow \\text{tilting about right support}",
          "explanation": "When the left reaction becomes zero, the beam is about to tip over the right support.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Derive the limiting position formula",
          "workingLatex": "W_{\\text{extra}}(L - x) = W \\times \\dfrac{L}{2}",
          "explanation": "At the point of tilting about the right support, moments about that support give this relationship.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Interpret the result",
          "workingLatex": "R_A = 46.7\\,\\text{N}",
          "explanation": "The beam remains in equilibrium on both supports.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Explain physically",
          "workingLatex": "\\text{Moving the load right reduces } R_A",
          "explanation": "As the load moves toward the right support, less reaction is needed at the left.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State whether tilting occurs",
          "workingLatex": "\\text{No tilting}",
          "explanation": "Both supports remain in contact.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Give the left reaction",
          "workingLatex": "R_A = 46.7\\,\\text{N}",
          "explanation": "The reaction at the left support is $46.7\\,\\text{N}$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$R_A = 46.7\\,\\text{N}$. No — both supports remain in contact."
    }
  },
  {
    "id": "al.y2.mech.moments.q051",
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Moments",
    "subtopicId": "al.y2.mech.moments",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "numeric",
    "tags": [
      "tilting",
      "maximum-load",
      "limiting-equilibrium"
    ],
    "questionText": "A uniform beam of mass $4\\,\\text{kg}$ and length $6\\,\\text{m}$ rests on supports at each end. A load is placed at $4.5\\,\\text{m}$ from the left support. Taking $g = 9.8\\,\\text{m s}^{-2}$, find the maximum load that can be placed at this position before the beam is on the point of tilting about the right support.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the tilting condition",
          "workingLatex": "R_A = 0",
          "explanation": "The beam is on the point of tilting about the right support when the left reaction becomes zero.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Calculate the beam weight",
          "workingLatex": "W = 39.2\\,\\text{N}",
          "explanation": "The beam weighs $39.2\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Take moments about the right support at the point of tilting",
          "workingLatex": "W \\times \\dfrac{L}{2} = W_{\\text{extra}} \\times (L - x)",
          "explanation": "At the limit, the anticlockwise moment from the beam weight about the right support equals the clockwise moment from the load.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute the position",
          "workingLatex": "W \\times 3.0 = W_{\\text{extra}} \\times 1.5",
          "explanation": "Load at $x = 4.5\\,\\text{m}$, so distance from right support is $1.5\\,\\text{m}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Rearrange for maximum load",
          "workingLatex": "W_{\\text{extra}} = \\dfrac{W \\times L}{2(L - x)}",
          "explanation": "Solving for the load at the limiting case.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute numerical values",
          "workingLatex": "W_{\\text{extra}} = \\dfrac{39.2 \\times 6}{2 \\times 1.5}",
          "explanation": "Numerator: $235.2$, denominator: $3.0$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Evaluate",
          "workingLatex": "W_{\\text{extra}} = 78.4\\,\\text{N}",
          "explanation": "Maximum load is $78.4\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Interpret",
          "workingLatex": "\\text{Beyond } 78.4\\,\\text{N}, \\text{ the left end lifts off}",
          "explanation": "Any heavier load would cause the beam to tip about the right support.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Check with $R_A$ formula",
          "workingLatex": "\\text{At } W_{\\text{extra}} = 78.4\\,\\text{N}: R_A = 0",
          "explanation": "Confirming the left reaction is exactly zero at this load.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Note the effect of position",
          "workingLatex": "\\text{Closer to the right support } \\Rightarrow \\text{ smaller maximum load}",
          "explanation": "The nearer the load is to the right support, the less extra weight is needed to cause tilting.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Relate to moment arms",
          "workingLatex": "\\dfrac{\\text{beam moment}}{\\text{load arm}} = \\dfrac{117.6}{1.5}",
          "explanation": "The maximum load is the ratio of the beam's moment about the pivot to the load's moment arm.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "State the answer",
          "workingLatex": "W_{\\text{extra, max}} = 78.4\\,\\text{N}",
          "explanation": "The maximum load is $78.4\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Safety margin in practice",
          "workingLatex": "\\text{Real structures use safety factors below this limit}",
          "explanation": "Engineers design so the working load is well below the tilting load.",
          "diagram": null
        }
      ],
      "finalAnswer": "$W_{\\text{extra, max}} = 78.4\\,\\text{N}$"
    }
  },
  {
    "id": "al.y2.mech.moments.q052",
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Moments",
    "subtopicId": "al.y2.mech.moments",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "numeric",
    "tags": [
      "tilting",
      "maximum-load",
      "limiting-equilibrium"
    ],
    "questionText": "A uniform beam of mass $5\\,\\text{kg}$ and length $8\\,\\text{m}$ rests on supports at each end. A load is placed at $6.0\\,\\text{m}$ from the left support. Taking $g = 9.8\\,\\text{m s}^{-2}$, find the maximum load that can be placed at this position before the beam is on the point of tilting about the right support.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the tilting condition",
          "workingLatex": "R_A = 0",
          "explanation": "The beam is on the point of tilting about the right support when the left reaction becomes zero.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Calculate the beam weight",
          "workingLatex": "W = 49\\,\\text{N}",
          "explanation": "The beam weighs $49\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Take moments about the right support at the point of tilting",
          "workingLatex": "W \\times \\dfrac{L}{2} = W_{\\text{extra}} \\times (L - x)",
          "explanation": "At the limit, the anticlockwise moment from the beam weight about the right support equals the clockwise moment from the load.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute the position",
          "workingLatex": "W \\times 4.0 = W_{\\text{extra}} \\times 2.0",
          "explanation": "Load at $x = 6.0\\,\\text{m}$, so distance from right support is $2.0\\,\\text{m}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Rearrange for maximum load",
          "workingLatex": "W_{\\text{extra}} = \\dfrac{W \\times L}{2(L - x)}",
          "explanation": "Solving for the load at the limiting case.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute numerical values",
          "workingLatex": "W_{\\text{extra}} = \\dfrac{49 \\times 8}{2 \\times 2.0}",
          "explanation": "Numerator: $392$, denominator: $4.0$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Evaluate",
          "workingLatex": "W_{\\text{extra}} = 98\\,\\text{N}",
          "explanation": "Maximum load is $98\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Interpret",
          "workingLatex": "\\text{Beyond } 98\\,\\text{N}, \\text{ the left end lifts off}",
          "explanation": "Any heavier load would cause the beam to tip about the right support.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Check with $R_A$ formula",
          "workingLatex": "\\text{At } W_{\\text{extra}} = 98\\,\\text{N}: R_A = 0",
          "explanation": "Confirming the left reaction is exactly zero at this load.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Note the effect of position",
          "workingLatex": "\\text{Closer to the right support } \\Rightarrow \\text{ smaller maximum load}",
          "explanation": "The nearer the load is to the right support, the less extra weight is needed to cause tilting.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Relate to moment arms",
          "workingLatex": "\\dfrac{\\text{beam moment}}{\\text{load arm}} = \\dfrac{196}{2.0}",
          "explanation": "The maximum load is the ratio of the beam's moment about the pivot to the load's moment arm.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "State the answer",
          "workingLatex": "W_{\\text{extra, max}} = 98\\,\\text{N}",
          "explanation": "The maximum load is $98\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Safety margin in practice",
          "workingLatex": "\\text{Real structures use safety factors below this limit}",
          "explanation": "Engineers design so the working load is well below the tilting load.",
          "diagram": null
        }
      ],
      "finalAnswer": "$W_{\\text{extra, max}} = 98\\,\\text{N}$"
    }
  },
  {
    "id": "al.y2.mech.moments.q053",
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Moments",
    "subtopicId": "al.y2.mech.moments",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "numeric",
    "tags": [
      "tilting",
      "maximum-load",
      "limiting-equilibrium"
    ],
    "questionText": "A uniform beam of mass $3\\,\\text{kg}$ and length $5\\,\\text{m}$ rests on supports at each end. A load is placed at $3.75\\,\\text{m}$ from the left support. Taking $g = 9.8\\,\\text{m s}^{-2}$, find the maximum load that can be placed at this position before the beam is on the point of tilting about the right support.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the tilting condition",
          "workingLatex": "R_A = 0",
          "explanation": "The beam is on the point of tilting about the right support when the left reaction becomes zero.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Calculate the beam weight",
          "workingLatex": "W = 29.4\\,\\text{N}",
          "explanation": "The beam weighs $29.4\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Take moments about the right support at the point of tilting",
          "workingLatex": "W \\times \\dfrac{L}{2} = W_{\\text{extra}} \\times (L - x)",
          "explanation": "At the limit, the anticlockwise moment from the beam weight about the right support equals the clockwise moment from the load.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute the position",
          "workingLatex": "W \\times 2.5 = W_{\\text{extra}} \\times 1.25",
          "explanation": "Load at $x = 3.75\\,\\text{m}$, so distance from right support is $1.25\\,\\text{m}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Rearrange for maximum load",
          "workingLatex": "W_{\\text{extra}} = \\dfrac{W \\times L}{2(L - x)}",
          "explanation": "Solving for the load at the limiting case.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute numerical values",
          "workingLatex": "W_{\\text{extra}} = \\dfrac{29.4 \\times 5}{2 \\times 1.25}",
          "explanation": "Numerator: $147$, denominator: $2.5$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Evaluate",
          "workingLatex": "W_{\\text{extra}} = 58.8\\,\\text{N}",
          "explanation": "Maximum load is $58.8\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Interpret",
          "workingLatex": "\\text{Beyond } 58.8\\,\\text{N}, \\text{ the left end lifts off}",
          "explanation": "Any heavier load would cause the beam to tip about the right support.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Check with $R_A$ formula",
          "workingLatex": "\\text{At } W_{\\text{extra}} = 58.8\\,\\text{N}: R_A = 0",
          "explanation": "Confirming the left reaction is exactly zero at this load.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Note the effect of position",
          "workingLatex": "\\text{Closer to the right support } \\Rightarrow \\text{ smaller maximum load}",
          "explanation": "The nearer the load is to the right support, the less extra weight is needed to cause tilting.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Relate to moment arms",
          "workingLatex": "\\dfrac{\\text{beam moment}}{\\text{load arm}} = \\dfrac{73.5}{1.25}",
          "explanation": "The maximum load is the ratio of the beam's moment about the pivot to the load's moment arm.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "State the answer",
          "workingLatex": "W_{\\text{extra, max}} = 58.8\\,\\text{N}",
          "explanation": "The maximum load is $58.8\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Safety margin in practice",
          "workingLatex": "\\text{Real structures use safety factors below this limit}",
          "explanation": "Engineers design so the working load is well below the tilting load.",
          "diagram": null
        }
      ],
      "finalAnswer": "$W_{\\text{extra, max}} = 58.8\\,\\text{N}$"
    }
  },
  {
    "id": "al.y2.mech.moments.q054",
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Moments",
    "subtopicId": "al.y2.mech.moments",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "numeric",
    "tags": [
      "tilting",
      "maximum-load",
      "limiting-equilibrium"
    ],
    "questionText": "A uniform beam of mass $6\\,\\text{kg}$ and length $10\\,\\text{m}$ rests on supports at each end. A load is placed at $7.5\\,\\text{m}$ from the left support. Taking $g = 9.8\\,\\text{m s}^{-2}$, find the maximum load that can be placed at this position before the beam is on the point of tilting about the right support.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the tilting condition",
          "workingLatex": "R_A = 0",
          "explanation": "The beam is on the point of tilting about the right support when the left reaction becomes zero.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Calculate the beam weight",
          "workingLatex": "W = 58.8\\,\\text{N}",
          "explanation": "The beam weighs $58.8\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Take moments about the right support at the point of tilting",
          "workingLatex": "W \\times \\dfrac{L}{2} = W_{\\text{extra}} \\times (L - x)",
          "explanation": "At the limit, the anticlockwise moment from the beam weight about the right support equals the clockwise moment from the load.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute the position",
          "workingLatex": "W \\times 5.0 = W_{\\text{extra}} \\times 2.5",
          "explanation": "Load at $x = 7.5\\,\\text{m}$, so distance from right support is $2.5\\,\\text{m}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Rearrange for maximum load",
          "workingLatex": "W_{\\text{extra}} = \\dfrac{W \\times L}{2(L - x)}",
          "explanation": "Solving for the load at the limiting case.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute numerical values",
          "workingLatex": "W_{\\text{extra}} = \\dfrac{58.8 \\times 10}{2 \\times 2.5}",
          "explanation": "Numerator: $588$, denominator: $5.0$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Evaluate",
          "workingLatex": "W_{\\text{extra}} = 117.6\\,\\text{N}",
          "explanation": "Maximum load is $117.6\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Interpret",
          "workingLatex": "\\text{Beyond } 117.6\\,\\text{N}, \\text{ the left end lifts off}",
          "explanation": "Any heavier load would cause the beam to tip about the right support.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Check with $R_A$ formula",
          "workingLatex": "\\text{At } W_{\\text{extra}} = 117.6\\,\\text{N}: R_A = 0",
          "explanation": "Confirming the left reaction is exactly zero at this load.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Note the effect of position",
          "workingLatex": "\\text{Closer to the right support } \\Rightarrow \\text{ smaller maximum load}",
          "explanation": "The nearer the load is to the right support, the less extra weight is needed to cause tilting.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Relate to moment arms",
          "workingLatex": "\\dfrac{\\text{beam moment}}{\\text{load arm}} = \\dfrac{294}{2.5}",
          "explanation": "The maximum load is the ratio of the beam's moment about the pivot to the load's moment arm.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "State the answer",
          "workingLatex": "W_{\\text{extra, max}} = 117.6\\,\\text{N}",
          "explanation": "The maximum load is $117.6\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Safety margin in practice",
          "workingLatex": "\\text{Real structures use safety factors below this limit}",
          "explanation": "Engineers design so the working load is well below the tilting load.",
          "diagram": null
        }
      ],
      "finalAnswer": "$W_{\\text{extra, max}} = 117.6\\,\\text{N}$"
    }
  },
  {
    "id": "al.y2.mech.moments.q055",
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Moments",
    "subtopicId": "al.y2.mech.moments",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "numeric",
    "tags": [
      "tilting",
      "maximum-load",
      "limiting-equilibrium"
    ],
    "questionText": "A uniform beam of mass $2\\,\\text{kg}$ and length $4\\,\\text{m}$ rests on supports at each end. A load is placed at $3.0\\,\\text{m}$ from the left support. Taking $g = 9.8\\,\\text{m s}^{-2}$, find the maximum load that can be placed at this position before the beam is on the point of tilting about the right support.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the tilting condition",
          "workingLatex": "R_A = 0",
          "explanation": "The beam is on the point of tilting about the right support when the left reaction becomes zero.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Calculate the beam weight",
          "workingLatex": "W = 19.6\\,\\text{N}",
          "explanation": "The beam weighs $19.6\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Take moments about the right support at the point of tilting",
          "workingLatex": "W \\times \\dfrac{L}{2} = W_{\\text{extra}} \\times (L - x)",
          "explanation": "At the limit, the anticlockwise moment from the beam weight about the right support equals the clockwise moment from the load.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute the position",
          "workingLatex": "W \\times 2.0 = W_{\\text{extra}} \\times 1.0",
          "explanation": "Load at $x = 3.0\\,\\text{m}$, so distance from right support is $1.0\\,\\text{m}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Rearrange for maximum load",
          "workingLatex": "W_{\\text{extra}} = \\dfrac{W \\times L}{2(L - x)}",
          "explanation": "Solving for the load at the limiting case.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute numerical values",
          "workingLatex": "W_{\\text{extra}} = \\dfrac{19.6 \\times 4}{2 \\times 1.0}",
          "explanation": "Numerator: $78.4$, denominator: $2.0$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Evaluate",
          "workingLatex": "W_{\\text{extra}} = 39.2\\,\\text{N}",
          "explanation": "Maximum load is $39.2\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Interpret",
          "workingLatex": "\\text{Beyond } 39.2\\,\\text{N}, \\text{ the left end lifts off}",
          "explanation": "Any heavier load would cause the beam to tip about the right support.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Check with $R_A$ formula",
          "workingLatex": "\\text{At } W_{\\text{extra}} = 39.2\\,\\text{N}: R_A = 0",
          "explanation": "Confirming the left reaction is exactly zero at this load.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Note the effect of position",
          "workingLatex": "\\text{Closer to the right support } \\Rightarrow \\text{ smaller maximum load}",
          "explanation": "The nearer the load is to the right support, the less extra weight is needed to cause tilting.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Relate to moment arms",
          "workingLatex": "\\dfrac{\\text{beam moment}}{\\text{load arm}} = \\dfrac{39.2}{1.0}",
          "explanation": "The maximum load is the ratio of the beam's moment about the pivot to the load's moment arm.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "State the answer",
          "workingLatex": "W_{\\text{extra, max}} = 39.2\\,\\text{N}",
          "explanation": "The maximum load is $39.2\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Safety margin in practice",
          "workingLatex": "\\text{Real structures use safety factors below this limit}",
          "explanation": "Engineers design so the working load is well below the tilting load.",
          "diagram": null
        }
      ],
      "finalAnswer": "$W_{\\text{extra, max}} = 39.2\\,\\text{N}$"
    }
  },
  {
    "id": "al.y2.mech.moments.q056",
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Moments",
    "subtopicId": "al.y2.mech.moments",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "numeric",
    "tags": [
      "tilting",
      "maximum-load",
      "limiting-equilibrium"
    ],
    "questionText": "A uniform beam of mass $8\\,\\text{kg}$ and length $12\\,\\text{m}$ rests on supports at each end. A load is placed at $9.0\\,\\text{m}$ from the left support. Taking $g = 9.8\\,\\text{m s}^{-2}$, find the maximum load that can be placed at this position before the beam is on the point of tilting about the right support.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the tilting condition",
          "workingLatex": "R_A = 0",
          "explanation": "The beam is on the point of tilting about the right support when the left reaction becomes zero.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Calculate the beam weight",
          "workingLatex": "W = 78.4\\,\\text{N}",
          "explanation": "The beam weighs $78.4\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Take moments about the right support at the point of tilting",
          "workingLatex": "W \\times \\dfrac{L}{2} = W_{\\text{extra}} \\times (L - x)",
          "explanation": "At the limit, the anticlockwise moment from the beam weight about the right support equals the clockwise moment from the load.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute the position",
          "workingLatex": "W \\times 6.0 = W_{\\text{extra}} \\times 3.0",
          "explanation": "Load at $x = 9.0\\,\\text{m}$, so distance from right support is $3.0\\,\\text{m}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Rearrange for maximum load",
          "workingLatex": "W_{\\text{extra}} = \\dfrac{W \\times L}{2(L - x)}",
          "explanation": "Solving for the load at the limiting case.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute numerical values",
          "workingLatex": "W_{\\text{extra}} = \\dfrac{78.4 \\times 12}{2 \\times 3.0}",
          "explanation": "Numerator: $940.8$, denominator: $6.0$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Evaluate",
          "workingLatex": "W_{\\text{extra}} = 156.8\\,\\text{N}",
          "explanation": "Maximum load is $156.8\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Interpret",
          "workingLatex": "\\text{Beyond } 156.8\\,\\text{N}, \\text{ the left end lifts off}",
          "explanation": "Any heavier load would cause the beam to tip about the right support.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Check with $R_A$ formula",
          "workingLatex": "\\text{At } W_{\\text{extra}} = 156.8\\,\\text{N}: R_A = 0",
          "explanation": "Confirming the left reaction is exactly zero at this load.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Note the effect of position",
          "workingLatex": "\\text{Closer to the right support } \\Rightarrow \\text{ smaller maximum load}",
          "explanation": "The nearer the load is to the right support, the less extra weight is needed to cause tilting.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Relate to moment arms",
          "workingLatex": "\\dfrac{\\text{beam moment}}{\\text{load arm}} = \\dfrac{470.4}{3.0}",
          "explanation": "The maximum load is the ratio of the beam's moment about the pivot to the load's moment arm.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "State the answer",
          "workingLatex": "W_{\\text{extra, max}} = 156.8\\,\\text{N}",
          "explanation": "The maximum load is $156.8\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Safety margin in practice",
          "workingLatex": "\\text{Real structures use safety factors below this limit}",
          "explanation": "Engineers design so the working load is well below the tilting load.",
          "diagram": null
        }
      ],
      "finalAnswer": "$W_{\\text{extra, max}} = 156.8\\,\\text{N}$"
    }
  },
  {
    "id": "al.y2.mech.moments.q057",
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Moments",
    "subtopicId": "al.y2.mech.moments",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "numeric",
    "tags": [
      "pivot",
      "equilibrium",
      "uniform-rod"
    ],
    "questionText": "A uniform rod of mass $3\\,\\text{kg}$ and length $4\\,\\text{m}$ is pivoted at $3\\,\\text{m}$ from its left end. A vertical force is applied at the right end to keep the rod horizontal. Taking $g = 9.8\\,\\text{m s}^{-2}$, find the magnitude of this force.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Draw the rod and label forces",
          "workingLatex": "W = 29.4\\,\\text{N} \\text{ at centre}, \\quad F \\text{ at end}",
          "explanation": "The weight acts at the centre; the unknown force acts at the free end.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Take moments about the pivot",
          "workingLatex": "\\sum M_{\\text{pivot}} = 0",
          "explanation": "Choosing the pivot eliminates the reaction at the hinge.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Moment of weight about pivot",
          "workingLatex": "W \\times 1",
          "explanation": "The centre of mass is $1\\,\\text{m}$ from the pivot.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Moment of applied force about pivot",
          "workingLatex": "F \\times 1",
          "explanation": "The force acts $1\\,\\text{m}$ from the pivot.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Equate moments",
          "workingLatex": "F \\times 1 = 29.4 \\times 1",
          "explanation": "Clockwise and anticlockwise moments balance.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Solve for $F$",
          "workingLatex": "F = 29.4\\,\\text{N}",
          "explanation": "$F = 29.4\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check direction",
          "workingLatex": "\\text{Force supports the heavier side of the pivot}",
          "explanation": "The applied force must act on the side where the weight creates a greater turning effect.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Verify with vertical equilibrium",
          "workingLatex": "R_{\\text{pivot}} + F = 29.4",
          "explanation": "The pivot reaction plus the applied force balance the weight.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Interpret",
          "workingLatex": "F = 29.4\\,\\text{N}",
          "explanation": "A force of $29.4\\,\\text{N}$ at the end keeps the rod level.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Note the lever principle",
          "workingLatex": "\\text{Longer force arm } \\Rightarrow \\text{ smaller required force}",
          "explanation": "The further the pivot is from the centre, the larger the force needed.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Compare to pivot at centre",
          "workingLatex": "\\text{If pivot at centre, } F = 0",
          "explanation": "With the pivot at the centre of mass, no extra force is needed to maintain horizontal equilibrium.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "State the answer",
          "workingLatex": "F = 29.4\\,\\text{N}",
          "explanation": "The required force is $29.4\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Units check",
          "workingLatex": "\\text{N}",
          "explanation": "The answer is a force in newtons.",
          "diagram": null
        }
      ],
      "finalAnswer": "$F = 29.4\\,\\text{N}$"
    }
  },
  {
    "id": "al.y2.mech.moments.q058",
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Moments",
    "subtopicId": "al.y2.mech.moments",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "numeric",
    "tags": [
      "pivot",
      "equilibrium",
      "uniform-rod"
    ],
    "questionText": "A uniform rod of mass $5\\,\\text{kg}$ and length $6\\,\\text{m}$ is pivoted at $4.5\\,\\text{m}$ from its left end. A vertical force is applied at the right end to keep the rod horizontal. Taking $g = 9.8\\,\\text{m s}^{-2}$, find the magnitude of this force.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Draw the rod and label forces",
          "workingLatex": "W = 49\\,\\text{N} \\text{ at centre}, \\quad F \\text{ at end}",
          "explanation": "The weight acts at the centre; the unknown force acts at the free end.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Take moments about the pivot",
          "workingLatex": "\\sum M_{\\text{pivot}} = 0",
          "explanation": "Choosing the pivot eliminates the reaction at the hinge.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Moment of weight about pivot",
          "workingLatex": "W \\times 1.5",
          "explanation": "The centre of mass is $1.5\\,\\text{m}$ from the pivot.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Moment of applied force about pivot",
          "workingLatex": "F \\times 1.5",
          "explanation": "The force acts $1.5\\,\\text{m}$ from the pivot.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Equate moments",
          "workingLatex": "F \\times 1.5 = 49 \\times 1.5",
          "explanation": "Clockwise and anticlockwise moments balance.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Solve for $F$",
          "workingLatex": "F = 49\\,\\text{N}",
          "explanation": "$F = 49\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check direction",
          "workingLatex": "\\text{Force supports the heavier side of the pivot}",
          "explanation": "The applied force must act on the side where the weight creates a greater turning effect.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Verify with vertical equilibrium",
          "workingLatex": "R_{\\text{pivot}} + F = 49",
          "explanation": "The pivot reaction plus the applied force balance the weight.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Interpret",
          "workingLatex": "F = 49\\,\\text{N}",
          "explanation": "A force of $49\\,\\text{N}$ at the end keeps the rod level.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Note the lever principle",
          "workingLatex": "\\text{Longer force arm } \\Rightarrow \\text{ smaller required force}",
          "explanation": "The further the pivot is from the centre, the larger the force needed.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Compare to pivot at centre",
          "workingLatex": "\\text{If pivot at centre, } F = 0",
          "explanation": "With the pivot at the centre of mass, no extra force is needed to maintain horizontal equilibrium.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "State the answer",
          "workingLatex": "F = 49\\,\\text{N}",
          "explanation": "The required force is $49\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Units check",
          "workingLatex": "\\text{N}",
          "explanation": "The answer is a force in newtons.",
          "diagram": null
        }
      ],
      "finalAnswer": "$F = 49\\,\\text{N}$"
    }
  },
  {
    "id": "al.y2.mech.moments.q059",
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Moments",
    "subtopicId": "al.y2.mech.moments",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "numeric",
    "tags": [
      "pivot",
      "equilibrium",
      "uniform-rod"
    ],
    "questionText": "A uniform rod of mass $4\\,\\text{kg}$ and length $5\\,\\text{m}$ is pivoted at $1.5\\,\\text{m}$ from its left end. A vertical force is applied at the right end to keep the rod horizontal. Taking $g = 9.8\\,\\text{m s}^{-2}$, find the magnitude of this force.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Draw the rod and label forces",
          "workingLatex": "W = 39.2\\,\\text{N} \\text{ at centre}, \\quad F \\text{ at end}",
          "explanation": "The weight acts at the centre; the unknown force acts at the free end.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Take moments about the pivot",
          "workingLatex": "\\sum M_{\\text{pivot}} = 0",
          "explanation": "Choosing the pivot eliminates the reaction at the hinge.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Moment of weight about pivot",
          "workingLatex": "W \\times 1",
          "explanation": "The centre of mass is $1\\,\\text{m}$ from the pivot.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Moment of applied force about pivot",
          "workingLatex": "F \\times 1.5",
          "explanation": "The force acts $1.5\\,\\text{m}$ from the pivot.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Equate moments",
          "workingLatex": "F \\times 1.5 = 39.2 \\times 1",
          "explanation": "Clockwise and anticlockwise moments balance.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Solve for $F$",
          "workingLatex": "F = 26.1\\,\\text{N}",
          "explanation": "$F = 26.1\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check direction",
          "workingLatex": "\\text{Force supports the heavier side of the pivot}",
          "explanation": "The applied force must act on the side where the weight creates a greater turning effect.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Verify with vertical equilibrium",
          "workingLatex": "R_{\\text{pivot}} + F = 39.2",
          "explanation": "The pivot reaction plus the applied force balance the weight.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Interpret",
          "workingLatex": "F = 26.1\\,\\text{N}",
          "explanation": "A force of $26.1\\,\\text{N}$ at the end keeps the rod level.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Note the lever principle",
          "workingLatex": "\\text{Longer force arm } \\Rightarrow \\text{ smaller required force}",
          "explanation": "The further the pivot is from the centre, the larger the force needed.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Compare to pivot at centre",
          "workingLatex": "\\text{If pivot at centre, } F = 0",
          "explanation": "With the pivot at the centre of mass, no extra force is needed to maintain horizontal equilibrium.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "State the answer",
          "workingLatex": "F = 26.1\\,\\text{N}",
          "explanation": "The required force is $26.1\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Units check",
          "workingLatex": "\\text{N}",
          "explanation": "The answer is a force in newtons.",
          "diagram": null
        }
      ],
      "finalAnswer": "$F = 26.1\\,\\text{N}$"
    }
  },
  {
    "id": "al.y2.mech.moments.q060",
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Moments",
    "subtopicId": "al.y2.mech.moments",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "numeric",
    "tags": [
      "pivot",
      "equilibrium",
      "uniform-rod"
    ],
    "questionText": "A uniform rod of mass $6\\,\\text{kg}$ and length $8\\,\\text{m}$ is pivoted at $6\\,\\text{m}$ from its left end. A vertical force is applied at the right end to keep the rod horizontal. Taking $g = 9.8\\,\\text{m s}^{-2}$, find the magnitude of this force.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Draw the rod and label forces",
          "workingLatex": "W = 58.8\\,\\text{N} \\text{ at centre}, \\quad F \\text{ at end}",
          "explanation": "The weight acts at the centre; the unknown force acts at the free end.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Take moments about the pivot",
          "workingLatex": "\\sum M_{\\text{pivot}} = 0",
          "explanation": "Choosing the pivot eliminates the reaction at the hinge.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Moment of weight about pivot",
          "workingLatex": "W \\times 2",
          "explanation": "The centre of mass is $2\\,\\text{m}$ from the pivot.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Moment of applied force about pivot",
          "workingLatex": "F \\times 2",
          "explanation": "The force acts $2\\,\\text{m}$ from the pivot.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Equate moments",
          "workingLatex": "F \\times 2 = 58.8 \\times 2",
          "explanation": "Clockwise and anticlockwise moments balance.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Solve for $F$",
          "workingLatex": "F = 58.8\\,\\text{N}",
          "explanation": "$F = 58.8\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check direction",
          "workingLatex": "\\text{Force supports the heavier side of the pivot}",
          "explanation": "The applied force must act on the side where the weight creates a greater turning effect.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Verify with vertical equilibrium",
          "workingLatex": "R_{\\text{pivot}} + F = 58.8",
          "explanation": "The pivot reaction plus the applied force balance the weight.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Interpret",
          "workingLatex": "F = 58.8\\,\\text{N}",
          "explanation": "A force of $58.8\\,\\text{N}$ at the end keeps the rod level.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Note the lever principle",
          "workingLatex": "\\text{Longer force arm } \\Rightarrow \\text{ smaller required force}",
          "explanation": "The further the pivot is from the centre, the larger the force needed.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Compare to pivot at centre",
          "workingLatex": "\\text{If pivot at centre, } F = 0",
          "explanation": "With the pivot at the centre of mass, no extra force is needed to maintain horizontal equilibrium.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "State the answer",
          "workingLatex": "F = 58.8\\,\\text{N}",
          "explanation": "The required force is $58.8\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Units check",
          "workingLatex": "\\text{N}",
          "explanation": "The answer is a force in newtons.",
          "diagram": null
        }
      ],
      "finalAnswer": "$F = 58.8\\,\\text{N}$"
    }
  },
  {
    "id": "al.y2.mech.moments.q061",
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Moments",
    "subtopicId": "al.y2.mech.moments",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "written",
    "tags": [
      "centre-of-mass",
      "composite",
      "T-shape"
    ],
    "questionText": "A uniform T-shaped lamina is formed from a horizontal bar $6\\,\\text{m} \\times 1\\,\\text{m}$ with a vertical bar $1\\,\\text{m} \\times 4\\,\\text{m}$ centred on top. Taking the bottom-left corner of the horizontal bar as the origin, find the coordinates of the centre of mass.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Split into two rectangles",
          "workingLatex": "A_h = 6\\,\\text{m}^2, \\quad A_v = 4\\,\\text{m}^2",
          "explanation": "Horizontal bar area $6 \\times 1$, vertical bar area $1 \\times 4$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "CoM of horizontal bar",
          "workingLatex": "(3,\\ 0.5)",
          "explanation": "Centre of the bottom bar: $x = 3$, $y = 0.5$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "CoM of vertical bar",
          "workingLatex": "(3,\\ 3)",
          "explanation": "Vertical bar centred at $x = 3$, spans $y = 1$ to $y = 5$, centre at $y = 3$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Total area",
          "workingLatex": "A = 10\\,\\text{m}^2",
          "explanation": "Combined area is $6 + 4 = 10\\,\\text{m}^2$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Calculate $\\bar{x}$",
          "workingLatex": "\\bar{x} = \\dfrac{6 \\times 3 + 4 \\times 3}{10} = 3\\,\\text{m}",
          "explanation": "By symmetry, $\\bar{x} = 3\\,\\text{m}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Calculate $\\bar{y}$",
          "workingLatex": "\\bar{y} = \\dfrac{6 \\times 0.5 + 4 \\times 3}{10} = \\dfrac{3 + 12}{10} = 1.5\\,\\text{m}",
          "explanation": "Area-weighted average of the $y$-coordinates.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the CoM",
          "workingLatex": "(3,\\ 1.5)",
          "explanation": "The centre of mass is at $(3, 1.5)$ from the origin.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Explain why $\\bar{y}$ is below the junction",
          "workingLatex": "\\bar{y} = 1.5 < 2.5",
          "explanation": "More area is in the lower horizontal bar, pulling the CoM down.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Application to hanging",
          "workingLatex": "\\text{Suspending at CoM keeps the T-shape level}",
          "explanation": "The lamina balances horizontally when supported at its centre of mass.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Check symmetry",
          "workingLatex": "\\bar{x} = 3 = \\dfrac{6}{2}",
          "explanation": "The CoM lies on the vertical axis of symmetry.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Verify total moment about origin",
          "workingLatex": "\\text{Consistent with area-weighted formula}",
          "explanation": "The formula gives a unique balance point.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "State final coordinates",
          "workingLatex": "\\text{CoM at } (3,\\ 1.5)\\,\\text{m}",
          "explanation": "Centre of mass at $(3, 1.5)\\,\\text{m}$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Note for stability",
          "workingLatex": "\\text{CoM directly below suspension point } \\Rightarrow \\text{ stable}",
          "explanation": "When hung from the CoM, the lamina rests in neutral equilibrium.",
          "diagram": null
        }
      ],
      "finalAnswer": "Centre of mass at $(3, 1.5)\\,\\text{m}$."
    }
  },
  {
    "id": "al.y2.mech.moments.q062",
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Moments",
    "subtopicId": "al.y2.mech.moments",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "written",
    "tags": [
      "principle-of-moments",
      "multiple-loads",
      "reactions"
    ],
    "questionText": "A uniform beam of mass $6\\,\\text{kg}$ and length $8\\,\\text{m}$ rests on supports at each end. Loads of $40\\,\\text{N}$ and $60\\,\\text{N}$ act at $2\\,\\text{m}$ and $6\\,\\text{m}$ respectively from the left support. Taking $g = 9.8\\,\\text{m s}^{-2}$, find the reactions at both supports and state whether the beam is in equilibrium.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Calculate the beam weight",
          "workingLatex": "W_{\\text{beam}} = 58.8\\,\\text{N}",
          "explanation": "The uniform beam contributes $58.8\\,\\text{N}$ at its centre.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "List all downward forces",
          "workingLatex": "W_{\\text{beam}} = 58.8\\,\\text{N}, \\quad W_1 = 40\\,\\text{N}, \\quad W_2 = 60\\,\\text{N}",
          "explanation": "Total downward load: $158.8\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Take moments about the left support",
          "workingLatex": "\\sum M_A = 0",
          "explanation": "Eliminates $R_A$ from the moment equation.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write the full moment equation",
          "workingLatex": "R_B \\times 8 = 58.8 \\times 4.0 + 40 \\times 2 + 60 \\times 6",
          "explanation": "Each downward force contributes an anticlockwise moment about $A$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate the right-hand side",
          "workingLatex": "= 675.2\\,\\text{N m}",
          "explanation": "Total anticlockwise moment: $675.2\\,\\text{N m}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Solve for $R_B$",
          "workingLatex": "R_B = 84.4\\,\\text{N}",
          "explanation": "$R_B = 84.4\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Use vertical equilibrium",
          "workingLatex": "R_A = 158.8 - 84.4 = 74.4\\,\\text{N}",
          "explanation": "$R_A = 74.4\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check both reactions are positive",
          "workingLatex": "R_A = 74.4 > 0, \\quad R_B = 84.4 > 0",
          "explanation": "Positive reactions mean both supports remain in contact — the beam is in equilibrium.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Verify moments about right support",
          "workingLatex": "R_A \\times 8 = 595.2\\,\\text{N m}",
          "explanation": "Cross-checking about the right support confirms the reactions.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Identify which support carries more",
          "workingLatex": "R_{\\max} = 84.4\\,\\text{N}",
          "explanation": "The support nearer the heavier loading region bears the greater reaction.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Comment on load distribution",
          "workingLatex": "\\text{Multiple loads add their moments separately}",
          "explanation": "The principle of superposition applies: each load's moment can be calculated independently.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "State equilibrium conclusion",
          "workingLatex": "\\text{Beam is in equilibrium on both supports}",
          "explanation": "Both reactions are positive, so the beam does not tilt.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Final answers",
          "workingLatex": "R_A = 74.4\\,\\text{N}, \\quad R_B = 84.4\\,\\text{N}",
          "explanation": "Reactions: $R_A = 74.4\\,\\text{N}$, $R_B = 84.4\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Summarise the method",
          "workingLatex": "\\text{Moments about one support } + \\text{ vertical equilibrium } \\Rightarrow \\text{ both reactions}",
          "explanation": "This two-equation approach solves any statically determinate beam problem.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "Check total reaction",
          "workingLatex": "R_A + R_B = 158.8 = 158.8\\,\\text{N}",
          "explanation": "The reactions sum to the total load, confirming consistency.",
          "diagram": null
        }
      ],
      "finalAnswer": "$R_A = 74.4\\,\\text{N}$, $R_B = 84.4\\,\\text{N}$; the beam is in equilibrium."
    }
  },
  {
    "id": "al.y2.mech.moments.q063",
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Moments",
    "subtopicId": "al.y2.mech.moments",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "written",
    "tags": [
      "principle-of-moments",
      "multiple-loads",
      "reactions"
    ],
    "questionText": "A uniform beam of mass $8\\,\\text{kg}$ and length $10\\,\\text{m}$ rests on supports at each end. Loads of $50\\,\\text{N}$ and $80\\,\\text{N}$ act at $3\\,\\text{m}$ and $8\\,\\text{m}$ respectively from the left support. Taking $g = 9.8\\,\\text{m s}^{-2}$, find the reactions at both supports and state whether the beam is in equilibrium.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Calculate the beam weight",
          "workingLatex": "W_{\\text{beam}} = 78.4\\,\\text{N}",
          "explanation": "The uniform beam contributes $78.4\\,\\text{N}$ at its centre.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "List all downward forces",
          "workingLatex": "W_{\\text{beam}} = 78.4\\,\\text{N}, \\quad W_1 = 50\\,\\text{N}, \\quad W_2 = 80\\,\\text{N}",
          "explanation": "Total downward load: $208.4\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Take moments about the left support",
          "workingLatex": "\\sum M_A = 0",
          "explanation": "Eliminates $R_A$ from the moment equation.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write the full moment equation",
          "workingLatex": "R_B \\times 10 = 78.4 \\times 5.0 + 50 \\times 3 + 80 \\times 8",
          "explanation": "Each downward force contributes an anticlockwise moment about $A$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate the right-hand side",
          "workingLatex": "= 1182\\,\\text{N m}",
          "explanation": "Total anticlockwise moment: $1182\\,\\text{N m}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Solve for $R_B$",
          "workingLatex": "R_B = 118.2\\,\\text{N}",
          "explanation": "$R_B = 118.2\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Use vertical equilibrium",
          "workingLatex": "R_A = 208.4 - 118.2 = 90.2\\,\\text{N}",
          "explanation": "$R_A = 90.2\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check both reactions are positive",
          "workingLatex": "R_A = 90.2 > 0, \\quad R_B = 118.2 > 0",
          "explanation": "Positive reactions mean both supports remain in contact — the beam is in equilibrium.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Verify moments about right support",
          "workingLatex": "R_A \\times 10 = 902\\,\\text{N m}",
          "explanation": "Cross-checking about the right support confirms the reactions.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Identify which support carries more",
          "workingLatex": "R_{\\max} = 118.2\\,\\text{N}",
          "explanation": "The support nearer the heavier loading region bears the greater reaction.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Comment on load distribution",
          "workingLatex": "\\text{Multiple loads add their moments separately}",
          "explanation": "The principle of superposition applies: each load's moment can be calculated independently.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "State equilibrium conclusion",
          "workingLatex": "\\text{Beam is in equilibrium on both supports}",
          "explanation": "Both reactions are positive, so the beam does not tilt.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Final answers",
          "workingLatex": "R_A = 90.2\\,\\text{N}, \\quad R_B = 118.2\\,\\text{N}",
          "explanation": "Reactions: $R_A = 90.2\\,\\text{N}$, $R_B = 118.2\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Summarise the method",
          "workingLatex": "\\text{Moments about one support } + \\text{ vertical equilibrium } \\Rightarrow \\text{ both reactions}",
          "explanation": "This two-equation approach solves any statically determinate beam problem.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "Check total reaction",
          "workingLatex": "R_A + R_B = 208.4 = 208.4\\,\\text{N}",
          "explanation": "The reactions sum to the total load, confirming consistency.",
          "diagram": null
        }
      ],
      "finalAnswer": "$R_A = 90.2\\,\\text{N}$, $R_B = 118.2\\,\\text{N}$; the beam is in equilibrium."
    }
  },
  {
    "id": "al.y2.mech.moments.q064",
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Moments",
    "subtopicId": "al.y2.mech.moments",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "written",
    "tags": [
      "principle-of-moments",
      "multiple-loads",
      "reactions"
    ],
    "questionText": "A uniform beam of mass $4\\,\\text{kg}$ and length $6\\,\\text{m}$ rests on supports at each end. Loads of $30\\,\\text{N}$ and $45\\,\\text{N}$ act at $1.5\\,\\text{m}$ and $4.5\\,\\text{m}$ respectively from the left support. Taking $g = 9.8\\,\\text{m s}^{-2}$, find the reactions at both supports and state whether the beam is in equilibrium.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Calculate the beam weight",
          "workingLatex": "W_{\\text{beam}} = 39.2\\,\\text{N}",
          "explanation": "The uniform beam contributes $39.2\\,\\text{N}$ at its centre.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "List all downward forces",
          "workingLatex": "W_{\\text{beam}} = 39.2\\,\\text{N}, \\quad W_1 = 30\\,\\text{N}, \\quad W_2 = 45\\,\\text{N}",
          "explanation": "Total downward load: $114.2\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Take moments about the left support",
          "workingLatex": "\\sum M_A = 0",
          "explanation": "Eliminates $R_A$ from the moment equation.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write the full moment equation",
          "workingLatex": "R_B \\times 6 = 39.2 \\times 3.0 + 30 \\times 1.5 + 45 \\times 4.5",
          "explanation": "Each downward force contributes an anticlockwise moment about $A$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate the right-hand side",
          "workingLatex": "= 365.1\\,\\text{N m}",
          "explanation": "Total anticlockwise moment: $365.1\\,\\text{N m}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Solve for $R_B$",
          "workingLatex": "R_B = 60.9\\,\\text{N}",
          "explanation": "$R_B = 60.9\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Use vertical equilibrium",
          "workingLatex": "R_A = 114.2 - 60.9 = 53.4\\,\\text{N}",
          "explanation": "$R_A = 53.4\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check both reactions are positive",
          "workingLatex": "R_A = 53.4 > 0, \\quad R_B = 60.9 > 0",
          "explanation": "Positive reactions mean both supports remain in contact — the beam is in equilibrium.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Verify moments about right support",
          "workingLatex": "R_A \\times 6 = 320.1\\,\\text{N m}",
          "explanation": "Cross-checking about the right support confirms the reactions.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Identify which support carries more",
          "workingLatex": "R_{\\max} = 60.9\\,\\text{N}",
          "explanation": "The support nearer the heavier loading region bears the greater reaction.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Comment on load distribution",
          "workingLatex": "\\text{Multiple loads add their moments separately}",
          "explanation": "The principle of superposition applies: each load's moment can be calculated independently.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "State equilibrium conclusion",
          "workingLatex": "\\text{Beam is in equilibrium on both supports}",
          "explanation": "Both reactions are positive, so the beam does not tilt.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Final answers",
          "workingLatex": "R_A = 53.4\\,\\text{N}, \\quad R_B = 60.9\\,\\text{N}",
          "explanation": "Reactions: $R_A = 53.4\\,\\text{N}$, $R_B = 60.9\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Summarise the method",
          "workingLatex": "\\text{Moments about one support } + \\text{ vertical equilibrium } \\Rightarrow \\text{ both reactions}",
          "explanation": "This two-equation approach solves any statically determinate beam problem.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "Check total reaction",
          "workingLatex": "R_A + R_B = 114.2 = 114.2\\,\\text{N}",
          "explanation": "The reactions sum to the total load, confirming consistency.",
          "diagram": null
        }
      ],
      "finalAnswer": "$R_A = 53.4\\,\\text{N}$, $R_B = 60.9\\,\\text{N}$; the beam is in equilibrium."
    }
  },
  {
    "id": "al.y2.mech.moments.q065",
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Moments",
    "subtopicId": "al.y2.mech.moments",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "written",
    "tags": [
      "principle-of-moments",
      "multiple-loads",
      "reactions"
    ],
    "questionText": "A uniform beam of mass $10\\,\\text{kg}$ and length $12\\,\\text{m}$ rests on supports at each end. Loads of $70\\,\\text{N}$ and $90\\,\\text{N}$ act at $4\\,\\text{m}$ and $10\\,\\text{m}$ respectively from the left support. Taking $g = 9.8\\,\\text{m s}^{-2}$, find the reactions at both supports and state whether the beam is in equilibrium.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Calculate the beam weight",
          "workingLatex": "W_{\\text{beam}} = 98\\,\\text{N}",
          "explanation": "The uniform beam contributes $98\\,\\text{N}$ at its centre.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "List all downward forces",
          "workingLatex": "W_{\\text{beam}} = 98\\,\\text{N}, \\quad W_1 = 70\\,\\text{N}, \\quad W_2 = 90\\,\\text{N}",
          "explanation": "Total downward load: $258\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Take moments about the left support",
          "workingLatex": "\\sum M_A = 0",
          "explanation": "Eliminates $R_A$ from the moment equation.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write the full moment equation",
          "workingLatex": "R_B \\times 12 = 98 \\times 6.0 + 70 \\times 4 + 90 \\times 10",
          "explanation": "Each downward force contributes an anticlockwise moment about $A$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate the right-hand side",
          "workingLatex": "= 1768\\,\\text{N m}",
          "explanation": "Total anticlockwise moment: $1768\\,\\text{N m}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Solve for $R_B$",
          "workingLatex": "R_B = 147.3\\,\\text{N}",
          "explanation": "$R_B = 147.3\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Use vertical equilibrium",
          "workingLatex": "R_A = 258 - 147.3 = 110.7\\,\\text{N}",
          "explanation": "$R_A = 110.7\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check both reactions are positive",
          "workingLatex": "R_A = 110.7 > 0, \\quad R_B = 147.3 > 0",
          "explanation": "Positive reactions mean both supports remain in contact — the beam is in equilibrium.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Verify moments about right support",
          "workingLatex": "R_A \\times 12 = 1328\\,\\text{N m}",
          "explanation": "Cross-checking about the right support confirms the reactions.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Identify which support carries more",
          "workingLatex": "R_{\\max} = 147.3\\,\\text{N}",
          "explanation": "The support nearer the heavier loading region bears the greater reaction.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Comment on load distribution",
          "workingLatex": "\\text{Multiple loads add their moments separately}",
          "explanation": "The principle of superposition applies: each load's moment can be calculated independently.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "State equilibrium conclusion",
          "workingLatex": "\\text{Beam is in equilibrium on both supports}",
          "explanation": "Both reactions are positive, so the beam does not tilt.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Final answers",
          "workingLatex": "R_A = 110.7\\,\\text{N}, \\quad R_B = 147.3\\,\\text{N}",
          "explanation": "Reactions: $R_A = 110.7\\,\\text{N}$, $R_B = 147.3\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Summarise the method",
          "workingLatex": "\\text{Moments about one support } + \\text{ vertical equilibrium } \\Rightarrow \\text{ both reactions}",
          "explanation": "This two-equation approach solves any statically determinate beam problem.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "Check total reaction",
          "workingLatex": "R_A + R_B = 258 = 258\\,\\text{N}",
          "explanation": "The reactions sum to the total load, confirming consistency.",
          "diagram": null
        }
      ],
      "finalAnswer": "$R_A = 110.7\\,\\text{N}$, $R_B = 147.3\\,\\text{N}$; the beam is in equilibrium."
    }
  },
  {
    "id": "al.y2.mech.moments.q066",
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Moments",
    "subtopicId": "al.y2.mech.moments",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "written",
    "tags": [
      "principle-of-moments",
      "multiple-loads",
      "reactions"
    ],
    "questionText": "A uniform beam of mass $3\\,\\text{kg}$ and length $5\\,\\text{m}$ rests on supports at each end. Loads of $25\\,\\text{N}$ and $35\\,\\text{N}$ act at $2\\,\\text{m}$ and $3.5\\,\\text{m}$ respectively from the left support. Taking $g = 9.8\\,\\text{m s}^{-2}$, find the reactions at both supports and state whether the beam is in equilibrium.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Calculate the beam weight",
          "workingLatex": "W_{\\text{beam}} = 29.4\\,\\text{N}",
          "explanation": "The uniform beam contributes $29.4\\,\\text{N}$ at its centre.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "List all downward forces",
          "workingLatex": "W_{\\text{beam}} = 29.4\\,\\text{N}, \\quad W_1 = 25\\,\\text{N}, \\quad W_2 = 35\\,\\text{N}",
          "explanation": "Total downward load: $89.4\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Take moments about the left support",
          "workingLatex": "\\sum M_A = 0",
          "explanation": "Eliminates $R_A$ from the moment equation.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write the full moment equation",
          "workingLatex": "R_B \\times 5 = 29.4 \\times 2.5 + 25 \\times 2 + 35 \\times 3.5",
          "explanation": "Each downward force contributes an anticlockwise moment about $A$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate the right-hand side",
          "workingLatex": "= 246\\,\\text{N m}",
          "explanation": "Total anticlockwise moment: $246\\,\\text{N m}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Solve for $R_B$",
          "workingLatex": "R_B = 49.2\\,\\text{N}",
          "explanation": "$R_B = 49.2\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Use vertical equilibrium",
          "workingLatex": "R_A = 89.4 - 49.2 = 40.2\\,\\text{N}",
          "explanation": "$R_A = 40.2\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check both reactions are positive",
          "workingLatex": "R_A = 40.2 > 0, \\quad R_B = 49.2 > 0",
          "explanation": "Positive reactions mean both supports remain in contact — the beam is in equilibrium.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Verify moments about right support",
          "workingLatex": "R_A \\times 5 = 201\\,\\text{N m}",
          "explanation": "Cross-checking about the right support confirms the reactions.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Identify which support carries more",
          "workingLatex": "R_{\\max} = 49.2\\,\\text{N}",
          "explanation": "The support nearer the heavier loading region bears the greater reaction.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Comment on load distribution",
          "workingLatex": "\\text{Multiple loads add their moments separately}",
          "explanation": "The principle of superposition applies: each load's moment can be calculated independently.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "State equilibrium conclusion",
          "workingLatex": "\\text{Beam is in equilibrium on both supports}",
          "explanation": "Both reactions are positive, so the beam does not tilt.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Final answers",
          "workingLatex": "R_A = 40.2\\,\\text{N}, \\quad R_B = 49.2\\,\\text{N}",
          "explanation": "Reactions: $R_A = 40.2\\,\\text{N}$, $R_B = 49.2\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Summarise the method",
          "workingLatex": "\\text{Moments about one support } + \\text{ vertical equilibrium } \\Rightarrow \\text{ both reactions}",
          "explanation": "This two-equation approach solves any statically determinate beam problem.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "Check total reaction",
          "workingLatex": "R_A + R_B = 89.4 = 89.4\\,\\text{N}",
          "explanation": "The reactions sum to the total load, confirming consistency.",
          "diagram": null
        }
      ],
      "finalAnswer": "$R_A = 40.2\\,\\text{N}$, $R_B = 49.2\\,\\text{N}$; the beam is in equilibrium."
    }
  },
  {
    "id": "al.y2.mech.moments.q067",
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Moments",
    "subtopicId": "al.y2.mech.moments",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "written",
    "tags": [
      "principle-of-moments",
      "multiple-loads",
      "reactions"
    ],
    "questionText": "A uniform beam of mass $7\\,\\text{kg}$ and length $9\\,\\text{m}$ rests on supports at each end. Loads of $55\\,\\text{N}$ and $75\\,\\text{N}$ act at $5\\,\\text{m}$ and $7.5\\,\\text{m}$ respectively from the left support. Taking $g = 9.8\\,\\text{m s}^{-2}$, find the reactions at both supports and state whether the beam is in equilibrium.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Calculate the beam weight",
          "workingLatex": "W_{\\text{beam}} = 68.6\\,\\text{N}",
          "explanation": "The uniform beam contributes $68.6\\,\\text{N}$ at its centre.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "List all downward forces",
          "workingLatex": "W_{\\text{beam}} = 68.6\\,\\text{N}, \\quad W_1 = 55\\,\\text{N}, \\quad W_2 = 75\\,\\text{N}",
          "explanation": "Total downward load: $198.6\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Take moments about the left support",
          "workingLatex": "\\sum M_A = 0",
          "explanation": "Eliminates $R_A$ from the moment equation.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write the full moment equation",
          "workingLatex": "R_B \\times 9 = 68.6 \\times 4.5 + 55 \\times 5 + 75 \\times 7.5",
          "explanation": "Each downward force contributes an anticlockwise moment about $A$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate the right-hand side",
          "workingLatex": "= 1146.2\\,\\text{N m}",
          "explanation": "Total anticlockwise moment: $1146.2\\,\\text{N m}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Solve for $R_B$",
          "workingLatex": "R_B = 127.4\\,\\text{N}",
          "explanation": "$R_B = 127.4\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Use vertical equilibrium",
          "workingLatex": "R_A = 198.6 - 127.4 = 71.2\\,\\text{N}",
          "explanation": "$R_A = 71.2\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check both reactions are positive",
          "workingLatex": "R_A = 71.2 > 0, \\quad R_B = 127.4 > 0",
          "explanation": "Positive reactions mean both supports remain in contact — the beam is in equilibrium.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Verify moments about right support",
          "workingLatex": "R_A \\times 9 = 641.2\\,\\text{N m}",
          "explanation": "Cross-checking about the right support confirms the reactions.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Identify which support carries more",
          "workingLatex": "R_{\\max} = 127.4\\,\\text{N}",
          "explanation": "The support nearer the heavier loading region bears the greater reaction.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Comment on load distribution",
          "workingLatex": "\\text{Multiple loads add their moments separately}",
          "explanation": "The principle of superposition applies: each load's moment can be calculated independently.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "State equilibrium conclusion",
          "workingLatex": "\\text{Beam is in equilibrium on both supports}",
          "explanation": "Both reactions are positive, so the beam does not tilt.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Final answers",
          "workingLatex": "R_A = 71.2\\,\\text{N}, \\quad R_B = 127.4\\,\\text{N}",
          "explanation": "Reactions: $R_A = 71.2\\,\\text{N}$, $R_B = 127.4\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Summarise the method",
          "workingLatex": "\\text{Moments about one support } + \\text{ vertical equilibrium } \\Rightarrow \\text{ both reactions}",
          "explanation": "This two-equation approach solves any statically determinate beam problem.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "Check total reaction",
          "workingLatex": "R_A + R_B = 198.6 = 198.6\\,\\text{N}",
          "explanation": "The reactions sum to the total load, confirming consistency.",
          "diagram": null
        }
      ],
      "finalAnswer": "$R_A = 71.2\\,\\text{N}$, $R_B = 127.4\\,\\text{N}$; the beam is in equilibrium."
    }
  },
  {
    "id": "al.y2.mech.moments.q068",
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Moments",
    "subtopicId": "al.y2.mech.moments",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "written",
    "tags": [
      "principle-of-moments",
      "multiple-loads",
      "reactions"
    ],
    "questionText": "A uniform beam of mass $5\\,\\text{kg}$ and length $7\\,\\text{m}$ rests on supports at each end. Loads of $42\\,\\text{N}$ and $58\\,\\text{N}$ act at $2.5\\,\\text{m}$ and $5.5\\,\\text{m}$ respectively from the left support. Taking $g = 9.8\\,\\text{m s}^{-2}$, find the reactions at both supports and state whether the beam is in equilibrium.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Calculate the beam weight",
          "workingLatex": "W_{\\text{beam}} = 49\\,\\text{N}",
          "explanation": "The uniform beam contributes $49\\,\\text{N}$ at its centre.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "List all downward forces",
          "workingLatex": "W_{\\text{beam}} = 49\\,\\text{N}, \\quad W_1 = 42\\,\\text{N}, \\quad W_2 = 58\\,\\text{N}",
          "explanation": "Total downward load: $149\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Take moments about the left support",
          "workingLatex": "\\sum M_A = 0",
          "explanation": "Eliminates $R_A$ from the moment equation.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write the full moment equation",
          "workingLatex": "R_B \\times 7 = 49 \\times 3.5 + 42 \\times 2.5 + 58 \\times 5.5",
          "explanation": "Each downward force contributes an anticlockwise moment about $A$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate the right-hand side",
          "workingLatex": "= 595.5\\,\\text{N m}",
          "explanation": "Total anticlockwise moment: $595.5\\,\\text{N m}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Solve for $R_B$",
          "workingLatex": "R_B = 85.1\\,\\text{N}",
          "explanation": "$R_B = 85.1\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Use vertical equilibrium",
          "workingLatex": "R_A = 149 - 85.1 = 63.9\\,\\text{N}",
          "explanation": "$R_A = 63.9\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check both reactions are positive",
          "workingLatex": "R_A = 63.9 > 0, \\quad R_B = 85.1 > 0",
          "explanation": "Positive reactions mean both supports remain in contact — the beam is in equilibrium.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Verify moments about right support",
          "workingLatex": "R_A \\times 7 = 447.5\\,\\text{N m}",
          "explanation": "Cross-checking about the right support confirms the reactions.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Identify which support carries more",
          "workingLatex": "R_{\\max} = 85.1\\,\\text{N}",
          "explanation": "The support nearer the heavier loading region bears the greater reaction.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Comment on load distribution",
          "workingLatex": "\\text{Multiple loads add their moments separately}",
          "explanation": "The principle of superposition applies: each load's moment can be calculated independently.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "State equilibrium conclusion",
          "workingLatex": "\\text{Beam is in equilibrium on both supports}",
          "explanation": "Both reactions are positive, so the beam does not tilt.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Final answers",
          "workingLatex": "R_A = 63.9\\,\\text{N}, \\quad R_B = 85.1\\,\\text{N}",
          "explanation": "Reactions: $R_A = 63.9\\,\\text{N}$, $R_B = 85.1\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Summarise the method",
          "workingLatex": "\\text{Moments about one support } + \\text{ vertical equilibrium } \\Rightarrow \\text{ both reactions}",
          "explanation": "This two-equation approach solves any statically determinate beam problem.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "Check total reaction",
          "workingLatex": "R_A + R_B = 149 = 149\\,\\text{N}",
          "explanation": "The reactions sum to the total load, confirming consistency.",
          "diagram": null
        }
      ],
      "finalAnswer": "$R_A = 63.9\\,\\text{N}$, $R_B = 85.1\\,\\text{N}$; the beam is in equilibrium."
    }
  },
  {
    "id": "al.y2.mech.moments.q069",
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Moments",
    "subtopicId": "al.y2.mech.moments",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "written",
    "tags": [
      "principle-of-moments",
      "multiple-loads",
      "reactions"
    ],
    "questionText": "A uniform beam of mass $9\\,\\text{kg}$ and length $11\\,\\text{m}$ rests on supports at each end. Loads of $65\\,\\text{N}$ and $85\\,\\text{N}$ act at $3.5\\,\\text{m}$ and $9\\,\\text{m}$ respectively from the left support. Taking $g = 9.8\\,\\text{m s}^{-2}$, find the reactions at both supports and state whether the beam is in equilibrium.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Calculate the beam weight",
          "workingLatex": "W_{\\text{beam}} = 88.2\\,\\text{N}",
          "explanation": "The uniform beam contributes $88.2\\,\\text{N}$ at its centre.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "List all downward forces",
          "workingLatex": "W_{\\text{beam}} = 88.2\\,\\text{N}, \\quad W_1 = 65\\,\\text{N}, \\quad W_2 = 85\\,\\text{N}",
          "explanation": "Total downward load: $238.2\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Take moments about the left support",
          "workingLatex": "\\sum M_A = 0",
          "explanation": "Eliminates $R_A$ from the moment equation.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write the full moment equation",
          "workingLatex": "R_B \\times 11 = 88.2 \\times 5.5 + 65 \\times 3.5 + 85 \\times 9",
          "explanation": "Each downward force contributes an anticlockwise moment about $A$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate the right-hand side",
          "workingLatex": "= 1477.6\\,\\text{N m}",
          "explanation": "Total anticlockwise moment: $1477.6\\,\\text{N m}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Solve for $R_B$",
          "workingLatex": "R_B = 134.3\\,\\text{N}",
          "explanation": "$R_B = 134.3\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Use vertical equilibrium",
          "workingLatex": "R_A = 238.2 - 134.3 = 103.9\\,\\text{N}",
          "explanation": "$R_A = 103.9\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check both reactions are positive",
          "workingLatex": "R_A = 103.9 > 0, \\quad R_B = 134.3 > 0",
          "explanation": "Positive reactions mean both supports remain in contact — the beam is in equilibrium.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Verify moments about right support",
          "workingLatex": "R_A \\times 11 = 1142.6\\,\\text{N m}",
          "explanation": "Cross-checking about the right support confirms the reactions.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Identify which support carries more",
          "workingLatex": "R_{\\max} = 134.3\\,\\text{N}",
          "explanation": "The support nearer the heavier loading region bears the greater reaction.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Comment on load distribution",
          "workingLatex": "\\text{Multiple loads add their moments separately}",
          "explanation": "The principle of superposition applies: each load's moment can be calculated independently.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "State equilibrium conclusion",
          "workingLatex": "\\text{Beam is in equilibrium on both supports}",
          "explanation": "Both reactions are positive, so the beam does not tilt.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Final answers",
          "workingLatex": "R_A = 103.9\\,\\text{N}, \\quad R_B = 134.3\\,\\text{N}",
          "explanation": "Reactions: $R_A = 103.9\\,\\text{N}$, $R_B = 134.3\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Summarise the method",
          "workingLatex": "\\text{Moments about one support } + \\text{ vertical equilibrium } \\Rightarrow \\text{ both reactions}",
          "explanation": "This two-equation approach solves any statically determinate beam problem.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "Check total reaction",
          "workingLatex": "R_A + R_B = 238.2 = 238.2\\,\\text{N}",
          "explanation": "The reactions sum to the total load, confirming consistency.",
          "diagram": null
        }
      ],
      "finalAnswer": "$R_A = 103.9\\,\\text{N}$, $R_B = 134.3\\,\\text{N}$; the beam is in equilibrium."
    }
  },
  {
    "id": "al.y2.mech.moments.q070",
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Moments",
    "subtopicId": "al.y2.mech.moments",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "written",
    "tags": [
      "principle-of-moments",
      "multiple-loads",
      "reactions"
    ],
    "questionText": "A uniform beam of mass $12\\,\\text{kg}$ and length $14\\,\\text{m}$ rests on supports at each end. Loads of $100\\,\\text{N}$ and $120\\,\\text{N}$ act at $5\\,\\text{m}$ and $12\\,\\text{m}$ respectively from the left support. Taking $g = 9.8\\,\\text{m s}^{-2}$, find the reactions at both supports and state whether the beam is in equilibrium.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Calculate the beam weight",
          "workingLatex": "W_{\\text{beam}} = 117.6\\,\\text{N}",
          "explanation": "The uniform beam contributes $117.6\\,\\text{N}$ at its centre.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "List all downward forces",
          "workingLatex": "W_{\\text{beam}} = 117.6\\,\\text{N}, \\quad W_1 = 100\\,\\text{N}, \\quad W_2 = 120\\,\\text{N}",
          "explanation": "Total downward load: $337.6\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Take moments about the left support",
          "workingLatex": "\\sum M_A = 0",
          "explanation": "Eliminates $R_A$ from the moment equation.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write the full moment equation",
          "workingLatex": "R_B \\times 14 = 117.6 \\times 7.0 + 100 \\times 5 + 120 \\times 12",
          "explanation": "Each downward force contributes an anticlockwise moment about $A$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate the right-hand side",
          "workingLatex": "= 2763.2\\,\\text{N m}",
          "explanation": "Total anticlockwise moment: $2763.2\\,\\text{N m}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Solve for $R_B$",
          "workingLatex": "R_B = 197.4\\,\\text{N}",
          "explanation": "$R_B = 197.4\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Use vertical equilibrium",
          "workingLatex": "R_A = 337.6 - 197.4 = 140.2\\,\\text{N}",
          "explanation": "$R_A = 140.2\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check both reactions are positive",
          "workingLatex": "R_A = 140.2 > 0, \\quad R_B = 197.4 > 0",
          "explanation": "Positive reactions mean both supports remain in contact — the beam is in equilibrium.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Verify moments about right support",
          "workingLatex": "R_A \\times 14 = 1963.2\\,\\text{N m}",
          "explanation": "Cross-checking about the right support confirms the reactions.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Identify which support carries more",
          "workingLatex": "R_{\\max} = 197.4\\,\\text{N}",
          "explanation": "The support nearer the heavier loading region bears the greater reaction.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Comment on load distribution",
          "workingLatex": "\\text{Multiple loads add their moments separately}",
          "explanation": "The principle of superposition applies: each load's moment can be calculated independently.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "State equilibrium conclusion",
          "workingLatex": "\\text{Beam is in equilibrium on both supports}",
          "explanation": "Both reactions are positive, so the beam does not tilt.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Final answers",
          "workingLatex": "R_A = 140.2\\,\\text{N}, \\quad R_B = 197.4\\,\\text{N}",
          "explanation": "Reactions: $R_A = 140.2\\,\\text{N}$, $R_B = 197.4\\,\\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Summarise the method",
          "workingLatex": "\\text{Moments about one support } + \\text{ vertical equilibrium } \\Rightarrow \\text{ both reactions}",
          "explanation": "This two-equation approach solves any statically determinate beam problem.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "Check total reaction",
          "workingLatex": "R_A + R_B = 337.6 = 337.6\\,\\text{N}",
          "explanation": "The reactions sum to the total load, confirming consistency.",
          "diagram": null
        }
      ],
      "finalAnswer": "$R_A = 140.2\\,\\text{N}$, $R_B = 197.4\\,\\text{N}$; the beam is in equilibrium."
    }
  }
];
