import { Question } from "@/lib/types";

export const questions: Question[] = [
  {
    "id": "gcse.algebra.special-sequences.q001",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Special sequences",
    "subtopicId": "gcse.algebra.special-sequences",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "value",
    "tags": ["sequences", "square numbers"],
    "questionText": "Here are the first four square numbers: $1, 4, 9, 16$. Write down the next two square numbers.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recognise the pattern.", "workingLatex": "1^2, 2^2, 3^2, 4^2", "explanation": "Square numbers come from squaring $1, 2, 3, 4, \\ldots$", "diagram": null },
        { "stepNumber": 2, "description": "Square the next two whole numbers.", "workingLatex": "5^2 = 25,\\quad 6^2 = 36", "explanation": "The next positions are $5$ and $6$, so we square each.", "diagram": null }
      ],
      "finalAnswer": "$25, 36$"
    }
  },
  {
    "id": "gcse.algebra.special-sequences.q002",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Special sequences",
    "subtopicId": "gcse.algebra.special-sequences",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "value",
    "tags": ["sequences", "cube numbers"],
    "questionText": "The first three cube numbers are $1, 8, 27$. Write down the next cube number.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recognise the pattern.", "workingLatex": "1^3, 2^3, 3^3", "explanation": "Cube numbers come from cubing $1, 2, 3, \\ldots$", "diagram": null },
        { "stepNumber": 2, "description": "Cube the next whole number.", "workingLatex": "4^3 = 64", "explanation": "$4^3 = 4 \\times 4 \\times 4 = 64$.", "diagram": null }
      ],
      "finalAnswer": "$64$"
    }
  },
  {
    "id": "gcse.algebra.special-sequences.q003",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Special sequences",
    "subtopicId": "gcse.algebra.special-sequences",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "value",
    "tags": ["sequences", "triangular numbers"],
    "questionText": "The first four triangular numbers are $1, 3, 6, 10$. Write down the next two triangular numbers.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "See how the gaps grow.", "workingLatex": "+2, +3, +4, \\ldots", "explanation": "Each triangular number adds one more than the previous gap: $+2$, then $+3$, then $+4$.", "diagram": null },
        { "stepNumber": 2, "description": "Add $5$ then $6$.", "workingLatex": "10 + 5 = 15,\\quad 15 + 6 = 21", "explanation": "Continuing the growing gaps gives the next two terms.", "diagram": null }
      ],
      "finalAnswer": "$15, 21$"
    }
  },
  {
    "id": "gcse.algebra.special-sequences.q004",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Special sequences",
    "subtopicId": "gcse.algebra.special-sequences",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "value",
    "tags": ["sequences", "arithmetic"],
    "questionText": "Write down the next two terms of the sequence $5, 8, 11, 14, \\ldots$",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Find the rule.", "workingLatex": "+3", "explanation": "Each term is $3$ more than the one before it.", "diagram": null },
        { "stepNumber": 2, "description": "Add $3$ twice more.", "workingLatex": "14 + 3 = 17,\\quad 17 + 3 = 20", "explanation": "Keep applying the same term-to-term rule.", "diagram": null }
      ],
      "finalAnswer": "$17, 20$"
    }
  },
  {
    "id": "gcse.algebra.special-sequences.q005",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Special sequences",
    "subtopicId": "gcse.algebra.special-sequences",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "value",
    "tags": ["sequences", "geometric"],
    "questionText": "Write down the next two terms of the sequence $3, 6, 12, 24, \\ldots$",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Find the rule.", "workingLatex": "\\times 2", "explanation": "Each term is double the one before, so this is a geometric sequence.", "diagram": null },
        { "stepNumber": 2, "description": "Multiply by $2$ twice more.", "workingLatex": "24 \\times 2 = 48,\\quad 48 \\times 2 = 96", "explanation": "Keep doubling to get the next terms.", "diagram": null }
      ],
      "finalAnswer": "$48, 96$"
    }
  },
  {
    "id": "gcse.algebra.special-sequences.q006",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Special sequences",
    "subtopicId": "gcse.algebra.special-sequences",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "value",
    "tags": ["sequences", "Fibonacci"],
    "questionText": "In a Fibonacci sequence each term is the sum of the two before it. Continue the sequence $1, 1, 2, 3, 5, \\ldots$ by writing the next two terms.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Add the last two terms.", "workingLatex": "3 + 5 = 8", "explanation": "The next term is the sum of the two before it.", "diagram": null },
        { "stepNumber": 2, "description": "Repeat.", "workingLatex": "5 + 8 = 13", "explanation": "Add the newest two terms together again.", "diagram": null }
      ],
      "finalAnswer": "$8, 13$"
    }
  },
  {
    "id": "gcse.algebra.special-sequences.q007",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Special sequences",
    "subtopicId": "gcse.algebra.special-sequences",
    "difficulty": "Easy",
    "marks": 1,
    "answerType": "text",
    "tags": ["sequences", "identify", "square numbers"],
    "questionText": "What type of special sequence is $1, 4, 9, 16, 25$?",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Check for squaring.", "workingLatex": "1^2, 2^2, 3^2, 4^2, 5^2", "explanation": "Each term is a whole number multiplied by itself.", "diagram": null }
      ],
      "finalAnswer": "The square numbers."
    }
  },
  {
    "id": "gcse.algebra.special-sequences.q008",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Special sequences",
    "subtopicId": "gcse.algebra.special-sequences",
    "difficulty": "Easy",
    "marks": 1,
    "answerType": "text",
    "tags": ["sequences", "identify", "triangular numbers"],
    "questionText": "What type of special sequence is $1, 3, 6, 10, 15$?",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Look at the growing gaps.", "workingLatex": "+2, +3, +4, +5", "explanation": "The gaps increase by one each time, which is the signature of triangular numbers.", "diagram": null }
      ],
      "finalAnswer": "The triangular numbers."
    }
  },
  {
    "id": "gcse.algebra.special-sequences.q009",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Special sequences",
    "subtopicId": "gcse.algebra.special-sequences",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "text",
    "tags": ["sequences", "identify", "geometric"],
    "questionText": "Is $2, 4, 8, 16$ an arithmetic or a geometric sequence? State the rule.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Test for a common difference.", "workingLatex": "4 - 2 = 2,\\ 8 - 4 = 4", "explanation": "The gaps are not equal, so it is not arithmetic.", "diagram": null },
        { "stepNumber": 2, "description": "Test for a common ratio.", "workingLatex": "4 \\div 2 = 2,\\ 8 \\div 4 = 2", "explanation": "Each term is $\\times 2$ the previous, so it is geometric.", "diagram": null }
      ],
      "finalAnswer": "Geometric, with rule $\\times 2$."
    }
  },
  {
    "id": "gcse.algebra.special-sequences.q010",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Special sequences",
    "subtopicId": "gcse.algebra.special-sequences",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "value",
    "tags": ["sequences", "arithmetic", "decreasing"],
    "questionText": "Write down the next two terms of the sequence $20, 17, 14, 11, \\ldots$",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Find the rule.", "workingLatex": "-3", "explanation": "Each term is $3$ less than the one before.", "diagram": null },
        { "stepNumber": 2, "description": "Subtract $3$ twice more.", "workingLatex": "11 - 3 = 8,\\quad 8 - 3 = 5", "explanation": "Continue the term-to-term rule.", "diagram": null }
      ],
      "finalAnswer": "$8, 5$"
    }
  },
  {
    "id": "gcse.algebra.special-sequences.q011",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Special sequences",
    "subtopicId": "gcse.algebra.special-sequences",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "value",
    "tags": ["sequences", "even numbers"],
    "questionText": "Write down the next two terms of the sequence $2, 4, 6, 8, \\ldots$",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Find the rule.", "workingLatex": "+2", "explanation": "These are the even numbers, going up in $2$s.", "diagram": null },
        { "stepNumber": 2, "description": "Add $2$ twice more.", "workingLatex": "8 + 2 = 10,\\quad 10 + 2 = 12", "explanation": "Continue the pattern.", "diagram": null }
      ],
      "finalAnswer": "$10, 12$"
    }
  },
  {
    "id": "gcse.algebra.special-sequences.q012",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Special sequences",
    "subtopicId": "gcse.algebra.special-sequences",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "value",
    "tags": ["sequences", "multiples"],
    "questionText": "Write down the next two terms of the sequence $5, 10, 15, 20, \\ldots$",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Find the rule.", "workingLatex": "+5", "explanation": "These are the multiples of $5$.", "diagram": null },
        { "stepNumber": 2, "description": "Add $5$ twice more.", "workingLatex": "20 + 5 = 25,\\quad 25 + 5 = 30", "explanation": "Continue counting in $5$s.", "diagram": null }
      ],
      "finalAnswer": "$25, 30$"
    }
  },
  {
    "id": "gcse.algebra.special-sequences.q013",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Special sequences",
    "subtopicId": "gcse.algebra.special-sequences",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "value",
    "tags": ["sequences", "square numbers"],
    "questionText": "What is the $7$th square number?",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Square the position.", "workingLatex": "7^2", "explanation": "The $n$th square number is $n^2$, so the $7$th is $7^2$.", "diagram": null },
        { "stepNumber": 2, "description": "Work it out.", "workingLatex": "7^2 = 49", "explanation": "$7 \\times 7 = 49$.", "diagram": null }
      ],
      "finalAnswer": "$49$"
    }
  },
  {
    "id": "gcse.algebra.special-sequences.q014",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Special sequences",
    "subtopicId": "gcse.algebra.special-sequences",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "value",
    "tags": ["sequences", "cube numbers"],
    "questionText": "What is the $4$th cube number?",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Cube the position.", "workingLatex": "4^3", "explanation": "The $n$th cube number is $n^3$.", "diagram": null },
        { "stepNumber": 2, "description": "Work it out.", "workingLatex": "4^3 = 64", "explanation": "$4 \\times 4 \\times 4 = 64$.", "diagram": null }
      ],
      "finalAnswer": "$64$"
    }
  },
  {
    "id": "gcse.algebra.special-sequences.q015",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Special sequences",
    "subtopicId": "gcse.algebra.special-sequences",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "value",
    "tags": ["sequences", "triangular numbers"],
    "questionText": "The triangular numbers are $1, 3, 6, 10, 15, \\ldots$ What is the $6$th triangular number?",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Find the gap to the next term.", "workingLatex": "+6", "explanation": "Gaps go $+2, +3, +4, +5$, so the gap after the $5$th term is $+6$.", "diagram": null },
        { "stepNumber": 2, "description": "Add it on.", "workingLatex": "15 + 6 = 21", "explanation": "The $6$th triangular number is $21$.", "diagram": null }
      ],
      "finalAnswer": "$21$"
    }
  },
  {
    "id": "gcse.algebra.special-sequences.q016",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Special sequences",
    "subtopicId": "gcse.algebra.special-sequences",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "value",
    "tags": ["sequences", "geometric"],
    "questionText": "Write down the next two terms of the sequence $1, 3, 9, 27, \\ldots$",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Find the rule.", "workingLatex": "\\times 3", "explanation": "Each term is $3$ times the previous one.", "diagram": null },
        { "stepNumber": 2, "description": "Multiply by $3$ twice more.", "workingLatex": "27 \\times 3 = 81,\\quad 81 \\times 3 = 243", "explanation": "Continue multiplying by $3$.", "diagram": null }
      ],
      "finalAnswer": "$81, 243$"
    }
  },
  {
    "id": "gcse.algebra.special-sequences.q017",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Special sequences",
    "subtopicId": "gcse.algebra.special-sequences",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "value",
    "tags": ["sequences", "Fibonacci"],
    "questionText": "Each term is the sum of the previous two terms: $2, 2, 4, 6, 10, \\ldots$ Write down the next term.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Add the last two terms.", "workingLatex": "6 + 10 = 16", "explanation": "The next term is the sum of the two before it.", "diagram": null }
      ],
      "finalAnswer": "$16$"
    }
  },
  {
    "id": "gcse.algebra.special-sequences.q018",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Special sequences",
    "subtopicId": "gcse.algebra.special-sequences",
    "difficulty": "Easy",
    "marks": 1,
    "answerType": "text",
    "tags": ["sequences", "identify", "cube numbers"],
    "questionText": "What type of special sequence is $1, 8, 27, 64$?",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Check for cubing.", "workingLatex": "1^3, 2^3, 3^3, 4^3", "explanation": "Each term is a whole number cubed.", "diagram": null }
      ],
      "finalAnswer": "The cube numbers."
    }
  },
  {
    "id": "gcse.algebra.special-sequences.q019",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Special sequences",
    "subtopicId": "gcse.algebra.special-sequences",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "value",
    "tags": ["sequences", "arithmetic"],
    "questionText": "Write down the next two terms of the sequence $1, 5, 9, 13, \\ldots$",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Find the rule.", "workingLatex": "+4", "explanation": "Each term is $4$ more than the one before.", "diagram": null },
        { "stepNumber": 2, "description": "Add $4$ twice more.", "workingLatex": "13 + 4 = 17,\\quad 17 + 4 = 21", "explanation": "Continue the pattern.", "diagram": null }
      ],
      "finalAnswer": "$17, 21$"
    }
  },
  {
    "id": "gcse.algebra.special-sequences.q020",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Special sequences",
    "subtopicId": "gcse.algebra.special-sequences",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "value",
    "tags": ["sequences", "square numbers"],
    "questionText": "Write down the first five square numbers.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Square $1$ to $5$.", "workingLatex": "1^2, 2^2, 3^2, 4^2, 5^2", "explanation": "The square numbers are the positions squared.", "diagram": null },
        { "stepNumber": 2, "description": "Evaluate.", "workingLatex": "1, 4, 9, 16, 25", "explanation": "Each is a whole number times itself.", "diagram": null }
      ],
      "finalAnswer": "$1, 4, 9, 16, 25$"
    }
  },
  {
    "id": "gcse.algebra.special-sequences.q021",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Special sequences",
    "subtopicId": "gcse.algebra.special-sequences",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "value",
    "tags": ["sequences", "geometric"],
    "questionText": "Write down the next term of the sequence $2, 10, 50, \\ldots$",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Find the rule.", "workingLatex": "\\times 5", "explanation": "$10 \\div 2 = 5$ and $50 \\div 10 = 5$, so each term is $\\times 5$.", "diagram": null },
        { "stepNumber": 2, "description": "Multiply by $5$.", "workingLatex": "50 \\times 5 = 250", "explanation": "The next term is $250$.", "diagram": null }
      ],
      "finalAnswer": "$250$"
    }
  },
  {
    "id": "gcse.algebra.special-sequences.q022",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Special sequences",
    "subtopicId": "gcse.algebra.special-sequences",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "value",
    "tags": ["sequences", "geometric", "decreasing"],
    "questionText": "Write down the next two terms of the sequence $80, 40, 20, \\ldots$",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Find the rule.", "workingLatex": "\\div 2", "explanation": "Each term is half of the one before.", "diagram": null },
        { "stepNumber": 2, "description": "Halve twice more.", "workingLatex": "20 \\div 2 = 10,\\quad 10 \\div 2 = 5", "explanation": "Continue halving.", "diagram": null }
      ],
      "finalAnswer": "$10, 5$"
    }
  },
  {
    "id": "gcse.algebra.special-sequences.q023",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Special sequences",
    "subtopicId": "gcse.algebra.special-sequences",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "value",
    "tags": ["sequences", "multiples"],
    "questionText": "Write down the next two terms of the sequence $3, 6, 9, 12, \\ldots$",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Find the rule.", "workingLatex": "+3", "explanation": "These are the multiples of $3$.", "diagram": null },
        { "stepNumber": 2, "description": "Add $3$ twice more.", "workingLatex": "12 + 3 = 15,\\quad 15 + 3 = 18", "explanation": "Continue counting in $3$s.", "diagram": null }
      ],
      "finalAnswer": "$15, 18$"
    }
  },
  {
    "id": "gcse.algebra.special-sequences.q024",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Special sequences",
    "subtopicId": "gcse.algebra.special-sequences",
    "difficulty": "Easy",
    "marks": 1,
    "answerType": "text",
    "tags": ["sequences", "identify", "Fibonacci"],
    "questionText": "What is the special name for the sequence $1, 1, 2, 3, 5, 8$?",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Check the rule.", "workingLatex": "1 + 1 = 2,\\ 1 + 2 = 3,\\ 2 + 3 = 5", "explanation": "Each term is the sum of the two before it.", "diagram": null }
      ],
      "finalAnswer": "The Fibonacci sequence."
    }
  },
  {
    "id": "gcse.algebra.special-sequences.q025",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Special sequences",
    "subtopicId": "gcse.algebra.special-sequences",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "value",
    "tags": ["sequences", "triangular numbers"],
    "questionText": "Triangular numbers increase by $1, 2, 3, 4, \\ldots$ each time. Starting $1, 3, 6$, find the next term.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Find the next gap.", "workingLatex": "+4", "explanation": "Gaps go $+2$ then $+3$, so the next gap is $+4$.", "diagram": null },
        { "stepNumber": 2, "description": "Add it on.", "workingLatex": "6 + 4 = 10", "explanation": "The next triangular number is $10$.", "diagram": null }
      ],
      "finalAnswer": "$10$"
    }
  },
  {
    "id": "gcse.algebra.special-sequences.q026",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Special sequences",
    "subtopicId": "gcse.algebra.special-sequences",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "value",
    "tags": ["sequences", "square numbers"],
    "questionText": "What is the $10$th square number?",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Square the position.", "workingLatex": "10^2", "explanation": "The $n$th square number is $n^2$.", "diagram": null },
        { "stepNumber": 2, "description": "Work it out.", "workingLatex": "10^2 = 100", "explanation": "$10 \\times 10 = 100$.", "diagram": null }
      ],
      "finalAnswer": "$100$"
    }
  },
  {
    "id": "gcse.algebra.special-sequences.q027",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Special sequences",
    "subtopicId": "gcse.algebra.special-sequences",
    "difficulty": "Intermediate",
    "marks": 2,
    "answerType": "value",
    "tags": ["sequences", "square numbers"],
    "questionText": "Find the $12$th square number.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Square the position.", "workingLatex": "12^2", "explanation": "The $n$th square number is $n^2$.", "diagram": null },
        { "stepNumber": 2, "description": "Work it out.", "workingLatex": "12^2 = 144", "explanation": "$12 \\times 12 = 144$.", "diagram": null }
      ],
      "finalAnswer": "$144$"
    }
  },
  {
    "id": "gcse.algebra.special-sequences.q028",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Special sequences",
    "subtopicId": "gcse.algebra.special-sequences",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "text",
    "tags": ["sequences", "triangular numbers", "reasoning"],
    "questionText": "Show that $36$ is a triangular number.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall the triangular numbers.", "workingLatex": "1, 3, 6, 10, 15, 21, 28, 36", "explanation": "List them by adding growing gaps: $+2, +3, +4, \\ldots$", "diagram": null },
        { "stepNumber": 2, "description": "Locate $36$.", "workingLatex": "1+2+3+4+5+6+7+8 = 36", "explanation": "$36$ is the sum of the first $8$ whole numbers, so it is the $8$th triangular number.", "diagram": null }
      ],
      "finalAnswer": "$36$ is the $8$th triangular number ($1+2+\\cdots+8 = 36$)."
    }
  },
  {
    "id": "gcse.algebra.special-sequences.q029",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Special sequences",
    "subtopicId": "gcse.algebra.special-sequences",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "value",
    "tags": ["sequences", "geometric", "missing term"],
    "questionText": "Find the missing term in the geometric sequence $4, 12, \\underline{\\hspace{6mm}}, 108$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Find the common ratio.", "workingLatex": "12 \\div 4 = 3", "explanation": "Each term is $3$ times the one before.", "diagram": null },
        { "stepNumber": 2, "description": "Apply it.", "workingLatex": "12 \\times 3 = 36", "explanation": "Check: $36 \\times 3 = 108$, which matches the given term.", "diagram": null }
      ],
      "finalAnswer": "$36$"
    }
  },
  {
    "id": "gcse.algebra.special-sequences.q030",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Special sequences",
    "subtopicId": "gcse.algebra.special-sequences",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "value",
    "tags": ["sequences", "arithmetic", "missing term"],
    "questionText": "Find the two missing terms in the arithmetic sequence $7, \\underline{\\hspace{6mm}}, \\underline{\\hspace{6mm}}, 22$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Find the total change.", "workingLatex": "22 - 7 = 15", "explanation": "The sequence rises by $15$ over three equal steps.", "diagram": null },
        { "stepNumber": 2, "description": "Find one step.", "workingLatex": "15 \\div 3 = 5", "explanation": "Each common difference is $5$.", "diagram": null },
        { "stepNumber": 3, "description": "Fill in the gaps.", "workingLatex": "7 + 5 = 12,\\quad 12 + 5 = 17", "explanation": "The missing terms are $12$ and $17$.", "diagram": null }
      ],
      "finalAnswer": "$12, 17$"
    }
  },
  {
    "id": "gcse.algebra.special-sequences.q031",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Special sequences",
    "subtopicId": "gcse.algebra.special-sequences",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "value",
    "tags": ["sequences", "Fibonacci", "missing term"],
    "questionText": "In a sequence, each term is the sum of the two before it. The sequence is $\\underline{\\hspace{6mm}}, 5, 8, 13$. Find the first term.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Use the rule on the known terms.", "workingLatex": "\\text{first} + 5 = 8", "explanation": "The third term ($8$) is the sum of the first two.", "diagram": null },
        { "stepNumber": 2, "description": "Solve.", "workingLatex": "\\text{first} = 8 - 5 = 3", "explanation": "Check: $5 + 8 = 13$, which matches the last term.", "diagram": null }
      ],
      "finalAnswer": "$3$"
    }
  },
  {
    "id": "gcse.algebra.special-sequences.q032",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Special sequences",
    "subtopicId": "gcse.algebra.special-sequences",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "value",
    "tags": ["sequences", "quadratic", "second differences"],
    "questionText": "Show that $2, 5, 10, 17$ is a quadratic sequence and find the next term.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Find the first differences.", "workingLatex": "3, 5, 7", "explanation": "$5-2=3$, $10-5=5$, $17-10=7$; these are not constant.", "diagram": null },
        { "stepNumber": 2, "description": "Find the second differences.", "workingLatex": "2, 2", "explanation": "$5-3=2$ and $7-5=2$; a constant second difference means the sequence is quadratic.", "diagram": null },
        { "stepNumber": 3, "description": "Continue the differences.", "workingLatex": "7 + 2 = 9", "explanation": "The next first difference is $9$.", "diagram": null },
        { "stepNumber": 4, "description": "Find the next term.", "workingLatex": "17 + 9 = 26", "explanation": "Add the next first difference to the last term.", "diagram": null }
      ],
      "finalAnswer": "Quadratic (second difference $2$); next term $26$."
    }
  },
  {
    "id": "gcse.algebra.special-sequences.q033",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Special sequences",
    "subtopicId": "gcse.algebra.special-sequences",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "value",
    "tags": ["sequences", "square numbers", "listing"],
    "questionText": "List the square numbers between $30$ and $90$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Find the smallest square above $30$.", "workingLatex": "6^2 = 36", "explanation": "$5^2 = 25$ is too small, so start at $6^2 = 36$.", "diagram": null },
        { "stepNumber": 2, "description": "Continue squaring.", "workingLatex": "7^2=49,\\ 8^2=64,\\ 9^2=81", "explanation": "Keep going while the result stays below $90$.", "diagram": null },
        { "stepNumber": 3, "description": "Stop before $90$.", "workingLatex": "10^2 = 100 > 90", "explanation": "$100$ is too big, so the list ends at $81$.", "diagram": null }
      ],
      "finalAnswer": "$36, 49, 64, 81$"
    }
  },
  {
    "id": "gcse.algebra.special-sequences.q034",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Special sequences",
    "subtopicId": "gcse.algebra.special-sequences",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "text",
    "tags": ["sequences", "square numbers", "reasoning"],
    "questionText": "Is $50$ a square number? Explain your answer.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Find nearby squares.", "workingLatex": "7^2 = 49,\\quad 8^2 = 64", "explanation": "$50$ lies between two consecutive square numbers.", "diagram": null },
        { "stepNumber": 2, "description": "Conclude.", "workingLatex": "49 < 50 < 64", "explanation": "There is no whole number whose square is $50$, so it is not a square number.", "diagram": null }
      ],
      "finalAnswer": "No — $50$ lies between $7^2 = 49$ and $8^2 = 64$."
    }
  },
  {
    "id": "gcse.algebra.special-sequences.q035",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Special sequences",
    "subtopicId": "gcse.algebra.special-sequences",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "value",
    "tags": ["sequences", "geometric", "common ratio"],
    "questionText": "A geometric sequence is $5, 15, 45, \\ldots$ Find the common ratio and the next term.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Find the common ratio.", "workingLatex": "15 \\div 5 = 3", "explanation": "Dividing a term by the previous one gives the ratio.", "diagram": null },
        { "stepNumber": 2, "description": "Find the next term.", "workingLatex": "45 \\times 3 = 135", "explanation": "Multiply the last term by the ratio.", "diagram": null }
      ],
      "finalAnswer": "Ratio $3$; next term $135$."
    }
  },
  {
    "id": "gcse.algebra.special-sequences.q036",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Special sequences",
    "subtopicId": "gcse.algebra.special-sequences",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "value",
    "tags": ["sequences", "triangular numbers", "formula"],
    "questionText": "The $n$th triangular number is $\\dfrac{n(n+1)}{2}$. Find the $10$th triangular number.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Substitute $n = 10$.", "workingLatex": "\\dfrac{10 \\times 11}{2}", "explanation": "Put $n = 10$ into the formula.", "diagram": null },
        { "stepNumber": 2, "description": "Evaluate.", "workingLatex": "\\dfrac{110}{2} = 55", "explanation": "The $10$th triangular number is $55$.", "diagram": null }
      ],
      "finalAnswer": "$55$"
    }
  },
  {
    "id": "gcse.algebra.special-sequences.q037",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Special sequences",
    "subtopicId": "gcse.algebra.special-sequences",
    "difficulty": "Intermediate",
    "marks": 2,
    "answerType": "value",
    "tags": ["sequences", "cube numbers"],
    "questionText": "Find the $6$th cube number.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Cube the position.", "workingLatex": "6^3", "explanation": "The $n$th cube number is $n^3$.", "diagram": null },
        { "stepNumber": 2, "description": "Work it out.", "workingLatex": "6^3 = 216", "explanation": "$6 \\times 6 \\times 6 = 216$.", "diagram": null }
      ],
      "finalAnswer": "$216$"
    }
  },
  {
    "id": "gcse.algebra.special-sequences.q038",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Special sequences",
    "subtopicId": "gcse.algebra.special-sequences",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "value",
    "tags": ["sequences", "triangular numbers", "square numbers"],
    "questionText": "Add the $3$rd and $4$th triangular numbers. What special number do you get?",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Identify the terms.", "workingLatex": "T_3 = 6,\\quad T_4 = 10", "explanation": "The triangular numbers are $1, 3, 6, 10, \\ldots$", "diagram": null },
        { "stepNumber": 2, "description": "Add them.", "workingLatex": "6 + 10 = 16", "explanation": "The total is $16$.", "diagram": null },
        { "stepNumber": 3, "description": "Recognise the result.", "workingLatex": "16 = 4^2", "explanation": "Two consecutive triangular numbers always add to a square number.", "diagram": null }
      ],
      "finalAnswer": "$16$, which is the square number $4^2$."
    }
  },
  {
    "id": "gcse.algebra.special-sequences.q039",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Special sequences",
    "subtopicId": "gcse.algebra.special-sequences",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "value",
    "tags": ["sequences", "quadratic", "second differences"],
    "questionText": "A sequence is $2, 5, 10, 17, 26, \\ldots$ Write down the next two terms.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Find the first differences.", "workingLatex": "3, 5, 7, 9", "explanation": "The gaps increase, so use second differences.", "diagram": null },
        { "stepNumber": 2, "description": "Check the second differences.", "workingLatex": "2, 2, 2", "explanation": "Constant second difference of $2$; continue the first differences with $+2$.", "diagram": null },
        { "stepNumber": 3, "description": "Add the next gaps.", "workingLatex": "26 + 11 = 37,\\quad 37 + 13 = 50", "explanation": "The next first differences are $11$ and $13$.", "diagram": null }
      ],
      "finalAnswer": "$37, 50$"
    }
  },
  {
    "id": "gcse.algebra.special-sequences.q040",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Special sequences",
    "subtopicId": "gcse.algebra.special-sequences",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "value",
    "tags": ["sequences", "Fibonacci"],
    "questionText": "A Fibonacci-type sequence starts $4, 7$. Write down the next three terms.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Add the first two.", "workingLatex": "4 + 7 = 11", "explanation": "Each term is the sum of the previous two.", "diagram": null },
        { "stepNumber": 2, "description": "Continue.", "workingLatex": "7 + 11 = 18,\\quad 11 + 18 = 29", "explanation": "Keep adding the latest two terms.", "diagram": null }
      ],
      "finalAnswer": "$11, 18, 29$"
    }
  },
  {
    "id": "gcse.algebra.special-sequences.q041",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Special sequences",
    "subtopicId": "gcse.algebra.special-sequences",
    "difficulty": "Intermediate",
    "marks": 2,
    "answerType": "value",
    "tags": ["sequences", "geometric", "fractions"],
    "questionText": "Write down the next two terms of the sequence $16, 8, 4, \\ldots$",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Find the rule.", "workingLatex": "\\times \\tfrac{1}{2}", "explanation": "Each term is half of the previous one.", "diagram": null },
        { "stepNumber": 2, "description": "Halve twice more.", "workingLatex": "4 \\div 2 = 2,\\quad 2 \\div 2 = 1", "explanation": "Continue halving.", "diagram": null }
      ],
      "finalAnswer": "$2, 1$"
    }
  },
  {
    "id": "gcse.algebra.special-sequences.q042",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Special sequences",
    "subtopicId": "gcse.algebra.special-sequences",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "value",
    "tags": ["sequences", "arithmetic", "decreasing"],
    "questionText": "A sequence is $50, 44, 38, 32, \\ldots$ Find the $6$th term.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Find the rule.", "workingLatex": "-6", "explanation": "Each term is $6$ less than the one before.", "diagram": null },
        { "stepNumber": 2, "description": "Continue to the $6$th term.", "workingLatex": "32 - 6 = 26,\\quad 26 - 6 = 20", "explanation": "The $5$th term is $26$ and the $6$th term is $20$.", "diagram": null }
      ],
      "finalAnswer": "$20$"
    }
  },
  {
    "id": "gcse.algebra.special-sequences.q043",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Special sequences",
    "subtopicId": "gcse.algebra.special-sequences",
    "difficulty": "Intermediate",
    "marks": 2,
    "answerType": "value",
    "tags": ["sequences", "square numbers", "position"],
    "questionText": "Which term of the square numbers is $81$?",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Take the square root.", "workingLatex": "\\sqrt{81} = 9", "explanation": "If $n^2 = 81$ then $n$ is the square root of $81$.", "diagram": null }
      ],
      "finalAnswer": "The $9$th term."
    }
  },
  {
    "id": "gcse.algebra.special-sequences.q044",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Special sequences",
    "subtopicId": "gcse.algebra.special-sequences",
    "difficulty": "Intermediate",
    "marks": 2,
    "answerType": "value",
    "tags": ["sequences", "cube numbers", "position"],
    "questionText": "Which term of the cube numbers is $125$?",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Take the cube root.", "workingLatex": "\\sqrt[3]{125} = 5", "explanation": "If $n^3 = 125$ then $n$ is the cube root of $125$.", "diagram": null }
      ],
      "finalAnswer": "The $5$th term."
    }
  },
  {
    "id": "gcse.algebra.special-sequences.q045",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Special sequences",
    "subtopicId": "gcse.algebra.special-sequences",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "value",
    "tags": ["sequences", "square numbers", "reasoning"],
    "questionText": "Write down the square numbers up to $100$ that are also even.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "List the square numbers.", "workingLatex": "1,4,9,16,25,36,49,64,81,100", "explanation": "These are $1^2$ up to $10^2$.", "diagram": null },
        { "stepNumber": 2, "description": "Keep the even ones.", "workingLatex": "4, 16, 36, 64, 100", "explanation": "A square is even exactly when the number being squared is even.", "diagram": null }
      ],
      "finalAnswer": "$4, 16, 36, 64, 100$"
    }
  },
  {
    "id": "gcse.algebra.special-sequences.q046",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Special sequences",
    "subtopicId": "gcse.algebra.special-sequences",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "value",
    "tags": ["sequences", "Fibonacci", "missing term"],
    "questionText": "In a sequence, each term is the sum of the two before it: $3, \\underline{\\hspace{6mm}}, 11, \\underline{\\hspace{6mm}}$. Find the two missing terms.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Use the third term.", "workingLatex": "3 + b = 11 \\Rightarrow b = 8", "explanation": "The third term is the sum of the first two, so the second term is $8$.", "diagram": null },
        { "stepNumber": 2, "description": "Find the fourth term.", "workingLatex": "8 + 11 = 19", "explanation": "Add the second and third terms to get the fourth.", "diagram": null }
      ],
      "finalAnswer": "$8$ and $19$"
    }
  },
  {
    "id": "gcse.algebra.special-sequences.q047",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Special sequences",
    "subtopicId": "gcse.algebra.special-sequences",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "value",
    "tags": ["sequences", "geometric"],
    "questionText": "A geometric sequence is $2, 6, 18, \\ldots$ Find the $5$th term.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Find the ratio.", "workingLatex": "6 \\div 2 = 3", "explanation": "Each term is $\\times 3$ the previous.", "diagram": null },
        { "stepNumber": 2, "description": "Continue to the $5$th term.", "workingLatex": "18 \\times 3 = 54,\\quad 54 \\times 3 = 162", "explanation": "The $4$th term is $54$ and the $5$th is $162$.", "diagram": null }
      ],
      "finalAnswer": "$162$"
    }
  },
  {
    "id": "gcse.algebra.special-sequences.q048",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Special sequences",
    "subtopicId": "gcse.algebra.special-sequences",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "text",
    "tags": ["sequences", "triangular numbers", "reasoning"],
    "questionText": "Is $28$ a triangular number? If so, state which term it is.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "List the triangular numbers.", "workingLatex": "1, 3, 6, 10, 15, 21, 28", "explanation": "Add the growing gaps until reaching $28$.", "diagram": null },
        { "stepNumber": 2, "description": "Confirm.", "workingLatex": "1+2+3+4+5+6+7 = 28", "explanation": "$28$ is the sum of the first $7$ whole numbers.", "diagram": null }
      ],
      "finalAnswer": "Yes — $28$ is the $7$th triangular number."
    }
  },
  {
    "id": "gcse.algebra.special-sequences.q049",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Special sequences",
    "subtopicId": "gcse.algebra.special-sequences",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "value",
    "tags": ["sequences", "square numbers", "odd numbers"],
    "questionText": "The sum of the first few odd numbers gives a special sequence. Find $1 + 3 + 5 + 7$ and say which special number it is.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Add the odd numbers.", "workingLatex": "1 + 3 + 5 + 7 = 16", "explanation": "There are four odd numbers being added.", "diagram": null },
        { "stepNumber": 2, "description": "Recognise the total.", "workingLatex": "16 = 4^2", "explanation": "The sum of the first $n$ odd numbers is always $n^2$.", "diagram": null }
      ],
      "finalAnswer": "$16$, the square number $4^2$."
    }
  },
  {
    "id": "gcse.algebra.special-sequences.q050",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Special sequences",
    "subtopicId": "gcse.algebra.special-sequences",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "value",
    "tags": ["sequences", "quadratic", "second differences"],
    "questionText": "Find the next term of the sequence $3, 6, 11, 18, 27, \\ldots$",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Find the first differences.", "workingLatex": "3, 5, 7, 9", "explanation": "The gaps grow, so check second differences.", "diagram": null },
        { "stepNumber": 2, "description": "Confirm second difference.", "workingLatex": "2, 2, 2", "explanation": "Constant $2$, so the next gap is $9 + 2 = 11$.", "diagram": null },
        { "stepNumber": 3, "description": "Add the next gap.", "workingLatex": "27 + 11 = 38", "explanation": "The next term is $38$.", "diagram": null }
      ],
      "finalAnswer": "$38$"
    }
  },
  {
    "id": "gcse.algebra.special-sequences.q051",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Special sequences",
    "subtopicId": "gcse.algebra.special-sequences",
    "difficulty": "Intermediate",
    "marks": 2,
    "answerType": "value",
    "tags": ["sequences", "geometric"],
    "questionText": "Write down the next two terms of the sequence $7, 70, 700, \\ldots$",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Find the rule.", "workingLatex": "\\times 10", "explanation": "Each term is ten times the one before.", "diagram": null },
        { "stepNumber": 2, "description": "Multiply by $10$ twice more.", "workingLatex": "700 \\times 10 = 7000,\\quad 7000 \\times 10 = 70000", "explanation": "Continue multiplying by $10$.", "diagram": null }
      ],
      "finalAnswer": "$7000, 70000$"
    }
  },
  {
    "id": "gcse.algebra.special-sequences.q052",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Special sequences",
    "subtopicId": "gcse.algebra.special-sequences",
    "difficulty": "Intermediate",
    "marks": 2,
    "answerType": "value",
    "tags": ["sequences", "arithmetic", "negatives"],
    "questionText": "Write down the next two terms of the sequence $8, 5, 2, \\ldots$",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Find the rule.", "workingLatex": "-3", "explanation": "Each term is $3$ less than the one before.", "diagram": null },
        { "stepNumber": 2, "description": "Continue past zero.", "workingLatex": "2 - 3 = -1,\\quad -1 - 3 = -4", "explanation": "The sequence goes negative.", "diagram": null }
      ],
      "finalAnswer": "$-1, -4$"
    }
  },
  {
    "id": "gcse.algebra.special-sequences.q053",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Special sequences",
    "subtopicId": "gcse.algebra.special-sequences",
    "difficulty": "Intermediate",
    "marks": 2,
    "answerType": "value",
    "tags": ["sequences", "powers of 2", "geometric"],
    "questionText": "The sequence $1, 2, 4, 8, 16$ shows the powers of $2$. Write down the next term.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Find the rule.", "workingLatex": "\\times 2", "explanation": "Each term doubles the one before.", "diagram": null },
        { "stepNumber": 2, "description": "Double the last term.", "workingLatex": "16 \\times 2 = 32", "explanation": "$32 = 2^5$.", "diagram": null }
      ],
      "finalAnswer": "$32$"
    }
  },
  {
    "id": "gcse.algebra.special-sequences.q054",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Special sequences",
    "subtopicId": "gcse.algebra.special-sequences",
    "difficulty": "Intermediate",
    "marks": 2,
    "answerType": "value",
    "tags": ["sequences", "triangular numbers", "differences"],
    "questionText": "The triangular numbers are $1, 3, 6, 10, 15, 21$. By how much do the $5$th and $6$th triangular numbers differ?",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Identify the terms.", "workingLatex": "T_5 = 15,\\quad T_6 = 21", "explanation": "Read off the $5$th and $6$th terms.", "diagram": null },
        { "stepNumber": 2, "description": "Subtract.", "workingLatex": "21 - 15 = 6", "explanation": "The gap between the $5$th and $6$th triangular numbers is $6$.", "diagram": null }
      ],
      "finalAnswer": "$6$"
    }
  },
  {
    "id": "gcse.algebra.special-sequences.q055",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Special sequences",
    "subtopicId": "gcse.algebra.special-sequences",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "text",
    "tags": ["sequences", "square numbers", "triangular numbers", "reasoning"],
    "questionText": "Is $100$ a square number, a triangular number, or both? Explain.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Check for a square.", "workingLatex": "10^2 = 100", "explanation": "$100$ is $10$ squared, so it is a square number.", "diagram": null },
        { "stepNumber": 2, "description": "Check for triangular.", "workingLatex": "T_{13} = 91,\\ T_{14} = 105", "explanation": "$100$ lies between two triangular numbers, so it is not triangular.", "diagram": null }
      ],
      "finalAnswer": "Square number only (it is $10^2$, but not triangular)."
    }
  },
  {
    "id": "gcse.algebra.special-sequences.q056",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Special sequences",
    "subtopicId": "gcse.algebra.special-sequences",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "value",
    "tags": ["sequences", "Fibonacci"],
    "questionText": "The Fibonacci sequence is $1, 1, 2, 3, 5, 8, \\ldots$ Find the $8$th term.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Continue the sequence.", "workingLatex": "5 + 8 = 13", "explanation": "The $7$th term is $13$.", "diagram": null },
        { "stepNumber": 2, "description": "Find the $8$th term.", "workingLatex": "8 + 13 = 21", "explanation": "Add the $6$th and $7$th terms.", "diagram": null }
      ],
      "finalAnswer": "$21$"
    }
  },
  {
    "id": "gcse.algebra.special-sequences.q057",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Special sequences",
    "subtopicId": "gcse.algebra.special-sequences",
    "difficulty": "Hard",
    "marks": 4,
    "answerType": "value",
    "tags": ["sequences", "quadratic", "second differences"],
    "questionText": "A sequence has terms $4, 7, 12, 19, 28, \\ldots$ Find the $7$th term.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Find the first differences.", "workingLatex": "3, 5, 7, 9", "explanation": "The gaps increase.", "diagram": null },
        { "stepNumber": 2, "description": "Check the second differences.", "workingLatex": "2, 2, 2", "explanation": "Constant $2$, so continue the first differences with $+2$.", "diagram": null },
        { "stepNumber": 3, "description": "Extend to the $6$th term.", "workingLatex": "28 + 11 = 39", "explanation": "The next gap is $11$.", "diagram": null },
        { "stepNumber": 4, "description": "Extend to the $7$th term.", "workingLatex": "39 + 13 = 52", "explanation": "The gap after that is $13$.", "diagram": null }
      ],
      "finalAnswer": "$52$"
    }
  },
  {
    "id": "gcse.algebra.special-sequences.q058",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Special sequences",
    "subtopicId": "gcse.algebra.special-sequences",
    "difficulty": "Hard",
    "marks": 4,
    "answerType": "value",
    "tags": ["sequences", "geometric", "reasoning"],
    "questionText": "In a geometric sequence the $2$nd term is $12$ and the $3$rd term is $48$. Find the first term and the common ratio.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Find the common ratio.", "workingLatex": "r = 48 \\div 12 = 4", "explanation": "Divide consecutive terms to get the ratio.", "diagram": null },
        { "stepNumber": 2, "description": "Work back to the first term.", "workingLatex": "12 \\div 4 = 3", "explanation": "The first term is the second term divided by the ratio.", "diagram": null }
      ],
      "finalAnswer": "First term $3$, common ratio $4$."
    }
  },
  {
    "id": "gcse.algebra.special-sequences.q059",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Special sequences",
    "subtopicId": "gcse.algebra.special-sequences",
    "difficulty": "Hard",
    "marks": 4,
    "answerType": "value",
    "tags": ["sequences", "triangular numbers", "formula"],
    "questionText": "The $n$th triangular number is $\\dfrac{n(n+1)}{2}$. Which term is equal to $45$?",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Set the formula equal to $45$.", "workingLatex": "\\dfrac{n(n+1)}{2} = 45", "explanation": "We need the position $n$ that gives $45$.", "diagram": null },
        { "stepNumber": 2, "description": "Multiply both sides by $2$.", "workingLatex": "n(n+1) = 90", "explanation": "Clear the fraction.", "diagram": null },
        { "stepNumber": 3, "description": "Find two consecutive numbers with product $90$.", "workingLatex": "9 \\times 10 = 90", "explanation": "So $n = 9$.", "diagram": null }
      ],
      "finalAnswer": "The $9$th term."
    }
  },
  {
    "id": "gcse.algebra.special-sequences.q060",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Special sequences",
    "subtopicId": "gcse.algebra.special-sequences",
    "difficulty": "Hard",
    "marks": 4,
    "answerType": "text",
    "tags": ["sequences", "triangular numbers", "square numbers", "reasoning"],
    "questionText": "Show that the sum of the $5$th and $6$th triangular numbers is a square number.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Identify the terms.", "workingLatex": "T_5 = 15,\\quad T_6 = 21", "explanation": "Read the $5$th and $6$th triangular numbers.", "diagram": null },
        { "stepNumber": 2, "description": "Add them.", "workingLatex": "15 + 21 = 36", "explanation": "The total is $36$.", "diagram": null },
        { "stepNumber": 3, "description": "Recognise the square.", "workingLatex": "36 = 6^2", "explanation": "$36$ is a square number, confirming the pattern.", "diagram": null }
      ],
      "finalAnswer": "$15 + 21 = 36 = 6^2$, a square number."
    }
  },
  {
    "id": "gcse.algebra.special-sequences.q061",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Special sequences",
    "subtopicId": "gcse.algebra.special-sequences",
    "difficulty": "Hard",
    "marks": 4,
    "answerType": "value",
    "tags": ["sequences", "Fibonacci", "reasoning"],
    "questionText": "A Fibonacci-type sequence has $7$th term $29$ and $8$th term $47$. Find the $6$th term.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Use the rule on the known terms.", "workingLatex": "T_6 + T_7 = T_8", "explanation": "Each term is the sum of the two before it.", "diagram": null },
        { "stepNumber": 2, "description": "Substitute.", "workingLatex": "T_6 + 29 = 47", "explanation": "Put in the known values.", "diagram": null },
        { "stepNumber": 3, "description": "Solve.", "workingLatex": "T_6 = 47 - 29 = 18", "explanation": "Rearrange to find the $6$th term.", "diagram": null }
      ],
      "finalAnswer": "$18$"
    }
  },
  {
    "id": "gcse.algebra.special-sequences.q062",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Special sequences",
    "subtopicId": "gcse.algebra.special-sequences",
    "difficulty": "Hard",
    "marks": 4,
    "answerType": "value",
    "tags": ["sequences", "geometric", "fractions"],
    "questionText": "A geometric sequence is $27, 18, 12, \\ldots$ Find the common ratio and the next term.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Find the common ratio.", "workingLatex": "18 \\div 27 = \\dfrac{2}{3}", "explanation": "Divide consecutive terms and simplify.", "diagram": null },
        { "stepNumber": 2, "description": "Check it.", "workingLatex": "18 \\times \\dfrac{2}{3} = 12", "explanation": "The ratio is consistent.", "diagram": null },
        { "stepNumber": 3, "description": "Find the next term.", "workingLatex": "12 \\times \\dfrac{2}{3} = 8", "explanation": "Multiply the last term by $\\tfrac{2}{3}$.", "diagram": null }
      ],
      "finalAnswer": "Ratio $\\tfrac{2}{3}$; next term $8$."
    }
  },
  {
    "id": "gcse.algebra.special-sequences.q063",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Special sequences",
    "subtopicId": "gcse.algebra.special-sequences",
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "value",
    "tags": ["sequences", "arithmetic", "patterns", "word problem"],
    "questionText": "Patterns are made from matchsticks. Pattern $1$ uses $4$, pattern $2$ uses $7$ and pattern $3$ uses $10$. Predict how many matchsticks pattern $5$ uses, and state the type of sequence.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Find the rule.", "workingLatex": "+3", "explanation": "Each pattern uses $3$ more matchsticks than the last.", "diagram": null },
        { "stepNumber": 2, "description": "Extend to pattern $5$.", "workingLatex": "10 + 3 = 13,\\quad 13 + 3 = 16", "explanation": "Pattern $4$ uses $13$ and pattern $5$ uses $16$.", "diagram": null },
        { "stepNumber": 3, "description": "Name the sequence.", "workingLatex": "\\text{arithmetic (linear)}", "explanation": "A constant increase of $3$ makes it an arithmetic sequence.", "diagram": null }
      ],
      "finalAnswer": "$16$ matchsticks; an arithmetic (linear) sequence."
    }
  },
  {
    "id": "gcse.algebra.special-sequences.q064",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Special sequences",
    "subtopicId": "gcse.algebra.special-sequences",
    "difficulty": "Hard",
    "marks": 4,
    "answerType": "value",
    "tags": ["sequences", "square numbers", "counting"],
    "questionText": "How many square numbers are there between $1$ and $200$ inclusive?",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Find the largest square not over $200$.", "workingLatex": "14^2 = 196,\\quad 15^2 = 225", "explanation": "$196$ is within range but $225$ is too big.", "diagram": null },
        { "stepNumber": 2, "description": "Count the squares.", "workingLatex": "1^2, 2^2, \\ldots, 14^2", "explanation": "The squares run from $1^2$ up to $14^2$.", "diagram": null }
      ],
      "finalAnswer": "$14$ square numbers."
    }
  },
  {
    "id": "gcse.algebra.special-sequences.q065",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Special sequences",
    "subtopicId": "gcse.algebra.special-sequences",
    "difficulty": "Hard",
    "marks": 4,
    "answerType": "value",
    "tags": ["sequences", "square numbers", "cube numbers", "reasoning"],
    "questionText": "Find a number between $1$ and $100$ (other than $1$) that is both a square number and a cube number.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "List cube numbers up to $100$.", "workingLatex": "8, 27, 64", "explanation": "These are $2^3, 3^3, 4^3$.", "diagram": null },
        { "stepNumber": 2, "description": "Check which are also squares.", "workingLatex": "64 = 8^2", "explanation": "$64$ is $8$ squared, and also $4^3$.", "diagram": null }
      ],
      "finalAnswer": "$64$ (it is $8^2$ and $4^3$)."
    }
  },
  {
    "id": "gcse.algebra.special-sequences.q066",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Special sequences",
    "subtopicId": "gcse.algebra.special-sequences",
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "value",
    "tags": ["sequences", "triangular numbers", "word problem"],
    "questionText": "Cans are stacked so each row has one more can than the row above: $1, 2, 3, \\ldots$ A stack has $10$ rows. How many cans are used in total?",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recognise the total.", "workingLatex": "1 + 2 + 3 + \\cdots + 10", "explanation": "The total number of cans is the $10$th triangular number.", "diagram": null },
        { "stepNumber": 2, "description": "Use the triangular formula.", "workingLatex": "\\dfrac{10 \\times 11}{2}", "explanation": "Apply $\\tfrac{n(n+1)}{2}$ with $n = 10$.", "diagram": null },
        { "stepNumber": 3, "description": "Evaluate.", "workingLatex": "\\dfrac{110}{2} = 55", "explanation": "So $55$ cans are needed.", "diagram": null }
      ],
      "finalAnswer": "$55$ cans."
    }
  },
  {
    "id": "gcse.algebra.special-sequences.q067",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Special sequences",
    "subtopicId": "gcse.algebra.special-sequences",
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "value",
    "tags": ["sequences", "geometric", "word problem"],
    "questionText": "A colony of bacteria doubles every hour. It starts with $5$ bacteria. Write down the number of bacteria after each of the first $4$ hours, and state the type of sequence.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Double for the first two hours.", "workingLatex": "5 \\to 10 \\to 20", "explanation": "After $1$ hour there are $10$; after $2$ hours, $20$.", "diagram": null },
        { "stepNumber": 2, "description": "Double for the next two hours.", "workingLatex": "20 \\to 40 \\to 80", "explanation": "After $3$ hours there are $40$; after $4$ hours, $80$.", "diagram": null },
        { "stepNumber": 3, "description": "Name the sequence.", "workingLatex": "\\times 2", "explanation": "A constant multiplier makes it a geometric sequence.", "diagram": null }
      ],
      "finalAnswer": "$10, 20, 40, 80$ — a geometric sequence (ratio $2$)."
    }
  },
  {
    "id": "gcse.algebra.special-sequences.q068",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Special sequences",
    "subtopicId": "gcse.algebra.special-sequences",
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "value",
    "tags": ["sequences", "quadratic", "second differences", "missing term"],
    "questionText": "A quadratic sequence has terms $1, \\underline{\\hspace{6mm}}, 13, 22$, and the second differences are constant. Find the missing term.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Write the known first difference.", "workingLatex": "22 - 13 = 9", "explanation": "The gap between the $3$rd and $4$th terms is $9$.", "diagram": null },
        { "stepNumber": 2, "description": "Let the second term be $t$.", "workingLatex": "(t - 1),\\ (13 - t),\\ 9", "explanation": "These are the three first differences in order.", "diagram": null },
        { "stepNumber": 3, "description": "Set the second differences equal.", "workingLatex": "(13 - t) - (t - 1) = 9 - (13 - t)", "explanation": "A quadratic has constant second differences.", "diagram": null },
        { "stepNumber": 4, "description": "Solve.", "workingLatex": "14 - 2t = t - 4 \\Rightarrow t = 6", "explanation": "Check: differences become $5, 7, 9$ with second difference $2$.", "diagram": null }
      ],
      "finalAnswer": "$6$"
    }
  },
  {
    "id": "gcse.algebra.special-sequences.q069",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Special sequences",
    "subtopicId": "gcse.algebra.special-sequences",
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "value",
    "tags": ["sequences", "Fibonacci", "reasoning"],
    "questionText": "A Fibonacci-type sequence has $3$rd term $10$ and $4$th term $16$. Find the first two terms.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Use the rule for the $4$th term.", "workingLatex": "T_2 + T_3 = T_4", "explanation": "Each term is the sum of the two before it.", "diagram": null },
        { "stepNumber": 2, "description": "Find the second term.", "workingLatex": "T_2 + 10 = 16 \\Rightarrow T_2 = 6", "explanation": "Subtract to isolate the $2$nd term.", "diagram": null },
        { "stepNumber": 3, "description": "Find the first term.", "workingLatex": "T_1 + T_2 = T_3 \\Rightarrow T_1 = 10 - 6 = 4", "explanation": "The $3$rd term is the sum of the first two.", "diagram": null }
      ],
      "finalAnswer": "$4$ and $6$"
    }
  },
  {
    "id": "gcse.algebra.special-sequences.q070",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Special sequences",
    "subtopicId": "gcse.algebra.special-sequences",
    "difficulty": "Hard",
    "marks": 4,
    "answerType": "value",
    "tags": ["sequences", "square numbers", "reasoning"],
    "questionText": "Find the first square number that is greater than $150$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Test squares near $150$.", "workingLatex": "12^2 = 144", "explanation": "$144$ is still below $150$.", "diagram": null },
        { "stepNumber": 2, "description": "Try the next one.", "workingLatex": "13^2 = 169", "explanation": "$169$ is the first square above $150$.", "diagram": null }
      ],
      "finalAnswer": "$169$ (the $13$th square number)."
    }
  }
];
