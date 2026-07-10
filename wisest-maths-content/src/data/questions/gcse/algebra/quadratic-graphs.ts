import { Question } from "@/lib/types";

export const questions: Question[] = [
  {
    "id": "gcse.algebra.quadratic-graphs.q001",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Quadratic graphs",
    "subtopicId": "gcse.algebra.quadratic-graphs",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "text",
    "tags": ["quadratic graphs", "shape", "parabola"],
    "questionText": "Describe the shape of the graph of $y = x^2$ and state the coordinates of its lowest point.",
    "questionDiagram": {
      "kind": "functionGraph",
      "xMin": -4, "xMax": 4, "yMin": -1, "yMax": 9,
      "curves": [{ "fn": { "base": "parab" }, "color": "accent", "label": "y=x^2" }],
      "points": [{ "x": 0, "y": 0, "label": "(0,0)", "color": "ink" }],
      "alt": "A U-shaped parabola y = x squared with its lowest point at the origin."
    },
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Consider the sign of $x^2$.", "workingLatex": "x^2 \\geq 0", "explanation": "Squaring any number gives a result that is zero or positive, so the graph never dips below the $x$-axis.", "diagram": null },
        { "stepNumber": 2, "description": "Compare positive and negative $x$.", "workingLatex": "(-x)^2 = x^2", "explanation": "Inputs like $2$ and $-2$ give the same output, so the curve is symmetrical about the $y$-axis.", "diagram": null },
        { "stepNumber": 3, "description": "Name the shape.", "workingLatex": "\\text{parabola (U-shaped)}", "explanation": "A symmetrical curve that rises on both sides of a single lowest point is called a parabola.", "diagram": null },
        { "stepNumber": 4, "description": "Find the lowest point.", "workingLatex": "x = 0 \\Rightarrow y = 0", "explanation": "The smallest value of $x^2$ is $0$, reached at $x = 0$, giving the point $(0,0)$.", "diagram": null }
      ],
      "finalAnswer": "A U-shaped parabola, symmetrical about the $y$-axis, with lowest point $(0, 0)$."
    }
  },
  {
    "id": "gcse.algebra.quadratic-graphs.q002",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Quadratic graphs",
    "subtopicId": "gcse.algebra.quadratic-graphs",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "coordinate",
    "tags": ["quadratic graphs", "y-intercept"],
    "questionText": "Find the coordinates of the point where the graph of $y = x^2 + 2x - 5$ crosses the $y$-axis.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall the condition on the $y$-axis.", "workingLatex": "x = 0", "explanation": "Every point on the $y$-axis has $x = 0$, so we substitute that in.", "diagram": null },
        { "stepNumber": 2, "description": "Substitute $x = 0$.", "workingLatex": "y = (0)^2 + 2(0) - 5", "explanation": "Replacing $x$ with $0$ in the equation.", "diagram": null },
        { "stepNumber": 3, "description": "Simplify.", "workingLatex": "y = -5", "explanation": "The squared and linear terms vanish, leaving the constant.", "diagram": null },
        { "stepNumber": 4, "description": "State the point.", "workingLatex": "(0, -5)", "explanation": "So the curve crosses the $y$-axis at $(0, -5)$ — the constant term gives the $y$-intercept.", "diagram": null }
      ],
      "finalAnswer": "$(0, -5)$"
    }
  },
  {
    "id": "gcse.algebra.quadratic-graphs.q003",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Quadratic graphs",
    "subtopicId": "gcse.algebra.quadratic-graphs",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "value",
    "tags": ["quadratic graphs", "table of values"],
    "questionText": "Complete the table of values for $y = x^2 - 3$ at $x = -2, -1, 0, 1, 2$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Substitute $x = -2$.", "workingLatex": "(-2)^2 - 3 = 4 - 3 = 1", "explanation": "Square first, then subtract $3$; note $(-2)^2 = 4$.", "diagram": null },
        { "stepNumber": 2, "description": "Substitute $x = -1$.", "workingLatex": "(-1)^2 - 3 = 1 - 3 = -2", "explanation": "$(-1)^2 = 1$, then subtract $3$.", "diagram": null },
        { "stepNumber": 3, "description": "Substitute $x = 0$.", "workingLatex": "0^2 - 3 = -3", "explanation": "The squared term is $0$, leaving $-3$.", "diagram": null },
        { "stepNumber": 4, "description": "Substitute $x = 1$.", "workingLatex": "1^2 - 3 = -2", "explanation": "By symmetry this matches the value at $x = -1$.", "diagram": null },
        { "stepNumber": 5, "description": "Substitute $x = 2$.", "workingLatex": "2^2 - 3 = 1", "explanation": "By symmetry this matches the value at $x = -2$.", "diagram": null },
        { "stepNumber": 6, "description": "State the values.", "workingLatex": "1,\\ -2,\\ -3,\\ -2,\\ 1", "explanation": "The symmetry about $x = 0$ is a useful check that the values are correct.", "diagram": null }
      ],
      "finalAnswer": "$y = 1, -2, -3, -2, 1$"
    }
  },
  {
    "id": "gcse.algebra.quadratic-graphs.q004",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Quadratic graphs",
    "subtopicId": "gcse.algebra.quadratic-graphs",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "value",
    "tags": ["quadratic graphs", "roots", "x-intercepts"],
    "questionText": "The graph of $y = x^2 - 9$ crosses the $x$-axis at two points. Find their $x$-coordinates.",
    "questionDiagram": {
      "kind": "functionGraph",
      "xMin": -5, "xMax": 5, "yMin": -10, "yMax": 8,
      "curves": [{ "fn": { "base": "parab", "d": -9 }, "color": "accent", "label": "y=x^2-9" }],
      "points": [
        { "x": -3, "y": 0, "label": "(-3,0)", "color": "ink" },
        { "x": 3, "y": 0, "label": "(3,0)", "color": "ink" }
      ],
      "alt": "A parabola y = x squared minus 9 crossing the x-axis at -3 and 3."
    },
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall the condition on the $x$-axis.", "workingLatex": "y = 0", "explanation": "The curve crosses the $x$-axis where its height is zero.", "diagram": null },
        { "stepNumber": 2, "description": "Set up the equation.", "workingLatex": "x^2 - 9 = 0", "explanation": "Putting $y = 0$ gives an equation to solve.", "diagram": null },
        { "stepNumber": 3, "description": "Rearrange.", "workingLatex": "x^2 = 9", "explanation": "Adding $9$ to both sides isolates the square.", "diagram": null },
        { "stepNumber": 4, "description": "Take the square root.", "workingLatex": "x = \\pm 3", "explanation": "Both $+3$ and $-3$ square to $9$, so there are two solutions.", "diagram": null },
        { "stepNumber": 5, "description": "State the crossings.", "workingLatex": "x = -3 \\text{ and } x = 3", "explanation": "So the curve meets the $x$-axis at $(-3, 0)$ and $(3, 0)$.", "diagram": null }
      ],
      "finalAnswer": "$x = -3$ and $x = 3$"
    }
  },
  {
    "id": "gcse.algebra.quadratic-graphs.q005",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Quadratic graphs",
    "subtopicId": "gcse.algebra.quadratic-graphs",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "value",
    "tags": ["quadratic graphs", "roots", "factorising"],
    "questionText": "Find the $x$-coordinates of the points where the graph of $y = (x - 1)(x - 4)$ crosses the $x$-axis.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Set $y = 0$.", "workingLatex": "(x - 1)(x - 4) = 0", "explanation": "The curve crosses the $x$-axis where $y = 0$, and the equation is already factorised.", "diagram": null },
        { "stepNumber": 2, "description": "Apply the zero-product rule.", "workingLatex": "x - 1 = 0 \\text{ or } x - 4 = 0", "explanation": "A product is zero only when one of its factors is zero.", "diagram": null },
        { "stepNumber": 3, "description": "Solve the first factor.", "workingLatex": "x = 1", "explanation": "Adding $1$ to both sides.", "diagram": null },
        { "stepNumber": 4, "description": "Solve the second factor.", "workingLatex": "x = 4", "explanation": "Adding $4$ to both sides.", "diagram": null },
        { "stepNumber": 5, "description": "State the crossings.", "workingLatex": "x = 1 \\text{ and } x = 4", "explanation": "So the curve meets the $x$-axis at $(1, 0)$ and $(4, 0)$; the roots are just the numbers that make each bracket zero.", "diagram": null }
      ],
      "finalAnswer": "$x = 1$ and $x = 4$"
    }
  },
  {
    "id": "gcse.algebra.quadratic-graphs.q006",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Quadratic graphs",
    "subtopicId": "gcse.algebra.quadratic-graphs",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "expression",
    "tags": ["quadratic graphs", "line of symmetry", "roots"],
    "questionText": "A quadratic graph crosses the $x$-axis at $x = 1$ and $x = 4$. Find the equation of its line of symmetry.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall the symmetry of a parabola.", "workingLatex": "\\text{axis midway between roots}", "explanation": "A parabola is symmetrical, so its line of symmetry sits exactly halfway between the two $x$-axis crossings.", "diagram": null },
        { "stepNumber": 2, "description": "Average the roots.", "workingLatex": "x = \\dfrac{1 + 4}{2}", "explanation": "The midpoint of the roots gives the $x$-value of the axis.", "diagram": null },
        { "stepNumber": 3, "description": "Simplify.", "workingLatex": "x = \\dfrac{5}{2} = 2.5", "explanation": "Halfway between $1$ and $4$ is $2.5$.", "diagram": null },
        { "stepNumber": 4, "description": "State the line.", "workingLatex": "x = 2.5", "explanation": "The line of symmetry is the vertical line $x = 2.5$.", "diagram": null }
      ],
      "finalAnswer": "$x = 2.5$"
    }
  },
  {
    "id": "gcse.algebra.quadratic-graphs.q007",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Quadratic graphs",
    "subtopicId": "gcse.algebra.quadratic-graphs",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "coordinate",
    "tags": ["quadratic graphs", "turning point", "completed square form"],
    "questionText": "A curve has equation $y = (x - 2)^2 - 1$. Write down the coordinates of its turning point and state whether it is a maximum or minimum.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall completed-square form.", "workingLatex": "y = (x - p)^2 + q \\Rightarrow (p, q)", "explanation": "In this form the turning point is read directly as $(p, q)$; here $p$ is where the bracket is zero.", "diagram": null },
        { "stepNumber": 2, "description": "Find where the bracket is zero.", "workingLatex": "x - 2 = 0 \\Rightarrow x = 2", "explanation": "A square is smallest when its inside is zero, giving the $x$-coordinate of the turning point.", "diagram": null },
        { "stepNumber": 3, "description": "Find the $y$-value there.", "workingLatex": "y = 0 - 1 = -1", "explanation": "When the bracket is zero, $y$ equals the constant $-1$.", "diagram": null },
        { "stepNumber": 4, "description": "Decide max or min.", "workingLatex": "(x-2)^2 \\geq 0", "explanation": "The squared term is never negative, so the curve opens upwards and the turning point is the lowest point.", "diagram": null },
        { "stepNumber": 5, "description": "State the turning point.", "workingLatex": "(2, -1) \\text{ minimum}", "explanation": "So the minimum point is $(2, -1)$.", "diagram": null }
      ],
      "finalAnswer": "Minimum at $(2, -1)$"
    }
  },
  {
    "id": "gcse.algebra.quadratic-graphs.q008",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Quadratic graphs",
    "subtopicId": "gcse.algebra.quadratic-graphs",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "coordinate",
    "tags": ["quadratic graphs", "turning point", "roots", "symmetry"],
    "questionText": "The graph of $y = x^2 - 6x + 8$ crosses the $x$-axis at $x = 2$ and $x = 4$. Use symmetry to find the coordinates of its turning point.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Find the line of symmetry.", "workingLatex": "x = \\dfrac{2 + 4}{2} = 3", "explanation": "The turning point lies on the axis of symmetry, halfway between the two roots.", "diagram": null },
        { "stepNumber": 2, "description": "Substitute $x = 3$.", "workingLatex": "y = 3^2 - 6(3) + 8", "explanation": "The $y$-coordinate of the turning point is the curve's value on the axis.", "diagram": null },
        { "stepNumber": 3, "description": "Work out the terms.", "workingLatex": "9 - 18 + 8", "explanation": "Evaluating each term.", "diagram": null },
        { "stepNumber": 4, "description": "Simplify.", "workingLatex": "y = -1", "explanation": "Combining gives the minimum height.", "diagram": null },
        { "stepNumber": 5, "description": "State the turning point.", "workingLatex": "(3, -1)", "explanation": "The coefficient of $x^2$ is positive, so this is a minimum at $(3, -1)$.", "diagram": null }
      ],
      "finalAnswer": "$(3, -1)$"
    }
  },
  {
    "id": "gcse.algebra.quadratic-graphs.q009",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Quadratic graphs",
    "subtopicId": "gcse.algebra.quadratic-graphs",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "coordinate",
    "tags": ["quadratic graphs", "completing the square", "turning point"],
    "questionText": "By completing the square, find the coordinates of the turning point of $y = x^2 - 6x + 8$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Halve the coefficient of $x$.", "workingLatex": "-6 \\div 2 = -3", "explanation": "This number goes inside the bracket for completing the square.", "diagram": null },
        { "stepNumber": 2, "description": "Write the square and correct.", "workingLatex": "(x - 3)^2 - 9 + 8", "explanation": "Expanding $(x-3)^2$ gives an extra $+9$, so we subtract $9$ to keep the equation equal.", "diagram": null },
        { "stepNumber": 3, "description": "Simplify the constants.", "workingLatex": "y = (x - 3)^2 - 1", "explanation": "Combining $-9 + 8$ gives $-1$.", "diagram": null },
        { "stepNumber": 4, "description": "Read the turning point.", "workingLatex": "(3, -1)", "explanation": "In completed-square form $(x-p)^2 + q$, the turning point is $(p, q)$.", "diagram": null },
        { "stepNumber": 5, "description": "State the type.", "workingLatex": "\\text{minimum}", "explanation": "The positive squared term means the parabola opens upward, so this is a minimum.", "diagram": null }
      ],
      "finalAnswer": "Minimum at $(3, -1)$"
    }
  },
  {
    "id": "gcse.algebra.quadratic-graphs.q010",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Quadratic graphs",
    "subtopicId": "gcse.algebra.quadratic-graphs",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "text",
    "tags": ["quadratic graphs", "negative parabola", "maximum"],
    "questionText": "The curve $y = -x^2 + 4$ has a turning point. State whether it is a maximum or a minimum, and give its coordinates.",
    "questionDiagram": {
      "kind": "functionGraph",
      "xMin": -4, "xMax": 4, "yMin": -6, "yMax": 6,
      "curves": [{ "fn": { "base": "parab", "a": -1, "d": 4 }, "color": "accent", "label": "y=-x^2+4" }],
      "points": [{ "x": 0, "y": 4, "label": "(0,4)", "color": "ink" }],
      "alt": "A downward-opening parabola with highest point at (0,4)."
    },
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Look at the sign of the $x^2$ term.", "workingLatex": "-x^2", "explanation": "A negative coefficient of $x^2$ turns the parabola upside-down, so it opens downward.", "diagram": null },
        { "stepNumber": 2, "description": "Say what that means for the turning point.", "workingLatex": "\\text{opens down} \\Rightarrow \\text{maximum}", "explanation": "A downward parabola has a highest point, which is a maximum.", "diagram": null },
        { "stepNumber": 3, "description": "Find where it is largest.", "workingLatex": "-x^2 \\leq 0", "explanation": "The term $-x^2$ is largest (equal to $0$) when $x = 0$, so the peak is at $x = 0$.", "diagram": null },
        { "stepNumber": 4, "description": "Find the $y$-value.", "workingLatex": "y = -0 + 4 = 4", "explanation": "Substituting $x = 0$ gives the maximum height.", "diagram": null },
        { "stepNumber": 5, "description": "State the turning point.", "workingLatex": "(0, 4) \\text{ maximum}", "explanation": "So the maximum point is $(0, 4)$.", "diagram": null }
      ],
      "finalAnswer": "Maximum at $(0, 4)$"
    }
  },
  {
    "id": "gcse.algebra.quadratic-graphs.q011",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Quadratic graphs",
    "subtopicId": "gcse.algebra.quadratic-graphs",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "value",
    "tags": ["quadratic graphs", "roots", "y-intercept", "factorising"],
    "questionText": "For the graph of $y = x^2 - 5x + 6$, find the $y$-intercept and the two $x$-intercepts.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Find the $y$-intercept.", "workingLatex": "x = 0 \\Rightarrow y = 6", "explanation": "The constant term gives the $y$-axis crossing at $(0, 6)$.", "diagram": null },
        { "stepNumber": 2, "description": "Set $y = 0$ for the roots.", "workingLatex": "x^2 - 5x + 6 = 0", "explanation": "The $x$-intercepts occur where $y = 0$.", "diagram": null },
        { "stepNumber": 3, "description": "Factorise.", "workingLatex": "(x - 2)(x - 3) = 0", "explanation": "We need two numbers multiplying to $6$ and adding to $-5$: these are $-2$ and $-3$.", "diagram": null },
        { "stepNumber": 4, "description": "Solve each factor.", "workingLatex": "x = 2 \\text{ or } x = 3", "explanation": "Setting each bracket to zero gives the roots.", "diagram": null },
        { "stepNumber": 5, "description": "State the intercepts.", "workingLatex": "(0,6),\\ (2,0),\\ (3,0)", "explanation": "So the curve crosses the axes at these three points.", "diagram": null }
      ],
      "finalAnswer": "$y$-intercept $(0, 6)$; $x$-intercepts $x = 2$ and $x = 3$"
    }
  },
  {
    "id": "gcse.algebra.quadratic-graphs.q012",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Quadratic graphs",
    "subtopicId": "gcse.algebra.quadratic-graphs",
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "text",
    "tags": ["quadratic graphs", "sketching", "roots", "turning point", "y-intercept"],
    "questionText": "Find the $x$-intercepts, $y$-intercept and turning point of $y = x^2 - 2x - 3$, giving enough information to sketch the curve.",
    "questionDiagram": {
      "kind": "functionGraph",
      "xMin": -3, "xMax": 5, "yMin": -5, "yMax": 6,
      "curves": [{ "fn": { "base": "parab", "c": 1, "d": -4 }, "color": "accent", "label": "y=x^2-2x-3" }],
      "points": [
        { "x": -1, "y": 0, "label": "(-1,0)", "color": "ink" },
        { "x": 3, "y": 0, "label": "(3,0)", "color": "ink" },
        { "x": 0, "y": -3, "label": "(0,-3)", "color": "soft" },
        { "x": 1, "y": -4, "label": "(1,-4)", "color": "ink" }
      ],
      "alt": "A parabola crossing the x-axis at -1 and 3, the y-axis at -3, with minimum at (1,-4)."
    },
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Find the $y$-intercept.", "workingLatex": "x = 0 \\Rightarrow y = -3", "explanation": "The constant term gives the crossing at $(0, -3)$.", "diagram": null },
        { "stepNumber": 2, "description": "Factorise for the roots.", "workingLatex": "x^2 - 2x - 3 = (x - 3)(x + 1)", "explanation": "Two numbers multiplying to $-3$ and adding to $-2$ are $-3$ and $+1$.", "diagram": null },
        { "stepNumber": 3, "description": "Solve for the roots.", "workingLatex": "x = 3 \\text{ or } x = -1", "explanation": "Setting each bracket to zero gives the $x$-intercepts.", "diagram": null },
        { "stepNumber": 4, "description": "Find the line of symmetry.", "workingLatex": "x = \\dfrac{-1 + 3}{2} = 1", "explanation": "The axis lies halfway between the roots.", "diagram": null },
        { "stepNumber": 5, "description": "Find the turning-point height.", "workingLatex": "y = 1^2 - 2(1) - 3 = -4", "explanation": "Substituting $x = 1$ gives the minimum value.", "diagram": null },
        { "stepNumber": 6, "description": "Collect the key features.", "workingLatex": "(-1,0),(3,0),(0,-3),\\ \\min(1,-4)", "explanation": "These points — roots, $y$-intercept and minimum — are enough to sketch the upward parabola.", "diagram": null }
      ],
      "finalAnswer": "$x$-intercepts $-1$ and $3$; $y$-intercept $-3$; minimum turning point $(1, -4)$."
    }
  },
  {
    "id": "gcse.algebra.quadratic-graphs.q013",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Quadratic graphs",
    "subtopicId": "gcse.algebra.quadratic-graphs",
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "expression",
    "tags": ["quadratic graphs", "finding the equation", "roots"],
    "questionText": "A quadratic curve crosses the $x$-axis at $x = -2$ and $x = 3$, and crosses the $y$-axis at $(0, -6)$. Find its equation in the form $y = x^2 + bx + c$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Write the factorised form from the roots.", "workingLatex": "y = a(x + 2)(x - 3)", "explanation": "Roots at $-2$ and $3$ give factors $(x + 2)$ and $(x - 3)$, with an unknown scale $a$.", "diagram": null },
        { "stepNumber": 2, "description": "Use the $y$-intercept to find $a$.", "workingLatex": "-6 = a(0 + 2)(0 - 3)", "explanation": "Substituting the point $(0, -6)$.", "diagram": null },
        { "stepNumber": 3, "description": "Simplify.", "workingLatex": "-6 = a(2)(-3) = -6a", "explanation": "Multiplying the brackets at $x = 0$.", "diagram": null },
        { "stepNumber": 4, "description": "Solve for $a$.", "workingLatex": "a = 1", "explanation": "Dividing both sides by $-6$.", "diagram": null },
        { "stepNumber": 5, "description": "Expand the brackets.", "workingLatex": "y = (x + 2)(x - 3) = x^2 - x - 6", "explanation": "Multiplying out gives the required form.", "diagram": null },
        { "stepNumber": 6, "description": "State the equation.", "workingLatex": "y = x^2 - x - 6", "explanation": "This curve has the right roots and $y$-intercept.", "diagram": null }
      ],
      "finalAnswer": "$y = x^2 - x - 6$"
    }
  },
  {
    "id": "gcse.algebra.quadratic-graphs.q014",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Quadratic graphs",
    "subtopicId": "gcse.algebra.quadratic-graphs",
    "difficulty": "Intermediate",
    "marks": 2,
    "answerType": "value",
    "tags": ["quadratic graphs", "solving graphically", "roots"],
    "questionText": "The graph of $y = x^2 - 2x - 3$ is drawn. Use it to write down the solutions of $x^2 - 2x - 3 = 0$.",
    "questionDiagram": {
      "kind": "functionGraph",
      "xMin": -3, "xMax": 5, "yMin": -5, "yMax": 6,
      "curves": [{ "fn": { "base": "parab", "c": 1, "d": -4 }, "color": "accent", "label": "y=x^2-2x-3" }],
      "points": [
        { "x": -1, "y": 0, "label": "(-1,0)", "color": "ink" },
        { "x": 3, "y": 0, "label": "(3,0)", "color": "ink" }
      ],
      "alt": "A parabola crossing the x-axis at -1 and 3."
    },
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Interpret the equation graphically.", "workingLatex": "x^2 - 2x - 3 = 0 \\Leftrightarrow y = 0", "explanation": "Solving equals finding where the curve's height is zero — the $x$-axis crossings.", "diagram": null },
        { "stepNumber": 2, "description": "Read the crossings from the graph.", "workingLatex": "x = -1,\\ x = 3", "explanation": "The parabola meets the $x$-axis at these two points.", "diagram": null },
        { "stepNumber": 3, "description": "State the solutions.", "workingLatex": "x = -1 \\text{ or } x = 3", "explanation": "These $x$-values are the solutions of the equation.", "diagram": null }
      ],
      "finalAnswer": "$x = -1$ and $x = 3$"
    }
  },
  {
    "id": "gcse.algebra.quadratic-graphs.q015",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Quadratic graphs",
    "subtopicId": "gcse.algebra.quadratic-graphs",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "value",
    "tags": ["quadratic graphs", "completing the square", "minimum value"],
    "questionText": "By completing the square, find the minimum value of $y = x^2 + 4x + 7$ and the value of $x$ where it occurs.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Halve the coefficient of $x$.", "workingLatex": "4 \\div 2 = 2", "explanation": "This number goes inside the bracket.", "diagram": null },
        { "stepNumber": 2, "description": "Write the square and correct.", "workingLatex": "(x + 2)^2 - 4 + 7", "explanation": "Expanding $(x+2)^2$ adds an extra $+4$, so we subtract $4$ to compensate.", "diagram": null },
        { "stepNumber": 3, "description": "Simplify.", "workingLatex": "y = (x + 2)^2 + 3", "explanation": "Combining $-4 + 7$ gives $3$.", "diagram": null },
        { "stepNumber": 4, "description": "Find the smallest value.", "workingLatex": "(x + 2)^2 \\geq 0", "explanation": "The squared term is smallest ($0$) when $x = -2$, so $y$ is smallest there.", "diagram": null },
        { "stepNumber": 5, "description": "State the minimum.", "workingLatex": "y_{\\min} = 3 \\text{ at } x = -2", "explanation": "The least value of $y$ is $3$, occurring at $x = -2$.", "diagram": null }
      ],
      "finalAnswer": "Minimum value $3$, at $x = -2$"
    }
  },
  {
    "id": "gcse.algebra.quadratic-graphs.q016",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Quadratic graphs",
    "subtopicId": "gcse.algebra.quadratic-graphs",
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "text",
    "tags": ["quadratic graphs", "number of roots", "completing the square", "reasoning"],
    "questionText": "Explain, without drawing the graph, why $y = x^2 + 2x + 5$ never crosses the $x$-axis.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Complete the square.", "workingLatex": "x^2 + 2x + 5 = (x + 1)^2 - 1 + 5", "explanation": "Halving $2$ gives $1$; expanding $(x+1)^2$ adds $+1$, so subtract $1$.", "diagram": null },
        { "stepNumber": 2, "description": "Simplify.", "workingLatex": "y = (x + 1)^2 + 4", "explanation": "Combining the constants gives $+4$.", "diagram": null },
        { "stepNumber": 3, "description": "Bound the squared term.", "workingLatex": "(x + 1)^2 \\geq 0", "explanation": "A square is never negative.", "diagram": null },
        { "stepNumber": 4, "description": "Bound $y$.", "workingLatex": "y \\geq 0 + 4 = 4", "explanation": "Adding $4$ shows $y$ is always at least $4$.", "diagram": null },
        { "stepNumber": 5, "description": "Conclude.", "workingLatex": "y \\geq 4 > 0", "explanation": "Since $y$ is always positive, the curve stays above the $x$-axis and never crosses it.", "diagram": null }
      ],
      "finalAnswer": "In completed-square form $y = (x+1)^2 + 4 \\geq 4$, so $y$ is always positive and the curve never reaches the $x$-axis."
    }
  },
  {
    "id": "gcse.algebra.quadratic-graphs.q017",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Quadratic graphs",
    "subtopicId": "gcse.algebra.quadratic-graphs",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "value",
    "tags": ["quadratic graphs", "solving graphically", "roots"],
    "questionText": "The graph of $y = x^2 - 4$ is drawn. Use it to solve $x^2 - 4 = 0$.",
    "questionDiagram": {
      "kind": "functionGraph",
      "xMin": -4, "xMax": 4, "yMin": -5, "yMax": 6,
      "curves": [{ "fn": { "base": "parab", "d": -4 }, "color": "accent", "label": "y=x^2-4" }],
      "points": [
        { "x": -2, "y": 0, "label": "(-2,0)", "color": "ink" },
        { "x": 2, "y": 0, "label": "(2,0)", "color": "ink" }
      ],
      "alt": "A parabola crossing the x-axis at -2 and 2."
    },
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Interpret graphically.", "workingLatex": "x^2 - 4 = 0 \\Leftrightarrow y = 0", "explanation": "The solutions are the $x$-values where the curve meets the $x$-axis.", "diagram": null },
        { "stepNumber": 2, "description": "Read the crossings.", "workingLatex": "x = -2,\\ x = 2", "explanation": "The parabola cuts the $x$-axis at these two points.", "diagram": null },
        { "stepNumber": 3, "description": "State the solutions.", "workingLatex": "x = \\pm 2", "explanation": "So the equation has solutions $x = -2$ and $x = 2$.", "diagram": null }
      ],
      "finalAnswer": "$x = -2$ and $x = 2$"
    }
  },
  {
    "id": "gcse.algebra.quadratic-graphs.q018",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Quadratic graphs",
    "subtopicId": "gcse.algebra.quadratic-graphs",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "coordinate",
    "tags": ["quadratic graphs", "symmetry", "points on a curve"],
    "questionText": "A parabola has line of symmetry $x = 3$. The point $(1, 5)$ lies on the curve. Find the coordinates of the other point on the curve with the same $y$-value.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Use the symmetry idea.", "workingLatex": "\\text{points at equal distance from } x = 3", "explanation": "Two points with the same height are mirror images across the line of symmetry, so they are the same distance from it.", "diagram": null },
        { "stepNumber": 2, "description": "Find the distance to the axis.", "workingLatex": "3 - 1 = 2", "explanation": "The known point is $2$ units to the left of $x = 3$.", "diagram": null },
        { "stepNumber": 3, "description": "Reflect to the other side.", "workingLatex": "3 + 2 = 5", "explanation": "The mirror point is $2$ units to the right of the axis.", "diagram": null },
        { "stepNumber": 4, "description": "Keep the same $y$-value.", "workingLatex": "y = 5", "explanation": "Reflection across a vertical line does not change the height.", "diagram": null },
        { "stepNumber": 5, "description": "State the point.", "workingLatex": "(5, 5)", "explanation": "So the matching point is $(5, 5)$.", "diagram": null }
      ],
      "finalAnswer": "$(5, 5)$"
    }
  },
  {
    "id": "gcse.algebra.quadratic-graphs.q019",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Quadratic graphs",
    "subtopicId": "gcse.algebra.quadratic-graphs",
    "difficulty": "Hard",
    "marks": 4,
    "answerType": "value",
    "tags": ["quadratic graphs", "solving graphically", "intersection with a line"],
    "questionText": "The graph of $y = x^2 - x - 2$ is drawn. Explain how you would use it to solve $x^2 - x - 2 = 4$, and give the solutions.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Set the curve equal to the target.", "workingLatex": "x^2 - x - 2 = 4", "explanation": "We want the $x$-values where the curve reaches a height of $4$.", "diagram": null },
        { "stepNumber": 2, "description": "Describe the graphical method.", "workingLatex": "\\text{draw } y = 4 \\text{ and read intersections}", "explanation": "On the graph, draw the horizontal line $y = 4$; the solutions are where it meets the curve.", "diagram": null },
        { "stepNumber": 3, "description": "Rearrange to check algebraically.", "workingLatex": "x^2 - x - 6 = 0", "explanation": "Subtracting $4$ from both sides gives a standard quadratic to factorise.", "diagram": null },
        { "stepNumber": 4, "description": "Factorise.", "workingLatex": "(x - 3)(x + 2) = 0", "explanation": "Two numbers multiplying to $-6$ and adding to $-1$ are $-3$ and $+2$.", "diagram": null },
        { "stepNumber": 5, "description": "Solve.", "workingLatex": "x = 3 \\text{ or } x = -2", "explanation": "These are the $x$-values where the line $y = 4$ meets the curve.", "diagram": null }
      ],
      "finalAnswer": "Draw $y = 4$ and read the intersections: $x = -2$ and $x = 3$."
    }
  },
  {
    "id": "gcse.algebra.quadratic-graphs.q020",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Quadratic graphs",
    "subtopicId": "gcse.algebra.quadratic-graphs",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "coordinate",
    "tags": ["quadratic graphs", "turning point", "completing the square"],
    "questionText": "Find the coordinates of the turning point of $y = x^2 + 8x$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Halve the coefficient of $x$.", "workingLatex": "8 \\div 2 = 4", "explanation": "This goes inside the bracket for completing the square.", "diagram": null },
        { "stepNumber": 2, "description": "Write the square and correct.", "workingLatex": "(x + 4)^2 - 16", "explanation": "Expanding $(x+4)^2$ adds $+16$, so we subtract $16$ to keep it equal (there is no constant to combine with).", "diagram": null },
        { "stepNumber": 3, "description": "State completed-square form.", "workingLatex": "y = (x + 4)^2 - 16", "explanation": "This form shows the turning point directly.", "diagram": null },
        { "stepNumber": 4, "description": "Read the turning point.", "workingLatex": "(-4, -16)", "explanation": "The bracket is zero at $x = -4$, giving $y = -16$.", "diagram": null },
        { "stepNumber": 5, "description": "State the type.", "workingLatex": "\\text{minimum}", "explanation": "The positive squared term means it is a minimum point.", "diagram": null }
      ],
      "finalAnswer": "Minimum at $(-4, -16)$"
    }
  },
  {
    "id": "gcse.algebra.quadratic-graphs.q021",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Quadratic graphs",
    "subtopicId": "gcse.algebra.quadratic-graphs",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "coordinate",
    "tags": ["quadratic graphs", "reading a graph", "turning point"],
    "questionText": "The graph of $y = x^2 - 4x + 3$ is shown. Write down the coordinates of its turning point.",
    "questionDiagram": {
      "kind": "functionGraph",
      "xMin": -1, "xMax": 5, "yMin": -2, "yMax": 6,
      "curves": [{ "fn": { "base": "parab", "c": 2, "d": -1 }, "color": "accent", "label": "y=x^2-4x+3" }],
      "points": [
        { "x": 1, "y": 0, "label": "(1,0)", "color": "soft" },
        { "x": 3, "y": 0, "label": "(3,0)", "color": "soft" },
        { "x": 2, "y": -1, "label": "min", "color": "ink" }
      ],
      "alt": "A parabola with roots at 1 and 3 and a minimum turning point at (2,-1)."
    },
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Locate the lowest point.", "workingLatex": "\\text{bottom of the U}", "explanation": "The turning point is the lowest point of this upward parabola.", "diagram": null },
        { "stepNumber": 2, "description": "Use the symmetry of the roots.", "workingLatex": "x = \\dfrac{1 + 3}{2} = 2", "explanation": "The turning point lies halfway between the roots $1$ and $3$.", "diagram": null },
        { "stepNumber": 3, "description": "Find the height there.", "workingLatex": "y = 2^2 - 4(2) + 3 = -1", "explanation": "Substituting $x = 2$ into the equation gives the minimum value.", "diagram": null },
        { "stepNumber": 4, "description": "State the turning point.", "workingLatex": "(2, -1)", "explanation": "So the minimum turning point is $(2, -1)$.", "diagram": null }
      ],
      "finalAnswer": "$(2, -1)$"
    }
  },
  {
    "id": "gcse.algebra.quadratic-graphs.q022",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Quadratic graphs",
    "subtopicId": "gcse.algebra.quadratic-graphs",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "value",
    "tags": ["quadratic graphs", "roots", "factorising"],
    "questionText": "Find the $x$-coordinates of the points where $y = x^2 + x - 6$ crosses the $x$-axis.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Set $y = 0$.", "workingLatex": "x^2 + x - 6 = 0", "explanation": "The $x$-axis crossings occur where $y = 0$.", "diagram": null },
        { "stepNumber": 2, "description": "Factorise.", "workingLatex": "(x + 3)(x - 2) = 0", "explanation": "Two numbers multiplying to $-6$ and adding to $+1$ are $+3$ and $-2$.", "diagram": null },
        { "stepNumber": 3, "description": "Solve each factor.", "workingLatex": "x = -3 \\text{ or } x = 2", "explanation": "Setting each bracket to zero gives the roots.", "diagram": null },
        { "stepNumber": 4, "description": "State the crossings.", "workingLatex": "(-3, 0),\\ (2, 0)", "explanation": "So the curve crosses the $x$-axis at these two points.", "diagram": null }
      ],
      "finalAnswer": "$x = -3$ and $x = 2$"
    }
  },
  {
    "id": "gcse.algebra.quadratic-graphs.q023",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Quadratic graphs",
    "subtopicId": "gcse.algebra.quadratic-graphs",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "value",
    "tags": ["quadratic graphs", "real context", "maximum", "completing the square"],
    "questionText": "A ball is thrown so that its height is $h = 20t - 5t^2$ metres after $t$ seconds. Find the maximum height and the time at which it occurs.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Factor out the $-5$.", "workingLatex": "h = -5(t^2 - 4t)", "explanation": "Taking out the coefficient of $t^2$ prepares the expression for completing the square.", "diagram": null },
        { "stepNumber": 2, "description": "Complete the square inside.", "workingLatex": "t^2 - 4t = (t - 2)^2 - 4", "explanation": "Halving $-4$ gives $-2$; expanding adds $+4$, so subtract $4$.", "diagram": null },
        { "stepNumber": 3, "description": "Multiply back by $-5$.", "workingLatex": "h = -5\\left[(t - 2)^2 - 4\\right] = -5(t - 2)^2 + 20", "explanation": "Distributing the $-5$ across both terms.", "diagram": null },
        { "stepNumber": 4, "description": "Find the largest value.", "workingLatex": "-5(t - 2)^2 \\leq 0", "explanation": "The squared term is never negative, so multiplying by $-5$ makes this part at most $0$, largest when $t = 2$.", "diagram": null },
        { "stepNumber": 5, "description": "Read the maximum height.", "workingLatex": "h_{\\max} = 20", "explanation": "When $t = 2$ the squared term vanishes, leaving $h = 20$.", "diagram": null },
        { "stepNumber": 6, "description": "State the answer.", "workingLatex": "20\\,\\text{m at } t = 2\\,\\text{s}", "explanation": "So the ball reaches a maximum height of $20$ m after $2$ seconds.", "diagram": null }
      ],
      "finalAnswer": "Maximum height $20$ m at $t = 2$ s"
    }
  },
  {
    "id": "gcse.algebra.quadratic-graphs.q024",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Quadratic graphs",
    "subtopicId": "gcse.algebra.quadratic-graphs",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "value",
    "tags": ["quadratic graphs", "y-intercept", "factorised form"],
    "questionText": "Find the $y$-intercept of the curve $y = (x - 2)(x + 5)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Set $x = 0$.", "workingLatex": "y = (0 - 2)(0 + 5)", "explanation": "The $y$-intercept is the value when $x = 0$; we can use the factorised form directly.", "diagram": null },
        { "stepNumber": 2, "description": "Evaluate the brackets.", "workingLatex": "(-2)(5)", "explanation": "Each bracket becomes a number when $x = 0$.", "diagram": null },
        { "stepNumber": 3, "description": "Multiply.", "workingLatex": "y = -10", "explanation": "A negative times a positive is negative.", "diagram": null },
        { "stepNumber": 4, "description": "State the intercept.", "workingLatex": "(0, -10)", "explanation": "So the curve crosses the $y$-axis at $(0, -10)$.", "diagram": null }
      ],
      "finalAnswer": "$(0, -10)$"
    }
  },
  {
    "id": "gcse.algebra.quadratic-graphs.q025",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Quadratic graphs",
    "subtopicId": "gcse.algebra.quadratic-graphs",
    "difficulty": "Hard",
    "marks": 4,
    "answerType": "value",
    "tags": ["quadratic graphs", "solving graphically", "intersection with a line"],
    "questionText": "By rearranging, find the $x$-coordinates of the points where the curve $y = x^2$ meets the line $y = 2x + 3$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Set the curve equal to the line.", "workingLatex": "x^2 = 2x + 3", "explanation": "The meeting points have the same $y$-value on both graphs.", "diagram": null },
        { "stepNumber": 2, "description": "Rearrange to zero.", "workingLatex": "x^2 - 2x - 3 = 0", "explanation": "Moving everything to one side gives a standard quadratic.", "diagram": null },
        { "stepNumber": 3, "description": "Factorise.", "workingLatex": "(x - 3)(x + 1) = 0", "explanation": "Two numbers multiplying to $-3$ and adding to $-2$ are $-3$ and $+1$.", "diagram": null },
        { "stepNumber": 4, "description": "Solve.", "workingLatex": "x = 3 \\text{ or } x = -1", "explanation": "Setting each bracket to zero gives the $x$-values.", "diagram": null },
        { "stepNumber": 5, "description": "State the answer.", "workingLatex": "x = -1,\\ 3", "explanation": "So the curve and line meet where $x = -1$ and $x = 3$.", "diagram": null }
      ],
      "finalAnswer": "$x = -1$ and $x = 3$"
    }
  },
  {
    "id": "gcse.algebra.quadratic-graphs.q026",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Quadratic graphs",
    "subtopicId": "gcse.algebra.quadratic-graphs",
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "expression",
    "tags": ["quadratic graphs", "finding the equation", "turning point", "completed square form"],
    "questionText": "A parabola has minimum turning point $(2, -1)$ and passes through $(0, 3)$. Find its equation in the form $y = x^2 + bx + c$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Write completed-square form.", "workingLatex": "y = a(x - 2)^2 - 1", "explanation": "A turning point $(2, -1)$ gives this form, with an unknown scale $a$.", "diagram": null },
        { "stepNumber": 2, "description": "Use the point $(0, 3)$.", "workingLatex": "3 = a(0 - 2)^2 - 1", "explanation": "Substituting the known point to find $a$.", "diagram": null },
        { "stepNumber": 3, "description": "Simplify.", "workingLatex": "3 = 4a - 1", "explanation": "Since $(-2)^2 = 4$.", "diagram": null },
        { "stepNumber": 4, "description": "Solve for $a$.", "workingLatex": "4a = 4 \\Rightarrow a = 1", "explanation": "Adding $1$ then dividing by $4$.", "diagram": null },
        { "stepNumber": 5, "description": "Expand the brackets.", "workingLatex": "y = (x - 2)^2 - 1 = x^2 - 4x + 4 - 1", "explanation": "Expanding the square with $a = 1$.", "diagram": null },
        { "stepNumber": 6, "description": "Simplify.", "workingLatex": "y = x^2 - 4x + 3", "explanation": "Combining the constants gives the required form.", "diagram": null }
      ],
      "finalAnswer": "$y = x^2 - 4x + 3$"
    }
  },
  {
    "id": "gcse.algebra.quadratic-graphs.q027",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Quadratic graphs",
    "subtopicId": "gcse.algebra.quadratic-graphs",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "expression",
    "tags": ["quadratic graphs", "line of symmetry", "completing the square"],
    "questionText": "Find the equation of the line of symmetry of $y = x^2 + 6x + 5$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Complete the square.", "workingLatex": "x^2 + 6x + 5 = (x + 3)^2 - 9 + 5", "explanation": "Halving $6$ gives $3$; expanding adds $+9$, so subtract $9$.", "diagram": null },
        { "stepNumber": 2, "description": "Simplify.", "workingLatex": "y = (x + 3)^2 - 4", "explanation": "Combining $-9 + 5$ gives $-4$.", "diagram": null },
        { "stepNumber": 3, "description": "Find the axis.", "workingLatex": "x + 3 = 0 \\Rightarrow x = -3", "explanation": "The line of symmetry passes through the turning point, where the bracket is zero.", "diagram": null },
        { "stepNumber": 4, "description": "State the line.", "workingLatex": "x = -3", "explanation": "So the axis of symmetry is $x = -3$.", "diagram": null }
      ],
      "finalAnswer": "$x = -3$"
    }
  },
  {
    "id": "gcse.algebra.quadratic-graphs.q028",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Quadratic graphs",
    "subtopicId": "gcse.algebra.quadratic-graphs",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "value",
    "tags": ["quadratic graphs", "number of roots"],
    "questionText": "How many times does the graph of $y = x^2 + 1$ cross the $x$-axis?",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Consider the smallest value of $x^2$.", "workingLatex": "x^2 \\geq 0", "explanation": "The squared term is never negative.", "diagram": null },
        { "stepNumber": 2, "description": "Add the constant.", "workingLatex": "y = x^2 + 1 \\geq 1", "explanation": "Adding $1$ means $y$ is always at least $1$.", "diagram": null },
        { "stepNumber": 3, "description": "Compare with the $x$-axis.", "workingLatex": "y \\geq 1 > 0", "explanation": "Since $y$ is always positive, the curve stays above the $x$-axis.", "diagram": null },
        { "stepNumber": 4, "description": "State the number of crossings.", "workingLatex": "0", "explanation": "The graph never reaches $y = 0$, so it crosses the $x$-axis zero times.", "diagram": null }
      ],
      "finalAnswer": "It never crosses (0 times)."
    }
  },
  {
    "id": "gcse.algebra.quadratic-graphs.q029",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Quadratic graphs",
    "subtopicId": "gcse.algebra.quadratic-graphs",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "text",
    "tags": ["quadratic graphs", "points on a curve", "substitution"],
    "questionText": "Does the point $(3, 6)$ lie on the curve $y = x^2 - x$? Show your working.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Substitute the $x$-value.", "workingLatex": "y = 3^2 - 3", "explanation": "We put $x = 3$ into the equation to find the curve's height there.", "diagram": null },
        { "stepNumber": 2, "description": "Evaluate.", "workingLatex": "y = 9 - 3 = 6", "explanation": "The curve passes through height $6$ when $x = 3$.", "diagram": null },
        { "stepNumber": 3, "description": "Compare with the point.", "workingLatex": "6 = 6 \\ \\checkmark", "explanation": "The computed $y$-value matches the point's $y$-value.", "diagram": null },
        { "stepNumber": 4, "description": "State the conclusion.", "workingLatex": "(3, 6) \\text{ lies on the curve}", "explanation": "Since the coordinates satisfy the equation, the point is on the curve.", "diagram": null }
      ],
      "finalAnswer": "Yes — substituting $x = 3$ gives $y = 6$, matching the point."
    }
  },
  {
    "id": "gcse.algebra.quadratic-graphs.q030",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Quadratic graphs",
    "subtopicId": "gcse.algebra.quadratic-graphs",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "coordinate",
    "tags": ["quadratic graphs", "table of values", "turning point"],
    "questionText": "A table for $y = x^2 - 2x$ gives $y = 3, 0, -1, 0, 3$ at $x = -1, 0, 1, 2, 3$. Use the table to state the coordinates of the turning point.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Look for the smallest $y$-value.", "workingLatex": "\\min y = -1", "explanation": "For an upward parabola the turning point is where $y$ is smallest in the table.", "diagram": null },
        { "stepNumber": 2, "description": "Find where it occurs.", "workingLatex": "y = -1 \\text{ at } x = 1", "explanation": "The lowest value $-1$ appears at $x = 1$.", "diagram": null },
        { "stepNumber": 3, "description": "Check the symmetry.", "workingLatex": "y(0) = y(2) = 0", "explanation": "Equal values either side of $x = 1$ confirm the axis of symmetry is $x = 1$.", "diagram": null },
        { "stepNumber": 4, "description": "State the turning point.", "workingLatex": "(1, -1)", "explanation": "So the minimum turning point is $(1, -1)$.", "diagram": null }
      ],
      "finalAnswer": "$(1, -1)$"
    }
  },
  {
    "id": "gcse.algebra.quadratic-graphs.q031",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Quadratic graphs",
    "subtopicId": "gcse.algebra.quadratic-graphs",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "value",
    "tags": ["quadratic graphs", "real context", "maximum", "completing the square"],
    "questionText": "A farmer makes a rectangular pen against a wall using $40$ m of fencing for the three fenced sides. If the width is $x$ m, the area is $A = x(40 - 2x)$. Find the width that gives the maximum area, and the maximum area.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Expand the area expression.", "workingLatex": "A = 40x - 2x^2", "explanation": "Multiplying out shows $A$ is a quadratic in $x$ that opens downward, so it has a maximum.", "diagram": null },
        { "stepNumber": 2, "description": "Factor out $-2$.", "workingLatex": "A = -2(x^2 - 20x)", "explanation": "Taking out the coefficient of $x^2$ prepares for completing the square.", "diagram": null },
        { "stepNumber": 3, "description": "Complete the square inside.", "workingLatex": "x^2 - 20x = (x - 10)^2 - 100", "explanation": "Halving $-20$ gives $-10$; expanding adds $+100$, so subtract $100$.", "diagram": null },
        { "stepNumber": 4, "description": "Multiply back.", "workingLatex": "A = -2(x - 10)^2 + 200", "explanation": "Distributing the $-2$ across both terms.", "diagram": null },
        { "stepNumber": 5, "description": "Find the maximising width.", "workingLatex": "x = 10", "explanation": "The squared term is zero (and $A$ largest) when $x = 10$.", "diagram": null },
        { "stepNumber": 6, "description": "State the maximum area.", "workingLatex": "A_{\\max} = 200\\,\\text{m}^2", "explanation": "At $x = 10$ the area reaches its maximum of $200$ m$^2$.", "diagram": null }
      ],
      "finalAnswer": "Width $10$ m gives the maximum area of $200$ m$^2$."
    }
  },
  {
    "id": "gcse.algebra.quadratic-graphs.q032",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Quadratic graphs",
    "subtopicId": "gcse.algebra.quadratic-graphs",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "value",
    "tags": ["quadratic graphs", "symmetry", "roots"],
    "questionText": "A parabola has line of symmetry $x = 2$ and one $x$-intercept at $x = 5$. Find the other $x$-intercept.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Use the symmetry of the roots.", "workingLatex": "\\text{roots equidistant from } x = 2", "explanation": "The two roots are mirror images across the axis of symmetry, so they are the same distance from it.", "diagram": null },
        { "stepNumber": 2, "description": "Find the distance from the known root.", "workingLatex": "5 - 2 = 3", "explanation": "The root at $5$ is $3$ units to the right of the axis.", "diagram": null },
        { "stepNumber": 3, "description": "Reflect to the other side.", "workingLatex": "2 - 3 = -1", "explanation": "The other root is $3$ units to the left of the axis.", "diagram": null },
        { "stepNumber": 4, "description": "State the answer.", "workingLatex": "x = -1", "explanation": "So the other $x$-intercept is at $x = -1$.", "diagram": null }
      ],
      "finalAnswer": "$x = -1$"
    }
  },
  {
    "id": "gcse.algebra.quadratic-graphs.q033",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Quadratic graphs",
    "subtopicId": "gcse.algebra.quadratic-graphs",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "text",
    "tags": ["quadratic graphs", "sketching", "roots", "y-intercept"],
    "questionText": "State the $x$-intercepts and $y$-intercept of $y = (x + 1)(x - 3)$, and say whether the curve has a maximum or minimum.",
    "questionDiagram": {
      "kind": "functionGraph",
      "xMin": -3, "xMax": 5, "yMin": -5, "yMax": 6,
      "curves": [{ "fn": { "base": "parab", "c": 1, "d": -4 }, "color": "accent", "label": "y=(x+1)(x-3)" }],
      "points": [
        { "x": -1, "y": 0, "label": "(-1,0)", "color": "ink" },
        { "x": 3, "y": 0, "label": "(3,0)", "color": "ink" },
        { "x": 0, "y": -3, "label": "(0,-3)", "color": "soft" }
      ],
      "alt": "A parabola crossing the x-axis at -1 and 3 and the y-axis at -3."
    },
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Find the roots.", "workingLatex": "x + 1 = 0 \\text{ or } x - 3 = 0", "explanation": "Setting each factor to zero gives the $x$-intercepts.", "diagram": null },
        { "stepNumber": 2, "description": "Solve.", "workingLatex": "x = -1,\\ x = 3", "explanation": "So the curve crosses the $x$-axis at $-1$ and $3$.", "diagram": null },
        { "stepNumber": 3, "description": "Find the $y$-intercept.", "workingLatex": "(0 + 1)(0 - 3) = -3", "explanation": "Substituting $x = 0$ gives the $y$-axis crossing.", "diagram": null },
        { "stepNumber": 4, "description": "Decide max or min.", "workingLatex": "x^2 \\text{ coefficient} = +1", "explanation": "Expanding would give a positive $x^2$ term, so the parabola opens upward.", "diagram": null },
        { "stepNumber": 5, "description": "State the features.", "workingLatex": "(-1,0),(3,0),(0,-3),\\ \\min", "explanation": "The curve has a minimum turning point, opening upward.", "diagram": null }
      ],
      "finalAnswer": "$x$-intercepts $-1$ and $3$; $y$-intercept $-3$; the curve has a minimum."
    }
  },
  {
    "id": "gcse.algebra.quadratic-graphs.q034",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Quadratic graphs",
    "subtopicId": "gcse.algebra.quadratic-graphs",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "coordinate",
    "tags": ["quadratic graphs", "negative parabola", "maximum", "completing the square"],
    "questionText": "Find the coordinates of the turning point of $y = -x^2 + 6x - 5$ and state that it is a maximum.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Factor out $-1$.", "workingLatex": "y = -(x^2 - 6x + 5)", "explanation": "Taking out $-1$ makes completing the square inside easier.", "diagram": null },
        { "stepNumber": 2, "description": "Complete the square inside.", "workingLatex": "x^2 - 6x + 5 = (x - 3)^2 - 4", "explanation": "Halving $-6$ gives $-3$; expanding adds $+9$, so $-9 + 5 = -4$.", "diagram": null },
        { "stepNumber": 3, "description": "Multiply back by $-1$.", "workingLatex": "y = -\\left[(x - 3)^2 - 4\\right] = -(x - 3)^2 + 4", "explanation": "Distributing the $-1$ flips the signs.", "diagram": null },
        { "stepNumber": 4, "description": "Read the turning point.", "workingLatex": "(3, 4)", "explanation": "The bracket is zero at $x = 3$, giving $y = 4$.", "diagram": null },
        { "stepNumber": 5, "description": "State max or min.", "workingLatex": "-(x-3)^2 \\leq 0 \\Rightarrow \\text{maximum}", "explanation": "The negative squared term means the curve opens downward, so $(3, 4)$ is a maximum.", "diagram": null }
      ],
      "finalAnswer": "Maximum at $(3, 4)$"
    }
  },
  {
    "id": "gcse.algebra.quadratic-graphs.q035",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Quadratic graphs",
    "subtopicId": "gcse.algebra.quadratic-graphs",
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "value",
    "tags": ["quadratic graphs", "coefficient a", "roots", "line of symmetry"],
    "questionText": "For $y = 2x^2 - 8x + 6$, find the two $x$-intercepts and the equation of the line of symmetry.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Set $y = 0$.", "workingLatex": "2x^2 - 8x + 6 = 0", "explanation": "The $x$-intercepts occur where $y = 0$.", "diagram": null },
        { "stepNumber": 2, "description": "Divide through by $2$.", "workingLatex": "x^2 - 4x + 3 = 0", "explanation": "Dividing by the common factor $2$ simplifies the factorising.", "diagram": null },
        { "stepNumber": 3, "description": "Factorise.", "workingLatex": "(x - 1)(x - 3) = 0", "explanation": "Two numbers multiplying to $3$ and adding to $-4$ are $-1$ and $-3$.", "diagram": null },
        { "stepNumber": 4, "description": "Solve for the roots.", "workingLatex": "x = 1 \\text{ or } x = 3", "explanation": "Setting each bracket to zero gives the intercepts.", "diagram": null },
        { "stepNumber": 5, "description": "Find the line of symmetry.", "workingLatex": "x = \\dfrac{1 + 3}{2} = 2", "explanation": "The axis is halfway between the roots.", "diagram": null }
      ],
      "finalAnswer": "$x$-intercepts $1$ and $3$; line of symmetry $x = 2$."
    }
  },
  {
    "id": "gcse.algebra.quadratic-graphs.q036",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Quadratic graphs",
    "subtopicId": "gcse.algebra.quadratic-graphs",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "text",
    "tags": ["quadratic graphs", "shape", "coefficient a"],
    "questionText": "Without plotting, describe two differences between the graphs of $y = x^2$ and $y = 3x^2$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Compare a sample value.", "workingLatex": "x = 1:\\ 1 \\text{ vs } 3", "explanation": "At $x = 1$, $y = 3x^2$ is three times higher than $y = x^2$, so it rises faster.", "diagram": null },
        { "stepNumber": 2, "description": "Interpret the steepness.", "workingLatex": "y = 3x^2 \\text{ narrower}", "explanation": "Because it climbs faster, the parabola $y = 3x^2$ is narrower (steeper) than $y = x^2$.", "diagram": null },
        { "stepNumber": 3, "description": "Compare shared features.", "workingLatex": "\\text{same vertex } (0,0)", "explanation": "Both pass through the origin and open upward, so the vertex and axis of symmetry are the same.", "diagram": null },
        { "stepNumber": 4, "description": "State the differences.", "workingLatex": "\\text{steeper / narrower}", "explanation": "The key differences are that $y = 3x^2$ is steeper and narrower, even though both share the vertex $(0,0)$.", "diagram": null }
      ],
      "finalAnswer": "$y = 3x^2$ is steeper and narrower than $y = x^2$, though both have vertex $(0,0)$ and open upward."
    }
  },
  {
    "id": "gcse.algebra.quadratic-graphs.q037",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Quadratic graphs",
    "subtopicId": "gcse.algebra.quadratic-graphs",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "coordinate",
    "tags": ["quadratic graphs", "completing the square", "turning point"],
    "questionText": "Find the coordinates of the turning point of $y = x^2 + 2x - 8$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Halve the coefficient of $x$.", "workingLatex": "2 \\div 2 = 1", "explanation": "This goes inside the bracket.", "diagram": null },
        { "stepNumber": 2, "description": "Write the square and correct.", "workingLatex": "(x + 1)^2 - 1 - 8", "explanation": "Expanding $(x+1)^2$ adds $+1$, so subtract $1$.", "diagram": null },
        { "stepNumber": 3, "description": "Simplify.", "workingLatex": "y = (x + 1)^2 - 9", "explanation": "Combining $-1 - 8$ gives $-9$.", "diagram": null },
        { "stepNumber": 4, "description": "Read the turning point.", "workingLatex": "(-1, -9)", "explanation": "The bracket is zero at $x = -1$, giving $y = -9$.", "diagram": null },
        { "stepNumber": 5, "description": "State the type.", "workingLatex": "\\text{minimum}", "explanation": "The positive squared term means it is a minimum point.", "diagram": null }
      ],
      "finalAnswer": "Minimum at $(-1, -9)$"
    }
  },
  {
    "id": "gcse.algebra.quadratic-graphs.q038",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Quadratic graphs",
    "subtopicId": "gcse.algebra.quadratic-graphs",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "value",
    "tags": ["quadratic graphs", "solving graphically", "intersection with a line"],
    "questionText": "The graph of $y = x^2 - 2x - 3$ is drawn. Use it to solve $x^2 - 2x - 3 = -3$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Interpret graphically.", "workingLatex": "\\text{draw } y = -3", "explanation": "The solutions are where the curve reaches a height of $-3$, i.e. where it meets the line $y = -3$.", "diagram": null },
        { "stepNumber": 2, "description": "Form the equation.", "workingLatex": "x^2 - 2x - 3 = -3", "explanation": "Setting the curve equal to $-3$.", "diagram": null },
        { "stepNumber": 3, "description": "Simplify.", "workingLatex": "x^2 - 2x = 0", "explanation": "Adding $3$ to both sides cancels the constants.", "diagram": null },
        { "stepNumber": 4, "description": "Factorise.", "workingLatex": "x(x - 2) = 0", "explanation": "Both terms share a factor of $x$.", "diagram": null },
        { "stepNumber": 5, "description": "Solve.", "workingLatex": "x = 0 \\text{ or } x = 2", "explanation": "These are the $x$-values where the curve is at height $-3$.", "diagram": null }
      ],
      "finalAnswer": "$x = 0$ and $x = 2$"
    }
  },
  {
    "id": "gcse.algebra.quadratic-graphs.q039",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Quadratic graphs",
    "subtopicId": "gcse.algebra.quadratic-graphs",
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "text",
    "tags": ["quadratic graphs", "negative parabola", "sketching", "roots", "maximum"],
    "questionText": "Find the $x$-intercepts, $y$-intercept and turning point of $y = -x^2 + 2x + 3$.",
    "questionDiagram": {
      "kind": "functionGraph",
      "xMin": -3, "xMax": 5, "yMin": -4, "yMax": 6,
      "curves": [{ "fn": { "base": "parab", "a": -1, "c": 1, "d": 4 }, "color": "accent", "label": "y=-x^2+2x+3" }],
      "points": [
        { "x": -1, "y": 0, "label": "(-1,0)", "color": "ink" },
        { "x": 3, "y": 0, "label": "(3,0)", "color": "ink" },
        { "x": 1, "y": 4, "label": "max (1,4)", "color": "ink" },
        { "x": 0, "y": 3, "label": "(0,3)", "color": "soft" }
      ],
      "alt": "A downward parabola crossing the x-axis at -1 and 3 with maximum at (1,4)."
    },
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Find the $y$-intercept.", "workingLatex": "x = 0 \\Rightarrow y = 3", "explanation": "The constant term gives the crossing at $(0, 3)$.", "diagram": null },
        { "stepNumber": 2, "description": "Set $y = 0$ for the roots.", "workingLatex": "-x^2 + 2x + 3 = 0", "explanation": "Multiply by $-1$: $x^2 - 2x - 3 = 0$.", "diagram": null },
        { "stepNumber": 3, "description": "Factorise.", "workingLatex": "(x - 3)(x + 1) = 0", "explanation": "Two numbers multiplying to $-3$ and adding to $-2$ are $-3$ and $+1$.", "diagram": null },
        { "stepNumber": 4, "description": "Solve for the roots.", "workingLatex": "x = 3 \\text{ or } x = -1", "explanation": "So the curve crosses the $x$-axis at $-1$ and $3$.", "diagram": null },
        { "stepNumber": 5, "description": "Find the turning point.", "workingLatex": "x = \\dfrac{-1 + 3}{2} = 1,\\ y = -1 + 2 + 3 = 4", "explanation": "The axis is midway between roots; substituting gives the height.", "diagram": null },
        { "stepNumber": 6, "description": "State the features.", "workingLatex": "(-1,0),(3,0),(0,3),\\ \\max(1,4)", "explanation": "The negative $x^2$ term makes this a maximum turning point.", "diagram": null }
      ],
      "finalAnswer": "$x$-intercepts $-1$ and $3$; $y$-intercept $3$; maximum turning point $(1, 4)$."
    }
  },
  {
    "id": "gcse.algebra.quadratic-graphs.q040",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Quadratic graphs",
    "subtopicId": "gcse.algebra.quadratic-graphs",
    "difficulty": "Easy",
    "marks": 1,
    "answerType": "value",
    "tags": ["quadratic graphs", "y-intercept"],
    "questionText": "Write down the $y$-intercept of the curve $y = x^2 + 7$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Set $x = 0$.", "workingLatex": "y = 0^2 + 7", "explanation": "The $y$-intercept is the value when $x = 0$.", "diagram": null },
        { "stepNumber": 2, "description": "Simplify.", "workingLatex": "y = 7", "explanation": "The squared term vanishes, leaving the constant.", "diagram": null },
        { "stepNumber": 3, "description": "State the intercept.", "workingLatex": "(0, 7)", "explanation": "So the curve crosses the $y$-axis at $(0, 7)$.", "diagram": null }
      ],
      "finalAnswer": "$7$"
    }
  },
  {
    "id": "gcse.algebra.quadratic-graphs.q041",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Quadratic graphs",
    "subtopicId": "gcse.algebra.quadratic-graphs",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "text",
    "tags": ["quadratic graphs", "repeated root", "touching the axis"],
    "questionText": "Show that the graph of $y = x^2 - 4x + 4$ touches the $x$-axis at exactly one point, and give that point.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Set $y = 0$.", "workingLatex": "x^2 - 4x + 4 = 0", "explanation": "The $x$-axis contact happens where $y = 0$.", "diagram": null },
        { "stepNumber": 2, "description": "Factorise.", "workingLatex": "(x - 2)(x - 2) = 0", "explanation": "This is a perfect square: both factors are $(x - 2)$.", "diagram": null },
        { "stepNumber": 3, "description": "Write as a repeated root.", "workingLatex": "(x - 2)^2 = 0", "explanation": "A perfect square gives a single, repeated solution.", "diagram": null },
        { "stepNumber": 4, "description": "Solve.", "workingLatex": "x = 2", "explanation": "There is only one $x$-value, so the curve meets the axis just once.", "diagram": null },
        { "stepNumber": 5, "description": "Interpret.", "workingLatex": "\\text{touches at } (2, 0)", "explanation": "A repeated root means the parabola touches (rather than crosses) the $x$-axis at $(2, 0)$ — its turning point.", "diagram": null }
      ],
      "finalAnswer": "$(x - 2)^2 = 0$ gives a repeated root $x = 2$, so the curve touches the $x$-axis at $(2, 0)$."
    }
  },
  {
    "id": "gcse.algebra.quadratic-graphs.q042",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Quadratic graphs",
    "subtopicId": "gcse.algebra.quadratic-graphs",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "coordinate",
    "tags": ["quadratic graphs", "completed square form", "turning point"],
    "questionText": "The curve $y = (x - 1)^2 + 2$ is given. Write down its turning point.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall the completed-square form.", "workingLatex": "y = (x - p)^2 + q \\Rightarrow (p, q)", "explanation": "The turning point is read directly as $(p, q)$.", "diagram": null },
        { "stepNumber": 2, "description": "Match the values.", "workingLatex": "p = 1,\\ q = 2", "explanation": "Comparing with $(x - 1)^2 + 2$.", "diagram": null },
        { "stepNumber": 3, "description": "State the turning point.", "workingLatex": "(1, 2)", "explanation": "The positive square means it is a minimum at $(1, 2)$.", "diagram": null }
      ],
      "finalAnswer": "$(1, 2)$"
    }
  },
  {
    "id": "gcse.algebra.quadratic-graphs.q043",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Quadratic graphs",
    "subtopicId": "gcse.algebra.quadratic-graphs",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "value",
    "tags": ["quadratic graphs", "number of roots", "repeated root"],
    "questionText": "How many solutions does the equation $x^2 + 2x + 1 = 0$ have? Explain briefly.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Factorise.", "workingLatex": "x^2 + 2x + 1 = (x + 1)^2", "explanation": "This is a perfect square.", "diagram": null },
        { "stepNumber": 2, "description": "Set equal to zero.", "workingLatex": "(x + 1)^2 = 0", "explanation": "We solve where the expression is zero.", "diagram": null },
        { "stepNumber": 3, "description": "Solve.", "workingLatex": "x = -1", "explanation": "There is only one value, a repeated root.", "diagram": null },
        { "stepNumber": 4, "description": "Interpret graphically.", "workingLatex": "\\text{touches } x\\text{-axis once}", "explanation": "The graph just touches the $x$-axis at $x = -1$, so there is one (repeated) solution.", "diagram": null }
      ],
      "finalAnswer": "One (repeated) solution, $x = -1$."
    }
  },
  {
    "id": "gcse.algebra.quadratic-graphs.q044",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Quadratic graphs",
    "subtopicId": "gcse.algebra.quadratic-graphs",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "value",
    "tags": ["quadratic graphs", "solving graphically", "roots"],
    "questionText": "Solve $x^2 - 4x = 0$ by factorising, giving the $x$-coordinates where the graph meets the $x$-axis.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Factorise.", "workingLatex": "x(x - 4) = 0", "explanation": "Both terms share a factor of $x$.", "diagram": null },
        { "stepNumber": 2, "description": "Apply the zero-product rule.", "workingLatex": "x = 0 \\text{ or } x - 4 = 0", "explanation": "A product is zero when a factor is zero.", "diagram": null },
        { "stepNumber": 3, "description": "Solve.", "workingLatex": "x = 0 \\text{ or } x = 4", "explanation": "These are the two roots.", "diagram": null },
        { "stepNumber": 4, "description": "State the crossings.", "workingLatex": "(0, 0),\\ (4, 0)", "explanation": "So the curve passes through the origin and $(4, 0)$; one root at $x=0$ means it goes through the origin.", "diagram": null }
      ],
      "finalAnswer": "$x = 0$ and $x = 4$"
    }
  },
  {
    "id": "gcse.algebra.quadratic-graphs.q045",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Quadratic graphs",
    "subtopicId": "gcse.algebra.quadratic-graphs",
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "expression",
    "tags": ["quadratic graphs", "finding the equation", "roots", "coefficient a"],
    "questionText": "A quadratic curve crosses the $x$-axis at $x = -2$ and $x = 2$, and passes through $(0, -8)$. Find its equation.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Write factorised form.", "workingLatex": "y = a(x + 2)(x - 2)", "explanation": "Roots at $\\pm 2$ give these factors, with an unknown scale $a$.", "diagram": null },
        { "stepNumber": 2, "description": "Use the point $(0, -8)$.", "workingLatex": "-8 = a(2)(-2)", "explanation": "Substituting $x = 0$.", "diagram": null },
        { "stepNumber": 3, "description": "Simplify.", "workingLatex": "-8 = -4a", "explanation": "Multiplying the brackets at $x = 0$.", "diagram": null },
        { "stepNumber": 4, "description": "Solve for $a$.", "workingLatex": "a = 2", "explanation": "Dividing both sides by $-4$.", "diagram": null },
        { "stepNumber": 5, "description": "Expand.", "workingLatex": "y = 2(x^2 - 4) = 2x^2 - 8", "explanation": "The difference of two squares gives $x^2 - 4$, then multiply by $2$.", "diagram": null }
      ],
      "finalAnswer": "$y = 2x^2 - 8$"
    }
  },
  {
    "id": "gcse.algebra.quadratic-graphs.q046",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Quadratic graphs",
    "subtopicId": "gcse.algebra.quadratic-graphs",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "value",
    "tags": ["quadratic graphs", "minimum value", "completing the square"],
    "questionText": "Find the minimum value of $y = x^2 - 6x + 5$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Complete the square.", "workingLatex": "(x - 3)^2 - 9 + 5", "explanation": "Halving $-6$ gives $-3$; expanding adds $+9$, so subtract $9$.", "diagram": null },
        { "stepNumber": 2, "description": "Simplify.", "workingLatex": "y = (x - 3)^2 - 4", "explanation": "Combining $-9 + 5$ gives $-4$.", "diagram": null },
        { "stepNumber": 3, "description": "Find the smallest value.", "workingLatex": "(x - 3)^2 \\geq 0", "explanation": "The squared term is smallest ($0$) at $x = 3$.", "diagram": null },
        { "stepNumber": 4, "description": "State the minimum.", "workingLatex": "y_{\\min} = -4", "explanation": "So the least value of $y$ is $-4$.", "diagram": null }
      ],
      "finalAnswer": "Minimum value $-4$"
    }
  },
  {
    "id": "gcse.algebra.quadratic-graphs.q047",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Quadratic graphs",
    "subtopicId": "gcse.algebra.quadratic-graphs",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "text",
    "tags": ["quadratic graphs", "shape", "direction"],
    "questionText": "Does the graph of $y = 5 - x^2$ open upwards or downwards? Explain.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Identify the $x^2$ term.", "workingLatex": "y = -x^2 + 5", "explanation": "Reordering shows the coefficient of $x^2$ is $-1$.", "diagram": null },
        { "stepNumber": 2, "description": "Recall the rule.", "workingLatex": "a < 0 \\Rightarrow \\text{opens down}", "explanation": "A negative coefficient of $x^2$ makes the parabola open downward.", "diagram": null },
        { "stepNumber": 3, "description": "State the answer.", "workingLatex": "\\text{downwards}", "explanation": "So the graph opens downwards, with a maximum point.", "diagram": null }
      ],
      "finalAnswer": "Downwards — the coefficient of $x^2$ is negative."
    }
  },
  {
    "id": "gcse.algebra.quadratic-graphs.q048",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Quadratic graphs",
    "subtopicId": "gcse.algebra.quadratic-graphs",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "value",
    "tags": ["quadratic graphs", "reading a graph", "roots", "solving graphically"],
    "questionText": "The graph of $y = x^2 + x - 2$ is drawn. Use it to solve $x^2 + x - 2 = 0$.",
    "questionDiagram": {
      "kind": "functionGraph",
      "xMin": -4, "xMax": 3, "yMin": -3, "yMax": 6,
      "curves": [{ "fn": { "base": "parab", "c": -0.5, "d": -2.25 }, "color": "accent", "label": "y=x^2+x-2" }],
      "points": [
        { "x": -2, "y": 0, "label": "(-2,0)", "color": "ink" },
        { "x": 1, "y": 0, "label": "(1,0)", "color": "ink" }
      ],
      "alt": "A parabola crossing the x-axis at -2 and 1."
    },
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Interpret graphically.", "workingLatex": "x^2 + x - 2 = 0 \\Leftrightarrow y = 0", "explanation": "The solutions are the $x$-axis crossings.", "diagram": null },
        { "stepNumber": 2, "description": "Read the crossings.", "workingLatex": "x = -2,\\ x = 1", "explanation": "The curve meets the $x$-axis at these points.", "diagram": null },
        { "stepNumber": 3, "description": "Check by factorising.", "workingLatex": "(x + 2)(x - 1) = 0", "explanation": "The factors confirm the roots $-2$ and $1$.", "diagram": null }
      ],
      "finalAnswer": "$x = -2$ and $x = 1$"
    }
  },
  {
    "id": "gcse.algebra.quadratic-graphs.q049",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Quadratic graphs",
    "subtopicId": "gcse.algebra.quadratic-graphs",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "expression",
    "tags": ["quadratic graphs", "line of symmetry", "two points"],
    "questionText": "A parabola passes through $(2, 7)$ and $(8, 7)$. Find the equation of its line of symmetry.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Notice the equal $y$-values.", "workingLatex": "y = 7 \\text{ at both points}", "explanation": "Two points at the same height are mirror images across the axis of symmetry.", "diagram": null },
        { "stepNumber": 2, "description": "Average the $x$-values.", "workingLatex": "x = \\dfrac{2 + 8}{2}", "explanation": "The axis lies halfway between the two $x$-coordinates.", "diagram": null },
        { "stepNumber": 3, "description": "Simplify.", "workingLatex": "x = 5", "explanation": "Halfway between $2$ and $8$ is $5$.", "diagram": null },
        { "stepNumber": 4, "description": "State the line.", "workingLatex": "x = 5", "explanation": "So the line of symmetry is $x = 5$.", "diagram": null }
      ],
      "finalAnswer": "$x = 5$"
    }
  },
  {
    "id": "gcse.algebra.quadratic-graphs.q050",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Quadratic graphs",
    "subtopicId": "gcse.algebra.quadratic-graphs",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "value",
    "tags": ["quadratic graphs", "real context", "profit", "maximum", "roots"],
    "questionText": "A company's daily profit is $P = -x^2 + 10x - 16$ (in £1000s), where $x$ is the number of units made (in thousands). Find the values of $x$ that give zero profit (break-even) and the number of units that maximises profit.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Set $P = 0$ for break-even.", "workingLatex": "-x^2 + 10x - 16 = 0", "explanation": "Break-even is where profit is zero.", "diagram": null },
        { "stepNumber": 2, "description": "Multiply by $-1$ and factorise.", "workingLatex": "x^2 - 10x + 16 = (x - 2)(x - 8)", "explanation": "Two numbers multiplying to $16$ and adding to $-10$ are $-2$ and $-8$.", "diagram": null },
        { "stepNumber": 3, "description": "Solve for break-even.", "workingLatex": "x = 2 \\text{ or } x = 8", "explanation": "So the company breaks even at $2$ and $8$ (thousand units).", "diagram": null },
        { "stepNumber": 4, "description": "Find the maximising value.", "workingLatex": "x = \\dfrac{2 + 8}{2} = 5", "explanation": "The maximum lies on the axis of symmetry, halfway between the break-even points.", "diagram": null },
        { "stepNumber": 5, "description": "Confirm it is a maximum.", "workingLatex": "a = -1 < 0", "explanation": "The negative $x^2$ coefficient means the turning point is a maximum.", "diagram": null },
        { "stepNumber": 6, "description": "State the answers.", "workingLatex": "\\text{break-even } 2, 8;\\ \\max \\text{ at } 5", "explanation": "So profit is zero at $2$ and $8$ thousand units, and is maximised at $5$ thousand units.", "diagram": null }
      ],
      "finalAnswer": "Break-even at $x = 2$ and $x = 8$ (thousand); profit is maximised at $x = 5$ (thousand units)."
    }
  },
  {
    "id": "gcse.algebra.quadratic-graphs.q051",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Quadratic graphs",
    "subtopicId": "gcse.algebra.quadratic-graphs",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "value",
    "tags": ["quadratic graphs", "roots", "factorising"],
    "questionText": "Find where the graph of $y = x^2 - 7x + 10$ crosses the $x$-axis.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Set $y = 0$.", "workingLatex": "x^2 - 7x + 10 = 0", "explanation": "The crossings occur where $y = 0$.", "diagram": null },
        { "stepNumber": 2, "description": "Factorise.", "workingLatex": "(x - 2)(x - 5) = 0", "explanation": "Two numbers multiplying to $10$ and adding to $-7$ are $-2$ and $-5$.", "diagram": null },
        { "stepNumber": 3, "description": "Solve.", "workingLatex": "x = 2 \\text{ or } x = 5", "explanation": "Setting each bracket to zero.", "diagram": null },
        { "stepNumber": 4, "description": "State the crossings.", "workingLatex": "(2, 0),\\ (5, 0)", "explanation": "So the curve crosses the $x$-axis at these two points.", "diagram": null }
      ],
      "finalAnswer": "$x = 2$ and $x = 5$"
    }
  },
  {
    "id": "gcse.algebra.quadratic-graphs.q052",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Quadratic graphs",
    "subtopicId": "gcse.algebra.quadratic-graphs",
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "coordinate",
    "tags": ["quadratic graphs", "completing the square", "coefficient a", "turning point"],
    "questionText": "Find the coordinates of the turning point of $y = 2x^2 - 4x + 5$ by completing the square.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Factor $2$ from the $x$-terms.", "workingLatex": "y = 2(x^2 - 2x) + 5", "explanation": "We only factor the terms containing $x$, leaving the constant outside.", "diagram": null },
        { "stepNumber": 2, "description": "Complete the square inside.", "workingLatex": "x^2 - 2x = (x - 1)^2 - 1", "explanation": "Halving $-2$ gives $-1$; expanding adds $+1$, so subtract $1$.", "diagram": null },
        { "stepNumber": 3, "description": "Substitute back.", "workingLatex": "y = 2\\left[(x - 1)^2 - 1\\right] + 5", "explanation": "Replacing the bracket with its completed-square form.", "diagram": null },
        { "stepNumber": 4, "description": "Expand and simplify.", "workingLatex": "y = 2(x - 1)^2 - 2 + 5 = 2(x - 1)^2 + 3", "explanation": "Distributing the $2$ then combining constants.", "diagram": null },
        { "stepNumber": 5, "description": "Read the turning point.", "workingLatex": "(1, 3)", "explanation": "The bracket is zero at $x = 1$, giving $y = 3$; the positive coefficient means a minimum.", "diagram": null }
      ],
      "finalAnswer": "Minimum at $(1, 3)$"
    }
  },
  {
    "id": "gcse.algebra.quadratic-graphs.q053",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Quadratic graphs",
    "subtopicId": "gcse.algebra.quadratic-graphs",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "value",
    "tags": ["quadratic graphs", "y-intercept", "through the origin"],
    "questionText": "Find the $y$-intercept of $y = x^2 - 3x$ and state what it tells you about the graph.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Set $x = 0$.", "workingLatex": "y = 0^2 - 3(0) = 0", "explanation": "Substituting $x = 0$ into the equation.", "diagram": null },
        { "stepNumber": 2, "description": "State the intercept.", "workingLatex": "(0, 0)", "explanation": "The $y$-intercept is $0$.", "diagram": null },
        { "stepNumber": 3, "description": "Interpret.", "workingLatex": "\\text{passes through the origin}", "explanation": "A $y$-intercept of $0$ means the curve goes through the origin.", "diagram": null }
      ],
      "finalAnswer": "$y$-intercept $0$ — the curve passes through the origin."
    }
  },
  {
    "id": "gcse.algebra.quadratic-graphs.q054",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Quadratic graphs",
    "subtopicId": "gcse.algebra.quadratic-graphs",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "value",
    "tags": ["quadratic graphs", "roots", "factorising"],
    "questionText": "Find the $x$-intercepts of the graph of $y = x^2 - 2x - 8$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Set $y = 0$.", "workingLatex": "x^2 - 2x - 8 = 0", "explanation": "The intercepts occur where $y = 0$.", "diagram": null },
        { "stepNumber": 2, "description": "Factorise.", "workingLatex": "(x - 4)(x + 2) = 0", "explanation": "Two numbers multiplying to $-8$ and adding to $-2$ are $-4$ and $+2$.", "diagram": null },
        { "stepNumber": 3, "description": "Solve.", "workingLatex": "x = 4 \\text{ or } x = -2", "explanation": "Setting each bracket to zero.", "diagram": null },
        { "stepNumber": 4, "description": "State the intercepts.", "workingLatex": "(4, 0),\\ (-2, 0)", "explanation": "So the curve crosses the $x$-axis at these points.", "diagram": null }
      ],
      "finalAnswer": "$x = -2$ and $x = 4$"
    }
  },
  {
    "id": "gcse.algebra.quadratic-graphs.q055",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Quadratic graphs",
    "subtopicId": "gcse.algebra.quadratic-graphs",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "coordinate",
    "tags": ["quadratic graphs", "completing the square", "turning point"],
    "questionText": "Find the turning point of $y = x^2 - 10x + 21$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Halve the coefficient of $x$.", "workingLatex": "-10 \\div 2 = -5", "explanation": "This goes inside the bracket.", "diagram": null },
        { "stepNumber": 2, "description": "Write the square and correct.", "workingLatex": "(x - 5)^2 - 25 + 21", "explanation": "Expanding $(x-5)^2$ adds $+25$, so subtract $25$.", "diagram": null },
        { "stepNumber": 3, "description": "Simplify.", "workingLatex": "y = (x - 5)^2 - 4", "explanation": "Combining $-25 + 21$ gives $-4$.", "diagram": null },
        { "stepNumber": 4, "description": "Read the turning point.", "workingLatex": "(5, -4)", "explanation": "The bracket is zero at $x = 5$, giving $y = -4$.", "diagram": null },
        { "stepNumber": 5, "description": "State the type.", "workingLatex": "\\text{minimum}", "explanation": "The positive squared term means a minimum.", "diagram": null }
      ],
      "finalAnswer": "Minimum at $(5, -4)$"
    }
  },
  {
    "id": "gcse.algebra.quadratic-graphs.q056",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Quadratic graphs",
    "subtopicId": "gcse.algebra.quadratic-graphs",
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "text",
    "tags": ["quadratic graphs", "sketching", "roots", "turning point", "y-intercept"],
    "questionText": "Find the $x$-intercepts, $y$-intercept and turning point of $y = x^2 + 4x + 3$.",
    "questionDiagram": {
      "kind": "functionGraph",
      "xMin": -5, "xMax": 2, "yMin": -3, "yMax": 6,
      "curves": [{ "fn": { "base": "parab", "c": -2, "d": -1 }, "color": "accent", "label": "y=x^2+4x+3" }],
      "points": [
        { "x": -3, "y": 0, "label": "(-3,0)", "color": "ink" },
        { "x": -1, "y": 0, "label": "(-1,0)", "color": "ink" },
        { "x": 0, "y": 3, "label": "(0,3)", "color": "soft" },
        { "x": -2, "y": -1, "label": "min (-2,-1)", "color": "ink" }
      ],
      "alt": "A parabola crossing the x-axis at -3 and -1, y-axis at 3, minimum at (-2,-1)."
    },
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Find the $y$-intercept.", "workingLatex": "x = 0 \\Rightarrow y = 3", "explanation": "The constant term gives the crossing at $(0, 3)$.", "diagram": null },
        { "stepNumber": 2, "description": "Factorise for the roots.", "workingLatex": "x^2 + 4x + 3 = (x + 3)(x + 1)", "explanation": "Two numbers multiplying to $3$ and adding to $4$ are $3$ and $1$.", "diagram": null },
        { "stepNumber": 3, "description": "Solve for the roots.", "workingLatex": "x = -3 \\text{ or } x = -1", "explanation": "Setting each bracket to zero.", "diagram": null },
        { "stepNumber": 4, "description": "Find the line of symmetry.", "workingLatex": "x = \\dfrac{-3 + (-1)}{2} = -2", "explanation": "The axis lies midway between the roots.", "diagram": null },
        { "stepNumber": 5, "description": "Find the minimum height.", "workingLatex": "y = (-2)^2 + 4(-2) + 3 = -1", "explanation": "Substituting $x = -2$ gives the minimum value.", "diagram": null },
        { "stepNumber": 6, "description": "State the features.", "workingLatex": "(-3,0),(-1,0),(0,3),\\ \\min(-2,-1)", "explanation": "These points are enough to sketch the upward parabola.", "diagram": null }
      ],
      "finalAnswer": "$x$-intercepts $-3$ and $-1$; $y$-intercept $3$; minimum turning point $(-2, -1)$."
    }
  },
  {
    "id": "gcse.algebra.quadratic-graphs.q057",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Quadratic graphs",
    "subtopicId": "gcse.algebra.quadratic-graphs",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "value",
    "tags": ["quadratic graphs", "reading a graph", "number of roots"],
    "questionText": "A quadratic graph is shown crossing the $x$-axis at two points. How many real solutions does the equation $y = 0$ have for this curve?",
    "questionDiagram": {
      "kind": "functionGraph",
      "xMin": -4, "xMax": 4, "yMin": -5, "yMax": 6,
      "curves": [{ "fn": { "base": "parab", "d": -4 }, "color": "accent" }],
      "points": [
        { "x": -2, "y": 0, "label": "(-2,0)", "color": "ink" },
        { "x": 2, "y": 0, "label": "(2,0)", "color": "ink" }
      ],
      "alt": "A parabola crossing the x-axis at two points, -2 and 2."
    },
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall the meaning of $y = 0$.", "workingLatex": "y = 0 \\Leftrightarrow x\\text{-axis crossings}", "explanation": "The solutions of $y = 0$ are the $x$-values where the curve meets the $x$-axis.", "diagram": null },
        { "stepNumber": 2, "description": "Count the crossings.", "workingLatex": "2 \\text{ crossings}", "explanation": "The curve cuts the $x$-axis at two distinct points.", "diagram": null },
        { "stepNumber": 3, "description": "State the number of solutions.", "workingLatex": "2", "explanation": "Two crossings mean two real solutions.", "diagram": null }
      ],
      "finalAnswer": "Two solutions."
    }
  },
  {
    "id": "gcse.algebra.quadratic-graphs.q058",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Quadratic graphs",
    "subtopicId": "gcse.algebra.quadratic-graphs",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "value",
    "tags": ["quadratic graphs", "roots", "factorising"],
    "questionText": "Solve $x^2 - x - 6 = 0$ and interpret the answers as points on the graph of $y = x^2 - x - 6$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Factorise.", "workingLatex": "(x - 3)(x + 2) = 0", "explanation": "Two numbers multiplying to $-6$ and adding to $-1$ are $-3$ and $+2$.", "diagram": null },
        { "stepNumber": 2, "description": "Solve.", "workingLatex": "x = 3 \\text{ or } x = -2", "explanation": "Setting each bracket to zero.", "diagram": null },
        { "stepNumber": 3, "description": "Interpret as points.", "workingLatex": "(3, 0),\\ (-2, 0)", "explanation": "The solutions are the $x$-coordinates where the graph crosses the $x$-axis.", "diagram": null }
      ],
      "finalAnswer": "$x = -2$ and $x = 3$, i.e. the graph crosses the $x$-axis at $(-2, 0)$ and $(3, 0)$."
    }
  },
  {
    "id": "gcse.algebra.quadratic-graphs.q059",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Quadratic graphs",
    "subtopicId": "gcse.algebra.quadratic-graphs",
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "expression",
    "tags": ["quadratic graphs", "finding the equation", "turning point", "completed square form"],
    "questionText": "A parabola has minimum turning point $(-1, -4)$ and passes through $(1, 0)$. Find its equation in the form $y = x^2 + bx + c$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Write completed-square form.", "workingLatex": "y = a(x + 1)^2 - 4", "explanation": "A turning point $(-1, -4)$ gives this form, with unknown $a$.", "diagram": null },
        { "stepNumber": 2, "description": "Use the point $(1, 0)$.", "workingLatex": "0 = a(1 + 1)^2 - 4", "explanation": "Substituting the point to find $a$.", "diagram": null },
        { "stepNumber": 3, "description": "Simplify.", "workingLatex": "0 = 4a - 4", "explanation": "Since $(2)^2 = 4$.", "diagram": null },
        { "stepNumber": 4, "description": "Solve for $a$.", "workingLatex": "a = 1", "explanation": "Adding $4$ then dividing by $4$.", "diagram": null },
        { "stepNumber": 5, "description": "Expand.", "workingLatex": "y = (x + 1)^2 - 4 = x^2 + 2x + 1 - 4", "explanation": "Expanding the square with $a = 1$.", "diagram": null },
        { "stepNumber": 6, "description": "Simplify.", "workingLatex": "y = x^2 + 2x - 3", "explanation": "Combining the constants gives the required form.", "diagram": null }
      ],
      "finalAnswer": "$y = x^2 + 2x - 3$"
    }
  },
  {
    "id": "gcse.algebra.quadratic-graphs.q060",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Quadratic graphs",
    "subtopicId": "gcse.algebra.quadratic-graphs",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "value",
    "tags": ["quadratic graphs", "completed square form", "maximum value"],
    "questionText": "Write down the maximum value of $y = -(x - 2)^2 + 9$ and the value of $x$ where it occurs.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Bound the squared term.", "workingLatex": "(x - 2)^2 \\geq 0", "explanation": "A square is never negative, so $-(x-2)^2$ is never positive.", "diagram": null },
        { "stepNumber": 2, "description": "Find where it is largest.", "workingLatex": "x = 2 \\Rightarrow (x - 2)^2 = 0", "explanation": "The subtracted square is smallest (zero) at $x = 2$, making $y$ largest.", "diagram": null },
        { "stepNumber": 3, "description": "Find the maximum value.", "workingLatex": "y = -0 + 9 = 9", "explanation": "At $x = 2$ the squared term vanishes, leaving $9$.", "diagram": null },
        { "stepNumber": 4, "description": "State the answer.", "workingLatex": "y_{\\max} = 9 \\text{ at } x = 2", "explanation": "So the maximum value is $9$, at $x = 2$.", "diagram": null }
      ],
      "finalAnswer": "Maximum value $9$, at $x = 2$"
    }
  },
  {
    "id": "gcse.algebra.quadratic-graphs.q061",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Quadratic graphs",
    "subtopicId": "gcse.algebra.quadratic-graphs",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "expression",
    "tags": ["quadratic graphs", "line of symmetry", "completing the square"],
    "questionText": "Find the equation of the line of symmetry of $y = x^2 - 8x + 12$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Factorise to find the roots.", "workingLatex": "(x - 2)(x - 6) = 0", "explanation": "Two numbers multiplying to $12$ and adding to $-8$ are $-2$ and $-6$.", "diagram": null },
        { "stepNumber": 2, "description": "State the roots.", "workingLatex": "x = 2,\\ x = 6", "explanation": "These are the $x$-intercepts.", "diagram": null },
        { "stepNumber": 3, "description": "Average the roots.", "workingLatex": "x = \\dfrac{2 + 6}{2} = 4", "explanation": "The axis of symmetry lies halfway between the roots.", "diagram": null },
        { "stepNumber": 4, "description": "State the line.", "workingLatex": "x = 4", "explanation": "So the line of symmetry is $x = 4$.", "diagram": null }
      ],
      "finalAnswer": "$x = 4$"
    }
  },
  {
    "id": "gcse.algebra.quadratic-graphs.q062",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Quadratic graphs",
    "subtopicId": "gcse.algebra.quadratic-graphs",
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "coordinate",
    "tags": ["quadratic graphs", "intersection with a line", "simultaneous"],
    "questionText": "Find the coordinates of the points where the curve $y = x^2$ meets the line $y = x + 6$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Set the curve equal to the line.", "workingLatex": "x^2 = x + 6", "explanation": "At the meeting points the $y$-values are equal.", "diagram": null },
        { "stepNumber": 2, "description": "Rearrange to zero.", "workingLatex": "x^2 - x - 6 = 0", "explanation": "Moving everything to one side.", "diagram": null },
        { "stepNumber": 3, "description": "Factorise.", "workingLatex": "(x - 3)(x + 2) = 0", "explanation": "Two numbers multiplying to $-6$ and adding to $-1$ are $-3$ and $+2$.", "diagram": null },
        { "stepNumber": 4, "description": "Solve for $x$.", "workingLatex": "x = 3 \\text{ or } x = -2", "explanation": "The two $x$-coordinates of the meeting points.", "diagram": null },
        { "stepNumber": 5, "description": "Find the $y$-values.", "workingLatex": "3^2 = 9,\\ (-2)^2 = 4", "explanation": "Substituting each $x$ into $y = x^2$.", "diagram": null },
        { "stepNumber": 6, "description": "State the points.", "workingLatex": "(3, 9),\\ (-2, 4)", "explanation": "So the curve and line meet at these two points.", "diagram": null }
      ],
      "finalAnswer": "$(-2, 4)$ and $(3, 9)$"
    }
  },
  {
    "id": "gcse.algebra.quadratic-graphs.q063",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Quadratic graphs",
    "subtopicId": "gcse.algebra.quadratic-graphs",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "value",
    "tags": ["quadratic graphs", "roots"],
    "questionText": "Does the graph of $y = x^2 - 1$ cross the $x$-axis? If so, where?",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Set $y = 0$.", "workingLatex": "x^2 - 1 = 0", "explanation": "Crossings occur where $y = 0$.", "diagram": null },
        { "stepNumber": 2, "description": "Rearrange.", "workingLatex": "x^2 = 1", "explanation": "Adding $1$ to both sides.", "diagram": null },
        { "stepNumber": 3, "description": "Take the square root.", "workingLatex": "x = \\pm 1", "explanation": "Both $1$ and $-1$ square to $1$.", "diagram": null },
        { "stepNumber": 4, "description": "State the answer.", "workingLatex": "(-1, 0),\\ (1, 0)", "explanation": "Yes, the curve crosses at $x = -1$ and $x = 1$.", "diagram": null }
      ],
      "finalAnswer": "Yes — at $x = -1$ and $x = 1$."
    }
  },
  {
    "id": "gcse.algebra.quadratic-graphs.q064",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Quadratic graphs",
    "subtopicId": "gcse.algebra.quadratic-graphs",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "value",
    "tags": ["quadratic graphs", "table of values", "substitution"],
    "questionText": "Find the value of $y$ on the curve $y = x^2 + 3x - 1$ when $x = -2$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Substitute $x = -2$.", "workingLatex": "y = (-2)^2 + 3(-2) - 1", "explanation": "Replacing $x$ with $-2$; take care with the square of a negative.", "diagram": null },
        { "stepNumber": 2, "description": "Evaluate the square.", "workingLatex": "(-2)^2 = 4", "explanation": "Squaring $-2$ gives a positive $4$.", "diagram": null },
        { "stepNumber": 3, "description": "Evaluate the linear term.", "workingLatex": "3 \\times (-2) = -6", "explanation": "Multiplying gives $-6$.", "diagram": null },
        { "stepNumber": 4, "description": "Combine.", "workingLatex": "y = 4 - 6 - 1 = -3", "explanation": "Adding the terms with the constant.", "diagram": null },
        { "stepNumber": 5, "description": "State the answer.", "workingLatex": "y = -3", "explanation": "So the point $(-2, -3)$ is on the curve.", "diagram": null }
      ],
      "finalAnswer": "$y = -3$"
    }
  },
  {
    "id": "gcse.algebra.quadratic-graphs.q065",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Quadratic graphs",
    "subtopicId": "gcse.algebra.quadratic-graphs",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "coordinate",
    "tags": ["quadratic graphs", "completed square form", "turning point"],
    "questionText": "The curve $y = (x + 3)^2 - 5$ is given. Write down its turning point and its $y$-intercept.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Read the turning point.", "workingLatex": "(x + 3)^2 - 5 \\Rightarrow (-3, -5)", "explanation": "In completed-square form the turning point is where the bracket is zero, at $x = -3$, giving $y = -5$.", "diagram": null },
        { "stepNumber": 2, "description": "Find the $y$-intercept.", "workingLatex": "x = 0 \\Rightarrow (0 + 3)^2 - 5", "explanation": "Substituting $x = 0$.", "diagram": null },
        { "stepNumber": 3, "description": "Evaluate.", "workingLatex": "9 - 5 = 4", "explanation": "So the curve crosses the $y$-axis at $y = 4$.", "diagram": null },
        { "stepNumber": 4, "description": "State both.", "workingLatex": "\\min(-3, -5),\\ (0, 4)", "explanation": "The minimum is $(-3, -5)$ and the $y$-intercept is $(0, 4)$.", "diagram": null }
      ],
      "finalAnswer": "Turning point $(-3, -5)$; $y$-intercept $(0, 4)$"
    }
  },
  {
    "id": "gcse.algebra.quadratic-graphs.q066",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Quadratic graphs",
    "subtopicId": "gcse.algebra.quadratic-graphs",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "value",
    "tags": ["quadratic graphs", "real context", "maximum", "roots"],
    "questionText": "A stone is thrown and its height is $h = 15 + 2t - t^2$ metres after $t$ seconds. Find its initial height, the time it hits the ground, and its maximum height.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Find the initial height.", "workingLatex": "t = 0 \\Rightarrow h = 15", "explanation": "The initial height is the value when $t = 0$, i.e. the constant term.", "diagram": null },
        { "stepNumber": 2, "description": "Set $h = 0$ for landing.", "workingLatex": "15 + 2t - t^2 = 0", "explanation": "The stone hits the ground when the height is zero.", "diagram": null },
        { "stepNumber": 3, "description": "Rearrange and factorise.", "workingLatex": "t^2 - 2t - 15 = (t - 5)(t + 3) = 0", "explanation": "Multiplying by $-1$, then finding numbers multiplying to $-15$ and adding to $-2$: $-5$ and $+3$.", "diagram": null },
        { "stepNumber": 4, "description": "Choose the valid time.", "workingLatex": "t = 5 \\ (t = -3 \\text{ rejected})", "explanation": "Time cannot be negative, so it lands at $t = 5$ seconds.", "diagram": null },
        { "stepNumber": 5, "description": "Find the maximising time.", "workingLatex": "t = \\dfrac{-3 + 5}{2} = 1", "explanation": "The maximum is on the axis of symmetry, halfway between the roots.", "diagram": null },
        { "stepNumber": 6, "description": "Find the maximum height.", "workingLatex": "h = 15 + 2(1) - 1^2 = 16", "explanation": "Substituting $t = 1$ gives the greatest height.", "diagram": null }
      ],
      "finalAnswer": "Initial height $15$ m; lands at $t = 5$ s; maximum height $16$ m (at $t = 1$ s)."
    }
  },
  {
    "id": "gcse.algebra.quadratic-graphs.q067",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Quadratic graphs",
    "subtopicId": "gcse.algebra.quadratic-graphs",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "text",
    "tags": ["quadratic graphs", "matching", "roots", "y-intercept"],
    "questionText": "A parabola opens upward, crosses the $x$-axis at $x = 1$ and $x = 5$, and has $y$-intercept $5$. Which equation matches it: (A) $y = x^2 - 6x + 5$, (B) $y = x^2 + 6x + 5$, (C) $y = -x^2 + 6x - 5$?",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Use the opening direction.", "workingLatex": "\\text{opens up} \\Rightarrow a > 0", "explanation": "An upward parabola needs a positive $x^2$ term, ruling out option C.", "diagram": null },
        { "stepNumber": 2, "description": "Use the $y$-intercept.", "workingLatex": "c = 5", "explanation": "Both A and B have constant $5$, matching the $y$-intercept, so this does not yet decide it.", "diagram": null },
        { "stepNumber": 3, "description": "Test the roots of A.", "workingLatex": "x^2 - 6x + 5 = (x - 1)(x - 5)", "explanation": "This factorises with roots $1$ and $5$, exactly as required.", "diagram": null },
        { "stepNumber": 4, "description": "Check B for contrast.", "workingLatex": "x^2 + 6x + 5 = (x + 1)(x + 5)", "explanation": "Option B has roots $-1$ and $-5$, which do not match.", "diagram": null },
        { "stepNumber": 5, "description": "State the answer.", "workingLatex": "\\text{A}", "explanation": "Only option A opens upward with roots $1$ and $5$ and $y$-intercept $5$.", "diagram": null }
      ],
      "finalAnswer": "Option A: $y = x^2 - 6x + 5$."
    }
  },
  {
    "id": "gcse.algebra.quadratic-graphs.q068",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Quadratic graphs",
    "subtopicId": "gcse.algebra.quadratic-graphs",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "value",
    "tags": ["quadratic graphs", "solving graphically", "intersection with a line"],
    "questionText": "The graph of $y = x^2 - 3$ is drawn. By considering the line $y = 1$, solve $x^2 - 3 = 1$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Interpret graphically.", "workingLatex": "\\text{intersection of curve and } y = 1", "explanation": "The solutions are where the curve reaches a height of $1$.", "diagram": null },
        { "stepNumber": 2, "description": "Form the equation.", "workingLatex": "x^2 - 3 = 1", "explanation": "Setting the curve equal to $1$.", "diagram": null },
        { "stepNumber": 3, "description": "Rearrange.", "workingLatex": "x^2 = 4", "explanation": "Adding $3$ to both sides.", "diagram": null },
        { "stepNumber": 4, "description": "Take the square root.", "workingLatex": "x = \\pm 2", "explanation": "Both $2$ and $-2$ square to $4$.", "diagram": null },
        { "stepNumber": 5, "description": "State the solutions.", "workingLatex": "x = -2,\\ 2", "explanation": "So the line $y = 1$ meets the curve at $x = -2$ and $x = 2$.", "diagram": null }
      ],
      "finalAnswer": "$x = -2$ and $x = 2$"
    }
  },
  {
    "id": "gcse.algebra.quadratic-graphs.q069",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Quadratic graphs",
    "subtopicId": "gcse.algebra.quadratic-graphs",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "coordinate",
    "tags": ["quadratic graphs", "completing the square", "turning point", "negative parabola"],
    "questionText": "Find the coordinates of the turning point of $y = -x^2 - 4x + 1$ and state whether it is a maximum or minimum.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Factor out $-1$.", "workingLatex": "y = -(x^2 + 4x) + 1", "explanation": "Taking out $-1$ from the $x$-terms only.", "diagram": null },
        { "stepNumber": 2, "description": "Complete the square inside.", "workingLatex": "x^2 + 4x = (x + 2)^2 - 4", "explanation": "Halving $4$ gives $2$; expanding adds $+4$, so subtract $4$.", "diagram": null },
        { "stepNumber": 3, "description": "Substitute back.", "workingLatex": "y = -\\left[(x + 2)^2 - 4\\right] + 1", "explanation": "Replacing the bracket.", "diagram": null },
        { "stepNumber": 4, "description": "Expand and simplify.", "workingLatex": "y = -(x + 2)^2 + 4 + 1 = -(x + 2)^2 + 5", "explanation": "Distributing $-1$ then combining constants.", "diagram": null },
        { "stepNumber": 5, "description": "Read the turning point.", "workingLatex": "(-2, 5) \\text{ maximum}", "explanation": "The bracket is zero at $x = -2$, giving $y = 5$; the negative square makes it a maximum.", "diagram": null }
      ],
      "finalAnswer": "Maximum at $(-2, 5)$"
    }
  },
  {
    "id": "gcse.algebra.quadratic-graphs.q070",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Quadratic graphs",
    "subtopicId": "gcse.algebra.quadratic-graphs",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "text",
    "tags": ["quadratic graphs", "sketching", "roots", "turning point", "completing the square", "multi-step"],
    "questionText": "For $y = x^2 - 4x - 5$, find the $y$-intercept, the roots, and the turning point (by completing the square), then state whether the minimum value of $y$ is positive or negative.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Find the $y$-intercept.", "workingLatex": "x = 0 \\Rightarrow y = -5", "explanation": "The constant term gives the crossing at $(0, -5)$.", "diagram": null },
        { "stepNumber": 2, "description": "Factorise for the roots.", "workingLatex": "x^2 - 4x - 5 = (x - 5)(x + 1)", "explanation": "Two numbers multiplying to $-5$ and adding to $-4$ are $-5$ and $+1$.", "diagram": null },
        { "stepNumber": 3, "description": "Solve for the roots.", "workingLatex": "x = 5 \\text{ or } x = -1", "explanation": "Setting each bracket to zero.", "diagram": null },
        { "stepNumber": 4, "description": "Complete the square.", "workingLatex": "(x - 2)^2 - 4 - 5 = (x - 2)^2 - 9", "explanation": "Halving $-4$ gives $-2$; expanding adds $+4$, so $-4 - 5 = -9$.", "diagram": null },
        { "stepNumber": 5, "description": "Read the turning point.", "workingLatex": "(2, -9)", "explanation": "The bracket is zero at $x = 2$, giving the minimum height $-9$.", "diagram": null },
        { "stepNumber": 6, "description": "Judge the sign of the minimum.", "workingLatex": "y_{\\min} = -9 < 0", "explanation": "The minimum value is $-9$, which is negative — consistent with the curve dipping below the $x$-axis between its roots.", "diagram": null },
        { "stepNumber": 7, "description": "Summarise.", "workingLatex": "(0,-5),\\ x=-1,5,\\ \\min(2,-9)", "explanation": "These features fully describe the upward parabola, whose minimum is negative.", "diagram": null }
      ],
      "finalAnswer": "$y$-intercept $-5$; roots $-1$ and $5$; minimum turning point $(2, -9)$; the minimum value $-9$ is negative."
    }
  }
];
