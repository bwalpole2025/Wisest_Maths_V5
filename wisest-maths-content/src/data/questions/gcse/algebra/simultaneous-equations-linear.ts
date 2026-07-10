import { Question } from "@/lib/types";

export const questions: Question[] = [
  {
    "id": "gcse.algebra.simultaneous-linear.q001",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Simultaneous equations (linear)",
    "subtopicId": "gcse.algebra.simultaneous-linear",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "value",
    "tags": ["simultaneous equations", "elimination", "subtraction"],
    "questionText": "Solve the simultaneous equations $x + y = 7$ and $x - y = 1$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Add the two equations.", "workingLatex": "(x + y) + (x - y) = 7 + 1", "explanation": "Adding eliminates $y$ because $+y$ and $-y$ cancel.", "diagram": null },
        { "stepNumber": 2, "description": "Simplify.", "workingLatex": "2x = 8", "explanation": "The $y$ terms have gone, leaving an equation in $x$.", "diagram": null },
        { "stepNumber": 3, "description": "Solve for $x$.", "workingLatex": "x = 4", "explanation": "$8 \\div 2 = 4$.", "diagram": null },
        { "stepNumber": 4, "description": "Substitute back.", "workingLatex": "4 + y = 7 \\Rightarrow y = 3", "explanation": "Use the first equation to find $y$.", "diagram": null }
      ],
      "finalAnswer": "$x = 4,\\ y = 3$"
    }
  },
  {
    "id": "gcse.algebra.simultaneous-linear.q002",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Simultaneous equations (linear)",
    "subtopicId": "gcse.algebra.simultaneous-linear",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "value",
    "tags": ["simultaneous equations", "elimination", "subtraction"],
    "questionText": "Solve $2x + y = 7$ and $x + y = 5$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Subtract the second equation from the first.", "workingLatex": "(2x + y) - (x + y) = 7 - 5", "explanation": "Subtracting eliminates $y$ since both have $+y$.", "diagram": null },
        { "stepNumber": 2, "description": "Simplify.", "workingLatex": "x = 2", "explanation": "$2x - x = x$ and $7 - 5 = 2$.", "diagram": null },
        { "stepNumber": 3, "description": "Substitute back.", "workingLatex": "2 + y = 5 \\Rightarrow y = 3", "explanation": "Use the second equation to find $y$.", "diagram": null }
      ],
      "finalAnswer": "$x = 2,\\ y = 3$"
    }
  },
  {
    "id": "gcse.algebra.simultaneous-linear.q003",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Simultaneous equations (linear)",
    "subtopicId": "gcse.algebra.simultaneous-linear",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "value",
    "tags": ["simultaneous equations", "elimination", "subtraction"],
    "questionText": "Solve $3x + 2y = 13$ and $x + 2y = 7$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Subtract to eliminate $y$.", "workingLatex": "(3x + 2y) - (x + 2y) = 13 - 7", "explanation": "Both equations have $+2y$, so subtracting removes $y$.", "diagram": null },
        { "stepNumber": 2, "description": "Simplify.", "workingLatex": "2x = 6", "explanation": "$3x - x = 2x$ and $13 - 7 = 6$.", "diagram": null },
        { "stepNumber": 3, "description": "Solve for $x$.", "workingLatex": "x = 3", "explanation": "$6 \\div 2 = 3$.", "diagram": null },
        { "stepNumber": 4, "description": "Substitute back.", "workingLatex": "3 + 2y = 7 \\Rightarrow y = 2", "explanation": "Use the second equation: $2y = 4$, so $y = 2$.", "diagram": null }
      ],
      "finalAnswer": "$x = 3,\\ y = 2$"
    }
  },
  {
    "id": "gcse.algebra.simultaneous-linear.q004",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Simultaneous equations (linear)",
    "subtopicId": "gcse.algebra.simultaneous-linear",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "value",
    "tags": ["simultaneous equations", "elimination", "addition"],
    "questionText": "Solve $2x + 3y = 12$ and $2x - 3y = 0$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Add the equations.", "workingLatex": "(2x + 3y) + (2x - 3y) = 12 + 0", "explanation": "Adding eliminates $y$ because $+3y$ and $-3y$ cancel.", "diagram": null },
        { "stepNumber": 2, "description": "Simplify.", "workingLatex": "4x = 12", "explanation": "The $y$ terms cancel, leaving $4x$.", "diagram": null },
        { "stepNumber": 3, "description": "Solve for $x$.", "workingLatex": "x = 3", "explanation": "$12 \\div 4 = 3$.", "diagram": null },
        { "stepNumber": 4, "description": "Substitute back.", "workingLatex": "2(3) - 3y = 0 \\Rightarrow y = 2", "explanation": "$6 - 3y = 0$, so $3y = 6$ and $y = 2$.", "diagram": null }
      ],
      "finalAnswer": "$x = 3,\\ y = 2$"
    }
  },
  {
    "id": "gcse.algebra.simultaneous-linear.q005",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Simultaneous equations (linear)",
    "subtopicId": "gcse.algebra.simultaneous-linear",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "tags": ["simultaneous equations", "elimination", "scaling"],
    "questionText": "Solve $2x + y = 8$ and $3x + 2y = 14$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Scale the first equation.", "workingLatex": "4x + 2y = 16", "explanation": "Multiply the first equation by $2$ so both have $2y$ to eliminate.", "diagram": null },
        { "stepNumber": 2, "description": "Subtract the second equation.", "workingLatex": "(4x + 2y) - (3x + 2y) = 16 - 14", "explanation": "Both now have $+2y$, so subtracting removes $y$.", "diagram": null },
        { "stepNumber": 3, "description": "Simplify.", "workingLatex": "x = 2", "explanation": "$4x - 3x = x$ and $16 - 14 = 2$.", "diagram": null },
        { "stepNumber": 4, "description": "Substitute back.", "workingLatex": "2(2) + y = 8 \\Rightarrow y = 4", "explanation": "$4 + y = 8$, so $y = 4$.", "diagram": null }
      ],
      "finalAnswer": "$x = 2,\\ y = 4$"
    }
  },
  {
    "id": "gcse.algebra.simultaneous-linear.q006",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Simultaneous equations (linear)",
    "subtopicId": "gcse.algebra.simultaneous-linear",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "tags": ["simultaneous equations", "substitution"],
    "questionText": "Solve $y = 2x + 1$ and $3x + y = 11$ by substitution.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Substitute the first into the second.", "workingLatex": "3x + (2x + 1) = 11", "explanation": "Replace $y$ with $2x + 1$ since the first equation gives $y$ directly.", "diagram": null },
        { "stepNumber": 2, "description": "Collect like terms.", "workingLatex": "5x + 1 = 11", "explanation": "$3x + 2x = 5x$.", "diagram": null },
        { "stepNumber": 3, "description": "Solve for $x$.", "workingLatex": "5x = 10 \\Rightarrow x = 2", "explanation": "Subtract $1$, then divide by $5$.", "diagram": null },
        { "stepNumber": 4, "description": "Find $y$.", "workingLatex": "y = 2(2) + 1 = 5", "explanation": "Substitute $x = 2$ into $y = 2x + 1$.", "diagram": null }
      ],
      "finalAnswer": "$x = 2,\\ y = 5$"
    }
  },
  {
    "id": "gcse.algebra.simultaneous-linear.q007",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Simultaneous equations (linear)",
    "subtopicId": "gcse.algebra.simultaneous-linear",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "value",
    "tags": ["simultaneous equations", "graphical", "intersection"],
    "questionText": "The lines $y = x + 1$ and $y = -x + 5$ are drawn on the same axes. Use the graph to find the solution of the simultaneous equations.",
    "questionDiagram": {
      "kind": "functionGraph",
      "xMin": -1, "xMax": 6, "yMin": -1, "yMax": 7,
      "curves": [
        { "fn": { "base": "line", "a": 1, "d": 1 }, "color": "ink", "label": "y=x+1" },
        { "fn": { "base": "line", "a": -1, "d": 5 }, "color": "accent", "label": "y=-x+5" }
      ],
      "points": [{ "x": 2, "y": 3, "label": "(2,3)", "color": "soft" }],
      "alt": "Two straight lines crossing at the point (2,3)."
    },
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall what the solution means.", "workingLatex": "\\text{intersection point}", "explanation": "The solution is the point where the two lines cross, since it lies on both.", "diagram": null },
        { "stepNumber": 2, "description": "Read the crossing point.", "workingLatex": "(2, 3)", "explanation": "The lines meet at $x = 2$, $y = 3$.", "diagram": null },
        { "stepNumber": 3, "description": "Check.", "workingLatex": "3 = 2 + 1,\\ 3 = -2 + 5 \\ \\checkmark", "explanation": "Both equations are satisfied.", "diagram": null }
      ],
      "finalAnswer": "$x = 2,\\ y = 3$"
    }
  },
  {
    "id": "gcse.algebra.simultaneous-linear.q008",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Simultaneous equations (linear)",
    "subtopicId": "gcse.algebra.simultaneous-linear",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "value",
    "tags": ["simultaneous equations", "elimination", "addition"],
    "questionText": "Solve $3x + y = 10$ and $2x - y = 5$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Add the equations.", "workingLatex": "(3x + y) + (2x - y) = 10 + 5", "explanation": "Adding eliminates $y$ because $+y$ and $-y$ cancel.", "diagram": null },
        { "stepNumber": 2, "description": "Simplify.", "workingLatex": "5x = 15", "explanation": "$3x + 2x = 5x$ and $10 + 5 = 15$.", "diagram": null },
        { "stepNumber": 3, "description": "Solve for $x$.", "workingLatex": "x = 3", "explanation": "$15 \\div 5 = 3$.", "diagram": null },
        { "stepNumber": 4, "description": "Substitute back.", "workingLatex": "3(3) + y = 10 \\Rightarrow y = 1", "explanation": "$9 + y = 10$, so $y = 1$.", "diagram": null }
      ],
      "finalAnswer": "$x = 3,\\ y = 1$"
    }
  },
  {
    "id": "gcse.algebra.simultaneous-linear.q009",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Simultaneous equations (linear)",
    "subtopicId": "gcse.algebra.simultaneous-linear",
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "value",
    "tags": ["simultaneous equations", "elimination", "scaling both"],
    "questionText": "Solve $3x + 2y = 16$ and $2x + 5y = 18$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Scale both equations.", "workingLatex": "15x + 10y = 80,\\ 4x + 10y = 36", "explanation": "Multiply the first by $5$ and the second by $2$ so both have $10y$.", "diagram": null },
        { "stepNumber": 2, "description": "Subtract.", "workingLatex": "11x = 44", "explanation": "$15x - 4x = 11x$ and $80 - 36 = 44$; the $y$ terms cancel.", "diagram": null },
        { "stepNumber": 3, "description": "Solve for $x$.", "workingLatex": "x = 4", "explanation": "$44 \\div 11 = 4$.", "diagram": null },
        { "stepNumber": 4, "description": "Substitute back.", "workingLatex": "3(4) + 2y = 16 \\Rightarrow y = 2", "explanation": "$12 + 2y = 16$, so $2y = 4$ and $y = 2$.", "diagram": null }
      ],
      "finalAnswer": "$x = 4,\\ y = 2$"
    }
  },
  {
    "id": "gcse.algebra.simultaneous-linear.q010",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Simultaneous equations (linear)",
    "subtopicId": "gcse.algebra.simultaneous-linear",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "tags": ["simultaneous equations", "elimination", "scaling"],
    "questionText": "Solve $x + 3y = 13$ and $2x + y = 11$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Scale the first equation.", "workingLatex": "2x + 6y = 26", "explanation": "Multiply the first by $2$ so both have $2x$.", "diagram": null },
        { "stepNumber": 2, "description": "Subtract the second.", "workingLatex": "(2x + 6y) - (2x + y) = 26 - 11", "explanation": "The $2x$ terms cancel.", "diagram": null },
        { "stepNumber": 3, "description": "Simplify.", "workingLatex": "5y = 15 \\Rightarrow y = 3", "explanation": "$6y - y = 5y$ and $26 - 11 = 15$.", "diagram": null },
        { "stepNumber": 4, "description": "Substitute back.", "workingLatex": "x + 3(3) = 13 \\Rightarrow x = 4", "explanation": "$x + 9 = 13$, so $x = 4$.", "diagram": null }
      ],
      "finalAnswer": "$x = 4,\\ y = 3$"
    }
  },
  {
    "id": "gcse.algebra.simultaneous-linear.q011",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Simultaneous equations (linear)",
    "subtopicId": "gcse.algebra.simultaneous-linear",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "value",
    "tags": ["simultaneous equations", "elimination", "subtraction"],
    "questionText": "Solve $5x + 2y = 16$ and $3x + 2y = 12$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Subtract to eliminate $y$.", "workingLatex": "(5x + 2y) - (3x + 2y) = 16 - 12", "explanation": "Both have $+2y$, so subtracting removes $y$.", "diagram": null },
        { "stepNumber": 2, "description": "Simplify.", "workingLatex": "2x = 4 \\Rightarrow x = 2", "explanation": "$5x - 3x = 2x$ and $16 - 12 = 4$.", "diagram": null },
        { "stepNumber": 3, "description": "Substitute back.", "workingLatex": "5(2) + 2y = 16 \\Rightarrow y = 3", "explanation": "$10 + 2y = 16$, so $2y = 6$ and $y = 3$.", "diagram": null }
      ],
      "finalAnswer": "$x = 2,\\ y = 3$"
    }
  },
  {
    "id": "gcse.algebra.simultaneous-linear.q012",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Simultaneous equations (linear)",
    "subtopicId": "gcse.algebra.simultaneous-linear",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "value",
    "tags": ["simultaneous equations", "word problem", "forming"],
    "questionText": "Two coffees and one tea cost £8. One coffee and one tea cost £5. Find the price of a coffee and the price of a tea.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Define variables.", "workingLatex": "c = \\text{coffee},\\ t = \\text{tea}", "explanation": "Let $c$ and $t$ be the prices in pounds.", "diagram": null },
        { "stepNumber": 2, "description": "Form the equations.", "workingLatex": "2c + t = 8,\\ c + t = 5", "explanation": "Translate each sentence into an equation.", "diagram": null },
        { "stepNumber": 3, "description": "Subtract the second from the first.", "workingLatex": "(2c + t) - (c + t) = 8 - 5", "explanation": "Both have $+t$, so subtracting removes $t$.", "diagram": null },
        { "stepNumber": 4, "description": "Solve for $c$.", "workingLatex": "c = 3", "explanation": "A coffee costs £3.", "diagram": null },
        { "stepNumber": 5, "description": "Find $t$.", "workingLatex": "3 + t = 5 \\Rightarrow t = 2", "explanation": "A tea costs £2.", "diagram": null }
      ],
      "finalAnswer": "Coffee £3, tea £2."
    }
  },
  {
    "id": "gcse.algebra.simultaneous-linear.q013",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Simultaneous equations (linear)",
    "subtopicId": "gcse.algebra.simultaneous-linear",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "tags": ["simultaneous equations", "elimination", "negative solution"],
    "questionText": "Solve $4x + 3y = 5$ and $2x + 3y = 1$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Subtract to eliminate $y$.", "workingLatex": "(4x + 3y) - (2x + 3y) = 5 - 1", "explanation": "Both have $+3y$.", "diagram": null },
        { "stepNumber": 2, "description": "Simplify.", "workingLatex": "2x = 4 \\Rightarrow x = 2", "explanation": "$4x - 2x = 2x$ and $5 - 1 = 4$.", "diagram": null },
        { "stepNumber": 3, "description": "Substitute back.", "workingLatex": "2(2) + 3y = 1", "explanation": "Use the second equation.", "diagram": null },
        { "stepNumber": 4, "description": "Solve for $y$.", "workingLatex": "4 + 3y = 1 \\Rightarrow y = -1", "explanation": "$3y = -3$, so $y = -1$.", "diagram": null }
      ],
      "finalAnswer": "$x = 2,\\ y = -1$"
    }
  },
  {
    "id": "gcse.algebra.simultaneous-linear.q014",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Simultaneous equations (linear)",
    "subtopicId": "gcse.algebra.simultaneous-linear",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "tags": ["simultaneous equations", "substitution"],
    "questionText": "Solve $x = 3y - 2$ and $2x + y = 10$ by substitution.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Substitute into the second equation.", "workingLatex": "2(3y - 2) + y = 10", "explanation": "Replace $x$ with $3y - 2$.", "diagram": null },
        { "stepNumber": 2, "description": "Expand.", "workingLatex": "6y - 4 + y = 10", "explanation": "Multiply out the bracket.", "diagram": null },
        { "stepNumber": 3, "description": "Collect and solve.", "workingLatex": "7y = 14 \\Rightarrow y = 2", "explanation": "$7y - 4 = 10$, so $7y = 14$.", "diagram": null },
        { "stepNumber": 4, "description": "Find $x$.", "workingLatex": "x = 3(2) - 2 = 4", "explanation": "Substitute $y = 2$ into $x = 3y - 2$.", "diagram": null }
      ],
      "finalAnswer": "$x = 4,\\ y = 2$"
    }
  },
  {
    "id": "gcse.algebra.simultaneous-linear.q015",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Simultaneous equations (linear)",
    "subtopicId": "gcse.algebra.simultaneous-linear",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "value",
    "tags": ["simultaneous equations", "elimination", "scaling both"],
    "questionText": "Solve $4x + 3y = 18$ and $3x + 5y = 19$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Scale both equations to match $x$.", "workingLatex": "12x + 9y = 54,\\ 12x + 20y = 76", "explanation": "Multiply the first by $3$ and the second by $4$ so both have $12x$.", "diagram": null },
        { "stepNumber": 2, "description": "Subtract.", "workingLatex": "11y = 22", "explanation": "$20y - 9y = 11y$ and $76 - 54 = 22$; the $x$ terms cancel.", "diagram": null },
        { "stepNumber": 3, "description": "Solve for $y$.", "workingLatex": "y = 2", "explanation": "$22 \\div 11 = 2$.", "diagram": null },
        { "stepNumber": 4, "description": "Substitute back.", "workingLatex": "4x + 3(2) = 18 \\Rightarrow x = 3", "explanation": "$4x + 6 = 18$, so $4x = 12$ and $x = 3$.", "diagram": null }
      ],
      "finalAnswer": "$x = 3,\\ y = 2$"
    }
  },
  {
    "id": "gcse.algebra.simultaneous-linear.q016",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Simultaneous equations (linear)",
    "subtopicId": "gcse.algebra.simultaneous-linear",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "value",
    "tags": ["simultaneous equations", "elimination", "addition"],
    "questionText": "Solve $x + y = 10$ and $x - y = 4$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Add the equations.", "workingLatex": "2x = 14", "explanation": "The $+y$ and $-y$ cancel; $10 + 4 = 14$.", "diagram": null },
        { "stepNumber": 2, "description": "Solve for $x$.", "workingLatex": "x = 7", "explanation": "$14 \\div 2 = 7$.", "diagram": null },
        { "stepNumber": 3, "description": "Substitute back.", "workingLatex": "7 + y = 10 \\Rightarrow y = 3", "explanation": "Use the first equation.", "diagram": null }
      ],
      "finalAnswer": "$x = 7,\\ y = 3$"
    }
  },
  {
    "id": "gcse.algebra.simultaneous-linear.q017",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Simultaneous equations (linear)",
    "subtopicId": "gcse.algebra.simultaneous-linear",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "tags": ["simultaneous equations", "elimination", "scaling"],
    "questionText": "Solve $2x + 5y = 24$ and $x + 2y = 10$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Scale the second equation.", "workingLatex": "2x + 4y = 20", "explanation": "Multiply the second by $2$ so both have $2x$.", "diagram": null },
        { "stepNumber": 2, "description": "Subtract from the first.", "workingLatex": "(2x + 5y) - (2x + 4y) = 24 - 20", "explanation": "The $2x$ terms cancel.", "diagram": null },
        { "stepNumber": 3, "description": "Simplify.", "workingLatex": "y = 4", "explanation": "$5y - 4y = y$ and $24 - 20 = 4$.", "diagram": null },
        { "stepNumber": 4, "description": "Substitute back.", "workingLatex": "x + 2(4) = 10 \\Rightarrow x = 2", "explanation": "$x + 8 = 10$, so $x = 2$.", "diagram": null }
      ],
      "finalAnswer": "$x = 2,\\ y = 4$"
    }
  },
  {
    "id": "gcse.algebra.simultaneous-linear.q018",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Simultaneous equations (linear)",
    "subtopicId": "gcse.algebra.simultaneous-linear",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "value",
    "tags": ["simultaneous equations", "elimination", "addition", "negative"],
    "questionText": "Solve $5x + 2y = 4$ and $3x - 2y = 12$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Add the equations.", "workingLatex": "(5x + 2y) + (3x - 2y) = 4 + 12", "explanation": "Adding eliminates $y$ since $+2y$ and $-2y$ cancel.", "diagram": null },
        { "stepNumber": 2, "description": "Simplify.", "workingLatex": "8x = 16 \\Rightarrow x = 2", "explanation": "$5x + 3x = 8x$ and $4 + 12 = 16$.", "diagram": null },
        { "stepNumber": 3, "description": "Substitute back.", "workingLatex": "5(2) + 2y = 4", "explanation": "Use the first equation.", "diagram": null },
        { "stepNumber": 4, "description": "Solve for $y$.", "workingLatex": "10 + 2y = 4 \\Rightarrow y = -3", "explanation": "$2y = -6$, so $y = -3$.", "diagram": null }
      ],
      "finalAnswer": "$x = 2,\\ y = -3$"
    }
  },
  {
    "id": "gcse.algebra.simultaneous-linear.q019",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Simultaneous equations (linear)",
    "subtopicId": "gcse.algebra.simultaneous-linear",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "value",
    "tags": ["simultaneous equations", "substitution", "rearranging"],
    "questionText": "Solve $y = 4 - x$ and $2x + 3y = 9$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Substitute into the second equation.", "workingLatex": "2x + 3(4 - x) = 9", "explanation": "Replace $y$ with $4 - x$.", "diagram": null },
        { "stepNumber": 2, "description": "Expand.", "workingLatex": "2x + 12 - 3x = 9", "explanation": "Multiply out the bracket.", "diagram": null },
        { "stepNumber": 3, "description": "Collect and solve.", "workingLatex": "-x + 12 = 9 \\Rightarrow x = 3", "explanation": "$-x = -3$, so $x = 3$.", "diagram": null },
        { "stepNumber": 4, "description": "Find $y$.", "workingLatex": "y = 4 - 3 = 1", "explanation": "Substitute $x = 3$ into $y = 4 - x$.", "diagram": null }
      ],
      "finalAnswer": "$x = 3,\\ y = 1$"
    }
  },
  {
    "id": "gcse.algebra.simultaneous-linear.q020",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Simultaneous equations (linear)",
    "subtopicId": "gcse.algebra.simultaneous-linear",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "value",
    "tags": ["simultaneous equations", "word problem", "forming", "scaling"],
    "questionText": "Three apples and two bananas cost £1.60. Four apples and three bananas cost £2.30 (all prices in pence-free pounds). Find the cost of one apple and one banana.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Define variables and form equations.", "workingLatex": "3a + 2b = 1.60,\\ 4a + 3b = 2.30", "explanation": "Let $a$ and $b$ be the costs in pounds.", "diagram": null },
        { "stepNumber": 2, "description": "Scale to match $b$.", "workingLatex": "9a + 6b = 4.80,\\ 8a + 6b = 4.60", "explanation": "Multiply the first by $3$ and the second by $2$.", "diagram": null },
        { "stepNumber": 3, "description": "Subtract.", "workingLatex": "a = 0.20", "explanation": "$9a - 8a = a$ and $4.80 - 4.60 = 0.20$.", "diagram": null },
        { "stepNumber": 4, "description": "Substitute back.", "workingLatex": "3(0.20) + 2b = 1.60", "explanation": "Use the first original equation.", "diagram": null },
        { "stepNumber": 5, "description": "Solve for $b$.", "workingLatex": "0.60 + 2b = 1.60 \\Rightarrow b = 0.50", "explanation": "$2b = 1.00$, so $b = 0.50$.", "diagram": null }
      ],
      "finalAnswer": "An apple costs £0.20 and a banana costs £0.50."
    }
  },
  {
    "id": "gcse.algebra.simultaneous-linear.q021",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Simultaneous equations (linear)",
    "subtopicId": "gcse.algebra.simultaneous-linear",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "value",
    "tags": ["simultaneous equations", "elimination", "subtraction"],
    "questionText": "Solve $4x + y = 14$ and $2x + y = 8$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Subtract to eliminate $y$.", "workingLatex": "(4x + y) - (2x + y) = 14 - 8", "explanation": "Both have $+y$.", "diagram": null },
        { "stepNumber": 2, "description": "Simplify.", "workingLatex": "2x = 6 \\Rightarrow x = 3", "explanation": "$4x - 2x = 2x$ and $14 - 8 = 6$.", "diagram": null },
        { "stepNumber": 3, "description": "Substitute back.", "workingLatex": "2(3) + y = 8 \\Rightarrow y = 2", "explanation": "$6 + y = 8$, so $y = 2$.", "diagram": null }
      ],
      "finalAnswer": "$x = 3,\\ y = 2$"
    }
  },
  {
    "id": "gcse.algebra.simultaneous-linear.q022",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Simultaneous equations (linear)",
    "subtopicId": "gcse.algebra.simultaneous-linear",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "value",
    "tags": ["simultaneous equations", "elimination", "scaling both", "negative"],
    "questionText": "Solve $3x + 4y = 1$ and $2x + 3y = 1$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Scale both to match $x$.", "workingLatex": "6x + 8y = 2,\\ 6x + 9y = 3", "explanation": "Multiply the first by $2$ and the second by $3$.", "diagram": null },
        { "stepNumber": 2, "description": "Subtract.", "workingLatex": "-y = -1 \\Rightarrow y = 1", "explanation": "$8y - 9y = -y$ and $2 - 3 = -1$.", "diagram": null },
        { "stepNumber": 3, "description": "Substitute back.", "workingLatex": "2x + 3(1) = 1", "explanation": "Use the second original equation.", "diagram": null },
        { "stepNumber": 4, "description": "Solve for $x$.", "workingLatex": "2x = -2 \\Rightarrow x = -1", "explanation": "$2x + 3 = 1$, so $2x = -2$.", "diagram": null }
      ],
      "finalAnswer": "$x = -1,\\ y = 1$"
    }
  },
  {
    "id": "gcse.algebra.simultaneous-linear.q023",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Simultaneous equations (linear)",
    "subtopicId": "gcse.algebra.simultaneous-linear",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "text",
    "tags": ["simultaneous equations", "graphical", "no solution", "parallel"],
    "questionText": "The graphs of $y = 2x + 1$ and $y = 2x - 3$ are drawn. Explain why the simultaneous equations have no solution.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Compare the gradients.", "workingLatex": "\\text{both gradients} = 2", "explanation": "Both lines have gradient $2$, so they are parallel.", "diagram": null },
        { "stepNumber": 2, "description": "Compare the intercepts.", "workingLatex": "1 \\neq -3", "explanation": "They have different $y$-intercepts, so they are not the same line.", "diagram": null },
        { "stepNumber": 3, "description": "Conclude.", "workingLatex": "\\text{never cross}", "explanation": "Parallel lines never meet, so there is no point on both — hence no solution.", "diagram": null }
      ],
      "finalAnswer": "The lines are parallel (both gradient $2$) but distinct, so they never intersect — there is no solution."
    }
  },
  {
    "id": "gcse.algebra.simultaneous-linear.q024",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Simultaneous equations (linear)",
    "subtopicId": "gcse.algebra.simultaneous-linear",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "tags": ["simultaneous equations", "elimination", "scaling"],
    "questionText": "Solve $3x + y = 11$ and $2x + 3y = 12$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Scale the first equation.", "workingLatex": "9x + 3y = 33", "explanation": "Multiply the first by $3$ so both have $3y$.", "diagram": null },
        { "stepNumber": 2, "description": "Subtract the second.", "workingLatex": "(9x + 3y) - (2x + 3y) = 33 - 12", "explanation": "The $3y$ terms cancel.", "diagram": null },
        { "stepNumber": 3, "description": "Simplify.", "workingLatex": "7x = 21 \\Rightarrow x = 3", "explanation": "$9x - 2x = 7x$ and $33 - 12 = 21$.", "diagram": null },
        { "stepNumber": 4, "description": "Substitute back.", "workingLatex": "3(3) + y = 11 \\Rightarrow y = 2", "explanation": "$9 + y = 11$, so $y = 2$.", "diagram": null }
      ],
      "finalAnswer": "$x = 3,\\ y = 2$"
    }
  },
  {
    "id": "gcse.algebra.simultaneous-linear.q025",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Simultaneous equations (linear)",
    "subtopicId": "gcse.algebra.simultaneous-linear",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "value",
    "tags": ["simultaneous equations", "elimination", "addition"],
    "questionText": "Solve $6x + y = 15$ and $4x - y = 5$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Add the equations.", "workingLatex": "10x = 20", "explanation": "$+y$ and $-y$ cancel; $15 + 5 = 20$.", "diagram": null },
        { "stepNumber": 2, "description": "Solve for $x$.", "workingLatex": "x = 2", "explanation": "$20 \\div 10 = 2$.", "diagram": null },
        { "stepNumber": 3, "description": "Substitute back.", "workingLatex": "6(2) + y = 15 \\Rightarrow y = 3", "explanation": "$12 + y = 15$, so $y = 3$.", "diagram": null }
      ],
      "finalAnswer": "$x = 2,\\ y = 3$"
    }
  },
  {
    "id": "gcse.algebra.simultaneous-linear.q026",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Simultaneous equations (linear)",
    "subtopicId": "gcse.algebra.simultaneous-linear",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "value",
    "tags": ["simultaneous equations", "elimination", "scaling both"],
    "questionText": "Solve $5x + 3y = 21$ and $2x + 4y = 14$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Scale both to match $x$.", "workingLatex": "10x + 6y = 42,\\ 10x + 20y = 70", "explanation": "Multiply the first by $2$ and the second by $5$.", "diagram": null },
        { "stepNumber": 2, "description": "Subtract.", "workingLatex": "14y = 28", "explanation": "$20y - 6y = 14y$ and $70 - 42 = 28$.", "diagram": null },
        { "stepNumber": 3, "description": "Solve for $y$.", "workingLatex": "y = 2", "explanation": "$28 \\div 14 = 2$.", "diagram": null },
        { "stepNumber": 4, "description": "Substitute back.", "workingLatex": "5x + 3(2) = 21 \\Rightarrow x = 3", "explanation": "$5x + 6 = 21$, so $5x = 15$ and $x = 3$.", "diagram": null }
      ],
      "finalAnswer": "$x = 3,\\ y = 2$"
    }
  },
  {
    "id": "gcse.algebra.simultaneous-linear.q027",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Simultaneous equations (linear)",
    "subtopicId": "gcse.algebra.simultaneous-linear",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "tags": ["simultaneous equations", "substitution"],
    "questionText": "Solve $y = 3x$ and $x + y = 12$ by substitution.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Substitute into the second equation.", "workingLatex": "x + 3x = 12", "explanation": "Replace $y$ with $3x$.", "diagram": null },
        { "stepNumber": 2, "description": "Solve for $x$.", "workingLatex": "4x = 12 \\Rightarrow x = 3", "explanation": "$x + 3x = 4x$.", "diagram": null },
        { "stepNumber": 3, "description": "Find $y$.", "workingLatex": "y = 3(3) = 9", "explanation": "Substitute $x = 3$ into $y = 3x$.", "diagram": null }
      ],
      "finalAnswer": "$x = 3,\\ y = 9$"
    }
  },
  {
    "id": "gcse.algebra.simultaneous-linear.q028",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Simultaneous equations (linear)",
    "subtopicId": "gcse.algebra.simultaneous-linear",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "value",
    "tags": ["simultaneous equations", "elimination", "subtraction", "negative"],
    "questionText": "Solve $3x + 4y = 2$ and $3x + y = -4$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Subtract to eliminate $x$.", "workingLatex": "(3x + 4y) - (3x + y) = 2 - (-4)", "explanation": "Both have $3x$, so subtracting removes $x$.", "diagram": null },
        { "stepNumber": 2, "description": "Simplify.", "workingLatex": "3y = 6 \\Rightarrow y = 2", "explanation": "$4y - y = 3y$ and $2 + 4 = 6$.", "diagram": null },
        { "stepNumber": 3, "description": "Substitute back.", "workingLatex": "3x + 2 = -4", "explanation": "Use the second equation.", "diagram": null },
        { "stepNumber": 4, "description": "Solve for $x$.", "workingLatex": "3x = -6 \\Rightarrow x = -2", "explanation": "So $x = -2$.", "diagram": null }
      ],
      "finalAnswer": "$x = -2,\\ y = 2$"
    }
  },
  {
    "id": "gcse.algebra.simultaneous-linear.q029",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Simultaneous equations (linear)",
    "subtopicId": "gcse.algebra.simultaneous-linear",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "value",
    "tags": ["simultaneous equations", "word problem", "forming"],
    "questionText": "At a cinema, $2$ adult tickets and $3$ child tickets cost £34. $1$ adult ticket and $4$ child tickets cost £32. Find the price of each type of ticket.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Form the equations.", "workingLatex": "2a + 3c = 34,\\ a + 4c = 32", "explanation": "Let $a$ and $c$ be the adult and child prices in pounds.", "diagram": null },
        { "stepNumber": 2, "description": "Scale the second equation.", "workingLatex": "2a + 8c = 64", "explanation": "Multiply the second by $2$ so both have $2a$.", "diagram": null },
        { "stepNumber": 3, "description": "Subtract from the first.", "workingLatex": "(2a + 3c) - (2a + 8c) = 34 - 64", "explanation": "The $2a$ terms cancel.", "diagram": null },
        { "stepNumber": 4, "description": "Solve for $c$.", "workingLatex": "-5c = -30 \\Rightarrow c = 6", "explanation": "A child ticket is £6.", "diagram": null },
        { "stepNumber": 5, "description": "Find $a$.", "workingLatex": "a + 4(6) = 32 \\Rightarrow a = 8", "explanation": "$a + 24 = 32$, so an adult ticket is £8.", "diagram": null }
      ],
      "finalAnswer": "Adult £8, child £6."
    }
  },
  {
    "id": "gcse.algebra.simultaneous-linear.q030",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Simultaneous equations (linear)",
    "subtopicId": "gcse.algebra.simultaneous-linear",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "value",
    "tags": ["simultaneous equations", "elimination", "subtraction", "fractions"],
    "questionText": "Solve $2x + 3y = 11$ and $2x + y = 5$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Subtract to eliminate $x$.", "workingLatex": "(2x + 3y) - (2x + y) = 11 - 5", "explanation": "Both have $2x$.", "diagram": null },
        { "stepNumber": 2, "description": "Simplify.", "workingLatex": "2y = 6 \\Rightarrow y = 3", "explanation": "$3y - y = 2y$ and $11 - 5 = 6$.", "diagram": null },
        { "stepNumber": 3, "description": "Substitute back.", "workingLatex": "2x + 3 = 5 \\Rightarrow x = 1", "explanation": "$2x = 2$, so $x = 1$.", "diagram": null }
      ],
      "finalAnswer": "$x = 1,\\ y = 3$"
    }
  },
  {
    "id": "gcse.algebra.simultaneous-linear.q031",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Simultaneous equations (linear)",
    "subtopicId": "gcse.algebra.simultaneous-linear",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "tags": ["simultaneous equations", "substitution", "brackets"],
    "questionText": "Solve $x + y = 9$ and $2x - y = 3$ by substitution.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Rearrange the first equation.", "workingLatex": "y = 9 - x", "explanation": "Make $y$ the subject.", "diagram": null },
        { "stepNumber": 2, "description": "Substitute into the second.", "workingLatex": "2x - (9 - x) = 3", "explanation": "Replace $y$ with $9 - x$.", "diagram": null },
        { "stepNumber": 3, "description": "Expand and solve.", "workingLatex": "3x - 9 = 3 \\Rightarrow x = 4", "explanation": "$2x + x = 3x$; $3x = 12$.", "diagram": null },
        { "stepNumber": 4, "description": "Find $y$.", "workingLatex": "y = 9 - 4 = 5", "explanation": "Substitute $x = 4$ back.", "diagram": null }
      ],
      "finalAnswer": "$x = 4,\\ y = 5$"
    }
  },
  {
    "id": "gcse.algebra.simultaneous-linear.q032",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Simultaneous equations (linear)",
    "subtopicId": "gcse.algebra.simultaneous-linear",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "value",
    "tags": ["simultaneous equations", "elimination", "scaling both", "negative"],
    "questionText": "Solve $2x + 3y = -5$ and $3x - 2y = 12$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Scale to match $y$.", "workingLatex": "4x + 6y = -10,\\ 9x - 6y = 36", "explanation": "Multiply the first by $2$ and the second by $3$ so the $y$ terms are $+6y$ and $-6y$.", "diagram": null },
        { "stepNumber": 2, "description": "Add the two equations.", "workingLatex": "13x = 26", "explanation": "Adding cancels $y$; $-10 + 36 = 26$.", "diagram": null },
        { "stepNumber": 3, "description": "Solve for $x$.", "workingLatex": "x = 2", "explanation": "$26 \\div 13 = 2$.", "diagram": null },
        { "stepNumber": 4, "description": "Substitute back.", "workingLatex": "2(2) + 3y = -5", "explanation": "Use the first original equation.", "diagram": null },
        { "stepNumber": 5, "description": "Solve for $y$.", "workingLatex": "3y = -9 \\Rightarrow y = -3", "explanation": "$4 + 3y = -5$, so $3y = -9$.", "diagram": null },
        { "stepNumber": 6, "description": "Check.", "workingLatex": "3(2) - 2(-3) = 12 \\ \\checkmark", "explanation": "The second equation is satisfied.", "diagram": null }
      ],
      "finalAnswer": "$x = 2,\\ y = -3$"
    }
  },
  {
    "id": "gcse.algebra.simultaneous-linear.q033",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Simultaneous equations (linear)",
    "subtopicId": "gcse.algebra.simultaneous-linear",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "value",
    "tags": ["simultaneous equations", "elimination", "addition"],
    "questionText": "Solve $7x + 2y = 24$ and $x - 2y = 0$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Add the equations.", "workingLatex": "8x = 24", "explanation": "$+2y$ and $-2y$ cancel; $24 + 0 = 24$.", "diagram": null },
        { "stepNumber": 2, "description": "Solve for $x$.", "workingLatex": "x = 3", "explanation": "$24 \\div 8 = 3$.", "diagram": null },
        { "stepNumber": 3, "description": "Substitute back.", "workingLatex": "3 - 2y = 0 \\Rightarrow y = 1.5", "explanation": "$2y = 3$, so $y = 1.5$.", "diagram": null }
      ],
      "finalAnswer": "$x = 3,\\ y = 1.5$"
    }
  },
  {
    "id": "gcse.algebra.simultaneous-linear.q034",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Simultaneous equations (linear)",
    "subtopicId": "gcse.algebra.simultaneous-linear",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "value",
    "tags": ["simultaneous equations", "graphical", "intersection"],
    "questionText": "The lines $y = 2x - 1$ and $y = x + 2$ meet at one point. Find the coordinates of that point algebraically.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Set the expressions equal.", "workingLatex": "2x - 1 = x + 2", "explanation": "At the intersection both give the same $y$.", "diagram": null },
        { "stepNumber": 2, "description": "Solve for $x$.", "workingLatex": "x = 3", "explanation": "Subtract $x$ and add $1$: $x = 3$.", "diagram": null },
        { "stepNumber": 3, "description": "Find $y$.", "workingLatex": "y = 3 + 2 = 5", "explanation": "Substitute into either line.", "diagram": null }
      ],
      "finalAnswer": "$(3, 5)$"
    }
  },
  {
    "id": "gcse.algebra.simultaneous-linear.q035",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Simultaneous equations (linear)",
    "subtopicId": "gcse.algebra.simultaneous-linear",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "value",
    "tags": ["simultaneous equations", "elimination", "scaling both"],
    "questionText": "Solve $4x + 3y = 26$ and $3x + 5y = 25$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Scale both to match $x$.", "workingLatex": "12x + 9y = 78,\\ 12x + 20y = 100", "explanation": "Multiply the first by $3$ and the second by $4$ so both have $12x$.", "diagram": null },
        { "stepNumber": 2, "description": "Subtract.", "workingLatex": "11y = 22", "explanation": "$20y - 9y = 11y$ and $100 - 78 = 22$; the $x$ terms cancel.", "diagram": null },
        { "stepNumber": 3, "description": "Solve for $y$.", "workingLatex": "y = 2", "explanation": "$22 \\div 11 = 2$.", "diagram": null },
        { "stepNumber": 4, "description": "Substitute back.", "workingLatex": "4x + 3(2) = 26", "explanation": "Use the first original equation.", "diagram": null },
        { "stepNumber": 5, "description": "Solve for $x$.", "workingLatex": "4x = 20 \\Rightarrow x = 5", "explanation": "$4x + 6 = 26$, so $4x = 20$.", "diagram": null },
        { "stepNumber": 6, "description": "Check.", "workingLatex": "3(5) + 5(2) = 25 \\ \\checkmark", "explanation": "The second equation is satisfied.", "diagram": null }
      ],
      "finalAnswer": "$x = 5,\\ y = 2$"
    }
  },
  {
    "id": "gcse.algebra.simultaneous-linear.q036",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Simultaneous equations (linear)",
    "subtopicId": "gcse.algebra.simultaneous-linear",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "value",
    "tags": ["simultaneous equations", "elimination", "subtraction"],
    "questionText": "Solve $5x + 4y = 22$ and $5x + y = 13$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Subtract to eliminate $x$.", "workingLatex": "(5x + 4y) - (5x + y) = 22 - 13", "explanation": "Both have $5x$.", "diagram": null },
        { "stepNumber": 2, "description": "Simplify.", "workingLatex": "3y = 9 \\Rightarrow y = 3", "explanation": "$4y - y = 3y$ and $22 - 13 = 9$.", "diagram": null },
        { "stepNumber": 3, "description": "Substitute back.", "workingLatex": "5x + 3 = 13 \\Rightarrow x = 2", "explanation": "$5x = 10$, so $x = 2$.", "diagram": null }
      ],
      "finalAnswer": "$x = 2,\\ y = 3$"
    }
  },
  {
    "id": "gcse.algebra.simultaneous-linear.q037",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Simultaneous equations (linear)",
    "subtopicId": "gcse.algebra.simultaneous-linear",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "tags": ["simultaneous equations", "substitution"],
    "questionText": "Solve $y = 5 - 2x$ and $4x + 2y = 8$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Substitute into the second equation.", "workingLatex": "4x + 2(5 - 2x) = 8", "explanation": "Replace $y$ with $5 - 2x$.", "diagram": null },
        { "stepNumber": 2, "description": "Expand.", "workingLatex": "4x + 10 - 4x = 8", "explanation": "Multiply out the bracket.", "diagram": null },
        { "stepNumber": 3, "description": "Interpret.", "workingLatex": "10 = 8", "explanation": "The $x$ terms cancel and leave a false statement.", "diagram": null },
        { "stepNumber": 4, "description": "Conclude.", "workingLatex": "\\text{no solution}", "explanation": "Since $10 \\neq 8$, the lines are parallel and there is no solution.", "diagram": null }
      ],
      "finalAnswer": "No solution (the lines are parallel)."
    }
  },
  {
    "id": "gcse.algebra.simultaneous-linear.q038",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Simultaneous equations (linear)",
    "subtopicId": "gcse.algebra.simultaneous-linear",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "value",
    "tags": ["simultaneous equations", "word problem", "forming", "elimination"],
    "questionText": "The sum of two numbers is $30$ and their difference is $8$. Find the two numbers.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Form the equations.", "workingLatex": "x + y = 30,\\ x - y = 8", "explanation": "Let the numbers be $x$ and $y$, with $x$ the larger.", "diagram": null },
        { "stepNumber": 2, "description": "Add the equations.", "workingLatex": "2x = 38 \\Rightarrow x = 19", "explanation": "The $y$ terms cancel; $30 + 8 = 38$.", "diagram": null },
        { "stepNumber": 3, "description": "Find $y$.", "workingLatex": "19 + y = 30 \\Rightarrow y = 11", "explanation": "Use the sum equation.", "diagram": null }
      ],
      "finalAnswer": "The numbers are $19$ and $11$."
    }
  },
  {
    "id": "gcse.algebra.simultaneous-linear.q039",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Simultaneous equations (linear)",
    "subtopicId": "gcse.algebra.simultaneous-linear",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "value",
    "tags": ["simultaneous equations", "elimination", "scaling"],
    "questionText": "Solve $x + 4y = 14$ and $3x + 2y = 12$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Scale the first equation.", "workingLatex": "3x + 12y = 42", "explanation": "Multiply the first by $3$ so both have $3x$.", "diagram": null },
        { "stepNumber": 2, "description": "Subtract the second.", "workingLatex": "(3x + 12y) - (3x + 2y) = 42 - 12", "explanation": "The $3x$ terms cancel.", "diagram": null },
        { "stepNumber": 3, "description": "Simplify.", "workingLatex": "10y = 30 \\Rightarrow y = 3", "explanation": "$12y - 2y = 10y$ and $42 - 12 = 30$.", "diagram": null },
        { "stepNumber": 4, "description": "Substitute back.", "workingLatex": "x + 4(3) = 14 \\Rightarrow x = 2", "explanation": "$x + 12 = 14$, so $x = 2$.", "diagram": null }
      ],
      "finalAnswer": "$x = 2,\\ y = 3$"
    }
  },
  {
    "id": "gcse.algebra.simultaneous-linear.q040",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Simultaneous equations (linear)",
    "subtopicId": "gcse.algebra.simultaneous-linear",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "value",
    "tags": ["simultaneous equations", "elimination", "addition", "negative"],
    "questionText": "Solve $x + 2y = 1$ and $x - y = 4$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Subtract to eliminate $x$.", "workingLatex": "(x + 2y) - (x - y) = 1 - 4", "explanation": "Both have $x$.", "diagram": null },
        { "stepNumber": 2, "description": "Simplify.", "workingLatex": "3y = -3 \\Rightarrow y = -1", "explanation": "$2y - (-y) = 3y$ and $1 - 4 = -3$.", "diagram": null },
        { "stepNumber": 3, "description": "Substitute back.", "workingLatex": "x - (-1) = 4 \\Rightarrow x = 3", "explanation": "$x + 1 = 4$, so $x = 3$.", "diagram": null }
      ],
      "finalAnswer": "$x = 3,\\ y = -1$"
    }
  },
  {
    "id": "gcse.algebra.simultaneous-linear.q041",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Simultaneous equations (linear)",
    "subtopicId": "gcse.algebra.simultaneous-linear",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "value",
    "tags": ["simultaneous equations", "elimination", "subtraction"],
    "questionText": "Solve $3x + y = 9$ and $x + y = 5$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Subtract the second from the first.", "workingLatex": "2x = 4", "explanation": "Both have $+y$; $9 - 5 = 4$.", "diagram": null },
        { "stepNumber": 2, "description": "Solve for $x$.", "workingLatex": "x = 2", "explanation": "$4 \\div 2 = 2$.", "diagram": null },
        { "stepNumber": 3, "description": "Substitute back.", "workingLatex": "2 + y = 5 \\Rightarrow y = 3", "explanation": "Use the second equation.", "diagram": null }
      ],
      "finalAnswer": "$x = 2,\\ y = 3$"
    }
  },
  {
    "id": "gcse.algebra.simultaneous-linear.q042",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Simultaneous equations (linear)",
    "subtopicId": "gcse.algebra.simultaneous-linear",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "tags": ["simultaneous equations", "elimination", "scaling"],
    "questionText": "Solve $4x + y = 18$ and $x + 3y = 10$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Scale the first equation.", "workingLatex": "12x + 3y = 54", "explanation": "Multiply the first by $3$ so both have $3y$.", "diagram": null },
        { "stepNumber": 2, "description": "Subtract the second.", "workingLatex": "(12x + 3y) - (x + 3y) = 54 - 10", "explanation": "The $3y$ terms cancel.", "diagram": null },
        { "stepNumber": 3, "description": "Simplify.", "workingLatex": "11x = 44 \\Rightarrow x = 4", "explanation": "$12x - x = 11x$ and $54 - 10 = 44$.", "diagram": null },
        { "stepNumber": 4, "description": "Substitute back.", "workingLatex": "4(4) + y = 18 \\Rightarrow y = 2", "explanation": "$16 + y = 18$, so $y = 2$.", "diagram": null }
      ],
      "finalAnswer": "$x = 4,\\ y = 2$"
    }
  },
  {
    "id": "gcse.algebra.simultaneous-linear.q043",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Simultaneous equations (linear)",
    "subtopicId": "gcse.algebra.simultaneous-linear",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "value",
    "tags": ["simultaneous equations", "word problem", "forming", "scaling"],
    "questionText": "A shop sells pens and pencils. $5$ pens and $2$ pencils cost £3.10. $3$ pens and $4$ pencils cost £3.40. Find the price of a pen and a pencil.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Form the equations.", "workingLatex": "5p + 2q = 3.10,\\ 3p + 4q = 3.40", "explanation": "Let $p$ and $q$ be the prices in pounds.", "diagram": null },
        { "stepNumber": 2, "description": "Scale the first equation.", "workingLatex": "10p + 4q = 6.20", "explanation": "Multiply the first by $2$ so both have $4q$.", "diagram": null },
        { "stepNumber": 3, "description": "Subtract the second.", "workingLatex": "(10p + 4q) - (3p + 4q) = 6.20 - 3.40", "explanation": "The $4q$ terms cancel.", "diagram": null },
        { "stepNumber": 4, "description": "Solve for $p$.", "workingLatex": "7p = 2.80 \\Rightarrow p = 0.40", "explanation": "A pen costs £0.40.", "diagram": null },
        { "stepNumber": 5, "description": "Find $q$.", "workingLatex": "5(0.40) + 2q = 3.10 \\Rightarrow q = 0.55", "explanation": "$2.00 + 2q = 3.10$, so $2q = 1.10$ and $q = 0.55$.", "diagram": null }
      ],
      "finalAnswer": "Pen £0.40, pencil £0.55."
    }
  },
  {
    "id": "gcse.algebra.simultaneous-linear.q044",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Simultaneous equations (linear)",
    "subtopicId": "gcse.algebra.simultaneous-linear",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "value",
    "tags": ["simultaneous equations", "elimination", "addition"],
    "questionText": "Solve $2x + 5y = 19$ and $2x - 5y = -1$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Add the equations.", "workingLatex": "4x = 18", "explanation": "$+5y$ and $-5y$ cancel; $19 + (-1) = 18$.", "diagram": null },
        { "stepNumber": 2, "description": "Solve for $x$.", "workingLatex": "x = 4.5", "explanation": "$18 \\div 4 = 4.5$.", "diagram": null },
        { "stepNumber": 3, "description": "Substitute back.", "workingLatex": "2(4.5) + 5y = 19 \\Rightarrow y = 2", "explanation": "$9 + 5y = 19$, so $5y = 10$ and $y = 2$.", "diagram": null }
      ],
      "finalAnswer": "$x = 4.5,\\ y = 2$"
    }
  },
  {
    "id": "gcse.algebra.simultaneous-linear.q045",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Simultaneous equations (linear)",
    "subtopicId": "gcse.algebra.simultaneous-linear",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "tags": ["simultaneous equations", "substitution"],
    "questionText": "Solve $x = 2y + 1$ and $3x - 4y = 7$ by substitution.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Substitute into the second equation.", "workingLatex": "3(2y + 1) - 4y = 7", "explanation": "Replace $x$ with $2y + 1$.", "diagram": null },
        { "stepNumber": 2, "description": "Expand.", "workingLatex": "6y + 3 - 4y = 7", "explanation": "Multiply out the bracket.", "diagram": null },
        { "stepNumber": 3, "description": "Collect and solve.", "workingLatex": "2y + 3 = 7 \\Rightarrow y = 2", "explanation": "$2y = 4$, so $y = 2$.", "diagram": null },
        { "stepNumber": 4, "description": "Find $x$.", "workingLatex": "x = 2(2) + 1 = 5", "explanation": "Substitute $y = 2$ into $x = 2y + 1$.", "diagram": null }
      ],
      "finalAnswer": "$x = 5,\\ y = 2$"
    }
  },
  {
    "id": "gcse.algebra.simultaneous-linear.q046",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Simultaneous equations (linear)",
    "subtopicId": "gcse.algebra.simultaneous-linear",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "value",
    "tags": ["simultaneous equations", "elimination", "subtraction"],
    "questionText": "Solve $7x + 3y = 27$ and $2x + 3y = 12$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Subtract to eliminate $y$.", "workingLatex": "(7x + 3y) - (2x + 3y) = 27 - 12", "explanation": "Both have $+3y$.", "diagram": null },
        { "stepNumber": 2, "description": "Simplify.", "workingLatex": "5x = 15 \\Rightarrow x = 3", "explanation": "$7x - 2x = 5x$ and $27 - 12 = 15$.", "diagram": null },
        { "stepNumber": 3, "description": "Substitute back.", "workingLatex": "2(3) + 3y = 12 \\Rightarrow y = 2", "explanation": "$6 + 3y = 12$, so $3y = 6$ and $y = 2$.", "diagram": null }
      ],
      "finalAnswer": "$x = 3,\\ y = 2$"
    }
  },
  {
    "id": "gcse.algebra.simultaneous-linear.q047",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Simultaneous equations (linear)",
    "subtopicId": "gcse.algebra.simultaneous-linear",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "value",
    "tags": ["simultaneous equations", "elimination", "scaling both"],
    "questionText": "Solve $3x + 2y = 20$ and $4x + 5y = 43$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Scale to match $x$.", "workingLatex": "12x + 8y = 80,\\ 12x + 15y = 129", "explanation": "Multiply the first by $4$ and the second by $3$.", "diagram": null },
        { "stepNumber": 2, "description": "Subtract.", "workingLatex": "7y = 49", "explanation": "$15y - 8y = 7y$ and $129 - 80 = 49$.", "diagram": null },
        { "stepNumber": 3, "description": "Solve for $y$.", "workingLatex": "y = 7", "explanation": "$49 \\div 7 = 7$.", "diagram": null },
        { "stepNumber": 4, "description": "Substitute back.", "workingLatex": "3x + 2(7) = 20 \\Rightarrow x = 2", "explanation": "$3x + 14 = 20$, so $3x = 6$ and $x = 2$.", "diagram": null }
      ],
      "finalAnswer": "$x = 2,\\ y = 7$"
    }
  },
  {
    "id": "gcse.algebra.simultaneous-linear.q048",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Simultaneous equations (linear)",
    "subtopicId": "gcse.algebra.simultaneous-linear",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "value",
    "tags": ["simultaneous equations", "elimination", "addition"],
    "questionText": "Solve $5x + 3y = 21$ and $2x - 3y = 0$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Add the equations.", "workingLatex": "7x = 21", "explanation": "$+3y$ and $-3y$ cancel; $21 + 0 = 21$.", "diagram": null },
        { "stepNumber": 2, "description": "Solve for $x$.", "workingLatex": "x = 3", "explanation": "$21 \\div 7 = 3$.", "diagram": null },
        { "stepNumber": 3, "description": "Substitute back.", "workingLatex": "2(3) - 3y = 0 \\Rightarrow y = 2", "explanation": "$6 - 3y = 0$, so $3y = 6$ and $y = 2$.", "diagram": null }
      ],
      "finalAnswer": "$x = 3,\\ y = 2$"
    }
  },
  {
    "id": "gcse.algebra.simultaneous-linear.q049",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Simultaneous equations (linear)",
    "subtopicId": "gcse.algebra.simultaneous-linear",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "tags": ["simultaneous equations", "substitution", "negative"],
    "questionText": "Solve $y = x - 4$ and $2x + y = 5$ by substitution.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Substitute into the second equation.", "workingLatex": "2x + (x - 4) = 5", "explanation": "Replace $y$ with $x - 4$.", "diagram": null },
        { "stepNumber": 2, "description": "Collect and solve.", "workingLatex": "3x - 4 = 5 \\Rightarrow x = 3", "explanation": "$3x = 9$, so $x = 3$.", "diagram": null },
        { "stepNumber": 3, "description": "Find $y$.", "workingLatex": "y = 3 - 4 = -1", "explanation": "Substitute $x = 3$ into $y = x - 4$.", "diagram": null }
      ],
      "finalAnswer": "$x = 3,\\ y = -1$"
    }
  },
  {
    "id": "gcse.algebra.simultaneous-linear.q050",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Simultaneous equations (linear)",
    "subtopicId": "gcse.algebra.simultaneous-linear",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "value",
    "tags": ["simultaneous equations", "word problem", "forming", "ages"],
    "questionText": "Anna is $x$ years old and Ben is $y$ years old. Anna is $3$ years older than Ben, and the sum of their ages is $27$. Find their ages.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Form the equations.", "workingLatex": "x - y = 3,\\ x + y = 27", "explanation": "\"3 years older\" gives the first; \"sum is 27\" gives the second.", "diagram": null },
        { "stepNumber": 2, "description": "Add the equations.", "workingLatex": "2x = 30 \\Rightarrow x = 15", "explanation": "The $y$ terms cancel; $3 + 27 = 30$.", "diagram": null },
        { "stepNumber": 3, "description": "Find $y$.", "workingLatex": "15 + y = 27 \\Rightarrow y = 12", "explanation": "Use the sum equation.", "diagram": null }
      ],
      "finalAnswer": "Anna is $15$ and Ben is $12$."
    }
  },
  {
    "id": "gcse.algebra.simultaneous-linear.q051",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Simultaneous equations (linear)",
    "subtopicId": "gcse.algebra.simultaneous-linear",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "value",
    "tags": ["simultaneous equations", "elimination", "subtraction"],
    "questionText": "Solve $6x + 5y = 27$ and $6x + 2y = 18$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Subtract to eliminate $x$.", "workingLatex": "(6x + 5y) - (6x + 2y) = 27 - 18", "explanation": "Both have $6x$.", "diagram": null },
        { "stepNumber": 2, "description": "Simplify.", "workingLatex": "3y = 9 \\Rightarrow y = 3", "explanation": "$5y - 2y = 3y$ and $27 - 18 = 9$.", "diagram": null },
        { "stepNumber": 3, "description": "Substitute back.", "workingLatex": "6x + 2(3) = 18 \\Rightarrow x = 2", "explanation": "$6x + 6 = 18$, so $6x = 12$ and $x = 2$.", "diagram": null }
      ],
      "finalAnswer": "$x = 2,\\ y = 3$"
    }
  },
  {
    "id": "gcse.algebra.simultaneous-linear.q052",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Simultaneous equations (linear)",
    "subtopicId": "gcse.algebra.simultaneous-linear",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "value",
    "tags": ["simultaneous equations", "elimination", "scaling both", "negative"],
    "questionText": "Solve $5x + 2y = 4$ and $4x + 3y = 13$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Scale to match $y$.", "workingLatex": "15x + 6y = 12,\\ 8x + 6y = 26", "explanation": "Multiply the first by $3$ and the second by $2$ so both have $6y$.", "diagram": null },
        { "stepNumber": 2, "description": "Subtract.", "workingLatex": "7x = -14", "explanation": "$15x - 8x = 7x$ and $12 - 26 = -14$.", "diagram": null },
        { "stepNumber": 3, "description": "Solve for $x$.", "workingLatex": "x = -2", "explanation": "$-14 \\div 7 = -2$.", "diagram": null },
        { "stepNumber": 4, "description": "Substitute back.", "workingLatex": "5(-2) + 2y = 4 \\Rightarrow y = 7", "explanation": "$-10 + 2y = 4$, so $2y = 14$ and $y = 7$.", "diagram": null }
      ],
      "finalAnswer": "$x = -2,\\ y = 7$"
    }
  },
  {
    "id": "gcse.algebra.simultaneous-linear.q053",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Simultaneous equations (linear)",
    "subtopicId": "gcse.algebra.simultaneous-linear",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "value",
    "tags": ["simultaneous equations", "elimination", "addition"],
    "questionText": "Solve $x + y = 12$ and $x - y = 2$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Add the equations.", "workingLatex": "2x = 14 \\Rightarrow x = 7", "explanation": "$+y$ and $-y$ cancel; $12 + 2 = 14$.", "diagram": null },
        { "stepNumber": 2, "description": "Substitute back.", "workingLatex": "7 + y = 12 \\Rightarrow y = 5", "explanation": "Use the first equation.", "diagram": null }
      ],
      "finalAnswer": "$x = 7,\\ y = 5$"
    }
  },
  {
    "id": "gcse.algebra.simultaneous-linear.q054",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Simultaneous equations (linear)",
    "subtopicId": "gcse.algebra.simultaneous-linear",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "tags": ["simultaneous equations", "elimination", "scaling"],
    "questionText": "Solve $2x + y = 5$ and $3x + 4y = 10$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Scale the first equation.", "workingLatex": "8x + 4y = 20", "explanation": "Multiply the first by $4$ so both have $4y$.", "diagram": null },
        { "stepNumber": 2, "description": "Subtract the second.", "workingLatex": "(8x + 4y) - (3x + 4y) = 20 - 10", "explanation": "The $4y$ terms cancel.", "diagram": null },
        { "stepNumber": 3, "description": "Simplify.", "workingLatex": "5x = 10 \\Rightarrow x = 2", "explanation": "$8x - 3x = 5x$ and $20 - 10 = 10$.", "diagram": null },
        { "stepNumber": 4, "description": "Substitute back.", "workingLatex": "2(2) + y = 5 \\Rightarrow y = 1", "explanation": "$4 + y = 5$, so $y = 1$.", "diagram": null }
      ],
      "finalAnswer": "$x = 2,\\ y = 1$"
    }
  },
  {
    "id": "gcse.algebra.simultaneous-linear.q055",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Simultaneous equations (linear)",
    "subtopicId": "gcse.algebra.simultaneous-linear",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "value",
    "tags": ["simultaneous equations", "graphical", "intersection"],
    "questionText": "Find where the lines $2x + y = 8$ and $y = x - 1$ cross.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Substitute the second into the first.", "workingLatex": "2x + (x - 1) = 8", "explanation": "Replace $y$ with $x - 1$.", "diagram": null },
        { "stepNumber": 2, "description": "Solve for $x$.", "workingLatex": "3x - 1 = 8 \\Rightarrow x = 3", "explanation": "$3x = 9$, so $x = 3$.", "diagram": null },
        { "stepNumber": 3, "description": "Find $y$.", "workingLatex": "y = 3 - 1 = 2", "explanation": "Substitute back into $y = x - 1$.", "diagram": null }
      ],
      "finalAnswer": "$(3, 2)$"
    }
  },
  {
    "id": "gcse.algebra.simultaneous-linear.q056",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Simultaneous equations (linear)",
    "subtopicId": "gcse.algebra.simultaneous-linear",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "value",
    "tags": ["simultaneous equations", "elimination", "scaling both"],
    "questionText": "Solve $6x + 5y = 62$ and $4x + 3y = 40$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Scale to match $x$.", "workingLatex": "12x + 10y = 124,\\ 12x + 9y = 120", "explanation": "Multiply the first by $2$ and the second by $3$.", "diagram": null },
        { "stepNumber": 2, "description": "Subtract.", "workingLatex": "y = 4", "explanation": "$10y - 9y = y$ and $124 - 120 = 4$.", "diagram": null },
        { "stepNumber": 3, "description": "Substitute back.", "workingLatex": "4x + 3(4) = 40 \\Rightarrow x = 7", "explanation": "$4x + 12 = 40$, so $4x = 28$ and $x = 7$.", "diagram": null }
      ],
      "finalAnswer": "$x = 7,\\ y = 4$"
    }
  },
  {
    "id": "gcse.algebra.simultaneous-linear.q057",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Simultaneous equations (linear)",
    "subtopicId": "gcse.algebra.simultaneous-linear",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "value",
    "tags": ["simultaneous equations", "elimination", "addition"],
    "questionText": "Solve $4x + 3y = 18$ and $4x - 3y = 6$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Add the equations.", "workingLatex": "8x = 24 \\Rightarrow x = 3", "explanation": "$+3y$ and $-3y$ cancel; $18 + 6 = 24$.", "diagram": null },
        { "stepNumber": 2, "description": "Substitute back.", "workingLatex": "4(3) + 3y = 18 \\Rightarrow y = 2", "explanation": "$12 + 3y = 18$, so $3y = 6$ and $y = 2$.", "diagram": null }
      ],
      "finalAnswer": "$x = 3,\\ y = 2$"
    }
  },
  {
    "id": "gcse.algebra.simultaneous-linear.q058",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Simultaneous equations (linear)",
    "subtopicId": "gcse.algebra.simultaneous-linear",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "tags": ["simultaneous equations", "substitution"],
    "questionText": "Solve $x + y = 6$ and $y = 2x$ by substitution.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Substitute into the first equation.", "workingLatex": "x + 2x = 6", "explanation": "Replace $y$ with $2x$.", "diagram": null },
        { "stepNumber": 2, "description": "Solve for $x$.", "workingLatex": "3x = 6 \\Rightarrow x = 2", "explanation": "$x + 2x = 3x$.", "diagram": null },
        { "stepNumber": 3, "description": "Find $y$.", "workingLatex": "y = 2(2) = 4", "explanation": "Substitute $x = 2$ into $y = 2x$.", "diagram": null }
      ],
      "finalAnswer": "$x = 2,\\ y = 4$"
    }
  },
  {
    "id": "gcse.algebra.simultaneous-linear.q059",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Simultaneous equations (linear)",
    "subtopicId": "gcse.algebra.simultaneous-linear",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "value",
    "tags": ["simultaneous equations", "elimination", "scaling both", "negative"],
    "questionText": "Solve $3x - 4y = 33$ and $2x + 3y = 5$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Scale to match $y$.", "workingLatex": "9x - 12y = 99,\\ 8x + 12y = 20", "explanation": "Multiply the first by $3$ and the second by $4$ so the $y$ terms are $-12y$ and $+12y$.", "diagram": null },
        { "stepNumber": 2, "description": "Add the equations.", "workingLatex": "17x = 119", "explanation": "Adding cancels $y$; $99 + 20 = 119$.", "diagram": null },
        { "stepNumber": 3, "description": "Solve for $x$.", "workingLatex": "x = 7", "explanation": "$119 \\div 17 = 7$.", "diagram": null },
        { "stepNumber": 4, "description": "Substitute back.", "workingLatex": "2(7) + 3y = 5 \\Rightarrow y = -3", "explanation": "$14 + 3y = 5$, so $3y = -9$ and $y = -3$.", "diagram": null },
        { "stepNumber": 5, "description": "Check.", "workingLatex": "3(7) - 4(-3) = 33 \\ \\checkmark", "explanation": "The first equation is satisfied.", "diagram": null }
      ],
      "finalAnswer": "$x = 7,\\ y = -3$"
    }
  },
  {
    "id": "gcse.algebra.simultaneous-linear.q060",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Simultaneous equations (linear)",
    "subtopicId": "gcse.algebra.simultaneous-linear",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "value",
    "tags": ["simultaneous equations", "elimination", "subtraction"],
    "questionText": "Solve $8x + 3y = 30$ and $2x + 3y = 12$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Subtract to eliminate $y$.", "workingLatex": "(8x + 3y) - (2x + 3y) = 30 - 12", "explanation": "Both have $+3y$.", "diagram": null },
        { "stepNumber": 2, "description": "Simplify.", "workingLatex": "6x = 18 \\Rightarrow x = 3", "explanation": "$8x - 2x = 6x$ and $30 - 12 = 18$.", "diagram": null },
        { "stepNumber": 3, "description": "Substitute back.", "workingLatex": "2(3) + 3y = 12 \\Rightarrow y = 2", "explanation": "$6 + 3y = 12$, so $3y = 6$ and $y = 2$.", "diagram": null }
      ],
      "finalAnswer": "$x = 3,\\ y = 2$"
    }
  },
  {
    "id": "gcse.algebra.simultaneous-linear.q061",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Simultaneous equations (linear)",
    "subtopicId": "gcse.algebra.simultaneous-linear",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "tags": ["simultaneous equations", "elimination", "scaling"],
    "questionText": "Solve $x + 2y = 8$ and $3x + 2y = 16$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Subtract to eliminate $y$.", "workingLatex": "(3x + 2y) - (x + 2y) = 16 - 8", "explanation": "Both have $+2y$.", "diagram": null },
        { "stepNumber": 2, "description": "Simplify.", "workingLatex": "2x = 8 \\Rightarrow x = 4", "explanation": "$3x - x = 2x$ and $16 - 8 = 8$.", "diagram": null },
        { "stepNumber": 3, "description": "Substitute back.", "workingLatex": "4 + 2y = 8 \\Rightarrow y = 2", "explanation": "$2y = 4$, so $y = 2$.", "diagram": null }
      ],
      "finalAnswer": "$x = 4,\\ y = 2$"
    }
  },
  {
    "id": "gcse.algebra.simultaneous-linear.q062",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Simultaneous equations (linear)",
    "subtopicId": "gcse.algebra.simultaneous-linear",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "value",
    "tags": ["simultaneous equations", "word problem", "forming", "scaling"],
    "questionText": "$4$ notebooks and $3$ folders cost £18. $2$ notebooks and $5$ folders cost £16. Find the cost of a notebook and a folder.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Form the equations.", "workingLatex": "4n + 3f = 18,\\ 2n + 5f = 16", "explanation": "Let $n$ and $f$ be the costs in pounds.", "diagram": null },
        { "stepNumber": 2, "description": "Scale the second equation.", "workingLatex": "4n + 10f = 32", "explanation": "Multiply the second by $2$ so both have $4n$.", "diagram": null },
        { "stepNumber": 3, "description": "Subtract from the first.", "workingLatex": "(4n + 3f) - (4n + 10f) = 18 - 32", "explanation": "The $4n$ terms cancel.", "diagram": null },
        { "stepNumber": 4, "description": "Solve for $f$.", "workingLatex": "-7f = -14 \\Rightarrow f = 2", "explanation": "A folder costs £2.", "diagram": null },
        { "stepNumber": 5, "description": "Find $n$.", "workingLatex": "4n + 3(2) = 18 \\Rightarrow n = 3", "explanation": "$4n + 6 = 18$, so $4n = 12$ and $n = 3$.", "diagram": null }
      ],
      "finalAnswer": "Notebook £3, folder £2."
    }
  },
  {
    "id": "gcse.algebra.simultaneous-linear.q063",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Simultaneous equations (linear)",
    "subtopicId": "gcse.algebra.simultaneous-linear",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "value",
    "tags": ["simultaneous equations", "elimination", "addition"],
    "questionText": "Solve $3x + 7y = 27$ and $3x - 2y = 0$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Subtract to eliminate $x$.", "workingLatex": "(3x + 7y) - (3x - 2y) = 27 - 0", "explanation": "Both have $3x$.", "diagram": null },
        { "stepNumber": 2, "description": "Simplify.", "workingLatex": "9y = 27 \\Rightarrow y = 3", "explanation": "$7y - (-2y) = 9y$.", "diagram": null },
        { "stepNumber": 3, "description": "Substitute back.", "workingLatex": "3x - 2(3) = 0 \\Rightarrow x = 2", "explanation": "$3x = 6$, so $x = 2$.", "diagram": null }
      ],
      "finalAnswer": "$x = 2,\\ y = 3$"
    }
  },
  {
    "id": "gcse.algebra.simultaneous-linear.q064",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Simultaneous equations (linear)",
    "subtopicId": "gcse.algebra.simultaneous-linear",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "value",
    "tags": ["simultaneous equations", "elimination", "scaling both"],
    "questionText": "Solve $5x + 4y = 23$ and $3x + 2y = 13$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Scale the second equation.", "workingLatex": "6x + 4y = 26", "explanation": "Multiply the second by $2$ so both have $4y$.", "diagram": null },
        { "stepNumber": 2, "description": "Subtract from the first.", "workingLatex": "(5x + 4y) - (6x + 4y) = 23 - 26", "explanation": "The $4y$ terms cancel.", "diagram": null },
        { "stepNumber": 3, "description": "Simplify.", "workingLatex": "-x = -3 \\Rightarrow x = 3", "explanation": "$5x - 6x = -x$ and $23 - 26 = -3$.", "diagram": null },
        { "stepNumber": 4, "description": "Substitute back.", "workingLatex": "3(3) + 2y = 13 \\Rightarrow y = 2", "explanation": "$9 + 2y = 13$, so $2y = 4$ and $y = 2$.", "diagram": null }
      ],
      "finalAnswer": "$x = 3,\\ y = 2$"
    }
  },
  {
    "id": "gcse.algebra.simultaneous-linear.q065",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Simultaneous equations (linear)",
    "subtopicId": "gcse.algebra.simultaneous-linear",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "tags": ["simultaneous equations", "substitution", "negative"],
    "questionText": "Solve $y = 2x + 3$ and $x + y = 0$ by substitution.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Substitute into the second equation.", "workingLatex": "x + (2x + 3) = 0", "explanation": "Replace $y$ with $2x + 3$.", "diagram": null },
        { "stepNumber": 2, "description": "Collect and solve.", "workingLatex": "3x + 3 = 0 \\Rightarrow x = -1", "explanation": "$3x = -3$, so $x = -1$.", "diagram": null },
        { "stepNumber": 3, "description": "Find $y$.", "workingLatex": "y = 2(-1) + 3 = 1", "explanation": "Substitute $x = -1$ into $y = 2x + 3$.", "diagram": null }
      ],
      "finalAnswer": "$x = -1,\\ y = 1$"
    }
  },
  {
    "id": "gcse.algebra.simultaneous-linear.q066",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Simultaneous equations (linear)",
    "subtopicId": "gcse.algebra.simultaneous-linear",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "value",
    "tags": ["simultaneous equations", "elimination", "subtraction"],
    "questionText": "Solve $9x + 2y = 34$ and $5x + 2y = 22$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Subtract to eliminate $y$.", "workingLatex": "(9x + 2y) - (5x + 2y) = 34 - 22", "explanation": "Both have $+2y$.", "diagram": null },
        { "stepNumber": 2, "description": "Simplify.", "workingLatex": "4x = 12 \\Rightarrow x = 3", "explanation": "$9x - 5x = 4x$ and $34 - 22 = 12$.", "diagram": null },
        { "stepNumber": 3, "description": "Substitute back.", "workingLatex": "5(3) + 2y = 22 \\Rightarrow y = 3.5", "explanation": "$15 + 2y = 22$, so $2y = 7$ and $y = 3.5$.", "diagram": null }
      ],
      "finalAnswer": "$x = 3,\\ y = 3.5$"
    }
  },
  {
    "id": "gcse.algebra.simultaneous-linear.q067",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Simultaneous equations (linear)",
    "subtopicId": "gcse.algebra.simultaneous-linear",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "value",
    "tags": ["simultaneous equations", "elimination", "scaling both"],
    "questionText": "Solve $7x + 2y = 47$ and $5x + 4y = 49$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Scale the first equation.", "workingLatex": "14x + 4y = 94", "explanation": "Multiply the first by $2$ so both have $4y$.", "diagram": null },
        { "stepNumber": 2, "description": "Subtract the second.", "workingLatex": "(14x + 4y) - (5x + 4y) = 94 - 49", "explanation": "The $4y$ terms cancel.", "diagram": null },
        { "stepNumber": 3, "description": "Simplify.", "workingLatex": "9x = 45 \\Rightarrow x = 5", "explanation": "$14x - 5x = 9x$ and $94 - 49 = 45$.", "diagram": null },
        { "stepNumber": 4, "description": "Substitute back.", "workingLatex": "7(5) + 2y = 47 \\Rightarrow y = 6", "explanation": "$35 + 2y = 47$, so $2y = 12$ and $y = 6$.", "diagram": null }
      ],
      "finalAnswer": "$x = 5,\\ y = 6$"
    }
  },
  {
    "id": "gcse.algebra.simultaneous-linear.q068",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Simultaneous equations (linear)",
    "subtopicId": "gcse.algebra.simultaneous-linear",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "value",
    "tags": ["simultaneous equations", "elimination", "addition"],
    "questionText": "Solve $3x + 2y = 4$ and $-3x + 5y = 17$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Add the equations.", "workingLatex": "7y = 21", "explanation": "$+3x$ and $-3x$ cancel; $4 + 17 = 21$.", "diagram": null },
        { "stepNumber": 2, "description": "Solve for $y$.", "workingLatex": "y = 3", "explanation": "$21 \\div 7 = 3$.", "diagram": null },
        { "stepNumber": 3, "description": "Substitute back.", "workingLatex": "3x + 2(3) = 4 \\Rightarrow x = -\\tfrac{2}{3}", "explanation": "$3x + 6 = 4$, so $3x = -2$ and $x = -\\tfrac{2}{3}$.", "diagram": null }
      ],
      "finalAnswer": "$x = -\\tfrac{2}{3},\\ y = 3$"
    }
  },
  {
    "id": "gcse.algebra.simultaneous-linear.q069",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Simultaneous equations (linear)",
    "subtopicId": "gcse.algebra.simultaneous-linear",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "value",
    "tags": ["simultaneous equations", "word problem", "forming", "perimeter"],
    "questionText": "A rectangle has perimeter $34$ cm. Its length is $5$ cm more than its width. Find the length and width.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Form the equations.", "workingLatex": "2(l + w) = 34,\\ l = w + 5", "explanation": "Perimeter gives the first; the length statement gives the second.", "diagram": null },
        { "stepNumber": 2, "description": "Simplify the first.", "workingLatex": "l + w = 17", "explanation": "Divide the perimeter equation by $2$.", "diagram": null },
        { "stepNumber": 3, "description": "Substitute the second in.", "workingLatex": "(w + 5) + w = 17", "explanation": "Replace $l$ with $w + 5$.", "diagram": null },
        { "stepNumber": 4, "description": "Solve for $w$.", "workingLatex": "2w + 5 = 17 \\Rightarrow w = 6", "explanation": "$2w = 12$, so $w = 6$.", "diagram": null },
        { "stepNumber": 5, "description": "Find $l$.", "workingLatex": "l = 6 + 5 = 11", "explanation": "Use the length statement.", "diagram": null }
      ],
      "finalAnswer": "Length $11$ cm, width $6$ cm."
    }
  },
  {
    "id": "gcse.algebra.simultaneous-linear.q070",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Simultaneous equations (linear)",
    "subtopicId": "gcse.algebra.simultaneous-linear",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "value",
    "tags": ["simultaneous equations", "elimination", "scaling both", "negative"],
    "questionText": "Solve $2x + 3y = 4$ and $5x + 4y = 3$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Scale to match $y$.", "workingLatex": "8x + 12y = 16,\\ 15x + 12y = 9", "explanation": "Multiply the first by $4$ and the second by $3$ so both have $12y$.", "diagram": null },
        { "stepNumber": 2, "description": "Subtract.", "workingLatex": "-7x = 7", "explanation": "$8x - 15x = -7x$ and $16 - 9 = 7$.", "diagram": null },
        { "stepNumber": 3, "description": "Solve for $x$.", "workingLatex": "x = -1", "explanation": "$7 \\div (-7) = -1$.", "diagram": null },
        { "stepNumber": 4, "description": "Substitute back.", "workingLatex": "2(-1) + 3y = 4 \\Rightarrow y = 2", "explanation": "$-2 + 3y = 4$, so $3y = 6$ and $y = 2$.", "diagram": null },
        { "stepNumber": 5, "description": "Check.", "workingLatex": "5(-1) + 4(2) = 3 \\ \\checkmark", "explanation": "The second equation is satisfied.", "diagram": null }
      ],
      "finalAnswer": "$x = -1,\\ y = 2$"
    }
  }
];
