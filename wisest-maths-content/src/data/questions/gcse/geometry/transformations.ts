import { Question } from "@/lib/types";

export const questions: Question[] = [
  {
    "id": "gcse.geometry.transformations.q001",
    "level": "GCSE",
    "topic": "Properties and constructions",
    "subtopic": "Transformations",
    "subtopicId": "gcse.geometry.transformations",
    "difficulty": "Easy",
    "marks": 1,
    "answerType": "text",
    "tags": ["translation", "vector"],
    "questionText": "A translation is described by the vector $\\begin{pmatrix} 3 \\\\ 2 \\end{pmatrix}$. Describe how the shape moves.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Read the vector.", "workingLatex": "\\begin{pmatrix} 3 \\\\ 2 \\end{pmatrix}", "explanation": "The top number is the horizontal move, the bottom is the vertical move.", "diagram": null }
      ],
      "finalAnswer": "$3$ right and $2$ up"
    }
  },
  {
    "id": "gcse.geometry.transformations.q002",
    "level": "GCSE",
    "topic": "Properties and constructions",
    "subtopic": "Transformations",
    "subtopicId": "gcse.geometry.transformations",
    "difficulty": "Easy",
    "marks": 1,
    "answerType": "text",
    "tags": ["translation", "vector"],
    "questionText": "A translation is described by the vector $\\begin{pmatrix} -4 \\\\ 1 \\end{pmatrix}$. Describe how the shape moves.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Read the vector.", "workingLatex": "\\begin{pmatrix} -4 \\\\ 1 \\end{pmatrix}", "explanation": "Negative top means left; positive bottom means up.", "diagram": null }
      ],
      "finalAnswer": "$4$ left and $1$ up"
    }
  },
  {
    "id": "gcse.geometry.transformations.q003",
    "level": "GCSE",
    "topic": "Properties and constructions",
    "subtopic": "Transformations",
    "subtopicId": "gcse.geometry.transformations",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "value",
    "tags": ["translation", "coordinates"],
    "questionText": "The point $(2, 3)$ is translated by $\\begin{pmatrix} 4 \\\\ 1 \\end{pmatrix}$. Find its image.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Add the vector.", "workingLatex": "(2 + 4,\\ 3 + 1)", "explanation": "Add the vector components to the coordinates.", "diagram": null },
        { "stepNumber": 2, "description": "Simplify.", "workingLatex": "(6, 4)", "explanation": "Work out each coordinate.", "diagram": null }
      ],
      "finalAnswer": "$(6, 4)$"
    }
  },
  {
    "id": "gcse.geometry.transformations.q004",
    "level": "GCSE",
    "topic": "Properties and constructions",
    "subtopic": "Transformations",
    "subtopicId": "gcse.geometry.transformations",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "value",
    "tags": ["translation", "coordinates"],
    "questionText": "The point $(5, 4)$ is translated by $\\begin{pmatrix} -2 \\\\ -3 \\end{pmatrix}$. Find its image.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Add the vector.", "workingLatex": "(5 + (-2),\\ 4 + (-3))", "explanation": "Add the components, including the negatives.", "diagram": null },
        { "stepNumber": 2, "description": "Simplify.", "workingLatex": "(3, 1)", "explanation": "Work out each coordinate.", "diagram": null }
      ],
      "finalAnswer": "$(3, 1)$"
    }
  },
  {
    "id": "gcse.geometry.transformations.q005",
    "level": "GCSE",
    "topic": "Properties and constructions",
    "subtopic": "Transformations",
    "subtopicId": "gcse.geometry.transformations",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "value",
    "tags": ["reflection", "coordinates"],
    "questionText": "The point $(3, 5)$ is reflected in the $x$-axis. Find its image.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Reflect in the x-axis.", "workingLatex": "(x, y) \\to (x, -y)", "explanation": "Reflecting in the $x$-axis flips the sign of the $y$-coordinate.", "diagram": null },
        { "stepNumber": 2, "description": "Apply.", "workingLatex": "(3, -5)", "explanation": "Keep $x$, negate $y$.", "diagram": null }
      ],
      "finalAnswer": "$(3, -5)$"
    }
  },
  {
    "id": "gcse.geometry.transformations.q006",
    "level": "GCSE",
    "topic": "Properties and constructions",
    "subtopic": "Transformations",
    "subtopicId": "gcse.geometry.transformations",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "value",
    "tags": ["reflection", "coordinates"],
    "questionText": "The point $(4, 2)$ is reflected in the $y$-axis. Find its image.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Reflect in the y-axis.", "workingLatex": "(x, y) \\to (-x, y)", "explanation": "Reflecting in the $y$-axis flips the sign of the $x$-coordinate.", "diagram": null },
        { "stepNumber": 2, "description": "Apply.", "workingLatex": "(-4, 2)", "explanation": "Negate $x$, keep $y$.", "diagram": null }
      ],
      "finalAnswer": "$(-4, 2)$"
    }
  },
  {
    "id": "gcse.geometry.transformations.q007",
    "level": "GCSE",
    "topic": "Properties and constructions",
    "subtopic": "Transformations",
    "subtopicId": "gcse.geometry.transformations",
    "difficulty": "Easy",
    "marks": 1,
    "answerType": "text",
    "tags": ["reflection", "line"],
    "questionText": "What is the equation of the line called the $y$-axis?",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall the axis equation.", "workingLatex": "x = 0", "explanation": "Every point on the $y$-axis has $x$-coordinate $0$.", "diagram": null }
      ],
      "finalAnswer": "$x = 0$"
    }
  },
  {
    "id": "gcse.geometry.transformations.q008",
    "level": "GCSE",
    "topic": "Properties and constructions",
    "subtopic": "Transformations",
    "subtopicId": "gcse.geometry.transformations",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "text",
    "tags": ["rotation", "describe"],
    "questionText": "A shape is turned a quarter turn clockwise about a point. Describe this rotation in degrees.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Quarter turn in degrees.", "workingLatex": "\\tfrac{1}{4} \\times 360 = 90", "explanation": "A full turn is $360^\\circ$, so a quarter turn is $90^\\circ$.", "diagram": null }
      ],
      "finalAnswer": "$90^\\circ$ clockwise"
    }
  },
  {
    "id": "gcse.geometry.transformations.q009",
    "level": "GCSE",
    "topic": "Properties and constructions",
    "subtopic": "Transformations",
    "subtopicId": "gcse.geometry.transformations",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "text",
    "tags": ["rotation", "describe"],
    "questionText": "A rotation of $180^\\circ$ clockwise gives the same result as which anticlockwise rotation?",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Compare turns.", "workingLatex": "180^\\circ", "explanation": "A half turn is the same whichever way you go.", "diagram": null }
      ],
      "finalAnswer": "$180^\\circ$ anticlockwise"
    }
  },
  {
    "id": "gcse.geometry.transformations.q010",
    "level": "GCSE",
    "topic": "Properties and constructions",
    "subtopic": "Transformations",
    "subtopicId": "gcse.geometry.transformations",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "value",
    "tags": ["enlargement", "coordinates"],
    "questionText": "A point $(3, 4)$ is enlarged by scale factor $2$, centre the origin. Find its image.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Multiply coordinates by the scale factor.", "workingLatex": "(3 \\times 2,\\ 4 \\times 2)", "explanation": "Enlargement from the origin multiplies each coordinate.", "diagram": null },
        { "stepNumber": 2, "description": "Simplify.", "workingLatex": "(6, 8)", "explanation": "Work out each coordinate.", "diagram": null }
      ],
      "finalAnswer": "$(6, 8)$"
    }
  },
  {
    "id": "gcse.geometry.transformations.q011",
    "level": "GCSE",
    "topic": "Properties and constructions",
    "subtopic": "Transformations",
    "subtopicId": "gcse.geometry.transformations",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "value",
    "tags": ["enlargement", "coordinates"],
    "questionText": "A point $(2, 5)$ is enlarged by scale factor $3$, centre the origin. Find its image.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Multiply by the scale factor.", "workingLatex": "(2 \\times 3,\\ 5 \\times 3)", "explanation": "Enlargement from the origin multiplies each coordinate.", "diagram": null },
        { "stepNumber": 2, "description": "Simplify.", "workingLatex": "(6, 15)", "explanation": "Work out each coordinate.", "diagram": null }
      ],
      "finalAnswer": "$(6, 15)$"
    }
  },
  {
    "id": "gcse.geometry.transformations.q012",
    "level": "GCSE",
    "topic": "Properties and constructions",
    "subtopic": "Transformations",
    "subtopicId": "gcse.geometry.transformations",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "text",
    "tags": ["enlargement", "congruence"],
    "questionText": "Which transformation changes the size of a shape: reflection, rotation, translation, or enlargement?",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall which preserve size.", "workingLatex": "\\text{only enlargement resizes}", "explanation": "Reflection, rotation and translation keep the shape congruent; only enlargement changes size.", "diagram": null }
      ],
      "finalAnswer": "Enlargement"
    }
  },
  {
    "id": "gcse.geometry.transformations.q013",
    "level": "GCSE",
    "topic": "Properties and constructions",
    "subtopic": "Transformations",
    "subtopicId": "gcse.geometry.transformations",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "value",
    "tags": ["reflection", "coordinates"],
    "questionText": "The point $(6, 1)$ is reflected in the line $y = x$. Find its image.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Reflect in y = x.", "workingLatex": "(x, y) \\to (y, x)", "explanation": "Reflecting in $y = x$ swaps the coordinates.", "diagram": null },
        { "stepNumber": 2, "description": "Apply.", "workingLatex": "(1, 6)", "explanation": "Swap the two numbers.", "diagram": null }
      ],
      "finalAnswer": "$(1, 6)$"
    }
  },
  {
    "id": "gcse.geometry.transformations.q014",
    "level": "GCSE",
    "topic": "Properties and constructions",
    "subtopic": "Transformations",
    "subtopicId": "gcse.geometry.transformations",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "text",
    "tags": ["translation", "vector"],
    "questionText": "Write the vector that translates a shape $5$ units left and $3$ units down.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Left is negative x, down is negative y.", "workingLatex": "\\begin{pmatrix} -5 \\\\ -3 \\end{pmatrix}", "explanation": "Left and down are both negative directions.", "diagram": null }
      ],
      "finalAnswer": "$\\begin{pmatrix} -5 \\\\ -3 \\end{pmatrix}$"
    }
  },
  {
    "id": "gcse.geometry.transformations.q015",
    "level": "GCSE",
    "topic": "Properties and constructions",
    "subtopic": "Transformations",
    "subtopicId": "gcse.geometry.transformations",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "value",
    "tags": ["reflection", "coordinates"],
    "questionText": "The point $(-2, 7)$ is reflected in the $x$-axis. Find its image.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Reflect in the x-axis.", "workingLatex": "(x, y) \\to (x, -y)", "explanation": "Flip the sign of $y$.", "diagram": null },
        { "stepNumber": 2, "description": "Apply.", "workingLatex": "(-2, -7)", "explanation": "Keep $x$, negate $y$.", "diagram": null }
      ],
      "finalAnswer": "$(-2, -7)$"
    }
  },
  {
    "id": "gcse.geometry.transformations.q016",
    "level": "GCSE",
    "topic": "Properties and constructions",
    "subtopic": "Transformations",
    "subtopicId": "gcse.geometry.transformations",
    "difficulty": "Easy",
    "marks": 1,
    "answerType": "text",
    "tags": ["reflection", "line"],
    "questionText": "What is the equation of the line called the $x$-axis?",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall the axis equation.", "workingLatex": "y = 0", "explanation": "Every point on the $x$-axis has $y$-coordinate $0$.", "diagram": null }
      ],
      "finalAnswer": "$y = 0$"
    }
  },
  {
    "id": "gcse.geometry.transformations.q017",
    "level": "GCSE",
    "topic": "Properties and constructions",
    "subtopic": "Transformations",
    "subtopicId": "gcse.geometry.transformations",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "text",
    "tags": ["describe", "single"],
    "questionText": "A shape and its image are the same size but face opposite ways as mirror images. Which single transformation is this?",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Identify the transformation.", "workingLatex": "\\text{mirror image}", "explanation": "A mirror image of the same size is a reflection.", "diagram": null }
      ],
      "finalAnswer": "Reflection"
    }
  },
  {
    "id": "gcse.geometry.transformations.q018",
    "level": "GCSE",
    "topic": "Properties and constructions",
    "subtopic": "Transformations",
    "subtopicId": "gcse.geometry.transformations",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "value",
    "tags": ["enlargement", "length"],
    "questionText": "A triangle has a side of $4\\text{ cm}$. It is enlarged by scale factor $3$. Find the length of the matching side on the image.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Multiply by the scale factor.", "workingLatex": "4 \\times 3 = 12", "explanation": "Each length grows by the scale factor.", "diagram": null }
      ],
      "finalAnswer": "$12\\text{ cm}$"
    }
  },
  {
    "id": "gcse.geometry.transformations.q019",
    "level": "GCSE",
    "topic": "Properties and constructions",
    "subtopic": "Transformations",
    "subtopicId": "gcse.geometry.transformations",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "value",
    "tags": ["translation", "coordinates"],
    "questionText": "The point $(0, 0)$ is translated by $\\begin{pmatrix} -3 \\\\ 5 \\end{pmatrix}$. Find its image.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Add the vector.", "workingLatex": "(0 - 3,\\ 0 + 5)", "explanation": "Add the components to the origin.", "diagram": null },
        { "stepNumber": 2, "description": "Simplify.", "workingLatex": "(-3, 5)", "explanation": "Work out each coordinate.", "diagram": null }
      ],
      "finalAnswer": "$(-3, 5)$"
    }
  },
  {
    "id": "gcse.geometry.transformations.q020",
    "level": "GCSE",
    "topic": "Properties and constructions",
    "subtopic": "Transformations",
    "subtopicId": "gcse.geometry.transformations",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "text",
    "tags": ["rotation", "describe"],
    "questionText": "How many degrees is a three-quarter turn?",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Three-quarters of a full turn.", "workingLatex": "\\tfrac{3}{4} \\times 360 = 270", "explanation": "A full turn is $360^\\circ$.", "diagram": null }
      ],
      "finalAnswer": "$270^\\circ$"
    }
  },
  {
    "id": "gcse.geometry.transformations.q021",
    "level": "GCSE",
    "topic": "Properties and constructions",
    "subtopic": "Transformations",
    "subtopicId": "gcse.geometry.transformations",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "value",
    "tags": ["rotation", "coordinates"],
    "questionText": "The point $(4, 2)$ is rotated $90^\\circ$ anticlockwise about the origin. Find its image.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Rule for 90° anticlockwise.", "workingLatex": "(x, y) \\to (-y, x)", "explanation": "This is the standard rule for a $90^\\circ$ anticlockwise rotation about the origin.", "diagram": null },
        { "stepNumber": 2, "description": "Apply.", "workingLatex": "(-2, 4)", "explanation": "Swap and change sign as the rule says.", "diagram": null }
      ],
      "finalAnswer": "$(-2, 4)$"
    }
  },
  {
    "id": "gcse.geometry.transformations.q022",
    "level": "GCSE",
    "topic": "Properties and constructions",
    "subtopic": "Transformations",
    "subtopicId": "gcse.geometry.transformations",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "value",
    "tags": ["rotation", "coordinates"],
    "questionText": "The point $(3, 5)$ is rotated $90^\\circ$ clockwise about the origin. Find its image.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Rule for 90° clockwise.", "workingLatex": "(x, y) \\to (y, -x)", "explanation": "This is the standard rule for a $90^\\circ$ clockwise rotation about the origin.", "diagram": null },
        { "stepNumber": 2, "description": "Apply.", "workingLatex": "(5, -3)", "explanation": "Swap and change sign as the rule says.", "diagram": null }
      ],
      "finalAnswer": "$(5, -3)$"
    }
  },
  {
    "id": "gcse.geometry.transformations.q023",
    "level": "GCSE",
    "topic": "Properties and constructions",
    "subtopic": "Transformations",
    "subtopicId": "gcse.geometry.transformations",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "value",
    "tags": ["rotation", "coordinates"],
    "questionText": "The point $(2, 6)$ is rotated $180^\\circ$ about the origin. Find its image.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Rule for 180°.", "workingLatex": "(x, y) \\to (-x, -y)", "explanation": "A half turn about the origin negates both coordinates.", "diagram": null },
        { "stepNumber": 2, "description": "Apply.", "workingLatex": "(-2, -6)", "explanation": "Negate both.", "diagram": null }
      ],
      "finalAnswer": "$(-2, -6)$"
    }
  },
  {
    "id": "gcse.geometry.transformations.q024",
    "level": "GCSE",
    "topic": "Properties and constructions",
    "subtopic": "Transformations",
    "subtopicId": "gcse.geometry.transformations",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "value",
    "tags": ["reflection", "coordinates"],
    "questionText": "The point $(5, -3)$ is reflected in the line $y = -x$. Find its image.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Rule for y = -x.", "workingLatex": "(x, y) \\to (-y, -x)", "explanation": "Reflecting in $y = -x$ swaps the coordinates and changes both signs.", "diagram": null },
        { "stepNumber": 2, "description": "Apply.", "workingLatex": "(3, -5)", "explanation": "Swap to $(-3, -5)$... then negate: $(-(-3), -(5)) = (3,-5)$.", "diagram": null }
      ],
      "finalAnswer": "$(3, -5)$"
    }
  },
  {
    "id": "gcse.geometry.transformations.q025",
    "level": "GCSE",
    "topic": "Properties and constructions",
    "subtopic": "Transformations",
    "subtopicId": "gcse.geometry.transformations",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "text",
    "tags": ["reflection", "describe"],
    "questionText": "A point $(4, 4)$ maps to $(4, -4)$ under a single reflection. State the mirror line.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Compare coordinates.", "workingLatex": "x \\text{ same}, y \\text{ negated}", "explanation": "Only the $y$-coordinate changes sign.", "diagram": null },
        { "stepNumber": 2, "description": "Identify the line.", "workingLatex": "y = 0", "explanation": "That is a reflection in the $x$-axis.", "diagram": null }
      ],
      "finalAnswer": "The $x$-axis ($y = 0$)"
    }
  },
  {
    "id": "gcse.geometry.transformations.q026",
    "level": "GCSE",
    "topic": "Properties and constructions",
    "subtopic": "Transformations",
    "subtopicId": "gcse.geometry.transformations",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "text",
    "tags": ["translation", "describe"],
    "questionText": "A shape at $(1, 1)$ maps to $(6, 3)$ under a translation. Find the translation vector.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Subtract start from end.", "workingLatex": "(6 - 1,\\ 3 - 1)", "explanation": "The vector is image minus object.", "diagram": null },
        { "stepNumber": 2, "description": "Write as a column vector.", "workingLatex": "\\begin{pmatrix} 5 \\\\ 2 \\end{pmatrix}", "explanation": "Put the differences into a column vector.", "diagram": null }
      ],
      "finalAnswer": "$\\begin{pmatrix} 5 \\\\ 2 \\end{pmatrix}$"
    }
  },
  {
    "id": "gcse.geometry.transformations.q027",
    "level": "GCSE",
    "topic": "Properties and constructions",
    "subtopic": "Transformations",
    "subtopicId": "gcse.geometry.transformations",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "value",
    "tags": ["enlargement", "centre"],
    "questionText": "A point $(5, 4)$ is enlarged by scale factor $2$, centre $(1, 2)$. Find its image.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Vector from centre to point.", "workingLatex": "(5 - 1,\\ 4 - 2) = (4, 2)", "explanation": "Find how far the point is from the centre.", "diagram": null },
        { "stepNumber": 2, "description": "Multiply by the scale factor.", "workingLatex": "(4 \\times 2,\\ 2 \\times 2) = (8, 4)", "explanation": "Scale the vector.", "diagram": null },
        { "stepNumber": 3, "description": "Add back to the centre.", "workingLatex": "(1 + 8,\\ 2 + 4) = (9, 6)", "explanation": "The image is the centre plus the scaled vector.", "diagram": null }
      ],
      "finalAnswer": "$(9, 6)$"
    }
  },
  {
    "id": "gcse.geometry.transformations.q028",
    "level": "GCSE",
    "topic": "Properties and constructions",
    "subtopic": "Transformations",
    "subtopicId": "gcse.geometry.transformations",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "value",
    "tags": ["enlargement", "centre"],
    "questionText": "A point $(7, 8)$ is enlarged by scale factor $3$, centre $(1, 2)$. Find its image.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Vector from centre to point.", "workingLatex": "(7 - 1,\\ 8 - 2) = (6, 6)", "explanation": "Distance from the centre.", "diagram": null },
        { "stepNumber": 2, "description": "Multiply by the scale factor.", "workingLatex": "(6 \\times 3,\\ 6 \\times 3) = (18, 18)", "explanation": "Scale the vector.", "diagram": null },
        { "stepNumber": 3, "description": "Add back to the centre.", "workingLatex": "(1 + 18,\\ 2 + 18) = (19, 20)", "explanation": "Centre plus scaled vector.", "diagram": null }
      ],
      "finalAnswer": "$(19, 20)$"
    }
  },
  {
    "id": "gcse.geometry.transformations.q029",
    "level": "GCSE",
    "topic": "Properties and constructions",
    "subtopic": "Transformations",
    "subtopicId": "gcse.geometry.transformations",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "value",
    "tags": ["enlargement", "fractional"],
    "questionText": "A point $(8, 6)$ is enlarged by scale factor $\\tfrac{1}{2}$, centre the origin. Find its image.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Multiply by the scale factor.", "workingLatex": "(8 \\times \\tfrac{1}{2},\\ 6 \\times \\tfrac{1}{2})", "explanation": "A fractional scale factor shrinks the shape.", "diagram": null },
        { "stepNumber": 2, "description": "Simplify.", "workingLatex": "(4, 3)", "explanation": "Work out each coordinate.", "diagram": null }
      ],
      "finalAnswer": "$(4, 3)$"
    }
  },
  {
    "id": "gcse.geometry.transformations.q030",
    "level": "GCSE",
    "topic": "Properties and constructions",
    "subtopic": "Transformations",
    "subtopicId": "gcse.geometry.transformations",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "text",
    "tags": ["enlargement", "describe"],
    "questionText": "A shape with a side of $3\\text{ cm}$ maps to a similar shape with matching side $9\\text{ cm}$. State the scale factor of the enlargement.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Divide image by object.", "workingLatex": "9 \\div 3 = 3", "explanation": "The scale factor is the ratio of matching sides.", "diagram": null }
      ],
      "finalAnswer": "Scale factor $3$"
    }
  },
  {
    "id": "gcse.geometry.transformations.q031",
    "level": "GCSE",
    "topic": "Properties and constructions",
    "subtopic": "Transformations",
    "subtopicId": "gcse.geometry.transformations",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "value",
    "tags": ["rotation", "coordinates"],
    "questionText": "The point $(6, 2)$ is rotated $90^\\circ$ anticlockwise about the origin, then reflected in the $x$-axis. Find the final image.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Rotate 90° anticlockwise.", "workingLatex": "(x, y) \\to (-y, x): (6,2) \\to (-2, 6)", "explanation": "Apply the rotation rule.", "diagram": null },
        { "stepNumber": 2, "description": "Reflect in the x-axis.", "workingLatex": "(-2, 6) \\to (-2, -6)", "explanation": "Negate the $y$-coordinate.", "diagram": null }
      ],
      "finalAnswer": "$(-2, -6)$"
    }
  },
  {
    "id": "gcse.geometry.transformations.q032",
    "level": "GCSE",
    "topic": "Properties and constructions",
    "subtopic": "Transformations",
    "subtopicId": "gcse.geometry.transformations",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "text",
    "tags": ["describe", "single"],
    "questionText": "Triangle $A$ has vertices $(1,1), (1,3), (2,1)$. Triangle $B$ has vertices $(1,-1), (1,-3), (2,-1)$. Describe the single transformation from $A$ to $B$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Compare coordinates.", "workingLatex": "x \\text{ same}, y \\text{ negated}", "explanation": "Each $y$-coordinate has changed sign; $x$ stays the same.", "diagram": null },
        { "stepNumber": 2, "description": "Identify.", "workingLatex": "\\text{reflection in } y = 0", "explanation": "That is a reflection in the $x$-axis.", "diagram": null }
      ],
      "finalAnswer": "Reflection in the $x$-axis"
    }
  },
  {
    "id": "gcse.geometry.transformations.q033",
    "level": "GCSE",
    "topic": "Properties and constructions",
    "subtopic": "Transformations",
    "subtopicId": "gcse.geometry.transformations",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "value",
    "tags": ["reflection", "line"],
    "questionText": "The point $(3, 5)$ is reflected in the line $x = 4$. Find its image.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Distance to the line.", "workingLatex": "4 - 3 = 1", "explanation": "The point is $1$ unit to the left of the line.", "diagram": null },
        { "stepNumber": 2, "description": "Reflect across.", "workingLatex": "4 + 1 = 5", "explanation": "The image is $1$ unit to the right; $y$ is unchanged.", "diagram": null }
      ],
      "finalAnswer": "$(5, 5)$"
    }
  },
  {
    "id": "gcse.geometry.transformations.q034",
    "level": "GCSE",
    "topic": "Properties and constructions",
    "subtopic": "Transformations",
    "subtopicId": "gcse.geometry.transformations",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "value",
    "tags": ["reflection", "line"],
    "questionText": "The point $(2, 7)$ is reflected in the line $y = 3$. Find its image.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Distance to the line.", "workingLatex": "7 - 3 = 4", "explanation": "The point is $4$ units above the line.", "diagram": null },
        { "stepNumber": 2, "description": "Reflect across.", "workingLatex": "3 - 4 = -1", "explanation": "The image is $4$ units below; $x$ is unchanged.", "diagram": null }
      ],
      "finalAnswer": "$(2, -1)$"
    }
  },
  {
    "id": "gcse.geometry.transformations.q035",
    "level": "GCSE",
    "topic": "Properties and constructions",
    "subtopic": "Transformations",
    "subtopicId": "gcse.geometry.transformations",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "text",
    "tags": ["describe", "translation"],
    "questionText": "Triangle $P$ is mapped to triangle $Q$ by a translation. A vertex of $P$ at $(-2, 4)$ maps to $(3, 1)$. Fully describe the transformation.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Find the vector.", "workingLatex": "(3 - (-2),\\ 1 - 4) = (5, -3)", "explanation": "Image minus object.", "diagram": null },
        { "stepNumber": 2, "description": "State the transformation.", "workingLatex": "\\begin{pmatrix} 5 \\\\ -3 \\end{pmatrix}", "explanation": "A translation is fully described by its vector.", "diagram": null }
      ],
      "finalAnswer": "Translation by $\\begin{pmatrix} 5 \\\\ -3 \\end{pmatrix}$"
    }
  },
  {
    "id": "gcse.geometry.transformations.q036",
    "level": "GCSE",
    "topic": "Properties and constructions",
    "subtopic": "Transformations",
    "subtopicId": "gcse.geometry.transformations",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "value",
    "tags": ["enlargement", "area"],
    "questionText": "A shape of area $12\\text{ cm}^2$ is enlarged by scale factor $3$. Find the area of the image.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Area scale factor.", "workingLatex": "3^2 = 9", "explanation": "Area scales by the square of the length scale factor.", "diagram": null },
        { "stepNumber": 2, "description": "Scale the area.", "workingLatex": "12 \\times 9 = 108", "explanation": "Multiply by the area scale factor.", "diagram": null }
      ],
      "finalAnswer": "$108\\text{ cm}^2$"
    }
  },
  {
    "id": "gcse.geometry.transformations.q037",
    "level": "GCSE",
    "topic": "Properties and constructions",
    "subtopic": "Transformations",
    "subtopicId": "gcse.geometry.transformations",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "value",
    "tags": ["rotation", "coordinates"],
    "questionText": "The point $(-3, 4)$ is rotated $90^\\circ$ clockwise about the origin. Find its image.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Rule for 90° clockwise.", "workingLatex": "(x, y) \\to (y, -x)", "explanation": "Standard clockwise rule.", "diagram": null },
        { "stepNumber": 2, "description": "Apply.", "workingLatex": "(4, 3)", "explanation": "$(y, -x) = (4, -(-3)) = (4, 3)$.", "diagram": null }
      ],
      "finalAnswer": "$(4, 3)$"
    }
  },
  {
    "id": "gcse.geometry.transformations.q038",
    "level": "GCSE",
    "topic": "Properties and constructions",
    "subtopic": "Transformations",
    "subtopicId": "gcse.geometry.transformations",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "text",
    "tags": ["describe", "single"],
    "questionText": "Triangle $A$ has vertices $(2,1),(4,1),(2,4)$. Triangle $B$ has vertices $(-2,1),(-4,1),(-2,4)$. Describe the single transformation from $A$ to $B$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Compare coordinates.", "workingLatex": "x \\text{ negated}, y \\text{ same}", "explanation": "Each $x$-coordinate has changed sign.", "diagram": null },
        { "stepNumber": 2, "description": "Identify.", "workingLatex": "\\text{reflection in } x = 0", "explanation": "That is a reflection in the $y$-axis.", "diagram": null }
      ],
      "finalAnswer": "Reflection in the $y$-axis"
    }
  },
  {
    "id": "gcse.geometry.transformations.q039",
    "level": "GCSE",
    "topic": "Properties and constructions",
    "subtopic": "Transformations",
    "subtopicId": "gcse.geometry.transformations",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "value",
    "tags": ["enlargement", "centre"],
    "questionText": "A point $(4, 3)$ is enlarged by scale factor $2$, centre $(2, 1)$. Find its image.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Vector from centre.", "workingLatex": "(4 - 2,\\ 3 - 1) = (2, 2)", "explanation": "Distance from the centre.", "diagram": null },
        { "stepNumber": 2, "description": "Scale it.", "workingLatex": "(2 \\times 2,\\ 2 \\times 2) = (4, 4)", "explanation": "Multiply by the scale factor.", "diagram": null },
        { "stepNumber": 3, "description": "Add to the centre.", "workingLatex": "(2 + 4,\\ 1 + 4) = (6, 5)", "explanation": "Centre plus scaled vector.", "diagram": null }
      ],
      "finalAnswer": "$(6, 5)$"
    }
  },
  {
    "id": "gcse.geometry.transformations.q040",
    "level": "GCSE",
    "topic": "Properties and constructions",
    "subtopic": "Transformations",
    "subtopicId": "gcse.geometry.transformations",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "text",
    "tags": ["describe", "rotation"],
    "questionText": "The point $(5, 0)$ maps to $(0, 5)$ under a rotation about the origin. State the angle and direction.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Test the anticlockwise rule.", "workingLatex": "(x,y)\\to(-y,x): (5,0)\\to(0,5)", "explanation": "The $90^\\circ$ anticlockwise rule gives exactly $(0, 5)$.", "diagram": null }
      ],
      "finalAnswer": "$90^\\circ$ anticlockwise"
    }
  },
  {
    "id": "gcse.geometry.transformations.q041",
    "level": "GCSE",
    "topic": "Properties and constructions",
    "subtopic": "Transformations",
    "subtopicId": "gcse.geometry.transformations",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "value",
    "tags": ["translation", "combined"],
    "questionText": "A shape is translated by $\\begin{pmatrix} 3 \\\\ -2 \\end{pmatrix}$ and then by $\\begin{pmatrix} 1 \\\\ 5 \\end{pmatrix}$. Find the single equivalent translation vector.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Add the vectors.", "workingLatex": "\\begin{pmatrix} 3 + 1 \\\\ -2 + 5 \\end{pmatrix}", "explanation": "Combining translations means adding their vectors.", "diagram": null },
        { "stepNumber": 2, "description": "Simplify.", "workingLatex": "\\begin{pmatrix} 4 \\\\ 3 \\end{pmatrix}", "explanation": "Work out each component.", "diagram": null }
      ],
      "finalAnswer": "$\\begin{pmatrix} 4 \\\\ 3 \\end{pmatrix}$"
    }
  },
  {
    "id": "gcse.geometry.transformations.q042",
    "level": "GCSE",
    "topic": "Properties and constructions",
    "subtopic": "Transformations",
    "subtopicId": "gcse.geometry.transformations",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "value",
    "tags": ["reflection", "line"],
    "questionText": "The point $(-1, 2)$ is reflected in the line $x = 2$. Find its image.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Distance to the line.", "workingLatex": "2 - (-1) = 3", "explanation": "The point is $3$ units left of the line.", "diagram": null },
        { "stepNumber": 2, "description": "Reflect across.", "workingLatex": "2 + 3 = 5", "explanation": "The image is $3$ units right; $y$ unchanged.", "diagram": null }
      ],
      "finalAnswer": "$(5, 2)$"
    }
  },
  {
    "id": "gcse.geometry.transformations.q043",
    "level": "GCSE",
    "topic": "Properties and constructions",
    "subtopic": "Transformations",
    "subtopicId": "gcse.geometry.transformations",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "text",
    "tags": ["invariance", "reflection"],
    "questionText": "A point lies on the mirror line of a reflection. Where does it map to?",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Distance to the line.", "workingLatex": "0", "explanation": "A point on the mirror line has zero distance from it.", "diagram": null },
        { "stepNumber": 2, "description": "Conclude.", "workingLatex": "\\text{maps to itself}", "explanation": "Points on the mirror line are invariant.", "diagram": null }
      ],
      "finalAnswer": "It maps to itself (it is invariant)"
    }
  },
  {
    "id": "gcse.geometry.transformations.q044",
    "level": "GCSE",
    "topic": "Properties and constructions",
    "subtopic": "Transformations",
    "subtopicId": "gcse.geometry.transformations",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "value",
    "tags": ["enlargement", "area"],
    "questionText": "A rectangle has area $20\\text{ cm}^2$. After enlargement its area is $180\\text{ cm}^2$. Find the length scale factor.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Area scale factor.", "workingLatex": "180 \\div 20 = 9", "explanation": "Divide the areas.", "diagram": null },
        { "stepNumber": 2, "description": "Square root.", "workingLatex": "\\sqrt{9} = 3", "explanation": "Length scale factor is the square root of the area scale factor.", "diagram": null }
      ],
      "finalAnswer": "$3$"
    }
  },
  {
    "id": "gcse.geometry.transformations.q045",
    "level": "GCSE",
    "topic": "Properties and constructions",
    "subtopic": "Transformations",
    "subtopicId": "gcse.geometry.transformations",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "value",
    "tags": ["rotation", "coordinates"],
    "questionText": "The point $(1, -4)$ is rotated $180^\\circ$ about the origin. Find its image.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Rule for 180°.", "workingLatex": "(x, y) \\to (-x, -y)", "explanation": "Negate both coordinates.", "diagram": null },
        { "stepNumber": 2, "description": "Apply.", "workingLatex": "(-1, 4)", "explanation": "Negate each.", "diagram": null }
      ],
      "finalAnswer": "$(-1, 4)$"
    }
  },
  {
    "id": "gcse.geometry.transformations.q046",
    "level": "GCSE",
    "topic": "Properties and constructions",
    "subtopic": "Transformations",
    "subtopicId": "gcse.geometry.transformations",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "value",
    "tags": ["reflection", "line"],
    "questionText": "The point $(6, 3)$ is reflected in the line $y = x$. Then the image is reflected in the $x$-axis. Find the final point.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Reflect in y = x.", "workingLatex": "(6, 3) \\to (3, 6)", "explanation": "Swap the coordinates.", "diagram": null },
        { "stepNumber": 2, "description": "Reflect in the x-axis.", "workingLatex": "(3, 6) \\to (3, -6)", "explanation": "Negate the $y$-coordinate.", "diagram": null }
      ],
      "finalAnswer": "$(3, -6)$"
    }
  },
  {
    "id": "gcse.geometry.transformations.q047",
    "level": "GCSE",
    "topic": "Properties and constructions",
    "subtopic": "Transformations",
    "subtopicId": "gcse.geometry.transformations",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "text",
    "tags": ["describe", "single"],
    "questionText": "Triangle $A$ maps to triangle $B$ by an enlargement. $A$ has a side of $2\\text{ cm}$ and $B$ has the matching side $6\\text{ cm}$, with the shape three times as far from a fixed point. State the scale factor.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Ratio of sides.", "workingLatex": "6 \\div 2 = 3", "explanation": "Matching sides are in ratio $3$.", "diagram": null }
      ],
      "finalAnswer": "Scale factor $3$"
    }
  },
  {
    "id": "gcse.geometry.transformations.q048",
    "level": "GCSE",
    "topic": "Properties and constructions",
    "subtopic": "Transformations",
    "subtopicId": "gcse.geometry.transformations",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "value",
    "tags": ["enlargement", "centre", "fractional"],
    "questionText": "A point $(10, 6)$ is enlarged by scale factor $\\tfrac{1}{2}$, centre $(2, 2)$. Find its image.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Vector from centre.", "workingLatex": "(10 - 2,\\ 6 - 2) = (8, 4)", "explanation": "Distance from the centre.", "diagram": null },
        { "stepNumber": 2, "description": "Scale it.", "workingLatex": "(8 \\times \\tfrac{1}{2},\\ 4 \\times \\tfrac{1}{2}) = (4, 2)", "explanation": "Halve the vector.", "diagram": null },
        { "stepNumber": 3, "description": "Add to the centre.", "workingLatex": "(2 + 4,\\ 2 + 2) = (6, 4)", "explanation": "Centre plus scaled vector.", "diagram": null }
      ],
      "finalAnswer": "$(6, 4)$"
    }
  },
  {
    "id": "gcse.geometry.transformations.q049",
    "level": "GCSE",
    "topic": "Properties and constructions",
    "subtopic": "Transformations",
    "subtopicId": "gcse.geometry.transformations",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "text",
    "tags": ["describe", "single"],
    "questionText": "A shape is rotated $90^\\circ$ clockwise, then rotated $90^\\circ$ clockwise again about the same centre. What single transformation is equivalent?",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Add the turns.", "workingLatex": "90 + 90 = 180", "explanation": "Two quarter turns make a half turn.", "diagram": null }
      ],
      "finalAnswer": "A $180^\\circ$ rotation about the same centre"
    }
  },
  {
    "id": "gcse.geometry.transformations.q050",
    "level": "GCSE",
    "topic": "Properties and constructions",
    "subtopic": "Transformations",
    "subtopicId": "gcse.geometry.transformations",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "value",
    "tags": ["translation", "reverse"],
    "questionText": "A translation by $\\begin{pmatrix} 4 \\\\ -1 \\end{pmatrix}$ maps $A$ to $B$. Write the vector that maps $B$ back to $A$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Reverse the vector.", "workingLatex": "\\begin{pmatrix} -4 \\\\ 1 \\end{pmatrix}", "explanation": "The inverse translation negates each component.", "diagram": null }
      ],
      "finalAnswer": "$\\begin{pmatrix} -4 \\\\ 1 \\end{pmatrix}$"
    }
  },
  {
    "id": "gcse.geometry.transformations.q051",
    "level": "GCSE",
    "topic": "Properties and constructions",
    "subtopic": "Transformations",
    "subtopicId": "gcse.geometry.transformations",
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "value",
    "tags": ["enlargement", "negative"],
    "questionText": "A point $(4, 2)$ is enlarged by scale factor $-1$, centre the origin. Find its image.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Multiply by -1.", "workingLatex": "(4 \\times -1,\\ 2 \\times -1)", "explanation": "A negative scale factor sends points to the opposite side of the centre.", "diagram": null },
        { "stepNumber": 2, "description": "Simplify.", "workingLatex": "(-4, -2)", "explanation": "Work out each coordinate.", "diagram": null }
      ],
      "finalAnswer": "$(-4, -2)$"
    }
  },
  {
    "id": "gcse.geometry.transformations.q052",
    "level": "GCSE",
    "topic": "Properties and constructions",
    "subtopic": "Transformations",
    "subtopicId": "gcse.geometry.transformations",
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "value",
    "tags": ["enlargement", "negative", "centre"],
    "questionText": "A point $(5, 4)$ is enlarged by scale factor $-2$, centre $(1, 1)$. Find its image.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Vector from centre.", "workingLatex": "(5 - 1,\\ 4 - 1) = (4, 3)", "explanation": "Distance from the centre.", "diagram": null },
        { "stepNumber": 2, "description": "Multiply by -2.", "workingLatex": "(4 \\times -2,\\ 3 \\times -2) = (-8, -6)", "explanation": "Negative scale factor flips direction and doubles length.", "diagram": null },
        { "stepNumber": 3, "description": "Add to the centre.", "workingLatex": "(1 - 8,\\ 1 - 6) = (-7, -5)", "explanation": "Centre plus scaled vector.", "diagram": null }
      ],
      "finalAnswer": "$(-7, -5)$"
    }
  },
  {
    "id": "gcse.geometry.transformations.q053",
    "level": "GCSE",
    "topic": "Properties and constructions",
    "subtopic": "Transformations",
    "subtopicId": "gcse.geometry.transformations",
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "text",
    "tags": ["describe", "combined"],
    "questionText": "A reflection in the $x$-axis followed by a reflection in the $y$-axis is equivalent to which single transformation?",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Track a general point.", "workingLatex": "(x,y) \\to (x,-y) \\to (-x,-y)", "explanation": "Apply the two reflections in turn.", "diagram": null },
        { "stepNumber": 2, "description": "Recognise the rule.", "workingLatex": "(x,y)\\to(-x,-y)", "explanation": "Both coordinates are negated, which is a $180^\\circ$ rotation about the origin.", "diagram": null }
      ],
      "finalAnswer": "A $180^\\circ$ rotation about the origin"
    }
  },
  {
    "id": "gcse.geometry.transformations.q054",
    "level": "GCSE",
    "topic": "Properties and constructions",
    "subtopic": "Transformations",
    "subtopicId": "gcse.geometry.transformations",
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "value",
    "tags": ["enlargement", "find centre"],
    "questionText": "An enlargement of scale factor $2$ maps $(3, 4)$ to $(5, 6)$. Find the centre of enlargement.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Set up with centre (a, b).", "workingLatex": "5 - a = 2(3 - a)", "explanation": "The image vector from the centre is twice the object vector.", "diagram": null },
        { "stepNumber": 2, "description": "Solve for a.", "workingLatex": "5 - a = 6 - 2a \\Rightarrow a = 1", "explanation": "Rearrange the $x$-equation.", "diagram": null },
        { "stepNumber": 3, "description": "Solve for b.", "workingLatex": "6 - b = 2(4 - b) \\Rightarrow b = 2", "explanation": "Do the same with the $y$-equation.", "diagram": null }
      ],
      "finalAnswer": "Centre $(1, 2)$"
    }
  },
  {
    "id": "gcse.geometry.transformations.q055",
    "level": "GCSE",
    "topic": "Properties and constructions",
    "subtopic": "Transformations",
    "subtopicId": "gcse.geometry.transformations",
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "text",
    "tags": ["describe", "single"],
    "questionText": "Triangle $A$ has vertices $(1,1),(3,1),(1,2)$. Triangle $B$ has vertices $(-1,-1),(-3,-1),(-1,-2)$. Describe the single transformation from $A$ to $B$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Compare coordinates.", "workingLatex": "(x,y) \\to (-x,-y)", "explanation": "Both coordinates are negated for each vertex.", "diagram": null },
        { "stepNumber": 2, "description": "Identify.", "workingLatex": "180^\\circ \\text{ about origin}", "explanation": "That rule is a half turn about the origin.", "diagram": null }
      ],
      "finalAnswer": "Rotation $180^\\circ$ about the origin"
    }
  },
  {
    "id": "gcse.geometry.transformations.q056",
    "level": "GCSE",
    "topic": "Properties and constructions",
    "subtopic": "Transformations",
    "subtopicId": "gcse.geometry.transformations",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "value",
    "tags": ["enlargement", "find centre"],
    "questionText": "An enlargement of scale factor $3$ maps $(2, 1)$ to $(0, -3)$. Find the centre of enlargement.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "x-equation.", "workingLatex": "0 - a = 3(2 - a)", "explanation": "Image vector from centre is $3$ times the object vector.", "diagram": null },
        { "stepNumber": 2, "description": "Solve for a.", "workingLatex": "-a = 6 - 3a \\Rightarrow 2a = 6 \\Rightarrow a = 3", "explanation": "Rearrange.", "diagram": null },
        { "stepNumber": 3, "description": "y-equation.", "workingLatex": "-3 - b = 3(1 - b)", "explanation": "Same idea for $y$.", "diagram": null },
        { "stepNumber": 4, "description": "Solve for b.", "workingLatex": "-3 - b = 3 - 3b \\Rightarrow 2b = 6 \\Rightarrow b = 3", "explanation": "Rearrange.", "diagram": null }
      ],
      "finalAnswer": "Centre $(3, 3)$"
    }
  },
  {
    "id": "gcse.geometry.transformations.q057",
    "level": "GCSE",
    "topic": "Properties and constructions",
    "subtopic": "Transformations",
    "subtopicId": "gcse.geometry.transformations",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "text",
    "tags": ["describe", "combined"],
    "questionText": "A shape is reflected in $y = x$, then reflected in the $x$-axis. Describe the single equivalent transformation.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Reflect in y = x.", "workingLatex": "(x,y) \\to (y, x)", "explanation": "Swap the coordinates.", "diagram": null },
        { "stepNumber": 2, "description": "Reflect in the x-axis.", "workingLatex": "(y, x) \\to (y, -x)", "explanation": "Negate the second coordinate.", "diagram": null },
        { "stepNumber": 3, "description": "Recognise the rule.", "workingLatex": "(x,y) \\to (y, -x)", "explanation": "This is the rule for a $90^\\circ$ clockwise rotation about the origin.", "diagram": null }
      ],
      "finalAnswer": "Rotation $90^\\circ$ clockwise about the origin"
    }
  },
  {
    "id": "gcse.geometry.transformations.q058",
    "level": "GCSE",
    "topic": "Properties and constructions",
    "subtopic": "Transformations",
    "subtopicId": "gcse.geometry.transformations",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "value",
    "tags": ["rotation", "about point"],
    "questionText": "The point $(5, 3)$ is rotated $90^\\circ$ anticlockwise about the point $(1, 1)$. Find its image.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Vector from centre.", "workingLatex": "(5 - 1,\\ 3 - 1) = (4, 2)", "explanation": "Shift so the centre acts like the origin.", "diagram": null },
        { "stepNumber": 2, "description": "Rotate 90° anticlockwise.", "workingLatex": "(x,y)\\to(-y,x): (4,2)\\to(-2,4)", "explanation": "Apply the rotation rule to the shifted vector.", "diagram": null },
        { "stepNumber": 3, "description": "Shift back.", "workingLatex": "(1 - 2,\\ 1 + 4) = (-1, 5)", "explanation": "Add the centre back on.", "diagram": null }
      ],
      "finalAnswer": "$(-1, 5)$"
    }
  },
  {
    "id": "gcse.geometry.transformations.q059",
    "level": "GCSE",
    "topic": "Properties and constructions",
    "subtopic": "Transformations",
    "subtopicId": "gcse.geometry.transformations",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "value",
    "tags": ["rotation", "about point"],
    "questionText": "The point $(4, 6)$ is rotated $90^\\circ$ clockwise about the point $(2, 2)$. Find its image.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Vector from centre.", "workingLatex": "(4 - 2,\\ 6 - 2) = (2, 4)", "explanation": "Shift so the centre acts like the origin.", "diagram": null },
        { "stepNumber": 2, "description": "Rotate 90° clockwise.", "workingLatex": "(x,y)\\to(y,-x): (2,4)\\to(4,-2)", "explanation": "Apply the clockwise rule.", "diagram": null },
        { "stepNumber": 3, "description": "Shift back.", "workingLatex": "(2 + 4,\\ 2 - 2) = (6, 0)", "explanation": "Add the centre back on.", "diagram": null }
      ],
      "finalAnswer": "$(6, 0)$"
    }
  },
  {
    "id": "gcse.geometry.transformations.q060",
    "level": "GCSE",
    "topic": "Properties and constructions",
    "subtopic": "Transformations",
    "subtopicId": "gcse.geometry.transformations",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "value",
    "tags": ["enlargement", "negative", "length"],
    "questionText": "A triangle with area $9\\text{ cm}^2$ is enlarged by scale factor $-2$. Find the area of the image.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Area scale factor.", "workingLatex": "(-2)^2 = 4", "explanation": "Area scales by the square of the scale factor; the sign disappears.", "diagram": null },
        { "stepNumber": 2, "description": "Scale the area.", "workingLatex": "9 \\times 4 = 36", "explanation": "Multiply by the area scale factor.", "diagram": null }
      ],
      "finalAnswer": "$36\\text{ cm}^2$"
    }
  },
  {
    "id": "gcse.geometry.transformations.q061",
    "level": "GCSE",
    "topic": "Properties and constructions",
    "subtopic": "Transformations",
    "subtopicId": "gcse.geometry.transformations",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "text",
    "tags": ["describe", "combined"],
    "questionText": "A translation by $\\begin{pmatrix} 2 \\\\ 0 \\end{pmatrix}$ is followed by a translation by $\\begin{pmatrix} -2 \\\\ 0 \\end{pmatrix}$. Describe the overall effect and explain.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Add the vectors.", "workingLatex": "\\begin{pmatrix} 2 - 2 \\\\ 0 + 0 \\end{pmatrix} = \\begin{pmatrix} 0 \\\\ 0 \\end{pmatrix}", "explanation": "The two vectors cancel.", "diagram": null },
        { "stepNumber": 2, "description": "Interpret.", "workingLatex": "\\text{no movement}", "explanation": "A zero vector leaves every point where it started.", "diagram": null }
      ],
      "finalAnswer": "The shape returns to its start (identity — no change)"
    }
  },
  {
    "id": "gcse.geometry.transformations.q062",
    "level": "GCSE",
    "topic": "Properties and constructions",
    "subtopic": "Transformations",
    "subtopicId": "gcse.geometry.transformations",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "value",
    "tags": ["enlargement", "find scale factor"],
    "questionText": "An enlargement centre the origin maps $(2, 3)$ to $(6, 9)$. Find the scale factor.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Compare a coordinate.", "workingLatex": "6 \\div 2 = 3", "explanation": "The image is $3$ times as far from the centre.", "diagram": null },
        { "stepNumber": 2, "description": "Check the other.", "workingLatex": "9 \\div 3 = 3", "explanation": "Both coordinates scale by $3$, confirming the factor.", "diagram": null }
      ],
      "finalAnswer": "Scale factor $3$"
    }
  },
  {
    "id": "gcse.geometry.transformations.q063",
    "level": "GCSE",
    "topic": "Properties and constructions",
    "subtopic": "Transformations",
    "subtopicId": "gcse.geometry.transformations",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "text",
    "tags": ["describe", "single"],
    "questionText": "Triangle $A$ has vertices $(2,2),(4,2),(2,3)$. Triangle $B$ has vertices $(2,-2),(4,-2),(2,-3)$. Describe fully the single transformation from $A$ to $B$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Compare coordinates.", "workingLatex": "x \\text{ same}, y \\text{ negated}", "explanation": "Only the $y$-coordinates change sign.", "diagram": null },
        { "stepNumber": 2, "description": "Identify.", "workingLatex": "\\text{reflection in } y = 0", "explanation": "That is a reflection in the $x$-axis.", "diagram": null }
      ],
      "finalAnswer": "Reflection in the $x$-axis ($y = 0$)"
    }
  },
  {
    "id": "gcse.geometry.transformations.q064",
    "level": "GCSE",
    "topic": "Properties and constructions",
    "subtopic": "Transformations",
    "subtopicId": "gcse.geometry.transformations",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "value",
    "tags": ["enlargement", "negative", "find centre"],
    "questionText": "An enlargement of scale factor $-1$ maps $(4, 5)$ to $(0, 1)$. Find the centre of enlargement.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "For scale factor -1 the centre is the midpoint.", "workingLatex": "\\left(\\dfrac{4 + 0}{2},\\ \\dfrac{5 + 1}{2}\\right)", "explanation": "A scale factor of $-1$ is a $180^\\circ$ rotation, so the centre is the midpoint of object and image.", "diagram": null },
        { "stepNumber": 2, "description": "Simplify.", "workingLatex": "(2, 3)", "explanation": "Work out the midpoint.", "diagram": null }
      ],
      "finalAnswer": "Centre $(2, 3)$"
    }
  },
  {
    "id": "gcse.geometry.transformations.q065",
    "level": "GCSE",
    "topic": "Properties and constructions",
    "subtopic": "Transformations",
    "subtopicId": "gcse.geometry.transformations",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "value",
    "tags": ["rotation", "about point"],
    "questionText": "The point $(3, 7)$ is rotated $180^\\circ$ about the point $(2, 3)$. Find its image.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Vector from centre.", "workingLatex": "(3 - 2,\\ 7 - 3) = (1, 4)", "explanation": "Shift so the centre acts like the origin.", "diagram": null },
        { "stepNumber": 2, "description": "Rotate 180°.", "workingLatex": "(1, 4) \\to (-1, -4)", "explanation": "Negate both components.", "diagram": null },
        { "stepNumber": 3, "description": "Shift back.", "workingLatex": "(2 - 1,\\ 3 - 4) = (1, -1)", "explanation": "Add the centre back on.", "diagram": null }
      ],
      "finalAnswer": "$(1, -1)$"
    }
  },
  {
    "id": "gcse.geometry.transformations.q066",
    "level": "GCSE",
    "topic": "Properties and constructions",
    "subtopic": "Transformations",
    "subtopicId": "gcse.geometry.transformations",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "text",
    "tags": ["describe", "combined"],
    "questionText": "A shape is reflected in the $y$-axis, then translated by $\\begin{pmatrix} 0 \\\\ 4 \\end{pmatrix}$. A vertex at $(3, 1)$ ends where? Give the final coordinates.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Reflect in the y-axis.", "workingLatex": "(3, 1) \\to (-3, 1)", "explanation": "Negate the $x$-coordinate.", "diagram": null },
        { "stepNumber": 2, "description": "Translate.", "workingLatex": "(-3, 1 + 4) = (-3, 5)", "explanation": "Add the vector.", "diagram": null }
      ],
      "finalAnswer": "$(-3, 5)$"
    }
  },
  {
    "id": "gcse.geometry.transformations.q067",
    "level": "GCSE",
    "topic": "Properties and constructions",
    "subtopic": "Transformations",
    "subtopicId": "gcse.geometry.transformations",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "value",
    "tags": ["enlargement", "find scale factor", "negative"],
    "questionText": "An enlargement centre $(1, 1)$ maps $(3, 5)$ to $(-3, -7)$. Find the scale factor.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Object vector from centre.", "workingLatex": "(3 - 1,\\ 5 - 1) = (2, 4)", "explanation": "How far the object is from the centre.", "diagram": null },
        { "stepNumber": 2, "description": "Image vector from centre.", "workingLatex": "(-3 - 1,\\ -7 - 1) = (-4, -8)", "explanation": "How far the image is from the centre.", "diagram": null },
        { "stepNumber": 3, "description": "Divide.", "workingLatex": "\\dfrac{-4}{2} = -2", "explanation": "The image vector is $-2$ times the object vector.", "diagram": null }
      ],
      "finalAnswer": "Scale factor $-2$"
    }
  },
  {
    "id": "gcse.geometry.transformations.q068",
    "level": "GCSE",
    "topic": "Properties and constructions",
    "subtopic": "Transformations",
    "subtopicId": "gcse.geometry.transformations",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "text",
    "tags": ["describe", "combined", "single"],
    "questionText": "A reflection in the $y$-axis followed by a reflection in the line $x = 3$ is equivalent to a single translation. Find its vector.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Reflect a general point in the y-axis.", "workingLatex": "(x, y) \\to (-x, y)", "explanation": "Negate $x$.", "diagram": null },
        { "stepNumber": 2, "description": "Reflect in x = 3.", "workingLatex": "(-x, y) \\to (6 + x, y)", "explanation": "Distance to the line is $3 - (-x) = 3 + x$, so the image is $3 + (3 + x) = 6 + x$.", "diagram": null },
        { "stepNumber": 3, "description": "Compare with the start.", "workingLatex": "(6 + x) - x = 6", "explanation": "Every point moves $6$ right, with $y$ unchanged.", "diagram": null }
      ],
      "finalAnswer": "Translation by $\\begin{pmatrix} 6 \\\\ 0 \\end{pmatrix}$"
    }
  },
  {
    "id": "gcse.geometry.transformations.q069",
    "level": "GCSE",
    "topic": "Properties and constructions",
    "subtopic": "Transformations",
    "subtopicId": "gcse.geometry.transformations",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "text",
    "tags": ["invariance"],
    "questionText": "A rotation of $180^\\circ$ is applied about the point $(2, 3)$. Which single point stays exactly where it is (is invariant)?",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall invariance under rotation.", "workingLatex": "\\text{only the centre}", "explanation": "Under any rotation, the only invariant point is the centre of rotation.", "diagram": null }
      ],
      "finalAnswer": "The centre $(2, 3)$"
    }
  },
  {
    "id": "gcse.geometry.transformations.q070",
    "level": "GCSE",
    "topic": "Properties and constructions",
    "subtopic": "Transformations",
    "subtopicId": "gcse.geometry.transformations",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "value",
    "tags": ["combined", "multi-step"],
    "questionText": "The point $(2, 1)$ is enlarged by scale factor $2$ centre the origin, then rotated $90^\\circ$ anticlockwise about the origin. Find the final image.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Enlarge.", "workingLatex": "(2 \\times 2,\\ 1 \\times 2) = (4, 2)", "explanation": "Multiply each coordinate by $2$.", "diagram": null },
        { "stepNumber": 2, "description": "Rotate 90° anticlockwise.", "workingLatex": "(x,y)\\to(-y,x): (4,2)\\to(-2,4)", "explanation": "Apply the rotation rule.", "diagram": null }
      ],
      "finalAnswer": "$(-2, 4)$"
    }
  }
];
