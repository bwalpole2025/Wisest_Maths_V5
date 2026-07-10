import { Question } from "@/lib/types";

export const questions: Question[] = [
  {
    "id": "gcse.ratio.direct-inverse.q001",
    "level": "GCSE",
    "topic": "Percentages and proportion",
    "subtopic": "Direct and inverse proportion",
    "subtopicId": "gcse.ratio.direct-inverse",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "value",
    "tags": ["direct proportion"],
    "questionText": "$y$ is directly proportional to $x$. When $x = 2$, $y = 10$. Find $y$ when $x = 5$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Find the constant.", "workingLatex": "k = \\dfrac{10}{2} = 5", "explanation": "Direct proportion means $y = kx$.", "diagram": null },
        { "stepNumber": 2, "description": "Use it.", "workingLatex": "y = 5 \\times 5 = 25", "explanation": "Substitute $x = 5$.", "diagram": null }
      ],
      "finalAnswer": "$y = 25$"
    }
  },
  {
    "id": "gcse.ratio.direct-inverse.q002",
    "level": "GCSE",
    "topic": "Percentages and proportion",
    "subtopic": "Direct and inverse proportion",
    "subtopicId": "gcse.ratio.direct-inverse",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "value",
    "tags": ["direct proportion", "constant"],
    "questionText": "$y$ is directly proportional to $x$. When $x = 3$, $y = 15$. Find the constant of proportionality.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Divide.", "workingLatex": "k = \\dfrac{15}{3} = 5", "explanation": "The constant is $y \\div x$.", "diagram": null }
      ],
      "finalAnswer": "$k = 5$"
    }
  },
  {
    "id": "gcse.ratio.direct-inverse.q003",
    "level": "GCSE",
    "topic": "Percentages and proportion",
    "subtopic": "Direct and inverse proportion",
    "subtopicId": "gcse.ratio.direct-inverse",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "value",
    "tags": ["direct proportion"],
    "questionText": "$y$ is directly proportional to $x$. When $x = 4$, $y = 12$. Find $y$ when $x = 7$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Find the constant.", "workingLatex": "k = \\dfrac{12}{4} = 3", "explanation": "Direct proportion means $y = kx$.", "diagram": null },
        { "stepNumber": 2, "description": "Use it.", "workingLatex": "y = 3 \\times 7 = 21", "explanation": "Substitute $x = 7$.", "diagram": null }
      ],
      "finalAnswer": "$y = 21$"
    }
  },
  {
    "id": "gcse.ratio.direct-inverse.q004",
    "level": "GCSE",
    "topic": "Percentages and proportion",
    "subtopic": "Direct and inverse proportion",
    "subtopicId": "gcse.ratio.direct-inverse",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "value",
    "tags": ["direct proportion", "context"],
    "questionText": "$3$ pens cost $\\pounds 1.50$. Find the cost of $5$ pens.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Find one pen.", "workingLatex": "1.50 \\div 3 = 0.50", "explanation": "Cost is proportional to the number of pens.", "diagram": null },
        { "stepNumber": 2, "description": "Scale up.", "workingLatex": "0.50 \\times 5 = 2.50", "explanation": "Multiply by $5$.", "diagram": null }
      ],
      "finalAnswer": "$\\pounds 2.50$"
    }
  },
  {
    "id": "gcse.ratio.direct-inverse.q005",
    "level": "GCSE",
    "topic": "Percentages and proportion",
    "subtopic": "Direct and inverse proportion",
    "subtopicId": "gcse.ratio.direct-inverse",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "value",
    "tags": ["inverse proportion", "context"],
    "questionText": "$2$ workers take $6$ days to do a job. How long would $4$ workers take, working at the same rate?",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Find the total work.", "workingLatex": "2 \\times 6 = 12 \\text{ worker-days}", "explanation": "More workers means less time — inverse proportion.", "diagram": null },
        { "stepNumber": 2, "description": "Divide.", "workingLatex": "12 \\div 4 = 3", "explanation": "Share the fixed work among $4$ workers.", "diagram": null }
      ],
      "finalAnswer": "$3$ days"
    }
  },
  {
    "id": "gcse.ratio.direct-inverse.q006",
    "level": "GCSE",
    "topic": "Percentages and proportion",
    "subtopic": "Direct and inverse proportion",
    "subtopicId": "gcse.ratio.direct-inverse",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "value",
    "tags": ["direct proportion"],
    "questionText": "$y$ is directly proportional to $x$. When $x = 5$, $y = 20$. Find $x$ when $y = 32$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Find the constant.", "workingLatex": "k = \\dfrac{20}{5} = 4", "explanation": "Direct proportion means $y = 4x$.", "diagram": null },
        { "stepNumber": 2, "description": "Solve for $x$.", "workingLatex": "x = \\dfrac{32}{4} = 8", "explanation": "Rearrange $y = 4x$.", "diagram": null }
      ],
      "finalAnswer": "$x = 8$"
    }
  },
  {
    "id": "gcse.ratio.direct-inverse.q007",
    "level": "GCSE",
    "topic": "Percentages and proportion",
    "subtopic": "Direct and inverse proportion",
    "subtopicId": "gcse.ratio.direct-inverse",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "value",
    "tags": ["direct proportion", "context"],
    "questionText": "$4\\text{ kg}$ of apples cost $\\pounds 6$. Find the cost of $10\\text{ kg}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Find the cost per kg.", "workingLatex": "6 \\div 4 = 1.50", "explanation": "Cost is proportional to weight.", "diagram": null },
        { "stepNumber": 2, "description": "Scale up.", "workingLatex": "1.50 \\times 10 = 15", "explanation": "Multiply by $10$.", "diagram": null }
      ],
      "finalAnswer": "$\\pounds 15$"
    }
  },
  {
    "id": "gcse.ratio.direct-inverse.q008",
    "level": "GCSE",
    "topic": "Percentages and proportion",
    "subtopic": "Direct and inverse proportion",
    "subtopicId": "gcse.ratio.direct-inverse",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "value",
    "tags": ["direct proportion"],
    "questionText": "$y$ is directly proportional to $x$. When $x = 3$, $y = 9$. Find $y$ when $x = 10$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Find the constant.", "workingLatex": "k = \\dfrac{9}{3} = 3", "explanation": "Direct proportion means $y = 3x$.", "diagram": null },
        { "stepNumber": 2, "description": "Use it.", "workingLatex": "y = 3 \\times 10 = 30", "explanation": "Substitute $x = 10$.", "diagram": null }
      ],
      "finalAnswer": "$y = 30$"
    }
  },
  {
    "id": "gcse.ratio.direct-inverse.q009",
    "level": "GCSE",
    "topic": "Percentages and proportion",
    "subtopic": "Direct and inverse proportion",
    "subtopicId": "gcse.ratio.direct-inverse",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "value",
    "tags": ["inverse proportion", "context"],
    "questionText": "$3$ taps fill a tank in $8$ hours. How long would $4$ taps take?",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Find the total work.", "workingLatex": "3 \\times 8 = 24 \\text{ tap-hours}", "explanation": "More taps means less time — inverse proportion.", "diagram": null },
        { "stepNumber": 2, "description": "Divide.", "workingLatex": "24 \\div 4 = 6", "explanation": "Share the fixed work among $4$ taps.", "diagram": null }
      ],
      "finalAnswer": "$6$ hours"
    }
  },
  {
    "id": "gcse.ratio.direct-inverse.q010",
    "level": "GCSE",
    "topic": "Percentages and proportion",
    "subtopic": "Direct and inverse proportion",
    "subtopicId": "gcse.ratio.direct-inverse",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "value",
    "tags": ["direct proportion", "context"],
    "questionText": "$6\\text{ m}$ of ribbon costs $\\pounds 2.40$. Find the cost of $10\\text{ m}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Find the cost per metre.", "workingLatex": "2.40 \\div 6 = 0.40", "explanation": "Cost is proportional to length.", "diagram": null },
        { "stepNumber": 2, "description": "Scale up.", "workingLatex": "0.40 \\times 10 = 4", "explanation": "Multiply by $10$.", "diagram": null }
      ],
      "finalAnswer": "$\\pounds 4$"
    }
  },
  {
    "id": "gcse.ratio.direct-inverse.q011",
    "level": "GCSE",
    "topic": "Percentages and proportion",
    "subtopic": "Direct and inverse proportion",
    "subtopicId": "gcse.ratio.direct-inverse",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "value",
    "tags": ["direct proportion"],
    "questionText": "$y$ is directly proportional to $x$. When $x = 2$, $y = 8$. Find $y$ when $x = 6$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Find the constant.", "workingLatex": "k = \\dfrac{8}{2} = 4", "explanation": "Direct proportion means $y = 4x$.", "diagram": null },
        { "stepNumber": 2, "description": "Use it.", "workingLatex": "y = 4 \\times 6 = 24", "explanation": "Substitute $x = 6$.", "diagram": null }
      ],
      "finalAnswer": "$y = 24$"
    }
  },
  {
    "id": "gcse.ratio.direct-inverse.q012",
    "level": "GCSE",
    "topic": "Percentages and proportion",
    "subtopic": "Direct and inverse proportion",
    "subtopicId": "gcse.ratio.direct-inverse",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "value",
    "tags": ["inverse proportion", "context"],
    "questionText": "$5$ people take $12$ days to build a wall. How long would $10$ people take?",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Find the total work.", "workingLatex": "5 \\times 12 = 60 \\text{ person-days}", "explanation": "More people means less time — inverse proportion.", "diagram": null },
        { "stepNumber": 2, "description": "Divide.", "workingLatex": "60 \\div 10 = 6", "explanation": "Share the work among $10$ people.", "diagram": null }
      ],
      "finalAnswer": "$6$ days"
    }
  },
  {
    "id": "gcse.ratio.direct-inverse.q013",
    "level": "GCSE",
    "topic": "Percentages and proportion",
    "subtopic": "Direct and inverse proportion",
    "subtopicId": "gcse.ratio.direct-inverse",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "value",
    "tags": ["direct proportion"],
    "questionText": "$y$ is directly proportional to $x$. When $x = 6$, $y = 18$. Find $y$ when $x = 9$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Find the constant.", "workingLatex": "k = \\dfrac{18}{6} = 3", "explanation": "Direct proportion means $y = 3x$.", "diagram": null },
        { "stepNumber": 2, "description": "Use it.", "workingLatex": "y = 3 \\times 9 = 27", "explanation": "Substitute $x = 9$.", "diagram": null }
      ],
      "finalAnswer": "$y = 27$"
    }
  },
  {
    "id": "gcse.ratio.direct-inverse.q014",
    "level": "GCSE",
    "topic": "Percentages and proportion",
    "subtopic": "Direct and inverse proportion",
    "subtopicId": "gcse.ratio.direct-inverse",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "value",
    "tags": ["direct proportion", "context"],
    "questionText": "$8$ identical books weigh $4\\text{ kg}$. Find the weight of $3$ books.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Find one book.", "workingLatex": "4 \\div 8 = 0.5 \\text{ kg}", "explanation": "Weight is proportional to the number of books.", "diagram": null },
        { "stepNumber": 2, "description": "Scale.", "workingLatex": "0.5 \\times 3 = 1.5", "explanation": "Multiply by $3$.", "diagram": null }
      ],
      "finalAnswer": "$1.5\\text{ kg}$"
    }
  },
  {
    "id": "gcse.ratio.direct-inverse.q015",
    "level": "GCSE",
    "topic": "Percentages and proportion",
    "subtopic": "Direct and inverse proportion",
    "subtopicId": "gcse.ratio.direct-inverse",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "value",
    "tags": ["inverse proportion", "context"],
    "questionText": "$6$ machines complete a task in $10$ hours. How long would $3$ machines take?",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Find the total work.", "workingLatex": "6 \\times 10 = 60 \\text{ machine-hours}", "explanation": "Fewer machines means more time — inverse proportion.", "diagram": null },
        { "stepNumber": 2, "description": "Divide.", "workingLatex": "60 \\div 3 = 20", "explanation": "Share the work among $3$ machines.", "diagram": null }
      ],
      "finalAnswer": "$20$ hours"
    }
  },
  {
    "id": "gcse.ratio.direct-inverse.q016",
    "level": "GCSE",
    "topic": "Percentages and proportion",
    "subtopic": "Direct and inverse proportion",
    "subtopicId": "gcse.ratio.direct-inverse",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "value",
    "tags": ["direct proportion"],
    "questionText": "$y$ is directly proportional to $x$. When $x = 5$, $y = 25$. Find $y$ when $x = 8$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Find the constant.", "workingLatex": "k = \\dfrac{25}{5} = 5", "explanation": "Direct proportion means $y = 5x$.", "diagram": null },
        { "stepNumber": 2, "description": "Use it.", "workingLatex": "y = 5 \\times 8 = 40", "explanation": "Substitute $x = 8$.", "diagram": null }
      ],
      "finalAnswer": "$y = 40$"
    }
  },
  {
    "id": "gcse.ratio.direct-inverse.q017",
    "level": "GCSE",
    "topic": "Percentages and proportion",
    "subtopic": "Direct and inverse proportion",
    "subtopicId": "gcse.ratio.direct-inverse",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "value",
    "tags": ["direct proportion", "context"],
    "questionText": "$2\\text{ kg}$ of flour costs $\\pounds 5$. Find the cost of $5\\text{ kg}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Find the cost per kg.", "workingLatex": "5 \\div 2 = 2.50", "explanation": "Cost is proportional to weight.", "diagram": null },
        { "stepNumber": 2, "description": "Scale up.", "workingLatex": "2.50 \\times 5 = 12.50", "explanation": "Multiply by $5$.", "diagram": null }
      ],
      "finalAnswer": "$\\pounds 12.50$"
    }
  },
  {
    "id": "gcse.ratio.direct-inverse.q018",
    "level": "GCSE",
    "topic": "Percentages and proportion",
    "subtopic": "Direct and inverse proportion",
    "subtopicId": "gcse.ratio.direct-inverse",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "value",
    "tags": ["inverse proportion", "context"],
    "questionText": "$4$ workers take $15$ days to finish a project. How long would $6$ workers take?",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Find the total work.", "workingLatex": "4 \\times 15 = 60 \\text{ worker-days}", "explanation": "More workers means less time — inverse proportion.", "diagram": null },
        { "stepNumber": 2, "description": "Divide.", "workingLatex": "60 \\div 6 = 10", "explanation": "Share the work among $6$ workers.", "diagram": null }
      ],
      "finalAnswer": "$10$ days"
    }
  },
  {
    "id": "gcse.ratio.direct-inverse.q019",
    "level": "GCSE",
    "topic": "Percentages and proportion",
    "subtopic": "Direct and inverse proportion",
    "subtopicId": "gcse.ratio.direct-inverse",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "text",
    "tags": ["direct proportion", "equation"],
    "questionText": "$y$ is directly proportional to $x$. When $x = 4$, $y = 20$. Find an equation connecting $y$ and $x$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Write the form.", "workingLatex": "y = kx", "explanation": "Direct proportion has this form.", "diagram": null },
        { "stepNumber": 2, "description": "Find $k$.", "workingLatex": "k = \\dfrac{20}{4} = 5", "explanation": "Substitute the known values.", "diagram": null },
        { "stepNumber": 3, "description": "State the equation.", "workingLatex": "y = 5x", "explanation": "Put $k$ back into the form.", "diagram": null }
      ],
      "finalAnswer": "$y = 5x$"
    }
  },
  {
    "id": "gcse.ratio.direct-inverse.q020",
    "level": "GCSE",
    "topic": "Percentages and proportion",
    "subtopic": "Direct and inverse proportion",
    "subtopicId": "gcse.ratio.direct-inverse",
    "difficulty": "Intermediate",
    "marks": 2,
    "answerType": "value",
    "tags": ["inverse proportion", "constant"],
    "questionText": "$y$ is inversely proportional to $x$. When $x = 4$, $y = 6$. Find the constant $k$ in $y = \\dfrac{k}{x}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Rearrange.", "workingLatex": "k = xy", "explanation": "Multiply both sides by $x$.", "diagram": null },
        { "stepNumber": 2, "description": "Substitute.", "workingLatex": "k = 4 \\times 6 = 24", "explanation": "Use the given values.", "diagram": null }
      ],
      "finalAnswer": "$k = 24$"
    }
  },
  {
    "id": "gcse.ratio.direct-inverse.q021",
    "level": "GCSE",
    "topic": "Percentages and proportion",
    "subtopic": "Direct and inverse proportion",
    "subtopicId": "gcse.ratio.direct-inverse",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "value",
    "tags": ["inverse proportion"],
    "questionText": "$y$ is inversely proportional to $x$. When $x = 4$, $y = 6$. Find $y$ when $x = 3$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Find the constant.", "workingLatex": "k = 4 \\times 6 = 24", "explanation": "For inverse proportion, $k = xy$.", "diagram": null },
        { "stepNumber": 2, "description": "Use it.", "workingLatex": "y = \\dfrac{24}{3} = 8", "explanation": "Substitute $x = 3$ into $y = \\dfrac{24}{x}$.", "diagram": null }
      ],
      "finalAnswer": "$y = 8$"
    }
  },
  {
    "id": "gcse.ratio.direct-inverse.q022",
    "level": "GCSE",
    "topic": "Percentages and proportion",
    "subtopic": "Direct and inverse proportion",
    "subtopicId": "gcse.ratio.direct-inverse",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "value",
    "tags": ["direct proportion"],
    "questionText": "$y$ is directly proportional to $x$. When $x = 7$, $y = 35$. Find $y$ when $x = 12$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Find the constant.", "workingLatex": "k = \\dfrac{35}{7} = 5", "explanation": "Direct proportion means $y = 5x$.", "diagram": null },
        { "stepNumber": 2, "description": "Use it.", "workingLatex": "y = 5 \\times 12 = 60", "explanation": "Substitute $x = 12$.", "diagram": null }
      ],
      "finalAnswer": "$y = 60$"
    }
  },
  {
    "id": "gcse.ratio.direct-inverse.q023",
    "level": "GCSE",
    "topic": "Percentages and proportion",
    "subtopic": "Direct and inverse proportion",
    "subtopicId": "gcse.ratio.direct-inverse",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "value",
    "tags": ["inverse proportion"],
    "questionText": "$y$ is inversely proportional to $x$. When $x = 5$, $y = 10$. Find $y$ when $x = 2$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Find the constant.", "workingLatex": "k = 5 \\times 10 = 50", "explanation": "For inverse proportion, $k = xy$.", "diagram": null },
        { "stepNumber": 2, "description": "Use it.", "workingLatex": "y = \\dfrac{50}{2} = 25", "explanation": "Substitute $x = 2$.", "diagram": null }
      ],
      "finalAnswer": "$y = 25$"
    }
  },
  {
    "id": "gcse.ratio.direct-inverse.q024",
    "level": "GCSE",
    "topic": "Percentages and proportion",
    "subtopic": "Direct and inverse proportion",
    "subtopicId": "gcse.ratio.direct-inverse",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "value",
    "tags": ["inverse proportion", "context"],
    "questionText": "$5$ workers build a wall in $12$ days. How long would $3$ workers take?",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Find the total work.", "workingLatex": "5 \\times 12 = 60 \\text{ worker-days}", "explanation": "Fewer workers means more time.", "diagram": null },
        { "stepNumber": 2, "description": "Divide.", "workingLatex": "60 \\div 3 = 20", "explanation": "Share the work among $3$ workers.", "diagram": null }
      ],
      "finalAnswer": "$20$ days"
    }
  },
  {
    "id": "gcse.ratio.direct-inverse.q025",
    "level": "GCSE",
    "topic": "Percentages and proportion",
    "subtopic": "Direct and inverse proportion",
    "subtopicId": "gcse.ratio.direct-inverse",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "value",
    "tags": ["inverse proportion", "context"],
    "questionText": "$8$ taps fill a pool in $3$ hours. How long would $6$ taps take?",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Find the total work.", "workingLatex": "8 \\times 3 = 24 \\text{ tap-hours}", "explanation": "Fewer taps means more time.", "diagram": null },
        { "stepNumber": 2, "description": "Divide.", "workingLatex": "24 \\div 6 = 4", "explanation": "Share the work among $6$ taps.", "diagram": null }
      ],
      "finalAnswer": "$4$ hours"
    }
  },
  {
    "id": "gcse.ratio.direct-inverse.q026",
    "level": "GCSE",
    "topic": "Percentages and proportion",
    "subtopic": "Direct and inverse proportion",
    "subtopicId": "gcse.ratio.direct-inverse",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "value",
    "tags": ["direct proportion", "context"],
    "questionText": "The cost of fabric is directly proportional to its length. $3\\text{ kg}$ costs $\\pounds 7.20$. Find the cost of $8\\text{ kg}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Find the unit cost.", "workingLatex": "7.20 \\div 3 = 2.40", "explanation": "Cost per kg.", "diagram": null },
        { "stepNumber": 2, "description": "Scale up.", "workingLatex": "2.40 \\times 8 = 19.20", "explanation": "Multiply by $8$.", "diagram": null }
      ],
      "finalAnswer": "$\\pounds 19.20$"
    }
  },
  {
    "id": "gcse.ratio.direct-inverse.q027",
    "level": "GCSE",
    "topic": "Percentages and proportion",
    "subtopic": "Direct and inverse proportion",
    "subtopicId": "gcse.ratio.direct-inverse",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "value",
    "tags": ["direct proportion", "equation"],
    "questionText": "$y$ is directly proportional to $x$. When $x = 6$, $y = 48$. Find $x$ when $y = 72$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Find the constant.", "workingLatex": "k = \\dfrac{48}{6} = 8", "explanation": "So $y = 8x$.", "diagram": null },
        { "stepNumber": 2, "description": "Solve for $x$.", "workingLatex": "x = \\dfrac{72}{8} = 9", "explanation": "Rearrange the equation.", "diagram": null }
      ],
      "finalAnswer": "$x = 9$"
    }
  },
  {
    "id": "gcse.ratio.direct-inverse.q028",
    "level": "GCSE",
    "topic": "Percentages and proportion",
    "subtopic": "Direct and inverse proportion",
    "subtopicId": "gcse.ratio.direct-inverse",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "value",
    "tags": ["inverse proportion", "speed"],
    "questionText": "A journey at $60\\text{ km/h}$ takes $4$ hours. How long would it take at $80\\text{ km/h}$?",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Find the distance.", "workingLatex": "60 \\times 4 = 240 \\text{ km}", "explanation": "Time is inversely proportional to speed for a fixed distance.", "diagram": null },
        { "stepNumber": 2, "description": "Divide.", "workingLatex": "240 \\div 80 = 3", "explanation": "Time at the new speed.", "diagram": null }
      ],
      "finalAnswer": "$3$ hours"
    }
  },
  {
    "id": "gcse.ratio.direct-inverse.q029",
    "level": "GCSE",
    "topic": "Percentages and proportion",
    "subtopic": "Direct and inverse proportion",
    "subtopicId": "gcse.ratio.direct-inverse",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "value",
    "tags": ["inverse proportion", "speed"],
    "questionText": "A car travelling at $40\\text{ mph}$ takes $6$ hours. How long at $48\\text{ mph}$?",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Find the distance.", "workingLatex": "40 \\times 6 = 240 \\text{ miles}", "explanation": "The distance is fixed.", "diagram": null },
        { "stepNumber": 2, "description": "Divide.", "workingLatex": "240 \\div 48 = 5", "explanation": "Time at the new speed.", "diagram": null }
      ],
      "finalAnswer": "$5$ hours"
    }
  },
  {
    "id": "gcse.ratio.direct-inverse.q030",
    "level": "GCSE",
    "topic": "Percentages and proportion",
    "subtopic": "Direct and inverse proportion",
    "subtopicId": "gcse.ratio.direct-inverse",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "value",
    "tags": ["inverse proportion", "equation"],
    "questionText": "$y$ is inversely proportional to $x$. When $x = 2$, $y = 12$. Find $x$ when $y = 8$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Find the constant.", "workingLatex": "k = 2 \\times 12 = 24", "explanation": "For inverse proportion, $k = xy$.", "diagram": null },
        { "stepNumber": 2, "description": "Solve for $x$.", "workingLatex": "x = \\dfrac{24}{8} = 3", "explanation": "Rearrange $y = \\dfrac{24}{x}$.", "diagram": null }
      ],
      "finalAnswer": "$x = 3$"
    }
  },
  {
    "id": "gcse.ratio.direct-inverse.q031",
    "level": "GCSE",
    "topic": "Percentages and proportion",
    "subtopic": "Direct and inverse proportion",
    "subtopicId": "gcse.ratio.direct-inverse",
    "difficulty": "Intermediate",
    "marks": 2,
    "answerType": "text",
    "tags": ["direct proportion", "graph"],
    "questionText": "Describe the graph of two quantities that are in direct proportion.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall the form.", "workingLatex": "y = kx", "explanation": "Direct proportion is a linear relationship with no constant term.", "diagram": null },
        { "stepNumber": 2, "description": "Describe.", "workingLatex": "\\text{straight line through the origin}", "explanation": "When $x = 0$, $y = 0$, so it passes through $(0,0)$.", "diagram": null }
      ],
      "finalAnswer": "A straight line through the origin."
    }
  },
  {
    "id": "gcse.ratio.direct-inverse.q032",
    "level": "GCSE",
    "topic": "Percentages and proportion",
    "subtopic": "Direct and inverse proportion",
    "subtopicId": "gcse.ratio.direct-inverse",
    "difficulty": "Intermediate",
    "marks": 2,
    "answerType": "text",
    "tags": ["inverse proportion", "graph"],
    "questionText": "Describe the shape of the graph of two quantities in inverse proportion.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall the form.", "workingLatex": "y = \\dfrac{k}{x}", "explanation": "Inverse proportion is a reciprocal relationship.", "diagram": null },
        { "stepNumber": 2, "description": "Describe.", "workingLatex": "\\text{curve falling from left to right}", "explanation": "As $x$ increases, $y$ decreases, approaching the axes.", "diagram": null }
      ],
      "finalAnswer": "A curve (reciprocal graph) that falls as $x$ increases."
    }
  },
  {
    "id": "gcse.ratio.direct-inverse.q033",
    "level": "GCSE",
    "topic": "Percentages and proportion",
    "subtopic": "Direct and inverse proportion",
    "subtopicId": "gcse.ratio.direct-inverse",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "value",
    "tags": ["direct proportion"],
    "questionText": "$y$ is directly proportional to $x$. When $x = 25$, $y = 100$. Find $y$ when $x = 40$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Find the constant.", "workingLatex": "k = \\dfrac{100}{25} = 4", "explanation": "Direct proportion means $y = 4x$.", "diagram": null },
        { "stepNumber": 2, "description": "Use it.", "workingLatex": "y = 4 \\times 40 = 160", "explanation": "Substitute $x = 40$.", "diagram": null }
      ],
      "finalAnswer": "$y = 160$"
    }
  },
  {
    "id": "gcse.ratio.direct-inverse.q034",
    "level": "GCSE",
    "topic": "Percentages and proportion",
    "subtopic": "Direct and inverse proportion",
    "subtopicId": "gcse.ratio.direct-inverse",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "value",
    "tags": ["inverse proportion", "context"],
    "questionText": "$6$ people can paint a fence in $8$ hours. How many people are needed to paint it in $3$ hours?",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Find the total work.", "workingLatex": "6 \\times 8 = 48 \\text{ person-hours}", "explanation": "The job needs a fixed amount of work.", "diagram": null },
        { "stepNumber": 2, "description": "Divide by the time.", "workingLatex": "48 \\div 3 = 16", "explanation": "Number of people needed for $3$ hours.", "diagram": null }
      ],
      "finalAnswer": "$16$ people"
    }
  },
  {
    "id": "gcse.ratio.direct-inverse.q035",
    "level": "GCSE",
    "topic": "Percentages and proportion",
    "subtopic": "Direct and inverse proportion",
    "subtopicId": "gcse.ratio.direct-inverse",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "value",
    "tags": ["direct proportion", "context"],
    "questionText": "$250\\text{ g}$ of flour makes $10$ biscuits. How much flour is needed for $25$ biscuits?",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Find flour per biscuit.", "workingLatex": "250 \\div 10 = 25 \\text{ g}", "explanation": "Flour is proportional to the number of biscuits.", "diagram": null },
        { "stepNumber": 2, "description": "Scale up.", "workingLatex": "25 \\times 25 = 625", "explanation": "Multiply by $25$.", "diagram": null }
      ],
      "finalAnswer": "$625\\text{ g}$"
    }
  },
  {
    "id": "gcse.ratio.direct-inverse.q036",
    "level": "GCSE",
    "topic": "Percentages and proportion",
    "subtopic": "Direct and inverse proportion",
    "subtopicId": "gcse.ratio.direct-inverse",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "value",
    "tags": ["inverse proportion", "equation"],
    "questionText": "$y$ is inversely proportional to $x$. When $x = 4$, $y = 15$. Find $y$ when $x = 10$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Find the constant.", "workingLatex": "k = 4 \\times 15 = 60", "explanation": "For inverse proportion, $k = xy$.", "diagram": null },
        { "stepNumber": 2, "description": "Use it.", "workingLatex": "y = \\dfrac{60}{10} = 6", "explanation": "Substitute $x = 10$.", "diagram": null }
      ],
      "finalAnswer": "$y = 6$"
    }
  },
  {
    "id": "gcse.ratio.direct-inverse.q037",
    "level": "GCSE",
    "topic": "Percentages and proportion",
    "subtopic": "Direct and inverse proportion",
    "subtopicId": "gcse.ratio.direct-inverse",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "value",
    "tags": ["direct proportion", "context"],
    "questionText": "Earnings are directly proportional to hours worked. $\\pounds 45$ is earned in $5$ hours. Find the earnings for $8$ hours.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Find the hourly rate.", "workingLatex": "45 \\div 5 = 9", "explanation": "Earnings per hour.", "diagram": null },
        { "stepNumber": 2, "description": "Scale up.", "workingLatex": "9 \\times 8 = 72", "explanation": "Multiply by $8$ hours.", "diagram": null }
      ],
      "finalAnswer": "$\\pounds 72$"
    }
  },
  {
    "id": "gcse.ratio.direct-inverse.q038",
    "level": "GCSE",
    "topic": "Percentages and proportion",
    "subtopic": "Direct and inverse proportion",
    "subtopicId": "gcse.ratio.direct-inverse",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "value",
    "tags": ["inverse proportion", "context"],
    "questionText": "$3$ pumps empty a tank in $40$ minutes. How long would $5$ pumps take?",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Find the total work.", "workingLatex": "3 \\times 40 = 120 \\text{ pump-minutes}", "explanation": "More pumps means less time.", "diagram": null },
        { "stepNumber": 2, "description": "Divide.", "workingLatex": "120 \\div 5 = 24", "explanation": "Share the work among $5$ pumps.", "diagram": null }
      ],
      "finalAnswer": "$24$ minutes"
    }
  },
  {
    "id": "gcse.ratio.direct-inverse.q039",
    "level": "GCSE",
    "topic": "Percentages and proportion",
    "subtopic": "Direct and inverse proportion",
    "subtopicId": "gcse.ratio.direct-inverse",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "value",
    "tags": ["direct proportion", "context"],
    "questionText": "$2.5\\text{ kg}$ of cheese costs $\\pounds 4$. Find the cost of $6\\text{ kg}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Find the cost per kg.", "workingLatex": "4 \\div 2.5 = 1.60", "explanation": "Cost is proportional to weight.", "diagram": null },
        { "stepNumber": 2, "description": "Scale up.", "workingLatex": "1.60 \\times 6 = 9.60", "explanation": "Multiply by $6$.", "diagram": null }
      ],
      "finalAnswer": "$\\pounds 9.60$"
    }
  },
  {
    "id": "gcse.ratio.direct-inverse.q040",
    "level": "GCSE",
    "topic": "Percentages and proportion",
    "subtopic": "Direct and inverse proportion",
    "subtopicId": "gcse.ratio.direct-inverse",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "value",
    "tags": ["inverse proportion"],
    "questionText": "$y$ is inversely proportional to $x$. When $x = 8$, $y = 9$. Find $y$ when $x = 6$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Find the constant.", "workingLatex": "k = 8 \\times 9 = 72", "explanation": "For inverse proportion, $k = xy$.", "diagram": null },
        { "stepNumber": 2, "description": "Use it.", "workingLatex": "y = \\dfrac{72}{6} = 12", "explanation": "Substitute $x = 6$.", "diagram": null }
      ],
      "finalAnswer": "$y = 12$"
    }
  },
  {
    "id": "gcse.ratio.direct-inverse.q041",
    "level": "GCSE",
    "topic": "Percentages and proportion",
    "subtopic": "Direct and inverse proportion",
    "subtopicId": "gcse.ratio.direct-inverse",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "value",
    "tags": ["inverse proportion", "context"],
    "questionText": "$10$ workers finish a job in $6$ days. How long would $15$ workers take?",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Find the total work.", "workingLatex": "10 \\times 6 = 60 \\text{ worker-days}", "explanation": "More workers means less time.", "diagram": null },
        { "stepNumber": 2, "description": "Divide.", "workingLatex": "60 \\div 15 = 4", "explanation": "Share the work among $15$ workers.", "diagram": null }
      ],
      "finalAnswer": "$4$ days"
    }
  },
  {
    "id": "gcse.ratio.direct-inverse.q042",
    "level": "GCSE",
    "topic": "Percentages and proportion",
    "subtopic": "Direct and inverse proportion",
    "subtopicId": "gcse.ratio.direct-inverse",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "value",
    "tags": ["direct proportion", "context"],
    "questionText": "A car uses fuel in direct proportion to distance. It travels $200$ miles on $8$ gallons. How many gallons for $350$ miles?",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Find miles per gallon.", "workingLatex": "200 \\div 8 = 25", "explanation": "Distance per gallon.", "diagram": null },
        { "stepNumber": 2, "description": "Divide the distance.", "workingLatex": "350 \\div 25 = 14", "explanation": "Gallons needed for $350$ miles.", "diagram": null }
      ],
      "finalAnswer": "$14$ gallons"
    }
  },
  {
    "id": "gcse.ratio.direct-inverse.q043",
    "level": "GCSE",
    "topic": "Percentages and proportion",
    "subtopic": "Direct and inverse proportion",
    "subtopicId": "gcse.ratio.direct-inverse",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "value",
    "tags": ["inverse proportion", "context"],
    "questionText": "$4$ hoses fill a trough in $90$ minutes. How long would $6$ hoses take?",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Find the total work.", "workingLatex": "4 \\times 90 = 360 \\text{ hose-minutes}", "explanation": "More hoses means less time.", "diagram": null },
        { "stepNumber": 2, "description": "Divide.", "workingLatex": "360 \\div 6 = 60", "explanation": "Share the work among $6$ hoses.", "diagram": null }
      ],
      "finalAnswer": "$60$ minutes"
    }
  },
  {
    "id": "gcse.ratio.direct-inverse.q044",
    "level": "GCSE",
    "topic": "Percentages and proportion",
    "subtopic": "Direct and inverse proportion",
    "subtopicId": "gcse.ratio.direct-inverse",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "value",
    "tags": ["direct proportion", "equation"],
    "questionText": "$y$ is directly proportional to $x$. When $x = 9$, $y = 63$. Find $x$ when $y = 42$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Find the constant.", "workingLatex": "k = \\dfrac{63}{9} = 7", "explanation": "So $y = 7x$.", "diagram": null },
        { "stepNumber": 2, "description": "Solve for $x$.", "workingLatex": "x = \\dfrac{42}{7} = 6", "explanation": "Rearrange the equation.", "diagram": null }
      ],
      "finalAnswer": "$x = 6$"
    }
  },
  {
    "id": "gcse.ratio.direct-inverse.q045",
    "level": "GCSE",
    "topic": "Percentages and proportion",
    "subtopic": "Direct and inverse proportion",
    "subtopicId": "gcse.ratio.direct-inverse",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "value",
    "tags": ["inverse proportion", "equation"],
    "questionText": "$y$ is inversely proportional to $x$. When $x = 12$, $y = 5$. Find $y$ when $x = 15$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Find the constant.", "workingLatex": "k = 12 \\times 5 = 60", "explanation": "For inverse proportion, $k = xy$.", "diagram": null },
        { "stepNumber": 2, "description": "Use it.", "workingLatex": "y = \\dfrac{60}{15} = 4", "explanation": "Substitute $x = 15$.", "diagram": null }
      ],
      "finalAnswer": "$y = 4$"
    }
  },
  {
    "id": "gcse.ratio.direct-inverse.q046",
    "level": "GCSE",
    "topic": "Percentages and proportion",
    "subtopic": "Direct and inverse proportion",
    "subtopicId": "gcse.ratio.direct-inverse",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "value",
    "tags": ["direct proportion", "context"],
    "questionText": "$5$ litres of paint cover $30\\text{ m}^2$. How much area would $8$ litres cover?",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Find coverage per litre.", "workingLatex": "30 \\div 5 = 6 \\text{ m}^2", "explanation": "Area covered is proportional to paint used.", "diagram": null },
        { "stepNumber": 2, "description": "Scale up.", "workingLatex": "6 \\times 8 = 48", "explanation": "Multiply by $8$ litres.", "diagram": null }
      ],
      "finalAnswer": "$48\\text{ m}^2$"
    }
  },
  {
    "id": "gcse.ratio.direct-inverse.q047",
    "level": "GCSE",
    "topic": "Percentages and proportion",
    "subtopic": "Direct and inverse proportion",
    "subtopicId": "gcse.ratio.direct-inverse",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "text",
    "tags": ["direct proportion", "equation"],
    "questionText": "$y$ is directly proportional to $x$. When $x = 6$, $y = 48$. Write an equation and use it to find $y$ when $x = 5$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Find the constant.", "workingLatex": "k = \\dfrac{48}{6} = 8", "explanation": "So the equation is $y = 8x$.", "diagram": null },
        { "stepNumber": 2, "description": "Use the equation.", "workingLatex": "y = 8 \\times 5 = 40", "explanation": "Substitute $x = 5$.", "diagram": null }
      ],
      "finalAnswer": "$y = 8x$, so $y = 40$."
    }
  },
  {
    "id": "gcse.ratio.direct-inverse.q048",
    "level": "GCSE",
    "topic": "Percentages and proportion",
    "subtopic": "Direct and inverse proportion",
    "subtopicId": "gcse.ratio.direct-inverse",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "value",
    "tags": ["inverse proportion"],
    "questionText": "$y$ is inversely proportional to $x$. When $x = 5$, $y = 12$. Find $x$ when $y = 15$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Find the constant.", "workingLatex": "k = 5 \\times 12 = 60", "explanation": "For inverse proportion, $k = xy$.", "diagram": null },
        { "stepNumber": 2, "description": "Solve for $x$.", "workingLatex": "x = \\dfrac{60}{15} = 4", "explanation": "Rearrange $y = \\dfrac{60}{x}$.", "diagram": null }
      ],
      "finalAnswer": "$x = 4$"
    }
  },
  {
    "id": "gcse.ratio.direct-inverse.q049",
    "level": "GCSE",
    "topic": "Percentages and proportion",
    "subtopic": "Direct and inverse proportion",
    "subtopicId": "gcse.ratio.direct-inverse",
    "difficulty": "Hard",
    "marks": 4,
    "answerType": "value",
    "tags": ["direct proportion", "square"],
    "questionText": "$y$ is directly proportional to $x^2$. When $x = 2$, $y = 8$. Find $y$ when $x = 3$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Write the form.", "workingLatex": "y = kx^2", "explanation": "Proportional to the square of $x$.", "diagram": null },
        { "stepNumber": 2, "description": "Find $k$.", "workingLatex": "k = \\dfrac{8}{2^2} = 2", "explanation": "Substitute the known values.", "diagram": null },
        { "stepNumber": 3, "description": "Use it.", "workingLatex": "y = 2 \\times 3^2 = 18", "explanation": "Substitute $x = 3$.", "diagram": null }
      ],
      "finalAnswer": "$y = 18$"
    }
  },
  {
    "id": "gcse.ratio.direct-inverse.q050",
    "level": "GCSE",
    "topic": "Percentages and proportion",
    "subtopic": "Direct and inverse proportion",
    "subtopicId": "gcse.ratio.direct-inverse",
    "difficulty": "Hard",
    "marks": 4,
    "answerType": "value",
    "tags": ["direct proportion", "square"],
    "questionText": "$y$ is directly proportional to $x^2$. When $x = 3$, $y = 27$. Find $y$ when $x = 5$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Write the form.", "workingLatex": "y = kx^2", "explanation": "Proportional to the square of $x$.", "diagram": null },
        { "stepNumber": 2, "description": "Find $k$.", "workingLatex": "k = \\dfrac{27}{9} = 3", "explanation": "Substitute the known values.", "diagram": null },
        { "stepNumber": 3, "description": "Use it.", "workingLatex": "y = 3 \\times 25 = 75", "explanation": "Substitute $x = 5$.", "diagram": null }
      ],
      "finalAnswer": "$y = 75$"
    }
  },
  {
    "id": "gcse.ratio.direct-inverse.q051",
    "level": "GCSE",
    "topic": "Percentages and proportion",
    "subtopic": "Direct and inverse proportion",
    "subtopicId": "gcse.ratio.direct-inverse",
    "difficulty": "Hard",
    "marks": 4,
    "answerType": "value",
    "tags": ["direct proportion", "square root"],
    "questionText": "$y$ is directly proportional to $\\sqrt{x}$. When $x = 4$, $y = 12$. Find $y$ when $x = 9$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Write the form.", "workingLatex": "y = k\\sqrt{x}", "explanation": "Proportional to the square root of $x$.", "diagram": null },
        { "stepNumber": 2, "description": "Find $k$.", "workingLatex": "k = \\dfrac{12}{\\sqrt{4}} = 6", "explanation": "Substitute the known values.", "diagram": null },
        { "stepNumber": 3, "description": "Use it.", "workingLatex": "y = 6 \\times \\sqrt{9} = 18", "explanation": "Substitute $x = 9$.", "diagram": null }
      ],
      "finalAnswer": "$y = 18$"
    }
  },
  {
    "id": "gcse.ratio.direct-inverse.q052",
    "level": "GCSE",
    "topic": "Percentages and proportion",
    "subtopic": "Direct and inverse proportion",
    "subtopicId": "gcse.ratio.direct-inverse",
    "difficulty": "Hard",
    "marks": 4,
    "answerType": "value",
    "tags": ["direct proportion", "square root"],
    "questionText": "$y$ is directly proportional to $\\sqrt{x}$. When $x = 25$, $y = 10$. Find $y$ when $x = 49$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Write the form.", "workingLatex": "y = k\\sqrt{x}", "explanation": "Proportional to the square root of $x$.", "diagram": null },
        { "stepNumber": 2, "description": "Find $k$.", "workingLatex": "k = \\dfrac{10}{\\sqrt{25}} = 2", "explanation": "Substitute the known values.", "diagram": null },
        { "stepNumber": 3, "description": "Use it.", "workingLatex": "y = 2 \\times \\sqrt{49} = 14", "explanation": "Substitute $x = 49$.", "diagram": null }
      ],
      "finalAnswer": "$y = 14$"
    }
  },
  {
    "id": "gcse.ratio.direct-inverse.q053",
    "level": "GCSE",
    "topic": "Percentages and proportion",
    "subtopic": "Direct and inverse proportion",
    "subtopicId": "gcse.ratio.direct-inverse",
    "difficulty": "Hard",
    "marks": 4,
    "answerType": "value",
    "tags": ["inverse proportion", "square"],
    "questionText": "$y$ is inversely proportional to $x^2$. When $x = 3$, $y = 4$. Find $y$ when $x = 6$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Write the form.", "workingLatex": "y = \\dfrac{k}{x^2}", "explanation": "Inversely proportional to the square of $x$.", "diagram": null },
        { "stepNumber": 2, "description": "Find $k$.", "workingLatex": "k = 4 \\times 3^2 = 36", "explanation": "Rearrange to $k = yx^2$.", "diagram": null },
        { "stepNumber": 3, "description": "Use it.", "workingLatex": "y = \\dfrac{36}{6^2} = 1", "explanation": "Substitute $x = 6$.", "diagram": null }
      ],
      "finalAnswer": "$y = 1$"
    }
  },
  {
    "id": "gcse.ratio.direct-inverse.q054",
    "level": "GCSE",
    "topic": "Percentages and proportion",
    "subtopic": "Direct and inverse proportion",
    "subtopicId": "gcse.ratio.direct-inverse",
    "difficulty": "Hard",
    "marks": 4,
    "answerType": "value",
    "tags": ["inverse proportion", "square"],
    "questionText": "$y$ is inversely proportional to $x^2$. When $x = 5$, $y = 2$. Find $y$ when $x = 10$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Write the form.", "workingLatex": "y = \\dfrac{k}{x^2}", "explanation": "Inversely proportional to the square of $x$.", "diagram": null },
        { "stepNumber": 2, "description": "Find $k$.", "workingLatex": "k = 2 \\times 5^2 = 50", "explanation": "Rearrange to $k = yx^2$.", "diagram": null },
        { "stepNumber": 3, "description": "Use it.", "workingLatex": "y = \\dfrac{50}{100} = 0.5", "explanation": "Substitute $x = 10$.", "diagram": null }
      ],
      "finalAnswer": "$y = 0.5$"
    }
  },
  {
    "id": "gcse.ratio.direct-inverse.q055",
    "level": "GCSE",
    "topic": "Percentages and proportion",
    "subtopic": "Direct and inverse proportion",
    "subtopicId": "gcse.ratio.direct-inverse",
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "value",
    "tags": ["direct proportion", "square"],
    "questionText": "$y$ is directly proportional to $x^2$. When $x = 5$, $y = 50$. Find $x$ when $y = 200$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Find the constant.", "workingLatex": "k = \\dfrac{50}{25} = 2", "explanation": "So $y = 2x^2$.", "diagram": null },
        { "stepNumber": 2, "description": "Solve for $x^2$.", "workingLatex": "x^2 = \\dfrac{200}{2} = 100", "explanation": "Rearrange the equation.", "diagram": null },
        { "stepNumber": 3, "description": "Take the root.", "workingLatex": "x = \\sqrt{100} = 10", "explanation": "Take the positive square root.", "diagram": null }
      ],
      "finalAnswer": "$x = 10$"
    }
  },
  {
    "id": "gcse.ratio.direct-inverse.q056",
    "level": "GCSE",
    "topic": "Percentages and proportion",
    "subtopic": "Direct and inverse proportion",
    "subtopicId": "gcse.ratio.direct-inverse",
    "difficulty": "Hard",
    "marks": 4,
    "answerType": "value",
    "tags": ["direct proportion", "cube"],
    "questionText": "$y$ is directly proportional to $x^3$. When $x = 2$, $y = 16$. Find $y$ when $x = 3$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Write the form.", "workingLatex": "y = kx^3", "explanation": "Proportional to the cube of $x$.", "diagram": null },
        { "stepNumber": 2, "description": "Find $k$.", "workingLatex": "k = \\dfrac{16}{8} = 2", "explanation": "Substitute the known values.", "diagram": null },
        { "stepNumber": 3, "description": "Use it.", "workingLatex": "y = 2 \\times 27 = 54", "explanation": "Substitute $x = 3$.", "diagram": null }
      ],
      "finalAnswer": "$y = 54$"
    }
  },
  {
    "id": "gcse.ratio.direct-inverse.q057",
    "level": "GCSE",
    "topic": "Percentages and proportion",
    "subtopic": "Direct and inverse proportion",
    "subtopicId": "gcse.ratio.direct-inverse",
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "value",
    "tags": ["direct proportion", "square root"],
    "questionText": "$y$ is directly proportional to $\\sqrt{x}$. When $x = 9$, $y = 6$. Find $x$ when $y = 10$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Find the constant.", "workingLatex": "k = \\dfrac{6}{\\sqrt{9}} = 2", "explanation": "So $y = 2\\sqrt{x}$.", "diagram": null },
        { "stepNumber": 2, "description": "Solve for $\\sqrt{x}$.", "workingLatex": "\\sqrt{x} = \\dfrac{10}{2} = 5", "explanation": "Rearrange the equation.", "diagram": null },
        { "stepNumber": 3, "description": "Square.", "workingLatex": "x = 5^2 = 25", "explanation": "Square both sides.", "diagram": null }
      ],
      "finalAnswer": "$x = 25$"
    }
  },
  {
    "id": "gcse.ratio.direct-inverse.q058",
    "level": "GCSE",
    "topic": "Percentages and proportion",
    "subtopic": "Direct and inverse proportion",
    "subtopicId": "gcse.ratio.direct-inverse",
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "value",
    "tags": ["inverse proportion", "equation"],
    "questionText": "$y$ is inversely proportional to $x$. When $x = 5$, $y = 12$. Find $x$ when $y = 15$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Find the constant.", "workingLatex": "k = 5 \\times 12 = 60", "explanation": "For inverse proportion, $k = xy$.", "diagram": null },
        { "stepNumber": 2, "description": "Solve for $x$.", "workingLatex": "x = \\dfrac{60}{15} = 4", "explanation": "Rearrange $y = \\dfrac{60}{x}$.", "diagram": null }
      ],
      "finalAnswer": "$x = 4$"
    }
  },
  {
    "id": "gcse.ratio.direct-inverse.q059",
    "level": "GCSE",
    "topic": "Percentages and proportion",
    "subtopic": "Direct and inverse proportion",
    "subtopicId": "gcse.ratio.direct-inverse",
    "difficulty": "Hard",
    "marks": 4,
    "answerType": "text",
    "tags": ["direct proportion", "reasoning", "square"],
    "questionText": "$y$ is directly proportional to $x^2$. If $x$ is doubled, what happens to $y$?",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Write the relationship.", "workingLatex": "y = kx^2", "explanation": "Proportional to the square of $x$.", "diagram": null },
        { "stepNumber": 2, "description": "Replace $x$ with $2x$.", "workingLatex": "k(2x)^2 = 4kx^2", "explanation": "Squaring $2x$ gives $4x^2$.", "diagram": null },
        { "stepNumber": 3, "description": "Interpret.", "workingLatex": "4kx^2 = 4y", "explanation": "The new value is $4$ times the old $y$.", "diagram": null }
      ],
      "finalAnswer": "$y$ becomes $4$ times larger."
    }
  },
  {
    "id": "gcse.ratio.direct-inverse.q060",
    "level": "GCSE",
    "topic": "Percentages and proportion",
    "subtopic": "Direct and inverse proportion",
    "subtopicId": "gcse.ratio.direct-inverse",
    "difficulty": "Hard",
    "marks": 4,
    "answerType": "text",
    "tags": ["inverse proportion", "reasoning"],
    "questionText": "$y$ is inversely proportional to $x$. If $x$ is trebled, what happens to $y$?",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Write the relationship.", "workingLatex": "y = \\dfrac{k}{x}", "explanation": "Inverse proportion.", "diagram": null },
        { "stepNumber": 2, "description": "Replace $x$ with $3x$.", "workingLatex": "\\dfrac{k}{3x} = \\dfrac{1}{3} \\cdot \\dfrac{k}{x}", "explanation": "Dividing by $3x$ is a third of dividing by $x$.", "diagram": null },
        { "stepNumber": 3, "description": "Interpret.", "workingLatex": "\\dfrac{1}{3}y", "explanation": "The new value is a third of the old $y$.", "diagram": null }
      ],
      "finalAnswer": "$y$ is divided by $3$."
    }
  },
  {
    "id": "gcse.ratio.direct-inverse.q061",
    "level": "GCSE",
    "topic": "Percentages and proportion",
    "subtopic": "Direct and inverse proportion",
    "subtopicId": "gcse.ratio.direct-inverse",
    "difficulty": "Hard",
    "marks": 2,
    "answerType": "text",
    "tags": ["direct proportion", "square", "graph"],
    "questionText": "Describe the shape of the graph of $y$ against $x$ when $y$ is directly proportional to $x^2$ (for $x \\ge 0$).",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall the form.", "workingLatex": "y = kx^2", "explanation": "This is a quadratic relationship.", "diagram": null },
        { "stepNumber": 2, "description": "Describe.", "workingLatex": "\\text{rising curve through the origin}", "explanation": "It starts at the origin and steepens as $x$ increases.", "diagram": null }
      ],
      "finalAnswer": "A curve through the origin that gets steeper (part of a parabola)."
    }
  },
  {
    "id": "gcse.ratio.direct-inverse.q062",
    "level": "GCSE",
    "topic": "Percentages and proportion",
    "subtopic": "Direct and inverse proportion",
    "subtopicId": "gcse.ratio.direct-inverse",
    "difficulty": "Hard",
    "marks": 4,
    "answerType": "value",
    "tags": ["direct proportion", "square"],
    "questionText": "$y$ is directly proportional to $x^2$. When $x = 4$, $y = 48$. Find $y$ when $x = 10$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Find the constant.", "workingLatex": "k = \\dfrac{48}{16} = 3", "explanation": "So $y = 3x^2$.", "diagram": null },
        { "stepNumber": 2, "description": "Use it.", "workingLatex": "y = 3 \\times 100 = 300", "explanation": "Substitute $x = 10$.", "diagram": null }
      ],
      "finalAnswer": "$y = 300$"
    }
  },
  {
    "id": "gcse.ratio.direct-inverse.q063",
    "level": "GCSE",
    "topic": "Percentages and proportion",
    "subtopic": "Direct and inverse proportion",
    "subtopicId": "gcse.ratio.direct-inverse",
    "difficulty": "Hard",
    "marks": 4,
    "answerType": "value",
    "tags": ["inverse proportion", "square"],
    "questionText": "$y$ is inversely proportional to $x^2$. When $x = 2$, $y = 8$. Find $y$ when $x = 4$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Find the constant.", "workingLatex": "k = 8 \\times 2^2 = 32", "explanation": "For $y = \\dfrac{k}{x^2}$, $k = yx^2$.", "diagram": null },
        { "stepNumber": 2, "description": "Use it.", "workingLatex": "y = \\dfrac{32}{16} = 2", "explanation": "Substitute $x = 4$.", "diagram": null }
      ],
      "finalAnswer": "$y = 2$"
    }
  },
  {
    "id": "gcse.ratio.direct-inverse.q064",
    "level": "GCSE",
    "topic": "Percentages and proportion",
    "subtopic": "Direct and inverse proportion",
    "subtopicId": "gcse.ratio.direct-inverse",
    "difficulty": "Hard",
    "marks": 4,
    "answerType": "value",
    "tags": ["direct proportion", "square root"],
    "questionText": "$y$ is directly proportional to $\\sqrt{x}$. When $x = 16$, $y = 20$. Find $y$ when $x = 64$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Find the constant.", "workingLatex": "k = \\dfrac{20}{\\sqrt{16}} = 5", "explanation": "So $y = 5\\sqrt{x}$.", "diagram": null },
        { "stepNumber": 2, "description": "Use it.", "workingLatex": "y = 5 \\times \\sqrt{64} = 40", "explanation": "Substitute $x = 64$.", "diagram": null }
      ],
      "finalAnswer": "$y = 40$"
    }
  },
  {
    "id": "gcse.ratio.direct-inverse.q065",
    "level": "GCSE",
    "topic": "Percentages and proportion",
    "subtopic": "Direct and inverse proportion",
    "subtopicId": "gcse.ratio.direct-inverse",
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "value",
    "tags": ["inverse proportion", "context"],
    "questionText": "The pressure $P$ of a gas is inversely proportional to its volume $V$. When $V = 5$, $P = 200$. Find $P$ when $V = 8$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Write the form.", "workingLatex": "P = \\dfrac{k}{V}", "explanation": "Pressure is inversely proportional to volume.", "diagram": null },
        { "stepNumber": 2, "description": "Find $k$.", "workingLatex": "k = 200 \\times 5 = 1000", "explanation": "Rearrange to $k = PV$.", "diagram": null },
        { "stepNumber": 3, "description": "Use it.", "workingLatex": "P = \\dfrac{1000}{8} = 125", "explanation": "Substitute $V = 8$.", "diagram": null }
      ],
      "finalAnswer": "$P = 125$"
    }
  },
  {
    "id": "gcse.ratio.direct-inverse.q066",
    "level": "GCSE",
    "topic": "Percentages and proportion",
    "subtopic": "Direct and inverse proportion",
    "subtopicId": "gcse.ratio.direct-inverse",
    "difficulty": "Hard",
    "marks": 4,
    "answerType": "text",
    "tags": ["direct proportion", "square", "equation"],
    "questionText": "$y$ is directly proportional to $x^2$ and passes through $(6, 72)$. Find the equation connecting $y$ and $x$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Write the form.", "workingLatex": "y = kx^2", "explanation": "Proportional to the square of $x$.", "diagram": null },
        { "stepNumber": 2, "description": "Find $k$.", "workingLatex": "k = \\dfrac{72}{36} = 2", "explanation": "Substitute the point.", "diagram": null },
        { "stepNumber": 3, "description": "State the equation.", "workingLatex": "y = 2x^2", "explanation": "Put $k$ back in.", "diagram": null }
      ],
      "finalAnswer": "$y = 2x^2$"
    }
  },
  {
    "id": "gcse.ratio.direct-inverse.q067",
    "level": "GCSE",
    "topic": "Percentages and proportion",
    "subtopic": "Direct and inverse proportion",
    "subtopicId": "gcse.ratio.direct-inverse",
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "value",
    "tags": ["inverse proportion", "square root"],
    "questionText": "$y$ is inversely proportional to $\\sqrt{x}$. When $x = 9$, $y = 4$. Find $y$ when $x = 36$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Write the form.", "workingLatex": "y = \\dfrac{k}{\\sqrt{x}}", "explanation": "Inversely proportional to the square root of $x$.", "diagram": null },
        { "stepNumber": 2, "description": "Find $k$.", "workingLatex": "k = 4 \\times \\sqrt{9} = 12", "explanation": "Rearrange to $k = y\\sqrt{x}$.", "diagram": null },
        { "stepNumber": 3, "description": "Use it.", "workingLatex": "y = \\dfrac{12}{\\sqrt{36}} = 2", "explanation": "Substitute $x = 36$.", "diagram": null }
      ],
      "finalAnswer": "$y = 2$"
    }
  },
  {
    "id": "gcse.ratio.direct-inverse.q068",
    "level": "GCSE",
    "topic": "Percentages and proportion",
    "subtopic": "Direct and inverse proportion",
    "subtopicId": "gcse.ratio.direct-inverse",
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "value",
    "tags": ["direct proportion", "square", "context"],
    "questionText": "The distance $d$ a stone falls is directly proportional to the square of the time $t$. When $t = 2$, $d = 20$. Find $d$ when $t = 5$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Write the form.", "workingLatex": "d = kt^2", "explanation": "Distance is proportional to the square of time.", "diagram": null },
        { "stepNumber": 2, "description": "Find $k$.", "workingLatex": "k = \\dfrac{20}{4} = 5", "explanation": "Substitute the known values.", "diagram": null },
        { "stepNumber": 3, "description": "Use it.", "workingLatex": "d = 5 \\times 25 = 125", "explanation": "Substitute $t = 5$.", "diagram": null }
      ],
      "finalAnswer": "$d = 125$"
    }
  },
  {
    "id": "gcse.ratio.direct-inverse.q069",
    "level": "GCSE",
    "topic": "Percentages and proportion",
    "subtopic": "Direct and inverse proportion",
    "subtopicId": "gcse.ratio.direct-inverse",
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "value",
    "tags": ["direct proportion", "square"],
    "questionText": "$y$ is directly proportional to $x^2$. When $x = 5$, $y = 100$. Find $x$ when $y = 144$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Find the constant.", "workingLatex": "k = \\dfrac{100}{25} = 4", "explanation": "So $y = 4x^2$.", "diagram": null },
        { "stepNumber": 2, "description": "Solve for $x^2$.", "workingLatex": "x^2 = \\dfrac{144}{4} = 36", "explanation": "Rearrange the equation.", "diagram": null },
        { "stepNumber": 3, "description": "Take the root.", "workingLatex": "x = \\sqrt{36} = 6", "explanation": "Take the positive square root.", "diagram": null }
      ],
      "finalAnswer": "$x = 6$"
    }
  },
  {
    "id": "gcse.ratio.direct-inverse.q070",
    "level": "GCSE",
    "topic": "Percentages and proportion",
    "subtopic": "Direct and inverse proportion",
    "subtopicId": "gcse.ratio.direct-inverse",
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "value",
    "tags": ["inverse proportion", "square", "context"],
    "questionText": "The intensity $I$ of light is inversely proportional to the square of the distance $d$. When $d = 2$, $I = 50$. Find $I$ when $d = 5$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Write the form.", "workingLatex": "I = \\dfrac{k}{d^2}", "explanation": "Intensity follows an inverse-square law.", "diagram": null },
        { "stepNumber": 2, "description": "Find $k$.", "workingLatex": "k = 50 \\times 2^2 = 200", "explanation": "Rearrange to $k = Id^2$.", "diagram": null },
        { "stepNumber": 3, "description": "Use it.", "workingLatex": "I = \\dfrac{200}{25} = 8", "explanation": "Substitute $d = 5$.", "diagram": null }
      ],
      "finalAnswer": "$I = 8$"
    }
  }
];
