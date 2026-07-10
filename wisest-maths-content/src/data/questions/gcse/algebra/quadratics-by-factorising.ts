import { Question } from "@/lib/types";

export const questions: Question[] = [
  {
    "id": "gcse.algebra.quadratics-factorising.q001",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Quadratics by factorising",
    "subtopicId": "gcse.algebra.quadratics-factorising",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "value",
    "tags": ["quadratics by factorising", "factorised form", "roots"],
    "questionText": "Solve $(x - 2)(x - 5) = 0$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Apply the zero-product rule.", "workingLatex": "x - 2 = 0 \\ \\text{ or } \\ x - 5 = 0", "explanation": "A product is zero only when one of its factors is zero.", "diagram": null },
        { "stepNumber": 2, "description": "Solve each factor.", "workingLatex": "x = 2 \\ \\text{ or } \\ x = 5", "explanation": "Each bracket gives one solution.", "diagram": null },
        { "stepNumber": 3, "description": "State the solutions.", "workingLatex": "x = 2, \\ 5", "explanation": "A quadratic can have up to two solutions, and here there are two.", "diagram": null }
      ],
      "finalAnswer": "$x = 2$ or $x = 5$"
    }
  },
  {
    "id": "gcse.algebra.quadratics-factorising.q002",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Quadratics by factorising",
    "subtopicId": "gcse.algebra.quadratics-factorising",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "value",
    "tags": ["quadratics by factorising", "positive roots"],
    "questionText": "Solve $x^2 + 5x + 6 = 0$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Look for two numbers.", "workingLatex": "2 \\times 3 = 6,\\ 2 + 3 = 5", "explanation": "We need two numbers that multiply to $+6$ and add to $+5$: these are $2$ and $3$.", "diagram": null },
        { "stepNumber": 2, "description": "Write the factorised form.", "workingLatex": "(x + 2)(x + 3) = 0", "explanation": "Use the two numbers in the brackets.", "diagram": null },
        { "stepNumber": 3, "description": "Apply the zero-product rule.", "workingLatex": "x + 2 = 0 \\ \\text{ or } \\ x + 3 = 0", "explanation": "Set each factor equal to zero.", "diagram": null },
        { "stepNumber": 4, "description": "Solve.", "workingLatex": "x = -2 \\ \\text{ or } \\ x = -3", "explanation": "Both roots are negative here.", "diagram": null }
      ],
      "finalAnswer": "$x = -2$ or $x = -3$"
    }
  },
  {
    "id": "gcse.algebra.quadratics-factorising.q003",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Quadratics by factorising",
    "subtopicId": "gcse.algebra.quadratics-factorising",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "value",
    "tags": ["quadratics by factorising", "positive roots"],
    "questionText": "Solve $x^2 - 7x + 12 = 0$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Find two numbers.", "workingLatex": "(-3)(-4) = 12,\\ -3 - 4 = -7", "explanation": "We need a product of $+12$ and a sum of $-7$: both numbers are negative, $-3$ and $-4$.", "diagram": null },
        { "stepNumber": 2, "description": "Factorise.", "workingLatex": "(x - 3)(x - 4) = 0", "explanation": "Place the numbers in the brackets.", "diagram": null },
        { "stepNumber": 3, "description": "Solve each factor.", "workingLatex": "x = 3 \\ \\text{ or } \\ x = 4", "explanation": "Set each factor to zero.", "diagram": null }
      ],
      "finalAnswer": "$x = 3$ or $x = 4$"
    }
  },
  {
    "id": "gcse.algebra.quadratics-factorising.q004",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Quadratics by factorising",
    "subtopicId": "gcse.algebra.quadratics-factorising",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "value",
    "tags": ["quadratics by factorising", "mixed signs"],
    "questionText": "Solve $x^2 - x - 6 = 0$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Find two numbers.", "workingLatex": "(-3)(2) = -6,\\ -3 + 2 = -1", "explanation": "We need a product of $-6$ and a sum of $-1$: these are $-3$ and $+2$.", "diagram": null },
        { "stepNumber": 2, "description": "Factorise.", "workingLatex": "(x - 3)(x + 2) = 0", "explanation": "Use the two numbers in the brackets.", "diagram": null },
        { "stepNumber": 3, "description": "Solve.", "workingLatex": "x = 3 \\ \\text{ or } \\ x = -2", "explanation": "Set each factor to zero.", "diagram": null }
      ],
      "finalAnswer": "$x = 3$ or $x = -2$"
    }
  },
  {
    "id": "gcse.algebra.quadratics-factorising.q005",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Quadratics by factorising",
    "subtopicId": "gcse.algebra.quadratics-factorising",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "value",
    "tags": ["quadratics by factorising", "common factor"],
    "questionText": "Solve $x^2 + 4x = 0$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Take out the common factor.", "workingLatex": "x(x + 4) = 0", "explanation": "Both terms share a factor of $x$; do not divide by $x$ or you lose a root.", "diagram": null },
        { "stepNumber": 2, "description": "Apply the zero-product rule.", "workingLatex": "x = 0 \\ \\text{ or } \\ x + 4 = 0", "explanation": "Set each factor to zero.", "diagram": null },
        { "stepNumber": 3, "description": "Solve.", "workingLatex": "x = 0 \\ \\text{ or } \\ x = -4", "explanation": "So the two roots are $0$ and $-4$.", "diagram": null }
      ],
      "finalAnswer": "$x = 0$ or $x = -4$"
    }
  },
  {
    "id": "gcse.algebra.quadratics-factorising.q006",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Quadratics by factorising",
    "subtopicId": "gcse.algebra.quadratics-factorising",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "value",
    "tags": ["quadratics by factorising", "difference of two squares"],
    "questionText": "Solve $x^2 - 9 = 0$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recognise a difference of two squares.", "workingLatex": "x^2 - 3^2 = 0", "explanation": "$9 = 3^2$, so this is $x^2 - 3^2$.", "diagram": null },
        { "stepNumber": 2, "description": "Factorise.", "workingLatex": "(x - 3)(x + 3) = 0", "explanation": "A difference of two squares factorises into these brackets.", "diagram": null },
        { "stepNumber": 3, "description": "Solve.", "workingLatex": "x = 3 \\ \\text{ or } \\ x = -3", "explanation": "So $x = \\pm 3$.", "diagram": null }
      ],
      "finalAnswer": "$x = 3$ or $x = -3$"
    }
  },
  {
    "id": "gcse.algebra.quadratics-factorising.q007",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Quadratics by factorising",
    "subtopicId": "gcse.algebra.quadratics-factorising",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "value",
    "tags": ["quadratics by factorising", "positive roots"],
    "questionText": "Solve $x^2 + 7x + 10 = 0$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Find two numbers.", "workingLatex": "2 \\times 5 = 10,\\ 2 + 5 = 7", "explanation": "Product $+10$, sum $+7$: the numbers are $2$ and $5$.", "diagram": null },
        { "stepNumber": 2, "description": "Factorise.", "workingLatex": "(x + 2)(x + 5) = 0", "explanation": "Use the numbers in the brackets.", "diagram": null },
        { "stepNumber": 3, "description": "Solve.", "workingLatex": "x = -2 \\ \\text{ or } \\ x = -5", "explanation": "Set each factor to zero.", "diagram": null }
      ],
      "finalAnswer": "$x = -2$ or $x = -5$"
    }
  },
  {
    "id": "gcse.algebra.quadratics-factorising.q008",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Quadratics by factorising",
    "subtopicId": "gcse.algebra.quadratics-factorising",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "value",
    "tags": ["quadratics by factorising", "mixed signs"],
    "questionText": "Solve $x^2 + 2x - 15 = 0$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Find two numbers.", "workingLatex": "5 \\times (-3) = -15,\\ 5 - 3 = 2", "explanation": "Product $-15$, sum $+2$: the numbers are $+5$ and $-3$.", "diagram": null },
        { "stepNumber": 2, "description": "Factorise.", "workingLatex": "(x + 5)(x - 3) = 0", "explanation": "Use the numbers in the brackets.", "diagram": null },
        { "stepNumber": 3, "description": "Solve.", "workingLatex": "x = -5 \\ \\text{ or } \\ x = 3", "explanation": "Set each factor to zero.", "diagram": null }
      ],
      "finalAnswer": "$x = -5$ or $x = 3$"
    }
  },
  {
    "id": "gcse.algebra.quadratics-factorising.q009",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Quadratics by factorising",
    "subtopicId": "gcse.algebra.quadratics-factorising",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "value",
    "tags": ["quadratics by factorising", "repeated root", "perfect square"],
    "questionText": "Solve $x^2 - 6x + 9 = 0$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Find two numbers.", "workingLatex": "(-3)(-3) = 9,\\ -3 - 3 = -6", "explanation": "Product $+9$, sum $-6$: both numbers are $-3$.", "diagram": null },
        { "stepNumber": 2, "description": "Factorise.", "workingLatex": "(x - 3)(x - 3) = (x - 3)^2 = 0", "explanation": "This is a perfect square, so both factors are the same.", "diagram": null },
        { "stepNumber": 3, "description": "Solve.", "workingLatex": "x = 3", "explanation": "There is one repeated root, $x = 3$ — the curve touches the $x$-axis there.", "diagram": null }
      ],
      "finalAnswer": "$x = 3$ (a repeated root)"
    }
  },
  {
    "id": "gcse.algebra.quadratics-factorising.q010",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Quadratics by factorising",
    "subtopicId": "gcse.algebra.quadratics-factorising",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "value",
    "tags": ["quadratics by factorising", "difference of two squares"],
    "questionText": "Solve $x^2 - 25 = 0$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recognise a difference of two squares.", "workingLatex": "x^2 - 5^2 = 0", "explanation": "$25 = 5^2$.", "diagram": null },
        { "stepNumber": 2, "description": "Factorise.", "workingLatex": "(x - 5)(x + 5) = 0", "explanation": "Factor into the difference and sum.", "diagram": null },
        { "stepNumber": 3, "description": "Solve.", "workingLatex": "x = \\pm 5", "explanation": "So $x = 5$ or $x = -5$.", "diagram": null }
      ],
      "finalAnswer": "$x = 5$ or $x = -5$"
    }
  },
  {
    "id": "gcse.algebra.quadratics-factorising.q011",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Quadratics by factorising",
    "subtopicId": "gcse.algebra.quadratics-factorising",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "value",
    "tags": ["quadratics by factorising", "rearranging", "standard form"],
    "questionText": "Solve $x^2 = 5x$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Move everything to one side.", "workingLatex": "x^2 - 5x = 0", "explanation": "Never divide by $x$ — that would lose the root $x = 0$. Rearrange to standard form instead.", "diagram": null },
        { "stepNumber": 2, "description": "Take out the common factor.", "workingLatex": "x(x - 5) = 0", "explanation": "Both terms share a factor of $x$.", "diagram": null },
        { "stepNumber": 3, "description": "Solve.", "workingLatex": "x = 0 \\ \\text{ or } \\ x = 5", "explanation": "Set each factor to zero.", "diagram": null }
      ],
      "finalAnswer": "$x = 0$ or $x = 5$"
    }
  },
  {
    "id": "gcse.algebra.quadratics-factorising.q012",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Quadratics by factorising",
    "subtopicId": "gcse.algebra.quadratics-factorising",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "value",
    "tags": ["quadratics by factorising", "rearranging", "standard form"],
    "questionText": "Solve $x^2 + 3x = 10$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Rearrange to standard form.", "workingLatex": "x^2 + 3x - 10 = 0", "explanation": "Subtract $10$ so the equation equals zero.", "diagram": null },
        { "stepNumber": 2, "description": "Find two numbers.", "workingLatex": "5 \\times (-2) = -10,\\ 5 - 2 = 3", "explanation": "Product $-10$, sum $+3$: the numbers are $+5$ and $-2$.", "diagram": null },
        { "stepNumber": 3, "description": "Factorise.", "workingLatex": "(x + 5)(x - 2) = 0", "explanation": "Use the numbers in the brackets.", "diagram": null },
        { "stepNumber": 4, "description": "Solve.", "workingLatex": "x = -5 \\ \\text{ or } \\ x = 2", "explanation": "Set each factor to zero.", "diagram": null }
      ],
      "finalAnswer": "$x = -5$ or $x = 2$"
    }
  },
  {
    "id": "gcse.algebra.quadratics-factorising.q013",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Quadratics by factorising",
    "subtopicId": "gcse.algebra.quadratics-factorising",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "value",
    "tags": ["quadratics by factorising", "mixed signs"],
    "questionText": "Solve $x^2 - 4x - 12 = 0$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Find two numbers.", "workingLatex": "(-6)(2) = -12,\\ -6 + 2 = -4", "explanation": "Product $-12$, sum $-4$: the numbers are $-6$ and $+2$.", "diagram": null },
        { "stepNumber": 2, "description": "Factorise.", "workingLatex": "(x - 6)(x + 2) = 0", "explanation": "Use the numbers in the brackets.", "diagram": null },
        { "stepNumber": 3, "description": "Solve.", "workingLatex": "x = 6 \\ \\text{ or } \\ x = -2", "explanation": "Set each factor to zero.", "diagram": null }
      ],
      "finalAnswer": "$x = 6$ or $x = -2$"
    }
  },
  {
    "id": "gcse.algebra.quadratics-factorising.q014",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Quadratics by factorising",
    "subtopicId": "gcse.algebra.quadratics-factorising",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "value",
    "tags": ["quadratics by factorising", "factorised form"],
    "questionText": "Solve $x(x - 7) = 0$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Apply the zero-product rule.", "workingLatex": "x = 0 \\ \\text{ or } \\ x - 7 = 0", "explanation": "One of the two factors must be zero.", "diagram": null },
        { "stepNumber": 2, "description": "Solve.", "workingLatex": "x = 0 \\ \\text{ or } \\ x = 7", "explanation": "So the roots are $0$ and $7$.", "diagram": null }
      ],
      "finalAnswer": "$x = 0$ or $x = 7$"
    }
  },
  {
    "id": "gcse.algebra.quadratics-factorising.q015",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Quadratics by factorising",
    "subtopicId": "gcse.algebra.quadratics-factorising",
    "difficulty": "Hard",
    "marks": 4,
    "answerType": "value",
    "tags": ["quadratics by factorising", "leading coefficient", "fraction root"],
    "questionText": "Solve $2x^2 + 7x + 3 = 0$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Multiply $a$ and $c$.", "workingLatex": "2 \\times 3 = 6", "explanation": "For $ax^2 + bx + c$, look for two numbers multiplying to $ac = 6$ and adding to $b = 7$.", "diagram": null },
        { "stepNumber": 2, "description": "Find the numbers and split.", "workingLatex": "6 \\times 1 = 6,\\ 6 + 1 = 7", "explanation": "Split the middle term: $2x^2 + 6x + x + 3$.", "diagram": null },
        { "stepNumber": 3, "description": "Factorise by grouping.", "workingLatex": "2x(x + 3) + 1(x + 3)", "explanation": "Factor each pair; the common bracket is $(x + 3)$.", "diagram": null },
        { "stepNumber": 4, "description": "Write the full factorisation.", "workingLatex": "(2x + 1)(x + 3) = 0", "explanation": "Combine into two brackets.", "diagram": null },
        { "stepNumber": 5, "description": "Solve.", "workingLatex": "x = -\\tfrac{1}{2} \\ \\text{ or } \\ x = -3", "explanation": "Set each factor to zero.", "diagram": null }
      ],
      "finalAnswer": "$x = -\\tfrac{1}{2}$ or $x = -3$"
    }
  },
  {
    "id": "gcse.algebra.quadratics-factorising.q016",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Quadratics by factorising",
    "subtopicId": "gcse.algebra.quadratics-factorising",
    "difficulty": "Intermediate",
    "marks": 2,
    "answerType": "value",
    "tags": ["quadratics by factorising", "reading a graph", "roots"],
    "questionText": "The graph of $y = x^2 - 2x - 8$ crosses the $x$-axis at two points. Use factorising to find their $x$-coordinates.",
    "questionDiagram": {
      "kind": "functionGraph",
      "xMin": -4, "xMax": 6, "yMin": -10, "yMax": 8,
      "curves": [{ "fn": { "base": "parab", "a": 1, "b": 1, "c": 1, "d": -9 }, "color": "accent", "label": "y=x^2-2x-8" }],
      "points": [
        { "x": -2, "y": 0, "label": "(-2,0)", "color": "ink" },
        { "x": 4, "y": 0, "label": "(4,0)", "color": "ink" }
      ],
      "alt": "A parabola crossing the x-axis at -2 and 4."
    },
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Set $y = 0$.", "workingLatex": "x^2 - 2x - 8 = 0", "explanation": "The crossings are where the curve meets the $x$-axis.", "diagram": null },
        { "stepNumber": 2, "description": "Find two numbers.", "workingLatex": "(-4)(2) = -8,\\ -4 + 2 = -2", "explanation": "Product $-8$, sum $-2$: the numbers are $-4$ and $+2$.", "diagram": null },
        { "stepNumber": 3, "description": "Factorise and solve.", "workingLatex": "(x - 4)(x + 2) = 0", "explanation": "This gives $x = 4$ or $x = -2$.", "diagram": null },
        { "stepNumber": 4, "description": "State the crossings.", "workingLatex": "(-2, 0),\\ (4, 0)", "explanation": "These match the points shown on the graph.", "diagram": null }
      ],
      "finalAnswer": "$x = -2$ and $x = 4$"
    }
  },
  {
    "id": "gcse.algebra.quadratics-factorising.q017",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Quadratics by factorising",
    "subtopicId": "gcse.algebra.quadratics-factorising",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "value",
    "tags": ["quadratics by factorising", "common factor"],
    "questionText": "Solve $3x^2 - 12x = 0$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Take out the common factor.", "workingLatex": "3x(x - 4) = 0", "explanation": "Both terms share $3x$.", "diagram": null },
        { "stepNumber": 2, "description": "Apply the zero-product rule.", "workingLatex": "3x = 0 \\ \\text{ or } \\ x - 4 = 0", "explanation": "Set each factor to zero (the constant $3$ does not affect the roots).", "diagram": null },
        { "stepNumber": 3, "description": "Solve.", "workingLatex": "x = 0 \\ \\text{ or } \\ x = 4", "explanation": "So the roots are $0$ and $4$.", "diagram": null }
      ],
      "finalAnswer": "$x = 0$ or $x = 4$"
    }
  },
  {
    "id": "gcse.algebra.quadratics-factorising.q018",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Quadratics by factorising",
    "subtopicId": "gcse.algebra.quadratics-factorising",
    "difficulty": "Hard",
    "marks": 4,
    "answerType": "value",
    "tags": ["quadratics by factorising", "leading coefficient", "fraction root"],
    "questionText": "Solve $3x^2 - 10x + 8 = 0$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Multiply $a$ and $c$.", "workingLatex": "3 \\times 8 = 24", "explanation": "Find two numbers multiplying to $24$ and adding to $-10$.", "diagram": null },
        { "stepNumber": 2, "description": "Identify the numbers.", "workingLatex": "-6 \\times -4 = 24,\\ -6 - 4 = -10", "explanation": "The numbers are $-6$ and $-4$; split the middle term.", "diagram": null },
        { "stepNumber": 3, "description": "Group and factorise.", "workingLatex": "3x^2 - 6x - 4x + 8", "explanation": "This becomes $3x(x - 2) - 4(x - 2)$.", "diagram": null },
        { "stepNumber": 4, "description": "Write the factorisation.", "workingLatex": "(3x - 4)(x - 2) = 0", "explanation": "The common bracket is $(x - 2)$.", "diagram": null },
        { "stepNumber": 5, "description": "Solve.", "workingLatex": "x = \\tfrac{4}{3} \\ \\text{ or } \\ x = 2", "explanation": "Set each factor to zero.", "diagram": null }
      ],
      "finalAnswer": "$x = \\tfrac{4}{3}$ or $x = 2$"
    }
  },
  {
    "id": "gcse.algebra.quadratics-factorising.q019",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Quadratics by factorising",
    "subtopicId": "gcse.algebra.quadratics-factorising",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "value",
    "tags": ["quadratics by factorising", "positive roots"],
    "questionText": "Solve $x^2 - 9x + 20 = 0$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Find two numbers.", "workingLatex": "(-4)(-5) = 20,\\ -4 - 5 = -9", "explanation": "Product $+20$, sum $-9$: the numbers are $-4$ and $-5$.", "diagram": null },
        { "stepNumber": 2, "description": "Factorise.", "workingLatex": "(x - 4)(x - 5) = 0", "explanation": "Use the numbers in the brackets.", "diagram": null },
        { "stepNumber": 3, "description": "Solve.", "workingLatex": "x = 4 \\ \\text{ or } \\ x = 5", "explanation": "Set each factor to zero.", "diagram": null }
      ],
      "finalAnswer": "$x = 4$ or $x = 5$"
    }
  },
  {
    "id": "gcse.algebra.quadratics-factorising.q020",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Quadratics by factorising",
    "subtopicId": "gcse.algebra.quadratics-factorising",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "value",
    "tags": ["quadratics by factorising", "difference of two squares", "coefficient"],
    "questionText": "Solve $4x^2 - 9 = 0$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recognise a difference of two squares.", "workingLatex": "(2x)^2 - 3^2 = 0", "explanation": "$4x^2 = (2x)^2$ and $9 = 3^2$.", "diagram": null },
        { "stepNumber": 2, "description": "Factorise.", "workingLatex": "(2x - 3)(2x + 3) = 0", "explanation": "Apply the difference-of-two-squares pattern.", "diagram": null },
        { "stepNumber": 3, "description": "Solve.", "workingLatex": "x = \\tfrac{3}{2} \\ \\text{ or } \\ x = -\\tfrac{3}{2}", "explanation": "Set each factor to zero.", "diagram": null }
      ],
      "finalAnswer": "$x = \\tfrac{3}{2}$ or $x = -\\tfrac{3}{2}$"
    }
  },
  {
    "id": "gcse.algebra.quadratics-factorising.q021",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Quadratics by factorising",
    "subtopicId": "gcse.algebra.quadratics-factorising",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "value",
    "tags": ["quadratics by factorising", "mixed signs"],
    "questionText": "Solve $x^2 + x - 12 = 0$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Find two numbers.", "workingLatex": "4 \\times (-3) = -12,\\ 4 - 3 = 1", "explanation": "Product $-12$, sum $+1$: the numbers are $+4$ and $-3$.", "diagram": null },
        { "stepNumber": 2, "description": "Factorise.", "workingLatex": "(x + 4)(x - 3) = 0", "explanation": "Use the numbers in the brackets.", "diagram": null },
        { "stepNumber": 3, "description": "Solve.", "workingLatex": "x = -4 \\ \\text{ or } \\ x = 3", "explanation": "Set each factor to zero.", "diagram": null }
      ],
      "finalAnswer": "$x = -4$ or $x = 3$"
    }
  },
  {
    "id": "gcse.algebra.quadratics-factorising.q022",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Quadratics by factorising",
    "subtopicId": "gcse.algebra.quadratics-factorising",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "value",
    "tags": ["quadratics by factorising", "factorised form", "repeated"],
    "questionText": "Solve $(x + 4)^2 = 0$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Rewrite as two equal factors.", "workingLatex": "(x + 4)(x + 4) = 0", "explanation": "A square means the same factor twice.", "diagram": null },
        { "stepNumber": 2, "description": "Solve.", "workingLatex": "x + 4 = 0 \\Rightarrow x = -4", "explanation": "Both factors give the same value, so there is one repeated root.", "diagram": null }
      ],
      "finalAnswer": "$x = -4$ (a repeated root)"
    }
  },
  {
    "id": "gcse.algebra.quadratics-factorising.q023",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Quadratics by factorising",
    "subtopicId": "gcse.algebra.quadratics-factorising",
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "value",
    "tags": ["quadratics by factorising", "leading coefficient", "mixed signs"],
    "questionText": "Solve $6x^2 + x - 2 = 0$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Multiply $a$ and $c$.", "workingLatex": "6 \\times (-2) = -12", "explanation": "Find two numbers multiplying to $-12$ and adding to $+1$.", "diagram": null },
        { "stepNumber": 2, "description": "Identify the numbers.", "workingLatex": "4 \\times (-3) = -12,\\ 4 - 3 = 1", "explanation": "The numbers are $+4$ and $-3$; split the middle term.", "diagram": null },
        { "stepNumber": 3, "description": "Group and factorise.", "workingLatex": "6x^2 + 4x - 3x - 2", "explanation": "This becomes $2x(3x + 2) - 1(3x + 2)$.", "diagram": null },
        { "stepNumber": 4, "description": "Write the factorisation.", "workingLatex": "(2x - 1)(3x + 2) = 0", "explanation": "The common bracket is $(3x + 2)$.", "diagram": null },
        { "stepNumber": 5, "description": "Solve.", "workingLatex": "x = \\tfrac{1}{2} \\ \\text{ or } \\ x = -\\tfrac{2}{3}", "explanation": "Set each factor to zero.", "diagram": null }
      ],
      "finalAnswer": "$x = \\tfrac{1}{2}$ or $x = -\\tfrac{2}{3}$"
    }
  },
  {
    "id": "gcse.algebra.quadratics-factorising.q024",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Quadratics by factorising",
    "subtopicId": "gcse.algebra.quadratics-factorising",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "value",
    "tags": ["quadratics by factorising", "rearranging", "standard form"],
    "questionText": "Solve $x^2 = 3x + 18$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Rearrange to standard form.", "workingLatex": "x^2 - 3x - 18 = 0", "explanation": "Bring all terms to the left so the equation equals zero.", "diagram": null },
        { "stepNumber": 2, "description": "Find two numbers.", "workingLatex": "(-6)(3) = -18,\\ -6 + 3 = -3", "explanation": "Product $-18$, sum $-3$: the numbers are $-6$ and $+3$.", "diagram": null },
        { "stepNumber": 3, "description": "Factorise.", "workingLatex": "(x - 6)(x + 3) = 0", "explanation": "Use the numbers in the brackets.", "diagram": null },
        { "stepNumber": 4, "description": "Solve.", "workingLatex": "x = 6 \\ \\text{ or } \\ x = -3", "explanation": "Set each factor to zero.", "diagram": null }
      ],
      "finalAnswer": "$x = 6$ or $x = -3$"
    }
  },
  {
    "id": "gcse.algebra.quadratics-factorising.q025",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Quadratics by factorising",
    "subtopicId": "gcse.algebra.quadratics-factorising",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "value",
    "tags": ["quadratics by factorising", "positive roots"],
    "questionText": "Solve $x^2 - 11x + 24 = 0$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Find two numbers.", "workingLatex": "(-3)(-8) = 24,\\ -3 - 8 = -11", "explanation": "Product $+24$, sum $-11$: the numbers are $-3$ and $-8$.", "diagram": null },
        { "stepNumber": 2, "description": "Factorise.", "workingLatex": "(x - 3)(x - 8) = 0", "explanation": "Use the numbers in the brackets.", "diagram": null },
        { "stepNumber": 3, "description": "Solve.", "workingLatex": "x = 3 \\ \\text{ or } \\ x = 8", "explanation": "Set each factor to zero.", "diagram": null }
      ],
      "finalAnswer": "$x = 3$ or $x = 8$"
    }
  },
  {
    "id": "gcse.algebra.quadratics-factorising.q026",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Quadratics by factorising",
    "subtopicId": "gcse.algebra.quadratics-factorising",
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "value",
    "tags": ["quadratics by factorising", "leading coefficient", "positive roots"],
    "questionText": "Solve $2x^2 - 11x + 12 = 0$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Multiply $a$ and $c$.", "workingLatex": "2 \\times 12 = 24", "explanation": "Find two numbers multiplying to $24$ and adding to $-11$.", "diagram": null },
        { "stepNumber": 2, "description": "Identify the numbers.", "workingLatex": "-3 \\times -8 = 24,\\ -3 - 8 = -11", "explanation": "The numbers are $-3$ and $-8$; split the middle term.", "diagram": null },
        { "stepNumber": 3, "description": "Group and factorise.", "workingLatex": "2x^2 - 3x - 8x + 12", "explanation": "This becomes $x(2x - 3) - 4(2x - 3)$.", "diagram": null },
        { "stepNumber": 4, "description": "Write the factorisation.", "workingLatex": "(x - 4)(2x - 3) = 0", "explanation": "The common bracket is $(2x - 3)$.", "diagram": null },
        { "stepNumber": 5, "description": "Solve.", "workingLatex": "x = 4 \\ \\text{ or } \\ x = \\tfrac{3}{2}", "explanation": "Set each factor to zero.", "diagram": null }
      ],
      "finalAnswer": "$x = 4$ or $x = \\tfrac{3}{2}$"
    }
  },
  {
    "id": "gcse.algebra.quadratics-factorising.q027",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Quadratics by factorising",
    "subtopicId": "gcse.algebra.quadratics-factorising",
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "value",
    "tags": ["quadratics by factorising", "brackets", "rearranging"],
    "questionText": "Solve $(x + 1)(x - 2) = 4$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Expand the left-hand side.", "workingLatex": "x^2 - x - 2 = 4", "explanation": "You cannot use the zero-product rule yet because the right side is not zero.", "diagram": null },
        { "stepNumber": 2, "description": "Rearrange to standard form.", "workingLatex": "x^2 - x - 6 = 0", "explanation": "Subtract $4$ from both sides.", "diagram": null },
        { "stepNumber": 3, "description": "Factorise.", "workingLatex": "(x - 3)(x + 2) = 0", "explanation": "Numbers $-3$ and $+2$ multiply to $-6$ and add to $-1$.", "diagram": null },
        { "stepNumber": 4, "description": "Solve.", "workingLatex": "x = 3 \\ \\text{ or } \\ x = -2", "explanation": "Set each factor to zero.", "diagram": null }
      ],
      "finalAnswer": "$x = 3$ or $x = -2$"
    }
  },
  {
    "id": "gcse.algebra.quadratics-factorising.q028",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Quadratics by factorising",
    "subtopicId": "gcse.algebra.quadratics-factorising",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "value",
    "tags": ["quadratics by factorising", "difference of two squares", "rearranging"],
    "questionText": "Solve $x^2 = 49$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Rearrange to standard form.", "workingLatex": "x^2 - 49 = 0", "explanation": "Bring the constant across to get a difference of two squares.", "diagram": null },
        { "stepNumber": 2, "description": "Factorise.", "workingLatex": "(x - 7)(x + 7) = 0", "explanation": "$49 = 7^2$, so this is a difference of two squares.", "diagram": null },
        { "stepNumber": 3, "description": "Solve.", "workingLatex": "x = \\pm 7", "explanation": "Remember both the positive and negative roots.", "diagram": null }
      ],
      "finalAnswer": "$x = 7$ or $x = -7$"
    }
  },
  {
    "id": "gcse.algebra.quadratics-factorising.q029",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Quadratics by factorising",
    "subtopicId": "gcse.algebra.quadratics-factorising",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "value",
    "tags": ["quadratics by factorising", "mixed signs"],
    "questionText": "Solve $x^2 - 2x - 35 = 0$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Find two numbers.", "workingLatex": "(-7)(5) = -35,\\ -7 + 5 = -2", "explanation": "Product $-35$, sum $-2$: the numbers are $-7$ and $+5$.", "diagram": null },
        { "stepNumber": 2, "description": "Factorise.", "workingLatex": "(x - 7)(x + 5) = 0", "explanation": "Use the numbers in the brackets.", "diagram": null },
        { "stepNumber": 3, "description": "Solve.", "workingLatex": "x = 7 \\ \\text{ or } \\ x = -5", "explanation": "Set each factor to zero.", "diagram": null }
      ],
      "finalAnswer": "$x = 7$ or $x = -5$"
    }
  },
  {
    "id": "gcse.algebra.quadratics-factorising.q030",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Quadratics by factorising",
    "subtopicId": "gcse.algebra.quadratics-factorising",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "value",
    "tags": ["quadratics by factorising", "area", "context"],
    "questionText": "A rectangle has width $x$ cm and length $(x + 3)$ cm. Its area is $40$ cm². Find $x$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Write the area equation.", "workingLatex": "x(x + 3) = 40", "explanation": "Area is width times length.", "diagram": null },
        { "stepNumber": 2, "description": "Expand.", "workingLatex": "x^2 + 3x = 40", "explanation": "Multiply out the bracket.", "diagram": null },
        { "stepNumber": 3, "description": "Rearrange to standard form.", "workingLatex": "x^2 + 3x - 40 = 0", "explanation": "Subtract $40$ from both sides.", "diagram": null },
        { "stepNumber": 4, "description": "Factorise.", "workingLatex": "(x + 8)(x - 5) = 0", "explanation": "Numbers $+8$ and $-5$ multiply to $-40$ and add to $+3$.", "diagram": null },
        { "stepNumber": 5, "description": "Solve.", "workingLatex": "x = -8 \\ \\text{ or } \\ x = 5", "explanation": "Two algebraic solutions arise.", "diagram": null },
        { "stepNumber": 6, "description": "Reject the impossible value.", "workingLatex": "x = 5", "explanation": "A length cannot be negative, so $x = -8$ is rejected; $x = 5$ cm.", "diagram": null }
      ],
      "finalAnswer": "$x = 5$ cm (the negative root is rejected)"
    }
  },
  {
    "id": "gcse.algebra.quadratics-factorising.q031",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Quadratics by factorising",
    "subtopicId": "gcse.algebra.quadratics-factorising",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "value",
    "tags": ["quadratics by factorising", "factorised form"],
    "questionText": "Solve $(2x - 1)(x + 6) = 0$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Apply the zero-product rule.", "workingLatex": "2x - 1 = 0 \\ \\text{ or } \\ x + 6 = 0", "explanation": "One of the two factors must be zero.", "diagram": null },
        { "stepNumber": 2, "description": "Solve each factor.", "workingLatex": "x = \\tfrac{1}{2} \\ \\text{ or } \\ x = -6", "explanation": "The first bracket gives a fractional root.", "diagram": null }
      ],
      "finalAnswer": "$x = \\tfrac{1}{2}$ or $x = -6$"
    }
  },
  {
    "id": "gcse.algebra.quadratics-factorising.q032",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Quadratics by factorising",
    "subtopicId": "gcse.algebra.quadratics-factorising",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "value",
    "tags": ["quadratics by factorising", "common factor"],
    "questionText": "Solve $5x^2 = 15x$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Rearrange to standard form.", "workingLatex": "5x^2 - 15x = 0", "explanation": "Move all terms to one side; do not divide by $x$.", "diagram": null },
        { "stepNumber": 2, "description": "Take out the common factor.", "workingLatex": "5x(x - 3) = 0", "explanation": "Both terms share $5x$.", "diagram": null },
        { "stepNumber": 3, "description": "Solve.", "workingLatex": "x = 0 \\ \\text{ or } \\ x = 3", "explanation": "Set each factor to zero.", "diagram": null }
      ],
      "finalAnswer": "$x = 0$ or $x = 3$"
    }
  },
  {
    "id": "gcse.algebra.quadratics-factorising.q033",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Quadratics by factorising",
    "subtopicId": "gcse.algebra.quadratics-factorising",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "value",
    "tags": ["quadratics by factorising", "positive roots"],
    "questionText": "Solve $x^2 - 10x + 21 = 0$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Find two numbers.", "workingLatex": "(-3)(-7) = 21,\\ -3 - 7 = -10", "explanation": "Product $+21$, sum $-10$: the numbers are $-3$ and $-7$.", "diagram": null },
        { "stepNumber": 2, "description": "Factorise.", "workingLatex": "(x - 3)(x - 7) = 0", "explanation": "Use the numbers in the brackets.", "diagram": null },
        { "stepNumber": 3, "description": "Solve.", "workingLatex": "x = 3 \\ \\text{ or } \\ x = 7", "explanation": "Set each factor to zero.", "diagram": null }
      ],
      "finalAnswer": "$x = 3$ or $x = 7$"
    }
  },
  {
    "id": "gcse.algebra.quadratics-factorising.q034",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Quadratics by factorising",
    "subtopicId": "gcse.algebra.quadratics-factorising",
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "value",
    "tags": ["quadratics by factorising", "leading coefficient", "difference of two squares"],
    "questionText": "Solve $9x^2 - 16 = 0$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recognise a difference of two squares.", "workingLatex": "(3x)^2 - 4^2 = 0", "explanation": "$9x^2 = (3x)^2$ and $16 = 4^2$.", "diagram": null },
        { "stepNumber": 2, "description": "Factorise.", "workingLatex": "(3x - 4)(3x + 4) = 0", "explanation": "Apply the difference-of-two-squares pattern.", "diagram": null },
        { "stepNumber": 3, "description": "Solve.", "workingLatex": "x = \\tfrac{4}{3} \\ \\text{ or } \\ x = -\\tfrac{4}{3}", "explanation": "Set each factor to zero.", "diagram": null }
      ],
      "finalAnswer": "$x = \\tfrac{4}{3}$ or $x = -\\tfrac{4}{3}$"
    }
  },
  {
    "id": "gcse.algebra.quadratics-factorising.q035",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Quadratics by factorising",
    "subtopicId": "gcse.algebra.quadratics-factorising",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "value",
    "tags": ["quadratics by factorising", "mixed signs"],
    "questionText": "Solve $x^2 + 6x - 16 = 0$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Find two numbers.", "workingLatex": "8 \\times (-2) = -16,\\ 8 - 2 = 6", "explanation": "Product $-16$, sum $+6$: the numbers are $+8$ and $-2$.", "diagram": null },
        { "stepNumber": 2, "description": "Factorise.", "workingLatex": "(x + 8)(x - 2) = 0", "explanation": "Use the numbers in the brackets.", "diagram": null },
        { "stepNumber": 3, "description": "Solve.", "workingLatex": "x = -8 \\ \\text{ or } \\ x = 2", "explanation": "Set each factor to zero.", "diagram": null }
      ],
      "finalAnswer": "$x = -8$ or $x = 2$"
    }
  },
  {
    "id": "gcse.algebra.quadratics-factorising.q036",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Quadratics by factorising",
    "subtopicId": "gcse.algebra.quadratics-factorising",
    "difficulty": "Intermediate",
    "marks": 2,
    "answerType": "value",
    "tags": ["quadratics by factorising", "reading a graph", "approximate"],
    "questionText": "The graph of $y = x^2 - 3x - 1$ crosses the $x$-axis near $x = -0.3$ and $x = 3.3$. What do these values represent?",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall the meaning of a crossing.", "workingLatex": "y = 0", "explanation": "Where the curve meets the $x$-axis, $y = 0$.", "diagram": null },
        { "stepNumber": 2, "description": "Interpret.", "workingLatex": "x^2 - 3x - 1 = 0", "explanation": "So these $x$-values are approximate solutions of the equation $x^2 - 3x - 1 = 0$.", "diagram": null },
        { "stepNumber": 3, "description": "Note why they are approximate.", "workingLatex": "\\text{does not factorise nicely}", "explanation": "This quadratic has no whole-number factors, so a graph gives only estimated roots.", "diagram": null }
      ],
      "finalAnswer": "They are the (approximate) solutions of $x^2 - 3x - 1 = 0$, read from where the curve crosses the $x$-axis."
    }
  },
  {
    "id": "gcse.algebra.quadratics-factorising.q037",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Quadratics by factorising",
    "subtopicId": "gcse.algebra.quadratics-factorising",
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "value",
    "tags": ["quadratics by factorising", "leading coefficient", "mixed signs"],
    "questionText": "Solve $4x^2 - 4x - 3 = 0$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Multiply $a$ and $c$.", "workingLatex": "4 \\times (-3) = -12", "explanation": "Find two numbers multiplying to $-12$ and adding to $-4$.", "diagram": null },
        { "stepNumber": 2, "description": "Identify the numbers.", "workingLatex": "-6 \\times 2 = -12,\\ -6 + 2 = -4", "explanation": "The numbers are $-6$ and $+2$; split the middle term.", "diagram": null },
        { "stepNumber": 3, "description": "Group and factorise.", "workingLatex": "4x^2 - 6x + 2x - 3", "explanation": "This becomes $2x(2x - 3) + 1(2x - 3)$.", "diagram": null },
        { "stepNumber": 4, "description": "Write the factorisation.", "workingLatex": "(2x + 1)(2x - 3) = 0", "explanation": "The common bracket is $(2x - 3)$.", "diagram": null },
        { "stepNumber": 5, "description": "Solve.", "workingLatex": "x = -\\tfrac{1}{2} \\ \\text{ or } \\ x = \\tfrac{3}{2}", "explanation": "Set each factor to zero.", "diagram": null }
      ],
      "finalAnswer": "$x = -\\tfrac{1}{2}$ or $x = \\tfrac{3}{2}$"
    }
  },
  {
    "id": "gcse.algebra.quadratics-factorising.q038",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Quadratics by factorising",
    "subtopicId": "gcse.algebra.quadratics-factorising",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "value",
    "tags": ["quadratics by factorising", "repeated root"],
    "questionText": "Solve $x^2 + 8x + 16 = 0$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Find two numbers.", "workingLatex": "4 \\times 4 = 16,\\ 4 + 4 = 8", "explanation": "Product $+16$, sum $+8$: both numbers are $+4$.", "diagram": null },
        { "stepNumber": 2, "description": "Factorise.", "workingLatex": "(x + 4)^2 = 0", "explanation": "This is a perfect square.", "diagram": null },
        { "stepNumber": 3, "description": "Solve.", "workingLatex": "x = -4", "explanation": "There is one repeated root, $x = -4$.", "diagram": null }
      ],
      "finalAnswer": "$x = -4$ (a repeated root)"
    }
  },
  {
    "id": "gcse.algebra.quadratics-factorising.q039",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Quadratics by factorising",
    "subtopicId": "gcse.algebra.quadratics-factorising",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "value",
    "tags": ["quadratics by factorising", "rearranging", "mixed signs"],
    "questionText": "Solve $x^2 + 10 = 7x$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Rearrange to standard form.", "workingLatex": "x^2 - 7x + 10 = 0", "explanation": "Subtract $7x$ from both sides.", "diagram": null },
        { "stepNumber": 2, "description": "Find two numbers.", "workingLatex": "(-2)(-5) = 10,\\ -2 - 5 = -7", "explanation": "Product $+10$, sum $-7$: the numbers are $-2$ and $-5$.", "diagram": null },
        { "stepNumber": 3, "description": "Factorise.", "workingLatex": "(x - 2)(x - 5) = 0", "explanation": "Use the numbers in the brackets.", "diagram": null },
        { "stepNumber": 4, "description": "Solve.", "workingLatex": "x = 2 \\ \\text{ or } \\ x = 5", "explanation": "Set each factor to zero.", "diagram": null }
      ],
      "finalAnswer": "$x = 2$ or $x = 5$"
    }
  },
  {
    "id": "gcse.algebra.quadratics-factorising.q040",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Quadratics by factorising",
    "subtopicId": "gcse.algebra.quadratics-factorising",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "value",
    "tags": ["quadratics by factorising", "consecutive integers", "context"],
    "questionText": "The product of two consecutive positive integers is $56$. By forming a quadratic, find the two integers.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Set up an expression.", "workingLatex": "n(n + 1) = 56", "explanation": "Let the integers be $n$ and $n + 1$.", "diagram": null },
        { "stepNumber": 2, "description": "Expand.", "workingLatex": "n^2 + n = 56", "explanation": "Multiply out the bracket.", "diagram": null },
        { "stepNumber": 3, "description": "Rearrange to standard form.", "workingLatex": "n^2 + n - 56 = 0", "explanation": "Subtract $56$ from both sides.", "diagram": null },
        { "stepNumber": 4, "description": "Factorise.", "workingLatex": "(n + 8)(n - 7) = 0", "explanation": "Numbers $+8$ and $-7$ multiply to $-56$ and add to $+1$.", "diagram": null },
        { "stepNumber": 5, "description": "Solve.", "workingLatex": "n = -8 \\ \\text{ or } \\ n = 7", "explanation": "Two algebraic solutions arise.", "diagram": null },
        { "stepNumber": 6, "description": "Choose the valid value.", "workingLatex": "n = 7", "explanation": "The integers are positive, so $n = 7$, giving $7$ and $8$.", "diagram": null }
      ],
      "finalAnswer": "The integers are $7$ and $8$."
    }
  },
  {
    "id": "gcse.algebra.quadratics-factorising.q041",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Quadratics by factorising",
    "subtopicId": "gcse.algebra.quadratics-factorising",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "value",
    "tags": ["quadratics by factorising", "mixed signs"],
    "questionText": "Solve $x^2 - 3x - 10 = 0$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Find two numbers.", "workingLatex": "(-5)(2) = -10,\\ -5 + 2 = -3", "explanation": "Product $-10$, sum $-3$: the numbers are $-5$ and $+2$.", "diagram": null },
        { "stepNumber": 2, "description": "Factorise.", "workingLatex": "(x - 5)(x + 2) = 0", "explanation": "Use the numbers in the brackets.", "diagram": null },
        { "stepNumber": 3, "description": "Solve.", "workingLatex": "x = 5 \\ \\text{ or } \\ x = -2", "explanation": "Set each factor to zero.", "diagram": null }
      ],
      "finalAnswer": "$x = 5$ or $x = -2$"
    }
  },
  {
    "id": "gcse.algebra.quadratics-factorising.q042",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Quadratics by factorising",
    "subtopicId": "gcse.algebra.quadratics-factorising",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "value",
    "tags": ["quadratics by factorising", "common factor"],
    "questionText": "Solve $x^2 - 6x = 0$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Take out the common factor.", "workingLatex": "x(x - 6) = 0", "explanation": "Both terms share a factor of $x$.", "diagram": null },
        { "stepNumber": 2, "description": "Solve.", "workingLatex": "x = 0 \\ \\text{ or } \\ x = 6", "explanation": "Set each factor to zero.", "diagram": null }
      ],
      "finalAnswer": "$x = 0$ or $x = 6$"
    }
  },
  {
    "id": "gcse.algebra.quadratics-factorising.q043",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Quadratics by factorising",
    "subtopicId": "gcse.algebra.quadratics-factorising",
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "value",
    "tags": ["quadratics by factorising", "leading coefficient", "positive roots"],
    "questionText": "Solve $5x^2 - 13x + 6 = 0$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Multiply $a$ and $c$.", "workingLatex": "5 \\times 6 = 30", "explanation": "Find two numbers multiplying to $30$ and adding to $-13$.", "diagram": null },
        { "stepNumber": 2, "description": "Identify the numbers.", "workingLatex": "-10 \\times -3 = 30,\\ -10 - 3 = -13", "explanation": "The numbers are $-10$ and $-3$; split the middle term.", "diagram": null },
        { "stepNumber": 3, "description": "Group and factorise.", "workingLatex": "5x^2 - 10x - 3x + 6", "explanation": "This becomes $5x(x - 2) - 3(x - 2)$.", "diagram": null },
        { "stepNumber": 4, "description": "Write the factorisation.", "workingLatex": "(5x - 3)(x - 2) = 0", "explanation": "The common bracket is $(x - 2)$.", "diagram": null },
        { "stepNumber": 5, "description": "Solve.", "workingLatex": "x = \\tfrac{3}{5} \\ \\text{ or } \\ x = 2", "explanation": "Set each factor to zero.", "diagram": null }
      ],
      "finalAnswer": "$x = \\tfrac{3}{5}$ or $x = 2$"
    }
  },
  {
    "id": "gcse.algebra.quadratics-factorising.q044",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Quadratics by factorising",
    "subtopicId": "gcse.algebra.quadratics-factorising",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "value",
    "tags": ["quadratics by factorising", "positive roots"],
    "questionText": "Solve $x^2 - 8x + 15 = 0$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Find two numbers.", "workingLatex": "(-3)(-5) = 15,\\ -3 - 5 = -8", "explanation": "Product $+15$, sum $-8$: the numbers are $-3$ and $-5$.", "diagram": null },
        { "stepNumber": 2, "description": "Factorise.", "workingLatex": "(x - 3)(x - 5) = 0", "explanation": "Use the numbers in the brackets.", "diagram": null },
        { "stepNumber": 3, "description": "Solve.", "workingLatex": "x = 3 \\ \\text{ or } \\ x = 5", "explanation": "Set each factor to zero.", "diagram": null }
      ],
      "finalAnswer": "$x = 3$ or $x = 5$"
    }
  },
  {
    "id": "gcse.algebra.quadratics-factorising.q045",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Quadratics by factorising",
    "subtopicId": "gcse.algebra.quadratics-factorising",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "value",
    "tags": ["quadratics by factorising", "difference of two squares", "rearranging"],
    "questionText": "Solve $2x^2 - 32 = 0$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Take out the common factor.", "workingLatex": "2(x^2 - 16) = 0", "explanation": "Factor out $2$ first to simplify.", "diagram": null },
        { "stepNumber": 2, "description": "Divide by $2$.", "workingLatex": "x^2 - 16 = 0", "explanation": "The $2$ does not affect the roots.", "diagram": null },
        { "stepNumber": 3, "description": "Factorise the difference of two squares.", "workingLatex": "(x - 4)(x + 4) = 0", "explanation": "$16 = 4^2$.", "diagram": null },
        { "stepNumber": 4, "description": "Solve.", "workingLatex": "x = \\pm 4", "explanation": "So $x = 4$ or $x = -4$.", "diagram": null }
      ],
      "finalAnswer": "$x = 4$ or $x = -4$"
    }
  },
  {
    "id": "gcse.algebra.quadratics-factorising.q046",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Quadratics by factorising",
    "subtopicId": "gcse.algebra.quadratics-factorising",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "value",
    "tags": ["quadratics by factorising", "mixed signs"],
    "questionText": "Solve $x^2 + 4x - 21 = 0$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Find two numbers.", "workingLatex": "7 \\times (-3) = -21,\\ 7 - 3 = 4", "explanation": "Product $-21$, sum $+4$: the numbers are $+7$ and $-3$.", "diagram": null },
        { "stepNumber": 2, "description": "Factorise.", "workingLatex": "(x + 7)(x - 3) = 0", "explanation": "Use the numbers in the brackets.", "diagram": null },
        { "stepNumber": 3, "description": "Solve.", "workingLatex": "x = -7 \\ \\text{ or } \\ x = 3", "explanation": "Set each factor to zero.", "diagram": null }
      ],
      "finalAnswer": "$x = -7$ or $x = 3$"
    }
  },
  {
    "id": "gcse.algebra.quadratics-factorising.q047",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Quadratics by factorising",
    "subtopicId": "gcse.algebra.quadratics-factorising",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "value",
    "tags": ["quadratics by factorising", "brackets both sides", "rearranging"],
    "questionText": "Solve $(x + 3)(x - 1) = 2x + 9$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Expand the left side.", "workingLatex": "x^2 + 2x - 3 = 2x + 9", "explanation": "Multiply out the brackets.", "diagram": null },
        { "stepNumber": 2, "description": "Subtract $2x$ from both sides.", "workingLatex": "x^2 - 3 = 9", "explanation": "The $2x$ terms cancel.", "diagram": null },
        { "stepNumber": 3, "description": "Rearrange to standard form.", "workingLatex": "x^2 - 12 = 0", "explanation": "Subtract $9$; this leaves a difference of two squares (with an irrational root).", "diagram": null },
        { "stepNumber": 4, "description": "Solve.", "workingLatex": "x^2 = 12 \\Rightarrow x = \\pm 2\\sqrt{3}", "explanation": "$\\sqrt{12} = 2\\sqrt{3}$; both signs are valid.", "diagram": null }
      ],
      "finalAnswer": "$x = 2\\sqrt{3}$ or $x = -2\\sqrt{3}$"
    }
  },
  {
    "id": "gcse.algebra.quadratics-factorising.q048",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Quadratics by factorising",
    "subtopicId": "gcse.algebra.quadratics-factorising",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "value",
    "tags": ["quadratics by factorising", "factorised form"],
    "questionText": "Solve $(3x + 6)(x - 4) = 0$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Apply the zero-product rule.", "workingLatex": "3x + 6 = 0 \\ \\text{ or } \\ x - 4 = 0", "explanation": "One factor must be zero.", "diagram": null },
        { "stepNumber": 2, "description": "Solve each.", "workingLatex": "x = -2 \\ \\text{ or } \\ x = 4", "explanation": "$3x + 6 = 0$ gives $x = -2$.", "diagram": null }
      ],
      "finalAnswer": "$x = -2$ or $x = 4$"
    }
  },
  {
    "id": "gcse.algebra.quadratics-factorising.q049",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Quadratics by factorising",
    "subtopicId": "gcse.algebra.quadratics-factorising",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "value",
    "tags": ["quadratics by factorising", "rearranging", "positive roots"],
    "questionText": "Solve $x^2 + 20 = 9x$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Rearrange to standard form.", "workingLatex": "x^2 - 9x + 20 = 0", "explanation": "Subtract $9x$ from both sides.", "diagram": null },
        { "stepNumber": 2, "description": "Find two numbers.", "workingLatex": "(-4)(-5) = 20,\\ -4 - 5 = -9", "explanation": "Product $+20$, sum $-9$: the numbers are $-4$ and $-5$.", "diagram": null },
        { "stepNumber": 3, "description": "Factorise.", "workingLatex": "(x - 4)(x - 5) = 0", "explanation": "Use the numbers in the brackets.", "diagram": null },
        { "stepNumber": 4, "description": "Solve.", "workingLatex": "x = 4 \\ \\text{ or } \\ x = 5", "explanation": "Set each factor to zero.", "diagram": null }
      ],
      "finalAnswer": "$x = 4$ or $x = 5$"
    }
  },
  {
    "id": "gcse.algebra.quadratics-factorising.q050",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Quadratics by factorising",
    "subtopicId": "gcse.algebra.quadratics-factorising",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "value",
    "tags": ["quadratics by factorising", "context", "consecutive", "area"],
    "questionText": "A right-angled triangle has base $x$ cm and height $(x - 2)$ cm. Its area is $24$ cm². Find $x$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Write the area equation.", "workingLatex": "\\tfrac{1}{2}x(x - 2) = 24", "explanation": "Area of a triangle is half base times height.", "diagram": null },
        { "stepNumber": 2, "description": "Multiply both sides by $2$.", "workingLatex": "x(x - 2) = 48", "explanation": "Clear the fraction.", "diagram": null },
        { "stepNumber": 3, "description": "Expand and rearrange.", "workingLatex": "x^2 - 2x - 48 = 0", "explanation": "Multiply out and bring all terms to one side.", "diagram": null },
        { "stepNumber": 4, "description": "Factorise.", "workingLatex": "(x - 8)(x + 6) = 0", "explanation": "Numbers $-8$ and $+6$ multiply to $-48$ and add to $-2$.", "diagram": null },
        { "stepNumber": 5, "description": "Solve.", "workingLatex": "x = 8 \\ \\text{ or } \\ x = -6", "explanation": "Two algebraic solutions arise.", "diagram": null },
        { "stepNumber": 6, "description": "Reject the impossible value.", "workingLatex": "x = 8", "explanation": "A length must be positive, so $x = 8$ cm.", "diagram": null }
      ],
      "finalAnswer": "$x = 8$ cm"
    }
  },
  {
    "id": "gcse.algebra.quadratics-factorising.q051",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Quadratics by factorising",
    "subtopicId": "gcse.algebra.quadratics-factorising",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "value",
    "tags": ["quadratics by factorising", "positive roots"],
    "questionText": "Solve $x^2 - 13x + 42 = 0$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Find two numbers.", "workingLatex": "(-6)(-7) = 42,\\ -6 - 7 = -13", "explanation": "Product $+42$, sum $-13$: the numbers are $-6$ and $-7$.", "diagram": null },
        { "stepNumber": 2, "description": "Factorise.", "workingLatex": "(x - 6)(x - 7) = 0", "explanation": "Use the numbers in the brackets.", "diagram": null },
        { "stepNumber": 3, "description": "Solve.", "workingLatex": "x = 6 \\ \\text{ or } \\ x = 7", "explanation": "Set each factor to zero.", "diagram": null }
      ],
      "finalAnswer": "$x = 6$ or $x = 7$"
    }
  },
  {
    "id": "gcse.algebra.quadratics-factorising.q052",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Quadratics by factorising",
    "subtopicId": "gcse.algebra.quadratics-factorising",
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "value",
    "tags": ["quadratics by factorising", "leading coefficient", "mixed signs"],
    "questionText": "Solve $3x^2 + 5x - 2 = 0$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Multiply $a$ and $c$.", "workingLatex": "3 \\times (-2) = -6", "explanation": "Find two numbers multiplying to $-6$ and adding to $+5$.", "diagram": null },
        { "stepNumber": 2, "description": "Identify the numbers.", "workingLatex": "6 \\times (-1) = -6,\\ 6 - 1 = 5", "explanation": "The numbers are $+6$ and $-1$; split the middle term.", "diagram": null },
        { "stepNumber": 3, "description": "Group and factorise.", "workingLatex": "3x^2 + 6x - x - 2", "explanation": "This becomes $3x(x + 2) - 1(x + 2)$.", "diagram": null },
        { "stepNumber": 4, "description": "Write the factorisation.", "workingLatex": "(3x - 1)(x + 2) = 0", "explanation": "The common bracket is $(x + 2)$.", "diagram": null },
        { "stepNumber": 5, "description": "Solve.", "workingLatex": "x = \\tfrac{1}{3} \\ \\text{ or } \\ x = -2", "explanation": "Set each factor to zero.", "diagram": null }
      ],
      "finalAnswer": "$x = \\tfrac{1}{3}$ or $x = -2$"
    }
  },
  {
    "id": "gcse.algebra.quadratics-factorising.q053",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Quadratics by factorising",
    "subtopicId": "gcse.algebra.quadratics-factorising",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "value",
    "tags": ["quadratics by factorising", "mixed signs"],
    "questionText": "Solve $x^2 - x - 20 = 0$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Find two numbers.", "workingLatex": "(-5)(4) = -20,\\ -5 + 4 = -1", "explanation": "Product $-20$, sum $-1$: the numbers are $-5$ and $+4$.", "diagram": null },
        { "stepNumber": 2, "description": "Factorise.", "workingLatex": "(x - 5)(x + 4) = 0", "explanation": "Use the numbers in the brackets.", "diagram": null },
        { "stepNumber": 3, "description": "Solve.", "workingLatex": "x = 5 \\ \\text{ or } \\ x = -4", "explanation": "Set each factor to zero.", "diagram": null }
      ],
      "finalAnswer": "$x = 5$ or $x = -4$"
    }
  },
  {
    "id": "gcse.algebra.quadratics-factorising.q054",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Quadratics by factorising",
    "subtopicId": "gcse.algebra.quadratics-factorising",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "value",
    "tags": ["quadratics by factorising", "difference of two squares"],
    "questionText": "Solve $x^2 - 1 = 0$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recognise a difference of two squares.", "workingLatex": "x^2 - 1^2 = 0", "explanation": "$1 = 1^2$.", "diagram": null },
        { "stepNumber": 2, "description": "Factorise.", "workingLatex": "(x - 1)(x + 1) = 0", "explanation": "Apply the pattern.", "diagram": null },
        { "stepNumber": 3, "description": "Solve.", "workingLatex": "x = \\pm 1", "explanation": "So $x = 1$ or $x = -1$.", "diagram": null }
      ],
      "finalAnswer": "$x = 1$ or $x = -1$"
    }
  },
  {
    "id": "gcse.algebra.quadratics-factorising.q055",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Quadratics by factorising",
    "subtopicId": "gcse.algebra.quadratics-factorising",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "value",
    "tags": ["quadratics by factorising", "fraction equation", "rearranging"],
    "questionText": "Solve $x + \\dfrac{6}{x} = 5$ (for $x \\neq 0$).",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Multiply every term by $x$.", "workingLatex": "x^2 + 6 = 5x", "explanation": "Clearing the fraction gives a quadratic.", "diagram": null },
        { "stepNumber": 2, "description": "Rearrange to standard form.", "workingLatex": "x^2 - 5x + 6 = 0", "explanation": "Bring all terms to one side.", "diagram": null },
        { "stepNumber": 3, "description": "Factorise.", "workingLatex": "(x - 2)(x - 3) = 0", "explanation": "Numbers $-2$ and $-3$ multiply to $+6$ and add to $-5$.", "diagram": null },
        { "stepNumber": 4, "description": "Solve.", "workingLatex": "x = 2 \\ \\text{ or } \\ x = 3", "explanation": "Both are non-zero, so both are valid.", "diagram": null }
      ],
      "finalAnswer": "$x = 2$ or $x = 3$"
    }
  },
  {
    "id": "gcse.algebra.quadratics-factorising.q056",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Quadratics by factorising",
    "subtopicId": "gcse.algebra.quadratics-factorising",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "value",
    "tags": ["quadratics by factorising", "mixed signs"],
    "questionText": "Solve $x^2 + 3x - 28 = 0$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Find two numbers.", "workingLatex": "7 \\times (-4) = -28,\\ 7 - 4 = 3", "explanation": "Product $-28$, sum $+3$: the numbers are $+7$ and $-4$.", "diagram": null },
        { "stepNumber": 2, "description": "Factorise.", "workingLatex": "(x + 7)(x - 4) = 0", "explanation": "Use the numbers in the brackets.", "diagram": null },
        { "stepNumber": 3, "description": "Solve.", "workingLatex": "x = -7 \\ \\text{ or } \\ x = 4", "explanation": "Set each factor to zero.", "diagram": null }
      ],
      "finalAnswer": "$x = -7$ or $x = 4$"
    }
  },
  {
    "id": "gcse.algebra.quadratics-factorising.q057",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Quadratics by factorising",
    "subtopicId": "gcse.algebra.quadratics-factorising",
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "value",
    "tags": ["quadratics by factorising", "leading coefficient", "positive roots"],
    "questionText": "Solve $2x^2 - 7x + 5 = 0$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Multiply $a$ and $c$.", "workingLatex": "2 \\times 5 = 10", "explanation": "Find two numbers multiplying to $10$ and adding to $-7$.", "diagram": null },
        { "stepNumber": 2, "description": "Identify the numbers.", "workingLatex": "-2 \\times -5 = 10,\\ -2 - 5 = -7", "explanation": "The numbers are $-2$ and $-5$; split the middle term.", "diagram": null },
        { "stepNumber": 3, "description": "Group and factorise.", "workingLatex": "2x^2 - 2x - 5x + 5", "explanation": "This becomes $2x(x - 1) - 5(x - 1)$.", "diagram": null },
        { "stepNumber": 4, "description": "Write the factorisation.", "workingLatex": "(2x - 5)(x - 1) = 0", "explanation": "The common bracket is $(x - 1)$.", "diagram": null },
        { "stepNumber": 5, "description": "Solve.", "workingLatex": "x = \\tfrac{5}{2} \\ \\text{ or } \\ x = 1", "explanation": "Set each factor to zero.", "diagram": null }
      ],
      "finalAnswer": "$x = \\tfrac{5}{2}$ or $x = 1$"
    }
  },
  {
    "id": "gcse.algebra.quadratics-factorising.q058",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Quadratics by factorising",
    "subtopicId": "gcse.algebra.quadratics-factorising",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "value",
    "tags": ["quadratics by factorising", "repeated root"],
    "questionText": "Solve $x^2 - 4x + 4 = 0$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Find two numbers.", "workingLatex": "(-2)(-2) = 4,\\ -2 - 2 = -4", "explanation": "Product $+4$, sum $-4$: both numbers are $-2$.", "diagram": null },
        { "stepNumber": 2, "description": "Factorise.", "workingLatex": "(x - 2)^2 = 0", "explanation": "This is a perfect square.", "diagram": null },
        { "stepNumber": 3, "description": "Solve.", "workingLatex": "x = 2", "explanation": "There is one repeated root, $x = 2$.", "diagram": null }
      ],
      "finalAnswer": "$x = 2$ (a repeated root)"
    }
  },
  {
    "id": "gcse.algebra.quadratics-factorising.q059",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Quadratics by factorising",
    "subtopicId": "gcse.algebra.quadratics-factorising",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "value",
    "tags": ["quadratics by factorising", "common factor", "leading coefficient"],
    "questionText": "Solve $2x^2 + 10x + 12 = 0$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Take out the common factor $2$.", "workingLatex": "2(x^2 + 5x + 6) = 0", "explanation": "Factoring out $2$ simplifies the quadratic first.", "diagram": null },
        { "stepNumber": 2, "description": "Divide by $2$.", "workingLatex": "x^2 + 5x + 6 = 0", "explanation": "The $2$ does not affect the roots.", "diagram": null },
        { "stepNumber": 3, "description": "Factorise.", "workingLatex": "(x + 2)(x + 3) = 0", "explanation": "Numbers $+2$ and $+3$ multiply to $6$ and add to $5$.", "diagram": null },
        { "stepNumber": 4, "description": "Solve.", "workingLatex": "x = -2 \\ \\text{ or } \\ x = -3", "explanation": "Set each factor to zero.", "diagram": null }
      ],
      "finalAnswer": "$x = -2$ or $x = -3$"
    }
  },
  {
    "id": "gcse.algebra.quadratics-factorising.q060",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Quadratics by factorising",
    "subtopicId": "gcse.algebra.quadratics-factorising",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "value",
    "tags": ["quadratics by factorising", "factorised form"],
    "questionText": "Solve $(x - 9)(x + 1) = 0$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Apply the zero-product rule.", "workingLatex": "x - 9 = 0 \\ \\text{ or } \\ x + 1 = 0", "explanation": "One factor must be zero.", "diagram": null },
        { "stepNumber": 2, "description": "Solve.", "workingLatex": "x = 9 \\ \\text{ or } \\ x = -1", "explanation": "Read the roots directly.", "diagram": null }
      ],
      "finalAnswer": "$x = 9$ or $x = -1$"
    }
  },
  {
    "id": "gcse.algebra.quadratics-factorising.q061",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Quadratics by factorising",
    "subtopicId": "gcse.algebra.quadratics-factorising",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "value",
    "tags": ["quadratics by factorising", "positive roots"],
    "questionText": "Solve $x^2 - 12x + 35 = 0$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Find two numbers.", "workingLatex": "(-5)(-7) = 35,\\ -5 - 7 = -12", "explanation": "Product $+35$, sum $-12$: the numbers are $-5$ and $-7$.", "diagram": null },
        { "stepNumber": 2, "description": "Factorise.", "workingLatex": "(x - 5)(x - 7) = 0", "explanation": "Use the numbers in the brackets.", "diagram": null },
        { "stepNumber": 3, "description": "Solve.", "workingLatex": "x = 5 \\ \\text{ or } \\ x = 7", "explanation": "Set each factor to zero.", "diagram": null }
      ],
      "finalAnswer": "$x = 5$ or $x = 7$"
    }
  },
  {
    "id": "gcse.algebra.quadratics-factorising.q062",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Quadratics by factorising",
    "subtopicId": "gcse.algebra.quadratics-factorising",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "value",
    "tags": ["quadratics by factorising", "leading coefficient", "difference of two squares"],
    "questionText": "Solve $25x^2 = 4$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Rearrange to standard form.", "workingLatex": "25x^2 - 4 = 0", "explanation": "Bring the constant across.", "diagram": null },
        { "stepNumber": 2, "description": "Recognise a difference of two squares.", "workingLatex": "(5x)^2 - 2^2 = 0", "explanation": "$25x^2 = (5x)^2$ and $4 = 2^2$.", "diagram": null },
        { "stepNumber": 3, "description": "Factorise.", "workingLatex": "(5x - 2)(5x + 2) = 0", "explanation": "Apply the pattern.", "diagram": null },
        { "stepNumber": 4, "description": "Solve.", "workingLatex": "x = \\tfrac{2}{5} \\ \\text{ or } \\ x = -\\tfrac{2}{5}", "explanation": "Set each factor to zero.", "diagram": null }
      ],
      "finalAnswer": "$x = \\tfrac{2}{5}$ or $x = -\\tfrac{2}{5}$"
    }
  },
  {
    "id": "gcse.algebra.quadratics-factorising.q063",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Quadratics by factorising",
    "subtopicId": "gcse.algebra.quadratics-factorising",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "value",
    "tags": ["quadratics by factorising", "mixed signs"],
    "questionText": "Solve $x^2 - 5x - 24 = 0$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Find two numbers.", "workingLatex": "(-8)(3) = -24,\\ -8 + 3 = -5", "explanation": "Product $-24$, sum $-5$: the numbers are $-8$ and $+3$.", "diagram": null },
        { "stepNumber": 2, "description": "Factorise.", "workingLatex": "(x - 8)(x + 3) = 0", "explanation": "Use the numbers in the brackets.", "diagram": null },
        { "stepNumber": 3, "description": "Solve.", "workingLatex": "x = 8 \\ \\text{ or } \\ x = -3", "explanation": "Set each factor to zero.", "diagram": null }
      ],
      "finalAnswer": "$x = 8$ or $x = -3$"
    }
  },
  {
    "id": "gcse.algebra.quadratics-factorising.q064",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Quadratics by factorising",
    "subtopicId": "gcse.algebra.quadratics-factorising",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "value",
    "tags": ["quadratics by factorising", "context", "consecutive even"],
    "questionText": "The product of two consecutive even numbers is $80$. Form a quadratic and find the smaller number (taking it as positive).",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Set up the numbers.", "workingLatex": "n(n + 2) = 80", "explanation": "Consecutive even numbers differ by $2$: call them $n$ and $n + 2$.", "diagram": null },
        { "stepNumber": 2, "description": "Expand.", "workingLatex": "n^2 + 2n = 80", "explanation": "Multiply out the bracket.", "diagram": null },
        { "stepNumber": 3, "description": "Rearrange to standard form.", "workingLatex": "n^2 + 2n - 80 = 0", "explanation": "Subtract $80$.", "diagram": null },
        { "stepNumber": 4, "description": "Factorise.", "workingLatex": "(n + 10)(n - 8) = 0", "explanation": "Numbers $+10$ and $-8$ multiply to $-80$ and add to $+2$.", "diagram": null },
        { "stepNumber": 5, "description": "Solve.", "workingLatex": "n = -10 \\ \\text{ or } \\ n = 8", "explanation": "Two algebraic solutions arise.", "diagram": null },
        { "stepNumber": 6, "description": "Select the positive value.", "workingLatex": "n = 8", "explanation": "The smaller number is $8$ (the numbers are $8$ and $10$).", "diagram": null }
      ],
      "finalAnswer": "The smaller number is $8$ (the numbers are $8$ and $10$)."
    }
  },
  {
    "id": "gcse.algebra.quadratics-factorising.q065",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Quadratics by factorising",
    "subtopicId": "gcse.algebra.quadratics-factorising",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "value",
    "tags": ["quadratics by factorising", "mixed signs"],
    "questionText": "Solve $x^2 + 2x - 24 = 0$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Find two numbers.", "workingLatex": "6 \\times (-4) = -24,\\ 6 - 4 = 2", "explanation": "Product $-24$, sum $+2$: the numbers are $+6$ and $-4$.", "diagram": null },
        { "stepNumber": 2, "description": "Factorise.", "workingLatex": "(x + 6)(x - 4) = 0", "explanation": "Use the numbers in the brackets.", "diagram": null },
        { "stepNumber": 3, "description": "Solve.", "workingLatex": "x = -6 \\ \\text{ or } \\ x = 4", "explanation": "Set each factor to zero.", "diagram": null }
      ],
      "finalAnswer": "$x = -6$ or $x = 4$"
    }
  },
  {
    "id": "gcse.algebra.quadratics-factorising.q066",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Quadratics by factorising",
    "subtopicId": "gcse.algebra.quadratics-factorising",
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "value",
    "tags": ["quadratics by factorising", "leading coefficient", "common factor"],
    "questionText": "Solve $4x^2 - 20x = 0$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Take out the common factor.", "workingLatex": "4x(x - 5) = 0", "explanation": "Both terms share $4x$.", "diagram": null },
        { "stepNumber": 2, "description": "Apply the zero-product rule.", "workingLatex": "4x = 0 \\ \\text{ or } \\ x - 5 = 0", "explanation": "Set each factor to zero.", "diagram": null },
        { "stepNumber": 3, "description": "Solve.", "workingLatex": "x = 0 \\ \\text{ or } \\ x = 5", "explanation": "So the roots are $0$ and $5$.", "diagram": null }
      ],
      "finalAnswer": "$x = 0$ or $x = 5$"
    }
  },
  {
    "id": "gcse.algebra.quadratics-factorising.q067",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Quadratics by factorising",
    "subtopicId": "gcse.algebra.quadratics-factorising",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "value",
    "tags": ["quadratics by factorising", "positive roots"],
    "questionText": "Solve $x^2 - 14x + 48 = 0$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Find two numbers.", "workingLatex": "(-6)(-8) = 48,\\ -6 - 8 = -14", "explanation": "Product $+48$, sum $-14$: the numbers are $-6$ and $-8$.", "diagram": null },
        { "stepNumber": 2, "description": "Factorise.", "workingLatex": "(x - 6)(x - 8) = 0", "explanation": "Use the numbers in the brackets.", "diagram": null },
        { "stepNumber": 3, "description": "Solve.", "workingLatex": "x = 6 \\ \\text{ or } \\ x = 8", "explanation": "Set each factor to zero.", "diagram": null }
      ],
      "finalAnswer": "$x = 6$ or $x = 8$"
    }
  },
  {
    "id": "gcse.algebra.quadratics-factorising.q068",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Quadratics by factorising",
    "subtopicId": "gcse.algebra.quadratics-factorising",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "text",
    "tags": ["quadratics by factorising", "reasoning", "number of roots"],
    "questionText": "Explain how you can tell, from its factorised form $(x - 3)^2 = 0$, that the quadratic has only one solution rather than two.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Write out the repeated factor.", "workingLatex": "(x - 3)(x - 3) = 0", "explanation": "A square means the same factor appears twice.", "diagram": null },
        { "stepNumber": 2, "description": "Apply the zero-product rule.", "workingLatex": "x - 3 = 0", "explanation": "Both factors are identical, so they give the same equation.", "diagram": null },
        { "stepNumber": 3, "description": "Solve.", "workingLatex": "x = 3", "explanation": "Both factors give $x = 3$, so the two roots coincide.", "diagram": null },
        { "stepNumber": 4, "description": "Interpret graphically.", "workingLatex": "\\text{curve touches the axis}", "explanation": "On a graph the parabola just touches the $x$-axis at $x = 3$ instead of crossing it twice.", "diagram": null }
      ],
      "finalAnswer": "Both factors are $(x - 3)$, so both give $x = 3$ — a single repeated root where the curve touches the $x$-axis."
    }
  },
  {
    "id": "gcse.algebra.quadratics-factorising.q069",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Quadratics by factorising",
    "subtopicId": "gcse.algebra.quadratics-factorising",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "value",
    "tags": ["quadratics by factorising", "rearranging", "mixed signs"],
    "questionText": "Solve $x^2 - 15 = 2x$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Rearrange to standard form.", "workingLatex": "x^2 - 2x - 15 = 0", "explanation": "Subtract $2x$ from both sides.", "diagram": null },
        { "stepNumber": 2, "description": "Find two numbers.", "workingLatex": "(-5)(3) = -15,\\ -5 + 3 = -2", "explanation": "Product $-15$, sum $-2$: the numbers are $-5$ and $+3$.", "diagram": null },
        { "stepNumber": 3, "description": "Factorise.", "workingLatex": "(x - 5)(x + 3) = 0", "explanation": "Use the numbers in the brackets.", "diagram": null },
        { "stepNumber": 4, "description": "Solve.", "workingLatex": "x = 5 \\ \\text{ or } \\ x = -3", "explanation": "Set each factor to zero.", "diagram": null }
      ],
      "finalAnswer": "$x = 5$ or $x = -3$"
    }
  },
  {
    "id": "gcse.algebra.quadratics-factorising.q070",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Quadratics by factorising",
    "subtopicId": "gcse.algebra.quadratics-factorising",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "value",
    "tags": ["quadratics by factorising", "leading coefficient", "rearranging", "context"],
    "questionText": "A ball's height is $h = 20t - 5t^2$ metres after $t$ seconds. Find the times when the ball is at height $0$ m.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Set the height to zero.", "workingLatex": "20t - 5t^2 = 0", "explanation": "We want the times when $h = 0$.", "diagram": null },
        { "stepNumber": 2, "description": "Take out the common factor.", "workingLatex": "5t(4 - t) = 0", "explanation": "Both terms share $5t$.", "diagram": null },
        { "stepNumber": 3, "description": "Apply the zero-product rule.", "workingLatex": "5t = 0 \\ \\text{ or } \\ 4 - t = 0", "explanation": "Set each factor to zero.", "diagram": null },
        { "stepNumber": 4, "description": "Solve.", "workingLatex": "t = 0 \\ \\text{ or } \\ t = 4", "explanation": "So the height is zero at these two times.", "diagram": null },
        { "stepNumber": 5, "description": "Interpret.", "workingLatex": "t = 0,\\ t = 4", "explanation": "$t = 0$ is the launch and $t = 4$ s is when it lands.", "diagram": null }
      ],
      "finalAnswer": "$t = 0$ s (launch) and $t = 4$ s (landing)"
    }
  }
];
