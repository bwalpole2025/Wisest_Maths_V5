import { Question } from "@/lib/types";

export const questions: Question[] = [
  {
    "id": "al.y1.pure.inequalities.q001",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Inequalities",
    "subtopicId": "al.y1.pure.inequalities",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": [
      "inequalities",
      "linear"
    ],
    "questionText": "Solve the inequality $3x + 2 > 11$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Aim to isolate x.",
          "workingLatex": "3x + 2 > 11",
          "explanation": "We solve an inequality much like an equation: get the term in $x$ by itself, keeping the inequality sign.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Subtract 2 from both sides.",
          "workingLatex": "3x > 9",
          "explanation": "Subtracting the same number from both sides does not change the direction of the inequality.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Divide both sides by 3.",
          "workingLatex": "x > 3",
          "explanation": "Dividing by the positive number $3$ keeps the inequality sign the same way round.",
          "diagram": {
            "kind": "numberLineRay",
            "min": -2,
            "max": 8,
            "endpoint": 3,
            "direction": "right",
            "closed": false,
            "label": "x > 3",
            "caption": "Open circle at 3 — 3 is not included, and everything larger is shaded.",
            "alt": "Number line with an open circle at 3 and the region to its right shaded."
          }
        },
        {
          "stepNumber": 4,
          "description": "Interpret the solution.",
          "workingLatex": "x > 3",
          "explanation": "Any value of $x$ greater than $3$ satisfies the original inequality.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check a test value.",
          "workingLatex": "x = 4: \\ 3(4) + 2 = 14 > 11 \\ \\checkmark",
          "explanation": "Substituting $x = 4$ (which is greater than $3$) gives a true statement, confirming the solution.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the answer.",
          "workingLatex": "x > 3",
          "explanation": "The solution to the inequality is $x > 3$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$3x + 2 > 11 \\Rightarrow 3x > 9 \\Rightarrow x > 3$"
    }
  },
  {
    "id": "al.y1.pure.inequalities.q002",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Inequalities",
    "subtopicId": "al.y1.pure.inequalities",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": [
      "inequalities",
      "linear"
    ],
    "questionText": "Solve the inequality $2x - 5 \\le 7$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Aim to isolate x.",
          "workingLatex": "2x - 5 \\le 7",
          "explanation": "We isolate the term in $x$, treating the inequality like an equation but watching the sign.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Add 5 to both sides.",
          "workingLatex": "2x \\le 12",
          "explanation": "Adding the same number to both sides leaves the inequality direction unchanged.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Divide both sides by 2.",
          "workingLatex": "x \\le 6",
          "explanation": "Dividing by the positive number $2$ keeps the inequality sign the same way round.",
          "diagram": {
            "kind": "numberLineRay",
            "min": 1,
            "max": 11,
            "endpoint": 6,
            "direction": "left",
            "closed": true,
            "label": "x ≤ 6",
            "caption": "Solid circle at 6 — 6 is included, and everything smaller is shaded.",
            "alt": "Number line with a solid circle at 6 and the region to its left shaded."
          }
        },
        {
          "stepNumber": 4,
          "description": "Interpret the solution.",
          "workingLatex": "x \\le 6",
          "explanation": "Any value of $x$ less than or equal to $6$ satisfies the inequality.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check a test value.",
          "workingLatex": "x = 6: \\ 2(6) - 5 = 7 \\le 7 \\ \\checkmark",
          "explanation": "Substituting the boundary value $x = 6$ gives $7 \\le 7$, which is true, confirming the solution.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the answer.",
          "workingLatex": "x \\le 6",
          "explanation": "The solution is $x \\le 6$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$2x - 5 \\le 7 \\Rightarrow 2x \\le 12 \\Rightarrow x \\le 6$"
    }
  },
  {
    "id": "al.y1.pure.inequalities.q003",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Inequalities",
    "subtopicId": "al.y1.pure.inequalities",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": [
      "inequalities",
      "linear"
    ],
    "questionText": "Solve the inequality $4x + 1 \\ge 9$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Aim to isolate x.",
          "workingLatex": "4x + 1 \\ge 9",
          "explanation": "We isolate the $x$ term, keeping the inequality sign as we work.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Subtract 1 from both sides.",
          "workingLatex": "4x \\ge 8",
          "explanation": "Subtracting the same number from both sides does not change the inequality direction.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Divide both sides by 4.",
          "workingLatex": "x \\ge 2",
          "explanation": "Dividing by the positive number $4$ keeps the inequality sign the same way round.",
          "diagram": {
            "kind": "numberLineRay",
            "min": -3,
            "max": 7,
            "endpoint": 2,
            "direction": "right",
            "closed": true,
            "label": "x ≥ 2",
            "caption": "Solid circle at 2 — 2 is included, and everything larger is shaded.",
            "alt": "Number line with a solid circle at 2 and the region to its right shaded."
          }
        },
        {
          "stepNumber": 4,
          "description": "Interpret the solution.",
          "workingLatex": "x \\ge 2",
          "explanation": "Any value of $x$ at least $2$ satisfies the inequality.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check a test value.",
          "workingLatex": "x = 3: \\ 4(3) + 1 = 13 \\ge 9 \\ \\checkmark",
          "explanation": "Substituting $x = 3$ (which is at least $2$) gives a true statement, confirming the solution.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the answer.",
          "workingLatex": "x \\ge 2",
          "explanation": "The solution is $x \\ge 2$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$4x + 1 \\ge 9 \\Rightarrow 4x \\ge 8 \\Rightarrow x \\ge 2$"
    }
  },
  {
    "id": "al.y1.pure.inequalities.q004",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Inequalities",
    "subtopicId": "al.y1.pure.inequalities",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": [
      "inequalities",
      "linear",
      "brackets"
    ],
    "questionText": "Solve the inequality $3(x - 2) > 6$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Expand the bracket.",
          "workingLatex": "3x - 6 > 6",
          "explanation": "Multiplying out the bracket removes it, giving a simpler linear inequality.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Add 6 to both sides.",
          "workingLatex": "3x > 12",
          "explanation": "Adding $6$ to both sides isolates the term in $x$ without changing the inequality direction.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Divide both sides by 3.",
          "workingLatex": "x > 4",
          "explanation": "Dividing by the positive number $3$ keeps the inequality sign the same way round.",
          "diagram": {
            "kind": "numberLineRay",
            "min": -1,
            "max": 9,
            "endpoint": 4,
            "direction": "right",
            "closed": false,
            "label": "x > 4",
            "caption": "Open circle at 4 — 4 is not included, and everything larger is shaded.",
            "alt": "Number line with an open circle at 4 and the region to its right shaded."
          }
        },
        {
          "stepNumber": 4,
          "description": "Interpret the solution.",
          "workingLatex": "x > 4",
          "explanation": "Any value of $x$ greater than $4$ satisfies the inequality.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check a test value.",
          "workingLatex": "x = 5: \\ 3(5 - 2) = 9 > 6 \\ \\checkmark",
          "explanation": "Substituting $x = 5$ gives $9 > 6$, which is true, confirming the solution.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the answer.",
          "workingLatex": "x > 4",
          "explanation": "The solution to the inequality is $x > 4$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$3(x - 2) > 6 \\Rightarrow 3x - 6 > 6 \\Rightarrow 3x > 12 \\Rightarrow x > 4$"
    }
  },
  {
    "id": "al.y1.pure.inequalities.q005",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Inequalities",
    "subtopicId": "al.y1.pure.inequalities",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": [
      "inequalities",
      "linear",
      "variable both sides"
    ],
    "questionText": "Solve the inequality $2x + 3 < x + 8$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Collect the x terms on one side.",
          "workingLatex": "2x - x + 3 < 8",
          "explanation": "Subtracting $x$ from both sides gathers the variable terms together.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Simplify.",
          "workingLatex": "x + 3 < 8",
          "explanation": "Combining $2x - x$ gives $x$, leaving $x + 3 < 8$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Subtract 3 from both sides.",
          "workingLatex": "x < 5",
          "explanation": "Subtracting $3$ isolates $x$ without changing the inequality direction.",
          "diagram": {
            "kind": "numberLineRay",
            "min": 0,
            "max": 10,
            "endpoint": 5,
            "direction": "left",
            "closed": false,
            "label": "x < 5",
            "caption": "Open circle at 5 — 5 is not included, and everything smaller is shaded.",
            "alt": "Number line with an open circle at 5 and the region to its left shaded."
          }
        },
        {
          "stepNumber": 4,
          "description": "Interpret the solution.",
          "workingLatex": "x < 5",
          "explanation": "Any value of $x$ less than $5$ satisfies the inequality.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check a test value.",
          "workingLatex": "x = 4: \\ 2(4) + 3 = 11 < 4 + 8 = 12 \\ \\checkmark",
          "explanation": "Substituting $x = 4$ gives $11 < 12$, which is true, confirming the solution.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the answer.",
          "workingLatex": "x < 5",
          "explanation": "The solution to the inequality is $x < 5$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$2x + 3 < x + 8 \\Rightarrow x < 5$"
    }
  },
  {
    "id": "al.y1.pure.inequalities.q006",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Inequalities",
    "subtopicId": "al.y1.pure.inequalities",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": [
      "inequalities",
      "linear",
      "fractions"
    ],
    "questionText": "Solve the inequality $\\dfrac{x}{2} + 1 < 4$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Subtract 1 from both sides.",
          "workingLatex": "\\dfrac{x}{2} < 3",
          "explanation": "Removing the constant first isolates the fraction, keeping the inequality direction the same.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Multiply both sides by 2.",
          "workingLatex": "x < 6",
          "explanation": "Multiplying by the positive number $2$ clears the fraction and keeps the inequality sign the same way round.",
          "diagram": {
            "kind": "numberLineRay",
            "min": 1,
            "max": 11,
            "endpoint": 6,
            "direction": "left",
            "closed": false,
            "label": "x < 6",
            "caption": "Open circle at 6 — 6 is not included, and everything smaller is shaded.",
            "alt": "Number line with an open circle at 6 and the region to its left shaded."
          }
        },
        {
          "stepNumber": 3,
          "description": "Interpret the solution.",
          "workingLatex": "x < 6",
          "explanation": "Any value of $x$ less than $6$ satisfies the inequality.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Check a test value.",
          "workingLatex": "x = 4: \\ \\tfrac{4}{2} + 1 = 3 < 4 \\ \\checkmark",
          "explanation": "Substituting $x = 4$ gives $3 < 4$, which is true, confirming the solution.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check the boundary is excluded.",
          "workingLatex": "x = 6: \\ \\tfrac{6}{2} + 1 = 4 \\not< 4",
          "explanation": "At $x = 6$ the expression equals $4$, which is not less than $4$, so the boundary is correctly excluded.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the answer.",
          "workingLatex": "x < 6",
          "explanation": "The solution to the inequality is $x < 6$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{x}{2} + 1 < 4 \\Rightarrow \\dfrac{x}{2} < 3 \\Rightarrow x < 6$"
    }
  },
  {
    "id": "al.y1.pure.inequalities.q007",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Inequalities",
    "subtopicId": "al.y1.pure.inequalities",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": [
      "inequalities",
      "linear"
    ],
    "questionText": "Solve the inequality $5x - 4 \\le 11$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Aim to isolate x.",
          "workingLatex": "5x - 4 \\le 11",
          "explanation": "We isolate the $x$ term, keeping the inequality sign as we work.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Add 4 to both sides.",
          "workingLatex": "5x \\le 15",
          "explanation": "Adding $4$ to both sides isolates the term in $x$ without changing the inequality direction.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Divide both sides by 5.",
          "workingLatex": "x \\le 3",
          "explanation": "Dividing by the positive number $5$ keeps the inequality sign the same way round.",
          "diagram": {
            "kind": "numberLineRay",
            "min": -2,
            "max": 8,
            "endpoint": 3,
            "direction": "left",
            "closed": true,
            "label": "x ≤ 3",
            "caption": "Solid circle at 3 — 3 is included, and everything smaller is shaded.",
            "alt": "Number line with a solid circle at 3 and the region to its left shaded."
          }
        },
        {
          "stepNumber": 4,
          "description": "Interpret the solution.",
          "workingLatex": "x \\le 3",
          "explanation": "Any value of $x$ at most $3$ satisfies the inequality.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check the boundary value.",
          "workingLatex": "x = 3: \\ 5(3) - 4 = 11 \\le 11 \\ \\checkmark",
          "explanation": "Substituting the boundary $x = 3$ gives $11 \\le 11$, which is true, confirming the solution.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the answer.",
          "workingLatex": "x \\le 3",
          "explanation": "The solution is $x \\le 3$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$5x - 4 \\le 11 \\Rightarrow 5x \\le 15 \\Rightarrow x \\le 3$"
    }
  },
  {
    "id": "al.y1.pure.inequalities.q008",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Inequalities",
    "subtopicId": "al.y1.pure.inequalities",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": [
      "inequalities",
      "linear",
      "variable both sides"
    ],
    "questionText": "Solve the inequality $4x > x + 9$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Collect the x terms on one side.",
          "workingLatex": "4x - x > 9",
          "explanation": "Subtracting $x$ from both sides gathers the variable terms on the left.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Simplify.",
          "workingLatex": "3x > 9",
          "explanation": "Combining $4x - x$ gives $3x$, leaving $3x > 9$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Divide both sides by 3.",
          "workingLatex": "x > 3",
          "explanation": "Dividing by the positive number $3$ keeps the inequality sign the same way round.",
          "diagram": {
            "kind": "numberLineRay",
            "min": -2,
            "max": 8,
            "endpoint": 3,
            "direction": "right",
            "closed": false,
            "label": "x > 3",
            "caption": "Open circle at 3 — 3 is not included, and everything larger is shaded.",
            "alt": "Number line with an open circle at 3 and the region to its right shaded."
          }
        },
        {
          "stepNumber": 4,
          "description": "Interpret the solution.",
          "workingLatex": "x > 3",
          "explanation": "Any value of $x$ greater than $3$ satisfies the inequality.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check a test value.",
          "workingLatex": "x = 4: \\ 4(4) = 16 > 4 + 9 = 13 \\ \\checkmark",
          "explanation": "Substituting $x = 4$ gives $16 > 13$, which is true, confirming the solution.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the answer.",
          "workingLatex": "x > 3",
          "explanation": "The solution to the inequality is $x > 3$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$4x > x + 9 \\Rightarrow 3x > 9 \\Rightarrow x > 3$"
    }
  },
  {
    "id": "al.y1.pure.inequalities.q009",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Inequalities",
    "subtopicId": "al.y1.pure.inequalities",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "expression",
    "tags": [
      "inequalities",
      "linear",
      "dividing by negative"
    ],
    "questionText": "Solve the inequality $-3x > 12$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Note the coefficient of x is negative.",
          "workingLatex": "-3x > 12",
          "explanation": "When we divide (or multiply) an inequality by a negative number, the inequality sign must be reversed — the key idea here.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Divide both sides by -3.",
          "workingLatex": "\\dfrac{-3x}{-3} \\ \\text{vs} \\ \\dfrac{12}{-3}",
          "explanation": "We divide both sides by $-3$ to isolate $x$, remembering the sign will flip.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Reverse the inequality sign.",
          "workingLatex": "x < -4",
          "explanation": "Because we divided by a negative number, $>$ becomes $<$, giving $x < -4$.",
          "diagram": {
            "kind": "signFlipMirror",
            "min": -9,
            "max": 1,
            "beforeEndpoint": -4,
            "beforeDirection": "right",
            "beforeClosed": false,
            "beforeLabel": "-3x > 12",
            "afterEndpoint": -4,
            "afterDirection": "left",
            "afterClosed": false,
            "afterLabel": "x < -4",
            "caption": "Dividing by -3 reflects the ray — the > sign flips to <.",
            "alt": "Two number lines about the point -4: the upper points right, the lower is the mirror image pointing left, showing the sign flip."
          }
        },
        {
          "stepNumber": 4,
          "description": "Interpret the solution.",
          "workingLatex": "x < -4",
          "explanation": "Any value of $x$ less than $-4$ satisfies the inequality.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check a test value.",
          "workingLatex": "x = -5: \\ -3(-5) = 15 > 12 \\ \\checkmark",
          "explanation": "Substituting $x = -5$ (which is less than $-4$) gives $15 > 12$, confirming the solution.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check a value on the wrong side.",
          "workingLatex": "x = 0: \\ -3(0) = 0 \\not> 12",
          "explanation": "Testing $x = 0$ gives $0 > 12$, which is false, confirming that values above $-4$ do not work.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Confirm the sign flip mattered.",
          "workingLatex": "\\text{forgetting to flip would give the wrong side}",
          "explanation": "Had we kept $>$, we would have written $x > -4$, the exact opposite set — so the flip is essential.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Express in set notation.",
          "workingLatex": "\\{x : x < -4\\}",
          "explanation": "In set notation the solution is the set of all real $x$ that are less than $-4$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the answer.",
          "workingLatex": "x < -4",
          "explanation": "The solution is $x < -4$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$-3x > 12 \\Rightarrow x < -4$ (dividing by $-3$ reverses the inequality)."
    }
  },
  {
    "id": "al.y1.pure.inequalities.q010",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Inequalities",
    "subtopicId": "al.y1.pure.inequalities",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "expression",
    "tags": [
      "inequalities",
      "linear",
      "dividing by negative"
    ],
    "questionText": "Solve the inequality $7 - 2x \\ge 1$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Isolate the term in x.",
          "workingLatex": "-2x \\ge 1 - 7",
          "explanation": "Subtracting $7$ from both sides moves the constant across, leaving the $x$ term on the left.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Simplify.",
          "workingLatex": "-2x \\ge -6",
          "explanation": "Combining $1 - 7$ gives $-6$, so we have $-2x \\ge -6$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Prepare to divide by a negative.",
          "workingLatex": "\\text{divide by } -2 \\Rightarrow \\text{reverse the sign}",
          "explanation": "Dividing by the negative number $-2$ will reverse the inequality, so we flag this before doing it.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Divide and reverse the sign.",
          "workingLatex": "x \\le 3",
          "explanation": "Dividing both sides by $-2$ and flipping $\\ge$ to $\\le$ gives $x \\le 3$.",
          "diagram": {
            "kind": "signFlipMirror",
            "min": -2,
            "max": 8,
            "beforeEndpoint": 3,
            "beforeDirection": "right",
            "beforeClosed": true,
            "beforeLabel": "-2x ≥ -6",
            "afterEndpoint": 3,
            "afterDirection": "left",
            "afterClosed": true,
            "afterLabel": "x ≤ 3",
            "caption": "Dividing by -2 reflects the ray — the ≥ sign flips to ≤.",
            "alt": "Two number lines about the point 3: the upper points right, the lower is the mirror image pointing left, showing the sign flip."
          }
        },
        {
          "stepNumber": 5,
          "description": "Interpret the solution.",
          "workingLatex": "x \\le 3",
          "explanation": "Any value of $x$ at most $3$ satisfies the inequality.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check the boundary value.",
          "workingLatex": "x = 3: \\ 7 - 2(3) = 1 \\ge 1 \\ \\checkmark",
          "explanation": "Substituting $x = 3$ gives $1 \\ge 1$, which is true, confirming the boundary is included.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check a value outside.",
          "workingLatex": "x = 4: \\ 7 - 2(4) = -1 \\not\\ge 1",
          "explanation": "Testing $x = 4$ gives $-1 \\ge 1$, which is false, confirming values above $3$ do not work.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Express in set notation.",
          "workingLatex": "\\{x : x \\le 3\\}",
          "explanation": "In set notation the solution is the set of all real $x$ that are at most $3$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the answer.",
          "workingLatex": "x \\le 3",
          "explanation": "The solution is $x \\le 3$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$7 - 2x \\ge 1 \\Rightarrow -2x \\ge -6 \\Rightarrow x \\le 3$ (dividing by $-2$ reverses the inequality)."
    }
  },
  {
    "id": "al.y1.pure.inequalities.q011",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Inequalities",
    "subtopicId": "al.y1.pure.inequalities",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "expression",
    "tags": [
      "inequalities",
      "linear",
      "dividing by negative"
    ],
    "questionText": "Solve the inequality $2 - 3x \\le 11$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Isolate the term in x.",
          "workingLatex": "-3x \\le 11 - 2",
          "explanation": "Subtracting $2$ from both sides moves the constant across.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Simplify.",
          "workingLatex": "-3x \\le 9",
          "explanation": "Combining $11 - 2$ gives $9$, so we have $-3x \\le 9$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Prepare to divide by a negative.",
          "workingLatex": "\\text{divide by } -3 \\Rightarrow \\text{reverse the sign}",
          "explanation": "Dividing by the negative number $-3$ will reverse the inequality direction.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Divide and reverse the sign.",
          "workingLatex": "x \\ge -3",
          "explanation": "Dividing both sides by $-3$ and flipping $\\le$ to $\\ge$ gives $x \\ge -3$.",
          "diagram": {
            "kind": "signFlipMirror",
            "min": -8,
            "max": 2,
            "beforeEndpoint": -3,
            "beforeDirection": "left",
            "beforeClosed": true,
            "beforeLabel": "-3x ≤ 9",
            "afterEndpoint": -3,
            "afterDirection": "right",
            "afterClosed": true,
            "afterLabel": "x ≥ -3",
            "caption": "Dividing by -3 reflects the ray — the ≤ sign flips to ≥.",
            "alt": "Two number lines about the point -3: the upper points left, the lower is the mirror image pointing right, showing the sign flip."
          }
        },
        {
          "stepNumber": 5,
          "description": "Interpret the solution.",
          "workingLatex": "x \\ge -3",
          "explanation": "Any value of $x$ at least $-3$ satisfies the inequality.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check the boundary value.",
          "workingLatex": "x = -3: \\ 2 - 3(-3) = 11 \\le 11 \\ \\checkmark",
          "explanation": "Substituting $x = -3$ gives $11 \\le 11$, which is true, confirming the boundary is included.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check a value outside.",
          "workingLatex": "x = -4: \\ 2 - 3(-4) = 14 \\not\\le 11",
          "explanation": "Testing $x = -4$ gives $14 \\le 11$, which is false, confirming values below $-3$ do not work.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Express in set notation.",
          "workingLatex": "\\{x : x \\ge -3\\}",
          "explanation": "In set notation the solution is the set of all real $x$ that are at least $-3$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the answer.",
          "workingLatex": "x \\ge -3",
          "explanation": "The solution is $x \\ge -3$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$2 - 3x \\le 11 \\Rightarrow -3x \\le 9 \\Rightarrow x \\ge -3$ (dividing by $-3$ reverses the inequality)."
    }
  },
  {
    "id": "al.y1.pure.inequalities.q012",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Inequalities",
    "subtopicId": "al.y1.pure.inequalities",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "expression",
    "tags": [
      "inequalities",
      "linear",
      "double inequality"
    ],
    "questionText": "Solve the inequality $1 < 2x + 3 \\le 9$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recognise a double inequality.",
          "workingLatex": "1 < 2x + 3 \\le 9",
          "explanation": "This says $2x + 3$ lies between $1$ and $9$; we perform the same operation on all three parts.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Subtract 3 from all three parts.",
          "workingLatex": "1 - 3 < 2x \\le 9 - 3",
          "explanation": "Subtracting $3$ throughout keeps the chain of inequalities balanced.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Simplify.",
          "workingLatex": "-2 < 2x \\le 6",
          "explanation": "Working out the outer values gives $-2 < 2x \\le 6$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Divide all three parts by 2.",
          "workingLatex": "-1 < x \\le 3",
          "explanation": "Dividing by the positive number $2$ throughout keeps both inequality signs the same way round.",
          "diagram": {
            "kind": "numberLineInterval",
            "min": -5,
            "max": 7,
            "lower": -1,
            "upper": 3,
            "lowerClosed": false,
            "upperClosed": true,
            "label": "-1 < x ≤ 3",
            "caption": "-1 excluded (hollow), 3 included (solid); the band between is shaded.",
            "alt": "Number line with a hollow circle at -1, a solid circle at 3, and the interval between them shaded."
          }
        },
        {
          "stepNumber": 5,
          "description": "Interpret the solution.",
          "workingLatex": "-1 < x \\le 3",
          "explanation": "The solution is all $x$ between $-1$ (excluded) and $3$ (included).",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check a value inside.",
          "workingLatex": "x = 0: \\ 2(0) + 3 = 3, \\ 1 < 3 \\le 9 \\ \\checkmark",
          "explanation": "Substituting $x = 0$ gives $3$, which lies in the required range, confirming the solution.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check the lower boundary.",
          "workingLatex": "x = -1: \\ 2(-1) + 3 = 1, \\ 1 < 1 \\text{ is false}",
          "explanation": "At $x = -1$ the value is $1$, which is not strictly greater than $1$, so $-1$ is correctly excluded.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check the upper boundary.",
          "workingLatex": "x = 3: \\ 2(3) + 3 = 9 \\le 9 \\ \\checkmark",
          "explanation": "At $x = 3$ the value is $9$, which satisfies $\\le 9$, so $3$ is correctly included.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the answer.",
          "workingLatex": "-1 < x \\le 3",
          "explanation": "The solution is $-1 < x \\le 3$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$1 < 2x + 3 \\le 9 \\Rightarrow -2 < 2x \\le 6 \\Rightarrow -1 < x \\le 3$"
    }
  },
  {
    "id": "al.y1.pure.inequalities.q013",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Inequalities",
    "subtopicId": "al.y1.pure.inequalities",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "expression",
    "tags": [
      "inequalities",
      "linear",
      "double inequality"
    ],
    "questionText": "Solve the inequality $-5 \\le 3x - 2 < 7$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recognise a double inequality.",
          "workingLatex": "-5 \\le 3x - 2 < 7",
          "explanation": "This says $3x - 2$ lies between $-5$ and $7$; we operate on all three parts at once.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Add 2 to all three parts.",
          "workingLatex": "-5 + 2 \\le 3x < 7 + 2",
          "explanation": "Adding $2$ throughout keeps the chain of inequalities balanced.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Simplify.",
          "workingLatex": "-3 \\le 3x < 9",
          "explanation": "Working out the outer values gives $-3 \\le 3x < 9$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Divide all three parts by 3.",
          "workingLatex": "-1 \\le x < 3",
          "explanation": "Dividing by the positive number $3$ throughout keeps both inequality signs the same way round.",
          "diagram": {
            "kind": "numberLineInterval",
            "min": -5,
            "max": 7,
            "lower": -1,
            "upper": 3,
            "lowerClosed": true,
            "upperClosed": false,
            "label": "-1 ≤ x < 3",
            "caption": "-1 included (solid), 3 excluded (hollow); the band between is shaded.",
            "alt": "Number line with a solid circle at -1, a hollow circle at 3, and the interval between them shaded."
          }
        },
        {
          "stepNumber": 5,
          "description": "Interpret the solution.",
          "workingLatex": "-1 \\le x < 3",
          "explanation": "The solution is all $x$ between $-1$ (included) and $3$ (excluded).",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check a value inside.",
          "workingLatex": "x = 0: \\ 3(0) - 2 = -2, \\ -5 \\le -2 < 7 \\ \\checkmark",
          "explanation": "Substituting $x = 0$ gives $-2$, which lies in the required range, confirming the solution.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check the lower boundary.",
          "workingLatex": "x = -1: \\ 3(-1) - 2 = -5 \\ge -5 \\ \\checkmark",
          "explanation": "At $x = -1$ the value is $-5$, which satisfies $\\ge -5$, so $-1$ is correctly included.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check the upper boundary.",
          "workingLatex": "x = 3: \\ 3(3) - 2 = 7, \\ 7 < 7 \\text{ is false}",
          "explanation": "At $x = 3$ the value is $7$, which is not strictly less than $7$, so $3$ is correctly excluded.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the answer.",
          "workingLatex": "-1 \\le x < 3",
          "explanation": "The solution is $-1 \\le x < 3$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$-5 \\le 3x - 2 < 7 \\Rightarrow -3 \\le 3x < 9 \\Rightarrow -1 \\le x < 3$"
    }
  },
  {
    "id": "al.y1.pure.inequalities.q014",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Inequalities",
    "subtopicId": "al.y1.pure.inequalities",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "expression",
    "tags": [
      "inequalities",
      "quadratic",
      "factorising"
    ],
    "questionText": "Solve the inequality $x^2 - 5x + 6 < 0$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Factorise the quadratic.",
          "workingLatex": "x^2 - 5x + 6 = (x - 2)(x - 3)",
          "explanation": "Factorising finds the critical values where the expression equals zero, which divide the number line into regions.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find the critical values.",
          "workingLatex": "x = 2 \\ \\text{ and } \\ x = 3",
          "explanation": "Setting each factor to zero gives the roots $2$ and $3$, where the parabola crosses the $x$-axis.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Note the shape of the parabola.",
          "workingLatex": "\\text{coefficient of } x^2 > 0 \\Rightarrow \\text{opens upward}",
          "explanation": "A positive $x^2$ coefficient means the parabola is a `smile', dipping below the axis between its roots.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Decide where the curve is below the axis.",
          "workingLatex": "\\text{below the axis between the roots}",
          "explanation": "For an upward parabola, $y < 0$ (below the axis) exactly between the two roots.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Write the solution.",
          "workingLatex": "2 < x < 3",
          "explanation": "The inequality $< 0$ therefore holds for $x$ strictly between $2$ and $3$.",
          "diagram": {
            "kind": "parabolaRegion",
            "r1": 2,
            "r2": 3,
            "opensUp": true,
            "region": "interior",
            "rootsClosed": false,
            "label": "2 < x < 3",
            "caption": "x² - 5x + 6 < 0: below the axis between the roots 2 and 3.",
            "alt": "Upward parabola crossing the x-axis at 2 and 3, with the region between the roots below the axis highlighted."
          }
        },
        {
          "stepNumber": 6,
          "description": "Express in set notation.",
          "workingLatex": "\\{x : 2 < x < 3\\}",
          "explanation": "In set notation the solution is the set of $x$ with $2 < x < 3$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check a value inside.",
          "workingLatex": "x = \\tfrac{5}{2}: \\ (\\tfrac{1}{2})(-\\tfrac{1}{2}) = -\\tfrac{1}{4} < 0 \\ \\checkmark",
          "explanation": "At $x = \\tfrac{5}{2}$ the product is negative, confirming the inequality holds between the roots.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check a value outside.",
          "workingLatex": "x = 4: \\ (2)(1) = 2 \\not< 0",
          "explanation": "At $x = 4$ the product is positive, confirming the inequality fails outside the roots.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the answer.",
          "workingLatex": "2 < x < 3",
          "explanation": "The solution is $2 < x < 3$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$(x-2)(x-3) < 0 \\Rightarrow 2 < x < 3$ (below the axis between the roots)."
    }
  },
  {
    "id": "al.y1.pure.inequalities.q015",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Inequalities",
    "subtopicId": "al.y1.pure.inequalities",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "expression",
    "tags": [
      "inequalities",
      "quadratic",
      "difference of squares"
    ],
    "questionText": "Solve the inequality $x^2 - 9 \\ge 0$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Factorise the quadratic.",
          "workingLatex": "x^2 - 9 = (x - 3)(x + 3)",
          "explanation": "This difference of two squares factorises, revealing the critical values.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find the critical values.",
          "workingLatex": "x = 3 \\ \\text{ and } \\ x = -3",
          "explanation": "Setting each factor to zero gives the roots $3$ and $-3$, where the parabola meets the $x$-axis.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Note the shape of the parabola.",
          "workingLatex": "\\text{opens upward}",
          "explanation": "The positive $x^2$ coefficient means the parabola is a `smile', lying above the axis outside its roots.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Decide where the curve is on or above the axis.",
          "workingLatex": "\\text{on/above the axis outside the roots}",
          "explanation": "For an upward parabola, $y \\ge 0$ at and outside the two roots.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Write the solution.",
          "workingLatex": "x \\le -3 \\ \\text{ or } \\ x \\ge 3",
          "explanation": "The inequality $\\ge 0$ holds for $x$ at most $-3$ or at least $3$, including the roots themselves.",
          "diagram": {
            "kind": "parabolaRegion",
            "r1": -3,
            "r2": 3,
            "opensUp": true,
            "region": "exterior",
            "rootsClosed": true,
            "label": "x ≤ -3 or x ≥ 3",
            "caption": "x² - 9 ≥ 0: on or above the axis outside the roots -3 and 3.",
            "alt": "Upward parabola crossing the x-axis at -3 and 3, with the two outer regions (x ≤ -3 and x ≥ 3) shaded and the roots marked as solid points."
          }
        },
        {
          "stepNumber": 6,
          "description": "Express in set notation.",
          "workingLatex": "\\{x : x \\le -3\\} \\cup \\{x : x \\ge 3\\}",
          "explanation": "The solution is the union of the two outer regions.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check a value outside the roots.",
          "workingLatex": "x = 4: \\ 16 - 9 = 7 \\ge 0 \\ \\checkmark",
          "explanation": "At $x = 4$ the value is positive, confirming the inequality holds outside the roots.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check a value between the roots.",
          "workingLatex": "x = 0: \\ 0 - 9 = -9 \\not\\ge 0",
          "explanation": "At $x = 0$ the value is negative, confirming the inequality fails between the roots.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the answer.",
          "workingLatex": "x \\le -3 \\ \\text{ or } \\ x \\ge 3",
          "explanation": "The solution is $x \\le -3$ or $x \\ge 3$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$(x-3)(x+3) \\ge 0 \\Rightarrow x \\le -3 \\text{ or } x \\ge 3$ (outside the roots)."
    }
  },
  {
    "id": "al.y1.pure.inequalities.q016",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Inequalities",
    "subtopicId": "al.y1.pure.inequalities",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "expression",
    "tags": [
      "inequalities",
      "quadratic",
      "common factor"
    ],
    "questionText": "Solve the inequality $x^2 - 4x \\le 0$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Factorise the quadratic.",
          "workingLatex": "x^2 - 4x = x(x - 4)",
          "explanation": "Both terms share a factor of $x$, so we factorise to find the critical values.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find the critical values.",
          "workingLatex": "x = 0 \\ \\text{ and } \\ x = 4",
          "explanation": "Setting each factor to zero gives the roots $0$ and $4$, where the parabola meets the $x$-axis.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Note the shape of the parabola.",
          "workingLatex": "\\text{opens upward}",
          "explanation": "The positive $x^2$ coefficient means the parabola is a `smile', dipping below the axis between its roots.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Decide where the curve is on or below the axis.",
          "workingLatex": "\\text{on/below the axis between the roots}",
          "explanation": "For an upward parabola, $y \\le 0$ at and between the two roots.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Write the solution.",
          "workingLatex": "0 \\le x \\le 4",
          "explanation": "The inequality $\\le 0$ holds for $x$ between $0$ and $4$, including the roots.",
          "diagram": {
            "kind": "parabolaRegion",
            "r1": 0,
            "r2": 4,
            "opensUp": true,
            "region": "interior",
            "rootsClosed": true,
            "label": "0 ≤ x ≤ 4",
            "caption": "x² - 4x ≤ 0: on or below the axis between the roots 0 and 4.",
            "alt": "Upward parabola crossing the x-axis at 0 and 4, with the region between the roots shaded and the endpoints included as solid points."
          }
        },
        {
          "stepNumber": 6,
          "description": "Express in set notation.",
          "workingLatex": "\\{x : 0 \\le x \\le 4\\}",
          "explanation": "In set notation the solution is the set of $x$ with $0 \\le x \\le 4$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check a value inside.",
          "workingLatex": "x = 2: \\ 4 - 8 = -4 \\le 0 \\ \\checkmark",
          "explanation": "At $x = 2$ the value is negative, confirming the inequality holds between the roots.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check a value outside.",
          "workingLatex": "x = 5: \\ 25 - 20 = 5 \\not\\le 0",
          "explanation": "At $x = 5$ the value is positive, confirming the inequality fails outside the roots.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the answer.",
          "workingLatex": "0 \\le x \\le 4",
          "explanation": "The solution is $0 \\le x \\le 4$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x(x - 4) \\le 0 \\Rightarrow 0 \\le x \\le 4$ (between the roots)."
    }
  },
  {
    "id": "al.y1.pure.inequalities.q017",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Inequalities",
    "subtopicId": "al.y1.pure.inequalities",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "expression",
    "tags": [
      "inequalities",
      "quadratic",
      "square root"
    ],
    "questionText": "Solve the inequality $x^2 \\le 16$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Rearrange to standard form.",
          "workingLatex": "x^2 - 16 \\le 0",
          "explanation": "Moving everything to one side lets us factorise and use the roots to find the solution.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Factorise the difference of squares.",
          "workingLatex": "(x - 4)(x + 4) \\le 0",
          "explanation": "Since $16 = 4^2$, the expression factorises as a difference of two squares.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find the critical values.",
          "workingLatex": "x = 4 \\ \\text{ and } \\ x = -4",
          "explanation": "Setting each factor to zero gives the roots $4$ and $-4$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Note the shape of the parabola.",
          "workingLatex": "\\text{opens upward}",
          "explanation": "The positive $x^2$ coefficient means the parabola dips below the axis between its roots.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Decide where the curve is on or below the axis.",
          "workingLatex": "\\text{between the roots}",
          "explanation": "For an upward parabola, $y \\le 0$ at and between the two roots.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Write the solution.",
          "workingLatex": "-4 \\le x \\le 4",
          "explanation": "The inequality holds for $x$ between $-4$ and $4$, including the boundary values.",
          "diagram": {
            "kind": "parabolaRegion",
            "r1": -4,
            "r2": 4,
            "opensUp": true,
            "region": "interior",
            "rootsClosed": true,
            "label": "-4 ≤ x ≤ 4",
            "caption": "x² - 16 ≤ 0: on or below the axis between the roots -4 and 4.",
            "alt": "Upward parabola crossing the x-axis at -4 and 4, with the region between the roots shaded and the endpoints included as solid points."
          }
        },
        {
          "stepNumber": 7,
          "description": "Express in set notation.",
          "workingLatex": "\\{x : -4 \\le x \\le 4\\}",
          "explanation": "In set notation the solution is the set of $x$ with $-4 \\le x \\le 4$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check a value inside.",
          "workingLatex": "x = 0: \\ 0 \\le 16 \\ \\checkmark",
          "explanation": "At $x = 0$ we have $0 \\le 16$, which is true, confirming the interior of the interval works.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the answer.",
          "workingLatex": "-4 \\le x \\le 4",
          "explanation": "The solution is $-4 \\le x \\le 4$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x^2 \\le 16 \\Rightarrow (x-4)(x+4) \\le 0 \\Rightarrow -4 \\le x \\le 4$"
    }
  },
  {
    "id": "al.y1.pure.inequalities.q018",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Inequalities",
    "subtopicId": "al.y1.pure.inequalities",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "expression",
    "tags": [
      "inequalities",
      "quadratic",
      "factorising"
    ],
    "questionText": "Solve the inequality $x^2 - x - 6 > 0$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Factorise the quadratic.",
          "workingLatex": "x^2 - x - 6 = (x - 3)(x + 2)",
          "explanation": "Factorising reveals the critical values where the expression is zero.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find the critical values.",
          "workingLatex": "x = 3 \\ \\text{ and } \\ x = -2",
          "explanation": "Setting each factor to zero gives the roots $3$ and $-2$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Note the shape of the parabola.",
          "workingLatex": "\\text{opens upward}",
          "explanation": "The positive $x^2$ coefficient means the parabola lies above the axis outside its roots.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Decide where the curve is above the axis.",
          "workingLatex": "\\text{above the axis outside the roots}",
          "explanation": "For an upward parabola, $y > 0$ strictly outside the two roots.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Write the solution.",
          "workingLatex": "x < -2 \\ \\text{ or } \\ x > 3",
          "explanation": "The inequality $> 0$ holds for $x$ less than $-2$ or greater than $3$.",
          "diagram": {
            "kind": "parabolaRegion",
            "r1": -2,
            "r2": 3,
            "opensUp": true,
            "region": "exterior",
            "rootsClosed": false,
            "label": "x < -2 or x > 3",
            "caption": "x² - x - 6 > 0: above the axis outside the roots -2 and 3.",
            "alt": "Upward parabola crossing the x-axis at -2 and 3, with the two outer regions shaded and the roots marked as open points."
          }
        },
        {
          "stepNumber": 6,
          "description": "Express in set notation.",
          "workingLatex": "\\{x : x < -2\\} \\cup \\{x : x > 3\\}",
          "explanation": "The solution is the union of the two outer regions, with the roots excluded.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check a value outside the roots.",
          "workingLatex": "x = 4: \\ (1)(6) = 6 > 0 \\ \\checkmark",
          "explanation": "At $x = 4$ the product is positive, confirming the inequality holds outside the roots.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check a value between the roots.",
          "workingLatex": "x = 0: \\ (-3)(2) = -6 \\not> 0",
          "explanation": "At $x = 0$ the product is negative, confirming the inequality fails between the roots.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the answer.",
          "workingLatex": "x < -2 \\ \\text{ or } \\ x > 3",
          "explanation": "The solution is $x < -2$ or $x > 3$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$(x-3)(x+2) > 0 \\Rightarrow x < -2 \\text{ or } x > 3$ (outside the roots)."
    }
  },
  {
    "id": "al.y1.pure.inequalities.q019",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Inequalities",
    "subtopicId": "al.y1.pure.inequalities",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "expression",
    "tags": [
      "inequalities",
      "quadratic",
      "leading coefficient",
      "factorising"
    ],
    "questionText": "Solve the inequality $2x^2 + 3x - 2 > 0$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Factorise the quadratic.",
          "workingLatex": "2x^2 + 3x - 2 = (2x - 1)(x + 2)",
          "explanation": "Splitting the middle term (using $ac = -4$, with $4$ and $-1$) gives the factorisation of this quadratic with leading coefficient $2$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find the critical values.",
          "workingLatex": "2x - 1 = 0 \\Rightarrow x = \\tfrac{1}{2}, \\quad x + 2 = 0 \\Rightarrow x = -2",
          "explanation": "Setting each factor to zero gives the roots $\\tfrac12$ and $-2$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Order the critical values.",
          "workingLatex": "-2 < \\tfrac{1}{2}",
          "explanation": "Placing the roots in order divides the number line into three regions to test.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Note the shape of the parabola.",
          "workingLatex": "\\text{coefficient of } x^2 = 2 > 0 \\Rightarrow \\text{opens upward}",
          "explanation": "A positive $x^2$ coefficient means the parabola lies above the axis outside its roots.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Decide where the curve is above the axis.",
          "workingLatex": "\\text{above the axis outside the roots}",
          "explanation": "For an upward parabola, $y > 0$ strictly outside the two roots.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Write the solution.",
          "workingLatex": "x < -2 \\ \\text{ or } \\ x > \\tfrac{1}{2}",
          "explanation": "The inequality $> 0$ holds for $x$ less than $-2$ or greater than $\\tfrac12$.",
          "diagram": {
            "kind": "parabolaRegion",
            "r1": -2,
            "r2": 1 / 2,
            "opensUp": true,
            "region": "exterior",
            "rootsClosed": false,
            "label": "x < -2 or x > 1/2",
            "caption": "(2x-1)(x+2) > 0: above the axis outside the roots -2 and ½.",
            "alt": "Upward parabola crossing the x-axis at -2 and 1/2, with the two outer regions shaded and the roots marked as open points."
          }
        },
        {
          "stepNumber": 7,
          "description": "Express in set notation.",
          "workingLatex": "\\{x : x < -2\\} \\cup \\{x : x > \\tfrac{1}{2}\\}",
          "explanation": "The solution is the union of the two outer regions.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Test the left region.",
          "workingLatex": "x = -3: \\ (2(-3)-1)((-3)+2) = (-7)(-1) = 7 > 0 \\ \\checkmark",
          "explanation": "At $x = -3$ the product is positive, confirming the inequality holds in the left region.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Test the middle region.",
          "workingLatex": "x = 0: \\ (-1)(2) = -2 \\not> 0",
          "explanation": "At $x = 0$ the product is negative, confirming the inequality fails between the roots.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Test the right region.",
          "workingLatex": "x = 1: \\ (1)(3) = 3 > 0 \\ \\checkmark",
          "explanation": "At $x = 1$ the product is positive, confirming the inequality holds in the right region.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Confirm the boundaries are excluded.",
          "workingLatex": "\\text{strict } > 0 \\Rightarrow \\text{roots not included}",
          "explanation": "Because the inequality is strict, the roots $-2$ and $\\tfrac12$ (where the value is zero) are excluded.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Summarise the sign pattern.",
          "workingLatex": "+ \\ (x<-2) \\ | \\ - \\ | \\ + \\ (x>\\tfrac{1}{2})",
          "explanation": "The parabola is positive, then negative between the roots, then positive again — matching the two outer regions of the solution.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "State the answer.",
          "workingLatex": "x < -2 \\ \\text{ or } \\ x > \\tfrac{1}{2}",
          "explanation": "The solution is $x < -2$ or $x > \\tfrac12$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$(2x-1)(x+2) > 0 \\Rightarrow x < -2 \\text{ or } x > \\tfrac{1}{2}$ (outside the roots)."
    }
  },
  {
    "id": "al.y1.pure.inequalities.q020",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Inequalities",
    "subtopicId": "al.y1.pure.inequalities",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "expression",
    "tags": [
      "inequalities",
      "quadratic",
      "negative leading coefficient"
    ],
    "questionText": "Solve the inequality $6 - x - x^2 \\ge 0$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Multiply through by -1.",
          "workingLatex": "x^2 + x - 6 \\le 0",
          "explanation": "Multiplying by $-1$ makes the $x^2$ coefficient positive, which is easier to work with — but it reverses the inequality sign.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Factorise the quadratic.",
          "workingLatex": "x^2 + x - 6 = (x + 3)(x - 2)",
          "explanation": "Factorising reveals the critical values where the expression is zero.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find the critical values.",
          "workingLatex": "x = -3 \\ \\text{ and } \\ x = 2",
          "explanation": "Setting each factor to zero gives the roots $-3$ and $2$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Note the shape of the (rewritten) parabola.",
          "workingLatex": "\\text{opens upward}",
          "explanation": "After multiplying by $-1$, the parabola $x^2 + x - 6$ opens upward, dipping below the axis between its roots.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Decide where the curve is on or below the axis.",
          "workingLatex": "\\text{between the roots}",
          "explanation": "For the upward parabola, $\\le 0$ holds at and between the two roots.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Write the solution.",
          "workingLatex": "-3 \\le x \\le 2",
          "explanation": "The inequality $x^2 + x - 6 \\le 0$ (equivalent to the original) holds for $-3 \\le x \\le 2$.",
          "diagram": {
            "kind": "parabolaRegion",
            "r1": -3,
            "r2": 2,
            "opensUp": true,
            "region": "interior",
            "rootsClosed": true,
            "label": "-3 ≤ x ≤ 2",
            "caption": "Rewritten as x² + x - 6 ≤ 0: on or below the axis between the roots -3 and 2.",
            "alt": "Upward parabola crossing the x-axis at -3 and 2, with the region between the roots shaded and the endpoints included as solid points."
          }
        },
        {
          "stepNumber": 7,
          "description": "Express in set notation.",
          "workingLatex": "\\{x : -3 \\le x \\le 2\\}",
          "explanation": "In set notation the solution is the set of $x$ with $-3 \\le x \\le 2$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check a value inside.",
          "workingLatex": "x = 0: \\ 6 - 0 - 0 = 6 \\ge 0 \\ \\checkmark",
          "explanation": "Testing $x = 0$ in the original gives $6 \\ge 0$, which is true, confirming the interior works.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Check a value outside.",
          "workingLatex": "x = 3: \\ 6 - 3 - 9 = -6 \\not\\ge 0",
          "explanation": "Testing $x = 3$ gives $-6 \\ge 0$, which is false, confirming values outside the interval fail.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Check a boundary.",
          "workingLatex": "x = 2: \\ 6 - 2 - 4 = 0 \\ge 0 \\ \\checkmark",
          "explanation": "At $x = 2$ the original expression equals $0$, satisfying $\\ge 0$, so the boundary is included.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Note the sign-flip was key.",
          "workingLatex": "\\ge \\to \\le \\text{ when multiplying by } -1",
          "explanation": "Reversing the inequality when multiplying by $-1$ was essential; skipping it would give the wrong region.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Express in interval notation.",
          "workingLatex": "x \\in [-3, 2]",
          "explanation": "In interval notation the solution is the closed interval from $-3$ to $2$, with both endpoints included.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "State the answer.",
          "workingLatex": "-3 \\le x \\le 2",
          "explanation": "The solution is $-3 \\le x \\le 2$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$6 - x - x^2 \\ge 0 \\Rightarrow x^2 + x - 6 \\le 0 \\Rightarrow (x+3)(x-2) \\le 0 \\Rightarrow -3 \\le x \\le 2$"
    }
  },
  {
    "id": "al.y1.pure.inequalities.q021",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Inequalities",
    "subtopicId": "al.y1.pure.inequalities",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "expression",
    "tags": [
      "inequalities",
      "quadratic",
      "rearranging"
    ],
    "questionText": "Solve the inequality $x^2 < 3x + 4$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Rearrange to standard form.",
          "workingLatex": "x^2 - 3x - 4 < 0",
          "explanation": "Bringing all terms to one side gives a quadratic compared with zero, ready to factorise.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Factorise the quadratic.",
          "workingLatex": "x^2 - 3x - 4 = (x - 4)(x + 1)",
          "explanation": "Factorising reveals the critical values where the expression is zero.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find the critical values.",
          "workingLatex": "x = 4 \\ \\text{ and } \\ x = -1",
          "explanation": "Setting each factor to zero gives the roots $4$ and $-1$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Order the critical values.",
          "workingLatex": "-1 < 4",
          "explanation": "Ordering the roots divides the number line into three regions.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Note the shape of the parabola.",
          "workingLatex": "\\text{opens upward}",
          "explanation": "The positive $x^2$ coefficient means the parabola dips below the axis between its roots.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Decide where the curve is below the axis.",
          "workingLatex": "\\text{between the roots}",
          "explanation": "For an upward parabola, $y < 0$ strictly between the two roots.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Write the solution.",
          "workingLatex": "-1 < x < 4",
          "explanation": "The inequality $< 0$ holds for $x$ strictly between $-1$ and $4$.",
          "diagram": {
            "kind": "parabolaRegion",
            "r1": -1,
            "r2": 4,
            "opensUp": true,
            "region": "interior",
            "rootsClosed": false,
            "label": "-1 < x < 4",
            "caption": "x² - 3x - 4 < 0: below the axis between the roots -1 and 4.",
            "alt": "Upward parabola crossing the x-axis at -1 and 4, with the region between the roots shaded and the roots marked as open points."
          }
        },
        {
          "stepNumber": 8,
          "description": "Express in set notation.",
          "workingLatex": "\\{x : -1 < x < 4\\}",
          "explanation": "In set notation the solution is the set of $x$ with $-1 < x < 4$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Check a value inside.",
          "workingLatex": "x = 0: \\ 0 < 3(0) + 4 = 4 \\ \\checkmark",
          "explanation": "Testing $x = 0$ in the original gives $0 < 4$, which is true, confirming the interior works.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Check a value outside.",
          "workingLatex": "x = 5: \\ 25 < 3(5) + 4 = 19 \\text{ is false}",
          "explanation": "Testing $x = 5$ gives $25 < 19$, which is false, confirming values outside the interval fail.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Note the boundaries are excluded.",
          "workingLatex": "\\text{strict } < \\Rightarrow \\text{roots not included}",
          "explanation": "Because the inequality is strict, the roots $-1$ and $4$ (where the two sides are equal) are excluded.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Express in interval notation.",
          "workingLatex": "x \\in (-1, 4)",
          "explanation": "In interval notation the solution is the open interval from $-1$ to $4$, with both endpoints excluded.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "State the answer.",
          "workingLatex": "-1 < x < 4",
          "explanation": "The solution is $-1 < x < 4$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x^2 < 3x + 4 \\Rightarrow x^2 - 3x - 4 = (x-4)(x+1) < 0 \\Rightarrow -1 < x < 4$"
    }
  },
  {
    "id": "al.y1.pure.inequalities.q022",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Inequalities",
    "subtopicId": "al.y1.pure.inequalities",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "expression",
    "tags": [
      "inequalities",
      "discriminant",
      "real roots",
      "range of a parameter"
    ],
    "questionText": "Find the range of values of $k$ for which the equation $x^2 + kx + 4 = 0$ has real roots.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the condition for real roots.",
          "workingLatex": "\\Delta = b^2 - 4ac \\ge 0",
          "explanation": "A quadratic has real roots (distinct or repeated) exactly when its discriminant is non-negative.",
          "diagram": {
            "kind": "discriminantTriad",
            "highlight": [
              "two",
              "equal"
            ],
            "caption": "Real roots need Δ = b² - 4ac ≥ 0 (two distinct roots or one repeated root).",
            "alt": "Three parabola panels: Δ>0 crossing the axis twice, Δ=0 touching once, Δ<0 not touching; the first two panels (Δ ≥ 0) are highlighted."
          }
        },
        {
          "stepNumber": 2,
          "description": "Identify the coefficients.",
          "workingLatex": "a = 1,\\ b = k,\\ c = 4",
          "explanation": "Here the middle coefficient is the unknown $k$, which the condition will constrain.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write the discriminant.",
          "workingLatex": "\\Delta = k^2 - 4(1)(4) = k^2 - 16",
          "explanation": "Substituting the coefficients into $b^2 - 4ac$ gives $k^2 - 16$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Set up the inequality.",
          "workingLatex": "k^2 - 16 \\ge 0",
          "explanation": "For real roots the discriminant must be at least zero.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Factorise.",
          "workingLatex": "(k - 4)(k + 4) \\ge 0",
          "explanation": "The left-hand side is a difference of squares, so it factorises as $(k-4)(k+4)$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find the critical values.",
          "workingLatex": "k = 4 \\ \\text{ and } \\ k = -4",
          "explanation": "The expression is zero at $k = 4$ and $k = -4$, dividing the $k$-line into regions.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Note the shape in k.",
          "workingLatex": "\\text{upward parabola in } k",
          "explanation": "As a quadratic in $k$, this opens upward, so it is non-negative outside (and at) its roots.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Decide where it is non-negative.",
          "workingLatex": "\\text{on/outside the roots}",
          "explanation": "For the upward parabola, $\\ge 0$ holds at and outside the two critical values.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Write the range.",
          "workingLatex": "k \\le -4 \\ \\text{ or } \\ k \\ge 4",
          "explanation": "The discriminant is non-negative precisely for these values of $k$, including the boundaries (which give equal roots).",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Test a value inside.",
          "workingLatex": "k = 0: \\ 0 - 16 = -16 < 0",
          "explanation": "At $k = 0$ the discriminant is negative, so there are no real roots — confirming the middle region is excluded.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Test a value outside.",
          "workingLatex": "k = 5: \\ 25 - 16 = 9 \\ge 0 \\ \\checkmark",
          "explanation": "At $k = 5$ the discriminant is non-negative, confirming real roots occur in the outer region.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Include the boundaries.",
          "workingLatex": "k = 4: \\ 16 - 16 = 0 \\ge 0 \\ \\checkmark",
          "explanation": "At $k = \\pm 4$ the discriminant is zero, giving equal (still real) roots, so the boundaries are included.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "State the answer.",
          "workingLatex": "k \\le -4 \\ \\text{ or } \\ k \\ge 4",
          "explanation": "The equation has real roots when $k \\le -4$ or $k \\ge 4$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\Delta = k^2 - 16 \\ge 0 \\Rightarrow (k-4)(k+4) \\ge 0 \\Rightarrow k \\le -4 \\text{ or } k \\ge 4$"
    }
  },
  {
    "id": "al.y1.pure.inequalities.q023",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Inequalities",
    "subtopicId": "al.y1.pure.inequalities",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "expression",
    "tags": [
      "inequalities",
      "discriminant",
      "positive definite",
      "range of a parameter"
    ],
    "questionText": "Find the range of values of $k$ for which $x^2 + 6x + k > 0$ for all real values of $x$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Interpret the condition graphically.",
          "workingLatex": "\\text{parabola stays entirely above the } x\\text{-axis}",
          "explanation": "For $x^2 + 6x + k > 0$ to hold for every $x$, the upward parabola must never touch or cross the $x$-axis.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "State the condition for no real roots.",
          "workingLatex": "\\Delta = b^2 - 4ac < 0",
          "explanation": "An upward parabola stays strictly above the axis exactly when the quadratic has no real roots, i.e. a negative discriminant.",
          "diagram": {
            "kind": "discriminantTriad",
            "highlight": [
              "none"
            ],
            "caption": "'Positive for all x' needs Δ < 0 — the upward parabola never reaches the axis.",
            "alt": "Three parabola panels; the Δ<0 panel, where the upward parabola stays entirely above the x-axis, is highlighted."
          }
        },
        {
          "stepNumber": 3,
          "description": "Identify the coefficients.",
          "workingLatex": "a = 1,\\ b = 6,\\ c = k",
          "explanation": "Here the constant term is the unknown $k$, which the condition will constrain.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write the discriminant.",
          "workingLatex": "\\Delta = 6^2 - 4(1)(k) = 36 - 4k",
          "explanation": "Substituting the coefficients into $b^2 - 4ac$ gives $36 - 4k$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Set up the inequality.",
          "workingLatex": "36 - 4k < 0",
          "explanation": "For no real roots the discriminant must be strictly negative.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Rearrange.",
          "workingLatex": "36 < 4k",
          "explanation": "Adding $4k$ to both sides moves it across.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Divide by 4.",
          "workingLatex": "9 < k",
          "explanation": "Dividing both sides by the positive number $4$ preserves the inequality.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Rewrite the inequality.",
          "workingLatex": "k > 9",
          "explanation": "So the condition holds for $k$ greater than $9$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Test a value inside.",
          "workingLatex": "k = 10: \\ \\Delta = 36 - 40 = -4 < 0 \\ \\checkmark",
          "explanation": "At $k = 10$ the discriminant is negative, so the quadratic is always positive — confirming the range.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Test the boundary.",
          "workingLatex": "k = 9: \\ \\Delta = 36 - 36 = 0",
          "explanation": "At $k = 9$ the discriminant is zero, so the parabola just touches the axis and $> 0$ fails at one point; hence $9$ is excluded.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Confirm with completing the square.",
          "workingLatex": "k = 9: \\ x^2 + 6x + 9 = (x + 3)^2 \\ge 0",
          "explanation": "At $k = 9$ the expression is $(x+3)^2$, which is zero at $x = -3$, so it is not strictly positive — consistent with excluding $9$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "State the strict range.",
          "workingLatex": "k > 9",
          "explanation": "Only for $k > 9$ is the quadratic strictly positive for every real $x$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "State the answer.",
          "workingLatex": "k > 9",
          "explanation": "The quadratic is positive for all real $x$ when $k > 9$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\Delta = 36 - 4k < 0 \\Rightarrow k > 9$ (so the parabola never reaches the $x$-axis)."
    }
  },
  {
    "id": "al.y1.pure.inequalities.q024",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Inequalities",
    "subtopicId": "al.y1.pure.inequalities",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "expression",
    "tags": [
      "inequalities",
      "combined",
      "linear and quadratic",
      "intersection of solutions"
    ],
    "questionText": "Find the values of $x$ that satisfy both $x^2 - 4 < 0$ and $2x + 1 > 0$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Solve the quadratic inequality first.",
          "workingLatex": "x^2 - 4 < 0",
          "explanation": "We solve each inequality separately, then combine the solution sets.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Factorise the quadratic.",
          "workingLatex": "(x - 2)(x + 2) < 0",
          "explanation": "The difference of squares factorises, giving critical values $2$ and $-2$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Solve the quadratic inequality.",
          "workingLatex": "-2 < x < 2",
          "explanation": "An upward parabola is below the axis between its roots, so $x^2 - 4 < 0$ gives $-2 < x < 2$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Solve the linear inequality.",
          "workingLatex": "2x + 1 > 0",
          "explanation": "Now we solve the second inequality on its own.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Rearrange.",
          "workingLatex": "2x > -1",
          "explanation": "Subtracting $1$ from both sides gives $2x > -1$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Divide by 2.",
          "workingLatex": "x > -\\tfrac{1}{2}",
          "explanation": "Dividing by the positive number $2$ keeps the inequality sign the same, giving $x > -\\tfrac12$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Set up the overlap.",
          "workingLatex": "-2 < x < 2 \\ \\text{ and } \\ x > -\\tfrac{1}{2}",
          "explanation": "Both conditions must hold at once, so we find where the two solution sets overlap.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Take the more restrictive lower bound.",
          "workingLatex": "x > -\\tfrac{1}{2} \\text{ beats } x > -2",
          "explanation": "Since $-\\tfrac12$ is greater than $-2$, the binding lower limit is $x > -\\tfrac12$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Keep the upper bound.",
          "workingLatex": "x < 2",
          "explanation": "The upper limit $x < 2$ from the quadratic still applies.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Combine into one range.",
          "workingLatex": "-\\tfrac{1}{2} < x < 2",
          "explanation": "The overlap of the two solution sets is $-\\tfrac12 < x < 2$.",
          "diagram": {
            "kind": "intersectionStack",
            "min": -3,
            "max": 3,
            "rows": [
              {
                "label": "x² - 4 < 0",
                "intervals": [
                  {
                    "from": -2,
                    "to": 2,
                    "fromClosed": false,
                    "toClosed": false
                  }
                ]
              },
              {
                "label": "2x + 1 > 0",
                "intervals": [
                  {
                    "from": -1 / 2,
                    "to": null,
                    "fromClosed": false
                  }
                ]
              },
              {
                "label": "both",
                "highlight": true,
                "intervals": [
                  {
                    "from": -1 / 2,
                    "to": 2,
                    "fromClosed": false,
                    "toClosed": false
                  }
                ]
              }
            ],
            "caption": "The answer is where BOTH conditions are shaded: -½ < x < 2.",
            "alt": "Three stacked number lines: -2 to 2 for the quadratic, x greater than -1/2 for the linear, and their overlap from -1/2 to 2 highlighted."
          }
        },
        {
          "stepNumber": 11,
          "description": "Check a value inside.",
          "workingLatex": "x = 0: \\ 0 - 4 = -4 < 0, \\ 2(0) + 1 = 1 > 0 \\ \\checkmark",
          "explanation": "At $x = 0$ both inequalities hold, confirming the overlap is correct.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Check a value outside.",
          "workingLatex": "x = -1: \\ 2(-1) + 1 = -1 \\not> 0",
          "explanation": "At $x = -1$ the linear inequality fails, confirming that region is correctly excluded.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "State the answer.",
          "workingLatex": "-\\tfrac{1}{2} < x < 2",
          "explanation": "The values satisfying both inequalities are $-\\tfrac12 < x < 2$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x^2 - 4 < 0 \\Rightarrow -2 < x < 2$; $2x + 1 > 0 \\Rightarrow x > -\\tfrac{1}{2}$. Overlap: $-\\tfrac{1}{2} < x < 2$."
    }
  },
  {
    "id": "al.y1.pure.inequalities.q025",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Inequalities",
    "subtopicId": "al.y1.pure.inequalities",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "expression",
    "tags": [
      "inequalities",
      "quadratic",
      "leading coefficient",
      "factorising"
    ],
    "questionText": "Solve the inequality $3x^2 - 5x - 2 \\le 0$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Factorise the quadratic.",
          "workingLatex": "3x^2 - 5x - 2 = (3x + 1)(x - 2)",
          "explanation": "Splitting the middle term (using $ac = -6$, with $1$ and $-6$) factorises this quadratic with leading coefficient $3$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find the critical values.",
          "workingLatex": "3x + 1 = 0 \\Rightarrow x = -\\tfrac{1}{3}, \\quad x - 2 = 0 \\Rightarrow x = 2",
          "explanation": "Setting each factor to zero gives the roots $-\\tfrac13$ and $2$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Order the critical values.",
          "workingLatex": "-\\tfrac{1}{3} < 2",
          "explanation": "Placing the roots in order divides the number line into three regions.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Note the shape of the parabola.",
          "workingLatex": "\\text{coefficient of } x^2 = 3 > 0 \\Rightarrow \\text{opens upward}",
          "explanation": "A positive $x^2$ coefficient means the parabola dips below the axis between its roots.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Decide where the curve is on or below the axis.",
          "workingLatex": "\\text{between the roots}",
          "explanation": "For an upward parabola, $\\le 0$ holds at and between the two roots.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Write the solution.",
          "workingLatex": "-\\tfrac{1}{3} \\le x \\le 2",
          "explanation": "The inequality $\\le 0$ holds for $x$ between $-\\tfrac13$ and $2$, including the roots themselves.",
          "diagram": {
            "kind": "parabolaRegion",
            "r1": -1 / 3,
            "r2": 2,
            "opensUp": true,
            "region": "interior",
            "rootsClosed": true,
            "label": "-1/3 ≤ x ≤ 2",
            "caption": "(3x+1)(x-2) ≤ 0: on or below the axis between the roots -⅓ and 2.",
            "alt": "Upward parabola crossing the x-axis at -1/3 and 2, with the region between the roots shaded and the endpoints included as solid points."
          }
        },
        {
          "stepNumber": 7,
          "description": "Express in interval notation.",
          "workingLatex": "x \\in \\left[-\\tfrac{1}{3}, \\, 2\\right]",
          "explanation": "In interval notation the solution is the closed interval from $-\\tfrac13$ to $2$, with both endpoints included.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Test a value inside.",
          "workingLatex": "x = 0: \\ (1)(-2) = -2 \\le 0 \\ \\checkmark",
          "explanation": "At $x = 0$ the product is negative, confirming the inequality holds between the roots.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Test a value to the right.",
          "workingLatex": "x = 3: \\ (10)(1) = 10 \\not\\le 0",
          "explanation": "At $x = 3$ the product is positive, confirming the inequality fails to the right of the roots.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Test a value to the left.",
          "workingLatex": "x = -1: \\ (-2)(-3) = 6 \\not\\le 0",
          "explanation": "At $x = -1$ the product is positive, confirming the inequality fails to the left of the roots.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Confirm the boundaries are included.",
          "workingLatex": "\\text{non-strict } \\le 0 \\Rightarrow \\text{roots included}",
          "explanation": "Because the inequality allows equality, the roots $-\\tfrac13$ and $2$ (where the value is zero) are part of the solution.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Summarise the sign pattern.",
          "workingLatex": "+ \\ | \\ - \\ | \\ + \\quad \\text{at } -\\tfrac{1}{3}, 2",
          "explanation": "The parabola is positive outside the roots and negative between them, so $\\le 0$ picks out the middle region.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "State the answer.",
          "workingLatex": "-\\tfrac{1}{3} \\le x \\le 2",
          "explanation": "The solution is $-\\tfrac13 \\le x \\le 2$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$(3x+1)(x-2) \\le 0 \\Rightarrow -\\tfrac{1}{3} \\le x \\le 2$ (between the roots)."
    }
  },
  {
    "id": "al.y1.pure.inequalities.q026",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Inequalities",
    "subtopicId": "al.y1.pure.inequalities",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": [
      "inequalities",
      "linear"
    ],
    "questionText": "Solve the inequality $5x + 3 > 18$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Aim to isolate x.",
          "workingLatex": "5x + 3 > 18",
          "explanation": "We isolate the term in $x$, keeping the inequality sign as we work.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Subtract 3 from both sides.",
          "workingLatex": "5x > 15",
          "explanation": "Subtracting $3$ from both sides does not change the inequality direction.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Divide both sides by 5.",
          "workingLatex": "x > 3",
          "explanation": "Dividing by the positive number $5$ keeps the inequality sign the same way round.",
          "diagram": {
            "kind": "numberLineRay",
            "min": -2,
            "max": 8,
            "endpoint": 3,
            "direction": "right",
            "closed": false,
            "label": "x > 3",
            "caption": "Open circle at 3 — 3 is not included; shade to the right.",
            "alt": "Number line with an open circle at 3 and the region to its right shaded."
          }
        },
        {
          "stepNumber": 4,
          "description": "Interpret the solution.",
          "workingLatex": "x > 3",
          "explanation": "Any value of $x$ greater than $3$ satisfies the inequality.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check a test value.",
          "workingLatex": "x = 4: \\ 5(4) + 3 = 23 > 18 \\ \\checkmark",
          "explanation": "Substituting $x = 4$ gives $23 > 18$, which is true, confirming the solution.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the answer.",
          "workingLatex": "x > 3",
          "explanation": "The solution to the inequality is $x > 3$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$5x + 3 > 18 \\Rightarrow 5x > 15 \\Rightarrow x > 3$"
    }
  },
  {
    "id": "al.y1.pure.inequalities.q027",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Inequalities",
    "subtopicId": "al.y1.pure.inequalities",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": [
      "inequalities",
      "linear"
    ],
    "questionText": "Solve the inequality $3x - 7 \\le 5$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Aim to isolate x.",
          "workingLatex": "3x - 7 \\le 5",
          "explanation": "We isolate the term in $x$, keeping the inequality sign as we work.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Add 7 to both sides.",
          "workingLatex": "3x \\le 12",
          "explanation": "Adding $7$ to both sides isolates the $x$ term without changing the inequality direction.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Divide both sides by 3.",
          "workingLatex": "x \\le 4",
          "explanation": "Dividing by the positive number $3$ keeps the inequality sign the same way round.",
          "diagram": {
            "kind": "numberLineRay",
            "min": -1,
            "max": 9,
            "endpoint": 4,
            "direction": "left",
            "closed": true,
            "label": "x ≤ 4",
            "caption": "Solid circle at 4 — 4 is included; shade to the left.",
            "alt": "Number line with a solid circle at 4 and the region to its left shaded."
          }
        },
        {
          "stepNumber": 4,
          "description": "Interpret the solution.",
          "workingLatex": "x \\le 4",
          "explanation": "Any value of $x$ at most $4$ satisfies the inequality.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check the boundary value.",
          "workingLatex": "x = 4: \\ 3(4) - 7 = 5 \\le 5 \\ \\checkmark",
          "explanation": "Substituting the boundary $x = 4$ gives $5 \\le 5$, which is true, confirming the solution.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the answer.",
          "workingLatex": "x \\le 4",
          "explanation": "The solution is $x \\le 4$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$3x - 7 \\le 5 \\Rightarrow 3x \\le 12 \\Rightarrow x \\le 4$"
    }
  },
  {
    "id": "al.y1.pure.inequalities.q028",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Inequalities",
    "subtopicId": "al.y1.pure.inequalities",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": [
      "inequalities",
      "linear",
      "brackets"
    ],
    "questionText": "Solve the inequality $2(x + 1) < 10$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Expand the bracket.",
          "workingLatex": "2x + 2 < 10",
          "explanation": "Multiplying out the bracket gives a simpler linear inequality.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Subtract 2 from both sides.",
          "workingLatex": "2x < 8",
          "explanation": "Subtracting $2$ isolates the $x$ term without changing the inequality direction.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Divide both sides by 2.",
          "workingLatex": "x < 4",
          "explanation": "Dividing by the positive number $2$ keeps the inequality sign the same way round.",
          "diagram": {
            "kind": "numberLineRay",
            "min": -1,
            "max": 9,
            "endpoint": 4,
            "direction": "left",
            "closed": false,
            "label": "x < 4",
            "caption": "Open circle at 4 — 4 is not included; shade to the left.",
            "alt": "Number line with an open circle at 4 and the region to its left shaded."
          }
        },
        {
          "stepNumber": 4,
          "description": "Interpret the solution.",
          "workingLatex": "x < 4",
          "explanation": "Any value of $x$ less than $4$ satisfies the inequality.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check a test value.",
          "workingLatex": "x = 3: \\ 2(3 + 1) = 8 < 10 \\ \\checkmark",
          "explanation": "Substituting $x = 3$ gives $8 < 10$, which is true, confirming the solution.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the answer.",
          "workingLatex": "x < 4",
          "explanation": "The solution to the inequality is $x < 4$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$2(x + 1) < 10 \\Rightarrow 2x + 2 < 10 \\Rightarrow x < 4$"
    }
  },
  {
    "id": "al.y1.pure.inequalities.q029",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Inequalities",
    "subtopicId": "al.y1.pure.inequalities",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": [
      "inequalities",
      "linear"
    ],
    "questionText": "Solve the inequality $6x - 5 \\ge 7$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Aim to isolate x.",
          "workingLatex": "6x - 5 \\ge 7",
          "explanation": "We isolate the term in $x$, keeping the inequality sign as we work.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Add 5 to both sides.",
          "workingLatex": "6x \\ge 12",
          "explanation": "Adding $5$ to both sides isolates the $x$ term without changing the inequality direction.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Divide both sides by 6.",
          "workingLatex": "x \\ge 2",
          "explanation": "Dividing by the positive number $6$ keeps the inequality sign the same way round.",
          "diagram": {
            "kind": "numberLineRay",
            "min": -3,
            "max": 7,
            "endpoint": 2,
            "direction": "right",
            "closed": true,
            "label": "x ≥ 2",
            "caption": "Solid circle at 2 — 2 is included, then everything to its right.",
            "alt": "Number line with a solid circle at 2 and the region to its right shaded."
          }
        },
        {
          "stepNumber": 4,
          "description": "Interpret the solution.",
          "workingLatex": "x \\ge 2",
          "explanation": "Any value of $x$ at least $2$ satisfies the inequality.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check a test value.",
          "workingLatex": "x = 3: \\ 6(3) - 5 = 13 \\ge 7 \\ \\checkmark",
          "explanation": "Substituting $x = 3$ gives $13 \\ge 7$, which is true, confirming the solution.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the answer.",
          "workingLatex": "x \\ge 2",
          "explanation": "The solution is $x \\ge 2$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$6x - 5 \\ge 7 \\Rightarrow 6x \\ge 12 \\Rightarrow x \\ge 2$"
    }
  },
  {
    "id": "al.y1.pure.inequalities.q030",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Inequalities",
    "subtopicId": "al.y1.pure.inequalities",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": [
      "inequalities",
      "linear",
      "variable both sides"
    ],
    "questionText": "Solve the inequality $4x + 9 < x + 21$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Collect the x terms on one side.",
          "workingLatex": "4x - x + 9 < 21",
          "explanation": "Subtracting $x$ from both sides gathers the variable terms together.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Simplify.",
          "workingLatex": "3x + 9 < 21",
          "explanation": "Combining $4x - x$ gives $3x$, leaving $3x + 9 < 21$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Subtract 9 from both sides.",
          "workingLatex": "3x < 12",
          "explanation": "Subtracting $9$ isolates the term in $x$ without changing the inequality direction.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Divide both sides by 3.",
          "workingLatex": "x < 4",
          "explanation": "Dividing by the positive number $3$ keeps the inequality sign the same way round.",
          "diagram": {
            "kind": "numberLineRay",
            "min": -1,
            "max": 9,
            "endpoint": 4,
            "direction": "left",
            "closed": false,
            "label": "x < 4",
            "caption": "Open circle at 4 — 4 is not included, then everything to its left.",
            "alt": "Number line with an open circle at 4 and the region to its left shaded."
          }
        },
        {
          "stepNumber": 5,
          "description": "Check a test value.",
          "workingLatex": "x = 3: \\ 4(3) + 9 = 21 < 3 + 21 = 24 \\ \\checkmark",
          "explanation": "Substituting $x = 3$ gives $21 < 24$, which is true, confirming the solution.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the answer.",
          "workingLatex": "x < 4",
          "explanation": "The solution to the inequality is $x < 4$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$4x + 9 < x + 21 \\Rightarrow 3x < 12 \\Rightarrow x < 4$"
    }
  },
  {
    "id": "al.y1.pure.inequalities.q031",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Inequalities",
    "subtopicId": "al.y1.pure.inequalities",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": [
      "inequalities",
      "linear",
      "fractions"
    ],
    "questionText": "Solve the inequality $\\dfrac{x}{3} - 2 > 1$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Add 2 to both sides.",
          "workingLatex": "\\dfrac{x}{3} > 3",
          "explanation": "Removing the constant first isolates the fraction, keeping the inequality direction the same.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Multiply both sides by 3.",
          "workingLatex": "x > 9",
          "explanation": "Multiplying by the positive number $3$ clears the fraction and keeps the inequality sign the same way round.",
          "diagram": {
            "kind": "numberLineRay",
            "min": 4,
            "max": 14,
            "endpoint": 9,
            "direction": "right",
            "closed": false,
            "label": "x > 9",
            "caption": "Open circle at 9 — 9 is not included, then everything to its right.",
            "alt": "Number line with an open circle at 9 and the region to its right shaded."
          }
        },
        {
          "stepNumber": 3,
          "description": "Interpret the solution.",
          "workingLatex": "x > 9",
          "explanation": "Any value of $x$ greater than $9$ satisfies the inequality.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Check a test value.",
          "workingLatex": "x = 12: \\ \\tfrac{12}{3} - 2 = 2 > 1 \\ \\checkmark",
          "explanation": "Substituting $x = 12$ gives $2 > 1$, which is true, confirming the solution.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check the boundary is excluded.",
          "workingLatex": "x = 9: \\ \\tfrac{9}{3} - 2 = 1 \\not> 1",
          "explanation": "At $x = 9$ the expression equals $1$, which is not greater than $1$, so the boundary is correctly excluded.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the answer.",
          "workingLatex": "x > 9",
          "explanation": "The solution to the inequality is $x > 9$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{x}{3} - 2 > 1 \\Rightarrow \\dfrac{x}{3} > 3 \\Rightarrow x > 9$"
    }
  },
  {
    "id": "al.y1.pure.inequalities.q032",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Inequalities",
    "subtopicId": "al.y1.pure.inequalities",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": [
      "inequalities",
      "linear",
      "variable both sides"
    ],
    "questionText": "Solve the inequality $7x + 2 \\le 3x + 18$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Collect the x terms on one side.",
          "workingLatex": "7x - 3x + 2 \\le 18",
          "explanation": "Subtracting $3x$ from both sides gathers the variable terms on the left.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Simplify.",
          "workingLatex": "4x + 2 \\le 18",
          "explanation": "Combining $7x - 3x$ gives $4x$, leaving $4x + 2 \\le 18$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Subtract 2 from both sides.",
          "workingLatex": "4x \\le 16",
          "explanation": "Subtracting $2$ isolates the term in $x$ without changing the inequality direction.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Divide both sides by 4.",
          "workingLatex": "x \\le 4",
          "explanation": "Dividing by the positive number $4$ keeps the inequality sign the same way round.",
          "diagram": {
            "kind": "numberLineRay",
            "min": -1,
            "max": 9,
            "endpoint": 4,
            "direction": "left",
            "closed": true,
            "label": "x ≤ 4",
            "caption": "Solid circle at 4 — 4 is included, then everything to its left.",
            "alt": "Number line with a solid circle at 4 and the region to its left shaded."
          }
        },
        {
          "stepNumber": 5,
          "description": "Check a test value.",
          "workingLatex": "x = 4: \\ 7(4) + 2 = 30 \\le 3(4) + 18 = 30 \\ \\checkmark",
          "explanation": "Substituting the boundary $x = 4$ gives $30 \\le 30$, which is true, confirming the solution.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the answer.",
          "workingLatex": "x \\le 4",
          "explanation": "The solution is $x \\le 4$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$7x + 2 \\le 3x + 18 \\Rightarrow 4x \\le 16 \\Rightarrow x \\le 4$"
    }
  },
  {
    "id": "al.y1.pure.inequalities.q033",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Inequalities",
    "subtopicId": "al.y1.pure.inequalities",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": [
      "inequalities",
      "linear",
      "variable both sides"
    ],
    "questionText": "Solve the inequality $2x - 1 > x + 2$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Collect the x terms on one side.",
          "workingLatex": "2x - x - 1 > 2",
          "explanation": "Subtracting $x$ from both sides gathers the variable terms together.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Simplify.",
          "workingLatex": "x - 1 > 2",
          "explanation": "Combining $2x - x$ gives $x$, leaving $x - 1 > 2$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Add 1 to both sides.",
          "workingLatex": "x > 3",
          "explanation": "Adding $1$ isolates $x$ without changing the inequality direction.",
          "diagram": {
            "kind": "numberLineRay",
            "min": -2,
            "max": 8,
            "endpoint": 3,
            "direction": "right",
            "closed": false,
            "label": "x > 3",
            "caption": "Open circle at 3 — 3 is not included, then everything to its right.",
            "alt": "Number line with an open circle at 3 and the region to its right shaded."
          }
        },
        {
          "stepNumber": 4,
          "description": "Interpret the solution.",
          "workingLatex": "x > 3",
          "explanation": "Any value of $x$ greater than $3$ satisfies the inequality.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check a test value.",
          "workingLatex": "x = 4: \\ 2(4) - 1 = 7 > 4 + 2 = 6 \\ \\checkmark",
          "explanation": "Substituting $x = 4$ gives $7 > 6$, which is true, confirming the solution.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the answer.",
          "workingLatex": "x > 3",
          "explanation": "The solution to the inequality is $x > 3$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$2x - 1 > x + 2 \\Rightarrow x > 3$"
    }
  },
  {
    "id": "al.y1.pure.inequalities.q034",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Inequalities",
    "subtopicId": "al.y1.pure.inequalities",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "expression",
    "tags": [
      "inequalities",
      "linear",
      "dividing by negative"
    ],
    "questionText": "Solve the inequality $-2x \\le 10$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Note the coefficient of x is negative.",
          "workingLatex": "-2x \\le 10",
          "explanation": "Dividing an inequality by a negative number reverses the inequality sign — the key idea here.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Prepare to divide by -2.",
          "workingLatex": "\\text{divide by } -2 \\Rightarrow \\text{reverse the sign}",
          "explanation": "We flag the sign reversal before dividing so we do not forget it.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Divide and reverse the sign.",
          "workingLatex": "x \\ge -5",
          "explanation": "Dividing both sides by $-2$ and flipping $\\le$ to $\\ge$ gives $x \\ge -5$.",
          "diagram": {
            "kind": "signFlipMirror",
            "min": -10,
            "max": 0,
            "beforeEndpoint": -5,
            "beforeDirection": "left",
            "beforeClosed": true,
            "beforeLabel": "-2x ≤ 10",
            "afterEndpoint": -5,
            "afterDirection": "right",
            "afterClosed": true,
            "afterLabel": "x ≥ -5",
            "caption": "Dividing by -2 reflects the line — ≤ flips to ≥.",
            "alt": "Two number lines at -5: the top shaded left for the un-flipped sign, the bottom shaded right for the correct answer x ≥ -5."
          }
        },
        {
          "stepNumber": 4,
          "description": "Interpret the solution.",
          "workingLatex": "x \\ge -5",
          "explanation": "Any value of $x$ at least $-5$ satisfies the inequality.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check a test value.",
          "workingLatex": "x = 0: \\ -2(0) = 0 \\le 10 \\ \\checkmark",
          "explanation": "Substituting $x = 0$ (which is at least $-5$) gives $0 \\le 10$, confirming the solution.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check a value outside.",
          "workingLatex": "x = -6: \\ -2(-6) = 12 \\not\\le 10",
          "explanation": "Testing $x = -6$ gives $12 \\le 10$, which is false, confirming values below $-5$ do not work.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check the boundary.",
          "workingLatex": "x = -5: \\ -2(-5) = 10 \\le 10 \\ \\checkmark",
          "explanation": "At $x = -5$ the value is $10$, satisfying $\\le 10$, so the boundary is included.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Express in set notation.",
          "workingLatex": "\\{x : x \\ge -5\\}",
          "explanation": "In set notation the solution is the set of all real $x$ that are at least $-5$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the answer.",
          "workingLatex": "x \\ge -5",
          "explanation": "The solution is $x \\ge -5$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$-2x \\le 10 \\Rightarrow x \\ge -5$ (dividing by $-2$ reverses the inequality)."
    }
  },
  {
    "id": "al.y1.pure.inequalities.q035",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Inequalities",
    "subtopicId": "al.y1.pure.inequalities",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "expression",
    "tags": [
      "inequalities",
      "linear",
      "dividing by negative"
    ],
    "questionText": "Solve the inequality $4 - 5x > -6$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Isolate the term in x.",
          "workingLatex": "-5x > -6 - 4",
          "explanation": "Subtracting $4$ from both sides moves the constant across.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Simplify.",
          "workingLatex": "-5x > -10",
          "explanation": "Combining $-6 - 4$ gives $-10$, so we have $-5x > -10$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Prepare to divide by a negative.",
          "workingLatex": "\\text{divide by } -5 \\Rightarrow \\text{reverse the sign}",
          "explanation": "Dividing by the negative number $-5$ will reverse the inequality direction.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Divide and reverse the sign.",
          "workingLatex": "x < 2",
          "explanation": "Dividing both sides by $-5$ and flipping $>$ to $<$ gives $x < 2$.",
          "diagram": {
            "kind": "signFlipMirror",
            "min": -3,
            "max": 7,
            "beforeEndpoint": 2,
            "beforeDirection": "right",
            "beforeClosed": false,
            "beforeLabel": "-5x > -10",
            "afterEndpoint": 2,
            "afterDirection": "left",
            "afterClosed": false,
            "afterLabel": "x < 2",
            "caption": "Dividing by -5 reflects the line — > flips to <.",
            "alt": "Two number lines at 2: the top shaded right for the un-flipped sign, the bottom shaded left for the correct answer x < 2."
          }
        },
        {
          "stepNumber": 5,
          "description": "Interpret the solution.",
          "workingLatex": "x < 2",
          "explanation": "Any value of $x$ less than $2$ satisfies the inequality.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check a test value.",
          "workingLatex": "x = 0: \\ 4 - 5(0) = 4 > -6 \\ \\checkmark",
          "explanation": "Substituting $x = 0$ gives $4 > -6$, which is true, confirming the solution.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check a value outside.",
          "workingLatex": "x = 3: \\ 4 - 5(3) = -11 \\not> -6",
          "explanation": "Testing $x = 3$ gives $-11 > -6$, which is false, confirming values above $2$ do not work.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Express in set notation.",
          "workingLatex": "\\{x : x < 2\\}",
          "explanation": "In set notation the solution is the set of all real $x$ that are less than $2$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the answer.",
          "workingLatex": "x < 2",
          "explanation": "The solution to the inequality is $x < 2$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$4 - 5x > -6 \\Rightarrow -5x > -10 \\Rightarrow x < 2$ (dividing by $-5$ reverses the inequality)."
    }
  },
  {
    "id": "al.y1.pure.inequalities.q036",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Inequalities",
    "subtopicId": "al.y1.pure.inequalities",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "expression",
    "tags": [
      "inequalities",
      "linear",
      "dividing by negative"
    ],
    "questionText": "Solve the inequality $3 - x \\ge -2$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Isolate the term in x.",
          "workingLatex": "-x \\ge -2 - 3",
          "explanation": "Subtracting $3$ from both sides moves the constant across.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Simplify.",
          "workingLatex": "-x \\ge -5",
          "explanation": "Combining $-2 - 3$ gives $-5$, so we have $-x \\ge -5$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Prepare to multiply by a negative.",
          "workingLatex": "\\text{multiply by } -1 \\Rightarrow \\text{reverse the sign}",
          "explanation": "Multiplying by $-1$ to make $x$ positive will reverse the inequality direction.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Multiply and reverse the sign.",
          "workingLatex": "x \\le 5",
          "explanation": "Multiplying both sides by $-1$ and flipping $\\ge$ to $\\le$ gives $x \\le 5$.",
          "diagram": {
            "kind": "signFlipMirror",
            "min": 0,
            "max": 10,
            "beforeEndpoint": 5,
            "beforeDirection": "right",
            "beforeClosed": true,
            "beforeLabel": "-x ≥ -5",
            "afterEndpoint": 5,
            "afterDirection": "left",
            "afterClosed": true,
            "afterLabel": "x ≤ 5",
            "caption": "Multiplying by -1 reflects the line — ≥ flips to ≤.",
            "alt": "Two number lines at 5: the top shaded right for the un-flipped sign, the bottom shaded left for the correct answer x ≤ 5."
          }
        },
        {
          "stepNumber": 5,
          "description": "Interpret the solution.",
          "workingLatex": "x \\le 5",
          "explanation": "Any value of $x$ at most $5$ satisfies the inequality.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check the boundary value.",
          "workingLatex": "x = 5: \\ 3 - 5 = -2 \\ge -2 \\ \\checkmark",
          "explanation": "Substituting $x = 5$ gives $-2 \\ge -2$, which is true, confirming the boundary is included.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check a value outside.",
          "workingLatex": "x = 6: \\ 3 - 6 = -3 \\not\\ge -2",
          "explanation": "Testing $x = 6$ gives $-3 \\ge -2$, which is false, confirming values above $5$ do not work.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Express in set notation.",
          "workingLatex": "\\{x : x \\le 5\\}",
          "explanation": "In set notation the solution is the set of all real $x$ that are at most $5$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the answer.",
          "workingLatex": "x \\le 5",
          "explanation": "The solution is $x \\le 5$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$3 - x \\ge -2 \\Rightarrow -x \\ge -5 \\Rightarrow x \\le 5$ (multiplying by $-1$ reverses the inequality)."
    }
  },
  {
    "id": "al.y1.pure.inequalities.q037",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Inequalities",
    "subtopicId": "al.y1.pure.inequalities",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "expression",
    "tags": [
      "inequalities",
      "linear",
      "double inequality"
    ],
    "questionText": "Solve the inequality $-4 \\le 2x + 2 < 8$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recognise a double inequality.",
          "workingLatex": "-4 \\le 2x + 2 < 8",
          "explanation": "This says $2x + 2$ lies between $-4$ and $8$; we operate on all three parts together.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Subtract 2 from all three parts.",
          "workingLatex": "-4 - 2 \\le 2x < 8 - 2",
          "explanation": "Subtracting $2$ throughout keeps the chain of inequalities balanced.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Simplify.",
          "workingLatex": "-6 \\le 2x < 6",
          "explanation": "Working out the outer values gives $-6 \\le 2x < 6$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Divide all three parts by 2.",
          "workingLatex": "-3 \\le x < 3",
          "explanation": "Dividing by the positive number $2$ throughout keeps both inequality signs the same way round.",
          "diagram": {
            "kind": "numberLineInterval",
            "min": -6,
            "max": 6,
            "lower": -3,
            "upper": 3,
            "lowerClosed": true,
            "upperClosed": false,
            "label": "-3 ≤ x < 3",
            "caption": "-3 included (solid), 3 excluded (hollow).",
            "alt": "Number line with a solid circle at -3, an open circle at 3, and the region between them shaded."
          }
        },
        {
          "stepNumber": 5,
          "description": "Interpret the solution.",
          "workingLatex": "-3 \\le x < 3",
          "explanation": "The solution is all $x$ between $-3$ (included) and $3$ (excluded).",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check a value inside.",
          "workingLatex": "x = 0: \\ 2(0) + 2 = 2, \\ -4 \\le 2 < 8 \\ \\checkmark",
          "explanation": "Substituting $x = 0$ gives $2$, which lies in the required range, confirming the solution.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check the lower boundary.",
          "workingLatex": "x = -3: \\ 2(-3) + 2 = -4 \\ge -4 \\ \\checkmark",
          "explanation": "At $x = -3$ the value is $-4$, which satisfies $\\ge -4$, so $-3$ is correctly included.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check the upper boundary.",
          "workingLatex": "x = 3: \\ 2(3) + 2 = 8, \\ 8 < 8 \\text{ is false}",
          "explanation": "At $x = 3$ the value is $8$, which is not strictly less than $8$, so $3$ is correctly excluded.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the answer.",
          "workingLatex": "-3 \\le x < 3",
          "explanation": "The solution is $-3 \\le x < 3$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$-4 \\le 2x + 2 < 8 \\Rightarrow -6 \\le 2x < 6 \\Rightarrow -3 \\le x < 3$"
    }
  },
  {
    "id": "al.y1.pure.inequalities.q038",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Inequalities",
    "subtopicId": "al.y1.pure.inequalities",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "expression",
    "tags": [
      "inequalities",
      "linear",
      "double inequality"
    ],
    "questionText": "Solve the inequality $2 \\le 4x - 6 < 14$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recognise a double inequality.",
          "workingLatex": "2 \\le 4x - 6 < 14",
          "explanation": "This says $4x - 6$ lies between $2$ and $14$; we operate on all three parts together.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Add 6 to all three parts.",
          "workingLatex": "2 + 6 \\le 4x < 14 + 6",
          "explanation": "Adding $6$ throughout keeps the chain of inequalities balanced.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Simplify.",
          "workingLatex": "8 \\le 4x < 20",
          "explanation": "Working out the outer values gives $8 \\le 4x < 20$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Divide all three parts by 4.",
          "workingLatex": "2 \\le x < 5",
          "explanation": "Dividing by the positive number $4$ throughout keeps both inequality signs the same way round.",
          "diagram": {
            "kind": "numberLineInterval",
            "min": -2,
            "max": 9,
            "lower": 2,
            "upper": 5,
            "lowerClosed": true,
            "upperClosed": false,
            "label": "2 ≤ x < 5",
            "caption": "2 included (solid), 5 excluded (hollow).",
            "alt": "Number line with a solid circle at 2, an open circle at 5, and the region between them shaded."
          }
        },
        {
          "stepNumber": 5,
          "description": "Interpret the solution.",
          "workingLatex": "2 \\le x < 5",
          "explanation": "The solution is all $x$ between $2$ (included) and $5$ (excluded).",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check a value inside.",
          "workingLatex": "x = 3: \\ 4(3) - 6 = 6, \\ 2 \\le 6 < 14 \\ \\checkmark",
          "explanation": "Substituting $x = 3$ gives $6$, which lies in the required range, confirming the solution.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check the lower boundary.",
          "workingLatex": "x = 2: \\ 4(2) - 6 = 2 \\ge 2 \\ \\checkmark",
          "explanation": "At $x = 2$ the value is $2$, which satisfies $\\ge 2$, so $2$ is correctly included.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check the upper boundary.",
          "workingLatex": "x = 5: \\ 4(5) - 6 = 14, \\ 14 < 14 \\text{ is false}",
          "explanation": "At $x = 5$ the value is $14$, which is not strictly less than $14$, so $5$ is correctly excluded.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the answer.",
          "workingLatex": "2 \\le x < 5",
          "explanation": "The solution is $2 \\le x < 5$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$2 \\le 4x - 6 < 14 \\Rightarrow 8 \\le 4x < 20 \\Rightarrow 2 \\le x < 5$"
    }
  },
  {
    "id": "al.y1.pure.inequalities.q039",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Inequalities",
    "subtopicId": "al.y1.pure.inequalities",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "expression",
    "tags": [
      "inequalities",
      "quadratic",
      "factorising"
    ],
    "questionText": "Solve the inequality $x^2 + 2x - 3 < 0$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Factorise the quadratic.",
          "workingLatex": "x^2 + 2x - 3 = (x + 3)(x - 1)",
          "explanation": "Factorising finds the critical values where the expression equals zero.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find the critical values.",
          "workingLatex": "x = -3 \\ \\text{ and } \\ x = 1",
          "explanation": "Setting each factor to zero gives the roots $-3$ and $1$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Note the shape of the parabola.",
          "workingLatex": "\\text{opens upward}",
          "explanation": "The positive $x^2$ coefficient means the parabola dips below the axis between its roots.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Decide where the curve is below the axis.",
          "workingLatex": "\\text{between the roots}",
          "explanation": "For an upward parabola, $y < 0$ strictly between the two roots.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Write the solution.",
          "workingLatex": "-3 < x < 1",
          "explanation": "The inequality $< 0$ holds for $x$ strictly between $-3$ and $1$.",
          "diagram": {
            "kind": "parabolaRegion",
            "r1": -3,
            "r2": 1,
            "opensUp": true,
            "region": "interior",
            "rootsClosed": false,
            "label": "-3 < x < 1",
            "caption": "x² + 2x - 3 < 0: below the axis between the roots.",
            "alt": "Upward parabola crossing the x-axis at -3 and 1, with the region between the roots (below the axis) shaded."
          }
        },
        {
          "stepNumber": 6,
          "description": "Express in set notation.",
          "workingLatex": "\\{x : -3 < x < 1\\}",
          "explanation": "In set notation the solution is the set of $x$ with $-3 < x < 1$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check a value inside.",
          "workingLatex": "x = 0: \\ (3)(-1) = -3 < 0 \\ \\checkmark",
          "explanation": "At $x = 0$ the product is negative, confirming the inequality holds between the roots.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check a value outside.",
          "workingLatex": "x = 2: \\ (5)(1) = 5 \\not< 0",
          "explanation": "At $x = 2$ the product is positive, confirming the inequality fails outside the roots.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the answer.",
          "workingLatex": "-3 < x < 1",
          "explanation": "The solution is $-3 < x < 1$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$(x+3)(x-1) < 0 \\Rightarrow -3 < x < 1$ (below the axis between the roots)."
    }
  },
  {
    "id": "al.y1.pure.inequalities.q040",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Inequalities",
    "subtopicId": "al.y1.pure.inequalities",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "expression",
    "tags": [
      "inequalities",
      "quadratic",
      "factorising"
    ],
    "questionText": "Solve the inequality $x^2 - 7x + 12 > 0$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Factorise the quadratic.",
          "workingLatex": "x^2 - 7x + 12 = (x - 3)(x - 4)",
          "explanation": "Factorising finds the critical values where the expression equals zero.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find the critical values.",
          "workingLatex": "x = 3 \\ \\text{ and } \\ x = 4",
          "explanation": "Setting each factor to zero gives the roots $3$ and $4$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Note the shape of the parabola.",
          "workingLatex": "\\text{opens upward}",
          "explanation": "The positive $x^2$ coefficient means the parabola lies above the axis outside its roots.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Decide where the curve is above the axis.",
          "workingLatex": "\\text{outside the roots}",
          "explanation": "For an upward parabola, $y > 0$ strictly outside the two roots.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Write the solution.",
          "workingLatex": "x < 3 \\ \\text{ or } \\ x > 4",
          "explanation": "The inequality $> 0$ holds for $x$ less than $3$ or greater than $4$.",
          "diagram": {
            "kind": "parabolaRegion",
            "r1": 3,
            "r2": 4,
            "opensUp": true,
            "region": "exterior",
            "rootsClosed": false,
            "label": "x < 3 or x > 4",
            "caption": "x² - 7x + 12 > 0: above the axis outside the roots.",
            "alt": "Upward parabola crossing the x-axis at 3 and 4, with the two regions outside the roots (above the axis) shaded."
          }
        },
        {
          "stepNumber": 6,
          "description": "Express in set notation.",
          "workingLatex": "\\{x : x < 3\\} \\cup \\{x : x > 4\\}",
          "explanation": "The solution is the union of the two outer regions, with the roots excluded.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check a value between the roots.",
          "workingLatex": "x = \\tfrac{7}{2}: \\ (\\tfrac{1}{2})(-\\tfrac{1}{2}) = -\\tfrac{1}{4} \\not> 0",
          "explanation": "At $x = \\tfrac{7}{2}$ the product is negative, confirming the inequality fails between the roots.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check a value outside.",
          "workingLatex": "x = 5: \\ (2)(1) = 2 > 0 \\ \\checkmark",
          "explanation": "At $x = 5$ the product is positive, confirming the inequality holds outside the roots.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the answer.",
          "workingLatex": "x < 3 \\ \\text{ or } \\ x > 4",
          "explanation": "The solution is $x < 3$ or $x > 4$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$(x-3)(x-4) > 0 \\Rightarrow x < 3 \\text{ or } x > 4$ (outside the roots)."
    }
  },
  {
    "id": "al.y1.pure.inequalities.q041",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Inequalities",
    "subtopicId": "al.y1.pure.inequalities",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "expression",
    "tags": [
      "inequalities",
      "quadratic",
      "difference of squares"
    ],
    "questionText": "Solve the inequality $x^2 - 25 \\le 0$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Factorise the difference of squares.",
          "workingLatex": "x^2 - 25 = (x - 5)(x + 5)",
          "explanation": "Since $25 = 5^2$, the expression factorises as a difference of two squares.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find the critical values.",
          "workingLatex": "x = 5 \\ \\text{ and } \\ x = -5",
          "explanation": "Setting each factor to zero gives the roots $5$ and $-5$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Note the shape of the parabola.",
          "workingLatex": "\\text{opens upward}",
          "explanation": "The positive $x^2$ coefficient means the parabola dips below the axis between its roots.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Decide where the curve is on or below the axis.",
          "workingLatex": "\\text{between the roots}",
          "explanation": "For an upward parabola, $\\le 0$ holds at and between the two roots.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Write the solution.",
          "workingLatex": "-5 \\le x \\le 5",
          "explanation": "The inequality $\\le 0$ holds for $x$ between $-5$ and $5$, including the boundary values.",
          "diagram": {
            "kind": "parabolaRegion",
            "r1": -5,
            "r2": 5,
            "opensUp": true,
            "region": "interior",
            "rootsClosed": true,
            "label": "-5 ≤ x ≤ 5",
            "caption": "x² - 25 ≤ 0: on or below the axis between the roots.",
            "alt": "Upward parabola crossing the x-axis at -5 and 5, with the region between the roots (below the axis) shaded and the roots included."
          }
        },
        {
          "stepNumber": 6,
          "description": "Express in interval notation.",
          "workingLatex": "x \\in [-5, 5]",
          "explanation": "In interval notation the solution is the closed interval from $-5$ to $5$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check a value inside.",
          "workingLatex": "x = 0: \\ 0 - 25 = -25 \\le 0 \\ \\checkmark",
          "explanation": "At $x = 0$ the value is negative, confirming the inequality holds between the roots.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check a value outside.",
          "workingLatex": "x = 6: \\ 36 - 25 = 11 \\not\\le 0",
          "explanation": "At $x = 6$ the value is positive, confirming the inequality fails outside the roots.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the answer.",
          "workingLatex": "-5 \\le x \\le 5",
          "explanation": "The solution is $-5 \\le x \\le 5$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$(x-5)(x+5) \\le 0 \\Rightarrow -5 \\le x \\le 5$ (between the roots)."
    }
  },
  {
    "id": "al.y1.pure.inequalities.q042",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Inequalities",
    "subtopicId": "al.y1.pure.inequalities",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "expression",
    "tags": [
      "inequalities",
      "quadratic",
      "common factor"
    ],
    "questionText": "Solve the inequality $x^2 + 3x \\ge 0$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Factorise the quadratic.",
          "workingLatex": "x^2 + 3x = x(x + 3)",
          "explanation": "Both terms share a factor of $x$, so we factorise to find the critical values.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find the critical values.",
          "workingLatex": "x = 0 \\ \\text{ and } \\ x = -3",
          "explanation": "Setting each factor to zero gives the roots $0$ and $-3$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Note the shape of the parabola.",
          "workingLatex": "\\text{opens upward}",
          "explanation": "The positive $x^2$ coefficient means the parabola lies above the axis outside its roots.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Decide where the curve is on or above the axis.",
          "workingLatex": "\\text{outside the roots}",
          "explanation": "For an upward parabola, $\\ge 0$ holds at and outside the two roots.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Write the solution.",
          "workingLatex": "x \\le -3 \\ \\text{ or } \\ x \\ge 0",
          "explanation": "The inequality $\\ge 0$ holds for $x$ at most $-3$ or at least $0$, including the roots.",
          "diagram": {
            "kind": "parabolaRegion",
            "r1": -3,
            "r2": 0,
            "opensUp": true,
            "region": "exterior",
            "rootsClosed": true,
            "label": "x ≤ -3 or x ≥ 0",
            "caption": "x² + 3x ≥ 0: on or above the axis outside the roots.",
            "alt": "Upward parabola crossing the x-axis at -3 and 0, with the two regions outside the roots (above the axis) shaded and the roots included."
          }
        },
        {
          "stepNumber": 6,
          "description": "Express in set notation.",
          "workingLatex": "\\{x : x \\le -3\\} \\cup \\{x : x \\ge 0\\}",
          "explanation": "The solution is the union of the two outer regions, including the boundary values.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check a value between the roots.",
          "workingLatex": "x = -1: \\ (-1)(2) = -2 \\not\\ge 0",
          "explanation": "At $x = -1$ the product is negative, confirming the inequality fails between the roots.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check a value outside.",
          "workingLatex": "x = 1: \\ (1)(4) = 4 \\ge 0 \\ \\checkmark",
          "explanation": "At $x = 1$ the product is positive, confirming the inequality holds outside the roots.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the answer.",
          "workingLatex": "x \\le -3 \\ \\text{ or } \\ x \\ge 0",
          "explanation": "The solution is $x \\le -3$ or $x \\ge 0$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x(x + 3) \\ge 0 \\Rightarrow x \\le -3 \\text{ or } x \\ge 0$ (outside the roots)."
    }
  },
  {
    "id": "al.y1.pure.inequalities.q043",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Inequalities",
    "subtopicId": "al.y1.pure.inequalities",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "expression",
    "tags": [
      "inequalities",
      "quadratic",
      "factorising"
    ],
    "questionText": "Solve the inequality $x^2 + 5x + 4 < 0$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Factorise the quadratic.",
          "workingLatex": "x^2 + 5x + 4 = (x + 1)(x + 4)",
          "explanation": "Factorising finds the critical values where the expression equals zero.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find the critical values.",
          "workingLatex": "x = -1 \\ \\text{ and } \\ x = -4",
          "explanation": "Setting each factor to zero gives the roots $-1$ and $-4$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Note the shape of the parabola.",
          "workingLatex": "\\text{opens upward}",
          "explanation": "The positive $x^2$ coefficient means the parabola dips below the axis between its roots.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Decide where the curve is below the axis.",
          "workingLatex": "\\text{between the roots}",
          "explanation": "For an upward parabola, $y < 0$ strictly between the two roots.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Write the solution.",
          "workingLatex": "-4 < x < -1",
          "explanation": "The inequality $< 0$ holds for $x$ strictly between $-4$ and $-1$.",
          "diagram": {
            "kind": "parabolaRegion",
            "r1": -4,
            "r2": -1,
            "opensUp": true,
            "region": "interior",
            "rootsClosed": false,
            "label": "-4 < x < -1",
            "caption": "x² + 5x + 4 < 0: below the axis between the roots -4 and -1.",
            "alt": "Upward parabola crossing the x-axis at -4 and -1, with the region between the roots (below the axis) shaded and the roots shown as open circles."
          }
        },
        {
          "stepNumber": 6,
          "description": "Express in set notation.",
          "workingLatex": "\\{x : -4 < x < -1\\}",
          "explanation": "In set notation the solution is the set of $x$ with $-4 < x < -1$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check a value inside.",
          "workingLatex": "x = -2: \\ (-1)(2) = -2 < 0 \\ \\checkmark",
          "explanation": "At $x = -2$ the product is negative, confirming the inequality holds between the roots.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check a value outside.",
          "workingLatex": "x = 0: \\ (1)(4) = 4 \\not< 0",
          "explanation": "At $x = 0$ the product is positive, confirming the inequality fails outside the roots.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the answer.",
          "workingLatex": "-4 < x < -1",
          "explanation": "The solution is $-4 < x < -1$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$(x+1)(x+4) < 0 \\Rightarrow -4 < x < -1$ (between the roots)."
    }
  },
  {
    "id": "al.y1.pure.inequalities.q044",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Inequalities",
    "subtopicId": "al.y1.pure.inequalities",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "expression",
    "tags": [
      "inequalities",
      "quadratic",
      "leading coefficient",
      "factorising"
    ],
    "questionText": "Solve the inequality $3x^2 - 7x + 2 \\ge 0$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Factorise the quadratic.",
          "workingLatex": "3x^2 - 7x + 2 = (3x - 1)(x - 2)",
          "explanation": "Splitting the middle term (using $ac = 6$, with $-1$ and $-6$) factorises this quadratic with leading coefficient $3$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find the critical values.",
          "workingLatex": "3x - 1 = 0 \\Rightarrow x = \\tfrac{1}{3}, \\quad x - 2 = 0 \\Rightarrow x = 2",
          "explanation": "Setting each factor to zero gives the roots $\\tfrac13$ and $2$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Order the critical values.",
          "workingLatex": "\\tfrac{1}{3} < 2",
          "explanation": "Placing the roots in order divides the number line into three regions.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Note the shape of the parabola.",
          "workingLatex": "\\text{coefficient of } x^2 = 3 > 0 \\Rightarrow \\text{opens upward}",
          "explanation": "A positive $x^2$ coefficient means the parabola lies above the axis outside its roots.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Decide where the curve is on or above the axis.",
          "workingLatex": "\\text{outside the roots}",
          "explanation": "For an upward parabola, $\\ge 0$ holds at and outside the two roots.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Write the solution.",
          "workingLatex": "x \\le \\tfrac{1}{3} \\ \\text{ or } \\ x \\ge 2",
          "explanation": "The inequality $\\ge 0$ holds for $x$ at most $\\tfrac13$ or at least $2$, including the roots.",
          "diagram": {
            "kind": "parabolaRegion",
            "r1": 1 / 3,
            "r2": 2,
            "opensUp": true,
            "region": "exterior",
            "rootsClosed": true,
            "label": "x ≤ 1/3 or x ≥ 2",
            "caption": "3x² - 7x + 2 ≥ 0: on or above the axis outside the roots 1/3 and 2.",
            "alt": "Upward parabola crossing the x-axis at one third and 2, with the two outer regions (on or above the axis) shaded and the roots shown as solid circles."
          }
        },
        {
          "stepNumber": 7,
          "description": "Express in set notation.",
          "workingLatex": "\\{x : x \\le \\tfrac{1}{3}\\} \\cup \\{x : x \\ge 2\\}",
          "explanation": "The solution is the union of the two outer regions, including the boundary values.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Test the left region.",
          "workingLatex": "x = 0: \\ (-1)(-2) = 2 \\ge 0 \\ \\checkmark",
          "explanation": "At $x = 0$ the product is positive, confirming the inequality holds in the left region.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Test the middle region.",
          "workingLatex": "x = 1: \\ (2)(-1) = -2 \\not\\ge 0",
          "explanation": "At $x = 1$ the product is negative, confirming the inequality fails between the roots.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Test the right region.",
          "workingLatex": "x = 3: \\ (8)(1) = 8 \\ge 0 \\ \\checkmark",
          "explanation": "At $x = 3$ the product is positive, confirming the inequality holds in the right region.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Confirm the boundaries are included.",
          "workingLatex": "\\text{non-strict } \\ge 0 \\Rightarrow \\text{roots included}",
          "explanation": "Because the inequality allows equality, the roots $\\tfrac13$ and $2$ (where the value is zero) are part of the solution.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Summarise the sign pattern.",
          "workingLatex": "+ \\ | \\ - \\ | \\ + \\quad \\text{at } \\tfrac{1}{3}, 2",
          "explanation": "The parabola is positive outside the roots and negative between them, matching the two outer regions.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "State the answer.",
          "workingLatex": "x \\le \\tfrac{1}{3} \\ \\text{ or } \\ x \\ge 2",
          "explanation": "The solution is $x \\le \\tfrac13$ or $x \\ge 2$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$(3x-1)(x-2) \\ge 0 \\Rightarrow x \\le \\tfrac{1}{3} \\text{ or } x \\ge 2$ (outside the roots)."
    }
  },
  {
    "id": "al.y1.pure.inequalities.q045",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Inequalities",
    "subtopicId": "al.y1.pure.inequalities",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "expression",
    "tags": [
      "inequalities",
      "quadratic",
      "leading coefficient",
      "factorising"
    ],
    "questionText": "Solve the inequality $2x^2 - 5x - 3 < 0$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Factorise the quadratic.",
          "workingLatex": "2x^2 - 5x - 3 = (2x + 1)(x - 3)",
          "explanation": "Splitting the middle term (using $ac = -6$, with $1$ and $-6$) factorises this quadratic with leading coefficient $2$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find the critical values.",
          "workingLatex": "2x + 1 = 0 \\Rightarrow x = -\\tfrac{1}{2}, \\quad x - 3 = 0 \\Rightarrow x = 3",
          "explanation": "Setting each factor to zero gives the roots $-\\tfrac12$ and $3$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Order the critical values.",
          "workingLatex": "-\\tfrac{1}{2} < 3",
          "explanation": "Placing the roots in order divides the number line into three regions.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Note the shape of the parabola.",
          "workingLatex": "\\text{coefficient of } x^2 = 2 > 0 \\Rightarrow \\text{opens upward}",
          "explanation": "A positive $x^2$ coefficient means the parabola dips below the axis between its roots.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Decide where the curve is below the axis.",
          "workingLatex": "\\text{between the roots}",
          "explanation": "For an upward parabola, $y < 0$ strictly between the two roots.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Write the solution.",
          "workingLatex": "-\\tfrac{1}{2} < x < 3",
          "explanation": "The inequality $< 0$ holds for $x$ strictly between $-\\tfrac12$ and $3$.",
          "diagram": {
            "kind": "parabolaRegion",
            "r1": -1 / 2,
            "r2": 3,
            "opensUp": true,
            "region": "interior",
            "rootsClosed": false,
            "label": "-1/2 < x < 3",
            "caption": "2x² - 5x - 3 < 0: below the axis between the roots -1/2 and 3.",
            "alt": "Upward parabola crossing the x-axis at -1/2 and 3, with the region between the roots shaded and the roots shown as open circles."
          }
        },
        {
          "stepNumber": 7,
          "description": "Express in interval notation.",
          "workingLatex": "x \\in \\left(-\\tfrac{1}{2}, \\, 3\\right)",
          "explanation": "In interval notation the solution is the open interval from $-\\tfrac12$ to $3$, endpoints excluded.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Test the left region.",
          "workingLatex": "x = -1: \\ (-1)(-4) = 4 \\not< 0",
          "explanation": "At $x = -1$ the product is positive, confirming the inequality fails to the left of the roots.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Test the middle region.",
          "workingLatex": "x = 0: \\ (1)(-3) = -3 < 0 \\ \\checkmark",
          "explanation": "At $x = 0$ the product is negative, confirming the inequality holds between the roots.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Test the right region.",
          "workingLatex": "x = 4: \\ (9)(1) = 9 \\not< 0",
          "explanation": "At $x = 4$ the product is positive, confirming the inequality fails to the right of the roots.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Confirm the boundaries are excluded.",
          "workingLatex": "\\text{strict } < 0 \\Rightarrow \\text{roots not included}",
          "explanation": "Because the inequality is strict, the roots $-\\tfrac12$ and $3$ (where the value is zero) are excluded.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Summarise the sign pattern.",
          "workingLatex": "+ \\ | \\ - \\ | \\ + \\quad \\text{at } -\\tfrac{1}{2}, 3",
          "explanation": "The parabola is positive outside the roots and negative between them, so $< 0$ picks out the middle region.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "State the answer.",
          "workingLatex": "-\\tfrac{1}{2} < x < 3",
          "explanation": "The solution is $-\\tfrac12 < x < 3$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$(2x+1)(x-3) < 0 \\Rightarrow -\\tfrac{1}{2} < x < 3$ (between the roots)."
    }
  },
  {
    "id": "al.y1.pure.inequalities.q046",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Inequalities",
    "subtopicId": "al.y1.pure.inequalities",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "expression",
    "tags": [
      "inequalities",
      "quadratic",
      "negative leading coefficient"
    ],
    "questionText": "Solve the inequality $5 - 4x - x^2 > 0$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Multiply through by -1.",
          "workingLatex": "x^2 + 4x - 5 < 0",
          "explanation": "Multiplying by $-1$ makes the $x^2$ coefficient positive, which is easier to handle — but it reverses the inequality sign.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Factorise the quadratic.",
          "workingLatex": "x^2 + 4x - 5 = (x + 5)(x - 1)",
          "explanation": "Factorising reveals the critical values where the expression is zero.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find the critical values.",
          "workingLatex": "x = -5 \\ \\text{ and } \\ x = 1",
          "explanation": "Setting each factor to zero gives the roots $-5$ and $1$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Note the shape of the rewritten parabola.",
          "workingLatex": "\\text{opens upward}",
          "explanation": "After multiplying by $-1$, the parabola $x^2 + 4x - 5$ opens upward, dipping below the axis between its roots.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Decide where the curve is below the axis.",
          "workingLatex": "\\text{between the roots}",
          "explanation": "For the upward parabola, $< 0$ holds strictly between the two roots.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Write the solution.",
          "workingLatex": "-5 < x < 1",
          "explanation": "The inequality (equivalent to the original) holds for $x$ strictly between $-5$ and $1$.",
          "diagram": {
            "kind": "parabolaRegion",
            "r1": -5,
            "r2": 1,
            "opensUp": true,
            "region": "interior",
            "rootsClosed": false,
            "label": "-5 < x < 1",
            "caption": "Rewritten as x² + 4x - 5 < 0: below the axis between the roots -5 and 1.",
            "alt": "Upward parabola crossing the x-axis at -5 and 1, with the region between the roots shaded and the roots shown as open circles."
          }
        },
        {
          "stepNumber": 7,
          "description": "Express in interval notation.",
          "workingLatex": "x \\in (-5, 1)",
          "explanation": "In interval notation the solution is the open interval from $-5$ to $1$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check a value inside.",
          "workingLatex": "x = 0: \\ 5 - 0 - 0 = 5 > 0 \\ \\checkmark",
          "explanation": "Testing $x = 0$ in the original gives $5 > 0$, which is true, confirming the interior works.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Check a value outside.",
          "workingLatex": "x = 2: \\ 5 - 8 - 4 = -7 \\not> 0",
          "explanation": "Testing $x = 2$ gives $-7 > 0$, which is false, confirming values outside the interval fail.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Check the other side.",
          "workingLatex": "x = -6: \\ 5 + 24 - 36 = -7 \\not> 0",
          "explanation": "Testing $x = -6$ also gives a negative value, confirming the region to the left is excluded.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Note the sign-flip was key.",
          "workingLatex": "> \\to < \\text{ when multiplying by } -1",
          "explanation": "Reversing the inequality when multiplying by $-1$ was essential; skipping it would give the wrong region.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Confirm the boundaries are excluded.",
          "workingLatex": "\\text{strict} \\Rightarrow \\text{roots not included}",
          "explanation": "Because the inequality is strict, the roots $-5$ and $1$ are excluded from the solution.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "State the answer.",
          "workingLatex": "-5 < x < 1",
          "explanation": "The solution is $-5 < x < 1$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$5 - 4x - x^2 > 0 \\Rightarrow x^2 + 4x - 5 < 0 \\Rightarrow (x+5)(x-1) < 0 \\Rightarrow -5 < x < 1$"
    }
  },
  {
    "id": "al.y1.pure.inequalities.q047",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Inequalities",
    "subtopicId": "al.y1.pure.inequalities",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "expression",
    "tags": [
      "inequalities",
      "quadratic",
      "rearranging"
    ],
    "questionText": "Solve the inequality $x(x - 2) > 3$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Expand the left-hand side.",
          "workingLatex": "x^2 - 2x > 3",
          "explanation": "Multiplying out the bracket gives a quadratic expression on the left.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Rearrange to standard form.",
          "workingLatex": "x^2 - 2x - 3 > 0",
          "explanation": "Bringing the $3$ across so the right side is zero prepares the quadratic for factorising.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Factorise the quadratic.",
          "workingLatex": "x^2 - 2x - 3 = (x - 3)(x + 1)",
          "explanation": "Factorising reveals the critical values where the expression is zero.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find the critical values.",
          "workingLatex": "x = 3 \\ \\text{ and } \\ x = -1",
          "explanation": "Setting each factor to zero gives the roots $3$ and $-1$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Order the critical values.",
          "workingLatex": "-1 < 3",
          "explanation": "Ordering the roots divides the number line into three regions.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Note the shape of the parabola.",
          "workingLatex": "\\text{opens upward}",
          "explanation": "The positive $x^2$ coefficient means the parabola lies above the axis outside its roots.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Decide where the curve is above the axis.",
          "workingLatex": "\\text{outside the roots}",
          "explanation": "For an upward parabola, $y > 0$ strictly outside the two roots.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Write the solution.",
          "workingLatex": "x < -1 \\ \\text{ or } \\ x > 3",
          "explanation": "The inequality $> 0$ holds for $x$ less than $-1$ or greater than $3$.",
          "diagram": {
            "kind": "parabolaRegion",
            "r1": -1,
            "r2": 3,
            "opensUp": true,
            "region": "exterior",
            "rootsClosed": false,
            "label": "x < -1 or x > 3",
            "caption": "x² - 2x - 3 > 0: above the axis outside the roots -1 and 3.",
            "alt": "Upward parabola crossing the x-axis at -1 and 3, with the two outer regions above the axis shaded and the roots shown as open circles."
          }
        },
        {
          "stepNumber": 9,
          "description": "Express in set notation.",
          "workingLatex": "\\{x : x < -1\\} \\cup \\{x : x > 3\\}",
          "explanation": "The solution is the union of the two outer regions, with the roots excluded.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Check a value outside.",
          "workingLatex": "x = 4: \\ 4(4 - 2) = 8 > 3 \\ \\checkmark",
          "explanation": "Testing $x = 4$ in the original gives $8 > 3$, which is true, confirming the outer region works.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Check a value between the roots.",
          "workingLatex": "x = 0: \\ 0(0 - 2) = 0 \\not> 3",
          "explanation": "Testing $x = 0$ gives $0 > 3$, which is false, confirming values between the roots fail.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Note the boundaries are excluded.",
          "workingLatex": "\\text{strict } > \\Rightarrow \\text{roots not included}",
          "explanation": "Because the inequality is strict, the roots $-1$ and $3$ are excluded from the solution.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "State the answer.",
          "workingLatex": "x < -1 \\ \\text{ or } \\ x > 3",
          "explanation": "The solution is $x < -1$ or $x > 3$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x(x - 2) > 3 \\Rightarrow x^2 - 2x - 3 = (x-3)(x+1) > 0 \\Rightarrow x < -1 \\text{ or } x > 3$"
    }
  },
  {
    "id": "al.y1.pure.inequalities.q048",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Inequalities",
    "subtopicId": "al.y1.pure.inequalities",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "expression",
    "tags": [
      "inequalities",
      "discriminant",
      "no real roots",
      "range of a parameter"
    ],
    "questionText": "Find the range of values of $k$ for which the equation $x^2 - 6x + k = 0$ has no real roots.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the condition for no real roots.",
          "workingLatex": "\\Delta = b^2 - 4ac < 0",
          "explanation": "A quadratic has no real roots exactly when its discriminant is strictly negative.",
          "diagram": {
            "kind": "discriminantTriad",
            "highlight": [
              "none"
            ],
            "caption": "'No real roots' needs Δ < 0 — the parabola stays clear of the x-axis.",
            "alt": "Three parabola panels: two distinct roots (Δ>0), one repeated root (Δ=0), and no roots (Δ<0); the no-roots panel is highlighted."
          }
        },
        {
          "stepNumber": 2,
          "description": "Identify the coefficients.",
          "workingLatex": "a = 1,\\ b = -6,\\ c = k",
          "explanation": "Here the constant term is the unknown $k$, which the condition will constrain.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write the discriminant.",
          "workingLatex": "\\Delta = (-6)^2 - 4(1)(k) = 36 - 4k",
          "explanation": "Substituting the coefficients into $b^2 - 4ac$ gives $36 - 4k$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Set up the inequality.",
          "workingLatex": "36 - 4k < 0",
          "explanation": "For no real roots the discriminant must be strictly negative.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Rearrange.",
          "workingLatex": "36 < 4k",
          "explanation": "Adding $4k$ to both sides moves it across.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Divide by 4.",
          "workingLatex": "9 < k",
          "explanation": "Dividing both sides by the positive number $4$ preserves the inequality.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Rewrite the inequality.",
          "workingLatex": "k > 9",
          "explanation": "So the condition holds for $k$ greater than $9$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Test a value inside.",
          "workingLatex": "k = 10: \\ 36 - 40 = -4 < 0 \\ \\checkmark",
          "explanation": "At $k = 10$ the discriminant is negative, confirming no real roots in this range.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Test the boundary.",
          "workingLatex": "k = 9: \\ 36 - 36 = 0",
          "explanation": "At $k = 9$ the discriminant is zero, giving a repeated (still real) root, so $9$ is excluded.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Test a value outside.",
          "workingLatex": "k = 8: \\ 36 - 32 = 4 > 0",
          "explanation": "At $k = 8$ the discriminant is positive, so there are two real roots — confirming $k < 9$ is excluded.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Confirm the boundary is excluded.",
          "workingLatex": "\\text{strict } < 0 \\Rightarrow k = 9 \\text{ excluded}",
          "explanation": "Since we need the discriminant strictly negative, the boundary value $k = 9$ does not satisfy the condition.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "State the range.",
          "workingLatex": "k > 9",
          "explanation": "Only for $k > 9$ does the equation have no real roots.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "State the answer.",
          "workingLatex": "k > 9",
          "explanation": "The equation has no real roots when $k > 9$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\Delta = 36 - 4k < 0 \\Rightarrow k > 9$"
    }
  },
  {
    "id": "al.y1.pure.inequalities.q049",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Inequalities",
    "subtopicId": "al.y1.pure.inequalities",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "expression",
    "tags": [
      "inequalities",
      "discriminant",
      "real roots",
      "range of a parameter"
    ],
    "questionText": "Find the range of values of $k$ for which the equation $2x^2 + kx + 2 = 0$ has real roots.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the condition for real roots.",
          "workingLatex": "\\Delta = b^2 - 4ac \\ge 0",
          "explanation": "A quadratic has real roots (distinct or repeated) exactly when its discriminant is non-negative.",
          "diagram": {
            "kind": "discriminantTriad",
            "highlight": [
              "two",
              "equal"
            ],
            "caption": "'Has real roots' needs Δ ≥ 0 — two distinct roots or one repeated root.",
            "alt": "Three parabola panels: two distinct roots (Δ>0), one repeated root (Δ=0), and no roots (Δ<0); the two-roots and repeated-root panels are highlighted."
          }
        },
        {
          "stepNumber": 2,
          "description": "Identify the coefficients.",
          "workingLatex": "a = 2,\\ b = k,\\ c = 2",
          "explanation": "Here the middle coefficient is the unknown $k$, which the condition will constrain.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write the discriminant.",
          "workingLatex": "\\Delta = k^2 - 4(2)(2) = k^2 - 16",
          "explanation": "Substituting the coefficients into $b^2 - 4ac$ gives $k^2 - 16$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Set up the inequality.",
          "workingLatex": "k^2 - 16 \\ge 0",
          "explanation": "For real roots the discriminant must be at least zero.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Factorise.",
          "workingLatex": "(k - 4)(k + 4) \\ge 0",
          "explanation": "The left-hand side is a difference of squares, so it factorises as $(k-4)(k+4)$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find the critical values.",
          "workingLatex": "k = 4 \\ \\text{ and } \\ k = -4",
          "explanation": "The expression is zero at $k = 4$ and $k = -4$, dividing the $k$-line into regions.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Note the shape in k.",
          "workingLatex": "\\text{upward parabola in } k",
          "explanation": "As a quadratic in $k$, this opens upward, so it is non-negative outside (and at) its roots.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Decide where it is non-negative.",
          "workingLatex": "\\text{on/outside the roots}",
          "explanation": "For the upward parabola, $\\ge 0$ holds at and outside the two critical values.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Write the range.",
          "workingLatex": "k \\le -4 \\ \\text{ or } \\ k \\ge 4",
          "explanation": "The discriminant is non-negative precisely for these values, including the boundaries (which give equal roots).",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Test a value inside.",
          "workingLatex": "k = 0: \\ 0 - 16 = -16 < 0",
          "explanation": "At $k = 0$ the discriminant is negative, so there are no real roots — confirming the middle region is excluded.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Test a value outside.",
          "workingLatex": "k = 5: \\ 25 - 16 = 9 \\ge 0 \\ \\checkmark",
          "explanation": "At $k = 5$ the discriminant is non-negative, confirming real roots occur in the outer region.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Include the boundaries.",
          "workingLatex": "k = 4: \\ 16 - 16 = 0 \\ge 0 \\ \\checkmark",
          "explanation": "At $k = \\pm 4$ the discriminant is zero, giving equal (still real) roots, so the boundaries are included.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "State the answer.",
          "workingLatex": "k \\le -4 \\ \\text{ or } \\ k \\ge 4",
          "explanation": "The equation has real roots when $k \\le -4$ or $k \\ge 4$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\Delta = k^2 - 16 \\ge 0 \\Rightarrow (k-4)(k+4) \\ge 0 \\Rightarrow k \\le -4 \\text{ or } k \\ge 4$"
    }
  },
  {
    "id": "al.y1.pure.inequalities.q050",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Inequalities",
    "subtopicId": "al.y1.pure.inequalities",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "expression",
    "tags": [
      "inequalities",
      "combined",
      "quadratic and linear",
      "intersection of solutions"
    ],
    "questionText": "Find the values of $x$ that satisfy both $x^2 - x - 2 \\le 0$ and $x > 0$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Solve the quadratic inequality first.",
          "workingLatex": "x^2 - x - 2 \\le 0",
          "explanation": "We solve each inequality separately, then combine the solution sets.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Factorise the quadratic.",
          "workingLatex": "(x - 2)(x + 1) \\le 0",
          "explanation": "Factorising gives critical values $2$ and $-1$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Note the shape.",
          "workingLatex": "\\text{opens upward} \\Rightarrow \\le 0 \\text{ between roots}",
          "explanation": "An upward parabola is on or below the axis between its roots.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Solve the quadratic inequality.",
          "workingLatex": "-1 \\le x \\le 2",
          "explanation": "So $x^2 - x - 2 \\le 0$ holds for $-1 \\le x \\le 2$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State the second inequality.",
          "workingLatex": "x > 0",
          "explanation": "The second condition restricts $x$ to positive values.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Set up the overlap.",
          "workingLatex": "-1 \\le x \\le 2 \\ \\text{ and } \\ x > 0",
          "explanation": "Both conditions must hold at once, so we find where the two solution sets overlap.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Take the more restrictive lower bound.",
          "workingLatex": "x > 0 \\text{ beats } x \\ge -1",
          "explanation": "Since $0$ is greater than $-1$, the binding lower limit is $x > 0$ (and $0$ is excluded).",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Keep the upper bound.",
          "workingLatex": "x \\le 2",
          "explanation": "The upper limit $x \\le 2$ from the quadratic still applies, with $2$ included.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Combine into one range.",
          "workingLatex": "0 < x \\le 2",
          "explanation": "The overlap of the two solution sets is $0 < x \\le 2$.",
          "diagram": {
            "kind": "intersectionStack",
            "min": -2,
            "max": 4,
            "rows": [
              {
                "label": "x² - x - 2 ≤ 0",
                "intervals": [
                  {
                    "from": -1,
                    "to": 2,
                    "fromClosed": true,
                    "toClosed": true
                  }
                ]
              },
              {
                "label": "x > 0",
                "intervals": [
                  {
                    "from": 0,
                    "to": null,
                    "fromClosed": false
                  }
                ]
              },
              {
                "label": "both",
                "highlight": true,
                "intervals": [
                  {
                    "from": 0,
                    "to": 2,
                    "fromClosed": false,
                    "toClosed": true
                  }
                ]
              }
            ],
            "caption": "The answer is where BOTH conditions overlap: 0 < x ≤ 2.",
            "alt": "Stacked number lines: -1 to 2 for the quadratic, 0 rightwards for x>0, and their overlap from 0 (open) to 2 (closed) highlighted."
          }
        },
        {
          "stepNumber": 10,
          "description": "Express in interval notation.",
          "workingLatex": "x \\in (0, 2]",
          "explanation": "In interval notation the solution is the half-open interval from $0$ (excluded) to $2$ (included).",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Check a value inside.",
          "workingLatex": "x = 1: \\ 1 - 1 - 2 = -2 \\le 0, \\ 1 > 0 \\ \\checkmark",
          "explanation": "At $x = 1$ both inequalities hold, confirming the overlap is correct.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Check a value outside.",
          "workingLatex": "x = -\\tfrac{1}{2}: \\ x > 0 \\text{ fails}",
          "explanation": "At $x = -\\tfrac{1}{2}$ the condition $x > 0$ fails, confirming negative values are excluded despite satisfying the quadratic.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "State the answer.",
          "workingLatex": "0 < x \\le 2",
          "explanation": "The values satisfying both inequalities are $0 < x \\le 2$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x^2 - x - 2 \\le 0 \\Rightarrow -1 \\le x \\le 2$; with $x > 0$ the overlap is $0 < x \\le 2$."
    }
  },
  {
    "id": "al.y1.pure.inequalities.q051",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Inequalities",
    "subtopicId": "al.y1.pure.inequalities",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": [
      "inequalities",
      "linear"
    ],
    "questionText": "Solve the inequality $4x - 3 > 9$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Aim to isolate x.",
          "workingLatex": "4x - 3 > 9",
          "explanation": "We isolate the term in $x$, keeping the inequality sign as we work.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Add 3 to both sides.",
          "workingLatex": "4x > 12",
          "explanation": "Adding $3$ to both sides isolates the $x$ term without changing the inequality direction.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Divide both sides by 4.",
          "workingLatex": "x > 3",
          "explanation": "Dividing by the positive number $4$ keeps the inequality sign the same way round.",
          "diagram": {
            "kind": "numberLineRay",
            "min": -2,
            "max": 8,
            "endpoint": 3,
            "direction": "right",
            "closed": false,
            "label": "x > 3",
            "caption": "Open circle at 3 — 3 is not included.",
            "alt": "Number line with an open circle at 3 and the region to its right shaded."
          }
        },
        {
          "stepNumber": 4,
          "description": "Interpret the solution.",
          "workingLatex": "x > 3",
          "explanation": "Any value of $x$ greater than $3$ satisfies the inequality.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check a test value.",
          "workingLatex": "x = 4: \\ 4(4) - 3 = 13 > 9 \\ \\checkmark",
          "explanation": "Substituting $x = 4$ gives $13 > 9$, which is true, confirming the solution.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the answer.",
          "workingLatex": "x > 3",
          "explanation": "The solution to the inequality is $x > 3$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$4x - 3 > 9 \\Rightarrow 4x > 12 \\Rightarrow x > 3$"
    }
  },
  {
    "id": "al.y1.pure.inequalities.q052",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Inequalities",
    "subtopicId": "al.y1.pure.inequalities",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": [
      "inequalities",
      "linear",
      "negative solution"
    ],
    "questionText": "Solve the inequality $2x + 8 \\le 2$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Aim to isolate x.",
          "workingLatex": "2x + 8 \\le 2",
          "explanation": "We isolate the term in $x$, keeping the inequality sign as we work.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Subtract 8 from both sides.",
          "workingLatex": "2x \\le -6",
          "explanation": "Subtracting $8$ from both sides isolates the $x$ term without changing the inequality direction.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Divide both sides by 2.",
          "workingLatex": "x \\le -3",
          "explanation": "Dividing by the positive number $2$ keeps the inequality sign the same way round.",
          "diagram": {
            "kind": "numberLineRay",
            "min": -8,
            "max": 2,
            "endpoint": -3,
            "direction": "left",
            "closed": true,
            "label": "x ≤ -3",
            "caption": "Solid circle at -3 — -3 is included.",
            "alt": "Number line with a solid circle at -3 and the region to its left shaded."
          }
        },
        {
          "stepNumber": 4,
          "description": "Interpret the solution.",
          "workingLatex": "x \\le -3",
          "explanation": "Any value of $x$ at most $-3$ satisfies the inequality; a negative answer is fine.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check the boundary value.",
          "workingLatex": "x = -3: \\ 2(-3) + 8 = 2 \\le 2 \\ \\checkmark",
          "explanation": "Substituting the boundary $x = -3$ gives $2 \\le 2$, which is true, confirming the solution.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the answer.",
          "workingLatex": "x \\le -3",
          "explanation": "The solution to the inequality is $x \\le -3$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$2x + 8 \\le 2 \\Rightarrow 2x \\le -6 \\Rightarrow x \\le -3$"
    }
  },
  {
    "id": "al.y1.pure.inequalities.q053",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Inequalities",
    "subtopicId": "al.y1.pure.inequalities",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": [
      "inequalities",
      "linear",
      "brackets"
    ],
    "questionText": "Solve the inequality $3(2x - 1) \\ge 15$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Expand the bracket.",
          "workingLatex": "6x - 3 \\ge 15",
          "explanation": "Multiplying out the bracket gives a simpler linear inequality.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Add 3 to both sides.",
          "workingLatex": "6x \\ge 18",
          "explanation": "Adding $3$ to both sides isolates the $x$ term without changing the inequality direction.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Divide both sides by 6.",
          "workingLatex": "x \\ge 3",
          "explanation": "Dividing by the positive number $6$ keeps the inequality sign the same way round.",
          "diagram": {
            "kind": "numberLineRay",
            "min": -2,
            "max": 8,
            "endpoint": 3,
            "direction": "right",
            "closed": true,
            "label": "x ≥ 3",
            "caption": "Solid circle at 3 — 3 is included.",
            "alt": "Number line with a solid circle at 3 and the region to its right shaded."
          }
        },
        {
          "stepNumber": 4,
          "description": "Interpret the solution.",
          "workingLatex": "x \\ge 3",
          "explanation": "Any value of $x$ at least $3$ satisfies the inequality.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check the boundary value.",
          "workingLatex": "x = 3: \\ 3(2(3) - 1) = 15 \\ge 15 \\ \\checkmark",
          "explanation": "Substituting the boundary $x = 3$ gives $15 \\ge 15$, which is true, confirming the solution.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the answer.",
          "workingLatex": "x \\ge 3",
          "explanation": "The solution to the inequality is $x \\ge 3$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$3(2x - 1) \\ge 15 \\Rightarrow 6x - 3 \\ge 15 \\Rightarrow x \\ge 3$"
    }
  },
  {
    "id": "al.y1.pure.inequalities.q054",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Inequalities",
    "subtopicId": "al.y1.pure.inequalities",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": [
      "inequalities",
      "linear",
      "variable both sides"
    ],
    "questionText": "Solve the inequality $5x + 1 < x + 13$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Collect the x terms on one side.",
          "workingLatex": "5x - x + 1 < 13",
          "explanation": "Subtracting $x$ from both sides gathers the variable terms together.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Simplify.",
          "workingLatex": "4x + 1 < 13",
          "explanation": "Combining $5x - x$ gives $4x$, leaving $4x + 1 < 13$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Subtract 1 from both sides.",
          "workingLatex": "4x < 12",
          "explanation": "Subtracting $1$ isolates the term in $x$ without changing the inequality direction.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Divide both sides by 4.",
          "workingLatex": "x < 3",
          "explanation": "Dividing by the positive number $4$ keeps the inequality sign the same way round.",
          "diagram": {
            "kind": "numberLineRay",
            "min": -2,
            "max": 8,
            "endpoint": 3,
            "direction": "left",
            "closed": false,
            "label": "x < 3",
            "caption": "Open circle at 3 — 3 is not included.",
            "alt": "Number line with an open circle at 3 and the region to its left shaded."
          }
        },
        {
          "stepNumber": 5,
          "description": "Check a test value.",
          "workingLatex": "x = 2: \\ 5(2) + 1 = 11 < 2 + 13 = 15 \\ \\checkmark",
          "explanation": "Substituting $x = 2$ gives $11 < 15$, which is true, confirming the solution.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the answer.",
          "workingLatex": "x < 3",
          "explanation": "The solution to the inequality is $x < 3$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$5x + 1 < x + 13 \\Rightarrow 4x < 12 \\Rightarrow x < 3$"
    }
  },
  {
    "id": "al.y1.pure.inequalities.q055",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Inequalities",
    "subtopicId": "al.y1.pure.inequalities",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": [
      "inequalities",
      "linear",
      "fractions"
    ],
    "questionText": "Solve the inequality $\\dfrac{x}{4} + 3 > 5$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Subtract 3 from both sides.",
          "workingLatex": "\\dfrac{x}{4} > 2",
          "explanation": "Removing the constant first isolates the fraction, keeping the inequality direction the same.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Multiply both sides by 4.",
          "workingLatex": "x > 8",
          "explanation": "Multiplying by the positive number $4$ clears the fraction and keeps the inequality sign the same way round.",
          "diagram": {
            "kind": "numberLineRay",
            "min": 3,
            "max": 13,
            "endpoint": 8,
            "direction": "right",
            "closed": false,
            "label": "x > 8",
            "caption": "Open circle at 8 — 8 is not included.",
            "alt": "Number line with an open circle at 8 and the region to its right shaded."
          }
        },
        {
          "stepNumber": 3,
          "description": "Interpret the solution.",
          "workingLatex": "x > 8",
          "explanation": "Any value of $x$ greater than $8$ satisfies the inequality.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Check a test value.",
          "workingLatex": "x = 12: \\ \\tfrac{12}{4} + 3 = 6 > 5 \\ \\checkmark",
          "explanation": "Substituting $x = 12$ gives $6 > 5$, which is true, confirming the solution.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check the boundary is excluded.",
          "workingLatex": "x = 8: \\ \\tfrac{8}{4} + 3 = 5 \\not> 5",
          "explanation": "At $x = 8$ the expression equals $5$, which is not greater than $5$, so the boundary is correctly excluded.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the answer.",
          "workingLatex": "x > 8",
          "explanation": "The solution to the inequality is $x > 8$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{x}{4} + 3 > 5 \\Rightarrow \\dfrac{x}{4} > 2 \\Rightarrow x > 8$"
    }
  },
  {
    "id": "al.y1.pure.inequalities.q056",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Inequalities",
    "subtopicId": "al.y1.pure.inequalities",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": [
      "inequalities",
      "linear",
      "variable both sides"
    ],
    "questionText": "Solve the inequality $6x - 2 \\ge 4x + 6$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Collect the x terms on one side.",
          "workingLatex": "6x - 4x - 2 \\ge 6",
          "explanation": "Subtracting $4x$ from both sides gathers the variable terms on the left.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Simplify.",
          "workingLatex": "2x - 2 \\ge 6",
          "explanation": "Combining $6x - 4x$ gives $2x$, leaving $2x - 2 \\ge 6$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Add 2 to both sides.",
          "workingLatex": "2x \\ge 8",
          "explanation": "Adding $2$ isolates the term in $x$ without changing the inequality direction.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Divide both sides by 2.",
          "workingLatex": "x \\ge 4",
          "explanation": "Dividing by the positive number $2$ keeps the inequality sign the same way round.",
          "diagram": {
            "kind": "numberLineRay",
            "min": -1,
            "max": 9,
            "endpoint": 4,
            "direction": "right",
            "closed": true,
            "label": "x ≥ 4",
            "caption": "Solid circle at 4 — 4 is included.",
            "alt": "Number line with a solid circle at 4 and the region to its right shaded."
          }
        },
        {
          "stepNumber": 5,
          "description": "Check the boundary value.",
          "workingLatex": "x = 4: \\ 6(4) - 2 = 22 \\ge 4(4) + 6 = 22 \\ \\checkmark",
          "explanation": "Substituting the boundary $x = 4$ gives $22 \\ge 22$, which is true, confirming the solution.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the answer.",
          "workingLatex": "x \\ge 4",
          "explanation": "The solution to the inequality is $x \\ge 4$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$6x - 2 \\ge 4x + 6 \\Rightarrow 2x \\ge 8 \\Rightarrow x \\ge 4$"
    }
  },
  {
    "id": "al.y1.pure.inequalities.q057",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Inequalities",
    "subtopicId": "al.y1.pure.inequalities",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "expression",
    "tags": [
      "inequalities",
      "linear",
      "dividing by negative"
    ],
    "questionText": "Solve the inequality $-4x < 8$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Note the coefficient of x is negative.",
          "workingLatex": "-4x < 8",
          "explanation": "Dividing an inequality by a negative number reverses the inequality sign — the key idea here.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Prepare to divide by -4.",
          "workingLatex": "\\text{divide by } -4 \\Rightarrow \\text{reverse the sign}",
          "explanation": "We flag the sign reversal before dividing so we do not forget it.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Divide and reverse the sign.",
          "workingLatex": "x > -2",
          "explanation": "Dividing both sides by $-4$ and flipping $<$ to $>$ gives $x > -2$.",
          "diagram": {
            "kind": "signFlipMirror",
            "min": -7,
            "max": 3,
            "beforeEndpoint": -2,
            "beforeDirection": "left",
            "beforeClosed": false,
            "beforeLabel": "-4x < 8",
            "afterEndpoint": -2,
            "afterDirection": "right",
            "afterClosed": false,
            "afterLabel": "x > -2",
            "caption": "Dividing -4x < 8 by -4 reflects the ray — the sign flips to give x > -2.",
            "alt": "Two number lines with endpoint at -2: the top shows the un-flipped ray pointing left, the bottom shows the correct flipped ray x > -2 pointing right, both open circles."
          }
        },
        {
          "stepNumber": 4,
          "description": "Interpret the solution.",
          "workingLatex": "x > -2",
          "explanation": "Any value of $x$ greater than $-2$ satisfies the inequality.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check a test value.",
          "workingLatex": "x = 0: \\ -4(0) = 0 < 8 \\ \\checkmark",
          "explanation": "Substituting $x = 0$ (which is greater than $-2$) gives $0 < 8$, confirming the solution.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check a value outside.",
          "workingLatex": "x = -3: \\ -4(-3) = 12 \\not< 8",
          "explanation": "Testing $x = -3$ gives $12 < 8$, which is false, confirming values below $-2$ do not work.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Confirm the sign flip mattered.",
          "workingLatex": "\\text{keeping } < \\text{ would give the wrong side}",
          "explanation": "Had we not flipped the sign, we would have written $x < -2$, the exact opposite set.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Express in set notation.",
          "workingLatex": "\\{x : x > -2\\}",
          "explanation": "In set notation the solution is the set of all real $x$ that are greater than $-2$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the answer.",
          "workingLatex": "x > -2",
          "explanation": "The solution is $x > -2$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$-4x < 8 \\Rightarrow x > -2$ (dividing by $-4$ reverses the inequality)."
    }
  },
  {
    "id": "al.y1.pure.inequalities.q058",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Inequalities",
    "subtopicId": "al.y1.pure.inequalities",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "expression",
    "tags": [
      "inequalities",
      "linear",
      "dividing by negative"
    ],
    "questionText": "Solve the inequality $5 - 2x \\le 11$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Isolate the term in x.",
          "workingLatex": "-2x \\le 11 - 5",
          "explanation": "Subtracting $5$ from both sides moves the constant across.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Simplify.",
          "workingLatex": "-2x \\le 6",
          "explanation": "Combining $11 - 5$ gives $6$, so we have $-2x \\le 6$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Prepare to divide by a negative.",
          "workingLatex": "\\text{divide by } -2 \\Rightarrow \\text{reverse the sign}",
          "explanation": "Dividing by the negative number $-2$ will reverse the inequality direction.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Divide and reverse the sign.",
          "workingLatex": "x \\ge -3",
          "explanation": "Dividing both sides by $-2$ and flipping $\\le$ to $\\ge$ gives $x \\ge -3$.",
          "diagram": {
            "kind": "signFlipMirror",
            "min": -8,
            "max": 2,
            "beforeEndpoint": -3,
            "beforeDirection": "left",
            "beforeClosed": true,
            "beforeLabel": "-2x ≤ 6",
            "afterEndpoint": -3,
            "afterDirection": "right",
            "afterClosed": true,
            "afterLabel": "x ≥ -3",
            "caption": "Dividing -2x ≤ 6 by -2 reflects the ray — the sign flips to give x ≥ -3.",
            "alt": "Two number lines with endpoint at -3: the top ray points left, the bottom flipped ray x ≥ -3 points right, both solid circles."
          }
        },
        {
          "stepNumber": 5,
          "description": "Interpret the solution.",
          "workingLatex": "x \\ge -3",
          "explanation": "Any value of $x$ at least $-3$ satisfies the inequality.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check a test value.",
          "workingLatex": "x = 0: \\ 5 - 2(0) = 5 \\le 11 \\ \\checkmark",
          "explanation": "Substituting $x = 0$ gives $5 \\le 11$, which is true, confirming the solution.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check a value outside.",
          "workingLatex": "x = -4: \\ 5 - 2(-4) = 13 \\not\\le 11",
          "explanation": "Testing $x = -4$ gives $13 \\le 11$, which is false, confirming values below $-3$ do not work.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Express in set notation.",
          "workingLatex": "\\{x : x \\ge -3\\}",
          "explanation": "In set notation the solution is the set of all real $x$ that are at least $-3$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the answer.",
          "workingLatex": "x \\ge -3",
          "explanation": "The solution is $x \\ge -3$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$5 - 2x \\le 11 \\Rightarrow -2x \\le 6 \\Rightarrow x \\ge -3$ (dividing by $-2$ reverses the inequality)."
    }
  },
  {
    "id": "al.y1.pure.inequalities.q059",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Inequalities",
    "subtopicId": "al.y1.pure.inequalities",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "expression",
    "tags": [
      "inequalities",
      "linear",
      "dividing by negative"
    ],
    "questionText": "Solve the inequality $10 - 3x > 1$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Isolate the term in x.",
          "workingLatex": "-3x > 1 - 10",
          "explanation": "Subtracting $10$ from both sides moves the constant across.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Simplify.",
          "workingLatex": "-3x > -9",
          "explanation": "Combining $1 - 10$ gives $-9$, so we have $-3x > -9$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Prepare to divide by a negative.",
          "workingLatex": "\\text{divide by } -3 \\Rightarrow \\text{reverse the sign}",
          "explanation": "Dividing by the negative number $-3$ will reverse the inequality direction.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Divide and reverse the sign.",
          "workingLatex": "x < 3",
          "explanation": "Dividing both sides by $-3$ and flipping $>$ to $<$ gives $x < 3$.",
          "diagram": {
            "kind": "signFlipMirror",
            "min": -2,
            "max": 8,
            "beforeEndpoint": 3,
            "beforeDirection": "right",
            "beforeClosed": false,
            "beforeLabel": "-3x > -9",
            "afterEndpoint": 3,
            "afterDirection": "left",
            "afterClosed": false,
            "afterLabel": "x < 3",
            "caption": "Dividing -3x > -9 by -3 reflects the ray — the sign flips to give x < 3.",
            "alt": "Two number lines with endpoint at 3: the top ray points right, the bottom flipped ray x < 3 points left, both open circles."
          }
        },
        {
          "stepNumber": 5,
          "description": "Interpret the solution.",
          "workingLatex": "x < 3",
          "explanation": "Any value of $x$ less than $3$ satisfies the inequality.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check a test value.",
          "workingLatex": "x = 0: \\ 10 - 3(0) = 10 > 1 \\ \\checkmark",
          "explanation": "Substituting $x = 0$ gives $10 > 1$, which is true, confirming the solution.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check a value outside.",
          "workingLatex": "x = 4: \\ 10 - 3(4) = -2 \\not> 1",
          "explanation": "Testing $x = 4$ gives $-2 > 1$, which is false, confirming values above $3$ do not work.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Express in set notation.",
          "workingLatex": "\\{x : x < 3\\}",
          "explanation": "In set notation the solution is the set of all real $x$ that are less than $3$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the answer.",
          "workingLatex": "x < 3",
          "explanation": "The solution to the inequality is $x < 3$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$10 - 3x > 1 \\Rightarrow -3x > -9 \\Rightarrow x < 3$ (dividing by $-3$ reverses the inequality)."
    }
  },
  {
    "id": "al.y1.pure.inequalities.q060",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Inequalities",
    "subtopicId": "al.y1.pure.inequalities",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "expression",
    "tags": [
      "inequalities",
      "linear",
      "double inequality"
    ],
    "questionText": "Solve the inequality $-3 < 2x - 5 \\le 3$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recognise a double inequality.",
          "workingLatex": "-3 < 2x - 5 \\le 3",
          "explanation": "This says $2x - 5$ lies between $-3$ and $3$; we operate on all three parts together.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Add 5 to all three parts.",
          "workingLatex": "-3 + 5 < 2x \\le 3 + 5",
          "explanation": "Adding $5$ throughout keeps the chain of inequalities balanced.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Simplify.",
          "workingLatex": "2 < 2x \\le 8",
          "explanation": "Working out the outer values gives $2 < 2x \\le 8$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Divide all three parts by 2.",
          "workingLatex": "1 < x \\le 4",
          "explanation": "Dividing by the positive number $2$ throughout keeps both inequality signs the same way round.",
          "diagram": {
            "kind": "numberLineInterval",
            "min": -3,
            "max": 8,
            "lower": 1,
            "upper": 4,
            "lowerClosed": false,
            "upperClosed": true,
            "label": "1 < x ≤ 4",
            "caption": "1 excluded (hollow), 4 included (solid).",
            "alt": "Number line from -3 to 8 with an open circle at 1, a solid circle at 4, and the region between them shaded."
          }
        },
        {
          "stepNumber": 5,
          "description": "Interpret the solution.",
          "workingLatex": "1 < x \\le 4",
          "explanation": "The solution is all $x$ between $1$ (excluded) and $4$ (included).",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check a value inside.",
          "workingLatex": "x = 2: \\ 2(2) - 5 = -1, \\ -3 < -1 \\le 3 \\ \\checkmark",
          "explanation": "Substituting $x = 2$ gives $-1$, which lies in the required range, confirming the solution.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check the lower boundary.",
          "workingLatex": "x = 1: \\ 2(1) - 5 = -3, \\ -3 < -3 \\text{ is false}",
          "explanation": "At $x = 1$ the value is $-3$, which is not strictly greater than $-3$, so $1$ is correctly excluded.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check the upper boundary.",
          "workingLatex": "x = 4: \\ 2(4) - 5 = 3 \\le 3 \\ \\checkmark",
          "explanation": "At $x = 4$ the value is $3$, which satisfies $\\le 3$, so $4$ is correctly included.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the answer.",
          "workingLatex": "1 < x \\le 4",
          "explanation": "The solution is $1 < x \\le 4$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$-3 < 2x - 5 \\le 3 \\Rightarrow 2 < 2x \\le 8 \\Rightarrow 1 < x \\le 4$"
    }
  },
  {
    "id": "al.y1.pure.inequalities.q061",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Inequalities",
    "subtopicId": "al.y1.pure.inequalities",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "expression",
    "tags": [
      "inequalities",
      "quadratic",
      "factorising"
    ],
    "questionText": "Solve the inequality $x^2 - 2x - 8 \\le 0$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Factorise the quadratic.",
          "workingLatex": "x^2 - 2x - 8 = (x - 4)(x + 2)",
          "explanation": "Factorising finds the critical values where the expression equals zero.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find the critical values.",
          "workingLatex": "x = 4 \\ \\text{ and } \\ x = -2",
          "explanation": "Setting each factor to zero gives the roots $4$ and $-2$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Note the shape of the parabola.",
          "workingLatex": "\\text{opens upward}",
          "explanation": "The positive $x^2$ coefficient means the parabola dips below the axis between its roots.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Decide where the curve is on or below the axis.",
          "workingLatex": "\\text{between the roots}",
          "explanation": "For an upward parabola, $\\le 0$ holds at and between the two roots.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Write the solution.",
          "workingLatex": "-2 \\le x \\le 4",
          "explanation": "The inequality $\\le 0$ holds for $x$ between $-2$ and $4$, including the roots.",
          "diagram": {
            "kind": "parabolaRegion",
            "r1": -2,
            "r2": 4,
            "opensUp": true,
            "region": "interior",
            "rootsClosed": true,
            "label": "-2 ≤ x ≤ 4",
            "caption": "x² - 2x - 8 ≤ 0: on or below the axis between the roots -2 and 4.",
            "alt": "Upward parabola crossing the x-axis at -2 and 4, shaded on and between the roots where it lies on or below the axis."
          }
        },
        {
          "stepNumber": 6,
          "description": "Express in interval notation.",
          "workingLatex": "x \\in [-2, 4]",
          "explanation": "In interval notation the solution is the closed interval from $-2$ to $4$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check a value inside.",
          "workingLatex": "x = 0: \\ (-4)(2) = -8 \\le 0 \\ \\checkmark",
          "explanation": "At $x = 0$ the product is negative, confirming the inequality holds between the roots.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check a value outside.",
          "workingLatex": "x = 5: \\ (1)(7) = 7 \\not\\le 0",
          "explanation": "At $x = 5$ the product is positive, confirming the inequality fails outside the roots.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the answer.",
          "workingLatex": "-2 \\le x \\le 4",
          "explanation": "The solution is $-2 \\le x \\le 4$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$(x-4)(x+2) \\le 0 \\Rightarrow -2 \\le x \\le 4$ (between the roots)."
    }
  },
  {
    "id": "al.y1.pure.inequalities.q062",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Inequalities",
    "subtopicId": "al.y1.pure.inequalities",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "expression",
    "tags": [
      "inequalities",
      "quadratic",
      "factorising"
    ],
    "questionText": "Solve the inequality $x^2 - 6x + 8 > 0$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Factorise the quadratic.",
          "workingLatex": "x^2 - 6x + 8 = (x - 2)(x - 4)",
          "explanation": "Factorising finds the critical values where the expression equals zero.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find the critical values.",
          "workingLatex": "x = 2 \\ \\text{ and } \\ x = 4",
          "explanation": "Setting each factor to zero gives the roots $2$ and $4$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Note the shape of the parabola.",
          "workingLatex": "\\text{opens upward}",
          "explanation": "The positive $x^2$ coefficient means the parabola lies above the axis outside its roots.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Decide where the curve is above the axis.",
          "workingLatex": "\\text{outside the roots}",
          "explanation": "For an upward parabola, $y > 0$ strictly outside the two roots.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Write the solution.",
          "workingLatex": "x < 2 \\ \\text{ or } \\ x > 4",
          "explanation": "The inequality $> 0$ holds for $x$ less than $2$ or greater than $4$.",
          "diagram": {
            "kind": "parabolaRegion",
            "r1": 2,
            "r2": 4,
            "opensUp": true,
            "region": "exterior",
            "rootsClosed": false,
            "label": "x < 2 or x > 4",
            "caption": "x² - 6x + 8 > 0: above the axis outside the roots 2 and 4.",
            "alt": "Upward parabola crossing at 2 and 4, shaded to the left of 2 and to the right of 4 where it lies above the axis."
          }
        },
        {
          "stepNumber": 6,
          "description": "Express in set notation.",
          "workingLatex": "\\{x : x < 2\\} \\cup \\{x : x > 4\\}",
          "explanation": "The solution is the union of the two outer regions, with the roots excluded.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check a value between the roots.",
          "workingLatex": "x = 3: \\ (1)(-1) = -1 \\not> 0",
          "explanation": "At $x = 3$ the product is negative, confirming the inequality fails between the roots.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check a value outside.",
          "workingLatex": "x = 5: \\ (3)(1) = 3 > 0 \\ \\checkmark",
          "explanation": "At $x = 5$ the product is positive, confirming the inequality holds outside the roots.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the answer.",
          "workingLatex": "x < 2 \\ \\text{ or } \\ x > 4",
          "explanation": "The solution is $x < 2$ or $x > 4$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$(x-2)(x-4) > 0 \\Rightarrow x < 2 \\text{ or } x > 4$ (outside the roots)."
    }
  },
  {
    "id": "al.y1.pure.inequalities.q063",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Inequalities",
    "subtopicId": "al.y1.pure.inequalities",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "expression",
    "tags": [
      "inequalities",
      "quadratic",
      "difference of squares"
    ],
    "questionText": "Solve the inequality $x^2 - 16 \\ge 0$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Factorise the difference of squares.",
          "workingLatex": "x^2 - 16 = (x - 4)(x + 4)",
          "explanation": "Since $16 = 4^2$, the expression factorises as a difference of two squares.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find the critical values.",
          "workingLatex": "x = 4 \\ \\text{ and } \\ x = -4",
          "explanation": "Setting each factor to zero gives the roots $4$ and $-4$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Note the shape of the parabola.",
          "workingLatex": "\\text{opens upward}",
          "explanation": "The positive $x^2$ coefficient means the parabola lies above the axis outside its roots.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Decide where the curve is on or above the axis.",
          "workingLatex": "\\text{outside the roots}",
          "explanation": "For an upward parabola, $\\ge 0$ holds at and outside the two roots.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Write the solution.",
          "workingLatex": "x \\le -4 \\ \\text{ or } \\ x \\ge 4",
          "explanation": "The inequality $\\ge 0$ holds for $x$ at most $-4$ or at least $4$, including the roots.",
          "diagram": {
            "kind": "parabolaRegion",
            "r1": -4,
            "r2": 4,
            "opensUp": true,
            "region": "exterior",
            "rootsClosed": true,
            "label": "x ≤ -4 or x ≥ 4",
            "caption": "x² - 16 ≥ 0: on or above the axis outside the roots -4 and 4.",
            "alt": "Upward parabola crossing at -4 and 4, shaded on and outside the roots where it lies on or above the axis."
          }
        },
        {
          "stepNumber": 6,
          "description": "Express in set notation.",
          "workingLatex": "\\{x : x \\le -4\\} \\cup \\{x : x \\ge 4\\}",
          "explanation": "The solution is the union of the two outer regions, including the boundary values.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check a value between the roots.",
          "workingLatex": "x = 0: \\ 0 - 16 = -16 \\not\\ge 0",
          "explanation": "At $x = 0$ the value is negative, confirming the inequality fails between the roots.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check a value outside.",
          "workingLatex": "x = 5: \\ 25 - 16 = 9 \\ge 0 \\ \\checkmark",
          "explanation": "At $x = 5$ the value is positive, confirming the inequality holds outside the roots.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the answer.",
          "workingLatex": "x \\le -4 \\ \\text{ or } \\ x \\ge 4",
          "explanation": "The solution is $x \\le -4$ or $x \\ge 4$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$(x-4)(x+4) \\ge 0 \\Rightarrow x \\le -4 \\text{ or } x \\ge 4$ (outside the roots)."
    }
  },
  {
    "id": "al.y1.pure.inequalities.q064",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Inequalities",
    "subtopicId": "al.y1.pure.inequalities",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "expression",
    "tags": [
      "inequalities",
      "quadratic",
      "common factor"
    ],
    "questionText": "Solve the inequality $x^2 + 4x < 0$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Factorise the quadratic.",
          "workingLatex": "x^2 + 4x = x(x + 4)",
          "explanation": "Both terms share a factor of $x$, so we factorise to find the critical values.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find the critical values.",
          "workingLatex": "x = 0 \\ \\text{ and } \\ x = -4",
          "explanation": "Setting each factor to zero gives the roots $0$ and $-4$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Note the shape of the parabola.",
          "workingLatex": "\\text{opens upward}",
          "explanation": "The positive $x^2$ coefficient means the parabola dips below the axis between its roots.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Decide where the curve is below the axis.",
          "workingLatex": "\\text{between the roots}",
          "explanation": "For an upward parabola, $y < 0$ strictly between the two roots.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Write the solution.",
          "workingLatex": "-4 < x < 0",
          "explanation": "The inequality $< 0$ holds for $x$ strictly between $-4$ and $0$.",
          "diagram": {
            "kind": "parabolaRegion",
            "r1": -4,
            "r2": 0,
            "opensUp": true,
            "region": "interior",
            "rootsClosed": false,
            "label": "-4 < x < 0",
            "caption": "x² + 4x < 0: below the axis between the roots -4 and 0.",
            "alt": "Upward parabola crossing at -4 and 0, shaded strictly between the roots where it dips below the axis."
          }
        },
        {
          "stepNumber": 6,
          "description": "Express in set notation.",
          "workingLatex": "\\{x : -4 < x < 0\\}",
          "explanation": "In set notation the solution is the set of $x$ with $-4 < x < 0$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check a value inside.",
          "workingLatex": "x = -2: \\ (-2)(2) = -4 < 0 \\ \\checkmark",
          "explanation": "At $x = -2$ the product is negative, confirming the inequality holds between the roots.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check a value outside.",
          "workingLatex": "x = 1: \\ (1)(5) = 5 \\not< 0",
          "explanation": "At $x = 1$ the product is positive, confirming the inequality fails outside the roots.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the answer.",
          "workingLatex": "-4 < x < 0",
          "explanation": "The solution is $-4 < x < 0$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x(x + 4) < 0 \\Rightarrow -4 < x < 0$ (between the roots)."
    }
  },
  {
    "id": "al.y1.pure.inequalities.q065",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Inequalities",
    "subtopicId": "al.y1.pure.inequalities",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "expression",
    "tags": [
      "inequalities",
      "quadratic",
      "difference of squares",
      "leading coefficient"
    ],
    "questionText": "Solve the inequality $4x^2 - 9 < 0$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recognise the difference of two squares.",
          "workingLatex": "4x^2 - 9 = (2x)^2 - 3^2",
          "explanation": "Since $4x^2 = (2x)^2$ and $9 = 3^2$, this is a difference of two squares.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Factorise.",
          "workingLatex": "(2x - 3)(2x + 3) < 0",
          "explanation": "The difference of squares factorises as $(2x-3)(2x+3)$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find the critical values.",
          "workingLatex": "2x - 3 = 0 \\Rightarrow x = \\tfrac{3}{2}, \\quad 2x + 3 = 0 \\Rightarrow x = -\\tfrac{3}{2}",
          "explanation": "Setting each factor to zero gives the roots $\\tfrac32$ and $-\\tfrac32$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Note the shape of the parabola.",
          "workingLatex": "\\text{coefficient of } x^2 = 4 > 0 \\Rightarrow \\text{opens upward}",
          "explanation": "A positive $x^2$ coefficient means the parabola dips below the axis between its roots.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Decide where the curve is below the axis.",
          "workingLatex": "\\text{between the roots}",
          "explanation": "For an upward parabola, $y < 0$ strictly between the two roots.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Write the solution.",
          "workingLatex": "-\\tfrac{3}{2} < x < \\tfrac{3}{2}",
          "explanation": "The inequality $< 0$ holds for $x$ strictly between $-\\tfrac32$ and $\\tfrac32$.",
          "diagram": {
            "kind": "parabolaRegion",
            "r1": -3 / 2,
            "r2": 3 / 2,
            "opensUp": true,
            "region": "interior",
            "rootsClosed": false,
            "label": "-3/2 < x < 3/2",
            "caption": "4x² - 9 < 0: below the axis between the roots -3/2 and 3/2.",
            "alt": "Upward parabola crossing at -3/2 and 3/2, shaded strictly between the roots where it dips below the axis."
          }
        },
        {
          "stepNumber": 7,
          "description": "Express in interval notation.",
          "workingLatex": "x \\in \\left(-\\tfrac{3}{2}, \\, \\tfrac{3}{2}\\right)",
          "explanation": "In interval notation the solution is the open interval from $-\\tfrac32$ to $\\tfrac32$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Test a value inside.",
          "workingLatex": "x = 0: \\ 4(0) - 9 = -9 < 0 \\ \\checkmark",
          "explanation": "At $x = 0$ the value is negative, confirming the inequality holds between the roots.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Test a value to the right.",
          "workingLatex": "x = 2: \\ 4(4) - 9 = 7 \\not< 0",
          "explanation": "At $x = 2$ the value is positive, confirming the inequality fails to the right of the roots.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Test a value to the left.",
          "workingLatex": "x = -2: \\ 4(4) - 9 = 7 \\not< 0",
          "explanation": "At $x = -2$ the value is positive, confirming the inequality fails to the left of the roots.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Confirm the boundaries are excluded.",
          "workingLatex": "\\text{strict } < 0 \\Rightarrow \\text{roots not included}",
          "explanation": "Because the inequality is strict, the roots $\\pm\\tfrac32$ (where the value is zero) are excluded.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Note the equivalent form.",
          "workingLatex": "4x^2 < 9 \\Leftrightarrow x^2 < \\tfrac{9}{4} \\Leftrightarrow |x| < \\tfrac{3}{2}",
          "explanation": "Equivalently the inequality says $|x| < \\tfrac32$, another way to see the interval.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "State the answer.",
          "workingLatex": "-\\tfrac{3}{2} < x < \\tfrac{3}{2}",
          "explanation": "The solution is $-\\tfrac32 < x < \\tfrac32$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$(2x-3)(2x+3) < 0 \\Rightarrow -\\tfrac{3}{2} < x < \\tfrac{3}{2}$ (between the roots)."
    }
  },
  {
    "id": "al.y1.pure.inequalities.q066",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Inequalities",
    "subtopicId": "al.y1.pure.inequalities",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "expression",
    "tags": [
      "inequalities",
      "quadratic",
      "leading coefficient",
      "factorising"
    ],
    "questionText": "Solve the inequality $2x^2 + x - 6 \\ge 0$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Factorise the quadratic.",
          "workingLatex": "2x^2 + x - 6 = (2x - 3)(x + 2)",
          "explanation": "Splitting the middle term (using $ac = -12$, with $4$ and $-3$) factorises this quadratic with leading coefficient $2$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find the critical values.",
          "workingLatex": "2x - 3 = 0 \\Rightarrow x = \\tfrac{3}{2}, \\quad x + 2 = 0 \\Rightarrow x = -2",
          "explanation": "Setting each factor to zero gives the roots $\\tfrac32$ and $-2$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Order the critical values.",
          "workingLatex": "-2 < \\tfrac{3}{2}",
          "explanation": "Placing the roots in order divides the number line into three regions.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Note the shape of the parabola.",
          "workingLatex": "\\text{coefficient of } x^2 = 2 > 0 \\Rightarrow \\text{opens upward}",
          "explanation": "A positive $x^2$ coefficient means the parabola lies above the axis outside its roots.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Decide where the curve is on or above the axis.",
          "workingLatex": "\\text{outside the roots}",
          "explanation": "For an upward parabola, $\\ge 0$ holds at and outside the two roots.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Write the solution.",
          "workingLatex": "x \\le -2 \\ \\text{ or } \\ x \\ge \\tfrac{3}{2}",
          "explanation": "The inequality $\\ge 0$ holds for $x$ at most $-2$ or at least $\\tfrac32$, including the roots.",
          "diagram": {
            "kind": "parabolaRegion",
            "r1": -2,
            "r2": 3 / 2,
            "opensUp": true,
            "region": "exterior",
            "rootsClosed": true,
            "label": "x ≤ -2 or x ≥ 3/2",
            "caption": "2x² + x - 6 ≥ 0: on or above the axis outside the roots -2 and 3/2.",
            "alt": "Upward parabola crossing at -2 and 3/2, shaded on and outside the roots where it lies on or above the axis."
          }
        },
        {
          "stepNumber": 7,
          "description": "Express in set notation.",
          "workingLatex": "\\{x : x \\le -2\\} \\cup \\{x : x \\ge \\tfrac{3}{2}\\}",
          "explanation": "The solution is the union of the two outer regions, including the boundary values.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Test the left region.",
          "workingLatex": "x = -3: \\ (-9)(-1) = 9 \\ge 0 \\ \\checkmark",
          "explanation": "At $x = -3$ the product is positive, confirming the inequality holds in the left region.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Test the middle region.",
          "workingLatex": "x = 0: \\ (-3)(2) = -6 \\not\\ge 0",
          "explanation": "At $x = 0$ the product is negative, confirming the inequality fails between the roots.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Test the right region.",
          "workingLatex": "x = 2: \\ (1)(4) = 4 \\ge 0 \\ \\checkmark",
          "explanation": "At $x = 2$ the product is positive, confirming the inequality holds in the right region.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Confirm the boundaries are included.",
          "workingLatex": "\\text{non-strict } \\ge 0 \\Rightarrow \\text{roots included}",
          "explanation": "Because the inequality allows equality, the roots $-2$ and $\\tfrac32$ are part of the solution.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Summarise the sign pattern.",
          "workingLatex": "+ \\ | \\ - \\ | \\ + \\quad \\text{at } -2, \\tfrac{3}{2}",
          "explanation": "The parabola is positive outside the roots and negative between them, matching the two outer regions.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "State the answer.",
          "workingLatex": "x \\le -2 \\ \\text{ or } \\ x \\ge \\tfrac{3}{2}",
          "explanation": "The solution is $x \\le -2$ or $x \\ge \\tfrac32$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$(2x-3)(x+2) \\ge 0 \\Rightarrow x \\le -2 \\text{ or } x \\ge \\tfrac{3}{2}$ (outside the roots)."
    }
  },
  {
    "id": "al.y1.pure.inequalities.q067",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Inequalities",
    "subtopicId": "al.y1.pure.inequalities",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "expression",
    "tags": [
      "inequalities",
      "quadratic",
      "negative leading coefficient"
    ],
    "questionText": "Solve the inequality $3 - 2x - x^2 \\le 0$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Multiply through by -1.",
          "workingLatex": "x^2 + 2x - 3 \\ge 0",
          "explanation": "Multiplying by $-1$ makes the $x^2$ coefficient positive, which is easier to handle — but it reverses the inequality sign.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Factorise the quadratic.",
          "workingLatex": "x^2 + 2x - 3 = (x + 3)(x - 1)",
          "explanation": "Factorising reveals the critical values where the expression is zero.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find the critical values.",
          "workingLatex": "x = -3 \\ \\text{ and } \\ x = 1",
          "explanation": "Setting each factor to zero gives the roots $-3$ and $1$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Note the shape of the rewritten parabola.",
          "workingLatex": "\\text{opens upward}",
          "explanation": "After multiplying by $-1$, the parabola $x^2 + 2x - 3$ opens upward, lying above the axis outside its roots.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Decide where the curve is on or above the axis.",
          "workingLatex": "\\text{outside the roots}",
          "explanation": "For the upward parabola, $\\ge 0$ holds at and outside the two roots.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Write the solution.",
          "workingLatex": "x \\le -3 \\ \\text{ or } \\ x \\ge 1",
          "explanation": "The inequality (equivalent to the original) holds for $x$ at most $-3$ or at least $1$.",
          "diagram": {
            "kind": "parabolaRegion",
            "r1": -3,
            "r2": 1,
            "opensUp": true,
            "region": "exterior",
            "rootsClosed": true,
            "label": "x ≤ -3 or x ≥ 1",
            "caption": "Rewritten as x² + 2x - 3 ≥ 0: on or above the axis outside the roots -3 and 1.",
            "alt": "Upward parabola crossing at -3 and 1, shaded on and outside the roots where it lies on or above the axis."
          }
        },
        {
          "stepNumber": 7,
          "description": "Express in set notation.",
          "workingLatex": "\\{x : x \\le -3\\} \\cup \\{x : x \\ge 1\\}",
          "explanation": "The solution is the union of the two outer regions, including the boundary values.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check a value outside.",
          "workingLatex": "x = 2: \\ 3 - 4 - 4 = -5 \\le 0 \\ \\checkmark",
          "explanation": "Testing $x = 2$ in the original gives $-5 \\le 0$, which is true, confirming the outer region works.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Check a value between the roots.",
          "workingLatex": "x = 0: \\ 3 - 0 - 0 = 3 \\not\\le 0",
          "explanation": "Testing $x = 0$ gives $3 \\le 0$, which is false, confirming values between the roots fail.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Check the other outer region.",
          "workingLatex": "x = -4: \\ 3 + 8 - 16 = -5 \\le 0 \\ \\checkmark",
          "explanation": "Testing $x = -4$ gives $-5 \\le 0$, which is true, confirming the left region works too.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Note the sign-flip was key.",
          "workingLatex": "\\le \\to \\ge \\text{ when multiplying by } -1",
          "explanation": "Reversing the inequality when multiplying by $-1$ was essential; skipping it would give the wrong region.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Confirm the boundaries are included.",
          "workingLatex": "\\text{non-strict} \\Rightarrow \\text{roots included}",
          "explanation": "Because the inequality allows equality, the roots $-3$ and $1$ are part of the solution.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "State the answer.",
          "workingLatex": "x \\le -3 \\ \\text{ or } \\ x \\ge 1",
          "explanation": "The solution is $x \\le -3$ or $x \\ge 1$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$3 - 2x - x^2 \\le 0 \\Rightarrow x^2 + 2x - 3 \\ge 0 \\Rightarrow (x+3)(x-1) \\ge 0 \\Rightarrow x \\le -3 \\text{ or } x \\ge 1$"
    }
  },
  {
    "id": "al.y1.pure.inequalities.q068",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Inequalities",
    "subtopicId": "al.y1.pure.inequalities",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "expression",
    "tags": [
      "inequalities",
      "quadratic",
      "rearranging"
    ],
    "questionText": "Solve the inequality $x^2 + 2x > 8$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Rearrange to standard form.",
          "workingLatex": "x^2 + 2x - 8 > 0",
          "explanation": "Bringing the $8$ across so the right side is zero prepares the quadratic for factorising.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Factorise the quadratic.",
          "workingLatex": "x^2 + 2x - 8 = (x + 4)(x - 2)",
          "explanation": "Factorising reveals the critical values where the expression is zero.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find the critical values.",
          "workingLatex": "x = -4 \\ \\text{ and } \\ x = 2",
          "explanation": "Setting each factor to zero gives the roots $-4$ and $2$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Order the critical values.",
          "workingLatex": "-4 < 2",
          "explanation": "Ordering the roots divides the number line into three regions.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Note the shape of the parabola.",
          "workingLatex": "\\text{opens upward}",
          "explanation": "The positive $x^2$ coefficient means the parabola lies above the axis outside its roots.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Decide where the curve is above the axis.",
          "workingLatex": "\\text{outside the roots}",
          "explanation": "For an upward parabola, $y > 0$ strictly outside the two roots.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Write the solution.",
          "workingLatex": "x < -4 \\ \\text{ or } \\ x > 2",
          "explanation": "The inequality $> 0$ holds for $x$ less than $-4$ or greater than $2$.",
          "diagram": {
            "kind": "parabolaRegion",
            "r1": -4,
            "r2": 2,
            "opensUp": true,
            "region": "exterior",
            "rootsClosed": false,
            "label": "x < -4 or x > 2",
            "caption": "x² + 2x - 8 > 0: above the axis outside the roots -4 and 2.",
            "alt": "Upward parabola crossing at -4 and 2, shaded to the left of -4 and to the right of 2 where it lies above the axis."
          }
        },
        {
          "stepNumber": 8,
          "description": "Express in set notation.",
          "workingLatex": "\\{x : x < -4\\} \\cup \\{x : x > 2\\}",
          "explanation": "The solution is the union of the two outer regions, with the roots excluded.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Check a value outside.",
          "workingLatex": "x = 3: \\ 9 + 6 = 15 > 8 \\ \\checkmark",
          "explanation": "Testing $x = 3$ in the original gives $15 > 8$, which is true, confirming the outer region works.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Check a value between the roots.",
          "workingLatex": "x = 0: \\ 0 + 0 = 0 \\not> 8",
          "explanation": "Testing $x = 0$ gives $0 > 8$, which is false, confirming values between the roots fail.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Check the other outer region.",
          "workingLatex": "x = -5: \\ 25 - 10 = 15 > 8 \\ \\checkmark",
          "explanation": "Testing $x = -5$ gives $15 > 8$, which is true, confirming the left region works too.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Note the boundaries are excluded.",
          "workingLatex": "\\text{strict } > \\Rightarrow \\text{roots not included}",
          "explanation": "Because the inequality is strict, the roots $-4$ and $2$ are excluded from the solution.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "State the answer.",
          "workingLatex": "x < -4 \\ \\text{ or } \\ x > 2",
          "explanation": "The solution is $x < -4$ or $x > 2$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x^2 + 2x > 8 \\Rightarrow x^2 + 2x - 8 = (x+4)(x-2) > 0 \\Rightarrow x < -4 \\text{ or } x > 2$"
    }
  },
  {
    "id": "al.y1.pure.inequalities.q069",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Inequalities",
    "subtopicId": "al.y1.pure.inequalities",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "expression",
    "tags": [
      "inequalities",
      "discriminant",
      "no real roots",
      "range of a parameter"
    ],
    "questionText": "Find the range of values of $k$ for which the equation $x^2 + kx + 9 = 0$ has no real roots.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the condition for no real roots.",
          "workingLatex": "\\Delta = b^2 - 4ac < 0",
          "explanation": "A quadratic has no real roots exactly when its discriminant is strictly negative.",
          "diagram": {
            "kind": "discriminantTriad",
            "highlight": [
              "none"
            ],
            "caption": "'No real roots' needs Δ < 0 — the parabola misses the x-axis.",
            "alt": "Three discriminant panels; the Δ < 0 panel (no real roots, parabola not touching the axis) is highlighted."
          }
        },
        {
          "stepNumber": 2,
          "description": "Identify the coefficients.",
          "workingLatex": "a = 1,\\ b = k,\\ c = 9",
          "explanation": "Here the middle coefficient is the unknown $k$, which the condition will constrain.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write the discriminant.",
          "workingLatex": "\\Delta = k^2 - 4(1)(9) = k^2 - 36",
          "explanation": "Substituting the coefficients into $b^2 - 4ac$ gives $k^2 - 36$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Set up the inequality.",
          "workingLatex": "k^2 - 36 < 0",
          "explanation": "For no real roots the discriminant must be strictly negative.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Factorise.",
          "workingLatex": "(k - 6)(k + 6) < 0",
          "explanation": "The left-hand side is a difference of squares, so it factorises as $(k-6)(k+6)$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find the critical values.",
          "workingLatex": "k = 6 \\ \\text{ and } \\ k = -6",
          "explanation": "The expression is zero at $k = 6$ and $k = -6$, dividing the $k$-line into regions.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Note the shape in k.",
          "workingLatex": "\\text{upward parabola in } k \\Rightarrow < 0 \\text{ between roots}",
          "explanation": "As an upward parabola in $k$, the expression is negative strictly between its two roots.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Write the range.",
          "workingLatex": "-6 < k < 6",
          "explanation": "The discriminant is negative precisely for $k$ strictly between $-6$ and $6$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Test a value inside.",
          "workingLatex": "k = 0: \\ 0 - 36 = -36 < 0 \\ \\checkmark",
          "explanation": "At $k = 0$ the discriminant is negative, so there are no real roots — confirming the range.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Test a value outside.",
          "workingLatex": "k = 7: \\ 49 - 36 = 13 > 0",
          "explanation": "At $k = 7$ the discriminant is positive, so there are two real roots — confirming the outside is excluded.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Test the boundary.",
          "workingLatex": "k = 6: \\ 36 - 36 = 0",
          "explanation": "At $k = 6$ the discriminant is zero, giving a repeated (still real) root, so $6$ is excluded.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Confirm the boundaries are excluded.",
          "workingLatex": "\\text{strict } < 0 \\Rightarrow k = \\pm 6 \\text{ excluded}",
          "explanation": "Since we need the discriminant strictly negative, the boundary values $\\pm 6$ do not satisfy the condition.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "State the answer.",
          "workingLatex": "-6 < k < 6",
          "explanation": "The equation has no real roots when $-6 < k < 6$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\Delta = k^2 - 36 < 0 \\Rightarrow (k-6)(k+6) < 0 \\Rightarrow -6 < k < 6$"
    }
  },
  {
    "id": "al.y1.pure.inequalities.q070",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Inequalities",
    "subtopicId": "al.y1.pure.inequalities",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "expression",
    "tags": [
      "inequalities",
      "combined",
      "quadratic and linear",
      "intersection of solutions"
    ],
    "questionText": "Find the values of $x$ that satisfy both $x^2 - 9 \\le 0$ and $x - 1 > 0$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Solve the quadratic inequality first.",
          "workingLatex": "x^2 - 9 \\le 0",
          "explanation": "We solve each inequality separately, then combine the solution sets.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Factorise the quadratic.",
          "workingLatex": "(x - 3)(x + 3) \\le 0",
          "explanation": "The difference of squares factorises, giving critical values $3$ and $-3$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Note the shape.",
          "workingLatex": "\\text{opens upward} \\Rightarrow \\le 0 \\text{ between roots}",
          "explanation": "An upward parabola is on or below the axis between its roots.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Solve the quadratic inequality.",
          "workingLatex": "-3 \\le x \\le 3",
          "explanation": "So $x^2 - 9 \\le 0$ holds for $-3 \\le x \\le 3$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve the linear inequality.",
          "workingLatex": "x - 1 > 0 \\Rightarrow x > 1",
          "explanation": "Adding $1$ to both sides gives $x > 1$ for the second condition.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Set up the overlap.",
          "workingLatex": "-3 \\le x \\le 3 \\ \\text{ and } \\ x > 1",
          "explanation": "Both conditions must hold at once, so we find where the two solution sets overlap.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Take the more restrictive lower bound.",
          "workingLatex": "x > 1 \\text{ beats } x \\ge -3",
          "explanation": "Since $1$ is greater than $-3$, the binding lower limit is $x > 1$ (and $1$ is excluded).",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Keep the upper bound.",
          "workingLatex": "x \\le 3",
          "explanation": "The upper limit $x \\le 3$ from the quadratic still applies, with $3$ included.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Combine into one range.",
          "workingLatex": "1 < x \\le 3",
          "explanation": "The overlap of the two solution sets is $1 < x \\le 3$.",
          "diagram": {
            "kind": "intersectionStack",
            "min": -5,
            "max": 5,
            "rows": [
              {
                "label": "x² - 9 ≤ 0",
                "intervals": [
                  {
                    "from": -3,
                    "to": 3,
                    "fromClosed": true,
                    "toClosed": true
                  }
                ]
              },
              {
                "label": "x - 1 > 0",
                "intervals": [
                  {
                    "from": 1,
                    "to": null,
                    "fromClosed": false
                  }
                ]
              },
              {
                "label": "both",
                "highlight": true,
                "intervals": [
                  {
                    "from": 1,
                    "to": 3,
                    "fromClosed": false,
                    "toClosed": true
                  }
                ]
              }
            ],
            "caption": "The answer is where BOTH conditions are shaded: 1 < x ≤ 3.",
            "alt": "Three stacked number lines: x² - 9 ≤ 0 shaded from -3 to 3, x - 1 > 0 shaded to the right of 1, and the highlighted overlap from just above 1 to 3."
          }
        },
        {
          "stepNumber": 10,
          "description": "Express in interval notation.",
          "workingLatex": "x \\in (1, 3]",
          "explanation": "In interval notation the solution is the half-open interval from $1$ (excluded) to $3$ (included).",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Check a value inside.",
          "workingLatex": "x = 2: \\ 4 - 9 = -5 \\le 0, \\ 2 - 1 = 1 > 0 \\ \\checkmark",
          "explanation": "At $x = 2$ both inequalities hold, confirming the overlap is correct.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Check a value outside.",
          "workingLatex": "x = 0: \\ x - 1 = -1 \\not> 0",
          "explanation": "At $x = 0$ the condition $x - 1 > 0$ fails, confirming values at most $1$ are excluded.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "State the answer.",
          "workingLatex": "1 < x \\le 3",
          "explanation": "The values satisfying both inequalities are $1 < x \\le 3$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x^2 - 9 \\le 0 \\Rightarrow -3 \\le x \\le 3$; with $x > 1$ the overlap is $1 < x \\le 3$."
    }
  }
];
