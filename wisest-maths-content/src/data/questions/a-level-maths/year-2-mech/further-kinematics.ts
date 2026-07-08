import { Question } from "@/lib/types";

export const questions: Question[] = [
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Further kinematics",
    "subtopicId": "al.y2.mech.further-kinematics",
    "questionDiagram": null,
    "id": "al.y2.mech.further-kinematics.q001",
    "tags": [
      "basic",
      "differentiation",
      "velocity"
    ],
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "written",
    "questionText": "A particle moves so that $\\mathbf{r} = 3t\\mathbf{i} + 2t^{2}\\mathbf{j}$. Find $\\mathbf{v}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write the position vector",
          "workingLatex": "\\mathbf{r} = (3t)\\mathbf{i} + (2t^{2})\\mathbf{j}",
          "explanation": "Position is given as a function of time in $\\mathbf{i}$ and $\\mathbf{j}$ components.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate for velocity",
          "workingLatex": "\\mathbf{v} = \\dfrac{d\\mathbf{r}}{dt}",
          "explanation": "Velocity is the rate of change of position.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Differentiate the $\\mathbf{i}$ component",
          "workingLatex": "v_x = 3",
          "explanation": "Differentiate each component separately with respect to $t$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Differentiate the $\\mathbf{j}$ component",
          "workingLatex": "v_y = 4t",
          "explanation": "The $\\mathbf{j}$ component is differentiated independently.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Form the velocity vector",
          "workingLatex": "\\mathbf{v} = 3\\mathbf{i} + 4t\\mathbf{j}",
          "explanation": "Combine the component derivatives.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the answer",
          "workingLatex": "\\mathbf{v} = 3\\mathbf{i} + 4t\\mathbf{j}",
          "explanation": "Velocity at the given time or in general.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\mathbf{v} = 3\\mathbf{i} + 4t\\mathbf{j}$"
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Further kinematics",
    "subtopicId": "al.y2.mech.further-kinematics",
    "questionDiagram": null,
    "id": "al.y2.mech.further-kinematics.q002",
    "tags": [
      "basic",
      "differentiation",
      "velocity"
    ],
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "written",
    "questionText": "Given $\\mathbf{r} = t^{2}\\mathbf{i} + 4t\\mathbf{j}$, find the velocity vector.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write the position vector",
          "workingLatex": "\\mathbf{r} = (t^{2})\\mathbf{i} + (4t)\\mathbf{j}",
          "explanation": "Position is given as a function of time in $\\mathbf{i}$ and $\\mathbf{j}$ components.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate for velocity",
          "workingLatex": "\\mathbf{v} = \\dfrac{d\\mathbf{r}}{dt}",
          "explanation": "Velocity is the rate of change of position.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Differentiate the $\\mathbf{i}$ component",
          "workingLatex": "v_x = 2t",
          "explanation": "Differentiate each component separately with respect to $t$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Differentiate the $\\mathbf{j}$ component",
          "workingLatex": "v_y = 4",
          "explanation": "The $\\mathbf{j}$ component is differentiated independently.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Form the velocity vector",
          "workingLatex": "\\mathbf{v} = 2t\\mathbf{i} + 4\\mathbf{j}",
          "explanation": "Combine the component derivatives.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the answer",
          "workingLatex": "\\mathbf{v} = 2t\\mathbf{i} + 4\\mathbf{j}",
          "explanation": "Velocity at the given time or in general.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\mathbf{v} = 2t\\mathbf{i} + 4\\mathbf{j}$"
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Further kinematics",
    "subtopicId": "al.y2.mech.further-kinematics",
    "questionDiagram": null,
    "id": "al.y2.mech.further-kinematics.q003",
    "tags": [
      "constant-x",
      "differentiation",
      "velocity"
    ],
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "written",
    "questionText": "A particle has position $\\mathbf{r} = 5\\mathbf{i} + 3t\\mathbf{j}$. Find $\\mathbf{v}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write the position vector",
          "workingLatex": "\\mathbf{r} = (5)\\mathbf{i} + (3t)\\mathbf{j}",
          "explanation": "Position is given as a function of time in $\\mathbf{i}$ and $\\mathbf{j}$ components.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate for velocity",
          "workingLatex": "\\mathbf{v} = \\dfrac{d\\mathbf{r}}{dt}",
          "explanation": "Velocity is the rate of change of position.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Differentiate the $\\mathbf{i}$ component",
          "workingLatex": "v_x = 0",
          "explanation": "Differentiate each component separately with respect to $t$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Differentiate the $\\mathbf{j}$ component",
          "workingLatex": "v_y = 3",
          "explanation": "The $\\mathbf{j}$ component is differentiated independently.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Form the velocity vector",
          "workingLatex": "\\mathbf{v} = 0\\mathbf{i} + 3\\mathbf{j}",
          "explanation": "Combine the component derivatives.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the answer",
          "workingLatex": "\\mathbf{v} = 0\\mathbf{i} + 3\\mathbf{j}",
          "explanation": "Velocity at the given time or in general.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\mathbf{v} = 0\\mathbf{i} + 3\\mathbf{j}$"
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Further kinematics",
    "subtopicId": "al.y2.mech.further-kinematics",
    "questionDiagram": null,
    "id": "al.y2.mech.further-kinematics.q004",
    "tags": [
      "cubic",
      "differentiation",
      "velocity"
    ],
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "written",
    "questionText": "Find $\\mathbf{v}$ if $\\mathbf{r} = 2t^{3}\\mathbf{i} + t\\mathbf{j}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write the position vector",
          "workingLatex": "\\mathbf{r} = (2t^{3})\\mathbf{i} + (t)\\mathbf{j}",
          "explanation": "Position is given as a function of time in $\\mathbf{i}$ and $\\mathbf{j}$ components.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate for velocity",
          "workingLatex": "\\mathbf{v} = \\dfrac{d\\mathbf{r}}{dt}",
          "explanation": "Velocity is the rate of change of position.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Differentiate the $\\mathbf{i}$ component",
          "workingLatex": "v_x = 6t^{2}",
          "explanation": "Differentiate each component separately with respect to $t$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Differentiate the $\\mathbf{j}$ component",
          "workingLatex": "v_y = 1",
          "explanation": "The $\\mathbf{j}$ component is differentiated independently.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Form the velocity vector",
          "workingLatex": "\\mathbf{v} = 6t^{2}\\mathbf{i} + 1\\mathbf{j}",
          "explanation": "Combine the component derivatives.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the answer",
          "workingLatex": "\\mathbf{v} = 6t^{2}\\mathbf{i} + 1\\mathbf{j}",
          "explanation": "Velocity at the given time or in general.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\mathbf{v} = 6t^{2}\\mathbf{i} + 1\\mathbf{j}$"
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Further kinematics",
    "subtopicId": "al.y2.mech.further-kinematics",
    "questionDiagram": null,
    "id": "al.y2.mech.further-kinematics.q005",
    "tags": [
      "quadratic-y",
      "differentiation",
      "velocity"
    ],
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "written",
    "questionText": "Given $\\mathbf{r} = 4t\\mathbf{i} + (t^{2}-1)\\mathbf{j}$, find $\\mathbf{v}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write the position vector",
          "workingLatex": "\\mathbf{r} = (4t)\\mathbf{i} + (t^{2} - 1)\\mathbf{j}",
          "explanation": "Position is given as a function of time in $\\mathbf{i}$ and $\\mathbf{j}$ components.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate for velocity",
          "workingLatex": "\\mathbf{v} = \\dfrac{d\\mathbf{r}}{dt}",
          "explanation": "Velocity is the rate of change of position.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Differentiate the $\\mathbf{i}$ component",
          "workingLatex": "v_x = 4",
          "explanation": "Differentiate each component separately with respect to $t$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Differentiate the $\\mathbf{j}$ component",
          "workingLatex": "v_y = 2t",
          "explanation": "The $\\mathbf{j}$ component is differentiated independently.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Form the velocity vector",
          "workingLatex": "\\mathbf{v} = 4\\mathbf{i} + 2t\\mathbf{j}",
          "explanation": "Combine the component derivatives.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the answer",
          "workingLatex": "\\mathbf{v} = 4\\mathbf{i} + 2t\\mathbf{j}",
          "explanation": "Velocity at the given time or in general.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\mathbf{v} = 4\\mathbf{i} + 2t\\mathbf{j}$"
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Further kinematics",
    "subtopicId": "al.y2.mech.further-kinematics",
    "questionDiagram": null,
    "id": "al.y2.mech.further-kinematics.q006",
    "tags": [
      "basic",
      "differentiation",
      "velocity"
    ],
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "written",
    "questionText": "Find the velocity when $\\mathbf{r} = (t^{2}+1)\\mathbf{i} + 5t\\mathbf{j}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write the position vector",
          "workingLatex": "\\mathbf{r} = (t^{2} + 1)\\mathbf{i} + (5t)\\mathbf{j}",
          "explanation": "Position is given as a function of time in $\\mathbf{i}$ and $\\mathbf{j}$ components.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate for velocity",
          "workingLatex": "\\mathbf{v} = \\dfrac{d\\mathbf{r}}{dt}",
          "explanation": "Velocity is the rate of change of position.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Differentiate the $\\mathbf{i}$ component",
          "workingLatex": "v_x = 2t",
          "explanation": "Differentiate each component separately with respect to $t$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Differentiate the $\\mathbf{j}$ component",
          "workingLatex": "v_y = 5",
          "explanation": "The $\\mathbf{j}$ component is differentiated independently.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Form the velocity vector",
          "workingLatex": "\\mathbf{v} = 2t\\mathbf{i} + 5\\mathbf{j}",
          "explanation": "Combine the component derivatives.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the answer",
          "workingLatex": "\\mathbf{v} = 2t\\mathbf{i} + 5\\mathbf{j}",
          "explanation": "Velocity at the given time or in general.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\mathbf{v} = 2t\\mathbf{i} + 5\\mathbf{j}$"
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Further kinematics",
    "subtopicId": "al.y2.mech.further-kinematics",
    "questionDiagram": null,
    "id": "al.y2.mech.further-kinematics.q007",
    "tags": [
      "1D",
      "differentiation",
      "velocity"
    ],
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "written",
    "questionText": "A particle moves along the $\\mathbf{i}$ axis with $\\mathbf{r} = 6t\\mathbf{i}$. Find $\\mathbf{v}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write the position vector",
          "workingLatex": "\\mathbf{r} = (6t)\\mathbf{i} + (0)\\mathbf{j}",
          "explanation": "Position is given as a function of time in $\\mathbf{i}$ and $\\mathbf{j}$ components.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate for velocity",
          "workingLatex": "\\mathbf{v} = \\dfrac{d\\mathbf{r}}{dt}",
          "explanation": "Velocity is the rate of change of position.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Differentiate the $\\mathbf{i}$ component",
          "workingLatex": "v_x = 6",
          "explanation": "Differentiate each component separately with respect to $t$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Differentiate the $\\mathbf{j}$ component",
          "workingLatex": "v_y = 0",
          "explanation": "The $\\mathbf{j}$ component is differentiated independently.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Form the velocity vector",
          "workingLatex": "\\mathbf{v} = 6\\mathbf{i} + 0\\mathbf{j}",
          "explanation": "Combine the component derivatives.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the answer",
          "workingLatex": "\\mathbf{v} = 6\\mathbf{i} + 0\\mathbf{j}",
          "explanation": "Velocity at the given time or in general.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\mathbf{v} = 6\\mathbf{i} + 0\\mathbf{j}$"
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Further kinematics",
    "subtopicId": "al.y2.mech.further-kinematics",
    "questionDiagram": null,
    "id": "al.y2.mech.further-kinematics.q008",
    "tags": [
      "1D-vertical",
      "differentiation",
      "velocity"
    ],
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "written",
    "questionText": "Find $\\mathbf{v}$ for $\\mathbf{r} = 8t\\mathbf{j}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write the position vector",
          "workingLatex": "\\mathbf{r} = (0)\\mathbf{i} + (8t)\\mathbf{j}",
          "explanation": "Position is given as a function of time in $\\mathbf{i}$ and $\\mathbf{j}$ components.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate for velocity",
          "workingLatex": "\\mathbf{v} = \\dfrac{d\\mathbf{r}}{dt}",
          "explanation": "Velocity is the rate of change of position.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Differentiate the $\\mathbf{i}$ component",
          "workingLatex": "v_x = 0",
          "explanation": "Differentiate each component separately with respect to $t$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Differentiate the $\\mathbf{j}$ component",
          "workingLatex": "v_y = 8",
          "explanation": "The $\\mathbf{j}$ component is differentiated independently.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Form the velocity vector",
          "workingLatex": "\\mathbf{v} = 0\\mathbf{i} + 8\\mathbf{j}",
          "explanation": "Combine the component derivatives.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the answer",
          "workingLatex": "\\mathbf{v} = 0\\mathbf{i} + 8\\mathbf{j}",
          "explanation": "Velocity at the given time or in general.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\mathbf{v} = 0\\mathbf{i} + 8\\mathbf{j}$"
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Further kinematics",
    "subtopicId": "al.y2.mech.further-kinematics",
    "questionDiagram": null,
    "id": "al.y2.mech.further-kinematics.q009",
    "tags": [
      "symmetric",
      "differentiation",
      "velocity"
    ],
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "written",
    "questionText": "Given $\\mathbf{r} = t^{2}\\mathbf{i} + t^{2}\\mathbf{j}$, find $\\mathbf{v}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write the position vector",
          "workingLatex": "\\mathbf{r} = (t^{2})\\mathbf{i} + (t^{2})\\mathbf{j}",
          "explanation": "Position is given as a function of time in $\\mathbf{i}$ and $\\mathbf{j}$ components.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate for velocity",
          "workingLatex": "\\mathbf{v} = \\dfrac{d\\mathbf{r}}{dt}",
          "explanation": "Velocity is the rate of change of position.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Differentiate the $\\mathbf{i}$ component",
          "workingLatex": "v_x = 2t",
          "explanation": "Differentiate each component separately with respect to $t$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Differentiate the $\\mathbf{j}$ component",
          "workingLatex": "v_y = 2t",
          "explanation": "The $\\mathbf{j}$ component is differentiated independently.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Form the velocity vector",
          "workingLatex": "\\mathbf{v} = 2t\\mathbf{i} + 2t\\mathbf{j}",
          "explanation": "Combine the component derivatives.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the answer",
          "workingLatex": "\\mathbf{v} = 2t\\mathbf{i} + 2t\\mathbf{j}",
          "explanation": "Velocity at the given time or in general.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\mathbf{v} = 2t\\mathbf{i} + 2t\\mathbf{j}$"
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Further kinematics",
    "subtopicId": "al.y2.mech.further-kinematics",
    "questionDiagram": null,
    "id": "al.y2.mech.further-kinematics.q010",
    "tags": [
      "cubic-y",
      "differentiation",
      "velocity"
    ],
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "written",
    "questionText": "Find $\\mathbf{v}$ when $\\mathbf{r} = (3t^{2}-2t)\\mathbf{i} + t^{3}\\mathbf{j}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write the position vector",
          "workingLatex": "\\mathbf{r} = (3t^{2} - 2t)\\mathbf{i} + (t^{3})\\mathbf{j}",
          "explanation": "Position is given as a function of time in $\\mathbf{i}$ and $\\mathbf{j}$ components.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate for velocity",
          "workingLatex": "\\mathbf{v} = \\dfrac{d\\mathbf{r}}{dt}",
          "explanation": "Velocity is the rate of change of position.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Differentiate the $\\mathbf{i}$ component",
          "workingLatex": "v_x = 6t - 2",
          "explanation": "Differentiate each component separately with respect to $t$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Differentiate the $\\mathbf{j}$ component",
          "workingLatex": "v_y = 3t^{2}",
          "explanation": "The $\\mathbf{j}$ component is differentiated independently.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Form the velocity vector",
          "workingLatex": "\\mathbf{v} = 6t - 2\\mathbf{i} + 3t^{2}\\mathbf{j}",
          "explanation": "Combine the component derivatives.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the answer",
          "workingLatex": "\\mathbf{v} = 6t - 2\\mathbf{i} + 3t^{2}\\mathbf{j}",
          "explanation": "Velocity at the given time or in general.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\mathbf{v} = 6t - 2\\mathbf{i} + 3t^{2}\\mathbf{j}$"
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Further kinematics",
    "subtopicId": "al.y2.mech.further-kinematics",
    "questionDiagram": null,
    "id": "al.y2.mech.further-kinematics.q011",
    "tags": [
      "basic",
      "differentiation",
      "acceleration"
    ],
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "written",
    "questionText": "The velocity of a particle is $\\mathbf{v} = 4t\\mathbf{i} + 2\\mathbf{j}$. Find $\\mathbf{a}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write the velocity vector",
          "workingLatex": "\\mathbf{v} = (4t)\\mathbf{i} + (2)\\mathbf{j}",
          "explanation": "Velocity as a function of time.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate for acceleration",
          "workingLatex": "\\mathbf{a} = \\dfrac{d\\mathbf{v}}{dt}",
          "explanation": "Acceleration is the derivative of velocity.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Differentiate the $\\mathbf{i}$ component",
          "workingLatex": "a_x = 4",
          "explanation": "Treat the $\\mathbf{i}$ and $\\mathbf{j}$ parts separately.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Differentiate the $\\mathbf{j}$ component",
          "workingLatex": "a_y = 0",
          "explanation": "Differentiate the vertical component.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Form the acceleration vector",
          "workingLatex": "\\mathbf{a} = 4\\mathbf{i} + 0\\mathbf{j}",
          "explanation": "Combine both components.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "\\mathbf{a} = 4\\mathbf{i} + 0\\mathbf{j}",
          "explanation": "Acceleration in vector form.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\mathbf{a} = 4\\mathbf{i} + 0\\mathbf{j}$"
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Further kinematics",
    "subtopicId": "al.y2.mech.further-kinematics",
    "questionDiagram": null,
    "id": "al.y2.mech.further-kinematics.q012",
    "tags": [
      "constant-x",
      "differentiation",
      "acceleration"
    ],
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "written",
    "questionText": "Find $\\mathbf{a}$ if $\\mathbf{v} = 6\\mathbf{i} + 3t\\mathbf{j}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write the velocity vector",
          "workingLatex": "\\mathbf{v} = (6)\\mathbf{i} + (3t)\\mathbf{j}",
          "explanation": "Velocity as a function of time.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate for acceleration",
          "workingLatex": "\\mathbf{a} = \\dfrac{d\\mathbf{v}}{dt}",
          "explanation": "Acceleration is the derivative of velocity.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Differentiate the $\\mathbf{i}$ component",
          "workingLatex": "a_x = 0",
          "explanation": "Treat the $\\mathbf{i}$ and $\\mathbf{j}$ parts separately.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Differentiate the $\\mathbf{j}$ component",
          "workingLatex": "a_y = 3",
          "explanation": "Differentiate the vertical component.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Form the acceleration vector",
          "workingLatex": "\\mathbf{a} = 0\\mathbf{i} + 3\\mathbf{j}",
          "explanation": "Combine both components.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "\\mathbf{a} = 0\\mathbf{i} + 3\\mathbf{j}",
          "explanation": "Acceleration in vector form.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\mathbf{a} = 0\\mathbf{i} + 3\\mathbf{j}$"
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Further kinematics",
    "subtopicId": "al.y2.mech.further-kinematics",
    "questionDiagram": null,
    "id": "al.y2.mech.further-kinematics.q013",
    "tags": [
      "linear",
      "differentiation",
      "acceleration"
    ],
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "written",
    "questionText": "Given $\\mathbf{v} = 2t\\mathbf{i} + 2t\\mathbf{j}$, find the acceleration.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write the velocity vector",
          "workingLatex": "\\mathbf{v} = (2t)\\mathbf{i} + (2t)\\mathbf{j}",
          "explanation": "Velocity as a function of time.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate for acceleration",
          "workingLatex": "\\mathbf{a} = \\dfrac{d\\mathbf{v}}{dt}",
          "explanation": "Acceleration is the derivative of velocity.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Differentiate the $\\mathbf{i}$ component",
          "workingLatex": "a_x = 2",
          "explanation": "Treat the $\\mathbf{i}$ and $\\mathbf{j}$ parts separately.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Differentiate the $\\mathbf{j}$ component",
          "workingLatex": "a_y = 2",
          "explanation": "Differentiate the vertical component.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Form the acceleration vector",
          "workingLatex": "\\mathbf{a} = 2\\mathbf{i} + 2\\mathbf{j}",
          "explanation": "Combine both components.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "\\mathbf{a} = 2\\mathbf{i} + 2\\mathbf{j}",
          "explanation": "Acceleration in vector form.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\mathbf{a} = 2\\mathbf{i} + 2\\mathbf{j}$"
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Further kinematics",
    "subtopicId": "al.y2.mech.further-kinematics",
    "questionDiagram": null,
    "id": "al.y2.mech.further-kinematics.q014",
    "tags": [
      "quadratic",
      "differentiation",
      "acceleration"
    ],
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "written",
    "questionText": "Find $\\mathbf{a}$ when $\\mathbf{v} = t^{2}\\mathbf{i} + 4t\\mathbf{j}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write the velocity vector",
          "workingLatex": "\\mathbf{v} = (t^{2})\\mathbf{i} + (4t)\\mathbf{j}",
          "explanation": "Velocity as a function of time.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate for acceleration",
          "workingLatex": "\\mathbf{a} = \\dfrac{d\\mathbf{v}}{dt}",
          "explanation": "Acceleration is the derivative of velocity.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Differentiate the $\\mathbf{i}$ component",
          "workingLatex": "a_x = 2t",
          "explanation": "Treat the $\\mathbf{i}$ and $\\mathbf{j}$ parts separately.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Differentiate the $\\mathbf{j}$ component",
          "workingLatex": "a_y = 4",
          "explanation": "Differentiate the vertical component.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Form the acceleration vector",
          "workingLatex": "\\mathbf{a} = 2t\\mathbf{i} + 4\\mathbf{j}",
          "explanation": "Combine both components.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "\\mathbf{a} = 2t\\mathbf{i} + 4\\mathbf{j}",
          "explanation": "Acceleration in vector form.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\mathbf{a} = 2t\\mathbf{i} + 4\\mathbf{j}$"
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Further kinematics",
    "subtopicId": "al.y2.mech.further-kinematics",
    "questionDiagram": null,
    "id": "al.y2.mech.further-kinematics.q015",
    "tags": [
      "mixed",
      "differentiation",
      "acceleration"
    ],
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "written",
    "questionText": "A particle has $\\mathbf{v} = 5t\\mathbf{i} + (t^{2}-3)\\mathbf{j}$. Find $\\mathbf{a}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write the velocity vector",
          "workingLatex": "\\mathbf{v} = (5t)\\mathbf{i} + (t^{2} - 3)\\mathbf{j}",
          "explanation": "Velocity as a function of time.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate for acceleration",
          "workingLatex": "\\mathbf{a} = \\dfrac{d\\mathbf{v}}{dt}",
          "explanation": "Acceleration is the derivative of velocity.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Differentiate the $\\mathbf{i}$ component",
          "workingLatex": "a_x = 5",
          "explanation": "Treat the $\\mathbf{i}$ and $\\mathbf{j}$ parts separately.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Differentiate the $\\mathbf{j}$ component",
          "workingLatex": "a_y = 2t",
          "explanation": "Differentiate the vertical component.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Form the acceleration vector",
          "workingLatex": "\\mathbf{a} = 5\\mathbf{i} + 2t\\mathbf{j}",
          "explanation": "Combine both components.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "\\mathbf{a} = 5\\mathbf{i} + 2t\\mathbf{j}",
          "explanation": "Acceleration in vector form.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\mathbf{a} = 5\\mathbf{i} + 2t\\mathbf{j}$"
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Further kinematics",
    "subtopicId": "al.y2.mech.further-kinematics",
    "questionDiagram": null,
    "id": "al.y2.mech.further-kinematics.q016",
    "tags": [
      "zero-accel",
      "differentiation",
      "acceleration"
    ],
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "written",
    "questionText": "Find $\\mathbf{a}$ for constant velocity $\\mathbf{v} = 8\\mathbf{i}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write the velocity vector",
          "workingLatex": "\\mathbf{v} = (8)\\mathbf{i} + (0)\\mathbf{j}",
          "explanation": "Velocity as a function of time.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate for acceleration",
          "workingLatex": "\\mathbf{a} = \\dfrac{d\\mathbf{v}}{dt}",
          "explanation": "Acceleration is the derivative of velocity.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Differentiate the $\\mathbf{i}$ component",
          "workingLatex": "a_x = 0",
          "explanation": "Treat the $\\mathbf{i}$ and $\\mathbf{j}$ parts separately.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Differentiate the $\\mathbf{j}$ component",
          "workingLatex": "a_y = 0",
          "explanation": "Differentiate the vertical component.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Form the acceleration vector",
          "workingLatex": "\\mathbf{a} = 0\\mathbf{i} + 0\\mathbf{j}",
          "explanation": "Combine both components.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "\\mathbf{a} = 0\\mathbf{i} + 0\\mathbf{j}",
          "explanation": "Acceleration in vector form.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\mathbf{a} = 0\\mathbf{i} + 0\\mathbf{j}$"
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Further kinematics",
    "subtopicId": "al.y2.mech.further-kinematics",
    "questionDiagram": null,
    "id": "al.y2.mech.further-kinematics.q017",
    "tags": [
      "quadratic",
      "differentiation",
      "acceleration"
    ],
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "written",
    "questionText": "Given $\\mathbf{v} = 3t^{2}\\mathbf{i} + 6t\\mathbf{j}$, find $\\mathbf{a}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write the velocity vector",
          "workingLatex": "\\mathbf{v} = (3t^{2})\\mathbf{i} + (6t)\\mathbf{j}",
          "explanation": "Velocity as a function of time.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate for acceleration",
          "workingLatex": "\\mathbf{a} = \\dfrac{d\\mathbf{v}}{dt}",
          "explanation": "Acceleration is the derivative of velocity.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Differentiate the $\\mathbf{i}$ component",
          "workingLatex": "a_x = 6t",
          "explanation": "Treat the $\\mathbf{i}$ and $\\mathbf{j}$ parts separately.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Differentiate the $\\mathbf{j}$ component",
          "workingLatex": "a_y = 6",
          "explanation": "Differentiate the vertical component.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Form the acceleration vector",
          "workingLatex": "\\mathbf{a} = 6t\\mathbf{i} + 6\\mathbf{j}",
          "explanation": "Combine both components.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "\\mathbf{a} = 6t\\mathbf{i} + 6\\mathbf{j}",
          "explanation": "Acceleration in vector form.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\mathbf{a} = 6t\\mathbf{i} + 6\\mathbf{j}$"
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Further kinematics",
    "subtopicId": "al.y2.mech.further-kinematics",
    "questionDiagram": null,
    "id": "al.y2.mech.further-kinematics.q018",
    "tags": [
      "linear",
      "differentiation",
      "acceleration"
    ],
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "written",
    "questionText": "Find $\\mathbf{a}$ if $\\mathbf{v} = (2t-1)\\mathbf{i} + t\\mathbf{j}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write the velocity vector",
          "workingLatex": "\\mathbf{v} = (2t - 1)\\mathbf{i} + (t)\\mathbf{j}",
          "explanation": "Velocity as a function of time.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate for acceleration",
          "workingLatex": "\\mathbf{a} = \\dfrac{d\\mathbf{v}}{dt}",
          "explanation": "Acceleration is the derivative of velocity.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Differentiate the $\\mathbf{i}$ component",
          "workingLatex": "a_x = 2",
          "explanation": "Treat the $\\mathbf{i}$ and $\\mathbf{j}$ parts separately.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Differentiate the $\\mathbf{j}$ component",
          "workingLatex": "a_y = 1",
          "explanation": "Differentiate the vertical component.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Form the acceleration vector",
          "workingLatex": "\\mathbf{a} = 2\\mathbf{i} + 1\\mathbf{j}",
          "explanation": "Combine both components.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "\\mathbf{a} = 2\\mathbf{i} + 1\\mathbf{j}",
          "explanation": "Acceleration in vector form.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\mathbf{a} = 2\\mathbf{i} + 1\\mathbf{j}$"
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Further kinematics",
    "subtopicId": "al.y2.mech.further-kinematics",
    "questionDiagram": null,
    "id": "al.y2.mech.further-kinematics.q019",
    "tags": [
      "constant-x",
      "differentiation",
      "acceleration"
    ],
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "written",
    "questionText": "Find the acceleration when $\\mathbf{v} = 4\\mathbf{i} + 4t\\mathbf{j}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write the velocity vector",
          "workingLatex": "\\mathbf{v} = (4)\\mathbf{i} + (4t)\\mathbf{j}",
          "explanation": "Velocity as a function of time.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate for acceleration",
          "workingLatex": "\\mathbf{a} = \\dfrac{d\\mathbf{v}}{dt}",
          "explanation": "Acceleration is the derivative of velocity.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Differentiate the $\\mathbf{i}$ component",
          "workingLatex": "a_x = 0",
          "explanation": "Treat the $\\mathbf{i}$ and $\\mathbf{j}$ parts separately.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Differentiate the $\\mathbf{j}$ component",
          "workingLatex": "a_y = 4",
          "explanation": "Differentiate the vertical component.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Form the acceleration vector",
          "workingLatex": "\\mathbf{a} = 0\\mathbf{i} + 4\\mathbf{j}",
          "explanation": "Combine both components.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "\\mathbf{a} = 0\\mathbf{i} + 4\\mathbf{j}",
          "explanation": "Acceleration in vector form.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\mathbf{a} = 0\\mathbf{i} + 4\\mathbf{j}$"
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Further kinematics",
    "subtopicId": "al.y2.mech.further-kinematics",
    "questionDiagram": null,
    "id": "al.y2.mech.further-kinematics.q020",
    "tags": [
      "equal-components",
      "differentiation",
      "acceleration"
    ],
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "written",
    "questionText": "Given $\\mathbf{v} = t\\mathbf{i} + t\\mathbf{j}$, find $\\mathbf{a}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write the velocity vector",
          "workingLatex": "\\mathbf{v} = (t)\\mathbf{i} + (t)\\mathbf{j}",
          "explanation": "Velocity as a function of time.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate for acceleration",
          "workingLatex": "\\mathbf{a} = \\dfrac{d\\mathbf{v}}{dt}",
          "explanation": "Acceleration is the derivative of velocity.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Differentiate the $\\mathbf{i}$ component",
          "workingLatex": "a_x = 1",
          "explanation": "Treat the $\\mathbf{i}$ and $\\mathbf{j}$ parts separately.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Differentiate the $\\mathbf{j}$ component",
          "workingLatex": "a_y = 1",
          "explanation": "Differentiate the vertical component.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Form the acceleration vector",
          "workingLatex": "\\mathbf{a} = 1\\mathbf{i} + 1\\mathbf{j}",
          "explanation": "Combine both components.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "\\mathbf{a} = 1\\mathbf{i} + 1\\mathbf{j}",
          "explanation": "Acceleration in vector form.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\mathbf{a} = 1\\mathbf{i} + 1\\mathbf{j}$"
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Further kinematics",
    "subtopicId": "al.y2.mech.further-kinematics",
    "questionDiagram": null,
    "id": "al.y2.mech.further-kinematics.q021",
    "tags": [
      "3-4-5",
      "speed",
      "magnitude"
    ],
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "numeric",
    "questionText": "A particle has velocity $\\mathbf{v} = 3\\mathbf{i} + 4\\mathbf{j}$ m s$^{-1}$. Find its speed.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall speed formula",
          "workingLatex": "|\\mathbf{v}| = \\sqrt{v_x^{2} + v_y^{2}}",
          "explanation": "Speed is the magnitude of the velocity vector.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify components",
          "workingLatex": "v_x = 3,\\; v_y = 4",
          "explanation": "Read the $\\mathbf{i}$ and $\\mathbf{j}$ components of velocity.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Square the components",
          "workingLatex": "v_x^{2} = 9,\\; v_y^{2} = 16",
          "explanation": "Speed uses squared components.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Add and square root",
          "workingLatex": "|\\mathbf{v}| = \\sqrt{9 + 16}",
          "explanation": "Combine under the square root.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate",
          "workingLatex": "|\\mathbf{v}| = 5\\ \\text{m s}^{-1}",
          "explanation": "The scalar speed.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "\\text{Speed} = 5\\ \\text{m s}^{-1}",
          "explanation": "Include units.",
          "diagram": null
        }
      ],
      "finalAnswer": "Speed $= 5\\ \\text{m s}^{-1}$"
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Further kinematics",
    "subtopicId": "al.y2.mech.further-kinematics",
    "questionDiagram": null,
    "id": "al.y2.mech.further-kinematics.q022",
    "tags": [
      "5-12-13",
      "speed",
      "magnitude"
    ],
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "numeric",
    "questionText": "Find the speed when $\\mathbf{v} = 5\\mathbf{i} + 12\\mathbf{j}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall speed formula",
          "workingLatex": "|\\mathbf{v}| = \\sqrt{v_x^{2} + v_y^{2}}",
          "explanation": "Speed is the magnitude of the velocity vector.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify components",
          "workingLatex": "v_x = 5,\\; v_y = 12",
          "explanation": "Read the $\\mathbf{i}$ and $\\mathbf{j}$ components of velocity.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Square the components",
          "workingLatex": "v_x^{2} = 25,\\; v_y^{2} = 144",
          "explanation": "Speed uses squared components.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Add and square root",
          "workingLatex": "|\\mathbf{v}| = \\sqrt{25 + 144}",
          "explanation": "Combine under the square root.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate",
          "workingLatex": "|\\mathbf{v}| = 13\\ \\text{m s}^{-1}",
          "explanation": "The scalar speed.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "\\text{Speed} = 13\\ \\text{m s}^{-1}",
          "explanation": "Include units.",
          "diagram": null
        }
      ],
      "finalAnswer": "Speed $= 13\\ \\text{m s}^{-1}$"
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Further kinematics",
    "subtopicId": "al.y2.mech.further-kinematics",
    "questionDiagram": null,
    "id": "al.y2.mech.further-kinematics.q023",
    "tags": [
      "6-8-10",
      "speed",
      "magnitude"
    ],
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "numeric",
    "questionText": "A particle moves with $\\mathbf{v} = 6\\mathbf{i} + 8\\mathbf{j}$. Calculate its speed.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall speed formula",
          "workingLatex": "|\\mathbf{v}| = \\sqrt{v_x^{2} + v_y^{2}}",
          "explanation": "Speed is the magnitude of the velocity vector.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify components",
          "workingLatex": "v_x = 6,\\; v_y = 8",
          "explanation": "Read the $\\mathbf{i}$ and $\\mathbf{j}$ components of velocity.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Square the components",
          "workingLatex": "v_x^{2} = 36,\\; v_y^{2} = 64",
          "explanation": "Speed uses squared components.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Add and square root",
          "workingLatex": "|\\mathbf{v}| = \\sqrt{36 + 64}",
          "explanation": "Combine under the square root.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate",
          "workingLatex": "|\\mathbf{v}| = 10\\ \\text{m s}^{-1}",
          "explanation": "The scalar speed.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "\\text{Speed} = 10\\ \\text{m s}^{-1}",
          "explanation": "Include units.",
          "diagram": null
        }
      ],
      "finalAnswer": "Speed $= 10\\ \\text{m s}^{-1}$"
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Further kinematics",
    "subtopicId": "al.y2.mech.further-kinematics",
    "questionDiagram": null,
    "id": "al.y2.mech.further-kinematics.q024",
    "tags": [
      "vertical-only",
      "speed",
      "magnitude"
    ],
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "numeric",
    "questionText": "Find the speed if $\\mathbf{v} = 10\\mathbf{j}$ m s$^{-1}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall speed formula",
          "workingLatex": "|\\mathbf{v}| = \\sqrt{v_x^{2} + v_y^{2}}",
          "explanation": "Speed is the magnitude of the velocity vector.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify components",
          "workingLatex": "v_x = 0,\\; v_y = 10",
          "explanation": "Read the $\\mathbf{i}$ and $\\mathbf{j}$ components of velocity.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Square the components",
          "workingLatex": "v_x^{2} = 0,\\; v_y^{2} = 100",
          "explanation": "Speed uses squared components.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Add and square root",
          "workingLatex": "|\\mathbf{v}| = \\sqrt{0 + 100}",
          "explanation": "Combine under the square root.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate",
          "workingLatex": "|\\mathbf{v}| = 10\\ \\text{m s}^{-1}",
          "explanation": "The scalar speed.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "\\text{Speed} = 10\\ \\text{m s}^{-1}",
          "explanation": "Include units.",
          "diagram": null
        }
      ],
      "finalAnswer": "Speed $= 10\\ \\text{m s}^{-1}$"
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Further kinematics",
    "subtopicId": "al.y2.mech.further-kinematics",
    "questionDiagram": null,
    "id": "al.y2.mech.further-kinematics.q025",
    "tags": [
      "horizontal-only",
      "speed",
      "magnitude"
    ],
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "numeric",
    "questionText": "Find the speed when $\\mathbf{v} = 7\\mathbf{i}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall speed formula",
          "workingLatex": "|\\mathbf{v}| = \\sqrt{v_x^{2} + v_y^{2}}",
          "explanation": "Speed is the magnitude of the velocity vector.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify components",
          "workingLatex": "v_x = 7,\\; v_y = 0",
          "explanation": "Read the $\\mathbf{i}$ and $\\mathbf{j}$ components of velocity.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Square the components",
          "workingLatex": "v_x^{2} = 49,\\; v_y^{2} = 0",
          "explanation": "Speed uses squared components.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Add and square root",
          "workingLatex": "|\\mathbf{v}| = \\sqrt{49 + 0}",
          "explanation": "Combine under the square root.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate",
          "workingLatex": "|\\mathbf{v}| = 7\\ \\text{m s}^{-1}",
          "explanation": "The scalar speed.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "\\text{Speed} = 7\\ \\text{m s}^{-1}",
          "explanation": "Include units.",
          "diagram": null
        }
      ],
      "finalAnswer": "Speed $= 7\\ \\text{m s}^{-1}$"
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Further kinematics",
    "subtopicId": "al.y2.mech.further-kinematics",
    "questionDiagram": null,
    "id": "al.y2.mech.further-kinematics.q026",
    "tags": [
      "unit-components",
      "speed",
      "magnitude"
    ],
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "numeric",
    "questionText": "Find the speed of $\\mathbf{v} = \\mathbf{i} + \\mathbf{j}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall speed formula",
          "workingLatex": "|\\mathbf{v}| = \\sqrt{v_x^{2} + v_y^{2}}",
          "explanation": "Speed is the magnitude of the velocity vector.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify components",
          "workingLatex": "v_x = 1,\\; v_y = 1",
          "explanation": "Read the $\\mathbf{i}$ and $\\mathbf{j}$ components of velocity.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Square the components",
          "workingLatex": "v_x^{2} = 1,\\; v_y^{2} = 1",
          "explanation": "Speed uses squared components.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Add and square root",
          "workingLatex": "|\\mathbf{v}| = \\sqrt{1 + 1}",
          "explanation": "Combine under the square root.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate",
          "workingLatex": "|\\mathbf{v}| = 1.41\\ \\text{m s}^{-1}",
          "explanation": "The scalar speed.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "\\text{Speed} = 1.41\\ \\text{m s}^{-1}",
          "explanation": "Include units.",
          "diagram": null
        }
      ],
      "finalAnswer": "Speed $= 1.41\\ \\text{m s}^{-1}$"
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Further kinematics",
    "subtopicId": "al.y2.mech.further-kinematics",
    "questionDiagram": null,
    "id": "al.y2.mech.further-kinematics.q027",
    "tags": [
      "8-15-17",
      "speed",
      "magnitude"
    ],
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "numeric",
    "questionText": "A particle has $\\mathbf{v} = 8\\mathbf{i} + 15\\mathbf{j}$. Find its speed.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall speed formula",
          "workingLatex": "|\\mathbf{v}| = \\sqrt{v_x^{2} + v_y^{2}}",
          "explanation": "Speed is the magnitude of the velocity vector.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify components",
          "workingLatex": "v_x = 8,\\; v_y = 15",
          "explanation": "Read the $\\mathbf{i}$ and $\\mathbf{j}$ components of velocity.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Square the components",
          "workingLatex": "v_x^{2} = 64,\\; v_y^{2} = 225",
          "explanation": "Speed uses squared components.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Add and square root",
          "workingLatex": "|\\mathbf{v}| = \\sqrt{64 + 225}",
          "explanation": "Combine under the square root.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate",
          "workingLatex": "|\\mathbf{v}| = 17\\ \\text{m s}^{-1}",
          "explanation": "The scalar speed.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "\\text{Speed} = 17\\ \\text{m s}^{-1}",
          "explanation": "Include units.",
          "diagram": null
        }
      ],
      "finalAnswer": "Speed $= 17\\ \\text{m s}^{-1}$"
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Further kinematics",
    "subtopicId": "al.y2.mech.further-kinematics",
    "questionDiagram": null,
    "id": "al.y2.mech.further-kinematics.q028",
    "tags": [
      "9-12-15",
      "speed",
      "magnitude"
    ],
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "numeric",
    "questionText": "Calculate the speed when $\\mathbf{v} = 9\\mathbf{i} + 12\\mathbf{j}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall speed formula",
          "workingLatex": "|\\mathbf{v}| = \\sqrt{v_x^{2} + v_y^{2}}",
          "explanation": "Speed is the magnitude of the velocity vector.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify components",
          "workingLatex": "v_x = 9,\\; v_y = 12",
          "explanation": "Read the $\\mathbf{i}$ and $\\mathbf{j}$ components of velocity.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Square the components",
          "workingLatex": "v_x^{2} = 81,\\; v_y^{2} = 144",
          "explanation": "Speed uses squared components.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Add and square root",
          "workingLatex": "|\\mathbf{v}| = \\sqrt{81 + 144}",
          "explanation": "Combine under the square root.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate",
          "workingLatex": "|\\mathbf{v}| = 15\\ \\text{m s}^{-1}",
          "explanation": "The scalar speed.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "\\text{Speed} = 15\\ \\text{m s}^{-1}",
          "explanation": "Include units.",
          "diagram": null
        }
      ],
      "finalAnswer": "Speed $= 15\\ \\text{m s}^{-1}$"
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Further kinematics",
    "subtopicId": "al.y2.mech.further-kinematics",
    "questionDiagram": null,
    "id": "al.y2.mech.further-kinematics.q029",
    "tags": [
      "45-deg",
      "direction",
      "bearing"
    ],
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "numeric",
    "questionText": "Find the direction of motion when $\\mathbf{v} = \\mathbf{i} + \\mathbf{j}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Direction from components",
          "workingLatex": "\\tan\\theta = \\dfrac{v_y}{v_x}",
          "explanation": "The direction of motion follows from the velocity components.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute components",
          "workingLatex": "\\tan\\theta = \\dfrac{1}{1}",
          "explanation": "Use the given $\\mathbf{i}$ and $\\mathbf{j}$ parts.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find the angle",
          "workingLatex": "\\theta = 45°",
          "explanation": "Use inverse tangent, noting the quadrant.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Interpret",
          "workingLatex": "\\text{Angle measured from the positive } \\mathbf{i} \\text{ direction}",
          "explanation": "Standard anticlockwise bearing from the horizontal.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Verify quadrant",
          "workingLatex": "\\text{Signs of } v_x \\text{ and } v_y \\text{ determine quadrant}",
          "explanation": "Ensure the angle is in the correct direction.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "\\theta = 45°",
          "explanation": "Direction of motion.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\theta = 45°$ (from the positive $\\mathbf{i}$ direction)"
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Further kinematics",
    "subtopicId": "al.y2.mech.further-kinematics",
    "questionDiagram": null,
    "id": "al.y2.mech.further-kinematics.q030",
    "tags": [
      "60-deg",
      "direction",
      "bearing"
    ],
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "numeric",
    "questionText": "A particle has $\\mathbf{v} = \\mathbf{i} + \\sqrt{3}\\mathbf{j}$. Find the angle its velocity makes with the $\\mathbf{i}$ direction.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Direction from components",
          "workingLatex": "\\tan\\theta = \\dfrac{v_y}{v_x}",
          "explanation": "The direction of motion follows from the velocity components.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute components",
          "workingLatex": "\\tan\\theta = \\dfrac{1.7320508075688772}{1}",
          "explanation": "Use the given $\\mathbf{i}$ and $\\mathbf{j}$ parts.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find the angle",
          "workingLatex": "\\theta = 60°",
          "explanation": "Use inverse tangent, noting the quadrant.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Interpret",
          "workingLatex": "\\text{Angle measured from the positive } \\mathbf{i} \\text{ direction}",
          "explanation": "Standard anticlockwise bearing from the horizontal.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Verify quadrant",
          "workingLatex": "\\text{Signs of } v_x \\text{ and } v_y \\text{ determine quadrant}",
          "explanation": "Ensure the angle is in the correct direction.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "\\theta = 60°",
          "explanation": "Direction of motion.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\theta = 60°$ (from the positive $\\mathbf{i}$ direction)"
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Further kinematics",
    "subtopicId": "al.y2.mech.further-kinematics",
    "questionDiagram": null,
    "id": "al.y2.mech.further-kinematics.q031",
    "tags": [
      "constant-a",
      "integration",
      "velocity"
    ],
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "written",
    "questionText": "A particle moves with constant acceleration $\\mathbf{a} = 4\\mathbf{i}$. At $t = 0$, $\\mathbf{v} = 2\\mathbf{i}$. Find $\\mathbf{v}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Integrate acceleration",
          "workingLatex": "\\mathbf{v} = \\int \\mathbf{a}\\, dt",
          "explanation": "Velocity is found by integrating acceleration.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Integrate $\\mathbf{i}$ component",
          "workingLatex": "v_x = 4t + 2",
          "explanation": "Integrate the horizontal component and include a constant.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Integrate $\\mathbf{j}$ component",
          "workingLatex": "v_y = 0",
          "explanation": "Integrate the vertical component similarly.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply initial velocity",
          "workingLatex": "\\text{At } t = 0:\\; v_x = 2,\\; v_y = 0",
          "explanation": "Use given initial conditions to find constants.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Form velocity vector",
          "workingLatex": "\\mathbf{v} = 4t + 2\\mathbf{i} + 0\\mathbf{j}",
          "explanation": "Write the complete velocity expression.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "\\mathbf{v} = 4t + 2\\mathbf{i} + 0\\mathbf{j}",
          "explanation": "Velocity as a function of time.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Use vector notation",
          "workingLatex": "\\mathbf{r} = x\\mathbf{i} + y\\mathbf{j}",
          "explanation": "Write position, velocity and acceleration as vectors in the plane.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Differentiate component-wise",
          "workingLatex": "\\dfrac{d}{dt}(x\\mathbf{i} + y\\mathbf{j}) = \\dot{x}\\mathbf{i} + \\dot{y}\\mathbf{j}",
          "explanation": "Treat $\\mathbf{i}$ and $\\mathbf{j}$ components separately.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Integrate component-wise",
          "workingLatex": "\\int (a_x\\mathbf{i} + a_y\\mathbf{j})\\,dt",
          "explanation": "Integrate each component and add a vector constant.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\mathbf{v} = 4t + 2\\mathbf{i} + 0\\mathbf{j}$"
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Further kinematics",
    "subtopicId": "al.y2.mech.further-kinematics",
    "questionDiagram": null,
    "id": "al.y2.mech.further-kinematics.q032",
    "tags": [
      "vertical",
      "integration",
      "velocity"
    ],
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "written",
    "questionText": "Given $\\mathbf{a} = 6\\mathbf{j}$ and $\\mathbf{v}(0) = 3\\mathbf{j}$, find $\\mathbf{v}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Integrate acceleration",
          "workingLatex": "\\mathbf{v} = \\int \\mathbf{a}\\, dt",
          "explanation": "Velocity is found by integrating acceleration.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Integrate $\\mathbf{i}$ component",
          "workingLatex": "v_x = 0",
          "explanation": "Integrate the horizontal component and include a constant.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Integrate $\\mathbf{j}$ component",
          "workingLatex": "v_y = 6t + 3",
          "explanation": "Integrate the vertical component similarly.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply initial velocity",
          "workingLatex": "\\text{At } t = 0:\\; v_x = 0,\\; v_y = 3",
          "explanation": "Use given initial conditions to find constants.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Form velocity vector",
          "workingLatex": "\\mathbf{v} = 0\\mathbf{i} + 6t + 3\\mathbf{j}",
          "explanation": "Write the complete velocity expression.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "\\mathbf{v} = 0\\mathbf{i} + 6t + 3\\mathbf{j}",
          "explanation": "Velocity as a function of time.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Use vector notation",
          "workingLatex": "\\mathbf{r} = x\\mathbf{i} + y\\mathbf{j}",
          "explanation": "Write position, velocity and acceleration as vectors in the plane.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Differentiate component-wise",
          "workingLatex": "\\dfrac{d}{dt}(x\\mathbf{i} + y\\mathbf{j}) = \\dot{x}\\mathbf{i} + \\dot{y}\\mathbf{j}",
          "explanation": "Treat $\\mathbf{i}$ and $\\mathbf{j}$ components separately.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Integrate component-wise",
          "workingLatex": "\\int (a_x\\mathbf{i} + a_y\\mathbf{j})\\,dt",
          "explanation": "Integrate each component and add a vector constant.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\mathbf{v} = 0\\mathbf{i} + 6t + 3\\mathbf{j}$"
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Further kinematics",
    "subtopicId": "al.y2.mech.further-kinematics",
    "questionDiagram": null,
    "id": "al.y2.mech.further-kinematics.q033",
    "tags": [
      "variable-a",
      "integration",
      "velocity"
    ],
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "written",
    "questionText": "A particle has $\\mathbf{a} = 2t\\mathbf{i} + 4\\mathbf{j}$ with $\\mathbf{v}(0) = \\mathbf{0}$. Find $\\mathbf{v}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Integrate acceleration",
          "workingLatex": "\\mathbf{v} = \\int \\mathbf{a}\\, dt",
          "explanation": "Velocity is found by integrating acceleration.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Integrate $\\mathbf{i}$ component",
          "workingLatex": "v_x = t^{2}",
          "explanation": "Integrate the horizontal component and include a constant.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Integrate $\\mathbf{j}$ component",
          "workingLatex": "v_y = 2t^{2}",
          "explanation": "Integrate the vertical component similarly.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply initial velocity",
          "workingLatex": "\\text{At } t = 0:\\; v_x = 0,\\; v_y = 0",
          "explanation": "Use given initial conditions to find constants.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Form velocity vector",
          "workingLatex": "\\mathbf{v} = t^{2}\\mathbf{i} + 2t^{2}\\mathbf{j}",
          "explanation": "Write the complete velocity expression.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "\\mathbf{v} = t^{2}\\mathbf{i} + 2t^{2}\\mathbf{j}",
          "explanation": "Velocity as a function of time.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Use vector notation",
          "workingLatex": "\\mathbf{r} = x\\mathbf{i} + y\\mathbf{j}",
          "explanation": "Write position, velocity and acceleration as vectors in the plane.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Differentiate component-wise",
          "workingLatex": "\\dfrac{d}{dt}(x\\mathbf{i} + y\\mathbf{j}) = \\dot{x}\\mathbf{i} + \\dot{y}\\mathbf{j}",
          "explanation": "Treat $\\mathbf{i}$ and $\\mathbf{j}$ components separately.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Integrate component-wise",
          "workingLatex": "\\int (a_x\\mathbf{i} + a_y\\mathbf{j})\\,dt",
          "explanation": "Integrate each component and add a vector constant.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\mathbf{v} = t^{2}\\mathbf{i} + 2t^{2}\\mathbf{j}$"
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Further kinematics",
    "subtopicId": "al.y2.mech.further-kinematics",
    "questionDiagram": null,
    "id": "al.y2.mech.further-kinematics.q034",
    "tags": [
      "mixed",
      "integration",
      "velocity"
    ],
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "written",
    "questionText": "Given $\\mathbf{a} = 3\\mathbf{i} + 2t\\mathbf{j}$ and $\\mathbf{v}(0) = \\mathbf{i} + 2\\mathbf{j}$, find $\\mathbf{v}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Integrate acceleration",
          "workingLatex": "\\mathbf{v} = \\int \\mathbf{a}\\, dt",
          "explanation": "Velocity is found by integrating acceleration.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Integrate $\\mathbf{i}$ component",
          "workingLatex": "v_x = 3t + 1",
          "explanation": "Integrate the horizontal component and include a constant.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Integrate $\\mathbf{j}$ component",
          "workingLatex": "v_y = t^{2} + 2",
          "explanation": "Integrate the vertical component similarly.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply initial velocity",
          "workingLatex": "\\text{At } t = 0:\\; v_x = 1,\\; v_y = 2",
          "explanation": "Use given initial conditions to find constants.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Form velocity vector",
          "workingLatex": "\\mathbf{v} = 3t + 1\\mathbf{i} + t^{2} + 2\\mathbf{j}",
          "explanation": "Write the complete velocity expression.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "\\mathbf{v} = 3t + 1\\mathbf{i} + t^{2} + 2\\mathbf{j}",
          "explanation": "Velocity as a function of time.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Use vector notation",
          "workingLatex": "\\mathbf{r} = x\\mathbf{i} + y\\mathbf{j}",
          "explanation": "Write position, velocity and acceleration as vectors in the plane.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Differentiate component-wise",
          "workingLatex": "\\dfrac{d}{dt}(x\\mathbf{i} + y\\mathbf{j}) = \\dot{x}\\mathbf{i} + \\dot{y}\\mathbf{j}",
          "explanation": "Treat $\\mathbf{i}$ and $\\mathbf{j}$ components separately.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Integrate component-wise",
          "workingLatex": "\\int (a_x\\mathbf{i} + a_y\\mathbf{j})\\,dt",
          "explanation": "Integrate each component and add a vector constant.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\mathbf{v} = 3t + 1\\mathbf{i} + t^{2} + 2\\mathbf{j}$"
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Further kinematics",
    "subtopicId": "al.y2.mech.further-kinematics",
    "questionDiagram": null,
    "id": "al.y2.mech.further-kinematics.q035",
    "tags": [
      "projectile-style",
      "integration",
      "velocity"
    ],
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "written",
    "questionText": "A particle has $\\mathbf{a} = -10\\mathbf{j}$ (gravity) with $\\mathbf{v}(0) = 5\\mathbf{i} + 20\\mathbf{j}$. Find $\\mathbf{v}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Integrate acceleration",
          "workingLatex": "\\mathbf{v} = \\int \\mathbf{a}\\, dt",
          "explanation": "Velocity is found by integrating acceleration.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Integrate $\\mathbf{i}$ component",
          "workingLatex": "v_x = 5",
          "explanation": "Integrate the horizontal component and include a constant.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Integrate $\\mathbf{j}$ component",
          "workingLatex": "v_y = -10t + 20",
          "explanation": "Integrate the vertical component similarly.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply initial velocity",
          "workingLatex": "\\text{At } t = 0:\\; v_x = 5,\\; v_y = 20",
          "explanation": "Use given initial conditions to find constants.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Form velocity vector",
          "workingLatex": "\\mathbf{v} = 5\\mathbf{i} + -10t + 20\\mathbf{j}",
          "explanation": "Write the complete velocity expression.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "\\mathbf{v} = 5\\mathbf{i} + -10t + 20\\mathbf{j}",
          "explanation": "Velocity as a function of time.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Use vector notation",
          "workingLatex": "\\mathbf{r} = x\\mathbf{i} + y\\mathbf{j}",
          "explanation": "Write position, velocity and acceleration as vectors in the plane.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Differentiate component-wise",
          "workingLatex": "\\dfrac{d}{dt}(x\\mathbf{i} + y\\mathbf{j}) = \\dot{x}\\mathbf{i} + \\dot{y}\\mathbf{j}",
          "explanation": "Treat $\\mathbf{i}$ and $\\mathbf{j}$ components separately.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Integrate component-wise",
          "workingLatex": "\\int (a_x\\mathbf{i} + a_y\\mathbf{j})\\,dt",
          "explanation": "Integrate each component and add a vector constant.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\mathbf{v} = 5\\mathbf{i} + -10t + 20\\mathbf{j}$"
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Further kinematics",
    "subtopicId": "al.y2.mech.further-kinematics",
    "questionDiagram": null,
    "id": "al.y2.mech.further-kinematics.q036",
    "tags": [
      "from-origin",
      "integration",
      "position"
    ],
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "written",
    "questionText": "Given $\\mathbf{v} = 4\\mathbf{i} + 2t\\mathbf{j}$ and $\\mathbf{r}(0) = \\mathbf{0}$, find $\\mathbf{r}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Integrate velocity",
          "workingLatex": "\\mathbf{r} = \\int \\mathbf{v}\\, dt",
          "explanation": "Position is the integral of velocity.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Integrate $\\mathbf{i}$ component",
          "workingLatex": "x = 4t",
          "explanation": "Integrate the horizontal velocity.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Integrate $\\mathbf{j}$ component",
          "workingLatex": "y = t^{2}",
          "explanation": "Integrate the vertical velocity.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply initial position",
          "workingLatex": "\\text{At } t = 0:\\; \\mathbf{r} = 0\\mathbf{i} + 0\\mathbf{j}",
          "explanation": "Use the starting position to fix constants.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Form position vector",
          "workingLatex": "\\mathbf{r} = 4t\\mathbf{i} + t^{2}\\mathbf{j}",
          "explanation": "Complete position vector.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "\\mathbf{r} = 4t\\mathbf{i} + t^{2}\\mathbf{j}",
          "explanation": "Position at time $t$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Use vector notation",
          "workingLatex": "\\mathbf{r} = x\\mathbf{i} + y\\mathbf{j}",
          "explanation": "Write position, velocity and acceleration as vectors in the plane.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Differentiate component-wise",
          "workingLatex": "\\dfrac{d}{dt}(x\\mathbf{i} + y\\mathbf{j}) = \\dot{x}\\mathbf{i} + \\dot{y}\\mathbf{j}",
          "explanation": "Treat $\\mathbf{i}$ and $\\mathbf{j}$ components separately.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Integrate component-wise",
          "workingLatex": "\\int (a_x\\mathbf{i} + a_y\\mathbf{j})\\,dt",
          "explanation": "Integrate each component and add a vector constant.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\mathbf{r} = 4t\\mathbf{i} + t^{2}\\mathbf{j}$"
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Further kinematics",
    "subtopicId": "al.y2.mech.further-kinematics",
    "questionDiagram": null,
    "id": "al.y2.mech.further-kinematics.q037",
    "tags": [
      "IC",
      "integration",
      "position"
    ],
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "written",
    "questionText": "A particle has $\\mathbf{v} = 3t\\mathbf{i} + 6\\mathbf{j}$ with $\\mathbf{r}(0) = \\mathbf{i} + 2\\mathbf{j}$. Find $\\mathbf{r}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Integrate velocity",
          "workingLatex": "\\mathbf{r} = \\int \\mathbf{v}\\, dt",
          "explanation": "Position is the integral of velocity.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Integrate $\\mathbf{i}$ component",
          "workingLatex": "x = 1 + \\tfrac{3}{2}t^{2}",
          "explanation": "Integrate the horizontal velocity.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Integrate $\\mathbf{j}$ component",
          "workingLatex": "y = 2 + 6t",
          "explanation": "Integrate the vertical velocity.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply initial position",
          "workingLatex": "\\text{At } t = 0:\\; \\mathbf{r} = 1\\mathbf{i} + 2\\mathbf{j}",
          "explanation": "Use the starting position to fix constants.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Form position vector",
          "workingLatex": "\\mathbf{r} = 1 + \\tfrac{3}{2}t^{2}\\mathbf{i} + 2 + 6t\\mathbf{j}",
          "explanation": "Complete position vector.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "\\mathbf{r} = 1 + \\tfrac{3}{2}t^{2}\\mathbf{i} + 2 + 6t\\mathbf{j}",
          "explanation": "Position at time $t$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Use vector notation",
          "workingLatex": "\\mathbf{r} = x\\mathbf{i} + y\\mathbf{j}",
          "explanation": "Write position, velocity and acceleration as vectors in the plane.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Differentiate component-wise",
          "workingLatex": "\\dfrac{d}{dt}(x\\mathbf{i} + y\\mathbf{j}) = \\dot{x}\\mathbf{i} + \\dot{y}\\mathbf{j}",
          "explanation": "Treat $\\mathbf{i}$ and $\\mathbf{j}$ components separately.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Integrate component-wise",
          "workingLatex": "\\int (a_x\\mathbf{i} + a_y\\mathbf{j})\\,dt",
          "explanation": "Integrate each component and add a vector constant.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\mathbf{r} = 1 + \\tfrac{3}{2}t^{2}\\mathbf{i} + 2 + 6t\\mathbf{j}$"
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Further kinematics",
    "subtopicId": "al.y2.mech.further-kinematics",
    "questionDiagram": null,
    "id": "al.y2.mech.further-kinematics.q038",
    "tags": [
      "cubic-y",
      "integration",
      "position"
    ],
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "written",
    "questionText": "Given $\\mathbf{v} = 2t\\mathbf{i} + t^{2}\\mathbf{j}$ and $\\mathbf{r}(0) = 5\\mathbf{j}$, find $\\mathbf{r}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Integrate velocity",
          "workingLatex": "\\mathbf{r} = \\int \\mathbf{v}\\, dt",
          "explanation": "Position is the integral of velocity.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Integrate $\\mathbf{i}$ component",
          "workingLatex": "x = t^{2}",
          "explanation": "Integrate the horizontal velocity.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Integrate $\\mathbf{j}$ component",
          "workingLatex": "y = 5 + \\tfrac{t^{3}}{3}",
          "explanation": "Integrate the vertical velocity.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply initial position",
          "workingLatex": "\\text{At } t = 0:\\; \\mathbf{r} = 0\\mathbf{i} + 5\\mathbf{j}",
          "explanation": "Use the starting position to fix constants.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Form position vector",
          "workingLatex": "\\mathbf{r} = t^{2}\\mathbf{i} + 5 + \\tfrac{t^{3}}{3}\\mathbf{j}",
          "explanation": "Complete position vector.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "\\mathbf{r} = t^{2}\\mathbf{i} + 5 + \\tfrac{t^{3}}{3}\\mathbf{j}",
          "explanation": "Position at time $t$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Use vector notation",
          "workingLatex": "\\mathbf{r} = x\\mathbf{i} + y\\mathbf{j}",
          "explanation": "Write position, velocity and acceleration as vectors in the plane.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Differentiate component-wise",
          "workingLatex": "\\dfrac{d}{dt}(x\\mathbf{i} + y\\mathbf{j}) = \\dot{x}\\mathbf{i} + \\dot{y}\\mathbf{j}",
          "explanation": "Treat $\\mathbf{i}$ and $\\mathbf{j}$ components separately.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Integrate component-wise",
          "workingLatex": "\\int (a_x\\mathbf{i} + a_y\\mathbf{j})\\,dt",
          "explanation": "Integrate each component and add a vector constant.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\mathbf{r} = t^{2}\\mathbf{i} + 5 + \\tfrac{t^{3}}{3}\\mathbf{j}$"
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Further kinematics",
    "subtopicId": "al.y2.mech.further-kinematics",
    "questionDiagram": null,
    "id": "al.y2.mech.further-kinematics.q039",
    "tags": [
      "horizontal-start",
      "integration",
      "position"
    ],
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "written",
    "questionText": "Find $\\mathbf{r}$ if $\\mathbf{v} = 5\\mathbf{i} + 4t\\mathbf{j}$ and $\\mathbf{r}(0) = 3\\mathbf{i}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Integrate velocity",
          "workingLatex": "\\mathbf{r} = \\int \\mathbf{v}\\, dt",
          "explanation": "Position is the integral of velocity.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Integrate $\\mathbf{i}$ component",
          "workingLatex": "x = 3 + 5t",
          "explanation": "Integrate the horizontal velocity.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Integrate $\\mathbf{j}$ component",
          "workingLatex": "y = 2t^{2}",
          "explanation": "Integrate the vertical velocity.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply initial position",
          "workingLatex": "\\text{At } t = 0:\\; \\mathbf{r} = 3\\mathbf{i} + 0\\mathbf{j}",
          "explanation": "Use the starting position to fix constants.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Form position vector",
          "workingLatex": "\\mathbf{r} = 3 + 5t\\mathbf{i} + 2t^{2}\\mathbf{j}",
          "explanation": "Complete position vector.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "\\mathbf{r} = 3 + 5t\\mathbf{i} + 2t^{2}\\mathbf{j}",
          "explanation": "Position at time $t$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Use vector notation",
          "workingLatex": "\\mathbf{r} = x\\mathbf{i} + y\\mathbf{j}",
          "explanation": "Write position, velocity and acceleration as vectors in the plane.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Differentiate component-wise",
          "workingLatex": "\\dfrac{d}{dt}(x\\mathbf{i} + y\\mathbf{j}) = \\dot{x}\\mathbf{i} + \\dot{y}\\mathbf{j}",
          "explanation": "Treat $\\mathbf{i}$ and $\\mathbf{j}$ components separately.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Integrate component-wise",
          "workingLatex": "\\int (a_x\\mathbf{i} + a_y\\mathbf{j})\\,dt",
          "explanation": "Integrate each component and add a vector constant.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\mathbf{r} = 3 + 5t\\mathbf{i} + 2t^{2}\\mathbf{j}$"
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Further kinematics",
    "subtopicId": "al.y2.mech.further-kinematics",
    "questionDiagram": null,
    "id": "al.y2.mech.further-kinematics.q040",
    "tags": [
      "linear-v",
      "integration",
      "position"
    ],
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "written",
    "questionText": "A particle has $\\mathbf{v} = t\\mathbf{i} + 3\\mathbf{j}$ starting from the origin. Find $\\mathbf{r}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Integrate velocity",
          "workingLatex": "\\mathbf{r} = \\int \\mathbf{v}\\, dt",
          "explanation": "Position is the integral of velocity.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Integrate $\\mathbf{i}$ component",
          "workingLatex": "x = \\tfrac{t^{2}}{2}",
          "explanation": "Integrate the horizontal velocity.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Integrate $\\mathbf{j}$ component",
          "workingLatex": "y = 3t",
          "explanation": "Integrate the vertical velocity.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply initial position",
          "workingLatex": "\\text{At } t = 0:\\; \\mathbf{r} = 0\\mathbf{i} + 0\\mathbf{j}",
          "explanation": "Use the starting position to fix constants.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Form position vector",
          "workingLatex": "\\mathbf{r} = \\tfrac{t^{2}}{2}\\mathbf{i} + 3t\\mathbf{j}",
          "explanation": "Complete position vector.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "\\mathbf{r} = \\tfrac{t^{2}}{2}\\mathbf{i} + 3t\\mathbf{j}",
          "explanation": "Position at time $t$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Use vector notation",
          "workingLatex": "\\mathbf{r} = x\\mathbf{i} + y\\mathbf{j}",
          "explanation": "Write position, velocity and acceleration as vectors in the plane.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Differentiate component-wise",
          "workingLatex": "\\dfrac{d}{dt}(x\\mathbf{i} + y\\mathbf{j}) = \\dot{x}\\mathbf{i} + \\dot{y}\\mathbf{j}",
          "explanation": "Treat $\\mathbf{i}$ and $\\mathbf{j}$ components separately.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Integrate component-wise",
          "workingLatex": "\\int (a_x\\mathbf{i} + a_y\\mathbf{j})\\,dt",
          "explanation": "Integrate each component and add a vector constant.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\mathbf{r} = \\tfrac{t^{2}}{2}\\mathbf{i} + 3t\\mathbf{j}$"
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Further kinematics",
    "subtopicId": "al.y2.mech.further-kinematics",
    "questionDiagram": null,
    "id": "al.y2.mech.further-kinematics.q041",
    "tags": [
      "1D",
      "at-rest"
    ],
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "numeric",
    "questionText": "A particle has $\\mathbf{v} = (2t-4)\\mathbf{i}$. Find when it is instantaneously at rest.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Condition for instantaneous rest",
          "workingLatex": "\\mathbf{v} = \\mathbf{0}",
          "explanation": "The particle is at rest when both velocity components are zero.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Set horizontal component to zero",
          "workingLatex": "2t - 4 = 0",
          "explanation": "Solve the $\\mathbf{i}$ component equation.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Set vertical component to zero",
          "workingLatex": "0 = 0",
          "explanation": "Solve the $\\mathbf{j}$ component equation.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Solve simultaneously",
          "workingLatex": "t = 2",
          "explanation": "Find the time(s) satisfying both conditions.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check validity",
          "workingLatex": "\\text{Verify in original velocity expressions}",
          "explanation": "Substitute back to confirm both components vanish.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "t = 2\\ \\text{s}",
          "explanation": "Time when the particle is instantaneously at rest.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Use vector notation",
          "workingLatex": "\\mathbf{r} = x\\mathbf{i} + y\\mathbf{j}",
          "explanation": "Write position, velocity and acceleration as vectors in the plane.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Differentiate component-wise",
          "workingLatex": "\\dfrac{d}{dt}(x\\mathbf{i} + y\\mathbf{j}) = \\dot{x}\\mathbf{i} + \\dot{y}\\mathbf{j}",
          "explanation": "Treat $\\mathbf{i}$ and $\\mathbf{j}$ components separately.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Integrate component-wise",
          "workingLatex": "\\int (a_x\\mathbf{i} + a_y\\mathbf{j})\\,dt",
          "explanation": "Integrate each component and add a vector constant.",
          "diagram": null
        }
      ],
      "finalAnswer": "$t = 2\\ \\text{s}$"
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Further kinematics",
    "subtopicId": "al.y2.mech.further-kinematics",
    "questionDiagram": null,
    "id": "al.y2.mech.further-kinematics.q042",
    "tags": [
      "vertical",
      "at-rest"
    ],
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "numeric",
    "questionText": "Given $\\mathbf{v} = (6-2t)\\mathbf{j}$, find the time when the particle is at rest.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Condition for instantaneous rest",
          "workingLatex": "\\mathbf{v} = \\mathbf{0}",
          "explanation": "The particle is at rest when both velocity components are zero.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Set horizontal component to zero",
          "workingLatex": "0 = 0",
          "explanation": "Solve the $\\mathbf{i}$ component equation.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Set vertical component to zero",
          "workingLatex": "6 - 2t = 0",
          "explanation": "Solve the $\\mathbf{j}$ component equation.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Solve simultaneously",
          "workingLatex": "t = 3",
          "explanation": "Find the time(s) satisfying both conditions.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check validity",
          "workingLatex": "\\text{Verify in original velocity expressions}",
          "explanation": "Substitute back to confirm both components vanish.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "t = 3\\ \\text{s}",
          "explanation": "Time when the particle is instantaneously at rest.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Use vector notation",
          "workingLatex": "\\mathbf{r} = x\\mathbf{i} + y\\mathbf{j}",
          "explanation": "Write position, velocity and acceleration as vectors in the plane.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Differentiate component-wise",
          "workingLatex": "\\dfrac{d}{dt}(x\\mathbf{i} + y\\mathbf{j}) = \\dot{x}\\mathbf{i} + \\dot{y}\\mathbf{j}",
          "explanation": "Treat $\\mathbf{i}$ and $\\mathbf{j}$ components separately.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Integrate component-wise",
          "workingLatex": "\\int (a_x\\mathbf{i} + a_y\\mathbf{j})\\,dt",
          "explanation": "Integrate each component and add a vector constant.",
          "diagram": null
        }
      ],
      "finalAnswer": "$t = 3\\ \\text{s}$"
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Further kinematics",
    "subtopicId": "al.y2.mech.further-kinematics",
    "questionDiagram": null,
    "id": "al.y2.mech.further-kinematics.q043",
    "tags": [
      "2D",
      "at-rest"
    ],
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "numeric",
    "questionText": "A particle moves with $\\mathbf{v} = (3t-6)\\mathbf{i} + (4t-8)\\mathbf{j}$. Find when it is instantaneously at rest.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Condition for instantaneous rest",
          "workingLatex": "\\mathbf{v} = \\mathbf{0}",
          "explanation": "The particle is at rest when both velocity components are zero.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Set horizontal component to zero",
          "workingLatex": "3t - 6 = 0",
          "explanation": "Solve the $\\mathbf{i}$ component equation.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Set vertical component to zero",
          "workingLatex": "4t - 8 = 0",
          "explanation": "Solve the $\\mathbf{j}$ component equation.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Solve simultaneously",
          "workingLatex": "t = 2",
          "explanation": "Find the time(s) satisfying both conditions.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check validity",
          "workingLatex": "\\text{Verify in original velocity expressions}",
          "explanation": "Substitute back to confirm both components vanish.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "t = 2\\ \\text{s}",
          "explanation": "Time when the particle is instantaneously at rest.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Use vector notation",
          "workingLatex": "\\mathbf{r} = x\\mathbf{i} + y\\mathbf{j}",
          "explanation": "Write position, velocity and acceleration as vectors in the plane.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Differentiate component-wise",
          "workingLatex": "\\dfrac{d}{dt}(x\\mathbf{i} + y\\mathbf{j}) = \\dot{x}\\mathbf{i} + \\dot{y}\\mathbf{j}",
          "explanation": "Treat $\\mathbf{i}$ and $\\mathbf{j}$ components separately.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Integrate component-wise",
          "workingLatex": "\\int (a_x\\mathbf{i} + a_y\\mathbf{j})\\,dt",
          "explanation": "Integrate each component and add a vector constant.",
          "diagram": null
        }
      ],
      "finalAnswer": "$t = 2\\ \\text{s}$"
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Further kinematics",
    "subtopicId": "al.y2.mech.further-kinematics",
    "questionDiagram": null,
    "id": "al.y2.mech.further-kinematics.q044",
    "tags": [
      "suvat-vector",
      "constant-acceleration"
    ],
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "written",
    "questionText": "A particle starts from rest with acceleration $\\mathbf{a} = 2\\mathbf{i}$ m s$^{-2}$. Find $\\mathbf{v}$ at $t = 4$ s.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Constant acceleration vector",
          "workingLatex": "\\mathbf{a} = 2\\mathbf{i}",
          "explanation": "Acceleration is constant in the $\\mathbf{i}$ direction.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Integrate to velocity",
          "workingLatex": "\\mathbf{v} = 3\\mathbf{i} + 2t\\mathbf{i}",
          "explanation": "Velocity = initial velocity + $at$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Integrate to position",
          "workingLatex": "\\mathbf{r} = 0\\mathbf{i} + 3t\\mathbf{i} + \\tfrac{1}{2}2t^{2}\\mathbf{i}",
          "explanation": "Use $\\mathbf{r} = \\mathbf{r}_0 + \\mathbf{u}t + \\tfrac{1}{2}\\mathbf{a}t^{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate at given time",
          "workingLatex": "t = 4",
          "explanation": "Substitute the required time.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Calculate velocity",
          "workingLatex": "\\mathbf{v} = 11\\mathbf{i}",
          "explanation": "Speed and direction at that instant.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "\\mathbf{v} = 11\\mathbf{i}\\ \\text{m s}^{-1}",
          "explanation": "Velocity at $t = 4$ s.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Use vector notation",
          "workingLatex": "\\mathbf{r} = x\\mathbf{i} + y\\mathbf{j}",
          "explanation": "Write position, velocity and acceleration as vectors in the plane.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Differentiate component-wise",
          "workingLatex": "\\dfrac{d}{dt}(x\\mathbf{i} + y\\mathbf{j}) = \\dot{x}\\mathbf{i} + \\dot{y}\\mathbf{j}",
          "explanation": "Treat $\\mathbf{i}$ and $\\mathbf{j}$ components separately.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Integrate component-wise",
          "workingLatex": "\\int (a_x\\mathbf{i} + a_y\\mathbf{j})\\,dt",
          "explanation": "Integrate each component and add a vector constant.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\mathbf{v} = 11\\mathbf{i}\\ \\text{m s}^{-1}$ at $t = 4\\ \\text{s}$"
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Further kinematics",
    "subtopicId": "al.y2.mech.further-kinematics",
    "questionDiagram": null,
    "id": "al.y2.mech.further-kinematics.q045",
    "tags": [
      "deceleration",
      "constant-acceleration"
    ],
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "written",
    "questionText": "A particle has $\\mathbf{a} = -4\\mathbf{i}$ and $\\mathbf{v}(0) = 10\\mathbf{i}$. Find $\\mathbf{v}$ at $t = 2$ s.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Constant acceleration vector",
          "workingLatex": "\\mathbf{a} = -4\\mathbf{i}",
          "explanation": "Acceleration is constant in the $\\mathbf{i}$ direction.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Integrate to velocity",
          "workingLatex": "\\mathbf{v} = 10\\mathbf{i} + -4t\\mathbf{i}",
          "explanation": "Velocity = initial velocity + $at$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Integrate to position",
          "workingLatex": "\\mathbf{r} = 0\\mathbf{i} + 10t\\mathbf{i} + \\tfrac{1}{2}-4t^{2}\\mathbf{i}",
          "explanation": "Use $\\mathbf{r} = \\mathbf{r}_0 + \\mathbf{u}t + \\tfrac{1}{2}\\mathbf{a}t^{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate at given time",
          "workingLatex": "t = 2",
          "explanation": "Substitute the required time.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Calculate velocity",
          "workingLatex": "\\mathbf{v} = 2\\mathbf{i}",
          "explanation": "Speed and direction at that instant.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "\\mathbf{v} = 2\\mathbf{i}\\ \\text{m s}^{-1}",
          "explanation": "Velocity at $t = 2$ s.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Use vector notation",
          "workingLatex": "\\mathbf{r} = x\\mathbf{i} + y\\mathbf{j}",
          "explanation": "Write position, velocity and acceleration as vectors in the plane.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Differentiate component-wise",
          "workingLatex": "\\dfrac{d}{dt}(x\\mathbf{i} + y\\mathbf{j}) = \\dot{x}\\mathbf{i} + \\dot{y}\\mathbf{j}",
          "explanation": "Treat $\\mathbf{i}$ and $\\mathbf{j}$ components separately.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Integrate component-wise",
          "workingLatex": "\\int (a_x\\mathbf{i} + a_y\\mathbf{j})\\,dt",
          "explanation": "Integrate each component and add a vector constant.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\mathbf{v} = 2\\mathbf{i}\\ \\text{m s}^{-1}$ at $t = 2\\ \\text{s}$"
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Further kinematics",
    "subtopicId": "al.y2.mech.further-kinematics",
    "questionDiagram": null,
    "id": "al.y2.mech.further-kinematics.q046",
    "tags": [
      "combined",
      "multi-step"
    ],
    "difficulty": "Intermediate",
    "marks": 7,
    "answerType": "written",
    "questionText": "A particle moves with $\\mathbf{r} = (t^{2} + 2t)\\mathbf{i} + (3t - t^{2})\\mathbf{j}$. (a) Find $\\mathbf{v}$. (b) Find $\\mathbf{a}$. (c) Find the speed when $t = 2$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "(a) Differentiate position",
          "workingLatex": "\\mathbf{v} = (2t+2)\\mathbf{i} + (3-2t)\\mathbf{j}",
          "explanation": "Differentiate each component.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "(b) Differentiate velocity",
          "workingLatex": "\\mathbf{a} = 2\\mathbf{i} - 2\\mathbf{j}",
          "explanation": "Constant acceleration vector.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "(c) Velocity at t = 2",
          "workingLatex": "\\mathbf{v} = 6\\mathbf{i} - \\mathbf{j}",
          "explanation": "Substitute $t = 2$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "(c) Speed",
          "workingLatex": "|\\mathbf{v}| = \\sqrt{36+1} = \\sqrt{37}",
          "explanation": "Use Pythagoras on components.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "(c) Evaluate",
          "workingLatex": "|\\mathbf{v}| = 6.08\\ \\text{m s}^{-1}",
          "explanation": "Speed at $t = 2$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "\\mathbf{v}=(2t+2)\\mathbf{i}+(3-2t)\\mathbf{j};\\; \\mathbf{a}=2\\mathbf{i}-2\\mathbf{j};\\; \\text{speed}=\\sqrt{37}",
          "explanation": "All three parts.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Use vector notation",
          "workingLatex": "\\mathbf{r} = x\\mathbf{i} + y\\mathbf{j}",
          "explanation": "Write position, velocity and acceleration as vectors in the plane.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Differentiate component-wise",
          "workingLatex": "\\dfrac{d}{dt}(x\\mathbf{i} + y\\mathbf{j}) = \\dot{x}\\mathbf{i} + \\dot{y}\\mathbf{j}",
          "explanation": "Treat $\\mathbf{i}$ and $\\mathbf{j}$ components separately.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Integrate component-wise",
          "workingLatex": "\\int (a_x\\mathbf{i} + a_y\\mathbf{j})\\,dt",
          "explanation": "Integrate each component and add a vector constant.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $\\mathbf{v} = (2t+2)\\mathbf{i} + (3-2t)\\mathbf{j}$. (b) $\\mathbf{a} = 2\\mathbf{i} - 2\\mathbf{j}$. (c) Speed at $t=2$ is $\\sqrt{37} \\approx 6.08\\ \\text{m s}^{-1}$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Further kinematics",
    "subtopicId": "al.y2.mech.further-kinematics",
    "questionDiagram": null,
    "id": "al.y2.mech.further-kinematics.q047",
    "tags": [
      "full-pipeline",
      "multi-step"
    ],
    "difficulty": "Intermediate",
    "marks": 8,
    "answerType": "written",
    "questionText": "A particle has $\\mathbf{a} = 4\\mathbf{i} + 2t\\mathbf{j}$ with $\\mathbf{v}(0) = 2\\mathbf{i} + \\mathbf{j}$ and $\\mathbf{r}(0) = \\mathbf{0}$. Find $\\mathbf{r}$ when $t = 2$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Integrate acceleration",
          "workingLatex": "\\mathbf{v} = (4t+2)\\mathbf{i} + (t^{2}+1)\\mathbf{j}",
          "explanation": "Use initial velocity to find constants.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Check v(0)",
          "workingLatex": "2\\mathbf{i} + \\mathbf{j}",
          "explanation": "Matches given initial velocity.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Integrate velocity",
          "workingLatex": "\\mathbf{r} = (2t^{2}+2t)\\mathbf{i} + (\\tfrac{t^{3}}{3}+t)\\mathbf{j}",
          "explanation": "Integrate each component; $\\mathbf{r}(0)=\\mathbf{0}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute t = 2",
          "workingLatex": "\\mathbf{r} = 12\\mathbf{i} + \\tfrac{14}{3}\\mathbf{j}",
          "explanation": "Evaluate at $t = 2$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify",
          "workingLatex": "\\mathbf{r} = 12\\mathbf{i} + 4.\\overline{6}\\mathbf{j}",
          "explanation": "Position after 2 seconds.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "\\mathbf{r} = 12\\mathbf{i} + \\tfrac{14}{3}\\mathbf{j}",
          "explanation": "Final position vector.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Use vector notation",
          "workingLatex": "\\mathbf{r} = x\\mathbf{i} + y\\mathbf{j}",
          "explanation": "Write position, velocity and acceleration as vectors in the plane.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Differentiate component-wise",
          "workingLatex": "\\dfrac{d}{dt}(x\\mathbf{i} + y\\mathbf{j}) = \\dot{x}\\mathbf{i} + \\dot{y}\\mathbf{j}",
          "explanation": "Treat $\\mathbf{i}$ and $\\mathbf{j}$ components separately.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Integrate component-wise",
          "workingLatex": "\\int (a_x\\mathbf{i} + a_y\\mathbf{j})\\,dt",
          "explanation": "Integrate each component and add a vector constant.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\mathbf{r} = 12\\mathbf{i} + \\tfrac{14}{3}\\mathbf{j}$ m when $t = 2$ s."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Further kinematics",
    "subtopicId": "al.y2.mech.further-kinematics",
    "questionDiagram": null,
    "id": "al.y2.mech.further-kinematics.q048",
    "tags": [
      "circular",
      "multi-step"
    ],
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "written",
    "questionText": "The position of a particle is $\\mathbf{r} = 3\\cos t\\,\\mathbf{i} + 3\\sin t\\,\\mathbf{j}$. Show that the speed is constant and find its value.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Differentiate position",
          "workingLatex": "\\mathbf{v} = -3\\sin t\\,\\mathbf{i} + 3\\cos t\\,\\mathbf{j}",
          "explanation": "Differentiate $\\cos t$ and $\\sin t$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Speed squared",
          "workingLatex": "|\\mathbf{v}|^{2} = 9\\sin^{2}t + 9\\cos^{2}t",
          "explanation": "Sum of squared components.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Use identity",
          "workingLatex": "9(\\sin^{2}t + \\cos^{2}t) = 9",
          "explanation": "Pythagorean identity.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Speed",
          "workingLatex": "|\\mathbf{v}| = 3",
          "explanation": "Square root of 9.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Interpret",
          "workingLatex": "\\text{Motion is uniform circular motion}",
          "explanation": "Constant speed, changing direction.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "\\text{Speed} = 3\\ \\text{m s}^{-1} \\text{ (constant)}",
          "explanation": "Independent of $t$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Use vector notation",
          "workingLatex": "\\mathbf{r} = x\\mathbf{i} + y\\mathbf{j}",
          "explanation": "Write position, velocity and acceleration as vectors in the plane.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Differentiate component-wise",
          "workingLatex": "\\dfrac{d}{dt}(x\\mathbf{i} + y\\mathbf{j}) = \\dot{x}\\mathbf{i} + \\dot{y}\\mathbf{j}",
          "explanation": "Treat $\\mathbf{i}$ and $\\mathbf{j}$ components separately.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Integrate component-wise",
          "workingLatex": "\\int (a_x\\mathbf{i} + a_y\\mathbf{j})\\,dt",
          "explanation": "Integrate each component and add a vector constant.",
          "diagram": null
        }
      ],
      "finalAnswer": "Speed $= 3\\ \\text{m s}^{-1}$, constant for all $t$. The particle moves on a circle of radius 3."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Further kinematics",
    "subtopicId": "al.y2.mech.further-kinematics",
    "questionDiagram": null,
    "id": "al.y2.mech.further-kinematics.q049",
    "tags": [
      "at-rest-analysis",
      "multi-step"
    ],
    "difficulty": "Intermediate",
    "marks": 7,
    "answerType": "written",
    "questionText": "A particle moves with $\\mathbf{v} = (t^{2}-4)\\mathbf{i} + (2t)\\mathbf{j}$. (a) Find when it is at rest. (b) Find $\\mathbf{a}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "(a) Set v_x = 0",
          "workingLatex": "t^{2} - 4 = 0 \\Rightarrow t = 2",
          "explanation": "Positive time solution.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "(a) Check v_y",
          "workingLatex": "2(2) = 4 \\neq 0",
          "explanation": "Vertical component is not zero at $t=2$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "(a) Re-examine",
          "workingLatex": "t^{2}-4=0 \\text{ and } 2t=0",
          "explanation": "Need both components zero.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "(a) Conclusion",
          "workingLatex": "2t = 0 \\Rightarrow t = 0; \\text{ check } t^{2}-4=0 \\Rightarrow t=2",
          "explanation": "Only $t=0$ gives $v_y=0$; at $t=0$, $v_x=-4$. No simultaneous rest.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "(b) Differentiate",
          "workingLatex": "\\mathbf{a} = 2t\\mathbf{i} + 2\\mathbf{j}",
          "explanation": "Acceleration vector.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "(a) Never simultaneously at rest. (b) $\\mathbf{a} = 2t\\mathbf{i} + 2\\mathbf{j}$",
          "explanation": "Both parts.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Use vector notation",
          "workingLatex": "\\mathbf{r} = x\\mathbf{i} + y\\mathbf{j}",
          "explanation": "Write position, velocity and acceleration as vectors in the plane.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Differentiate component-wise",
          "workingLatex": "\\dfrac{d}{dt}(x\\mathbf{i} + y\\mathbf{j}) = \\dot{x}\\mathbf{i} + \\dot{y}\\mathbf{j}",
          "explanation": "Treat $\\mathbf{i}$ and $\\mathbf{j}$ components separately.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Integrate component-wise",
          "workingLatex": "\\int (a_x\\mathbf{i} + a_y\\mathbf{j})\\,dt",
          "explanation": "Integrate each component and add a vector constant.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) The particle is never instantaneously at rest (no $t \\geq 0$ gives both components zero). (b) $\\mathbf{a} = 2t\\mathbf{i} + 2\\mathbf{j}$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Further kinematics",
    "subtopicId": "al.y2.mech.further-kinematics",
    "questionDiagram": null,
    "id": "al.y2.mech.further-kinematics.q050",
    "tags": [
      "polynomial",
      "multi-step"
    ],
    "difficulty": "Intermediate",
    "marks": 7,
    "answerType": "written",
    "questionText": "Given $\\mathbf{r} = (2t^{3})\\mathbf{i} + (t^{4})\\mathbf{j}$, find (a) $\\mathbf{v}$, (b) $\\mathbf{a}$, (c) the magnitude of acceleration when $t = 1$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "(a) Velocity",
          "workingLatex": "\\mathbf{v} = 6t^{2}\\mathbf{i} + 4t^{3}\\mathbf{j}",
          "explanation": "First derivative.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "(b) Acceleration",
          "workingLatex": "\\mathbf{a} = 12t\\mathbf{i} + 12t^{2}\\mathbf{j}",
          "explanation": "Second derivative.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "(c) At t = 1",
          "workingLatex": "\\mathbf{a} = 12\\mathbf{i} + 12\\mathbf{j}",
          "explanation": "Substitute $t=1$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "(c) Magnitude",
          "workingLatex": "|\\mathbf{a}| = \\sqrt{144+144} = 12\\sqrt{2}",
          "explanation": "Pythagoras.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "(c) Evaluate",
          "workingLatex": "|\\mathbf{a}| = 16.97\\ \\text{m s}^{-2}",
          "explanation": "Magnitude of acceleration.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "\\mathbf{v}=6t^{2}\\mathbf{i}+4t^{3}\\mathbf{j};\\; |\\mathbf{a}|=12\\sqrt{2}",
          "explanation": "All parts.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Use vector notation",
          "workingLatex": "\\mathbf{r} = x\\mathbf{i} + y\\mathbf{j}",
          "explanation": "Write position, velocity and acceleration as vectors in the plane.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Differentiate component-wise",
          "workingLatex": "\\dfrac{d}{dt}(x\\mathbf{i} + y\\mathbf{j}) = \\dot{x}\\mathbf{i} + \\dot{y}\\mathbf{j}",
          "explanation": "Treat $\\mathbf{i}$ and $\\mathbf{j}$ components separately.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Integrate component-wise",
          "workingLatex": "\\int (a_x\\mathbf{i} + a_y\\mathbf{j})\\,dt",
          "explanation": "Integrate each component and add a vector constant.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $\\mathbf{v} = 6t^{2}\\mathbf{i} + 4t^{3}\\mathbf{j}$. (b) $\\mathbf{a} = 12t\\mathbf{i} + 12t^{2}\\mathbf{j}$. (c) $|\\mathbf{a}| = 12\\sqrt{2}$ m s$^{-2}$ at $t=1$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Further kinematics",
    "subtopicId": "al.y2.mech.further-kinematics",
    "questionDiagram": null,
    "id": "al.y2.mech.further-kinematics.q051",
    "tags": [
      "rest-position",
      "multi-step"
    ],
    "difficulty": "Hard",
    "marks": 9,
    "answerType": "written",
    "questionText": "A particle P has position $\\mathbf{r} = (4t - t^{2})\\mathbf{i} + (3t)\\mathbf{j}$. (a) Find $\\mathbf{v}$ and $\\mathbf{a}$. (b) Find the times when P is instantaneously at rest. (c) Find the position at each of these times.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "(a) Velocity",
          "workingLatex": "\\mathbf{v} = (4-2t)\\mathbf{i} + 3\\mathbf{j}",
          "explanation": "Differentiate position.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "(a) Acceleration",
          "workingLatex": "\\mathbf{a} = -2\\mathbf{i}",
          "explanation": "Constant horizontal deceleration.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "(b) Rest condition",
          "workingLatex": "4-2t = 0 \\Rightarrow t = 2",
          "explanation": "Only the $\\mathbf{i}$ component can be zero; $v_y = 3 \\neq 0$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "(b) Interpret",
          "workingLatex": "\\text{Horizontal speed is zero at } t = 2",
          "explanation": "Not fully at rest since $v_y \\neq 0$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "(c) Position at t = 2",
          "workingLatex": "\\mathbf{r} = 4\\mathbf{i} + 6\\mathbf{j}",
          "explanation": "Substitute $t=2$: $x=4$, $y=6$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "\\mathbf{v}=(4-2t)\\mathbf{i}+3\\mathbf{j};\\; t=2;\\; \\mathbf{r}=4\\mathbf{i}+6\\mathbf{j}",
          "explanation": "Complete solution.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Note",
          "workingLatex": "v_y \\neq 0 \\text{ so particle never fully at rest}",
          "explanation": "Only horizontal component vanishes.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Use vector notation",
          "workingLatex": "\\mathbf{r} = x\\mathbf{i} + y\\mathbf{j}",
          "explanation": "Write position, velocity and acceleration as vectors in the plane.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Differentiate component-wise",
          "workingLatex": "\\dfrac{d}{dt}(x\\mathbf{i} + y\\mathbf{j}) = \\dot{x}\\mathbf{i} + \\dot{y}\\mathbf{j}",
          "explanation": "Treat $\\mathbf{i}$ and $\\mathbf{j}$ components separately.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Integrate component-wise",
          "workingLatex": "\\int (a_x\\mathbf{i} + a_y\\mathbf{j})\\,dt",
          "explanation": "Integrate each component and add a vector constant.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Apply initial conditions",
          "workingLatex": "\\text{Use given values at } t = 0",
          "explanation": "Fix constants of integration from initial velocity or position.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Speed formula",
          "workingLatex": "|\\mathbf{v}| = \\sqrt{v_x^{2} + v_y^{2}}",
          "explanation": "Speed is the magnitude of the velocity vector.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Check units",
          "workingLatex": "\\text{m, m s}^{-1}, \\text{m s}^{-2}",
          "explanation": "Use consistent SI units.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $\\mathbf{v} = (4-2t)\\mathbf{i} + 3\\mathbf{j}$, $\\mathbf{a} = -2\\mathbf{i}$. (b) Horizontal rest at $t=2$ (not fully at rest). (c) $\\mathbf{r} = 4\\mathbf{i} + 6\\mathbf{j}$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Further kinematics",
    "subtopicId": "al.y2.mech.further-kinematics",
    "questionDiagram": null,
    "id": "al.y2.mech.further-kinematics.q052",
    "tags": [
      "full-pipeline",
      "multi-step"
    ],
    "difficulty": "Hard",
    "marks": 10,
    "answerType": "written",
    "questionText": "A particle moves with $\\mathbf{a} = 2t\\mathbf{i} - 4\\mathbf{j}$. At $t=0$, $\\mathbf{v} = 3\\mathbf{i} + 5\\mathbf{j}$ and $\\mathbf{r} = \\mathbf{i}$. (a) Find $\\mathbf{v}$. (b) Find $\\mathbf{r}$. (c) Find the speed when $t = 3$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "(a) Integrate a",
          "workingLatex": "\\mathbf{v} = (t^{2}+3)\\mathbf{i} + (5-4t)\\mathbf{j}",
          "explanation": "Use initial velocity.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "(b) Integrate v",
          "workingLatex": "\\mathbf{r} = (\\tfrac{t^{3}}{3}+3t+1)\\mathbf{i} + (5t-2t^{2})\\mathbf{j}",
          "explanation": "Use $\\mathbf{r}(0)=\\mathbf{i}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "(c) v at t=3",
          "workingLatex": "\\mathbf{v} = 12\\mathbf{i} - 7\\mathbf{j}",
          "explanation": "Substitute $t=3$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "(c) Speed",
          "workingLatex": "|\\mathbf{v}| = \\sqrt{144+49} = \\sqrt{193}",
          "explanation": "Magnitude.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "(c) Evaluate",
          "workingLatex": "|\\mathbf{v}| = 13.89\\ \\text{m s}^{-1}",
          "explanation": "Speed at $t=3$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "\\mathbf{v}=(t^{2}+3)\\mathbf{i}+(5-4t)\\mathbf{j};\\; \\text{speed}=\\sqrt{193}",
          "explanation": "All parts.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check IC",
          "workingLatex": "\\mathbf{r}(0) = \\mathbf{i}",
          "explanation": "Initial condition satisfied.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Use vector notation",
          "workingLatex": "\\mathbf{r} = x\\mathbf{i} + y\\mathbf{j}",
          "explanation": "Write position, velocity and acceleration as vectors in the plane.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Differentiate component-wise",
          "workingLatex": "\\dfrac{d}{dt}(x\\mathbf{i} + y\\mathbf{j}) = \\dot{x}\\mathbf{i} + \\dot{y}\\mathbf{j}",
          "explanation": "Treat $\\mathbf{i}$ and $\\mathbf{j}$ components separately.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Integrate component-wise",
          "workingLatex": "\\int (a_x\\mathbf{i} + a_y\\mathbf{j})\\,dt",
          "explanation": "Integrate each component and add a vector constant.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Apply initial conditions",
          "workingLatex": "\\text{Use given values at } t = 0",
          "explanation": "Fix constants of integration from initial velocity or position.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Speed formula",
          "workingLatex": "|\\mathbf{v}| = \\sqrt{v_x^{2} + v_y^{2}}",
          "explanation": "Speed is the magnitude of the velocity vector.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Check units",
          "workingLatex": "\\text{m, m s}^{-1}, \\text{m s}^{-2}",
          "explanation": "Use consistent SI units.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $\\mathbf{v} = (t^{2}+3)\\mathbf{i} + (5-4t)\\mathbf{j}$. (b) $\\mathbf{r} = (\\tfrac{t^{3}}{3}+3t+1)\\mathbf{i} + (5t-2t^{2})\\mathbf{j}$. (c) Speed $= \\sqrt{193} \\approx 13.9\\ \\text{m s}^{-1}$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Further kinematics",
    "subtopicId": "al.y2.mech.further-kinematics",
    "questionDiagram": null,
    "id": "al.y2.mech.further-kinematics.q053",
    "tags": [
      "relative-position",
      "multi-step"
    ],
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "written",
    "questionText": "Two particles A and B move with $\\mathbf{r}_A = 2t\\mathbf{i} + t^{2}\\mathbf{j}$ and $\\mathbf{r}_B = (t+1)\\mathbf{i} + (t^{2}+3)\\mathbf{j}$. Find the vector $\\overrightarrow{AB}$ and the time when A is directly above B (same horizontal position).",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Vector AB",
          "workingLatex": "\\overrightarrow{AB} = \\mathbf{r}_B - \\mathbf{r}_A",
          "explanation": "Position of B minus position of A.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Subtract components",
          "workingLatex": "\\overrightarrow{AB} = (1-t)\\mathbf{i} + 3\\mathbf{j}",
          "explanation": "Component-wise subtraction.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Same x-coordinate",
          "workingLatex": "2t = t + 1 \\Rightarrow t = 1",
          "explanation": "Set $\\mathbf{i}$ components equal.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Verify y at t=1",
          "workingLatex": "y_A = 1,\\; y_B = 4",
          "explanation": "Different heights.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "AB at t=1",
          "workingLatex": "\\overrightarrow{AB} = 3\\mathbf{j}",
          "explanation": "A is directly below B.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "\\overrightarrow{AB}=(1-t)\\mathbf{i}+3\\mathbf{j};\\; t=1",
          "explanation": "Vector and time.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Interpret",
          "workingLatex": "\\text{Same horizontal position at } t=1",
          "explanation": "Vertical separation of 3 m.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Use vector notation",
          "workingLatex": "\\mathbf{r} = x\\mathbf{i} + y\\mathbf{j}",
          "explanation": "Write position, velocity and acceleration as vectors in the plane.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Differentiate component-wise",
          "workingLatex": "\\dfrac{d}{dt}(x\\mathbf{i} + y\\mathbf{j}) = \\dot{x}\\mathbf{i} + \\dot{y}\\mathbf{j}",
          "explanation": "Treat $\\mathbf{i}$ and $\\mathbf{j}$ components separately.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Integrate component-wise",
          "workingLatex": "\\int (a_x\\mathbf{i} + a_y\\mathbf{j})\\,dt",
          "explanation": "Integrate each component and add a vector constant.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Apply initial conditions",
          "workingLatex": "\\text{Use given values at } t = 0",
          "explanation": "Fix constants of integration from initial velocity or position.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Speed formula",
          "workingLatex": "|\\mathbf{v}| = \\sqrt{v_x^{2} + v_y^{2}}",
          "explanation": "Speed is the magnitude of the velocity vector.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Check units",
          "workingLatex": "\\text{m, m s}^{-1}, \\text{m s}^{-2}",
          "explanation": "Use consistent SI units.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\overrightarrow{AB} = (1-t)\\mathbf{i} + 3\\mathbf{j}$. A and B have the same $\\mathbf{i}$ coordinate at $t = 1$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Further kinematics",
    "subtopicId": "al.y2.mech.further-kinematics",
    "questionDiagram": null,
    "id": "al.y2.mech.further-kinematics.q054",
    "tags": [
      "circular",
      "multi-step"
    ],
    "difficulty": "Hard",
    "marks": 9,
    "answerType": "written",
    "questionText": "A particle moves so that $\\mathbf{v} = (3\\cos t)\\mathbf{i} + (3\\sin t)\\mathbf{j}$. (a) Find $\\mathbf{a}$. (b) Show that $|\\mathbf{a}|$ is constant. (c) Find the speed.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "(a) Differentiate",
          "workingLatex": "\\mathbf{a} = -3\\sin t\\,\\mathbf{i} + 3\\cos t\\,\\mathbf{j}",
          "explanation": "Derivative of velocity.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "(b) |a|²",
          "workingLatex": "9\\sin^{2}t + 9\\cos^{2}t = 9",
          "explanation": "Pythagorean identity.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "(b) |a|",
          "workingLatex": "3\\ \\text{m s}^{-2}",
          "explanation": "Constant magnitude.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "(c) Speed",
          "workingLatex": "|\\mathbf{v}| = 3",
          "explanation": "Same calculation as for acceleration magnitude.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Interpret",
          "workingLatex": "\\text{Uniform circular motion}",
          "explanation": "Speed and |a| both constant.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "\\mathbf{a}=-3\\sin t\\,\\mathbf{i}+3\\cos t\\,\\mathbf{j};\\; |\\mathbf{a}|=3;\\; \\text{speed}=3",
          "explanation": "All parts.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Note",
          "workingLatex": "\\mathbf{v} \\perp \\mathbf{a}",
          "explanation": "Velocity and acceleration are perpendicular for circular motion.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Use vector notation",
          "workingLatex": "\\mathbf{r} = x\\mathbf{i} + y\\mathbf{j}",
          "explanation": "Write position, velocity and acceleration as vectors in the plane.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Differentiate component-wise",
          "workingLatex": "\\dfrac{d}{dt}(x\\mathbf{i} + y\\mathbf{j}) = \\dot{x}\\mathbf{i} + \\dot{y}\\mathbf{j}",
          "explanation": "Treat $\\mathbf{i}$ and $\\mathbf{j}$ components separately.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Integrate component-wise",
          "workingLatex": "\\int (a_x\\mathbf{i} + a_y\\mathbf{j})\\,dt",
          "explanation": "Integrate each component and add a vector constant.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Apply initial conditions",
          "workingLatex": "\\text{Use given values at } t = 0",
          "explanation": "Fix constants of integration from initial velocity or position.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Speed formula",
          "workingLatex": "|\\mathbf{v}| = \\sqrt{v_x^{2} + v_y^{2}}",
          "explanation": "Speed is the magnitude of the velocity vector.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Check units",
          "workingLatex": "\\text{m, m s}^{-1}, \\text{m s}^{-2}",
          "explanation": "Use consistent SI units.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $\\mathbf{a} = -3\\sin t\\,\\mathbf{i} + 3\\cos t\\,\\mathbf{j}$. (b) $|\\mathbf{a}| = 3$ m s$^{-2}$ (constant). (c) Speed $= 3$ m s$^{-1}$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Further kinematics",
    "subtopicId": "al.y2.mech.further-kinematics",
    "questionDiagram": null,
    "id": "al.y2.mech.further-kinematics.q055",
    "tags": [
      "exponential",
      "multi-step"
    ],
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "written",
    "questionText": "A particle has $\\mathbf{r} = (e^{t})\\mathbf{i} + (e^{-t})\\mathbf{j}$. Find $\\mathbf{v}$, $\\mathbf{a}$, and the speed when $t = 0$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Differentiate r",
          "workingLatex": "\\mathbf{v} = e^{t}\\mathbf{i} - e^{-t}\\mathbf{j}",
          "explanation": "Derivative of exponential functions.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate v",
          "workingLatex": "\\mathbf{a} = e^{t}\\mathbf{i} + e^{-t}\\mathbf{j}",
          "explanation": "Second derivative.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "At t = 0",
          "workingLatex": "\\mathbf{v} = \\mathbf{i} - \\mathbf{j}",
          "explanation": "Initial velocity.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Speed at t=0",
          "workingLatex": "|\\mathbf{v}| = \\sqrt{1+1} = \\sqrt{2}",
          "explanation": "Magnitude.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Interpret",
          "workingLatex": "\\text{Speed changes with time}",
          "explanation": "Non-uniform motion.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "\\mathbf{v}=e^{t}\\mathbf{i}-e^{-t}\\mathbf{j};\\; |\\mathbf{v}(0)|=\\sqrt{2}",
          "explanation": "Complete.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Note",
          "workingLatex": "\\mathbf{r}(0) = \\mathbf{i} + \\mathbf{j}",
          "explanation": "Starts at (1,1).",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Use vector notation",
          "workingLatex": "\\mathbf{r} = x\\mathbf{i} + y\\mathbf{j}",
          "explanation": "Write position, velocity and acceleration as vectors in the plane.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Differentiate component-wise",
          "workingLatex": "\\dfrac{d}{dt}(x\\mathbf{i} + y\\mathbf{j}) = \\dot{x}\\mathbf{i} + \\dot{y}\\mathbf{j}",
          "explanation": "Treat $\\mathbf{i}$ and $\\mathbf{j}$ components separately.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Integrate component-wise",
          "workingLatex": "\\int (a_x\\mathbf{i} + a_y\\mathbf{j})\\,dt",
          "explanation": "Integrate each component and add a vector constant.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Apply initial conditions",
          "workingLatex": "\\text{Use given values at } t = 0",
          "explanation": "Fix constants of integration from initial velocity or position.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Speed formula",
          "workingLatex": "|\\mathbf{v}| = \\sqrt{v_x^{2} + v_y^{2}}",
          "explanation": "Speed is the magnitude of the velocity vector.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Check units",
          "workingLatex": "\\text{m, m s}^{-1}, \\text{m s}^{-2}",
          "explanation": "Use consistent SI units.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\mathbf{v} = e^{t}\\mathbf{i} - e^{-t}\\mathbf{j}$, $\\mathbf{a} = e^{t}\\mathbf{i} + e^{-t}\\mathbf{j}$. Speed at $t=0$ is $\\sqrt{2}$ m s$^{-1}$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Further kinematics",
    "subtopicId": "al.y2.mech.further-kinematics",
    "questionDiagram": null,
    "id": "al.y2.mech.further-kinematics.q056",
    "tags": [
      "relative-velocity",
      "context",
      "multi-step"
    ],
    "difficulty": "Hard",
    "marks": 9,
    "answerType": "written",
    "questionText": "A boat crosses a river. In still water its velocity relative to the water is $4\\mathbf{i}$ m s$^{-1}$. The river flows with velocity $2\\mathbf{j}$ m s$^{-1}$. (a) Find the velocity of the boat relative to the bank. (b) Find the speed. (c) Find the direction.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "(a) Vector addition",
          "workingLatex": "\\mathbf{v}_{\\text{boat}} = 4\\mathbf{i} + 2\\mathbf{j}",
          "explanation": "Add boat and river velocities.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "(b) Speed",
          "workingLatex": "|\\mathbf{v}| = \\sqrt{16+4} = \\sqrt{20} = 2\\sqrt{5}",
          "explanation": "Magnitude.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "(b) Evaluate",
          "workingLatex": "4.47\\ \\text{m s}^{-1}",
          "explanation": "Resultant speed.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "(c) Direction",
          "workingLatex": "\\tan\\theta = \\tfrac{2}{4} = 0.5",
          "explanation": "Angle from $\\mathbf{i}$ direction.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "(c) Angle",
          "workingLatex": "\\theta = 26.6°",
          "explanation": "Direction of travel.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "\\mathbf{v}=4\\mathbf{i}+2\\mathbf{j};\\; 2\\sqrt{5}\\ \\text{m s}^{-1};\\; 26.6°",
          "explanation": "All parts.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Context",
          "workingLatex": "\\text{Boat is carried downstream}",
          "explanation": "Relative velocity problem.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Use vector notation",
          "workingLatex": "\\mathbf{r} = x\\mathbf{i} + y\\mathbf{j}",
          "explanation": "Write position, velocity and acceleration as vectors in the plane.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Differentiate component-wise",
          "workingLatex": "\\dfrac{d}{dt}(x\\mathbf{i} + y\\mathbf{j}) = \\dot{x}\\mathbf{i} + \\dot{y}\\mathbf{j}",
          "explanation": "Treat $\\mathbf{i}$ and $\\mathbf{j}$ components separately.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Integrate component-wise",
          "workingLatex": "\\int (a_x\\mathbf{i} + a_y\\mathbf{j})\\,dt",
          "explanation": "Integrate each component and add a vector constant.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Apply initial conditions",
          "workingLatex": "\\text{Use given values at } t = 0",
          "explanation": "Fix constants of integration from initial velocity or position.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Speed formula",
          "workingLatex": "|\\mathbf{v}| = \\sqrt{v_x^{2} + v_y^{2}}",
          "explanation": "Speed is the magnitude of the velocity vector.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Check units",
          "workingLatex": "\\text{m, m s}^{-1}, \\text{m s}^{-2}",
          "explanation": "Use consistent SI units.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $\\mathbf{v} = 4\\mathbf{i} + 2\\mathbf{j}$ m s$^{-1}$. (b) Speed $= 2\\sqrt{5} \\approx 4.47$ m s$^{-1}$. (c) Direction $= 26.6°$ from $\\mathbf{i}$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Further kinematics",
    "subtopicId": "al.y2.mech.further-kinematics",
    "questionDiagram": null,
    "id": "al.y2.mech.further-kinematics.q057",
    "tags": [
      "constant-a-2D",
      "multi-step"
    ],
    "difficulty": "Hard",
    "marks": 10,
    "answerType": "written",
    "questionText": "A particle moves with $\\mathbf{a} = -2\\mathbf{i} - 2\\mathbf{j}$ (constant). At $t=0$, $\\mathbf{v} = 10\\mathbf{i} + 6\\mathbf{j}$ and $\\mathbf{r} = \\mathbf{0}$. (a) Find $\\mathbf{v}$. (b) Find when the particle is at rest. (c) Find $\\mathbf{r}$ at that time.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "(a) Integrate",
          "workingLatex": "\\mathbf{v} = (10-2t)\\mathbf{i} + (6-2t)\\mathbf{j}",
          "explanation": "Constant acceleration integration.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "(b) Rest",
          "workingLatex": "10-2t=0 \\text{ and } 6-2t=0",
          "explanation": "Both components zero.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "(b) Solve",
          "workingLatex": "t=5 \\text{ and } t=3",
          "explanation": "Different times — never simultaneously at rest.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "(b) Conclusion",
          "workingLatex": "\\text{Particle never fully at rest}",
          "explanation": "Components zero at different times.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "(c) Position",
          "workingLatex": "\\mathbf{r} = (10t-t^{2})\\mathbf{i} + (6t-t^{2})\\mathbf{j}",
          "explanation": "Integrate velocity.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "\\mathbf{v}=(10-2t)\\mathbf{i}+(6-2t)\\mathbf{j};\\; \\text{never at rest}",
          "explanation": "Complete.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Note",
          "workingLatex": "v_x=0 \\text{ at } t=5;\\; v_y=0 \\text{ at } t=3",
          "explanation": "Analyse each component separately.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Use vector notation",
          "workingLatex": "\\mathbf{r} = x\\mathbf{i} + y\\mathbf{j}",
          "explanation": "Write position, velocity and acceleration as vectors in the plane.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Differentiate component-wise",
          "workingLatex": "\\dfrac{d}{dt}(x\\mathbf{i} + y\\mathbf{j}) = \\dot{x}\\mathbf{i} + \\dot{y}\\mathbf{j}",
          "explanation": "Treat $\\mathbf{i}$ and $\\mathbf{j}$ components separately.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Integrate component-wise",
          "workingLatex": "\\int (a_x\\mathbf{i} + a_y\\mathbf{j})\\,dt",
          "explanation": "Integrate each component and add a vector constant.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Apply initial conditions",
          "workingLatex": "\\text{Use given values at } t = 0",
          "explanation": "Fix constants of integration from initial velocity or position.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Speed formula",
          "workingLatex": "|\\mathbf{v}| = \\sqrt{v_x^{2} + v_y^{2}}",
          "explanation": "Speed is the magnitude of the velocity vector.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Check units",
          "workingLatex": "\\text{m, m s}^{-1}, \\text{m s}^{-2}",
          "explanation": "Use consistent SI units.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $\\mathbf{v} = (10-2t)\\mathbf{i} + (6-2t)\\mathbf{j}$. (b) Never instantaneously at rest. (c) $\\mathbf{r} = (10t-t^{2})\\mathbf{i} + (6t-t^{2})\\mathbf{j}$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Further kinematics",
    "subtopicId": "al.y2.mech.further-kinematics",
    "questionDiagram": null,
    "id": "al.y2.mech.further-kinematics.q058",
    "tags": [
      "origin",
      "speed",
      "multi-step"
    ],
    "difficulty": "Hard",
    "marks": 9,
    "answerType": "written",
    "questionText": "The position of a particle is $\\mathbf{r} = (t^{3} - 6t)\\mathbf{i} + (t^{2})\\mathbf{j}$. (a) Find the times when the particle passes through the origin. (b) Find the speed at $t = 2$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "(a) Origin condition",
          "workingLatex": "t^{3}-6t=0 \\text{ and } t^{2}=0",
          "explanation": "Both components zero.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "(a) From y",
          "workingLatex": "t = 0",
          "explanation": "Only solution for $\\mathbf{j}$ component.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "(a) Check x at t=0",
          "workingLatex": "0 - 0 = 0",
          "explanation": "Origin is passed at $t=0$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "(a) Other x roots",
          "workingLatex": "t(t^{2}-6)=0 \\Rightarrow t=\\sqrt{6}",
          "explanation": "But $t^{2} \\neq 0$ at $t=\\sqrt{6}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "(b) v at t=2",
          "workingLatex": "\\mathbf{v} = 6\\mathbf{i} + 4\\mathbf{j}",
          "explanation": "Differentiate and substitute.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "(b) Speed",
          "workingLatex": "|\\mathbf{v}| = \\sqrt{36+16} = \\sqrt{52} = 2\\sqrt{13}",
          "explanation": "Magnitude.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Answer",
          "workingLatex": "t=0 \\text{ only};\\; \\text{speed}=2\\sqrt{13}",
          "explanation": "Both parts.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Use vector notation",
          "workingLatex": "\\mathbf{r} = x\\mathbf{i} + y\\mathbf{j}",
          "explanation": "Write position, velocity and acceleration as vectors in the plane.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Differentiate component-wise",
          "workingLatex": "\\dfrac{d}{dt}(x\\mathbf{i} + y\\mathbf{j}) = \\dot{x}\\mathbf{i} + \\dot{y}\\mathbf{j}",
          "explanation": "Treat $\\mathbf{i}$ and $\\mathbf{j}$ components separately.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Integrate component-wise",
          "workingLatex": "\\int (a_x\\mathbf{i} + a_y\\mathbf{j})\\,dt",
          "explanation": "Integrate each component and add a vector constant.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Apply initial conditions",
          "workingLatex": "\\text{Use given values at } t = 0",
          "explanation": "Fix constants of integration from initial velocity or position.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Speed formula",
          "workingLatex": "|\\mathbf{v}| = \\sqrt{v_x^{2} + v_y^{2}}",
          "explanation": "Speed is the magnitude of the velocity vector.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Check units",
          "workingLatex": "\\text{m, m s}^{-1}, \\text{m s}^{-2}",
          "explanation": "Use consistent SI units.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) Passes through origin only at $t = 0$. (b) Speed at $t=2$ is $2\\sqrt{13} \\approx 7.21$ m s$^{-1}$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Further kinematics",
    "subtopicId": "al.y2.mech.further-kinematics",
    "questionDiagram": null,
    "id": "al.y2.mech.further-kinematics.q059",
    "tags": [
      "displacement",
      "multi-step"
    ],
    "difficulty": "Hard",
    "marks": 10,
    "answerType": "written",
    "questionText": "A particle P moves with $\\mathbf{v} = (2t+1)\\mathbf{i} + (t^{2}-1)\\mathbf{j}$. Starting from $\\mathbf{r} = 2\\mathbf{i} - \\mathbf{j}$ at $t=0$, find (a) $\\mathbf{r}$, (b) the distance from the start after 3 seconds.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "(a) Integrate v",
          "workingLatex": "\\mathbf{r} = (t^{2}+t+2)\\mathbf{i} + (\\tfrac{t^{3}}{3}-t-1)\\mathbf{j}",
          "explanation": "Use initial position.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "(a) Check r(0)",
          "workingLatex": "2\\mathbf{i} - \\mathbf{j}",
          "explanation": "Matches.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "(b) r(3)",
          "workingLatex": "\\mathbf{r} = 14\\mathbf{i} + 5\\mathbf{j}",
          "explanation": "Position at $t=3$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "(b) Displacement",
          "workingLatex": "\\overrightarrow{OR} = 12\\mathbf{i} + 6\\mathbf{j}",
          "explanation": "From start to final position.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "(b) Distance",
          "workingLatex": "|\\overrightarrow{OR}| = \\sqrt{144+36} = 6\\sqrt{5}",
          "explanation": "Straight-line distance.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "\\mathbf{r}=(t^{2}+t+2)\\mathbf{i}+(\\tfrac{t^{3}}{3}-t-1)\\mathbf{j};\\; 6\\sqrt{5}",
          "explanation": "Both parts.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Note",
          "workingLatex": "\\text{Displacement, not path length}",
          "explanation": "Straight-line distance from start.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Use vector notation",
          "workingLatex": "\\mathbf{r} = x\\mathbf{i} + y\\mathbf{j}",
          "explanation": "Write position, velocity and acceleration as vectors in the plane.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Differentiate component-wise",
          "workingLatex": "\\dfrac{d}{dt}(x\\mathbf{i} + y\\mathbf{j}) = \\dot{x}\\mathbf{i} + \\dot{y}\\mathbf{j}",
          "explanation": "Treat $\\mathbf{i}$ and $\\mathbf{j}$ components separately.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Integrate component-wise",
          "workingLatex": "\\int (a_x\\mathbf{i} + a_y\\mathbf{j})\\,dt",
          "explanation": "Integrate each component and add a vector constant.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Apply initial conditions",
          "workingLatex": "\\text{Use given values at } t = 0",
          "explanation": "Fix constants of integration from initial velocity or position.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Speed formula",
          "workingLatex": "|\\mathbf{v}| = \\sqrt{v_x^{2} + v_y^{2}}",
          "explanation": "Speed is the magnitude of the velocity vector.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Check units",
          "workingLatex": "\\text{m, m s}^{-1}, \\text{m s}^{-2}",
          "explanation": "Use consistent SI units.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $\\mathbf{r} = (t^{2}+t+2)\\mathbf{i} + (\\tfrac{t^{3}}{3}-t-1)\\mathbf{j}$. (b) Distance from start $= 6\\sqrt{5} \\approx 13.4$ m."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Further kinematics",
    "subtopicId": "al.y2.mech.further-kinematics",
    "questionDiagram": null,
    "id": "al.y2.mech.further-kinematics.q060",
    "tags": [
      "proof",
      "multi-step"
    ],
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "written",
    "questionText": "Prove that for motion in a plane, if $\\mathbf{r} = x(t)\\mathbf{i} + y(t)\\mathbf{j}$, then the speed is $|\\mathbf{v}| = \\sqrt{\\dot{x}^{2} + \\dot{y}^{2}}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Define velocity",
          "workingLatex": "\\mathbf{v} = \\dot{x}\\mathbf{i} + \\dot{y}\\mathbf{j}",
          "explanation": "Differentiate each component.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Speed definition",
          "workingLatex": "|\\mathbf{v}| = \\sqrt{v_x^{2} + v_y^{2}}",
          "explanation": "Magnitude of velocity vector.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute",
          "workingLatex": "|\\mathbf{v}| = \\sqrt{\\dot{x}^{2} + \\dot{y}^{2}}",
          "explanation": "Replace components.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Interpret",
          "workingLatex": "\\text{Speed depends on both horizontal and vertical rates}",
          "explanation": "Both components contribute.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Special case",
          "workingLatex": "\\text{If } \\dot{y}=0,\\; |\\mathbf{v}| = |\\dot{x}|",
          "explanation": "Motion along $\\mathbf{i}$ axis.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Conclusion",
          "workingLatex": "|\\mathbf{v}| = \\sqrt{\\dot{x}^{2}+\\dot{y}^{2}}",
          "explanation": "General formula proved.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Application",
          "workingLatex": "\\text{Use whenever position is given parametrically}",
          "explanation": "Standard result.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Use vector notation",
          "workingLatex": "\\mathbf{r} = x\\mathbf{i} + y\\mathbf{j}",
          "explanation": "Write position, velocity and acceleration as vectors in the plane.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Differentiate component-wise",
          "workingLatex": "\\dfrac{d}{dt}(x\\mathbf{i} + y\\mathbf{j}) = \\dot{x}\\mathbf{i} + \\dot{y}\\mathbf{j}",
          "explanation": "Treat $\\mathbf{i}$ and $\\mathbf{j}$ components separately.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Integrate component-wise",
          "workingLatex": "\\int (a_x\\mathbf{i} + a_y\\mathbf{j})\\,dt",
          "explanation": "Integrate each component and add a vector constant.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Apply initial conditions",
          "workingLatex": "\\text{Use given values at } t = 0",
          "explanation": "Fix constants of integration from initial velocity or position.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Speed formula",
          "workingLatex": "|\\mathbf{v}| = \\sqrt{v_x^{2} + v_y^{2}}",
          "explanation": "Speed is the magnitude of the velocity vector.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Check units",
          "workingLatex": "\\text{m, m s}^{-1}, \\text{m s}^{-2}",
          "explanation": "Use consistent SI units.",
          "diagram": null
        }
      ],
      "finalAnswer": "$|\\mathbf{v}| = \\sqrt{\\dot{x}^{2} + \\dot{y}^{2}}$ — the speed is the magnitude of the velocity vector with components $\\dot{x}$ and $\\dot{y}$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Further kinematics",
    "subtopicId": "al.y2.mech.further-kinematics",
    "questionDiagram": null,
    "id": "al.y2.mech.further-kinematics.q061",
    "tags": [
      "full-pipeline",
      "multi-step"
    ],
    "difficulty": "Hard",
    "marks": 10,
    "answerType": "written",
    "questionText": "A particle moves with $\\mathbf{a} = 6t\\mathbf{i} + 4\\mathbf{j}$. Given $\\mathbf{v}(0) = \\mathbf{0}$ and $\\mathbf{r}(0) = 4\\mathbf{i}$, find $\\mathbf{r}$ when $t = 2$ and the speed at that instant.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Integrate a once",
          "workingLatex": "\\mathbf{v} = 3t^{2}\\mathbf{i} + 4t\\mathbf{j}",
          "explanation": "Use $\\mathbf{v}(0)=\\mathbf{0}$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Integrate v",
          "workingLatex": "\\mathbf{r} = t^{3}\\mathbf{i} + 2t^{2}\\mathbf{j} + 4\\mathbf{i}",
          "explanation": "Use $\\mathbf{r}(0)=4\\mathbf{i}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "At t=2",
          "workingLatex": "\\mathbf{r} = 12\\mathbf{i} + 8\\mathbf{j}",
          "explanation": "Position.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "v at t=2",
          "workingLatex": "\\mathbf{v} = 12\\mathbf{i} + 8\\mathbf{j}",
          "explanation": "Velocity.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Speed",
          "workingLatex": "|\\mathbf{v}| = \\sqrt{144+64} = 4\\sqrt{13}",
          "explanation": "Magnitude.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "\\mathbf{r}=12\\mathbf{i}+8\\mathbf{j};\\; 4\\sqrt{13}\\ \\text{m s}^{-1}",
          "explanation": "Both.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check",
          "workingLatex": "\\mathbf{r}(0)=4\\mathbf{i}",
          "explanation": "Initial condition verified.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Use vector notation",
          "workingLatex": "\\mathbf{r} = x\\mathbf{i} + y\\mathbf{j}",
          "explanation": "Write position, velocity and acceleration as vectors in the plane.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Differentiate component-wise",
          "workingLatex": "\\dfrac{d}{dt}(x\\mathbf{i} + y\\mathbf{j}) = \\dot{x}\\mathbf{i} + \\dot{y}\\mathbf{j}",
          "explanation": "Treat $\\mathbf{i}$ and $\\mathbf{j}$ components separately.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Integrate component-wise",
          "workingLatex": "\\int (a_x\\mathbf{i} + a_y\\mathbf{j})\\,dt",
          "explanation": "Integrate each component and add a vector constant.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Apply initial conditions",
          "workingLatex": "\\text{Use given values at } t = 0",
          "explanation": "Fix constants of integration from initial velocity or position.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Speed formula",
          "workingLatex": "|\\mathbf{v}| = \\sqrt{v_x^{2} + v_y^{2}}",
          "explanation": "Speed is the magnitude of the velocity vector.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Check units",
          "workingLatex": "\\text{m, m s}^{-1}, \\text{m s}^{-2}",
          "explanation": "Use consistent SI units.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\mathbf{r} = 12\\mathbf{i} + 8\\mathbf{j}$ m; speed $= 4\\sqrt{13} \\approx 14.4$ m s$^{-1}$ at $t=2$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Further kinematics",
    "subtopicId": "al.y2.mech.further-kinematics",
    "questionDiagram": null,
    "id": "al.y2.mech.further-kinematics.q062",
    "tags": [
      "trig",
      "circular",
      "multi-step"
    ],
    "difficulty": "Hard",
    "marks": 10,
    "answerType": "written",
    "questionText": "The velocity of a particle is $\\mathbf{v} = (4\\sin t)\\mathbf{i} + (4\\cos t)\\mathbf{j}$. (a) Find the maximum and minimum values of the speed. (b) Find $\\mathbf{r}$ given $\\mathbf{r}(0) = \\mathbf{0}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "(a) Speed",
          "workingLatex": "|\\mathbf{v}| = \\sqrt{16\\sin^{2}t + 16\\cos^{2}t} = 4",
          "explanation": "Constant speed.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "(a) Max and min",
          "workingLatex": "\\text{Speed is always } 4\\ \\text{m s}^{-1}",
          "explanation": "No variation.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "(b) Integrate v",
          "workingLatex": "\\mathbf{r} = (-4\\cos t)\\mathbf{i} + (4\\sin t)\\mathbf{j} + \\mathbf{c}",
          "explanation": "Integrate each component.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "(b) IC r(0)=0",
          "workingLatex": "c_x = 4,\\; c_y = 0",
          "explanation": "Fix constants.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "(b) Position",
          "workingLatex": "\\mathbf{r} = 4(1-\\cos t)\\mathbf{i} + 4\\sin t\\,\\mathbf{j}",
          "explanation": "Simplified form.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "\\text{Speed}=4 \\text{ (constant)};\\; \\mathbf{r}=4(1-\\cos t)\\mathbf{i}+4\\sin t\\,\\mathbf{j}",
          "explanation": "Both parts.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Interpret",
          "workingLatex": "\\text{Circular motion radius 4}",
          "explanation": "Uniform speed on a circle.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Use vector notation",
          "workingLatex": "\\mathbf{r} = x\\mathbf{i} + y\\mathbf{j}",
          "explanation": "Write position, velocity and acceleration as vectors in the plane.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Differentiate component-wise",
          "workingLatex": "\\dfrac{d}{dt}(x\\mathbf{i} + y\\mathbf{j}) = \\dot{x}\\mathbf{i} + \\dot{y}\\mathbf{j}",
          "explanation": "Treat $\\mathbf{i}$ and $\\mathbf{j}$ components separately.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Integrate component-wise",
          "workingLatex": "\\int (a_x\\mathbf{i} + a_y\\mathbf{j})\\,dt",
          "explanation": "Integrate each component and add a vector constant.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Apply initial conditions",
          "workingLatex": "\\text{Use given values at } t = 0",
          "explanation": "Fix constants of integration from initial velocity or position.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Speed formula",
          "workingLatex": "|\\mathbf{v}| = \\sqrt{v_x^{2} + v_y^{2}}",
          "explanation": "Speed is the magnitude of the velocity vector.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Check units",
          "workingLatex": "\\text{m, m s}^{-1}, \\text{m s}^{-2}",
          "explanation": "Use consistent SI units.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) Speed is constant at 4 m s$^{-1}$. (b) $\\mathbf{r} = 4(1-\\cos t)\\mathbf{i} + 4\\sin t\\,\\mathbf{j}$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Further kinematics",
    "subtopicId": "al.y2.mech.further-kinematics",
    "questionDiagram": null,
    "id": "al.y2.mech.further-kinematics.q063",
    "tags": [
      "context",
      "drone",
      "multi-step"
    ],
    "difficulty": "Hard",
    "marks": 9,
    "answerType": "written",
    "questionText": "A drone flies with velocity $\\mathbf{v} = (5 - t)\\mathbf{i} + (2t - 3)\\mathbf{j}$ m s$^{-1}$. (a) Find when it is at rest. (b) Find the acceleration. (c) Describe the motion.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "(a) v_x=0",
          "workingLatex": "5-t=0 \\Rightarrow t=5",
          "explanation": "Horizontal rest.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "(a) v_y=0",
          "workingLatex": "2t-3=0 \\Rightarrow t=1.5",
          "explanation": "Vertical rest.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "(a) Conclusion",
          "workingLatex": "\\text{Never simultaneously at rest}",
          "explanation": "Different times.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "(b) Acceleration",
          "workingLatex": "\\mathbf{a} = -\\mathbf{i} + 2\\mathbf{j}",
          "explanation": "Constant acceleration.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "(c) Description",
          "workingLatex": "\\text{Parabolic path with constant } \\mathbf{a}",
          "explanation": "2D variable velocity, constant acceleration.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "\\text{Never at rest};\\; \\mathbf{a}=-\\mathbf{i}+2\\mathbf{j}",
          "explanation": "All parts.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Context",
          "workingLatex": "\\text{Drone slows horizontally, speeds up vertically}",
          "explanation": "Physical interpretation.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Use vector notation",
          "workingLatex": "\\mathbf{r} = x\\mathbf{i} + y\\mathbf{j}",
          "explanation": "Write position, velocity and acceleration as vectors in the plane.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Differentiate component-wise",
          "workingLatex": "\\dfrac{d}{dt}(x\\mathbf{i} + y\\mathbf{j}) = \\dot{x}\\mathbf{i} + \\dot{y}\\mathbf{j}",
          "explanation": "Treat $\\mathbf{i}$ and $\\mathbf{j}$ components separately.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Integrate component-wise",
          "workingLatex": "\\int (a_x\\mathbf{i} + a_y\\mathbf{j})\\,dt",
          "explanation": "Integrate each component and add a vector constant.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Apply initial conditions",
          "workingLatex": "\\text{Use given values at } t = 0",
          "explanation": "Fix constants of integration from initial velocity or position.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Speed formula",
          "workingLatex": "|\\mathbf{v}| = \\sqrt{v_x^{2} + v_y^{2}}",
          "explanation": "Speed is the magnitude of the velocity vector.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Check units",
          "workingLatex": "\\text{m, m s}^{-1}, \\text{m s}^{-2}",
          "explanation": "Use consistent SI units.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) Never instantaneously at rest. (b) $\\mathbf{a} = -\\mathbf{i} + 2\\mathbf{j}$ m s$^{-2}$. (c) Motion under constant acceleration in 2D."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Further kinematics",
    "subtopicId": "al.y2.mech.further-kinematics",
    "questionDiagram": null,
    "id": "al.y2.mech.further-kinematics.q064",
    "tags": [
      "origin",
      "multi-step"
    ],
    "difficulty": "Hard",
    "marks": 9,
    "answerType": "written",
    "questionText": "A particle has $\\mathbf{r} = (3t^{2} - 2t^{3})\\mathbf{i} + (4t^{2})\\mathbf{j}$. (a) Find when it returns to the origin. (b) Find the speed at $t = 1$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "(a) Origin",
          "workingLatex": "3t^{2}-2t^{3}=0 \\text{ and } 4t^{2}=0",
          "explanation": "Both zero.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "(a) From y",
          "workingLatex": "t=0",
          "explanation": "First pass.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "(a) From x",
          "workingLatex": "t^{2}(3-2t)=0 \\Rightarrow t=0 \\text{ or } t=1.5",
          "explanation": "Return when both zero.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "(a) Check t=1.5",
          "workingLatex": "4(1.5)^{2} \\neq 0",
          "explanation": "Only $t=0$ at origin.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "(b) v at t=1",
          "workingLatex": "\\mathbf{v} = 0\\mathbf{i} + 8\\mathbf{j}",
          "explanation": "Differentiate and substitute.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "(b) Speed",
          "workingLatex": "8\\ \\text{m s}^{-1}",
          "explanation": "Vertical only at $t=1$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Answer",
          "workingLatex": "t=0 \\text{ only};\\; \\text{speed}=8",
          "explanation": "Both parts.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Use vector notation",
          "workingLatex": "\\mathbf{r} = x\\mathbf{i} + y\\mathbf{j}",
          "explanation": "Write position, velocity and acceleration as vectors in the plane.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Differentiate component-wise",
          "workingLatex": "\\dfrac{d}{dt}(x\\mathbf{i} + y\\mathbf{j}) = \\dot{x}\\mathbf{i} + \\dot{y}\\mathbf{j}",
          "explanation": "Treat $\\mathbf{i}$ and $\\mathbf{j}$ components separately.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Integrate component-wise",
          "workingLatex": "\\int (a_x\\mathbf{i} + a_y\\mathbf{j})\\,dt",
          "explanation": "Integrate each component and add a vector constant.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Apply initial conditions",
          "workingLatex": "\\text{Use given values at } t = 0",
          "explanation": "Fix constants of integration from initial velocity or position.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Speed formula",
          "workingLatex": "|\\mathbf{v}| = \\sqrt{v_x^{2} + v_y^{2}}",
          "explanation": "Speed is the magnitude of the velocity vector.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Check units",
          "workingLatex": "\\text{m, m s}^{-1}, \\text{m s}^{-2}",
          "explanation": "Use consistent SI units.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) At origin only at $t = 0$. (b) Speed at $t=1$ is $8$ m s$^{-1}$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Further kinematics",
    "subtopicId": "al.y2.mech.further-kinematics",
    "questionDiagram": null,
    "id": "al.y2.mech.further-kinematics.q065",
    "tags": [
      "speed-function",
      "multi-step"
    ],
    "difficulty": "Hard",
    "marks": 10,
    "answerType": "written",
    "questionText": "Given $\\mathbf{a} = (2t)\\mathbf{i} + (6t)\\mathbf{j}$ with $\\mathbf{v}(0) = 4\\mathbf{i} + 2\\mathbf{j}$, find the speed as a function of $t$ and hence find the speed when $t = 2$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Integrate a",
          "workingLatex": "\\mathbf{v} = (t^{2}+4)\\mathbf{i} + (3t^{2}+2)\\mathbf{j}",
          "explanation": "Use IC.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Speed squared",
          "workingLatex": "|\\mathbf{v}|^{2} = (t^{2}+4)^{2} + (3t^{2}+2)^{2}",
          "explanation": "Expand components.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "At t=2",
          "workingLatex": "\\mathbf{v} = 8\\mathbf{i} + 14\\mathbf{j}",
          "explanation": "Substitute.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Speed",
          "workingLatex": "|\\mathbf{v}| = \\sqrt{64+196} = \\sqrt{260} = 2\\sqrt{65}",
          "explanation": "Evaluate.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "General form",
          "workingLatex": "|\\mathbf{v}| = \\sqrt{(t^{2}+4)^{2}+(3t^{2}+2)^{2}}",
          "explanation": "Function of $t$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "|\\mathbf{v}|=2\\sqrt{65}\\ \\text{at } t=2",
          "explanation": "Numerical answer.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check IC",
          "workingLatex": "\\mathbf{v}(0)=4\\mathbf{i}+2\\mathbf{j}",
          "explanation": "Verified.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Use vector notation",
          "workingLatex": "\\mathbf{r} = x\\mathbf{i} + y\\mathbf{j}",
          "explanation": "Write position, velocity and acceleration as vectors in the plane.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Differentiate component-wise",
          "workingLatex": "\\dfrac{d}{dt}(x\\mathbf{i} + y\\mathbf{j}) = \\dot{x}\\mathbf{i} + \\dot{y}\\mathbf{j}",
          "explanation": "Treat $\\mathbf{i}$ and $\\mathbf{j}$ components separately.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Integrate component-wise",
          "workingLatex": "\\int (a_x\\mathbf{i} + a_y\\mathbf{j})\\,dt",
          "explanation": "Integrate each component and add a vector constant.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Apply initial conditions",
          "workingLatex": "\\text{Use given values at } t = 0",
          "explanation": "Fix constants of integration from initial velocity or position.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Speed formula",
          "workingLatex": "|\\mathbf{v}| = \\sqrt{v_x^{2} + v_y^{2}}",
          "explanation": "Speed is the magnitude of the velocity vector.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Check units",
          "workingLatex": "\\text{m, m s}^{-1}, \\text{m s}^{-2}",
          "explanation": "Use consistent SI units.",
          "diagram": null
        }
      ],
      "finalAnswer": "$|\\mathbf{v}| = \\sqrt{(t^{2}+4)^{2}+(3t^{2}+2)^{2}}$; at $t=2$, speed $= 2\\sqrt{65} \\approx 16.1$ m s$^{-1}$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Further kinematics",
    "subtopicId": "al.y2.mech.further-kinematics",
    "questionDiagram": null,
    "id": "al.y2.mech.further-kinematics.q066",
    "tags": [
      "parametric",
      "multi-step"
    ],
    "difficulty": "Hard",
    "marks": 10,
    "answerType": "written",
    "questionText": "A particle moves in the plane with $\\mathbf{v} = at\\mathbf{i} + bt^{2}\\mathbf{j}$ where $a=4$ and $b=2$. Starting from the origin, find (a) $\\mathbf{r}$, (b) the coordinates when $t=2$, (c) the magnitude of acceleration at $t=2$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "(a) Integrate",
          "workingLatex": "\\mathbf{r} = 2t^{2}\\mathbf{i} + \\tfrac{2t^{3}}{3}\\mathbf{j}",
          "explanation": "From origin.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "(b) At t=2",
          "workingLatex": "\\mathbf{r} = 8\\mathbf{i} + \\tfrac{16}{3}\\mathbf{j}",
          "explanation": "Coordinates.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "(c) Acceleration",
          "workingLatex": "\\mathbf{a} = 4\\mathbf{i} + 4t\\mathbf{j}",
          "explanation": "Differentiate velocity.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "(c) At t=2",
          "workingLatex": "\\mathbf{a} = 4\\mathbf{i} + 8\\mathbf{j}",
          "explanation": "Substitute.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "(c) |a|",
          "workingLatex": "\\sqrt{16+64} = \\sqrt{80} = 4\\sqrt{5}",
          "explanation": "Magnitude.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "\\mathbf{r}=8\\mathbf{i}+\\tfrac{16}{3}\\mathbf{j};\\; |\\mathbf{a}|=4\\sqrt{5}",
          "explanation": "All parts.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Units",
          "workingLatex": "\\text{m and s as appropriate}",
          "explanation": "Include units in context.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Use vector notation",
          "workingLatex": "\\mathbf{r} = x\\mathbf{i} + y\\mathbf{j}",
          "explanation": "Write position, velocity and acceleration as vectors in the plane.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Differentiate component-wise",
          "workingLatex": "\\dfrac{d}{dt}(x\\mathbf{i} + y\\mathbf{j}) = \\dot{x}\\mathbf{i} + \\dot{y}\\mathbf{j}",
          "explanation": "Treat $\\mathbf{i}$ and $\\mathbf{j}$ components separately.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Integrate component-wise",
          "workingLatex": "\\int (a_x\\mathbf{i} + a_y\\mathbf{j})\\,dt",
          "explanation": "Integrate each component and add a vector constant.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Apply initial conditions",
          "workingLatex": "\\text{Use given values at } t = 0",
          "explanation": "Fix constants of integration from initial velocity or position.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Speed formula",
          "workingLatex": "|\\mathbf{v}| = \\sqrt{v_x^{2} + v_y^{2}}",
          "explanation": "Speed is the magnitude of the velocity vector.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Check units",
          "workingLatex": "\\text{m, m s}^{-1}, \\text{m s}^{-2}",
          "explanation": "Use consistent SI units.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $\\mathbf{r} = 2t^{2}\\mathbf{i} + \\tfrac{2t^{3}}{3}\\mathbf{j}$. (b) $(8, \\tfrac{16}{3})$. (c) $|\\mathbf{a}| = 4\\sqrt{5}$ m s$^{-2}$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Further kinematics",
    "subtopicId": "al.y2.mech.further-kinematics",
    "questionDiagram": null,
    "id": "al.y2.mech.further-kinematics.q067",
    "tags": [
      "proof",
      "suvat",
      "multi-step"
    ],
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "written",
    "questionText": "Show that if $\\mathbf{a}$ is constant, then $\\mathbf{r} = \\mathbf{r}_0 + \\mathbf{u}t + \\tfrac{1}{2}\\mathbf{a}t^{2}$ where $\\mathbf{u}$ is the initial velocity.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Constant a",
          "workingLatex": "\\mathbf{a} = \\mathbf{k}",
          "explanation": "Acceleration independent of $t$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Integrate once",
          "workingLatex": "\\mathbf{v} = \\mathbf{k}t + \\mathbf{c}_1",
          "explanation": "First integration.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Apply v(0)=u",
          "workingLatex": "\\mathbf{v} = \\mathbf{a}t + \\mathbf{u}",
          "explanation": "Initial velocity gives $\\mathbf{c}_1 = \\mathbf{u}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Integrate again",
          "workingLatex": "\\mathbf{r} = \\tfrac{1}{2}\\mathbf{a}t^{2} + \\mathbf{u}t + \\mathbf{c}_2",
          "explanation": "Second integration.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Apply r(0)=r_0",
          "workingLatex": "\\mathbf{r} = \\mathbf{r}_0 + \\mathbf{u}t + \\tfrac{1}{2}\\mathbf{a}t^{2}",
          "explanation": "Initial position.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Conclusion",
          "workingLatex": "\\text{Vector SUVAT equation}",
          "explanation": "2D extension of constant acceleration.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Application",
          "workingLatex": "\\text{Use for projectile and linear motion}",
          "explanation": "Fundamental kinematics result.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Use vector notation",
          "workingLatex": "\\mathbf{r} = x\\mathbf{i} + y\\mathbf{j}",
          "explanation": "Write position, velocity and acceleration as vectors in the plane.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Differentiate component-wise",
          "workingLatex": "\\dfrac{d}{dt}(x\\mathbf{i} + y\\mathbf{j}) = \\dot{x}\\mathbf{i} + \\dot{y}\\mathbf{j}",
          "explanation": "Treat $\\mathbf{i}$ and $\\mathbf{j}$ components separately.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Integrate component-wise",
          "workingLatex": "\\int (a_x\\mathbf{i} + a_y\\mathbf{j})\\,dt",
          "explanation": "Integrate each component and add a vector constant.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Apply initial conditions",
          "workingLatex": "\\text{Use given values at } t = 0",
          "explanation": "Fix constants of integration from initial velocity or position.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Speed formula",
          "workingLatex": "|\\mathbf{v}| = \\sqrt{v_x^{2} + v_y^{2}}",
          "explanation": "Speed is the magnitude of the velocity vector.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Check units",
          "workingLatex": "\\text{m, m s}^{-1}, \\text{m s}^{-2}",
          "explanation": "Use consistent SI units.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\mathbf{r} = \\mathbf{r}_0 + \\mathbf{u}t + \\tfrac{1}{2}\\mathbf{a}t^{2}$ — the vector form of the constant-acceleration displacement equation."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Further kinematics",
    "subtopicId": "al.y2.mech.further-kinematics",
    "questionDiagram": null,
    "id": "al.y2.mech.further-kinematics.q068",
    "tags": [
      "logarithmic",
      "multi-step"
    ],
    "difficulty": "Hard",
    "marks": 9,
    "answerType": "written",
    "questionText": "A particle P has $\\mathbf{r} = (2\\ln(t+1))\\mathbf{i} + (t^{2}-1)\\mathbf{j}$ for $t \\geq 0$. Find $\\mathbf{v}$ when $t = 1$ and describe what happens as $t \\to 0^{+}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Differentiate",
          "workingLatex": "\\mathbf{v} = \\tfrac{2}{t+1}\\mathbf{i} + 2t\\mathbf{j}",
          "explanation": "Use chain rule on $\\ln(t+1)$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "At t=1",
          "workingLatex": "\\mathbf{v} = \\mathbf{i} + 2\\mathbf{j}",
          "explanation": "Substitute.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "As t→0⁺",
          "workingLatex": "v_x \\to 2,\\; v_y \\to 0",
          "explanation": "Horizontal component finite, vertical zero.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Interpret",
          "workingLatex": "\\text{Starts from } \\mathbf{r}(0) = \\mathbf{0}",
          "explanation": "At origin when $t=0$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Speed at t=1",
          "workingLatex": "|\\mathbf{v}| = \\sqrt{5}",
          "explanation": "Magnitude.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "\\mathbf{v}(1)=\\mathbf{i}+2\\mathbf{j};\\; v_x \\to 2",
          "explanation": "Both parts.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Note",
          "workingLatex": "\\ln(1)=0",
          "explanation": "Position starts at origin.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Use vector notation",
          "workingLatex": "\\mathbf{r} = x\\mathbf{i} + y\\mathbf{j}",
          "explanation": "Write position, velocity and acceleration as vectors in the plane.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Differentiate component-wise",
          "workingLatex": "\\dfrac{d}{dt}(x\\mathbf{i} + y\\mathbf{j}) = \\dot{x}\\mathbf{i} + \\dot{y}\\mathbf{j}",
          "explanation": "Treat $\\mathbf{i}$ and $\\mathbf{j}$ components separately.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Integrate component-wise",
          "workingLatex": "\\int (a_x\\mathbf{i} + a_y\\mathbf{j})\\,dt",
          "explanation": "Integrate each component and add a vector constant.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Apply initial conditions",
          "workingLatex": "\\text{Use given values at } t = 0",
          "explanation": "Fix constants of integration from initial velocity or position.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Speed formula",
          "workingLatex": "|\\mathbf{v}| = \\sqrt{v_x^{2} + v_y^{2}}",
          "explanation": "Speed is the magnitude of the velocity vector.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Check units",
          "workingLatex": "\\text{m, m s}^{-1}, \\text{m s}^{-2}",
          "explanation": "Use consistent SI units.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\mathbf{v}(1) = \\mathbf{i} + 2\\mathbf{j}$; as $t \\to 0^{+}$, $v_x \\to 2$ and $v_y \\to 0$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Further kinematics",
    "subtopicId": "al.y2.mech.further-kinematics",
    "questionDiagram": null,
    "id": "al.y2.mech.further-kinematics.q069",
    "tags": [
      "navigation",
      "context",
      "multi-step"
    ],
    "difficulty": "Hard",
    "marks": 12,
    "answerType": "written",
    "questionText": "A ship sails with velocity $12\\mathbf{i}$ km h$^{-1}$ relative to the water. A current of $5\\mathbf{j}$ km h$^{-1}$ acts. (a) Find the resultant velocity. (b) How long to travel 60 km in the resultant direction? (c) Find the bearing of travel.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "(a) Resultant",
          "workingLatex": "\\mathbf{v} = 12\\mathbf{i} + 5\\mathbf{j}",
          "explanation": "Vector sum.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "(a) Speed",
          "workingLatex": "|\\mathbf{v}| = 13\\ \\text{km h}^{-1}",
          "explanation": "Magnitude.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "(b) Time",
          "workingLatex": "t = \\tfrac{60}{13} \\approx 4.62\\ \\text{hours}",
          "explanation": "Distance ÷ speed.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "(c) Bearing",
          "workingLatex": "\\tan\\theta = \\tfrac{5}{12}",
          "explanation": "Angle from east.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "(c) Angle",
          "workingLatex": "\\theta = 22.6°",
          "explanation": "North of east.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "\\mathbf{v}=12\\mathbf{i}+5\\mathbf{j};\\; 4.62\\ \\text{h};\\; 22.6°",
          "explanation": "All parts.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Context",
          "workingLatex": "\\text{Ship is carried north by current}",
          "explanation": "Navigation problem.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check",
          "workingLatex": "13 \\times 4.62 \\approx 60",
          "explanation": "Distance verified.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Use vector notation",
          "workingLatex": "\\mathbf{r} = x\\mathbf{i} + y\\mathbf{j}",
          "explanation": "Write position, velocity and acceleration as vectors in the plane.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Differentiate component-wise",
          "workingLatex": "\\dfrac{d}{dt}(x\\mathbf{i} + y\\mathbf{j}) = \\dot{x}\\mathbf{i} + \\dot{y}\\mathbf{j}",
          "explanation": "Treat $\\mathbf{i}$ and $\\mathbf{j}$ components separately.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Integrate component-wise",
          "workingLatex": "\\int (a_x\\mathbf{i} + a_y\\mathbf{j})\\,dt",
          "explanation": "Integrate each component and add a vector constant.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Apply initial conditions",
          "workingLatex": "\\text{Use given values at } t = 0",
          "explanation": "Fix constants of integration from initial velocity or position.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Speed formula",
          "workingLatex": "|\\mathbf{v}| = \\sqrt{v_x^{2} + v_y^{2}}",
          "explanation": "Speed is the magnitude of the velocity vector.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $\\mathbf{v} = 12\\mathbf{i} + 5\\mathbf{j}$ km h$^{-1}$, speed 13 km h$^{-1}$. (b) $t = \\tfrac{60}{13} \\approx 4.62$ h. (c) Bearing $22.6°$ from $\\mathbf{i}$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Further kinematics",
    "subtopicId": "al.y2.mech.further-kinematics",
    "questionDiagram": null,
    "id": "al.y2.mech.further-kinematics.q070",
    "tags": [
      "optimisation",
      "multi-step",
      "multi-step"
    ],
    "difficulty": "Hard",
    "marks": 14,
    "answerType": "written",
    "questionText": "A particle moves with $\\mathbf{a} = -4\\mathbf{i} - 4\\mathbf{j}$. At $t=0$, $\\mathbf{v} = 8\\mathbf{i} + 12\\mathbf{j}$ and $\\mathbf{r} = 2\\mathbf{i} + 3\\mathbf{j}$. (a) Find $\\mathbf{v}$ and $\\mathbf{r}$. (b) Find when the particle is closest to the origin. (c) Find that minimum distance.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "(a) Velocity",
          "workingLatex": "\\mathbf{v} = (8-4t)\\mathbf{i} + (12-4t)\\mathbf{j}",
          "explanation": "Integrate constant acceleration.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "(a) Position",
          "workingLatex": "\\mathbf{r} = (2+8t-2t^{2})\\mathbf{i} + (3+12t-2t^{2})\\mathbf{j}",
          "explanation": "Integrate velocity.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "(b) Distance squared",
          "workingLatex": "d^{2} = (2+8t-2t^{2})^{2} + (3+12t-2t^{2})^{2}",
          "explanation": "Minimise distance to origin.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "(b) Differentiate",
          "workingLatex": "\\tfrac{d(d^{2})}{dt} = 0",
          "explanation": "Set derivative to zero.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "(b) Solve",
          "workingLatex": "t = 2.5",
          "explanation": "Time of closest approach.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "(b) Position at t=2.5",
          "workingLatex": "\\mathbf{r} = 4.5\\mathbf{i} + 8.5\\mathbf{j}",
          "explanation": "Closest point.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "(c) Min distance",
          "workingLatex": "d = \\sqrt{92.5} \\approx 9.62\\ \\text{m}",
          "explanation": "Minimum distance.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Answer",
          "workingLatex": "\\mathbf{v},\\mathbf{r} \\text{ as above};\\; t=2.5;\\; d \\approx 9.62",
          "explanation": "Complete.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Check v(0)",
          "workingLatex": "8\\mathbf{i}+12\\mathbf{j}",
          "explanation": "IC satisfied.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Interpret",
          "workingLatex": "\\text{Parabolic path under gravity-like acceleration}",
          "explanation": "Projectile-style motion.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Use vector notation",
          "workingLatex": "\\mathbf{r} = x\\mathbf{i} + y\\mathbf{j}",
          "explanation": "Write position, velocity and acceleration as vectors in the plane.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Differentiate component-wise",
          "workingLatex": "\\dfrac{d}{dt}(x\\mathbf{i} + y\\mathbf{j}) = \\dot{x}\\mathbf{i} + \\dot{y}\\mathbf{j}",
          "explanation": "Treat $\\mathbf{i}$ and $\\mathbf{j}$ components separately.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Integrate component-wise",
          "workingLatex": "\\int (a_x\\mathbf{i} + a_y\\mathbf{j})\\,dt",
          "explanation": "Integrate each component and add a vector constant.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $\\mathbf{v} = (8-4t)\\mathbf{i} + (12-4t)\\mathbf{j}$, $\\mathbf{r} = (2+8t-2t^{2})\\mathbf{i} + (3+12t-2t^{2})\\mathbf{j}$. (b) Closest at $t = 2.5$ s. (c) Minimum distance $\\approx 9.62$ m."
    }
  }
];
