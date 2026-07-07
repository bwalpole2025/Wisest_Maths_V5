import { Question } from "@/lib/types";

/**
 * A-Level Maths · Year 2 Mechanics · Further kinematics
 * Vector methods in 2D; position, velocity and acceleration vectors;
 * differentiation and integration with initial conditions; speed, distance and bearing. 70 questions.
 */
export const questions: Question[] = 
[
  {
    "id": "al.y2.mech.further-kinematics.q001",
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Further kinematics",
    "subtopicId": "al.y2.mech.further-kinematics",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "written",
    "tags": [
      "vectors",
      "position",
      "i-j-notation"
    ],
    "questionText": "A particle moves in a plane. Explain what is meant by the position vector $\\mathbf{r} = x\\mathbf{i} + y\\mathbf{j}$ and state how velocity and acceleration are related to $\\mathbf{r}$ using calculus.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Define the position vector",
          "workingLatex": "\\mathbf{r} = x\\mathbf{i} + y\\mathbf{j}",
          "explanation": "$\\mathbf{r}$ gives the displacement of the particle from the origin to its current position $(x, y)$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Explain the unit vectors",
          "workingLatex": "\\mathbf{i} \\text{ and } \\mathbf{j}",
          "explanation": "$\\mathbf{i}$ is the unit vector in the $x$-direction; $\\mathbf{j}$ is the unit vector in the $y$-direction.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Define velocity",
          "workingLatex": "\\mathbf{v} = \\dfrac{\\mathrm{d}\\mathbf{r}}{\\mathrm{d}t}",
          "explanation": "Velocity is the rate of change of position with respect to time.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Component form of velocity",
          "workingLatex": "\\mathbf{v} = \\dfrac{\\mathrm{d}x}{\\mathrm{d}t}\\mathbf{i} + \\dfrac{\\mathrm{d}y}{\\mathrm{d}t}\\mathbf{j}",
          "explanation": "Differentiate each component of $\\mathbf{r}$ separately.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Define acceleration",
          "workingLatex": "\\mathbf{a} = \\dfrac{\\mathrm{d}\\mathbf{v}}{\\mathrm{d}t} = \\dfrac{\\mathrm{d}^2\\mathbf{r}}{\\mathrm{d}t^2}",
          "explanation": "Acceleration is the rate of change of velocity.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Summarise the calculus chain",
          "workingLatex": "\\mathbf{r} \\xrightarrow{\\text{diff}} \\mathbf{v} \\xrightarrow{\\text{diff}} \\mathbf{a}",
          "explanation": "Differentiate position to get velocity, and velocity to get acceleration.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\mathbf{r}$ is the position from the origin; $\\mathbf{v} = \\dfrac{\\mathrm{d}\\mathbf{r}}{\\mathrm{d}t}$; $\\mathbf{a} = \\dfrac{\\mathrm{d}\\mathbf{v}}{\\mathrm{d}t}$."
    }
  },
  {
    "id": "al.y2.mech.further-kinematics.q002",
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Further kinematics",
    "subtopicId": "al.y2.mech.further-kinematics",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": [
      "differentiation",
      "velocity",
      "vectors"
    ],
    "questionText": "A particle moves so that $\\mathbf{r} = 3t^2\\mathbf{i} + 2t\\mathbf{j}$, where $t$ is in seconds. Find the velocity vector $\\mathbf{v}$ as a function of $t$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write the position vector",
          "workingLatex": "\\mathbf{r} = 3t^2\\mathbf{i} + 2t\\mathbf{j}",
          "explanation": "Position in component form.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall the velocity formula",
          "workingLatex": "\\mathbf{v} = \\dfrac{\\mathrm{d}\\mathbf{r}}{\\mathrm{d}t}",
          "explanation": "Differentiate each component with respect to $t$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Differentiate the $\\mathbf{i}$-component",
          "workingLatex": "\\dfrac{\\mathrm{d}}{\\mathrm{d}t}(3t^2) = 6t",
          "explanation": "Power rule: $6t$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Differentiate the $\\mathbf{j}$-component",
          "workingLatex": "\\dfrac{\\mathrm{d}}{\\mathrm{d}t}(2t) = 2",
          "explanation": "Derivative of $2t$ is $2$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Combine",
          "workingLatex": "\\mathbf{v} = 6t\\mathbf{i} + 2\\mathbf{j}",
          "explanation": "Velocity vector in component form.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State units",
          "workingLatex": "\\text{m s}^{-1}",
          "explanation": "Velocity is measured in metres per second.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\mathbf{v} = 6t\\mathbf{i} + 2\\mathbf{j}$ m s$^{-1}$"
    }
  },
  {
    "id": "al.y2.mech.further-kinematics.q003",
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Further kinematics",
    "subtopicId": "al.y2.mech.further-kinematics",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": [
      "differentiation",
      "velocity"
    ],
    "questionText": "A particle moves with $\\mathbf{r} = (4t^2)\\mathbf{i} + (3t)\\mathbf{j}$. Find $\\mathbf{v} = \\dfrac{\\mathrm{d}\\mathbf{r}}{\\mathrm{d}t}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Differentiate $\\mathbf{r}$",
          "workingLatex": "\\mathbf{v} = \\dfrac{\\mathrm{d}\\mathbf{r}}{\\mathrm{d}t}",
          "explanation": "Differentiate each component separately.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate $\\mathbf{i}$-component",
          "workingLatex": "\\dfrac{\\mathrm{d}}{\\mathrm{d}t}(4t^2) = 8t",
          "explanation": "$x$-component of velocity: $8t$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Differentiate $\\mathbf{j}$-component",
          "workingLatex": "\\dfrac{\\mathrm{d}}{\\mathrm{d}t}(3t) = 3",
          "explanation": "$y$-component of velocity: $3$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write velocity vector",
          "workingLatex": "\\mathbf{v} = 8t\\mathbf{i} + 3\\mathbf{j}",
          "explanation": "Combine the components.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check dimensions",
          "workingLatex": "\\text{Each component has units m s}^{-1}",
          "explanation": "Velocity components are rates of change of displacement.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "\\mathbf{v} = 8t\\mathbf{i} + 3\\mathbf{j}",
          "explanation": "$\\mathbf{v} = 8t\\mathbf{i} + 3\\mathbf{j}$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\mathbf{v} = 8t\\mathbf{i} + 3\\mathbf{j}$"
    }
  },
  {
    "id": "al.y2.mech.further-kinematics.q004",
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Further kinematics",
    "subtopicId": "al.y2.mech.further-kinematics",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": [
      "differentiation",
      "velocity"
    ],
    "questionText": "A particle moves with $\\mathbf{r} = (t^3)\\mathbf{i} + (t^2)\\mathbf{j}$. Find $\\mathbf{v} = \\dfrac{\\mathrm{d}\\mathbf{r}}{\\mathrm{d}t}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Differentiate $\\mathbf{r}$",
          "workingLatex": "\\mathbf{v} = \\dfrac{\\mathrm{d}\\mathbf{r}}{\\mathrm{d}t}",
          "explanation": "Differentiate each component separately.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate $\\mathbf{i}$-component",
          "workingLatex": "\\dfrac{\\mathrm{d}}{\\mathrm{d}t}(t^3) = 3t^2",
          "explanation": "$x$-component of velocity: $3t^2$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Differentiate $\\mathbf{j}$-component",
          "workingLatex": "\\dfrac{\\mathrm{d}}{\\mathrm{d}t}(t^2) = 2t",
          "explanation": "$y$-component of velocity: $2t$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write velocity vector",
          "workingLatex": "\\mathbf{v} = 3t^2\\mathbf{i} + 2t\\mathbf{j}",
          "explanation": "Combine the components.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check dimensions",
          "workingLatex": "\\text{Each component has units m s}^{-1}",
          "explanation": "Velocity components are rates of change of displacement.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "\\mathbf{v} = 3t^2\\mathbf{i} + 2t\\mathbf{j}",
          "explanation": "$\\mathbf{v} = 3t^2\\mathbf{i} + 2t\\mathbf{j}$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\mathbf{v} = 3t^2\\mathbf{i} + 2t\\mathbf{j}$"
    }
  },
  {
    "id": "al.y2.mech.further-kinematics.q005",
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Further kinematics",
    "subtopicId": "al.y2.mech.further-kinematics",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": [
      "differentiation",
      "velocity"
    ],
    "questionText": "A particle moves with $\\mathbf{r} = (5t)\\mathbf{i} + (t^2)\\mathbf{j}$. Find $\\mathbf{v} = \\dfrac{\\mathrm{d}\\mathbf{r}}{\\mathrm{d}t}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Differentiate $\\mathbf{r}$",
          "workingLatex": "\\mathbf{v} = \\dfrac{\\mathrm{d}\\mathbf{r}}{\\mathrm{d}t}",
          "explanation": "Differentiate each component separately.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate $\\mathbf{i}$-component",
          "workingLatex": "\\dfrac{\\mathrm{d}}{\\mathrm{d}t}(5t) = 5",
          "explanation": "$x$-component of velocity: $5$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Differentiate $\\mathbf{j}$-component",
          "workingLatex": "\\dfrac{\\mathrm{d}}{\\mathrm{d}t}(t^2) = 2t",
          "explanation": "$y$-component of velocity: $2t$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write velocity vector",
          "workingLatex": "\\mathbf{v} = 5\\mathbf{i} + 2t\\mathbf{j}",
          "explanation": "Combine the components.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check dimensions",
          "workingLatex": "\\text{Each component has units m s}^{-1}",
          "explanation": "Velocity components are rates of change of displacement.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "\\mathbf{v} = 5\\mathbf{i} + 2t\\mathbf{j}",
          "explanation": "$\\mathbf{v} = 5\\mathbf{i} + 2t\\mathbf{j}$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\mathbf{v} = 5\\mathbf{i} + 2t\\mathbf{j}$"
    }
  },
  {
    "id": "al.y2.mech.further-kinematics.q006",
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Further kinematics",
    "subtopicId": "al.y2.mech.further-kinematics",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": [
      "differentiation",
      "velocity"
    ],
    "questionText": "A particle moves with $\\mathbf{r} = (2t^2 + 1)\\mathbf{i} + (4t)\\mathbf{j}$. Find $\\mathbf{v} = \\dfrac{\\mathrm{d}\\mathbf{r}}{\\mathrm{d}t}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Differentiate $\\mathbf{r}$",
          "workingLatex": "\\mathbf{v} = \\dfrac{\\mathrm{d}\\mathbf{r}}{\\mathrm{d}t}",
          "explanation": "Differentiate each component separately.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate $\\mathbf{i}$-component",
          "workingLatex": "\\dfrac{\\mathrm{d}}{\\mathrm{d}t}(2t^2 + 1) = 4t",
          "explanation": "$x$-component of velocity: $4t$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Differentiate $\\mathbf{j}$-component",
          "workingLatex": "\\dfrac{\\mathrm{d}}{\\mathrm{d}t}(4t) = 4",
          "explanation": "$y$-component of velocity: $4$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write velocity vector",
          "workingLatex": "\\mathbf{v} = 4t\\mathbf{i} + 4\\mathbf{j}",
          "explanation": "Combine the components.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check dimensions",
          "workingLatex": "\\text{Each component has units m s}^{-1}",
          "explanation": "Velocity components are rates of change of displacement.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "\\mathbf{v} = 4t\\mathbf{i} + 4\\mathbf{j}",
          "explanation": "$\\mathbf{v} = 4t\\mathbf{i} + 4\\mathbf{j}$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\mathbf{v} = 4t\\mathbf{i} + 4\\mathbf{j}$"
    }
  },
  {
    "id": "al.y2.mech.further-kinematics.q007",
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Further kinematics",
    "subtopicId": "al.y2.mech.further-kinematics",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": [
      "differentiation",
      "velocity"
    ],
    "questionText": "A particle moves with $\\mathbf{r} = (t^3 - t)\\mathbf{i} + (2t)\\mathbf{j}$. Find $\\mathbf{v} = \\dfrac{\\mathrm{d}\\mathbf{r}}{\\mathrm{d}t}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Differentiate $\\mathbf{r}$",
          "workingLatex": "\\mathbf{v} = \\dfrac{\\mathrm{d}\\mathbf{r}}{\\mathrm{d}t}",
          "explanation": "Differentiate each component separately.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate $\\mathbf{i}$-component",
          "workingLatex": "\\dfrac{\\mathrm{d}}{\\mathrm{d}t}(t^3 - t) = 3t^2 - 1",
          "explanation": "$x$-component of velocity: $3t^2 - 1$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Differentiate $\\mathbf{j}$-component",
          "workingLatex": "\\dfrac{\\mathrm{d}}{\\mathrm{d}t}(2t) = 2",
          "explanation": "$y$-component of velocity: $2$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write velocity vector",
          "workingLatex": "\\mathbf{v} = (3t^2 - 1)\\mathbf{i} + 2\\mathbf{j}",
          "explanation": "Combine the components.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check dimensions",
          "workingLatex": "\\text{Each component has units m s}^{-1}",
          "explanation": "Velocity components are rates of change of displacement.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "\\mathbf{v} = (3t^2 - 1)\\mathbf{i} + 2\\mathbf{j}",
          "explanation": "$\\mathbf{v} = (3t^2 - 1)\\mathbf{i} + 2\\mathbf{j}$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\mathbf{v} = (3t^2 - 1)\\mathbf{i} + 2\\mathbf{j}$"
    }
  },
  {
    "id": "al.y2.mech.further-kinematics.q008",
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Further kinematics",
    "subtopicId": "al.y2.mech.further-kinematics",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": [
      "differentiation",
      "velocity"
    ],
    "questionText": "A particle moves with $\\mathbf{r} = (6t)\\mathbf{i} + (t^3)\\mathbf{j}$. Find $\\mathbf{v} = \\dfrac{\\mathrm{d}\\mathbf{r}}{\\mathrm{d}t}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Differentiate $\\mathbf{r}$",
          "workingLatex": "\\mathbf{v} = \\dfrac{\\mathrm{d}\\mathbf{r}}{\\mathrm{d}t}",
          "explanation": "Differentiate each component separately.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate $\\mathbf{i}$-component",
          "workingLatex": "\\dfrac{\\mathrm{d}}{\\mathrm{d}t}(6t) = 6",
          "explanation": "$x$-component of velocity: $6$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Differentiate $\\mathbf{j}$-component",
          "workingLatex": "\\dfrac{\\mathrm{d}}{\\mathrm{d}t}(t^3) = 3t^2",
          "explanation": "$y$-component of velocity: $3t^2$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write velocity vector",
          "workingLatex": "\\mathbf{v} = 6\\mathbf{i} + 3t^2\\mathbf{j}",
          "explanation": "Combine the components.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check dimensions",
          "workingLatex": "\\text{Each component has units m s}^{-1}",
          "explanation": "Velocity components are rates of change of displacement.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "\\mathbf{v} = 6\\mathbf{i} + 3t^2\\mathbf{j}",
          "explanation": "$\\mathbf{v} = 6\\mathbf{i} + 3t^2\\mathbf{j}$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\mathbf{v} = 6\\mathbf{i} + 3t^2\\mathbf{j}$"
    }
  },
  {
    "id": "al.y2.mech.further-kinematics.q009",
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Further kinematics",
    "subtopicId": "al.y2.mech.further-kinematics",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": [
      "differentiation",
      "acceleration"
    ],
    "questionText": "A particle has velocity $\\mathbf{v} = (4t)\\mathbf{i} + (6)\\mathbf{j}$. Find the acceleration $\\mathbf{a}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the acceleration formula",
          "workingLatex": "\\mathbf{a} = \\dfrac{\\mathrm{d}\\mathbf{v}}{\\mathrm{d}t}",
          "explanation": "Differentiate velocity with respect to time.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate $\\mathbf{i}$-component",
          "workingLatex": "\\dfrac{\\mathrm{d}}{\\mathrm{d}t}(4t) = 4",
          "explanation": "$a_x = 4$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Differentiate $\\mathbf{j}$-component",
          "workingLatex": "\\dfrac{\\mathrm{d}}{\\mathrm{d}t}(6) = 0",
          "explanation": "$a_y = 0$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write acceleration",
          "workingLatex": "\\mathbf{a} = 4\\mathbf{i}",
          "explanation": "Acceleration vector.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Note the type of acceleration",
          "workingLatex": "\\text{Check each component}",
          "explanation": "Constant components mean constant acceleration in that direction.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "\\mathbf{a} = 4\\mathbf{i}",
          "explanation": "$\\mathbf{a} = 4\\mathbf{i}$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\mathbf{a} = 4\\mathbf{i}$"
    }
  },
  {
    "id": "al.y2.mech.further-kinematics.q010",
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Further kinematics",
    "subtopicId": "al.y2.mech.further-kinematics",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": [
      "differentiation",
      "acceleration"
    ],
    "questionText": "A particle has velocity $\\mathbf{v} = (3t^2)\\mathbf{i} + (2t)\\mathbf{j}$. Find the acceleration $\\mathbf{a}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the acceleration formula",
          "workingLatex": "\\mathbf{a} = \\dfrac{\\mathrm{d}\\mathbf{v}}{\\mathrm{d}t}",
          "explanation": "Differentiate velocity with respect to time.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate $\\mathbf{i}$-component",
          "workingLatex": "\\dfrac{\\mathrm{d}}{\\mathrm{d}t}(3t^2) = 6t",
          "explanation": "$a_x = 6t$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Differentiate $\\mathbf{j}$-component",
          "workingLatex": "\\dfrac{\\mathrm{d}}{\\mathrm{d}t}(2t) = 2",
          "explanation": "$a_y = 2$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write acceleration",
          "workingLatex": "\\mathbf{a} = 6t\\mathbf{i} + 2\\mathbf{j}",
          "explanation": "Acceleration vector.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Note the type of acceleration",
          "workingLatex": "\\text{Check each component}",
          "explanation": "Acceleration varies with time.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "\\mathbf{a} = 6t\\mathbf{i} + 2\\mathbf{j}",
          "explanation": "$\\mathbf{a} = 6t\\mathbf{i} + 2\\mathbf{j}$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\mathbf{a} = 6t\\mathbf{i} + 2\\mathbf{j}$"
    }
  },
  {
    "id": "al.y2.mech.further-kinematics.q011",
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Further kinematics",
    "subtopicId": "al.y2.mech.further-kinematics",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": [
      "differentiation",
      "acceleration"
    ],
    "questionText": "A particle has velocity $\\mathbf{v} = (5)\\mathbf{i} + (t^2)\\mathbf{j}$. Find the acceleration $\\mathbf{a}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the acceleration formula",
          "workingLatex": "\\mathbf{a} = \\dfrac{\\mathrm{d}\\mathbf{v}}{\\mathrm{d}t}",
          "explanation": "Differentiate velocity with respect to time.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate $\\mathbf{i}$-component",
          "workingLatex": "\\dfrac{\\mathrm{d}}{\\mathrm{d}t}(5) = 0",
          "explanation": "$a_x = 0$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Differentiate $\\mathbf{j}$-component",
          "workingLatex": "\\dfrac{\\mathrm{d}}{\\mathrm{d}t}(t^2) = 2t",
          "explanation": "$a_y = 2t$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write acceleration",
          "workingLatex": "\\mathbf{a} = 2t\\mathbf{j}",
          "explanation": "Acceleration vector.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Note the type of acceleration",
          "workingLatex": "\\text{Check each component}",
          "explanation": "Acceleration varies with time.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "\\mathbf{a} = 2t\\mathbf{j}",
          "explanation": "$\\mathbf{a} = 2t\\mathbf{j}$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\mathbf{a} = 2t\\mathbf{j}$"
    }
  },
  {
    "id": "al.y2.mech.further-kinematics.q012",
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Further kinematics",
    "subtopicId": "al.y2.mech.further-kinematics",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": [
      "differentiation",
      "acceleration"
    ],
    "questionText": "A particle has velocity $\\mathbf{v} = (2t + 1)\\mathbf{i} + (3t)\\mathbf{j}$. Find the acceleration $\\mathbf{a}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the acceleration formula",
          "workingLatex": "\\mathbf{a} = \\dfrac{\\mathrm{d}\\mathbf{v}}{\\mathrm{d}t}",
          "explanation": "Differentiate velocity with respect to time.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate $\\mathbf{i}$-component",
          "workingLatex": "\\dfrac{\\mathrm{d}}{\\mathrm{d}t}(2t + 1) = 2",
          "explanation": "$a_x = 2$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Differentiate $\\mathbf{j}$-component",
          "workingLatex": "\\dfrac{\\mathrm{d}}{\\mathrm{d}t}(3t) = 3",
          "explanation": "$a_y = 3$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write acceleration",
          "workingLatex": "\\mathbf{a} = 2\\mathbf{i} + 3\\mathbf{j}",
          "explanation": "Acceleration vector.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Note the type of acceleration",
          "workingLatex": "\\text{Check each component}",
          "explanation": "Constant components mean constant acceleration in that direction.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "\\mathbf{a} = 2\\mathbf{i} + 3\\mathbf{j}",
          "explanation": "$\\mathbf{a} = 2\\mathbf{i} + 3\\mathbf{j}$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\mathbf{a} = 2\\mathbf{i} + 3\\mathbf{j}$"
    }
  },
  {
    "id": "al.y2.mech.further-kinematics.q013",
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Further kinematics",
    "subtopicId": "al.y2.mech.further-kinematics",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "numeric",
    "tags": [
      "speed",
      "magnitude"
    ],
    "questionText": "At time $t = 2\\,\\text{s}$, a particle has velocity $\\mathbf{v} = 3\\mathbf{i} + 4\\mathbf{j}$ m s$^{-1}$. Find the speed of the particle.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Speed is the magnitude of velocity",
          "workingLatex": "|\\mathbf{v}| = \\sqrt{v_x^2 + v_y^2}",
          "explanation": "Speed is a scalar — the size of the velocity vector.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify components",
          "workingLatex": "v_x = 3, \\quad v_y = 4",
          "explanation": "Substitute the given components.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Calculate",
          "workingLatex": "|\\mathbf{v}| = \\sqrt{3^2 + 4^2} = \\sqrt{25}",
          "explanation": "$= \\sqrt{25}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate",
          "workingLatex": "|\\mathbf{v}| = 5\\,\\text{m s}^{-1}",
          "explanation": "Speed $= 5\\,\\text{m s}^{-1}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Note direction vs speed",
          "workingLatex": "\\text{Speed has no direction; velocity does}",
          "explanation": "The particle moves in the direction of $\\mathbf{v}$ at speed $|\\mathbf{v}|$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "|\\mathbf{v}| = 5\\,\\text{m s}^{-1}",
          "explanation": "Speed $= 5\\,\\text{m s}^{-1}$.",
          "diagram": null
        }
      ],
      "finalAnswer": "Speed $= 5\\,\\text{m s}^{-1}$"
    }
  },
  {
    "id": "al.y2.mech.further-kinematics.q014",
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Further kinematics",
    "subtopicId": "al.y2.mech.further-kinematics",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "numeric",
    "tags": [
      "speed",
      "magnitude"
    ],
    "questionText": "At time $t = 3\\,\\text{s}$, a particle has velocity $\\mathbf{v} = 6\\mathbf{i} + 8\\mathbf{j}$ m s$^{-1}$. Find the speed of the particle.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Speed is the magnitude of velocity",
          "workingLatex": "|\\mathbf{v}| = \\sqrt{v_x^2 + v_y^2}",
          "explanation": "Speed is a scalar — the size of the velocity vector.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify components",
          "workingLatex": "v_x = 6, \\quad v_y = 8",
          "explanation": "Substitute the given components.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Calculate",
          "workingLatex": "|\\mathbf{v}| = \\sqrt{6^2 + 8^2} = \\sqrt{100}",
          "explanation": "$= \\sqrt{100}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate",
          "workingLatex": "|\\mathbf{v}| = 10\\,\\text{m s}^{-1}",
          "explanation": "Speed $= 10\\,\\text{m s}^{-1}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Note direction vs speed",
          "workingLatex": "\\text{Speed has no direction; velocity does}",
          "explanation": "The particle moves in the direction of $\\mathbf{v}$ at speed $|\\mathbf{v}|$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "|\\mathbf{v}| = 10\\,\\text{m s}^{-1}",
          "explanation": "Speed $= 10\\,\\text{m s}^{-1}$.",
          "diagram": null
        }
      ],
      "finalAnswer": "Speed $= 10\\,\\text{m s}^{-1}$"
    }
  },
  {
    "id": "al.y2.mech.further-kinematics.q015",
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Further kinematics",
    "subtopicId": "al.y2.mech.further-kinematics",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "numeric",
    "tags": [
      "speed",
      "magnitude"
    ],
    "questionText": "At time $t = 4\\,\\text{s}$, a particle has velocity $\\mathbf{v} = 5\\mathbf{i} + 0\\mathbf{j}$ m s$^{-1}$. Find the speed of the particle.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Speed is the magnitude of velocity",
          "workingLatex": "|\\mathbf{v}| = \\sqrt{v_x^2 + v_y^2}",
          "explanation": "Speed is a scalar — the size of the velocity vector.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify components",
          "workingLatex": "v_x = 5, \\quad v_y = 0",
          "explanation": "Substitute the given components.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Calculate",
          "workingLatex": "|\\mathbf{v}| = \\sqrt{5^2 + 0^2} = \\sqrt{25}",
          "explanation": "$= \\sqrt{25}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate",
          "workingLatex": "|\\mathbf{v}| = 5\\,\\text{m s}^{-1}",
          "explanation": "Speed $= 5\\,\\text{m s}^{-1}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Note direction vs speed",
          "workingLatex": "\\text{Speed has no direction; velocity does}",
          "explanation": "The particle moves in the direction of $\\mathbf{v}$ at speed $|\\mathbf{v}|$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "|\\mathbf{v}| = 5\\,\\text{m s}^{-1}",
          "explanation": "Speed $= 5\\,\\text{m s}^{-1}$.",
          "diagram": null
        }
      ],
      "finalAnswer": "Speed $= 5\\,\\text{m s}^{-1}$"
    }
  },
  {
    "id": "al.y2.mech.further-kinematics.q016",
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Further kinematics",
    "subtopicId": "al.y2.mech.further-kinematics",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "numeric",
    "tags": [
      "speed",
      "magnitude"
    ],
    "questionText": "At time $t = 2\\,\\text{s}$, a particle has velocity $\\mathbf{v} = 0\\mathbf{i} + 7\\mathbf{j}$ m s$^{-1}$. Find the speed of the particle.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Speed is the magnitude of velocity",
          "workingLatex": "|\\mathbf{v}| = \\sqrt{v_x^2 + v_y^2}",
          "explanation": "Speed is a scalar — the size of the velocity vector.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify components",
          "workingLatex": "v_x = 0, \\quad v_y = 7",
          "explanation": "Substitute the given components.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Calculate",
          "workingLatex": "|\\mathbf{v}| = \\sqrt{0^2 + 7^2} = \\sqrt{49}",
          "explanation": "$= \\sqrt{49}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate",
          "workingLatex": "|\\mathbf{v}| = 7\\,\\text{m s}^{-1}",
          "explanation": "Speed $= 7\\,\\text{m s}^{-1}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Note direction vs speed",
          "workingLatex": "\\text{Speed has no direction; velocity does}",
          "explanation": "The particle moves in the direction of $\\mathbf{v}$ at speed $|\\mathbf{v}|$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "|\\mathbf{v}| = 7\\,\\text{m s}^{-1}",
          "explanation": "Speed $= 7\\,\\text{m s}^{-1}$.",
          "diagram": null
        }
      ],
      "finalAnswer": "Speed $= 7\\,\\text{m s}^{-1}$"
    }
  },
  {
    "id": "al.y2.mech.further-kinematics.q017",
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Further kinematics",
    "subtopicId": "al.y2.mech.further-kinematics",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "numeric",
    "tags": [
      "velocity",
      "substitution"
    ],
    "questionText": "A particle moves with $\\mathbf{r} = t^2\\mathbf{i} + 3t\\mathbf{j}$. Find the velocity vector and the speed when $t = 2\\,\\text{s}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Differentiate to find $\\mathbf{v}$",
          "workingLatex": "\\mathbf{v} = \\dfrac{\\mathrm{d}\\mathbf{r}}{\\mathrm{d}t}",
          "explanation": "Differentiate each component.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Velocity in general",
          "workingLatex": "\\mathbf{v} = 2t\\mathbf{i} + 3\\mathbf{j}",
          "explanation": "General velocity vector.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute $t$",
          "workingLatex": "t = 2",
          "explanation": "At $t = 2\\,\\text{s}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Velocity at $t$",
          "workingLatex": "\\mathbf{v} = 4\\mathbf{i} + 3\\mathbf{j}",
          "explanation": "$\\mathbf{v} = 4\\mathbf{i} + 3\\mathbf{j}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find speed",
          "workingLatex": "|\\mathbf{v}| = \\sqrt{4^2 + 3^2} = 5",
          "explanation": "Speed $= 5\\,\\text{m s}^{-1}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "\\mathbf{v} = 4\\mathbf{i} + 3\\mathbf{j}, \\quad |\\mathbf{v}| = 5\\,\\text{m s}^{-1}",
          "explanation": "Velocity and speed at $t = 2$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\mathbf{v} = 4\\mathbf{i} + 3\\mathbf{j}$ m s$^{-1}$; speed $= 5\\,\\text{m s}^{-1}$"
    }
  },
  {
    "id": "al.y2.mech.further-kinematics.q018",
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Further kinematics",
    "subtopicId": "al.y2.mech.further-kinematics",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "numeric",
    "tags": [
      "velocity",
      "substitution"
    ],
    "questionText": "A particle moves with $\\mathbf{r} = 2t^2\\mathbf{i} + t\\mathbf{j}$. Find the velocity vector and the speed when $t = 3\\,\\text{s}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Differentiate to find $\\mathbf{v}$",
          "workingLatex": "\\mathbf{v} = \\dfrac{\\mathrm{d}\\mathbf{r}}{\\mathrm{d}t}",
          "explanation": "Differentiate each component.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Velocity in general",
          "workingLatex": "\\mathbf{v} = 4t\\mathbf{i} + \\mathbf{j}",
          "explanation": "General velocity vector.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute $t$",
          "workingLatex": "t = 3",
          "explanation": "At $t = 3\\,\\text{s}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Velocity at $t$",
          "workingLatex": "\\mathbf{v} = 12\\mathbf{i} + 1\\mathbf{j}",
          "explanation": "$\\mathbf{v} = 12\\mathbf{i} + 1\\mathbf{j}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find speed",
          "workingLatex": "|\\mathbf{v}| = \\sqrt{12^2 + 1^2} = 12.04",
          "explanation": "Speed $= 12.04\\,\\text{m s}^{-1}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "\\mathbf{v} = 12\\mathbf{i} + 1\\mathbf{j}, \\quad |\\mathbf{v}| = 12.04\\,\\text{m s}^{-1}",
          "explanation": "Velocity and speed at $t = 3$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\mathbf{v} = 12\\mathbf{i} + 1\\mathbf{j}$ m s$^{-1}$; speed $= 12.04\\,\\text{m s}^{-1}$"
    }
  },
  {
    "id": "al.y2.mech.further-kinematics.q019",
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Further kinematics",
    "subtopicId": "al.y2.mech.further-kinematics",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "expression",
    "tags": [
      "integration",
      "velocity",
      "initial-conditions"
    ],
    "questionText": "A particle moves with acceleration $\\mathbf{a} = (4)\\mathbf{i} + (0)\\mathbf{j}$ m s$^{-2}$. Given that $\\mathbf{v} = \\mathbf{0}$ when $t = 0$, find $\\mathbf{v}$ as a function of $t$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Integrate acceleration",
          "workingLatex": "\\mathbf{v} = \\int \\mathbf{a}\\,\\mathrm{d}t",
          "explanation": "Velocity is the integral of acceleration with respect to time.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Integrate $\\mathbf{i}$-component",
          "workingLatex": "\\int 4\\,\\mathrm{d}t = 4t",
          "explanation": "$x$-component: $4t$ (plus constant).",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Integrate $\\mathbf{j}$-component",
          "workingLatex": "\\int 0\\,\\mathrm{d}t = 3",
          "explanation": "$y$-component: $3$ (plus constant).",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply initial condition $\\mathbf{v} = \\mathbf{0}$ at $t = 0$",
          "workingLatex": "\\mathbf{v} = 4t\\mathbf{i} + 3\\mathbf{j}",
          "explanation": "Constants of integration are determined by the initial velocity.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Verify at $t = 0$",
          "workingLatex": "\\mathbf{v} = \\mathbf{0}",
          "explanation": "Substituting $t = 0$ gives zero velocity.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Differentiate to check",
          "workingLatex": "\\dfrac{\\mathrm{d}\\mathbf{v}}{\\mathrm{d}t} = (4)\\mathbf{i} + (0)\\mathbf{j} = \\mathbf{a}",
          "explanation": "Differentiating returns the given acceleration.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Note vector constant of integration",
          "workingLatex": "\\mathbf{v} = \\int \\mathbf{a}\\,\\mathrm{d}t + \\mathbf{c}",
          "explanation": "A vector constant is needed when integrating vector acceleration.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State general method",
          "workingLatex": "\\text{Integrate each component separately}",
          "explanation": "Treat $\\mathbf{i}$ and $\\mathbf{j}$ components independently.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "\\mathbf{v} = 4t\\mathbf{i} + 3\\mathbf{j}",
          "explanation": "$\\mathbf{v} = 4t\\mathbf{i} + 3\\mathbf{j}$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\mathbf{v} = 4t\\mathbf{i} + 3\\mathbf{j}$ m s$^{-1}$"
    }
  },
  {
    "id": "al.y2.mech.further-kinematics.q020",
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Further kinematics",
    "subtopicId": "al.y2.mech.further-kinematics",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "expression",
    "tags": [
      "integration",
      "velocity",
      "initial-conditions"
    ],
    "questionText": "A particle moves with acceleration $\\mathbf{a} = (0)\\mathbf{i} + (6)\\mathbf{j}$ m s$^{-2}$. Given that $\\mathbf{v} = \\mathbf{0}$ when $t = 0$, find $\\mathbf{v}$ as a function of $t$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Integrate acceleration",
          "workingLatex": "\\mathbf{v} = \\int \\mathbf{a}\\,\\mathrm{d}t",
          "explanation": "Velocity is the integral of acceleration with respect to time.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Integrate $\\mathbf{i}$-component",
          "workingLatex": "\\int 0\\,\\mathrm{d}t = 3",
          "explanation": "$x$-component: $3$ (plus constant).",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Integrate $\\mathbf{j}$-component",
          "workingLatex": "\\int 6\\,\\mathrm{d}t = 2t",
          "explanation": "$y$-component: $2t$ (plus constant).",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply initial condition $\\mathbf{v} = \\mathbf{0}$ at $t = 0$",
          "workingLatex": "\\mathbf{v} = 3\\mathbf{i} + 2t\\mathbf{j}",
          "explanation": "Constants of integration are determined by the initial velocity.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Verify at $t = 0$",
          "workingLatex": "\\mathbf{v} = \\mathbf{0}",
          "explanation": "Substituting $t = 0$ gives zero velocity.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Differentiate to check",
          "workingLatex": "\\dfrac{\\mathrm{d}\\mathbf{v}}{\\mathrm{d}t} = (0)\\mathbf{i} + (6)\\mathbf{j} = \\mathbf{a}",
          "explanation": "Differentiating returns the given acceleration.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Note vector constant of integration",
          "workingLatex": "\\mathbf{v} = \\int \\mathbf{a}\\,\\mathrm{d}t + \\mathbf{c}",
          "explanation": "A vector constant is needed when integrating vector acceleration.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State general method",
          "workingLatex": "\\text{Integrate each component separately}",
          "explanation": "Treat $\\mathbf{i}$ and $\\mathbf{j}$ components independently.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "\\mathbf{v} = 3\\mathbf{i} + 2t\\mathbf{j}",
          "explanation": "$\\mathbf{v} = 3\\mathbf{i} + 2t\\mathbf{j}$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\mathbf{v} = 3\\mathbf{i} + 2t\\mathbf{j}$ m s$^{-1}$"
    }
  },
  {
    "id": "al.y2.mech.further-kinematics.q021",
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Further kinematics",
    "subtopicId": "al.y2.mech.further-kinematics",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "expression",
    "tags": [
      "integration",
      "velocity",
      "initial-conditions"
    ],
    "questionText": "A particle moves with acceleration $\\mathbf{a} = (2t)\\mathbf{i} + (4)\\mathbf{j}$ m s$^{-2}$. Given that $\\mathbf{v} = \\mathbf{0}$ when $t = 0$, find $\\mathbf{v}$ as a function of $t$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Integrate acceleration",
          "workingLatex": "\\mathbf{v} = \\int \\mathbf{a}\\,\\mathrm{d}t",
          "explanation": "Velocity is the integral of acceleration with respect to time.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Integrate $\\mathbf{i}$-component",
          "workingLatex": "\\int 2t\\,\\mathrm{d}t = t^2",
          "explanation": "$x$-component: $t^2$ (plus constant).",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Integrate $\\mathbf{j}$-component",
          "workingLatex": "\\int 4\\,\\mathrm{d}t = 4t",
          "explanation": "$y$-component: $4t$ (plus constant).",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply initial condition $\\mathbf{v} = \\mathbf{0}$ at $t = 0$",
          "workingLatex": "\\mathbf{v} = t^2\\mathbf{i} + 4t\\mathbf{j}",
          "explanation": "Constants of integration are determined by the initial velocity.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Verify at $t = 0$",
          "workingLatex": "\\mathbf{v} = \\mathbf{0}",
          "explanation": "Substituting $t = 0$ gives zero velocity.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Differentiate to check",
          "workingLatex": "\\dfrac{\\mathrm{d}\\mathbf{v}}{\\mathrm{d}t} = (2t)\\mathbf{i} + (4)\\mathbf{j} = \\mathbf{a}",
          "explanation": "Differentiating returns the given acceleration.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Note vector constant of integration",
          "workingLatex": "\\mathbf{v} = \\int \\mathbf{a}\\,\\mathrm{d}t + \\mathbf{c}",
          "explanation": "A vector constant is needed when integrating vector acceleration.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State general method",
          "workingLatex": "\\text{Integrate each component separately}",
          "explanation": "Treat $\\mathbf{i}$ and $\\mathbf{j}$ components independently.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "\\mathbf{v} = t^2\\mathbf{i} + 4t\\mathbf{j}",
          "explanation": "$\\mathbf{v} = t^2\\mathbf{i} + 4t\\mathbf{j}$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\mathbf{v} = t^2\\mathbf{i} + 4t\\mathbf{j}$ m s$^{-1}$"
    }
  },
  {
    "id": "al.y2.mech.further-kinematics.q022",
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Further kinematics",
    "subtopicId": "al.y2.mech.further-kinematics",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "expression",
    "tags": [
      "integration",
      "velocity",
      "initial-conditions"
    ],
    "questionText": "A particle moves with acceleration $\\mathbf{a} = (6)\\mathbf{i} + (2t)\\mathbf{j}$ m s$^{-2}$. Given that $\\mathbf{v} = \\mathbf{0}$ when $t = 0$, find $\\mathbf{v}$ as a function of $t$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Integrate acceleration",
          "workingLatex": "\\mathbf{v} = \\int \\mathbf{a}\\,\\mathrm{d}t",
          "explanation": "Velocity is the integral of acceleration with respect to time.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Integrate $\\mathbf{i}$-component",
          "workingLatex": "\\int 6\\,\\mathrm{d}t = 6t",
          "explanation": "$x$-component: $6t$ (plus constant).",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Integrate $\\mathbf{j}$-component",
          "workingLatex": "\\int 2t\\,\\mathrm{d}t = t^2",
          "explanation": "$y$-component: $t^2$ (plus constant).",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply initial condition $\\mathbf{v} = \\mathbf{0}$ at $t = 0$",
          "workingLatex": "\\mathbf{v} = 6t\\mathbf{i} + t^2\\mathbf{j}",
          "explanation": "Constants of integration are determined by the initial velocity.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Verify at $t = 0$",
          "workingLatex": "\\mathbf{v} = \\mathbf{0}",
          "explanation": "Substituting $t = 0$ gives zero velocity.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Differentiate to check",
          "workingLatex": "\\dfrac{\\mathrm{d}\\mathbf{v}}{\\mathrm{d}t} = (6)\\mathbf{i} + (2t)\\mathbf{j} = \\mathbf{a}",
          "explanation": "Differentiating returns the given acceleration.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Note vector constant of integration",
          "workingLatex": "\\mathbf{v} = \\int \\mathbf{a}\\,\\mathrm{d}t + \\mathbf{c}",
          "explanation": "A vector constant is needed when integrating vector acceleration.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State general method",
          "workingLatex": "\\text{Integrate each component separately}",
          "explanation": "Treat $\\mathbf{i}$ and $\\mathbf{j}$ components independently.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "\\mathbf{v} = 6t\\mathbf{i} + t^2\\mathbf{j}",
          "explanation": "$\\mathbf{v} = 6t\\mathbf{i} + t^2\\mathbf{j}$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\mathbf{v} = 6t\\mathbf{i} + t^2\\mathbf{j}$ m s$^{-1}$"
    }
  },
  {
    "id": "al.y2.mech.further-kinematics.q023",
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Further kinematics",
    "subtopicId": "al.y2.mech.further-kinematics",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "expression",
    "tags": [
      "integration",
      "velocity",
      "initial-conditions"
    ],
    "questionText": "A particle moves with acceleration $\\mathbf{a} = (3t)\\mathbf{i} + (0)\\mathbf{j}$ m s$^{-2}$. Given that $\\mathbf{v} = \\mathbf{0}$ when $t = 0$, find $\\mathbf{v}$ as a function of $t$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Integrate acceleration",
          "workingLatex": "\\mathbf{v} = \\int \\mathbf{a}\\,\\mathrm{d}t",
          "explanation": "Velocity is the integral of acceleration with respect to time.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Integrate $\\mathbf{i}$-component",
          "workingLatex": "\\int 3t\\,\\mathrm{d}t = 1.5t^2",
          "explanation": "$x$-component: $1.5t^2$ (plus constant).",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Integrate $\\mathbf{j}$-component",
          "workingLatex": "\\int 0\\,\\mathrm{d}t = 2",
          "explanation": "$y$-component: $2$ (plus constant).",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply initial condition $\\mathbf{v} = \\mathbf{0}$ at $t = 0$",
          "workingLatex": "\\mathbf{v} = 1.5t^2\\mathbf{i} + 2\\mathbf{j}",
          "explanation": "Constants of integration are determined by the initial velocity.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Verify at $t = 0$",
          "workingLatex": "\\mathbf{v} = \\mathbf{0}",
          "explanation": "Substituting $t = 0$ gives zero velocity.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Differentiate to check",
          "workingLatex": "\\dfrac{\\mathrm{d}\\mathbf{v}}{\\mathrm{d}t} = (3t)\\mathbf{i} + (0)\\mathbf{j} = \\mathbf{a}",
          "explanation": "Differentiating returns the given acceleration.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Note vector constant of integration",
          "workingLatex": "\\mathbf{v} = \\int \\mathbf{a}\\,\\mathrm{d}t + \\mathbf{c}",
          "explanation": "A vector constant is needed when integrating vector acceleration.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State general method",
          "workingLatex": "\\text{Integrate each component separately}",
          "explanation": "Treat $\\mathbf{i}$ and $\\mathbf{j}$ components independently.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "\\mathbf{v} = 1.5t^2\\mathbf{i} + 2\\mathbf{j}",
          "explanation": "$\\mathbf{v} = 1.5t^2\\mathbf{i} + 2\\mathbf{j}$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\mathbf{v} = 1.5t^2\\mathbf{i} + 2\\mathbf{j}$ m s$^{-1}$"
    }
  },
  {
    "id": "al.y2.mech.further-kinematics.q024",
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Further kinematics",
    "subtopicId": "al.y2.mech.further-kinematics",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "expression",
    "tags": [
      "integration",
      "velocity",
      "initial-conditions"
    ],
    "questionText": "A particle moves with acceleration $\\mathbf{a} = (0)\\mathbf{i} + (8)\\mathbf{j}$ m s$^{-2}$. Given that $\\mathbf{v} = \\mathbf{0}$ when $t = 0$, find $\\mathbf{v}$ as a function of $t$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Integrate acceleration",
          "workingLatex": "\\mathbf{v} = \\int \\mathbf{a}\\,\\mathrm{d}t",
          "explanation": "Velocity is the integral of acceleration with respect to time.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Integrate $\\mathbf{i}$-component",
          "workingLatex": "\\int 0\\,\\mathrm{d}t = 8t",
          "explanation": "$x$-component: $8t$ (plus constant).",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Integrate $\\mathbf{j}$-component",
          "workingLatex": "\\int 8\\,\\mathrm{d}t = 5",
          "explanation": "$y$-component: $5$ (plus constant).",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply initial condition $\\mathbf{v} = \\mathbf{0}$ at $t = 0$",
          "workingLatex": "\\mathbf{v} = 8t\\mathbf{i} + 5\\mathbf{j}",
          "explanation": "Constants of integration are determined by the initial velocity.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Verify at $t = 0$",
          "workingLatex": "\\mathbf{v} = \\mathbf{0}",
          "explanation": "Substituting $t = 0$ gives zero velocity.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Differentiate to check",
          "workingLatex": "\\dfrac{\\mathrm{d}\\mathbf{v}}{\\mathrm{d}t} = (0)\\mathbf{i} + (8)\\mathbf{j} = \\mathbf{a}",
          "explanation": "Differentiating returns the given acceleration.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Note vector constant of integration",
          "workingLatex": "\\mathbf{v} = \\int \\mathbf{a}\\,\\mathrm{d}t + \\mathbf{c}",
          "explanation": "A vector constant is needed when integrating vector acceleration.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State general method",
          "workingLatex": "\\text{Integrate each component separately}",
          "explanation": "Treat $\\mathbf{i}$ and $\\mathbf{j}$ components independently.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "\\mathbf{v} = 8t\\mathbf{i} + 5\\mathbf{j}",
          "explanation": "$\\mathbf{v} = 8t\\mathbf{i} + 5\\mathbf{j}$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\mathbf{v} = 8t\\mathbf{i} + 5\\mathbf{j}$ m s$^{-1}$"
    }
  },
  {
    "id": "al.y2.mech.further-kinematics.q025",
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Further kinematics",
    "subtopicId": "al.y2.mech.further-kinematics",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "expression",
    "tags": [
      "integration",
      "position",
      "initial-conditions"
    ],
    "questionText": "A particle has velocity $\\mathbf{v} = (4t)\\mathbf{i} + (3)\\mathbf{j}$ m s$^{-1}$. Given $\\mathbf{r} = 1\\mathbf{i} + 0\\mathbf{j}$ when $t = 0$, find $\\mathbf{r}$ as a function of $t$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Integrate velocity",
          "workingLatex": "\\mathbf{r} = \\int \\mathbf{v}\\,\\mathrm{d}t",
          "explanation": "Position is the integral of velocity.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Integrate $\\mathbf{i}$-component",
          "workingLatex": "\\int (4t)\\,\\mathrm{d}t = 2t^2",
          "explanation": "$x$-component of displacement.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Integrate $\\mathbf{j}$-component",
          "workingLatex": "\\int (3)\\,\\mathrm{d}t = 3t",
          "explanation": "$y$-component of displacement.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply initial position",
          "workingLatex": "\\mathbf{r} = 1\\mathbf{i} + 0\\mathbf{j} \\text{ when } t = 0",
          "explanation": "Initial position: $(1, 0)$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Determine constants",
          "workingLatex": "\\mathbf{r} = 2t^2\\mathbf{i} + 3t\\mathbf{j}",
          "explanation": "Add vector constant of integration.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Verify at $t = 0$",
          "workingLatex": "\\mathbf{r} = 1\\mathbf{i} + 0\\mathbf{j}",
          "explanation": "Initial condition satisfied.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Differentiate to check",
          "workingLatex": "\\dfrac{\\mathrm{d}\\mathbf{r}}{\\mathrm{d}t} = (4t)\\mathbf{i} + (3)\\mathbf{j}",
          "explanation": "Returns the given velocity.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Distance from origin at general $t$",
          "workingLatex": "|\\mathbf{r}| = \\sqrt{x^2 + y^2}",
          "explanation": "Can be found once $\\mathbf{r}$ is known.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "\\mathbf{r} = 2t^2\\mathbf{i} + 3t\\mathbf{j}",
          "explanation": "$\\mathbf{r} = 2t^2\\mathbf{i} + 3t\\mathbf{j}$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\mathbf{r} = 2t^2\\mathbf{i} + 3t\\mathbf{j}$ m"
    }
  },
  {
    "id": "al.y2.mech.further-kinematics.q026",
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Further kinematics",
    "subtopicId": "al.y2.mech.further-kinematics",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "expression",
    "tags": [
      "integration",
      "position",
      "initial-conditions"
    ],
    "questionText": "A particle has velocity $\\mathbf{v} = (6)\\mathbf{i} + (2t)\\mathbf{j}$ m s$^{-1}$. Given $\\mathbf{r} = 2\\mathbf{i} + 1\\mathbf{j}$ when $t = 0$, find $\\mathbf{r}$ as a function of $t$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Integrate velocity",
          "workingLatex": "\\mathbf{r} = \\int \\mathbf{v}\\,\\mathrm{d}t",
          "explanation": "Position is the integral of velocity.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Integrate $\\mathbf{i}$-component",
          "workingLatex": "\\int (6)\\,\\mathrm{d}t = 6t",
          "explanation": "$x$-component of displacement.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Integrate $\\mathbf{j}$-component",
          "workingLatex": "\\int (2t)\\,\\mathrm{d}t = t^2",
          "explanation": "$y$-component of displacement.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply initial position",
          "workingLatex": "\\mathbf{r} = 2\\mathbf{i} + 1\\mathbf{j} \\text{ when } t = 0",
          "explanation": "Initial position: $(2, 1)$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Determine constants",
          "workingLatex": "\\mathbf{r} = 6t\\mathbf{i} + t^2\\mathbf{j} + (2\\mathbf{i} + \\mathbf{j})",
          "explanation": "Add vector constant of integration.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Verify at $t = 0$",
          "workingLatex": "\\mathbf{r} = 2\\mathbf{i} + 1\\mathbf{j}",
          "explanation": "Initial condition satisfied.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Differentiate to check",
          "workingLatex": "\\dfrac{\\mathrm{d}\\mathbf{r}}{\\mathrm{d}t} = (6)\\mathbf{i} + (2t)\\mathbf{j}",
          "explanation": "Returns the given velocity.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Distance from origin at general $t$",
          "workingLatex": "|\\mathbf{r}| = \\sqrt{x^2 + y^2}",
          "explanation": "Can be found once $\\mathbf{r}$ is known.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "\\mathbf{r} = 6t\\mathbf{i} + t^2\\mathbf{j} + (2\\mathbf{i} + \\mathbf{j})",
          "explanation": "$\\mathbf{r} = 6t\\mathbf{i} + t^2\\mathbf{j} + (2\\mathbf{i} + \\mathbf{j})$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\mathbf{r} = 6t\\mathbf{i} + t^2\\mathbf{j} + (2\\mathbf{i} + \\mathbf{j})$ m"
    }
  },
  {
    "id": "al.y2.mech.further-kinematics.q027",
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Further kinematics",
    "subtopicId": "al.y2.mech.further-kinematics",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "expression",
    "tags": [
      "integration",
      "position",
      "initial-conditions"
    ],
    "questionText": "A particle has velocity $\\mathbf{v} = (3t)\\mathbf{i} + (4)\\mathbf{j}$ m s$^{-1}$. Given $\\mathbf{r} = 0\\mathbf{i} + 0\\mathbf{j}$ when $t = 0$, find $\\mathbf{r}$ as a function of $t$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Integrate velocity",
          "workingLatex": "\\mathbf{r} = \\int \\mathbf{v}\\,\\mathrm{d}t",
          "explanation": "Position is the integral of velocity.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Integrate $\\mathbf{i}$-component",
          "workingLatex": "\\int (3t)\\,\\mathrm{d}t = 1.5t^2",
          "explanation": "$x$-component of displacement.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Integrate $\\mathbf{j}$-component",
          "workingLatex": "\\int (4)\\,\\mathrm{d}t = 4t",
          "explanation": "$y$-component of displacement.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply initial position",
          "workingLatex": "\\mathbf{r} = 0\\mathbf{i} + 0\\mathbf{j} \\text{ when } t = 0",
          "explanation": "Initial position: $(0, 0)$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Determine constants",
          "workingLatex": "\\mathbf{r} = 1.5t^2\\mathbf{i} + 4t\\mathbf{j}",
          "explanation": "Add vector constant of integration.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Verify at $t = 0$",
          "workingLatex": "\\mathbf{r} = 0\\mathbf{i} + 0\\mathbf{j}",
          "explanation": "Initial condition satisfied.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Differentiate to check",
          "workingLatex": "\\dfrac{\\mathrm{d}\\mathbf{r}}{\\mathrm{d}t} = (3t)\\mathbf{i} + (4)\\mathbf{j}",
          "explanation": "Returns the given velocity.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Distance from origin at general $t$",
          "workingLatex": "|\\mathbf{r}| = \\sqrt{x^2 + y^2}",
          "explanation": "Can be found once $\\mathbf{r}$ is known.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "\\mathbf{r} = 1.5t^2\\mathbf{i} + 4t\\mathbf{j}",
          "explanation": "$\\mathbf{r} = 1.5t^2\\mathbf{i} + 4t\\mathbf{j}$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\mathbf{r} = 1.5t^2\\mathbf{i} + 4t\\mathbf{j}$ m"
    }
  },
  {
    "id": "al.y2.mech.further-kinematics.q028",
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Further kinematics",
    "subtopicId": "al.y2.mech.further-kinematics",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "expression",
    "tags": [
      "integration",
      "position",
      "initial-conditions"
    ],
    "questionText": "A particle has velocity $\\mathbf{v} = (5)\\mathbf{i} + (0)\\mathbf{j}$ m s$^{-1}$. Given $\\mathbf{r} = 3\\mathbf{i} + 2\\mathbf{j}$ when $t = 0$, find $\\mathbf{r}$ as a function of $t$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Integrate velocity",
          "workingLatex": "\\mathbf{r} = \\int \\mathbf{v}\\,\\mathrm{d}t",
          "explanation": "Position is the integral of velocity.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Integrate $\\mathbf{i}$-component",
          "workingLatex": "\\int (5)\\,\\mathrm{d}t = 5t",
          "explanation": "$x$-component of displacement.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Integrate $\\mathbf{j}$-component",
          "workingLatex": "\\int (0)\\,\\mathrm{d}t = 2",
          "explanation": "$y$-component of displacement.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply initial position",
          "workingLatex": "\\mathbf{r} = 3\\mathbf{i} + 2\\mathbf{j} \\text{ when } t = 0",
          "explanation": "Initial position: $(3, 2)$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Determine constants",
          "workingLatex": "\\mathbf{r} = 5t\\mathbf{i} + 2\\mathbf{j} + (3\\mathbf{i} + 2\\mathbf{j})",
          "explanation": "Add vector constant of integration.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Verify at $t = 0$",
          "workingLatex": "\\mathbf{r} = 3\\mathbf{i} + 2\\mathbf{j}",
          "explanation": "Initial condition satisfied.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Differentiate to check",
          "workingLatex": "\\dfrac{\\mathrm{d}\\mathbf{r}}{\\mathrm{d}t} = (5)\\mathbf{i} + (0)\\mathbf{j}",
          "explanation": "Returns the given velocity.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Distance from origin at general $t$",
          "workingLatex": "|\\mathbf{r}| = \\sqrt{x^2 + y^2}",
          "explanation": "Can be found once $\\mathbf{r}$ is known.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "\\mathbf{r} = 5t\\mathbf{i} + 2\\mathbf{j} + (3\\mathbf{i} + 2\\mathbf{j})",
          "explanation": "$\\mathbf{r} = 5t\\mathbf{i} + 2\\mathbf{j} + (3\\mathbf{i} + 2\\mathbf{j})$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\mathbf{r} = 5t\\mathbf{i} + 2\\mathbf{j} + (3\\mathbf{i} + 2\\mathbf{j})$ m"
    }
  },
  {
    "id": "al.y2.mech.further-kinematics.q029",
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Further kinematics",
    "subtopicId": "al.y2.mech.further-kinematics",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "expression",
    "tags": [
      "integration",
      "position",
      "initial-conditions"
    ],
    "questionText": "A particle has velocity $\\mathbf{v} = (2t)\\mathbf{i} + (6)\\mathbf{j}$ m s$^{-1}$. Given $\\mathbf{r} = 1\\mathbf{i} + 1\\mathbf{j}$ when $t = 0$, find $\\mathbf{r}$ as a function of $t$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Integrate velocity",
          "workingLatex": "\\mathbf{r} = \\int \\mathbf{v}\\,\\mathrm{d}t",
          "explanation": "Position is the integral of velocity.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Integrate $\\mathbf{i}$-component",
          "workingLatex": "\\int (2t)\\,\\mathrm{d}t = t^2",
          "explanation": "$x$-component of displacement.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Integrate $\\mathbf{j}$-component",
          "workingLatex": "\\int (6)\\,\\mathrm{d}t = 6t",
          "explanation": "$y$-component of displacement.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply initial position",
          "workingLatex": "\\mathbf{r} = 1\\mathbf{i} + 1\\mathbf{j} \\text{ when } t = 0",
          "explanation": "Initial position: $(1, 1)$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Determine constants",
          "workingLatex": "\\mathbf{r} = t^2\\mathbf{i} + 6t\\mathbf{j} + (\\mathbf{i} + \\mathbf{j})",
          "explanation": "Add vector constant of integration.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Verify at $t = 0$",
          "workingLatex": "\\mathbf{r} = 1\\mathbf{i} + 1\\mathbf{j}",
          "explanation": "Initial condition satisfied.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Differentiate to check",
          "workingLatex": "\\dfrac{\\mathrm{d}\\mathbf{r}}{\\mathrm{d}t} = (2t)\\mathbf{i} + (6)\\mathbf{j}",
          "explanation": "Returns the given velocity.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Distance from origin at general $t$",
          "workingLatex": "|\\mathbf{r}| = \\sqrt{x^2 + y^2}",
          "explanation": "Can be found once $\\mathbf{r}$ is known.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "\\mathbf{r} = t^2\\mathbf{i} + 6t\\mathbf{j} + (\\mathbf{i} + \\mathbf{j})",
          "explanation": "$\\mathbf{r} = t^2\\mathbf{i} + 6t\\mathbf{j} + (\\mathbf{i} + \\mathbf{j})$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\mathbf{r} = t^2\\mathbf{i} + 6t\\mathbf{j} + (\\mathbf{i} + \\mathbf{j})$ m"
    }
  },
  {
    "id": "al.y2.mech.further-kinematics.q030",
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Further kinematics",
    "subtopicId": "al.y2.mech.further-kinematics",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "expression",
    "tags": [
      "integration",
      "position",
      "initial-conditions"
    ],
    "questionText": "A particle has velocity $\\mathbf{v} = (8)\\mathbf{i} + (3t)\\mathbf{j}$ m s$^{-1}$. Given $\\mathbf{r} = 0\\mathbf{i} + 4\\mathbf{j}$ when $t = 0$, find $\\mathbf{r}$ as a function of $t$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Integrate velocity",
          "workingLatex": "\\mathbf{r} = \\int \\mathbf{v}\\,\\mathrm{d}t",
          "explanation": "Position is the integral of velocity.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Integrate $\\mathbf{i}$-component",
          "workingLatex": "\\int (8)\\,\\mathrm{d}t = 8t",
          "explanation": "$x$-component of displacement.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Integrate $\\mathbf{j}$-component",
          "workingLatex": "\\int (3t)\\,\\mathrm{d}t = 1.5t^2",
          "explanation": "$y$-component of displacement.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply initial position",
          "workingLatex": "\\mathbf{r} = 0\\mathbf{i} + 4\\mathbf{j} \\text{ when } t = 0",
          "explanation": "Initial position: $(0, 4)$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Determine constants",
          "workingLatex": "\\mathbf{r} = 8t\\mathbf{i} + 1.5t^2\\mathbf{j} + 4\\mathbf{j}",
          "explanation": "Add vector constant of integration.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Verify at $t = 0$",
          "workingLatex": "\\mathbf{r} = 0\\mathbf{i} + 4\\mathbf{j}",
          "explanation": "Initial condition satisfied.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Differentiate to check",
          "workingLatex": "\\dfrac{\\mathrm{d}\\mathbf{r}}{\\mathrm{d}t} = (8)\\mathbf{i} + (3t)\\mathbf{j}",
          "explanation": "Returns the given velocity.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Distance from origin at general $t$",
          "workingLatex": "|\\mathbf{r}| = \\sqrt{x^2 + y^2}",
          "explanation": "Can be found once $\\mathbf{r}$ is known.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "\\mathbf{r} = 8t\\mathbf{i} + 1.5t^2\\mathbf{j} + 4\\mathbf{j}",
          "explanation": "$\\mathbf{r} = 8t\\mathbf{i} + 1.5t^2\\mathbf{j} + 4\\mathbf{j}$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\mathbf{r} = 8t\\mathbf{i} + 1.5t^2\\mathbf{j} + 4\\mathbf{j}$ m"
    }
  },
  {
    "id": "al.y2.mech.further-kinematics.q031",
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Further kinematics",
    "subtopicId": "al.y2.mech.further-kinematics",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "written",
    "tags": [
      "full-chain",
      "integration",
      "variable-acceleration"
    ],
    "questionText": "A particle moves with $\\mathbf{a} = 4\\mathbf{i} + 0\\mathbf{j}$ m s$^{-2}$. Given $\\mathbf{v} = \\mathbf{0}$ and $\\mathbf{r} = 0\\mathbf{i} + 0\\mathbf{j}$ when $t = 0$, find $\\mathbf{r}$ and the speed when $t = 2\\,\\text{s}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Integrate $\\mathbf{a}$ to find $\\mathbf{v}$",
          "workingLatex": "\\mathbf{v} = \\int \\mathbf{a}\\,\\mathrm{d}t + \\mathbf{c}_1",
          "explanation": "First integration with velocity initial conditions.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Apply $\\mathbf{v} = \\mathbf{0}$ at $t = 0$",
          "workingLatex": "\\mathbf{v} = (4t)\\mathbf{i} + ...",
          "explanation": "Determine velocity vector.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Integrate $\\mathbf{v}$ to find $\\mathbf{r}$",
          "workingLatex": "\\mathbf{r} = \\int \\mathbf{v}\\,\\mathrm{d}t + \\mathbf{c}_2",
          "explanation": "Second integration with position initial conditions.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply initial position",
          "workingLatex": "\\mathbf{r} = 0\\mathbf{i} + 0\\mathbf{j} \\text{ at } t = 0",
          "explanation": "Fix constants of integration.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find $\\mathbf{v}$ at $t = 2$",
          "workingLatex": "\\mathbf{v} = 8\\mathbf{i} + 0\\mathbf{j}",
          "explanation": "Velocity at $t = 2$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find $\\mathbf{r}$ at $t = 2$",
          "workingLatex": "\\mathbf{r} = 8\\mathbf{i} + 0\\mathbf{j}",
          "explanation": "Position at $t = 2$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Find speed",
          "workingLatex": "|\\mathbf{v}| = 8\\,\\text{m s}^{-1}",
          "explanation": "Speed $= 8\\,\\text{m s}^{-1}$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Verify by differentiation",
          "workingLatex": "\\dfrac{\\mathrm{d}^2\\mathbf{r}}{\\mathrm{d}t^2} = \\mathbf{a}",
          "explanation": "Double differentiation of $\\mathbf{r}$ returns $\\mathbf{a}$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Summarise",
          "workingLatex": "\\mathbf{r} = 8\\mathbf{i} + 0\\mathbf{j}, \\quad |\\mathbf{v}| = 8\\,\\text{m s}^{-1}",
          "explanation": "Position and speed at the required time.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\mathbf{r} = 8\\mathbf{i} + 0\\mathbf{j}$ m; speed $= 8\\,\\text{m s}^{-1}$."
    }
  },
  {
    "id": "al.y2.mech.further-kinematics.q032",
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Further kinematics",
    "subtopicId": "al.y2.mech.further-kinematics",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "written",
    "tags": [
      "full-chain",
      "integration",
      "variable-acceleration"
    ],
    "questionText": "A particle moves with $\\mathbf{a} = 0\\mathbf{i} + 6\\mathbf{j}$ m s$^{-2}$. Given $\\mathbf{v} = \\mathbf{0}$ and $\\mathbf{r} = 0\\mathbf{i} + 0\\mathbf{j}$ when $t = 0$, find $\\mathbf{r}$ and the speed when $t = 3\\,\\text{s}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Integrate $\\mathbf{a}$ to find $\\mathbf{v}$",
          "workingLatex": "\\mathbf{v} = \\int \\mathbf{a}\\,\\mathrm{d}t + \\mathbf{c}_1",
          "explanation": "First integration with velocity initial conditions.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Apply $\\mathbf{v} = \\mathbf{0}$ at $t = 0$",
          "workingLatex": "\\mathbf{v} = (6t)\\mathbf{i} + ...",
          "explanation": "Determine velocity vector.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Integrate $\\mathbf{v}$ to find $\\mathbf{r}$",
          "workingLatex": "\\mathbf{r} = \\int \\mathbf{v}\\,\\mathrm{d}t + \\mathbf{c}_2",
          "explanation": "Second integration with position initial conditions.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply initial position",
          "workingLatex": "\\mathbf{r} = 0\\mathbf{i} + 0\\mathbf{j} \\text{ at } t = 0",
          "explanation": "Fix constants of integration.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find $\\mathbf{v}$ at $t = 3$",
          "workingLatex": "\\mathbf{v} = 0\\mathbf{i} + 18\\mathbf{j}",
          "explanation": "Velocity at $t = 3$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find $\\mathbf{r}$ at $t = 3$",
          "workingLatex": "\\mathbf{r} = 0\\mathbf{i} + 27\\mathbf{j}",
          "explanation": "Position at $t = 3$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Find speed",
          "workingLatex": "|\\mathbf{v}| = 18\\,\\text{m s}^{-1}",
          "explanation": "Speed $= 18\\,\\text{m s}^{-1}$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Verify by differentiation",
          "workingLatex": "\\dfrac{\\mathrm{d}^2\\mathbf{r}}{\\mathrm{d}t^2} = \\mathbf{a}",
          "explanation": "Double differentiation of $\\mathbf{r}$ returns $\\mathbf{a}$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Summarise",
          "workingLatex": "\\mathbf{r} = 0\\mathbf{i} + 27\\mathbf{j}, \\quad |\\mathbf{v}| = 18\\,\\text{m s}^{-1}",
          "explanation": "Position and speed at the required time.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\mathbf{r} = 0\\mathbf{i} + 27\\mathbf{j}$ m; speed $= 18\\,\\text{m s}^{-1}$."
    }
  },
  {
    "id": "al.y2.mech.further-kinematics.q033",
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Further kinematics",
    "subtopicId": "al.y2.mech.further-kinematics",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "written",
    "tags": [
      "full-chain",
      "integration",
      "variable-acceleration"
    ],
    "questionText": "A particle moves with $\\mathbf{a} = 2\\mathbf{i} + 4\\mathbf{j}$ m s$^{-2}$. Given $\\mathbf{v} = \\mathbf{0}$ and $\\mathbf{r} = 1\\mathbf{i} + 0\\mathbf{j}$ when $t = 0$, find $\\mathbf{r}$ and the speed when $t = 1\\,\\text{s}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Integrate $\\mathbf{a}$ to find $\\mathbf{v}$",
          "workingLatex": "\\mathbf{v} = \\int \\mathbf{a}\\,\\mathrm{d}t + \\mathbf{c}_1",
          "explanation": "First integration with velocity initial conditions.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Apply $\\mathbf{v} = \\mathbf{0}$ at $t = 0$",
          "workingLatex": "\\mathbf{v} = (2t+1)\\mathbf{i} + ...",
          "explanation": "Determine velocity vector.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Integrate $\\mathbf{v}$ to find $\\mathbf{r}$",
          "workingLatex": "\\mathbf{r} = \\int \\mathbf{v}\\,\\mathrm{d}t + \\mathbf{c}_2",
          "explanation": "Second integration with position initial conditions.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply initial position",
          "workingLatex": "\\mathbf{r} = 1\\mathbf{i} + 0\\mathbf{j} \\text{ at } t = 0",
          "explanation": "Fix constants of integration.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find $\\mathbf{v}$ at $t = 1$",
          "workingLatex": "\\mathbf{v} = 3\\mathbf{i} + 4\\mathbf{j}",
          "explanation": "Velocity at $t = 1$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find $\\mathbf{r}$ at $t = 1$",
          "workingLatex": "\\mathbf{r} = 3\\mathbf{i} + 2\\mathbf{j}",
          "explanation": "Position at $t = 1$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Find speed",
          "workingLatex": "|\\mathbf{v}| = 5\\,\\text{m s}^{-1}",
          "explanation": "Speed $= 5\\,\\text{m s}^{-1}$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Verify by differentiation",
          "workingLatex": "\\dfrac{\\mathrm{d}^2\\mathbf{r}}{\\mathrm{d}t^2} = \\mathbf{a}",
          "explanation": "Double differentiation of $\\mathbf{r}$ returns $\\mathbf{a}$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Summarise",
          "workingLatex": "\\mathbf{r} = 3\\mathbf{i} + 2\\mathbf{j}, \\quad |\\mathbf{v}| = 5\\,\\text{m s}^{-1}",
          "explanation": "Position and speed at the required time.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\mathbf{r} = 3\\mathbf{i} + 2\\mathbf{j}$ m; speed $= 5\\,\\text{m s}^{-1}$."
    }
  },
  {
    "id": "al.y2.mech.further-kinematics.q034",
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Further kinematics",
    "subtopicId": "al.y2.mech.further-kinematics",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "written",
    "tags": [
      "full-chain",
      "integration",
      "variable-acceleration"
    ],
    "questionText": "A particle moves with $\\mathbf{a} = 3t\\mathbf{i} + 0\\mathbf{j}$ m s$^{-2}$. Given $\\mathbf{v} = \\mathbf{0}$ and $\\mathbf{r} = 0\\mathbf{i} + 2\\mathbf{j}$ when $t = 0$, find $\\mathbf{r}$ and the speed when $t = 2\\,\\text{s}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Integrate $\\mathbf{a}$ to find $\\mathbf{v}$",
          "workingLatex": "\\mathbf{v} = \\int \\mathbf{a}\\,\\mathrm{d}t + \\mathbf{c}_1",
          "explanation": "First integration with velocity initial conditions.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Apply $\\mathbf{v} = \\mathbf{0}$ at $t = 0$",
          "workingLatex": "\\mathbf{v} = (1.5t^2)\\mathbf{i} + ...",
          "explanation": "Determine velocity vector.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Integrate $\\mathbf{v}$ to find $\\mathbf{r}$",
          "workingLatex": "\\mathbf{r} = \\int \\mathbf{v}\\,\\mathrm{d}t + \\mathbf{c}_2",
          "explanation": "Second integration with position initial conditions.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply initial position",
          "workingLatex": "\\mathbf{r} = 0\\mathbf{i} + 2\\mathbf{j} \\text{ at } t = 0",
          "explanation": "Fix constants of integration.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find $\\mathbf{v}$ at $t = 2$",
          "workingLatex": "\\mathbf{v} = 6\\mathbf{i} + 4\\mathbf{j}",
          "explanation": "Velocity at $t = 2$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find $\\mathbf{r}$ at $t = 2$",
          "workingLatex": "\\mathbf{r} = 4\\mathbf{i} + 2\\mathbf{j}",
          "explanation": "Position at $t = 2$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Find speed",
          "workingLatex": "|\\mathbf{v}| = 7.21\\,\\text{m s}^{-1}",
          "explanation": "Speed $= 7.21\\,\\text{m s}^{-1}$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Verify by differentiation",
          "workingLatex": "\\dfrac{\\mathrm{d}^2\\mathbf{r}}{\\mathrm{d}t^2} = \\mathbf{a}",
          "explanation": "Double differentiation of $\\mathbf{r}$ returns $\\mathbf{a}$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Summarise",
          "workingLatex": "\\mathbf{r} = 4\\mathbf{i} + 2\\mathbf{j}, \\quad |\\mathbf{v}| = 7.21\\,\\text{m s}^{-1}",
          "explanation": "Position and speed at the required time.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\mathbf{r} = 4\\mathbf{i} + 2\\mathbf{j}$ m; speed $= 7.21\\,\\text{m s}^{-1}$."
    }
  },
  {
    "id": "al.y2.mech.further-kinematics.q035",
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Further kinematics",
    "subtopicId": "al.y2.mech.further-kinematics",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "written",
    "tags": [
      "full-chain",
      "integration",
      "variable-acceleration"
    ],
    "questionText": "A particle moves with $\\mathbf{a} = 0\\mathbf{i} + 4t\\mathbf{j}$ m s$^{-2}$. Given $\\mathbf{v} = \\mathbf{0}$ and $\\mathbf{r} = 0\\mathbf{i} + 0\\mathbf{j}$ when $t = 0$, find $\\mathbf{r}$ and the speed when $t = 0\\,\\text{s}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Integrate $\\mathbf{a}$ to find $\\mathbf{v}$",
          "workingLatex": "\\mathbf{v} = \\int \\mathbf{a}\\,\\mathrm{d}t + \\mathbf{c}_1",
          "explanation": "First integration with velocity initial conditions.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Apply $\\mathbf{v} = \\mathbf{0}$ at $t = 0$",
          "workingLatex": "\\mathbf{v} = (4t)\\mathbf{i} + ...",
          "explanation": "Determine velocity vector.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Integrate $\\mathbf{v}$ to find $\\mathbf{r}$",
          "workingLatex": "\\mathbf{r} = \\int \\mathbf{v}\\,\\mathrm{d}t + \\mathbf{c}_2",
          "explanation": "Second integration with position initial conditions.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply initial position",
          "workingLatex": "\\mathbf{r} = 0\\mathbf{i} + 0\\mathbf{j} \\text{ at } t = 0",
          "explanation": "Fix constants of integration.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find $\\mathbf{v}$ at $t = 0$",
          "workingLatex": "\\mathbf{v} = 0\\mathbf{i} + 0\\mathbf{j}",
          "explanation": "Velocity at $t = 0$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find $\\mathbf{r}$ at $t = 0$",
          "workingLatex": "\\mathbf{r} = 0\\mathbf{i} + 0\\mathbf{j}",
          "explanation": "Position at $t = 0$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Find speed",
          "workingLatex": "|\\mathbf{v}| = 0\\,\\text{m s}^{-1}",
          "explanation": "Speed $= 0\\,\\text{m s}^{-1}$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Verify by differentiation",
          "workingLatex": "\\dfrac{\\mathrm{d}^2\\mathbf{r}}{\\mathrm{d}t^2} = \\mathbf{a}",
          "explanation": "Double differentiation of $\\mathbf{r}$ returns $\\mathbf{a}$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Summarise",
          "workingLatex": "\\mathbf{r} = 0\\mathbf{i} + 0\\mathbf{j}, \\quad |\\mathbf{v}| = 0\\,\\text{m s}^{-1}",
          "explanation": "Position and speed at the required time.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\mathbf{r} = 0\\mathbf{i} + 0\\mathbf{j}$ m; speed $= 0\\,\\text{m s}^{-1}$."
    }
  },
  {
    "id": "al.y2.mech.further-kinematics.q036",
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Further kinematics",
    "subtopicId": "al.y2.mech.further-kinematics",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "written",
    "tags": [
      "full-chain",
      "integration",
      "variable-acceleration"
    ],
    "questionText": "A particle moves with $\\mathbf{a} = 5\\mathbf{i} + 2\\mathbf{j}$ m s$^{-2}$. Given $\\mathbf{v} = \\mathbf{0}$ and $\\mathbf{r} = 2\\mathbf{i} + 1\\mathbf{j}$ when $t = 0$, find $\\mathbf{r}$ and the speed when $t = 3\\,\\text{s}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Integrate $\\mathbf{a}$ to find $\\mathbf{v}$",
          "workingLatex": "\\mathbf{v} = \\int \\mathbf{a}\\,\\mathrm{d}t + \\mathbf{c}_1",
          "explanation": "First integration with velocity initial conditions.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Apply $\\mathbf{v} = \\mathbf{0}$ at $t = 0$",
          "workingLatex": "\\mathbf{v} = (5t+3)\\mathbf{i} + ...",
          "explanation": "Determine velocity vector.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Integrate $\\mathbf{v}$ to find $\\mathbf{r}$",
          "workingLatex": "\\mathbf{r} = \\int \\mathbf{v}\\,\\mathrm{d}t + \\mathbf{c}_2",
          "explanation": "Second integration with position initial conditions.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply initial position",
          "workingLatex": "\\mathbf{r} = 2\\mathbf{i} + 1\\mathbf{j} \\text{ at } t = 0",
          "explanation": "Fix constants of integration.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find $\\mathbf{v}$ at $t = 3$",
          "workingLatex": "\\mathbf{v} = 18\\mathbf{i} + 6\\mathbf{j}",
          "explanation": "Velocity at $t = 3$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find $\\mathbf{r}$ at $t = 3$",
          "workingLatex": "\\mathbf{r} = 33.50\\mathbf{i} + 16\\mathbf{j}",
          "explanation": "Position at $t = 3$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Find speed",
          "workingLatex": "|\\mathbf{v}| = 18.97\\,\\text{m s}^{-1}",
          "explanation": "Speed $= 18.97\\,\\text{m s}^{-1}$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Verify by differentiation",
          "workingLatex": "\\dfrac{\\mathrm{d}^2\\mathbf{r}}{\\mathrm{d}t^2} = \\mathbf{a}",
          "explanation": "Double differentiation of $\\mathbf{r}$ returns $\\mathbf{a}$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Summarise",
          "workingLatex": "\\mathbf{r} = 33.50\\mathbf{i} + 16\\mathbf{j}, \\quad |\\mathbf{v}| = 18.97\\,\\text{m s}^{-1}",
          "explanation": "Position and speed at the required time.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\mathbf{r} = 33.50\\mathbf{i} + 16\\mathbf{j}$ m; speed $= 18.97\\,\\text{m s}^{-1}$."
    }
  },
  {
    "id": "al.y2.mech.further-kinematics.q037",
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Further kinematics",
    "subtopicId": "al.y2.mech.further-kinematics",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "numeric",
    "tags": [
      "velocity-zero",
      "variable-acceleration"
    ],
    "questionText": "A particle moves with acceleration $\\mathbf{a} = (2t - 4)\\mathbf{i} + (0)\\mathbf{j}$ m s$^{-2}$. Given $\\mathbf{v} = \\mathbf{0}$ when $t = 0$, find the time when the velocity next equals $\\mathbf{0}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Integrate to find $\\mathbf{v}$",
          "workingLatex": "\\mathbf{v} = \\int \\mathbf{a}\\,\\mathrm{d}t",
          "explanation": "Integrate each component.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Velocity components",
          "workingLatex": "v_x = t^2 - 4t",
          "explanation": "General velocity after integrating and applying $\\mathbf{v}(0) = \\mathbf{0}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Set $\\mathbf{v} = \\mathbf{0}$",
          "workingLatex": "v_x = 0 \\text{ and/or } v_y = 0",
          "explanation": "Solve for $t$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Solve",
          "workingLatex": "t = 0 \\text{ or } t = 2",
          "explanation": "$t = 0$ (initial) or $t = 2$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Identify the required time",
          "workingLatex": "t = 2\\,\\text{s}",
          "explanation": "The velocity is zero again at $t = 2\\,\\text{s}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Interpret physically",
          "workingLatex": "\\text{Particle momentarily at rest before reversing direction}",
          "explanation": "Zero velocity does not mean zero speed unless both components are zero.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check acceleration at $t$",
          "workingLatex": "\\mathbf{a} \\neq \\mathbf{0} \\text{ at } t = 2",
          "explanation": "Acceleration is generally non-zero when velocity is zero.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Sketch idea",
          "workingLatex": "\\text{Velocity changes sign at this time}",
          "explanation": "The particle reverses direction along the relevant axis.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "t = 2\\,\\text{s}",
          "explanation": "$t = 2\\,\\text{s}$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$t = 2\\,\\text{s}$"
    }
  },
  {
    "id": "al.y2.mech.further-kinematics.q038",
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Further kinematics",
    "subtopicId": "al.y2.mech.further-kinematics",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "numeric",
    "tags": [
      "velocity-zero",
      "variable-acceleration"
    ],
    "questionText": "A particle moves with acceleration $\\mathbf{a} = (0)\\mathbf{i} + (3t - 12)\\mathbf{j}$ m s$^{-2}$. Given $\\mathbf{v} = \\mathbf{0}$ when $t = 0$, find the time when the velocity next equals $\\mathbf{0}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Integrate to find $\\mathbf{v}$",
          "workingLatex": "\\mathbf{v} = \\int \\mathbf{a}\\,\\mathrm{d}t",
          "explanation": "Integrate each component.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Velocity components",
          "workingLatex": "v_y = 1.5t^2 - 12t",
          "explanation": "General velocity after integrating and applying $\\mathbf{v}(0) = \\mathbf{0}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Set $\\mathbf{v} = \\mathbf{0}$",
          "workingLatex": "v_x = 0 \\text{ and/or } v_y = 0",
          "explanation": "Solve for $t$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Solve",
          "workingLatex": "t = 0 \\text{ or } t = 4",
          "explanation": "$t = 0$ (initial) or $t = 4$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Identify the required time",
          "workingLatex": "t = 4\\,\\text{s}",
          "explanation": "The velocity is zero again at $t = 4\\,\\text{s}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Interpret physically",
          "workingLatex": "\\text{Particle momentarily at rest before reversing direction}",
          "explanation": "Zero velocity does not mean zero speed unless both components are zero.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check acceleration at $t$",
          "workingLatex": "\\mathbf{a} \\neq \\mathbf{0} \\text{ at } t = 4",
          "explanation": "Acceleration is generally non-zero when velocity is zero.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Sketch idea",
          "workingLatex": "\\text{Velocity changes sign at this time}",
          "explanation": "The particle reverses direction along the relevant axis.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "t = 4\\,\\text{s}",
          "explanation": "$t = 4\\,\\text{s}$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$t = 4\\,\\text{s}$"
    }
  },
  {
    "id": "al.y2.mech.further-kinematics.q039",
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Further kinematics",
    "subtopicId": "al.y2.mech.further-kinematics",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "numeric",
    "tags": [
      "velocity-zero",
      "variable-acceleration"
    ],
    "questionText": "A particle moves with acceleration $\\mathbf{a} = (4t - 8)\\mathbf{i} + (0)\\mathbf{j}$ m s$^{-2}$. Given $\\mathbf{v} = \\mathbf{0}$ when $t = 0$, find the time when the velocity next equals $\\mathbf{0}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Integrate to find $\\mathbf{v}$",
          "workingLatex": "\\mathbf{v} = \\int \\mathbf{a}\\,\\mathrm{d}t",
          "explanation": "Integrate each component.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Velocity components",
          "workingLatex": "v_x = 2t^2 - 8t",
          "explanation": "General velocity after integrating and applying $\\mathbf{v}(0) = \\mathbf{0}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Set $\\mathbf{v} = \\mathbf{0}$",
          "workingLatex": "v_x = 0 \\text{ and/or } v_y = 0",
          "explanation": "Solve for $t$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Solve",
          "workingLatex": "t = 0 \\text{ or } t = 2",
          "explanation": "$t = 0$ (initial) or $t = 2$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Identify the required time",
          "workingLatex": "t = 2\\,\\text{s}",
          "explanation": "The velocity is zero again at $t = 2\\,\\text{s}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Interpret physically",
          "workingLatex": "\\text{Particle momentarily at rest before reversing direction}",
          "explanation": "Zero velocity does not mean zero speed unless both components are zero.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check acceleration at $t$",
          "workingLatex": "\\mathbf{a} \\neq \\mathbf{0} \\text{ at } t = 2",
          "explanation": "Acceleration is generally non-zero when velocity is zero.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Sketch idea",
          "workingLatex": "\\text{Velocity changes sign at this time}",
          "explanation": "The particle reverses direction along the relevant axis.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "t = 2\\,\\text{s}",
          "explanation": "$t = 2\\,\\text{s}$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$t = 2\\,\\text{s}$"
    }
  },
  {
    "id": "al.y2.mech.further-kinematics.q040",
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Further kinematics",
    "subtopicId": "al.y2.mech.further-kinematics",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "numeric",
    "tags": [
      "velocity-zero",
      "variable-acceleration"
    ],
    "questionText": "A particle moves with acceleration $\\mathbf{a} = (0)\\mathbf{i} + (6t - 18)\\mathbf{j}$ m s$^{-2}$. Given $\\mathbf{v} = \\mathbf{0}$ when $t = 0$, find the time when the velocity next equals $\\mathbf{0}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Integrate to find $\\mathbf{v}$",
          "workingLatex": "\\mathbf{v} = \\int \\mathbf{a}\\,\\mathrm{d}t",
          "explanation": "Integrate each component.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Velocity components",
          "workingLatex": "v_y = 3t^2 - 18t",
          "explanation": "General velocity after integrating and applying $\\mathbf{v}(0) = \\mathbf{0}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Set $\\mathbf{v} = \\mathbf{0}$",
          "workingLatex": "v_x = 0 \\text{ and/or } v_y = 0",
          "explanation": "Solve for $t$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Solve",
          "workingLatex": "t = 0 \\text{ or } t = 3",
          "explanation": "$t = 0$ (initial) or $t = 3$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Identify the required time",
          "workingLatex": "t = 3\\,\\text{s}",
          "explanation": "The velocity is zero again at $t = 3\\,\\text{s}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Interpret physically",
          "workingLatex": "\\text{Particle momentarily at rest before reversing direction}",
          "explanation": "Zero velocity does not mean zero speed unless both components are zero.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check acceleration at $t$",
          "workingLatex": "\\mathbf{a} \\neq \\mathbf{0} \\text{ at } t = 3",
          "explanation": "Acceleration is generally non-zero when velocity is zero.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Sketch idea",
          "workingLatex": "\\text{Velocity changes sign at this time}",
          "explanation": "The particle reverses direction along the relevant axis.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "t = 3\\,\\text{s}",
          "explanation": "$t = 3\\,\\text{s}$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$t = 3\\,\\text{s}$"
    }
  },
  {
    "id": "al.y2.mech.further-kinematics.q041",
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Further kinematics",
    "subtopicId": "al.y2.mech.further-kinematics",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "numeric",
    "tags": [
      "distance-from-origin",
      "magnitude"
    ],
    "questionText": "At time $t$, a particle has position $\\mathbf{r} = 3\\mathbf{i} + 4\\mathbf{j}$ m. Find the distance of the particle from the origin.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Distance from origin",
          "workingLatex": "|\\mathbf{r}| = \\sqrt{x^2 + y^2}",
          "explanation": "Magnitude of the position vector.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute",
          "workingLatex": "|\\mathbf{r}| = \\sqrt{3^2 + 4^2}",
          "explanation": "$x = 3$, $y = 4$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Calculate",
          "workingLatex": "|\\mathbf{r}| = \\sqrt{25} = 5",
          "explanation": "$= 5\\,\\text{m}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Distinguish from displacement travelled",
          "workingLatex": "\\text{This is straight-line distance from } O",
          "explanation": "Not the total distance travelled along the path.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Direction from origin",
          "workingLatex": "\\tan\\theta = \\dfrac{4}{3}",
          "explanation": "Angle of position vector from the $x$-axis.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Pythagoras triple",
          "workingLatex": "3^2 + 4^2 = 5^2",
          "explanation": "Standard 3-4-5 or similar triangle.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Units",
          "workingLatex": "\\text{metres}",
          "explanation": "Distance is a scalar length.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Compare with speed",
          "workingLatex": "|\\mathbf{r}| \\neq |\\mathbf{v}| \\text{ in general}",
          "explanation": "Distance from origin is different from speed.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "|\\mathbf{r}| = 5\\,\\text{m}",
          "explanation": "Distance from origin $= 5\\,\\text{m}$.",
          "diagram": null
        }
      ],
      "finalAnswer": "Distance $= 5\\,\\text{m}$"
    }
  },
  {
    "id": "al.y2.mech.further-kinematics.q042",
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Further kinematics",
    "subtopicId": "al.y2.mech.further-kinematics",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "numeric",
    "tags": [
      "distance-from-origin",
      "magnitude"
    ],
    "questionText": "At time $t$, a particle has position $\\mathbf{r} = 6\\mathbf{i} + 8\\mathbf{j}$ m. Find the distance of the particle from the origin.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Distance from origin",
          "workingLatex": "|\\mathbf{r}| = \\sqrt{x^2 + y^2}",
          "explanation": "Magnitude of the position vector.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute",
          "workingLatex": "|\\mathbf{r}| = \\sqrt{6^2 + 8^2}",
          "explanation": "$x = 6$, $y = 8$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Calculate",
          "workingLatex": "|\\mathbf{r}| = \\sqrt{100} = 10",
          "explanation": "$= 10\\,\\text{m}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Distinguish from displacement travelled",
          "workingLatex": "\\text{This is straight-line distance from } O",
          "explanation": "Not the total distance travelled along the path.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Direction from origin",
          "workingLatex": "\\tan\\theta = \\dfrac{8}{6}",
          "explanation": "Angle of position vector from the $x$-axis.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Application of Pythagoras",
          "workingLatex": "6^2 + 8^2 = 10^2",
          "explanation": "Direct calculation.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Units",
          "workingLatex": "\\text{metres}",
          "explanation": "Distance is a scalar length.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Compare with speed",
          "workingLatex": "|\\mathbf{r}| \\neq |\\mathbf{v}| \\text{ in general}",
          "explanation": "Distance from origin is different from speed.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "|\\mathbf{r}| = 10\\,\\text{m}",
          "explanation": "Distance from origin $= 10\\,\\text{m}$.",
          "diagram": null
        }
      ],
      "finalAnswer": "Distance $= 10\\,\\text{m}$"
    }
  },
  {
    "id": "al.y2.mech.further-kinematics.q043",
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Further kinematics",
    "subtopicId": "al.y2.mech.further-kinematics",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "numeric",
    "tags": [
      "distance-from-origin",
      "magnitude"
    ],
    "questionText": "At time $t$, a particle has position $\\mathbf{r} = 5\\mathbf{i} + 12\\mathbf{j}$ m. Find the distance of the particle from the origin.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Distance from origin",
          "workingLatex": "|\\mathbf{r}| = \\sqrt{x^2 + y^2}",
          "explanation": "Magnitude of the position vector.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute",
          "workingLatex": "|\\mathbf{r}| = \\sqrt{5^2 + 12^2}",
          "explanation": "$x = 5$, $y = 12$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Calculate",
          "workingLatex": "|\\mathbf{r}| = \\sqrt{169} = 13",
          "explanation": "$= 13\\,\\text{m}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Distinguish from displacement travelled",
          "workingLatex": "\\text{This is straight-line distance from } O",
          "explanation": "Not the total distance travelled along the path.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Direction from origin",
          "workingLatex": "\\tan\\theta = \\dfrac{12}{5}",
          "explanation": "Angle of position vector from the $x$-axis.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Pythagoras triple",
          "workingLatex": "5^2 + 12^2 = 13^2",
          "explanation": "Direct calculation.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Units",
          "workingLatex": "\\text{metres}",
          "explanation": "Distance is a scalar length.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Compare with speed",
          "workingLatex": "|\\mathbf{r}| \\neq |\\mathbf{v}| \\text{ in general}",
          "explanation": "Distance from origin is different from speed.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "|\\mathbf{r}| = 13\\,\\text{m}",
          "explanation": "Distance from origin $= 13\\,\\text{m}$.",
          "diagram": null
        }
      ],
      "finalAnswer": "Distance $= 13\\,\\text{m}$"
    }
  },
  {
    "id": "al.y2.mech.further-kinematics.q044",
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Further kinematics",
    "subtopicId": "al.y2.mech.further-kinematics",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "numeric",
    "tags": [
      "distance-from-origin",
      "magnitude"
    ],
    "questionText": "At time $t$, a particle has position $\\mathbf{r} = 8\\mathbf{i} + 15\\mathbf{j}$ m. Find the distance of the particle from the origin.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Distance from origin",
          "workingLatex": "|\\mathbf{r}| = \\sqrt{x^2 + y^2}",
          "explanation": "Magnitude of the position vector.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute",
          "workingLatex": "|\\mathbf{r}| = \\sqrt{8^2 + 15^2}",
          "explanation": "$x = 8$, $y = 15$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Calculate",
          "workingLatex": "|\\mathbf{r}| = \\sqrt{289} = 17",
          "explanation": "$= 17\\,\\text{m}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Distinguish from displacement travelled",
          "workingLatex": "\\text{This is straight-line distance from } O",
          "explanation": "Not the total distance travelled along the path.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Direction from origin",
          "workingLatex": "\\tan\\theta = \\dfrac{15}{8}",
          "explanation": "Angle of position vector from the $x$-axis.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Application of Pythagoras",
          "workingLatex": "8^2 + 15^2 = 17^2",
          "explanation": "Direct calculation.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Units",
          "workingLatex": "\\text{metres}",
          "explanation": "Distance is a scalar length.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Compare with speed",
          "workingLatex": "|\\mathbf{r}| \\neq |\\mathbf{v}| \\text{ in general}",
          "explanation": "Distance from origin is different from speed.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "|\\mathbf{r}| = 17\\,\\text{m}",
          "explanation": "Distance from origin $= 17\\,\\text{m}$.",
          "diagram": null
        }
      ],
      "finalAnswer": "Distance $= 17\\,\\text{m}$"
    }
  },
  {
    "id": "al.y2.mech.further-kinematics.q045",
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Further kinematics",
    "subtopicId": "al.y2.mech.further-kinematics",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "tags": [
      "bearing",
      "direction",
      "velocity"
    ],
    "questionText": "A particle has velocity $\\mathbf{v} = 3\\mathbf{i} + 4\\mathbf{j}$ m s$^{-1}$. Find the speed and the direction of motion, measured as a bearing from North.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Find speed",
          "workingLatex": "|\\mathbf{v}| = \\sqrt{3^2 + 4^2} = 5\\,\\text{m s}^{-1}",
          "explanation": "Speed $= 5\\,\\text{m s}^{-1}$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find angle from North",
          "workingLatex": "\\tan\\theta = \\dfrac{v_x}{v_y}",
          "explanation": "Bearing is measured clockwise from North; use $\\tan\\theta = v_x / v_y$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Calculate",
          "workingLatex": "\\theta = \\tan^{-1}\\!\\left(\\dfrac{3}{4}\\right)",
          "explanation": "Angle from North.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Bearing",
          "workingLatex": "\\text{Bearing} \\approx 53.1°",
          "explanation": "Bearing $\\approx 53.1°$ (N of E).",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Direction vector",
          "workingLatex": "\\mathbf{v} = 3\\mathbf{i} + 4\\mathbf{j}",
          "explanation": "Velocity points in this direction.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Unit vector in direction of motion",
          "workingLatex": "\\hat{\\mathbf{v}} = \\dfrac{\\mathbf{v}}{|\\mathbf{v}|}",
          "explanation": "Divide by speed to get a unit vector.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Interpret bearing",
          "workingLatex": "\\text{Bearing is clockwise from North}",
          "explanation": "In navigation, $000°$ is North, $090°$ is East.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Compare with angle from $x$-axis",
          "workingLatex": "\\text{From } x\\text{-axis: } \\tan^{-1}(v_y/v_x)",
          "explanation": "Different reference direction.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "\\text{Speed } 5\\,\\text{m s}^{-1}, \\text{ bearing } 53.1°",
          "explanation": "Speed and bearing.",
          "diagram": null
        }
      ],
      "finalAnswer": "Speed $= 5\\,\\text{m s}^{-1}$; bearing $\\approx 53.1°$ (N of E)."
    }
  },
  {
    "id": "al.y2.mech.further-kinematics.q046",
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Further kinematics",
    "subtopicId": "al.y2.mech.further-kinematics",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "tags": [
      "bearing",
      "direction",
      "velocity"
    ],
    "questionText": "A particle has velocity $\\mathbf{v} = 5\\mathbf{i} + 5\\mathbf{j}$ m s$^{-1}$. Find the speed and the direction of motion, measured as a bearing from North.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Find speed",
          "workingLatex": "|\\mathbf{v}| = \\sqrt{5^2 + 5^2} = 7.07\\,\\text{m s}^{-1}",
          "explanation": "Speed $= 7.07\\,\\text{m s}^{-1}$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find angle from North",
          "workingLatex": "\\tan\\theta = \\dfrac{v_x}{v_y}",
          "explanation": "Bearing is measured clockwise from North; use $\\tan\\theta = v_x / v_y$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Calculate",
          "workingLatex": "\\theta = \\tan^{-1}\\!\\left(\\dfrac{5}{5}\\right)",
          "explanation": "Angle from North.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Bearing",
          "workingLatex": "\\text{Bearing} \\approx 45°",
          "explanation": "Bearing $\\approx 45°$ (NE).",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Direction vector",
          "workingLatex": "\\mathbf{v} = 5\\mathbf{i} + 5\\mathbf{j}",
          "explanation": "Velocity points in this direction.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Unit vector in direction of motion",
          "workingLatex": "\\hat{\\mathbf{v}} = \\dfrac{\\mathbf{v}}{|\\mathbf{v}|}",
          "explanation": "Divide by speed to get a unit vector.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Interpret bearing",
          "workingLatex": "\\text{Bearing is clockwise from North}",
          "explanation": "In navigation, $000°$ is North, $090°$ is East.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Compare with angle from $x$-axis",
          "workingLatex": "\\text{From } x\\text{-axis: } \\tan^{-1}(v_y/v_x)",
          "explanation": "Different reference direction.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "\\text{Speed } 7.07\\,\\text{m s}^{-1}, \\text{ bearing } 45°",
          "explanation": "Speed and bearing.",
          "diagram": null
        }
      ],
      "finalAnswer": "Speed $= 7.07\\,\\text{m s}^{-1}$; bearing $\\approx 45°$ (NE)."
    }
  },
  {
    "id": "al.y2.mech.further-kinematics.q047",
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Further kinematics",
    "subtopicId": "al.y2.mech.further-kinematics",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "tags": [
      "bearing",
      "direction",
      "velocity"
    ],
    "questionText": "A particle has velocity $\\mathbf{v} = 0\\mathbf{i} + 6\\mathbf{j}$ m s$^{-1}$. Find the speed and the direction of motion, measured as a bearing from North.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Find speed",
          "workingLatex": "|\\mathbf{v}| = \\sqrt{0^2 + 6^2} = 6\\,\\text{m s}^{-1}",
          "explanation": "Speed $= 6\\,\\text{m s}^{-1}$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find angle from North",
          "workingLatex": "\\tan\\theta = \\dfrac{v_x}{v_y}",
          "explanation": "Bearing is measured clockwise from North; use $\\tan\\theta = v_x / v_y$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Calculate",
          "workingLatex": "\\theta = \\tan^{-1}\\!\\left(\\dfrac{0}{6}\\right)",
          "explanation": "Angle from North.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Bearing",
          "workingLatex": "\\text{Bearing} \\approx 90°",
          "explanation": "Bearing $\\approx 90°$ (due N).",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Direction vector",
          "workingLatex": "\\mathbf{v} = 0\\mathbf{i} + 6\\mathbf{j}",
          "explanation": "Velocity points in this direction.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Unit vector in direction of motion",
          "workingLatex": "\\hat{\\mathbf{v}} = \\dfrac{\\mathbf{v}}{|\\mathbf{v}|}",
          "explanation": "Divide by speed to get a unit vector.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Interpret bearing",
          "workingLatex": "\\text{Bearing is clockwise from North}",
          "explanation": "In navigation, $000°$ is North, $090°$ is East.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Compare with angle from $x$-axis",
          "workingLatex": "\\text{From } x\\text{-axis: } \\tan^{-1}(v_y/v_x)",
          "explanation": "Different reference direction.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "\\text{Speed } 6\\,\\text{m s}^{-1}, \\text{ bearing } 90°",
          "explanation": "Speed and bearing.",
          "diagram": null
        }
      ],
      "finalAnswer": "Speed $= 6\\,\\text{m s}^{-1}$; bearing $\\approx 90°$ (due N)."
    }
  },
  {
    "id": "al.y2.mech.further-kinematics.q048",
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Further kinematics",
    "subtopicId": "al.y2.mech.further-kinematics",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "tags": [
      "bearing",
      "direction",
      "velocity"
    ],
    "questionText": "A particle has velocity $\\mathbf{v} = 7\\mathbf{i} + 0\\mathbf{j}$ m s$^{-1}$. Find the speed and the direction of motion, measured as a bearing from North.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Find speed",
          "workingLatex": "|\\mathbf{v}| = \\sqrt{7^2 + 0^2} = 7\\,\\text{m s}^{-1}",
          "explanation": "Speed $= 7\\,\\text{m s}^{-1}$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find angle from North",
          "workingLatex": "\\tan\\theta = \\dfrac{v_x}{v_y}",
          "explanation": "Bearing is measured clockwise from North; use $\\tan\\theta = v_x / v_y$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Calculate",
          "workingLatex": "\\theta = 90°",
          "explanation": "Angle from North.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Bearing",
          "workingLatex": "\\text{Bearing} \\approx 0°",
          "explanation": "Bearing $\\approx 0°$ (due E).",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Direction vector",
          "workingLatex": "\\mathbf{v} = 7\\mathbf{i} + 0\\mathbf{j}",
          "explanation": "Velocity points in this direction.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Unit vector in direction of motion",
          "workingLatex": "\\hat{\\mathbf{v}} = \\dfrac{\\mathbf{v}}{|\\mathbf{v}|}",
          "explanation": "Divide by speed to get a unit vector.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Interpret bearing",
          "workingLatex": "\\text{Bearing is clockwise from North}",
          "explanation": "In navigation, $000°$ is North, $090°$ is East.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Compare with angle from $x$-axis",
          "workingLatex": "\\text{From } x\\text{-axis: } \\tan^{-1}(v_y/v_x)",
          "explanation": "Different reference direction.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "\\text{Speed } 7\\,\\text{m s}^{-1}, \\text{ bearing } 0°",
          "explanation": "Speed and bearing.",
          "diagram": null
        }
      ],
      "finalAnswer": "Speed $= 7\\,\\text{m s}^{-1}$; bearing $\\approx 0°$ (due E)."
    }
  },
  {
    "id": "al.y2.mech.further-kinematics.q049",
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Further kinematics",
    "subtopicId": "al.y2.mech.further-kinematics",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "tags": [
      "vector-suvat",
      "constant-acceleration"
    ],
    "questionText": "A particle starts from the origin with initial velocity $\\mathbf{u} = 4\\mathbf{i} + 3\\mathbf{j}$ m s$^{-1}$ and constant acceleration $\\mathbf{a} = 2\\mathbf{i} + 0\\mathbf{j}$ m s$^{-2}$. Find $\\mathbf{r}$ and the speed when $t = 2\\,\\text{s}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Use vector SUVAT",
          "workingLatex": "\\mathbf{r} = \\mathbf{u}t + \\tfrac{1}{2}\\mathbf{a}t^2",
          "explanation": "Constant acceleration formula in vector form.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Initial velocity",
          "workingLatex": "\\mathbf{u} = 4\\mathbf{i} + 3\\mathbf{j}",
          "explanation": "$\\mathbf{u} = 4\\mathbf{i} + 3\\mathbf{j}$ m s$^{-1}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Acceleration",
          "workingLatex": "\\mathbf{a} = 2\\mathbf{i} + 0\\mathbf{j}",
          "explanation": "$\\mathbf{a} = 2\\mathbf{i} + 0\\mathbf{j}$ m s$^{-2}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Position at $t$",
          "workingLatex": "\\mathbf{r} = (4t + 2t^2)\\mathbf{i} + ...",
          "explanation": "Substitute $t$ into the SUVAT formula.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Calculate $\\mathbf{r}$",
          "workingLatex": "\\mathbf{r} = 12\\mathbf{i} + 6\\mathbf{j}",
          "explanation": "$\\mathbf{r} = 12\\mathbf{i} + 6\\mathbf{j}$ m.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Velocity at $t$",
          "workingLatex": "\\mathbf{v} = \\mathbf{u} + \\mathbf{a}t = 8\\mathbf{i} + 3\\mathbf{j}",
          "explanation": "$\\mathbf{v} = 8\\mathbf{i} + 3\\mathbf{j}$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Speed",
          "workingLatex": "|\\mathbf{v}| = 8.54\\,\\text{m s}^{-1}",
          "explanation": "Speed $= 8.54\\,\\text{m s}^{-1}$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Component independence",
          "workingLatex": "\\text{Each component satisfies SUVAT separately}",
          "explanation": "$x$ and $y$ motions are independent with constant acceleration.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "\\mathbf{r} = 12\\mathbf{i} + 6\\mathbf{j}, \\quad |\\mathbf{v}| = 8.54\\,\\text{m s}^{-1}",
          "explanation": "Position and speed at the given time.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\mathbf{r} = 12\\mathbf{i} + 6\\mathbf{j}$ m; speed $= 8.54\\,\\text{m s}^{-1}$."
    }
  },
  {
    "id": "al.y2.mech.further-kinematics.q050",
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Further kinematics",
    "subtopicId": "al.y2.mech.further-kinematics",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "tags": [
      "vector-suvat",
      "constant-acceleration"
    ],
    "questionText": "A particle starts from the origin with initial velocity $\\mathbf{u} = 0\\mathbf{i} + 5\\mathbf{j}$ m s$^{-1}$ and constant acceleration $\\mathbf{a} = 0\\mathbf{i} + 3\\mathbf{j}$ m s$^{-2}$. Find $\\mathbf{r}$ and the speed when $t = 3\\,\\text{s}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Use vector SUVAT",
          "workingLatex": "\\mathbf{r} = \\mathbf{u}t + \\tfrac{1}{2}\\mathbf{a}t^2",
          "explanation": "Constant acceleration formula in vector form.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Initial velocity",
          "workingLatex": "\\mathbf{u} = 0\\mathbf{i} + 5\\mathbf{j}",
          "explanation": "$\\mathbf{u} = 0\\mathbf{i} + 5\\mathbf{j}$ m s$^{-1}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Acceleration",
          "workingLatex": "\\mathbf{a} = 0\\mathbf{i} + 3\\mathbf{j}",
          "explanation": "$\\mathbf{a} = 0\\mathbf{i} + 3\\mathbf{j}$ m s$^{-2}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Position at $t$",
          "workingLatex": "\\mathbf{r} = (0t + 0t^2)\\mathbf{i} + ...",
          "explanation": "Substitute $t$ into the SUVAT formula.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Calculate $\\mathbf{r}$",
          "workingLatex": "\\mathbf{r} = 0\\mathbf{i} + 28.50\\mathbf{j}",
          "explanation": "$\\mathbf{r} = 0\\mathbf{i} + 28.50\\mathbf{j}$ m.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Velocity at $t$",
          "workingLatex": "\\mathbf{v} = \\mathbf{u} + \\mathbf{a}t = 0\\mathbf{i} + 14\\mathbf{j}",
          "explanation": "$\\mathbf{v} = 0\\mathbf{i} + 14\\mathbf{j}$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Speed",
          "workingLatex": "|\\mathbf{v}| = 14\\,\\text{m s}^{-1}",
          "explanation": "Speed $= 14\\,\\text{m s}^{-1}$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Component independence",
          "workingLatex": "\\text{Each component satisfies SUVAT separately}",
          "explanation": "$x$ and $y$ motions are independent with constant acceleration.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "\\mathbf{r} = 0\\mathbf{i} + 28.50\\mathbf{j}, \\quad |\\mathbf{v}| = 14\\,\\text{m s}^{-1}",
          "explanation": "Position and speed at the given time.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\mathbf{r} = 0\\mathbf{i} + 28.50\\mathbf{j}$ m; speed $= 14\\,\\text{m s}^{-1}$."
    }
  },
  {
    "id": "al.y2.mech.further-kinematics.q051",
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Further kinematics",
    "subtopicId": "al.y2.mech.further-kinematics",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "written",
    "tags": [
      "full-analysis",
      "differentiation"
    ],
    "questionText": "A particle moves with $\\mathbf{r} = (t^3)\\mathbf{i} + (t^2)\\mathbf{j}$. Find $\\mathbf{v}$, $\\mathbf{a}$, the speed, and the distance from the origin when $t = 2\\,\\text{s}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Differentiate $\\mathbf{r}$ once for $\\mathbf{v}$",
          "workingLatex": "\\mathbf{v} = \\dfrac{\\mathrm{d}\\mathbf{r}}{\\mathrm{d}t}",
          "explanation": "First derivative of position.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Velocity at $t$",
          "workingLatex": "\\mathbf{v} = 12\\mathbf{i} + 4\\mathbf{j}",
          "explanation": "$\\mathbf{v} = 12\\mathbf{i} + 4\\mathbf{j}$ m s$^{-1}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Differentiate again for $\\mathbf{a}$",
          "workingLatex": "\\mathbf{a} = \\dfrac{\\mathrm{d}\\mathbf{v}}{\\mathrm{d}t}",
          "explanation": "Second derivative of position.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Acceleration at $t$",
          "workingLatex": "\\mathbf{a} = 6\\mathbf{i} + 4\\mathbf{j}",
          "explanation": "$\\mathbf{a} = 6\\mathbf{i} + 4\\mathbf{j}$ m s$^{-2}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Speed",
          "workingLatex": "|\\mathbf{v}| = 12.65\\,\\text{m s}^{-1}",
          "explanation": "Speed $= 12.65\\,\\text{m s}^{-1}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Position at $t$",
          "workingLatex": "\\mathbf{r} = 8\\mathbf{i} + 4\\mathbf{j}",
          "explanation": "$\\mathbf{r} = 8\\mathbf{i} + 4\\mathbf{j}$ m.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Distance from origin",
          "workingLatex": "|\\mathbf{r}| = 8.94\\,\\text{m}",
          "explanation": "Distance from $O$: $8.94\\,\\text{m}$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Magnitude of acceleration",
          "workingLatex": "|\\mathbf{a}| = 7.21\\,\\text{m s}^{-2}",
          "explanation": "Scalar acceleration.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Are $\\mathbf{v}$ and $\\mathbf{a}$ parallel?",
          "workingLatex": "\\mathbf{v} \\cdot \\mathbf{a} = 88",
          "explanation": "Dot product indicates whether speed is increasing most rapidly.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Tangential direction",
          "workingLatex": "\\text{Velocity is tangent to the path}",
          "explanation": "Direction of motion at each instant.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Curved path",
          "workingLatex": "\\text{Non-constant direction } \\Rightarrow \\text{ curved trajectory}",
          "explanation": "Unless acceleration is purely along velocity.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Summarise at $t$",
          "workingLatex": "\\mathbf{r} = 8\\mathbf{i} + 4\\mathbf{j}, \\quad |\\mathbf{v}| = 12.65\\,\\text{m s}^{-1}",
          "explanation": "Complete kinematic description.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Method recap",
          "workingLatex": "\\mathbf{r} \\xrightarrow{d/dt} \\mathbf{v} \\xrightarrow{d/dt} \\mathbf{a}",
          "explanation": "Systematic differentiation chain.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\mathbf{v} = 12\\mathbf{i} + 4\\mathbf{j}$ m s$^{-1}$; $\\mathbf{a} = 6\\mathbf{i} + 4\\mathbf{j}$ m s$^{-2}$; speed $= 12.65\\,\\text{m s}^{-1}$; $|\\mathbf{r}| = 8.94\\,\\text{m}$."
    }
  },
  {
    "id": "al.y2.mech.further-kinematics.q052",
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Further kinematics",
    "subtopicId": "al.y2.mech.further-kinematics",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "written",
    "tags": [
      "full-analysis",
      "differentiation"
    ],
    "questionText": "A particle moves with $\\mathbf{r} = (2t^2)\\mathbf{i} + (t^3)\\mathbf{j}$. Find $\\mathbf{v}$, $\\mathbf{a}$, the speed, and the distance from the origin when $t = 3\\,\\text{s}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Differentiate $\\mathbf{r}$ once for $\\mathbf{v}$",
          "workingLatex": "\\mathbf{v} = \\dfrac{\\mathrm{d}\\mathbf{r}}{\\mathrm{d}t}",
          "explanation": "First derivative of position.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Velocity at $t$",
          "workingLatex": "\\mathbf{v} = 12\\mathbf{i} + 9\\mathbf{j}",
          "explanation": "$\\mathbf{v} = 12\\mathbf{i} + 9\\mathbf{j}$ m s$^{-1}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Differentiate again for $\\mathbf{a}$",
          "workingLatex": "\\mathbf{a} = \\dfrac{\\mathrm{d}\\mathbf{v}}{\\mathrm{d}t}",
          "explanation": "Second derivative of position.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Acceleration at $t$",
          "workingLatex": "\\mathbf{a} = 12\\mathbf{i} + 18\\mathbf{j}",
          "explanation": "$\\mathbf{a} = 12\\mathbf{i} + 18\\mathbf{j}$ m s$^{-2}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Speed",
          "workingLatex": "|\\mathbf{v}| = 15\\,\\text{m s}^{-1}",
          "explanation": "Speed $= 15\\,\\text{m s}^{-1}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Position at $t$",
          "workingLatex": "\\mathbf{r} = 18\\mathbf{i} + 27\\mathbf{j}",
          "explanation": "$\\mathbf{r} = 18\\mathbf{i} + 27\\mathbf{j}$ m.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Distance from origin",
          "workingLatex": "|\\mathbf{r}| = 32.45\\,\\text{m}",
          "explanation": "Distance from $O$: $32.45\\,\\text{m}$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Magnitude of acceleration",
          "workingLatex": "|\\mathbf{a}| = 21.63\\,\\text{m s}^{-2}",
          "explanation": "Scalar acceleration.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Are $\\mathbf{v}$ and $\\mathbf{a}$ parallel?",
          "workingLatex": "\\mathbf{v} \\cdot \\mathbf{a} = 306",
          "explanation": "Dot product indicates whether speed is increasing most rapidly.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Tangential direction",
          "workingLatex": "\\text{Velocity is tangent to the path}",
          "explanation": "Direction of motion at each instant.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Curved path",
          "workingLatex": "\\text{Non-constant direction } \\Rightarrow \\text{ curved trajectory}",
          "explanation": "Unless acceleration is purely along velocity.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Summarise at $t$",
          "workingLatex": "\\mathbf{r} = 18\\mathbf{i} + 27\\mathbf{j}, \\quad |\\mathbf{v}| = 15\\,\\text{m s}^{-1}",
          "explanation": "Complete kinematic description.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Method recap",
          "workingLatex": "\\mathbf{r} \\xrightarrow{d/dt} \\mathbf{v} \\xrightarrow{d/dt} \\mathbf{a}",
          "explanation": "Systematic differentiation chain.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\mathbf{v} = 12\\mathbf{i} + 9\\mathbf{j}$ m s$^{-1}$; $\\mathbf{a} = 12\\mathbf{i} + 18\\mathbf{j}$ m s$^{-2}$; speed $= 15\\,\\text{m s}^{-1}$; $|\\mathbf{r}| = 32.45\\,\\text{m}$."
    }
  },
  {
    "id": "al.y2.mech.further-kinematics.q053",
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Further kinematics",
    "subtopicId": "al.y2.mech.further-kinematics",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "written",
    "tags": [
      "full-analysis",
      "differentiation"
    ],
    "questionText": "A particle moves with $\\mathbf{r} = (t^2 - t)\\mathbf{i} + (2t)\\mathbf{j}$. Find $\\mathbf{v}$, $\\mathbf{a}$, the speed, and the distance from the origin when $t = 2\\,\\text{s}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Differentiate $\\mathbf{r}$ once for $\\mathbf{v}$",
          "workingLatex": "\\mathbf{v} = \\dfrac{\\mathrm{d}\\mathbf{r}}{\\mathrm{d}t}",
          "explanation": "First derivative of position.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Velocity at $t$",
          "workingLatex": "\\mathbf{v} = 2\\mathbf{i} + 3\\mathbf{j}",
          "explanation": "$\\mathbf{v} = 2\\mathbf{i} + 3\\mathbf{j}$ m s$^{-1}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Differentiate again for $\\mathbf{a}$",
          "workingLatex": "\\mathbf{a} = \\dfrac{\\mathrm{d}\\mathbf{v}}{\\mathrm{d}t}",
          "explanation": "Second derivative of position.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Acceleration at $t$",
          "workingLatex": "\\mathbf{a} = 2\\mathbf{i} + 4\\mathbf{j}",
          "explanation": "$\\mathbf{a} = 2\\mathbf{i} + 4\\mathbf{j}$ m s$^{-2}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Speed",
          "workingLatex": "|\\mathbf{v}| = 3.61\\,\\text{m s}^{-1}",
          "explanation": "Speed $= 3.61\\,\\text{m s}^{-1}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Position at $t$",
          "workingLatex": "\\mathbf{r} = 2\\mathbf{i} + 4\\mathbf{j}",
          "explanation": "$\\mathbf{r} = 2\\mathbf{i} + 4\\mathbf{j}$ m.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Distance from origin",
          "workingLatex": "|\\mathbf{r}| = 4.47\\,\\text{m}",
          "explanation": "Distance from $O$: $4.47\\,\\text{m}$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Magnitude of acceleration",
          "workingLatex": "|\\mathbf{a}| = 4.47\\,\\text{m s}^{-2}",
          "explanation": "Scalar acceleration.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Are $\\mathbf{v}$ and $\\mathbf{a}$ parallel?",
          "workingLatex": "\\mathbf{v} \\cdot \\mathbf{a} = 16",
          "explanation": "Dot product indicates whether speed is increasing most rapidly.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Tangential direction",
          "workingLatex": "\\text{Velocity is tangent to the path}",
          "explanation": "Direction of motion at each instant.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Curved path",
          "workingLatex": "\\text{Non-constant direction } \\Rightarrow \\text{ curved trajectory}",
          "explanation": "Unless acceleration is purely along velocity.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Summarise at $t$",
          "workingLatex": "\\mathbf{r} = 2\\mathbf{i} + 4\\mathbf{j}, \\quad |\\mathbf{v}| = 3.61\\,\\text{m s}^{-1}",
          "explanation": "Complete kinematic description.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Method recap",
          "workingLatex": "\\mathbf{r} \\xrightarrow{d/dt} \\mathbf{v} \\xrightarrow{d/dt} \\mathbf{a}",
          "explanation": "Systematic differentiation chain.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\mathbf{v} = 2\\mathbf{i} + 3\\mathbf{j}$ m s$^{-1}$; $\\mathbf{a} = 2\\mathbf{i} + 4\\mathbf{j}$ m s$^{-2}$; speed $= 3.61\\,\\text{m s}^{-1}$; $|\\mathbf{r}| = 4.47\\,\\text{m}$."
    }
  },
  {
    "id": "al.y2.mech.further-kinematics.q054",
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Further kinematics",
    "subtopicId": "al.y2.mech.further-kinematics",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "written",
    "tags": [
      "full-analysis",
      "differentiation"
    ],
    "questionText": "A particle moves with $\\mathbf{r} = (3t)\\mathbf{i} + (t^2 - 4)\\mathbf{j}$. Find $\\mathbf{v}$, $\\mathbf{a}$, the speed, and the distance from the origin when $t = 3\\,\\text{s}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Differentiate $\\mathbf{r}$ once for $\\mathbf{v}$",
          "workingLatex": "\\mathbf{v} = \\dfrac{\\mathrm{d}\\mathbf{r}}{\\mathrm{d}t}",
          "explanation": "First derivative of position.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Velocity at $t$",
          "workingLatex": "\\mathbf{v} = 3\\mathbf{i} + 6\\mathbf{j}",
          "explanation": "$\\mathbf{v} = 3\\mathbf{i} + 6\\mathbf{j}$ m s$^{-1}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Differentiate again for $\\mathbf{a}$",
          "workingLatex": "\\mathbf{a} = \\dfrac{\\mathrm{d}\\mathbf{v}}{\\mathrm{d}t}",
          "explanation": "Second derivative of position.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Acceleration at $t$",
          "workingLatex": "\\mathbf{a} = 9\\mathbf{i} + 2\\mathbf{j}",
          "explanation": "$\\mathbf{a} = 9\\mathbf{i} + 2\\mathbf{j}$ m s$^{-2}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Speed",
          "workingLatex": "|\\mathbf{v}| = 6.71\\,\\text{m s}^{-1}",
          "explanation": "Speed $= 6.71\\,\\text{m s}^{-1}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Position at $t$",
          "workingLatex": "\\mathbf{r} = 9\\mathbf{i} + 5\\mathbf{j}",
          "explanation": "$\\mathbf{r} = 9\\mathbf{i} + 5\\mathbf{j}$ m.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Distance from origin",
          "workingLatex": "|\\mathbf{r}| = 10.30\\,\\text{m}",
          "explanation": "Distance from $O$: $10.30\\,\\text{m}$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Magnitude of acceleration",
          "workingLatex": "|\\mathbf{a}| = 9.22\\,\\text{m s}^{-2}",
          "explanation": "Scalar acceleration.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Are $\\mathbf{v}$ and $\\mathbf{a}$ parallel?",
          "workingLatex": "\\mathbf{v} \\cdot \\mathbf{a} = 39",
          "explanation": "Dot product indicates whether speed is increasing most rapidly.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Tangential direction",
          "workingLatex": "\\text{Velocity is tangent to the path}",
          "explanation": "Direction of motion at each instant.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Curved path",
          "workingLatex": "\\text{Non-constant direction } \\Rightarrow \\text{ curved trajectory}",
          "explanation": "Unless acceleration is purely along velocity.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Summarise at $t$",
          "workingLatex": "\\mathbf{r} = 9\\mathbf{i} + 5\\mathbf{j}, \\quad |\\mathbf{v}| = 6.71\\,\\text{m s}^{-1}",
          "explanation": "Complete kinematic description.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Method recap",
          "workingLatex": "\\mathbf{r} \\xrightarrow{d/dt} \\mathbf{v} \\xrightarrow{d/dt} \\mathbf{a}",
          "explanation": "Systematic differentiation chain.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\mathbf{v} = 3\\mathbf{i} + 6\\mathbf{j}$ m s$^{-1}$; $\\mathbf{a} = 9\\mathbf{i} + 2\\mathbf{j}$ m s$^{-2}$; speed $= 6.71\\,\\text{m s}^{-1}$; $|\\mathbf{r}| = 10.30\\,\\text{m}$."
    }
  },
  {
    "id": "al.y2.mech.further-kinematics.q055",
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Further kinematics",
    "subtopicId": "al.y2.mech.further-kinematics",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "written",
    "tags": [
      "integration-chain",
      "variable-acceleration"
    ],
    "questionText": "A particle has $\\mathbf{a} = (2t)\\mathbf{i} + (4)\\mathbf{j}$ m s$^{-2}$, $\\mathbf{v} = \\mathbf{0}$ and $\\mathbf{r} = 0\\mathbf{i} + 0\\mathbf{j}$ when $t = 0$. Find $\\mathbf{r}$ and the speed when $t = 3\\,\\text{s}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Integrate $\\mathbf{a}$ to get $\\mathbf{v}$",
          "workingLatex": "\\mathbf{v} = \\int \\mathbf{a}\\,\\mathrm{d}t + \\mathbf{c}_1",
          "explanation": "First integration.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Apply $\\mathbf{v}(0) = \\mathbf{0}$",
          "workingLatex": "\\mathbf{v} = (t^2)\\mathbf{i} + (2t^2)\\mathbf{j}",
          "explanation": "Velocity vector.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Integrate $\\mathbf{v}$ to get $\\mathbf{r}$",
          "workingLatex": "\\mathbf{r} = \\int \\mathbf{v}\\,\\mathrm{d}t + \\mathbf{c}_2",
          "explanation": "Second integration.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply $\\mathbf{r}(0)$",
          "workingLatex": "\\mathbf{r}(0) = 0\\mathbf{i} + 0\\mathbf{j}",
          "explanation": "Initial position fixes constants.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Velocity at $t = 3$",
          "workingLatex": "\\mathbf{v} = 18\\mathbf{i} + 12\\mathbf{j}",
          "explanation": "$\\mathbf{v} = 18\\mathbf{i} + 12\\mathbf{j}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Position at $t = 3$",
          "workingLatex": "\\mathbf{r} = 9\\mathbf{i} + 18\\mathbf{j}",
          "explanation": "$\\mathbf{r} = 9\\mathbf{i} + 18\\mathbf{j}$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Speed",
          "workingLatex": "|\\mathbf{v}| = 21.63\\,\\text{m s}^{-1}",
          "explanation": "Speed $= 21.63\\,\\text{m s}^{-1}$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Verify $\\mathbf{a}$ by differentiation",
          "workingLatex": "\\dfrac{\\mathrm{d}\\mathbf{v}}{\\mathrm{d}t} = (2t)\\mathbf{i} + (4)\\mathbf{j}",
          "explanation": "Confirms the given acceleration.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Distance from origin",
          "workingLatex": "|\\mathbf{r}| = 20.12\\,\\text{m}",
          "explanation": "$|\\mathbf{r}| = 20.12\\,\\text{m}$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Displacement from start",
          "workingLatex": "\\Delta\\mathbf{r} = 9\\mathbf{i} + 18\\mathbf{j}",
          "explanation": "Change in position from $t = 0$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Compare displacement and distance",
          "workingLatex": "|\\Delta\\mathbf{r}| \\le \\text{distance travelled}",
          "explanation": "Straight-line displacement may be less than path length.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Answer summary",
          "workingLatex": "\\mathbf{r} = 9\\mathbf{i} + 18\\mathbf{j}, \\quad |\\mathbf{v}| = 21.63\\,\\text{m s}^{-1}",
          "explanation": "Complete answer.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Integration constants",
          "workingLatex": "\\text{Two vector constants from two integrations}",
          "explanation": "Always apply initial conditions to determine them.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\mathbf{r} = 9\\mathbf{i} + 18\\mathbf{j}$ m; speed $= 21.63\\,\\text{m s}^{-1}$."
    }
  },
  {
    "id": "al.y2.mech.further-kinematics.q056",
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Further kinematics",
    "subtopicId": "al.y2.mech.further-kinematics",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "written",
    "tags": [
      "integration-chain",
      "variable-acceleration"
    ],
    "questionText": "A particle has $\\mathbf{a} = (6)\\mathbf{i} + (3t)\\mathbf{j}$ m s$^{-2}$, $\\mathbf{v} = \\mathbf{0}$ and $\\mathbf{r} = 0\\mathbf{i} + 0\\mathbf{j}$ when $t = 0$. Find $\\mathbf{r}$ and the speed when $t = 2\\,\\text{s}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Integrate $\\mathbf{a}$ to get $\\mathbf{v}$",
          "workingLatex": "\\mathbf{v} = \\int \\mathbf{a}\\,\\mathrm{d}t + \\mathbf{c}_1",
          "explanation": "First integration.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Apply $\\mathbf{v}(0) = \\mathbf{0}$",
          "workingLatex": "\\mathbf{v} = (6t)\\mathbf{i} + (1.5t^2)\\mathbf{j}",
          "explanation": "Velocity vector.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Integrate $\\mathbf{v}$ to get $\\mathbf{r}$",
          "workingLatex": "\\mathbf{r} = \\int \\mathbf{v}\\,\\mathrm{d}t + \\mathbf{c}_2",
          "explanation": "Second integration.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply $\\mathbf{r}(0)$",
          "workingLatex": "\\mathbf{r}(0) = 0\\mathbf{i} + 0\\mathbf{j}",
          "explanation": "Initial position fixes constants.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Velocity at $t = 2$",
          "workingLatex": "\\mathbf{v} = 12\\mathbf{i} + 6\\mathbf{j}",
          "explanation": "$\\mathbf{v} = 12\\mathbf{i} + 6\\mathbf{j}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Position at $t = 2$",
          "workingLatex": "\\mathbf{r} = 12\\mathbf{i} + 6\\mathbf{j}",
          "explanation": "$\\mathbf{r} = 12\\mathbf{i} + 6\\mathbf{j}$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Speed",
          "workingLatex": "|\\mathbf{v}| = 13.42\\,\\text{m s}^{-1}",
          "explanation": "Speed $= 13.42\\,\\text{m s}^{-1}$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Verify $\\mathbf{a}$ by differentiation",
          "workingLatex": "\\dfrac{\\mathrm{d}\\mathbf{v}}{\\mathrm{d}t} = (6)\\mathbf{i} + (3t)\\mathbf{j}",
          "explanation": "Confirms the given acceleration.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Distance from origin",
          "workingLatex": "|\\mathbf{r}| = 13.42\\,\\text{m}",
          "explanation": "$|\\mathbf{r}| = 13.42\\,\\text{m}$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Displacement from start",
          "workingLatex": "\\Delta\\mathbf{r} = 12\\mathbf{i} + 6\\mathbf{j}",
          "explanation": "Change in position from $t = 0$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Compare displacement and distance",
          "workingLatex": "|\\Delta\\mathbf{r}| \\le \\text{distance travelled}",
          "explanation": "Straight-line displacement may be less than path length.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Answer summary",
          "workingLatex": "\\mathbf{r} = 12\\mathbf{i} + 6\\mathbf{j}, \\quad |\\mathbf{v}| = 13.42\\,\\text{m s}^{-1}",
          "explanation": "Complete answer.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Integration constants",
          "workingLatex": "\\text{Two vector constants from two integrations}",
          "explanation": "Always apply initial conditions to determine them.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\mathbf{r} = 12\\mathbf{i} + 6\\mathbf{j}$ m; speed $= 13.42\\,\\text{m s}^{-1}$."
    }
  },
  {
    "id": "al.y2.mech.further-kinematics.q057",
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Further kinematics",
    "subtopicId": "al.y2.mech.further-kinematics",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "written",
    "tags": [
      "integration-chain",
      "variable-acceleration"
    ],
    "questionText": "A particle has $\\mathbf{a} = (4t)\\mathbf{i} + (2)\\mathbf{j}$ m s$^{-2}$, $\\mathbf{v} = \\mathbf{0}$ and $\\mathbf{r} = 1\\mathbf{i} + 0\\mathbf{j}$ when $t = 0$. Find $\\mathbf{r}$ and the speed when $t = 2\\,\\text{s}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Integrate $\\mathbf{a}$ to get $\\mathbf{v}$",
          "workingLatex": "\\mathbf{v} = \\int \\mathbf{a}\\,\\mathrm{d}t + \\mathbf{c}_1",
          "explanation": "First integration.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Apply $\\mathbf{v}(0) = \\mathbf{0}$",
          "workingLatex": "\\mathbf{v} = (2t^2)\\mathbf{i} + (2t)\\mathbf{j}",
          "explanation": "Velocity vector.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Integrate $\\mathbf{v}$ to get $\\mathbf{r}$",
          "workingLatex": "\\mathbf{r} = \\int \\mathbf{v}\\,\\mathrm{d}t + \\mathbf{c}_2",
          "explanation": "Second integration.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply $\\mathbf{r}(0)$",
          "workingLatex": "\\mathbf{r}(0) = 1\\mathbf{i} + 0\\mathbf{j}",
          "explanation": "Initial position fixes constants.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Velocity at $t = 2$",
          "workingLatex": "\\mathbf{v} = 8\\mathbf{i} + 4\\mathbf{j}",
          "explanation": "$\\mathbf{v} = 8\\mathbf{i} + 4\\mathbf{j}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Position at $t = 2$",
          "workingLatex": "\\mathbf{r} = 5\\mathbf{i} + 4\\mathbf{j}",
          "explanation": "$\\mathbf{r} = 5\\mathbf{i} + 4\\mathbf{j}$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Speed",
          "workingLatex": "|\\mathbf{v}| = 8.94\\,\\text{m s}^{-1}",
          "explanation": "Speed $= 8.94\\,\\text{m s}^{-1}$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Verify $\\mathbf{a}$ by differentiation",
          "workingLatex": "\\dfrac{\\mathrm{d}\\mathbf{v}}{\\mathrm{d}t} = (4t)\\mathbf{i} + (2)\\mathbf{j}",
          "explanation": "Confirms the given acceleration.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Distance from origin",
          "workingLatex": "|\\mathbf{r}| = 6.40\\,\\text{m}",
          "explanation": "$|\\mathbf{r}| = 6.40\\,\\text{m}$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Displacement from start",
          "workingLatex": "\\Delta\\mathbf{r} = 4\\mathbf{i} + 4\\mathbf{j}",
          "explanation": "Change in position from $t = 0$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Compare displacement and distance",
          "workingLatex": "|\\Delta\\mathbf{r}| \\le \\text{distance travelled}",
          "explanation": "Straight-line displacement may be less than path length.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Answer summary",
          "workingLatex": "\\mathbf{r} = 5\\mathbf{i} + 4\\mathbf{j}, \\quad |\\mathbf{v}| = 8.94\\,\\text{m s}^{-1}",
          "explanation": "Complete answer.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Integration constants",
          "workingLatex": "\\text{Two vector constants from two integrations}",
          "explanation": "Always apply initial conditions to determine them.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\mathbf{r} = 5\\mathbf{i} + 4\\mathbf{j}$ m; speed $= 8.94\\,\\text{m s}^{-1}$."
    }
  },
  {
    "id": "al.y2.mech.further-kinematics.q058",
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Further kinematics",
    "subtopicId": "al.y2.mech.further-kinematics",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "written",
    "tags": [
      "integration-chain",
      "variable-acceleration"
    ],
    "questionText": "A particle has $\\mathbf{a} = (3)\\mathbf{i} + (6t)\\mathbf{j}$ m s$^{-2}$, $\\mathbf{v} = \\mathbf{0}$ and $\\mathbf{r} = 0\\mathbf{i} + 1\\mathbf{j}$ when $t = 0$. Find $\\mathbf{r}$ and the speed when $t = 3\\,\\text{s}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Integrate $\\mathbf{a}$ to get $\\mathbf{v}$",
          "workingLatex": "\\mathbf{v} = \\int \\mathbf{a}\\,\\mathrm{d}t + \\mathbf{c}_1",
          "explanation": "First integration.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Apply $\\mathbf{v}(0) = \\mathbf{0}$",
          "workingLatex": "\\mathbf{v} = (3t)\\mathbf{i} + (3t^2)\\mathbf{j}",
          "explanation": "Velocity vector.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Integrate $\\mathbf{v}$ to get $\\mathbf{r}$",
          "workingLatex": "\\mathbf{r} = \\int \\mathbf{v}\\,\\mathrm{d}t + \\mathbf{c}_2",
          "explanation": "Second integration.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply $\\mathbf{r}(0)$",
          "workingLatex": "\\mathbf{r}(0) = 0\\mathbf{i} + 1\\mathbf{j}",
          "explanation": "Initial position fixes constants.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Velocity at $t = 3$",
          "workingLatex": "\\mathbf{v} = 9\\mathbf{i} + 27\\mathbf{j}",
          "explanation": "$\\mathbf{v} = 9\\mathbf{i} + 27\\mathbf{j}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Position at $t = 3$",
          "workingLatex": "\\mathbf{r} = 9\\mathbf{i} + 10\\mathbf{j}",
          "explanation": "$\\mathbf{r} = 9\\mathbf{i} + 10\\mathbf{j}$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Speed",
          "workingLatex": "|\\mathbf{v}| = 28.46\\,\\text{m s}^{-1}",
          "explanation": "Speed $= 28.46\\,\\text{m s}^{-1}$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Verify $\\mathbf{a}$ by differentiation",
          "workingLatex": "\\dfrac{\\mathrm{d}\\mathbf{v}}{\\mathrm{d}t} = (3)\\mathbf{i} + (6t)\\mathbf{j}",
          "explanation": "Confirms the given acceleration.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Distance from origin",
          "workingLatex": "|\\mathbf{r}| = 13.45\\,\\text{m}",
          "explanation": "$|\\mathbf{r}| = 13.45\\,\\text{m}$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Displacement from start",
          "workingLatex": "\\Delta\\mathbf{r} = 9\\mathbf{i} + 9\\mathbf{j}",
          "explanation": "Change in position from $t = 0$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Compare displacement and distance",
          "workingLatex": "|\\Delta\\mathbf{r}| \\le \\text{distance travelled}",
          "explanation": "Straight-line displacement may be less than path length.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Answer summary",
          "workingLatex": "\\mathbf{r} = 9\\mathbf{i} + 10\\mathbf{j}, \\quad |\\mathbf{v}| = 28.46\\,\\text{m s}^{-1}",
          "explanation": "Complete answer.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Integration constants",
          "workingLatex": "\\text{Two vector constants from two integrations}",
          "explanation": "Always apply initial conditions to determine them.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\mathbf{r} = 9\\mathbf{i} + 10\\mathbf{j}$ m; speed $= 28.46\\,\\text{m s}^{-1}$."
    }
  },
  {
    "id": "al.y2.mech.further-kinematics.q059",
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Further kinematics",
    "subtopicId": "al.y2.mech.further-kinematics",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "written",
    "tags": [
      "parallel-vectors",
      "direction"
    ],
    "questionText": "A particle moves with $\\mathbf{r} = (t^2)\\mathbf{i} + (t^3)\\mathbf{j}$. Find the value(s) of $t$ for which $\\mathbf{r}$ and $\\mathbf{v}$ are parallel.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Differentiate to find velocity",
          "workingLatex": "\\mathbf{v} = \\dfrac{\\mathrm{d}\\mathbf{r}}{\\mathrm{d}t}",
          "explanation": "Differentiate position.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write $\\mathbf{v}$ in component form",
          "workingLatex": "\\mathbf{v} = (t^2)' \\mathbf{i} + (t^3)' \\mathbf{j}",
          "explanation": "Differentiate each component.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Condition for parallel vectors",
          "workingLatex": "\\mathbf{r} = k\\mathbf{v} \\text{ for some scalar } k",
          "explanation": "Parallel vectors are scalar multiples of each other.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Cross product test (2D)",
          "workingLatex": "x v_y - y v_x = 0",
          "explanation": "In 2D, parallel vectors have zero 'cross product'.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Set up equation",
          "workingLatex": "Solve for $t$",
          "explanation": "Substitute components and solve.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Interpret result",
          "workingLatex": "$\\mathbf{r}$ and $\\mathbf{v}$ are parallel at $t = 0$; for $t > 0$ they are not parallel in general",
          "explanation": "Physical meaning of the result.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Straight-line motion",
          "workingLatex": "\\mathbf{r} \\parallel \\mathbf{v} \\Rightarrow \\text{ motion along a straight line}",
          "explanation": "When position and velocity are parallel, the path is a ray from the origin.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Perpendicular case note",
          "workingLatex": "\\mathbf{r} \\cdot \\mathbf{v} = 0 \\Rightarrow \\text{ perpendicular}",
          "explanation": "Related condition for perpendicular vectors.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Application",
          "workingLatex": "\\text{Useful for identifying straight-line motion}",
          "explanation": "Common exam question type.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Verify at solution",
          "workingLatex": "Substitute back to confirm",
          "explanation": "Check the parallel condition holds.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Sketch path",
          "workingLatex": "\\text{Straight line or curved}",
          "explanation": "Visualise the trajectory.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Answer",
          "workingLatex": "$\\mathbf{r}$ and $\\mathbf{v}$ are parallel at $t = 0$",
          "explanation": "Time(s) when condition holds.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Method",
          "workingLatex": "\\text{Cross product or ratio of components}",
          "explanation": "Either approach works in 2D.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\mathbf{r}$ and $\\mathbf{v}$ are parallel at $t = 0$; for $t > 0$ they are not parallel in general."
    }
  },
  {
    "id": "al.y2.mech.further-kinematics.q060",
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Further kinematics",
    "subtopicId": "al.y2.mech.further-kinematics",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "written",
    "tags": [
      "parallel-vectors",
      "direction"
    ],
    "questionText": "A particle moves with $\\mathbf{r} = (t)\\mathbf{i} + (2t)\\mathbf{j}$. Find the value(s) of $t$ for which $\\mathbf{r}$ and $\\mathbf{v}$ are parallel.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Differentiate to find velocity",
          "workingLatex": "\\mathbf{v} = \\dfrac{\\mathrm{d}\\mathbf{r}}{\\mathrm{d}t}",
          "explanation": "Differentiate position.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write $\\mathbf{v}$ in component form",
          "workingLatex": "\\mathbf{v} = (t)' \\mathbf{i} + (2t)' \\mathbf{j}",
          "explanation": "Differentiate each component.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Condition for parallel vectors",
          "workingLatex": "\\mathbf{r} = k\\mathbf{v} \\text{ for some scalar } k",
          "explanation": "Parallel vectors are scalar multiples of each other.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Cross product test (2D)",
          "workingLatex": "x v_y - y v_x = 0",
          "explanation": "In 2D, parallel vectors have zero 'cross product'.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Set up equation",
          "workingLatex": "Solve for $t$",
          "explanation": "Substitute components and solve.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Interpret result",
          "workingLatex": "$\\mathbf{r}$ and $\\mathbf{v}$ are parallel for all $t$ (motion along a straight line through the origin)",
          "explanation": "Physical meaning of the result.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Straight-line motion",
          "workingLatex": "\\mathbf{r} \\parallel \\mathbf{v} \\Rightarrow \\text{ motion along a straight line}",
          "explanation": "When position and velocity are parallel, the path is a ray from the origin.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Perpendicular case note",
          "workingLatex": "\\mathbf{r} \\cdot \\mathbf{v} = 0 \\Rightarrow \\text{ perpendicular}",
          "explanation": "Related condition for perpendicular vectors.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Application",
          "workingLatex": "\\text{Useful for identifying straight-line motion}",
          "explanation": "Common exam question type.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Verify at solution",
          "workingLatex": "Substitute back to confirm",
          "explanation": "Check the parallel condition holds.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Sketch path",
          "workingLatex": "\\text{Straight line or curved}",
          "explanation": "Visualise the trajectory.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Answer",
          "workingLatex": "$\\mathbf{r}$ and $\\mathbf{v}$ are parallel for all $t$ (motion along a straight line through the origin).",
          "explanation": "Time(s) when condition holds.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Method",
          "workingLatex": "\\text{Cross product or ratio of components}",
          "explanation": "Either approach works in 2D.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\mathbf{r}$ and $\\mathbf{v}$ are parallel for all $t$ (motion along a straight line through the origin)."
    }
  },
  {
    "id": "al.y2.mech.further-kinematics.q061",
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Further kinematics",
    "subtopicId": "al.y2.mech.further-kinematics",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "written",
    "tags": [
      "parallel-vectors",
      "direction"
    ],
    "questionText": "A particle moves with $\\mathbf{r} = (t^2)\\mathbf{i} + (6t)\\mathbf{j}$. Find the value(s) of $t$ for which $\\mathbf{r}$ and $\\mathbf{v}$ are parallel.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Differentiate to find velocity",
          "workingLatex": "\\mathbf{v} = \\dfrac{\\mathrm{d}\\mathbf{r}}{\\mathrm{d}t}",
          "explanation": "Differentiate position.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write $\\mathbf{v}$ in component form",
          "workingLatex": "\\mathbf{v} = (t^2)' \\mathbf{i} + (6t)' \\mathbf{j}",
          "explanation": "Differentiate each component.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Condition for parallel vectors",
          "workingLatex": "\\mathbf{r} = k\\mathbf{v} \\text{ for some scalar } k",
          "explanation": "Parallel vectors are scalar multiples of each other.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Cross product test (2D)",
          "workingLatex": "x v_y - y v_x = 0",
          "explanation": "In 2D, parallel vectors have zero 'cross product'.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Set up equation",
          "workingLatex": "Solve for $t$",
          "explanation": "Substitute components and solve.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Interpret result",
          "workingLatex": "$t = 0\\,\\text{s}$ (and the motion is always along a straight line through the origin for $\\mathbf{r} \\parallel k\\mathbf{v}$)",
          "explanation": "Physical meaning of the result.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Straight-line motion",
          "workingLatex": "\\mathbf{r} \\parallel \\mathbf{v} \\Rightarrow \\text{ motion along a straight line}",
          "explanation": "When position and velocity are parallel, the path is a ray from the origin.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Perpendicular case note",
          "workingLatex": "\\mathbf{r} \\cdot \\mathbf{v} = 0 \\Rightarrow \\text{ perpendicular}",
          "explanation": "Related condition for perpendicular vectors.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Application",
          "workingLatex": "\\text{Useful for identifying straight-line motion}",
          "explanation": "Common exam question type.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Verify at solution",
          "workingLatex": "Substitute back to confirm",
          "explanation": "Check the parallel condition holds.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Sketch path",
          "workingLatex": "\\text{Straight line or curved}",
          "explanation": "Visualise the trajectory.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Answer",
          "workingLatex": "$t = 0\\,\\text{s}$ (and the motion is always along a straight line through the origin for $\\mathbf{r} \\parallel k\\mathbf{v}$).",
          "explanation": "Time(s) when condition holds.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Method",
          "workingLatex": "\\text{Cross product or ratio of components}",
          "explanation": "Either approach works in 2D.",
          "diagram": null
        }
      ],
      "finalAnswer": "$t = 0\\,\\text{s}$ (and the motion is always along a straight line through the origin for $\\mathbf{r} \\parallel k\\mathbf{v}$)."
    }
  },
  {
    "id": "al.y2.mech.further-kinematics.q062",
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Further kinematics",
    "subtopicId": "al.y2.mech.further-kinematics",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "written",
    "tags": [
      "parallel-vectors",
      "direction"
    ],
    "questionText": "A particle moves with $\\mathbf{r} = (3t)\\mathbf{i} + (4t)\\mathbf{j}$. Find the value(s) of $t$ for which $\\mathbf{r}$ and $\\mathbf{v}$ are parallel.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Differentiate to find velocity",
          "workingLatex": "\\mathbf{v} = \\dfrac{\\mathrm{d}\\mathbf{r}}{\\mathrm{d}t}",
          "explanation": "Differentiate position.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write $\\mathbf{v}$ in component form",
          "workingLatex": "\\mathbf{v} = (3t)' \\mathbf{i} + (4t)' \\mathbf{j}",
          "explanation": "Differentiate each component.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Condition for parallel vectors",
          "workingLatex": "\\mathbf{r} = k\\mathbf{v} \\text{ for some scalar } k",
          "explanation": "Parallel vectors are scalar multiples of each other.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Cross product test (2D)",
          "workingLatex": "x v_y - y v_x = 0",
          "explanation": "In 2D, parallel vectors have zero 'cross product'.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Set up equation",
          "workingLatex": "Solve for $t$",
          "explanation": "Substitute components and solve.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Interpret result",
          "workingLatex": "$\\mathbf{r}$ and $\\mathbf{v}$ are parallel for all $t$ (motion along a straight line through the origin)",
          "explanation": "Physical meaning of the result.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Straight-line motion",
          "workingLatex": "\\mathbf{r} \\parallel \\mathbf{v} \\Rightarrow \\text{ motion along a straight line}",
          "explanation": "When position and velocity are parallel, the path is a ray from the origin.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Perpendicular case note",
          "workingLatex": "\\mathbf{r} \\cdot \\mathbf{v} = 0 \\Rightarrow \\text{ perpendicular}",
          "explanation": "Related condition for perpendicular vectors.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Application",
          "workingLatex": "\\text{Useful for identifying straight-line motion}",
          "explanation": "Common exam question type.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Verify at solution",
          "workingLatex": "Substitute back to confirm",
          "explanation": "Check the parallel condition holds.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Sketch path",
          "workingLatex": "\\text{Straight line or curved}",
          "explanation": "Visualise the trajectory.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Answer",
          "workingLatex": "$\\mathbf{r}$ and $\\mathbf{v}$ are parallel for all $t$ (motion along a straight line through the origin).",
          "explanation": "Time(s) when condition holds.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Method",
          "workingLatex": "\\text{Cross product or ratio of components}",
          "explanation": "Either approach works in 2D.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\mathbf{r}$ and $\\mathbf{v}$ are parallel for all $t$ (motion along a straight line through the origin)."
    }
  },
  {
    "id": "al.y2.mech.further-kinematics.q063",
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Further kinematics",
    "subtopicId": "al.y2.mech.further-kinematics",
    "difficulty": "Hard",
    "marks": 9,
    "answerType": "written",
    "tags": [
      "multi-part",
      "vector-calculus"
    ],
    "questionText": "A particle moves with $\\mathbf{a} = (2t)\\mathbf{i} + (3)\\mathbf{j}$ m s$^{-2}$, starting from rest at the origin. Taking $g = 9.8\\,\\text{m s}^{-2}$ where needed, find when $t = 3\\,\\text{s}$:\n\n(a) the velocity $\\mathbf{v}$,\n(b) the position $\\mathbf{r}$,\n(c) the speed,\n(d) the distance from the origin.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "(a) Integrate $\\mathbf{a}$ to find $\\mathbf{v}$",
          "workingLatex": "\\mathbf{v} = \\int \\mathbf{a}\\,\\mathrm{d}t",
          "explanation": "With $\\mathbf{v}(0) = \\mathbf{0}$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "(a) Velocity at $t$",
          "workingLatex": "\\mathbf{v} = 6\\mathbf{i} + 9\\mathbf{j}",
          "explanation": "(a) $\\mathbf{v} = 6\\mathbf{i} + 9\\mathbf{j}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "(b) Integrate $\\mathbf{v}$ to find $\\mathbf{r}$",
          "workingLatex": "\\mathbf{r} = \\int \\mathbf{v}\\,\\mathrm{d}t",
          "explanation": "With $\\mathbf{r}(0) = \\mathbf{0}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "(b) Position at $t$",
          "workingLatex": "\\mathbf{r} = 9\\mathbf{i} + 13.50\\mathbf{j}",
          "explanation": "(b) $\\mathbf{r} = 9\\mathbf{i} + 13.50\\mathbf{j}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "(c) Speed",
          "workingLatex": "|\\mathbf{v}| = 10.82\\,\\text{m s}^{-1}",
          "explanation": "(c) Speed $= 10.82\\,\\text{m s}^{-1}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "(d) Distance from origin",
          "workingLatex": "|\\mathbf{r}| = 16.22\\,\\text{m}",
          "explanation": "(d) $|\\mathbf{r}| = 16.22\\,\\text{m}$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Verify by differentiation",
          "workingLatex": "\\dfrac{\\mathrm{d}^2\\mathbf{r}}{\\mathrm{d}t^2} = (2t)\\mathbf{i} + (3)\\mathbf{j}",
          "explanation": "Confirms acceleration.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Direction of velocity",
          "workingLatex": "\\tan\\theta = \\dfrac{v_y}{v_x} = 1.500",
          "explanation": "Angle of motion from $x$-axis.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Is speed increasing?",
          "workingLatex": "\\mathbf{v} \\cdot \\mathbf{a} > 0",
          "explanation": "Dot product of velocity and acceleration.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Magnitude of acceleration at $t$",
          "workingLatex": "|\\mathbf{a}| = 3.61\\,\\text{m s}^{-2}",
          "explanation": "Scalar acceleration at the given time.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Summarise (a)–(d)",
          "workingLatex": "\\mathbf{v}, \\mathbf{r}, |\\mathbf{v}|, |\\mathbf{r}|",
          "explanation": "All four parts answered.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Calculus chain complete",
          "workingLatex": "\\mathbf{a} \\xrightarrow{\\int} \\mathbf{v} \\xrightarrow{\\int} \\mathbf{r}",
          "explanation": "Full vector kinematics pipeline.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Initial conditions essential",
          "workingLatex": "\\text{Without ICs, constants are unknown}",
          "explanation": "Always use given initial velocity and position.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Units check",
          "workingLatex": "\\mathbf{r}\\text{ in m}, \\mathbf{v}\\text{ in m s}^{-1}, \\mathbf{a}\\text{ in m s}^{-2}",
          "explanation": "Consistent SI units throughout.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "Final answers",
          "workingLatex": "(a)\\ 6\\mathbf{i}+9\\mathbf{j},\\ (b)\\ 9\\mathbf{i}+13.50\\mathbf{j},\\ (c)\\ 10.82\\,\\text{m s}^{-1},\\ (d)\\ 16.22\\,\\text{m}",
          "explanation": "Complete solution.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $\\mathbf{v} = 6\\mathbf{i} + 9\\mathbf{j}$ m s$^{-1}$; (b) $\\mathbf{r} = 9\\mathbf{i} + 13.50\\mathbf{j}$ m; (c) speed $= 10.82\\,\\text{m s}^{-1}$; (d) $|\\mathbf{r}| = 16.22\\,\\text{m}$."
    }
  },
  {
    "id": "al.y2.mech.further-kinematics.q064",
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Further kinematics",
    "subtopicId": "al.y2.mech.further-kinematics",
    "difficulty": "Hard",
    "marks": 9,
    "answerType": "written",
    "tags": [
      "multi-part",
      "vector-calculus"
    ],
    "questionText": "A particle moves with $\\mathbf{a} = (4)\\mathbf{i} + (2t)\\mathbf{j}$ m s$^{-2}$, starting from rest at the origin. Taking $g = 9.8\\,\\text{m s}^{-2}$ where needed, find when $t = 2\\,\\text{s}$:\n\n(a) the velocity $\\mathbf{v}$,\n(b) the position $\\mathbf{r}$,\n(c) the speed,\n(d) the distance from the origin.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "(a) Integrate $\\mathbf{a}$ to find $\\mathbf{v}$",
          "workingLatex": "\\mathbf{v} = \\int \\mathbf{a}\\,\\mathrm{d}t",
          "explanation": "With $\\mathbf{v}(0) = \\mathbf{0}$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "(a) Velocity at $t$",
          "workingLatex": "\\mathbf{v} = 8\\mathbf{i} + 4\\mathbf{j}",
          "explanation": "(a) $\\mathbf{v} = 8\\mathbf{i} + 4\\mathbf{j}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "(b) Integrate $\\mathbf{v}$ to find $\\mathbf{r}$",
          "workingLatex": "\\mathbf{r} = \\int \\mathbf{v}\\,\\mathrm{d}t",
          "explanation": "With $\\mathbf{r}(0) = \\mathbf{0}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "(b) Position at $t$",
          "workingLatex": "\\mathbf{r} = 8\\mathbf{i} + 2.67\\mathbf{j}",
          "explanation": "(b) $\\mathbf{r} = 8\\mathbf{i} + 2.67\\mathbf{j}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "(c) Speed",
          "workingLatex": "|\\mathbf{v}| = 8.94\\,\\text{m s}^{-1}",
          "explanation": "(c) Speed $= 8.94\\,\\text{m s}^{-1}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "(d) Distance from origin",
          "workingLatex": "|\\mathbf{r}| = 8.43\\,\\text{m}",
          "explanation": "(d) $|\\mathbf{r}| = 8.43\\,\\text{m}$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Verify by differentiation",
          "workingLatex": "\\dfrac{\\mathrm{d}^2\\mathbf{r}}{\\mathrm{d}t^2} = (4)\\mathbf{i} + (2t)\\mathbf{j}",
          "explanation": "Confirms acceleration.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Direction of velocity",
          "workingLatex": "\\tan\\theta = \\dfrac{v_y}{v_x} = 0.500",
          "explanation": "Angle of motion from $x$-axis.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Is speed increasing?",
          "workingLatex": "\\mathbf{v} \\cdot \\mathbf{a} > 0",
          "explanation": "Dot product of velocity and acceleration.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Magnitude of acceleration at $t$",
          "workingLatex": "|\\mathbf{a}| = 5.66\\,\\text{m s}^{-2}",
          "explanation": "Scalar acceleration at the given time.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Summarise (a)–(d)",
          "workingLatex": "\\mathbf{v}, \\mathbf{r}, |\\mathbf{v}|, |\\mathbf{r}|",
          "explanation": "All four parts answered.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Calculus chain complete",
          "workingLatex": "\\mathbf{a} \\xrightarrow{\\int} \\mathbf{v} \\xrightarrow{\\int} \\mathbf{r}",
          "explanation": "Full vector kinematics pipeline.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Initial conditions essential",
          "workingLatex": "\\text{Without ICs, constants are unknown}",
          "explanation": "Always use given initial velocity and position.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Units check",
          "workingLatex": "\\mathbf{r}\\text{ in m}, \\mathbf{v}\\text{ in m s}^{-1}, \\mathbf{a}\\text{ in m s}^{-2}",
          "explanation": "Consistent SI units throughout.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "Final answers",
          "workingLatex": "(a)\\ 8\\mathbf{i}+4\\mathbf{j},\\ (b)\\ 8\\mathbf{i}+2.67\\mathbf{j},\\ (c)\\ 8.94\\,\\text{m s}^{-1},\\ (d)\\ 8.43\\,\\text{m}",
          "explanation": "Complete solution.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $\\mathbf{v} = 8\\mathbf{i} + 4\\mathbf{j}$ m s$^{-1}$; (b) $\\mathbf{r} = 8\\mathbf{i} + 2.67\\mathbf{j}$ m; (c) speed $= 8.94\\,\\text{m s}^{-1}$; (d) $|\\mathbf{r}| = 8.43\\,\\text{m}$."
    }
  },
  {
    "id": "al.y2.mech.further-kinematics.q065",
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Further kinematics",
    "subtopicId": "al.y2.mech.further-kinematics",
    "difficulty": "Hard",
    "marks": 9,
    "answerType": "written",
    "tags": [
      "multi-part",
      "vector-calculus"
    ],
    "questionText": "A particle moves with $\\mathbf{a} = (3t)\\mathbf{i} + (5)\\mathbf{j}$ m s$^{-2}$, starting from rest at the origin. Taking $g = 9.8\\,\\text{m s}^{-2}$ where needed, find when $t = 2\\,\\text{s}$:\n\n(a) the velocity $\\mathbf{v}$,\n(b) the position $\\mathbf{r}$,\n(c) the speed,\n(d) the distance from the origin.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "(a) Integrate $\\mathbf{a}$ to find $\\mathbf{v}$",
          "workingLatex": "\\mathbf{v} = \\int \\mathbf{a}\\,\\mathrm{d}t",
          "explanation": "With $\\mathbf{v}(0) = \\mathbf{0}$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "(a) Velocity at $t$",
          "workingLatex": "\\mathbf{v} = 6\\mathbf{i} + 10\\mathbf{j}",
          "explanation": "(a) $\\mathbf{v} = 6\\mathbf{i} + 10\\mathbf{j}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "(b) Integrate $\\mathbf{v}$ to find $\\mathbf{r}$",
          "workingLatex": "\\mathbf{r} = \\int \\mathbf{v}\\,\\mathrm{d}t",
          "explanation": "With $\\mathbf{r}(0) = \\mathbf{0}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "(b) Position at $t$",
          "workingLatex": "\\mathbf{r} = 4\\mathbf{i} + 10\\mathbf{j}",
          "explanation": "(b) $\\mathbf{r} = 4\\mathbf{i} + 10\\mathbf{j}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "(c) Speed",
          "workingLatex": "|\\mathbf{v}| = 11.66\\,\\text{m s}^{-1}",
          "explanation": "(c) Speed $= 11.66\\,\\text{m s}^{-1}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "(d) Distance from origin",
          "workingLatex": "|\\mathbf{r}| = 10.77\\,\\text{m}",
          "explanation": "(d) $|\\mathbf{r}| = 10.77\\,\\text{m}$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Verify by differentiation",
          "workingLatex": "\\dfrac{\\mathrm{d}^2\\mathbf{r}}{\\mathrm{d}t^2} = (3t)\\mathbf{i} + (5)\\mathbf{j}",
          "explanation": "Confirms acceleration.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Direction of velocity",
          "workingLatex": "\\tan\\theta = \\dfrac{v_y}{v_x} = 1.667",
          "explanation": "Angle of motion from $x$-axis.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Is speed increasing?",
          "workingLatex": "\\mathbf{v} \\cdot \\mathbf{a} > 0",
          "explanation": "Dot product of velocity and acceleration.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Magnitude of acceleration at $t$",
          "workingLatex": "|\\mathbf{a}| = 7.81\\,\\text{m s}^{-2}",
          "explanation": "Scalar acceleration at the given time.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Summarise (a)–(d)",
          "workingLatex": "\\mathbf{v}, \\mathbf{r}, |\\mathbf{v}|, |\\mathbf{r}|",
          "explanation": "All four parts answered.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Calculus chain complete",
          "workingLatex": "\\mathbf{a} \\xrightarrow{\\int} \\mathbf{v} \\xrightarrow{\\int} \\mathbf{r}",
          "explanation": "Full vector kinematics pipeline.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Initial conditions essential",
          "workingLatex": "\\text{Without ICs, constants are unknown}",
          "explanation": "Always use given initial velocity and position.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Units check",
          "workingLatex": "\\mathbf{r}\\text{ in m}, \\mathbf{v}\\text{ in m s}^{-1}, \\mathbf{a}\\text{ in m s}^{-2}",
          "explanation": "Consistent SI units throughout.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "Final answers",
          "workingLatex": "(a)\\ 6\\mathbf{i}+10\\mathbf{j},\\ (b)\\ 4\\mathbf{i}+10\\mathbf{j},\\ (c)\\ 11.66\\,\\text{m s}^{-1},\\ (d)\\ 10.77\\,\\text{m}",
          "explanation": "Complete solution.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $\\mathbf{v} = 6\\mathbf{i} + 10\\mathbf{j}$ m s$^{-1}$; (b) $\\mathbf{r} = 4\\mathbf{i} + 10\\mathbf{j}$ m; (c) speed $= 11.66\\,\\text{m s}^{-1}$; (d) $|\\mathbf{r}| = 10.77\\,\\text{m}$."
    }
  },
  {
    "id": "al.y2.mech.further-kinematics.q066",
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Further kinematics",
    "subtopicId": "al.y2.mech.further-kinematics",
    "difficulty": "Hard",
    "marks": 9,
    "answerType": "written",
    "tags": [
      "multi-part",
      "vector-calculus"
    ],
    "questionText": "A particle moves with $\\mathbf{a} = (6)\\mathbf{i} + (4t)\\mathbf{j}$ m s$^{-2}$, starting from rest at the origin. Taking $g = 9.8\\,\\text{m s}^{-2}$ where needed, find when $t = 3\\,\\text{s}$:\n\n(a) the velocity $\\mathbf{v}$,\n(b) the position $\\mathbf{r}$,\n(c) the speed,\n(d) the distance from the origin.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "(a) Integrate $\\mathbf{a}$ to find $\\mathbf{v}$",
          "workingLatex": "\\mathbf{v} = \\int \\mathbf{a}\\,\\mathrm{d}t",
          "explanation": "With $\\mathbf{v}(0) = \\mathbf{0}$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "(a) Velocity at $t$",
          "workingLatex": "\\mathbf{v} = 18\\mathbf{i} + 18\\mathbf{j}",
          "explanation": "(a) $\\mathbf{v} = 18\\mathbf{i} + 18\\mathbf{j}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "(b) Integrate $\\mathbf{v}$ to find $\\mathbf{r}$",
          "workingLatex": "\\mathbf{r} = \\int \\mathbf{v}\\,\\mathrm{d}t",
          "explanation": "With $\\mathbf{r}(0) = \\mathbf{0}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "(b) Position at $t$",
          "workingLatex": "\\mathbf{r} = 27\\mathbf{i} + 18\\mathbf{j}",
          "explanation": "(b) $\\mathbf{r} = 27\\mathbf{i} + 18\\mathbf{j}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "(c) Speed",
          "workingLatex": "|\\mathbf{v}| = 25.46\\,\\text{m s}^{-1}",
          "explanation": "(c) Speed $= 25.46\\,\\text{m s}^{-1}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "(d) Distance from origin",
          "workingLatex": "|\\mathbf{r}| = 32.45\\,\\text{m}",
          "explanation": "(d) $|\\mathbf{r}| = 32.45\\,\\text{m}$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Verify by differentiation",
          "workingLatex": "\\dfrac{\\mathrm{d}^2\\mathbf{r}}{\\mathrm{d}t^2} = (6)\\mathbf{i} + (4t)\\mathbf{j}",
          "explanation": "Confirms acceleration.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Direction of velocity",
          "workingLatex": "\\tan\\theta = \\dfrac{v_y}{v_x} = 1",
          "explanation": "Angle of motion from $x$-axis.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Is speed increasing?",
          "workingLatex": "\\mathbf{v} \\cdot \\mathbf{a} > 0",
          "explanation": "Dot product of velocity and acceleration.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Magnitude of acceleration at $t$",
          "workingLatex": "|\\mathbf{a}| = 10.30\\,\\text{m s}^{-2}",
          "explanation": "Scalar acceleration at the given time.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Summarise (a)–(d)",
          "workingLatex": "\\mathbf{v}, \\mathbf{r}, |\\mathbf{v}|, |\\mathbf{r}|",
          "explanation": "All four parts answered.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Calculus chain complete",
          "workingLatex": "\\mathbf{a} \\xrightarrow{\\int} \\mathbf{v} \\xrightarrow{\\int} \\mathbf{r}",
          "explanation": "Full vector kinematics pipeline.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Initial conditions essential",
          "workingLatex": "\\text{Without ICs, constants are unknown}",
          "explanation": "Always use given initial velocity and position.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Units check",
          "workingLatex": "\\mathbf{r}\\text{ in m}, \\mathbf{v}\\text{ in m s}^{-1}, \\mathbf{a}\\text{ in m s}^{-2}",
          "explanation": "Consistent SI units throughout.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "Final answers",
          "workingLatex": "(a)\\ 18\\mathbf{i}+18\\mathbf{j},\\ (b)\\ 27\\mathbf{i}+18\\mathbf{j},\\ (c)\\ 25.46\\,\\text{m s}^{-1},\\ (d)\\ 32.45\\,\\text{m}",
          "explanation": "Complete solution.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $\\mathbf{v} = 18\\mathbf{i} + 18\\mathbf{j}$ m s$^{-1}$; (b) $\\mathbf{r} = 27\\mathbf{i} + 18\\mathbf{j}$ m; (c) speed $= 25.46\\,\\text{m s}^{-1}$; (d) $|\\mathbf{r}| = 32.45\\,\\text{m}$."
    }
  },
  {
    "id": "al.y2.mech.further-kinematics.q067",
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Further kinematics",
    "subtopicId": "al.y2.mech.further-kinematics",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "numeric",
    "tags": [
      "vector-calculus",
      "speed",
      "variable-acceleration"
    ],
    "questionText": "A particle has $\\mathbf{a} = 2t\\mathbf{i} + 3\\mathbf{j}$ m s$^{-2}$ with $\\mathbf{v} = \\mathbf{0}$ at $t = 0$. Find the speed when $t = 2\\,\\text{s}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Integrate $\\mathbf{a}$ to obtain $\\mathbf{v}$",
          "workingLatex": "\\mathbf{v} = \\int \\mathbf{a}\\,\\mathrm{d}t + \\mathbf{c}_1",
          "explanation": "First integration with $\\mathbf{v}(0) = \\mathbf{0}$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Velocity components",
          "workingLatex": "v_x = t^2,\\quad v_y = 3t",
          "explanation": "Integrate each component and apply initial condition.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Integrate $\\mathbf{v}$ to obtain $\\mathbf{r}$",
          "workingLatex": "\\mathbf{r} = \\int \\mathbf{v}\\,\\mathrm{d}t + \\mathbf{c}_2",
          "explanation": "Second integration with $\\mathbf{r}(0) = \\mathbf{0}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute $t = 2$ into $\\mathbf{v}$",
          "workingLatex": "\\mathbf{v} = 4\\mathbf{i} + 6\\mathbf{j}",
          "explanation": "Velocity at $t = 2$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute $t = 2$ into $\\mathbf{r}$",
          "workingLatex": "\\mathbf{r} = 4\\mathbf{i} + 6\\mathbf{j}",
          "explanation": "Position at $t = 2$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Calculate speed",
          "workingLatex": "|\\mathbf{v}| = 7.21\\,\\text{m s}^{-1}",
          "explanation": "Speed $= 7.21\\,\\text{m s}^{-1}$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Calculate distance from origin",
          "workingLatex": "|\\mathbf{r}| = 7.21\\,\\text{m}",
          "explanation": "$|\\mathbf{r}| = 7.21\\,\\text{m}$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Verify by double differentiation",
          "workingLatex": "\\dfrac{\\mathrm{d}^2\\mathbf{r}}{\\mathrm{d}t^2} = \\mathbf{a}",
          "explanation": "Confirms the acceleration.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Component-wise check",
          "workingLatex": "\\text{Each component satisfies } d^2x/dt^2 = a_x",
          "explanation": "Independent verification.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Physical interpretation",
          "workingLatex": "\\text{At } t = 2\\text{, particle is at } (4, 6)",
          "explanation": "Position in the plane.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Direction of motion",
          "workingLatex": "\\mathbf{v} = 4\\mathbf{i} + 6\\mathbf{j}",
          "explanation": "Velocity direction at this instant.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Magnitude required",
          "workingLatex": "|\\mathbf{v}| = 7.21",
          "explanation": "The question asks for a scalar magnitude.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Integration technique",
          "workingLatex": "\\text{Power rule on each component}",
          "explanation": "Standard polynomial integration.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Common error",
          "workingLatex": "\\text{Forgetting vector constants of integration}",
          "explanation": "Always apply initial conditions.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "Vector SUVAT does not apply",
          "workingLatex": "\\text{Acceleration is not constant}",
          "explanation": "Must use calculus, not SUVAT formulae.",
          "diagram": null
        },
        {
          "stepNumber": 16,
          "description": "Final answer",
          "workingLatex": "Speed = 7.21\\,\\text{m s}^{-1}",
          "explanation": "Speed $= 7.21\\,\\text{m s}^{-1}$",
          "diagram": null
        }
      ],
      "finalAnswer": "Speed $= 7.21\\,\\text{m s}^{-1}$"
    }
  },
  {
    "id": "al.y2.mech.further-kinematics.q068",
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Further kinematics",
    "subtopicId": "al.y2.mech.further-kinematics",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "numeric",
    "tags": [
      "vector-calculus",
      "distance",
      "variable-acceleration"
    ],
    "questionText": "A particle has $\\mathbf{a} = 4\\mathbf{i} + 2t\\mathbf{j}$ m s$^{-2}$ with $\\mathbf{v} = \\mathbf{0}$ and $\\mathbf{r} = \\mathbf{0}$ at $t = 0$. Find the distance from the origin when $t = 3\\,\\text{s}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Integrate $\\mathbf{a}$ to obtain $\\mathbf{v}$",
          "workingLatex": "\\mathbf{v} = \\int \\mathbf{a}\\,\\mathrm{d}t + \\mathbf{c}_1",
          "explanation": "First integration with $\\mathbf{v}(0) = \\mathbf{0}$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Velocity components",
          "workingLatex": "v_x = 4t,\\quad v_y = t^2",
          "explanation": "Integrate each component and apply initial condition.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Integrate $\\mathbf{v}$ to obtain $\\mathbf{r}$",
          "workingLatex": "\\mathbf{r} = \\int \\mathbf{v}\\,\\mathrm{d}t + \\mathbf{c}_2",
          "explanation": "Second integration with $\\mathbf{r}(0) = \\mathbf{0}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute $t = 3$ into $\\mathbf{v}$",
          "workingLatex": "\\mathbf{v} = 12\\mathbf{i} + 9\\mathbf{j}",
          "explanation": "Velocity at $t = 3$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute $t = 3$ into $\\mathbf{r}$",
          "workingLatex": "\\mathbf{r} = 18\\mathbf{i} + 9\\mathbf{j}",
          "explanation": "Position at $t = 3$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Calculate speed",
          "workingLatex": "|\\mathbf{v}| = 15\\,\\text{m s}^{-1}",
          "explanation": "Speed $= 15\\,\\text{m s}^{-1}$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Calculate distance from origin",
          "workingLatex": "|\\mathbf{r}| = 20.12\\,\\text{m}",
          "explanation": "$|\\mathbf{r}| = 20.12\\,\\text{m}$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Verify by double differentiation",
          "workingLatex": "\\dfrac{\\mathrm{d}^2\\mathbf{r}}{\\mathrm{d}t^2} = \\mathbf{a}",
          "explanation": "Confirms the acceleration.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Component-wise check",
          "workingLatex": "\\text{Each component satisfies } d^2x/dt^2 = a_x",
          "explanation": "Independent verification.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Physical interpretation",
          "workingLatex": "\\text{At } t = 3\\text{, particle is at } (18, 9)",
          "explanation": "Position in the plane.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Direction of motion",
          "workingLatex": "\\mathbf{v} = 12\\mathbf{i} + 9\\mathbf{j}",
          "explanation": "Velocity direction at this instant.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Magnitude required",
          "workingLatex": "|\\mathbf{r}| = 20.12",
          "explanation": "The question asks for a scalar magnitude.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Integration technique",
          "workingLatex": "\\text{Power rule on each component}",
          "explanation": "Standard polynomial integration.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Common error",
          "workingLatex": "\\text{Forgetting vector constants of integration}",
          "explanation": "Always apply initial conditions.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "Vector SUVAT does not apply",
          "workingLatex": "\\text{Acceleration is not constant}",
          "explanation": "Must use calculus, not SUVAT formulae.",
          "diagram": null
        },
        {
          "stepNumber": 16,
          "description": "Final answer",
          "workingLatex": "|\\mathbf{r}| = 20.12\\,\\text{m}",
          "explanation": "$|\\mathbf{r}| = 20.12\\,\\text{m}$",
          "diagram": null
        }
      ],
      "finalAnswer": "$|\\mathbf{r}| = 20.12\\,\\text{m}$"
    }
  },
  {
    "id": "al.y2.mech.further-kinematics.q069",
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Further kinematics",
    "subtopicId": "al.y2.mech.further-kinematics",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "numeric",
    "tags": [
      "vector-calculus",
      "speed",
      "variable-acceleration"
    ],
    "questionText": "A particle has $\\mathbf{a} = 3t\\mathbf{i} + 6\\mathbf{j}$ m s$^{-2}$ with $\\mathbf{v} = \\mathbf{0}$ at $t = 0$. Find the speed when $t = 2\\,\\text{s}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Integrate $\\mathbf{a}$ to obtain $\\mathbf{v}$",
          "workingLatex": "\\mathbf{v} = \\int \\mathbf{a}\\,\\mathrm{d}t + \\mathbf{c}_1",
          "explanation": "First integration with $\\mathbf{v}(0) = \\mathbf{0}$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Velocity components",
          "workingLatex": "v_x = 1.5t^2,\\quad v_y = 6t",
          "explanation": "Integrate each component and apply initial condition.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Integrate $\\mathbf{v}$ to obtain $\\mathbf{r}$",
          "workingLatex": "\\mathbf{r} = \\int \\mathbf{v}\\,\\mathrm{d}t + \\mathbf{c}_2",
          "explanation": "Second integration with $\\mathbf{r}(0) = \\mathbf{0}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute $t = 2$ into $\\mathbf{v}$",
          "workingLatex": "\\mathbf{v} = 6\\mathbf{i} + 12\\mathbf{j}",
          "explanation": "Velocity at $t = 2$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute $t = 2$ into $\\mathbf{r}$",
          "workingLatex": "\\mathbf{r} = 4\\mathbf{i} + 12\\mathbf{j}",
          "explanation": "Position at $t = 2$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Calculate speed",
          "workingLatex": "|\\mathbf{v}| = 13.42\\,\\text{m s}^{-1}",
          "explanation": "Speed $= 13.42\\,\\text{m s}^{-1}$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Calculate distance from origin",
          "workingLatex": "|\\mathbf{r}| = 12.65\\,\\text{m}",
          "explanation": "$|\\mathbf{r}| = 12.65\\,\\text{m}$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Verify by double differentiation",
          "workingLatex": "\\dfrac{\\mathrm{d}^2\\mathbf{r}}{\\mathrm{d}t^2} = \\mathbf{a}",
          "explanation": "Confirms the acceleration.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Component-wise check",
          "workingLatex": "\\text{Each component satisfies } d^2x/dt^2 = a_x",
          "explanation": "Independent verification.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Physical interpretation",
          "workingLatex": "\\text{At } t = 2\\text{, particle is at } (4, 12)",
          "explanation": "Position in the plane.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Direction of motion",
          "workingLatex": "\\mathbf{v} = 6\\mathbf{i} + 12\\mathbf{j}",
          "explanation": "Velocity direction at this instant.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Magnitude required",
          "workingLatex": "|\\mathbf{v}| = 13.42",
          "explanation": "The question asks for a scalar magnitude.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Integration technique",
          "workingLatex": "\\text{Power rule on each component}",
          "explanation": "Standard polynomial integration.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Common error",
          "workingLatex": "\\text{Forgetting vector constants of integration}",
          "explanation": "Always apply initial conditions.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "Vector SUVAT does not apply",
          "workingLatex": "\\text{Acceleration is not constant}",
          "explanation": "Must use calculus, not SUVAT formulae.",
          "diagram": null
        },
        {
          "stepNumber": 16,
          "description": "Final answer",
          "workingLatex": "Speed = 13.42\\,\\text{m s}^{-1}",
          "explanation": "Speed $= 13.42\\,\\text{m s}^{-1}$",
          "diagram": null
        }
      ],
      "finalAnswer": "Speed $= 13.42\\,\\text{m s}^{-1}$"
    }
  },
  {
    "id": "al.y2.mech.further-kinematics.q070",
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Further kinematics",
    "subtopicId": "al.y2.mech.further-kinematics",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "numeric",
    "tags": [
      "vector-calculus",
      "distance",
      "variable-acceleration"
    ],
    "questionText": "A particle has $\\mathbf{a} = 5\\mathbf{i} + 4t\\mathbf{j}$ m s$^{-2}$ with $\\mathbf{v} = \\mathbf{0}$ and $\\mathbf{r} = \\mathbf{0}$ at $t = 0$. Find the distance from the origin when $t = 4\\,\\text{s}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Integrate $\\mathbf{a}$ to obtain $\\mathbf{v}$",
          "workingLatex": "\\mathbf{v} = \\int \\mathbf{a}\\,\\mathrm{d}t + \\mathbf{c}_1",
          "explanation": "First integration with $\\mathbf{v}(0) = \\mathbf{0}$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Velocity components",
          "workingLatex": "v_x = 5t,\\quad v_y = 2t^2",
          "explanation": "Integrate each component and apply initial condition.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Integrate $\\mathbf{v}$ to obtain $\\mathbf{r}$",
          "workingLatex": "\\mathbf{r} = \\int \\mathbf{v}\\,\\mathrm{d}t + \\mathbf{c}_2",
          "explanation": "Second integration with $\\mathbf{r}(0) = \\mathbf{0}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute $t = 4$ into $\\mathbf{v}$",
          "workingLatex": "\\mathbf{v} = 20\\mathbf{i} + 32\\mathbf{j}",
          "explanation": "Velocity at $t = 4$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute $t = 4$ into $\\mathbf{r}$",
          "workingLatex": "\\mathbf{r} = 40\\mathbf{i} + 42.67\\mathbf{j}",
          "explanation": "Position at $t = 4$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Calculate speed",
          "workingLatex": "|\\mathbf{v}| = 37.74\\,\\text{m s}^{-1}",
          "explanation": "Speed $= 37.74\\,\\text{m s}^{-1}$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Calculate distance from origin",
          "workingLatex": "|\\mathbf{r}| = 58.48\\,\\text{m}",
          "explanation": "$|\\mathbf{r}| = 58.48\\,\\text{m}$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Verify by double differentiation",
          "workingLatex": "\\dfrac{\\mathrm{d}^2\\mathbf{r}}{\\mathrm{d}t^2} = \\mathbf{a}",
          "explanation": "Confirms the acceleration.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Component-wise check",
          "workingLatex": "\\text{Each component satisfies } d^2x/dt^2 = a_x",
          "explanation": "Independent verification.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Physical interpretation",
          "workingLatex": "\\text{At } t = 4\\text{, particle is at } (40, 42.67)",
          "explanation": "Position in the plane.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Direction of motion",
          "workingLatex": "\\mathbf{v} = 20\\mathbf{i} + 32\\mathbf{j}",
          "explanation": "Velocity direction at this instant.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Magnitude required",
          "workingLatex": "|\\mathbf{r}| = 58.48",
          "explanation": "The question asks for a scalar magnitude.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Integration technique",
          "workingLatex": "\\text{Power rule on each component}",
          "explanation": "Standard polynomial integration.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Common error",
          "workingLatex": "\\text{Forgetting vector constants of integration}",
          "explanation": "Always apply initial conditions.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "Vector SUVAT does not apply",
          "workingLatex": "\\text{Acceleration is not constant}",
          "explanation": "Must use calculus, not SUVAT formulae.",
          "diagram": null
        },
        {
          "stepNumber": 16,
          "description": "Final answer",
          "workingLatex": "|\\mathbf{r}| = 58.48\\,\\text{m}",
          "explanation": "$|\\mathbf{r}| = 58.48\\,\\text{m}$",
          "diagram": null
        }
      ],
      "finalAnswer": "$|\\mathbf{r}| = 58.48\\,\\text{m}$"
    }
  }
];
