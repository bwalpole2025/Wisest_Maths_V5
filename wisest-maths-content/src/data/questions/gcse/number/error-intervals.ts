import { Question } from "@/lib/types";

export const questions: Question[] = [
  {
    "id": "gcse.number.error-intervals.q001",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Error intervals",
    "subtopicId": "gcse.number.error-intervals",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "inequality",
    "tags": ["error intervals", "nearest 10", "bounds"],
    "questionText": "A number $x$ has been rounded to the nearest $10$ to give $50$. Write down the error interval for $x$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "State the rounding.", "workingLatex": "x \\to 50 \\text{ (nearest 10)}", "explanation": "The true value $x$ was rounded to the nearest ten to give $50$.", "diagram": null },
        { "stepNumber": 2, "description": "Find half of the rounding unit.", "workingLatex": "\\dfrac{10}{2} = 5", "explanation": "The interval reaches half a unit either side, and half of ten is five.", "diagram": null },
        { "stepNumber": 3, "description": "Work out the lower bound.", "workingLatex": "50 - 5 = 45", "explanation": "The smallest value that still rounds to $50$ is five below.", "diagram": null },
        { "stepNumber": 4, "description": "Work out the upper bound.", "workingLatex": "50 + 5 = 55", "explanation": "Anything from five above would round to $60$ instead.", "diagram": null },
        { "stepNumber": 5, "description": "Choose the correct inequality signs.", "workingLatex": "45 \\leq x < 55", "explanation": "The lower bound is included ($\\leq$) but the upper bound is not ($<$), since $55$ rounds up to $60$.", "diagram": null },
        { "stepNumber": 6, "description": "State the error interval.", "workingLatex": "45 \\leq x < 55", "explanation": "So the error interval is $45 \\leq x < 55$.", "diagram": null }
      ],
      "finalAnswer": "$45 \\leq x < 55$"
    }
  },
  {
    "id": "gcse.number.error-intervals.q002",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Error intervals",
    "subtopicId": "gcse.number.error-intervals",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "inequality",
    "tags": ["error intervals", "nearest 10", "bounds"],
    "questionText": "A number $y$ has been rounded to the nearest $10$ to give $80$. Write down the error interval for $y$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "State the rounding.", "workingLatex": "y \\to 80 \\text{ (nearest 10)}", "explanation": "The true value $y$ was rounded to the nearest ten to give $80$.", "diagram": null },
        { "stepNumber": 2, "description": "Find half of the rounding unit.", "workingLatex": "\\dfrac{10}{2} = 5", "explanation": "The interval reaches five either side.", "diagram": null },
        { "stepNumber": 3, "description": "Work out the lower bound.", "workingLatex": "80 - 5 = 75", "explanation": "The smallest value that rounds to $80$ is $75$.", "diagram": null },
        { "stepNumber": 4, "description": "Work out the upper bound.", "workingLatex": "80 + 5 = 85", "explanation": "At $85$ the number would round up to $90$.", "diagram": null },
        { "stepNumber": 5, "description": "Choose the inequality signs.", "workingLatex": "75 \\leq y < 85", "explanation": "The lower bound is included and the upper bound is not.", "diagram": null },
        { "stepNumber": 6, "description": "State the error interval.", "workingLatex": "75 \\leq y < 85", "explanation": "So the error interval is $75 \\leq y < 85$.", "diagram": null }
      ],
      "finalAnswer": "$75 \\leq y < 85$"
    }
  },
  {
    "id": "gcse.number.error-intervals.q003",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Error intervals",
    "subtopicId": "gcse.number.error-intervals",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "inequality",
    "tags": ["error intervals", "nearest whole number", "bounds"],
    "questionText": "A length $L$ has been rounded to the nearest whole number to give $7\\text{ cm}$. Write down the error interval for $L$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "State the rounding.", "workingLatex": "L \\to 7 \\text{ (nearest whole)}", "explanation": "The length was rounded to the nearest whole centimetre to give $7$.", "diagram": null },
        { "stepNumber": 2, "description": "Find half of the rounding unit.", "workingLatex": "\\dfrac{1}{2} = 0.5", "explanation": "For the nearest whole number the interval reaches half a unit either side.", "diagram": null },
        { "stepNumber": 3, "description": "Work out the lower bound.", "workingLatex": "7 - 0.5 = 6.5", "explanation": "The smallest length that rounds to $7$ is $6.5$.", "diagram": null },
        { "stepNumber": 4, "description": "Work out the upper bound.", "workingLatex": "7 + 0.5 = 7.5", "explanation": "At $7.5$ the length would round up to $8$.", "diagram": null },
        { "stepNumber": 5, "description": "Choose the inequality signs.", "workingLatex": "6.5 \\leq L < 7.5", "explanation": "The lower bound is included and the upper bound is not.", "diagram": null },
        { "stepNumber": 6, "description": "State the error interval.", "workingLatex": "6.5 \\leq L < 7.5", "explanation": "So the error interval is $6.5 \\leq L < 7.5$.", "diagram": null }
      ],
      "finalAnswer": "$6.5 \\leq L < 7.5$"
    }
  },
  {
    "id": "gcse.number.error-intervals.q004",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Error intervals",
    "subtopicId": "gcse.number.error-intervals",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "inequality",
    "tags": ["error intervals", "nearest whole number", "bounds"],
    "questionText": "A number $n$ has been rounded to the nearest whole number to give $12$. Write down the error interval for $n$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "State the rounding.", "workingLatex": "n \\to 12 \\text{ (nearest whole)}", "explanation": "The value was rounded to the nearest whole number to give $12$.", "diagram": null },
        { "stepNumber": 2, "description": "Find half of the rounding unit.", "workingLatex": "\\dfrac{1}{2} = 0.5", "explanation": "The interval reaches half a unit either side.", "diagram": null },
        { "stepNumber": 3, "description": "Work out the lower bound.", "workingLatex": "12 - 0.5 = 11.5", "explanation": "The smallest value that rounds to $12$ is $11.5$.", "diagram": null },
        { "stepNumber": 4, "description": "Work out the upper bound.", "workingLatex": "12 + 0.5 = 12.5", "explanation": "At $12.5$ the value would round up to $13$.", "diagram": null },
        { "stepNumber": 5, "description": "Choose the inequality signs.", "workingLatex": "11.5 \\leq n < 12.5", "explanation": "The lower bound is included and the upper bound is not.", "diagram": null },
        { "stepNumber": 6, "description": "State the error interval.", "workingLatex": "11.5 \\leq n < 12.5", "explanation": "So the error interval is $11.5 \\leq n < 12.5$.", "diagram": null }
      ],
      "finalAnswer": "$11.5 \\leq n < 12.5$"
    }
  },
  {
    "id": "gcse.number.error-intervals.q005",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Error intervals",
    "subtopicId": "gcse.number.error-intervals",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "inequality",
    "tags": ["error intervals", "1 decimal place", "bounds"],
    "questionText": "A number $x$ has been rounded to $1$ decimal place to give $4.3$. Write down the error interval for $x$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "State the rounding.", "workingLatex": "x \\to 4.3 \\text{ (1 dp)}", "explanation": "The value was rounded to one decimal place to give $4.3$.", "diagram": null },
        { "stepNumber": 2, "description": "Find the rounding unit.", "workingLatex": "1\\text{ dp} \\Rightarrow 0.1", "explanation": "One decimal place means the values are spaced by $0.1$.", "diagram": null },
        { "stepNumber": 3, "description": "Find half of the unit.", "workingLatex": "\\dfrac{0.1}{2} = 0.05", "explanation": "The interval reaches half of $0.1$, which is $0.05$, either side.", "diagram": null },
        { "stepNumber": 4, "description": "Work out the lower bound.", "workingLatex": "4.3 - 0.05 = 4.25", "explanation": "The smallest value that rounds to $4.3$ is $4.25$.", "diagram": null },
        { "stepNumber": 5, "description": "Work out the upper bound.", "workingLatex": "4.3 + 0.05 = 4.35", "explanation": "At $4.35$ the value would round up to $4.4$.", "diagram": null },
        { "stepNumber": 6, "description": "Choose the inequality signs.", "workingLatex": "4.25 \\leq x < 4.35", "explanation": "The lower bound is included and the upper bound is not.", "diagram": null },
        { "stepNumber": 7, "description": "State the error interval.", "workingLatex": "4.25 \\leq x < 4.35", "explanation": "So the error interval is $4.25 \\leq x < 4.35$.", "diagram": null }
      ],
      "finalAnswer": "$4.25 \\leq x < 4.35$"
    }
  },
  {
    "id": "gcse.number.error-intervals.q006",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Error intervals",
    "subtopicId": "gcse.number.error-intervals",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "inequality",
    "tags": ["error intervals", "1 decimal place", "bounds"],
    "questionText": "A mass $m$ has been rounded to $1$ decimal place to give $8.0\\text{ kg}$. Write down the error interval for $m$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "State the rounding.", "workingLatex": "m \\to 8.0 \\text{ (1 dp)}", "explanation": "The mass was rounded to one decimal place to give $8.0$.", "diagram": null },
        { "stepNumber": 2, "description": "Find half of the unit.", "workingLatex": "\\dfrac{0.1}{2} = 0.05", "explanation": "The interval reaches $0.05$ either side.", "diagram": null },
        { "stepNumber": 3, "description": "Work out the lower bound.", "workingLatex": "8.0 - 0.05 = 7.95", "explanation": "The smallest mass that rounds to $8.0$ is $7.95$.", "diagram": null },
        { "stepNumber": 4, "description": "Work out the upper bound.", "workingLatex": "8.0 + 0.05 = 8.05", "explanation": "At $8.05$ the mass would round up to $8.1$.", "diagram": null },
        { "stepNumber": 5, "description": "Choose the inequality signs.", "workingLatex": "7.95 \\leq m < 8.05", "explanation": "The lower bound is included and the upper bound is not.", "diagram": null },
        { "stepNumber": 6, "description": "State the error interval.", "workingLatex": "7.95 \\leq m < 8.05", "explanation": "So the error interval is $7.95 \\leq m < 8.05$.", "diagram": null }
      ],
      "finalAnswer": "$7.95 \\leq m < 8.05$"
    }
  },
  {
    "id": "gcse.number.error-intervals.q007",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Error intervals",
    "subtopicId": "gcse.number.error-intervals",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "inequality",
    "tags": ["error intervals", "nearest 100", "bounds"],
    "questionText": "A number $x$ has been rounded to the nearest $100$ to give $300$. Write down the error interval for $x$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "State the rounding.", "workingLatex": "x \\to 300 \\text{ (nearest 100)}", "explanation": "The value was rounded to the nearest hundred to give $300$.", "diagram": null },
        { "stepNumber": 2, "description": "Find half of the rounding unit.", "workingLatex": "\\dfrac{100}{2} = 50", "explanation": "The interval reaches fifty either side.", "diagram": null },
        { "stepNumber": 3, "description": "Work out the lower bound.", "workingLatex": "300 - 50 = 250", "explanation": "The smallest value that rounds to $300$ is $250$.", "diagram": null },
        { "stepNumber": 4, "description": "Work out the upper bound.", "workingLatex": "300 + 50 = 350", "explanation": "At $350$ the value would round up to $400$.", "diagram": null },
        { "stepNumber": 5, "description": "Choose the inequality signs.", "workingLatex": "250 \\leq x < 350", "explanation": "The lower bound is included and the upper bound is not.", "diagram": null },
        { "stepNumber": 6, "description": "State the error interval.", "workingLatex": "250 \\leq x < 350", "explanation": "So the error interval is $250 \\leq x < 350$.", "diagram": null }
      ],
      "finalAnswer": "$250 \\leq x < 350$"
    }
  },
  {
    "id": "gcse.number.error-intervals.q008",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Error intervals",
    "subtopicId": "gcse.number.error-intervals",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "inequality",
    "tags": ["error intervals", "nearest 100", "bounds"],
    "questionText": "A number $p$ has been rounded to the nearest $100$ to give $700$. Write down the error interval for $p$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "State the rounding.", "workingLatex": "p \\to 700 \\text{ (nearest 100)}", "explanation": "The value was rounded to the nearest hundred to give $700$.", "diagram": null },
        { "stepNumber": 2, "description": "Find half of the rounding unit.", "workingLatex": "\\dfrac{100}{2} = 50", "explanation": "The interval reaches fifty either side.", "diagram": null },
        { "stepNumber": 3, "description": "Work out the lower bound.", "workingLatex": "700 - 50 = 650", "explanation": "The smallest value that rounds to $700$ is $650$.", "diagram": null },
        { "stepNumber": 4, "description": "Work out the upper bound.", "workingLatex": "700 + 50 = 750", "explanation": "At $750$ the value would round up to $800$.", "diagram": null },
        { "stepNumber": 5, "description": "Choose the inequality signs.", "workingLatex": "650 \\leq p < 750", "explanation": "The lower bound is included and the upper bound is not.", "diagram": null },
        { "stepNumber": 6, "description": "State the error interval.", "workingLatex": "650 \\leq p < 750", "explanation": "So the error interval is $650 \\leq p < 750$.", "diagram": null }
      ],
      "finalAnswer": "$650 \\leq p < 750$"
    }
  },
  {
    "id": "gcse.number.error-intervals.q009",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Error intervals",
    "subtopicId": "gcse.number.error-intervals",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "inequality",
    "tags": ["error intervals", "2 decimal places", "bounds"],
    "questionText": "A number $x$ has been rounded to $2$ decimal places to give $3.47$. Write down the error interval for $x$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "State the rounding.", "workingLatex": "x \\to 3.47 \\text{ (2 dp)}", "explanation": "The value was rounded to two decimal places to give $3.47$.", "diagram": null },
        { "stepNumber": 2, "description": "Find the rounding unit.", "workingLatex": "2\\text{ dp} \\Rightarrow 0.01", "explanation": "Two decimal places means the values are spaced by $0.01$.", "diagram": null },
        { "stepNumber": 3, "description": "Find half of the unit.", "workingLatex": "\\dfrac{0.01}{2} = 0.005", "explanation": "The interval reaches $0.005$ either side.", "diagram": null },
        { "stepNumber": 4, "description": "Work out the lower bound.", "workingLatex": "3.47 - 0.005 = 3.465", "explanation": "The smallest value that rounds to $3.47$ is $3.465$.", "diagram": null },
        { "stepNumber": 5, "description": "Work out the upper bound.", "workingLatex": "3.47 + 0.005 = 3.475", "explanation": "At $3.475$ the value would round up to $3.48$.", "diagram": null },
        { "stepNumber": 6, "description": "Choose the inequality signs.", "workingLatex": "3.465 \\leq x < 3.475", "explanation": "The lower bound is included and the upper bound is not.", "diagram": null },
        { "stepNumber": 7, "description": "State the error interval.", "workingLatex": "3.465 \\leq x < 3.475", "explanation": "So the error interval is $3.465 \\leq x < 3.475$.", "diagram": null }
      ],
      "finalAnswer": "$3.465 \\leq x < 3.475$"
    }
  },
  {
    "id": "gcse.number.error-intervals.q010",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Error intervals",
    "subtopicId": "gcse.number.error-intervals",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "inequality",
    "tags": ["error intervals", "nearest 10", "bounds"],
    "questionText": "A number $x$ has been rounded to the nearest $10$ to give $20$. Write down the error interval for $x$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "State the rounding.", "workingLatex": "x \\to 20 \\text{ (nearest 10)}", "explanation": "The value was rounded to the nearest ten to give $20$.", "diagram": null },
        { "stepNumber": 2, "description": "Find half of the rounding unit.", "workingLatex": "\\dfrac{10}{2} = 5", "explanation": "The interval reaches five either side.", "diagram": null },
        { "stepNumber": 3, "description": "Work out the lower bound.", "workingLatex": "20 - 5 = 15", "explanation": "The smallest value that rounds to $20$ is $15$.", "diagram": null },
        { "stepNumber": 4, "description": "Work out the upper bound.", "workingLatex": "20 + 5 = 25", "explanation": "At $25$ the value would round up to $30$.", "diagram": null },
        { "stepNumber": 5, "description": "Choose the inequality signs.", "workingLatex": "15 \\leq x < 25", "explanation": "The lower bound is included and the upper bound is not.", "diagram": null },
        { "stepNumber": 6, "description": "State the error interval.", "workingLatex": "15 \\leq x < 25", "explanation": "So the error interval is $15 \\leq x < 25$.", "diagram": null }
      ],
      "finalAnswer": "$15 \\leq x < 25$"
    }
  },
  {
    "id": "gcse.number.error-intervals.q011",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Error intervals",
    "subtopicId": "gcse.number.error-intervals",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "inequality",
    "tags": ["error intervals", "nearest whole number", "bounds"],
    "questionText": "A number $x$ has been rounded to the nearest whole number to give $100$. Write down the error interval for $x$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "State the rounding.", "workingLatex": "x \\to 100 \\text{ (nearest whole)}", "explanation": "The value was rounded to the nearest whole number to give $100$.", "diagram": null },
        { "stepNumber": 2, "description": "Find half of the rounding unit.", "workingLatex": "\\dfrac{1}{2} = 0.5", "explanation": "The interval reaches half a unit either side.", "diagram": null },
        { "stepNumber": 3, "description": "Work out the lower bound.", "workingLatex": "100 - 0.5 = 99.5", "explanation": "The smallest value that rounds to $100$ is $99.5$.", "diagram": null },
        { "stepNumber": 4, "description": "Work out the upper bound.", "workingLatex": "100 + 0.5 = 100.5", "explanation": "At $100.5$ the value would round up to $101$.", "diagram": null },
        { "stepNumber": 5, "description": "Choose the inequality signs.", "workingLatex": "99.5 \\leq x < 100.5", "explanation": "The lower bound is included and the upper bound is not.", "diagram": null },
        { "stepNumber": 6, "description": "State the error interval.", "workingLatex": "99.5 \\leq x < 100.5", "explanation": "So the error interval is $99.5 \\leq x < 100.5$.", "diagram": null }
      ],
      "finalAnswer": "$99.5 \\leq x < 100.5$"
    }
  },
  {
    "id": "gcse.number.error-intervals.q012",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Error intervals",
    "subtopicId": "gcse.number.error-intervals",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "inequality",
    "tags": ["error intervals", "1 decimal place", "bounds"],
    "questionText": "A number $x$ has been rounded to $1$ decimal place to give $0.6$. Write down the error interval for $x$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "State the rounding.", "workingLatex": "x \\to 0.6 \\text{ (1 dp)}", "explanation": "The value was rounded to one decimal place to give $0.6$.", "diagram": null },
        { "stepNumber": 2, "description": "Find half of the unit.", "workingLatex": "\\dfrac{0.1}{2} = 0.05", "explanation": "The interval reaches $0.05$ either side.", "diagram": null },
        { "stepNumber": 3, "description": "Work out the lower bound.", "workingLatex": "0.6 - 0.05 = 0.55", "explanation": "The smallest value that rounds to $0.6$ is $0.55$.", "diagram": null },
        { "stepNumber": 4, "description": "Work out the upper bound.", "workingLatex": "0.6 + 0.05 = 0.65", "explanation": "At $0.65$ the value would round up to $0.7$.", "diagram": null },
        { "stepNumber": 5, "description": "Choose the inequality signs.", "workingLatex": "0.55 \\leq x < 0.65", "explanation": "The lower bound is included and the upper bound is not.", "diagram": null },
        { "stepNumber": 6, "description": "State the error interval.", "workingLatex": "0.55 \\leq x < 0.65", "explanation": "So the error interval is $0.55 \\leq x < 0.65$.", "diagram": null }
      ],
      "finalAnswer": "$0.55 \\leq x < 0.65$"
    }
  },
  {
    "id": "gcse.number.error-intervals.q013",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Error intervals",
    "subtopicId": "gcse.number.error-intervals",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "inequality",
    "tags": ["error intervals", "nearest 1000", "bounds"],
    "questionText": "A number $x$ has been rounded to the nearest $1000$ to give $5000$. Write down the error interval for $x$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "State the rounding.", "workingLatex": "x \\to 5000 \\text{ (nearest 1000)}", "explanation": "The value was rounded to the nearest thousand to give $5000$.", "diagram": null },
        { "stepNumber": 2, "description": "Find half of the rounding unit.", "workingLatex": "\\dfrac{1000}{2} = 500", "explanation": "The interval reaches five hundred either side.", "diagram": null },
        { "stepNumber": 3, "description": "Work out the lower bound.", "workingLatex": "5000 - 500 = 4500", "explanation": "The smallest value that rounds to $5000$ is $4500$.", "diagram": null },
        { "stepNumber": 4, "description": "Work out the upper bound.", "workingLatex": "5000 + 500 = 5500", "explanation": "At $5500$ the value would round up to $6000$.", "diagram": null },
        { "stepNumber": 5, "description": "Choose the inequality signs.", "workingLatex": "4500 \\leq x < 5500", "explanation": "The lower bound is included and the upper bound is not.", "diagram": null },
        { "stepNumber": 6, "description": "State the error interval.", "workingLatex": "4500 \\leq x < 5500", "explanation": "So the error interval is $4500 \\leq x < 5500$.", "diagram": null }
      ],
      "finalAnswer": "$4500 \\leq x < 5500$"
    }
  },
  {
    "id": "gcse.number.error-intervals.q014",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Error intervals",
    "subtopicId": "gcse.number.error-intervals",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "inequality",
    "tags": ["error intervals", "nearest 10", "bounds"],
    "questionText": "A number $x$ has been rounded to the nearest $10$ to give $60$. Write down the error interval for $x$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "State the rounding.", "workingLatex": "x \\to 60 \\text{ (nearest 10)}", "explanation": "The value was rounded to the nearest ten to give $60$.", "diagram": null },
        { "stepNumber": 2, "description": "Find half of the rounding unit.", "workingLatex": "\\dfrac{10}{2} = 5", "explanation": "The interval reaches five either side.", "diagram": null },
        { "stepNumber": 3, "description": "Work out the lower bound.", "workingLatex": "60 - 5 = 55", "explanation": "The smallest value that rounds to $60$ is $55$.", "diagram": null },
        { "stepNumber": 4, "description": "Work out the upper bound.", "workingLatex": "60 + 5 = 65", "explanation": "At $65$ the value would round up to $70$.", "diagram": null },
        { "stepNumber": 5, "description": "Choose the inequality signs.", "workingLatex": "55 \\leq x < 65", "explanation": "The lower bound is included and the upper bound is not.", "diagram": null },
        { "stepNumber": 6, "description": "State the error interval.", "workingLatex": "55 \\leq x < 65", "explanation": "So the error interval is $55 \\leq x < 65$.", "diagram": null }
      ],
      "finalAnswer": "$55 \\leq x < 65$"
    }
  },
  {
    "id": "gcse.number.error-intervals.q015",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Error intervals",
    "subtopicId": "gcse.number.error-intervals",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "inequality",
    "tags": ["error intervals", "nearest whole number", "bounds"],
    "questionText": "A number $x$ has been rounded to the nearest whole number to give $3$. Write down the error interval for $x$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "State the rounding.", "workingLatex": "x \\to 3 \\text{ (nearest whole)}", "explanation": "The value was rounded to the nearest whole number to give $3$.", "diagram": null },
        { "stepNumber": 2, "description": "Find half of the rounding unit.", "workingLatex": "\\dfrac{1}{2} = 0.5", "explanation": "The interval reaches half a unit either side.", "diagram": null },
        { "stepNumber": 3, "description": "Work out the lower bound.", "workingLatex": "3 - 0.5 = 2.5", "explanation": "The smallest value that rounds to $3$ is $2.5$.", "diagram": null },
        { "stepNumber": 4, "description": "Work out the upper bound.", "workingLatex": "3 + 0.5 = 3.5", "explanation": "At $3.5$ the value would round up to $4$.", "diagram": null },
        { "stepNumber": 5, "description": "Choose the inequality signs.", "workingLatex": "2.5 \\leq x < 3.5", "explanation": "The lower bound is included and the upper bound is not.", "diagram": null },
        { "stepNumber": 6, "description": "State the error interval.", "workingLatex": "2.5 \\leq x < 3.5", "explanation": "So the error interval is $2.5 \\leq x < 3.5$.", "diagram": null }
      ],
      "finalAnswer": "$2.5 \\leq x < 3.5$"
    }
  },
  {
    "id": "gcse.number.error-intervals.q016",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Error intervals",
    "subtopicId": "gcse.number.error-intervals",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "inequality",
    "tags": ["error intervals", "1 decimal place", "bounds", "carrying"],
    "questionText": "A number $x$ has been rounded to $1$ decimal place to give $9.9$. Write down the error interval for $x$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "State the rounding.", "workingLatex": "x \\to 9.9 \\text{ (1 dp)}", "explanation": "The value was rounded to one decimal place to give $9.9$.", "diagram": null },
        { "stepNumber": 2, "description": "Find half of the unit.", "workingLatex": "\\dfrac{0.1}{2} = 0.05", "explanation": "The interval reaches $0.05$ either side.", "diagram": null },
        { "stepNumber": 3, "description": "Work out the lower bound.", "workingLatex": "9.9 - 0.05 = 9.85", "explanation": "The smallest value that rounds to $9.9$ is $9.85$.", "diagram": null },
        { "stepNumber": 4, "description": "Work out the upper bound.", "workingLatex": "9.9 + 0.05 = 9.95", "explanation": "At $9.95$ the value would round up to $10.0$.", "diagram": null },
        { "stepNumber": 5, "description": "Choose the inequality signs.", "workingLatex": "9.85 \\leq x < 9.95", "explanation": "The lower bound is included and the upper bound is not.", "diagram": null },
        { "stepNumber": 6, "description": "State the error interval.", "workingLatex": "9.85 \\leq x < 9.95", "explanation": "So the error interval is $9.85 \\leq x < 9.95$.", "diagram": null }
      ],
      "finalAnswer": "$9.85 \\leq x < 9.95$"
    }
  },
  {
    "id": "gcse.number.error-intervals.q017",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Error intervals",
    "subtopicId": "gcse.number.error-intervals",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "inequality",
    "tags": ["error intervals", "2 decimal places", "bounds"],
    "questionText": "A number $x$ has been rounded to $2$ decimal places to give $0.50$. Write down the error interval for $x$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "State the rounding.", "workingLatex": "x \\to 0.50 \\text{ (2 dp)}", "explanation": "The value was rounded to two decimal places to give $0.50$.", "diagram": null },
        { "stepNumber": 2, "description": "Find half of the unit.", "workingLatex": "\\dfrac{0.01}{2} = 0.005", "explanation": "The interval reaches $0.005$ either side.", "diagram": null },
        { "stepNumber": 3, "description": "Work out the lower bound.", "workingLatex": "0.50 - 0.005 = 0.495", "explanation": "The smallest value that rounds to $0.50$ is $0.495$.", "diagram": null },
        { "stepNumber": 4, "description": "Work out the upper bound.", "workingLatex": "0.50 + 0.005 = 0.505", "explanation": "At $0.505$ the value would round up to $0.51$.", "diagram": null },
        { "stepNumber": 5, "description": "Choose the inequality signs.", "workingLatex": "0.495 \\leq x < 0.505", "explanation": "The lower bound is included and the upper bound is not.", "diagram": null },
        { "stepNumber": 6, "description": "State the error interval.", "workingLatex": "0.495 \\leq x < 0.505", "explanation": "So the error interval is $0.495 \\leq x < 0.505$.", "diagram": null }
      ],
      "finalAnswer": "$0.495 \\leq x < 0.505$"
    }
  },
  {
    "id": "gcse.number.error-intervals.q018",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Error intervals",
    "subtopicId": "gcse.number.error-intervals",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "inequality",
    "tags": ["error intervals", "nearest 100", "bounds"],
    "questionText": "A number $x$ has been rounded to the nearest $100$ to give $1000$. Write down the error interval for $x$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "State the rounding.", "workingLatex": "x \\to 1000 \\text{ (nearest 100)}", "explanation": "The value was rounded to the nearest hundred to give $1000$.", "diagram": null },
        { "stepNumber": 2, "description": "Find half of the rounding unit.", "workingLatex": "\\dfrac{100}{2} = 50", "explanation": "The interval reaches fifty either side.", "diagram": null },
        { "stepNumber": 3, "description": "Work out the lower bound.", "workingLatex": "1000 - 50 = 950", "explanation": "The smallest value that rounds to $1000$ is $950$.", "diagram": null },
        { "stepNumber": 4, "description": "Work out the upper bound.", "workingLatex": "1000 + 50 = 1050", "explanation": "At $1050$ the value would round up to $1100$.", "diagram": null },
        { "stepNumber": 5, "description": "Choose the inequality signs.", "workingLatex": "950 \\leq x < 1050", "explanation": "The lower bound is included and the upper bound is not.", "diagram": null },
        { "stepNumber": 6, "description": "State the error interval.", "workingLatex": "950 \\leq x < 1050", "explanation": "So the error interval is $950 \\leq x < 1050$.", "diagram": null }
      ],
      "finalAnswer": "$950 \\leq x < 1050$"
    }
  },
  {
    "id": "gcse.number.error-intervals.q019",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Error intervals",
    "subtopicId": "gcse.number.error-intervals",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "inequality",
    "tags": ["error intervals", "nearest 10", "bounds"],
    "questionText": "A number $x$ has been rounded to the nearest $10$ to give $30$. Write down the error interval for $x$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "State the rounding.", "workingLatex": "x \\to 30 \\text{ (nearest 10)}", "explanation": "The value was rounded to the nearest ten to give $30$.", "diagram": null },
        { "stepNumber": 2, "description": "Find half of the rounding unit.", "workingLatex": "\\dfrac{10}{2} = 5", "explanation": "The interval reaches five either side.", "diagram": null },
        { "stepNumber": 3, "description": "Work out the lower bound.", "workingLatex": "30 - 5 = 25", "explanation": "The smallest value that rounds to $30$ is $25$.", "diagram": null },
        { "stepNumber": 4, "description": "Work out the upper bound.", "workingLatex": "30 + 5 = 35", "explanation": "At $35$ the value would round up to $40$.", "diagram": null },
        { "stepNumber": 5, "description": "Choose the inequality signs.", "workingLatex": "25 \\leq x < 35", "explanation": "The lower bound is included and the upper bound is not.", "diagram": null },
        { "stepNumber": 6, "description": "State the error interval.", "workingLatex": "25 \\leq x < 35", "explanation": "So the error interval is $25 \\leq x < 35$.", "diagram": null }
      ],
      "finalAnswer": "$25 \\leq x < 35$"
    }
  },
  {
    "id": "gcse.number.error-intervals.q020",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Error intervals",
    "subtopicId": "gcse.number.error-intervals",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "inequality",
    "tags": ["error intervals", "nearest whole number", "bounds"],
    "questionText": "A number $x$ has been rounded to the nearest whole number to give $15$. Write down the error interval for $x$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "State the rounding.", "workingLatex": "x \\to 15 \\text{ (nearest whole)}", "explanation": "The value was rounded to the nearest whole number to give $15$.", "diagram": null },
        { "stepNumber": 2, "description": "Find half of the rounding unit.", "workingLatex": "\\dfrac{1}{2} = 0.5", "explanation": "The interval reaches half a unit either side.", "diagram": null },
        { "stepNumber": 3, "description": "Work out the lower bound.", "workingLatex": "15 - 0.5 = 14.5", "explanation": "The smallest value that rounds to $15$ is $14.5$.", "diagram": null },
        { "stepNumber": 4, "description": "Work out the upper bound.", "workingLatex": "15 + 0.5 = 15.5", "explanation": "At $15.5$ the value would round up to $16$.", "diagram": null },
        { "stepNumber": 5, "description": "Choose the inequality signs.", "workingLatex": "14.5 \\leq x < 15.5", "explanation": "The lower bound is included and the upper bound is not.", "diagram": null },
        { "stepNumber": 6, "description": "State the error interval.", "workingLatex": "14.5 \\leq x < 15.5", "explanation": "So the error interval is $14.5 \\leq x < 15.5$.", "diagram": null }
      ],
      "finalAnswer": "$14.5 \\leq x < 15.5$"
    }
  },
  {
    "id": "gcse.number.error-intervals.q021",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Error intervals",
    "subtopicId": "gcse.number.error-intervals",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "inequality",
    "tags": ["error intervals", "1 decimal place", "bounds"],
    "questionText": "A number $x$ has been rounded to $1$ decimal place to give $2.5$. Write down the error interval for $x$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "State the rounding.", "workingLatex": "x \\to 2.5 \\text{ (1 dp)}", "explanation": "The value was rounded to one decimal place to give $2.5$.", "diagram": null },
        { "stepNumber": 2, "description": "Find half of the unit.", "workingLatex": "\\dfrac{0.1}{2} = 0.05", "explanation": "The interval reaches $0.05$ either side.", "diagram": null },
        { "stepNumber": 3, "description": "Work out the lower bound.", "workingLatex": "2.5 - 0.05 = 2.45", "explanation": "The smallest value that rounds to $2.5$ is $2.45$.", "diagram": null },
        { "stepNumber": 4, "description": "Work out the upper bound.", "workingLatex": "2.5 + 0.05 = 2.55", "explanation": "At $2.55$ the value would round up to $2.6$.", "diagram": null },
        { "stepNumber": 5, "description": "Choose the inequality signs.", "workingLatex": "2.45 \\leq x < 2.55", "explanation": "The lower bound is included and the upper bound is not.", "diagram": null },
        { "stepNumber": 6, "description": "State the error interval.", "workingLatex": "2.45 \\leq x < 2.55", "explanation": "So the error interval is $2.45 \\leq x < 2.55$.", "diagram": null }
      ],
      "finalAnswer": "$2.45 \\leq x < 2.55$"
    }
  },
  {
    "id": "gcse.number.error-intervals.q022",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Error intervals",
    "subtopicId": "gcse.number.error-intervals",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "inequality",
    "tags": ["error intervals", "nearest 1000", "bounds"],
    "questionText": "A number $x$ has been rounded to the nearest $1000$ to give $8000$. Write down the error interval for $x$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "State the rounding.", "workingLatex": "x \\to 8000 \\text{ (nearest 1000)}", "explanation": "The value was rounded to the nearest thousand to give $8000$.", "diagram": null },
        { "stepNumber": 2, "description": "Find half of the rounding unit.", "workingLatex": "\\dfrac{1000}{2} = 500", "explanation": "The interval reaches five hundred either side.", "diagram": null },
        { "stepNumber": 3, "description": "Work out the lower bound.", "workingLatex": "8000 - 500 = 7500", "explanation": "The smallest value that rounds to $8000$ is $7500$.", "diagram": null },
        { "stepNumber": 4, "description": "Work out the upper bound.", "workingLatex": "8000 + 500 = 8500", "explanation": "At $8500$ the value would round up to $9000$.", "diagram": null },
        { "stepNumber": 5, "description": "Choose the inequality signs.", "workingLatex": "7500 \\leq x < 8500", "explanation": "The lower bound is included and the upper bound is not.", "diagram": null },
        { "stepNumber": 6, "description": "State the error interval.", "workingLatex": "7500 \\leq x < 8500", "explanation": "So the error interval is $7500 \\leq x < 8500$.", "diagram": null }
      ],
      "finalAnswer": "$7500 \\leq x < 8500$"
    }
  },
  {
    "id": "gcse.number.error-intervals.q023",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Error intervals",
    "subtopicId": "gcse.number.error-intervals",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "inequality",
    "tags": ["error intervals", "2 decimal places", "bounds"],
    "questionText": "A number $x$ has been rounded to $2$ decimal places to give $1.20$. Write down the error interval for $x$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "State the rounding.", "workingLatex": "x \\to 1.20 \\text{ (2 dp)}", "explanation": "The value was rounded to two decimal places to give $1.20$.", "diagram": null },
        { "stepNumber": 2, "description": "Find half of the unit.", "workingLatex": "\\dfrac{0.01}{2} = 0.005", "explanation": "The interval reaches $0.005$ either side.", "diagram": null },
        { "stepNumber": 3, "description": "Work out the lower bound.", "workingLatex": "1.20 - 0.005 = 1.195", "explanation": "The smallest value that rounds to $1.20$ is $1.195$.", "diagram": null },
        { "stepNumber": 4, "description": "Work out the upper bound.", "workingLatex": "1.20 + 0.005 = 1.205", "explanation": "At $1.205$ the value would round up to $1.21$.", "diagram": null },
        { "stepNumber": 5, "description": "Choose the inequality signs.", "workingLatex": "1.195 \\leq x < 1.205", "explanation": "The lower bound is included and the upper bound is not.", "diagram": null },
        { "stepNumber": 6, "description": "State the error interval.", "workingLatex": "1.195 \\leq x < 1.205", "explanation": "So the error interval is $1.195 \\leq x < 1.205$.", "diagram": null }
      ],
      "finalAnswer": "$1.195 \\leq x < 1.205$"
    }
  },
  {
    "id": "gcse.number.error-intervals.q024",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Error intervals",
    "subtopicId": "gcse.number.error-intervals",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "inequality",
    "tags": ["error intervals", "nearest 10", "bounds"],
    "questionText": "A number $x$ has been rounded to the nearest $10$ to give $100$. Write down the error interval for $x$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "State the rounding.", "workingLatex": "x \\to 100 \\text{ (nearest 10)}", "explanation": "The value was rounded to the nearest ten to give $100$.", "diagram": null },
        { "stepNumber": 2, "description": "Find half of the rounding unit.", "workingLatex": "\\dfrac{10}{2} = 5", "explanation": "The interval reaches five either side.", "diagram": null },
        { "stepNumber": 3, "description": "Work out the lower bound.", "workingLatex": "100 - 5 = 95", "explanation": "The smallest value that rounds to $100$ is $95$.", "diagram": null },
        { "stepNumber": 4, "description": "Work out the upper bound.", "workingLatex": "100 + 5 = 105", "explanation": "At $105$ the value would round up to $110$.", "diagram": null },
        { "stepNumber": 5, "description": "Choose the inequality signs.", "workingLatex": "95 \\leq x < 105", "explanation": "The lower bound is included and the upper bound is not.", "diagram": null },
        { "stepNumber": 6, "description": "State the error interval.", "workingLatex": "95 \\leq x < 105", "explanation": "So the error interval is $95 \\leq x < 105$.", "diagram": null }
      ],
      "finalAnswer": "$95 \\leq x < 105$"
    }
  },
  {
    "id": "gcse.number.error-intervals.q025",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Error intervals",
    "subtopicId": "gcse.number.error-intervals",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "inequality",
    "tags": ["error intervals", "significant figures", "2 sf", "bounds"],
    "questionText": "A number $x$ has been rounded to $2$ significant figures to give $3500$. Write down the error interval for $x$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Find the place of the last significant figure.", "workingLatex": "3500 \\to \\text{2nd s.f. is hundreds}", "explanation": "The second significant figure, the $5$, is in the hundreds column.", "diagram": null },
        { "stepNumber": 2, "description": "Identify the rounding unit.", "workingLatex": "\\text{unit} = 100", "explanation": "Because the last kept figure is in the hundreds, the number was rounded to the nearest hundred.", "diagram": null },
        { "stepNumber": 3, "description": "Find half of the unit.", "workingLatex": "\\dfrac{100}{2} = 50", "explanation": "The interval reaches fifty either side.", "diagram": null },
        { "stepNumber": 4, "description": "Work out the lower bound.", "workingLatex": "3500 - 50 = 3450", "explanation": "The smallest value that rounds to $3500$ is $3450$.", "diagram": null },
        { "stepNumber": 5, "description": "Work out the upper bound.", "workingLatex": "3500 + 50 = 3550", "explanation": "At $3550$ the value would round up to $3600$.", "diagram": null },
        { "stepNumber": 6, "description": "Choose the inequality signs.", "workingLatex": "3450 \\leq x < 3550", "explanation": "The lower bound is included and the upper bound is not.", "diagram": null },
        { "stepNumber": 7, "description": "State the error interval.", "workingLatex": "3450 \\leq x < 3550", "explanation": "So the error interval is $3450 \\leq x < 3550$.", "diagram": null }
      ],
      "finalAnswer": "$3450 \\leq x < 3550$"
    }
  },
  {
    "id": "gcse.number.error-intervals.q026",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Error intervals",
    "subtopicId": "gcse.number.error-intervals",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "inequality",
    "tags": ["error intervals", "significant figures", "1 sf", "bounds"],
    "questionText": "A number $x$ has been rounded to $1$ significant figure to give $400$. Write down the error interval for $x$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Find the place of the significant figure.", "workingLatex": "400 \\to \\text{1st s.f. is hundreds}", "explanation": "The single significant figure, the $4$, is in the hundreds column.", "diagram": null },
        { "stepNumber": 2, "description": "Identify the rounding unit.", "workingLatex": "\\text{unit} = 100", "explanation": "So the number was rounded to the nearest hundred.", "diagram": null },
        { "stepNumber": 3, "description": "Find half of the unit.", "workingLatex": "\\dfrac{100}{2} = 50", "explanation": "The interval reaches fifty either side.", "diagram": null },
        { "stepNumber": 4, "description": "Work out the lower bound.", "workingLatex": "400 - 50 = 350", "explanation": "The smallest value that rounds to $400$ is $350$.", "diagram": null },
        { "stepNumber": 5, "description": "Work out the upper bound.", "workingLatex": "400 + 50 = 450", "explanation": "At $450$ the value would round up to $500$.", "diagram": null },
        { "stepNumber": 6, "description": "Choose the inequality signs.", "workingLatex": "350 \\leq x < 450", "explanation": "The lower bound is included and the upper bound is not.", "diagram": null },
        { "stepNumber": 7, "description": "State the error interval.", "workingLatex": "350 \\leq x < 450", "explanation": "So the error interval is $350 \\leq x < 450$.", "diagram": null }
      ],
      "finalAnswer": "$350 \\leq x < 450$"
    }
  },
  {
    "id": "gcse.number.error-intervals.q027",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Error intervals",
    "subtopicId": "gcse.number.error-intervals",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "inequality",
    "tags": ["error intervals", "significant figures", "2 sf", "small decimals", "bounds"],
    "questionText": "A number $x$ has been rounded to $2$ significant figures to give $0.048$. Write down the error interval for $x$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Find the place of the last significant figure.", "workingLatex": "0.048 \\to \\text{2nd s.f. is thousandths}", "explanation": "The second significant figure, the $8$, is in the thousandths column.", "diagram": null },
        { "stepNumber": 2, "description": "Identify the rounding unit.", "workingLatex": "\\text{unit} = 0.001", "explanation": "So the number was rounded to the nearest thousandth.", "diagram": null },
        { "stepNumber": 3, "description": "Find half of the unit.", "workingLatex": "\\dfrac{0.001}{2} = 0.0005", "explanation": "The interval reaches $0.0005$ either side.", "diagram": null },
        { "stepNumber": 4, "description": "Work out the lower bound.", "workingLatex": "0.048 - 0.0005 = 0.0475", "explanation": "The smallest value that rounds to $0.048$ is $0.0475$.", "diagram": null },
        { "stepNumber": 5, "description": "Work out the upper bound.", "workingLatex": "0.048 + 0.0005 = 0.0485", "explanation": "At $0.0485$ the value would round up to $0.049$.", "diagram": null },
        { "stepNumber": 6, "description": "Choose the inequality signs.", "workingLatex": "0.0475 \\leq x < 0.0485", "explanation": "The lower bound is included and the upper bound is not.", "diagram": null },
        { "stepNumber": 7, "description": "State the error interval.", "workingLatex": "0.0475 \\leq x < 0.0485", "explanation": "So the error interval is $0.0475 \\leq x < 0.0485$.", "diagram": null }
      ],
      "finalAnswer": "$0.0475 \\leq x < 0.0485$"
    }
  },
  {
    "id": "gcse.number.error-intervals.q028",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Error intervals",
    "subtopicId": "gcse.number.error-intervals",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "inequality",
    "tags": ["error intervals", "truncation", "1 decimal place", "bounds"],
    "questionText": "A number $x$ has been truncated to $1$ decimal place to give $4.3$. Write down the error interval for $x$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall what truncation does.", "workingLatex": "\\text{truncate} = \\text{cut off, never round up}", "explanation": "Truncating simply removes the later digits without ever rounding up.", "diagram": null },
        { "stepNumber": 2, "description": "Find the lower bound.", "workingLatex": "x \\geq 4.3", "explanation": "Any value from $4.3$ upwards keeps $4.3$ after cutting off, so $4.3$ is the lowest possible value.", "diagram": null },
        { "stepNumber": 3, "description": "Think about the largest possible value.", "workingLatex": "\\text{just below } 4.4", "explanation": "As soon as the value reaches $4.4$, truncation would give $4.4$ instead.", "diagram": null },
        { "stepNumber": 4, "description": "Find the upper bound.", "workingLatex": "x < 4.4", "explanation": "So the value must be less than $4.4$.", "diagram": null },
        { "stepNumber": 5, "description": "Compare with rounding.", "workingLatex": "\\text{no subtraction of } 0.05", "explanation": "Unlike rounding, truncation does not go below the stated value, so we do not subtract half a unit.", "diagram": null },
        { "stepNumber": 6, "description": "Combine the bounds.", "workingLatex": "4.3 \\leq x < 4.4", "explanation": "The lower bound is included and the upper bound is not.", "diagram": null },
        { "stepNumber": 7, "description": "State the error interval.", "workingLatex": "4.3 \\leq x < 4.4", "explanation": "So the error interval is $4.3 \\leq x < 4.4$.", "diagram": null }
      ],
      "finalAnswer": "$4.3 \\leq x < 4.4$"
    }
  },
  {
    "id": "gcse.number.error-intervals.q029",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Error intervals",
    "subtopicId": "gcse.number.error-intervals",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "inequality",
    "tags": ["error intervals", "truncation", "nearest whole number", "bounds"],
    "questionText": "A number $x$ has been truncated to the nearest whole number to give $7$. Write down the error interval for $x$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall what truncation does.", "workingLatex": "\\text{truncate} = \\text{drop the decimals}", "explanation": "Truncating to a whole number just removes everything after the decimal point.", "diagram": null },
        { "stepNumber": 2, "description": "Find the lower bound.", "workingLatex": "x \\geq 7", "explanation": "Any value of $7$ point something has its decimals dropped to give $7$, so $7$ is the lowest value.", "diagram": null },
        { "stepNumber": 3, "description": "Think about the largest value.", "workingLatex": "\\text{just below } 8", "explanation": "As soon as the value reaches $8$, truncation would give $8$.", "diagram": null },
        { "stepNumber": 4, "description": "Find the upper bound.", "workingLatex": "x < 8", "explanation": "So the value must be less than $8$.", "diagram": null },
        { "stepNumber": 5, "description": "Combine the bounds.", "workingLatex": "7 \\leq x < 8", "explanation": "The lower bound is included and the upper bound is not.", "diagram": null },
        { "stepNumber": 6, "description": "State the error interval.", "workingLatex": "7 \\leq x < 8", "explanation": "So the error interval is $7 \\leq x < 8$.", "diagram": null }
      ],
      "finalAnswer": "$7 \\leq x < 8$"
    }
  },
  {
    "id": "gcse.number.error-intervals.q030",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Error intervals",
    "subtopicId": "gcse.number.error-intervals",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "inequality",
    "tags": ["error intervals", "nearest 5", "bounds"],
    "questionText": "A number $x$ has been rounded to the nearest $5$ to give $25$. Write down the error interval for $x$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Identify the rounding unit.", "workingLatex": "\\text{unit} = 5", "explanation": "The number was rounded to the nearest five.", "diagram": null },
        { "stepNumber": 2, "description": "Find half of the unit.", "workingLatex": "\\dfrac{5}{2} = 2.5", "explanation": "The interval reaches half of five, which is $2.5$, either side.", "diagram": null },
        { "stepNumber": 3, "description": "Work out the lower bound.", "workingLatex": "25 - 2.5 = 22.5", "explanation": "The smallest value that rounds to $25$ is $22.5$.", "diagram": null },
        { "stepNumber": 4, "description": "Work out the upper bound.", "workingLatex": "25 + 2.5 = 27.5", "explanation": "At $27.5$ the value would round up to $30$.", "diagram": null },
        { "stepNumber": 5, "description": "Choose the inequality signs.", "workingLatex": "22.5 \\leq x < 27.5", "explanation": "The lower bound is included and the upper bound is not.", "diagram": null },
        { "stepNumber": 6, "description": "State the error interval.", "workingLatex": "22.5 \\leq x < 27.5", "explanation": "So the error interval is $22.5 \\leq x < 27.5$.", "diagram": null }
      ],
      "finalAnswer": "$22.5 \\leq x < 27.5$"
    }
  },
  {
    "id": "gcse.number.error-intervals.q031",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Error intervals",
    "subtopicId": "gcse.number.error-intervals",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "inequality",
    "tags": ["error intervals", "nearest 2", "bounds"],
    "questionText": "A number $x$ has been rounded to the nearest $2$ to give $10$. Write down the error interval for $x$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Identify the rounding unit.", "workingLatex": "\\text{unit} = 2", "explanation": "The number was rounded to the nearest two.", "diagram": null },
        { "stepNumber": 2, "description": "Find half of the unit.", "workingLatex": "\\dfrac{2}{2} = 1", "explanation": "The interval reaches one either side.", "diagram": null },
        { "stepNumber": 3, "description": "Work out the lower bound.", "workingLatex": "10 - 1 = 9", "explanation": "The smallest value that rounds to $10$ is $9$.", "diagram": null },
        { "stepNumber": 4, "description": "Work out the upper bound.", "workingLatex": "10 + 1 = 11", "explanation": "At $11$ the value would round up to $12$.", "diagram": null },
        { "stepNumber": 5, "description": "Choose the inequality signs.", "workingLatex": "9 \\leq x < 11", "explanation": "The lower bound is included and the upper bound is not.", "diagram": null },
        { "stepNumber": 6, "description": "State the error interval.", "workingLatex": "9 \\leq x < 11", "explanation": "So the error interval is $9 \\leq x < 11$.", "diagram": null }
      ],
      "finalAnswer": "$9 \\leq x < 11$"
    }
  },
  {
    "id": "gcse.number.error-intervals.q032",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Error intervals",
    "subtopicId": "gcse.number.error-intervals",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "inequality",
    "tags": ["error intervals", "nearest 50", "bounds"],
    "questionText": "A number $x$ has been rounded to the nearest $50$ to give $300$. Write down the error interval for $x$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Identify the rounding unit.", "workingLatex": "\\text{unit} = 50", "explanation": "The number was rounded to the nearest fifty.", "diagram": null },
        { "stepNumber": 2, "description": "Find half of the unit.", "workingLatex": "\\dfrac{50}{2} = 25", "explanation": "The interval reaches twenty-five either side.", "diagram": null },
        { "stepNumber": 3, "description": "Work out the lower bound.", "workingLatex": "300 - 25 = 275", "explanation": "The smallest value that rounds to $300$ is $275$.", "diagram": null },
        { "stepNumber": 4, "description": "Work out the upper bound.", "workingLatex": "300 + 25 = 325", "explanation": "At $325$ the value would round up to $350$.", "diagram": null },
        { "stepNumber": 5, "description": "Choose the inequality signs.", "workingLatex": "275 \\leq x < 325", "explanation": "The lower bound is included and the upper bound is not.", "diagram": null },
        { "stepNumber": 6, "description": "State the error interval.", "workingLatex": "275 \\leq x < 325", "explanation": "So the error interval is $275 \\leq x < 325$.", "diagram": null }
      ],
      "finalAnswer": "$275 \\leq x < 325$"
    }
  },
  {
    "id": "gcse.number.error-intervals.q033",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Error intervals",
    "subtopicId": "gcse.number.error-intervals",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "inequality",
    "tags": ["error intervals", "measurement", "bounds", "context"],
    "questionText": "A length is measured as $12\\text{ cm}$ to the nearest centimetre. Write down the lower and upper bounds of the length.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "State the accuracy.", "workingLatex": "12\\text{ cm to nearest cm}", "explanation": "The measurement was rounded to the nearest whole centimetre.", "diagram": null },
        { "stepNumber": 2, "description": "Find half of the unit.", "workingLatex": "\\dfrac{1}{2} = 0.5", "explanation": "The true length can be up to half a centimetre either side.", "diagram": null },
        { "stepNumber": 3, "description": "Work out the lower bound.", "workingLatex": "12 - 0.5 = 11.5\\text{ cm}", "explanation": "The lower bound is the smallest length that rounds to $12$ cm.", "diagram": null },
        { "stepNumber": 4, "description": "Work out the upper bound.", "workingLatex": "12 + 0.5 = 12.5\\text{ cm}", "explanation": "The upper bound is where the length would start rounding to $13$ cm.", "diagram": null },
        { "stepNumber": 5, "description": "State the bounds clearly.", "workingLatex": "\\text{lower} = 11.5, \\; \\text{upper} = 12.5", "explanation": "These are the smallest and largest possible true lengths.", "diagram": null },
        { "stepNumber": 6, "description": "Write the interval.", "workingLatex": "11.5 \\leq L < 12.5", "explanation": "As an interval, the length satisfies $11.5 \\leq L < 12.5$.", "diagram": null },
        { "stepNumber": 7, "description": "State the answer.", "workingLatex": "11.5\\text{ cm and } 12.5\\text{ cm}", "explanation": "So the lower bound is $11.5$ cm and the upper bound is $12.5$ cm.", "diagram": null }
      ],
      "finalAnswer": "Lower $11.5\\text{ cm}$, upper $12.5\\text{ cm}$"
    }
  },
  {
    "id": "gcse.number.error-intervals.q034",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Error intervals",
    "subtopicId": "gcse.number.error-intervals",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "inequality",
    "tags": ["error intervals", "3 significant figures", "bounds"],
    "questionText": "A number $x$ has been rounded to $3$ significant figures to give $4.56$. Write down the error interval for $x$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Find the place of the last significant figure.", "workingLatex": "4.56 \\to \\text{3rd s.f. is hundredths}", "explanation": "The third significant figure, the $6$, is in the hundredths column.", "diagram": null },
        { "stepNumber": 2, "description": "Identify the rounding unit.", "workingLatex": "\\text{unit} = 0.01", "explanation": "So the number was rounded to the nearest hundredth.", "diagram": null },
        { "stepNumber": 3, "description": "Find half of the unit.", "workingLatex": "\\dfrac{0.01}{2} = 0.005", "explanation": "The interval reaches $0.005$ either side.", "diagram": null },
        { "stepNumber": 4, "description": "Work out the lower bound.", "workingLatex": "4.56 - 0.005 = 4.555", "explanation": "The smallest value that rounds to $4.56$ is $4.555$.", "diagram": null },
        { "stepNumber": 5, "description": "Work out the upper bound.", "workingLatex": "4.56 + 0.005 = 4.565", "explanation": "At $4.565$ the value would round up to $4.57$.", "diagram": null },
        { "stepNumber": 6, "description": "Choose the inequality signs.", "workingLatex": "4.555 \\leq x < 4.565", "explanation": "The lower bound is included and the upper bound is not.", "diagram": null },
        { "stepNumber": 7, "description": "State the error interval.", "workingLatex": "4.555 \\leq x < 4.565", "explanation": "So the error interval is $4.555 \\leq x < 4.565$.", "diagram": null }
      ],
      "finalAnswer": "$4.555 \\leq x < 4.565$"
    }
  },
  {
    "id": "gcse.number.error-intervals.q035",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Error intervals",
    "subtopicId": "gcse.number.error-intervals",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "inequality",
    "tags": ["error intervals", "significant figures", "2 sf", "bounds"],
    "questionText": "A number $x$ has been rounded to $2$ significant figures to give $12\\,000$. Write down the error interval for $x$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Find the place of the last significant figure.", "workingLatex": "12\\,000 \\to \\text{2nd s.f. is thousands}", "explanation": "The second significant figure, the $2$, is in the thousands column.", "diagram": null },
        { "stepNumber": 2, "description": "Identify the rounding unit.", "workingLatex": "\\text{unit} = 1000", "explanation": "So the number was rounded to the nearest thousand.", "diagram": null },
        { "stepNumber": 3, "description": "Find half of the unit.", "workingLatex": "\\dfrac{1000}{2} = 500", "explanation": "The interval reaches five hundred either side.", "diagram": null },
        { "stepNumber": 4, "description": "Work out the lower bound.", "workingLatex": "12\\,000 - 500 = 11\\,500", "explanation": "The smallest value that rounds to $12\\,000$ is $11\\,500$.", "diagram": null },
        { "stepNumber": 5, "description": "Work out the upper bound.", "workingLatex": "12\\,000 + 500 = 12\\,500", "explanation": "At $12\\,500$ the value would round up to $13\\,000$.", "diagram": null },
        { "stepNumber": 6, "description": "Choose the inequality signs.", "workingLatex": "11\\,500 \\leq x < 12\\,500", "explanation": "The lower bound is included and the upper bound is not.", "diagram": null },
        { "stepNumber": 7, "description": "State the error interval.", "workingLatex": "11\\,500 \\leq x < 12\\,500", "explanation": "So the error interval is $11\\,500 \\leq x < 12\\,500$.", "diagram": null }
      ],
      "finalAnswer": "$11\\,500 \\leq x < 12\\,500$"
    }
  },
  {
    "id": "gcse.number.error-intervals.q036",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Error intervals",
    "subtopicId": "gcse.number.error-intervals",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "inequality",
    "tags": ["error intervals", "1 decimal place", "bounds"],
    "questionText": "A number $x$ has been rounded to $1$ decimal place to give $10.0$. Write down the error interval for $x$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Identify the rounding unit.", "workingLatex": "1\\text{ dp} \\Rightarrow 0.1", "explanation": "One decimal place means the rounding unit is $0.1$.", "diagram": null },
        { "stepNumber": 2, "description": "Find half of the unit.", "workingLatex": "\\dfrac{0.1}{2} = 0.05", "explanation": "The interval reaches $0.05$ either side.", "diagram": null },
        { "stepNumber": 3, "description": "Work out the lower bound.", "workingLatex": "10.0 - 0.05 = 9.95", "explanation": "The smallest value that rounds to $10.0$ is $9.95$.", "diagram": null },
        { "stepNumber": 4, "description": "Work out the upper bound.", "workingLatex": "10.0 + 0.05 = 10.05", "explanation": "At $10.05$ the value would round up to $10.1$.", "diagram": null },
        { "stepNumber": 5, "description": "Choose the inequality signs.", "workingLatex": "9.95 \\leq x < 10.05", "explanation": "The lower bound is included and the upper bound is not.", "diagram": null },
        { "stepNumber": 6, "description": "State the error interval.", "workingLatex": "9.95 \\leq x < 10.05", "explanation": "So the error interval is $9.95 \\leq x < 10.05$.", "diagram": null }
      ],
      "finalAnswer": "$9.95 \\leq x < 10.05$"
    }
  },
  {
    "id": "gcse.number.error-intervals.q037",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Error intervals",
    "subtopicId": "gcse.number.error-intervals",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "inequality",
    "tags": ["error intervals", "truncation", "2 decimal places", "bounds"],
    "questionText": "A number $x$ has been truncated to $2$ decimal places to give $3.14$. Write down the error interval for $x$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall what truncation does.", "workingLatex": "\\text{truncate} = \\text{cut off, never round up}", "explanation": "Truncating removes the later digits without rounding up.", "diagram": null },
        { "stepNumber": 2, "description": "Find the lower bound.", "workingLatex": "x \\geq 3.14", "explanation": "Any value from $3.14$ upwards keeps $3.14$ after cutting off.", "diagram": null },
        { "stepNumber": 3, "description": "Think about the largest value.", "workingLatex": "\\text{just below } 3.15", "explanation": "As soon as the value reaches $3.15$, truncation would give $3.15$.", "diagram": null },
        { "stepNumber": 4, "description": "Find the upper bound.", "workingLatex": "x < 3.15", "explanation": "So the value must be less than $3.15$.", "diagram": null },
        { "stepNumber": 5, "description": "Combine the bounds.", "workingLatex": "3.14 \\leq x < 3.15", "explanation": "The lower bound is included and the upper bound is not.", "diagram": null },
        { "stepNumber": 6, "description": "State the error interval.", "workingLatex": "3.14 \\leq x < 3.15", "explanation": "So the error interval is $3.14 \\leq x < 3.15$.", "diagram": null }
      ],
      "finalAnswer": "$3.14 \\leq x < 3.15$"
    }
  },
  {
    "id": "gcse.number.error-intervals.q038",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Error intervals",
    "subtopicId": "gcse.number.error-intervals",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "inequality",
    "tags": ["error intervals", "nearest 0.5", "bounds"],
    "questionText": "A number $x$ has been rounded to the nearest $0.5$ to give $6.5$. Write down the error interval for $x$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Identify the rounding unit.", "workingLatex": "\\text{unit} = 0.5", "explanation": "The number was rounded to the nearest half.", "diagram": null },
        { "stepNumber": 2, "description": "Find half of the unit.", "workingLatex": "\\dfrac{0.5}{2} = 0.25", "explanation": "The interval reaches $0.25$ either side.", "diagram": null },
        { "stepNumber": 3, "description": "Work out the lower bound.", "workingLatex": "6.5 - 0.25 = 6.25", "explanation": "The smallest value that rounds to $6.5$ is $6.25$.", "diagram": null },
        { "stepNumber": 4, "description": "Work out the upper bound.", "workingLatex": "6.5 + 0.25 = 6.75", "explanation": "At $6.75$ the value would round up to $7.0$.", "diagram": null },
        { "stepNumber": 5, "description": "Choose the inequality signs.", "workingLatex": "6.25 \\leq x < 6.75", "explanation": "The lower bound is included and the upper bound is not.", "diagram": null },
        { "stepNumber": 6, "description": "State the error interval.", "workingLatex": "6.25 \\leq x < 6.75", "explanation": "So the error interval is $6.25 \\leq x < 6.75$.", "diagram": null }
      ],
      "finalAnswer": "$6.25 \\leq x < 6.75$"
    }
  },
  {
    "id": "gcse.number.error-intervals.q039",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Error intervals",
    "subtopicId": "gcse.number.error-intervals",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "inequality",
    "tags": ["error intervals", "measurement", "1 decimal place", "context"],
    "questionText": "The mass of a parcel is $4.5\\text{ kg}$ to $1$ decimal place. Write down the error interval for the mass $m$, and state the upper bound.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Identify the rounding unit.", "workingLatex": "1\\text{ dp} \\Rightarrow 0.1", "explanation": "The mass was rounded to one decimal place, so the unit is $0.1$ kg.", "diagram": null },
        { "stepNumber": 2, "description": "Find half of the unit.", "workingLatex": "\\dfrac{0.1}{2} = 0.05", "explanation": "The true mass can be up to $0.05$ kg either side.", "diagram": null },
        { "stepNumber": 3, "description": "Work out the lower bound.", "workingLatex": "4.5 - 0.05 = 4.45\\text{ kg}", "explanation": "The lower bound is the smallest mass that rounds to $4.5$ kg.", "diagram": null },
        { "stepNumber": 4, "description": "Work out the upper bound.", "workingLatex": "4.5 + 0.05 = 4.55\\text{ kg}", "explanation": "The upper bound is where the mass would begin rounding to $4.6$ kg.", "diagram": null },
        { "stepNumber": 5, "description": "Write the interval.", "workingLatex": "4.45 \\leq m < 4.55", "explanation": "The lower bound is included and the upper bound is not.", "diagram": null },
        { "stepNumber": 6, "description": "State the upper bound.", "workingLatex": "\\text{upper bound} = 4.55\\text{ kg}", "explanation": "The upper bound is $4.55$ kg.", "diagram": null },
        { "stepNumber": 7, "description": "State the full answer.", "workingLatex": "4.45 \\leq m < 4.55", "explanation": "So $4.45 \\leq m < 4.55$ and the upper bound is $4.55$ kg.", "diagram": null }
      ],
      "finalAnswer": "$4.45 \\leq m < 4.55$; upper bound $4.55\\text{ kg}$"
    }
  },
  {
    "id": "gcse.number.error-intervals.q040",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Error intervals",
    "subtopicId": "gcse.number.error-intervals",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "inequality",
    "tags": ["error intervals", "nearest 5", "bounds"],
    "questionText": "A number $x$ has been rounded to the nearest $5$ to give $40$. Write down the error interval for $x$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Identify the rounding unit.", "workingLatex": "\\text{unit} = 5", "explanation": "The number was rounded to the nearest five.", "diagram": null },
        { "stepNumber": 2, "description": "Find half of the unit.", "workingLatex": "\\dfrac{5}{2} = 2.5", "explanation": "The interval reaches $2.5$ either side.", "diagram": null },
        { "stepNumber": 3, "description": "Work out the lower bound.", "workingLatex": "40 - 2.5 = 37.5", "explanation": "The smallest value that rounds to $40$ is $37.5$.", "diagram": null },
        { "stepNumber": 4, "description": "Work out the upper bound.", "workingLatex": "40 + 2.5 = 42.5", "explanation": "At $42.5$ the value would round up to $45$.", "diagram": null },
        { "stepNumber": 5, "description": "Choose the inequality signs.", "workingLatex": "37.5 \\leq x < 42.5", "explanation": "The lower bound is included and the upper bound is not.", "diagram": null },
        { "stepNumber": 6, "description": "State the error interval.", "workingLatex": "37.5 \\leq x < 42.5", "explanation": "So the error interval is $37.5 \\leq x < 42.5$.", "diagram": null }
      ],
      "finalAnswer": "$37.5 \\leq x < 42.5$"
    }
  },
  {
    "id": "gcse.number.error-intervals.q041",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Error intervals",
    "subtopicId": "gcse.number.error-intervals",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "inequality",
    "tags": ["error intervals", "3 significant figures", "bounds"],
    "questionText": "A number $x$ has been rounded to $3$ significant figures to give $20.5$. Write down the error interval for $x$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Find the place of the last significant figure.", "workingLatex": "20.5 \\to \\text{3rd s.f. is tenths}", "explanation": "The third significant figure, the $5$, is in the tenths column.", "diagram": null },
        { "stepNumber": 2, "description": "Identify the rounding unit.", "workingLatex": "\\text{unit} = 0.1", "explanation": "So the number was rounded to the nearest tenth.", "diagram": null },
        { "stepNumber": 3, "description": "Find half of the unit.", "workingLatex": "\\dfrac{0.1}{2} = 0.05", "explanation": "The interval reaches $0.05$ either side.", "diagram": null },
        { "stepNumber": 4, "description": "Work out the lower bound.", "workingLatex": "20.5 - 0.05 = 20.45", "explanation": "The smallest value that rounds to $20.5$ is $20.45$.", "diagram": null },
        { "stepNumber": 5, "description": "Work out the upper bound.", "workingLatex": "20.5 + 0.05 = 20.55", "explanation": "At $20.55$ the value would round up to $20.6$.", "diagram": null },
        { "stepNumber": 6, "description": "Choose the inequality signs.", "workingLatex": "20.45 \\leq x < 20.55", "explanation": "The lower bound is included and the upper bound is not.", "diagram": null },
        { "stepNumber": 7, "description": "State the error interval.", "workingLatex": "20.45 \\leq x < 20.55", "explanation": "So the error interval is $20.45 \\leq x < 20.55$.", "diagram": null }
      ],
      "finalAnswer": "$20.45 \\leq x < 20.55$"
    }
  },
  {
    "id": "gcse.number.error-intervals.q042",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Error intervals",
    "subtopicId": "gcse.number.error-intervals",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "inequality",
    "tags": ["error intervals", "truncation", "1 decimal place", "bounds"],
    "questionText": "A number $x$ has been truncated to $1$ decimal place to give $0.7$. Write down the error interval for $x$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall what truncation does.", "workingLatex": "\\text{truncate} = \\text{cut off, never round up}", "explanation": "Truncating removes the later digits without rounding up.", "diagram": null },
        { "stepNumber": 2, "description": "Find the lower bound.", "workingLatex": "x \\geq 0.7", "explanation": "Any value from $0.7$ upwards keeps $0.7$ after cutting off.", "diagram": null },
        { "stepNumber": 3, "description": "Think about the largest value.", "workingLatex": "\\text{just below } 0.8", "explanation": "As soon as the value reaches $0.8$, truncation would give $0.8$.", "diagram": null },
        { "stepNumber": 4, "description": "Find the upper bound.", "workingLatex": "x < 0.8", "explanation": "So the value must be less than $0.8$.", "diagram": null },
        { "stepNumber": 5, "description": "Combine the bounds.", "workingLatex": "0.7 \\leq x < 0.8", "explanation": "The lower bound is included and the upper bound is not.", "diagram": null },
        { "stepNumber": 6, "description": "State the error interval.", "workingLatex": "0.7 \\leq x < 0.8", "explanation": "So the error interval is $0.7 \\leq x < 0.8$.", "diagram": null }
      ],
      "finalAnswer": "$0.7 \\leq x < 0.8$"
    }
  },
  {
    "id": "gcse.number.error-intervals.q043",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Error intervals",
    "subtopicId": "gcse.number.error-intervals",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "inequality",
    "tags": ["error intervals", "nearest 25", "bounds"],
    "questionText": "A number $x$ has been rounded to the nearest $25$ to give $100$. Write down the error interval for $x$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Identify the rounding unit.", "workingLatex": "\\text{unit} = 25", "explanation": "The number was rounded to the nearest twenty-five.", "diagram": null },
        { "stepNumber": 2, "description": "Find half of the unit.", "workingLatex": "\\dfrac{25}{2} = 12.5", "explanation": "The interval reaches $12.5$ either side.", "diagram": null },
        { "stepNumber": 3, "description": "Work out the lower bound.", "workingLatex": "100 - 12.5 = 87.5", "explanation": "The smallest value that rounds to $100$ is $87.5$.", "diagram": null },
        { "stepNumber": 4, "description": "Work out the upper bound.", "workingLatex": "100 + 12.5 = 112.5", "explanation": "At $112.5$ the value would round up to $125$.", "diagram": null },
        { "stepNumber": 5, "description": "Choose the inequality signs.", "workingLatex": "87.5 \\leq x < 112.5", "explanation": "The lower bound is included and the upper bound is not.", "diagram": null },
        { "stepNumber": 6, "description": "State the error interval.", "workingLatex": "87.5 \\leq x < 112.5", "explanation": "So the error interval is $87.5 \\leq x < 112.5$.", "diagram": null }
      ],
      "finalAnswer": "$87.5 \\leq x < 112.5$"
    }
  },
  {
    "id": "gcse.number.error-intervals.q044",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Error intervals",
    "subtopicId": "gcse.number.error-intervals",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "inequality",
    "tags": ["error intervals", "2 decimal places", "bounds"],
    "questionText": "A number $x$ has been rounded to $2$ decimal places to give $5.00$. Write down the error interval for $x$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Identify the rounding unit.", "workingLatex": "2\\text{ dp} \\Rightarrow 0.01", "explanation": "Two decimal places means the rounding unit is $0.01$.", "diagram": null },
        { "stepNumber": 2, "description": "Find half of the unit.", "workingLatex": "\\dfrac{0.01}{2} = 0.005", "explanation": "The interval reaches $0.005$ either side.", "diagram": null },
        { "stepNumber": 3, "description": "Work out the lower bound.", "workingLatex": "5.00 - 0.005 = 4.995", "explanation": "The smallest value that rounds to $5.00$ is $4.995$.", "diagram": null },
        { "stepNumber": 4, "description": "Work out the upper bound.", "workingLatex": "5.00 + 0.005 = 5.005", "explanation": "At $5.005$ the value would round up to $5.01$.", "diagram": null },
        { "stepNumber": 5, "description": "Choose the inequality signs.", "workingLatex": "4.995 \\leq x < 5.005", "explanation": "The lower bound is included and the upper bound is not.", "diagram": null },
        { "stepNumber": 6, "description": "State the error interval.", "workingLatex": "4.995 \\leq x < 5.005", "explanation": "So the error interval is $4.995 \\leq x < 5.005$.", "diagram": null }
      ],
      "finalAnswer": "$4.995 \\leq x < 5.005$"
    }
  },
  {
    "id": "gcse.number.error-intervals.q045",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Error intervals",
    "subtopicId": "gcse.number.error-intervals",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "inequality",
    "tags": ["error intervals", "measurement", "nearest 10", "context"],
    "questionText": "A car's speed is recorded as $60\\text{ mph}$ to the nearest $10\\text{ mph}$. Write down the lower and upper bounds of the speed $v$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Identify the rounding unit.", "workingLatex": "\\text{unit} = 10", "explanation": "The speed was rounded to the nearest ten mph.", "diagram": null },
        { "stepNumber": 2, "description": "Find half of the unit.", "workingLatex": "\\dfrac{10}{2} = 5", "explanation": "The true speed can be up to five mph either side.", "diagram": null },
        { "stepNumber": 3, "description": "Work out the lower bound.", "workingLatex": "60 - 5 = 55\\text{ mph}", "explanation": "The lower bound is the smallest speed that rounds to $60$ mph.", "diagram": null },
        { "stepNumber": 4, "description": "Work out the upper bound.", "workingLatex": "60 + 5 = 65\\text{ mph}", "explanation": "The upper bound is where the speed would begin rounding to $70$ mph.", "diagram": null },
        { "stepNumber": 5, "description": "Write the interval.", "workingLatex": "55 \\leq v < 65", "explanation": "The lower bound is included and the upper bound is not.", "diagram": null },
        { "stepNumber": 6, "description": "State the bounds.", "workingLatex": "\\text{lower} = 55, \\; \\text{upper} = 65", "explanation": "So the lower bound is $55$ mph and the upper bound is $65$ mph.", "diagram": null }
      ],
      "finalAnswer": "Lower $55\\text{ mph}$, upper $65\\text{ mph}$"
    }
  },
  {
    "id": "gcse.number.error-intervals.q046",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Error intervals",
    "subtopicId": "gcse.number.error-intervals",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "inequality",
    "tags": ["error intervals", "significant figures", "1 sf", "small decimals"],
    "questionText": "A number $x$ has been rounded to $1$ significant figure to give $0.008$. Write down the error interval for $x$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Find the place of the significant figure.", "workingLatex": "0.008 \\to \\text{1st s.f. is thousandths}", "explanation": "The single significant figure, the $8$, is in the thousandths column.", "diagram": null },
        { "stepNumber": 2, "description": "Identify the rounding unit.", "workingLatex": "\\text{unit} = 0.001", "explanation": "So the number was rounded to the nearest thousandth.", "diagram": null },
        { "stepNumber": 3, "description": "Find half of the unit.", "workingLatex": "\\dfrac{0.001}{2} = 0.0005", "explanation": "The interval reaches $0.0005$ either side.", "diagram": null },
        { "stepNumber": 4, "description": "Work out the lower bound.", "workingLatex": "0.008 - 0.0005 = 0.0075", "explanation": "The smallest value that rounds to $0.008$ is $0.0075$.", "diagram": null },
        { "stepNumber": 5, "description": "Work out the upper bound.", "workingLatex": "0.008 + 0.0005 = 0.0085", "explanation": "At $0.0085$ the value would round up to $0.009$.", "diagram": null },
        { "stepNumber": 6, "description": "Choose the inequality signs.", "workingLatex": "0.0075 \\leq x < 0.0085", "explanation": "The lower bound is included and the upper bound is not.", "diagram": null },
        { "stepNumber": 7, "description": "State the error interval.", "workingLatex": "0.0075 \\leq x < 0.0085", "explanation": "So the error interval is $0.0075 \\leq x < 0.0085$.", "diagram": null }
      ],
      "finalAnswer": "$0.0075 \\leq x < 0.0085$"
    }
  },
  {
    "id": "gcse.number.error-intervals.q047",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Error intervals",
    "subtopicId": "gcse.number.error-intervals",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "inequality",
    "tags": ["error intervals", "nearest 2", "bounds"],
    "questionText": "A number $x$ has been rounded to the nearest $2$ to give $16$. Write down the error interval for $x$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Identify the rounding unit.", "workingLatex": "\\text{unit} = 2", "explanation": "The number was rounded to the nearest two.", "diagram": null },
        { "stepNumber": 2, "description": "Find half of the unit.", "workingLatex": "\\dfrac{2}{2} = 1", "explanation": "The interval reaches one either side.", "diagram": null },
        { "stepNumber": 3, "description": "Work out the lower bound.", "workingLatex": "16 - 1 = 15", "explanation": "The smallest value that rounds to $16$ is $15$.", "diagram": null },
        { "stepNumber": 4, "description": "Work out the upper bound.", "workingLatex": "16 + 1 = 17", "explanation": "At $17$ the value would round up to $18$.", "diagram": null },
        { "stepNumber": 5, "description": "Choose the inequality signs.", "workingLatex": "15 \\leq x < 17", "explanation": "The lower bound is included and the upper bound is not.", "diagram": null },
        { "stepNumber": 6, "description": "State the error interval.", "workingLatex": "15 \\leq x < 17", "explanation": "So the error interval is $15 \\leq x < 17$.", "diagram": null }
      ],
      "finalAnswer": "$15 \\leq x < 17$"
    }
  },
  {
    "id": "gcse.number.error-intervals.q048",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Error intervals",
    "subtopicId": "gcse.number.error-intervals",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "inequality",
    "tags": ["error intervals", "significant figures", "3 sf", "bounds"],
    "questionText": "A number $x$ has been rounded to $3$ significant figures to give $3450$. Write down the error interval for $x$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Find the place of the last significant figure.", "workingLatex": "3450 \\to \\text{3rd s.f. is tens}", "explanation": "Counting from the left, the digits $3$, $4$, $5$ are significant, so the last one, the $5$, is in the tens column.", "diagram": null },
        { "stepNumber": 2, "description": "Identify the rounding unit.", "workingLatex": "\\text{unit} = 10", "explanation": "So the number was rounded to the nearest ten.", "diagram": null },
        { "stepNumber": 3, "description": "Find half of the unit.", "workingLatex": "\\dfrac{10}{2} = 5", "explanation": "The interval reaches five either side.", "diagram": null },
        { "stepNumber": 4, "description": "Work out the lower bound.", "workingLatex": "3450 - 5 = 3445", "explanation": "The smallest value that rounds to $3450$ is $3445$.", "diagram": null },
        { "stepNumber": 5, "description": "Work out the upper bound.", "workingLatex": "3450 + 5 = 3455", "explanation": "At $3455$ the value would round up to $3460$.", "diagram": null },
        { "stepNumber": 6, "description": "Choose the inequality signs.", "workingLatex": "3445 \\leq x < 3455", "explanation": "The lower bound is included and the upper bound is not.", "diagram": null },
        { "stepNumber": 7, "description": "State the error interval.", "workingLatex": "3445 \\leq x < 3455", "explanation": "So the error interval is $3445 \\leq x < 3455$.", "diagram": null }
      ],
      "finalAnswer": "$3445 \\leq x < 3455$"
    }
  },
  {
    "id": "gcse.number.error-intervals.q049",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Error intervals",
    "subtopicId": "gcse.number.error-intervals",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "inequality",
    "tags": ["error intervals", "truncation", "nearest 10", "bounds"],
    "questionText": "A number $x$ has been truncated to the nearest $10$ to give $40$. Write down the error interval for $x$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall what truncation does.", "workingLatex": "\\text{truncate} = \\text{round down to the ten}", "explanation": "Truncating to the nearest ten drops everything below the tens digit without rounding up.", "diagram": null },
        { "stepNumber": 2, "description": "Find the lower bound.", "workingLatex": "x \\geq 40", "explanation": "Any value from $40$ upwards truncates down to $40$.", "diagram": null },
        { "stepNumber": 3, "description": "Think about the largest value.", "workingLatex": "\\text{just below } 50", "explanation": "As soon as the value reaches $50$, truncation would give $50$.", "diagram": null },
        { "stepNumber": 4, "description": "Find the upper bound.", "workingLatex": "x < 50", "explanation": "So the value must be less than $50$.", "diagram": null },
        { "stepNumber": 5, "description": "Combine the bounds.", "workingLatex": "40 \\leq x < 50", "explanation": "The lower bound is included and the upper bound is not.", "diagram": null },
        { "stepNumber": 6, "description": "State the error interval.", "workingLatex": "40 \\leq x < 50", "explanation": "So the error interval is $40 \\leq x < 50$.", "diagram": null }
      ],
      "finalAnswer": "$40 \\leq x < 50$"
    }
  },
  {
    "id": "gcse.number.error-intervals.q050",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Error intervals",
    "subtopicId": "gcse.number.error-intervals",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "inequality",
    "tags": ["error intervals", "nearest 0.2", "bounds"],
    "questionText": "A number $x$ has been rounded to the nearest $0.2$ to give $3.4$. Write down the error interval for $x$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Identify the rounding unit.", "workingLatex": "\\text{unit} = 0.2", "explanation": "The number was rounded to the nearest $0.2$.", "diagram": null },
        { "stepNumber": 2, "description": "Find half of the unit.", "workingLatex": "\\dfrac{0.2}{2} = 0.1", "explanation": "The interval reaches $0.1$ either side.", "diagram": null },
        { "stepNumber": 3, "description": "Work out the lower bound.", "workingLatex": "3.4 - 0.1 = 3.3", "explanation": "The smallest value that rounds to $3.4$ is $3.3$.", "diagram": null },
        { "stepNumber": 4, "description": "Work out the upper bound.", "workingLatex": "3.4 + 0.1 = 3.5", "explanation": "At $3.5$ the value would round up to $3.6$.", "diagram": null },
        { "stepNumber": 5, "description": "Choose the inequality signs.", "workingLatex": "3.3 \\leq x < 3.5", "explanation": "The lower bound is included and the upper bound is not.", "diagram": null },
        { "stepNumber": 6, "description": "State the error interval.", "workingLatex": "3.3 \\leq x < 3.5", "explanation": "So the error interval is $3.3 \\leq x < 3.5$.", "diagram": null }
      ],
      "finalAnswer": "$3.3 \\leq x < 3.5$"
    }
  },
  {
    "id": "gcse.number.error-intervals.q051",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Error intervals",
    "subtopicId": "gcse.number.error-intervals",
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "numeric",
    "tags": ["error intervals", "upper bound", "area", "bounds calculation"],
    "questionText": "A rectangle has length $8\\text{ cm}$ and width $5\\text{ cm}$, each measured to the nearest centimetre. Calculate the upper bound for the area of the rectangle.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "State the accuracy of the measurements.", "workingLatex": "\\text{nearest cm} \\Rightarrow \\text{unit} = 1", "explanation": "Both measurements are rounded to the nearest centimetre.", "diagram": null },
        { "stepNumber": 2, "description": "Find half of the unit.", "workingLatex": "\\dfrac{1}{2} = 0.5", "explanation": "Each true measurement can be up to $0.5$ cm either side.", "diagram": null },
        { "stepNumber": 3, "description": "Find the bounds of the length.", "workingLatex": "7.5 \\leq L < 8.5", "explanation": "The length lies between $7.5$ cm and $8.5$ cm.", "diagram": null },
        { "stepNumber": 4, "description": "Find the bounds of the width.", "workingLatex": "4.5 \\leq W < 5.5", "explanation": "The width lies between $4.5$ cm and $5.5$ cm.", "diagram": null },
        { "stepNumber": 5, "description": "Decide which bounds give the largest area.", "workingLatex": "\\text{area} = L \\times W", "explanation": "Area increases when both length and width are as large as possible, so use both upper bounds.", "diagram": null },
        { "stepNumber": 6, "description": "Select the upper bounds.", "workingLatex": "L = 8.5, \\; W = 5.5", "explanation": "These are the largest possible values of each side.", "diagram": null },
        { "stepNumber": 7, "description": "Multiply to find the upper bound of the area.", "workingLatex": "8.5 \\times 5.5 = 46.75", "explanation": "Multiplying the two upper bounds gives the largest possible area.", "diagram": null },
        { "stepNumber": 8, "description": "Attach the units.", "workingLatex": "46.75\\text{ cm}^2", "explanation": "Area is measured in square centimetres.", "diagram": null },
        { "stepNumber": 9, "description": "State the answer.", "workingLatex": "\\text{upper bound} = 46.75\\text{ cm}^2", "explanation": "So the upper bound for the area is $46.75$ cm².", "diagram": null }
      ],
      "finalAnswer": "$46.75\\text{ cm}^2$"
    }
  },
  {
    "id": "gcse.number.error-intervals.q052",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Error intervals",
    "subtopicId": "gcse.number.error-intervals",
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "numeric",
    "tags": ["error intervals", "lower bound", "area", "bounds calculation"],
    "questionText": "A rectangle has length $8\\text{ cm}$ and width $5\\text{ cm}$, each measured to the nearest centimetre. Calculate the lower bound for the area of the rectangle.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "State the accuracy of the measurements.", "workingLatex": "\\text{nearest cm} \\Rightarrow \\text{unit} = 1", "explanation": "Both measurements are rounded to the nearest centimetre.", "diagram": null },
        { "stepNumber": 2, "description": "Find half of the unit.", "workingLatex": "\\dfrac{1}{2} = 0.5", "explanation": "Each true measurement can be up to $0.5$ cm either side.", "diagram": null },
        { "stepNumber": 3, "description": "Find the bounds of the length.", "workingLatex": "7.5 \\leq L < 8.5", "explanation": "The length lies between $7.5$ cm and $8.5$ cm.", "diagram": null },
        { "stepNumber": 4, "description": "Find the bounds of the width.", "workingLatex": "4.5 \\leq W < 5.5", "explanation": "The width lies between $4.5$ cm and $5.5$ cm.", "diagram": null },
        { "stepNumber": 5, "description": "Decide which bounds give the smallest area.", "workingLatex": "\\text{area} = L \\times W", "explanation": "Area is smallest when both length and width are as small as possible, so use both lower bounds.", "diagram": null },
        { "stepNumber": 6, "description": "Select the lower bounds.", "workingLatex": "L = 7.5, \\; W = 4.5", "explanation": "These are the smallest possible values of each side.", "diagram": null },
        { "stepNumber": 7, "description": "Multiply to find the lower bound of the area.", "workingLatex": "7.5 \\times 4.5 = 33.75", "explanation": "Multiplying the two lower bounds gives the smallest possible area.", "diagram": null },
        { "stepNumber": 8, "description": "Attach the units.", "workingLatex": "33.75\\text{ cm}^2", "explanation": "Area is measured in square centimetres.", "diagram": null },
        { "stepNumber": 9, "description": "State the answer.", "workingLatex": "\\text{lower bound} = 33.75\\text{ cm}^2", "explanation": "So the lower bound for the area is $33.75$ cm².", "diagram": null }
      ],
      "finalAnswer": "$33.75\\text{ cm}^2$"
    }
  },
  {
    "id": "gcse.number.error-intervals.q053",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Error intervals",
    "subtopicId": "gcse.number.error-intervals",
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "numeric",
    "tags": ["error intervals", "upper bound", "speed", "bounds calculation", "compound measure"],
    "questionText": "A car travels a distance of $100\\text{ m}$, measured to the nearest $10\\text{ m}$, in a time of $8\\text{ s}$, measured to the nearest second. Calculate the upper bound for the average speed. Use $\\text{speed} = \\dfrac{\\text{distance}}{\\text{time}}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Find the bounds of the distance.", "workingLatex": "\\text{half of }10 = 5", "explanation": "The distance is to the nearest $10$ m, so it can be $5$ m either side.", "diagram": null },
        { "stepNumber": 2, "description": "Write the distance interval.", "workingLatex": "95 \\leq d < 105", "explanation": "The true distance lies between $95$ m and $105$ m.", "diagram": null },
        { "stepNumber": 3, "description": "Find the bounds of the time.", "workingLatex": "\\text{half of }1 = 0.5", "explanation": "The time is to the nearest second, so it can be $0.5$ s either side.", "diagram": null },
        { "stepNumber": 4, "description": "Write the time interval.", "workingLatex": "7.5 \\leq t < 8.5", "explanation": "The true time lies between $7.5$ s and $8.5$ s.", "diagram": null },
        { "stepNumber": 5, "description": "Think about how to make speed largest.", "workingLatex": "\\text{speed} = \\dfrac{d}{t}", "explanation": "A fraction is largest when the top is as big as possible and the bottom as small as possible.", "diagram": null },
        { "stepNumber": 6, "description": "Choose the correct bounds.", "workingLatex": "d = 105, \\; t = 7.5", "explanation": "Use the upper bound of distance and the lower bound of time.", "diagram": null },
        { "stepNumber": 7, "description": "Substitute into the formula.", "workingLatex": "\\text{speed} = \\dfrac{105}{7.5}", "explanation": "This division gives the largest possible speed.", "diagram": null },
        { "stepNumber": 8, "description": "Carry out the division.", "workingLatex": "\\dfrac{105}{7.5} = 14", "explanation": "Dividing gives exactly $14$.", "diagram": null },
        { "stepNumber": 9, "description": "Attach the units.", "workingLatex": "14\\text{ m/s}", "explanation": "Speed is distance over time, so metres per second.", "diagram": null },
        { "stepNumber": 10, "description": "State the answer.", "workingLatex": "\\text{upper bound} = 14\\text{ m/s}", "explanation": "So the upper bound for the average speed is $14$ m/s.", "diagram": null }
      ],
      "finalAnswer": "$14\\text{ m/s}$"
    }
  },
  {
    "id": "gcse.number.error-intervals.q054",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Error intervals",
    "subtopicId": "gcse.number.error-intervals",
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "numeric",
    "tags": ["error intervals", "lower bound", "perimeter", "bounds calculation"],
    "questionText": "A rectangle has length $12\\text{ cm}$ and width $7\\text{ cm}$, each measured to the nearest centimetre. Calculate the lower bound for the perimeter of the rectangle.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "State the accuracy.", "workingLatex": "\\text{nearest cm} \\Rightarrow \\text{unit} = 1", "explanation": "Both measurements are to the nearest centimetre.", "diagram": null },
        { "stepNumber": 2, "description": "Find half of the unit.", "workingLatex": "\\dfrac{1}{2} = 0.5", "explanation": "Each measurement can be $0.5$ cm either side.", "diagram": null },
        { "stepNumber": 3, "description": "Find the bounds of the length.", "workingLatex": "11.5 \\leq L < 12.5", "explanation": "The length lies between $11.5$ cm and $12.5$ cm.", "diagram": null },
        { "stepNumber": 4, "description": "Find the bounds of the width.", "workingLatex": "6.5 \\leq W < 7.5", "explanation": "The width lies between $6.5$ cm and $7.5$ cm.", "diagram": null },
        { "stepNumber": 5, "description": "Recall the perimeter formula.", "workingLatex": "P = 2(L + W)", "explanation": "The perimeter is twice the sum of length and width.", "diagram": null },
        { "stepNumber": 6, "description": "Decide which bounds give the smallest perimeter.", "workingLatex": "\\text{use lower bounds}", "explanation": "The perimeter is smallest when both sides are as small as possible.", "diagram": null },
        { "stepNumber": 7, "description": "Select the lower bounds.", "workingLatex": "L = 11.5, \\; W = 6.5", "explanation": "These are the smallest possible values.", "diagram": null },
        { "stepNumber": 8, "description": "Add the sides.", "workingLatex": "11.5 + 6.5 = 18", "explanation": "First add the smallest length and width.", "diagram": null },
        { "stepNumber": 9, "description": "Multiply by two.", "workingLatex": "2 \\times 18 = 36", "explanation": "Doubling gives the full perimeter.", "diagram": null },
        { "stepNumber": 10, "description": "State the answer.", "workingLatex": "\\text{lower bound} = 36\\text{ cm}", "explanation": "So the lower bound for the perimeter is $36$ cm.", "diagram": null }
      ],
      "finalAnswer": "$36\\text{ cm}$"
    }
  },
  {
    "id": "gcse.number.error-intervals.q055",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Error intervals",
    "subtopicId": "gcse.number.error-intervals",
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "numeric",
    "tags": ["error intervals", "upper bound", "difference", "bounds calculation"],
    "questionText": "$A = 15.6$ and $B = 3.2$, each rounded to $1$ decimal place. Calculate the upper bound for $A - B$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Identify the rounding unit.", "workingLatex": "1\\text{ dp} \\Rightarrow 0.1", "explanation": "Both values are rounded to one decimal place, so the unit is $0.1$.", "diagram": null },
        { "stepNumber": 2, "description": "Find half of the unit.", "workingLatex": "\\dfrac{0.1}{2} = 0.05", "explanation": "Each value can be $0.05$ either side.", "diagram": null },
        { "stepNumber": 3, "description": "Find the bounds of $A$.", "workingLatex": "15.55 \\leq A < 15.65", "explanation": "The value of $A$ lies between $15.55$ and $15.65$.", "diagram": null },
        { "stepNumber": 4, "description": "Find the bounds of $B$.", "workingLatex": "3.15 \\leq B < 3.25", "explanation": "The value of $B$ lies between $3.15$ and $3.25$.", "diagram": null },
        { "stepNumber": 5, "description": "Think about how to make $A - B$ largest.", "workingLatex": "A - B \\text{ largest}", "explanation": "A difference is largest when $A$ is as big as possible and $B$ is as small as possible.", "diagram": null },
        { "stepNumber": 6, "description": "Choose the correct bounds.", "workingLatex": "A = 15.65, \\; B = 3.15", "explanation": "Use the upper bound of $A$ and the lower bound of $B$.", "diagram": null },
        { "stepNumber": 7, "description": "Subtract.", "workingLatex": "15.65 - 3.15 = 12.5", "explanation": "This gives the largest possible difference.", "diagram": null },
        { "stepNumber": 8, "description": "State the answer.", "workingLatex": "\\text{upper bound} = 12.5", "explanation": "So the upper bound for $A - B$ is $12.5$.", "diagram": null }
      ],
      "finalAnswer": "$12.5$"
    }
  },
  {
    "id": "gcse.number.error-intervals.q056",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Error intervals",
    "subtopicId": "gcse.number.error-intervals",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "numeric",
    "tags": ["error intervals", "upper bound", "density", "bounds calculation", "compound measure"],
    "questionText": "An object has mass $60\\text{ g}$, measured to the nearest $10\\text{ g}$, and volume $8\\text{ cm}^3$, measured to the nearest cm$^3$. Calculate the upper bound for its density, giving your answer to $3$ significant figures. Use $\\text{density} = \\dfrac{\\text{mass}}{\\text{volume}}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Find the bounds of the mass.", "workingLatex": "\\text{half of }10 = 5", "explanation": "The mass is to the nearest $10$ g, so it can be $5$ g either side.", "diagram": null },
        { "stepNumber": 2, "description": "Write the mass interval.", "workingLatex": "55 \\leq m < 65", "explanation": "The true mass lies between $55$ g and $65$ g.", "diagram": null },
        { "stepNumber": 3, "description": "Find the bounds of the volume.", "workingLatex": "\\text{half of }1 = 0.5", "explanation": "The volume is to the nearest cm³, so it can be $0.5$ cm³ either side.", "diagram": null },
        { "stepNumber": 4, "description": "Write the volume interval.", "workingLatex": "7.5 \\leq V < 8.5", "explanation": "The true volume lies between $7.5$ cm³ and $8.5$ cm³.", "diagram": null },
        { "stepNumber": 5, "description": "Think about how to make density largest.", "workingLatex": "\\text{density} = \\dfrac{m}{V}", "explanation": "A fraction is largest when the top is as big as possible and the bottom as small as possible.", "diagram": null },
        { "stepNumber": 6, "description": "Choose the correct bounds.", "workingLatex": "m = 65, \\; V = 7.5", "explanation": "Use the upper bound of mass and the lower bound of volume.", "diagram": null },
        { "stepNumber": 7, "description": "Substitute into the formula.", "workingLatex": "\\text{density} = \\dfrac{65}{7.5}", "explanation": "This gives the largest possible density.", "diagram": null },
        { "stepNumber": 8, "description": "Carry out the division.", "workingLatex": "\\dfrac{65}{7.5} = 8.6\\overline{6}", "explanation": "Dividing gives $8.666\\ldots$", "diagram": null },
        { "stepNumber": 9, "description": "Round to 3 significant figures.", "workingLatex": "8.6\\overline{6} \\approx 8.67", "explanation": "The fourth figure is $6$, so the third figure rounds up.", "diagram": null },
        { "stepNumber": 10, "description": "Attach the units.", "workingLatex": "8.67\\text{ g/cm}^3", "explanation": "Density is mass per unit volume.", "diagram": null },
        { "stepNumber": 11, "description": "State the answer.", "workingLatex": "\\text{upper bound} \\approx 8.67\\text{ g/cm}^3", "explanation": "So the upper bound for the density is about $8.67$ g/cm³.", "diagram": null }
      ],
      "finalAnswer": "$8.67\\text{ g/cm}^3$"
    }
  },
  {
    "id": "gcse.number.error-intervals.q057",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Error intervals",
    "subtopicId": "gcse.number.error-intervals",
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "numeric",
    "tags": ["error intervals", "upper bound", "sum", "bounds calculation"],
    "questionText": "Two parcels have masses $2.4\\text{ kg}$ and $1.7\\text{ kg}$, each measured to the nearest $0.1\\text{ kg}$. Calculate the upper bound for the total mass of the two parcels.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Identify the rounding unit.", "workingLatex": "\\text{nearest }0.1 \\Rightarrow \\text{unit} = 0.1", "explanation": "Both masses are given to the nearest $0.1$ kg.", "diagram": null },
        { "stepNumber": 2, "description": "Find half of the unit.", "workingLatex": "\\dfrac{0.1}{2} = 0.05", "explanation": "Each mass can be $0.05$ kg either side.", "diagram": null },
        { "stepNumber": 3, "description": "Find the bounds of the first mass.", "workingLatex": "2.35 \\leq m_1 < 2.45", "explanation": "The first parcel lies between $2.35$ kg and $2.45$ kg.", "diagram": null },
        { "stepNumber": 4, "description": "Find the bounds of the second mass.", "workingLatex": "1.65 \\leq m_2 < 1.75", "explanation": "The second parcel lies between $1.65$ kg and $1.75$ kg.", "diagram": null },
        { "stepNumber": 5, "description": "Think about how to make the total largest.", "workingLatex": "m_1 + m_2 \\text{ largest}", "explanation": "A sum is largest when both parts are as large as possible.", "diagram": null },
        { "stepNumber": 6, "description": "Choose the upper bounds.", "workingLatex": "m_1 = 2.45, \\; m_2 = 1.75", "explanation": "Use the upper bound of each mass.", "diagram": null },
        { "stepNumber": 7, "description": "Add the upper bounds.", "workingLatex": "2.45 + 1.75 = 4.2", "explanation": "This gives the largest possible total.", "diagram": null },
        { "stepNumber": 8, "description": "Attach the units.", "workingLatex": "4.2\\text{ kg}", "explanation": "The total mass is in kilograms.", "diagram": null },
        { "stepNumber": 9, "description": "State the answer.", "workingLatex": "\\text{upper bound} = 4.2\\text{ kg}", "explanation": "So the upper bound for the total mass is $4.2$ kg.", "diagram": null }
      ],
      "finalAnswer": "$4.2\\text{ kg}$"
    }
  },
  {
    "id": "gcse.number.error-intervals.q058",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Error intervals",
    "subtopicId": "gcse.number.error-intervals",
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "numeric",
    "tags": ["error intervals", "lower bound", "quotient", "bounds calculation"],
    "questionText": "$P = 48$, rounded to the nearest whole number, and $Q = 6$, rounded to the nearest whole number. Calculate the lower bound for $P \\div Q$, giving your answer as an exact decimal.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Identify the rounding unit.", "workingLatex": "\\text{nearest whole} \\Rightarrow \\text{unit} = 1", "explanation": "Both values are rounded to the nearest whole number.", "diagram": null },
        { "stepNumber": 2, "description": "Find half of the unit.", "workingLatex": "\\dfrac{1}{2} = 0.5", "explanation": "Each value can be $0.5$ either side.", "diagram": null },
        { "stepNumber": 3, "description": "Find the bounds of $P$.", "workingLatex": "47.5 \\leq P < 48.5", "explanation": "The value of $P$ lies between $47.5$ and $48.5$.", "diagram": null },
        { "stepNumber": 4, "description": "Find the bounds of $Q$.", "workingLatex": "5.5 \\leq Q < 6.5", "explanation": "The value of $Q$ lies between $5.5$ and $6.5$.", "diagram": null },
        { "stepNumber": 5, "description": "Think about how to make $P \\div Q$ smallest.", "workingLatex": "\\dfrac{P}{Q}\\text{ smallest}", "explanation": "A fraction is smallest when the top is as small as possible and the bottom as large as possible.", "diagram": null },
        { "stepNumber": 6, "description": "Choose the correct bounds.", "workingLatex": "P = 47.5, \\; Q = 6.5", "explanation": "Use the lower bound of $P$ and the upper bound of $Q$.", "diagram": null },
        { "stepNumber": 7, "description": "Substitute.", "workingLatex": "\\dfrac{47.5}{6.5}", "explanation": "This gives the smallest possible quotient.", "diagram": null },
        { "stepNumber": 8, "description": "Carry out the division.", "workingLatex": "\\dfrac{47.5}{6.5} = 7.3\\overline{076923}", "explanation": "Dividing gives $7.3076\\ldots$", "diagram": null },
        { "stepNumber": 9, "description": "Round sensibly.", "workingLatex": "\\approx 7.31", "explanation": "To 2 decimal places the lower bound is about $7.31$.", "diagram": null },
        { "stepNumber": 10, "description": "State the answer.", "workingLatex": "\\text{lower bound} \\approx 7.31", "explanation": "So the lower bound for $P \\div Q$ is about $7.31$.", "diagram": null }
      ],
      "finalAnswer": "$\\approx 7.31$"
    }
  },
  {
    "id": "gcse.number.error-intervals.q059",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Error intervals",
    "subtopicId": "gcse.number.error-intervals",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "numeric",
    "tags": ["error intervals", "suitable accuracy", "bounds calculation", "reasoning"],
    "questionText": "A field is a rectangle measuring $50\\text{ m}$ by $30\\text{ m}$, each to the nearest metre. By finding the bounds of the area, state the area of the field to a suitable degree of accuracy.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "State the accuracy.", "workingLatex": "\\text{nearest m} \\Rightarrow \\text{unit} = 1", "explanation": "Both measurements are to the nearest metre.", "diagram": null },
        { "stepNumber": 2, "description": "Find half of the unit.", "workingLatex": "\\dfrac{1}{2} = 0.5", "explanation": "Each length can be $0.5$ m either side.", "diagram": null },
        { "stepNumber": 3, "description": "Find the bounds of the length.", "workingLatex": "49.5 \\leq L < 50.5", "explanation": "The length lies between $49.5$ m and $50.5$ m.", "diagram": null },
        { "stepNumber": 4, "description": "Find the bounds of the width.", "workingLatex": "29.5 \\leq W < 30.5", "explanation": "The width lies between $29.5$ m and $30.5$ m.", "diagram": null },
        { "stepNumber": 5, "description": "Find the lower bound of the area.", "workingLatex": "49.5 \\times 29.5 = 1460.25", "explanation": "Use both lower bounds for the smallest area.", "diagram": null },
        { "stepNumber": 6, "description": "Find the upper bound of the area.", "workingLatex": "50.5 \\times 30.5 = 1540.25", "explanation": "Use both upper bounds for the largest area.", "diagram": null },
        { "stepNumber": 7, "description": "Compare the bounds.", "workingLatex": "1460.25 \\text{ to } 1540.25", "explanation": "The true area lies somewhere between these two values.", "diagram": null },
        { "stepNumber": 8, "description": "See which figures agree.", "workingLatex": "1\\underline{5}00 \\text{ vs } 1\\underline{4}60", "explanation": "The bounds do not even share the same first significant figure to full agreement, but both round to $1500$ to 2 s.f.", "diagram": null },
        { "stepNumber": 9, "description": "Round each bound to 2 s.f.", "workingLatex": "1460.25 \\approx 1500, \\; 1540.25 \\approx 1500", "explanation": "Both bounds agree when rounded to 2 significant figures.", "diagram": null },
        { "stepNumber": 10, "description": "Choose the suitable accuracy.", "workingLatex": "\\text{area} \\approx 1500\\text{ m}^2", "explanation": "Since both bounds round to the same value at 2 s.f., that is the sensible level of accuracy to quote.", "diagram": null },
        { "stepNumber": 11, "description": "State the answer.", "workingLatex": "\\text{area} \\approx 1500\\text{ m}^2", "explanation": "So a suitable value for the area is $1500$ m².", "diagram": null }
      ],
      "finalAnswer": "$\\approx 1500\\text{ m}^2$"
    }
  },
  {
    "id": "gcse.number.error-intervals.q060",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Error intervals",
    "subtopicId": "gcse.number.error-intervals",
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "numeric",
    "tags": ["error intervals", "lower bound", "difference", "bounds calculation"],
    "questionText": "A plank is $2.0\\text{ m}$ long to the nearest $0.1\\text{ m}$. A piece of length $0.75\\text{ m}$, measured to the nearest centimetre, is cut off. Calculate the lower bound for the length of plank remaining.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Find the bounds of the plank.", "workingLatex": "\\text{half of }0.1 = 0.05", "explanation": "The plank is to the nearest $0.1$ m, so it can be $0.05$ m either side.", "diagram": null },
        { "stepNumber": 2, "description": "Write the plank interval.", "workingLatex": "1.95 \\leq P < 2.05", "explanation": "The plank lies between $1.95$ m and $2.05$ m.", "diagram": null },
        { "stepNumber": 3, "description": "Convert the cut piece accuracy.", "workingLatex": "1\\text{ cm} = 0.01\\text{ m}", "explanation": "The piece is measured to the nearest centimetre, which is $0.01$ m.", "diagram": null },
        { "stepNumber": 4, "description": "Find the bounds of the cut piece.", "workingLatex": "\\text{half of }0.01 = 0.005", "explanation": "The piece can be $0.005$ m either side.", "diagram": null },
        { "stepNumber": 5, "description": "Write the cut piece interval.", "workingLatex": "0.745 \\leq C < 0.755", "explanation": "The cut piece lies between $0.745$ m and $0.755$ m.", "diagram": null },
        { "stepNumber": 6, "description": "Think about how to make the remainder smallest.", "workingLatex": "P - C \\text{ smallest}", "explanation": "The remaining length is smallest when the plank is shortest and the cut piece is longest.", "diagram": null },
        { "stepNumber": 7, "description": "Choose the correct bounds.", "workingLatex": "P = 1.95, \\; C = 0.755", "explanation": "Use the lower bound of the plank and the upper bound of the cut piece.", "diagram": null },
        { "stepNumber": 8, "description": "Subtract.", "workingLatex": "1.95 - 0.755 = 1.195", "explanation": "This gives the smallest possible remaining length.", "diagram": null },
        { "stepNumber": 9, "description": "Attach the units.", "workingLatex": "1.195\\text{ m}", "explanation": "The remaining length is in metres.", "diagram": null },
        { "stepNumber": 10, "description": "State the answer.", "workingLatex": "\\text{lower bound} = 1.195\\text{ m}", "explanation": "So the lower bound for the remaining length is $1.195$ m.", "diagram": null }
      ],
      "finalAnswer": "$1.195\\text{ m}$"
    }
  },
  {
    "id": "gcse.number.error-intervals.q061",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Error intervals",
    "subtopicId": "gcse.number.error-intervals",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "numeric",
    "tags": ["error intervals", "upper bound", "speed", "unit conversion", "compound measure"],
    "questionText": "A runner covers $400\\text{ m}$, measured to the nearest $10\\text{ m}$, in a time of $50\\text{ s}$, measured to the nearest second. Calculate the upper bound for the average speed in metres per second, giving your answer to $3$ significant figures.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Find the bounds of the distance.", "workingLatex": "\\text{half of }10 = 5", "explanation": "The distance is to the nearest $10$ m.", "diagram": null },
        { "stepNumber": 2, "description": "Write the distance interval.", "workingLatex": "395 \\leq d < 405", "explanation": "The distance lies between $395$ m and $405$ m.", "diagram": null },
        { "stepNumber": 3, "description": "Find the bounds of the time.", "workingLatex": "\\text{half of }1 = 0.5", "explanation": "The time is to the nearest second.", "diagram": null },
        { "stepNumber": 4, "description": "Write the time interval.", "workingLatex": "49.5 \\leq t < 50.5", "explanation": "The time lies between $49.5$ s and $50.5$ s.", "diagram": null },
        { "stepNumber": 5, "description": "Decide the bounds for maximum speed.", "workingLatex": "\\text{speed} = \\dfrac{d}{t}", "explanation": "For the largest speed use the biggest distance over the smallest time.", "diagram": null },
        { "stepNumber": 6, "description": "Choose the bounds.", "workingLatex": "d = 405, \\; t = 49.5", "explanation": "Upper bound of distance, lower bound of time.", "diagram": null },
        { "stepNumber": 7, "description": "Substitute.", "workingLatex": "\\text{speed} = \\dfrac{405}{49.5}", "explanation": "This gives the largest possible speed.", "diagram": null },
        { "stepNumber": 8, "description": "Carry out the division.", "workingLatex": "\\dfrac{405}{49.5} = 8.1818\\ldots", "explanation": "Dividing gives $8.1818\\ldots$", "diagram": null },
        { "stepNumber": 9, "description": "Round to 3 significant figures.", "workingLatex": "\\approx 8.18", "explanation": "The fourth figure is $1$, so the third figure stays as $8$.", "diagram": null },
        { "stepNumber": 10, "description": "Attach the units.", "workingLatex": "8.18\\text{ m/s}", "explanation": "Speed is in metres per second.", "diagram": null },
        { "stepNumber": 11, "description": "State the answer.", "workingLatex": "\\text{upper bound} \\approx 8.18\\text{ m/s}", "explanation": "So the upper bound for the speed is about $8.18$ m/s.", "diagram": null }
      ],
      "finalAnswer": "$8.18\\text{ m/s}$"
    }
  },
  {
    "id": "gcse.number.error-intervals.q062",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Error intervals",
    "subtopicId": "gcse.number.error-intervals",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "numeric",
    "tags": ["error intervals", "lower bound", "area", "circle", "bounds calculation"],
    "questionText": "A circle has radius $6\\text{ cm}$, measured to the nearest centimetre. Calculate the lower bound for the area of the circle, giving your answer to $3$ significant figures. Use $A = \\pi r^2$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "State the accuracy.", "workingLatex": "\\text{nearest cm} \\Rightarrow \\text{unit} = 1", "explanation": "The radius is to the nearest centimetre.", "diagram": null },
        { "stepNumber": 2, "description": "Find half of the unit.", "workingLatex": "\\dfrac{1}{2} = 0.5", "explanation": "The radius can be $0.5$ cm either side.", "diagram": null },
        { "stepNumber": 3, "description": "Find the bounds of the radius.", "workingLatex": "5.5 \\leq r < 6.5", "explanation": "The radius lies between $5.5$ cm and $6.5$ cm.", "diagram": null },
        { "stepNumber": 4, "description": "Decide which radius gives the smallest area.", "workingLatex": "A = \\pi r^2", "explanation": "Area increases with radius, so the smallest area uses the lower bound of the radius.", "diagram": null },
        { "stepNumber": 5, "description": "Select the lower bound of the radius.", "workingLatex": "r = 5.5", "explanation": "This is the smallest possible radius.", "diagram": null },
        { "stepNumber": 6, "description": "Square the radius.", "workingLatex": "5.5^2 = 30.25", "explanation": "First square the radius.", "diagram": null },
        { "stepNumber": 7, "description": "Multiply by pi.", "workingLatex": "A = \\pi \\times 30.25", "explanation": "Multiply by $\\pi$ to find the area.", "diagram": null },
        { "stepNumber": 8, "description": "Evaluate.", "workingLatex": "\\pi \\times 30.25 = 95.033\\ldots", "explanation": "Using $\\pi = 3.1415\\ldots$ gives $95.03\\ldots$", "diagram": null },
        { "stepNumber": 9, "description": "Round to 3 significant figures.", "workingLatex": "\\approx 95.0", "explanation": "The fourth figure is $3$, so the third figure stays as $0$.", "diagram": null },
        { "stepNumber": 10, "description": "Attach the units.", "workingLatex": "95.0\\text{ cm}^2", "explanation": "Area is in square centimetres.", "diagram": null },
        { "stepNumber": 11, "description": "State the answer.", "workingLatex": "\\text{lower bound} \\approx 95.0\\text{ cm}^2", "explanation": "So the lower bound for the area is about $95.0$ cm².", "diagram": null }
      ],
      "finalAnswer": "$95.0\\text{ cm}^2$"
    }
  },
  {
    "id": "gcse.number.error-intervals.q063",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Error intervals",
    "subtopicId": "gcse.number.error-intervals",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "numeric",
    "tags": ["error intervals", "upper bound", "compound measure", "pressure", "bounds calculation"],
    "questionText": "A force of $250\\text{ N}$, measured to the nearest $10\\text{ N}$, acts on an area of $4\\text{ m}^2$, measured to the nearest square metre. Calculate the upper bound for the pressure, giving your answer to $3$ significant figures. Use $\\text{pressure} = \\dfrac{\\text{force}}{\\text{area}}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Find the bounds of the force.", "workingLatex": "\\text{half of }10 = 5", "explanation": "The force is to the nearest $10$ N.", "diagram": null },
        { "stepNumber": 2, "description": "Write the force interval.", "workingLatex": "245 \\leq F < 255", "explanation": "The force lies between $245$ N and $255$ N.", "diagram": null },
        { "stepNumber": 3, "description": "Find the bounds of the area.", "workingLatex": "\\text{half of }1 = 0.5", "explanation": "The area is to the nearest square metre.", "diagram": null },
        { "stepNumber": 4, "description": "Write the area interval.", "workingLatex": "3.5 \\leq A < 4.5", "explanation": "The area lies between $3.5$ m² and $4.5$ m².", "diagram": null },
        { "stepNumber": 5, "description": "Decide the bounds for maximum pressure.", "workingLatex": "\\text{pressure} = \\dfrac{F}{A}", "explanation": "For the largest pressure use the biggest force over the smallest area.", "diagram": null },
        { "stepNumber": 6, "description": "Choose the bounds.", "workingLatex": "F = 255, \\; A = 3.5", "explanation": "Upper bound of force, lower bound of area.", "diagram": null },
        { "stepNumber": 7, "description": "Substitute.", "workingLatex": "\\text{pressure} = \\dfrac{255}{3.5}", "explanation": "This gives the largest possible pressure.", "diagram": null },
        { "stepNumber": 8, "description": "Carry out the division.", "workingLatex": "\\dfrac{255}{3.5} = 72.857\\ldots", "explanation": "Dividing gives $72.857\\ldots$", "diagram": null },
        { "stepNumber": 9, "description": "Round to 3 significant figures.", "workingLatex": "\\approx 72.9", "explanation": "The fourth figure is $5$, so the third figure rounds up from $8$ to $9$.", "diagram": null },
        { "stepNumber": 10, "description": "Attach the units.", "workingLatex": "72.9\\text{ N/m}^2", "explanation": "Pressure is force per unit area.", "diagram": null },
        { "stepNumber": 11, "description": "State the answer.", "workingLatex": "\\text{upper bound} \\approx 72.9\\text{ N/m}^2", "explanation": "So the upper bound for the pressure is about $72.9$ N/m².", "diagram": null }
      ],
      "finalAnswer": "$72.9\\text{ N/m}^2$"
    }
  },
  {
    "id": "gcse.number.error-intervals.q064",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Error intervals",
    "subtopicId": "gcse.number.error-intervals",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "numeric",
    "tags": ["error intervals", "bounds calculation", "reasoning", "decision"],
    "questionText": "A lift can safely carry a total mass of up to $500\\text{ kg}$. Six identical boxes each have mass $80\\text{ kg}$, measured to the nearest kilogram. By considering the upper bound, determine whether the boxes are guaranteed to be within the safe limit.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "State the accuracy.", "workingLatex": "\\text{nearest kg} \\Rightarrow \\text{unit} = 1", "explanation": "Each box mass is to the nearest kilogram.", "diagram": null },
        { "stepNumber": 2, "description": "Find half of the unit.", "workingLatex": "\\dfrac{1}{2} = 0.5", "explanation": "Each box can be $0.5$ kg either side.", "diagram": null },
        { "stepNumber": 3, "description": "Find the upper bound of one box.", "workingLatex": "80 + 0.5 = 80.5", "explanation": "The heaviest a single box could be is $80.5$ kg.", "diagram": null },
        { "stepNumber": 4, "description": "Identify the worst case.", "workingLatex": "\\text{all six at upper bound}", "explanation": "To test safety we must assume every box is as heavy as possible.", "diagram": null },
        { "stepNumber": 5, "description": "Find the upper bound of the total.", "workingLatex": "6 \\times 80.5", "explanation": "Multiply the heaviest single box by the six boxes.", "diagram": null },
        { "stepNumber": 6, "description": "Calculate.", "workingLatex": "6 \\times 80.5 = 483", "explanation": "The greatest possible total mass is $483$ kg.", "diagram": null },
        { "stepNumber": 7, "description": "Compare with the limit.", "workingLatex": "483 < 500", "explanation": "Even in the worst case the total is below the $500$ kg limit.", "diagram": null },
        { "stepNumber": 8, "description": "Draw the conclusion.", "workingLatex": "\\text{safe}", "explanation": "Since the upper bound is under the limit, the boxes are guaranteed to be within the safe load.", "diagram": null },
        { "stepNumber": 9, "description": "State the answer.", "workingLatex": "\\text{Yes, } 483\\text{ kg} < 500\\text{ kg}", "explanation": "So yes — the lift is guaranteed to be safe, as the maximum possible total is $483$ kg.", "diagram": null }
      ],
      "finalAnswer": "Yes; upper bound $483\\text{ kg} < 500\\text{ kg}$"
    }
  },
  {
    "id": "gcse.number.error-intervals.q065",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Error intervals",
    "subtopicId": "gcse.number.error-intervals",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "numeric",
    "tags": ["error intervals", "bounds calculation", "suitable accuracy", "speed"],
    "questionText": "A cyclist travels $18\\text{ km}$, measured to the nearest kilometre, in $45\\text{ min}$, measured to the nearest minute. By finding the bounds of the speed in km/h, state the speed to a suitable degree of accuracy.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Find the bounds of the distance.", "workingLatex": "17.5 \\leq d < 18.5", "explanation": "The distance to the nearest km can be $0.5$ km either side.", "diagram": null },
        { "stepNumber": 2, "description": "Find the bounds of the time in minutes.", "workingLatex": "44.5 \\leq t < 45.5", "explanation": "The time to the nearest minute can be $0.5$ min either side.", "diagram": null },
        { "stepNumber": 3, "description": "Convert the time bounds to hours.", "workingLatex": "\\dfrac{44.5}{60} \\leq t < \\dfrac{45.5}{60}", "explanation": "Divide by 60 to work in hours for km/h.", "diagram": null },
        { "stepNumber": 4, "description": "Evaluate the time bounds.", "workingLatex": "0.74166\\ldots \\leq t < 0.75833\\ldots", "explanation": "These are the time bounds in hours.", "diagram": null },
        { "stepNumber": 5, "description": "Find the lower bound of the speed.", "workingLatex": "\\dfrac{17.5}{0.75833\\ldots} = 23.07\\ldots", "explanation": "Smallest distance over largest time gives the lowest speed.", "diagram": null },
        { "stepNumber": 6, "description": "Find the upper bound of the speed.", "workingLatex": "\\dfrac{18.5}{0.74166\\ldots} = 24.94\\ldots", "explanation": "Largest distance over smallest time gives the highest speed.", "diagram": null },
        { "stepNumber": 7, "description": "Compare the bounds.", "workingLatex": "23.07 \\text{ to } 24.94", "explanation": "The true speed lies between these two values.", "diagram": null },
        { "stepNumber": 8, "description": "Round each bound to check agreement.", "workingLatex": "23.07 \\approx 20, \\; 24.94 \\approx 20 \\;(1\\text{ s.f.})", "explanation": "To 1 significant figure both bounds round to $20$, but to 2 s.f. they differ ($23$ vs $25$).", "diagram": null },
        { "stepNumber": 9, "description": "Choose the suitable accuracy.", "workingLatex": "\\text{speed} \\approx 20\\text{ km/h}", "explanation": "Only 1 significant figure is reliable, since the bounds disagree beyond that.", "diagram": null },
        { "stepNumber": 10, "description": "State the answer.", "workingLatex": "\\text{speed} \\approx 20\\text{ km/h}", "explanation": "So a suitable value for the speed is about $20$ km/h.", "diagram": null }
      ],
      "finalAnswer": "$\\approx 20\\text{ km/h}$"
    }
  },
  {
    "id": "gcse.number.error-intervals.q066",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Error intervals",
    "subtopicId": "gcse.number.error-intervals",
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "numeric",
    "tags": ["error intervals", "upper bound", "volume", "cube", "bounds calculation"],
    "questionText": "A cube has edge length $5\\text{ cm}$, measured to the nearest centimetre. Calculate the upper bound for the volume of the cube.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "State the accuracy.", "workingLatex": "\\text{nearest cm} \\Rightarrow \\text{unit} = 1", "explanation": "The edge length is to the nearest centimetre.", "diagram": null },
        { "stepNumber": 2, "description": "Find half of the unit.", "workingLatex": "\\dfrac{1}{2} = 0.5", "explanation": "The edge can be $0.5$ cm either side.", "diagram": null },
        { "stepNumber": 3, "description": "Find the bounds of the edge.", "workingLatex": "4.5 \\leq x < 5.5", "explanation": "The edge lies between $4.5$ cm and $5.5$ cm.", "diagram": null },
        { "stepNumber": 4, "description": "Decide which edge gives the largest volume.", "workingLatex": "V = x^3", "explanation": "Volume increases with edge length, so use the upper bound.", "diagram": null },
        { "stepNumber": 5, "description": "Select the upper bound.", "workingLatex": "x = 5.5", "explanation": "This is the largest possible edge length.", "diagram": null },
        { "stepNumber": 6, "description": "Cube the edge.", "workingLatex": "5.5^3 = 5.5 \\times 5.5 \\times 5.5", "explanation": "Volume of a cube is the edge cubed.", "diagram": null },
        { "stepNumber": 7, "description": "Evaluate.", "workingLatex": "5.5^3 = 166.375", "explanation": "Multiplying out gives $166.375$.", "diagram": null },
        { "stepNumber": 8, "description": "Attach the units.", "workingLatex": "166.375\\text{ cm}^3", "explanation": "Volume is in cubic centimetres.", "diagram": null },
        { "stepNumber": 9, "description": "State the answer.", "workingLatex": "\\text{upper bound} = 166.375\\text{ cm}^3", "explanation": "So the upper bound for the volume is $166.375$ cm³.", "diagram": null }
      ],
      "finalAnswer": "$166.375\\text{ cm}^3$"
    }
  },
  {
    "id": "gcse.number.error-intervals.q067",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Error intervals",
    "subtopicId": "gcse.number.error-intervals",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "numeric",
    "tags": ["error intervals", "lower bound", "compound", "bounds calculation"],
    "questionText": "The formula $s = ut$ gives distance $s$. Here $u = 12\\text{ m/s}$ to the nearest m/s and $t = 9\\text{ s}$ to the nearest second. Calculate the lower bound for the distance $s$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Find the bounds of the speed.", "workingLatex": "11.5 \\leq u < 12.5", "explanation": "The speed to the nearest m/s can be $0.5$ either side.", "diagram": null },
        { "stepNumber": 2, "description": "Find the bounds of the time.", "workingLatex": "8.5 \\leq t < 9.5", "explanation": "The time to the nearest second can be $0.5$ either side.", "diagram": null },
        { "stepNumber": 3, "description": "Recall the formula.", "workingLatex": "s = ut", "explanation": "Distance is speed multiplied by time.", "diagram": null },
        { "stepNumber": 4, "description": "Decide which bounds give the smallest distance.", "workingLatex": "\\text{use lower bounds}", "explanation": "A product is smallest when both factors are as small as possible.", "diagram": null },
        { "stepNumber": 5, "description": "Select the lower bounds.", "workingLatex": "u = 11.5, \\; t = 8.5", "explanation": "These are the smallest possible values.", "diagram": null },
        { "stepNumber": 6, "description": "Multiply.", "workingLatex": "s = 11.5 \\times 8.5", "explanation": "Substitute the lower bounds into the formula.", "diagram": null },
        { "stepNumber": 7, "description": "Evaluate.", "workingLatex": "11.5 \\times 8.5 = 97.75", "explanation": "Multiplying gives $97.75$.", "diagram": null },
        { "stepNumber": 8, "description": "Attach the units.", "workingLatex": "97.75\\text{ m}", "explanation": "Distance is in metres.", "diagram": null },
        { "stepNumber": 9, "description": "State the answer.", "workingLatex": "\\text{lower bound} = 97.75\\text{ m}", "explanation": "So the lower bound for the distance is $97.75$ m.", "diagram": null }
      ],
      "finalAnswer": "$97.75\\text{ m}$"
    }
  },
  {
    "id": "gcse.number.error-intervals.q068",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Error intervals",
    "subtopicId": "gcse.number.error-intervals",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "numeric",
    "tags": ["error intervals", "upper bound", "division", "money", "bounds calculation"],
    "questionText": "A total bill of $\\pounds 96$, given to the nearest pound, is shared equally between a group of $5$ people (an exact count). Calculate the upper bound for the amount each person pays, giving your answer to the nearest penny.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "State the accuracy of the bill.", "workingLatex": "\\text{nearest }\\pounds \\Rightarrow \\text{unit} = 1", "explanation": "The bill is given to the nearest pound.", "diagram": null },
        { "stepNumber": 2, "description": "Find half of the unit.", "workingLatex": "\\dfrac{1}{2} = 0.5", "explanation": "The true bill can be £0.50 either side.", "diagram": null },
        { "stepNumber": 3, "description": "Find the bounds of the bill.", "workingLatex": "95.5 \\leq B < 96.5", "explanation": "The bill lies between £95.50 and £96.50.", "diagram": null },
        { "stepNumber": 4, "description": "Note the number of people is exact.", "workingLatex": "5 \\text{ (exact)}", "explanation": "A count of people has no rounding error, so $5$ is used exactly.", "diagram": null },
        { "stepNumber": 5, "description": "Decide the bounds for the largest share.", "workingLatex": "\\text{share} = \\dfrac{B}{5}", "explanation": "Each share is largest when the bill is as large as possible.", "diagram": null },
        { "stepNumber": 6, "description": "Choose the upper bound of the bill.", "workingLatex": "B = 96.5", "explanation": "Use the upper bound of the bill and the exact count.", "diagram": null },
        { "stepNumber": 7, "description": "Divide.", "workingLatex": "\\dfrac{96.5}{5} = 19.3", "explanation": "Dividing gives £19.30.", "diagram": null },
        { "stepNumber": 8, "description": "Express to the nearest penny.", "workingLatex": "\\pounds 19.30", "explanation": "The amount is already exact to the penny.", "diagram": null },
        { "stepNumber": 9, "description": "State the answer.", "workingLatex": "\\text{upper bound} = \\pounds 19.30", "explanation": "So the most each person could pay is £19.30.", "diagram": null }
      ],
      "finalAnswer": "$\\pounds 19.30$"
    }
  },
  {
    "id": "gcse.number.error-intervals.q069",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Error intervals",
    "subtopicId": "gcse.number.error-intervals",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "numeric",
    "tags": ["error intervals", "bounds calculation", "reasoning", "decision"],
    "questionText": "A shelf has length $120\\text{ cm}$, measured to the nearest centimetre. Books each of width $3\\text{ cm}$, measured to the nearest millimetre, are placed on it. By considering bounds, determine the greatest number of books that can be guaranteed to fit on the shelf.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Find the lower bound of the shelf.", "workingLatex": "119.5 \\leq S < 120.5", "explanation": "The shelf to the nearest cm has lower bound $119.5$ cm.", "diagram": null },
        { "stepNumber": 2, "description": "Identify the worst case for the shelf.", "workingLatex": "S = 119.5\\text{ cm}", "explanation": "To guarantee fit we must assume the shelf is as short as possible.", "diagram": null },
        { "stepNumber": 3, "description": "Convert the book accuracy.", "workingLatex": "1\\text{ mm} = 0.1\\text{ cm}", "explanation": "The books are measured to the nearest millimetre.", "diagram": null },
        { "stepNumber": 4, "description": "Find the upper bound of a book's width.", "workingLatex": "3 + 0.05 = 3.05\\text{ cm}", "explanation": "Half of $0.1$ cm is $0.05$ cm, so a book could be up to $3.05$ cm wide.", "diagram": null },
        { "stepNumber": 5, "description": "Identify the worst case for the books.", "workingLatex": "\\text{each book } 3.05\\text{ cm}", "explanation": "To guarantee fit we must assume each book is as wide as possible.", "diagram": null },
        { "stepNumber": 6, "description": "Divide to find how many fit.", "workingLatex": "\\dfrac{119.5}{3.05}", "explanation": "Divide the shortest shelf by the widest book.", "diagram": null },
        { "stepNumber": 7, "description": "Evaluate.", "workingLatex": "\\dfrac{119.5}{3.05} = 39.18\\ldots", "explanation": "The division gives $39.18\\ldots$", "diagram": null },
        { "stepNumber": 8, "description": "Round down to whole books.", "workingLatex": "\\lfloor 39.18 \\rfloor = 39", "explanation": "Only whole books fit, so round down.", "diagram": null },
        { "stepNumber": 9, "description": "State the conclusion.", "workingLatex": "39 \\text{ books}", "explanation": "So $39$ books can be guaranteed to fit on the shelf.", "diagram": null }
      ],
      "finalAnswer": "$39$ books"
    }
  },
  {
    "id": "gcse.number.error-intervals.q070",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Error intervals",
    "subtopicId": "gcse.number.error-intervals",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "numeric",
    "tags": ["error intervals", "bounds calculation", "suitable accuracy", "density"],
    "questionText": "A metal block has mass $500\\text{ g}$, measured to the nearest $10\\text{ g}$, and volume $64\\text{ cm}^3$, measured to the nearest cm$^3$. By finding the bounds of the density, state the density to a suitable degree of accuracy. Use $\\text{density} = \\dfrac{\\text{mass}}{\\text{volume}}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Find the bounds of the mass.", "workingLatex": "495 \\leq m < 505", "explanation": "The mass to the nearest $10$ g can be $5$ g either side.", "diagram": null },
        { "stepNumber": 2, "description": "Find the bounds of the volume.", "workingLatex": "63.5 \\leq V < 64.5", "explanation": "The volume to the nearest cm³ can be $0.5$ cm³ either side.", "diagram": null },
        { "stepNumber": 3, "description": "Find the lower bound of the density.", "workingLatex": "\\dfrac{495}{64.5} = 7.674\\ldots", "explanation": "Smallest mass over largest volume gives the lowest density.", "diagram": null },
        { "stepNumber": 4, "description": "Find the upper bound of the density.", "workingLatex": "\\dfrac{505}{63.5} = 7.952\\ldots", "explanation": "Largest mass over smallest volume gives the highest density.", "diagram": null },
        { "stepNumber": 5, "description": "Compare the bounds.", "workingLatex": "7.674 \\text{ to } 7.952", "explanation": "The true density lies between these two values.", "diagram": null },
        { "stepNumber": 6, "description": "Round each bound to check agreement.", "workingLatex": "7.674 \\approx 8, \\; 7.952 \\approx 8 \\;(1\\text{ s.f.})", "explanation": "To 1 significant figure both bounds round to $8$, but to 2 s.f. they differ ($7.7$ vs $8.0$).", "diagram": null },
        { "stepNumber": 7, "description": "Decide the reliable accuracy.", "workingLatex": "\\text{1 s.f. only}", "explanation": "Only the first significant figure is reliable, since the bounds disagree beyond it.", "diagram": null },
        { "stepNumber": 8, "description": "State the density.", "workingLatex": "\\text{density} \\approx 8\\text{ g/cm}^3", "explanation": "A suitable value is $8$ g/cm³.", "diagram": null },
        { "stepNumber": 9, "description": "State the answer.", "workingLatex": "\\text{density} \\approx 8\\text{ g/cm}^3", "explanation": "So the density is about $8$ g/cm³ to a suitable degree of accuracy.", "diagram": null }
      ],
      "finalAnswer": "$\\approx 8\\text{ g/cm}^3$"
    }
  }
];
