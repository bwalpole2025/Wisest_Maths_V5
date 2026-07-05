import { Question } from "@/lib/types";

export const questions: Question[] = [
  {
    "id": "al.y1.pure.vector-geometry.q001",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Vector geometry",
    "subtopicId": "al.y1.pure.vector-geometry",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "vector",
    "tags": [
      "vector-geometry",
      "displacement",
      "position-vector"
    ],
    "questionText": "Points $A$ and $B$ have position vectors $\\mathbf{a} = 2\\mathbf{i} + 3\\mathbf{j}$ and $\\mathbf{b} = 7\\mathbf{i} + 8\\mathbf{j}$. Find the displacement vector $\\overrightarrow{AB}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write down the two position vectors",
          "workingLatex": "\\mathbf{a} = 2\\mathbf{i} + 3\\mathbf{j}, \\quad \\mathbf{b} = 7\\mathbf{i} + 8\\mathbf{j}",
          "explanation": "The position vector of a point tells us how to reach it from the origin, so $\\mathbf{a}$ locates $A$ and $\\mathbf{b}$ locates $B$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall the displacement formula",
          "workingLatex": "\\overrightarrow{AB} = \\mathbf{b} - \\mathbf{a}",
          "explanation": "To travel from $A$ to $B$ we subtract the starting position from the finishing position.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute the two vectors",
          "workingLatex": "\\overrightarrow{AB} = (7\\mathbf{i} + 8\\mathbf{j}) - (2\\mathbf{i} + 3\\mathbf{j})",
          "explanation": "We replace $\\mathbf{b}$ and $\\mathbf{a}$ with their components, ready to subtract.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Subtract the i-components",
          "workingLatex": "\\text{i: } 7 - 2 = 5",
          "explanation": "The horizontal parts combine on their own, because $\\mathbf{i}$ only interacts with $\\mathbf{i}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Subtract the j-components",
          "workingLatex": "\\text{j: } 8 - 3 = 5",
          "explanation": "The vertical parts combine separately, since $\\mathbf{j}$ only interacts with $\\mathbf{j}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the displacement vector",
          "workingLatex": "\\overrightarrow{AB} = 5\\mathbf{i} + 5\\mathbf{j}",
          "explanation": "Recombining the two components gives the single vector that carries us from $A$ to $B$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\overrightarrow{AB} = 5\\mathbf{i} + 5\\mathbf{j}$"
    }
  },
  {
    "id": "al.y1.pure.vector-geometry.q002",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Vector geometry",
    "subtopicId": "al.y1.pure.vector-geometry",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "vector",
    "tags": [
      "vector-geometry",
      "displacement",
      "column-vector"
    ],
    "questionText": "Relative to an origin $O$, the points $A$ and $B$ have position vectors $\\mathbf{a} = \\begin{pmatrix} 1 \\\\ 4 \\end{pmatrix}$ and $\\mathbf{b} = \\begin{pmatrix} 6 \\\\ -2 \\end{pmatrix}$. Find $\\overrightarrow{AB}$ as a column vector.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write down the two position vectors",
          "workingLatex": "\\mathbf{a} = \\begin{pmatrix} 1 \\\\ 4 \\end{pmatrix}, \\quad \\mathbf{b} = \\begin{pmatrix} 6 \\\\ -2 \\end{pmatrix}",
          "explanation": "Each column vector lists the horizontal component on top and the vertical component below, locating the point from the origin.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall the displacement formula",
          "workingLatex": "\\overrightarrow{AB} = \\mathbf{b} - \\mathbf{a}",
          "explanation": "The displacement from $A$ to $B$ is the finishing position minus the starting position.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute the column vectors",
          "workingLatex": "\\overrightarrow{AB} = \\begin{pmatrix} 6 \\\\ -2 \\end{pmatrix} - \\begin{pmatrix} 1 \\\\ 4 \\end{pmatrix}",
          "explanation": "We line up the two columns so that matching components can be subtracted.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Subtract the top components",
          "workingLatex": "\\text{top: } 6 - 1 = 5",
          "explanation": "The horizontal components are subtracted on their own row.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Subtract the bottom components",
          "workingLatex": "\\text{bottom: } -2 - 4 = -6",
          "explanation": "The vertical components are subtracted separately; taking away $4$ from $-2$ gives $-6$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the displacement vector",
          "workingLatex": "\\overrightarrow{AB} = \\begin{pmatrix} 5 \\\\ -6 \\end{pmatrix}",
          "explanation": "Placing the two results back into a column gives the vector from $A$ to $B$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\overrightarrow{AB} = \\begin{pmatrix} 5 \\\\ -6 \\end{pmatrix}$"
    }
  },
  {
    "id": "al.y1.pure.vector-geometry.q003",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Vector geometry",
    "subtopicId": "al.y1.pure.vector-geometry",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "vector",
    "tags": [
      "vector-geometry",
      "displacement",
      "position-vector"
    ],
    "questionText": "Points $A$ and $B$ have position vectors $\\mathbf{a} = -3\\mathbf{i} + 5\\mathbf{j}$ and $\\mathbf{b} = 4\\mathbf{i} - 2\\mathbf{j}$. Find the displacement vector $\\overrightarrow{AB}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write down the two position vectors",
          "workingLatex": "\\mathbf{a} = -3\\mathbf{i} + 5\\mathbf{j}, \\quad \\mathbf{b} = 4\\mathbf{i} - 2\\mathbf{j}",
          "explanation": "These vectors give the positions of $A$ and $B$ measured from the origin.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall the displacement formula",
          "workingLatex": "\\overrightarrow{AB} = \\mathbf{b} - \\mathbf{a}",
          "explanation": "To move from $A$ to $B$ we subtract the starting position from the finishing position.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute the two vectors",
          "workingLatex": "\\overrightarrow{AB} = (4\\mathbf{i} - 2\\mathbf{j}) - (-3\\mathbf{i} + 5\\mathbf{j})",
          "explanation": "Writing both vectors in full lets us handle each direction carefully, including the negative signs.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Subtract the i-components",
          "workingLatex": "\\text{i: } 4 - (-3) = 7",
          "explanation": "Subtracting a negative is the same as adding, so the horizontal component becomes $4 + 3 = 7$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Subtract the j-components",
          "workingLatex": "\\text{j: } -2 - 5 = -7",
          "explanation": "Taking $5$ away from $-2$ moves us further down, giving $-7$ in the vertical direction.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the displacement vector",
          "workingLatex": "\\overrightarrow{AB} = 7\\mathbf{i} - 7\\mathbf{j}",
          "explanation": "Combining the two components gives the vector that carries us from $A$ to $B$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\overrightarrow{AB} = 7\\mathbf{i} - 7\\mathbf{j}$"
    }
  },
  {
    "id": "al.y1.pure.vector-geometry.q004",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Vector geometry",
    "subtopicId": "al.y1.pure.vector-geometry",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "value",
    "tags": [
      "vector-geometry",
      "distance",
      "magnitude"
    ],
    "questionText": "The points $A$ and $B$ have coordinates $(1, 2)$ and $(4, 6)$. Find the distance $\\left| \\overrightarrow{AB} \\right|$ between them.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Find the change in the x-direction",
          "workingLatex": "\\text{x: } 4 - 1 = 3",
          "explanation": "The horizontal step from $A$ to $B$ is the difference in the $x$-coordinates.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find the change in the y-direction",
          "workingLatex": "\\text{y: } 6 - 2 = 4",
          "explanation": "The vertical step from $A$ to $B$ is the difference in the $y$-coordinates.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write the displacement vector",
          "workingLatex": "\\overrightarrow{AB} = 3\\mathbf{i} + 4\\mathbf{j}",
          "explanation": "Combining the horizontal and vertical steps gives the vector pointing from $A$ to $B$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply the magnitude formula",
          "workingLatex": "\\left| \\overrightarrow{AB} \\right| = \\sqrt{3^{2} + 4^{2}}",
          "explanation": "The distance is the length of $\\overrightarrow{AB}$, found by Pythagoras on its two components.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Square each component",
          "workingLatex": "\\left| \\overrightarrow{AB} \\right| = \\sqrt{9 + 16}",
          "explanation": "Squaring removes the signs and gives the areas of the squares on each side.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Add under the root",
          "workingLatex": "\\left| \\overrightarrow{AB} \\right| = \\sqrt{25}",
          "explanation": "Adding the two squares gives the square of the distance itself.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the distance",
          "workingLatex": "\\left| \\overrightarrow{AB} \\right| = 5",
          "explanation": "The square root of $25$ is $5$, so $A$ and $B$ are $5$ units apart.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\left| \\overrightarrow{AB} \\right| = 5$"
    }
  },
  {
    "id": "al.y1.pure.vector-geometry.q005",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Vector geometry",
    "subtopicId": "al.y1.pure.vector-geometry",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "value",
    "tags": [
      "vector-geometry",
      "distance",
      "magnitude"
    ],
    "questionText": "The points $A$ and $B$ have coordinates $(0, 0)$ and $(5, 12)$. Find the distance $\\left| \\overrightarrow{AB} \\right|$ between them.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Find the change in the x-direction",
          "workingLatex": "\\text{x: } 5 - 0 = 5",
          "explanation": "The horizontal step is the difference in the $x$-coordinates of the two points.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find the change in the y-direction",
          "workingLatex": "\\text{y: } 12 - 0 = 12",
          "explanation": "The vertical step is the difference in the $y$-coordinates.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write the displacement vector",
          "workingLatex": "\\overrightarrow{AB} = 5\\mathbf{i} + 12\\mathbf{j}",
          "explanation": "Because $A$ is at the origin, the vector to $B$ is simply the coordinates of $B$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply the magnitude formula",
          "workingLatex": "\\left| \\overrightarrow{AB} \\right| = \\sqrt{5^{2} + 12^{2}}",
          "explanation": "The distance is the length of the vector, found by Pythagoras on its components.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Square each component",
          "workingLatex": "\\left| \\overrightarrow{AB} \\right| = \\sqrt{25 + 144}",
          "explanation": "Squaring each component gives the areas that Pythagoras adds together.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Add under the root",
          "workingLatex": "\\left| \\overrightarrow{AB} \\right| = \\sqrt{169}",
          "explanation": "The sum of the two squares is the square of the distance.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the distance",
          "workingLatex": "\\left| \\overrightarrow{AB} \\right| = 13",
          "explanation": "Since $13^{2} = 169$, the distance between $A$ and $B$ is $13$ units.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\left| \\overrightarrow{AB} \\right| = 13$"
    }
  },
  {
    "id": "al.y1.pure.vector-geometry.q006",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Vector geometry",
    "subtopicId": "al.y1.pure.vector-geometry",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "value",
    "tags": [
      "vector-geometry",
      "distance",
      "magnitude"
    ],
    "questionText": "The points $A$ and $B$ have coordinates $(-2, 1)$ and $(4, 9)$. Find the distance $\\left| \\overrightarrow{AB} \\right|$ between them.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Find the change in the x-direction",
          "workingLatex": "\\text{x: } 4 - (-2) = 6",
          "explanation": "Subtracting a negative $x$-coordinate adds on, so the horizontal step is $4 + 2 = 6$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find the change in the y-direction",
          "workingLatex": "\\text{y: } 9 - 1 = 8",
          "explanation": "The vertical step is the difference in the $y$-coordinates.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write the displacement vector",
          "workingLatex": "\\overrightarrow{AB} = 6\\mathbf{i} + 8\\mathbf{j}",
          "explanation": "Together the horizontal and vertical steps form the vector from $A$ to $B$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply the magnitude formula",
          "workingLatex": "\\left| \\overrightarrow{AB} \\right| = \\sqrt{6^{2} + 8^{2}}",
          "explanation": "The distance is the length of $\\overrightarrow{AB}$, found by Pythagoras on its components.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Square each component",
          "workingLatex": "\\left| \\overrightarrow{AB} \\right| = \\sqrt{36 + 64}",
          "explanation": "Squaring the components removes any signs and prepares them to be added.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Add under the root",
          "workingLatex": "\\left| \\overrightarrow{AB} \\right| = \\sqrt{100}",
          "explanation": "The sum of the squares gives the square of the distance between the points.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the distance",
          "workingLatex": "\\left| \\overrightarrow{AB} \\right| = 10",
          "explanation": "Since $10^{2} = 100$, the points $A$ and $B$ are $10$ units apart.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\left| \\overrightarrow{AB} \\right| = 10$"
    }
  },
  {
    "id": "al.y1.pure.vector-geometry.q007",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Vector geometry",
    "subtopicId": "al.y1.pure.vector-geometry",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "value",
    "tags": [
      "vector-geometry",
      "distance",
      "column-vector"
    ],
    "questionText": "Relative to an origin $O$, the points $A$ and $B$ have position vectors $\\mathbf{a} = \\begin{pmatrix} 2 \\\\ 3 \\end{pmatrix}$ and $\\mathbf{b} = \\begin{pmatrix} 10 \\\\ 18 \\end{pmatrix}$. Find the distance $\\left| \\overrightarrow{AB} \\right|$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the displacement formula",
          "workingLatex": "\\overrightarrow{AB} = \\mathbf{b} - \\mathbf{a}",
          "explanation": "Before finding the length we need the vector from $A$ to $B$, which is finishing minus starting position.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute the column vectors",
          "workingLatex": "\\overrightarrow{AB} = \\begin{pmatrix} 10 \\\\ 18 \\end{pmatrix} - \\begin{pmatrix} 2 \\\\ 3 \\end{pmatrix}",
          "explanation": "We line up the columns so matching components can be subtracted.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Subtract component by component",
          "workingLatex": "\\overrightarrow{AB} = \\begin{pmatrix} 8 \\\\ 15 \\end{pmatrix}",
          "explanation": "The top gives $10 - 2 = 8$ and the bottom gives $18 - 3 = 15$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply the magnitude formula",
          "workingLatex": "\\left| \\overrightarrow{AB} \\right| = \\sqrt{8^{2} + 15^{2}}",
          "explanation": "The distance is the length of the column vector, found by Pythagoras on its two entries.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Square each component",
          "workingLatex": "\\left| \\overrightarrow{AB} \\right| = \\sqrt{64 + 225}",
          "explanation": "Squaring each entry gives the areas that Pythagoras adds together.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Add under the root",
          "workingLatex": "\\left| \\overrightarrow{AB} \\right| = \\sqrt{289}",
          "explanation": "The sum of the two squares is the square of the distance.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the distance",
          "workingLatex": "\\left| \\overrightarrow{AB} \\right| = 17",
          "explanation": "Since $17^{2} = 289$, the distance between $A$ and $B$ is $17$ units.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\left| \\overrightarrow{AB} \\right| = 17$"
    }
  },
  {
    "id": "al.y1.pure.vector-geometry.q008",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Vector geometry",
    "subtopicId": "al.y1.pure.vector-geometry",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "coordinates",
    "tags": [
      "vector-geometry",
      "midpoint",
      "coordinates"
    ],
    "questionText": "The points $A$ and $B$ have coordinates $(2, 4)$ and $(8, 10)$. Find the coordinates of the midpoint $M$ of $AB$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the midpoint formula",
          "workingLatex": "M = \\left( \\frac{x_A + x_B}{2}, \\frac{y_A + y_B}{2} \\right)",
          "explanation": "The midpoint lies exactly halfway between the points, so we average the $x$-coordinates and the $y$-coordinates.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Add the x-coordinates",
          "workingLatex": "x_A + x_B = 2 + 8 = 10",
          "explanation": "We first total the two horizontal positions before sharing them equally.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Halve to find the midpoint x-coordinate",
          "workingLatex": "\\frac{10}{2} = 5",
          "explanation": "Halving the total lands us exactly midway in the horizontal direction.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Add the y-coordinates",
          "workingLatex": "y_A + y_B = 4 + 10 = 14",
          "explanation": "Next we total the two vertical positions.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Halve to find the midpoint y-coordinate",
          "workingLatex": "\\frac{14}{2} = 7",
          "explanation": "Halving this total gives the midway point in the vertical direction.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the midpoint",
          "workingLatex": "M = (5, 7)",
          "explanation": "Combining the two averaged coordinates gives the position of the midpoint.",
          "diagram": null
        }
      ],
      "finalAnswer": "$M = (5, 7)$"
    }
  },
  {
    "id": "al.y1.pure.vector-geometry.q009",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Vector geometry",
    "subtopicId": "al.y1.pure.vector-geometry",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "coordinates",
    "tags": [
      "vector-geometry",
      "midpoint",
      "coordinates"
    ],
    "questionText": "The points $A$ and $B$ have coordinates $(-3, 2)$ and $(5, -6)$. Find the coordinates of the midpoint $M$ of $AB$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the midpoint formula",
          "workingLatex": "M = \\left( \\frac{x_A + x_B}{2}, \\frac{y_A + y_B}{2} \\right)",
          "explanation": "The midpoint is the average of the two points, so we add matching coordinates and halve.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Add the x-coordinates",
          "workingLatex": "x_A + x_B = -3 + 5 = 2",
          "explanation": "Adding $-3$ and $5$ gives $2$; the negative simply pulls the total back before we halve it.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Halve to find the midpoint x-coordinate",
          "workingLatex": "\\frac{2}{2} = 1",
          "explanation": "Halving the horizontal total places the midpoint at $x = 1$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Add the y-coordinates",
          "workingLatex": "y_A + y_B = 2 + (-6) = -4",
          "explanation": "Adding $2$ and $-6$ gives $-4$, since the point $B$ sits below the axis.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Halve to find the midpoint y-coordinate",
          "workingLatex": "\\frac{-4}{2} = -2",
          "explanation": "Halving $-4$ gives $-2$, the vertical position of the midpoint.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the midpoint",
          "workingLatex": "M = (1, -2)",
          "explanation": "Combining the averaged coordinates gives the midpoint of $AB$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$M = (1, -2)$"
    }
  },
  {
    "id": "al.y1.pure.vector-geometry.q010",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Vector geometry",
    "subtopicId": "al.y1.pure.vector-geometry",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "vector",
    "tags": [
      "vector-geometry",
      "midpoint",
      "position-vector"
    ],
    "questionText": "Points $A$ and $B$ have position vectors $\\mathbf{a} = 4\\mathbf{i} + 2\\mathbf{j}$ and $\\mathbf{b} = 10\\mathbf{i} + 8\\mathbf{j}$. Find the position vector of the midpoint $M$ of $AB$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the midpoint position vector formula",
          "workingLatex": "\\mathbf{m} = \\frac{1}{2}(\\mathbf{a} + \\mathbf{b})",
          "explanation": "The midpoint is the average of the two position vectors, sitting halfway between $A$ and $B$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Add the two vectors",
          "workingLatex": "\\mathbf{a} + \\mathbf{b} = (4\\mathbf{i} + 2\\mathbf{j}) + (10\\mathbf{i} + 8\\mathbf{j})",
          "explanation": "We first add the vectors together before halving the result.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Combine the i-components",
          "workingLatex": "\\text{i: } 4 + 10 = 14",
          "explanation": "The horizontal parts add on their own, giving $14$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Combine the j-components",
          "workingLatex": "\\text{j: } 2 + 8 = 10",
          "explanation": "The vertical parts add separately, giving $10$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Write the sum",
          "workingLatex": "\\mathbf{a} + \\mathbf{b} = 14\\mathbf{i} + 10\\mathbf{j}",
          "explanation": "Combining the totals gives the vector to the far corner, which we now halve.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Halve the sum",
          "workingLatex": "\\mathbf{m} = \\frac{1}{2}(14\\mathbf{i} + 10\\mathbf{j})",
          "explanation": "Taking half of the total moves us exactly midway between the two points.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the midpoint position vector",
          "workingLatex": "\\mathbf{m} = 7\\mathbf{i} + 5\\mathbf{j}",
          "explanation": "Halving each component gives the position vector of the midpoint $M$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\mathbf{m} = 7\\mathbf{i} + 5\\mathbf{j}$"
    }
  },
  {
    "id": "al.y1.pure.vector-geometry.q011",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Vector geometry",
    "subtopicId": "al.y1.pure.vector-geometry",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "vector",
    "tags": [
      "vector-geometry",
      "midpoint",
      "column-vector"
    ],
    "questionText": "Relative to an origin $O$, the points $A$ and $B$ have position vectors $\\mathbf{a} = \\begin{pmatrix} -2 \\\\ 3 \\end{pmatrix}$ and $\\mathbf{b} = \\begin{pmatrix} 6 \\\\ 11 \\end{pmatrix}$. Find the position vector of the midpoint $M$ of $AB$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the midpoint position vector formula",
          "workingLatex": "\\mathbf{m} = \\frac{1}{2}(\\mathbf{a} + \\mathbf{b})",
          "explanation": "The midpoint is the average of the two position vectors, halfway between $A$ and $B$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute the column vectors",
          "workingLatex": "\\mathbf{m} = \\frac{1}{2}\\left( \\begin{pmatrix} -2 \\\\ 3 \\end{pmatrix} + \\begin{pmatrix} 6 \\\\ 11 \\end{pmatrix} \\right)",
          "explanation": "We add the two columns first, then halve the result.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Add the top components",
          "workingLatex": "\\text{top: } -2 + 6 = 4",
          "explanation": "The horizontal entries add to $4$; the negative pulls the total back before we halve.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Add the bottom components",
          "workingLatex": "\\text{bottom: } 3 + 11 = 14",
          "explanation": "The vertical entries add to $14$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Write the sum",
          "workingLatex": "\\mathbf{a} + \\mathbf{b} = \\begin{pmatrix} 4 \\\\ 14 \\end{pmatrix}",
          "explanation": "Placing the totals into a column gives the combined vector we now halve.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Halve the sum",
          "workingLatex": "\\mathbf{m} = \\frac{1}{2}\\begin{pmatrix} 4 \\\\ 14 \\end{pmatrix}",
          "explanation": "Taking half of each entry moves us exactly midway between the two points.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the midpoint position vector",
          "workingLatex": "\\mathbf{m} = \\begin{pmatrix} 2 \\\\ 7 \\end{pmatrix}",
          "explanation": "Halving each component gives the position vector of the midpoint $M$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\mathbf{m} = \\begin{pmatrix} 2 \\\\ 7 \\end{pmatrix}$"
    }
  },
  {
    "id": "al.y1.pure.vector-geometry.q012",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Vector geometry",
    "subtopicId": "al.y1.pure.vector-geometry",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "value",
    "tags": [
      "vector-geometry",
      "distance",
      "magnitude"
    ],
    "questionText": "Find the distance between the points $A(1, 1)$ and $B(4, 5)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the distance formula",
          "workingLatex": "\\left| \\overrightarrow{AB} \\right| = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}",
          "explanation": "The distance between two points is the length of the displacement joining them, which Pythagoras gives from the horizontal and vertical gaps.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find the horizontal and vertical change",
          "workingLatex": "x_2 - x_1 = 4 - 1 = 3, \\quad y_2 - y_1 = 5 - 1 = 4",
          "explanation": "Subtracting $A$ from $B$ tells us how far across and how far up we travel to get from one point to the other.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Square each change",
          "workingLatex": "3^2 = 9, \\quad 4^2 = 16",
          "explanation": "These squares are the two shorter sides of the right-angled triangle, squared ready for Pythagoras.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Add the squares",
          "workingLatex": "9 + 16 = 25",
          "explanation": "The sum of the squared legs equals the square of the distance, which is the hypotenuse.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Take the square root",
          "workingLatex": "\\left| \\overrightarrow{AB} \\right| = \\sqrt{25} = 5",
          "explanation": "Square rooting undoes the squaring and gives the actual length, which here is a whole number.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the distance",
          "workingLatex": "\\left| \\overrightarrow{AB} \\right| = 5",
          "explanation": "So the two points are exactly $5$ units apart.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\left| \\overrightarrow{AB} \\right| = 5$"
    }
  },
  {
    "id": "al.y1.pure.vector-geometry.q013",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Vector geometry",
    "subtopicId": "al.y1.pure.vector-geometry",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "value",
    "tags": [
      "vector-geometry",
      "distance",
      "surds"
    ],
    "questionText": "Find the exact distance between the origin $O(0, 0)$ and the point $B(2, 3)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the distance formula",
          "workingLatex": "\\left| \\overrightarrow{OB} \\right| = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}",
          "explanation": "Distance is the hypotenuse of the right-angled triangle formed by the horizontal and vertical separation of the points.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find the horizontal and vertical change",
          "workingLatex": "x_2 - x_1 = 2 - 0 = 2, \\quad y_2 - y_1 = 3 - 0 = 3",
          "explanation": "Because we start at the origin, the changes are simply the coordinates of $B$ itself.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Square each change",
          "workingLatex": "2^2 = 4, \\quad 3^2 = 9",
          "explanation": "Squaring makes both legs positive and prepares them for Pythagoras' theorem.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Add the squares",
          "workingLatex": "4 + 9 = 13",
          "explanation": "The sum of the squared legs equals the square of the distance we want.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Take the square root",
          "workingLatex": "\\left| \\overrightarrow{OB} \\right| = \\sqrt{13}",
          "explanation": "Rooting gives the length, but $13$ is not a perfect square so the answer is a surd.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check the surd cannot simplify",
          "workingLatex": "13 = 13 \\text{ (prime, no square factors)}",
          "explanation": "A surd only simplifies if the number has a square factor; $13$ is prime, so $\\sqrt{13}$ is already in exact form.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the exact distance",
          "workingLatex": "\\left| \\overrightarrow{OB} \\right| = \\sqrt{13}",
          "explanation": "So the exact distance from the origin to $B$ is $\\sqrt{13}$ units.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\left| \\overrightarrow{OB} \\right| = \\sqrt{13}$"
    }
  },
  {
    "id": "al.y1.pure.vector-geometry.q014",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Vector geometry",
    "subtopicId": "al.y1.pure.vector-geometry",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "value",
    "tags": [
      "vector-geometry",
      "distance",
      "surds"
    ],
    "questionText": "The points $A(1, 3)$ and $B(6, 5)$ are joined by a straight line. Find the exact length of $AB$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the distance formula",
          "workingLatex": "\\left| \\overrightarrow{AB} \\right| = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}",
          "explanation": "The length of the line is the distance between its endpoints, found using Pythagoras on the horizontal and vertical gaps.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find the horizontal and vertical change",
          "workingLatex": "x_2 - x_1 = 6 - 1 = 5, \\quad y_2 - y_1 = 5 - 3 = 2",
          "explanation": "Subtracting $A$ from $B$ gives how far we move right and up along the line.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Square each change",
          "workingLatex": "5^2 = 25, \\quad 2^2 = 4",
          "explanation": "These are the squares of the two legs of the right-angled triangle.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Add the squares",
          "workingLatex": "25 + 4 = 29",
          "explanation": "Adding gives the square of the hypotenuse, which is the length we are looking for.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Take the square root",
          "workingLatex": "\\left| \\overrightarrow{AB} \\right| = \\sqrt{29}",
          "explanation": "The length is the positive square root of $29$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check the surd cannot simplify",
          "workingLatex": "29 = 29 \\text{ (prime, no square factors)}",
          "explanation": "Since $29$ is prime it has no square factor to take outside the root, so $\\sqrt{29}$ is already exact.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the exact length",
          "workingLatex": "\\left| \\overrightarrow{AB} \\right| = \\sqrt{29}",
          "explanation": "So the exact length of $AB$ is $\\sqrt{29}$ units.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\left| \\overrightarrow{AB} \\right| = \\sqrt{29}$"
    }
  },
  {
    "id": "al.y1.pure.vector-geometry.q015",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Vector geometry",
    "subtopicId": "al.y1.pure.vector-geometry",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "coordinates",
    "tags": [
      "vector-geometry",
      "midpoint",
      "coordinates"
    ],
    "questionText": "Find the coordinates of the midpoint $M$ of the line segment joining $A(2, 4)$ and $B(6, 10)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the midpoint formula",
          "workingLatex": "M = \\left( \\frac{x_1 + x_2}{2}, \\; \\frac{y_1 + y_2}{2} \\right)",
          "explanation": "The midpoint sits exactly halfway along, so each of its coordinates is the average of the matching coordinates of $A$ and $B$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute the x-coordinates",
          "workingLatex": "\\frac{x_1 + x_2}{2} = \\frac{2 + 6}{2}",
          "explanation": "We average the two $x$-values to find how far across the midpoint lies.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Simplify the x-coordinate",
          "workingLatex": "\\frac{8}{2} = 4",
          "explanation": "Halving the sum gives the $x$-coordinate of the midpoint.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute the y-coordinates",
          "workingLatex": "\\frac{y_1 + y_2}{2} = \\frac{4 + 10}{2}",
          "explanation": "Now we average the two $y$-values to find how far up the midpoint lies.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify the y-coordinate",
          "workingLatex": "\\frac{14}{2} = 7",
          "explanation": "Halving the sum gives the $y$-coordinate of the midpoint.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the midpoint",
          "workingLatex": "M = (4, 7)",
          "explanation": "Combining the two averaged coordinates gives the midpoint $M(4, 7)$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$M = (4, 7)$"
    }
  },
  {
    "id": "al.y1.pure.vector-geometry.q016",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Vector geometry",
    "subtopicId": "al.y1.pure.vector-geometry",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "vector",
    "tags": [
      "vector-geometry",
      "midpoint",
      "position-vectors"
    ],
    "questionText": "Points $A$ and $B$ have position vectors $\\mathbf{a} = 3\\mathbf{i} - 2\\mathbf{j}$ and $\\mathbf{b} = 5\\mathbf{i} + 4\\mathbf{j}$. Find the position vector of the midpoint $M$ of $AB$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the midpoint of position vectors",
          "workingLatex": "\\mathbf{m} = \\frac{\\mathbf{a} + \\mathbf{b}}{2}",
          "explanation": "The midpoint's position vector is the average of the two endpoints' position vectors, just as with coordinates.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Add the i-components",
          "workingLatex": "3 + 5 = 8",
          "explanation": "We combine the horizontal parts of $\\mathbf{a}$ and $\\mathbf{b}$ first.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Add the j-components",
          "workingLatex": "-2 + 4 = 2",
          "explanation": "Then we combine the vertical parts, being careful with the negative sign.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write the sum of the vectors",
          "workingLatex": "\\mathbf{a} + \\mathbf{b} = 8\\mathbf{i} + 2\\mathbf{j}",
          "explanation": "Adding matching components gives the total displacement from the origin to $A$ then $B$ combined.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Halve the result",
          "workingLatex": "\\mathbf{m} = \\frac{1}{2}(8\\mathbf{i} + 2\\mathbf{j}) = 4\\mathbf{i} + \\mathbf{j}",
          "explanation": "Dividing each component by two takes us to the point exactly halfway between $A$ and $B$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the position vector",
          "workingLatex": "\\mathbf{m} = 4\\mathbf{i} + \\mathbf{j}",
          "explanation": "So the midpoint $M$ has position vector $4\\mathbf{i} + \\mathbf{j}$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\mathbf{m} = 4\\mathbf{i} + \\mathbf{j}$"
    }
  },
  {
    "id": "al.y1.pure.vector-geometry.q017",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Vector geometry",
    "subtopicId": "al.y1.pure.vector-geometry",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "coordinates",
    "tags": [
      "vector-geometry",
      "midpoint",
      "coordinates"
    ],
    "questionText": "Find the coordinates of the midpoint $M$ of the segment joining $A(-3, 2)$ and $B(5, -4)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the midpoint formula",
          "workingLatex": "M = \\left( \\frac{x_1 + x_2}{2}, \\; \\frac{y_1 + y_2}{2} \\right)",
          "explanation": "Each coordinate of the midpoint is the average of the corresponding coordinates of the two endpoints.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute the x-coordinates",
          "workingLatex": "\\frac{x_1 + x_2}{2} = \\frac{-3 + 5}{2}",
          "explanation": "We add the two $x$-values, keeping track of the negative, then halve.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Simplify the x-coordinate",
          "workingLatex": "\\frac{2}{2} = 1",
          "explanation": "The horizontal midpoint is at $x = 1$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute the y-coordinates",
          "workingLatex": "\\frac{y_1 + y_2}{2} = \\frac{2 + (-4)}{2}",
          "explanation": "Now we average the two $y$-values; adding a negative is the same as subtracting.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify the y-coordinate",
          "workingLatex": "\\frac{-2}{2} = -1",
          "explanation": "The vertical midpoint is at $y = -1$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the midpoint",
          "workingLatex": "M = (1, -1)",
          "explanation": "Combining the results gives the midpoint $M(1, -1)$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$M = (1, -1)$"
    }
  },
  {
    "id": "al.y1.pure.vector-geometry.q018",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Vector geometry",
    "subtopicId": "al.y1.pure.vector-geometry",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "coordinates",
    "tags": [
      "vector-geometry",
      "midpoint",
      "endpoint"
    ],
    "questionText": "The midpoint of $AB$ is $M(4, 3)$. Given that $A$ is the point $(1, 2)$, find the coordinates of $B$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the midpoint relationship",
          "workingLatex": "M = \\frac{A + B}{2}",
          "explanation": "The midpoint is the average of the two endpoints, so it lies exactly halfway between them.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Rearrange to make B the subject",
          "workingLatex": "B = 2M - A",
          "explanation": "Doubling the midpoint and subtracting the known endpoint returns the other endpoint.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute the coordinates",
          "workingLatex": "B = 2(4, 3) - (1, 2)",
          "explanation": "We apply the rule to each coordinate separately.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Double the midpoint",
          "workingLatex": "B = (8, 6) - (1, 2)",
          "explanation": "Multiplying the midpoint's coordinates by two gives the point diametrically opposite $A$ scaled from the origin.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Subtract A",
          "workingLatex": "B = (8 - 1, \\; 6 - 2) = (7, 4)",
          "explanation": "Subtracting $A$ component by component gives the coordinates of $B$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Verify using the midpoint",
          "workingLatex": "\\left( \\frac{1 + 7}{2}, \\; \\frac{2 + 4}{2} \\right) = (4, 3)",
          "explanation": "Checking that the midpoint of $A$ and our $B$ is indeed $M(4,3)$ confirms the answer.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the point",
          "workingLatex": "B = (7, 4)",
          "explanation": "So the other endpoint $B$ is the point $(7, 4)$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$B = (7, 4)$"
    }
  },
  {
    "id": "al.y1.pure.vector-geometry.q019",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Vector geometry",
    "subtopicId": "al.y1.pure.vector-geometry",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "coordinates",
    "tags": [
      "vector-geometry",
      "midpoint",
      "endpoint"
    ],
    "questionText": "The point $M(2, 5)$ is the midpoint of $AB$. Given that $A$ is $(-1, 3)$, find the coordinates of $B$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the midpoint relationship",
          "workingLatex": "M = \\frac{A + B}{2}",
          "explanation": "The midpoint is the average of the two endpoints, halfway between them.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Rearrange to make B the subject",
          "workingLatex": "B = 2M - A",
          "explanation": "Doubling the midpoint and removing the known endpoint isolates the unknown endpoint.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute the coordinates",
          "workingLatex": "B = 2(2, 5) - (-1, 3)",
          "explanation": "We apply the rule to each coordinate, taking care with the negative in $A$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Double the midpoint",
          "workingLatex": "B = (4, 10) - (-1, 3)",
          "explanation": "Multiplying the midpoint's coordinates by two is the first part of the calculation.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Subtract A",
          "workingLatex": "B = (4 - (-1), \\; 10 - 3) = (5, 7)",
          "explanation": "Subtracting a negative adds, giving the $x$-coordinate $5$; the $y$-coordinate follows directly.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Verify using the midpoint",
          "workingLatex": "\\left( \\frac{-1 + 5}{2}, \\; \\frac{3 + 7}{2} \\right) = (2, 5)",
          "explanation": "The midpoint of $A$ and our $B$ returns $M(2,5)$, confirming the answer.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the point",
          "workingLatex": "B = (5, 7)",
          "explanation": "So the other endpoint $B$ is $(5, 7)$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$B = (5, 7)$"
    }
  },
  {
    "id": "al.y1.pure.vector-geometry.q020",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Vector geometry",
    "subtopicId": "al.y1.pure.vector-geometry",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "coordinates",
    "tags": [
      "vector-geometry",
      "midpoint",
      "endpoint"
    ],
    "questionText": "The midpoint of $AB$ is $M(0, 1)$. Given that $A$ is the point $(3, -2)$, find the coordinates of $B$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the midpoint relationship",
          "workingLatex": "M = \\frac{A + B}{2}",
          "explanation": "The midpoint is the average of the two endpoints, sitting exactly halfway between them.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Rearrange to make B the subject",
          "workingLatex": "B = 2M - A",
          "explanation": "Doubling the midpoint and subtracting the known endpoint recovers the other endpoint.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute the coordinates",
          "workingLatex": "B = 2(0, 1) - (3, -2)",
          "explanation": "We apply the rule coordinate by coordinate, noting $A$ has a negative $y$-value.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Double the midpoint",
          "workingLatex": "B = (0, 2) - (3, -2)",
          "explanation": "Doubling $M$ gives $(0, 2)$ before we remove the contribution of $A$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Subtract A",
          "workingLatex": "B = (0 - 3, \\; 2 - (-2)) = (-3, 4)",
          "explanation": "The $x$-part becomes $-3$, and subtracting the negative $y$ adds to give $4$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Verify using the midpoint",
          "workingLatex": "\\left( \\frac{3 + (-3)}{2}, \\; \\frac{-2 + 4}{2} \\right) = (0, 1)",
          "explanation": "The midpoint of $A$ and our $B$ returns $M(0,1)$, so the answer checks out.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the point",
          "workingLatex": "B = (-3, 4)",
          "explanation": "So the other endpoint $B$ is the point $(-3, 4)$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$B = (-3, 4)$"
    }
  },
  {
    "id": "al.y1.pure.vector-geometry.q021",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Vector geometry",
    "subtopicId": "al.y1.pure.vector-geometry",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "vector",
    "tags": [
      "vector-geometry",
      "unit-vector",
      "displacement"
    ],
    "questionText": "Points $A$ and $B$ have coordinates $(2, 3)$ and $(5, 7)$. Find a unit vector in the direction of $\\overrightarrow{AB}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Find the displacement vector",
          "workingLatex": "\\overrightarrow{AB} = \\begin{pmatrix} 5 \\\\ 7 \\end{pmatrix} - \\begin{pmatrix} 2 \\\\ 3 \\end{pmatrix} = \\begin{pmatrix} 3 \\\\ 4 \\end{pmatrix}",
          "explanation": "The displacement from $A$ to $B$ is found by subtracting the start point from the end point, giving the direction we want.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Set up the magnitude",
          "workingLatex": "\\left| \\overrightarrow{AB} \\right| = \\sqrt{3^2 + 4^2}",
          "explanation": "A unit vector must have length one, so we first need the length of $\\overrightarrow{AB}$ using Pythagoras.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compute the magnitude",
          "workingLatex": "= \\sqrt{9 + 16} = \\sqrt{25} = 5",
          "explanation": "The components form a $3$-$4$-$5$ triangle, so the length is a clean $5$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Recall the unit vector formula",
          "workingLatex": "\\hat{u} = \\frac{\\overrightarrow{AB}}{\\left| \\overrightarrow{AB} \\right|}",
          "explanation": "Dividing a vector by its own length keeps its direction but scales it to length one.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Divide each component by the magnitude",
          "workingLatex": "\\hat{u} = \\frac{1}{5}\\begin{pmatrix} 3 \\\\ 4 \\end{pmatrix} = \\begin{pmatrix} \\frac{3}{5} \\\\ \\frac{4}{5} \\end{pmatrix}",
          "explanation": "Scaling each component by $\\tfrac{1}{5}$ produces the unit vector pointing from $A$ to $B$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the unit vector",
          "workingLatex": "\\hat{u} = \\begin{pmatrix} \\frac{3}{5} \\\\ \\frac{4}{5} \\end{pmatrix}",
          "explanation": "You can check its length is $\\sqrt{(\\tfrac{3}{5})^2 + (\\tfrac{4}{5})^2} = 1$, as required for a unit vector.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\hat{u} = \\begin{pmatrix} \\frac{3}{5} \\\\ \\frac{4}{5} \\end{pmatrix}$"
    }
  },
  {
    "id": "al.y1.pure.vector-geometry.q022",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Vector geometry",
    "subtopicId": "al.y1.pure.vector-geometry",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "vector",
    "tags": [
      "vector-geometry",
      "unit-vector",
      "displacement"
    ],
    "questionText": "The points $A$ and $B$ have coordinates $(-1, 2)$ and $(4, 14)$. Find a unit vector in the direction of $\\overrightarrow{AB}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Find the displacement vector",
          "workingLatex": "\\overrightarrow{AB} = \\begin{pmatrix} 4 \\\\ 14 \\end{pmatrix} - \\begin{pmatrix} -1 \\\\ 2 \\end{pmatrix} = \\begin{pmatrix} 5 \\\\ 12 \\end{pmatrix}",
          "explanation": "Subtracting $A$ from $B$ gives the direction from $A$ to $B$; note subtracting $-1$ adds to give $5$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Set up the magnitude",
          "workingLatex": "\\left| \\overrightarrow{AB} \\right| = \\sqrt{5^2 + 12^2}",
          "explanation": "To rescale to length one we first need the current length of the displacement.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compute the magnitude",
          "workingLatex": "= \\sqrt{25 + 144} = \\sqrt{169} = 13",
          "explanation": "These components form a $5$-$12$-$13$ triangle, so the length is a clean $13$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Recall the unit vector formula",
          "workingLatex": "\\hat{u} = \\frac{\\overrightarrow{AB}}{\\left| \\overrightarrow{AB} \\right|}",
          "explanation": "Dividing the vector by its length preserves the direction while making its magnitude one.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Divide each component by the magnitude",
          "workingLatex": "\\hat{u} = \\frac{1}{13}\\begin{pmatrix} 5 \\\\ 12 \\end{pmatrix} = \\begin{pmatrix} \\frac{5}{13} \\\\ \\frac{12}{13} \\end{pmatrix}",
          "explanation": "Scaling each component by $\\tfrac{1}{13}$ gives the unit vector in the direction of $\\overrightarrow{AB}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the unit vector",
          "workingLatex": "\\hat{u} = \\begin{pmatrix} \\frac{5}{13} \\\\ \\frac{12}{13} \\end{pmatrix}",
          "explanation": "A quick check gives $\\sqrt{(\\tfrac{5}{13})^2 + (\\tfrac{12}{13})^2} = 1$, confirming it is a unit vector.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\hat{u} = \\begin{pmatrix} \\frac{5}{13} \\\\ \\frac{12}{13} \\end{pmatrix}$"
    }
  },
  {
    "id": "al.y1.pure.vector-geometry.q023",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Vector geometry",
    "subtopicId": "al.y1.pure.vector-geometry",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "coordinates",
    "tags": [
      "vector-geometry",
      "ratio",
      "dividing-a-line",
      "position-vectors"
    ],
    "questionText": "The point $P$ divides $AB$ in the ratio $2:1$, where $A$ is $(2, 3)$ and $B$ is $(8, -3)$. Find the coordinates of $P$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write down the position vectors",
          "workingLatex": "\\mathbf{a} = (2, 3), \\quad \\mathbf{b} = (8, -3)",
          "explanation": "We record the coordinates of $A$ and $B$ as position vectors so we can do arithmetic with them directly.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Interpret the ratio",
          "workingLatex": "AP : PB = 2 : 1 \\ \\Rightarrow \\ P \\text{ is } \\tfrac{2}{3} \\text{ of the way from } A \\text{ to } B",
          "explanation": "A ratio of $2:1$ cuts $AB$ into $3$ equal parts, and $P$ sits after $2$ of them, so $P$ is $\\tfrac{2}{2+1} = \\tfrac{2}{3}$ along.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "State the ratio formula",
          "workingLatex": "\\overrightarrow{OP} = \\mathbf{a} + \\frac{2}{3}\\left(\\mathbf{b} - \\mathbf{a}\\right)",
          "explanation": "Starting at $A$ and travelling $\\tfrac{2}{3}$ of the displacement to $B$ lands us exactly on $P$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find the displacement AB",
          "workingLatex": "\\mathbf{b} - \\mathbf{a} = (8 - 2, \\ -3 - 3) = (6, -6)",
          "explanation": "The vector $\\overrightarrow{AB}$ tells us the direction and full length of the journey from $A$ to $B$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Scale the displacement",
          "workingLatex": "\\frac{2}{3}(6, -6) = (4, -4)",
          "explanation": "We take two-thirds of that journey because that is how far along $P$ lies.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Add to the position vector of A",
          "workingLatex": "\\overrightarrow{OP} = (2, 3) + (4, -4)",
          "explanation": "Beginning at $A$ and adding the scaled displacement moves us to $P$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Simplify to coordinates",
          "workingLatex": "\\overrightarrow{OP} = (6, -1)",
          "explanation": "Adding component by component gives the position of $P$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check the step AP",
          "workingLatex": "\\overrightarrow{AP} = (6 - 2, \\ -1 - 3) = (4, -4)",
          "explanation": "We test our answer by measuring how far $P$ is from $A$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Check the step PB",
          "workingLatex": "\\overrightarrow{PB} = (8 - 6, \\ -3 - (-1)) = (2, -2)",
          "explanation": "And how far $B$ lies beyond $P$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Confirm the ratio",
          "workingLatex": "\\overrightarrow{AP} = 2\\,\\overrightarrow{PB} \\ \\Rightarrow \\ AP : PB = 2 : 1",
          "explanation": "Since $\\overrightarrow{AP}$ is exactly twice $\\overrightarrow{PB}$, the point divides $AB$ in the required $2:1$ ratio.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P = (6, -1)$"
    }
  },
  {
    "id": "al.y1.pure.vector-geometry.q024",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Vector geometry",
    "subtopicId": "al.y1.pure.vector-geometry",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "coordinates",
    "tags": [
      "vector-geometry",
      "ratio",
      "dividing-a-line",
      "position-vectors"
    ],
    "questionText": "The point $P$ divides $AB$ in the ratio $1:3$, where $A$ is $(-1, 4)$ and $B$ is $(11, 8)$. Find the coordinates of $P$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write down the position vectors",
          "workingLatex": "\\mathbf{a} = (-1, 4), \\quad \\mathbf{b} = (11, 8)",
          "explanation": "We note the coordinates of $A$ and $B$ so we can combine them with vector arithmetic.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Interpret the ratio",
          "workingLatex": "AP : PB = 1 : 3 \\ \\Rightarrow \\ P \\text{ is } \\tfrac{1}{4} \\text{ of the way from } A \\text{ to } B",
          "explanation": "A ratio of $1:3$ splits $AB$ into $4$ equal parts and $P$ sits after just the first, so $P$ is $\\tfrac{1}{1+3} = \\tfrac{1}{4}$ along.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "State the ratio formula",
          "workingLatex": "\\overrightarrow{OP} = \\mathbf{a} + \\frac{1}{4}\\left(\\mathbf{b} - \\mathbf{a}\\right)",
          "explanation": "From $A$ we move a quarter of the way along the displacement to $B$ to reach $P$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find the displacement AB",
          "workingLatex": "\\mathbf{b} - \\mathbf{a} = (11 - (-1), \\ 8 - 4) = (12, 4)",
          "explanation": "This vector $\\overrightarrow{AB}$ captures the whole journey from $A$ to $B$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Scale the displacement",
          "workingLatex": "\\frac{1}{4}(12, 4) = (3, 1)",
          "explanation": "One quarter of the journey is how far $P$ travels from $A$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Add to the position vector of A",
          "workingLatex": "\\overrightarrow{OP} = (-1, 4) + (3, 1)",
          "explanation": "Adding the scaled displacement to $A$ places us at $P$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Simplify to coordinates",
          "workingLatex": "\\overrightarrow{OP} = (2, 5)",
          "explanation": "Adding each component gives the position of $P$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check the step AP",
          "workingLatex": "\\overrightarrow{AP} = (2 - (-1), \\ 5 - 4) = (3, 1)",
          "explanation": "We measure the actual step from $A$ to $P$ as a check.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Check the step PB",
          "workingLatex": "\\overrightarrow{PB} = (11 - 2, \\ 8 - 5) = (9, 3)",
          "explanation": "And the remaining step from $P$ to $B$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Confirm the ratio",
          "workingLatex": "\\overrightarrow{PB} = 3\\,\\overrightarrow{AP} \\ \\Rightarrow \\ AP : PB = 1 : 3",
          "explanation": "Since $\\overrightarrow{PB}$ is three times $\\overrightarrow{AP}$, the point divides $AB$ in the required $1:3$ ratio.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P = (2, 5)$"
    }
  },
  {
    "id": "al.y1.pure.vector-geometry.q025",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Vector geometry",
    "subtopicId": "al.y1.pure.vector-geometry",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "coordinates",
    "tags": [
      "vector-geometry",
      "ratio",
      "dividing-a-line",
      "position-vectors"
    ],
    "questionText": "The point $P$ divides $AB$ in the ratio $3:2$, where $A$ is $(1, -2)$ and $B$ is $(11, 8)$. Find the coordinates of $P$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write down the position vectors",
          "workingLatex": "\\mathbf{a} = (1, -2), \\quad \\mathbf{b} = (11, 8)",
          "explanation": "We record where $A$ and $B$ are so we can work with their position vectors.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Interpret the ratio",
          "workingLatex": "AP : PB = 3 : 2 \\ \\Rightarrow \\ P \\text{ is } \\tfrac{3}{5} \\text{ of the way from } A \\text{ to } B",
          "explanation": "A ratio of $3:2$ divides $AB$ into $5$ equal parts and $P$ sits after $3$ of them, so $P$ is $\\tfrac{3}{3+2} = \\tfrac{3}{5}$ along.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "State the ratio formula",
          "workingLatex": "\\overrightarrow{OP} = \\mathbf{a} + \\frac{3}{5}\\left(\\mathbf{b} - \\mathbf{a}\\right)",
          "explanation": "From $A$ we travel three-fifths of the displacement towards $B$ to reach $P$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find the displacement AB",
          "workingLatex": "\\mathbf{b} - \\mathbf{a} = (11 - 1, \\ 8 - (-2)) = (10, 10)",
          "explanation": "The vector $\\overrightarrow{AB}$ gives the full direction and length from $A$ to $B$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Scale the displacement",
          "workingLatex": "\\frac{3}{5}(10, 10) = (6, 6)",
          "explanation": "Three-fifths of the journey is how far $P$ has moved from $A$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Add to the position vector of A",
          "workingLatex": "\\overrightarrow{OP} = (1, -2) + (6, 6)",
          "explanation": "Adding the scaled displacement to $A$ brings us to $P$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Simplify to coordinates",
          "workingLatex": "\\overrightarrow{OP} = (7, 4)",
          "explanation": "Component-wise addition gives the position of $P$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check the step AP",
          "workingLatex": "\\overrightarrow{AP} = (7 - 1, \\ 4 - (-2)) = (6, 6)",
          "explanation": "We measure how far $P$ is from $A$ to verify the split.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Check the step PB",
          "workingLatex": "\\overrightarrow{PB} = (11 - 7, \\ 8 - 4) = (4, 4)",
          "explanation": "And how far $B$ lies beyond $P$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Confirm the ratio",
          "workingLatex": "\\overrightarrow{AP} = \\tfrac{3}{2}\\,\\overrightarrow{PB} \\ \\Rightarrow \\ AP : PB = 3 : 2",
          "explanation": "Since $\\overrightarrow{AP}$ is $\\tfrac{3}{2}$ times $\\overrightarrow{PB}$, the point divides $AB$ in the required $3:2$ ratio.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P = (7, 4)$"
    }
  },
  {
    "id": "al.y1.pure.vector-geometry.q026",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Vector geometry",
    "subtopicId": "al.y1.pure.vector-geometry",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "coordinates",
    "tags": [
      "vector-geometry",
      "ratio",
      "dividing-a-line",
      "position-vectors"
    ],
    "questionText": "The point $P$ divides $AB$ in the ratio $1:4$, where $A$ is $(3, 1)$ and $B$ is $(13, -9)$. Find the coordinates of $P$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write down the position vectors",
          "workingLatex": "\\mathbf{a} = (3, 1), \\quad \\mathbf{b} = (13, -9)",
          "explanation": "We note the coordinates of $A$ and $B$ ready for the ratio calculation.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Interpret the ratio",
          "workingLatex": "AP : PB = 1 : 4 \\ \\Rightarrow \\ P \\text{ is } \\tfrac{1}{5} \\text{ of the way from } A \\text{ to } B",
          "explanation": "A ratio of $1:4$ splits $AB$ into $5$ equal parts and $P$ sits after the first, so $P$ is $\\tfrac{1}{1+4} = \\tfrac{1}{5}$ along.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "State the ratio formula",
          "workingLatex": "\\overrightarrow{OP} = \\mathbf{a} + \\frac{1}{5}\\left(\\mathbf{b} - \\mathbf{a}\\right)",
          "explanation": "From $A$ we move one-fifth of the way along the displacement to $B$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find the displacement AB",
          "workingLatex": "\\mathbf{b} - \\mathbf{a} = (13 - 3, \\ -9 - 1) = (10, -10)",
          "explanation": "This vector $\\overrightarrow{AB}$ describes the whole journey from $A$ to $B$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Scale the displacement",
          "workingLatex": "\\frac{1}{5}(10, -10) = (2, -2)",
          "explanation": "One-fifth of the journey is the distance $P$ travels from $A$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Add to the position vector of A",
          "workingLatex": "\\overrightarrow{OP} = (3, 1) + (2, -2)",
          "explanation": "Adding the scaled displacement to $A$ takes us to $P$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Simplify to coordinates",
          "workingLatex": "\\overrightarrow{OP} = (5, -1)",
          "explanation": "Adding each component gives the position of $P$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check the step AP",
          "workingLatex": "\\overrightarrow{AP} = (5 - 3, \\ -1 - 1) = (2, -2)",
          "explanation": "We measure the step from $A$ to $P$ as a check.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Check the step PB",
          "workingLatex": "\\overrightarrow{PB} = (13 - 5, \\ -9 - (-1)) = (8, -8)",
          "explanation": "And the remaining step from $P$ to $B$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Confirm the ratio",
          "workingLatex": "\\overrightarrow{PB} = 4\\,\\overrightarrow{AP} \\ \\Rightarrow \\ AP : PB = 1 : 4",
          "explanation": "Since $\\overrightarrow{PB}$ is four times $\\overrightarrow{AP}$, the point divides $AB$ in the required $1:4$ ratio.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P = (5, -1)$"
    }
  },
  {
    "id": "al.y1.pure.vector-geometry.q027",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Vector geometry",
    "subtopicId": "al.y1.pure.vector-geometry",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "coordinates",
    "tags": [
      "vector-geometry",
      "ratio",
      "dividing-a-line",
      "position-vectors"
    ],
    "questionText": "The point $P$ divides $AB$ in the ratio $3:1$, where $A$ is $(-4, -3)$ and $B$ is $(8, 9)$. Find the coordinates of $P$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write down the position vectors",
          "workingLatex": "\\mathbf{a} = (-4, -3), \\quad \\mathbf{b} = (8, 9)",
          "explanation": "We record the coordinates of $A$ and $B$ to work with their position vectors.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Interpret the ratio",
          "workingLatex": "AP : PB = 3 : 1 \\ \\Rightarrow \\ P \\text{ is } \\tfrac{3}{4} \\text{ of the way from } A \\text{ to } B",
          "explanation": "A ratio of $3:1$ splits $AB$ into $4$ equal parts and $P$ sits after $3$ of them, so $P$ is $\\tfrac{3}{3+1} = \\tfrac{3}{4}$ along.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "State the ratio formula",
          "workingLatex": "\\overrightarrow{OP} = \\mathbf{a} + \\frac{3}{4}\\left(\\mathbf{b} - \\mathbf{a}\\right)",
          "explanation": "From $A$ we travel three-quarters of the displacement towards $B$ to reach $P$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find the displacement AB",
          "workingLatex": "\\mathbf{b} - \\mathbf{a} = (8 - (-4), \\ 9 - (-3)) = (12, 12)",
          "explanation": "The vector $\\overrightarrow{AB}$ gives the whole journey from $A$ to $B$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Scale the displacement",
          "workingLatex": "\\frac{3}{4}(12, 12) = (9, 9)",
          "explanation": "Three-quarters of the journey is the distance $P$ has moved from $A$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Add to the position vector of A",
          "workingLatex": "\\overrightarrow{OP} = (-4, -3) + (9, 9)",
          "explanation": "Adding the scaled displacement to $A$ brings us to $P$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Simplify to coordinates",
          "workingLatex": "\\overrightarrow{OP} = (5, 6)",
          "explanation": "Adding each component gives the position of $P$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check the step AP",
          "workingLatex": "\\overrightarrow{AP} = (5 - (-4), \\ 6 - (-3)) = (9, 9)",
          "explanation": "We measure how far $P$ is from $A$ to test the split.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Check the step PB",
          "workingLatex": "\\overrightarrow{PB} = (8 - 5, \\ 9 - 6) = (3, 3)",
          "explanation": "And how far $B$ lies beyond $P$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Confirm the ratio",
          "workingLatex": "\\overrightarrow{AP} = 3\\,\\overrightarrow{PB} \\ \\Rightarrow \\ AP : PB = 3 : 1",
          "explanation": "Since $\\overrightarrow{AP}$ is three times $\\overrightarrow{PB}$, the point divides $AB$ in the required $3:1$ ratio.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P = (5, 6)$"
    }
  },
  {
    "id": "al.y1.pure.vector-geometry.q028",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Vector geometry",
    "subtopicId": "al.y1.pure.vector-geometry",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "proof",
    "tags": [
      "vector-geometry",
      "collinearity",
      "scalar-multiple",
      "ratio"
    ],
    "questionText": "The points $A(1, 1)$, $B(3, 4)$ and $C(7, 10)$ are given. Show that $A$, $B$ and $C$ are collinear, and state the ratio $AB : BC$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up the position vectors",
          "workingLatex": "\\mathbf{a} = (1, 1), \\quad \\mathbf{b} = (3, 4), \\quad \\mathbf{c} = (7, 10)",
          "explanation": "We list the three points so we can compare the vectors that join them.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "State the plan",
          "workingLatex": "\\text{Collinear} \\iff \\overrightarrow{AC} = k\\,\\overrightarrow{AB} \\text{ for some scalar } k",
          "explanation": "Three points lie on one straight line when the vectors drawn from a shared point $A$ head in the same direction, that is when one is a scalar multiple of the other.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find AB",
          "workingLatex": "\\overrightarrow{AB} = \\mathbf{b} - \\mathbf{a} = (3 - 1, \\ 4 - 1) = (2, 3)",
          "explanation": "This is the direction and length of the step from $A$ to $B$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find AC",
          "workingLatex": "\\overrightarrow{AC} = \\mathbf{c} - \\mathbf{a} = (7 - 1, \\ 10 - 1) = (6, 9)",
          "explanation": "And this is the step from $A$ straight to $C$, which we will compare with $\\overrightarrow{AB}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Compare the first components",
          "workingLatex": "6 = k \\times 2 \\ \\Rightarrow \\ k = 3",
          "explanation": "If $\\overrightarrow{AC}$ is a multiple of $\\overrightarrow{AB}$, the $x$-parts fix the scale factor.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check the second components",
          "workingLatex": "k \\times 3 = 3 \\times 3 = 9 \\ \\checkmark",
          "explanation": "The same $k = 3$ must also reproduce the $y$-part, and it does, so the match is genuine in both directions.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Conclude collinearity",
          "workingLatex": "\\overrightarrow{AC} = 3\\,\\overrightarrow{AB}",
          "explanation": "Because $\\overrightarrow{AC}$ and $\\overrightarrow{AB}$ are parallel and both start at the common point $A$, the three points must lie on one straight line.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Find BC for the ratio",
          "workingLatex": "\\overrightarrow{BC} = \\mathbf{c} - \\mathbf{b} = (7 - 3, \\ 10 - 4) = (4, 6)",
          "explanation": "To compare lengths along the line we also need the step from $B$ to $C$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Express BC using AB",
          "workingLatex": "\\overrightarrow{BC} = (4, 6) = 2(2, 3) = 2\\,\\overrightarrow{AB}",
          "explanation": "$\\overrightarrow{BC}$ is exactly twice $\\overrightarrow{AB}$, so $BC$ is twice as long as $AB$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the ratio",
          "workingLatex": "AB : BC = 1 : 2",
          "explanation": "One length of $\\overrightarrow{AB}$ against two of the same length gives the ratio directly.",
          "diagram": null
        }
      ],
      "finalAnswer": "$A$, $B$, $C$ are collinear since $\\overrightarrow{AC} = 3\\,\\overrightarrow{AB}$, and $AB : BC = 1 : 2$."
    }
  },
  {
    "id": "al.y1.pure.vector-geometry.q029",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Vector geometry",
    "subtopicId": "al.y1.pure.vector-geometry",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "proof",
    "tags": [
      "vector-geometry",
      "collinearity",
      "scalar-multiple",
      "ratio"
    ],
    "questionText": "The points $A(-2, 3)$, $B(2, 5)$ and $C(8, 8)$ are given. Show that $A$, $B$ and $C$ are collinear, and state the ratio $AB : BC$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up the position vectors",
          "workingLatex": "\\mathbf{a} = (-2, 3), \\quad \\mathbf{b} = (2, 5), \\quad \\mathbf{c} = (8, 8)",
          "explanation": "We list the three points so we can compare the connecting vectors.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "State the plan",
          "workingLatex": "\\text{Collinear} \\iff \\overrightarrow{AC} = k\\,\\overrightarrow{AB} \\text{ for some scalar } k",
          "explanation": "Points are collinear when the vectors from a common point $A$ are parallel, i.e. one is a scalar multiple of the other.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find AB",
          "workingLatex": "\\overrightarrow{AB} = \\mathbf{b} - \\mathbf{a} = (2 - (-2), \\ 5 - 3) = (4, 2)",
          "explanation": "This is the step from $A$ to $B$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find AC",
          "workingLatex": "\\overrightarrow{AC} = \\mathbf{c} - \\mathbf{a} = (8 - (-2), \\ 8 - 3) = (10, 5)",
          "explanation": "And this is the step from $A$ to $C$, to be compared with $\\overrightarrow{AB}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Compare the first components",
          "workingLatex": "10 = k \\times 4 \\ \\Rightarrow \\ k = \\tfrac{5}{2}",
          "explanation": "The $x$-parts set the candidate scale factor.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check the second components",
          "workingLatex": "k \\times 2 = \\tfrac{5}{2} \\times 2 = 5 \\ \\checkmark",
          "explanation": "The same factor $\\tfrac{5}{2}$ must also recreate the $y$-part, and it does, confirming a true scalar multiple.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Conclude collinearity",
          "workingLatex": "\\overrightarrow{AC} = \\tfrac{5}{2}\\,\\overrightarrow{AB}",
          "explanation": "Since $\\overrightarrow{AC}$ is parallel to $\\overrightarrow{AB}$ and both begin at $A$, the three points lie on one straight line.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Find BC for the ratio",
          "workingLatex": "\\overrightarrow{BC} = \\mathbf{c} - \\mathbf{b} = (8 - 2, \\ 8 - 5) = (6, 3)",
          "explanation": "We need the step from $B$ to $C$ to compare lengths along the line.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Express BC using AB",
          "workingLatex": "\\overrightarrow{BC} = (6, 3) = \\tfrac{3}{2}(4, 2) = \\tfrac{3}{2}\\,\\overrightarrow{AB}",
          "explanation": "$\\overrightarrow{BC}$ is one and a half times $\\overrightarrow{AB}$, so $BC$ is $\\tfrac{3}{2}$ as long as $AB$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the ratio",
          "workingLatex": "AB : BC = 1 : \\tfrac{3}{2} = 2 : 3",
          "explanation": "Comparing $1$ length with $\\tfrac{3}{2}$ lengths, we multiply both by $2$ to clear the fraction, giving $2 : 3$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$A$, $B$, $C$ are collinear since $\\overrightarrow{AC} = \\tfrac{5}{2}\\,\\overrightarrow{AB}$, and $AB : BC = 2 : 3$."
    }
  },
  {
    "id": "al.y1.pure.vector-geometry.q030",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Vector geometry",
    "subtopicId": "al.y1.pure.vector-geometry",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "proof",
    "tags": [
      "vector-geometry",
      "collinearity",
      "scalar-multiple",
      "ratio"
    ],
    "questionText": "The points $A(2, -3)$, $B(5, 3)$ and $C(9, 11)$ are given. Show that $A$, $B$ and $C$ are collinear, and state the ratio $AB : BC$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up the position vectors",
          "workingLatex": "\\mathbf{a} = (2, -3), \\quad \\mathbf{b} = (5, 3), \\quad \\mathbf{c} = (9, 11)",
          "explanation": "We list the three points to compare the vectors joining them.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "State the plan",
          "workingLatex": "\\text{Collinear} \\iff \\overrightarrow{AC} = k\\,\\overrightarrow{AB} \\text{ for some scalar } k",
          "explanation": "Collinearity holds when the vectors from a shared point $A$ are parallel, so one is a scalar multiple of the other.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find AB",
          "workingLatex": "\\overrightarrow{AB} = \\mathbf{b} - \\mathbf{a} = (5 - 2, \\ 3 - (-3)) = (3, 6)",
          "explanation": "This is the step from $A$ to $B$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find AC",
          "workingLatex": "\\overrightarrow{AC} = \\mathbf{c} - \\mathbf{a} = (9 - 2, \\ 11 - (-3)) = (7, 14)",
          "explanation": "And this is the step from $A$ to $C$, to be checked against $\\overrightarrow{AB}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Compare the first components",
          "workingLatex": "7 = k \\times 3 \\ \\Rightarrow \\ k = \\tfrac{7}{3}",
          "explanation": "The $x$-parts fix the candidate scale factor.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check the second components",
          "workingLatex": "k \\times 6 = \\tfrac{7}{3} \\times 6 = 14 \\ \\checkmark",
          "explanation": "The same factor $\\tfrac{7}{3}$ must also reproduce the $y$-part, and it does, so it is a genuine scalar multiple.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Conclude collinearity",
          "workingLatex": "\\overrightarrow{AC} = \\tfrac{7}{3}\\,\\overrightarrow{AB}",
          "explanation": "As $\\overrightarrow{AC}$ is parallel to $\\overrightarrow{AB}$ with the common point $A$, the three points are collinear.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Find BC for the ratio",
          "workingLatex": "\\overrightarrow{BC} = \\mathbf{c} - \\mathbf{b} = (9 - 5, \\ 11 - 3) = (4, 8)",
          "explanation": "We need the step from $B$ to $C$ to compare distances along the line.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Express BC using AB",
          "workingLatex": "\\overrightarrow{BC} = (4, 8) = \\tfrac{4}{3}(3, 6) = \\tfrac{4}{3}\\,\\overrightarrow{AB}",
          "explanation": "$\\overrightarrow{BC}$ is $\\tfrac{4}{3}$ times $\\overrightarrow{AB}$, so $BC$ is $\\tfrac{4}{3}$ as long as $AB$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the ratio",
          "workingLatex": "AB : BC = 1 : \\tfrac{4}{3} = 3 : 4",
          "explanation": "Comparing $1$ length with $\\tfrac{4}{3}$ lengths, we multiply both by $3$ to clear the fraction, giving $3 : 4$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$A$, $B$, $C$ are collinear since $\\overrightarrow{AC} = \\tfrac{7}{3}\\,\\overrightarrow{AB}$, and $AB : BC = 3 : 4$."
    }
  },
  {
    "id": "al.y1.pure.vector-geometry.q031",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Vector geometry",
    "subtopicId": "al.y1.pure.vector-geometry",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "proof",
    "tags": [
      "vector-geometry",
      "collinearity",
      "scalar-multiple",
      "ratio"
    ],
    "questionText": "The points $A(0, 0)$, $B(2, 1)$ and $C(8, 4)$ are given. Show that $A$, $B$ and $C$ are collinear, and state the ratio $AB : BC$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up the position vectors",
          "workingLatex": "\\mathbf{a} = (0, 0), \\quad \\mathbf{b} = (2, 1), \\quad \\mathbf{c} = (8, 4)",
          "explanation": "We list the three points to compare the vectors joining them.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "State the plan",
          "workingLatex": "\\text{Collinear} \\iff \\overrightarrow{AC} = k\\,\\overrightarrow{AB} \\text{ for some scalar } k",
          "explanation": "The points lie on a line when the vectors from a shared point $A$ are parallel, i.e. one is a scalar multiple of the other.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find AB",
          "workingLatex": "\\overrightarrow{AB} = \\mathbf{b} - \\mathbf{a} = (2 - 0, \\ 1 - 0) = (2, 1)",
          "explanation": "This is the step from $A$ to $B$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find AC",
          "workingLatex": "\\overrightarrow{AC} = \\mathbf{c} - \\mathbf{a} = (8 - 0, \\ 4 - 0) = (8, 4)",
          "explanation": "And this is the step from $A$ to $C$, to be compared with $\\overrightarrow{AB}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Compare the first components",
          "workingLatex": "8 = k \\times 2 \\ \\Rightarrow \\ k = 4",
          "explanation": "The $x$-parts fix the candidate scale factor.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check the second components",
          "workingLatex": "k \\times 1 = 4 \\times 1 = 4 \\ \\checkmark",
          "explanation": "The same $k = 4$ must also reproduce the $y$-part, and it does, so the match holds in both components.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Conclude collinearity",
          "workingLatex": "\\overrightarrow{AC} = 4\\,\\overrightarrow{AB}",
          "explanation": "Since $\\overrightarrow{AC}$ is parallel to $\\overrightarrow{AB}$ and they share the point $A$, the three points are collinear.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Find BC for the ratio",
          "workingLatex": "\\overrightarrow{BC} = \\mathbf{c} - \\mathbf{b} = (8 - 2, \\ 4 - 1) = (6, 3)",
          "explanation": "We need the step from $B$ to $C$ to compare lengths along the line.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Express BC using AB",
          "workingLatex": "\\overrightarrow{BC} = (6, 3) = 3(2, 1) = 3\\,\\overrightarrow{AB}",
          "explanation": "$\\overrightarrow{BC}$ is three times $\\overrightarrow{AB}$, so $BC$ is three times as long as $AB$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the ratio",
          "workingLatex": "AB : BC = 1 : 3",
          "explanation": "One length of $\\overrightarrow{AB}$ against three of the same length gives the ratio directly.",
          "diagram": null
        }
      ],
      "finalAnswer": "$A$, $B$, $C$ are collinear since $\\overrightarrow{AC} = 4\\,\\overrightarrow{AB}$, and $AB : BC = 1 : 3$."
    }
  },
  {
    "id": "al.y1.pure.vector-geometry.q032",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Vector geometry",
    "subtopicId": "al.y1.pure.vector-geometry",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "coordinates",
    "tags": [
      "vector-geometry",
      "parallelogram",
      "fourth-vertex",
      "position-vectors"
    ],
    "questionText": "Three vertices of a parallelogram $ABCD$ are $A(1, 1)$, $B(4, 2)$ and $C(6, 5)$, with the vertices labelled in order. Find the coordinates of the fourth vertex $D$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up the known position vectors",
          "workingLatex": "\\mathbf{a} = (1, 1), \\quad \\mathbf{b} = (4, 2), \\quad \\mathbf{c} = (6, 5)",
          "explanation": "We note the three known corners so we can build the fourth from them.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Use the parallelogram property",
          "workingLatex": "\\overrightarrow{AB} = \\overrightarrow{DC}",
          "explanation": "In parallelogram $ABCD$ the sides $AB$ and $DC$ are opposite, so they are equal as vectors: same length and same direction. Note the order $D \\to C$ matches $A \\to B$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write both sides as position vectors",
          "workingLatex": "\\mathbf{b} - \\mathbf{a} = \\mathbf{c} - \\mathbf{d}",
          "explanation": "Translating each side into position vectors turns the geometric fact into an equation we can solve.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Rearrange for d",
          "workingLatex": "\\mathbf{d} = \\mathbf{a} + \\mathbf{c} - \\mathbf{b}",
          "explanation": "We isolate the unknown corner by making $\\mathbf{d}$ the subject of the equation.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute the components",
          "workingLatex": "\\mathbf{d} = (1, 1) + (6, 5) - (4, 2)",
          "explanation": "Now we simply insert the coordinates of the three known points.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Work out the x-coordinate",
          "workingLatex": "1 + 6 - 4 = 3",
          "explanation": "Combining the first components gives the $x$-value of $D$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Work out the y-coordinate",
          "workingLatex": "1 + 5 - 2 = 4",
          "explanation": "Combining the second components gives the $y$-value of $D$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State D",
          "workingLatex": "\\mathbf{d} = (3, 4)",
          "explanation": "These components together give the position of the fourth vertex.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Check one pair of opposite sides",
          "workingLatex": "\\overrightarrow{AB} = (3, 1), \\quad \\overrightarrow{DC} = (6 - 3, \\ 5 - 4) = (3, 1) \\ \\checkmark",
          "explanation": "$\\overrightarrow{AB}$ and $\\overrightarrow{DC}$ are equal, confirming one pair of opposite sides is parallel and equal.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Check the other pair of sides",
          "workingLatex": "\\overrightarrow{AD} = (2, 3), \\quad \\overrightarrow{BC} = (6 - 4, \\ 5 - 2) = (2, 3) \\ \\checkmark",
          "explanation": "$\\overrightarrow{AD}$ also equals $\\overrightarrow{BC}$, so $ABCD$ really is a parallelogram.",
          "diagram": null
        }
      ],
      "finalAnswer": "$D = (3, 4)$"
    }
  },
  {
    "id": "al.y1.pure.vector-geometry.q033",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Vector geometry",
    "subtopicId": "al.y1.pure.vector-geometry",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "coordinates",
    "tags": [
      "vector-geometry",
      "parallelogram",
      "fourth-vertex",
      "position-vectors"
    ],
    "questionText": "In a parallelogram $ABCD$ (vertices labelled in order), the points $B(2, -1)$, $C(6, 1)$ and $D(4, 5)$ are known. Find the coordinates of vertex $A$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up the known position vectors",
          "workingLatex": "\\mathbf{b} = (2, -1), \\quad \\mathbf{c} = (6, 1), \\quad \\mathbf{d} = (4, 5)",
          "explanation": "We note the three known corners so the missing vertex $A$ can be built from them.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Use the parallelogram property",
          "workingLatex": "\\overrightarrow{AB} = \\overrightarrow{DC}",
          "explanation": "In parallelogram $ABCD$ the opposite sides $AB$ and $DC$ are equal as vectors, matching direction $A \\to B$ with $D \\to C$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write both sides as position vectors",
          "workingLatex": "\\mathbf{b} - \\mathbf{a} = \\mathbf{c} - \\mathbf{d}",
          "explanation": "Converting the sides to position vectors gives an equation involving the unknown $\\mathbf{a}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Rearrange for a",
          "workingLatex": "\\mathbf{a} = \\mathbf{b} - \\mathbf{c} + \\mathbf{d}",
          "explanation": "We isolate $\\mathbf{a}$ by moving the other terms across the equation.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute the components",
          "workingLatex": "\\mathbf{a} = (2, -1) - (6, 1) + (4, 5)",
          "explanation": "We insert the coordinates of the three known points.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Work out the x-coordinate",
          "workingLatex": "2 - 6 + 4 = 0",
          "explanation": "Combining the first components gives the $x$-value of $A$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Work out the y-coordinate",
          "workingLatex": "-1 - 1 + 5 = 3",
          "explanation": "Combining the second components gives the $y$-value of $A$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State A",
          "workingLatex": "\\mathbf{a} = (0, 3)",
          "explanation": "These components together give the position of the missing vertex.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Check one pair of opposite sides",
          "workingLatex": "\\overrightarrow{AB} = (2 - 0, \\ -1 - 3) = (2, -4), \\quad \\overrightarrow{DC} = (6 - 4, \\ 1 - 5) = (2, -4) \\ \\checkmark",
          "explanation": "$\\overrightarrow{AB}$ equals $\\overrightarrow{DC}$, confirming one pair of opposite sides is parallel and equal.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Check the other pair of sides",
          "workingLatex": "\\overrightarrow{AD} = (4 - 0, \\ 5 - 3) = (4, 2), \\quad \\overrightarrow{BC} = (6 - 2, \\ 1 - (-1)) = (4, 2) \\ \\checkmark",
          "explanation": "$\\overrightarrow{AD}$ also equals $\\overrightarrow{BC}$, so $ABCD$ is indeed a parallelogram.",
          "diagram": null
        }
      ],
      "finalAnswer": "$A = (0, 3)$"
    }
  },
  {
    "id": "al.y1.pure.vector-geometry.q034",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Vector geometry",
    "subtopicId": "al.y1.pure.vector-geometry",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "coordinates",
    "tags": [
      "vector-geometry",
      "parallelogram",
      "fourth-vertex",
      "position-vectors"
    ],
    "questionText": "A parallelogram $ABCD$ has vertices labelled in order with $A(0, 0)$, $B(4, 1)$ and $D(1, 5)$. Find the coordinates of vertex $C$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up the known position vectors",
          "workingLatex": "\\mathbf{a} = (0, 0), \\quad \\mathbf{b} = (4, 1), \\quad \\mathbf{d} = (1, 5)",
          "explanation": "We record the three known corners so the missing vertex $C$ can be found from them.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Use the parallelogram property",
          "workingLatex": "\\overrightarrow{AB} = \\overrightarrow{DC}",
          "explanation": "In parallelogram $ABCD$ the opposite sides $AB$ and $DC$ are equal as vectors, so the direction $A \\to B$ matches $D \\to C$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write both sides as position vectors",
          "workingLatex": "\\mathbf{b} - \\mathbf{a} = \\mathbf{c} - \\mathbf{d}",
          "explanation": "Converting the sides to position vectors gives an equation containing the unknown $\\mathbf{c}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Rearrange for c",
          "workingLatex": "\\mathbf{c} = \\mathbf{b} - \\mathbf{a} + \\mathbf{d}",
          "explanation": "We make $\\mathbf{c}$ the subject to isolate the missing corner.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute the components",
          "workingLatex": "\\mathbf{c} = (4, 1) - (0, 0) + (1, 5)",
          "explanation": "We insert the coordinates of the three known points.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Work out the x-coordinate",
          "workingLatex": "4 - 0 + 1 = 5",
          "explanation": "Combining the first components gives the $x$-value of $C$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Work out the y-coordinate",
          "workingLatex": "1 - 0 + 5 = 6",
          "explanation": "Combining the second components gives the $y$-value of $C$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State C",
          "workingLatex": "\\mathbf{c} = (5, 6)",
          "explanation": "These components together give the position of the missing vertex.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Check one pair of opposite sides",
          "workingLatex": "\\overrightarrow{AB} = (4, 1), \\quad \\overrightarrow{DC} = (5 - 1, \\ 6 - 5) = (4, 1) \\ \\checkmark",
          "explanation": "$\\overrightarrow{AB}$ equals $\\overrightarrow{DC}$, confirming one pair of opposite sides is parallel and equal.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Check the other pair of sides",
          "workingLatex": "\\overrightarrow{AD} = (1, 5), \\quad \\overrightarrow{BC} = (5 - 4, \\ 6 - 1) = (1, 5) \\ \\checkmark",
          "explanation": "$\\overrightarrow{AD}$ also equals $\\overrightarrow{BC}$, so $ABCD$ is genuinely a parallelogram.",
          "diagram": null
        }
      ],
      "finalAnswer": "$C = (5, 6)$"
    }
  },
  {
    "id": "al.y1.pure.vector-geometry.q035",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Vector geometry",
    "subtopicId": "al.y1.pure.vector-geometry",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "vector",
    "tags": [
      "vector-geometry",
      "position-vectors",
      "fraction-of-a-line",
      "displacement"
    ],
    "questionText": "The points $A$ and $B$ have position vectors $\\mathbf{a} = \\begin{pmatrix} 2 \\\\ 3 \\end{pmatrix}$ and $\\mathbf{b} = \\begin{pmatrix} 11 \\\\ 9 \\end{pmatrix}$. Find the position vector of the point $P$ that lies one third of the way from $A$ to $B$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Note the position vectors",
          "workingLatex": "\\mathbf{a} = \\begin{pmatrix} 2 \\\\ 3 \\end{pmatrix}, \\quad \\mathbf{b} = \\begin{pmatrix} 11 \\\\ 9 \\end{pmatrix}",
          "explanation": "We start by writing down where $A$ and $B$ sit as column vectors.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Interpret 'one third of the way'",
          "workingLatex": "\\overrightarrow{AP} = \\tfrac{1}{3}\\,\\overrightarrow{AB}",
          "explanation": "Being one third of the way from $A$ to $B$ means the step from $A$ to $P$ is one third of the whole step from $A$ to $B$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write the position vector of P",
          "workingLatex": "\\mathbf{p} = \\mathbf{a} + \\tfrac{1}{3}\\left(\\mathbf{b} - \\mathbf{a}\\right)",
          "explanation": "Begin at $A$ and add one third of the displacement towards $B$ to arrive at $P$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find the displacement AB",
          "workingLatex": "\\mathbf{b} - \\mathbf{a} = \\begin{pmatrix} 11 \\\\ 9 \\end{pmatrix} - \\begin{pmatrix} 2 \\\\ 3 \\end{pmatrix} = \\begin{pmatrix} 9 \\\\ 6 \\end{pmatrix}",
          "explanation": "Subtracting position vectors gives the full journey from $A$ to $B$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Scale by one third",
          "workingLatex": "\\tfrac{1}{3}\\begin{pmatrix} 9 \\\\ 6 \\end{pmatrix} = \\begin{pmatrix} 3 \\\\ 2 \\end{pmatrix}",
          "explanation": "One third of the journey is how far $P$ has travelled from $A$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Add to a",
          "workingLatex": "\\mathbf{p} = \\begin{pmatrix} 2 \\\\ 3 \\end{pmatrix} + \\begin{pmatrix} 3 \\\\ 2 \\end{pmatrix}",
          "explanation": "Adding the scaled displacement to $A$ places us at $P$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Simplify",
          "workingLatex": "\\mathbf{p} = \\begin{pmatrix} 5 \\\\ 5 \\end{pmatrix}",
          "explanation": "Adding component by component gives the position vector of $P$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Set up a check",
          "workingLatex": "\\overrightarrow{AP} = \\begin{pmatrix} 3 \\\\ 2 \\end{pmatrix}, \\quad \\overrightarrow{AB} = \\begin{pmatrix} 9 \\\\ 6 \\end{pmatrix}",
          "explanation": "We compare the two steps to confirm the fraction is right.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Confirm the fraction",
          "workingLatex": "\\overrightarrow{AP} = \\tfrac{1}{3}\\,\\overrightarrow{AB} \\ \\checkmark",
          "explanation": "$\\overrightarrow{AP}$ is exactly one third of $\\overrightarrow{AB}$, so $P$ is correctly placed.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\mathbf{p} = \\begin{pmatrix} 5 \\\\ 5 \\end{pmatrix}$"
    }
  },
  {
    "id": "al.y1.pure.vector-geometry.q036",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Vector geometry",
    "subtopicId": "al.y1.pure.vector-geometry",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "vector",
    "tags": [
      "vector-geometry",
      "position-vectors",
      "fraction-of-a-line",
      "displacement"
    ],
    "questionText": "Relative to an origin $O$, the point $A$ has position vector $\\mathbf{a} = 2\\mathbf{i} - \\mathbf{j}$ and the point $B$ has position vector $\\mathbf{b} = 14\\mathbf{i} + 11\\mathbf{j}$. Find the position vector of the point $P$ which is one third of the way from $A$ to $B$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Note the position vectors",
          "workingLatex": "\\mathbf{a} = 2\\mathbf{i} - \\mathbf{j}, \\quad \\mathbf{b} = 14\\mathbf{i} + 11\\mathbf{j}",
          "explanation": "We record $A$ and $B$ in $\\mathbf{i}$, $\\mathbf{j}$ component form.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Interpret the fraction",
          "workingLatex": "\\overrightarrow{AP} = \\tfrac{1}{3}\\,\\overrightarrow{AB}",
          "explanation": "One third of the way from $A$ to $B$ means the step $\\overrightarrow{AP}$ is one third of the full step $\\overrightarrow{AB}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write the position vector of P",
          "workingLatex": "\\mathbf{p} = \\mathbf{a} + \\tfrac{1}{3}\\left(\\mathbf{b} - \\mathbf{a}\\right)",
          "explanation": "Start at $A$ and travel one third of the way towards $B$ to land on $P$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find the displacement AB",
          "workingLatex": "\\mathbf{b} - \\mathbf{a} = (14\\mathbf{i} + 11\\mathbf{j}) - (2\\mathbf{i} - \\mathbf{j}) = 12\\mathbf{i} + 12\\mathbf{j}",
          "explanation": "Subtract like components: the $\\mathbf{i}$ parts and the $\\mathbf{j}$ parts separately.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Scale by one third",
          "workingLatex": "\\tfrac{1}{3}(12\\mathbf{i} + 12\\mathbf{j}) = 4\\mathbf{i} + 4\\mathbf{j}",
          "explanation": "One third of the displacement is the part of the journey $P$ has covered from $A$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Add to a",
          "workingLatex": "\\mathbf{p} = (2\\mathbf{i} - \\mathbf{j}) + (4\\mathbf{i} + 4\\mathbf{j})",
          "explanation": "Adding the scaled displacement to $A$ reaches $P$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Collect the i terms",
          "workingLatex": "\\mathbf{i}: \\ 2 + 4 = 6",
          "explanation": "We gather the horizontal components.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Collect the j terms",
          "workingLatex": "\\mathbf{j}: \\ -1 + 4 = 3",
          "explanation": "We gather the vertical components.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State p",
          "workingLatex": "\\mathbf{p} = 6\\mathbf{i} + 3\\mathbf{j}",
          "explanation": "Putting the components together gives the position vector of $P$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Sanity check the fraction",
          "workingLatex": "\\overrightarrow{AP} = 4\\mathbf{i} + 4\\mathbf{j} = \\tfrac{1}{3}(12\\mathbf{i} + 12\\mathbf{j}) = \\tfrac{1}{3}\\,\\overrightarrow{AB} \\ \\checkmark",
          "explanation": "$\\overrightarrow{AP}$ is exactly one third of $\\overrightarrow{AB}$, confirming $P$'s position.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\mathbf{p} = 6\\mathbf{i} + 3\\mathbf{j}$"
    }
  },
  {
    "id": "al.y1.pure.vector-geometry.q037",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Vector geometry",
    "subtopicId": "al.y1.pure.vector-geometry",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "vector",
    "tags": [
      "vector-geometry",
      "position-vector",
      "midpoint",
      "parallel-vectors"
    ],
    "questionText": "In triangle $OAB$, $\\overrightarrow{OA} = \\mathbf{a}$ and $\\overrightarrow{OB} = \\mathbf{b}$. The point $M$ is the midpoint of $AB$ and $N$ is the midpoint of $OB$. Express $\\overrightarrow{OM}$ and $\\overrightarrow{MN}$ in terms of $\\mathbf{a}$ and $\\mathbf{b}$, and hence show that $MN$ is parallel to $OA$, stating the ratio $\\left| \\overrightarrow{MN} \\right| : \\left| \\overrightarrow{OA} \\right|$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Find the vector AB",
          "workingLatex": "\\overrightarrow{AB} = \\overrightarrow{OB} - \\overrightarrow{OA} = \\mathbf{b} - \\mathbf{a}",
          "explanation": "To travel from $A$ to $B$ we can go back from $A$ to $O$ and then out to $B$, which gives $\\mathbf{b} - \\mathbf{a}$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find AM as half of AB",
          "workingLatex": "\\overrightarrow{AM} = \\tfrac{1}{2}\\overrightarrow{AB} = \\tfrac{1}{2}(\\mathbf{b} - \\mathbf{a})",
          "explanation": "$M$ is the midpoint of $AB$, so the step from $A$ to $M$ covers exactly half of the displacement from $A$ to $B$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Build a route from O to M",
          "workingLatex": "\\overrightarrow{OM} = \\overrightarrow{OA} + \\overrightarrow{AM} = \\mathbf{a} + \\tfrac{1}{2}(\\mathbf{b} - \\mathbf{a})",
          "explanation": "We reach $M$ by first going from $O$ to $A$, then from $A$ to $M$; adding these displacements gives the position vector of $M$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Simplify OM",
          "workingLatex": "\\overrightarrow{OM} = \\mathbf{a} - \\tfrac{1}{2}\\mathbf{a} + \\tfrac{1}{2}\\mathbf{b} = \\tfrac{1}{2}(\\mathbf{a} + \\mathbf{b})",
          "explanation": "Collecting the $\\mathbf{a}$ terms leaves half of each vector, which is the familiar result that a midpoint is the average of the two endpoints.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Write ON, the midpoint of OB",
          "workingLatex": "\\overrightarrow{ON} = \\tfrac{1}{2}\\overrightarrow{OB} = \\tfrac{1}{2}\\mathbf{b}",
          "explanation": "$N$ is the midpoint of $OB$, so its position vector is simply half of $\\mathbf{b}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Set up a route for MN",
          "workingLatex": "\\overrightarrow{MN} = \\overrightarrow{ON} - \\overrightarrow{OM}",
          "explanation": "The displacement from $M$ to $N$ is the position vector of $N$ minus the position vector of $M$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Substitute the two position vectors",
          "workingLatex": "\\overrightarrow{MN} = \\tfrac{1}{2}\\mathbf{b} - \\tfrac{1}{2}(\\mathbf{a} + \\mathbf{b})",
          "explanation": "We insert the expressions just found for $\\overrightarrow{ON}$ and $\\overrightarrow{OM}$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Simplify MN",
          "workingLatex": "\\overrightarrow{MN} = \\tfrac{1}{2}\\mathbf{b} - \\tfrac{1}{2}\\mathbf{a} - \\tfrac{1}{2}\\mathbf{b} = -\\tfrac{1}{2}\\mathbf{a}",
          "explanation": "The $\\mathbf{b}$ terms cancel, leaving a vector that points purely along $\\mathbf{a}$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Interpret as parallel to OA",
          "workingLatex": "\\overrightarrow{MN} = -\\tfrac{1}{2}\\mathbf{a} = -\\tfrac{1}{2}\\overrightarrow{OA}",
          "explanation": "Because $\\overrightarrow{MN}$ is a scalar multiple of $\\overrightarrow{OA}$, the two vectors are parallel; the negative sign only means they point in opposite directions.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the ratio of lengths",
          "workingLatex": "\\left| \\overrightarrow{MN} \\right| : \\left| \\overrightarrow{OA} \\right| = \\tfrac{1}{2} : 1 = 1 : 2",
          "explanation": "The scalar factor $\\tfrac{1}{2}$ tells us $MN$ is half as long as $OA$, giving the ratio $1:2$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\overrightarrow{OM} = \\tfrac{1}{2}(\\mathbf{a} + \\mathbf{b})$ and $\\overrightarrow{MN} = -\\tfrac{1}{2}\\mathbf{a}$, so $MN \\parallel OA$ with $\\left| \\overrightarrow{MN} \\right| : \\left| \\overrightarrow{OA} \\right| = 1 : 2$."
    }
  },
  {
    "id": "al.y1.pure.vector-geometry.q038",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Vector geometry",
    "subtopicId": "al.y1.pure.vector-geometry",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "vector",
    "tags": [
      "vector-geometry",
      "position-vector",
      "midpoint",
      "parallel-vectors"
    ],
    "questionText": "In triangle $OAB$, $\\overrightarrow{OA} = \\mathbf{a}$ and $\\overrightarrow{OB} = \\mathbf{b}$. The point $P$ is the midpoint of $OA$ and $Q$ is the midpoint of $OB$. Write down $\\overrightarrow{AB}$ and $\\overrightarrow{BA}$, and show that $\\overrightarrow{PQ}$ is parallel to $\\overrightarrow{AB}$, stating the ratio $PQ : AB$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Find AB",
          "workingLatex": "\\overrightarrow{AB} = \\overrightarrow{OB} - \\overrightarrow{OA} = \\mathbf{b} - \\mathbf{a}",
          "explanation": "Travelling from $A$ to $B$ means undoing $\\mathbf{a}$ to get back to $O$ and then applying $\\mathbf{b}$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find BA",
          "workingLatex": "\\overrightarrow{BA} = \\overrightarrow{OA} - \\overrightarrow{OB} = \\mathbf{a} - \\mathbf{b}",
          "explanation": "Going the other way, from $B$ to $A$, reverses that journey.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Note the relationship",
          "workingLatex": "\\overrightarrow{BA} = -\\overrightarrow{AB}",
          "explanation": "Reversing a journey gives the same vector with the opposite sign, which is a handy consistency check.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write OP",
          "workingLatex": "\\overrightarrow{OP} = \\tfrac{1}{2}\\overrightarrow{OA} = \\tfrac{1}{2}\\mathbf{a}",
          "explanation": "$P$ is the midpoint of $OA$, so its position vector is half of $\\mathbf{a}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Write OQ",
          "workingLatex": "\\overrightarrow{OQ} = \\tfrac{1}{2}\\overrightarrow{OB} = \\tfrac{1}{2}\\mathbf{b}",
          "explanation": "$Q$ is the midpoint of $OB$, so its position vector is half of $\\mathbf{b}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Set up PQ",
          "workingLatex": "\\overrightarrow{PQ} = \\overrightarrow{OQ} - \\overrightarrow{OP} = \\tfrac{1}{2}\\mathbf{b} - \\tfrac{1}{2}\\mathbf{a}",
          "explanation": "The displacement from $P$ to $Q$ is the difference of their position vectors.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Factor out one half",
          "workingLatex": "\\overrightarrow{PQ} = \\tfrac{1}{2}(\\mathbf{b} - \\mathbf{a})",
          "explanation": "Taking out the common factor $\\tfrac{1}{2}$ reveals the structure of the vector.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Compare with AB",
          "workingLatex": "\\overrightarrow{PQ} = \\tfrac{1}{2}\\overrightarrow{AB}",
          "explanation": "Since $\\overrightarrow{AB} = \\mathbf{b} - \\mathbf{a}$, we can see $\\overrightarrow{PQ}$ is exactly half of it.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Conclude",
          "workingLatex": "\\overrightarrow{PQ} \\parallel \\overrightarrow{AB}, \\quad PQ : AB = 1 : 2",
          "explanation": "A scalar multiple means the segments are parallel, and the factor $\\tfrac{1}{2}$ fixes the length ratio at $1:2$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\overrightarrow{AB} = \\mathbf{b} - \\mathbf{a}$, $\\overrightarrow{BA} = \\mathbf{a} - \\mathbf{b}$, and $\\overrightarrow{PQ} = \\tfrac{1}{2}(\\mathbf{b} - \\mathbf{a}) = \\tfrac{1}{2}\\overrightarrow{AB}$, so $PQ \\parallel AB$ with $PQ : AB = 1 : 2$."
    }
  },
  {
    "id": "al.y1.pure.vector-geometry.q039",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Vector geometry",
    "subtopicId": "al.y1.pure.vector-geometry",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "vector",
    "tags": [
      "vector-geometry",
      "position-vector",
      "ratio",
      "section-formula"
    ],
    "questionText": "In triangle $OAB$, $\\overrightarrow{OA} = \\mathbf{a}$ and $\\overrightarrow{OB} = \\mathbf{b}$. The point $P$ divides $AB$ in the ratio $AP:PB = 1:2$ and the point $Q$ divides $AB$ in the ratio $AQ:QB = 2:1$. Express $\\overrightarrow{OP}$ and $\\overrightarrow{OQ}$ in terms of $\\mathbf{a}$ and $\\mathbf{b}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Find AB",
          "workingLatex": "\\overrightarrow{AB} = \\overrightarrow{OB} - \\overrightarrow{OA} = \\mathbf{b} - \\mathbf{a}",
          "explanation": "This is the displacement along the side we are going to divide.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Interpret P's ratio",
          "workingLatex": "AP : PB = 1 : 2 \\Rightarrow \\overrightarrow{AP} = \\tfrac{1}{1+2}\\overrightarrow{AB} = \\tfrac{1}{3}\\overrightarrow{AB}",
          "explanation": "A ratio $1:2$ splits $AB$ into three equal parts, and $P$ sits after the first part, so $AP$ is one third of $AB$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write AP",
          "workingLatex": "\\overrightarrow{AP} = \\tfrac{1}{3}(\\mathbf{b} - \\mathbf{a})",
          "explanation": "We substitute the expression for $\\overrightarrow{AB}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Route to OP",
          "workingLatex": "\\overrightarrow{OP} = \\overrightarrow{OA} + \\overrightarrow{AP} = \\mathbf{a} + \\tfrac{1}{3}(\\mathbf{b} - \\mathbf{a})",
          "explanation": "Reach $P$ by going from $O$ to $A$ and then a third of the way towards $B$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify OP",
          "workingLatex": "\\overrightarrow{OP} = \\tfrac{2}{3}\\mathbf{a} + \\tfrac{1}{3}\\mathbf{b} = \\tfrac{1}{3}(2\\mathbf{a} + \\mathbf{b})",
          "explanation": "Collecting terms shows $P$ leans more towards $A$, which matches it being nearer that end.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Interpret Q's ratio",
          "workingLatex": "AQ : QB = 2 : 1 \\Rightarrow \\overrightarrow{AQ} = \\tfrac{2}{3}\\overrightarrow{AB}",
          "explanation": "Now the split is two parts to one, so $Q$ lies two thirds of the way from $A$ to $B$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Write AQ",
          "workingLatex": "\\overrightarrow{AQ} = \\tfrac{2}{3}(\\mathbf{b} - \\mathbf{a})",
          "explanation": "Again we substitute the expression for $\\overrightarrow{AB}$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Route to OQ",
          "workingLatex": "\\overrightarrow{OQ} = \\overrightarrow{OA} + \\overrightarrow{AQ} = \\mathbf{a} + \\tfrac{2}{3}(\\mathbf{b} - \\mathbf{a})",
          "explanation": "Reach $Q$ by going to $A$ and then two thirds of the way towards $B$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Simplify OQ",
          "workingLatex": "\\overrightarrow{OQ} = \\tfrac{1}{3}\\mathbf{a} + \\tfrac{2}{3}\\mathbf{b} = \\tfrac{1}{3}(\\mathbf{a} + 2\\mathbf{b})",
          "explanation": "This time $Q$ leans towards $B$, exactly as expected from the ratio.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Sanity check with the midpoint",
          "workingLatex": "\\tfrac{1}{2}(\\overrightarrow{OP} + \\overrightarrow{OQ}) = \\tfrac{1}{2}(\\mathbf{a} + \\mathbf{b})",
          "explanation": "$P$ and $Q$ are placed symmetrically about the midpoint $M$, so their average returns $\\tfrac{1}{2}(\\mathbf{a}+\\mathbf{b}) = \\overrightarrow{OM}$, which reassures us the two answers are consistent.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\overrightarrow{OP} = \\tfrac{1}{3}(2\\mathbf{a} + \\mathbf{b})$ and $\\overrightarrow{OQ} = \\tfrac{1}{3}(\\mathbf{a} + 2\\mathbf{b})$."
    }
  },
  {
    "id": "al.y1.pure.vector-geometry.q040",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Vector geometry",
    "subtopicId": "al.y1.pure.vector-geometry",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "proof",
    "tags": [
      "vector-geometry",
      "parallelogram",
      "diagonals",
      "position-vector"
    ],
    "questionText": "$OACB$ is a parallelogram with $\\overrightarrow{OA} = \\mathbf{a}$ and $\\overrightarrow{OB} = \\mathbf{b}$, where $C$ is the vertex opposite $O$. Express $\\overrightarrow{OC}$ in terms of $\\mathbf{a}$ and $\\mathbf{b}$, and prove that the diagonals $OC$ and $AB$ bisect each other.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify side AC",
          "workingLatex": "\\overrightarrow{AC} = \\overrightarrow{OB} = \\mathbf{b}",
          "explanation": "In parallelogram $OACB$ the side $AC$ is opposite and parallel to $OB$, so as vectors they are identical.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find OC",
          "workingLatex": "\\overrightarrow{OC} = \\overrightarrow{OA} + \\overrightarrow{AC} = \\mathbf{a} + \\mathbf{b}",
          "explanation": "Travel from $O$ to $A$ and then along $AC$ to reach the far corner $C$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find the other diagonal AB",
          "workingLatex": "\\overrightarrow{AB} = \\overrightarrow{OB} - \\overrightarrow{OA} = \\mathbf{b} - \\mathbf{a}",
          "explanation": "$AB$ is the second diagonal of the parallelogram, joining the other pair of corners.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Midpoint of diagonal OC",
          "workingLatex": "\\overrightarrow{OP} = \\tfrac{1}{2}\\overrightarrow{OC} = \\tfrac{1}{2}(\\mathbf{a} + \\mathbf{b})",
          "explanation": "Let $P$ be the midpoint of $OC$; its position vector is half of $\\overrightarrow{OC}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Midpoint of diagonal AB",
          "workingLatex": "\\overrightarrow{OQ} = \\overrightarrow{OA} + \\tfrac{1}{2}\\overrightarrow{AB}",
          "explanation": "Let $Q$ be the midpoint of $AB$; reach it by going to $A$ and then halfway along $AB$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute AB",
          "workingLatex": "\\overrightarrow{OQ} = \\mathbf{a} + \\tfrac{1}{2}(\\mathbf{b} - \\mathbf{a})",
          "explanation": "Insert the expression found for $\\overrightarrow{AB}$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Simplify OQ",
          "workingLatex": "\\overrightarrow{OQ} = \\tfrac{1}{2}(\\mathbf{a} + \\mathbf{b})",
          "explanation": "The $\\mathbf{a}$ terms combine to give the average of the two endpoints of $AB$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Compare the midpoints",
          "workingLatex": "\\overrightarrow{OP} = \\overrightarrow{OQ} = \\tfrac{1}{2}(\\mathbf{a} + \\mathbf{b})",
          "explanation": "Both diagonals have the same midpoint, so $P$ and $Q$ are in fact the same point.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Conclude",
          "workingLatex": "\\text{Diagonals share their midpoint} \\Rightarrow \\text{they bisect each other.}",
          "explanation": "Since each diagonal is cut exactly in half at this one shared point, the diagonals bisect each other, as required.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\overrightarrow{OC} = \\mathbf{a} + \\mathbf{b}$. Both diagonals have midpoint $\\tfrac{1}{2}(\\mathbf{a} + \\mathbf{b})$, so they bisect each other."
    }
  },
  {
    "id": "al.y1.pure.vector-geometry.q041",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Vector geometry",
    "subtopicId": "al.y1.pure.vector-geometry",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "vector",
    "tags": [
      "vector-geometry",
      "centroid",
      "median",
      "position-vector"
    ],
    "questionText": "In triangle $OAB$, $\\overrightarrow{OA} = \\mathbf{a}$ and $\\overrightarrow{OB} = \\mathbf{b}$. $M$ is the midpoint of $AB$, and $G$ is the point on $OM$ such that $OG:GM = 2:1$. Express $\\overrightarrow{OG}$ in terms of $\\mathbf{a}$ and $\\mathbf{b}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Find AB",
          "workingLatex": "\\overrightarrow{AB} = \\overrightarrow{OB} - \\overrightarrow{OA} = \\mathbf{b} - \\mathbf{a}",
          "explanation": "This is the base of the triangle, whose midpoint the median $OM$ runs to.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find AM",
          "workingLatex": "\\overrightarrow{AM} = \\tfrac{1}{2}\\overrightarrow{AB} = \\tfrac{1}{2}(\\mathbf{b} - \\mathbf{a})",
          "explanation": "$M$ is the midpoint of $AB$, so $AM$ is half of $AB$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Route to OM",
          "workingLatex": "\\overrightarrow{OM} = \\overrightarrow{OA} + \\overrightarrow{AM} = \\mathbf{a} + \\tfrac{1}{2}(\\mathbf{b} - \\mathbf{a})",
          "explanation": "Reach $M$ from $O$ by going via $A$ and then halfway along $AB$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Simplify OM",
          "workingLatex": "\\overrightarrow{OM} = \\tfrac{1}{2}(\\mathbf{a} + \\mathbf{b})",
          "explanation": "The median from $O$ ends at the average of $A$ and $B$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Interpret the ratio on OM",
          "workingLatex": "OG : GM = 2 : 1 \\Rightarrow \\overrightarrow{OG} = \\tfrac{2}{2+1}\\overrightarrow{OM} = \\tfrac{2}{3}\\overrightarrow{OM}",
          "explanation": "$G$ divides $OM$ so that $OG$ is two of the three equal parts, i.e. two thirds of the way along.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute OM",
          "workingLatex": "\\overrightarrow{OG} = \\tfrac{2}{3} \\cdot \\tfrac{1}{2}(\\mathbf{a} + \\mathbf{b})",
          "explanation": "Insert the expression found for $\\overrightarrow{OM}$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Simplify",
          "workingLatex": "\\overrightarrow{OG} = \\tfrac{1}{3}(\\mathbf{a} + \\mathbf{b})",
          "explanation": "The two thirds and the one half combine to one third.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Expand",
          "workingLatex": "\\overrightarrow{OG} = \\tfrac{1}{3}\\mathbf{a} + \\tfrac{1}{3}\\mathbf{b}",
          "explanation": "Writing it out separates the equal contribution of each vector.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Verify with the centroid formula",
          "workingLatex": "\\tfrac{1}{3}(\\mathbf{0} + \\mathbf{a} + \\mathbf{b}) = \\tfrac{1}{3}(\\mathbf{a} + \\mathbf{b})",
          "explanation": "$G$ is the centroid of triangle $OAB$, and averaging the three vertices $O$, $A$, $B$ confirms our answer.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\overrightarrow{OG} = \\tfrac{1}{3}(\\mathbf{a} + \\mathbf{b})$."
    }
  },
  {
    "id": "al.y1.pure.vector-geometry.q042",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Vector geometry",
    "subtopicId": "al.y1.pure.vector-geometry",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "value",
    "tags": [
      "vector-geometry",
      "collinearity",
      "parallel-vectors"
    ],
    "questionText": "The points $A(1, 2)$, $B(3, 6)$ and $C(6, k)$ are collinear. Find the value of $k$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Find AB",
          "workingLatex": "\\overrightarrow{AB} = \\begin{pmatrix} 3 - 1 \\\\ 6 - 2 \\end{pmatrix} = \\begin{pmatrix} 2 \\\\ 4 \\end{pmatrix}",
          "explanation": "Subtract the coordinates of $A$ from $B$ to get the displacement between the two points.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find AC",
          "workingLatex": "\\overrightarrow{AC} = \\begin{pmatrix} 6 - 1 \\\\ k - 2 \\end{pmatrix} = \\begin{pmatrix} 5 \\\\ k - 2 \\end{pmatrix}",
          "explanation": "Do the same for $A$ to $C$, carrying the unknown $k$ through.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "State the collinearity condition",
          "workingLatex": "\\overrightarrow{AC} = \\lambda\\, \\overrightarrow{AB}",
          "explanation": "If the three points lie on one straight line, then $\\overrightarrow{AC}$ must be a scalar multiple of $\\overrightarrow{AB}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Compare x-components",
          "workingLatex": "5 = 2\\lambda \\Rightarrow \\lambda = \\tfrac{5}{2}",
          "explanation": "The top entries must match, which pins down the scale factor $\\lambda$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Compare y-components",
          "workingLatex": "k - 2 = 4\\lambda",
          "explanation": "The bottom entries must obey the very same scale factor.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute lambda",
          "workingLatex": "k - 2 = 4 \\times \\tfrac{5}{2} = 10",
          "explanation": "Using $\\lambda = \\tfrac{5}{2}$ from the top row fixes the value of the bottom row.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Solve for k",
          "workingLatex": "k = 12",
          "explanation": "Add $2$ to both sides to isolate $k$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check both components",
          "workingLatex": "\\overrightarrow{AC} = \\begin{pmatrix} 5 \\\\ 10 \\end{pmatrix} = \\tfrac{5}{2}\\begin{pmatrix} 2 \\\\ 4 \\end{pmatrix}",
          "explanation": "Both entries scale by exactly $\\tfrac{5}{2}$, confirming the vectors are parallel and the points collinear.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Conclude",
          "workingLatex": "k = 12",
          "explanation": "So the value that makes $A$, $B$ and $C$ lie on a straight line is $k = 12$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$k = 12$."
    }
  },
  {
    "id": "al.y1.pure.vector-geometry.q043",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Vector geometry",
    "subtopicId": "al.y1.pure.vector-geometry",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "tags": [
      "vector-geometry",
      "collinearity",
      "parallel-vectors"
    ],
    "questionText": "The points $A(2, 1)$, $B(5, 7)$ and $C(k, 13)$ are collinear. Find the value of $k$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Find AB",
          "workingLatex": "\\overrightarrow{AB} = \\begin{pmatrix} 5 - 2 \\\\ 7 - 1 \\end{pmatrix} = \\begin{pmatrix} 3 \\\\ 6 \\end{pmatrix}",
          "explanation": "Subtract $A$ from $B$ to find the direction of the line.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find AC",
          "workingLatex": "\\overrightarrow{AC} = \\begin{pmatrix} k - 2 \\\\ 13 - 1 \\end{pmatrix} = \\begin{pmatrix} k - 2 \\\\ 12 \\end{pmatrix}",
          "explanation": "The displacement from $A$ to $C$ has a fully known $y$-part and an unknown $x$-part.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "State the collinearity condition",
          "workingLatex": "\\overrightarrow{AC} = \\lambda\\, \\overrightarrow{AB}",
          "explanation": "Collinear points force $\\overrightarrow{AC}$ to be a scalar multiple of $\\overrightarrow{AB}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Use the fully known component",
          "workingLatex": "12 = 6\\lambda \\Rightarrow \\lambda = 2",
          "explanation": "Both $y$-entries are known, so starting there gives $\\lambda$ cleanly.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Compare x-components",
          "workingLatex": "k - 2 = 3\\lambda",
          "explanation": "The $x$-entries must scale by the same factor $\\lambda$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute lambda",
          "workingLatex": "k - 2 = 3 \\times 2 = 6",
          "explanation": "Insert $\\lambda = 2$ found from the $y$-components.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Solve for k",
          "workingLatex": "k = 8",
          "explanation": "Add $2$ to both sides to isolate $k$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check both components",
          "workingLatex": "\\overrightarrow{AC} = \\begin{pmatrix} 6 \\\\ 12 \\end{pmatrix} = 2\\begin{pmatrix} 3 \\\\ 6 \\end{pmatrix}",
          "explanation": "Both components double, so the vectors are genuinely parallel and the points collinear.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Conclude",
          "workingLatex": "k = 8",
          "explanation": "This is the value that places $C$ on the straight line through $A$ and $B$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$k = 8$."
    }
  },
  {
    "id": "al.y1.pure.vector-geometry.q044",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Vector geometry",
    "subtopicId": "al.y1.pure.vector-geometry",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "value",
    "tags": [
      "vector-geometry",
      "collinearity",
      "parallel-vectors"
    ],
    "questionText": "The points $A(-2, 5)$, $B(1, 3)$ and $C(7, k)$ are collinear. Find the value of $k$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Find AB",
          "workingLatex": "\\overrightarrow{AB} = \\begin{pmatrix} 1 - (-2) \\\\ 3 - 5 \\end{pmatrix} = \\begin{pmatrix} 3 \\\\ -2 \\end{pmatrix}",
          "explanation": "Subtract $A$ from $B$; the $y$-part is negative because the line slopes downwards.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find AC",
          "workingLatex": "\\overrightarrow{AC} = \\begin{pmatrix} 7 - (-2) \\\\ k - 5 \\end{pmatrix} = \\begin{pmatrix} 9 \\\\ k - 5 \\end{pmatrix}",
          "explanation": "The displacement from $A$ to $C$ keeps the unknown $k$ in the $y$-part.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "State the collinearity condition",
          "workingLatex": "\\overrightarrow{AC} = \\lambda\\, \\overrightarrow{AB}",
          "explanation": "For the points to be collinear, $\\overrightarrow{AC}$ must be a scalar multiple of $\\overrightarrow{AB}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Compare x-components",
          "workingLatex": "9 = 3\\lambda \\Rightarrow \\lambda = 3",
          "explanation": "The known $x$-entries give the scale factor directly.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Compare y-components",
          "workingLatex": "k - 5 = -2\\lambda",
          "explanation": "The $y$-entries must use the same factor $\\lambda$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute lambda",
          "workingLatex": "k - 5 = -2 \\times 3 = -6",
          "explanation": "Insert $\\lambda = 3$; the negative sign carries straight through.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Solve for k",
          "workingLatex": "k = -6 + 5 = -1",
          "explanation": "Add $5$ to both sides to isolate $k$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check both components",
          "workingLatex": "\\overrightarrow{AC} = \\begin{pmatrix} 9 \\\\ -6 \\end{pmatrix} = 3\\begin{pmatrix} 3 \\\\ -2 \\end{pmatrix}",
          "explanation": "Both components scale by $3$, confirming the points are collinear.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Conclude",
          "workingLatex": "k = -1",
          "explanation": "So $k = -1$ places $C$ on the line through $A$ and $B$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$k = -1$."
    }
  },
  {
    "id": "al.y1.pure.vector-geometry.q045",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Vector geometry",
    "subtopicId": "al.y1.pure.vector-geometry",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "proof",
    "tags": [
      "vector-geometry",
      "collinearity",
      "ratio",
      "proof"
    ],
    "questionText": "The points $O$, $A$ and $B$ have position vectors $\\mathbf{0}$, $\\mathbf{a}$ and $\\mathbf{b}$. The point $P$ has position vector $\\overrightarrow{OP} = \\tfrac{1}{3}\\mathbf{a} + \\tfrac{2}{3}\\mathbf{b}$. Prove that $P$ lies on the line $AB$ and state the ratio $AP:PB$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Plan the proof",
          "workingLatex": "\\text{Show } \\overrightarrow{AP} \\text{ and } \\overrightarrow{PB} \\text{ are parallel and share } P.",
          "explanation": "If two segments through a common point are parallel, the three points must lie on one line, so we compare $\\overrightarrow{AP}$ with $\\overrightarrow{PB}$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write AB for reference",
          "workingLatex": "\\overrightarrow{AB} = \\mathbf{b} - \\mathbf{a}",
          "explanation": "This is the direction of the line $AB$ that we want $P$ to lie on.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find AP",
          "workingLatex": "\\overrightarrow{AP} = \\overrightarrow{OP} - \\overrightarrow{OA} = \\left(\\tfrac{1}{3}\\mathbf{a} + \\tfrac{2}{3}\\mathbf{b}\\right) - \\mathbf{a}",
          "explanation": "The displacement from $A$ to $P$ is the difference of their position vectors.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Simplify AP",
          "workingLatex": "\\overrightarrow{AP} = -\\tfrac{2}{3}\\mathbf{a} + \\tfrac{2}{3}\\mathbf{b} = \\tfrac{2}{3}(\\mathbf{b} - \\mathbf{a})",
          "explanation": "Factoring shows $\\overrightarrow{AP}$ points along $\\mathbf{b} - \\mathbf{a}$, the same direction as $AB$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Relate AP to AB",
          "workingLatex": "\\overrightarrow{AP} = \\tfrac{2}{3}\\overrightarrow{AB}",
          "explanation": "So $P$ already lies on the line through $A$ in the direction of $AB$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find PB",
          "workingLatex": "\\overrightarrow{PB} = \\overrightarrow{OB} - \\overrightarrow{OP} = \\mathbf{b} - \\left(\\tfrac{1}{3}\\mathbf{a} + \\tfrac{2}{3}\\mathbf{b}\\right)",
          "explanation": "Now measure the displacement from $P$ onwards to $B$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Simplify PB",
          "workingLatex": "\\overrightarrow{PB} = -\\tfrac{1}{3}\\mathbf{a} + \\tfrac{1}{3}\\mathbf{b} = \\tfrac{1}{3}(\\mathbf{b} - \\mathbf{a})",
          "explanation": "This is again a multiple of $\\mathbf{b} - \\mathbf{a}$, the direction of $AB$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Compare AP and PB",
          "workingLatex": "\\overrightarrow{AP} = 2\\,\\overrightarrow{PB}",
          "explanation": "One is a scalar multiple of the other, so they are parallel; since both pass through $P$, the points $A$, $P$, $B$ are collinear.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Conclude P lies on AB",
          "workingLatex": "A, P, B \\text{ collinear} \\Rightarrow P \\text{ lies on } AB",
          "explanation": "A point collinear with $A$ and $B$, and lying between them, sits on the segment $AB$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the ratio",
          "workingLatex": "AP : PB = \\tfrac{2}{3} : \\tfrac{1}{3} = 2 : 1",
          "explanation": "The scalar factors give the ratio directly: $P$ divides $AB$ so that $AP:PB = 2:1$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\overrightarrow{AP} = 2\\,\\overrightarrow{PB}$ with common point $P$, so $P$ lies on $AB$ and $AP:PB = 2:1$."
    }
  },
  {
    "id": "al.y1.pure.vector-geometry.q046",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Vector geometry",
    "subtopicId": "al.y1.pure.vector-geometry",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "proof",
    "tags": [
      "vector-geometry",
      "midpoint",
      "parallel-vectors",
      "proof"
    ],
    "questionText": "In triangle $OAB$, $\\overrightarrow{OA} = \\mathbf{a}$ and $\\overrightarrow{OB} = \\mathbf{b}$. $D$ is the midpoint of $OA$ and $E$ is the midpoint of $OB$. Prove that $\\overrightarrow{DE}$ is parallel to $\\overrightarrow{AB}$ and find the ratio $DE:AB$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write OD",
          "workingLatex": "\\overrightarrow{OD} = \\tfrac{1}{2}\\overrightarrow{OA} = \\tfrac{1}{2}\\mathbf{a}",
          "explanation": "$D$ is the midpoint of $OA$, so its position vector is half of $\\mathbf{a}$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write OE",
          "workingLatex": "\\overrightarrow{OE} = \\tfrac{1}{2}\\overrightarrow{OB} = \\tfrac{1}{2}\\mathbf{b}",
          "explanation": "$E$ is the midpoint of $OB$, so its position vector is half of $\\mathbf{b}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Set up DE",
          "workingLatex": "\\overrightarrow{DE} = \\overrightarrow{OE} - \\overrightarrow{OD} = \\tfrac{1}{2}\\mathbf{b} - \\tfrac{1}{2}\\mathbf{a}",
          "explanation": "The displacement from $D$ to $E$ is the difference of their position vectors.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Factor DE",
          "workingLatex": "\\overrightarrow{DE} = \\tfrac{1}{2}(\\mathbf{b} - \\mathbf{a})",
          "explanation": "Taking out $\\tfrac{1}{2}$ exposes the direction of the vector.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Write AB",
          "workingLatex": "\\overrightarrow{AB} = \\overrightarrow{OB} - \\overrightarrow{OA} = \\mathbf{b} - \\mathbf{a}",
          "explanation": "This is the third side, the one we are comparing $DE$ against.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Compare DE and AB",
          "workingLatex": "\\overrightarrow{DE} = \\tfrac{1}{2}\\overrightarrow{AB}",
          "explanation": "$\\overrightarrow{DE}$ is exactly half of $\\overrightarrow{AB}$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Deduce parallel",
          "workingLatex": "\\overrightarrow{DE} = \\tfrac{1}{2}\\overrightarrow{AB} \\Rightarrow \\overrightarrow{DE} \\parallel \\overrightarrow{AB}",
          "explanation": "Because one vector is a scalar multiple of the other, the segments $DE$ and $AB$ are parallel.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State the ratio",
          "workingLatex": "DE : AB = 1 : 2",
          "explanation": "The scalar $\\tfrac{1}{2}$ means $DE$ is half the length of $AB$, giving the ratio $1:2$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Conclude",
          "workingLatex": "\\overrightarrow{DE} \\parallel \\overrightarrow{AB}, \\quad DE : AB = 1 : 2",
          "explanation": "This is the midpoint theorem: joining the midpoints of two sides gives a segment parallel to the third side and half its length.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\overrightarrow{DE} = \\tfrac{1}{2}\\overrightarrow{AB}$, so $DE \\parallel AB$ and $DE : AB = 1 : 2$."
    }
  },
  {
    "id": "al.y1.pure.vector-geometry.q047",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Vector geometry",
    "subtopicId": "al.y1.pure.vector-geometry",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "proof",
    "tags": [
      "vector-geometry",
      "collinearity",
      "parallel-vectors",
      "proof"
    ],
    "questionText": "The points $P(1, 1)$, $Q(3, 4)$ and $R(7, 10)$ are given relative to the origin $O$. Prove that $P$, $Q$ and $R$ are collinear and state the ratio $PQ:QR$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Find PQ",
          "workingLatex": "\\overrightarrow{PQ} = \\begin{pmatrix} 3 - 1 \\\\ 4 - 1 \\end{pmatrix} = \\begin{pmatrix} 2 \\\\ 3 \\end{pmatrix}",
          "explanation": "Subtract $P$ from $Q$ to get the displacement between the first two points.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find QR",
          "workingLatex": "\\overrightarrow{QR} = \\begin{pmatrix} 7 - 3 \\\\ 10 - 4 \\end{pmatrix} = \\begin{pmatrix} 4 \\\\ 6 \\end{pmatrix}",
          "explanation": "Subtract $Q$ from $R$ to get the displacement between the second and third points.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Look for a scalar multiple",
          "workingLatex": "\\overrightarrow{QR} = \\begin{pmatrix} 4 \\\\ 6 \\end{pmatrix} = 2\\begin{pmatrix} 2 \\\\ 3 \\end{pmatrix}",
          "explanation": "Both components of $\\overrightarrow{QR}$ are exactly twice those of $\\overrightarrow{PQ}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "State the relationship",
          "workingLatex": "\\overrightarrow{QR} = 2\\,\\overrightarrow{PQ}",
          "explanation": "So $\\overrightarrow{QR}$ is a scalar multiple of $\\overrightarrow{PQ}$, meaning the two vectors are parallel.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Use the common point",
          "workingLatex": "\\overrightarrow{PQ} \\text{ and } \\overrightarrow{QR} \\text{ share the point } Q",
          "explanation": "Parallel vectors that meet at a shared point must lie along the same straight line.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Conclude collinear",
          "workingLatex": "P, Q, R \\text{ are collinear}",
          "explanation": "Because $Q$ is common and the directions match, all three points lie on one line.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the ratio",
          "workingLatex": "PQ : QR = 1 : 2",
          "explanation": "The scalar factor $2$ tells us $QR$ is twice as long as $PQ$, so $PQ:QR = 1:2$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check with PR",
          "workingLatex": "\\overrightarrow{PR} = \\begin{pmatrix} 6 \\\\ 9 \\end{pmatrix} = 3\\begin{pmatrix} 2 \\\\ 3 \\end{pmatrix}",
          "explanation": "$\\overrightarrow{PR} = \\overrightarrow{PQ} + \\overrightarrow{QR} = 3\\,\\overrightarrow{PQ}$, which is consistent and reconfirms the collinearity.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Conclude",
          "workingLatex": "P, Q, R \\text{ collinear}, \\quad PQ : QR = 1 : 2",
          "explanation": "The proof is complete: the points lie on a single line and divide it in the ratio $1:2$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\overrightarrow{QR} = 2\\,\\overrightarrow{PQ}$ with common point $Q$, so $P$, $Q$, $R$ are collinear and $PQ:QR = 1:2$."
    }
  },
  {
    "id": "al.y1.pure.vector-geometry.q048",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Vector geometry",
    "subtopicId": "al.y1.pure.vector-geometry",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "tags": [
      "vector-geometry",
      "magnitude",
      "perimeter",
      "distance"
    ],
    "questionText": "A triangle has vertices $A(1, 2)$, $B(4, 6)$ and $C(4, 2)$. Find the perimeter of the triangle.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Find AB",
          "workingLatex": "\\overrightarrow{AB} = \\begin{pmatrix} 4 - 1 \\\\ 6 - 2 \\end{pmatrix} = \\begin{pmatrix} 3 \\\\ 4 \\end{pmatrix}",
          "explanation": "Subtract $A$ from $B$ to write the first side as a vector.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Length of AB",
          "workingLatex": "\\left| \\overrightarrow{AB} \\right| = \\sqrt{3^2 + 4^2} = \\sqrt{25} = 5",
          "explanation": "The length of a vector comes from Pythagoras applied to its components.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find BC",
          "workingLatex": "\\overrightarrow{BC} = \\begin{pmatrix} 4 - 4 \\\\ 2 - 6 \\end{pmatrix} = \\begin{pmatrix} 0 \\\\ -4 \\end{pmatrix}",
          "explanation": "Subtract $B$ from $C$ for the second side.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Length of BC",
          "workingLatex": "\\left| \\overrightarrow{BC} \\right| = \\sqrt{0^2 + (-4)^2} = 4",
          "explanation": "A purely vertical vector has length equal to the size of its $y$-component.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find CA",
          "workingLatex": "\\overrightarrow{CA} = \\begin{pmatrix} 1 - 4 \\\\ 2 - 2 \\end{pmatrix} = \\begin{pmatrix} -3 \\\\ 0 \\end{pmatrix}",
          "explanation": "Subtract $C$ from $A$ to close the triangle.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Length of CA",
          "workingLatex": "\\left| \\overrightarrow{CA} \\right| = \\sqrt{(-3)^2 + 0^2} = 3",
          "explanation": "A purely horizontal vector has length equal to the size of its $x$-component.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Add the three sides",
          "workingLatex": "\\text{Perimeter} = 5 + 4 + 3",
          "explanation": "The perimeter is simply the sum of the three side lengths.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Compute",
          "workingLatex": "\\text{Perimeter} = 12",
          "explanation": "Adding gives a perimeter of $12$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Sanity check",
          "workingLatex": "3^2 + 4^2 = 5^2",
          "explanation": "The sides $3$, $4$, $5$ satisfy Pythagoras, so this is a right-angled triangle, a neat confirmation the lengths are consistent.",
          "diagram": null
        }
      ],
      "finalAnswer": "Perimeter $= 12$."
    }
  },
  {
    "id": "al.y1.pure.vector-geometry.q049",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Vector geometry",
    "subtopicId": "al.y1.pure.vector-geometry",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "proof",
    "tags": [
      "vector-geometry",
      "magnitude",
      "isosceles",
      "proof"
    ],
    "questionText": "A triangle has vertices $A(-1, 1)$, $B(2, 5)$ and $C(6, 2)$. Show that the triangle is isosceles, and find its perimeter.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Find AB",
          "workingLatex": "\\overrightarrow{AB} = \\begin{pmatrix} 2 - (-1) \\\\ 5 - 1 \\end{pmatrix} = \\begin{pmatrix} 3 \\\\ 4 \\end{pmatrix}",
          "explanation": "Subtract $A$ from $B$ for the first side.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Length of AB",
          "workingLatex": "\\left| \\overrightarrow{AB} \\right| = \\sqrt{3^2 + 4^2} = 5",
          "explanation": "Apply Pythagoras to the components.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find BC",
          "workingLatex": "\\overrightarrow{BC} = \\begin{pmatrix} 6 - 2 \\\\ 2 - 5 \\end{pmatrix} = \\begin{pmatrix} 4 \\\\ -3 \\end{pmatrix}",
          "explanation": "Subtract $B$ from $C$ for the second side.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Length of BC",
          "workingLatex": "\\left| \\overrightarrow{BC} \\right| = \\sqrt{4^2 + (-3)^2} = 5",
          "explanation": "Again use Pythagoras; squaring removes the negative sign.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find CA",
          "workingLatex": "\\overrightarrow{CA} = \\begin{pmatrix} -1 - 6 \\\\ 1 - 2 \\end{pmatrix} = \\begin{pmatrix} -7 \\\\ -1 \\end{pmatrix}",
          "explanation": "Subtract $C$ from $A$ for the third side.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Length of CA",
          "workingLatex": "\\left| \\overrightarrow{CA} \\right| = \\sqrt{(-7)^2 + (-1)^2} = \\sqrt{50} = 5\\sqrt{2}",
          "explanation": "$\\sqrt{50} = \\sqrt{25 \\times 2} = 5\\sqrt{2}$, kept exact as a surd.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Compare the sides",
          "workingLatex": "\\left| \\overrightarrow{AB} \\right| = \\left| \\overrightarrow{BC} \\right| = 5",
          "explanation": "Two sides have equal length, which is exactly what makes a triangle isosceles.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check the angle at B",
          "workingLatex": "\\overrightarrow{BA} \\cdot \\overrightarrow{BC} = (-3)(4) + (-4)(-3) = 0",
          "explanation": "The dot product at $B$ is zero, so the two equal sides also meet at a right angle, making it a right-angled isosceles triangle.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Find the perimeter",
          "workingLatex": "\\text{Perimeter} = 5 + 5 + 5\\sqrt{2} = 10 + 5\\sqrt{2}",
          "explanation": "Add the three lengths, leaving the surd exact.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\left| \\overrightarrow{AB} \\right| = \\left| \\overrightarrow{BC} \\right| = 5$, so the triangle is isosceles; perimeter $= 10 + 5\\sqrt{2}$."
    }
  },
  {
    "id": "al.y1.pure.vector-geometry.q050",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Vector geometry",
    "subtopicId": "al.y1.pure.vector-geometry",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "tags": [
      "vector-geometry",
      "magnitude",
      "perimeter",
      "distance"
    ],
    "questionText": "A triangle has vertices $A(2, 1)$, $B(5, 5)$ and $C(0, 4)$. Find the exact perimeter of the triangle.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Find AB",
          "workingLatex": "\\overrightarrow{AB} = \\begin{pmatrix} 5 - 2 \\\\ 5 - 1 \\end{pmatrix} = \\begin{pmatrix} 3 \\\\ 4 \\end{pmatrix}",
          "explanation": "Subtract $A$ from $B$ for the first side.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Length of AB",
          "workingLatex": "\\left| \\overrightarrow{AB} \\right| = \\sqrt{3^2 + 4^2} = 5",
          "explanation": "Pythagoras on the components gives a whole number here.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find BC",
          "workingLatex": "\\overrightarrow{BC} = \\begin{pmatrix} 0 - 5 \\\\ 4 - 5 \\end{pmatrix} = \\begin{pmatrix} -5 \\\\ -1 \\end{pmatrix}",
          "explanation": "Subtract $B$ from $C$ for the second side.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Length of BC",
          "workingLatex": "\\left| \\overrightarrow{BC} \\right| = \\sqrt{(-5)^2 + (-1)^2} = \\sqrt{26}",
          "explanation": "$25 + 1 = 26$ is not a perfect square, so we leave $\\sqrt{26}$ as a surd.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find CA",
          "workingLatex": "\\overrightarrow{CA} = \\begin{pmatrix} 2 - 0 \\\\ 1 - 4 \\end{pmatrix} = \\begin{pmatrix} 2 \\\\ -3 \\end{pmatrix}",
          "explanation": "Subtract $C$ from $A$ to close the triangle.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Length of CA",
          "workingLatex": "\\left| \\overrightarrow{CA} \\right| = \\sqrt{2^2 + (-3)^2} = \\sqrt{13}",
          "explanation": "$4 + 9 = 13$, again not a perfect square, so it stays as $\\sqrt{13}$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Add the three sides",
          "workingLatex": "\\text{Perimeter} = 5 + \\sqrt{26} + \\sqrt{13}",
          "explanation": "The perimeter is the sum of the three exact side lengths.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State the exact form",
          "workingLatex": "\\text{Perimeter} = 5 + \\sqrt{13} + \\sqrt{26}",
          "explanation": "All three sides differ, so the triangle is scalene; we keep the answer exact.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Approximate value",
          "workingLatex": "5 + \\sqrt{13} + \\sqrt{26} \\approx 5 + 3.61 + 5.10 = 13.71",
          "explanation": "A decimal check gives about $13.71$, a sensible size for these coordinates.",
          "diagram": null
        }
      ],
      "finalAnswer": "Perimeter $= 5 + \\sqrt{13} + \\sqrt{26}$ (approximately $13.71$)."
    }
  },
  {
    "id": "al.y1.pure.vector-geometry.q051",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Vector geometry",
    "subtopicId": "al.y1.pure.vector-geometry",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "vector",
    "tags": [
      "vector-geometry",
      "ratio",
      "collinearity",
      "position-vector"
    ],
    "questionText": "In triangle $OAB$, $\\overrightarrow{OA} = \\mathbf{a}$ and $\\overrightarrow{OB} = \\mathbf{b}$. The point $P$ lies on $AB$ such that $AP:PB = 1:2$, and $Q$ is the midpoint of $OP$. The line $AQ$ produced meets $OB$ at $R$. Find the position vector of $R$ and hence the ratio $OR:RB$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write the vector AB in terms of a and b",
          "workingLatex": "\\overrightarrow{AB} = \\overrightarrow{OB} - \\overrightarrow{OA} = \\mathbf{b} - \\mathbf{a}",
          "explanation": "To travel from $A$ to $B$ we can go back to $O$ and out to $B$, so $\\overrightarrow{AB} = \\mathbf{b} - \\mathbf{a}$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find AP from the ratio AP:PB = 1:2",
          "workingLatex": "\\overrightarrow{AP} = \\frac{1}{3}\\overrightarrow{AB} = \\frac{1}{3}(\\mathbf{b} - \\mathbf{a})",
          "explanation": "The ratio $1:2$ splits $AB$ into three equal parts, so $P$ is one third of the way from $A$ to $B$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find the position vector of P",
          "workingLatex": "\\overrightarrow{OP} = \\overrightarrow{OA} + \\overrightarrow{AP} = \\mathbf{a} + \\frac{1}{3}(\\mathbf{b} - \\mathbf{a}) = \\frac{2}{3}\\mathbf{a} + \\frac{1}{3}\\mathbf{b}",
          "explanation": "Reach $P$ by going out to $A$ first and then along $\\overrightarrow{AP}$, then collect the $\\mathbf{a}$ terms.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find the position vector of Q, the midpoint of OP",
          "workingLatex": "\\overrightarrow{OQ} = \\frac{1}{2}\\overrightarrow{OP} = \\frac{1}{3}\\mathbf{a} + \\frac{1}{6}\\mathbf{b}",
          "explanation": "The midpoint of $OP$ is halfway out from $O$, so we halve each component of $\\overrightarrow{OP}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find the direction of the line AQ",
          "workingLatex": "\\overrightarrow{AQ} = \\overrightarrow{OQ} - \\overrightarrow{OA} = \\left(\\frac{1}{3} - 1\\right)\\mathbf{a} + \\frac{1}{6}\\mathbf{b} = -\\frac{2}{3}\\mathbf{a} + \\frac{1}{6}\\mathbf{b}",
          "explanation": "The direction along the line is the vector from $A$ to $Q$, which we will step along to reach $R$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Write a general point on line AQ",
          "workingLatex": "\\overrightarrow{OR} = \\overrightarrow{OA} + s\\,\\overrightarrow{AQ} = \\mathbf{a} + s\\left(-\\frac{2}{3}\\mathbf{a} + \\frac{1}{6}\\mathbf{b}\\right)",
          "explanation": "Any point on line $AQ$ is $A$ plus some multiple $s$ of the direction $\\overrightarrow{AQ}$; the right $s$ will land us on $OB$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Collect the a and b terms",
          "workingLatex": "\\overrightarrow{OR} = \\left(1 - \\frac{2}{3}s\\right)\\mathbf{a} + \\frac{s}{6}\\mathbf{b}",
          "explanation": "Grouping the coefficients lets us treat the $\\mathbf{a}$ and $\\mathbf{b}$ directions separately.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Use the fact that R lies on OB",
          "workingLatex": "R \\text{ on } OB \\; \\Rightarrow \\; \\text{coefficient of } \\mathbf{a} = 0",
          "explanation": "Line $OB$ contains only multiples of $\\mathbf{b}$, so a point on it must have no $\\mathbf{a}$ component.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Solve for the parameter s",
          "workingLatex": "1 - \\frac{2}{3}s = 0 \\; \\Rightarrow \\; s = \\frac{3}{2}",
          "explanation": "Setting the $\\mathbf{a}$ coefficient to zero pins down exactly where the line crosses $OB$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Substitute s to find OR",
          "workingLatex": "\\overrightarrow{OR} = \\frac{s}{6}\\mathbf{b} = \\frac{1}{6}\\cdot\\frac{3}{2}\\mathbf{b} = \\frac{1}{4}\\mathbf{b}",
          "explanation": "With the $\\mathbf{a}$ term gone, only the $\\mathbf{b}$ term remains and gives the position of $R$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Find RB",
          "workingLatex": "\\overrightarrow{RB} = \\overrightarrow{OB} - \\overrightarrow{OR} = \\mathbf{b} - \\frac{1}{4}\\mathbf{b} = \\frac{3}{4}\\mathbf{b}",
          "explanation": "The remaining part of $OB$ beyond $R$ is what is left after removing $\\overrightarrow{OR}$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "State the ratio OR:RB",
          "workingLatex": "OR:RB = \\frac{1}{4} : \\frac{3}{4} = 1:3",
          "explanation": "Comparing the two lengths along $OB$ gives the division ratio directly.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Consistency check using AQ:QR",
          "workingLatex": "Q \\text{ at } s = 1, \\quad R \\text{ at } s = \\frac{3}{2} \\; \\Rightarrow \\; AQ:QR = 1 : \\frac{1}{2} = 2:1",
          "explanation": "On the same line $Q$ sits at $s=1$ and $R$ at $s=\\frac{3}{2}$, a sensible spacing that confirms our value of $s$.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "State the final answer",
          "workingLatex": "\\overrightarrow{OR} = \\frac{1}{4}\\mathbf{b}, \\qquad OR:RB = 1:3",
          "explanation": "This gives both the position of $R$ and how it divides $OB$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\overrightarrow{OR} = \\frac{1}{4}\\mathbf{b}$; the point $R$ divides $OB$ with $OR:RB = 1:3$."
    }
  },
  {
    "id": "al.y1.pure.vector-geometry.q052",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Vector geometry",
    "subtopicId": "al.y1.pure.vector-geometry",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "vector",
    "tags": [
      "vector-geometry",
      "ratio",
      "collinearity",
      "position-vector"
    ],
    "questionText": "In triangle $OAB$, $\\overrightarrow{OA} = \\mathbf{a}$ and $\\overrightarrow{OB} = \\mathbf{b}$. The point $X$ is the midpoint of $OA$, and $Y$ lies on $AB$ with $AY:YB = 3:1$. The line $XY$ meets $OB$ produced at $Z$. Find the position vector of $Z$ and the ratio $OB:BZ$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write the vector AB in terms of a and b",
          "workingLatex": "\\overrightarrow{AB} = \\overrightarrow{OB} - \\overrightarrow{OA} = \\mathbf{b} - \\mathbf{a}",
          "explanation": "The step across the triangle from $A$ to $B$ is $\\mathbf{b} - \\mathbf{a}$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the position vector of X",
          "workingLatex": "\\overrightarrow{OX} = \\frac{1}{2}\\mathbf{a}",
          "explanation": "As the midpoint of $OA$, $X$ is halfway along $\\mathbf{a}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find AY from the ratio AY:YB = 3:1",
          "workingLatex": "\\overrightarrow{AY} = \\frac{3}{4}\\overrightarrow{AB} = \\frac{3}{4}(\\mathbf{b} - \\mathbf{a})",
          "explanation": "The ratio $3:1$ divides $AB$ into four parts, so $Y$ is three quarters of the way from $A$ to $B$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find the position vector of Y",
          "workingLatex": "\\overrightarrow{OY} = \\overrightarrow{OA} + \\overrightarrow{AY} = \\mathbf{a} + \\frac{3}{4}(\\mathbf{b} - \\mathbf{a}) = \\frac{1}{4}\\mathbf{a} + \\frac{3}{4}\\mathbf{b}",
          "explanation": "Go out to $A$ and then along $\\overrightarrow{AY}$, collecting the $\\mathbf{a}$ terms.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find the direction of the line XY",
          "workingLatex": "\\overrightarrow{XY} = \\overrightarrow{OY} - \\overrightarrow{OX} = \\left(\\frac{1}{4} - \\frac{1}{2}\\right)\\mathbf{a} + \\frac{3}{4}\\mathbf{b} = -\\frac{1}{4}\\mathbf{a} + \\frac{3}{4}\\mathbf{b}",
          "explanation": "This direction is the one we step along from $X$ to reach $Z$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Write a general point on line XY",
          "workingLatex": "\\overrightarrow{OZ} = \\overrightarrow{OX} + t\\,\\overrightarrow{XY} = \\frac{1}{2}\\mathbf{a} + t\\left(-\\frac{1}{4}\\mathbf{a} + \\frac{3}{4}\\mathbf{b}\\right)",
          "explanation": "Every point on line $XY$ is $X$ plus a multiple $t$ of its direction.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Collect the a and b terms",
          "workingLatex": "\\overrightarrow{OZ} = \\left(\\frac{1}{2} - \\frac{t}{4}\\right)\\mathbf{a} + \\frac{3t}{4}\\mathbf{b}",
          "explanation": "Grouping the coefficients separates the $\\mathbf{a}$ and $\\mathbf{b}$ directions.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Use the fact that Z lies on OB",
          "workingLatex": "Z \\text{ on } OB \\; \\Rightarrow \\; \\frac{1}{2} - \\frac{t}{4} = 0",
          "explanation": "A point on line $OB$ has no $\\mathbf{a}$ component, so its $\\mathbf{a}$ coefficient must be zero.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Solve for the parameter t",
          "workingLatex": "\\frac{1}{2} = \\frac{t}{4} \\; \\Rightarrow \\; t = 2",
          "explanation": "This value of $t$ is where the line $XY$ actually crosses $OB$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Substitute t to find OZ",
          "workingLatex": "\\overrightarrow{OZ} = \\frac{3t}{4}\\mathbf{b} = \\frac{3(2)}{4}\\mathbf{b} = \\frac{3}{2}\\mathbf{b}",
          "explanation": "With the $\\mathbf{a}$ part removed, the $\\mathbf{b}$ term gives the position of $Z$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Interpret the position of Z",
          "workingLatex": "\\overrightarrow{OZ} = \\frac{3}{2}\\mathbf{b} > \\mathbf{b} = \\overrightarrow{OB}",
          "explanation": "Since $\\frac{3}{2} > 1$, point $Z$ lies beyond $B$, on $OB$ produced, as the question described.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Find BZ",
          "workingLatex": "\\overrightarrow{BZ} = \\overrightarrow{OZ} - \\overrightarrow{OB} = \\frac{3}{2}\\mathbf{b} - \\mathbf{b} = \\frac{1}{2}\\mathbf{b}",
          "explanation": "The extra stretch past $B$ is the difference between the two position vectors.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "State the ratio OB:BZ",
          "workingLatex": "OB:BZ = 1 : \\frac{1}{2} = 2:1",
          "explanation": "Comparing $\\overrightarrow{OB}$ with $\\overrightarrow{BZ}$ gives the ratio.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "State the final answer",
          "workingLatex": "\\overrightarrow{OZ} = \\frac{3}{2}\\mathbf{b}, \\qquad OB:BZ = 2:1",
          "explanation": "This fixes both the position of $Z$ and how far it lies beyond $B$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\overrightarrow{OZ} = \\frac{3}{2}\\mathbf{b}$; $Z$ lies on $OB$ produced with $OB:BZ = 2:1$."
    }
  },
  {
    "id": "al.y1.pure.vector-geometry.q053",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Vector geometry",
    "subtopicId": "al.y1.pure.vector-geometry",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "vector",
    "tags": [
      "vector-geometry",
      "ratio",
      "midpoint",
      "position-vector"
    ],
    "questionText": "In triangle $OAB$, $\\overrightarrow{OA} = \\mathbf{a}$ and $\\overrightarrow{OB} = \\mathbf{b}$. The point $D$ is the midpoint of $AB$, and $E$ is the midpoint of $OD$. The line $AE$ produced meets $OB$ at $F$. Find the position vector of $F$ and the ratio $OF:FB$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write the vector AB in terms of a and b",
          "workingLatex": "\\overrightarrow{AB} = \\overrightarrow{OB} - \\overrightarrow{OA} = \\mathbf{b} - \\mathbf{a}",
          "explanation": "The side from $A$ to $B$ is $\\mathbf{b} - \\mathbf{a}$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find the position vector of D, the midpoint of AB",
          "workingLatex": "\\overrightarrow{OD} = \\overrightarrow{OA} + \\frac{1}{2}\\overrightarrow{AB} = \\mathbf{a} + \\frac{1}{2}(\\mathbf{b} - \\mathbf{a}) = \\frac{1}{2}\\mathbf{a} + \\frac{1}{2}\\mathbf{b}",
          "explanation": "Halfway along $AB$ from $A$ lands us at the midpoint $D$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find the position vector of E, the midpoint of OD",
          "workingLatex": "\\overrightarrow{OE} = \\frac{1}{2}\\overrightarrow{OD} = \\frac{1}{4}\\mathbf{a} + \\frac{1}{4}\\mathbf{b}",
          "explanation": "$E$ is halfway out along $OD$, so we halve each component of $\\overrightarrow{OD}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find the direction of the line AE",
          "workingLatex": "\\overrightarrow{AE} = \\overrightarrow{OE} - \\overrightarrow{OA} = \\left(\\frac{1}{4} - 1\\right)\\mathbf{a} + \\frac{1}{4}\\mathbf{b} = -\\frac{3}{4}\\mathbf{a} + \\frac{1}{4}\\mathbf{b}",
          "explanation": "This is the direction we travel from $A$ towards $E$ and on to $F$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Write a general point on line AE",
          "workingLatex": "\\overrightarrow{OF} = \\overrightarrow{OA} + s\\,\\overrightarrow{AE} = \\mathbf{a} + s\\left(-\\frac{3}{4}\\mathbf{a} + \\frac{1}{4}\\mathbf{b}\\right)",
          "explanation": "A point on line $AE$ is $A$ plus a multiple $s$ of its direction.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Collect the a and b terms",
          "workingLatex": "\\overrightarrow{OF} = \\left(1 - \\frac{3}{4}s\\right)\\mathbf{a} + \\frac{s}{4}\\mathbf{b}",
          "explanation": "Grouping the coefficients keeps the two directions separate.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Use the fact that F lies on OB",
          "workingLatex": "F \\text{ on } OB \\; \\Rightarrow \\; 1 - \\frac{3}{4}s = 0",
          "explanation": "A point on $OB$ has no $\\mathbf{a}$ component, so its $\\mathbf{a}$ coefficient is zero.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Solve for the parameter s",
          "workingLatex": "\\frac{3}{4}s = 1 \\; \\Rightarrow \\; s = \\frac{4}{3}",
          "explanation": "This value of $s$ locates where $AE$ meets $OB$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Substitute s to find OF",
          "workingLatex": "\\overrightarrow{OF} = \\frac{s}{4}\\mathbf{b} = \\frac{1}{4}\\cdot\\frac{4}{3}\\mathbf{b} = \\frac{1}{3}\\mathbf{b}",
          "explanation": "With the $\\mathbf{a}$ term gone, the $\\mathbf{b}$ term gives the position of $F$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Find FB",
          "workingLatex": "\\overrightarrow{FB} = \\overrightarrow{OB} - \\overrightarrow{OF} = \\mathbf{b} - \\frac{1}{3}\\mathbf{b} = \\frac{2}{3}\\mathbf{b}",
          "explanation": "The remaining part of $OB$ beyond $F$ is what is left after removing $\\overrightarrow{OF}$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "State the ratio OF:FB",
          "workingLatex": "OF:FB = \\frac{1}{3} : \\frac{2}{3} = 1:2",
          "explanation": "Comparing the two lengths along $OB$ gives the division ratio.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Consistency check using AE:EF",
          "workingLatex": "E \\text{ at } s = 1, \\quad F \\text{ at } s = \\frac{4}{3} \\; \\Rightarrow \\; AE:EF = 1 : \\frac{1}{3} = 3:1",
          "explanation": "On the line, $E$ is at $s=1$ and $F$ at $s=\\frac{4}{3}$, a reasonable spacing that supports our value of $s$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "State the final answer",
          "workingLatex": "\\overrightarrow{OF} = \\frac{1}{3}\\mathbf{b}, \\qquad OF:FB = 1:2",
          "explanation": "This gives the position of $F$ and how it divides $OB$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\overrightarrow{OF} = \\frac{1}{3}\\mathbf{b}$; the point $F$ divides $OB$ with $OF:FB = 1:2$."
    }
  },
  {
    "id": "al.y1.pure.vector-geometry.q054",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Vector geometry",
    "subtopicId": "al.y1.pure.vector-geometry",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "vector",
    "tags": [
      "vector-geometry",
      "cevians",
      "intersection",
      "ratio"
    ],
    "questionText": "In triangle $OAB$, $\\overrightarrow{OA} = \\mathbf{a}$ and $\\overrightarrow{OB} = \\mathbf{b}$. The point $M$ is the midpoint of $AB$, and $N$ lies on $OA$ with $ON:NA = 2:1$. The lines $OM$ and $BN$ intersect at $X$. Find the position vector of $X$ and the ratios $OX:XM$ and $BX:XN$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Find the position vector of M, the midpoint of AB",
          "workingLatex": "\\overrightarrow{OM} = \\overrightarrow{OA} + \\frac{1}{2}(\\mathbf{b} - \\mathbf{a}) = \\frac{1}{2}\\mathbf{a} + \\frac{1}{2}\\mathbf{b} = \\frac{1}{2}(\\mathbf{a} + \\mathbf{b})",
          "explanation": "Halfway along $AB$ from $A$ gives the midpoint, which is the average of the two position vectors.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find the position vector of N on OA",
          "workingLatex": "\\overrightarrow{ON} = \\frac{2}{3}\\mathbf{a}",
          "explanation": "With $ON:NA = 2:1$, point $N$ is two thirds of the way from $O$ to $A$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write X on the line OM with parameter lambda",
          "workingLatex": "\\overrightarrow{OX} = \\lambda\\,\\overrightarrow{OM} = \\frac{\\lambda}{2}\\mathbf{a} + \\frac{\\lambda}{2}\\mathbf{b}",
          "explanation": "Any point on $OM$ is a scalar multiple $\\lambda$ of $\\overrightarrow{OM}$, since the line starts at the origin.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find the direction of the line BN",
          "workingLatex": "\\overrightarrow{BN} = \\overrightarrow{ON} - \\overrightarrow{OB} = \\frac{2}{3}\\mathbf{a} - \\mathbf{b}",
          "explanation": "The direction of $BN$ is the step from $B$ to $N$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Write X on the line BN with parameter mu",
          "workingLatex": "\\overrightarrow{OX} = \\overrightarrow{OB} + \\mu\\,\\overrightarrow{BN} = \\mathbf{b} + \\mu\\left(\\frac{2}{3}\\mathbf{a} - \\mathbf{b}\\right) = \\frac{2\\mu}{3}\\mathbf{a} + (1 - \\mu)\\mathbf{b}",
          "explanation": "The same point $X$ can also be written starting from $B$ and moving a fraction $\\mu$ along $BN$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Equate the coefficients of a",
          "workingLatex": "\\frac{\\lambda}{2} = \\frac{2\\mu}{3}",
          "explanation": "Because $\\mathbf{a}$ and $\\mathbf{b}$ are not parallel, the two expressions for $X$ can only agree if the $\\mathbf{a}$ coefficients match.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Equate the coefficients of b",
          "workingLatex": "\\frac{\\lambda}{2} = 1 - \\mu",
          "explanation": "The $\\mathbf{b}$ coefficients must match too, giving a second equation.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Combine the two equations",
          "workingLatex": "\\frac{2\\mu}{3} = 1 - \\mu",
          "explanation": "Both right-hand sides equal $\\frac{\\lambda}{2}$, so they equal each other, eliminating $\\lambda$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Solve for mu",
          "workingLatex": "\\frac{2\\mu}{3} + \\mu = 1 \\; \\Rightarrow \\; \\frac{5\\mu}{3} = 1 \\; \\Rightarrow \\; \\mu = \\frac{3}{5}",
          "explanation": "Collecting the $\\mu$ terms and solving gives how far along $BN$ the crossing lies.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Find lambda",
          "workingLatex": "\\frac{\\lambda}{2} = 1 - \\frac{3}{5} = \\frac{2}{5} \\; \\Rightarrow \\; \\lambda = \\frac{4}{5}",
          "explanation": "Substituting $\\mu$ back into the $\\mathbf{b}$ equation gives how far along $OM$ the crossing lies.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Find the position vector of X",
          "workingLatex": "\\overrightarrow{OX} = \\frac{\\lambda}{2}(\\mathbf{a} + \\mathbf{b}) = \\frac{2}{5}(\\mathbf{a} + \\mathbf{b}) = \\frac{2}{5}\\mathbf{a} + \\frac{2}{5}\\mathbf{b}",
          "explanation": "Putting $\\lambda = \\frac{4}{5}$ into the $OM$ expression gives the intersection point.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "State the ratio OX:XM",
          "workingLatex": "OX:XM = \\lambda : (1 - \\lambda) = \\frac{4}{5} : \\frac{1}{5} = 4:1",
          "explanation": "The parameter $\\lambda$ measures the fraction of $OM$ covered up to $X$, so it gives the division ratio directly.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "State the ratio BX:XN",
          "workingLatex": "BX:XN = \\mu : (1 - \\mu) = \\frac{3}{5} : \\frac{2}{5} = 3:2",
          "explanation": "Likewise $\\mu$ gives how $X$ divides $BN$.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Verify by substituting mu back into BN",
          "workingLatex": "\\mathbf{b} + \\frac{3}{5}\\left(\\frac{2}{3}\\mathbf{a} - \\mathbf{b}\\right) = \\frac{2}{5}\\mathbf{a} + \\frac{2}{5}\\mathbf{b} \\; \\checkmark",
          "explanation": "The $BN$ line gives the same point $X$, confirming both equations are satisfied.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "State the final answer",
          "workingLatex": "\\overrightarrow{OX} = \\frac{2}{5}(\\mathbf{a} + \\mathbf{b}), \\quad OX:XM = 4:1, \\quad BX:XN = 3:2",
          "explanation": "This gives the intersection point and how it divides both cevians.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\overrightarrow{OX} = \\frac{2}{5}(\\mathbf{a} + \\mathbf{b})$, with $OX:XM = 4:1$ and $BX:XN = 3:2$."
    }
  },
  {
    "id": "al.y1.pure.vector-geometry.q055",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Vector geometry",
    "subtopicId": "al.y1.pure.vector-geometry",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "vector",
    "tags": [
      "vector-geometry",
      "cevians",
      "intersection",
      "ratio"
    ],
    "questionText": "In triangle $OAB$, $\\overrightarrow{OA} = \\mathbf{a}$ and $\\overrightarrow{OB} = \\mathbf{b}$. The point $M$ lies on $AB$ with $AM:MB = 1:2$, and $N$ is the midpoint of $OB$. The lines $OM$ and $AN$ intersect at $X$. Find the position vector of $X$ and the ratios $OX:XM$ and $AX:XN$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write the vector AB in terms of a and b",
          "workingLatex": "\\overrightarrow{AB} = \\overrightarrow{OB} - \\overrightarrow{OA} = \\mathbf{b} - \\mathbf{a}",
          "explanation": "The side from $A$ to $B$ is $\\mathbf{b} - \\mathbf{a}$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find the position vector of M on AB",
          "workingLatex": "\\overrightarrow{OM} = \\overrightarrow{OA} + \\frac{1}{3}\\overrightarrow{AB} = \\mathbf{a} + \\frac{1}{3}(\\mathbf{b} - \\mathbf{a}) = \\frac{2}{3}\\mathbf{a} + \\frac{1}{3}\\mathbf{b}",
          "explanation": "With $AM:MB = 1:2$, point $M$ is one third of the way from $A$ to $B$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find the position vector of N, the midpoint of OB",
          "workingLatex": "\\overrightarrow{ON} = \\frac{1}{2}\\mathbf{b}",
          "explanation": "As the midpoint of $OB$, $N$ is halfway along $\\mathbf{b}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write X on the line OM with parameter lambda",
          "workingLatex": "\\overrightarrow{OX} = \\lambda\\,\\overrightarrow{OM} = \\frac{2\\lambda}{3}\\mathbf{a} + \\frac{\\lambda}{3}\\mathbf{b}",
          "explanation": "Line $OM$ starts at the origin, so any point on it is a scalar multiple $\\lambda$ of $\\overrightarrow{OM}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find the direction of the line AN",
          "workingLatex": "\\overrightarrow{AN} = \\overrightarrow{ON} - \\overrightarrow{OA} = \\frac{1}{2}\\mathbf{b} - \\mathbf{a}",
          "explanation": "The direction of $AN$ is the step from $A$ to $N$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Write X on the line AN with parameter mu",
          "workingLatex": "\\overrightarrow{OX} = \\overrightarrow{OA} + \\mu\\,\\overrightarrow{AN} = \\mathbf{a} + \\mu\\left(\\frac{1}{2}\\mathbf{b} - \\mathbf{a}\\right) = (1 - \\mu)\\mathbf{a} + \\frac{\\mu}{2}\\mathbf{b}",
          "explanation": "The same point $X$ can be written starting from $A$ and moving a fraction $\\mu$ along $AN$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Equate the coefficients of a",
          "workingLatex": "\\frac{2\\lambda}{3} = 1 - \\mu",
          "explanation": "Since $\\mathbf{a}$ and $\\mathbf{b}$ are not parallel, the $\\mathbf{a}$ coefficients of the two expressions must be equal.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Equate the coefficients of b",
          "workingLatex": "\\frac{\\lambda}{3} = \\frac{\\mu}{2}",
          "explanation": "The $\\mathbf{b}$ coefficients must also match, giving a second equation.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Make mu the subject from the b equation",
          "workingLatex": "\\mu = \\frac{2\\lambda}{3}",
          "explanation": "Rearranging the $\\mathbf{b}$ equation lets us substitute for $\\mu$ in the other.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Substitute and solve for lambda",
          "workingLatex": "\\frac{2\\lambda}{3} = 1 - \\frac{2\\lambda}{3} \\; \\Rightarrow \\; \\frac{4\\lambda}{3} = 1 \\; \\Rightarrow \\; \\lambda = \\frac{3}{4}",
          "explanation": "Putting the expression for $\\mu$ into the $\\mathbf{a}$ equation leaves a single equation in $\\lambda$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Find mu",
          "workingLatex": "\\mu = \\frac{2}{3}\\cdot\\frac{3}{4} = \\frac{1}{2}",
          "explanation": "Substituting $\\lambda = \\frac{3}{4}$ back gives the fraction along $AN$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Find the position vector of X",
          "workingLatex": "\\overrightarrow{OX} = \\frac{2\\lambda}{3}\\mathbf{a} + \\frac{\\lambda}{3}\\mathbf{b} = \\frac{1}{2}\\mathbf{a} + \\frac{1}{4}\\mathbf{b}",
          "explanation": "Putting $\\lambda = \\frac{3}{4}$ into the $OM$ expression gives the intersection point.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "State the ratio OX:XM",
          "workingLatex": "OX:XM = \\lambda : (1 - \\lambda) = \\frac{3}{4} : \\frac{1}{4} = 3:1",
          "explanation": "The parameter $\\lambda$ gives the fraction of $OM$ up to $X$, hence the division ratio.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "State the ratio AX:XN",
          "workingLatex": "AX:XN = \\mu : (1 - \\mu) = \\frac{1}{2} : \\frac{1}{2} = 1:1",
          "explanation": "With $\\mu = \\frac{1}{2}$, the point $X$ is exactly the midpoint of $AN$.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "Verify by substituting mu back into AN",
          "workingLatex": "\\mathbf{a} + \\frac{1}{2}\\left(\\frac{1}{2}\\mathbf{b} - \\mathbf{a}\\right) = \\frac{1}{2}\\mathbf{a} + \\frac{1}{4}\\mathbf{b} \\; \\checkmark",
          "explanation": "The $AN$ line gives the same point $X$, confirming both equations hold.",
          "diagram": null
        },
        {
          "stepNumber": 16,
          "description": "State the final answer",
          "workingLatex": "\\overrightarrow{OX} = \\frac{1}{2}\\mathbf{a} + \\frac{1}{4}\\mathbf{b}, \\quad OX:XM = 3:1, \\quad AX:XN = 1:1",
          "explanation": "This gives the intersection point and how it divides both lines.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\overrightarrow{OX} = \\frac{1}{2}\\mathbf{a} + \\frac{1}{4}\\mathbf{b}$, with $OX:XM = 3:1$ and $AX:XN = 1:1$."
    }
  },
  {
    "id": "al.y1.pure.vector-geometry.q056",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Vector geometry",
    "subtopicId": "al.y1.pure.vector-geometry",
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "proof",
    "tags": [
      "vector-geometry",
      "collinearity",
      "proof",
      "ratio"
    ],
    "questionText": "Relative to an origin $O$, the points $P$, $Q$ and $R$ have position vectors $\\overrightarrow{OP} = \\mathbf{a} + 3\\mathbf{b}$, $\\overrightarrow{OQ} = 2\\mathbf{a} + 5\\mathbf{b}$ and $\\overrightarrow{OR} = 4\\mathbf{a} + 9\\mathbf{b}$, where $\\mathbf{a}$ and $\\mathbf{b}$ are non-parallel vectors. Prove that $P$, $Q$ and $R$ are collinear, and find the ratio $PQ:QR$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write down the three position vectors",
          "workingLatex": "\\overrightarrow{OP} = \\mathbf{a} + 3\\mathbf{b}, \\quad \\overrightarrow{OQ} = 2\\mathbf{a} + 5\\mathbf{b}, \\quad \\overrightarrow{OR} = 4\\mathbf{a} + 9\\mathbf{b}",
          "explanation": "Listing the data clearly makes the comparisons that follow easier to set up.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "State the strategy for proving collinearity",
          "workingLatex": "\\text{Show } \\overrightarrow{QR} = k\\,\\overrightarrow{PQ} \\text{ for some scalar } k",
          "explanation": "Three points lie on one straight line if two joining vectors are parallel and share a point, so we compare $\\overrightarrow{PQ}$ and $\\overrightarrow{QR}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Set up the vector PQ",
          "workingLatex": "\\overrightarrow{PQ} = \\overrightarrow{OQ} - \\overrightarrow{OP}",
          "explanation": "The vector from $P$ to $Q$ is found by subtracting their position vectors.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Compute PQ",
          "workingLatex": "\\overrightarrow{PQ} = (2\\mathbf{a} + 5\\mathbf{b}) - (\\mathbf{a} + 3\\mathbf{b}) = \\mathbf{a} + 2\\mathbf{b}",
          "explanation": "Subtracting component by component gives the direction from $P$ to $Q$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Set up the vector QR",
          "workingLatex": "\\overrightarrow{QR} = \\overrightarrow{OR} - \\overrightarrow{OQ}",
          "explanation": "Similarly, the vector from $Q$ to $R$ comes from subtracting their position vectors.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Compute QR",
          "workingLatex": "\\overrightarrow{QR} = (4\\mathbf{a} + 9\\mathbf{b}) - (2\\mathbf{a} + 5\\mathbf{b}) = 2\\mathbf{a} + 4\\mathbf{b}",
          "explanation": "Again subtracting component by component gives the direction from $Q$ to $R$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Factor QR",
          "workingLatex": "\\overrightarrow{QR} = 2\\mathbf{a} + 4\\mathbf{b} = 2(\\mathbf{a} + 2\\mathbf{b})",
          "explanation": "Taking out the common factor exposes the bracket for comparison with $\\overrightarrow{PQ}$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Recognise the scalar multiple",
          "workingLatex": "\\overrightarrow{QR} = 2\\,\\overrightarrow{PQ}",
          "explanation": "The bracket is exactly $\\overrightarrow{PQ}$, so $\\overrightarrow{QR}$ is twice $\\overrightarrow{PQ}$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Conclude the vectors are parallel",
          "workingLatex": "\\overrightarrow{QR} \\parallel \\overrightarrow{PQ}",
          "explanation": "Being a scalar multiple, $\\overrightarrow{QR}$ points in the same direction as $\\overrightarrow{PQ}$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Note the common point",
          "workingLatex": "\\overrightarrow{PQ} \\text{ and } \\overrightarrow{QR} \\text{ both pass through } Q",
          "explanation": "Both directions share the point $Q$, which is the key to upgrading parallel to collinear.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Conclude collinearity",
          "workingLatex": "\\therefore P, Q, R \\text{ are collinear}",
          "explanation": "Two parallel segments through a common point lie on the same straight line, so the three points are collinear.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Cross-check with PR",
          "workingLatex": "\\overrightarrow{PR} = \\overrightarrow{OR} - \\overrightarrow{OP} = 3\\mathbf{a} + 6\\mathbf{b} = 3(\\mathbf{a} + 2\\mathbf{b}) = 3\\,\\overrightarrow{PQ}",
          "explanation": "Since $\\overrightarrow{PR} = \\overrightarrow{PQ} + \\overrightarrow{QR} = 3\\,\\overrightarrow{PQ}$, everything is consistent.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Determine the ratio",
          "workingLatex": "\\overrightarrow{QR} = 2\\,\\overrightarrow{PQ} \\; \\Rightarrow \\; PQ:QR = 1:2",
          "explanation": "The length of $QR$ is twice that of $PQ$, and both point the same way, so $Q$ lies between $P$ and $R$ in the ratio $1:2$.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "State the conclusion",
          "workingLatex": "P, Q, R \\text{ collinear}, \\quad PQ:QR = 1:2",
          "explanation": "This completes both parts of the question.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P$, $Q$ and $R$ are collinear because $\\overrightarrow{QR} = 2\\,\\overrightarrow{PQ}$; the ratio is $PQ:QR = 1:2$."
    }
  },
  {
    "id": "al.y1.pure.vector-geometry.q057",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Vector geometry",
    "subtopicId": "al.y1.pure.vector-geometry",
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "proof",
    "tags": [
      "vector-geometry",
      "collinearity",
      "proof",
      "ratio"
    ],
    "questionText": "Relative to an origin $O$, the points $P$, $Q$ and $R$ have position vectors $\\overrightarrow{OP} = 4\\mathbf{a} - \\mathbf{b}$, $\\overrightarrow{OQ} = 2\\mathbf{a} + \\mathbf{b}$ and $\\overrightarrow{OR} = \\mathbf{a} + 2\\mathbf{b}$, where $\\mathbf{a}$ and $\\mathbf{b}$ are non-parallel vectors. Prove that $P$, $Q$ and $R$ are collinear, and find the ratio $PQ:QR$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write down the three position vectors",
          "workingLatex": "\\overrightarrow{OP} = 4\\mathbf{a} - \\mathbf{b}, \\quad \\overrightarrow{OQ} = 2\\mathbf{a} + \\mathbf{b}, \\quad \\overrightarrow{OR} = \\mathbf{a} + 2\\mathbf{b}",
          "explanation": "Setting the data out clearly helps keep track of the signs when we subtract.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "State the strategy for proving collinearity",
          "workingLatex": "\\text{Show } \\overrightarrow{PQ} = k\\,\\overrightarrow{QR} \\text{ for some scalar } k",
          "explanation": "If two joining vectors are parallel and share a point, the three points must lie on one line.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Set up the vector PQ",
          "workingLatex": "\\overrightarrow{PQ} = \\overrightarrow{OQ} - \\overrightarrow{OP}",
          "explanation": "The vector from $P$ to $Q$ is the difference of their position vectors.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Compute PQ",
          "workingLatex": "\\overrightarrow{PQ} = (2\\mathbf{a} + \\mathbf{b}) - (4\\mathbf{a} - \\mathbf{b}) = -2\\mathbf{a} + 2\\mathbf{b}",
          "explanation": "Subtracting carefully, note that $-(-\\mathbf{b})$ becomes $+\\mathbf{b}$, giving $+2\\mathbf{b}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Set up the vector QR",
          "workingLatex": "\\overrightarrow{QR} = \\overrightarrow{OR} - \\overrightarrow{OQ}",
          "explanation": "The vector from $Q$ to $R$ is likewise a difference of position vectors.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Compute QR",
          "workingLatex": "\\overrightarrow{QR} = (\\mathbf{a} + 2\\mathbf{b}) - (2\\mathbf{a} + \\mathbf{b}) = -\\mathbf{a} + \\mathbf{b}",
          "explanation": "Subtracting component by component gives the direction from $Q$ to $R$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Factor PQ",
          "workingLatex": "\\overrightarrow{PQ} = -2\\mathbf{a} + 2\\mathbf{b} = 2(-\\mathbf{a} + \\mathbf{b})",
          "explanation": "Taking out the factor of $2$ reveals the same bracket as $\\overrightarrow{QR}$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Recognise the scalar multiple",
          "workingLatex": "\\overrightarrow{PQ} = 2\\,\\overrightarrow{QR}",
          "explanation": "The bracket is exactly $\\overrightarrow{QR}$, so $\\overrightarrow{PQ}$ is twice $\\overrightarrow{QR}$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Conclude the vectors are parallel",
          "workingLatex": "\\overrightarrow{PQ} \\parallel \\overrightarrow{QR}",
          "explanation": "As a scalar multiple, $\\overrightarrow{PQ}$ is parallel to $\\overrightarrow{QR}$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Note the common point",
          "workingLatex": "\\overrightarrow{PQ} \\text{ and } \\overrightarrow{QR} \\text{ both pass through } Q",
          "explanation": "The shared point $Q$ lets us conclude more than mere parallelism.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Conclude collinearity",
          "workingLatex": "\\therefore P, Q, R \\text{ are collinear}",
          "explanation": "Parallel segments through a common point lie on the same straight line.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Cross-check with PR",
          "workingLatex": "\\overrightarrow{PR} = \\overrightarrow{OR} - \\overrightarrow{OP} = -3\\mathbf{a} + 3\\mathbf{b} = 3(-\\mathbf{a} + \\mathbf{b}) = 3\\,\\overrightarrow{QR}",
          "explanation": "Since $\\overrightarrow{PR} = \\overrightarrow{PQ} + \\overrightarrow{QR} = 2\\,\\overrightarrow{QR} + \\overrightarrow{QR} = 3\\,\\overrightarrow{QR}$, the figures agree.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Determine the ratio",
          "workingLatex": "\\overrightarrow{PQ} = 2\\,\\overrightarrow{QR} \\; \\Rightarrow \\; PQ:QR = 2:1",
          "explanation": "The length of $PQ$ is twice that of $QR$, with $Q$ between $P$ and $R$.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "State the conclusion",
          "workingLatex": "P, Q, R \\text{ collinear}, \\quad PQ:QR = 2:1",
          "explanation": "This completes both parts of the question.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P$, $Q$ and $R$ are collinear because $\\overrightarrow{PQ} = 2\\,\\overrightarrow{QR}$; the ratio is $PQ:QR = 2:1$."
    }
  },
  {
    "id": "al.y1.pure.vector-geometry.q058",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Vector geometry",
    "subtopicId": "al.y1.pure.vector-geometry",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "value",
    "tags": [
      "vector-geometry",
      "mechanics",
      "position-vector",
      "kinematics"
    ],
    "questionText": "A particle has position vector $\\mathbf{r} = (2\\mathbf{i} + 3\\mathbf{j}) + t(\\mathbf{i} - 2\\mathbf{j})$ metres at time $t$ seconds. Find its position vector and its distance from the origin when $t = 4$, and find the value of $t$ at which the particle is due east of the fixed point $P$ with position vector $-\\mathbf{i} - 3\\mathbf{j}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the starting position and velocity",
          "workingLatex": "\\mathbf{r}_0 = 2\\mathbf{i} + 3\\mathbf{j}, \\qquad \\mathbf{v} = \\mathbf{i} - 2\\mathbf{j}",
          "explanation": "The constant part is where the particle starts, and the part multiplied by $t$ is its velocity, i.e. how it moves each second.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute t = 4 into the position vector",
          "workingLatex": "\\mathbf{r} = (2\\mathbf{i} + 3\\mathbf{j}) + 4(\\mathbf{i} - 2\\mathbf{j})",
          "explanation": "To find where the particle is at $t = 4$, we replace $t$ by $4$ in the formula.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Expand the velocity term",
          "workingLatex": "\\mathbf{r} = 2\\mathbf{i} + 3\\mathbf{j} + 4\\mathbf{i} - 8\\mathbf{j}",
          "explanation": "Multiplying the velocity by $4$ scales each component before we combine.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Collect the i and j components",
          "workingLatex": "\\mathbf{r} = 6\\mathbf{i} - 5\\mathbf{j}",
          "explanation": "Adding the like components gives the position at $t = 4$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Write the position as coordinates",
          "workingLatex": "(6, -5)",
          "explanation": "Reading off the components tells us the particle is at the point $(6, -5)$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Set up the distance from the origin",
          "workingLatex": "\\left| \\mathbf{r} \\right| = \\sqrt{6^{2} + (-5)^{2}}",
          "explanation": "Distance from the origin is the magnitude of the position vector, found by Pythagoras.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Evaluate the square root",
          "workingLatex": "\\left| \\mathbf{r} \\right| = \\sqrt{36 + 25} = \\sqrt{61}",
          "explanation": "Squaring and adding the components gives the value under the root.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Give a decimal value",
          "workingLatex": "\\sqrt{61} \\approx 7.81 \\text{ m}",
          "explanation": "A decimal makes the size of the distance easier to picture.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Write the general position at time t",
          "workingLatex": "\\mathbf{r} = (2 + t)\\mathbf{i} + (3 - 2t)\\mathbf{j}",
          "explanation": "For the last part we keep $t$ general and read off the two coordinates as functions of time.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Interpret 'due east of P'",
          "workingLatex": "P = (-1, -3): \\quad \\text{same } \\mathbf{j}\\text{-coordinate as } P",
          "explanation": "Due east means directly to the right of $P$, so the particle shares $P$'s north-south level, i.e. the same $\\mathbf{j}$-coordinate.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Set the j-coordinates equal",
          "workingLatex": "3 - 2t = -3",
          "explanation": "Matching the vertical coordinate of the particle to that of $P$ gives an equation for $t$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Solve for t",
          "workingLatex": "-2t = -6 \\; \\Rightarrow \\; t = 3",
          "explanation": "Rearranging gives the time when the particle is level with $P$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Check the particle is east, not west",
          "workingLatex": "t = 3: \\quad 2 + t = 5 > -1",
          "explanation": "Its $\\mathbf{i}$-coordinate ($5$) exceeds $P$'s ($-1$), so the particle is to the right of $P$, confirming it is due east.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "State the final answers",
          "workingLatex": "\\mathbf{r}(4) = 6\\mathbf{i} - 5\\mathbf{j}, \\quad \\left| \\mathbf{r}(4) \\right| = \\sqrt{61}, \\quad t = 3",
          "explanation": "This collects the position, distance, and the required time.",
          "diagram": null
        }
      ],
      "finalAnswer": "At $t = 4$: $\\mathbf{r} = 6\\mathbf{i} - 5\\mathbf{j}$ with distance $\\sqrt{61} \\approx 7.81$ m from $O$; the particle is due east of $P$ when $t = 3$ s."
    }
  },
  {
    "id": "al.y1.pure.vector-geometry.q059",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Vector geometry",
    "subtopicId": "al.y1.pure.vector-geometry",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "value",
    "tags": [
      "vector-geometry",
      "mechanics",
      "position-vector",
      "kinematics"
    ],
    "questionText": "A particle has position vector $\\mathbf{r} = (4\\mathbf{i} - 5\\mathbf{j}) + t(-\\mathbf{i} + 2\\mathbf{j})$ metres at time $t$ seconds. Find the value of $t$ at which the particle is due north of the origin, and its distance from the origin at that time. Also find its position vector when $t = 6$ and its distance from the point $Q$ with position vector $\\mathbf{i} + 2\\mathbf{j}$ at that time.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the starting position and velocity",
          "workingLatex": "\\mathbf{r}_0 = 4\\mathbf{i} - 5\\mathbf{j}, \\qquad \\mathbf{v} = -\\mathbf{i} + 2\\mathbf{j}",
          "explanation": "The constant vector is the start point; the $t$-term is the velocity giving the movement each second.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the general position at time t",
          "workingLatex": "\\mathbf{r} = (4 - t)\\mathbf{i} + (-5 + 2t)\\mathbf{j}",
          "explanation": "Collecting the $\\mathbf{i}$ and $\\mathbf{j}$ parts gives each coordinate as a function of time.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Interpret 'due north of the origin'",
          "workingLatex": "\\text{due north of } O \\; \\Rightarrow \\; \\mathbf{i}\\text{-coordinate} = 0, \\; \\mathbf{j}\\text{-coordinate} > 0",
          "explanation": "Directly north of the origin means the particle is straight up the $\\mathbf{j}$-axis, so its $\\mathbf{i}$-component is zero.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Set the i-coordinate to zero",
          "workingLatex": "4 - t = 0",
          "explanation": "Requiring no east-west displacement gives an equation for $t$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve for t",
          "workingLatex": "t = 4",
          "explanation": "This is the time at which the particle is directly above (or below) the origin.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check the j-coordinate is positive",
          "workingLatex": "-5 + 2(4) = 3 > 0",
          "explanation": "A positive $\\mathbf{j}$-value confirms the particle is north of $O$, not south, so $t = 4$ is valid.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Find the position at t = 4",
          "workingLatex": "\\mathbf{r} = 0\\mathbf{i} + 3\\mathbf{j} = 3\\mathbf{j}",
          "explanation": "Substituting $t = 4$ gives a point lying on the positive $\\mathbf{j}$-axis.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Find the distance from the origin at t = 4",
          "workingLatex": "\\left| \\mathbf{r} \\right| = \\sqrt{0^{2} + 3^{2}} = 3 \\text{ m}",
          "explanation": "Since the particle is on the axis, its distance from $O$ is simply the size of the $\\mathbf{j}$-component.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Substitute t = 6 into the position vector",
          "workingLatex": "\\mathbf{r} = (4 - 6)\\mathbf{i} + (-5 + 12)\\mathbf{j}",
          "explanation": "For the final part we put $t = 6$ into the general position.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Simplify the position at t = 6",
          "workingLatex": "\\mathbf{r} = -2\\mathbf{i} + 7\\mathbf{j}",
          "explanation": "Evaluating each bracket gives the location of the particle at $t = 6$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Find the displacement from Q to the particle",
          "workingLatex": "\\mathbf{r} - \\overrightarrow{OQ} = (-2 - 1)\\mathbf{i} + (7 - 2)\\mathbf{j} = -3\\mathbf{i} + 5\\mathbf{j}",
          "explanation": "The vector from $Q$ to the particle is the difference of their position vectors.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Set up the distance from Q",
          "workingLatex": "\\text{distance} = \\sqrt{(-3)^{2} + 5^{2}}",
          "explanation": "The distance is the magnitude of that displacement vector.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Evaluate the distance",
          "workingLatex": "= \\sqrt{9 + 25} = \\sqrt{34} \\approx 5.83 \\text{ m}",
          "explanation": "Squaring, adding and rooting gives how far the particle is from $Q$ at $t = 6$.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "State the final answers",
          "workingLatex": "t = 4, \\; \\left| \\mathbf{r} \\right| = 3; \\quad \\mathbf{r}(6) = -2\\mathbf{i} + 7\\mathbf{j}, \\; \\text{distance} = \\sqrt{34}",
          "explanation": "This gathers all the required results.",
          "diagram": null
        }
      ],
      "finalAnswer": "Due north of $O$ when $t = 4$ s, at distance $3$ m from $O$; at $t = 6$ the position is $-2\\mathbf{i} + 7\\mathbf{j}$ and the distance from $Q$ is $\\sqrt{34} \\approx 5.83$ m."
    }
  },
  {
    "id": "al.y1.pure.vector-geometry.q060",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Vector geometry",
    "subtopicId": "al.y1.pure.vector-geometry",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "value",
    "tags": [
      "vector-geometry",
      "mechanics",
      "position-vector",
      "kinematics"
    ],
    "questionText": "A particle has position vector $\\mathbf{r} = \\begin{pmatrix} -2 \\\\ 5 \\end{pmatrix} + t\\begin{pmatrix} 3 \\\\ -2 \\end{pmatrix}$ metres at time $t$ seconds. Find its position and its distance from the origin when $t = 3$, and find the value of $t$ at which the particle is due north of the fixed point $A$ with position vector $\\begin{pmatrix} 4 \\\\ 0 \\end{pmatrix}$, together with its distance from $A$ at that time.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the starting position and velocity",
          "workingLatex": "\\mathbf{r}_0 = \\begin{pmatrix} -2 \\\\ 5 \\end{pmatrix}, \\qquad \\mathbf{v} = \\begin{pmatrix} 3 \\\\ -2 \\end{pmatrix}",
          "explanation": "The constant column vector is the start point and the column multiplied by $t$ is the velocity.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the general position at time t",
          "workingLatex": "\\mathbf{r} = \\begin{pmatrix} -2 + 3t \\\\ 5 - 2t \\end{pmatrix}",
          "explanation": "Adding $t$ times the velocity to the start gives each coordinate as a function of time.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute t = 3",
          "workingLatex": "\\mathbf{r} = \\begin{pmatrix} -2 \\\\ 5 \\end{pmatrix} + 3\\begin{pmatrix} 3 \\\\ -2 \\end{pmatrix}",
          "explanation": "To locate the particle at $t = 3$ we put $t = 3$ into the formula.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate the position at t = 3",
          "workingLatex": "\\mathbf{r} = \\begin{pmatrix} -2 + 9 \\\\ 5 - 6 \\end{pmatrix} = \\begin{pmatrix} 7 \\\\ -1 \\end{pmatrix}",
          "explanation": "Working out each component gives the point $(7, -1)$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Set up the distance from the origin",
          "workingLatex": "\\left| \\mathbf{r} \\right| = \\sqrt{7^{2} + (-1)^{2}}",
          "explanation": "Distance from the origin is the magnitude of the position column vector.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Simplify the surd",
          "workingLatex": "\\left| \\mathbf{r} \\right| = \\sqrt{49 + 1} = \\sqrt{50} = 5\\sqrt{2}",
          "explanation": "Since $50 = 25 \\times 2$, the root simplifies to $5\\sqrt{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Give a decimal value",
          "workingLatex": "5\\sqrt{2} \\approx 7.07 \\text{ m}",
          "explanation": "A decimal makes the size of the distance easier to read.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Interpret 'due north of A'",
          "workingLatex": "A = (4, 0): \\quad \\text{same } x\\text{-coordinate as } A",
          "explanation": "Due north of $A$ means directly above it, so the particle shares $A$'s east-west position, i.e. the same $x$-coordinate.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Set the x-coordinate equal to 4",
          "workingLatex": "-2 + 3t = 4",
          "explanation": "Matching the horizontal coordinate of the particle to $A$'s gives an equation for $t$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Solve for t",
          "workingLatex": "3t = 6 \\; \\Rightarrow \\; t = 2",
          "explanation": "Rearranging gives the time when the particle is directly above or below $A$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Check the particle is north, not south",
          "workingLatex": "t = 2: \\quad 5 - 2(2) = 1 > 0",
          "explanation": "The $y$-coordinate ($1$) is above $A$'s ($0$), so the particle is genuinely north of $A$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Find the position at t = 2",
          "workingLatex": "\\mathbf{r} = \\begin{pmatrix} 4 \\\\ 1 \\end{pmatrix}",
          "explanation": "Substituting $t = 2$ locates the particle for the final distance.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Find the distance from A",
          "workingLatex": "\\mathbf{r} - \\overrightarrow{OA} = \\begin{pmatrix} 4 - 4 \\\\ 1 - 0 \\end{pmatrix} = \\begin{pmatrix} 0 \\\\ 1 \\end{pmatrix}, \\quad \\text{distance} = \\sqrt{0^{2} + 1^{2}} = 1 \\text{ m}",
          "explanation": "The displacement from $A$ is purely vertical, so the distance is just $1$ m.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "State the final answers",
          "workingLatex": "\\mathbf{r}(3) = \\begin{pmatrix} 7 \\\\ -1 \\end{pmatrix}, \\; \\left| \\mathbf{r}(3) \\right| = 5\\sqrt{2}; \\quad t = 2, \\; \\text{distance from } A = 1",
          "explanation": "This gathers the position, distance from $O$, the required time, and the distance from $A$.",
          "diagram": null
        }
      ],
      "finalAnswer": "At $t = 3$: $\\mathbf{r} = \\begin{pmatrix} 7 \\\\ -1 \\end{pmatrix}$ with distance $5\\sqrt{2} \\approx 7.07$ m from $O$; due north of $A$ when $t = 2$ s, at which time it is $1$ m from $A$."
    }
  },
  {
    "id": "al.y1.pure.vector-geometry.q061",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Vector geometry",
    "subtopicId": "al.y1.pure.vector-geometry",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "vector",
    "tags": [
      "vector-geometry",
      "parallelogram",
      "position-vectors"
    ],
    "questionText": "The points $A$, $B$ and $C$ have position vectors $\\overrightarrow{OA} = \\begin{pmatrix} 1 \\\\ 2 \\end{pmatrix}$, $\\overrightarrow{OB} = \\begin{pmatrix} 4 \\\\ 3 \\end{pmatrix}$ and $\\overrightarrow{OC} = \\begin{pmatrix} 6 \\\\ 7 \\end{pmatrix}$. The quadrilateral $ABCD$ is a parallelogram, with the vertices taken in order. Find the position vector of $D$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify which sides are opposite",
          "workingLatex": "ABCD:\\ \\text{sides } AB,\\ BC,\\ CD,\\ DA;\\ \\text{opposite pairs } (AB,CD)\\ \\text{and}\\ (BC,DA)",
          "explanation": "Reading the vertices in order tells us the sides, and opposite sides are the ones that do not share a vertex. This is what we must make equal and parallel.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "State the parallelogram condition as vectors",
          "workingLatex": "\\overrightarrow{AB} = \\overrightarrow{DC}",
          "explanation": "In a parallelogram opposite sides are equal and parallel. Writing $\\overrightarrow{AB}=\\overrightarrow{DC}$ (not $\\overrightarrow{CD}$) keeps both arrows pointing the same way, so the equality captures both equal length and equal direction.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write AB in terms of position vectors",
          "workingLatex": "\\overrightarrow{AB} = \\overrightarrow{OB} - \\overrightarrow{OA}",
          "explanation": "The vector from $A$ to $B$ is 'where you end minus where you start', which converts the geometry into numbers we can work with.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Compute AB",
          "workingLatex": "\\overrightarrow{AB} = \\begin{pmatrix} 4 \\\\ 3 \\end{pmatrix} - \\begin{pmatrix} 1 \\\\ 2 \\end{pmatrix} = \\begin{pmatrix} 3 \\\\ 1 \\end{pmatrix}",
          "explanation": "Subtracting component by component gives the displacement along the side $AB$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Write DC in terms of position vectors",
          "workingLatex": "\\overrightarrow{DC} = \\overrightarrow{OC} - \\overrightarrow{OD}",
          "explanation": "The same 'end minus start' rule expresses the opposite side $DC$ using the unknown point $D$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Set the two sides equal",
          "workingLatex": "\\overrightarrow{OB} - \\overrightarrow{OA} = \\overrightarrow{OC} - \\overrightarrow{OD}",
          "explanation": "Imposing the parallelogram condition gives an equation whose only unknown is $\\overrightarrow{OD}$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Rearrange for OD",
          "workingLatex": "\\overrightarrow{OD} = \\overrightarrow{OC} - \\overrightarrow{OB} + \\overrightarrow{OA}",
          "explanation": "Making $\\overrightarrow{OD}$ the subject isolates the vertex we are looking for.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Substitute the known vectors",
          "workingLatex": "\\overrightarrow{OD} = \\begin{pmatrix} 6 \\\\ 7 \\end{pmatrix} - \\begin{pmatrix} 4 \\\\ 3 \\end{pmatrix} + \\begin{pmatrix} 1 \\\\ 2 \\end{pmatrix}",
          "explanation": "Putting in the given coordinates turns the vector equation into arithmetic.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Do the first subtraction",
          "workingLatex": "\\begin{pmatrix} 6 \\\\ 7 \\end{pmatrix} - \\begin{pmatrix} 4 \\\\ 3 \\end{pmatrix} = \\begin{pmatrix} 2 \\\\ 4 \\end{pmatrix}",
          "explanation": "Working one operation at a time keeps the components from getting muddled.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Add the last vector",
          "workingLatex": "\\overrightarrow{OD} = \\begin{pmatrix} 2 \\\\ 4 \\end{pmatrix} + \\begin{pmatrix} 1 \\\\ 2 \\end{pmatrix} = \\begin{pmatrix} 3 \\\\ 6 \\end{pmatrix}",
          "explanation": "Adding component by component gives the position vector of $D$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Find AD to check the other pair",
          "workingLatex": "\\overrightarrow{AD} = \\overrightarrow{OD} - \\overrightarrow{OA} = \\begin{pmatrix} 3 \\\\ 6 \\end{pmatrix} - \\begin{pmatrix} 1 \\\\ 2 \\end{pmatrix} = \\begin{pmatrix} 2 \\\\ 4 \\end{pmatrix}",
          "explanation": "A good check is that the other pair of opposite sides should match too; first we compute $\\overrightarrow{AD}$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Find BC",
          "workingLatex": "\\overrightarrow{BC} = \\overrightarrow{OC} - \\overrightarrow{OB} = \\begin{pmatrix} 6 \\\\ 7 \\end{pmatrix} - \\begin{pmatrix} 4 \\\\ 3 \\end{pmatrix} = \\begin{pmatrix} 2 \\\\ 4 \\end{pmatrix}",
          "explanation": "Computing $\\overrightarrow{BC}$ lets us compare it with $\\overrightarrow{AD}$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Confirm the second pair matches",
          "workingLatex": "\\overrightarrow{AD} = \\overrightarrow{BC} = \\begin{pmatrix} 2 \\\\ 4 \\end{pmatrix}\\ \\checkmark",
          "explanation": "Since $\\overrightarrow{AD}=\\overrightarrow{BC}$ as well, both pairs of opposite sides are equal and parallel, so $D$ really does complete a parallelogram.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "State the answer",
          "workingLatex": "\\overrightarrow{OD} = \\begin{pmatrix} 3 \\\\ 6 \\end{pmatrix}",
          "explanation": "The missing vertex has position vector $\\begin{pmatrix} 3 \\\\ 6 \\end{pmatrix}$, i.e. $D=(3,6)$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\overrightarrow{OD} = \\begin{pmatrix} 3 \\\\ 6 \\end{pmatrix}$, so $D = (3,\\,6)$."
    }
  },
  {
    "id": "al.y1.pure.vector-geometry.q062",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Vector geometry",
    "subtopicId": "al.y1.pure.vector-geometry",
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "proof",
    "tags": [
      "vector-geometry",
      "parallelogram",
      "proof"
    ],
    "questionText": "The points $P$, $Q$, $R$ and $S$ have position vectors $\\begin{pmatrix} -2 \\\\ 1 \\end{pmatrix}$, $\\begin{pmatrix} 3 \\\\ 3 \\end{pmatrix}$, $\\begin{pmatrix} 5 \\\\ 8 \\end{pmatrix}$ and $\\begin{pmatrix} 0 \\\\ 6 \\end{pmatrix}$ respectively. Prove that $PQRS$ is a parallelogram.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Choose a strategy",
          "workingLatex": "\\text{Show one pair of opposite sides are equal vectors}",
          "explanation": "If a single pair of opposite sides are equal as vectors, they are automatically both parallel and the same length, which is enough to guarantee a parallelogram.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Pick the pair to test",
          "workingLatex": "\\text{Test } \\overrightarrow{PQ} \\text{ against } \\overrightarrow{SR}",
          "explanation": "In $PQRS$ the sides $PQ$ and $SR$ are opposite. We compare $\\overrightarrow{PQ}$ with $\\overrightarrow{SR}$ (both arrows following the vertex order) so equal vectors mean equal and parallel.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Set up PQ",
          "workingLatex": "\\overrightarrow{PQ} = \\overrightarrow{OQ} - \\overrightarrow{OP}",
          "explanation": "The displacement from $P$ to $Q$ is the end point minus the start point.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Compute PQ",
          "workingLatex": "\\overrightarrow{PQ} = \\begin{pmatrix} 3 \\\\ 3 \\end{pmatrix} - \\begin{pmatrix} -2 \\\\ 1 \\end{pmatrix} = \\begin{pmatrix} 5 \\\\ 2 \\end{pmatrix}",
          "explanation": "Subtracting components (note $3-(-2)=5$) gives the direction and length of side $PQ$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Set up SR",
          "workingLatex": "\\overrightarrow{SR} = \\overrightarrow{OR} - \\overrightarrow{OS}",
          "explanation": "Using the same rule for the opposite side, starting at $S$ and ending at $R$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Compute SR",
          "workingLatex": "\\overrightarrow{SR} = \\begin{pmatrix} 5 \\\\ 8 \\end{pmatrix} - \\begin{pmatrix} 0 \\\\ 6 \\end{pmatrix} = \\begin{pmatrix} 5 \\\\ 2 \\end{pmatrix}",
          "explanation": "This gives the direction and length of the opposite side $SR$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Compare the two vectors",
          "workingLatex": "\\overrightarrow{PQ} = \\overrightarrow{SR} = \\begin{pmatrix} 5 \\\\ 2 \\end{pmatrix}",
          "explanation": "The two side vectors are identical, which is the key fact we needed.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Interpret 'equal vectors'",
          "workingLatex": "\\overrightarrow{PQ} = \\overrightarrow{SR} \\ \\Rightarrow\\ PQ \\parallel SR \\ \\text{and}\\ |PQ| = |SR|",
          "explanation": "Equal vectors point the same way and have the same magnitude, so this one pair of opposite sides is both parallel and equal in length.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Compute the common length",
          "workingLatex": "|\\overrightarrow{PQ}| = \\sqrt{5^2 + 2^2} = \\sqrt{29}",
          "explanation": "Making the equal length concrete, both $PQ$ and $SR$ measure $\\sqrt{29}$; this is a helpful sanity check.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Check the other pair for reassurance",
          "workingLatex": "\\overrightarrow{QR} = \\overrightarrow{OR} - \\overrightarrow{OQ} = \\begin{pmatrix} 5 \\\\ 8 \\end{pmatrix} - \\begin{pmatrix} 3 \\\\ 3 \\end{pmatrix} = \\begin{pmatrix} 2 \\\\ 5 \\end{pmatrix}",
          "explanation": "Although one pair is enough, computing $\\overrightarrow{QR}$ lets us confirm the figure is consistent.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Compute PS",
          "workingLatex": "\\overrightarrow{PS} = \\overrightarrow{OS} - \\overrightarrow{OP} = \\begin{pmatrix} 0 \\\\ 6 \\end{pmatrix} - \\begin{pmatrix} -2 \\\\ 1 \\end{pmatrix} = \\begin{pmatrix} 2 \\\\ 5 \\end{pmatrix}",
          "explanation": "This is the side opposite $QR$; if the figure is a parallelogram it should equal $\\overrightarrow{QR}$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Confirm the second pair",
          "workingLatex": "\\overrightarrow{QR} = \\overrightarrow{PS} = \\begin{pmatrix} 2 \\\\ 5 \\end{pmatrix}\\ \\checkmark",
          "explanation": "The second pair of opposite sides also match, fully consistent with a parallelogram.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "State the conclusion",
          "workingLatex": "\\overrightarrow{PQ} = \\overrightarrow{SR} \\ \\Rightarrow\\ PQRS \\text{ is a parallelogram}",
          "explanation": "Because one pair of opposite sides is equal and parallel, $PQRS$ satisfies the definition of a parallelogram, as required.",
          "diagram": null
        }
      ],
      "finalAnswer": "Since $\\overrightarrow{PQ} = \\overrightarrow{SR} = \\begin{pmatrix} 5 \\\\ 2 \\end{pmatrix}$, one pair of opposite sides is equal and parallel, so $PQRS$ is a parallelogram."
    }
  },
  {
    "id": "al.y1.pure.vector-geometry.q063",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Vector geometry",
    "subtopicId": "al.y1.pure.vector-geometry",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "vector",
    "tags": [
      "vector-geometry",
      "parallelogram",
      "diagonals",
      "midpoint"
    ],
    "questionText": "The quadrilateral $ABCD$ has vertices with position vectors $\\overrightarrow{OA}=\\begin{pmatrix} 1 \\\\ 2 \\end{pmatrix}$, $\\overrightarrow{OB}=\\begin{pmatrix} 6 \\\\ 3 \\end{pmatrix}$, $\\overrightarrow{OC}=\\begin{pmatrix} 9 \\\\ 8 \\end{pmatrix}$ and $\\overrightarrow{OD}=\\begin{pmatrix} 4 \\\\ 7 \\end{pmatrix}$. (a) Show that $ABCD$ is a parallelogram. (b) The diagonals $AC$ and $BD$ meet at $M$. Find the position vector of $M$ and hence show that the diagonals bisect each other.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the test for part (a)",
          "workingLatex": "\\text{Show } \\overrightarrow{AB} = \\overrightarrow{DC}",
          "explanation": "One pair of opposite sides equal as vectors is enough to prove a parallelogram, so we test $\\overrightarrow{AB}$ against $\\overrightarrow{DC}$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Compute AB",
          "workingLatex": "\\overrightarrow{AB} = \\overrightarrow{OB} - \\overrightarrow{OA} = \\begin{pmatrix} 6 \\\\ 3 \\end{pmatrix} - \\begin{pmatrix} 1 \\\\ 2 \\end{pmatrix} = \\begin{pmatrix} 5 \\\\ 1 \\end{pmatrix}",
          "explanation": "End minus start gives the displacement along side $AB$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compute DC",
          "workingLatex": "\\overrightarrow{DC} = \\overrightarrow{OC} - \\overrightarrow{OD} = \\begin{pmatrix} 9 \\\\ 8 \\end{pmatrix} - \\begin{pmatrix} 4 \\\\ 7 \\end{pmatrix} = \\begin{pmatrix} 5 \\\\ 1 \\end{pmatrix}",
          "explanation": "The opposite side, taken from $D$ to $C$ so the arrow matches $\\overrightarrow{AB}$'s sense.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Conclude part (a)",
          "workingLatex": "\\overrightarrow{AB} = \\overrightarrow{DC} \\ \\Rightarrow\\ ABCD \\text{ is a parallelogram}",
          "explanation": "The two opposite sides are equal and parallel, so $ABCD$ is a parallelogram.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Plan part (b)",
          "workingLatex": "M = \\text{midpoint of } AC = \\text{midpoint of } BD\\ ?",
          "explanation": "The diagonals of a parallelogram are expected to bisect each other, so we find the midpoint of each diagonal and check they land on the same point.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Midpoint formula for AC",
          "workingLatex": "\\overrightarrow{OM_{AC}} = \\tfrac{1}{2}\\left(\\overrightarrow{OA} + \\overrightarrow{OC}\\right)",
          "explanation": "The midpoint of a segment is the average of the two end position vectors.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Add OA and OC",
          "workingLatex": "\\overrightarrow{OA} + \\overrightarrow{OC} = \\begin{pmatrix} 1 \\\\ 2 \\end{pmatrix} + \\begin{pmatrix} 9 \\\\ 8 \\end{pmatrix} = \\begin{pmatrix} 10 \\\\ 10 \\end{pmatrix}",
          "explanation": "Adding the endpoints of diagonal $AC$ before halving.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Halve to get the midpoint of AC",
          "workingLatex": "\\overrightarrow{OM_{AC}} = \\tfrac{1}{2}\\begin{pmatrix} 10 \\\\ 10 \\end{pmatrix} = \\begin{pmatrix} 5 \\\\ 5 \\end{pmatrix}",
          "explanation": "The midpoint of diagonal $AC$ is at $(5,5)$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Midpoint formula for BD",
          "workingLatex": "\\overrightarrow{OM_{BD}} = \\tfrac{1}{2}\\left(\\overrightarrow{OB} + \\overrightarrow{OD}\\right)",
          "explanation": "We repeat the averaging for the second diagonal $BD$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Add OB and OD",
          "workingLatex": "\\overrightarrow{OB} + \\overrightarrow{OD} = \\begin{pmatrix} 6 \\\\ 3 \\end{pmatrix} + \\begin{pmatrix} 4 \\\\ 7 \\end{pmatrix} = \\begin{pmatrix} 10 \\\\ 10 \\end{pmatrix}",
          "explanation": "Adding the endpoints of diagonal $BD$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Halve to get the midpoint of BD",
          "workingLatex": "\\overrightarrow{OM_{BD}} = \\tfrac{1}{2}\\begin{pmatrix} 10 \\\\ 10 \\end{pmatrix} = \\begin{pmatrix} 5 \\\\ 5 \\end{pmatrix}",
          "explanation": "The midpoint of diagonal $BD$ is also at $(5,5)$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Compare the midpoints",
          "workingLatex": "\\overrightarrow{OM_{AC}} = \\overrightarrow{OM_{BD}} = \\begin{pmatrix} 5 \\\\ 5 \\end{pmatrix}",
          "explanation": "Both diagonals have the same midpoint, so they cross at a single point that is halfway along each.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Interpret the equal midpoints",
          "workingLatex": "\\text{common midpoint} \\Rightarrow M \\text{ bisects both } AC \\text{ and } BD",
          "explanation": "Because the meeting point is the midpoint of each diagonal, each diagonal is cut exactly in half, i.e. they bisect each other.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "State M",
          "workingLatex": "\\overrightarrow{OM} = \\begin{pmatrix} 5 \\\\ 5 \\end{pmatrix}",
          "explanation": "The diagonals meet at $M=(5,5)$.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "Conclusion",
          "workingLatex": "M = (5,5)\\ \\text{is the midpoint of both diagonals} \\Rightarrow \\text{they bisect each other}",
          "explanation": "This confirms the standard property: in the parallelogram $ABCD$ the diagonals bisect each other at $(5,5)$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$ABCD$ is a parallelogram since $\\overrightarrow{AB}=\\overrightarrow{DC}=\\begin{pmatrix} 5 \\\\ 1 \\end{pmatrix}$. Both diagonals have midpoint $\\overrightarrow{OM}=\\begin{pmatrix} 5 \\\\ 5 \\end{pmatrix}$, so they bisect each other at $M=(5,5)$."
    }
  },
  {
    "id": "al.y1.pure.vector-geometry.q064",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Vector geometry",
    "subtopicId": "al.y1.pure.vector-geometry",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "value",
    "tags": [
      "vector-geometry",
      "ratio",
      "intersection",
      "collinearity"
    ],
    "questionText": "In the parallelogram $OACB$, $\\overrightarrow{OA} = \\mathbf{a}$ and $\\overrightarrow{OB} = \\mathbf{b}$, so that $\\overrightarrow{OC} = \\mathbf{a} + \\mathbf{b}$. The point $M$ is the midpoint of $OB$. The line $AM$ meets the diagonal $OC$ at $P$. Find the ratios $AP:PM$ and $OP:PC$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Record the key vectors",
          "workingLatex": "\\overrightarrow{OA} = \\mathbf{a},\\quad \\overrightarrow{OB} = \\mathbf{b},\\quad \\overrightarrow{OC} = \\mathbf{a} + \\mathbf{b}",
          "explanation": "In the parallelogram $OACB$ the diagonal from $O$ runs to $C$, and $\\overrightarrow{OC}=\\mathbf{a}+\\mathbf{b}$ is the sum of the two sides from $O$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Position of M",
          "workingLatex": "\\overrightarrow{OM} = \\tfrac{1}{2}\\mathbf{b}",
          "explanation": "$M$ is the midpoint of $OB$, so its position vector is half of $\\mathbf{b}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Direction of AM",
          "workingLatex": "\\overrightarrow{AM} = \\overrightarrow{OM} - \\overrightarrow{OA} = \\tfrac{1}{2}\\mathbf{b} - \\mathbf{a}",
          "explanation": "The direction along the line $AM$ is 'finish minus start', from $A$ to $M$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Parametrise the line AM",
          "workingLatex": "\\overrightarrow{OP} = \\mathbf{a} + s\\left(\\tfrac{1}{2}\\mathbf{b} - \\mathbf{a}\\right)",
          "explanation": "Any point on line $AM$ is reached by starting at $A$ and travelling a fraction $s$ of the way towards $M$; $s=0$ gives $A$ and $s=1$ gives $M$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Group by a and b",
          "workingLatex": "\\overrightarrow{OP} = (1 - s)\\mathbf{a} + \\tfrac{s}{2}\\mathbf{b}",
          "explanation": "Collecting the $\\mathbf{a}$ and $\\mathbf{b}$ terms writes $P$ in a form ready to compare with the diagonal.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Parametrise the diagonal OC",
          "workingLatex": "\\overrightarrow{OP} = t(\\mathbf{a} + \\mathbf{b})",
          "explanation": "Points on the diagonal $OC$ are scalar multiples of $\\mathbf{a}+\\mathbf{b}$; $t$ is the fraction of the way from $O$ to $C$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "P lies on both lines",
          "workingLatex": "(1 - s)\\mathbf{a} + \\tfrac{s}{2}\\mathbf{b} = t\\mathbf{a} + t\\mathbf{b}",
          "explanation": "$P$ is the crossing point, so the two descriptions of $\\overrightarrow{OP}$ must be the same vector.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Justify equating coefficients",
          "workingLatex": "\\mathbf{a},\\ \\mathbf{b}\\ \\text{non-parallel} \\Rightarrow \\text{match coefficients separately}",
          "explanation": "Because $\\mathbf{a}$ and $\\mathbf{b}$ are not parallel, the only way two combinations of them can be equal is if the amount of $\\mathbf{a}$ matches and the amount of $\\mathbf{b}$ matches.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Coefficient of a",
          "workingLatex": "1 - s = t",
          "explanation": "Matching the $\\mathbf{a}$ terms gives the first equation.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Coefficient of b",
          "workingLatex": "\\tfrac{s}{2} = t",
          "explanation": "Matching the $\\mathbf{b}$ terms gives the second equation.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Eliminate t",
          "workingLatex": "1 - s = \\tfrac{s}{2}",
          "explanation": "Both equations equal $t$, so we set their left-hand sides equal to get one equation in $s$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Solve for s",
          "workingLatex": "1 = s + \\tfrac{s}{2} = \\tfrac{3}{2}s \\ \\Rightarrow\\ s = \\tfrac{2}{3}",
          "explanation": "Collecting the $s$ terms and rearranging pins down how far along $AM$ the point $P$ sits.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Find t",
          "workingLatex": "t = \\tfrac{s}{2} = \\tfrac{1}{3}",
          "explanation": "Substituting back gives how far along the diagonal $OC$ the point $P$ sits.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Ratio AP:PM",
          "workingLatex": "AP:PM = s : (1 - s) = \\tfrac{2}{3} : \\tfrac{1}{3} = 2 : 1",
          "explanation": "Since $s$ is the fraction of $AM$ from $A$ to $P$, the remaining fraction $1-s$ is $PM$; comparing them gives the ratio.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "Ratio OP:PC",
          "workingLatex": "OP:PC = t : (1 - t) = \\tfrac{1}{3} : \\tfrac{2}{3} = 1 : 2",
          "explanation": "Likewise $t$ is the fraction of $OC$ from $O$ to $P$, so $OP:PC = t:(1-t)$.",
          "diagram": null
        },
        {
          "stepNumber": 16,
          "description": "Consistency check",
          "workingLatex": "\\overrightarrow{OP} = \\tfrac{1}{3}(\\mathbf{a}+\\mathbf{b})\\ \\text{from both routes}\\ \\checkmark",
          "explanation": "Using $s=\\tfrac{2}{3}$ gives $(1-s)\\mathbf{a}+\\tfrac{s}{2}\\mathbf{b}=\\tfrac{1}{3}\\mathbf{a}+\\tfrac{1}{3}\\mathbf{b}$, matching $t(\\mathbf{a}+\\mathbf{b})$ with $t=\\tfrac13$, so both descriptions agree.",
          "diagram": null
        }
      ],
      "finalAnswer": "$AP:PM = 2:1$ and $OP:PC = 1:2$."
    }
  },
  {
    "id": "al.y1.pure.vector-geometry.q065",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Vector geometry",
    "subtopicId": "al.y1.pure.vector-geometry",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "value",
    "tags": [
      "vector-geometry",
      "collinearity",
      "ratio"
    ],
    "questionText": "Relative to an origin $O$, the points $P$, $Q$ and $R$ have position vectors $\\overrightarrow{OP} = \\mathbf{a} + \\mathbf{b}$, $\\overrightarrow{OQ} = 4\\mathbf{a} + 3\\mathbf{b}$ and $\\overrightarrow{OR} = 10\\mathbf{a} + \\lambda\\mathbf{b}$, where $\\mathbf{a}$ and $\\mathbf{b}$ are non-parallel vectors and $\\lambda$ is a constant. Given that $P$, $Q$ and $R$ are collinear, find the value of $\\lambda$ and the ratio $PQ:QR$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Translate 'collinear' into vectors",
          "workingLatex": "P,Q,R\\ \\text{collinear} \\Rightarrow \\overrightarrow{QR} = k\\,\\overrightarrow{PQ}",
          "explanation": "Three points lie on one straight line exactly when the step from $Q$ to $R$ is a scalar multiple of the step from $P$ to $Q$; they point along the same line.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Set up PQ",
          "workingLatex": "\\overrightarrow{PQ} = \\overrightarrow{OQ} - \\overrightarrow{OP}",
          "explanation": "The vector from $P$ to $Q$ is the end position minus the start position.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compute PQ",
          "workingLatex": "\\overrightarrow{PQ} = (4\\mathbf{a} + 3\\mathbf{b}) - (\\mathbf{a} + \\mathbf{b}) = 3\\mathbf{a} + 2\\mathbf{b}",
          "explanation": "Subtracting like terms gives the direction of the first segment.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Set up QR",
          "workingLatex": "\\overrightarrow{QR} = \\overrightarrow{OR} - \\overrightarrow{OQ}",
          "explanation": "Similarly, the vector from $Q$ to $R$ is $R$'s position minus $Q$'s position.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Compute QR",
          "workingLatex": "\\overrightarrow{QR} = (10\\mathbf{a} + \\lambda\\mathbf{b}) - (4\\mathbf{a} + 3\\mathbf{b}) = 6\\mathbf{a} + (\\lambda - 3)\\mathbf{b}",
          "explanation": "This keeps the unknown $\\lambda$ in the $\\mathbf{b}$ component, which is what we will solve for.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Impose parallelism",
          "workingLatex": "6\\mathbf{a} + (\\lambda - 3)\\mathbf{b} = k\\,(3\\mathbf{a} + 2\\mathbf{b})",
          "explanation": "Collinearity means $\\overrightarrow{QR}$ is a multiple $k$ of $\\overrightarrow{PQ}$; writing this out gives an equation to compare.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Equate coefficients",
          "workingLatex": "\\mathbf{a},\\ \\mathbf{b}\\ \\text{non-parallel} \\Rightarrow\\ \\text{match each coefficient}",
          "explanation": "Since $\\mathbf{a}$ and $\\mathbf{b}$ are independent directions, the $\\mathbf{a}$ parts must match and the $\\mathbf{b}$ parts must match separately.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Coefficient of a gives k",
          "workingLatex": "6 = 3k \\ \\Rightarrow\\ k = 2",
          "explanation": "Matching the $\\mathbf{a}$ terms fixes the scale factor between the two segments.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Coefficient of b",
          "workingLatex": "\\lambda - 3 = 2k",
          "explanation": "Matching the $\\mathbf{b}$ terms gives an equation linking $\\lambda$ to $k$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Substitute k",
          "workingLatex": "\\lambda - 3 = 2(2) = 4",
          "explanation": "Using $k=2$ from the $\\mathbf{a}$ equation turns this into a simple equation for $\\lambda$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Solve for lambda",
          "workingLatex": "\\lambda = 7",
          "explanation": "Adding $3$ to both sides gives the value that makes the three points collinear.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Interpret k for the ratio",
          "workingLatex": "\\overrightarrow{QR} = 2\\,\\overrightarrow{PQ}",
          "explanation": "The scale factor $k=2$ means the second step is twice as long as the first and in the same direction.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "State the ratio",
          "workingLatex": "PQ:QR = 1 : 2",
          "explanation": "If $QR$ is twice $PQ$, then their lengths are in the ratio $1:2$.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Verify collinearity",
          "workingLatex": "\\lambda = 7:\\ \\overrightarrow{QR} = 6\\mathbf{a} + 4\\mathbf{b} = 2(3\\mathbf{a} + 2\\mathbf{b}) = 2\\,\\overrightarrow{PQ}\\ \\checkmark",
          "explanation": "Substituting $\\lambda=7$ back shows $\\overrightarrow{QR}$ is exactly twice $\\overrightarrow{PQ}$, confirming $P$, $Q$, $R$ are collinear with $Q$ between $P$ and $R$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\lambda = 7$ and $PQ:QR = 1:2$."
    }
  },
  {
    "id": "al.y1.pure.vector-geometry.q066",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Vector geometry",
    "subtopicId": "al.y1.pure.vector-geometry",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "value",
    "tags": [
      "vector-geometry",
      "ratio",
      "collinearity"
    ],
    "questionText": "The points $A$ and $B$ have position vectors $\\mathbf{a}$ and $\\mathbf{b}$ relative to an origin $O$. The point $P$ is such that $5\\,\\overrightarrow{OP} = 2\\mathbf{a} + 3\\mathbf{b}$. Show that $P$ lies on the line segment $AB$ and find the ratio $AP:PB$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Isolate OP",
          "workingLatex": "\\overrightarrow{OP} = \\tfrac{2}{5}\\mathbf{a} + \\tfrac{3}{5}\\mathbf{b}",
          "explanation": "Dividing the given equation by $5$ writes the position of $P$ directly as a combination of $\\mathbf{a}$ and $\\mathbf{b}$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall the line test",
          "workingLatex": "\\overrightarrow{OP} = (1-t)\\mathbf{a} + t\\mathbf{b}\\ \\text{for some } t \\Leftrightarrow P \\in AB",
          "explanation": "A point is on line $AB$ precisely when its position vector is a weighted average of $\\mathbf{a}$ and $\\mathbf{b}$ whose weights add up to $1$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Check the weights sum to 1",
          "workingLatex": "\\tfrac{2}{5} + \\tfrac{3}{5} = 1",
          "explanation": "The two coefficients add to $1$, so $\\overrightarrow{OP}$ has exactly the required form and $P$ lies on line $AB$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Confirm it is on the segment",
          "workingLatex": "0 < \\tfrac{2}{5},\\ \\tfrac{3}{5} < 1",
          "explanation": "Both weights are between $0$ and $1$, so $P$ sits between $A$ and $B$, on the segment itself rather than an extension.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Set up AP",
          "workingLatex": "\\overrightarrow{AP} = \\overrightarrow{OP} - \\overrightarrow{OA}",
          "explanation": "To find how $P$ divides $AB$, we express the piece $\\overrightarrow{AP}$ using position vectors.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute and simplify AP",
          "workingLatex": "\\overrightarrow{AP} = \\tfrac{2}{5}\\mathbf{a} + \\tfrac{3}{5}\\mathbf{b} - \\mathbf{a} = -\\tfrac{3}{5}\\mathbf{a} + \\tfrac{3}{5}\\mathbf{b}",
          "explanation": "Subtracting $\\mathbf{a}$ leaves the displacement from $A$ to $P$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Factor AP",
          "workingLatex": "\\overrightarrow{AP} = \\tfrac{3}{5}(\\mathbf{b} - \\mathbf{a})",
          "explanation": "Factoring reveals $\\overrightarrow{AP}$ as a multiple of $\\overrightarrow{AB}=\\mathbf{b}-\\mathbf{a}$, which is the direction of the line.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Set up PB",
          "workingLatex": "\\overrightarrow{PB} = \\overrightarrow{OB} - \\overrightarrow{OP}",
          "explanation": "The remaining piece $\\overrightarrow{PB}$ is found the same way, ending at $B$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Substitute and simplify PB",
          "workingLatex": "\\overrightarrow{PB} = \\mathbf{b} - \\tfrac{2}{5}\\mathbf{a} - \\tfrac{3}{5}\\mathbf{b} = -\\tfrac{2}{5}\\mathbf{a} + \\tfrac{2}{5}\\mathbf{b}",
          "explanation": "Collecting terms gives the displacement from $P$ to $B$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Factor PB",
          "workingLatex": "\\overrightarrow{PB} = \\tfrac{2}{5}(\\mathbf{b} - \\mathbf{a})",
          "explanation": "This is also a multiple of $\\overrightarrow{AB}$, so $A$, $P$, $B$ genuinely lie on one line.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Form the ratio",
          "workingLatex": "AP:PB = \\tfrac{3}{5} : \\tfrac{2}{5}",
          "explanation": "Both pieces are multiples of the same direction $\\mathbf{b}-\\mathbf{a}$, so their ratio is just the ratio of those multiples.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Simplify the ratio",
          "workingLatex": "AP:PB = 3 : 2",
          "explanation": "Multiplying both parts by $5$ clears the fractions and gives the ratio in whole numbers.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "State the conclusion",
          "workingLatex": "P \\in AB,\\quad AP:PB = 3:2",
          "explanation": "$P$ lies on the segment $AB$ and divides it so that $AP:PB = 3:2$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P$ lies on $AB$ (the coefficients $\\tfrac{2}{5}$ and $\\tfrac{3}{5}$ sum to $1$), and $AP:PB = 3:2$."
    }
  },
  {
    "id": "al.y1.pure.vector-geometry.q067",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Vector geometry",
    "subtopicId": "al.y1.pure.vector-geometry",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "value",
    "tags": [
      "vector-geometry",
      "ratio",
      "collinearity"
    ],
    "questionText": "The points $A$ and $B$ have position vectors $\\mathbf{a}$ and $\\mathbf{b}$. The point $P$ has position vector $\\overrightarrow{OP} = \\tfrac{3}{4}\\mathbf{a} + k\\,\\mathbf{b}$, where $k$ is a constant. Given that $P$ lies on the line $AB$, find the value of $k$ and hence the ratio $AP:PB$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Describe a general point of AB",
          "workingLatex": "\\overrightarrow{OP} = \\mathbf{a} + t(\\mathbf{b} - \\mathbf{a})",
          "explanation": "Every point on line $AB$ is found by starting at $A$ and moving a fraction $t$ along the direction $\\overrightarrow{AB}=\\mathbf{b}-\\mathbf{a}$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Expand into a and b",
          "workingLatex": "\\overrightarrow{OP} = (1 - t)\\mathbf{a} + t\\mathbf{b}",
          "explanation": "Multiplying out shows the coefficients of $\\mathbf{a}$ and $\\mathbf{b}$ are $1-t$ and $t$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Note the coefficient sum",
          "workingLatex": "(1 - t) + t = 1",
          "explanation": "On line $AB$ the two coefficients always add to $1$; this is the fact we will use to find $k$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Compare with the given form",
          "workingLatex": "\\overrightarrow{OP} = \\tfrac{3}{4}\\mathbf{a} + k\\mathbf{b}",
          "explanation": "The given expression must match the general point, so its coefficients must also sum to $1$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Apply the sum condition",
          "workingLatex": "\\tfrac{3}{4} + k = 1",
          "explanation": "Setting the sum of the coefficients equal to $1$ gives one equation for the unknown $k$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Solve for k",
          "workingLatex": "k = 1 - \\tfrac{3}{4} = \\tfrac{1}{4}",
          "explanation": "Rearranging gives the value of $k$ that places $P$ on the line.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Write OP fully",
          "workingLatex": "\\overrightarrow{OP} = \\tfrac{3}{4}\\mathbf{a} + \\tfrac{1}{4}\\mathbf{b}",
          "explanation": "With $k$ known, the position of $P$ is completely determined.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Identify t",
          "workingLatex": "t = \\tfrac{1}{4}\\quad(\\text{since } 1 - t = \\tfrac{3}{4})",
          "explanation": "Matching the $\\mathbf{b}$ coefficient gives $t=\\tfrac14$, and the $\\mathbf{a}$ coefficient $1-t=\\tfrac34$ agrees, a useful consistency check.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Compute AP",
          "workingLatex": "\\overrightarrow{AP} = \\overrightarrow{OP} - \\overrightarrow{OA} = -\\tfrac{1}{4}\\mathbf{a} + \\tfrac{1}{4}\\mathbf{b} = \\tfrac{1}{4}(\\mathbf{b} - \\mathbf{a})",
          "explanation": "The displacement from $A$ to $P$ is a quarter of $\\overrightarrow{AB}$, matching $t=\\tfrac14$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Compute PB",
          "workingLatex": "\\overrightarrow{PB} = \\overrightarrow{OB} - \\overrightarrow{OP} = -\\tfrac{3}{4}\\mathbf{a} + \\tfrac{3}{4}\\mathbf{b} = \\tfrac{3}{4}(\\mathbf{b} - \\mathbf{a})",
          "explanation": "The remaining displacement from $P$ to $B$ is three quarters of $\\overrightarrow{AB}$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Confirm collinearity",
          "workingLatex": "\\overrightarrow{AP},\\ \\overrightarrow{PB}\\ \\text{are multiples of } (\\mathbf{b} - \\mathbf{a})",
          "explanation": "Both pieces point along $\\overrightarrow{AB}$, confirming $A$, $P$, $B$ are collinear with $P$ between them.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Form the ratio",
          "workingLatex": "AP:PB = \\tfrac{1}{4} : \\tfrac{3}{4}",
          "explanation": "The ratio of the two pieces equals the ratio of their multiples of $\\mathbf{b}-\\mathbf{a}$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Simplify",
          "workingLatex": "AP:PB = 1 : 3",
          "explanation": "Scaling both parts by $4$ gives the ratio in whole numbers.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "State the answer",
          "workingLatex": "k = \\tfrac{1}{4},\\qquad AP:PB = 1 : 3",
          "explanation": "So $k=\\tfrac14$ places $P$ on $AB$, dividing it in the ratio $1:3$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$k = \\tfrac{1}{4}$ and $AP:PB = 1:3$."
    }
  },
  {
    "id": "al.y1.pure.vector-geometry.q068",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Vector geometry",
    "subtopicId": "al.y1.pure.vector-geometry",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "vector",
    "tags": [
      "vector-geometry",
      "mechanics",
      "position-vectors",
      "collision"
    ],
    "questionText": "At time $t$ seconds $(t \\ge 0)$ two particles $A$ and $B$ move in a plane with position vectors, in metres, $\\mathbf{r}_A = \\begin{pmatrix} 1 \\\\ 2 \\end{pmatrix} + t\\begin{pmatrix} 2 \\\\ 3 \\end{pmatrix}$ and $\\mathbf{r}_B = \\begin{pmatrix} 13 \\\\ 20 \\end{pmatrix} + t\\begin{pmatrix} -2 \\\\ -3 \\end{pmatrix}$. Show that the particles collide, and find the time of collision and the position vector at which they collide.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State what a collision requires",
          "workingLatex": "\\mathbf{r}_A = \\mathbf{r}_B\\ \\text{at the same } t",
          "explanation": "A collision means the two particles are at the very same point at the very same instant, so both coordinate equations must hold for one shared value of $t$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the components of A",
          "workingLatex": "x_A = 1 + 2t,\\qquad y_A = 2 + 3t",
          "explanation": "Splitting $\\mathbf{r}_A$ into its horizontal and vertical parts lets us compare each direction separately.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write the components of B",
          "workingLatex": "x_B = 13 - 2t,\\qquad y_B = 20 - 3t",
          "explanation": "Doing the same for $\\mathbf{r}_B$ gives the coordinates we must match.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Equate the x-components",
          "workingLatex": "1 + 2t = 13 - 2t",
          "explanation": "For the particles to share a position, their horizontal coordinates must be equal.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Collect terms",
          "workingLatex": "2t + 2t = 13 - 1",
          "explanation": "Gathering the $t$ terms on one side and the numbers on the other prepares to solve.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Solve for t from x",
          "workingLatex": "4t = 12 \\ \\Rightarrow\\ t = 3",
          "explanation": "This is the only time at which the horizontal coordinates agree.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Equate the y-components",
          "workingLatex": "2 + 3t = 20 - 3t",
          "explanation": "A genuine collision also needs the vertical coordinates to match, so we solve that equation too.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Collect terms",
          "workingLatex": "3t + 3t = 20 - 2",
          "explanation": "Again bringing the $t$ terms together ready to solve.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Solve for t from y",
          "workingLatex": "6t = 18 \\ \\Rightarrow\\ t = 3",
          "explanation": "The vertical coordinates agree at exactly the same time.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Compare the two times",
          "workingLatex": "t = 3\\ \\text{from both } x \\text{ and } y",
          "explanation": "Because both components give the same $t=3$, the particles are at one common point at one common instant, so they really do collide. (If the two times had differed, the paths would only cross without a collision.)",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Substitute into r_A",
          "workingLatex": "\\mathbf{r}_A = \\begin{pmatrix} 1 \\\\ 2 \\end{pmatrix} + 3\\begin{pmatrix} 2 \\\\ 3 \\end{pmatrix}",
          "explanation": "Putting $t=3$ into either position vector gives the collision point; we use $\\mathbf{r}_A$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Evaluate the position",
          "workingLatex": "\\mathbf{r}_A = \\begin{pmatrix} 1 \\\\ 2 \\end{pmatrix} + \\begin{pmatrix} 6 \\\\ 9 \\end{pmatrix} = \\begin{pmatrix} 7 \\\\ 11 \\end{pmatrix}",
          "explanation": "Carrying out the arithmetic gives the point where the particles meet.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Check with r_B",
          "workingLatex": "\\mathbf{r}_B = \\begin{pmatrix} 13 \\\\ 20 \\end{pmatrix} + 3\\begin{pmatrix} -2 \\\\ -3 \\end{pmatrix} = \\begin{pmatrix} 7 \\\\ 11 \\end{pmatrix}\\ \\checkmark",
          "explanation": "Substituting $t=3$ into $\\mathbf{r}_B$ gives the same point, confirming the collision.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "State the conclusion",
          "workingLatex": "\\text{Collide at } t = 3\\text{ s at } \\begin{pmatrix} 7 \\\\ 11 \\end{pmatrix}\\text{ m}",
          "explanation": "The particles collide after $3$ seconds at the point with position vector $\\begin{pmatrix} 7 \\\\ 11 \\end{pmatrix}$.",
          "diagram": null
        }
      ],
      "finalAnswer": "The particles collide at $t = 3$ s at the point with position vector $\\begin{pmatrix} 7 \\\\ 11 \\end{pmatrix}$ m."
    }
  },
  {
    "id": "al.y1.pure.vector-geometry.q069",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Vector geometry",
    "subtopicId": "al.y1.pure.vector-geometry",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "value",
    "tags": [
      "vector-geometry",
      "mechanics",
      "position-vectors",
      "bearings"
    ],
    "questionText": "Two particles $A$ and $B$ move so that at time $t$ seconds their position vectors, in metres with $\\mathbf{i}$ due east and $\\mathbf{j}$ due north, are $\\mathbf{r}_A = \\begin{pmatrix} 2 \\\\ 1 \\end{pmatrix} + t\\begin{pmatrix} 1 \\\\ 2 \\end{pmatrix}$ and $\\mathbf{r}_B = \\begin{pmatrix} 10 \\\\ 15 \\end{pmatrix} + t\\begin{pmatrix} -1 \\\\ -1 \\end{pmatrix}$. Find the value of $t$ at which $B$ is due north of $A$, and the distance between the particles at that instant.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Interpret 'due north'",
          "workingLatex": "B\\ \\text{due north of } A \\Rightarrow x_A = x_B\\ \\text{and}\\ y_B > y_A",
          "explanation": "Since $\\mathbf{i}$ points east, 'directly north' means the same easting (equal $x$), with $B$ further north than $A$ (bigger $y$).",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Easting of A",
          "workingLatex": "x_A = 2 + t",
          "explanation": "The $\\mathbf{i}$ component of $\\mathbf{r}_A$ gives $A$'s easting at time $t$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Easting of B",
          "workingLatex": "x_B = 10 - t",
          "explanation": "The $\\mathbf{i}$ component of $\\mathbf{r}_B$ gives $B$'s easting at time $t$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Set eastings equal",
          "workingLatex": "2 + t = 10 - t",
          "explanation": "$B$ is due north of $A$ only when their east–west positions coincide, giving this equation.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Collect terms",
          "workingLatex": "t + t = 10 - 2",
          "explanation": "Bringing the $t$ terms together ready to solve.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Solve for t",
          "workingLatex": "2t = 8 \\ \\Rightarrow\\ t = 4",
          "explanation": "This is the time at which the two particles share the same easting.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Northing of A at t = 4",
          "workingLatex": "y_A = 1 + 2(4) = 9",
          "explanation": "We now check the north coordinates to confirm $B$ is north, not south, of $A$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Northing of B at t = 4",
          "workingLatex": "y_B = 15 - 4 = 11",
          "explanation": "Computing $B$'s northing at the same time for comparison.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Confirm north not south",
          "workingLatex": "y_B = 11 > y_A = 9",
          "explanation": "Since $B$'s northing is greater, $B$ really is due north of $A$ (not due south), so $t=4$ is valid.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Position of A at t = 4",
          "workingLatex": "\\mathbf{r}_A = \\begin{pmatrix} 6 \\\\ 9 \\end{pmatrix}",
          "explanation": "Using $x_A=6$, $y_A=9$ fixes $A$'s location for the distance calculation.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Position of B at t = 4",
          "workingLatex": "\\mathbf{r}_B = \\begin{pmatrix} 6 \\\\ 11 \\end{pmatrix}",
          "explanation": "Likewise $B$ is at $(6,11)$; note the equal eastings, as expected.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Displacement from A to B",
          "workingLatex": "\\overrightarrow{AB} = \\mathbf{r}_B - \\mathbf{r}_A = \\begin{pmatrix} 0 \\\\ 2 \\end{pmatrix}",
          "explanation": "The zero east component confirms the direction is due north; the north component is the separation.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Distance apart",
          "workingLatex": "|\\overrightarrow{AB}| = \\sqrt{0^2 + 2^2} = 2",
          "explanation": "The magnitude of the displacement is the distance between the particles.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "State the answer",
          "workingLatex": "t = 4\\text{ s},\\quad \\text{distance} = 2\\text{ m}",
          "explanation": "After $4$ seconds $B$ is due north of $A$, and the two particles are $2$ m apart.",
          "diagram": null
        }
      ],
      "finalAnswer": "$B$ is due north of $A$ at $t = 4$ s, when the particles are $2$ m apart."
    }
  },
  {
    "id": "al.y1.pure.vector-geometry.q070",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Vector geometry",
    "subtopicId": "al.y1.pure.vector-geometry",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "value",
    "tags": [
      "vector-geometry",
      "mechanics",
      "position-vectors",
      "bearings"
    ],
    "questionText": "Two particles $P$ and $Q$ move in a horizontal plane. With $\\mathbf{i}$ due east and $\\mathbf{j}$ due north, their position vectors in metres at time $t$ seconds are $\\mathbf{r}_P = \\begin{pmatrix} 1 \\\\ 2 \\end{pmatrix} + t\\begin{pmatrix} 1 \\\\ 1 \\end{pmatrix}$ and $\\mathbf{r}_Q = \\begin{pmatrix} 12 \\\\ 8 \\end{pmatrix} + t\\begin{pmatrix} -2 \\\\ -1 \\end{pmatrix}$. (a) Find the time at which $Q$ is due east of $P$. (b) Find the position vectors of the two particles at that time and the distance between them.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Interpret 'due east'",
          "workingLatex": "Q\\ \\text{due east of } P \\Rightarrow y_P = y_Q\\ \\text{and}\\ x_Q > x_P",
          "explanation": "Since $\\mathbf{j}$ points north, 'directly east' means the same northing (equal $y$), with $Q$ further east than $P$ (bigger $x$).",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Northing of P",
          "workingLatex": "y_P = 2 + t",
          "explanation": "The $\\mathbf{j}$ component of $\\mathbf{r}_P$ gives $P$'s northing at time $t$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Northing of Q",
          "workingLatex": "y_Q = 8 - t",
          "explanation": "The $\\mathbf{j}$ component of $\\mathbf{r}_Q$ gives $Q$'s northing at time $t$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Set northings equal",
          "workingLatex": "2 + t = 8 - t",
          "explanation": "$Q$ is due east of $P$ only when their north–south positions match, giving this equation.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Collect terms",
          "workingLatex": "t + t = 8 - 2",
          "explanation": "Gathering the $t$ terms ready to solve.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Solve for t",
          "workingLatex": "2t = 6 \\ \\Rightarrow\\ t = 3",
          "explanation": "This is the time at which the two particles share the same northing.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Easting of P at t = 3",
          "workingLatex": "x_P = 1 + 3 = 4",
          "explanation": "We compute the eastings to confirm $Q$ lies east, not west, of $P$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Easting of Q at t = 3",
          "workingLatex": "x_Q = 12 - 2(3) = 6",
          "explanation": "Computing $Q$'s easting at the same time for comparison.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Confirm east not west",
          "workingLatex": "x_Q = 6 > x_P = 4",
          "explanation": "Since $Q$'s easting is greater, $Q$ really is due east of $P$, so $t=3$ is valid.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Position of P at t = 3",
          "workingLatex": "\\mathbf{r}_P = \\begin{pmatrix} 1 \\\\ 2 \\end{pmatrix} + 3\\begin{pmatrix} 1 \\\\ 1 \\end{pmatrix} = \\begin{pmatrix} 4 \\\\ 5 \\end{pmatrix}",
          "explanation": "Substituting $t=3$ gives $P$'s full position vector.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Position of Q at t = 3",
          "workingLatex": "\\mathbf{r}_Q = \\begin{pmatrix} 12 \\\\ 8 \\end{pmatrix} + 3\\begin{pmatrix} -2 \\\\ -1 \\end{pmatrix} = \\begin{pmatrix} 6 \\\\ 5 \\end{pmatrix}",
          "explanation": "Substituting $t=3$ gives $Q$'s position; the equal northings ($y=5$) confirm the due-east alignment.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Displacement from P to Q",
          "workingLatex": "\\overrightarrow{PQ} = \\mathbf{r}_Q - \\mathbf{r}_P = \\begin{pmatrix} 2 \\\\ 0 \\end{pmatrix}",
          "explanation": "The zero north component confirms the direction is due east; the east component is the separation.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Distance apart",
          "workingLatex": "|\\overrightarrow{PQ}| = \\sqrt{2^2 + 0^2} = 2",
          "explanation": "The magnitude of the displacement gives the distance between the two particles.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "State the answers",
          "workingLatex": "t = 3\\text{ s};\\ \\ \\mathbf{r}_P = \\begin{pmatrix} 4 \\\\ 5 \\end{pmatrix},\\ \\mathbf{r}_Q = \\begin{pmatrix} 6 \\\\ 5 \\end{pmatrix};\\ \\ d = 2\\text{ m}",
          "explanation": "At $t=3$ s, $P$ is at $(4,5)$ and $Q$ at $(6,5)$, with $Q$ due east of $P$ and the particles $2$ m apart.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $t = 3$ s. (b) $\\mathbf{r}_P = \\begin{pmatrix} 4 \\\\ 5 \\end{pmatrix}$ m and $\\mathbf{r}_Q = \\begin{pmatrix} 6 \\\\ 5 \\end{pmatrix}$ m, a distance of $2$ m apart."
    }
  }
];
