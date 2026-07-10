import { Question } from "@/lib/types";

export const questions: Question[] = [
  {
    "id": "gcse.algebra.cubic-reciprocal-graphs.q001",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Cubic and reciprocal graphs",
    "subtopicId": "gcse.algebra.cubic-reciprocal-graphs",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "text",
    "tags": ["cubic and reciprocal graphs", "cubic", "shape"],
    "questionText": "Describe the shape of the graph of $y = x^3$, including what happens for large positive and large negative $x$.",
    "questionDiagram": {
      "kind": "functionGraph",
      "xMin": -3, "xMax": 3, "yMin": -9, "yMax": 9,
      "curves": [{ "fn": { "base": "cubic" }, "color": "accent", "label": "y=x^3" }],
      "points": [{ "x": 0, "y": 0, "label": "(0,0)", "color": "ink" }],
      "alt": "A cubic curve rising from bottom-left to top-right, passing through the origin."
    },
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Check a positive input.", "workingLatex": "x = 2 \\Rightarrow y = 8", "explanation": "For positive $x$ the output is positive and grows quickly.", "diagram": null },
        { "stepNumber": 2, "description": "Check a negative input.", "workingLatex": "x = -2 \\Rightarrow y = -8", "explanation": "For negative $x$ the output is negative, since a negative cubed stays negative.", "diagram": null },
        { "stepNumber": 3, "description": "Describe the overall direction.", "workingLatex": "\\text{bottom-left} \\to \\text{top-right}", "explanation": "The curve rises steadily from the bottom-left to the top-right.", "diagram": null },
        { "stepNumber": 4, "description": "Name the key point.", "workingLatex": "(0, 0)", "explanation": "It passes through the origin, flattening briefly there before continuing to rise.", "diagram": null }
      ],
      "finalAnswer": "An increasing S-shaped cubic curve through the origin: $y \\to -\\infty$ for large negative $x$ and $y \\to +\\infty$ for large positive $x$."
    }
  },
  {
    "id": "gcse.algebra.cubic-reciprocal-graphs.q002",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Cubic and reciprocal graphs",
    "subtopicId": "gcse.algebra.cubic-reciprocal-graphs",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "value",
    "tags": ["cubic and reciprocal graphs", "cubic", "table of values"],
    "questionText": "Complete the table of values for $y = x^3$ at $x = -2, -1, 0, 1, 2$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Cube $x = -2$.", "workingLatex": "(-2)^3 = -8", "explanation": "A negative number cubed is negative: $-2 \\times -2 \\times -2 = -8$.", "diagram": null },
        { "stepNumber": 2, "description": "Cube $x = -1$.", "workingLatex": "(-1)^3 = -1", "explanation": "$-1$ cubed stays $-1$.", "diagram": null },
        { "stepNumber": 3, "description": "Cube $x = 0$.", "workingLatex": "0^3 = 0", "explanation": "Zero cubed is zero.", "diagram": null },
        { "stepNumber": 4, "description": "Cube $x = 1$.", "workingLatex": "1^3 = 1", "explanation": "One cubed is one.", "diagram": null },
        { "stepNumber": 5, "description": "Cube $x = 2$.", "workingLatex": "2^3 = 8", "explanation": "$2 \\times 2 \\times 2 = 8$.", "diagram": null },
        { "stepNumber": 6, "description": "State the values.", "workingLatex": "-8,\\ -1,\\ 0,\\ 1,\\ 8", "explanation": "Notice the values for $-x$ and $x$ are opposites, showing symmetry about the origin.", "diagram": null }
      ],
      "finalAnswer": "$y = -8, -1, 0, 1, 8$"
    }
  },
  {
    "id": "gcse.algebra.cubic-reciprocal-graphs.q003",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Cubic and reciprocal graphs",
    "subtopicId": "gcse.algebra.cubic-reciprocal-graphs",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "value",
    "tags": ["cubic and reciprocal graphs", "cubic", "roots", "factorised form"],
    "questionText": "Find the $x$-coordinates where the graph of $y = x(x - 2)(x + 3)$ crosses the $x$-axis.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Set $y = 0$.", "workingLatex": "x(x - 2)(x + 3) = 0", "explanation": "The curve crosses the $x$-axis where $y = 0$; the equation is already factorised.", "diagram": null },
        { "stepNumber": 2, "description": "Apply the zero-product rule.", "workingLatex": "x = 0,\\ x - 2 = 0,\\ x + 3 = 0", "explanation": "A product is zero only when one of its factors is zero — here there are three factors.", "diagram": null },
        { "stepNumber": 3, "description": "Solve each factor.", "workingLatex": "x = 0,\\ x = 2,\\ x = -3", "explanation": "Each factor gives one root.", "diagram": null },
        { "stepNumber": 4, "description": "State the crossings.", "workingLatex": "(-3,0),(0,0),(2,0)", "explanation": "A cubic can cross the $x$-axis up to three times, and here it does exactly that.", "diagram": null }
      ],
      "finalAnswer": "$x = -3,\\ 0,\\ 2$"
    }
  },
  {
    "id": "gcse.algebra.cubic-reciprocal-graphs.q004",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Cubic and reciprocal graphs",
    "subtopicId": "gcse.algebra.cubic-reciprocal-graphs",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "text",
    "tags": ["cubic and reciprocal graphs", "reciprocal", "shape", "asymptotes"],
    "questionText": "Describe the shape of the graph of $y = \\dfrac{1}{x}$, and explain why there is no point on the graph at $x = 0$.",
    "questionDiagram": {
      "kind": "functionGraph",
      "xMin": -5, "xMax": 5, "yMin": -5, "yMax": 5,
      "curves": [{ "fn": { "base": "recip" }, "color": "accent", "label": "y=1/x" }],
      "asymptotes": [{ "dir": "v", "at": 0 }, { "dir": "h", "at": 0 }],
      "alt": "A reciprocal graph with two branches, one in the top-right and one in the bottom-left, approaching the axes."
    },
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Try to substitute $x = 0$.", "workingLatex": "y = \\dfrac{1}{0}", "explanation": "Dividing by zero is undefined, so there is no $y$-value when $x = 0$.", "diagram": null },
        { "stepNumber": 2, "description": "Look at small positive $x$.", "workingLatex": "x = 0.1 \\Rightarrow y = 10", "explanation": "As $x$ gets close to $0$ from the right, $y$ becomes very large and positive.", "diagram": null },
        { "stepNumber": 3, "description": "Look at large $x$.", "workingLatex": "x = 100 \\Rightarrow y = 0.01", "explanation": "As $x$ grows, $y$ gets close to $0$ but never reaches it.", "diagram": null },
        { "stepNumber": 4, "description": "Describe the two branches.", "workingLatex": "\\text{two curves in opposite quadrants}", "explanation": "One branch sits in the top-right, the other in the bottom-left, each approaching the axes.", "diagram": null },
        { "stepNumber": 5, "description": "Name the asymptotes.", "workingLatex": "x = 0,\\ y = 0", "explanation": "The axes are asymptotes: the curve gets ever closer without touching them.", "diagram": null }
      ],
      "finalAnswer": "Two curved branches (top-right and bottom-left) approaching the axes $x = 0$ and $y = 0$; there is no point at $x = 0$ because $\\tfrac{1}{0}$ is undefined."
    }
  },
  {
    "id": "gcse.algebra.cubic-reciprocal-graphs.q005",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Cubic and reciprocal graphs",
    "subtopicId": "gcse.algebra.cubic-reciprocal-graphs",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "value",
    "tags": ["cubic and reciprocal graphs", "reciprocal", "reading values"],
    "questionText": "For the graph of $y = \\dfrac{6}{x}$, find the value of $y$ when $x = 2$ and when $x = 3$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Substitute $x = 2$.", "workingLatex": "y = \\dfrac{6}{2} = 3", "explanation": "Dividing $6$ by $2$ gives $3$.", "diagram": null },
        { "stepNumber": 2, "description": "Substitute $x = 3$.", "workingLatex": "y = \\dfrac{6}{3} = 2", "explanation": "Dividing $6$ by $3$ gives $2$.", "diagram": null },
        { "stepNumber": 3, "description": "Note the pattern.", "workingLatex": "xy = 6", "explanation": "The product of $x$ and $y$ is always $6$, so as one grows the other shrinks.", "diagram": null },
        { "stepNumber": 4, "description": "State the values.", "workingLatex": "y = 3 \\text{ and } y = 2", "explanation": "So the points $(2, 3)$ and $(3, 2)$ lie on the curve.", "diagram": null }
      ],
      "finalAnswer": "$y = 3$ (at $x = 2$) and $y = 2$ (at $x = 3$)"
    }
  },
  {
    "id": "gcse.algebra.cubic-reciprocal-graphs.q006",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Cubic and reciprocal graphs",
    "subtopicId": "gcse.algebra.cubic-reciprocal-graphs",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "text",
    "tags": ["cubic and reciprocal graphs", "matching", "shape"],
    "questionText": "A graph is a smooth curve that passes through the origin, is very flat near the origin, and goes from bottom-left to top-right. Is this a quadratic, a cubic, or a reciprocal graph?",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Rule out the reciprocal.", "workingLatex": "\\text{reciprocal has no point at } x = 0", "explanation": "A reciprocal graph cannot pass through the origin, so it is not that.", "diagram": null },
        { "stepNumber": 2, "description": "Rule out the quadratic.", "workingLatex": "\\text{quadratic is a U (or } \\cap \\text{)}", "explanation": "A quadratic turns around and comes back; it does not go from bottom-left to top-right.", "diagram": null },
        { "stepNumber": 3, "description": "Match the description.", "workingLatex": "y = x^3", "explanation": "A cubic is flat near the origin and runs from bottom-left to top-right, matching all the clues.", "diagram": null },
        { "stepNumber": 4, "description": "State the answer.", "workingLatex": "\\text{cubic}", "explanation": "So the graph is a cubic.", "diagram": null }
      ],
      "finalAnswer": "A cubic graph."
    }
  },
  {
    "id": "gcse.algebra.cubic-reciprocal-graphs.q007",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Cubic and reciprocal graphs",
    "subtopicId": "gcse.algebra.cubic-reciprocal-graphs",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "value",
    "tags": ["cubic and reciprocal graphs", "cubic", "y-intercept"],
    "questionText": "Find the $y$-intercept of the curve $y = x^3 - 4$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Set $x = 0$.", "workingLatex": "y = 0^3 - 4", "explanation": "The $y$-intercept is the value when $x = 0$.", "diagram": null },
        { "stepNumber": 2, "description": "Simplify.", "workingLatex": "y = -4", "explanation": "The cubed term vanishes, leaving the constant.", "diagram": null },
        { "stepNumber": 3, "description": "State the intercept.", "workingLatex": "(0, -4)", "explanation": "So the curve crosses the $y$-axis at $(0, -4)$.", "diagram": null }
      ],
      "finalAnswer": "$-4$"
    }
  },
  {
    "id": "gcse.algebra.cubic-reciprocal-graphs.q008",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Cubic and reciprocal graphs",
    "subtopicId": "gcse.algebra.cubic-reciprocal-graphs",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "value",
    "tags": ["cubic and reciprocal graphs", "cubic", "roots", "factorised form"],
    "questionText": "Find the roots of $y = (x - 1)(x - 2)(x - 3)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Set $y = 0$.", "workingLatex": "(x - 1)(x - 2)(x - 3) = 0", "explanation": "The roots are where $y = 0$.", "diagram": null },
        { "stepNumber": 2, "description": "Apply the zero-product rule.", "workingLatex": "x - 1 = 0,\\ x - 2 = 0,\\ x - 3 = 0", "explanation": "Each factor set to zero gives a root.", "diagram": null },
        { "stepNumber": 3, "description": "Solve.", "workingLatex": "x = 1,\\ 2,\\ 3", "explanation": "The three roots come directly from the brackets.", "diagram": null },
        { "stepNumber": 4, "description": "State the answer.", "workingLatex": "x = 1, 2, 3", "explanation": "So the curve crosses the $x$-axis at $1$, $2$ and $3$.", "diagram": null }
      ],
      "finalAnswer": "$x = 1,\\ 2,\\ 3$"
    }
  },
  {
    "id": "gcse.algebra.cubic-reciprocal-graphs.q009",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Cubic and reciprocal graphs",
    "subtopicId": "gcse.algebra.cubic-reciprocal-graphs",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "text",
    "tags": ["cubic and reciprocal graphs", "reciprocal", "symmetry"],
    "questionText": "The graph of $y = \\dfrac{1}{x}$ has rotational symmetry. Describe this symmetry.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Test a point and its opposite.", "workingLatex": "(2, \\tfrac{1}{2}) \\text{ and } (-2, -\\tfrac{1}{2})", "explanation": "Replacing $x$ with $-x$ also flips the sign of $y$, so each point has a partner opposite it through the origin.", "diagram": null },
        { "stepNumber": 2, "description": "Interpret this relationship.", "workingLatex": "(x, y) \\to (-x, -y)", "explanation": "Turning the graph half a turn about the origin sends each point exactly onto another point of the graph.", "diagram": null },
        { "stepNumber": 3, "description": "Name the symmetry.", "workingLatex": "180° \\text{ about the origin}", "explanation": "This is rotational symmetry of order $2$ about the origin.", "diagram": null }
      ],
      "finalAnswer": "Rotational symmetry of order $2$ (a $180°$ turn) about the origin."
    }
  },
  {
    "id": "gcse.algebra.cubic-reciprocal-graphs.q010",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Cubic and reciprocal graphs",
    "subtopicId": "gcse.algebra.cubic-reciprocal-graphs",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "value",
    "tags": ["cubic and reciprocal graphs", "reciprocal", "solving"],
    "questionText": "The point $(x, 4)$ lies on the graph of $y = \\dfrac{12}{x}$. Find the value of $x$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Substitute $y = 4$.", "workingLatex": "4 = \\dfrac{12}{x}", "explanation": "We put the known $y$-value into the equation.", "diagram": null },
        { "stepNumber": 2, "description": "Multiply both sides by $x$.", "workingLatex": "4x = 12", "explanation": "Clearing the fraction moves $x$ out of the denominator.", "diagram": null },
        { "stepNumber": 3, "description": "Divide by $4$.", "workingLatex": "x = 3", "explanation": "Solving gives the $x$-coordinate.", "diagram": null },
        { "stepNumber": 4, "description": "Check.", "workingLatex": "\\dfrac{12}{3} = 4 \\ \\checkmark", "explanation": "Substituting back confirms the value.", "diagram": null }
      ],
      "finalAnswer": "$x = 3$"
    }
  },
  {
    "id": "gcse.algebra.cubic-reciprocal-graphs.q011",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Cubic and reciprocal graphs",
    "subtopicId": "gcse.algebra.cubic-reciprocal-graphs",
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "text",
    "tags": ["cubic and reciprocal graphs", "cubic", "sketching", "roots", "y-intercept"],
    "questionText": "Find the roots and the $y$-intercept of $y = (x + 1)(x - 1)(x - 2)$, and describe the general shape of the curve.",
    "questionDiagram": {
      "kind": "functionGraph",
      "xMin": -2.5, "xMax": 3.5, "yMin": -6, "yMax": 6,
      "curves": [{ "fn": { "base": "cubic", "a": 1, "b": 1, "c": 0.667, "d": -0.3 }, "color": "accent", "label": "y=(x+1)(x-1)(x-2)" }],
      "points": [
        { "x": -1, "y": 0, "label": "(-1,0)", "color": "ink" },
        { "x": 1, "y": 0, "label": "(1,0)", "color": "ink" },
        { "x": 2, "y": 0, "label": "(2,0)", "color": "ink" },
        { "x": 0, "y": 2, "label": "(0,2)", "color": "soft" }
      ],
      "alt": "A positive cubic crossing the x-axis at -1, 1 and 2, and the y-axis at 2."
    },
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Set $y = 0$ for the roots.", "workingLatex": "(x + 1)(x - 1)(x - 2) = 0", "explanation": "The roots are where the product is zero.", "diagram": null },
        { "stepNumber": 2, "description": "Solve each factor.", "workingLatex": "x = -1,\\ 1,\\ 2", "explanation": "Each bracket gives one crossing point.", "diagram": null },
        { "stepNumber": 3, "description": "Find the $y$-intercept.", "workingLatex": "(0 + 1)(0 - 1)(0 - 2) = 2", "explanation": "Substituting $x = 0$ gives $1 \\times (-1) \\times (-2) = 2$.", "diagram": null },
        { "stepNumber": 4, "description": "Decide the direction.", "workingLatex": "+x^3 \\Rightarrow \\text{up on the right}", "explanation": "Multiplying out gives a positive $x^3$ term, so the curve rises to the right and falls to the left.", "diagram": null },
        { "stepNumber": 5, "description": "Describe the shape.", "workingLatex": "\\text{crosses at } -1, 1, 2", "explanation": "It is a positive cubic crossing the $x$-axis three times, with a local max then a local min between the roots.", "diagram": null }
      ],
      "finalAnswer": "Roots $-1, 1, 2$; $y$-intercept $2$; a positive cubic (down-left to up-right) crossing the $x$-axis three times."
    }
  },
  {
    "id": "gcse.algebra.cubic-reciprocal-graphs.q012",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Cubic and reciprocal graphs",
    "subtopicId": "gcse.algebra.cubic-reciprocal-graphs",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "value",
    "tags": ["cubic and reciprocal graphs", "cubic", "repeated root", "number of roots"],
    "questionText": "How many times does the graph of $y = x^3$ cross or touch the $x$-axis, and at what point?",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Set $y = 0$.", "workingLatex": "x^3 = 0", "explanation": "We look for where the curve meets the $x$-axis.", "diagram": null },
        { "stepNumber": 2, "description": "Solve.", "workingLatex": "x = 0", "explanation": "The only value whose cube is zero is $0$.", "diagram": null },
        { "stepNumber": 3, "description": "Interpret the single root.", "workingLatex": "x^3 = x \\cdot x \\cdot x", "explanation": "It is a triple root: the curve flattens and passes through the axis at just this one point.", "diagram": null },
        { "stepNumber": 4, "description": "State the answer.", "workingLatex": "\\text{once, at } (0, 0)", "explanation": "So $y = x^3$ meets the $x$-axis only at the origin.", "diagram": null }
      ],
      "finalAnswer": "Once, at the origin $(0, 0)$."
    }
  },
  {
    "id": "gcse.algebra.cubic-reciprocal-graphs.q013",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Cubic and reciprocal graphs",
    "subtopicId": "gcse.algebra.cubic-reciprocal-graphs",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "text",
    "tags": ["cubic and reciprocal graphs", "reciprocal", "negative", "quadrants"],
    "questionText": "In which two regions (quadrants) of the plane does the graph of $y = -\\dfrac{2}{x}$ lie? Explain.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Test a positive $x$.", "workingLatex": "x = 1 \\Rightarrow y = -2", "explanation": "For positive $x$, the negative sign makes $y$ negative — bottom-right region.", "diagram": null },
        { "stepNumber": 2, "description": "Test a negative $x$.", "workingLatex": "x = -1 \\Rightarrow y = 2", "explanation": "For negative $x$, dividing by a negative gives a positive $y$ — top-left region.", "diagram": null },
        { "stepNumber": 3, "description": "Compare with $y = \\tfrac{2}{x}$.", "workingLatex": "\\text{sign flipped}", "explanation": "The minus sign reflects the usual reciprocal graph, moving its branches to the opposite pair of quadrants.", "diagram": null },
        { "stepNumber": 4, "description": "State the regions.", "workingLatex": "\\text{top-left and bottom-right}", "explanation": "So the two branches lie in the top-left and bottom-right regions.", "diagram": null }
      ],
      "finalAnswer": "Top-left and bottom-right — because $y$ is positive for negative $x$ and negative for positive $x$."
    }
  },
  {
    "id": "gcse.algebra.cubic-reciprocal-graphs.q014",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Cubic and reciprocal graphs",
    "subtopicId": "gcse.algebra.cubic-reciprocal-graphs",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "value",
    "tags": ["cubic and reciprocal graphs", "cubic", "substitution"],
    "questionText": "Find the value of $y$ on the curve $y = 2x^3$ when $x = 2$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Substitute $x = 2$.", "workingLatex": "y = 2(2)^3", "explanation": "Replacing $x$ with $2$; cube first, then multiply.", "diagram": null },
        { "stepNumber": 2, "description": "Cube the number.", "workingLatex": "2^3 = 8", "explanation": "Following order of operations, the power is applied before the multiplication.", "diagram": null },
        { "stepNumber": 3, "description": "Multiply.", "workingLatex": "y = 2 \\times 8 = 16", "explanation": "Multiplying by the coefficient $2$.", "diagram": null },
        { "stepNumber": 4, "description": "State the answer.", "workingLatex": "y = 16", "explanation": "So the point $(2, 16)$ lies on the curve.", "diagram": null }
      ],
      "finalAnswer": "$y = 16$"
    }
  },
  {
    "id": "gcse.algebra.cubic-reciprocal-graphs.q015",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Cubic and reciprocal graphs",
    "subtopicId": "gcse.algebra.cubic-reciprocal-graphs",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "value",
    "tags": ["cubic and reciprocal graphs", "cubic", "table of values"],
    "questionText": "Complete the table of values for $y = x^3 - 2x$ at $x = -2, -1, 0, 1, 2$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Substitute $x = -2$.", "workingLatex": "(-2)^3 - 2(-2) = -8 + 4 = -4", "explanation": "Cube then subtract twice $x$; note $-2(-2) = +4$.", "diagram": null },
        { "stepNumber": 2, "description": "Substitute $x = -1$.", "workingLatex": "(-1)^3 - 2(-1) = -1 + 2 = 1", "explanation": "$-1$ cubed is $-1$, and $-2(-1) = +2$.", "diagram": null },
        { "stepNumber": 3, "description": "Substitute $x = 0$.", "workingLatex": "0 - 0 = 0", "explanation": "Both terms vanish at $x = 0$.", "diagram": null },
        { "stepNumber": 4, "description": "Substitute $x = 1$.", "workingLatex": "1 - 2 = -1", "explanation": "$1$ cubed is $1$, minus $2$ gives $-1$.", "diagram": null },
        { "stepNumber": 5, "description": "Substitute $x = 2$.", "workingLatex": "8 - 4 = 4", "explanation": "$2$ cubed is $8$, minus $4$ gives $4$.", "diagram": null },
        { "stepNumber": 6, "description": "State the values.", "workingLatex": "-4,\\ 1,\\ 0,\\ -1,\\ 4", "explanation": "The opposite values for $\\pm x$ show symmetry about the origin.", "diagram": null }
      ],
      "finalAnswer": "$y = -4, 1, 0, -1, 4$"
    }
  },
  {
    "id": "gcse.algebra.cubic-reciprocal-graphs.q016",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Cubic and reciprocal graphs",
    "subtopicId": "gcse.algebra.cubic-reciprocal-graphs",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "text",
    "tags": ["cubic and reciprocal graphs", "matching", "shape"],
    "questionText": "Match each equation to its graph type: (i) $y = x^3 + 1$, (ii) $y = \\dfrac{4}{x}$, (iii) $y = -x^3$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Classify (i).", "workingLatex": "y = x^3 + 1", "explanation": "A positive cubic shifted up by $1$: rises from bottom-left to top-right, crossing the $y$-axis at $1$.", "diagram": null },
        { "stepNumber": 2, "description": "Classify (ii).", "workingLatex": "y = \\dfrac{4}{x}", "explanation": "A reciprocal graph: two branches in the top-right and bottom-left, with the axes as asymptotes.", "diagram": null },
        { "stepNumber": 3, "description": "Classify (iii).", "workingLatex": "y = -x^3", "explanation": "A negative cubic: the reflection of $y = x^3$, running from top-left to bottom-right.", "diagram": null },
        { "stepNumber": 4, "description": "Summarise.", "workingLatex": "\\text{cubic up, reciprocal, cubic down}", "explanation": "So (i) is an increasing cubic, (ii) is a reciprocal, and (iii) is a decreasing cubic.", "diagram": null }
      ],
      "finalAnswer": "(i) increasing cubic; (ii) reciprocal (two branches); (iii) decreasing cubic (reflected)."
    }
  },
  {
    "id": "gcse.algebra.cubic-reciprocal-graphs.q017",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Cubic and reciprocal graphs",
    "subtopicId": "gcse.algebra.cubic-reciprocal-graphs",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "value",
    "tags": ["cubic and reciprocal graphs", "cubic", "roots", "common factor"],
    "questionText": "Find the roots of $y = x^3 - 4x$ by factorising.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Take out the common factor.", "workingLatex": "x^3 - 4x = x(x^2 - 4)", "explanation": "Every term has a factor of $x$.", "diagram": null },
        { "stepNumber": 2, "description": "Factorise the difference of squares.", "workingLatex": "x(x - 2)(x + 2)", "explanation": "$x^2 - 4$ is a difference of two squares.", "diagram": null },
        { "stepNumber": 3, "description": "Set each factor to zero.", "workingLatex": "x = 0,\\ x = 2,\\ x = -2", "explanation": "Applying the zero-product rule to the three factors.", "diagram": null },
        { "stepNumber": 4, "description": "State the roots.", "workingLatex": "x = -2,\\ 0,\\ 2", "explanation": "So the curve crosses the $x$-axis at these three points.", "diagram": null }
      ],
      "finalAnswer": "$x = -2,\\ 0,\\ 2$"
    }
  },
  {
    "id": "gcse.algebra.cubic-reciprocal-graphs.q018",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Cubic and reciprocal graphs",
    "subtopicId": "gcse.algebra.cubic-reciprocal-graphs",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "text",
    "tags": ["cubic and reciprocal graphs", "reciprocal", "asymptotes"],
    "questionText": "Write down the equations of the two asymptotes of the graph of $y = \\dfrac{3}{x}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Consider $x$ near zero.", "workingLatex": "x \\to 0 \\Rightarrow |y| \\to \\infty", "explanation": "As $x$ approaches $0$ the value shoots off to $\\pm\\infty$, so the curve hugs the vertical line $x = 0$.", "diagram": null },
        { "stepNumber": 2, "description": "Consider large $x$.", "workingLatex": "x \\to \\infty \\Rightarrow y \\to 0", "explanation": "For very large $x$, $y$ gets close to $0$, so the curve hugs the horizontal line $y = 0$.", "diagram": null },
        { "stepNumber": 3, "description": "State the asymptotes.", "workingLatex": "x = 0,\\ y = 0", "explanation": "These are the two lines the curve approaches but never touches.", "diagram": null }
      ],
      "finalAnswer": "$x = 0$ (the $y$-axis) and $y = 0$ (the $x$-axis)."
    }
  },
  {
    "id": "gcse.algebra.cubic-reciprocal-graphs.q019",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Cubic and reciprocal graphs",
    "subtopicId": "gcse.algebra.cubic-reciprocal-graphs",
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "value",
    "tags": ["cubic and reciprocal graphs", "reciprocal", "real context", "inverse proportion"],
    "questionText": "The time $t$ hours to fill a pool is related to the number of pumps $n$ by $t = \\dfrac{24}{n}$. Find the time with $3$ pumps, the time with $6$ pumps, and the number of pumps needed to fill it in $2$ hours.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recognise the relationship.", "workingLatex": "t = \\dfrac{24}{n}", "explanation": "This is a reciprocal (inverse-proportion) relationship: more pumps means less time.", "diagram": null },
        { "stepNumber": 2, "description": "Find the time with $3$ pumps.", "workingLatex": "t = \\dfrac{24}{3} = 8", "explanation": "Dividing $24$ by $3$ gives $8$ hours.", "diagram": null },
        { "stepNumber": 3, "description": "Find the time with $6$ pumps.", "workingLatex": "t = \\dfrac{24}{6} = 4", "explanation": "Doubling the pumps halves the time to $4$ hours.", "diagram": null },
        { "stepNumber": 4, "description": "Set $t = 2$ for the last part.", "workingLatex": "2 = \\dfrac{24}{n}", "explanation": "We want the number of pumps that gives a time of $2$ hours.", "diagram": null },
        { "stepNumber": 5, "description": "Solve for $n$.", "workingLatex": "2n = 24 \\Rightarrow n = 12", "explanation": "Multiplying up and dividing gives the number of pumps.", "diagram": null }
      ],
      "finalAnswer": "$8$ hours with $3$ pumps; $4$ hours with $6$ pumps; $12$ pumps for $2$ hours."
    }
  },
  {
    "id": "gcse.algebra.cubic-reciprocal-graphs.q020",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Cubic and reciprocal graphs",
    "subtopicId": "gcse.algebra.cubic-reciprocal-graphs",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "text",
    "tags": ["cubic and reciprocal graphs", "cubic", "reflection", "shape"],
    "questionText": "Describe how the graph of $y = -x^3$ differs from the graph of $y = x^3$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Compare a sample point.", "workingLatex": "x = 2:\\ x^3 = 8,\\ -x^3 = -8", "explanation": "The sign of every $y$-value is flipped.", "diagram": null },
        { "stepNumber": 2, "description": "Interpret the sign change.", "workingLatex": "(x, y) \\to (x, -y)", "explanation": "Flipping every $y$-value is a reflection in the $x$-axis.", "diagram": null },
        { "stepNumber": 3, "description": "Describe the direction.", "workingLatex": "\\text{top-left} \\to \\text{bottom-right}", "explanation": "So instead of rising left-to-right, $y = -x^3$ falls from top-left to bottom-right.", "diagram": null },
        { "stepNumber": 4, "description": "Note the shared point.", "workingLatex": "\\text{both through } (0,0)", "explanation": "Both curves still pass through the origin.", "diagram": null }
      ],
      "finalAnswer": "$y = -x^3$ is the reflection of $y = x^3$ in the $x$-axis: it falls from top-left to bottom-right, still passing through the origin."
    }
  },
  {
    "id": "gcse.algebra.cubic-reciprocal-graphs.q021",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Cubic and reciprocal graphs",
    "subtopicId": "gcse.algebra.cubic-reciprocal-graphs",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "value",
    "tags": ["cubic and reciprocal graphs", "cubic", "y-intercept", "factorised form"],
    "questionText": "Find the $y$-intercept of the curve $y = (x + 2)(x - 1)(x - 3)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Set $x = 0$.", "workingLatex": "y = (0 + 2)(0 - 1)(0 - 3)", "explanation": "The $y$-intercept is the value at $x = 0$; substitute directly into the factorised form.", "diagram": null },
        { "stepNumber": 2, "description": "Evaluate each bracket.", "workingLatex": "(2)(-1)(-3)", "explanation": "Each bracket becomes a number.", "diagram": null },
        { "stepNumber": 3, "description": "Multiply.", "workingLatex": "2 \\times -1 \\times -3 = 6", "explanation": "Two negatives multiply to a positive, then times $2$ gives $6$.", "diagram": null },
        { "stepNumber": 4, "description": "State the intercept.", "workingLatex": "(0, 6)", "explanation": "So the curve crosses the $y$-axis at $(0, 6)$.", "diagram": null }
      ],
      "finalAnswer": "$(0, 6)$"
    }
  },
  {
    "id": "gcse.algebra.cubic-reciprocal-graphs.q022",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Cubic and reciprocal graphs",
    "subtopicId": "gcse.algebra.cubic-reciprocal-graphs",
    "difficulty": "Intermediate",
    "marks": 2,
    "answerType": "value",
    "tags": ["cubic and reciprocal graphs", "cubic", "number of roots", "reading a graph"],
    "questionText": "A cubic graph is shown crossing the $x$-axis at three distinct points. How many real solutions does the equation $y = 0$ have?",
    "questionDiagram": {
      "kind": "functionGraph",
      "xMin": -3, "xMax": 3, "yMin": -6, "yMax": 6,
      "curves": [{ "fn": { "base": "cubic", "a": 1, "d": 0, "c": 0, "b": 1 }, "color": "accent" }],
      "points": [
        { "x": -1.7, "y": 0, "label": "", "color": "ink" },
        { "x": 0, "y": 0, "label": "", "color": "ink" },
        { "x": 1.7, "y": 0, "label": "", "color": "ink" }
      ],
      "alt": "A cubic curve crossing the x-axis at three distinct points."
    },
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall the meaning of $y = 0$.", "workingLatex": "y = 0 \\Leftrightarrow x\\text{-axis crossings}", "explanation": "The solutions are the $x$-values where the curve meets the $x$-axis.", "diagram": null },
        { "stepNumber": 2, "description": "Count the crossings.", "workingLatex": "3 \\text{ crossings}", "explanation": "The curve cuts the $x$-axis at three separate points.", "diagram": null },
        { "stepNumber": 3, "description": "State the answer.", "workingLatex": "3", "explanation": "So there are three real solutions — the most a cubic can have.", "diagram": null }
      ],
      "finalAnswer": "Three solutions."
    }
  },
  {
    "id": "gcse.algebra.cubic-reciprocal-graphs.q023",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Cubic and reciprocal graphs",
    "subtopicId": "gcse.algebra.cubic-reciprocal-graphs",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "value",
    "tags": ["cubic and reciprocal graphs", "reciprocal", "solving"],
    "questionText": "Solve $\\dfrac{1}{x} = 2$, giving the $x$-coordinate where the graph of $y = \\dfrac{1}{x}$ has height $2$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Write the equation.", "workingLatex": "\\dfrac{1}{x} = 2", "explanation": "We want the $x$-value that makes the reciprocal equal to $2$.", "diagram": null },
        { "stepNumber": 2, "description": "Multiply both sides by $x$.", "workingLatex": "1 = 2x", "explanation": "Clearing the fraction removes $x$ from the denominator.", "diagram": null },
        { "stepNumber": 3, "description": "Divide by $2$.", "workingLatex": "x = \\dfrac{1}{2}", "explanation": "Solving gives the $x$-coordinate.", "diagram": null },
        { "stepNumber": 4, "description": "Check.", "workingLatex": "\\dfrac{1}{1/2} = 2 \\ \\checkmark", "explanation": "Substituting back confirms the value.", "diagram": null }
      ],
      "finalAnswer": "$x = \\tfrac{1}{2}$"
    }
  },
  {
    "id": "gcse.algebra.cubic-reciprocal-graphs.q024",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Cubic and reciprocal graphs",
    "subtopicId": "gcse.algebra.cubic-reciprocal-graphs",
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "text",
    "tags": ["cubic and reciprocal graphs", "cubic", "roots", "sketching"],
    "questionText": "Find the roots of $y = x^3 - x$ and describe the shape of the curve.",
    "questionDiagram": {
      "kind": "functionGraph",
      "xMin": -2, "xMax": 2, "yMin": -3, "yMax": 3,
      "curves": [{ "fn": { "base": "cubic", "a": 1, "b": 1, "c": 0, "d": 0 }, "color": "accent", "label": "y=x^3-x" }],
      "points": [
        { "x": -1, "y": 0, "label": "(-1,0)", "color": "ink" },
        { "x": 0, "y": 0, "label": "(0,0)", "color": "ink" },
        { "x": 1, "y": 0, "label": "(1,0)", "color": "ink" }
      ],
      "alt": "A positive cubic crossing the x-axis at -1, 0 and 1 with a local max and min."
    },
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Take out the common factor.", "workingLatex": "x^3 - x = x(x^2 - 1)", "explanation": "Every term shares a factor of $x$.", "diagram": null },
        { "stepNumber": 2, "description": "Factorise the difference of squares.", "workingLatex": "x(x - 1)(x + 1)", "explanation": "$x^2 - 1$ is a difference of two squares.", "diagram": null },
        { "stepNumber": 3, "description": "Solve for the roots.", "workingLatex": "x = 0,\\ 1,\\ -1", "explanation": "Each factor set to zero gives a crossing point.", "diagram": null },
        { "stepNumber": 4, "description": "Decide the direction.", "workingLatex": "+x^3 \\Rightarrow \\text{up on the right}", "explanation": "The positive leading term means the curve rises to the right and falls to the left.", "diagram": null },
        { "stepNumber": 5, "description": "Describe the shape.", "workingLatex": "\\text{crosses at } -1, 0, 1", "explanation": "It is a positive cubic crossing the axis three times, with a local maximum then a local minimum between the roots.", "diagram": null }
      ],
      "finalAnswer": "Roots $-1, 0, 1$; a positive cubic (down-left to up-right) crossing the $x$-axis three times with a local max and min."
    }
  },
  {
    "id": "gcse.algebra.cubic-reciprocal-graphs.q025",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Cubic and reciprocal graphs",
    "subtopicId": "gcse.algebra.cubic-reciprocal-graphs",
    "difficulty": "Intermediate",
    "marks": 2,
    "answerType": "value",
    "tags": ["cubic and reciprocal graphs", "reciprocal", "reading values"],
    "questionText": "Find the value of $y$ on the graph of $y = \\dfrac{1}{x}$ when $x = \\dfrac{1}{2}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Substitute $x = \\tfrac{1}{2}$.", "workingLatex": "y = \\dfrac{1}{\\,1/2\\,}", "explanation": "We divide $1$ by the fraction $\\tfrac{1}{2}$.", "diagram": null },
        { "stepNumber": 2, "description": "Divide by a fraction.", "workingLatex": "1 \\div \\tfrac{1}{2} = 1 \\times 2", "explanation": "Dividing by $\\tfrac{1}{2}$ is the same as multiplying by $2$.", "diagram": null },
        { "stepNumber": 3, "description": "Simplify.", "workingLatex": "y = 2", "explanation": "So the value is $2$.", "diagram": null },
        { "stepNumber": 4, "description": "State the point.", "workingLatex": "\\left(\\tfrac{1}{2}, 2\\right)", "explanation": "The point $\\left(\\tfrac{1}{2}, 2\\right)$ lies on the curve.", "diagram": null }
      ],
      "finalAnswer": "$y = 2$"
    }
  },
  {
    "id": "gcse.algebra.cubic-reciprocal-graphs.q026",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Cubic and reciprocal graphs",
    "subtopicId": "gcse.algebra.cubic-reciprocal-graphs",
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "text",
    "tags": ["cubic and reciprocal graphs", "cubic", "repeated root", "sketching"],
    "questionText": "The curve $y = (x - 1)^2(x + 2)$ is given. Find its roots and describe how the curve behaves at each root.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Set $y = 0$.", "workingLatex": "(x - 1)^2(x + 2) = 0", "explanation": "The roots are where the product is zero.", "diagram": null },
        { "stepNumber": 2, "description": "Solve each factor.", "workingLatex": "x = 1 \\text{ (twice)},\\ x = -2", "explanation": "The squared factor gives a repeated root at $x = 1$; the other factor gives $x = -2$.", "diagram": null },
        { "stepNumber": 3, "description": "Behaviour at the repeated root.", "workingLatex": "(x - 1)^2 \\Rightarrow \\text{touches}", "explanation": "A squared factor means the curve touches the $x$-axis at $x = 1$ without crossing.", "diagram": null },
        { "stepNumber": 4, "description": "Behaviour at the single root.", "workingLatex": "(x + 2) \\Rightarrow \\text{crosses}", "explanation": "A single factor means the curve passes straight through the axis at $x = -2$.", "diagram": null },
        { "stepNumber": 5, "description": "Note the $y$-intercept.", "workingLatex": "(0-1)^2(0+2) = 2", "explanation": "At $x = 0$, $y = 1 \\times 2 = 2$, so it crosses the $y$-axis at $2$.", "diagram": null }
      ],
      "finalAnswer": "Roots $x = 1$ (repeated — the curve touches here) and $x = -2$ (the curve crosses here); $y$-intercept $2$."
    }
  },
  {
    "id": "gcse.algebra.cubic-reciprocal-graphs.q027",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Cubic and reciprocal graphs",
    "subtopicId": "gcse.algebra.cubic-reciprocal-graphs",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "text",
    "tags": ["cubic and reciprocal graphs", "reciprocal", "intercepts", "reasoning"],
    "questionText": "Explain why the graph of $y = \\dfrac{4}{x}$ never crosses either axis.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Test the $y$-axis.", "workingLatex": "x = 0 \\Rightarrow \\dfrac{4}{0}", "explanation": "To cross the $y$-axis we would need $x = 0$, but dividing by zero is undefined, so there is no point there.", "diagram": null },
        { "stepNumber": 2, "description": "Test the $x$-axis.", "workingLatex": "\\dfrac{4}{x} = 0", "explanation": "To cross the $x$-axis we would need $y = 0$.", "diagram": null },
        { "stepNumber": 3, "description": "Show this is impossible.", "workingLatex": "4 \\neq 0", "explanation": "A fraction with numerator $4$ can never equal zero, so $y$ is never $0$.", "diagram": null },
        { "stepNumber": 4, "description": "Conclude.", "workingLatex": "\\text{no axis crossings}", "explanation": "The curve gets close to both axes (they are asymptotes) but never actually meets them.", "diagram": null }
      ],
      "finalAnswer": "It cannot reach $x = 0$ (division by zero) and $\\tfrac{4}{x}$ is never $0$, so it never meets either axis — the axes are asymptotes."
    }
  },
  {
    "id": "gcse.algebra.cubic-reciprocal-graphs.q028",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Cubic and reciprocal graphs",
    "subtopicId": "gcse.algebra.cubic-reciprocal-graphs",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "value",
    "tags": ["cubic and reciprocal graphs", "cubic", "solving"],
    "questionText": "Solve $x^3 = 27$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Take the cube root of both sides.", "workingLatex": "x = \\sqrt[3]{27}", "explanation": "The cube root undoes the cubing.", "diagram": null },
        { "stepNumber": 2, "description": "Evaluate.", "workingLatex": "x = 3", "explanation": "Since $3 \\times 3 \\times 3 = 27$.", "diagram": null },
        { "stepNumber": 3, "description": "Note about signs.", "workingLatex": "3^3 = 27 \\text{ only}", "explanation": "Unlike squares, a cube has a single real root, so $x = 3$ is the only solution.", "diagram": null }
      ],
      "finalAnswer": "$x = 3$"
    }
  },
  {
    "id": "gcse.algebra.cubic-reciprocal-graphs.q029",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Cubic and reciprocal graphs",
    "subtopicId": "gcse.algebra.cubic-reciprocal-graphs",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "value",
    "tags": ["cubic and reciprocal graphs", "cubic", "symmetry"],
    "questionText": "On the curve $y = x^3$, the point where $x = 4$ has $y = 64$. Use the symmetry of the graph to write down $y$ when $x = -4$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall the symmetry of $y = x^3$.", "workingLatex": "(-x)^3 = -x^3", "explanation": "Cubing a negative flips the sign, so the graph has rotational symmetry about the origin.", "diagram": null },
        { "stepNumber": 2, "description": "Apply to the known point.", "workingLatex": "x = 4 \\to y = 64 \\Rightarrow x = -4 \\to y = -64", "explanation": "The point $(-4, y)$ is the origin-reflection of $(4, 64)$, so its $y$-value is the negative.", "diagram": null },
        { "stepNumber": 3, "description": "State the value.", "workingLatex": "y = -64", "explanation": "So when $x = -4$, $y = -64$.", "diagram": null }
      ],
      "finalAnswer": "$y = -64$"
    }
  },
  {
    "id": "gcse.algebra.cubic-reciprocal-graphs.q030",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Cubic and reciprocal graphs",
    "subtopicId": "gcse.algebra.cubic-reciprocal-graphs",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "value",
    "tags": ["cubic and reciprocal graphs", "reciprocal", "table of values"],
    "questionText": "Complete the table of values for $y = \\dfrac{12}{x}$ at $x = 1, 2, 4, 6$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Substitute $x = 1$.", "workingLatex": "y = \\dfrac{12}{1} = 12", "explanation": "Dividing $12$ by $1$.", "diagram": null },
        { "stepNumber": 2, "description": "Substitute $x = 2$.", "workingLatex": "y = \\dfrac{12}{2} = 6", "explanation": "Dividing $12$ by $2$.", "diagram": null },
        { "stepNumber": 3, "description": "Substitute $x = 4$.", "workingLatex": "y = \\dfrac{12}{4} = 3", "explanation": "Dividing $12$ by $4$.", "diagram": null },
        { "stepNumber": 4, "description": "Substitute $x = 6$.", "workingLatex": "y = \\dfrac{12}{6} = 2", "explanation": "Dividing $12$ by $6$.", "diagram": null },
        { "stepNumber": 5, "description": "State the values.", "workingLatex": "12,\\ 6,\\ 3,\\ 2", "explanation": "As $x$ increases, $y$ decreases — the hallmark of a reciprocal relationship.", "diagram": null }
      ],
      "finalAnswer": "$y = 12, 6, 3, 2$"
    }
  },
  {
    "id": "gcse.algebra.cubic-reciprocal-graphs.q031",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Cubic and reciprocal graphs",
    "subtopicId": "gcse.algebra.cubic-reciprocal-graphs",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "expression",
    "tags": ["cubic and reciprocal graphs", "reciprocal", "finding the equation"],
    "questionText": "The graph of $y = \\dfrac{k}{x}$ passes through the point $(2, 3)$. Find the value of $k$ and write down the equation.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Substitute the point.", "workingLatex": "3 = \\dfrac{k}{2}", "explanation": "The point $(2, 3)$ satisfies the equation.", "diagram": null },
        { "stepNumber": 2, "description": "Multiply both sides by $2$.", "workingLatex": "k = 6", "explanation": "Clearing the fraction gives the constant.", "diagram": null },
        { "stepNumber": 3, "description": "Write the equation.", "workingLatex": "y = \\dfrac{6}{x}", "explanation": "Putting $k = 6$ back into the general form.", "diagram": null },
        { "stepNumber": 4, "description": "Check.", "workingLatex": "\\dfrac{6}{2} = 3 \\ \\checkmark", "explanation": "The point $(2, 3)$ satisfies this equation.", "diagram": null }
      ],
      "finalAnswer": "$k = 6$, so $y = \\dfrac{6}{x}$"
    }
  },
  {
    "id": "gcse.algebra.cubic-reciprocal-graphs.q032",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Cubic and reciprocal graphs",
    "subtopicId": "gcse.algebra.cubic-reciprocal-graphs",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "value",
    "tags": ["cubic and reciprocal graphs", "cubic", "number of roots"],
    "questionText": "How many times does the graph of $y = x^3 + 1$ cross the $x$-axis? Give the crossing point.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Set $y = 0$.", "workingLatex": "x^3 + 1 = 0", "explanation": "Crossings occur where $y = 0$.", "diagram": null },
        { "stepNumber": 2, "description": "Rearrange.", "workingLatex": "x^3 = -1", "explanation": "Subtracting $1$ from both sides.", "diagram": null },
        { "stepNumber": 3, "description": "Take the cube root.", "workingLatex": "x = -1", "explanation": "Since $(-1)^3 = -1$; a cube has just one real root.", "diagram": null },
        { "stepNumber": 4, "description": "State the answer.", "workingLatex": "\\text{once, at } (-1, 0)", "explanation": "So the curve crosses the $x$-axis once, at $(-1, 0)$.", "diagram": null }
      ],
      "finalAnswer": "Once, at $(-1, 0)$."
    }
  },
  {
    "id": "gcse.algebra.cubic-reciprocal-graphs.q033",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Cubic and reciprocal graphs",
    "subtopicId": "gcse.algebra.cubic-reciprocal-graphs",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "text",
    "tags": ["cubic and reciprocal graphs", "reciprocal", "quadrants"],
    "questionText": "In which two regions of the plane does the graph of $y = \\dfrac{5}{x}$ lie?",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Test a positive $x$.", "workingLatex": "x = 1 \\Rightarrow y = 5 > 0", "explanation": "For positive $x$, dividing a positive by a positive gives a positive $y$ — top-right region.", "diagram": null },
        { "stepNumber": 2, "description": "Test a negative $x$.", "workingLatex": "x = -1 \\Rightarrow y = -5 < 0", "explanation": "For negative $x$, dividing a positive by a negative gives a negative $y$ — bottom-left region.", "diagram": null },
        { "stepNumber": 3, "description": "State the regions.", "workingLatex": "\\text{top-right and bottom-left}", "explanation": "Since $k = 5$ is positive, the branches sit in the top-right and bottom-left.", "diagram": null }
      ],
      "finalAnswer": "Top-right and bottom-left."
    }
  },
  {
    "id": "gcse.algebra.cubic-reciprocal-graphs.q034",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Cubic and reciprocal graphs",
    "subtopicId": "gcse.algebra.cubic-reciprocal-graphs",
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "value",
    "tags": ["cubic and reciprocal graphs", "reciprocal", "real context", "inverse proportion"],
    "questionText": "For a fixed amount of gas, the pressure $P$ and volume $V$ satisfy $P = \\dfrac{60}{V}$. Find $P$ when $V = 4$, and find $V$ when $P = 5$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recognise the relationship.", "workingLatex": "P = \\dfrac{60}{V}", "explanation": "Pressure is inversely proportional to volume — a reciprocal graph.", "diagram": null },
        { "stepNumber": 2, "description": "Find $P$ when $V = 4$.", "workingLatex": "P = \\dfrac{60}{4} = 15", "explanation": "Dividing $60$ by $4$.", "diagram": null },
        { "stepNumber": 3, "description": "Set $P = 5$.", "workingLatex": "5 = \\dfrac{60}{V}", "explanation": "Now we want the volume that gives a pressure of $5$.", "diagram": null },
        { "stepNumber": 4, "description": "Multiply up.", "workingLatex": "5V = 60", "explanation": "Clearing the fraction.", "diagram": null },
        { "stepNumber": 5, "description": "Solve for $V$.", "workingLatex": "V = 12", "explanation": "Dividing both sides by $5$.", "diagram": null }
      ],
      "finalAnswer": "$P = 15$ when $V = 4$; $V = 12$ when $P = 5$."
    }
  },
  {
    "id": "gcse.algebra.cubic-reciprocal-graphs.q035",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Cubic and reciprocal graphs",
    "subtopicId": "gcse.algebra.cubic-reciprocal-graphs",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "value",
    "tags": ["cubic and reciprocal graphs", "cubic", "roots", "common factor"],
    "questionText": "Find the roots of $y = x^3 - 9x$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Take out the common factor.", "workingLatex": "x^3 - 9x = x(x^2 - 9)", "explanation": "Each term has a factor of $x$.", "diagram": null },
        { "stepNumber": 2, "description": "Factorise the difference of squares.", "workingLatex": "x(x - 3)(x + 3)", "explanation": "$x^2 - 9$ is a difference of two squares.", "diagram": null },
        { "stepNumber": 3, "description": "Solve each factor.", "workingLatex": "x = 0,\\ 3,\\ -3", "explanation": "Setting each of the three factors to zero.", "diagram": null },
        { "stepNumber": 4, "description": "State the roots.", "workingLatex": "x = -3,\\ 0,\\ 3", "explanation": "So the curve crosses the $x$-axis at these three points.", "diagram": null }
      ],
      "finalAnswer": "$x = -3,\\ 0,\\ 3$"
    }
  },
  {
    "id": "gcse.algebra.cubic-reciprocal-graphs.q036",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Cubic and reciprocal graphs",
    "subtopicId": "gcse.algebra.cubic-reciprocal-graphs",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "text",
    "tags": ["cubic and reciprocal graphs", "cubic", "translation", "shape"],
    "questionText": "How is the graph of $y = x^3 + 2$ related to the graph of $y = x^3$?",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Compare the outputs.", "workingLatex": "y = x^3 + 2", "explanation": "Every $y$-value is $2$ more than for $y = x^3$ at the same $x$.", "diagram": null },
        { "stepNumber": 2, "description": "Interpret the change.", "workingLatex": "\\text{add } 2 \\text{ to each height}", "explanation": "Adding a constant to every output raises the whole curve.", "diagram": null },
        { "stepNumber": 3, "description": "Describe the transformation.", "workingLatex": "\\text{translation } \\begin{pmatrix} 0 \\\\ 2 \\end{pmatrix}", "explanation": "This is a shift of $2$ units upward.", "diagram": null },
        { "stepNumber": 4, "description": "Note the new $y$-intercept.", "workingLatex": "(0, 2)", "explanation": "The curve now passes through $(0, 2)$ instead of the origin.", "diagram": null }
      ],
      "finalAnswer": "It is the graph of $y = x^3$ translated $2$ units up (so it passes through $(0, 2)$)."
    }
  },
  {
    "id": "gcse.algebra.cubic-reciprocal-graphs.q037",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Cubic and reciprocal graphs",
    "subtopicId": "gcse.algebra.cubic-reciprocal-graphs",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "value",
    "tags": ["cubic and reciprocal graphs", "cubic", "solving"],
    "questionText": "Solve $x^3 = 8$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Take the cube root.", "workingLatex": "x = \\sqrt[3]{8}", "explanation": "The cube root undoes the cube.", "diagram": null },
        { "stepNumber": 2, "description": "Evaluate.", "workingLatex": "x = 2", "explanation": "Since $2 \\times 2 \\times 2 = 8$.", "diagram": null },
        { "stepNumber": 3, "description": "Note uniqueness.", "workingLatex": "\\text{one real root}", "explanation": "A cube has a single real root, so $x = 2$ is the only solution.", "diagram": null }
      ],
      "finalAnswer": "$x = 2$"
    }
  },
  {
    "id": "gcse.algebra.cubic-reciprocal-graphs.q038",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Cubic and reciprocal graphs",
    "subtopicId": "gcse.algebra.cubic-reciprocal-graphs",
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "text",
    "tags": ["cubic and reciprocal graphs", "cubic", "negative cubic", "roots", "sketching"],
    "questionText": "Find the roots of $y = -x(x - 2)(x + 2)$ and state whether the curve rises or falls as $x$ becomes large and positive.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Set $y = 0$.", "workingLatex": "-x(x - 2)(x + 2) = 0", "explanation": "The roots are where the product is zero; the leading $-1$ does not change where it equals zero.", "diagram": null },
        { "stepNumber": 2, "description": "Solve each factor.", "workingLatex": "x = 0,\\ 2,\\ -2", "explanation": "Each factor gives one root.", "diagram": null },
        { "stepNumber": 3, "description": "Find the leading term.", "workingLatex": "-x \\cdot x \\cdot x = -x^3", "explanation": "Multiplying the highest-power terms gives a negative $x^3$.", "diagram": null },
        { "stepNumber": 4, "description": "Decide the end behaviour.", "workingLatex": "-x^3 \\to -\\infty \\text{ as } x \\to +\\infty", "explanation": "A negative cubic falls to the bottom-right for large positive $x$.", "diagram": null },
        { "stepNumber": 5, "description": "State the answer.", "workingLatex": "\\text{roots } -2, 0, 2;\\ \\text{falls}", "explanation": "So the curve crosses at $-2, 0, 2$ and falls as $x$ becomes large and positive.", "diagram": null }
      ],
      "finalAnswer": "Roots $-2, 0, 2$; being a negative cubic, it falls (towards $-\\infty$) as $x$ becomes large and positive."
    }
  },
  {
    "id": "gcse.algebra.cubic-reciprocal-graphs.q039",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Cubic and reciprocal graphs",
    "subtopicId": "gcse.algebra.cubic-reciprocal-graphs",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "value",
    "tags": ["cubic and reciprocal graphs", "reciprocal", "reading values", "negative"],
    "questionText": "Find the value of $y$ on the graph of $y = \\dfrac{8}{x}$ when $x = -4$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Substitute $x = -4$.", "workingLatex": "y = \\dfrac{8}{-4}", "explanation": "Replacing $x$ with $-4$.", "diagram": null },
        { "stepNumber": 2, "description": "Divide.", "workingLatex": "y = -2", "explanation": "A positive divided by a negative is negative.", "diagram": null },
        { "stepNumber": 3, "description": "State the point.", "workingLatex": "(-4, -2)", "explanation": "So the point $(-4, -2)$ lies on the curve, in the bottom-left region.", "diagram": null }
      ],
      "finalAnswer": "$y = -2$"
    }
  },
  {
    "id": "gcse.algebra.cubic-reciprocal-graphs.q040",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Cubic and reciprocal graphs",
    "subtopicId": "gcse.algebra.cubic-reciprocal-graphs",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "expression",
    "tags": ["cubic and reciprocal graphs", "reciprocal", "finding the equation"],
    "questionText": "The graph of $y = \\dfrac{k}{x}$ passes through $(5, 4)$. Find $k$ and hence the value of $y$ when $x = 10$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Substitute the point.", "workingLatex": "4 = \\dfrac{k}{5}", "explanation": "The point $(5, 4)$ satisfies the equation.", "diagram": null },
        { "stepNumber": 2, "description": "Solve for $k$.", "workingLatex": "k = 20", "explanation": "Multiplying both sides by $5$.", "diagram": null },
        { "stepNumber": 3, "description": "Write the equation.", "workingLatex": "y = \\dfrac{20}{x}", "explanation": "Putting $k = 20$ into the general form.", "diagram": null },
        { "stepNumber": 4, "description": "Substitute $x = 10$.", "workingLatex": "y = \\dfrac{20}{10} = 2", "explanation": "Evaluating at $x = 10$.", "diagram": null }
      ],
      "finalAnswer": "$k = 20$; $y = 2$ when $x = 10$."
    }
  },
  {
    "id": "gcse.algebra.cubic-reciprocal-graphs.q041",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Cubic and reciprocal graphs",
    "subtopicId": "gcse.algebra.cubic-reciprocal-graphs",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "expression",
    "tags": ["cubic and reciprocal graphs", "cubic", "finding the equation", "roots"],
    "questionText": "Write down, in factorised form, a cubic equation whose graph crosses the $x$-axis at $x = -1, 2$ and $3$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Turn each root into a factor.", "workingLatex": "x = -1 \\to (x + 1)", "explanation": "A root at $x = -1$ means $(x + 1)$ is a factor, because it is zero there.", "diagram": null },
        { "stepNumber": 2, "description": "Do the same for the others.", "workingLatex": "x = 2 \\to (x - 2),\\ x = 3 \\to (x - 3)", "explanation": "Each root gives a bracket $(x - \\text{root})$.", "diagram": null },
        { "stepNumber": 3, "description": "Multiply the factors.", "workingLatex": "y = (x + 1)(x - 2)(x - 3)", "explanation": "The product of the three factors is a cubic with exactly those roots.", "diagram": null },
        { "stepNumber": 4, "description": "State the answer.", "workingLatex": "y = (x + 1)(x - 2)(x - 3)", "explanation": "Any non-zero multiple of this also works, but this is the simplest.", "diagram": null }
      ],
      "finalAnswer": "$y = (x + 1)(x - 2)(x - 3)$"
    }
  },
  {
    "id": "gcse.algebra.cubic-reciprocal-graphs.q042",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Cubic and reciprocal graphs",
    "subtopicId": "gcse.algebra.cubic-reciprocal-graphs",
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "value",
    "tags": ["cubic and reciprocal graphs", "cubic", "solving graphically"],
    "questionText": "By writing $x^3 = x$ as $x^3 - x = 0$, solve the equation and hence state the $x$-coordinates where the graphs of $y = x^3$ and $y = x$ intersect.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Move everything to one side.", "workingLatex": "x^3 - x = 0", "explanation": "The intersections occur where the two expressions are equal, i.e. where their difference is zero.", "diagram": null },
        { "stepNumber": 2, "description": "Factor out $x$.", "workingLatex": "x(x^2 - 1) = 0", "explanation": "Both terms share a factor of $x$.", "diagram": null },
        { "stepNumber": 3, "description": "Factorise the bracket.", "workingLatex": "x(x - 1)(x + 1) = 0", "explanation": "$x^2 - 1$ is a difference of two squares.", "diagram": null },
        { "stepNumber": 4, "description": "Solve.", "workingLatex": "x = 0,\\ 1,\\ -1", "explanation": "Each factor set to zero gives a solution.", "diagram": null },
        { "stepNumber": 5, "description": "Interpret.", "workingLatex": "\\text{3 intersection points}", "explanation": "So the curve $y = x^3$ meets the line $y = x$ at $x = -1, 0, 1$.", "diagram": null }
      ],
      "finalAnswer": "$x = -1,\\ 0,\\ 1$"
    }
  },
  {
    "id": "gcse.algebra.cubic-reciprocal-graphs.q043",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Cubic and reciprocal graphs",
    "subtopicId": "gcse.algebra.cubic-reciprocal-graphs",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "value",
    "tags": ["cubic and reciprocal graphs", "reciprocal", "reading values"],
    "questionText": "The graph of $y = \\dfrac{2}{x}$ passes through $(1, 2)$. Find the value of $y$ when $x = 4$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Substitute $x = 4$.", "workingLatex": "y = \\dfrac{2}{4}", "explanation": "Replacing $x$ with $4$ in the equation.", "diagram": null },
        { "stepNumber": 2, "description": "Simplify.", "workingLatex": "y = \\dfrac{1}{2}", "explanation": "$\\tfrac{2}{4}$ reduces to $\\tfrac{1}{2}$.", "diagram": null },
        { "stepNumber": 3, "description": "State the point.", "workingLatex": "\\left(4, \\tfrac{1}{2}\\right)", "explanation": "As $x$ grew from $1$ to $4$, $y$ shrank from $2$ to $\\tfrac{1}{2}$.", "diagram": null }
      ],
      "finalAnswer": "$y = \\tfrac{1}{2}$"
    }
  },
  {
    "id": "gcse.algebra.cubic-reciprocal-graphs.q044",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Cubic and reciprocal graphs",
    "subtopicId": "gcse.algebra.cubic-reciprocal-graphs",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "text",
    "tags": ["cubic and reciprocal graphs", "matching", "cubic", "reciprocal"],
    "questionText": "A smooth curve has two separate branches, has no point on the $y$-axis, and gets closer and closer to both axes without touching them. Is it a cubic or a reciprocal graph?",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Consider the cubic.", "workingLatex": "y = x^3", "explanation": "A cubic is a single connected curve and does have a point on the $y$-axis, so it does not match.", "diagram": null },
        { "stepNumber": 2, "description": "Consider the reciprocal.", "workingLatex": "y = \\dfrac{k}{x}", "explanation": "A reciprocal has two separate branches, no point at $x = 0$, and approaches both axes.", "diagram": null },
        { "stepNumber": 3, "description": "Match the clues.", "workingLatex": "\\text{two branches + asymptotes}", "explanation": "Every clue points to the reciprocal graph.", "diagram": null }
      ],
      "finalAnswer": "A reciprocal graph."
    }
  },
  {
    "id": "gcse.algebra.cubic-reciprocal-graphs.q045",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Cubic and reciprocal graphs",
    "subtopicId": "gcse.algebra.cubic-reciprocal-graphs",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "value",
    "tags": ["cubic and reciprocal graphs", "cubic", "substitution", "negative"],
    "questionText": "Find the value of $y$ on the curve $y = x^3$ when $x = -3$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Substitute $x = -3$.", "workingLatex": "y = (-3)^3", "explanation": "Replacing $x$ with $-3$.", "diagram": null },
        { "stepNumber": 2, "description": "Cube the value.", "workingLatex": "(-3)(-3)(-3) = -27", "explanation": "Two negatives make a positive, then times another negative gives a negative.", "diagram": null },
        { "stepNumber": 3, "description": "State the answer.", "workingLatex": "y = -27", "explanation": "So the point $(-3, -27)$ lies on the curve.", "diagram": null }
      ],
      "finalAnswer": "$y = -27$"
    }
  },
  {
    "id": "gcse.algebra.cubic-reciprocal-graphs.q046",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Cubic and reciprocal graphs",
    "subtopicId": "gcse.algebra.cubic-reciprocal-graphs",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "text",
    "tags": ["cubic and reciprocal graphs", "reciprocal", "symmetry", "lines of symmetry"],
    "questionText": "State the two lines of symmetry (lines of reflection) of the graph of $y = \\dfrac{1}{x}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Test reflection in $y = x$.", "workingLatex": "(2, \\tfrac{1}{2}) \\leftrightarrow (\\tfrac{1}{2}, 2)", "explanation": "Swapping $x$ and $y$ maps a point of the graph onto another point of the graph, so $y = x$ is a line of symmetry.", "diagram": null },
        { "stepNumber": 2, "description": "Test reflection in $y = -x$.", "workingLatex": "(2, \\tfrac{1}{2}) \\leftrightarrow (-\\tfrac{1}{2}, -2)", "explanation": "Reflecting in $y = -x$ also lands on the graph, so this is a second line of symmetry.", "diagram": null },
        { "stepNumber": 3, "description": "State the lines.", "workingLatex": "y = x \\text{ and } y = -x", "explanation": "These two diagonals are the axes of symmetry of the reciprocal graph.", "diagram": null }
      ],
      "finalAnswer": "$y = x$ and $y = -x$."
    }
  },
  {
    "id": "gcse.algebra.cubic-reciprocal-graphs.q047",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Cubic and reciprocal graphs",
    "subtopicId": "gcse.algebra.cubic-reciprocal-graphs",
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "text",
    "tags": ["cubic and reciprocal graphs", "cubic", "repeated root", "sketching"],
    "questionText": "Find the roots of $y = (x - 2)(x + 1)^2$, describe the behaviour at each root, and give the $y$-intercept.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Set $y = 0$.", "workingLatex": "(x - 2)(x + 1)^2 = 0", "explanation": "Roots occur where the product is zero.", "diagram": null },
        { "stepNumber": 2, "description": "Solve the factors.", "workingLatex": "x = 2,\\ x = -1 \\text{ (repeated)}", "explanation": "The single factor gives $x = 2$; the squared factor gives a repeated root at $x = -1$.", "diagram": null },
        { "stepNumber": 3, "description": "Behaviour at $x = 2$.", "workingLatex": "\\text{single} \\Rightarrow \\text{crosses}", "explanation": "A single factor means the curve passes straight through the axis here.", "diagram": null },
        { "stepNumber": 4, "description": "Behaviour at $x = -1$.", "workingLatex": "\\text{squared} \\Rightarrow \\text{touches}", "explanation": "A squared factor means the curve just touches the axis and turns back at $x = -1$.", "diagram": null },
        { "stepNumber": 5, "description": "Find the $y$-intercept.", "workingLatex": "(0 - 2)(0 + 1)^2 = -2", "explanation": "At $x = 0$, $y = (-2)(1) = -2$.", "diagram": null }
      ],
      "finalAnswer": "Roots $x = 2$ (crosses) and $x = -1$ (repeated — touches); $y$-intercept $-2$."
    }
  },
  {
    "id": "gcse.algebra.cubic-reciprocal-graphs.q048",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Cubic and reciprocal graphs",
    "subtopicId": "gcse.algebra.cubic-reciprocal-graphs",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "value",
    "tags": ["cubic and reciprocal graphs", "reciprocal", "solving"],
    "questionText": "The graph of $y = \\dfrac{k}{x}$ passes through $(3, 4)$. Find the $x$-coordinate of the point on the curve where $y = 6$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Find $k$ from the given point.", "workingLatex": "4 = \\dfrac{k}{3} \\Rightarrow k = 12", "explanation": "Substituting $(3, 4)$ and multiplying up gives the constant.", "diagram": null },
        { "stepNumber": 2, "description": "Write the equation.", "workingLatex": "y = \\dfrac{12}{x}", "explanation": "Now we know the full equation.", "diagram": null },
        { "stepNumber": 3, "description": "Set $y = 6$.", "workingLatex": "6 = \\dfrac{12}{x}", "explanation": "We want the $x$-value where the height is $6$.", "diagram": null },
        { "stepNumber": 4, "description": "Solve.", "workingLatex": "6x = 12 \\Rightarrow x = 2", "explanation": "Multiplying up and dividing gives the answer.", "diagram": null }
      ],
      "finalAnswer": "$x = 2$"
    }
  },
  {
    "id": "gcse.algebra.cubic-reciprocal-graphs.q049",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Cubic and reciprocal graphs",
    "subtopicId": "gcse.algebra.cubic-reciprocal-graphs",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "value",
    "tags": ["cubic and reciprocal graphs", "cubic", "table of values"],
    "questionText": "Complete the table of values for $y = x^3 + 1$ at $x = -2, -1, 0, 1, 2$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Substitute $x = -2$.", "workingLatex": "(-2)^3 + 1 = -8 + 1 = -7", "explanation": "Cube then add $1$.", "diagram": null },
        { "stepNumber": 2, "description": "Substitute $x = -1$.", "workingLatex": "(-1)^3 + 1 = -1 + 1 = 0", "explanation": "This is the root, where the curve crosses the $x$-axis.", "diagram": null },
        { "stepNumber": 3, "description": "Substitute $x = 0$.", "workingLatex": "0 + 1 = 1", "explanation": "This is the $y$-intercept.", "diagram": null },
        { "stepNumber": 4, "description": "Substitute $x = 1$.", "workingLatex": "1 + 1 = 2", "explanation": "$1$ cubed plus $1$.", "diagram": null },
        { "stepNumber": 5, "description": "Substitute $x = 2$.", "workingLatex": "8 + 1 = 9", "explanation": "$8$ plus $1$.", "diagram": null },
        { "stepNumber": 6, "description": "State the values.", "workingLatex": "-7,\\ 0,\\ 1,\\ 2,\\ 9", "explanation": "These points let you plot the curve.", "diagram": null }
      ],
      "finalAnswer": "$y = -7, 0, 1, 2, 9$"
    }
  },
  {
    "id": "gcse.algebra.cubic-reciprocal-graphs.q050",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Cubic and reciprocal graphs",
    "subtopicId": "gcse.algebra.cubic-reciprocal-graphs",
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "value",
    "tags": ["cubic and reciprocal graphs", "reciprocal", "real context", "inverse proportion"],
    "questionText": "The current $I$ amps in a circuit is given by $I = \\dfrac{240}{R}$, where $R$ is the resistance in ohms. Find $I$ when $R = 60$, and find $R$ when $I = 8$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recognise the reciprocal law.", "workingLatex": "I = \\dfrac{240}{R}", "explanation": "Current is inversely proportional to resistance.", "diagram": null },
        { "stepNumber": 2, "description": "Find $I$ when $R = 60$.", "workingLatex": "I = \\dfrac{240}{60} = 4", "explanation": "Dividing $240$ by $60$.", "diagram": null },
        { "stepNumber": 3, "description": "Set $I = 8$.", "workingLatex": "8 = \\dfrac{240}{R}", "explanation": "Now we solve for the resistance.", "diagram": null },
        { "stepNumber": 4, "description": "Multiply up.", "workingLatex": "8R = 240", "explanation": "Clearing the fraction.", "diagram": null },
        { "stepNumber": 5, "description": "Solve.", "workingLatex": "R = 30", "explanation": "Dividing both sides by $8$.", "diagram": null }
      ],
      "finalAnswer": "$I = 4$ amps when $R = 60$; $R = 30$ ohms when $I = 8$."
    }
  },
  {
    "id": "gcse.algebra.cubic-reciprocal-graphs.q051",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Cubic and reciprocal graphs",
    "subtopicId": "gcse.algebra.cubic-reciprocal-graphs",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "text",
    "tags": ["cubic and reciprocal graphs", "cubic", "shape", "reflection"],
    "questionText": "Explain, using end behaviour, how you can tell whether a cubic has a positive or a negative $x^3$ term just from its graph.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Consider a positive $x^3$ term.", "workingLatex": "+x^3", "explanation": "For large positive $x$ the term is large and positive, so the curve heads up on the right; on the left it heads down.", "diagram": null },
        { "stepNumber": 2, "description": "Consider a negative $x^3$ term.", "workingLatex": "-x^3", "explanation": "The signs flip: the curve heads down on the right and up on the left.", "diagram": null },
        { "stepNumber": 3, "description": "Give the test.", "workingLatex": "\\text{look at the right-hand end}", "explanation": "If the right-hand end of the curve rises, the $x^3$ term is positive; if it falls, it is negative.", "diagram": null }
      ],
      "finalAnswer": "Positive $x^3$: the curve rises to the right (down-left to up-right). Negative $x^3$: it falls to the right (up-left to down-right)."
    }
  },
  {
    "id": "gcse.algebra.cubic-reciprocal-graphs.q052",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Cubic and reciprocal graphs",
    "subtopicId": "gcse.algebra.cubic-reciprocal-graphs",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "value",
    "tags": ["cubic and reciprocal graphs", "cubic", "roots", "finding the equation"],
    "questionText": "A cubic graph crosses the $x$-axis only at $x = 4$ and touches it (does not cross) at $x = -1$. Write a possible equation in factorised form.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Turn the crossing into a factor.", "workingLatex": "x = 4 \\to (x - 4)", "explanation": "A simple crossing gives a single factor.", "diagram": null },
        { "stepNumber": 2, "description": "Turn the touch into a repeated factor.", "workingLatex": "x = -1 \\to (x + 1)^2", "explanation": "Touching (not crossing) means a repeated root, so the factor is squared.", "diagram": null },
        { "stepNumber": 3, "description": "Combine.", "workingLatex": "y = (x - 4)(x + 1)^2", "explanation": "Multiplying gives a cubic (degree $1 + 2 = 3$) with the required behaviour.", "diagram": null },
        { "stepNumber": 4, "description": "State the answer.", "workingLatex": "y = (x - 4)(x + 1)^2", "explanation": "This is one valid equation; multiples of it work too.", "diagram": null }
      ],
      "finalAnswer": "$y = (x - 4)(x + 1)^2$"
    }
  },
  {
    "id": "gcse.algebra.cubic-reciprocal-graphs.q053",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Cubic and reciprocal graphs",
    "subtopicId": "gcse.algebra.cubic-reciprocal-graphs",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "value",
    "tags": ["cubic and reciprocal graphs", "reciprocal", "substitution"],
    "questionText": "Find the value of $y$ on the graph of $y = \\dfrac{10}{x}$ when $x = 5$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Substitute $x = 5$.", "workingLatex": "y = \\dfrac{10}{5}", "explanation": "Replacing $x$ with $5$.", "diagram": null },
        { "stepNumber": 2, "description": "Divide.", "workingLatex": "y = 2", "explanation": "$10$ divided by $5$ is $2$.", "diagram": null },
        { "stepNumber": 3, "description": "State the point.", "workingLatex": "(5, 2)", "explanation": "So $(5, 2)$ lies on the curve.", "diagram": null }
      ],
      "finalAnswer": "$y = 2$"
    }
  },
  {
    "id": "gcse.algebra.cubic-reciprocal-graphs.q054",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Cubic and reciprocal graphs",
    "subtopicId": "gcse.algebra.cubic-reciprocal-graphs",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "value",
    "tags": ["cubic and reciprocal graphs", "reciprocal", "table of values", "negative"],
    "questionText": "Complete the table of values for $y = \\dfrac{6}{x}$ at $x = -6, -3, -2, -1$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Substitute $x = -6$.", "workingLatex": "y = \\dfrac{6}{-6} = -1", "explanation": "A positive divided by a negative is negative.", "diagram": null },
        { "stepNumber": 2, "description": "Substitute $x = -3$.", "workingLatex": "y = \\dfrac{6}{-3} = -2", "explanation": "Dividing $6$ by $-3$.", "diagram": null },
        { "stepNumber": 3, "description": "Substitute $x = -2$.", "workingLatex": "y = \\dfrac{6}{-2} = -3", "explanation": "Dividing $6$ by $-2$.", "diagram": null },
        { "stepNumber": 4, "description": "Substitute $x = -1$.", "workingLatex": "y = \\dfrac{6}{-1} = -6", "explanation": "Dividing $6$ by $-1$.", "diagram": null },
        { "stepNumber": 5, "description": "State the values.", "workingLatex": "-1,\\ -2,\\ -3,\\ -6", "explanation": "These negative values form the bottom-left branch of the reciprocal graph.", "diagram": null }
      ],
      "finalAnswer": "$y = -1, -2, -3, -6$"
    }
  },
  {
    "id": "gcse.algebra.cubic-reciprocal-graphs.q055",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Cubic and reciprocal graphs",
    "subtopicId": "gcse.algebra.cubic-reciprocal-graphs",
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "text",
    "tags": ["cubic and reciprocal graphs", "cubic", "sketching", "roots", "y-intercept"],
    "questionText": "Sketch the key features of $y = x(x - 3)^2$: state its roots, the behaviour at each, and its $y$-intercept.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Set $y = 0$.", "workingLatex": "x(x - 3)^2 = 0", "explanation": "Roots are where the product is zero.", "diagram": null },
        { "stepNumber": 2, "description": "Solve.", "workingLatex": "x = 0,\\ x = 3 \\text{ (repeated)}", "explanation": "The single factor gives $x = 0$; the squared factor gives a repeated root at $x = 3$.", "diagram": null },
        { "stepNumber": 3, "description": "Behaviour at $x = 0$.", "workingLatex": "\\text{single} \\Rightarrow \\text{crosses}", "explanation": "The curve crosses straight through the origin.", "diagram": null },
        { "stepNumber": 4, "description": "Behaviour at $x = 3$.", "workingLatex": "\\text{squared} \\Rightarrow \\text{touches}", "explanation": "The curve touches the axis at $x = 3$ and turns back.", "diagram": null },
        { "stepNumber": 5, "description": "Find the $y$-intercept.", "workingLatex": "0 \\times (0-3)^2 = 0", "explanation": "At $x = 0$, $y = 0$, so it passes through the origin — the intercept coincides with a root.", "diagram": null }
      ],
      "finalAnswer": "Roots $x = 0$ (crosses) and $x = 3$ (repeated — touches); passes through the origin, so the $y$-intercept is $0$."
    }
  },
  {
    "id": "gcse.algebra.cubic-reciprocal-graphs.q056",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Cubic and reciprocal graphs",
    "subtopicId": "gcse.algebra.cubic-reciprocal-graphs",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "text",
    "tags": ["cubic and reciprocal graphs", "identifying", "reciprocal"],
    "questionText": "Is $y = \\dfrac{5}{x}$ a cubic graph or a reciprocal graph? Give a reason.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Look at the form.", "workingLatex": "y = \\dfrac{5}{x}", "explanation": "The variable $x$ is in the denominator, which is the signature of a reciprocal function.", "diagram": null },
        { "stepNumber": 2, "description": "Compare with a cubic.", "workingLatex": "\\text{cubic has } x^3", "explanation": "A cubic would contain an $x^3$ term, which this does not.", "diagram": null },
        { "stepNumber": 3, "description": "State the answer.", "workingLatex": "\\text{reciprocal}", "explanation": "So it is a reciprocal graph.", "diagram": null }
      ],
      "finalAnswer": "A reciprocal graph, because $x$ is in the denominator (there is no $x^3$ term)."
    }
  },
  {
    "id": "gcse.algebra.cubic-reciprocal-graphs.q057",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Cubic and reciprocal graphs",
    "subtopicId": "gcse.algebra.cubic-reciprocal-graphs",
    "difficulty": "Intermediate",
    "marks": 2,
    "answerType": "value",
    "tags": ["cubic and reciprocal graphs", "cubic", "y-intercept"],
    "questionText": "Find the $y$-intercept of the curve $y = x^3 - 3x^2 + 2$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Set $x = 0$.", "workingLatex": "y = 0^3 - 3(0)^2 + 2", "explanation": "The $y$-intercept is the value at $x = 0$.", "diagram": null },
        { "stepNumber": 2, "description": "Simplify.", "workingLatex": "y = 2", "explanation": "All terms with $x$ vanish, leaving the constant.", "diagram": null },
        { "stepNumber": 3, "description": "State the intercept.", "workingLatex": "(0, 2)", "explanation": "The $y$-intercept of any polynomial is just its constant term.", "diagram": null }
      ],
      "finalAnswer": "$(0, 2)$"
    }
  },
  {
    "id": "gcse.algebra.cubic-reciprocal-graphs.q058",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Cubic and reciprocal graphs",
    "subtopicId": "gcse.algebra.cubic-reciprocal-graphs",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "value",
    "tags": ["cubic and reciprocal graphs", "cubic", "solving graphically"],
    "questionText": "Use factorising to solve $x^3 = 4x$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Move everything to one side.", "workingLatex": "x^3 - 4x = 0", "explanation": "Never divide both sides by $x$ — that would lose the root $x = 0$. Instead rearrange.", "diagram": null },
        { "stepNumber": 2, "description": "Factor out $x$.", "workingLatex": "x(x^2 - 4) = 0", "explanation": "Both terms share a factor of $x$.", "diagram": null },
        { "stepNumber": 3, "description": "Factorise the bracket.", "workingLatex": "x(x - 2)(x + 2) = 0", "explanation": "$x^2 - 4$ is a difference of two squares.", "diagram": null },
        { "stepNumber": 4, "description": "Solve.", "workingLatex": "x = 0,\\ 2,\\ -2", "explanation": "Each factor set to zero gives a solution.", "diagram": null }
      ],
      "finalAnswer": "$x = -2,\\ 0,\\ 2$"
    }
  },
  {
    "id": "gcse.algebra.cubic-reciprocal-graphs.q059",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Cubic and reciprocal graphs",
    "subtopicId": "gcse.algebra.cubic-reciprocal-graphs",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "expression",
    "tags": ["cubic and reciprocal graphs", "reciprocal", "finding the equation", "negative"],
    "questionText": "The graph of $y = \\dfrac{k}{x}$ passes through $(-2, -5)$. Find $k$ and write the equation.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Substitute the point.", "workingLatex": "-5 = \\dfrac{k}{-2}", "explanation": "The point $(-2, -5)$ satisfies the equation.", "diagram": null },
        { "stepNumber": 2, "description": "Multiply both sides by $-2$.", "workingLatex": "k = (-5)(-2) = 10", "explanation": "Two negatives multiply to a positive.", "diagram": null },
        { "stepNumber": 3, "description": "Write the equation.", "workingLatex": "y = \\dfrac{10}{x}", "explanation": "Putting $k = 10$ into the general form.", "diagram": null },
        { "stepNumber": 4, "description": "Check.", "workingLatex": "\\dfrac{10}{-2} = -5 \\ \\checkmark", "explanation": "Substituting back confirms the point lies on the curve.", "diagram": null }
      ],
      "finalAnswer": "$k = 10$, so $y = \\dfrac{10}{x}$"
    }
  },
  {
    "id": "gcse.algebra.cubic-reciprocal-graphs.q060",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Cubic and reciprocal graphs",
    "subtopicId": "gcse.algebra.cubic-reciprocal-graphs",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "text",
    "tags": ["cubic and reciprocal graphs", "cubic", "verifying a point"],
    "questionText": "Show whether the point $(2, 2)$ lies on the curve $y = x^3 - 6$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Substitute $x = 2$.", "workingLatex": "y = 2^3 - 6", "explanation": "Put the $x$-value of the point into the equation.", "diagram": null },
        { "stepNumber": 2, "description": "Evaluate.", "workingLatex": "y = 8 - 6 = 2", "explanation": "$2$ cubed is $8$, minus $6$ gives $2$.", "diagram": null },
        { "stepNumber": 3, "description": "Compare.", "workingLatex": "y = 2 = \\text{given } y", "explanation": "The calculated $y$ matches the point's $y$-coordinate.", "diagram": null },
        { "stepNumber": 4, "description": "Conclude.", "workingLatex": "\\text{on the curve}", "explanation": "Since the point satisfies the equation, it lies on the curve.", "diagram": null }
      ],
      "finalAnswer": "Yes: substituting $x = 2$ gives $y = 2$, so $(2, 2)$ lies on the curve."
    }
  },
  {
    "id": "gcse.algebra.cubic-reciprocal-graphs.q061",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Cubic and reciprocal graphs",
    "subtopicId": "gcse.algebra.cubic-reciprocal-graphs",
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "value",
    "tags": ["cubic and reciprocal graphs", "reciprocal", "solving graphically", "intersection"],
    "questionText": "Find the coordinates of the points where the graphs of $y = \\dfrac{1}{x}$ and $y = x$ intersect.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Set the equations equal.", "workingLatex": "\\dfrac{1}{x} = x", "explanation": "At an intersection both graphs share the same $y$, so the right-hand sides are equal.", "diagram": null },
        { "stepNumber": 2, "description": "Multiply both sides by $x$.", "workingLatex": "1 = x^2", "explanation": "Clearing the fraction (valid since $x \\neq 0$).", "diagram": null },
        { "stepNumber": 3, "description": "Solve for $x$.", "workingLatex": "x = 1 \\text{ or } x = -1", "explanation": "Taking square roots gives both a positive and a negative solution.", "diagram": null },
        { "stepNumber": 4, "description": "Find the matching $y$-values.", "workingLatex": "y = x", "explanation": "Since the line is $y = x$, the $y$-value equals the $x$-value at each point.", "diagram": null },
        { "stepNumber": 5, "description": "State the points.", "workingLatex": "(1, 1) \\text{ and } (-1, -1)", "explanation": "So the two graphs meet at these two points.", "diagram": null }
      ],
      "finalAnswer": "$(1, 1)$ and $(-1, -1)$"
    }
  },
  {
    "id": "gcse.algebra.cubic-reciprocal-graphs.q062",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Cubic and reciprocal graphs",
    "subtopicId": "gcse.algebra.cubic-reciprocal-graphs",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "text",
    "tags": ["cubic and reciprocal graphs", "reciprocal", "shape", "negative"],
    "questionText": "Describe the shape of the graph of $y = -\\dfrac{1}{x}$ compared with $y = \\dfrac{1}{x}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Compare the outputs.", "workingLatex": "y = -\\dfrac{1}{x}", "explanation": "Every $y$-value is the negative of the corresponding value on $y = \\tfrac{1}{x}$.", "diagram": null },
        { "stepNumber": 2, "description": "Interpret the sign change.", "workingLatex": "(x, y) \\to (x, -y)", "explanation": "Flipping every height is a reflection in the $x$-axis.", "diagram": null },
        { "stepNumber": 3, "description": "State the new regions.", "workingLatex": "\\text{top-left and bottom-right}", "explanation": "The branches move to the opposite pair of quadrants.", "diagram": null }
      ],
      "finalAnswer": "It is $y = \\tfrac{1}{x}$ reflected in the $x$-axis, with its two branches in the top-left and bottom-right."
    }
  },
  {
    "id": "gcse.algebra.cubic-reciprocal-graphs.q063",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Cubic and reciprocal graphs",
    "subtopicId": "gcse.algebra.cubic-reciprocal-graphs",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "value",
    "tags": ["cubic and reciprocal graphs", "cubic", "substitution"],
    "questionText": "The curve $y = x^3 - 2$ passes through a point where $x = 3$. Find the $y$-coordinate.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Substitute $x = 3$.", "workingLatex": "y = 3^3 - 2", "explanation": "Cube first, then subtract $2$.", "diagram": null },
        { "stepNumber": 2, "description": "Cube the number.", "workingLatex": "3^3 = 27", "explanation": "$3 \\times 3 \\times 3 = 27$.", "diagram": null },
        { "stepNumber": 3, "description": "Subtract.", "workingLatex": "y = 27 - 2 = 25", "explanation": "Taking $2$ from $27$.", "diagram": null },
        { "stepNumber": 4, "description": "State the point.", "workingLatex": "(3, 25)", "explanation": "So the point $(3, 25)$ lies on the curve.", "diagram": null }
      ],
      "finalAnswer": "$y = 25$"
    }
  },
  {
    "id": "gcse.algebra.cubic-reciprocal-graphs.q064",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Cubic and reciprocal graphs",
    "subtopicId": "gcse.algebra.cubic-reciprocal-graphs",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "value",
    "tags": ["cubic and reciprocal graphs", "cubic", "solving"],
    "questionText": "Solve $x^3 = 64$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Take the cube root.", "workingLatex": "x = \\sqrt[3]{64}", "explanation": "The cube root undoes the cube.", "diagram": null },
        { "stepNumber": 2, "description": "Evaluate.", "workingLatex": "x = 4", "explanation": "Since $4 \\times 4 \\times 4 = 64$.", "diagram": null },
        { "stepNumber": 3, "description": "Note uniqueness.", "workingLatex": "\\text{one real root}", "explanation": "A cube has a single real root, so $x = 4$ is the only solution.", "diagram": null }
      ],
      "finalAnswer": "$x = 4$"
    }
  },
  {
    "id": "gcse.algebra.cubic-reciprocal-graphs.q065",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Cubic and reciprocal graphs",
    "subtopicId": "gcse.algebra.cubic-reciprocal-graphs",
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "value",
    "tags": ["cubic and reciprocal graphs", "reciprocal", "real context", "inverse proportion"],
    "questionText": "For a journey of fixed distance, the average speed $s$ (km/h) and time $t$ (hours) satisfy $s = \\dfrac{180}{t}$. Find the speed for a time of $3$ hours, and the time needed for a speed of $45$ km/h.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Interpret the equation.", "workingLatex": "s = \\dfrac{180}{t}", "explanation": "The fixed distance is $180$ km; speed and time are inversely proportional.", "diagram": null },
        { "stepNumber": 2, "description": "Find speed for $t = 3$.", "workingLatex": "s = \\dfrac{180}{3} = 60", "explanation": "Dividing the distance by the time.", "diagram": null },
        { "stepNumber": 3, "description": "Set $s = 45$.", "workingLatex": "45 = \\dfrac{180}{t}", "explanation": "Now we find the time for that speed.", "diagram": null },
        { "stepNumber": 4, "description": "Multiply up.", "workingLatex": "45t = 180", "explanation": "Clearing the fraction.", "diagram": null },
        { "stepNumber": 5, "description": "Solve.", "workingLatex": "t = 4", "explanation": "Dividing both sides by $45$.", "diagram": null }
      ],
      "finalAnswer": "$60$ km/h in $3$ hours; $4$ hours at $45$ km/h."
    }
  },
  {
    "id": "gcse.algebra.cubic-reciprocal-graphs.q066",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Cubic and reciprocal graphs",
    "subtopicId": "gcse.algebra.cubic-reciprocal-graphs",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "text",
    "tags": ["cubic and reciprocal graphs", "reciprocal", "asymptotes"],
    "questionText": "How many asymptotes does the graph of $y = \\dfrac{7}{x}$ have, and what are they?",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Find the vertical asymptote.", "workingLatex": "x = 0", "explanation": "The function is undefined at $x = 0$, so the curve hugs the $y$-axis there.", "diagram": null },
        { "stepNumber": 2, "description": "Find the horizontal asymptote.", "workingLatex": "y = 0", "explanation": "For large $|x|$, $y$ tends to $0$, so the curve hugs the $x$-axis.", "diagram": null },
        { "stepNumber": 3, "description": "Count them.", "workingLatex": "2 \\text{ asymptotes}", "explanation": "There are exactly two: one vertical and one horizontal.", "diagram": null }
      ],
      "finalAnswer": "Two asymptotes: $x = 0$ and $y = 0$."
    }
  },
  {
    "id": "gcse.algebra.cubic-reciprocal-graphs.q067",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Cubic and reciprocal graphs",
    "subtopicId": "gcse.algebra.cubic-reciprocal-graphs",
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "text",
    "tags": ["cubic and reciprocal graphs", "cubic", "sketching", "roots", "y-intercept"],
    "questionText": "Find the roots and $y$-intercept of $y = (x + 3)(x - 1)(x - 2)$, and describe the shape of the curve.",
    "questionDiagram": {
      "kind": "functionGraph",
      "xMin": -4, "xMax": 3, "yMin": -8, "yMax": 8,
      "curves": [{ "fn": { "base": "cubic", "a": 1, "b": 1, "c": 0.667, "d": 0.5 }, "color": "accent", "label": "y=(x+3)(x-1)(x-2)" }],
      "points": [
        { "x": -3, "y": 0, "label": "(-3,0)", "color": "ink" },
        { "x": 1, "y": 0, "label": "(1,0)", "color": "ink" },
        { "x": 2, "y": 0, "label": "(2,0)", "color": "ink" },
        { "x": 0, "y": 6, "label": "(0,6)", "color": "soft" }
      ],
      "alt": "A positive cubic crossing the x-axis at -3, 1 and 2 and the y-axis at 6."
    },
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Set $y = 0$.", "workingLatex": "(x + 3)(x - 1)(x - 2) = 0", "explanation": "Roots are where the product is zero.", "diagram": null },
        { "stepNumber": 2, "description": "Solve each factor.", "workingLatex": "x = -3,\\ 1,\\ 2", "explanation": "Each bracket gives one crossing point.", "diagram": null },
        { "stepNumber": 3, "description": "Find the $y$-intercept.", "workingLatex": "(3)(-1)(-2) = 6", "explanation": "At $x = 0$, $y = 3 \\times -1 \\times -2 = 6$.", "diagram": null },
        { "stepNumber": 4, "description": "Decide the direction.", "workingLatex": "+x^3 \\Rightarrow \\text{up on the right}", "explanation": "The leading term is positive, so the curve rises to the right.", "diagram": null },
        { "stepNumber": 5, "description": "Describe the shape.", "workingLatex": "\\text{crosses } -3, 1, 2", "explanation": "A positive cubic crossing the $x$-axis three times, with a turning point between each pair of roots.", "diagram": null }
      ],
      "finalAnswer": "Roots $-3, 1, 2$; $y$-intercept $6$; a positive cubic crossing the $x$-axis three times (down-left to up-right)."
    }
  },
  {
    "id": "gcse.algebra.cubic-reciprocal-graphs.q068",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Cubic and reciprocal graphs",
    "subtopicId": "gcse.algebra.cubic-reciprocal-graphs",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "value",
    "tags": ["cubic and reciprocal graphs", "reciprocal", "table of values"],
    "questionText": "Complete the table of values for $y = \\dfrac{1}{x}$ at $x = 0.5, 1, 2, 4$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Substitute $x = 0.5$.", "workingLatex": "y = \\dfrac{1}{0.5} = 2", "explanation": "Dividing $1$ by $0.5$ doubles it.", "diagram": null },
        { "stepNumber": 2, "description": "Substitute $x = 1$.", "workingLatex": "y = \\dfrac{1}{1} = 1", "explanation": "One divided by one is one.", "diagram": null },
        { "stepNumber": 3, "description": "Substitute $x = 2$.", "workingLatex": "y = \\dfrac{1}{2} = 0.5", "explanation": "One half.", "diagram": null },
        { "stepNumber": 4, "description": "Substitute $x = 4$.", "workingLatex": "y = \\dfrac{1}{4} = 0.25", "explanation": "One quarter.", "diagram": null },
        { "stepNumber": 5, "description": "State the values.", "workingLatex": "2,\\ 1,\\ 0.5,\\ 0.25", "explanation": "As $x$ doubles, $y$ halves — the reciprocal pattern.", "diagram": null }
      ],
      "finalAnswer": "$y = 2, 1, 0.5, 0.25$"
    }
  },
  {
    "id": "gcse.algebra.cubic-reciprocal-graphs.q069",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Cubic and reciprocal graphs",
    "subtopicId": "gcse.algebra.cubic-reciprocal-graphs",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "text",
    "tags": ["cubic and reciprocal graphs", "comparing", "cubic", "quadratic"],
    "questionText": "For $x > 1$, explain why the graph of $y = x^3$ lies above the graph of $y = x^2$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Compare the two expressions.", "workingLatex": "x^3 \\text{ vs } x^2", "explanation": "We want to know which is bigger when $x > 1$.", "diagram": null },
        { "stepNumber": 2, "description": "Factor out $x^2$.", "workingLatex": "x^3 - x^2 = x^2(x - 1)", "explanation": "Looking at the difference tells us which curve is higher.", "diagram": null },
        { "stepNumber": 3, "description": "Check the sign for $x > 1$.", "workingLatex": "x^2 > 0,\\ (x - 1) > 0", "explanation": "For $x > 1$ both factors are positive, so the difference is positive.", "diagram": null },
        { "stepNumber": 4, "description": "Conclude.", "workingLatex": "x^3 > x^2", "explanation": "A positive difference means $x^3$ is larger, so its graph is higher.", "diagram": null }
      ],
      "finalAnswer": "Because $x^3 - x^2 = x^2(x - 1) > 0$ for $x > 1$, so $x^3 > x^2$ and the cubic lies above the quadratic."
    }
  },
  {
    "id": "gcse.algebra.cubic-reciprocal-graphs.q070",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Cubic and reciprocal graphs",
    "subtopicId": "gcse.algebra.cubic-reciprocal-graphs",
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "value",
    "tags": ["cubic and reciprocal graphs", "reciprocal", "solving graphically", "cubic"],
    "questionText": "By rearranging, find the $x$-coordinate of the point where $y = \\dfrac{8}{x}$ meets $y = x^2$ (for positive $x$).",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Set the equations equal.", "workingLatex": "\\dfrac{8}{x} = x^2", "explanation": "At the intersection both curves share the same $y$-value.", "diagram": null },
        { "stepNumber": 2, "description": "Multiply both sides by $x$.", "workingLatex": "8 = x^3", "explanation": "Clearing the fraction gives a cubic equation.", "diagram": null },
        { "stepNumber": 3, "description": "Take the cube root.", "workingLatex": "x = \\sqrt[3]{8} = 2", "explanation": "The positive real solution is $2$.", "diagram": null },
        { "stepNumber": 4, "description": "Find the $y$-value.", "workingLatex": "y = 2^2 = 4", "explanation": "Substituting into $y = x^2$ (or $\\tfrac{8}{2} = 4$) gives the height.", "diagram": null },
        { "stepNumber": 5, "description": "State the point.", "workingLatex": "(2, 4)", "explanation": "So the two graphs meet at $(2, 4)$ for positive $x$.", "diagram": null }
      ],
      "finalAnswer": "$x = 2$ (at the point $(2, 4)$)."
    }
  }
];
