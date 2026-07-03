import { Question } from "@/lib/types";

export const questions: Question[] = [
  {
    "id": "al.y1.pure.simultaneous.q001",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Simultaneous equations",
    "subtopicId": "al.y1.pure.simultaneous",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": [
      "simultaneous equations",
      "elimination",
      "linear"
    ],
    "questionText": "Solve the simultaneous equations $x + y = 7$ and $x - y = 3$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Label the equations.",
          "workingLatex": "x + y = 7 \\ (1), \\quad x - y = 3 \\ (2)",
          "explanation": "Numbering the two equations lets us refer to them clearly while combining them.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Choose a variable to eliminate.",
          "workingLatex": "\\text{add (1) and (2) to remove } y",
          "explanation": "The $+y$ in equation (1) and $-y$ in equation (2) are opposites, so adding the equations cancels $y$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Add the equations.",
          "workingLatex": "(x + y) + (x - y) = 7 + 3",
          "explanation": "Adding the left sides and the right sides keeps the equation balanced.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Simplify to find x.",
          "workingLatex": "2x = 10 \\Rightarrow x = 5",
          "explanation": "The $y$ terms cancel, leaving $2x = 10$, so $x = 5$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute back to find y.",
          "workingLatex": "5 + y = 7 \\Rightarrow y = 2",
          "explanation": "Putting $x = 5$ into equation (1) gives $y = 2$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check in the other equation.",
          "workingLatex": "5 - 2 = 3 \\ \\checkmark",
          "explanation": "Substituting into equation (2) confirms the values satisfy both equations.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the solution.",
          "workingLatex": "x = 5, \\ y = 2",
          "explanation": "The solution is $x = 5$ and $y = 2$.",
          "diagram": null
        }
      ],
      "finalAnswer": "Adding gives $2x = 10 \\Rightarrow x = 5$, then $y = 2$. Solution: $x = 5,\\ y = 2$."
    }
  },
  {
    "id": "al.y1.pure.simultaneous.q002",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Simultaneous equations",
    "subtopicId": "al.y1.pure.simultaneous",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": [
      "simultaneous equations",
      "elimination",
      "linear"
    ],
    "questionText": "Solve the simultaneous equations $2x + y = 8$ and $x - y = 1$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Label the equations.",
          "workingLatex": "2x + y = 8 \\ (1), \\quad x - y = 1 \\ (2)",
          "explanation": "Numbering the equations makes the elimination step easy to follow.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Choose a variable to eliminate.",
          "workingLatex": "\\text{add (1) and (2) to remove } y",
          "explanation": "The $+y$ and $-y$ are opposites, so adding the two equations cancels $y$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Add the equations.",
          "workingLatex": "(2x + y) + (x - y) = 8 + 1",
          "explanation": "Adding the two equations term by term keeps things balanced.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Simplify to find x.",
          "workingLatex": "3x = 9 \\Rightarrow x = 3",
          "explanation": "The $y$ terms cancel, leaving $3x = 9$, so $x = 3$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute back to find y.",
          "workingLatex": "2(3) + y = 8 \\Rightarrow y = 2",
          "explanation": "Putting $x = 3$ into equation (1) gives $6 + y = 8$, so $y = 2$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check in the other equation.",
          "workingLatex": "3 - 2 = 1 \\ \\checkmark",
          "explanation": "Substituting into equation (2) confirms the solution satisfies both equations.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the solution.",
          "workingLatex": "x = 3, \\ y = 2",
          "explanation": "The solution is $x = 3$ and $y = 2$.",
          "diagram": null
        }
      ],
      "finalAnswer": "Adding gives $3x = 9 \\Rightarrow x = 3$, then $y = 2$. Solution: $x = 3,\\ y = 2$."
    }
  },
  {
    "id": "al.y1.pure.simultaneous.q003",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Simultaneous equations",
    "subtopicId": "al.y1.pure.simultaneous",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": [
      "simultaneous equations",
      "elimination",
      "linear"
    ],
    "questionText": "Solve the simultaneous equations $x + y = 10$ and $2x - y = 2$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Label the equations.",
          "workingLatex": "x + y = 10 \\ (1), \\quad 2x - y = 2 \\ (2)",
          "explanation": "Numbering the equations helps keep track when we combine them.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Choose a variable to eliminate.",
          "workingLatex": "\\text{add (1) and (2) to remove } y",
          "explanation": "The $+y$ and $-y$ are opposites, so adding the equations cancels $y$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Add the equations.",
          "workingLatex": "(x + y) + (2x - y) = 10 + 2",
          "explanation": "Adding the two equations term by term eliminates the $y$ terms.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Simplify to find x.",
          "workingLatex": "3x = 12 \\Rightarrow x = 4",
          "explanation": "The $y$ terms cancel, leaving $3x = 12$, so $x = 4$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute back to find y.",
          "workingLatex": "4 + y = 10 \\Rightarrow y = 6",
          "explanation": "Putting $x = 4$ into equation (1) gives $y = 6$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check in the other equation.",
          "workingLatex": "2(4) - 6 = 8 - 6 = 2 \\ \\checkmark",
          "explanation": "Substituting into equation (2) confirms the solution satisfies both equations.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the solution.",
          "workingLatex": "x = 4, \\ y = 6",
          "explanation": "The solution is $x = 4$ and $y = 6$.",
          "diagram": null
        }
      ],
      "finalAnswer": "Adding gives $3x = 12 \\Rightarrow x = 4$, then $y = 6$. Solution: $x = 4,\\ y = 6$."
    }
  },
  {
    "id": "al.y1.pure.simultaneous.q004",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Simultaneous equations",
    "subtopicId": "al.y1.pure.simultaneous",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": [
      "simultaneous equations",
      "elimination",
      "linear"
    ],
    "questionText": "Solve the simultaneous equations $3x - y = 5$ and $x + y = 7$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Label the equations.",
          "workingLatex": "3x - y = 5 \\ (1), \\quad x + y = 7 \\ (2)",
          "explanation": "Numbering the equations makes combining them clearer.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Choose a variable to eliminate.",
          "workingLatex": "\\text{add (1) and (2) to remove } y",
          "explanation": "The $-y$ in (1) and $+y$ in (2) are opposites, so adding cancels $y$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Add the equations.",
          "workingLatex": "(3x - y) + (x + y) = 5 + 7",
          "explanation": "Adding term by term removes the $y$ terms.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Simplify to find x.",
          "workingLatex": "4x = 12 \\Rightarrow x = 3",
          "explanation": "The $y$ terms cancel, leaving $4x = 12$, so $x = 3$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute back to find y.",
          "workingLatex": "3 + y = 7 \\Rightarrow y = 4",
          "explanation": "Putting $x = 3$ into equation (2) gives $y = 4$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check in the other equation.",
          "workingLatex": "3(3) - 4 = 9 - 4 = 5 \\ \\checkmark",
          "explanation": "Substituting into equation (1) confirms the solution satisfies both equations.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the solution.",
          "workingLatex": "x = 3, \\ y = 4",
          "explanation": "The solution is $x = 3$ and $y = 4$.",
          "diagram": null
        }
      ],
      "finalAnswer": "Adding gives $4x = 12 \\Rightarrow x = 3$, then $y = 4$. Solution: $x = 3,\\ y = 4$."
    }
  },
  {
    "id": "al.y1.pure.simultaneous.q005",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Simultaneous equations",
    "subtopicId": "al.y1.pure.simultaneous",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": [
      "simultaneous equations",
      "substitution",
      "linear"
    ],
    "questionText": "Solve the simultaneous equations $y = 2x$ and $x + y = 9$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Note one variable is already isolated.",
          "workingLatex": "y = 2x",
          "explanation": "Because $y$ is given directly in terms of $x$, substitution is the quickest method.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute into the other equation.",
          "workingLatex": "x + 2x = 9",
          "explanation": "Replacing $y$ with $2x$ in $x + y = 9$ gives an equation in $x$ alone.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Simplify.",
          "workingLatex": "3x = 9",
          "explanation": "Collecting the $x$ terms gives $3x = 9$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Solve for x.",
          "workingLatex": "x = 3",
          "explanation": "Dividing both sides by $3$ gives $x = 3$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find y.",
          "workingLatex": "y = 2(3) = 6",
          "explanation": "Substituting $x = 3$ into $y = 2x$ gives $y = 6$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check.",
          "workingLatex": "3 + 6 = 9 \\ \\checkmark",
          "explanation": "Substituting into $x + y = 9$ confirms the solution.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the solution.",
          "workingLatex": "x = 3, \\ y = 6",
          "explanation": "The solution is $x = 3$ and $y = 6$.",
          "diagram": null
        }
      ],
      "finalAnswer": "Substituting $y = 2x$: $3x = 9 \\Rightarrow x = 3$, $y = 6$. Solution: $x = 3,\\ y = 6$."
    }
  },
  {
    "id": "al.y1.pure.simultaneous.q006",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Simultaneous equations",
    "subtopicId": "al.y1.pure.simultaneous",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": [
      "simultaneous equations",
      "substitution",
      "linear"
    ],
    "questionText": "Solve the simultaneous equations $y = x - 2$ and $2x + y = 10$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Note one variable is already isolated.",
          "workingLatex": "y = x - 2",
          "explanation": "Since $y$ is expressed in terms of $x$, we substitute it into the other equation.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute into the other equation.",
          "workingLatex": "2x + (x - 2) = 10",
          "explanation": "Replacing $y$ with $x - 2$ in $2x + y = 10$ gives an equation in $x$ alone.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Simplify.",
          "workingLatex": "3x - 2 = 10",
          "explanation": "Collecting the $x$ terms and the constant gives $3x - 2 = 10$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Solve for x.",
          "workingLatex": "3x = 12 \\Rightarrow x = 4",
          "explanation": "Adding $2$ then dividing by $3$ gives $x = 4$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find y.",
          "workingLatex": "y = 4 - 2 = 2",
          "explanation": "Substituting $x = 4$ into $y = x - 2$ gives $y = 2$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check.",
          "workingLatex": "2(4) + 2 = 8 + 2 = 10 \\ \\checkmark",
          "explanation": "Substituting into $2x + y = 10$ confirms the solution.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the solution.",
          "workingLatex": "x = 4, \\ y = 2",
          "explanation": "The solution is $x = 4$ and $y = 2$.",
          "diagram": null
        }
      ],
      "finalAnswer": "Substituting $y = x - 2$: $3x - 2 = 10 \\Rightarrow x = 4$, $y = 2$. Solution: $x = 4,\\ y = 2$."
    }
  },
  {
    "id": "al.y1.pure.simultaneous.q007",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Simultaneous equations",
    "subtopicId": "al.y1.pure.simultaneous",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": [
      "simultaneous equations",
      "substitution",
      "linear"
    ],
    "questionText": "Solve the simultaneous equations $y = x + 1$ and $4x - y = 5$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Note one variable is already isolated.",
          "workingLatex": "y = x + 1",
          "explanation": "Since $y$ is given in terms of $x$, substitution is the natural method.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute into the other equation.",
          "workingLatex": "4x - (x + 1) = 5",
          "explanation": "Replacing $y$ with $x + 1$ in $4x - y = 5$ gives an equation in $x$ alone; note the bracket keeps the sign correct.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Remove the bracket.",
          "workingLatex": "4x - x - 1 = 5",
          "explanation": "Distributing the minus sign changes both terms inside the bracket.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Simplify.",
          "workingLatex": "3x - 1 = 5",
          "explanation": "Collecting the $x$ terms gives $3x - 1 = 5$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve for x.",
          "workingLatex": "3x = 6 \\Rightarrow x = 2",
          "explanation": "Adding $1$ then dividing by $3$ gives $x = 2$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find y.",
          "workingLatex": "y = 2 + 1 = 3",
          "explanation": "Substituting $x = 2$ into $y = x + 1$ gives $y = 3$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check.",
          "workingLatex": "4(2) - 3 = 8 - 3 = 5 \\ \\checkmark",
          "explanation": "Substituting into $4x - y = 5$ confirms the solution.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State the solution.",
          "workingLatex": "x = 2, \\ y = 3",
          "explanation": "The solution is $x = 2$ and $y = 3$.",
          "diagram": null
        }
      ],
      "finalAnswer": "Substituting $y = x + 1$: $3x - 1 = 5 \\Rightarrow x = 2$, $y = 3$. Solution: $x = 2,\\ y = 3$."
    }
  },
  {
    "id": "al.y1.pure.simultaneous.q008",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Simultaneous equations",
    "subtopicId": "al.y1.pure.simultaneous",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": [
      "simultaneous equations",
      "substitution",
      "linear"
    ],
    "questionText": "Solve the simultaneous equations $x = 2y$ and $3x - y = 10$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Note one variable is already isolated.",
          "workingLatex": "x = 2y",
          "explanation": "Since $x$ is given in terms of $y$, we substitute it into the other equation.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute into the other equation.",
          "workingLatex": "3(2y) - y = 10",
          "explanation": "Replacing $x$ with $2y$ in $3x - y = 10$ gives an equation in $y$ alone.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Simplify.",
          "workingLatex": "6y - y = 10 \\Rightarrow 5y = 10",
          "explanation": "Multiplying out and collecting the $y$ terms gives $5y = 10$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Solve for y.",
          "workingLatex": "y = 2",
          "explanation": "Dividing both sides by $5$ gives $y = 2$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find x.",
          "workingLatex": "x = 2(2) = 4",
          "explanation": "Substituting $y = 2$ into $x = 2y$ gives $x = 4$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check.",
          "workingLatex": "3(4) - 2 = 12 - 2 = 10 \\ \\checkmark",
          "explanation": "Substituting into $3x - y = 10$ confirms the solution.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the solution.",
          "workingLatex": "x = 4, \\ y = 2",
          "explanation": "The solution is $x = 4$ and $y = 2$.",
          "diagram": null
        }
      ],
      "finalAnswer": "Substituting $x = 2y$: $5y = 10 \\Rightarrow y = 2$, $x = 4$. Solution: $x = 4,\\ y = 2$."
    }
  },
  {
    "id": "al.y1.pure.simultaneous.q009",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Simultaneous equations",
    "subtopicId": "al.y1.pure.simultaneous",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "expression",
    "tags": [
      "simultaneous equations",
      "elimination",
      "linear"
    ],
    "questionText": "Solve the simultaneous equations $2x + 3y = 12$ and $4x - 3y = 6$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Label the equations.",
          "workingLatex": "2x + 3y = 12 \\ (1), \\quad 4x - 3y = 6 \\ (2)",
          "explanation": "Numbering the equations helps track the elimination.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Spot the matching coefficients.",
          "workingLatex": "+3y \\text{ and } -3y",
          "explanation": "The $y$ terms already have equal and opposite coefficients, so adding the equations will eliminate $y$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Add the equations.",
          "workingLatex": "(2x + 3y) + (4x - 3y) = 12 + 6",
          "explanation": "Adding term by term removes the $y$ terms.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Simplify to find x.",
          "workingLatex": "6x = 18 \\Rightarrow x = 3",
          "explanation": "The $y$ terms cancel, leaving $6x = 18$, so $x = 3$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute back.",
          "workingLatex": "2(3) + 3y = 12",
          "explanation": "Putting $x = 3$ into equation (1) gives an equation in $y$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Simplify.",
          "workingLatex": "6 + 3y = 12 \\Rightarrow 3y = 6",
          "explanation": "Subtracting $6$ from both sides gives $3y = 6$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Solve for y.",
          "workingLatex": "y = 2",
          "explanation": "Dividing by $3$ gives $y = 2$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check in the other equation.",
          "workingLatex": "4(3) - 3(2) = 12 - 6 = 6 \\ \\checkmark",
          "explanation": "Substituting into equation (2) confirms both equations are satisfied.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the solution.",
          "workingLatex": "x = 3, \\ y = 2",
          "explanation": "The solution is $x = 3$ and $y = 2$.",
          "diagram": null
        }
      ],
      "finalAnswer": "Adding gives $6x = 18 \\Rightarrow x = 3$, then $y = 2$. Solution: $x = 3,\\ y = 2$."
    }
  },
  {
    "id": "al.y1.pure.simultaneous.q010",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Simultaneous equations",
    "subtopicId": "al.y1.pure.simultaneous",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "expression",
    "tags": [
      "simultaneous equations",
      "elimination",
      "linear"
    ],
    "questionText": "Solve the simultaneous equations $5x + 2y = 16$ and $3x - 2y = 0$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Label the equations.",
          "workingLatex": "5x + 2y = 16 \\ (1), \\quad 3x - 2y = 0 \\ (2)",
          "explanation": "Numbering the equations helps track the elimination.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Spot the matching coefficients.",
          "workingLatex": "+2y \\text{ and } -2y",
          "explanation": "The $y$ terms have equal and opposite coefficients, so adding will eliminate $y$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Add the equations.",
          "workingLatex": "(5x + 2y) + (3x - 2y) = 16 + 0",
          "explanation": "Adding term by term removes the $y$ terms.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Simplify to find x.",
          "workingLatex": "8x = 16 \\Rightarrow x = 2",
          "explanation": "The $y$ terms cancel, leaving $8x = 16$, so $x = 2$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute back.",
          "workingLatex": "3(2) - 2y = 0",
          "explanation": "Putting $x = 2$ into equation (2) gives an equation in $y$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Simplify.",
          "workingLatex": "6 - 2y = 0 \\Rightarrow 2y = 6",
          "explanation": "Rearranging gives $2y = 6$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Solve for y.",
          "workingLatex": "y = 3",
          "explanation": "Dividing by $2$ gives $y = 3$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check in the other equation.",
          "workingLatex": "5(2) + 2(3) = 10 + 6 = 16 \\ \\checkmark",
          "explanation": "Substituting into equation (1) confirms both equations are satisfied.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the solution.",
          "workingLatex": "x = 2, \\ y = 3",
          "explanation": "The solution is $x = 2$ and $y = 3$.",
          "diagram": null
        }
      ],
      "finalAnswer": "Adding gives $8x = 16 \\Rightarrow x = 2$, then $y = 3$. Solution: $x = 2,\\ y = 3$."
    }
  },
  {
    "id": "al.y1.pure.simultaneous.q011",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Simultaneous equations",
    "subtopicId": "al.y1.pure.simultaneous",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "expression",
    "tags": [
      "simultaneous equations",
      "elimination",
      "scaling",
      "linear"
    ],
    "questionText": "Solve the simultaneous equations $4x + 3y = 18$ and $2x + y = 8$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Label the equations.",
          "workingLatex": "4x + 3y = 18 \\ (1), \\quad 2x + y = 8 \\ (2)",
          "explanation": "The coefficients do not match yet, so we scale one equation before eliminating.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Scale equation (2).",
          "workingLatex": "3 \\times (2): \\ 6x + 3y = 24 \\ (3)",
          "explanation": "Multiplying equation (2) by $3$ makes its $y$ coefficient match the $3y$ in equation (1).",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Subtract to eliminate y.",
          "workingLatex": "(3) - (1): \\ (6x + 3y) - (4x + 3y) = 24 - 18",
          "explanation": "Both equations now have $3y$, so subtracting removes the $y$ terms.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Simplify to find x.",
          "workingLatex": "2x = 6 \\Rightarrow x = 3",
          "explanation": "The $y$ terms cancel, leaving $2x = 6$, so $x = 3$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute back.",
          "workingLatex": "2(3) + y = 8",
          "explanation": "Putting $x = 3$ into equation (2) gives an equation in $y$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Simplify.",
          "workingLatex": "6 + y = 8 \\Rightarrow y = 2",
          "explanation": "Subtracting $6$ gives $y = 2$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the intermediate solution.",
          "workingLatex": "x = 3, \\ y = 2",
          "explanation": "So far we have $x = 3$ and $y = 2$; we check before finalising.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check in equation (1).",
          "workingLatex": "4(3) + 3(2) = 12 + 6 = 18 \\ \\checkmark",
          "explanation": "Substituting into equation (1) confirms both equations are satisfied.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the solution.",
          "workingLatex": "x = 3, \\ y = 2",
          "explanation": "The solution is $x = 3$ and $y = 2$.",
          "diagram": null
        }
      ],
      "finalAnswer": "Scaling (2) by 3 and subtracting: $2x = 6 \\Rightarrow x = 3$, then $y = 2$. Solution: $x = 3,\\ y = 2$."
    }
  },
  {
    "id": "al.y1.pure.simultaneous.q012",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Simultaneous equations",
    "subtopicId": "al.y1.pure.simultaneous",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "expression",
    "tags": [
      "simultaneous equations",
      "elimination",
      "scaling",
      "linear"
    ],
    "questionText": "Solve the simultaneous equations $3x + 2y = 16$ and $2x - y = 6$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Label the equations.",
          "workingLatex": "3x + 2y = 16 \\ (1), \\quad 2x - y = 6 \\ (2)",
          "explanation": "The coefficients do not match, so we scale one equation first.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Scale equation (2).",
          "workingLatex": "2 \\times (2): \\ 4x - 2y = 12 \\ (3)",
          "explanation": "Multiplying equation (2) by $2$ makes its $y$ coefficient $-2y$, opposite to the $+2y$ in (1).",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Add to eliminate y.",
          "workingLatex": "(1) + (3): \\ (3x + 2y) + (4x - 2y) = 16 + 12",
          "explanation": "The $+2y$ and $-2y$ now cancel when the equations are added.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Simplify to find x.",
          "workingLatex": "7x = 28 \\Rightarrow x = 4",
          "explanation": "The $y$ terms cancel, leaving $7x = 28$, so $x = 4$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute back.",
          "workingLatex": "2(4) - y = 6",
          "explanation": "Putting $x = 4$ into equation (2) gives an equation in $y$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Simplify.",
          "workingLatex": "8 - y = 6 \\Rightarrow y = 2",
          "explanation": "Rearranging gives $y = 2$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the intermediate solution.",
          "workingLatex": "x = 4, \\ y = 2",
          "explanation": "So far we have $x = 4$ and $y = 2$; we verify before finalising.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check in equation (1).",
          "workingLatex": "3(4) + 2(2) = 12 + 4 = 16 \\ \\checkmark",
          "explanation": "Substituting into equation (1) confirms both equations are satisfied.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the solution.",
          "workingLatex": "x = 4, \\ y = 2",
          "explanation": "The solution is $x = 4$ and $y = 2$.",
          "diagram": null
        }
      ],
      "finalAnswer": "Scaling (2) by 2 and adding: $7x = 28 \\Rightarrow x = 4$, then $y = 2$. Solution: $x = 4,\\ y = 2$."
    }
  },
  {
    "id": "al.y1.pure.simultaneous.q013",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Simultaneous equations",
    "subtopicId": "al.y1.pure.simultaneous",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "expression",
    "tags": [
      "simultaneous equations",
      "elimination",
      "scaling",
      "linear"
    ],
    "questionText": "Solve the simultaneous equations $2x + 5y = 16$ and $3x - 2y = 5$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Label the equations.",
          "workingLatex": "2x + 5y = 16 \\ (1), \\quad 3x - 2y = 5 \\ (2)",
          "explanation": "No coefficients match, so we scale both equations to eliminate $y$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Scale equation (1).",
          "workingLatex": "2 \\times (1): \\ 4x + 10y = 32 \\ (3)",
          "explanation": "Multiplying (1) by $2$ makes the $y$ coefficient $10y$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Scale equation (2).",
          "workingLatex": "5 \\times (2): \\ 15x - 10y = 25 \\ (4)",
          "explanation": "Multiplying (2) by $5$ makes the $y$ coefficient $-10y$, opposite to $(3)$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Add to eliminate y.",
          "workingLatex": "(3) + (4): \\ 19x = 57",
          "explanation": "The $+10y$ and $-10y$ cancel when we add, leaving an equation in $x$ only.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve for x.",
          "workingLatex": "x = 3",
          "explanation": "Dividing $57$ by $19$ gives $x = 3$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute back.",
          "workingLatex": "2(3) + 5y = 16",
          "explanation": "Putting $x = 3$ into equation (1) gives an equation in $y$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Simplify.",
          "workingLatex": "6 + 5y = 16 \\Rightarrow 5y = 10",
          "explanation": "Subtracting $6$ gives $5y = 10$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Solve for y.",
          "workingLatex": "y = 2",
          "explanation": "Dividing by $5$ gives $y = 2$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Check in equation (2).",
          "workingLatex": "3(3) - 2(2) = 9 - 4 = 5 \\ \\checkmark",
          "explanation": "Substituting into equation (2) confirms both equations are satisfied.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the solution.",
          "workingLatex": "x = 3, \\ y = 2",
          "explanation": "The solution is $x = 3$ and $y = 2$.",
          "diagram": null
        }
      ],
      "finalAnswer": "Scaling to $\\pm 10y$ and adding: $19x = 57 \\Rightarrow x = 3$, then $y = 2$. Solution: $x = 3,\\ y = 2$."
    }
  },
  {
    "id": "al.y1.pure.simultaneous.q014",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Simultaneous equations",
    "subtopicId": "al.y1.pure.simultaneous",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "expression",
    "tags": [
      "simultaneous equations",
      "substitution",
      "linear"
    ],
    "questionText": "Solve the simultaneous equations $y = 2x - 1$ and $3x + y = 14$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Note one variable is isolated.",
          "workingLatex": "y = 2x - 1",
          "explanation": "Since $y$ is given in terms of $x$, substitution is the efficient method.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute into the other equation.",
          "workingLatex": "3x + (2x - 1) = 14",
          "explanation": "Replacing $y$ with $2x - 1$ in $3x + y = 14$ gives an equation in $x$ alone.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Remove the bracket.",
          "workingLatex": "3x + 2x - 1 = 14",
          "explanation": "Removing the bracket keeps the terms in order.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Simplify.",
          "workingLatex": "5x - 1 = 14",
          "explanation": "Collecting the $x$ terms gives $5x - 1 = 14$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve for x.",
          "workingLatex": "5x = 15 \\Rightarrow x = 3",
          "explanation": "Adding $1$ then dividing by $5$ gives $x = 3$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find y.",
          "workingLatex": "y = 2(3) - 1 = 5",
          "explanation": "Substituting $x = 3$ into $y = 2x - 1$ gives $y = 5$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check.",
          "workingLatex": "3(3) + 5 = 9 + 5 = 14 \\ \\checkmark",
          "explanation": "Substituting into $3x + y = 14$ confirms the solution.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State the intermediate result.",
          "workingLatex": "x = 3, \\ y = 5",
          "explanation": "Both equations are satisfied, so we record the solution.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the solution.",
          "workingLatex": "x = 3, \\ y = 5",
          "explanation": "The solution is $x = 3$ and $y = 5$.",
          "diagram": null
        }
      ],
      "finalAnswer": "Substituting $y = 2x - 1$: $5x - 1 = 14 \\Rightarrow x = 3$, $y = 5$. Solution: $x = 3,\\ y = 5$."
    }
  },
  {
    "id": "al.y1.pure.simultaneous.q015",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Simultaneous equations",
    "subtopicId": "al.y1.pure.simultaneous",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "expression",
    "tags": [
      "simultaneous equations",
      "substitution",
      "linear"
    ],
    "questionText": "Solve the simultaneous equations $x = 3y - 1$ and $2x + y = 12$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Note one variable is isolated.",
          "workingLatex": "x = 3y - 1",
          "explanation": "Since $x$ is given in terms of $y$, we substitute it into the other equation.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute into the other equation.",
          "workingLatex": "2(3y - 1) + y = 12",
          "explanation": "Replacing $x$ with $3y - 1$ in $2x + y = 12$ gives an equation in $y$ alone.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Expand the bracket.",
          "workingLatex": "6y - 2 + y = 12",
          "explanation": "Multiplying $2$ through the bracket gives $6y - 2$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Simplify.",
          "workingLatex": "7y - 2 = 12",
          "explanation": "Collecting the $y$ terms gives $7y - 2 = 12$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve for y.",
          "workingLatex": "7y = 14 \\Rightarrow y = 2",
          "explanation": "Adding $2$ then dividing by $7$ gives $y = 2$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find x.",
          "workingLatex": "x = 3(2) - 1 = 5",
          "explanation": "Substituting $y = 2$ into $x = 3y - 1$ gives $x = 5$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check.",
          "workingLatex": "2(5) + 2 = 10 + 2 = 12 \\ \\checkmark",
          "explanation": "Substituting into $2x + y = 12$ confirms the solution.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Record the values.",
          "workingLatex": "x = 5, \\ y = 2",
          "explanation": "Both equations are satisfied, so we record the solution.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the solution.",
          "workingLatex": "x = 5, \\ y = 2",
          "explanation": "The solution is $x = 5$ and $y = 2$.",
          "diagram": null
        }
      ],
      "finalAnswer": "Substituting $x = 3y - 1$: $7y - 2 = 12 \\Rightarrow y = 2$, $x = 5$. Solution: $x = 5,\\ y = 2$."
    }
  },
  {
    "id": "al.y1.pure.simultaneous.q016",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Simultaneous equations",
    "subtopicId": "al.y1.pure.simultaneous",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "expression",
    "tags": [
      "simultaneous equations",
      "elimination",
      "scaling",
      "linear"
    ],
    "questionText": "Solve the simultaneous equations $4x + y = 17$ and $3x - 2y = 10$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Label the equations.",
          "workingLatex": "4x + y = 17 \\ (1), \\quad 3x - 2y = 10 \\ (2)",
          "explanation": "We will scale equation (1) so its $y$ term matches equation (2).",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Scale equation (1).",
          "workingLatex": "2 \\times (1): \\ 8x + 2y = 34 \\ (3)",
          "explanation": "Multiplying (1) by $2$ makes the $y$ coefficient $+2y$, opposite to the $-2y$ in (2).",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Add to eliminate y.",
          "workingLatex": "(2) + (3): \\ (3x - 2y) + (8x + 2y) = 10 + 34",
          "explanation": "The $-2y$ and $+2y$ cancel when the equations are added.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Simplify to find x.",
          "workingLatex": "11x = 44 \\Rightarrow x = 4",
          "explanation": "The $y$ terms cancel, leaving $11x = 44$, so $x = 4$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute back.",
          "workingLatex": "4(4) + y = 17",
          "explanation": "Putting $x = 4$ into equation (1) gives an equation in $y$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Simplify.",
          "workingLatex": "16 + y = 17 \\Rightarrow y = 1",
          "explanation": "Subtracting $16$ gives $y = 1$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the intermediate solution.",
          "workingLatex": "x = 4, \\ y = 1",
          "explanation": "So far we have $x = 4$ and $y = 1$; we verify before finalising.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check in equation (2).",
          "workingLatex": "3(4) - 2(1) = 12 - 2 = 10 \\ \\checkmark",
          "explanation": "Substituting into equation (2) confirms both equations are satisfied.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the solution.",
          "workingLatex": "x = 4, \\ y = 1",
          "explanation": "The solution is $x = 4$ and $y = 1$.",
          "diagram": null
        }
      ],
      "finalAnswer": "Scaling (1) by 2 and adding: $11x = 44 \\Rightarrow x = 4$, then $y = 1$. Solution: $x = 4,\\ y = 1$."
    }
  },
  {
    "id": "al.y1.pure.simultaneous.q017",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Simultaneous equations",
    "subtopicId": "al.y1.pure.simultaneous",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "expression",
    "tags": [
      "simultaneous equations",
      "elimination",
      "substitution",
      "linear"
    ],
    "questionText": "Solve the simultaneous equations $2x - 3y = -4$ and $5x + y = 7$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Label the equations.",
          "workingLatex": "2x - 3y = -4 \\ (1), \\quad 5x + y = 7 \\ (2)",
          "explanation": "Equation (2) is easy to rearrange for $y$, so substitution works well here.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Rearrange equation (2) for y.",
          "workingLatex": "y = 7 - 5x",
          "explanation": "Making $y$ the subject of the simpler equation prepares it for substitution.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute into equation (1).",
          "workingLatex": "2x - 3(7 - 5x) = -4",
          "explanation": "Replacing $y$ in equation (1) gives an equation in $x$ alone.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Expand the bracket.",
          "workingLatex": "2x - 21 + 15x = -4",
          "explanation": "Multiplying $-3$ through the bracket gives $-21 + 15x$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify.",
          "workingLatex": "17x - 21 = -4",
          "explanation": "Collecting the $x$ terms gives $17x - 21 = -4$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Solve for x.",
          "workingLatex": "17x = 17 \\Rightarrow x = 1",
          "explanation": "Adding $21$ then dividing by $17$ gives $x = 1$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Find y.",
          "workingLatex": "y = 7 - 5(1) = 2",
          "explanation": "Substituting $x = 1$ into $y = 7 - 5x$ gives $y = 2$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check in equation (1).",
          "workingLatex": "2(1) - 3(2) = 2 - 6 = -4 \\ \\checkmark",
          "explanation": "Substituting into equation (1) confirms both equations are satisfied.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the solution.",
          "workingLatex": "x = 1, \\ y = 2",
          "explanation": "The solution is $x = 1$ and $y = 2$.",
          "diagram": null
        }
      ],
      "finalAnswer": "Rearranging (2) to $y = 7 - 5x$ and substituting: $17x = 17 \\Rightarrow x = 1$, $y = 2$. Solution: $x = 1,\\ y = 2$."
    }
  },
  {
    "id": "al.y1.pure.simultaneous.q018",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Simultaneous equations",
    "subtopicId": "al.y1.pure.simultaneous",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "expression",
    "tags": [
      "simultaneous equations",
      "elimination",
      "scaling",
      "linear"
    ],
    "questionText": "Solve the simultaneous equations $3x + 4y = 10$ and $2x + y = 5$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Label the equations.",
          "workingLatex": "3x + 4y = 10 \\ (1), \\quad 2x + y = 5 \\ (2)",
          "explanation": "No coefficients match yet, so we scale equation (2) to line up the $y$ terms.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Scale equation (2).",
          "workingLatex": "4 \\times (2): \\ 8x + 4y = 20 \\ (3)",
          "explanation": "Multiplying (2) by $4$ makes its $y$ coefficient $4y$, matching equation (1).",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Subtract to eliminate y.",
          "workingLatex": "(3) - (1): \\ (8x + 4y) - (3x + 4y) = 20 - 10",
          "explanation": "Both equations now contain $4y$, so subtracting removes the $y$ terms.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Simplify to find x.",
          "workingLatex": "5x = 10 \\Rightarrow x = 2",
          "explanation": "The $y$ terms cancel, leaving $5x = 10$, so $x = 2$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute back.",
          "workingLatex": "2(2) + y = 5",
          "explanation": "Putting $x = 2$ into equation (2) gives an equation in $y$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Simplify.",
          "workingLatex": "4 + y = 5 \\Rightarrow y = 1",
          "explanation": "Subtracting $4$ gives $y = 1$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the intermediate solution.",
          "workingLatex": "x = 2, \\ y = 1",
          "explanation": "So far we have $x = 2$ and $y = 1$; we verify before finalising.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check in equation (1).",
          "workingLatex": "3(2) + 4(1) = 6 + 4 = 10 \\ \\checkmark",
          "explanation": "Substituting into equation (1) confirms both equations are satisfied.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the solution.",
          "workingLatex": "x = 2, \\ y = 1",
          "explanation": "The solution is $x = 2$ and $y = 1$.",
          "diagram": null
        }
      ],
      "finalAnswer": "Scaling (2) by 4 and subtracting: $5x = 10 \\Rightarrow x = 2$, then $y = 1$. Solution: $x = 2,\\ y = 1$."
    }
  },
  {
    "id": "al.y1.pure.simultaneous.q019",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Simultaneous equations",
    "subtopicId": "al.y1.pure.simultaneous",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "expression",
    "tags": [
      "simultaneous equations",
      "linear-quadratic",
      "substitution",
      "intersection"
    ],
    "questionText": "Solve the simultaneous equations $y = x + 1$ and $y = x^2 - 1$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recognise a linear-quadratic system.",
          "workingLatex": "y = x + 1 \\ (\\text{line}), \\quad y = x^2 - 1 \\ (\\text{curve})",
          "explanation": "One equation is linear and one is quadratic, so substitution gives a single quadratic to solve; the solutions are the intersection points.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Set the expressions for y equal.",
          "workingLatex": "x^2 - 1 = x + 1",
          "explanation": "Both equations give $y$, so at any common point the two expressions must be equal.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Rearrange to a quadratic.",
          "workingLatex": "x^2 - x - 2 = 0",
          "explanation": "Bringing all terms to one side gives a quadratic in $x$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Factorise.",
          "workingLatex": "(x - 2)(x + 1) = 0",
          "explanation": "Two numbers multiplying to $-2$ and adding to $-1$ are $-2$ and $1$, giving these factors.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve for x.",
          "workingLatex": "x = 2 \\ \\text{ or } \\ x = -1",
          "explanation": "Setting each factor to zero gives the two $x$-coordinates of the intersection points.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find y for x = 2.",
          "workingLatex": "y = 2 + 1 = 3",
          "explanation": "Substituting $x = 2$ into the line $y = x + 1$ gives $y = 3$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Find y for x = -1.",
          "workingLatex": "y = -1 + 1 = 0",
          "explanation": "Substituting $x = -1$ into the line gives $y = 0$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Write the solution pairs.",
          "workingLatex": "(2, 3) \\ \\text{ and } \\ (-1, 0)",
          "explanation": "Each $x$ pairs with its $y$ to give a coordinate point where the line meets the curve.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Check the first point on the curve.",
          "workingLatex": "y = 2^2 - 1 = 3 \\ \\checkmark",
          "explanation": "Substituting $x = 2$ into the curve also gives $y = 3$, confirming the point lies on both graphs.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Check the second point on the curve.",
          "workingLatex": "y = (-1)^2 - 1 = 0 \\ \\checkmark",
          "explanation": "Substituting $x = -1$ into the curve gives $y = 0$, confirming the second intersection.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Note the number of intersections.",
          "workingLatex": "\\text{two real roots} \\Rightarrow \\text{two crossing points}",
          "explanation": "Because the quadratic gave two distinct roots, the line and curve meet at two separate points.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Interpret geometrically.",
          "workingLatex": "\\text{the line crosses the curve at two points}",
          "explanation": "Two real solutions mean the line and the parabola intersect at two distinct points.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "State the solution.",
          "workingLatex": "(x, y) = (2, 3) \\text{ or } (-1, 0)",
          "explanation": "The solutions are $(2, 3)$ and $(-1, 0)$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x^2 - 1 = x + 1 \\Rightarrow x^2 - x - 2 = (x-2)(x+1) = 0 \\Rightarrow (2,3) \\text{ or } (-1,0)$"
    }
  },
  {
    "id": "al.y1.pure.simultaneous.q020",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Simultaneous equations",
    "subtopicId": "al.y1.pure.simultaneous",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "expression",
    "tags": [
      "simultaneous equations",
      "linear-quadratic",
      "substitution",
      "intersection"
    ],
    "questionText": "Solve the simultaneous equations $y = 2x$ and $y = x^2 - 3$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recognise a linear-quadratic system.",
          "workingLatex": "y = 2x \\ (\\text{line}), \\quad y = x^2 - 3 \\ (\\text{curve})",
          "explanation": "Substituting the line into the curve gives a single quadratic; its solutions are the intersection points.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Set the expressions for y equal.",
          "workingLatex": "x^2 - 3 = 2x",
          "explanation": "At a common point both expressions for $y$ are equal.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Rearrange to a quadratic.",
          "workingLatex": "x^2 - 2x - 3 = 0",
          "explanation": "Bringing all terms to one side gives a quadratic in $x$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Factorise.",
          "workingLatex": "(x - 3)(x + 1) = 0",
          "explanation": "Two numbers multiplying to $-3$ and adding to $-2$ are $-3$ and $1$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve for x.",
          "workingLatex": "x = 3 \\ \\text{ or } \\ x = -1",
          "explanation": "Setting each factor to zero gives the two $x$-coordinates.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find y for x = 3.",
          "workingLatex": "y = 2(3) = 6",
          "explanation": "Substituting $x = 3$ into $y = 2x$ gives $y = 6$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Find y for x = -1.",
          "workingLatex": "y = 2(-1) = -2",
          "explanation": "Substituting $x = -1$ into $y = 2x$ gives $y = -2$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Write the solution pairs.",
          "workingLatex": "(3, 6) \\ \\text{ and } \\ (-1, -2)",
          "explanation": "Each $x$ pairs with its $y$ to give an intersection point.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Check the first point on the curve.",
          "workingLatex": "3^2 - 3 = 6 \\ \\checkmark",
          "explanation": "Substituting $x = 3$ into the curve gives $y = 6$, confirming the point.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Check the second point on the curve.",
          "workingLatex": "(-1)^2 - 3 = -2 \\ \\checkmark",
          "explanation": "Substituting $x = -1$ into the curve gives $y = -2$, confirming the second point.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Note the number of intersections.",
          "workingLatex": "\\text{two real roots} \\Rightarrow \\text{two points}",
          "explanation": "The quadratic had two distinct roots, so the line meets the parabola at two separate points.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Interpret geometrically.",
          "workingLatex": "\\text{two intersection points}",
          "explanation": "The line crosses the parabola at two distinct points.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "State the solution.",
          "workingLatex": "(x, y) = (3, 6) \\text{ or } (-1, -2)",
          "explanation": "The solutions are $(3, 6)$ and $(-1, -2)$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x^2 - 3 = 2x \\Rightarrow x^2 - 2x - 3 = (x-3)(x+1) = 0 \\Rightarrow (3,6) \\text{ or } (-1,-2)$"
    }
  },
  {
    "id": "al.y1.pure.simultaneous.q021",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Simultaneous equations",
    "subtopicId": "al.y1.pure.simultaneous",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "expression",
    "tags": [
      "simultaneous equations",
      "linear-quadratic",
      "circle",
      "intersection"
    ],
    "questionText": "Solve the simultaneous equations $x + y = 5$ and $x^2 + y^2 = 17$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recognise a linear-quadratic system.",
          "workingLatex": "x + y = 5 \\ (\\text{line}), \\quad x^2 + y^2 = 17 \\ (\\text{circle})",
          "explanation": "The second equation is a circle; substituting the line into it gives a single quadratic whose solutions are the intersection points.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Rearrange the linear equation.",
          "workingLatex": "y = 5 - x",
          "explanation": "Making $y$ the subject of the line prepares it for substitution.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute into the second equation.",
          "workingLatex": "x^2 + (5 - x)^2 = 17",
          "explanation": "Replacing $y$ with $5 - x$ gives an equation in $x$ alone.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Expand the bracket.",
          "workingLatex": "x^2 + 25 - 10x + x^2 = 17",
          "explanation": "Expanding $(5 - x)^2$ gives $25 - 10x + x^2$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Collect terms.",
          "workingLatex": "2x^2 - 10x + 25 = 17",
          "explanation": "Combining the two $x^2$ terms gives $2x^2 - 10x + 25$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Rearrange to standard form.",
          "workingLatex": "2x^2 - 10x + 8 = 0",
          "explanation": "Subtracting $17$ from both sides gives a quadratic equal to zero.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Divide through by 2.",
          "workingLatex": "x^2 - 5x + 4 = 0",
          "explanation": "Dividing every term by $2$ simplifies the quadratic.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Factorise.",
          "workingLatex": "(x - 1)(x - 4) = 0",
          "explanation": "Two numbers multiplying to $4$ and adding to $-5$ are $-1$ and $-4$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Solve for x.",
          "workingLatex": "x = 1 \\ \\text{ or } \\ x = 4",
          "explanation": "Setting each factor to zero gives the two $x$-coordinates.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Find the matching y values.",
          "workingLatex": "x = 1 \\Rightarrow y = 4, \\quad x = 4 \\Rightarrow y = 1",
          "explanation": "Substituting each $x$ into $y = 5 - x$ gives the paired $y$ values.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Check a point on the circle.",
          "workingLatex": "1^2 + 4^2 = 1 + 16 = 17 \\ \\checkmark",
          "explanation": "The point $(1, 4)$ satisfies $x^2 + y^2 = 17$, confirming it lies on the circle.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Interpret geometrically.",
          "workingLatex": "\\text{the line is a chord meeting the circle twice}",
          "explanation": "Two real solutions mean the line cuts the circle at two points.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "State the solution.",
          "workingLatex": "(x, y) = (1, 4) \\text{ or } (4, 1)",
          "explanation": "The solutions are $(1, 4)$ and $(4, 1)$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$y = 5 - x \\Rightarrow x^2 + (5-x)^2 = 17 \\Rightarrow x^2 - 5x + 4 = 0 \\Rightarrow (1,4) \\text{ or } (4,1)$"
    }
  },
  {
    "id": "al.y1.pure.simultaneous.q022",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Simultaneous equations",
    "subtopicId": "al.y1.pure.simultaneous",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "expression",
    "tags": [
      "simultaneous equations",
      "linear-quadratic",
      "circle",
      "intersection"
    ],
    "questionText": "Solve the simultaneous equations $y = x - 1$ and $x^2 + y^2 = 25$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recognise a linear-quadratic system.",
          "workingLatex": "y = x - 1 \\ (\\text{line}), \\quad x^2 + y^2 = 25 \\ (\\text{circle})",
          "explanation": "Substituting the line into the circle gives a single quadratic; its solutions are the intersection points.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute into the circle equation.",
          "workingLatex": "x^2 + (x - 1)^2 = 25",
          "explanation": "Replacing $y$ with $x - 1$ gives an equation in $x$ alone.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Expand the bracket.",
          "workingLatex": "x^2 + x^2 - 2x + 1 = 25",
          "explanation": "Expanding $(x - 1)^2$ gives $x^2 - 2x + 1$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Collect terms.",
          "workingLatex": "2x^2 - 2x + 1 = 25",
          "explanation": "Combining the two $x^2$ terms gives $2x^2 - 2x + 1$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Rearrange to standard form.",
          "workingLatex": "2x^2 - 2x - 24 = 0",
          "explanation": "Subtracting $25$ from both sides gives a quadratic equal to zero.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Divide through by 2.",
          "workingLatex": "x^2 - x - 12 = 0",
          "explanation": "Dividing every term by $2$ simplifies the quadratic.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Factorise.",
          "workingLatex": "(x - 4)(x + 3) = 0",
          "explanation": "Two numbers multiplying to $-12$ and adding to $-1$ are $-4$ and $3$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Solve for x.",
          "workingLatex": "x = 4 \\ \\text{ or } \\ x = -3",
          "explanation": "Setting each factor to zero gives the two $x$-coordinates.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Find y for x = 4.",
          "workingLatex": "y = 4 - 1 = 3",
          "explanation": "Substituting $x = 4$ into $y = x - 1$ gives $y = 3$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Find y for x = -3.",
          "workingLatex": "y = -3 - 1 = -4",
          "explanation": "Substituting $x = -3$ into $y = x - 1$ gives $y = -4$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Check a point on the circle.",
          "workingLatex": "4^2 + 3^2 = 16 + 9 = 25 \\ \\checkmark",
          "explanation": "The point $(4, 3)$ satisfies $x^2 + y^2 = 25$, confirming it lies on the circle.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Interpret geometrically.",
          "workingLatex": "\\text{the line meets the circle at two points}",
          "explanation": "Two real solutions mean the line cuts the circle at two distinct points.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "State the solution.",
          "workingLatex": "(x, y) = (4, 3) \\text{ or } (-3, -4)",
          "explanation": "The solutions are $(4, 3)$ and $(-3, -4)$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x^2 + (x-1)^2 = 25 \\Rightarrow x^2 - x - 12 = (x-4)(x+3) = 0 \\Rightarrow (4,3) \\text{ or } (-3,-4)$"
    }
  },
  {
    "id": "al.y1.pure.simultaneous.q023",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Simultaneous equations",
    "subtopicId": "al.y1.pure.simultaneous",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "expression",
    "tags": [
      "simultaneous equations",
      "linear-quadratic",
      "substitution"
    ],
    "questionText": "Solve the simultaneous equations $2x + y = 7$ and $xy = 6$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recognise a linear-quadratic system.",
          "workingLatex": "2x + y = 7 \\ (\\text{linear}), \\quad xy = 6 \\ (\\text{quadratic})",
          "explanation": "The product $xy$ makes the second equation quadratic; substituting the linear equation gives a quadratic in one variable.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Rearrange the linear equation.",
          "workingLatex": "y = 7 - 2x",
          "explanation": "Making $y$ the subject of the linear equation prepares it for substitution.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute into the second equation.",
          "workingLatex": "x(7 - 2x) = 6",
          "explanation": "Replacing $y$ with $7 - 2x$ in $xy = 6$ gives an equation in $x$ alone.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Expand.",
          "workingLatex": "7x - 2x^2 = 6",
          "explanation": "Multiplying out the bracket gives $7x - 2x^2$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Rearrange to standard form.",
          "workingLatex": "2x^2 - 7x + 6 = 0",
          "explanation": "Moving all terms to one side (and making the $x^2$ coefficient positive) gives a standard quadratic.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Factorise.",
          "workingLatex": "(2x - 3)(x - 2) = 0",
          "explanation": "Splitting the middle term, $2x^2 - 7x + 6$ factorises as $(2x-3)(x-2)$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Solve for x.",
          "workingLatex": "x = \\dfrac{3}{2} \\ \\text{ or } \\ x = 2",
          "explanation": "Setting each factor to zero gives the two $x$-values.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Find y for x = 2.",
          "workingLatex": "y = 7 - 2(2) = 3",
          "explanation": "Substituting $x = 2$ into $y = 7 - 2x$ gives $y = 3$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Find y for x = 3/2.",
          "workingLatex": "y = 7 - 2\\left(\\tfrac{3}{2}\\right) = 4",
          "explanation": "Substituting $x = \\tfrac32$ into $y = 7 - 2x$ gives $y = 4$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Write the solution pairs.",
          "workingLatex": "(2, 3) \\ \\text{ and } \\ \\left(\\tfrac{3}{2}, 4\\right)",
          "explanation": "Each $x$ pairs with its $y$ to give a solution.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Check the products.",
          "workingLatex": "2 \\times 3 = 6, \\quad \\tfrac{3}{2} \\times 4 = 6 \\ \\checkmark",
          "explanation": "Both pairs satisfy $xy = 6$, confirming that part of the system.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Check the linear equation.",
          "workingLatex": "2(2) + 3 = 7, \\quad 2\\left(\\tfrac{3}{2}\\right) + 4 = 7 \\ \\checkmark",
          "explanation": "Both pairs also satisfy $2x + y = 7$, so each is a genuine solution of the whole system.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "State the solution.",
          "workingLatex": "(x, y) = (2, 3) \\text{ or } \\left(\\tfrac{3}{2}, 4\\right)",
          "explanation": "The solutions are $(2, 3)$ and $\\left(\\tfrac32, 4\\right)$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$y = 7 - 2x \\Rightarrow x(7-2x) = 6 \\Rightarrow 2x^2 - 7x + 6 = (2x-3)(x-2) = 0 \\Rightarrow (2,3) \\text{ or } \\left(\\tfrac{3}{2}, 4\\right)$"
    }
  },
  {
    "id": "al.y1.pure.simultaneous.q024",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Simultaneous equations",
    "subtopicId": "al.y1.pure.simultaneous",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "expression",
    "tags": [
      "simultaneous equations",
      "word problem",
      "linear"
    ],
    "questionText": "The sum of two numbers is $15$ and their difference is $3$. Form two simultaneous equations and find the two numbers.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Define the variables.",
          "workingLatex": "\\text{let the numbers be } x \\text{ and } y, \\ x > y",
          "explanation": "Introducing letters for the two unknown numbers turns the words into algebra.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Translate the sum.",
          "workingLatex": "x + y = 15 \\ (1)",
          "explanation": "`The sum is $15$' becomes the equation $x + y = 15$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Translate the difference.",
          "workingLatex": "x - y = 3 \\ (2)",
          "explanation": "`Their difference is $3$' becomes $x - y = 3$ (taking the larger minus the smaller).",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Note the system to solve.",
          "workingLatex": "\\text{two linear equations in } x, y",
          "explanation": "We now have a pair of simultaneous linear equations, which we solve by elimination.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Choose the elimination.",
          "workingLatex": "\\text{add (1) and (2) to remove } y",
          "explanation": "The $+y$ in (1) and $-y$ in (2) are opposites, so adding will eliminate $y$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Add the equations.",
          "workingLatex": "(x + y) + (x - y) = 15 + 3",
          "explanation": "Adding the left sides and the right sides keeps the equation balanced.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Solve for x.",
          "workingLatex": "2x = 18 \\Rightarrow x = 9",
          "explanation": "The $y$ terms cancel, leaving $2x = 18$, so $x = 9$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Substitute back to find y.",
          "workingLatex": "9 + y = 15 \\Rightarrow y = 6",
          "explanation": "Putting $x = 9$ into equation (1) gives $y = 6$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Record the two numbers.",
          "workingLatex": "x = 9, \\ y = 6",
          "explanation": "So the larger number is $9$ and the smaller is $6$; we verify both conditions next.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Check the sum.",
          "workingLatex": "9 + 6 = 15 \\ \\checkmark",
          "explanation": "The two numbers add to $15$, matching the first condition.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Check the difference.",
          "workingLatex": "9 - 6 = 3 \\ \\checkmark",
          "explanation": "Their difference is $3$, matching the second condition.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Confirm both conditions hold.",
          "workingLatex": "\\text{sum and difference both correct}",
          "explanation": "Since both the sum and the difference match the problem, the answer is fully verified.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "State the answer.",
          "workingLatex": "\\text{the numbers are } 9 \\text{ and } 6",
          "explanation": "The two numbers are $9$ and $6$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x + y = 15,\\ x - y = 3$; adding gives $2x = 18 \\Rightarrow x = 9,\\ y = 6$. The numbers are $9$ and $6$."
    }
  },
  {
    "id": "al.y1.pure.simultaneous.q025",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Simultaneous equations",
    "subtopicId": "al.y1.pure.simultaneous",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "expression",
    "tags": [
      "simultaneous equations",
      "word problem",
      "linear",
      "elimination"
    ],
    "questionText": "Three apples and two bananas cost $\\pounds 1.30$. Two apples and four bananas cost $\\pounds 1.40$. Find the cost of one apple and one banana.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Define the variables (in pence).",
          "workingLatex": "a = \\text{apple cost}, \\ b = \\text{banana cost}",
          "explanation": "Working in pence avoids decimals; $a$ and $b$ are the costs of one apple and one banana.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Translate the first statement.",
          "workingLatex": "3a + 2b = 130 \\ (1)",
          "explanation": "Three apples and two bananas costing $\\pounds1.30$ becomes $3a + 2b = 130$ pence.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Translate the second statement.",
          "workingLatex": "2a + 4b = 140 \\ (2)",
          "explanation": "Two apples and four bananas costing $\\pounds1.40$ becomes $2a + 4b = 140$ pence.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Simplify equation (2).",
          "workingLatex": "a + 2b = 70 \\ (3)",
          "explanation": "Dividing equation (2) by $2$ gives the simpler equation $a + 2b = 70$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Subtract to eliminate b.",
          "workingLatex": "(1) - (3): \\ (3a + 2b) - (a + 2b) = 130 - 70",
          "explanation": "Both (1) and (3) contain $2b$, so subtracting removes the $b$ terms.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Solve for a.",
          "workingLatex": "2a = 60 \\Rightarrow a = 30",
          "explanation": "The $b$ terms cancel, leaving $2a = 60$, so $a = 30$ pence.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Substitute back to find b.",
          "workingLatex": "30 + 2b = 70",
          "explanation": "Putting $a = 30$ into equation (3) gives an equation in $b$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Solve for b.",
          "workingLatex": "2b = 40 \\Rightarrow b = 20",
          "explanation": "Rearranging gives $2b = 40$, so $b = 20$ pence.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Check the first equation.",
          "workingLatex": "3(30) + 2(20) = 90 + 40 = 130 \\ \\checkmark",
          "explanation": "Substituting into equation (1) confirms the first condition.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Check the second equation.",
          "workingLatex": "2(30) + 4(20) = 60 + 80 = 140 \\ \\checkmark",
          "explanation": "Substituting into equation (2) confirms the second condition.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Convert back to pounds.",
          "workingLatex": "a = 30\\text{p}, \\quad b = 20\\text{p}",
          "explanation": "An apple costs $30$ pence and a banana costs $20$ pence.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Sense-check the prices.",
          "workingLatex": "\\text{apple dearer than banana, both under } \\pounds 1",
          "explanation": "The apple costing more than the banana and both being modest everyday prices is a reasonable reality check.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "State the answer.",
          "workingLatex": "\\text{apple } 30\\text{p}, \\ \\text{banana } 20\\text{p}",
          "explanation": "One apple costs $30$p and one banana costs $20$p.",
          "diagram": null
        }
      ],
      "finalAnswer": "$3a + 2b = 130,\\ 2a + 4b = 140$; solving gives $a = 30,\\ b = 20$. Apple $30$p, banana $20$p."
    }
  },
  {
    "id": "al.y1.pure.simultaneous.q026",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Simultaneous equations",
    "subtopicId": "al.y1.pure.simultaneous",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": [
      "simultaneous equations",
      "elimination",
      "linear"
    ],
    "questionText": "Solve the simultaneous equations $x + y = 8$ and $x - y = 2$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Label the equations.",
          "workingLatex": "x + y = 8 \\ (1), \\quad x - y = 2 \\ (2)",
          "explanation": "Numbering the equations lets us combine them clearly.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Choose a variable to eliminate.",
          "workingLatex": "\\text{add (1) and (2) to remove } y",
          "explanation": "The $+y$ and $-y$ are opposites, so adding the equations cancels $y$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Add the equations.",
          "workingLatex": "(x + y) + (x - y) = 8 + 2",
          "explanation": "Adding the two equations term by term keeps them balanced.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Simplify to find x.",
          "workingLatex": "2x = 10 \\Rightarrow x = 5",
          "explanation": "The $y$ terms cancel, leaving $2x = 10$, so $x = 5$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute back.",
          "workingLatex": "5 + y = 8 \\Rightarrow y = 3",
          "explanation": "Putting $x = 5$ into equation (1) gives $y = 3$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check in the other equation.",
          "workingLatex": "5 - 3 = 2 \\ \\checkmark",
          "explanation": "Substituting into equation (2) confirms both equations are satisfied.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the solution.",
          "workingLatex": "x = 5, \\ y = 3",
          "explanation": "The solution is $x = 5$ and $y = 3$.",
          "diagram": null
        }
      ],
      "finalAnswer": "Adding gives $2x = 10 \\Rightarrow x = 5$, then $y = 3$. Solution: $x = 5,\\ y = 3$."
    }
  },
  {
    "id": "al.y1.pure.simultaneous.q027",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Simultaneous equations",
    "subtopicId": "al.y1.pure.simultaneous",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": [
      "simultaneous equations",
      "elimination",
      "linear"
    ],
    "questionText": "Solve the simultaneous equations $2x + y = 9$ and $x - y = 0$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Label the equations.",
          "workingLatex": "2x + y = 9 \\ (1), \\quad x - y = 0 \\ (2)",
          "explanation": "Numbering the equations makes the elimination clear.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Choose a variable to eliminate.",
          "workingLatex": "\\text{add (1) and (2) to remove } y",
          "explanation": "The $+y$ and $-y$ are opposites, so adding cancels $y$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Add the equations.",
          "workingLatex": "(2x + y) + (x - y) = 9 + 0",
          "explanation": "Adding the equations term by term removes the $y$ terms.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Simplify to find x.",
          "workingLatex": "3x = 9 \\Rightarrow x = 3",
          "explanation": "The $y$ terms cancel, leaving $3x = 9$, so $x = 3$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute back.",
          "workingLatex": "3 - y = 0 \\Rightarrow y = 3",
          "explanation": "Putting $x = 3$ into equation (2) gives $y = 3$ (equation (2) says $x = y$).",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check in the other equation.",
          "workingLatex": "2(3) + 3 = 6 + 3 = 9 \\ \\checkmark",
          "explanation": "Substituting into equation (1) confirms both equations are satisfied.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the solution.",
          "workingLatex": "x = 3, \\ y = 3",
          "explanation": "The solution is $x = 3$ and $y = 3$.",
          "diagram": null
        }
      ],
      "finalAnswer": "Adding gives $3x = 9 \\Rightarrow x = 3$, then $y = 3$. Solution: $x = 3,\\ y = 3$."
    }
  },
  {
    "id": "al.y1.pure.simultaneous.q028",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Simultaneous equations",
    "subtopicId": "al.y1.pure.simultaneous",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": [
      "simultaneous equations",
      "elimination",
      "linear"
    ],
    "questionText": "Solve the simultaneous equations $x + y = 6$ and $3x - y = 10$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Label the equations.",
          "workingLatex": "x + y = 6 \\ (1), \\quad 3x - y = 10 \\ (2)",
          "explanation": "Numbering the equations helps track the elimination.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Choose a variable to eliminate.",
          "workingLatex": "\\text{add (1) and (2) to remove } y",
          "explanation": "The $+y$ and $-y$ are opposites, so adding cancels $y$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Add the equations.",
          "workingLatex": "(x + y) + (3x - y) = 6 + 10",
          "explanation": "Adding term by term removes the $y$ terms.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Simplify to find x.",
          "workingLatex": "4x = 16 \\Rightarrow x = 4",
          "explanation": "The $y$ terms cancel, leaving $4x = 16$, so $x = 4$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute back.",
          "workingLatex": "4 + y = 6 \\Rightarrow y = 2",
          "explanation": "Putting $x = 4$ into equation (1) gives $y = 2$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check in the other equation.",
          "workingLatex": "3(4) - 2 = 12 - 2 = 10 \\ \\checkmark",
          "explanation": "Substituting into equation (2) confirms both equations are satisfied.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the solution.",
          "workingLatex": "x = 4, \\ y = 2",
          "explanation": "The solution is $x = 4$ and $y = 2$.",
          "diagram": null
        }
      ],
      "finalAnswer": "Adding gives $4x = 16 \\Rightarrow x = 4$, then $y = 2$. Solution: $x = 4,\\ y = 2$."
    }
  },
  {
    "id": "al.y1.pure.simultaneous.q029",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Simultaneous equations",
    "subtopicId": "al.y1.pure.simultaneous",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": [
      "simultaneous equations",
      "elimination",
      "linear"
    ],
    "questionText": "Solve the simultaneous equations $5x - y = 8$ and $x + y = 4$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Label the equations.",
          "workingLatex": "5x - y = 8 \\ (1), \\quad x + y = 4 \\ (2)",
          "explanation": "Numbering the equations helps track the elimination.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Choose a variable to eliminate.",
          "workingLatex": "\\text{add (1) and (2) to remove } y",
          "explanation": "The $-y$ in (1) and $+y$ in (2) are opposites, so adding cancels $y$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Add the equations.",
          "workingLatex": "(5x - y) + (x + y) = 8 + 4",
          "explanation": "Adding term by term removes the $y$ terms.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Simplify to find x.",
          "workingLatex": "6x = 12 \\Rightarrow x = 2",
          "explanation": "The $y$ terms cancel, leaving $6x = 12$, so $x = 2$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute back.",
          "workingLatex": "2 + y = 4 \\Rightarrow y = 2",
          "explanation": "Putting $x = 2$ into equation (2) gives $y = 2$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check in the other equation.",
          "workingLatex": "5(2) - 2 = 10 - 2 = 8 \\ \\checkmark",
          "explanation": "Substituting into equation (1) confirms both equations are satisfied.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the solution.",
          "workingLatex": "x = 2, \\ y = 2",
          "explanation": "The solution is $x = 2$ and $y = 2$.",
          "diagram": null
        }
      ],
      "finalAnswer": "Adding gives $6x = 12 \\Rightarrow x = 2$, then $y = 2$. Solution: $x = 2,\\ y = 2$."
    }
  },
  {
    "id": "al.y1.pure.simultaneous.q030",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Simultaneous equations",
    "subtopicId": "al.y1.pure.simultaneous",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": [
      "simultaneous equations",
      "substitution",
      "linear"
    ],
    "questionText": "Solve the simultaneous equations $y = 3x$ and $x + y = 8$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Note one variable is isolated.",
          "workingLatex": "y = 3x",
          "explanation": "Since $y$ is given in terms of $x$, substitution is the quickest method.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute into the other equation.",
          "workingLatex": "x + 3x = 8",
          "explanation": "Replacing $y$ with $3x$ in $x + y = 8$ gives an equation in $x$ alone.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Simplify.",
          "workingLatex": "4x = 8",
          "explanation": "Collecting the $x$ terms gives $4x = 8$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Solve for x.",
          "workingLatex": "x = 2",
          "explanation": "Dividing both sides by $4$ gives $x = 2$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find y.",
          "workingLatex": "y = 3(2) = 6",
          "explanation": "Substituting $x = 2$ into $y = 3x$ gives $y = 6$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check.",
          "workingLatex": "2 + 6 = 8 \\ \\checkmark",
          "explanation": "Substituting into $x + y = 8$ confirms the solution.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the solution.",
          "workingLatex": "x = 2, \\ y = 6",
          "explanation": "The solution is $x = 2$ and $y = 6$.",
          "diagram": null
        }
      ],
      "finalAnswer": "Substituting $y = 3x$: $4x = 8 \\Rightarrow x = 2$, $y = 6$. Solution: $x = 2,\\ y = 6$."
    }
  },
  {
    "id": "al.y1.pure.simultaneous.q031",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Simultaneous equations",
    "subtopicId": "al.y1.pure.simultaneous",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": [
      "simultaneous equations",
      "substitution",
      "linear"
    ],
    "questionText": "Solve the simultaneous equations $y = x + 3$ and $2x + y = 12$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Note one variable is isolated.",
          "workingLatex": "y = x + 3",
          "explanation": "Since $y$ is given in terms of $x$, we substitute it into the other equation.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute into the other equation.",
          "workingLatex": "2x + (x + 3) = 12",
          "explanation": "Replacing $y$ with $x + 3$ in $2x + y = 12$ gives an equation in $x$ alone.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Simplify.",
          "workingLatex": "3x + 3 = 12",
          "explanation": "Collecting the $x$ terms and the constant gives $3x + 3 = 12$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Solve for x.",
          "workingLatex": "3x = 9 \\Rightarrow x = 3",
          "explanation": "Subtracting $3$ then dividing by $3$ gives $x = 3$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find y.",
          "workingLatex": "y = 3 + 3 = 6",
          "explanation": "Substituting $x = 3$ into $y = x + 3$ gives $y = 6$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check.",
          "workingLatex": "2(3) + 6 = 6 + 6 = 12 \\ \\checkmark",
          "explanation": "Substituting into $2x + y = 12$ confirms the solution.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the solution.",
          "workingLatex": "x = 3, \\ y = 6",
          "explanation": "The solution is $x = 3$ and $y = 6$.",
          "diagram": null
        }
      ],
      "finalAnswer": "Substituting $y = x + 3$: $3x + 3 = 12 \\Rightarrow x = 3$, $y = 6$. Solution: $x = 3,\\ y = 6$."
    }
  },
  {
    "id": "al.y1.pure.simultaneous.q032",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Simultaneous equations",
    "subtopicId": "al.y1.pure.simultaneous",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": [
      "simultaneous equations",
      "substitution",
      "linear"
    ],
    "questionText": "Solve the simultaneous equations $x = y + 2$ and $2x + y = 13$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Note one variable is isolated.",
          "workingLatex": "x = y + 2",
          "explanation": "Since $x$ is given in terms of $y$, we substitute it into the other equation.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute into the other equation.",
          "workingLatex": "2(y + 2) + y = 13",
          "explanation": "Replacing $x$ with $y + 2$ in $2x + y = 13$ gives an equation in $y$ alone.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Expand the bracket.",
          "workingLatex": "2y + 4 + y = 13",
          "explanation": "Multiplying $2$ through the bracket gives $2y + 4$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Simplify.",
          "workingLatex": "3y + 4 = 13",
          "explanation": "Collecting the $y$ terms gives $3y + 4 = 13$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve for y.",
          "workingLatex": "3y = 9 \\Rightarrow y = 3",
          "explanation": "Subtracting $4$ then dividing by $3$ gives $y = 3$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find x.",
          "workingLatex": "x = 3 + 2 = 5",
          "explanation": "Substituting $y = 3$ into $x = y + 2$ gives $x = 5$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check.",
          "workingLatex": "2(5) + 3 = 10 + 3 = 13 \\ \\checkmark",
          "explanation": "Substituting into $2x + y = 13$ confirms the solution.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State the solution.",
          "workingLatex": "x = 5, \\ y = 3",
          "explanation": "The solution is $x = 5$ and $y = 3$.",
          "diagram": null
        }
      ],
      "finalAnswer": "Substituting $x = y + 2$: $3y + 4 = 13 \\Rightarrow y = 3$, $x = 5$. Solution: $x = 5,\\ y = 3$."
    }
  },
  {
    "id": "al.y1.pure.simultaneous.q033",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Simultaneous equations",
    "subtopicId": "al.y1.pure.simultaneous",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": [
      "simultaneous equations",
      "substitution",
      "linear"
    ],
    "questionText": "Solve the simultaneous equations $x + 3y = 11$ and $x = y + 3$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Note one variable is isolated.",
          "workingLatex": "x = y + 3",
          "explanation": "Since $x$ is given in terms of $y$, we substitute it into the other equation.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute into the other equation.",
          "workingLatex": "(y + 3) + 3y = 11",
          "explanation": "Replacing $x$ with $y + 3$ in $x + 3y = 11$ gives an equation in $y$ alone.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Simplify.",
          "workingLatex": "4y + 3 = 11",
          "explanation": "Collecting the $y$ terms gives $4y + 3 = 11$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Solve for y.",
          "workingLatex": "4y = 8 \\Rightarrow y = 2",
          "explanation": "Subtracting $3$ then dividing by $4$ gives $y = 2$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find x.",
          "workingLatex": "x = 2 + 3 = 5",
          "explanation": "Substituting $y = 2$ into $x = y + 3$ gives $x = 5$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check.",
          "workingLatex": "5 + 3(2) = 5 + 6 = 11 \\ \\checkmark",
          "explanation": "Substituting into $x + 3y = 11$ confirms the solution.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the solution.",
          "workingLatex": "x = 5, \\ y = 2",
          "explanation": "The solution is $x = 5$ and $y = 2$.",
          "diagram": null
        }
      ],
      "finalAnswer": "Substituting $x = y + 3$: $4y + 3 = 11 \\Rightarrow y = 2$, $x = 5$. Solution: $x = 5,\\ y = 2$."
    }
  },
  {
    "id": "al.y1.pure.simultaneous.q034",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Simultaneous equations",
    "subtopicId": "al.y1.pure.simultaneous",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "expression",
    "tags": [
      "simultaneous equations",
      "elimination",
      "scaling",
      "linear"
    ],
    "questionText": "Solve the simultaneous equations $3x + 2y = 16$ and $2x + 3y = 19$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Label the equations.",
          "workingLatex": "3x + 2y = 16 \\ (1), \\quad 2x + 3y = 19 \\ (2)",
          "explanation": "No coefficients match, so we scale both equations to eliminate $y$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Scale equation (1).",
          "workingLatex": "3 \\times (1): \\ 9x + 6y = 48 \\ (3)",
          "explanation": "Multiplying (1) by $3$ makes the $y$ coefficient $6y$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Scale equation (2).",
          "workingLatex": "2 \\times (2): \\ 4x + 6y = 38 \\ (4)",
          "explanation": "Multiplying (2) by $2$ makes the $y$ coefficient $6y$ as well, ready to subtract.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Subtract to eliminate y.",
          "workingLatex": "(3) - (4): \\ 5x = 10",
          "explanation": "Both equations have $6y$, so subtracting removes the $y$ terms, leaving $5x = 10$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve for x.",
          "workingLatex": "x = 2",
          "explanation": "Dividing by $5$ gives $x = 2$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute back.",
          "workingLatex": "3(2) + 2y = 16",
          "explanation": "Putting $x = 2$ into equation (1) gives an equation in $y$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Simplify.",
          "workingLatex": "6 + 2y = 16 \\Rightarrow 2y = 10",
          "explanation": "Subtracting $6$ gives $2y = 10$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Solve for y.",
          "workingLatex": "y = 5",
          "explanation": "Dividing by $2$ gives $y = 5$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Check in equation (2).",
          "workingLatex": "2(2) + 3(5) = 4 + 15 = 19 \\ \\checkmark",
          "explanation": "Substituting into equation (2) confirms both equations are satisfied.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the solution.",
          "workingLatex": "x = 2, \\ y = 5",
          "explanation": "The solution is $x = 2$ and $y = 5$.",
          "diagram": null
        }
      ],
      "finalAnswer": "Scaling to $6y$ and subtracting: $5x = 10 \\Rightarrow x = 2$, then $y = 5$. Solution: $x = 2,\\ y = 5$."
    }
  },
  {
    "id": "al.y1.pure.simultaneous.q035",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Simultaneous equations",
    "subtopicId": "al.y1.pure.simultaneous",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "expression",
    "tags": [
      "simultaneous equations",
      "elimination",
      "scaling",
      "linear"
    ],
    "questionText": "Solve the simultaneous equations $5x - 2y = 6$ and $3x + 4y = 14$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Label the equations.",
          "workingLatex": "5x - 2y = 6 \\ (1), \\quad 3x + 4y = 14 \\ (2)",
          "explanation": "We scale equation (1) so its $y$ term matches equation (2).",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Scale equation (1).",
          "workingLatex": "2 \\times (1): \\ 10x - 4y = 12 \\ (3)",
          "explanation": "Multiplying (1) by $2$ makes the $y$ coefficient $-4y$, opposite to the $+4y$ in (2).",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Add to eliminate y.",
          "workingLatex": "(2) + (3): \\ (3x + 4y) + (10x - 4y) = 14 + 12",
          "explanation": "The $+4y$ and $-4y$ cancel when the equations are added.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Simplify to find x.",
          "workingLatex": "13x = 26 \\Rightarrow x = 2",
          "explanation": "The $y$ terms cancel, leaving $13x = 26$, so $x = 2$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute back.",
          "workingLatex": "5(2) - 2y = 6",
          "explanation": "Putting $x = 2$ into equation (1) gives an equation in $y$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Simplify.",
          "workingLatex": "10 - 2y = 6 \\Rightarrow 2y = 4",
          "explanation": "Rearranging gives $2y = 4$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Solve for y.",
          "workingLatex": "y = 2",
          "explanation": "Dividing by $2$ gives $y = 2$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check in equation (2).",
          "workingLatex": "3(2) + 4(2) = 6 + 8 = 14 \\ \\checkmark",
          "explanation": "Substituting into equation (2) confirms both equations are satisfied.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the solution.",
          "workingLatex": "x = 2, \\ y = 2",
          "explanation": "The solution is $x = 2$ and $y = 2$.",
          "diagram": null
        }
      ],
      "finalAnswer": "Scaling (1) by 2 and adding: $13x = 26 \\Rightarrow x = 2$, then $y = 2$. Solution: $x = 2,\\ y = 2$."
    }
  },
  {
    "id": "al.y1.pure.simultaneous.q036",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Simultaneous equations",
    "subtopicId": "al.y1.pure.simultaneous",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "expression",
    "tags": [
      "simultaneous equations",
      "elimination",
      "scaling",
      "linear"
    ],
    "questionText": "Solve the simultaneous equations $2x + 3y = 13$ and $4x - y = 5$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Label the equations.",
          "workingLatex": "2x + 3y = 13 \\ (1), \\quad 4x - y = 5 \\ (2)",
          "explanation": "We scale equation (2) so its $y$ term matches equation (1).",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Scale equation (2).",
          "workingLatex": "3 \\times (2): \\ 12x - 3y = 15 \\ (3)",
          "explanation": "Multiplying (2) by $3$ makes the $y$ coefficient $-3y$, opposite to the $+3y$ in (1).",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Add to eliminate y.",
          "workingLatex": "(1) + (3): \\ (2x + 3y) + (12x - 3y) = 13 + 15",
          "explanation": "The $+3y$ and $-3y$ cancel when the equations are added.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Simplify to find x.",
          "workingLatex": "14x = 28 \\Rightarrow x = 2",
          "explanation": "The $y$ terms cancel, leaving $14x = 28$, so $x = 2$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute back.",
          "workingLatex": "4(2) - y = 5",
          "explanation": "Putting $x = 2$ into equation (2) gives an equation in $y$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Simplify.",
          "workingLatex": "8 - y = 5 \\Rightarrow y = 3",
          "explanation": "Rearranging gives $y = 3$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the intermediate solution.",
          "workingLatex": "x = 2, \\ y = 3",
          "explanation": "So far we have $x = 2$ and $y = 3$; we verify before finalising.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check in equation (1).",
          "workingLatex": "2(2) + 3(3) = 4 + 9 = 13 \\ \\checkmark",
          "explanation": "Substituting into equation (1) confirms both equations are satisfied.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the solution.",
          "workingLatex": "x = 2, \\ y = 3",
          "explanation": "The solution is $x = 2$ and $y = 3$.",
          "diagram": null
        }
      ],
      "finalAnswer": "Scaling (2) by 3 and adding: $14x = 28 \\Rightarrow x = 2$, then $y = 3$. Solution: $x = 2,\\ y = 3$."
    }
  },
  {
    "id": "al.y1.pure.simultaneous.q037",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Simultaneous equations",
    "subtopicId": "al.y1.pure.simultaneous",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "expression",
    "tags": [
      "simultaneous equations",
      "elimination",
      "scaling",
      "linear"
    ],
    "questionText": "Solve the simultaneous equations $3x - 2y = 8$ and $x + 4y = 12$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Label the equations.",
          "workingLatex": "3x - 2y = 8 \\ (1), \\quad x + 4y = 12 \\ (2)",
          "explanation": "We scale equation (1) so its $y$ term matches equation (2).",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Scale equation (1).",
          "workingLatex": "2 \\times (1): \\ 6x - 4y = 16 \\ (3)",
          "explanation": "Multiplying (1) by $2$ makes the $y$ coefficient $-4y$, opposite to the $+4y$ in (2).",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Add to eliminate y.",
          "workingLatex": "(2) + (3): \\ (x + 4y) + (6x - 4y) = 12 + 16",
          "explanation": "The $+4y$ and $-4y$ cancel when the equations are added.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Simplify to find x.",
          "workingLatex": "7x = 28 \\Rightarrow x = 4",
          "explanation": "The $y$ terms cancel, leaving $7x = 28$, so $x = 4$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute back.",
          "workingLatex": "4 + 4y = 12",
          "explanation": "Putting $x = 4$ into equation (2) gives an equation in $y$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Simplify.",
          "workingLatex": "4y = 8 \\Rightarrow y = 2",
          "explanation": "Subtracting $4$ then dividing by $4$ gives $y = 2$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the intermediate solution.",
          "workingLatex": "x = 4, \\ y = 2",
          "explanation": "So far we have $x = 4$ and $y = 2$; we verify before finalising.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check in equation (1).",
          "workingLatex": "3(4) - 2(2) = 12 - 4 = 8 \\ \\checkmark",
          "explanation": "Substituting into equation (1) confirms both equations are satisfied.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the solution.",
          "workingLatex": "x = 4, \\ y = 2",
          "explanation": "The solution is $x = 4$ and $y = 2$.",
          "diagram": null
        }
      ],
      "finalAnswer": "Scaling (1) by 2 and adding: $7x = 28 \\Rightarrow x = 4$, then $y = 2$. Solution: $x = 4,\\ y = 2$."
    }
  },
  {
    "id": "al.y1.pure.simultaneous.q038",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Simultaneous equations",
    "subtopicId": "al.y1.pure.simultaneous",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "expression",
    "tags": [
      "simultaneous equations",
      "elimination",
      "scaling",
      "linear",
      "negative solution"
    ],
    "questionText": "Solve the simultaneous equations $4x + 3y = 1$ and $2x - y = 3$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Label the equations.",
          "workingLatex": "4x + 3y = 1 \\ (1), \\quad 2x - y = 3 \\ (2)",
          "explanation": "We scale equation (2) so its $y$ term matches equation (1).",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Scale equation (2).",
          "workingLatex": "3 \\times (2): \\ 6x - 3y = 9 \\ (3)",
          "explanation": "Multiplying (2) by $3$ makes the $y$ coefficient $-3y$, opposite to the $+3y$ in (1).",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Add to eliminate y.",
          "workingLatex": "(1) + (3): \\ (4x + 3y) + (6x - 3y) = 1 + 9",
          "explanation": "The $+3y$ and $-3y$ cancel when the equations are added.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Simplify to find x.",
          "workingLatex": "10x = 10 \\Rightarrow x = 1",
          "explanation": "The $y$ terms cancel, leaving $10x = 10$, so $x = 1$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute back.",
          "workingLatex": "2(1) - y = 3",
          "explanation": "Putting $x = 1$ into equation (2) gives an equation in $y$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Simplify.",
          "workingLatex": "2 - y = 3 \\Rightarrow y = -1",
          "explanation": "Rearranging gives $y = -1$; a negative solution is perfectly valid.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the intermediate solution.",
          "workingLatex": "x = 1, \\ y = -1",
          "explanation": "So far we have $x = 1$ and $y = -1$; we verify before finalising.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check in equation (1).",
          "workingLatex": "4(1) + 3(-1) = 4 - 3 = 1 \\ \\checkmark",
          "explanation": "Substituting into equation (1) confirms both equations are satisfied.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the solution.",
          "workingLatex": "x = 1, \\ y = -1",
          "explanation": "The solution is $x = 1$ and $y = -1$.",
          "diagram": null
        }
      ],
      "finalAnswer": "Scaling (2) by 3 and adding: $10x = 10 \\Rightarrow x = 1$, then $y = -1$. Solution: $x = 1,\\ y = -1$."
    }
  },
  {
    "id": "al.y1.pure.simultaneous.q039",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Simultaneous equations",
    "subtopicId": "al.y1.pure.simultaneous",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "expression",
    "tags": [
      "simultaneous equations",
      "substitution",
      "linear"
    ],
    "questionText": "Solve the simultaneous equations $y = 3x - 2$ and $2x + 3y = 16$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Note one variable is isolated.",
          "workingLatex": "y = 3x - 2",
          "explanation": "Since $y$ is given in terms of $x$, substitution is the efficient method.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute into the other equation.",
          "workingLatex": "2x + 3(3x - 2) = 16",
          "explanation": "Replacing $y$ with $3x - 2$ in $2x + 3y = 16$ gives an equation in $x$ alone.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Expand the bracket.",
          "workingLatex": "2x + 9x - 6 = 16",
          "explanation": "Multiplying $3$ through the bracket gives $9x - 6$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Simplify.",
          "workingLatex": "11x - 6 = 16",
          "explanation": "Collecting the $x$ terms gives $11x - 6 = 16$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve for x.",
          "workingLatex": "11x = 22 \\Rightarrow x = 2",
          "explanation": "Adding $6$ then dividing by $11$ gives $x = 2$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find y.",
          "workingLatex": "y = 3(2) - 2 = 4",
          "explanation": "Substituting $x = 2$ into $y = 3x - 2$ gives $y = 4$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check.",
          "workingLatex": "2(2) + 3(4) = 4 + 12 = 16 \\ \\checkmark",
          "explanation": "Substituting into $2x + 3y = 16$ confirms the solution.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Record the values.",
          "workingLatex": "x = 2, \\ y = 4",
          "explanation": "Both equations are satisfied, so we record the solution.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the solution.",
          "workingLatex": "x = 2, \\ y = 4",
          "explanation": "The solution is $x = 2$ and $y = 4$.",
          "diagram": null
        }
      ],
      "finalAnswer": "Substituting $y = 3x - 2$: $11x - 6 = 16 \\Rightarrow x = 2$, $y = 4$. Solution: $x = 2,\\ y = 4$."
    }
  },
  {
    "id": "al.y1.pure.simultaneous.q040",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Simultaneous equations",
    "subtopicId": "al.y1.pure.simultaneous",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "expression",
    "tags": [
      "simultaneous equations",
      "substitution",
      "linear"
    ],
    "questionText": "Solve the simultaneous equations $x = 2y + 1$ and $3x - 4y = 11$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Note one variable is isolated.",
          "workingLatex": "x = 2y + 1",
          "explanation": "Since $x$ is given in terms of $y$, we substitute it into the other equation.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute into the other equation.",
          "workingLatex": "3(2y + 1) - 4y = 11",
          "explanation": "Replacing $x$ with $2y + 1$ in $3x - 4y = 11$ gives an equation in $y$ alone.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Expand the bracket.",
          "workingLatex": "6y + 3 - 4y = 11",
          "explanation": "Multiplying $3$ through the bracket gives $6y + 3$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Simplify.",
          "workingLatex": "2y + 3 = 11",
          "explanation": "Collecting the $y$ terms gives $2y + 3 = 11$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve for y.",
          "workingLatex": "2y = 8 \\Rightarrow y = 4",
          "explanation": "Subtracting $3$ then dividing by $2$ gives $y = 4$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find x.",
          "workingLatex": "x = 2(4) + 1 = 9",
          "explanation": "Substituting $y = 4$ into $x = 2y + 1$ gives $x = 9$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check.",
          "workingLatex": "3(9) - 4(4) = 27 - 16 = 11 \\ \\checkmark",
          "explanation": "Substituting into $3x - 4y = 11$ confirms the solution.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Record the values.",
          "workingLatex": "x = 9, \\ y = 4",
          "explanation": "Both equations are satisfied, so we record the solution.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the solution.",
          "workingLatex": "x = 9, \\ y = 4",
          "explanation": "The solution is $x = 9$ and $y = 4$.",
          "diagram": null
        }
      ],
      "finalAnswer": "Substituting $x = 2y + 1$: $2y + 3 = 11 \\Rightarrow y = 4$, $x = 9$. Solution: $x = 9,\\ y = 4$."
    }
  },
  {
    "id": "al.y1.pure.simultaneous.q041",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Simultaneous equations",
    "subtopicId": "al.y1.pure.simultaneous",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "expression",
    "tags": [
      "simultaneous equations",
      "elimination",
      "scaling",
      "linear"
    ],
    "questionText": "Solve the simultaneous equations $5x + 2y = 24$ and $3x - y = 10$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Label the equations.",
          "workingLatex": "5x + 2y = 24 \\ (1), \\quad 3x - y = 10 \\ (2)",
          "explanation": "We scale equation (2) so its $y$ term matches equation (1).",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Scale equation (2).",
          "workingLatex": "2 \\times (2): \\ 6x - 2y = 20 \\ (3)",
          "explanation": "Multiplying (2) by $2$ makes the $y$ coefficient $-2y$, opposite to the $+2y$ in (1).",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Add to eliminate y.",
          "workingLatex": "(1) + (3): \\ (5x + 2y) + (6x - 2y) = 24 + 20",
          "explanation": "The $+2y$ and $-2y$ cancel when the equations are added.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Simplify to find x.",
          "workingLatex": "11x = 44 \\Rightarrow x = 4",
          "explanation": "The $y$ terms cancel, leaving $11x = 44$, so $x = 4$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute back.",
          "workingLatex": "3(4) - y = 10",
          "explanation": "Putting $x = 4$ into equation (2) gives an equation in $y$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Simplify.",
          "workingLatex": "12 - y = 10 \\Rightarrow y = 2",
          "explanation": "Rearranging gives $y = 2$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the intermediate solution.",
          "workingLatex": "x = 4, \\ y = 2",
          "explanation": "So far we have $x = 4$ and $y = 2$; we verify before finalising.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check in equation (1).",
          "workingLatex": "5(4) + 2(2) = 20 + 4 = 24 \\ \\checkmark",
          "explanation": "Substituting into equation (1) confirms both equations are satisfied.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the solution.",
          "workingLatex": "x = 4, \\ y = 2",
          "explanation": "The solution is $x = 4$ and $y = 2$.",
          "diagram": null
        }
      ],
      "finalAnswer": "Scaling (2) by 2 and adding: $11x = 44 \\Rightarrow x = 4$, then $y = 2$. Solution: $x = 4,\\ y = 2$."
    }
  },
  {
    "id": "al.y1.pure.simultaneous.q042",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Simultaneous equations",
    "subtopicId": "al.y1.pure.simultaneous",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "expression",
    "tags": [
      "simultaneous equations",
      "elimination",
      "linear",
      "negative solution"
    ],
    "questionText": "Solve the simultaneous equations $7x + 2y = 24$ and $3x - 2y = 16$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Label the equations.",
          "workingLatex": "7x + 2y = 24 \\ (1), \\quad 3x - 2y = 16 \\ (2)",
          "explanation": "The $y$ terms are already equal and opposite, so adding will eliminate $y$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Add the equations.",
          "workingLatex": "(7x + 2y) + (3x - 2y) = 24 + 16",
          "explanation": "The $+2y$ and $-2y$ cancel when we add the two equations.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Simplify to find x.",
          "workingLatex": "10x = 40 \\Rightarrow x = 4",
          "explanation": "The $y$ terms cancel, leaving $10x = 40$, so $x = 4$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute back.",
          "workingLatex": "7(4) + 2y = 24",
          "explanation": "Putting $x = 4$ into equation (1) gives an equation in $y$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify.",
          "workingLatex": "28 + 2y = 24 \\Rightarrow 2y = -4",
          "explanation": "Subtracting $28$ gives $2y = -4$; a negative value is perfectly valid.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Solve for y.",
          "workingLatex": "y = -2",
          "explanation": "Dividing by $2$ gives $y = -2$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the intermediate solution.",
          "workingLatex": "x = 4, \\ y = -2",
          "explanation": "So far we have $x = 4$ and $y = -2$; we verify before finalising.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check in equation (2).",
          "workingLatex": "3(4) - 2(-2) = 12 + 4 = 16 \\ \\checkmark",
          "explanation": "Substituting into equation (2) confirms both equations are satisfied.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the solution.",
          "workingLatex": "x = 4, \\ y = -2",
          "explanation": "The solution is $x = 4$ and $y = -2$.",
          "diagram": null
        }
      ],
      "finalAnswer": "Adding gives $10x = 40 \\Rightarrow x = 4$, then $y = -2$. Solution: $x = 4,\\ y = -2$."
    }
  },
  {
    "id": "al.y1.pure.simultaneous.q043",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Simultaneous equations",
    "subtopicId": "al.y1.pure.simultaneous",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "expression",
    "tags": [
      "simultaneous equations",
      "elimination",
      "scaling",
      "linear"
    ],
    "questionText": "Solve the simultaneous equations $6x - y = 16$ and $2x + 3y = 12$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Label the equations.",
          "workingLatex": "6x - y = 16 \\ (1), \\quad 2x + 3y = 12 \\ (2)",
          "explanation": "We scale equation (1) so its $y$ term matches equation (2).",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Scale equation (1).",
          "workingLatex": "3 \\times (1): \\ 18x - 3y = 48 \\ (3)",
          "explanation": "Multiplying (1) by $3$ makes the $y$ coefficient $-3y$, opposite to the $+3y$ in (2).",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Add to eliminate y.",
          "workingLatex": "(2) + (3): \\ (2x + 3y) + (18x - 3y) = 12 + 48",
          "explanation": "The $+3y$ and $-3y$ cancel when the equations are added.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Simplify to find x.",
          "workingLatex": "20x = 60 \\Rightarrow x = 3",
          "explanation": "The $y$ terms cancel, leaving $20x = 60$, so $x = 3$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute back.",
          "workingLatex": "6(3) - y = 16",
          "explanation": "Putting $x = 3$ into equation (1) gives an equation in $y$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Simplify.",
          "workingLatex": "18 - y = 16 \\Rightarrow y = 2",
          "explanation": "Rearranging gives $y = 2$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the intermediate solution.",
          "workingLatex": "x = 3, \\ y = 2",
          "explanation": "So far we have $x = 3$ and $y = 2$; we verify before finalising.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check in equation (2).",
          "workingLatex": "2(3) + 3(2) = 6 + 6 = 12 \\ \\checkmark",
          "explanation": "Substituting into equation (2) confirms both equations are satisfied.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the solution.",
          "workingLatex": "x = 3, \\ y = 2",
          "explanation": "The solution is $x = 3$ and $y = 2$.",
          "diagram": null
        }
      ],
      "finalAnswer": "Scaling (1) by 3 and adding: $20x = 60 \\Rightarrow x = 3$, then $y = 2$. Solution: $x = 3,\\ y = 2$."
    }
  },
  {
    "id": "al.y1.pure.simultaneous.q044",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Simultaneous equations",
    "subtopicId": "al.y1.pure.simultaneous",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "expression",
    "tags": [
      "simultaneous equations",
      "linear-quadratic",
      "substitution",
      "intersection"
    ],
    "questionText": "Solve the simultaneous equations $y = 2x + 1$ and $y = x^2 + 2x - 3$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recognise a linear-quadratic system.",
          "workingLatex": "y = 2x + 1 \\ (\\text{line}), \\quad y = x^2 + 2x - 3 \\ (\\text{curve})",
          "explanation": "Setting the two expressions for $y$ equal gives a single quadratic whose solutions are the intersection points.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Set the expressions equal.",
          "workingLatex": "x^2 + 2x - 3 = 2x + 1",
          "explanation": "At a common point both expressions for $y$ are equal.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Rearrange to a quadratic.",
          "workingLatex": "x^2 - 4 = 0",
          "explanation": "The $2x$ terms cancel from both sides, leaving $x^2 - 4 = 0$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Factorise the difference of squares.",
          "workingLatex": "(x - 2)(x + 2) = 0",
          "explanation": "Since $x^2 - 4$ is a difference of two squares, it factorises as $(x-2)(x+2)$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve for x.",
          "workingLatex": "x = 2 \\ \\text{ or } \\ x = -2",
          "explanation": "Setting each factor to zero gives the two $x$-coordinates.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find y for x = 2.",
          "workingLatex": "y = 2(2) + 1 = 5",
          "explanation": "Substituting $x = 2$ into the line $y = 2x + 1$ gives $y = 5$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Find y for x = -2.",
          "workingLatex": "y = 2(-2) + 1 = -3",
          "explanation": "Substituting $x = -2$ into the line gives $y = -3$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Write the solution pairs.",
          "workingLatex": "(2, 5) \\ \\text{ and } \\ (-2, -3)",
          "explanation": "Each $x$ pairs with its $y$ to give an intersection point.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Check the first point on the curve.",
          "workingLatex": "2^2 + 2(2) - 3 = 4 + 4 - 3 = 5 \\ \\checkmark",
          "explanation": "Substituting $x = 2$ into the curve gives $y = 5$, confirming the point lies on both graphs.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Check the second point on the curve.",
          "workingLatex": "(-2)^2 + 2(-2) - 3 = 4 - 4 - 3 = -3 \\ \\checkmark",
          "explanation": "Substituting $x = -2$ into the curve gives $y = -3$, confirming the second point.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Note the number of intersections.",
          "workingLatex": "\\text{two real roots} \\Rightarrow \\text{two points}",
          "explanation": "The quadratic had two distinct roots, so the line meets the curve at two separate points.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Interpret geometrically.",
          "workingLatex": "\\text{the line crosses the curve twice}",
          "explanation": "Two real solutions mean the line and the parabola intersect at two distinct points.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "State the solution.",
          "workingLatex": "(x, y) = (2, 5) \\text{ or } (-2, -3)",
          "explanation": "The solutions are $(2, 5)$ and $(-2, -3)$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x^2 + 2x - 3 = 2x + 1 \\Rightarrow x^2 - 4 = 0 \\Rightarrow x = \\pm 2 \\Rightarrow (2,5) \\text{ or } (-2,-3)$"
    }
  },
  {
    "id": "al.y1.pure.simultaneous.q045",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Simultaneous equations",
    "subtopicId": "al.y1.pure.simultaneous",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "expression",
    "tags": [
      "simultaneous equations",
      "linear-quadratic",
      "substitution",
      "intersection"
    ],
    "questionText": "Solve the simultaneous equations $y = x + 2$ and $y = x^2 - 4$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recognise a linear-quadratic system.",
          "workingLatex": "y = x + 2 \\ (\\text{line}), \\quad y = x^2 - 4 \\ (\\text{curve})",
          "explanation": "Setting the two expressions for $y$ equal gives a single quadratic to solve.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Set the expressions equal.",
          "workingLatex": "x^2 - 4 = x + 2",
          "explanation": "At a common point both expressions for $y$ are equal.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Rearrange to a quadratic.",
          "workingLatex": "x^2 - x - 6 = 0",
          "explanation": "Bringing all terms to one side gives a quadratic in $x$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Factorise.",
          "workingLatex": "(x - 3)(x + 2) = 0",
          "explanation": "Two numbers multiplying to $-6$ and adding to $-1$ are $-3$ and $2$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve for x.",
          "workingLatex": "x = 3 \\ \\text{ or } \\ x = -2",
          "explanation": "Setting each factor to zero gives the two $x$-coordinates.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find y for x = 3.",
          "workingLatex": "y = 3 + 2 = 5",
          "explanation": "Substituting $x = 3$ into the line $y = x + 2$ gives $y = 5$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Find y for x = -2.",
          "workingLatex": "y = -2 + 2 = 0",
          "explanation": "Substituting $x = -2$ into the line gives $y = 0$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Write the solution pairs.",
          "workingLatex": "(3, 5) \\ \\text{ and } \\ (-2, 0)",
          "explanation": "Each $x$ pairs with its $y$ to give an intersection point.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Check the first point on the curve.",
          "workingLatex": "3^2 - 4 = 9 - 4 = 5 \\ \\checkmark",
          "explanation": "Substituting $x = 3$ into the curve gives $y = 5$, confirming the point.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Check the second point on the curve.",
          "workingLatex": "(-2)^2 - 4 = 4 - 4 = 0 \\ \\checkmark",
          "explanation": "Substituting $x = -2$ into the curve gives $y = 0$, confirming the second point.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Note the number of intersections.",
          "workingLatex": "\\text{two real roots} \\Rightarrow \\text{two points}",
          "explanation": "The quadratic had two distinct roots, so the line meets the curve at two separate points.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Interpret geometrically.",
          "workingLatex": "\\text{the line crosses the curve twice}",
          "explanation": "Two real solutions mean the line and the parabola intersect at two distinct points.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "State the solution.",
          "workingLatex": "(x, y) = (3, 5) \\text{ or } (-2, 0)",
          "explanation": "The solutions are $(3, 5)$ and $(-2, 0)$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x^2 - 4 = x + 2 \\Rightarrow x^2 - x - 6 = (x-3)(x+2) = 0 \\Rightarrow (3,5) \\text{ or } (-2,0)$"
    }
  },
  {
    "id": "al.y1.pure.simultaneous.q046",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Simultaneous equations",
    "subtopicId": "al.y1.pure.simultaneous",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "expression",
    "tags": [
      "simultaneous equations",
      "linear-quadratic",
      "circle",
      "intersection"
    ],
    "questionText": "Solve the simultaneous equations $x + y = 7$ and $x^2 + y^2 = 25$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recognise a linear-quadratic system.",
          "workingLatex": "x + y = 7 \\ (\\text{line}), \\quad x^2 + y^2 = 25 \\ (\\text{circle})",
          "explanation": "Substituting the line into the circle gives a single quadratic whose solutions are the intersection points.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Rearrange the linear equation.",
          "workingLatex": "y = 7 - x",
          "explanation": "Making $y$ the subject of the line prepares it for substitution.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute into the circle equation.",
          "workingLatex": "x^2 + (7 - x)^2 = 25",
          "explanation": "Replacing $y$ with $7 - x$ gives an equation in $x$ alone.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Expand the bracket.",
          "workingLatex": "x^2 + 49 - 14x + x^2 = 25",
          "explanation": "Expanding $(7 - x)^2$ gives $49 - 14x + x^2$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Collect terms.",
          "workingLatex": "2x^2 - 14x + 49 = 25",
          "explanation": "Combining the two $x^2$ terms gives $2x^2 - 14x + 49$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Rearrange and simplify.",
          "workingLatex": "2x^2 - 14x + 24 = 0 \\Rightarrow x^2 - 7x + 12 = 0",
          "explanation": "Subtracting $25$ and dividing by $2$ gives a simpler quadratic.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Factorise.",
          "workingLatex": "(x - 3)(x - 4) = 0",
          "explanation": "Two numbers multiplying to $12$ and adding to $-7$ are $-3$ and $-4$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Solve for x.",
          "workingLatex": "x = 3 \\ \\text{ or } \\ x = 4",
          "explanation": "Setting each factor to zero gives the two $x$-coordinates.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Find the matching y values.",
          "workingLatex": "x = 3 \\Rightarrow y = 4, \\quad x = 4 \\Rightarrow y = 3",
          "explanation": "Substituting each $x$ into $y = 7 - x$ gives the paired $y$ values.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Check a point on the circle.",
          "workingLatex": "3^2 + 4^2 = 9 + 16 = 25 \\ \\checkmark",
          "explanation": "The point $(3, 4)$ satisfies $x^2 + y^2 = 25$, confirming it lies on the circle.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Note the number of intersections.",
          "workingLatex": "\\text{two real roots} \\Rightarrow \\text{two points}",
          "explanation": "The quadratic had two distinct roots, so the line cuts the circle at two separate points.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Interpret geometrically.",
          "workingLatex": "\\text{the line is a chord of the circle}",
          "explanation": "A line meeting a circle at two points is a chord.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "State the solution.",
          "workingLatex": "(x, y) = (3, 4) \\text{ or } (4, 3)",
          "explanation": "The solutions are $(3, 4)$ and $(4, 3)$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$y = 7 - x \\Rightarrow x^2 + (7-x)^2 = 25 \\Rightarrow x^2 - 7x + 12 = 0 \\Rightarrow (3,4) \\text{ or } (4,3)$"
    }
  },
  {
    "id": "al.y1.pure.simultaneous.q047",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Simultaneous equations",
    "subtopicId": "al.y1.pure.simultaneous",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "expression",
    "tags": [
      "simultaneous equations",
      "linear-quadratic",
      "substitution",
      "intersection"
    ],
    "questionText": "Solve the simultaneous equations $y = x - 2$ and $y = x^2 - 4x + 2$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recognise a linear-quadratic system.",
          "workingLatex": "y = x - 2 \\ (\\text{line}), \\quad y = x^2 - 4x + 2 \\ (\\text{curve})",
          "explanation": "Setting the two expressions for $y$ equal gives a single quadratic whose solutions are the intersection points.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Set the expressions equal.",
          "workingLatex": "x^2 - 4x + 2 = x - 2",
          "explanation": "At a common point both expressions for $y$ are equal.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Rearrange to a quadratic.",
          "workingLatex": "x^2 - 5x + 4 = 0",
          "explanation": "Bringing all terms to one side gives $x^2 - 5x + 4 = 0$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Factorise.",
          "workingLatex": "(x - 1)(x - 4) = 0",
          "explanation": "Two numbers multiplying to $4$ and adding to $-5$ are $-1$ and $-4$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve for x.",
          "workingLatex": "x = 1 \\ \\text{ or } \\ x = 4",
          "explanation": "Setting each factor to zero gives the two $x$-coordinates.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find y for x = 1.",
          "workingLatex": "y = 1 - 2 = -1",
          "explanation": "Substituting $x = 1$ into the line $y = x - 2$ gives $y = -1$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Find y for x = 4.",
          "workingLatex": "y = 4 - 2 = 2",
          "explanation": "Substituting $x = 4$ into the line gives $y = 2$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Write the solution pairs.",
          "workingLatex": "(1, -1) \\ \\text{ and } \\ (4, 2)",
          "explanation": "Each $x$ pairs with its $y$ to give an intersection point.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Check the first point on the curve.",
          "workingLatex": "1 - 4 + 2 = -1 \\ \\checkmark",
          "explanation": "Substituting $x = 1$ into the curve gives $y = -1$, confirming the point.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Check the second point on the curve.",
          "workingLatex": "16 - 16 + 2 = 2 \\ \\checkmark",
          "explanation": "Substituting $x = 4$ into the curve gives $y = 2$, confirming the second point.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Note the number of intersections.",
          "workingLatex": "\\text{two real roots} \\Rightarrow \\text{two points}",
          "explanation": "The quadratic had two distinct roots, so the line meets the curve at two separate points.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Interpret geometrically.",
          "workingLatex": "\\text{the line crosses the curve twice}",
          "explanation": "Two real solutions mean the line and the parabola intersect at two distinct points.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "State the solution.",
          "workingLatex": "(x, y) = (1, -1) \\text{ or } (4, 2)",
          "explanation": "The solutions are $(1, -1)$ and $(4, 2)$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x^2 - 4x + 2 = x - 2 \\Rightarrow x^2 - 5x + 4 = (x-1)(x-4) = 0 \\Rightarrow (1,-1) \\text{ or } (4,2)$"
    }
  },
  {
    "id": "al.y1.pure.simultaneous.q048",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Simultaneous equations",
    "subtopicId": "al.y1.pure.simultaneous",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "expression",
    "tags": [
      "simultaneous equations",
      "linear-quadratic",
      "substitution"
    ],
    "questionText": "Solve the simultaneous equations $x + y = 7$ and $xy = 10$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recognise a linear-quadratic system.",
          "workingLatex": "x + y = 7 \\ (\\text{linear}), \\quad xy = 10 \\ (\\text{quadratic})",
          "explanation": "The product $xy$ makes the second equation quadratic; substituting the linear equation gives a quadratic in one variable.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Rearrange the linear equation.",
          "workingLatex": "y = 7 - x",
          "explanation": "Making $y$ the subject of the linear equation prepares it for substitution.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute into the second equation.",
          "workingLatex": "x(7 - x) = 10",
          "explanation": "Replacing $y$ with $7 - x$ in $xy = 10$ gives an equation in $x$ alone.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Expand.",
          "workingLatex": "7x - x^2 = 10",
          "explanation": "Multiplying out the bracket gives $7x - x^2$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Rearrange to standard form.",
          "workingLatex": "x^2 - 7x + 10 = 0",
          "explanation": "Moving all terms to one side (with a positive $x^2$ coefficient) gives a standard quadratic.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Factorise.",
          "workingLatex": "(x - 2)(x - 5) = 0",
          "explanation": "Two numbers multiplying to $10$ and adding to $-7$ are $-2$ and $-5$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Solve for x.",
          "workingLatex": "x = 2 \\ \\text{ or } \\ x = 5",
          "explanation": "Setting each factor to zero gives the two $x$-values.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Find y for x = 2.",
          "workingLatex": "y = 7 - 2 = 5",
          "explanation": "Substituting $x = 2$ into $y = 7 - x$ gives $y = 5$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Find y for x = 5.",
          "workingLatex": "y = 7 - 5 = 2",
          "explanation": "Substituting $x = 5$ into $y = 7 - x$ gives $y = 2$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Write the solution pairs.",
          "workingLatex": "(2, 5) \\ \\text{ and } \\ (5, 2)",
          "explanation": "Each $x$ pairs with its $y$; note the two solutions are the same pair of numbers in each order.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Check the products.",
          "workingLatex": "2 \\times 5 = 10, \\quad 5 \\times 2 = 10 \\ \\checkmark",
          "explanation": "Both pairs satisfy $xy = 10$, confirming the solutions.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Check the sums.",
          "workingLatex": "2 + 5 = 7, \\quad 5 + 2 = 7 \\ \\checkmark",
          "explanation": "Both pairs also satisfy $x + y = 7$, so each solves the whole system.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "State the solution.",
          "workingLatex": "(x, y) = (2, 5) \\text{ or } (5, 2)",
          "explanation": "The solutions are $(2, 5)$ and $(5, 2)$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$y = 7 - x \\Rightarrow x(7-x) = 10 \\Rightarrow x^2 - 7x + 10 = (x-2)(x-5) = 0 \\Rightarrow (2,5) \\text{ or } (5,2)$"
    }
  },
  {
    "id": "al.y1.pure.simultaneous.q049",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Simultaneous equations",
    "subtopicId": "al.y1.pure.simultaneous",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "expression",
    "tags": [
      "simultaneous equations",
      "word problem",
      "linear",
      "geometry"
    ],
    "questionText": "A rectangle has a perimeter of $26$ cm. Its length is $3$ cm more than its width. Find its length and width.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Define the variables.",
          "workingLatex": "l = \\text{length}, \\ w = \\text{width}",
          "explanation": "Introducing letters for the two unknown dimensions turns the words into algebra.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Translate the perimeter.",
          "workingLatex": "2(l + w) = 26",
          "explanation": "The perimeter of a rectangle is twice the sum of length and width, and this equals $26$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Simplify the perimeter equation.",
          "workingLatex": "l + w = 13 \\ (1)",
          "explanation": "Dividing by $2$ gives the tidy equation $l + w = 13$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Translate the length condition.",
          "workingLatex": "l = w + 3 \\ (2)",
          "explanation": "`The length is $3$ cm more than the width' becomes $l = w + 3$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute (2) into (1).",
          "workingLatex": "(w + 3) + w = 13",
          "explanation": "Replacing $l$ with $w + 3$ gives an equation in $w$ alone.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Simplify.",
          "workingLatex": "2w + 3 = 13",
          "explanation": "Collecting the $w$ terms gives $2w + 3 = 13$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Solve for w.",
          "workingLatex": "2w = 10 \\Rightarrow w = 5",
          "explanation": "Subtracting $3$ then dividing by $2$ gives $w = 5$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Find the length.",
          "workingLatex": "l = 5 + 3 = 8",
          "explanation": "Substituting $w = 5$ into $l = w + 3$ gives $l = 8$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Check the perimeter.",
          "workingLatex": "2(8 + 5) = 2(13) = 26 \\ \\checkmark",
          "explanation": "The perimeter is $26$ cm, matching the given information.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Check the length condition.",
          "workingLatex": "8 = 5 + 3 \\ \\checkmark",
          "explanation": "The length is indeed $3$ cm more than the width.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Confirm the dimensions are sensible.",
          "workingLatex": "l = 8 > w = 5 > 0",
          "explanation": "Both dimensions are positive and the length exceeds the width, as expected for a valid rectangle.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Note the area as a further check.",
          "workingLatex": "\\text{area} = 8 \\times 5 = 40 \\text{ cm}^2",
          "explanation": "As an extra consistency check, the rectangle's area works out to a sensible $40$ cm$^2$ from the found dimensions.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "State the answer.",
          "workingLatex": "\\text{length } 8\\text{ cm}, \\ \\text{width } 5\\text{ cm}",
          "explanation": "The rectangle is $8$ cm long and $5$ cm wide.",
          "diagram": null
        }
      ],
      "finalAnswer": "$l + w = 13,\\ l = w + 3$; substituting gives $2w + 3 = 13 \\Rightarrow w = 5,\\ l = 8$. Length $8$ cm, width $5$ cm."
    }
  },
  {
    "id": "al.y1.pure.simultaneous.q050",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Simultaneous equations",
    "subtopicId": "al.y1.pure.simultaneous",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "expression",
    "tags": [
      "simultaneous equations",
      "word problem",
      "linear-quadratic"
    ],
    "questionText": "The difference between two numbers is $4$ and the sum of their squares is $40$. Find the two numbers.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Define the variables.",
          "workingLatex": "\\text{let the numbers be } x \\text{ and } y",
          "explanation": "Introducing letters for the two unknown numbers turns the words into algebra.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Translate the difference.",
          "workingLatex": "x - y = 4 \\ (1)",
          "explanation": "`The difference is $4$' becomes $x - y = 4$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Translate the sum of squares.",
          "workingLatex": "x^2 + y^2 = 40 \\ (2)",
          "explanation": "`The sum of their squares is $40$' becomes $x^2 + y^2 = 40$; this is the quadratic equation.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Rearrange the linear equation.",
          "workingLatex": "x = y + 4",
          "explanation": "Making $x$ the subject of the linear equation prepares it for substitution.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute into the quadratic.",
          "workingLatex": "(y + 4)^2 + y^2 = 40",
          "explanation": "Replacing $x$ with $y + 4$ in equation (2) gives an equation in $y$ alone.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Expand.",
          "workingLatex": "y^2 + 8y + 16 + y^2 = 40",
          "explanation": "Expanding $(y + 4)^2$ gives $y^2 + 8y + 16$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Collect and simplify.",
          "workingLatex": "2y^2 + 8y - 24 = 0 \\Rightarrow y^2 + 4y - 12 = 0",
          "explanation": "Combining terms, subtracting $40$, and dividing by $2$ gives a simpler quadratic.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Factorise.",
          "workingLatex": "(y + 6)(y - 2) = 0",
          "explanation": "Two numbers multiplying to $-12$ and adding to $4$ are $6$ and $-2$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Solve for y.",
          "workingLatex": "y = -6 \\ \\text{ or } \\ y = 2",
          "explanation": "Setting each factor to zero gives the two values of $y$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Find the matching x values.",
          "workingLatex": "y = -6 \\Rightarrow x = -2, \\quad y = 2 \\Rightarrow x = 6",
          "explanation": "Substituting each $y$ into $x = y + 4$ gives the paired $x$ values.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "State the two number pairs.",
          "workingLatex": "(6, 2) \\ \\text{ and } \\ (-2, -6)",
          "explanation": "So the two numbers are either $6$ and $2$, or $-2$ and $-6$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Check one pair.",
          "workingLatex": "6 - 2 = 4, \\quad 6^2 + 2^2 = 36 + 4 = 40 \\ \\checkmark",
          "explanation": "The pair $6, 2$ has difference $4$ and sum of squares $40$, satisfying both conditions.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "State the answer.",
          "workingLatex": "\\text{the numbers are } 6, 2 \\ \\text{ or } \\ -2, -6",
          "explanation": "The two numbers are $6$ and $2$, or $-2$ and $-6$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x - y = 4,\\ x^2 + y^2 = 40$; substituting gives $y^2 + 4y - 12 = 0 \\Rightarrow (6,2) \\text{ or } (-2,-6)$."
    }
  },
  {
    "id": "al.y1.pure.simultaneous.q051",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Simultaneous equations",
    "subtopicId": "al.y1.pure.simultaneous",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": [
      "simultaneous equations",
      "elimination",
      "linear"
    ],
    "questionText": "Solve the simultaneous equations $x + y = 9$ and $x - y = 1$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Label the equations.",
          "workingLatex": "x + y = 9 \\ (1), \\quad x - y = 1 \\ (2)",
          "explanation": "Numbering the equations lets us combine them clearly.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Choose a variable to eliminate.",
          "workingLatex": "\\text{add (1) and (2) to remove } y",
          "explanation": "The $+y$ and $-y$ are opposites, so adding the equations cancels $y$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Add the equations.",
          "workingLatex": "(x + y) + (x - y) = 9 + 1",
          "explanation": "Adding term by term keeps the equation balanced and removes $y$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Simplify to find x.",
          "workingLatex": "2x = 10 \\Rightarrow x = 5",
          "explanation": "The $y$ terms cancel, leaving $2x = 10$, so $x = 5$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute back.",
          "workingLatex": "5 + y = 9 \\Rightarrow y = 4",
          "explanation": "Putting $x = 5$ into equation (1) gives $y = 4$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check in the other equation.",
          "workingLatex": "5 - 4 = 1 \\ \\checkmark",
          "explanation": "Substituting into equation (2) confirms both equations are satisfied.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the solution.",
          "workingLatex": "x = 5, \\ y = 4",
          "explanation": "The solution is $x = 5$ and $y = 4$.",
          "diagram": null
        }
      ],
      "finalAnswer": "Adding gives $2x = 10 \\Rightarrow x = 5$, then $y = 4$. Solution: $x = 5,\\ y = 4$."
    }
  },
  {
    "id": "al.y1.pure.simultaneous.q052",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Simultaneous equations",
    "subtopicId": "al.y1.pure.simultaneous",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": [
      "simultaneous equations",
      "elimination",
      "linear"
    ],
    "questionText": "Solve the simultaneous equations $2x - y = 7$ and $x + y = 5$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Label the equations.",
          "workingLatex": "2x - y = 7 \\ (1), \\quad x + y = 5 \\ (2)",
          "explanation": "Numbering the equations helps track the elimination.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Choose a variable to eliminate.",
          "workingLatex": "\\text{add (1) and (2) to remove } y",
          "explanation": "The $-y$ in (1) and $+y$ in (2) are opposites, so adding cancels $y$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Add the equations.",
          "workingLatex": "(2x - y) + (x + y) = 7 + 5",
          "explanation": "Adding term by term removes the $y$ terms.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Simplify to find x.",
          "workingLatex": "3x = 12 \\Rightarrow x = 4",
          "explanation": "The $y$ terms cancel, leaving $3x = 12$, so $x = 4$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute back.",
          "workingLatex": "4 + y = 5 \\Rightarrow y = 1",
          "explanation": "Putting $x = 4$ into equation (2) gives $y = 1$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check in the other equation.",
          "workingLatex": "2(4) - 1 = 8 - 1 = 7 \\ \\checkmark",
          "explanation": "Substituting into equation (1) confirms both equations are satisfied.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the solution.",
          "workingLatex": "x = 4, \\ y = 1",
          "explanation": "The solution is $x = 4$ and $y = 1$.",
          "diagram": null
        }
      ],
      "finalAnswer": "Adding gives $3x = 12 \\Rightarrow x = 4$, then $y = 1$. Solution: $x = 4,\\ y = 1$."
    }
  },
  {
    "id": "al.y1.pure.simultaneous.q053",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Simultaneous equations",
    "subtopicId": "al.y1.pure.simultaneous",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": [
      "simultaneous equations",
      "substitution",
      "linear"
    ],
    "questionText": "Solve the simultaneous equations $y = 4x$ and $x + y = 10$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Note one variable is isolated.",
          "workingLatex": "y = 4x",
          "explanation": "Since $y$ is given in terms of $x$, substitution is the quickest method.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute into the other equation.",
          "workingLatex": "x + 4x = 10",
          "explanation": "Replacing $y$ with $4x$ in $x + y = 10$ gives an equation in $x$ alone.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Simplify.",
          "workingLatex": "5x = 10",
          "explanation": "Collecting the $x$ terms gives $5x = 10$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Solve for x.",
          "workingLatex": "x = 2",
          "explanation": "Dividing both sides by $5$ gives $x = 2$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find y.",
          "workingLatex": "y = 4(2) = 8",
          "explanation": "Substituting $x = 2$ into $y = 4x$ gives $y = 8$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check.",
          "workingLatex": "2 + 8 = 10 \\ \\checkmark",
          "explanation": "Substituting into $x + y = 10$ confirms the solution.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the solution.",
          "workingLatex": "x = 2, \\ y = 8",
          "explanation": "The solution is $x = 2$ and $y = 8$.",
          "diagram": null
        }
      ],
      "finalAnswer": "Substituting $y = 4x$: $5x = 10 \\Rightarrow x = 2$, $y = 8$. Solution: $x = 2,\\ y = 8$."
    }
  },
  {
    "id": "al.y1.pure.simultaneous.q054",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Simultaneous equations",
    "subtopicId": "al.y1.pure.simultaneous",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": [
      "simultaneous equations",
      "substitution",
      "linear"
    ],
    "questionText": "Solve the simultaneous equations $y = x - 1$ and $3x + y = 15$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Note one variable is isolated.",
          "workingLatex": "y = x - 1",
          "explanation": "Since $y$ is given in terms of $x$, we substitute it into the other equation.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute into the other equation.",
          "workingLatex": "3x + (x - 1) = 15",
          "explanation": "Replacing $y$ with $x - 1$ in $3x + y = 15$ gives an equation in $x$ alone.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Simplify.",
          "workingLatex": "4x - 1 = 15",
          "explanation": "Collecting the $x$ terms gives $4x - 1 = 15$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Solve for x.",
          "workingLatex": "4x = 16 \\Rightarrow x = 4",
          "explanation": "Adding $1$ then dividing by $4$ gives $x = 4$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find y.",
          "workingLatex": "y = 4 - 1 = 3",
          "explanation": "Substituting $x = 4$ into $y = x - 1$ gives $y = 3$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check.",
          "workingLatex": "3(4) + 3 = 12 + 3 = 15 \\ \\checkmark",
          "explanation": "Substituting into $3x + y = 15$ confirms the solution.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the solution.",
          "workingLatex": "x = 4, \\ y = 3",
          "explanation": "The solution is $x = 4$ and $y = 3$.",
          "diagram": null
        }
      ],
      "finalAnswer": "Substituting $y = x - 1$: $4x - 1 = 15 \\Rightarrow x = 4$, $y = 3$. Solution: $x = 4,\\ y = 3$."
    }
  },
  {
    "id": "al.y1.pure.simultaneous.q055",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Simultaneous equations",
    "subtopicId": "al.y1.pure.simultaneous",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": [
      "simultaneous equations",
      "substitution",
      "linear"
    ],
    "questionText": "Solve the simultaneous equations $x = 3y$ and $2x + y = 14$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Note one variable is isolated.",
          "workingLatex": "x = 3y",
          "explanation": "Since $x$ is given in terms of $y$, we substitute it into the other equation.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute into the other equation.",
          "workingLatex": "2(3y) + y = 14",
          "explanation": "Replacing $x$ with $3y$ in $2x + y = 14$ gives an equation in $y$ alone.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Simplify.",
          "workingLatex": "6y + y = 14 \\Rightarrow 7y = 14",
          "explanation": "Multiplying out and collecting the $y$ terms gives $7y = 14$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Solve for y.",
          "workingLatex": "y = 2",
          "explanation": "Dividing both sides by $7$ gives $y = 2$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find x.",
          "workingLatex": "x = 3(2) = 6",
          "explanation": "Substituting $y = 2$ into $x = 3y$ gives $x = 6$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check.",
          "workingLatex": "2(6) + 2 = 12 + 2 = 14 \\ \\checkmark",
          "explanation": "Substituting into $2x + y = 14$ confirms the solution.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the solution.",
          "workingLatex": "x = 6, \\ y = 2",
          "explanation": "The solution is $x = 6$ and $y = 2$.",
          "diagram": null
        }
      ],
      "finalAnswer": "Substituting $x = 3y$: $7y = 14 \\Rightarrow y = 2$, $x = 6$. Solution: $x = 6,\\ y = 2$."
    }
  },
  {
    "id": "al.y1.pure.simultaneous.q056",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Simultaneous equations",
    "subtopicId": "al.y1.pure.simultaneous",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": [
      "simultaneous equations",
      "elimination",
      "linear"
    ],
    "questionText": "Solve the simultaneous equations $x + 2y = 9$ and $x - 2y = 1$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Label the equations.",
          "workingLatex": "x + 2y = 9 \\ (1), \\quad x - 2y = 1 \\ (2)",
          "explanation": "Numbering the equations makes the elimination clear.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Choose a variable to eliminate.",
          "workingLatex": "\\text{add (1) and (2) to remove } y",
          "explanation": "The $+2y$ and $-2y$ are opposites, so adding the equations cancels $y$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Add the equations.",
          "workingLatex": "(x + 2y) + (x - 2y) = 9 + 1",
          "explanation": "Adding term by term removes the $y$ terms.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Simplify to find x.",
          "workingLatex": "2x = 10 \\Rightarrow x = 5",
          "explanation": "The $y$ terms cancel, leaving $2x = 10$, so $x = 5$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute back.",
          "workingLatex": "5 + 2y = 9 \\Rightarrow 2y = 4",
          "explanation": "Putting $x = 5$ into equation (1) gives $2y = 4$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Solve for y.",
          "workingLatex": "y = 2",
          "explanation": "Dividing by $2$ gives $y = 2$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check in the other equation.",
          "workingLatex": "5 - 2(2) = 5 - 4 = 1 \\ \\checkmark",
          "explanation": "Substituting into equation (2) confirms both equations are satisfied.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State the solution.",
          "workingLatex": "x = 5, \\ y = 2",
          "explanation": "The solution is $x = 5$ and $y = 2$.",
          "diagram": null
        }
      ],
      "finalAnswer": "Adding gives $2x = 10 \\Rightarrow x = 5$, then $y = 2$. Solution: $x = 5,\\ y = 2$."
    }
  },
  {
    "id": "al.y1.pure.simultaneous.q057",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Simultaneous equations",
    "subtopicId": "al.y1.pure.simultaneous",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "expression",
    "tags": [
      "simultaneous equations",
      "elimination",
      "linear"
    ],
    "questionText": "Solve the simultaneous equations $4x + 3y = 18$ and $5x - 3y = 9$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Label the equations.",
          "workingLatex": "4x + 3y = 18 \\ (1), \\quad 5x - 3y = 9 \\ (2)",
          "explanation": "The $y$ terms are already equal and opposite, so adding will eliminate $y$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Add the equations.",
          "workingLatex": "(4x + 3y) + (5x - 3y) = 18 + 9",
          "explanation": "The $+3y$ and $-3y$ cancel when we add the two equations.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Simplify to find x.",
          "workingLatex": "9x = 27 \\Rightarrow x = 3",
          "explanation": "The $y$ terms cancel, leaving $9x = 27$, so $x = 3$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute back.",
          "workingLatex": "4(3) + 3y = 18",
          "explanation": "Putting $x = 3$ into equation (1) gives an equation in $y$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify.",
          "workingLatex": "12 + 3y = 18 \\Rightarrow 3y = 6",
          "explanation": "Subtracting $12$ gives $3y = 6$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Solve for y.",
          "workingLatex": "y = 2",
          "explanation": "Dividing by $3$ gives $y = 2$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the intermediate solution.",
          "workingLatex": "x = 3, \\ y = 2",
          "explanation": "So far we have $x = 3$ and $y = 2$; we verify before finalising.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check in equation (2).",
          "workingLatex": "5(3) - 3(2) = 15 - 6 = 9 \\ \\checkmark",
          "explanation": "Substituting into equation (2) confirms both equations are satisfied.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the solution.",
          "workingLatex": "x = 3, \\ y = 2",
          "explanation": "The solution is $x = 3$ and $y = 2$.",
          "diagram": null
        }
      ],
      "finalAnswer": "Adding gives $9x = 27 \\Rightarrow x = 3$, then $y = 2$. Solution: $x = 3,\\ y = 2$."
    }
  },
  {
    "id": "al.y1.pure.simultaneous.q058",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Simultaneous equations",
    "subtopicId": "al.y1.pure.simultaneous",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "expression",
    "tags": [
      "simultaneous equations",
      "elimination",
      "linear"
    ],
    "questionText": "Solve the simultaneous equations $3x + 5y = 21$ and $3x - 2y = 0$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Label the equations.",
          "workingLatex": "3x + 5y = 21 \\ (1), \\quad 3x - 2y = 0 \\ (2)",
          "explanation": "Both equations have $3x$, so subtracting them will eliminate $x$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Subtract the equations.",
          "workingLatex": "(1) - (2): \\ (3x + 5y) - (3x - 2y) = 21 - 0",
          "explanation": "The $3x$ terms cancel when we subtract equation (2) from equation (1).",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Simplify to find y.",
          "workingLatex": "7y = 21 \\Rightarrow y = 3",
          "explanation": "The $x$ terms cancel, leaving $7y = 21$, so $y = 3$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute back.",
          "workingLatex": "3x - 2(3) = 0",
          "explanation": "Putting $y = 3$ into equation (2) gives an equation in $x$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify.",
          "workingLatex": "3x - 6 = 0 \\Rightarrow 3x = 6",
          "explanation": "Rearranging gives $3x = 6$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Solve for x.",
          "workingLatex": "x = 2",
          "explanation": "Dividing by $3$ gives $x = 2$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the intermediate solution.",
          "workingLatex": "x = 2, \\ y = 3",
          "explanation": "So far we have $x = 2$ and $y = 3$; we verify before finalising.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check in equation (1).",
          "workingLatex": "3(2) + 5(3) = 6 + 15 = 21 \\ \\checkmark",
          "explanation": "Substituting into equation (1) confirms both equations are satisfied.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the solution.",
          "workingLatex": "x = 2, \\ y = 3",
          "explanation": "The solution is $x = 2$ and $y = 3$.",
          "diagram": null
        }
      ],
      "finalAnswer": "Subtracting gives $7y = 21 \\Rightarrow y = 3$, then $x = 2$. Solution: $x = 2,\\ y = 3$."
    }
  },
  {
    "id": "al.y1.pure.simultaneous.q059",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Simultaneous equations",
    "subtopicId": "al.y1.pure.simultaneous",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "expression",
    "tags": [
      "simultaneous equations",
      "elimination",
      "linear"
    ],
    "questionText": "Solve the simultaneous equations $3x + 4y = 16$ and $5x - 4y = 16$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Label the equations.",
          "workingLatex": "3x + 4y = 16 \\ (1), \\quad 5x - 4y = 16 \\ (2)",
          "explanation": "The $y$ terms are already equal and opposite, so adding will eliminate $y$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Add the equations.",
          "workingLatex": "(3x + 4y) + (5x - 4y) = 16 + 16",
          "explanation": "The $+4y$ and $-4y$ cancel when we add the two equations.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Simplify to find x.",
          "workingLatex": "8x = 32 \\Rightarrow x = 4",
          "explanation": "The $y$ terms cancel, leaving $8x = 32$, so $x = 4$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute back.",
          "workingLatex": "3(4) + 4y = 16",
          "explanation": "Putting $x = 4$ into equation (1) gives an equation in $y$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify.",
          "workingLatex": "12 + 4y = 16 \\Rightarrow 4y = 4",
          "explanation": "Subtracting $12$ gives $4y = 4$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Solve for y.",
          "workingLatex": "y = 1",
          "explanation": "Dividing by $4$ gives $y = 1$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the intermediate solution.",
          "workingLatex": "x = 4, \\ y = 1",
          "explanation": "So far we have $x = 4$ and $y = 1$; we verify before finalising.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check in equation (2).",
          "workingLatex": "5(4) - 4(1) = 20 - 4 = 16 \\ \\checkmark",
          "explanation": "Substituting into equation (2) confirms both equations are satisfied.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the solution.",
          "workingLatex": "x = 4, \\ y = 1",
          "explanation": "The solution is $x = 4$ and $y = 1$.",
          "diagram": null
        }
      ],
      "finalAnswer": "Adding gives $8x = 32 \\Rightarrow x = 4$, then $y = 1$. Solution: $x = 4,\\ y = 1$."
    }
  },
  {
    "id": "al.y1.pure.simultaneous.q060",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Simultaneous equations",
    "subtopicId": "al.y1.pure.simultaneous",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "expression",
    "tags": [
      "simultaneous equations",
      "elimination",
      "scaling",
      "linear"
    ],
    "questionText": "Solve the simultaneous equations $4x + y = 7$ and $2x + 3y = 11$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Label the equations.",
          "workingLatex": "4x + y = 7 \\ (1), \\quad 2x + 3y = 11 \\ (2)",
          "explanation": "We scale equation (1) so its $y$ term matches equation (2).",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Scale equation (1).",
          "workingLatex": "3 \\times (1): \\ 12x + 3y = 21 \\ (3)",
          "explanation": "Multiplying (1) by $3$ makes the $y$ coefficient $3y$, matching equation (2).",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Subtract to eliminate y.",
          "workingLatex": "(3) - (2): \\ (12x + 3y) - (2x + 3y) = 21 - 11",
          "explanation": "Both equations now have $3y$, so subtracting removes the $y$ terms.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Simplify to find x.",
          "workingLatex": "10x = 10 \\Rightarrow x = 1",
          "explanation": "The $y$ terms cancel, leaving $10x = 10$, so $x = 1$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute back.",
          "workingLatex": "4(1) + y = 7",
          "explanation": "Putting $x = 1$ into equation (1) gives an equation in $y$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Simplify.",
          "workingLatex": "4 + y = 7 \\Rightarrow y = 3",
          "explanation": "Subtracting $4$ gives $y = 3$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the intermediate solution.",
          "workingLatex": "x = 1, \\ y = 3",
          "explanation": "So far we have $x = 1$ and $y = 3$; we verify before finalising.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check in equation (2).",
          "workingLatex": "2(1) + 3(3) = 2 + 9 = 11 \\ \\checkmark",
          "explanation": "Substituting into equation (2) confirms both equations are satisfied.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the solution.",
          "workingLatex": "x = 1, \\ y = 3",
          "explanation": "The solution is $x = 1$ and $y = 3$.",
          "diagram": null
        }
      ],
      "finalAnswer": "Scaling (1) by 3 and subtracting: $10x = 10 \\Rightarrow x = 1$, then $y = 3$. Solution: $x = 1,\\ y = 3$."
    }
  },
  {
    "id": "al.y1.pure.simultaneous.q061",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Simultaneous equations",
    "subtopicId": "al.y1.pure.simultaneous",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "expression",
    "tags": [
      "simultaneous equations",
      "elimination",
      "scaling",
      "linear"
    ],
    "questionText": "Solve the simultaneous equations $2x + 3y = 16$ and $3x - y = 13$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Label the equations.",
          "workingLatex": "2x + 3y = 16 \\ (1), \\quad 3x - y = 13 \\ (2)",
          "explanation": "We scale equation (2) so its $y$ term matches equation (1).",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Scale equation (2).",
          "workingLatex": "3 \\times (2): \\ 9x - 3y = 39 \\ (3)",
          "explanation": "Multiplying (2) by $3$ makes the $y$ coefficient $-3y$, opposite to the $+3y$ in (1).",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Add to eliminate y.",
          "workingLatex": "(1) + (3): \\ (2x + 3y) + (9x - 3y) = 16 + 39",
          "explanation": "The $+3y$ and $-3y$ cancel when the equations are added.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Simplify to find x.",
          "workingLatex": "11x = 55 \\Rightarrow x = 5",
          "explanation": "The $y$ terms cancel, leaving $11x = 55$, so $x = 5$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute back.",
          "workingLatex": "3(5) - y = 13",
          "explanation": "Putting $x = 5$ into equation (2) gives an equation in $y$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Simplify.",
          "workingLatex": "15 - y = 13 \\Rightarrow y = 2",
          "explanation": "Rearranging gives $y = 2$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the intermediate solution.",
          "workingLatex": "x = 5, \\ y = 2",
          "explanation": "So far we have $x = 5$ and $y = 2$; we verify before finalising.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check in equation (1).",
          "workingLatex": "2(5) + 3(2) = 10 + 6 = 16 \\ \\checkmark",
          "explanation": "Substituting into equation (1) confirms both equations are satisfied.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the solution.",
          "workingLatex": "x = 5, \\ y = 2",
          "explanation": "The solution is $x = 5$ and $y = 2$.",
          "diagram": null
        }
      ],
      "finalAnswer": "Scaling (2) by 3 and adding: $11x = 55 \\Rightarrow x = 5$, then $y = 2$. Solution: $x = 5,\\ y = 2$."
    }
  },
  {
    "id": "al.y1.pure.simultaneous.q062",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Simultaneous equations",
    "subtopicId": "al.y1.pure.simultaneous",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "expression",
    "tags": [
      "simultaneous equations",
      "substitution",
      "linear",
      "negative solution"
    ],
    "questionText": "Solve the simultaneous equations $3x - 2y = 8$ and $x + y = 1$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Rearrange the simpler equation.",
          "workingLatex": "x + y = 1 \\Rightarrow x = 1 - y",
          "explanation": "Making $x$ the subject of the simpler equation prepares it for substitution.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute into the other equation.",
          "workingLatex": "3(1 - y) - 2y = 8",
          "explanation": "Replacing $x$ with $1 - y$ in $3x - 2y = 8$ gives an equation in $y$ alone.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Expand the bracket.",
          "workingLatex": "3 - 3y - 2y = 8",
          "explanation": "Multiplying $3$ through the bracket gives $3 - 3y$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Simplify.",
          "workingLatex": "3 - 5y = 8",
          "explanation": "Collecting the $y$ terms gives $3 - 5y = 8$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve for y.",
          "workingLatex": "-5y = 5 \\Rightarrow y = -1",
          "explanation": "Subtracting $3$ then dividing by $-5$ gives $y = -1$; a negative solution is valid.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find x.",
          "workingLatex": "x = 1 - (-1) = 2",
          "explanation": "Substituting $y = -1$ into $x = 1 - y$ gives $x = 2$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check.",
          "workingLatex": "3(2) - 2(-1) = 6 + 2 = 8 \\ \\checkmark",
          "explanation": "Substituting into $3x - 2y = 8$ confirms the solution.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Record the values.",
          "workingLatex": "x = 2, \\ y = -1",
          "explanation": "Both equations are satisfied, so we record the solution.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the solution.",
          "workingLatex": "x = 2, \\ y = -1",
          "explanation": "The solution is $x = 2$ and $y = -1$.",
          "diagram": null
        }
      ],
      "finalAnswer": "From $x = 1 - y$: $3 - 5y = 8 \\Rightarrow y = -1$, $x = 2$. Solution: $x = 2,\\ y = -1$."
    }
  },
  {
    "id": "al.y1.pure.simultaneous.q063",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Simultaneous equations",
    "subtopicId": "al.y1.pure.simultaneous",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "expression",
    "tags": [
      "simultaneous equations",
      "substitution",
      "linear"
    ],
    "questionText": "Solve the simultaneous equations $y = 2x - 2$ and $3x + 2y = 17$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Note one variable is isolated.",
          "workingLatex": "y = 2x - 2",
          "explanation": "Since $y$ is given in terms of $x$, substitution is the efficient method.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute into the other equation.",
          "workingLatex": "3x + 2(2x - 2) = 17",
          "explanation": "Replacing $y$ with $2x - 2$ in $3x + 2y = 17$ gives an equation in $x$ alone.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Expand the bracket.",
          "workingLatex": "3x + 4x - 4 = 17",
          "explanation": "Multiplying $2$ through the bracket gives $4x - 4$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Simplify.",
          "workingLatex": "7x - 4 = 17",
          "explanation": "Collecting the $x$ terms gives $7x - 4 = 17$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve for x.",
          "workingLatex": "7x = 21 \\Rightarrow x = 3",
          "explanation": "Adding $4$ then dividing by $7$ gives $x = 3$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find y.",
          "workingLatex": "y = 2(3) - 2 = 4",
          "explanation": "Substituting $x = 3$ into $y = 2x - 2$ gives $y = 4$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check.",
          "workingLatex": "3(3) + 2(4) = 9 + 8 = 17 \\ \\checkmark",
          "explanation": "Substituting into $3x + 2y = 17$ confirms the solution.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Record the values.",
          "workingLatex": "x = 3, \\ y = 4",
          "explanation": "Both equations are satisfied, so we record the solution.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the solution.",
          "workingLatex": "x = 3, \\ y = 4",
          "explanation": "The solution is $x = 3$ and $y = 4$.",
          "diagram": null
        }
      ],
      "finalAnswer": "Substituting $y = 2x - 2$: $7x - 4 = 17 \\Rightarrow x = 3$, $y = 4$. Solution: $x = 3,\\ y = 4$."
    }
  },
  {
    "id": "al.y1.pure.simultaneous.q064",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Simultaneous equations",
    "subtopicId": "al.y1.pure.simultaneous",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "expression",
    "tags": [
      "simultaneous equations",
      "substitution",
      "linear"
    ],
    "questionText": "Solve the simultaneous equations $x = 4y + 2$ and $2x - 3y = 9$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Note one variable is isolated.",
          "workingLatex": "x = 4y + 2",
          "explanation": "Since $x$ is given in terms of $y$, we substitute it into the other equation.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute into the other equation.",
          "workingLatex": "2(4y + 2) - 3y = 9",
          "explanation": "Replacing $x$ with $4y + 2$ in $2x - 3y = 9$ gives an equation in $y$ alone.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Expand the bracket.",
          "workingLatex": "8y + 4 - 3y = 9",
          "explanation": "Multiplying $2$ through the bracket gives $8y + 4$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Simplify.",
          "workingLatex": "5y + 4 = 9",
          "explanation": "Collecting the $y$ terms gives $5y + 4 = 9$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve for y.",
          "workingLatex": "5y = 5 \\Rightarrow y = 1",
          "explanation": "Subtracting $4$ then dividing by $5$ gives $y = 1$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find x.",
          "workingLatex": "x = 4(1) + 2 = 6",
          "explanation": "Substituting $y = 1$ into $x = 4y + 2$ gives $x = 6$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check.",
          "workingLatex": "2(6) - 3(1) = 12 - 3 = 9 \\ \\checkmark",
          "explanation": "Substituting into $2x - 3y = 9$ confirms the solution.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Record the values.",
          "workingLatex": "x = 6, \\ y = 1",
          "explanation": "Both equations are satisfied, so we record the solution.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the solution.",
          "workingLatex": "x = 6, \\ y = 1",
          "explanation": "The solution is $x = 6$ and $y = 1$.",
          "diagram": null
        }
      ],
      "finalAnswer": "Substituting $x = 4y + 2$: $5y + 4 = 9 \\Rightarrow y = 1$, $x = 6$. Solution: $x = 6,\\ y = 1$."
    }
  },
  {
    "id": "al.y1.pure.simultaneous.q065",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Simultaneous equations",
    "subtopicId": "al.y1.pure.simultaneous",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "expression",
    "tags": [
      "simultaneous equations",
      "linear-quadratic",
      "tangent",
      "repeated root"
    ],
    "questionText": "Solve the simultaneous equations $y = x - 3$ and $y = x^2 - 5x + 6$, and describe how the line and curve are related.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recognise a linear-quadratic system.",
          "workingLatex": "y = x - 3 \\ (\\text{line}), \\quad y = x^2 - 5x + 6 \\ (\\text{curve})",
          "explanation": "Setting the two expressions for $y$ equal gives a single quadratic; the number of roots tells us how the line and curve meet.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Set the expressions equal.",
          "workingLatex": "x^2 - 5x + 6 = x - 3",
          "explanation": "At a common point both expressions for $y$ are equal.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Rearrange to a quadratic.",
          "workingLatex": "x^2 - 6x + 9 = 0",
          "explanation": "Bringing all terms to one side gives $x^2 - 6x + 9 = 0$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Check the discriminant.",
          "workingLatex": "\\Delta = (-6)^2 - 4(1)(9) = 36 - 36 = 0",
          "explanation": "A zero discriminant signals a single repeated root, which means the line touches the curve rather than crossing it.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Factorise the perfect square.",
          "workingLatex": "(x - 3)^2 = 0",
          "explanation": "The quadratic is a perfect square, confirming the repeated root.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Solve for x.",
          "workingLatex": "x = 3 \\text{ (repeated)}",
          "explanation": "The only solution is $x = 3$, occurring twice.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Find y.",
          "workingLatex": "y = 3 - 3 = 0",
          "explanation": "Substituting $x = 3$ into the line $y = x - 3$ gives $y = 0$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Write the single point.",
          "workingLatex": "(3, 0)",
          "explanation": "There is just one common point, $(3, 0)$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Check the point on the curve.",
          "workingLatex": "3^2 - 5(3) + 6 = 9 - 15 + 6 = 0 \\ \\checkmark",
          "explanation": "Substituting $x = 3$ into the curve also gives $y = 0$, confirming the point lies on both graphs.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Interpret the single solution.",
          "workingLatex": "\\text{one repeated root} \\Rightarrow \\text{tangent}",
          "explanation": "A single (repeated) solution means the line meets the curve at exactly one point without crossing it.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "State the geometric relationship.",
          "workingLatex": "\\text{the line is a tangent to the curve}",
          "explanation": "Because there is one point of contact, the line $y = x - 3$ is a tangent to the parabola.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Summarise.",
          "workingLatex": "\\text{tangent at } (3, 0)",
          "explanation": "The line touches the curve at the single point $(3, 0)$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "State the solution.",
          "workingLatex": "(x, y) = (3, 0), \\text{ the line is a tangent}",
          "explanation": "The only solution is $(3, 0)$, and the line is a tangent to the curve there.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x^2 - 5x + 6 = x - 3 \\Rightarrow x^2 - 6x + 9 = (x-3)^2 = 0$ (repeated) $\\Rightarrow (3,0)$; the line is a tangent."
    }
  },
  {
    "id": "al.y1.pure.simultaneous.q066",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Simultaneous equations",
    "subtopicId": "al.y1.pure.simultaneous",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "expression",
    "tags": [
      "simultaneous equations",
      "linear-quadratic",
      "tangent",
      "repeated root"
    ],
    "questionText": "Solve the simultaneous equations $y = 2x - 4$ and $y = x^2 - 2x$, and state the geometric relationship between the line and the curve.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recognise a linear-quadratic system.",
          "workingLatex": "y = 2x - 4 \\ (\\text{line}), \\quad y = x^2 - 2x \\ (\\text{curve})",
          "explanation": "Setting the two expressions for $y$ equal gives a quadratic; its number of roots reveals how line and curve meet.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Set the expressions equal.",
          "workingLatex": "x^2 - 2x = 2x - 4",
          "explanation": "At a common point both expressions for $y$ are equal.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Rearrange to a quadratic.",
          "workingLatex": "x^2 - 4x + 4 = 0",
          "explanation": "Bringing all terms to one side gives $x^2 - 4x + 4 = 0$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Check the discriminant.",
          "workingLatex": "\\Delta = (-4)^2 - 4(1)(4) = 16 - 16 = 0",
          "explanation": "A zero discriminant signals a single repeated root, i.e. the line touches the curve.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Factorise the perfect square.",
          "workingLatex": "(x - 2)^2 = 0",
          "explanation": "The quadratic is a perfect square, confirming the repeated root.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Solve for x.",
          "workingLatex": "x = 2 \\text{ (repeated)}",
          "explanation": "The only solution is $x = 2$, occurring twice.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Find y.",
          "workingLatex": "y = 2(2) - 4 = 0",
          "explanation": "Substituting $x = 2$ into the line $y = 2x - 4$ gives $y = 0$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Write the single point.",
          "workingLatex": "(2, 0)",
          "explanation": "There is just one common point, $(2, 0)$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Check the point on the curve.",
          "workingLatex": "2^2 - 2(2) = 4 - 4 = 0 \\ \\checkmark",
          "explanation": "Substituting $x = 2$ into the curve also gives $y = 0$, confirming the point lies on both graphs.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Interpret the single solution.",
          "workingLatex": "\\text{one repeated root} \\Rightarrow \\text{tangent}",
          "explanation": "A single repeated solution means the line meets the curve at exactly one point without crossing it.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "State the geometric relationship.",
          "workingLatex": "\\text{the line is a tangent to the curve}",
          "explanation": "Because there is one point of contact, the line $y = 2x - 4$ is a tangent to the parabola.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Summarise.",
          "workingLatex": "\\text{tangent at } (2, 0)",
          "explanation": "The line touches the curve at the single point $(2, 0)$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "State the solution.",
          "workingLatex": "(x, y) = (2, 0), \\text{ the line is a tangent}",
          "explanation": "The only solution is $(2, 0)$, and the line is a tangent to the curve there.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x^2 - 2x = 2x - 4 \\Rightarrow x^2 - 4x + 4 = (x-2)^2 = 0$ (repeated) $\\Rightarrow (2,0)$; the line is a tangent."
    }
  },
  {
    "id": "al.y1.pure.simultaneous.q067",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Simultaneous equations",
    "subtopicId": "al.y1.pure.simultaneous",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "expression",
    "tags": [
      "simultaneous equations",
      "linear-quadratic",
      "circle",
      "intersection"
    ],
    "questionText": "Solve the simultaneous equations $y = x + 1$ and $x^2 + y^2 = 1$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recognise a linear-quadratic system.",
          "workingLatex": "y = x + 1 \\ (\\text{line}), \\quad x^2 + y^2 = 1 \\ (\\text{circle})",
          "explanation": "Substituting the line into the circle gives a single quadratic whose solutions are the intersection points.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute into the circle equation.",
          "workingLatex": "x^2 + (x + 1)^2 = 1",
          "explanation": "Replacing $y$ with $x + 1$ gives an equation in $x$ alone.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Expand the bracket.",
          "workingLatex": "x^2 + x^2 + 2x + 1 = 1",
          "explanation": "Expanding $(x + 1)^2$ gives $x^2 + 2x + 1$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Collect terms.",
          "workingLatex": "2x^2 + 2x + 1 = 1",
          "explanation": "Combining the two $x^2$ terms gives $2x^2 + 2x + 1$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Rearrange to standard form.",
          "workingLatex": "2x^2 + 2x = 0",
          "explanation": "Subtracting $1$ from both sides leaves $2x^2 + 2x = 0$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Factorise.",
          "workingLatex": "2x(x + 1) = 0",
          "explanation": "Both terms share a factor of $2x$, so we factorise rather than using the formula.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Solve for x.",
          "workingLatex": "x = 0 \\ \\text{ or } \\ x = -1",
          "explanation": "Setting each factor to zero gives the two $x$-coordinates.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Find y for x = 0.",
          "workingLatex": "y = 0 + 1 = 1",
          "explanation": "Substituting $x = 0$ into $y = x + 1$ gives $y = 1$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Find y for x = -1.",
          "workingLatex": "y = -1 + 1 = 0",
          "explanation": "Substituting $x = -1$ into $y = x + 1$ gives $y = 0$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Write the solution pairs.",
          "workingLatex": "(0, 1) \\ \\text{ and } \\ (-1, 0)",
          "explanation": "Each $x$ pairs with its $y$ to give an intersection point.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Check a point on the circle.",
          "workingLatex": "0^2 + 1^2 = 1 \\ \\checkmark",
          "explanation": "The point $(0, 1)$ satisfies $x^2 + y^2 = 1$, confirming it lies on the circle.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Interpret geometrically.",
          "workingLatex": "\\text{the line cuts the unit circle at two points}",
          "explanation": "Two real solutions mean the line meets the circle at two distinct points.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "State the solution.",
          "workingLatex": "(x, y) = (0, 1) \\text{ or } (-1, 0)",
          "explanation": "The solutions are $(0, 1)$ and $(-1, 0)$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x^2 + (x+1)^2 = 1 \\Rightarrow 2x^2 + 2x = 2x(x+1) = 0 \\Rightarrow (0,1) \\text{ or } (-1,0)$"
    }
  },
  {
    "id": "al.y1.pure.simultaneous.q068",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Simultaneous equations",
    "subtopicId": "al.y1.pure.simultaneous",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "expression",
    "tags": [
      "simultaneous equations",
      "linear-quadratic",
      "substitution",
      "intersection"
    ],
    "questionText": "Solve the simultaneous equations $y = 3x - 1$ and $y = x^2 + x - 4$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recognise a linear-quadratic system.",
          "workingLatex": "y = 3x - 1 \\ (\\text{line}), \\quad y = x^2 + x - 4 \\ (\\text{curve})",
          "explanation": "Setting the two expressions for $y$ equal gives a single quadratic to solve.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Set the expressions equal.",
          "workingLatex": "x^2 + x - 4 = 3x - 1",
          "explanation": "At a common point both expressions for $y$ are equal.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Rearrange to a quadratic.",
          "workingLatex": "x^2 - 2x - 3 = 0",
          "explanation": "Bringing all terms to one side gives $x^2 - 2x - 3 = 0$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Factorise.",
          "workingLatex": "(x - 3)(x + 1) = 0",
          "explanation": "Two numbers multiplying to $-3$ and adding to $-2$ are $-3$ and $1$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve for x.",
          "workingLatex": "x = 3 \\ \\text{ or } \\ x = -1",
          "explanation": "Setting each factor to zero gives the two $x$-coordinates.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find y for x = 3.",
          "workingLatex": "y = 3(3) - 1 = 8",
          "explanation": "Substituting $x = 3$ into the line $y = 3x - 1$ gives $y = 8$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Find y for x = -1.",
          "workingLatex": "y = 3(-1) - 1 = -4",
          "explanation": "Substituting $x = -1$ into the line gives $y = -4$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Write the solution pairs.",
          "workingLatex": "(3, 8) \\ \\text{ and } \\ (-1, -4)",
          "explanation": "Each $x$ pairs with its $y$ to give an intersection point.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Check the first point on the curve.",
          "workingLatex": "3^2 + 3 - 4 = 9 + 3 - 4 = 8 \\ \\checkmark",
          "explanation": "Substituting $x = 3$ into the curve gives $y = 8$, confirming the point.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Check the second point on the curve.",
          "workingLatex": "(-1)^2 + (-1) - 4 = 1 - 1 - 4 = -4 \\ \\checkmark",
          "explanation": "Substituting $x = -1$ into the curve gives $y = -4$, confirming the second point.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Note the number of intersections.",
          "workingLatex": "\\text{two real roots} \\Rightarrow \\text{two points}",
          "explanation": "The quadratic had two distinct roots, so the line meets the curve at two separate points.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Interpret geometrically.",
          "workingLatex": "\\text{the line crosses the curve twice}",
          "explanation": "Two real solutions mean the line and the parabola intersect at two distinct points.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "State the solution.",
          "workingLatex": "(x, y) = (3, 8) \\text{ or } (-1, -4)",
          "explanation": "The solutions are $(3, 8)$ and $(-1, -4)$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x^2 + x - 4 = 3x - 1 \\Rightarrow x^2 - 2x - 3 = (x-3)(x+1) = 0 \\Rightarrow (3,8) \\text{ or } (-1,-4)$"
    }
  },
  {
    "id": "al.y1.pure.simultaneous.q069",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Simultaneous equations",
    "subtopicId": "al.y1.pure.simultaneous",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "expression",
    "tags": [
      "simultaneous equations",
      "word problem",
      "linear-quadratic"
    ],
    "questionText": "Two numbers have a sum of $12$ and a product of $35$. Find the two numbers.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Define the variables.",
          "workingLatex": "\\text{let the numbers be } x \\text{ and } y",
          "explanation": "Introducing letters for the two unknown numbers turns the words into algebra.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Translate the sum.",
          "workingLatex": "x + y = 12 \\ (1)",
          "explanation": "`The sum is $12$' becomes $x + y = 12$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Translate the product.",
          "workingLatex": "xy = 35 \\ (2)",
          "explanation": "`The product is $35$' becomes $xy = 35$; this is the quadratic equation.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Rearrange the linear equation.",
          "workingLatex": "y = 12 - x",
          "explanation": "Making $y$ the subject of the linear equation prepares it for substitution.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute into the product equation.",
          "workingLatex": "x(12 - x) = 35",
          "explanation": "Replacing $y$ with $12 - x$ in $xy = 35$ gives an equation in $x$ alone.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Expand.",
          "workingLatex": "12x - x^2 = 35",
          "explanation": "Multiplying out the bracket gives $12x - x^2$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Rearrange to standard form.",
          "workingLatex": "x^2 - 12x + 35 = 0",
          "explanation": "Moving all terms to one side (with a positive $x^2$ coefficient) gives a standard quadratic.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Factorise.",
          "workingLatex": "(x - 5)(x - 7) = 0",
          "explanation": "Two numbers multiplying to $35$ and adding to $-12$ are $-5$ and $-7$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Solve for x.",
          "workingLatex": "x = 5 \\ \\text{ or } \\ x = 7",
          "explanation": "Setting each factor to zero gives the two possible values of $x$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Find the matching y values.",
          "workingLatex": "x = 5 \\Rightarrow y = 7, \\quad x = 7 \\Rightarrow y = 5",
          "explanation": "Substituting into $y = 12 - x$ shows the two numbers are $5$ and $7$ in either order.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Check the sum.",
          "workingLatex": "5 + 7 = 12 \\ \\checkmark",
          "explanation": "The two numbers add to $12$, matching the first condition.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Check the product.",
          "workingLatex": "5 \\times 7 = 35 \\ \\checkmark",
          "explanation": "Their product is $35$, matching the second condition.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "State the answer.",
          "workingLatex": "\\text{the numbers are } 5 \\text{ and } 7",
          "explanation": "The two numbers are $5$ and $7$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x + y = 12,\\ xy = 35$; substituting gives $x^2 - 12x + 35 = (x-5)(x-7) = 0$. The numbers are $5$ and $7$."
    }
  },
  {
    "id": "al.y1.pure.simultaneous.q070",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Simultaneous equations",
    "subtopicId": "al.y1.pure.simultaneous",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "expression",
    "tags": [
      "simultaneous equations",
      "discriminant",
      "no intersection",
      "proof"
    ],
    "questionText": "Show that the line $y = x + 5$ does not intersect the curve $y = x^2 + 3x + 7$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set the line equal to the curve.",
          "workingLatex": "x^2 + 3x + 7 = x + 5",
          "explanation": "Any intersection point must satisfy both equations, so we set the two expressions for $y$ equal.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Rearrange to a quadratic.",
          "workingLatex": "x^2 + 3x + 7 - x - 5 = 0",
          "explanation": "Bringing all terms to one side gives a quadratic whose real roots would be the $x$-coordinates of any intersections.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Simplify.",
          "workingLatex": "x^2 + 2x + 2 = 0",
          "explanation": "Collecting like terms gives $x^2 + 2x + 2 = 0$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Identify the coefficients.",
          "workingLatex": "a = 1,\\ b = 2,\\ c = 2",
          "explanation": "Reading off the coefficients prepares us to compute the discriminant.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Recall the discriminant test.",
          "workingLatex": "\\Delta = b^2 - 4ac",
          "explanation": "The sign of the discriminant tells us whether the quadratic has real roots — i.e. whether the graphs meet.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Compute the discriminant.",
          "workingLatex": "\\Delta = 2^2 - 4(1)(2) = 4 - 8 = -4",
          "explanation": "Substituting the coefficients gives $\\Delta = -4$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Interpret the sign.",
          "workingLatex": "\\Delta = -4 < 0",
          "explanation": "The discriminant is negative, so the quadratic has no real roots.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Relate roots to intersections.",
          "workingLatex": "\\text{no real roots} \\Rightarrow \\text{no common } x",
          "explanation": "With no real solutions for $x$, there is no point that lies on both the line and the curve.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the geometric conclusion.",
          "workingLatex": "\\text{the line and curve do not meet}",
          "explanation": "Since there are no common points, the line does not intersect the curve.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Confirm via completing the square.",
          "workingLatex": "x^2 + 2x + 2 = (x + 1)^2 + 1",
          "explanation": "Rewriting shows the quadratic equals $(x+1)^2 + 1$, which is always at least $1$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Note it is always positive.",
          "workingLatex": "(x + 1)^2 + 1 \\ge 1 > 0",
          "explanation": "Because the expression is never zero, the equation $x^2 + 2x + 2 = 0$ has no real solutions, agreeing with the discriminant.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Draw the picture.",
          "workingLatex": "\\text{the curve lies entirely above the line}",
          "explanation": "Since $x^2 + 3x + 7 - (x + 5)$ is always positive, the curve is always above the line, never touching it.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Conclude.",
          "workingLatex": "\\text{the line } y = x + 5 \\text{ does not intersect the curve} \\ \\blacksquare",
          "explanation": "The negative discriminant proves there is no intersection point, as required. $\\blacksquare$",
          "diagram": null
        }
      ],
      "finalAnswer": "Setting equal gives $x^2 + 2x + 2 = 0$ with $\\Delta = 4 - 8 = -4 < 0$, so there are no real solutions and the line does not meet the curve. $\\blacksquare$"
    }
  }
];
