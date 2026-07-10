import { Question } from "@/lib/types";

export const questions: Question[] = [
  {
    "id": "gcse.algebra.coordinates.q001",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Coordinates",
    "subtopicId": "gcse.algebra.coordinates",
    "difficulty": "Easy",
    "marks": 1,
    "answerType": "text",
    "tags": ["coordinates", "quadrants", "reading coordinates"],
    "questionText": "The point $A$ has coordinates $(3, 5)$. In which quadrant does $A$ lie?",
    "questionDiagram": {
      "kind": "functionGraph",
      "xMin": -6, "xMax": 6, "yMin": -6, "yMax": 6,
      "curves": [],
      "points": [{ "x": 3, "y": 5, "label": "A", "color": "accent" }],
      "alt": "A coordinate grid with the point A marked at (3, 5) in the upper-right region."
    },
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall how the quadrants are numbered.", "workingLatex": "\\text{Q1 (+,+), Q2 (-,+), Q3 (-,-), Q4 (+,-)}", "explanation": "The axes split the plane into four regions. Starting at the top right and going anticlockwise they are numbered one to four, and each has its own pattern of signs.", "diagram": null },
        { "stepNumber": 2, "description": "Look at the $x$-coordinate.", "workingLatex": "x = 3 > 0", "explanation": "The first number tells us how far across we go. It is positive, so the point is to the right of the $y$-axis.", "diagram": null },
        { "stepNumber": 3, "description": "Look at the $y$-coordinate.", "workingLatex": "y = 5 > 0", "explanation": "The second number tells us how far up we go. It is positive, so the point is above the $x$-axis.", "diagram": null },
        { "stepNumber": 4, "description": "Combine the two signs.", "workingLatex": "(+,\\,+)", "explanation": "Right of the $y$-axis and above the $x$-axis places the point in the top-right region.", "diagram": null },
        { "stepNumber": 5, "description": "Name the region.", "workingLatex": "\\text{first quadrant}", "explanation": "The top-right region is the first quadrant, where both coordinates are positive.", "diagram": null },
        { "stepNumber": 6, "description": "Check against the sketch.", "workingLatex": "(3,5)\\ \\text{upper right}", "explanation": "The plotted point sits in the upper-right corner of the grid, confirming the first quadrant.", "diagram": null }
      ],
      "finalAnswer": "The first quadrant"
    }
  },
  {
    "id": "gcse.algebra.coordinates.q002",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Coordinates",
    "subtopicId": "gcse.algebra.coordinates",
    "difficulty": "Easy",
    "marks": 1,
    "answerType": "coordinate",
    "tags": ["coordinates", "reading coordinates", "four quadrants"],
    "questionText": "Write down the coordinates of the point $P$ shown on the grid.",
    "questionDiagram": {
      "kind": "functionGraph",
      "xMin": -6, "xMax": 6, "yMin": -6, "yMax": 6,
      "curves": [],
      "points": [{ "x": -4, "y": 2, "label": "P", "color": "accent" }],
      "alt": "A coordinate grid with the point P marked 4 units left and 2 units up from the origin."
    },
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall how to read a coordinate.", "workingLatex": "(x, y)", "explanation": "A coordinate is written as (across, up). We always read the horizontal distance first, then the vertical distance.", "diagram": null },
        { "stepNumber": 2, "description": "Read the horizontal position.", "workingLatex": "x = -4", "explanation": "From the origin the point is $4$ units to the left, and left of the origin means the $x$-value is negative.", "diagram": null },
        { "stepNumber": 3, "description": "Read the vertical position.", "workingLatex": "y = 2", "explanation": "The point is $2$ units above the origin, so the $y$-value is a positive $2$.", "diagram": null },
        { "stepNumber": 4, "description": "Write the pair in order.", "workingLatex": "(-4, 2)", "explanation": "Putting the across-value first and the up-value second gives the coordinate.", "diagram": null },
        { "stepNumber": 5, "description": "Sense-check the quadrant.", "workingLatex": "(-,\\,+)\\Rightarrow \\text{Q2}", "explanation": "A negative $x$ with a positive $y$ belongs in the top-left region, which matches where $P$ is drawn.", "diagram": null },
        { "stepNumber": 6, "description": "State the coordinates.", "workingLatex": "P = (-4, 2)", "explanation": "This is the position of $P$ read directly from the grid.", "diagram": null }
      ],
      "finalAnswer": "$(-4, 2)$"
    }
  },
  {
    "id": "gcse.algebra.coordinates.q003",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Coordinates",
    "subtopicId": "gcse.algebra.coordinates",
    "difficulty": "Easy",
    "marks": 1,
    "answerType": "text",
    "tags": ["coordinates", "quadrants", "negative coordinates"],
    "questionText": "In which quadrant does the point $(-2, -6)$ lie?",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall the sign pattern of each quadrant.", "workingLatex": "\\text{Q1 (+,+), Q2 (-,+), Q3 (-,-), Q4 (+,-)}", "explanation": "Each quadrant is identified by the signs of its coordinates, so checking the signs is enough to place any point.", "diagram": null },
        { "stepNumber": 2, "description": "Check the $x$-coordinate.", "workingLatex": "x = -2 < 0", "explanation": "A negative $x$ means the point lies to the left of the $y$-axis.", "diagram": null },
        { "stepNumber": 3, "description": "Check the $y$-coordinate.", "workingLatex": "y = -6 < 0", "explanation": "A negative $y$ means the point lies below the $x$-axis.", "diagram": null },
        { "stepNumber": 4, "description": "Combine the signs.", "workingLatex": "(-,\\,-)", "explanation": "Left of the $y$-axis and below the $x$-axis is the bottom-left region.", "diagram": null },
        { "stepNumber": 5, "description": "Name the region.", "workingLatex": "\\text{third quadrant}", "explanation": "The bottom-left region, where both coordinates are negative, is the third quadrant.", "diagram": null },
        { "stepNumber": 6, "description": "State the answer.", "workingLatex": "\\text{Q3}", "explanation": "So $(-2,-6)$ lies in the third quadrant.", "diagram": null }
      ],
      "finalAnswer": "The third quadrant"
    }
  },
  {
    "id": "gcse.algebra.coordinates.q004",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Coordinates",
    "subtopicId": "gcse.algebra.coordinates",
    "difficulty": "Easy",
    "marks": 1,
    "answerType": "text",
    "tags": ["coordinates", "axes", "points on axes"],
    "questionText": "On which axis does the point $(0, 4)$ lie?",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall what a zero coordinate means.", "workingLatex": "x = 0 \\Rightarrow \\text{on the } y\\text{-axis}", "explanation": "A point sits on an axis exactly when one of its coordinates is zero, because it has not moved away from that axis.", "diagram": null },
        { "stepNumber": 2, "description": "Read the $x$-coordinate.", "workingLatex": "x = 0", "explanation": "The across-value is zero, so the point has not moved left or right from the origin.", "diagram": null },
        { "stepNumber": 3, "description": "Interpret $x = 0$.", "workingLatex": "\\text{no horizontal movement}", "explanation": "With no sideways movement the point stays on the vertical axis.", "diagram": null },
        { "stepNumber": 4, "description": "Read the $y$-coordinate.", "workingLatex": "y = 4", "explanation": "The up-value is $4$, so the point is $4$ units above the origin along that vertical axis.", "diagram": null },
        { "stepNumber": 5, "description": "Name the axis.", "workingLatex": "y\\text{-axis}", "explanation": "The vertical axis is the $y$-axis, so the point lies on it.", "diagram": null },
        { "stepNumber": 6, "description": "State the answer.", "workingLatex": "(0,4)\\ \\text{on the } y\\text{-axis}", "explanation": "Any point of the form $(0, k)$ lies on the $y$-axis.", "diagram": null }
      ],
      "finalAnswer": "The $y$-axis"
    }
  },
  {
    "id": "gcse.algebra.coordinates.q005",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Coordinates",
    "subtopicId": "gcse.algebra.coordinates",
    "difficulty": "Easy",
    "marks": 1,
    "answerType": "text",
    "tags": ["coordinates", "quadrants", "four quadrants"],
    "questionText": "In which quadrant does the point $(7, -3)$ lie?",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall the sign pattern of each quadrant.", "workingLatex": "\\text{Q1 (+,+), Q2 (-,+), Q3 (-,-), Q4 (+,-)}", "explanation": "Knowing which signs belong to which quadrant lets us place a point from its coordinates alone.", "diagram": null },
        { "stepNumber": 2, "description": "Check the $x$-coordinate.", "workingLatex": "x = 7 > 0", "explanation": "A positive $x$ puts the point to the right of the $y$-axis.", "diagram": null },
        { "stepNumber": 3, "description": "Check the $y$-coordinate.", "workingLatex": "y = -3 < 0", "explanation": "A negative $y$ puts the point below the $x$-axis.", "diagram": null },
        { "stepNumber": 4, "description": "Combine the signs.", "workingLatex": "(+,\\,-)", "explanation": "Right of the $y$-axis and below the $x$-axis is the bottom-right region.", "diagram": null },
        { "stepNumber": 5, "description": "Name the region.", "workingLatex": "\\text{fourth quadrant}", "explanation": "The bottom-right region is the fourth quadrant.", "diagram": null },
        { "stepNumber": 6, "description": "State the answer.", "workingLatex": "\\text{Q4}", "explanation": "So $(7,-3)$ lies in the fourth quadrant.", "diagram": null }
      ],
      "finalAnswer": "The fourth quadrant"
    }
  },
  {
    "id": "gcse.algebra.coordinates.q006",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Coordinates",
    "subtopicId": "gcse.algebra.coordinates",
    "difficulty": "Easy",
    "marks": 1,
    "answerType": "coordinate",
    "tags": ["coordinates", "reading coordinates", "four quadrants"],
    "questionText": "Write down the coordinates of the point $Q$ shown on the grid.",
    "questionDiagram": {
      "kind": "functionGraph",
      "xMin": -6, "xMax": 6, "yMin": -6, "yMax": 6,
      "curves": [],
      "points": [{ "x": 5, "y": -4, "label": "Q", "color": "accent" }],
      "alt": "A coordinate grid with the point Q marked 5 units right and 4 units down from the origin."
    },
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall the order of a coordinate.", "workingLatex": "(x, y)", "explanation": "We read the horizontal distance first and the vertical distance second.", "diagram": null },
        { "stepNumber": 2, "description": "Read the horizontal position.", "workingLatex": "x = 5", "explanation": "The point is $5$ units to the right of the origin, so the $x$-value is a positive $5$.", "diagram": null },
        { "stepNumber": 3, "description": "Read the vertical position.", "workingLatex": "y = -4", "explanation": "The point is $4$ units below the origin, and below the origin means the $y$-value is negative.", "diagram": null },
        { "stepNumber": 4, "description": "Write the pair in order.", "workingLatex": "(5, -4)", "explanation": "Placing the across-value first and the up/down-value second gives the coordinate.", "diagram": null },
        { "stepNumber": 5, "description": "Sense-check the quadrant.", "workingLatex": "(+,\\,-)\\Rightarrow \\text{Q4}", "explanation": "A positive $x$ with a negative $y$ sits in the bottom-right region, matching where $Q$ is drawn.", "diagram": null },
        { "stepNumber": 6, "description": "State the coordinates.", "workingLatex": "Q = (5, -4)", "explanation": "This is the position of $Q$ read from the grid.", "diagram": null }
      ],
      "finalAnswer": "$(5, -4)$"
    }
  },
  {
    "id": "gcse.algebra.coordinates.q007",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Coordinates",
    "subtopicId": "gcse.algebra.coordinates",
    "difficulty": "Easy",
    "marks": 1,
    "answerType": "text",
    "tags": ["coordinates", "axes", "points on axes"],
    "questionText": "On which axis does the point $(-3, 0)$ lie?",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall what a zero coordinate means.", "workingLatex": "y = 0 \\Rightarrow \\text{on the } x\\text{-axis}", "explanation": "A point lies on an axis when one coordinate is zero; a zero up-value keeps it on the horizontal axis.", "diagram": null },
        { "stepNumber": 2, "description": "Read the $y$-coordinate.", "workingLatex": "y = 0", "explanation": "The up-value is zero, so the point has not moved above or below the origin.", "diagram": null },
        { "stepNumber": 3, "description": "Interpret $y = 0$.", "workingLatex": "\\text{no vertical movement}", "explanation": "With no vertical movement the point stays on the horizontal axis.", "diagram": null },
        { "stepNumber": 4, "description": "Read the $x$-coordinate.", "workingLatex": "x = -3", "explanation": "The across-value is $-3$, so the point is $3$ units to the left of the origin along that horizontal axis.", "diagram": null },
        { "stepNumber": 5, "description": "Name the axis.", "workingLatex": "x\\text{-axis}", "explanation": "The horizontal axis is the $x$-axis, so the point lies on it.", "diagram": null },
        { "stepNumber": 6, "description": "State the answer.", "workingLatex": "(-3,0)\\ \\text{on the } x\\text{-axis}", "explanation": "Any point of the form $(k, 0)$ lies on the $x$-axis.", "diagram": null }
      ],
      "finalAnswer": "The $x$-axis"
    }
  },
  {
    "id": "gcse.algebra.coordinates.q008",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Coordinates",
    "subtopicId": "gcse.algebra.coordinates",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "coordinate",
    "tags": ["coordinates", "midpoint", "midpoint formula"],
    "questionText": "Find the midpoint of the line segment joining $A(2, 4)$ and $B(6, 8)$.",
    "questionDiagram": {
      "kind": "functionGraph",
      "xMin": 0, "xMax": 9, "yMin": 0, "yMax": 10,
      "curves": [{ "points": [{ "x": 2, "y": 4 }, { "x": 6, "y": 8 }], "color": "ink", "label": "AB" }],
      "points": [
        { "x": 2, "y": 4, "label": "A", "color": "ink" },
        { "x": 6, "y": 8, "label": "B", "color": "ink" },
        { "x": 4, "y": 6, "label": "M", "color": "accent" }
      ],
      "alt": "The segment from A(2,4) to B(6,8) with its midpoint M marked at (4,6)."
    },
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall the midpoint formula.", "workingLatex": "M = \\left(\\dfrac{x_1+x_2}{2}, \\dfrac{y_1+y_2}{2}\\right)", "explanation": "The midpoint is exactly halfway along, so we average the two $x$-values and average the two $y$-values.", "diagram": null },
        { "stepNumber": 2, "description": "List the coordinates.", "workingLatex": "A(2,4),\\ B(6,8)", "explanation": "Writing out which numbers are $x_1, y_1, x_2, y_2$ helps avoid mixing them up.", "diagram": null },
        { "stepNumber": 3, "description": "Average the $x$-coordinates.", "workingLatex": "\\dfrac{2+6}{2} = \\dfrac{8}{2} = 4", "explanation": "Halfway across between $2$ and $6$ is $4$.", "diagram": null },
        { "stepNumber": 4, "description": "Average the $y$-coordinates.", "workingLatex": "\\dfrac{4+8}{2} = \\dfrac{12}{2} = 6", "explanation": "Halfway up between $4$ and $8$ is $6$.", "diagram": null },
        { "stepNumber": 5, "description": "Write the midpoint.", "workingLatex": "M = (4, 6)", "explanation": "Combining the averaged values gives the coordinates of the midpoint.", "diagram": null },
        { "stepNumber": 6, "description": "Check it looks central.", "workingLatex": "(4,6)\\ \\text{between } A \\text{ and } B", "explanation": "The point $(4,6)$ sits neatly between $A$ and $B$ on the sketch, confirming the answer.", "diagram": null }
      ],
      "finalAnswer": "$(4, 6)$"
    }
  },
  {
    "id": "gcse.algebra.coordinates.q009",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Coordinates",
    "subtopicId": "gcse.algebra.coordinates",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "coordinate",
    "tags": ["coordinates", "midpoint", "midpoint formula"],
    "questionText": "Find the midpoint of the line segment joining $C(1, 3)$ and $D(5, 11)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall the midpoint formula.", "workingLatex": "M = \\left(\\dfrac{x_1+x_2}{2}, \\dfrac{y_1+y_2}{2}\\right)", "explanation": "The midpoint is the average of the endpoints, taken separately in the $x$ and $y$ directions.", "diagram": null },
        { "stepNumber": 2, "description": "List the coordinates.", "workingLatex": "C(1,3),\\ D(5,11)", "explanation": "Identifying each value first keeps the substitution tidy.", "diagram": null },
        { "stepNumber": 3, "description": "Average the $x$-coordinates.", "workingLatex": "\\dfrac{1+5}{2} = \\dfrac{6}{2} = 3", "explanation": "The middle of $1$ and $5$ is $3$.", "diagram": null },
        { "stepNumber": 4, "description": "Average the $y$-coordinates.", "workingLatex": "\\dfrac{3+11}{2} = \\dfrac{14}{2} = 7", "explanation": "The middle of $3$ and $11$ is $7$.", "diagram": null },
        { "stepNumber": 5, "description": "Write the midpoint.", "workingLatex": "M = (3, 7)", "explanation": "Combining the two averages gives the midpoint.", "diagram": null },
        { "stepNumber": 6, "description": "Check the answer is between the points.", "workingLatex": "1 < 3 < 5,\\ 3 < 7 < 11", "explanation": "Each coordinate of the midpoint lies between the matching coordinates of $C$ and $D$, as it should.", "diagram": null }
      ],
      "finalAnswer": "$(3, 7)$"
    }
  },
  {
    "id": "gcse.algebra.coordinates.q010",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Coordinates",
    "subtopicId": "gcse.algebra.coordinates",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "coordinate",
    "tags": ["coordinates", "midpoint", "origin"],
    "questionText": "Find the midpoint of the line segment joining the origin $O(0, 0)$ and $P(8, 6)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall the midpoint formula.", "workingLatex": "M = \\left(\\dfrac{x_1+x_2}{2}, \\dfrac{y_1+y_2}{2}\\right)", "explanation": "Averaging the endpoints gives the point halfway between them.", "diagram": null },
        { "stepNumber": 2, "description": "List the coordinates.", "workingLatex": "O(0,0),\\ P(8,6)", "explanation": "The origin has both coordinates equal to zero, which will make the averaging simple.", "diagram": null },
        { "stepNumber": 3, "description": "Average the $x$-coordinates.", "workingLatex": "\\dfrac{0+8}{2} = 4", "explanation": "Half of the horizontal distance $8$ is $4$.", "diagram": null },
        { "stepNumber": 4, "description": "Average the $y$-coordinates.", "workingLatex": "\\dfrac{0+6}{2} = 3", "explanation": "Half of the vertical distance $6$ is $3$.", "diagram": null },
        { "stepNumber": 5, "description": "Write the midpoint.", "workingLatex": "M = (4, 3)", "explanation": "The midpoint from the origin is just half of the other point's coordinates.", "diagram": null },
        { "stepNumber": 6, "description": "Note the shortcut.", "workingLatex": "M = \\tfrac12(8,6) = (4,3)", "explanation": "Whenever one endpoint is the origin, the midpoint is simply half of the other point — a handy check.", "diagram": null }
      ],
      "finalAnswer": "$(4, 3)$"
    }
  },
  {
    "id": "gcse.algebra.coordinates.q011",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Coordinates",
    "subtopicId": "gcse.algebra.coordinates",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "coordinate",
    "tags": ["coordinates", "midpoint", "negative coordinates"],
    "questionText": "Find the midpoint of the line segment joining $A(-2, 4)$ and $B(6, 8)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall the midpoint formula.", "workingLatex": "M = \\left(\\dfrac{x_1+x_2}{2}, \\dfrac{y_1+y_2}{2}\\right)", "explanation": "The formula still works when a coordinate is negative; we just add carefully.", "diagram": null },
        { "stepNumber": 2, "description": "List the coordinates.", "workingLatex": "A(-2,4),\\ B(6,8)", "explanation": "Note the negative $x$-value of $A$, as it affects the first average.", "diagram": null },
        { "stepNumber": 3, "description": "Average the $x$-coordinates.", "workingLatex": "\\dfrac{-2+6}{2} = \\dfrac{4}{2} = 2", "explanation": "Adding $-2$ and $6$ gives $4$, and half of that is $2$.", "diagram": null },
        { "stepNumber": 4, "description": "Average the $y$-coordinates.", "workingLatex": "\\dfrac{4+8}{2} = \\dfrac{12}{2} = 6", "explanation": "The $y$-values add to $12$, giving a half-way value of $6$.", "diagram": null },
        { "stepNumber": 5, "description": "Write the midpoint.", "workingLatex": "M = (2, 6)", "explanation": "Combining the averages gives the midpoint.", "diagram": null },
        { "stepNumber": 6, "description": "Check the $x$-value is between.", "workingLatex": "-2 < 2 < 6", "explanation": "The midpoint's $x$-value lies between $-2$ and $6$, which confirms it is sensible.", "diagram": null }
      ],
      "finalAnswer": "$(2, 6)$"
    }
  },
  {
    "id": "gcse.algebra.coordinates.q012",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Coordinates",
    "subtopicId": "gcse.algebra.coordinates",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "coordinate",
    "tags": ["coordinates", "midpoint", "midpoint formula"],
    "questionText": "Find the midpoint of the line segment joining $P(3, 1)$ and $Q(9, 7)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall the midpoint formula.", "workingLatex": "M = \\left(\\dfrac{x_1+x_2}{2}, \\dfrac{y_1+y_2}{2}\\right)", "explanation": "We average the two $x$-values and the two $y$-values.", "diagram": null },
        { "stepNumber": 2, "description": "List the coordinates.", "workingLatex": "P(3,1),\\ Q(9,7)", "explanation": "Labelling each value avoids errors in the sums.", "diagram": null },
        { "stepNumber": 3, "description": "Average the $x$-coordinates.", "workingLatex": "\\dfrac{3+9}{2} = \\dfrac{12}{2} = 6", "explanation": "Half-way between $3$ and $9$ is $6$.", "diagram": null },
        { "stepNumber": 4, "description": "Average the $y$-coordinates.", "workingLatex": "\\dfrac{1+7}{2} = \\dfrac{8}{2} = 4", "explanation": "Half-way between $1$ and $7$ is $4$.", "diagram": null },
        { "stepNumber": 5, "description": "Write the midpoint.", "workingLatex": "M = (6, 4)", "explanation": "Combining the averages gives the midpoint.", "diagram": null },
        { "stepNumber": 6, "description": "Check by symmetry.", "workingLatex": "6-3 = 3 = 9-6", "explanation": "The midpoint is the same distance ($3$) from each endpoint horizontally, confirming it is central.", "diagram": null }
      ],
      "finalAnswer": "$(6, 4)$"
    }
  },
  {
    "id": "gcse.algebra.coordinates.q013",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Coordinates",
    "subtopicId": "gcse.algebra.coordinates",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "value",
    "tags": ["coordinates", "distance", "horizontal distance"],
    "questionText": "Points $A(2, 3)$ and $B(7, 3)$ lie on the same horizontal line. Find the length of $AB$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Notice the $y$-values are equal.", "workingLatex": "y_A = y_B = 3", "explanation": "When two points share the same $y$-value the segment is horizontal, so we only need the difference in $x$.", "diagram": null },
        { "stepNumber": 2, "description": "Write the two $x$-values.", "workingLatex": "x_A = 2,\\ x_B = 7", "explanation": "The length across is the gap between these two horizontal positions.", "diagram": null },
        { "stepNumber": 3, "description": "Subtract the $x$-values.", "workingLatex": "7 - 2 = 5", "explanation": "Taking the smaller from the larger gives the horizontal distance.", "diagram": null },
        { "stepNumber": 4, "description": "Interpret the result.", "workingLatex": "AB = 5", "explanation": "There is no vertical change, so this horizontal gap is the whole length.", "diagram": null },
        { "stepNumber": 5, "description": "State the length.", "workingLatex": "AB = 5 \\text{ units}", "explanation": "The segment $AB$ is $5$ units long.", "diagram": null },
        { "stepNumber": 6, "description": "Check the sign.", "workingLatex": "|2-7| = 5", "explanation": "Taking the size of the difference makes sure the length is positive whichever order we subtract in.", "diagram": null }
      ],
      "finalAnswer": "$5$ units"
    }
  },
  {
    "id": "gcse.algebra.coordinates.q014",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Coordinates",
    "subtopicId": "gcse.algebra.coordinates",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "value",
    "tags": ["coordinates", "distance", "vertical distance"],
    "questionText": "Points $P(4, 1)$ and $Q(4, 9)$ lie on the same vertical line. Find the length of $PQ$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Notice the $x$-values are equal.", "workingLatex": "x_P = x_Q = 4", "explanation": "Equal $x$-values mean the segment is vertical, so only the difference in $y$ matters.", "diagram": null },
        { "stepNumber": 2, "description": "Write the two $y$-values.", "workingLatex": "y_P = 1,\\ y_Q = 9", "explanation": "The length up is the gap between these two vertical positions.", "diagram": null },
        { "stepNumber": 3, "description": "Subtract the $y$-values.", "workingLatex": "9 - 1 = 8", "explanation": "Taking the smaller from the larger gives the vertical distance.", "diagram": null },
        { "stepNumber": 4, "description": "Interpret the result.", "workingLatex": "PQ = 8", "explanation": "With no horizontal change, this vertical gap is the whole length.", "diagram": null },
        { "stepNumber": 5, "description": "State the length.", "workingLatex": "PQ = 8 \\text{ units}", "explanation": "The segment $PQ$ is $8$ units long.", "diagram": null },
        { "stepNumber": 6, "description": "Check with the size of the difference.", "workingLatex": "|1-9| = 8", "explanation": "Using the size of the difference guarantees a positive length.", "diagram": null }
      ],
      "finalAnswer": "$8$ units"
    }
  },
  {
    "id": "gcse.algebra.coordinates.q015",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Coordinates",
    "subtopicId": "gcse.algebra.coordinates",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "coordinate",
    "tags": ["coordinates", "midpoint", "midpoint formula"],
    "questionText": "$M$ is the midpoint of $A(1, 2)$ and $B(7, 10)$. Find the coordinates of $M$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall the midpoint formula.", "workingLatex": "M = \\left(\\dfrac{x_1+x_2}{2}, \\dfrac{y_1+y_2}{2}\\right)", "explanation": "The midpoint averages the two endpoints in each direction.", "diagram": null },
        { "stepNumber": 2, "description": "List the coordinates.", "workingLatex": "A(1,2),\\ B(7,10)", "explanation": "Setting out the values makes the substitution clear.", "diagram": null },
        { "stepNumber": 3, "description": "Average the $x$-coordinates.", "workingLatex": "\\dfrac{1+7}{2} = \\dfrac{8}{2} = 4", "explanation": "Half-way between $1$ and $7$ is $4$.", "diagram": null },
        { "stepNumber": 4, "description": "Average the $y$-coordinates.", "workingLatex": "\\dfrac{2+10}{2} = \\dfrac{12}{2} = 6", "explanation": "Half-way between $2$ and $10$ is $6$.", "diagram": null },
        { "stepNumber": 5, "description": "Write the midpoint.", "workingLatex": "M = (4, 6)", "explanation": "Combining the averages gives the midpoint coordinates.", "diagram": null },
        { "stepNumber": 6, "description": "Check both coordinates lie between.", "workingLatex": "1<4<7,\\ 2<6<10", "explanation": "Each value of $M$ is between the endpoints, so the answer is reasonable.", "diagram": null }
      ],
      "finalAnswer": "$(4, 6)$"
    }
  },
  {
    "id": "gcse.algebra.coordinates.q016",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Coordinates",
    "subtopicId": "gcse.algebra.coordinates",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "coordinate",
    "tags": ["coordinates", "midpoint", "negative coordinates"],
    "questionText": "Find the midpoint of the line segment joining $A(-4, -2)$ and $B(-8, -10)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall the midpoint formula.", "workingLatex": "M = \\left(\\dfrac{x_1+x_2}{2}, \\dfrac{y_1+y_2}{2}\\right)", "explanation": "Averaging works with negatives too; we just take care with the signs when adding.", "diagram": null },
        { "stepNumber": 2, "description": "List the coordinates.", "workingLatex": "A(-4,-2),\\ B(-8,-10)", "explanation": "Both points are in the third quadrant, so every value is negative.", "diagram": null },
        { "stepNumber": 3, "description": "Average the $x$-coordinates.", "workingLatex": "\\dfrac{-4+(-8)}{2} = \\dfrac{-12}{2} = -6", "explanation": "Adding two negatives gives $-12$, and half of that is $-6$.", "diagram": null },
        { "stepNumber": 4, "description": "Average the $y$-coordinates.", "workingLatex": "\\dfrac{-2+(-10)}{2} = \\dfrac{-12}{2} = -6", "explanation": "Likewise the $y$-values add to $-12$, giving $-6$.", "diagram": null },
        { "stepNumber": 5, "description": "Write the midpoint.", "workingLatex": "M = (-6, -6)", "explanation": "Combining the averages gives the midpoint.", "diagram": null },
        { "stepNumber": 6, "description": "Check the quadrant.", "workingLatex": "(-,\\,-)\\Rightarrow \\text{Q3}", "explanation": "Both endpoints are in the third quadrant, so the midpoint should be too — and it is.", "diagram": null }
      ],
      "finalAnswer": "$(-6, -6)$"
    }
  },
  {
    "id": "gcse.algebra.coordinates.q017",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Coordinates",
    "subtopicId": "gcse.algebra.coordinates",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "coordinate",
    "tags": ["coordinates", "midpoint", "decimal answer"],
    "questionText": "Find the midpoint of the line segment joining $A(3, 4)$ and $B(6, 9)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall the midpoint formula.", "workingLatex": "M = \\left(\\dfrac{x_1+x_2}{2}, \\dfrac{y_1+y_2}{2}\\right)", "explanation": "The midpoint averages the endpoints; the answer can be a decimal or fraction.", "diagram": null },
        { "stepNumber": 2, "description": "List the coordinates.", "workingLatex": "A(3,4),\\ B(6,9)", "explanation": "Setting out the values keeps the working clear.", "diagram": null },
        { "stepNumber": 3, "description": "Average the $x$-coordinates.", "workingLatex": "\\dfrac{3+6}{2} = \\dfrac{9}{2} = 4.5", "explanation": "The sum $9$ is odd, so halving gives a decimal — that is perfectly fine for a coordinate.", "diagram": null },
        { "stepNumber": 4, "description": "Average the $y$-coordinates.", "workingLatex": "\\dfrac{4+9}{2} = \\dfrac{13}{2} = 6.5", "explanation": "Again the sum $13$ is odd, giving the decimal $6.5$.", "diagram": null },
        { "stepNumber": 5, "description": "Write the midpoint.", "workingLatex": "M = (4.5, 6.5)", "explanation": "A midpoint often has non-integer coordinates when the endpoints are an odd distance apart.", "diagram": null },
        { "stepNumber": 6, "description": "Check the values are between.", "workingLatex": "3<4.5<6,\\ 4<6.5<9", "explanation": "Both coordinates lie between the endpoints, confirming the answer.", "diagram": null }
      ],
      "finalAnswer": "$(4.5, 6.5)$"
    }
  },
  {
    "id": "gcse.algebra.coordinates.q018",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Coordinates",
    "subtopicId": "gcse.algebra.coordinates",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "coordinate",
    "tags": ["coordinates", "midpoint", "finding an endpoint", "reverse"],
    "questionText": "$M(5, 6)$ is the midpoint of $A(2, 3)$ and $B$. Find the coordinates of $B$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall the midpoint formula.", "workingLatex": "M = \\left(\\dfrac{x_A+x_B}{2}, \\dfrac{y_A+y_B}{2}\\right)", "explanation": "We know the midpoint and one endpoint, so we work backwards to find the missing endpoint.", "diagram": null },
        { "stepNumber": 2, "description": "Set up the $x$-equation.", "workingLatex": "\\dfrac{2 + x_B}{2} = 5", "explanation": "The average of the two $x$-values must equal the midpoint's $x$-value of $5$.", "diagram": null },
        { "stepNumber": 3, "description": "Solve for $x_B$.", "workingLatex": "2 + x_B = 10 \\Rightarrow x_B = 8", "explanation": "Multiplying both sides by $2$ removes the fraction, then subtracting $2$ gives $x_B$.", "diagram": null },
        { "stepNumber": 4, "description": "Set up the $y$-equation.", "workingLatex": "\\dfrac{3 + y_B}{2} = 6", "explanation": "The average of the two $y$-values must equal the midpoint's $y$-value of $6$.", "diagram": null },
        { "stepNumber": 5, "description": "Solve for $y_B$.", "workingLatex": "3 + y_B = 12 \\Rightarrow y_B = 9", "explanation": "Again we clear the fraction and subtract to isolate $y_B$.", "diagram": null },
        { "stepNumber": 6, "description": "Write the endpoint.", "workingLatex": "B = (8, 9)", "explanation": "Combining the two solved values gives the coordinates of $B$.", "diagram": null },
        { "stepNumber": 7, "description": "Check the midpoint.", "workingLatex": "\\left(\\dfrac{2+8}{2}, \\dfrac{3+9}{2}\\right) = (5,6)", "explanation": "Substituting $B$ back in returns the given midpoint, confirming the answer.", "diagram": null }
      ],
      "finalAnswer": "$(8, 9)$"
    }
  },
  {
    "id": "gcse.algebra.coordinates.q019",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Coordinates",
    "subtopicId": "gcse.algebra.coordinates",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "coordinate",
    "tags": ["coordinates", "midpoint", "finding an endpoint", "origin"],
    "questionText": "The origin $O$ is the midpoint of $A(-3, 4)$ and $B$. Find the coordinates of $B$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "State what the midpoint being the origin means.", "workingLatex": "\\left(\\dfrac{x_A+x_B}{2}, \\dfrac{y_A+y_B}{2}\\right) = (0,0)", "explanation": "Each averaged coordinate must equal zero, because the origin has coordinates $(0,0)$.", "diagram": null },
        { "stepNumber": 2, "description": "Set up the $x$-equation.", "workingLatex": "\\dfrac{-3 + x_B}{2} = 0", "explanation": "The two $x$-values must average to zero.", "diagram": null },
        { "stepNumber": 3, "description": "Solve for $x_B$.", "workingLatex": "-3 + x_B = 0 \\Rightarrow x_B = 3", "explanation": "For a sum to be zero, the second value must be the opposite of the first.", "diagram": null },
        { "stepNumber": 4, "description": "Set up the $y$-equation.", "workingLatex": "\\dfrac{4 + y_B}{2} = 0", "explanation": "The two $y$-values must also average to zero.", "diagram": null },
        { "stepNumber": 5, "description": "Solve for $y_B$.", "workingLatex": "4 + y_B = 0 \\Rightarrow y_B = -4", "explanation": "Again $y_B$ is the opposite of the known value.", "diagram": null },
        { "stepNumber": 6, "description": "Write the endpoint.", "workingLatex": "B = (3, -4)", "explanation": "When the origin is the midpoint, $B$ is just the point $A$ with both signs reversed.", "diagram": null },
        { "stepNumber": 7, "description": "Check by averaging.", "workingLatex": "\\left(\\dfrac{-3+3}{2}, \\dfrac{4+(-4)}{2}\\right) = (0,0)", "explanation": "Substituting back gives the origin, confirming the result.", "diagram": null }
      ],
      "finalAnswer": "$(3, -4)$"
    }
  },
  {
    "id": "gcse.algebra.coordinates.q020",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Coordinates",
    "subtopicId": "gcse.algebra.coordinates",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "value",
    "tags": ["coordinates", "distance", "pythagoras", "distance formula"],
    "questionText": "Find the distance between the points $A(1, 2)$ and $B(4, 6)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall the distance formula.", "workingLatex": "d = \\sqrt{(x_2-x_1)^2 + (y_2-y_1)^2}", "explanation": "The straight-line distance is the hypotenuse of a right-angled triangle whose legs are the horizontal and vertical gaps, so this is Pythagoras in disguise.", "diagram": null },
        { "stepNumber": 2, "description": "Find the horizontal change.", "workingLatex": "x_2 - x_1 = 4 - 1 = 3", "explanation": "This is how far apart the points are across.", "diagram": null },
        { "stepNumber": 3, "description": "Find the vertical change.", "workingLatex": "y_2 - y_1 = 6 - 2 = 4", "explanation": "This is how far apart the points are up.", "diagram": null },
        { "stepNumber": 4, "description": "Square each change.", "workingLatex": "3^2 = 9,\\quad 4^2 = 16", "explanation": "Squaring the legs prepares them for Pythagoras and removes any negative signs.", "diagram": null },
        { "stepNumber": 5, "description": "Add the squares.", "workingLatex": "9 + 16 = 25", "explanation": "The sum of the squared legs equals the square of the distance.", "diagram": null },
        { "stepNumber": 6, "description": "Take the square root.", "workingLatex": "d = \\sqrt{25} = 5", "explanation": "The distance is the positive square root of $25$.", "diagram": null },
        { "stepNumber": 7, "description": "State the distance.", "workingLatex": "AB = 5 \\text{ units}", "explanation": "This is the length of the segment joining $A$ and $B$.", "diagram": null }
      ],
      "finalAnswer": "$5$ units"
    }
  },
  {
    "id": "gcse.algebra.coordinates.q021",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Coordinates",
    "subtopicId": "gcse.algebra.coordinates",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "value",
    "tags": ["coordinates", "distance", "pythagoras", "origin"],
    "questionText": "Find the distance from the origin $O(0, 0)$ to the point $P(6, 8)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall the distance formula.", "workingLatex": "d = \\sqrt{(x_2-x_1)^2 + (y_2-y_1)^2}", "explanation": "The distance is the hypotenuse of a right-angled triangle formed by the horizontal and vertical gaps.", "diagram": null },
        { "stepNumber": 2, "description": "Find the horizontal change.", "workingLatex": "6 - 0 = 6", "explanation": "Because we start at the origin, the horizontal gap is just the $x$-coordinate of $P$.", "diagram": null },
        { "stepNumber": 3, "description": "Find the vertical change.", "workingLatex": "8 - 0 = 8", "explanation": "Similarly the vertical gap is just the $y$-coordinate of $P$.", "diagram": null },
        { "stepNumber": 4, "description": "Square each change.", "workingLatex": "6^2 = 36,\\quad 8^2 = 64", "explanation": "Squaring prepares the legs for Pythagoras.", "diagram": null },
        { "stepNumber": 5, "description": "Add the squares.", "workingLatex": "36 + 64 = 100", "explanation": "This total equals the square of the distance.", "diagram": null },
        { "stepNumber": 6, "description": "Take the square root.", "workingLatex": "d = \\sqrt{100} = 10", "explanation": "The distance is the positive root of $100$.", "diagram": null },
        { "stepNumber": 7, "description": "State the distance.", "workingLatex": "OP = 10 \\text{ units}", "explanation": "This recognises the classic $6$–$8$–$10$ right-angled triangle.", "diagram": null }
      ],
      "finalAnswer": "$10$ units"
    }
  },
  {
    "id": "gcse.algebra.coordinates.q022",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Coordinates",
    "subtopicId": "gcse.algebra.coordinates",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "value",
    "tags": ["coordinates", "distance", "pythagoras", "negative coordinates"],
    "questionText": "Find the distance between $A(-1, -1)$ and $B(2, 3)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall the distance formula.", "workingLatex": "d = \\sqrt{(x_2-x_1)^2 + (y_2-y_1)^2}", "explanation": "The formula still applies with negative coordinates; subtracting handles the signs automatically.", "diagram": null },
        { "stepNumber": 2, "description": "Find the horizontal change.", "workingLatex": "2 - (-1) = 3", "explanation": "Subtracting a negative is the same as adding, giving a horizontal gap of $3$.", "diagram": null },
        { "stepNumber": 3, "description": "Find the vertical change.", "workingLatex": "3 - (-1) = 4", "explanation": "Again subtracting the negative gives a vertical gap of $4$.", "diagram": null },
        { "stepNumber": 4, "description": "Square each change.", "workingLatex": "3^2 = 9,\\quad 4^2 = 16", "explanation": "Squaring makes both legs positive and prepares for Pythagoras.", "diagram": null },
        { "stepNumber": 5, "description": "Add the squares.", "workingLatex": "9 + 16 = 25", "explanation": "The sum equals the square of the distance.", "diagram": null },
        { "stepNumber": 6, "description": "Take the square root.", "workingLatex": "d = \\sqrt{25} = 5", "explanation": "The distance is the positive root of $25$.", "diagram": null },
        { "stepNumber": 7, "description": "State the distance.", "workingLatex": "AB = 5 \\text{ units}", "explanation": "So the two points are $5$ units apart.", "diagram": null }
      ],
      "finalAnswer": "$5$ units"
    }
  },
  {
    "id": "gcse.algebra.coordinates.q023",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Coordinates",
    "subtopicId": "gcse.algebra.coordinates",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "value",
    "tags": ["coordinates", "distance", "pythagoras", "surd"],
    "questionText": "Find the exact distance between $A(1, 1)$ and $B(4, 7)$, giving your answer as a simplified surd.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall the distance formula.", "workingLatex": "d = \\sqrt{(x_2-x_1)^2 + (y_2-y_1)^2}", "explanation": "We use the same right-angled-triangle idea, but this time the answer will not be a whole number.", "diagram": null },
        { "stepNumber": 2, "description": "Find the horizontal change.", "workingLatex": "4 - 1 = 3", "explanation": "This is the horizontal leg of the triangle for $A(1,1)$ and $B(4,7)$.", "diagram": null },
        { "stepNumber": 3, "description": "Find the vertical change.", "workingLatex": "7 - 1 = 6", "explanation": "This is the vertical leg.", "diagram": null },
        { "stepNumber": 4, "description": "Square each change.", "workingLatex": "3^2 = 9,\\quad 6^2 = 36", "explanation": "Squaring the legs sets up Pythagoras.", "diagram": null },
        { "stepNumber": 5, "description": "Add the squares.", "workingLatex": "9 + 36 = 45", "explanation": "The total is the square of the distance.", "diagram": null },
        { "stepNumber": 6, "description": "Take the square root.", "workingLatex": "d = \\sqrt{45}", "explanation": "The distance is the positive root of $45$, which is not a whole number.", "diagram": null },
        { "stepNumber": 7, "description": "Simplify the surd.", "workingLatex": "\\sqrt{45} = \\sqrt{9 \\times 5} = 3\\sqrt{5}", "explanation": "Since $45 = 9 \\times 5$ and $9$ is a perfect square, we can take the $3$ outside the root.", "diagram": null },
        { "stepNumber": 8, "description": "State the exact distance.", "workingLatex": "AB = 3\\sqrt{5} \\text{ units}", "explanation": "Leaving the answer as a surd keeps it exact rather than rounded.", "diagram": null }
      ],
      "finalAnswer": "$3\\sqrt{5}$ units"
    }
  },
  {
    "id": "gcse.algebra.coordinates.q024",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Coordinates",
    "subtopicId": "gcse.algebra.coordinates",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "coordinate",
    "tags": ["coordinates", "rectangle", "fourth vertex", "geometry"],
    "questionText": "Three vertices of a rectangle are $A(1, 1)$, $B(5, 1)$ and $C(5, 4)$. Find the coordinates of the fourth vertex $D$.",
    "questionDiagram": {
      "kind": "functionGraph",
      "xMin": 0, "xMax": 7, "yMin": 0, "yMax": 6,
      "curves": [{ "points": [{ "x": 1, "y": 1 }, { "x": 5, "y": 1 }, { "x": 5, "y": 4 }], "color": "ink" }],
      "points": [
        { "x": 1, "y": 1, "label": "A", "color": "ink" },
        { "x": 5, "y": 1, "label": "B", "color": "ink" },
        { "x": 5, "y": 4, "label": "C", "color": "ink" },
        { "x": 1, "y": 4, "label": "D", "color": "accent", "open": true }
      ],
      "alt": "Three corners of a rectangle A(1,1), B(5,1), C(5,4) with the missing corner D shown hollow at (1,4)."
    },
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Understand the shape.", "workingLatex": "ABCD \\text{ a rectangle}", "explanation": "In a rectangle opposite sides are equal and parallel, and the corners follow round in order, so $D$ completes the loop from $C$ back to $A$.", "diagram": null },
        { "stepNumber": 2, "description": "Look at the known sides.", "workingLatex": "A(1,1)\\to B(5,1)\\to C(5,4)", "explanation": "Side $AB$ is horizontal and side $BC$ is vertical, confirming right angles at each corner.", "diagram": null },
        { "stepNumber": 3, "description": "Match $D$ to $C$ across the top.", "workingLatex": "DC \\parallel AB", "explanation": "Side $DC$ must be parallel and equal to $AB$, so $D$ has the same $y$-value as $C$.", "diagram": null },
        { "stepNumber": 4, "description": "Find the $x$-coordinate of $D$.", "workingLatex": "x_D = x_A = 1", "explanation": "Side $AD$ is vertical like $BC$, so $D$ sits directly above $A$ and shares its $x$-value.", "diagram": null },
        { "stepNumber": 5, "description": "Find the $y$-coordinate of $D$.", "workingLatex": "y_D = y_C = 4", "explanation": "Side $DC$ is horizontal like $AB$, so $D$ is level with $C$ and shares its $y$-value.", "diagram": null },
        { "stepNumber": 6, "description": "Write the vertex.", "workingLatex": "D = (1, 4)", "explanation": "Combining the coordinates gives the fourth corner.", "diagram": null },
        { "stepNumber": 7, "description": "Check opposite sides match.", "workingLatex": "AB = 4 = DC,\\ BC = 3 = AD", "explanation": "Opposite sides come out equal, confirming a genuine rectangle.", "diagram": null }
      ],
      "finalAnswer": "$(1, 4)$"
    }
  },
  {
    "id": "gcse.algebra.coordinates.q025",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Coordinates",
    "subtopicId": "gcse.algebra.coordinates",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "coordinate",
    "tags": ["coordinates", "midpoint", "negative coordinates", "midpoint formula"],
    "questionText": "Find the midpoint of the line segment joining $A(-5, 3)$ and $B(4, -7)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall the midpoint formula.", "workingLatex": "M = \\left(\\dfrac{x_1+x_2}{2}, \\dfrac{y_1+y_2}{2}\\right)", "explanation": "We average the endpoints, taking care with mixed signs.", "diagram": null },
        { "stepNumber": 2, "description": "List the coordinates.", "workingLatex": "A(-5,3),\\ B(4,-7)", "explanation": "Each point has one positive and one negative coordinate, so care is needed.", "diagram": null },
        { "stepNumber": 3, "description": "Average the $x$-coordinates.", "workingLatex": "\\dfrac{-5+4}{2} = \\dfrac{-1}{2} = -0.5", "explanation": "The $x$-values add to $-1$, and half of that is $-0.5$.", "diagram": null },
        { "stepNumber": 4, "description": "Average the $y$-coordinates.", "workingLatex": "\\dfrac{3+(-7)}{2} = \\dfrac{-4}{2} = -2", "explanation": "The $y$-values add to $-4$, giving $-2$.", "diagram": null },
        { "stepNumber": 5, "description": "Write the midpoint.", "workingLatex": "M = (-0.5, -2)", "explanation": "Combining the averages gives the midpoint, here with a decimal $x$-value.", "diagram": null },
        { "stepNumber": 6, "description": "Check each value lies between.", "workingLatex": "-5 < -0.5 < 4,\\ -7 < -2 < 3", "explanation": "Both coordinates sit between the endpoints, confirming the answer is reasonable.", "diagram": null }
      ],
      "finalAnswer": "$(-0.5, -2)$"
    }
  },
  {
    "id": "gcse.algebra.coordinates.q026",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Coordinates",
    "subtopicId": "gcse.algebra.coordinates",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "coordinate",
    "tags": ["coordinates", "midpoint", "finding an endpoint", "negative coordinates"],
    "questionText": "$M(1, -2)$ is the midpoint of $P(-3, 4)$ and $Q$. Find the coordinates of $Q$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall the midpoint formula.", "workingLatex": "M = \\left(\\dfrac{x_P+x_Q}{2}, \\dfrac{y_P+y_Q}{2}\\right)", "explanation": "We work backwards from the midpoint and one endpoint to find the other endpoint.", "diagram": null },
        { "stepNumber": 2, "description": "Set up the $x$-equation.", "workingLatex": "\\dfrac{-3 + x_Q}{2} = 1", "explanation": "The average of the $x$-values equals the midpoint's $x$-value.", "diagram": null },
        { "stepNumber": 3, "description": "Solve for $x_Q$.", "workingLatex": "-3 + x_Q = 2 \\Rightarrow x_Q = 5", "explanation": "Clearing the fraction and adding $3$ gives $x_Q$.", "diagram": null },
        { "stepNumber": 4, "description": "Set up the $y$-equation.", "workingLatex": "\\dfrac{4 + y_Q}{2} = -2", "explanation": "The average of the $y$-values equals the midpoint's $y$-value.", "diagram": null },
        { "stepNumber": 5, "description": "Solve for $y_Q$.", "workingLatex": "4 + y_Q = -4 \\Rightarrow y_Q = -8", "explanation": "Clearing the fraction gives $4 + y_Q = -4$, so $y_Q = -8$.", "diagram": null },
        { "stepNumber": 6, "description": "Write the endpoint.", "workingLatex": "Q = (5, -8)", "explanation": "Combining the two solved values gives $Q$.", "diagram": null },
        { "stepNumber": 7, "description": "Check the midpoint.", "workingLatex": "\\left(\\dfrac{-3+5}{2}, \\dfrac{4+(-8)}{2}\\right) = (1,-2)", "explanation": "Substituting $Q$ back returns the given midpoint, confirming the answer.", "diagram": null }
      ],
      "finalAnswer": "$(5, -8)$"
    }
  },
  {
    "id": "gcse.algebra.coordinates.q027",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Coordinates",
    "subtopicId": "gcse.algebra.coordinates",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "coordinate",
    "tags": ["coordinates", "rectangle", "centre", "diagonals"],
    "questionText": "A rectangle has vertices $A(0, 0)$, $B(8, 0)$, $C(8, 6)$ and $D(0, 6)$. Find the coordinates of the centre of the rectangle.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall a key property of a rectangle's diagonals.", "workingLatex": "\\text{diagonals bisect each other}", "explanation": "The two diagonals of a rectangle cross exactly at their shared midpoint, which is the centre of the rectangle.", "diagram": null },
        { "stepNumber": 2, "description": "Choose one diagonal.", "workingLatex": "AC: A(0,0)\\ \\text{to}\\ C(8,6)", "explanation": "Any diagonal will do; the midpoint of $AC$ is the centre.", "diagram": null },
        { "stepNumber": 3, "description": "Average the $x$-coordinates.", "workingLatex": "\\dfrac{0+8}{2} = 4", "explanation": "This gives the horizontal position of the centre.", "diagram": null },
        { "stepNumber": 4, "description": "Average the $y$-coordinates.", "workingLatex": "\\dfrac{0+6}{2} = 3", "explanation": "This gives the vertical position of the centre.", "diagram": null },
        { "stepNumber": 5, "description": "Write the centre.", "workingLatex": "\\text{centre} = (4, 3)", "explanation": "Combining the two averages gives the centre of the rectangle.", "diagram": null },
        { "stepNumber": 6, "description": "Check with the other diagonal.", "workingLatex": "BD: \\left(\\dfrac{8+0}{2}, \\dfrac{0+6}{2}\\right) = (4,3)", "explanation": "The midpoint of the other diagonal $BD$ gives the same point, confirming the centre.", "diagram": null }
      ],
      "finalAnswer": "$(4, 3)$"
    }
  },
  {
    "id": "gcse.algebra.coordinates.q028",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Coordinates",
    "subtopicId": "gcse.algebra.coordinates",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "coordinate",
    "tags": ["coordinates", "parallelogram", "fourth vertex", "diagonals"],
    "questionText": "$ABCD$ is a parallelogram with $A(1, 2)$, $B(4, 3)$ and $C(6, 7)$. Find the coordinates of $D$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall a property of a parallelogram's diagonals.", "workingLatex": "\\text{diagonals } AC \\text{ and } BD \\text{ bisect each other}", "explanation": "In a parallelogram the diagonals cross at their common midpoint, which we can use to pin down the missing vertex.", "diagram": null },
        { "stepNumber": 2, "description": "Find the midpoint of diagonal $AC$.", "workingLatex": "M = \\left(\\dfrac{1+6}{2}, \\dfrac{2+7}{2}\\right) = (3.5, 4.5)", "explanation": "This midpoint is the centre of the parallelogram, and diagonal $BD$ must also pass through it.", "diagram": null },
        { "stepNumber": 3, "description": "Use $M$ as the midpoint of $BD$.", "workingLatex": "\\left(\\dfrac{4+x_D}{2}, \\dfrac{3+y_D}{2}\\right) = (3.5, 4.5)", "explanation": "Since $M$ is also the midpoint of $BD$, we set the average of $B$ and $D$ equal to $M$.", "diagram": null },
        { "stepNumber": 4, "description": "Solve for $x_D$.", "workingLatex": "\\dfrac{4+x_D}{2} = 3.5 \\Rightarrow x_D = 3", "explanation": "Clearing the fraction gives $4 + x_D = 7$, so $x_D = 3$.", "diagram": null },
        { "stepNumber": 5, "description": "Solve for $y_D$.", "workingLatex": "\\dfrac{3+y_D}{2} = 4.5 \\Rightarrow y_D = 6", "explanation": "Clearing the fraction gives $3 + y_D = 9$, so $y_D = 6$.", "diagram": null },
        { "stepNumber": 6, "description": "Write the vertex.", "workingLatex": "D = (3, 6)", "explanation": "Combining the two values gives the fourth vertex.", "diagram": null },
        { "stepNumber": 7, "description": "Check with the vector shortcut.", "workingLatex": "D = A + C - B = (1+6-4,\\ 2+7-3) = (3,6)", "explanation": "The relation $D = A + C - B$ comes straight from equal midpoints and confirms the answer.", "diagram": null }
      ],
      "finalAnswer": "$(3, 6)$"
    }
  },
  {
    "id": "gcse.algebra.coordinates.q029",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Coordinates",
    "subtopicId": "gcse.algebra.coordinates",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "coordinate",
    "tags": ["coordinates", "midpoint", "finding an endpoint", "reverse"],
    "questionText": "The midpoint of $A(a, b)$ and $C(10, 4)$ is $(7, 5)$. Find the coordinates of $A$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall the midpoint formula.", "workingLatex": "\\left(\\dfrac{a+10}{2}, \\dfrac{b+4}{2}\\right) = (7,5)", "explanation": "The averaged coordinates of $A$ and $C$ must equal the given midpoint.", "diagram": null },
        { "stepNumber": 2, "description": "Form the $x$-equation.", "workingLatex": "\\dfrac{a+10}{2} = 7", "explanation": "Matching the $x$-parts gives an equation for $a$.", "diagram": null },
        { "stepNumber": 3, "description": "Solve for $a$.", "workingLatex": "a + 10 = 14 \\Rightarrow a = 4", "explanation": "Clearing the fraction and subtracting $10$ gives $a$.", "diagram": null },
        { "stepNumber": 4, "description": "Form the $y$-equation.", "workingLatex": "\\dfrac{b+4}{2} = 5", "explanation": "Matching the $y$-parts gives an equation for $b$.", "diagram": null },
        { "stepNumber": 5, "description": "Solve for $b$.", "workingLatex": "b + 4 = 10 \\Rightarrow b = 6", "explanation": "Clearing the fraction and subtracting $4$ gives $b$.", "diagram": null },
        { "stepNumber": 6, "description": "Write the point.", "workingLatex": "A = (4, 6)", "explanation": "Combining $a$ and $b$ gives the coordinates of $A$.", "diagram": null },
        { "stepNumber": 7, "description": "Check the midpoint.", "workingLatex": "\\left(\\dfrac{4+10}{2}, \\dfrac{6+4}{2}\\right) = (7,5)", "explanation": "Substituting back returns the given midpoint, confirming the answer.", "diagram": null }
      ],
      "finalAnswer": "$(4, 6)$"
    }
  },
  {
    "id": "gcse.algebra.coordinates.q030",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Coordinates",
    "subtopicId": "gcse.algebra.coordinates",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "value",
    "tags": ["coordinates", "midpoint", "on an axis", "unknown"],
    "questionText": "$A$ has coordinates $(-6, 2)$ and $B$ has coordinates $(k, 8)$. The midpoint of $AB$ lies on the $y$-axis. Find the value of $k$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "State what lying on the $y$-axis means.", "workingLatex": "x\\text{-coordinate of midpoint} = 0", "explanation": "A point sits on the $y$-axis exactly when its $x$-coordinate is zero.", "diagram": null },
        { "stepNumber": 2, "description": "Write the midpoint's $x$-coordinate.", "workingLatex": "\\dfrac{-6 + k}{2}", "explanation": "The midpoint's $x$-value is the average of the two $x$-coordinates.", "diagram": null },
        { "stepNumber": 3, "description": "Set it equal to zero.", "workingLatex": "\\dfrac{-6 + k}{2} = 0", "explanation": "This is the condition for the midpoint to be on the $y$-axis.", "diagram": null },
        { "stepNumber": 4, "description": "Clear the fraction.", "workingLatex": "-6 + k = 0", "explanation": "Multiplying both sides by $2$ removes the denominator.", "diagram": null },
        { "stepNumber": 5, "description": "Solve for $k$.", "workingLatex": "k = 6", "explanation": "Adding $6$ to both sides isolates $k$.", "diagram": null },
        { "stepNumber": 6, "description": "Check the midpoint.", "workingLatex": "\\left(\\dfrac{-6+6}{2}, \\dfrac{2+8}{2}\\right) = (0, 5)", "explanation": "The midpoint $(0,5)$ has $x = 0$, so it does lie on the $y$-axis as required.", "diagram": null }
      ],
      "finalAnswer": "$k = 6$"
    }
  },
  {
    "id": "gcse.algebra.coordinates.q031",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Coordinates",
    "subtopicId": "gcse.algebra.coordinates",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "value",
    "tags": ["coordinates", "midpoint", "on an axis", "unknown"],
    "questionText": "$P$ has coordinates $(3, -4)$ and $Q$ has coordinates $(3, t)$. The midpoint of $PQ$ lies on the $x$-axis. Find the value of $t$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "State what lying on the $x$-axis means.", "workingLatex": "y\\text{-coordinate of midpoint} = 0", "explanation": "A point sits on the $x$-axis exactly when its $y$-coordinate is zero.", "diagram": null },
        { "stepNumber": 2, "description": "Write the midpoint's $y$-coordinate.", "workingLatex": "\\dfrac{-4 + t}{2}", "explanation": "The midpoint's $y$-value is the average of the two $y$-coordinates.", "diagram": null },
        { "stepNumber": 3, "description": "Set it equal to zero.", "workingLatex": "\\dfrac{-4 + t}{2} = 0", "explanation": "This is the condition for the midpoint to be on the $x$-axis.", "diagram": null },
        { "stepNumber": 4, "description": "Clear the fraction.", "workingLatex": "-4 + t = 0", "explanation": "Multiplying through by $2$ removes the denominator.", "diagram": null },
        { "stepNumber": 5, "description": "Solve for $t$.", "workingLatex": "t = 4", "explanation": "Adding $4$ to both sides isolates $t$.", "diagram": null },
        { "stepNumber": 6, "description": "Check the midpoint.", "workingLatex": "\\left(3, \\dfrac{-4+4}{2}\\right) = (3, 0)", "explanation": "The midpoint $(3,0)$ has $y = 0$, so it lies on the $x$-axis as required.", "diagram": null }
      ],
      "finalAnswer": "$t = 4$"
    }
  },
  {
    "id": "gcse.algebra.coordinates.q032",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Coordinates",
    "subtopicId": "gcse.algebra.coordinates",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "value",
    "tags": ["coordinates", "distance", "pythagoras", "rounding"],
    "questionText": "Find the distance between $A(2, 1)$ and $B(7, 4)$. Give your answer to 2 decimal places.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall the distance formula.", "workingLatex": "d = \\sqrt{(x_2-x_1)^2 + (y_2-y_1)^2}", "explanation": "The distance is the hypotenuse of a right-angled triangle made by the horizontal and vertical gaps.", "diagram": null },
        { "stepNumber": 2, "description": "Find the horizontal change.", "workingLatex": "7 - 2 = 5", "explanation": "This is the horizontal leg.", "diagram": null },
        { "stepNumber": 3, "description": "Find the vertical change.", "workingLatex": "4 - 1 = 3", "explanation": "This is the vertical leg.", "diagram": null },
        { "stepNumber": 4, "description": "Square each change.", "workingLatex": "5^2 = 25,\\quad 3^2 = 9", "explanation": "Squaring prepares for Pythagoras.", "diagram": null },
        { "stepNumber": 5, "description": "Add the squares.", "workingLatex": "25 + 9 = 34", "explanation": "This total is the square of the distance.", "diagram": null },
        { "stepNumber": 6, "description": "Take the square root.", "workingLatex": "d = \\sqrt{34}", "explanation": "Since $34$ is not a perfect square, the exact distance is a surd.", "diagram": null },
        { "stepNumber": 7, "description": "Evaluate and round.", "workingLatex": "\\sqrt{34} \\approx 5.83", "explanation": "A calculator gives $5.8309\\ldots$, which rounds to $5.83$ to two decimal places.", "diagram": null }
      ],
      "finalAnswer": "$5.83$ units"
    }
  },
  {
    "id": "gcse.algebra.coordinates.q033",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Coordinates",
    "subtopicId": "gcse.algebra.coordinates",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "value",
    "tags": ["coordinates", "perimeter", "distance", "triangle"],
    "questionText": "A triangle has vertices $A(0, 0)$, $B(4, 0)$ and $C(0, 3)$. Find the perimeter of the triangle.",
    "questionDiagram": {
      "kind": "functionGraph",
      "xMin": -1, "xMax": 6, "yMin": -1, "yMax": 5,
      "curves": [{ "points": [{ "x": 0, "y": 0 }, { "x": 4, "y": 0 }, { "x": 0, "y": 3 }, { "x": 0, "y": 0 }], "color": "ink" }],
      "points": [
        { "x": 0, "y": 0, "label": "A", "color": "ink" },
        { "x": 4, "y": 0, "label": "B", "color": "ink" },
        { "x": 0, "y": 3, "label": "C", "color": "ink" }
      ],
      "alt": "A right-angled triangle with the right angle at the origin A, B on the x-axis at (4,0) and C on the y-axis at (0,3)."
    },
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Plan the calculation.", "workingLatex": "P = AB + BC + CA", "explanation": "The perimeter is the total of the three side lengths, so we find each side in turn.", "diagram": null },
        { "stepNumber": 2, "description": "Find $AB$ (horizontal).", "workingLatex": "AB = 4 - 0 = 4", "explanation": "$A$ and $B$ share the same $y$-value, so this side is just the horizontal gap.", "diagram": null },
        { "stepNumber": 3, "description": "Find $CA$ (vertical).", "workingLatex": "CA = 3 - 0 = 3", "explanation": "$C$ and $A$ share the same $x$-value, so this side is just the vertical gap.", "diagram": null },
        { "stepNumber": 4, "description": "Find $BC$ with the distance formula.", "workingLatex": "BC = \\sqrt{(4-0)^2 + (0-3)^2}", "explanation": "$B$ and $C$ are neither level nor stacked, so we use Pythagoras for the slanted side.", "diagram": null },
        { "stepNumber": 5, "description": "Evaluate $BC$.", "workingLatex": "BC = \\sqrt{16 + 9} = \\sqrt{25} = 5", "explanation": "The squared gaps add to $25$, giving a hypotenuse of $5$.", "diagram": null },
        { "stepNumber": 6, "description": "Add the three sides.", "workingLatex": "P = 4 + 3 + 5 = 12", "explanation": "Summing the sides gives the perimeter.", "diagram": null },
        { "stepNumber": 7, "description": "State the perimeter.", "workingLatex": "P = 12 \\text{ units}", "explanation": "This is a $3$–$4$–$5$ right-angled triangle, so its perimeter is $12$ units.", "diagram": null }
      ],
      "finalAnswer": "$12$ units"
    }
  },
  {
    "id": "gcse.algebra.coordinates.q034",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Coordinates",
    "subtopicId": "gcse.algebra.coordinates",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "text",
    "tags": ["coordinates", "distance", "comparing distances", "reasoning"],
    "questionText": "Point $A(3, 4)$ and point $B(-5, 2)$ are given. Determine which of $A$ and $B$ is closer to the origin.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Decide on a method.", "workingLatex": "\\text{compare } OA \\text{ and } OB", "explanation": "We find each point's distance from the origin and compare; the smaller distance is closer.", "diagram": null },
        { "stepNumber": 2, "description": "Find $OA$ using the distance formula.", "workingLatex": "OA = \\sqrt{3^2 + 4^2}", "explanation": "From the origin the horizontal and vertical gaps are just the coordinates of $A$.", "diagram": null },
        { "stepNumber": 3, "description": "Evaluate $OA$.", "workingLatex": "OA = \\sqrt{9 + 16} = \\sqrt{25} = 5", "explanation": "The squared coordinates add to $25$, giving a distance of $5$.", "diagram": null },
        { "stepNumber": 4, "description": "Find $OB$ using the distance formula.", "workingLatex": "OB = \\sqrt{(-5)^2 + 2^2}", "explanation": "Squaring removes the negative sign, so the direction does not matter.", "diagram": null },
        { "stepNumber": 5, "description": "Evaluate $OB$.", "workingLatex": "OB = \\sqrt{25 + 4} = \\sqrt{29} \\approx 5.39", "explanation": "The squared coordinates add to $29$, giving about $5.39$.", "diagram": null },
        { "stepNumber": 6, "description": "Compare the distances.", "workingLatex": "5 < \\sqrt{29}", "explanation": "Since $OA = 5$ is smaller than $OB \\approx 5.39$, point $A$ is nearer.", "diagram": null },
        { "stepNumber": 7, "description": "State the conclusion.", "workingLatex": "A \\text{ is closer to } O", "explanation": "Point $A$ lies closer to the origin than point $B$.", "diagram": null }
      ],
      "finalAnswer": "$A$ is closer to the origin ($OA = 5$ vs $OB = \\sqrt{29} \\approx 5.39$)"
    }
  },
  {
    "id": "gcse.algebra.coordinates.q035",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Coordinates",
    "subtopicId": "gcse.algebra.coordinates",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "coordinate",
    "tags": ["coordinates", "midpoint", "negative coordinates", "midpoint formula"],
    "questionText": "Find the midpoint of the line segment joining $A(-7, -3)$ and $B(1, 9)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall the midpoint formula.", "workingLatex": "M = \\left(\\dfrac{x_1+x_2}{2}, \\dfrac{y_1+y_2}{2}\\right)", "explanation": "We average each pair of coordinates.", "diagram": null },
        { "stepNumber": 2, "description": "List the coordinates.", "workingLatex": "A(-7,-3),\\ B(1,9)", "explanation": "Careful sign handling is needed for the negative values.", "diagram": null },
        { "stepNumber": 3, "description": "Average the $x$-coordinates.", "workingLatex": "\\dfrac{-7+1}{2} = \\dfrac{-6}{2} = -3", "explanation": "The $x$-values add to $-6$, giving $-3$.", "diagram": null },
        { "stepNumber": 4, "description": "Average the $y$-coordinates.", "workingLatex": "\\dfrac{-3+9}{2} = \\dfrac{6}{2} = 3", "explanation": "The $y$-values add to $6$, giving $3$.", "diagram": null },
        { "stepNumber": 5, "description": "Write the midpoint.", "workingLatex": "M = (-3, 3)", "explanation": "Combining the averages gives the midpoint.", "diagram": null },
        { "stepNumber": 6, "description": "Check each value lies between.", "workingLatex": "-7 < -3 < 1,\\ -3 < 3 < 9", "explanation": "Both coordinates fall between the endpoints, confirming the answer.", "diagram": null }
      ],
      "finalAnswer": "$(-3, 3)$"
    }
  },
  {
    "id": "gcse.algebra.coordinates.q036",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Coordinates",
    "subtopicId": "gcse.algebra.coordinates",
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "text",
    "tags": ["coordinates", "distance", "isosceles", "triangle", "reasoning"],
    "questionText": "A triangle has vertices $A(1, 1)$, $B(4, 5)$ and $C(8, 2)$. Show that the triangle is isosceles.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "State what isosceles means.", "workingLatex": "\\text{two sides equal}", "explanation": "A triangle is isosceles if at least two of its sides have the same length, so we compare the three side lengths.", "diagram": null },
        { "stepNumber": 2, "description": "Recall the distance formula.", "workingLatex": "d = \\sqrt{(x_2-x_1)^2 + (y_2-y_1)^2}", "explanation": "We use it to measure each side from the coordinates.", "diagram": null },
        { "stepNumber": 3, "description": "Find $AB$.", "workingLatex": "AB = \\sqrt{(4-1)^2 + (5-1)^2} = \\sqrt{9+16} = 5", "explanation": "The gaps of $3$ and $4$ give the familiar length $5$.", "diagram": null },
        { "stepNumber": 4, "description": "Find $BC$.", "workingLatex": "BC = \\sqrt{(8-4)^2 + (2-5)^2} = \\sqrt{16+9} = 5", "explanation": "The gaps of $4$ and $3$ also give a length of $5$.", "diagram": null },
        { "stepNumber": 5, "description": "Find $AC$.", "workingLatex": "AC = \\sqrt{(8-1)^2 + (2-1)^2} = \\sqrt{49+1} = \\sqrt{50}", "explanation": "The third side has a different length, $\\sqrt{50} = 5\\sqrt{2}$.", "diagram": null },
        { "stepNumber": 6, "description": "Compare the sides.", "workingLatex": "AB = BC = 5 \\ne AC", "explanation": "Two of the sides are equal in length while the third differs.", "diagram": null },
        { "stepNumber": 7, "description": "State the conclusion.", "workingLatex": "\\therefore \\text{isosceles}", "explanation": "Because $AB = BC$, the triangle has two equal sides and is therefore isosceles.", "diagram": null }
      ],
      "finalAnswer": "$AB = BC = 5$ (and $AC = 5\\sqrt{2}$), so the triangle is isosceles."
    }
  },
  {
    "id": "gcse.algebra.coordinates.q037",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Coordinates",
    "subtopicId": "gcse.algebra.coordinates",
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "text",
    "tags": ["coordinates", "distance", "pythagoras converse", "right angle"],
    "questionText": "The points $A(0, 0)$, $B(6, 3)$ and $C(3, 9)$ form a triangle. Show that angle $ABC$ is a right angle.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Decide on a strategy.", "workingLatex": "\\text{use the converse of Pythagoras}", "explanation": "If the two shorter sides squared add up to the longest side squared, the angle between the two shorter sides is $90^{\\circ}$.", "diagram": null },
        { "stepNumber": 2, "description": "Find $AB^2$.", "workingLatex": "AB^2 = (6-0)^2 + (3-0)^2 = 36 + 9 = 45", "explanation": "We keep the squared lengths, since the converse of Pythagoras compares squares.", "diagram": null },
        { "stepNumber": 3, "description": "Find $BC^2$.", "workingLatex": "BC^2 = (3-6)^2 + (9-3)^2 = 9 + 36 = 45", "explanation": "This side meets $AB$ at the vertex $B$, the angle we are testing.", "diagram": null },
        { "stepNumber": 4, "description": "Find $AC^2$.", "workingLatex": "AC^2 = (3-0)^2 + (9-0)^2 = 9 + 81 = 90", "explanation": "$AC$ is the side opposite $B$, so it should be the hypotenuse if the angle is right.", "diagram": null },
        { "stepNumber": 5, "description": "Add the two shorter squared sides.", "workingLatex": "AB^2 + BC^2 = 45 + 45 = 90", "explanation": "These are the two sides meeting at $B$.", "diagram": null },
        { "stepNumber": 6, "description": "Compare with the longest squared side.", "workingLatex": "AB^2 + BC^2 = 90 = AC^2", "explanation": "The sum equals $AC^2$, exactly the condition in the converse of Pythagoras.", "diagram": null },
        { "stepNumber": 7, "description": "State the conclusion.", "workingLatex": "\\therefore \\angle ABC = 90^{\\circ}", "explanation": "Because the Pythagoras relation holds for the sides at $B$, angle $ABC$ is a right angle.", "diagram": null }
      ],
      "finalAnswer": "$AB^2 + BC^2 = 45 + 45 = 90 = AC^2$, so $\\angle ABC = 90^{\\circ}$."
    }
  },
  {
    "id": "gcse.algebra.coordinates.q038",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Coordinates",
    "subtopicId": "gcse.algebra.coordinates",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "coordinate",
    "tags": ["coordinates", "square", "fourth vertex", "geometry"],
    "questionText": "A square has three vertices at $A(2, 1)$, $B(2, 5)$ and $C(6, 5)$. Find the coordinates of the fourth vertex $D$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Understand the layout.", "workingLatex": "ABCD \\text{ a square}", "explanation": "The vertices go round in order, so $D$ must join $C$ back to $A$ while keeping all sides equal and at right angles.", "diagram": null },
        { "stepNumber": 2, "description": "Check side $AB$.", "workingLatex": "AB: (2,1)\\to(2,5),\\ \\text{length } 4 \\ (\\text{vertical})", "explanation": "Side $AB$ is vertical with length $4$.", "diagram": null },
        { "stepNumber": 3, "description": "Check side $BC$.", "workingLatex": "BC: (2,5)\\to(6,5),\\ \\text{length } 4 \\ (\\text{horizontal})", "explanation": "Side $BC$ is horizontal with length $4$, matching $AB$ and turning through a right angle.", "diagram": null },
        { "stepNumber": 4, "description": "Match side $AD$ to $BC$.", "workingLatex": "AD \\parallel BC,\\ AD = 4", "explanation": "Side $AD$ must be horizontal and length $4$, going the same way as $BC$ from $A$.", "diagram": null },
        { "stepNumber": 5, "description": "Move from $A$ to find $D$.", "workingLatex": "D = (2+4,\\ 1) = (6, 1)", "explanation": "Adding $4$ to the $x$-coordinate of $A$ (keeping $y$ the same) reaches $D$.", "diagram": null },
        { "stepNumber": 6, "description": "Write the vertex.", "workingLatex": "D = (6, 1)", "explanation": "This is the fourth corner of the square.", "diagram": null },
        { "stepNumber": 7, "description": "Check side $CD$.", "workingLatex": "CD: (6,5)\\to(6,1),\\ \\text{length } 4", "explanation": "Side $CD$ is vertical with length $4$, so all four sides are equal — a genuine square.", "diagram": null }
      ],
      "finalAnswer": "$(6, 1)$"
    }
  },
  {
    "id": "gcse.algebra.coordinates.q039",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Coordinates",
    "subtopicId": "gcse.algebra.coordinates",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "value",
    "tags": ["coordinates", "distance", "unknown coordinate", "pythagoras"],
    "questionText": "The point $A(1, 2)$ is a distance of $5$ units from $B(4, k)$, where $k > 2$. Find the value of $k$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Write the distance formula squared.", "workingLatex": "(x_2-x_1)^2 + (y_2-y_1)^2 = d^2", "explanation": "Squaring both sides of the distance formula avoids working with a root while we solve.", "diagram": null },
        { "stepNumber": 2, "description": "Substitute the known values.", "workingLatex": "(4-1)^2 + (k-2)^2 = 5^2", "explanation": "We know the horizontal gap, the target distance, and that the vertical gap is $k - 2$.", "diagram": null },
        { "stepNumber": 3, "description": "Simplify the known terms.", "workingLatex": "9 + (k-2)^2 = 25", "explanation": "The horizontal part gives $9$ and the distance squared gives $25$.", "diagram": null },
        { "stepNumber": 4, "description": "Isolate the squared bracket.", "workingLatex": "(k-2)^2 = 16", "explanation": "Subtracting $9$ from both sides leaves the vertical part on its own.", "diagram": null },
        { "stepNumber": 5, "description": "Take the square root.", "workingLatex": "k - 2 = \\pm 4", "explanation": "Both $+4$ and $-4$ square to $16$, so we keep both possibilities for now.", "diagram": null },
        { "stepNumber": 6, "description": "Solve and apply the condition.", "workingLatex": "k = 6 \\ \\text{or}\\ k = -2", "explanation": "Adding $2$ gives two values; the condition $k > 2$ rules out $-2$.", "diagram": null },
        { "stepNumber": 7, "description": "State the answer.", "workingLatex": "k = 6", "explanation": "Only $k = 6$ satisfies both the distance and the given condition.", "diagram": null }
      ],
      "finalAnswer": "$k = 6$"
    }
  },
  {
    "id": "gcse.algebra.coordinates.q040",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Coordinates",
    "subtopicId": "gcse.algebra.coordinates",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "coordinate",
    "tags": ["coordinates", "midpoint", "diameter", "circle"],
    "questionText": "$PQ$ is a diameter of a circle, where $P(2, -1)$ and $Q(8, 7)$. Find the coordinates of the centre of the circle.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Link the centre to the diameter.", "workingLatex": "\\text{centre} = \\text{midpoint of } PQ", "explanation": "The centre of a circle is exactly halfway along any diameter, so we find the midpoint of $PQ$.", "diagram": null },
        { "stepNumber": 2, "description": "Recall the midpoint formula.", "workingLatex": "M = \\left(\\dfrac{x_1+x_2}{2}, \\dfrac{y_1+y_2}{2}\\right)", "explanation": "We average the endpoints of the diameter.", "diagram": null },
        { "stepNumber": 3, "description": "Average the $x$-coordinates.", "workingLatex": "\\dfrac{2+8}{2} = 5", "explanation": "This gives the horizontal position of the centre.", "diagram": null },
        { "stepNumber": 4, "description": "Average the $y$-coordinates.", "workingLatex": "\\dfrac{-1+7}{2} = 3", "explanation": "This gives the vertical position of the centre.", "diagram": null },
        { "stepNumber": 5, "description": "Write the centre.", "workingLatex": "\\text{centre} = (5, 3)", "explanation": "Combining the averages gives the centre of the circle.", "diagram": null },
        { "stepNumber": 6, "description": "Check it is between the endpoints.", "workingLatex": "2 < 5 < 8,\\ -1 < 3 < 7", "explanation": "The centre lies between $P$ and $Q$, as a midpoint should.", "diagram": null }
      ],
      "finalAnswer": "$(5, 3)$"
    }
  },
  {
    "id": "gcse.algebra.coordinates.q041",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Coordinates",
    "subtopicId": "gcse.algebra.coordinates",
    "difficulty": "Easy",
    "marks": 1,
    "answerType": "text",
    "tags": ["coordinates", "quadrants", "four quadrants"],
    "questionText": "In which quadrant does the point $(-4, 7)$ lie?",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall the sign pattern of each quadrant.", "workingLatex": "\\text{Q1 (+,+), Q2 (-,+), Q3 (-,-), Q4 (+,-)}", "explanation": "The signs of the coordinates tell us which quadrant a point is in.", "diagram": null },
        { "stepNumber": 2, "description": "Check the $x$-coordinate.", "workingLatex": "x = -4 < 0", "explanation": "A negative $x$ places the point left of the $y$-axis.", "diagram": null },
        { "stepNumber": 3, "description": "Check the $y$-coordinate.", "workingLatex": "y = 7 > 0", "explanation": "A positive $y$ places the point above the $x$-axis.", "diagram": null },
        { "stepNumber": 4, "description": "Combine the signs.", "workingLatex": "(-,\\,+)", "explanation": "Left of the $y$-axis and above the $x$-axis is the top-left region.", "diagram": null },
        { "stepNumber": 5, "description": "Name the region.", "workingLatex": "\\text{second quadrant}", "explanation": "The top-left region is the second quadrant.", "diagram": null },
        { "stepNumber": 6, "description": "State the answer.", "workingLatex": "\\text{Q2}", "explanation": "So $(-4,7)$ lies in the second quadrant.", "diagram": null }
      ],
      "finalAnswer": "The second quadrant"
    }
  },
  {
    "id": "gcse.algebra.coordinates.q042",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Coordinates",
    "subtopicId": "gcse.algebra.coordinates",
    "difficulty": "Easy",
    "marks": 1,
    "answerType": "coordinate",
    "tags": ["coordinates", "reading coordinates", "four quadrants"],
    "questionText": "Write down the coordinates of the point $R$ shown on the grid.",
    "questionDiagram": {
      "kind": "functionGraph",
      "xMin": -6, "xMax": 6, "yMin": -6, "yMax": 6,
      "curves": [],
      "points": [{ "x": -3, "y": -5, "label": "R", "color": "accent" }],
      "alt": "A coordinate grid with the point R marked 3 units left and 5 units down from the origin."
    },
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall the order of a coordinate.", "workingLatex": "(x, y)", "explanation": "We read across first, then up or down.", "diagram": null },
        { "stepNumber": 2, "description": "Read the horizontal position.", "workingLatex": "x = -3", "explanation": "The point is $3$ units to the left of the origin, so $x = -3$.", "diagram": null },
        { "stepNumber": 3, "description": "Read the vertical position.", "workingLatex": "y = -5", "explanation": "The point is $5$ units below the origin, so $y = -5$.", "diagram": null },
        { "stepNumber": 4, "description": "Write the pair in order.", "workingLatex": "(-3, -5)", "explanation": "Combining the across- and down-values gives the coordinate.", "diagram": null },
        { "stepNumber": 5, "description": "Sense-check the quadrant.", "workingLatex": "(-,\\,-)\\Rightarrow \\text{Q3}", "explanation": "Both coordinates negative places $R$ in the bottom-left region, matching the grid.", "diagram": null },
        { "stepNumber": 6, "description": "State the coordinates.", "workingLatex": "R = (-3, -5)", "explanation": "This is the position of $R$ read from the grid.", "diagram": null }
      ],
      "finalAnswer": "$(-3, -5)$"
    }
  },
  {
    "id": "gcse.algebra.coordinates.q043",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Coordinates",
    "subtopicId": "gcse.algebra.coordinates",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "coordinate",
    "tags": ["coordinates", "midpoint", "midpoint formula"],
    "questionText": "Find the midpoint of the line segment joining $A(10, 2)$ and $B(4, 8)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall the midpoint formula.", "workingLatex": "M = \\left(\\dfrac{x_1+x_2}{2}, \\dfrac{y_1+y_2}{2}\\right)", "explanation": "We average each pair of coordinates. The order of the two points does not matter.", "diagram": null },
        { "stepNumber": 2, "description": "List the coordinates.", "workingLatex": "A(10,2),\\ B(4,8)", "explanation": "Setting out the values keeps the working clear.", "diagram": null },
        { "stepNumber": 3, "description": "Average the $x$-coordinates.", "workingLatex": "\\dfrac{10+4}{2} = \\dfrac{14}{2} = 7", "explanation": "Half-way between $10$ and $4$ is $7$.", "diagram": null },
        { "stepNumber": 4, "description": "Average the $y$-coordinates.", "workingLatex": "\\dfrac{2+8}{2} = \\dfrac{10}{2} = 5", "explanation": "Half-way between $2$ and $8$ is $5$.", "diagram": null },
        { "stepNumber": 5, "description": "Write the midpoint.", "workingLatex": "M = (7, 5)", "explanation": "Combining the averages gives the midpoint.", "diagram": null },
        { "stepNumber": 6, "description": "Check by symmetry.", "workingLatex": "10-7 = 3 = 7-4", "explanation": "The midpoint is $3$ from each endpoint horizontally, confirming it is central.", "diagram": null }
      ],
      "finalAnswer": "$(7, 5)$"
    }
  },
  {
    "id": "gcse.algebra.coordinates.q044",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Coordinates",
    "subtopicId": "gcse.algebra.coordinates",
    "difficulty": "Easy",
    "marks": 1,
    "answerType": "text",
    "tags": ["coordinates", "axes", "origin"],
    "questionText": "Which point lies at the origin: $(0, 1)$, $(1, 0)$ or $(0, 0)$?",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "State what the origin is.", "workingLatex": "O = (0, 0)", "explanation": "The origin is where the two axes cross, so both of its coordinates are zero.", "diagram": null },
        { "stepNumber": 2, "description": "Test $(0, 1)$.", "workingLatex": "(0,1):\\ y = 1 \\ne 0", "explanation": "This point is $1$ unit up the $y$-axis, not at the crossing point.", "diagram": null },
        { "stepNumber": 3, "description": "Test $(1, 0)$.", "workingLatex": "(1,0):\\ x = 1 \\ne 0", "explanation": "This point is $1$ unit along the $x$-axis, not at the crossing point.", "diagram": null },
        { "stepNumber": 4, "description": "Test $(0, 0)$.", "workingLatex": "(0,0):\\ x = 0,\\ y = 0", "explanation": "Both coordinates are zero, so this is the crossing point of the axes.", "diagram": null },
        { "stepNumber": 5, "description": "Identify the origin.", "workingLatex": "(0,0)", "explanation": "Only $(0,0)$ has both coordinates equal to zero.", "diagram": null },
        { "stepNumber": 6, "description": "State the answer.", "workingLatex": "\\text{origin} = (0,0)", "explanation": "So the point at the origin is $(0,0)$.", "diagram": null }
      ],
      "finalAnswer": "$(0, 0)$"
    }
  },
  {
    "id": "gcse.algebra.coordinates.q045",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Coordinates",
    "subtopicId": "gcse.algebra.coordinates",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "value",
    "tags": ["coordinates", "distance", "diagonal", "rectangle", "surd"],
    "questionText": "A rectangle has vertices $A(1, 4)$, $B(7, 4)$, $C(7, 10)$ and $D(1, 10)$. Find the exact length of the diagonal $AC$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Identify the diagonal.", "workingLatex": "AC: A(1,4)\\ \\text{to}\\ C(7,10)", "explanation": "The diagonal joins opposite corners, so we measure the distance from $A$ to $C$.", "diagram": null },
        { "stepNumber": 2, "description": "Recall the distance formula.", "workingLatex": "d = \\sqrt{(x_2-x_1)^2 + (y_2-y_1)^2}", "explanation": "The diagonal is the hypotenuse of a right-angled triangle formed by two sides of the rectangle.", "diagram": null },
        { "stepNumber": 3, "description": "Find the horizontal change.", "workingLatex": "7 - 1 = 6", "explanation": "This equals the width of the rectangle.", "diagram": null },
        { "stepNumber": 4, "description": "Find the vertical change.", "workingLatex": "10 - 4 = 6", "explanation": "This equals the height of the rectangle.", "diagram": null },
        { "stepNumber": 5, "description": "Square and add.", "workingLatex": "6^2 + 6^2 = 36 + 36 = 72", "explanation": "The sum of the squared sides equals the square of the diagonal.", "diagram": null },
        { "stepNumber": 6, "description": "Take the square root.", "workingLatex": "AC = \\sqrt{72}", "explanation": "The diagonal is the positive root of $72$.", "diagram": null },
        { "stepNumber": 7, "description": "Simplify the surd.", "workingLatex": "\\sqrt{72} = \\sqrt{36 \\times 2} = 6\\sqrt{2}", "explanation": "Since $72 = 36 \\times 2$ and $36$ is a perfect square, we take the $6$ outside the root.", "diagram": null },
        { "stepNumber": 8, "description": "State the length.", "workingLatex": "AC = 6\\sqrt{2} \\text{ units}", "explanation": "This is the exact length of the diagonal.", "diagram": null }
      ],
      "finalAnswer": "$6\\sqrt{2}$ units"
    }
  },
  {
    "id": "gcse.algebra.coordinates.q046",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Coordinates",
    "subtopicId": "gcse.algebra.coordinates",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "value",
    "tags": ["coordinates", "distance", "circle", "radius"],
    "questionText": "A circle has centre $C(2, 3)$ and passes through the point $P(5, 7)$. Find the radius of the circle.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Link the radius to a distance.", "workingLatex": "r = CP", "explanation": "The radius is the distance from the centre to any point on the circle, so it equals $CP$.", "diagram": null },
        { "stepNumber": 2, "description": "Recall the distance formula.", "workingLatex": "d = \\sqrt{(x_2-x_1)^2 + (y_2-y_1)^2}", "explanation": "We measure the straight-line distance from $C$ to $P$.", "diagram": null },
        { "stepNumber": 3, "description": "Find the horizontal change.", "workingLatex": "5 - 2 = 3", "explanation": "This is the horizontal leg.", "diagram": null },
        { "stepNumber": 4, "description": "Find the vertical change.", "workingLatex": "7 - 3 = 4", "explanation": "This is the vertical leg.", "diagram": null },
        { "stepNumber": 5, "description": "Square and add.", "workingLatex": "3^2 + 4^2 = 9 + 16 = 25", "explanation": "The squared legs add to $25$.", "diagram": null },
        { "stepNumber": 6, "description": "Take the square root.", "workingLatex": "r = \\sqrt{25} = 5", "explanation": "The radius is the positive root of $25$.", "diagram": null },
        { "stepNumber": 7, "description": "State the radius.", "workingLatex": "r = 5 \\text{ units}", "explanation": "So the circle has a radius of $5$ units.", "diagram": null }
      ],
      "finalAnswer": "$5$ units"
    }
  },
  {
    "id": "gcse.algebra.coordinates.q047",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Coordinates",
    "subtopicId": "gcse.algebra.coordinates",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "value",
    "tags": ["coordinates", "distance", "unknown coordinate"],
    "questionText": "The point $A(2, 5)$ is $6$ units from $B(x, 5)$, where $x > 2$. Find the value of $x$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Notice the $y$-values match.", "workingLatex": "y_A = y_B = 5", "explanation": "Both points have $y = 5$, so the segment is horizontal and the distance is just the difference in $x$.", "diagram": null },
        { "stepNumber": 2, "description": "Write the horizontal distance.", "workingLatex": "|x - 2| = 6", "explanation": "The gap between the two $x$-values must equal the given distance of $6$.", "diagram": null },
        { "stepNumber": 3, "description": "Remove the modulus.", "workingLatex": "x - 2 = 6 \\ \\text{or}\\ x - 2 = -6", "explanation": "The size of $x - 2$ is $6$, which happens for two values.", "diagram": null },
        { "stepNumber": 4, "description": "Solve both cases.", "workingLatex": "x = 8 \\ \\text{or}\\ x = -4", "explanation": "Adding $2$ to each equation gives the two candidate values.", "diagram": null },
        { "stepNumber": 5, "description": "Apply the condition.", "workingLatex": "x > 2 \\Rightarrow x = 8", "explanation": "Only $x = 8$ is greater than $2$, so we discard $x = -4$.", "diagram": null },
        { "stepNumber": 6, "description": "Check the distance.", "workingLatex": "|8 - 2| = 6", "explanation": "The horizontal gap is indeed $6$, confirming the answer.", "diagram": null }
      ],
      "finalAnswer": "$x = 8$"
    }
  },
  {
    "id": "gcse.algebra.coordinates.q048",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Coordinates",
    "subtopicId": "gcse.algebra.coordinates",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "coordinate",
    "tags": ["coordinates", "translation", "vector", "moving a point"],
    "questionText": "Point $A$ has coordinates $(3, -2)$. Point $A$ is moved $4$ units right and $5$ units up to point $B$. Find the coordinates of $B$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Interpret the movement.", "workingLatex": "\\text{right} \\to +x,\\ \\text{up} \\to +y", "explanation": "Moving right increases the $x$-coordinate and moving up increases the $y$-coordinate.", "diagram": null },
        { "stepNumber": 2, "description": "Write the starting point.", "workingLatex": "A = (3, -2)", "explanation": "We change each coordinate of $A$ according to the movement.", "diagram": null },
        { "stepNumber": 3, "description": "Update the $x$-coordinate.", "workingLatex": "3 + 4 = 7", "explanation": "Adding $4$ for moving $4$ units right gives the new $x$-value.", "diagram": null },
        { "stepNumber": 4, "description": "Update the $y$-coordinate.", "workingLatex": "-2 + 5 = 3", "explanation": "Adding $5$ for moving $5$ units up gives the new $y$-value.", "diagram": null },
        { "stepNumber": 5, "description": "Write the new point.", "workingLatex": "B = (7, 3)", "explanation": "Combining the updated coordinates gives $B$.", "diagram": null },
        { "stepNumber": 6, "description": "Check the movement.", "workingLatex": "7-3 = 4,\\ 3-(-2) = 5", "explanation": "The changes are $+4$ across and $+5$ up, exactly as described.", "diagram": null }
      ],
      "finalAnswer": "$(7, 3)$"
    }
  },
  {
    "id": "gcse.algebra.coordinates.q049",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Coordinates",
    "subtopicId": "gcse.algebra.coordinates",
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "coordinate",
    "tags": ["coordinates", "ratio", "dividing a line", "partition"],
    "questionText": "The point $P$ divides the line segment from $A(1, 2)$ to $B(10, 8)$ so that $AP : PB = 1 : 2$. Find the coordinates of $P$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Interpret the ratio.", "workingLatex": "AP : PB = 1 : 2 \\Rightarrow AP = \\tfrac{1}{3}AB", "explanation": "The whole segment is split into $1 + 2 = 3$ equal parts, and $P$ is one part along from $A$.", "diagram": null },
        { "stepNumber": 2, "description": "Find the total change from $A$ to $B$.", "workingLatex": "\\Delta x = 10 - 1 = 9,\\quad \\Delta y = 8 - 2 = 6", "explanation": "These are how far we travel across and up in going the whole way from $A$ to $B$.", "diagram": null },
        { "stepNumber": 3, "description": "Take one third of each change.", "workingLatex": "\\tfrac{1}{3}(9) = 3,\\quad \\tfrac{1}{3}(6) = 2", "explanation": "Since $P$ is one third of the way along, we take one third of each total change.", "diagram": null },
        { "stepNumber": 4, "description": "Add the part-changes to $A$'s $x$.", "workingLatex": "x_P = 1 + 3 = 4", "explanation": "Starting at $A$'s $x$-value and moving one third of the way across gives $P$'s $x$-value.", "diagram": null },
        { "stepNumber": 5, "description": "Add the part-changes to $A$'s $y$.", "workingLatex": "y_P = 2 + 2 = 4", "explanation": "Likewise moving one third of the way up gives $P$'s $y$-value.", "diagram": null },
        { "stepNumber": 6, "description": "Write the point.", "workingLatex": "P = (4, 4)", "explanation": "Combining the coordinates gives $P$.", "diagram": null },
        { "stepNumber": 7, "description": "Check the ratio.", "workingLatex": "AP = \\sqrt{3^2+2^2},\\ PB = \\sqrt{6^2+4^2} = 2\\,AP", "explanation": "$PB$ comes out twice $AP$, matching the ratio $1 : 2$.", "diagram": null }
      ],
      "finalAnswer": "$(4, 4)$"
    }
  },
  {
    "id": "gcse.algebra.coordinates.q050",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Coordinates",
    "subtopicId": "gcse.algebra.coordinates",
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "coordinate",
    "tags": ["coordinates", "ratio", "dividing a line", "partition"],
    "questionText": "The point $P$ divides the line segment from $A(-2, 1)$ to $B(8, 16)$ so that $AP : PB = 2 : 3$. Find the coordinates of $P$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Interpret the ratio.", "workingLatex": "AP : PB = 2 : 3 \\Rightarrow AP = \\tfrac{2}{5}AB", "explanation": "The segment is split into $2 + 3 = 5$ equal parts, and $P$ is two parts along from $A$.", "diagram": null },
        { "stepNumber": 2, "description": "Find the total change from $A$ to $B$.", "workingLatex": "\\Delta x = 8 - (-2) = 10,\\quad \\Delta y = 16 - 1 = 15", "explanation": "These are the full horizontal and vertical journeys from $A$ to $B$.", "diagram": null },
        { "stepNumber": 3, "description": "Take two fifths of each change.", "workingLatex": "\\tfrac{2}{5}(10) = 4,\\quad \\tfrac{2}{5}(15) = 6", "explanation": "As $P$ is two fifths of the way along, we scale each total change by $\\tfrac{2}{5}$.", "diagram": null },
        { "stepNumber": 4, "description": "Add the part-changes to $A$'s $x$.", "workingLatex": "x_P = -2 + 4 = 2", "explanation": "Moving two fifths of the way across from $A$ gives $P$'s $x$-value.", "diagram": null },
        { "stepNumber": 5, "description": "Add the part-changes to $A$'s $y$.", "workingLatex": "y_P = 1 + 6 = 7", "explanation": "Moving two fifths of the way up from $A$ gives $P$'s $y$-value.", "diagram": null },
        { "stepNumber": 6, "description": "Write the point.", "workingLatex": "P = (2, 7)", "explanation": "Combining the coordinates gives $P$.", "diagram": null },
        { "stepNumber": 7, "description": "Sense-check position.", "workingLatex": "-2 < 2 < 8,\\ 1 < 7 < 16", "explanation": "$P$ lies between $A$ and $B$ and is less than halfway along, consistent with the $2:3$ split.", "diagram": null }
      ],
      "finalAnswer": "$(2, 7)$"
    }
  },
  {
    "id": "gcse.algebra.coordinates.q051",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Coordinates",
    "subtopicId": "gcse.algebra.coordinates",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "coordinate",
    "tags": ["coordinates", "reflection", "axes", "coordinate problems"],
    "questionText": "The point $A(5, 3)$ is reflected in the $y$-axis to give point $A'$. Write down the coordinates of $A'$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall the effect of reflecting in the $y$-axis.", "workingLatex": "(x, y) \\to (-x, y)", "explanation": "Reflecting in the vertical axis flips left–right, so the $x$-coordinate changes sign while the $y$-coordinate stays the same.", "diagram": null },
        { "stepNumber": 2, "description": "Write the original point.", "workingLatex": "A = (5, 3)", "explanation": "We apply the rule to each coordinate of $A$.", "diagram": null },
        { "stepNumber": 3, "description": "Change the sign of $x$.", "workingLatex": "x: 5 \\to -5", "explanation": "The horizontal distance is now measured on the opposite side of the $y$-axis.", "diagram": null },
        { "stepNumber": 4, "description": "Keep $y$ unchanged.", "workingLatex": "y: 3 \\to 3", "explanation": "A reflection in the $y$-axis does not move the point up or down.", "diagram": null },
        { "stepNumber": 5, "description": "Write the image.", "workingLatex": "A' = (-5, 3)", "explanation": "Combining the changed $x$ with the unchanged $y$ gives the reflected point.", "diagram": null },
        { "stepNumber": 6, "description": "Check the symmetry.", "workingLatex": "\\text{midpoint of } AA' = (0, 3)", "explanation": "The midpoint of $A$ and $A'$ lies on the $y$-axis, exactly as a reflection in that axis requires.", "diagram": null }
      ],
      "finalAnswer": "$(-5, 3)$"
    }
  },
  {
    "id": "gcse.algebra.coordinates.q052",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Coordinates",
    "subtopicId": "gcse.algebra.coordinates",
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "text",
    "tags": ["coordinates", "collinear", "reasoning", "straight line"],
    "questionText": "Show that the points $A(1, 2)$, $B(3, 6)$ and $C(6, 12)$ are collinear.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "State what collinear means.", "workingLatex": "\\text{all on one straight line}", "explanation": "Three points are collinear if the step pattern from one to the next stays the same, so the direction never changes.", "diagram": null },
        { "stepNumber": 2, "description": "Find the change from $A$ to $B$.", "workingLatex": "\\Delta x = 3-1 = 2,\\ \\Delta y = 6-2 = 4", "explanation": "Going from $A$ to $B$ we move $2$ across and $4$ up.", "diagram": null },
        { "stepNumber": 3, "description": "Express this as a step ratio.", "workingLatex": "\\dfrac{\\Delta y}{\\Delta x} = \\dfrac{4}{2} = 2", "explanation": "For every $1$ across we go $2$ up along segment $AB$.", "diagram": null },
        { "stepNumber": 4, "description": "Find the change from $B$ to $C$.", "workingLatex": "\\Delta x = 6-3 = 3,\\ \\Delta y = 12-6 = 6", "explanation": "Going from $B$ to $C$ we move $3$ across and $6$ up.", "diagram": null },
        { "stepNumber": 5, "description": "Express this as a step ratio.", "workingLatex": "\\dfrac{\\Delta y}{\\Delta x} = \\dfrac{6}{3} = 2", "explanation": "For every $1$ across we again go $2$ up along segment $BC$.", "diagram": null },
        { "stepNumber": 6, "description": "Compare the step ratios.", "workingLatex": "2 = 2", "explanation": "The step ratio is the same for $AB$ and $BC$, and both segments share the point $B$.", "diagram": null },
        { "stepNumber": 7, "description": "Conclude.", "workingLatex": "\\therefore A, B, C \\text{ collinear}", "explanation": "Since the direction from $A$ to $B$ matches the direction from $B$ to $C$ and they meet at $B$, the three points lie on one straight line.", "diagram": null }
      ],
      "finalAnswer": "The step ratio is $2$ for both $AB$ and $BC$, so $A$, $B$ and $C$ are collinear."
    }
  },
  {
    "id": "gcse.algebra.coordinates.q053",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Coordinates",
    "subtopicId": "gcse.algebra.coordinates",
    "difficulty": "Easy",
    "marks": 1,
    "answerType": "text",
    "tags": ["coordinates", "axes", "points on axes"],
    "questionText": "On which axis does the point $(6, 0)$ lie?",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall what a zero coordinate means.", "workingLatex": "y = 0 \\Rightarrow \\text{on the } x\\text{-axis}", "explanation": "A zero up-value keeps a point on the horizontal axis.", "diagram": null },
        { "stepNumber": 2, "description": "Read the $y$-coordinate.", "workingLatex": "y = 0", "explanation": "The up-value is zero, so there is no vertical movement from the origin.", "diagram": null },
        { "stepNumber": 3, "description": "Read the $x$-coordinate.", "workingLatex": "x = 6", "explanation": "The point is $6$ units along to the right on that horizontal axis.", "diagram": null },
        { "stepNumber": 4, "description": "Interpret the position.", "workingLatex": "\\text{no vertical movement}", "explanation": "With no up or down movement, the point sits on the horizontal axis.", "diagram": null },
        { "stepNumber": 5, "description": "Name the axis.", "workingLatex": "x\\text{-axis}", "explanation": "The horizontal axis is the $x$-axis.", "diagram": null },
        { "stepNumber": 6, "description": "State the answer.", "workingLatex": "(6,0)\\ \\text{on the } x\\text{-axis}", "explanation": "Any point of the form $(k, 0)$ lies on the $x$-axis.", "diagram": null }
      ],
      "finalAnswer": "The $x$-axis"
    }
  },
  {
    "id": "gcse.algebra.coordinates.q054",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Coordinates",
    "subtopicId": "gcse.algebra.coordinates",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "coordinate",
    "tags": ["coordinates", "midpoint", "vertical segment"],
    "questionText": "Find the midpoint of the line segment joining $A(2, 2)$ and $B(2, 10)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall the midpoint formula.", "workingLatex": "M = \\left(\\dfrac{x_1+x_2}{2}, \\dfrac{y_1+y_2}{2}\\right)", "explanation": "We average the coordinates, even when the points line up vertically.", "diagram": null },
        { "stepNumber": 2, "description": "Note the equal $x$-values.", "workingLatex": "x_A = x_B = 2", "explanation": "Both points have $x = 2$, so the segment is vertical and the midpoint keeps $x = 2$.", "diagram": null },
        { "stepNumber": 3, "description": "Average the $x$-coordinates.", "workingLatex": "\\dfrac{2+2}{2} = 2", "explanation": "Averaging two equal values simply returns that value.", "diagram": null },
        { "stepNumber": 4, "description": "Average the $y$-coordinates.", "workingLatex": "\\dfrac{2+10}{2} = 6", "explanation": "Half-way between $2$ and $10$ is $6$.", "diagram": null },
        { "stepNumber": 5, "description": "Write the midpoint.", "workingLatex": "M = (2, 6)", "explanation": "Combining the averages gives the midpoint.", "diagram": null },
        { "stepNumber": 6, "description": "Check it is central.", "workingLatex": "6-2 = 4 = 10-6", "explanation": "The midpoint is $4$ from each end vertically, confirming it is halfway.", "diagram": null }
      ],
      "finalAnswer": "$(2, 6)$"
    }
  },
  {
    "id": "gcse.algebra.coordinates.q055",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Coordinates",
    "subtopicId": "gcse.algebra.coordinates",
    "difficulty": "Easy",
    "marks": 1,
    "answerType": "coordinate",
    "tags": ["coordinates", "reading coordinates", "first quadrant"],
    "questionText": "Write down the coordinates of the point $T$ shown on the grid.",
    "questionDiagram": {
      "kind": "functionGraph",
      "xMin": 0, "xMax": 8, "yMin": 0, "yMax": 8,
      "curves": [],
      "points": [{ "x": 4, "y": 3, "label": "T", "color": "accent" }],
      "alt": "A coordinate grid showing the point T at 4 units right and 3 units up from the origin."
    },
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall the order of a coordinate.", "workingLatex": "(x, y)", "explanation": "We read across first, then up.", "diagram": null },
        { "stepNumber": 2, "description": "Read the horizontal position.", "workingLatex": "x = 4", "explanation": "The point is $4$ units to the right of the origin.", "diagram": null },
        { "stepNumber": 3, "description": "Read the vertical position.", "workingLatex": "y = 3", "explanation": "The point is $3$ units above the origin.", "diagram": null },
        { "stepNumber": 4, "description": "Write the pair in order.", "workingLatex": "(4, 3)", "explanation": "Combining the across- and up-values gives the coordinate.", "diagram": null },
        { "stepNumber": 5, "description": "Sense-check the quadrant.", "workingLatex": "(+,\\,+)\\Rightarrow \\text{Q1}", "explanation": "Both values positive places $T$ in the first quadrant, matching the grid.", "diagram": null },
        { "stepNumber": 6, "description": "State the coordinates.", "workingLatex": "T = (4, 3)", "explanation": "This is the position of $T$ read from the grid.", "diagram": null }
      ],
      "finalAnswer": "$(4, 3)$"
    }
  },
  {
    "id": "gcse.algebra.coordinates.q056",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Coordinates",
    "subtopicId": "gcse.algebra.coordinates",
    "difficulty": "Easy",
    "marks": 1,
    "answerType": "text",
    "tags": ["coordinates", "quadrants", "four quadrants"],
    "questionText": "In which quadrant does the point $(-8, -1)$ lie?",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall the sign pattern of each quadrant.", "workingLatex": "\\text{Q1 (+,+), Q2 (-,+), Q3 (-,-), Q4 (+,-)}", "explanation": "The signs of the coordinates fix the quadrant.", "diagram": null },
        { "stepNumber": 2, "description": "Check the $x$-coordinate.", "workingLatex": "x = -8 < 0", "explanation": "A negative $x$ is left of the $y$-axis.", "diagram": null },
        { "stepNumber": 3, "description": "Check the $y$-coordinate.", "workingLatex": "y = -1 < 0", "explanation": "A negative $y$ is below the $x$-axis.", "diagram": null },
        { "stepNumber": 4, "description": "Combine the signs.", "workingLatex": "(-,\\,-)", "explanation": "Left and below is the bottom-left region.", "diagram": null },
        { "stepNumber": 5, "description": "Name the region.", "workingLatex": "\\text{third quadrant}", "explanation": "The bottom-left region is the third quadrant.", "diagram": null },
        { "stepNumber": 6, "description": "State the answer.", "workingLatex": "\\text{Q3}", "explanation": "So $(-8,-1)$ lies in the third quadrant.", "diagram": null }
      ],
      "finalAnswer": "The third quadrant"
    }
  },
  {
    "id": "gcse.algebra.coordinates.q057",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Coordinates",
    "subtopicId": "gcse.algebra.coordinates",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "coordinate",
    "tags": ["coordinates", "midpoint", "finding an endpoint", "decimal"],
    "questionText": "$M(2.5, 3)$ is the midpoint of $A(1, 1)$ and $B$. Find the coordinates of $B$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall the midpoint formula.", "workingLatex": "M = \\left(\\dfrac{x_A+x_B}{2}, \\dfrac{y_A+y_B}{2}\\right)", "explanation": "We work backwards from the midpoint and one endpoint.", "diagram": null },
        { "stepNumber": 2, "description": "Set up the $x$-equation.", "workingLatex": "\\dfrac{1 + x_B}{2} = 2.5", "explanation": "The average of the $x$-values equals the midpoint's $x$-value.", "diagram": null },
        { "stepNumber": 3, "description": "Solve for $x_B$.", "workingLatex": "1 + x_B = 5 \\Rightarrow x_B = 4", "explanation": "Multiplying by $2$ gives $5$, then subtracting $1$ gives $x_B$.", "diagram": null },
        { "stepNumber": 4, "description": "Set up the $y$-equation.", "workingLatex": "\\dfrac{1 + y_B}{2} = 3", "explanation": "The average of the $y$-values equals the midpoint's $y$-value.", "diagram": null },
        { "stepNumber": 5, "description": "Solve for $y_B$.", "workingLatex": "1 + y_B = 6 \\Rightarrow y_B = 5", "explanation": "Clearing the fraction and subtracting $1$ gives $y_B$.", "diagram": null },
        { "stepNumber": 6, "description": "Write the endpoint.", "workingLatex": "B = (4, 5)", "explanation": "Combining the values gives $B$.", "diagram": null },
        { "stepNumber": 7, "description": "Check the midpoint.", "workingLatex": "\\left(\\dfrac{1+4}{2}, \\dfrac{1+5}{2}\\right) = (2.5, 3)", "explanation": "Substituting back returns the given midpoint, confirming the answer.", "diagram": null }
      ],
      "finalAnswer": "$(4, 5)$"
    }
  },
  {
    "id": "gcse.algebra.coordinates.q058",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Coordinates",
    "subtopicId": "gcse.algebra.coordinates",
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "value",
    "tags": ["coordinates", "midpoint", "distance", "multi-step"],
    "questionText": "$M(5, 7)$ is the midpoint of $A(2, 3)$ and $B$. Find the coordinates of $B$, and hence find the length of $AB$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Set up the $x$-equation for $B$.", "workingLatex": "\\dfrac{2 + x_B}{2} = 5", "explanation": "The midpoint's $x$-value is the average of the two $x$-coordinates.", "diagram": null },
        { "stepNumber": 2, "description": "Solve for $x_B$.", "workingLatex": "2 + x_B = 10 \\Rightarrow x_B = 8", "explanation": "Clearing the fraction and subtracting $2$ gives $x_B$.", "diagram": null },
        { "stepNumber": 3, "description": "Set up and solve the $y$-equation.", "workingLatex": "\\dfrac{3 + y_B}{2} = 7 \\Rightarrow y_B = 11", "explanation": "The same method on the $y$-coordinates gives $y_B = 11$.", "diagram": null },
        { "stepNumber": 4, "description": "State the endpoint.", "workingLatex": "B = (8, 11)", "explanation": "Combining the values gives $B$.", "diagram": null },
        { "stepNumber": 5, "description": "Find the changes for $AB$.", "workingLatex": "\\Delta x = 8-2 = 6,\\ \\Delta y = 11-3 = 8", "explanation": "These are the horizontal and vertical gaps between $A$ and $B$.", "diagram": null },
        { "stepNumber": 6, "description": "Apply the distance formula.", "workingLatex": "AB = \\sqrt{6^2 + 8^2} = \\sqrt{36+64}", "explanation": "The length is the hypotenuse of the triangle with these legs.", "diagram": null },
        { "stepNumber": 7, "description": "Evaluate.", "workingLatex": "AB = \\sqrt{100} = 10", "explanation": "The squared gaps add to $100$, giving a length of $10$.", "diagram": null },
        { "stepNumber": 8, "description": "Check with the midpoint.", "workingLatex": "AM = \\sqrt{3^2+4^2} = 5,\\ AB = 2\\,AM = 10", "explanation": "The distance from $A$ to the midpoint is $5$, and $AB$ should be twice this — it is.", "diagram": null }
      ],
      "finalAnswer": "$B = (8, 11)$ and $AB = 10$ units"
    }
  },
  {
    "id": "gcse.algebra.coordinates.q059",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Coordinates",
    "subtopicId": "gcse.algebra.coordinates",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "coordinate",
    "tags": ["coordinates", "equidistant", "on an axis", "midpoint"],
    "questionText": "A point $P$ lies on the $x$-axis and is the same distance from $A(-3, 0)$ as from $B(5, 0)$. Find the coordinates of $P$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Understand the condition.", "workingLatex": "PA = PB", "explanation": "A point equally far from two points on the same horizontal line must sit exactly between them, i.e. at their midpoint.", "diagram": null },
        { "stepNumber": 2, "description": "Note all points lie on the $x$-axis.", "workingLatex": "A, B, P \\text{ have } y = 0", "explanation": "So $P$ has the form $(x, 0)$ and we only need its $x$-coordinate.", "diagram": null },
        { "stepNumber": 3, "description": "Find the midpoint's $x$-coordinate.", "workingLatex": "\\dfrac{-3 + 5}{2} = \\dfrac{2}{2} = 1", "explanation": "Averaging the two $x$-values gives the point equidistant from both.", "diagram": null },
        { "stepNumber": 4, "description": "Write the point.", "workingLatex": "P = (1, 0)", "explanation": "The $y$-coordinate is $0$ because $P$ is on the $x$-axis.", "diagram": null },
        { "stepNumber": 5, "description": "Check the distances.", "workingLatex": "PA = |1-(-3)| = 4,\\ PB = |5-1| = 4", "explanation": "Both distances are $4$, so $P$ really is equidistant.", "diagram": null },
        { "stepNumber": 6, "description": "State the answer.", "workingLatex": "P = (1, 0)", "explanation": "This is the required point on the $x$-axis.", "diagram": null }
      ],
      "finalAnswer": "$(1, 0)$"
    }
  },
  {
    "id": "gcse.algebra.coordinates.q060",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Coordinates",
    "subtopicId": "gcse.algebra.coordinates",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "coordinate",
    "tags": ["coordinates", "midpoint", "decimal", "negative coordinates"],
    "questionText": "Find the midpoint of the line segment joining $A(-1, 6)$ and $B(4, -1)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall the midpoint formula.", "workingLatex": "M = \\left(\\dfrac{x_1+x_2}{2}, \\dfrac{y_1+y_2}{2}\\right)", "explanation": "We average each pair of coordinates.", "diagram": null },
        { "stepNumber": 2, "description": "List the coordinates.", "workingLatex": "A(-1,6),\\ B(4,-1)", "explanation": "Each point has a mix of signs, so we add carefully.", "diagram": null },
        { "stepNumber": 3, "description": "Average the $x$-coordinates.", "workingLatex": "\\dfrac{-1+4}{2} = \\dfrac{3}{2} = 1.5", "explanation": "The $x$-values add to $3$, giving $1.5$.", "diagram": null },
        { "stepNumber": 4, "description": "Average the $y$-coordinates.", "workingLatex": "\\dfrac{6+(-1)}{2} = \\dfrac{5}{2} = 2.5", "explanation": "The $y$-values add to $5$, giving $2.5$.", "diagram": null },
        { "stepNumber": 5, "description": "Write the midpoint.", "workingLatex": "M = (1.5, 2.5)", "explanation": "Combining the averages gives the midpoint.", "diagram": null },
        { "stepNumber": 6, "description": "Check each value lies between.", "workingLatex": "-1 < 1.5 < 4,\\ -1 < 2.5 < 6", "explanation": "Both coordinates fall between the endpoints, confirming the answer.", "diagram": null }
      ],
      "finalAnswer": "$(1.5, 2.5)$"
    }
  },
  {
    "id": "gcse.algebra.coordinates.q061",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Coordinates",
    "subtopicId": "gcse.algebra.coordinates",
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "coordinate",
    "tags": ["coordinates", "midpoint", "finding an endpoint", "multi-step"],
    "questionText": "$B(5, 3)$ is the midpoint of $A(1, 1)$ and $C$. Find the coordinates of $C$, then find the midpoint of $A$ and $C$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Set up the $x$-equation for $C$.", "workingLatex": "\\dfrac{1 + x_C}{2} = 5", "explanation": "Since $B$ is the midpoint of $A$ and $C$, the average of their $x$-values is $B$'s $x$-value.", "diagram": null },
        { "stepNumber": 2, "description": "Solve for $x_C$.", "workingLatex": "1 + x_C = 10 \\Rightarrow x_C = 9", "explanation": "Clearing the fraction and subtracting $1$ gives $x_C$.", "diagram": null },
        { "stepNumber": 3, "description": "Set up and solve the $y$-equation.", "workingLatex": "\\dfrac{1 + y_C}{2} = 3 \\Rightarrow y_C = 5", "explanation": "The same method gives $y_C = 5$.", "diagram": null },
        { "stepNumber": 4, "description": "State $C$.", "workingLatex": "C = (9, 5)", "explanation": "Combining the values gives the endpoint $C$.", "diagram": null },
        { "stepNumber": 5, "description": "Recall which midpoint is asked for.", "workingLatex": "\\text{midpoint of } A(1,1) \\text{ and } C(9,5)", "explanation": "The midpoint of $A$ and $C$ should return $B$, since $B$ was defined as exactly that midpoint.", "diagram": null },
        { "stepNumber": 6, "description": "Compute the midpoint of $A$ and $C$.", "workingLatex": "\\left(\\dfrac{1+9}{2}, \\dfrac{1+5}{2}\\right) = (5, 3)", "explanation": "Averaging $A$ and $C$ gives $(5,3)$.", "diagram": null },
        { "stepNumber": 7, "description": "Confirm the consistency.", "workingLatex": "(5, 3) = B", "explanation": "The midpoint of $A$ and $C$ is $B$, exactly as expected — a full check of the working.", "diagram": null }
      ],
      "finalAnswer": "$C = (9, 5)$; the midpoint of $A$ and $C$ is $(5, 3)$."
    }
  },
  {
    "id": "gcse.algebra.coordinates.q062",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Coordinates",
    "subtopicId": "gcse.algebra.coordinates",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "value",
    "tags": ["coordinates", "distance", "pythagoras", "surd"],
    "questionText": "Find the exact distance between $A(1, 1)$ and $B(6, 3)$, giving your answer as a simplified surd.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall the distance formula.", "workingLatex": "d = \\sqrt{(x_2-x_1)^2 + (y_2-y_1)^2}", "explanation": "The distance is the hypotenuse of a right-angled triangle with horizontal and vertical legs.", "diagram": null },
        { "stepNumber": 2, "description": "Find the horizontal change.", "workingLatex": "6 - 1 = 5", "explanation": "This is the horizontal leg.", "diagram": null },
        { "stepNumber": 3, "description": "Find the vertical change.", "workingLatex": "3 - 1 = 2", "explanation": "This is the vertical leg.", "diagram": null },
        { "stepNumber": 4, "description": "Square each change.", "workingLatex": "5^2 = 25,\\quad 2^2 = 4", "explanation": "Squaring prepares for Pythagoras.", "diagram": null },
        { "stepNumber": 5, "description": "Add the squares.", "workingLatex": "25 + 4 = 29", "explanation": "This total is the square of the distance.", "diagram": null },
        { "stepNumber": 6, "description": "Take the square root.", "workingLatex": "d = \\sqrt{29}", "explanation": "Since $29$ is prime it has no square factors, so the surd cannot be simplified further.", "diagram": null },
        { "stepNumber": 7, "description": "State the exact distance.", "workingLatex": "AB = \\sqrt{29} \\text{ units}", "explanation": "This is the exact distance, left as a surd.", "diagram": null }
      ],
      "finalAnswer": "$\\sqrt{29}$ units"
    }
  },
  {
    "id": "gcse.algebra.coordinates.q063",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Coordinates",
    "subtopicId": "gcse.algebra.coordinates",
    "difficulty": "Easy",
    "marks": 1,
    "answerType": "text",
    "tags": ["coordinates", "quadrants", "four quadrants"],
    "questionText": "In which quadrant does the point $(10, -2)$ lie?",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall the sign pattern of each quadrant.", "workingLatex": "\\text{Q1 (+,+), Q2 (-,+), Q3 (-,-), Q4 (+,-)}", "explanation": "The signs of the coordinates identify the quadrant.", "diagram": null },
        { "stepNumber": 2, "description": "Check the $x$-coordinate.", "workingLatex": "x = 10 > 0", "explanation": "A positive $x$ is right of the $y$-axis.", "diagram": null },
        { "stepNumber": 3, "description": "Check the $y$-coordinate.", "workingLatex": "y = -2 < 0", "explanation": "A negative $y$ is below the $x$-axis.", "diagram": null },
        { "stepNumber": 4, "description": "Combine the signs.", "workingLatex": "(+,\\,-)", "explanation": "Right and below is the bottom-right region.", "diagram": null },
        { "stepNumber": 5, "description": "Name the region.", "workingLatex": "\\text{fourth quadrant}", "explanation": "The bottom-right region is the fourth quadrant.", "diagram": null },
        { "stepNumber": 6, "description": "State the answer.", "workingLatex": "\\text{Q4}", "explanation": "So $(10,-2)$ lies in the fourth quadrant.", "diagram": null }
      ],
      "finalAnswer": "The fourth quadrant"
    }
  },
  {
    "id": "gcse.algebra.coordinates.q064",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Coordinates",
    "subtopicId": "gcse.algebra.coordinates",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "coordinate",
    "tags": ["coordinates", "midpoint", "midpoint formula"],
    "questionText": "Find the midpoint of the line segment joining $A(6, 10)$ and $B(2, 2)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall the midpoint formula.", "workingLatex": "M = \\left(\\dfrac{x_1+x_2}{2}, \\dfrac{y_1+y_2}{2}\\right)", "explanation": "We average each pair of coordinates.", "diagram": null },
        { "stepNumber": 2, "description": "List the coordinates.", "workingLatex": "A(6,10),\\ B(2,2)", "explanation": "Setting out the values keeps the working clear.", "diagram": null },
        { "stepNumber": 3, "description": "Average the $x$-coordinates.", "workingLatex": "\\dfrac{6+2}{2} = \\dfrac{8}{2} = 4", "explanation": "Half-way between $6$ and $2$ is $4$.", "diagram": null },
        { "stepNumber": 4, "description": "Average the $y$-coordinates.", "workingLatex": "\\dfrac{10+2}{2} = \\dfrac{12}{2} = 6", "explanation": "Half-way between $10$ and $2$ is $6$.", "diagram": null },
        { "stepNumber": 5, "description": "Write the midpoint.", "workingLatex": "M = (4, 6)", "explanation": "Combining the averages gives the midpoint.", "diagram": null },
        { "stepNumber": 6, "description": "Check by symmetry.", "workingLatex": "6-4 = 2 = 4-2", "explanation": "The midpoint is $2$ from each endpoint horizontally, confirming it is central.", "diagram": null }
      ],
      "finalAnswer": "$(4, 6)$"
    }
  },
  {
    "id": "gcse.algebra.coordinates.q065",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Coordinates",
    "subtopicId": "gcse.algebra.coordinates",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "coordinate",
    "tags": ["coordinates", "reflection", "axes", "coordinate problems"],
    "questionText": "The point $A(4, -3)$ is reflected in the $x$-axis to give point $A'$. Write down the coordinates of $A'$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall the effect of reflecting in the $x$-axis.", "workingLatex": "(x, y) \\to (x, -y)", "explanation": "Reflecting in the horizontal axis flips up–down, so the $y$-coordinate changes sign while the $x$-coordinate stays the same.", "diagram": null },
        { "stepNumber": 2, "description": "Write the original point.", "workingLatex": "A = (4, -3)", "explanation": "We apply the rule to each coordinate.", "diagram": null },
        { "stepNumber": 3, "description": "Keep $x$ unchanged.", "workingLatex": "x: 4 \\to 4", "explanation": "A reflection in the $x$-axis does not move the point left or right.", "diagram": null },
        { "stepNumber": 4, "description": "Change the sign of $y$.", "workingLatex": "y: -3 \\to 3", "explanation": "The point moves to the opposite side of the $x$-axis, so $-3$ becomes $+3$.", "diagram": null },
        { "stepNumber": 5, "description": "Write the image.", "workingLatex": "A' = (4, 3)", "explanation": "Combining the unchanged $x$ with the new $y$ gives the reflected point.", "diagram": null },
        { "stepNumber": 6, "description": "Check the symmetry.", "workingLatex": "\\text{midpoint of } AA' = (4, 0)", "explanation": "The midpoint of $A$ and $A'$ lies on the $x$-axis, exactly as a reflection in that axis requires.", "diagram": null }
      ],
      "finalAnswer": "$(4, 3)$"
    }
  },
  {
    "id": "gcse.algebra.coordinates.q066",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Coordinates",
    "subtopicId": "gcse.algebra.coordinates",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "coordinate",
    "tags": ["coordinates", "equidistant", "on an axis", "midpoint"],
    "questionText": "A point $P$ lies on the $y$-axis and is the same distance from $A(0, 1)$ as from $B(0, 9)$. Find the coordinates of $P$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Understand the condition.", "workingLatex": "PA = PB", "explanation": "A point equally far from two points on the same vertical line sits at their midpoint.", "diagram": null },
        { "stepNumber": 2, "description": "Note all points lie on the $y$-axis.", "workingLatex": "A, B, P \\text{ have } x = 0", "explanation": "So $P$ has the form $(0, y)$ and we only need its $y$-coordinate.", "diagram": null },
        { "stepNumber": 3, "description": "Find the midpoint's $y$-coordinate.", "workingLatex": "\\dfrac{1 + 9}{2} = \\dfrac{10}{2} = 5", "explanation": "Averaging the two $y$-values gives the point equidistant from both.", "diagram": null },
        { "stepNumber": 4, "description": "Write the point.", "workingLatex": "P = (0, 5)", "explanation": "The $x$-coordinate is $0$ because $P$ is on the $y$-axis.", "diagram": null },
        { "stepNumber": 5, "description": "Check the distances.", "workingLatex": "PA = |5-1| = 4,\\ PB = |9-5| = 4", "explanation": "Both distances are $4$, so $P$ is equidistant.", "diagram": null },
        { "stepNumber": 6, "description": "State the answer.", "workingLatex": "P = (0, 5)", "explanation": "This is the required point on the $y$-axis.", "diagram": null }
      ],
      "finalAnswer": "$(0, 5)$"
    }
  },
  {
    "id": "gcse.algebra.coordinates.q067",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Coordinates",
    "subtopicId": "gcse.algebra.coordinates",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "text",
    "tags": ["coordinates", "parallelogram", "fourth vertex", "distance", "multi-step"],
    "questionText": "$ABCD$ is a parallelogram with $A(1, 1)$, $B(4, 2)$ and $C(6, 6)$. Find the coordinates of $D$ and show that $AB = DC$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Use the diagonal-midpoint property.", "workingLatex": "\\text{midpoint of } AC = \\text{midpoint of } BD", "explanation": "In a parallelogram the diagonals share a midpoint, which lets us locate $D$.", "diagram": null },
        { "stepNumber": 2, "description": "Find the midpoint of $AC$.", "workingLatex": "\\left(\\dfrac{1+6}{2}, \\dfrac{1+6}{2}\\right) = (3.5, 3.5)", "explanation": "This is the centre of the parallelogram.", "diagram": null },
        { "stepNumber": 3, "description": "Set the midpoint of $BD$ equal to it.", "workingLatex": "\\left(\\dfrac{4+x_D}{2}, \\dfrac{2+y_D}{2}\\right) = (3.5, 3.5)", "explanation": "Diagonal $BD$ must also pass through the centre.", "diagram": null },
        { "stepNumber": 4, "description": "Solve for $D$.", "workingLatex": "4 + x_D = 7,\\ 2 + y_D = 7 \\Rightarrow D = (3, 5)", "explanation": "Clearing the fractions and solving gives the coordinates of $D$.", "diagram": null },
        { "stepNumber": 5, "description": "Find the length $AB$.", "workingLatex": "AB = \\sqrt{(4-1)^2 + (2-1)^2} = \\sqrt{9+1} = \\sqrt{10}", "explanation": "This is one side of the parallelogram.", "diagram": null },
        { "stepNumber": 6, "description": "Find the length $DC$.", "workingLatex": "DC = \\sqrt{(6-3)^2 + (6-5)^2} = \\sqrt{9+1} = \\sqrt{10}", "explanation": "This is the opposite side of the parallelogram.", "diagram": null },
        { "stepNumber": 7, "description": "Compare the two lengths.", "workingLatex": "AB = \\sqrt{10} = DC", "explanation": "The two opposite sides are equal in length.", "diagram": null },
        { "stepNumber": 8, "description": "State the conclusion.", "workingLatex": "D = (3,5),\\ AB = DC", "explanation": "So $D$ is $(3,5)$ and the opposite sides $AB$ and $DC$ are equal, as required for a parallelogram.", "diagram": null }
      ],
      "finalAnswer": "$D = (3, 5)$, and $AB = DC = \\sqrt{10}$."
    }
  },
  {
    "id": "gcse.algebra.coordinates.q068",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Coordinates",
    "subtopicId": "gcse.algebra.coordinates",
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "coordinate",
    "tags": ["coordinates", "ratio", "dividing a line", "partition"],
    "questionText": "The point $P$ divides the line segment from $A(2, 2)$ to $B(10, 6)$ so that $AP : PB = 3 : 1$. Find the coordinates of $P$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Interpret the ratio.", "workingLatex": "AP : PB = 3 : 1 \\Rightarrow AP = \\tfrac{3}{4}AB", "explanation": "The segment is split into $3 + 1 = 4$ equal parts, and $P$ is three parts along from $A$.", "diagram": null },
        { "stepNumber": 2, "description": "Find the total change from $A$ to $B$.", "workingLatex": "\\Delta x = 10 - 2 = 8,\\quad \\Delta y = 6 - 2 = 4", "explanation": "These are the full horizontal and vertical journeys from $A$ to $B$.", "diagram": null },
        { "stepNumber": 3, "description": "Take three quarters of each change.", "workingLatex": "\\tfrac{3}{4}(8) = 6,\\quad \\tfrac{3}{4}(4) = 3", "explanation": "As $P$ is three quarters of the way along, we scale each total change by $\\tfrac{3}{4}$.", "diagram": null },
        { "stepNumber": 4, "description": "Add the part-changes to $A$'s $x$.", "workingLatex": "x_P = 2 + 6 = 8", "explanation": "Moving three quarters of the way across from $A$ gives $P$'s $x$-value.", "diagram": null },
        { "stepNumber": 5, "description": "Add the part-changes to $A$'s $y$.", "workingLatex": "y_P = 2 + 3 = 5", "explanation": "Moving three quarters of the way up from $A$ gives $P$'s $y$-value.", "diagram": null },
        { "stepNumber": 6, "description": "Write the point.", "workingLatex": "P = (8, 5)", "explanation": "Combining the coordinates gives $P$.", "diagram": null },
        { "stepNumber": 7, "description": "Sense-check position.", "workingLatex": "P \\text{ is closer to } B", "explanation": "Because $AP$ is three times $PB$, $P$ sits nearer to $B$ — consistent with $(8,5)$ being close to $(10,6)$.", "diagram": null }
      ],
      "finalAnswer": "$(8, 5)$"
    }
  },
  {
    "id": "gcse.algebra.coordinates.q069",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Coordinates",
    "subtopicId": "gcse.algebra.coordinates",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "coordinate",
    "tags": ["coordinates", "parallelogram", "fourth vertex", "geometry"],
    "questionText": "$PQRS$ is a parallelogram with $P(-1, 0)$, $Q(2, 1)$ and $R(4, 5)$. Find the coordinates of $S$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Use the diagonal-midpoint property.", "workingLatex": "\\text{midpoint of } PR = \\text{midpoint of } QS", "explanation": "In parallelogram $PQRS$ the diagonals $PR$ and $QS$ bisect each other, so they share a midpoint.", "diagram": null },
        { "stepNumber": 2, "description": "Find the midpoint of $PR$.", "workingLatex": "\\left(\\dfrac{-1+4}{2}, \\dfrac{0+5}{2}\\right) = (1.5, 2.5)", "explanation": "This is the centre of the parallelogram.", "diagram": null },
        { "stepNumber": 3, "description": "Set the midpoint of $QS$ equal to it.", "workingLatex": "\\left(\\dfrac{2+x_S}{2}, \\dfrac{1+y_S}{2}\\right) = (1.5, 2.5)", "explanation": "Diagonal $QS$ must also pass through the centre.", "diagram": null },
        { "stepNumber": 4, "description": "Solve for $x_S$.", "workingLatex": "2 + x_S = 3 \\Rightarrow x_S = 1", "explanation": "Clearing the fraction and subtracting $2$ gives $x_S$.", "diagram": null },
        { "stepNumber": 5, "description": "Solve for $y_S$.", "workingLatex": "1 + y_S = 5 \\Rightarrow y_S = 4", "explanation": "Clearing the fraction and subtracting $1$ gives $y_S$.", "diagram": null },
        { "stepNumber": 6, "description": "Write the vertex.", "workingLatex": "S = (1, 4)", "explanation": "Combining the values gives the fourth vertex.", "diagram": null },
        { "stepNumber": 7, "description": "Check with the vector shortcut.", "workingLatex": "S = P + R - Q = (-1+4-2,\\ 0+5-1) = (1,4)", "explanation": "The relation $S = P + R - Q$ confirms the answer.", "diagram": null }
      ],
      "finalAnswer": "$(1, 4)$"
    }
  },
  {
    "id": "gcse.algebra.coordinates.q070",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Coordinates",
    "subtopicId": "gcse.algebra.coordinates",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "text",
    "tags": ["coordinates", "midpoint", "distance", "circle", "multi-step"],
    "questionText": "$A(-2, 1)$ and $B(4, 5)$ are the ends of a diameter of a circle. Find the coordinates of the centre and the exact radius of the circle.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Link the centre to the diameter.", "workingLatex": "\\text{centre} = \\text{midpoint of } AB", "explanation": "The centre of a circle is the midpoint of any diameter.", "diagram": null },
        { "stepNumber": 2, "description": "Average the $x$-coordinates.", "workingLatex": "\\dfrac{-2+4}{2} = 1", "explanation": "This gives the horizontal position of the centre.", "diagram": null },
        { "stepNumber": 3, "description": "Average the $y$-coordinates.", "workingLatex": "\\dfrac{1+5}{2} = 3", "explanation": "This gives the vertical position of the centre.", "diagram": null },
        { "stepNumber": 4, "description": "State the centre.", "workingLatex": "\\text{centre} = (1, 3)", "explanation": "Combining the averages gives the centre of the circle.", "diagram": null },
        { "stepNumber": 5, "description": "Find the length of the diameter $AB$.", "workingLatex": "AB = \\sqrt{(4-(-2))^2 + (5-1)^2} = \\sqrt{36+16}", "explanation": "The diameter is the distance between the two given endpoints.", "diagram": null },
        { "stepNumber": 6, "description": "Simplify the diameter.", "workingLatex": "AB = \\sqrt{52} = 2\\sqrt{13}", "explanation": "Since $52 = 4 \\times 13$, we take the $2$ outside the root.", "diagram": null },
        { "stepNumber": 7, "description": "Halve the diameter for the radius.", "workingLatex": "r = \\tfrac{1}{2}AB = \\tfrac{1}{2}(2\\sqrt{13}) = \\sqrt{13}", "explanation": "The radius is half the diameter.", "diagram": null },
        { "stepNumber": 8, "description": "State the results.", "workingLatex": "\\text{centre } (1,3),\\ r = \\sqrt{13}", "explanation": "So the circle has centre $(1,3)$ and exact radius $\\sqrt{13}$ units.", "diagram": null }
      ],
      "finalAnswer": "Centre $(1, 3)$ and radius $\\sqrt{13}$ units."
    }
  }
];
