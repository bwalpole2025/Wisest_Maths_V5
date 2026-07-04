import { Question } from "@/lib/types";

export const questions: Question[] = [
  {
    "id": "al.y1.pure.straight-lines.q001",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Straight lines",
    "subtopicId": "al.y1.pure.straight-lines",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "value",
    "tags": [
      "straight-lines",
      "gradient"
    ],
    "questionText": "The points $A(1, 2)$ and $B(4, 11)$ lie on a straight line. Find the gradient of the line through $A$ and $B$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the gradient formula",
          "workingLatex": "m = \\frac{y_2 - y_1}{x_2 - x_1}",
          "explanation": "The gradient measures how much $y$ changes for each unit increase in $x$, so we compare the change in $y$ with the change in $x$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Label the coordinates",
          "workingLatex": "(x_1, y_1) = (1, 2), \\quad (x_2, y_2) = (4, 11)",
          "explanation": "Naming each coordinate keeps the substitution tidy and stops us mixing up the values.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute into the formula",
          "workingLatex": "m = \\frac{11 - 2}{4 - 1}",
          "explanation": "We put the $y$-values on top and the matching $x$-values underneath, keeping the same order in both.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find the change in $y$",
          "workingLatex": "11 - 2 = 9",
          "explanation": "This is the vertical rise as we move from $A$ to $B$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find the change in $x$",
          "workingLatex": "4 - 1 = 3",
          "explanation": "This is the horizontal run over the same move from $A$ to $B$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Simplify the fraction",
          "workingLatex": "m = \\frac{9}{3} = 3",
          "explanation": "Dividing the rise by the run gives a single number describing the steepness of the line.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check by reversing the points",
          "workingLatex": "m = \\frac{2 - 11}{1 - 4} = \\frac{-9}{-3} = 3",
          "explanation": "Swapping which point comes first should give the same gradient, which confirms our answer.",
          "diagram": null
        }
      ],
      "finalAnswer": "The gradient is $m = 3$."
    }
  },
  {
    "id": "al.y1.pure.straight-lines.q002",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Straight lines",
    "subtopicId": "al.y1.pure.straight-lines",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "value",
    "tags": [
      "straight-lines",
      "gradient"
    ],
    "questionText": "Find the gradient of the straight line passing through the points $P(2, 1)$ and $Q(6, 4)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the gradient formula",
          "workingLatex": "m = \\frac{y_2 - y_1}{x_2 - x_1}",
          "explanation": "The gradient is the ratio of vertical change to horizontal change between any two points on the line.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Label the coordinates",
          "workingLatex": "(x_1, y_1) = (2, 1), \\quad (x_2, y_2) = (6, 4)",
          "explanation": "Assigning the labels first makes the substitution clear and reduces the chance of an error.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute into the formula",
          "workingLatex": "m = \\frac{4 - 1}{6 - 2}",
          "explanation": "The differences in $y$ and $x$ are taken in the same order, from $P$ to $Q$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find the change in $y$",
          "workingLatex": "4 - 1 = 3",
          "explanation": "This is how far the line rises vertically between the two points.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find the change in $x$",
          "workingLatex": "6 - 2 = 4",
          "explanation": "This is how far the line moves horizontally over the same stretch.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Write the gradient as a fraction",
          "workingLatex": "m = \\frac{3}{4}",
          "explanation": "The numbers $3$ and $4$ share no common factor, so the fraction is already in its simplest form.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Interpret the result",
          "workingLatex": "m = \\frac{3}{4} = 0.75",
          "explanation": "A gradient of $\\frac{3}{4}$ means the line goes up $3$ units for every $4$ units it moves to the right.",
          "diagram": null
        }
      ],
      "finalAnswer": "The gradient is $m = \\frac{3}{4}$."
    }
  },
  {
    "id": "al.y1.pure.straight-lines.q003",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Straight lines",
    "subtopicId": "al.y1.pure.straight-lines",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "value",
    "tags": [
      "straight-lines",
      "gradient",
      "negative-gradient"
    ],
    "questionText": "The line $L$ passes through the points $A(-2, 5)$ and $B(3, -5)$. Work out the gradient of $L$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the gradient formula",
          "workingLatex": "m = \\frac{y_2 - y_1}{x_2 - x_1}",
          "explanation": "We compare the change in $y$ with the change in $x$ to measure how steep the line is.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Label the coordinates",
          "workingLatex": "(x_1, y_1) = (-2, 5), \\quad (x_2, y_2) = (3, -5)",
          "explanation": "Writing the labels carefully is especially helpful when negative numbers are involved.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute into the formula",
          "workingLatex": "m = \\frac{-5 - 5}{3 - (-2)}",
          "explanation": "Subtracting a negative $x$-value becomes an addition, so we keep the brackets to stay accurate.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find the change in $y$",
          "workingLatex": "-5 - 5 = -10",
          "explanation": "The $y$-coordinate drops, so the vertical change is negative.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find the change in $x$",
          "workingLatex": "3 - (-2) = 3 + 2 = 5",
          "explanation": "Taking away $-2$ is the same as adding $2$, giving a horizontal change of $5$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Simplify the fraction",
          "workingLatex": "m = \\frac{-10}{5} = -2",
          "explanation": "A negative gradient tells us the line slopes downwards from left to right.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check by reversing the points",
          "workingLatex": "m = \\frac{5 - (-5)}{-2 - 3} = \\frac{10}{-5} = -2",
          "explanation": "Reversing the order gives the same result, confirming the gradient is correct.",
          "diagram": null
        }
      ],
      "finalAnswer": "The gradient is $m = -2$."
    }
  },
  {
    "id": "al.y1.pure.straight-lines.q004",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Straight lines",
    "subtopicId": "al.y1.pure.straight-lines",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "coordinates",
    "tags": [
      "straight-lines",
      "midpoint"
    ],
    "questionText": "Find the coordinates of the midpoint $M$ of the line segment joining $A(2, 4)$ and $B(6, 10)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the midpoint formula",
          "workingLatex": "M = \\left( \\frac{x_1 + x_2}{2}, \\frac{y_1 + y_2}{2} \\right)",
          "explanation": "The midpoint is exactly halfway between the two points, so we average the $x$-coordinates and average the $y$-coordinates.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Label the coordinates",
          "workingLatex": "(x_1, y_1) = (2, 4), \\quad (x_2, y_2) = (6, 10)",
          "explanation": "Labelling the values keeps the two averages organised and easy to follow.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Average the $x$-coordinates",
          "workingLatex": "\\frac{2 + 6}{2} = \\frac{8}{2} = 4",
          "explanation": "The midpoint's $x$-coordinate sits exactly between the two given $x$-values.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Average the $y$-coordinates",
          "workingLatex": "\\frac{4 + 10}{2} = \\frac{14}{2} = 7",
          "explanation": "In the same way, the midpoint's $y$-coordinate is the average of the two $y$-values.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Write the midpoint",
          "workingLatex": "M = (4, 7)",
          "explanation": "Combining the two averaged values gives the coordinates of the midpoint.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check the result",
          "workingLatex": "2 < 4 < 6 \\quad \\text{and} \\quad 4 < 7 < 10",
          "explanation": "Each coordinate of $M$ lies between the matching coordinates of $A$ and $B$, which is exactly what we expect for a point in the middle.",
          "diagram": null
        }
      ],
      "finalAnswer": "The midpoint is $M = (4, 7)$."
    }
  },
  {
    "id": "al.y1.pure.straight-lines.q005",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Straight lines",
    "subtopicId": "al.y1.pure.straight-lines",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "coordinates",
    "tags": [
      "straight-lines",
      "midpoint"
    ],
    "questionText": "The points $C(-4, 3)$ and $D(2, -7)$ are joined by a straight line segment. Find the coordinates of the midpoint of $CD$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the midpoint formula",
          "workingLatex": "M = \\left( \\frac{x_1 + x_2}{2}, \\frac{y_1 + y_2}{2} \\right)",
          "explanation": "The midpoint is found by averaging the two $x$-coordinates and the two $y$-coordinates.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Label the coordinates",
          "workingLatex": "(x_1, y_1) = (-4, 3), \\quad (x_2, y_2) = (2, -7)",
          "explanation": "Careful labelling is important here because both points include negative values.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Average the $x$-coordinates",
          "workingLatex": "\\frac{-4 + 2}{2} = \\frac{-2}{2} = -1",
          "explanation": "Adding $-4$ and $2$ gives $-2$, and halving it places the midpoint's $x$-coordinate to the left of the origin.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Average the $y$-coordinates",
          "workingLatex": "\\frac{3 + (-7)}{2} = \\frac{-4}{2} = -2",
          "explanation": "Adding $3$ and $-7$ gives $-4$, so the midpoint's $y$-coordinate is below the $x$-axis.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Write the midpoint",
          "workingLatex": "M = (-1, -2)",
          "explanation": "Bringing the two averages together gives the coordinates of the midpoint.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check the result",
          "workingLatex": "-4 < -1 < 2 \\quad \\text{and} \\quad -7 < -2 < 3",
          "explanation": "Both coordinates of $M$ fall between the corresponding coordinates of $C$ and $D$, confirming it lies in the middle.",
          "diagram": null
        }
      ],
      "finalAnswer": "The midpoint of $CD$ is $(-1, -2)$."
    }
  },
  {
    "id": "al.y1.pure.straight-lines.q006",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Straight lines",
    "subtopicId": "al.y1.pure.straight-lines",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "coordinates",
    "tags": [
      "straight-lines",
      "midpoint"
    ],
    "questionText": "Find the coordinates of the midpoint of the line segment joining $A(1, 2)$ and $B(4, 5)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the midpoint formula",
          "workingLatex": "M = \\left( \\frac{x_1 + x_2}{2}, \\frac{y_1 + y_2}{2} \\right)",
          "explanation": "We average the two $x$-values and the two $y$-values to find the point exactly halfway along the segment.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Label the coordinates",
          "workingLatex": "(x_1, y_1) = (1, 2), \\quad (x_2, y_2) = (4, 5)",
          "explanation": "Setting out the labels makes each average straightforward to compute.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Average the $x$-coordinates",
          "workingLatex": "\\frac{1 + 4}{2} = \\frac{5}{2}",
          "explanation": "The sum $1 + 4 = 5$ is odd, so halving it gives a fraction rather than a whole number.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Average the $y$-coordinates",
          "workingLatex": "\\frac{2 + 5}{2} = \\frac{7}{2}",
          "explanation": "Again the sum $2 + 5 = 7$ is odd, so the $y$-coordinate of the midpoint is also a half.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Write the midpoint",
          "workingLatex": "M = \\left( \\frac{5}{2}, \\frac{7}{2} \\right)",
          "explanation": "It is perfectly normal for a midpoint to have fractional coordinates; it simply lands between grid lines.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Give the decimal form",
          "workingLatex": "M = (2.5, 3.5)",
          "explanation": "Writing the coordinates as decimals can make it easier to picture where the point sits on a graph.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check the result",
          "workingLatex": "1 < 2.5 < 4 \\quad \\text{and} \\quad 2 < 3.5 < 5",
          "explanation": "Each coordinate lies neatly between those of $A$ and $B$, as expected for the midpoint.",
          "diagram": null
        }
      ],
      "finalAnswer": "The midpoint is $M = \\left( \\frac{5}{2}, \\frac{7}{2} \\right) = (2.5, 3.5)$."
    }
  },
  {
    "id": "al.y1.pure.straight-lines.q007",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Straight lines",
    "subtopicId": "al.y1.pure.straight-lines",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "value",
    "tags": [
      "straight-lines",
      "distance"
    ],
    "questionText": "Find the distance between the points $A(1, 2)$ and $B(4, 6)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the distance formula",
          "workingLatex": "d = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}",
          "explanation": "The distance formula comes from Pythagoras' theorem applied to the horizontal and vertical gaps between the points.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Label the coordinates",
          "workingLatex": "(x_1, y_1) = (1, 2), \\quad (x_2, y_2) = (4, 6)",
          "explanation": "Labelling the points keeps the two differences organised before we square them.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find the horizontal difference",
          "workingLatex": "x_2 - x_1 = 4 - 1 = 3",
          "explanation": "This is the length of the horizontal side of the right-angled triangle joining the points.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find the vertical difference",
          "workingLatex": "y_2 - y_1 = 6 - 2 = 4",
          "explanation": "This is the length of the vertical side of the same triangle.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Square and add the differences",
          "workingLatex": "3^2 + 4^2 = 9 + 16 = 25",
          "explanation": "Squaring each side and adding them gives the square of the distance, following Pythagoras' theorem.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Take the square root",
          "workingLatex": "d = \\sqrt{25} = 5",
          "explanation": "The square root undoes the squaring to give the actual straight-line distance.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Confirm the result",
          "workingLatex": "3 \\text{-} 4 \\text{-} 5 \\text{ triangle}",
          "explanation": "The sides $3$ and $4$ form a familiar right-angled triangle whose hypotenuse is $5$, which matches our answer.",
          "diagram": null
        }
      ],
      "finalAnswer": "The distance is $d = 5$."
    }
  },
  {
    "id": "al.y1.pure.straight-lines.q008",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Straight lines",
    "subtopicId": "al.y1.pure.straight-lines",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "value",
    "tags": [
      "straight-lines",
      "distance",
      "surds"
    ],
    "questionText": "Find the exact distance between the points $P(1, 1)$ and $Q(3, 5)$, giving your answer as a simplified surd.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the distance formula",
          "workingLatex": "d = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}",
          "explanation": "The distance formula is Pythagoras' theorem written in terms of coordinates.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Label the coordinates",
          "workingLatex": "(x_1, y_1) = (1, 1), \\quad (x_2, y_2) = (3, 5)",
          "explanation": "Labelling the values keeps the horizontal and vertical differences clear.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find the horizontal difference",
          "workingLatex": "x_2 - x_1 = 3 - 1 = 2",
          "explanation": "This is how far apart the points are in the $x$-direction.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find the vertical difference",
          "workingLatex": "y_2 - y_1 = 5 - 1 = 4",
          "explanation": "This is how far apart the points are in the $y$-direction.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Square and add the differences",
          "workingLatex": "2^2 + 4^2 = 4 + 16 = 20",
          "explanation": "Squaring and adding gives the square of the distance under the root.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Write as a square root",
          "workingLatex": "d = \\sqrt{20}",
          "explanation": "Since $20$ is not a perfect square, the exact answer will be a surd that we can simplify.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Simplify the surd",
          "workingLatex": "\\sqrt{20} = \\sqrt{4 \\times 5} = \\sqrt{4}\\,\\sqrt{5} = 2\\sqrt{5}",
          "explanation": "Splitting out the largest square factor, $4$, lets us take its root outside, giving the surd in its simplest form.",
          "diagram": null
        }
      ],
      "finalAnswer": "The exact distance is $d = 2\\sqrt{5}$."
    }
  },
  {
    "id": "al.y1.pure.straight-lines.q009",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Straight lines",
    "subtopicId": "al.y1.pure.straight-lines",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "value",
    "tags": [
      "straight-lines",
      "gradient",
      "horizontal-line"
    ],
    "questionText": "The points $A(-3, 4)$ and $B(5, 4)$ lie on a straight line. Find the gradient of the line and describe what it tells you about the line.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the gradient formula",
          "workingLatex": "m = \\frac{y_2 - y_1}{x_2 - x_1}",
          "explanation": "The gradient compares the vertical change with the horizontal change between the two points.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Label the coordinates",
          "workingLatex": "(x_1, y_1) = (-3, 4), \\quad (x_2, y_2) = (5, 4)",
          "explanation": "Notice at this stage that both points have the same $y$-coordinate of $4$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute into the formula",
          "workingLatex": "m = \\frac{4 - 4}{5 - (-3)}",
          "explanation": "We take the differences in the usual order, from $A$ to $B$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find the change in $y$",
          "workingLatex": "4 - 4 = 0",
          "explanation": "Because both points are at the same height, there is no vertical change at all.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find the change in $x$",
          "workingLatex": "5 - (-3) = 8",
          "explanation": "There is a horizontal change of $8$, so the denominator is not zero.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Calculate the gradient",
          "workingLatex": "m = \\frac{0}{8} = 0",
          "explanation": "Zero divided by any non-zero number is zero, so the gradient is $0$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Interpret the gradient",
          "workingLatex": "y = 4 \\text{ for all points}",
          "explanation": "A gradient of $0$ means the line is horizontal; it never rises or falls, staying at the height $y = 4$.",
          "diagram": null
        }
      ],
      "finalAnswer": "The gradient is $m = 0$, which shows the line is horizontal (it has equation $y = 4$)."
    }
  },
  {
    "id": "al.y1.pure.straight-lines.q010",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Straight lines",
    "subtopicId": "al.y1.pure.straight-lines",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "description",
    "tags": [
      "straight-lines",
      "gradient",
      "vertical-line"
    ],
    "questionText": "The points $A(2, -1)$ and $B(2, 5)$ lie on a straight line. Show that the gradient of the line is undefined and explain why.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the gradient formula",
          "workingLatex": "m = \\frac{y_2 - y_1}{x_2 - x_1}",
          "explanation": "The gradient is the vertical change divided by the horizontal change between the two points.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Label the coordinates",
          "workingLatex": "(x_1, y_1) = (2, -1), \\quad (x_2, y_2) = (2, 5)",
          "explanation": "Notice that both points share the same $x$-coordinate of $2$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute into the formula",
          "workingLatex": "m = \\frac{5 - (-1)}{2 - 2}",
          "explanation": "We put the differences into the formula in the usual order.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find the change in $y$",
          "workingLatex": "5 - (-1) = 6",
          "explanation": "There is a genuine vertical change of $6$ between the two points.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find the change in $x$",
          "workingLatex": "2 - 2 = 0",
          "explanation": "Because both points have the same $x$-coordinate, the horizontal change is zero.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Interpret the division by zero",
          "workingLatex": "m = \\frac{6}{0} \\Rightarrow \\text{undefined}",
          "explanation": "Dividing by zero has no meaning in arithmetic, so the gradient cannot be given a numerical value.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Explain geometrically",
          "workingLatex": "x = 2 \\text{ for all points on the line}",
          "explanation": "Both points lie on the vertical line $x = 2$; a vertical line rises without any horizontal movement, which is exactly why its gradient is undefined.",
          "diagram": null
        }
      ],
      "finalAnswer": "The gradient is undefined because the horizontal change is $0$; the line is vertical with equation $x = 2$."
    }
  },
  {
    "id": "al.y1.pure.straight-lines.q011",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Straight lines",
    "subtopicId": "al.y1.pure.straight-lines",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "value",
    "tags": [
      "straight-lines",
      "distance"
    ],
    "questionText": "Find the distance between the points $A(0, 5)$ and $B(12, 0)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the distance formula",
          "workingLatex": "d = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}",
          "explanation": "The distance formula uses Pythagoras' theorem on the horizontal and vertical gaps between the points.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Label the coordinates",
          "workingLatex": "(x_1, y_1) = (0, 5), \\quad (x_2, y_2) = (12, 0)",
          "explanation": "Labelling the values keeps the zeros in the correct places when we form the differences.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find the horizontal difference",
          "workingLatex": "x_2 - x_1 = 12 - 0 = 12",
          "explanation": "This is how far the points are apart in the $x$-direction.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find the vertical difference",
          "workingLatex": "y_2 - y_1 = 0 - 5 = -5",
          "explanation": "The vertical difference is negative here, but squaring it next will make the sign disappear.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Square and add the differences",
          "workingLatex": "12^2 + (-5)^2 = 144 + 25 = 169",
          "explanation": "Squaring removes the negative sign and gives the square of the distance under the root.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Take the square root",
          "workingLatex": "d = \\sqrt{169} = 13",
          "explanation": "Since $169$ is a perfect square, the distance is a whole number.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Confirm the result",
          "workingLatex": "5 \\text{-} 12 \\text{-} 13 \\text{ triangle}",
          "explanation": "The sides $5$ and $12$ form a well-known right-angled triangle with hypotenuse $13$, which matches our answer.",
          "diagram": null
        }
      ],
      "finalAnswer": "The distance is $d = 13$."
    }
  },
  {
    "id": "al.y1.pure.straight-lines.q012",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Straight lines",
    "subtopicId": "al.y1.pure.straight-lines",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "equation",
    "tags": [
      "straight-lines",
      "equation-of-line",
      "gradient-point"
    ],
    "questionText": "A straight line has gradient $2$ and passes through the point $(3, 7)$. Find the equation of the line in the form $y = mx + c$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write the general form",
          "workingLatex": "y = mx + c",
          "explanation": "Every straight line can be written as $y = mx + c$, where $m$ is the gradient and $c$ is the y-intercept, so we build the equation from these two pieces.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Insert the gradient",
          "workingLatex": "y = 2x + c",
          "explanation": "We are told the gradient is $2$, so we replace $m$ with $2$ straight away, leaving only $c$ to find.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute the point",
          "workingLatex": "7 = 2(3) + c",
          "explanation": "The line passes through $(3, 7)$, so putting $x = 3$ and $y = 7$ into the equation must give a true statement, which lets us find $c$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Simplify the arithmetic",
          "workingLatex": "7 = 6 + c",
          "explanation": "Working out $2 \\times 3 = 6$ turns the equation into a simple one-step problem for $c$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve for c",
          "workingLatex": "c = 7 - 6 = 1",
          "explanation": "Subtracting $6$ from both sides isolates $c$, giving the y-intercept of the line.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Write the equation",
          "workingLatex": "y = 2x + 1",
          "explanation": "We now have both $m$ and $c$, so we put them together into the required form.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check with the point",
          "workingLatex": "2(3) + 1 = 7 \\checkmark",
          "explanation": "Substituting the original point back in returns $7$, confirming the line really does pass through $(3, 7)$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$y = 2x + 1$"
    }
  },
  {
    "id": "al.y1.pure.straight-lines.q013",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Straight lines",
    "subtopicId": "al.y1.pure.straight-lines",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "equation",
    "tags": [
      "straight-lines",
      "equation-of-line",
      "negative-gradient"
    ],
    "questionText": "A straight line has gradient $-2$ and passes through the point $(1, -5)$. Find the equation of the line in the form $y = mx + c$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write the general form",
          "workingLatex": "y = mx + c",
          "explanation": "We start from $y = mx + c$ because a straight line is fully described once we know its gradient $m$ and its y-intercept $c$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Insert the gradient",
          "workingLatex": "y = -2x + c",
          "explanation": "The gradient is $-2$, so we replace $m$ with $-2$; the negative sign shows the line slopes downwards.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute the point",
          "workingLatex": "-5 = -2(1) + c",
          "explanation": "Since the line passes through $(1, -5)$, these coordinates must satisfy the equation, which we use to find $c$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Simplify the arithmetic",
          "workingLatex": "-5 = -2 + c",
          "explanation": "Working out $-2 \\times 1 = -2$ leaves a simple equation to solve for $c$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve for c",
          "workingLatex": "c = -5 + 2 = -3",
          "explanation": "Adding $2$ to both sides isolates $c$, giving a negative y-intercept.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Write the equation",
          "workingLatex": "y = -2x - 3",
          "explanation": "Combining the gradient and the intercept gives the finished equation of the line.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check with the point",
          "workingLatex": "-2(1) - 3 = -5 \\checkmark",
          "explanation": "Substituting the point back in returns $-5$, confirming the equation is correct.",
          "diagram": null
        }
      ],
      "finalAnswer": "$y = -2x - 3$"
    }
  },
  {
    "id": "al.y1.pure.straight-lines.q014",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Straight lines",
    "subtopicId": "al.y1.pure.straight-lines",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "description",
    "tags": [
      "straight-lines",
      "gradient",
      "y-intercept"
    ],
    "questionText": "The equation of a straight line is $y = 3x - 5$. State its gradient and its y-intercept.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the standard form",
          "workingLatex": "y = mx + c",
          "explanation": "When a line is written as $y = mx + c$, the gradient and y-intercept can be read straight off without any calculation.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Match up the equation",
          "workingLatex": "y = 3x - 5 \\;\\Rightarrow\\; m = 3,\\; c = -5",
          "explanation": "Comparing $y = 3x - 5$ with $y = mx + c$ pairs the coefficient of $x$ with $m$ and the constant with $c$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "State the gradient",
          "workingLatex": "m = 3",
          "explanation": "The number multiplying $x$ is the gradient, so the line rises $3$ units for every $1$ unit across.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "State the y-intercept",
          "workingLatex": "c = -5",
          "explanation": "The constant term is the y-intercept, the value of $y$ where the line crosses the y-axis.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Write it as a point",
          "workingLatex": "(0, -5)",
          "explanation": "The y-intercept happens when $x = 0$, so it can also be written as the coordinate $(0, -5)$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check the intercept",
          "workingLatex": "y = 3(0) - 5 = -5 \\checkmark",
          "explanation": "Setting $x = 0$ in the equation gives $y = -5$, confirming where the line meets the y-axis.",
          "diagram": null
        }
      ],
      "finalAnswer": "Gradient $= 3$; y-intercept $= -5$ (the point $(0, -5)$)"
    }
  },
  {
    "id": "al.y1.pure.straight-lines.q015",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Straight lines",
    "subtopicId": "al.y1.pure.straight-lines",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "equation",
    "tags": [
      "straight-lines",
      "rearrange",
      "gradient"
    ],
    "questionText": "Rearrange the equation $2x + y - 7 = 0$ into the form $y = mx + c$ and state its gradient.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the goal",
          "workingLatex": "2x + y - 7 = 0",
          "explanation": "To read off the gradient we need $y$ on its own, so our aim is to rearrange the equation into $y = mx + c$ form.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Isolate the y term",
          "workingLatex": "y = -2x + 7",
          "explanation": "Moving $2x$ and $-7$ to the other side changes their signs, leaving $y$ alone on the left.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Confirm the form",
          "workingLatex": "y = -2x + 7",
          "explanation": "The equation now matches $y = mx + c$ exactly, so the gradient and intercept can be read directly.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Identify the gradient",
          "workingLatex": "m = -2",
          "explanation": "The coefficient of $x$ is the gradient, and the negative sign tells us the line slopes downwards.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Identify the y-intercept",
          "workingLatex": "c = 7",
          "explanation": "The constant term is the y-intercept, where the line crosses the y-axis.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check the rearrangement",
          "workingLatex": "2x + (-2x + 7) - 7 = 0 \\checkmark",
          "explanation": "Substituting our expression for $y$ back into the original equation gives $0$, confirming the rearrangement is correct.",
          "diagram": null
        }
      ],
      "finalAnswer": "$y = -2x + 7$; gradient $= -2$"
    }
  },
  {
    "id": "al.y1.pure.straight-lines.q016",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Straight lines",
    "subtopicId": "al.y1.pure.straight-lines",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "equation",
    "tags": [
      "straight-lines",
      "rearrange",
      "fractional-gradient"
    ],
    "questionText": "Rearrange the equation $3x - 4y + 8 = 0$ into the form $y = mx + c$, then state its gradient and y-intercept.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the goal",
          "workingLatex": "3x - 4y + 8 = 0",
          "explanation": "We want the equation in $y = mx + c$ form, so we need to get $y$ by itself on one side.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Isolate the y term",
          "workingLatex": "-4y = -3x - 8",
          "explanation": "Moving $3x$ and $8$ to the right side changes their signs, leaving the $y$ term on its own.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Divide by the coefficient of y",
          "workingLatex": "y = \\dfrac{-3x - 8}{-4}",
          "explanation": "Dividing every term by $-4$ makes the coefficient of $y$ equal to $1$, as required for $y = mx + c$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Simplify each term",
          "workingLatex": "y = \\dfrac{3}{4}x + 2",
          "explanation": "Dividing by a negative flips both signs, so $-3x \\div -4 = \\frac{3}{4}x$ and $-8 \\div -4 = 2$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Identify the gradient",
          "workingLatex": "m = \\dfrac{3}{4}",
          "explanation": "The coefficient of $x$ is the gradient; a fractional gradient simply means the line is less steep than a gradient of $1$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Identify the y-intercept",
          "workingLatex": "c = 2",
          "explanation": "The constant term is the y-intercept, so the line crosses the y-axis at $(0, 2)$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check with the intercept",
          "workingLatex": "3(0) - 4(2) + 8 = 0 \\checkmark",
          "explanation": "Substituting $(0, 2)$ into the original equation gives $0$, confirming the rearrangement is correct.",
          "diagram": null
        }
      ],
      "finalAnswer": "$y = \\dfrac{3}{4}x + 2$; gradient $= \\dfrac{3}{4}$, y-intercept $= 2$"
    }
  },
  {
    "id": "al.y1.pure.straight-lines.q017",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Straight lines",
    "subtopicId": "al.y1.pure.straight-lines",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "equation",
    "tags": [
      "straight-lines",
      "rearrange",
      "integer-coefficients"
    ],
    "questionText": "Rearrange the line $y = \\dfrac{1}{2}x + 3$ into the form $ax + by + c = 0$, where $a$, $b$ and $c$ are integers.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the goal",
          "workingLatex": "y = \\dfrac{1}{2}x + 3",
          "explanation": "We need whole-number coefficients, so the first job is to clear the fraction from the equation.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Multiply through by 2",
          "workingLatex": "2y = x + 6",
          "explanation": "Multiplying every term by $2$ removes the denominator, since $2 \\times \\frac{1}{2}x = x$ and $2 \\times 3 = 6$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Move all terms to one side",
          "workingLatex": "x + 6 - 2y = 0",
          "explanation": "Bringing $2y$ across to the left collects every term on one side so the equation equals zero.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write in standard order",
          "workingLatex": "x - 2y + 6 = 0",
          "explanation": "Ordering the terms as $ax + by + c$ presents the answer in the required form.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Confirm integer coefficients",
          "workingLatex": "a = 1,\\; b = -2,\\; c = 6",
          "explanation": "All three coefficients are whole numbers, so the required condition is satisfied.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check with a point",
          "workingLatex": "0 - 2(3) + 6 = 0 \\checkmark",
          "explanation": "The y-intercept $(0, 3)$ satisfies the new equation, confirming it describes the same line.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x - 2y + 6 = 0$"
    }
  },
  {
    "id": "al.y1.pure.straight-lines.q018",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Straight lines",
    "subtopicId": "al.y1.pure.straight-lines",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "coordinates",
    "tags": [
      "straight-lines",
      "x-intercept",
      "y-intercept"
    ],
    "questionText": "Find the coordinates of the x-intercept and the y-intercept of the line $2x + 5y = 10$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Rule for the x-intercept",
          "workingLatex": "y = 0",
          "explanation": "A line crosses the x-axis where its height is zero, so we set $y = 0$ to find the x-intercept.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute y = 0",
          "workingLatex": "2x + 5(0) = 10 \\;\\Rightarrow\\; 2x = 10",
          "explanation": "With $y = 0$ the second term vanishes, leaving a simple equation in $x$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Solve for x",
          "workingLatex": "x = 5 \\;\\Rightarrow\\; (5, 0)",
          "explanation": "Dividing by $2$ gives $x = 5$, so the line meets the x-axis at $(5, 0)$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Rule for the y-intercept",
          "workingLatex": "x = 0",
          "explanation": "A line crosses the y-axis where its horizontal position is zero, so we set $x = 0$ to find the y-intercept.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute x = 0",
          "workingLatex": "2(0) + 5y = 10 \\;\\Rightarrow\\; 5y = 10",
          "explanation": "With $x = 0$ the first term vanishes, leaving a simple equation in $y$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Solve for y",
          "workingLatex": "y = 2 \\;\\Rightarrow\\; (0, 2)",
          "explanation": "Dividing by $5$ gives $y = 2$, so the line meets the y-axis at $(0, 2)$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check both points",
          "workingLatex": "2(5) + 5(0) = 10,\\;\\; 2(0) + 5(2) = 10 \\checkmark",
          "explanation": "Both intercepts satisfy the original equation, confirming the coordinates are correct.",
          "diagram": null
        }
      ],
      "finalAnswer": "x-intercept $(5, 0)$; y-intercept $(0, 2)$"
    }
  },
  {
    "id": "al.y1.pure.straight-lines.q019",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Straight lines",
    "subtopicId": "al.y1.pure.straight-lines",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "description",
    "tags": [
      "straight-lines",
      "point-on-line",
      "substitution"
    ],
    "questionText": "Determine whether the point $(4, 5)$ lies on the line $y = 2x - 3$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the test",
          "workingLatex": "y = 2x - 3",
          "explanation": "A point lies on a line only if its coordinates make the equation true, so we test them by substitution.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Read off the coordinates",
          "workingLatex": "x = 4,\\quad y = 5",
          "explanation": "The point $(4,5)$ has $x$-coordinate $4$ and $y$-coordinate $5$; we feed the $x$-value into the line and see what height it predicts.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute the x-coordinate",
          "workingLatex": "y = 2(4) - 3",
          "explanation": "We put $x = 4$ into the equation to work out the $y$-value the line actually has at that $x$-position.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Simplify",
          "workingLatex": "y = 8 - 3 = 5",
          "explanation": "Evaluating the right-hand side tells us the line passes through height $5$ when $x = 4$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Compare the y-values",
          "workingLatex": "5 = 5\\ \\checkmark",
          "explanation": "The line's predicted height $5$ matches the point's own $y$-coordinate of $5$, so the equation is satisfied.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Conclude",
          "workingLatex": "(4,\\,5)\\ \\text{lies on the line}",
          "explanation": "Because the coordinates satisfy the equation, the point genuinely sits on the line.",
          "diagram": null
        }
      ],
      "finalAnswer": "Yes, $(4, 5)$ lies on the line, since substituting $x = 4$ gives $y = 5$"
    }
  },
  {
    "id": "al.y1.pure.straight-lines.q020",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Straight lines",
    "subtopicId": "al.y1.pure.straight-lines",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "value",
    "tags": [
      "straight-lines",
      "parallel",
      "gradient"
    ],
    "questionText": "A line is parallel to $y = 4x + 1$. State the gradient of the parallel line and explain why.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Read off the given gradient",
          "workingLatex": "y = 4x + 1 \\;\\Rightarrow\\; m = 4",
          "explanation": "Comparing with $y = mx + c$, the coefficient of $x$ shows the given line has gradient $4$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall what parallel means",
          "workingLatex": "\\text{parallel lines never meet}",
          "explanation": "Two lines are parallel when they run in exactly the same direction and so never cross.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Link direction to gradient",
          "workingLatex": "m_1 = m_2",
          "explanation": "Gradient measures steepness and direction, so lines in the same direction must have equal gradients.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply to this line",
          "workingLatex": "m = 4",
          "explanation": "Since the parallel line matches the direction of $y = 4x + 1$, it must also have gradient $4$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State the answer",
          "workingLatex": "\\text{gradient} = 4",
          "explanation": "The parallel line has gradient $4$, differing from the original only in its y-intercept.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check the reasoning",
          "workingLatex": "y = 4x + 7 \\parallel y = 4x + 1 \\checkmark",
          "explanation": "Any line such as $y = 4x + 7$ shares the gradient $4$ but sits elsewhere, confirming equal gradients give parallel lines.",
          "diagram": null
        }
      ],
      "finalAnswer": "Gradient $= 4$ (parallel lines have equal gradients)"
    }
  },
  {
    "id": "al.y1.pure.straight-lines.q021",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Straight lines",
    "subtopicId": "al.y1.pure.straight-lines",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "value",
    "tags": [
      "straight-lines",
      "perpendicular",
      "gradient"
    ],
    "questionText": "A line is perpendicular to $y = 2x + 5$. State the gradient of the perpendicular line.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Read off the given gradient",
          "workingLatex": "y = 2x + 5 \\;\\Rightarrow\\; m = 2",
          "explanation": "Comparing with $y = mx + c$, the coefficient of $x$ shows the given line has gradient $2$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall the perpendicular rule",
          "workingLatex": "m_{\\perp} = -\\dfrac{1}{m}",
          "explanation": "The gradient of a perpendicular line is the negative reciprocal of the original gradient.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Take the reciprocal",
          "workingLatex": "\\dfrac{1}{2}",
          "explanation": "The reciprocal of $2$ is $\\frac{1}{2}$, found by flipping the number over $1$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply the negative sign",
          "workingLatex": "m_{\\perp} = -\\dfrac{1}{2}",
          "explanation": "Making the reciprocal negative completes the negative-reciprocal rule for perpendicular lines.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State the answer",
          "workingLatex": "\\text{gradient} = -\\dfrac{1}{2}",
          "explanation": "The perpendicular line has gradient $-\\frac{1}{2}$, sloping the opposite way and less steeply.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check the product",
          "workingLatex": "2 \\times \\left(-\\dfrac{1}{2}\\right) = -1 \\checkmark",
          "explanation": "The gradients multiply to $-1$, the defining test that two lines are perpendicular.",
          "diagram": null
        }
      ],
      "finalAnswer": "Gradient $= -\\dfrac{1}{2}$"
    }
  },
  {
    "id": "al.y1.pure.straight-lines.q022",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Straight lines",
    "subtopicId": "al.y1.pure.straight-lines",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "value",
    "tags": [
      "straight-lines",
      "perpendicular",
      "fractional-gradient"
    ],
    "questionText": "A line has gradient $\\dfrac{2}{3}$. State the gradient of a line perpendicular to it.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Note the given gradient",
          "workingLatex": "m = \\dfrac{2}{3}",
          "explanation": "We are told the line has a fractional gradient of $\\frac{2}{3}$, which we will transform to find the perpendicular gradient.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall the perpendicular rule",
          "workingLatex": "m_{\\perp} = -\\dfrac{1}{m}",
          "explanation": "The gradient of a perpendicular line is the negative reciprocal of the original gradient.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Take the reciprocal",
          "workingLatex": "\\dfrac{1}{\\frac{2}{3}} = \\dfrac{3}{2}",
          "explanation": "The reciprocal of a fraction is found by turning it upside down, so $\\frac{2}{3}$ becomes $\\frac{3}{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply the negative sign",
          "workingLatex": "m_{\\perp} = -\\dfrac{3}{2}",
          "explanation": "Making the flipped fraction negative completes the negative-reciprocal rule.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State the answer",
          "workingLatex": "\\text{gradient} = -\\dfrac{3}{2}",
          "explanation": "The perpendicular line has gradient $-\\frac{3}{2}$, sloping the opposite way and more steeply than the original.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check the product",
          "workingLatex": "\\dfrac{2}{3} \\times \\left(-\\dfrac{3}{2}\\right) = -1 \\checkmark",
          "explanation": "The two gradients multiply to $-1$, confirming the lines are perpendicular.",
          "diagram": null
        }
      ],
      "finalAnswer": "Gradient $= -\\dfrac{3}{2}$"
    }
  },
  {
    "id": "al.y1.pure.straight-lines.q023",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Straight lines",
    "subtopicId": "al.y1.pure.straight-lines",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "equation",
    "tags": [
      "straight-lines",
      "two-points",
      "gradient",
      "equation-of-line"
    ],
    "questionText": "A straight line passes through the points $(2, 3)$ and $(6, 11)$. Find the equation of the line, giving your answer in the form $y = mx + c$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Label the two points",
          "workingLatex": "(x_1, y_1) = (2, 3), \\quad (x_2, y_2) = (6, 11)",
          "explanation": "Giving each coordinate a name keeps the substitution tidy, so the correct numbers land in the right slots of the gradient formula.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write down the gradient formula",
          "workingLatex": "m = \\frac{y_2 - y_1}{x_2 - x_1}",
          "explanation": "The gradient measures how steep the line is: it is the change in the vertical direction divided by the change in the horizontal direction between the two points.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute the coordinates",
          "workingLatex": "m = \\frac{11 - 3}{6 - 2}",
          "explanation": "Placing the y-values on top and the matching x-values on the bottom keeps the differences consistent, so the rise pairs with the correct run.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Simplify the gradient",
          "workingLatex": "m = \\frac{8}{4} = 2",
          "explanation": "The line rises 8 units for every 4 units across, which reduces to a rise of 2 for every 1 across, a clean whole-number gradient.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Write the point-gradient form",
          "workingLatex": "y - y_1 = m(x - x_1)",
          "explanation": "This form builds a line from a single known point and the gradient, which is exactly the information we now have.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute the gradient and the point $(2, 3)$",
          "workingLatex": "y - 3 = 2(x - 2)",
          "explanation": "Either given point works; using $(2, 3)$ keeps the numbers small and the expansion straightforward.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Expand the bracket",
          "workingLatex": "y - 3 = 2x - 4",
          "explanation": "Multiplying out the bracket removes the grouping so the equation can be rearranged into the requested slope-intercept form.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Make $y$ the subject",
          "workingLatex": "y = 2x - 4 + 3 = 2x - 1",
          "explanation": "Adding 3 to both sides isolates $y$, leaving the equation in the $y = mx + c$ form the question asks for.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Verify with the second point",
          "workingLatex": "2(6) - 1 = 12 - 1 = 11 \\;\\checkmark",
          "explanation": "Substituting $x = 6$ should return the known y-value of 11. It does, confirming the equation passes through both points.",
          "diagram": null
        }
      ],
      "finalAnswer": "$y = 2x - 1$"
    }
  },
  {
    "id": "al.y1.pure.straight-lines.q024",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Straight lines",
    "subtopicId": "al.y1.pure.straight-lines",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "equation",
    "tags": [
      "straight-lines",
      "two-points",
      "general-form",
      "integer-coefficients"
    ],
    "questionText": "A straight line passes through the points $(1, 4)$ and $(5, 6)$. Find the equation of the line in the form $ax + by + c = 0$, where $a$, $b$ and $c$ are integers.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Label the two points",
          "workingLatex": "(x_1, y_1) = (1, 4), \\quad (x_2, y_2) = (5, 6)",
          "explanation": "Naming the coordinates first prevents mixing up the values when they are substituted into the gradient formula.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the gradient formula",
          "workingLatex": "m = \\frac{y_2 - y_1}{x_2 - x_1}",
          "explanation": "The gradient is the ratio of vertical change to horizontal change, and it fixes the direction of the line.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute and simplify",
          "workingLatex": "m = \\frac{6 - 4}{5 - 1} = \\frac{2}{4} = \\frac{1}{2}",
          "explanation": "The line rises 2 units over a run of 4, which simplifies to a gentle gradient of one half.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write the point-gradient form",
          "workingLatex": "y - 4 = \\frac{1}{2}(x - 1)",
          "explanation": "Using the point $(1, 4)$ together with the gradient gives a valid equation for the line before it is rearranged.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Clear the fraction",
          "workingLatex": "2(y - 4) = x - 1",
          "explanation": "Multiplying both sides by 2 removes the half, which is essential because the final form must have integer coefficients.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Expand the bracket",
          "workingLatex": "2y - 8 = x - 1",
          "explanation": "Expanding clears the grouping so every term can be gathered onto one side.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Move all terms to one side",
          "workingLatex": "0 = x - 1 - 2y + 8",
          "explanation": "Subtracting the left-hand side from both sides collects every term against zero, the shape required by $ax + by + c = 0$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Tidy into general form",
          "workingLatex": "x - 2y + 7 = 0",
          "explanation": "Combining the constants and ordering the terms as $x$, then $y$, then constant gives the standard general form with a positive leading coefficient.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Verify with the second point",
          "workingLatex": "5 - 2(6) + 7 = 5 - 12 + 7 = 0 \\;\\checkmark",
          "explanation": "Substituting $(5, 6)$ should make the expression zero. It does, so the line genuinely passes through both points.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x - 2y + 7 = 0$"
    }
  },
  {
    "id": "al.y1.pure.straight-lines.q025",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Straight lines",
    "subtopicId": "al.y1.pure.straight-lines",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "equation",
    "tags": [
      "straight-lines",
      "two-points",
      "fractional-gradient",
      "general-form"
    ],
    "questionText": "A straight line passes through the points $(-2, 1)$ and $(4, 5)$. Find the equation of the line in the form $ax + by + c = 0$, where $a$, $b$ and $c$ are integers.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Label the two points",
          "workingLatex": "(x_1, y_1) = (-2, 1), \\quad (x_2, y_2) = (4, 5)",
          "explanation": "Naming the coordinates keeps the signs organised, which matters here because one x-value is negative.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the gradient formula",
          "workingLatex": "m = \\frac{y_2 - y_1}{x_2 - x_1}",
          "explanation": "The gradient captures the direction of the line as the vertical change divided by the horizontal change.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute the coordinates",
          "workingLatex": "m = \\frac{5 - 1}{4 - (-2)} = \\frac{4}{6}",
          "explanation": "Subtracting a negative x-value adds, so the run is $4 - (-2) = 6$; careful sign handling keeps the gradient correct.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Simplify the gradient",
          "workingLatex": "m = \\frac{2}{3}",
          "explanation": "Cancelling the common factor of 2 leaves the gradient in lowest terms as a fraction.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Write the point-gradient form",
          "workingLatex": "y - 1 = \\frac{2}{3}(x - (-2)) = \\frac{2}{3}(x + 2)",
          "explanation": "Using the point $(-2, 1)$, note that subtracting $-2$ becomes adding 2 inside the bracket.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Clear the fraction",
          "workingLatex": "3(y - 1) = 2(x + 2)",
          "explanation": "Multiplying both sides by 3 eliminates the denominator so that integer coefficients can be reached.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Expand both sides",
          "workingLatex": "3y - 3 = 2x + 4",
          "explanation": "Expanding removes the brackets, exposing every term so they can be collected together.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Move all terms to one side",
          "workingLatex": "0 = 2x + 4 - 3y + 3",
          "explanation": "Bringing everything to one side sets the expression equal to zero, matching the general form.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Tidy into general form",
          "workingLatex": "2x - 3y + 7 = 0",
          "explanation": "Combining the constants and ordering the terms gives the standard form with a positive leading coefficient.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Verify with the second point",
          "workingLatex": "2(4) - 3(5) + 7 = 8 - 15 + 7 = 0 \\;\\checkmark",
          "explanation": "Substituting $(4, 5)$ returns zero, confirming both original points satisfy the equation.",
          "diagram": null
        }
      ],
      "finalAnswer": "$2x - 3y + 7 = 0$"
    }
  },
  {
    "id": "al.y1.pure.straight-lines.q026",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Straight lines",
    "subtopicId": "al.y1.pure.straight-lines",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "description",
    "tags": [
      "straight-lines",
      "general-form",
      "gradient",
      "y-intercept"
    ],
    "questionText": "A straight line has equation $3x - 4y + 12 = 0$. Find its gradient and its y-intercept, and verify that the point $(4, 6)$ lies on the line.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the given equation",
          "workingLatex": "3x - 4y + 12 = 0",
          "explanation": "The gradient and y-intercept are not visible in general form, so the plan is to rearrange into $y = mx + c$ where they can be read off directly.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Isolate the $y$ term",
          "workingLatex": "4y = 3x + 12",
          "explanation": "Adding $4y$ to both sides moves the y-term to its own side with a positive coefficient, which is easier to divide through.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Divide every term by 4",
          "workingLatex": "y = \\frac{3}{4}x + 3",
          "explanation": "Dividing by the coefficient of $y$ leaves $y$ by itself, putting the equation into slope-intercept form.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Read off the gradient",
          "workingLatex": "m = \\frac{3}{4}",
          "explanation": "In $y = mx + c$, the number multiplying $x$ is the gradient, so the line rises 3 units for every 4 across.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Read off the y-intercept",
          "workingLatex": "c = 3 \\;\\Rightarrow\\; (0, 3)",
          "explanation": "The constant term is the value of $y$ when $x = 0$, so the line crosses the y-axis at the point $(0, 3)$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Set up the verification",
          "workingLatex": "3x - 4y + 12 \\text{ with } x = 4,\\; y = 6",
          "explanation": "A point lies on a line exactly when its coordinates make the equation true, so substitute them into the original equation.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Substitute the point",
          "workingLatex": "3(4) - 4(6) + 12",
          "explanation": "Replacing $x$ with 4 and $y$ with 6 tests whether the left-hand side reduces to zero as required.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Evaluate",
          "workingLatex": "12 - 24 + 12 = 0",
          "explanation": "Working through the arithmetic gives exactly zero, which is the balanced value the equation demands.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the conclusion",
          "workingLatex": "(4, 6) \\text{ satisfies the equation, so it lies on the line.}",
          "explanation": "Because the coordinates make the equation true, the point sits precisely on the line.",
          "diagram": null
        }
      ],
      "finalAnswer": "Gradient $= \\frac{3}{4}$, y-intercept at $(0, 3)$, and $(4, 6)$ lies on the line since $3(4) - 4(6) + 12 = 0$."
    }
  },
  {
    "id": "al.y1.pure.straight-lines.q027",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Straight lines",
    "subtopicId": "al.y1.pure.straight-lines",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "equation",
    "tags": [
      "straight-lines",
      "parallel-lines",
      "gradient",
      "equation-of-line"
    ],
    "questionText": "Find the equation of the line that is parallel to $y = 3x - 5$ and passes through the point $(1, 4)$. Give your answer in the form $y = mx + c$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the condition for parallel lines",
          "workingLatex": "\\text{Parallel lines have equal gradients.}",
          "explanation": "Parallel lines never meet, which happens precisely when they climb at the same rate, so they must share the same gradient.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Read the gradient of the given line",
          "workingLatex": "y = 3x - 5 \\;\\Rightarrow\\; m = 3",
          "explanation": "The given line is already in $y = mx + c$ form, so the coefficient of $x$ is its gradient.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "State the gradient of the required line",
          "workingLatex": "m = 3",
          "explanation": "Since the new line is parallel, it must have the identical gradient of 3.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write the point-gradient form",
          "workingLatex": "y - y_1 = m(x - x_1)",
          "explanation": "This form lets us build the line from the shared gradient and the point it must pass through.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute the gradient and point $(1, 4)$",
          "workingLatex": "y - 4 = 3(x - 1)",
          "explanation": "Placing the point $(1, 4)$ and gradient 3 into the formula pins the line to the required location.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Expand the bracket",
          "workingLatex": "y - 4 = 3x - 3",
          "explanation": "Multiplying out removes the grouping so the equation can be arranged into slope-intercept form.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Make $y$ the subject",
          "workingLatex": "y = 3x + 1",
          "explanation": "Adding 4 to both sides isolates $y$ and reveals the y-intercept of the new line.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Confirm it is parallel and distinct",
          "workingLatex": "m = 3 \\text{ (same)}, \\quad c = 1 \\neq -5",
          "explanation": "The gradients match while the intercepts differ, so the line is genuinely parallel to the original rather than the same line.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Verify the point lies on the line",
          "workingLatex": "3(1) + 1 = 4 \\;\\checkmark",
          "explanation": "Substituting $x = 1$ returns $y = 4$, confirming the line passes through the required point.",
          "diagram": null
        }
      ],
      "finalAnswer": "$y = 3x + 1$"
    }
  },
  {
    "id": "al.y1.pure.straight-lines.q028",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Straight lines",
    "subtopicId": "al.y1.pure.straight-lines",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "equation",
    "tags": [
      "straight-lines",
      "parallel-lines",
      "general-form",
      "integer-coefficients"
    ],
    "questionText": "Find the equation of the line that is parallel to $2x + 5y - 10 = 0$ and passes through the point $(5, 3)$. Give your answer in the form $ax + by + c = 0$, where $a$, $b$ and $c$ are integers.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Rearrange the given line to find its gradient",
          "workingLatex": "2x + 5y - 10 = 0 \\;\\Rightarrow\\; 5y = -2x + 10",
          "explanation": "The gradient is hidden in general form, so isolate the y-term to move towards $y = mx + c$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Divide to reach slope-intercept form",
          "workingLatex": "y = -\\frac{2}{5}x + 2",
          "explanation": "Dividing every term by 5 leaves $y$ alone, so the coefficient of $x$ can be read as the gradient.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Identify the gradient",
          "workingLatex": "m = -\\frac{2}{5}",
          "explanation": "The line falls 2 units for every 5 across; a parallel line must copy this exact gradient.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write the point-gradient form",
          "workingLatex": "y - 3 = -\\frac{2}{5}(x - 5)",
          "explanation": "Using the shared gradient and the point $(5, 3)$ builds the required line.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Clear the fraction",
          "workingLatex": "5(y - 3) = -2(x - 5)",
          "explanation": "Multiplying both sides by 5 removes the denominator so the final answer can have integer coefficients.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Expand both sides",
          "workingLatex": "5y - 15 = -2x + 10",
          "explanation": "Expanding the brackets frees each term so everything can be gathered onto one side.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Collect all terms on one side",
          "workingLatex": "2x + 5y - 15 - 10 = 0",
          "explanation": "Adding $2x$ and subtracting 10 from both sides brings every term against zero.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Tidy into general form",
          "workingLatex": "2x + 5y - 25 = 0",
          "explanation": "Combining the constants gives the standard general form, and its $x$ and $y$ coefficients match the original line, confirming they are parallel.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Verify the point lies on the line",
          "workingLatex": "2(5) + 5(3) - 25 = 10 + 15 - 25 = 0 \\;\\checkmark",
          "explanation": "Substituting $(5, 3)$ returns zero, confirming the line passes through the required point.",
          "diagram": null
        }
      ],
      "finalAnswer": "$2x + 5y - 25 = 0$"
    }
  },
  {
    "id": "al.y1.pure.straight-lines.q029",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Straight lines",
    "subtopicId": "al.y1.pure.straight-lines",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "equation",
    "tags": [
      "straight-lines",
      "fractional-gradient",
      "point-gradient",
      "general-form"
    ],
    "questionText": "A line has gradient $\\frac{3}{5}$ and passes through the point $(2, -1)$. Find the equation of the line in the form $ax + by + c = 0$, where $a$, $b$ and $c$ are integers.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the gradient and the point",
          "workingLatex": "m = \\frac{3}{5}, \\quad (x_1, y_1) = (2, -1)",
          "explanation": "Listing the known information clearly shows we already have everything needed for the point-gradient form.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the point-gradient form",
          "workingLatex": "y - y_1 = m(x - x_1)",
          "explanation": "This form constructs a line directly from one point and the gradient, which is exactly what is given.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute the values",
          "workingLatex": "y - (-1) = \\frac{3}{5}(x - 2)",
          "explanation": "Care with the negative y-value matters: subtracting $-1$ will become adding 1 on the left.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Simplify the left-hand side",
          "workingLatex": "y + 1 = \\frac{3}{5}(x - 2)",
          "explanation": "The double negative resolves to $y + 1$, tidying the equation before clearing the fraction.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Clear the fraction",
          "workingLatex": "5(y + 1) = 3(x - 2)",
          "explanation": "Multiplying both sides by 5 removes the denominator, a necessary step for integer coefficients.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Expand both sides",
          "workingLatex": "5y + 5 = 3x - 6",
          "explanation": "Expanding the brackets exposes each term so they can be collected on one side.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Move all terms to one side",
          "workingLatex": "0 = 3x - 6 - 5y - 5",
          "explanation": "Subtracting the left-hand side from both sides sets the expression equal to zero.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Tidy into general form",
          "workingLatex": "3x - 5y - 11 = 0",
          "explanation": "Combining the constants and ordering the terms gives the standard form with a positive leading coefficient.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Verify with the given point",
          "workingLatex": "3(2) - 5(-1) - 11 = 6 + 5 - 11 = 0 \\;\\checkmark",
          "explanation": "Substituting $(2, -1)$ returns zero, confirming the point lies on the line and the algebra is correct.",
          "diagram": null
        }
      ],
      "finalAnswer": "$3x - 5y - 11 = 0$"
    }
  },
  {
    "id": "al.y1.pure.straight-lines.q030",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Straight lines",
    "subtopicId": "al.y1.pure.straight-lines",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "value",
    "tags": [
      "straight-lines",
      "unknown-constant",
      "substitution",
      "intercepts"
    ],
    "questionText": "The line $y = 2x + c$ passes through the point $(3, 10)$. Find the value of $c$, and hence find the coordinates of the point where the line crosses the x-axis.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write the line with the unknown constant",
          "workingLatex": "y = 2x + c",
          "explanation": "The gradient is known but the vertical position is not, so $c$ is the single unknown to determine.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Use the meaning of a point on the line",
          "workingLatex": "\\text{If } (3, 10) \\text{ lies on the line, its coordinates satisfy the equation.}",
          "explanation": "A point sits on a line exactly when substituting its coordinates makes the equation balance, which gives an equation for $c$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute the point",
          "workingLatex": "10 = 2(3) + c",
          "explanation": "Replacing $x$ with 3 and $y$ with 10 turns the line equation into a simple equation in $c$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Simplify the right-hand side",
          "workingLatex": "10 = 6 + c",
          "explanation": "Evaluating $2 \\times 3$ reduces the equation to a single arithmetic step.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve for $c$",
          "workingLatex": "c = 4",
          "explanation": "Subtracting 6 from both sides isolates $c$, giving the constant that fixes the line's height.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Write the full equation",
          "workingLatex": "y = 2x + 4",
          "explanation": "With $c$ known, the line is now completely determined.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Set $y = 0$ for the x-axis crossing",
          "workingLatex": "0 = 2x + 4",
          "explanation": "Every point on the x-axis has $y = 0$, so setting $y$ to zero locates where the line meets that axis.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Solve for $x$",
          "workingLatex": "2x = -4 \\;\\Rightarrow\\; x = -2",
          "explanation": "Rearranging gives the x-coordinate of the crossing point.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the x-intercept",
          "workingLatex": "(-2, 0)",
          "explanation": "Pairing the found x-value with $y = 0$ gives the coordinates where the line crosses the x-axis.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Verify the original point",
          "workingLatex": "2(3) + 4 = 10 \\;\\checkmark",
          "explanation": "Substituting $x = 3$ back into the completed equation returns $y = 10$, confirming $c$ is correct.",
          "diagram": null
        }
      ],
      "finalAnswer": "$c = 4$; the line $y = 2x + 4$ crosses the x-axis at $(-2, 0)$."
    }
  },
  {
    "id": "al.y1.pure.straight-lines.q031",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Straight lines",
    "subtopicId": "al.y1.pure.straight-lines",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "coordinates",
    "tags": [
      "straight-lines",
      "intercepts",
      "general-form",
      "area"
    ],
    "questionText": "The line $3x + 4y - 24 = 0$ crosses the x-axis at $A$ and the y-axis at $B$. Find the coordinates of $A$ and $B$, and hence find the area of triangle $OAB$, where $O$ is the origin.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the given line",
          "workingLatex": "3x + 4y - 24 = 0",
          "explanation": "The two intercepts are found by using what is special about each axis: on the x-axis $y = 0$, and on the y-axis $x = 0$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Set $y = 0$ to find $A$",
          "workingLatex": "3x + 4(0) - 24 = 0 \\;\\Rightarrow\\; 3x - 24 = 0",
          "explanation": "The x-axis is where $y = 0$, so substituting zero for $y$ isolates the x-intercept.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Solve for $x$",
          "workingLatex": "3x = 24 \\;\\Rightarrow\\; x = 8",
          "explanation": "Dividing by 3 gives the x-coordinate where the line meets the horizontal axis.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "State point $A$",
          "workingLatex": "A = (8, 0)",
          "explanation": "Pairing the x-value with $y = 0$ gives the full coordinates of the x-axis crossing.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Set $x = 0$ to find $B$",
          "workingLatex": "3(0) + 4y - 24 = 0 \\;\\Rightarrow\\; 4y - 24 = 0",
          "explanation": "The y-axis is where $x = 0$, so substituting zero for $x$ isolates the y-intercept.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Solve for $y$",
          "workingLatex": "4y = 24 \\;\\Rightarrow\\; y = 6",
          "explanation": "Dividing by 4 gives the y-coordinate where the line meets the vertical axis.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State point $B$",
          "workingLatex": "B = (0, 6)",
          "explanation": "Pairing $x = 0$ with the y-value gives the coordinates of the y-axis crossing.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Recognise the right-angled triangle",
          "workingLatex": "OA = 8, \\quad OB = 6, \\quad \\angle AOB = 90^{\\circ}",
          "explanation": "Because $O$ is the origin and the two intercepts lie on perpendicular axes, $OAB$ is right-angled with legs along the axes of length 8 and 6.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Apply the triangle area formula",
          "workingLatex": "\\text{Area} = \\frac{1}{2} \\times OA \\times OB = \\frac{1}{2} \\times 8 \\times 6",
          "explanation": "For a right-angled triangle the two legs act as base and height, so the area is half their product.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Compute the area",
          "workingLatex": "\\text{Area} = 24",
          "explanation": "Multiplying and halving gives the enclosed area in square units.",
          "diagram": null
        }
      ],
      "finalAnswer": "$A = (8, 0)$, $B = (0, 6)$, and the area of triangle $OAB$ is $24$ square units."
    }
  },
  {
    "id": "al.y1.pure.straight-lines.q032",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Straight lines",
    "subtopicId": "al.y1.pure.straight-lines",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "value",
    "tags": [
      "straight-lines",
      "two-points",
      "gradient",
      "interpolation"
    ],
    "questionText": "A straight line passes through the points $(1, 2)$ and $(5, 14)$. Find the gradient and the equation of the line, and hence find the value of $y$ when $x = 3$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Label the two points",
          "workingLatex": "(x_1, y_1) = (1, 2), \\quad (x_2, y_2) = (5, 14)",
          "explanation": "Naming the coordinates keeps the gradient substitution orderly and error-free.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the gradient formula",
          "workingLatex": "m = \\frac{y_2 - y_1}{x_2 - x_1}",
          "explanation": "The gradient is the vertical change divided by the horizontal change between the two points.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute the coordinates",
          "workingLatex": "m = \\frac{14 - 2}{5 - 1} = \\frac{12}{4}",
          "explanation": "Keeping the y-differences over the matching x-differences ensures the rise pairs with the correct run.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Simplify the gradient",
          "workingLatex": "m = 3",
          "explanation": "The line rises 12 units over a run of 4, a steady gradient of 3.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Write the point-gradient form",
          "workingLatex": "y - 2 = 3(x - 1)",
          "explanation": "Using the point $(1, 2)$ and the gradient builds a valid equation for the line.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Expand the bracket",
          "workingLatex": "y - 2 = 3x - 3",
          "explanation": "Multiplying out removes the grouping so the equation can be tidied into slope-intercept form.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Make $y$ the subject",
          "workingLatex": "y = 3x - 1",
          "explanation": "Adding 2 to both sides isolates $y$, giving the full equation of the line.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Verify with the second point",
          "workingLatex": "3(5) - 1 = 15 - 1 = 14 \\;\\checkmark",
          "explanation": "Substituting $x = 5$ returns $y = 14$, confirming the equation passes through both given points.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Substitute $x = 3$",
          "workingLatex": "y = 3(3) - 1",
          "explanation": "Because $x = 3$ lies between the two given x-values, evaluating the equation there interpolates the corresponding y-value.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Compute the value of $y$",
          "workingLatex": "y = 9 - 1 = 8",
          "explanation": "The arithmetic gives the height of the line at $x = 3$.",
          "diagram": null
        }
      ],
      "finalAnswer": "Gradient $= 3$, equation $y = 3x - 1$, and when $x = 3$, $y = 8$."
    }
  },
  {
    "id": "al.y1.pure.straight-lines.q033",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Straight lines",
    "subtopicId": "al.y1.pure.straight-lines",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "equation",
    "tags": [
      "straight-lines",
      "perpendicular",
      "equation-of-line"
    ],
    "questionText": "The line $l$ has equation $y = 2x + 3$. Find the equation of the line perpendicular to $l$ that passes through the point $P(4, 1)$. Give your answer in the form $y = mx + c$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Read off the gradient of the given line",
          "workingLatex": "y = 2x + 3 \\Rightarrow m_1 = 2",
          "explanation": "When a line is written as $y = mx + c$, the number multiplying $x$ is the gradient. Here that number is $2$, so the given line rises $2$ units for every $1$ unit across.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Apply the perpendicular gradient rule",
          "workingLatex": "m_1 m_2 = -1 \\Rightarrow m_2 = -\\frac{1}{2}",
          "explanation": "Two perpendicular lines have gradients whose product is $-1$. Rearranging gives the new gradient as the negative reciprocal of $2$, which is $-\\frac{1}{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write the point-gradient form",
          "workingLatex": "y - y_1 = m(x - x_1)",
          "explanation": "This template builds a line directly from one known point and the gradient, which is exactly the information we now have.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute the point and gradient",
          "workingLatex": "y - 1 = -\\frac{1}{2}(x - 4)",
          "explanation": "We put in $P(4, 1)$ for $(x_1, y_1)$ and the perpendicular gradient $-\\frac{1}{2}$ so the line is pinned to pass through $P$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Expand the bracket",
          "workingLatex": "y - 1 = -\\frac{1}{2}x + 2",
          "explanation": "Multiplying $-\\frac{1}{2}$ by each term inside the bracket removes it, moving us closer to the required $y = mx + c$ shape.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Make $y$ the subject",
          "workingLatex": "y = -\\frac{1}{2}x + 3",
          "explanation": "Adding $1$ to both sides isolates $y$, giving the equation in the exact form requested.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check the line passes through $P$",
          "workingLatex": "x = 4:\\ y = -\\frac{1}{2}(4) + 3 = 1",
          "explanation": "Substituting the $x$-coordinate of $P$ should return its $y$-coordinate. It gives $1$, confirming the line really goes through $P(4, 1)$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check the perpendicularity condition",
          "workingLatex": "2 \\times \\left(-\\frac{1}{2}\\right) = -1",
          "explanation": "The product of the two gradients is $-1$, which is the defining test for perpendicular lines, so the direction is correct.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the final equation",
          "workingLatex": "y = -\\frac{1}{2}x + 3",
          "explanation": "Both checks pass, so this is the required perpendicular line through $P$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$y = -\\frac{1}{2}x + 3$"
    }
  },
  {
    "id": "al.y1.pure.straight-lines.q034",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Straight lines",
    "subtopicId": "al.y1.pure.straight-lines",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "equation",
    "tags": [
      "straight-lines",
      "perpendicular",
      "general-form"
    ],
    "questionText": "A line has equation $3x + 4y - 12 = 0$. Find the equation of the line perpendicular to it that passes through the point $(2, -1)$. Give your answer in the form $ax + by + c = 0$ where $a$, $b$ and $c$ are integers.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Rearrange the given line into gradient form",
          "workingLatex": "3x + 4y - 12 = 0 \\Rightarrow y = -\\frac{3}{4}x + 3",
          "explanation": "Isolating $y$ turns the general form into $y = mx + c$, which lets us read the gradient off directly instead of guessing it.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify the gradient of the given line",
          "workingLatex": "m_1 = -\\frac{3}{4}",
          "explanation": "The coefficient of $x$ in the rearranged equation is the gradient of the original line.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find the perpendicular gradient",
          "workingLatex": "m_2 = -\\frac{1}{m_1} = \\frac{4}{3}",
          "explanation": "The perpendicular gradient is the negative reciprocal: flip the fraction and change its sign, turning $-\\frac{3}{4}$ into $\\frac{4}{3}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write the point-gradient form",
          "workingLatex": "y - (-1) = \\frac{4}{3}(x - 2)",
          "explanation": "Using the point $(2, -1)$ and the new gradient guarantees the line both has the right direction and passes through the required point.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Clear the fraction",
          "workingLatex": "3(y + 1) = 4(x - 2)",
          "explanation": "Multiplying both sides by $3$ removes the denominator early, which keeps the algebra with whole numbers and avoids fractions in the final integer form.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Expand both sides",
          "workingLatex": "3y + 3 = 4x - 8",
          "explanation": "Distributing the numbers across each bracket removes them and exposes all the terms we need to collect.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Collect all terms on one side",
          "workingLatex": "4x - 3y - 11 = 0",
          "explanation": "Moving every term to the right-hand side gives the required $ax + by + c = 0$ layout with integer coefficients.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check the point satisfies the equation",
          "workingLatex": "4(2) - 3(-1) - 11 = 8 + 3 - 11 = 0",
          "explanation": "Substituting $(2, -1)$ gives $0$, confirming the point lies on our line as required.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Check the perpendicularity",
          "workingLatex": "\\left(-\\frac{3}{4}\\right) \\times \\frac{4}{3} = -1",
          "explanation": "The gradient of $4x - 3y - 11 = 0$ is $\\frac{4}{3}$, and its product with the original gradient is $-1$, confirming the lines are perpendicular.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the final equation",
          "workingLatex": "4x - 3y - 11 = 0",
          "explanation": "Both checks hold, so this is the required perpendicular line in integer general form.",
          "diagram": null
        }
      ],
      "finalAnswer": "$4x - 3y - 11 = 0$"
    }
  },
  {
    "id": "al.y1.pure.straight-lines.q035",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Straight lines",
    "subtopicId": "al.y1.pure.straight-lines",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "equation",
    "tags": [
      "straight-lines",
      "perpendicular-bisector",
      "midpoint"
    ],
    "questionText": "Find the equation of the perpendicular bisector of the line segment joining $A(1, 2)$ and $B(5, 8)$. Give your answer in the form $y = mx + c$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall what a perpendicular bisector is",
          "workingLatex": "\\text{passes through the midpoint of } AB \\text{ and is } \\perp \\text{ to } AB",
          "explanation": "A perpendicular bisector cuts a segment exactly in half at a right angle, so we need both the midpoint of $AB$ and a gradient perpendicular to $AB$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find the midpoint of $AB$",
          "workingLatex": "M = \\left(\\frac{1 + 5}{2}, \\frac{2 + 8}{2}\\right) = (3, 5)",
          "explanation": "Averaging the $x$-coordinates and the $y$-coordinates locates the exact centre of the segment, which the bisector must pass through.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find the gradient of $AB$",
          "workingLatex": "m_{AB} = \\frac{8 - 2}{5 - 1} = \\frac{6}{4} = \\frac{3}{2}",
          "explanation": "The gradient is the change in $y$ divided by the change in $x$ between the two points, describing the direction of the segment.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find the perpendicular gradient",
          "workingLatex": "m = -\\frac{1}{m_{AB}} = -\\frac{2}{3}",
          "explanation": "The bisector must be at right angles to $AB$, so its gradient is the negative reciprocal of $\\frac{3}{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Write the point-gradient form through $M$",
          "workingLatex": "y - 5 = -\\frac{2}{3}(x - 3)",
          "explanation": "Anchoring the line at the midpoint $M(3, 5)$ with the perpendicular gradient produces exactly the bisector we want.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Expand the bracket",
          "workingLatex": "y - 5 = -\\frac{2}{3}x + 2",
          "explanation": "Multiplying out clears the bracket and moves us toward the requested $y = mx + c$ form.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Make $y$ the subject",
          "workingLatex": "y = -\\frac{2}{3}x + 7",
          "explanation": "Adding $5$ to both sides isolates $y$, giving the equation in the required form.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check the midpoint lies on the line",
          "workingLatex": "x = 3:\\ y = -\\frac{2}{3}(3) + 7 = 5",
          "explanation": "Substituting the midpoint's $x$-value returns $y = 5$, confirming the bisector passes through $M(3, 5)$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Check the perpendicularity",
          "workingLatex": "\\frac{3}{2} \\times \\left(-\\frac{2}{3}\\right) = -1",
          "explanation": "The product of the segment's gradient and the bisector's gradient is $-1$, confirming the right-angle condition.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the final equation",
          "workingLatex": "y = -\\frac{2}{3}x + 7",
          "explanation": "With both conditions verified, this is the perpendicular bisector of $AB$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$y = -\\frac{2}{3}x + 7$"
    }
  },
  {
    "id": "al.y1.pure.straight-lines.q036",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Straight lines",
    "subtopicId": "al.y1.pure.straight-lines",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "equation",
    "tags": [
      "straight-lines",
      "perpendicular-bisector",
      "general-form"
    ],
    "questionText": "The points $A(-2, 1)$ and $B(4, 5)$ are given. Find the equation of the perpendicular bisector of $AB$, giving your answer in the form $ax + by + c = 0$ where $a$, $b$ and $c$ are integers.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Find the midpoint of $AB$",
          "workingLatex": "M = \\left(\\frac{-2 + 4}{2}, \\frac{1 + 5}{2}\\right) = (1, 3)",
          "explanation": "The perpendicular bisector passes through the centre of the segment, found by averaging the coordinates of $A$ and $B$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find the gradient of $AB$",
          "workingLatex": "m_{AB} = \\frac{5 - 1}{4 - (-2)} = \\frac{4}{6} = \\frac{2}{3}",
          "explanation": "Dividing the rise by the run between the two points gives the direction of the segment.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find the perpendicular gradient",
          "workingLatex": "m = -\\frac{1}{m_{AB}} = -\\frac{3}{2}",
          "explanation": "The bisector meets $AB$ at a right angle, so its gradient is the negative reciprocal of $\\frac{2}{3}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write the point-gradient form through $M$",
          "workingLatex": "y - 3 = -\\frac{3}{2}(x - 1)",
          "explanation": "Using the midpoint $M(1, 3)$ and the perpendicular gradient produces the bisector directly.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Clear the fraction",
          "workingLatex": "2(y - 3) = -3(x - 1)",
          "explanation": "Multiplying both sides by $2$ removes the denominator now, keeping the coefficients as integers for the final form.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Expand both sides",
          "workingLatex": "2y - 6 = -3x + 3",
          "explanation": "Distributing the numbers across each bracket exposes every term so they can be collected together.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Collect all terms on one side",
          "workingLatex": "3x + 2y - 9 = 0",
          "explanation": "Bringing the $x$-term across and gathering the constants gives the required integer general form.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check the midpoint satisfies the equation",
          "workingLatex": "3(1) + 2(3) - 9 = 3 + 6 - 9 = 0",
          "explanation": "Substituting $M(1, 3)$ gives $0$, confirming the bisector passes through the midpoint.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Check the perpendicularity",
          "workingLatex": "\\frac{2}{3} \\times \\left(-\\frac{3}{2}\\right) = -1",
          "explanation": "The line $3x + 2y - 9 = 0$ has gradient $-\\frac{3}{2}$, and its product with $m_{AB}$ is $-1$, confirming the right angle.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the final equation",
          "workingLatex": "3x + 2y - 9 = 0",
          "explanation": "Both checks hold, so this is the perpendicular bisector of $AB$ in integer general form.",
          "diagram": null
        }
      ],
      "finalAnswer": "$3x + 2y - 9 = 0$"
    }
  },
  {
    "id": "al.y1.pure.straight-lines.q037",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Straight lines",
    "subtopicId": "al.y1.pure.straight-lines",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "coordinates",
    "tags": [
      "straight-lines",
      "intersection",
      "simultaneous-equations"
    ],
    "questionText": "Find the coordinates of the point of intersection of the line $y = 2x - 1$ and the line $x + y = 5$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State what the intersection means",
          "workingLatex": "\\text{find } (x, y) \\text{ satisfying both equations}",
          "explanation": "The point where two lines cross is the single pair of values that lies on both lines at once, so we solve the equations simultaneously.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Note the first line gives $y$ directly",
          "workingLatex": "y = 2x - 1",
          "explanation": "The first equation already expresses $y$ in terms of $x$, which makes substitution the most efficient method.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute into the second equation",
          "workingLatex": "x + (2x - 1) = 5",
          "explanation": "Replacing $y$ in $x + y = 5$ with $2x - 1$ leaves a single equation in $x$ only, which we can solve.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Simplify the left-hand side",
          "workingLatex": "3x - 1 = 5",
          "explanation": "Combining the two $x$-terms tidies the equation into a simple linear form.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve for $x$",
          "workingLatex": "3x = 6 \\Rightarrow x = 2",
          "explanation": "Adding $1$ to both sides then dividing by $3$ isolates $x$, giving the $x$-coordinate of the crossing point.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Back-substitute to find $y$",
          "workingLatex": "y = 2(2) - 1 = 3",
          "explanation": "Putting $x = 2$ into the first line gives the matching $y$-value at the intersection.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check in the second equation",
          "workingLatex": "x + y = 2 + 3 = 5",
          "explanation": "The point must also satisfy $x + y = 5$; it gives $5$, confirming it lies on the second line too.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check in the first equation",
          "workingLatex": "2(2) - 1 = 3 = y",
          "explanation": "Substituting back into the first line also matches, so both equations are genuinely satisfied.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the intersection point",
          "workingLatex": "(2, 3)",
          "explanation": "Since the point satisfies both equations, this is where the two lines meet.",
          "diagram": null
        }
      ],
      "finalAnswer": "$(2, 3)$"
    }
  },
  {
    "id": "al.y1.pure.straight-lines.q038",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Straight lines",
    "subtopicId": "al.y1.pure.straight-lines",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "coordinates",
    "tags": [
      "straight-lines",
      "intersection",
      "simultaneous-equations"
    ],
    "questionText": "Two lines have equations $2x + 3y - 12 = 0$ and $x - y - 1 = 0$. Find the coordinates of their point of intersection.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the goal",
          "workingLatex": "\\text{find } (x, y) \\text{ on both lines}",
          "explanation": "The intersection is the single point satisfying both equations, so we solve the pair simultaneously.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Rearrange the second equation",
          "workingLatex": "x - y - 1 = 0 \\Rightarrow x = y + 1",
          "explanation": "The simpler equation is easy to make $x$ the subject of, which sets up a clean substitution.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute into the first equation",
          "workingLatex": "2(y + 1) + 3y - 12 = 0",
          "explanation": "Replacing $x$ with $y + 1$ in the first equation leaves only $y$, reducing the problem to one variable.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Expand the bracket",
          "workingLatex": "2y + 2 + 3y - 12 = 0",
          "explanation": "Multiplying out the bracket separates the terms so they can be gathered together.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Collect like terms",
          "workingLatex": "5y - 10 = 0",
          "explanation": "Combining the $y$-terms and the constants simplifies the equation to a single linear statement.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Solve for $y$",
          "workingLatex": "5y = 10 \\Rightarrow y = 2",
          "explanation": "Dividing both sides by $5$ isolates $y$, giving the $y$-coordinate of the intersection.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Back-substitute to find $x$",
          "workingLatex": "x = y + 1 = 2 + 1 = 3",
          "explanation": "Using $x = y + 1$ with $y = 2$ recovers the matching $x$-coordinate.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check in the first equation",
          "workingLatex": "2(3) + 3(2) - 12 = 6 + 6 - 12 = 0",
          "explanation": "The point gives $0$, confirming it lies on the first line.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Check in the second equation",
          "workingLatex": "3 - 2 - 1 = 0",
          "explanation": "The point also satisfies the second equation, so both lines really pass through it.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the intersection point",
          "workingLatex": "(3, 2)",
          "explanation": "Both checks confirm this is the unique point where the two lines meet.",
          "diagram": null
        }
      ],
      "finalAnswer": "$(3, 2)$"
    }
  },
  {
    "id": "al.y1.pure.straight-lines.q039",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Straight lines",
    "subtopicId": "al.y1.pure.straight-lines",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "description",
    "tags": [
      "straight-lines",
      "perpendicular",
      "intersection"
    ],
    "questionText": "The lines $l_1: y = 2x - 3$ and $l_2: y = -\\frac{1}{2}x + 2$ are given. Show that $l_1$ and $l_2$ are perpendicular, and find the coordinates of the point where they meet.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the gradient of $l_1$",
          "workingLatex": "m_1 = 2",
          "explanation": "Written in $y = mx + c$ form, the coefficient of $x$ in $l_1$ is its gradient.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "State the gradient of $l_2$",
          "workingLatex": "m_2 = -\\frac{1}{2}",
          "explanation": "Likewise, the coefficient of $x$ in $l_2$ gives its gradient.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Multiply the gradients",
          "workingLatex": "m_1 m_2 = 2 \\times \\left(-\\frac{1}{2}\\right) = -1",
          "explanation": "The test for perpendicular lines is whether the product of their gradients equals $-1$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Conclude perpendicularity",
          "workingLatex": "m_1 m_2 = -1 \\Rightarrow l_1 \\perp l_2",
          "explanation": "Because the product is exactly $-1$, the two lines meet at a right angle, which is what we needed to show.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Set the equations equal to find the meeting point",
          "workingLatex": "2x - 3 = -\\frac{1}{2}x + 2",
          "explanation": "At the crossing point both expressions give the same $y$, so equating them locates that $x$-value.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Clear the fraction",
          "workingLatex": "4x - 6 = -x + 4",
          "explanation": "Multiplying every term by $2$ removes the fraction, making the equation easier to solve.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Collect the $x$-terms",
          "workingLatex": "5x = 10 \\Rightarrow x = 2",
          "explanation": "Gathering the $x$-terms on one side and the constants on the other gives the $x$-coordinate of the intersection.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Find the $y$-coordinate",
          "workingLatex": "y = 2(2) - 3 = 1",
          "explanation": "Substituting $x = 2$ into $l_1$ gives the matching $y$-value at the meeting point.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Check using $l_2$",
          "workingLatex": "y = -\\frac{1}{2}(2) + 2 = 1",
          "explanation": "The second line gives the same $y$-value, confirming the point lies on both lines.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the conclusion",
          "workingLatex": "l_1 \\perp l_2 \\text{ and they meet at } (2, 1)",
          "explanation": "The gradient product proves perpendicularity, and the simultaneous solution gives their unique meeting point.",
          "diagram": null
        }
      ],
      "finalAnswer": "The gradients satisfy $m_1 m_2 = -1$, so the lines are perpendicular; they meet at $(2, 1)$."
    }
  },
  {
    "id": "al.y1.pure.straight-lines.q040",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Straight lines",
    "subtopicId": "al.y1.pure.straight-lines",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "description",
    "tags": [
      "straight-lines",
      "parallel",
      "perpendicular"
    ],
    "questionText": "The line $l_1$ has equation $4x - 2y + 6 = 0$ and the line $l_2$ has equation $y = 3x - 4$. Determine whether $l_1$ and $l_2$ are parallel, perpendicular, or neither. Justify your answer.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Rearrange $l_1$ into gradient form",
          "workingLatex": "4x - 2y + 6 = 0 \\Rightarrow 2y = 4x + 6",
          "explanation": "To compare directions we need both lines in $y = mx + c$ form, so we first isolate the $y$-term of $l_1$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Divide to isolate $y$",
          "workingLatex": "y = 2x + 3 \\Rightarrow m_1 = 2",
          "explanation": "Dividing by $2$ gives $l_1$ in standard form, revealing its gradient as $2$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "State the gradient of $l_2$",
          "workingLatex": "y = 3x - 4 \\Rightarrow m_2 = 3",
          "explanation": "The line $l_2$ is already in gradient form, so its gradient is read off directly as $3$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Recall the parallel condition",
          "workingLatex": "\\text{parallel} \\iff m_1 = m_2",
          "explanation": "Parallel lines point in the same direction, which means they must have equal gradients.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Test for parallel",
          "workingLatex": "2 \\neq 3",
          "explanation": "Since the gradients are different, the lines are not parallel.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Recall the perpendicular condition",
          "workingLatex": "\\text{perpendicular} \\iff m_1 m_2 = -1",
          "explanation": "Perpendicular lines meet at a right angle, which happens exactly when their gradients multiply to $-1$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Compute the product of the gradients",
          "workingLatex": "m_1 m_2 = 2 \\times 3 = 6",
          "explanation": "Multiplying the two gradients lets us apply the perpendicularity test.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Test for perpendicular",
          "workingLatex": "6 \\neq -1",
          "explanation": "The product is not $-1$, so the lines are not perpendicular either.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the conclusion",
          "workingLatex": "\\text{neither parallel nor perpendicular}",
          "explanation": "The gradients are unequal and their product is not $-1$, so the lines are neither parallel nor perpendicular.",
          "diagram": null
        }
      ],
      "finalAnswer": "Neither: the gradients are $2$ and $3$, which are unequal (not parallel) and multiply to $6 \\neq -1$ (not perpendicular)."
    }
  },
  {
    "id": "al.y1.pure.straight-lines.q041",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Straight lines",
    "subtopicId": "al.y1.pure.straight-lines",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "equation",
    "tags": [
      "straight-lines",
      "perpendicular",
      "through-origin"
    ],
    "questionText": "Find the equation of the line that passes through the origin and is perpendicular to the line $y = 4x - 5$. Give your answer in the form $y = mx + c$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Read off the gradient of the given line",
          "workingLatex": "y = 4x - 5 \\Rightarrow m_1 = 4",
          "explanation": "In $y = mx + c$ form the coefficient of $x$ is the gradient, so the given line has gradient $4$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Apply the perpendicular gradient rule",
          "workingLatex": "m_1 m_2 = -1",
          "explanation": "For the new line to be perpendicular, the product of the two gradients must equal $-1$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find the perpendicular gradient",
          "workingLatex": "m_2 = -\\frac{1}{m_1} = -\\frac{1}{4}",
          "explanation": "The perpendicular gradient is the negative reciprocal of $4$, giving $-\\frac{1}{4}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Use the fact that the line passes through the origin",
          "workingLatex": "(0, 0) \\text{ lies on the line}",
          "explanation": "The origin is a fixed point on the required line, which pins down the constant term.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Write the general form with the new gradient",
          "workingLatex": "y = -\\frac{1}{4}x + c",
          "explanation": "Starting from $y = mx + c$ with the perpendicular gradient leaves only $c$ to determine.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute the origin to find $c$",
          "workingLatex": "0 = -\\frac{1}{4}(0) + c \\Rightarrow c = 0",
          "explanation": "Putting the origin's coordinates into the equation forces the intercept $c$ to be $0$, as expected for a line through $(0, 0)$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Write the equation",
          "workingLatex": "y = -\\frac{1}{4}x",
          "explanation": "With $c = 0$, the equation simplifies to a line through the origin with the perpendicular gradient.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check the perpendicularity",
          "workingLatex": "4 \\times \\left(-\\frac{1}{4}\\right) = -1",
          "explanation": "The product of the two gradients is $-1$, confirming the lines are perpendicular.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Check the line passes through the origin",
          "workingLatex": "x = 0:\\ y = -\\frac{1}{4}(0) = 0",
          "explanation": "Substituting $x = 0$ gives $y = 0$, confirming the line passes through the origin as required.",
          "diagram": null
        }
      ],
      "finalAnswer": "$y = -\\frac{1}{4}x$"
    }
  },
  {
    "id": "al.y1.pure.straight-lines.q042",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Straight lines",
    "subtopicId": "al.y1.pure.straight-lines",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "description",
    "tags": [
      "straight-lines",
      "collinear",
      "gradient"
    ],
    "questionText": "The points $A(-2, -3)$, $B(1, 3)$ and $C(3, 7)$ are given. Show that $A$, $B$ and $C$ are collinear.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Choose a strategy",
          "workingLatex": "\\text{Show } m_{AB} = m_{BC}",
          "explanation": "Three points lie on one straight line exactly when the segments joining them rise and fall at the same rate. So if the gradient from $A$ to $B$ equals the gradient from $B$ to $C$, all three must sit on a single line through the shared point $B$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall the gradient formula",
          "workingLatex": "m = \\frac{y_2 - y_1}{x_2 - x_1}",
          "explanation": "The gradient measures how much the line climbs vertically for each unit it moves horizontally, which is the change in $y$ divided by the matching change in $x$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute for the gradient of $AB$",
          "workingLatex": "m_{AB} = \\frac{3 - (-3)}{1 - (-2)}",
          "explanation": "Taking $A$ as the first point and $B$ as the second, subtracting the coordinates in the same order keeps the sign of the slope correct.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Simplify $m_{AB}$",
          "workingLatex": "m_{AB} = \\frac{6}{3} = 2",
          "explanation": "The two double-negatives become additions, giving a rise of $6$ over a run of $3$, which reduces to a gradient of $2$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute for the gradient of $BC$",
          "workingLatex": "m_{BC} = \\frac{7 - 3}{3 - 1}",
          "explanation": "Using the same order convention with $B$ first and $C$ second lets the two gradients be compared fairly.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Simplify $m_{BC}$",
          "workingLatex": "m_{BC} = \\frac{4}{2} = 2",
          "explanation": "A rise of $4$ over a run of $2$ reduces to $2$, which is the same slope found for $AB$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Compare the gradients",
          "workingLatex": "m_{AB} = m_{BC} = 2",
          "explanation": "Because both segments have identical gradients and they meet at the common point $B$, they are parts of one and the same straight line.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check with the outer gradient",
          "workingLatex": "m_{AC} = \\frac{7 - (-3)}{3 - (-2)} = \\frac{10}{5} = 2",
          "explanation": "Computing the gradient directly from $A$ to $C$ gives $2$ as well, which confirms the three points share a single slope with no rounding hidden between them.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the conclusion",
          "workingLatex": "\\therefore A, B, C \\text{ are collinear}",
          "explanation": "Equal gradients throughout, together with the shared point, is the precise condition for collinearity, so the demonstration is complete.",
          "diagram": null
        }
      ],
      "finalAnswer": "$m_{AB} = m_{BC} = m_{AC} = 2$, so $A$, $B$ and $C$ are collinear."
    }
  },
  {
    "id": "al.y1.pure.straight-lines.q043",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Straight lines",
    "subtopicId": "al.y1.pure.straight-lines",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "tags": [
      "straight-lines",
      "collinear",
      "line-equation"
    ],
    "questionText": "The points $A(-1, 4)$ and $B(2, -2)$ lie on a straight line $\\ell$. The point $C(5, p)$ also lies on $\\ell$. Find the value of $p$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Choose a strategy",
          "workingLatex": "\\text{Find } \\ell \\text{ from } A, B \\text{, then use } x = 5",
          "explanation": "Since $C$ lies on the same line as $A$ and $B$, finding the equation of that line and substituting $C$'s $x$-value will directly reveal the matching $y$-value $p$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall the gradient formula",
          "workingLatex": "m = \\frac{y_2 - y_1}{x_2 - x_1}",
          "explanation": "The line's steepness is fixed by the two known points, so the gradient is the natural first quantity to pin down.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compute the gradient of $\\ell$",
          "workingLatex": "m = \\frac{-2 - 4}{2 - (-1)} = \\frac{-6}{3} = -2",
          "explanation": "The line falls $6$ units while moving $3$ units to the right, giving a negative gradient of $-2$ that describes the whole line.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write the point-gradient form",
          "workingLatex": "y - y_1 = m(x - x_1)",
          "explanation": "Anchoring the line at a known point with the known gradient captures every point on the line in one relationship.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute $A(-1, 4)$ and $m = -2$",
          "workingLatex": "y - 4 = -2(x + 1)",
          "explanation": "Using $A$ as the anchor point places its coordinates into the template, and $x - (-1)$ becomes $x + 1$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Rearrange into $y = mx + c$ form",
          "workingLatex": "y = -2x + 2",
          "explanation": "Expanding the bracket gives $y - 4 = -2x - 2$, and adding $4$ to both sides isolates $y$, giving a tidy equation to substitute into.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Substitute the $x$-coordinate of $C$",
          "workingLatex": "p = -2(5) + 2",
          "explanation": "Because $C$ lies on the line, its coordinates must satisfy the equation, so replacing $x$ with $5$ yields the corresponding height $p$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Evaluate $p$",
          "workingLatex": "p = -10 + 2 = -8",
          "explanation": "Carrying out the multiplication and addition gives the single value of $p$ that keeps $C$ on the line.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Verify using the gradient $BC$",
          "workingLatex": "m_{BC} = \\frac{-8 - (-2)}{5 - 2} = \\frac{-6}{3} = -2",
          "explanation": "The gradient from $B$ to $C$ comes out as $-2$, matching the line's gradient, which confirms $C(5, -8)$ genuinely lies on $\\ell$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the answer",
          "workingLatex": "p = -8",
          "explanation": "The value satisfies the line equation and the collinearity check, so it is the required coordinate.",
          "diagram": null
        }
      ],
      "finalAnswer": "$p = -8$"
    }
  },
  {
    "id": "al.y1.pure.straight-lines.q044",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Straight lines",
    "subtopicId": "al.y1.pure.straight-lines",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "tags": [
      "straight-lines",
      "parallel",
      "gradient"
    ],
    "questionText": "Line $\\ell_1$ passes through $A(1, 3)$ and $B(4, 9)$. Line $\\ell_2$ passes through $C(-2, 1)$ and $D(2, k)$. Given that $\\ell_1$ is parallel to $\\ell_2$, find the value of $k$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the parallel condition",
          "workingLatex": "\\ell_1 \\parallel \\ell_2 \\Rightarrow m_1 = m_2",
          "explanation": "Parallel lines never meet because they climb at exactly the same rate, so setting their gradients equal is the key relationship to exploit.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall the gradient formula",
          "workingLatex": "m = \\frac{y_2 - y_1}{x_2 - x_1}",
          "explanation": "Each line's gradient is found from its two given points using the change in $y$ over the change in $x$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find the gradient of $\\ell_1$",
          "workingLatex": "m_1 = \\frac{9 - 3}{4 - 1} = \\frac{6}{3} = 2",
          "explanation": "Both coordinates of $\\ell_1$ are known, so its gradient can be computed straight away, giving a fixed target value of $2$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Express the gradient of $\\ell_2$",
          "workingLatex": "m_2 = \\frac{k - 1}{2 - (-2)} = \\frac{k - 1}{4}",
          "explanation": "One coordinate of $\\ell_2$ contains the unknown $k$, so its gradient is left as an expression in $k$ rather than a number.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Apply the parallel condition",
          "workingLatex": "\\frac{k - 1}{4} = 2",
          "explanation": "Equating the two gradients turns the geometric fact that the lines are parallel into an algebraic equation for $k$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Clear the fraction",
          "workingLatex": "k - 1 = 8",
          "explanation": "Multiplying both sides by $4$ removes the denominator and leaves a simple linear equation.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Solve for $k$",
          "workingLatex": "k = 9",
          "explanation": "Adding $1$ to both sides isolates $k$, giving the value that makes the two gradients match.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Verify the gradient of $\\ell_2$",
          "workingLatex": "m_2 = \\frac{9 - 1}{4} = \\frac{8}{4} = 2",
          "explanation": "Substituting $k = 9$ back in gives a gradient of $2$, identical to $\\ell_1$, confirming the lines are indeed parallel.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the answer",
          "workingLatex": "k = 9",
          "explanation": "The verified value is the coordinate of $D$ that guarantees the two lines run parallel.",
          "diagram": null
        }
      ],
      "finalAnswer": "$k = 9$"
    }
  },
  {
    "id": "al.y1.pure.straight-lines.q045",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Straight lines",
    "subtopicId": "al.y1.pure.straight-lines",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "coordinates",
    "tags": [
      "straight-lines",
      "midpoint"
    ],
    "questionText": "The point $M(3, -1)$ is the midpoint of the line segment $AB$. Given that $A$ has coordinates $(-2, 4)$, find the coordinates of $B$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the midpoint formula",
          "workingLatex": "M = \\left( \\frac{x_A + x_B}{2}, \\frac{y_A + y_B}{2} \\right)",
          "explanation": "The midpoint sits exactly halfway along the segment, so each of its coordinates is the average of the matching coordinates of the two endpoints.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Introduce the unknown endpoint",
          "workingLatex": "B = (x, y)",
          "explanation": "Naming the unknown coordinates lets each averaging relationship be written as an equation to solve.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write the $x$-equation",
          "workingLatex": "\\frac{-2 + x}{2} = 3",
          "explanation": "The $x$-coordinate of the midpoint is the average of the two $x$-coordinates, and this is set equal to the known midpoint value $3$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Solve for $x$",
          "workingLatex": "-2 + x = 6 \\Rightarrow x = 8",
          "explanation": "Multiplying by $2$ undoes the average, and adding $2$ isolates $x$, giving the horizontal coordinate of $B$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Write the $y$-equation",
          "workingLatex": "\\frac{4 + y}{2} = -1",
          "explanation": "The same averaging idea applies vertically, with the midpoint's $y$-value of $-1$ on the right.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Solve for $y$",
          "workingLatex": "4 + y = -2 \\Rightarrow y = -6",
          "explanation": "Clearing the denominator and subtracting $4$ gives the vertical coordinate of $B$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the coordinates of $B$",
          "workingLatex": "B = (8, -6)",
          "explanation": "Combining the two solved values gives the position of the second endpoint.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Verify the midpoint",
          "workingLatex": "\\left( \\frac{-2 + 8}{2}, \\frac{4 + (-6)}{2} \\right) = (3, -1)",
          "explanation": "Averaging $A$ and the found $B$ returns exactly $M$, which confirms the endpoint is correct.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the answer",
          "workingLatex": "B(8, -6)",
          "explanation": "The verified coordinates are the required endpoint of the segment.",
          "diagram": null
        }
      ],
      "finalAnswer": "$B = (8, -6)$"
    }
  },
  {
    "id": "al.y1.pure.straight-lines.q046",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Straight lines",
    "subtopicId": "al.y1.pure.straight-lines",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "value",
    "tags": [
      "straight-lines",
      "midpoint",
      "distance"
    ],
    "questionText": "The point $M(3, 4)$ is the midpoint of $AB$, where $A$ has coordinates $(1, 1)$. Find the coordinates of $B$, and hence find the length of $AB$, giving your answer as a simplified surd.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Choose a strategy",
          "workingLatex": "\\text{Find } B \\text{, then use the distance formula}",
          "explanation": "The endpoint $B$ is recovered from the midpoint, and once both endpoints are known the length $AB$ follows directly from the distance formula.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Rearrange the midpoint relationship",
          "workingLatex": "B = 2M - A",
          "explanation": "Because $M$ is the average of $A$ and $B$, doubling $M$ and removing $A$ recovers the opposite endpoint in one step.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find the $x$-coordinate of $B$",
          "workingLatex": "x_B = 2(3) - 1 = 5",
          "explanation": "Applying the rule to the horizontal coordinates gives the $x$-value of $B$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find the $y$-coordinate of $B$",
          "workingLatex": "y_B = 2(4) - 1 = 7",
          "explanation": "The same rule on the vertical coordinates gives the $y$-value of $B$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State the coordinates of $B$",
          "workingLatex": "B = (5, 7)",
          "explanation": "The two components together fix the location of the second endpoint.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Recall the distance formula",
          "workingLatex": "AB = \\sqrt{(x_B - x_A)^2 + (y_B - y_A)^2}",
          "explanation": "The length of a segment is the hypotenuse of the right triangle formed by its horizontal and vertical separations, which is what the distance formula computes.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Substitute the coordinates",
          "workingLatex": "AB = \\sqrt{(5 - 1)^2 + (7 - 1)^2}",
          "explanation": "Placing the coordinates of $A$ and $B$ into the formula sets up the arithmetic for the length.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Evaluate inside the root",
          "workingLatex": "AB = \\sqrt{16 + 36} = \\sqrt{52}",
          "explanation": "Squaring the horizontal gap of $4$ and the vertical gap of $6$ and adding them gives $52$ under the root.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Simplify the surd",
          "workingLatex": "\\sqrt{52} = \\sqrt{4 \\times 13} = 2\\sqrt{13}",
          "explanation": "Splitting off the largest square factor $4$ lets its root come outside, leaving the surd in its simplest exact form.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the answer",
          "workingLatex": "B = (5, 7), \\quad AB = 2\\sqrt{13}",
          "explanation": "The endpoint and the simplified exact length together answer both parts of the question.",
          "diagram": null
        }
      ],
      "finalAnswer": "$B = (5, 7)$ and $AB = 2\\sqrt{13}$"
    }
  },
  {
    "id": "al.y1.pure.straight-lines.q047",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Straight lines",
    "subtopicId": "al.y1.pure.straight-lines",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "equation",
    "tags": [
      "straight-lines",
      "modelling",
      "line-equation"
    ],
    "questionText": "A taxi firm charges a fixed booking fee plus a cost for each kilometre travelled. A journey of $3\\text{ km}$ costs $\\pounds 7.50$ and a journey of $7\\text{ km}$ costs $\\pounds 13.50$. The cost $C$ pounds for a journey of $d$ km is modelled by $C = md + c$. Find $m$ and $c$, and interpret each in context.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up the model",
          "workingLatex": "C = md + c",
          "explanation": "A cost that grows steadily with distance is linear, so it fits the straight-line form with $m$ the cost per kilometre and $c$ the fixed part.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the two data points",
          "workingLatex": "(3, 7.50) \\text{ and } (7, 13.50)",
          "explanation": "Each stated journey gives a pair of a distance and its cost, and two such pairs are exactly enough to fix a straight line.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find the gradient",
          "workingLatex": "m = \\frac{13.50 - 7.50}{7 - 3}",
          "explanation": "The gradient is the extra cost divided by the extra distance, which measures how much each additional kilometre adds.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate the gradient",
          "workingLatex": "m = \\frac{6}{4} = 1.5",
          "explanation": "An extra $\\pounds 6$ spread over $4$ extra kilometres works out at $\\pounds 1.50$ per kilometre.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Interpret the gradient",
          "workingLatex": "m = 1.5 \\Rightarrow \\pounds 1.50 \\text{ per km}",
          "explanation": "The gradient is the rate of change of cost with distance, so it represents the price charged for each kilometre travelled.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute a point to find $c$",
          "workingLatex": "7.50 = 1.5(3) + c",
          "explanation": "With the gradient known, feeding in either data point produces a single equation for the remaining unknown $c$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Solve for $c$",
          "workingLatex": "7.50 = 4.50 + c \\Rightarrow c = 3",
          "explanation": "Subtracting the distance-based charge of $\\pounds 4.50$ from the total leaves the fixed part of the fare.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Interpret the intercept",
          "workingLatex": "c = 3 \\Rightarrow \\pounds 3 \\text{ booking fee}",
          "explanation": "The intercept is the cost when $d = 0$, so it is the fixed booking fee charged before any distance is travelled.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Write the full model",
          "workingLatex": "C = 1.5d + 3",
          "explanation": "Combining the rate and the fixed fee gives the complete equation linking cost to distance.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Verify with the second point",
          "workingLatex": "C = 1.5(7) + 3 = 13.50",
          "explanation": "Substituting the $7\\text{ km}$ journey reproduces the stated cost of $\\pounds 13.50$, confirming the model matches both data points.",
          "diagram": null
        }
      ],
      "finalAnswer": "$C = 1.5d + 3$; the gradient $1.5$ is the cost of $\\pounds 1.50$ per km, and $c = 3$ is the fixed $\\pounds 3$ booking fee."
    }
  },
  {
    "id": "al.y1.pure.straight-lines.q048",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Straight lines",
    "subtopicId": "al.y1.pure.straight-lines",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "value",
    "tags": [
      "straight-lines",
      "modelling",
      "line-equation"
    ],
    "questionText": "A metal rod is heated. Its temperature $T$ (in $^{\\circ}\\text{C}$) rises linearly with the heating time $t$ minutes. After $2$ minutes the temperature is $24^{\\circ}\\text{C}$, and after $5$ minutes it is $39^{\\circ}\\text{C}$. Find $T$ in terms of $t$, predict the temperature after $7$ minutes, and state one limitation of the model.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up the model",
          "workingLatex": "T = mt + c",
          "explanation": "A temperature rising at a steady rate is linear in time, so it fits the straight-line form with $m$ the rate of heating and $c$ the starting temperature.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the two data points",
          "workingLatex": "(2, 24) \\text{ and } (5, 39)",
          "explanation": "Each reading pairs a time with a temperature, and two such pairs determine the line completely.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find the gradient",
          "workingLatex": "m = \\frac{39 - 24}{5 - 2}",
          "explanation": "The gradient is the change in temperature divided by the change in time, measuring how fast the rod heats up.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate the gradient",
          "workingLatex": "m = \\frac{15}{3} = 5",
          "explanation": "A rise of $15^{\\circ}\\text{C}$ over $3$ minutes gives a heating rate of $5^{\\circ}\\text{C}$ per minute.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute a point to find $c$",
          "workingLatex": "24 = 5(2) + c",
          "explanation": "With the rate known, using the first reading gives a single equation for the starting temperature.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Solve for $c$",
          "workingLatex": "24 = 10 + c \\Rightarrow c = 14",
          "explanation": "Removing the $10^{\\circ}\\text{C}$ gained in the first two minutes leaves the temperature at time zero.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Write the full model",
          "workingLatex": "T = 5t + 14",
          "explanation": "Combining the rate and starting temperature gives the complete equation for the rod's temperature.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Predict the temperature at $t = 7$",
          "workingLatex": "T = 5(7) + 14 = 49",
          "explanation": "Substituting the required time into the model gives the forecast temperature after $7$ minutes.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Verify with the second data point",
          "workingLatex": "T = 5(5) + 14 = 39",
          "explanation": "Checking against the $5$-minute reading reproduces $39^{\\circ}\\text{C}$, confirming the model fits the data.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State a limitation",
          "workingLatex": "\\text{Model valid only for small } t",
          "explanation": "A constant rate implies the temperature climbs without bound, but a real rod eventually stops heating as it nears its melting point or reaches thermal balance, so the model only holds over a limited time.",
          "diagram": null
        }
      ],
      "finalAnswer": "$T = 5t + 14$; at $t = 7$, $T = 49^{\\circ}\\text{C}$. Limitation: the temperature cannot rise indefinitely, so the linear model is only valid for a limited range of $t$."
    }
  },
  {
    "id": "al.y1.pure.straight-lines.q049",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Straight lines",
    "subtopicId": "al.y1.pure.straight-lines",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "value",
    "tags": [
      "straight-lines",
      "modelling",
      "line-equation"
    ],
    "questionText": "A water tank is being drained at a constant rate of $15$ litres per minute. After $4$ minutes the tank contains $240$ litres. Taking $t$ as the time in minutes since draining began, write down a model for the volume $V$ litres, and find how long it takes for the tank to empty.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up the model",
          "workingLatex": "V = V_0 - 15t",
          "explanation": "The volume falls at a steady rate, so it is linear in time with a negative gradient equal to the draining rate and an intercept equal to the starting volume $V_0$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Interpret the gradient",
          "workingLatex": "m = -15",
          "explanation": "Losing $15$ litres each minute means the volume decreases, so the rate enters the model as a gradient of $-15$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Use the given reading",
          "workingLatex": "240 = V_0 - 15(4)",
          "explanation": "The known state of $240$ litres at $4$ minutes gives an equation for the only remaining unknown, the starting volume.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Solve for the starting volume",
          "workingLatex": "240 = V_0 - 60 \\Rightarrow V_0 = 300",
          "explanation": "Adding back the $60$ litres already drained in the first four minutes recovers the full starting volume.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Write the full model",
          "workingLatex": "V = 300 - 15t",
          "explanation": "Combining the starting volume and the draining rate gives the complete equation for the volume at any time.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Interpret the model",
          "workingLatex": "V_0 = 300, \\ \\text{rate} = 15 \\text{ L/min}",
          "explanation": "The intercept $300$ is the volume when draining began, and the coefficient $15$ is how many litres leave each minute.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Set the volume to zero",
          "workingLatex": "0 = 300 - 15t",
          "explanation": "The tank is empty when no water remains, which is the moment $V$ reaches $0$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Solve for the time",
          "workingLatex": "15t = 300 \\Rightarrow t = 20",
          "explanation": "Rearranging isolates $t$, giving the number of minutes until the tank is drained completely.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Verify the given reading",
          "workingLatex": "V(4) = 300 - 15(4) = 240",
          "explanation": "Substituting $t = 4$ reproduces the stated $240$ litres, confirming the model is consistent with the data.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the answer",
          "workingLatex": "V = 300 - 15t, \\quad t = 20 \\text{ min}",
          "explanation": "The model together with the emptying time answers both parts of the question.",
          "diagram": null
        }
      ],
      "finalAnswer": "$V = 300 - 15t$; the tank empties after $t = 20$ minutes."
    }
  },
  {
    "id": "al.y1.pure.straight-lines.q050",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Straight lines",
    "subtopicId": "al.y1.pure.straight-lines",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "value",
    "tags": [
      "straight-lines",
      "distance",
      "perimeter"
    ],
    "questionText": "A triangle has vertices $A(0, 0)$, $B(2, 4)$ and $C(6, 2)$. Find the exact perimeter of triangle $ABC$, giving your answer in the form $a\\sqrt{5} + b\\sqrt{10}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Choose a strategy",
          "workingLatex": "P = AB + BC + CA",
          "explanation": "The perimeter is the total distance around the triangle, so it is the sum of the three side lengths, each found with the distance formula.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall the distance formula",
          "workingLatex": "d = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}",
          "explanation": "Each side is the hypotenuse of a right triangle built from its horizontal and vertical separations, which the distance formula measures.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find $AB$",
          "workingLatex": "AB = \\sqrt{(2 - 0)^2 + (4 - 0)^2} = \\sqrt{4 + 16}",
          "explanation": "Using the coordinates of $A$ and $B$ gives the squared gaps, which add to $20$ under the root.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Simplify $AB$",
          "workingLatex": "AB = \\sqrt{20} = 2\\sqrt{5}",
          "explanation": "Taking out the square factor $4$ leaves the length in its simplest surd form.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find $BC$",
          "workingLatex": "BC = \\sqrt{(6 - 2)^2 + (2 - 4)^2} = \\sqrt{16 + 4}",
          "explanation": "Applying the formula to $B$ and $C$ gives squared gaps that also add to $20$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Simplify $BC$",
          "workingLatex": "BC = \\sqrt{20} = 2\\sqrt{5}",
          "explanation": "This side simplifies to the same surd as $AB$, so the triangle is isosceles on these two sides.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Find $CA$",
          "workingLatex": "CA = \\sqrt{(0 - 6)^2 + (0 - 2)^2} = \\sqrt{36 + 4}",
          "explanation": "Using $C$ and $A$ gives squared gaps summing to $40$ under the root.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Simplify $CA$",
          "workingLatex": "CA = \\sqrt{40} = 2\\sqrt{10}",
          "explanation": "Extracting the square factor $4$ leaves $2\\sqrt{10}$ as the simplest exact form.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Add the side lengths",
          "workingLatex": "P = 2\\sqrt{5} + 2\\sqrt{5} + 2\\sqrt{10}",
          "explanation": "The perimeter is the sum of the three simplified side lengths just found.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Combine like surds",
          "workingLatex": "P = 4\\sqrt{5} + 2\\sqrt{10}",
          "explanation": "The two $2\\sqrt{5}$ terms are like surds and add to $4\\sqrt{5}$, while $2\\sqrt{10}$ is different and stays separate, giving the exact perimeter.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P = 4\\sqrt{5} + 2\\sqrt{10}$"
    }
  },
  {
    "id": "al.y1.pure.straight-lines.q051",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Straight lines",
    "subtopicId": "al.y1.pure.straight-lines",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "value",
    "tags": [
      "straight-lines",
      "triangle-area",
      "shoelace"
    ],
    "questionText": "A triangle has vertices $A(1,1)$, $B(7,3)$ and $C(3,9)$. Find the exact area of triangle $ABC$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the vertices",
          "workingLatex": "A(1,1),\\ B(7,3),\\ C(3,9)",
          "explanation": "Listing the three coordinate pairs clearly before starting keeps every substitution organised and prevents mixing up x and y values later.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall the shoelace area formula",
          "workingLatex": "\\text{Area}=\\tfrac12\\left|x_A(y_B-y_C)+x_B(y_C-y_A)+x_C(y_A-y_B)\\right|",
          "explanation": "This formula gives the area directly from the coordinates. It works because it sums signed areas of trapezia under each edge, and the modulus removes any sign coming from the direction we travel round the triangle.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compute the first y-difference",
          "workingLatex": "y_B-y_C=3-9=-6",
          "explanation": "Each vertex is paired with the difference of the other two vertices' y-values, so we work these out first to feed cleanly into the formula.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Compute the second y-difference",
          "workingLatex": "y_C-y_A=9-1=8",
          "explanation": "This is the y-difference that will multiply $x_B$. Keeping the cyclic order A, B, C consistent avoids sign errors.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Compute the third y-difference",
          "workingLatex": "y_A-y_B=1-3=-2",
          "explanation": "This final difference multiplies $x_C$, completing the three pieces the formula needs.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Multiply the first term",
          "workingLatex": "x_A(y_B-y_C)=1\\times(-6)=-6",
          "explanation": "Multiplying each x-coordinate by its matching y-difference builds the signed contributions that the shoelace sum combines.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Multiply the second term",
          "workingLatex": "x_B(y_C-y_A)=7\\times 8=56",
          "explanation": "The large positive value here reflects that B is far to the right while C sits well above A.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Multiply the third term",
          "workingLatex": "x_C(y_A-y_B)=3\\times(-2)=-6",
          "explanation": "The negative sign is expected because A lies below B, and the formula tracks that orientation.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Add the three terms",
          "workingLatex": "-6+56-6=44",
          "explanation": "Summing the signed contributions gives twice the signed area of the triangle.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Apply the modulus and halve",
          "workingLatex": "\\text{Area}=\\tfrac12|44|=22",
          "explanation": "Halving undoes the doubling built into the formula, and the modulus guarantees a positive area regardless of vertex ordering.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "State the area",
          "workingLatex": "\\text{Area}=22",
          "explanation": "This is the area in square units, a clean integer which is a good early sign the working is correct.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Set up a base-height check",
          "workingLatex": "m_{AB}=\\frac{3-1}{7-1}=\\frac13\\ \\Rightarrow\\ x-3y+2=0",
          "explanation": "An independent method confirms the answer. Taking AB as the base, we first find its equation so we can measure the perpendicular height from C.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Find the base length",
          "workingLatex": "|AB|=\\sqrt{6^2+2^2}=\\sqrt{40}=2\\sqrt{5}\\cdot\\sqrt{2}=2\\sqrt{10}",
          "explanation": "The base length is the distance between A and B, found with Pythagoras on the horizontal and vertical gaps.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Find the perpendicular height from C",
          "workingLatex": "d=\\frac{|3-27+2|}{\\sqrt{1^2+(-3)^2}}=\\frac{22}{\\sqrt{10}}",
          "explanation": "The height is the perpendicular distance from C to line AB, using the standard point-to-line distance formula.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "Confirm the area",
          "workingLatex": "\\tfrac12\\times 2\\sqrt{10}\\times\\frac{22}{\\sqrt{10}}=22\\ \\checkmark",
          "explanation": "The square roots cancel to leave exactly 22, matching the shoelace result and confirming the answer with full confidence.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\text{Area}=22\\text{ square units}$"
    }
  },
  {
    "id": "al.y1.pure.straight-lines.q052",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Straight lines",
    "subtopicId": "al.y1.pure.straight-lines",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "value",
    "tags": [
      "straight-lines",
      "triangle-area",
      "base-height"
    ],
    "questionText": "A triangle has vertices $A(0,1)$, $B(0,9)$ and $C(5,4)$. Using a base-and-height method, find the area of triangle $ABC$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the vertices",
          "workingLatex": "A(0,1),\\ B(0,9),\\ C(5,4)",
          "explanation": "Writing the coordinates out first lets us look for a feature that makes the area easy to compute.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Notice A and B lie on the y-axis",
          "workingLatex": "x_A=x_B=0",
          "explanation": "Both A and B have x-coordinate zero, so the side AB lies exactly along the y-axis. A vertical base like this makes the height especially simple to read off.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Choose AB as the base",
          "workingLatex": "\\text{base}=AB",
          "explanation": "Selecting the side that lies on an axis is the key idea, because its length and the perpendicular height then need no distance formula.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find the base length",
          "workingLatex": "|AB|=|9-1|=8",
          "explanation": "Because A and B share the same x-coordinate, the distance between them is just the difference of their y-coordinates.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Interpret the height",
          "workingLatex": "\\text{height}=\\text{horizontal distance from }C\\text{ to the }y\\text{-axis}",
          "explanation": "The height is measured perpendicular to the base. Since the base is vertical, the perpendicular direction is horizontal, so the height is simply how far C sits from the y-axis.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Read off the height",
          "workingLatex": "\\text{height}=|x_C|=5",
          "explanation": "C has x-coordinate 5, so it lies 5 units horizontally from the y-axis, giving the perpendicular height directly.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Write the area formula",
          "workingLatex": "\\text{Area}=\\tfrac12\\times\\text{base}\\times\\text{height}",
          "explanation": "The standard triangle area formula applies now that we have a clean base and its matching perpendicular height.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Substitute the values",
          "workingLatex": "\\text{Area}=\\tfrac12\\times 8\\times 5",
          "explanation": "Inserting base 8 and height 5 turns the geometry into a simple arithmetic calculation.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Compute the area",
          "workingLatex": "\\text{Area}=20",
          "explanation": "Half of 40 is 20, giving a clean integer area in square units.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Set up a shoelace check",
          "workingLatex": "\\text{Area}=\\tfrac12\\left|x_A(y_B-y_C)+x_B(y_C-y_A)+x_C(y_A-y_B)\\right|",
          "explanation": "Verifying with the coordinate area formula guards against a mistake in identifying the base or height.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Substitute the coordinates",
          "workingLatex": "=\\tfrac12\\left|0(9-4)+0(4-1)+5(1-9)\\right|",
          "explanation": "The two zero x-coordinates make most terms vanish, which is exactly why placing a side on the axis is so convenient.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Simplify inside the modulus",
          "workingLatex": "=\\tfrac12\\left|5\\times(-8)\\right|=\\tfrac12\\times 40",
          "explanation": "Only the term from C survives, and its magnitude is 40.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Evaluate the check",
          "workingLatex": "=20\\ \\checkmark",
          "explanation": "The shoelace method returns the same value, confirming the base-height calculation.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Conclude",
          "workingLatex": "\\text{Area}=20",
          "explanation": "Both independent methods agree, so the area of the triangle is 20 square units.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\text{Area}=20\\text{ square units}$"
    }
  },
  {
    "id": "al.y1.pure.straight-lines.q053",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Straight lines",
    "subtopicId": "al.y1.pure.straight-lines",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "value",
    "tags": [
      "straight-lines",
      "area",
      "quadrilateral",
      "shoelace"
    ],
    "questionText": "A quadrilateral has vertices $A(0,0)$, $B(6,0)$, $C(8,5)$ and $D(2,7)$, listed in order around its boundary. Find the area of the quadrilateral $ABCD$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "List the vertices in order",
          "workingLatex": "A(0,0),\\ B(6,0),\\ C(8,5),\\ D(2,7)",
          "explanation": "The shoelace formula for a polygon only works if the vertices are taken in order around the boundary, so we confirm the cyclic order first.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "State the polygon shoelace formula",
          "workingLatex": "\\text{Area}=\\tfrac12\\left|\\sum (x_i y_{i+1}-x_{i+1}y_i)\\right|",
          "explanation": "This extends the triangle formula to any polygon: each edge contributes a cross-product term, and summing them gives twice the enclosed area.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Edge A to B",
          "workingLatex": "x_A y_B-x_B y_A=0\\times 0-6\\times 0=0",
          "explanation": "Because A and B both sit on the x-axis, this edge contributes nothing to the running total.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Edge B to C",
          "workingLatex": "x_B y_C-x_C y_B=6\\times 5-8\\times 0=30",
          "explanation": "Each term compares how one vertex's x pairs with the next vertex's y, capturing the area swept as we move along this edge.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Edge C to D",
          "workingLatex": "x_C y_D-x_D y_C=8\\times 7-2\\times 5=56-10=46",
          "explanation": "This is the largest contribution, reflecting the wide, tall span covered by the edge from C to D.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Edge D to A",
          "workingLatex": "x_D y_A-x_A y_D=2\\times 0-0\\times 7=0",
          "explanation": "Closing the loop back to the origin gives another zero because A sits at the origin.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Add the four terms",
          "workingLatex": "0+30+46+0=76",
          "explanation": "Summing the edge contributions gives twice the signed area of the quadrilateral.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Apply the modulus and halve",
          "workingLatex": "\\text{Area}=\\tfrac12|76|=38",
          "explanation": "Halving removes the built-in doubling, and the modulus ensures the area is positive whatever direction we traversed.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Plan an independent check",
          "workingLatex": "ABCD = \\triangle ABC + \\triangle ACD",
          "explanation": "Splitting the quadrilateral along the diagonal AC lets us verify the total by adding two separate triangle areas.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Area of triangle ABC",
          "workingLatex": "\\tfrac12|0(0-5)+6(5-0)+8(0-0)|=\\tfrac12|30|=15",
          "explanation": "Applying the triangle shoelace formula to A, B and C gives the first piece.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Area of triangle ACD",
          "workingLatex": "\\tfrac12|0(5-7)+8(7-0)+2(0-5)|=\\tfrac12|56-10|=23",
          "explanation": "The second triangle uses A, C and D, the remaining half of the quadrilateral.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Add the two triangle areas",
          "workingLatex": "15+23=38",
          "explanation": "The two pieces together must reconstruct the whole quadrilateral.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Confirm the two methods agree",
          "workingLatex": "38=38\\ \\checkmark",
          "explanation": "Both the direct polygon formula and the split-into-triangles method give 38, confirming the result.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Sanity-check the size",
          "workingLatex": "\\text{bounding box}=8\\times 7=56>38",
          "explanation": "The quadrilateral fits inside an 8 by 7 rectangle of area 56, so an area of 38 is sensibly less than that outer bound.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "State the area",
          "workingLatex": "\\text{Area}=38",
          "explanation": "With two methods and a size check all agreeing, the area is 38 square units.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\text{Area}=38\\text{ square units}$"
    }
  },
  {
    "id": "al.y1.pure.straight-lines.q054",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Straight lines",
    "subtopicId": "al.y1.pure.straight-lines",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "value",
    "tags": [
      "straight-lines",
      "perpendicular-distance",
      "point-to-line"
    ],
    "questionText": "Find the shortest distance from the point $P(4,5)$ to the line with equation $x+2y-3=0$, giving your answer as a simplified surd.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the point and line",
          "workingLatex": "P(4,5),\\quad x+2y-3=0",
          "explanation": "The shortest distance from a point to a line is measured along the perpendicular, and the line is already in the tidy form $ax+by+c=0$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify the coefficients",
          "workingLatex": "a=1,\\ b=2,\\ c=-3",
          "explanation": "Reading off a, b and c from the equation lets us use them directly in the distance formula.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Recall the distance formula",
          "workingLatex": "d=\\dfrac{|ax_0+by_0+c|}{\\sqrt{a^2+b^2}}",
          "explanation": "This formula measures the perpendicular gap: the numerator tests how far P is from satisfying the line's equation, and dividing by the length of the normal vector converts that into an actual distance.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute into the numerator",
          "workingLatex": "ax_0+by_0+c=1(4)+2(5)-3",
          "explanation": "We put the coordinates of P into the left-hand side of the line equation to measure how far off the line P is.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate the numerator",
          "workingLatex": "=4+10-3=11",
          "explanation": "The non-zero result confirms P does not lie on the line, and its size feeds the top of the fraction.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Take the modulus",
          "workingLatex": "|11|=11",
          "explanation": "Distance cannot be negative, so we take the absolute value of the numerator.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Compute the denominator",
          "workingLatex": "\\sqrt{a^2+b^2}=\\sqrt{1^2+2^2}=\\sqrt{5}",
          "explanation": "This is the length of the line's normal vector, which scales the numerator into a true perpendicular distance.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Form the distance",
          "workingLatex": "d=\\dfrac{11}{\\sqrt{5}}",
          "explanation": "Dividing the modulus by the normal length gives the exact shortest distance, though it is not yet in simplest surd form.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Rationalise the denominator",
          "workingLatex": "d=\\dfrac{11}{\\sqrt{5}}\\times\\dfrac{\\sqrt{5}}{\\sqrt{5}}=\\dfrac{11\\sqrt{5}}{5}",
          "explanation": "Multiplying top and bottom by root 5 clears the surd from the denominator, the conventional simplified form.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Sanity-check numerically",
          "workingLatex": "\\dfrac{11\\sqrt{5}}{5}\\approx 4.92",
          "explanation": "A decimal value near 4.9 is plausible for a point sitting a few units off the line, giving confidence in the exact answer.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Verify via the foot of the perpendicular",
          "workingLatex": "m_{\\text{line}}=-\\tfrac12\\ \\Rightarrow\\ m_{\\perp}=2",
          "explanation": "An independent check builds the perpendicular from P. The line has gradient minus one half, so the perpendicular has gradient 2.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Find the foot of the perpendicular",
          "workingLatex": "y=2x-3,\\ x+2(2x-3)=3\\Rightarrow x=\\tfrac95,\\ y=\\tfrac35",
          "explanation": "Solving the perpendicular through P against the given line locates the closest point on the line, the foot F.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Confirm the distance",
          "workingLatex": "PF=\\sqrt{\\left(\\tfrac{11}{5}\\right)^2+\\left(\\tfrac{22}{5}\\right)^2}=\\sqrt{\\tfrac{605}{25}}=\\dfrac{11\\sqrt{5}}{5}\\ \\checkmark",
          "explanation": "Measuring straight from P to the foot F reproduces the same surd, confirming the perpendicular distance exactly.",
          "diagram": null
        }
      ],
      "finalAnswer": "$d=\\dfrac{11\\sqrt{5}}{5}$"
    }
  },
  {
    "id": "al.y1.pure.straight-lines.q055",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Straight lines",
    "subtopicId": "al.y1.pure.straight-lines",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "value",
    "tags": [
      "straight-lines",
      "perpendicular-distance",
      "foot-of-perpendicular"
    ],
    "questionText": "The line $L$ has equation $y=2x-1$. By first finding the foot of the perpendicular from $P(4,2)$ to $L$, find the shortest distance from $P$ to $L$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the line and point",
          "workingLatex": "L:\\ y=2x-1,\\quad P(4,2)",
          "explanation": "The shortest distance is the length of the perpendicular from P to L, so the plan is to locate where that perpendicular meets the line.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Read off the gradient of L",
          "workingLatex": "m_L=2",
          "explanation": "The line is in the form $y=mx+c$, so its gradient is the coefficient of x.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find the perpendicular gradient",
          "workingLatex": "m_{\\perp}=-\\dfrac{1}{2}",
          "explanation": "Perpendicular gradients multiply to give minus one, so the perpendicular gradient is the negative reciprocal of 2.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write the perpendicular through P",
          "workingLatex": "y-2=-\\tfrac12(x-4)",
          "explanation": "Using the point-gradient form through P with the perpendicular gradient gives the line along which we measure the distance.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify the perpendicular",
          "workingLatex": "y=-\\tfrac12 x+4",
          "explanation": "Expanding and tidying puts the perpendicular into slope-intercept form ready to solve against L.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Set the two lines equal",
          "workingLatex": "2x-1=-\\tfrac12 x+4",
          "explanation": "The foot of the perpendicular is where L and the perpendicular meet, found by equating their y-values.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Clear the fraction",
          "workingLatex": "4x-2=-x+8",
          "explanation": "Multiplying through by 2 removes the fraction and makes the equation easier to solve.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Solve for x",
          "workingLatex": "5x=10\\ \\Rightarrow\\ x=2",
          "explanation": "Collecting the x-terms and constants gives the x-coordinate of the foot.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Find the y-coordinate",
          "workingLatex": "y=2(2)-1=3",
          "explanation": "Substituting back into L gives the matching y-value, so the foot of the perpendicular is $F(2,3)$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Set up the distance PF",
          "workingLatex": "PF=\\sqrt{(4-2)^2+(2-3)^2}",
          "explanation": "The shortest distance is simply the length of the segment from P to the foot F, found with Pythagoras.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Evaluate the distance",
          "workingLatex": "PF=\\sqrt{4+1}=\\sqrt{5}",
          "explanation": "Squaring the horizontal and vertical gaps and adding gives 5 under the root, a clean surd.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Rewrite L in general form for a check",
          "workingLatex": "2x-y-1=0",
          "explanation": "Putting L into the form $ax+by+c=0$ lets us confirm the distance with the standard formula.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Apply the distance formula",
          "workingLatex": "d=\\dfrac{|2(4)-2-1|}{\\sqrt{2^2+(-1)^2}}=\\dfrac{5}{\\sqrt{5}}=\\sqrt{5}\\ \\checkmark",
          "explanation": "The formula gives exactly the same value, confirming the perpendicular distance found via the foot.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Sanity-check the size",
          "workingLatex": "\\sqrt{5}\\approx 2.24",
          "explanation": "A distance of about 2.2 units is reasonable for a point sitting just off a steep line, so the answer is sensible.",
          "diagram": null
        }
      ],
      "finalAnswer": "$d=\\sqrt{5}\\ \\text{(foot of perpendicular }F(2,3))$"
    }
  },
  {
    "id": "al.y1.pure.straight-lines.q056",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Straight lines",
    "subtopicId": "al.y1.pure.straight-lines",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "coordinates",
    "tags": [
      "straight-lines",
      "perpendicular-bisector",
      "axis-intersection"
    ],
    "questionText": "The points are $A(1,2)$ and $B(5,8)$. The perpendicular bisector of $AB$ meets the $y$-axis at the point $Q$. Find the coordinates of $Q$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the endpoints and goal",
          "workingLatex": "A(1,2),\\ B(5,8);\\ \\text{find perp. bisector}\\cap y\\text{-axis}",
          "explanation": "The perpendicular bisector cuts AB at right angles through its midpoint, and we want where that line crosses the y-axis.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall the two defining properties",
          "workingLatex": "\\text{through }M(\\text{midpoint}),\\ \\perp AB",
          "explanation": "Every point on the perpendicular bisector is equidistant from A and B, and the line itself passes through the midpoint at right angles to AB.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find the midpoint of AB",
          "workingLatex": "M=\\left(\\frac{1+5}{2},\\frac{2+8}{2}\\right)=(3,5)",
          "explanation": "Averaging the coordinates of A and B gives the point the bisector must pass through.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find the gradient of AB",
          "workingLatex": "m_{AB}=\\frac{8-2}{5-1}=\\frac{6}{4}=\\frac{3}{2}",
          "explanation": "We need the gradient of AB so we can turn it into the perpendicular gradient for the bisector.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find the perpendicular gradient",
          "workingLatex": "m_{\\perp}=-\\frac{2}{3}",
          "explanation": "The negative reciprocal of three halves gives the gradient of any line at right angles to AB.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Confirm perpendicularity",
          "workingLatex": "\\frac{3}{2}\\times\\left(-\\frac{2}{3}\\right)=-1",
          "explanation": "The product of the two gradients is minus one, verifying the bisector really is perpendicular to AB.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Write the bisector equation",
          "workingLatex": "y-5=-\\frac{2}{3}(x-3)",
          "explanation": "Using point-gradient form through the midpoint with the perpendicular gradient gives the perpendicular bisector.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Expand the equation",
          "workingLatex": "y=-\\frac{2}{3}x+2+5",
          "explanation": "Distributing the gradient over the bracket prepares the equation for simplification.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Simplify to slope-intercept form",
          "workingLatex": "y=-\\frac{2}{3}x+7",
          "explanation": "Combining the constants gives a clean equation, and the y-intercept term already hints at the answer.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Set x = 0 for the y-axis",
          "workingLatex": "x=0\\ \\Rightarrow\\ y=-\\frac{2}{3}(0)+7=7",
          "explanation": "Points on the y-axis have x-coordinate zero, so substituting zero gives the crossing height.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "State the intersection point",
          "workingLatex": "Q=(0,7)",
          "explanation": "This is where the perpendicular bisector meets the y-axis.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Check the distance to A",
          "workingLatex": "|QA|=\\sqrt{(0-1)^2+(7-2)^2}=\\sqrt{26}",
          "explanation": "Any point on the perpendicular bisector should be the same distance from A and B, so we test this property.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Check the distance to B",
          "workingLatex": "|QB|=\\sqrt{(0-5)^2+(7-8)^2}=\\sqrt{26}",
          "explanation": "The equal distances confirm Q genuinely lies on the perpendicular bisector, verifying the answer.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Conclude",
          "workingLatex": "Q=(0,7)",
          "explanation": "The perpendicular bisector of AB meets the y-axis at the point $(0,7)$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$Q=(0,7)$"
    }
  },
  {
    "id": "al.y1.pure.straight-lines.q057",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Straight lines",
    "subtopicId": "al.y1.pure.straight-lines",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "coordinates",
    "tags": [
      "straight-lines",
      "perpendicular-bisector",
      "equidistant"
    ],
    "questionText": "Find the coordinates of the point on the line $x+y=6$ that is equidistant from the points $A(1,1)$ and $B(5,3)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the line and points",
          "workingLatex": "x+y=6,\\quad A(1,1),\\ B(5,3)",
          "explanation": "We want a point that lies on the given line and is the same distance from A as from B.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify the key idea",
          "workingLatex": "\\text{equidistant from }A,B\\ \\Leftrightarrow\\ \\text{on perp. bisector of }AB",
          "explanation": "The set of all points equidistant from A and B is exactly the perpendicular bisector of AB, so the required point is where that bisector meets the given line.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find the midpoint of AB",
          "workingLatex": "M=\\left(\\frac{1+5}{2},\\frac{1+3}{2}\\right)=(3,2)",
          "explanation": "The perpendicular bisector passes through the midpoint of AB, found by averaging coordinates.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find the gradient of AB",
          "workingLatex": "m_{AB}=\\frac{3-1}{5-1}=\\frac{1}{2}",
          "explanation": "The gradient of AB is needed to get the perpendicular gradient of the bisector.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find the perpendicular gradient",
          "workingLatex": "m_{\\perp}=-2",
          "explanation": "The negative reciprocal of one half is minus two, the gradient of the perpendicular bisector.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Write the perpendicular bisector",
          "workingLatex": "y-2=-2(x-3)",
          "explanation": "Point-gradient form through the midpoint with the perpendicular gradient gives the bisector.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Simplify the bisector",
          "workingLatex": "y=-2x+8",
          "explanation": "Expanding and tidying gives the bisector in slope-intercept form ready to solve with the line.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Rearrange the given line",
          "workingLatex": "y=6-x",
          "explanation": "Writing the given line as y in terms of x lets us substitute and find the intersection.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Set the equations equal",
          "workingLatex": "6-x=-2x+8",
          "explanation": "Equating the two expressions for y locates where the line and the perpendicular bisector cross.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Solve for x",
          "workingLatex": "6-x+2x=8\\ \\Rightarrow\\ x=2",
          "explanation": "Collecting terms gives the x-coordinate of the required point.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Find y",
          "workingLatex": "y=6-2=4",
          "explanation": "Substituting back into the line equation gives the matching y-coordinate.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "State the point",
          "workingLatex": "(2,4)",
          "explanation": "This is the intersection of the line with the perpendicular bisector.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Check it lies on the line",
          "workingLatex": "2+4=6\\ \\checkmark",
          "explanation": "The coordinates satisfy $x+y=6$, confirming the point is on the required line.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Check equal distances",
          "workingLatex": "\\sqrt{(2-1)^2+(4-1)^2}=\\sqrt{10}=\\sqrt{(2-5)^2+(4-3)^2}",
          "explanation": "The distances to A and B are both root ten, confirming the point is genuinely equidistant.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "Conclude",
          "workingLatex": "(2,4)",
          "explanation": "The point on the line equidistant from A and B is $(2,4)$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$(2,4)$"
    }
  },
  {
    "id": "al.y1.pure.straight-lines.q058",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Straight lines",
    "subtopicId": "al.y1.pure.straight-lines",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "description",
    "tags": [
      "straight-lines",
      "right-angle",
      "triangle-area"
    ],
    "questionText": "The points are $A(1,1)$, $B(5,3)$ and $C(3,7)$. Show that triangle $ABC$ is right-angled, and hence find its area.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the vertices",
          "workingLatex": "A(1,1),\\ B(5,3),\\ C(3,7)",
          "explanation": "To test for a right angle we will compare the gradients of the sides, so we start from the coordinates.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "State the strategy",
          "workingLatex": "m_1 m_2=-1\\ \\Rightarrow\\ \\text{right angle}",
          "explanation": "Two sides meet at a right angle exactly when the product of their gradients is minus one, so we compute the gradients of each side.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Gradient of AB",
          "workingLatex": "m_{AB}=\\frac{3-1}{5-1}=\\frac{1}{2}",
          "explanation": "This gradient describes the direction of side AB.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Gradient of BC",
          "workingLatex": "m_{BC}=\\frac{7-3}{3-5}=\\frac{4}{-2}=-2",
          "explanation": "This gradient describes the direction of side BC, which shares vertex B with AB.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Gradient of AC",
          "workingLatex": "m_{AC}=\\frac{7-1}{3-1}=\\frac{6}{2}=3",
          "explanation": "Computing the third gradient lets us be sure which pair of sides is perpendicular.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Test AB against BC",
          "workingLatex": "m_{AB}\\times m_{BC}=\\frac{1}{2}\\times(-2)=-1",
          "explanation": "The product of the gradients of AB and BC is exactly minus one, which is the condition for perpendicular lines.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Conclude the right angle",
          "workingLatex": "\\angle ABC=90^\\circ",
          "explanation": "Since AB and BC are perpendicular and both meet at B, the triangle has a right angle at B.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Identify the legs",
          "workingLatex": "\\text{legs}=AB\\text{ and }BC",
          "explanation": "In a right-angled triangle the two sides enclosing the right angle serve as base and height, so their lengths give the area directly.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Length of AB",
          "workingLatex": "|AB|=\\sqrt{(5-1)^2+(3-1)^2}=\\sqrt{20}=2\\sqrt{5}",
          "explanation": "Pythagoras on the horizontal and vertical gaps gives the length of the first leg.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Length of BC",
          "workingLatex": "|BC|=\\sqrt{(3-5)^2+(7-3)^2}=\\sqrt{20}=2\\sqrt{5}",
          "explanation": "The same method gives the second leg, which happens to be equal in length here.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Apply the area formula",
          "workingLatex": "\\text{Area}=\\tfrac12|AB||BC|=\\tfrac12(2\\sqrt5)(2\\sqrt5)",
          "explanation": "With the right angle at B, the area is half the product of the two legs.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Evaluate the area",
          "workingLatex": "=\\tfrac12\\times 4\\times 5=10",
          "explanation": "Multiplying the surds gives 20, and halving leaves a clean area of 10.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Verify with shoelace",
          "workingLatex": "\\tfrac12|1(3-7)+5(7-1)+3(1-3)|",
          "explanation": "The coordinate area formula gives an independent check that does not rely on the right angle.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Evaluate the check",
          "workingLatex": "=\\tfrac12|-4+30-6|=\\tfrac12(20)=10\\ \\checkmark",
          "explanation": "The shoelace result matches, confirming the area of 10 square units.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "Conclude",
          "workingLatex": "\\angle B=90^\\circ,\\ \\text{Area}=10",
          "explanation": "The triangle is right-angled at B and has area 10 square units.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\text{Right-angled at }B;\\ \\text{Area}=10\\text{ square units}$"
    }
  },
  {
    "id": "al.y1.pure.straight-lines.q059",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Straight lines",
    "subtopicId": "al.y1.pure.straight-lines",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "coordinates",
    "tags": [
      "straight-lines",
      "perpendicular-distance",
      "reflection"
    ],
    "questionText": "The line $L$ has equation $x+y=4$ and $P$ is the point $(3,5)$. Find the coordinates of the point on $L$ nearest to $P$, and hence find the exact distance from $P$ to $L$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the line and point",
          "workingLatex": "L:\\ x+y=4,\\quad P(3,5)",
          "explanation": "The nearest point on L to P is the foot of the perpendicular from P, so we build that perpendicular first.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find the gradient of L",
          "workingLatex": "y=4-x\\ \\Rightarrow\\ m_L=-1",
          "explanation": "Rearranging L into slope-intercept form shows its gradient is minus one.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find the perpendicular gradient",
          "workingLatex": "m_{\\perp}=1",
          "explanation": "The negative reciprocal of minus one is plus one, the gradient of the perpendicular from P.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write the perpendicular through P",
          "workingLatex": "y-5=1(x-3)\\ \\Rightarrow\\ y=x+2",
          "explanation": "Using point-gradient form through P with gradient 1 gives the line along which the shortest distance is measured.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute into L",
          "workingLatex": "x+(x+2)=4",
          "explanation": "Putting the perpendicular's y into the equation of L finds where the two lines meet, the foot of the perpendicular.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Solve for x",
          "workingLatex": "2x+2=4\\ \\Rightarrow\\ x=1",
          "explanation": "Simplifying gives the x-coordinate of the foot.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Find y",
          "workingLatex": "y=1+2=3",
          "explanation": "Substituting back gives the y-coordinate, so the foot is $F(1,3)$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Identify the nearest point",
          "workingLatex": "F=(1,3)",
          "explanation": "The foot of the perpendicular is precisely the point on L closest to P, which is what the question asks for.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Set up the distance PF",
          "workingLatex": "PF=\\sqrt{(3-1)^2+(5-3)^2}",
          "explanation": "The shortest distance from P to L is the length of the segment from P to the nearest point F.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Evaluate the distance",
          "workingLatex": "PF=\\sqrt{4+4}=\\sqrt{8}=2\\sqrt{2}",
          "explanation": "Adding the squared gaps gives 8 under the root, which simplifies to two root two.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Verify with the distance formula",
          "workingLatex": "d=\\dfrac{|3+5-4|}{\\sqrt{1^2+1^2}}=\\dfrac{4}{\\sqrt{2}}=2\\sqrt{2}\\ \\checkmark",
          "explanation": "Writing L as $x+y-4=0$ and applying the point-to-line formula reproduces the same exact distance.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Optionally locate the reflection",
          "workingLatex": "P'=2F-P=(2(1)-3,\\ 2(3)-5)=(-1,1)",
          "explanation": "Reflecting P in L doubles the foot and subtracts P; the foot should be the midpoint of P and its image.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Check F is the midpoint of P and P'",
          "workingLatex": "\\left(\\frac{3+(-1)}{2},\\frac{5+1}{2}\\right)=(1,3)\\ \\checkmark",
          "explanation": "The midpoint of P and its reflection returns F, confirming the perpendicular geometry is consistent.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Conclude",
          "workingLatex": "\\text{nearest point }(1,3),\\ d=2\\sqrt{2}",
          "explanation": "The point on L nearest to P is $(1,3)$, and the exact shortest distance is two root two.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\text{Nearest point }(1,3),\\ \\text{distance }2\\sqrt{2}$"
    }
  },
  {
    "id": "al.y1.pure.straight-lines.q060",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Straight lines",
    "subtopicId": "al.y1.pure.straight-lines",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "value",
    "tags": [
      "straight-lines",
      "triangle-area",
      "intercepts"
    ],
    "questionText": "The line with equation $3x+4y=24$ crosses the coordinate axes. Find the area of the triangle formed by this line and the two coordinate axes.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the line and goal",
          "workingLatex": "3x+4y=24",
          "explanation": "The line together with the x-axis and y-axis bounds a triangle whose corners are the two axis intercepts and the origin.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Explain the triangle",
          "workingLatex": "\\text{vertices: }(a,0),(0,b),(0,0)",
          "explanation": "One vertex sits where the line meets the x-axis, another where it meets the y-axis, and the right-angled corner is at the origin where the axes cross.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find the x-intercept",
          "workingLatex": "y=0:\\ 3x=24",
          "explanation": "The line crosses the x-axis where y is zero, so we set y to zero in the equation.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Solve for x",
          "workingLatex": "x=8\\ \\Rightarrow\\ (8,0)",
          "explanation": "Dividing gives the x-intercept, one corner of the triangle.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find the y-intercept",
          "workingLatex": "x=0:\\ 4y=24",
          "explanation": "The line crosses the y-axis where x is zero, so we set x to zero in the equation.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Solve for y",
          "workingLatex": "y=6\\ \\Rightarrow\\ (0,6)",
          "explanation": "Dividing gives the y-intercept, a second corner of the triangle.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Identify the third vertex",
          "workingLatex": "(0,0)",
          "explanation": "The two axes meet at the origin, which forms the third corner of the enclosed triangle.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Identify the base",
          "workingLatex": "\\text{base}=8",
          "explanation": "The side along the x-axis runs from the origin to $(8,0)$, giving a base of length 8.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Identify the height",
          "workingLatex": "\\text{height}=6",
          "explanation": "The side along the y-axis runs from the origin to $(0,6)$, giving a height of length 6, perpendicular to the base.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Note the right angle",
          "workingLatex": "\\text{axes meet at }90^\\circ",
          "explanation": "Because the two axes are perpendicular, the base and height meet at a right angle, so the simple base-height area formula applies directly.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Apply the area formula",
          "workingLatex": "\\text{Area}=\\tfrac12\\times 8\\times 6",
          "explanation": "The area of a right-angled triangle is half the product of the two perpendicular sides.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Compute the area",
          "workingLatex": "\\text{Area}=24",
          "explanation": "Half of 48 is 24, a clean integer area.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Verify with shoelace",
          "workingLatex": "\\tfrac12|0(0-6)+8(6-0)+0(0-0)|=\\tfrac12(48)=24\\ \\checkmark",
          "explanation": "The coordinate area formula on the three vertices confirms the same value.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Conclude",
          "workingLatex": "\\text{Area}=24",
          "explanation": "The triangle bounded by the line and the two axes has area 24 square units.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\text{Area}=24\\text{ square units}$"
    }
  },
  {
    "id": "al.y1.pure.straight-lines.q061",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Straight lines",
    "subtopicId": "al.y1.pure.straight-lines",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "description",
    "tags": [
      "straight-lines",
      "parallelogram",
      "gradients"
    ],
    "questionText": "The quadrilateral $ABCD$ has vertices $A(1,2)$, $B(5,3)$, $C(7,7)$ and $D(3,6)$, taken in order. Prove that $ABCD$ is a parallelogram, and confirm your result using the diagonals.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the strategy",
          "workingLatex": "\\text{Show } AB \\parallel DC \\text{ and } AD \\parallel BC",
          "explanation": "A quadrilateral is a parallelogram when both pairs of opposite sides are parallel. Parallel lines have equal gradients, so comparing gradients of opposite sides settles the matter.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Gradient of AB",
          "workingLatex": "m_{AB}=\\frac{3-2}{5-1}=\\frac{1}{4}",
          "explanation": "The gradient measures how steeply a segment rises. We compute it as the change in $y$ divided by the change in $x$ between $A$ and $B$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Gradient of DC",
          "workingLatex": "m_{DC}=\\frac{7-6}{7-3}=\\frac{1}{4}",
          "explanation": "We use the opposite side $DC$ (from $D$ to $C$) so that we compare the pair of sides that face each other in the quadrilateral.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Compare the first pair",
          "workingLatex": "m_{AB}=m_{DC}=\\tfrac{1}{4}\\;\\Rightarrow\\; AB \\parallel DC",
          "explanation": "Equal gradients mean the two sides never meet, so $AB$ is parallel to $DC$. That is the first pair of opposite sides accounted for.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Gradient of AD",
          "workingLatex": "m_{AD}=\\frac{6-2}{3-1}=\\frac{4}{2}=2",
          "explanation": "Now we turn to the second pair of opposite sides, starting with $AD$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Gradient of BC",
          "workingLatex": "m_{BC}=\\frac{7-3}{7-5}=\\frac{4}{2}=2",
          "explanation": "Computing the gradient of the facing side $BC$ lets us compare it directly with $AD$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Compare the second pair",
          "workingLatex": "m_{AD}=m_{BC}=2\\;\\Rightarrow\\; AD \\parallel BC",
          "explanation": "Again the gradients match, so the second pair of opposite sides is also parallel.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "First conclusion",
          "workingLatex": "AB\\parallel DC \\text{ and } AD\\parallel BC",
          "explanation": "Both pairs of opposite sides are parallel, which is exactly the definition of a parallelogram.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Midpoint of diagonal AC",
          "workingLatex": "M_{AC}=\\left(\\frac{1+7}{2},\\frac{2+7}{2}\\right)=\\left(4,\\tfrac{9}{2}\\right)",
          "explanation": "As an independent check we use the diagonal property. If the diagonals bisect each other they share a common midpoint, so we find the midpoint of $AC$ first.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Midpoint of diagonal BD",
          "workingLatex": "M_{BD}=\\left(\\frac{5+3}{2},\\frac{3+6}{2}\\right)=\\left(4,\\tfrac{9}{2}\\right)",
          "explanation": "We compute the midpoint of the other diagonal $BD$ to compare with the midpoint of $AC$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Compare midpoints",
          "workingLatex": "M_{AC}=M_{BD}=\\left(4,\\tfrac{9}{2}\\right)",
          "explanation": "The two diagonals meet at the same point, so each diagonal cuts the other exactly in half. Diagonals that bisect each other are another certificate of a parallelogram.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Confirm consistency",
          "workingLatex": "\\text{Both tests agree: } ABCD \\text{ is a parallelogram}",
          "explanation": "The gradient test and the diagonal test give the same conclusion, so the result is secure.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Conclusion",
          "workingLatex": "\\therefore\\; ABCD \\text{ is a parallelogram}",
          "explanation": "Having shown both pairs of opposite sides parallel, and that the diagonals bisect each other, the proof is complete.",
          "diagram": null
        }
      ],
      "finalAnswer": "$ABCD$ is a parallelogram: $AB\\parallel DC$ (gradient $\\tfrac14$), $AD\\parallel BC$ (gradient $2$), and the diagonals share midpoint $(4,\\tfrac92)$."
    }
  },
  {
    "id": "al.y1.pure.straight-lines.q062",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Straight lines",
    "subtopicId": "al.y1.pure.straight-lines",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "description",
    "tags": [
      "straight-lines",
      "rectangle",
      "perpendicular-lines"
    ],
    "questionText": "The quadrilateral $ABCD$ has vertices $A(0,0)$, $B(6,3)$, $C(4,7)$ and $D(-2,4)$, taken in order. Prove that $ABCD$ is a rectangle. Show also that it is not a square.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the strategy",
          "workingLatex": "\\text{Rectangle} = \\text{parallelogram} + \\text{one right angle}",
          "explanation": "A rectangle is a parallelogram with a right angle. So first we prove it is a parallelogram, then we check one interior angle is $90^{\\circ}$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Gradient of AB",
          "workingLatex": "m_{AB}=\\frac{3-0}{6-0}=\\frac{1}{2}",
          "explanation": "We begin the parallelogram test by finding the gradient of side $AB$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Gradient of DC and compare",
          "workingLatex": "m_{DC}=\\frac{7-4}{4-(-2)}=\\frac{3}{6}=\\frac{1}{2}=m_{AB}",
          "explanation": "The opposite side $DC$ has the same gradient, so $AB\\parallel DC$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Gradient of AD",
          "workingLatex": "m_{AD}=\\frac{4-0}{-2-0}=\\frac{4}{-2}=-2",
          "explanation": "Now we handle the second pair of opposite sides, starting with $AD$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Gradient of BC and compare",
          "workingLatex": "m_{BC}=\\frac{7-3}{4-6}=\\frac{4}{-2}=-2=m_{AD}",
          "explanation": "The facing side $BC$ has the same gradient, so $AD\\parallel BC$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Parallelogram established",
          "workingLatex": "AB\\parallel DC,\\; AD\\parallel BC \\Rightarrow \\text{parallelogram}",
          "explanation": "Both pairs of opposite sides are parallel, so $ABCD$ is a parallelogram.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Test the angle at A",
          "workingLatex": "m_{AB}\\times m_{AD}=\\tfrac{1}{2}\\times(-2)=-1",
          "explanation": "Two lines are perpendicular exactly when the product of their gradients is $-1$. We test the two sides meeting at $A$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Right angle confirmed",
          "workingLatex": "AB \\perp AD \\Rightarrow \\angle DAB = 90^{\\circ}",
          "explanation": "The product being $-1$ shows the adjacent sides at $A$ meet at a right angle.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Conclude rectangle",
          "workingLatex": "\\text{parallelogram} + 90^{\\circ} \\Rightarrow \\text{rectangle}",
          "explanation": "In a parallelogram opposite angles are equal and co-interior angles sum to $180^{\\circ}$, so one right angle forces all four. Hence $ABCD$ is a rectangle.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Length of AB",
          "workingLatex": "AB=\\sqrt{6^2+3^2}=\\sqrt{45}=3\\sqrt{5}",
          "explanation": "To decide whether it is a square we compare adjacent side lengths, using the distance formula on $AB$ first.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Length of AD",
          "workingLatex": "AD=\\sqrt{(-2)^2+4^2}=\\sqrt{20}=2\\sqrt{5}",
          "explanation": "We measure the adjacent side $AD$ in the same way.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Compare adjacent sides",
          "workingLatex": "3\\sqrt{5}\\neq 2\\sqrt{5} \\Rightarrow AB \\neq AD",
          "explanation": "A square needs all four sides equal. Since two adjacent sides differ, the shape cannot be a square.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Conclusion",
          "workingLatex": "\\therefore ABCD \\text{ is a rectangle, not a square}",
          "explanation": "It is a parallelogram with a right angle (a rectangle) whose adjacent sides have different lengths, ruling out a square.",
          "diagram": null
        }
      ],
      "finalAnswer": "$ABCD$ is a rectangle: opposite sides parallel and $AB\\perp AD$ (gradients $\\tfrac12$ and $-2$). Since $AB=3\\sqrt5\\neq AD=2\\sqrt5$, it is not a square."
    }
  },
  {
    "id": "al.y1.pure.straight-lines.q063",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Straight lines",
    "subtopicId": "al.y1.pure.straight-lines",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "value",
    "tags": [
      "straight-lines",
      "rhombus",
      "area"
    ],
    "questionText": "The quadrilateral $ABCD$ has vertices $A(0,0)$, $B(3,4)$, $C(8,4)$ and $D(5,0)$, taken in order. Prove that $ABCD$ is a rhombus, and find its area.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the strategy",
          "workingLatex": "\\text{Rhombus} = \\text{parallelogram with all sides equal}",
          "explanation": "A rhombus is a parallelogram whose four sides are equal in length. We will show the sides are all equal and that the shape is a parallelogram, then use the diagonals to find the area.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Length AB",
          "workingLatex": "AB=\\sqrt{3^2+4^2}=\\sqrt{25}=5",
          "explanation": "We measure each side with the distance formula, starting from $A$ to $B$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Length BC",
          "workingLatex": "BC=\\sqrt{(8-3)^2+(4-4)^2}=\\sqrt{25}=5",
          "explanation": "The next side $BC$ is horizontal, and its length also works out to $5$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Length CD",
          "workingLatex": "CD=\\sqrt{(5-8)^2+(0-4)^2}=\\sqrt{25}=5",
          "explanation": "Continuing round the quadrilateral, side $CD$ measures $5$ as well.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Length DA",
          "workingLatex": "DA=\\sqrt{(0-5)^2+(0-0)^2}=\\sqrt{25}=5",
          "explanation": "The final side $DA$ closes the shape and is also $5$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "All sides equal",
          "workingLatex": "AB=BC=CD=DA=5",
          "explanation": "All four sides share the same length, which is the key rhombus condition.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Confirm parallelogram",
          "workingLatex": "m_{AB}=\\tfrac{4}{3}=m_{DC},\\quad m_{AD}=0=m_{BC}",
          "explanation": "Equal opposite gradients confirm both pairs of opposite sides are parallel, so it is a parallelogram. A parallelogram with equal sides is a rhombus.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Rhombus established",
          "workingLatex": "\\Rightarrow ABCD \\text{ is a rhombus}",
          "explanation": "The equal sides together with the parallelogram property give a rhombus.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Gradient of diagonal AC",
          "workingLatex": "m_{AC}=\\frac{4-0}{8-0}=\\frac{1}{2}",
          "explanation": "For the area we use the diagonals. First we check they are perpendicular, which is a hallmark of a rhombus, starting with the gradient of $AC$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Gradient of diagonal BD",
          "workingLatex": "m_{BD}=\\frac{0-4}{5-3}=\\frac{-4}{2}=-2",
          "explanation": "We find the gradient of the other diagonal $BD$ to test perpendicularity.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Diagonals perpendicular",
          "workingLatex": "m_{AC}\\times m_{BD}=\\tfrac{1}{2}\\times(-2)=-1",
          "explanation": "The product of the diagonal gradients is $-1$, so the diagonals cross at right angles, exactly as a rhombus requires.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Length of diagonal AC",
          "workingLatex": "AC=\\sqrt{8^2+4^2}=\\sqrt{80}=4\\sqrt{5}",
          "explanation": "The rhombus area equals half the product of the diagonals, so we need their lengths. Here is diagonal $AC$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Length of diagonal BD",
          "workingLatex": "BD=\\sqrt{2^2+(-4)^2}=\\sqrt{20}=2\\sqrt{5}",
          "explanation": "And here is the length of diagonal $BD$.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Compute the area",
          "workingLatex": "\\text{Area}=\\tfrac{1}{2}\\,AC\\cdot BD=\\tfrac{1}{2}(4\\sqrt5)(2\\sqrt5)=\\tfrac{1}{2}(40)=20",
          "explanation": "Because the diagonals are perpendicular, the area is half their product. The $\\sqrt5\\times\\sqrt5=5$ term makes the arithmetic clean.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "Conclusion",
          "workingLatex": "ABCD \\text{ is a rhombus, area } =20",
          "explanation": "All sides equal (a rhombus) and the diagonals give an area of $20$ square units.",
          "diagram": null
        }
      ],
      "finalAnswer": "$ABCD$ is a rhombus (all sides $=5$, diagonals perpendicular); area $=20$ square units."
    }
  },
  {
    "id": "al.y1.pure.straight-lines.q064",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Straight lines",
    "subtopicId": "al.y1.pure.straight-lines",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "coordinates",
    "tags": [
      "straight-lines",
      "parallelogram",
      "midpoint"
    ],
    "questionText": "Three vertices of a parallelogram $PQRS$, taken in order, are $P(1,2)$, $Q(5,1)$ and $R(8,5)$. Find the coordinates of the fourth vertex $S$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the structure",
          "workingLatex": "PQRS:\\; \\text{opposite sides } PQ\\,\\&\\,SR,\\; QR\\,\\&\\,PS",
          "explanation": "Because the vertices are listed in order, $PR$ and $QS$ are the diagonals. Naming the sides carefully avoids putting $S$ in the wrong place.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "State the key property",
          "workingLatex": "\\text{Diagonals of a parallelogram bisect each other}",
          "explanation": "The diagonals $PR$ and $QS$ cross at their common midpoint. This single fact pins down $S$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Midpoint of diagonal PR",
          "workingLatex": "M=\\left(\\frac{1+8}{2},\\frac{2+5}{2}\\right)=\\left(\\tfrac{9}{2},\\tfrac{7}{2}\\right)",
          "explanation": "We know both ends of diagonal $PR$, so we can find the centre of the parallelogram directly.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Set up the QS midpoint",
          "workingLatex": "\\left(\\frac{5+S_x}{2},\\frac{1+S_y}{2}\\right)=\\left(\\tfrac{9}{2},\\tfrac{7}{2}\\right)",
          "explanation": "The midpoint of the other diagonal $QS$ must equal the same centre $M$, giving two equations for the unknown coordinates of $S$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve for the x-coordinate",
          "workingLatex": "\\frac{5+S_x}{2}=\\frac{9}{2}\\Rightarrow 5+S_x=9\\Rightarrow S_x=4",
          "explanation": "Matching the $x$-coordinates of the two midpoints gives $S_x$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Solve for the y-coordinate",
          "workingLatex": "\\frac{1+S_y}{2}=\\frac{7}{2}\\Rightarrow 1+S_y=7\\Rightarrow S_y=6",
          "explanation": "Matching the $y$-coordinates gives $S_y$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State S",
          "workingLatex": "S=(4,6)",
          "explanation": "Combining the two coordinates gives the fourth vertex.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Independent check using vectors",
          "workingLatex": "\\vec{PQ}=(4,-1)",
          "explanation": "For a second, independent check we use the side vectors. In a parallelogram $\\vec{PQ}=\\vec{SR}$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Recover S from the side vector",
          "workingLatex": "S=R-\\vec{PQ}=(8-4,\\,5-(-1))=(4,6)",
          "explanation": "Since $\\vec{SR}=R-S$ equals $\\vec{PQ}$, rearranging gives $S=R-\\vec{PQ}$, which agrees with the midpoint answer.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Check the other pair of sides",
          "workingLatex": "\\vec{QR}=(3,4)",
          "explanation": "We verify the remaining pair of opposite sides is consistent, starting with $\\vec{QR}$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Compare with PS",
          "workingLatex": "\\vec{PS}=S-P=(4-1,\\,6-2)=(3,4)=\\vec{QR}",
          "explanation": "The vector $\\vec{PS}$ matches $\\vec{QR}$, so this pair of opposite sides is equal and parallel too.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Confirm parallelogram",
          "workingLatex": "\\vec{PQ}=\\vec{SR},\\; \\vec{QR}=\\vec{PS}",
          "explanation": "Both pairs of opposite sides are equal vectors, confirming $PQRS$ with $S(4,6)$ really is a parallelogram.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Conclusion",
          "workingLatex": "\\therefore S=(4,6)",
          "explanation": "The midpoint method and the vector method agree, so the fourth vertex is secure.",
          "diagram": null
        }
      ],
      "finalAnswer": "$S=(4,6)$"
    }
  },
  {
    "id": "al.y1.pure.straight-lines.q065",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Straight lines",
    "subtopicId": "al.y1.pure.straight-lines",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "coordinates",
    "tags": [
      "straight-lines",
      "perpendicular-distance",
      "foot-of-perpendicular"
    ],
    "questionText": "The line $L$ has equation $y=2x-5$. The point $P$ has coordinates $(8,1)$. Find the coordinates of the foot of the perpendicular from $P$ to $L$, and hence the perpendicular distance from $P$ to $L$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the plan",
          "workingLatex": "P \\to \\text{perpendicular} \\to \\text{foot } F \\to \\text{distance } PF",
          "explanation": "The foot of the perpendicular is where the line from $P$ meeting $L$ at right angles lands on $L$. Once we have that point, the distance is just $PF$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Gradient of L",
          "workingLatex": "m_L=2",
          "explanation": "The equation is already in the form $y=mx+c$, so the gradient of $L$ is read off directly.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Perpendicular gradient",
          "workingLatex": "m_\\perp=-\\frac{1}{2}",
          "explanation": "The perpendicular gradient is the negative reciprocal of $2$, because perpendicular gradients multiply to $-1$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Equation of the perpendicular",
          "workingLatex": "y-1=-\\tfrac{1}{2}(x-8)\\;\\Rightarrow\\; y=-\\tfrac{1}{2}x+5",
          "explanation": "We build the line through $P(8,1)$ with the perpendicular gradient; the foot of the perpendicular lies on this line.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Set the lines equal",
          "workingLatex": "2x-5=-\\tfrac{1}{2}x+5",
          "explanation": "The foot $F$ lies on both $L$ and the perpendicular, so we solve the two equations simultaneously by equating the $y$-values.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Clear the fraction",
          "workingLatex": "4x-10=-x+10",
          "explanation": "Multiplying every term by $2$ removes the fraction and keeps the arithmetic tidy.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Solve for x",
          "workingLatex": "5x=20\\Rightarrow x=4",
          "explanation": "Collecting the $x$ terms and constants gives the $x$-coordinate of the foot.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Find y and the foot",
          "workingLatex": "y=2(4)-5=3\\;\\Rightarrow\\; F(4,3)",
          "explanation": "Substituting $x=4$ back into $L$ gives the $y$-coordinate, completing the foot of the perpendicular.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Check F lies on L",
          "workingLatex": "2(4)-5=3\\;\\checkmark",
          "explanation": "We confirm $F$ satisfies the equation of $L$, guarding against an arithmetic slip.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Check F lies on the perpendicular",
          "workingLatex": "-\\tfrac{1}{2}(4)+5=3\\;\\checkmark",
          "explanation": "It should also satisfy the perpendicular line's equation, which it does.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Distance PF set-up",
          "workingLatex": "PF=\\sqrt{(8-4)^2+(1-3)^2}",
          "explanation": "The perpendicular distance is simply the length of $PF$, found with the distance formula.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Evaluate the distance",
          "workingLatex": "PF=\\sqrt{16+4}=\\sqrt{20}=2\\sqrt{5}",
          "explanation": "Squaring the differences, adding and simplifying the surd gives the distance.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Cross-check with the formula",
          "workingLatex": "d=\\frac{|2(8)-1-5|}{\\sqrt{2^2+(-1)^2}}=\\frac{10}{\\sqrt5}=2\\sqrt5",
          "explanation": "Writing $L$ as $2x-y-5=0$ and using the point-to-line distance formula reproduces the same value, confirming the answer.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Conclusion",
          "workingLatex": "F(4,3),\\quad PF=2\\sqrt5",
          "explanation": "The foot of the perpendicular is $(4,3)$ and the perpendicular distance is $2\\sqrt5$.",
          "diagram": null
        }
      ],
      "finalAnswer": "Foot $F=(4,3)$; perpendicular distance $=2\\sqrt5$ units."
    }
  },
  {
    "id": "al.y1.pure.straight-lines.q066",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Straight lines",
    "subtopicId": "al.y1.pure.straight-lines",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "coordinates",
    "tags": [
      "straight-lines",
      "reflection",
      "perpendicular-lines"
    ],
    "questionText": "The point $P$ has coordinates $(-1,4)$. Find the coordinates of the image $P'$ when $P$ is reflected in the line $L:\\,y=x+1$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the method",
          "workingLatex": "P \\to \\text{foot } F \\to P'=2F-P",
          "explanation": "Under a reflection the mirror line is the perpendicular bisector of $PP'$. So the foot of the perpendicular from $P$ is the midpoint of $P$ and its image.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Gradients",
          "workingLatex": "m_L=1\\Rightarrow m_\\perp=-1",
          "explanation": "The mirror line has gradient $1$, so the perpendicular from $P$ has gradient $-1$, the negative reciprocal.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Equation of the perpendicular",
          "workingLatex": "y-4=-1(x-(-1))\\;\\Rightarrow\\; y=-x+3",
          "explanation": "We draw the perpendicular from $P(-1,4)$ towards the mirror; the foot lies on this line.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Intersect with L",
          "workingLatex": "x+1=-x+3",
          "explanation": "The foot $F$ is where the perpendicular meets $L$, so we equate the two equations.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve for x",
          "workingLatex": "2x=2\\Rightarrow x=1",
          "explanation": "Collecting terms gives the $x$-coordinate of the foot.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find the foot",
          "workingLatex": "y=1+1=2\\;\\Rightarrow\\; F(1,2)",
          "explanation": "Substituting into $L$ gives the $y$-coordinate, so the foot is $F(1,2)$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check F on L",
          "workingLatex": "1+1=2\\;\\checkmark",
          "explanation": "We verify $F$ satisfies the mirror line's equation before using it.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Use the midpoint relation",
          "workingLatex": "F=\\tfrac{1}{2}(P+P')\\;\\Rightarrow\\; P'=2F-P",
          "explanation": "Since $F$ is the midpoint of $P$ and $P'$, rearranging the midpoint formula gives the image directly.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "x-coordinate of image",
          "workingLatex": "x'=2(1)-(-1)=3",
          "explanation": "Doubling the foot's $x$ and subtracting $P$'s $x$ gives the image $x$-coordinate.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "y-coordinate of image",
          "workingLatex": "y'=2(2)-4=0",
          "explanation": "The same rule on the $y$-coordinates gives the image $y$-coordinate.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "State the image",
          "workingLatex": "P'=(3,0)",
          "explanation": "Combining the coordinates gives the reflected point.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Check the midpoint",
          "workingLatex": "\\left(\\frac{-1+3}{2},\\frac{4+0}{2}\\right)=(1,2)=F\\;\\checkmark",
          "explanation": "The midpoint of $P$ and $P'$ returns the foot $F$, exactly as a reflection requires.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Check perpendicularity",
          "workingLatex": "m_{PP'}=\\frac{0-4}{3-(-1)}=-1=m_\\perp\\;\\checkmark",
          "explanation": "The segment $PP'$ has gradient $-1$, perpendicular to the mirror, confirming the geometry is right.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Conclusion",
          "workingLatex": "\\therefore P'=(3,0)",
          "explanation": "Both checks pass, so the reflection of $P$ in $L$ is $(3,0)$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P'=(3,0)$"
    }
  },
  {
    "id": "al.y1.pure.straight-lines.q067",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Straight lines",
    "subtopicId": "al.y1.pure.straight-lines",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "equation",
    "tags": [
      "straight-lines",
      "triangle",
      "altitude"
    ],
    "questionText": "A triangle has vertices $A(0,0)$, $B(10,5)$ and $C(2,6)$. Find the equation of the altitude from $C$, and the coordinates of the point where it meets side $AB$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State what an altitude is",
          "workingLatex": "\\text{Altitude from } C \\perp AB, \\text{ through } C",
          "explanation": "An altitude is the line from a vertex meeting the opposite side at right angles. Here it passes through $C$ and is perpendicular to $AB$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Gradient of AB",
          "workingLatex": "m_{AB}=\\frac{5-0}{10-0}=\\frac{1}{2}",
          "explanation": "We need the direction of the base $AB$ so we can build a line perpendicular to it.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Gradient of the altitude",
          "workingLatex": "m=-2",
          "explanation": "The altitude is perpendicular to $AB$, so its gradient is the negative reciprocal of $\\tfrac12$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Equation of the altitude",
          "workingLatex": "y-6=-2(x-2)\\;\\Rightarrow\\; y=-2x+10",
          "explanation": "Using point $C(2,6)$ and gradient $-2$ gives the altitude's equation.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Equation of AB",
          "workingLatex": "y=\\tfrac{1}{2}x",
          "explanation": "Side $AB$ passes through the origin with gradient $\\tfrac12$, so its equation is simply $y=\\tfrac12 x$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Set up the intersection",
          "workingLatex": "\\tfrac{1}{2}x=-2x+10",
          "explanation": "The foot of the altitude is where it meets $AB$, so we solve the two equations together.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Clear the fraction",
          "workingLatex": "x=-4x+20",
          "explanation": "Multiplying through by $2$ removes the fraction.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Solve for x",
          "workingLatex": "5x=20\\Rightarrow x=4",
          "explanation": "Collecting the $x$ terms gives the $x$-coordinate of the foot.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Find y and the foot",
          "workingLatex": "y=\\tfrac{1}{2}(4)=2\\;\\Rightarrow\\; F(4,2)",
          "explanation": "Substituting back into $AB$ gives the meeting point $F$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Check F on the altitude",
          "workingLatex": "-2(4)+10=2\\;\\checkmark",
          "explanation": "The foot must also satisfy the altitude's equation, which it does.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Check the right angle",
          "workingLatex": "m_{AB}\\times m=\\tfrac{1}{2}\\times(-2)=-1\\;\\checkmark",
          "explanation": "The product of the two gradients is $-1$, confirming the altitude really is perpendicular to $AB$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Check F lies on segment AB",
          "workingLatex": "0<4<10",
          "explanation": "Since the foot's $x$-coordinate lies between those of $A$ and $B$, the altitude meets the side itself, not its extension.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Conclusion",
          "workingLatex": "y=-2x+10,\\quad F(4,2)",
          "explanation": "The altitude from $C$ has equation $y=-2x+10$ and meets $AB$ at $(4,2)$.",
          "diagram": null
        }
      ],
      "finalAnswer": "Altitude from $C$: $y=-2x+10$ (i.e. $2x+y=10$); it meets $AB$ at $(4,2)$."
    }
  },
  {
    "id": "al.y1.pure.straight-lines.q068",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Straight lines",
    "subtopicId": "al.y1.pure.straight-lines",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "value",
    "tags": [
      "straight-lines",
      "modelling",
      "linear-model"
    ],
    "questionText": "In an experiment the height $h$ cm of a burning candle is recorded against the time $t$ hours for which it has burned. After $2$ hours the height is $18$ cm, and after $5$ hours the height is $12$ cm. Assuming a linear model $h=mt+c$, find the model, predict the time at which the candle burns out, and comment on the reliability of this prediction.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the model and data",
          "workingLatex": "h=mt+c,\\quad (2,18),\\,(5,12)",
          "explanation": "We assume the height falls linearly with time and use the two recorded data points to pin down the gradient and intercept.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find the gradient",
          "workingLatex": "m=\\frac{12-18}{5-2}=\\frac{-6}{3}=-2",
          "explanation": "The gradient is the change in height over the change in time between the two readings.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Interpret the gradient",
          "workingLatex": "m=-2\\;\\text{cm per hour}",
          "explanation": "A gradient of $-2$ means the candle loses $2$ cm of height every hour, which is a sensible physical reading.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find the intercept",
          "workingLatex": "18=-2(2)+c\\Rightarrow c=22",
          "explanation": "Substituting one data point into the model lets us solve for $c$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State the model",
          "workingLatex": "h=22-2t",
          "explanation": "This linear rule now gives the predicted height at any time $t$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Interpret the intercept",
          "workingLatex": "t=0\\Rightarrow h=22",
          "explanation": "The intercept $c=22$ is the model's starting height, i.e. the candle was $22$ cm tall before burning began.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Verify the first data point",
          "workingLatex": "t=2:\\;22-2(2)=18\\;\\checkmark",
          "explanation": "A good model should reproduce the data it was built from; the $t=2$ reading checks out.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Verify the second data point",
          "workingLatex": "t=5:\\;22-2(5)=12\\;\\checkmark",
          "explanation": "The $t=5$ reading is reproduced too, so the model is consistent with both observations.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Predict burnout time",
          "workingLatex": "0=22-2t\\Rightarrow t=11",
          "explanation": "The candle burns out when its height reaches $0$, so we set $h=0$ and solve for $t$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Note the data range",
          "workingLatex": "\\text{data spans } 2\\le t\\le 5",
          "explanation": "The measurements were taken only between $2$ and $5$ hours, which frames how far the prediction reaches.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Identify extrapolation",
          "workingLatex": "t=11>5",
          "explanation": "Predicting at $t=11$ lies well beyond the measured range, so it is an extrapolation rather than an interpolation.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Comment on reliability",
          "workingLatex": "\\text{constant rate assumed for all } t",
          "explanation": "The prediction is only trustworthy if the candle keeps burning at exactly $2$ cm per hour. Near the end the flame and wax behave differently, so the rate may change and the $t=11$ estimate is less reliable.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "State the valid domain",
          "workingLatex": "h\\ge 0 \\Rightarrow 0\\le t\\le 11",
          "explanation": "Since a height cannot be negative, the model is only meaningful up to $t=11$; beyond that it would give impossible negative heights.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Conclusion",
          "workingLatex": "h=22-2t,\\quad t=11 \\text{ (extrapolated)}",
          "explanation": "The model $h=22-2t$ predicts the candle burns out after $11$ hours, but as this is an extrapolation it should be treated with caution.",
          "diagram": null
        }
      ],
      "finalAnswer": "$h=22-2t$; the candle is predicted to burn out at $t=11$ hours. This is an extrapolation beyond the $2$–$5$ hour data, so it is only reliable if the constant $2$ cm/hour rate continues."
    }
  },
  {
    "id": "al.y1.pure.straight-lines.q069",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Straight lines",
    "subtopicId": "al.y1.pure.straight-lines",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "value",
    "tags": [
      "straight-lines",
      "modelling",
      "break-even"
    ],
    "questionText": "Two firms hire out a floor sander for $h$ hours. Firm A charges a fixed fee of $\\pounds 40$ plus $\\pounds 6$ per hour, so its cost is $C_A=40+6h$. Firm B has no fixed fee but charges $\\pounds 16$ per hour, so $C_B=16h$. Find the number of hours for which the two firms cost the same, the cost at that point, and advise which firm is cheaper for a short hire and for a long hire.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the two models",
          "workingLatex": "C_A=40+6h,\\quad C_B=16h",
          "explanation": "Each firm's charge is a straight-line cost model in the number of hours $h$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Interpret the coefficients",
          "workingLatex": "A:\\, \\text{fixed }40,\\text{ rate }6;\\quad B:\\, \\text{fixed }0,\\text{ rate }16",
          "explanation": "Firm A has a high fixed fee but a low hourly rate; Firm B has no fixed fee but a steep hourly rate. Because the lines have different gradients they must cross somewhere.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Set costs equal",
          "workingLatex": "40+6h=16h",
          "explanation": "The two firms cost the same at the break-even point, so we equate the cost expressions.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Rearrange",
          "workingLatex": "40=10h",
          "explanation": "Subtracting $6h$ from both sides collects the hour terms on one side.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve for h",
          "workingLatex": "h=4",
          "explanation": "Dividing by $10$ gives the break-even number of hours.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find the break-even cost",
          "workingLatex": "C=16(4)=64",
          "explanation": "Substituting $h=4$ into either model gives the common cost at break-even.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Verify with Firm A",
          "workingLatex": "40+6(4)=64\\;\\checkmark",
          "explanation": "Firm A's model gives the same cost, confirming the break-even figure.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Verify with Firm B",
          "workingLatex": "16(4)=64\\;\\checkmark",
          "explanation": "Firm B agrees too, so both lines genuinely pass through $(4,64)$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Test a short hire",
          "workingLatex": "h=2:\\; C_A=52,\\; C_B=32",
          "explanation": "To see which firm wins below break-even we test $h=2$; Firm B is cheaper here.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Test a long hire",
          "workingLatex": "h=6:\\; C_A=76,\\; C_B=96",
          "explanation": "Above break-even we test $h=6$; now Firm A is cheaper.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Interpret the crossing",
          "workingLatex": "h<4:\\,B\\text{ cheaper};\\quad h>4:\\,A\\text{ cheaper}",
          "explanation": "Below $4$ hours the absence of a fixed fee makes Firm B better; above $4$ hours Firm A's lower hourly rate wins. At exactly $4$ hours they tie.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Comment on validity",
          "workingLatex": "\\text{linear pricing, no minimum charge assumed}",
          "explanation": "The advice relies on the charges being exactly linear with no minimum charge or bulk discount; if either firm changes its structure the break-even point would shift.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Conclusion",
          "workingLatex": "h=4,\\; C=\\pounds 64",
          "explanation": "The firms cost the same at $4$ hours (\\pounds 64); choose Firm B for shorter jobs and Firm A for longer jobs.",
          "diagram": null
        }
      ],
      "finalAnswer": "Break-even at $h=4$ hours, costing $\\pounds 64$. For hires under $4$ hours Firm B is cheaper; for hires over $4$ hours Firm A is cheaper."
    }
  },
  {
    "id": "al.y1.pure.straight-lines.q070",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Straight lines",
    "subtopicId": "al.y1.pure.straight-lines",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "value",
    "tags": [
      "straight-lines",
      "area",
      "perpendicular-distance"
    ],
    "questionText": "The line $L$ has equation $3x+4y=24$. It crosses the $x$-axis at $A$ and the $y$-axis at $B$. The point $P$ has coordinates $(2,7)$. (a) Find the coordinates of $A$ and $B$ and the length $AB$. (b) Find the perpendicular distance from $P$ to $L$, and hence the area of triangle $PAB$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Find the x-intercept A",
          "workingLatex": "y=0:\\;3x=24\\Rightarrow x=8\\Rightarrow A(8,0)",
          "explanation": "The line crosses the $x$-axis where $y=0$; substituting gives point $A$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find the y-intercept B",
          "workingLatex": "x=0:\\;4y=24\\Rightarrow y=6\\Rightarrow B(0,6)",
          "explanation": "The line crosses the $y$-axis where $x=0$; substituting gives point $B$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Length AB set-up",
          "workingLatex": "AB=\\sqrt{(8-0)^2+(0-6)^2}",
          "explanation": "The distance between the two intercepts is found with the distance formula.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate AB",
          "workingLatex": "AB=\\sqrt{64+36}=\\sqrt{100}=10",
          "explanation": "The sum inside the root is a perfect square, giving a clean length of $10$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Write L in general form",
          "workingLatex": "3x+4y-24=0",
          "explanation": "To use the point-to-line distance formula we rearrange $L$ into the form $ax+by+c=0$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Distance formula set-up",
          "workingLatex": "d=\\frac{|3(2)+4(7)-24|}{\\sqrt{3^2+4^2}}",
          "explanation": "We substitute $P(2,7)$ into the numerator and use the coefficients of $L$ in the denominator.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Evaluate the numerator",
          "workingLatex": "|6+28-24|=|10|=10",
          "explanation": "Working out the bracket and taking the modulus keeps the distance positive.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Evaluate the denominator",
          "workingLatex": "\\sqrt{9+16}=\\sqrt{25}=5",
          "explanation": "The denominator is the length of the normal direction, a tidy $5$ here.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Perpendicular distance",
          "workingLatex": "d=\\frac{10}{5}=2",
          "explanation": "Dividing gives the perpendicular distance from $P$ to the line $L$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Area of triangle PAB",
          "workingLatex": "\\text{Area}=\\tfrac{1}{2}\\times AB\\times d=\\tfrac{1}{2}(10)(2)=10",
          "explanation": "Taking $AB$ as the base, the height is exactly the perpendicular distance from $P$ to the line through $A$ and $B$, so the area is half base times height.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Cross-check by the determinant",
          "workingLatex": "\\text{Area}=\\tfrac{1}{2}\\big|x_A(y_B-y_P)+x_B(y_P-y_A)+x_P(y_A-y_B)\\big|",
          "explanation": "As an independent check we use the coordinate area formula for a triangle from its three vertices.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Evaluate the determinant",
          "workingLatex": "\\tfrac{1}{2}\\big|8(6-7)+0(7-0)+2(0-6)\\big|=\\tfrac{1}{2}|-8-12|=10",
          "explanation": "The determinant gives $10$, matching the base-times-height result and confirming the answer.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Conclusion",
          "workingLatex": "A(8,0),\\,B(0,6),\\,AB=10,\\,d=2,\\,\\text{Area}=10",
          "explanation": "Both methods agree, so the triangle $PAB$ has area $10$ square units.",
          "diagram": null
        }
      ],
      "finalAnswer": "$A(8,0)$, $B(0,6)$, $AB=10$; perpendicular distance from $P$ to $L$ is $2$; area of triangle $PAB=10$ square units."
    }
  }
];
