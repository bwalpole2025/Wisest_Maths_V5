import { Question } from "@/lib/types";

export const questions: Question[] = [
  {
    "id": "gcse.algebra.nth-term-linear.q001",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "nth term of linear sequences",
    "subtopicId": "gcse.algebra.nth-term-linear",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "expression",
    "tags": ["nth term", "linear sequences"],
    "questionText": "Find the $n$th term of the sequence $3, 5, 7, 9, \\ldots$",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Find the common difference.", "workingLatex": "d = 2", "explanation": "The terms go up by $2$ each time, so the $n$th term starts with $2n$.", "diagram": null },
        { "stepNumber": 2, "description": "Compare $2n$ with the sequence.", "workingLatex": "2n = 2, 4, 6, 8", "explanation": "Each real term is $1$ more than $2n$.", "diagram": null },
        { "stepNumber": 3, "description": "Write the $n$th term.", "workingLatex": "2n + 1", "explanation": "Add the adjustment of $+1$.", "diagram": null }
      ],
      "finalAnswer": "$2n + 1$"
    }
  },
  {
    "id": "gcse.algebra.nth-term-linear.q002",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "nth term of linear sequences",
    "subtopicId": "gcse.algebra.nth-term-linear",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "expression",
    "tags": ["nth term", "linear sequences"],
    "questionText": "Find the $n$th term of the sequence $4, 7, 10, 13, \\ldots$",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Find the common difference.", "workingLatex": "d = 3", "explanation": "The terms rise by $3$, so start with $3n$.", "diagram": null },
        { "stepNumber": 2, "description": "Adjust.", "workingLatex": "3n = 3, 6, 9, 12", "explanation": "Each term is $1$ more than $3n$.", "diagram": null },
        { "stepNumber": 3, "description": "Write the $n$th term.", "workingLatex": "3n + 1", "explanation": "Add $+1$.", "diagram": null }
      ],
      "finalAnswer": "$3n + 1$"
    }
  },
  {
    "id": "gcse.algebra.nth-term-linear.q003",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "nth term of linear sequences",
    "subtopicId": "gcse.algebra.nth-term-linear",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "expression",
    "tags": ["nth term", "linear sequences"],
    "questionText": "Find the $n$th term of the sequence $5, 9, 13, 17, \\ldots$",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Find the common difference.", "workingLatex": "d = 4", "explanation": "The terms rise by $4$, so start with $4n$.", "diagram": null },
        { "stepNumber": 2, "description": "Adjust.", "workingLatex": "4n = 4, 8, 12, 16", "explanation": "Each term is $1$ more than $4n$.", "diagram": null },
        { "stepNumber": 3, "description": "Write the $n$th term.", "workingLatex": "4n + 1", "explanation": "Add $+1$.", "diagram": null }
      ],
      "finalAnswer": "$4n + 1$"
    }
  },
  {
    "id": "gcse.algebra.nth-term-linear.q004",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "nth term of linear sequences",
    "subtopicId": "gcse.algebra.nth-term-linear",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "expression",
    "tags": ["nth term", "linear sequences"],
    "questionText": "Find the $n$th term of the sequence $2, 4, 6, 8, \\ldots$",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Find the common difference.", "workingLatex": "d = 2", "explanation": "The terms rise by $2$, so start with $2n$.", "diagram": null },
        { "stepNumber": 2, "description": "Check the adjustment.", "workingLatex": "2n = 2, 4, 6, 8", "explanation": "This matches the sequence exactly, so no adjustment is needed.", "diagram": null }
      ],
      "finalAnswer": "$2n$"
    }
  },
  {
    "id": "gcse.algebra.nth-term-linear.q005",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "nth term of linear sequences",
    "subtopicId": "gcse.algebra.nth-term-linear",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "expression",
    "tags": ["nth term", "linear sequences"],
    "questionText": "Find the $n$th term of the sequence $6, 11, 16, 21, \\ldots$",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Find the common difference.", "workingLatex": "d = 5", "explanation": "The terms rise by $5$, so start with $5n$.", "diagram": null },
        { "stepNumber": 2, "description": "Adjust.", "workingLatex": "5n = 5, 10, 15, 20", "explanation": "Each term is $1$ more than $5n$.", "diagram": null },
        { "stepNumber": 3, "description": "Write the $n$th term.", "workingLatex": "5n + 1", "explanation": "Add $+1$.", "diagram": null }
      ],
      "finalAnswer": "$5n + 1$"
    }
  },
  {
    "id": "gcse.algebra.nth-term-linear.q006",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "nth term of linear sequences",
    "subtopicId": "gcse.algebra.nth-term-linear",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "value",
    "tags": ["nth term", "substitution"],
    "questionText": "The $n$th term of a sequence is $2n + 3$. Find the $5$th term.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Substitute $n = 5$.", "workingLatex": "2(5) + 3", "explanation": "Replace $n$ with the position number $5$.", "diagram": null },
        { "stepNumber": 2, "description": "Evaluate.", "workingLatex": "10 + 3 = 13", "explanation": "The $5$th term is $13$.", "diagram": null }
      ],
      "finalAnswer": "$13$"
    }
  },
  {
    "id": "gcse.algebra.nth-term-linear.q007",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "nth term of linear sequences",
    "subtopicId": "gcse.algebra.nth-term-linear",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "value",
    "tags": ["nth term", "substitution"],
    "questionText": "The $n$th term of a sequence is $4n - 1$. Find the $10$th term.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Substitute $n = 10$.", "workingLatex": "4(10) - 1", "explanation": "Replace $n$ with $10$.", "diagram": null },
        { "stepNumber": 2, "description": "Evaluate.", "workingLatex": "40 - 1 = 39", "explanation": "The $10$th term is $39$.", "diagram": null }
      ],
      "finalAnswer": "$39$"
    }
  },
  {
    "id": "gcse.algebra.nth-term-linear.q008",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "nth term of linear sequences",
    "subtopicId": "gcse.algebra.nth-term-linear",
    "difficulty": "Easy",
    "marks": 1,
    "answerType": "value",
    "tags": ["nth term", "common difference"],
    "questionText": "Find the common difference of the sequence $7, 10, 13, 16, \\ldots$",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Subtract consecutive terms.", "workingLatex": "10 - 7 = 3", "explanation": "The gap between terms is the common difference.", "diagram": null }
      ],
      "finalAnswer": "$3$"
    }
  },
  {
    "id": "gcse.algebra.nth-term-linear.q009",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "nth term of linear sequences",
    "subtopicId": "gcse.algebra.nth-term-linear",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "value",
    "tags": ["nth term", "substitution"],
    "questionText": "The $n$th term of a sequence is $3n$. Find the $20$th term.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Substitute $n = 20$.", "workingLatex": "3 \\times 20", "explanation": "Replace $n$ with $20$.", "diagram": null },
        { "stepNumber": 2, "description": "Evaluate.", "workingLatex": "3 \\times 20 = 60", "explanation": "The $20$th term is $60$.", "diagram": null }
      ],
      "finalAnswer": "$60$"
    }
  },
  {
    "id": "gcse.algebra.nth-term-linear.q010",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "nth term of linear sequences",
    "subtopicId": "gcse.algebra.nth-term-linear",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "expression",
    "tags": ["nth term", "linear sequences"],
    "questionText": "Find the $n$th term of the sequence $1, 4, 7, 10, \\ldots$",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Find the common difference.", "workingLatex": "d = 3", "explanation": "The terms rise by $3$, so start with $3n$.", "diagram": null },
        { "stepNumber": 2, "description": "Adjust.", "workingLatex": "3n = 3, 6, 9, 12", "explanation": "Each term is $2$ less than $3n$.", "diagram": null },
        { "stepNumber": 3, "description": "Write the $n$th term.", "workingLatex": "3n - 2", "explanation": "Subtract the adjustment of $2$.", "diagram": null }
      ],
      "finalAnswer": "$3n - 2$"
    }
  },
  {
    "id": "gcse.algebra.nth-term-linear.q011",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "nth term of linear sequences",
    "subtopicId": "gcse.algebra.nth-term-linear",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "value",
    "tags": ["nth term", "substitution"],
    "questionText": "The $n$th term of a sequence is $5n - 2$. Find the $6$th term.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Substitute $n = 6$.", "workingLatex": "5(6) - 2", "explanation": "Replace $n$ with $6$.", "diagram": null },
        { "stepNumber": 2, "description": "Evaluate.", "workingLatex": "30 - 2 = 28", "explanation": "The $6$th term is $28$.", "diagram": null }
      ],
      "finalAnswer": "$28$"
    }
  },
  {
    "id": "gcse.algebra.nth-term-linear.q012",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "nth term of linear sequences",
    "subtopicId": "gcse.algebra.nth-term-linear",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "expression",
    "tags": ["nth term", "linear sequences"],
    "questionText": "Find the $n$th term of the sequence $10, 20, 30, 40, \\ldots$",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Find the common difference.", "workingLatex": "d = 10", "explanation": "The terms rise by $10$, so start with $10n$.", "diagram": null },
        { "stepNumber": 2, "description": "Check the adjustment.", "workingLatex": "10n = 10, 20, 30, 40", "explanation": "This matches the sequence, so no adjustment is needed.", "diagram": null }
      ],
      "finalAnswer": "$10n$"
    }
  },
  {
    "id": "gcse.algebra.nth-term-linear.q013",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "nth term of linear sequences",
    "subtopicId": "gcse.algebra.nth-term-linear",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "expression",
    "tags": ["nth term", "linear sequences"],
    "questionText": "Find the $n$th term of the sequence $8, 10, 12, 14, \\ldots$",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Find the common difference.", "workingLatex": "d = 2", "explanation": "The terms rise by $2$, so start with $2n$.", "diagram": null },
        { "stepNumber": 2, "description": "Adjust.", "workingLatex": "2n = 2, 4, 6, 8", "explanation": "Each term is $6$ more than $2n$.", "diagram": null },
        { "stepNumber": 3, "description": "Write the $n$th term.", "workingLatex": "2n + 6", "explanation": "Add the adjustment of $6$.", "diagram": null }
      ],
      "finalAnswer": "$2n + 6$"
    }
  },
  {
    "id": "gcse.algebra.nth-term-linear.q014",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "nth term of linear sequences",
    "subtopicId": "gcse.algebra.nth-term-linear",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "value",
    "tags": ["nth term", "substitution"],
    "questionText": "The $n$th term of a sequence is $2n + 1$. Find the $100$th term.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Substitute $n = 100$.", "workingLatex": "2(100) + 1", "explanation": "Replace $n$ with $100$.", "diagram": null },
        { "stepNumber": 2, "description": "Evaluate.", "workingLatex": "200 + 1 = 201", "explanation": "The $100$th term is $201$.", "diagram": null }
      ],
      "finalAnswer": "$201$"
    }
  },
  {
    "id": "gcse.algebra.nth-term-linear.q015",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "nth term of linear sequences",
    "subtopicId": "gcse.algebra.nth-term-linear",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "expression",
    "tags": ["nth term", "linear sequences"],
    "questionText": "Find the $n$th term of the sequence $9, 14, 19, 24, \\ldots$",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Find the common difference.", "workingLatex": "d = 5", "explanation": "The terms rise by $5$, so start with $5n$.", "diagram": null },
        { "stepNumber": 2, "description": "Adjust.", "workingLatex": "5n = 5, 10, 15, 20", "explanation": "Each term is $4$ more than $5n$.", "diagram": null },
        { "stepNumber": 3, "description": "Write the $n$th term.", "workingLatex": "5n + 4", "explanation": "Add $4$.", "diagram": null }
      ],
      "finalAnswer": "$5n + 4$"
    }
  },
  {
    "id": "gcse.algebra.nth-term-linear.q016",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "nth term of linear sequences",
    "subtopicId": "gcse.algebra.nth-term-linear",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "value",
    "tags": ["nth term", "first term"],
    "questionText": "The $n$th term of a sequence is $6n - 5$. Find the first term.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Substitute $n = 1$.", "workingLatex": "6(1) - 5", "explanation": "The first term is found by putting $n = 1$.", "diagram": null },
        { "stepNumber": 2, "description": "Evaluate.", "workingLatex": "6 - 5 = 1", "explanation": "The first term is $1$.", "diagram": null }
      ],
      "finalAnswer": "$1$"
    }
  },
  {
    "id": "gcse.algebra.nth-term-linear.q017",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "nth term of linear sequences",
    "subtopicId": "gcse.algebra.nth-term-linear",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "expression",
    "tags": ["nth term", "linear sequences"],
    "questionText": "Find the $n$th term of the sequence $3, 7, 11, 15, \\ldots$",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Find the common difference.", "workingLatex": "d = 4", "explanation": "The terms rise by $4$, so start with $4n$.", "diagram": null },
        { "stepNumber": 2, "description": "Adjust.", "workingLatex": "4n = 4, 8, 12, 16", "explanation": "Each term is $1$ less than $4n$.", "diagram": null },
        { "stepNumber": 3, "description": "Write the $n$th term.", "workingLatex": "4n - 1", "explanation": "Subtract $1$.", "diagram": null }
      ],
      "finalAnswer": "$4n - 1$"
    }
  },
  {
    "id": "gcse.algebra.nth-term-linear.q018",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "nth term of linear sequences",
    "subtopicId": "gcse.algebra.nth-term-linear",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "value",
    "tags": ["nth term", "substitution"],
    "questionText": "The $n$th term of a sequence is $7n - 3$. Find the $4$th term.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Substitute $n = 4$.", "workingLatex": "7(4) - 3", "explanation": "Replace $n$ with $4$.", "diagram": null },
        { "stepNumber": 2, "description": "Evaluate.", "workingLatex": "28 - 3 = 25", "explanation": "The $4$th term is $25$.", "diagram": null }
      ],
      "finalAnswer": "$25$"
    }
  },
  {
    "id": "gcse.algebra.nth-term-linear.q019",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "nth term of linear sequences",
    "subtopicId": "gcse.algebra.nth-term-linear",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "expression",
    "tags": ["nth term", "linear sequences"],
    "questionText": "Find the $n$th term of the sequence $12, 15, 18, 21, \\ldots$",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Find the common difference.", "workingLatex": "d = 3", "explanation": "The terms rise by $3$, so start with $3n$.", "diagram": null },
        { "stepNumber": 2, "description": "Adjust.", "workingLatex": "3n = 3, 6, 9, 12", "explanation": "Each term is $9$ more than $3n$.", "diagram": null },
        { "stepNumber": 3, "description": "Write the $n$th term.", "workingLatex": "3n + 9", "explanation": "Add $9$.", "diagram": null }
      ],
      "finalAnswer": "$3n + 9$"
    }
  },
  {
    "id": "gcse.algebra.nth-term-linear.q020",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "nth term of linear sequences",
    "subtopicId": "gcse.algebra.nth-term-linear",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "expression",
    "tags": ["nth term", "linear sequences"],
    "questionText": "Find the $n$th term of the sequence $2, 7, 12, 17, \\ldots$",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Find the common difference.", "workingLatex": "d = 5", "explanation": "The terms rise by $5$, so start with $5n$.", "diagram": null },
        { "stepNumber": 2, "description": "Adjust.", "workingLatex": "5n = 5, 10, 15, 20", "explanation": "Each term is $3$ less than $5n$.", "diagram": null },
        { "stepNumber": 3, "description": "Write the $n$th term.", "workingLatex": "5n - 3", "explanation": "Subtract $3$.", "diagram": null }
      ],
      "finalAnswer": "$5n - 3$"
    }
  },
  {
    "id": "gcse.algebra.nth-term-linear.q021",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "nth term of linear sequences",
    "subtopicId": "gcse.algebra.nth-term-linear",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "value",
    "tags": ["nth term", "substitution"],
    "questionText": "The $n$th term of a sequence is $6n + 2$. Find the $8$th term.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Substitute $n = 8$.", "workingLatex": "6(8) + 2", "explanation": "Replace $n$ with $8$.", "diagram": null },
        { "stepNumber": 2, "description": "Evaluate.", "workingLatex": "48 + 2 = 50", "explanation": "The $8$th term is $50$.", "diagram": null }
      ],
      "finalAnswer": "$50$"
    }
  },
  {
    "id": "gcse.algebra.nth-term-linear.q022",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "nth term of linear sequences",
    "subtopicId": "gcse.algebra.nth-term-linear",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "expression",
    "tags": ["nth term", "linear sequences"],
    "questionText": "Find the $n$th term of the sequence $11, 13, 15, 17, \\ldots$",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Find the common difference.", "workingLatex": "d = 2", "explanation": "The terms rise by $2$, so start with $2n$.", "diagram": null },
        { "stepNumber": 2, "description": "Adjust.", "workingLatex": "2n = 2, 4, 6, 8", "explanation": "Each term is $9$ more than $2n$.", "diagram": null },
        { "stepNumber": 3, "description": "Write the $n$th term.", "workingLatex": "2n + 9", "explanation": "Add $9$.", "diagram": null }
      ],
      "finalAnswer": "$2n + 9$"
    }
  },
  {
    "id": "gcse.algebra.nth-term-linear.q023",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "nth term of linear sequences",
    "subtopicId": "gcse.algebra.nth-term-linear",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "expression",
    "tags": ["nth term", "linear sequences", "odd numbers"],
    "questionText": "Find the $n$th term of the sequence $1, 3, 5, 7, \\ldots$",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Find the common difference.", "workingLatex": "d = 2", "explanation": "The odd numbers rise by $2$, so start with $2n$.", "diagram": null },
        { "stepNumber": 2, "description": "Adjust.", "workingLatex": "2n = 2, 4, 6, 8", "explanation": "Each term is $1$ less than $2n$.", "diagram": null },
        { "stepNumber": 3, "description": "Write the $n$th term.", "workingLatex": "2n - 1", "explanation": "Subtract $1$.", "diagram": null }
      ],
      "finalAnswer": "$2n - 1$"
    }
  },
  {
    "id": "gcse.algebra.nth-term-linear.q024",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "nth term of linear sequences",
    "subtopicId": "gcse.algebra.nth-term-linear",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "value",
    "tags": ["nth term", "substitution"],
    "questionText": "The $n$th term of a sequence is $8n$. Find the $5$th term.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Substitute $n = 5$.", "workingLatex": "8 \\times 5", "explanation": "Replace $n$ with $5$.", "diagram": null },
        { "stepNumber": 2, "description": "Evaluate.", "workingLatex": "8 \\times 5 = 40", "explanation": "The $5$th term is $40$.", "diagram": null }
      ],
      "finalAnswer": "$40$"
    }
  },
  {
    "id": "gcse.algebra.nth-term-linear.q025",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "nth term of linear sequences",
    "subtopicId": "gcse.algebra.nth-term-linear",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "expression",
    "tags": ["nth term", "linear sequences"],
    "questionText": "Find the $n$th term of the sequence $4, 10, 16, 22, \\ldots$",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Find the common difference.", "workingLatex": "d = 6", "explanation": "The terms rise by $6$, so start with $6n$.", "diagram": null },
        { "stepNumber": 2, "description": "Adjust.", "workingLatex": "6n = 6, 12, 18, 24", "explanation": "Each term is $2$ less than $6n$.", "diagram": null },
        { "stepNumber": 3, "description": "Write the $n$th term.", "workingLatex": "6n - 2", "explanation": "Subtract $2$.", "diagram": null }
      ],
      "finalAnswer": "$6n - 2$"
    }
  },
  {
    "id": "gcse.algebra.nth-term-linear.q026",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "nth term of linear sequences",
    "subtopicId": "gcse.algebra.nth-term-linear",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "expression",
    "tags": ["nth term", "linear sequences"],
    "questionText": "Find the $n$th term of the sequence $20, 30, 40, 50, \\ldots$",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Find the common difference.", "workingLatex": "d = 10", "explanation": "The terms rise by $10$, so start with $10n$.", "diagram": null },
        { "stepNumber": 2, "description": "Adjust.", "workingLatex": "10n = 10, 20, 30, 40", "explanation": "Each term is $10$ more than $10n$.", "diagram": null },
        { "stepNumber": 3, "description": "Write the $n$th term.", "workingLatex": "10n + 10", "explanation": "Add $10$.", "diagram": null }
      ],
      "finalAnswer": "$10n + 10$"
    }
  },
  {
    "id": "gcse.algebra.nth-term-linear.q027",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "nth term of linear sequences",
    "subtopicId": "gcse.algebra.nth-term-linear",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "expression",
    "tags": ["nth term", "decreasing", "negatives"],
    "questionText": "Find the $n$th term of the sequence $20, 17, 14, 11, \\ldots$",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Find the common difference.", "workingLatex": "d = -3", "explanation": "The terms fall by $3$, so the $n$th term starts with $-3n$.", "diagram": null },
        { "stepNumber": 2, "description": "Adjust.", "workingLatex": "-3n = -3, -6, -9, -12", "explanation": "Each real term is $23$ more than $-3n$ (e.g. $20 - (-3) = 23$).", "diagram": null },
        { "stepNumber": 3, "description": "Write the $n$th term.", "workingLatex": "23 - 3n", "explanation": "So the $n$th term is $-3n + 23$.", "diagram": null }
      ],
      "finalAnswer": "$23 - 3n$"
    }
  },
  {
    "id": "gcse.algebra.nth-term-linear.q028",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "nth term of linear sequences",
    "subtopicId": "gcse.algebra.nth-term-linear",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "expression",
    "tags": ["nth term", "decreasing"],
    "questionText": "Find the $n$th term of the sequence $10, 8, 6, 4, \\ldots$",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Find the common difference.", "workingLatex": "d = -2", "explanation": "The terms fall by $2$, so start with $-2n$.", "diagram": null },
        { "stepNumber": 2, "description": "Adjust.", "workingLatex": "-2n = -2, -4, -6, -8", "explanation": "Each real term is $12$ more than $-2n$.", "diagram": null },
        { "stepNumber": 3, "description": "Write the $n$th term.", "workingLatex": "12 - 2n", "explanation": "So the $n$th term is $-2n + 12$.", "diagram": null }
      ],
      "finalAnswer": "$12 - 2n$"
    }
  },
  {
    "id": "gcse.algebra.nth-term-linear.q029",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "nth term of linear sequences",
    "subtopicId": "gcse.algebra.nth-term-linear",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "text",
    "tags": ["nth term", "is it a term", "reasoning"],
    "questionText": "The $n$th term of a sequence is $4n - 1$. Is $45$ a term of this sequence?",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Set the $n$th term equal to $45$.", "workingLatex": "4n - 1 = 45", "explanation": "If $45$ is a term, some whole number $n$ must give it.", "diagram": null },
        { "stepNumber": 2, "description": "Solve for $n$.", "workingLatex": "4n = 46 \\Rightarrow n = 11.5", "explanation": "Add $1$ then divide by $4$.", "diagram": null },
        { "stepNumber": 3, "description": "Interpret.", "workingLatex": "n = 11.5", "explanation": "Because $n$ is not a whole number, $45$ is not a term.", "diagram": null }
      ],
      "finalAnswer": "No — $n = 11.5$ is not a whole number."
    }
  },
  {
    "id": "gcse.algebra.nth-term-linear.q030",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "nth term of linear sequences",
    "subtopicId": "gcse.algebra.nth-term-linear",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "value",
    "tags": ["nth term", "which term"],
    "questionText": "The $n$th term of a sequence is $2n + 1$. Which term is equal to $41$?",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Set the $n$th term equal to $41$.", "workingLatex": "2n + 1 = 41", "explanation": "We want the position $n$ that gives $41$.", "diagram": null },
        { "stepNumber": 2, "description": "Solve for $n$.", "workingLatex": "2n = 40 \\Rightarrow n = 20", "explanation": "Subtract $1$ then divide by $2$.", "diagram": null }
      ],
      "finalAnswer": "The $20$th term."
    }
  },
  {
    "id": "gcse.algebra.nth-term-linear.q031",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "nth term of linear sequences",
    "subtopicId": "gcse.algebra.nth-term-linear",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "text",
    "tags": ["nth term", "is it a term", "which term"],
    "questionText": "A sequence is $5, 8, 11, 14, \\ldots$ Is $62$ a term of this sequence? If so, which term?",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Find the $n$th term.", "workingLatex": "3n + 2", "explanation": "Common difference $3$ gives $3n$; each term is $2$ more.", "diagram": null },
        { "stepNumber": 2, "description": "Set equal to $62$.", "workingLatex": "3n + 2 = 62", "explanation": "Test whether $62$ appears.", "diagram": null },
        { "stepNumber": 3, "description": "Solve.", "workingLatex": "3n = 60 \\Rightarrow n = 20", "explanation": "$n$ is a whole number, so $62$ is a term.", "diagram": null }
      ],
      "finalAnswer": "Yes — it is the $20$th term."
    }
  },
  {
    "id": "gcse.algebra.nth-term-linear.q032",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "nth term of linear sequences",
    "subtopicId": "gcse.algebra.nth-term-linear",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "value",
    "tags": ["nth term", "substitution"],
    "questionText": "The $n$th term of a sequence is $4n - 3$. Find the $50$th term.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Substitute $n = 50$.", "workingLatex": "4(50) - 3", "explanation": "Replace $n$ with $50$.", "diagram": null },
        { "stepNumber": 2, "description": "Evaluate.", "workingLatex": "200 - 3 = 197", "explanation": "The $50$th term is $197$.", "diagram": null }
      ],
      "finalAnswer": "$197$"
    }
  },
  {
    "id": "gcse.algebra.nth-term-linear.q033",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "nth term of linear sequences",
    "subtopicId": "gcse.algebra.nth-term-linear",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "expression",
    "tags": ["nth term", "decreasing"],
    "questionText": "Find the $n$th term of the sequence $30, 25, 20, 15, \\ldots$",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Find the common difference.", "workingLatex": "d = -5", "explanation": "The terms fall by $5$, so start with $-5n$.", "diagram": null },
        { "stepNumber": 2, "description": "Adjust.", "workingLatex": "-5n = -5, -10, -15, -20", "explanation": "Each real term is $35$ more than $-5n$.", "diagram": null },
        { "stepNumber": 3, "description": "Write the $n$th term.", "workingLatex": "35 - 5n", "explanation": "So the $n$th term is $-5n + 35$.", "diagram": null }
      ],
      "finalAnswer": "$35 - 5n$"
    }
  },
  {
    "id": "gcse.algebra.nth-term-linear.q034",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "nth term of linear sequences",
    "subtopicId": "gcse.algebra.nth-term-linear",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "expression",
    "tags": ["nth term", "missing term"],
    "questionText": "A sequence is $3, \\underline{\\hspace{6mm}}, 11, 15, \\ldots$ It is arithmetic. Find the $n$th term.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Find the common difference.", "workingLatex": "(15 - 3) \\div 3 = 4", "explanation": "There are three steps from $3$ to $15$, so each step is $4$.", "diagram": null },
        { "stepNumber": 2, "description": "Fill the gap.", "workingLatex": "3, 7, 11, 15", "explanation": "The missing term is $7$.", "diagram": null },
        { "stepNumber": 3, "description": "Write the $n$th term.", "workingLatex": "4n - 1", "explanation": "Start with $4n$; each term is $1$ less.", "diagram": null }
      ],
      "finalAnswer": "$4n - 1$"
    }
  },
  {
    "id": "gcse.algebra.nth-term-linear.q035",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "nth term of linear sequences",
    "subtopicId": "gcse.algebra.nth-term-linear",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "value",
    "tags": ["nth term", "which term"],
    "questionText": "The $n$th term of a sequence is $2n + 5$. Which term is equal to $27$?",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Set the $n$th term equal to $27$.", "workingLatex": "2n + 5 = 27", "explanation": "Find the position that gives $27$.", "diagram": null },
        { "stepNumber": 2, "description": "Solve.", "workingLatex": "2n = 22 \\Rightarrow n = 11", "explanation": "Subtract $5$ then divide by $2$.", "diagram": null }
      ],
      "finalAnswer": "The $11$th term."
    }
  },
  {
    "id": "gcse.algebra.nth-term-linear.q036",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "nth term of linear sequences",
    "subtopicId": "gcse.algebra.nth-term-linear",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "value",
    "tags": ["nth term", "patterns", "word problem"],
    "questionText": "A pattern uses matchsticks: pattern $1$ has $4$, pattern $2$ has $7$, pattern $3$ has $10$. Find the $n$th term rule and use it to find how many matchsticks pattern $10$ uses.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Find the rule.", "workingLatex": "3n + 1", "explanation": "The pattern rises by $3$ each time; each term is $1$ more than $3n$.", "diagram": null },
        { "stepNumber": 2, "description": "Substitute $n = 10$.", "workingLatex": "3(10) + 1 = 31", "explanation": "Pattern $10$ uses $31$ matchsticks.", "diagram": null }
      ],
      "finalAnswer": "$n$th term $3n + 1$; pattern $10$ uses $31$ matchsticks."
    }
  },
  {
    "id": "gcse.algebra.nth-term-linear.q037",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "nth term of linear sequences",
    "subtopicId": "gcse.algebra.nth-term-linear",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "value",
    "tags": ["nth term", "decreasing", "substitution"],
    "questionText": "The $n$th term of a sequence is $40 - 3n$. Find the $12$th term.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Substitute $n = 12$.", "workingLatex": "40 - 3(12)", "explanation": "Replace $n$ with $12$.", "diagram": null },
        { "stepNumber": 2, "description": "Evaluate.", "workingLatex": "40 - 36 = 4", "explanation": "The $12$th term is $4$.", "diagram": null }
      ],
      "finalAnswer": "$4$"
    }
  },
  {
    "id": "gcse.algebra.nth-term-linear.q038",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "nth term of linear sequences",
    "subtopicId": "gcse.algebra.nth-term-linear",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "text",
    "tags": ["nth term", "is it a term"],
    "questionText": "The $n$th term of a sequence is $6n - 2$. Is $100$ a term of the sequence?",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Set equal to $100$.", "workingLatex": "6n - 2 = 100", "explanation": "Test whether $100$ appears.", "diagram": null },
        { "stepNumber": 2, "description": "Solve.", "workingLatex": "6n = 102 \\Rightarrow n = 17", "explanation": "$n = 17$ is a whole number.", "diagram": null }
      ],
      "finalAnswer": "Yes — it is the $17$th term."
    }
  },
  {
    "id": "gcse.algebra.nth-term-linear.q039",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "nth term of linear sequences",
    "subtopicId": "gcse.algebra.nth-term-linear",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "value",
    "tags": ["nth term", "substitution"],
    "questionText": "A sequence is $7, 12, 17, 22, \\ldots$ Find the $30$th term.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Find the $n$th term.", "workingLatex": "5n + 2", "explanation": "Common difference $5$ gives $5n$; each term is $2$ more.", "diagram": null },
        { "stepNumber": 2, "description": "Substitute $n = 30$.", "workingLatex": "5(30) + 2 = 152", "explanation": "The $30$th term is $152$.", "diagram": null }
      ],
      "finalAnswer": "$152$"
    }
  },
  {
    "id": "gcse.algebra.nth-term-linear.q040",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "nth term of linear sequences",
    "subtopicId": "gcse.algebra.nth-term-linear",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "value",
    "tags": ["nth term", "decreasing", "negatives"],
    "questionText": "A sequence is $5, 3, 1, -1, \\ldots$ Find the $6$th term using the $n$th term rule.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Find the $n$th term.", "workingLatex": "7 - 2n", "explanation": "Difference $-2$ gives $-2n$; each real term is $7$ more than $-2n$.", "diagram": null },
        { "stepNumber": 2, "description": "Substitute $n = 6$.", "workingLatex": "7 - 2(6) = 7 - 12", "explanation": "Replace $n$ with $6$.", "diagram": null },
        { "stepNumber": 3, "description": "Evaluate.", "workingLatex": "= -5", "explanation": "The $6$th term is $-5$.", "diagram": null }
      ],
      "finalAnswer": "$-5$"
    }
  },
  {
    "id": "gcse.algebra.nth-term-linear.q041",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "nth term of linear sequences",
    "subtopicId": "gcse.algebra.nth-term-linear",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "value",
    "tags": ["nth term", "which term"],
    "questionText": "A sequence is $1, 5, 9, 13, \\ldots$ Which term is equal to $97$?",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Find the $n$th term.", "workingLatex": "4n - 3", "explanation": "Difference $4$ gives $4n$; each term is $3$ less.", "diagram": null },
        { "stepNumber": 2, "description": "Set equal to $97$.", "workingLatex": "4n - 3 = 97", "explanation": "Find the position of $97$.", "diagram": null },
        { "stepNumber": 3, "description": "Solve.", "workingLatex": "4n = 100 \\Rightarrow n = 25", "explanation": "Add $3$ then divide by $4$.", "diagram": null }
      ],
      "finalAnswer": "The $25$th term."
    }
  },
  {
    "id": "gcse.algebra.nth-term-linear.q042",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "nth term of linear sequences",
    "subtopicId": "gcse.algebra.nth-term-linear",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "tags": ["nth term", "word problem"],
    "questionText": "A plant is $5$ cm tall and grows $2$ cm each week. Its height after $1, 2, 3$ weeks is $7, 9, 11$ cm. Find the $n$th term for the height and the height after $10$ weeks.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Find the rule.", "workingLatex": "2n + 5", "explanation": "The height rises by $2$ each week; each term is $5$ more than $2n$.", "diagram": null },
        { "stepNumber": 2, "description": "Substitute $n = 10$.", "workingLatex": "2(10) + 5 = 25", "explanation": "After $10$ weeks the height is $25$ cm.", "diagram": null }
      ],
      "finalAnswer": "$n$th term $2n + 5$; height after $10$ weeks is $25$ cm."
    }
  },
  {
    "id": "gcse.algebra.nth-term-linear.q043",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "nth term of linear sequences",
    "subtopicId": "gcse.algebra.nth-term-linear",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "value",
    "tags": ["nth term", "decreasing", "first negative"],
    "questionText": "The $n$th term of a sequence is $20 - 3n$. Find the first term that is negative.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Set the term below $0$.", "workingLatex": "20 - 3n < 0", "explanation": "We want the terms that are negative.", "diagram": null },
        { "stepNumber": 2, "description": "Solve.", "workingLatex": "20 < 3n \\Rightarrow n > 6.67", "explanation": "So the first whole-number position is $n = 7$.", "diagram": null },
        { "stepNumber": 3, "description": "Find that term.", "workingLatex": "20 - 3(7) = -1", "explanation": "The $7$th term is the first negative term.", "diagram": null }
      ],
      "finalAnswer": "The $7$th term, which is $-1$."
    }
  },
  {
    "id": "gcse.algebra.nth-term-linear.q044",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "nth term of linear sequences",
    "subtopicId": "gcse.algebra.nth-term-linear",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "text",
    "tags": ["nth term", "is it a term"],
    "questionText": "A sequence is $6, 11, 16, 21, \\ldots$ Is $76$ a term of the sequence?",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Find the $n$th term.", "workingLatex": "5n + 1", "explanation": "Difference $5$ gives $5n$; each term is $1$ more.", "diagram": null },
        { "stepNumber": 2, "description": "Set equal to $76$.", "workingLatex": "5n + 1 = 76", "explanation": "Test whether $76$ appears.", "diagram": null },
        { "stepNumber": 3, "description": "Solve.", "workingLatex": "5n = 75 \\Rightarrow n = 15", "explanation": "$n = 15$ is a whole number.", "diagram": null }
      ],
      "finalAnswer": "Yes — it is the $15$th term."
    }
  },
  {
    "id": "gcse.algebra.nth-term-linear.q045",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "nth term of linear sequences",
    "subtopicId": "gcse.algebra.nth-term-linear",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "expression",
    "tags": ["nth term", "decreasing"],
    "questionText": "Find the $n$th term of the sequence $9, 7, 5, 3, \\ldots$",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Find the common difference.", "workingLatex": "d = -2", "explanation": "The terms fall by $2$, so start with $-2n$.", "diagram": null },
        { "stepNumber": 2, "description": "Adjust.", "workingLatex": "-2n = -2, -4, -6, -8", "explanation": "Each real term is $11$ more than $-2n$.", "diagram": null },
        { "stepNumber": 3, "description": "Write the $n$th term.", "workingLatex": "11 - 2n", "explanation": "So the $n$th term is $-2n + 11$.", "diagram": null }
      ],
      "finalAnswer": "$11 - 2n$"
    }
  },
  {
    "id": "gcse.algebra.nth-term-linear.q046",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "nth term of linear sequences",
    "subtopicId": "gcse.algebra.nth-term-linear",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "expression",
    "tags": ["nth term", "from two terms"],
    "questionText": "An arithmetic sequence has first term $5$ and fourth term $20$. Find the $n$th term.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Find the common difference.", "workingLatex": "(20 - 5) \\div 3 = 5", "explanation": "There are three steps from the $1$st to the $4$th term.", "diagram": null },
        { "stepNumber": 2, "description": "Build the $n$th term.", "workingLatex": "5n + (5 - 5)", "explanation": "Start with $5n$; the first term $5$ matches $5 \\times 1$, so no adjustment.", "diagram": null },
        { "stepNumber": 3, "description": "Write it.", "workingLatex": "5n", "explanation": "The sequence is $5, 10, 15, 20, \\ldots$", "diagram": null }
      ],
      "finalAnswer": "$5n$"
    }
  },
  {
    "id": "gcse.algebra.nth-term-linear.q047",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "nth term of linear sequences",
    "subtopicId": "gcse.algebra.nth-term-linear",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "value",
    "tags": ["nth term", "substitution"],
    "questionText": "The $n$th term of a sequence is $3n + 4$. Find the $10$th term.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Substitute $n = 10$.", "workingLatex": "3(10) + 4", "explanation": "Replace $n$ with $10$.", "diagram": null },
        { "stepNumber": 2, "description": "Evaluate.", "workingLatex": "30 + 4 = 34", "explanation": "The $10$th term is $34$.", "diagram": null }
      ],
      "finalAnswer": "$34$"
    }
  },
  {
    "id": "gcse.algebra.nth-term-linear.q048",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "nth term of linear sequences",
    "subtopicId": "gcse.algebra.nth-term-linear",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "value",
    "tags": ["nth term", "which term"],
    "questionText": "The $n$th term of a sequence is $4n + 1$. Which term is equal to $101$?",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Set equal to $101$.", "workingLatex": "4n + 1 = 101", "explanation": "Find the position of $101$.", "diagram": null },
        { "stepNumber": 2, "description": "Solve.", "workingLatex": "4n = 100 \\Rightarrow n = 25", "explanation": "Subtract $1$ then divide by $4$.", "diagram": null }
      ],
      "finalAnswer": "The $25$th term."
    }
  },
  {
    "id": "gcse.algebra.nth-term-linear.q049",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "nth term of linear sequences",
    "subtopicId": "gcse.algebra.nth-term-linear",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "value",
    "tags": ["nth term", "decreasing", "substitution"],
    "questionText": "A sequence is $100, 95, 90, 85, \\ldots$ Find the $20$th term.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Find the $n$th term.", "workingLatex": "105 - 5n", "explanation": "Difference $-5$ gives $-5n$; each real term is $105$ more than $-5n$.", "diagram": null },
        { "stepNumber": 2, "description": "Substitute $n = 20$.", "workingLatex": "105 - 5(20) = 105 - 100", "explanation": "Replace $n$ with $20$.", "diagram": null },
        { "stepNumber": 3, "description": "Evaluate.", "workingLatex": "= 5", "explanation": "The $20$th term is $5$.", "diagram": null }
      ],
      "finalAnswer": "$5$"
    }
  },
  {
    "id": "gcse.algebra.nth-term-linear.q050",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "nth term of linear sequences",
    "subtopicId": "gcse.algebra.nth-term-linear",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "text",
    "tags": ["nth term", "is it a term", "reasoning"],
    "questionText": "The $n$th term of a sequence is $2n + 1$. Explain why $30$ cannot be a term of this sequence.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Look at the form of the terms.", "workingLatex": "2n + 1", "explanation": "$2n$ is always even, so $2n + 1$ is always odd.", "diagram": null },
        { "stepNumber": 2, "description": "Compare with $30$.", "workingLatex": "30 \\text{ is even}", "explanation": "Every term of the sequence is odd, but $30$ is even.", "diagram": null }
      ],
      "finalAnswer": "All terms are odd ($2n+1$), but $30$ is even, so it cannot appear."
    }
  },
  {
    "id": "gcse.algebra.nth-term-linear.q051",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "nth term of linear sequences",
    "subtopicId": "gcse.algebra.nth-term-linear",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "value",
    "tags": ["nth term", "substitution"],
    "questionText": "The $n$th term of a sequence is $10n - 4$. Find the $7$th term.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Substitute $n = 7$.", "workingLatex": "10(7) - 4", "explanation": "Replace $n$ with $7$.", "diagram": null },
        { "stepNumber": 2, "description": "Evaluate.", "workingLatex": "70 - 4 = 66", "explanation": "The $7$th term is $66$.", "diagram": null }
      ],
      "finalAnswer": "$66$"
    }
  },
  {
    "id": "gcse.algebra.nth-term-linear.q052",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "nth term of linear sequences",
    "subtopicId": "gcse.algebra.nth-term-linear",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "value",
    "tags": ["nth term", "patterns", "word problem"],
    "questionText": "A dot pattern grows as $2, 5, 8, 11, \\ldots$ Find the $n$th term and the number of dots in pattern $20$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Find the $n$th term.", "workingLatex": "3n - 1", "explanation": "Difference $3$ gives $3n$; each term is $1$ less.", "diagram": null },
        { "stepNumber": 2, "description": "Substitute $n = 20$.", "workingLatex": "3(20) - 1 = 59", "explanation": "Pattern $20$ has $59$ dots.", "diagram": null }
      ],
      "finalAnswer": "$n$th term $3n - 1$; pattern $20$ has $59$ dots."
    }
  },
  {
    "id": "gcse.algebra.nth-term-linear.q053",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "nth term of linear sequences",
    "subtopicId": "gcse.algebra.nth-term-linear",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "expression",
    "tags": ["nth term", "decreasing"],
    "questionText": "Find the $n$th term of the sequence $15, 13, 11, 9, \\ldots$",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Find the common difference.", "workingLatex": "d = -2", "explanation": "The terms fall by $2$, so start with $-2n$.", "diagram": null },
        { "stepNumber": 2, "description": "Adjust.", "workingLatex": "-2n = -2, -4, -6, -8", "explanation": "Each real term is $17$ more than $-2n$.", "diagram": null },
        { "stepNumber": 3, "description": "Write the $n$th term.", "workingLatex": "17 - 2n", "explanation": "So the $n$th term is $-2n + 17$.", "diagram": null }
      ],
      "finalAnswer": "$17 - 2n$"
    }
  },
  {
    "id": "gcse.algebra.nth-term-linear.q054",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "nth term of linear sequences",
    "subtopicId": "gcse.algebra.nth-term-linear",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "expression",
    "tags": ["nth term", "from two terms"],
    "questionText": "An arithmetic sequence has $3$rd term $13$ and $5$th term $21$. Find the $n$th term.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Find the common difference.", "workingLatex": "(21 - 13) \\div 2 = 4", "explanation": "There are two steps between the $3$rd and $5$th terms.", "diagram": null },
        { "stepNumber": 2, "description": "Find the first term.", "workingLatex": "13 - 2 \\times 4 = 5", "explanation": "Step back two differences from the $3$rd term.", "diagram": null },
        { "stepNumber": 3, "description": "Write the $n$th term.", "workingLatex": "4n + 1", "explanation": "Start with $4n$; the first term $5$ is $1$ more than $4 \\times 1$.", "diagram": null }
      ],
      "finalAnswer": "$4n + 1$"
    }
  },
  {
    "id": "gcse.algebra.nth-term-linear.q055",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "nth term of linear sequences",
    "subtopicId": "gcse.algebra.nth-term-linear",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "value",
    "tags": ["nth term", "which term"],
    "questionText": "The $n$th term of a sequence is $6n - 1$. Which term is equal to $59$?",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Set equal to $59$.", "workingLatex": "6n - 1 = 59", "explanation": "Find the position of $59$.", "diagram": null },
        { "stepNumber": 2, "description": "Solve.", "workingLatex": "6n = 60 \\Rightarrow n = 10", "explanation": "Add $1$ then divide by $6$.", "diagram": null }
      ],
      "finalAnswer": "The $10$th term."
    }
  },
  {
    "id": "gcse.algebra.nth-term-linear.q056",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "nth term of linear sequences",
    "subtopicId": "gcse.algebra.nth-term-linear",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "value",
    "tags": ["nth term", "decreasing", "negatives"],
    "questionText": "A sequence is $12, 8, 4, 0, \\ldots$ Find the $10$th term.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Find the $n$th term.", "workingLatex": "16 - 4n", "explanation": "Difference $-4$ gives $-4n$; each real term is $16$ more than $-4n$.", "diagram": null },
        { "stepNumber": 2, "description": "Substitute $n = 10$.", "workingLatex": "16 - 4(10) = 16 - 40", "explanation": "Replace $n$ with $10$.", "diagram": null },
        { "stepNumber": 3, "description": "Evaluate.", "workingLatex": "= -24", "explanation": "The $10$th term is $-24$.", "diagram": null }
      ],
      "finalAnswer": "$-24$"
    }
  },
  {
    "id": "gcse.algebra.nth-term-linear.q057",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "nth term of linear sequences",
    "subtopicId": "gcse.algebra.nth-term-linear",
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "expression",
    "tags": ["nth term", "from two terms"],
    "questionText": "An arithmetic sequence has $2$nd term $11$ and $5$th term $26$. Find the $n$th term.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Find the common difference.", "workingLatex": "(26 - 11) \\div 3 = 5", "explanation": "There are three steps between the $2$nd and $5$th terms.", "diagram": null },
        { "stepNumber": 2, "description": "Find the first term.", "workingLatex": "11 - 5 = 6", "explanation": "Step back one difference from the $2$nd term.", "diagram": null },
        { "stepNumber": 3, "description": "Write the $n$th term.", "workingLatex": "5n + 1", "explanation": "Start with $5n$; the first term $6$ is $1$ more than $5 \\times 1$.", "diagram": null }
      ],
      "finalAnswer": "$5n + 1$"
    }
  },
  {
    "id": "gcse.algebra.nth-term-linear.q058",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "nth term of linear sequences",
    "subtopicId": "gcse.algebra.nth-term-linear",
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "value",
    "tags": ["nth term", "inequality", "counting"],
    "questionText": "The $n$th term of a sequence is $4n - 1$. How many terms of the sequence are less than $100$?",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Set the term below $100$.", "workingLatex": "4n - 1 < 100", "explanation": "We want terms smaller than $100$.", "diagram": null },
        { "stepNumber": 2, "description": "Solve.", "workingLatex": "4n < 101 \\Rightarrow n < 25.25", "explanation": "Add $1$ then divide by $4$.", "diagram": null },
        { "stepNumber": 3, "description": "Count whole numbers.", "workingLatex": "n = 1, 2, \\ldots, 25", "explanation": "The largest allowed position is $25$ (giving $99$).", "diagram": null }
      ],
      "finalAnswer": "$25$ terms."
    }
  },
  {
    "id": "gcse.algebra.nth-term-linear.q059",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "nth term of linear sequences",
    "subtopicId": "gcse.algebra.nth-term-linear",
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "value",
    "tags": ["nth term", "common term"],
    "questionText": "Sequence A has $n$th term $3n + 1$ and sequence B has $n$th term $4n - 1$. Find the first number that appears in both sequences.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "List sequence A.", "workingLatex": "4, 7, 10, 13, 16, 19", "explanation": "These come from $3n + 1$.", "diagram": null },
        { "stepNumber": 2, "description": "List sequence B.", "workingLatex": "3, 7, 11, 15, 19", "explanation": "These come from $4n - 1$.", "diagram": null },
        { "stepNumber": 3, "description": "Find the first common value.", "workingLatex": "7", "explanation": "$7$ is the first number in both lists.", "diagram": null }
      ],
      "finalAnswer": "$7$"
    }
  },
  {
    "id": "gcse.algebra.nth-term-linear.q060",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "nth term of linear sequences",
    "subtopicId": "gcse.algebra.nth-term-linear",
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "text",
    "tags": ["nth term", "is it a term"],
    "questionText": "The $n$th term of a sequence is $5n - 3$. Which of $122$ and $130$ is a term of the sequence?",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Test $122$.", "workingLatex": "5n - 3 = 122 \\Rightarrow n = 25", "explanation": "$5n = 125$, so $n = 25$, a whole number.", "diagram": null },
        { "stepNumber": 2, "description": "Test $130$.", "workingLatex": "5n - 3 = 130 \\Rightarrow n = 26.6", "explanation": "$5n = 133$, so $n = 26.6$, not a whole number.", "diagram": null }
      ],
      "finalAnswer": "$122$ is a term (the $25$th); $130$ is not."
    }
  },
  {
    "id": "gcse.algebra.nth-term-linear.q061",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "nth term of linear sequences",
    "subtopicId": "gcse.algebra.nth-term-linear",
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "value",
    "tags": ["nth term", "decreasing", "inequality"],
    "questionText": "The $n$th term of a sequence is $40 - 6n$. Find the first term that is less than $-50$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Set the term below $-50$.", "workingLatex": "40 - 6n < -50", "explanation": "We want terms smaller than $-50$.", "diagram": null },
        { "stepNumber": 2, "description": "Solve.", "workingLatex": "-6n < -90 \\Rightarrow n > 15", "explanation": "Dividing by $-6$ reverses the inequality.", "diagram": null },
        { "stepNumber": 3, "description": "Find the term.", "workingLatex": "40 - 6(16) = -56", "explanation": "The first whole-number position is $16$.", "diagram": null }
      ],
      "finalAnswer": "The $16$th term, which is $-56$."
    }
  },
  {
    "id": "gcse.algebra.nth-term-linear.q062",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "nth term of linear sequences",
    "subtopicId": "gcse.algebra.nth-term-linear",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "value",
    "tags": ["nth term", "inequality", "word problem"],
    "questionText": "A taxi charges \u00a34 plus \u00a32 per mile, so the cost after $n$ miles is $2n + 4$ pounds. If a passenger has \u00a330, what is the greatest whole number of miles they can afford?",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Form the inequality.", "workingLatex": "2n + 4 \\leq 30", "explanation": "The cost must be no more than \u00a330.", "diagram": null },
        { "stepNumber": 2, "description": "Solve.", "workingLatex": "2n \\leq 26 \\Rightarrow n \\leq 13", "explanation": "Subtract $4$ then divide by $2$.", "diagram": null }
      ],
      "finalAnswer": "$13$ miles."
    }
  },
  {
    "id": "gcse.algebra.nth-term-linear.q063",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "nth term of linear sequences",
    "subtopicId": "gcse.algebra.nth-term-linear",
    "difficulty": "Hard",
    "marks": 4,
    "answerType": "text",
    "tags": ["nth term", "is it a term"],
    "questionText": "The $n$th term of a sequence is $7n + 2$. Show that $100$ is a term and state its position.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Set equal to $100$.", "workingLatex": "7n + 2 = 100", "explanation": "Test whether $100$ appears.", "diagram": null },
        { "stepNumber": 2, "description": "Solve.", "workingLatex": "7n = 98 \\Rightarrow n = 14", "explanation": "$n = 14$ is a whole number.", "diagram": null }
      ],
      "finalAnswer": "Yes — $100$ is the $14$th term."
    }
  },
  {
    "id": "gcse.algebra.nth-term-linear.q064",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "nth term of linear sequences",
    "subtopicId": "gcse.algebra.nth-term-linear",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "value",
    "tags": ["nth term", "common term"],
    "questionText": "One sequence has $n$th term $2n + 3$ and another has $n$th term $5n - 4$. Find the first number that appears in both sequences.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "List the first sequence.", "workingLatex": "5, 7, 9, 11, 13", "explanation": "From $2n + 3$: the odd numbers from $5$.", "diagram": null },
        { "stepNumber": 2, "description": "List the second sequence.", "workingLatex": "1, 6, 11, 16", "explanation": "From $5n - 4$.", "diagram": null },
        { "stepNumber": 3, "description": "Find the first match.", "workingLatex": "11", "explanation": "$11$ is the first value common to both.", "diagram": null }
      ],
      "finalAnswer": "$11$"
    }
  },
  {
    "id": "gcse.algebra.nth-term-linear.q065",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "nth term of linear sequences",
    "subtopicId": "gcse.algebra.nth-term-linear",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "expression",
    "tags": ["nth term", "from two terms"],
    "questionText": "The $n$th term of a sequence is $an + b$. The $3$rd term is $14$ and the $7$th term is $34$. Find $a$ and $b$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Find $a$ (the common difference).", "workingLatex": "(34 - 14) \\div (7 - 3) = 5", "explanation": "The change over $4$ steps is $20$, so each step is $5$.", "diagram": null },
        { "stepNumber": 2, "description": "Use the $3$rd term.", "workingLatex": "3a + b = 14", "explanation": "Substitute $n = 3$ into $an + b$.", "diagram": null },
        { "stepNumber": 3, "description": "Solve for $b$.", "workingLatex": "15 + b = 14 \\Rightarrow b = -1", "explanation": "Put $a = 5$ in and rearrange.", "diagram": null }
      ],
      "finalAnswer": "$a = 5,\\ b = -1$ (so $5n - 1$)."
    }
  },
  {
    "id": "gcse.algebra.nth-term-linear.q066",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "nth term of linear sequences",
    "subtopicId": "gcse.algebra.nth-term-linear",
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "value",
    "tags": ["nth term", "word problem"],
    "questionText": "A theatre has $15$ seats in row $1$, $18$ in row $2$ and $21$ in row $3$. Find the $n$th term for the number of seats in row $n$, and hence the row that has $45$ seats.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Find the $n$th term.", "workingLatex": "3n + 12", "explanation": "Seats rise by $3$ per row; each is $12$ more than $3n$.", "diagram": null },
        { "stepNumber": 2, "description": "Set equal to $45$.", "workingLatex": "3n + 12 = 45", "explanation": "Find which row has $45$ seats.", "diagram": null },
        { "stepNumber": 3, "description": "Solve.", "workingLatex": "3n = 33 \\Rightarrow n = 11", "explanation": "Subtract $12$ then divide by $3$.", "diagram": null }
      ],
      "finalAnswer": "$n$th term $3n + 12$; row $11$ has $45$ seats."
    }
  },
  {
    "id": "gcse.algebra.nth-term-linear.q067",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "nth term of linear sequences",
    "subtopicId": "gcse.algebra.nth-term-linear",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "value",
    "tags": ["nth term", "inequality", "counting"],
    "questionText": "The $n$th term of a sequence is $6n - 2$. How many terms of the sequence lie between $50$ and $150$?",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Lower bound.", "workingLatex": "6n - 2 \\geq 50 \\Rightarrow n \\geq 8.67", "explanation": "The smallest whole-number position is $9$ (giving $52$).", "diagram": null },
        { "stepNumber": 2, "description": "Upper bound.", "workingLatex": "6n - 2 \\leq 150 \\Rightarrow n \\leq 25.33", "explanation": "The largest whole-number position is $25$ (giving $148$).", "diagram": null },
        { "stepNumber": 3, "description": "Count the positions.", "workingLatex": "25 - 9 + 1 = 17", "explanation": "Include both ends when counting.", "diagram": null }
      ],
      "finalAnswer": "$17$ terms."
    }
  },
  {
    "id": "gcse.algebra.nth-term-linear.q068",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "nth term of linear sequences",
    "subtopicId": "gcse.algebra.nth-term-linear",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "value",
    "tags": ["nth term", "equating sequences"],
    "questionText": "Sequence A has $n$th term $4n + 1$ and sequence B has $n$th term $6n - 9$. Find the position $n$ where both sequences have the same term, and state that term.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Set the $n$th terms equal.", "workingLatex": "4n + 1 = 6n - 9", "explanation": "We want the same position $n$ to give the same value.", "diagram": null },
        { "stepNumber": 2, "description": "Solve for $n$.", "workingLatex": "10 = 2n \\Rightarrow n = 5", "explanation": "Collect terms and divide.", "diagram": null },
        { "stepNumber": 3, "description": "Find the term.", "workingLatex": "4(5) + 1 = 21", "explanation": "Substitute $n = 5$ into either rule.", "diagram": null }
      ],
      "finalAnswer": "At $n = 5$, both give $21$."
    }
  },
  {
    "id": "gcse.algebra.nth-term-linear.q069",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "nth term of linear sequences",
    "subtopicId": "gcse.algebra.nth-term-linear",
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "value",
    "tags": ["nth term", "decreasing", "inequality"],
    "questionText": "The $n$th term of a sequence is $100 - 7n$. Find the last term that is still positive.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Set the term above $0$.", "workingLatex": "100 - 7n > 0", "explanation": "We want the positive terms.", "diagram": null },
        { "stepNumber": 2, "description": "Solve.", "workingLatex": "100 > 7n \\Rightarrow n < 14.28", "explanation": "So the largest whole-number position is $14$.", "diagram": null },
        { "stepNumber": 3, "description": "Find that term.", "workingLatex": "100 - 7(14) = 2", "explanation": "The $14$th term is the last positive one.", "diagram": null }
      ],
      "finalAnswer": "The $14$th term, which is $2$."
    }
  },
  {
    "id": "gcse.algebra.nth-term-linear.q070",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "nth term of linear sequences",
    "subtopicId": "gcse.algebra.nth-term-linear",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "text",
    "tags": ["nth term", "from two terms", "which term"],
    "questionText": "An arithmetic sequence has $4$th term $17$ and $9$th term $37$. Find the $n$th term, and determine whether $85$ is a term of the sequence.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Find the common difference.", "workingLatex": "(37 - 17) \\div (9 - 4) = 4", "explanation": "The change of $20$ over $5$ steps gives $4$ per step.", "diagram": null },
        { "stepNumber": 2, "description": "Find the first term.", "workingLatex": "17 - 3 \\times 4 = 5", "explanation": "Step back three differences from the $4$th term.", "diagram": null },
        { "stepNumber": 3, "description": "Write the $n$th term.", "workingLatex": "4n + 1", "explanation": "Start with $4n$; the first term $5$ is $1$ more than $4 \\times 1$.", "diagram": null },
        { "stepNumber": 4, "description": "Test $85$.", "workingLatex": "4n + 1 = 85 \\Rightarrow n = 21", "explanation": "$n = 21$ is a whole number, so $85$ is a term.", "diagram": null }
      ],
      "finalAnswer": "$n$th term $4n + 1$; yes, $85$ is the $21$st term."
    }
  }
];
