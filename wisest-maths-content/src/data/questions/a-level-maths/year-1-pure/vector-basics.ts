import { Question } from "@/lib/types";

export const questions: Question[] = [
  {
    "id": "al.y1.pure.vectors.q001",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Vector basics",
    "subtopicId": "al.y1.pure.vectors",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "vector",
    "tags": [
      "vectors",
      "column-vector",
      "ij-notation"
    ],
    "questionText": "The vector $\\mathbf{a} = 3\\mathbf{i} - 5\\mathbf{j}$. Write $\\mathbf{a}$ as a column vector.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall how the two notations line up",
          "workingLatex": "x\\mathbf{i} + y\\mathbf{j} = \\begin{pmatrix} x \\\\ y \\end{pmatrix}",
          "explanation": "A column vector simply stacks the same two numbers vertically: the top entry is the horizontal ($\\mathbf{i}$) amount and the bottom entry is the vertical ($\\mathbf{j}$) amount. Nothing changes about the vector, only how we write it.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Read off the horizontal component",
          "workingLatex": "x = 3",
          "explanation": "The number multiplying $\\mathbf{i}$ tells us how far the vector goes across, so the horizontal component is $3$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Read off the vertical component",
          "workingLatex": "y = -5",
          "explanation": "The term $-5\\mathbf{j}$ means the vector goes $5$ units in the negative $\\mathbf{j}$ direction, so we keep the sign and the vertical component is $-5$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Set up the column template",
          "workingLatex": "\\mathbf{a} = \\begin{pmatrix} x \\\\ y \\end{pmatrix}",
          "explanation": "We write an empty column with the horizontal entry on top and the vertical entry underneath, ready to drop our numbers in.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute the components",
          "workingLatex": "\\mathbf{a} = \\begin{pmatrix} 3 \\\\ -5 \\end{pmatrix}",
          "explanation": "Placing $3$ on top and $-5$ underneath gives the same vector in column form.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the final answer",
          "workingLatex": "\\mathbf{a} = \\begin{pmatrix} 3 \\\\ -5 \\end{pmatrix}",
          "explanation": "This is $3\\mathbf{i} - 5\\mathbf{j}$ rewritten as a column vector, with the sign carried through correctly.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\mathbf{a} = \\begin{pmatrix} 3 \\\\ -5 \\end{pmatrix}$"
    }
  },
  {
    "id": "al.y1.pure.vectors.q002",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Vector basics",
    "subtopicId": "al.y1.pure.vectors",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "vector",
    "tags": [
      "vectors",
      "column-vector",
      "ij-notation"
    ],
    "questionText": "The vector $\\mathbf{b} = \\begin{pmatrix} -2 \\\\ 7 \\end{pmatrix}$. Write $\\mathbf{b}$ in the form $x\\mathbf{i} + y\\mathbf{j}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall how the two notations line up",
          "workingLatex": "\\begin{pmatrix} x \\\\ y \\end{pmatrix} = x\\mathbf{i} + y\\mathbf{j}",
          "explanation": "The top entry of a column vector is the amount in the $\\mathbf{i}$ direction and the bottom entry is the amount in the $\\mathbf{j}$ direction, so we can read the vector straight off.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Read off the top entry",
          "workingLatex": "x = -2",
          "explanation": "The top number is the horizontal component, so it becomes the coefficient of $\\mathbf{i}$, keeping its negative sign.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Read off the bottom entry",
          "workingLatex": "y = 7",
          "explanation": "The bottom number is the vertical component, so it becomes the coefficient of $\\mathbf{j}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write out the i and j terms",
          "workingLatex": "\\mathbf{b} = (-2)\\mathbf{i} + 7\\mathbf{j}",
          "explanation": "We attach each component to its direction vector, which keeps the meaning of the vector unchanged.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Tidy the signs",
          "workingLatex": "\\mathbf{b} = -2\\mathbf{i} + 7\\mathbf{j}",
          "explanation": "Adding a negative term is the same as subtracting, so $(-2)\\mathbf{i}$ is written simply as $-2\\mathbf{i}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the final answer",
          "workingLatex": "\\mathbf{b} = -2\\mathbf{i} + 7\\mathbf{j}",
          "explanation": "This is the column vector rewritten in $\\mathbf{i}$, $\\mathbf{j}$ form, describing the same movement of $2$ left and $7$ up.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\mathbf{b} = -2\\mathbf{i} + 7\\mathbf{j}$"
    }
  },
  {
    "id": "al.y1.pure.vectors.q003",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Vector basics",
    "subtopicId": "al.y1.pure.vectors",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "vector",
    "tags": [
      "vectors",
      "addition",
      "column-vector"
    ],
    "questionText": "Given $\\mathbf{a} = 2\\mathbf{i} + 3\\mathbf{j}$ and $\\mathbf{b} = 4\\mathbf{i} - \\mathbf{j}$, find $\\mathbf{a} + \\mathbf{b}$, giving your answer in both $\\mathbf{i}$, $\\mathbf{j}$ form and as a column vector.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the rule for adding vectors",
          "workingLatex": "\\mathbf{a} + \\mathbf{b}: \\ \\text{add } \\mathbf{i} \\text{ terms, add } \\mathbf{j} \\text{ terms}",
          "explanation": "Vectors add component by component: horizontal parts combine with horizontal parts and vertical with vertical, because they act along independent directions.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify the components",
          "workingLatex": "\\mathbf{a} = (2, 3), \\quad \\mathbf{b} = (4, -1)",
          "explanation": "Reading the coefficients, $\\mathbf{a}$ has horizontal $2$ and vertical $3$, while $\\mathbf{b}$ has horizontal $4$ and vertical $-1$ (since $-\\mathbf{j}$ means $-1$).",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Add the horizontal components",
          "workingLatex": "2 + 4 = 6",
          "explanation": "Combining the two $\\mathbf{i}$ amounts gives the horizontal part of the result.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Add the vertical components",
          "workingLatex": "3 + (-1) = 2",
          "explanation": "Combining the two $\\mathbf{j}$ amounts, remembering $\\mathbf{b}$'s vertical part is negative, gives the vertical part of the result.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Write the answer in i, j form",
          "workingLatex": "\\mathbf{a} + \\mathbf{b} = 6\\mathbf{i} + 2\\mathbf{j}",
          "explanation": "We reattach each total to its direction vector to express the sum in $\\mathbf{i}$, $\\mathbf{j}$ notation.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Write the same answer as a column vector",
          "workingLatex": "\\mathbf{a} + \\mathbf{b} = \\begin{pmatrix} 6 \\\\ 2 \\end{pmatrix}",
          "explanation": "Stacking the horizontal total on top of the vertical total gives the identical vector in column form.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\mathbf{a} + \\mathbf{b} = 6\\mathbf{i} + 2\\mathbf{j} = \\begin{pmatrix} 6 \\\\ 2 \\end{pmatrix}$"
    }
  },
  {
    "id": "al.y1.pure.vectors.q004",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Vector basics",
    "subtopicId": "al.y1.pure.vectors",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "vector",
    "tags": [
      "vectors",
      "subtraction",
      "column-vector"
    ],
    "questionText": "Given $\\mathbf{a} = 5\\mathbf{i} - 2\\mathbf{j}$ and $\\mathbf{b} = \\mathbf{i} + 4\\mathbf{j}$, find $\\mathbf{a} - \\mathbf{b}$, giving your answer in both $\\mathbf{i}$, $\\mathbf{j}$ form and as a column vector.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the rule for subtracting vectors",
          "workingLatex": "\\mathbf{a} - \\mathbf{b}: \\ \\text{subtract } \\mathbf{i} \\text{ terms and } \\mathbf{j} \\text{ terms}",
          "explanation": "Subtraction also works component by component: we take away the horizontal part of $\\mathbf{b}$ from that of $\\mathbf{a}$, and likewise for the vertical parts.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify the components",
          "workingLatex": "\\mathbf{a} = (5, -2), \\quad \\mathbf{b} = (1, 4)",
          "explanation": "Reading the coefficients, $\\mathbf{a}$ has horizontal $5$ and vertical $-2$, while $\\mathbf{b}$ has horizontal $1$ (since $\\mathbf{i}$ means $1\\mathbf{i}$) and vertical $4$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Subtract the horizontal components",
          "workingLatex": "5 - 1 = 4",
          "explanation": "Taking $\\mathbf{b}$'s horizontal amount away from $\\mathbf{a}$'s gives the horizontal part of the result.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Subtract the vertical components",
          "workingLatex": "-2 - 4 = -6",
          "explanation": "Starting at $-2$ and taking away a further $4$ moves us to $-6$, giving the vertical part of the result.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Write the answer in i, j form",
          "workingLatex": "\\mathbf{a} - \\mathbf{b} = 4\\mathbf{i} - 6\\mathbf{j}",
          "explanation": "Reattaching each total to its direction vector expresses the difference in $\\mathbf{i}$, $\\mathbf{j}$ notation.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Write the same answer as a column vector",
          "workingLatex": "\\mathbf{a} - \\mathbf{b} = \\begin{pmatrix} 4 \\\\ -6 \\end{pmatrix}",
          "explanation": "Stacking the horizontal total above the vertical total gives the identical vector in column form.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\mathbf{a} - \\mathbf{b} = 4\\mathbf{i} - 6\\mathbf{j} = \\begin{pmatrix} 4 \\\\ -6 \\end{pmatrix}$"
    }
  },
  {
    "id": "al.y1.pure.vectors.q005",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Vector basics",
    "subtopicId": "al.y1.pure.vectors",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "vector",
    "tags": [
      "vectors",
      "scalar-multiple",
      "column-vector"
    ],
    "questionText": "Given $\\mathbf{a} = 3\\mathbf{i} + 2\\mathbf{j}$, find $2\\mathbf{a}$, giving your answer in both $\\mathbf{i}$, $\\mathbf{j}$ form and as a column vector.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall what a scalar multiple does",
          "workingLatex": "k(x\\mathbf{i} + y\\mathbf{j}) = kx\\mathbf{i} + ky\\mathbf{j}",
          "explanation": "Multiplying a vector by a number scales both components by that number, stretching the vector while keeping its direction.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify the components",
          "workingLatex": "x = 3, \\quad y = 2",
          "explanation": "The horizontal component of $\\mathbf{a}$ is $3$ and the vertical component is $2$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Double the horizontal component",
          "workingLatex": "2 \\times 3 = 6",
          "explanation": "Each unit across becomes two, so the horizontal part doubles to $6$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Double the vertical component",
          "workingLatex": "2 \\times 2 = 4",
          "explanation": "Similarly the vertical part doubles from $2$ to $4$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Write the answer in i, j form",
          "workingLatex": "2\\mathbf{a} = 6\\mathbf{i} + 4\\mathbf{j}",
          "explanation": "Reattaching the doubled components to their directions gives $2\\mathbf{a}$ in $\\mathbf{i}$, $\\mathbf{j}$ form.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Write the same answer as a column vector",
          "workingLatex": "2\\mathbf{a} = \\begin{pmatrix} 6 \\\\ 4 \\end{pmatrix}",
          "explanation": "Stacking the two components gives the identical vector in column form.",
          "diagram": null
        }
      ],
      "finalAnswer": "$2\\mathbf{a} = 6\\mathbf{i} + 4\\mathbf{j} = \\begin{pmatrix} 6 \\\\ 4 \\end{pmatrix}$"
    }
  },
  {
    "id": "al.y1.pure.vectors.q006",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Vector basics",
    "subtopicId": "al.y1.pure.vectors",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "vector",
    "tags": [
      "vectors",
      "scalar-multiple",
      "column-vector"
    ],
    "questionText": "The vector $\\mathbf{b} = \\begin{pmatrix} -1 \\\\ 4 \\end{pmatrix}$. Find $-3\\mathbf{b}$, giving your answer as a column vector and in $\\mathbf{i}$, $\\mathbf{j}$ form.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall what a scalar multiple does",
          "workingLatex": "k\\begin{pmatrix} x \\\\ y \\end{pmatrix} = \\begin{pmatrix} kx \\\\ ky \\end{pmatrix}",
          "explanation": "Multiplying by a scalar multiplies each entry of the column by that number. A negative scalar also reverses the vector's direction.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify the components",
          "workingLatex": "x = -1, \\quad y = 4",
          "explanation": "From the column, the horizontal component is $-1$ and the vertical component is $4$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Multiply the top entry by the scalar",
          "workingLatex": "-3 \\times (-1) = 3",
          "explanation": "A negative times a negative is positive, so the horizontal entry becomes $+3$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Multiply the bottom entry by the scalar",
          "workingLatex": "-3 \\times 4 = -12",
          "explanation": "A negative times a positive is negative, so the vertical entry becomes $-12$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Write the answer as a column vector",
          "workingLatex": "-3\\mathbf{b} = \\begin{pmatrix} 3 \\\\ -12 \\end{pmatrix}",
          "explanation": "Placing the two results into a column gives $-3\\mathbf{b}$ in column form.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Write the same answer in i, j form",
          "workingLatex": "-3\\mathbf{b} = 3\\mathbf{i} - 12\\mathbf{j}",
          "explanation": "Reading the column back into direction vectors gives the equivalent $\\mathbf{i}$, $\\mathbf{j}$ expression.",
          "diagram": null
        }
      ],
      "finalAnswer": "$-3\\mathbf{b} = \\begin{pmatrix} 3 \\\\ -12 \\end{pmatrix} = 3\\mathbf{i} - 12\\mathbf{j}$"
    }
  },
  {
    "id": "al.y1.pure.vectors.q007",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Vector basics",
    "subtopicId": "al.y1.pure.vectors",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "vector",
    "tags": [
      "vectors",
      "scalar-multiple",
      "addition"
    ],
    "questionText": "Given $\\mathbf{a} = \\mathbf{i} + 2\\mathbf{j}$ and $\\mathbf{b} = 3\\mathbf{i} - \\mathbf{j}$, find $2\\mathbf{a} + 3\\mathbf{b}$, giving your answer in both $\\mathbf{i}$, $\\mathbf{j}$ form and as a column vector.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Scale vector a first",
          "workingLatex": "2\\mathbf{a} = 2(\\mathbf{i} + 2\\mathbf{j}) = 2\\mathbf{i} + 4\\mathbf{j}",
          "explanation": "Multiplying $\\mathbf{a}$ by $2$ doubles each component, giving the first scaled vector.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Scale vector b next",
          "workingLatex": "3\\mathbf{b} = 3(3\\mathbf{i} - \\mathbf{j}) = 9\\mathbf{i} - 3\\mathbf{j}",
          "explanation": "Multiplying $\\mathbf{b}$ by $3$ triples each component, giving the second scaled vector.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Set up the sum",
          "workingLatex": "2\\mathbf{a} + 3\\mathbf{b} = (2\\mathbf{i} + 4\\mathbf{j}) + (9\\mathbf{i} - 3\\mathbf{j})",
          "explanation": "Now we simply add the two scaled vectors together, combining like directions.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Add the horizontal components",
          "workingLatex": "2 + 9 = 11",
          "explanation": "Combining the two $\\mathbf{i}$ amounts gives the horizontal part of the result.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Add the vertical components",
          "workingLatex": "4 + (-3) = 1",
          "explanation": "Combining the two $\\mathbf{j}$ amounts, with the second one negative, gives the vertical part of the result.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Write the answer in i, j form",
          "workingLatex": "2\\mathbf{a} + 3\\mathbf{b} = 11\\mathbf{i} + \\mathbf{j}",
          "explanation": "A vertical component of $1$ is written simply as $\\mathbf{j}$, giving the result in $\\mathbf{i}$, $\\mathbf{j}$ form.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Write the same answer as a column vector",
          "workingLatex": "2\\mathbf{a} + 3\\mathbf{b} = \\begin{pmatrix} 11 \\\\ 1 \\end{pmatrix}",
          "explanation": "Stacking the horizontal total above the vertical total gives the identical vector in column form.",
          "diagram": null
        }
      ],
      "finalAnswer": "$2\\mathbf{a} + 3\\mathbf{b} = 11\\mathbf{i} + \\mathbf{j} = \\begin{pmatrix} 11 \\\\ 1 \\end{pmatrix}$"
    }
  },
  {
    "id": "al.y1.pure.vectors.q008",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Vector basics",
    "subtopicId": "al.y1.pure.vectors",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "value",
    "tags": [
      "vectors",
      "magnitude"
    ],
    "questionText": "The vector $\\mathbf{a} = 6\\mathbf{i} + 8\\mathbf{j}$. Find the magnitude $\\left| \\mathbf{a} \\right|$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the magnitude formula",
          "workingLatex": "\\left| \\mathbf{a} \\right| = \\sqrt{x^{2} + y^{2}}",
          "explanation": "A vector's magnitude is its length. By Pythagoras on the horizontal and vertical components, the length is the square root of the sum of their squares.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify the components",
          "workingLatex": "x = 6, \\quad y = 8",
          "explanation": "The number in front of $\\mathbf{i}$ is the horizontal component and the number in front of $\\mathbf{j}$ is the vertical component.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Square each component",
          "workingLatex": "6^{2} = 36, \\quad 8^{2} = 64",
          "explanation": "Squaring the two components prepares the two quantities we need to add under the root.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute into the formula",
          "workingLatex": "\\left| \\mathbf{a} \\right| = \\sqrt{36 + 64}",
          "explanation": "Placing the squared components under the square root sets up the final calculation.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Add under the root",
          "workingLatex": "= \\sqrt{100}",
          "explanation": "Adding $36$ and $64$ gives $100$ inside the square root.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Simplify",
          "workingLatex": "= 10",
          "explanation": "The square root of $100$ is exactly $10$, so the vector has length $10$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\left| \\mathbf{a} \\right| = 10$"
    }
  },
  {
    "id": "al.y1.pure.vectors.q009",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Vector basics",
    "subtopicId": "al.y1.pure.vectors",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "value",
    "tags": [
      "vectors",
      "magnitude"
    ],
    "questionText": "The vector $\\mathbf{v} = 5\\mathbf{i} + 12\\mathbf{j}$. Find the magnitude $\\left| \\mathbf{v} \\right|$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the magnitude formula",
          "workingLatex": "\\left| \\mathbf{v} \\right| = \\sqrt{x^{2} + y^{2}}",
          "explanation": "The magnitude is the length of the vector, found by Pythagoras: the square root of the sum of the squared components.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify the components",
          "workingLatex": "x = 5, \\quad y = 12",
          "explanation": "The coefficient of $\\mathbf{i}$ gives the horizontal component and the coefficient of $\\mathbf{j}$ gives the vertical component.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Square each component",
          "workingLatex": "5^{2} = 25, \\quad 12^{2} = 144",
          "explanation": "Squaring both components gives the two values to add under the root.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute into the formula",
          "workingLatex": "\\left| \\mathbf{v} \\right| = \\sqrt{25 + 144}",
          "explanation": "The squared components go under the square root, ready to be combined.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Add under the root",
          "workingLatex": "= \\sqrt{169}",
          "explanation": "Adding $25$ and $144$ gives $169$ inside the square root.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Simplify",
          "workingLatex": "= 13",
          "explanation": "The square root of $169$ is exactly $13$, so the vector has length $13$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\left| \\mathbf{v} \\right| = 13$"
    }
  },
  {
    "id": "al.y1.pure.vectors.q010",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Vector basics",
    "subtopicId": "al.y1.pure.vectors",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "value",
    "tags": [
      "vectors",
      "magnitude"
    ],
    "questionText": "The vector $\\mathbf{a} = -8\\mathbf{i} + 15\\mathbf{j}$. Find the magnitude $\\left| \\mathbf{a} \\right|$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the magnitude formula",
          "workingLatex": "\\left| \\mathbf{a} \\right| = \\sqrt{x^{2} + y^{2}}",
          "explanation": "The magnitude is the length of the vector, given by Pythagoras as the square root of the sum of the squared components.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify the components",
          "workingLatex": "x = -8, \\quad y = 15",
          "explanation": "The horizontal component is $-8$ and the vertical component is $15$; we keep the negative sign for now.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Square each component",
          "workingLatex": "(-8)^{2} = 64, \\quad 15^{2} = 225",
          "explanation": "Squaring a negative number gives a positive result, so $(-8)^{2} = 64$; the sign disappears because length cannot be negative.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute into the formula",
          "workingLatex": "\\left| \\mathbf{a} \\right| = \\sqrt{64 + 225}",
          "explanation": "The two squared components go under the root, ready to be added.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Add under the root",
          "workingLatex": "= \\sqrt{289}",
          "explanation": "Adding $64$ and $225$ gives $289$ inside the square root.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Simplify",
          "workingLatex": "= 17",
          "explanation": "The square root of $289$ is exactly $17$, so the vector has length $17$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\left| \\mathbf{a} \\right| = 17$"
    }
  },
  {
    "id": "al.y1.pure.vectors.q011",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Vector basics",
    "subtopicId": "al.y1.pure.vectors",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "value",
    "tags": [
      "vectors",
      "magnitude",
      "column-vector"
    ],
    "questionText": "The vector $\\mathbf{b} = \\begin{pmatrix} -9 \\\\ -12 \\end{pmatrix}$. Find the magnitude $\\left| \\mathbf{b} \\right|$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the magnitude formula",
          "workingLatex": "\\left| \\mathbf{b} \\right| = \\sqrt{x^{2} + y^{2}}",
          "explanation": "The magnitude is the length of the vector, found by Pythagoras as the square root of the sum of the squared components.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Read the components from the column",
          "workingLatex": "x = -9, \\quad y = -12",
          "explanation": "In a column vector the top entry is the horizontal component and the bottom entry is the vertical component; here both are negative.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Square each component",
          "workingLatex": "(-9)^{2} = 81, \\quad (-12)^{2} = 144",
          "explanation": "Squaring removes the negative signs, since a negative times a negative is positive, giving $81$ and $144$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute into the formula",
          "workingLatex": "\\left| \\mathbf{b} \\right| = \\sqrt{81 + 144}",
          "explanation": "The two squared components go under the root, ready to be combined.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Add under the root",
          "workingLatex": "= \\sqrt{225}",
          "explanation": "Adding $81$ and $144$ gives $225$ inside the square root.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Simplify",
          "workingLatex": "= 15",
          "explanation": "The square root of $225$ is exactly $15$, so the vector has length $15$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\left| \\mathbf{b} \\right| = 15$"
    }
  },
  {
    "id": "al.y1.pure.vectors.q012",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Vector basics",
    "subtopicId": "al.y1.pure.vectors",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "value",
    "tags": [
      "vectors",
      "magnitude",
      "surds"
    ],
    "questionText": "Find the magnitude of the vector $\\mathbf{a} = 2\\mathbf{i} + 3\\mathbf{j}$. Give your answer in exact form.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the magnitude formula",
          "workingLatex": "\\left| \\mathbf{a} \\right| = \\sqrt{x^{2} + y^{2}}",
          "explanation": "The magnitude is just the length of the vector. By Pythagoras, the horizontal part $x$ and vertical part $y$ are the two shorter sides of a right-angled triangle, and the vector itself is the hypotenuse.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify the components",
          "workingLatex": "x = 2, \\quad y = 3",
          "explanation": "The number in front of $\\mathbf{i}$ is the horizontal step and the number in front of $\\mathbf{j}$ is the vertical step.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute into the formula",
          "workingLatex": "\\left| \\mathbf{a} \\right| = \\sqrt{2^{2} + 3^{2}}",
          "explanation": "We drop the two components into the square-root formula so we can work out the length.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Square each component",
          "workingLatex": "= \\sqrt{4 + 9}",
          "explanation": "Squaring the two sides is the first half of Pythagoras' theorem.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Add under the root",
          "workingLatex": "= \\sqrt{13}",
          "explanation": "Adding the squared components gives the square of the length, so we are one square root away from the answer.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the exact magnitude",
          "workingLatex": "\\left| \\mathbf{a} \\right| = \\sqrt{13}",
          "explanation": "Since $13$ is prime it has no square factors, so $\\sqrt{13}$ is already in its simplest exact form.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\left| \\mathbf{a} \\right| = \\sqrt{13}$"
    }
  },
  {
    "id": "al.y1.pure.vectors.q013",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Vector basics",
    "subtopicId": "al.y1.pure.vectors",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "value",
    "tags": [
      "vectors",
      "magnitude",
      "surds"
    ],
    "questionText": "Find the magnitude of the vector $\\mathbf{a} = \\mathbf{i} - 4\\mathbf{j}$. Give your answer in exact form.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the magnitude formula",
          "workingLatex": "\\left| \\mathbf{a} \\right| = \\sqrt{x^{2} + y^{2}}",
          "explanation": "The magnitude is the length of the vector, found using Pythagoras on the horizontal and vertical components.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify the components",
          "workingLatex": "x = 1, \\quad y = -4",
          "explanation": "A lone $\\mathbf{i}$ means one step across, and $-4\\mathbf{j}$ means four steps downwards, so the vertical component is negative.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute into the formula",
          "workingLatex": "\\left| \\mathbf{a} \\right| = \\sqrt{1^{2} + (-4)^{2}}",
          "explanation": "We place both components into the formula, keeping the minus sign inside the bracket for now.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Square each component",
          "workingLatex": "= \\sqrt{1 + 16}",
          "explanation": "Squaring removes the sign, because $(-4)^{2} = 16$. This makes sense: length can never be negative, so direction of travel does not shorten it.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Add under the root",
          "workingLatex": "= \\sqrt{17}",
          "explanation": "Adding the squares gives the square of the length.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the exact magnitude",
          "workingLatex": "\\left| \\mathbf{a} \\right| = \\sqrt{17}",
          "explanation": "Since $17$ is prime there are no square factors to take out, so $\\sqrt{17}$ is the simplest exact answer.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\left| \\mathbf{a} \\right| = \\sqrt{17}$"
    }
  },
  {
    "id": "al.y1.pure.vectors.q014",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Vector basics",
    "subtopicId": "al.y1.pure.vectors",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "value",
    "tags": [
      "vectors",
      "magnitude",
      "surds"
    ],
    "questionText": "Find the magnitude of the vector $\\mathbf{a} = 2\\mathbf{i} + 4\\mathbf{j}$, giving your answer as a simplified surd.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the magnitude formula",
          "workingLatex": "\\left| \\mathbf{a} \\right| = \\sqrt{x^{2} + y^{2}}",
          "explanation": "The length of the vector comes from Pythagoras applied to its horizontal and vertical parts.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify the components",
          "workingLatex": "x = 2, \\quad y = 4",
          "explanation": "The coefficient of $\\mathbf{i}$ is the horizontal component and the coefficient of $\\mathbf{j}$ is the vertical component.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute into the formula",
          "workingLatex": "\\left| \\mathbf{a} \\right| = \\sqrt{2^{2} + 4^{2}}",
          "explanation": "We put both components into the square-root formula.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Square each component",
          "workingLatex": "= \\sqrt{4 + 16}",
          "explanation": "Squaring gives the areas of the two squares on the shorter sides of the triangle.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Add under the root",
          "workingLatex": "= \\sqrt{20}",
          "explanation": "The sum $20$ is the square of the length, but $20$ is not a perfect square, so we check whether it simplifies.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Look for a square factor",
          "workingLatex": "20 = 4 \\times 5",
          "explanation": "We hunt for the largest perfect-square factor. Here $4$ is a perfect square, and $4 \\times 5 = 20$, so we can pull the $4$ out.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Simplify the surd",
          "workingLatex": "\\sqrt{20} = \\sqrt{4} \\times \\sqrt{5} = 2\\sqrt{5}",
          "explanation": "The square root of a product splits into a product of square roots, and $\\sqrt{4} = 2$ comes out cleanly.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State the exact magnitude",
          "workingLatex": "\\left| \\mathbf{a} \\right| = 2\\sqrt{5}",
          "explanation": "This is the simplest exact form, since $5$ has no square factors left inside the root.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\left| \\mathbf{a} \\right| = 2\\sqrt{5}$"
    }
  },
  {
    "id": "al.y1.pure.vectors.q015",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Vector basics",
    "subtopicId": "al.y1.pure.vectors",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "value",
    "tags": [
      "vectors",
      "magnitude",
      "surds"
    ],
    "questionText": "Find the magnitude of the vector $\\mathbf{a} = \\begin{pmatrix} -6 \\\\ 3 \\end{pmatrix}$, giving your answer as a simplified surd.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the magnitude formula",
          "workingLatex": "\\left| \\mathbf{a} \\right| = \\sqrt{x^{2} + y^{2}}",
          "explanation": "A column vector has a top entry $x$ and a bottom entry $y$, and the magnitude is the length found with Pythagoras.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify the components",
          "workingLatex": "x = -6, \\quad y = 3",
          "explanation": "The top number is the horizontal component and the bottom number is the vertical component.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute into the formula",
          "workingLatex": "\\left| \\mathbf{a} \\right| = \\sqrt{(-6)^{2} + 3^{2}}",
          "explanation": "We drop both components into the formula, keeping the negative inside its bracket for the moment.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Square each component",
          "workingLatex": "= \\sqrt{36 + 9}",
          "explanation": "Squaring makes the negative disappear, since $(-6)^{2} = 36$. Length does not care about direction.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Add under the root",
          "workingLatex": "= \\sqrt{45}",
          "explanation": "The total $45$ is the square of the length. As it is not a perfect square, we check for simplification.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Look for a square factor",
          "workingLatex": "45 = 9 \\times 5",
          "explanation": "We look for the largest perfect-square factor of $45$. Here $9$ is a perfect square and $9 \\times 5 = 45$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Simplify the surd",
          "workingLatex": "\\sqrt{45} = \\sqrt{9} \\times \\sqrt{5} = 3\\sqrt{5}",
          "explanation": "Splitting the root lets $\\sqrt{9} = 3$ come out, leaving $\\sqrt{5}$ inside.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State the exact magnitude",
          "workingLatex": "\\left| \\mathbf{a} \\right| = 3\\sqrt{5}",
          "explanation": "This is fully simplified because $5$ has no remaining square factors.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\left| \\mathbf{a} \\right| = 3\\sqrt{5}$"
    }
  },
  {
    "id": "al.y1.pure.vectors.q016",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Vector basics",
    "subtopicId": "al.y1.pure.vectors",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "vector",
    "tags": [
      "vectors",
      "unit-vector",
      "magnitude"
    ],
    "questionText": "Find a unit vector in the direction of $\\mathbf{a} = 6\\mathbf{i} - 8\\mathbf{j}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall how to make a unit vector",
          "workingLatex": "\\hat{\\mathbf{a}} = \\frac{\\mathbf{a}}{\\left| \\mathbf{a} \\right|}",
          "explanation": "A unit vector points the same way but has length exactly $1$. We build it by dividing the vector by its own magnitude, which shrinks the length to $1$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find the magnitude",
          "workingLatex": "\\left| \\mathbf{a} \\right| = \\sqrt{6^{2} + (-8)^{2}} = \\sqrt{36 + 64} = \\sqrt{100} = 10",
          "explanation": "We need the length before we can divide by it. These components form a $6, 8, 10$ triangle, so the magnitude is a whole number.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Divide each component by the magnitude",
          "workingLatex": "\\hat{\\mathbf{a}} = \\frac{1}{10}\\left(6\\mathbf{i} - 8\\mathbf{j}\\right)",
          "explanation": "Dividing both components by $10$ keeps the direction fixed but scales the length down to $1$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Simplify the fractions",
          "workingLatex": "\\hat{\\mathbf{a}} = \\tfrac{6}{10}\\mathbf{i} - \\tfrac{8}{10}\\mathbf{j} = \\tfrac{3}{5}\\mathbf{i} - \\tfrac{4}{5}\\mathbf{j}",
          "explanation": "Cancelling the common factor of $2$ tidies the fractions without changing the vector.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Write in decimal form",
          "workingLatex": "\\hat{\\mathbf{a}} = 0.6\\mathbf{i} - 0.8\\mathbf{j}",
          "explanation": "Decimals are often clearer for a unit vector; either form is acceptable.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check the length is 1",
          "workingLatex": "\\left(\\tfrac{3}{5}\\right)^{2} + \\left(-\\tfrac{4}{5}\\right)^{2} = \\tfrac{9}{25} + \\tfrac{16}{25} = 1",
          "explanation": "The components squared add to $1$, confirming the length really is $1$ as a unit vector demands.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\hat{\\mathbf{a}} = \\tfrac{3}{5}\\mathbf{i} - \\tfrac{4}{5}\\mathbf{j} = 0.6\\mathbf{i} - 0.8\\mathbf{j}$"
    }
  },
  {
    "id": "al.y1.pure.vectors.q017",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Vector basics",
    "subtopicId": "al.y1.pure.vectors",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "vector",
    "tags": [
      "vectors",
      "unit-vector",
      "magnitude"
    ],
    "questionText": "Find a unit vector in the direction of $\\mathbf{a} = 5\\mathbf{i} + 12\\mathbf{j}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall how to make a unit vector",
          "workingLatex": "\\hat{\\mathbf{a}} = \\frac{\\mathbf{a}}{\\left| \\mathbf{a} \\right|}",
          "explanation": "A unit vector shares the direction of $\\mathbf{a}$ but has length $1$. Dividing by the magnitude is what fixes the length at $1$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find the magnitude",
          "workingLatex": "\\left| \\mathbf{a} \\right| = \\sqrt{5^{2} + 12^{2}} = \\sqrt{25 + 144} = \\sqrt{169} = 13",
          "explanation": "We need the length first. The $5, 12, 13$ triangle gives a whole-number magnitude, which keeps the unit vector tidy.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Divide each component by the magnitude",
          "workingLatex": "\\hat{\\mathbf{a}} = \\frac{1}{13}\\left(5\\mathbf{i} + 12\\mathbf{j}\\right)",
          "explanation": "Sharing the factor $\\tfrac{1}{13}$ across both components preserves the direction while scaling the length to $1$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write the components",
          "workingLatex": "\\hat{\\mathbf{a}} = \\tfrac{5}{13}\\mathbf{i} + \\tfrac{12}{13}\\mathbf{j}",
          "explanation": "Since $5$, $12$ and $13$ share no common factor, these fractions cannot be simplified further.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check the length is 1",
          "workingLatex": "\\left(\\tfrac{5}{13}\\right)^{2} + \\left(\\tfrac{12}{13}\\right)^{2} = \\tfrac{25}{169} + \\tfrac{144}{169} = \\tfrac{169}{169} = 1",
          "explanation": "The squared components add to exactly $1$, which is the defining test for a unit vector.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the unit vector",
          "workingLatex": "\\hat{\\mathbf{a}} = \\tfrac{5}{13}\\mathbf{i} + \\tfrac{12}{13}\\mathbf{j}",
          "explanation": "This is the required unit vector: same direction as $\\mathbf{a}$, length $1$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\hat{\\mathbf{a}} = \\tfrac{5}{13}\\mathbf{i} + \\tfrac{12}{13}\\mathbf{j}$"
    }
  },
  {
    "id": "al.y1.pure.vectors.q018",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Vector basics",
    "subtopicId": "al.y1.pure.vectors",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "vector",
    "tags": [
      "vectors",
      "unit-vector",
      "magnitude"
    ],
    "questionText": "Find a unit vector in the direction of $\\mathbf{a} = 8\\mathbf{i} - 15\\mathbf{j}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall how to make a unit vector",
          "workingLatex": "\\hat{\\mathbf{a}} = \\frac{\\mathbf{a}}{\\left| \\mathbf{a} \\right|}",
          "explanation": "A unit vector keeps the same direction as $\\mathbf{a}$ but has length $1$, achieved by dividing the vector by its magnitude.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find the magnitude",
          "workingLatex": "\\left| \\mathbf{a} \\right| = \\sqrt{8^{2} + (-15)^{2}} = \\sqrt{64 + 225} = \\sqrt{289} = 17",
          "explanation": "The negative squares away to a positive, and $8, 15, 17$ is a Pythagorean triple, so the magnitude is the whole number $17$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Divide each component by the magnitude",
          "workingLatex": "\\hat{\\mathbf{a}} = \\frac{1}{17}\\left(8\\mathbf{i} - 15\\mathbf{j}\\right)",
          "explanation": "Dividing both components by $17$ keeps the direction but sets the length to $1$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write the components",
          "workingLatex": "\\hat{\\mathbf{a}} = \\tfrac{8}{17}\\mathbf{i} - \\tfrac{15}{17}\\mathbf{j}",
          "explanation": "As $8$, $15$ and $17$ share no common factor, these fractions are already in simplest form.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check the length is 1",
          "workingLatex": "\\left(\\tfrac{8}{17}\\right)^{2} + \\left(-\\tfrac{15}{17}\\right)^{2} = \\tfrac{64}{289} + \\tfrac{225}{289} = \\tfrac{289}{289} = 1",
          "explanation": "The squared components sum to $1$, confirming we truly have a unit vector.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the unit vector",
          "workingLatex": "\\hat{\\mathbf{a}} = \\tfrac{8}{17}\\mathbf{i} - \\tfrac{15}{17}\\mathbf{j}",
          "explanation": "This vector points the same way as $\\mathbf{a}$ and has length $1$, as required.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\hat{\\mathbf{a}} = \\tfrac{8}{17}\\mathbf{i} - \\tfrac{15}{17}\\mathbf{j}$"
    }
  },
  {
    "id": "al.y1.pure.vectors.q019",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Vector basics",
    "subtopicId": "al.y1.pure.vectors",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "vector",
    "tags": [
      "vectors",
      "unit-vector",
      "magnitude"
    ],
    "questionText": "Find a unit vector in the direction of $\\mathbf{a} = \\begin{pmatrix} -9 \\\\ 12 \\end{pmatrix}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall how to make a unit vector",
          "workingLatex": "\\hat{\\mathbf{a}} = \\frac{\\mathbf{a}}{\\left| \\mathbf{a} \\right|}",
          "explanation": "A unit vector has the same direction as $\\mathbf{a}$ but a length of $1$. We divide the whole column vector by its magnitude to get there.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find the magnitude",
          "workingLatex": "\\left| \\mathbf{a} \\right| = \\sqrt{(-9)^{2} + 12^{2}} = \\sqrt{81 + 144} = \\sqrt{225} = 15",
          "explanation": "Both components are squared, so the negative vanishes. This is a scaled $3, 4, 5$ triangle, giving a whole-number length of $15$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Divide the vector by the magnitude",
          "workingLatex": "\\hat{\\mathbf{a}} = \\frac{1}{15}\\begin{pmatrix} -9 \\\\ 12 \\end{pmatrix} = \\begin{pmatrix} -\\tfrac{9}{15} \\\\ \\tfrac{12}{15} \\end{pmatrix}",
          "explanation": "Every entry of a column vector is divided by the magnitude, which shrinks the length to $1$ while the direction stays fixed.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Simplify the fractions",
          "workingLatex": "\\hat{\\mathbf{a}} = \\begin{pmatrix} -\\tfrac{3}{5} \\\\ \\tfrac{4}{5} \\end{pmatrix}",
          "explanation": "Cancelling the common factor of $3$ in each entry tidies the vector without changing it.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check the length is 1",
          "workingLatex": "\\left(-\\tfrac{3}{5}\\right)^{2} + \\left(\\tfrac{4}{5}\\right)^{2} = \\tfrac{9}{25} + \\tfrac{16}{25} = 1",
          "explanation": "The squared components add to $1$, confirming this is a genuine unit vector.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the unit vector",
          "workingLatex": "\\hat{\\mathbf{a}} = \\begin{pmatrix} -\\tfrac{3}{5} \\\\ \\tfrac{4}{5} \\end{pmatrix}",
          "explanation": "This column vector points the same way as $\\mathbf{a}$ with length $1$, as required.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\hat{\\mathbf{a}} = \\begin{pmatrix} -\\tfrac{3}{5} \\\\ \\tfrac{4}{5} \\end{pmatrix}$"
    }
  },
  {
    "id": "al.y1.pure.vectors.q020",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Vector basics",
    "subtopicId": "al.y1.pure.vectors",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "angle",
    "tags": [
      "vectors",
      "direction",
      "angle"
    ],
    "questionText": "Find the angle that the vector $\\mathbf{a} = \\mathbf{i} + \\mathbf{j}$ makes with the positive $x$-axis.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall how to find the direction",
          "workingLatex": "\\tan\\theta = \\frac{y}{x}",
          "explanation": "The direction is measured as the angle $\\theta$ from the positive $x$-axis. In the right-angled triangle formed by the components, the vertical part is opposite and the horizontal part is adjacent, so $\\tan\\theta = y/x$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify the components",
          "workingLatex": "x = 1, \\quad y = 1",
          "explanation": "The vector moves one step right and one step up.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Note the quadrant",
          "workingLatex": "x > 0, \\quad y > 0",
          "explanation": "Both components are positive, so the vector lies in the first quadrant and the angle will be between $0^{\\circ}$ and $90^{\\circ}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute the components",
          "workingLatex": "\\tan\\theta = \\frac{1}{1} = 1",
          "explanation": "Dividing the vertical component by the horizontal one gives the tangent of the angle.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve for the angle",
          "workingLatex": "\\theta = \\arctan(1) = 45^{\\circ}",
          "explanation": "The equal horizontal and vertical steps make an exact $45^{\\circ}$ line, which we recognise as a standard angle.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the direction",
          "workingLatex": "\\theta = 45^{\\circ}",
          "explanation": "So the vector points $45^{\\circ}$ above the positive $x$-axis.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\theta = 45^{\\circ}$"
    }
  },
  {
    "id": "al.y1.pure.vectors.q021",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Vector basics",
    "subtopicId": "al.y1.pure.vectors",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "angle",
    "tags": [
      "vectors",
      "direction",
      "angle"
    ],
    "questionText": "Find the angle that the vector $\\mathbf{a} = \\sqrt{3}\\,\\mathbf{i} + \\mathbf{j}$ makes with the positive $x$-axis.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall how to find the direction",
          "workingLatex": "\\tan\\theta = \\frac{y}{x}",
          "explanation": "The direction is the angle $\\theta$ measured anticlockwise from the positive $x$-axis, and it satisfies $\\tan\\theta = y/x$ from the triangle of components.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify the components",
          "workingLatex": "x = \\sqrt{3}, \\quad y = 1",
          "explanation": "The horizontal component is $\\sqrt{3}$ and the vertical component is $1$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Note the quadrant",
          "workingLatex": "x > 0, \\quad y > 0",
          "explanation": "Both components are positive, so the vector sits in the first quadrant and the angle lies between $0^{\\circ}$ and $90^{\\circ}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute the components",
          "workingLatex": "\\tan\\theta = \\frac{1}{\\sqrt{3}}",
          "explanation": "Dividing the vertical component by the horizontal one gives the tangent of the direction angle.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Recognise the exact value",
          "workingLatex": "\\tan 30^{\\circ} = \\frac{1}{\\sqrt{3}}",
          "explanation": "This is one of the standard exact trig values, so we can read off the angle without a calculator.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Solve for the angle",
          "workingLatex": "\\theta = \\arctan\\!\\left(\\frac{1}{\\sqrt{3}}\\right) = 30^{\\circ}",
          "explanation": "Since the tangent matches the exact value, the angle is exactly $30^{\\circ}$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the direction",
          "workingLatex": "\\theta = 30^{\\circ}",
          "explanation": "The vector points $30^{\\circ}$ above the positive $x$-axis.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\theta = 30^{\\circ}$"
    }
  },
  {
    "id": "al.y1.pure.vectors.q022",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Vector basics",
    "subtopicId": "al.y1.pure.vectors",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "angle",
    "tags": [
      "vectors",
      "direction",
      "angle"
    ],
    "questionText": "Find the angle that the vector $\\mathbf{a} = 5\\mathbf{i} + 3\\mathbf{j}$ makes with the positive $x$-axis, giving your answer to $1$ decimal place.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall how to find the direction",
          "workingLatex": "\\tan\\theta = \\frac{y}{x}",
          "explanation": "The direction is the angle $\\theta$ from the positive $x$-axis. The vertical component is opposite the angle and the horizontal component is adjacent, giving $\\tan\\theta = y/x$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify the components",
          "workingLatex": "x = 5, \\quad y = 3",
          "explanation": "The coefficient of $\\mathbf{i}$ is the horizontal component and the coefficient of $\\mathbf{j}$ is the vertical component.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Note the quadrant",
          "workingLatex": "x > 0, \\quad y > 0",
          "explanation": "Both components are positive, so the vector lies in the first quadrant and the angle is between $0^{\\circ}$ and $90^{\\circ}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute the components",
          "workingLatex": "\\tan\\theta = \\frac{3}{5} = 0.6",
          "explanation": "Dividing the vertical component by the horizontal one gives the tangent of the direction angle.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Apply the inverse tangent",
          "workingLatex": "\\theta = \\arctan(0.6)",
          "explanation": "Since this is not a standard exact value, we use the inverse tangent on a calculator (in degrees) to find $\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Evaluate the angle",
          "workingLatex": "\\theta = 30.9637\\ldots^{\\circ}",
          "explanation": "The calculator returns an angle just under $31^{\\circ}$, which sits sensibly in the first quadrant.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Round to 1 decimal place",
          "workingLatex": "\\theta \\approx 31.0^{\\circ}",
          "explanation": "The second decimal is $6$, so we round the first decimal up, giving $31.0^{\\circ}$ to one decimal place.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State the direction",
          "workingLatex": "\\theta \\approx 31.0^{\\circ}",
          "explanation": "The vector points about $31.0^{\\circ}$ above the positive $x$-axis.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\theta \\approx 31.0^{\\circ}$"
    }
  },
  {
    "id": "al.y1.pure.vectors.q023",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Vector basics",
    "subtopicId": "al.y1.pure.vectors",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "value",
    "tags": [
      "vectors",
      "magnitude",
      "unknown-component"
    ],
    "questionText": "The vector $\\mathbf{a} = k\\mathbf{i} + 3\\mathbf{j}$ has magnitude $5$. Find the possible values of $k$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the magnitude formula for a 2D vector",
          "workingLatex": "\\left| x\\mathbf{i} + y\\mathbf{j} \\right| = \\sqrt{x^{2} + y^{2}}",
          "explanation": "The magnitude of a vector is just its length, and we find it by applying Pythagoras to its horizontal and vertical components.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify the components of a",
          "workingLatex": "x = k, \\quad y = 3",
          "explanation": "Reading off the coefficients of $\\mathbf{i}$ and $\\mathbf{j}$ tells us what to substitute; here the horizontal part is the unknown $k$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute the components into the formula",
          "workingLatex": "\\left| \\mathbf{a} \\right| = \\sqrt{k^{2} + 3^{2}}",
          "explanation": "We keep $k$ as a symbol because it is exactly the quantity we are trying to find.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Simplify the known term",
          "workingLatex": "\\left| \\mathbf{a} \\right| = \\sqrt{k^{2} + 9}",
          "explanation": "Squaring the known component keeps the expression tidy while still containing the unknown.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Set the magnitude equal to 5",
          "workingLatex": "\\sqrt{k^{2} + 9} = 5",
          "explanation": "The question states the length is $5$, so our expression for the length must equal that value.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Square both sides",
          "workingLatex": "k^{2} + 9 = 25",
          "explanation": "Squaring removes the square root, turning an awkward surd equation into a simple equation in $k^{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Isolate the k-squared term",
          "workingLatex": "k^{2} = 16",
          "explanation": "Subtracting $9$ leaves $k^{2}$ on its own, ready for the square root.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Take the square root of both sides",
          "workingLatex": "k = \\pm \\sqrt{16}",
          "explanation": "A square root can be positive or negative, so we keep the $\\pm$ to avoid losing a valid solution.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Simplify the surd",
          "workingLatex": "k = \\pm 4",
          "explanation": "Both values are genuine because squaring either one returns the same $16$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Check the answer",
          "workingLatex": "\\sqrt{4^{2} + 3^{2}} = \\sqrt{25} = 5",
          "explanation": "Substituting back confirms the magnitude really is $5$, so our values are consistent.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "State the possible values",
          "workingLatex": "k = 4 \\ \\text{or} \\ k = -4",
          "explanation": "Geometrically these are two vectors of equal length that lean in opposite horizontal directions.",
          "diagram": null
        }
      ],
      "finalAnswer": "$k = \\pm 4$"
    }
  },
  {
    "id": "al.y1.pure.vectors.q024",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Vector basics",
    "subtopicId": "al.y1.pure.vectors",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "value",
    "tags": [
      "vectors",
      "magnitude",
      "unknown-component"
    ],
    "questionText": "The vector $\\mathbf{b} = 5\\mathbf{i} + p\\mathbf{j}$ has magnitude $13$. Find the possible values of $p$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the magnitude formula",
          "workingLatex": "\\left| x\\mathbf{i} + y\\mathbf{j} \\right| = \\sqrt{x^{2} + y^{2}}",
          "explanation": "The length of a vector comes from Pythagoras applied to its two components.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify the components of b",
          "workingLatex": "x = 5, \\quad y = p",
          "explanation": "Here the horizontal part is known and the vertical part is the unknown we must find.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute into the formula",
          "workingLatex": "\\left| \\mathbf{b} \\right| = \\sqrt{5^{2} + p^{2}}",
          "explanation": "We keep $p$ as a symbol so the equation still describes the unknown vector.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Simplify the known term",
          "workingLatex": "\\left| \\mathbf{b} \\right| = \\sqrt{25 + p^{2}}",
          "explanation": "Squaring the known component gives a cleaner expression to work with.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Set the magnitude equal to 13",
          "workingLatex": "\\sqrt{25 + p^{2}} = 13",
          "explanation": "The stated length must match our formula for the length.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Square both sides",
          "workingLatex": "25 + p^{2} = 169",
          "explanation": "Removing the square root leaves a simple equation in $p^{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Isolate the p-squared term",
          "workingLatex": "p^{2} = 144",
          "explanation": "Subtracting $25$ leaves $p^{2}$ ready to be square-rooted.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Take the square root of both sides",
          "workingLatex": "p = \\pm \\sqrt{144}",
          "explanation": "We keep both signs because a squared value hides whether the original was positive or negative.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Simplify the surd",
          "workingLatex": "p = \\pm 12",
          "explanation": "This is a recognisable $5,12,13$ right-angled triangle, which is why the numbers come out whole.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Check the answer",
          "workingLatex": "\\sqrt{5^{2} + 12^{2}} = \\sqrt{169} = 13",
          "explanation": "Substituting back confirms the magnitude is exactly $13$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "State the possible values",
          "workingLatex": "p = 12 \\ \\text{or} \\ p = -12",
          "explanation": "Both give the same length, one pointing up and one pointing down.",
          "diagram": null
        }
      ],
      "finalAnswer": "$p = \\pm 12$"
    }
  },
  {
    "id": "al.y1.pure.vectors.q025",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Vector basics",
    "subtopicId": "al.y1.pure.vectors",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "value",
    "tags": [
      "vectors",
      "magnitude",
      "unknown-component"
    ],
    "questionText": "The vector $\\mathbf{c} = t\\mathbf{i} - 8\\mathbf{j}$ has magnitude $10$. Find the possible values of $t$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the magnitude formula",
          "workingLatex": "\\left| x\\mathbf{i} + y\\mathbf{j} \\right| = \\sqrt{x^{2} + y^{2}}",
          "explanation": "The magnitude is the length of the vector, built from its components using Pythagoras.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify the components of c",
          "workingLatex": "x = t, \\quad y = -8",
          "explanation": "The vertical component is negative, but that only affects direction, not length.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute into the formula",
          "workingLatex": "\\left| \\mathbf{c} \\right| = \\sqrt{t^{2} + (-8)^{2}}",
          "explanation": "We keep the unknown $t$ symbolic and square the known component next.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Simplify the known term",
          "workingLatex": "\\left| \\mathbf{c} \\right| = \\sqrt{t^{2} + 64}",
          "explanation": "Squaring $-8$ gives $+64$, so the sign disappears as expected for a length.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Set the magnitude equal to 10",
          "workingLatex": "\\sqrt{t^{2} + 64} = 10",
          "explanation": "The given length lets us form an equation for the unknown.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Square both sides",
          "workingLatex": "t^{2} + 64 = 100",
          "explanation": "Squaring clears the root and produces a simple equation in $t^{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Isolate the t-squared term",
          "workingLatex": "t^{2} = 36",
          "explanation": "Subtracting $64$ leaves $t^{2}$ on its own.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Take the square root of both sides",
          "workingLatex": "t = \\pm \\sqrt{36}",
          "explanation": "We keep both signs so that no valid solution is missed.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Simplify the surd",
          "workingLatex": "t = \\pm 6",
          "explanation": "These come from the $6,8,10$ triangle, a scaled version of $3,4,5$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Check the answer",
          "workingLatex": "\\sqrt{6^{2} + (-8)^{2}} = \\sqrt{100} = 10",
          "explanation": "Substituting back confirms the magnitude is exactly $10$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "State the possible values",
          "workingLatex": "t = 6 \\ \\text{or} \\ t = -6",
          "explanation": "Both produce the same length, differing only in which way they point horizontally.",
          "diagram": null
        }
      ],
      "finalAnswer": "$t = \\pm 6$"
    }
  },
  {
    "id": "al.y1.pure.vectors.q026",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Vector basics",
    "subtopicId": "al.y1.pure.vectors",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "vector",
    "tags": [
      "vectors",
      "unit-vector",
      "rationalising"
    ],
    "questionText": "Find the unit vector in the direction of $\\mathbf{a} = 2\\mathbf{i} - 3\\mathbf{j}$, giving each component in rationalised surd form.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the definition of a unit vector",
          "workingLatex": "\\hat{\\mathbf{a}} = \\frac{\\mathbf{a}}{\\left| \\mathbf{a} \\right|}",
          "explanation": "A unit vector points the same way as $\\mathbf{a}$ but has length $1$, so we divide the vector by its own magnitude.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify the components",
          "workingLatex": "x = 2, \\quad y = -3",
          "explanation": "We need these to compute the magnitude before we can scale down to length one.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write the magnitude using Pythagoras",
          "workingLatex": "\\left| \\mathbf{a} \\right| = \\sqrt{2^{2} + (-3)^{2}}",
          "explanation": "The magnitude is the length we must divide by, so we compute it first.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Simplify under the root",
          "workingLatex": "\\left| \\mathbf{a} \\right| = \\sqrt{4 + 9} = \\sqrt{13}",
          "explanation": "Adding the squared components gives $13$, and since $13$ is not a perfect square we leave it as a surd.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Divide the vector by its magnitude",
          "workingLatex": "\\hat{\\mathbf{a}} = \\frac{2\\mathbf{i} - 3\\mathbf{j}}{\\sqrt{13}}",
          "explanation": "Dividing every component by $\\sqrt{13}$ shrinks the vector to length $1$ while keeping its direction.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Separate the components",
          "workingLatex": "\\hat{\\mathbf{a}} = \\frac{2}{\\sqrt{13}}\\mathbf{i} - \\frac{3}{\\sqrt{13}}\\mathbf{j}",
          "explanation": "Splitting the fraction makes it clear how each component will be rationalised.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Rationalise the denominators",
          "workingLatex": "\\frac{2}{\\sqrt{13}} \\times \\frac{\\sqrt{13}}{\\sqrt{13}}, \\quad \\frac{3}{\\sqrt{13}} \\times \\frac{\\sqrt{13}}{\\sqrt{13}}",
          "explanation": "Multiplying top and bottom by $\\sqrt{13}$ removes the surd from the denominator without changing the value.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Simplify each rationalised component",
          "workingLatex": "\\hat{\\mathbf{a}} = \\frac{2\\sqrt{13}}{13}\\mathbf{i} - \\frac{3\\sqrt{13}}{13}\\mathbf{j}",
          "explanation": "Since $\\sqrt{13}\\times\\sqrt{13}=13$, the denominators become the whole number $13$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Verify the magnitude is 1",
          "workingLatex": "\\left(\\frac{2}{\\sqrt{13}}\\right)^{2} + \\left(\\frac{3}{\\sqrt{13}}\\right)^{2} = \\frac{4 + 9}{13} = 1",
          "explanation": "A unit vector must have length $1$; the components squaring to $1$ confirms we scaled correctly.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the unit vector",
          "workingLatex": "\\hat{\\mathbf{a}} = \\frac{2\\sqrt{13}}{13}\\mathbf{i} - \\frac{3\\sqrt{13}}{13}\\mathbf{j}",
          "explanation": "This is the required unit vector with no surds left in the denominators.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\hat{\\mathbf{a}} = \\dfrac{2\\sqrt{13}}{13}\\mathbf{i} - \\dfrac{3\\sqrt{13}}{13}\\mathbf{j}$"
    }
  },
  {
    "id": "al.y1.pure.vectors.q027",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Vector basics",
    "subtopicId": "al.y1.pure.vectors",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "vector",
    "tags": [
      "vectors",
      "unit-vector",
      "rationalising"
    ],
    "questionText": "Find the unit vector in the direction of $\\mathbf{b} = \\mathbf{i} + 2\\mathbf{j}$, giving each component in rationalised surd form.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the definition of a unit vector",
          "workingLatex": "\\hat{\\mathbf{b}} = \\frac{\\mathbf{b}}{\\left| \\mathbf{b} \\right|}",
          "explanation": "To keep the direction but force the length to $1$, we divide the vector by its own magnitude.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify the components",
          "workingLatex": "x = 1, \\quad y = 2",
          "explanation": "The coefficient of $\\mathbf{i}$ is an unwritten $1$, which is easy to overlook.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write the magnitude using Pythagoras",
          "workingLatex": "\\left| \\mathbf{b} \\right| = \\sqrt{1^{2} + 2^{2}}",
          "explanation": "We need the length before we can rescale the vector to length one.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Simplify under the root",
          "workingLatex": "\\left| \\mathbf{b} \\right| = \\sqrt{1 + 4} = \\sqrt{5}",
          "explanation": "The total is $5$, which is not a perfect square, so it stays as the surd $\\sqrt{5}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Divide the vector by its magnitude",
          "workingLatex": "\\hat{\\mathbf{b}} = \\frac{\\mathbf{i} + 2\\mathbf{j}}{\\sqrt{5}}",
          "explanation": "Dividing by $\\sqrt{5}$ shrinks the vector to unit length while preserving its direction.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Separate the components",
          "workingLatex": "\\hat{\\mathbf{b}} = \\frac{1}{\\sqrt{5}}\\mathbf{i} + \\frac{2}{\\sqrt{5}}\\mathbf{j}",
          "explanation": "Writing the two components apart shows exactly what needs rationalising.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Rationalise the denominators",
          "workingLatex": "\\frac{1}{\\sqrt{5}} \\times \\frac{\\sqrt{5}}{\\sqrt{5}}, \\quad \\frac{2}{\\sqrt{5}} \\times \\frac{\\sqrt{5}}{\\sqrt{5}}",
          "explanation": "Multiplying by $\\frac{\\sqrt{5}}{\\sqrt{5}}$ (which equals $1$) clears the surd from the bottom.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Simplify each rationalised component",
          "workingLatex": "\\hat{\\mathbf{b}} = \\frac{\\sqrt{5}}{5}\\mathbf{i} + \\frac{2\\sqrt{5}}{5}\\mathbf{j}",
          "explanation": "Because $\\sqrt{5}\\times\\sqrt{5}=5$, the denominators become a whole number.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Verify the magnitude is 1",
          "workingLatex": "\\left(\\frac{1}{\\sqrt{5}}\\right)^{2} + \\left(\\frac{2}{\\sqrt{5}}\\right)^{2} = \\frac{1 + 4}{5} = 1",
          "explanation": "The squared components summing to $1$ confirms this really is a unit vector.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the unit vector",
          "workingLatex": "\\hat{\\mathbf{b}} = \\frac{\\sqrt{5}}{5}\\mathbf{i} + \\frac{2\\sqrt{5}}{5}\\mathbf{j}",
          "explanation": "This is the required unit vector with rationalised components.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\hat{\\mathbf{b}} = \\dfrac{\\sqrt{5}}{5}\\mathbf{i} + \\dfrac{2\\sqrt{5}}{5}\\mathbf{j}$"
    }
  },
  {
    "id": "al.y1.pure.vectors.q028",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Vector basics",
    "subtopicId": "al.y1.pure.vectors",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "vector",
    "tags": [
      "vectors",
      "unit-vector",
      "rationalising"
    ],
    "questionText": "Find the unit vector in the direction of $\\mathbf{c} = 5\\mathbf{i} - \\mathbf{j}$, giving each component in rationalised surd form.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the definition of a unit vector",
          "workingLatex": "\\hat{\\mathbf{c}} = \\frac{\\mathbf{c}}{\\left| \\mathbf{c} \\right|}",
          "explanation": "A unit vector shares the direction of $\\mathbf{c}$ but has length $1$, achieved by dividing by the magnitude.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify the components",
          "workingLatex": "x = 5, \\quad y = -1",
          "explanation": "The coefficient of $\\mathbf{j}$ is $-1$, so its square will still be positive.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write the magnitude using Pythagoras",
          "workingLatex": "\\left| \\mathbf{c} \\right| = \\sqrt{5^{2} + (-1)^{2}}",
          "explanation": "We compute the length first, since it is the value we divide by.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Simplify under the root",
          "workingLatex": "\\left| \\mathbf{c} \\right| = \\sqrt{25 + 1} = \\sqrt{26}",
          "explanation": "The result $26$ has no square factors, so $\\sqrt{26}$ cannot be simplified further.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Divide the vector by its magnitude",
          "workingLatex": "\\hat{\\mathbf{c}} = \\frac{5\\mathbf{i} - \\mathbf{j}}{\\sqrt{26}}",
          "explanation": "Dividing by $\\sqrt{26}$ rescales the vector to unit length without turning it.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Separate the components",
          "workingLatex": "\\hat{\\mathbf{c}} = \\frac{5}{\\sqrt{26}}\\mathbf{i} - \\frac{1}{\\sqrt{26}}\\mathbf{j}",
          "explanation": "Splitting the fraction shows the two components that need rationalising.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Rationalise the denominators",
          "workingLatex": "\\frac{5}{\\sqrt{26}} \\times \\frac{\\sqrt{26}}{\\sqrt{26}}, \\quad \\frac{1}{\\sqrt{26}} \\times \\frac{\\sqrt{26}}{\\sqrt{26}}",
          "explanation": "Multiplying by $\\frac{\\sqrt{26}}{\\sqrt{26}}$ removes the surd from each denominator.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Simplify each rationalised component",
          "workingLatex": "\\hat{\\mathbf{c}} = \\frac{5\\sqrt{26}}{26}\\mathbf{i} - \\frac{\\sqrt{26}}{26}\\mathbf{j}",
          "explanation": "Since $\\sqrt{26}\\times\\sqrt{26}=26$, the denominators become the whole number $26$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Verify the magnitude is 1",
          "workingLatex": "\\left(\\frac{5}{\\sqrt{26}}\\right)^{2} + \\left(\\frac{1}{\\sqrt{26}}\\right)^{2} = \\frac{25 + 1}{26} = 1",
          "explanation": "The squared components adding to $1$ confirms the vector has unit length.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the unit vector",
          "workingLatex": "\\hat{\\mathbf{c}} = \\frac{5\\sqrt{26}}{26}\\mathbf{i} - \\frac{\\sqrt{26}}{26}\\mathbf{j}",
          "explanation": "This is the required unit vector in rationalised form.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\hat{\\mathbf{c}} = \\dfrac{5\\sqrt{26}}{26}\\mathbf{i} - \\dfrac{\\sqrt{26}}{26}\\mathbf{j}$"
    }
  },
  {
    "id": "al.y1.pure.vectors.q029",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Vector basics",
    "subtopicId": "al.y1.pure.vectors",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "value",
    "tags": [
      "vectors",
      "parallel",
      "scalar-multiple"
    ],
    "questionText": "The vectors $\\mathbf{a} = 6\\mathbf{i} + 9\\mathbf{j}$ and $\\mathbf{b} = 4\\mathbf{i} + t\\mathbf{j}$ are parallel. Find the value of $t$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the condition for parallel vectors",
          "workingLatex": "\\mathbf{b} = \\lambda \\mathbf{a}",
          "explanation": "Two vectors are parallel exactly when one is a scalar multiple of the other, so some number $\\lambda$ links them.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write out the vector equation",
          "workingLatex": "4\\mathbf{i} + t\\mathbf{j} = \\lambda(6\\mathbf{i} + 9\\mathbf{j})",
          "explanation": "Replacing $\\mathbf{a}$ and $\\mathbf{b}$ with their components sets up equations we can compare.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Equate the i-components",
          "workingLatex": "4 = 6\\lambda",
          "explanation": "For the vectors to match, the horizontal parts must agree, giving an equation for $\\lambda$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Solve for the scalar",
          "workingLatex": "\\lambda = \\frac{4}{6} = \\frac{2}{3}",
          "explanation": "This tells us $\\mathbf{b}$ is two-thirds the length of $\\mathbf{a}$ in the same direction.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Equate the j-components",
          "workingLatex": "t = 9\\lambda",
          "explanation": "The same scalar must also link the vertical parts, since a single multiple scales the whole vector.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute the scalar",
          "workingLatex": "t = 9 \\times \\frac{2}{3}",
          "explanation": "Using the value of $\\lambda$ we already found lets us pin down $t$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Evaluate",
          "workingLatex": "t = 6",
          "explanation": "This is the only value that keeps the two vertical components in the same ratio as the horizontal ones.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check the i-component ratio",
          "workingLatex": "\\frac{4}{6} = \\frac{2}{3}",
          "explanation": "For parallel vectors the ratio of matching components should be the same; we confirm the horizontal ratio.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Check the j-component ratio",
          "workingLatex": "\\frac{6}{9} = \\frac{2}{3}",
          "explanation": "The vertical ratio matches the horizontal one, so both components share the single scalar $\\tfrac{2}{3}$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the answer",
          "workingLatex": "t = 6",
          "explanation": "With $t = 6$ the vector $\\mathbf{b}$ is a true scalar multiple of $\\mathbf{a}$, so they are parallel.",
          "diagram": null
        }
      ],
      "finalAnswer": "$t = 6$"
    }
  },
  {
    "id": "al.y1.pure.vectors.q030",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Vector basics",
    "subtopicId": "al.y1.pure.vectors",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "value",
    "tags": [
      "vectors",
      "parallel",
      "scalar-multiple"
    ],
    "questionText": "The vector $\\lambda\\mathbf{i} + 8\\mathbf{j}$ is parallel to $3\\mathbf{i} + 2\\mathbf{j}$. Find the value of $\\lambda$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the condition for parallel vectors",
          "workingLatex": "\\lambda\\mathbf{i} + 8\\mathbf{j} = \\mu(3\\mathbf{i} + 2\\mathbf{j})",
          "explanation": "Parallel means one vector is a scalar multiple of the other, so we introduce a multiplier $\\mu$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Expand the right-hand side",
          "workingLatex": "\\lambda\\mathbf{i} + 8\\mathbf{j} = 3\\mu\\,\\mathbf{i} + 2\\mu\\,\\mathbf{j}",
          "explanation": "Multiplying out shows each component of the target in terms of $\\mu$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Equate the j-components",
          "workingLatex": "8 = 2\\mu",
          "explanation": "The vertical parts are both known numbers here, so this equation fixes the scalar first.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Solve for the scalar",
          "workingLatex": "\\mu = 4",
          "explanation": "This means our vector is exactly four times the direction vector $3\\mathbf{i} + 2\\mathbf{j}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Equate the i-components",
          "workingLatex": "\\lambda = 3\\mu",
          "explanation": "The same scalar $\\mu$ must scale the horizontal part too, since it multiplies the whole vector.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute the scalar",
          "workingLatex": "\\lambda = 3 \\times 4",
          "explanation": "Using $\\mu = 4$ turns the relationship into a direct calculation for $\\lambda$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Evaluate",
          "workingLatex": "\\lambda = 12",
          "explanation": "Only this value keeps the horizontal component in step with the vertical one.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Verify using the multiple",
          "workingLatex": "4(3\\mathbf{i} + 2\\mathbf{j}) = 12\\mathbf{i} + 8\\mathbf{j}",
          "explanation": "Scaling the direction vector by $4$ reproduces both components, confirming the vectors are parallel.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Confirm the component ratios agree",
          "workingLatex": "\\frac{12}{3} = 4, \\quad \\frac{8}{2} = 4",
          "explanation": "Both ratios equal the same scalar, which is the definitive test for parallel vectors.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the answer",
          "workingLatex": "\\lambda = 12",
          "explanation": "This makes $\\lambda\\mathbf{i} + 8\\mathbf{j}$ a genuine multiple of $3\\mathbf{i} + 2\\mathbf{j}$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\lambda = 12$"
    }
  },
  {
    "id": "al.y1.pure.vectors.q031",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Vector basics",
    "subtopicId": "al.y1.pure.vectors",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "tags": [
      "vectors",
      "parallel",
      "scalar-multiple"
    ],
    "questionText": "The vectors $\\mathbf{a} = 8\\mathbf{i} - 12\\mathbf{j}$ and $\\mathbf{b} = -2\\mathbf{i} + s\\mathbf{j}$ are parallel. Find the value of $s$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the condition for parallel vectors",
          "workingLatex": "\\mathbf{b} = \\lambda \\mathbf{a}",
          "explanation": "Parallel vectors are scalar multiples of one another, so a single number $\\lambda$ connects $\\mathbf{b}$ to $\\mathbf{a}$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write out the vector equation",
          "workingLatex": "-2\\mathbf{i} + s\\mathbf{j} = \\lambda(8\\mathbf{i} - 12\\mathbf{j})",
          "explanation": "Expressing both vectors in components lets us match them piece by piece.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Equate the i-components",
          "workingLatex": "-2 = 8\\lambda",
          "explanation": "The horizontal parts are both known, so this determines the scalar.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Solve for the scalar",
          "workingLatex": "\\lambda = \\frac{-2}{8} = -\\frac{1}{4}",
          "explanation": "The negative scalar tells us $\\mathbf{b}$ points the opposite way to $\\mathbf{a}$ and is a quarter of its length.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Equate the j-components",
          "workingLatex": "s = -12\\lambda",
          "explanation": "The same scalar must scale the vertical component as well.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute the scalar",
          "workingLatex": "s = -12 \\times \\left(-\\frac{1}{4}\\right)",
          "explanation": "Putting in $\\lambda = -\\tfrac{1}{4}$ gives a direct value for $s$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Evaluate, watching the signs",
          "workingLatex": "s = 3",
          "explanation": "A negative times a negative is positive, so $s$ comes out as $+3$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Verify using the multiple",
          "workingLatex": "-\\frac{1}{4}(8\\mathbf{i} - 12\\mathbf{j}) = -2\\mathbf{i} + 3\\mathbf{j}",
          "explanation": "Scaling $\\mathbf{a}$ by $-\\tfrac{1}{4}$ reproduces both components of $\\mathbf{b}$, confirming they are parallel.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Confirm the component ratios agree",
          "workingLatex": "\\frac{-2}{8} = -\\frac{1}{4}, \\quad \\frac{3}{-12} = -\\frac{1}{4}",
          "explanation": "Both ratios give the same scalar, so the parallel condition holds for each component.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the answer",
          "workingLatex": "s = 3",
          "explanation": "With $s = 3$, vector $\\mathbf{b}$ is a genuine scalar multiple of $\\mathbf{a}$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$s = 3$"
    }
  },
  {
    "id": "al.y1.pure.vectors.q032",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Vector basics",
    "subtopicId": "al.y1.pure.vectors",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "value",
    "tags": [
      "vectors",
      "parallel",
      "scalar-multiple"
    ],
    "questionText": "The vector $p\\mathbf{i} + 10\\mathbf{j}$ is parallel to $2\\mathbf{i} + 5\\mathbf{j}$. Find the value of $p$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the condition for parallel vectors",
          "workingLatex": "p\\mathbf{i} + 10\\mathbf{j} = \\lambda(2\\mathbf{i} + 5\\mathbf{j})",
          "explanation": "Parallel vectors are scalar multiples of each other, so we write one as $\\lambda$ times the other.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Expand the right-hand side",
          "workingLatex": "p\\mathbf{i} + 10\\mathbf{j} = 2\\lambda\\,\\mathbf{i} + 5\\lambda\\,\\mathbf{j}",
          "explanation": "Multiplying out shows each component of the target vector in terms of $\\lambda$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Equate the j-components",
          "workingLatex": "10 = 5\\lambda",
          "explanation": "The vertical parts are both known, so comparing them fixes the scalar first.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Solve for the scalar",
          "workingLatex": "\\lambda = 2",
          "explanation": "So our vector is exactly twice the direction vector $2\\mathbf{i} + 5\\mathbf{j}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Equate the i-components",
          "workingLatex": "p = 2\\lambda",
          "explanation": "The same scalar must also scale the horizontal component.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute the scalar",
          "workingLatex": "p = 2 \\times 2 = 4",
          "explanation": "Using $\\lambda = 2$ gives the required value of $p$ directly.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Confirm the component ratios agree",
          "workingLatex": "\\frac{p}{2} = \\frac{10}{5} = 2",
          "explanation": "Both component ratios equal the same scalar $2$, which is the test for parallel vectors.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Verify using the multiple",
          "workingLatex": "2(2\\mathbf{i} + 5\\mathbf{j}) = 4\\mathbf{i} + 10\\mathbf{j}",
          "explanation": "Doubling the direction vector reproduces both components, confirming the vectors are parallel.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the answer",
          "workingLatex": "p = 4",
          "explanation": "With $p = 4$ the vector is a true multiple of $2\\mathbf{i} + 5\\mathbf{j}$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$p = 4$"
    }
  },
  {
    "id": "al.y1.pure.vectors.q033",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Vector basics",
    "subtopicId": "al.y1.pure.vectors",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "vector",
    "tags": [
      "vectors",
      "magnitude",
      "direction",
      "unit-vector"
    ],
    "questionText": "Find the vector of magnitude $10$ in the direction of $3\\mathbf{i} + 4\\mathbf{j}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up the strategy",
          "workingLatex": "\\mathbf{v} = 10 \\, \\hat{\\mathbf{d}}",
          "explanation": "To build a vector of a chosen length in a given direction, we scale the unit vector of that direction by the required magnitude.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Explain the plan",
          "workingLatex": "\\hat{\\mathbf{d}} = \\frac{3\\mathbf{i} + 4\\mathbf{j}}{\\left| 3\\mathbf{i} + 4\\mathbf{j} \\right|}",
          "explanation": "The unit vector captures the direction with length $1$, so multiplying it by $10$ stretches it to length $10$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find the magnitude of the direction vector",
          "workingLatex": "\\left| 3\\mathbf{i} + 4\\mathbf{j} \\right| = \\sqrt{3^{2} + 4^{2}}",
          "explanation": "We need this length to convert the direction vector into a unit vector.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Simplify the magnitude",
          "workingLatex": "= \\sqrt{9 + 16} = \\sqrt{25} = 5",
          "explanation": "This is the familiar $3,4,5$ triangle, giving a clean length of $5$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Write the unit vector",
          "workingLatex": "\\hat{\\mathbf{d}} = \\frac{3\\mathbf{i} + 4\\mathbf{j}}{5}",
          "explanation": "Dividing by $5$ shrinks the direction vector to length $1$ while keeping its direction.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Multiply by the required magnitude",
          "workingLatex": "\\mathbf{v} = 10 \\times \\frac{3\\mathbf{i} + 4\\mathbf{j}}{5}",
          "explanation": "Scaling the unit vector by $10$ produces a vector of exactly that length in the same direction.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Simplify the scalar factor",
          "workingLatex": "\\mathbf{v} = 2(3\\mathbf{i} + 4\\mathbf{j})",
          "explanation": "Since $\\tfrac{10}{5}=2$, the whole vector is simply doubled.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Expand the brackets",
          "workingLatex": "\\mathbf{v} = 6\\mathbf{i} + 8\\mathbf{j}",
          "explanation": "Multiplying each component by $2$ gives the final components.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Write in column vector form",
          "workingLatex": "\\mathbf{v} = \\begin{pmatrix} 6 \\\\ 8 \\end{pmatrix}",
          "explanation": "The column form is an equivalent way to present the same vector.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Check the magnitude is 10",
          "workingLatex": "\\sqrt{6^{2} + 8^{2}} = \\sqrt{100} = 10",
          "explanation": "Confirming the length is exactly $10$ shows we scaled the direction correctly.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "State the answer",
          "workingLatex": "\\mathbf{v} = 6\\mathbf{i} + 8\\mathbf{j}",
          "explanation": "This vector has the required magnitude and points in the given direction.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\mathbf{v} = 6\\mathbf{i} + 8\\mathbf{j}$"
    }
  },
  {
    "id": "al.y1.pure.vectors.q034",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Vector basics",
    "subtopicId": "al.y1.pure.vectors",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "vector",
    "tags": [
      "vectors",
      "magnitude",
      "direction",
      "unit-vector"
    ],
    "questionText": "Find the vector of magnitude $15$ in the direction of $4\\mathbf{i} - 3\\mathbf{j}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up the strategy",
          "workingLatex": "\\mathbf{v} = 15 \\, \\hat{\\mathbf{d}}",
          "explanation": "A vector of a given length in a given direction is the unit vector of that direction scaled up by the required magnitude.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Explain the plan",
          "workingLatex": "\\hat{\\mathbf{d}} = \\frac{4\\mathbf{i} - 3\\mathbf{j}}{\\left| 4\\mathbf{i} - 3\\mathbf{j} \\right|}",
          "explanation": "First we find the unit vector for the direction, then stretch it to length $15$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find the magnitude of the direction vector",
          "workingLatex": "\\left| 4\\mathbf{i} - 3\\mathbf{j} \\right| = \\sqrt{4^{2} + (-3)^{2}}",
          "explanation": "The negative component squares to a positive, since length ignores direction.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Simplify the magnitude",
          "workingLatex": "= \\sqrt{16 + 9} = \\sqrt{25} = 5",
          "explanation": "Again a $3,4,5$ triangle appears, giving a tidy length of $5$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Write the unit vector",
          "workingLatex": "\\hat{\\mathbf{d}} = \\frac{4\\mathbf{i} - 3\\mathbf{j}}{5}",
          "explanation": "Dividing by $5$ produces a vector of length $1$ pointing the same way.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Multiply by the required magnitude",
          "workingLatex": "\\mathbf{v} = 15 \\times \\frac{4\\mathbf{i} - 3\\mathbf{j}}{5}",
          "explanation": "Scaling the unit vector by $15$ gives the length we want while keeping the direction.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Simplify the scalar factor",
          "workingLatex": "\\mathbf{v} = 3(4\\mathbf{i} - 3\\mathbf{j})",
          "explanation": "Because $\\tfrac{15}{5}=3$, the direction vector is tripled.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Expand the brackets",
          "workingLatex": "\\mathbf{v} = 12\\mathbf{i} - 9\\mathbf{j}",
          "explanation": "Multiplying each component by $3$ gives the final vector.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Check the magnitude is 15",
          "workingLatex": "\\sqrt{12^{2} + (-9)^{2}} = \\sqrt{144 + 81} = \\sqrt{225} = 15",
          "explanation": "The length works out to exactly $15$, confirming our scaling.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Confirm the direction is preserved",
          "workingLatex": "\\frac{12}{4} = 3, \\quad \\frac{-9}{-3} = 3",
          "explanation": "Both components are the same multiple of the original, so the direction is unchanged.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "State the answer",
          "workingLatex": "\\mathbf{v} = 12\\mathbf{i} - 9\\mathbf{j}",
          "explanation": "This vector has magnitude $15$ and lies along the required direction.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\mathbf{v} = 12\\mathbf{i} - 9\\mathbf{j}$"
    }
  },
  {
    "id": "al.y1.pure.vectors.q035",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Vector basics",
    "subtopicId": "al.y1.pure.vectors",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "vector",
    "tags": [
      "vectors",
      "magnitude",
      "direction",
      "unit-vector"
    ],
    "questionText": "Find the vector of magnitude $26$ in the direction of $5\\mathbf{i} + 12\\mathbf{j}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up the strategy",
          "workingLatex": "\\mathbf{v} = 26 \\, \\hat{\\mathbf{d}}",
          "explanation": "We construct the required vector by scaling the direction's unit vector up to the desired magnitude.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Explain the plan",
          "workingLatex": "\\hat{\\mathbf{d}} = \\frac{5\\mathbf{i} + 12\\mathbf{j}}{\\left| 5\\mathbf{i} + 12\\mathbf{j} \\right|}",
          "explanation": "The unit vector fixes the direction at length $1$, ready to be stretched to length $26$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find the magnitude of the direction vector",
          "workingLatex": "\\left| 5\\mathbf{i} + 12\\mathbf{j} \\right| = \\sqrt{5^{2} + 12^{2}}",
          "explanation": "This length is what we divide by to obtain the unit vector.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Simplify the magnitude",
          "workingLatex": "= \\sqrt{25 + 144} = \\sqrt{169} = 13",
          "explanation": "The $5,12,13$ triangle gives a clean length of $13$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Write the unit vector",
          "workingLatex": "\\hat{\\mathbf{d}} = \\frac{5\\mathbf{i} + 12\\mathbf{j}}{13}",
          "explanation": "Dividing by $13$ gives a vector of length $1$ in the same direction.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Multiply by the required magnitude",
          "workingLatex": "\\mathbf{v} = 26 \\times \\frac{5\\mathbf{i} + 12\\mathbf{j}}{13}",
          "explanation": "Scaling the unit vector by $26$ produces a vector of that length pointing the same way.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Simplify the scalar factor",
          "workingLatex": "\\mathbf{v} = 2(5\\mathbf{i} + 12\\mathbf{j})",
          "explanation": "Because $\\tfrac{26}{13}=2$, we simply double the direction vector.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Expand the brackets",
          "workingLatex": "\\mathbf{v} = 10\\mathbf{i} + 24\\mathbf{j}",
          "explanation": "Doubling each component gives the final vector.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Write in column vector form",
          "workingLatex": "\\mathbf{v} = \\begin{pmatrix} 10 \\\\ 24 \\end{pmatrix}",
          "explanation": "This is the same vector expressed as a column, which is often convenient.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Check the magnitude is 26",
          "workingLatex": "\\sqrt{10^{2} + 24^{2}} = \\sqrt{100 + 576} = \\sqrt{676} = 26",
          "explanation": "The length comes out as exactly $26$, confirming the construction.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "State the answer",
          "workingLatex": "\\mathbf{v} = 10\\mathbf{i} + 24\\mathbf{j}",
          "explanation": "This vector has magnitude $26$ and points in the given direction.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\mathbf{v} = 10\\mathbf{i} + 24\\mathbf{j}$"
    }
  },
  {
    "id": "al.y1.pure.vectors.q036",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Vector basics",
    "subtopicId": "al.y1.pure.vectors",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "vector",
    "tags": [
      "vectors",
      "magnitude",
      "direction",
      "unit-vector"
    ],
    "questionText": "Find the vector of magnitude $20$ in the direction of $-8\\mathbf{i} + 6\\mathbf{j}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up the strategy",
          "workingLatex": "\\mathbf{v} = 20 \\, \\hat{\\mathbf{d}}",
          "explanation": "The required vector is the unit vector of the direction scaled up to the stated magnitude.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Explain the plan",
          "workingLatex": "\\hat{\\mathbf{d}} = \\frac{-8\\mathbf{i} + 6\\mathbf{j}}{\\left| -8\\mathbf{i} + 6\\mathbf{j} \\right|}",
          "explanation": "We find the unit vector first, then stretch it to length $20$ while keeping the direction.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find the magnitude of the direction vector",
          "workingLatex": "\\left| -8\\mathbf{i} + 6\\mathbf{j} \\right| = \\sqrt{(-8)^{2} + 6^{2}}",
          "explanation": "Both components square to positives, so the negative sign does not affect the length.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Simplify the magnitude",
          "workingLatex": "= \\sqrt{64 + 36} = \\sqrt{100} = 10",
          "explanation": "This is a scaled $3,4,5$ triangle (namely $6,8,10$), giving a length of $10$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Write the unit vector",
          "workingLatex": "\\hat{\\mathbf{d}} = \\frac{-8\\mathbf{i} + 6\\mathbf{j}}{10}",
          "explanation": "Dividing by $10$ produces a length-one vector in the same direction.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Multiply by the required magnitude",
          "workingLatex": "\\mathbf{v} = 20 \\times \\frac{-8\\mathbf{i} + 6\\mathbf{j}}{10}",
          "explanation": "Scaling the unit vector by $20$ gives the length we want without changing the direction.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Simplify the scalar factor",
          "workingLatex": "\\mathbf{v} = 2(-8\\mathbf{i} + 6\\mathbf{j})",
          "explanation": "Since $\\tfrac{20}{10}=2$, the direction vector is simply doubled.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Expand the brackets",
          "workingLatex": "\\mathbf{v} = -16\\mathbf{i} + 12\\mathbf{j}",
          "explanation": "Doubling each component, including the negative one, gives the final vector.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Check the magnitude is 20",
          "workingLatex": "\\sqrt{(-16)^{2} + 12^{2}} = \\sqrt{256 + 144} = \\sqrt{400} = 20",
          "explanation": "The length is exactly $20$, confirming we scaled correctly.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Confirm the direction is preserved",
          "workingLatex": "\\frac{-16}{-8} = 2, \\quad \\frac{12}{6} = 2",
          "explanation": "Both components are the same multiple of the original, so the direction is unchanged.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "State the answer",
          "workingLatex": "\\mathbf{v} = -16\\mathbf{i} + 12\\mathbf{j}",
          "explanation": "This vector has magnitude $20$ and lies in the given direction.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\mathbf{v} = -16\\mathbf{i} + 12\\mathbf{j}$"
    }
  },
  {
    "id": "al.y1.pure.vectors.q037",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Vector basics",
    "subtopicId": "al.y1.pure.vectors",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "angle",
    "tags": [
      "vectors",
      "direction",
      "angle"
    ],
    "questionText": "Find the angle that the vector $\\mathbf{a} = \\sqrt{3}\\,\\mathbf{i} + \\mathbf{j}$ makes with the positive $x$-axis.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall how direction is measured",
          "workingLatex": "\\tan\\theta = \\frac{y}{x}",
          "explanation": "The angle a vector makes with the positive $x$-axis satisfies $\\tan\\theta = y/x$, because the vertical component over the horizontal component is exactly the gradient of the line the vector points along.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write down the components",
          "workingLatex": "x = \\sqrt{3}, \\quad y = 1",
          "explanation": "The coefficient of $\\mathbf{i}$ is the horizontal component and the coefficient of $\\mathbf{j}$ is the vertical component.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Decide which quadrant the vector points into",
          "workingLatex": "x > 0, \\quad y > 0 \\Rightarrow \\text{first quadrant}",
          "explanation": "Both components are positive, so the vector points up and to the right into the first quadrant, where the direction angle is acute.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute the components",
          "workingLatex": "\\tan\\theta = \\frac{1}{\\sqrt{3}}",
          "explanation": "Placing the vertical component over the horizontal component gives the tangent of the required angle.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Rewrite the ratio in a friendlier form",
          "workingLatex": "\\frac{1}{\\sqrt{3}} = \\frac{\\sqrt{3}}{3} \\approx 0.577",
          "explanation": "Rationalising the denominator makes the value easier to compare with the standard exact values, and the decimal gives us a rough sense of the size.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Recognise the exact value",
          "workingLatex": "\\frac{1}{\\sqrt{3}} = \\tan 30^{\\circ}",
          "explanation": "This is one of the standard exact tangents from the special right-angled triangle, so no calculator rounding is needed.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Solve for the angle",
          "workingLatex": "\\theta = \\arctan\\!\\left(\\frac{1}{\\sqrt{3}}\\right) = 30^{\\circ}",
          "explanation": "Taking the inverse tangent undoes the tangent and returns the direction measured anticlockwise from the positive $x$-axis.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check the answer fits the quadrant",
          "workingLatex": "0^{\\circ} < 30^{\\circ} < 90^{\\circ}",
          "explanation": "An angle between $0^{\\circ}$ and $90^{\\circ}$ is exactly what we expect for a first-quadrant vector, so the result is consistent.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the direction",
          "workingLatex": "\\theta = 30^{\\circ}",
          "explanation": "Since the horizontal component is larger than the vertical one, the vector leans towards the $x$-axis, matching a shallow $30^{\\circ}$ angle.",
          "diagram": null
        }
      ],
      "finalAnswer": "The vector makes an angle of $30^{\\circ}$ with the positive $x$-axis."
    }
  },
  {
    "id": "al.y1.pure.vectors.q038",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Vector basics",
    "subtopicId": "al.y1.pure.vectors",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "angle",
    "tags": [
      "vectors",
      "direction",
      "angle",
      "arctan"
    ],
    "questionText": "Find, to $1$ decimal place, the angle that the vector $\\mathbf{a} = 5\\mathbf{i} + 3\\mathbf{j}$ makes with the positive $x$-axis.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the direction rule",
          "workingLatex": "\\tan\\theta = \\frac{y}{x}",
          "explanation": "The direction angle with the positive $x$-axis is found from the ratio of the vertical component to the horizontal component, which is the gradient of the vector.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify the components",
          "workingLatex": "x = 5, \\quad y = 3",
          "explanation": "The number in front of $\\mathbf{i}$ is the horizontal part and the number in front of $\\mathbf{j}$ is the vertical part.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Determine the quadrant",
          "workingLatex": "x > 0, \\quad y > 0 \\Rightarrow \\text{first quadrant}",
          "explanation": "Both components are positive, so the vector lies in the first quadrant and the inverse tangent will give the answer directly, with no adjustment needed.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "diagram": null,
          "description": "Confirm the inverse tangent gives the angle directly",
          "workingLatex": "\\text{first quadrant} \\Rightarrow \\theta = \\arctan\\!\\left(\\tfrac{y}{x}\\right) \\ \\text{(no adjustment)}",
          "explanation": "In the first quadrant the calculator’s $\\arctan$ value is already the angle measured anticlockwise from the positive $x$-axis, so no quadrant adjustment is needed here."
        },
        {
          "stepNumber": 5,
          "description": "Form the tangent ratio",
          "workingLatex": "\\tan\\theta = \\frac{3}{5} = 0.6",
          "explanation": "Dividing the vertical component by the horizontal component gives the tangent of the angle we want.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Note that the angle is not a standard value",
          "workingLatex": "0.6 \\ne \\tan 30^{\\circ}, \\; \\tan 45^{\\circ}",
          "explanation": "Since $0.6$ is not one of the exact special values, we use a calculator and round at the end.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Apply the inverse tangent",
          "workingLatex": "\\theta = \\arctan(0.6) = 30.9637\\ldots^{\\circ}",
          "explanation": "The inverse tangent returns the acute angle whose tangent is $0.6$, measured from the positive $x$-axis.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Round to the required accuracy",
          "workingLatex": "\\theta \\approx 31.0^{\\circ}",
          "explanation": "Rounding $30.96\\ldots$ to $1$ decimal place rounds the tenths digit up, giving $31.0^{\\circ}$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Sense-check the size",
          "workingLatex": "y < x \\Rightarrow \\theta < 45^{\\circ}",
          "explanation": "Because the vertical component is smaller than the horizontal one, the vector leans towards the $x$-axis, so an angle just under $45^{\\circ}$ is exactly what we expect.",
          "diagram": null
        }
      ],
      "finalAnswer": "The vector makes an angle of $31.0^{\\circ}$ (1 d.p.) with the positive $x$-axis."
    }
  },
  {
    "id": "al.y1.pure.vectors.q039",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Vector basics",
    "subtopicId": "al.y1.pure.vectors",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "angle",
    "tags": [
      "vectors",
      "direction",
      "quadrant"
    ],
    "questionText": "Find, to $1$ decimal place, the angle that the vector $\\mathbf{a} = -4\\mathbf{i} + 3\\mathbf{j}$ makes with the positive $x$-axis, measured anticlockwise.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the direction rule",
          "workingLatex": "\\tan\\theta = \\frac{y}{x}",
          "explanation": "The tangent of the direction angle equals the vertical component divided by the horizontal component.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write down the components",
          "workingLatex": "x = -4, \\quad y = 3",
          "explanation": "The horizontal component is negative and the vertical component is positive, which matters greatly for finding the correct angle.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Determine the quadrant",
          "workingLatex": "x < 0, \\quad y > 0 \\Rightarrow \\text{second quadrant}",
          "explanation": "A negative horizontal and positive vertical component means the vector points up and to the left, into the second quadrant, so the angle lies between $90^{\\circ}$ and $180^{\\circ}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Warn about the calculator value",
          "workingLatex": "\\arctan\\!\\left(\\frac{3}{-4}\\right) = -36.87^{\\circ}",
          "explanation": "A calculator only returns angles between $-90^{\\circ}$ and $90^{\\circ}$, so feeding in the signed ratio gives a misleading negative angle. We instead work with a positive reference angle and adjust.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find the reference angle from the sizes",
          "workingLatex": "\\alpha = \\arctan\\!\\left(\\frac{3}{4}\\right) = 36.8698\\ldots^{\\circ}",
          "explanation": "Using the magnitudes of the components gives the acute angle the vector makes with the horizontal axis, ignoring direction for now.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Adjust for the second quadrant",
          "workingLatex": "\\theta = 180^{\\circ} - \\alpha",
          "explanation": "In the second quadrant the true angle is measured back from the negative $x$-axis, so we subtract the reference angle from $180^{\\circ}$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Compute the angle",
          "workingLatex": "\\theta = 180^{\\circ} - 36.8698^{\\circ} = 143.1301\\ldots^{\\circ}",
          "explanation": "Carrying out the subtraction gives the direction measured anticlockwise from the positive $x$-axis.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Round to $1$ decimal place",
          "workingLatex": "\\theta \\approx 143.1^{\\circ}",
          "explanation": "The next digit is a $3$, so we round down and keep $143.1^{\\circ}$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Check the answer fits the quadrant",
          "workingLatex": "90^{\\circ} < 143.1^{\\circ} < 180^{\\circ}",
          "explanation": "An angle strictly between $90^{\\circ}$ and $180^{\\circ}$ is exactly right for a second-quadrant vector, confirming the adjustment was correct.",
          "diagram": null
        }
      ],
      "finalAnswer": "The vector makes an angle of $143.1^{\\circ}$ (1 d.p.) with the positive $x$-axis."
    }
  },
  {
    "id": "al.y1.pure.vectors.q040",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Vector basics",
    "subtopicId": "al.y1.pure.vectors",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "angle",
    "tags": [
      "vectors",
      "direction",
      "quadrant"
    ],
    "questionText": "Find the angle that the vector $\\mathbf{a} = -2\\mathbf{i} - 2\\mathbf{j}$ makes with the positive $x$-axis, measured anticlockwise.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the direction rule",
          "workingLatex": "\\tan\\theta = \\frac{y}{x}",
          "explanation": "The direction is governed by the ratio of the vertical to the horizontal component, but the signs of those components decide the quadrant.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write down the components",
          "workingLatex": "x = -2, \\quad y = -2",
          "explanation": "Both components are negative, which will place the vector into the third quadrant.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Determine the quadrant",
          "workingLatex": "x < 0, \\quad y < 0 \\Rightarrow \\text{third quadrant}",
          "explanation": "A vector pointing down and to the left lies in the third quadrant, so its anticlockwise angle is between $180^{\\circ}$ and $270^{\\circ}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "diagram": null,
          "description": "See why a direct inverse tangent is not enough",
          "workingLatex": "\\arctan\\!\\left(\\tfrac{-2}{-2}\\right) = \\arctan(1) = 45^{\\circ} \\ (\\text{first-quadrant value})",
          "explanation": "A calculator’s $\\arctan$ only returns angles between $-90^{\\circ}$ and $90^{\\circ}$, so it gives $45^{\\circ}$, pointing into the first quadrant — the wrong direction. We must correct this using the quadrant we found."
        },
        {
          "stepNumber": 5,
          "description": "Find the reference angle from the sizes",
          "workingLatex": "\\alpha = \\arctan\\!\\left(\\frac{2}{2}\\right) = \\arctan(1) = 45^{\\circ}",
          "explanation": "Using the magnitudes gives the acute angle the vector makes with the horizontal axis; equal magnitudes give the exact value $45^{\\circ}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Adjust for the third quadrant",
          "workingLatex": "\\theta = 180^{\\circ} + \\alpha",
          "explanation": "In the third quadrant we swing past the negative $x$-axis, so the true anticlockwise angle is the reference angle added to $180^{\\circ}$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Compute the angle",
          "workingLatex": "\\theta = 180^{\\circ} + 45^{\\circ} = 225^{\\circ}",
          "explanation": "Adding gives the direction measured anticlockwise from the positive $x$-axis.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check the answer fits the quadrant",
          "workingLatex": "180^{\\circ} < 225^{\\circ} < 270^{\\circ}",
          "explanation": "The angle sits between $180^{\\circ}$ and $270^{\\circ}$, exactly the range for a third-quadrant vector.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Interpret the symmetry",
          "workingLatex": "225^{\\circ} = 45^{\\circ} + 180^{\\circ}",
          "explanation": "Because the vector is a straight reversal of $2\\mathbf{i} + 2\\mathbf{j}$, which points at $45^{\\circ}$, it must point in the exact opposite direction, a half-turn further round, which confirms $225^{\\circ}$.",
          "diagram": null
        }
      ],
      "finalAnswer": "The vector makes an angle of $225^{\\circ}$ with the positive $x$-axis."
    }
  },
  {
    "id": "al.y1.pure.vectors.q041",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Vector basics",
    "subtopicId": "al.y1.pure.vectors",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "vector",
    "tags": [
      "vectors",
      "components",
      "magnitude-direction"
    ],
    "questionText": "A vector $\\mathbf{a}$ has magnitude $10$ and makes an angle of $30^{\\circ}$ with the positive $x$-axis. Express $\\mathbf{a}$ in the form $p\\,\\mathbf{i} + q\\,\\mathbf{j}$, giving exact values.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall how to split a vector into components",
          "workingLatex": "\\mathbf{a} = (r\\cos\\theta)\\,\\mathbf{i} + (r\\sin\\theta)\\,\\mathbf{j}",
          "explanation": "A vector of magnitude $r$ at angle $\\theta$ has a horizontal component $r\\cos\\theta$ and a vertical component $r\\sin\\theta$, which come straight from the right-angled triangle formed by the vector and the axes.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify the magnitude and angle",
          "workingLatex": "r = 10, \\quad \\theta = 30^{\\circ}",
          "explanation": "The length of the vector is $r$ and its direction from the positive $x$-axis is $\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Note the quadrant",
          "workingLatex": "0^{\\circ} < 30^{\\circ} < 90^{\\circ} \\Rightarrow \\text{first quadrant}",
          "explanation": "An angle in the first quadrant means both components will come out positive, so we expect no sign surprises.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Compute the horizontal component",
          "workingLatex": "p = 10\\cos 30^{\\circ}",
          "explanation": "The $\\mathbf{i}$-component is the magnitude multiplied by the cosine of the angle, the side adjacent to $\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Use the exact cosine value",
          "workingLatex": "p = 10 \\times \\frac{\\sqrt{3}}{2} = 5\\sqrt{3} \\approx 8.66",
          "explanation": "Substituting the exact value $\\cos 30^{\\circ} = \\tfrac{\\sqrt{3}}{2}$ keeps the answer precise, with the decimal shown for a sense of size.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Compute the vertical component",
          "workingLatex": "q = 10\\sin 30^{\\circ}",
          "explanation": "The $\\mathbf{j}$-component is the magnitude multiplied by the sine of the angle, the side opposite to $\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Use the exact sine value",
          "workingLatex": "q = 10 \\times \\frac{1}{2} = 5",
          "explanation": "Since $\\sin 30^{\\circ} = \\tfrac{1}{2}$, the vertical component is exactly $5$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Assemble the vector",
          "workingLatex": "\\mathbf{a} = 5\\sqrt{3}\\,\\mathbf{i} + 5\\mathbf{j}",
          "explanation": "Combining the two components gives the vector in the required $p\\,\\mathbf{i} + q\\,\\mathbf{j}$ form.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Check the magnitude is recovered",
          "workingLatex": "\\left| \\mathbf{a} \\right| = \\sqrt{(5\\sqrt{3})^{2} + 5^{2}} = \\sqrt{75 + 25} = \\sqrt{100} = 10",
          "explanation": "Rebuilding the length from the components returns the given magnitude of $10$, confirming the split is correct.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Check the direction is recovered",
          "workingLatex": "\\tan\\theta = \\frac{5}{5\\sqrt{3}} = \\frac{1}{\\sqrt{3}} \\Rightarrow \\theta = 30^{\\circ}",
          "explanation": "The ratio of the components gives back the original $30^{\\circ}$, so both the length and the direction agree with the question.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\mathbf{a} = 5\\sqrt{3}\\,\\mathbf{i} + 5\\mathbf{j}$ (approximately $8.66\\,\\mathbf{i} + 5\\mathbf{j}$)."
    }
  },
  {
    "id": "al.y1.pure.vectors.q042",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Vector basics",
    "subtopicId": "al.y1.pure.vectors",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "vector",
    "tags": [
      "vectors",
      "components",
      "magnitude-direction"
    ],
    "questionText": "A vector $\\mathbf{a}$ has magnitude $8$ and makes an angle of $120^{\\circ}$ with the positive $x$-axis. Express $\\mathbf{a}$ in the form $p\\,\\mathbf{i} + q\\,\\mathbf{j}$, giving exact values.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall how to split a vector into components",
          "workingLatex": "\\mathbf{a} = (r\\cos\\theta)\\,\\mathbf{i} + (r\\sin\\theta)\\,\\mathbf{j}",
          "explanation": "The horizontal and vertical components of a vector of magnitude $r$ at angle $\\theta$ are $r\\cos\\theta$ and $r\\sin\\theta$; this formula works for any angle, not just acute ones.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify the magnitude and angle",
          "workingLatex": "r = 8, \\quad \\theta = 120^{\\circ}",
          "explanation": "We read the length and direction directly from the question.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Note the quadrant and expected signs",
          "workingLatex": "90^{\\circ} < 120^{\\circ} < 180^{\\circ} \\Rightarrow \\text{second quadrant}",
          "explanation": "In the second quadrant the vector points up and to the left, so we expect a negative $\\mathbf{i}$-component and a positive $\\mathbf{j}$-component.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Compute the horizontal component",
          "workingLatex": "p = 8\\cos 120^{\\circ}",
          "explanation": "The $\\mathbf{i}$-component is the magnitude times the cosine of the angle.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate the cosine",
          "workingLatex": "\\cos 120^{\\circ} = -\\tfrac{1}{2} \\Rightarrow p = 8 \\times \\left(-\\tfrac{1}{2}\\right) = -4",
          "explanation": "Cosine is negative in the second quadrant, which gives the negative horizontal component we predicted.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Compute the vertical component",
          "workingLatex": "q = 8\\sin 120^{\\circ}",
          "explanation": "The $\\mathbf{j}$-component is the magnitude times the sine of the angle.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Evaluate the sine",
          "workingLatex": "\\sin 120^{\\circ} = \\tfrac{\\sqrt{3}}{2} \\Rightarrow q = 8 \\times \\tfrac{\\sqrt{3}}{2} = 4\\sqrt{3} \\approx 6.93",
          "explanation": "Sine is positive in the second quadrant, giving the positive vertical component we expected.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Assemble the vector",
          "workingLatex": "\\mathbf{a} = -4\\,\\mathbf{i} + 4\\sqrt{3}\\,\\mathbf{j}",
          "explanation": "Combining the components gives the vector in the required form, with the sign pattern matching the second quadrant.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Check the magnitude is recovered",
          "workingLatex": "\\left| \\mathbf{a} \\right| = \\sqrt{(-4)^{2} + (4\\sqrt{3})^{2}} = \\sqrt{16 + 48} = \\sqrt{64} = 8",
          "explanation": "Rebuilding the length returns the given magnitude of $8$, so the components are consistent.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Confirm the direction",
          "workingLatex": "x < 0, \\; y > 0 \\Rightarrow \\text{second quadrant, } 120^{\\circ}",
          "explanation": "The negative-then-positive sign pattern confirms the vector points into the second quadrant at $120^{\\circ}$, exactly as required.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\mathbf{a} = -4\\mathbf{i} + 4\\sqrt{3}\\,\\mathbf{j}$ (approximately $-4\\mathbf{i} + 6.93\\mathbf{j}$)."
    }
  },
  {
    "id": "al.y1.pure.vectors.q043",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Vector basics",
    "subtopicId": "al.y1.pure.vectors",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "vector",
    "tags": [
      "vectors",
      "components",
      "magnitude-direction"
    ],
    "questionText": "A vector $\\mathbf{a}$ has magnitude $12$ and makes an angle of $60^{\\circ}$ with the positive $x$-axis. Express $\\mathbf{a}$ in the form $p\\,\\mathbf{i} + q\\,\\mathbf{j}$, giving exact values.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the component formula",
          "workingLatex": "\\mathbf{a} = (r\\cos\\theta)\\,\\mathbf{i} + (r\\sin\\theta)\\,\\mathbf{j}",
          "explanation": "Resolving a vector of magnitude $r$ at angle $\\theta$ gives a horizontal part $r\\cos\\theta$ and a vertical part $r\\sin\\theta$, from the right-angled triangle it makes with the axes.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify the magnitude and angle",
          "workingLatex": "r = 12, \\quad \\theta = 60^{\\circ}",
          "explanation": "The length is $12$ and the direction from the positive $x$-axis is $60^{\\circ}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Note the quadrant",
          "workingLatex": "0^{\\circ} < 60^{\\circ} < 90^{\\circ} \\Rightarrow \\text{first quadrant}",
          "explanation": "A first-quadrant angle means both components will be positive.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Compute the horizontal component",
          "workingLatex": "p = 12\\cos 60^{\\circ} = 12 \\times \\tfrac{1}{2} = 6",
          "explanation": "Using $\\cos 60^{\\circ} = \\tfrac{1}{2}$ gives an exact horizontal component of $6$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Compute the vertical component",
          "workingLatex": "q = 12\\sin 60^{\\circ} = 12 \\times \\tfrac{\\sqrt{3}}{2} = 6\\sqrt{3} \\approx 10.39",
          "explanation": "Using $\\sin 60^{\\circ} = \\tfrac{\\sqrt{3}}{2}$ gives the exact vertical component $6\\sqrt{3}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Assemble the vector",
          "workingLatex": "\\mathbf{a} = 6\\,\\mathbf{i} + 6\\sqrt{3}\\,\\mathbf{j}",
          "explanation": "Combining the two components gives the vector in the required form.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Compare the components",
          "workingLatex": "6\\sqrt{3} > 6",
          "explanation": "The vertical component is larger than the horizontal one, which fits a steep $60^{\\circ}$ direction that leans towards the $y$-axis.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check the magnitude is recovered",
          "workingLatex": "\\left| \\mathbf{a} \\right| = \\sqrt{6^{2} + (6\\sqrt{3})^{2}} = \\sqrt{36 + 108} = \\sqrt{144} = 12",
          "explanation": "Rebuilding the length returns the given magnitude of $12$, confirming the resolve is correct.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Check the direction is recovered",
          "workingLatex": "\\tan\\theta = \\frac{6\\sqrt{3}}{6} = \\sqrt{3} \\Rightarrow \\theta = 60^{\\circ}",
          "explanation": "The ratio of the components returns the original $60^{\\circ}$, so both length and direction match the question.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\mathbf{a} = 6\\mathbf{i} + 6\\sqrt{3}\\,\\mathbf{j}$ (approximately $6\\mathbf{i} + 10.39\\mathbf{j}$)."
    }
  },
  {
    "id": "al.y1.pure.vectors.q044",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Vector basics",
    "subtopicId": "al.y1.pure.vectors",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "value",
    "tags": [
      "vectors",
      "equal-vectors",
      "unknowns"
    ],
    "questionText": "Given that $(2s - 1)\\mathbf{i} + 7\\mathbf{j} = 5\\mathbf{i} + (t + 2)\\mathbf{j}$, find the values of $s$ and $t$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State what equal vectors mean",
          "workingLatex": "\\mathbf{u} = \\mathbf{v} \\Rightarrow u_x = v_x, \\; u_y = v_y",
          "explanation": "Two vectors are equal only when they have the same horizontal component and the same vertical component, so we can compare each direction separately.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Explain why the components split",
          "workingLatex": "\\mathbf{i} \\perp \\mathbf{j}",
          "explanation": "Because $\\mathbf{i}$ and $\\mathbf{j}$ point in independent directions, the amount of $\\mathbf{i}$ on the left must equal the amount of $\\mathbf{i}$ on the right, and likewise for $\\mathbf{j}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Equate the $\\mathbf{i}$-components",
          "workingLatex": "2s - 1 = 5",
          "explanation": "Matching the coefficients of $\\mathbf{i}$ on both sides gives an equation in $s$ alone.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Rearrange the $\\mathbf{i}$-equation",
          "workingLatex": "2s = 6",
          "explanation": "Adding $1$ to both sides isolates the term containing $s$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve for $s$",
          "workingLatex": "s = 3",
          "explanation": "Dividing both sides by $2$ gives the value of $s$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Equate the $\\mathbf{j}$-components",
          "workingLatex": "t + 2 = 7",
          "explanation": "Matching the coefficients of $\\mathbf{j}$ gives a separate equation in $t$ alone.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Solve for $t$",
          "workingLatex": "t = 7 - 2 = 5",
          "explanation": "Subtracting $2$ from both sides gives the value of $t$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Verify by substitution",
          "workingLatex": "(2(3) - 1)\\mathbf{i} + 7\\mathbf{j} = 5\\mathbf{i} + 7\\mathbf{j} = 5\\mathbf{i} + (5 + 2)\\mathbf{j}",
          "explanation": "Putting the values back in makes both sides read $5\\mathbf{i} + 7\\mathbf{j}$, so the vectors truly are equal.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the solution",
          "workingLatex": "s = 3, \\quad t = 5",
          "explanation": "Both unknowns are found by comparing components independently, one from each direction.",
          "diagram": null
        }
      ],
      "finalAnswer": "$s = 3$ and $t = 5$."
    }
  },
  {
    "id": "al.y1.pure.vectors.q045",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Vector basics",
    "subtopicId": "al.y1.pure.vectors",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "value",
    "tags": [
      "vectors",
      "equal-vectors",
      "unknowns"
    ],
    "questionText": "Given that $(4p - 3)\\mathbf{i} + (2q + 1)\\mathbf{j} = 9\\mathbf{i} + 7\\mathbf{j}$, find the values of $p$ and $q$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the condition for equal vectors",
          "workingLatex": "\\mathbf{u} = \\mathbf{v} \\Rightarrow u_x = v_x, \\; u_y = v_y",
          "explanation": "Equal vectors must agree in both the horizontal and vertical directions, so we can equate the two sets of components separately.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Explain the independence of the directions",
          "workingLatex": "\\mathbf{i} \\perp \\mathbf{j}",
          "explanation": "Since no amount of $\\mathbf{i}$ can ever make up $\\mathbf{j}$, the $\\mathbf{i}$ coefficients must match on their own and the $\\mathbf{j}$ coefficients must match on their own.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Equate the $\\mathbf{i}$-components",
          "workingLatex": "4p - 3 = 9",
          "explanation": "Comparing the coefficients of $\\mathbf{i}$ produces an equation involving only $p$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Rearrange the $\\mathbf{i}$-equation",
          "workingLatex": "4p = 12",
          "explanation": "Adding $3$ to both sides isolates the term in $p$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve for $p$",
          "workingLatex": "p = 3",
          "explanation": "Dividing by $4$ gives the value of $p$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Equate the $\\mathbf{j}$-components",
          "workingLatex": "2q + 1 = 7",
          "explanation": "Comparing the coefficients of $\\mathbf{j}$ gives a separate equation involving only $q$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Rearrange the $\\mathbf{j}$-equation",
          "workingLatex": "2q = 6",
          "explanation": "Subtracting $1$ from both sides isolates the term in $q$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Solve for $q$",
          "workingLatex": "q = 3",
          "explanation": "Dividing by $2$ gives the value of $q$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Verify by substitution",
          "workingLatex": "(4(3) - 3)\\mathbf{i} + (2(3) + 1)\\mathbf{j} = 9\\mathbf{i} + 7\\mathbf{j}",
          "explanation": "Substituting both values back reproduces the right-hand side exactly, confirming the solution.",
          "diagram": null
        }
      ],
      "finalAnswer": "$p = 3$ and $q = 3$."
    }
  },
  {
    "id": "al.y1.pure.vectors.q046",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Vector basics",
    "subtopicId": "al.y1.pure.vectors",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "tags": [
      "vectors",
      "equal-vectors",
      "simultaneous"
    ],
    "questionText": "Given that $(m + n)\\mathbf{i} + (m - n)\\mathbf{j} = 7\\mathbf{i} + 3\\mathbf{j}$, find the values of $m$ and $n$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the condition for equal vectors",
          "workingLatex": "\\mathbf{u} = \\mathbf{v} \\Rightarrow u_x = v_x, \\; u_y = v_y",
          "explanation": "Equal vectors share the same horizontal and vertical components, so we can read off one equation from each direction.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Equate the $\\mathbf{i}$-components",
          "workingLatex": "m + n = 7",
          "explanation": "Matching the coefficients of $\\mathbf{i}$ gives the first equation; note that this one still contains both unknowns.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Equate the $\\mathbf{j}$-components",
          "workingLatex": "m - n = 3",
          "explanation": "Matching the coefficients of $\\mathbf{j}$ gives a second equation, again containing both unknowns.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Recognise a pair of simultaneous equations",
          "workingLatex": "\\begin{cases} m + n = 7 \\\\ m - n = 3 \\end{cases}",
          "explanation": "Because each equation mixes $m$ and $n$, we have two simultaneous equations to solve together rather than one at a time.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Add the equations to eliminate $n$",
          "workingLatex": "(m + n) + (m - n) = 7 + 3",
          "explanation": "Adding the two equations cancels the $+n$ against the $-n$, leaving an equation in $m$ only.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Simplify",
          "workingLatex": "2m = 10",
          "explanation": "The $n$ terms vanish and the two $m$ terms combine.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Solve for $m$",
          "workingLatex": "m = 5",
          "explanation": "Dividing by $2$ gives the value of $m$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Substitute back to find $n$",
          "workingLatex": "5 + n = 7 \\Rightarrow n = 2",
          "explanation": "Putting $m = 5$ into the first equation isolates $n$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Check with the second equation",
          "workingLatex": "m - n = 5 - 2 = 3 \\; \\checkmark",
          "explanation": "The second equation is satisfied, confirming the pair is consistent rather than a fluke of the first equation alone.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the solution",
          "workingLatex": "m = 5, \\quad n = 2",
          "explanation": "Both unknowns follow once the two component equations are solved together.",
          "diagram": null
        }
      ],
      "finalAnswer": "$m = 5$ and $n = 2$."
    }
  },
  {
    "id": "al.y1.pure.vectors.q047",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Vector basics",
    "subtopicId": "al.y1.pure.vectors",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "tags": [
      "vectors",
      "resultant",
      "magnitude",
      "direction"
    ],
    "questionText": "Given $\\mathbf{a} = 3\\mathbf{i} + \\mathbf{j}$ and $\\mathbf{b} = \\mathbf{i} + 4\\mathbf{j}$, find $\\left| \\mathbf{a} + \\mathbf{b} \\right|$ and the angle the resultant makes with the positive $x$-axis, to $1$ decimal place.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State how to add vectors",
          "workingLatex": "\\mathbf{a} + \\mathbf{b} = (a_x + b_x)\\mathbf{i} + (a_y + b_y)\\mathbf{j}",
          "explanation": "The resultant is found by adding the horizontal components together and the vertical components together, since $\\mathbf{i}$ and $\\mathbf{j}$ combine independently.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write down the two vectors",
          "workingLatex": "\\mathbf{a} = 3\\mathbf{i} + \\mathbf{j}, \\quad \\mathbf{b} = \\mathbf{i} + 4\\mathbf{j}",
          "explanation": "Identifying each component clearly avoids slips when adding.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Add the horizontal components",
          "workingLatex": "3 + 1 = 4",
          "explanation": "The $\\mathbf{i}$-part of the resultant is the sum of the two horizontal components.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Add the vertical components",
          "workingLatex": "1 + 4 = 5",
          "explanation": "The $\\mathbf{j}$-part of the resultant is the sum of the two vertical components.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Write the resultant",
          "workingLatex": "\\mathbf{a} + \\mathbf{b} = 4\\mathbf{i} + 5\\mathbf{j}",
          "explanation": "Collecting the results gives the single vector that represents the combined effect of $\\mathbf{a}$ and $\\mathbf{b}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Recall the magnitude formula",
          "workingLatex": "\\left| \\mathbf{v} \\right| = \\sqrt{x^{2} + y^{2}}",
          "explanation": "The length of a vector is found by Pythagoras from its horizontal and vertical components.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Substitute the resultant components",
          "workingLatex": "\\left| \\mathbf{a} + \\mathbf{b} \\right| = \\sqrt{4^{2} + 5^{2}} = \\sqrt{16 + 25}",
          "explanation": "Squaring each component and adding prepares us to take the square root.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Evaluate the magnitude",
          "workingLatex": "\\left| \\mathbf{a} + \\mathbf{b} \\right| = \\sqrt{41} \\approx 6.40",
          "explanation": "Since $41$ is not a perfect square, we leave it as $\\sqrt{41}$ exactly and give the decimal for size.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Set up the direction",
          "workingLatex": "\\tan\\theta = \\frac{y}{x} = \\frac{5}{4}",
          "explanation": "The direction of the resultant comes from the same $\\tan\\theta = y/x$ rule applied to its components.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Note the quadrant",
          "workingLatex": "x > 0, \\; y > 0 \\Rightarrow \\text{first quadrant}",
          "explanation": "Both resultant components are positive, so the inverse tangent gives the angle directly with no adjustment.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Find and round the angle",
          "workingLatex": "\\theta = \\arctan\\!\\left(\\tfrac{5}{4}\\right) = 51.3401\\ldots^{\\circ} \\approx 51.3^{\\circ}",
          "explanation": "Taking the inverse tangent and rounding to $1$ decimal place gives the direction of the resultant.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\left| \\mathbf{a} + \\mathbf{b} \\right| = \\sqrt{41} \\approx 6.40$, at $51.3^{\\circ}$ to the positive $x$-axis."
    }
  },
  {
    "id": "al.y1.pure.vectors.q048",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Vector basics",
    "subtopicId": "al.y1.pure.vectors",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "tags": [
      "vectors",
      "resultant",
      "magnitude",
      "direction"
    ],
    "questionText": "Given $\\mathbf{a} = 2\\mathbf{i} + 6\\mathbf{j}$ and $\\mathbf{b} = 4\\mathbf{i} - 2\\mathbf{j}$, find $\\left| \\mathbf{a} + \\mathbf{b} \\right|$ and the angle the resultant makes with the positive $x$-axis, to $1$ decimal place.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State how to add vectors",
          "workingLatex": "\\mathbf{a} + \\mathbf{b} = (a_x + b_x)\\mathbf{i} + (a_y + b_y)\\mathbf{j}",
          "explanation": "Add the horizontal components and the vertical components separately to build the resultant.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write down the two vectors",
          "workingLatex": "\\mathbf{a} = 2\\mathbf{i} + 6\\mathbf{j}, \\quad \\mathbf{b} = 4\\mathbf{i} - 2\\mathbf{j}",
          "explanation": "Note the negative vertical component of $\\mathbf{b}$, which will pull the resultant downward.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Add the horizontal components",
          "workingLatex": "2 + 4 = 6",
          "explanation": "The $\\mathbf{i}$-part of the resultant is the sum of the horizontal components.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Add the vertical components",
          "workingLatex": "6 + (-2) = 4",
          "explanation": "The $\\mathbf{j}$-part is the sum of the vertical components; the negative value of $\\mathbf{b}$ reduces the total.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Write the resultant",
          "workingLatex": "\\mathbf{a} + \\mathbf{b} = 6\\mathbf{i} + 4\\mathbf{j}",
          "explanation": "Both components are positive, so the resultant points into the first quadrant.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Recall the magnitude formula",
          "workingLatex": "\\left| \\mathbf{v} \\right| = \\sqrt{x^{2} + y^{2}}",
          "explanation": "The length comes from Pythagoras applied to the resultant's components.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Substitute the components",
          "workingLatex": "\\left| \\mathbf{a} + \\mathbf{b} \\right| = \\sqrt{6^{2} + 4^{2}} = \\sqrt{36 + 16} = \\sqrt{52}",
          "explanation": "Squaring and adding gives $52$ under the root.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Simplify the surd",
          "workingLatex": "\\sqrt{52} = \\sqrt{4 \\times 13} = 2\\sqrt{13} \\approx 7.21",
          "explanation": "Factoring out the perfect square $4$ gives the tidier exact form $2\\sqrt{13}$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Set up the direction",
          "workingLatex": "\\tan\\theta = \\frac{y}{x} = \\frac{4}{6} = \\frac{2}{3}",
          "explanation": "The direction of the resultant follows from $\\tan\\theta = y/x$, and the ratio simplifies neatly.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Note the quadrant",
          "workingLatex": "x > 0, \\; y > 0 \\Rightarrow \\text{first quadrant}",
          "explanation": "Both resultant components are positive, so the inverse tangent gives the angle directly.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Find and round the angle",
          "workingLatex": "\\theta = \\arctan\\!\\left(\\tfrac{2}{3}\\right) = 33.6900\\ldots^{\\circ} \\approx 33.7^{\\circ}",
          "explanation": "The inverse tangent, rounded to $1$ decimal place, gives the direction of the resultant.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\left| \\mathbf{a} + \\mathbf{b} \\right| = 2\\sqrt{13} \\approx 7.21$, at $33.7^{\\circ}$ to the positive $x$-axis."
    }
  },
  {
    "id": "al.y1.pure.vectors.q049",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Vector basics",
    "subtopicId": "al.y1.pure.vectors",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "value",
    "tags": [
      "vectors",
      "resultant",
      "magnitude",
      "direction"
    ],
    "questionText": "Given $\\mathbf{a} = 4\\mathbf{i} + 3\\mathbf{j}$ and $\\mathbf{b} = -\\mathbf{i} + \\mathbf{j}$, find $\\left| \\mathbf{a} + \\mathbf{b} \\right|$ and the angle the resultant makes with the positive $x$-axis, to $1$ decimal place.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State how to add vectors",
          "workingLatex": "\\mathbf{a} + \\mathbf{b} = (a_x + b_x)\\mathbf{i} + (a_y + b_y)\\mathbf{j}",
          "explanation": "Combine the horizontal components and the vertical components separately to form the resultant.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write down the two vectors",
          "workingLatex": "\\mathbf{a} = 4\\mathbf{i} + 3\\mathbf{j}, \\quad \\mathbf{b} = -\\mathbf{i} + \\mathbf{j}",
          "explanation": "Note the negative horizontal component of $\\mathbf{b}$, which will reduce the horizontal total.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Add the horizontal components",
          "workingLatex": "4 + (-1) = 3",
          "explanation": "The $\\mathbf{i}$-part of the resultant is the sum of the horizontal components.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Add the vertical components",
          "workingLatex": "3 + 1 = 4",
          "explanation": "The $\\mathbf{j}$-part of the resultant is the sum of the vertical components.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Write the resultant",
          "workingLatex": "\\mathbf{a} + \\mathbf{b} = 3\\mathbf{i} + 4\\mathbf{j}",
          "explanation": "The combined vector has both components positive, so it points into the first quadrant.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Recall the magnitude formula",
          "workingLatex": "\\left| \\mathbf{v} \\right| = \\sqrt{x^{2} + y^{2}}",
          "explanation": "The length is found by Pythagoras from the two components.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Evaluate the magnitude",
          "workingLatex": "\\left| \\mathbf{a} + \\mathbf{b} \\right| = \\sqrt{3^{2} + 4^{2}} = \\sqrt{9 + 16} = \\sqrt{25} = 5",
          "explanation": "This is the classic $3$-$4$-$5$ right-angled triangle, so the magnitude is exactly $5$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Set up the direction",
          "workingLatex": "\\tan\\theta = \\frac{y}{x} = \\frac{4}{3}",
          "explanation": "The direction of the resultant comes from the ratio of its vertical to horizontal components.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Note the quadrant",
          "workingLatex": "x > 0, \\; y > 0 \\Rightarrow \\text{first quadrant}",
          "explanation": "Both components are positive, so the inverse tangent gives the angle directly.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Find and round the angle",
          "workingLatex": "\\theta = \\arctan\\!\\left(\\tfrac{4}{3}\\right) = 53.1301\\ldots^{\\circ} \\approx 53.1^{\\circ}",
          "explanation": "The inverse tangent, rounded to $1$ decimal place, gives the direction of the resultant.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\left| \\mathbf{a} + \\mathbf{b} \\right| = 5$, at $53.1^{\\circ}$ to the positive $x$-axis."
    }
  },
  {
    "id": "al.y1.pure.vectors.q050",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Vector basics",
    "subtopicId": "al.y1.pure.vectors",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "tags": [
      "vectors",
      "resultant",
      "quadrant",
      "direction"
    ],
    "questionText": "Given $\\mathbf{a} = 2\\mathbf{i} + 5\\mathbf{j}$ and $\\mathbf{b} = -6\\mathbf{i} + \\mathbf{j}$, find $\\left| \\mathbf{a} + \\mathbf{b} \\right|$ and the angle the resultant makes with the positive $x$-axis, to $1$ decimal place.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State how to add vectors",
          "workingLatex": "\\mathbf{a} + \\mathbf{b} = (a_x + b_x)\\mathbf{i} + (a_y + b_y)\\mathbf{j}",
          "explanation": "Form the resultant by adding the horizontal components and the vertical components separately.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write down the two vectors",
          "workingLatex": "\\mathbf{a} = 2\\mathbf{i} + 5\\mathbf{j}, \\quad \\mathbf{b} = -6\\mathbf{i} + \\mathbf{j}",
          "explanation": "The large negative horizontal component of $\\mathbf{b}$ will dominate, tipping the resultant to the left.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Add the horizontal components",
          "workingLatex": "2 + (-6) = -4",
          "explanation": "The $\\mathbf{i}$-part of the resultant comes out negative, an early sign the resultant does not point into the first quadrant.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Add the vertical components",
          "workingLatex": "5 + 1 = 6",
          "explanation": "The $\\mathbf{j}$-part of the resultant is positive.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Write the resultant",
          "workingLatex": "\\mathbf{a} + \\mathbf{b} = -4\\mathbf{i} + 6\\mathbf{j}",
          "explanation": "A negative horizontal and positive vertical component place the resultant in the second quadrant.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Recall the magnitude formula",
          "workingLatex": "\\left| \\mathbf{v} \\right| = \\sqrt{x^{2} + y^{2}}",
          "explanation": "The length uses the squares of the components, so the negative sign does not affect the magnitude.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Evaluate the magnitude",
          "workingLatex": "\\left| \\mathbf{a} + \\mathbf{b} \\right| = \\sqrt{(-4)^{2} + 6^{2}} = \\sqrt{16 + 36} = \\sqrt{52} = 2\\sqrt{13} \\approx 7.21",
          "explanation": "Squaring removes the sign, and factoring out $4$ gives the tidy exact form $2\\sqrt{13}$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Determine the quadrant of the resultant",
          "workingLatex": "x < 0, \\; y > 0 \\Rightarrow \\text{second quadrant}",
          "explanation": "Because the horizontal component is negative and the vertical is positive, the direction angle lies between $90^{\\circ}$ and $180^{\\circ}$, so a plain inverse tangent would mislead.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Find the reference angle from the sizes",
          "workingLatex": "\\alpha = \\arctan\\!\\left(\\tfrac{6}{4}\\right) = \\arctan\\!\\left(\\tfrac{3}{2}\\right) = 56.3099\\ldots^{\\circ}",
          "explanation": "Using the magnitudes of the components gives the acute angle the resultant makes with the horizontal axis.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Adjust for the second quadrant",
          "workingLatex": "\\theta = 180^{\\circ} - 56.3099^{\\circ} = 123.6901\\ldots^{\\circ}",
          "explanation": "In the second quadrant we measure back from the negative $x$-axis, so we subtract the reference angle from $180^{\\circ}$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Round and check",
          "workingLatex": "\\theta \\approx 123.7^{\\circ}, \\quad 90^{\\circ} < 123.7^{\\circ} < 180^{\\circ}",
          "explanation": "Rounding to $1$ decimal place gives $123.7^{\\circ}$, which sits correctly between $90^{\\circ}$ and $180^{\\circ}$ for a second-quadrant resultant.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\left| \\mathbf{a} + \\mathbf{b} \\right| = 2\\sqrt{13} \\approx 7.21$, at $123.7^{\\circ}$ to the positive $x$-axis."
    }
  },
  {
    "id": "al.y1.pure.vectors.q051",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Vector basics",
    "subtopicId": "al.y1.pure.vectors",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "value",
    "tags": [
      "vectors",
      "parallel",
      "algebra"
    ],
    "questionText": "The vectors $\\mathbf{a} = (t+1)\\mathbf{i} + 4\\mathbf{j}$ and $\\mathbf{b} = 3\\mathbf{i} + (t+2)\\mathbf{j}$ are parallel. Find the possible values of $t$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the condition for two vectors to be parallel",
          "workingLatex": "\\mathbf{a} \\parallel \\mathbf{b} \\iff \\mathbf{a} = \\lambda\\mathbf{b}",
          "explanation": "Two vectors lie along the same line exactly when one is a scalar multiple of the other, so there must be some number $\\lambda$ that scales $\\mathbf{b}$ onto $\\mathbf{a}$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the condition out in components",
          "workingLatex": "(t+1)\\mathbf{i} + 4\\mathbf{j} = \\lambda\\left(3\\mathbf{i} + (t+2)\\mathbf{j}\\right)",
          "explanation": "Replacing $\\mathbf{a}$ and $\\mathbf{b}$ with their components lets us compare the $\\mathbf{i}$ and $\\mathbf{j}$ parts separately.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compare the i components",
          "workingLatex": "t + 1 = 3\\lambda",
          "explanation": "The $\\mathbf{i}$ parts on each side must match, giving our first equation linking $t$ and $\\lambda$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Compare the j components",
          "workingLatex": "4 = \\lambda(t+2)",
          "explanation": "The $\\mathbf{j}$ parts must also match, giving a second equation.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Make the scalar the subject of the first equation",
          "workingLatex": "\\lambda = \\frac{t+1}{3}",
          "explanation": "Isolating $\\lambda$ lets us eliminate it by substituting into the other equation.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute into the second equation",
          "workingLatex": "4 = \\frac{t+1}{3}\\,(t+2)",
          "explanation": "Putting this expression for $\\lambda$ into the $\\mathbf{j}$ equation leaves a single equation in $t$ only.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Clear the fraction",
          "workingLatex": "12 = (t+1)(t+2)",
          "explanation": "Multiplying both sides by $3$ removes the denominator and keeps the algebra tidy.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Expand the brackets",
          "workingLatex": "12 = t^{2} + 3t + 2",
          "explanation": "Expanding turns the product into a standard quadratic expression.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Rearrange into standard form",
          "workingLatex": "t^{2} + 3t - 10 = 0",
          "explanation": "Bringing every term to one side sets up the quadratic ready to factorise.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Factorise the quadratic",
          "workingLatex": "(t+5)(t-2) = 0",
          "explanation": "We look for two numbers that multiply to $-10$ and add to $3$, namely $+5$ and $-2$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Solve for t",
          "workingLatex": "t = -5 \\quad \\text{or} \\quad t = 2",
          "explanation": "Setting each factor to zero gives the two candidate values.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Check the case t = 2",
          "workingLatex": "\\mathbf{a} = 3\\mathbf{i} + 4\\mathbf{j}, \\quad \\mathbf{b} = 3\\mathbf{i} + 4\\mathbf{j}",
          "explanation": "Substituting $t=2$ back in shows what the vectors actually become.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Confirm parallel for t = 2",
          "workingLatex": "\\mathbf{a} = 1\\cdot\\mathbf{b} \\;\\Rightarrow\\; \\text{parallel}",
          "explanation": "Here $\\mathbf{a}$ equals $\\mathbf{b}$, which is the scalar multiple $\\lambda = 1$, so they are genuinely parallel.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Check the case t = -5",
          "workingLatex": "\\mathbf{a} = -4\\mathbf{i} + 4\\mathbf{j}, \\quad \\mathbf{b} = 3\\mathbf{i} - 3\\mathbf{j}",
          "explanation": "Substituting $t=-5$ gives the second pair of vectors to test.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "Confirm parallel for t = -5",
          "workingLatex": "\\mathbf{a} = -\\tfrac{4}{3}\\,\\mathbf{b} \\;\\Rightarrow\\; \\text{parallel}",
          "explanation": "Since $-\\tfrac{4}{3}(3\\mathbf{i}-3\\mathbf{j}) = -4\\mathbf{i}+4\\mathbf{j}$, the vectors point in exactly opposite directions and so are parallel.",
          "diagram": null
        }
      ],
      "finalAnswer": "$t = 2$ or $t = -5$"
    }
  },
  {
    "id": "al.y1.pure.vectors.q052",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Vector basics",
    "subtopicId": "al.y1.pure.vectors",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "value",
    "tags": [
      "vectors",
      "parallel",
      "quadratic"
    ],
    "questionText": "The vectors $\\mathbf{a} = (t+3)\\mathbf{i} + 2\\mathbf{j}$ and $\\mathbf{b} = 3\\mathbf{i} + (t-2)\\mathbf{j}$ are parallel. Find the two possible values of $t$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the parallel condition",
          "workingLatex": "\\mathbf{a} \\parallel \\mathbf{b} \\iff \\mathbf{a} = \\lambda\\mathbf{b}",
          "explanation": "Parallel vectors are scalar multiples of one another, so we search for a number $\\lambda$ linking them.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the condition in components",
          "workingLatex": "(t+3)\\mathbf{i} + 2\\mathbf{j} = \\lambda\\left(3\\mathbf{i} + (t-2)\\mathbf{j}\\right)",
          "explanation": "Expressing both sides in components allows the $\\mathbf{i}$ and $\\mathbf{j}$ parts to be matched separately.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compare the i components",
          "workingLatex": "t + 3 = 3\\lambda",
          "explanation": "Matching the horizontal parts gives our first relationship.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Compare the j components",
          "workingLatex": "2 = \\lambda(t-2)",
          "explanation": "Matching the vertical parts gives the second relationship.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Isolate the scalar",
          "workingLatex": "\\lambda = \\frac{t+3}{3}",
          "explanation": "Solving the first equation for $\\lambda$ prepares it for substitution.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute into the second equation",
          "workingLatex": "2 = \\frac{t+3}{3}\\,(t-2)",
          "explanation": "This removes $\\lambda$ and leaves an equation purely in $t$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Clear the fraction",
          "workingLatex": "6 = (t+3)(t-2)",
          "explanation": "Multiplying through by $3$ tidies the equation before expanding.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Expand the product",
          "workingLatex": "6 = t^{2} + t - 6",
          "explanation": "Expanding gives a quadratic in a familiar form.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Rearrange to standard form",
          "workingLatex": "t^{2} + t - 12 = 0",
          "explanation": "Collecting all terms on one side readies the quadratic for factorising.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Factorise",
          "workingLatex": "(t+4)(t-3) = 0",
          "explanation": "Two numbers multiplying to $-12$ and adding to $1$ are $+4$ and $-3$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Solve for t",
          "workingLatex": "t = -4 \\quad \\text{or} \\quad t = 3",
          "explanation": "Each bracket set to zero gives one of the two possible values.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Check the case t = 3",
          "workingLatex": "\\mathbf{a} = 6\\mathbf{i} + 2\\mathbf{j}, \\quad \\mathbf{b} = 3\\mathbf{i} + \\mathbf{j}",
          "explanation": "Substituting $t=3$ shows the vectors this value produces.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Confirm parallel for t = 3",
          "workingLatex": "\\mathbf{a} = 2\\mathbf{b} \\;\\Rightarrow\\; \\text{parallel}",
          "explanation": "Doubling $\\mathbf{b}$ gives $\\mathbf{a}$ exactly, so they share the same direction.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Check the case t = -4",
          "workingLatex": "\\mathbf{a} = -\\mathbf{i} + 2\\mathbf{j}, \\quad \\mathbf{b} = 3\\mathbf{i} - 6\\mathbf{j}",
          "explanation": "Substituting $t=-4$ gives the second pair to verify.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "Confirm parallel for t = -4",
          "workingLatex": "\\mathbf{b} = -3\\mathbf{a} \\;\\Rightarrow\\; \\text{parallel}",
          "explanation": "Since $-3(-\\mathbf{i}+2\\mathbf{j}) = 3\\mathbf{i}-6\\mathbf{j}$, the vectors are anti-parallel and hence parallel.",
          "diagram": null
        }
      ],
      "finalAnswer": "$t = 3$ or $t = -4$"
    }
  },
  {
    "id": "al.y1.pure.vectors.q053",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Vector basics",
    "subtopicId": "al.y1.pure.vectors",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "value",
    "tags": [
      "vectors",
      "parallel",
      "algebra"
    ],
    "questionText": "The vectors $\\mathbf{a} = (t-2)\\mathbf{i} + 3\\mathbf{j}$ and $\\mathbf{b} = \\mathbf{i} + (t-4)\\mathbf{j}$ are parallel. Find the possible values of $t$, and state the two vectors in each case.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the parallel condition",
          "workingLatex": "\\mathbf{a} \\parallel \\mathbf{b} \\iff \\mathbf{a} = \\lambda\\mathbf{b}",
          "explanation": "Being parallel means one vector is a scalar multiple of the other, so we introduce a scalar $\\lambda$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the condition in components",
          "workingLatex": "(t-2)\\mathbf{i} + 3\\mathbf{j} = \\lambda\\left(\\mathbf{i} + (t-4)\\mathbf{j}\\right)",
          "explanation": "Splitting into components lets each direction be handled on its own.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compare the i components",
          "workingLatex": "t - 2 = \\lambda",
          "explanation": "Because $\\mathbf{b}$ has an $\\mathbf{i}$ coefficient of $1$, the scalar $\\lambda$ is found immediately from this equation.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Compare the j components",
          "workingLatex": "3 = \\lambda(t-4)",
          "explanation": "Matching the vertical parts gives the second equation to satisfy.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute the scalar",
          "workingLatex": "3 = (t-2)(t-4)",
          "explanation": "Replacing $\\lambda$ with $t-2$ leaves an equation involving only $t$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Expand the product",
          "workingLatex": "3 = t^{2} - 6t + 8",
          "explanation": "Expanding gives the quadratic in expanded form.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Rearrange to standard form",
          "workingLatex": "t^{2} - 6t + 5 = 0",
          "explanation": "Moving the $3$ across leaves a quadratic equal to zero, ready to factorise.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Factorise",
          "workingLatex": "(t-1)(t-5) = 0",
          "explanation": "Numbers multiplying to $5$ and adding to $-6$ are $-1$ and $-5$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Solve for t",
          "workingLatex": "t = 1 \\quad \\text{or} \\quad t = 5",
          "explanation": "Each factor set to zero yields one solution.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the vectors when t = 1",
          "workingLatex": "\\mathbf{a} = -\\mathbf{i} + 3\\mathbf{j}, \\quad \\mathbf{b} = \\mathbf{i} - 3\\mathbf{j}",
          "explanation": "Substituting $t=1$ shows exactly which vectors this value produces.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Confirm parallel when t = 1",
          "workingLatex": "\\mathbf{a} = -\\mathbf{b} \\;\\Rightarrow\\; \\text{parallel (opposite directions)}",
          "explanation": "Here $\\mathbf{a}$ is exactly $-1$ times $\\mathbf{b}$, so they lie along the same line pointing opposite ways.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "State the vectors when t = 5",
          "workingLatex": "\\mathbf{a} = 3\\mathbf{i} + 3\\mathbf{j}, \\quad \\mathbf{b} = \\mathbf{i} + \\mathbf{j}",
          "explanation": "Substituting $t=5$ gives the second pair of vectors.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Confirm parallel when t = 5",
          "workingLatex": "\\mathbf{a} = 3\\mathbf{b} \\;\\Rightarrow\\; \\text{parallel (same direction)}",
          "explanation": "Tripling $\\mathbf{b}$ gives $\\mathbf{a}$, so both point the same way and are parallel.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Summarise the two cases",
          "workingLatex": "t = 1:\\ \\mathbf{a} = -\\mathbf{i} + 3\\mathbf{j};\\qquad t = 5:\\ \\mathbf{a} = 3\\mathbf{i} + 3\\mathbf{j}",
          "explanation": "Both values of $t$ are valid, each giving a genuinely parallel pair of vectors.",
          "diagram": null
        }
      ],
      "finalAnswer": "$t = 1$ giving $\\mathbf{a} = -\\mathbf{i} + 3\\mathbf{j},\\ \\mathbf{b} = \\mathbf{i} - 3\\mathbf{j}$; or $t = 5$ giving $\\mathbf{a} = 3\\mathbf{i} + 3\\mathbf{j},\\ \\mathbf{b} = \\mathbf{i} + \\mathbf{j}$"
    }
  },
  {
    "id": "al.y1.pure.vectors.q054",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Vector basics",
    "subtopicId": "al.y1.pure.vectors",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "vector",
    "tags": [
      "vectors",
      "magnitude",
      "unit-vector"
    ],
    "questionText": "Given $\\mathbf{a} = 4\\mathbf{i} + 9\\mathbf{j}$ and $\\mathbf{b} = \\mathbf{i} + 2\\mathbf{j}$, the vector $\\mathbf{p}$ is defined by $\\mathbf{p} = 2\\mathbf{a} - 3\\mathbf{b}$. Find $\\left| \\mathbf{p} \\right|$ and a unit vector in the direction of $\\mathbf{p}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write down the two given vectors",
          "workingLatex": "\\mathbf{a} = 4\\mathbf{i} + 9\\mathbf{j}, \\qquad \\mathbf{b} = \\mathbf{i} + 2\\mathbf{j}",
          "explanation": "Starting from the components of $\\mathbf{a}$ and $\\mathbf{b}$ keeps the arithmetic organised.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Scale a by 2",
          "workingLatex": "2\\mathbf{a} = 2(4\\mathbf{i} + 9\\mathbf{j}) = 8\\mathbf{i} + 18\\mathbf{j}",
          "explanation": "Multiplying a vector by a scalar stretches each component by that factor.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Scale b by 3",
          "workingLatex": "3\\mathbf{b} = 3(\\mathbf{i} + 2\\mathbf{j}) = 3\\mathbf{i} + 6\\mathbf{j}",
          "explanation": "The same idea gives $3\\mathbf{b}$, the second piece we need before combining.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Subtract the i components",
          "workingLatex": "(2\\mathbf{a} - 3\\mathbf{b})_{\\mathbf{i}} = 8 - 3 = 5",
          "explanation": "Vectors combine component by component, so the horizontal parts are subtracted directly.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Subtract the j components",
          "workingLatex": "(2\\mathbf{a} - 3\\mathbf{b})_{\\mathbf{j}} = 18 - 6 = 12",
          "explanation": "The vertical parts are subtracted in the same way.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the vector p",
          "workingLatex": "\\mathbf{p} = 5\\mathbf{i} + 12\\mathbf{j}",
          "explanation": "Combining the two results gives the single vector $\\mathbf{p}$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Write the magnitude formula",
          "workingLatex": "\\left| \\mathbf{p} \\right| = \\sqrt{p_{1}^{2} + p_{2}^{2}}",
          "explanation": "The magnitude is the length of the vector, found using Pythagoras on its components.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Substitute the components",
          "workingLatex": "\\left| \\mathbf{p} \\right| = \\sqrt{5^{2} + 12^{2}}",
          "explanation": "Placing the components of $\\mathbf{p}$ into the formula sets up the calculation.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Square each component",
          "workingLatex": "\\left| \\mathbf{p} \\right| = \\sqrt{25 + 144}",
          "explanation": "Squaring removes the signs and prepares the sum under the root.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Add under the root",
          "workingLatex": "\\left| \\mathbf{p} \\right| = \\sqrt{169}",
          "explanation": "Adding the squares gives a perfect square, which will simplify neatly.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Simplify the magnitude",
          "workingLatex": "\\left| \\mathbf{p} \\right| = 13",
          "explanation": "The square root of $169$ is exactly $13$, so $\\mathbf{p}$ has length $13$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Write the unit vector formula",
          "workingLatex": "\\hat{\\mathbf{p}} = \\frac{1}{\\left| \\mathbf{p} \\right|}\\,\\mathbf{p}",
          "explanation": "Dividing a vector by its own length produces a vector of length $1$ pointing the same way.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Substitute the magnitude and components",
          "workingLatex": "\\hat{\\mathbf{p}} = \\frac{1}{13}(5\\mathbf{i} + 12\\mathbf{j})",
          "explanation": "Scaling $\\mathbf{p}$ by $\\tfrac{1}{13}$ shrinks it to unit length without turning it.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "State the unit vector",
          "workingLatex": "\\hat{\\mathbf{p}} = \\tfrac{5}{13}\\mathbf{i} + \\tfrac{12}{13}\\mathbf{j}",
          "explanation": "Writing each component as a fraction of $13$ gives the final unit vector in the direction of $\\mathbf{p}$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\left| \\mathbf{p} \\right| = 13$ and $\\hat{\\mathbf{p}} = \\tfrac{5}{13}\\mathbf{i} + \\tfrac{12}{13}\\mathbf{j}$"
    }
  },
  {
    "id": "al.y1.pure.vectors.q055",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Vector basics",
    "subtopicId": "al.y1.pure.vectors",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "vector",
    "tags": [
      "vectors",
      "magnitude",
      "unit-vector"
    ],
    "questionText": "Given $\\mathbf{a} = 4\\mathbf{i} + 7\\mathbf{j}$ and $\\mathbf{b} = 2\\mathbf{i} + 3\\mathbf{j}$, let $\\mathbf{p} = 3\\mathbf{a} - 2\\mathbf{b}$. Find $\\left| \\mathbf{p} \\right|$, a unit vector in the direction of $\\mathbf{p}$, and the angle $\\mathbf{p}$ makes with $\\mathbf{i}$, giving the angle to $1$ decimal place.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write down the given vectors",
          "workingLatex": "\\mathbf{a} = 4\\mathbf{i} + 7\\mathbf{j}, \\qquad \\mathbf{b} = 2\\mathbf{i} + 3\\mathbf{j}",
          "explanation": "Listing the components first makes the scaling and subtraction easier to track.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Scale a by 3",
          "workingLatex": "3\\mathbf{a} = 12\\mathbf{i} + 21\\mathbf{j}",
          "explanation": "Each component of $\\mathbf{a}$ is multiplied by $3$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Scale b by 2",
          "workingLatex": "2\\mathbf{b} = 4\\mathbf{i} + 6\\mathbf{j}",
          "explanation": "Likewise each component of $\\mathbf{b}$ is doubled.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Subtract the i components",
          "workingLatex": "(3\\mathbf{a} - 2\\mathbf{b})_{\\mathbf{i}} = 12 - 4 = 8",
          "explanation": "The horizontal parts subtract to give the $\\mathbf{i}$ component of $\\mathbf{p}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Subtract the j components",
          "workingLatex": "(3\\mathbf{a} - 2\\mathbf{b})_{\\mathbf{j}} = 21 - 6 = 15",
          "explanation": "The vertical parts subtract to give the $\\mathbf{j}$ component.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the vector p",
          "workingLatex": "\\mathbf{p} = 8\\mathbf{i} + 15\\mathbf{j}",
          "explanation": "The two components together form the vector $\\mathbf{p}$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Write the magnitude formula",
          "workingLatex": "\\left| \\mathbf{p} \\right| = \\sqrt{p_{1}^{2} + p_{2}^{2}}",
          "explanation": "The length of a vector comes from Pythagoras applied to its components.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Substitute the components",
          "workingLatex": "\\left| \\mathbf{p} \\right| = \\sqrt{8^{2} + 15^{2}}",
          "explanation": "Substituting $8$ and $15$ sets up the numerical calculation.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Square the components",
          "workingLatex": "\\left| \\mathbf{p} \\right| = \\sqrt{64 + 225}",
          "explanation": "Squaring each component gives the two values to add.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Add under the root",
          "workingLatex": "\\left| \\mathbf{p} \\right| = \\sqrt{289}",
          "explanation": "The sum is a perfect square, so the root will be a whole number.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "State the magnitude",
          "workingLatex": "\\left| \\mathbf{p} \\right| = 17",
          "explanation": "Since $17^{2} = 289$, the length of $\\mathbf{p}$ is exactly $17$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Write the unit vector",
          "workingLatex": "\\hat{\\mathbf{p}} = \\frac{1}{17}(8\\mathbf{i} + 15\\mathbf{j}) = \\tfrac{8}{17}\\mathbf{i} + \\tfrac{15}{17}\\mathbf{j}",
          "explanation": "Dividing $\\mathbf{p}$ by its length gives a vector of length $1$ in the same direction.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Set up the angle with i",
          "workingLatex": "\\tan\\theta = \\frac{p_{2}}{p_{1}} = \\frac{15}{8}",
          "explanation": "The angle a vector makes with the $\\mathbf{i}$ direction comes from the ratio of its vertical to horizontal parts.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Take the inverse tangent",
          "workingLatex": "\\theta = \\arctan\\!\\left(\\frac{15}{8}\\right)",
          "explanation": "Both components are positive, so $\\mathbf{p}$ lies in the first quadrant and the acute inverse tangent is exactly the angle we want.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "Evaluate the angle",
          "workingLatex": "\\theta = 61.9^{\\circ}",
          "explanation": "Working this out and rounding gives the angle $\\mathbf{p}$ makes with $\\mathbf{i}$ to one decimal place.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\left| \\mathbf{p} \\right| = 17$, $\\hat{\\mathbf{p}} = \\tfrac{8}{17}\\mathbf{i} + \\tfrac{15}{17}\\mathbf{j}$, and the angle with $\\mathbf{i}$ is $61.9^{\\circ}$"
    }
  },
  {
    "id": "al.y1.pure.vectors.q056",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Vector basics",
    "subtopicId": "al.y1.pure.vectors",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "angle",
    "tags": [
      "vectors",
      "magnitude",
      "direction"
    ],
    "questionText": "Given $\\mathbf{a} = 9\\mathbf{i} + 18\\mathbf{j}$ and $\\mathbf{b} = \\mathbf{i} - 3\\mathbf{j}$, let $\\mathbf{p} = \\mathbf{a} - 2\\mathbf{b}$. Find $\\left| \\mathbf{p} \\right|$ and the angles that $\\mathbf{p}$ makes with $\\mathbf{i}$ and with $\\mathbf{j}$, giving each angle to $1$ decimal place.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write down the given vectors",
          "workingLatex": "\\mathbf{a} = 9\\mathbf{i} + 18\\mathbf{j}, \\qquad \\mathbf{b} = \\mathbf{i} - 3\\mathbf{j}",
          "explanation": "Recording the components clearly avoids sign slips when we subtract.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Scale b by 2",
          "workingLatex": "2\\mathbf{b} = 2(\\mathbf{i} - 3\\mathbf{j}) = 2\\mathbf{i} - 6\\mathbf{j}",
          "explanation": "Doubling $\\mathbf{b}$ gives the quantity we must remove from $\\mathbf{a}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Subtract the i components",
          "workingLatex": "(\\mathbf{a} - 2\\mathbf{b})_{\\mathbf{i}} = 9 - 2 = 7",
          "explanation": "The horizontal parts subtract directly.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Subtract the j components",
          "workingLatex": "(\\mathbf{a} - 2\\mathbf{b})_{\\mathbf{j}} = 18 - (-6) = 24",
          "explanation": "Subtracting a negative adds, so the vertical part grows to $24$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State the vector p",
          "workingLatex": "\\mathbf{p} = 7\\mathbf{i} + 24\\mathbf{j}",
          "explanation": "Combining the components gives $\\mathbf{p}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Write the magnitude formula",
          "workingLatex": "\\left| \\mathbf{p} \\right| = \\sqrt{p_{1}^{2} + p_{2}^{2}}",
          "explanation": "The length is found with Pythagoras on the two components.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Substitute the components",
          "workingLatex": "\\left| \\mathbf{p} \\right| = \\sqrt{7^{2} + 24^{2}}",
          "explanation": "Inserting $7$ and $24$ prepares the arithmetic.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Square the components",
          "workingLatex": "\\left| \\mathbf{p} \\right| = \\sqrt{49 + 576}",
          "explanation": "Squaring each gives the two numbers to sum.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Add under the root",
          "workingLatex": "\\left| \\mathbf{p} \\right| = \\sqrt{625}",
          "explanation": "The total under the root is a perfect square.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the magnitude",
          "workingLatex": "\\left| \\mathbf{p} \\right| = 25",
          "explanation": "Since $25^{2} = 625$, the length of $\\mathbf{p}$ is $25$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Set up the angle with i",
          "workingLatex": "\\tan\\alpha = \\frac{24}{7}",
          "explanation": "The angle from the $\\mathbf{i}$ direction uses the vertical part over the horizontal part.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Evaluate the angle with i",
          "workingLatex": "\\alpha = \\arctan\\!\\left(\\frac{24}{7}\\right) = 73.7^{\\circ}",
          "explanation": "Both components are positive, so this acute angle is measured directly from $\\mathbf{i}$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Relate the angle with j",
          "workingLatex": "\\beta = 90^{\\circ} - \\alpha",
          "explanation": "The $\\mathbf{i}$ and $\\mathbf{j}$ directions are perpendicular, so the two angles add to a right angle.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Evaluate the angle with j",
          "workingLatex": "\\beta = 90^{\\circ} - 73.7^{\\circ} = 16.3^{\\circ}",
          "explanation": "Subtracting from $90^{\\circ}$ gives the angle $\\mathbf{p}$ makes with $\\mathbf{j}$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\left| \\mathbf{p} \\right| = 25$; angle with $\\mathbf{i}$ is $73.7^{\\circ}$ and angle with $\\mathbf{j}$ is $16.3^{\\circ}$"
    }
  },
  {
    "id": "al.y1.pure.vectors.q057",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Vector basics",
    "subtopicId": "al.y1.pure.vectors",
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "vector",
    "tags": [
      "vectors",
      "magnitude",
      "parallel"
    ],
    "questionText": "The vector $\\mathbf{v}$ has magnitude $34$ and is parallel to $8\\mathbf{i} - 15\\mathbf{j}$. Find the two possible vectors $\\mathbf{v}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Decide on a strategy",
          "workingLatex": "\\mathbf{v} = k\\left(8\\mathbf{i} - 15\\mathbf{j}\\right)",
          "explanation": "A vector parallel to $8\\mathbf{i}-15\\mathbf{j}$ must be some scalar multiple of it, so we just need the right value of $k$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the magnitude of the direction vector",
          "workingLatex": "\\left| 8\\mathbf{i} - 15\\mathbf{j} \\right| = \\sqrt{8^{2} + (-15)^{2}}",
          "explanation": "To control the final length we first measure the length of the direction we are following.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Square the components",
          "workingLatex": "= \\sqrt{64 + 225}",
          "explanation": "Squaring removes the negative sign, since length is never negative.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Add under the root",
          "workingLatex": "= \\sqrt{289}",
          "explanation": "The sum is a perfect square, which keeps the numbers clean.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State the direction magnitude",
          "workingLatex": "\\left| 8\\mathbf{i} - 15\\mathbf{j} \\right| = 17",
          "explanation": "The direction vector has length $17$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Write the unit vector",
          "workingLatex": "\\hat{\\mathbf{u}} = \\tfrac{1}{17}\\left(8\\mathbf{i} - 15\\mathbf{j}\\right)",
          "explanation": "Dividing by $17$ gives a length-$1$ vector pointing along the required direction.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Find the scale factor for magnitude 34",
          "workingLatex": "\\frac{34}{17} = 2",
          "explanation": "To reach a length of $34$ we stretch the unit vector by the required magnitude, which here is $2$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Account for both parallel directions",
          "workingLatex": "\\mathbf{v} = \\pm 2\\left(8\\mathbf{i} - 15\\mathbf{j}\\right)",
          "explanation": "Parallel allows pointing the same way or the exact opposite way, so both signs are valid.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Compute the positive case",
          "workingLatex": "\\mathbf{v} = 16\\mathbf{i} - 30\\mathbf{j}",
          "explanation": "Taking the plus sign scales each component by $2$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Compute the negative case",
          "workingLatex": "\\mathbf{v} = -16\\mathbf{i} + 30\\mathbf{j}",
          "explanation": "The minus sign gives the vector pointing in the opposite direction.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Check the magnitude",
          "workingLatex": "\\sqrt{16^{2} + 30^{2}} = \\sqrt{256 + 900} = \\sqrt{1156} = 34",
          "explanation": "Both answers have length $34$, confirming they meet the required magnitude.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Confirm both are parallel",
          "workingLatex": "16\\mathbf{i} - 30\\mathbf{j} = 2(8\\mathbf{i} - 15\\mathbf{j}), \\quad -16\\mathbf{i} + 30\\mathbf{j} = -2(8\\mathbf{i} - 15\\mathbf{j})",
          "explanation": "Each answer is a clean scalar multiple of the direction vector, so both are genuinely parallel to it.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "State the two vectors",
          "workingLatex": "\\mathbf{v} = 16\\mathbf{i} - 30\\mathbf{j} \\quad \\text{or} \\quad \\mathbf{v} = -16\\mathbf{i} + 30\\mathbf{j}",
          "explanation": "These are the only two vectors that are both parallel to the given direction and of length $34$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\mathbf{v} = 16\\mathbf{i} - 30\\mathbf{j}$ or $\\mathbf{v} = -16\\mathbf{i} + 30\\mathbf{j}$"
    }
  },
  {
    "id": "al.y1.pure.vectors.q058",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Vector basics",
    "subtopicId": "al.y1.pure.vectors",
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "vector",
    "tags": [
      "vectors",
      "magnitude",
      "direction"
    ],
    "questionText": "Find the vector $\\mathbf{w}$ that has magnitude $50$, is parallel to $7\\mathbf{i} - 24\\mathbf{j}$, and points in the opposite direction to $7\\mathbf{i} - 24\\mathbf{j}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Decide on a strategy",
          "workingLatex": "\\mathbf{w} = k\\left(7\\mathbf{i} - 24\\mathbf{j}\\right)",
          "explanation": "Any vector parallel to $7\\mathbf{i}-24\\mathbf{j}$ is a scalar multiple of it; a negative $k$ will point the opposite way.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "diagram": null,
          "description": "Interpret the opposite-direction requirement",
          "workingLatex": "\\text{opposite direction} \\Rightarrow k < 0",
          "explanation": "Being parallel allows the scale factor $k$ to be positive or negative; requiring the opposite direction forces $k$ to be negative, which we apply at the end."
        },
        {
          "stepNumber": 3,
          "description": "Write the magnitude of the direction vector",
          "workingLatex": "\\left| 7\\mathbf{i} - 24\\mathbf{j} \\right| = \\sqrt{7^{2} + (-24)^{2}}",
          "explanation": "We first find how long the given direction vector is so we can rescale it.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Square the components",
          "workingLatex": "= \\sqrt{49 + 576}",
          "explanation": "Squaring each component makes both terms positive.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Add under the root",
          "workingLatex": "= \\sqrt{625}",
          "explanation": "The total is a perfect square, giving a whole-number length.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the direction magnitude",
          "workingLatex": "\\left| 7\\mathbf{i} - 24\\mathbf{j} \\right| = 25",
          "explanation": "The direction vector has length $25$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Write the unit vector",
          "workingLatex": "\\hat{\\mathbf{u}} = \\tfrac{1}{25}\\left(7\\mathbf{i} - 24\\mathbf{j}\\right)",
          "explanation": "Dividing by $25$ produces a length-$1$ vector along the same direction.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Find the scale factor for magnitude 50",
          "workingLatex": "\\frac{50}{25} = 2",
          "explanation": "To reach length $50$ we stretch the unit vector by a factor of $2$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Write the same-direction vector",
          "workingLatex": "2\\left(7\\mathbf{i} - 24\\mathbf{j}\\right) = 14\\mathbf{i} - 48\\mathbf{j}",
          "explanation": "Scaling by $+2$ gives the length-$50$ vector pointing the same way as the direction vector.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Reverse the direction",
          "workingLatex": "\\mathbf{w} = -\\left(14\\mathbf{i} - 48\\mathbf{j}\\right)",
          "explanation": "The question asks for the opposite direction, so we negate the vector we just found.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Simplify the result",
          "workingLatex": "\\mathbf{w} = -14\\mathbf{i} + 48\\mathbf{j}",
          "explanation": "Distributing the minus sign gives the final vector.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Check the magnitude",
          "workingLatex": "\\left| \\mathbf{w} \\right| = \\sqrt{(-14)^{2} + 48^{2}} = \\sqrt{196 + 2304} = \\sqrt{2500} = 50",
          "explanation": "The length is exactly $50$, matching the requirement.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Confirm the direction",
          "workingLatex": "\\mathbf{w} = -2\\left(7\\mathbf{i} - 24\\mathbf{j}\\right)",
          "explanation": "Being $-2$ times the direction vector, $\\mathbf{w}$ is parallel to it but points the opposite way, exactly as required.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\mathbf{w} = -14\\mathbf{i} + 48\\mathbf{j}$"
    }
  },
  {
    "id": "al.y1.pure.vectors.q059",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Vector basics",
    "subtopicId": "al.y1.pure.vectors",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "angle",
    "tags": [
      "vectors",
      "resultant",
      "bearing"
    ],
    "questionText": "A ship sails a displacement $\\mathbf{d}_1 = 10\\mathbf{i} + 5\\mathbf{j}$ km and then a displacement $\\mathbf{d}_2 = 14\\mathbf{i} - 12\\mathbf{j}$ km, where $\\mathbf{i}$ and $\\mathbf{j}$ point due east and due north respectively. Find the magnitude of the ship's resultant displacement and the bearing on which it lies, giving the bearing to $1$ decimal place.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up the axes and the resultant",
          "workingLatex": "\\mathbf{R} = \\mathbf{d}_1 + \\mathbf{d}_2",
          "explanation": "The overall displacement is found by adding the two legs of the journey, since displacements combine head to tail.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute the two displacements",
          "workingLatex": "\\mathbf{R} = (10\\mathbf{i} + 5\\mathbf{j}) + (14\\mathbf{i} - 12\\mathbf{j})",
          "explanation": "Writing both vectors in full prepares them for component-wise addition.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Add the east components",
          "workingLatex": "R_{\\mathbf{i}} = 10 + 14 = 24",
          "explanation": "Adding the eastward parts gives the total distance east.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Add the north components",
          "workingLatex": "R_{\\mathbf{j}} = 5 + (-12) = -7",
          "explanation": "The northward parts combine to $-7$, meaning the ship ends up $7$ km to the south overall.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State the resultant",
          "workingLatex": "\\mathbf{R} = 24\\mathbf{i} - 7\\mathbf{j}",
          "explanation": "The resultant points east and slightly south.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Write the magnitude formula",
          "workingLatex": "\\left| \\mathbf{R} \\right| = \\sqrt{R_{\\mathbf{i}}^{2} + R_{\\mathbf{j}}^{2}}",
          "explanation": "The straight-line distance from start to finish is the length of the resultant.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Substitute the components",
          "workingLatex": "\\left| \\mathbf{R} \\right| = \\sqrt{24^{2} + (-7)^{2}}",
          "explanation": "Inserting the components sets up the calculation.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Square and add",
          "workingLatex": "= \\sqrt{576 + 49} = \\sqrt{625}",
          "explanation": "The squares add to a perfect square, giving a tidy result.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the magnitude",
          "workingLatex": "\\left| \\mathbf{R} \\right| = 25 \\text{ km}",
          "explanation": "The ship is $25$ km from its start point in a straight line.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Identify the direction region",
          "workingLatex": "R_{\\mathbf{i}} > 0,\\quad R_{\\mathbf{j}} < 0 \\;\\Rightarrow\\; \\text{east and south}",
          "explanation": "A positive east part with a negative north part places the direction in the south-east, so the bearing lies between $090^{\\circ}$ and $180^{\\circ}$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Find the angle east of due south",
          "workingLatex": "\\tan\\varphi = \\frac{24}{7}",
          "explanation": "Measuring from the south line, the east distance $24$ over the south distance $7$ gives the reference angle.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Evaluate the reference angle",
          "workingLatex": "\\varphi = \\arctan\\!\\left(\\frac{24}{7}\\right) = 73.7^{\\circ}",
          "explanation": "This is how far the resultant is rotated from due south towards the east.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Convert to a bearing",
          "workingLatex": "\\text{bearing} = 180^{\\circ} - 73.7^{\\circ}",
          "explanation": "Due south is a bearing of $180^{\\circ}$, and rotating back towards the east reduces the bearing by the reference angle.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "State the bearing",
          "workingLatex": "\\text{bearing} = 106.3^{\\circ}",
          "explanation": "Bearings are measured clockwise from north, giving the final direction of the resultant displacement.",
          "diagram": null
        }
      ],
      "finalAnswer": "The resultant displacement has magnitude $25$ km on a bearing of $106.3^{\\circ}$"
    }
  },
  {
    "id": "al.y1.pure.vectors.q060",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Vector basics",
    "subtopicId": "al.y1.pure.vectors",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "angle",
    "tags": [
      "vectors",
      "resultant",
      "direction"
    ],
    "questionText": "Two forces $\\mathbf{F}_1 = 12\\mathbf{i} + 9\\mathbf{j}$ N and $\\mathbf{F}_2 = 8\\mathbf{i} + 12\\mathbf{j}$ N act on a particle. Find the magnitude of the resultant force and the angle it makes with $\\mathbf{i}$, giving the angle to $1$ decimal place.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write the resultant as a sum",
          "workingLatex": "\\mathbf{R} = \\mathbf{F}_1 + \\mathbf{F}_2",
          "explanation": "The net effect of several forces on a particle is their vector sum.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute the two forces",
          "workingLatex": "\\mathbf{R} = (12\\mathbf{i} + 9\\mathbf{j}) + (8\\mathbf{i} + 12\\mathbf{j})",
          "explanation": "Writing both forces out prepares them for component-wise addition.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Add the i components",
          "workingLatex": "R_{\\mathbf{i}} = 12 + 8 = 20",
          "explanation": "The horizontal parts of the forces add together.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Add the j components",
          "workingLatex": "R_{\\mathbf{j}} = 9 + 12 = 21",
          "explanation": "The vertical parts add in the same way.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State the resultant",
          "workingLatex": "\\mathbf{R} = 20\\mathbf{i} + 21\\mathbf{j}",
          "explanation": "The combined force has these components.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Write the magnitude formula",
          "workingLatex": "\\left| \\mathbf{R} \\right| = \\sqrt{R_{\\mathbf{i}}^{2} + R_{\\mathbf{j}}^{2}}",
          "explanation": "The size of the resultant force is the length of the resultant vector.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Substitute the components",
          "workingLatex": "\\left| \\mathbf{R} \\right| = \\sqrt{20^{2} + 21^{2}}",
          "explanation": "Inserting the components sets up the arithmetic.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Square the components",
          "workingLatex": "= \\sqrt{400 + 441}",
          "explanation": "Squaring each component gives the values to add.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Add under the root",
          "workingLatex": "= \\sqrt{841}",
          "explanation": "The sum is a perfect square, so the root is exact.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the magnitude",
          "workingLatex": "\\left| \\mathbf{R} \\right| = 29 \\text{ N}",
          "explanation": "Since $29^{2} = 841$, the resultant force has magnitude $29$ N.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Identify the direction region",
          "workingLatex": "R_{\\mathbf{i}} > 0,\\quad R_{\\mathbf{j}} > 0 \\;\\Rightarrow\\; \\text{first quadrant}",
          "explanation": "Both components are positive, so the resultant points up and to the right and the angle with $\\mathbf{i}$ is acute.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Set up the angle with i",
          "workingLatex": "\\tan\\theta = \\frac{R_{\\mathbf{j}}}{R_{\\mathbf{i}}} = \\frac{21}{20}",
          "explanation": "The angle above the $\\mathbf{i}$ direction comes from the vertical part over the horizontal part.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Take the inverse tangent",
          "workingLatex": "\\theta = \\arctan\\!\\left(\\frac{21}{20}\\right)",
          "explanation": "Inverting the tangent recovers the angle itself.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Evaluate the angle",
          "workingLatex": "\\theta = 46.4^{\\circ}",
          "explanation": "Rounding to one decimal place gives the angle the resultant force makes with $\\mathbf{i}$.",
          "diagram": null
        }
      ],
      "finalAnswer": "The resultant force has magnitude $29$ N and makes an angle of $46.4^{\\circ}$ with $\\mathbf{i}$"
    }
  },
  {
    "id": "al.y1.pure.vectors.q061",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Vector basics",
    "subtopicId": "al.y1.pure.vectors",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "value",
    "tags": [
      "vectors",
      "velocity",
      "magnitude",
      "direction"
    ],
    "questionText": "A particle moves with constant velocity $\\mathbf{v} = (6\\mathbf{i} - 8\\mathbf{j})$ m/s. Find its speed, the angle its direction of motion makes with $\\mathbf{i}$, and the distance it travels in $5$ seconds.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recognise that speed is the magnitude of the velocity",
          "workingLatex": "\\text{speed} = \\left| \\mathbf{v} \\right| = \\left| 6\\mathbf{i} - 8\\mathbf{j} \\right|",
          "explanation": "Speed is how fast the particle moves regardless of direction, so it is the size (magnitude) of the velocity vector $\\mathbf{v}$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Apply Pythagoras to the components",
          "workingLatex": "\\left| \\mathbf{v} \\right| = \\sqrt{6^2 + (-8)^2}",
          "explanation": "The $\\mathbf{i}$ and $\\mathbf{j}$ components form a right-angled triangle, so the length of the vector is the square root of the sum of the squares of the components.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Square each component",
          "workingLatex": "= \\sqrt{36 + 64}",
          "explanation": "Squaring makes both terms positive, so the negative sign on the $\\mathbf{j}$ component does not affect the size.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Add the squares",
          "workingLatex": "= \\sqrt{100}",
          "explanation": "Adding gives the square of the total length, ready to root.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Take the square root to find the speed",
          "workingLatex": "= 10 \\text{ m/s}",
          "explanation": "This is a $3$-$4$-$5$ triangle scaled by $2$, so the length comes out as a clean $10$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Set up the angle to the i-direction",
          "workingLatex": "\\tan\\theta = \\frac{\\text{opposite}}{\\text{adjacent}} = \\frac{8}{6}",
          "explanation": "For the acute angle to $\\mathbf{i}$, the $\\mathbf{j}$ magnitude ($8$) is the opposite side and the $\\mathbf{i}$ magnitude ($6$) is the adjacent side of the right-angled triangle.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Take the inverse tangent",
          "workingLatex": "\\theta = \\arctan\\left( \\frac{8}{6} \\right) = \\arctan\\left( \\frac{4}{3} \\right)",
          "explanation": "The fraction simplifies to $\\tfrac{4}{3}$, and taking $\\arctan$ undoes the tangent to isolate the angle.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Evaluate the angle",
          "workingLatex": "\\theta = 53.13^{\\circ} \\; (2 \\text{ d.p.})",
          "explanation": "Evaluating on a calculator gives the acute angle the velocity makes with $\\mathbf{i}$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Use the sign of the j-component to fix the direction",
          "workingLatex": "\\mathbf{j}\\text{-component} = -8 < 0 \\Rightarrow \\text{motion is below the } \\mathbf{i}\\text{-axis}",
          "explanation": "Because the $\\mathbf{j}$ component is negative, the velocity points below the $\\mathbf{i}$ direction, so the angle is measured clockwise from $\\mathbf{i}$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the direction clearly",
          "workingLatex": "\\text{direction: } 53.1^{\\circ} \\text{ below } \\mathbf{i}",
          "explanation": "Stating the angle together with 'below $\\mathbf{i}$' removes any ambiguity about which way the particle heads.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Relate distance to constant speed",
          "workingLatex": "\\text{distance} = \\text{speed} \\times \\text{time}",
          "explanation": "With constant velocity the particle covers equal distances in equal times, so distance is simply speed multiplied by time.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Substitute the known values",
          "workingLatex": "= 10 \\times 5",
          "explanation": "The speed is $10$ m/s and the time is $5$ s.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Evaluate the distance",
          "workingLatex": "= 50 \\text{ m}",
          "explanation": "This is the total path length travelled in $5$ seconds.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Check via the displacement vector",
          "workingLatex": "\\left| 5(6\\mathbf{i} - 8\\mathbf{j}) \\right| = \\left| 30\\mathbf{i} - 40\\mathbf{j} \\right| = \\sqrt{900 + 1600} = \\sqrt{2500} = 50 \\; \\checkmark",
          "explanation": "Multiplying the velocity by $5$ seconds gives the displacement, and its magnitude confirms the distance of $50$ m.",
          "diagram": null
        }
      ],
      "finalAnswer": "Speed $= 10$ m/s, direction $53.1^{\\circ}$ below $\\mathbf{i}$, and distance $= 50$ m."
    }
  },
  {
    "id": "al.y1.pure.vectors.q062",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Vector basics",
    "subtopicId": "al.y1.pure.vectors",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "value",
    "tags": [
      "vectors",
      "velocity",
      "bearing",
      "magnitude"
    ],
    "questionText": "A boat sails with constant velocity $(5\\mathbf{i} + 12\\mathbf{j})$ m/s, where $\\mathbf{i}$ points due east and $\\mathbf{j}$ points due north. Find the boat's speed, the bearing on which it sails, and its distance from the start after $8$ seconds.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify speed as the magnitude of the velocity",
          "workingLatex": "\\text{speed} = \\left| \\mathbf{v} \\right|, \\quad \\mathbf{v} = 5\\mathbf{i} + 12\\mathbf{j}",
          "explanation": "The speed is the size of the velocity vector, found from its $\\mathbf{i}$ and $\\mathbf{j}$ components.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Apply Pythagoras to the components",
          "workingLatex": "\\left| \\mathbf{v} \\right| = \\sqrt{5^2 + 12^2}",
          "explanation": "The magnitude of a 2D vector is the square root of the sum of the squares of its components.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Square each component",
          "workingLatex": "= \\sqrt{25 + 144}",
          "explanation": "Squaring the components prepares them for adding under the root.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Add the squares",
          "workingLatex": "= \\sqrt{169}",
          "explanation": "The sum $169$ is a perfect square, hinting at a clean answer.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Take the root to find the speed",
          "workingLatex": "= 13 \\text{ m/s}",
          "explanation": "This uses the $5$-$12$-$13$ Pythagorean triple, giving an exact speed of $13$ m/s.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Recall how bearings are measured",
          "workingLatex": "\\text{north} = \\mathbf{j}, \\quad \\text{east} = \\mathbf{i}",
          "explanation": "A bearing is the angle turned clockwise from north, so we need the angle between the velocity and the $\\mathbf{j}$ (north) direction.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Set up the bearing angle with tangent",
          "workingLatex": "\\tan\\alpha = \\frac{\\text{east component}}{\\text{north component}} = \\frac{5}{12}",
          "explanation": "Measuring clockwise from north, the east ($\\mathbf{i}$) part is opposite the angle and the north ($\\mathbf{j}$) part is adjacent.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Take the inverse tangent",
          "workingLatex": "\\alpha = \\arctan\\left( \\frac{5}{12} \\right)",
          "explanation": "Inverting the tangent isolates the angle measured from north.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Evaluate the angle",
          "workingLatex": "\\alpha = 22.62^{\\circ} \\; (2 \\text{ d.p.})",
          "explanation": "This is the angle east of north for the boat's heading.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Check the quadrant of the direction",
          "workingLatex": "5 > 0, \\; 12 > 0 \\Rightarrow \\text{north-east quadrant}",
          "explanation": "Both components are positive, so the boat heads between north and east, meaning the bearing is measured directly from north.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Write the bearing in three-figure form",
          "workingLatex": "\\text{bearing} = 022.6^{\\circ}",
          "explanation": "Bearings are always written with three figures, so $22.6^{\\circ}$ becomes $022.6^{\\circ}$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Relate distance to constant speed",
          "workingLatex": "\\text{distance} = \\text{speed} \\times \\text{time} = 13 \\times 8",
          "explanation": "At constant speed the distance travelled is speed multiplied by the time elapsed.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Evaluate the distance",
          "workingLatex": "= 104 \\text{ m}",
          "explanation": "This is how far the boat is from its starting point after $8$ seconds.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Check via the displacement vector",
          "workingLatex": "\\left| 8\\mathbf{v} \\right| = \\sqrt{40^2 + 96^2} = \\sqrt{1600 + 9216} = \\sqrt{10816} = 104 \\; \\checkmark",
          "explanation": "The displacement after $8$ s is $8\\mathbf{v} = 40\\mathbf{i} + 96\\mathbf{j}$, and its magnitude confirms the distance of $104$ m.",
          "diagram": null
        }
      ],
      "finalAnswer": "Speed $= 13$ m/s, bearing $= 022.6^{\\circ}$, and distance $= 104$ m."
    }
  },
  {
    "id": "al.y1.pure.vectors.q063",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Vector basics",
    "subtopicId": "al.y1.pure.vectors",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "value",
    "tags": [
      "vectors",
      "displacement",
      "resultant",
      "magnitude"
    ],
    "questionText": "A remote-controlled car travels in a straight line from $O$ with displacement $(8\\mathbf{i} + 6\\mathbf{j})$ m to a point $A$, and then with a further displacement $(4\\mathbf{i} - 11\\mathbf{j})$ m from $A$ to a point $B$. Find the distance $OB$ and the angle that $\\overrightarrow{OB}$ makes with $\\mathbf{i}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Express the overall displacement as a sum",
          "workingLatex": "\\overrightarrow{OB} = \\overrightarrow{OA} + \\overrightarrow{AB}",
          "explanation": "Travelling first from $O$ to $A$ and then from $A$ to $B$, the two legs join tip-to-tail, so the overall displacement from $O$ to $B$ is their vector sum.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute the two displacement vectors",
          "workingLatex": "\\overrightarrow{OB} = (8\\mathbf{i} + 6\\mathbf{j}) + (4\\mathbf{i} - 11\\mathbf{j})",
          "explanation": "We add the two given legs to combine the whole journey into a single vector.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Add the i-components",
          "workingLatex": "\\mathbf{i}: \\; 8 + 4 = 12",
          "explanation": "Components in the same direction add straightforwardly.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Add the j-components",
          "workingLatex": "\\mathbf{j}: \\; 6 + (-11) = -5",
          "explanation": "The second leg points downward in $\\mathbf{j}$, so its $-11$ reduces the total $\\mathbf{j}$ component to $-5$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Write the resultant displacement",
          "workingLatex": "\\overrightarrow{OB} = 12\\mathbf{i} - 5\\mathbf{j}",
          "explanation": "This single vector describes the straight-line displacement from $O$ to $B$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Distance OB is the magnitude of this vector",
          "workingLatex": "OB = \\left| 12\\mathbf{i} - 5\\mathbf{j} \\right| = \\sqrt{12^2 + (-5)^2}",
          "explanation": "The distance between $O$ and $B$ is the length of $\\overrightarrow{OB}$, found by Pythagoras.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Square the components",
          "workingLatex": "= \\sqrt{144 + 25}",
          "explanation": "Squaring removes the negative sign and prepares the sum.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Add the squares",
          "workingLatex": "= \\sqrt{169}",
          "explanation": "The sum is a perfect square, again a $5$-$12$-$13$ triple in disguise.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Take the root",
          "workingLatex": "= 13 \\text{ m}",
          "explanation": "The distance from $O$ to $B$ is exactly $13$ m.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Set up the angle with i using tangent",
          "workingLatex": "\\tan\\theta = \\frac{5}{12}",
          "explanation": "For the acute angle to $\\mathbf{i}$, the $\\mathbf{j}$ magnitude ($5$) is opposite and the $\\mathbf{i}$ magnitude ($12$) is adjacent.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Take the inverse tangent",
          "workingLatex": "\\theta = \\arctan\\left( \\frac{5}{12} \\right) = 22.62^{\\circ}",
          "explanation": "Evaluating gives the acute angle the displacement makes with $\\mathbf{i}$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Fix the direction from the sign of the j-component",
          "workingLatex": "\\mathbf{j}\\text{-component} = -5 < 0 \\Rightarrow \\text{below } \\mathbf{i}",
          "explanation": "The negative $\\mathbf{j}$ component means $\\overrightarrow{OB}$ points below the $\\mathbf{i}$ direction.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "State the angle clearly",
          "workingLatex": "\\text{angle} = 22.6^{\\circ} \\text{ below } \\mathbf{i}",
          "explanation": "Including 'below $\\mathbf{i}$' makes the direction unambiguous.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Confirm the triple",
          "workingLatex": "12^2 + 5^2 = 144 + 25 = 169 = 13^2 \\; \\checkmark",
          "explanation": "The components fit a right-angled triangle with hypotenuse $13$, confirming the distance.",
          "diagram": null
        }
      ],
      "finalAnswer": "$OB = 13$ m and $\\overrightarrow{OB}$ makes $22.6^{\\circ}$ below $\\mathbf{i}$."
    }
  },
  {
    "id": "al.y1.pure.vectors.q064",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Vector basics",
    "subtopicId": "al.y1.pure.vectors",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "value",
    "tags": [
      "vectors",
      "simultaneous",
      "components",
      "scalars"
    ],
    "questionText": "Given $\\mathbf{a} = 2\\mathbf{i} + 3\\mathbf{j}$ and $\\mathbf{b} = \\mathbf{i} - 2\\mathbf{j}$, find scalars $s$ and $t$ such that $s\\mathbf{a} + t\\mathbf{b} = 4\\mathbf{i} + 13\\mathbf{j}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write the combination in component form",
          "workingLatex": "s(2\\mathbf{i} + 3\\mathbf{j}) + t(\\mathbf{i} - 2\\mathbf{j}) = (2s + t)\\mathbf{i} + (3s - 2t)\\mathbf{j}",
          "explanation": "Collecting the $\\mathbf{i}$ and $\\mathbf{j}$ parts separately lets us compare with the target vector component by component.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Set equal to the target vector",
          "workingLatex": "(2s + t)\\mathbf{i} + (3s - 2t)\\mathbf{j} = 4\\mathbf{i} + 13\\mathbf{j}",
          "explanation": "We want the combination to match the target exactly, so we line the two vectors up.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Equate the i-components",
          "workingLatex": "2s + t = 4 \\quad (1)",
          "explanation": "Two equal vectors must have equal $\\mathbf{i}$ parts, giving the first equation.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Equate the j-components",
          "workingLatex": "3s - 2t = 13 \\quad (2)",
          "explanation": "Likewise their $\\mathbf{j}$ parts must match, giving the second equation.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Make t the subject of equation (1)",
          "workingLatex": "t = 4 - 2s",
          "explanation": "Isolating $t$ lets us substitute it into the other equation and reduce to one unknown.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute into equation (2)",
          "workingLatex": "3s - 2(4 - 2s) = 13",
          "explanation": "Replacing $t$ turns equation (2) into an equation in $s$ alone.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Expand the bracket",
          "workingLatex": "3s - 8 + 4s = 13",
          "explanation": "Multiplying $-2$ through the bracket, and note $-2 \\times -2s = +4s$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Collect like terms",
          "workingLatex": "7s - 8 = 13",
          "explanation": "Combining the $s$ terms simplifies the equation.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Add 8 to both sides",
          "workingLatex": "7s = 21",
          "explanation": "Isolating the $s$ term ready to divide.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Solve for s",
          "workingLatex": "s = 3",
          "explanation": "Dividing both sides by $7$ gives the first scalar.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Back-substitute to find t",
          "workingLatex": "t = 4 - 2(3) = 4 - 6 = -2",
          "explanation": "Using $t = 4 - 2s$ with $s = 3$ gives the second scalar.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Check in equation (1)",
          "workingLatex": "2(3) + (-2) = 6 - 2 = 4 \\; \\checkmark",
          "explanation": "Substituting both values reproduces the target $\\mathbf{i}$ component.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Check in equation (2)",
          "workingLatex": "3(3) - 2(-2) = 9 + 4 = 13 \\; \\checkmark",
          "explanation": "The values also reproduce the target $\\mathbf{j}$ component, confirming the solution.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "State the scalars",
          "workingLatex": "s = 3, \\quad t = -2",
          "explanation": "These are the unique scalars that build the target vector from $\\mathbf{a}$ and $\\mathbf{b}$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$s = 3$ and $t = -2$."
    }
  },
  {
    "id": "al.y1.pure.vectors.q065",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Vector basics",
    "subtopicId": "al.y1.pure.vectors",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "value",
    "tags": [
      "vectors",
      "simultaneous",
      "scalars",
      "components"
    ],
    "questionText": "Vectors are given by $\\mathbf{p} = 4\\mathbf{i} - \\mathbf{j}$ and $\\mathbf{q} = -2\\mathbf{i} + 3\\mathbf{j}$. Find the values of the scalars $\\lambda$ and $\\mu$ for which $\\lambda\\mathbf{p} + \\mu\\mathbf{q} = 14\\mathbf{i} - 11\\mathbf{j}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write the combination in component form",
          "workingLatex": "\\lambda(4\\mathbf{i} - \\mathbf{j}) + \\mu(-2\\mathbf{i} + 3\\mathbf{j}) = (4\\lambda - 2\\mu)\\mathbf{i} + (-\\lambda + 3\\mu)\\mathbf{j}",
          "explanation": "Grouping the $\\mathbf{i}$ and $\\mathbf{j}$ parts separately lets us match the target component by component.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Set equal to the target vector",
          "workingLatex": "(4\\lambda - 2\\mu)\\mathbf{i} + (-\\lambda + 3\\mu)\\mathbf{j} = 14\\mathbf{i} - 11\\mathbf{j}",
          "explanation": "We require the built vector to equal the target exactly.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Equate the i-components",
          "workingLatex": "4\\lambda - 2\\mu = 14 \\quad (1)",
          "explanation": "Equal vectors share equal $\\mathbf{i}$ parts.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Equate the j-components",
          "workingLatex": "-\\lambda + 3\\mu = -11 \\quad (2)",
          "explanation": "Equal vectors also share equal $\\mathbf{j}$ parts.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify equation (1) by dividing by 2",
          "workingLatex": "2\\lambda - \\mu = 7 \\quad (1')",
          "explanation": "Smaller coefficients make the algebra cleaner and reduce arithmetic slips.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Make mu the subject",
          "workingLatex": "\\mu = 2\\lambda - 7",
          "explanation": "Isolating $\\mu$ prepares it for substitution into equation (2).",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Substitute into equation (2)",
          "workingLatex": "-\\lambda + 3(2\\lambda - 7) = -11",
          "explanation": "Replacing $\\mu$ leaves a single equation in $\\lambda$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Expand the bracket",
          "workingLatex": "-\\lambda + 6\\lambda - 21 = -11",
          "explanation": "Multiplying $3$ through the bracket.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Collect like terms",
          "workingLatex": "5\\lambda - 21 = -11",
          "explanation": "Combining the $\\lambda$ terms tidies the equation.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Add 21 to both sides",
          "workingLatex": "5\\lambda = 10",
          "explanation": "Isolating the $\\lambda$ term ready to divide.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Solve for lambda",
          "workingLatex": "\\lambda = 2",
          "explanation": "Dividing by $5$ gives the first scalar.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Back-substitute to find mu",
          "workingLatex": "\\mu = 2(2) - 7 = 4 - 7 = -3",
          "explanation": "Using $\\mu = 2\\lambda - 7$ with $\\lambda = 2$ gives the second scalar.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Check in equation (1)",
          "workingLatex": "4(2) - 2(-3) = 8 + 6 = 14 \\; \\checkmark",
          "explanation": "The values reproduce the target $\\mathbf{i}$ component.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Check in equation (2)",
          "workingLatex": "-(2) + 3(-3) = -2 - 9 = -11 \\; \\checkmark",
          "explanation": "They also reproduce the target $\\mathbf{j}$ component, confirming the solution.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "State the scalars",
          "workingLatex": "\\lambda = 2, \\quad \\mu = -3",
          "explanation": "These are the unique scalars that build the target vector from $\\mathbf{p}$ and $\\mathbf{q}$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\lambda = 2$ and $\\mu = -3$."
    }
  },
  {
    "id": "al.y1.pure.vectors.q066",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Vector basics",
    "subtopicId": "al.y1.pure.vectors",
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "value",
    "tags": [
      "vectors",
      "magnitude",
      "quadratic",
      "components"
    ],
    "questionText": "Given that $\\left| x\\mathbf{i} + (x+1)\\mathbf{j} \\right| = 5$, find the possible values of $x$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the components",
          "workingLatex": "\\mathbf{i}\\text{-part} = x, \\quad \\mathbf{j}\\text{-part} = x + 1",
          "explanation": "Both components depend on the same unknown $x$, so the magnitude will lead to an equation in $x$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the magnitude condition",
          "workingLatex": "\\left| x\\mathbf{i} + (x+1)\\mathbf{j} \\right| = \\sqrt{x^2 + (x+1)^2} = 5",
          "explanation": "The magnitude is the square root of the sum of the squares of the components, and we are told this equals $5$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Square both sides",
          "workingLatex": "x^2 + (x+1)^2 = 25",
          "explanation": "Squaring removes the root; both sides are non-negative so no solutions are introduced or lost.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Expand the squared bracket",
          "workingLatex": "x^2 + x^2 + 2x + 1 = 25",
          "explanation": "Using $(x+1)^2 = x^2 + 2x + 1$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Collect like terms",
          "workingLatex": "2x^2 + 2x + 1 = 25",
          "explanation": "Combining the two $x^2$ terms.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Rearrange to standard quadratic form",
          "workingLatex": "2x^2 + 2x - 24 = 0",
          "explanation": "Bringing everything to one side sets up a solvable quadratic.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Divide through by 2",
          "workingLatex": "x^2 + x - 12 = 0",
          "explanation": "Dividing by the common factor $2$ makes factorising easier.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Factorise the quadratic",
          "workingLatex": "(x + 4)(x - 3) = 0",
          "explanation": "We need two numbers multiplying to $-12$ and adding to $+1$, namely $+4$ and $-3$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Solve each factor",
          "workingLatex": "x = -4 \\quad \\text{or} \\quad x = 3",
          "explanation": "Setting each bracket to zero gives the two candidate values.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Confirm both roots are valid",
          "workingLatex": "\\text{both roots give real vectors of length } 5 \\Rightarrow \\text{both valid}",
          "explanation": "The magnitude equation is satisfied by each value, so neither should be discarded.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Check x = 3",
          "workingLatex": "\\left| 3\\mathbf{i} + 4\\mathbf{j} \\right| = \\sqrt{9 + 16} = \\sqrt{25} = 5 \\; \\checkmark",
          "explanation": "With $x = 3$ the vector is $3\\mathbf{i} + 4\\mathbf{j}$, a $3$-$4$-$5$ triangle.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Check x = -4",
          "workingLatex": "\\left| -4\\mathbf{i} - 3\\mathbf{j} \\right| = \\sqrt{16 + 9} = \\sqrt{25} = 5 \\; \\checkmark",
          "explanation": "With $x = -4$ the vector is $-4\\mathbf{i} - 3\\mathbf{j}$, also of length $5$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "State both solutions",
          "workingLatex": "x = 3 \\quad \\text{or} \\quad x = -4",
          "explanation": "Both values of $x$ produce a vector of magnitude $5$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x = 3$ or $x = -4$."
    }
  },
  {
    "id": "al.y1.pure.vectors.q067",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Vector basics",
    "subtopicId": "al.y1.pure.vectors",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "value",
    "tags": [
      "vectors",
      "magnitude",
      "subtraction",
      "quadratic"
    ],
    "questionText": "Vectors are given by $\\mathbf{a} = x\\mathbf{i} + 2\\mathbf{j}$ and $\\mathbf{b} = 3\\mathbf{i} - x\\mathbf{j}$. Given that $\\left| \\mathbf{a} - \\mathbf{b} \\right| = 5$, find the possible values of $x$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write out a minus b",
          "workingLatex": "\\mathbf{a} - \\mathbf{b} = (x\\mathbf{i} + 2\\mathbf{j}) - (3\\mathbf{i} - x\\mathbf{j})",
          "explanation": "To find the difference we subtract $\\mathbf{b}$ from $\\mathbf{a}$ component by component.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Subtract carefully, minding the signs",
          "workingLatex": "\\mathbf{a} - \\mathbf{b} = (x - 3)\\mathbf{i} + (2 - (-x))\\mathbf{j}",
          "explanation": "Subtracting $\\mathbf{b}$ flips the sign of each of its components; the $\\mathbf{j}$ part becomes $2 - (-x)$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Simplify the j-component",
          "workingLatex": "\\mathbf{a} - \\mathbf{b} = (x - 3)\\mathbf{i} + (x + 2)\\mathbf{j}",
          "explanation": "The double negative $2 - (-x)$ becomes $x + 2$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write the magnitude condition",
          "workingLatex": "\\left| \\mathbf{a} - \\mathbf{b} \\right| = \\sqrt{(x-3)^2 + (x+2)^2} = 5",
          "explanation": "The magnitude of the difference is the square root of the sum of the squares of its components, set equal to $5$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Square both sides",
          "workingLatex": "(x-3)^2 + (x+2)^2 = 25",
          "explanation": "Squaring clears the root without introducing extra solutions, as both sides are non-negative.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Expand both brackets",
          "workingLatex": "(x^2 - 6x + 9) + (x^2 + 4x + 4) = 25",
          "explanation": "Expanding each square term separately before combining.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Collect like terms",
          "workingLatex": "2x^2 - 2x + 13 = 25",
          "explanation": "Adding the two $x^2$ terms, the $x$ terms, and the constants.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Rearrange to standard form",
          "workingLatex": "2x^2 - 2x - 12 = 0",
          "explanation": "Bringing the $25$ across gives a quadratic equal to zero.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Divide through by 2",
          "workingLatex": "x^2 - x - 6 = 0",
          "explanation": "Dividing by the common factor $2$ simplifies the factorising.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Factorise the quadratic",
          "workingLatex": "(x - 3)(x + 2) = 0",
          "explanation": "We need two numbers multiplying to $-6$ and adding to $-1$, namely $-3$ and $+2$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Solve each factor",
          "workingLatex": "x = 3 \\quad \\text{or} \\quad x = -2",
          "explanation": "Setting each bracket to zero gives the two candidate values.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Check x = 3",
          "workingLatex": "\\mathbf{a} - \\mathbf{b} = 0\\mathbf{i} + 5\\mathbf{j}, \\; \\left| \\mathbf{a} - \\mathbf{b} \\right| = 5 \\; \\checkmark",
          "explanation": "With $x = 3$ the difference is $5\\mathbf{j}$, which indeed has length $5$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Check x = -2",
          "workingLatex": "\\mathbf{a} - \\mathbf{b} = -5\\mathbf{i} + 0\\mathbf{j}, \\; \\left| \\mathbf{a} - \\mathbf{b} \\right| = 5 \\; \\checkmark",
          "explanation": "With $x = -2$ the difference is $-5\\mathbf{i}$, also of length $5$.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "State both solutions",
          "workingLatex": "x = 3 \\quad \\text{or} \\quad x = -2",
          "explanation": "Both values make the difference vector have magnitude $5$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x = 3$ or $x = -2$."
    }
  },
  {
    "id": "al.y1.pure.vectors.q068",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Vector basics",
    "subtopicId": "al.y1.pure.vectors",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "value",
    "tags": [
      "vectors",
      "parallel",
      "scalars",
      "magnitude"
    ],
    "questionText": "Given $\\mathbf{a} = 5\\mathbf{i} + 6\\mathbf{j}$ and $\\mathbf{b} = 2\\mathbf{i} - 3\\mathbf{j}$, find the value of $k$ for which $\\mathbf{a} + k\\mathbf{b}$ is parallel to $\\mathbf{i}$. Hence write down the resulting vector and state its magnitude.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Scale b by the scalar k",
          "workingLatex": "k\\mathbf{b} = k(2\\mathbf{i} - 3\\mathbf{j}) = 2k\\mathbf{i} - 3k\\mathbf{j}",
          "explanation": "Multiplying a vector by the scalar $k$ multiplies each of its components by $k$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Add a to k times b",
          "workingLatex": "\\mathbf{a} + k\\mathbf{b} = (5\\mathbf{i} + 6\\mathbf{j}) + (2k\\mathbf{i} - 3k\\mathbf{j})",
          "explanation": "We combine the two vectors so we can inspect the resulting components.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Group the i-components",
          "workingLatex": "\\mathbf{i}\\text{-part} = 5 + 2k",
          "explanation": "Collecting the coefficients of $\\mathbf{i}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Group the j-components",
          "workingLatex": "\\mathbf{j}\\text{-part} = 6 - 3k",
          "explanation": "Collecting the coefficients of $\\mathbf{j}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Write the combined vector",
          "workingLatex": "\\mathbf{a} + k\\mathbf{b} = (5 + 2k)\\mathbf{i} + (6 - 3k)\\mathbf{j}",
          "explanation": "This expresses the resultant in terms of the unknown $k$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the parallel-to-i condition",
          "workingLatex": "\\text{parallel to } \\mathbf{i} \\iff \\mathbf{j}\\text{-component} = 0",
          "explanation": "A vector points purely along $\\mathbf{i}$ exactly when it has no $\\mathbf{j}$ part, so we set the $\\mathbf{j}$ component to zero.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Set the j-component to zero",
          "workingLatex": "6 - 3k = 0",
          "explanation": "This is the equation that pins down $k$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Solve for k",
          "workingLatex": "3k = 6 \\Rightarrow k = 2",
          "explanation": "Rearranging gives the required value of the scalar.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Evaluate the i-component at k = 2",
          "workingLatex": "5 + 2(2) = 5 + 4 = 9",
          "explanation": "Substituting $k = 2$ into the $\\mathbf{i}$ part gives its value.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Write the resulting vector",
          "workingLatex": "\\mathbf{a} + 2\\mathbf{b} = 9\\mathbf{i} + 0\\mathbf{j} = 9\\mathbf{i}",
          "explanation": "With the $\\mathbf{j}$ part gone, only the $\\mathbf{i}$ part remains.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Verify by direct substitution",
          "workingLatex": "(5\\mathbf{i} + 6\\mathbf{j}) + (4\\mathbf{i} - 6\\mathbf{j}) = 9\\mathbf{i} \\; \\checkmark",
          "explanation": "Computing $2\\mathbf{b} = 4\\mathbf{i} - 6\\mathbf{j}$ and adding confirms the $\\mathbf{j}$ parts cancel.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Confirm the vector is parallel to i",
          "workingLatex": "9\\mathbf{i} = 9(\\mathbf{i}) \\Rightarrow \\text{scalar multiple of } \\mathbf{i} \\; \\checkmark",
          "explanation": "Being $9$ times the unit vector $\\mathbf{i}$ confirms it points along the $\\mathbf{i}$ direction.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Find the magnitude",
          "workingLatex": "\\left| 9\\mathbf{i} \\right| = \\sqrt{9^2 + 0^2} = 9",
          "explanation": "With no $\\mathbf{j}$ part, the magnitude is just the size of the $\\mathbf{i}$ component.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "State the results",
          "workingLatex": "k = 2, \\quad \\mathbf{a} + k\\mathbf{b} = 9\\mathbf{i}, \\quad \\left| \\mathbf{a} + k\\mathbf{b} \\right| = 9",
          "explanation": "This gives the scalar, the resulting vector, and its magnitude.",
          "diagram": null
        }
      ],
      "finalAnswer": "$k = 2$, $\\mathbf{a} + k\\mathbf{b} = 9\\mathbf{i}$, and its magnitude is $9$."
    }
  },
  {
    "id": "al.y1.pure.vectors.q069",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Vector basics",
    "subtopicId": "al.y1.pure.vectors",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "value",
    "tags": [
      "vectors",
      "parallel",
      "resultant",
      "magnitude"
    ],
    "questionText": "Given $\\mathbf{a} = 6\\mathbf{i} + 8\\mathbf{j}$ and $\\mathbf{b} = 9\\mathbf{i} + 12\\mathbf{j}$, show that $\\mathbf{a}$ and $\\mathbf{b}$ are parallel, state the scalar relationship between them, and hence find $\\left| \\mathbf{a} + \\mathbf{b} \\right|$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the test for parallel vectors",
          "workingLatex": "\\mathbf{a} \\parallel \\mathbf{b} \\iff \\mathbf{b} = k\\mathbf{a} \\text{ for some scalar } k",
          "explanation": "Two vectors are parallel exactly when one is a scalar multiple of the other, so we look for a single $k$ that works for both components.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Compare the i-components",
          "workingLatex": "\\mathbf{i}: \\; 9 = k \\times 6 \\Rightarrow k = \\frac{9}{6} = \\frac{3}{2}",
          "explanation": "Matching the $\\mathbf{i}$ parts gives a candidate value of $k$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compare the j-components",
          "workingLatex": "\\mathbf{j}: \\; 12 = k \\times 8 \\Rightarrow k = \\frac{12}{8} = \\frac{3}{2}",
          "explanation": "Matching the $\\mathbf{j}$ parts gives the same candidate value of $k$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Conclude the vectors are parallel",
          "workingLatex": "\\text{both give } k = \\tfrac{3}{2} \\Rightarrow \\mathbf{b} = \\tfrac{3}{2}\\mathbf{a} \\Rightarrow \\mathbf{a} \\parallel \\mathbf{b}",
          "explanation": "Because the same scalar $\\tfrac{3}{2}$ works for both components, $\\mathbf{b}$ is a genuine scalar multiple of $\\mathbf{a}$, proving they are parallel.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Form the resultant a plus b",
          "workingLatex": "\\mathbf{a} + \\mathbf{b} = (6\\mathbf{i} + 8\\mathbf{j}) + (9\\mathbf{i} + 12\\mathbf{j})",
          "explanation": "We now add the two vectors to find their resultant.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Add the i-components",
          "workingLatex": "\\mathbf{i}: \\; 6 + 9 = 15",
          "explanation": "Combining the $\\mathbf{i}$ parts.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Add the j-components",
          "workingLatex": "\\mathbf{j}: \\; 8 + 12 = 20",
          "explanation": "Combining the $\\mathbf{j}$ parts.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Write the resultant",
          "workingLatex": "\\mathbf{a} + \\mathbf{b} = 15\\mathbf{i} + 20\\mathbf{j}",
          "explanation": "This is the single vector representing the sum.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Set up the magnitude",
          "workingLatex": "\\left| \\mathbf{a} + \\mathbf{b} \\right| = \\sqrt{15^2 + 20^2}",
          "explanation": "The magnitude is the square root of the sum of the squares of the components.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Square the components",
          "workingLatex": "= \\sqrt{225 + 400}",
          "explanation": "Squaring each component.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Add the squares",
          "workingLatex": "= \\sqrt{625}",
          "explanation": "The sum is a perfect square, pointing to a clean answer.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Take the root",
          "workingLatex": "= 25",
          "explanation": "This is a $3$-$4$-$5$ triple scaled by $5$, giving $\\left| \\mathbf{a} + \\mathbf{b} \\right| = 25$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Check using the parallel property",
          "workingLatex": "\\left| \\mathbf{a} \\right| = \\sqrt{36 + 64} = 10, \\; \\left| \\mathbf{b} \\right| = \\sqrt{81 + 144} = 15, \\; 10 + 15 = 25 \\; \\checkmark",
          "explanation": "Because $\\mathbf{a}$ and $\\mathbf{b}$ point the same way, the length of their sum is simply the sum of their lengths, a neat confirmation.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "State the results",
          "workingLatex": "\\mathbf{b} = \\tfrac{3}{2}\\mathbf{a}, \\quad \\left| \\mathbf{a} + \\mathbf{b} \\right| = 25",
          "explanation": "The scalar relationship confirms the vectors are parallel, and the resultant has magnitude $25$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\mathbf{a}$ and $\\mathbf{b}$ are parallel with $\\mathbf{b} = \\frac{3}{2}\\mathbf{a}$, and $\\left| \\mathbf{a} + \\mathbf{b} \\right| = 25$."
    }
  },
  {
    "id": "al.y1.pure.vectors.q070",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Vector basics",
    "subtopicId": "al.y1.pure.vectors",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "value",
    "tags": [
      "vectors",
      "parallel",
      "resultant",
      "magnitude"
    ],
    "questionText": "Two forces $\\mathbf{F}_1 = (5\\mathbf{i} + 2\\mathbf{j})$ N and $\\mathbf{F}_2 = (k\\mathbf{i} - 6\\mathbf{j})$ N act on a particle. Given that the resultant force is parallel to $\\mathbf{i} - \\mathbf{j}$, find $k$ and the magnitude of the resultant.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Form the resultant force",
          "workingLatex": "\\mathbf{R} = \\mathbf{F}_1 + \\mathbf{F}_2 = (5\\mathbf{i} + 2\\mathbf{j}) + (k\\mathbf{i} - 6\\mathbf{j})",
          "explanation": "The resultant of two forces is their vector sum, added component by component.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Group the components",
          "workingLatex": "\\mathbf{R} = (5 + k)\\mathbf{i} + (2 - 6)\\mathbf{j}",
          "explanation": "Collecting the $\\mathbf{i}$ parts and the $\\mathbf{j}$ parts separately.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Simplify the j-component",
          "workingLatex": "\\mathbf{R} = (5 + k)\\mathbf{i} - 4\\mathbf{j}",
          "explanation": "The $\\mathbf{j}$ parts combine to a fixed $-4$, while the $\\mathbf{i}$ part still depends on $k$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "State the parallel condition",
          "workingLatex": "\\mathbf{R} \\parallel (\\mathbf{i} - \\mathbf{j}) \\Rightarrow \\mathbf{R} = c(\\mathbf{i} - \\mathbf{j}) \\text{ for some scalar } c",
          "explanation": "Being parallel to $\\mathbf{i} - \\mathbf{j}$ means $\\mathbf{R}$ must be a multiple of it, so its $\\mathbf{i}$ and $\\mathbf{j}$ parts are equal in size but opposite in sign.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Match the j-components to find c",
          "workingLatex": "\\mathbf{j}: \\; -4 = c(-1) \\Rightarrow c = 4",
          "explanation": "The $\\mathbf{j}$ part of $c(\\mathbf{i} - \\mathbf{j})$ is $-c$, and setting it equal to $-4$ gives $c = 4$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Match the i-components",
          "workingLatex": "\\mathbf{i}: \\; 5 + k = c = 4",
          "explanation": "The $\\mathbf{i}$ part of $c(\\mathbf{i} - \\mathbf{j})$ is $c$, which must equal the $\\mathbf{i}$ part of $\\mathbf{R}$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Solve for k",
          "workingLatex": "5 + k = 4 \\Rightarrow k = -1",
          "explanation": "Rearranging gives the required value of $k$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Substitute k back into the resultant",
          "workingLatex": "\\mathbf{R} = (5 + (-1))\\mathbf{i} - 4\\mathbf{j} = 4\\mathbf{i} - 4\\mathbf{j}",
          "explanation": "Using $k = -1$ makes the $\\mathbf{i}$ part equal to $4$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Confirm the resultant is parallel to i minus j",
          "workingLatex": "4\\mathbf{i} - 4\\mathbf{j} = 4(\\mathbf{i} - \\mathbf{j}) \\; \\checkmark",
          "explanation": "The resultant is $4$ times $\\mathbf{i} - \\mathbf{j}$, confirming the required parallel direction.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Set up the magnitude of R",
          "workingLatex": "\\left| \\mathbf{R} \\right| = \\sqrt{4^2 + (-4)^2}",
          "explanation": "The magnitude is the square root of the sum of the squares of the components.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Square the components",
          "workingLatex": "= \\sqrt{16 + 16}",
          "explanation": "Squaring both components makes them positive.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Add the squares",
          "workingLatex": "= \\sqrt{32}",
          "explanation": "The sum under the root is $32$, which is not a perfect square, so we simplify the surd.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Simplify the surd",
          "workingLatex": "= \\sqrt{16 \\times 2} = 4\\sqrt{2}",
          "explanation": "Taking out the largest square factor $16$ leaves the exact form $4\\sqrt{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Give a decimal value",
          "workingLatex": "4\\sqrt{2} \\approx 5.66 \\text{ N}",
          "explanation": "Evaluating gives the size of the resultant force to two decimal places.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "State the results",
          "workingLatex": "k = -1, \\quad \\left| \\mathbf{R} \\right| = 4\\sqrt{2} \\approx 5.66 \\text{ N}",
          "explanation": "This gives both the required scalar and the magnitude of the resultant force.",
          "diagram": null
        }
      ],
      "finalAnswer": "$k = -1$ and $\\left| \\mathbf{R} \\right| = 4\\sqrt{2} \\approx 5.66$ N."
    }
  }
];
