import { Question } from "@/lib/types";

export const questions: Question[] = [
  {
    "id": "gcse.algebra.generating-sequences.q001",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Generating sequences",
    "subtopicId": "gcse.algebra.generating-sequences",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "value",
    "tags": ["sequences", "term-to-term"],
    "questionText": "A sequence has first term $3$ and the term-to-term rule \u201cadd $5$\u201d. Write down the first four terms.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Start with the first term.", "workingLatex": "3", "explanation": "The first term is given, so we begin there.", "diagram": null },
        { "stepNumber": 2, "description": "Apply the rule.", "workingLatex": "3 + 5 = 8,\\ 8 + 5 = 13,\\ 13 + 5 = 18", "explanation": "Keep adding $5$ to reach each new term.", "diagram": null }
      ],
      "finalAnswer": "$3, 8, 13, 18$"
    }
  },
  {
    "id": "gcse.algebra.generating-sequences.q002",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Generating sequences",
    "subtopicId": "gcse.algebra.generating-sequences",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "value",
    "tags": ["sequences", "term-to-term"],
    "questionText": "A sequence has first term $10$ and the term-to-term rule \u201cadd $4$\u201d. Write down the first four terms.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Start with the first term.", "workingLatex": "10", "explanation": "Begin at the given first term.", "diagram": null },
        { "stepNumber": 2, "description": "Apply the rule.", "workingLatex": "10 + 4 = 14,\\ 14 + 4 = 18,\\ 18 + 4 = 22", "explanation": "Add $4$ each time.", "diagram": null }
      ],
      "finalAnswer": "$10, 14, 18, 22$"
    }
  },
  {
    "id": "gcse.algebra.generating-sequences.q003",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Generating sequences",
    "subtopicId": "gcse.algebra.generating-sequences",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "value",
    "tags": ["sequences", "term-to-term", "geometric"],
    "questionText": "A sequence has first term $2$ and the term-to-term rule \u201cmultiply by $3$\u201d. Write down the first four terms.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Start with the first term.", "workingLatex": "2", "explanation": "Begin at the given first term.", "diagram": null },
        { "stepNumber": 2, "description": "Apply the rule.", "workingLatex": "2 \\times 3 = 6,\\ 6 \\times 3 = 18,\\ 18 \\times 3 = 54", "explanation": "Multiply by $3$ to reach each new term.", "diagram": null }
      ],
      "finalAnswer": "$2, 6, 18, 54$"
    }
  },
  {
    "id": "gcse.algebra.generating-sequences.q004",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Generating sequences",
    "subtopicId": "gcse.algebra.generating-sequences",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "value",
    "tags": ["sequences", "term-to-term", "geometric"],
    "questionText": "A sequence has first term $1$ and the term-to-term rule \u201cmultiply by $2$\u201d. Write down the first five terms.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Start with the first term.", "workingLatex": "1", "explanation": "Begin at $1$.", "diagram": null },
        { "stepNumber": 2, "description": "Apply the rule.", "workingLatex": "1, 2, 4, 8, 16", "explanation": "Double each time to get the powers of $2$.", "diagram": null }
      ],
      "finalAnswer": "$1, 2, 4, 8, 16$"
    }
  },
  {
    "id": "gcse.algebra.generating-sequences.q005",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Generating sequences",
    "subtopicId": "gcse.algebra.generating-sequences",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "value",
    "tags": ["sequences", "term-to-term", "decreasing"],
    "questionText": "A sequence has first term $20$ and the term-to-term rule \u201csubtract $3$\u201d. Write down the first four terms.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Start with the first term.", "workingLatex": "20", "explanation": "Begin at $20$.", "diagram": null },
        { "stepNumber": 2, "description": "Apply the rule.", "workingLatex": "20 - 3 = 17,\\ 17 - 3 = 14,\\ 14 - 3 = 11", "explanation": "Subtract $3$ each time.", "diagram": null }
      ],
      "finalAnswer": "$20, 17, 14, 11$"
    }
  },
  {
    "id": "gcse.algebra.generating-sequences.q006",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Generating sequences",
    "subtopicId": "gcse.algebra.generating-sequences",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "value",
    "tags": ["sequences", "position-to-term"],
    "questionText": "The $n$th term of a sequence is $2n$. Write down the first four terms.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Substitute $n = 1, 2, 3, 4$.", "workingLatex": "2(1), 2(2), 2(3), 2(4)", "explanation": "Put each position number into the rule.", "diagram": null },
        { "stepNumber": 2, "description": "Evaluate.", "workingLatex": "2, 4, 6, 8", "explanation": "These are the first four terms.", "diagram": null }
      ],
      "finalAnswer": "$2, 4, 6, 8$"
    }
  },
  {
    "id": "gcse.algebra.generating-sequences.q007",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Generating sequences",
    "subtopicId": "gcse.algebra.generating-sequences",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "value",
    "tags": ["sequences", "position-to-term"],
    "questionText": "The $n$th term of a sequence is $n + 5$. Write down the first four terms.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Substitute $n = 1, 2, 3, 4$.", "workingLatex": "1+5, 2+5, 3+5, 4+5", "explanation": "Put each position into the rule.", "diagram": null },
        { "stepNumber": 2, "description": "Evaluate.", "workingLatex": "6, 7, 8, 9", "explanation": "These are the first four terms.", "diagram": null }
      ],
      "finalAnswer": "$6, 7, 8, 9$"
    }
  },
  {
    "id": "gcse.algebra.generating-sequences.q008",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Generating sequences",
    "subtopicId": "gcse.algebra.generating-sequences",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "value",
    "tags": ["sequences", "position-to-term"],
    "questionText": "The $n$th term of a sequence is $3n + 1$. Write down the first four terms.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Substitute $n = 1, 2, 3, 4$.", "workingLatex": "3(1)+1, 3(2)+1, 3(3)+1, 3(4)+1", "explanation": "Put each position into the rule.", "diagram": null },
        { "stepNumber": 2, "description": "Evaluate.", "workingLatex": "4, 7, 10, 13", "explanation": "These are the first four terms.", "diagram": null }
      ],
      "finalAnswer": "$4, 7, 10, 13$"
    }
  },
  {
    "id": "gcse.algebra.generating-sequences.q009",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Generating sequences",
    "subtopicId": "gcse.algebra.generating-sequences",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "value",
    "tags": ["sequences", "position-to-term"],
    "questionText": "The $n$th term of a sequence is $5n$. Write down the first four terms.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Substitute $n = 1, 2, 3, 4$.", "workingLatex": "5(1), 5(2), 5(3), 5(4)", "explanation": "Put each position into the rule.", "diagram": null },
        { "stepNumber": 2, "description": "Evaluate.", "workingLatex": "5, 10, 15, 20", "explanation": "These are the multiples of $5$.", "diagram": null }
      ],
      "finalAnswer": "$5, 10, 15, 20$"
    }
  },
  {
    "id": "gcse.algebra.generating-sequences.q010",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Generating sequences",
    "subtopicId": "gcse.algebra.generating-sequences",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "value",
    "tags": ["sequences", "position-to-term"],
    "questionText": "The $n$th term of a sequence is $4n - 1$. Write down the first four terms.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Substitute $n = 1, 2, 3, 4$.", "workingLatex": "4(1)-1, 4(2)-1, 4(3)-1, 4(4)-1", "explanation": "Put each position into the rule.", "diagram": null },
        { "stepNumber": 2, "description": "Evaluate.", "workingLatex": "3, 7, 11, 15", "explanation": "These are the first four terms.", "diagram": null }
      ],
      "finalAnswer": "$3, 7, 11, 15$"
    }
  },
  {
    "id": "gcse.algebra.generating-sequences.q011",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Generating sequences",
    "subtopicId": "gcse.algebra.generating-sequences",
    "difficulty": "Easy",
    "marks": 1,
    "answerType": "text",
    "tags": ["sequences", "term-to-term", "finding rule"],
    "questionText": "Write down the term-to-term rule for the sequence $4, 9, 14, 19, \\ldots$",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Compare consecutive terms.", "workingLatex": "9 - 4 = 5", "explanation": "Each term is $5$ more than the one before.", "diagram": null }
      ],
      "finalAnswer": "Add $5$."
    }
  },
  {
    "id": "gcse.algebra.generating-sequences.q012",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Generating sequences",
    "subtopicId": "gcse.algebra.generating-sequences",
    "difficulty": "Easy",
    "marks": 1,
    "answerType": "text",
    "tags": ["sequences", "term-to-term", "finding rule", "geometric"],
    "questionText": "Write down the term-to-term rule for the sequence $3, 6, 12, 24, \\ldots$",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Compare consecutive terms.", "workingLatex": "6 \\div 3 = 2", "explanation": "Each term is double the one before.", "diagram": null }
      ],
      "finalAnswer": "Multiply by $2$."
    }
  },
  {
    "id": "gcse.algebra.generating-sequences.q013",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Generating sequences",
    "subtopicId": "gcse.algebra.generating-sequences",
    "difficulty": "Easy",
    "marks": 1,
    "answerType": "text",
    "tags": ["sequences", "term-to-term", "finding rule", "decreasing"],
    "questionText": "Write down the term-to-term rule for the sequence $30, 25, 20, 15, \\ldots$",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Compare consecutive terms.", "workingLatex": "30 - 25 = 5", "explanation": "Each term is $5$ less than the one before.", "diagram": null }
      ],
      "finalAnswer": "Subtract $5$."
    }
  },
  {
    "id": "gcse.algebra.generating-sequences.q014",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Generating sequences",
    "subtopicId": "gcse.algebra.generating-sequences",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "value",
    "tags": ["sequences", "term-to-term", "continue"],
    "questionText": "Write down the next two terms of the sequence $7, 11, 15, 19, \\ldots$",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Find the rule.", "workingLatex": "+4", "explanation": "Each term is $4$ more than the one before.", "diagram": null },
        { "stepNumber": 2, "description": "Apply it twice.", "workingLatex": "19 + 4 = 23,\\ 23 + 4 = 27", "explanation": "Continue the pattern.", "diagram": null }
      ],
      "finalAnswer": "$23, 27$"
    }
  },
  {
    "id": "gcse.algebra.generating-sequences.q015",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Generating sequences",
    "subtopicId": "gcse.algebra.generating-sequences",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "value",
    "tags": ["sequences", "term-to-term", "continue", "decreasing"],
    "questionText": "Write down the next two terms of the sequence $100, 90, 80, \\ldots$",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Find the rule.", "workingLatex": "-10", "explanation": "Each term is $10$ less than the one before.", "diagram": null },
        { "stepNumber": 2, "description": "Apply it twice.", "workingLatex": "80 - 10 = 70,\\ 70 - 10 = 60", "explanation": "Continue the pattern.", "diagram": null }
      ],
      "finalAnswer": "$70, 60$"
    }
  },
  {
    "id": "gcse.algebra.generating-sequences.q016",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Generating sequences",
    "subtopicId": "gcse.algebra.generating-sequences",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "value",
    "tags": ["sequences", "term-to-term"],
    "questionText": "A sequence has first term $5$ and the term-to-term rule \u201cadd $2$\u201d. Write down the first four terms.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Start with the first term.", "workingLatex": "5", "explanation": "Begin at $5$.", "diagram": null },
        { "stepNumber": 2, "description": "Apply the rule.", "workingLatex": "5, 7, 9, 11", "explanation": "Add $2$ each time.", "diagram": null }
      ],
      "finalAnswer": "$5, 7, 9, 11$"
    }
  },
  {
    "id": "gcse.algebra.generating-sequences.q017",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Generating sequences",
    "subtopicId": "gcse.algebra.generating-sequences",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "value",
    "tags": ["sequences", "position-to-term"],
    "questionText": "The $n$th term of a sequence is $n + 10$. Write down the first four terms.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Substitute $n = 1, 2, 3, 4$.", "workingLatex": "11, 12, 13, 14", "explanation": "Add $10$ to each position number.", "diagram": null }
      ],
      "finalAnswer": "$11, 12, 13, 14$"
    }
  },
  {
    "id": "gcse.algebra.generating-sequences.q018",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Generating sequences",
    "subtopicId": "gcse.algebra.generating-sequences",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "value",
    "tags": ["sequences", "term-to-term"],
    "questionText": "A sequence has first term $1$ and the term-to-term rule \u201cadd $3$\u201d. Write down the $5$th term.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "List the terms.", "workingLatex": "1, 4, 7, 10, 13", "explanation": "Add $3$ four times to reach the $5$th term.", "diagram": null }
      ],
      "finalAnswer": "$13$"
    }
  },
  {
    "id": "gcse.algebra.generating-sequences.q019",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Generating sequences",
    "subtopicId": "gcse.algebra.generating-sequences",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "value",
    "tags": ["sequences", "position-to-term"],
    "questionText": "The $n$th term of a sequence is $2n + 3$. Write down the first three terms.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Substitute $n = 1, 2, 3$.", "workingLatex": "5, 7, 9", "explanation": "Each term is $2n + 3$ for that position.", "diagram": null }
      ],
      "finalAnswer": "$5, 7, 9$"
    }
  },
  {
    "id": "gcse.algebra.generating-sequences.q020",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Generating sequences",
    "subtopicId": "gcse.algebra.generating-sequences",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "value",
    "tags": ["sequences", "term-to-term", "geometric"],
    "questionText": "A sequence has first term $6$ and the term-to-term rule \u201cmultiply by $2$\u201d. Write down the first four terms.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Start with the first term.", "workingLatex": "6", "explanation": "Begin at $6$.", "diagram": null },
        { "stepNumber": 2, "description": "Apply the rule.", "workingLatex": "6, 12, 24, 48", "explanation": "Double each time.", "diagram": null }
      ],
      "finalAnswer": "$6, 12, 24, 48$"
    }
  },
  {
    "id": "gcse.algebra.generating-sequences.q021",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Generating sequences",
    "subtopicId": "gcse.algebra.generating-sequences",
    "difficulty": "Easy",
    "marks": 1,
    "answerType": "text",
    "tags": ["sequences", "term-to-term", "finding rule", "geometric"],
    "questionText": "Write down the term-to-term rule for the sequence $2, 4, 8, 16, \\ldots$",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Compare consecutive terms.", "workingLatex": "4 \\div 2 = 2", "explanation": "Each term is double the one before.", "diagram": null }
      ],
      "finalAnswer": "Multiply by $2$."
    }
  },
  {
    "id": "gcse.algebra.generating-sequences.q022",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Generating sequences",
    "subtopicId": "gcse.algebra.generating-sequences",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "value",
    "tags": ["sequences", "continue"],
    "questionText": "Write down the next two terms of the sequence $5, 10, 15, 20, \\ldots$",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Find the rule.", "workingLatex": "+5", "explanation": "The terms go up in $5$s.", "diagram": null },
        { "stepNumber": 2, "description": "Apply it twice.", "workingLatex": "25, 30", "explanation": "Continue counting in $5$s.", "diagram": null }
      ],
      "finalAnswer": "$25, 30$"
    }
  },
  {
    "id": "gcse.algebra.generating-sequences.q023",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Generating sequences",
    "subtopicId": "gcse.algebra.generating-sequences",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "value",
    "tags": ["sequences", "term-to-term", "negatives"],
    "questionText": "A sequence has first term $-5$ and the term-to-term rule \u201cadd $3$\u201d. Write down the first four terms.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Start with the first term.", "workingLatex": "-5", "explanation": "Begin at $-5$.", "diagram": null },
        { "stepNumber": 2, "description": "Apply the rule.", "workingLatex": "-5 + 3 = -2,\\ -2 + 3 = 1,\\ 1 + 3 = 4", "explanation": "Adding $3$ moves the terms up through zero.", "diagram": null }
      ],
      "finalAnswer": "$-5, -2, 1, 4$"
    }
  },
  {
    "id": "gcse.algebra.generating-sequences.q024",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Generating sequences",
    "subtopicId": "gcse.algebra.generating-sequences",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "value",
    "tags": ["sequences", "position-to-term"],
    "questionText": "The $n$th term of a sequence is $10n$. Write down the first three terms.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Substitute $n = 1, 2, 3$.", "workingLatex": "10, 20, 30", "explanation": "Multiply each position by $10$.", "diagram": null }
      ],
      "finalAnswer": "$10, 20, 30$"
    }
  },
  {
    "id": "gcse.algebra.generating-sequences.q025",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Generating sequences",
    "subtopicId": "gcse.algebra.generating-sequences",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "value",
    "tags": ["sequences", "position-to-term"],
    "questionText": "The $n$th term of a sequence is $n - 1$. Write down the first four terms.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Substitute $n = 1, 2, 3, 4$.", "workingLatex": "0, 1, 2, 3", "explanation": "Subtract $1$ from each position number.", "diagram": null }
      ],
      "finalAnswer": "$0, 1, 2, 3$"
    }
  },
  {
    "id": "gcse.algebra.generating-sequences.q026",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Generating sequences",
    "subtopicId": "gcse.algebra.generating-sequences",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "value",
    "tags": ["sequences", "term-to-term", "decreasing"],
    "questionText": "A sequence has first term $8$ and the term-to-term rule \u201csubtract $2$\u201d. Write down the first five terms.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Start with the first term.", "workingLatex": "8", "explanation": "Begin at $8$.", "diagram": null },
        { "stepNumber": 2, "description": "Apply the rule.", "workingLatex": "8, 6, 4, 2, 0", "explanation": "Subtract $2$ each time.", "diagram": null }
      ],
      "finalAnswer": "$8, 6, 4, 2, 0$"
    }
  },
  {
    "id": "gcse.algebra.generating-sequences.q027",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Generating sequences",
    "subtopicId": "gcse.algebra.generating-sequences",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "value",
    "tags": ["sequences", "term-to-term", "two-step"],
    "questionText": "A sequence has first term $2$ and the term-to-term rule \u201cmultiply by $2$ then add $1$\u201d. Write down the first four terms.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Start with the first term.", "workingLatex": "2", "explanation": "Begin at $2$.", "diagram": null },
        { "stepNumber": 2, "description": "Apply the rule once.", "workingLatex": "2 \\times 2 + 1 = 5", "explanation": "Multiply by $2$ then add $1$.", "diagram": null },
        { "stepNumber": 3, "description": "Repeat.", "workingLatex": "5 \\times 2 + 1 = 11,\\ 11 \\times 2 + 1 = 23", "explanation": "Apply the same two-step rule each time.", "diagram": null }
      ],
      "finalAnswer": "$2, 5, 11, 23$"
    }
  },
  {
    "id": "gcse.algebra.generating-sequences.q028",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Generating sequences",
    "subtopicId": "gcse.algebra.generating-sequences",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "value",
    "tags": ["sequences", "term-to-term", "two-step"],
    "questionText": "A sequence has first term $3$ and the term-to-term rule \u201cmultiply by $3$ then subtract $2$\u201d. Write down the first four terms.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Start with the first term.", "workingLatex": "3", "explanation": "Begin at $3$.", "diagram": null },
        { "stepNumber": 2, "description": "Apply the rule once.", "workingLatex": "3 \\times 3 - 2 = 7", "explanation": "Multiply by $3$ then subtract $2$.", "diagram": null },
        { "stepNumber": 3, "description": "Repeat.", "workingLatex": "7 \\times 3 - 2 = 19,\\ 19 \\times 3 - 2 = 55", "explanation": "Apply the same rule each time.", "diagram": null }
      ],
      "finalAnswer": "$3, 7, 19, 55$"
    }
  },
  {
    "id": "gcse.algebra.generating-sequences.q029",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Generating sequences",
    "subtopicId": "gcse.algebra.generating-sequences",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "value",
    "tags": ["sequences", "position-to-term", "quadratic"],
    "questionText": "The $n$th term of a sequence is $n^2 + 1$. Write down the first four terms.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Substitute the positions.", "workingLatex": "1^2+1, 2^2+1, 3^2+1, 4^2+1", "explanation": "Square each position then add $1$.", "diagram": null },
        { "stepNumber": 2, "description": "Evaluate.", "workingLatex": "2, 5, 10, 17", "explanation": "These are the first four terms.", "diagram": null }
      ],
      "finalAnswer": "$2, 5, 10, 17$"
    }
  },
  {
    "id": "gcse.algebra.generating-sequences.q030",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Generating sequences",
    "subtopicId": "gcse.algebra.generating-sequences",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "value",
    "tags": ["sequences", "position-to-term", "quadratic"],
    "questionText": "The $n$th term of a sequence is $2n^2$. Write down the first three terms.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Substitute the positions.", "workingLatex": "2(1)^2, 2(2)^2, 2(3)^2", "explanation": "Square each position, then multiply by $2$.", "diagram": null },
        { "stepNumber": 2, "description": "Evaluate.", "workingLatex": "2, 8, 18", "explanation": "These are the first three terms.", "diagram": null }
      ],
      "finalAnswer": "$2, 8, 18$"
    }
  },
  {
    "id": "gcse.algebra.generating-sequences.q031",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Generating sequences",
    "subtopicId": "gcse.algebra.generating-sequences",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "value",
    "tags": ["sequences", "position-to-term", "fractions"],
    "questionText": "The $n$th term of a sequence is $\\dfrac{n}{n + 1}$. Write down the first three terms.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Substitute $n = 1, 2, 3$.", "workingLatex": "\\dfrac{1}{2}, \\dfrac{2}{3}, \\dfrac{3}{4}", "explanation": "Put each position into the numerator and one more into the denominator.", "diagram": null }
      ],
      "finalAnswer": "$\\dfrac{1}{2}, \\dfrac{2}{3}, \\dfrac{3}{4}$"
    }
  },
  {
    "id": "gcse.algebra.generating-sequences.q032",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Generating sequences",
    "subtopicId": "gcse.algebra.generating-sequences",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "value",
    "tags": ["sequences", "term-to-term", "missing term", "geometric"],
    "questionText": "A sequence has the term-to-term rule \u201cmultiply by $2$\u201d. Find the missing terms: $4, \\underline{\\hspace{6mm}}, \\underline{\\hspace{6mm}}, 32$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Apply the rule from $4$.", "workingLatex": "4 \\times 2 = 8", "explanation": "The second term is $8$.", "diagram": null },
        { "stepNumber": 2, "description": "Apply it again.", "workingLatex": "8 \\times 2 = 16", "explanation": "Check: $16 \\times 2 = 32$, matching the last term.", "diagram": null }
      ],
      "finalAnswer": "$8$ and $16$"
    }
  },
  {
    "id": "gcse.algebra.generating-sequences.q033",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Generating sequences",
    "subtopicId": "gcse.algebra.generating-sequences",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "value",
    "tags": ["sequences", "term-to-term", "geometric"],
    "questionText": "A sequence has first term $3$ and the term-to-term rule \u201cmultiply by $2$\u201d. Find the first term that is greater than $100$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Generate terms.", "workingLatex": "3, 6, 12, 24, 48, 96, 192", "explanation": "Double each time.", "diagram": null },
        { "stepNumber": 2, "description": "Find the first over $100$.", "workingLatex": "96 < 100 < 192", "explanation": "$96$ is still below $100$, so $192$ is the first term above it.", "diagram": null }
      ],
      "finalAnswer": "$192$ (the $7$th term)."
    }
  },
  {
    "id": "gcse.algebra.generating-sequences.q034",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Generating sequences",
    "subtopicId": "gcse.algebra.generating-sequences",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "value",
    "tags": ["sequences", "position-to-term"],
    "questionText": "The $n$th term of a sequence is $3n - 2$. Write down the $10$th term.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Substitute $n = 10$.", "workingLatex": "3(10) - 2", "explanation": "Put $10$ into the rule.", "diagram": null },
        { "stepNumber": 2, "description": "Evaluate.", "workingLatex": "30 - 2 = 28", "explanation": "The $10$th term is $28$.", "diagram": null }
      ],
      "finalAnswer": "$28$"
    }
  },
  {
    "id": "gcse.algebra.generating-sequences.q035",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Generating sequences",
    "subtopicId": "gcse.algebra.generating-sequences",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "value",
    "tags": ["sequences", "term-to-term", "decreasing"],
    "questionText": "A sequence has first term $50$ and the term-to-term rule \u201csubtract $7$\u201d. Write down the first five terms.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Start with the first term.", "workingLatex": "50", "explanation": "Begin at $50$.", "diagram": null },
        { "stepNumber": 2, "description": "Apply the rule.", "workingLatex": "50, 43, 36, 29, 22", "explanation": "Subtract $7$ each time.", "diagram": null }
      ],
      "finalAnswer": "$50, 43, 36, 29, 22$"
    }
  },
  {
    "id": "gcse.algebra.generating-sequences.q036",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Generating sequences",
    "subtopicId": "gcse.algebra.generating-sequences",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "value",
    "tags": ["sequences", "position-to-term", "decreasing"],
    "questionText": "The $n$th term of a sequence is $100 - 5n$. Write down the first four terms.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Substitute $n = 1, 2, 3, 4$.", "workingLatex": "100-5, 100-10, 100-15, 100-20", "explanation": "Put each position into the rule.", "diagram": null },
        { "stepNumber": 2, "description": "Evaluate.", "workingLatex": "95, 90, 85, 80", "explanation": "The sequence decreases by $5$ each time.", "diagram": null }
      ],
      "finalAnswer": "$95, 90, 85, 80$"
    }
  },
  {
    "id": "gcse.algebra.generating-sequences.q037",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Generating sequences",
    "subtopicId": "gcse.algebra.generating-sequences",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "value",
    "tags": ["sequences", "position-to-term", "quadratic"],
    "questionText": "The $n$th term of a sequence is $n^2 - n$. Write down the first four terms.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Substitute the positions.", "workingLatex": "1-1, 4-2, 9-3, 16-4", "explanation": "Work out $n^2$ then subtract $n$.", "diagram": null },
        { "stepNumber": 2, "description": "Evaluate.", "workingLatex": "0, 2, 6, 12", "explanation": "These are the first four terms.", "diagram": null }
      ],
      "finalAnswer": "$0, 2, 6, 12$"
    }
  },
  {
    "id": "gcse.algebra.generating-sequences.q038",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Generating sequences",
    "subtopicId": "gcse.algebra.generating-sequences",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "value",
    "tags": ["sequences", "Fibonacci"],
    "questionText": "A sequence starts $1, 4$ and each new term is the sum of the previous two. Write down the first five terms.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Add the first two terms.", "workingLatex": "1 + 4 = 5", "explanation": "The third term is the sum of the first two.", "diagram": null },
        { "stepNumber": 2, "description": "Continue.", "workingLatex": "4 + 5 = 9,\\ 5 + 9 = 14", "explanation": "Keep adding the latest two terms.", "diagram": null }
      ],
      "finalAnswer": "$1, 4, 5, 9, 14$"
    }
  },
  {
    "id": "gcse.algebra.generating-sequences.q039",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Generating sequences",
    "subtopicId": "gcse.algebra.generating-sequences",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "value",
    "tags": ["sequences", "term-to-term", "geometric"],
    "questionText": "A sequence has first term $2$ and the term-to-term rule \u201cmultiply by $2$\u201d. Find the $6$th term.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Generate the terms.", "workingLatex": "2, 4, 8, 16, 32, 64", "explanation": "Double each time up to the $6$th term.", "diagram": null }
      ],
      "finalAnswer": "$64$"
    }
  },
  {
    "id": "gcse.algebra.generating-sequences.q040",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Generating sequences",
    "subtopicId": "gcse.algebra.generating-sequences",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "value",
    "tags": ["sequences", "position-to-term", "quadratic"],
    "questionText": "The $n$th term of a sequence is $(n + 1)^2$. Write down the first four terms.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Substitute the positions.", "workingLatex": "2^2, 3^2, 4^2, 5^2", "explanation": "Add $1$ to each position, then square it.", "diagram": null },
        { "stepNumber": 2, "description": "Evaluate.", "workingLatex": "4, 9, 16, 25", "explanation": "These are square numbers starting from $2^2$.", "diagram": null }
      ],
      "finalAnswer": "$4, 9, 16, 25$"
    }
  },
  {
    "id": "gcse.algebra.generating-sequences.q041",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Generating sequences",
    "subtopicId": "gcse.algebra.generating-sequences",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "value",
    "tags": ["sequences", "term-to-term", "two-step"],
    "questionText": "A sequence has first term $5$ and the term-to-term rule \u201csubtract $1$ then multiply by $2$\u201d. Write down the first four terms.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Apply the rule once.", "workingLatex": "(5 - 1) \\times 2 = 8", "explanation": "Subtract $1$ then multiply by $2$.", "diagram": null },
        { "stepNumber": 2, "description": "Repeat.", "workingLatex": "(8 - 1) \\times 2 = 14,\\ (14 - 1) \\times 2 = 26", "explanation": "Apply the same rule each time.", "diagram": null }
      ],
      "finalAnswer": "$5, 8, 14, 26$"
    }
  },
  {
    "id": "gcse.algebra.generating-sequences.q042",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Generating sequences",
    "subtopicId": "gcse.algebra.generating-sequences",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "value",
    "tags": ["sequences", "position-to-term", "geometric"],
    "questionText": "The $n$th term of a sequence is $2^n$. Write down the first four terms.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Substitute $n = 1, 2, 3, 4$.", "workingLatex": "2^1, 2^2, 2^3, 2^4", "explanation": "Raise $2$ to each position number.", "diagram": null },
        { "stepNumber": 2, "description": "Evaluate.", "workingLatex": "2, 4, 8, 16", "explanation": "These are the powers of $2$.", "diagram": null }
      ],
      "finalAnswer": "$2, 4, 8, 16$"
    }
  },
  {
    "id": "gcse.algebra.generating-sequences.q043",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Generating sequences",
    "subtopicId": "gcse.algebra.generating-sequences",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "value",
    "tags": ["sequences", "term-to-term", "negatives"],
    "questionText": "A sequence has first term $4$ and the term-to-term rule \u201csubtract $5$\u201d. Write down the first five terms.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Start with the first term.", "workingLatex": "4", "explanation": "Begin at $4$.", "diagram": null },
        { "stepNumber": 2, "description": "Apply the rule.", "workingLatex": "4, -1, -6, -11, -16", "explanation": "Subtracting $5$ takes the sequence into negative numbers.", "diagram": null }
      ],
      "finalAnswer": "$4, -1, -6, -11, -16$"
    }
  },
  {
    "id": "gcse.algebra.generating-sequences.q044",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Generating sequences",
    "subtopicId": "gcse.algebra.generating-sequences",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "value",
    "tags": ["sequences", "finding rule", "continue", "geometric"],
    "questionText": "Write down the term-to-term rule of the sequence $1, 2, 4, 8, 16, \\ldots$ and find the next term.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Find the rule.", "workingLatex": "\\times 2", "explanation": "Each term is double the one before.", "diagram": null },
        { "stepNumber": 2, "description": "Apply it.", "workingLatex": "16 \\times 2 = 32", "explanation": "The next term is $32$.", "diagram": null }
      ],
      "finalAnswer": "Multiply by $2$; next term $32$."
    }
  },
  {
    "id": "gcse.algebra.generating-sequences.q045",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Generating sequences",
    "subtopicId": "gcse.algebra.generating-sequences",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "value",
    "tags": ["sequences", "position-to-term", "fractions"],
    "questionText": "The $n$th term of a sequence is $\\dfrac{60}{n}$. Write down the first three terms.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Substitute $n = 1, 2, 3$.", "workingLatex": "\\dfrac{60}{1}, \\dfrac{60}{2}, \\dfrac{60}{3}", "explanation": "Divide $60$ by each position number.", "diagram": null },
        { "stepNumber": 2, "description": "Evaluate.", "workingLatex": "60, 30, 20", "explanation": "These are the first three terms.", "diagram": null }
      ],
      "finalAnswer": "$60, 30, 20$"
    }
  },
  {
    "id": "gcse.algebra.generating-sequences.q046",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Generating sequences",
    "subtopicId": "gcse.algebra.generating-sequences",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "value",
    "tags": ["sequences", "position-to-term"],
    "questionText": "The $n$th term of a sequence is $4n + 3$. Write down the $5$th term.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Substitute $n = 5$.", "workingLatex": "4(5) + 3", "explanation": "Put $5$ into the rule.", "diagram": null },
        { "stepNumber": 2, "description": "Evaluate.", "workingLatex": "20 + 3 = 23", "explanation": "The $5$th term is $23$.", "diagram": null }
      ],
      "finalAnswer": "$23$"
    }
  },
  {
    "id": "gcse.algebra.generating-sequences.q047",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Generating sequences",
    "subtopicId": "gcse.algebra.generating-sequences",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "value",
    "tags": ["sequences", "term-to-term", "missing term"],
    "questionText": "A sequence has the term-to-term rule \u201cadd $5$\u201d. Find the missing term: $7, \\underline{\\hspace{6mm}}, 17, 22$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Apply the rule from $7$.", "workingLatex": "7 + 5 = 12", "explanation": "The second term is $12$.", "diagram": null },
        { "stepNumber": 2, "description": "Check forward.", "workingLatex": "12 + 5 = 17", "explanation": "This matches the given third term, confirming $12$.", "diagram": null }
      ],
      "finalAnswer": "$12$"
    }
  },
  {
    "id": "gcse.algebra.generating-sequences.q048",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Generating sequences",
    "subtopicId": "gcse.algebra.generating-sequences",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "value",
    "tags": ["sequences", "term-to-term", "two-step"],
    "questionText": "A sequence has first term $1$ and the term-to-term rule \u201cdouble then add $3$\u201d. Write down the first four terms.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Apply the rule once.", "workingLatex": "1 \\times 2 + 3 = 5", "explanation": "Double $1$ then add $3$.", "diagram": null },
        { "stepNumber": 2, "description": "Repeat.", "workingLatex": "5 \\times 2 + 3 = 13,\\ 13 \\times 2 + 3 = 29", "explanation": "Apply the same rule each time.", "diagram": null }
      ],
      "finalAnswer": "$1, 5, 13, 29$"
    }
  },
  {
    "id": "gcse.algebra.generating-sequences.q049",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Generating sequences",
    "subtopicId": "gcse.algebra.generating-sequences",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "value",
    "tags": ["sequences", "position-to-term"],
    "questionText": "The $n$th term of a sequence is $3n$. Write down the first term and the $20$th term.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "First term: substitute $n = 1$.", "workingLatex": "3(1) = 3", "explanation": "The first term is $3$.", "diagram": null },
        { "stepNumber": 2, "description": "20th term: substitute $n = 20$.", "workingLatex": "3(20) = 60", "explanation": "The $20$th term is $60$.", "diagram": null }
      ],
      "finalAnswer": "First term $3$; $20$th term $60$."
    }
  },
  {
    "id": "gcse.algebra.generating-sequences.q050",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Generating sequences",
    "subtopicId": "gcse.algebra.generating-sequences",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "value",
    "tags": ["sequences", "term-to-term", "decreasing", "negatives"],
    "questionText": "A sequence has first term $20$ and the term-to-term rule \u201csubtract $6$\u201d. Find the first term that is negative.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Generate the terms.", "workingLatex": "20, 14, 8, 2, -4", "explanation": "Subtract $6$ each time.", "diagram": null },
        { "stepNumber": 2, "description": "Find the first negative one.", "workingLatex": "-4", "explanation": "The $5$th term is the first below zero.", "diagram": null }
      ],
      "finalAnswer": "$-4$ (the $5$th term)."
    }
  },
  {
    "id": "gcse.algebra.generating-sequences.q051",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Generating sequences",
    "subtopicId": "gcse.algebra.generating-sequences",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "value",
    "tags": ["sequences", "position-to-term", "quadratic"],
    "questionText": "The $n$th term of a sequence is $n(n + 1)$. Write down the first four terms.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Substitute the positions.", "workingLatex": "1\\times2, 2\\times3, 3\\times4, 4\\times5", "explanation": "Multiply each position by one more than itself.", "diagram": null },
        { "stepNumber": 2, "description": "Evaluate.", "workingLatex": "2, 6, 12, 20", "explanation": "These are the first four terms.", "diagram": null }
      ],
      "finalAnswer": "$2, 6, 12, 20$"
    }
  },
  {
    "id": "gcse.algebra.generating-sequences.q052",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Generating sequences",
    "subtopicId": "gcse.algebra.generating-sequences",
    "difficulty": "Intermediate",
    "marks": 2,
    "answerType": "value",
    "tags": ["sequences", "term-to-term", "geometric"],
    "questionText": "A sequence has first term $3$ and the term-to-term rule \u201cmultiply by $10$\u201d. Write down the first four terms.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Apply the rule.", "workingLatex": "3, 30, 300, 3000", "explanation": "Multiply by $10$ each time.", "diagram": null }
      ],
      "finalAnswer": "$3, 30, 300, 3000$"
    }
  },
  {
    "id": "gcse.algebra.generating-sequences.q053",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Generating sequences",
    "subtopicId": "gcse.algebra.generating-sequences",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "value",
    "tags": ["sequences", "position-to-term"],
    "questionText": "The $n$th term of a sequence is $5n - 4$. Write down the first four terms.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Substitute $n = 1, 2, 3, 4$.", "workingLatex": "5-4, 10-4, 15-4, 20-4", "explanation": "Put each position into the rule.", "diagram": null },
        { "stepNumber": 2, "description": "Evaluate.", "workingLatex": "1, 6, 11, 16", "explanation": "These are the first four terms.", "diagram": null }
      ],
      "finalAnswer": "$1, 6, 11, 16$"
    }
  },
  {
    "id": "gcse.algebra.generating-sequences.q054",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Generating sequences",
    "subtopicId": "gcse.algebra.generating-sequences",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "value",
    "tags": ["sequences", "Fibonacci"],
    "questionText": "A sequence starts $2, 3$ and each new term is the sum of the previous two. Write down the first six terms.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Add the first two terms.", "workingLatex": "2 + 3 = 5", "explanation": "The third term is the sum of the first two.", "diagram": null },
        { "stepNumber": 2, "description": "Continue.", "workingLatex": "3+5=8,\\ 5+8=13,\\ 8+13=21", "explanation": "Keep adding the latest two terms.", "diagram": null }
      ],
      "finalAnswer": "$2, 3, 5, 8, 13, 21$"
    }
  },
  {
    "id": "gcse.algebra.generating-sequences.q055",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Generating sequences",
    "subtopicId": "gcse.algebra.generating-sequences",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "value",
    "tags": ["sequences", "position-to-term", "sum"],
    "questionText": "The $n$th term of a sequence is $2n + 1$. Find the sum of the first four terms.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Generate the first four terms.", "workingLatex": "3, 5, 7, 9", "explanation": "Substitute $n = 1, 2, 3, 4$.", "diagram": null },
        { "stepNumber": 2, "description": "Add them.", "workingLatex": "3 + 5 + 7 + 9 = 24", "explanation": "The total of the first four terms is $24$.", "diagram": null }
      ],
      "finalAnswer": "$24$"
    }
  },
  {
    "id": "gcse.algebra.generating-sequences.q056",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Generating sequences",
    "subtopicId": "gcse.algebra.generating-sequences",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "value",
    "tags": ["sequences", "position-to-term", "quadratic"],
    "questionText": "The $n$th term of a sequence is $n^2 + 2$. Write down the $5$th term.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Substitute $n = 5$.", "workingLatex": "5^2 + 2", "explanation": "Square the position then add $2$.", "diagram": null },
        { "stepNumber": 2, "description": "Evaluate.", "workingLatex": "25 + 2 = 27", "explanation": "The $5$th term is $27$.", "diagram": null }
      ],
      "finalAnswer": "$27$"
    }
  },
  {
    "id": "gcse.algebra.generating-sequences.q057",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Generating sequences",
    "subtopicId": "gcse.algebra.generating-sequences",
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "value",
    "tags": ["sequences", "term-to-term", "two-step"],
    "questionText": "A sequence has first term $1$ and the term-to-term rule \u201cmultiply by $2$ then add $3$\u201d. Find the $5$th term.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Apply the rule to build up terms.", "workingLatex": "1 \\to 5 \\to 13", "explanation": "$1\\times2+3=5$, then $5\\times2+3=13$.", "diagram": null },
        { "stepNumber": 2, "description": "Continue to the $5$th term.", "workingLatex": "13 \\to 29 \\to 61", "explanation": "$13\\times2+3=29$, then $29\\times2+3=61$.", "diagram": null }
      ],
      "finalAnswer": "$61$"
    }
  },
  {
    "id": "gcse.algebra.generating-sequences.q058",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Generating sequences",
    "subtopicId": "gcse.algebra.generating-sequences",
    "difficulty": "Hard",
    "marks": 4,
    "answerType": "value",
    "tags": ["sequences", "position-to-term", "quadratic"],
    "questionText": "The $n$th term of a sequence is $n^2 - 3n + 2$. Write down the first four terms.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Substitute $n = 1$ and $n = 2$.", "workingLatex": "1-3+2=0,\\ 4-6+2=0", "explanation": "Both give $0$.", "diagram": null },
        { "stepNumber": 2, "description": "Substitute $n = 3$ and $n = 4$.", "workingLatex": "9-9+2=2,\\ 16-12+2=6", "explanation": "Careful substitution gives $2$ and $6$.", "diagram": null }
      ],
      "finalAnswer": "$0, 0, 2, 6$"
    }
  },
  {
    "id": "gcse.algebra.generating-sequences.q059",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Generating sequences",
    "subtopicId": "gcse.algebra.generating-sequences",
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "value",
    "tags": ["sequences", "quadratic", "second differences"],
    "questionText": "A sequence generated by a rule gives $3, 8, 15, 24, \\ldots$ Use differences to find the next term.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Find the first differences.", "workingLatex": "5, 7, 9", "explanation": "The gaps grow, so the rule is quadratic.", "diagram": null },
        { "stepNumber": 2, "description": "Find the second difference.", "workingLatex": "2, 2", "explanation": "Constant $2$, so the next first difference is $9 + 2 = 11$.", "diagram": null },
        { "stepNumber": 3, "description": "Add the next gap.", "workingLatex": "24 + 11 = 35", "explanation": "The next term is $35$.", "diagram": null }
      ],
      "finalAnswer": "$35$"
    }
  },
  {
    "id": "gcse.algebra.generating-sequences.q060",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Generating sequences",
    "subtopicId": "gcse.algebra.generating-sequences",
    "difficulty": "Hard",
    "marks": 4,
    "answerType": "value",
    "tags": ["sequences", "term-to-term", "geometric", "reverse"],
    "questionText": "A sequence has the term-to-term rule \u201cmultiply by $3$\u201d. Its $3$rd term is $45$. Find the first term.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Work backwards once.", "workingLatex": "45 \\div 3 = 15", "explanation": "Undo the rule to reach the $2$nd term.", "diagram": null },
        { "stepNumber": 2, "description": "Work backwards again.", "workingLatex": "15 \\div 3 = 5", "explanation": "Undo the rule once more to reach the first term.", "diagram": null }
      ],
      "finalAnswer": "$5$"
    }
  },
  {
    "id": "gcse.algebra.generating-sequences.q061",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Generating sequences",
    "subtopicId": "gcse.algebra.generating-sequences",
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "value",
    "tags": ["sequences", "term-to-term", "two-step", "reverse"],
    "questionText": "A sequence has the term-to-term rule \u201cmultiply by $2$ then add $1$\u201d. Its $2$nd term is $9$. Find the first term.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Write the relationship.", "workingLatex": "2a + 1 = 9", "explanation": "Applying the rule to the first term $a$ gives the second term $9$.", "diagram": null },
        { "stepNumber": 2, "description": "Undo the $+1$.", "workingLatex": "2a = 8", "explanation": "Subtract $1$ from both sides.", "diagram": null },
        { "stepNumber": 3, "description": "Undo the $\\times 2$.", "workingLatex": "a = 4", "explanation": "Divide by $2$ to find the first term.", "diagram": null }
      ],
      "finalAnswer": "$4$"
    }
  },
  {
    "id": "gcse.algebra.generating-sequences.q062",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Generating sequences",
    "subtopicId": "gcse.algebra.generating-sequences",
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "value",
    "tags": ["sequences", "position-to-term", "quadratic", "reasoning"],
    "questionText": "The $n$th term of a sequence is $100 - n^2$. Find the first term that is negative.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Set the term below $0$.", "workingLatex": "100 - n^2 < 0", "explanation": "We want the terms that are negative.", "diagram": null },
        { "stepNumber": 2, "description": "Solve.", "workingLatex": "n^2 > 100 \\Rightarrow n > 10", "explanation": "So the first whole-number position is $n = 11$.", "diagram": null },
        { "stepNumber": 3, "description": "Find that term.", "workingLatex": "100 - 11^2 = -21", "explanation": "The $11$th term is the first negative one.", "diagram": null }
      ],
      "finalAnswer": "The $11$th term, which is $-21$."
    }
  },
  {
    "id": "gcse.algebra.generating-sequences.q063",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Generating sequences",
    "subtopicId": "gcse.algebra.generating-sequences",
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "value",
    "tags": ["sequences", "Fibonacci", "reverse"],
    "questionText": "In a sequence, each term is the sum of the two before it. The $3$rd term is $12$ and the $4$th term is $20$. Find the first two terms.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Use the $4$th term.", "workingLatex": "T_2 + 12 = 20 \\Rightarrow T_2 = 8", "explanation": "The $4$th term is the sum of the $2$nd and $3$rd terms.", "diagram": null },
        { "stepNumber": 2, "description": "Use the $3$rd term.", "workingLatex": "T_1 + 8 = 12 \\Rightarrow T_1 = 4", "explanation": "The $3$rd term is the sum of the first two.", "diagram": null }
      ],
      "finalAnswer": "$4$ and $8$"
    }
  },
  {
    "id": "gcse.algebra.generating-sequences.q064",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Generating sequences",
    "subtopicId": "gcse.algebra.generating-sequences",
    "difficulty": "Hard",
    "marks": 4,
    "answerType": "value",
    "tags": ["sequences", "position-to-term", "quadratic"],
    "questionText": "The $n$th term of a sequence is $2n^2 - 1$. Write down the $6$th term.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Substitute $n = 6$.", "workingLatex": "2(6)^2 - 1", "explanation": "Square $6$, multiply by $2$, then subtract $1$.", "diagram": null },
        { "stepNumber": 2, "description": "Evaluate.", "workingLatex": "2 \\times 36 - 1 = 71", "explanation": "The $6$th term is $71$.", "diagram": null }
      ],
      "finalAnswer": "$71$"
    }
  },
  {
    "id": "gcse.algebra.generating-sequences.q065",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Generating sequences",
    "subtopicId": "gcse.algebra.generating-sequences",
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "text",
    "tags": ["sequences", "position-to-term", "term-to-term", "reasoning"],
    "questionText": "Sequence A is generated by the position-to-term rule $3n + 1$. Sequence B has first term $4$ and the term-to-term rule \u201cadd $3$\u201d. Show that the two sequences are the same.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Generate sequence A.", "workingLatex": "4, 7, 10, 13", "explanation": "Substitute $n = 1, 2, 3, 4$ into $3n + 1$.", "diagram": null },
        { "stepNumber": 2, "description": "Generate sequence B.", "workingLatex": "4, 7, 10, 13", "explanation": "Start at $4$ and add $3$ repeatedly.", "diagram": null },
        { "stepNumber": 3, "description": "Compare.", "workingLatex": "A = B", "explanation": "Both start at $4$ and rise by $3$, so they produce the same terms.", "diagram": null }
      ],
      "finalAnswer": "Both give $4, 7, 10, 13, \\ldots$ — the same sequence."
    }
  },
  {
    "id": "gcse.algebra.generating-sequences.q066",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Generating sequences",
    "subtopicId": "gcse.algebra.generating-sequences",
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "value",
    "tags": ["sequences", "term-to-term", "two-step", "word problem"],
    "questionText": "A population of insects triples each hour, but $2$ insects die at the end of each hour. There are $10$ insects at the start. Using the rule \u201cmultiply by $3$ then subtract $2$\u201d, find the number after $3$ hours.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "After hour $1$.", "workingLatex": "10 \\times 3 - 2 = 28", "explanation": "Triple the $10$ then remove $2$.", "diagram": null },
        { "stepNumber": 2, "description": "After hour $2$.", "workingLatex": "28 \\times 3 - 2 = 82", "explanation": "Apply the rule again.", "diagram": null },
        { "stepNumber": 3, "description": "After hour $3$.", "workingLatex": "82 \\times 3 - 2 = 244", "explanation": "Apply the rule a third time.", "diagram": null }
      ],
      "finalAnswer": "$244$ insects."
    }
  },
  {
    "id": "gcse.algebra.generating-sequences.q067",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Generating sequences",
    "subtopicId": "gcse.algebra.generating-sequences",
    "difficulty": "Hard",
    "marks": 4,
    "answerType": "value",
    "tags": ["sequences", "position-to-term", "cube numbers"],
    "questionText": "The $n$th term of a sequence is $n^3$. Write down the first four terms.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Substitute $n = 1, 2, 3, 4$.", "workingLatex": "1^3, 2^3, 3^3, 4^3", "explanation": "Cube each position number.", "diagram": null },
        { "stepNumber": 2, "description": "Evaluate.", "workingLatex": "1, 8, 27, 64", "explanation": "These are the cube numbers.", "diagram": null }
      ],
      "finalAnswer": "$1, 8, 27, 64$"
    }
  },
  {
    "id": "gcse.algebra.generating-sequences.q068",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Generating sequences",
    "subtopicId": "gcse.algebra.generating-sequences",
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "value",
    "tags": ["sequences", "position-to-term", "quadratic"],
    "questionText": "The $n$th term of a sequence is $(2n - 1)^2$. Write down the first four terms.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Work out $2n - 1$ for each position.", "workingLatex": "1, 3, 5, 7", "explanation": "These are the odd numbers.", "diagram": null },
        { "stepNumber": 2, "description": "Square each.", "workingLatex": "1, 9, 25, 49", "explanation": "Squaring the odd numbers gives the terms.", "diagram": null }
      ],
      "finalAnswer": "$1, 9, 25, 49$"
    }
  },
  {
    "id": "gcse.algebra.generating-sequences.q069",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Generating sequences",
    "subtopicId": "gcse.algebra.generating-sequences",
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "value",
    "tags": ["sequences", "position-to-term", "inequality", "counting"],
    "questionText": "The $n$th term of a sequence is $4n - 1$. How many terms of the sequence are below $50$?",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Set the term below $50$.", "workingLatex": "4n - 1 < 50", "explanation": "We want terms smaller than $50$.", "diagram": null },
        { "stepNumber": 2, "description": "Solve.", "workingLatex": "4n < 51 \\Rightarrow n < 12.75", "explanation": "Add $1$ then divide by $4$.", "diagram": null },
        { "stepNumber": 3, "description": "Count the positions.", "workingLatex": "n = 1, 2, \\ldots, 12", "explanation": "The largest allowed position is $12$ (giving $47$).", "diagram": null }
      ],
      "finalAnswer": "$12$ terms."
    }
  },
  {
    "id": "gcse.algebra.generating-sequences.q070",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Generating sequences",
    "subtopicId": "gcse.algebra.generating-sequences",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "value",
    "tags": ["sequences", "term-to-term", "position-to-term", "common term"],
    "questionText": "Sequence A has first term $2$ and the term-to-term rule \u201cmultiply by $2$\u201d. Sequence B has $n$th term $6n - 2$. Find the first number that appears in both sequences.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Generate sequence A.", "workingLatex": "2, 4, 8, 16, 32, 64", "explanation": "Double each time.", "diagram": null },
        { "stepNumber": 2, "description": "Generate sequence B.", "workingLatex": "4, 10, 16, 22, 28, \\ldots", "explanation": "Substitute $n = 1, 2, 3, \\ldots$ into $6n - 2$.", "diagram": null },
        { "stepNumber": 3, "description": "Find the first common value.", "workingLatex": "4", "explanation": "$4$ appears in both lists before any other shared value.", "diagram": null }
      ],
      "finalAnswer": "$4$"
    }
  }
];
