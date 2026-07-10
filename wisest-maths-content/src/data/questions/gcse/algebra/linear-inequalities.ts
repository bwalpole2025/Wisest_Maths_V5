import { Question } from "@/lib/types";

export const questions: Question[] = [
  {
    "id": "gcse.algebra.linear-inequalities.q001",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Linear inequalities",
    "subtopicId": "gcse.algebra.linear-inequalities",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "expression",
    "tags": ["inequalities", "notation"],
    "questionText": "Write the statement \u201c$x$ is greater than $7$\u201d using inequality notation.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Pick the right symbol.", "workingLatex": ">", "explanation": "\u2018Greater than\u2019 with no \u2018or equal to\u2019 is the strict symbol $>$.", "diagram": null },
        { "stepNumber": 2, "description": "Write the inequality.", "workingLatex": "x > 7", "explanation": "Keeping $x$ on the left matches the order of the sentence: $x$ can be any value larger than $7$.", "diagram": null }
      ],
      "finalAnswer": "$x > 7$"
    }
  },
  {
    "id": "gcse.algebra.linear-inequalities.q002",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Linear inequalities",
    "subtopicId": "gcse.algebra.linear-inequalities",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "expression",
    "tags": ["inequalities", "notation"],
    "questionText": "Write the statement \u201c$y$ is less than or equal to $3$\u201d using inequality notation.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Pick the right symbol.", "workingLatex": "\\leq", "explanation": "\u2018Less than or equal to\u2019 includes the value itself, so we use $\\leq$ rather than $<$.", "diagram": null },
        { "stepNumber": 2, "description": "Write the inequality.", "workingLatex": "y \\leq 3", "explanation": "So $y$ can be $3$ or anything smaller.", "diagram": null }
      ],
      "finalAnswer": "$y \\leq 3$"
    }
  },
  {
    "id": "gcse.algebra.linear-inequalities.q003",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Linear inequalities",
    "subtopicId": "gcse.algebra.linear-inequalities",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "expression",
    "tags": ["inequalities", "number line", "reading"],
    "questionText": "Write down the inequality shown on the number line.",
    "questionDiagram": { "kind": "numberLineRay", "min": -3, "max": 7, "endpoint": 2, "direction": "right", "closed": false, "label": "?", "caption": "Open circle at 2, shaded to the right.", "alt": "Number line with an open circle at 2 and the region to the right shaded." },
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Read the circle.", "workingLatex": "\\circ \\text{ at } 2", "explanation": "An open (hollow) circle means the endpoint $2$ is not included.", "diagram": null },
        { "stepNumber": 2, "description": "Read the shading.", "workingLatex": "\\rightarrow", "explanation": "The shading points right, towards larger numbers, so $x$ is bigger than $2$.", "diagram": null },
        { "stepNumber": 3, "description": "Write the inequality.", "workingLatex": "x > 2", "explanation": "Open circle plus \u2018to the right\u2019 gives the strict inequality $x > 2$.", "diagram": null }
      ],
      "finalAnswer": "$x > 2$"
    }
  },
  {
    "id": "gcse.algebra.linear-inequalities.q004",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Linear inequalities",
    "subtopicId": "gcse.algebra.linear-inequalities",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "expression",
    "tags": ["inequalities", "number line", "reading"],
    "questionText": "Write down the inequality shown on the number line.",
    "questionDiagram": { "kind": "numberLineRay", "min": -6, "max": 4, "endpoint": -1, "direction": "left", "closed": true, "label": "?", "caption": "Filled circle at \u22121, shaded to the left.", "alt": "Number line with a filled circle at minus 1 and the region to the left shaded." },
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Read the circle.", "workingLatex": "\\bullet \\text{ at } -1", "explanation": "A filled circle means the endpoint $-1$ is included in the solution.", "diagram": null },
        { "stepNumber": 2, "description": "Read the shading.", "workingLatex": "\\leftarrow", "explanation": "The shading points left, towards smaller numbers, so $x$ is at most $-1$.", "diagram": null },
        { "stepNumber": 3, "description": "Write the inequality.", "workingLatex": "x \\leq -1", "explanation": "Filled circle plus \u2018to the left\u2019 gives $x \\leq -1$.", "diagram": null }
      ],
      "finalAnswer": "$x \\leq -1$"
    }
  },
  {
    "id": "gcse.algebra.linear-inequalities.q005",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Linear inequalities",
    "subtopicId": "gcse.algebra.linear-inequalities",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "expression",
    "tags": ["inequalities", "one-step", "addition"],
    "questionText": "Solve $x + 4 > 9$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Decide what to undo.", "workingLatex": "x + 4 > 9", "explanation": "We solve inequalities like equations: isolate $x$, keeping the same sign.", "diagram": null },
        { "stepNumber": 2, "description": "Subtract $4$ from both sides.", "workingLatex": "x > 5", "explanation": "Subtracting the same number from both sides never changes the direction of the inequality.", "diagram": null }
      ],
      "finalAnswer": "$x > 5$"
    }
  },
  {
    "id": "gcse.algebra.linear-inequalities.q006",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Linear inequalities",
    "subtopicId": "gcse.algebra.linear-inequalities",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "expression",
    "tags": ["inequalities", "one-step", "subtraction"],
    "questionText": "Solve $x - 3 \\leq 2$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Decide what to undo.", "workingLatex": "x - 3 \\leq 2", "explanation": "The $3$ is subtracted from $x$, so we undo it by adding $3$.", "diagram": null },
        { "stepNumber": 2, "description": "Add $3$ to both sides.", "workingLatex": "x \\leq 5", "explanation": "Adding to both sides keeps the balance and the $\\leq$ sign the same way round.", "diagram": null }
      ],
      "finalAnswer": "$x \\leq 5$"
    }
  },
  {
    "id": "gcse.algebra.linear-inequalities.q007",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Linear inequalities",
    "subtopicId": "gcse.algebra.linear-inequalities",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "expression",
    "tags": ["inequalities", "one-step", "division"],
    "questionText": "Solve $4x < 20$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Undo the multiplication.", "workingLatex": "4x < 20", "explanation": "$x$ is multiplied by $4$, so divide both sides by $4$.", "diagram": null },
        { "stepNumber": 2, "description": "Divide both sides by $4$.", "workingLatex": "x < 5", "explanation": "Dividing by the positive number $4$ keeps the inequality pointing the same way.", "diagram": null }
      ],
      "finalAnswer": "$x < 5$"
    }
  },
  {
    "id": "gcse.algebra.linear-inequalities.q008",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Linear inequalities",
    "subtopicId": "gcse.algebra.linear-inequalities",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "expression",
    "tags": ["inequalities", "one-step", "multiplication"],
    "questionText": "Solve $\\dfrac{x}{3} \\geq 2$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Undo the division.", "workingLatex": "\\dfrac{x}{3} \\geq 2", "explanation": "$x$ is divided by $3$, so multiply both sides by $3$.", "diagram": null },
        { "stepNumber": 2, "description": "Multiply both sides by $3$.", "workingLatex": "x \\geq 6", "explanation": "Multiplying by the positive number $3$ leaves the $\\geq$ sign unchanged.", "diagram": null }
      ],
      "finalAnswer": "$x \\geq 6$"
    }
  },
  {
    "id": "gcse.algebra.linear-inequalities.q009",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Linear inequalities",
    "subtopicId": "gcse.algebra.linear-inequalities",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": ["inequalities", "two-step"],
    "questionText": "Solve $2x + 1 > 7$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Subtract $1$ from both sides.", "workingLatex": "2x > 6", "explanation": "Deal with the added constant first to get the $x$ term alone.", "diagram": null },
        { "stepNumber": 2, "description": "Divide both sides by $2$.", "workingLatex": "x > 3", "explanation": "Dividing by the positive number $2$ keeps the direction the same.", "diagram": null }
      ],
      "finalAnswer": "$x > 3$"
    }
  },
  {
    "id": "gcse.algebra.linear-inequalities.q010",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Linear inequalities",
    "subtopicId": "gcse.algebra.linear-inequalities",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": ["inequalities", "two-step"],
    "questionText": "Solve $3x - 5 \\leq 7$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Add $5$ to both sides.", "workingLatex": "3x \\leq 12", "explanation": "Undo the $-5$ first so only the $x$ term is left on the left.", "diagram": null },
        { "stepNumber": 2, "description": "Divide both sides by $3$.", "workingLatex": "x \\leq 4", "explanation": "$12 \\div 3 = 4$, and dividing by a positive keeps $\\leq$ the same.", "diagram": null }
      ],
      "finalAnswer": "$x \\leq 4$"
    }
  },
  {
    "id": "gcse.algebra.linear-inequalities.q011",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Linear inequalities",
    "subtopicId": "gcse.algebra.linear-inequalities",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "value",
    "tags": ["inequalities", "integer solutions", "listing"],
    "questionText": "List the integer values of $x$ such that $-2 \\leq x < 3$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Read the lower end.", "workingLatex": "-2 \\leq x", "explanation": "The $\\leq$ means $-2$ is included, so start the list at $-2$.", "diagram": null },
        { "stepNumber": 2, "description": "Read the upper end.", "workingLatex": "x < 3", "explanation": "The $<$ means $3$ is not included, so the list stops at $2$.", "diagram": null },
        { "stepNumber": 3, "description": "List the whole numbers.", "workingLatex": "-2,\\, -1,\\, 0,\\, 1,\\, 2", "explanation": "These are every integer from $-2$ up to (but not including) $3$.", "diagram": null }
      ],
      "finalAnswer": "$-2, -1, 0, 1, 2$"
    }
  },
  {
    "id": "gcse.algebra.linear-inequalities.q012",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Linear inequalities",
    "subtopicId": "gcse.algebra.linear-inequalities",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "value",
    "tags": ["inequalities", "integer solutions"],
    "questionText": "Write down the smallest integer that satisfies $x > 4$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Check whether $4$ counts.", "workingLatex": "x > 4", "explanation": "The strict $>$ means $4$ itself does not satisfy the inequality.", "diagram": null },
        { "stepNumber": 2, "description": "Take the next integer up.", "workingLatex": "x = 5", "explanation": "The smallest integer strictly bigger than $4$ is $5$.", "diagram": null }
      ],
      "finalAnswer": "$5$"
    }
  },
  {
    "id": "gcse.algebra.linear-inequalities.q013",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Linear inequalities",
    "subtopicId": "gcse.algebra.linear-inequalities",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "value",
    "tags": ["inequalities", "integer solutions"],
    "questionText": "Write down the largest integer that satisfies $x \\leq 6$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Check whether $6$ counts.", "workingLatex": "x \\leq 6", "explanation": "The $\\leq$ includes $6$, so $6$ itself is allowed.", "diagram": null },
        { "stepNumber": 2, "description": "State the largest value.", "workingLatex": "x = 6", "explanation": "Nothing bigger than $6$ is allowed, so $6$ is the largest integer.", "diagram": null }
      ],
      "finalAnswer": "$6$"
    }
  },
  {
    "id": "gcse.algebra.linear-inequalities.q014",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Linear inequalities",
    "subtopicId": "gcse.algebra.linear-inequalities",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "expression",
    "tags": ["inequalities", "one-step", "negatives"],
    "questionText": "Solve $x + 7 \\geq 3$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Subtract $7$ from both sides.", "workingLatex": "x \\geq 3 - 7", "explanation": "Undo the $+7$ by subtracting $7$ from each side.", "diagram": null },
        { "stepNumber": 2, "description": "Simplify.", "workingLatex": "x \\geq -4", "explanation": "$3 - 7 = -4$, so $x$ can be $-4$ or anything larger.", "diagram": null }
      ],
      "finalAnswer": "$x \\geq -4$"
    }
  },
  {
    "id": "gcse.algebra.linear-inequalities.q015",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Linear inequalities",
    "subtopicId": "gcse.algebra.linear-inequalities",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": ["inequalities", "two-step"],
    "questionText": "Solve $5x + 2 < 17$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Subtract $2$ from both sides.", "workingLatex": "5x < 15", "explanation": "Remove the constant first to isolate the $x$ term.", "diagram": null },
        { "stepNumber": 2, "description": "Divide both sides by $5$.", "workingLatex": "x < 3", "explanation": "$15 \\div 5 = 3$; dividing by a positive keeps the $<$ sign.", "diagram": null }
      ],
      "finalAnswer": "$x < 3$"
    }
  },
  {
    "id": "gcse.algebra.linear-inequalities.q016",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Linear inequalities",
    "subtopicId": "gcse.algebra.linear-inequalities",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "text",
    "tags": ["inequalities", "number line", "representing"],
    "questionText": "Show the solution to $x \\geq 1$ on a number line.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Choose the circle.", "workingLatex": "\\bullet \\text{ at } 1", "explanation": "Because $\\geq$ includes $1$, we use a filled (closed) circle at $1$.", "diagram": null },
        { "stepNumber": 2, "description": "Choose the direction.", "workingLatex": "\\rightarrow", "explanation": "\u2018Greater than or equal to\u2019 means shade to the right, towards larger numbers.", "diagram": { "kind": "numberLineRay", "min": -3, "max": 6, "endpoint": 1, "direction": "right", "closed": true, "label": "x \\geq 1", "caption": "Filled circle at 1, shaded right.", "alt": "Number line with a filled circle at 1 and the region to the right shaded." } }
      ],
      "finalAnswer": "Filled circle at $1$ with the line shaded to the right."
    }
  },
  {
    "id": "gcse.algebra.linear-inequalities.q017",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Linear inequalities",
    "subtopicId": "gcse.algebra.linear-inequalities",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "expression",
    "tags": ["inequalities", "one-step", "multiplication"],
    "questionText": "Solve $\\dfrac{x}{2} < 5$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Multiply both sides by $2$.", "workingLatex": "x < 10", "explanation": "Undo the division by $2$; multiplying by a positive keeps the $<$ sign.", "diagram": null }
      ],
      "finalAnswer": "$x < 10$"
    }
  },
  {
    "id": "gcse.algebra.linear-inequalities.q018",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Linear inequalities",
    "subtopicId": "gcse.algebra.linear-inequalities",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": ["inequalities", "two-step"],
    "questionText": "Solve $2x - 3 \\geq 5$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Add $3$ to both sides.", "workingLatex": "2x \\geq 8", "explanation": "Clear the constant to leave the $x$ term by itself.", "diagram": null },
        { "stepNumber": 2, "description": "Divide both sides by $2$.", "workingLatex": "x \\geq 4", "explanation": "$8 \\div 2 = 4$, and the $\\geq$ stays the same when dividing by a positive.", "diagram": null }
      ],
      "finalAnswer": "$x \\geq 4$"
    }
  },
  {
    "id": "gcse.algebra.linear-inequalities.q019",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Linear inequalities",
    "subtopicId": "gcse.algebra.linear-inequalities",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "expression",
    "tags": ["inequalities", "number line", "reading", "compound"],
    "questionText": "Write down the inequality shown on the number line.",
    "questionDiagram": { "kind": "numberLineInterval", "min": -4, "max": 7, "lower": -1, "upper": 4, "lowerClosed": true, "upperClosed": false, "label": "?", "caption": "Filled circle at \u22121, open circle at 4.", "alt": "Number line shaded between minus 1 (filled) and 4 (open)." },
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Read the left end.", "workingLatex": "-1 \\leq x", "explanation": "The filled circle at $-1$ means $-1$ is included.", "diagram": null },
        { "stepNumber": 2, "description": "Read the right end.", "workingLatex": "x < 4", "explanation": "The open circle at $4$ means $4$ is not included.", "diagram": null },
        { "stepNumber": 3, "description": "Combine into one statement.", "workingLatex": "-1 \\leq x < 4", "explanation": "The shading between them gives the double inequality.", "diagram": null }
      ],
      "finalAnswer": "$-1 \\leq x < 4$"
    }
  },
  {
    "id": "gcse.algebra.linear-inequalities.q020",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Linear inequalities",
    "subtopicId": "gcse.algebra.linear-inequalities",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "expression",
    "tags": ["inequalities", "notation", "wording"],
    "questionText": "The number $x$ is at least $10$. Write this as an inequality.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Translate \u2018at least\u2019.", "workingLatex": "\\geq", "explanation": "\u2018At least $10$\u2019 means $10$ or more, so it includes $10$: use $\\geq$.", "diagram": null },
        { "stepNumber": 2, "description": "Write the inequality.", "workingLatex": "x \\geq 10", "explanation": "So the smallest value $x$ can take is $10$.", "diagram": null }
      ],
      "finalAnswer": "$x \\geq 10$"
    }
  },
  {
    "id": "gcse.algebra.linear-inequalities.q021",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Linear inequalities",
    "subtopicId": "gcse.algebra.linear-inequalities",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "expression",
    "tags": ["inequalities", "notation", "wording"],
    "questionText": "The number $x$ is at most $15$. Write this as an inequality.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Translate \u2018at most\u2019.", "workingLatex": "\\leq", "explanation": "\u2018At most $15$\u2019 means $15$ or less, including $15$: use $\\leq$.", "diagram": null },
        { "stepNumber": 2, "description": "Write the inequality.", "workingLatex": "x \\leq 15", "explanation": "So the largest value $x$ can take is $15$.", "diagram": null }
      ],
      "finalAnswer": "$x \\leq 15$"
    }
  },
  {
    "id": "gcse.algebra.linear-inequalities.q022",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Linear inequalities",
    "subtopicId": "gcse.algebra.linear-inequalities",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": ["inequalities", "two-step"],
    "questionText": "Solve $4x + 5 \\leq 21$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Subtract $5$ from both sides.", "workingLatex": "4x \\leq 16", "explanation": "Remove the constant first.", "diagram": null },
        { "stepNumber": 2, "description": "Divide both sides by $4$.", "workingLatex": "x \\leq 4", "explanation": "$16 \\div 4 = 4$; the $\\leq$ is unchanged by dividing by a positive.", "diagram": null }
      ],
      "finalAnswer": "$x \\leq 4$"
    }
  },
  {
    "id": "gcse.algebra.linear-inequalities.q023",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Linear inequalities",
    "subtopicId": "gcse.algebra.linear-inequalities",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "expression",
    "tags": ["inequalities", "one-step", "negatives"],
    "questionText": "Solve $x - 8 > -3$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Add $8$ to both sides.", "workingLatex": "x > -3 + 8", "explanation": "Undo the $-8$ by adding $8$ to each side.", "diagram": null },
        { "stepNumber": 2, "description": "Simplify.", "workingLatex": "x > 5", "explanation": "$-3 + 8 = 5$, so $x$ is greater than $5$.", "diagram": null }
      ],
      "finalAnswer": "$x > 5$"
    }
  },
  {
    "id": "gcse.algebra.linear-inequalities.q024",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Linear inequalities",
    "subtopicId": "gcse.algebra.linear-inequalities",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": ["inequalities", "two-step"],
    "questionText": "Solve $6x - 4 < 14$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Add $4$ to both sides.", "workingLatex": "6x < 18", "explanation": "Deal with the $-4$ first.", "diagram": null },
        { "stepNumber": 2, "description": "Divide both sides by $6$.", "workingLatex": "x < 3", "explanation": "$18 \\div 6 = 3$; dividing by a positive keeps the $<$ sign.", "diagram": null }
      ],
      "finalAnswer": "$x < 3$"
    }
  },
  {
    "id": "gcse.algebra.linear-inequalities.q025",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Linear inequalities",
    "subtopicId": "gcse.algebra.linear-inequalities",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "value",
    "tags": ["inequalities", "integer solutions", "listing"],
    "questionText": "List the integer values of $x$ such that $0 < x \\leq 4$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Read the lower end.", "workingLatex": "0 < x", "explanation": "The strict $<$ means $0$ is not included, so start at $1$.", "diagram": null },
        { "stepNumber": 2, "description": "Read the upper end.", "workingLatex": "x \\leq 4", "explanation": "The $\\leq$ means $4$ is included.", "diagram": null },
        { "stepNumber": 3, "description": "List the integers.", "workingLatex": "1,\\, 2,\\, 3,\\, 4", "explanation": "These are all the whole numbers greater than $0$ and up to $4$.", "diagram": null }
      ],
      "finalAnswer": "$1, 2, 3, 4$"
    }
  },
  {
    "id": "gcse.algebra.linear-inequalities.q026",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Linear inequalities",
    "subtopicId": "gcse.algebra.linear-inequalities",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": ["inequalities", "two-step", "negatives"],
    "questionText": "Solve $3x + 7 \\geq 1$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Subtract $7$ from both sides.", "workingLatex": "3x \\geq -6", "explanation": "$1 - 7 = -6$; remove the constant first.", "diagram": null },
        { "stepNumber": 2, "description": "Divide both sides by $3$.", "workingLatex": "x \\geq -2", "explanation": "$-6 \\div 3 = -2$; dividing by a positive keeps $\\geq$.", "diagram": null }
      ],
      "finalAnswer": "$x \\geq -2$"
    }
  },
  {
    "id": "gcse.algebra.linear-inequalities.q027",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Linear inequalities",
    "subtopicId": "gcse.algebra.linear-inequalities",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "expression",
    "tags": ["inequalities", "negative coefficient", "flip sign"],
    "questionText": "Solve $-2x > 6$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Divide both sides by $-2$.", "workingLatex": "x < \\dfrac{6}{-2}", "explanation": "Dividing by a negative number reverses the direction of the inequality, so $>$ becomes $<$.", "diagram": null },
        { "stepNumber": 2, "description": "Simplify.", "workingLatex": "x < -3", "explanation": "The reversed sign is essential: check $x = -4$ gives $-2(-4) = 8 > 6$. \u2713", "diagram": { "kind": "signFlipMirror", "min": -6, "max": 3, "beforeEndpoint": -3, "beforeDirection": "right", "beforeClosed": false, "beforeLabel": "wrong: x > -3", "afterEndpoint": -3, "afterDirection": "left", "afterClosed": false, "afterLabel": "correct: x < -3", "caption": "Dividing by a negative flips the arrow.", "alt": "Two number lines showing the inequality direction reversing about minus 3." } }
      ],
      "finalAnswer": "$x < -3$"
    }
  },
  {
    "id": "gcse.algebra.linear-inequalities.q028",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Linear inequalities",
    "subtopicId": "gcse.algebra.linear-inequalities",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "expression",
    "tags": ["inequalities", "negative coefficient", "flip sign"],
    "questionText": "Solve $-3x \\leq 12$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Divide both sides by $-3$.", "workingLatex": "x \\geq \\dfrac{12}{-3}", "explanation": "Dividing by a negative reverses the inequality, so $\\leq$ becomes $\\geq$.", "diagram": null },
        { "stepNumber": 2, "description": "Simplify.", "workingLatex": "x \\geq -4", "explanation": "$12 \\div (-3) = -4$, so $x$ is at least $-4$.", "diagram": null }
      ],
      "finalAnswer": "$x \\geq -4$"
    }
  },
  {
    "id": "gcse.algebra.linear-inequalities.q029",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Linear inequalities",
    "subtopicId": "gcse.algebra.linear-inequalities",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "expression",
    "tags": ["inequalities", "brackets"],
    "questionText": "Solve $2(x + 3) > 10$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Expand the bracket.", "workingLatex": "2x + 6 > 10", "explanation": "Multiply everything inside the bracket by $2$.", "diagram": null },
        { "stepNumber": 2, "description": "Subtract $6$ from both sides.", "workingLatex": "2x > 4", "explanation": "Clear the constant term.", "diagram": null },
        { "stepNumber": 3, "description": "Divide both sides by $2$.", "workingLatex": "x > 2", "explanation": "Dividing by the positive $2$ keeps the $>$ sign.", "diagram": null }
      ],
      "finalAnswer": "$x > 2$"
    }
  },
  {
    "id": "gcse.algebra.linear-inequalities.q030",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Linear inequalities",
    "subtopicId": "gcse.algebra.linear-inequalities",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "expression",
    "tags": ["inequalities", "brackets"],
    "questionText": "Solve $3(x - 2) \\leq 9$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Expand the bracket.", "workingLatex": "3x - 6 \\leq 9", "explanation": "Multiply both terms inside by $3$.", "diagram": null },
        { "stepNumber": 2, "description": "Add $6$ to both sides.", "workingLatex": "3x \\leq 15", "explanation": "Clear the constant.", "diagram": null },
        { "stepNumber": 3, "description": "Divide both sides by $3$.", "workingLatex": "x \\leq 5", "explanation": "$15 \\div 3 = 5$; sign unchanged by a positive divisor.", "diagram": null }
      ],
      "finalAnswer": "$x \\leq 5$"
    }
  },
  {
    "id": "gcse.algebra.linear-inequalities.q031",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Linear inequalities",
    "subtopicId": "gcse.algebra.linear-inequalities",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "expression",
    "tags": ["inequalities", "unknowns both sides"],
    "questionText": "Solve $5x > 2x + 9$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Subtract $2x$ from both sides.", "workingLatex": "3x > 9", "explanation": "Gather the $x$ terms on the side where the coefficient stays positive.", "diagram": null },
        { "stepNumber": 2, "description": "Divide both sides by $3$.", "workingLatex": "x > 3", "explanation": "Dividing by the positive $3$ keeps the $>$ direction.", "diagram": null }
      ],
      "finalAnswer": "$x > 3$"
    }
  },
  {
    "id": "gcse.algebra.linear-inequalities.q032",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Linear inequalities",
    "subtopicId": "gcse.algebra.linear-inequalities",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "expression",
    "tags": ["inequalities", "unknowns both sides"],
    "questionText": "Solve $4x + 1 \\leq 2x + 7$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Subtract $2x$ from both sides.", "workingLatex": "2x + 1 \\leq 7", "explanation": "Move the smaller $x$ term across to keep a positive coefficient.", "diagram": null },
        { "stepNumber": 2, "description": "Subtract $1$ from both sides.", "workingLatex": "2x \\leq 6", "explanation": "Now clear the constant.", "diagram": null },
        { "stepNumber": 3, "description": "Divide both sides by $2$.", "workingLatex": "x \\leq 3", "explanation": "$6 \\div 2 = 3$; the $\\leq$ stays the same.", "diagram": null }
      ],
      "finalAnswer": "$x \\leq 3$"
    }
  },
  {
    "id": "gcse.algebra.linear-inequalities.q033",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Linear inequalities",
    "subtopicId": "gcse.algebra.linear-inequalities",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "expression",
    "tags": ["inequalities", "unknowns both sides"],
    "questionText": "Solve $7x - 3 > 3x + 9$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Subtract $3x$ from both sides.", "workingLatex": "4x - 3 > 9", "explanation": "Collect the $x$ terms on the left.", "diagram": null },
        { "stepNumber": 2, "description": "Add $3$ to both sides.", "workingLatex": "4x > 12", "explanation": "Clear the constant.", "diagram": null },
        { "stepNumber": 3, "description": "Divide both sides by $4$.", "workingLatex": "x > 3", "explanation": "$12 \\div 4 = 3$; a positive divisor keeps the $>$ sign.", "diagram": null }
      ],
      "finalAnswer": "$x > 3$"
    }
  },
  {
    "id": "gcse.algebra.linear-inequalities.q034",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Linear inequalities",
    "subtopicId": "gcse.algebra.linear-inequalities",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "expression",
    "tags": ["inequalities", "compound"],
    "questionText": "Solve $1 < x + 3 \\leq 6$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Work on all three parts at once.", "workingLatex": "1 < x + 3 \\leq 6", "explanation": "Whatever we do to the middle we do to both outer parts, keeping it balanced.", "diagram": null },
        { "stepNumber": 2, "description": "Subtract $3$ throughout.", "workingLatex": "-2 < x \\leq 3", "explanation": "$1 - 3 = -2$ and $6 - 3 = 3$; the middle becomes just $x$.", "diagram": null }
      ],
      "finalAnswer": "$-2 < x \\leq 3$"
    }
  },
  {
    "id": "gcse.algebra.linear-inequalities.q035",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Linear inequalities",
    "subtopicId": "gcse.algebra.linear-inequalities",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "expression",
    "tags": ["inequalities", "compound"],
    "questionText": "Solve $-4 \\leq 2x < 8$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Divide every part by $2$.", "workingLatex": "\\dfrac{-4}{2} \\leq x < \\dfrac{8}{2}", "explanation": "Dividing by the positive $2$ keeps both signs the same way round.", "diagram": null },
        { "stepNumber": 2, "description": "Simplify.", "workingLatex": "-2 \\leq x < 4", "explanation": "So $x$ lies from $-2$ (included) up to $4$ (not included).", "diagram": null }
      ],
      "finalAnswer": "$-2 \\leq x < 4$"
    }
  },
  {
    "id": "gcse.algebra.linear-inequalities.q036",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Linear inequalities",
    "subtopicId": "gcse.algebra.linear-inequalities",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "value",
    "tags": ["inequalities", "compound", "integer solutions"],
    "questionText": "List the integer values of $x$ that satisfy $3 \\leq 2x + 1 < 11$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Subtract $1$ throughout.", "workingLatex": "2 \\leq 2x < 10", "explanation": "Remove the constant from the middle by subtracting $1$ from all three parts.", "diagram": null },
        { "stepNumber": 2, "description": "Divide throughout by $2$.", "workingLatex": "1 \\leq x < 5", "explanation": "Dividing by the positive $2$ keeps both signs.", "diagram": null },
        { "stepNumber": 3, "description": "List the integers.", "workingLatex": "1,\\, 2,\\, 3,\\, 4", "explanation": "Include $1$ but stop before $5$.", "diagram": null }
      ],
      "finalAnswer": "$1, 2, 3, 4$"
    }
  },
  {
    "id": "gcse.algebra.linear-inequalities.q037",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Linear inequalities",
    "subtopicId": "gcse.algebra.linear-inequalities",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "expression",
    "tags": ["inequalities", "flip sign", "negatives"],
    "questionText": "Solve $5 - x > 2$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Subtract $5$ from both sides.", "workingLatex": "-x > -3", "explanation": "This isolates the $-x$ term.", "diagram": null },
        { "stepNumber": 2, "description": "Divide both sides by $-1$.", "workingLatex": "x < 3", "explanation": "Dividing by $-1$ reverses the inequality, so $>$ becomes $<$.", "diagram": null }
      ],
      "finalAnswer": "$x < 3$"
    }
  },
  {
    "id": "gcse.algebra.linear-inequalities.q038",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Linear inequalities",
    "subtopicId": "gcse.algebra.linear-inequalities",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "expression",
    "tags": ["inequalities", "flip sign", "negatives"],
    "questionText": "Solve $10 - 2x \\leq 4$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Subtract $10$ from both sides.", "workingLatex": "-2x \\leq -6", "explanation": "Move the constant across first.", "diagram": null },
        { "stepNumber": 2, "description": "Divide both sides by $-2$.", "workingLatex": "x \\geq 3", "explanation": "Dividing by the negative $-2$ reverses $\\leq$ into $\\geq$.", "diagram": null }
      ],
      "finalAnswer": "$x \\geq 3$"
    }
  },
  {
    "id": "gcse.algebra.linear-inequalities.q039",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Linear inequalities",
    "subtopicId": "gcse.algebra.linear-inequalities",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "expression",
    "tags": ["inequalities", "brackets", "flip sign"],
    "questionText": "Solve $2(4 - x) > 6$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Expand the bracket.", "workingLatex": "8 - 2x > 6", "explanation": "Multiply both terms inside by $2$.", "diagram": null },
        { "stepNumber": 2, "description": "Subtract $8$ from both sides.", "workingLatex": "-2x > -2", "explanation": "Move the constant across.", "diagram": null },
        { "stepNumber": 3, "description": "Divide both sides by $-2$.", "workingLatex": "x < 1", "explanation": "Dividing by a negative flips $>$ to $<$.", "diagram": null }
      ],
      "finalAnswer": "$x < 1$"
    }
  },
  {
    "id": "gcse.algebra.linear-inequalities.q040",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Linear inequalities",
    "subtopicId": "gcse.algebra.linear-inequalities",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "expression",
    "tags": ["inequalities", "fractions"],
    "questionText": "Solve $\\dfrac{x + 1}{2} \\geq 4$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Multiply both sides by $2$.", "workingLatex": "x + 1 \\geq 8", "explanation": "Clear the denominator; multiplying by a positive keeps $\\geq$.", "diagram": null },
        { "stepNumber": 2, "description": "Subtract $1$ from both sides.", "workingLatex": "x \\geq 7", "explanation": "So $x$ is at least $7$.", "diagram": null }
      ],
      "finalAnswer": "$x \\geq 7$"
    }
  },
  {
    "id": "gcse.algebra.linear-inequalities.q041",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Linear inequalities",
    "subtopicId": "gcse.algebra.linear-inequalities",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "expression",
    "tags": ["inequalities", "fractions"],
    "questionText": "Solve $\\dfrac{2x - 1}{3} < 3$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Multiply both sides by $3$.", "workingLatex": "2x - 1 < 9", "explanation": "Clear the denominator; the $<$ sign is unaffected by the positive $3$.", "diagram": null },
        { "stepNumber": 2, "description": "Add $1$ to both sides.", "workingLatex": "2x < 10", "explanation": "Clear the constant.", "diagram": null },
        { "stepNumber": 3, "description": "Divide both sides by $2$.", "workingLatex": "x < 5", "explanation": "$10 \\div 2 = 5$.", "diagram": null }
      ],
      "finalAnswer": "$x < 5$"
    }
  },
  {
    "id": "gcse.algebra.linear-inequalities.q042",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Linear inequalities",
    "subtopicId": "gcse.algebra.linear-inequalities",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "expression",
    "tags": ["inequalities", "brackets", "unknowns both sides"],
    "questionText": "Solve $3(x + 1) < x + 11$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Expand the bracket.", "workingLatex": "3x + 3 < x + 11", "explanation": "Multiply out the left-hand side.", "diagram": null },
        { "stepNumber": 2, "description": "Subtract $x$ from both sides.", "workingLatex": "2x + 3 < 11", "explanation": "Collect the $x$ terms on the left.", "diagram": null },
        { "stepNumber": 3, "description": "Subtract $3$ from both sides.", "workingLatex": "2x < 8", "explanation": "Clear the constant.", "diagram": null },
        { "stepNumber": 4, "description": "Divide both sides by $2$.", "workingLatex": "x < 4", "explanation": "$8 \\div 2 = 4$.", "diagram": null }
      ],
      "finalAnswer": "$x < 4$"
    }
  },
  {
    "id": "gcse.algebra.linear-inequalities.q043",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Linear inequalities",
    "subtopicId": "gcse.algebra.linear-inequalities",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "expression",
    "tags": ["inequalities", "brackets", "unknowns both sides"],
    "questionText": "Solve $2(x - 1) \\geq 3(x - 4)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Expand both brackets.", "workingLatex": "2x - 2 \\geq 3x - 12", "explanation": "Multiply out each side carefully.", "diagram": null },
        { "stepNumber": 2, "description": "Subtract $2x$ from both sides.", "workingLatex": "-2 \\geq x - 12", "explanation": "Moving the smaller $x$ term avoids a negative coefficient.", "diagram": null },
        { "stepNumber": 3, "description": "Add $12$ to both sides.", "workingLatex": "10 \\geq x", "explanation": "This isolates $x$ on the right.", "diagram": null },
        { "stepNumber": 4, "description": "Rewrite with $x$ on the left.", "workingLatex": "x \\leq 10", "explanation": "$10 \\geq x$ is the same as $x \\leq 10$.", "diagram": null }
      ],
      "finalAnswer": "$x \\leq 10$"
    }
  },
  {
    "id": "gcse.algebra.linear-inequalities.q044",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Linear inequalities",
    "subtopicId": "gcse.algebra.linear-inequalities",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "text",
    "tags": ["inequalities", "number line", "representing", "compound"],
    "questionText": "Show the solution to $-2 \\leq x < 3$ on a number line.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Mark the left end.", "workingLatex": "\\bullet \\text{ at } -2", "explanation": "The $\\leq$ includes $-2$, so use a filled circle there.", "diagram": null },
        { "stepNumber": 2, "description": "Mark the right end.", "workingLatex": "\\circ \\text{ at } 3", "explanation": "The $<$ excludes $3$, so use an open circle there.", "diagram": null },
        { "stepNumber": 3, "description": "Join them up.", "workingLatex": "-2 \\leq x < 3", "explanation": "Shade the segment connecting the two circles.", "diagram": { "kind": "numberLineInterval", "min": -5, "max": 6, "lower": -2, "upper": 3, "lowerClosed": true, "upperClosed": false, "label": "-2 \\leq x < 3", "caption": "Filled at \u22122, open at 3.", "alt": "Number line shaded from minus 2 (filled) to 3 (open)." } }
      ],
      "finalAnswer": "Filled circle at $-2$, open circle at $3$, shaded in between."
    }
  },
  {
    "id": "gcse.algebra.linear-inequalities.q045",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Linear inequalities",
    "subtopicId": "gcse.algebra.linear-inequalities",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "expression",
    "tags": ["inequalities", "number line", "reading", "compound"],
    "questionText": "Write down the inequality shown on the number line.",
    "questionDiagram": { "kind": "numberLineInterval", "min": -3, "max": 8, "lower": 0, "upper": 5, "lowerClosed": false, "upperClosed": true, "label": "?", "caption": "Open circle at 0, filled circle at 5.", "alt": "Number line shaded between 0 (open) and 5 (filled)." },
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Read the left end.", "workingLatex": "0 < x", "explanation": "The open circle at $0$ means $0$ is not included.", "diagram": null },
        { "stepNumber": 2, "description": "Read the right end.", "workingLatex": "x \\leq 5", "explanation": "The filled circle at $5$ means $5$ is included.", "diagram": null },
        { "stepNumber": 3, "description": "Combine.", "workingLatex": "0 < x \\leq 5", "explanation": "The shaded region gives the double inequality.", "diagram": null }
      ],
      "finalAnswer": "$0 < x \\leq 5$"
    }
  },
  {
    "id": "gcse.algebra.linear-inequalities.q046",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Linear inequalities",
    "subtopicId": "gcse.algebra.linear-inequalities",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "expression",
    "tags": ["inequalities", "forming", "word problem"],
    "questionText": "Ben thinks of a number $n$. Three times the number, plus $4$, is less than $19$. Form and solve an inequality for $n$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Form the inequality.", "workingLatex": "3n + 4 < 19", "explanation": "\u2018Three times the number plus $4$\u2019 is $3n + 4$, and \u2018less than $19$\u2019 gives $<$.", "diagram": null },
        { "stepNumber": 2, "description": "Subtract $4$ from both sides.", "workingLatex": "3n < 15", "explanation": "Clear the constant.", "diagram": null },
        { "stepNumber": 3, "description": "Divide both sides by $3$.", "workingLatex": "n < 5", "explanation": "So the number must be less than $5$.", "diagram": null }
      ],
      "finalAnswer": "$n < 5$"
    }
  },
  {
    "id": "gcse.algebra.linear-inequalities.q047",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Linear inequalities",
    "subtopicId": "gcse.algebra.linear-inequalities",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "value",
    "tags": ["inequalities", "forming", "word problem"],
    "questionText": "A taxi charges \u00a33 plus \u00a32 for each mile travelled. Meg has \u00a315 to spend. Form and solve an inequality to find the greatest whole number of miles $m$ she can travel.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Form the inequality.", "workingLatex": "3 + 2m \\leq 15", "explanation": "The cost is \u00a3$3$ fixed plus \u00a3$2m$, and it must be no more than her \u00a3$15$.", "diagram": null },
        { "stepNumber": 2, "description": "Subtract $3$ from both sides.", "workingLatex": "2m \\leq 12", "explanation": "Remove the fixed charge.", "diagram": null },
        { "stepNumber": 3, "description": "Divide both sides by $2$.", "workingLatex": "m \\leq 6", "explanation": "So she can afford up to $6$ miles.", "diagram": null },
        { "stepNumber": 4, "description": "Answer the question.", "workingLatex": "m = 6", "explanation": "The greatest whole number of miles is $6$.", "diagram": null }
      ],
      "finalAnswer": "$m \\leq 6$, so at most $6$ miles."
    }
  },
  {
    "id": "gcse.algebra.linear-inequalities.q048",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Linear inequalities",
    "subtopicId": "gcse.algebra.linear-inequalities",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "expression",
    "tags": ["inequalities", "unknowns both sides", "negatives"],
    "questionText": "Solve $4 - 3x \\geq x - 8$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Add $3x$ to both sides.", "workingLatex": "4 \\geq 4x - 8", "explanation": "Adding $3x$ keeps the $x$ coefficient positive, avoiding a sign flip.", "diagram": null },
        { "stepNumber": 2, "description": "Add $8$ to both sides.", "workingLatex": "12 \\geq 4x", "explanation": "Clear the constant on the right.", "diagram": null },
        { "stepNumber": 3, "description": "Divide both sides by $4$.", "workingLatex": "3 \\geq x", "explanation": "$12 \\div 4 = 3$.", "diagram": null },
        { "stepNumber": 4, "description": "Rewrite with $x$ first.", "workingLatex": "x \\leq 3", "explanation": "$3 \\geq x$ is the same as $x \\leq 3$.", "diagram": null }
      ],
      "finalAnswer": "$x \\leq 3$"
    }
  },
  {
    "id": "gcse.algebra.linear-inequalities.q049",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Linear inequalities",
    "subtopicId": "gcse.algebra.linear-inequalities",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "expression",
    "tags": ["inequalities", "fractions", "flip sign"],
    "questionText": "Solve $\\dfrac{x}{-2} < 3$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Multiply both sides by $-2$.", "workingLatex": "x > -6", "explanation": "Multiplying by the negative $-2$ reverses $<$ into $>$, and $3 \\times (-2) = -6$.", "diagram": null }
      ],
      "finalAnswer": "$x > -6$"
    }
  },
  {
    "id": "gcse.algebra.linear-inequalities.q050",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Linear inequalities",
    "subtopicId": "gcse.algebra.linear-inequalities",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "expression",
    "tags": ["inequalities", "compound"],
    "questionText": "Solve $-3 \\leq x - 2 < 4$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Add $2$ throughout.", "workingLatex": "-1 \\leq x < 6", "explanation": "$-3 + 2 = -1$ and $4 + 2 = 6$; adding to all three parts keeps it balanced.", "diagram": null }
      ],
      "finalAnswer": "$-1 \\leq x < 6$"
    }
  },
  {
    "id": "gcse.algebra.linear-inequalities.q051",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Linear inequalities",
    "subtopicId": "gcse.algebra.linear-inequalities",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "value",
    "tags": ["inequalities", "compound", "integer solutions", "counting"],
    "questionText": "How many integers satisfy $-5 < 2x \\leq 6$?",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Divide throughout by $2$.", "workingLatex": "-2.5 < x \\leq 3", "explanation": "Dividing by the positive $2$ keeps both signs; $-5 \\div 2 = -2.5$.", "diagram": null },
        { "stepNumber": 2, "description": "List the integers.", "workingLatex": "-2,\\, -1,\\, 0,\\, 1,\\, 2,\\, 3", "explanation": "The smallest integer above $-2.5$ is $-2$; include $3$ because of the $\\leq$.", "diagram": null },
        { "stepNumber": 3, "description": "Count them.", "workingLatex": "6", "explanation": "There are $6$ integers in the list.", "diagram": null }
      ],
      "finalAnswer": "$6$ integers"
    }
  },
  {
    "id": "gcse.algebra.linear-inequalities.q052",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Linear inequalities",
    "subtopicId": "gcse.algebra.linear-inequalities",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "expression",
    "tags": ["inequalities", "unknowns both sides"],
    "questionText": "Solve $2x + 3 > 5x - 6$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Subtract $2x$ from both sides.", "workingLatex": "3 > 3x - 6", "explanation": "Move the smaller $x$ term across to keep the coefficient positive.", "diagram": null },
        { "stepNumber": 2, "description": "Add $6$ to both sides.", "workingLatex": "9 > 3x", "explanation": "Clear the constant.", "diagram": null },
        { "stepNumber": 3, "description": "Divide both sides by $3$.", "workingLatex": "3 > x", "explanation": "$9 \\div 3 = 3$.", "diagram": null },
        { "stepNumber": 4, "description": "Rewrite with $x$ first.", "workingLatex": "x < 3", "explanation": "$3 > x$ means the same as $x < 3$.", "diagram": null }
      ],
      "finalAnswer": "$x < 3$"
    }
  },
  {
    "id": "gcse.algebra.linear-inequalities.q053",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Linear inequalities",
    "subtopicId": "gcse.algebra.linear-inequalities",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "expression",
    "tags": ["inequalities", "brackets", "unknowns both sides"],
    "questionText": "Solve $5(x - 1) \\leq 2(x + 2)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Expand both brackets.", "workingLatex": "5x - 5 \\leq 2x + 4", "explanation": "Multiply out each side.", "diagram": null },
        { "stepNumber": 2, "description": "Subtract $2x$ from both sides.", "workingLatex": "3x - 5 \\leq 4", "explanation": "Collect the $x$ terms on the left.", "diagram": null },
        { "stepNumber": 3, "description": "Add $5$ to both sides.", "workingLatex": "3x \\leq 9", "explanation": "Clear the constant.", "diagram": null },
        { "stepNumber": 4, "description": "Divide both sides by $3$.", "workingLatex": "x \\leq 3", "explanation": "$9 \\div 3 = 3$.", "diagram": null }
      ],
      "finalAnswer": "$x \\leq 3$"
    }
  },
  {
    "id": "gcse.algebra.linear-inequalities.q054",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Linear inequalities",
    "subtopicId": "gcse.algebra.linear-inequalities",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "expression",
    "tags": ["inequalities", "fractions"],
    "questionText": "Solve $\\dfrac{3x}{4} > 6$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Multiply both sides by $4$.", "workingLatex": "3x > 24", "explanation": "Clear the denominator; multiplying by the positive $4$ keeps $>$.", "diagram": null },
        { "stepNumber": 2, "description": "Divide both sides by $3$.", "workingLatex": "x > 8", "explanation": "$24 \\div 3 = 8$.", "diagram": null }
      ],
      "finalAnswer": "$x > 8$"
    }
  },
  {
    "id": "gcse.algebra.linear-inequalities.q055",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Linear inequalities",
    "subtopicId": "gcse.algebra.linear-inequalities",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "expression",
    "tags": ["inequalities", "forming", "perimeter", "word problem"],
    "questionText": "A rectangle has width $x$ cm and length $(x + 3)$ cm. Its perimeter is less than $26$ cm. Find the range of possible values of $x$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Write the perimeter.", "workingLatex": "P = 2\\big(x + (x + 3)\\big)", "explanation": "The perimeter is twice the sum of the width and length.", "diagram": null },
        { "stepNumber": 2, "description": "Simplify.", "workingLatex": "P = 4x + 6", "explanation": "$x + x + 3 = 2x + 3$, and doubling gives $4x + 6$.", "diagram": null },
        { "stepNumber": 3, "description": "Form the inequality.", "workingLatex": "4x + 6 < 26", "explanation": "The perimeter is less than $26$.", "diagram": null },
        { "stepNumber": 4, "description": "Solve for $x$.", "workingLatex": "4x < 20 \\Rightarrow x < 5", "explanation": "Subtract $6$ then divide by $4$.", "diagram": null },
        { "stepNumber": 5, "description": "Add the sensible lower bound.", "workingLatex": "0 < x < 5", "explanation": "A width must be positive, so $x$ is between $0$ and $5$.", "diagram": null }
      ],
      "finalAnswer": "$0 < x < 5$"
    }
  },
  {
    "id": "gcse.algebra.linear-inequalities.q056",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Linear inequalities",
    "subtopicId": "gcse.algebra.linear-inequalities",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "value",
    "tags": ["inequalities", "unknowns both sides", "integer solutions"],
    "questionText": "Find the smallest integer $x$ that satisfies $4x - 3 > x + 7$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Subtract $x$ from both sides.", "workingLatex": "3x - 3 > 7", "explanation": "Collect the $x$ terms on the left.", "diagram": null },
        { "stepNumber": 2, "description": "Add $3$ to both sides.", "workingLatex": "3x > 10", "explanation": "Clear the constant.", "diagram": null },
        { "stepNumber": 3, "description": "Divide both sides by $3$.", "workingLatex": "x > \\dfrac{10}{3} \\approx 3.33", "explanation": "$10 \\div 3$ is about $3.33$.", "diagram": null },
        { "stepNumber": 4, "description": "Choose the smallest integer.", "workingLatex": "x = 4", "explanation": "The smallest integer greater than $3.33$ is $4$.", "diagram": null }
      ],
      "finalAnswer": "$x = 4$"
    }
  },
  {
    "id": "gcse.algebra.linear-inequalities.q057",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Linear inequalities",
    "subtopicId": "gcse.algebra.linear-inequalities",
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "expression",
    "tags": ["inequalities", "brackets", "unknowns both sides", "flip sign"],
    "questionText": "Solve $3(2 - x) \\geq 2(x + 4)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Expand both brackets.", "workingLatex": "6 - 3x \\geq 2x + 8", "explanation": "Multiply out each side.", "diagram": null },
        { "stepNumber": 2, "description": "Add $3x$ to both sides.", "workingLatex": "6 \\geq 5x + 8", "explanation": "Adding $3x$ keeps the $x$ coefficient positive.", "diagram": null },
        { "stepNumber": 3, "description": "Subtract $8$ from both sides.", "workingLatex": "-2 \\geq 5x", "explanation": "$6 - 8 = -2$.", "diagram": null },
        { "stepNumber": 4, "description": "Divide both sides by $5$.", "workingLatex": "-\\dfrac{2}{5} \\geq x", "explanation": "Dividing by the positive $5$ keeps the sign.", "diagram": null },
        { "stepNumber": 5, "description": "Rewrite with $x$ first.", "workingLatex": "x \\leq -\\dfrac{2}{5}", "explanation": "So $x$ is at most $-0.4$.", "diagram": null }
      ],
      "finalAnswer": "$x \\leq -\\tfrac{2}{5}$"
    }
  },
  {
    "id": "gcse.algebra.linear-inequalities.q058",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Linear inequalities",
    "subtopicId": "gcse.algebra.linear-inequalities",
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "expression",
    "tags": ["inequalities", "fractions", "unknowns both sides"],
    "questionText": "Solve $\\dfrac{x + 2}{3} \\leq \\dfrac{x - 1}{2}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Multiply both sides by $6$.", "workingLatex": "2(x + 2) \\leq 3(x - 1)", "explanation": "Using the common denominator $6$ clears both fractions in one move.", "diagram": null },
        { "stepNumber": 2, "description": "Expand both sides.", "workingLatex": "2x + 4 \\leq 3x - 3", "explanation": "Multiply out each bracket.", "diagram": null },
        { "stepNumber": 3, "description": "Subtract $2x$ from both sides.", "workingLatex": "4 \\leq x - 3", "explanation": "Collect the $x$ terms on the right to keep the coefficient positive.", "diagram": null },
        { "stepNumber": 4, "description": "Add $3$ to both sides.", "workingLatex": "7 \\leq x", "explanation": "$4 + 3 = 7$.", "diagram": null },
        { "stepNumber": 5, "description": "Rewrite with $x$ first.", "workingLatex": "x \\geq 7", "explanation": "So $x$ is at least $7$.", "diagram": null }
      ],
      "finalAnswer": "$x \\geq 7$"
    }
  },
  {
    "id": "gcse.algebra.linear-inequalities.q059",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Linear inequalities",
    "subtopicId": "gcse.algebra.linear-inequalities",
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "expression",
    "tags": ["inequalities", "compound", "fractions"],
    "questionText": "Solve $-1 < \\dfrac{2x - 3}{5} \\leq 3$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Multiply every part by $5$.", "workingLatex": "-5 < 2x - 3 \\leq 15", "explanation": "Multiplying by the positive $5$ clears the fraction and keeps both signs.", "diagram": null },
        { "stepNumber": 2, "description": "Add $3$ throughout.", "workingLatex": "-2 < 2x \\leq 18", "explanation": "$-5 + 3 = -2$ and $15 + 3 = 18$.", "diagram": null },
        { "stepNumber": 3, "description": "Divide throughout by $2$.", "workingLatex": "-1 < x \\leq 9", "explanation": "Dividing by the positive $2$ leaves the signs unchanged.", "diagram": null }
      ],
      "finalAnswer": "$-1 < x \\leq 9$"
    }
  },
  {
    "id": "gcse.algebra.linear-inequalities.q060",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Linear inequalities",
    "subtopicId": "gcse.algebra.linear-inequalities",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "expression",
    "tags": ["inequalities", "compound", "flip sign", "negatives"],
    "questionText": "Solve $4 \\leq 10 - 2x < 12$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Subtract $10$ throughout.", "workingLatex": "-6 \\leq -2x < 2", "explanation": "$4 - 10 = -6$ and $12 - 10 = 2$; subtracting is safe for all parts.", "diagram": null },
        { "stepNumber": 2, "description": "Divide throughout by $-2$.", "workingLatex": "3 \\geq x > -1", "explanation": "Dividing by the negative $-2$ reverses both inequality signs.", "diagram": null },
        { "stepNumber": 3, "description": "Write in ascending order.", "workingLatex": "-1 < x \\leq 3", "explanation": "Reading the chain from small to large gives the tidy final form.", "diagram": null }
      ],
      "finalAnswer": "$-1 < x \\leq 3$"
    }
  },
  {
    "id": "gcse.algebra.linear-inequalities.q061",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Linear inequalities",
    "subtopicId": "gcse.algebra.linear-inequalities",
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "value",
    "tags": ["inequalities", "compound", "fractions", "integer solutions"],
    "questionText": "List all integer values of $x$ that satisfy $-2 \\leq \\dfrac{x}{2} < 2.5$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Multiply throughout by $2$.", "workingLatex": "-4 \\leq x < 5", "explanation": "Multiplying by the positive $2$ keeps both signs; $2.5 \\times 2 = 5$.", "diagram": null },
        { "stepNumber": 2, "description": "Identify the range.", "workingLatex": "-4 \\leq x < 5", "explanation": "Include $-4$ (because of $\\leq$), but stop before $5$ (because of $<$).", "diagram": null },
        { "stepNumber": 3, "description": "List the integers.", "workingLatex": "-4,\\,-3,\\,-2,\\,-1,\\,0,\\,1,\\,2,\\,3,\\,4", "explanation": "Every whole number from $-4$ up to $4$ works.", "diagram": null }
      ],
      "finalAnswer": "$-4, -3, -2, -1, 0, 1, 2, 3, 4$"
    }
  },
  {
    "id": "gcse.algebra.linear-inequalities.q062",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Linear inequalities",
    "subtopicId": "gcse.algebra.linear-inequalities",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "expression",
    "tags": ["inequalities", "forming", "mean", "compound", "word problem"],
    "questionText": "The mean of $4$, $7$ and $x$ is greater than $5$ but at most $8$. Find the range of possible values of $x$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Write the mean.", "workingLatex": "\\dfrac{4 + 7 + x}{3} = \\dfrac{11 + x}{3}", "explanation": "The mean is the total divided by how many values there are.", "diagram": null },
        { "stepNumber": 2, "description": "Form the compound inequality.", "workingLatex": "5 < \\dfrac{11 + x}{3} \\leq 8", "explanation": "\u2018Greater than $5$\u2019 uses $<$; \u2018at most $8$\u2019 uses $\\leq$.", "diagram": null },
        { "stepNumber": 3, "description": "Multiply throughout by $3$.", "workingLatex": "15 < 11 + x \\leq 24", "explanation": "Multiplying by the positive $3$ keeps both signs.", "diagram": null },
        { "stepNumber": 4, "description": "Subtract $11$ throughout.", "workingLatex": "4 < x \\leq 13", "explanation": "$15 - 11 = 4$ and $24 - 11 = 13$.", "diagram": null }
      ],
      "finalAnswer": "$4 < x \\leq 13$"
    }
  },
  {
    "id": "gcse.algebra.linear-inequalities.q063",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Linear inequalities",
    "subtopicId": "gcse.algebra.linear-inequalities",
    "difficulty": "Hard",
    "marks": 4,
    "answerType": "expression",
    "tags": ["inequalities", "error interval", "bounds"],
    "questionText": "A number $x$ has been rounded to $40$ to the nearest $10$. Write down the error interval for $x$ as an inequality.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Find the lower bound.", "workingLatex": "40 - 5 = 35", "explanation": "Half of $10$ is $5$; anything from $35$ upward rounds up to $40$.", "diagram": null },
        { "stepNumber": 2, "description": "Find the upper bound.", "workingLatex": "40 + 5 = 45", "explanation": "Values below $45$ round down to $40$; exactly $45$ would round up to $50$.", "diagram": null },
        { "stepNumber": 3, "description": "Write the interval.", "workingLatex": "35 \\leq x < 45", "explanation": "The lower bound is included, the upper bound is not \u2014 the standard error-interval convention.", "diagram": null }
      ],
      "finalAnswer": "$35 \\leq x < 45$"
    }
  },
  {
    "id": "gcse.algebra.linear-inequalities.q064",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Linear inequalities",
    "subtopicId": "gcse.algebra.linear-inequalities",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "expression",
    "tags": ["inequalities", "fractions", "unknowns both sides"],
    "questionText": "Solve $\\dfrac{1}{2}(x - 4) > \\dfrac{1}{3}(x + 1)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Multiply both sides by $6$.", "workingLatex": "3(x - 4) > 2(x + 1)", "explanation": "The common denominator $6$ clears both fractions at once.", "diagram": null },
        { "stepNumber": 2, "description": "Expand both sides.", "workingLatex": "3x - 12 > 2x + 2", "explanation": "Multiply out each bracket.", "diagram": null },
        { "stepNumber": 3, "description": "Subtract $2x$ from both sides.", "workingLatex": "x - 12 > 2", "explanation": "Collect the $x$ terms on the left.", "diagram": null },
        { "stepNumber": 4, "description": "Add $12$ to both sides.", "workingLatex": "x > 14", "explanation": "$2 + 12 = 14$.", "diagram": null }
      ],
      "finalAnswer": "$x > 14$"
    }
  },
  {
    "id": "gcse.algebra.linear-inequalities.q065",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Linear inequalities",
    "subtopicId": "gcse.algebra.linear-inequalities",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "value",
    "tags": ["inequalities", "combining", "integer solutions"],
    "questionText": "Find all integers $x$ that satisfy both $2x + 1 > 3$ and $3x - 2 \\leq 10$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Solve the first inequality.", "workingLatex": "2x + 1 > 3 \\Rightarrow x > 1", "explanation": "Subtract $1$ then divide by $2$.", "diagram": null },
        { "stepNumber": 2, "description": "Solve the second inequality.", "workingLatex": "3x - 2 \\leq 10 \\Rightarrow x \\leq 4", "explanation": "Add $2$ then divide by $3$.", "diagram": null },
        { "stepNumber": 3, "description": "Combine the two solutions.", "workingLatex": "1 < x \\leq 4", "explanation": "Both conditions hold only where the ranges overlap.", "diagram": null },
        { "stepNumber": 4, "description": "List the integers.", "workingLatex": "2,\\, 3,\\, 4", "explanation": "The whole numbers greater than $1$ and up to $4$.", "diagram": null }
      ],
      "finalAnswer": "$2, 3, 4$"
    }
  },
  {
    "id": "gcse.algebra.linear-inequalities.q066",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Linear inequalities",
    "subtopicId": "gcse.algebra.linear-inequalities",
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "expression",
    "tags": ["inequalities", "compound", "flip sign", "negatives"],
    "questionText": "Solve $-8 < -2x \\leq 6$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Divide throughout by $-2$.", "workingLatex": "4 > x \\geq -3", "explanation": "Dividing by the negative $-2$ reverses both signs: $<$ becomes $>$ and $\\leq$ becomes $\\geq$.", "diagram": null },
        { "stepNumber": 2, "description": "Write in ascending order.", "workingLatex": "-3 \\leq x < 4", "explanation": "Reading from small to large gives the standard form.", "diagram": null }
      ],
      "finalAnswer": "$-3 \\leq x < 4$"
    }
  },
  {
    "id": "gcse.algebra.linear-inequalities.q067",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Linear inequalities",
    "subtopicId": "gcse.algebra.linear-inequalities",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "value",
    "tags": ["inequalities", "forming", "consecutive integers", "compound", "word problem"],
    "questionText": "The sum of three consecutive integers is at least $24$ and at most $39$. If the smallest integer is $n$, find all possible values of $n$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Write the sum.", "workingLatex": "n + (n + 1) + (n + 2)", "explanation": "Consecutive integers go up by $1$ each time.", "diagram": null },
        { "stepNumber": 2, "description": "Simplify.", "workingLatex": "3n + 3", "explanation": "Collect the terms: $n + n + n = 3n$ and $1 + 2 = 3$.", "diagram": null },
        { "stepNumber": 3, "description": "Form the compound inequality.", "workingLatex": "24 \\leq 3n + 3 \\leq 39", "explanation": "\u2018At least\u2019 and \u2018at most\u2019 both include their endpoints.", "diagram": null },
        { "stepNumber": 4, "description": "Subtract $3$ throughout.", "workingLatex": "21 \\leq 3n \\leq 36", "explanation": "Remove the constant.", "diagram": null },
        { "stepNumber": 5, "description": "Divide throughout by $3$.", "workingLatex": "7 \\leq n \\leq 12", "explanation": "Dividing by the positive $3$ keeps both signs.", "diagram": null },
        { "stepNumber": 6, "description": "List the integers.", "workingLatex": "7,\\, 8,\\, 9,\\, 10,\\, 11,\\, 12", "explanation": "All whole numbers from $7$ to $12$ inclusive.", "diagram": null }
      ],
      "finalAnswer": "$n \\in \\{7, 8, 9, 10, 11, 12\\}$"
    }
  },
  {
    "id": "gcse.algebra.linear-inequalities.q068",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Linear inequalities",
    "subtopicId": "gcse.algebra.linear-inequalities",
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "expression",
    "tags": ["inequalities", "fractions", "unknowns both sides"],
    "questionText": "Solve $\\dfrac{2x - 1}{3} \\geq x - 2$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Multiply both sides by $3$.", "workingLatex": "2x - 1 \\geq 3(x - 2)", "explanation": "Clear the fraction; the positive $3$ keeps the $\\geq$ sign.", "diagram": null },
        { "stepNumber": 2, "description": "Expand the right-hand side.", "workingLatex": "2x - 1 \\geq 3x - 6", "explanation": "Multiply out the bracket.", "diagram": null },
        { "stepNumber": 3, "description": "Subtract $2x$ from both sides.", "workingLatex": "-1 \\geq x - 6", "explanation": "Move the smaller $x$ term to keep a positive coefficient.", "diagram": null },
        { "stepNumber": 4, "description": "Add $6$ to both sides.", "workingLatex": "5 \\geq x", "explanation": "$-1 + 6 = 5$.", "diagram": null },
        { "stepNumber": 5, "description": "Rewrite with $x$ first.", "workingLatex": "x \\leq 5", "explanation": "So $x$ is at most $5$.", "diagram": null }
      ],
      "finalAnswer": "$x \\leq 5$"
    }
  },
  {
    "id": "gcse.algebra.linear-inequalities.q069",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Linear inequalities",
    "subtopicId": "gcse.algebra.linear-inequalities",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "value",
    "tags": ["inequalities", "compound", "number line", "integer solutions"],
    "questionText": "Solve $3 \\leq 2x - 1 < 9$, show the solution on a number line, and state how many integers satisfy it.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Add $1$ throughout.", "workingLatex": "4 \\leq 2x < 10", "explanation": "Remove the constant from the middle.", "diagram": null },
        { "stepNumber": 2, "description": "Divide throughout by $2$.", "workingLatex": "2 \\leq x < 5", "explanation": "Dividing by the positive $2$ keeps both signs.", "diagram": null },
        { "stepNumber": 3, "description": "Show it on a number line.", "workingLatex": "2 \\leq x < 5", "explanation": "Filled circle at $2$ (included), open circle at $5$ (excluded), shaded between.", "diagram": { "kind": "numberLineInterval", "min": -1, "max": 8, "lower": 2, "upper": 5, "lowerClosed": true, "upperClosed": false, "label": "2 \\leq x < 5", "caption": "Filled at 2, open at 5.", "alt": "Number line shaded from 2 (filled) to 5 (open)." } },
        { "stepNumber": 4, "description": "Count the integers.", "workingLatex": "2,\\, 3,\\, 4 \\Rightarrow 3", "explanation": "There are $3$ integers in the range.", "diagram": null }
      ],
      "finalAnswer": "$2 \\leq x < 5$; $3$ integers ($2, 3, 4$)."
    }
  },
  {
    "id": "gcse.algebra.linear-inequalities.q070",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Linear inequalities",
    "subtopicId": "gcse.algebra.linear-inequalities",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "value",
    "tags": ["inequalities", "forming", "combining", "word problem"],
    "questionText": "A school trip needs at least $3$ adults but no more than $6$ adults. Each adult can supervise $8$ children, and there are $40$ children who must all be supervised. Using $a$ for the number of adults, form inequalities and find the possible values of $a$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Write the staffing limits.", "workingLatex": "3 \\leq a \\leq 6", "explanation": "\u2018At least $3$\u2019 and \u2018no more than $6$\u2019 both include their endpoints.", "diagram": null },
        { "stepNumber": 2, "description": "Write the supervision condition.", "workingLatex": "8a \\geq 40", "explanation": "Each adult covers $8$ children, and all $40$ must be supervised.", "diagram": null },
        { "stepNumber": 3, "description": "Solve the supervision condition.", "workingLatex": "a \\geq 5", "explanation": "$40 \\div 8 = 5$, so at least $5$ adults are needed.", "diagram": null },
        { "stepNumber": 4, "description": "Combine both requirements.", "workingLatex": "5 \\leq a \\leq 6", "explanation": "We need $a \\geq 5$ and $a \\leq 6$ at the same time.", "diagram": null },
        { "stepNumber": 5, "description": "State the whole-number answers.", "workingLatex": "a = 5 \\text{ or } a = 6", "explanation": "The number of adults must be a whole number in the range.", "diagram": null }
      ],
      "finalAnswer": "$5 \\leq a \\leq 6$, so $5$ or $6$ adults."
    }
  }
];
