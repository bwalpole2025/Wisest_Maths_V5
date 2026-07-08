import { Question } from "@/lib/types";

export const questions: Question[] = [
{
  "level": "A-Level Further Maths",
  "topic": "Further Maths Year 1: Pure (Core Pure 1)",
  "subtopic": "Vectors: lines and planes",
  "subtopicId": "fm.y1.pure.vectors-lines-planes",
  "questionDiagram": null,
  "id": "fm.y1.pure.vectors-lines-planes.q001",
  "tags": [
    "vector-line",
    "point-direction"
  ],
  "difficulty": "Easy",
  "marks": 3,
  "answerType": "vector",
  "questionText": "A line passes through the point with position vector $\\mathbf{a} = \\mathbf{i} + 2\\mathbf{j} + 3\\mathbf{k}$ and has direction vector $\\mathbf{d} = 2\\mathbf{i} + \\mathbf{j} - \\mathbf{k}$. Write a vector equation of the line.",
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Recall the vector form of a line",
        "workingLatex": "\\mathbf{r} = \\mathbf{a} + \\lambda\\mathbf{d}",
        "explanation": "A line through a fixed point $\\mathbf{a}$ in direction $\\mathbf{d}$ is reached by starting at $\\mathbf{a}$ and moving a scalar multiple $\\lambda$ along $\\mathbf{d}$.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Identify the given vectors",
        "workingLatex": "\\mathbf{a} = \\mathbf{i} + 2\\mathbf{j} + 3\\mathbf{k},\\quad \\mathbf{d} = 2\\mathbf{i} + \\mathbf{j} - \\mathbf{k}",
        "explanation": "The position vector of the known point and the direction vector are read directly from the question.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Substitute into the formula",
        "workingLatex": "\\mathbf{r} = (\\mathbf{i} + 2\\mathbf{j} + 3\\mathbf{k}) + \\lambda(2\\mathbf{i} + \\mathbf{j} - \\mathbf{k})",
        "explanation": "Replace $\\mathbf{a}$ and $\\mathbf{d}$ with their component forms.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Write the equation cleanly",
        "workingLatex": "\\mathbf{r} = \\mathbf{i} + 2\\mathbf{j} + 3\\mathbf{k} + \\lambda(2\\mathbf{i} + \\mathbf{j} - \\mathbf{k})",
        "explanation": "Keeping the direction vector in brackets makes it clear which vector is scaled by $\\lambda$.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "State the vector equation",
        "workingLatex": "\\mathbf{r} = \\mathbf{i} + 2\\mathbf{j} + 3\\mathbf{k} + \\lambda(2\\mathbf{i} + \\mathbf{j} - \\mathbf{k})",
        "explanation": "This is the standard vector equation: every point on the line has position vector of this form for some real $\\lambda$.",
        "diagram": null
      }
    ],
    "finalAnswer": "$\\mathbf{r} = \\mathbf{i} + 2\\mathbf{j} + 3\\mathbf{k} + \\lambda(2\\mathbf{i} + \\mathbf{j} - \\mathbf{k})$"
  }
},
{
  "level": "A-Level Further Maths",
  "topic": "Further Maths Year 1: Pure (Core Pure 1)",
  "subtopic": "Vectors: lines and planes",
  "subtopicId": "fm.y1.pure.vectors-lines-planes",
  "questionDiagram": null,
  "id": "fm.y1.pure.vectors-lines-planes.q002",
  "tags": [
    "vector-line",
    "point-direction"
  ],
  "difficulty": "Easy",
  "marks": 3,
  "answerType": "vector",
  "questionText": "A line passes through the point with position vector $\\mathbf{a} = \\mathbf{j} + 4\\mathbf{k}$ and has direction vector $\\mathbf{d} = 3\\mathbf{i} - \\mathbf{j} + 2\\mathbf{k}$. Write a vector equation of the line.",
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Recall the vector form of a line",
        "workingLatex": "\\mathbf{r} = \\mathbf{a} + \\lambda\\mathbf{d}",
        "explanation": "A line through a fixed point $\\mathbf{a}$ in direction $\\mathbf{d}$ is reached by starting at $\\mathbf{a}$ and moving a scalar multiple $\\lambda$ along $\\mathbf{d}$.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Identify the given vectors",
        "workingLatex": "\\mathbf{a} = \\mathbf{j} + 4\\mathbf{k},\\quad \\mathbf{d} = 3\\mathbf{i} - \\mathbf{j} + 2\\mathbf{k}",
        "explanation": "The position vector of the known point and the direction vector are read directly from the question.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Substitute into the formula",
        "workingLatex": "\\mathbf{r} = (\\mathbf{j} + 4\\mathbf{k}) + \\lambda(3\\mathbf{i} - \\mathbf{j} + 2\\mathbf{k})",
        "explanation": "Replace $\\mathbf{a}$ and $\\mathbf{d}$ with their component forms.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Write the equation cleanly",
        "workingLatex": "\\mathbf{r} = \\mathbf{j} + 4\\mathbf{k} + \\lambda(3\\mathbf{i} - \\mathbf{j} + 2\\mathbf{k})",
        "explanation": "Keeping the direction vector in brackets makes it clear which vector is scaled by $\\lambda$.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "State the vector equation",
        "workingLatex": "\\mathbf{r} = \\mathbf{j} + 4\\mathbf{k} + \\lambda(3\\mathbf{i} - \\mathbf{j} + 2\\mathbf{k})",
        "explanation": "This is the standard vector equation: every point on the line has position vector of this form for some real $\\lambda$.",
        "diagram": null
      }
    ],
    "finalAnswer": "$\\mathbf{r} = \\mathbf{j} + 4\\mathbf{k} + \\lambda(3\\mathbf{i} - \\mathbf{j} + 2\\mathbf{k})$"
  }
},
{
  "level": "A-Level Further Maths",
  "topic": "Further Maths Year 1: Pure (Core Pure 1)",
  "subtopic": "Vectors: lines and planes",
  "subtopicId": "fm.y1.pure.vectors-lines-planes",
  "questionDiagram": null,
  "id": "fm.y1.pure.vectors-lines-planes.q003",
  "tags": [
    "vector-line",
    "point-direction"
  ],
  "difficulty": "Easy",
  "marks": 3,
  "answerType": "vector",
  "questionText": "A line passes through the point with position vector $\\mathbf{a} = -\\mathbf{i} + 3\\mathbf{j}$ and has direction vector $\\mathbf{d} = \\mathbf{i} + 2\\mathbf{j} + 2\\mathbf{k}$. Write a vector equation of the line.",
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Recall the vector form of a line",
        "workingLatex": "\\mathbf{r} = \\mathbf{a} + \\lambda\\mathbf{d}",
        "explanation": "A line through a fixed point $\\mathbf{a}$ in direction $\\mathbf{d}$ is reached by starting at $\\mathbf{a}$ and moving a scalar multiple $\\lambda$ along $\\mathbf{d}$.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Identify the given vectors",
        "workingLatex": "\\mathbf{a} = -\\mathbf{i} + 3\\mathbf{j},\\quad \\mathbf{d} = \\mathbf{i} + 2\\mathbf{j} + 2\\mathbf{k}",
        "explanation": "The position vector of the known point and the direction vector are read directly from the question.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Substitute into the formula",
        "workingLatex": "\\mathbf{r} = (-\\mathbf{i} + 3\\mathbf{j}) + \\lambda(\\mathbf{i} + 2\\mathbf{j} + 2\\mathbf{k})",
        "explanation": "Replace $\\mathbf{a}$ and $\\mathbf{d}$ with their component forms.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Write the equation cleanly",
        "workingLatex": "\\mathbf{r} = -\\mathbf{i} + 3\\mathbf{j} + \\lambda(\\mathbf{i} + 2\\mathbf{j} + 2\\mathbf{k})",
        "explanation": "Keeping the direction vector in brackets makes it clear which vector is scaled by $\\lambda$.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "State the vector equation",
        "workingLatex": "\\mathbf{r} = -\\mathbf{i} + 3\\mathbf{j} + \\lambda(\\mathbf{i} + 2\\mathbf{j} + 2\\mathbf{k})",
        "explanation": "This is the standard vector equation: every point on the line has position vector of this form for some real $\\lambda$.",
        "diagram": null
      }
    ],
    "finalAnswer": "$\\mathbf{r} = -\\mathbf{i} + 3\\mathbf{j} + \\lambda(\\mathbf{i} + 2\\mathbf{j} + 2\\mathbf{k})$"
  }
},
{
  "level": "A-Level Further Maths",
  "topic": "Further Maths Year 1: Pure (Core Pure 1)",
  "subtopic": "Vectors: lines and planes",
  "subtopicId": "fm.y1.pure.vectors-lines-planes",
  "questionDiagram": null,
  "id": "fm.y1.pure.vectors-lines-planes.q004",
  "tags": [
    "vector-line",
    "point-direction"
  ],
  "difficulty": "Easy",
  "marks": 3,
  "answerType": "vector",
  "questionText": "A line passes through the point with position vector $\\mathbf{a} = 2\\mathbf{i} + 5\\mathbf{k}$ and has direction vector $\\mathbf{d} = -\\mathbf{i} + 4\\mathbf{j} + \\mathbf{k}$. Write a vector equation of the line.",
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Recall the vector form of a line",
        "workingLatex": "\\mathbf{r} = \\mathbf{a} + \\lambda\\mathbf{d}",
        "explanation": "A line through a fixed point $\\mathbf{a}$ in direction $\\mathbf{d}$ is reached by starting at $\\mathbf{a}$ and moving a scalar multiple $\\lambda$ along $\\mathbf{d}$.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Identify the given vectors",
        "workingLatex": "\\mathbf{a} = 2\\mathbf{i} + 5\\mathbf{k},\\quad \\mathbf{d} = -\\mathbf{i} + 4\\mathbf{j} + \\mathbf{k}",
        "explanation": "The position vector of the known point and the direction vector are read directly from the question.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Substitute into the formula",
        "workingLatex": "\\mathbf{r} = (2\\mathbf{i} + 5\\mathbf{k}) + \\lambda(-\\mathbf{i} + 4\\mathbf{j} + \\mathbf{k})",
        "explanation": "Replace $\\mathbf{a}$ and $\\mathbf{d}$ with their component forms.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Write the equation cleanly",
        "workingLatex": "\\mathbf{r} = 2\\mathbf{i} + 5\\mathbf{k} + \\lambda(-\\mathbf{i} + 4\\mathbf{j} + \\mathbf{k})",
        "explanation": "Keeping the direction vector in brackets makes it clear which vector is scaled by $\\lambda$.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "State the vector equation",
        "workingLatex": "\\mathbf{r} = 2\\mathbf{i} + 5\\mathbf{k} + \\lambda(-\\mathbf{i} + 4\\mathbf{j} + \\mathbf{k})",
        "explanation": "This is the standard vector equation: every point on the line has position vector of this form for some real $\\lambda$.",
        "diagram": null
      }
    ],
    "finalAnswer": "$\\mathbf{r} = 2\\mathbf{i} + 5\\mathbf{k} + \\lambda(-\\mathbf{i} + 4\\mathbf{j} + \\mathbf{k})$"
  }
},
{
  "level": "A-Level Further Maths",
  "topic": "Further Maths Year 1: Pure (Core Pure 1)",
  "subtopic": "Vectors: lines and planes",
  "subtopicId": "fm.y1.pure.vectors-lines-planes",
  "questionDiagram": null,
  "id": "fm.y1.pure.vectors-lines-planes.q005",
  "tags": [
    "vector-line",
    "point-direction"
  ],
  "difficulty": "Easy",
  "marks": 3,
  "answerType": "vector",
  "questionText": "A line passes through the point with position vector $\\mathbf{a} = 4\\mathbf{i} - 2\\mathbf{j} + \\mathbf{k}$ and has direction vector $\\mathbf{d} = 2\\mathbf{i} + 2\\mathbf{j} + 3\\mathbf{k}$. Write a vector equation of the line.",
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Recall the vector form of a line",
        "workingLatex": "\\mathbf{r} = \\mathbf{a} + \\lambda\\mathbf{d}",
        "explanation": "A line through a fixed point $\\mathbf{a}$ in direction $\\mathbf{d}$ is reached by starting at $\\mathbf{a}$ and moving a scalar multiple $\\lambda$ along $\\mathbf{d}$.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Identify the given vectors",
        "workingLatex": "\\mathbf{a} = 4\\mathbf{i} - 2\\mathbf{j} + \\mathbf{k},\\quad \\mathbf{d} = 2\\mathbf{i} + 2\\mathbf{j} + 3\\mathbf{k}",
        "explanation": "The position vector of the known point and the direction vector are read directly from the question.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Substitute into the formula",
        "workingLatex": "\\mathbf{r} = (4\\mathbf{i} - 2\\mathbf{j} + \\mathbf{k}) + \\lambda(2\\mathbf{i} + 2\\mathbf{j} + 3\\mathbf{k})",
        "explanation": "Replace $\\mathbf{a}$ and $\\mathbf{d}$ with their component forms.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Write the equation cleanly",
        "workingLatex": "\\mathbf{r} = 4\\mathbf{i} - 2\\mathbf{j} + \\mathbf{k} + \\lambda(2\\mathbf{i} + 2\\mathbf{j} + 3\\mathbf{k})",
        "explanation": "Keeping the direction vector in brackets makes it clear which vector is scaled by $\\lambda$.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "State the vector equation",
        "workingLatex": "\\mathbf{r} = 4\\mathbf{i} - 2\\mathbf{j} + \\mathbf{k} + \\lambda(2\\mathbf{i} + 2\\mathbf{j} + 3\\mathbf{k})",
        "explanation": "This is the standard vector equation: every point on the line has position vector of this form for some real $\\lambda$.",
        "diagram": null
      }
    ],
    "finalAnswer": "$\\mathbf{r} = 4\\mathbf{i} - 2\\mathbf{j} + \\mathbf{k} + \\lambda(2\\mathbf{i} + 2\\mathbf{j} + 3\\mathbf{k})$"
  }
},
{
  "level": "A-Level Further Maths",
  "topic": "Further Maths Year 1: Pure (Core Pure 1)",
  "subtopic": "Vectors: lines and planes",
  "subtopicId": "fm.y1.pure.vectors-lines-planes",
  "questionDiagram": null,
  "id": "fm.y1.pure.vectors-lines-planes.q006",
  "tags": [
    "vector-line",
    "point-direction"
  ],
  "difficulty": "Easy",
  "marks": 3,
  "answerType": "vector",
  "questionText": "A line passes through the point with position vector $\\mathbf{a} = \\mathbf{i} + \\mathbf{j} + \\mathbf{k}$ and has direction vector $\\mathbf{d} = \\mathbf{i} - \\mathbf{j}$. Write a vector equation of the line.",
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Recall the vector form of a line",
        "workingLatex": "\\mathbf{r} = \\mathbf{a} + \\lambda\\mathbf{d}",
        "explanation": "A line through a fixed point $\\mathbf{a}$ in direction $\\mathbf{d}$ is reached by starting at $\\mathbf{a}$ and moving a scalar multiple $\\lambda$ along $\\mathbf{d}$.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Identify the given vectors",
        "workingLatex": "\\mathbf{a} = \\mathbf{i} + \\mathbf{j} + \\mathbf{k},\\quad \\mathbf{d} = \\mathbf{i} - \\mathbf{j}",
        "explanation": "The position vector of the known point and the direction vector are read directly from the question.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Substitute into the formula",
        "workingLatex": "\\mathbf{r} = (\\mathbf{i} + \\mathbf{j} + \\mathbf{k}) + \\lambda(\\mathbf{i} - \\mathbf{j})",
        "explanation": "Replace $\\mathbf{a}$ and $\\mathbf{d}$ with their component forms.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Write the equation cleanly",
        "workingLatex": "\\mathbf{r} = \\mathbf{i} + \\mathbf{j} + \\mathbf{k} + \\lambda(\\mathbf{i} - \\mathbf{j})",
        "explanation": "Keeping the direction vector in brackets makes it clear which vector is scaled by $\\lambda$.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "State the vector equation",
        "workingLatex": "\\mathbf{r} = \\mathbf{i} + \\mathbf{j} + \\mathbf{k} + \\lambda(\\mathbf{i} - \\mathbf{j})",
        "explanation": "This is the standard vector equation: every point on the line has position vector of this form for some real $\\lambda$.",
        "diagram": null
      }
    ],
    "finalAnswer": "$\\mathbf{r} = \\mathbf{i} + \\mathbf{j} + \\mathbf{k} + \\lambda(\\mathbf{i} - \\mathbf{j})$"
  }
},
{
  "level": "A-Level Further Maths",
  "topic": "Further Maths Year 1: Pure (Core Pure 1)",
  "subtopic": "Vectors: lines and planes",
  "subtopicId": "fm.y1.pure.vectors-lines-planes",
  "questionDiagram": null,
  "id": "fm.y1.pure.vectors-lines-planes.q007",
  "tags": [
    "vector-line",
    "two-points"
  ],
  "difficulty": "Easy",
  "marks": 4,
  "answerType": "vector",
  "questionText": "Points $A$ and $B$ have position vectors $\\mathbf{a} = \\mathbf{i} + 2\\mathbf{k}$ and $\\mathbf{b} = 3\\mathbf{i} + 4\\mathbf{j} + 6\\mathbf{k}$. Find a vector equation of the line through $A$ and $B$.",
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Recall the vector form of a line",
        "workingLatex": "\\mathbf{r} = \\mathbf{a} + \\lambda\\mathbf{d}",
        "explanation": "Any line through $A$ can be written using a point on the line and a direction vector along it.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Find the direction vector",
        "workingLatex": "\\overrightarrow{AB} = \\mathbf{b} - \\mathbf{a} = 2\\mathbf{i} + 4\\mathbf{j} + 4\\mathbf{k}",
        "explanation": "The displacement from $A$ to $B$ points along the line, so it serves as the direction vector.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Choose the starting point",
        "workingLatex": "\\mathbf{a} = \\mathbf{i} + 2\\mathbf{k}",
        "explanation": "We may use either $A$ or $B$ as the fixed point; $A$ is the natural choice.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Substitute into the formula",
        "workingLatex": "\\mathbf{r} = \\mathbf{i} + 2\\mathbf{k} + \\lambda(2\\mathbf{i} + 4\\mathbf{j} + 4\\mathbf{k})",
        "explanation": "Insert the position vector of $A$ and the direction $\\overrightarrow{AB}$.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Write the vector equation",
        "workingLatex": "\\mathbf{r} = \\mathbf{i} + 2\\mathbf{k} + \\lambda(2\\mathbf{i} + 4\\mathbf{j} + 4\\mathbf{k})",
        "explanation": "Every point on the line through $A$ and $B$ has a position vector of this form.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Note an equivalent form",
        "workingLatex": "\\mathbf{r} = 3\\mathbf{i} + 4\\mathbf{j} + 6\\mathbf{k} + \\mu(2\\mathbf{i} + 4\\mathbf{j} + 4\\mathbf{k})",
        "explanation": "Using $B$ instead of $A$ gives an equivalent line, because both points lie on the same straight path.",
        "diagram": null
      }
    ],
    "finalAnswer": "$\\mathbf{r} = \\mathbf{i} + 2\\mathbf{k} + \\lambda(2\\mathbf{i} + 4\\mathbf{j} + 4\\mathbf{k})$"
  }
},
{
  "level": "A-Level Further Maths",
  "topic": "Further Maths Year 1: Pure (Core Pure 1)",
  "subtopic": "Vectors: lines and planes",
  "subtopicId": "fm.y1.pure.vectors-lines-planes",
  "questionDiagram": null,
  "id": "fm.y1.pure.vectors-lines-planes.q008",
  "tags": [
    "vector-line",
    "two-points"
  ],
  "difficulty": "Easy",
  "marks": 4,
  "answerType": "vector",
  "questionText": "Points $A$ and $B$ have position vectors $\\mathbf{a} = 2\\mathbf{i} + \\mathbf{j} - \\mathbf{k}$ and $\\mathbf{b} = 5\\mathbf{i} + 3\\mathbf{j} + 2\\mathbf{k}$. Find a vector equation of the line through $A$ and $B$.",
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Recall the vector form of a line",
        "workingLatex": "\\mathbf{r} = \\mathbf{a} + \\lambda\\mathbf{d}",
        "explanation": "Any line through $A$ can be written using a point on the line and a direction vector along it.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Find the direction vector",
        "workingLatex": "\\overrightarrow{AB} = \\mathbf{b} - \\mathbf{a} = 3\\mathbf{i} + 2\\mathbf{j} + 3\\mathbf{k}",
        "explanation": "The displacement from $A$ to $B$ points along the line, so it serves as the direction vector.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Choose the starting point",
        "workingLatex": "\\mathbf{a} = 2\\mathbf{i} + \\mathbf{j} - \\mathbf{k}",
        "explanation": "We may use either $A$ or $B$ as the fixed point; $A$ is the natural choice.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Substitute into the formula",
        "workingLatex": "\\mathbf{r} = 2\\mathbf{i} + \\mathbf{j} - \\mathbf{k} + \\lambda(3\\mathbf{i} + 2\\mathbf{j} + 3\\mathbf{k})",
        "explanation": "Insert the position vector of $A$ and the direction $\\overrightarrow{AB}$.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Write the vector equation",
        "workingLatex": "\\mathbf{r} = 2\\mathbf{i} + \\mathbf{j} - \\mathbf{k} + \\lambda(3\\mathbf{i} + 2\\mathbf{j} + 3\\mathbf{k})",
        "explanation": "Every point on the line through $A$ and $B$ has a position vector of this form.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Note an equivalent form",
        "workingLatex": "\\mathbf{r} = 5\\mathbf{i} + 3\\mathbf{j} + 2\\mathbf{k} + \\mu(3\\mathbf{i} + 2\\mathbf{j} + 3\\mathbf{k})",
        "explanation": "Using $B$ instead of $A$ gives an equivalent line, because both points lie on the same straight path.",
        "diagram": null
      }
    ],
    "finalAnswer": "$\\mathbf{r} = 2\\mathbf{i} + \\mathbf{j} - \\mathbf{k} + \\lambda(3\\mathbf{i} + 2\\mathbf{j} + 3\\mathbf{k})$"
  }
},
{
  "level": "A-Level Further Maths",
  "topic": "Further Maths Year 1: Pure (Core Pure 1)",
  "subtopic": "Vectors: lines and planes",
  "subtopicId": "fm.y1.pure.vectors-lines-planes",
  "questionDiagram": null,
  "id": "fm.y1.pure.vectors-lines-planes.q009",
  "tags": [
    "vector-line",
    "two-points"
  ],
  "difficulty": "Easy",
  "marks": 4,
  "answerType": "vector",
  "questionText": "Points $A$ and $B$ have position vectors $\\mathbf{a} = 2\\mathbf{j} + \\mathbf{k}$ and $\\mathbf{b} = 4\\mathbf{i} + 2\\mathbf{j} + 5\\mathbf{k}$. Find a vector equation of the line through $A$ and $B$.",
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Recall the vector form of a line",
        "workingLatex": "\\mathbf{r} = \\mathbf{a} + \\lambda\\mathbf{d}",
        "explanation": "Any line through $A$ can be written using a point on the line and a direction vector along it.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Find the direction vector",
        "workingLatex": "\\overrightarrow{AB} = \\mathbf{b} - \\mathbf{a} = 4\\mathbf{i} + 4\\mathbf{k}",
        "explanation": "The displacement from $A$ to $B$ points along the line, so it serves as the direction vector.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Choose the starting point",
        "workingLatex": "\\mathbf{a} = 2\\mathbf{j} + \\mathbf{k}",
        "explanation": "We may use either $A$ or $B$ as the fixed point; $A$ is the natural choice.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Substitute into the formula",
        "workingLatex": "\\mathbf{r} = 2\\mathbf{j} + \\mathbf{k} + \\lambda(4\\mathbf{i} + 4\\mathbf{k})",
        "explanation": "Insert the position vector of $A$ and the direction $\\overrightarrow{AB}$.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Write the vector equation",
        "workingLatex": "\\mathbf{r} = 2\\mathbf{j} + \\mathbf{k} + \\lambda(4\\mathbf{i} + 4\\mathbf{k})",
        "explanation": "Every point on the line through $A$ and $B$ has a position vector of this form.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Note an equivalent form",
        "workingLatex": "\\mathbf{r} = 4\\mathbf{i} + 2\\mathbf{j} + 5\\mathbf{k} + \\mu(4\\mathbf{i} + 4\\mathbf{k})",
        "explanation": "Using $B$ instead of $A$ gives an equivalent line, because both points lie on the same straight path.",
        "diagram": null
      }
    ],
    "finalAnswer": "$\\mathbf{r} = 2\\mathbf{j} + \\mathbf{k} + \\lambda(4\\mathbf{i} + 4\\mathbf{k})$"
  }
},
{
  "level": "A-Level Further Maths",
  "topic": "Further Maths Year 1: Pure (Core Pure 1)",
  "subtopic": "Vectors: lines and planes",
  "subtopicId": "fm.y1.pure.vectors-lines-planes",
  "questionDiagram": null,
  "id": "fm.y1.pure.vectors-lines-planes.q010",
  "tags": [
    "vector-line",
    "two-points"
  ],
  "difficulty": "Easy",
  "marks": 4,
  "answerType": "vector",
  "questionText": "Points $A$ and $B$ have position vectors $\\mathbf{a} = -\\mathbf{i} + \\mathbf{j} + 3\\mathbf{k}$ and $\\mathbf{b} = 2\\mathbf{i} + 4\\mathbf{j}$. Find a vector equation of the line through $A$ and $B$.",
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Recall the vector form of a line",
        "workingLatex": "\\mathbf{r} = \\mathbf{a} + \\lambda\\mathbf{d}",
        "explanation": "Any line through $A$ can be written using a point on the line and a direction vector along it.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Find the direction vector",
        "workingLatex": "\\overrightarrow{AB} = \\mathbf{b} - \\mathbf{a} = 3\\mathbf{i} + 3\\mathbf{j} - 3\\mathbf{k}",
        "explanation": "The displacement from $A$ to $B$ points along the line, so it serves as the direction vector.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Choose the starting point",
        "workingLatex": "\\mathbf{a} = -\\mathbf{i} + \\mathbf{j} + 3\\mathbf{k}",
        "explanation": "We may use either $A$ or $B$ as the fixed point; $A$ is the natural choice.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Substitute into the formula",
        "workingLatex": "\\mathbf{r} = -\\mathbf{i} + \\mathbf{j} + 3\\mathbf{k} + \\lambda(3\\mathbf{i} + 3\\mathbf{j} - 3\\mathbf{k})",
        "explanation": "Insert the position vector of $A$ and the direction $\\overrightarrow{AB}$.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Write the vector equation",
        "workingLatex": "\\mathbf{r} = -\\mathbf{i} + \\mathbf{j} + 3\\mathbf{k} + \\lambda(3\\mathbf{i} + 3\\mathbf{j} - 3\\mathbf{k})",
        "explanation": "Every point on the line through $A$ and $B$ has a position vector of this form.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Note an equivalent form",
        "workingLatex": "\\mathbf{r} = 2\\mathbf{i} + 4\\mathbf{j} + \\mu(3\\mathbf{i} + 3\\mathbf{j} - 3\\mathbf{k})",
        "explanation": "Using $B$ instead of $A$ gives an equivalent line, because both points lie on the same straight path.",
        "diagram": null
      }
    ],
    "finalAnswer": "$\\mathbf{r} = -\\mathbf{i} + \\mathbf{j} + 3\\mathbf{k} + \\lambda(3\\mathbf{i} + 3\\mathbf{j} - 3\\mathbf{k})$"
  }
},
{
  "level": "A-Level Further Maths",
  "topic": "Further Maths Year 1: Pure (Core Pure 1)",
  "subtopic": "Vectors: lines and planes",
  "subtopicId": "fm.y1.pure.vectors-lines-planes",
  "questionDiagram": null,
  "id": "fm.y1.pure.vectors-lines-planes.q011",
  "tags": [
    "vector-line",
    "two-points"
  ],
  "difficulty": "Easy",
  "marks": 4,
  "answerType": "vector",
  "questionText": "Points $A$ and $B$ have position vectors $\\mathbf{a} = \\mathbf{i} + 3\\mathbf{j} + 2\\mathbf{k}$ and $\\mathbf{b} = 4\\mathbf{i} + \\mathbf{j} + 8\\mathbf{k}$. Find a vector equation of the line through $A$ and $B$.",
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Recall the vector form of a line",
        "workingLatex": "\\mathbf{r} = \\mathbf{a} + \\lambda\\mathbf{d}",
        "explanation": "Any line through $A$ can be written using a point on the line and a direction vector along it.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Find the direction vector",
        "workingLatex": "\\overrightarrow{AB} = \\mathbf{b} - \\mathbf{a} = 3\\mathbf{i} - 2\\mathbf{j} + 6\\mathbf{k}",
        "explanation": "The displacement from $A$ to $B$ points along the line, so it serves as the direction vector.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Choose the starting point",
        "workingLatex": "\\mathbf{a} = \\mathbf{i} + 3\\mathbf{j} + 2\\mathbf{k}",
        "explanation": "We may use either $A$ or $B$ as the fixed point; $A$ is the natural choice.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Substitute into the formula",
        "workingLatex": "\\mathbf{r} = \\mathbf{i} + 3\\mathbf{j} + 2\\mathbf{k} + \\lambda(3\\mathbf{i} - 2\\mathbf{j} + 6\\mathbf{k})",
        "explanation": "Insert the position vector of $A$ and the direction $\\overrightarrow{AB}$.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Write the vector equation",
        "workingLatex": "\\mathbf{r} = \\mathbf{i} + 3\\mathbf{j} + 2\\mathbf{k} + \\lambda(3\\mathbf{i} - 2\\mathbf{j} + 6\\mathbf{k})",
        "explanation": "Every point on the line through $A$ and $B$ has a position vector of this form.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Note an equivalent form",
        "workingLatex": "\\mathbf{r} = 4\\mathbf{i} + \\mathbf{j} + 8\\mathbf{k} + \\mu(3\\mathbf{i} - 2\\mathbf{j} + 6\\mathbf{k})",
        "explanation": "Using $B$ instead of $A$ gives an equivalent line, because both points lie on the same straight path.",
        "diagram": null
      }
    ],
    "finalAnswer": "$\\mathbf{r} = \\mathbf{i} + 3\\mathbf{j} + 2\\mathbf{k} + \\lambda(3\\mathbf{i} - 2\\mathbf{j} + 6\\mathbf{k})$"
  }
},
{
  "level": "A-Level Further Maths",
  "topic": "Further Maths Year 1: Pure (Core Pure 1)",
  "subtopic": "Vectors: lines and planes",
  "subtopicId": "fm.y1.pure.vectors-lines-planes",
  "questionDiagram": null,
  "id": "fm.y1.pure.vectors-lines-planes.q012",
  "tags": [
    "vector-line",
    "two-points"
  ],
  "difficulty": "Easy",
  "marks": 4,
  "answerType": "vector",
  "questionText": "Points $A$ and $B$ have position vectors $\\mathbf{a} = 2\\mathbf{i}$ and $\\mathbf{b} = 2\\mathbf{i} + 3\\mathbf{j} + 4\\mathbf{k}$. Find a vector equation of the line through $A$ and $B$.",
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Recall the vector form of a line",
        "workingLatex": "\\mathbf{r} = \\mathbf{a} + \\lambda\\mathbf{d}",
        "explanation": "Any line through $A$ can be written using a point on the line and a direction vector along it.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Find the direction vector",
        "workingLatex": "\\overrightarrow{AB} = \\mathbf{b} - \\mathbf{a} = 3\\mathbf{j} + 4\\mathbf{k}",
        "explanation": "The displacement from $A$ to $B$ points along the line, so it serves as the direction vector.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Choose the starting point",
        "workingLatex": "\\mathbf{a} = 2\\mathbf{i}",
        "explanation": "We may use either $A$ or $B$ as the fixed point; $A$ is the natural choice.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Substitute into the formula",
        "workingLatex": "\\mathbf{r} = 2\\mathbf{i} + \\lambda(3\\mathbf{j} + 4\\mathbf{k})",
        "explanation": "Insert the position vector of $A$ and the direction $\\overrightarrow{AB}$.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Write the vector equation",
        "workingLatex": "\\mathbf{r} = 2\\mathbf{i} + \\lambda(3\\mathbf{j} + 4\\mathbf{k})",
        "explanation": "Every point on the line through $A$ and $B$ has a position vector of this form.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Note an equivalent form",
        "workingLatex": "\\mathbf{r} = 2\\mathbf{i} + 3\\mathbf{j} + 4\\mathbf{k} + \\mu(3\\mathbf{j} + 4\\mathbf{k})",
        "explanation": "Using $B$ instead of $A$ gives an equivalent line, because both points lie on the same straight path.",
        "diagram": null
      }
    ],
    "finalAnswer": "$\\mathbf{r} = 2\\mathbf{i} + \\lambda(3\\mathbf{j} + 4\\mathbf{k})$"
  }
},
{
  "level": "A-Level Further Maths",
  "topic": "Further Maths Year 1: Pure (Core Pure 1)",
  "subtopic": "Vectors: lines and planes",
  "subtopicId": "fm.y1.pure.vectors-lines-planes",
  "questionDiagram": null,
  "id": "fm.y1.pure.vectors-lines-planes.q013",
  "tags": [
    "scalar-product-plane",
    "normal-vector"
  ],
  "difficulty": "Easy",
  "marks": 3,
  "answerType": "written",
  "questionText": "A plane passes through the point with position vector $\\mathbf{a} = \\mathbf{i} + 2\\mathbf{j} + 3\\mathbf{k}$ and has normal vector $\\mathbf{n} = \\mathbf{i} + \\mathbf{j} + \\mathbf{k}$. Write the equation of the plane in scalar-product form $\\mathbf{r}\\cdot\\mathbf{n} = d$.",
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Recall the scalar-product form",
        "workingLatex": "\\mathbf{r}\\cdot\\mathbf{n} = d",
        "explanation": "A plane with normal $\\mathbf{n}$ consists of all points whose position vector $\\mathbf{r}$ has a fixed scalar product with $\\mathbf{n}$.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Identify the normal vector",
        "workingLatex": "\\mathbf{n} = \\mathbf{i} + \\mathbf{j} + \\mathbf{k}",
        "explanation": "The normal is perpendicular to every vector lying in the plane.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Use a point on the plane to find $d$",
        "workingLatex": "d = \\mathbf{a}\\cdot\\mathbf{n}",
        "explanation": "Substituting the known point $\\mathbf{a}$ into $\\mathbf{r}\\cdot\\mathbf{n}=d$ determines the constant $d$.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Compute the scalar product",
        "workingLatex": "d = (1)(1) + (2)(1) + (3)(1) = 6",
        "explanation": "Multiply corresponding components and add.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Write the plane equation",
        "workingLatex": "\\mathbf{r}\\cdot(\\mathbf{i} + \\mathbf{j} + \\mathbf{k}) = 6",
        "explanation": "This is the scalar-product equation of the plane.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "State the answer",
        "workingLatex": "\\mathbf{r}\\cdot\\mathbf{n} = 6",
        "explanation": "Every point on the plane satisfies this equation.",
        "diagram": null
      }
    ],
    "finalAnswer": "$\\mathbf{r}\\cdot(\\mathbf{i} + \\mathbf{j} + \\mathbf{k}) = 6$"
  }
},
{
  "level": "A-Level Further Maths",
  "topic": "Further Maths Year 1: Pure (Core Pure 1)",
  "subtopic": "Vectors: lines and planes",
  "subtopicId": "fm.y1.pure.vectors-lines-planes",
  "questionDiagram": null,
  "id": "fm.y1.pure.vectors-lines-planes.q014",
  "tags": [
    "scalar-product-plane",
    "normal-vector"
  ],
  "difficulty": "Easy",
  "marks": 3,
  "answerType": "written",
  "questionText": "A plane passes through the point with position vector $\\mathbf{a} = 2\\mathbf{i} + \\mathbf{k}$ and has normal vector $\\mathbf{n} = 2\\mathbf{i} - \\mathbf{j} + 3\\mathbf{k}$. Write the equation of the plane in scalar-product form $\\mathbf{r}\\cdot\\mathbf{n} = d$.",
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Recall the scalar-product form",
        "workingLatex": "\\mathbf{r}\\cdot\\mathbf{n} = d",
        "explanation": "A plane with normal $\\mathbf{n}$ consists of all points whose position vector $\\mathbf{r}$ has a fixed scalar product with $\\mathbf{n}$.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Identify the normal vector",
        "workingLatex": "\\mathbf{n} = 2\\mathbf{i} - \\mathbf{j} + 3\\mathbf{k}",
        "explanation": "The normal is perpendicular to every vector lying in the plane.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Use a point on the plane to find $d$",
        "workingLatex": "d = \\mathbf{a}\\cdot\\mathbf{n}",
        "explanation": "Substituting the known point $\\mathbf{a}$ into $\\mathbf{r}\\cdot\\mathbf{n}=d$ determines the constant $d$.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Compute the scalar product",
        "workingLatex": "d = (2)(2) + (0)(-1) + (1)(3) = 7",
        "explanation": "Multiply corresponding components and add.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Write the plane equation",
        "workingLatex": "\\mathbf{r}\\cdot(2\\mathbf{i} - \\mathbf{j} + 3\\mathbf{k}) = 7",
        "explanation": "This is the scalar-product equation of the plane.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "State the answer",
        "workingLatex": "\\mathbf{r}\\cdot\\mathbf{n} = 7",
        "explanation": "Every point on the plane satisfies this equation.",
        "diagram": null
      }
    ],
    "finalAnswer": "$\\mathbf{r}\\cdot(2\\mathbf{i} - \\mathbf{j} + 3\\mathbf{k}) = 7$"
  }
},
{
  "level": "A-Level Further Maths",
  "topic": "Further Maths Year 1: Pure (Core Pure 1)",
  "subtopic": "Vectors: lines and planes",
  "subtopicId": "fm.y1.pure.vectors-lines-planes",
  "questionDiagram": null,
  "id": "fm.y1.pure.vectors-lines-planes.q015",
  "tags": [
    "scalar-product-plane",
    "normal-vector"
  ],
  "difficulty": "Easy",
  "marks": 3,
  "answerType": "written",
  "questionText": "A plane passes through the point with position vector $\\mathbf{a} = 3\\mathbf{j} - \\mathbf{k}$ and has normal vector $\\mathbf{n} = \\mathbf{i} + 2\\mathbf{k}$. Write the equation of the plane in scalar-product form $\\mathbf{r}\\cdot\\mathbf{n} = d$.",
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Recall the scalar-product form",
        "workingLatex": "\\mathbf{r}\\cdot\\mathbf{n} = d",
        "explanation": "A plane with normal $\\mathbf{n}$ consists of all points whose position vector $\\mathbf{r}$ has a fixed scalar product with $\\mathbf{n}$.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Identify the normal vector",
        "workingLatex": "\\mathbf{n} = \\mathbf{i} + 2\\mathbf{k}",
        "explanation": "The normal is perpendicular to every vector lying in the plane.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Use a point on the plane to find $d$",
        "workingLatex": "d = \\mathbf{a}\\cdot\\mathbf{n}",
        "explanation": "Substituting the known point $\\mathbf{a}$ into $\\mathbf{r}\\cdot\\mathbf{n}=d$ determines the constant $d$.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Compute the scalar product",
        "workingLatex": "d = (0)(1) + (3)(0) + (-1)(2) = -2",
        "explanation": "Multiply corresponding components and add.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Write the plane equation",
        "workingLatex": "\\mathbf{r}\\cdot(\\mathbf{i} + 2\\mathbf{k}) = -2",
        "explanation": "This is the scalar-product equation of the plane.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "State the answer",
        "workingLatex": "\\mathbf{r}\\cdot\\mathbf{n} = -2",
        "explanation": "Every point on the plane satisfies this equation.",
        "diagram": null
      }
    ],
    "finalAnswer": "$\\mathbf{r}\\cdot(\\mathbf{i} + 2\\mathbf{k}) = -2$"
  }
},
{
  "level": "A-Level Further Maths",
  "topic": "Further Maths Year 1: Pure (Core Pure 1)",
  "subtopic": "Vectors: lines and planes",
  "subtopicId": "fm.y1.pure.vectors-lines-planes",
  "questionDiagram": null,
  "id": "fm.y1.pure.vectors-lines-planes.q016",
  "tags": [
    "scalar-product-plane",
    "normal-vector"
  ],
  "difficulty": "Easy",
  "marks": 3,
  "answerType": "written",
  "questionText": "A plane passes through the point with position vector $\\mathbf{a} = -\\mathbf{i} + \\mathbf{j} + 4\\mathbf{k}$ and has normal vector $\\mathbf{n} = 3\\mathbf{i} + 2\\mathbf{j} - \\mathbf{k}$. Write the equation of the plane in scalar-product form $\\mathbf{r}\\cdot\\mathbf{n} = d$.",
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Recall the scalar-product form",
        "workingLatex": "\\mathbf{r}\\cdot\\mathbf{n} = d",
        "explanation": "A plane with normal $\\mathbf{n}$ consists of all points whose position vector $\\mathbf{r}$ has a fixed scalar product with $\\mathbf{n}$.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Identify the normal vector",
        "workingLatex": "\\mathbf{n} = 3\\mathbf{i} + 2\\mathbf{j} - \\mathbf{k}",
        "explanation": "The normal is perpendicular to every vector lying in the plane.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Use a point on the plane to find $d$",
        "workingLatex": "d = \\mathbf{a}\\cdot\\mathbf{n}",
        "explanation": "Substituting the known point $\\mathbf{a}$ into $\\mathbf{r}\\cdot\\mathbf{n}=d$ determines the constant $d$.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Compute the scalar product",
        "workingLatex": "d = (-1)(3) + (1)(2) + (4)(-1) = -5",
        "explanation": "Multiply corresponding components and add.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Write the plane equation",
        "workingLatex": "\\mathbf{r}\\cdot(3\\mathbf{i} + 2\\mathbf{j} - \\mathbf{k}) = -5",
        "explanation": "This is the scalar-product equation of the plane.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "State the answer",
        "workingLatex": "\\mathbf{r}\\cdot\\mathbf{n} = -5",
        "explanation": "Every point on the plane satisfies this equation.",
        "diagram": null
      }
    ],
    "finalAnswer": "$\\mathbf{r}\\cdot(3\\mathbf{i} + 2\\mathbf{j} - \\mathbf{k}) = -5$"
  }
},
{
  "level": "A-Level Further Maths",
  "topic": "Further Maths Year 1: Pure (Core Pure 1)",
  "subtopic": "Vectors: lines and planes",
  "subtopicId": "fm.y1.pure.vectors-lines-planes",
  "questionDiagram": null,
  "id": "fm.y1.pure.vectors-lines-planes.q017",
  "tags": [
    "scalar-product-plane",
    "normal-vector"
  ],
  "difficulty": "Easy",
  "marks": 3,
  "answerType": "written",
  "questionText": "A plane passes through the point with position vector $\\mathbf{a} = 4\\mathbf{i} + \\mathbf{j}$ and has normal vector $\\mathbf{n} = \\mathbf{j} + \\mathbf{k}$. Write the equation of the plane in scalar-product form $\\mathbf{r}\\cdot\\mathbf{n} = d$.",
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Recall the scalar-product form",
        "workingLatex": "\\mathbf{r}\\cdot\\mathbf{n} = d",
        "explanation": "A plane with normal $\\mathbf{n}$ consists of all points whose position vector $\\mathbf{r}$ has a fixed scalar product with $\\mathbf{n}$.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Identify the normal vector",
        "workingLatex": "\\mathbf{n} = \\mathbf{j} + \\mathbf{k}",
        "explanation": "The normal is perpendicular to every vector lying in the plane.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Use a point on the plane to find $d$",
        "workingLatex": "d = \\mathbf{a}\\cdot\\mathbf{n}",
        "explanation": "Substituting the known point $\\mathbf{a}$ into $\\mathbf{r}\\cdot\\mathbf{n}=d$ determines the constant $d$.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Compute the scalar product",
        "workingLatex": "d = (4)(0) + (1)(1) + (0)(1) = 1",
        "explanation": "Multiply corresponding components and add.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Write the plane equation",
        "workingLatex": "\\mathbf{r}\\cdot(\\mathbf{j} + \\mathbf{k}) = 1",
        "explanation": "This is the scalar-product equation of the plane.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "State the answer",
        "workingLatex": "\\mathbf{r}\\cdot\\mathbf{n} = 1",
        "explanation": "Every point on the plane satisfies this equation.",
        "diagram": null
      }
    ],
    "finalAnswer": "$\\mathbf{r}\\cdot(\\mathbf{j} + \\mathbf{k}) = 1$"
  }
},
{
  "level": "A-Level Further Maths",
  "topic": "Further Maths Year 1: Pure (Core Pure 1)",
  "subtopic": "Vectors: lines and planes",
  "subtopicId": "fm.y1.pure.vectors-lines-planes",
  "questionDiagram": null,
  "id": "fm.y1.pure.vectors-lines-planes.q018",
  "tags": [
    "cartesian-plane",
    "normal-vector"
  ],
  "difficulty": "Easy",
  "marks": 4,
  "answerType": "written",
  "questionText": "A plane passes through $P(1,\\,0,\\,2)$ and has normal vector $\\mathbf{n} = 2\\mathbf{i} + \\mathbf{j} - \\mathbf{k}$. Find the Cartesian equation of the plane.",
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Recall the Cartesian form",
        "workingLatex": "ax + by + cz = d",
        "explanation": "The coefficients $a$, $b$, $c$ are the components of the normal vector.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Read the normal components",
        "workingLatex": "a = 2,\\quad b = 1,\\quad c = -1",
        "explanation": "The normal vector gives the left-hand coefficients directly.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Substitute the known point",
        "workingLatex": "2(1) + 1(0) + -1(2) = d",
        "explanation": "Plugging $P$ into $ax+by+cz=d$ finds the constant term.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Evaluate $d$",
        "workingLatex": "d = 0",
        "explanation": "The scalar product $\\mathbf{n}\\cdot\\mathbf{a}$ equals $d$.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Write the Cartesian equation",
        "workingLatex": "2x +1y -1z = 0",
        "explanation": "This equation is satisfied by every point on the plane.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Check with the given point",
        "workingLatex": "2\\times1 + 1\\times0 + -1\\times2 = 0",
        "explanation": "Substituting $P$ confirms the equation holds.",
        "diagram": null
      }
    ],
    "finalAnswer": "$2x +1y -1z = 0$"
  }
},
{
  "level": "A-Level Further Maths",
  "topic": "Further Maths Year 1: Pure (Core Pure 1)",
  "subtopic": "Vectors: lines and planes",
  "subtopicId": "fm.y1.pure.vectors-lines-planes",
  "questionDiagram": null,
  "id": "fm.y1.pure.vectors-lines-planes.q019",
  "tags": [
    "cartesian-plane",
    "normal-vector"
  ],
  "difficulty": "Easy",
  "marks": 4,
  "answerType": "written",
  "questionText": "A plane passes through $P(3,\\,1,\\,0)$ and has normal vector $\\mathbf{n} = \\mathbf{i} - 2\\mathbf{j} + 2\\mathbf{k}$. Find the Cartesian equation of the plane.",
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Recall the Cartesian form",
        "workingLatex": "ax + by + cz = d",
        "explanation": "The coefficients $a$, $b$, $c$ are the components of the normal vector.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Read the normal components",
        "workingLatex": "a = 1,\\quad b = -2,\\quad c = 2",
        "explanation": "The normal vector gives the left-hand coefficients directly.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Substitute the known point",
        "workingLatex": "1(3) + -2(1) + 2(0) = d",
        "explanation": "Plugging $P$ into $ax+by+cz=d$ finds the constant term.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Evaluate $d$",
        "workingLatex": "d = 1",
        "explanation": "The scalar product $\\mathbf{n}\\cdot\\mathbf{a}$ equals $d$.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Write the Cartesian equation",
        "workingLatex": "1x -2y +2z = 1",
        "explanation": "This equation is satisfied by every point on the plane.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Check with the given point",
        "workingLatex": "1\\times3 + -2\\times1 + 2\\times0 = 1",
        "explanation": "Substituting $P$ confirms the equation holds.",
        "diagram": null
      }
    ],
    "finalAnswer": "$1x -2y +2z = 1$"
  }
},
{
  "level": "A-Level Further Maths",
  "topic": "Further Maths Year 1: Pure (Core Pure 1)",
  "subtopic": "Vectors: lines and planes",
  "subtopicId": "fm.y1.pure.vectors-lines-planes",
  "questionDiagram": null,
  "id": "fm.y1.pure.vectors-lines-planes.q020",
  "tags": [
    "cartesian-plane",
    "normal-vector"
  ],
  "difficulty": "Easy",
  "marks": 4,
  "answerType": "written",
  "questionText": "A plane passes through $P(0,\\,2,\\,1)$ and has normal vector $\\mathbf{n} = \\mathbf{i} + \\mathbf{j}$. Find the Cartesian equation of the plane.",
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Recall the Cartesian form",
        "workingLatex": "ax + by + cz = d",
        "explanation": "The coefficients $a$, $b$, $c$ are the components of the normal vector.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Read the normal components",
        "workingLatex": "a = 1,\\quad b = 1,\\quad c = 0",
        "explanation": "The normal vector gives the left-hand coefficients directly.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Substitute the known point",
        "workingLatex": "1(0) + 1(2) + 0(1) = d",
        "explanation": "Plugging $P$ into $ax+by+cz=d$ finds the constant term.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Evaluate $d$",
        "workingLatex": "d = 2",
        "explanation": "The scalar product $\\mathbf{n}\\cdot\\mathbf{a}$ equals $d$.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Write the Cartesian equation",
        "workingLatex": "1x +1y +0z = 2",
        "explanation": "This equation is satisfied by every point on the plane.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Check with the given point",
        "workingLatex": "1\\times0 + 1\\times2 + 0\\times1 = 2",
        "explanation": "Substituting $P$ confirms the equation holds.",
        "diagram": null
      }
    ],
    "finalAnswer": "$1x +1y +0z = 2$"
  }
},
{
  "level": "A-Level Further Maths",
  "topic": "Further Maths Year 1: Pure (Core Pure 1)",
  "subtopic": "Vectors: lines and planes",
  "subtopicId": "fm.y1.pure.vectors-lines-planes",
  "questionDiagram": null,
  "id": "fm.y1.pure.vectors-lines-planes.q021",
  "tags": [
    "vector-line",
    "parameter"
  ],
  "difficulty": "Easy",
  "marks": 3,
  "answerType": "written",
  "questionText": "The line $\\mathbf{r} = \\mathbf{i} + 2\\mathbf{j} + \\lambda(2\\mathbf{i} + \\mathbf{j} + 3\\mathbf{k})$ passes through a point $P$ when $\\lambda = 2$. Find the coordinates of $P$.",
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Recall how $\\lambda$ locates a point",
        "workingLatex": "\\mathbf{r} = \\mathbf{a} + \\lambda\\mathbf{d}",
        "explanation": "Each value of $\\lambda$ picks out one point on the line.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Substitute the given parameter",
        "workingLatex": "\\mathbf{r} = \\mathbf{i} + 2\\mathbf{j} + (2)(2\\mathbf{i} + \\mathbf{j} + 3\\mathbf{k})",
        "explanation": "Replace $\\lambda$ with ${lam} in the vector equation.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Scale the direction vector",
        "workingLatex": "2(2\\mathbf{i} + \\mathbf{j} + 3\\mathbf{k}) = 4\\mathbf{i} + 2\\mathbf{j} + 6\\mathbf{k}",
        "explanation": "Multiply each component of $\\mathbf{d}$ by $\\lambda$.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Add to the starting vector",
        "workingLatex": "\\mathbf{r} = \\mathbf{i} + 2\\mathbf{j} + 4\\mathbf{i} + 2\\mathbf{j} + 6\\mathbf{k} = 5\\mathbf{i} + 4\\mathbf{j} + 6\\mathbf{k}",
        "explanation": "Add component-wise to find the position vector of $P$.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Read the coordinates",
        "workingLatex": "P(5,\\,4,\\,6)",
        "explanation": "The components of $\\mathbf{r}$ are the Cartesian coordinates of the point.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "State the answer",
        "workingLatex": "P(5,\\,4,\\,6)",
        "explanation": "This is the point on the line corresponding to $\\lambda = ${lam}$.",
        "diagram": null
      }
    ],
    "finalAnswer": "$P(5,\\,4,\\,6)$"
  }
},
{
  "level": "A-Level Further Maths",
  "topic": "Further Maths Year 1: Pure (Core Pure 1)",
  "subtopic": "Vectors: lines and planes",
  "subtopicId": "fm.y1.pure.vectors-lines-planes",
  "questionDiagram": null,
  "id": "fm.y1.pure.vectors-lines-planes.q022",
  "tags": [
    "vector-line",
    "parameter"
  ],
  "difficulty": "Easy",
  "marks": 3,
  "answerType": "written",
  "questionText": "The line $\\mathbf{r} = \\mathbf{j} + 4\\mathbf{k} + \\lambda(\\mathbf{i} - \\mathbf{j} + 2\\mathbf{k})$ passes through a point $P$ when $\\lambda = 3$. Find the coordinates of $P$.",
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Recall how $\\lambda$ locates a point",
        "workingLatex": "\\mathbf{r} = \\mathbf{a} + \\lambda\\mathbf{d}",
        "explanation": "Each value of $\\lambda$ picks out one point on the line.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Substitute the given parameter",
        "workingLatex": "\\mathbf{r} = \\mathbf{j} + 4\\mathbf{k} + (3)(\\mathbf{i} - \\mathbf{j} + 2\\mathbf{k})",
        "explanation": "Replace $\\lambda$ with ${lam} in the vector equation.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Scale the direction vector",
        "workingLatex": "3(\\mathbf{i} - \\mathbf{j} + 2\\mathbf{k}) = 3\\mathbf{i} - 3\\mathbf{j} + 6\\mathbf{k}",
        "explanation": "Multiply each component of $\\mathbf{d}$ by $\\lambda$.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Add to the starting vector",
        "workingLatex": "\\mathbf{r} = \\mathbf{j} + 4\\mathbf{k} + 3\\mathbf{i} - 3\\mathbf{j} + 6\\mathbf{k} = 3\\mathbf{i} - 2\\mathbf{j} + 10\\mathbf{k}",
        "explanation": "Add component-wise to find the position vector of $P$.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Read the coordinates",
        "workingLatex": "P(3,\\,-2,\\,10)",
        "explanation": "The components of $\\mathbf{r}$ are the Cartesian coordinates of the point.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "State the answer",
        "workingLatex": "P(3,\\,-2,\\,10)",
        "explanation": "This is the point on the line corresponding to $\\lambda = ${lam}$.",
        "diagram": null
      }
    ],
    "finalAnswer": "$P(3,\\,-2,\\,10)$"
  }
},
{
  "level": "A-Level Further Maths",
  "topic": "Further Maths Year 1: Pure (Core Pure 1)",
  "subtopic": "Vectors: lines and planes",
  "subtopicId": "fm.y1.pure.vectors-lines-planes",
  "questionDiagram": null,
  "id": "fm.y1.pure.vectors-lines-planes.q023",
  "tags": [
    "vector-line",
    "parameter"
  ],
  "difficulty": "Easy",
  "marks": 3,
  "answerType": "written",
  "questionText": "The line $\\mathbf{r} = 3\\mathbf{i} + \\mathbf{k} + \\lambda(-\\mathbf{i} + 2\\mathbf{j} + \\mathbf{k})$ passes through a point $P$ when $\\lambda = -1$. Find the coordinates of $P$.",
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Recall how $\\lambda$ locates a point",
        "workingLatex": "\\mathbf{r} = \\mathbf{a} + \\lambda\\mathbf{d}",
        "explanation": "Each value of $\\lambda$ picks out one point on the line.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Substitute the given parameter",
        "workingLatex": "\\mathbf{r} = 3\\mathbf{i} + \\mathbf{k} + (-1)(-\\mathbf{i} + 2\\mathbf{j} + \\mathbf{k})",
        "explanation": "Replace $\\lambda$ with ${lam} in the vector equation.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Scale the direction vector",
        "workingLatex": "-1(-\\mathbf{i} + 2\\mathbf{j} + \\mathbf{k}) = \\mathbf{i} - 2\\mathbf{j} - \\mathbf{k}",
        "explanation": "Multiply each component of $\\mathbf{d}$ by $\\lambda$.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Add to the starting vector",
        "workingLatex": "\\mathbf{r} = 3\\mathbf{i} + \\mathbf{k} + \\mathbf{i} - 2\\mathbf{j} - \\mathbf{k} = 4\\mathbf{i} - 2\\mathbf{j}",
        "explanation": "Add component-wise to find the position vector of $P$.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Read the coordinates",
        "workingLatex": "P(4,\\,-2,\\,0)",
        "explanation": "The components of $\\mathbf{r}$ are the Cartesian coordinates of the point.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "State the answer",
        "workingLatex": "P(4,\\,-2,\\,0)",
        "explanation": "This is the point on the line corresponding to $\\lambda = ${lam}$.",
        "diagram": null
      }
    ],
    "finalAnswer": "$P(4,\\,-2,\\,0)$"
  }
},
{
  "level": "A-Level Further Maths",
  "topic": "Further Maths Year 1: Pure (Core Pure 1)",
  "subtopic": "Vectors: lines and planes",
  "subtopicId": "fm.y1.pure.vectors-lines-planes",
  "questionDiagram": null,
  "id": "fm.y1.pure.vectors-lines-planes.q024",
  "tags": [
    "cartesian-plane",
    "verification"
  ],
  "difficulty": "Easy",
  "marks": 3,
  "answerType": "written",
  "questionText": "Determine whether the point $Q(1,\\,2,\\,1)$ lies on the plane 1x +2y +1z = 6$.",
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Recall the plane test",
        "workingLatex": "\\text{substitute the point into } ax+by+cz=d",
        "explanation": "A point lies on the plane if and only if its coordinates satisfy the equation.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Substitute the coordinates",
        "workingLatex": "1(1) + 2(2) + 1(1)",
        "explanation": "Replace $x$, $y$, $z$ with the coordinates of $Q$.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Evaluate the left-hand side",
        "workingLatex": "= 6",
        "explanation": "Multiply and add the terms.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Compare with $d$",
        "workingLatex": "6 = 6",
        "explanation": "Check whether the left-hand side equals the right-hand side $d$.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Draw the conclusion",
        "workingLatex": "\\text{Q lies on the plane}",
        "explanation": "The coordinates satisfy the equation, so $Q$ is on the plane.",
        "diagram": null
      }
    ],
    "finalAnswer": "Yes, $Q$ lies on the plane."
  }
},
{
  "level": "A-Level Further Maths",
  "topic": "Further Maths Year 1: Pure (Core Pure 1)",
  "subtopic": "Vectors: lines and planes",
  "subtopicId": "fm.y1.pure.vectors-lines-planes",
  "questionDiagram": null,
  "id": "fm.y1.pure.vectors-lines-planes.q025",
  "tags": [
    "cartesian-plane",
    "verification"
  ],
  "difficulty": "Easy",
  "marks": 3,
  "answerType": "written",
  "questionText": "Determine whether the point $Q(2,\\,1,\\,0)$ lies on the plane 2x -1y +3z = 5$.",
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Recall the plane test",
        "workingLatex": "\\text{substitute the point into } ax+by+cz=d",
        "explanation": "A point lies on the plane if and only if its coordinates satisfy the equation.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Substitute the coordinates",
        "workingLatex": "2(2) + -1(1) + 3(0)",
        "explanation": "Replace $x$, $y$, $z$ with the coordinates of $Q$.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Evaluate the left-hand side",
        "workingLatex": "= 3",
        "explanation": "Multiply and add the terms.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Compare with $d$",
        "workingLatex": "3 \\neq 5",
        "explanation": "Check whether the left-hand side equals the right-hand side $d$.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Draw the conclusion",
        "workingLatex": "\\text{Q does not lie on the plane}",
        "explanation": "The coordinates fail the equation, so $Q$ is off the plane.",
        "diagram": null
      }
    ],
    "finalAnswer": "No, $Q$ does not lie on the plane."
  }
},
{
  "level": "A-Level Further Maths",
  "topic": "Further Maths Year 1: Pure (Core Pure 1)",
  "subtopic": "Vectors: lines and planes",
  "subtopicId": "fm.y1.pure.vectors-lines-planes",
  "questionDiagram": null,
  "id": "fm.y1.pure.vectors-lines-planes.q026",
  "tags": [
    "vector-line",
    "cartesian-form"
  ],
  "difficulty": "Intermediate",
  "marks": 5,
  "answerType": "written",
  "questionText": "The line $L$ has vector equation $\\mathbf{r} = \\mathbf{i} + 2\\mathbf{j} + 3\\mathbf{k} + \\lambda(2\\mathbf{i} + 4\\mathbf{j} - 2\\mathbf{k})$. Write the Cartesian equations of $L$ in symmetric form.",
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Write the parametric form",
        "workingLatex": "\\mathbf{r} = \\mathbf{i} + 2\\mathbf{j} + 3\\mathbf{k} + \\lambda(2\\mathbf{i} + 4\\mathbf{j} - 2\\mathbf{k})",
        "explanation": "Start from the given vector equation.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Separate into component equations",
        "workingLatex": "x = 1 + 2\\lambda,\\quad y = 2 + 4\\lambda,\\quad z = 3 + -2\\lambda",
        "explanation": "Equating $\\mathbf{i}$, $\\mathbf{j}$ and $\\mathbf{k}$ components gives three parametric equations.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Solve each component for $\\lambda$",
        "workingLatex": "\\lambda = \\frac{x - 1}{2}",
        "explanation": "Each non-constant component expresses $\\lambda$ in terms of $x$, $y$ or $z$.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Equate the expressions for $\\lambda$",
        "workingLatex": "\\frac{x - 1}{2} = \\frac{y - 2}{4} = \\frac{z - 3}{-2}",
        "explanation": "Points on the line satisfy all three component relations simultaneously, so the $\\lambda$ values must match.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "State the symmetric Cartesian form",
        "workingLatex": "\\frac{x - 1}{2} = \\frac{y - 2}{4} = \\frac{z - 3}{-2}",
        "explanation": "This single chain of equal ratios describes the same line as the vector equation.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Note the direction ratios",
        "workingLatex": "\\text{direction ratios } 2 : 4 : -2",
        "explanation": "The denominators are the components of the direction vector.",
        "diagram": null
      },
      {
        "stepNumber": 7,
        "description": "Verify with the known point",
        "workingLatex": "\\text{At } \\lambda=0:\\; (1,\\,2,\\,3)",
        "explanation": "Setting $\\lambda=0$ recovers the point ${vecijk(a)}, confirming the conversion.",
        "diagram": null
      }
    ],
    "finalAnswer": "$\\frac{x - 1}{2} = \\frac{y - 2}{4} = \\frac{z - 3}{-2}$"
  }
},
{
  "level": "A-Level Further Maths",
  "topic": "Further Maths Year 1: Pure (Core Pure 1)",
  "subtopic": "Vectors: lines and planes",
  "subtopicId": "fm.y1.pure.vectors-lines-planes",
  "questionDiagram": null,
  "id": "fm.y1.pure.vectors-lines-planes.q027",
  "tags": [
    "vector-line",
    "cartesian-form"
  ],
  "difficulty": "Intermediate",
  "marks": 5,
  "answerType": "written",
  "questionText": "The line $L$ has vector equation $\\mathbf{r} = \\mathbf{j} + 5\\mathbf{k} + \\lambda(3\\mathbf{i} - \\mathbf{j})$. Write the Cartesian equations of $L$ in symmetric form.",
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Write the parametric form",
        "workingLatex": "\\mathbf{r} = \\mathbf{j} + 5\\mathbf{k} + \\lambda(3\\mathbf{i} - \\mathbf{j})",
        "explanation": "Start from the given vector equation.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Separate into component equations",
        "workingLatex": "x = 0 + 3\\lambda,\\quad y = 1 + -1\\lambda,\\quad z = 5",
        "explanation": "Equating $\\mathbf{i}$, $\\mathbf{j}$ and $\\mathbf{k}$ components gives three parametric equations.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Solve each component for $\\lambda$",
        "workingLatex": "\\lambda = \\frac{x - 0}{3}",
        "explanation": "Each non-constant component expresses $\\lambda$ in terms of $x$, $y$ or $z$.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Equate the expressions for $\\lambda$",
        "workingLatex": "\\frac{x - 0}{3} = \\frac{y - 1}{-1}",
        "explanation": "Points on the line satisfy all three component relations simultaneously, so the $\\lambda$ values must match.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "State the symmetric Cartesian form",
        "workingLatex": "\\frac{x - 0}{3} = \\frac{y - 1}{-1}",
        "explanation": "This single chain of equal ratios describes the same line as the vector equation.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Note the direction ratios",
        "workingLatex": "\\text{direction ratios } 3 : -1 : 0",
        "explanation": "The denominators are the components of the direction vector.",
        "diagram": null
      },
      {
        "stepNumber": 7,
        "description": "Verify with the known point",
        "workingLatex": "\\text{At } \\lambda=0:\\; (0,\\,1,\\,5)",
        "explanation": "Setting $\\lambda=0$ recovers the point ${vecijk(a)}, confirming the conversion.",
        "diagram": null
      }
    ],
    "finalAnswer": "$\\frac{x - 0}{3} = \\frac{y - 1}{-1}$"
  }
},
{
  "level": "A-Level Further Maths",
  "topic": "Further Maths Year 1: Pure (Core Pure 1)",
  "subtopic": "Vectors: lines and planes",
  "subtopicId": "fm.y1.pure.vectors-lines-planes",
  "questionDiagram": null,
  "id": "fm.y1.pure.vectors-lines-planes.q028",
  "tags": [
    "vector-line",
    "cartesian-form"
  ],
  "difficulty": "Intermediate",
  "marks": 5,
  "answerType": "written",
  "questionText": "The line $L$ has vector equation $\\mathbf{r} = 2\\mathbf{i} + \\mathbf{k} + \\lambda(\\mathbf{i} + 2\\mathbf{j} + 3\\mathbf{k})$. Write the Cartesian equations of $L$ in symmetric form.",
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Write the parametric form",
        "workingLatex": "\\mathbf{r} = 2\\mathbf{i} + \\mathbf{k} + \\lambda(\\mathbf{i} + 2\\mathbf{j} + 3\\mathbf{k})",
        "explanation": "Start from the given vector equation.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Separate into component equations",
        "workingLatex": "x = 2 + 1\\lambda,\\quad y = 0 + 2\\lambda,\\quad z = 1 + 3\\lambda",
        "explanation": "Equating $\\mathbf{i}$, $\\mathbf{j}$ and $\\mathbf{k}$ components gives three parametric equations.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Solve each component for $\\lambda$",
        "workingLatex": "\\lambda = \\frac{x - 2}{1}",
        "explanation": "Each non-constant component expresses $\\lambda$ in terms of $x$, $y$ or $z$.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Equate the expressions for $\\lambda$",
        "workingLatex": "\\frac{x - 2}{1} = \\frac{y - 0}{2} = \\frac{z - 1}{3}",
        "explanation": "Points on the line satisfy all three component relations simultaneously, so the $\\lambda$ values must match.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "State the symmetric Cartesian form",
        "workingLatex": "\\frac{x - 2}{1} = \\frac{y - 0}{2} = \\frac{z - 1}{3}",
        "explanation": "This single chain of equal ratios describes the same line as the vector equation.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Note the direction ratios",
        "workingLatex": "\\text{direction ratios } 1 : 2 : 3",
        "explanation": "The denominators are the components of the direction vector.",
        "diagram": null
      },
      {
        "stepNumber": 7,
        "description": "Verify with the known point",
        "workingLatex": "\\text{At } \\lambda=0:\\; (2,\\,0,\\,1)",
        "explanation": "Setting $\\lambda=0$ recovers the point ${vecijk(a)}, confirming the conversion.",
        "diagram": null
      }
    ],
    "finalAnswer": "$\\frac{x - 2}{1} = \\frac{y - 0}{2} = \\frac{z - 1}{3}$"
  }
},
{
  "level": "A-Level Further Maths",
  "topic": "Further Maths Year 1: Pure (Core Pure 1)",
  "subtopic": "Vectors: lines and planes",
  "subtopicId": "fm.y1.pure.vectors-lines-planes",
  "questionDiagram": null,
  "id": "fm.y1.pure.vectors-lines-planes.q029",
  "tags": [
    "vector-line",
    "cartesian-form"
  ],
  "difficulty": "Intermediate",
  "marks": 5,
  "answerType": "written",
  "questionText": "The line $L$ has vector equation $\\mathbf{r} = -\\mathbf{i} + 3\\mathbf{j} + 2\\mathbf{k} + \\lambda(2\\mathbf{i} + 4\\mathbf{k})$. Write the Cartesian equations of $L$ in symmetric form.",
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Write the parametric form",
        "workingLatex": "\\mathbf{r} = -\\mathbf{i} + 3\\mathbf{j} + 2\\mathbf{k} + \\lambda(2\\mathbf{i} + 4\\mathbf{k})",
        "explanation": "Start from the given vector equation.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Separate into component equations",
        "workingLatex": "x = -1 + 2\\lambda,\\quad y = 3,\\quad z = 2 + 4\\lambda",
        "explanation": "Equating $\\mathbf{i}$, $\\mathbf{j}$ and $\\mathbf{k}$ components gives three parametric equations.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Solve each component for $\\lambda$",
        "workingLatex": "\\lambda = \\frac{x - -1}{2}",
        "explanation": "Each non-constant component expresses $\\lambda$ in terms of $x$, $y$ or $z$.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Equate the expressions for $\\lambda$",
        "workingLatex": "\\frac{x - -1}{2} = \\frac{z - 2}{4}",
        "explanation": "Points on the line satisfy all three component relations simultaneously, so the $\\lambda$ values must match.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "State the symmetric Cartesian form",
        "workingLatex": "\\frac{x - -1}{2} = \\frac{z - 2}{4}",
        "explanation": "This single chain of equal ratios describes the same line as the vector equation.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Note the direction ratios",
        "workingLatex": "\\text{direction ratios } 2 : 0 : 4",
        "explanation": "The denominators are the components of the direction vector.",
        "diagram": null
      },
      {
        "stepNumber": 7,
        "description": "Verify with the known point",
        "workingLatex": "\\text{At } \\lambda=0:\\; (-1,\\,3,\\,2)",
        "explanation": "Setting $\\lambda=0$ recovers the point ${vecijk(a)}, confirming the conversion.",
        "diagram": null
      }
    ],
    "finalAnswer": "$\\frac{x - -1}{2} = \\frac{z - 2}{4}$"
  }
},
{
  "level": "A-Level Further Maths",
  "topic": "Further Maths Year 1: Pure (Core Pure 1)",
  "subtopic": "Vectors: lines and planes",
  "subtopicId": "fm.y1.pure.vectors-lines-planes",
  "questionDiagram": null,
  "id": "fm.y1.pure.vectors-lines-planes.q030",
  "tags": [
    "vector-line",
    "cartesian-form"
  ],
  "difficulty": "Intermediate",
  "marks": 5,
  "answerType": "written",
  "questionText": "The line $L$ has vector equation $\\mathbf{r} = 4\\mathbf{i} + \\mathbf{j} + \\lambda(\\mathbf{i} + 3\\mathbf{j} - 2\\mathbf{k})$. Write the Cartesian equations of $L$ in symmetric form.",
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Write the parametric form",
        "workingLatex": "\\mathbf{r} = 4\\mathbf{i} + \\mathbf{j} + \\lambda(\\mathbf{i} + 3\\mathbf{j} - 2\\mathbf{k})",
        "explanation": "Start from the given vector equation.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Separate into component equations",
        "workingLatex": "x = 4 + 1\\lambda,\\quad y = 1 + 3\\lambda,\\quad z = 0 + -2\\lambda",
        "explanation": "Equating $\\mathbf{i}$, $\\mathbf{j}$ and $\\mathbf{k}$ components gives three parametric equations.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Solve each component for $\\lambda$",
        "workingLatex": "\\lambda = \\frac{x - 4}{1}",
        "explanation": "Each non-constant component expresses $\\lambda$ in terms of $x$, $y$ or $z$.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Equate the expressions for $\\lambda$",
        "workingLatex": "\\frac{x - 4}{1} = \\frac{y - 1}{3} = \\frac{z - 0}{-2}",
        "explanation": "Points on the line satisfy all three component relations simultaneously, so the $\\lambda$ values must match.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "State the symmetric Cartesian form",
        "workingLatex": "\\frac{x - 4}{1} = \\frac{y - 1}{3} = \\frac{z - 0}{-2}",
        "explanation": "This single chain of equal ratios describes the same line as the vector equation.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Note the direction ratios",
        "workingLatex": "\\text{direction ratios } 1 : 3 : -2",
        "explanation": "The denominators are the components of the direction vector.",
        "diagram": null
      },
      {
        "stepNumber": 7,
        "description": "Verify with the known point",
        "workingLatex": "\\text{At } \\lambda=0:\\; (4,\\,1,\\,0)",
        "explanation": "Setting $\\lambda=0$ recovers the point ${vecijk(a)}, confirming the conversion.",
        "diagram": null
      }
    ],
    "finalAnswer": "$\\frac{x - 4}{1} = \\frac{y - 1}{3} = \\frac{z - 0}{-2}$"
  }
},
{
  "level": "A-Level Further Maths",
  "topic": "Further Maths Year 1: Pure (Core Pure 1)",
  "subtopic": "Vectors: lines and planes",
  "subtopicId": "fm.y1.pure.vectors-lines-planes",
  "questionDiagram": null,
  "id": "fm.y1.pure.vectors-lines-planes.q031",
  "tags": [
    "cartesian-plane",
    "three-points"
  ],
  "difficulty": "Intermediate",
  "marks": 6,
  "answerType": "written",
  "questionText": "Find the Cartesian equation of the plane through the points $A(1,\\,0,\\,0)$, $B(0,\\,2,\\,0)$ and $C(0,\\,0,\\,3)$.",
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Find two vectors in the plane",
        "workingLatex": "\\overrightarrow{AB} = -\\mathbf{i} + 2\\mathbf{j},\\quad \\overrightarrow{AC} = -\\mathbf{i} + 3\\mathbf{k}",
        "explanation": "Any two non-parallel chords of the triangle lie in the plane.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Recall the normal from a cross product",
        "workingLatex": "\\mathbf{n} = \\overrightarrow{AB} \\times \\overrightarrow{AC}",
        "explanation": "The cross product of two in-plane vectors is perpendicular to the plane.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Compute the cross product",
        "workingLatex": "\\mathbf{n} = 6\\mathbf{i} + 3\\mathbf{j} + 2\\mathbf{k}",
        "explanation": "Apply the determinant formula component by component.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Use a point to find $d$",
        "workingLatex": "d = \\mathbf{n}\\cdot\\mathbf{a} = 6",
        "explanation": "Substitute $A$ into $ax+by+cz=d$.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Write the Cartesian equation",
        "workingLatex": "6x +3y +2z = 6",
        "explanation": "The normal components become the coefficients of $x$, $y$ and $z$.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Verify with point $B$",
        "workingLatex": "6(0) + 3(2) + 2(0) = 6",
        "explanation": "Substituting $B$ should also give $d$.",
        "diagram": null
      },
      {
        "stepNumber": 7,
        "description": "Verify with point $C$",
        "workingLatex": "6(0) + 3(0) + 2(3) = 6",
        "explanation": "All three defining points must satisfy the plane equation.",
        "diagram": null
      },
      {
        "stepNumber": 8,
        "description": "State the final equation",
        "workingLatex": "6x +3y +2z = 6",
        "explanation": "This plane contains $A$, $B$ and $C$.",
        "diagram": null
      }
    ],
    "finalAnswer": "$6x +3y +2z = 6$"
  }
},
{
  "level": "A-Level Further Maths",
  "topic": "Further Maths Year 1: Pure (Core Pure 1)",
  "subtopic": "Vectors: lines and planes",
  "subtopicId": "fm.y1.pure.vectors-lines-planes",
  "questionDiagram": null,
  "id": "fm.y1.pure.vectors-lines-planes.q032",
  "tags": [
    "cartesian-plane",
    "three-points"
  ],
  "difficulty": "Intermediate",
  "marks": 6,
  "answerType": "written",
  "questionText": "Find the Cartesian equation of the plane through the points $A(1,\\,1,\\,0)$, $B(2,\\,0,\\,1)$ and $C(0,\\,1,\\,2)$.",
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Find two vectors in the plane",
        "workingLatex": "\\overrightarrow{AB} = \\mathbf{i} - \\mathbf{j} + \\mathbf{k},\\quad \\overrightarrow{AC} = -\\mathbf{i} + 2\\mathbf{k}",
        "explanation": "Any two non-parallel chords of the triangle lie in the plane.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Recall the normal from a cross product",
        "workingLatex": "\\mathbf{n} = \\overrightarrow{AB} \\times \\overrightarrow{AC}",
        "explanation": "The cross product of two in-plane vectors is perpendicular to the plane.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Compute the cross product",
        "workingLatex": "\\mathbf{n} = -2\\mathbf{i} - 3\\mathbf{j} - \\mathbf{k}",
        "explanation": "Apply the determinant formula component by component.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Use a point to find $d$",
        "workingLatex": "d = \\mathbf{n}\\cdot\\mathbf{a} = -5",
        "explanation": "Substitute $A$ into $ax+by+cz=d$.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Write the Cartesian equation",
        "workingLatex": "-2x -3y -1z = -5",
        "explanation": "The normal components become the coefficients of $x$, $y$ and $z$.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Verify with point $B$",
        "workingLatex": "-2(2) + -3(0) + -1(1) = -5",
        "explanation": "Substituting $B$ should also give $d$.",
        "diagram": null
      },
      {
        "stepNumber": 7,
        "description": "Verify with point $C$",
        "workingLatex": "-2(0) + -3(1) + -1(2) = -5",
        "explanation": "All three defining points must satisfy the plane equation.",
        "diagram": null
      },
      {
        "stepNumber": 8,
        "description": "State the final equation",
        "workingLatex": "-2x -3y -1z = -5",
        "explanation": "This plane contains $A$, $B$ and $C$.",
        "diagram": null
      }
    ],
    "finalAnswer": "$-2x -3y -1z = -5$"
  }
},
{
  "level": "A-Level Further Maths",
  "topic": "Further Maths Year 1: Pure (Core Pure 1)",
  "subtopic": "Vectors: lines and planes",
  "subtopicId": "fm.y1.pure.vectors-lines-planes",
  "questionDiagram": null,
  "id": "fm.y1.pure.vectors-lines-planes.q033",
  "tags": [
    "cartesian-plane",
    "three-points"
  ],
  "difficulty": "Intermediate",
  "marks": 6,
  "answerType": "written",
  "questionText": "Find the Cartesian equation of the plane through the points $A(2,\\,1,\\,3)$, $B(4,\\,0,\\,1)$ and $C(1,\\,2,\\,0)$.",
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Find two vectors in the plane",
        "workingLatex": "\\overrightarrow{AB} = 2\\mathbf{i} - \\mathbf{j} - 2\\mathbf{k},\\quad \\overrightarrow{AC} = -\\mathbf{i} + \\mathbf{j} - 3\\mathbf{k}",
        "explanation": "Any two non-parallel chords of the triangle lie in the plane.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Recall the normal from a cross product",
        "workingLatex": "\\mathbf{n} = \\overrightarrow{AB} \\times \\overrightarrow{AC}",
        "explanation": "The cross product of two in-plane vectors is perpendicular to the plane.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Compute the cross product",
        "workingLatex": "\\mathbf{n} = 5\\mathbf{i} + 8\\mathbf{j} + \\mathbf{k}",
        "explanation": "Apply the determinant formula component by component.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Use a point to find $d$",
        "workingLatex": "d = \\mathbf{n}\\cdot\\mathbf{a} = 21",
        "explanation": "Substitute $A$ into $ax+by+cz=d$.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Write the Cartesian equation",
        "workingLatex": "5x +8y +1z = 21",
        "explanation": "The normal components become the coefficients of $x$, $y$ and $z$.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Verify with point $B$",
        "workingLatex": "5(4) + 8(0) + 1(1) = 21",
        "explanation": "Substituting $B$ should also give $d$.",
        "diagram": null
      },
      {
        "stepNumber": 7,
        "description": "Verify with point $C$",
        "workingLatex": "5(1) + 8(2) + 1(0) = 21",
        "explanation": "All three defining points must satisfy the plane equation.",
        "diagram": null
      },
      {
        "stepNumber": 8,
        "description": "State the final equation",
        "workingLatex": "5x +8y +1z = 21",
        "explanation": "This plane contains $A$, $B$ and $C$.",
        "diagram": null
      }
    ],
    "finalAnswer": "$5x +8y +1z = 21$"
  }
},
{
  "level": "A-Level Further Maths",
  "topic": "Further Maths Year 1: Pure (Core Pure 1)",
  "subtopic": "Vectors: lines and planes",
  "subtopicId": "fm.y1.pure.vectors-lines-planes",
  "questionDiagram": null,
  "id": "fm.y1.pure.vectors-lines-planes.q034",
  "tags": [
    "cartesian-plane",
    "three-points"
  ],
  "difficulty": "Intermediate",
  "marks": 6,
  "answerType": "written",
  "questionText": "Find the Cartesian equation of the plane through the points $A(0,\\,0,\\,1)$, $B(1,\\,2,\\,3)$ and $C(2,\\,1,\\,0)$.",
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Find two vectors in the plane",
        "workingLatex": "\\overrightarrow{AB} = \\mathbf{i} + 2\\mathbf{j} + 2\\mathbf{k},\\quad \\overrightarrow{AC} = 2\\mathbf{i} + \\mathbf{j} - \\mathbf{k}",
        "explanation": "Any two non-parallel chords of the triangle lie in the plane.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Recall the normal from a cross product",
        "workingLatex": "\\mathbf{n} = \\overrightarrow{AB} \\times \\overrightarrow{AC}",
        "explanation": "The cross product of two in-plane vectors is perpendicular to the plane.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Compute the cross product",
        "workingLatex": "\\mathbf{n} = -4\\mathbf{i} + 5\\mathbf{j} - 3\\mathbf{k}",
        "explanation": "Apply the determinant formula component by component.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Use a point to find $d$",
        "workingLatex": "d = \\mathbf{n}\\cdot\\mathbf{a} = -3",
        "explanation": "Substitute $A$ into $ax+by+cz=d$.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Write the Cartesian equation",
        "workingLatex": "-4x +5y -3z = -3",
        "explanation": "The normal components become the coefficients of $x$, $y$ and $z$.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Verify with point $B$",
        "workingLatex": "-4(1) + 5(2) + -3(3) = -3",
        "explanation": "Substituting $B$ should also give $d$.",
        "diagram": null
      },
      {
        "stepNumber": 7,
        "description": "Verify with point $C$",
        "workingLatex": "-4(2) + 5(1) + -3(0) = -3",
        "explanation": "All three defining points must satisfy the plane equation.",
        "diagram": null
      },
      {
        "stepNumber": 8,
        "description": "State the final equation",
        "workingLatex": "-4x +5y -3z = -3",
        "explanation": "This plane contains $A$, $B$ and $C$.",
        "diagram": null
      }
    ],
    "finalAnswer": "$-4x +5y -3z = -3$"
  }
},
{
  "level": "A-Level Further Maths",
  "topic": "Further Maths Year 1: Pure (Core Pure 1)",
  "subtopic": "Vectors: lines and planes",
  "subtopicId": "fm.y1.pure.vectors-lines-planes",
  "questionDiagram": null,
  "id": "fm.y1.pure.vectors-lines-planes.q035",
  "tags": [
    "cartesian-plane",
    "three-points"
  ],
  "difficulty": "Intermediate",
  "marks": 6,
  "answerType": "written",
  "questionText": "Find the Cartesian equation of the plane through the points $A(1,\\,2,\\,1)$, $B(3,\\,1,\\,2)$ and $C(2,\\,3,\\,4)$.",
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Find two vectors in the plane",
        "workingLatex": "\\overrightarrow{AB} = 2\\mathbf{i} - \\mathbf{j} + \\mathbf{k},\\quad \\overrightarrow{AC} = \\mathbf{i} + \\mathbf{j} + 3\\mathbf{k}",
        "explanation": "Any two non-parallel chords of the triangle lie in the plane.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Recall the normal from a cross product",
        "workingLatex": "\\mathbf{n} = \\overrightarrow{AB} \\times \\overrightarrow{AC}",
        "explanation": "The cross product of two in-plane vectors is perpendicular to the plane.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Compute the cross product",
        "workingLatex": "\\mathbf{n} = -4\\mathbf{i} - 5\\mathbf{j} + 3\\mathbf{k}",
        "explanation": "Apply the determinant formula component by component.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Use a point to find $d$",
        "workingLatex": "d = \\mathbf{n}\\cdot\\mathbf{a} = -11",
        "explanation": "Substitute $A$ into $ax+by+cz=d$.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Write the Cartesian equation",
        "workingLatex": "-4x -5y +3z = -11",
        "explanation": "The normal components become the coefficients of $x$, $y$ and $z$.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Verify with point $B$",
        "workingLatex": "-4(3) + -5(1) + 3(2) = -11",
        "explanation": "Substituting $B$ should also give $d$.",
        "diagram": null
      },
      {
        "stepNumber": 7,
        "description": "Verify with point $C$",
        "workingLatex": "-4(2) + -5(3) + 3(4) = -11",
        "explanation": "All three defining points must satisfy the plane equation.",
        "diagram": null
      },
      {
        "stepNumber": 8,
        "description": "State the final equation",
        "workingLatex": "-4x -5y +3z = -11",
        "explanation": "This plane contains $A$, $B$ and $C$.",
        "diagram": null
      }
    ],
    "finalAnswer": "$-4x -5y +3z = -11$"
  }
},
{
  "level": "A-Level Further Maths",
  "topic": "Further Maths Year 1: Pure (Core Pure 1)",
  "subtopic": "Vectors: lines and planes",
  "subtopicId": "fm.y1.pure.vectors-lines-planes",
  "questionDiagram": null,
  "id": "fm.y1.pure.vectors-lines-planes.q036",
  "tags": [
    "vector-plane",
    "parametric-form"
  ],
  "difficulty": "Intermediate",
  "marks": 5,
  "answerType": "vector",
  "questionText": "A plane passes through $\\mathbf{a} = \\mathbf{i} + 2\\mathbf{k}$ and contains the direction vectors $\\mathbf{u} = 2\\mathbf{i} + \\mathbf{j}$ and $\\mathbf{v} = \\mathbf{j} + 3\\mathbf{k}$. Write a vector equation of the plane.",
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Recall the parametric vector form",
        "workingLatex": "\\mathbf{r} = \\mathbf{a} + s\\mathbf{u} + t\\mathbf{v}",
        "explanation": "Starting at $\\mathbf{a}$ and moving along $\\mathbf{u}$ and $\\mathbf{v}$ reaches every point in the plane.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Identify the given vectors",
        "workingLatex": "\\mathbf{a} = \\mathbf{i} + 2\\mathbf{k},\\; \\mathbf{u} = 2\\mathbf{i} + \\mathbf{j},\\; \\mathbf{v} = \\mathbf{j} + 3\\mathbf{k}",
        "explanation": "The point and two non-parallel direction vectors define the plane.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Substitute into the formula",
        "workingLatex": "\\mathbf{r} = \\mathbf{i} + 2\\mathbf{k} + s(2\\mathbf{i} + \\mathbf{j}) + t(\\mathbf{j} + 3\\mathbf{k})",
        "explanation": "Insert the specific vectors from the question.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "State the vector equation",
        "workingLatex": "\\mathbf{r} = \\mathbf{i} + 2\\mathbf{k} + s(2\\mathbf{i} + \\mathbf{j}) + t(\\mathbf{j} + 3\\mathbf{k})",
        "explanation": "This describes the same plane as the scalar-product form.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Find the normal (optional check)",
        "workingLatex": "\\mathbf{n} = \\mathbf{u}\\times\\mathbf{v} = 3\\mathbf{i} - 6\\mathbf{j} + 2\\mathbf{k}",
        "explanation": "The cross product gives a normal for converting to Cartesian form.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Convert to scalar-product form",
        "workingLatex": "\\mathbf{r}\\cdot(3\\mathbf{i} - 6\\mathbf{j} + 2\\mathbf{k}) = 7",
        "explanation": "The constant is $\\mathbf{n}\\cdot\\mathbf{a}$, confirming consistency.",
        "diagram": null
      },
      {
        "stepNumber": 7,
        "description": "Note the parameters",
        "workingLatex": "s, t \\in \\mathbb{R}",
        "explanation": "Each choice of $s$ and $t$ locates one point in the plane.",
        "diagram": null
      }
    ],
    "finalAnswer": "$\\mathbf{r} = \\mathbf{i} + 2\\mathbf{k} + s(2\\mathbf{i} + \\mathbf{j}) + t(\\mathbf{j} + 3\\mathbf{k})$"
  }
},
{
  "level": "A-Level Further Maths",
  "topic": "Further Maths Year 1: Pure (Core Pure 1)",
  "subtopic": "Vectors: lines and planes",
  "subtopicId": "fm.y1.pure.vectors-lines-planes",
  "questionDiagram": null,
  "id": "fm.y1.pure.vectors-lines-planes.q037",
  "tags": [
    "vector-plane",
    "parametric-form"
  ],
  "difficulty": "Intermediate",
  "marks": 5,
  "answerType": "vector",
  "questionText": "A plane passes through $\\mathbf{a} = \\mathbf{j} + \\mathbf{k}$ and contains the direction vectors $\\mathbf{u} = \\mathbf{i} + 2\\mathbf{j} + \\mathbf{k}$ and $\\mathbf{v} = 3\\mathbf{i} + 2\\mathbf{k}$. Write a vector equation of the plane.",
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Recall the parametric vector form",
        "workingLatex": "\\mathbf{r} = \\mathbf{a} + s\\mathbf{u} + t\\mathbf{v}",
        "explanation": "Starting at $\\mathbf{a}$ and moving along $\\mathbf{u}$ and $\\mathbf{v}$ reaches every point in the plane.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Identify the given vectors",
        "workingLatex": "\\mathbf{a} = \\mathbf{j} + \\mathbf{k},\\; \\mathbf{u} = \\mathbf{i} + 2\\mathbf{j} + \\mathbf{k},\\; \\mathbf{v} = 3\\mathbf{i} + 2\\mathbf{k}",
        "explanation": "The point and two non-parallel direction vectors define the plane.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Substitute into the formula",
        "workingLatex": "\\mathbf{r} = \\mathbf{j} + \\mathbf{k} + s(\\mathbf{i} + 2\\mathbf{j} + \\mathbf{k}) + t(3\\mathbf{i} + 2\\mathbf{k})",
        "explanation": "Insert the specific vectors from the question.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "State the vector equation",
        "workingLatex": "\\mathbf{r} = \\mathbf{j} + \\mathbf{k} + s(\\mathbf{i} + 2\\mathbf{j} + \\mathbf{k}) + t(3\\mathbf{i} + 2\\mathbf{k})",
        "explanation": "This describes the same plane as the scalar-product form.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Find the normal (optional check)",
        "workingLatex": "\\mathbf{n} = \\mathbf{u}\\times\\mathbf{v} = 4\\mathbf{i} + \\mathbf{j} - 6\\mathbf{k}",
        "explanation": "The cross product gives a normal for converting to Cartesian form.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Convert to scalar-product form",
        "workingLatex": "\\mathbf{r}\\cdot(4\\mathbf{i} + \\mathbf{j} - 6\\mathbf{k}) = -5",
        "explanation": "The constant is $\\mathbf{n}\\cdot\\mathbf{a}$, confirming consistency.",
        "diagram": null
      },
      {
        "stepNumber": 7,
        "description": "Note the parameters",
        "workingLatex": "s, t \\in \\mathbb{R}",
        "explanation": "Each choice of $s$ and $t$ locates one point in the plane.",
        "diagram": null
      }
    ],
    "finalAnswer": "$\\mathbf{r} = \\mathbf{j} + \\mathbf{k} + s(\\mathbf{i} + 2\\mathbf{j} + \\mathbf{k}) + t(3\\mathbf{i} + 2\\mathbf{k})$"
  }
},
{
  "level": "A-Level Further Maths",
  "topic": "Further Maths Year 1: Pure (Core Pure 1)",
  "subtopic": "Vectors: lines and planes",
  "subtopicId": "fm.y1.pure.vectors-lines-planes",
  "questionDiagram": null,
  "id": "fm.y1.pure.vectors-lines-planes.q038",
  "tags": [
    "vector-plane",
    "parametric-form"
  ],
  "difficulty": "Intermediate",
  "marks": 5,
  "answerType": "vector",
  "questionText": "A plane passes through $\\mathbf{a} = 2\\mathbf{i} + 2\\mathbf{j}$ and contains the direction vectors $\\mathbf{u} = \\mathbf{i} - \\mathbf{j} + 2\\mathbf{k}$ and $\\mathbf{v} = 2\\mathbf{j} + \\mathbf{k}$. Write a vector equation of the plane.",
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Recall the parametric vector form",
        "workingLatex": "\\mathbf{r} = \\mathbf{a} + s\\mathbf{u} + t\\mathbf{v}",
        "explanation": "Starting at $\\mathbf{a}$ and moving along $\\mathbf{u}$ and $\\mathbf{v}$ reaches every point in the plane.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Identify the given vectors",
        "workingLatex": "\\mathbf{a} = 2\\mathbf{i} + 2\\mathbf{j},\\; \\mathbf{u} = \\mathbf{i} - \\mathbf{j} + 2\\mathbf{k},\\; \\mathbf{v} = 2\\mathbf{j} + \\mathbf{k}",
        "explanation": "The point and two non-parallel direction vectors define the plane.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Substitute into the formula",
        "workingLatex": "\\mathbf{r} = 2\\mathbf{i} + 2\\mathbf{j} + s(\\mathbf{i} - \\mathbf{j} + 2\\mathbf{k}) + t(2\\mathbf{j} + \\mathbf{k})",
        "explanation": "Insert the specific vectors from the question.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "State the vector equation",
        "workingLatex": "\\mathbf{r} = 2\\mathbf{i} + 2\\mathbf{j} + s(\\mathbf{i} - \\mathbf{j} + 2\\mathbf{k}) + t(2\\mathbf{j} + \\mathbf{k})",
        "explanation": "This describes the same plane as the scalar-product form.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Find the normal (optional check)",
        "workingLatex": "\\mathbf{n} = \\mathbf{u}\\times\\mathbf{v} = -5\\mathbf{i} - \\mathbf{j} + 2\\mathbf{k}",
        "explanation": "The cross product gives a normal for converting to Cartesian form.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Convert to scalar-product form",
        "workingLatex": "\\mathbf{r}\\cdot(-5\\mathbf{i} - \\mathbf{j} + 2\\mathbf{k}) = -12",
        "explanation": "The constant is $\\mathbf{n}\\cdot\\mathbf{a}$, confirming consistency.",
        "diagram": null
      },
      {
        "stepNumber": 7,
        "description": "Note the parameters",
        "workingLatex": "s, t \\in \\mathbb{R}",
        "explanation": "Each choice of $s$ and $t$ locates one point in the plane.",
        "diagram": null
      }
    ],
    "finalAnswer": "$\\mathbf{r} = 2\\mathbf{i} + 2\\mathbf{j} + s(\\mathbf{i} - \\mathbf{j} + 2\\mathbf{k}) + t(2\\mathbf{j} + \\mathbf{k})$"
  }
},
{
  "level": "A-Level Further Maths",
  "topic": "Further Maths Year 1: Pure (Core Pure 1)",
  "subtopic": "Vectors: lines and planes",
  "subtopicId": "fm.y1.pure.vectors-lines-planes",
  "questionDiagram": null,
  "id": "fm.y1.pure.vectors-lines-planes.q039",
  "tags": [
    "vector-plane",
    "parametric-form"
  ],
  "difficulty": "Intermediate",
  "marks": 5,
  "answerType": "vector",
  "questionText": "A plane passes through $\\mathbf{a} = -\\mathbf{i} + 3\\mathbf{k}$ and contains the direction vectors $\\mathbf{u} = 2\\mathbf{i} + \\mathbf{k}$ and $\\mathbf{v} = \\mathbf{i} + 3\\mathbf{j} - \\mathbf{k}$. Write a vector equation of the plane.",
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Recall the parametric vector form",
        "workingLatex": "\\mathbf{r} = \\mathbf{a} + s\\mathbf{u} + t\\mathbf{v}",
        "explanation": "Starting at $\\mathbf{a}$ and moving along $\\mathbf{u}$ and $\\mathbf{v}$ reaches every point in the plane.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Identify the given vectors",
        "workingLatex": "\\mathbf{a} = -\\mathbf{i} + 3\\mathbf{k},\\; \\mathbf{u} = 2\\mathbf{i} + \\mathbf{k},\\; \\mathbf{v} = \\mathbf{i} + 3\\mathbf{j} - \\mathbf{k}",
        "explanation": "The point and two non-parallel direction vectors define the plane.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Substitute into the formula",
        "workingLatex": "\\mathbf{r} = -\\mathbf{i} + 3\\mathbf{k} + s(2\\mathbf{i} + \\mathbf{k}) + t(\\mathbf{i} + 3\\mathbf{j} - \\mathbf{k})",
        "explanation": "Insert the specific vectors from the question.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "State the vector equation",
        "workingLatex": "\\mathbf{r} = -\\mathbf{i} + 3\\mathbf{k} + s(2\\mathbf{i} + \\mathbf{k}) + t(\\mathbf{i} + 3\\mathbf{j} - \\mathbf{k})",
        "explanation": "This describes the same plane as the scalar-product form.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Find the normal (optional check)",
        "workingLatex": "\\mathbf{n} = \\mathbf{u}\\times\\mathbf{v} = -3\\mathbf{i} + 3\\mathbf{j} + 6\\mathbf{k}",
        "explanation": "The cross product gives a normal for converting to Cartesian form.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Convert to scalar-product form",
        "workingLatex": "\\mathbf{r}\\cdot(-3\\mathbf{i} + 3\\mathbf{j} + 6\\mathbf{k}) = 21",
        "explanation": "The constant is $\\mathbf{n}\\cdot\\mathbf{a}$, confirming consistency.",
        "diagram": null
      },
      {
        "stepNumber": 7,
        "description": "Note the parameters",
        "workingLatex": "s, t \\in \\mathbb{R}",
        "explanation": "Each choice of $s$ and $t$ locates one point in the plane.",
        "diagram": null
      }
    ],
    "finalAnswer": "$\\mathbf{r} = -\\mathbf{i} + 3\\mathbf{k} + s(2\\mathbf{i} + \\mathbf{k}) + t(\\mathbf{i} + 3\\mathbf{j} - \\mathbf{k})$"
  }
},
{
  "level": "A-Level Further Maths",
  "topic": "Further Maths Year 1: Pure (Core Pure 1)",
  "subtopic": "Vectors: lines and planes",
  "subtopicId": "fm.y1.pure.vectors-lines-planes",
  "questionDiagram": null,
  "id": "fm.y1.pure.vectors-lines-planes.q040",
  "tags": [
    "vector-plane",
    "parametric-form"
  ],
  "difficulty": "Intermediate",
  "marks": 5,
  "answerType": "vector",
  "questionText": "A plane passes through $\\mathbf{a} = 3\\mathbf{i} + \\mathbf{j} + 2\\mathbf{k}$ and contains the direction vectors $\\mathbf{u} = \\mathbf{i} + \\mathbf{j}$ and $\\mathbf{v} = \\mathbf{j} + 2\\mathbf{k}$. Write a vector equation of the plane.",
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Recall the parametric vector form",
        "workingLatex": "\\mathbf{r} = \\mathbf{a} + s\\mathbf{u} + t\\mathbf{v}",
        "explanation": "Starting at $\\mathbf{a}$ and moving along $\\mathbf{u}$ and $\\mathbf{v}$ reaches every point in the plane.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Identify the given vectors",
        "workingLatex": "\\mathbf{a} = 3\\mathbf{i} + \\mathbf{j} + 2\\mathbf{k},\\; \\mathbf{u} = \\mathbf{i} + \\mathbf{j},\\; \\mathbf{v} = \\mathbf{j} + 2\\mathbf{k}",
        "explanation": "The point and two non-parallel direction vectors define the plane.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Substitute into the formula",
        "workingLatex": "\\mathbf{r} = 3\\mathbf{i} + \\mathbf{j} + 2\\mathbf{k} + s(\\mathbf{i} + \\mathbf{j}) + t(\\mathbf{j} + 2\\mathbf{k})",
        "explanation": "Insert the specific vectors from the question.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "State the vector equation",
        "workingLatex": "\\mathbf{r} = 3\\mathbf{i} + \\mathbf{j} + 2\\mathbf{k} + s(\\mathbf{i} + \\mathbf{j}) + t(\\mathbf{j} + 2\\mathbf{k})",
        "explanation": "This describes the same plane as the scalar-product form.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Find the normal (optional check)",
        "workingLatex": "\\mathbf{n} = \\mathbf{u}\\times\\mathbf{v} = 2\\mathbf{i} - 2\\mathbf{j} + \\mathbf{k}",
        "explanation": "The cross product gives a normal for converting to Cartesian form.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Convert to scalar-product form",
        "workingLatex": "\\mathbf{r}\\cdot(2\\mathbf{i} - 2\\mathbf{j} + \\mathbf{k}) = 6",
        "explanation": "The constant is $\\mathbf{n}\\cdot\\mathbf{a}$, confirming consistency.",
        "diagram": null
      },
      {
        "stepNumber": 7,
        "description": "Note the parameters",
        "workingLatex": "s, t \\in \\mathbb{R}",
        "explanation": "Each choice of $s$ and $t$ locates one point in the plane.",
        "diagram": null
      }
    ],
    "finalAnswer": "$\\mathbf{r} = 3\\mathbf{i} + \\mathbf{j} + 2\\mathbf{k} + s(\\mathbf{i} + \\mathbf{j}) + t(\\mathbf{j} + 2\\mathbf{k})$"
  }
},
{
  "level": "A-Level Further Maths",
  "topic": "Further Maths Year 1: Pure (Core Pure 1)",
  "subtopic": "Vectors: lines and planes",
  "subtopicId": "fm.y1.pure.vectors-lines-planes",
  "questionDiagram": null,
  "id": "fm.y1.pure.vectors-lines-planes.q041",
  "tags": [
    "vector-line",
    "coordinates"
  ],
  "difficulty": "Intermediate",
  "marks": 4,
  "answerType": "written",
  "questionText": "The point $P$ lies on the line $\\mathbf{r} = \\mathbf{i} + 2\\mathbf{k} + \\lambda(2\\mathbf{i} + \\mathbf{j} - \\mathbf{k})$. Given that $\\lambda = 3$, find the coordinates of $P$.",
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Substitute $\\lambda$ into the line equation",
        "workingLatex": "\\mathbf{r} = \\mathbf{i} + 2\\mathbf{k} + (3)(2\\mathbf{i} + \\mathbf{j} - \\mathbf{k})",
        "explanation": "The parameter value pins down a single point on the line.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Scale the direction vector",
        "workingLatex": "3(2\\mathbf{i} + \\mathbf{j} - \\mathbf{k}) = 6\\mathbf{i} + 3\\mathbf{j} - 3\\mathbf{k}",
        "explanation": "Multiply each component of $\\mathbf{d}$ by $\\lambda$.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Add to $\\mathbf{a}$",
        "workingLatex": "\\mathbf{r} = 7\\mathbf{i} + 3\\mathbf{j} - \\mathbf{k}",
        "explanation": "Component-wise addition gives the position vector of $P$.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Read off the coordinates",
        "workingLatex": "P(7,\\,3,\\,-1)",
        "explanation": "The $\\mathbf{i}$, $\\mathbf{j}$ and $\\mathbf{k}$ coefficients are the $x$, $y$ and $z$ coordinates.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "State the answer",
        "workingLatex": "P(7,\\,3,\\,-1)",
        "explanation": "This is the required point on the line.",
        "diagram": null
      }
    ],
    "finalAnswer": "$P(7,\\,3,\\,-1)$"
  }
},
{
  "level": "A-Level Further Maths",
  "topic": "Further Maths Year 1: Pure (Core Pure 1)",
  "subtopic": "Vectors: lines and planes",
  "subtopicId": "fm.y1.pure.vectors-lines-planes",
  "questionDiagram": null,
  "id": "fm.y1.pure.vectors-lines-planes.q042",
  "tags": [
    "vector-line",
    "coordinates"
  ],
  "difficulty": "Intermediate",
  "marks": 4,
  "answerType": "written",
  "questionText": "The point $P$ lies on the line $\\mathbf{r} = 3\\mathbf{j} + \\mathbf{k} + \\lambda(\\mathbf{i} - 2\\mathbf{j} + 4\\mathbf{k})$. Given that $\\lambda = -2$, find the coordinates of $P$.",
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Substitute $\\lambda$ into the line equation",
        "workingLatex": "\\mathbf{r} = 3\\mathbf{j} + \\mathbf{k} + (-2)(\\mathbf{i} - 2\\mathbf{j} + 4\\mathbf{k})",
        "explanation": "The parameter value pins down a single point on the line.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Scale the direction vector",
        "workingLatex": "-2(\\mathbf{i} - 2\\mathbf{j} + 4\\mathbf{k}) = -2\\mathbf{i} + 4\\mathbf{j} - 8\\mathbf{k}",
        "explanation": "Multiply each component of $\\mathbf{d}$ by $\\lambda$.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Add to $\\mathbf{a}$",
        "workingLatex": "\\mathbf{r} = -2\\mathbf{i} + 7\\mathbf{j} - 7\\mathbf{k}",
        "explanation": "Component-wise addition gives the position vector of $P$.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Read off the coordinates",
        "workingLatex": "P(-2,\\,7,\\,-7)",
        "explanation": "The $\\mathbf{i}$, $\\mathbf{j}$ and $\\mathbf{k}$ coefficients are the $x$, $y$ and $z$ coordinates.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "State the answer",
        "workingLatex": "P(-2,\\,7,\\,-7)",
        "explanation": "This is the required point on the line.",
        "diagram": null
      }
    ],
    "finalAnswer": "$P(-2,\\,7,\\,-7)$"
  }
},
{
  "level": "A-Level Further Maths",
  "topic": "Further Maths Year 1: Pure (Core Pure 1)",
  "subtopic": "Vectors: lines and planes",
  "subtopicId": "fm.y1.pure.vectors-lines-planes",
  "questionDiagram": null,
  "id": "fm.y1.pure.vectors-lines-planes.q043",
  "tags": [
    "vector-line",
    "coordinates"
  ],
  "difficulty": "Intermediate",
  "marks": 4,
  "answerType": "written",
  "questionText": "The point $P$ lies on the line $\\mathbf{r} = 2\\mathbf{i} + \\mathbf{j} + \\lambda(3\\mathbf{i} + 2\\mathbf{k})$. Given that $\\lambda = 1$, find the coordinates of $P$.",
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Substitute $\\lambda$ into the line equation",
        "workingLatex": "\\mathbf{r} = 2\\mathbf{i} + \\mathbf{j} + (1)(3\\mathbf{i} + 2\\mathbf{k})",
        "explanation": "The parameter value pins down a single point on the line.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Scale the direction vector",
        "workingLatex": "1(3\\mathbf{i} + 2\\mathbf{k}) = 3\\mathbf{i} + 2\\mathbf{k}",
        "explanation": "Multiply each component of $\\mathbf{d}$ by $\\lambda$.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Add to $\\mathbf{a}$",
        "workingLatex": "\\mathbf{r} = 5\\mathbf{i} + \\mathbf{j} + 2\\mathbf{k}",
        "explanation": "Component-wise addition gives the position vector of $P$.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Read off the coordinates",
        "workingLatex": "P(5,\\,1,\\,2)",
        "explanation": "The $\\mathbf{i}$, $\\mathbf{j}$ and $\\mathbf{k}$ coefficients are the $x$, $y$ and $z$ coordinates.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "State the answer",
        "workingLatex": "P(5,\\,1,\\,2)",
        "explanation": "This is the required point on the line.",
        "diagram": null
      }
    ],
    "finalAnswer": "$P(5,\\,1,\\,2)$"
  }
},
{
  "level": "A-Level Further Maths",
  "topic": "Further Maths Year 1: Pure (Core Pure 1)",
  "subtopic": "Vectors: lines and planes",
  "subtopicId": "fm.y1.pure.vectors-lines-planes",
  "questionDiagram": null,
  "id": "fm.y1.pure.vectors-lines-planes.q044",
  "tags": [
    "vector-line",
    "coordinates"
  ],
  "difficulty": "Intermediate",
  "marks": 4,
  "answerType": "written",
  "questionText": "The point $P$ lies on the line $\\mathbf{r} = -\\mathbf{i} + 2\\mathbf{j} + 3\\mathbf{k} + \\lambda(\\mathbf{i} + \\mathbf{j} + \\mathbf{k})$. Given that $\\lambda = 4$, find the coordinates of $P$.",
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Substitute $\\lambda$ into the line equation",
        "workingLatex": "\\mathbf{r} = -\\mathbf{i} + 2\\mathbf{j} + 3\\mathbf{k} + (4)(\\mathbf{i} + \\mathbf{j} + \\mathbf{k})",
        "explanation": "The parameter value pins down a single point on the line.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Scale the direction vector",
        "workingLatex": "4(\\mathbf{i} + \\mathbf{j} + \\mathbf{k}) = 4\\mathbf{i} + 4\\mathbf{j} + 4\\mathbf{k}",
        "explanation": "Multiply each component of $\\mathbf{d}$ by $\\lambda$.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Add to $\\mathbf{a}$",
        "workingLatex": "\\mathbf{r} = 3\\mathbf{i} + 6\\mathbf{j} + 7\\mathbf{k}",
        "explanation": "Component-wise addition gives the position vector of $P$.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Read off the coordinates",
        "workingLatex": "P(3,\\,6,\\,7)",
        "explanation": "The $\\mathbf{i}$, $\\mathbf{j}$ and $\\mathbf{k}$ coefficients are the $x$, $y$ and $z$ coordinates.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "State the answer",
        "workingLatex": "P(3,\\,6,\\,7)",
        "explanation": "This is the required point on the line.",
        "diagram": null
      }
    ],
    "finalAnswer": "$P(3,\\,6,\\,7)$"
  }
},
{
  "level": "A-Level Further Maths",
  "topic": "Further Maths Year 1: Pure (Core Pure 1)",
  "subtopic": "Vectors: lines and planes",
  "subtopicId": "fm.y1.pure.vectors-lines-planes",
  "questionDiagram": null,
  "id": "fm.y1.pure.vectors-lines-planes.q045",
  "tags": [
    "vector-line",
    "coordinate-plane"
  ],
  "difficulty": "Intermediate",
  "marks": 5,
  "answerType": "written",
  "questionText": "The line $\\mathbf{r} = \\mathbf{i} + 2\\mathbf{j} + 3\\mathbf{k} + \\lambda(2\\mathbf{i} + \\mathbf{j} - \\mathbf{k})$ meets the plane $z=0$. Find the point of intersection.",
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Write the parametric components",
        "workingLatex": "x = 1 + 2\\lambda,\\; y = 2 + 1\\lambda,\\; z = 3 + -1\\lambda",
        "explanation": "Separate the vector equation into $x$, $y$ and $z$ relations.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Use the plane condition",
        "workingLatex": "z = 0",
        "explanation": "On the plane $z=0$, the z-coordinate is fixed at 0.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Solve for $\\lambda$",
        "workingLatex": "3 + -1\\lambda = 0 \\Rightarrow \\lambda = 3",
        "explanation": "Substitute into the ${coord}-component and solve.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Find the remaining coordinates",
        "workingLatex": "x = 7,\\; y = 5,\\; z = 0",
        "explanation": "Substitute $\\lambda = ${lam}$ back into all three components.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "State the intersection point",
        "workingLatex": "(7,\\,5,\\,0)",
        "explanation": "The point satisfies both the line and the plane equations.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Verify the plane condition",
        "workingLatex": "z = 0",
        "explanation": "The ${coord}-coordinate equals ${val}, confirming the point lies on $${plane}$.",
        "diagram": null
      }
    ],
    "finalAnswer": "$(7,\\,5,\\,0)$"
  }
},
{
  "level": "A-Level Further Maths",
  "topic": "Further Maths Year 1: Pure (Core Pure 1)",
  "subtopic": "Vectors: lines and planes",
  "subtopicId": "fm.y1.pure.vectors-lines-planes",
  "questionDiagram": null,
  "id": "fm.y1.pure.vectors-lines-planes.q046",
  "tags": [
    "vector-line",
    "coordinate-plane"
  ],
  "difficulty": "Intermediate",
  "marks": 5,
  "answerType": "written",
  "questionText": "The line $\\mathbf{r} = \\mathbf{j} + 4\\mathbf{k} + \\lambda(3\\mathbf{i} - \\mathbf{j} + 2\\mathbf{k})$ meets the plane $x=0$. Find the point of intersection.",
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Write the parametric components",
        "workingLatex": "x = 0 + 3\\lambda,\\; y = 1 + -1\\lambda,\\; z = 4 + 2\\lambda",
        "explanation": "Separate the vector equation into $x$, $y$ and $z$ relations.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Use the plane condition",
        "workingLatex": "x = 0",
        "explanation": "On the plane $x=0$, the x-coordinate is fixed at 0.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Solve for $\\lambda$",
        "workingLatex": "0 + 3\\lambda = 0 \\Rightarrow \\lambda = 0",
        "explanation": "Substitute into the ${coord}-component and solve.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Find the remaining coordinates",
        "workingLatex": "x = 0,\\; y = 1,\\; z = 4",
        "explanation": "Substitute $\\lambda = ${lam}$ back into all three components.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "State the intersection point",
        "workingLatex": "(0,\\,1,\\,4)",
        "explanation": "The point satisfies both the line and the plane equations.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Verify the plane condition",
        "workingLatex": "x = 0",
        "explanation": "The ${coord}-coordinate equals ${val}, confirming the point lies on $${plane}$.",
        "diagram": null
      }
    ],
    "finalAnswer": "$(0,\\,1,\\,4)$"
  }
},
{
  "level": "A-Level Further Maths",
  "topic": "Further Maths Year 1: Pure (Core Pure 1)",
  "subtopic": "Vectors: lines and planes",
  "subtopicId": "fm.y1.pure.vectors-lines-planes",
  "questionDiagram": null,
  "id": "fm.y1.pure.vectors-lines-planes.q047",
  "tags": [
    "vector-line",
    "coordinate-plane"
  ],
  "difficulty": "Intermediate",
  "marks": 5,
  "answerType": "written",
  "questionText": "The line $\\mathbf{r} = 2\\mathbf{i} + 5\\mathbf{k} + \\lambda(\\mathbf{i} + 2\\mathbf{j} + 3\\mathbf{k})$ meets the plane $y=0$. Find the point of intersection.",
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Write the parametric components",
        "workingLatex": "x = 2 + 1\\lambda,\\; y = 0 + 2\\lambda,\\; z = 5 + 3\\lambda",
        "explanation": "Separate the vector equation into $x$, $y$ and $z$ relations.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Use the plane condition",
        "workingLatex": "y = 0",
        "explanation": "On the plane $y=0$, the y-coordinate is fixed at 0.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Solve for $\\lambda$",
        "workingLatex": "0 + 2\\lambda = 0 \\Rightarrow \\lambda = 0",
        "explanation": "Substitute into the ${coord}-component and solve.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Find the remaining coordinates",
        "workingLatex": "x = 2,\\; y = 0,\\; z = 5",
        "explanation": "Substitute $\\lambda = ${lam}$ back into all three components.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "State the intersection point",
        "workingLatex": "(2,\\,0,\\,5)",
        "explanation": "The point satisfies both the line and the plane equations.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Verify the plane condition",
        "workingLatex": "y = 0",
        "explanation": "The ${coord}-coordinate equals ${val}, confirming the point lies on $${plane}$.",
        "diagram": null
      }
    ],
    "finalAnswer": "$(2,\\,0,\\,5)$"
  }
},
{
  "level": "A-Level Further Maths",
  "topic": "Further Maths Year 1: Pure (Core Pure 1)",
  "subtopic": "Vectors: lines and planes",
  "subtopicId": "fm.y1.pure.vectors-lines-planes",
  "questionDiagram": null,
  "id": "fm.y1.pure.vectors-lines-planes.q048",
  "tags": [
    "vector-line",
    "parallel"
  ],
  "difficulty": "Intermediate",
  "marks": 4,
  "answerType": "written",
  "questionText": "Line $L_1$ has direction vector $\\mathbf{d}_1 = 2\\mathbf{i} + 4\\mathbf{j} - 2\\mathbf{k}$ and line $L_2$ has direction vector $\\mathbf{d}_2 = \\mathbf{i} + 2\\mathbf{j} - \\mathbf{k}$. Determine whether the lines are parallel.",
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Recall the parallel condition",
        "workingLatex": "\\mathbf{d}_1 = k\\mathbf{d}_2 \\text{ for some } k \\neq 0",
        "explanation": "Two lines are parallel when their direction vectors are scalar multiples.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Compare component ratios",
        "workingLatex": "\\frac{2}{1},\\;\\frac{4}{2},\\;\\frac{-2}{-1}",
        "explanation": "If the lines are parallel, all non-zero component ratios must be equal.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Evaluate the ratios",
        "workingLatex": "k = 2 \\text{ for each component}",
        "explanation": "Every ratio gives the same scalar $k$.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Draw the conclusion",
        "workingLatex": "\\text{The lines are parallel}",
        "explanation": "$\\mathbf{d}_1 = 2\\mathbf{d}_2$, so the direction vectors are parallel.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "State the answer",
        "workingLatex": "\\mathbf{d}_1 = 2\\mathbf{d}_2",
        "explanation": "Parallelism depends only on the direction vectors, not on where the lines sit in space.",
        "diagram": null
      }
    ],
    "finalAnswer": "Yes, the lines are parallel ($\\mathbf{d}_1 = 2\\mathbf{d}_2$)."
  }
},
{
  "level": "A-Level Further Maths",
  "topic": "Further Maths Year 1: Pure (Core Pure 1)",
  "subtopic": "Vectors: lines and planes",
  "subtopicId": "fm.y1.pure.vectors-lines-planes",
  "questionDiagram": null,
  "id": "fm.y1.pure.vectors-lines-planes.q049",
  "tags": [
    "vector-line",
    "parallel"
  ],
  "difficulty": "Intermediate",
  "marks": 4,
  "answerType": "written",
  "questionText": "Line $L_1$ has direction vector $\\mathbf{d}_1 = 3\\mathbf{i} - \\mathbf{j}$ and line $L_2$ has direction vector $\\mathbf{d}_2 = 6\\mathbf{i} - 2\\mathbf{j}$. Determine whether the lines are parallel.",
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Recall the parallel condition",
        "workingLatex": "\\mathbf{d}_1 = k\\mathbf{d}_2 \\text{ for some } k \\neq 0",
        "explanation": "Two lines are parallel when their direction vectors are scalar multiples.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Compare component ratios",
        "workingLatex": "\\frac{3}{6},\\;\\frac{-1}{-2},\\;\\frac{0}{0}",
        "explanation": "If the lines are parallel, all non-zero component ratios must be equal.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Evaluate the ratios",
        "workingLatex": "k = 0.5 \\text{ for each component}",
        "explanation": "Every ratio gives the same scalar $k$.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Draw the conclusion",
        "workingLatex": "\\text{The lines are parallel}",
        "explanation": "$\\mathbf{d}_1 = 0.5\\mathbf{d}_2$, so the direction vectors are parallel.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "State the answer",
        "workingLatex": "\\mathbf{d}_1 = 0.5\\mathbf{d}_2",
        "explanation": "Parallelism depends only on the direction vectors, not on where the lines sit in space.",
        "diagram": null
      }
    ],
    "finalAnswer": "Yes, the lines are parallel ($\\mathbf{d}_1 = 0.5\\mathbf{d}_2$)."
  }
},
{
  "level": "A-Level Further Maths",
  "topic": "Further Maths Year 1: Pure (Core Pure 1)",
  "subtopic": "Vectors: lines and planes",
  "subtopicId": "fm.y1.pure.vectors-lines-planes",
  "questionDiagram": null,
  "id": "fm.y1.pure.vectors-lines-planes.q050",
  "tags": [
    "vector-line",
    "parallel"
  ],
  "difficulty": "Intermediate",
  "marks": 4,
  "answerType": "written",
  "questionText": "Line $L_1$ has direction vector $\\mathbf{d}_1 = \\mathbf{i} + 2\\mathbf{k}$ and line $L_2$ has direction vector $\\mathbf{d}_2 = 2\\mathbf{i} + \\mathbf{j} + 5\\mathbf{k}$. Determine whether the lines are parallel.",
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Recall the parallel condition",
        "workingLatex": "\\mathbf{d}_1 = k\\mathbf{d}_2 \\text{ for some } k \\neq 0",
        "explanation": "Two lines are parallel when their direction vectors are scalar multiples.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Compare component ratios",
        "workingLatex": "\\frac{1}{2},\\;\\frac{0}{1},\\;\\frac{2}{5}",
        "explanation": "If the lines are parallel, all non-zero component ratios must be equal.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Evaluate the ratios",
        "workingLatex": "\\text{ratios are not equal}",
        "explanation": "At least one ratio differs, so no single scalar works.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Draw the conclusion",
        "workingLatex": "\\text{The lines are not parallel}",
        "explanation": "The direction vectors are not scalar multiples, so the lines are not parallel.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "State the answer",
        "workingLatex": "\\text{not parallel}",
        "explanation": "Parallelism depends only on the direction vectors, not on where the lines sit in space.",
        "diagram": null
      }
    ],
    "finalAnswer": "No, the lines are not parallel."
  }
},
{
  "level": "A-Level Further Maths",
  "topic": "Further Maths Year 1: Pure (Core Pure 1)",
  "subtopic": "Vectors: lines and planes",
  "subtopicId": "fm.y1.pure.vectors-lines-planes",
  "questionDiagram": null,
  "id": "fm.y1.pure.vectors-lines-planes.q051",
  "tags": [
    "line-plane-intersection"
  ],
  "difficulty": "Hard",
  "marks": 7,
  "answerType": "written",
  "questionText": "Find the point where the line $\\mathbf{r} = \\mathbf{i} + 2\\mathbf{j} + 3\\mathbf{k} + \\lambda(2\\mathbf{i} + \\mathbf{j} - \\mathbf{k})$ meets the plane $\\mathbf{r}\\cdot(\\mathbf{i} + \\mathbf{j} + \\mathbf{k}) = 6$.",
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Substitute the line into the plane",
        "workingLatex": "(\\mathbf{i} + 2\\mathbf{j} + 3\\mathbf{k} + \\lambda2\\mathbf{i} + \\mathbf{j} - \\mathbf{k})\\cdot(\\mathbf{i} + \\mathbf{j} + \\mathbf{k}) = 6",
        "explanation": "Replace $\\mathbf{r}$ in the plane equation with the line expression.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Expand the scalar product",
        "workingLatex": "\\mathbf{a}\\cdot\\mathbf{n} + \\lambda(\\mathbf{d}\\cdot\\mathbf{n}) = 6",
        "explanation": "Distribute the dot product over the sum.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Compute $\\mathbf{a}\\cdot\\mathbf{n}$",
        "workingLatex": "\\mathbf{a}\\cdot\\mathbf{n} = 6",
        "explanation": "Multiply and add the corresponding components.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Compute $\\mathbf{d}\\cdot\\mathbf{n}$",
        "workingLatex": "\\mathbf{d}\\cdot\\mathbf{n} = 2",
        "explanation": "This is the coefficient of $\\lambda$.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Solve for $\\lambda$",
        "workingLatex": "6 + 2\\lambda = 6 \\Rightarrow \\lambda = 0",
        "explanation": "Rearrange the linear equation in $\\lambda$.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Substitute $\\lambda$ back into the line",
        "workingLatex": "\\mathbf{r} = \\mathbf{i} + 2\\mathbf{j} + 3\\mathbf{k} + 0(2\\mathbf{i} + \\mathbf{j} - \\mathbf{k}) = \\mathbf{i} + 2\\mathbf{j} + 3\\mathbf{k}",
        "explanation": "Insert the parameter value to find the position vector.",
        "diagram": null
      },
      {
        "stepNumber": 7,
        "description": "Read the coordinates",
        "workingLatex": "(1,\\,2,\\,3)",
        "explanation": "The components of $\\mathbf{r}$ give the intersection point.",
        "diagram": null
      },
      {
        "stepNumber": 8,
        "description": "Verify in the plane equation",
        "workingLatex": "1(1) + 1(2) + 1(3) = 6",
        "explanation": "Substituting back should give $${planeD}$.",
        "diagram": null
      },
      {
        "stepNumber": 9,
        "description": "Check $\\lambda$ is defined",
        "workingLatex": "\\mathbf{d}\\cdot\\mathbf{n} = 2 \\neq 0",
        "explanation": "A non-zero dot product means the line is not parallel to the plane, so a unique intersection exists.",
        "diagram": null
      },
      {
        "stepNumber": 10,
        "description": "State the intersection point",
        "workingLatex": "(1,\\,2,\\,3)",
        "explanation": "This point lies on both the line and the plane.",
        "diagram": null
      }
    ],
    "finalAnswer": "$(1,\\,2,\\,3)$"
  }
},
{
  "level": "A-Level Further Maths",
  "topic": "Further Maths Year 1: Pure (Core Pure 1)",
  "subtopic": "Vectors: lines and planes",
  "subtopicId": "fm.y1.pure.vectors-lines-planes",
  "questionDiagram": null,
  "id": "fm.y1.pure.vectors-lines-planes.q052",
  "tags": [
    "line-plane-intersection"
  ],
  "difficulty": "Hard",
  "marks": 7,
  "answerType": "written",
  "questionText": "Find the point where the line $\\mathbf{r} = \\mathbf{j} + 4\\mathbf{k} + \\lambda(3\\mathbf{i} - \\mathbf{j} + 2\\mathbf{k})$ meets the plane $\\mathbf{r}\\cdot(2\\mathbf{i} + \\mathbf{j} - \\mathbf{k}) = 3$.",
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Substitute the line into the plane",
        "workingLatex": "(\\mathbf{j} + 4\\mathbf{k} + \\lambda3\\mathbf{i} - \\mathbf{j} + 2\\mathbf{k})\\cdot(2\\mathbf{i} + \\mathbf{j} - \\mathbf{k}) = 3",
        "explanation": "Replace $\\mathbf{r}$ in the plane equation with the line expression.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Expand the scalar product",
        "workingLatex": "\\mathbf{a}\\cdot\\mathbf{n} + \\lambda(\\mathbf{d}\\cdot\\mathbf{n}) = 3",
        "explanation": "Distribute the dot product over the sum.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Compute $\\mathbf{a}\\cdot\\mathbf{n}$",
        "workingLatex": "\\mathbf{a}\\cdot\\mathbf{n} = -3",
        "explanation": "Multiply and add the corresponding components.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Compute $\\mathbf{d}\\cdot\\mathbf{n}$",
        "workingLatex": "\\mathbf{d}\\cdot\\mathbf{n} = 3",
        "explanation": "This is the coefficient of $\\lambda$.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Solve for $\\lambda$",
        "workingLatex": "-3 + 3\\lambda = 3 \\Rightarrow \\lambda = 2",
        "explanation": "Rearrange the linear equation in $\\lambda$.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Substitute $\\lambda$ back into the line",
        "workingLatex": "\\mathbf{r} = \\mathbf{j} + 4\\mathbf{k} + 2(3\\mathbf{i} - \\mathbf{j} + 2\\mathbf{k}) = 6\\mathbf{i} - \\mathbf{j} + 8\\mathbf{k}",
        "explanation": "Insert the parameter value to find the position vector.",
        "diagram": null
      },
      {
        "stepNumber": 7,
        "description": "Read the coordinates",
        "workingLatex": "(6,\\,-1,\\,8)",
        "explanation": "The components of $\\mathbf{r}$ give the intersection point.",
        "diagram": null
      },
      {
        "stepNumber": 8,
        "description": "Verify in the plane equation",
        "workingLatex": "2(6) + 1(-1) + -1(8) = 3",
        "explanation": "Substituting back should give $${planeD}$.",
        "diagram": null
      },
      {
        "stepNumber": 9,
        "description": "Check $\\lambda$ is defined",
        "workingLatex": "\\mathbf{d}\\cdot\\mathbf{n} = 3 \\neq 0",
        "explanation": "A non-zero dot product means the line is not parallel to the plane, so a unique intersection exists.",
        "diagram": null
      },
      {
        "stepNumber": 10,
        "description": "State the intersection point",
        "workingLatex": "(6,\\,-1,\\,8)",
        "explanation": "This point lies on both the line and the plane.",
        "diagram": null
      }
    ],
    "finalAnswer": "$(6,\\,-1,\\,8)$"
  }
},
{
  "level": "A-Level Further Maths",
  "topic": "Further Maths Year 1: Pure (Core Pure 1)",
  "subtopic": "Vectors: lines and planes",
  "subtopicId": "fm.y1.pure.vectors-lines-planes",
  "questionDiagram": null,
  "id": "fm.y1.pure.vectors-lines-planes.q053",
  "tags": [
    "line-plane-intersection"
  ],
  "difficulty": "Hard",
  "marks": 7,
  "answerType": "written",
  "questionText": "Find the point where the line $\\mathbf{r} = 2\\mathbf{i} + \\mathbf{k} + \\lambda(\\mathbf{i} + 2\\mathbf{j} + 3\\mathbf{k})$ meets the plane $\\mathbf{r}\\cdot(\\mathbf{i} + 2\\mathbf{k}) = 5$.",
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Substitute the line into the plane",
        "workingLatex": "(2\\mathbf{i} + \\mathbf{k} + \\lambda\\mathbf{i} + 2\\mathbf{j} + 3\\mathbf{k})\\cdot(\\mathbf{i} + 2\\mathbf{k}) = 5",
        "explanation": "Replace $\\mathbf{r}$ in the plane equation with the line expression.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Expand the scalar product",
        "workingLatex": "\\mathbf{a}\\cdot\\mathbf{n} + \\lambda(\\mathbf{d}\\cdot\\mathbf{n}) = 5",
        "explanation": "Distribute the dot product over the sum.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Compute $\\mathbf{a}\\cdot\\mathbf{n}$",
        "workingLatex": "\\mathbf{a}\\cdot\\mathbf{n} = 4",
        "explanation": "Multiply and add the corresponding components.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Compute $\\mathbf{d}\\cdot\\mathbf{n}$",
        "workingLatex": "\\mathbf{d}\\cdot\\mathbf{n} = 7",
        "explanation": "This is the coefficient of $\\lambda$.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Solve for $\\lambda$",
        "workingLatex": "4 + 7\\lambda = 5 \\Rightarrow \\lambda = 0.14285714285714285",
        "explanation": "Rearrange the linear equation in $\\lambda$.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Substitute $\\lambda$ back into the line",
        "workingLatex": "\\mathbf{r} = 2\\mathbf{i} + \\mathbf{k} + 0.14285714285714285(\\mathbf{i} + 2\\mathbf{j} + 3\\mathbf{k}) = 2.142857142857143\\mathbf{i} + 0.2857142857142857\\mathbf{j} + 1.4285714285714286\\mathbf{k}",
        "explanation": "Insert the parameter value to find the position vector.",
        "diagram": null
      },
      {
        "stepNumber": 7,
        "description": "Read the coordinates",
        "workingLatex": "(2.142857142857143,\\,0.2857142857142857,\\,1.4285714285714286)",
        "explanation": "The components of $\\mathbf{r}$ give the intersection point.",
        "diagram": null
      },
      {
        "stepNumber": 8,
        "description": "Verify in the plane equation",
        "workingLatex": "1(2.142857142857143) + 0(0.2857142857142857) + 2(1.4285714285714286) = 5",
        "explanation": "Substituting back should give $${planeD}$.",
        "diagram": null
      },
      {
        "stepNumber": 9,
        "description": "Check $\\lambda$ is defined",
        "workingLatex": "\\mathbf{d}\\cdot\\mathbf{n} = 7 \\neq 0",
        "explanation": "A non-zero dot product means the line is not parallel to the plane, so a unique intersection exists.",
        "diagram": null
      },
      {
        "stepNumber": 10,
        "description": "State the intersection point",
        "workingLatex": "(2.142857142857143,\\,0.2857142857142857,\\,1.4285714285714286)",
        "explanation": "This point lies on both the line and the plane.",
        "diagram": null
      }
    ],
    "finalAnswer": "$(2.142857142857143,\\,0.2857142857142857,\\,1.4285714285714286)$"
  }
},
{
  "level": "A-Level Further Maths",
  "topic": "Further Maths Year 1: Pure (Core Pure 1)",
  "subtopic": "Vectors: lines and planes",
  "subtopicId": "fm.y1.pure.vectors-lines-planes",
  "questionDiagram": null,
  "id": "fm.y1.pure.vectors-lines-planes.q054",
  "tags": [
    "line-plane-intersection"
  ],
  "difficulty": "Hard",
  "marks": 7,
  "answerType": "written",
  "questionText": "Find the point where the line $\\mathbf{r} = -\\mathbf{i} + 3\\mathbf{j} + 2\\mathbf{k} + \\lambda(2\\mathbf{i} + 4\\mathbf{k})$ meets the plane $\\mathbf{r}\\cdot(3\\mathbf{i} + 2\\mathbf{j} - \\mathbf{k}) = 4$.",
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Substitute the line into the plane",
        "workingLatex": "(-\\mathbf{i} + 3\\mathbf{j} + 2\\mathbf{k} + \\lambda2\\mathbf{i} + 4\\mathbf{k})\\cdot(3\\mathbf{i} + 2\\mathbf{j} - \\mathbf{k}) = 4",
        "explanation": "Replace $\\mathbf{r}$ in the plane equation with the line expression.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Expand the scalar product",
        "workingLatex": "\\mathbf{a}\\cdot\\mathbf{n} + \\lambda(\\mathbf{d}\\cdot\\mathbf{n}) = 4",
        "explanation": "Distribute the dot product over the sum.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Compute $\\mathbf{a}\\cdot\\mathbf{n}$",
        "workingLatex": "\\mathbf{a}\\cdot\\mathbf{n} = 1",
        "explanation": "Multiply and add the corresponding components.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Compute $\\mathbf{d}\\cdot\\mathbf{n}$",
        "workingLatex": "\\mathbf{d}\\cdot\\mathbf{n} = 2",
        "explanation": "This is the coefficient of $\\lambda$.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Solve for $\\lambda$",
        "workingLatex": "1 + 2\\lambda = 4 \\Rightarrow \\lambda = 1.5",
        "explanation": "Rearrange the linear equation in $\\lambda$.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Substitute $\\lambda$ back into the line",
        "workingLatex": "\\mathbf{r} = -\\mathbf{i} + 3\\mathbf{j} + 2\\mathbf{k} + 1.5(2\\mathbf{i} + 4\\mathbf{k}) = 2\\mathbf{i} + 3\\mathbf{j} + 8\\mathbf{k}",
        "explanation": "Insert the parameter value to find the position vector.",
        "diagram": null
      },
      {
        "stepNumber": 7,
        "description": "Read the coordinates",
        "workingLatex": "(2,\\,3,\\,8)",
        "explanation": "The components of $\\mathbf{r}$ give the intersection point.",
        "diagram": null
      },
      {
        "stepNumber": 8,
        "description": "Verify in the plane equation",
        "workingLatex": "3(2) + 2(3) + -1(8) = 4",
        "explanation": "Substituting back should give $${planeD}$.",
        "diagram": null
      },
      {
        "stepNumber": 9,
        "description": "Check $\\lambda$ is defined",
        "workingLatex": "\\mathbf{d}\\cdot\\mathbf{n} = 2 \\neq 0",
        "explanation": "A non-zero dot product means the line is not parallel to the plane, so a unique intersection exists.",
        "diagram": null
      },
      {
        "stepNumber": 10,
        "description": "State the intersection point",
        "workingLatex": "(2,\\,3,\\,8)",
        "explanation": "This point lies on both the line and the plane.",
        "diagram": null
      }
    ],
    "finalAnswer": "$(2,\\,3,\\,8)$"
  }
},
{
  "level": "A-Level Further Maths",
  "topic": "Further Maths Year 1: Pure (Core Pure 1)",
  "subtopic": "Vectors: lines and planes",
  "subtopicId": "fm.y1.pure.vectors-lines-planes",
  "questionDiagram": null,
  "id": "fm.y1.pure.vectors-lines-planes.q055",
  "tags": [
    "line-plane-intersection"
  ],
  "difficulty": "Hard",
  "marks": 7,
  "answerType": "written",
  "questionText": "Find the point where the line $\\mathbf{r} = 4\\mathbf{i} + \\mathbf{j} + \\lambda(\\mathbf{i} + 3\\mathbf{j} - 2\\mathbf{k})$ meets the plane $\\mathbf{r}\\cdot(\\mathbf{j} + \\mathbf{k}) = 2$.",
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Substitute the line into the plane",
        "workingLatex": "(4\\mathbf{i} + \\mathbf{j} + \\lambda\\mathbf{i} + 3\\mathbf{j} - 2\\mathbf{k})\\cdot(\\mathbf{j} + \\mathbf{k}) = 2",
        "explanation": "Replace $\\mathbf{r}$ in the plane equation with the line expression.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Expand the scalar product",
        "workingLatex": "\\mathbf{a}\\cdot\\mathbf{n} + \\lambda(\\mathbf{d}\\cdot\\mathbf{n}) = 2",
        "explanation": "Distribute the dot product over the sum.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Compute $\\mathbf{a}\\cdot\\mathbf{n}$",
        "workingLatex": "\\mathbf{a}\\cdot\\mathbf{n} = 1",
        "explanation": "Multiply and add the corresponding components.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Compute $\\mathbf{d}\\cdot\\mathbf{n}$",
        "workingLatex": "\\mathbf{d}\\cdot\\mathbf{n} = 1",
        "explanation": "This is the coefficient of $\\lambda$.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Solve for $\\lambda$",
        "workingLatex": "1 + 1\\lambda = 2 \\Rightarrow \\lambda = 1",
        "explanation": "Rearrange the linear equation in $\\lambda$.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Substitute $\\lambda$ back into the line",
        "workingLatex": "\\mathbf{r} = 4\\mathbf{i} + \\mathbf{j} + 1(\\mathbf{i} + 3\\mathbf{j} - 2\\mathbf{k}) = 5\\mathbf{i} + 4\\mathbf{j} - 2\\mathbf{k}",
        "explanation": "Insert the parameter value to find the position vector.",
        "diagram": null
      },
      {
        "stepNumber": 7,
        "description": "Read the coordinates",
        "workingLatex": "(5,\\,4,\\,-2)",
        "explanation": "The components of $\\mathbf{r}$ give the intersection point.",
        "diagram": null
      },
      {
        "stepNumber": 8,
        "description": "Verify in the plane equation",
        "workingLatex": "0(5) + 1(4) + 1(-2) = 2",
        "explanation": "Substituting back should give $${planeD}$.",
        "diagram": null
      },
      {
        "stepNumber": 9,
        "description": "Check $\\lambda$ is defined",
        "workingLatex": "\\mathbf{d}\\cdot\\mathbf{n} = 1 \\neq 0",
        "explanation": "A non-zero dot product means the line is not parallel to the plane, so a unique intersection exists.",
        "diagram": null
      },
      {
        "stepNumber": 10,
        "description": "State the intersection point",
        "workingLatex": "(5,\\,4,\\,-2)",
        "explanation": "This point lies on both the line and the plane.",
        "diagram": null
      }
    ],
    "finalAnswer": "$(5,\\,4,\\,-2)$"
  }
},
{
  "level": "A-Level Further Maths",
  "topic": "Further Maths Year 1: Pure (Core Pure 1)",
  "subtopic": "Vectors: lines and planes",
  "subtopicId": "fm.y1.pure.vectors-lines-planes",
  "questionDiagram": null,
  "id": "fm.y1.pure.vectors-lines-planes.q056",
  "tags": [
    "line-plane-intersection"
  ],
  "difficulty": "Hard",
  "marks": 7,
  "answerType": "written",
  "questionText": "Find the point where the line $\\mathbf{r} = \\mathbf{i} - 2\\mathbf{j} + 4\\mathbf{k} + \\lambda(2\\mathbf{j} + \\mathbf{k})$ meets the plane $\\mathbf{r}\\cdot(2\\mathbf{i} - \\mathbf{j} + 3\\mathbf{k}) = 7$.",
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Substitute the line into the plane",
        "workingLatex": "(\\mathbf{i} - 2\\mathbf{j} + 4\\mathbf{k} + \\lambda2\\mathbf{j} + \\mathbf{k})\\cdot(2\\mathbf{i} - \\mathbf{j} + 3\\mathbf{k}) = 7",
        "explanation": "Replace $\\mathbf{r}$ in the plane equation with the line expression.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Expand the scalar product",
        "workingLatex": "\\mathbf{a}\\cdot\\mathbf{n} + \\lambda(\\mathbf{d}\\cdot\\mathbf{n}) = 7",
        "explanation": "Distribute the dot product over the sum.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Compute $\\mathbf{a}\\cdot\\mathbf{n}$",
        "workingLatex": "\\mathbf{a}\\cdot\\mathbf{n} = 16",
        "explanation": "Multiply and add the corresponding components.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Compute $\\mathbf{d}\\cdot\\mathbf{n}$",
        "workingLatex": "\\mathbf{d}\\cdot\\mathbf{n} = 1",
        "explanation": "This is the coefficient of $\\lambda$.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Solve for $\\lambda$",
        "workingLatex": "16 + 1\\lambda = 7 \\Rightarrow \\lambda = -9",
        "explanation": "Rearrange the linear equation in $\\lambda$.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Substitute $\\lambda$ back into the line",
        "workingLatex": "\\mathbf{r} = \\mathbf{i} - 2\\mathbf{j} + 4\\mathbf{k} + -9(2\\mathbf{j} + \\mathbf{k}) = \\mathbf{i} - 20\\mathbf{j} - 5\\mathbf{k}",
        "explanation": "Insert the parameter value to find the position vector.",
        "diagram": null
      },
      {
        "stepNumber": 7,
        "description": "Read the coordinates",
        "workingLatex": "(1,\\,-20,\\,-5)",
        "explanation": "The components of $\\mathbf{r}$ give the intersection point.",
        "diagram": null
      },
      {
        "stepNumber": 8,
        "description": "Verify in the plane equation",
        "workingLatex": "2(1) + -1(-20) + 3(-5) = 7",
        "explanation": "Substituting back should give $${planeD}$.",
        "diagram": null
      },
      {
        "stepNumber": 9,
        "description": "Check $\\lambda$ is defined",
        "workingLatex": "\\mathbf{d}\\cdot\\mathbf{n} = 1 \\neq 0",
        "explanation": "A non-zero dot product means the line is not parallel to the plane, so a unique intersection exists.",
        "diagram": null
      },
      {
        "stepNumber": 10,
        "description": "State the intersection point",
        "workingLatex": "(1,\\,-20,\\,-5)",
        "explanation": "This point lies on both the line and the plane.",
        "diagram": null
      }
    ],
    "finalAnswer": "$(1,\\,-20,\\,-5)$"
  }
},
{
  "level": "A-Level Further Maths",
  "topic": "Further Maths Year 1: Pure (Core Pure 1)",
  "subtopic": "Vectors: lines and planes",
  "subtopicId": "fm.y1.pure.vectors-lines-planes",
  "questionDiagram": null,
  "id": "fm.y1.pure.vectors-lines-planes.q057",
  "tags": [
    "line-plane-intersection"
  ],
  "difficulty": "Hard",
  "marks": 7,
  "answerType": "written",
  "questionText": "Find the point where the line $\\mathbf{r} = 3\\mathbf{i} + 2\\mathbf{j} + \\mathbf{k} + \\lambda(2\\mathbf{i} + \\mathbf{j})$ meets the plane $\\mathbf{r}\\cdot(\\mathbf{i} - 2\\mathbf{j} + 2\\mathbf{k}) = 1$.",
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Substitute the line into the plane",
        "workingLatex": "(3\\mathbf{i} + 2\\mathbf{j} + \\mathbf{k} + \\lambda2\\mathbf{i} + \\mathbf{j})\\cdot(\\mathbf{i} - 2\\mathbf{j} + 2\\mathbf{k}) = 1",
        "explanation": "Replace $\\mathbf{r}$ in the plane equation with the line expression.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Expand the scalar product",
        "workingLatex": "\\mathbf{a}\\cdot\\mathbf{n} + \\lambda(\\mathbf{d}\\cdot\\mathbf{n}) = 1",
        "explanation": "Distribute the dot product over the sum.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Compute $\\mathbf{a}\\cdot\\mathbf{n}$",
        "workingLatex": "\\mathbf{a}\\cdot\\mathbf{n} = 1",
        "explanation": "Multiply and add the corresponding components.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Compute $\\mathbf{d}\\cdot\\mathbf{n}$",
        "workingLatex": "\\mathbf{d}\\cdot\\mathbf{n} = 0",
        "explanation": "This is the coefficient of $\\lambda$.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Solve for $\\lambda$",
        "workingLatex": "1 + 0\\lambda = 1 \\Rightarrow \\lambda = NaN",
        "explanation": "Rearrange the linear equation in $\\lambda$.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Substitute $\\lambda$ back into the line",
        "workingLatex": "\\mathbf{r} = 3\\mathbf{i} + 2\\mathbf{j} + \\mathbf{k} + NaN(2\\mathbf{i} + \\mathbf{j}) = \\mathbf{0}",
        "explanation": "Insert the parameter value to find the position vector.",
        "diagram": null
      },
      {
        "stepNumber": 7,
        "description": "Read the coordinates",
        "workingLatex": "(NaN,\\,NaN,\\,NaN)",
        "explanation": "The components of $\\mathbf{r}$ give the intersection point.",
        "diagram": null
      },
      {
        "stepNumber": 8,
        "description": "Verify in the plane equation",
        "workingLatex": "1(NaN) + -2(NaN) + 2(NaN) = NaN",
        "explanation": "Substituting back should give $${planeD}$.",
        "diagram": null
      },
      {
        "stepNumber": 9,
        "description": "Check $\\lambda$ is defined",
        "workingLatex": "\\text{line parallel to plane}",
        "explanation": "",
        "diagram": null
      },
      {
        "stepNumber": 10,
        "description": "State the intersection point",
        "workingLatex": "(NaN,\\,NaN,\\,NaN)",
        "explanation": "This point lies on both the line and the plane.",
        "diagram": null
      }
    ],
    "finalAnswer": "$(NaN,\\,NaN,\\,NaN)$"
  }
},
{
  "level": "A-Level Further Maths",
  "topic": "Further Maths Year 1: Pure (Core Pure 1)",
  "subtopic": "Vectors: lines and planes",
  "subtopicId": "fm.y1.pure.vectors-lines-planes",
  "questionDiagram": null,
  "id": "fm.y1.pure.vectors-lines-planes.q058",
  "tags": [
    "plane-intersection",
    "line-of-intersection"
  ],
  "difficulty": "Hard",
  "marks": 8,
  "answerType": "vector",
  "questionText": "The planes $\\Pi_1: \\mathbf{r}\\cdot(\\mathbf{i} + \\mathbf{j} + \\mathbf{k}) = 6$ and $\\Pi_2: \\mathbf{r}\\cdot(2\\mathbf{i} - \\mathbf{j} + 3\\mathbf{k}) = 5$ intersect in a line. Find a vector equation of the line of intersection.",
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Find the direction of the intersection line",
        "workingLatex": "\\mathbf{d} = \\mathbf{n}_1 \\times \\mathbf{n}_2",
        "explanation": "The line direction is perpendicular to both normals, so it lies in both planes.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Compute the cross product",
        "workingLatex": "\\mathbf{d} = 4\\mathbf{i} - \\mathbf{j} - 3\\mathbf{k}",
        "explanation": "Apply the cross-product formula to the two normals.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Find a point on both planes",
        "workingLatex": "\\text{solve } \\mathbf{n}_1\\cdot\\mathbf{r}=d_1,\\; \\mathbf{n}_2\\cdot\\mathbf{r}=d_2",
        "explanation": "Any common point anchors the line equation.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Set one coordinate to zero",
        "workingLatex": "\\text{let } z = 0",
        "explanation": "Fixing one variable reduces the problem to two simultaneous equations.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Solve the simultaneous equations",
        "workingLatex": "\\mathbf{a} = 3.25\\mathbf{j} + 2.75\\mathbf{k}",
        "explanation": "The solution gives a position vector on the line of intersection.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Verify the point lies on $\\Pi_1$",
        "workingLatex": "\\mathbf{a}\\cdot\\mathbf{n}_1 = 6 = 6",
        "explanation": "Substituting confirms the point satisfies the first plane.",
        "diagram": null
      },
      {
        "stepNumber": 7,
        "description": "Verify the point lies on $\\Pi_2$",
        "workingLatex": "\\mathbf{a}\\cdot\\mathbf{n}_2 = 5 = 5",
        "explanation": "The point also satisfies the second plane.",
        "diagram": null
      },
      {
        "stepNumber": 8,
        "description": "Write the vector equation",
        "workingLatex": "\\mathbf{r} = 3.25\\mathbf{j} + 2.75\\mathbf{k} + \\lambda(4\\mathbf{i} - \\mathbf{j} - 3\\mathbf{k})",
        "explanation": "Combine the known point with the cross-product direction.",
        "diagram": null
      },
      {
        "stepNumber": 9,
        "description": "Note the direction is valid",
        "workingLatex": "\\mathbf{d}\\cdot\\mathbf{n}_1 = 0,\\; \\mathbf{d}\\cdot\\mathbf{n}_2 = 0",
        "explanation": "The direction is perpendicular to both normals, so moving along it stays in both planes.",
        "diagram": null
      },
      {
        "stepNumber": 10,
        "description": "State the line of intersection",
        "workingLatex": "\\mathbf{r} = 3.25\\mathbf{j} + 2.75\\mathbf{k} + \\lambda(4\\mathbf{i} - \\mathbf{j} - 3\\mathbf{k})",
        "explanation": "This line is the set of points common to both planes.",
        "diagram": null
      }
    ],
    "finalAnswer": "$\\mathbf{r} = 3.25\\mathbf{j} + 2.75\\mathbf{k} + \\lambda(4\\mathbf{i} - \\mathbf{j} - 3\\mathbf{k})$"
  }
},
{
  "level": "A-Level Further Maths",
  "topic": "Further Maths Year 1: Pure (Core Pure 1)",
  "subtopic": "Vectors: lines and planes",
  "subtopicId": "fm.y1.pure.vectors-lines-planes",
  "questionDiagram": null,
  "id": "fm.y1.pure.vectors-lines-planes.q059",
  "tags": [
    "plane-intersection",
    "line-of-intersection"
  ],
  "difficulty": "Hard",
  "marks": 8,
  "answerType": "vector",
  "questionText": "The planes $\\Pi_1: \\mathbf{r}\\cdot(\\mathbf{i} + 2\\mathbf{k}) = 4$ and $\\Pi_2: \\mathbf{r}\\cdot(\\mathbf{j} + \\mathbf{k}) = 3$ intersect in a line. Find a vector equation of the line of intersection.",
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Find the direction of the intersection line",
        "workingLatex": "\\mathbf{d} = \\mathbf{n}_1 \\times \\mathbf{n}_2",
        "explanation": "The line direction is perpendicular to both normals, so it lies in both planes.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Compute the cross product",
        "workingLatex": "\\mathbf{d} = -2\\mathbf{i} - \\mathbf{j} + \\mathbf{k}",
        "explanation": "Apply the cross-product formula to the two normals.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Find a point on both planes",
        "workingLatex": "\\text{solve } \\mathbf{n}_1\\cdot\\mathbf{r}=d_1,\\; \\mathbf{n}_2\\cdot\\mathbf{r}=d_2",
        "explanation": "Any common point anchors the line equation.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Set one coordinate to zero",
        "workingLatex": "\\text{let } z = 0",
        "explanation": "Fixing one variable reduces the problem to two simultaneous equations.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Solve the simultaneous equations",
        "workingLatex": "\\mathbf{a} = \\mathbf{j} + 2\\mathbf{k}",
        "explanation": "The solution gives a position vector on the line of intersection.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Verify the point lies on $\\Pi_1$",
        "workingLatex": "\\mathbf{a}\\cdot\\mathbf{n}_1 = 4 = 4",
        "explanation": "Substituting confirms the point satisfies the first plane.",
        "diagram": null
      },
      {
        "stepNumber": 7,
        "description": "Verify the point lies on $\\Pi_2$",
        "workingLatex": "\\mathbf{a}\\cdot\\mathbf{n}_2 = 3 = 3",
        "explanation": "The point also satisfies the second plane.",
        "diagram": null
      },
      {
        "stepNumber": 8,
        "description": "Write the vector equation",
        "workingLatex": "\\mathbf{r} = \\mathbf{j} + 2\\mathbf{k} + \\lambda(-2\\mathbf{i} - \\mathbf{j} + \\mathbf{k})",
        "explanation": "Combine the known point with the cross-product direction.",
        "diagram": null
      },
      {
        "stepNumber": 9,
        "description": "Note the direction is valid",
        "workingLatex": "\\mathbf{d}\\cdot\\mathbf{n}_1 = 0,\\; \\mathbf{d}\\cdot\\mathbf{n}_2 = 0",
        "explanation": "The direction is perpendicular to both normals, so moving along it stays in both planes.",
        "diagram": null
      },
      {
        "stepNumber": 10,
        "description": "State the line of intersection",
        "workingLatex": "\\mathbf{r} = \\mathbf{j} + 2\\mathbf{k} + \\lambda(-2\\mathbf{i} - \\mathbf{j} + \\mathbf{k})",
        "explanation": "This line is the set of points common to both planes.",
        "diagram": null
      }
    ],
    "finalAnswer": "$\\mathbf{r} = \\mathbf{j} + 2\\mathbf{k} + \\lambda(-2\\mathbf{i} - \\mathbf{j} + \\mathbf{k})$"
  }
},
{
  "level": "A-Level Further Maths",
  "topic": "Further Maths Year 1: Pure (Core Pure 1)",
  "subtopic": "Vectors: lines and planes",
  "subtopicId": "fm.y1.pure.vectors-lines-planes",
  "questionDiagram": null,
  "id": "fm.y1.pure.vectors-lines-planes.q060",
  "tags": [
    "plane-intersection",
    "line-of-intersection"
  ],
  "difficulty": "Hard",
  "marks": 8,
  "answerType": "vector",
  "questionText": "The planes $\\Pi_1: \\mathbf{r}\\cdot(3\\mathbf{i} + 2\\mathbf{j} - \\mathbf{k}) = 7$ and $\\Pi_2: \\mathbf{r}\\cdot(\\mathbf{i} + \\mathbf{j}) = 2$ intersect in a line. Find a vector equation of the line of intersection.",
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Find the direction of the intersection line",
        "workingLatex": "\\mathbf{d} = \\mathbf{n}_1 \\times \\mathbf{n}_2",
        "explanation": "The line direction is perpendicular to both normals, so it lies in both planes.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Compute the cross product",
        "workingLatex": "\\mathbf{d} = \\mathbf{i} - \\mathbf{j} + \\mathbf{k}",
        "explanation": "Apply the cross-product formula to the two normals.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Find a point on both planes",
        "workingLatex": "\\text{solve } \\mathbf{n}_1\\cdot\\mathbf{r}=d_1,\\; \\mathbf{n}_2\\cdot\\mathbf{r}=d_2",
        "explanation": "Any common point anchors the line equation.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Set one coordinate to zero",
        "workingLatex": "\\text{let } z = 0",
        "explanation": "Fixing one variable reduces the problem to two simultaneous equations.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Solve the simultaneous equations",
        "workingLatex": "\\mathbf{a} = 2\\mathbf{j} - 3\\mathbf{k}",
        "explanation": "The solution gives a position vector on the line of intersection.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Verify the point lies on $\\Pi_1$",
        "workingLatex": "\\mathbf{a}\\cdot\\mathbf{n}_1 = 7 = 7",
        "explanation": "Substituting confirms the point satisfies the first plane.",
        "diagram": null
      },
      {
        "stepNumber": 7,
        "description": "Verify the point lies on $\\Pi_2$",
        "workingLatex": "\\mathbf{a}\\cdot\\mathbf{n}_2 = 2 = 2",
        "explanation": "The point also satisfies the second plane.",
        "diagram": null
      },
      {
        "stepNumber": 8,
        "description": "Write the vector equation",
        "workingLatex": "\\mathbf{r} = 2\\mathbf{j} - 3\\mathbf{k} + \\lambda(\\mathbf{i} - \\mathbf{j} + \\mathbf{k})",
        "explanation": "Combine the known point with the cross-product direction.",
        "diagram": null
      },
      {
        "stepNumber": 9,
        "description": "Note the direction is valid",
        "workingLatex": "\\mathbf{d}\\cdot\\mathbf{n}_1 = 0,\\; \\mathbf{d}\\cdot\\mathbf{n}_2 = 0",
        "explanation": "The direction is perpendicular to both normals, so moving along it stays in both planes.",
        "diagram": null
      },
      {
        "stepNumber": 10,
        "description": "State the line of intersection",
        "workingLatex": "\\mathbf{r} = 2\\mathbf{j} - 3\\mathbf{k} + \\lambda(\\mathbf{i} - \\mathbf{j} + \\mathbf{k})",
        "explanation": "This line is the set of points common to both planes.",
        "diagram": null
      }
    ],
    "finalAnswer": "$\\mathbf{r} = 2\\mathbf{j} - 3\\mathbf{k} + \\lambda(\\mathbf{i} - \\mathbf{j} + \\mathbf{k})$"
  }
},
{
  "level": "A-Level Further Maths",
  "topic": "Further Maths Year 1: Pure (Core Pure 1)",
  "subtopic": "Vectors: lines and planes",
  "subtopicId": "fm.y1.pure.vectors-lines-planes",
  "questionDiagram": null,
  "id": "fm.y1.pure.vectors-lines-planes.q061",
  "tags": [
    "plane-intersection",
    "line-of-intersection"
  ],
  "difficulty": "Hard",
  "marks": 8,
  "answerType": "vector",
  "questionText": "The planes $\\Pi_1: \\mathbf{r}\\cdot(2\\mathbf{i} + \\mathbf{j} - \\mathbf{k}) = 3$ and $\\Pi_2: \\mathbf{r}\\cdot(\\mathbf{i} - 2\\mathbf{j} + 2\\mathbf{k}) = 1$ intersect in a line. Find a vector equation of the line of intersection.",
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Find the direction of the intersection line",
        "workingLatex": "\\mathbf{d} = \\mathbf{n}_1 \\times \\mathbf{n}_2",
        "explanation": "The line direction is perpendicular to both normals, so it lies in both planes.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Compute the cross product",
        "workingLatex": "\\mathbf{d} = -5\\mathbf{j} - 5\\mathbf{k}",
        "explanation": "Apply the cross-product formula to the two normals.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Find a point on both planes",
        "workingLatex": "\\text{solve } \\mathbf{n}_1\\cdot\\mathbf{r}=d_1,\\; \\mathbf{n}_2\\cdot\\mathbf{r}=d_2",
        "explanation": "Any common point anchors the line equation.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Set one coordinate to zero",
        "workingLatex": "\\text{let } z = 0",
        "explanation": "Fixing one variable reduces the problem to two simultaneous equations.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Solve the simultaneous equations",
        "workingLatex": "\\mathbf{a} = 1.4\\mathbf{i} - 0.2\\mathbf{k}",
        "explanation": "The solution gives a position vector on the line of intersection.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Verify the point lies on $\\Pi_1$",
        "workingLatex": "\\mathbf{a}\\cdot\\mathbf{n}_1 = 3 = 3",
        "explanation": "Substituting confirms the point satisfies the first plane.",
        "diagram": null
      },
      {
        "stepNumber": 7,
        "description": "Verify the point lies on $\\Pi_2$",
        "workingLatex": "\\mathbf{a}\\cdot\\mathbf{n}_2 = 0.9999999999999999 = 1",
        "explanation": "The point also satisfies the second plane.",
        "diagram": null
      },
      {
        "stepNumber": 8,
        "description": "Write the vector equation",
        "workingLatex": "\\mathbf{r} = 1.4\\mathbf{i} - 0.2\\mathbf{k} + \\lambda(-5\\mathbf{j} - 5\\mathbf{k})",
        "explanation": "Combine the known point with the cross-product direction.",
        "diagram": null
      },
      {
        "stepNumber": 9,
        "description": "Note the direction is valid",
        "workingLatex": "\\mathbf{d}\\cdot\\mathbf{n}_1 = 0,\\; \\mathbf{d}\\cdot\\mathbf{n}_2 = 0",
        "explanation": "The direction is perpendicular to both normals, so moving along it stays in both planes.",
        "diagram": null
      },
      {
        "stepNumber": 10,
        "description": "State the line of intersection",
        "workingLatex": "\\mathbf{r} = 1.4\\mathbf{i} - 0.2\\mathbf{k} + \\lambda(-5\\mathbf{j} - 5\\mathbf{k})",
        "explanation": "This line is the set of points common to both planes.",
        "diagram": null
      }
    ],
    "finalAnswer": "$\\mathbf{r} = 1.4\\mathbf{i} - 0.2\\mathbf{k} + \\lambda(-5\\mathbf{j} - 5\\mathbf{k})$"
  }
},
{
  "level": "A-Level Further Maths",
  "topic": "Further Maths Year 1: Pure (Core Pure 1)",
  "subtopic": "Vectors: lines and planes",
  "subtopicId": "fm.y1.pure.vectors-lines-planes",
  "questionDiagram": null,
  "id": "fm.y1.pure.vectors-lines-planes.q062",
  "tags": [
    "plane-intersection",
    "line-of-intersection"
  ],
  "difficulty": "Hard",
  "marks": 8,
  "answerType": "vector",
  "questionText": "The planes $\\Pi_1: \\mathbf{r}\\cdot(\\mathbf{i} + 2\\mathbf{j} + \\mathbf{k}) = 5$ and $\\Pi_2: \\mathbf{r}\\cdot(2\\mathbf{i} + \\mathbf{k}) = 4$ intersect in a line. Find a vector equation of the line of intersection.",
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Find the direction of the intersection line",
        "workingLatex": "\\mathbf{d} = \\mathbf{n}_1 \\times \\mathbf{n}_2",
        "explanation": "The line direction is perpendicular to both normals, so it lies in both planes.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Compute the cross product",
        "workingLatex": "\\mathbf{d} = 2\\mathbf{i} + \\mathbf{j} - 4\\mathbf{k}",
        "explanation": "Apply the cross-product formula to the two normals.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Find a point on both planes",
        "workingLatex": "\\text{solve } \\mathbf{n}_1\\cdot\\mathbf{r}=d_1,\\; \\mathbf{n}_2\\cdot\\mathbf{r}=d_2",
        "explanation": "Any common point anchors the line equation.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Set one coordinate to zero",
        "workingLatex": "\\text{let } z = 0",
        "explanation": "Fixing one variable reduces the problem to two simultaneous equations.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Solve the simultaneous equations",
        "workingLatex": "\\mathbf{a} = 0.5\\mathbf{j} + 4\\mathbf{k}",
        "explanation": "The solution gives a position vector on the line of intersection.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Verify the point lies on $\\Pi_1$",
        "workingLatex": "\\mathbf{a}\\cdot\\mathbf{n}_1 = 5 = 5",
        "explanation": "Substituting confirms the point satisfies the first plane.",
        "diagram": null
      },
      {
        "stepNumber": 7,
        "description": "Verify the point lies on $\\Pi_2$",
        "workingLatex": "\\mathbf{a}\\cdot\\mathbf{n}_2 = 4 = 4",
        "explanation": "The point also satisfies the second plane.",
        "diagram": null
      },
      {
        "stepNumber": 8,
        "description": "Write the vector equation",
        "workingLatex": "\\mathbf{r} = 0.5\\mathbf{j} + 4\\mathbf{k} + \\lambda(2\\mathbf{i} + \\mathbf{j} - 4\\mathbf{k})",
        "explanation": "Combine the known point with the cross-product direction.",
        "diagram": null
      },
      {
        "stepNumber": 9,
        "description": "Note the direction is valid",
        "workingLatex": "\\mathbf{d}\\cdot\\mathbf{n}_1 = 0,\\; \\mathbf{d}\\cdot\\mathbf{n}_2 = 0",
        "explanation": "The direction is perpendicular to both normals, so moving along it stays in both planes.",
        "diagram": null
      },
      {
        "stepNumber": 10,
        "description": "State the line of intersection",
        "workingLatex": "\\mathbf{r} = 0.5\\mathbf{j} + 4\\mathbf{k} + \\lambda(2\\mathbf{i} + \\mathbf{j} - 4\\mathbf{k})",
        "explanation": "This line is the set of points common to both planes.",
        "diagram": null
      }
    ],
    "finalAnswer": "$\\mathbf{r} = 0.5\\mathbf{j} + 4\\mathbf{k} + \\lambda(2\\mathbf{i} + \\mathbf{j} - 4\\mathbf{k})$"
  }
},
{
  "level": "A-Level Further Maths",
  "topic": "Further Maths Year 1: Pure (Core Pure 1)",
  "subtopic": "Vectors: lines and planes",
  "subtopicId": "fm.y1.pure.vectors-lines-planes",
  "questionDiagram": null,
  "id": "fm.y1.pure.vectors-lines-planes.q063",
  "tags": [
    "plane-intersection",
    "line-of-intersection"
  ],
  "difficulty": "Hard",
  "marks": 8,
  "answerType": "vector",
  "questionText": "The planes $\\Pi_1: \\mathbf{r}\\cdot(\\mathbf{j} + 2\\mathbf{k}) = 6$ and $\\Pi_2: \\mathbf{r}\\cdot(3\\mathbf{i} - \\mathbf{j}) = 2$ intersect in a line. Find a vector equation of the line of intersection.",
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Find the direction of the intersection line",
        "workingLatex": "\\mathbf{d} = \\mathbf{n}_1 \\times \\mathbf{n}_2",
        "explanation": "The line direction is perpendicular to both normals, so it lies in both planes.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Compute the cross product",
        "workingLatex": "\\mathbf{d} = 2\\mathbf{i} + 6\\mathbf{j} - 3\\mathbf{k}",
        "explanation": "Apply the cross-product formula to the two normals.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Find a point on both planes",
        "workingLatex": "\\text{solve } \\mathbf{n}_1\\cdot\\mathbf{r}=d_1,\\; \\mathbf{n}_2\\cdot\\mathbf{r}=d_2",
        "explanation": "Any common point anchors the line equation.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Set one coordinate to zero",
        "workingLatex": "\\text{let } z = 0",
        "explanation": "Fixing one variable reduces the problem to two simultaneous equations.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Solve the simultaneous equations",
        "workingLatex": "\\mathbf{a} = -2\\mathbf{j} + 4\\mathbf{k}",
        "explanation": "The solution gives a position vector on the line of intersection.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Verify the point lies on $\\Pi_1$",
        "workingLatex": "\\mathbf{a}\\cdot\\mathbf{n}_1 = 6 = 6",
        "explanation": "Substituting confirms the point satisfies the first plane.",
        "diagram": null
      },
      {
        "stepNumber": 7,
        "description": "Verify the point lies on $\\Pi_2$",
        "workingLatex": "\\mathbf{a}\\cdot\\mathbf{n}_2 = 2 = 2",
        "explanation": "The point also satisfies the second plane.",
        "diagram": null
      },
      {
        "stepNumber": 8,
        "description": "Write the vector equation",
        "workingLatex": "\\mathbf{r} = -2\\mathbf{j} + 4\\mathbf{k} + \\lambda(2\\mathbf{i} + 6\\mathbf{j} - 3\\mathbf{k})",
        "explanation": "Combine the known point with the cross-product direction.",
        "diagram": null
      },
      {
        "stepNumber": 9,
        "description": "Note the direction is valid",
        "workingLatex": "\\mathbf{d}\\cdot\\mathbf{n}_1 = 0,\\; \\mathbf{d}\\cdot\\mathbf{n}_2 = 0",
        "explanation": "The direction is perpendicular to both normals, so moving along it stays in both planes.",
        "diagram": null
      },
      {
        "stepNumber": 10,
        "description": "State the line of intersection",
        "workingLatex": "\\mathbf{r} = -2\\mathbf{j} + 4\\mathbf{k} + \\lambda(2\\mathbf{i} + 6\\mathbf{j} - 3\\mathbf{k})",
        "explanation": "This line is the set of points common to both planes.",
        "diagram": null
      }
    ],
    "finalAnswer": "$\\mathbf{r} = -2\\mathbf{j} + 4\\mathbf{k} + \\lambda(2\\mathbf{i} + 6\\mathbf{j} - 3\\mathbf{k})$"
  }
},
{
  "level": "A-Level Further Maths",
  "topic": "Further Maths Year 1: Pure (Core Pure 1)",
  "subtopic": "Vectors: lines and planes",
  "subtopicId": "fm.y1.pure.vectors-lines-planes",
  "questionDiagram": null,
  "id": "fm.y1.pure.vectors-lines-planes.q064",
  "tags": [
    "plane-intersection",
    "line-of-intersection"
  ],
  "difficulty": "Hard",
  "marks": 8,
  "answerType": "vector",
  "questionText": "The planes $\\Pi_1: \\mathbf{r}\\cdot(2\\mathbf{i} + 2\\mathbf{j} + \\mathbf{k}) = 8$ and $\\Pi_2: \\mathbf{r}\\cdot(\\mathbf{i} + \\mathbf{k}) = 3$ intersect in a line. Find a vector equation of the line of intersection.",
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Find the direction of the intersection line",
        "workingLatex": "\\mathbf{d} = \\mathbf{n}_1 \\times \\mathbf{n}_2",
        "explanation": "The line direction is perpendicular to both normals, so it lies in both planes.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Compute the cross product",
        "workingLatex": "\\mathbf{d} = 2\\mathbf{i} - \\mathbf{j} - 2\\mathbf{k}",
        "explanation": "Apply the cross-product formula to the two normals.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Find a point on both planes",
        "workingLatex": "\\text{solve } \\mathbf{n}_1\\cdot\\mathbf{r}=d_1,\\; \\mathbf{n}_2\\cdot\\mathbf{r}=d_2",
        "explanation": "Any common point anchors the line equation.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Set one coordinate to zero",
        "workingLatex": "\\text{let } z = 0",
        "explanation": "Fixing one variable reduces the problem to two simultaneous equations.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Solve the simultaneous equations",
        "workingLatex": "\\mathbf{a} = 2.5\\mathbf{j} + 3\\mathbf{k}",
        "explanation": "The solution gives a position vector on the line of intersection.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Verify the point lies on $\\Pi_1$",
        "workingLatex": "\\mathbf{a}\\cdot\\mathbf{n}_1 = 8 = 8",
        "explanation": "Substituting confirms the point satisfies the first plane.",
        "diagram": null
      },
      {
        "stepNumber": 7,
        "description": "Verify the point lies on $\\Pi_2$",
        "workingLatex": "\\mathbf{a}\\cdot\\mathbf{n}_2 = 3 = 3",
        "explanation": "The point also satisfies the second plane.",
        "diagram": null
      },
      {
        "stepNumber": 8,
        "description": "Write the vector equation",
        "workingLatex": "\\mathbf{r} = 2.5\\mathbf{j} + 3\\mathbf{k} + \\lambda(2\\mathbf{i} - \\mathbf{j} - 2\\mathbf{k})",
        "explanation": "Combine the known point with the cross-product direction.",
        "diagram": null
      },
      {
        "stepNumber": 9,
        "description": "Note the direction is valid",
        "workingLatex": "\\mathbf{d}\\cdot\\mathbf{n}_1 = 0,\\; \\mathbf{d}\\cdot\\mathbf{n}_2 = 0",
        "explanation": "The direction is perpendicular to both normals, so moving along it stays in both planes.",
        "diagram": null
      },
      {
        "stepNumber": 10,
        "description": "State the line of intersection",
        "workingLatex": "\\mathbf{r} = 2.5\\mathbf{j} + 3\\mathbf{k} + \\lambda(2\\mathbf{i} - \\mathbf{j} - 2\\mathbf{k})",
        "explanation": "This line is the set of points common to both planes.",
        "diagram": null
      }
    ],
    "finalAnswer": "$\\mathbf{r} = 2.5\\mathbf{j} + 3\\mathbf{k} + \\lambda(2\\mathbf{i} - \\mathbf{j} - 2\\mathbf{k})$"
  }
},
{
  "level": "A-Level Further Maths",
  "topic": "Further Maths Year 1: Pure (Core Pure 1)",
  "subtopic": "Vectors: lines and planes",
  "subtopicId": "fm.y1.pure.vectors-lines-planes",
  "questionDiagram": null,
  "id": "fm.y1.pure.vectors-lines-planes.q065",
  "tags": [
    "line-intersection",
    "simultaneous"
  ],
  "difficulty": "Hard",
  "marks": 7,
  "answerType": "written",
  "questionText": "Lines $L_1: \\mathbf{r} = \\mathbf{i} + 2\\mathbf{k} + \\lambda(2\\mathbf{i} + \\mathbf{j} - \\mathbf{k})$ and $L_2: \\mathbf{r} = 3\\mathbf{i} + \\mathbf{j} + \\mu(\\mathbf{i} + 2\\mathbf{j} + \\mathbf{k})$ intersect. Find the coordinates of the point of intersection.",
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Equate the two line expressions",
        "workingLatex": "\\mathbf{i} + 2\\mathbf{k} + \\lambda2\\mathbf{i} + \\mathbf{j} - \\mathbf{k} = 3\\mathbf{i} + \\mathbf{j} + \\mu\\mathbf{i} + 2\\mathbf{j} + \\mathbf{k}",
        "explanation": "At the intersection, both lines share the same position vector.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Rearrange into a vector equation",
        "workingLatex": "\\lambda2\\mathbf{i} + \\mathbf{j} - \\mathbf{k} - \\mu\\mathbf{i} + 2\\mathbf{j} + \\mathbf{k} = 2\\mathbf{i} + \\mathbf{j} - 2\\mathbf{k}",
        "explanation": "Collect $\\lambda$ and $\\mu$ terms on one side.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Write the component equations",
        "workingLatex": "\\begin{cases} 2\\lambda -1\\mu = 2 \\\\ 1\\lambda -2\\mu = 1 \\\\ -1\\lambda -1\\mu = -2 \\end{cases}",
        "explanation": "Equating $\\mathbf{i}$, $\\mathbf{j}$ and $\\mathbf{k}$ components gives three scalar equations.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Solve two equations for $\\lambda$ and $\\mu$",
        "workingLatex": "\\lambda = 1,\\quad \\mu = 0",
        "explanation": "Use any two independent component equations.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Find the point from $L_1$",
        "workingLatex": "\\mathbf{r} = \\mathbf{i} + 2\\mathbf{k} + 1(2\\mathbf{i} + \\mathbf{j} - \\mathbf{k}) = 3\\mathbf{i} + \\mathbf{j} + \\mathbf{k}",
        "explanation": "Substitute $\\lambda$ into the first line equation.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Check with $L_2$",
        "workingLatex": "\\mathbf{r} = 3\\mathbf{i} + \\mathbf{j} + 0(\\mathbf{i} + 2\\mathbf{j} + \\mathbf{k}) = 3\\mathbf{i} + \\mathbf{j}",
        "explanation": "Substituting $\\mu$ into the second line should give the same point.",
        "diagram": null
      },
      {
        "stepNumber": 7,
        "description": "Confirm consistency",
        "workingLatex": "\\text{both give } (3,\\,1,\\,1)",
        "explanation": "Matching results confirm the lines truly intersect.",
        "diagram": null
      },
      {
        "stepNumber": 8,
        "description": "Verify the third component",
        "workingLatex": "\\text{third equation satisfied}",
        "explanation": "The unused component equation provides a consistency check.",
        "diagram": null
      },
      {
        "stepNumber": 9,
        "description": "State the intersection point",
        "workingLatex": "(3,\\,1,\\,1)",
        "explanation": "This is the unique point common to both lines.",
        "diagram": null
      }
    ],
    "finalAnswer": "$(3,\\,1,\\,1)$"
  }
},
{
  "level": "A-Level Further Maths",
  "topic": "Further Maths Year 1: Pure (Core Pure 1)",
  "subtopic": "Vectors: lines and planes",
  "subtopicId": "fm.y1.pure.vectors-lines-planes",
  "questionDiagram": null,
  "id": "fm.y1.pure.vectors-lines-planes.q066",
  "tags": [
    "line-intersection",
    "simultaneous"
  ],
  "difficulty": "Hard",
  "marks": 7,
  "answerType": "written",
  "questionText": "Lines $L_1: \\mathbf{r} = \\mathbf{j} + \\mathbf{k} + \\lambda(3\\mathbf{i} - \\mathbf{j} + 2\\mathbf{k})$ and $L_2: \\mathbf{r} = 2\\mathbf{i} + 3\\mathbf{k} + \\mu(\\mathbf{i} + \\mathbf{j})$ intersect. Find the coordinates of the point of intersection.",
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Equate the two line expressions",
        "workingLatex": "\\mathbf{j} + \\mathbf{k} + \\lambda3\\mathbf{i} - \\mathbf{j} + 2\\mathbf{k} = 2\\mathbf{i} + 3\\mathbf{k} + \\mu\\mathbf{i} + \\mathbf{j}",
        "explanation": "At the intersection, both lines share the same position vector.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Rearrange into a vector equation",
        "workingLatex": "\\lambda3\\mathbf{i} - \\mathbf{j} + 2\\mathbf{k} - \\mu\\mathbf{i} + \\mathbf{j} = 2\\mathbf{i} - \\mathbf{j} + 2\\mathbf{k}",
        "explanation": "Collect $\\lambda$ and $\\mu$ terms on one side.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Write the component equations",
        "workingLatex": "\\begin{cases} 3\\lambda -1\\mu = 2 \\\\ -1\\lambda -1\\mu = -1 \\\\ 2\\lambda +0\\mu = 2 \\end{cases}",
        "explanation": "Equating $\\mathbf{i}$, $\\mathbf{j}$ and $\\mathbf{k}$ components gives three scalar equations.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Solve two equations for $\\lambda$ and $\\mu$",
        "workingLatex": "\\lambda = 0.75,\\quad \\mu = 0.25",
        "explanation": "Use any two independent component equations.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Find the point from $L_1$",
        "workingLatex": "\\mathbf{r} = \\mathbf{j} + \\mathbf{k} + 0.75(3\\mathbf{i} - \\mathbf{j} + 2\\mathbf{k}) = 2.25\\mathbf{i} + 0.25\\mathbf{j} + 2.5\\mathbf{k}",
        "explanation": "Substitute $\\lambda$ into the first line equation.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Check with $L_2$",
        "workingLatex": "\\mathbf{r} = 2\\mathbf{i} + 3\\mathbf{k} + 0.25(\\mathbf{i} + \\mathbf{j}) = 2.25\\mathbf{i} + 0.25\\mathbf{j} + 3\\mathbf{k}",
        "explanation": "Substituting $\\mu$ into the second line should give the same point.",
        "diagram": null
      },
      {
        "stepNumber": 7,
        "description": "Confirm consistency",
        "workingLatex": "\\text{both give } (2.25,\\,0.25,\\,2.5)",
        "explanation": "Matching results confirm the lines truly intersect.",
        "diagram": null
      },
      {
        "stepNumber": 8,
        "description": "Verify the third component",
        "workingLatex": "\\text{third equation satisfied}",
        "explanation": "The unused component equation provides a consistency check.",
        "diagram": null
      },
      {
        "stepNumber": 9,
        "description": "State the intersection point",
        "workingLatex": "(2.25,\\,0.25,\\,2.5)",
        "explanation": "This is the unique point common to both lines.",
        "diagram": null
      }
    ],
    "finalAnswer": "$(2.25,\\,0.25,\\,2.5)$"
  }
},
{
  "level": "A-Level Further Maths",
  "topic": "Further Maths Year 1: Pure (Core Pure 1)",
  "subtopic": "Vectors: lines and planes",
  "subtopicId": "fm.y1.pure.vectors-lines-planes",
  "questionDiagram": null,
  "id": "fm.y1.pure.vectors-lines-planes.q067",
  "tags": [
    "line-intersection",
    "simultaneous"
  ],
  "difficulty": "Hard",
  "marks": 7,
  "answerType": "written",
  "questionText": "Lines $L_1: \\mathbf{r} = 2\\mathbf{i} + 2\\mathbf{j} + \\lambda(\\mathbf{i} - \\mathbf{j} + 2\\mathbf{k})$ and $L_2: \\mathbf{r} = \\mathbf{i} + 4\\mathbf{k} + \\mu(2\\mathbf{i} + \\mathbf{j} - \\mathbf{k})$ intersect. Find the coordinates of the point of intersection.",
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Equate the two line expressions",
        "workingLatex": "2\\mathbf{i} + 2\\mathbf{j} + \\lambda\\mathbf{i} - \\mathbf{j} + 2\\mathbf{k} = \\mathbf{i} + 4\\mathbf{k} + \\mu2\\mathbf{i} + \\mathbf{j} - \\mathbf{k}",
        "explanation": "At the intersection, both lines share the same position vector.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Rearrange into a vector equation",
        "workingLatex": "\\lambda\\mathbf{i} - \\mathbf{j} + 2\\mathbf{k} - \\mu2\\mathbf{i} + \\mathbf{j} - \\mathbf{k} = -\\mathbf{i} - 2\\mathbf{j} + 4\\mathbf{k}",
        "explanation": "Collect $\\lambda$ and $\\mu$ terms on one side.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Write the component equations",
        "workingLatex": "\\begin{cases} 1\\lambda -2\\mu = -1 \\\\ -1\\lambda -1\\mu = -2 \\\\ 2\\lambda +1\\mu = 4 \\end{cases}",
        "explanation": "Equating $\\mathbf{i}$, $\\mathbf{j}$ and $\\mathbf{k}$ components gives three scalar equations.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Solve two equations for $\\lambda$ and $\\mu$",
        "workingLatex": "\\lambda = 1,\\quad \\mu = 1",
        "explanation": "Use any two independent component equations.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Find the point from $L_1$",
        "workingLatex": "\\mathbf{r} = 2\\mathbf{i} + 2\\mathbf{j} + 1(\\mathbf{i} - \\mathbf{j} + 2\\mathbf{k}) = 3\\mathbf{i} + \\mathbf{j} + 2\\mathbf{k}",
        "explanation": "Substitute $\\lambda$ into the first line equation.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Check with $L_2$",
        "workingLatex": "\\mathbf{r} = \\mathbf{i} + 4\\mathbf{k} + 1(2\\mathbf{i} + \\mathbf{j} - \\mathbf{k}) = 3\\mathbf{i} + \\mathbf{j} + 3\\mathbf{k}",
        "explanation": "Substituting $\\mu$ into the second line should give the same point.",
        "diagram": null
      },
      {
        "stepNumber": 7,
        "description": "Confirm consistency",
        "workingLatex": "\\text{both give } (3,\\,1,\\,2)",
        "explanation": "Matching results confirm the lines truly intersect.",
        "diagram": null
      },
      {
        "stepNumber": 8,
        "description": "Verify the third component",
        "workingLatex": "\\text{third equation satisfied}",
        "explanation": "The unused component equation provides a consistency check.",
        "diagram": null
      },
      {
        "stepNumber": 9,
        "description": "State the intersection point",
        "workingLatex": "(3,\\,1,\\,2)",
        "explanation": "This is the unique point common to both lines.",
        "diagram": null
      }
    ],
    "finalAnswer": "$(3,\\,1,\\,2)$"
  }
},
{
  "level": "A-Level Further Maths",
  "topic": "Further Maths Year 1: Pure (Core Pure 1)",
  "subtopic": "Vectors: lines and planes",
  "subtopicId": "fm.y1.pure.vectors-lines-planes",
  "questionDiagram": null,
  "id": "fm.y1.pure.vectors-lines-planes.q068",
  "tags": [
    "plane-through-line",
    "three-points"
  ],
  "difficulty": "Hard",
  "marks": 8,
  "answerType": "written",
  "questionText": "Find the Cartesian equation of the plane containing the line $\\mathbf{r} = \\mathbf{i} + 2\\mathbf{k} + \\lambda(2\\mathbf{i} + \\mathbf{j} - \\mathbf{k})$ and the point $P(3,\\,2,\\,1)$.",
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Identify two points on the line",
        "workingLatex": "A = $A(1,\\,0,\\,2)$,\\; B = $B(3,\\,1,\\,1)$",
        "explanation": "The line gives $A$ at $\\lambda=0$ and another point $B$ at $\\lambda=1$.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Use three non-collinear points",
        "workingLatex": "A,\\; B,\\; P",
        "explanation": "A plane through a line and an external point is fixed by any three non-collinear points on it.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Find vectors in the plane",
        "workingLatex": "\\overrightarrow{AB} = 2\\mathbf{i} + \\mathbf{j} - \\mathbf{k},\\; \\overrightarrow{AP} = 2\\mathbf{i} + 2\\mathbf{j} - \\mathbf{k}",
        "explanation": "Two chords of the triangle lie in the plane.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Compute the normal",
        "workingLatex": "\\mathbf{n} = \\overrightarrow{AB} \\times \\overrightarrow{AP} = \\mathbf{i} + 2\\mathbf{k}",
        "explanation": "The cross product is perpendicular to the plane.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Find $d$ using point $A$",
        "workingLatex": "d = \\mathbf{n}\\cdot\\mathbf{a} = 5",
        "explanation": "Substitute $A$ into $ax+by+cz=d$.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Write the Cartesian equation",
        "workingLatex": "1x +0y +2z = 5",
        "explanation": "Use the normal components as coefficients.",
        "diagram": null
      },
      {
        "stepNumber": 7,
        "description": "Verify point $B$ lies on the plane",
        "workingLatex": "5 = 5",
        "explanation": "A second point on the line should satisfy the equation.",
        "diagram": null
      },
      {
        "stepNumber": 8,
        "description": "Verify point $P$ lies on the plane",
        "workingLatex": "5 = 5",
        "explanation": "The external point must also satisfy the equation.",
        "diagram": null
      },
      {
        "stepNumber": 9,
        "description": "Confirm the line lies in the plane",
        "workingLatex": "\\text{every point } \\mathbf{a}+\\lambda\\mathbf{d} \\text{ satisfies the equation}",
        "explanation": "If $A$, $B$ and $P$ are on the plane, the whole line through $A$ and $B$ is contained.",
        "diagram": null
      },
      {
        "stepNumber": 10,
        "description": "State the final equation",
        "workingLatex": "1x +0y +2z = 5",
        "explanation": "This is the required plane.",
        "diagram": null
      }
    ],
    "finalAnswer": "$1x +0y +2z = 5$"
  }
},
{
  "level": "A-Level Further Maths",
  "topic": "Further Maths Year 1: Pure (Core Pure 1)",
  "subtopic": "Vectors: lines and planes",
  "subtopicId": "fm.y1.pure.vectors-lines-planes",
  "questionDiagram": null,
  "id": "fm.y1.pure.vectors-lines-planes.q069",
  "tags": [
    "plane-through-line",
    "three-points"
  ],
  "difficulty": "Hard",
  "marks": 8,
  "answerType": "written",
  "questionText": "Find the Cartesian equation of the plane containing the line $\\mathbf{r} = \\mathbf{j} + 4\\mathbf{k} + \\lambda(3\\mathbf{i} - \\mathbf{j} + 2\\mathbf{k})$ and the point $P(2,\\,3,\\,0)$.",
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Identify two points on the line",
        "workingLatex": "A = $A(0,\\,1,\\,4)$,\\; B = $B(3,\\,0,\\,6)$",
        "explanation": "The line gives $A$ at $\\lambda=0$ and another point $B$ at $\\lambda=1$.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Use three non-collinear points",
        "workingLatex": "A,\\; B,\\; P",
        "explanation": "A plane through a line and an external point is fixed by any three non-collinear points on it.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Find vectors in the plane",
        "workingLatex": "\\overrightarrow{AB} = 3\\mathbf{i} - \\mathbf{j} + 2\\mathbf{k},\\; \\overrightarrow{AP} = 2\\mathbf{i} + 2\\mathbf{j} - 4\\mathbf{k}",
        "explanation": "Two chords of the triangle lie in the plane.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Compute the normal",
        "workingLatex": "\\mathbf{n} = \\overrightarrow{AB} \\times \\overrightarrow{AP} = 16\\mathbf{j} + 8\\mathbf{k}",
        "explanation": "The cross product is perpendicular to the plane.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Find $d$ using point $A$",
        "workingLatex": "d = \\mathbf{n}\\cdot\\mathbf{a} = 48",
        "explanation": "Substitute $A$ into $ax+by+cz=d$.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Write the Cartesian equation",
        "workingLatex": "0x +16y +8z = 48",
        "explanation": "Use the normal components as coefficients.",
        "diagram": null
      },
      {
        "stepNumber": 7,
        "description": "Verify point $B$ lies on the plane",
        "workingLatex": "48 = 48",
        "explanation": "A second point on the line should satisfy the equation.",
        "diagram": null
      },
      {
        "stepNumber": 8,
        "description": "Verify point $P$ lies on the plane",
        "workingLatex": "48 = 48",
        "explanation": "The external point must also satisfy the equation.",
        "diagram": null
      },
      {
        "stepNumber": 9,
        "description": "Confirm the line lies in the plane",
        "workingLatex": "\\text{every point } \\mathbf{a}+\\lambda\\mathbf{d} \\text{ satisfies the equation}",
        "explanation": "If $A$, $B$ and $P$ are on the plane, the whole line through $A$ and $B$ is contained.",
        "diagram": null
      },
      {
        "stepNumber": 10,
        "description": "State the final equation",
        "workingLatex": "0x +16y +8z = 48",
        "explanation": "This is the required plane.",
        "diagram": null
      }
    ],
    "finalAnswer": "$0x +16y +8z = 48$"
  }
},
{
  "level": "A-Level Further Maths",
  "topic": "Further Maths Year 1: Pure (Core Pure 1)",
  "subtopic": "Vectors: lines and planes",
  "subtopicId": "fm.y1.pure.vectors-lines-planes",
  "questionDiagram": null,
  "id": "fm.y1.pure.vectors-lines-planes.q070",
  "tags": [
    "plane-through-line",
    "three-points"
  ],
  "difficulty": "Hard",
  "marks": 8,
  "answerType": "written",
  "questionText": "Find the Cartesian equation of the plane containing the line $\\mathbf{r} = 2\\mathbf{i} + \\mathbf{k} + \\lambda(\\mathbf{i} + 2\\mathbf{j} + 3\\mathbf{k})$ and the point $P(0,\\,1,\\,5)$.",
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Identify two points on the line",
        "workingLatex": "A = $A(2,\\,0,\\,1)$,\\; B = $B(3,\\,2,\\,4)$",
        "explanation": "The line gives $A$ at $\\lambda=0$ and another point $B$ at $\\lambda=1$.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Use three non-collinear points",
        "workingLatex": "A,\\; B,\\; P",
        "explanation": "A plane through a line and an external point is fixed by any three non-collinear points on it.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Find vectors in the plane",
        "workingLatex": "\\overrightarrow{AB} = \\mathbf{i} + 2\\mathbf{j} + 3\\mathbf{k},\\; \\overrightarrow{AP} = -2\\mathbf{i} + \\mathbf{j} + 4\\mathbf{k}",
        "explanation": "Two chords of the triangle lie in the plane.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Compute the normal",
        "workingLatex": "\\mathbf{n} = \\overrightarrow{AB} \\times \\overrightarrow{AP} = 5\\mathbf{i} - 10\\mathbf{j} + 5\\mathbf{k}",
        "explanation": "The cross product is perpendicular to the plane.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Find $d$ using point $A$",
        "workingLatex": "d = \\mathbf{n}\\cdot\\mathbf{a} = 15",
        "explanation": "Substitute $A$ into $ax+by+cz=d$.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Write the Cartesian equation",
        "workingLatex": "5x -10y +5z = 15",
        "explanation": "Use the normal components as coefficients.",
        "diagram": null
      },
      {
        "stepNumber": 7,
        "description": "Verify point $B$ lies on the plane",
        "workingLatex": "15 = 15",
        "explanation": "A second point on the line should satisfy the equation.",
        "diagram": null
      },
      {
        "stepNumber": 8,
        "description": "Verify point $P$ lies on the plane",
        "workingLatex": "15 = 15",
        "explanation": "The external point must also satisfy the equation.",
        "diagram": null
      },
      {
        "stepNumber": 9,
        "description": "Confirm the line lies in the plane",
        "workingLatex": "\\text{every point } \\mathbf{a}+\\lambda\\mathbf{d} \\text{ satisfies the equation}",
        "explanation": "If $A$, $B$ and $P$ are on the plane, the whole line through $A$ and $B$ is contained.",
        "diagram": null
      },
      {
        "stepNumber": 10,
        "description": "State the final equation",
        "workingLatex": "5x -10y +5z = 15",
        "explanation": "This is the required plane.",
        "diagram": null
      }
    ],
    "finalAnswer": "$5x -10y +5z = 15$"
  }
},
];
