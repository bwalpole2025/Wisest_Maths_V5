import { Question } from "@/lib/types";

export const questions: Question[] = [
  {
    "id": "gcse.algebra.linear-equations.q001",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Linear equations",
    "subtopicId": "gcse.algebra.linear-equations",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "value",
    "tags": ["linear equations", "one-step", "addition"],
    "questionText": "Solve $x + 7 = 12$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Decide what to undo.", "workingLatex": "x + 7 = 12", "explanation": "The $7$ is added to $x$, so we undo it by subtracting $7$.", "diagram": null },
        { "stepNumber": 2, "description": "Subtract $7$ from both sides.", "workingLatex": "x = 12 - 7", "explanation": "Doing the same to both sides keeps the equation balanced.", "diagram": null },
        { "stepNumber": 3, "description": "Simplify.", "workingLatex": "x = 5", "explanation": "This is the value that makes the equation true.", "diagram": null }
      ],
      "finalAnswer": "$x = 5$"
    }
  },
  {
    "id": "gcse.algebra.linear-equations.q002",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Linear equations",
    "subtopicId": "gcse.algebra.linear-equations",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "value",
    "tags": ["linear equations", "one-step", "subtraction"],
    "questionText": "Solve $x - 4 = 9$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Identify the operation.", "workingLatex": "x - 4 = 9", "explanation": "Here $4$ is subtracted from $x$, so we undo it by adding $4$.", "diagram": null },
        { "stepNumber": 2, "description": "Add $4$ to both sides.", "workingLatex": "x = 9 + 4", "explanation": "Adding $4$ to each side isolates $x$.", "diagram": null },
        { "stepNumber": 3, "description": "Simplify.", "workingLatex": "x = 13", "explanation": "So $x = 13$.", "diagram": null }
      ],
      "finalAnswer": "$x = 13$"
    }
  },
  {
    "id": "gcse.algebra.linear-equations.q003",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Linear equations",
    "subtopicId": "gcse.algebra.linear-equations",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "value",
    "tags": ["linear equations", "one-step", "multiplication"],
    "questionText": "Solve $5x = 40$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Identify the operation.", "workingLatex": "5x = 40", "explanation": "$x$ is multiplied by $5$, so we undo it by dividing by $5$.", "diagram": null },
        { "stepNumber": 2, "description": "Divide both sides by $5$.", "workingLatex": "x = \\dfrac{40}{5}", "explanation": "Dividing each side by $5$ leaves $x$ on its own.", "diagram": null },
        { "stepNumber": 3, "description": "Simplify.", "workingLatex": "x = 8", "explanation": "So $x = 8$.", "diagram": null }
      ],
      "finalAnswer": "$x = 8$"
    }
  },
  {
    "id": "gcse.algebra.linear-equations.q004",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Linear equations",
    "subtopicId": "gcse.algebra.linear-equations",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "value",
    "tags": ["linear equations", "one-step", "division"],
    "questionText": "Solve $\\dfrac{x}{3} = 6$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Identify the operation.", "workingLatex": "\\dfrac{x}{3} = 6", "explanation": "$x$ is divided by $3$, so we undo it by multiplying by $3$.", "diagram": null },
        { "stepNumber": 2, "description": "Multiply both sides by $3$.", "workingLatex": "x = 6 \\times 3", "explanation": "Multiplying each side by $3$ isolates $x$.", "diagram": null },
        { "stepNumber": 3, "description": "Simplify.", "workingLatex": "x = 18", "explanation": "So $x = 18$.", "diagram": null }
      ],
      "finalAnswer": "$x = 18$"
    }
  },
  {
    "id": "gcse.algebra.linear-equations.q005",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Linear equations",
    "subtopicId": "gcse.algebra.linear-equations",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "value",
    "tags": ["linear equations", "two-step"],
    "questionText": "Solve $2x + 3 = 11$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Undo the addition first.", "workingLatex": "2x = 11 - 3", "explanation": "Subtract $3$ from both sides to peel off the constant, working outermost operation first.", "diagram": null },
        { "stepNumber": 2, "description": "Simplify.", "workingLatex": "2x = 8", "explanation": "$11 - 3 = 8$.", "diagram": null },
        { "stepNumber": 3, "description": "Undo the multiplication.", "workingLatex": "x = \\dfrac{8}{2}", "explanation": "Divide both sides by $2$.", "diagram": null },
        { "stepNumber": 4, "description": "Simplify.", "workingLatex": "x = 4", "explanation": "So $x = 4$.", "diagram": null }
      ],
      "finalAnswer": "$x = 4$"
    }
  },
  {
    "id": "gcse.algebra.linear-equations.q006",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Linear equations",
    "subtopicId": "gcse.algebra.linear-equations",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "value",
    "tags": ["linear equations", "two-step", "subtraction"],
    "questionText": "Solve $3x - 5 = 16$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Undo the subtraction.", "workingLatex": "3x = 16 + 5", "explanation": "Add $5$ to both sides to isolate the $3x$ term.", "diagram": null },
        { "stepNumber": 2, "description": "Simplify.", "workingLatex": "3x = 21", "explanation": "$16 + 5 = 21$.", "diagram": null },
        { "stepNumber": 3, "description": "Divide by $3$.", "workingLatex": "x = \\dfrac{21}{3}", "explanation": "Undo the multiplication by dividing both sides by $3$.", "diagram": null },
        { "stepNumber": 4, "description": "Simplify.", "workingLatex": "x = 7", "explanation": "So $x = 7$.", "diagram": null }
      ],
      "finalAnswer": "$x = 7$"
    }
  },
  {
    "id": "gcse.algebra.linear-equations.q007",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Linear equations",
    "subtopicId": "gcse.algebra.linear-equations",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "value",
    "tags": ["linear equations", "two-step", "fraction answer"],
    "questionText": "Solve $4x + 1 = 8$, giving your answer as a fraction.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Subtract $1$ from both sides.", "workingLatex": "4x = 7", "explanation": "Peel off the constant first.", "diagram": null },
        { "stepNumber": 2, "description": "Divide by $4$.", "workingLatex": "x = \\dfrac{7}{4}", "explanation": "$7$ does not divide exactly by $4$, so leave the answer as a fraction.", "diagram": null },
        { "stepNumber": 3, "description": "State the answer.", "workingLatex": "x = 1\\tfrac{3}{4}", "explanation": "As a mixed number this is $1\\tfrac{3}{4}$, or $1.75$.", "diagram": null }
      ],
      "finalAnswer": "$x = \\tfrac{7}{4}$ (i.e. $1.75$)"
    }
  },
  {
    "id": "gcse.algebra.linear-equations.q008",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Linear equations",
    "subtopicId": "gcse.algebra.linear-equations",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "value",
    "tags": ["linear equations", "negative solution"],
    "questionText": "Solve $2x + 9 = 3$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Subtract $9$ from both sides.", "workingLatex": "2x = 3 - 9", "explanation": "Remove the constant from the left.", "diagram": null },
        { "stepNumber": 2, "description": "Simplify.", "workingLatex": "2x = -6", "explanation": "$3 - 9 = -6$; a negative result is fine.", "diagram": null },
        { "stepNumber": 3, "description": "Divide by $2$.", "workingLatex": "x = \\dfrac{-6}{2}", "explanation": "Dividing a negative by a positive gives a negative.", "diagram": null },
        { "stepNumber": 4, "description": "Simplify.", "workingLatex": "x = -3", "explanation": "So $x = -3$.", "diagram": null }
      ],
      "finalAnswer": "$x = -3$"
    }
  },
  {
    "id": "gcse.algebra.linear-equations.q009",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Linear equations",
    "subtopicId": "gcse.algebra.linear-equations",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "value",
    "tags": ["linear equations", "unknowns both sides"],
    "questionText": "Solve $5x = 2x + 12$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Collect the $x$ terms on one side.", "workingLatex": "5x - 2x = 12", "explanation": "Subtract $2x$ from both sides so all the $x$ terms are together on the left.", "diagram": null },
        { "stepNumber": 2, "description": "Simplify.", "workingLatex": "3x = 12", "explanation": "$5x - 2x = 3x$.", "diagram": null },
        { "stepNumber": 3, "description": "Divide by $3$.", "workingLatex": "x = \\dfrac{12}{3}", "explanation": "Undo the multiplication.", "diagram": null },
        { "stepNumber": 4, "description": "Simplify.", "workingLatex": "x = 4", "explanation": "So $x = 4$.", "diagram": null }
      ],
      "finalAnswer": "$x = 4$"
    }
  },
  {
    "id": "gcse.algebra.linear-equations.q010",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Linear equations",
    "subtopicId": "gcse.algebra.linear-equations",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "value",
    "tags": ["linear equations", "unknowns both sides"],
    "questionText": "Solve $7x - 4 = 3x + 16$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Subtract $3x$ from both sides.", "workingLatex": "7x - 3x - 4 = 16", "explanation": "Move the smaller $x$ term across to keep the $x$ coefficient positive.", "diagram": null },
        { "stepNumber": 2, "description": "Simplify.", "workingLatex": "4x - 4 = 16", "explanation": "$7x - 3x = 4x$.", "diagram": null },
        { "stepNumber": 3, "description": "Add $4$ to both sides.", "workingLatex": "4x = 20", "explanation": "Move the constant to the right.", "diagram": null },
        { "stepNumber": 4, "description": "Divide by $4$.", "workingLatex": "x = 5", "explanation": "$20 \\div 4 = 5$.", "diagram": null }
      ],
      "finalAnswer": "$x = 5$"
    }
  },
  {
    "id": "gcse.algebra.linear-equations.q011",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Linear equations",
    "subtopicId": "gcse.algebra.linear-equations",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "value",
    "tags": ["linear equations", "brackets"],
    "questionText": "Solve $3(x + 4) = 27$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Expand the bracket.", "workingLatex": "3x + 12 = 27", "explanation": "Multiply each term inside the bracket by $3$.", "diagram": null },
        { "stepNumber": 2, "description": "Subtract $12$.", "workingLatex": "3x = 15", "explanation": "Remove the constant from the left.", "diagram": null },
        { "stepNumber": 3, "description": "Divide by $3$.", "workingLatex": "x = 5", "explanation": "$15 \\div 3 = 5$.", "diagram": null },
        { "stepNumber": 4, "description": "Check.", "workingLatex": "3(5 + 4) = 27 \\ \\checkmark", "explanation": "Substituting back confirms the solution.", "diagram": null }
      ],
      "finalAnswer": "$x = 5$"
    }
  },
  {
    "id": "gcse.algebra.linear-equations.q012",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Linear equations",
    "subtopicId": "gcse.algebra.linear-equations",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "value",
    "tags": ["linear equations", "brackets", "alternative method"],
    "questionText": "Solve $4(2x - 1) = 28$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Divide both sides by $4$ first.", "workingLatex": "2x - 1 = 7", "explanation": "Since $28$ is a multiple of $4$, dividing first avoids expanding.", "diagram": null },
        { "stepNumber": 2, "description": "Add $1$ to both sides.", "workingLatex": "2x = 8", "explanation": "Remove the constant.", "diagram": null },
        { "stepNumber": 3, "description": "Divide by $2$.", "workingLatex": "x = 4", "explanation": "$8 \\div 2 = 4$.", "diagram": null }
      ],
      "finalAnswer": "$x = 4$"
    }
  },
  {
    "id": "gcse.algebra.linear-equations.q013",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Linear equations",
    "subtopicId": "gcse.algebra.linear-equations",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "value",
    "tags": ["linear equations", "brackets", "unknowns both sides"],
    "questionText": "Solve $2(x + 5) = x + 13$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Expand the bracket.", "workingLatex": "2x + 10 = x + 13", "explanation": "Multiply out the left-hand side.", "diagram": null },
        { "stepNumber": 2, "description": "Subtract $x$ from both sides.", "workingLatex": "x + 10 = 13", "explanation": "Collect the $x$ terms on the left.", "diagram": null },
        { "stepNumber": 3, "description": "Subtract $10$.", "workingLatex": "x = 3", "explanation": "Remove the constant to isolate $x$.", "diagram": null }
      ],
      "finalAnswer": "$x = 3$"
    }
  },
  {
    "id": "gcse.algebra.linear-equations.q014",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Linear equations",
    "subtopicId": "gcse.algebra.linear-equations",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "text",
    "tags": ["linear equations", "checking solutions"],
    "questionText": "Show that $x = 6$ is the solution of $3x - 5 = 13$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Substitute $x = 6$.", "workingLatex": "3(6) - 5", "explanation": "Replace $x$ with $6$ in the left-hand side.", "diagram": null },
        { "stepNumber": 2, "description": "Evaluate.", "workingLatex": "18 - 5 = 13", "explanation": "Work out the arithmetic.", "diagram": null },
        { "stepNumber": 3, "description": "Compare with the right-hand side.", "workingLatex": "13 = 13 \\ \\checkmark", "explanation": "Both sides match, so $x = 6$ is indeed the solution.", "diagram": null }
      ],
      "finalAnswer": "Substituting gives $3(6) - 5 = 13$, matching the right-hand side, so $x = 6$ is correct."
    }
  },
  {
    "id": "gcse.algebra.linear-equations.q015",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Linear equations",
    "subtopicId": "gcse.algebra.linear-equations",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "value",
    "tags": ["linear equations", "unknowns both sides", "negative"],
    "questionText": "Solve $4x + 7 = 9x - 8$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Move $x$ terms to the larger side.", "workingLatex": "7 = 9x - 4x - 8", "explanation": "Subtract $4x$ from both sides so the $x$ coefficient stays positive.", "diagram": null },
        { "stepNumber": 2, "description": "Simplify.", "workingLatex": "7 = 5x - 8", "explanation": "$9x - 4x = 5x$.", "diagram": null },
        { "stepNumber": 3, "description": "Add $8$ to both sides.", "workingLatex": "15 = 5x", "explanation": "Move the constant across.", "diagram": null },
        { "stepNumber": 4, "description": "Divide by $5$.", "workingLatex": "x = 3", "explanation": "$15 \\div 5 = 3$.", "diagram": null }
      ],
      "finalAnswer": "$x = 3$"
    }
  },
  {
    "id": "gcse.algebra.linear-equations.q016",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Linear equations",
    "subtopicId": "gcse.algebra.linear-equations",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "value",
    "tags": ["linear equations", "one-step", "negative coefficient"],
    "questionText": "Solve $-2x = 14$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Identify the operation.", "workingLatex": "-2x = 14", "explanation": "$x$ is multiplied by $-2$, so divide both sides by $-2$.", "diagram": null },
        { "stepNumber": 2, "description": "Divide by $-2$.", "workingLatex": "x = \\dfrac{14}{-2}", "explanation": "Dividing a positive by a negative gives a negative.", "diagram": null },
        { "stepNumber": 3, "description": "Simplify.", "workingLatex": "x = -7", "explanation": "So $x = -7$.", "diagram": null }
      ],
      "finalAnswer": "$x = -7$"
    }
  },
  {
    "id": "gcse.algebra.linear-equations.q017",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Linear equations",
    "subtopicId": "gcse.algebra.linear-equations",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "value",
    "tags": ["linear equations", "brackets", "negative expansion"],
    "questionText": "Solve $5(x - 2) - 3 = 12$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Expand the bracket.", "workingLatex": "5x - 10 - 3 = 12", "explanation": "Multiply both terms inside by $5$.", "diagram": null },
        { "stepNumber": 2, "description": "Collect constants.", "workingLatex": "5x - 13 = 12", "explanation": "$-10 - 3 = -13$.", "diagram": null },
        { "stepNumber": 3, "description": "Add $13$.", "workingLatex": "5x = 25", "explanation": "Move the constant to the right.", "diagram": null },
        { "stepNumber": 4, "description": "Divide by $5$.", "workingLatex": "x = 5", "explanation": "$25 \\div 5 = 5$.", "diagram": null }
      ],
      "finalAnswer": "$x = 5$"
    }
  },
  {
    "id": "gcse.algebra.linear-equations.q018",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Linear equations",
    "subtopicId": "gcse.algebra.linear-equations",
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "value",
    "tags": ["linear equations", "brackets both sides", "expansion"],
    "questionText": "Solve $3(2x - 1) = 2(x + 6)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Expand both brackets.", "workingLatex": "6x - 3 = 2x + 12", "explanation": "Multiply out each side separately.", "diagram": null },
        { "stepNumber": 2, "description": "Subtract $2x$ from both sides.", "workingLatex": "4x - 3 = 12", "explanation": "Collect the $x$ terms on the left.", "diagram": null },
        { "stepNumber": 3, "description": "Add $3$.", "workingLatex": "4x = 15", "explanation": "Move the constant across.", "diagram": null },
        { "stepNumber": 4, "description": "Divide by $4$.", "workingLatex": "x = \\dfrac{15}{4}", "explanation": "The answer is a fraction: $\\tfrac{15}{4} = 3.75$.", "diagram": null }
      ],
      "finalAnswer": "$x = \\tfrac{15}{4}$ (i.e. $3.75$)"
    }
  },
  {
    "id": "gcse.algebra.linear-equations.q019",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Linear equations",
    "subtopicId": "gcse.algebra.linear-equations",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "value",
    "tags": ["linear equations", "fraction equation", "single fraction"],
    "questionText": "Solve $\\dfrac{x + 2}{3} = 5$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Multiply both sides by $3$.", "workingLatex": "x + 2 = 15", "explanation": "Clearing the denominator removes the fraction.", "diagram": null },
        { "stepNumber": 2, "description": "Subtract $2$.", "workingLatex": "x = 13", "explanation": "Isolate $x$ by removing the constant.", "diagram": null },
        { "stepNumber": 3, "description": "Check.", "workingLatex": "\\dfrac{13 + 2}{3} = 5 \\ \\checkmark", "explanation": "Substituting back confirms the solution.", "diagram": null }
      ],
      "finalAnswer": "$x = 13$"
    }
  },
  {
    "id": "gcse.algebra.linear-equations.q020",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Linear equations",
    "subtopicId": "gcse.algebra.linear-equations",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "value",
    "tags": ["linear equations", "fraction equation"],
    "questionText": "Solve $\\dfrac{2x - 1}{4} = 3$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Multiply both sides by $4$.", "workingLatex": "2x - 1 = 12", "explanation": "Clear the denominator.", "diagram": null },
        { "stepNumber": 2, "description": "Add $1$.", "workingLatex": "2x = 13", "explanation": "Move the constant to the right.", "diagram": null },
        { "stepNumber": 3, "description": "Divide by $2$.", "workingLatex": "x = \\dfrac{13}{2}", "explanation": "The answer is $\\tfrac{13}{2} = 6.5$.", "diagram": null }
      ],
      "finalAnswer": "$x = \\tfrac{13}{2}$ (i.e. $6.5$)"
    }
  },
  {
    "id": "gcse.algebra.linear-equations.q021",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Linear equations",
    "subtopicId": "gcse.algebra.linear-equations",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "value",
    "tags": ["linear equations", "two-step", "division"],
    "questionText": "Solve $\\dfrac{x}{2} + 4 = 10$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Subtract $4$ from both sides.", "workingLatex": "\\dfrac{x}{2} = 6", "explanation": "Remove the constant first.", "diagram": null },
        { "stepNumber": 2, "description": "Multiply both sides by $2$.", "workingLatex": "x = 12", "explanation": "Undo the division by $2$.", "diagram": null }
      ],
      "finalAnswer": "$x = 12$"
    }
  },
  {
    "id": "gcse.algebra.linear-equations.q022",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Linear equations",
    "subtopicId": "gcse.algebra.linear-equations",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "value",
    "tags": ["linear equations", "unknowns both sides", "negative solution"],
    "questionText": "Solve $2x + 11 = 5x + 20$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Subtract $2x$ from both sides.", "workingLatex": "11 = 3x + 20", "explanation": "Keep the $x$ coefficient positive by moving the smaller term.", "diagram": null },
        { "stepNumber": 2, "description": "Subtract $20$.", "workingLatex": "-9 = 3x", "explanation": "$11 - 20 = -9$.", "diagram": null },
        { "stepNumber": 3, "description": "Divide by $3$.", "workingLatex": "x = -3", "explanation": "$-9 \\div 3 = -3$.", "diagram": null }
      ],
      "finalAnswer": "$x = -3$"
    }
  },
  {
    "id": "gcse.algebra.linear-equations.q023",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Linear equations",
    "subtopicId": "gcse.algebra.linear-equations",
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "value",
    "tags": ["linear equations", "brackets both sides", "negative"],
    "questionText": "Solve $4(x - 3) = 2(3x - 1) - 6$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Expand both sides.", "workingLatex": "4x - 12 = 6x - 2 - 6", "explanation": "Multiply out each bracket.", "diagram": null },
        { "stepNumber": 2, "description": "Simplify the right.", "workingLatex": "4x - 12 = 6x - 8", "explanation": "$-2 - 6 = -8$.", "diagram": null },
        { "stepNumber": 3, "description": "Subtract $4x$ from both sides.", "workingLatex": "-12 = 2x - 8", "explanation": "Collect $x$ terms on the right to keep the coefficient positive.", "diagram": null },
        { "stepNumber": 4, "description": "Add $8$.", "workingLatex": "-4 = 2x", "explanation": "Move the constant across.", "diagram": null },
        { "stepNumber": 5, "description": "Divide by $2$.", "workingLatex": "x = -2", "explanation": "$-4 \\div 2 = -2$.", "diagram": null }
      ],
      "finalAnswer": "$x = -2$"
    }
  },
  {
    "id": "gcse.algebra.linear-equations.q024",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Linear equations",
    "subtopicId": "gcse.algebra.linear-equations",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "value",
    "tags": ["linear equations", "decimal coefficients"],
    "questionText": "Solve $0.5x + 1.2 = 4.7$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Subtract $1.2$.", "workingLatex": "0.5x = 3.5", "explanation": "Remove the constant from the left.", "diagram": null },
        { "stepNumber": 2, "description": "Divide by $0.5$.", "workingLatex": "x = \\dfrac{3.5}{0.5}", "explanation": "Dividing by $0.5$ is the same as multiplying by $2$.", "diagram": null },
        { "stepNumber": 3, "description": "Simplify.", "workingLatex": "x = 7", "explanation": "So $x = 7$.", "diagram": null }
      ],
      "finalAnswer": "$x = 7$"
    }
  },
  {
    "id": "gcse.algebra.linear-equations.q025",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Linear equations",
    "subtopicId": "gcse.algebra.linear-equations",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "value",
    "tags": ["linear equations", "collecting like terms"],
    "questionText": "Solve $3x + 2 + 2x - 7 = 20$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Collect like terms on the left.", "workingLatex": "5x - 5 = 20", "explanation": "$3x + 2x = 5x$ and $2 - 7 = -5$.", "diagram": null },
        { "stepNumber": 2, "description": "Add $5$.", "workingLatex": "5x = 25", "explanation": "Move the constant to the right.", "diagram": null },
        { "stepNumber": 3, "description": "Divide by $5$.", "workingLatex": "x = 5", "explanation": "$25 \\div 5 = 5$.", "diagram": null }
      ],
      "finalAnswer": "$x = 5$"
    }
  },
  {
    "id": "gcse.algebra.linear-equations.q026",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Linear equations",
    "subtopicId": "gcse.algebra.linear-equations",
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "value",
    "tags": ["linear equations", "fractions", "different denominators"],
    "questionText": "Solve $\\dfrac{x}{2} + \\dfrac{x}{3} = 10$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Find a common denominator.", "workingLatex": "\\dfrac{3x}{6} + \\dfrac{2x}{6} = 10", "explanation": "Rewrite each fraction over $6$, the lowest common denominator.", "diagram": null },
        { "stepNumber": 2, "description": "Add the fractions.", "workingLatex": "\\dfrac{5x}{6} = 10", "explanation": "$3x + 2x = 5x$ over the shared denominator.", "diagram": null },
        { "stepNumber": 3, "description": "Multiply both sides by $6$.", "workingLatex": "5x = 60", "explanation": "Clear the denominator.", "diagram": null },
        { "stepNumber": 4, "description": "Divide by $5$.", "workingLatex": "x = 12", "explanation": "$60 \\div 5 = 12$.", "diagram": null }
      ],
      "finalAnswer": "$x = 12$"
    }
  },
  {
    "id": "gcse.algebra.linear-equations.q027",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Linear equations",
    "subtopicId": "gcse.algebra.linear-equations",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "value",
    "tags": ["linear equations", "fractions", "clearing denominators"],
    "questionText": "Solve $\\dfrac{x + 1}{2} + \\dfrac{x - 2}{3} = 4$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Multiply every term by $6$.", "workingLatex": "3(x + 1) + 2(x - 2) = 24", "explanation": "Using the lowest common denominator $6$ clears both fractions in one step.", "diagram": null },
        { "stepNumber": 2, "description": "Expand the brackets.", "workingLatex": "3x + 3 + 2x - 4 = 24", "explanation": "Multiply out each bracket carefully.", "diagram": null },
        { "stepNumber": 3, "description": "Collect like terms.", "workingLatex": "5x - 1 = 24", "explanation": "$3x + 2x = 5x$ and $3 - 4 = -1$.", "diagram": null },
        { "stepNumber": 4, "description": "Add $1$.", "workingLatex": "5x = 25", "explanation": "Move the constant across.", "diagram": null },
        { "stepNumber": 5, "description": "Divide by $5$.", "workingLatex": "x = 5", "explanation": "$25 \\div 5 = 5$.", "diagram": null }
      ],
      "finalAnswer": "$x = 5$"
    }
  },
  {
    "id": "gcse.algebra.linear-equations.q028",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Linear equations",
    "subtopicId": "gcse.algebra.linear-equations",
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "value",
    "tags": ["linear equations", "cross-multiplication"],
    "questionText": "Solve $\\dfrac{2x + 1}{5} = \\dfrac{x + 4}{3}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Cross-multiply.", "workingLatex": "3(2x + 1) = 5(x + 4)", "explanation": "Multiply each numerator by the other denominator.", "diagram": null },
        { "stepNumber": 2, "description": "Expand both sides.", "workingLatex": "6x + 3 = 5x + 20", "explanation": "Multiply out the brackets.", "diagram": null },
        { "stepNumber": 3, "description": "Subtract $5x$.", "workingLatex": "x + 3 = 20", "explanation": "Collect the $x$ terms on the left.", "diagram": null },
        { "stepNumber": 4, "description": "Subtract $3$.", "workingLatex": "x = 17", "explanation": "So $x = 17$.", "diagram": null }
      ],
      "finalAnswer": "$x = 17$"
    }
  },
  {
    "id": "gcse.algebra.linear-equations.q029",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Linear equations",
    "subtopicId": "gcse.algebra.linear-equations",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "value",
    "tags": ["linear equations", "unknown on right"],
    "questionText": "Solve $20 = 4x - 8$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Add $8$ to both sides.", "workingLatex": "28 = 4x", "explanation": "The unknown being on the right is fine; just balance as usual.", "diagram": null },
        { "stepNumber": 2, "description": "Divide by $4$.", "workingLatex": "7 = x", "explanation": "$28 \\div 4 = 7$.", "diagram": null },
        { "stepNumber": 3, "description": "State the answer.", "workingLatex": "x = 7", "explanation": "So $x = 7$.", "diagram": null }
      ],
      "finalAnswer": "$x = 7$"
    }
  },
  {
    "id": "gcse.algebra.linear-equations.q030",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Linear equations",
    "subtopicId": "gcse.algebra.linear-equations",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "value",
    "tags": ["linear equations", "negative bracket"],
    "questionText": "Solve $10 - 2(x - 1) = 4$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Expand the bracket carefully.", "workingLatex": "10 - 2x + 2 = 4", "explanation": "$-2 \\times -1 = +2$; watch the signs when multiplying by a negative.", "diagram": null },
        { "stepNumber": 2, "description": "Collect constants.", "workingLatex": "12 - 2x = 4", "explanation": "$10 + 2 = 12$.", "diagram": null },
        { "stepNumber": 3, "description": "Subtract $12$.", "workingLatex": "-2x = -8", "explanation": "Move the constant to the right.", "diagram": null },
        { "stepNumber": 4, "description": "Divide by $-2$.", "workingLatex": "x = 4", "explanation": "A negative divided by a negative is positive.", "diagram": null }
      ],
      "finalAnswer": "$x = 4$"
    }
  },
  {
    "id": "gcse.algebra.linear-equations.q031",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Linear equations",
    "subtopicId": "gcse.algebra.linear-equations",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "value",
    "tags": ["linear equations", "fractions both sides", "cross-multiplication"],
    "questionText": "Solve $\\dfrac{3x - 2}{4} = \\dfrac{x + 3}{2}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Cross-multiply.", "workingLatex": "2(3x - 2) = 4(x + 3)", "explanation": "Multiply each numerator by the opposite denominator.", "diagram": null },
        { "stepNumber": 2, "description": "Expand.", "workingLatex": "6x - 4 = 4x + 12", "explanation": "Multiply out both brackets.", "diagram": null },
        { "stepNumber": 3, "description": "Subtract $4x$.", "workingLatex": "2x - 4 = 12", "explanation": "Collect the $x$ terms.", "diagram": null },
        { "stepNumber": 4, "description": "Add $4$.", "workingLatex": "2x = 16", "explanation": "Move the constant.", "diagram": null },
        { "stepNumber": 5, "description": "Divide by $2$.", "workingLatex": "x = 8", "explanation": "$16 \\div 2 = 8$.", "diagram": null }
      ],
      "finalAnswer": "$x = 8$"
    }
  },
  {
    "id": "gcse.algebra.linear-equations.q032",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Linear equations",
    "subtopicId": "gcse.algebra.linear-equations",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "value",
    "tags": ["linear equations", "unknowns both sides", "fraction solution"],
    "questionText": "Solve $6x - 1 = 2x + 4$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Subtract $2x$.", "workingLatex": "4x - 1 = 4", "explanation": "Collect $x$ terms on the left.", "diagram": null },
        { "stepNumber": 2, "description": "Add $1$.", "workingLatex": "4x = 5", "explanation": "Move the constant across.", "diagram": null },
        { "stepNumber": 3, "description": "Divide by $4$.", "workingLatex": "x = \\dfrac{5}{4}", "explanation": "The answer is a fraction, $\\tfrac{5}{4} = 1.25$.", "diagram": null }
      ],
      "finalAnswer": "$x = \\tfrac{5}{4}$ (i.e. $1.25$)"
    }
  },
  {
    "id": "gcse.algebra.linear-equations.q033",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Linear equations",
    "subtopicId": "gcse.algebra.linear-equations",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "value",
    "tags": ["linear equations", "one-step", "fraction coefficient"],
    "questionText": "Solve $\\dfrac{2}{3}x = 8$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Multiply both sides by the reciprocal.", "workingLatex": "x = 8 \\times \\dfrac{3}{2}", "explanation": "Multiplying by $\\tfrac{3}{2}$ undoes multiplying by $\\tfrac{2}{3}$.", "diagram": null },
        { "stepNumber": 2, "description": "Compute.", "workingLatex": "x = \\dfrac{24}{2} = 12", "explanation": "$8 \\times 3 = 24$, then $\\div 2 = 12$.", "diagram": null }
      ],
      "finalAnswer": "$x = 12$"
    }
  },
  {
    "id": "gcse.algebra.linear-equations.q034",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Linear equations",
    "subtopicId": "gcse.algebra.linear-equations",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "value",
    "tags": ["linear equations", "variable in denominator"],
    "questionText": "Solve $\\dfrac{12}{x} = 4$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Multiply both sides by $x$.", "workingLatex": "12 = 4x", "explanation": "This lifts $x$ out of the denominator.", "diagram": null },
        { "stepNumber": 2, "description": "Divide by $4$.", "workingLatex": "x = 3", "explanation": "$12 \\div 4 = 3$.", "diagram": null },
        { "stepNumber": 3, "description": "Check.", "workingLatex": "\\dfrac{12}{3} = 4 \\ \\checkmark", "explanation": "Substituting back confirms the solution.", "diagram": null }
      ],
      "finalAnswer": "$x = 3$"
    }
  },
  {
    "id": "gcse.algebra.linear-equations.q035",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Linear equations",
    "subtopicId": "gcse.algebra.linear-equations",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "value",
    "tags": ["linear equations", "brackets", "collecting"],
    "questionText": "Solve $2(x + 3) + 3(x - 1) = 23$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Expand both brackets.", "workingLatex": "2x + 6 + 3x - 3 = 23", "explanation": "Multiply out each bracket.", "diagram": null },
        { "stepNumber": 2, "description": "Collect like terms.", "workingLatex": "5x + 3 = 23", "explanation": "$2x + 3x = 5x$ and $6 - 3 = 3$.", "diagram": null },
        { "stepNumber": 3, "description": "Subtract $3$.", "workingLatex": "5x = 20", "explanation": "Move the constant across.", "diagram": null },
        { "stepNumber": 4, "description": "Divide by $5$.", "workingLatex": "x = 4", "explanation": "$20 \\div 5 = 4$.", "diagram": null }
      ],
      "finalAnswer": "$x = 4$"
    }
  },
  {
    "id": "gcse.algebra.linear-equations.q036",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Linear equations",
    "subtopicId": "gcse.algebra.linear-equations",
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "value",
    "tags": ["linear equations", "fractions", "single denominator", "both sides"],
    "questionText": "Solve $\\dfrac{4x - 3}{5} = x - 2$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Multiply both sides by $5$.", "workingLatex": "4x - 3 = 5(x - 2)", "explanation": "Clear the denominator; remember to multiply the whole right-hand side.", "diagram": null },
        { "stepNumber": 2, "description": "Expand.", "workingLatex": "4x - 3 = 5x - 10", "explanation": "Multiply out the bracket.", "diagram": null },
        { "stepNumber": 3, "description": "Subtract $4x$.", "workingLatex": "-3 = x - 10", "explanation": "Collect $x$ terms on the right.", "diagram": null },
        { "stepNumber": 4, "description": "Add $10$.", "workingLatex": "7 = x", "explanation": "So $x = 7$.", "diagram": null }
      ],
      "finalAnswer": "$x = 7$"
    }
  },
  {
    "id": "gcse.algebra.linear-equations.q037",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Linear equations",
    "subtopicId": "gcse.algebra.linear-equations",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "value",
    "tags": ["linear equations", "two-step", "negative constant"],
    "questionText": "Solve $6 - x = 2$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Subtract $6$ from both sides.", "workingLatex": "-x = -4", "explanation": "This leaves the $-x$ term alone.", "diagram": null },
        { "stepNumber": 2, "description": "Multiply both sides by $-1$.", "workingLatex": "x = 4", "explanation": "Flipping the sign of both sides gives the positive value.", "diagram": null }
      ],
      "finalAnswer": "$x = 4$"
    }
  },
  {
    "id": "gcse.algebra.linear-equations.q038",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Linear equations",
    "subtopicId": "gcse.algebra.linear-equations",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "value",
    "tags": ["linear equations", "unknowns both sides", "brackets"],
    "questionText": "Solve $5(x - 1) = 3(x + 3)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Expand both sides.", "workingLatex": "5x - 5 = 3x + 9", "explanation": "Multiply out each bracket.", "diagram": null },
        { "stepNumber": 2, "description": "Subtract $3x$.", "workingLatex": "2x - 5 = 9", "explanation": "Collect $x$ terms on the left.", "diagram": null },
        { "stepNumber": 3, "description": "Add $5$.", "workingLatex": "2x = 14", "explanation": "Move the constant across.", "diagram": null },
        { "stepNumber": 4, "description": "Divide by $2$.", "workingLatex": "x = 7", "explanation": "$14 \\div 2 = 7$.", "diagram": null }
      ],
      "finalAnswer": "$x = 7$"
    }
  },
  {
    "id": "gcse.algebra.linear-equations.q039",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Linear equations",
    "subtopicId": "gcse.algebra.linear-equations",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "value",
    "tags": ["linear equations", "decimals", "both sides"],
    "questionText": "Solve $1.5x + 2 = 0.5x + 6$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Subtract $0.5x$.", "workingLatex": "x + 2 = 6", "explanation": "$1.5x - 0.5x = x$.", "diagram": null },
        { "stepNumber": 2, "description": "Subtract $2$.", "workingLatex": "x = 4", "explanation": "So $x = 4$.", "diagram": null }
      ],
      "finalAnswer": "$x = 4$"
    }
  },
  {
    "id": "gcse.algebra.linear-equations.q040",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Linear equations",
    "subtopicId": "gcse.algebra.linear-equations",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "value",
    "tags": ["linear equations", "fractions", "unknowns both sides"],
    "questionText": "Solve $\\dfrac{x}{4} + 3 = \\dfrac{x}{2} - 1$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Multiply every term by $4$.", "workingLatex": "x + 12 = 2x - 4", "explanation": "Using the common denominator $4$ clears both fractions.", "diagram": null },
        { "stepNumber": 2, "description": "Subtract $x$.", "workingLatex": "12 = x - 4", "explanation": "Collect the $x$ terms on the right.", "diagram": null },
        { "stepNumber": 3, "description": "Add $4$.", "workingLatex": "16 = x", "explanation": "So $x = 16$.", "diagram": null },
        { "stepNumber": 4, "description": "Check.", "workingLatex": "\\tfrac{16}{4} + 3 = 7,\\ \\tfrac{16}{2} - 1 = 7 \\ \\checkmark", "explanation": "Both sides equal $7$, confirming the solution.", "diagram": null }
      ],
      "finalAnswer": "$x = 16$"
    }
  },
  {
    "id": "gcse.algebra.linear-equations.q041",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Linear equations",
    "subtopicId": "gcse.algebra.linear-equations",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "value",
    "tags": ["linear equations", "one-step", "addition"],
    "questionText": "Solve $x + 15 = 9$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Subtract $15$ from both sides.", "workingLatex": "x = 9 - 15", "explanation": "Undo the addition of $15$.", "diagram": null },
        { "stepNumber": 2, "description": "Simplify.", "workingLatex": "x = -6", "explanation": "$9 - 15 = -6$.", "diagram": null }
      ],
      "finalAnswer": "$x = -6$"
    }
  },
  {
    "id": "gcse.algebra.linear-equations.q042",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Linear equations",
    "subtopicId": "gcse.algebra.linear-equations",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "value",
    "tags": ["linear equations", "unknowns both sides", "negative x"],
    "questionText": "Solve $3x + 8 = 20 - x$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Add $x$ to both sides.", "workingLatex": "4x + 8 = 20", "explanation": "Adding $x$ removes the $-x$ on the right and collects terms on the left.", "diagram": null },
        { "stepNumber": 2, "description": "Subtract $8$.", "workingLatex": "4x = 12", "explanation": "Move the constant across.", "diagram": null },
        { "stepNumber": 3, "description": "Divide by $4$.", "workingLatex": "x = 3", "explanation": "$12 \\div 4 = 3$.", "diagram": null }
      ],
      "finalAnswer": "$x = 3$"
    }
  },
  {
    "id": "gcse.algebra.linear-equations.q043",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Linear equations",
    "subtopicId": "gcse.algebra.linear-equations",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "value",
    "tags": ["linear equations", "brackets", "fraction solution"],
    "questionText": "Solve $2(3x + 1) = 9$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Expand the bracket.", "workingLatex": "6x + 2 = 9", "explanation": "Multiply both terms inside by $2$.", "diagram": null },
        { "stepNumber": 2, "description": "Subtract $2$.", "workingLatex": "6x = 7", "explanation": "Move the constant across.", "diagram": null },
        { "stepNumber": 3, "description": "Divide by $6$.", "workingLatex": "x = \\dfrac{7}{6}", "explanation": "The answer is the fraction $\\tfrac{7}{6}$.", "diagram": null }
      ],
      "finalAnswer": "$x = \\tfrac{7}{6}$"
    }
  },
  {
    "id": "gcse.algebra.linear-equations.q044",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Linear equations",
    "subtopicId": "gcse.algebra.linear-equations",
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "value",
    "tags": ["linear equations", "brackets both sides", "negative"],
    "questionText": "Solve $7 - 3(x - 2) = 2(4 - x)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Expand both sides.", "workingLatex": "7 - 3x + 6 = 8 - 2x", "explanation": "On the left, $-3 \\times -2 = +6$; expand the right too.", "diagram": null },
        { "stepNumber": 2, "description": "Simplify the left.", "workingLatex": "13 - 3x = 8 - 2x", "explanation": "$7 + 6 = 13$.", "diagram": null },
        { "stepNumber": 3, "description": "Add $3x$ to both sides.", "workingLatex": "13 = 8 + x", "explanation": "Collect the $x$ terms on the right to keep them positive.", "diagram": null },
        { "stepNumber": 4, "description": "Subtract $8$.", "workingLatex": "5 = x", "explanation": "So $x = 5$.", "diagram": null }
      ],
      "finalAnswer": "$x = 5$"
    }
  },
  {
    "id": "gcse.algebra.linear-equations.q045",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Linear equations",
    "subtopicId": "gcse.algebra.linear-equations",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "value",
    "tags": ["linear equations", "fraction equation"],
    "questionText": "Solve $\\dfrac{x}{5} - 2 = 1$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Add $2$ to both sides.", "workingLatex": "\\dfrac{x}{5} = 3", "explanation": "Remove the constant first.", "diagram": null },
        { "stepNumber": 2, "description": "Multiply by $5$.", "workingLatex": "x = 15", "explanation": "Undo the division by $5$.", "diagram": null }
      ],
      "finalAnswer": "$x = 15$"
    }
  },
  {
    "id": "gcse.algebra.linear-equations.q046",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Linear equations",
    "subtopicId": "gcse.algebra.linear-equations",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "value",
    "tags": ["linear equations", "collecting", "both sides"],
    "questionText": "Solve $8x - 3 - 2x = x + 12$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Collect like terms on the left.", "workingLatex": "6x - 3 = x + 12", "explanation": "$8x - 2x = 6x$.", "diagram": null },
        { "stepNumber": 2, "description": "Subtract $x$.", "workingLatex": "5x - 3 = 12", "explanation": "Collect the $x$ terms on the left.", "diagram": null },
        { "stepNumber": 3, "description": "Add $3$.", "workingLatex": "5x = 15", "explanation": "Move the constant across.", "diagram": null },
        { "stepNumber": 4, "description": "Divide by $5$.", "workingLatex": "x = 3", "explanation": "$15 \\div 5 = 3$.", "diagram": null }
      ],
      "finalAnswer": "$x = 3$"
    }
  },
  {
    "id": "gcse.algebra.linear-equations.q047",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Linear equations",
    "subtopicId": "gcse.algebra.linear-equations",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "value",
    "tags": ["linear equations", "fractions", "clearing denominators", "both sides"],
    "questionText": "Solve $\\dfrac{2x + 1}{3} - \\dfrac{x - 1}{2} = 2$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Multiply every term by $6$.", "workingLatex": "2(2x + 1) - 3(x - 1) = 12", "explanation": "The common denominator is $6$; multiply each term to clear fractions.", "diagram": null },
        { "stepNumber": 2, "description": "Expand carefully.", "workingLatex": "4x + 2 - 3x + 3 = 12", "explanation": "Note $-3 \\times -1 = +3$.", "diagram": null },
        { "stepNumber": 3, "description": "Collect like terms.", "workingLatex": "x + 5 = 12", "explanation": "$4x - 3x = x$ and $2 + 3 = 5$.", "diagram": null },
        { "stepNumber": 4, "description": "Subtract $5$.", "workingLatex": "x = 7", "explanation": "So $x = 7$.", "diagram": null }
      ],
      "finalAnswer": "$x = 7$"
    }
  },
  {
    "id": "gcse.algebra.linear-equations.q048",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Linear equations",
    "subtopicId": "gcse.algebra.linear-equations",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "value",
    "tags": ["linear equations", "two-step", "multiplication"],
    "questionText": "Solve $\\dfrac{3x}{4} = 9$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Multiply both sides by $4$.", "workingLatex": "3x = 36", "explanation": "Clear the denominator.", "diagram": null },
        { "stepNumber": 2, "description": "Divide by $3$.", "workingLatex": "x = 12", "explanation": "$36 \\div 3 = 12$.", "diagram": null }
      ],
      "finalAnswer": "$x = 12$"
    }
  },
  {
    "id": "gcse.algebra.linear-equations.q049",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Linear equations",
    "subtopicId": "gcse.algebra.linear-equations",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "value",
    "tags": ["linear equations", "unknowns both sides", "negative solution"],
    "questionText": "Solve $9 - 2x = 3x + 24$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Add $2x$ to both sides.", "workingLatex": "9 = 5x + 24", "explanation": "Collect the $x$ terms on the right to keep them positive.", "diagram": null },
        { "stepNumber": 2, "description": "Subtract $24$.", "workingLatex": "-15 = 5x", "explanation": "$9 - 24 = -15$.", "diagram": null },
        { "stepNumber": 3, "description": "Divide by $5$.", "workingLatex": "x = -3", "explanation": "$-15 \\div 5 = -3$.", "diagram": null }
      ],
      "finalAnswer": "$x = -3$"
    }
  },
  {
    "id": "gcse.algebra.linear-equations.q050",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Linear equations",
    "subtopicId": "gcse.algebra.linear-equations",
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "value",
    "tags": ["linear equations", "cross-multiplication", "negative"],
    "questionText": "Solve $\\dfrac{x - 5}{2} = \\dfrac{2x + 1}{3}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Cross-multiply.", "workingLatex": "3(x - 5) = 2(2x + 1)", "explanation": "Multiply each numerator by the other denominator.", "diagram": null },
        { "stepNumber": 2, "description": "Expand.", "workingLatex": "3x - 15 = 4x + 2", "explanation": "Multiply out both brackets.", "diagram": null },
        { "stepNumber": 3, "description": "Subtract $3x$.", "workingLatex": "-15 = x + 2", "explanation": "Collect $x$ terms on the right.", "diagram": null },
        { "stepNumber": 4, "description": "Subtract $2$.", "workingLatex": "-17 = x", "explanation": "So $x = -17$.", "diagram": null }
      ],
      "finalAnswer": "$x = -17$"
    }
  },
  {
    "id": "gcse.algebra.linear-equations.q051",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Linear equations",
    "subtopicId": "gcse.algebra.linear-equations",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "value",
    "tags": ["linear equations", "two-step", "negative coefficient"],
    "questionText": "Solve $17 - 4x = 5$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Subtract $17$ from both sides.", "workingLatex": "-4x = -12", "explanation": "Move the constant to the right.", "diagram": null },
        { "stepNumber": 2, "description": "Divide by $-4$.", "workingLatex": "x = 3", "explanation": "A negative divided by a negative is positive.", "diagram": null }
      ],
      "finalAnswer": "$x = 3$"
    }
  },
  {
    "id": "gcse.algebra.linear-equations.q052",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Linear equations",
    "subtopicId": "gcse.algebra.linear-equations",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "value",
    "tags": ["linear equations", "brackets", "unknowns both sides"],
    "questionText": "Solve $4(x + 2) = 2(x + 7)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Expand both sides.", "workingLatex": "4x + 8 = 2x + 14", "explanation": "Multiply out each bracket.", "diagram": null },
        { "stepNumber": 2, "description": "Subtract $2x$.", "workingLatex": "2x + 8 = 14", "explanation": "Collect the $x$ terms.", "diagram": null },
        { "stepNumber": 3, "description": "Subtract $8$.", "workingLatex": "2x = 6", "explanation": "Move the constant across.", "diagram": null },
        { "stepNumber": 4, "description": "Divide by $2$.", "workingLatex": "x = 3", "explanation": "$6 \\div 2 = 3$.", "diagram": null }
      ],
      "finalAnswer": "$x = 3$"
    }
  },
  {
    "id": "gcse.algebra.linear-equations.q053",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Linear equations",
    "subtopicId": "gcse.algebra.linear-equations",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "value",
    "tags": ["linear equations", "fractions", "variable in denominator"],
    "questionText": "Solve $\\dfrac{15}{x} + 2 = 7$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Subtract $2$ from both sides.", "workingLatex": "\\dfrac{15}{x} = 5", "explanation": "Isolate the fraction first.", "diagram": null },
        { "stepNumber": 2, "description": "Multiply both sides by $x$.", "workingLatex": "15 = 5x", "explanation": "Lift $x$ out of the denominator.", "diagram": null },
        { "stepNumber": 3, "description": "Divide by $5$.", "workingLatex": "x = 3", "explanation": "$15 \\div 5 = 3$.", "diagram": null },
        { "stepNumber": 4, "description": "Check.", "workingLatex": "\\dfrac{15}{3} + 2 = 7 \\ \\checkmark", "explanation": "Substituting back confirms the solution.", "diagram": null }
      ],
      "finalAnswer": "$x = 3$"
    }
  },
  {
    "id": "gcse.algebra.linear-equations.q054",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Linear equations",
    "subtopicId": "gcse.algebra.linear-equations",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "value",
    "tags": ["linear equations", "unknowns both sides", "fraction solution"],
    "questionText": "Solve $5x + 2 = 3x + 9$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Subtract $3x$.", "workingLatex": "2x + 2 = 9", "explanation": "Collect $x$ terms on the left.", "diagram": null },
        { "stepNumber": 2, "description": "Subtract $2$.", "workingLatex": "2x = 7", "explanation": "Move the constant across.", "diagram": null },
        { "stepNumber": 3, "description": "Divide by $2$.", "workingLatex": "x = \\dfrac{7}{2}", "explanation": "The answer is $\\tfrac{7}{2} = 3.5$.", "diagram": null }
      ],
      "finalAnswer": "$x = \\tfrac{7}{2}$ (i.e. $3.5$)"
    }
  },
  {
    "id": "gcse.algebra.linear-equations.q055",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Linear equations",
    "subtopicId": "gcse.algebra.linear-equations",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "value",
    "tags": ["linear equations", "fractions", "three terms"],
    "questionText": "Solve $\\dfrac{x}{2} - \\dfrac{x}{5} = 3$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Use a common denominator of $10$.", "workingLatex": "\\dfrac{5x}{10} - \\dfrac{2x}{10} = 3", "explanation": "Rewrite each fraction over $10$.", "diagram": null },
        { "stepNumber": 2, "description": "Combine.", "workingLatex": "\\dfrac{3x}{10} = 3", "explanation": "$5x - 2x = 3x$.", "diagram": null },
        { "stepNumber": 3, "description": "Multiply both sides by $10$.", "workingLatex": "3x = 30", "explanation": "Clear the denominator.", "diagram": null },
        { "stepNumber": 4, "description": "Divide by $3$.", "workingLatex": "x = 10", "explanation": "$30 \\div 3 = 10$.", "diagram": null }
      ],
      "finalAnswer": "$x = 10$"
    }
  },
  {
    "id": "gcse.algebra.linear-equations.q056",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Linear equations",
    "subtopicId": "gcse.algebra.linear-equations",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "value",
    "tags": ["linear equations", "one-step", "division"],
    "questionText": "Solve $7x = 3$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Divide both sides by $7$.", "workingLatex": "x = \\dfrac{3}{7}", "explanation": "$3$ does not divide exactly by $7$, so leave the answer as a fraction.", "diagram": null },
        { "stepNumber": 2, "description": "State the answer.", "workingLatex": "x = \\dfrac{3}{7}", "explanation": "This is already in simplest form.", "diagram": null }
      ],
      "finalAnswer": "$x = \\tfrac{3}{7}$"
    }
  },
  {
    "id": "gcse.algebra.linear-equations.q057",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Linear equations",
    "subtopicId": "gcse.algebra.linear-equations",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "value",
    "tags": ["linear equations", "brackets", "collecting", "both sides"],
    "questionText": "Solve $3(2x - 1) - (x - 4) = 16$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Expand, watching the minus sign.", "workingLatex": "6x - 3 - x + 4 = 16", "explanation": "The $-(x - 4)$ becomes $-x + 4$.", "diagram": null },
        { "stepNumber": 2, "description": "Collect like terms.", "workingLatex": "5x + 1 = 16", "explanation": "$6x - x = 5x$ and $-3 + 4 = 1$.", "diagram": null },
        { "stepNumber": 3, "description": "Subtract $1$.", "workingLatex": "5x = 15", "explanation": "Move the constant across.", "diagram": null },
        { "stepNumber": 4, "description": "Divide by $5$.", "workingLatex": "x = 3", "explanation": "$15 \\div 5 = 3$.", "diagram": null }
      ],
      "finalAnswer": "$x = 3$"
    }
  },
  {
    "id": "gcse.algebra.linear-equations.q058",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Linear equations",
    "subtopicId": "gcse.algebra.linear-equations",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "value",
    "tags": ["linear equations", "fraction equation", "bracket"],
    "questionText": "Solve $\\dfrac{3(x - 1)}{2} = 6$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Multiply both sides by $2$.", "workingLatex": "3(x - 1) = 12", "explanation": "Clear the denominator.", "diagram": null },
        { "stepNumber": 2, "description": "Divide by $3$.", "workingLatex": "x - 1 = 4", "explanation": "Undo the multiplication by $3$.", "diagram": null },
        { "stepNumber": 3, "description": "Add $1$.", "workingLatex": "x = 5", "explanation": "So $x = 5$.", "diagram": null }
      ],
      "finalAnswer": "$x = 5$"
    }
  },
  {
    "id": "gcse.algebra.linear-equations.q059",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Linear equations",
    "subtopicId": "gcse.algebra.linear-equations",
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "value",
    "tags": ["linear equations", "unknowns both sides", "brackets", "fraction solution"],
    "questionText": "Solve $2(4x + 1) = 3(2x + 3)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Expand both sides.", "workingLatex": "8x + 2 = 6x + 9", "explanation": "Multiply out each bracket.", "diagram": null },
        { "stepNumber": 2, "description": "Subtract $6x$.", "workingLatex": "2x + 2 = 9", "explanation": "Collect $x$ terms on the left.", "diagram": null },
        { "stepNumber": 3, "description": "Subtract $2$.", "workingLatex": "2x = 7", "explanation": "Move the constant across.", "diagram": null },
        { "stepNumber": 4, "description": "Divide by $2$.", "workingLatex": "x = \\dfrac{7}{2}", "explanation": "The answer is $\\tfrac{7}{2} = 3.5$.", "diagram": null }
      ],
      "finalAnswer": "$x = \\tfrac{7}{2}$ (i.e. $3.5$)"
    }
  },
  {
    "id": "gcse.algebra.linear-equations.q060",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Linear equations",
    "subtopicId": "gcse.algebra.linear-equations",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "value",
    "tags": ["linear equations", "one-step", "subtraction"],
    "questionText": "Solve $x - 12 = -5$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Add $12$ to both sides.", "workingLatex": "x = -5 + 12", "explanation": "Undo the subtraction of $12$.", "diagram": null },
        { "stepNumber": 2, "description": "Simplify.", "workingLatex": "x = 7", "explanation": "$-5 + 12 = 7$.", "diagram": null }
      ],
      "finalAnswer": "$x = 7$"
    }
  },
  {
    "id": "gcse.algebra.linear-equations.q061",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Linear equations",
    "subtopicId": "gcse.algebra.linear-equations",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "value",
    "tags": ["linear equations", "unknowns both sides"],
    "questionText": "Solve $10x - 7 = 4x + 11$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Subtract $4x$.", "workingLatex": "6x - 7 = 11", "explanation": "Collect $x$ terms on the left.", "diagram": null },
        { "stepNumber": 2, "description": "Add $7$.", "workingLatex": "6x = 18", "explanation": "Move the constant across.", "diagram": null },
        { "stepNumber": 3, "description": "Divide by $6$.", "workingLatex": "x = 3", "explanation": "$18 \\div 6 = 3$.", "diagram": null }
      ],
      "finalAnswer": "$x = 3$"
    }
  },
  {
    "id": "gcse.algebra.linear-equations.q062",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Linear equations",
    "subtopicId": "gcse.algebra.linear-equations",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "value",
    "tags": ["linear equations", "fraction equation", "negative"],
    "questionText": "Solve $\\dfrac{x}{3} + 5 = 2$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Subtract $5$.", "workingLatex": "\\dfrac{x}{3} = -3", "explanation": "$2 - 5 = -3$.", "diagram": null },
        { "stepNumber": 2, "description": "Multiply by $3$.", "workingLatex": "x = -9", "explanation": "$-3 \\times 3 = -9$.", "diagram": null }
      ],
      "finalAnswer": "$x = -9$"
    }
  },
  {
    "id": "gcse.algebra.linear-equations.q063",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Linear equations",
    "subtopicId": "gcse.algebra.linear-equations",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "value",
    "tags": ["linear equations", "fractions", "clearing denominators", "both sides"],
    "questionText": "Solve $\\dfrac{x + 4}{3} = \\dfrac{2x - 1}{5} + 1$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Multiply every term by $15$.", "workingLatex": "5(x + 4) = 3(2x - 1) + 15", "explanation": "The common denominator is $15$; multiply each term including the $+1$.", "diagram": null },
        { "stepNumber": 2, "description": "Expand.", "workingLatex": "5x + 20 = 6x - 3 + 15", "explanation": "Multiply out both brackets.", "diagram": null },
        { "stepNumber": 3, "description": "Simplify the right.", "workingLatex": "5x + 20 = 6x + 12", "explanation": "$-3 + 15 = 12$.", "diagram": null },
        { "stepNumber": 4, "description": "Subtract $5x$.", "workingLatex": "20 = x + 12", "explanation": "Collect $x$ terms on the right.", "diagram": null },
        { "stepNumber": 5, "description": "Subtract $12$.", "workingLatex": "x = 8", "explanation": "So $x = 8$.", "diagram": null }
      ],
      "finalAnswer": "$x = 8$"
    }
  },
  {
    "id": "gcse.algebra.linear-equations.q064",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Linear equations",
    "subtopicId": "gcse.algebra.linear-equations",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "value",
    "tags": ["linear equations", "collecting", "constant on left"],
    "questionText": "Solve $30 = 2(x + 5) + 4x$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Expand the bracket.", "workingLatex": "30 = 2x + 10 + 4x", "explanation": "Multiply out the bracket on the right.", "diagram": null },
        { "stepNumber": 2, "description": "Collect like terms.", "workingLatex": "30 = 6x + 10", "explanation": "$2x + 4x = 6x$.", "diagram": null },
        { "stepNumber": 3, "description": "Subtract $10$.", "workingLatex": "20 = 6x", "explanation": "Move the constant to the left.", "diagram": null },
        { "stepNumber": 4, "description": "Divide by $6$.", "workingLatex": "x = \\dfrac{20}{6} = \\dfrac{10}{3}", "explanation": "Simplify the fraction to $\\tfrac{10}{3}$.", "diagram": null }
      ],
      "finalAnswer": "$x = \\tfrac{10}{3}$"
    }
  },
  {
    "id": "gcse.algebra.linear-equations.q065",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Linear equations",
    "subtopicId": "gcse.algebra.linear-equations",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "value",
    "tags": ["linear equations", "unknowns both sides", "brackets", "negative"],
    "questionText": "Solve $6(x - 2) = 4(x - 5)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Expand both sides.", "workingLatex": "6x - 12 = 4x - 20", "explanation": "Multiply out each bracket.", "diagram": null },
        { "stepNumber": 2, "description": "Subtract $4x$.", "workingLatex": "2x - 12 = -20", "explanation": "Collect $x$ terms on the left.", "diagram": null },
        { "stepNumber": 3, "description": "Add $12$.", "workingLatex": "2x = -8", "explanation": "$-20 + 12 = -8$.", "diagram": null },
        { "stepNumber": 4, "description": "Divide by $2$.", "workingLatex": "x = -4", "explanation": "$-8 \\div 2 = -4$.", "diagram": null }
      ],
      "finalAnswer": "$x = -4$"
    }
  },
  {
    "id": "gcse.algebra.linear-equations.q066",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Linear equations",
    "subtopicId": "gcse.algebra.linear-equations",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "value",
    "tags": ["linear equations", "two-step"],
    "questionText": "Solve $8x - 6 = 42$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Add $6$ to both sides.", "workingLatex": "8x = 48", "explanation": "Remove the constant first.", "diagram": null },
        { "stepNumber": 2, "description": "Divide by $8$.", "workingLatex": "x = 6", "explanation": "$48 \\div 8 = 6$.", "diagram": null }
      ],
      "finalAnswer": "$x = 6$"
    }
  },
  {
    "id": "gcse.algebra.linear-equations.q067",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Linear equations",
    "subtopicId": "gcse.algebra.linear-equations",
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "text",
    "tags": ["linear equations", "no solution", "reasoning"],
    "questionText": "Explain why the equation $2(x + 3) = 2x + 5$ has no solution.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Expand the bracket.", "workingLatex": "2x + 6 = 2x + 5", "explanation": "Multiply out the left-hand side.", "diagram": null },
        { "stepNumber": 2, "description": "Subtract $2x$ from both sides.", "workingLatex": "6 = 5", "explanation": "The $x$ terms cancel completely, leaving a numerical statement.", "diagram": null },
        { "stepNumber": 3, "description": "Interpret the result.", "workingLatex": "6 \\neq 5", "explanation": "This statement is false for every value of $x$, so no value can satisfy the equation.", "diagram": null }
      ],
      "finalAnswer": "Expanding gives $6 = 5$, which is never true, so the equation has no solution."
    }
  },
  {
    "id": "gcse.algebra.linear-equations.q068",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Linear equations",
    "subtopicId": "gcse.algebra.linear-equations",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "value",
    "tags": ["linear equations", "unknowns both sides", "brackets"],
    "questionText": "Solve $3(x + 4) - 2(x - 1) = 20$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Expand both brackets.", "workingLatex": "3x + 12 - 2x + 2 = 20", "explanation": "Note $-2 \\times -1 = +2$.", "diagram": null },
        { "stepNumber": 2, "description": "Collect like terms.", "workingLatex": "x + 14 = 20", "explanation": "$3x - 2x = x$ and $12 + 2 = 14$.", "diagram": null },
        { "stepNumber": 3, "description": "Subtract $14$.", "workingLatex": "x = 6", "explanation": "So $x = 6$.", "diagram": null }
      ],
      "finalAnswer": "$x = 6$"
    }
  },
  {
    "id": "gcse.algebra.linear-equations.q069",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Linear equations",
    "subtopicId": "gcse.algebra.linear-equations",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "value",
    "tags": ["linear equations", "fractions", "cross-multiplication", "brackets"],
    "questionText": "Solve $\\dfrac{5}{x + 2} = 2$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Multiply both sides by $(x + 2)$.", "workingLatex": "5 = 2(x + 2)", "explanation": "Clear the denominator, treating $x + 2$ as a single quantity.", "diagram": null },
        { "stepNumber": 2, "description": "Expand.", "workingLatex": "5 = 2x + 4", "explanation": "Multiply out the bracket.", "diagram": null },
        { "stepNumber": 3, "description": "Subtract $4$.", "workingLatex": "1 = 2x", "explanation": "Move the constant across.", "diagram": null },
        { "stepNumber": 4, "description": "Divide by $2$.", "workingLatex": "x = \\dfrac{1}{2}", "explanation": "So $x = 0.5$.", "diagram": null }
      ],
      "finalAnswer": "$x = \\tfrac{1}{2}$"
    }
  },
  {
    "id": "gcse.algebra.linear-equations.q070",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Linear equations",
    "subtopicId": "gcse.algebra.linear-equations",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "value",
    "tags": ["linear equations", "fractions", "unknowns both sides", "clearing denominators"],
    "questionText": "Solve $\\dfrac{2x - 1}{3} - \\dfrac{x - 2}{4} = x - 3$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Multiply every term by $12$.", "workingLatex": "4(2x - 1) - 3(x - 2) = 12(x - 3)", "explanation": "The common denominator is $12$; multiply each term to clear fractions.", "diagram": null },
        { "stepNumber": 2, "description": "Expand each part.", "workingLatex": "8x - 4 - 3x + 6 = 12x - 36", "explanation": "Watch the signs, especially $-3 \\times -2 = +6$.", "diagram": null },
        { "stepNumber": 3, "description": "Collect terms on the left.", "workingLatex": "5x + 2 = 12x - 36", "explanation": "$8x - 3x = 5x$ and $-4 + 6 = 2$.", "diagram": null },
        { "stepNumber": 4, "description": "Subtract $5x$.", "workingLatex": "2 = 7x - 36", "explanation": "Collect $x$ terms on the right.", "diagram": null },
        { "stepNumber": 5, "description": "Add $36$.", "workingLatex": "38 = 7x", "explanation": "Move the constant across.", "diagram": null },
        { "stepNumber": 6, "description": "Divide by $7$.", "workingLatex": "x = \\dfrac{38}{7}", "explanation": "The answer is $\\tfrac{38}{7}$, about $5.43$.", "diagram": null }
      ],
      "finalAnswer": "$x = \\tfrac{38}{7}$"
    }
  }
];
