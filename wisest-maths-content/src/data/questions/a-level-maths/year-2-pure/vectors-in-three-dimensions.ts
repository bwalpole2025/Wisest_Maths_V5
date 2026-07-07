import { Question } from "@/lib/types";

export const questions: Question[] = [
  {
    "id": "al.y2.pure.vectors-3d.q001",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Vectors in three dimensions",
    "subtopicId": "al.y2.pure.vectors-3d",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "vector",
    "tags": [
      "vectors",
      "column-vector",
      "ijk-notation"
    ],
    "questionText": "The vector $\\mathbf{a} = 2\\mathbf{i} - 3\\mathbf{j} + 5\\mathbf{k}$. Write $\\mathbf{a}$ as a column vector.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the correspondence",
          "workingLatex": "x\\mathbf{i} + y\\mathbf{j} + z\\mathbf{k} = \\begin{pmatrix} x \\\\ y \\\\ z \\end{pmatrix}",
          "explanation": "A column vector stacks the $\\mathbf{i}$, $\\mathbf{j}$ and $\\mathbf{k}$ coefficients top to bottom.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Read the $\\mathbf{i}$-component",
          "workingLatex": "x = 2",
          "explanation": "The number multiplying $\\mathbf{i}$ is the first entry.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Read the $\\mathbf{j}$-component",
          "workingLatex": "y = -3",
          "explanation": "The coefficient of $\\mathbf{j}$ becomes the middle entry, sign included.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Read the $\\mathbf{k}$-component",
          "workingLatex": "z = 5",
          "explanation": "The coefficient of $\\mathbf{k}$ is the bottom entry.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Assemble the column",
          "workingLatex": "\\mathbf{a} = \\begin{pmatrix} 2 \\\\ -3 \\\\ 5 \\end{pmatrix}",
          "explanation": "Place the three components in order without changing any signs.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the answer",
          "workingLatex": "\\mathbf{a} = \\begin{pmatrix} 2 \\\\ -3 \\\\ 5 \\end{pmatrix}",
          "explanation": "This is the same vector in column form.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\mathbf{a} = \\begin{pmatrix} 2 \\\\ -3 \\\\ 5 \\end{pmatrix}$"
    }
  },
  {
    "id": "al.y2.pure.vectors-3d.q002",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Vectors in three dimensions",
    "subtopicId": "al.y2.pure.vectors-3d",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "vector",
    "tags": [
      "vectors",
      "column-vector",
      "ijk-notation"
    ],
    "questionText": "The vector $\\mathbf{b} = \\begin{pmatrix} -1 \\\\ 4 \\\\ 2 \\end{pmatrix}$. Write $\\mathbf{b}$ in $\\mathbf{i}$, $\\mathbf{j}$, $\\mathbf{k}$ form.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the correspondence",
          "workingLatex": "\\begin{pmatrix} x \\\\ y \\\\ z \\end{pmatrix} = x\\mathbf{i} + y\\mathbf{j} + z\\mathbf{k}",
          "explanation": "Each row of the column becomes the coefficient of the matching unit direction.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the $\\mathbf{i}$ term",
          "workingLatex": "-1\\mathbf{i} = -\\mathbf{i}",
          "explanation": "The top entry $-1$ gives a negative $\\mathbf{i}$ term.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write the $\\mathbf{j}$ term",
          "workingLatex": "4\\mathbf{j}",
          "explanation": "The middle entry $4$ multiplies $\\mathbf{j}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write the $\\mathbf{k}$ term",
          "workingLatex": "2\\mathbf{k}",
          "explanation": "The bottom entry $2$ multiplies $\\mathbf{k}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Combine the terms",
          "workingLatex": "\\mathbf{b} = -\\mathbf{i} + 4\\mathbf{j} + 2\\mathbf{k}",
          "explanation": "Add the three direction parts to express the same vector.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the answer",
          "workingLatex": "\\mathbf{b} = -\\mathbf{i} + 4\\mathbf{j} + 2\\mathbf{k}",
          "explanation": "This is the vector in unit-vector notation.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\mathbf{b} = -\\mathbf{i} + 4\\mathbf{j} + 2\\mathbf{k}$"
    }
  },
  {
    "id": "al.y2.pure.vectors-3d.q003",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Vectors in three dimensions",
    "subtopicId": "al.y2.pure.vectors-3d",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "numeric",
    "tags": [
      "vectors",
      "magnitude"
    ],
    "questionText": "Find the magnitude of $\\mathbf{a} = 3\\mathbf{i} + 4\\mathbf{j}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the components",
          "workingLatex": "\\mathbf{a} = 3\\mathbf{i} + 4\\mathbf{j}",
          "explanation": "In three dimensions each vector has horizontal ($\\mathbf{i}$), depth ($\\mathbf{j}$) and vertical ($\\mathbf{k}$) parts.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the magnitude formula",
          "workingLatex": "|\\mathbf{a}| = \\sqrt{x^2 + y^2 + z^2}",
          "explanation": "Magnitude is the straight-line length from the origin, found with a 3D version of Pythagoras.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute the components",
          "workingLatex": "|\\mathbf{a}| = \\sqrt{3^2 + 4^2 + 0^2} = \\sqrt{25}",
          "explanation": "Square each component and add them before taking the square root.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate the square root",
          "workingLatex": "|\\mathbf{a}| = 5",
          "explanation": "The result is the length of the vector.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Interpret the result",
          "workingLatex": "|\\mathbf{a}| = 5",
          "explanation": "This scalar gives how long the vector is, regardless of direction.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the answer",
          "workingLatex": "|\\mathbf{a}| = 5",
          "explanation": "We have found the exact magnitude.",
          "diagram": null
        }
      ],
      "finalAnswer": "$|\\mathbf{a}| = 5$"
    }
  },
  {
    "id": "al.y2.pure.vectors-3d.q004",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Vectors in three dimensions",
    "subtopicId": "al.y2.pure.vectors-3d",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "numeric",
    "tags": [
      "vectors",
      "magnitude"
    ],
    "questionText": "Find the magnitude of $\\mathbf{a} = \\mathbf{i} + 2\\mathbf{j} + 2\\mathbf{k}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the components",
          "workingLatex": "\\mathbf{a} = \\mathbf{i} + 2\\mathbf{j} + 2\\mathbf{k}",
          "explanation": "In three dimensions each vector has horizontal ($\\mathbf{i}$), depth ($\\mathbf{j}$) and vertical ($\\mathbf{k}$) parts.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the magnitude formula",
          "workingLatex": "|\\mathbf{a}| = \\sqrt{x^2 + y^2 + z^2}",
          "explanation": "Magnitude is the straight-line length from the origin, found with a 3D version of Pythagoras.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute the components",
          "workingLatex": "|\\mathbf{a}| = \\sqrt{1^2 + 2^2 + 2^2} = \\sqrt{9}",
          "explanation": "Square each component and add them before taking the square root.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate the square root",
          "workingLatex": "|\\mathbf{a}| = 3",
          "explanation": "The result is the length of the vector.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Interpret the result",
          "workingLatex": "|\\mathbf{a}| = 3",
          "explanation": "This scalar gives how long the vector is, regardless of direction.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the answer",
          "workingLatex": "|\\mathbf{a}| = 3",
          "explanation": "We have found the exact magnitude.",
          "diagram": null
        }
      ],
      "finalAnswer": "$|\\mathbf{a}| = 3$"
    }
  },
  {
    "id": "al.y2.pure.vectors-3d.q005",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Vectors in three dimensions",
    "subtopicId": "al.y2.pure.vectors-3d",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "numeric",
    "tags": [
      "vectors",
      "magnitude"
    ],
    "questionText": "Find the magnitude of $\\mathbf{a} = 2\\mathbf{i} - \\mathbf{j} + 2\\mathbf{k}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the components",
          "workingLatex": "\\mathbf{a} = 2\\mathbf{i} - \\mathbf{j} + 2\\mathbf{k}",
          "explanation": "In three dimensions each vector has horizontal ($\\mathbf{i}$), depth ($\\mathbf{j}$) and vertical ($\\mathbf{k}$) parts.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the magnitude formula",
          "workingLatex": "|\\mathbf{a}| = \\sqrt{x^2 + y^2 + z^2}",
          "explanation": "Magnitude is the straight-line length from the origin, found with a 3D version of Pythagoras.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute the components",
          "workingLatex": "|\\mathbf{a}| = \\sqrt{2^2 + -1^2 + 2^2} = \\sqrt{9}",
          "explanation": "Square each component and add them before taking the square root.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate the square root",
          "workingLatex": "|\\mathbf{a}| = 3",
          "explanation": "The result is the length of the vector.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Interpret the result",
          "workingLatex": "|\\mathbf{a}| = 3",
          "explanation": "This scalar gives how long the vector is, regardless of direction.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the answer",
          "workingLatex": "|\\mathbf{a}| = 3",
          "explanation": "We have found the exact magnitude.",
          "diagram": null
        }
      ],
      "finalAnswer": "$|\\mathbf{a}| = 3$"
    }
  },
  {
    "id": "al.y2.pure.vectors-3d.q006",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Vectors in three dimensions",
    "subtopicId": "al.y2.pure.vectors-3d",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "numeric",
    "tags": [
      "vectors",
      "magnitude"
    ],
    "questionText": "Find the magnitude of $\\mathbf{a} = -3\\mathbf{i} + 4\\mathbf{k}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the components",
          "workingLatex": "\\mathbf{a} = -3\\mathbf{i} + 4\\mathbf{k}",
          "explanation": "In three dimensions each vector has horizontal ($\\mathbf{i}$), depth ($\\mathbf{j}$) and vertical ($\\mathbf{k}$) parts.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the magnitude formula",
          "workingLatex": "|\\mathbf{a}| = \\sqrt{x^2 + y^2 + z^2}",
          "explanation": "Magnitude is the straight-line length from the origin, found with a 3D version of Pythagoras.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute the components",
          "workingLatex": "|\\mathbf{a}| = \\sqrt{-3^2 + 0^2 + 4^2} = \\sqrt{25}",
          "explanation": "Square each component and add them before taking the square root.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate the square root",
          "workingLatex": "|\\mathbf{a}| = 5",
          "explanation": "The result is the length of the vector.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Interpret the result",
          "workingLatex": "|\\mathbf{a}| = 5",
          "explanation": "This scalar gives how long the vector is, regardless of direction.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the answer",
          "workingLatex": "|\\mathbf{a}| = 5",
          "explanation": "We have found the exact magnitude.",
          "diagram": null
        }
      ],
      "finalAnswer": "$|\\mathbf{a}| = 5$"
    }
  },
  {
    "id": "al.y2.pure.vectors-3d.q007",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Vectors in three dimensions",
    "subtopicId": "al.y2.pure.vectors-3d",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "numeric",
    "tags": [
      "vectors",
      "magnitude"
    ],
    "questionText": "Find the magnitude of $\\mathbf{a} = 6\\mathbf{i} + 2\\mathbf{j} + 3\\mathbf{k}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the components",
          "workingLatex": "\\mathbf{a} = 6\\mathbf{i} + 2\\mathbf{j} + 3\\mathbf{k}",
          "explanation": "In three dimensions each vector has horizontal ($\\mathbf{i}$), depth ($\\mathbf{j}$) and vertical ($\\mathbf{k}$) parts.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the magnitude formula",
          "workingLatex": "|\\mathbf{a}| = \\sqrt{x^2 + y^2 + z^2}",
          "explanation": "Magnitude is the straight-line length from the origin, found with a 3D version of Pythagoras.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute the components",
          "workingLatex": "|\\mathbf{a}| = \\sqrt{6^2 + 2^2 + 3^2} = \\sqrt{49}",
          "explanation": "Square each component and add them before taking the square root.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate the square root",
          "workingLatex": "|\\mathbf{a}| = 7",
          "explanation": "The result is the length of the vector.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Interpret the result",
          "workingLatex": "|\\mathbf{a}| = 7",
          "explanation": "This scalar gives how long the vector is, regardless of direction.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the answer",
          "workingLatex": "|\\mathbf{a}| = 7",
          "explanation": "We have found the exact magnitude.",
          "diagram": null
        }
      ],
      "finalAnswer": "$|\\mathbf{a}| = 7$"
    }
  },
  {
    "id": "al.y2.pure.vectors-3d.q008",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Vectors in three dimensions",
    "subtopicId": "al.y2.pure.vectors-3d",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "numeric",
    "tags": [
      "vectors",
      "magnitude"
    ],
    "questionText": "Find the magnitude of $\\mathbf{a} = \\mathbf{i} - 2\\mathbf{j} + 2\\mathbf{k}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the components",
          "workingLatex": "\\mathbf{a} = \\mathbf{i} - 2\\mathbf{j} + 2\\mathbf{k}",
          "explanation": "In three dimensions each vector has horizontal ($\\mathbf{i}$), depth ($\\mathbf{j}$) and vertical ($\\mathbf{k}$) parts.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the magnitude formula",
          "workingLatex": "|\\mathbf{a}| = \\sqrt{x^2 + y^2 + z^2}",
          "explanation": "Magnitude is the straight-line length from the origin, found with a 3D version of Pythagoras.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute the components",
          "workingLatex": "|\\mathbf{a}| = \\sqrt{1^2 + -2^2 + 2^2} = \\sqrt{9}",
          "explanation": "Square each component and add them before taking the square root.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate the square root",
          "workingLatex": "|\\mathbf{a}| = 3",
          "explanation": "The result is the length of the vector.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Interpret the result",
          "workingLatex": "|\\mathbf{a}| = 3",
          "explanation": "This scalar gives how long the vector is, regardless of direction.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the answer",
          "workingLatex": "|\\mathbf{a}| = 3",
          "explanation": "We have found the exact magnitude.",
          "diagram": null
        }
      ],
      "finalAnswer": "$|\\mathbf{a}| = 3$"
    }
  },
  {
    "id": "al.y2.pure.vectors-3d.q009",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Vectors in three dimensions",
    "subtopicId": "al.y2.pure.vectors-3d",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "vector",
    "tags": [
      "vectors",
      "addition"
    ],
    "questionText": "Given $\\mathbf{a} = 3\\mathbf{i} + \\mathbf{j} - 2\\mathbf{k}$ and $\\mathbf{b} = -\\mathbf{i} + 4\\mathbf{j} + 5\\mathbf{k}$, find $\\mathbf{a} + \\mathbf{b}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall vector addition",
          "workingLatex": "\\mathbf{a} + \\mathbf{b} = (a_1+b_1)\\mathbf{i} + (a_2+b_2)\\mathbf{j} + (a_3+b_3)\\mathbf{k}",
          "explanation": "Add matching components: all $\\mathbf{i}$ parts together, then $\\mathbf{j}$, then $\\mathbf{k}$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Add the $\\mathbf{i}$-components",
          "workingLatex": "3 + (-1) = 2",
          "explanation": "Combine the horizontal parts.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Add the $\\mathbf{j}$-components",
          "workingLatex": "1 + 4 = 5",
          "explanation": "Combine the depth parts.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Add the $\\mathbf{k}$-components",
          "workingLatex": "-2 + 5 = 3",
          "explanation": "Combine the vertical parts.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Write the sum",
          "workingLatex": "\\mathbf{a} + \\mathbf{b} = 2\\mathbf{i} + 5\\mathbf{j} + 3\\mathbf{k}",
          "explanation": "Collect the three results into one vector.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the answer",
          "workingLatex": "\\mathbf{a} + \\mathbf{b} = 2\\mathbf{i} + 5\\mathbf{j} + 3\\mathbf{k}",
          "explanation": "This is the resultant when the two displacements are combined.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\mathbf{a} + \\mathbf{b} = 2\\mathbf{i} + 5\\mathbf{j} + 3\\mathbf{k}$"
    }
  },
  {
    "id": "al.y2.pure.vectors-3d.q010",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Vectors in three dimensions",
    "subtopicId": "al.y2.pure.vectors-3d",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "vector",
    "tags": [
      "vectors",
      "subtraction"
    ],
    "questionText": "Given $\\mathbf{p} = 5\\mathbf{i} - 2\\mathbf{j} + \\mathbf{k}$ and $\\mathbf{q} = 2\\mathbf{i} + 3\\mathbf{j} - 4\\mathbf{k}$, find $\\mathbf{p} - \\mathbf{q}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall vector subtraction",
          "workingLatex": "\\mathbf{p} - \\mathbf{q} = (p_1-q_1)\\mathbf{i} + (p_2-q_2)\\mathbf{j} + (p_3-q_3)\\mathbf{k}",
          "explanation": "Subtract component by component, matching each direction.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Subtract the $\\mathbf{i}$-components",
          "workingLatex": "5 - 2 = 3",
          "explanation": "Take the $\\mathbf{i}$ part of $\\mathbf{q}$ from that of $\\mathbf{p}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Subtract the $\\mathbf{j}$-components",
          "workingLatex": "-2 - 3 = -5",
          "explanation": "Carefully subtract, keeping signs.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Subtract the $\\mathbf{k}$-components",
          "workingLatex": "1 - (-4) = 5",
          "explanation": "Subtracting a negative gives addition.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Write the difference",
          "workingLatex": "\\mathbf{p} - \\mathbf{q} = 3\\mathbf{i} - 5\\mathbf{j} + 5\\mathbf{k}",
          "explanation": "Combine the three component results.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the answer",
          "workingLatex": "\\mathbf{p} - \\mathbf{q} = 3\\mathbf{i} - 5\\mathbf{j} + 5\\mathbf{k}",
          "explanation": "This vector points from the tip of $\\mathbf{q}$ to the tip of $\\mathbf{p}$ when placed tail-to-tail.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\mathbf{p} - \\mathbf{q} = 3\\mathbf{i} - 5\\mathbf{j} + 5\\mathbf{k}$"
    }
  },
  {
    "id": "al.y2.pure.vectors-3d.q011",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Vectors in three dimensions",
    "subtopicId": "al.y2.pure.vectors-3d",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "vector",
    "tags": [
      "vectors",
      "scalar-multiple"
    ],
    "questionText": "Find $3\\mathbf{a}$ where $\\mathbf{a} = 2\\mathbf{i} - \\mathbf{j} + 4\\mathbf{k}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall scalar multiplication",
          "workingLatex": "k\\mathbf{a} = k(a_1\\mathbf{i} + a_2\\mathbf{j} + a_3\\mathbf{k})",
          "explanation": "Multiplying a vector by a scalar scales every component by the same factor.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Multiply the $\\mathbf{i}$-component",
          "workingLatex": "3 \\times 2 = 6",
          "explanation": "Scale the horizontal part.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Multiply the $\\mathbf{j}$-component",
          "workingLatex": "3 \\times (-1) = -3",
          "explanation": "Scale the depth part.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Multiply the $\\mathbf{k}$-component",
          "workingLatex": "3 \\times 4 = 12",
          "explanation": "Scale the vertical part.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Write the result",
          "workingLatex": "3\\mathbf{a} = 6\\mathbf{i} - 3\\mathbf{j} + 12\\mathbf{k}",
          "explanation": "The new vector has the same direction but three times the length.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the answer",
          "workingLatex": "3\\mathbf{a} = 6\\mathbf{i} - 3\\mathbf{j} + 12\\mathbf{k}",
          "explanation": "Scalar multiplication stretches the vector without changing its line of action.",
          "diagram": null
        }
      ],
      "finalAnswer": "$3\\mathbf{a} = 6\\mathbf{i} - 3\\mathbf{j} + 12\\mathbf{k}$"
    }
  },
  {
    "id": "al.y2.pure.vectors-3d.q012",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Vectors in three dimensions",
    "subtopicId": "al.y2.pure.vectors-3d",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "numeric",
    "tags": [
      "vectors",
      "distance",
      "coordinates"
    ],
    "questionText": "Find the distance between the points $A(1, 2, 3)$ and $B(4, 6, 3)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Form the displacement vector",
          "workingLatex": "\\overrightarrow{AB} = (4-1)\\mathbf{i} + (6-2)\\mathbf{j} + (3-3)\\mathbf{k} = 3\\mathbf{i} + 4\\mathbf{j}",
          "explanation": "Subtract corresponding coordinates to get the vector from $A$ to $B$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the distance formula",
          "workingLatex": "|\\overrightarrow{AB}| = \\sqrt{3^2 + 4^2 + 0^2}",
          "explanation": "Distance is the magnitude of the displacement vector.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Evaluate the sum of squares",
          "workingLatex": "9 + 16 = 25",
          "explanation": "Add the squared components.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Take the square root",
          "workingLatex": "|\\overrightarrow{AB}| = 5",
          "explanation": "The distance is $5$ units.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Geometric check",
          "workingLatex": "\\text{3-4-5 right triangle in the } xy\\text{-plane}",
          "explanation": "Since the $z$-coordinates match, the points differ only in the $xy$-plane, giving a familiar Pythagorean triple.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the answer",
          "workingLatex": "AB = 5",
          "explanation": "The straight-line distance between $A$ and $B$ is $5$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$AB = 5$"
    }
  },
  {
    "id": "al.y2.pure.vectors-3d.q013",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Vectors in three dimensions",
    "subtopicId": "al.y2.pure.vectors-3d",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "vector",
    "tags": [
      "vectors",
      "unit-vector"
    ],
    "questionText": "Find the unit vector in the direction of $\\mathbf{a} = 6\\mathbf{i} + 8\\mathbf{k}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the unit vector formula",
          "workingLatex": "\\hat{\\mathbf{a}} = \\dfrac{\\mathbf{a}}{|\\mathbf{a}|}",
          "explanation": "A unit vector has length $1$ and points the same way as $\\mathbf{a}$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find the magnitude",
          "workingLatex": "|\\mathbf{a}| = \\sqrt{6^2 + 0^2 + 8^2} = \\sqrt{100} = 10",
          "explanation": "Use the 3D magnitude formula on the given components.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Divide each component by $10$",
          "workingLatex": "\\hat{\\mathbf{a}} = \\dfrac{6}{10}\\mathbf{i} + \\dfrac{8}{10}\\mathbf{k}",
          "explanation": "Scaling by $\\dfrac{1}{|\\mathbf{a}|}$ makes the length exactly $1$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Simplify the fractions",
          "workingLatex": "\\hat{\\mathbf{a}} = \\dfrac{3}{5}\\mathbf{i} + \\dfrac{4}{5}\\mathbf{k}",
          "explanation": "Cancel the common factor of $2$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Verify the length",
          "workingLatex": "\\left(\\dfrac{3}{5}\\right)^2 + \\left(\\dfrac{4}{5}\\right)^2 = 1",
          "explanation": "The squared components sum to $1$, confirming a unit vector.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the answer",
          "workingLatex": "\\hat{\\mathbf{a}} = \\dfrac{3}{5}\\mathbf{i} + \\dfrac{4}{5}\\mathbf{k}",
          "explanation": "This is the direction of $\\mathbf{a}$ scaled to unit length.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\hat{\\mathbf{a}} = \\dfrac{3}{5}\\mathbf{i} + \\dfrac{4}{5}\\mathbf{k}$"
    }
  },
  {
    "id": "al.y2.pure.vectors-3d.q014",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Vectors in three dimensions",
    "subtopicId": "al.y2.pure.vectors-3d",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "vector",
    "tags": [
      "vectors"
    ],
    "questionText": "Write $\\mathbf{c} = \\begin{pmatrix} 0 \\\\ -2 \\\\ 7 \\end{pmatrix}$ in $\\mathbf{i}$, $\\mathbf{j}$, $\\mathbf{k}$ form.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Read each component",
          "workingLatex": "x=0,\\ y=-2,\\ z=7",
          "explanation": "A zero top entry means no $\\mathbf{i}$ term appears.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Skip the zero $\\mathbf{i}$-term",
          "workingLatex": "0\\mathbf{i} = \\mathbf{0}",
          "explanation": "We omit directions with zero coefficient.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write the $\\mathbf{j}$ term",
          "workingLatex": "-2\\mathbf{j}",
          "explanation": "The middle entry gives the $\\mathbf{j}$ part.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write the $\\mathbf{k}$ term",
          "workingLatex": "7\\mathbf{k}",
          "explanation": "The bottom entry gives the $\\mathbf{k}$ part.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Combine",
          "workingLatex": "\\mathbf{c} = -2\\mathbf{j} + 7\\mathbf{k}",
          "explanation": "Only non-zero directions appear.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the answer",
          "workingLatex": "\\mathbf{c} = -2\\mathbf{j} + 7\\mathbf{k}",
          "explanation": "Same vector, different notation.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\mathbf{c} = -2\\mathbf{j} + 7\\mathbf{k}$"
    }
  },
  {
    "id": "al.y2.pure.vectors-3d.q015",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Vectors in three dimensions",
    "subtopicId": "al.y2.pure.vectors-3d",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "numeric",
    "tags": [
      "vectors"
    ],
    "questionText": "Find $|-2\\mathbf{i} + 2\\mathbf{j} + \\mathbf{k}|$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the components",
          "workingLatex": "\\mathbf{a} = -2\\mathbf{i} + 2\\mathbf{j} + \\mathbf{k}",
          "explanation": "In three dimensions each vector has horizontal ($\\mathbf{i}$), depth ($\\mathbf{j}$) and vertical ($\\mathbf{k}$) parts.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the magnitude formula",
          "workingLatex": "|\\mathbf{a}| = \\sqrt{x^2 + y^2 + z^2}",
          "explanation": "Magnitude is the straight-line length from the origin, found with a 3D version of Pythagoras.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute the components",
          "workingLatex": "|\\mathbf{a}| = \\sqrt{-2^2 + 2^2 + 1^2} = \\sqrt{9}",
          "explanation": "Square each component and add them before taking the square root.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate the square root",
          "workingLatex": "|\\mathbf{a}| = 3",
          "explanation": "The result is the length of the vector.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Interpret the result",
          "workingLatex": "|\\mathbf{a}| = 3",
          "explanation": "This scalar gives how long the vector is, regardless of direction.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the answer",
          "workingLatex": "|\\mathbf{a}| = 3",
          "explanation": "We have found the exact magnitude.",
          "diagram": null
        }
      ],
      "finalAnswer": "$|\\mathbf{a}| = 3$"
    }
  },
  {
    "id": "al.y2.pure.vectors-3d.q016",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Vectors in three dimensions",
    "subtopicId": "al.y2.pure.vectors-3d",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "vector",
    "tags": [
      "vectors"
    ],
    "questionText": "Given $\\mathbf{u} = \\begin{pmatrix} 1 \\\\ 2 \\\\ 3 \\end{pmatrix}$ and $\\mathbf{v} = \\begin{pmatrix} 4 \\\\ -1 \\\\ 2 \\end{pmatrix}$, find $\\mathbf{u} + \\mathbf{v}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Add component-wise",
          "workingLatex": "\\mathbf{u}+\\mathbf{v} = \\begin{pmatrix} 1+4 \\\\ 2+(-1) \\\\ 3+2 \\end{pmatrix}",
          "explanation": "Column vectors add entry by entry.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "First entry",
          "workingLatex": "1+4=5",
          "explanation": "Top components combine.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Second entry",
          "workingLatex": "2-1=1",
          "explanation": "Middle components combine.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Third entry",
          "workingLatex": "3+2=5",
          "explanation": "Bottom components combine.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Write the column",
          "workingLatex": "\\begin{pmatrix} 5 \\\\ 1 \\\\ 5 \\end{pmatrix}",
          "explanation": "Stack the three results.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the answer",
          "workingLatex": "\\mathbf{u}+\\mathbf{v} = \\begin{pmatrix} 5 \\\\ 1 \\\\ 5 \\end{pmatrix}",
          "explanation": "The sum in column form.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\mathbf{u} + \\mathbf{v} = \\begin{pmatrix} 5 \\\\ 1 \\\\ 5 \\end{pmatrix}$"
    }
  },
  {
    "id": "al.y2.pure.vectors-3d.q017",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Vectors in three dimensions",
    "subtopicId": "al.y2.pure.vectors-3d",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "numeric",
    "tags": [
      "vectors"
    ],
    "questionText": "Find the distance between $P(-1, 3, 2)$ and $Q(2, 7, 6)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Form $\\overrightarrow{PQ}$",
          "workingLatex": "3\\mathbf{i}+4\\mathbf{j}+4\\mathbf{k}",
          "explanation": "Subtract coordinates: $(2-(-1),\\,7-3,\\,6-2)$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Magnitude formula",
          "workingLatex": "|\\overrightarrow{PQ}|=\\sqrt{3^2+4^2+4^2}",
          "explanation": "Distance equals the length of the displacement vector.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Sum of squares",
          "workingLatex": "9+16+16=41",
          "explanation": "Square each component and add.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Take the square root",
          "workingLatex": "|\\overrightarrow{PQ}|=\\sqrt{41}",
          "explanation": "Leave the surd form unless asked for a decimal.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check plausibility",
          "workingLatex": "\\sqrt{41}\\approx 6.4",
          "explanation": "A quick estimate confirms a sensible length.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the answer",
          "workingLatex": "PQ=\\sqrt{41}",
          "explanation": "The exact straight-line distance between the points.",
          "diagram": null
        }
      ],
      "finalAnswer": "$PQ = \\sqrt{41}$"
    }
  },
  {
    "id": "al.y2.pure.vectors-3d.q018",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Vectors in three dimensions",
    "subtopicId": "al.y2.pure.vectors-3d",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "vector",
    "tags": [
      "vectors",
      "scalar-multiple"
    ],
    "questionText": "Find $-2\\mathbf{a}$ where $\\mathbf{a} = \\mathbf{i} + 3\\mathbf{j} - 2\\mathbf{k}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall scalar multiplication",
          "workingLatex": "-2\\mathbf{a} = -2(a_1\\mathbf{i}+a_2\\mathbf{j}+a_3\\mathbf{k})",
          "explanation": "A negative scalar reverses direction and scales every component.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Scale the $\\mathbf{i}$-component",
          "workingLatex": "-2 \\times 1 = -2",
          "explanation": "Multiply the $\\mathbf{i}$ coefficient by $-2$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Scale the $\\mathbf{j}$-component",
          "workingLatex": "-2 \\times 3 = -6",
          "explanation": "Multiply the $\\mathbf{j}$ coefficient by $-2$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Scale the $\\mathbf{k}$-component",
          "workingLatex": "-2 \\times (-2) = 4",
          "explanation": "A negative times a negative gives a positive.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Write the result",
          "workingLatex": "-2\\mathbf{a} = -2\\mathbf{i} - 6\\mathbf{j} + 4\\mathbf{k}",
          "explanation": "Collect the three scaled components.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the answer",
          "workingLatex": "-2\\mathbf{a} = -2\\mathbf{i} - 6\\mathbf{j} + 4\\mathbf{k}",
          "explanation": "The vector points opposite to $\\mathbf{a}$ with twice its length.",
          "diagram": null
        }
      ],
      "finalAnswer": "$-2\\mathbf{a} = -2\\mathbf{i} - 6\\mathbf{j} + 4\\mathbf{k}$"
    }
  },
  {
    "id": "al.y2.pure.vectors-3d.q019",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Vectors in three dimensions",
    "subtopicId": "al.y2.pure.vectors-3d",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "vector",
    "tags": [
      "vectors",
      "displacement",
      "position-vector"
    ],
    "questionText": "Points $A$ and $B$ have position vectors $\\mathbf{a} = 2\\mathbf{i} + \\mathbf{j} + 3\\mathbf{k}$ and $\\mathbf{b} = 5\\mathbf{i} + 4\\mathbf{j} + \\mathbf{k}$. Find $\\overrightarrow{AB}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write the position vectors",
          "workingLatex": "\\mathbf{a} = 2\\mathbf{i}+\\mathbf{j}+3\\mathbf{k},\\ \\mathbf{b} = 5\\mathbf{i}+4\\mathbf{j}+\\mathbf{k}",
          "explanation": "These locate $A$ and $B$ relative to the origin.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall the displacement formula",
          "workingLatex": "\\overrightarrow{AB} = \\mathbf{b} - \\mathbf{a}",
          "explanation": "Travel from $A$ to $B$ by subtracting the start from the finish.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Subtract $\\mathbf{i}$-components",
          "workingLatex": "5-2=3",
          "explanation": "Horizontal parts combine separately.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Subtract $\\mathbf{j}$-components",
          "workingLatex": "4-1=3",
          "explanation": "Depth parts combine separately.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Subtract $\\mathbf{k}$-components",
          "workingLatex": "1-3=-2",
          "explanation": "Vertical parts combine separately.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the displacement",
          "workingLatex": "\\overrightarrow{AB} = 3\\mathbf{i} + 3\\mathbf{j} - 2\\mathbf{k}",
          "explanation": "This vector carries us directly from $A$ to $B$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\overrightarrow{AB} = 3\\mathbf{i} + 3\\mathbf{j} - 2\\mathbf{k}$"
    }
  },
  {
    "id": "al.y2.pure.vectors-3d.q020",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Vectors in three dimensions",
    "subtopicId": "al.y2.pure.vectors-3d",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "vector",
    "tags": [
      "vectors",
      "midpoint"
    ],
    "questionText": "Find the midpoint of the line segment joining $A(2, -1, 4)$ and $B(6, 3, 0)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the midpoint formula",
          "workingLatex": "M = \\left(\\dfrac{x_1+x_2}{2},\\dfrac{y_1+y_2}{2},\\dfrac{z_1+z_2}{2}\\right)",
          "explanation": "Average each coordinate — the midpoint is exactly halfway.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Average the $x$-coordinates",
          "workingLatex": "\\dfrac{2+6}{2}=4",
          "explanation": "Halfway between $2$ and $6$ is $4$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Average the $y$-coordinates",
          "workingLatex": "\\dfrac{-1+3}{2}=1",
          "explanation": "Halfway between $-1$ and $3$ is $1$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Average the $z$-coordinates",
          "workingLatex": "\\dfrac{4+0}{2}=2",
          "explanation": "Halfway between $4$ and $0$ is $2$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Write the midpoint",
          "workingLatex": "M(4, 1, 2)",
          "explanation": "Combine the three averaged coordinates.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "As a position vector",
          "workingLatex": "\\overrightarrow{OM} = 4\\mathbf{i} + \\mathbf{j} + 2\\mathbf{k}",
          "explanation": "The midpoint can also be expressed as a vector from the origin.",
          "diagram": null
        }
      ],
      "finalAnswer": "$M(4, 1, 2)$ or $\\overrightarrow{OM} = 4\\mathbf{i} + \\mathbf{j} + 2\\mathbf{k}$"
    }
  },
  {
    "id": "al.y2.pure.vectors-3d.q021",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Vectors in three dimensions",
    "subtopicId": "al.y2.pure.vectors-3d",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "vector",
    "tags": [
      "vectors",
      "column-vector",
      "ijk-notation"
    ],
    "questionText": "Write $\\mathbf{d} = 4\\mathbf{i} - \\mathbf{k}$ as a column vector.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Match components to rows",
          "workingLatex": "x\\mathbf{i}+y\\mathbf{j}+z\\mathbf{k} \\leftrightarrow \\begin{pmatrix}x\\\\y\\\\z\\end{pmatrix}",
          "explanation": "Each unit direction corresponds to one row of the column.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Read $x=4$",
          "workingLatex": "4",
          "explanation": "The $\\mathbf{i}$-coefficient is the top entry.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Read $y=0$",
          "workingLatex": "0",
          "explanation": "No $\\mathbf{j}$ term means the middle entry is zero.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Read $z=-1$",
          "workingLatex": "-1",
          "explanation": "The coefficient of $\\mathbf{k}$ is the bottom entry.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Assemble the column",
          "workingLatex": "\\mathbf{d} = \\begin{pmatrix} 4 \\\\ 0 \\\\ -1 \\end{pmatrix}",
          "explanation": "Stack the three values in order.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the answer",
          "workingLatex": "\\mathbf{d} = \\begin{pmatrix} 4 \\\\ 0 \\\\ -1 \\end{pmatrix}",
          "explanation": "Same vector, column notation.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\mathbf{d} = \\begin{pmatrix} 4 \\\\ 0 \\\\ -1 \\end{pmatrix}$"
    }
  },
  {
    "id": "al.y2.pure.vectors-3d.q022",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Vectors in three dimensions",
    "subtopicId": "al.y2.pure.vectors-3d",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "numeric",
    "tags": [
      "vectors",
      "distance"
    ],
    "questionText": "Find the distance between $C(0, 0, 0)$ and $D(2, 3, 6)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Form the displacement",
          "workingLatex": "\\overrightarrow{CD} = 2\\mathbf{i}+3\\mathbf{j}+6\\mathbf{k}",
          "explanation": "From the origin, the position vector of $D$ is the displacement from $C$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Magnitude formula",
          "workingLatex": "|\\overrightarrow{CD}|=\\sqrt{2^2+3^2+6^2}",
          "explanation": "Distance is the length of the displacement.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Sum of squares",
          "workingLatex": "4+9+36=49",
          "explanation": "Add the squared components.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Square root",
          "workingLatex": "|\\overrightarrow{CD}|=7",
          "explanation": "Since $49$ is a perfect square, the distance is an integer.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Interpret",
          "workingLatex": "\\text{length }7\\text{ units}",
          "explanation": "The straight-line distance from the origin to $D$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the answer",
          "workingLatex": "CD=7",
          "explanation": "The required distance.",
          "diagram": null
        }
      ],
      "finalAnswer": "$CD = 7$"
    }
  },
  {
    "id": "al.y2.pure.vectors-3d.q023",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Vectors in three dimensions",
    "subtopicId": "al.y2.pure.vectors-3d",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "vector",
    "tags": [
      "vectors",
      "displacement",
      "column-vector"
    ],
    "questionText": "Relative to $O$, points $A$ and $B$ have position vectors $\\mathbf{a} = \\begin{pmatrix} 3 \\\\ -1 \\\\ 2 \\end{pmatrix}$ and $\\mathbf{b} = \\begin{pmatrix} -1 \\\\ 4 \\\\ 5 \\end{pmatrix}$. Find $\\overrightarrow{AB}$ as a column vector.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Displacement formula",
          "workingLatex": "\\overrightarrow{AB} = \\mathbf{b} - \\mathbf{a}",
          "explanation": "Subtract the starting position from the finishing position.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Subtract top entries",
          "workingLatex": "-1 - 3 = -4",
          "explanation": "First components.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Subtract middle entries",
          "workingLatex": "4 - (-1) = 5",
          "explanation": "Second components.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Subtract bottom entries",
          "workingLatex": "5 - 2 = 3",
          "explanation": "Third components.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Write the column",
          "workingLatex": "\\overrightarrow{AB} = \\begin{pmatrix} -4 \\\\ 5 \\\\ 3 \\end{pmatrix}",
          "explanation": "Stack the three differences.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check by adding back",
          "workingLatex": "\\mathbf{a} + \\overrightarrow{AB} = \\mathbf{b}",
          "explanation": "Displacement added to $\\mathbf{a}$ should give $\\mathbf{b}$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Verify first entry",
          "workingLatex": "3 + (-4) = -1",
          "explanation": "Recovers the $\\mathbf{b}$ top entry.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Verify remaining entries",
          "workingLatex": "\\text{consistent}",
          "explanation": "All three components check.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the answer",
          "workingLatex": "\\overrightarrow{AB} = \\begin{pmatrix} -4 \\\\ 5 \\\\ 3 \\end{pmatrix}",
          "explanation": "The displacement in column form.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\overrightarrow{AB} = \\begin{pmatrix} -4 \\\\ 5 \\\\ 3 \\end{pmatrix}$"
    }
  },
  {
    "id": "al.y2.pure.vectors-3d.q024",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Vectors in three dimensions",
    "subtopicId": "al.y2.pure.vectors-3d",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "vector",
    "tags": [
      "vectors",
      "midpoint"
    ],
    "questionText": "The points $A$ and $B$ have position vectors $\\mathbf{a} = 4\\mathbf{i} - 2\\mathbf{j} + 6\\mathbf{k}$ and $\\mathbf{b} = 8\\mathbf{i} + 4\\mathbf{j} - 2\\mathbf{k}$. Find the position vector of the midpoint $M$ of $AB$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Midpoint formula",
          "workingLatex": "M = \\dfrac{1}{2}(\\mathbf{a}+\\mathbf{b})",
          "explanation": "The midpoint position vector averages the two endpoints.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Add position vectors",
          "workingLatex": "\\mathbf{a}+\\mathbf{b} = 12\\mathbf{i} + 2\\mathbf{j} + 4\\mathbf{k}",
          "explanation": "Add matching components first.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Halve each component",
          "workingLatex": "\\dfrac{1}{2}(12\\mathbf{i} + 2\\mathbf{j} + 4\\mathbf{k})",
          "explanation": "Multiply by $\\dfrac{1}{2}$ to find the halfway point.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Simplify",
          "workingLatex": "\\overrightarrow{OM} = 6\\mathbf{i} + \\mathbf{j} + 2\\mathbf{k}",
          "explanation": "Divide each component by $2$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "As coordinates",
          "workingLatex": "M(6, 1, 2)",
          "explanation": "The midpoint in coordinate form.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Verify $x$-average",
          "workingLatex": "\\dfrac{4+8}{2}=6",
          "explanation": "The $x$-coordinate is the average.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Verify $y$-average",
          "workingLatex": "\\dfrac{-2+4}{2}=1",
          "explanation": "The $y$-coordinate is the average.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Verify $z$-average",
          "workingLatex": "\\dfrac{6+-2}{2}=2",
          "explanation": "The $z$-coordinate is the average.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Interpret",
          "workingLatex": "\\text{equidistant from } A \\text{ and } B",
          "explanation": "The midpoint is the same distance from both endpoints.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the answer",
          "workingLatex": "\\overrightarrow{OM} = 6\\mathbf{i} + \\mathbf{j} + 2\\mathbf{k}",
          "explanation": "The midpoint position vector.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\overrightarrow{OM} = 6\\mathbf{i} + \\mathbf{j} + 2\\mathbf{k}$"
    }
  },
  {
    "id": "al.y2.pure.vectors-3d.q025",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Vectors in three dimensions",
    "subtopicId": "al.y2.pure.vectors-3d",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "vector",
    "tags": [
      "vectors",
      "unit-vector"
    ],
    "questionText": "Find the unit vector in the direction of $\\mathbf{v} = 2\\mathbf{i} + 2\\mathbf{j} + \\mathbf{k}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Formula",
          "workingLatex": "\\hat{\\mathbf{v}} = \\dfrac{\\mathbf{v}}{|\\mathbf{v}|}",
          "explanation": "Divide by magnitude to obtain length $1$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Magnitude",
          "workingLatex": "|\\mathbf{v}| = \\sqrt{4+4+1} = 3",
          "explanation": "Square each component, add, then square root.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Divide",
          "workingLatex": "\\hat{\\mathbf{v}} = \\dfrac{2}{3}\\mathbf{i} + \\dfrac{2}{3}\\mathbf{j} + \\dfrac{1}{3}\\mathbf{k}",
          "explanation": "Each component divided by $3$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Check length",
          "workingLatex": "\\left(\\dfrac{2}{3}\\right)^2+\\left(\\dfrac{2}{3}\\right)^2+\\left(\\dfrac{1}{3}\\right)^2 = 1",
          "explanation": "Confirms a unit vector.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Direction",
          "workingLatex": "\\text{parallel to } \\mathbf{v}",
          "explanation": "Same line of action, scaled to unit length.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the answer",
          "workingLatex": "\\hat{\\mathbf{v}} = \\dfrac{2}{3}\\mathbf{i} + \\dfrac{2}{3}\\mathbf{j} + \\dfrac{1}{3}\\mathbf{k}",
          "explanation": "Required unit vector.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check each component",
          "workingLatex": "\\hat{\\mathbf{v}} = \\dfrac{2}{3}\\mathbf{i} + \\dfrac{2}{3}\\mathbf{j} + \\dfrac{1}{3}\\mathbf{k}",
          "explanation": "Verify $\\mathbf{i}$, $\\mathbf{j}$ and $\\mathbf{k}$ parts separately before combining.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Geometric interpretation",
          "workingLatex": "\\hat{\\mathbf{v}} = \\dfrac{2}{3}\\mathbf{i} + \\dfrac{2}{3}\\mathbf{j} + \\dfrac{1}{3}\\mathbf{k}",
          "explanation": "Relate the vector result to position, displacement or distance in 3D space.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Consistency check",
          "workingLatex": "\\hat{\\mathbf{v}} = \\dfrac{2}{3}\\mathbf{i} + \\dfrac{2}{3}\\mathbf{j} + \\dfrac{1}{3}\\mathbf{k}",
          "explanation": "Substitute back or compare magnitudes to confirm the working is coherent.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\hat{\\mathbf{v}} = \\dfrac{2}{3}\\mathbf{i} + \\dfrac{2}{3}\\mathbf{j} + \\dfrac{1}{3}\\mathbf{k}$"
    }
  },
  {
    "id": "al.y2.pure.vectors-3d.q026",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Vectors in three dimensions",
    "subtopicId": "al.y2.pure.vectors-3d",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "numeric",
    "tags": [
      "vectors",
      "parallel"
    ],
    "questionText": "The vectors $\\mathbf{a} = 3\\mathbf{i} - 6\\mathbf{j} + 3\\mathbf{k}$ and $\\mathbf{b} = \\mathbf{i} - 2\\mathbf{j} + t\\mathbf{k}$ are parallel. Find $t$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Parallel condition",
          "workingLatex": "\\mathbf{a} = k\\mathbf{b} \\text{ for some } k",
          "explanation": "Parallel vectors are scalar multiples of each other.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Compare $\\mathbf{i}$-components",
          "workingLatex": "3 = k(1) \\Rightarrow k = 3",
          "explanation": "Match the first components to find the scale factor.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Check $\\mathbf{j}$-components",
          "workingLatex": "-6 = 3(-2) = -6",
          "explanation": "The scale factor $k=3$ is consistent for $\\mathbf{j}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply to $\\mathbf{k}$",
          "workingLatex": "3 = 3(t) \\Rightarrow t = 1",
          "explanation": "Use the same $k$ on the $\\mathbf{k}$-components.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Verify",
          "workingLatex": "\\mathbf{a} = 3\\mathbf{b}",
          "explanation": "Substituting $t=1$ gives an exact scalar multiple.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Interpret",
          "workingLatex": "\\text{same direction line}",
          "explanation": "Both vectors lie on the same line through the origin.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Alternative check",
          "workingLatex": "\\dfrac{3}{1} = \\dfrac{-6}{-2} = \\dfrac{3}{t}",
          "explanation": "Component ratios must all be equal.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Confirm $t$",
          "workingLatex": "t = 1",
          "explanation": "Only value making all ratios equal.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the answer",
          "workingLatex": "t = 1",
          "explanation": "The unknown component.",
          "diagram": null
        }
      ],
      "finalAnswer": "$t = 1$"
    }
  },
  {
    "id": "al.y2.pure.vectors-3d.q027",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Vectors in three dimensions",
    "subtopicId": "al.y2.pure.vectors-3d",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "proof",
    "tags": [
      "vectors",
      "collinearity"
    ],
    "questionText": "Points $A$, $B$ and $C$ have position vectors $\\mathbf{a} = \\mathbf{i} + 2\\mathbf{j} + \\mathbf{k}$, $\\mathbf{b} = 3\\mathbf{i} + 6\\mathbf{j} + 3\\mathbf{k}$ and $\\mathbf{c} = 2\\mathbf{i} + 4\\mathbf{j} + 2\\mathbf{k}$. Show that $A$, $B$ and $C$ are collinear.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Form $\\overrightarrow{AB}$",
          "workingLatex": "\\overrightarrow{AB} = 2\\mathbf{i} + 4\\mathbf{j} + 2\\mathbf{k}",
          "explanation": "Displacement from $A$ to $B$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Form $\\overrightarrow{AC}$",
          "workingLatex": "\\overrightarrow{AC} = \\mathbf{i} + 2\\mathbf{j} + \\mathbf{k}",
          "explanation": "Displacement from $A$ to $C$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Test for scalar multiple",
          "workingLatex": "\\overrightarrow{AB} = 2\\overrightarrow{AC}",
          "explanation": "Collinear points give parallel displacement vectors — one is a scalar multiple of the other.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Check $\\mathbf{i}$-components",
          "workingLatex": "2 = 2 \\times 1",
          "explanation": "The scale factor must match in every component.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check $\\mathbf{j}$-components",
          "workingLatex": "4 = 2 \\times 2",
          "explanation": "All three components must share the same multiplier.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check $\\mathbf{k}$-components",
          "workingLatex": "2 = 2 \\times 1",
          "explanation": "If any ratio differs, the points are not collinear.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Common point",
          "workingLatex": "A \\text{ is shared}",
          "explanation": "Both vectors start from $A$, so they lie on the same line through $A$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Conclude collinearity",
          "workingLatex": "A,\\ B \\text{ and } C \\text{ are collinear}",
          "explanation": "Parallel displacements from a common point mean the three points lie on one straight line.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the result",
          "workingLatex": "\\overrightarrow{AB} = 2\\overrightarrow{AC}",
          "explanation": "The scalar-multiple condition is satisfied.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Note relationship to $\\mathbf{a}$",
          "workingLatex": "\\mathbf{b} = 3\\mathbf{a},\\ \\mathbf{c} = 2\\mathbf{a}",
          "explanation": "Both $B$ and $C$ lie on the line through the origin and $A$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Conclusion",
          "workingLatex": "A,\\ B,\\ C \\text{ collinear}",
          "explanation": "All three points lie on one straight line.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "State the result",
          "workingLatex": "\\text{collinear}",
          "explanation": "Proof complete.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\overrightarrow{AB} = 2\\overrightarrow{AC}$, so the points are collinear."
    }
  },
  {
    "id": "al.y2.pure.vectors-3d.q028",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Vectors in three dimensions",
    "subtopicId": "al.y2.pure.vectors-3d",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "numeric",
    "tags": [
      "vectors",
      "magnitude",
      "addition"
    ],
    "questionText": "Given $\\mathbf{p} = 2\\mathbf{i} + 3\\mathbf{j} - \\mathbf{k}$ and $\\mathbf{q} = 2\\mathbf{i} + \\mathbf{j} + 3\\mathbf{k}$, find $|\\mathbf{p} + \\mathbf{q}|$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Add vectors",
          "workingLatex": "\\mathbf{p}+\\mathbf{q} = 4\\mathbf{i}+4\\mathbf{j}+2\\mathbf{k}",
          "explanation": "Add matching components.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Magnitude formula",
          "workingLatex": "|\\mathbf{p}+\\mathbf{q}|=\\sqrt{16+16+4}",
          "explanation": "Square, sum, square root.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Sum of squares",
          "workingLatex": "36",
          "explanation": "Evaluate.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Square root",
          "workingLatex": "6",
          "explanation": "Result.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Interpret",
          "workingLatex": "\\text{length of resultant}",
          "explanation": "Magnitude of the sum vector.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Note",
          "workingLatex": "|\\mathbf{p}+\\mathbf{q}| \\neq |\\mathbf{p}|+|\\mathbf{q}|",
          "explanation": "Magnitudes do not add unless vectors are parallel.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check components",
          "workingLatex": "4,4,2",
          "explanation": "Consistent.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Verify",
          "workingLatex": "\\sqrt{36}=6",
          "explanation": "Confirmed.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the answer",
          "workingLatex": "|\\mathbf{p}+\\mathbf{q}|=6",
          "explanation": "Required magnitude.",
          "diagram": null
        }
      ],
      "finalAnswer": "$|\\mathbf{p} + \\mathbf{q}| = 6$"
    }
  },
  {
    "id": "al.y2.pure.vectors-3d.q029",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Vectors in three dimensions",
    "subtopicId": "al.y2.pure.vectors-3d",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "numeric",
    "tags": [
      "vectors",
      "magnitude",
      "subtraction"
    ],
    "questionText": "Given $\\mathbf{a} = 5\\mathbf{i} + 12\\mathbf{k}$ and $\\mathbf{b} = 3\\mathbf{i} + 4\\mathbf{j} + 5\\mathbf{k}$, find $|\\mathbf{a} - \\mathbf{b}|$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Subtract",
          "workingLatex": "\\mathbf{a}-\\mathbf{b} = 2\\mathbf{i}-4\\mathbf{j}+7\\mathbf{k}",
          "explanation": "Component-wise subtraction.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Magnitude",
          "workingLatex": "|\\mathbf{a}-\\mathbf{b}|=\\sqrt{4+16+49}",
          "explanation": "3D Pythagoras.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Sum",
          "workingLatex": "69",
          "explanation": "Add squared components.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Simplify",
          "workingLatex": "\\sqrt{69}",
          "explanation": "Exact surd form.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Estimate",
          "workingLatex": "\\approx 8.31",
          "explanation": "Plausibility check.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Meaning",
          "workingLatex": "\\text{length of } \\mathbf{a}-\\mathbf{b}",
          "explanation": "Distance between vector tips when placed tail-to-tail.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Components",
          "workingLatex": "2,-4,7",
          "explanation": "Listed.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Verify squares",
          "workingLatex": "4+16+49=69",
          "explanation": "Confirmed.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the answer",
          "workingLatex": "|\\mathbf{a}-\\mathbf{b}|=\\sqrt{69}",
          "explanation": "Required magnitude.",
          "diagram": null
        }
      ],
      "finalAnswer": "$|\\mathbf{a} - \\mathbf{b}| = \\sqrt{69}$"
    }
  },
  {
    "id": "al.y2.pure.vectors-3d.q030",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Vectors in three dimensions",
    "subtopicId": "al.y2.pure.vectors-3d",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "numeric",
    "tags": [
      "vectors",
      "magnitude"
    ],
    "questionText": "Find $|3\\mathbf{i} - 3\\mathbf{j} + 3\\mathbf{k}|$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the components",
          "workingLatex": "\\mathbf{v} = 3\\mathbf{i} - 3\\mathbf{j} + 3\\mathbf{k}",
          "explanation": "In three dimensions each vector has horizontal ($\\mathbf{i}$), depth ($\\mathbf{j}$) and vertical ($\\mathbf{k}$) parts.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the magnitude formula",
          "workingLatex": "|\\mathbf{v}| = \\sqrt{x^2 + y^2 + z^2}",
          "explanation": "Magnitude is the straight-line length from the origin, found with a 3D version of Pythagoras.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute the components",
          "workingLatex": "|\\mathbf{v}| = \\sqrt{3^2 + -3^2 + 3^2} = \\sqrt{27}",
          "explanation": "Square each component and add them before taking the square root.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate the square root",
          "workingLatex": "|\\mathbf{v}| = 3\\sqrt{3}",
          "explanation": "The result is the length of the vector.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Interpret the result",
          "workingLatex": "|\\mathbf{v}| = 3\\sqrt{3}",
          "explanation": "This scalar gives how long the vector is, regardless of direction.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the answer",
          "workingLatex": "|\\mathbf{v}| = 3\\sqrt{3}",
          "explanation": "We have found the exact magnitude.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Factor",
          "workingLatex": "3\\sqrt{(-1)^2+1^2+1^2}",
          "explanation": "Factor out the common magnitude scale.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Simplify",
          "workingLatex": "3\\sqrt{3}",
          "explanation": "Exact surd form.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the answer",
          "workingLatex": "|\\mathbf{v}|=3\\sqrt{3}",
          "explanation": "Required magnitude.",
          "diagram": null
        }
      ],
      "finalAnswer": "$|\\mathbf{v}| = 3\\sqrt{3}$"
    }
  },
  {
    "id": "al.y2.pure.vectors-3d.q031",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Vectors in three dimensions",
    "subtopicId": "al.y2.pure.vectors-3d",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "vector",
    "tags": [
      "vectors",
      "position-vector"
    ],
    "questionText": "Find the position vector of point $P$ with coordinates $(-2, 5, 1)$ relative to the origin $O$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Position vector meaning",
          "workingLatex": "\\overrightarrow{OP} \\text{ locates } P \\text{ from } O",
          "explanation": "Each coordinate becomes a component.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Read $x=-2$",
          "workingLatex": "-2\\mathbf{i}",
          "explanation": "First coordinate.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Read $y=5$",
          "workingLatex": "5\\mathbf{j}",
          "explanation": "Second coordinate.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Read $z=1$",
          "workingLatex": "\\mathbf{k}",
          "explanation": "Third coordinate.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Combine",
          "workingLatex": "\\overrightarrow{OP} = -2\\mathbf{i} + 5\\mathbf{j} + \\mathbf{k}",
          "explanation": "Sum the three parts.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Column form",
          "workingLatex": "\\begin{pmatrix}-2\\\\5\\\\1\\end{pmatrix}",
          "explanation": "Equivalent notation.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check",
          "workingLatex": "P(-2,5,1)",
          "explanation": "Matches coordinates.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Interpret",
          "workingLatex": "\\text{displacement from origin to } P",
          "explanation": "Defines location in 3D.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the answer",
          "workingLatex": "\\overrightarrow{OP} = -2\\mathbf{i} + 5\\mathbf{j} + \\mathbf{k}",
          "explanation": "Required position vector.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\overrightarrow{OP} = -2\\mathbf{i} + 5\\mathbf{j} + \\mathbf{k}$"
    }
  },
  {
    "id": "al.y2.pure.vectors-3d.q032",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Vectors in three dimensions",
    "subtopicId": "al.y2.pure.vectors-3d",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "proof",
    "tags": [
      "vectors",
      "collinearity"
    ],
    "questionText": "Show that the points $P(1, 2, 3)$, $Q(3, 6, 9)$ and $R(2, 4, 6)$ are collinear.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Position vectors",
          "workingLatex": "\\mathbf{p}=\\mathbf{i}+2\\mathbf{j}+3\\mathbf{k},\\ \\mathbf{q}=3\\mathbf{i}+6\\mathbf{j}+9\\mathbf{k},\\ \\mathbf{r}=2\\mathbf{i}+4\\mathbf{j}+6\\mathbf{k}",
          "explanation": "Write each point from the origin.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Vector $\\overrightarrow{PQ}$",
          "workingLatex": "2\\mathbf{i}+4\\mathbf{j}+6\\mathbf{k}",
          "explanation": "Subtract $\\mathbf{p}$ from $\\mathbf{q}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Vector $\\overrightarrow{PR}$",
          "workingLatex": "\\mathbf{i}+2\\mathbf{j}+3\\mathbf{k}",
          "explanation": "Subtract $\\mathbf{p}$ from $\\mathbf{r}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Scalar multiple",
          "workingLatex": "\\overrightarrow{PQ} = 2\\overrightarrow{PR}",
          "explanation": "One displacement is twice the other.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Common point $P$",
          "workingLatex": "\\text{both vectors start at } P",
          "explanation": "They lie on the same line through $P$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Ratio check",
          "workingLatex": "\\overrightarrow{PR}:\\overrightarrow{PQ} = 1:2",
          "explanation": "Consistent spacing along the line.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Coordinate view",
          "workingLatex": "Q \\text{ triples each coordinate of } P",
          "explanation": "Scaling from origin also visible.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Conclude",
          "workingLatex": "P,\\ Q,\\ R \\text{ collinear}",
          "explanation": "Parallel displacements from $P$ prove collinearity.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the result",
          "workingLatex": "\\text{collinear}",
          "explanation": "Proof complete.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\overrightarrow{PQ} = 2\\overrightarrow{PR}$, so $P$, $Q$ and $R$ are collinear."
    }
  },
  {
    "id": "al.y2.pure.vectors-3d.q033",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Vectors in three dimensions",
    "subtopicId": "al.y2.pure.vectors-3d",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "vector",
    "tags": [
      "vectors",
      "ratio",
      "section-formula"
    ],
    "questionText": "The point $P$ divides the line segment $AB$ internally in the ratio $2:1$, where $\\mathbf{a} = \\mathbf{i} + 2\\mathbf{j} + 3\\mathbf{k}$ and $\\mathbf{b} = 7\\mathbf{i} + 5\\mathbf{j} + 3\\mathbf{k}$. Find $\\mathbf{p}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Section formula",
          "workingLatex": "\\mathbf{p} = \\dfrac{1\\mathbf{a} + 2\\mathbf{b}}{3}",
          "explanation": "Point $P$ divides $AB$ internally in ratio $2:1$ — $m$ parts from $A$, $n$ from $B$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute vectors",
          "workingLatex": "\\mathbf{a}=\\mathbf{i} + 2\\mathbf{j} + 3\\mathbf{k},\\ \\mathbf{b}=7\\mathbf{i} + 5\\mathbf{j} + 3\\mathbf{k}",
          "explanation": "Write the endpoint position vectors.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Scale $\\mathbf{a}$",
          "workingLatex": "1\\mathbf{a} = \\mathbf{i} + 2\\mathbf{j} + 3\\mathbf{k}",
          "explanation": "Multiply $\\mathbf{a}$ by $1$ (the part nearest $B$).",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Scale $\\mathbf{b}$",
          "workingLatex": "2\\mathbf{b} = 14\\mathbf{i} + 10\\mathbf{j} + 6\\mathbf{k}",
          "explanation": "Multiply $\\mathbf{b}$ by $2$ (the part nearest $A$).",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Add and divide",
          "workingLatex": "\\mathbf{p} = \\dfrac{1}{3}(15\\mathbf{i} + 12\\mathbf{j} + 9\\mathbf{k})",
          "explanation": "Add the weighted vectors, then divide by $m+n$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Simplify components",
          "workingLatex": "\\mathbf{p} = 5\\mathbf{i} + 4\\mathbf{j} + 3\\mathbf{k}",
          "explanation": "Evaluate each component.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Ratio check",
          "workingLatex": "\\overrightarrow{AP} : \\overrightarrow{PB} = 2:1",
          "explanation": "The point is closer to the endpoint with the smaller ratio part.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Coordinate form",
          "workingLatex": "P(5, 4, 3)",
          "explanation": "Express as coordinates if helpful.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Verify on segment",
          "workingLatex": "\\text{lies between } A \\text{ and } B",
          "explanation": "Internal division keeps $P$ on the line segment.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the answer",
          "workingLatex": "\\mathbf{p} = 5\\mathbf{i} + 4\\mathbf{j} + 3\\mathbf{k}",
          "explanation": "The position vector of $P$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\mathbf{p} = 5\\mathbf{i} + 4\\mathbf{j} + 3\\mathbf{k}$"
    }
  },
  {
    "id": "al.y2.pure.vectors-3d.q034",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Vectors in three dimensions",
    "subtopicId": "al.y2.pure.vectors-3d",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "vector",
    "tags": [
      "vectors",
      "ratio",
      "section-formula"
    ],
    "questionText": "Point $P$ divides $AB$ internally in the ratio $1:2$, where $A$ is $(0, 0, 0)$ and $B$ is $(6, 3, 9)$. Find the coordinates of $P$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Section formula",
          "workingLatex": "\\mathbf{p} = \\dfrac{2\\mathbf{a} + 1\\mathbf{b}}{3}",
          "explanation": "Point $P$ divides $AB$ internally in ratio $1:2$ — $m$ parts from $A$, $n$ from $B$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute vectors",
          "workingLatex": "\\mathbf{a}=\\mathbf{0},\\ \\mathbf{b}=6\\mathbf{i} + 3\\mathbf{j} + 9\\mathbf{k}",
          "explanation": "Write the endpoint position vectors.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Scale $\\mathbf{a}$",
          "workingLatex": "2\\mathbf{a} = \\mathbf{0}",
          "explanation": "Multiply $\\mathbf{a}$ by $2$ (the part nearest $B$).",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Scale $\\mathbf{b}$",
          "workingLatex": "1\\mathbf{b} = 6\\mathbf{i} + 3\\mathbf{j} + 9\\mathbf{k}",
          "explanation": "Multiply $\\mathbf{b}$ by $1$ (the part nearest $A$).",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Add and divide",
          "workingLatex": "\\mathbf{p} = \\dfrac{1}{3}(6\\mathbf{i} + 3\\mathbf{j} + 9\\mathbf{k})",
          "explanation": "Add the weighted vectors, then divide by $m+n$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Simplify components",
          "workingLatex": "\\mathbf{p} = 2\\mathbf{i} + \\mathbf{j} + 3\\mathbf{k}",
          "explanation": "Evaluate each component.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Ratio check",
          "workingLatex": "\\overrightarrow{AP} : \\overrightarrow{PB} = 1:2",
          "explanation": "The point is closer to the endpoint with the smaller ratio part.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Coordinate form",
          "workingLatex": "P(2, 1, 3)",
          "explanation": "Express as coordinates if helpful.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Verify on segment",
          "workingLatex": "\\text{lies between } A \\text{ and } B",
          "explanation": "Internal division keeps $P$ on the line segment.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the answer",
          "workingLatex": "\\mathbf{p} = 2\\mathbf{i} + \\mathbf{j} + 3\\mathbf{k}",
          "explanation": "The position vector of $P$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(2, 1, 3)$"
    }
  },
  {
    "id": "al.y2.pure.vectors-3d.q035",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Vectors in three dimensions",
    "subtopicId": "al.y2.pure.vectors-3d",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "vector",
    "tags": [
      "vectors",
      "parallelogram"
    ],
    "questionText": "OABC is a parallelogram with $\\mathbf{a} = 2\\mathbf{i} + \\mathbf{j}$ and $\\mathbf{b} = \\mathbf{i} + 3\\mathbf{j} + 2\\mathbf{k}$ as position vectors of $A$ and $B$. Find $\\mathbf{c}$, the position vector of $C$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Parallelogram property",
          "workingLatex": "\\overrightarrow{AB} = \\overrightarrow{DC}",
          "explanation": "Opposite sides of a parallelogram are equal and parallel.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Use $\\overrightarrow{OC} = \\mathbf{a}+\\mathbf{b}$",
          "workingLatex": "\\mathbf{c} = 2\\mathbf{i}+\\mathbf{j} + \\mathbf{i}+3\\mathbf{j}+2\\mathbf{k}",
          "explanation": "From $O$ to $C$ via $A$ then $B$ (or $B$ then $A$).",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find $\\overrightarrow{OD}$",
          "workingLatex": "\\mathbf{d} = \\mathbf{b} + \\mathbf{a}",
          "explanation": "The fourth vertex completes the parallelogram.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Add components",
          "workingLatex": "\\mathbf{d} = 3\\mathbf{i}+4\\mathbf{j}+2\\mathbf{k}",
          "explanation": "Add matching $\\mathbf{i}$, $\\mathbf{j}$, $\\mathbf{k}$ parts.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Alternative route",
          "workingLatex": "\\mathbf{d} = \\mathbf{c} + (\\mathbf{b}-\\mathbf{a})",
          "explanation": "Or go from $C$ parallel to $\\overrightarrow{AB}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check opposite sides",
          "workingLatex": "\\overrightarrow{AD} = \\overrightarrow{BC}",
          "explanation": "Both pairs of opposite sides must match.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Geometric meaning",
          "workingLatex": "\\text{fourth vertex of parallelogram } OABC",
          "explanation": "The vector $\\mathbf{d}$ locates the missing corner.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State the answer",
          "workingLatex": "\\mathbf{d} = 3\\mathbf{i}+4\\mathbf{j}+2\\mathbf{k}",
          "explanation": "The position vector of the fourth vertex.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Verify $\\overrightarrow{AB}$",
          "workingLatex": "\\mathbf{b}-\\mathbf{a} = -\\mathbf{i}+2\\mathbf{j}+2\\mathbf{k}",
          "explanation": "Side vector from $A$ to $B$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Verify $\\overrightarrow{OC}$",
          "workingLatex": "\\mathbf{c} = \\mathbf{a}+\\mathbf{b}",
          "explanation": "Diagonal from $O$ to $C$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "State the answer",
          "workingLatex": "\\mathbf{c} = 3\\mathbf{i}+4\\mathbf{j}+2\\mathbf{k}",
          "explanation": "Position vector of $C$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\mathbf{c} = 3\\mathbf{i} + 4\\mathbf{j} + 2\\mathbf{k}$"
    }
  },
  {
    "id": "al.y2.pure.vectors-3d.q036",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Vectors in three dimensions",
    "subtopicId": "al.y2.pure.vectors-3d",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "numeric",
    "tags": [
      "vectors",
      "cuboid",
      "diagonal"
    ],
    "questionText": "A cuboid has edge lengths $3$ cm, $4$ cm and $12$ cm. Find the length of its space diagonal.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Space diagonal formula",
          "workingLatex": "d = \\sqrt{l^2 + w^2 + h^2}",
          "explanation": "The body diagonal crosses the cuboid corner to opposite corner through the interior.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute dimensions",
          "workingLatex": "d = \\sqrt{3^2 + 4^2 + 12^2}",
          "explanation": "Square each edge length and add.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Evaluate squares",
          "workingLatex": "d = \\sqrt{9 + 16 + 144}",
          "explanation": "Compute each squared term.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Sum",
          "workingLatex": "d = \\sqrt{169}",
          "explanation": "Add the three squared edges.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify",
          "workingLatex": "d = 13",
          "explanation": "Take the square root.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "3D Pythagoras",
          "workingLatex": "\\text{face diagonal then height}",
          "explanation": "Equivalently: find a face diagonal first, then use Pythagoras with the third edge.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the answer",
          "workingLatex": "d = 13",
          "explanation": "The length of the space diagonal.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Face diagonal first",
          "workingLatex": "\\sqrt{3^2+4^2}=5",
          "explanation": "Optional: base diagonal is $5$ cm.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Then height",
          "workingLatex": "\\sqrt{5^2+12^2}=13",
          "explanation": "Pythagoras with height gives the same answer.",
          "diagram": null
        }
      ],
      "finalAnswer": "$d = 13$ cm"
    }
  },
  {
    "id": "al.y2.pure.vectors-3d.q037",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Vectors in three dimensions",
    "subtopicId": "al.y2.pure.vectors-3d",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "numeric",
    "tags": [
      "vectors",
      "cuboid",
      "face-diagonal"
    ],
    "questionText": "A rectangular box has dimensions $5$ m by $5$ m by $10$ m. Find the length of a diagonal on the $5\\times 10$ face.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Face diagonal formula",
          "workingLatex": "d = \\sqrt{a^2+b^2}",
          "explanation": "A face diagonal lies in a plane — use 2D Pythagoras.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute",
          "workingLatex": "d = \\sqrt{5^2+10^2}",
          "explanation": "Use the two edge lengths on that face.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Evaluate",
          "workingLatex": "d = \\sqrt{25+100} = \\sqrt{125}",
          "explanation": "Add squares.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Simplify surd",
          "workingLatex": "d = 5\\sqrt{5}",
          "explanation": "Factor out perfect squares.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Estimate",
          "workingLatex": "d \\approx 11.2\\text{ m}",
          "explanation": "Plausibility check.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Geometric role",
          "workingLatex": "\\text{building block for space diagonal}",
          "explanation": "Face diagonals help solve 3D problems.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Units",
          "workingLatex": "5\\sqrt{5}\\text{ m}",
          "explanation": "Include units.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check",
          "workingLatex": "(5\\sqrt{5})^2 = 125",
          "explanation": "Square to verify.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the answer",
          "workingLatex": "d = 5\\sqrt{5}\\text{ m}",
          "explanation": "Face diagonal length.",
          "diagram": null
        }
      ],
      "finalAnswer": "$d = 5\\sqrt{5}$ m"
    }
  },
  {
    "id": "al.y2.pure.vectors-3d.q038",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Vectors in three dimensions",
    "subtopicId": "al.y2.pure.vectors-3d",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "numeric",
    "tags": [
      "vectors",
      "parallel"
    ],
    "questionText": "Given $\\mathbf{a} = 2\\mathbf{i} + 4\\mathbf{j} + 6\\mathbf{k}$ and $\\mathbf{b} = \\mathbf{i} + 2\\mathbf{j} + t\\mathbf{k}$ are parallel, find $t$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Parallel vectors",
          "workingLatex": "\\mathbf{a} = k\\mathbf{b}",
          "explanation": "One is a scalar multiple of the other.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "$\\mathbf{i}$-ratio",
          "workingLatex": "2/1 = 2",
          "explanation": "Scale factor candidate $k=2$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "$\\mathbf{j}$-ratio",
          "workingLatex": "4/2 = 2",
          "explanation": "Consistent with $k=2$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "$\\mathbf{k}$-equation",
          "workingLatex": "6 = 2t",
          "explanation": "Apply $k=2$ to $\\mathbf{k}$-components.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve",
          "workingLatex": "t = 3",
          "explanation": "Divide by $2$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Verify",
          "workingLatex": "\\mathbf{a} = 2\\mathbf{b}",
          "explanation": "Check all components.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Direction",
          "workingLatex": "\\text{same line through origin}",
          "explanation": "Parallel confirmed.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Alternative",
          "workingLatex": "t = 6/2 = 3",
          "explanation": "Direct ratio of $\\mathbf{k}$-parts.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the answer",
          "workingLatex": "t = 3",
          "explanation": "Unknown component.",
          "diagram": null
        }
      ],
      "finalAnswer": "$t = 3$"
    }
  },
  {
    "id": "al.y2.pure.vectors-3d.q039",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Vectors in three dimensions",
    "subtopicId": "al.y2.pure.vectors-3d",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "vector",
    "tags": [
      "vectors",
      "midpoint"
    ],
    "questionText": "Find the midpoint of $A(-3, 4, 1)$ and $B(5, -2, 7)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Midpoint formula",
          "workingLatex": "M = \\dfrac{1}{2}(\\mathbf{a}+\\mathbf{b})",
          "explanation": "The midpoint position vector averages the two endpoints.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Add position vectors",
          "workingLatex": "\\mathbf{a}+\\mathbf{b} = 2\\mathbf{i} + 2\\mathbf{j} + 8\\mathbf{k}",
          "explanation": "Add matching components first.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Halve each component",
          "workingLatex": "\\dfrac{1}{2}(2\\mathbf{i} + 2\\mathbf{j} + 8\\mathbf{k})",
          "explanation": "Multiply by $\\dfrac{1}{2}$ to find the halfway point.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Simplify",
          "workingLatex": "\\overrightarrow{OM} = \\mathbf{i} + \\mathbf{j} + 4\\mathbf{k}",
          "explanation": "Divide each component by $2$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "As coordinates",
          "workingLatex": "M(1, 1, 4)",
          "explanation": "The midpoint in coordinate form.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Verify $x$-average",
          "workingLatex": "\\dfrac{-3+5}{2}=1",
          "explanation": "The $x$-coordinate is the average.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Verify $y$-average",
          "workingLatex": "\\dfrac{4+-2}{2}=1",
          "explanation": "The $y$-coordinate is the average.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Verify $z$-average",
          "workingLatex": "\\dfrac{1+7}{2}=4",
          "explanation": "The $z$-coordinate is the average.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Interpret",
          "workingLatex": "\\text{equidistant from } A \\text{ and } B",
          "explanation": "The midpoint is the same distance from both endpoints.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the answer",
          "workingLatex": "\\overrightarrow{OM} = \\mathbf{i} + \\mathbf{j} + 4\\mathbf{k}",
          "explanation": "The midpoint position vector.",
          "diagram": null
        }
      ],
      "finalAnswer": "$M(1, 1, 4)$"
    }
  },
  {
    "id": "al.y2.pure.vectors-3d.q040",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Vectors in three dimensions",
    "subtopicId": "al.y2.pure.vectors-3d",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "vector",
    "tags": [
      "vectors",
      "unit-vector"
    ],
    "questionText": "Find the unit vector parallel to $\\mathbf{w} = -\\mathbf{i} + 2\\mathbf{j} + 2\\mathbf{k}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Magnitude",
          "workingLatex": "|\\mathbf{w}| = \\sqrt{1+4+4} = 3",
          "explanation": "3D Pythagoras.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Unit vector",
          "workingLatex": "\\hat{\\mathbf{w}} = \\dfrac{-\\mathbf{i}+2\\mathbf{j}+2\\mathbf{k}}{3}",
          "explanation": "Divide each component by $3$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write components",
          "workingLatex": "-\\dfrac{1}{3}\\mathbf{i} + \\dfrac{2}{3}\\mathbf{j} + \\dfrac{2}{3}\\mathbf{k}",
          "explanation": "Simplified form.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Length check",
          "workingLatex": "\\dfrac{1}{9}+\\dfrac{4}{9}+\\dfrac{4}{9}=1",
          "explanation": "Confirms unit length.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Sign of direction",
          "workingLatex": "\\text{negative } \\mathbf{i}\\text{-part}",
          "explanation": "The negative $\\mathbf{i}$-component reflects direction.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Parallel",
          "workingLatex": "\\text{same line as } \\mathbf{w}",
          "explanation": "Only scaled, not rotated.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the answer",
          "workingLatex": "\\hat{\\mathbf{w}} = -\\dfrac{1}{3}\\mathbf{i} + \\dfrac{2}{3}\\mathbf{j} + \\dfrac{2}{3}\\mathbf{k}",
          "explanation": "Required unit vector.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check each component",
          "workingLatex": "\\hat{\\mathbf{w}} = -\\dfrac{1}{3}\\mathbf{i} + \\dfrac{2}{3}\\mathbf{j} + \\dfrac{2}{3}\\mathbf{k}",
          "explanation": "Verify $\\mathbf{i}$, $\\mathbf{j}$ and $\\mathbf{k}$ parts separately before combining.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Geometric interpretation",
          "workingLatex": "\\hat{\\mathbf{w}} = -\\dfrac{1}{3}\\mathbf{i} + \\dfrac{2}{3}\\mathbf{j} + \\dfrac{2}{3}\\mathbf{k}",
          "explanation": "Relate the vector result to position, displacement or distance in 3D space.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\hat{\\mathbf{w}} = -\\dfrac{1}{3}\\mathbf{i} + \\dfrac{2}{3}\\mathbf{j} + \\dfrac{2}{3}\\mathbf{k}$"
    }
  },
  {
    "id": "al.y2.pure.vectors-3d.q041",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Vectors in three dimensions",
    "subtopicId": "al.y2.pure.vectors-3d",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "vector",
    "tags": [
      "vectors",
      "subtraction",
      "column-vector"
    ],
    "questionText": "Given $\\mathbf{u} = \\begin{pmatrix} 2 \\\\ -1 \\\\ 3 \\end{pmatrix}$ and $\\mathbf{v} = \\begin{pmatrix} 1 \\\\ 4 \\\\ -2 \\end{pmatrix}$, find $\\mathbf{u} - \\mathbf{v}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Subtract columns",
          "workingLatex": "\\mathbf{u}-\\mathbf{v} = \\begin{pmatrix}2-1\\\\-1-4\\\\3-(-2)\\end{pmatrix}",
          "explanation": "Subtract entry by entry.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Top entry",
          "workingLatex": "1",
          "explanation": "First component.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Middle entry",
          "workingLatex": "-5",
          "explanation": "Second component.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Bottom entry",
          "workingLatex": "5",
          "explanation": "Third component.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Write result",
          "workingLatex": "\\mathbf{u}-\\mathbf{v} = \\begin{pmatrix}1\\\\-5\\\\5\\end{pmatrix}",
          "explanation": "Column form of the difference.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check",
          "workingLatex": "\\mathbf{u}-\\mathbf{v}+\\mathbf{v}=\\mathbf{u}",
          "explanation": "Adding back $\\mathbf{v}$ should recover $\\mathbf{u}$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Verify top",
          "workingLatex": "1+1=2",
          "explanation": "Matches $\\mathbf{u}$ top entry.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Verify others",
          "workingLatex": "\\text{consistent}",
          "explanation": "All entries check.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the answer",
          "workingLatex": "\\mathbf{u}-\\mathbf{v} = \\begin{pmatrix}1\\\\-5\\\\5\\end{pmatrix}",
          "explanation": "Required difference.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\mathbf{u} - \\mathbf{v} = \\begin{pmatrix} 1 \\\\ -5 \\\\ 5 \\end{pmatrix}$"
    }
  },
  {
    "id": "al.y2.pure.vectors-3d.q042",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Vectors in three dimensions",
    "subtopicId": "al.y2.pure.vectors-3d",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "numeric",
    "tags": [
      "vectors",
      "parallel",
      "unknown-component"
    ],
    "questionText": "Points $A(1, t, 2)$ and $B(4, 10, 8)$ are such that $\\overrightarrow{AB}$ is parallel to $3\\mathbf{i} + 6\\mathbf{j} + 6\\mathbf{k}$. Find $t$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Form $\\overrightarrow{AB}$",
          "workingLatex": "\\overrightarrow{AB} = 3\\mathbf{i} + (10-t)\\mathbf{j} + 6\\mathbf{k}",
          "explanation": "Subtract coordinates of $A$ from $B$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Parallel condition",
          "workingLatex": "\\overrightarrow{AB} = k(3\\mathbf{i}+6\\mathbf{j}+6\\mathbf{k})",
          "explanation": "Parallel vectors are scalar multiples.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "From $\\mathbf{i}$-part",
          "workingLatex": "3 = 3k \\Rightarrow k = 1",
          "explanation": "Find the scale factor.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "$\\mathbf{j}$-part",
          "workingLatex": "10 - t = 6",
          "explanation": "Use $k=1$ on the $\\mathbf{j}$-component.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve",
          "workingLatex": "t = 4",
          "explanation": "Rearrange for $t$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Verify $\\mathbf{k}$-part",
          "workingLatex": "6 = 6",
          "explanation": "Consistent with $k=1$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check vector",
          "workingLatex": "\\overrightarrow{AB} = 3\\mathbf{i}+6\\mathbf{j}+6\\mathbf{k}",
          "explanation": "Matches the given direction.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Interpret",
          "workingLatex": "A(1,4,2)",
          "explanation": "Substituting $t=4$ gives a valid point.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the answer",
          "workingLatex": "t = 4",
          "explanation": "Required value.",
          "diagram": null
        }
      ],
      "finalAnswer": "$t = 4$"
    }
  },
  {
    "id": "al.y2.pure.vectors-3d.q043",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Vectors in three dimensions",
    "subtopicId": "al.y2.pure.vectors-3d",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "vector",
    "tags": [
      "vectors",
      "ratio"
    ],
    "questionText": "Point $P$ divides $AB$ in the ratio $3:1$ where $\\mathbf{a} = 3\\mathbf{i} + \\mathbf{k}$ and $\\mathbf{b} = 7\\mathbf{i} + 4\\mathbf{j} + 5\\mathbf{k}$. Find $\\mathbf{p}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Section formula",
          "workingLatex": "\\mathbf{p} = \\dfrac{1\\mathbf{a} + 3\\mathbf{b}}{4}",
          "explanation": "Point $P$ divides $AB$ internally in ratio $3:1$ — $m$ parts from $A$, $n$ from $B$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute vectors",
          "workingLatex": "\\mathbf{a}=3\\mathbf{i} + \\mathbf{k},\\ \\mathbf{b}=7\\mathbf{i} + 4\\mathbf{j} + 5\\mathbf{k}",
          "explanation": "Write the endpoint position vectors.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Scale $\\mathbf{a}$",
          "workingLatex": "1\\mathbf{a} = 3\\mathbf{i} + \\mathbf{k}",
          "explanation": "Multiply $\\mathbf{a}$ by $1$ (the part nearest $B$).",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Scale $\\mathbf{b}$",
          "workingLatex": "3\\mathbf{b} = 21\\mathbf{i} + 12\\mathbf{j} + 15\\mathbf{k}",
          "explanation": "Multiply $\\mathbf{b}$ by $3$ (the part nearest $A$).",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Add and divide",
          "workingLatex": "\\mathbf{p} = \\dfrac{1}{4}(24\\mathbf{i} + 12\\mathbf{j} + 16\\mathbf{k})",
          "explanation": "Add the weighted vectors, then divide by $m+n$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Simplify components",
          "workingLatex": "\\mathbf{p} = 6\\mathbf{i} + 3\\mathbf{j} + 4\\mathbf{k}",
          "explanation": "Evaluate each component.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Ratio check",
          "workingLatex": "\\overrightarrow{AP} : \\overrightarrow{PB} = 3:1",
          "explanation": "The point is closer to the endpoint with the smaller ratio part.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Coordinate form",
          "workingLatex": "P(6, 3, 4)",
          "explanation": "Express as coordinates if helpful.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Verify on segment",
          "workingLatex": "\\text{lies between } A \\text{ and } B",
          "explanation": "Internal division keeps $P$ on the line segment.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the answer",
          "workingLatex": "\\mathbf{p} = 6\\mathbf{i} + 3\\mathbf{j} + 4\\mathbf{k}",
          "explanation": "The position vector of $P$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\mathbf{p} = 6\\mathbf{i} + 3\\mathbf{j} + 4\\mathbf{k}$"
    }
  },
  {
    "id": "al.y2.pure.vectors-3d.q044",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Vectors in three dimensions",
    "subtopicId": "al.y2.pure.vectors-3d",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "numeric",
    "tags": [
      "vectors",
      "distance",
      "displacement"
    ],
    "questionText": "Points $A$ and $B$ have position vectors $2\\mathbf{i} - \\mathbf{j} + 2\\mathbf{k}$ and $6\\mathbf{i} + 3\\mathbf{j} - 2\\mathbf{k}$. Find the distance $AB$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Displacement",
          "workingLatex": "\\overrightarrow{AB}=4\\mathbf{i}+4\\mathbf{j}-4\\mathbf{k}",
          "explanation": "Subtract position vectors.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Magnitude",
          "workingLatex": "|\\overrightarrow{AB}|=\\sqrt{16+16+16}",
          "explanation": "3D Pythagoras.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Simplify",
          "workingLatex": "\\sqrt{48}=4\\sqrt{3}",
          "explanation": "Factor perfect squares.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Interpret",
          "workingLatex": "\\text{straight-line distance}",
          "explanation": "Length of segment $AB$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check components",
          "workingLatex": "4,4,-4",
          "explanation": "Listed.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Verify",
          "workingLatex": "16\\times 3=48",
          "explanation": "Arithmetic.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Exact form",
          "workingLatex": "4\\sqrt{3}",
          "explanation": "Leave as a surd.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Estimate",
          "workingLatex": "\\approx 6.93",
          "explanation": "Plausible length.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the answer",
          "workingLatex": "AB=4\\sqrt{3}",
          "explanation": "Required distance.",
          "diagram": null
        }
      ],
      "finalAnswer": "$AB = 4\\sqrt{3}$"
    }
  },
  {
    "id": "al.y2.pure.vectors-3d.q045",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Vectors in three dimensions",
    "subtopicId": "al.y2.pure.vectors-3d",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "vector",
    "tags": [
      "vectors",
      "parallelogram"
    ],
    "questionText": "In parallelogram $OABC$, $\\mathbf{a} = \\mathbf{i} + 2\\mathbf{k}$ and $\\mathbf{c} = 3\\mathbf{i} + 4\\mathbf{j} + 2\\mathbf{k}$. Find $\\mathbf{b}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Parallelogram property",
          "workingLatex": "\\overrightarrow{OB} = \\overrightarrow{OA} + \\overrightarrow{AB}",
          "explanation": "Travel from $O$ to $A$, then along $AB$, to reach $B$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Also",
          "workingLatex": "\\overrightarrow{AB} = \\overrightarrow{OC}",
          "explanation": "In parallelogram $OABC$, opposite sides are equal.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find $\\overrightarrow{OC}$",
          "workingLatex": "\\overrightarrow{OC} = \\mathbf{c} = 3\\mathbf{i}+4\\mathbf{j}+2\\mathbf{k}",
          "explanation": "Given position vector of $C$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "So $\\mathbf{b}$",
          "workingLatex": "\\mathbf{b} = \\mathbf{a} + (\\mathbf{c} - \\mathbf{a})",
          "explanation": "From $O$ via $A$ to $B$ where $AB$ is parallel to $OC$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Compute $\\mathbf{c}-\\mathbf{a}$",
          "workingLatex": "2\\mathbf{i}+4\\mathbf{j}",
          "explanation": "Side vector.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Add to $\\mathbf{a}$",
          "workingLatex": "\\mathbf{b} = 3\\mathbf{i}+4\\mathbf{j}+2\\mathbf{k}",
          "explanation": "Position of $B$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check",
          "workingLatex": "\\overrightarrow{AB} = \\mathbf{c}",
          "explanation": "Opposite sides match.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Verify layout",
          "workingLatex": "OABC \\text{ parallelogram}",
          "explanation": "Consistent geometry.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the answer",
          "workingLatex": "\\mathbf{b} = 3\\mathbf{i}+4\\mathbf{j}+2\\mathbf{k}",
          "explanation": "Position vector of $B$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\mathbf{b} = 3\\mathbf{i} + 4\\mathbf{j} + 2\\mathbf{k}$"
    }
  },
  {
    "id": "al.y2.pure.vectors-3d.q046",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Vectors in three dimensions",
    "subtopicId": "al.y2.pure.vectors-3d",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "numeric",
    "tags": [
      "vectors",
      "cuboid",
      "diagonal"
    ],
    "questionText": "A box has length $6$ m, width $8$ m and height $24$ m. Find the space diagonal length.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Space diagonal formula",
          "workingLatex": "d = \\sqrt{l^2 + w^2 + h^2}",
          "explanation": "The body diagonal crosses the cuboid corner to opposite corner through the interior.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute dimensions",
          "workingLatex": "d = \\sqrt{6^2 + 8^2 + 24^2}",
          "explanation": "Square each edge length and add.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Evaluate squares",
          "workingLatex": "d = \\sqrt{36 + 64 + 576}",
          "explanation": "Compute each squared term.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Sum",
          "workingLatex": "d = \\sqrt{676}",
          "explanation": "Add the three squared edges.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify",
          "workingLatex": "d = 26",
          "explanation": "Take the square root.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "3D Pythagoras",
          "workingLatex": "\\text{face diagonal then height}",
          "explanation": "Equivalently: find a face diagonal first, then use Pythagoras with the third edge.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the answer",
          "workingLatex": "d = 26",
          "explanation": "The length of the space diagonal.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Recognise triple",
          "workingLatex": "6,8,24 \\rightarrow 26",
          "explanation": "Scaled $3$-$4$-$12$ triangle.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the answer",
          "workingLatex": "d = 26\\text{ m}",
          "explanation": "Space diagonal.",
          "diagram": null
        }
      ],
      "finalAnswer": "$d = 26$ m"
    }
  },
  {
    "id": "al.y2.pure.vectors-3d.q047",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Vectors in three dimensions",
    "subtopicId": "al.y2.pure.vectors-3d",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "proof",
    "tags": [
      "vectors",
      "parallel",
      "collinearity"
    ],
    "questionText": "Show that $\\mathbf{a} = 2\\mathbf{i} - 4\\mathbf{j} + 6\\mathbf{k}$ and $\\mathbf{b} = -\\mathbf{i} + 2\\mathbf{j} - 3\\mathbf{k}$ are parallel.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Parallel test",
          "workingLatex": "\\mathbf{a} = k\\mathbf{b} \\text{ for some } k",
          "explanation": "Check if one vector is a scalar multiple of the other.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "$\\mathbf{i}$-ratio",
          "workingLatex": "2/(-1) = -2",
          "explanation": "Candidate $k = -2$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "$\\mathbf{j}$-ratio",
          "workingLatex": "-4/2 = -2",
          "explanation": "Same ratio.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "$\\mathbf{k}$-ratio",
          "workingLatex": "6/(-3) = -2",
          "explanation": "All three ratios match.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Write multiple",
          "workingLatex": "\\mathbf{a} = -2\\mathbf{b}",
          "explanation": "Exact scalar relationship.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Direction",
          "workingLatex": "\\text{opposite directions}",
          "explanation": "Negative $k$ means opposite sense along the same line.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Same line",
          "workingLatex": "\\text{through origin}",
          "explanation": "Both vectors lie on one line.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Conclude",
          "workingLatex": "\\mathbf{a} \\parallel \\mathbf{b}",
          "explanation": "Parallel confirmed.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the result",
          "workingLatex": "\\mathbf{a} = -2\\mathbf{b}",
          "explanation": "Proof complete.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\mathbf{a} = -2\\mathbf{b}$, so the vectors are parallel."
    }
  },
  {
    "id": "al.y2.pure.vectors-3d.q048",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Vectors in three dimensions",
    "subtopicId": "al.y2.pure.vectors-3d",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "vector",
    "tags": [
      "vectors",
      "midpoint",
      "displacement"
    ],
    "questionText": "The midpoint of $PQ$ is $M(2, 0, -1)$. If $P$ is $(0, 4, 3)$, find the coordinates of $Q$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Midpoint formula",
          "workingLatex": "M = \\dfrac{1}{2}(P+Q)",
          "explanation": "Average of corresponding coordinates.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Double the midpoint",
          "workingLatex": "(4, 0, -2) = P + Q",
          "explanation": "Multiply each coordinate of $M$ by $2$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Subtract $P$",
          "workingLatex": "Q = (4,0,-2) - (0,4,3)",
          "explanation": "Isolate $Q$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "$x$-coordinate",
          "workingLatex": "4 - 0 = 4",
          "explanation": "First component.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "$y$-coordinate",
          "workingLatex": "0 - 4 = -4",
          "explanation": "Second component.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "$z$-coordinate",
          "workingLatex": "-2 - 3 = -5",
          "explanation": "Third component.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Write $Q$",
          "workingLatex": "Q(4, -4, -5)",
          "explanation": "Combine coordinates.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Verify midpoint",
          "workingLatex": "\\dfrac{(0+4)}{2}=2,\\ \\dfrac{(4-4)}{2}=0,\\ \\dfrac{(3-5)}{2}=-1",
          "explanation": "Averaging $P$ and $Q$ gives $M$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the answer",
          "workingLatex": "Q(4, -4, -5)",
          "explanation": "Required point.",
          "diagram": null
        }
      ],
      "finalAnswer": "$Q(4, -4, -5)$"
    }
  },
  {
    "id": "al.y2.pure.vectors-3d.q049",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Vectors in three dimensions",
    "subtopicId": "al.y2.pure.vectors-3d",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "vector",
    "tags": [
      "vectors",
      "addition",
      "subtraction"
    ],
    "questionText": "Simplify $(2\\mathbf{i} + \\mathbf{j} - 3\\mathbf{k}) + (\\mathbf{i} - 4\\mathbf{j} + 2\\mathbf{k}) - (3\\mathbf{i} + 2\\mathbf{j} - \\mathbf{k})$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Group $\\mathbf{i}$ terms",
          "workingLatex": "2+1-3=0",
          "explanation": "Horizontal components.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Group $\\mathbf{j}$ terms",
          "workingLatex": "1-4-2=-5",
          "explanation": "Depth components.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Group $\\mathbf{k}$ terms",
          "workingLatex": "-3+2-(-1)=0",
          "explanation": "Vertical components.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Combine",
          "workingLatex": "\\mathbf{0} - 5\\mathbf{j}",
          "explanation": "Only $\\mathbf{j}$ survives.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify",
          "workingLatex": "-5\\mathbf{j}",
          "explanation": "Final vector.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Column form",
          "workingLatex": "\\begin{pmatrix}0\\\\-5\\\\0\\end{pmatrix}",
          "explanation": "Equivalent notation.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Magnitude",
          "workingLatex": "5",
          "explanation": "Length of the result.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Direction",
          "workingLatex": "\\text{along negative } \\mathbf{j}",
          "explanation": "Purely in the $\\mathbf{j}$ direction.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the answer",
          "workingLatex": "-5\\mathbf{j}",
          "explanation": "Simplified expression.",
          "diagram": null
        }
      ],
      "finalAnswer": "$-5\\mathbf{j}$"
    }
  },
  {
    "id": "al.y2.pure.vectors-3d.q050",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Vectors in three dimensions",
    "subtopicId": "al.y2.pure.vectors-3d",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "numeric",
    "tags": [
      "vectors",
      "magnitude"
    ],
    "questionText": "Find the magnitude of $\\mathbf{r} = \\dfrac{1}{2}\\mathbf{i} - \\dfrac{3}{2}\\mathbf{j} + \\mathbf{k}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Formula",
          "workingLatex": "|\\mathbf{r}| = \\sqrt{x^2+y^2+z^2}",
          "explanation": "3D Pythagoras.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Square components",
          "workingLatex": "\\left(\\dfrac{1}{2}\\right)^2 = \\dfrac{1}{4},\\ \\left(\\dfrac{3}{2}\\right)^2 = \\dfrac{9}{4},\\ 1^2 = 1",
          "explanation": "Square each part.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Add",
          "workingLatex": "\\dfrac{1}{4}+\\dfrac{9}{4}+1 = \\dfrac{14}{4} = \\dfrac{7}{2}",
          "explanation": "Sum of squares.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Square root",
          "workingLatex": "|\\mathbf{r}| = \\sqrt{\\dfrac{7}{2}}",
          "explanation": "Exact form.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Rationalise",
          "workingLatex": "\\dfrac{\\sqrt{14}}{2}",
          "explanation": "Standard surd form.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Estimate",
          "workingLatex": "\\approx 1.87",
          "explanation": "Plausible.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check",
          "workingLatex": "\\left(\\dfrac{\\sqrt{14}}{2}\\right)^2 = \\dfrac{7}{2}",
          "explanation": "Verify.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Interpret",
          "workingLatex": "\\text{length less than } 2",
          "explanation": "Fractional components give moderate length.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the answer",
          "workingLatex": "|\\mathbf{r}| = \\dfrac{\\sqrt{14}}{2}",
          "explanation": "Required magnitude.",
          "diagram": null
        }
      ],
      "finalAnswer": "$|\\mathbf{r}| = \\dfrac{\\sqrt{14}}{2}$"
    }
  },
  {
    "id": "al.y2.pure.vectors-3d.q051",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Vectors in three dimensions",
    "subtopicId": "al.y2.pure.vectors-3d",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "vector",
    "tags": [
      "vectors",
      "position-vector",
      "triangle"
    ],
    "questionText": "Triangle $OAB$ has $O$ at the origin, $\\mathbf{a} = 3\\mathbf{i} + 2\\mathbf{j} + \\mathbf{k}$ and $\\mathbf{b} = \\mathbf{i} + 4\\mathbf{j} + 3\\mathbf{k}$. Find $\\overrightarrow{AB}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write position vectors",
          "workingLatex": "\\mathbf{a} = 3\\mathbf{i} + 2\\mathbf{j} + \\mathbf{k},\\ \\mathbf{b} = \\mathbf{i} + 4\\mathbf{j} + 3\\mathbf{k}",
          "explanation": "These locate $A$ and $B$ from the origin.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Displacement formula",
          "workingLatex": "\\overrightarrow{AB} = \\mathbf{b} - \\mathbf{a}",
          "explanation": "Subtract the start position from the finish position.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Subtract components",
          "workingLatex": "(1-3)\\mathbf{i} + (4-2)\\mathbf{j} + (3-1)\\mathbf{k}",
          "explanation": "Match and subtract each direction separately.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Simplify",
          "workingLatex": "\\overrightarrow{AB} = -2\\mathbf{i} + 2\\mathbf{j} + 2\\mathbf{k}",
          "explanation": "Combine the three component results.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check direction",
          "workingLatex": "\\text{vector points from } A \\text{ to } B",
          "explanation": "The displacement carries us from the first point to the second.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Optional magnitude",
          "workingLatex": "|\\overrightarrow{AB}| = \\sqrt{4+4+4}",
          "explanation": "We can find length if needed.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Verify subtraction",
          "workingLatex": "\\mathbf{a} + \\overrightarrow{AB} = \\mathbf{b}",
          "explanation": "Adding the displacement to $\\mathbf{a}$ should recover $\\mathbf{b}$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Component check",
          "workingLatex": "i:-2,\\ j:2,\\ k:2",
          "explanation": "Each component difference is consistent.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the answer",
          "workingLatex": "\\overrightarrow{AB} = -2\\mathbf{i} + 2\\mathbf{j} + 2\\mathbf{k}",
          "explanation": "The required displacement vector.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\overrightarrow{AB} = -2\\mathbf{i} + 2\\mathbf{j} + 2\\mathbf{k}$"
    }
  },
  {
    "id": "al.y2.pure.vectors-3d.q052",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Vectors in three dimensions",
    "subtopicId": "al.y2.pure.vectors-3d",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "vector",
    "tags": [
      "vectors",
      "ratio",
      "section-formula"
    ],
    "questionText": "Point $P$ divides $AB$ internally in the ratio $2:3$ where $A(-2, 1, 4)$ and $B(8, 11, -1)$. Find the coordinates of $P$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Section formula",
          "workingLatex": "\\mathbf{p} = \\dfrac{3\\mathbf{a} + 2\\mathbf{b}}{5}",
          "explanation": "Point $P$ divides $AB$ internally in ratio $2:3$ — $m$ parts from $A$, $n$ from $B$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute vectors",
          "workingLatex": "\\mathbf{a}=-2\\mathbf{i} + \\mathbf{j} + 4\\mathbf{k},\\ \\mathbf{b}=8\\mathbf{i} + 11\\mathbf{j} - \\mathbf{k}",
          "explanation": "Write the endpoint position vectors.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Scale $\\mathbf{a}$",
          "workingLatex": "3\\mathbf{a} = -6\\mathbf{i} + 3\\mathbf{j} + 12\\mathbf{k}",
          "explanation": "Multiply $\\mathbf{a}$ by $3$ (the part nearest $B$).",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Scale $\\mathbf{b}$",
          "workingLatex": "2\\mathbf{b} = 16\\mathbf{i} + 22\\mathbf{j} - 2\\mathbf{k}",
          "explanation": "Multiply $\\mathbf{b}$ by $2$ (the part nearest $A$).",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Add and divide",
          "workingLatex": "\\mathbf{p} = \\dfrac{1}{5}(10\\mathbf{i} + 25\\mathbf{j} + 10\\mathbf{k})",
          "explanation": "Add the weighted vectors, then divide by $m+n$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Simplify components",
          "workingLatex": "\\mathbf{p} = 2\\mathbf{i} + 5\\mathbf{j} + 2\\mathbf{k}",
          "explanation": "Evaluate each component.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Ratio check",
          "workingLatex": "\\overrightarrow{AP} : \\overrightarrow{PB} = 2:3",
          "explanation": "The point is closer to the endpoint with the smaller ratio part.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Coordinate form",
          "workingLatex": "P(2, 5, 2)",
          "explanation": "Express as coordinates if helpful.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Verify on segment",
          "workingLatex": "\\text{lies between } A \\text{ and } B",
          "explanation": "Internal division keeps $P$ on the line segment.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the answer",
          "workingLatex": "\\mathbf{p} = 2\\mathbf{i} + 5\\mathbf{j} + 2\\mathbf{k}",
          "explanation": "The position vector of $P$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(2, 5, 2)$"
    }
  },
  {
    "id": "al.y2.pure.vectors-3d.q053",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Vectors in three dimensions",
    "subtopicId": "al.y2.pure.vectors-3d",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "proof",
    "tags": [
      "vectors",
      "collinearity",
      "proof"
    ],
    "questionText": "The points $A(2, -1, 3)$, $B(5, 2, 9)$ and $C(3, 0, 6)$ have position vectors $\\mathbf{a}$, $\\mathbf{b}$ and $\\mathbf{c}$. Prove that $A$, $B$ and $C$ are collinear.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Form $\\overrightarrow{AB}$",
          "workingLatex": "\\overrightarrow{AB} = 3\\mathbf{i} + 3\\mathbf{j} + 6\\mathbf{k}",
          "explanation": "Displacement from $A$ to $B$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Form $\\overrightarrow{AC}$",
          "workingLatex": "\\overrightarrow{AC} = \\mathbf{i} + \\mathbf{j} + 3\\mathbf{k}",
          "explanation": "Displacement from $A$ to $C$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Test for scalar multiple",
          "workingLatex": "\\overrightarrow{AB} = 3\\overrightarrow{AC}",
          "explanation": "Collinear points give parallel displacement vectors — one is a scalar multiple of the other.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Check $\\mathbf{i}$-components",
          "workingLatex": "3 = 3 \\times 1",
          "explanation": "The scale factor must match in every component.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check $\\mathbf{j}$-components",
          "workingLatex": "3 = 3 \\times 1",
          "explanation": "All three components must share the same multiplier.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check $\\mathbf{k}$-components",
          "workingLatex": "6 = 3 \\times 3",
          "explanation": "If any ratio differs, the points are not collinear.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Common point",
          "workingLatex": "A \\text{ is shared}",
          "explanation": "Both vectors start from $A$, so they lie on the same line through $A$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Conclude collinearity",
          "workingLatex": "A,\\ B \\text{ and } C \\text{ are collinear}",
          "explanation": "Parallel displacements from a common point mean the three points lie on one straight line.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the result",
          "workingLatex": "\\overrightarrow{AB} = 3\\overrightarrow{AC}",
          "explanation": "The scalar-multiple condition is satisfied.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Interpret the ratio",
          "workingLatex": "\\overrightarrow{AB} = 3\\overrightarrow{AC}",
          "explanation": "$B$ is three times as far from $A$ as $C$ is, along the same direction.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Position of $C$ on segment",
          "workingLatex": "C \\text{ lies on line } AB",
          "explanation": "Since the vectors are parallel and share point $A$, all three points are on one line.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Check $\\overrightarrow{CB}$",
          "workingLatex": "\\overrightarrow{CB} = 2\\mathbf{i}+2\\mathbf{j}+3\\mathbf{k} = 2\\overrightarrow{AC}",
          "explanation": "Consistent spacing along the line.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Summary",
          "workingLatex": "A,\\ B,\\ C \\text{ collinear}",
          "explanation": "All pairwise displacements are scalar multiples.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "State the result",
          "workingLatex": "\\overrightarrow{AB} = 3\\overrightarrow{AC}",
          "explanation": "Proof complete.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\overrightarrow{AB} = 3\\overrightarrow{AC}$, so $A$, $B$ and $C$ are collinear."
    }
  },
  {
    "id": "al.y2.pure.vectors-3d.q054",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Vectors in three dimensions",
    "subtopicId": "al.y2.pure.vectors-3d",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "vector",
    "tags": [
      "vectors",
      "parallelogram"
    ],
    "questionText": "The points $O$, $A$, $B$ and $D$ form parallelogram $OABD$ with $\\mathbf{a} = 4\\mathbf{i} - \\mathbf{j} + 2\\mathbf{k}$ and $\\mathbf{b} = 2\\mathbf{i} + 3\\mathbf{j} - \\mathbf{k}$. Find $\\mathbf{d}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Parallelogram property",
          "workingLatex": "\\overrightarrow{AB} = \\overrightarrow{DC}",
          "explanation": "Opposite sides of a parallelogram are equal and parallel.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Use $\\overrightarrow{OC} = \\mathbf{a}+\\mathbf{b}$",
          "workingLatex": "\\mathbf{c} = 4\\mathbf{i}-\\mathbf{j}+2\\mathbf{k} + 2\\mathbf{i}+3\\mathbf{j}-\\mathbf{k}",
          "explanation": "From $O$ to $C$ via $A$ then $B$ (or $B$ then $A$).",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find $\\overrightarrow{OD}$",
          "workingLatex": "\\mathbf{d} = \\mathbf{b} + \\mathbf{a}",
          "explanation": "The fourth vertex completes the parallelogram.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Add components",
          "workingLatex": "\\mathbf{d} = 6\\mathbf{i}+2\\mathbf{j}+\\mathbf{k}",
          "explanation": "Add matching $\\mathbf{i}$, $\\mathbf{j}$, $\\mathbf{k}$ parts.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Alternative route",
          "workingLatex": "\\mathbf{d} = \\mathbf{c} + (\\mathbf{b}-\\mathbf{a})",
          "explanation": "Or go from $C$ parallel to $\\overrightarrow{AB}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check opposite sides",
          "workingLatex": "\\overrightarrow{AD} = \\overrightarrow{BC}",
          "explanation": "Both pairs of opposite sides must match.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Geometric meaning",
          "workingLatex": "\\text{fourth vertex of parallelogram } OABC",
          "explanation": "The vector $\\mathbf{d}$ locates the missing corner.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State the answer",
          "workingLatex": "\\mathbf{d} = 6\\mathbf{i}+2\\mathbf{j}+\\mathbf{k}",
          "explanation": "The position vector of the fourth vertex.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Check $\\overrightarrow{AD}$",
          "workingLatex": "\\mathbf{d}-\\mathbf{a} = 2\\mathbf{i}+3\\mathbf{j}-\\mathbf{k} = \\mathbf{b}",
          "explanation": "Side $AD$ equals $\\overrightarrow{OB}$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Check $\\overrightarrow{AB}$",
          "workingLatex": "\\mathbf{b}-\\mathbf{a} = -2\\mathbf{i}+4\\mathbf{j}-3\\mathbf{k}",
          "explanation": "Other side of the parallelogram.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Opposite sides",
          "workingLatex": "\\overrightarrow{AB} = \\overrightarrow{OD}",
          "explanation": "Parallelogram property verified.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "State the answer",
          "workingLatex": "\\mathbf{d} = 6\\mathbf{i}+2\\mathbf{j}+\\mathbf{k}",
          "explanation": "Position vector of $D$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Check each component",
          "workingLatex": "\\mathbf{d} = 6\\mathbf{i}+2\\mathbf{j}+\\mathbf{k}",
          "explanation": "Verify $\\mathbf{i}$, $\\mathbf{j}$ and $\\mathbf{k}$ parts separately before combining.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\mathbf{d} = 6\\mathbf{i} + 2\\mathbf{j} + \\mathbf{k}$"
    }
  },
  {
    "id": "al.y2.pure.vectors-3d.q055",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Vectors in three dimensions",
    "subtopicId": "al.y2.pure.vectors-3d",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "numeric",
    "tags": [
      "vectors",
      "cuboid",
      "diagonal"
    ],
    "questionText": "A cuboid has vertices at $O(0,0,0)$ and $P(4, 3, 12)$ at the opposite corner. Find the length of the space diagonal $OP$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Space diagonal formula",
          "workingLatex": "d = \\sqrt{l^2 + w^2 + h^2}",
          "explanation": "The body diagonal crosses the cuboid corner to opposite corner through the interior.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute dimensions",
          "workingLatex": "d = \\sqrt{4^2 + 3^2 + 12^2}",
          "explanation": "Square each edge length and add.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Evaluate squares",
          "workingLatex": "d = \\sqrt{16 + 9 + 144}",
          "explanation": "Compute each squared term.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Sum",
          "workingLatex": "d = \\sqrt{169}",
          "explanation": "Add the three squared edges.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify",
          "workingLatex": "d = 13",
          "explanation": "Take the square root.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "3D Pythagoras",
          "workingLatex": "\\text{face diagonal then height}",
          "explanation": "Equivalently: find a face diagonal first, then use Pythagoras with the third edge.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the answer",
          "workingLatex": "d = 13",
          "explanation": "The length of the space diagonal.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Vector form",
          "workingLatex": "\\overrightarrow{OP} = 4\\mathbf{i}+3\\mathbf{j}+12\\mathbf{k}",
          "explanation": "The diagonal is the position vector of the opposite vertex.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Magnitude",
          "workingLatex": "|\\overrightarrow{OP}| = 13",
          "explanation": "Same as the space diagonal formula.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Interpret",
          "workingLatex": "\\text{longest diagonal of the box}",
          "explanation": "Passes through the interior from corner to corner.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Compare face diagonal",
          "workingLatex": "\\sqrt{4^2+3^2}=5",
          "explanation": "Shorter than the space diagonal.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "State the answer",
          "workingLatex": "OP = 13",
          "explanation": "Required length.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Check each component",
          "workingLatex": "OP = 13",
          "explanation": "Verify $\\mathbf{i}$, $\\mathbf{j}$ and $\\mathbf{k}$ parts separately before combining.",
          "diagram": null
        }
      ],
      "finalAnswer": "$OP = 13$"
    }
  },
  {
    "id": "al.y2.pure.vectors-3d.q056",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Vectors in three dimensions",
    "subtopicId": "al.y2.pure.vectors-3d",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "vector",
    "tags": [
      "vectors",
      "ratio",
      "section-formula"
    ],
    "questionText": "Point $P$ divides $AB$ internally in the ratio $3:2$, where $\\mathbf{a} = -5\\mathbf{i} - 10\\mathbf{j} + 5\\mathbf{k}$ and $\\mathbf{b} = 5\\mathbf{i} + 10\\mathbf{j} - 5\\mathbf{k}$. Find $\\mathbf{p}$ and $|\\overrightarrow{AP}|$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Section formula",
          "workingLatex": "\\mathbf{p} = \\dfrac{2\\mathbf{a} + 3\\mathbf{b}}{5}",
          "explanation": "Point $P$ divides $AB$ internally in ratio $3:2$ — $m$ parts from $A$, $n$ from $B$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute vectors",
          "workingLatex": "\\mathbf{a}=-5\\mathbf{i} - 10\\mathbf{j} + 5\\mathbf{k},\\ \\mathbf{b}=5\\mathbf{i} + 10\\mathbf{j} - 5\\mathbf{k}",
          "explanation": "Write the endpoint position vectors.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Scale $\\mathbf{a}$",
          "workingLatex": "2\\mathbf{a} = -10\\mathbf{i} - 20\\mathbf{j} + 10\\mathbf{k}",
          "explanation": "Multiply $\\mathbf{a}$ by $2$ (the part nearest $B$).",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Scale $\\mathbf{b}$",
          "workingLatex": "3\\mathbf{b} = 15\\mathbf{i} + 30\\mathbf{j} - 15\\mathbf{k}",
          "explanation": "Multiply $\\mathbf{b}$ by $3$ (the part nearest $A$).",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Add and divide",
          "workingLatex": "\\mathbf{p} = \\dfrac{1}{5}(5\\mathbf{i} + 10\\mathbf{j} - 5\\mathbf{k})",
          "explanation": "Add the weighted vectors, then divide by $m+n$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Simplify components",
          "workingLatex": "\\mathbf{p} = \\mathbf{i} + 2\\mathbf{j} - \\mathbf{k}",
          "explanation": "Evaluate each component.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Ratio check",
          "workingLatex": "\\overrightarrow{AP} : \\overrightarrow{PB} = 3:2",
          "explanation": "The point is closer to the endpoint with the smaller ratio part.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Coordinate form",
          "workingLatex": "P(1, 2, -1)",
          "explanation": "Express as coordinates if helpful.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Verify on segment",
          "workingLatex": "\\text{lies between } A \\text{ and } B",
          "explanation": "Internal division keeps $P$ on the line segment.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the answer",
          "workingLatex": "\\mathbf{p} = \\mathbf{i} + 2\\mathbf{j} - \\mathbf{k}",
          "explanation": "The position vector of $P$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Find $\\overrightarrow{AP}$",
          "workingLatex": "\\mathbf{p}-\\mathbf{a} = 6\\mathbf{i}+12\\mathbf{j}-6\\mathbf{k}",
          "explanation": "Displacement from $A$ to $P$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Magnitude",
          "workingLatex": "|\\overrightarrow{AP}|=\\sqrt{36+144+36}=\\sqrt{216}=6\\sqrt{6}",
          "explanation": "Length of the segment from $A$ to $P$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Ratio check",
          "workingLatex": "AP:PB = 3:2",
          "explanation": "Confirms correct division.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "State both answers",
          "workingLatex": "\\mathbf{p} = \\mathbf{i}+2\\mathbf{j}-\\mathbf{k},\\ |\\overrightarrow{AP}|=6\\sqrt{6}",
          "explanation": "Position vector and distance from $A$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\mathbf{p} = \\mathbf{i} + 2\\mathbf{j} - \\mathbf{k}$ and $|\\overrightarrow{AP}| = 6\\sqrt{6}$"
    }
  },
  {
    "id": "al.y2.pure.vectors-3d.q057",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Vectors in three dimensions",
    "subtopicId": "al.y2.pure.vectors-3d",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "numeric",
    "tags": [
      "vectors",
      "parallel"
    ],
    "questionText": "The vectors $\\mathbf{a} = 4\\mathbf{i} + 8\\mathbf{j} + 12\\mathbf{k}$ and $\\mathbf{b} = 2\\mathbf{i} + t\\mathbf{j} + 6\\mathbf{k}$ are parallel. Find $t$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Parallel condition",
          "workingLatex": "\\mathbf{a} = k\\mathbf{b}",
          "explanation": "Scalar multiple relationship.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "$\\mathbf{i}$-ratio",
          "workingLatex": "4/2 = 2",
          "explanation": "Scale factor $k=2$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "$\\mathbf{j}$-equation",
          "workingLatex": "8 = 2t",
          "explanation": "Apply $k=2$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Solve",
          "workingLatex": "t = 4",
          "explanation": "Divide by $2$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Verify $\\mathbf{k}$",
          "workingLatex": "12 = 2(6)",
          "explanation": "Consistent.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Write $\\mathbf{b}$",
          "workingLatex": "\\mathbf{b} = 2\\mathbf{i}+4\\mathbf{j}+6\\mathbf{k}",
          "explanation": "Complete vector.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Confirm",
          "workingLatex": "\\mathbf{a} = 2\\mathbf{b}",
          "explanation": "Exact multiple.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Direction",
          "workingLatex": "\\text{same line}",
          "explanation": "Parallel vectors.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Alternative ratios",
          "workingLatex": "8/4 = 12/6 = 2",
          "explanation": "All component ratios equal.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Interpret",
          "workingLatex": "t = 4",
          "explanation": "Unknown $\\mathbf{j}$-component.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Check non-zero",
          "workingLatex": "\\mathbf{b} \\neq \\mathbf{0}",
          "explanation": "Valid direction vector.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "State the answer",
          "workingLatex": "t = 4",
          "explanation": "Required value.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Check each component",
          "workingLatex": "t = 4",
          "explanation": "Verify $\\mathbf{i}$, $\\mathbf{j}$ and $\\mathbf{k}$ parts separately before combining.",
          "diagram": null
        }
      ],
      "finalAnswer": "$t = 4$"
    }
  },
  {
    "id": "al.y2.pure.vectors-3d.q058",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Vectors in three dimensions",
    "subtopicId": "al.y2.pure.vectors-3d",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "proof",
    "tags": [
      "vectors",
      "collinearity"
    ],
    "questionText": "Relative to an origin $O$, the position vectors of points $P$, $Q$ and $R$ are $\\mathbf{p} = 3\\mathbf{i} - 6\\mathbf{j} + 3\\mathbf{k}$, $\\mathbf{q} = 5\\mathbf{i} - 10\\mathbf{j} + 5\\mathbf{k}$ and $\\mathbf{r} = -\\mathbf{i} + 2\\mathbf{j} - \\mathbf{k}$. Prove that $P$, $Q$ and $R$ are collinear.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Form $\\overrightarrow{PQ}$",
          "workingLatex": "\\mathbf{q}-\\mathbf{p} = 2\\mathbf{i}-4\\mathbf{j}+2\\mathbf{k}",
          "explanation": "Displacement from $P$ to $Q$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Form $\\overrightarrow{PR}$",
          "workingLatex": "\\mathbf{r}-\\mathbf{p} = -4\\mathbf{i}+8\\mathbf{j}-4\\mathbf{k}",
          "explanation": "Displacement from $P$ to $R$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compare",
          "workingLatex": "\\overrightarrow{PR} = -2\\overrightarrow{PQ}",
          "explanation": "Scalar multiple with $k=-2$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Check $\\mathbf{i}$",
          "workingLatex": "-4 = -2(2)",
          "explanation": "Consistent ratio.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check $\\mathbf{j}$",
          "workingLatex": "8 = -2(-4)",
          "explanation": "Consistent ratio.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check $\\mathbf{k}$",
          "workingLatex": "-4 = -2(2)",
          "explanation": "Consistent ratio.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Common point $P$",
          "workingLatex": "\\text{both vectors start at } P",
          "explanation": "Same line through $P$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Direction note",
          "workingLatex": "\\text{opposite directions along same line}",
          "explanation": "Negative $k$ means $R$ and $Q$ lie on opposite sides of $P$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Also from origin",
          "workingLatex": "\\mathbf{p} = 3\\mathbf{r},\\ \\mathbf{q} = 5\\mathbf{r}",
          "explanation": "All three position vectors are multiples of $\\mathbf{r}$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Line through origin",
          "workingLatex": "O,\\ P,\\ Q,\\ R \\text{ on one line}",
          "explanation": "Extra observation: the line also passes through $O$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Conclude",
          "workingLatex": "P,\\ Q,\\ R \\text{ collinear}",
          "explanation": "Parallel displacements from $P$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "State the result",
          "workingLatex": "\\overrightarrow{PR} = -2\\overrightarrow{PQ}",
          "explanation": "Proof complete.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Check each component",
          "workingLatex": "\\overrightarrow{PR} = -2\\overrightarrow{PQ}",
          "explanation": "Verify $\\mathbf{i}$, $\\mathbf{j}$ and $\\mathbf{k}$ parts separately before combining.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\overrightarrow{PR} = -2\\overrightarrow{PQ}$, so $P$, $Q$ and $R$ are collinear."
    }
  },
  {
    "id": "al.y2.pure.vectors-3d.q059",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Vectors in three dimensions",
    "subtopicId": "al.y2.pure.vectors-3d",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "vector",
    "tags": [
      "vectors",
      "parallelogram",
      "midpoint"
    ],
    "questionText": "Parallelogram $OABC$ has $\\mathbf{a} = 3\\mathbf{i} + 2\\mathbf{j} - \\mathbf{k}$ and $\\mathbf{b} = \\mathbf{i} + 4\\mathbf{j} + 2\\mathbf{k}$. Find $\\mathbf{c}$ and the midpoint of diagonal $AC$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Parallelogram property",
          "workingLatex": "\\overrightarrow{AB} = \\overrightarrow{DC}",
          "explanation": "Opposite sides of a parallelogram are equal and parallel.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Use $\\overrightarrow{OC} = \\mathbf{a}+\\mathbf{b}$",
          "workingLatex": "\\mathbf{c} = 3\\mathbf{i}+2\\mathbf{j}-\\mathbf{k} + \\mathbf{i}+4\\mathbf{j}+2\\mathbf{k}",
          "explanation": "From $O$ to $C$ via $A$ then $B$ (or $B$ then $A$).",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find $\\overrightarrow{OD}$",
          "workingLatex": "\\mathbf{d} = \\mathbf{b} + \\mathbf{a}",
          "explanation": "The fourth vertex completes the parallelogram.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Add components",
          "workingLatex": "\\mathbf{d} = 4\\mathbf{i}+6\\mathbf{j}+\\mathbf{k}",
          "explanation": "Add matching $\\mathbf{i}$, $\\mathbf{j}$, $\\mathbf{k}$ parts.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Alternative route",
          "workingLatex": "\\mathbf{d} = \\mathbf{c} + (\\mathbf{b}-\\mathbf{a})",
          "explanation": "Or go from $C$ parallel to $\\overrightarrow{AB}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check opposite sides",
          "workingLatex": "\\overrightarrow{AD} = \\overrightarrow{BC}",
          "explanation": "Both pairs of opposite sides must match.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Geometric meaning",
          "workingLatex": "\\text{fourth vertex of parallelogram } OABC",
          "explanation": "The vector $\\mathbf{d}$ locates the missing corner.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State the answer",
          "workingLatex": "\\mathbf{d} = 4\\mathbf{i}+6\\mathbf{j}+\\mathbf{k}",
          "explanation": "The position vector of the fourth vertex.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Diagonal endpoints",
          "workingLatex": "A \\text{ has } \\mathbf{a},\\ C \\text{ has } \\mathbf{c}",
          "explanation": "Diagonal $AC$ joins opposite corners.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Midpoint of $AC$",
          "workingLatex": "\\dfrac{1}{2}(\\mathbf{a}+\\mathbf{c}) = 3.5\\mathbf{i}+4\\mathbf{j}",
          "explanation": "Average the position vectors.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Simplify",
          "workingLatex": "\\dfrac{7}{2}\\mathbf{i}+4\\mathbf{j}",
          "explanation": "Exact form.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Note $z$-component",
          "workingLatex": "0\\mathbf{k}",
          "explanation": "Midpoint has zero $\\mathbf{k}$-part here.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "State answers",
          "workingLatex": "\\mathbf{c} = 4\\mathbf{i}+6\\mathbf{j}+\\mathbf{k},\\ M = \\dfrac{7}{2}\\mathbf{i}+4\\mathbf{j}",
          "explanation": "Fourth vertex and midpoint.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\mathbf{c} = 4\\mathbf{i} + 6\\mathbf{j} + \\mathbf{k}$ and midpoint of $AC$ is $\\dfrac{7}{2}\\mathbf{i} + 4\\mathbf{j}$"
    }
  },
  {
    "id": "al.y2.pure.vectors-3d.q060",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Vectors in three dimensions",
    "subtopicId": "al.y2.pure.vectors-3d",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "numeric",
    "tags": [
      "vectors",
      "cuboid"
    ],
    "questionText": "A rectangular room is $8$ m long, $6$ m wide and $3$ m high. Find the length of the longest straight-line distance between two opposite corners (the space diagonal).",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Space diagonal formula",
          "workingLatex": "d = \\sqrt{l^2 + w^2 + h^2}",
          "explanation": "The body diagonal crosses the cuboid corner to opposite corner through the interior.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute dimensions",
          "workingLatex": "d = \\sqrt{8^2 + 6^2 + 3^2}",
          "explanation": "Square each edge length and add.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Evaluate squares",
          "workingLatex": "d = \\sqrt{64 + 36 + 9}",
          "explanation": "Compute each squared term.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Sum",
          "workingLatex": "d = \\sqrt{109}",
          "explanation": "Add the three squared edges.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify",
          "workingLatex": "d = 11",
          "explanation": "Take the square root.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "3D Pythagoras",
          "workingLatex": "\\text{face diagonal then height}",
          "explanation": "Equivalently: find a face diagonal first, then use Pythagoras with the third edge.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the answer",
          "workingLatex": "d = 11",
          "explanation": "The length of the space diagonal.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Units",
          "workingLatex": "11\\text{ m}",
          "explanation": "Include metres.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Compare with floor diagonal",
          "workingLatex": "\\sqrt{8^2+6^2}=10\\text{ m}",
          "explanation": "Floor diagonal is shorter.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "3D step",
          "workingLatex": "\\sqrt{10^2+3^2}=11",
          "explanation": "Two-step Pythagoras.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Interpret",
          "workingLatex": "\\text{shortest path through air}",
          "explanation": "Not along walls — straight through the room.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "State the answer",
          "workingLatex": "11\\text{ m}",
          "explanation": "Space diagonal length.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Check each component",
          "workingLatex": "11\\text{ m}",
          "explanation": "Verify $\\mathbf{i}$, $\\mathbf{j}$ and $\\mathbf{k}$ parts separately before combining.",
          "diagram": null
        }
      ],
      "finalAnswer": "$11$ m"
    }
  },
  {
    "id": "al.y2.pure.vectors-3d.q061",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Vectors in three dimensions",
    "subtopicId": "al.y2.pure.vectors-3d",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "vector",
    "tags": [
      "vectors",
      "combined-operations"
    ],
    "questionText": "Given $\\mathbf{a} = \\mathbf{i} + 2\\mathbf{j} - \\mathbf{k}$, $\\mathbf{b} = 2\\mathbf{i} - \\mathbf{j} + 3\\mathbf{k}$ and $\\mathbf{c} = -\\mathbf{i} + 4\\mathbf{j} + 2\\mathbf{k}$, find $2\\mathbf{a} - \\mathbf{b} + 3\\mathbf{c}$ and its magnitude.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Compute $2\\mathbf{a}$",
          "workingLatex": "2\\mathbf{a} = 2\\mathbf{i} + 4\\mathbf{j} - 2\\mathbf{k}",
          "explanation": "Scale every component of $\\mathbf{a}$ by $2$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Compute $3\\mathbf{c}$",
          "workingLatex": "3\\mathbf{c} = -3\\mathbf{i} + 12\\mathbf{j} + 6\\mathbf{k}",
          "explanation": "Scale every component of $\\mathbf{c}$ by $3$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Combine $\\mathbf{i}$-parts",
          "workingLatex": "2 - 2 + (-3) = -3",
          "explanation": "Add contributions from each term.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Combine $\\mathbf{j}$-parts",
          "workingLatex": "4 - (-1) + 12 = 17",
          "explanation": "Watch the sign when subtracting $\\mathbf{b}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Combine $\\mathbf{k}$-parts",
          "workingLatex": "-2 - 3 + 6 = 1",
          "explanation": "Third component result.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Resultant vector",
          "workingLatex": "2\\mathbf{a}-\\mathbf{b}+3\\mathbf{c} = -3\\mathbf{i} + 17\\mathbf{j} + \\mathbf{k}",
          "explanation": "Collect the three components.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Magnitude",
          "workingLatex": "|\\mathbf{r}| = \\sqrt{9+289+1} = \\sqrt{299}",
          "explanation": "3D Pythagoras on the resultant.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Estimate",
          "workingLatex": "\\sqrt{299} \\approx 17.3",
          "explanation": "Plausibility check.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Verify one component",
          "workingLatex": "2(1)-2+3(-1) = -3",
          "explanation": "Spot-check the $\\mathbf{i}$-part.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the answer",
          "workingLatex": "-3\\mathbf{i}+17\\mathbf{j}+\\mathbf{k},\\ |\\mathbf{r}|=\\sqrt{299}",
          "explanation": "Vector and magnitude.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Check each component",
          "workingLatex": "-3\\mathbf{i}+17\\mathbf{j}+\\mathbf{k},\\ |\\mathbf{r}|=\\sqrt{299}",
          "explanation": "Verify $\\mathbf{i}$, $\\mathbf{j}$ and $\\mathbf{k}$ parts separately before combining.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Geometric interpretation",
          "workingLatex": "-3\\mathbf{i}+17\\mathbf{j}+\\mathbf{k},\\ |\\mathbf{r}|=\\sqrt{299}",
          "explanation": "Relate the vector result to position, displacement or distance in 3D space.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Consistency check",
          "workingLatex": "-3\\mathbf{i}+17\\mathbf{j}+\\mathbf{k},\\ |\\mathbf{r}|=\\sqrt{299}",
          "explanation": "Substitute back or compare magnitudes to confirm the working is coherent.",
          "diagram": null
        }
      ],
      "finalAnswer": "$2\\mathbf{a} - \\mathbf{b} + 3\\mathbf{c} = -3\\mathbf{i} + 17\\mathbf{j} + \\mathbf{k}$; $|\\mathbf{r}| = \\sqrt{299}$"
    }
  },
  {
    "id": "al.y2.pure.vectors-3d.q062",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Vectors in three dimensions",
    "subtopicId": "al.y2.pure.vectors-3d",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "numeric",
    "tags": [
      "vectors",
      "unit-vector",
      "distance"
    ],
    "questionText": "Find the unit vector in the direction of $\\overrightarrow{PQ}$ where $P(1, -2, 3)$ and $Q(4, 2, -3)$. Hence find the distance $PQ$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Displacement",
          "workingLatex": "\\overrightarrow{PQ} = 3\\mathbf{i} + 4\\mathbf{j} - 6\\mathbf{k}",
          "explanation": "Subtract coordinates of $P$ from $Q$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Magnitude",
          "workingLatex": "|\\overrightarrow{PQ}| = \\sqrt{9+16+36} = \\sqrt{61}",
          "explanation": "Distance $PQ$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Unit vector formula",
          "workingLatex": "\\hat{\\mathbf{d}} = \\dfrac{\\overrightarrow{PQ}}{|\\overrightarrow{PQ}|}",
          "explanation": "Divide by magnitude.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write unit vector",
          "workingLatex": "\\hat{\\mathbf{d}} = \\dfrac{3}{\\sqrt{61}}\\mathbf{i} + \\dfrac{4}{\\sqrt{61}}\\mathbf{j} - \\dfrac{6}{\\sqrt{61}}\\mathbf{k}",
          "explanation": "Each component divided by $\\sqrt{61}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Verify length",
          "workingLatex": "\\dfrac{9+16+36}{61} = 1",
          "explanation": "Squared components sum to $1$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Direction",
          "workingLatex": "\\text{from } P \\text{ towards } Q",
          "explanation": "The unit vector points along the segment.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Distance stated",
          "workingLatex": "PQ = \\sqrt{61}",
          "explanation": "Exact distance.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Estimate",
          "workingLatex": "PQ \\approx 7.81",
          "explanation": "Plausibility.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the answer",
          "workingLatex": "\\hat{\\mathbf{d}} = \\dfrac{3\\mathbf{i}+4\\mathbf{j}-6\\mathbf{k}}{\\sqrt{61}},\\ PQ=\\sqrt{61}",
          "explanation": "Unit vector and distance.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Check each component",
          "workingLatex": "\\hat{\\mathbf{d}} = \\dfrac{3\\mathbf{i}+4\\mathbf{j}-6\\mathbf{k}}{\\sqrt{61}},\\ PQ=\\sqrt{61}",
          "explanation": "Verify $\\mathbf{i}$, $\\mathbf{j}$ and $\\mathbf{k}$ parts separately before combining.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Geometric interpretation",
          "workingLatex": "\\hat{\\mathbf{d}} = \\dfrac{3\\mathbf{i}+4\\mathbf{j}-6\\mathbf{k}}{\\sqrt{61}},\\ PQ=\\sqrt{61}",
          "explanation": "Relate the vector result to position, displacement or distance in 3D space.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Consistency check",
          "workingLatex": "\\hat{\\mathbf{d}} = \\dfrac{3\\mathbf{i}+4\\mathbf{j}-6\\mathbf{k}}{\\sqrt{61}},\\ PQ=\\sqrt{61}",
          "explanation": "Substitute back or compare magnitudes to confirm the working is coherent.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Method summary",
          "workingLatex": "\\hat{\\mathbf{d}} = \\dfrac{3\\mathbf{i}+4\\mathbf{j}-6\\mathbf{k}}{\\sqrt{61}},\\ PQ=\\sqrt{61}",
          "explanation": "The key technique was vector addition, subtraction, or scalar multiplication in three dimensions.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\hat{\\mathbf{d}} = \\dfrac{3\\mathbf{i} + 4\\mathbf{j} - 6\\mathbf{k}}{\\sqrt{61}}$; $PQ = \\sqrt{61}$"
    }
  },
  {
    "id": "al.y2.pure.vectors-3d.q063",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Vectors in three dimensions",
    "subtopicId": "al.y2.pure.vectors-3d",
    "difficulty": "Hard",
    "marks": 9,
    "answerType": "vector",
    "tags": [
      "vectors",
      "collinearity",
      "ratio",
      "exam-style"
    ],
    "questionText": "Points $A$, $B$ and $C$ have position vectors $\\mathbf{a} = \\mathbf{i} + 3\\mathbf{j}$, $\\mathbf{b} = 4\\mathbf{i} + 6\\mathbf{j} + 3\\mathbf{k}$ and $\\mathbf{c} = 7\\mathbf{i} + 9\\mathbf{j} + 6\\mathbf{k}$. (a) Show that $A$, $B$ and $C$ are collinear. (b) Find the ratio $AB:BC$. (c) Find the position vector of the point dividing $AC$ internally in the ratio $2:1$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Part (a): $\\overrightarrow{AB}$",
          "workingLatex": "\\overrightarrow{AB} = 3\\mathbf{i} + 3\\mathbf{j} + 3\\mathbf{k}",
          "explanation": "Displacement from $A$ to $B$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "$\\overrightarrow{AC}$",
          "workingLatex": "\\overrightarrow{AC} = 6\\mathbf{i} + 6\\mathbf{j} + 6\\mathbf{k}",
          "explanation": "Displacement from $A$ to $C$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Scalar multiple",
          "workingLatex": "\\overrightarrow{AC} = 2\\overrightarrow{AB}",
          "explanation": "Parallel displacements from $A$ prove collinearity.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Part (b): magnitudes",
          "workingLatex": "|\\overrightarrow{AB}| = 3\\sqrt{3},\\ |\\overrightarrow{BC}| = 3\\sqrt{3}",
          "explanation": "Equal segment lengths.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Ratio",
          "workingLatex": "AB:BC = 1:1",
          "explanation": "$B$ is the midpoint of $AC$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Part (c): section formula",
          "workingLatex": "\\mathbf{p} = \\dfrac{1\\cdot\\mathbf{a} + 2\\cdot\\mathbf{c}}{3}",
          "explanation": "Ratio $2:1$ from $A$ to $C$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Compute",
          "workingLatex": "\\mathbf{p} = 5\\mathbf{i} + 7\\mathbf{j} + 4\\mathbf{k}",
          "explanation": "Weighted average of $\\mathbf{a}$ and $\\mathbf{c}$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Verify on line",
          "workingLatex": "\\mathbf{p} = \\mathbf{a} + \\dfrac{2}{3}\\overrightarrow{AC}",
          "explanation": "Lies two-thirds of the way from $A$ to $C$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Check ratio",
          "workingLatex": "AP:PC = 2:1",
          "explanation": "Confirms the division.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State answers",
          "workingLatex": "(a)\\ \\text{collinear},\\ (b)\\ 1:1,\\ (c)\\ 5\\mathbf{i}+7\\mathbf{j}+4\\mathbf{k}",
          "explanation": "All three parts.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Check each component",
          "workingLatex": "(a)\\ \\text{collinear},\\ (b)\\ 1:1,\\ (c)\\ 5\\mathbf{i}+7\\mathbf{j}+4\\mathbf{k}",
          "explanation": "Verify $\\mathbf{i}$, $\\mathbf{j}$ and $\\mathbf{k}$ parts separately before combining.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Geometric interpretation",
          "workingLatex": "(a)\\ \\text{collinear},\\ (b)\\ 1:1,\\ (c)\\ 5\\mathbf{i}+7\\mathbf{j}+4\\mathbf{k}",
          "explanation": "Relate the vector result to position, displacement or distance in 3D space.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Consistency check",
          "workingLatex": "(a)\\ \\text{collinear},\\ (b)\\ 1:1,\\ (c)\\ 5\\mathbf{i}+7\\mathbf{j}+4\\mathbf{k}",
          "explanation": "Substitute back or compare magnitudes to confirm the working is coherent.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $\\overrightarrow{AC} = 2\\overrightarrow{AB}$, so collinear; (b) $AB:BC = 1:1$; (c) $\\mathbf{p} = 5\\mathbf{i} + 7\\mathbf{j} + 4\\mathbf{k}$"
    }
  },
  {
    "id": "al.y2.pure.vectors-3d.q064",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Vectors in three dimensions",
    "subtopicId": "al.y2.pure.vectors-3d",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "numeric",
    "tags": [
      "vectors",
      "magnitude",
      "unknown-component"
    ],
    "questionText": "The vector $\\mathbf{v} = p\\mathbf{i} + 2\\mathbf{j} - 2\\mathbf{k}$ has the same magnitude as $\\mathbf{w} = 2\\mathbf{i} + 2\\mathbf{j} + \\mathbf{k}$. Find the possible values of $p$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Find $|\\mathbf{w}|$",
          "workingLatex": "|\\mathbf{w}| = \\sqrt{4+4+1} = 3",
          "explanation": "Magnitude of the reference vector.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Set up equation",
          "workingLatex": "p^2 + 4 + 4 = 9",
          "explanation": "Equate squared magnitudes.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Simplify",
          "workingLatex": "p^2 = 1",
          "explanation": "Collect terms.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Solve",
          "workingLatex": "p = \\pm 1",
          "explanation": "Both signs give the same length.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Verify $p=1$",
          "workingLatex": "|\\mathbf{v}| = \\sqrt{1+4+4} = 3",
          "explanation": "Positive value checks.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Verify $p=-1$",
          "workingLatex": "|\\mathbf{v}| = 3",
          "explanation": "Negative value checks.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Geometric meaning",
          "workingLatex": "\\text{two symmetric points}",
          "explanation": "Only the $\\mathbf{i}$-component differs in sign.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State the answer",
          "workingLatex": "p = 1 \\text{ or } p = -1",
          "explanation": "Both values are valid.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Check each component",
          "workingLatex": "p = 1 \\text{ or } p = -1",
          "explanation": "Verify $\\mathbf{i}$, $\\mathbf{j}$ and $\\mathbf{k}$ parts separately before combining.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Geometric interpretation",
          "workingLatex": "p = 1 \\text{ or } p = -1",
          "explanation": "Relate the vector result to position, displacement or distance in 3D space.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Consistency check",
          "workingLatex": "p = 1 \\text{ or } p = -1",
          "explanation": "Substitute back or compare magnitudes to confirm the working is coherent.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Method summary",
          "workingLatex": "p = 1 \\text{ or } p = -1",
          "explanation": "The key technique was vector addition, subtraction, or scalar multiplication in three dimensions.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Final review",
          "workingLatex": "p = 1 \\text{ or } p = -1",
          "explanation": "Re-read the question to ensure every required part has been answered.",
          "diagram": null
        }
      ],
      "finalAnswer": "$p = 1$ or $p = -1$"
    }
  },
  {
    "id": "al.y2.pure.vectors-3d.q065",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Vectors in three dimensions",
    "subtopicId": "al.y2.pure.vectors-3d",
    "difficulty": "Hard",
    "marks": 9,
    "answerType": "vector",
    "tags": [
      "vectors",
      "midpoint",
      "unknown-point"
    ],
    "questionText": "The midpoint of $AB$ is $M(3, -1, 2)$. Point $A$ has position vector $2\\mathbf{i} + 4\\mathbf{j} - \\mathbf{k}$. Find the position vector of $B$ and the distance $AB$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Midpoint vector formula",
          "workingLatex": "\\mathbf{m} = \\dfrac{1}{2}(\\mathbf{a}+\\mathbf{b})",
          "explanation": "The midpoint position vector averages the endpoints.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Double the midpoint",
          "workingLatex": "2\\mathbf{m} = 6\\mathbf{i} - 2\\mathbf{j} + 4\\mathbf{k}",
          "explanation": "Multiply $\\mathbf{m}$ by $2$ to clear the fraction.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Solve for $\\mathbf{b}$",
          "workingLatex": "\\mathbf{b} = 2\\mathbf{m} - \\mathbf{a}",
          "explanation": "Rearrange to isolate $\\mathbf{b}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Subtract components",
          "workingLatex": "\\mathbf{b} = 4\\mathbf{i} - 6\\mathbf{j} + 5\\mathbf{k}",
          "explanation": "Component-wise subtraction.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Form $\\overrightarrow{AB}$",
          "workingLatex": "\\overrightarrow{AB} = \\mathbf{b}-\\mathbf{a} = 2\\mathbf{i} - 10\\mathbf{j} + 6\\mathbf{k}",
          "explanation": "Displacement from $A$ to $B$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Distance",
          "workingLatex": "|\\overrightarrow{AB}| = \\sqrt{4+100+36} = 2\\sqrt{35}",
          "explanation": "Magnitude of the displacement.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Verify midpoint",
          "workingLatex": "\\dfrac{\\mathbf{a}+\\mathbf{b}}{2} = 3\\mathbf{i}-\\mathbf{j}+2\\mathbf{k}",
          "explanation": "Averaging $\\mathbf{a}$ and $\\mathbf{b}$ gives $M$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check coordinates",
          "workingLatex": "M(3,-1,2)",
          "explanation": "Matches the given midpoint.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the answer",
          "workingLatex": "\\mathbf{b} = 4\\mathbf{i}-6\\mathbf{j}+5\\mathbf{k},\\ AB = 2\\sqrt{35}",
          "explanation": "Position vector and distance.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Check each component",
          "workingLatex": "\\mathbf{b} = 4\\mathbf{i}-6\\mathbf{j}+5\\mathbf{k},\\ AB = 2\\sqrt{35}",
          "explanation": "Verify $\\mathbf{i}$, $\\mathbf{j}$ and $\\mathbf{k}$ parts separately before combining.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Geometric interpretation",
          "workingLatex": "\\mathbf{b} = 4\\mathbf{i}-6\\mathbf{j}+5\\mathbf{k},\\ AB = 2\\sqrt{35}",
          "explanation": "Relate the vector result to position, displacement or distance in 3D space.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Consistency check",
          "workingLatex": "\\mathbf{b} = 4\\mathbf{i}-6\\mathbf{j}+5\\mathbf{k},\\ AB = 2\\sqrt{35}",
          "explanation": "Substitute back or compare magnitudes to confirm the working is coherent.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Method summary",
          "workingLatex": "\\mathbf{b} = 4\\mathbf{i}-6\\mathbf{j}+5\\mathbf{k},\\ AB = 2\\sqrt{35}",
          "explanation": "The key technique was vector addition, subtraction, or scalar multiplication in three dimensions.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\mathbf{b} = 4\\mathbf{i} - 6\\mathbf{j} + 5\\mathbf{k}$; $AB = 2\\sqrt{35}$"
    }
  },
  {
    "id": "al.y2.pure.vectors-3d.q066",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Vectors in three dimensions",
    "subtopicId": "al.y2.pure.vectors-3d",
    "difficulty": "Hard",
    "marks": 10,
    "answerType": "vector",
    "tags": [
      "vectors",
      "parallelogram",
      "exam-style"
    ],
    "questionText": "The vertices of parallelogram $OABC$ are $O$ (origin), $A$, $B$ and $C$. Given $\\overrightarrow{OA} = 2\\mathbf{i} + \\mathbf{j} - \\mathbf{k}$ and $\\overrightarrow{OC} = 4\\mathbf{i} + 3\\mathbf{j} + 2\\mathbf{k}$, find: (a) $\\overrightarrow{OB}$, (b) $\\overrightarrow{AB}$, (c) the unit vector in the direction of $\\overrightarrow{AB}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Part (a): parallelogram rule",
          "workingLatex": "\\overrightarrow{OB} = \\overrightarrow{OA} + \\overrightarrow{OC}",
          "explanation": "In $OABC$, the diagonal $OB$ equals the sum of adjacent sides from $O$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Add components",
          "workingLatex": "\\overrightarrow{OB} = 6\\mathbf{i} + 4\\mathbf{j} + \\mathbf{k}",
          "explanation": "Combine matching $\\mathbf{i}$, $\\mathbf{j}$, $\\mathbf{k}$ parts.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Part (b): side vector",
          "workingLatex": "\\overrightarrow{AB} = \\overrightarrow{OB} - \\overrightarrow{OA}",
          "explanation": "Subtract position vectors to get the displacement from $A$ to $B$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Compute",
          "workingLatex": "\\overrightarrow{AB} = 4\\mathbf{i} + 3\\mathbf{j} + 2\\mathbf{k}",
          "explanation": "This equals $\\overrightarrow{OC}$ as expected in a parallelogram.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Part (c): magnitude of $\\overrightarrow{AB}$",
          "workingLatex": "|\\overrightarrow{AB}| = \\sqrt{16+9+4} = \\sqrt{29}",
          "explanation": "Needed for the unit vector.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Unit vector",
          "workingLatex": "\\hat{\\mathbf{u}} = \\dfrac{4}{\\sqrt{29}}\\mathbf{i} + \\dfrac{3}{\\sqrt{29}}\\mathbf{j} + \\dfrac{2}{\\sqrt{29}}\\mathbf{k}",
          "explanation": "Divide each component by $\\sqrt{29}$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Verify parallelogram",
          "workingLatex": "\\overrightarrow{AB} = \\overrightarrow{OC}",
          "explanation": "Opposite sides are equal.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check unit length",
          "workingLatex": "\\dfrac{16+9+4}{29} = 1",
          "explanation": "Squared components sum to $1$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State answers",
          "workingLatex": "(a)\\ 6\\mathbf{i}+4\\mathbf{j}+\\mathbf{k},\\ (b)\\ 4\\mathbf{i}+3\\mathbf{j}+2\\mathbf{k}",
          "explanation": "First two parts.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Complete part (c)",
          "workingLatex": "\\hat{\\mathbf{u}} = \\dfrac{4\\mathbf{i}+3\\mathbf{j}+2\\mathbf{k}}{\\sqrt{29}}",
          "explanation": "Unit vector in direction of $\\overrightarrow{AB}$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Check each component",
          "workingLatex": "\\hat{\\mathbf{u}} = \\dfrac{4\\mathbf{i}+3\\mathbf{j}+2\\mathbf{k}}{\\sqrt{29}}",
          "explanation": "Verify $\\mathbf{i}$, $\\mathbf{j}$ and $\\mathbf{k}$ parts separately before combining.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Geometric interpretation",
          "workingLatex": "\\hat{\\mathbf{u}} = \\dfrac{4\\mathbf{i}+3\\mathbf{j}+2\\mathbf{k}}{\\sqrt{29}}",
          "explanation": "Relate the vector result to position, displacement or distance in 3D space.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Consistency check",
          "workingLatex": "\\hat{\\mathbf{u}} = \\dfrac{4\\mathbf{i}+3\\mathbf{j}+2\\mathbf{k}}{\\sqrt{29}}",
          "explanation": "Substitute back or compare magnitudes to confirm the working is coherent.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $\\overrightarrow{OB} = 6\\mathbf{i} + 4\\mathbf{j} + \\mathbf{k}$; (b) $\\overrightarrow{AB} = 4\\mathbf{i} + 3\\mathbf{j} + 2\\mathbf{k}$; (c) $\\hat{\\mathbf{u}} = \\dfrac{4\\mathbf{i} + 3\\mathbf{j} + 2\\mathbf{k}}{\\sqrt{29}}$"
    }
  },
  {
    "id": "al.y2.pure.vectors-3d.q067",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Vectors in three dimensions",
    "subtopicId": "al.y2.pure.vectors-3d",
    "difficulty": "Hard",
    "marks": 10,
    "answerType": "numeric",
    "tags": [
      "vectors",
      "cuboid",
      "exam-style"
    ],
    "questionText": "A cuboid has vertices at $O(0,0,0)$ and $P(3,4,12)$ at opposite corners. (a) Find the space diagonal $OP$. (b) Find the length of the diagonal on the base face in the $xy$-plane. (c) Verify $OP$ using the base diagonal and height.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Part (a): space diagonal",
          "workingLatex": "OP = \\sqrt{3^2+4^2+12^2}",
          "explanation": "Direct 3D Pythagoras from origin to opposite corner.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Evaluate",
          "workingLatex": "OP = \\sqrt{9+16+144} = \\sqrt{169} = 13",
          "explanation": "Recognise the $3$-$4$-$12$ scaled triple.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Part (b): base diagonal",
          "workingLatex": "d_{\\text{base}} = \\sqrt{3^2+4^2} = 5",
          "explanation": "Face diagonal in the $xy$-plane.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Part (c): two-step Pythagoras",
          "workingLatex": "OP = \\sqrt{5^2+12^2}",
          "explanation": "Use base diagonal as one leg and height $12$ as the other.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Verify",
          "workingLatex": "OP = \\sqrt{25+144} = 13",
          "explanation": "Matches part (a).",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "3D Pythagoras theorem",
          "workingLatex": "OP^2 = d_{\\text{base}}^2 + h^2",
          "explanation": "Space diagonal from face diagonal plus perpendicular height.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Interpret",
          "workingLatex": "\\text{longest distance inside the cuboid}",
          "explanation": "The body diagonal is the maximum internal length.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State answers",
          "workingLatex": "(a)\\ 13,\\ (b)\\ 5,\\ (c)\\ \\text{verified}",
          "explanation": "All three parts.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Check each component",
          "workingLatex": "(a)\\ 13,\\ (b)\\ 5,\\ (c)\\ \\text{verified}",
          "explanation": "Verify $\\mathbf{i}$, $\\mathbf{j}$ and $\\mathbf{k}$ parts separately before combining.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Geometric interpretation",
          "workingLatex": "(a)\\ 13,\\ (b)\\ 5,\\ (c)\\ \\text{verified}",
          "explanation": "Relate the vector result to position, displacement or distance in 3D space.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Consistency check",
          "workingLatex": "(a)\\ 13,\\ (b)\\ 5,\\ (c)\\ \\text{verified}",
          "explanation": "Substitute back or compare magnitudes to confirm the working is coherent.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Method summary",
          "workingLatex": "(a)\\ 13,\\ (b)\\ 5,\\ (c)\\ \\text{verified}",
          "explanation": "The key technique was vector addition, subtraction, or scalar multiplication in three dimensions.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Final review",
          "workingLatex": "(a)\\ 13,\\ (b)\\ 5,\\ (c)\\ \\text{verified}",
          "explanation": "Re-read the question to ensure every required part has been answered.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $OP = 13$; (b) base diagonal $= 5$; (c) $\\sqrt{5^2+12^2}=13$ confirms the space diagonal."
    }
  },
  {
    "id": "al.y2.pure.vectors-3d.q068",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Vectors in three dimensions",
    "subtopicId": "al.y2.pure.vectors-3d",
    "difficulty": "Hard",
    "marks": 11,
    "answerType": "numeric",
    "tags": [
      "vectors",
      "unknown-component",
      "magnitude"
    ],
    "questionText": "The vector $\\mathbf{v} = 2\\mathbf{i} + 3\\mathbf{j} + t\\mathbf{k}$ has magnitude $7$. Find the possible values of $t$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Magnitude equation",
          "workingLatex": "|\\mathbf{v}| = 7 \\Rightarrow \\sqrt{2^2+3^2+t^2} = 7",
          "explanation": "Set up the 3D magnitude formula with the unknown $t$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Square both sides",
          "workingLatex": "4 + 9 + t^2 = 49",
          "explanation": "Remove the square root by squaring.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Simplify",
          "workingLatex": "t^2 = 36",
          "explanation": "Collect known squares on one side.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Solve",
          "workingLatex": "t = \\pm 6",
          "explanation": "Take the square root — both signs are valid.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Verify $t=6$",
          "workingLatex": "|\\mathbf{v}| = \\sqrt{4+9+36} = 7",
          "explanation": "Positive value checks.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Verify $t=-6$",
          "workingLatex": "|\\mathbf{v}| = 7",
          "explanation": "Negative value also checks.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Geometric meaning",
          "workingLatex": "\\text{two points on the same vertical line}",
          "explanation": "Fixing $x$ and $y$ leaves two symmetric $z$-values at distance $7$ from the origin.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State the answer",
          "workingLatex": "t = 6 \\text{ or } t = -6",
          "explanation": "Both values give magnitude $7$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Check each component",
          "workingLatex": "t = 6 \\text{ or } t = -6",
          "explanation": "Verify $\\mathbf{i}$, $\\mathbf{j}$ and $\\mathbf{k}$ parts separately before combining.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Geometric interpretation",
          "workingLatex": "t = 6 \\text{ or } t = -6",
          "explanation": "Relate the vector result to position, displacement or distance in 3D space.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Consistency check",
          "workingLatex": "t = 6 \\text{ or } t = -6",
          "explanation": "Substitute back or compare magnitudes to confirm the working is coherent.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Method summary",
          "workingLatex": "t = 6 \\text{ or } t = -6",
          "explanation": "The key technique was vector addition, subtraction, or scalar multiplication in three dimensions.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Final review",
          "workingLatex": "t = 6 \\text{ or } t = -6",
          "explanation": "Re-read the question to ensure every required part has been answered.",
          "diagram": null
        }
      ],
      "finalAnswer": "$t = 6$ or $t = -6$"
    }
  },
  {
    "id": "al.y2.pure.vectors-3d.q069",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Vectors in three dimensions",
    "subtopicId": "al.y2.pure.vectors-3d",
    "difficulty": "Hard",
    "marks": 12,
    "answerType": "vector",
    "tags": [
      "vectors",
      "ratio",
      "section-formula",
      "exam-style"
    ],
    "questionText": "Points $A$ and $B$ have position vectors $\\mathbf{a} = -\\mathbf{i} + 2\\mathbf{j} + 4\\mathbf{k}$ and $\\mathbf{b} = 5\\mathbf{i} + 8\\mathbf{j} + 10\\mathbf{k}$. The point $P$ lies on $AB$ such that $AP:PB = 1:2$. Find $\\overrightarrow{OP}$ and the distance $OP$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Section formula",
          "workingLatex": "\\mathbf{p} = \\dfrac{2\\mathbf{a} + \\mathbf{b}}{3}",
          "explanation": "Ratio $1:2$ means weight $\\mathbf{a}$ by $2$ and $\\mathbf{b}$ by $1$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Compute $2\\mathbf{a}$",
          "workingLatex": "2\\mathbf{a} = -2\\mathbf{i} + 4\\mathbf{j} + 8\\mathbf{k}",
          "explanation": "Double each component of $\\mathbf{a}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Add vectors",
          "workingLatex": "2\\mathbf{a}+\\mathbf{b} = 3\\mathbf{i} + 12\\mathbf{j} + 18\\mathbf{k}",
          "explanation": "Add matching components.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Divide by $3$",
          "workingLatex": "\\mathbf{p} = \\mathbf{i} + 4\\mathbf{j} + 6\\mathbf{k}",
          "explanation": "Position vector of $P$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Magnitude formula",
          "workingLatex": "|\\mathbf{p}| = \\sqrt{1+16+36}",
          "explanation": "Find distance from origin.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Evaluate",
          "workingLatex": "|\\mathbf{p}| = \\sqrt{53}",
          "explanation": "Exact surd form.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Ratio check",
          "workingLatex": "\\overrightarrow{AP} = 2\\mathbf{i}+2\\mathbf{j}+2\\mathbf{k}",
          "explanation": "Displacement from $A$ to $P$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Verify ratio",
          "workingLatex": "\\overrightarrow{PB} = 4\\mathbf{i}+4\\mathbf{j}+4\\mathbf{k} = 2\\overrightarrow{AP}",
          "explanation": "Confirms $AP:PB = 1:2$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the answer",
          "workingLatex": "\\mathbf{p} = \\mathbf{i}+4\\mathbf{j}+6\\mathbf{k},\\ |\\mathbf{p}|=\\sqrt{53}",
          "explanation": "Position vector and distance.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Check each component",
          "workingLatex": "\\mathbf{p} = \\mathbf{i}+4\\mathbf{j}+6\\mathbf{k},\\ |\\mathbf{p}|=\\sqrt{53}",
          "explanation": "Verify $\\mathbf{i}$, $\\mathbf{j}$ and $\\mathbf{k}$ parts separately before combining.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Geometric interpretation",
          "workingLatex": "\\mathbf{p} = \\mathbf{i}+4\\mathbf{j}+6\\mathbf{k},\\ |\\mathbf{p}|=\\sqrt{53}",
          "explanation": "Relate the vector result to position, displacement or distance in 3D space.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Consistency check",
          "workingLatex": "\\mathbf{p} = \\mathbf{i}+4\\mathbf{j}+6\\mathbf{k},\\ |\\mathbf{p}|=\\sqrt{53}",
          "explanation": "Substitute back or compare magnitudes to confirm the working is coherent.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Method summary",
          "workingLatex": "\\mathbf{p} = \\mathbf{i}+4\\mathbf{j}+6\\mathbf{k},\\ |\\mathbf{p}|=\\sqrt{53}",
          "explanation": "The key technique was vector addition, subtraction, or scalar multiplication in three dimensions.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\overrightarrow{OP} = \\mathbf{i} + 4\\mathbf{j} + 6\\mathbf{k}$; $OP = \\sqrt{53}$"
    }
  },
  {
    "id": "al.y2.pure.vectors-3d.q070",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Vectors in three dimensions",
    "subtopicId": "al.y2.pure.vectors-3d",
    "difficulty": "Hard",
    "marks": 14,
    "answerType": "written",
    "tags": [
      "vectors",
      "exam-style",
      "conceptual"
    ],
    "questionText": "Points $A$, $B$ and $C$ have position vectors $\\mathbf{a} = 2\\mathbf{i} - \\mathbf{j} + 3\\mathbf{k}$, $\\mathbf{b} = 5\\mathbf{i} + 2\\mathbf{j} + 6\\mathbf{k}$ and $\\mathbf{c} = 8\\mathbf{i} + 5\\mathbf{j} + 9\\mathbf{k}$. (a) Prove that $A$, $B$ and $C$ are collinear. (b) Find the ratio $AB:BC$. (c) Explain why $|\\mathbf{a}|$, $|\\mathbf{b}|$ and $|\\mathbf{c}|$ are not in the same ratio as $AB:BC$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Form $\\overrightarrow{AB}$",
          "workingLatex": "\\overrightarrow{AB} = 3\\mathbf{i} + 3\\mathbf{j} + 3\\mathbf{k}",
          "explanation": "Displacement from $A$ to $B$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Form $\\overrightarrow{AC}$",
          "workingLatex": "\\overrightarrow{AC} = 6\\mathbf{i} + 6\\mathbf{j} + 6\\mathbf{k}",
          "explanation": "Displacement from $A$ to $C$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Test for scalar multiple",
          "workingLatex": "\\overrightarrow{AB} = \\dfrac{1}{2}\\overrightarrow{AC}",
          "explanation": "Collinear points give parallel displacement vectors — one is a scalar multiple of the other.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Check $\\mathbf{i}$-components",
          "workingLatex": "3 = \\dfrac{1}{2} \\times 6",
          "explanation": "The scale factor must match in every component.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check $\\mathbf{j}$-components",
          "workingLatex": "3 = \\dfrac{1}{2} \\times 6",
          "explanation": "All three components must share the same multiplier.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check $\\mathbf{k}$-components",
          "workingLatex": "3 = \\dfrac{1}{2} \\times 6",
          "explanation": "If any ratio differs, the points are not collinear.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Common point",
          "workingLatex": "A \\text{ is shared}",
          "explanation": "Both vectors start from $A$, so they lie on the same line through $A$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Conclude collinearity",
          "workingLatex": "A,\\ B \\text{ and } C \\text{ are collinear}",
          "explanation": "Parallel displacements from a common point mean the three points lie on one straight line.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the result",
          "workingLatex": "\\overrightarrow{AB} = \\dfrac{1}{2}\\overrightarrow{AC}",
          "explanation": "The scalar-multiple condition is satisfied.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Part (b): segment lengths",
          "workingLatex": "|\\overrightarrow{AB}| = |\\overrightarrow{BC}| = 3\\sqrt{3}",
          "explanation": "Equal displacements give equal segment lengths.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Ratio",
          "workingLatex": "AB:BC = 1:1",
          "explanation": "$B$ is the midpoint of $AC$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Part (c): position vector magnitudes",
          "workingLatex": "|\\mathbf{a}| = \\sqrt{14},\\ |\\mathbf{b}| = \\sqrt{65},\\ |\\mathbf{c}| = \\sqrt{170}",
          "explanation": "Distances from the origin — not the same as segment lengths along the line.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Key distinction",
          "workingLatex": "|\\mathbf{b}| \\neq 2|\\mathbf{a}|",
          "explanation": "Position vector magnitudes depend on distance from $O$, not spacing along $AC$.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Conclusion",
          "workingLatex": "\\text{collinearity uses displacement vectors, not position magnitudes}",
          "explanation": "Only $\\overrightarrow{AB}$ and $\\overrightarrow{BC}$ share the ratio $1:1$.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "Summary",
          "workingLatex": "(a)\\ \\text{collinear},\\ (b)\\ 1:1,\\ (c)\\ \\text{position magnitudes } \\neq \\text{ segment ratios}",
          "explanation": "Complete exam-style response.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $\\overrightarrow{AB} = 3\\mathbf{i}+3\\mathbf{j}+3\\mathbf{k}$ and $\\overrightarrow{AC} = 2\\overrightarrow{AB}$, so collinear. (b) $AB:BC = 1:1$. (c) Position vector magnitudes measure distance from $O$, not spacing along the line."
    }
  }
];
