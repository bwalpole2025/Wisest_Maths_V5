import { Question } from "@/lib/types";

export const questions: Question[] = [
  {
    "id": "gcse.number.powers-roots.q001",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Powers and roots",
    "subtopicId": "gcse.number.powers-roots",
    "difficulty": "Easy",
    "marks": 1,
    "answerType": "numeric",
    "tags": ["squares", "powers", "evaluate"],
    "questionText": "Work out $3^2$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Read the power.", "workingLatex": "3^2", "explanation": "The base is $3$ and the small $2$ (the index) tells us to use $3$ as a factor two times.", "diagram": null },
        { "stepNumber": 2, "description": "Write it as a multiplication.", "workingLatex": "3^2 = 3 \\times 3", "explanation": "Squaring a number simply means multiplying that number by itself.", "diagram": null },
        { "stepNumber": 3, "description": "Multiply the two numbers.", "workingLatex": "3 \\times 3 = 9", "explanation": "Three groups of three give $9$.", "diagram": null },
        { "stepNumber": 4, "description": "State the value of the power.", "workingLatex": "3^2 = 9", "explanation": "So the square of $3$ is $9$.", "diagram": null },
        { "stepNumber": 5, "description": "Check with an area picture.", "workingLatex": "3 \\times 3 = 9", "explanation": "A $3$ by $3$ grid of unit squares contains $9$ squares, which matches our answer.", "diagram": null },
        { "stepNumber": 6, "description": "Write the final answer.", "workingLatex": "3^2 = 9", "explanation": "The completed calculation gives $9$.", "diagram": null }
      ],
      "finalAnswer": "$9$"
    }
  },
  {
    "id": "gcse.number.powers-roots.q002",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Powers and roots",
    "subtopicId": "gcse.number.powers-roots",
    "difficulty": "Easy",
    "marks": 1,
    "answerType": "numeric",
    "tags": ["squares", "powers", "evaluate"],
    "questionText": "Work out $7^2$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Read the power.", "workingLatex": "7^2", "explanation": "The base is $7$ and the index $2$ means we use $7$ as a factor twice.", "diagram": null },
        { "stepNumber": 2, "description": "Write it as a multiplication.", "workingLatex": "7^2 = 7 \\times 7", "explanation": "To square a number we multiply it by itself.", "diagram": null },
        { "stepNumber": 3, "description": "Estimate first.", "workingLatex": "7 \\times 7 \\approx 7 \\times 7", "explanation": "We know $7$ is a little less than $10$, so the answer should be a little less than $70$.", "diagram": null },
        { "stepNumber": 4, "description": "Multiply the two numbers.", "workingLatex": "7 \\times 7 = 49", "explanation": "Seven sevens give $49$, which sits just under $70$ as expected.", "diagram": null },
        { "stepNumber": 5, "description": "State the value of the power.", "workingLatex": "7^2 = 49", "explanation": "So the square of $7$ is $49$.", "diagram": null },
        { "stepNumber": 6, "description": "Write the final answer.", "workingLatex": "7^2 = 49", "explanation": "The completed calculation gives $49$.", "diagram": null }
      ],
      "finalAnswer": "$49$"
    }
  },
  {
    "id": "gcse.number.powers-roots.q003",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Powers and roots",
    "subtopicId": "gcse.number.powers-roots",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "numeric",
    "tags": ["cubes", "powers", "evaluate"],
    "questionText": "Work out $2^3$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Read the power.", "workingLatex": "2^3", "explanation": "The base is $2$ and the index $3$ means we use $2$ as a factor three times.", "diagram": null },
        { "stepNumber": 2, "description": "Write it as a multiplication.", "workingLatex": "2^3 = 2 \\times 2 \\times 2", "explanation": "Cubing a number means multiplying it by itself three times.", "diagram": null },
        { "stepNumber": 3, "description": "Multiply the first two.", "workingLatex": "2 \\times 2 = 4", "explanation": "We work left to right, so start with the first pair of twos.", "diagram": null },
        { "stepNumber": 4, "description": "Multiply by the last factor.", "workingLatex": "4 \\times 2 = 8", "explanation": "Now multiply that result by the remaining $2$.", "diagram": null },
        { "stepNumber": 5, "description": "State the value of the power.", "workingLatex": "2^3 = 8", "explanation": "So the cube of $2$ is $8$.", "diagram": null },
        { "stepNumber": 6, "description": "Check with a volume picture.", "workingLatex": "2 \\times 2 \\times 2 = 8", "explanation": "A cube built from $2$ small cubes along each edge contains $8$ small cubes, matching our answer.", "diagram": null }
      ],
      "finalAnswer": "$8$"
    }
  },
  {
    "id": "gcse.number.powers-roots.q004",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Powers and roots",
    "subtopicId": "gcse.number.powers-roots",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "numeric",
    "tags": ["cubes", "powers", "evaluate"],
    "questionText": "Work out $5^3$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Read the power.", "workingLatex": "5^3", "explanation": "The base is $5$ and the index $3$ tells us to use $5$ as a factor three times.", "diagram": null },
        { "stepNumber": 2, "description": "Write it as a multiplication.", "workingLatex": "5^3 = 5 \\times 5 \\times 5", "explanation": "Cubing means multiplying the number by itself three times.", "diagram": null },
        { "stepNumber": 3, "description": "Multiply the first two.", "workingLatex": "5 \\times 5 = 25", "explanation": "We begin with the first pair of fives.", "diagram": null },
        { "stepNumber": 4, "description": "Multiply by the last factor.", "workingLatex": "25 \\times 5 = 125", "explanation": "Multiplying $25$ by $5$ gives $125$.", "diagram": null },
        { "stepNumber": 5, "description": "State the value of the power.", "workingLatex": "5^3 = 125", "explanation": "So the cube of $5$ is $125$.", "diagram": null },
        { "stepNumber": 6, "description": "Sense-check the size.", "workingLatex": "2^3 = 8, \\ 5^3 = 125", "explanation": "Cubes grow quickly, so a much bigger base like $5$ giving $125$ is reasonable.", "diagram": null },
        { "stepNumber": 7, "description": "Write the final answer.", "workingLatex": "5^3 = 125", "explanation": "The completed calculation gives $125$.", "diagram": null }
      ],
      "finalAnswer": "$125$"
    }
  },
  {
    "id": "gcse.number.powers-roots.q005",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Powers and roots",
    "subtopicId": "gcse.number.powers-roots",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "numeric",
    "tags": ["powers of 2", "powers", "evaluate"],
    "questionText": "Work out $2^4$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Read the power.", "workingLatex": "2^4", "explanation": "The base is $2$ and the index $4$ means we use $2$ as a factor four times.", "diagram": null },
        { "stepNumber": 2, "description": "Write it as a multiplication.", "workingLatex": "2^4 = 2 \\times 2 \\times 2 \\times 2", "explanation": "The index tells us exactly how many twos to multiply together.", "diagram": null },
        { "stepNumber": 3, "description": "Multiply the first pair.", "workingLatex": "2 \\times 2 = 4", "explanation": "We build up the product step by step, starting on the left.", "diagram": null },
        { "stepNumber": 4, "description": "Multiply by the next factor.", "workingLatex": "4 \\times 2 = 8", "explanation": "Doubling $4$ gives $8$.", "diagram": null },
        { "stepNumber": 5, "description": "Multiply by the final factor.", "workingLatex": "8 \\times 2 = 16", "explanation": "Doubling once more gives $16$.", "diagram": null },
        { "stepNumber": 6, "description": "State the final answer.", "workingLatex": "2^4 = 16", "explanation": "So $2$ to the power $4$ is $16$.", "diagram": null }
      ],
      "finalAnswer": "$16$"
    }
  },
  {
    "id": "gcse.number.powers-roots.q006",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Powers and roots",
    "subtopicId": "gcse.number.powers-roots",
    "difficulty": "Easy",
    "marks": 1,
    "answerType": "numeric",
    "tags": ["squares", "powers", "evaluate"],
    "questionText": "Work out $10^2$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Read the power.", "workingLatex": "10^2", "explanation": "The base is $10$ and the index $2$ means multiply $10$ by itself.", "diagram": null },
        { "stepNumber": 2, "description": "Write it as a multiplication.", "workingLatex": "10^2 = 10 \\times 10", "explanation": "Squaring a number is multiplying it by itself.", "diagram": null },
        { "stepNumber": 3, "description": "Multiply.", "workingLatex": "10 \\times 10 = 100", "explanation": "Multiplying by $10$ shifts the digits one place, turning $10$ into $100$.", "diagram": null },
        { "stepNumber": 4, "description": "State the value of the power.", "workingLatex": "10^2 = 100", "explanation": "So $10$ squared is one hundred.", "diagram": null },
        { "stepNumber": 5, "description": "Note the zero pattern.", "workingLatex": "10^2 = 100", "explanation": "A power of $10$ has the same number of zeros as the index, and $2$ zeros gives $100$.", "diagram": null },
        { "stepNumber": 6, "description": "Write the final answer.", "workingLatex": "10^2 = 100", "explanation": "The completed calculation gives $100$.", "diagram": null }
      ],
      "finalAnswer": "$100$"
    }
  },
  {
    "id": "gcse.number.powers-roots.q007",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Powers and roots",
    "subtopicId": "gcse.number.powers-roots",
    "difficulty": "Easy",
    "marks": 1,
    "answerType": "numeric",
    "tags": ["squares", "powers", "evaluate"],
    "questionText": "Work out $4^2$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Read the power.", "workingLatex": "4^2", "explanation": "The base is $4$ and the index $2$ means we use $4$ as a factor twice.", "diagram": null },
        { "stepNumber": 2, "description": "Write it as a multiplication.", "workingLatex": "4^2 = 4 \\times 4", "explanation": "To square a number we multiply it by itself.", "diagram": null },
        { "stepNumber": 3, "description": "Multiply.", "workingLatex": "4 \\times 4 = 16", "explanation": "Four fours make $16$.", "diagram": null },
        { "stepNumber": 4, "description": "State the value of the power.", "workingLatex": "4^2 = 16", "explanation": "So the square of $4$ is $16$.", "diagram": null },
        { "stepNumber": 5, "description": "Check with an area picture.", "workingLatex": "4 \\times 4 = 16", "explanation": "A $4$ by $4$ square of unit tiles contains $16$ tiles, confirming the answer.", "diagram": null },
        { "stepNumber": 6, "description": "Write the final answer.", "workingLatex": "4^2 = 16", "explanation": "The completed calculation gives $16$.", "diagram": null }
      ],
      "finalAnswer": "$16$"
    }
  },
  {
    "id": "gcse.number.powers-roots.q008",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Powers and roots",
    "subtopicId": "gcse.number.powers-roots",
    "difficulty": "Easy",
    "marks": 1,
    "answerType": "numeric",
    "tags": ["square roots", "roots", "evaluate"],
    "questionText": "Work out $\\sqrt{49}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Understand the square root.", "workingLatex": "\\sqrt{49} = ?", "explanation": "A square root asks: which positive number, when squared, gives $49$?", "diagram": null },
        { "stepNumber": 2, "description": "Try a sensible number.", "workingLatex": "7^2 = 7 \\times 7", "explanation": "$49$ is a well-known square, so we test $7$ because it feels about the right size.", "diagram": null },
        { "stepNumber": 3, "description": "Square the trial number.", "workingLatex": "7 \\times 7 = 49", "explanation": "Squaring $7$ gives exactly $49$.", "diagram": null },
        { "stepNumber": 4, "description": "Match to the question.", "workingLatex": "\\sqrt{49} = 7", "explanation": "Since $7^2 = 49$, the square root of $49$ is $7$.", "diagram": null },
        { "stepNumber": 5, "description": "State the positive root.", "workingLatex": "\\sqrt{49} = 7", "explanation": "The $\\sqrt{\\ }$ symbol means the positive root, so we take $7$.", "diagram": null },
        { "stepNumber": 6, "description": "Write the final answer.", "workingLatex": "\\sqrt{49} = 7", "explanation": "The completed calculation gives $7$.", "diagram": null }
      ],
      "finalAnswer": "$7$"
    }
  },
  {
    "id": "gcse.number.powers-roots.q009",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Powers and roots",
    "subtopicId": "gcse.number.powers-roots",
    "difficulty": "Easy",
    "marks": 1,
    "answerType": "numeric",
    "tags": ["square roots", "roots", "evaluate"],
    "questionText": "Work out $\\sqrt{81}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Understand the square root.", "workingLatex": "\\sqrt{81} = ?", "explanation": "We need the positive number whose square is $81$.", "diagram": null },
        { "stepNumber": 2, "description": "Estimate the size.", "workingLatex": "9^2 = 81", "explanation": "$81$ is close to $80$, and $9 \\times 9$ is a familiar fact worth testing.", "diagram": null },
        { "stepNumber": 3, "description": "Square the trial number.", "workingLatex": "9 \\times 9 = 81", "explanation": "Squaring $9$ gives exactly $81$.", "diagram": null },
        { "stepNumber": 4, "description": "Match to the question.", "workingLatex": "\\sqrt{81} = 9", "explanation": "Because $9^2 = 81$, the square root of $81$ is $9$.", "diagram": null },
        { "stepNumber": 5, "description": "Take the positive root.", "workingLatex": "\\sqrt{81} = 9", "explanation": "The root symbol asks for the positive value, so the answer is $9$.", "diagram": null },
        { "stepNumber": 6, "description": "Write the final answer.", "workingLatex": "\\sqrt{81} = 9", "explanation": "The completed calculation gives $9$.", "diagram": null }
      ],
      "finalAnswer": "$9$"
    }
  },
  {
    "id": "gcse.number.powers-roots.q010",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Powers and roots",
    "subtopicId": "gcse.number.powers-roots",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "numeric",
    "tags": ["square roots", "roots", "evaluate"],
    "questionText": "Work out $\\sqrt{144}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Understand the square root.", "workingLatex": "\\sqrt{144} = ?", "explanation": "We are looking for the positive number that squares to $144$.", "diagram": null },
        { "stepNumber": 2, "description": "Bracket the answer.", "workingLatex": "10^2 = 100, \\ 13^2 = 169", "explanation": "Since $144$ lies between $100$ and $169$, the root must be between $10$ and $13$.", "diagram": null },
        { "stepNumber": 3, "description": "Test a value in range.", "workingLatex": "12^2 = 12 \\times 12", "explanation": "$12$ sits nicely in that range and $12 \\times 12$ is a standard square.", "diagram": null },
        { "stepNumber": 4, "description": "Square the trial number.", "workingLatex": "12 \\times 12 = 144", "explanation": "Squaring $12$ gives exactly $144$.", "diagram": null },
        { "stepNumber": 5, "description": "Match to the question.", "workingLatex": "\\sqrt{144} = 12", "explanation": "Because $12^2 = 144$, the square root of $144$ is $12$.", "diagram": null },
        { "stepNumber": 6, "description": "Take the positive root.", "workingLatex": "\\sqrt{144} = 12", "explanation": "The symbol asks for the positive value, giving $12$.", "diagram": null },
        { "stepNumber": 7, "description": "Write the final answer.", "workingLatex": "\\sqrt{144} = 12", "explanation": "The completed calculation gives $12$.", "diagram": null }
      ],
      "finalAnswer": "$12$"
    }
  },
  {
    "id": "gcse.number.powers-roots.q011",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Powers and roots",
    "subtopicId": "gcse.number.powers-roots",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "numeric",
    "tags": ["cube roots", "roots", "evaluate"],
    "questionText": "Work out $\\sqrt[3]{27}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Understand the cube root.", "workingLatex": "\\sqrt[3]{27} = ?", "explanation": "A cube root asks: which number, when cubed, gives $27$?", "diagram": null },
        { "stepNumber": 2, "description": "Try a small number.", "workingLatex": "3^3 = 3 \\times 3 \\times 3", "explanation": "Cubes grow fast, so a small base like $3$ is worth testing for a value like $27$.", "diagram": null },
        { "stepNumber": 3, "description": "Cube the trial number.", "workingLatex": "3 \\times 3 \\times 3 = 27", "explanation": "Multiplying three $3$s together gives exactly $27$.", "diagram": null },
        { "stepNumber": 4, "description": "Match to the question.", "workingLatex": "\\sqrt[3]{27} = 3", "explanation": "Because $3^3 = 27$, the cube root of $27$ is $3$.", "diagram": null },
        { "stepNumber": 5, "description": "Interpret with a cube.", "workingLatex": "3 \\times 3 \\times 3 = 27", "explanation": "A cube made of $27$ small cubes has $3$ along each edge, matching the root.", "diagram": null },
        { "stepNumber": 6, "description": "Write the final answer.", "workingLatex": "\\sqrt[3]{27} = 3", "explanation": "The completed calculation gives $3$.", "diagram": null }
      ],
      "finalAnswer": "$3$"
    }
  },
  {
    "id": "gcse.number.powers-roots.q012",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Powers and roots",
    "subtopicId": "gcse.number.powers-roots",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "numeric",
    "tags": ["cube roots", "roots", "evaluate"],
    "questionText": "Work out $\\sqrt[3]{64}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Understand the cube root.", "workingLatex": "\\sqrt[3]{64} = ?", "explanation": "We want the number whose cube is $64$.", "diagram": null },
        { "stepNumber": 2, "description": "Bracket the answer.", "workingLatex": "3^3 = 27, \\ 5^3 = 125", "explanation": "Since $64$ lies between $27$ and $125$, the cube root is between $3$ and $5$.", "diagram": null },
        { "stepNumber": 3, "description": "Test the value in between.", "workingLatex": "4^3 = 4 \\times 4 \\times 4", "explanation": "$4$ is the whole number between $3$ and $5$, so we try it.", "diagram": null },
        { "stepNumber": 4, "description": "Cube the trial number.", "workingLatex": "4 \\times 4 \\times 4 = 64", "explanation": "$4 \\times 4 = 16$, then $16 \\times 4 = 64$.", "diagram": null },
        { "stepNumber": 5, "description": "Match to the question.", "workingLatex": "\\sqrt[3]{64} = 4", "explanation": "Because $4^3 = 64$, the cube root of $64$ is $4$.", "diagram": null },
        { "stepNumber": 6, "description": "Confirm the root.", "workingLatex": "\\sqrt[3]{64} = 4", "explanation": "The value $4$ is in the range we predicted, so it is sensible.", "diagram": null },
        { "stepNumber": 7, "description": "Write the final answer.", "workingLatex": "\\sqrt[3]{64} = 4", "explanation": "The completed calculation gives $4$.", "diagram": null }
      ],
      "finalAnswer": "$4$"
    }
  },
  {
    "id": "gcse.number.powers-roots.q013",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Powers and roots",
    "subtopicId": "gcse.number.powers-roots",
    "difficulty": "Easy",
    "marks": 1,
    "answerType": "numeric",
    "tags": ["squares", "powers", "evaluate"],
    "questionText": "Work out $6^2$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Read the power.", "workingLatex": "6^2", "explanation": "The base is $6$ and the index $2$ means we use $6$ as a factor twice.", "diagram": null },
        { "stepNumber": 2, "description": "Write it as a multiplication.", "workingLatex": "6^2 = 6 \\times 6", "explanation": "Squaring means multiplying the number by itself.", "diagram": null },
        { "stepNumber": 3, "description": "Multiply.", "workingLatex": "6 \\times 6 = 36", "explanation": "Six sixes make $36$.", "diagram": null },
        { "stepNumber": 4, "description": "State the value of the power.", "workingLatex": "6^2 = 36", "explanation": "So the square of $6$ is $36$.", "diagram": null },
        { "stepNumber": 5, "description": "Check reasonableness.", "workingLatex": "5^2 = 25, \\ 7^2 = 49", "explanation": "$36$ sits neatly between the squares of $5$ and $7$, which is reassuring.", "diagram": null },
        { "stepNumber": 6, "description": "Write the final answer.", "workingLatex": "6^2 = 36", "explanation": "The completed calculation gives $36$.", "diagram": null }
      ],
      "finalAnswer": "$36$"
    }
  },
  {
    "id": "gcse.number.powers-roots.q014",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Powers and roots",
    "subtopicId": "gcse.number.powers-roots",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "numeric",
    "tags": ["cubes", "powers", "evaluate"],
    "questionText": "Work out $3^3$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Read the power.", "workingLatex": "3^3", "explanation": "The base is $3$ and the index $3$ tells us to use $3$ as a factor three times.", "diagram": null },
        { "stepNumber": 2, "description": "Write it as a multiplication.", "workingLatex": "3^3 = 3 \\times 3 \\times 3", "explanation": "Cubing means multiplying the number by itself three times.", "diagram": null },
        { "stepNumber": 3, "description": "Multiply the first two.", "workingLatex": "3 \\times 3 = 9", "explanation": "Start with the first pair of threes.", "diagram": null },
        { "stepNumber": 4, "description": "Multiply by the last factor.", "workingLatex": "9 \\times 3 = 27", "explanation": "Multiplying $9$ by $3$ gives $27$.", "diagram": null },
        { "stepNumber": 5, "description": "State the value of the power.", "workingLatex": "3^3 = 27", "explanation": "So the cube of $3$ is $27$.", "diagram": null },
        { "stepNumber": 6, "description": "Write the final answer.", "workingLatex": "3^3 = 27", "explanation": "The completed calculation gives $27$.", "diagram": null }
      ],
      "finalAnswer": "$27$"
    }
  },
  {
    "id": "gcse.number.powers-roots.q015",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Powers and roots",
    "subtopicId": "gcse.number.powers-roots",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "numeric",
    "tags": ["powers of 2", "powers", "evaluate"],
    "questionText": "Work out $2^5$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Read the power.", "workingLatex": "2^5", "explanation": "The base is $2$ and the index $5$ means we multiply five $2$s together.", "diagram": null },
        { "stepNumber": 2, "description": "Write it as a multiplication.", "workingLatex": "2^5 = 2 \\times 2 \\times 2 \\times 2 \\times 2", "explanation": "The index tells us exactly how many twos to use.", "diagram": null },
        { "stepNumber": 3, "description": "Double once.", "workingLatex": "2 \\times 2 = 4", "explanation": "Each extra factor of $2$ doubles the running total.", "diagram": null },
        { "stepNumber": 4, "description": "Double again.", "workingLatex": "4 \\times 2 = 8", "explanation": "Continue doubling the total.", "diagram": null },
        { "stepNumber": 5, "description": "Double again.", "workingLatex": "8 \\times 2 = 16", "explanation": "Keep doubling.", "diagram": null },
        { "stepNumber": 6, "description": "Double the last time.", "workingLatex": "16 \\times 2 = 32", "explanation": "The fifth two doubles $16$ to $32$.", "diagram": null },
        { "stepNumber": 7, "description": "State the final answer.", "workingLatex": "2^5 = 32", "explanation": "So $2$ to the power $5$ is $32$.", "diagram": null }
      ],
      "finalAnswer": "$32$"
    }
  },
  {
    "id": "gcse.number.powers-roots.q016",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Powers and roots",
    "subtopicId": "gcse.number.powers-roots",
    "difficulty": "Easy",
    "marks": 1,
    "answerType": "numeric",
    "tags": ["squares", "powers", "evaluate"],
    "questionText": "Work out $9^2$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Read the power.", "workingLatex": "9^2", "explanation": "The base is $9$ and the index $2$ means we use $9$ as a factor twice.", "diagram": null },
        { "stepNumber": 2, "description": "Write it as a multiplication.", "workingLatex": "9^2 = 9 \\times 9", "explanation": "Squaring means multiplying the number by itself.", "diagram": null },
        { "stepNumber": 3, "description": "Multiply.", "workingLatex": "9 \\times 9 = 81", "explanation": "Nine nines make $81$.", "diagram": null },
        { "stepNumber": 4, "description": "State the value of the power.", "workingLatex": "9^2 = 81", "explanation": "So the square of $9$ is $81$.", "diagram": null },
        { "stepNumber": 5, "description": "Sense-check.", "workingLatex": "10^2 = 100", "explanation": "$9$ is just below $10$, so $81$ being just below $100$ makes sense.", "diagram": null },
        { "stepNumber": 6, "description": "Write the final answer.", "workingLatex": "9^2 = 81", "explanation": "The completed calculation gives $81$.", "diagram": null }
      ],
      "finalAnswer": "$81$"
    }
  },
  {
    "id": "gcse.number.powers-roots.q017",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Powers and roots",
    "subtopicId": "gcse.number.powers-roots",
    "difficulty": "Easy",
    "marks": 1,
    "answerType": "numeric",
    "tags": ["square roots", "roots", "evaluate"],
    "questionText": "Work out $\\sqrt{100}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Understand the square root.", "workingLatex": "\\sqrt{100} = ?", "explanation": "We want the positive number whose square is $100$.", "diagram": null },
        { "stepNumber": 2, "description": "Recall a key square.", "workingLatex": "10^2 = 10 \\times 10", "explanation": "$100$ is the square of $10$, a fact worth knowing by heart.", "diagram": null },
        { "stepNumber": 3, "description": "Square the trial number.", "workingLatex": "10 \\times 10 = 100", "explanation": "Squaring $10$ gives exactly $100$.", "diagram": null },
        { "stepNumber": 4, "description": "Match to the question.", "workingLatex": "\\sqrt{100} = 10", "explanation": "Since $10^2 = 100$, the square root is $10$.", "diagram": null },
        { "stepNumber": 5, "description": "Take the positive root.", "workingLatex": "\\sqrt{100} = 10", "explanation": "The root symbol gives the positive value.", "diagram": null },
        { "stepNumber": 6, "description": "Write the final answer.", "workingLatex": "\\sqrt{100} = 10", "explanation": "The completed calculation gives $10$.", "diagram": null }
      ],
      "finalAnswer": "$10$"
    }
  },
  {
    "id": "gcse.number.powers-roots.q018",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Powers and roots",
    "subtopicId": "gcse.number.powers-roots",
    "difficulty": "Easy",
    "marks": 1,
    "answerType": "numeric",
    "tags": ["square roots", "roots", "evaluate"],
    "questionText": "Work out $\\sqrt{25}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Understand the square root.", "workingLatex": "\\sqrt{25} = ?", "explanation": "We need the positive number whose square is $25$.", "diagram": null },
        { "stepNumber": 2, "description": "Test a value.", "workingLatex": "5^2 = 5 \\times 5", "explanation": "$25$ is a common square, so we try $5$.", "diagram": null },
        { "stepNumber": 3, "description": "Square the trial number.", "workingLatex": "5 \\times 5 = 25", "explanation": "Squaring $5$ gives exactly $25$.", "diagram": null },
        { "stepNumber": 4, "description": "Match to the question.", "workingLatex": "\\sqrt{25} = 5", "explanation": "Because $5^2 = 25$, the square root of $25$ is $5$.", "diagram": null },
        { "stepNumber": 5, "description": "Take the positive root.", "workingLatex": "\\sqrt{25} = 5", "explanation": "The symbol asks for the positive value, so we take $5$.", "diagram": null },
        { "stepNumber": 6, "description": "Write the final answer.", "workingLatex": "\\sqrt{25} = 5", "explanation": "The completed calculation gives $5$.", "diagram": null }
      ],
      "finalAnswer": "$5$"
    }
  },
  {
    "id": "gcse.number.powers-roots.q019",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Powers and roots",
    "subtopicId": "gcse.number.powers-roots",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "numeric",
    "tags": ["cube roots", "roots", "evaluate"],
    "questionText": "Work out $\\sqrt[3]{8}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Understand the cube root.", "workingLatex": "\\sqrt[3]{8} = ?", "explanation": "We want the number whose cube is $8$.", "diagram": null },
        { "stepNumber": 2, "description": "Try a small base.", "workingLatex": "2^3 = 2 \\times 2 \\times 2", "explanation": "$8$ is small, so a small base like $2$ is a natural first try.", "diagram": null },
        { "stepNumber": 3, "description": "Cube the trial number.", "workingLatex": "2 \\times 2 \\times 2 = 8", "explanation": "Multiplying three $2$s together gives $8$.", "diagram": null },
        { "stepNumber": 4, "description": "Match to the question.", "workingLatex": "\\sqrt[3]{8} = 2", "explanation": "Because $2^3 = 8$, the cube root of $8$ is $2$.", "diagram": null },
        { "stepNumber": 5, "description": "Interpret with a cube.", "workingLatex": "2 \\times 2 \\times 2 = 8", "explanation": "A cube of $8$ small cubes has $2$ along each edge.", "diagram": null },
        { "stepNumber": 6, "description": "Write the final answer.", "workingLatex": "\\sqrt[3]{8} = 2", "explanation": "The completed calculation gives $2$.", "diagram": null }
      ],
      "finalAnswer": "$2$"
    }
  },
  {
    "id": "gcse.number.powers-roots.q020",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Powers and roots",
    "subtopicId": "gcse.number.powers-roots",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "numeric",
    "tags": ["squares", "powers", "evaluate"],
    "questionText": "Work out $12^2$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Read the power.", "workingLatex": "12^2", "explanation": "The base is $12$ and the index $2$ means we use $12$ as a factor twice.", "diagram": null },
        { "stepNumber": 2, "description": "Write it as a multiplication.", "workingLatex": "12^2 = 12 \\times 12", "explanation": "Squaring means multiplying the number by itself.", "diagram": null },
        { "stepNumber": 3, "description": "Split the multiplication.", "workingLatex": "12 \\times 12 = 12 \\times 10 + 12 \\times 2", "explanation": "Breaking $12$ into $10 + 2$ makes the multiplication easier.", "diagram": null },
        { "stepNumber": 4, "description": "Work out each part.", "workingLatex": "12 \\times 10 = 120, \\ 12 \\times 2 = 24", "explanation": "These two products are simple to find.", "diagram": null },
        { "stepNumber": 5, "description": "Add the parts.", "workingLatex": "120 + 24 = 144", "explanation": "Combining the pieces gives the full product.", "diagram": null },
        { "stepNumber": 6, "description": "State the value of the power.", "workingLatex": "12^2 = 144", "explanation": "So the square of $12$ is $144$.", "diagram": null },
        { "stepNumber": 7, "description": "Write the final answer.", "workingLatex": "12^2 = 144", "explanation": "The completed calculation gives $144$.", "diagram": null }
      ],
      "finalAnswer": "$144$"
    }
  },
  {
    "id": "gcse.number.powers-roots.q021",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Powers and roots",
    "subtopicId": "gcse.number.powers-roots",
    "difficulty": "Easy",
    "marks": 1,
    "answerType": "numeric",
    "tags": ["squares", "powers", "evaluate"],
    "questionText": "Work out $8^2$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Read the power.", "workingLatex": "8^2", "explanation": "The base is $8$ and the index $2$ means we use $8$ as a factor twice.", "diagram": null },
        { "stepNumber": 2, "description": "Write it as a multiplication.", "workingLatex": "8^2 = 8 \\times 8", "explanation": "Squaring means multiplying the number by itself.", "diagram": null },
        { "stepNumber": 3, "description": "Multiply.", "workingLatex": "8 \\times 8 = 64", "explanation": "Eight eights make $64$.", "diagram": null },
        { "stepNumber": 4, "description": "State the value of the power.", "workingLatex": "8^2 = 64", "explanation": "So the square of $8$ is $64$.", "diagram": null },
        { "stepNumber": 5, "description": "Sense-check.", "workingLatex": "7^2 = 49, \\ 9^2 = 81", "explanation": "$64$ lies between the squares of $7$ and $9$, as expected.", "diagram": null },
        { "stepNumber": 6, "description": "Write the final answer.", "workingLatex": "8^2 = 64", "explanation": "The completed calculation gives $64$.", "diagram": null }
      ],
      "finalAnswer": "$64$"
    }
  },
  {
    "id": "gcse.number.powers-roots.q022",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Powers and roots",
    "subtopicId": "gcse.number.powers-roots",
    "difficulty": "Easy",
    "marks": 1,
    "answerType": "numeric",
    "tags": ["square roots", "roots", "evaluate"],
    "questionText": "Work out $\\sqrt{64}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Understand the square root.", "workingLatex": "\\sqrt{64} = ?", "explanation": "We want the positive number whose square is $64$.", "diagram": null },
        { "stepNumber": 2, "description": "Test a value.", "workingLatex": "8^2 = 8 \\times 8", "explanation": "$64$ is a familiar square, so we try $8$.", "diagram": null },
        { "stepNumber": 3, "description": "Square the trial number.", "workingLatex": "8 \\times 8 = 64", "explanation": "Squaring $8$ gives exactly $64$.", "diagram": null },
        { "stepNumber": 4, "description": "Match to the question.", "workingLatex": "\\sqrt{64} = 8", "explanation": "Because $8^2 = 64$, the square root of $64$ is $8$.", "diagram": null },
        { "stepNumber": 5, "description": "Take the positive root.", "workingLatex": "\\sqrt{64} = 8", "explanation": "The root symbol gives the positive value, so we take $8$.", "diagram": null },
        { "stepNumber": 6, "description": "Write the final answer.", "workingLatex": "\\sqrt{64} = 8", "explanation": "The completed calculation gives $8$.", "diagram": null }
      ],
      "finalAnswer": "$8$"
    }
  },
  {
    "id": "gcse.number.powers-roots.q023",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Powers and roots",
    "subtopicId": "gcse.number.powers-roots",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "numeric",
    "tags": ["cubes", "powers", "evaluate"],
    "questionText": "Work out $4^3$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Read the power.", "workingLatex": "4^3", "explanation": "The base is $4$ and the index $3$ means we use $4$ as a factor three times.", "diagram": null },
        { "stepNumber": 2, "description": "Write it as a multiplication.", "workingLatex": "4^3 = 4 \\times 4 \\times 4", "explanation": "Cubing means multiplying the number by itself three times.", "diagram": null },
        { "stepNumber": 3, "description": "Multiply the first two.", "workingLatex": "4 \\times 4 = 16", "explanation": "Start with the first pair of fours.", "diagram": null },
        { "stepNumber": 4, "description": "Multiply by the last factor.", "workingLatex": "16 \\times 4 = 64", "explanation": "Multiplying $16$ by $4$ gives $64$.", "diagram": null },
        { "stepNumber": 5, "description": "State the value of the power.", "workingLatex": "4^3 = 64", "explanation": "So the cube of $4$ is $64$.", "diagram": null },
        { "stepNumber": 6, "description": "Interpret with a cube.", "workingLatex": "4 \\times 4 \\times 4 = 64", "explanation": "A cube with $4$ small cubes along each edge is built from $64$ small cubes.", "diagram": null },
        { "stepNumber": 7, "description": "Write the final answer.", "workingLatex": "4^3 = 64", "explanation": "The completed calculation gives $64$.", "diagram": null }
      ],
      "finalAnswer": "$64$"
    }
  },
  {
    "id": "gcse.number.powers-roots.q024",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Powers and roots",
    "subtopicId": "gcse.number.powers-roots",
    "difficulty": "Easy",
    "marks": 1,
    "answerType": "numeric",
    "tags": ["squares", "powers", "evaluate"],
    "questionText": "Work out $5^2$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Read the power.", "workingLatex": "5^2", "explanation": "The base is $5$ and the index $2$ means we use $5$ as a factor twice.", "diagram": null },
        { "stepNumber": 2, "description": "Write it as a multiplication.", "workingLatex": "5^2 = 5 \\times 5", "explanation": "Squaring means multiplying the number by itself.", "diagram": null },
        { "stepNumber": 3, "description": "Multiply.", "workingLatex": "5 \\times 5 = 25", "explanation": "Five fives make $25$.", "diagram": null },
        { "stepNumber": 4, "description": "State the value of the power.", "workingLatex": "5^2 = 25", "explanation": "So the square of $5$ is $25$.", "diagram": null },
        { "stepNumber": 5, "description": "Check with an area picture.", "workingLatex": "5 \\times 5 = 25", "explanation": "A $5$ by $5$ square of tiles contains $25$ tiles, confirming the answer.", "diagram": null },
        { "stepNumber": 6, "description": "Write the final answer.", "workingLatex": "5^2 = 25", "explanation": "The completed calculation gives $25$.", "diagram": null }
      ],
      "finalAnswer": "$25$"
    }
  },
  {
    "id": "gcse.number.powers-roots.q025",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Powers and roots",
    "subtopicId": "gcse.number.powers-roots",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "numeric",
    "tags": ["powers of 2", "powers", "evaluate"],
    "questionText": "Write down the value of $2^6$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Read the power.", "workingLatex": "2^6", "explanation": "The base is $2$ and the index $6$ means we multiply six $2$s together.", "diagram": null },
        { "stepNumber": 2, "description": "Write it as a multiplication.", "workingLatex": "2^6 = 2 \\times 2 \\times 2 \\times 2 \\times 2 \\times 2", "explanation": "The index tells us how many twos to use.", "diagram": null },
        { "stepNumber": 3, "description": "Use a known power.", "workingLatex": "2^5 = 32", "explanation": "We already know $2^5 = 32$, so we only need one more doubling.", "diagram": null },
        { "stepNumber": 4, "description": "Double once more.", "workingLatex": "32 \\times 2 = 64", "explanation": "Each extra factor of $2$ doubles the value, so $32$ becomes $64$.", "diagram": null },
        { "stepNumber": 5, "description": "State the value of the power.", "workingLatex": "2^6 = 64", "explanation": "So $2$ to the power $6$ is $64$.", "diagram": null },
        { "stepNumber": 6, "description": "Cross-check.", "workingLatex": "8^2 = 64", "explanation": "Interestingly $64$ is also $8^2$, which confirms the value is a genuine power of $2$.", "diagram": null },
        { "stepNumber": 7, "description": "Write the final answer.", "workingLatex": "2^6 = 64", "explanation": "The completed calculation gives $64$.", "diagram": null }
      ],
      "finalAnswer": "$64$"
    }
  },
  {
    "id": "gcse.number.powers-roots.q026",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Powers and roots",
    "subtopicId": "gcse.number.powers-roots",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "numeric",
    "tags": ["cube roots", "roots", "evaluate"],
    "questionText": "Work out $\\sqrt[3]{125}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Understand the cube root.", "workingLatex": "\\sqrt[3]{125} = ?", "explanation": "We want the number whose cube is $125$.", "diagram": null },
        { "stepNumber": 2, "description": "Estimate the size.", "workingLatex": "4^3 = 64, \\ 6^3 = 216", "explanation": "Since $125$ lies between $64$ and $216$, the cube root is between $4$ and $6$.", "diagram": null },
        { "stepNumber": 3, "description": "Test the value in between.", "workingLatex": "5^3 = 5 \\times 5 \\times 5", "explanation": "The whole number in that range is $5$, so we try it.", "diagram": null },
        { "stepNumber": 4, "description": "Cube the trial number.", "workingLatex": "5 \\times 5 \\times 5 = 125", "explanation": "$5 \\times 5 = 25$, then $25 \\times 5 = 125$.", "diagram": null },
        { "stepNumber": 5, "description": "Match to the question.", "workingLatex": "\\sqrt[3]{125} = 5", "explanation": "Because $5^3 = 125$, the cube root of $125$ is $5$.", "diagram": null },
        { "stepNumber": 6, "description": "Write the final answer.", "workingLatex": "\\sqrt[3]{125} = 5", "explanation": "The completed calculation gives $5$.", "diagram": null }
      ],
      "finalAnswer": "$5$"
    }
  },
  {
    "id": "gcse.number.powers-roots.q027",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Powers and roots",
    "subtopicId": "gcse.number.powers-roots",
    "difficulty": "Intermediate",
    "marks": 2,
    "answerType": "numeric",
    "tags": ["mixed evaluation", "squares", "cubes"],
    "questionText": "Work out $2^3 + 3^2$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Identify the two powers.", "workingLatex": "2^3 + 3^2", "explanation": "There are two separate powers to evaluate before adding.", "diagram": null },
        { "stepNumber": 2, "description": "Recall the order of operations.", "workingLatex": "\\text{powers before addition}", "explanation": "We must work out each power first, then add, because indices come before addition.", "diagram": null },
        { "stepNumber": 3, "description": "Expand the first power.", "workingLatex": "2^3 = 2 \\times 2 \\times 2", "explanation": "Cubing $2$ means multiplying three $2$s together.", "diagram": null },
        { "stepNumber": 4, "description": "Evaluate the first power.", "workingLatex": "2 \\times 2 \\times 2 = 8", "explanation": "So $2^3 = 8$.", "diagram": null },
        { "stepNumber": 5, "description": "Expand the second power.", "workingLatex": "3^2 = 3 \\times 3", "explanation": "Squaring $3$ means multiplying two $3$s together.", "diagram": null },
        { "stepNumber": 6, "description": "Evaluate the second power.", "workingLatex": "3 \\times 3 = 9", "explanation": "So $3^2 = 9$.", "diagram": null },
        { "stepNumber": 7, "description": "Rewrite the sum.", "workingLatex": "2^3 + 3^2 = 8 + 9", "explanation": "Replace each power with its value.", "diagram": null },
        { "stepNumber": 8, "description": "Add the results.", "workingLatex": "8 + 9 = 17", "explanation": "Adding the two values gives the total.", "diagram": null },
        { "stepNumber": 9, "description": "State the final answer.", "workingLatex": "2^3 + 3^2 = 17", "explanation": "The completed calculation gives $17$.", "diagram": null }
      ],
      "finalAnswer": "$17$"
    }
  },
  {
    "id": "gcse.number.powers-roots.q028",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Powers and roots",
    "subtopicId": "gcse.number.powers-roots",
    "difficulty": "Intermediate",
    "marks": 2,
    "answerType": "numeric",
    "tags": ["mixed evaluation", "squares", "cubes"],
    "questionText": "Work out $5^2 - 2^3$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Identify the two powers.", "workingLatex": "5^2 - 2^3", "explanation": "There are two powers to evaluate before subtracting.", "diagram": null },
        { "stepNumber": 2, "description": "Recall the order of operations.", "workingLatex": "\\text{powers before subtraction}", "explanation": "Indices are worked out before subtraction.", "diagram": null },
        { "stepNumber": 3, "description": "Expand the first power.", "workingLatex": "5^2 = 5 \\times 5", "explanation": "Squaring $5$ means multiplying two $5$s.", "diagram": null },
        { "stepNumber": 4, "description": "Evaluate the first power.", "workingLatex": "5 \\times 5 = 25", "explanation": "So $5^2 = 25$.", "diagram": null },
        { "stepNumber": 5, "description": "Expand the second power.", "workingLatex": "2^3 = 2 \\times 2 \\times 2", "explanation": "Cubing $2$ means multiplying three $2$s.", "diagram": null },
        { "stepNumber": 6, "description": "Evaluate the second power.", "workingLatex": "2 \\times 2 \\times 2 = 8", "explanation": "So $2^3 = 8$.", "diagram": null },
        { "stepNumber": 7, "description": "Rewrite the calculation.", "workingLatex": "5^2 - 2^3 = 25 - 8", "explanation": "Replace each power with its value.", "diagram": null },
        { "stepNumber": 8, "description": "Subtract.", "workingLatex": "25 - 8 = 17", "explanation": "Taking $8$ from $25$ leaves $17$.", "diagram": null },
        { "stepNumber": 9, "description": "State the final answer.", "workingLatex": "5^2 - 2^3 = 17", "explanation": "The completed calculation gives $17$.", "diagram": null }
      ],
      "finalAnswer": "$17$"
    }
  },
  {
    "id": "gcse.number.powers-roots.q029",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Powers and roots",
    "subtopicId": "gcse.number.powers-roots",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "numeric",
    "tags": ["mixed evaluation", "square roots", "roots"],
    "questionText": "Work out $\\sqrt{36} + \\sqrt{64}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Identify the two roots.", "workingLatex": "\\sqrt{36} + \\sqrt{64}", "explanation": "We evaluate each square root before adding.", "diagram": null },
        { "stepNumber": 2, "description": "Recall the order of operations.", "workingLatex": "\\text{roots before addition}", "explanation": "Roots behave like powers, so we find them first, then add.", "diagram": null },
        { "stepNumber": 3, "description": "Find the first root.", "workingLatex": "6^2 = 36", "explanation": "Since $6 \\times 6 = 36$, the square root of $36$ is $6$.", "diagram": null },
        { "stepNumber": 4, "description": "State the first value.", "workingLatex": "\\sqrt{36} = 6", "explanation": "The positive root of $36$ is $6$.", "diagram": null },
        { "stepNumber": 5, "description": "Find the second root.", "workingLatex": "8^2 = 64", "explanation": "Since $8 \\times 8 = 64$, the square root of $64$ is $8$.", "diagram": null },
        { "stepNumber": 6, "description": "State the second value.", "workingLatex": "\\sqrt{64} = 8", "explanation": "The positive root of $64$ is $8$.", "diagram": null },
        { "stepNumber": 7, "description": "Rewrite the sum.", "workingLatex": "\\sqrt{36} + \\sqrt{64} = 6 + 8", "explanation": "Replace each root with its value.", "diagram": null },
        { "stepNumber": 8, "description": "Add.", "workingLatex": "6 + 8 = 14", "explanation": "Adding the two roots gives $14$.", "diagram": null },
        { "stepNumber": 9, "description": "State the final answer.", "workingLatex": "\\sqrt{36} + \\sqrt{64} = 14", "explanation": "The completed calculation gives $14$.", "diagram": null }
      ],
      "finalAnswer": "$14$"
    }
  },
  {
    "id": "gcse.number.powers-roots.q030",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Powers and roots",
    "subtopicId": "gcse.number.powers-roots",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "numeric",
    "tags": ["mixed evaluation", "squares", "cubes"],
    "questionText": "Work out $3^2 \\times 2^3$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Identify the two powers.", "workingLatex": "3^2 \\times 2^3", "explanation": "We evaluate each power before multiplying them together.", "diagram": null },
        { "stepNumber": 2, "description": "Note the bases differ.", "workingLatex": "\\text{bases } 3 \\text{ and } 2", "explanation": "The bases are different, so we cannot add indices; we must work out each power separately.", "diagram": null },
        { "stepNumber": 3, "description": "Expand the first power.", "workingLatex": "3^2 = 3 \\times 3", "explanation": "Squaring $3$ means multiplying two $3$s.", "diagram": null },
        { "stepNumber": 4, "description": "Evaluate the first power.", "workingLatex": "3 \\times 3 = 9", "explanation": "So $3^2 = 9$.", "diagram": null },
        { "stepNumber": 5, "description": "Expand the second power.", "workingLatex": "2^3 = 2 \\times 2 \\times 2", "explanation": "Cubing $2$ means multiplying three $2$s.", "diagram": null },
        { "stepNumber": 6, "description": "Evaluate the second power.", "workingLatex": "2 \\times 2 \\times 2 = 8", "explanation": "So $2^3 = 8$.", "diagram": null },
        { "stepNumber": 7, "description": "Rewrite the product.", "workingLatex": "3^2 \\times 2^3 = 9 \\times 8", "explanation": "Replace each power with its value.", "diagram": null },
        { "stepNumber": 8, "description": "Multiply.", "workingLatex": "9 \\times 8 = 72", "explanation": "Nine eights make $72$.", "diagram": null },
        { "stepNumber": 9, "description": "State the final answer.", "workingLatex": "3^2 \\times 2^3 = 72", "explanation": "The completed calculation gives $72$.", "diagram": null }
      ],
      "finalAnswer": "$72$"
    }
  },
  {
    "id": "gcse.number.powers-roots.q031",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Powers and roots",
    "subtopicId": "gcse.number.powers-roots",
    "difficulty": "Intermediate",
    "marks": 2,
    "answerType": "numeric",
    "tags": ["powers of 2", "recognition", "index"],
    "questionText": "$2^n = 32$. Find the value of $n$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Understand what is asked.", "workingLatex": "2^n = 32", "explanation": "We need the power to which $2$ must be raised to reach $32$.", "diagram": null },
        { "stepNumber": 2, "description": "List powers of two.", "workingLatex": "2^1 = 2, \\ 2^2 = 4", "explanation": "Building the list of powers of $2$ lets us spot when we reach $32$.", "diagram": null },
        { "stepNumber": 3, "description": "Continue the list.", "workingLatex": "2^3 = 8, \\ 2^4 = 16", "explanation": "Each step doubles the previous value.", "diagram": null },
        { "stepNumber": 4, "description": "Reach the target.", "workingLatex": "2^5 = 32", "explanation": "Doubling $16$ gives $32$, so the fifth power of $2$ is $32$.", "diagram": null },
        { "stepNumber": 5, "description": "Compare with the question.", "workingLatex": "2^n = 2^5", "explanation": "Our target $32$ equals $2^5$, so the powers must match.", "diagram": null },
        { "stepNumber": 6, "description": "Read off the index.", "workingLatex": "n = 5", "explanation": "Equal powers of the same base means equal indices.", "diagram": null },
        { "stepNumber": 7, "description": "Check the answer.", "workingLatex": "2^5 = 32 \\ \\checkmark", "explanation": "Substituting $n = 5$ gives $32$, confirming the solution.", "diagram": null },
        { "stepNumber": 8, "description": "State the final answer.", "workingLatex": "n = 5", "explanation": "The value of $n$ is $5$.", "diagram": null },
        { "stepNumber": 9, "description": "Interpret the result.", "workingLatex": "32 = 2^5", "explanation": "This shows $32$ is a power of $2$, namely the fifth one.", "diagram": null }
      ],
      "finalAnswer": "$n = 5$"
    }
  },
  {
    "id": "gcse.number.powers-roots.q032",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Powers and roots",
    "subtopicId": "gcse.number.powers-roots",
    "difficulty": "Intermediate",
    "marks": 2,
    "answerType": "numeric",
    "tags": ["powers of 3", "recognition", "index"],
    "questionText": "$3^n = 81$. Find the value of $n$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Understand what is asked.", "workingLatex": "3^n = 81", "explanation": "We need the power to which $3$ must be raised to reach $81$.", "diagram": null },
        { "stepNumber": 2, "description": "List powers of three.", "workingLatex": "3^1 = 3, \\ 3^2 = 9", "explanation": "Listing powers of $3$ helps us find $81$.", "diagram": null },
        { "stepNumber": 3, "description": "Continue the list.", "workingLatex": "3^3 = 27", "explanation": "Each step multiplies the previous value by $3$.", "diagram": null },
        { "stepNumber": 4, "description": "Reach the target.", "workingLatex": "3^4 = 81", "explanation": "Multiplying $27$ by $3$ gives $81$, the fourth power of $3$.", "diagram": null },
        { "stepNumber": 5, "description": "Compare with the question.", "workingLatex": "3^n = 3^4", "explanation": "Our target $81$ equals $3^4$, so the powers match.", "diagram": null },
        { "stepNumber": 6, "description": "Read off the index.", "workingLatex": "n = 4", "explanation": "Equal powers of the same base means equal indices.", "diagram": null },
        { "stepNumber": 7, "description": "Check the answer.", "workingLatex": "3^4 = 81 \\ \\checkmark", "explanation": "Substituting $n = 4$ gives $81$, confirming the solution.", "diagram": null },
        { "stepNumber": 8, "description": "State the final answer.", "workingLatex": "n = 4", "explanation": "The value of $n$ is $4$.", "diagram": null },
        { "stepNumber": 9, "description": "Interpret the result.", "workingLatex": "81 = 3^4", "explanation": "This shows $81$ is the fourth power of $3$.", "diagram": null }
      ],
      "finalAnswer": "$n = 4$"
    }
  },
  {
    "id": "gcse.number.powers-roots.q033",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Powers and roots",
    "subtopicId": "gcse.number.powers-roots",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "numeric",
    "tags": ["mixed evaluation", "roots", "square roots", "cube roots"],
    "questionText": "Work out $\\sqrt{81} - \\sqrt[3]{27}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Identify the two roots.", "workingLatex": "\\sqrt{81} - \\sqrt[3]{27}", "explanation": "There is a square root and a cube root to evaluate before subtracting.", "diagram": null },
        { "stepNumber": 2, "description": "Recall the order of operations.", "workingLatex": "\\text{roots before subtraction}", "explanation": "We work out each root first, then subtract.", "diagram": null },
        { "stepNumber": 3, "description": "Find the square root.", "workingLatex": "9^2 = 81", "explanation": "Since $9 \\times 9 = 81$, the square root of $81$ is $9$.", "diagram": null },
        { "stepNumber": 4, "description": "State the first value.", "workingLatex": "\\sqrt{81} = 9", "explanation": "The positive square root of $81$ is $9$.", "diagram": null },
        { "stepNumber": 5, "description": "Find the cube root.", "workingLatex": "3^3 = 27", "explanation": "Since $3 \\times 3 \\times 3 = 27$, the cube root of $27$ is $3$.", "diagram": null },
        { "stepNumber": 6, "description": "State the second value.", "workingLatex": "\\sqrt[3]{27} = 3", "explanation": "The cube root of $27$ is $3$.", "diagram": null },
        { "stepNumber": 7, "description": "Rewrite the calculation.", "workingLatex": "\\sqrt{81} - \\sqrt[3]{27} = 9 - 3", "explanation": "Replace each root with its value.", "diagram": null },
        { "stepNumber": 8, "description": "Subtract.", "workingLatex": "9 - 3 = 6", "explanation": "Taking $3$ from $9$ leaves $6$.", "diagram": null },
        { "stepNumber": 9, "description": "State the final answer.", "workingLatex": "\\sqrt{81} - \\sqrt[3]{27} = 6", "explanation": "The completed calculation gives $6$.", "diagram": null }
      ],
      "finalAnswer": "$6$"
    }
  },
  {
    "id": "gcse.number.powers-roots.q034",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Powers and roots",
    "subtopicId": "gcse.number.powers-roots",
    "difficulty": "Intermediate",
    "marks": 2,
    "answerType": "numeric",
    "tags": ["powers of 10", "cubes", "evaluate"],
    "questionText": "Work out $10^3$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Read the power.", "workingLatex": "10^3", "explanation": "The base is $10$ and the index $3$ means multiply three $10$s together.", "diagram": null },
        { "stepNumber": 2, "description": "Write it as a multiplication.", "workingLatex": "10^3 = 10 \\times 10 \\times 10", "explanation": "The index tells us how many tens to use.", "diagram": null },
        { "stepNumber": 3, "description": "Multiply the first two.", "workingLatex": "10 \\times 10 = 100", "explanation": "Ten tens make one hundred.", "diagram": null },
        { "stepNumber": 4, "description": "Multiply by the last ten.", "workingLatex": "100 \\times 10 = 1000", "explanation": "Multiplying by another $10$ adds a further zero.", "diagram": null },
        { "stepNumber": 5, "description": "State the value of the power.", "workingLatex": "10^3 = 1000", "explanation": "So $10$ cubed is one thousand.", "diagram": null },
        { "stepNumber": 6, "description": "Note the zero pattern.", "workingLatex": "10^3 = 1000", "explanation": "A power of $10$ has as many zeros as the index, and $3$ zeros gives $1000$.", "diagram": null },
        { "stepNumber": 7, "description": "Confirm in words.", "workingLatex": "1000 = \\text{one thousand}", "explanation": "This matches our everyday meaning of a thousand.", "diagram": null },
        { "stepNumber": 8, "description": "Write the final answer.", "workingLatex": "10^3 = 1000", "explanation": "The completed calculation gives $1000$.", "diagram": null },
        { "stepNumber": 9, "description": "Interpret with volume.", "workingLatex": "10 \\times 10 \\times 10 = 1000", "explanation": "A cube of side $10$ contains $1000$ unit cubes, a helpful picture of $10^3$.", "diagram": null }
      ],
      "finalAnswer": "$1000$"
    }
  },
  {
    "id": "gcse.number.powers-roots.q035",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Powers and roots",
    "subtopicId": "gcse.number.powers-roots",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "numeric",
    "tags": ["mixed evaluation", "roots", "combining"],
    "questionText": "Work out $\\sqrt{49} \\times \\sqrt[3]{8}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Identify the two roots.", "workingLatex": "\\sqrt{49} \\times \\sqrt[3]{8}", "explanation": "There is a square root and a cube root to evaluate before multiplying.", "diagram": null },
        { "stepNumber": 2, "description": "Recall the order of operations.", "workingLatex": "\\text{roots before multiplication}", "explanation": "We find each root first, then multiply the results.", "diagram": null },
        { "stepNumber": 3, "description": "Find the square root.", "workingLatex": "7^2 = 49", "explanation": "Since $7 \\times 7 = 49$, the square root of $49$ is $7$.", "diagram": null },
        { "stepNumber": 4, "description": "State the first value.", "workingLatex": "\\sqrt{49} = 7", "explanation": "The positive square root of $49$ is $7$.", "diagram": null },
        { "stepNumber": 5, "description": "Find the cube root.", "workingLatex": "2^3 = 8", "explanation": "Since $2 \\times 2 \\times 2 = 8$, the cube root of $8$ is $2$.", "diagram": null },
        { "stepNumber": 6, "description": "State the second value.", "workingLatex": "\\sqrt[3]{8} = 2", "explanation": "The cube root of $8$ is $2$.", "diagram": null },
        { "stepNumber": 7, "description": "Rewrite the product.", "workingLatex": "\\sqrt{49} \\times \\sqrt[3]{8} = 7 \\times 2", "explanation": "Replace each root with its value.", "diagram": null },
        { "stepNumber": 8, "description": "Multiply.", "workingLatex": "7 \\times 2 = 14", "explanation": "Seven twos make $14$.", "diagram": null },
        { "stepNumber": 9, "description": "State the final answer.", "workingLatex": "\\sqrt{49} \\times \\sqrt[3]{8} = 14", "explanation": "The completed calculation gives $14$.", "diagram": null }
      ],
      "finalAnswer": "$14$"
    }
  },
  {
    "id": "gcse.number.powers-roots.q036",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Powers and roots",
    "subtopicId": "gcse.number.powers-roots",
    "difficulty": "Intermediate",
    "marks": 2,
    "answerType": "numeric",
    "tags": ["mixed evaluation", "squares"],
    "questionText": "Work out $6^2 + 5^2$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Identify the two powers.", "workingLatex": "6^2 + 5^2", "explanation": "We evaluate each square before adding.", "diagram": null },
        { "stepNumber": 2, "description": "Recall the order of operations.", "workingLatex": "\\text{powers before addition}", "explanation": "Indices are worked out before addition.", "diagram": null },
        { "stepNumber": 3, "description": "Expand the first power.", "workingLatex": "6^2 = 6 \\times 6", "explanation": "Squaring $6$ means multiplying two $6$s.", "diagram": null },
        { "stepNumber": 4, "description": "Evaluate the first power.", "workingLatex": "6 \\times 6 = 36", "explanation": "So $6^2 = 36$.", "diagram": null },
        { "stepNumber": 5, "description": "Expand the second power.", "workingLatex": "5^2 = 5 \\times 5", "explanation": "Squaring $5$ means multiplying two $5$s.", "diagram": null },
        { "stepNumber": 6, "description": "Evaluate the second power.", "workingLatex": "5 \\times 5 = 25", "explanation": "So $5^2 = 25$.", "diagram": null },
        { "stepNumber": 7, "description": "Rewrite the sum.", "workingLatex": "6^2 + 5^2 = 36 + 25", "explanation": "Replace each power with its value.", "diagram": null },
        { "stepNumber": 8, "description": "Add.", "workingLatex": "36 + 25 = 61", "explanation": "Adding the two squares gives $61$.", "diagram": null },
        { "stepNumber": 9, "description": "State the final answer.", "workingLatex": "6^2 + 5^2 = 61", "explanation": "The completed calculation gives $61$.", "diagram": null }
      ],
      "finalAnswer": "$61$"
    }
  },
  {
    "id": "gcse.number.powers-roots.q037",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Powers and roots",
    "subtopicId": "gcse.number.powers-roots",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "numeric",
    "tags": ["context", "area", "square roots"],
    "questionText": "A square has an area of $81\\ \\text{cm}^2$. Work out the length of one side of the square.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall the area of a square.", "workingLatex": "\\text{Area} = \\text{side} \\times \\text{side}", "explanation": "A square's area is its side length multiplied by itself.", "diagram": null },
        { "stepNumber": 2, "description": "Write this as a power.", "workingLatex": "\\text{Area} = \\text{side}^2", "explanation": "Because both factors are the side, the area is the side squared.", "diagram": null },
        { "stepNumber": 3, "description": "Substitute the area.", "workingLatex": "\\text{side}^2 = 81", "explanation": "The area is given as $81\\ \\text{cm}^2$.", "diagram": null },
        { "stepNumber": 4, "description": "Undo the squaring.", "workingLatex": "\\text{side} = \\sqrt{81}", "explanation": "To reverse a square we take the square root of both sides.", "diagram": null },
        { "stepNumber": 5, "description": "Find the root.", "workingLatex": "9^2 = 81", "explanation": "Since $9 \\times 9 = 81$, the square root of $81$ is $9$.", "diagram": null },
        { "stepNumber": 6, "description": "State the side length.", "workingLatex": "\\text{side} = 9", "explanation": "The length that squares to $81$ is $9$.", "diagram": null },
        { "stepNumber": 7, "description": "Add units.", "workingLatex": "\\text{side} = 9\\ \\text{cm}", "explanation": "Lengths are measured in centimetres here.", "diagram": null },
        { "stepNumber": 8, "description": "Check the answer.", "workingLatex": "9 \\times 9 = 81 \\ \\checkmark", "explanation": "A side of $9\\ \\text{cm}$ gives an area of $81\\ \\text{cm}^2$, matching the question.", "diagram": null },
        { "stepNumber": 9, "description": "Write the final answer.", "workingLatex": "\\text{side} = 9\\ \\text{cm}", "explanation": "The side length of the square is $9\\ \\text{cm}$.", "diagram": null }
      ],
      "finalAnswer": "$9\\ \\text{cm}$"
    }
  },
  {
    "id": "gcse.number.powers-roots.q038",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Powers and roots",
    "subtopicId": "gcse.number.powers-roots",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "numeric",
    "tags": ["context", "volume", "cube roots"],
    "questionText": "A cube has a volume of $125\\ \\text{cm}^3$. Work out the length of one edge of the cube.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall the volume of a cube.", "workingLatex": "\\text{Volume} = \\text{edge} \\times \\text{edge} \\times \\text{edge}", "explanation": "A cube has equal edges, so its volume is the edge multiplied by itself three times.", "diagram": null },
        { "stepNumber": 2, "description": "Write this as a power.", "workingLatex": "\\text{Volume} = \\text{edge}^3", "explanation": "Three equal factors of the edge make the edge cubed.", "diagram": null },
        { "stepNumber": 3, "description": "Substitute the volume.", "workingLatex": "\\text{edge}^3 = 125", "explanation": "The volume is given as $125\\ \\text{cm}^3$.", "diagram": null },
        { "stepNumber": 4, "description": "Undo the cubing.", "workingLatex": "\\text{edge} = \\sqrt[3]{125}", "explanation": "To reverse a cube we take the cube root of both sides.", "diagram": null },
        { "stepNumber": 5, "description": "Estimate the root.", "workingLatex": "4^3 = 64, \\ 5^3 = 125", "explanation": "Testing whole numbers shows $5$ is exactly right.", "diagram": null },
        { "stepNumber": 6, "description": "Find the root.", "workingLatex": "5^3 = 125", "explanation": "Since $5 \\times 5 \\times 5 = 125$, the cube root of $125$ is $5$.", "diagram": null },
        { "stepNumber": 7, "description": "State the edge length.", "workingLatex": "\\text{edge} = 5", "explanation": "The length that cubes to $125$ is $5$.", "diagram": null },
        { "stepNumber": 8, "description": "Add units.", "workingLatex": "\\text{edge} = 5\\ \\text{cm}", "explanation": "Lengths are measured in centimetres here.", "diagram": null },
        { "stepNumber": 9, "description": "Check the answer.", "workingLatex": "5 \\times 5 \\times 5 = 125 \\ \\checkmark", "explanation": "An edge of $5\\ \\text{cm}$ gives a volume of $125\\ \\text{cm}^3$, matching the question.", "diagram": null },
        { "stepNumber": 10, "description": "Write the final answer.", "workingLatex": "\\text{edge} = 5\\ \\text{cm}", "explanation": "The edge length of the cube is $5\\ \\text{cm}$.", "diagram": null }
      ],
      "finalAnswer": "$5\\ \\text{cm}$"
    }
  },
  {
    "id": "gcse.number.powers-roots.q039",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Powers and roots",
    "subtopicId": "gcse.number.powers-roots",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "numeric",
    "tags": ["mixed evaluation", "powers of 2", "cubes"],
    "questionText": "Work out $2^4 + 3^3$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Identify the two powers.", "workingLatex": "2^4 + 3^3", "explanation": "We evaluate each power before adding.", "diagram": null },
        { "stepNumber": 2, "description": "Recall the order of operations.", "workingLatex": "\\text{powers before addition}", "explanation": "Indices come before addition.", "diagram": null },
        { "stepNumber": 3, "description": "Expand the first power.", "workingLatex": "2^4 = 2 \\times 2 \\times 2 \\times 2", "explanation": "Four factors of $2$ make $2^4$.", "diagram": null },
        { "stepNumber": 4, "description": "Evaluate the first power.", "workingLatex": "2 \\times 2 \\times 2 \\times 2 = 16", "explanation": "Doubling repeatedly gives $16$.", "diagram": null },
        { "stepNumber": 5, "description": "Expand the second power.", "workingLatex": "3^3 = 3 \\times 3 \\times 3", "explanation": "Three factors of $3$ make $3^3$.", "diagram": null },
        { "stepNumber": 6, "description": "Evaluate the second power.", "workingLatex": "3 \\times 3 \\times 3 = 27", "explanation": "So $3^3 = 27$.", "diagram": null },
        { "stepNumber": 7, "description": "Rewrite the sum.", "workingLatex": "2^4 + 3^3 = 16 + 27", "explanation": "Replace each power with its value.", "diagram": null },
        { "stepNumber": 8, "description": "Add.", "workingLatex": "16 + 27 = 43", "explanation": "Adding the two values gives $43$.", "diagram": null },
        { "stepNumber": 9, "description": "State the final answer.", "workingLatex": "2^4 + 3^3 = 43", "explanation": "The completed calculation gives $43$.", "diagram": null }
      ],
      "finalAnswer": "$43$"
    }
  },
  {
    "id": "gcse.number.powers-roots.q040",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Powers and roots",
    "subtopicId": "gcse.number.powers-roots",
    "difficulty": "Intermediate",
    "marks": 2,
    "answerType": "numeric",
    "tags": ["mixed evaluation", "squares"],
    "questionText": "Work out $7^2 - 6^2$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Identify the two powers.", "workingLatex": "7^2 - 6^2", "explanation": "We evaluate each square before subtracting.", "diagram": null },
        { "stepNumber": 2, "description": "Recall the order of operations.", "workingLatex": "\\text{powers before subtraction}", "explanation": "Indices are worked out before subtraction.", "diagram": null },
        { "stepNumber": 3, "description": "Expand the first power.", "workingLatex": "7^2 = 7 \\times 7", "explanation": "Squaring $7$ means multiplying two $7$s.", "diagram": null },
        { "stepNumber": 4, "description": "Evaluate the first power.", "workingLatex": "7 \\times 7 = 49", "explanation": "So $7^2 = 49$.", "diagram": null },
        { "stepNumber": 5, "description": "Expand the second power.", "workingLatex": "6^2 = 6 \\times 6", "explanation": "Squaring $6$ means multiplying two $6$s.", "diagram": null },
        { "stepNumber": 6, "description": "Evaluate the second power.", "workingLatex": "6 \\times 6 = 36", "explanation": "So $6^2 = 36$.", "diagram": null },
        { "stepNumber": 7, "description": "Rewrite the calculation.", "workingLatex": "7^2 - 6^2 = 49 - 36", "explanation": "Replace each power with its value.", "diagram": null },
        { "stepNumber": 8, "description": "Subtract.", "workingLatex": "49 - 36 = 13", "explanation": "Taking $36$ from $49$ leaves $13$.", "diagram": null },
        { "stepNumber": 9, "description": "State the final answer.", "workingLatex": "7^2 - 6^2 = 13", "explanation": "The completed calculation gives $13$.", "diagram": null }
      ],
      "finalAnswer": "$13$"
    }
  },
  {
    "id": "gcse.number.powers-roots.q041",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Powers and roots",
    "subtopicId": "gcse.number.powers-roots",
    "difficulty": "Intermediate",
    "marks": 2,
    "answerType": "numeric",
    "tags": ["square roots", "recognition"],
    "questionText": "A number squared gives $169$. Work out the positive value of the number.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Translate into symbols.", "workingLatex": "n^2 = 169", "explanation": "Let $n$ be the number; squaring it gives $169$.", "diagram": null },
        { "stepNumber": 2, "description": "Undo the squaring.", "workingLatex": "n = \\sqrt{169}", "explanation": "Taking the square root reverses the squaring.", "diagram": null },
        { "stepNumber": 3, "description": "Bracket the answer.", "workingLatex": "12^2 = 144, \\ 14^2 = 196", "explanation": "Since $169$ is between $144$ and $196$, the root is between $12$ and $14$.", "diagram": null },
        { "stepNumber": 4, "description": "Test the value in between.", "workingLatex": "13^2 = 13 \\times 13", "explanation": "The whole number in that range is $13$.", "diagram": null },
        { "stepNumber": 5, "description": "Square the trial number.", "workingLatex": "13 \\times 13 = 169", "explanation": "Squaring $13$ gives exactly $169$.", "diagram": null },
        { "stepNumber": 6, "description": "State the positive value.", "workingLatex": "n = 13", "explanation": "The positive number that squares to $169$ is $13$.", "diagram": null },
        { "stepNumber": 7, "description": "Check the answer.", "workingLatex": "13^2 = 169 \\ \\checkmark", "explanation": "Substituting confirms the result.", "diagram": null },
        { "stepNumber": 8, "description": "Write the final answer.", "workingLatex": "n = 13", "explanation": "The number is $13$.", "diagram": null },
        { "stepNumber": 9, "description": "Note the meaning.", "workingLatex": "\\sqrt{169} = 13", "explanation": "This shows $169$ is a perfect square with root $13$.", "diagram": null }
      ],
      "finalAnswer": "$13$"
    }
  },
  {
    "id": "gcse.number.powers-roots.q042",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Powers and roots",
    "subtopicId": "gcse.number.powers-roots",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "numeric",
    "tags": ["mixed evaluation", "square roots", "cubes"],
    "questionText": "Work out $\\sqrt{121} + 2^3$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Identify the parts.", "workingLatex": "\\sqrt{121} + 2^3", "explanation": "There is a square root and a power to evaluate before adding.", "diagram": null },
        { "stepNumber": 2, "description": "Recall the order of operations.", "workingLatex": "\\text{root and power before addition}", "explanation": "We work out the root and the power first, then add.", "diagram": null },
        { "stepNumber": 3, "description": "Find the square root.", "workingLatex": "11^2 = 121", "explanation": "Since $11 \\times 11 = 121$, the square root of $121$ is $11$.", "diagram": null },
        { "stepNumber": 4, "description": "State the root value.", "workingLatex": "\\sqrt{121} = 11", "explanation": "The positive square root of $121$ is $11$.", "diagram": null },
        { "stepNumber": 5, "description": "Expand the power.", "workingLatex": "2^3 = 2 \\times 2 \\times 2", "explanation": "Cubing $2$ means multiplying three $2$s.", "diagram": null },
        { "stepNumber": 6, "description": "Evaluate the power.", "workingLatex": "2 \\times 2 \\times 2 = 8", "explanation": "So $2^3 = 8$.", "diagram": null },
        { "stepNumber": 7, "description": "Rewrite the sum.", "workingLatex": "\\sqrt{121} + 2^3 = 11 + 8", "explanation": "Replace the root and power with their values.", "diagram": null },
        { "stepNumber": 8, "description": "Add.", "workingLatex": "11 + 8 = 19", "explanation": "Adding gives $19$.", "diagram": null },
        { "stepNumber": 9, "description": "State the final answer.", "workingLatex": "\\sqrt{121} + 2^3 = 19", "explanation": "The completed calculation gives $19$.", "diagram": null }
      ],
      "finalAnswer": "$19$"
    }
  },
  {
    "id": "gcse.number.powers-roots.q043",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Powers and roots",
    "subtopicId": "gcse.number.powers-roots",
    "difficulty": "Intermediate",
    "marks": 2,
    "answerType": "numeric",
    "tags": ["powers of 3", "evaluate"],
    "questionText": "Work out $3^4$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Read the power.", "workingLatex": "3^4", "explanation": "The base is $3$ and the index $4$ means multiply four $3$s together.", "diagram": null },
        { "stepNumber": 2, "description": "Write it as a multiplication.", "workingLatex": "3^4 = 3 \\times 3 \\times 3 \\times 3", "explanation": "The index tells us how many threes to use.", "diagram": null },
        { "stepNumber": 3, "description": "Multiply the first two.", "workingLatex": "3 \\times 3 = 9", "explanation": "Start with the first pair of threes.", "diagram": null },
        { "stepNumber": 4, "description": "Multiply by the next factor.", "workingLatex": "9 \\times 3 = 27", "explanation": "Multiplying by another $3$ gives $27$.", "diagram": null },
        { "stepNumber": 5, "description": "Multiply by the final factor.", "workingLatex": "27 \\times 3 = 81", "explanation": "Multiplying by the last $3$ gives $81$.", "diagram": null },
        { "stepNumber": 6, "description": "State the value of the power.", "workingLatex": "3^4 = 81", "explanation": "So $3$ to the power $4$ is $81$.", "diagram": null },
        { "stepNumber": 7, "description": "Cross-check.", "workingLatex": "9^2 = 81", "explanation": "Since $3^4 = (3^2)^2 = 9^2 = 81$, the value is confirmed.", "diagram": null },
        { "stepNumber": 8, "description": "Write the final answer.", "workingLatex": "3^4 = 81", "explanation": "The completed calculation gives $81$.", "diagram": null },
        { "stepNumber": 9, "description": "Recognise the power.", "workingLatex": "81 = 3^4", "explanation": "So $81$ is the fourth power of $3$.", "diagram": null }
      ],
      "finalAnswer": "$81$"
    }
  },
  {
    "id": "gcse.number.powers-roots.q044",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Powers and roots",
    "subtopicId": "gcse.number.powers-roots",
    "difficulty": "Intermediate",
    "marks": 2,
    "answerType": "numeric",
    "tags": ["powers of 2", "evaluate"],
    "questionText": "Work out $2^6$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Read the power.", "workingLatex": "2^6", "explanation": "The base is $2$ and the index $6$ means multiply six $2$s together.", "diagram": null },
        { "stepNumber": 2, "description": "Write it as a multiplication.", "workingLatex": "2^6 = 2 \\times 2 \\times 2 \\times 2 \\times 2 \\times 2", "explanation": "The index tells us how many twos to use.", "diagram": null },
        { "stepNumber": 3, "description": "Double once.", "workingLatex": "2 \\times 2 = 4", "explanation": "Each factor of $2$ doubles the running total.", "diagram": null },
        { "stepNumber": 4, "description": "Double again.", "workingLatex": "4 \\times 2 = 8", "explanation": "Keep doubling.", "diagram": null },
        { "stepNumber": 5, "description": "Double again.", "workingLatex": "8 \\times 2 = 16", "explanation": "Keep doubling.", "diagram": null },
        { "stepNumber": 6, "description": "Double again.", "workingLatex": "16 \\times 2 = 32", "explanation": "Keep doubling.", "diagram": null },
        { "stepNumber": 7, "description": "Double the last time.", "workingLatex": "32 \\times 2 = 64", "explanation": "The sixth factor of $2$ doubles $32$ to $64$.", "diagram": null },
        { "stepNumber": 8, "description": "State the value of the power.", "workingLatex": "2^6 = 64", "explanation": "So $2$ to the power $6$ is $64$.", "diagram": null },
        { "stepNumber": 9, "description": "Write the final answer.", "workingLatex": "2^6 = 64", "explanation": "The completed calculation gives $64$.", "diagram": null }
      ],
      "finalAnswer": "$64$"
    }
  },
  {
    "id": "gcse.number.powers-roots.q045",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Powers and roots",
    "subtopicId": "gcse.number.powers-roots",
    "difficulty": "Intermediate",
    "marks": 2,
    "answerType": "numeric",
    "tags": ["square roots", "recognition"],
    "questionText": "$n^2 = 100$, where $n$ is positive. Work out the value of $n$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Read the equation.", "workingLatex": "n^2 = 100", "explanation": "We need the positive number that squares to $100$.", "diagram": null },
        { "stepNumber": 2, "description": "Undo the squaring.", "workingLatex": "n = \\sqrt{100}", "explanation": "Taking the square root reverses the squaring.", "diagram": null },
        { "stepNumber": 3, "description": "Recall the key square.", "workingLatex": "10^2 = 100", "explanation": "$100$ is the square of $10$, a standard fact.", "diagram": null },
        { "stepNumber": 4, "description": "Find the root.", "workingLatex": "\\sqrt{100} = 10", "explanation": "So the square root of $100$ is $10$.", "diagram": null },
        { "stepNumber": 5, "description": "Apply the positive condition.", "workingLatex": "n = 10", "explanation": "We are told $n$ is positive, so we take $10$ rather than $-10$.", "diagram": null },
        { "stepNumber": 6, "description": "Check the answer.", "workingLatex": "10^2 = 100 \\ \\checkmark", "explanation": "Substituting confirms the result.", "diagram": null },
        { "stepNumber": 7, "description": "State the final answer.", "workingLatex": "n = 10", "explanation": "The value of $n$ is $10$.", "diagram": null },
        { "stepNumber": 8, "description": "Note the other root.", "workingLatex": "(-10)^2 = 100", "explanation": "Although $-10$ also squares to $100$, the question asked only for the positive value.", "diagram": null },
        { "stepNumber": 9, "description": "Confirm the choice.", "workingLatex": "n = 10", "explanation": "The positive root is the required answer.", "diagram": null }
      ],
      "finalAnswer": "$n = 10$"
    }
  },
  {
    "id": "gcse.number.powers-roots.q046",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Powers and roots",
    "subtopicId": "gcse.number.powers-roots",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "numeric",
    "tags": ["mixed evaluation", "cubes", "powers of 10"],
    "questionText": "Work out $5^3 - 10^2$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Identify the two powers.", "workingLatex": "5^3 - 10^2", "explanation": "We evaluate each power before subtracting.", "diagram": null },
        { "stepNumber": 2, "description": "Recall the order of operations.", "workingLatex": "\\text{powers before subtraction}", "explanation": "Indices come before subtraction.", "diagram": null },
        { "stepNumber": 3, "description": "Expand the first power.", "workingLatex": "5^3 = 5 \\times 5 \\times 5", "explanation": "Cubing $5$ means multiplying three $5$s.", "diagram": null },
        { "stepNumber": 4, "description": "Evaluate the first power.", "workingLatex": "5 \\times 5 \\times 5 = 125", "explanation": "So $5^3 = 125$.", "diagram": null },
        { "stepNumber": 5, "description": "Expand the second power.", "workingLatex": "10^2 = 10 \\times 10", "explanation": "Squaring $10$ means multiplying two $10$s.", "diagram": null },
        { "stepNumber": 6, "description": "Evaluate the second power.", "workingLatex": "10 \\times 10 = 100", "explanation": "So $10^2 = 100$.", "diagram": null },
        { "stepNumber": 7, "description": "Rewrite the calculation.", "workingLatex": "5^3 - 10^2 = 125 - 100", "explanation": "Replace each power with its value.", "diagram": null },
        { "stepNumber": 8, "description": "Subtract.", "workingLatex": "125 - 100 = 25", "explanation": "Taking $100$ from $125$ leaves $25$.", "diagram": null },
        { "stepNumber": 9, "description": "State the final answer.", "workingLatex": "5^3 - 10^2 = 25", "explanation": "The completed calculation gives $25$.", "diagram": null }
      ],
      "finalAnswer": "$25$"
    }
  },
  {
    "id": "gcse.number.powers-roots.q047",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Powers and roots",
    "subtopicId": "gcse.number.powers-roots",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "numeric",
    "tags": ["context", "area", "square roots"],
    "questionText": "A square tile has an area of $144\\ \\text{cm}^2$. Work out the length of one side of the tile.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall the area of a square.", "workingLatex": "\\text{Area} = \\text{side}^2", "explanation": "A square's area equals its side length squared.", "diagram": null },
        { "stepNumber": 2, "description": "Substitute the area.", "workingLatex": "\\text{side}^2 = 144", "explanation": "The area is given as $144\\ \\text{cm}^2$.", "diagram": null },
        { "stepNumber": 3, "description": "Undo the squaring.", "workingLatex": "\\text{side} = \\sqrt{144}", "explanation": "Taking the square root reverses the squaring.", "diagram": null },
        { "stepNumber": 4, "description": "Bracket the answer.", "workingLatex": "11^2 = 121, \\ 13^2 = 169", "explanation": "Since $144$ lies between $121$ and $169$, the root is between $11$ and $13$.", "diagram": null },
        { "stepNumber": 5, "description": "Test the value in between.", "workingLatex": "12^2 = 144", "explanation": "Since $12 \\times 12 = 144$, the square root of $144$ is $12$.", "diagram": null },
        { "stepNumber": 6, "description": "State the side length.", "workingLatex": "\\text{side} = 12", "explanation": "The length that squares to $144$ is $12$.", "diagram": null },
        { "stepNumber": 7, "description": "Add units.", "workingLatex": "\\text{side} = 12\\ \\text{cm}", "explanation": "Lengths are measured in centimetres here.", "diagram": null },
        { "stepNumber": 8, "description": "Check the answer.", "workingLatex": "12 \\times 12 = 144 \\ \\checkmark", "explanation": "A side of $12\\ \\text{cm}$ gives an area of $144\\ \\text{cm}^2$, matching the question.", "diagram": null },
        { "stepNumber": 9, "description": "Write the final answer.", "workingLatex": "\\text{side} = 12\\ \\text{cm}", "explanation": "The side length of the tile is $12\\ \\text{cm}$.", "diagram": null }
      ],
      "finalAnswer": "$12\\ \\text{cm}$"
    }
  },
  {
    "id": "gcse.number.powers-roots.q048",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Powers and roots",
    "subtopicId": "gcse.number.powers-roots",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "numeric",
    "tags": ["context", "volume", "cube roots"],
    "questionText": "A cubical box has a volume of $64\\ \\text{cm}^3$. Work out the length of one edge of the box.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall the volume of a cube.", "workingLatex": "\\text{Volume} = \\text{edge}^3", "explanation": "A cube's volume equals its edge length cubed.", "diagram": null },
        { "stepNumber": 2, "description": "Substitute the volume.", "workingLatex": "\\text{edge}^3 = 64", "explanation": "The volume is given as $64\\ \\text{cm}^3$.", "diagram": null },
        { "stepNumber": 3, "description": "Undo the cubing.", "workingLatex": "\\text{edge} = \\sqrt[3]{64}", "explanation": "Taking the cube root reverses the cubing.", "diagram": null },
        { "stepNumber": 4, "description": "Estimate the root.", "workingLatex": "3^3 = 27, \\ 5^3 = 125", "explanation": "Since $64$ lies between $27$ and $125$, the edge is between $3$ and $5$.", "diagram": null },
        { "stepNumber": 5, "description": "Test the value in between.", "workingLatex": "4^3 = 64", "explanation": "Since $4 \\times 4 \\times 4 = 64$, the cube root of $64$ is $4$.", "diagram": null },
        { "stepNumber": 6, "description": "State the edge length.", "workingLatex": "\\text{edge} = 4", "explanation": "The length that cubes to $64$ is $4$.", "diagram": null },
        { "stepNumber": 7, "description": "Add units.", "workingLatex": "\\text{edge} = 4\\ \\text{cm}", "explanation": "Lengths are measured in centimetres here.", "diagram": null },
        { "stepNumber": 8, "description": "Check the answer.", "workingLatex": "4 \\times 4 \\times 4 = 64 \\ \\checkmark", "explanation": "An edge of $4\\ \\text{cm}$ gives a volume of $64\\ \\text{cm}^3$, matching the question.", "diagram": null },
        { "stepNumber": 9, "description": "Write the final answer.", "workingLatex": "\\text{edge} = 4\\ \\text{cm}", "explanation": "The edge length of the box is $4\\ \\text{cm}$.", "diagram": null }
      ],
      "finalAnswer": "$4\\ \\text{cm}$"
    }
  },
  {
    "id": "gcse.number.powers-roots.q049",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Powers and roots",
    "subtopicId": "gcse.number.powers-roots",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "numeric",
    "tags": ["mixed evaluation", "squares", "square roots"],
    "questionText": "Work out $9^2 - \\sqrt{81}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Identify the parts.", "workingLatex": "9^2 - \\sqrt{81}", "explanation": "There is a power and a square root to evaluate before subtracting.", "diagram": null },
        { "stepNumber": 2, "description": "Recall the order of operations.", "workingLatex": "\\text{power and root before subtraction}", "explanation": "We work out the power and the root first, then subtract.", "diagram": null },
        { "stepNumber": 3, "description": "Expand the power.", "workingLatex": "9^2 = 9 \\times 9", "explanation": "Squaring $9$ means multiplying two $9$s.", "diagram": null },
        { "stepNumber": 4, "description": "Evaluate the power.", "workingLatex": "9 \\times 9 = 81", "explanation": "So $9^2 = 81$.", "diagram": null },
        { "stepNumber": 5, "description": "Find the square root.", "workingLatex": "9^2 = 81", "explanation": "Since $9 \\times 9 = 81$, the square root of $81$ is $9$.", "diagram": null },
        { "stepNumber": 6, "description": "State the root value.", "workingLatex": "\\sqrt{81} = 9", "explanation": "The positive square root of $81$ is $9$.", "diagram": null },
        { "stepNumber": 7, "description": "Rewrite the calculation.", "workingLatex": "9^2 - \\sqrt{81} = 81 - 9", "explanation": "Replace the power and the root with their values.", "diagram": null },
        { "stepNumber": 8, "description": "Subtract.", "workingLatex": "81 - 9 = 72", "explanation": "Taking $9$ from $81$ leaves $72$.", "diagram": null },
        { "stepNumber": 9, "description": "State the final answer.", "workingLatex": "9^2 - \\sqrt{81} = 72", "explanation": "The completed calculation gives $72$.", "diagram": null }
      ],
      "finalAnswer": "$72$"
    }
  },
  {
    "id": "gcse.number.powers-roots.q050",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Powers and roots",
    "subtopicId": "gcse.number.powers-roots",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "numeric",
    "tags": ["mixed evaluation", "cubes", "squares"],
    "questionText": "Work out $4^3 + 3^2$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Identify the two powers.", "workingLatex": "4^3 + 3^2", "explanation": "We evaluate each power before adding.", "diagram": null },
        { "stepNumber": 2, "description": "Recall the order of operations.", "workingLatex": "\\text{powers before addition}", "explanation": "Indices come before addition.", "diagram": null },
        { "stepNumber": 3, "description": "Expand the first power.", "workingLatex": "4^3 = 4 \\times 4 \\times 4", "explanation": "Cubing $4$ means multiplying three $4$s.", "diagram": null },
        { "stepNumber": 4, "description": "Evaluate the first power.", "workingLatex": "4 \\times 4 \\times 4 = 64", "explanation": "So $4^3 = 64$.", "diagram": null },
        { "stepNumber": 5, "description": "Expand the second power.", "workingLatex": "3^2 = 3 \\times 3", "explanation": "Squaring $3$ means multiplying two $3$s.", "diagram": null },
        { "stepNumber": 6, "description": "Evaluate the second power.", "workingLatex": "3 \\times 3 = 9", "explanation": "So $3^2 = 9$.", "diagram": null },
        { "stepNumber": 7, "description": "Rewrite the sum.", "workingLatex": "4^3 + 3^2 = 64 + 9", "explanation": "Replace each power with its value.", "diagram": null },
        { "stepNumber": 8, "description": "Add.", "workingLatex": "64 + 9 = 73", "explanation": "Adding gives $73$.", "diagram": null },
        { "stepNumber": 9, "description": "State the final answer.", "workingLatex": "4^3 + 3^2 = 73", "explanation": "The completed calculation gives $73$.", "diagram": null }
      ],
      "finalAnswer": "$73$"
    }
  },
  {
    "id": "gcse.number.powers-roots.q051",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Powers and roots",
    "subtopicId": "gcse.number.powers-roots",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "numeric",
    "tags": ["cube roots", "roots", "evaluate"],
    "questionText": "Work out $\\sqrt[3]{216}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Understand the cube root.", "workingLatex": "\\sqrt[3]{216} = ?", "explanation": "We want the number whose cube is $216$.", "diagram": null },
        { "stepNumber": 2, "description": "Estimate the size.", "workingLatex": "5^3 = 125, \\ 7^3 = 343", "explanation": "Since $216$ lies between $125$ and $343$, the cube root is between $5$ and $7$.", "diagram": null },
        { "stepNumber": 3, "description": "Test the value in between.", "workingLatex": "6^3 = 6 \\times 6 \\times 6", "explanation": "The whole number in that range is $6$.", "diagram": null },
        { "stepNumber": 4, "description": "Cube the trial number, part one.", "workingLatex": "6 \\times 6 = 36", "explanation": "Start with the first pair of sixes.", "diagram": null },
        { "stepNumber": 5, "description": "Cube the trial number, part two.", "workingLatex": "36 \\times 6 = 216", "explanation": "Multiplying $36$ by the last $6$ gives $216$.", "diagram": null },
        { "stepNumber": 6, "description": "Match to the question.", "workingLatex": "\\sqrt[3]{216} = 6", "explanation": "Because $6^3 = 216$, the cube root of $216$ is $6$.", "diagram": null },
        { "stepNumber": 7, "description": "Confirm the root.", "workingLatex": "6^3 = 216 \\ \\checkmark", "explanation": "The value $6$ lies in the predicted range, so it is sensible.", "diagram": null },
        { "stepNumber": 8, "description": "Write the final answer.", "workingLatex": "\\sqrt[3]{216} = 6", "explanation": "The completed calculation gives $6$.", "diagram": null },
        { "stepNumber": 9, "description": "Interpret with a cube.", "workingLatex": "6 \\times 6 \\times 6 = 216", "explanation": "A cube of $216$ small cubes has $6$ along each edge.", "diagram": null }
      ],
      "finalAnswer": "$6$"
    }
  },
  {
    "id": "gcse.number.powers-roots.q052",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Powers and roots",
    "subtopicId": "gcse.number.powers-roots",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "numeric",
    "tags": ["mixed evaluation", "powers of 2", "squares"],
    "questionText": "Work out $2^5 - 5^2$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Identify the two powers.", "workingLatex": "2^5 - 5^2", "explanation": "We evaluate each power before subtracting.", "diagram": null },
        { "stepNumber": 2, "description": "Recall the order of operations.", "workingLatex": "\\text{powers before subtraction}", "explanation": "Indices come before subtraction.", "diagram": null },
        { "stepNumber": 3, "description": "Expand the first power.", "workingLatex": "2^5 = 2 \\times 2 \\times 2 \\times 2 \\times 2", "explanation": "Five factors of $2$ make $2^5$.", "diagram": null },
        { "stepNumber": 4, "description": "Evaluate the first power.", "workingLatex": "2 \\times 2 \\times 2 \\times 2 \\times 2 = 32", "explanation": "Doubling repeatedly gives $32$.", "diagram": null },
        { "stepNumber": 5, "description": "Expand the second power.", "workingLatex": "5^2 = 5 \\times 5", "explanation": "Squaring $5$ means multiplying two $5$s.", "diagram": null },
        { "stepNumber": 6, "description": "Evaluate the second power.", "workingLatex": "5 \\times 5 = 25", "explanation": "So $5^2 = 25$.", "diagram": null },
        { "stepNumber": 7, "description": "Rewrite the calculation.", "workingLatex": "2^5 - 5^2 = 32 - 25", "explanation": "Replace each power with its value.", "diagram": null },
        { "stepNumber": 8, "description": "Subtract.", "workingLatex": "32 - 25 = 7", "explanation": "Taking $25$ from $32$ leaves $7$.", "diagram": null },
        { "stepNumber": 9, "description": "State the final answer.", "workingLatex": "2^5 - 5^2 = 7", "explanation": "The completed calculation gives $7$.", "diagram": null }
      ],
      "finalAnswer": "$7$"
    }
  },
  {
    "id": "gcse.number.powers-roots.q053",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Powers and roots",
    "subtopicId": "gcse.number.powers-roots",
    "difficulty": "Intermediate",
    "marks": 2,
    "answerType": "numeric",
    "tags": ["square roots", "roots", "evaluate"],
    "questionText": "Work out $\\sqrt{169}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Understand the square root.", "workingLatex": "\\sqrt{169} = ?", "explanation": "We want the positive number whose square is $169$.", "diagram": null },
        { "stepNumber": 2, "description": "Bracket the answer.", "workingLatex": "12^2 = 144, \\ 14^2 = 196", "explanation": "Since $169$ lies between $144$ and $196$, the root is between $12$ and $14$.", "diagram": null },
        { "stepNumber": 3, "description": "Test the value in between.", "workingLatex": "13^2 = 13 \\times 13", "explanation": "The whole number in that range is $13$.", "diagram": null },
        { "stepNumber": 4, "description": "Square the trial number.", "workingLatex": "13 \\times 13 = 169", "explanation": "Squaring $13$ gives exactly $169$.", "diagram": null },
        { "stepNumber": 5, "description": "Match to the question.", "workingLatex": "\\sqrt{169} = 13", "explanation": "Because $13^2 = 169$, the square root of $169$ is $13$.", "diagram": null },
        { "stepNumber": 6, "description": "Take the positive root.", "workingLatex": "\\sqrt{169} = 13", "explanation": "The symbol asks for the positive value, giving $13$.", "diagram": null },
        { "stepNumber": 7, "description": "Write the final answer.", "workingLatex": "\\sqrt{169} = 13", "explanation": "The completed calculation gives $13$.", "diagram": null },
        { "stepNumber": 8, "description": "Confirm it is a perfect square.", "workingLatex": "169 = 13^2", "explanation": "This shows $169$ is a perfect square, so its root is a whole number.", "diagram": null },
        { "stepNumber": 9, "description": "Restate the result.", "workingLatex": "\\sqrt{169} = 13", "explanation": "The square root of $169$ is $13$.", "diagram": null }
      ],
      "finalAnswer": "$13$"
    }
  },
  {
    "id": "gcse.number.powers-roots.q054",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Powers and roots",
    "subtopicId": "gcse.number.powers-roots",
    "difficulty": "Intermediate",
    "marks": 2,
    "answerType": "numeric",
    "tags": ["square roots", "roots", "evaluate"],
    "questionText": "Work out $\\sqrt{400}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Understand the square root.", "workingLatex": "\\sqrt{400} = ?", "explanation": "We want the positive number whose square is $400$.", "diagram": null },
        { "stepNumber": 2, "description": "Split off the hundred.", "workingLatex": "400 = 4 \\times 100", "explanation": "Breaking $400$ into $4 \\times 100$ uses two easy squares.", "diagram": null },
        { "stepNumber": 3, "description": "Root each factor.", "workingLatex": "\\sqrt{4} = 2, \\ \\sqrt{100} = 10", "explanation": "The square root of a product is the product of the roots.", "diagram": null },
        { "stepNumber": 4, "description": "Combine the roots.", "workingLatex": "\\sqrt{400} = 2 \\times 10", "explanation": "Multiply the two roots together.", "diagram": null },
        { "stepNumber": 5, "description": "Work out the product.", "workingLatex": "2 \\times 10 = 20", "explanation": "This gives the root of $400$.", "diagram": null },
        { "stepNumber": 6, "description": "State the value.", "workingLatex": "\\sqrt{400} = 20", "explanation": "So the square root of $400$ is $20$.", "diagram": null },
        { "stepNumber": 7, "description": "Check the answer.", "workingLatex": "20^2 = 400 \\ \\checkmark", "explanation": "Squaring $20$ returns $400$, confirming the root.", "diagram": null },
        { "stepNumber": 8, "description": "Write the final answer.", "workingLatex": "\\sqrt{400} = 20", "explanation": "The completed calculation gives $20$.", "diagram": null },
        { "stepNumber": 9, "description": "Note the method.", "workingLatex": "\\sqrt{4 \\times 100} = \\sqrt{4} \\times \\sqrt{100}", "explanation": "Splitting into known squares is a quick way to root large perfect squares.", "diagram": null }
      ],
      "finalAnswer": "$20$"
    }
  },
  {
    "id": "gcse.number.powers-roots.q055",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Powers and roots",
    "subtopicId": "gcse.number.powers-roots",
    "difficulty": "Hard",
    "marks": 4,
    "answerType": "numeric",
    "tags": ["context", "area", "square roots", "perimeter"],
    "questionText": "A square field has an area of $196\\ \\text{m}^2$. Work out the perimeter of the field.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Understand the problem.", "workingLatex": "\\text{Area} = 196\\ \\text{m}^2", "explanation": "We are given the area of a square and asked for its perimeter, so we first need the side length.", "diagram": null },
        { "stepNumber": 2, "description": "Recall the area of a square.", "workingLatex": "\\text{Area} = \\text{side}^2", "explanation": "A square's area equals its side length squared.", "diagram": null },
        { "stepNumber": 3, "description": "Substitute the area.", "workingLatex": "\\text{side}^2 = 196", "explanation": "Replace the area with the given value.", "diagram": null },
        { "stepNumber": 4, "description": "Undo the squaring.", "workingLatex": "\\text{side} = \\sqrt{196}", "explanation": "Taking the square root reverses the squaring to find the side.", "diagram": null },
        { "stepNumber": 5, "description": "Bracket the root.", "workingLatex": "13^2 = 169, \\ 15^2 = 225", "explanation": "Since $196$ lies between $169$ and $225$, the side is between $13$ and $15$.", "diagram": null },
        { "stepNumber": 6, "description": "Test the value in between.", "workingLatex": "14^2 = 14 \\times 14", "explanation": "The whole number in that range is $14$.", "diagram": null },
        { "stepNumber": 7, "description": "Evaluate the square.", "workingLatex": "14 \\times 14 = 196", "explanation": "Squaring $14$ gives exactly $196$.", "diagram": null },
        { "stepNumber": 8, "description": "State the side length.", "workingLatex": "\\text{side} = 14\\ \\text{m}", "explanation": "So each side of the field is $14\\ \\text{m}$.", "diagram": null },
        { "stepNumber": 9, "description": "Recall the perimeter of a square.", "workingLatex": "\\text{Perimeter} = 4 \\times \\text{side}", "explanation": "A square has four equal sides, so its perimeter is four times the side.", "diagram": null },
        { "stepNumber": 10, "description": "Substitute the side.", "workingLatex": "\\text{Perimeter} = 4 \\times 14", "explanation": "Replace the side with $14\\ \\text{m}$.", "diagram": null },
        { "stepNumber": 11, "description": "Work out the perimeter.", "workingLatex": "4 \\times 14 = 56", "explanation": "Four fourteens make $56$.", "diagram": null },
        { "stepNumber": 12, "description": "Add units.", "workingLatex": "\\text{Perimeter} = 56\\ \\text{m}", "explanation": "The perimeter is a length, measured in metres.", "diagram": null },
        { "stepNumber": 13, "description": "Write the final answer.", "workingLatex": "\\text{Perimeter} = 56\\ \\text{m}", "explanation": "The perimeter of the field is $56\\ \\text{m}$.", "diagram": null }
      ],
      "finalAnswer": "$56\\ \\text{m}$"
    }
  },
  {
    "id": "gcse.number.powers-roots.q056",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Powers and roots",
    "subtopicId": "gcse.number.powers-roots",
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "numeric",
    "tags": ["context", "volume", "cube roots", "surface area"],
    "questionText": "A cube has a volume of $343\\ \\text{cm}^3$. Work out the total surface area of the cube.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Understand the problem.", "workingLatex": "\\text{Volume} = 343\\ \\text{cm}^3", "explanation": "We are given the volume and asked for the surface area, so we first need the edge length.", "diagram": null },
        { "stepNumber": 2, "description": "Recall the volume of a cube.", "workingLatex": "\\text{Volume} = \\text{edge}^3", "explanation": "A cube's volume equals its edge length cubed.", "diagram": null },
        { "stepNumber": 3, "description": "Substitute the volume.", "workingLatex": "\\text{edge}^3 = 343", "explanation": "Replace the volume with the given value.", "diagram": null },
        { "stepNumber": 4, "description": "Undo the cubing.", "workingLatex": "\\text{edge} = \\sqrt[3]{343}", "explanation": "Taking the cube root reverses the cubing.", "diagram": null },
        { "stepNumber": 5, "description": "Estimate the root.", "workingLatex": "6^3 = 216, \\ 8^3 = 512", "explanation": "Since $343$ lies between $216$ and $512$, the edge is between $6$ and $8$.", "diagram": null },
        { "stepNumber": 6, "description": "Test the value in between.", "workingLatex": "7^3 = 7 \\times 7 \\times 7", "explanation": "The whole number in that range is $7$.", "diagram": null },
        { "stepNumber": 7, "description": "Evaluate the cube.", "workingLatex": "7 \\times 7 \\times 7 = 343", "explanation": "$7 \\times 7 = 49$, then $49 \\times 7 = 343$.", "diagram": null },
        { "stepNumber": 8, "description": "State the edge length.", "workingLatex": "\\text{edge} = 7\\ \\text{cm}", "explanation": "So each edge of the cube is $7\\ \\text{cm}$.", "diagram": null },
        { "stepNumber": 9, "description": "Recall the surface area of a cube.", "workingLatex": "\\text{Surface area} = 6 \\times \\text{edge}^2", "explanation": "A cube has six identical square faces, so its surface area is six times one face.", "diagram": null },
        { "stepNumber": 10, "description": "Find the area of one face.", "workingLatex": "\\text{edge}^2 = 7 \\times 7 = 49", "explanation": "Each face is a $7\\ \\text{cm}$ square with area $49\\ \\text{cm}^2$.", "diagram": null },
        { "stepNumber": 11, "description": "Multiply by six faces.", "workingLatex": "\\text{Surface area} = 6 \\times 49", "explanation": "There are six such faces to add together.", "diagram": null },
        { "stepNumber": 12, "description": "Work out the product.", "workingLatex": "6 \\times 49 = 294", "explanation": "Six lots of $49$ make $294$.", "diagram": null },
        { "stepNumber": 13, "description": "Add units.", "workingLatex": "\\text{Surface area} = 294\\ \\text{cm}^2", "explanation": "Surface area is measured in square centimetres.", "diagram": null },
        { "stepNumber": 14, "description": "Check the reasoning.", "workingLatex": "\\text{edge} = 7 \\Rightarrow 7^3 = 343 \\ \\checkmark", "explanation": "The edge cubes back to the given volume, so our chain of steps is consistent.", "diagram": null },
        { "stepNumber": 15, "description": "Write the final answer.", "workingLatex": "\\text{Surface area} = 294\\ \\text{cm}^2", "explanation": "The total surface area of the cube is $294\\ \\text{cm}^2$.", "diagram": null }
      ],
      "finalAnswer": "$294\\ \\text{cm}^2$"
    }
  },
  {
    "id": "gcse.number.powers-roots.q057",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Powers and roots",
    "subtopicId": "gcse.number.powers-roots",
    "difficulty": "Hard",
    "marks": 4,
    "answerType": "numeric",
    "tags": ["mixed evaluation", "order of operations", "square roots"],
    "questionText": "Work out $2^4 \\times 3^2 - \\sqrt{400}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Identify the parts.", "workingLatex": "2^4 \\times 3^2 - \\sqrt{400}", "explanation": "There are two powers, a multiplication, a root and a subtraction to organise.", "diagram": null },
        { "stepNumber": 2, "description": "Plan with the order of operations.", "workingLatex": "\\text{powers/roots, then } \\times, \\text{ then } -", "explanation": "We evaluate powers and roots first, then multiply, and subtract last.", "diagram": null },
        { "stepNumber": 3, "description": "Expand the first power.", "workingLatex": "2^4 = 2 \\times 2 \\times 2 \\times 2", "explanation": "Four factors of $2$ make $2^4$.", "diagram": null },
        { "stepNumber": 4, "description": "Evaluate the first power.", "workingLatex": "2 \\times 2 \\times 2 \\times 2 = 16", "explanation": "So $2^4 = 16$.", "diagram": null },
        { "stepNumber": 5, "description": "Evaluate the second power.", "workingLatex": "3^2 = 3 \\times 3 = 9", "explanation": "Squaring $3$ gives $9$.", "diagram": null },
        { "stepNumber": 6, "description": "Evaluate the root.", "workingLatex": "\\sqrt{400} = 20", "explanation": "Since $20 \\times 20 = 400$, the square root of $400$ is $20$.", "diagram": null },
        { "stepNumber": 7, "description": "Rewrite the expression.", "workingLatex": "2^4 \\times 3^2 - \\sqrt{400} = 16 \\times 9 - 20", "explanation": "Replace each power and the root with its value.", "diagram": null },
        { "stepNumber": 8, "description": "Do the multiplication first.", "workingLatex": "16 \\times 9 = 144", "explanation": "Multiplication comes before subtraction, so we handle it now.", "diagram": null },
        { "stepNumber": 9, "description": "Rewrite again.", "workingLatex": "16 \\times 9 - 20 = 144 - 20", "explanation": "Now only the subtraction remains.", "diagram": null },
        { "stepNumber": 10, "description": "Subtract.", "workingLatex": "144 - 20 = 124", "explanation": "Taking $20$ from $144$ leaves $124$.", "diagram": null },
        { "stepNumber": 11, "description": "Sense-check the size.", "workingLatex": "144 - 20 = 124", "explanation": "The answer is a little below $144$, which fits taking away $20$.", "diagram": null },
        { "stepNumber": 12, "description": "State the final answer.", "workingLatex": "2^4 \\times 3^2 - \\sqrt{400} = 124", "explanation": "The completed calculation gives $124$.", "diagram": null },
        { "stepNumber": 13, "description": "Restate the result.", "workingLatex": "= 124", "explanation": "So the value of the expression is $124$.", "diagram": null }
      ],
      "finalAnswer": "$124$"
    }
  },
  {
    "id": "gcse.number.powers-roots.q058",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Powers and roots",
    "subtopicId": "gcse.number.powers-roots",
    "difficulty": "Hard",
    "marks": 4,
    "answerType": "numeric",
    "tags": ["mixed evaluation", "cubes", "squares", "order of operations"],
    "questionText": "Work out $3^3 + 4^3 - 5^2$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Identify the powers.", "workingLatex": "3^3 + 4^3 - 5^2", "explanation": "There are three powers to evaluate before combining.", "diagram": null },
        { "stepNumber": 2, "description": "Plan the order.", "workingLatex": "\\text{powers first, then } + \\text{ and } -", "explanation": "Indices come before addition and subtraction.", "diagram": null },
        { "stepNumber": 3, "description": "Expand the first power.", "workingLatex": "3^3 = 3 \\times 3 \\times 3", "explanation": "Cubing $3$ means three factors of $3$.", "diagram": null },
        { "stepNumber": 4, "description": "Evaluate the first power.", "workingLatex": "3 \\times 3 \\times 3 = 27", "explanation": "So $3^3 = 27$.", "diagram": null },
        { "stepNumber": 5, "description": "Expand the second power.", "workingLatex": "4^3 = 4 \\times 4 \\times 4", "explanation": "Cubing $4$ means three factors of $4$.", "diagram": null },
        { "stepNumber": 6, "description": "Evaluate the second power.", "workingLatex": "4 \\times 4 \\times 4 = 64", "explanation": "So $4^3 = 64$.", "diagram": null },
        { "stepNumber": 7, "description": "Evaluate the third power.", "workingLatex": "5^2 = 5 \\times 5 = 25", "explanation": "Squaring $5$ gives $25$.", "diagram": null },
        { "stepNumber": 8, "description": "Rewrite the expression.", "workingLatex": "3^3 + 4^3 - 5^2 = 27 + 64 - 25", "explanation": "Replace each power with its value.", "diagram": null },
        { "stepNumber": 9, "description": "Add the first two.", "workingLatex": "27 + 64 = 91", "explanation": "Working left to right, add $27$ and $64$.", "diagram": null },
        { "stepNumber": 10, "description": "Rewrite again.", "workingLatex": "27 + 64 - 25 = 91 - 25", "explanation": "Now only the subtraction remains.", "diagram": null },
        { "stepNumber": 11, "description": "Subtract.", "workingLatex": "91 - 25 = 66", "explanation": "Taking $25$ from $91$ leaves $66$.", "diagram": null },
        { "stepNumber": 12, "description": "State the final answer.", "workingLatex": "3^3 + 4^3 - 5^2 = 66", "explanation": "The completed calculation gives $66$.", "diagram": null },
        { "stepNumber": 13, "description": "Restate the result.", "workingLatex": "= 66", "explanation": "So the value of the expression is $66$.", "diagram": null }
      ],
      "finalAnswer": "$66$"
    }
  },
  {
    "id": "gcse.number.powers-roots.q059",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Powers and roots",
    "subtopicId": "gcse.number.powers-roots",
    "difficulty": "Hard",
    "marks": 4,
    "answerType": "numeric",
    "tags": ["mixed evaluation", "order of operations", "roots"],
    "questionText": "Work out $\\sqrt{225} + \\sqrt[3]{125} \\times 2^2$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Identify the parts.", "workingLatex": "\\sqrt{225} + \\sqrt[3]{125} \\times 2^2", "explanation": "There are two roots, a power, a multiplication and an addition.", "diagram": null },
        { "stepNumber": 2, "description": "Plan the order.", "workingLatex": "\\text{roots/power, then } \\times, \\text{ then } +", "explanation": "Roots and powers come first, then multiplication, then addition.", "diagram": null },
        { "stepNumber": 3, "description": "Evaluate the square root.", "workingLatex": "15^2 = 225", "explanation": "Since $15 \\times 15 = 225$, the square root of $225$ is $15$.", "diagram": null },
        { "stepNumber": 4, "description": "State the first value.", "workingLatex": "\\sqrt{225} = 15", "explanation": "The positive square root of $225$ is $15$.", "diagram": null },
        { "stepNumber": 5, "description": "Evaluate the cube root.", "workingLatex": "5^3 = 125", "explanation": "Since $5 \\times 5 \\times 5 = 125$, the cube root of $125$ is $5$.", "diagram": null },
        { "stepNumber": 6, "description": "Evaluate the power.", "workingLatex": "2^2 = 2 \\times 2 = 4", "explanation": "Squaring $2$ gives $4$.", "diagram": null },
        { "stepNumber": 7, "description": "Rewrite the expression.", "workingLatex": "\\sqrt{225} + \\sqrt[3]{125} \\times 2^2 = 15 + 5 \\times 4", "explanation": "Replace each root and the power with its value.", "diagram": null },
        { "stepNumber": 8, "description": "Do the multiplication first.", "workingLatex": "5 \\times 4 = 20", "explanation": "Multiplication comes before addition.", "diagram": null },
        { "stepNumber": 9, "description": "Rewrite again.", "workingLatex": "15 + 5 \\times 4 = 15 + 20", "explanation": "Only the addition now remains.", "diagram": null },
        { "stepNumber": 10, "description": "Add.", "workingLatex": "15 + 20 = 35", "explanation": "Adding gives $35$.", "diagram": null },
        { "stepNumber": 11, "description": "Sense-check.", "workingLatex": "15 + 20 = 35", "explanation": "The two positive parts add to a value larger than each, which is expected.", "diagram": null },
        { "stepNumber": 12, "description": "State the final answer.", "workingLatex": "\\sqrt{225} + \\sqrt[3]{125} \\times 2^2 = 35", "explanation": "The completed calculation gives $35$.", "diagram": null },
        { "stepNumber": 13, "description": "Restate the result.", "workingLatex": "= 35", "explanation": "So the value of the expression is $35$.", "diagram": null },
        { "stepNumber": 14, "description": "Reflect on the method.", "workingLatex": "\\text{roots} \\to \\times \\to +", "explanation": "Following the order of operations kept the calculation reliable.", "diagram": null }
      ],
      "finalAnswer": "$35$"
    }
  },
  {
    "id": "gcse.number.powers-roots.q060",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Powers and roots",
    "subtopicId": "gcse.number.powers-roots",
    "difficulty": "Hard",
    "marks": 4,
    "answerType": "written",
    "tags": ["comparison", "powers of 2", "squares"],
    "questionText": "Which is larger, $2^5$ or $5^2$, and by how much?",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Understand the task.", "workingLatex": "2^5 \\ \\text{vs} \\ 5^2", "explanation": "We must evaluate both powers, compare them, then find the difference.", "diagram": null },
        { "stepNumber": 2, "description": "Note the swap.", "workingLatex": "2^5 \\neq 5^2", "explanation": "Swapping the base and index usually changes the value, so we cannot assume they are equal.", "diagram": null },
        { "stepNumber": 3, "description": "Expand the first power.", "workingLatex": "2^5 = 2 \\times 2 \\times 2 \\times 2 \\times 2", "explanation": "Five factors of $2$ make $2^5$.", "diagram": null },
        { "stepNumber": 4, "description": "Evaluate the first power.", "workingLatex": "2 \\times 2 \\times 2 \\times 2 \\times 2 = 32", "explanation": "Doubling repeatedly gives $32$.", "diagram": null },
        { "stepNumber": 5, "description": "Expand the second power.", "workingLatex": "5^2 = 5 \\times 5", "explanation": "Squaring $5$ means two factors of $5$.", "diagram": null },
        { "stepNumber": 6, "description": "Evaluate the second power.", "workingLatex": "5 \\times 5 = 25", "explanation": "So $5^2 = 25$.", "diagram": null },
        { "stepNumber": 7, "description": "Compare the two values.", "workingLatex": "32 > 25", "explanation": "Since $32$ is greater than $25$, the power $2^5$ is larger.", "diagram": null },
        { "stepNumber": 8, "description": "Set up the difference.", "workingLatex": "32 - 25", "explanation": "To find how much larger, we subtract the smaller value from the larger.", "diagram": null },
        { "stepNumber": 9, "description": "Work out the difference.", "workingLatex": "32 - 25 = 7", "explanation": "Taking $25$ from $32$ leaves $7$.", "diagram": null },
        { "stepNumber": 10, "description": "Interpret the difference.", "workingLatex": "2^5 - 5^2 = 7", "explanation": "So $2^5$ exceeds $5^2$ by $7$.", "diagram": null },
        { "stepNumber": 11, "description": "State which is larger.", "workingLatex": "2^5 = 32 > 5^2 = 25", "explanation": "The larger value is $2^5$.", "diagram": null },
        { "stepNumber": 12, "description": "Sense-check.", "workingLatex": "32 = 25 + 7 \\ \\checkmark", "explanation": "Adding the difference back to $25$ returns $32$, confirming the comparison.", "diagram": null },
        { "stepNumber": 13, "description": "Write the final answer.", "workingLatex": "2^5 \\ \\text{larger by } 7", "explanation": "So $2^5$ is larger than $5^2$ by $7$.", "diagram": null }
      ],
      "finalAnswer": "$2^5$ is larger by $7$."
    }
  },
  {
    "id": "gcse.number.powers-roots.q061",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Powers and roots",
    "subtopicId": "gcse.number.powers-roots",
    "difficulty": "Hard",
    "marks": 4,
    "answerType": "numeric",
    "tags": ["cube roots", "squares", "multi-step"],
    "questionText": "$n^3 = 512$. Work out the value of $n$, and then work out $n^2$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Read the equation.", "workingLatex": "n^3 = 512", "explanation": "We need the number whose cube is $512$, then its square.", "diagram": null },
        { "stepNumber": 2, "description": "Undo the cubing.", "workingLatex": "n = \\sqrt[3]{512}", "explanation": "Taking the cube root reverses the cubing to find $n$.", "diagram": null },
        { "stepNumber": 3, "description": "Estimate the root.", "workingLatex": "7^3 = 343, \\ 9^3 = 729", "explanation": "Since $512$ lies between $343$ and $729$, the root is between $7$ and $9$.", "diagram": null },
        { "stepNumber": 4, "description": "Test the value in between.", "workingLatex": "8^3 = 8 \\times 8 \\times 8", "explanation": "The whole number in that range is $8$.", "diagram": null },
        { "stepNumber": 5, "description": "Evaluate the cube, part one.", "workingLatex": "8 \\times 8 = 64", "explanation": "Start with the first pair of eights.", "diagram": null },
        { "stepNumber": 6, "description": "Evaluate the cube, part two.", "workingLatex": "64 \\times 8 = 512", "explanation": "Multiplying $64$ by the last $8$ gives $512$.", "diagram": null },
        { "stepNumber": 7, "description": "State the value of n.", "workingLatex": "n = 8", "explanation": "Because $8^3 = 512$, we have $n = 8$.", "diagram": null },
        { "stepNumber": 8, "description": "Move to the second part.", "workingLatex": "n^2 = 8^2", "explanation": "Now we substitute $n = 8$ into $n^2$.", "diagram": null },
        { "stepNumber": 9, "description": "Expand the square.", "workingLatex": "8^2 = 8 \\times 8", "explanation": "Squaring $8$ means multiplying two $8$s.", "diagram": null },
        { "stepNumber": 10, "description": "Evaluate the square.", "workingLatex": "8 \\times 8 = 64", "explanation": "So $8^2 = 64$.", "diagram": null },
        { "stepNumber": 11, "description": "State the value of n squared.", "workingLatex": "n^2 = 64", "explanation": "Therefore $n^2 = 64$.", "diagram": null },
        { "stepNumber": 12, "description": "Check the first part.", "workingLatex": "8^3 = 512 \\ \\checkmark", "explanation": "The cube of $8$ returns the given value, confirming $n$.", "diagram": null },
        { "stepNumber": 13, "description": "Write the final answers.", "workingLatex": "n = 8, \\ n^2 = 64", "explanation": "So $n = 8$ and $n^2 = 64$.", "diagram": null },
        { "stepNumber": 14, "description": "Reflect on the link.", "workingLatex": "n = 8 \\Rightarrow n^2 = 64", "explanation": "Finding $n$ first made the second calculation straightforward.", "diagram": null }
      ],
      "finalAnswer": "$n = 8$ and $n^2 = 64$."
    }
  },
  {
    "id": "gcse.number.powers-roots.q062",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Powers and roots",
    "subtopicId": "gcse.number.powers-roots",
    "difficulty": "Hard",
    "marks": 3,
    "answerType": "numeric",
    "tags": ["mixed evaluation", "square roots", "roots"],
    "questionText": "Work out $\\sqrt{169} + \\sqrt{196}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Identify the two roots.", "workingLatex": "\\sqrt{169} + \\sqrt{196}", "explanation": "We evaluate each square root before adding.", "diagram": null },
        { "stepNumber": 2, "description": "Recall the order of operations.", "workingLatex": "\\text{roots before addition}", "explanation": "We find each root first, then add.", "diagram": null },
        { "stepNumber": 3, "description": "Bracket the first root.", "workingLatex": "12^2 = 144, \\ 14^2 = 196", "explanation": "Since $169$ is between $144$ and $196$, its root is between $12$ and $14$.", "diagram": null },
        { "stepNumber": 4, "description": "Find the first root.", "workingLatex": "13^2 = 169", "explanation": "Since $13 \\times 13 = 169$, the square root of $169$ is $13$.", "diagram": null },
        { "stepNumber": 5, "description": "State the first value.", "workingLatex": "\\sqrt{169} = 13", "explanation": "The positive square root of $169$ is $13$.", "diagram": null },
        { "stepNumber": 6, "description": "Find the second root.", "workingLatex": "14^2 = 196", "explanation": "Since $14 \\times 14 = 196$, the square root of $196$ is $14$.", "diagram": null },
        { "stepNumber": 7, "description": "State the second value.", "workingLatex": "\\sqrt{196} = 14", "explanation": "The positive square root of $196$ is $14$.", "diagram": null },
        { "stepNumber": 8, "description": "Rewrite the sum.", "workingLatex": "\\sqrt{169} + \\sqrt{196} = 13 + 14", "explanation": "Replace each root with its value.", "diagram": null },
        { "stepNumber": 9, "description": "Add.", "workingLatex": "13 + 14 = 27", "explanation": "Adding the two roots gives $27$.", "diagram": null },
        { "stepNumber": 10, "description": "Sense-check.", "workingLatex": "13 + 14 = 27", "explanation": "The roots are consecutive whole numbers, so their sum of $27$ is reasonable.", "diagram": null },
        { "stepNumber": 11, "description": "State the final answer.", "workingLatex": "\\sqrt{169} + \\sqrt{196} = 27", "explanation": "The completed calculation gives $27$.", "diagram": null },
        { "stepNumber": 12, "description": "Confirm perfect squares.", "workingLatex": "169 = 13^2, \\ 196 = 14^2", "explanation": "Both numbers are perfect squares, so both roots are whole numbers.", "diagram": null },
        { "stepNumber": 13, "description": "Restate the result.", "workingLatex": "= 27", "explanation": "So the value of the expression is $27$.", "diagram": null }
      ],
      "finalAnswer": "$27$"
    }
  },
  {
    "id": "gcse.number.powers-roots.q063",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Powers and roots",
    "subtopicId": "gcse.number.powers-roots",
    "difficulty": "Hard",
    "marks": 4,
    "answerType": "numeric",
    "tags": ["powers of 10", "place value", "evaluate"],
    "questionText": "Work out $10^4$ and write the answer in words.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Read the power.", "workingLatex": "10^4", "explanation": "The base is $10$ and the index $4$ means multiply four $10$s together.", "diagram": null },
        { "stepNumber": 2, "description": "Write it as a multiplication.", "workingLatex": "10^4 = 10 \\times 10 \\times 10 \\times 10", "explanation": "The index tells us how many tens to use.", "diagram": null },
        { "stepNumber": 3, "description": "Multiply the first two.", "workingLatex": "10 \\times 10 = 100", "explanation": "Ten tens make one hundred.", "diagram": null },
        { "stepNumber": 4, "description": "Multiply by the next ten.", "workingLatex": "100 \\times 10 = 1000", "explanation": "Each extra ten adds one more zero.", "diagram": null },
        { "stepNumber": 5, "description": "Multiply by the last ten.", "workingLatex": "1000 \\times 10 = 10000", "explanation": "One more factor of ten gives $10000$.", "diagram": null },
        { "stepNumber": 6, "description": "State the value of the power.", "workingLatex": "10^4 = 10000", "explanation": "So $10$ to the power $4$ is $10000$.", "diagram": null },
        { "stepNumber": 7, "description": "Use the zero pattern.", "workingLatex": "10^4 = 1\\underbrace{0000}_{4}", "explanation": "A power of $10$ has as many zeros as the index, and $4$ zeros gives $10000$.", "diagram": null },
        { "stepNumber": 8, "description": "Identify the place value.", "workingLatex": "10000 = \\text{ten thousand}", "explanation": "The leading digit sits in the ten-thousands column.", "diagram": null },
        { "stepNumber": 9, "description": "Cross-check with a known power.", "workingLatex": "10^3 = 1000", "explanation": "Since $10^4$ is ten times $10^3$, and $10 \\times 1000 = 10000$, the value is confirmed.", "diagram": null },
        { "stepNumber": 10, "description": "Write the number in words.", "workingLatex": "10000 = \\text{ten thousand}", "explanation": "In words, $10000$ is \"ten thousand\".", "diagram": null },
        { "stepNumber": 11, "description": "State the final answer.", "workingLatex": "10^4 = 10000", "explanation": "The completed calculation gives $10000$, or ten thousand.", "diagram": null },
        { "stepNumber": 12, "description": "Reflect on the pattern.", "workingLatex": "10^1, 10^2, 10^3, 10^4 = 10, 100, 1000, 10000", "explanation": "Each power of ten simply appends another zero.", "diagram": null },
        { "stepNumber": 13, "description": "Restate the result.", "workingLatex": "= 10000", "explanation": "So $10^4 = 10000$.", "diagram": null }
      ],
      "finalAnswer": "$10000$ (ten thousand)"
    }
  },
  {
    "id": "gcse.number.powers-roots.q064",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Powers and roots",
    "subtopicId": "gcse.number.powers-roots",
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "written",
    "tags": ["context", "volume", "surface area", "cubes"],
    "questionText": "A cube has edges of length $4\\ \\text{cm}$. Work out its volume and its total surface area, and state which number is larger.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Understand the task.", "workingLatex": "\\text{edge} = 4\\ \\text{cm}", "explanation": "We must find the volume and surface area of the cube, then compare the two numbers.", "diagram": null },
        { "stepNumber": 2, "description": "Recall the volume formula.", "workingLatex": "\\text{Volume} = \\text{edge}^3", "explanation": "A cube's volume is its edge cubed.", "diagram": null },
        { "stepNumber": 3, "description": "Substitute the edge.", "workingLatex": "\\text{Volume} = 4^3", "explanation": "Replace the edge with $4\\ \\text{cm}$.", "diagram": null },
        { "stepNumber": 4, "description": "Expand the cube.", "workingLatex": "4^3 = 4 \\times 4 \\times 4", "explanation": "Three factors of $4$ make $4^3$.", "diagram": null },
        { "stepNumber": 5, "description": "Evaluate the volume.", "workingLatex": "4 \\times 4 \\times 4 = 64", "explanation": "$4 \\times 4 = 16$, then $16 \\times 4 = 64$.", "diagram": null },
        { "stepNumber": 6, "description": "State the volume.", "workingLatex": "\\text{Volume} = 64\\ \\text{cm}^3", "explanation": "The volume is $64\\ \\text{cm}^3$.", "diagram": null },
        { "stepNumber": 7, "description": "Recall the surface area formula.", "workingLatex": "\\text{Surface area} = 6 \\times \\text{edge}^2", "explanation": "A cube has six identical square faces.", "diagram": null },
        { "stepNumber": 8, "description": "Find one face area.", "workingLatex": "\\text{edge}^2 = 4 \\times 4 = 16", "explanation": "Each face is a $4\\ \\text{cm}$ square of area $16\\ \\text{cm}^2$.", "diagram": null },
        { "stepNumber": 9, "description": "Multiply by six faces.", "workingLatex": "\\text{Surface area} = 6 \\times 16", "explanation": "There are six such faces.", "diagram": null },
        { "stepNumber": 10, "description": "Evaluate the surface area.", "workingLatex": "6 \\times 16 = 96", "explanation": "Six lots of $16$ make $96$.", "diagram": null },
        { "stepNumber": 11, "description": "State the surface area.", "workingLatex": "\\text{Surface area} = 96\\ \\text{cm}^2", "explanation": "The surface area is $96\\ \\text{cm}^2$.", "diagram": null },
        { "stepNumber": 12, "description": "Compare the two numbers.", "workingLatex": "96 > 64", "explanation": "As numbers, $96$ is greater than $64$, so the surface area value is larger.", "diagram": null },
        { "stepNumber": 13, "description": "Note the units differ.", "workingLatex": "64\\ \\text{cm}^3 \\ \\text{vs} \\ 96\\ \\text{cm}^2", "explanation": "The quantities have different units, so we are only comparing their numerical values.", "diagram": null },
        { "stepNumber": 14, "description": "Sense-check the volume.", "workingLatex": "4^3 = 64 \\ \\checkmark", "explanation": "The cube of the edge matches, confirming the volume.", "diagram": null },
        { "stepNumber": 15, "description": "Write the final answer.", "workingLatex": "V = 64\\ \\text{cm}^3, \\ S = 96\\ \\text{cm}^2", "explanation": "The volume is $64\\ \\text{cm}^3$, the surface area is $96\\ \\text{cm}^2$, and the surface area value is larger.", "diagram": null }
      ],
      "finalAnswer": "Volume $= 64\\ \\text{cm}^3$, surface area $= 96\\ \\text{cm}^2$; the surface area value is larger."
    }
  },
  {
    "id": "gcse.number.powers-roots.q065",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Powers and roots",
    "subtopicId": "gcse.number.powers-roots",
    "difficulty": "Hard",
    "marks": 3,
    "answerType": "numeric",
    "tags": ["cubes", "powers", "evaluate"],
    "questionText": "Work out $6^3$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Read the power.", "workingLatex": "6^3", "explanation": "The base is $6$ and the index $3$ means multiply three $6$s together.", "diagram": null },
        { "stepNumber": 2, "description": "Write it as a multiplication.", "workingLatex": "6^3 = 6 \\times 6 \\times 6", "explanation": "Cubing means three factors of the base.", "diagram": null },
        { "stepNumber": 3, "description": "Multiply the first two.", "workingLatex": "6 \\times 6 = 36", "explanation": "Start with the first pair of sixes.", "diagram": null },
        { "stepNumber": 4, "description": "Set up the next multiplication.", "workingLatex": "36 \\times 6", "explanation": "Now multiply the running total by the last $6$.", "diagram": null },
        { "stepNumber": 5, "description": "Split the multiplication.", "workingLatex": "36 \\times 6 = 30 \\times 6 + 6 \\times 6", "explanation": "Breaking $36$ into $30 + 6$ makes the multiplication easier.", "diagram": null },
        { "stepNumber": 6, "description": "Work out each part.", "workingLatex": "30 \\times 6 = 180, \\ 6 \\times 6 = 36", "explanation": "These parts are simple to find.", "diagram": null },
        { "stepNumber": 7, "description": "Add the parts.", "workingLatex": "180 + 36 = 216", "explanation": "Combining the pieces gives the product.", "diagram": null },
        { "stepNumber": 8, "description": "State the value of the power.", "workingLatex": "6^3 = 216", "explanation": "So the cube of $6$ is $216$.", "diagram": null },
        { "stepNumber": 9, "description": "Estimate to check.", "workingLatex": "5^3 = 125, \\ 7^3 = 343", "explanation": "$216$ sits between the cubes of $5$ and $7$, as expected.", "diagram": null },
        { "stepNumber": 10, "description": "Interpret with a cube.", "workingLatex": "6 \\times 6 \\times 6 = 216", "explanation": "A cube with $6$ small cubes along each edge holds $216$ small cubes.", "diagram": null },
        { "stepNumber": 11, "description": "Confirm the value.", "workingLatex": "6^3 = 216 \\ \\checkmark", "explanation": "The calculation and estimate agree.", "diagram": null },
        { "stepNumber": 12, "description": "Write the final answer.", "workingLatex": "6^3 = 216", "explanation": "The completed calculation gives $216$.", "diagram": null },
        { "stepNumber": 13, "description": "Recognise the value.", "workingLatex": "216 = 6^3", "explanation": "So $216$ is the cube of $6$.", "diagram": null }
      ],
      "finalAnswer": "$216$"
    }
  },
  {
    "id": "gcse.number.powers-roots.q066",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Powers and roots",
    "subtopicId": "gcse.number.powers-roots",
    "difficulty": "Hard",
    "marks": 4,
    "answerType": "numeric",
    "tags": ["mixed evaluation", "square roots", "cubes", "order of operations"],
    "questionText": "Work out $\\left(\\sqrt{100}\\right)^2 - 3^3$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Identify the parts.", "workingLatex": "\\left(\\sqrt{100}\\right)^2 - 3^3", "explanation": "There is a squared root and a cube to evaluate before subtracting.", "diagram": null },
        { "stepNumber": 2, "description": "Plan the order.", "workingLatex": "\\text{brackets/powers first, then } -", "explanation": "We work inside the brackets and evaluate powers before subtracting.", "diagram": null },
        { "stepNumber": 3, "description": "Evaluate the root.", "workingLatex": "\\sqrt{100} = 10", "explanation": "Since $10 \\times 10 = 100$, the square root of $100$ is $10$.", "diagram": null },
        { "stepNumber": 4, "description": "Square the root.", "workingLatex": "\\left(\\sqrt{100}\\right)^2 = 10^2", "explanation": "Squaring the root of $100$ means squaring $10$.", "diagram": null },
        { "stepNumber": 5, "description": "Evaluate the square.", "workingLatex": "10^2 = 100", "explanation": "So the first part is $100$; squaring undoes the root.", "diagram": null },
        { "stepNumber": 6, "description": "Expand the cube.", "workingLatex": "3^3 = 3 \\times 3 \\times 3", "explanation": "Cubing $3$ means three factors of $3$.", "diagram": null },
        { "stepNumber": 7, "description": "Evaluate the cube.", "workingLatex": "3 \\times 3 \\times 3 = 27", "explanation": "So $3^3 = 27$.", "diagram": null },
        { "stepNumber": 8, "description": "Rewrite the calculation.", "workingLatex": "\\left(\\sqrt{100}\\right)^2 - 3^3 = 100 - 27", "explanation": "Replace each part with its value.", "diagram": null },
        { "stepNumber": 9, "description": "Subtract.", "workingLatex": "100 - 27 = 73", "explanation": "Taking $27$ from $100$ leaves $73$.", "diagram": null },
        { "stepNumber": 10, "description": "Sense-check.", "workingLatex": "100 - 27 = 73", "explanation": "The answer is a little below $100$, which fits taking away $27$.", "diagram": null },
        { "stepNumber": 11, "description": "Note the shortcut.", "workingLatex": "\\left(\\sqrt{100}\\right)^2 = 100", "explanation": "Squaring a square root of a positive number returns the original number.", "diagram": null },
        { "stepNumber": 12, "description": "State the final answer.", "workingLatex": "\\left(\\sqrt{100}\\right)^2 - 3^3 = 73", "explanation": "The completed calculation gives $73$.", "diagram": null },
        { "stepNumber": 13, "description": "Restate the result.", "workingLatex": "= 73", "explanation": "So the value of the expression is $73$.", "diagram": null }
      ],
      "finalAnswer": "$73$"
    }
  },
  {
    "id": "gcse.number.powers-roots.q067",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Powers and roots",
    "subtopicId": "gcse.number.powers-roots",
    "difficulty": "Hard",
    "marks": 3,
    "answerType": "numeric",
    "tags": ["powers of 2", "evaluate"],
    "questionText": "Work out $2^7$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Read the power.", "workingLatex": "2^7", "explanation": "The base is $2$ and the index $7$ means multiply seven $2$s together.", "diagram": null },
        { "stepNumber": 2, "description": "Write it as a multiplication.", "workingLatex": "2^7 = 2 \\times 2 \\times 2 \\times 2 \\times 2 \\times 2 \\times 2", "explanation": "The index tells us how many twos to use.", "diagram": null },
        { "stepNumber": 3, "description": "Double once.", "workingLatex": "2 \\times 2 = 4", "explanation": "Each factor of $2$ doubles the running total.", "diagram": null },
        { "stepNumber": 4, "description": "Double again.", "workingLatex": "4 \\times 2 = 8", "explanation": "Keep doubling.", "diagram": null },
        { "stepNumber": 5, "description": "Double again.", "workingLatex": "8 \\times 2 = 16", "explanation": "Keep doubling.", "diagram": null },
        { "stepNumber": 6, "description": "Double again.", "workingLatex": "16 \\times 2 = 32", "explanation": "Keep doubling.", "diagram": null },
        { "stepNumber": 7, "description": "Double again.", "workingLatex": "32 \\times 2 = 64", "explanation": "Keep doubling.", "diagram": null },
        { "stepNumber": 8, "description": "Double the last time.", "workingLatex": "64 \\times 2 = 128", "explanation": "The seventh factor of $2$ doubles $64$ to $128$.", "diagram": null },
        { "stepNumber": 9, "description": "State the value of the power.", "workingLatex": "2^7 = 128", "explanation": "So $2$ to the power $7$ is $128$.", "diagram": null },
        { "stepNumber": 10, "description": "Cross-check.", "workingLatex": "2^6 = 64", "explanation": "Since $2^7$ is double $2^6$, and $2 \\times 64 = 128$, the value is confirmed.", "diagram": null },
        { "stepNumber": 11, "description": "Note the count.", "workingLatex": "\\text{seven doublings from } 1", "explanation": "Starting at $1$ and doubling seven times also reaches $128$.", "diagram": null },
        { "stepNumber": 12, "description": "Write the final answer.", "workingLatex": "2^7 = 128", "explanation": "The completed calculation gives $128$.", "diagram": null },
        { "stepNumber": 13, "description": "Recognise the power.", "workingLatex": "128 = 2^7", "explanation": "So $128$ is the seventh power of $2$.", "diagram": null }
      ],
      "finalAnswer": "$128$"
    }
  },
  {
    "id": "gcse.number.powers-roots.q068",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Powers and roots",
    "subtopicId": "gcse.number.powers-roots",
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "numeric",
    "tags": ["context", "area", "square roots", "perimeter", "money"],
    "questionText": "A square garden has an area of $169\\ \\text{m}^2$. Fencing costs $\\pounds 4$ per metre. Work out the total cost of putting fencing around the whole garden.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Understand the problem.", "workingLatex": "\\text{Area} = 169\\ \\text{m}^2", "explanation": "We need the perimeter to know how much fencing is required, then its cost.", "diagram": null },
        { "stepNumber": 2, "description": "Recall the area of a square.", "workingLatex": "\\text{Area} = \\text{side}^2", "explanation": "A square's area equals its side length squared.", "diagram": null },
        { "stepNumber": 3, "description": "Substitute the area.", "workingLatex": "\\text{side}^2 = 169", "explanation": "Replace the area with the given value.", "diagram": null },
        { "stepNumber": 4, "description": "Undo the squaring.", "workingLatex": "\\text{side} = \\sqrt{169}", "explanation": "Taking the square root reverses the squaring.", "diagram": null },
        { "stepNumber": 5, "description": "Find the root.", "workingLatex": "13^2 = 169", "explanation": "Since $13 \\times 13 = 169$, the square root of $169$ is $13$.", "diagram": null },
        { "stepNumber": 6, "description": "State the side length.", "workingLatex": "\\text{side} = 13\\ \\text{m}", "explanation": "So each side of the garden is $13\\ \\text{m}$.", "diagram": null },
        { "stepNumber": 7, "description": "Recall the perimeter of a square.", "workingLatex": "\\text{Perimeter} = 4 \\times \\text{side}", "explanation": "The fencing goes around all four equal sides.", "diagram": null },
        { "stepNumber": 8, "description": "Substitute the side.", "workingLatex": "\\text{Perimeter} = 4 \\times 13", "explanation": "Replace the side with $13\\ \\text{m}$.", "diagram": null },
        { "stepNumber": 9, "description": "Work out the perimeter.", "workingLatex": "4 \\times 13 = 52", "explanation": "Four thirteens make $52$.", "diagram": null },
        { "stepNumber": 10, "description": "State the length of fencing.", "workingLatex": "\\text{Perimeter} = 52\\ \\text{m}", "explanation": "So $52\\ \\text{m}$ of fencing is needed.", "diagram": null },
        { "stepNumber": 11, "description": "Set up the cost.", "workingLatex": "\\text{Cost} = 52 \\times \\pounds 4", "explanation": "Each metre costs $\\pounds 4$, so we multiply the length by the price.", "diagram": null },
        { "stepNumber": 12, "description": "Work out the cost.", "workingLatex": "52 \\times 4 = 208", "explanation": "Fifty-two fours make $208$.", "diagram": null },
        { "stepNumber": 13, "description": "Add the pound sign.", "workingLatex": "\\text{Cost} = \\pounds 208", "explanation": "The cost is measured in pounds.", "diagram": null },
        { "stepNumber": 14, "description": "Check the reasoning.", "workingLatex": "13^2 = 169 \\ \\checkmark", "explanation": "The side squares back to the given area, so our chain of steps is consistent.", "diagram": null },
        { "stepNumber": 15, "description": "Write the final answer.", "workingLatex": "\\text{Cost} = \\pounds 208", "explanation": "The total cost of the fencing is $\\pounds 208$.", "diagram": null }
      ],
      "finalAnswer": "$\\pounds 208$"
    }
  },
  {
    "id": "gcse.number.powers-roots.q069",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Powers and roots",
    "subtopicId": "gcse.number.powers-roots",
    "difficulty": "Hard",
    "marks": 4,
    "answerType": "numeric",
    "tags": ["squares", "recognition", "reasoning"],
    "questionText": "Find the square number that lies between $30$ and $40$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Understand the task.", "workingLatex": "30 < n^2 < 40", "explanation": "We need a perfect square whose value is between $30$ and $40$.", "diagram": null },
        { "stepNumber": 2, "description": "Recall what a square number is.", "workingLatex": "n^2 = n \\times n", "explanation": "A square number is a whole number multiplied by itself.", "diagram": null },
        { "stepNumber": 3, "description": "List nearby squares.", "workingLatex": "5^2 = 25", "explanation": "$25$ is below $30$, so $5$ is too small.", "diagram": null },
        { "stepNumber": 4, "description": "Try the next whole number.", "workingLatex": "6^2 = 6 \\times 6", "explanation": "The next whole number to test is $6$.", "diagram": null },
        { "stepNumber": 5, "description": "Evaluate that square.", "workingLatex": "6 \\times 6 = 36", "explanation": "So $6^2 = 36$.", "diagram": null },
        { "stepNumber": 6, "description": "Check it is in range.", "workingLatex": "30 < 36 < 40", "explanation": "$36$ lies between $30$ and $40$, so it qualifies.", "diagram": null },
        { "stepNumber": 7, "description": "Check the next square.", "workingLatex": "7^2 = 49", "explanation": "$49$ is above $40$, so $7$ is too big.", "diagram": null },
        { "stepNumber": 8, "description": "Confirm uniqueness.", "workingLatex": "25 < 30, \\ 49 > 40", "explanation": "The squares either side of $36$ fall outside the range, so $36$ is the only one.", "diagram": null },
        { "stepNumber": 9, "description": "State the square number.", "workingLatex": "n^2 = 36", "explanation": "The square number between $30$ and $40$ is $36$.", "diagram": null },
        { "stepNumber": 10, "description": "Identify its root.", "workingLatex": "\\sqrt{36} = 6", "explanation": "It is the square of $6$.", "diagram": null },
        { "stepNumber": 11, "description": "Sense-check.", "workingLatex": "6^2 = 36 \\ \\checkmark", "explanation": "Squaring $6$ returns $36$, confirming the answer.", "diagram": null },
        { "stepNumber": 12, "description": "Write the final answer.", "workingLatex": "36", "explanation": "The required square number is $36$.", "diagram": null },
        { "stepNumber": 13, "description": "Restate the result.", "workingLatex": "36 = 6^2", "explanation": "So $36$, the square of $6$, is the number between $30$ and $40$.", "diagram": null }
      ],
      "finalAnswer": "$36$"
    }
  },
  {
    "id": "gcse.number.powers-roots.q070",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Powers and roots",
    "subtopicId": "gcse.number.powers-roots",
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "numeric",
    "tags": ["squares", "cubes", "reasoning", "recognition"],
    "questionText": "Find a number greater than $1$ and less than $100$ that is both a square number and a cube number.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Understand the task.", "workingLatex": "1 < n < 100", "explanation": "We need a number in this range that is a perfect square and also a perfect cube.", "diagram": null },
        { "stepNumber": 2, "description": "List the square numbers.", "workingLatex": "4, 9, 16, 25, 36, 49, 64, 81", "explanation": "These are the squares of $2$ to $9$, all below $100$.", "diagram": null },
        { "stepNumber": 3, "description": "List the cube numbers.", "workingLatex": "8, 27, 64", "explanation": "These are the cubes of $2$, $3$ and $4$, all below $100$.", "diagram": null },
        { "stepNumber": 4, "description": "Look for a common value.", "workingLatex": "64 \\in \\{ \\text{squares} \\}, \\ 64 \\in \\{ \\text{cubes} \\}", "explanation": "The number $64$ appears in both lists, so it is our candidate.", "diagram": null },
        { "stepNumber": 5, "description": "Check it is a square.", "workingLatex": "8^2 = 8 \\times 8", "explanation": "We test whether $64$ is a square.", "diagram": null },
        { "stepNumber": 6, "description": "Evaluate the square.", "workingLatex": "8 \\times 8 = 64", "explanation": "So $64 = 8^2$, confirming it is a square number.", "diagram": null },
        { "stepNumber": 7, "description": "Check it is a cube.", "workingLatex": "4^3 = 4 \\times 4 \\times 4", "explanation": "We test whether $64$ is also a cube.", "diagram": null },
        { "stepNumber": 8, "description": "Evaluate the cube.", "workingLatex": "4 \\times 4 \\times 4 = 64", "explanation": "So $64 = 4^3$, confirming it is a cube number.", "diagram": null },
        { "stepNumber": 9, "description": "Confirm both conditions.", "workingLatex": "64 = 8^2 = 4^3", "explanation": "Since $64$ is both $8^2$ and $4^3$, it satisfies both requirements.", "diagram": null },
        { "stepNumber": 10, "description": "Check the range.", "workingLatex": "1 < 64 < 100", "explanation": "The value $64$ lies between $1$ and $100$, as required.", "diagram": null },
        { "stepNumber": 11, "description": "Confirm it is unique here.", "workingLatex": "8, 27 \\ \\text{not squares}", "explanation": "The other cubes below $100$ are not perfect squares, so $64$ is the only one in range.", "diagram": null },
        { "stepNumber": 12, "description": "State the number.", "workingLatex": "n = 64", "explanation": "The number that is both a square and a cube is $64$.", "diagram": null },
        { "stepNumber": 13, "description": "Sense-check.", "workingLatex": "8^2 = 64, \\ 4^3 = 64 \\ \\checkmark", "explanation": "Both calculations give $64$, confirming the answer.", "diagram": null },
        { "stepNumber": 14, "description": "Note why this happens.", "workingLatex": "64 = 2^6", "explanation": "Because $64 = 2^6$, and $6$ is a multiple of both $2$ and $3$, it is at once a square and a cube.", "diagram": null },
        { "stepNumber": 15, "description": "Write the final answer.", "workingLatex": "n = 64", "explanation": "The required number is $64$.", "diagram": null }
      ],
      "finalAnswer": "$64$"
    }
  }
];
