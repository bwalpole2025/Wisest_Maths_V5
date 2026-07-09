import { Question } from "@/lib/types";

export const questions: Question[] = [
  {
    "id": "gcse.number.estimation.q001",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Estimation and checking",
    "subtopicId": "gcse.number.estimation",
    "difficulty": "Easy",
    "marks": 1,
    "answerType": "value",
    "tags": ["estimation", "1 significant figure", "addition"],
    "questionText": "Estimate the value of $4.8 + 3.1$ by rounding each number to $1$ significant figure.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall what estimating means.", "workingLatex": "\\text{round each number to } 1\\text{ s.f.}", "explanation": "To estimate we replace each number with a nearby simple number rounded to one significant figure.", "diagram": null },
        { "stepNumber": 2, "description": "Round the first number.", "workingLatex": "4.8 \\approx 5", "explanation": "The digit after the first significant figure is $8$, so we round up to $5$.", "diagram": null },
        { "stepNumber": 3, "description": "Round the second number.", "workingLatex": "3.1 \\approx 3", "explanation": "The digit after the first significant figure is $1$, so we round down to $3$.", "diagram": null },
        { "stepNumber": 4, "description": "Rewrite the calculation.", "workingLatex": "5 + 3", "explanation": "We add the two rounded numbers.", "diagram": null },
        { "stepNumber": 5, "description": "Work out the estimate.", "workingLatex": "5 + 3 = 8", "explanation": "The estimated total is eight.", "diagram": null },
        { "stepNumber": 6, "description": "State the answer with the estimate symbol.", "workingLatex": "4.8 + 3.1 \\approx 8", "explanation": "We use $\\approx$ because this is an estimate, not the exact value.", "diagram": null }
      ],
      "finalAnswer": "$\\approx 8$"
    }
  },
  {
    "id": "gcse.number.estimation.q002",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Estimation and checking",
    "subtopicId": "gcse.number.estimation",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "value",
    "tags": ["estimation", "1 significant figure", "multiplication"],
    "questionText": "Estimate the value of $19 \\times 21$ by rounding each number to $1$ significant figure.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall what estimating means.", "workingLatex": "\\text{round each number to } 1\\text{ s.f.}", "explanation": "We replace each number with its value to one significant figure.", "diagram": null },
        { "stepNumber": 2, "description": "Round the first number.", "workingLatex": "19 \\approx 20", "explanation": "The digit after the first significant figure is $9$, so we round up to $20$.", "diagram": null },
        { "stepNumber": 3, "description": "Round the second number.", "workingLatex": "21 \\approx 20", "explanation": "The digit after the first significant figure is $1$, so we round down to $20$.", "diagram": null },
        { "stepNumber": 4, "description": "Rewrite the calculation.", "workingLatex": "20 \\times 20", "explanation": "We multiply the two rounded numbers.", "diagram": null },
        { "stepNumber": 5, "description": "Work out the estimate.", "workingLatex": "20 \\times 20 = 400", "explanation": "Two tens times two tens is four hundred.", "diagram": null },
        { "stepNumber": 6, "description": "State the answer.", "workingLatex": "19 \\times 21 \\approx 400", "explanation": "So the product is roughly four hundred.", "diagram": null },
        { "stepNumber": 7, "description": "Compare with the exact value.", "workingLatex": "19 \\times 21 = 399", "explanation": "The exact answer $399$ is very close, showing the estimate is sensible.", "diagram": null }
      ],
      "finalAnswer": "$\\approx 400$"
    }
  },
  {
    "id": "gcse.number.estimation.q003",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Estimation and checking",
    "subtopicId": "gcse.number.estimation",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "value",
    "tags": ["estimation", "1 significant figure", "addition"],
    "questionText": "Estimate the value of $297 + 412$ by rounding each number to $1$ significant figure.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall what estimating means.", "workingLatex": "\\text{round each number to } 1\\text{ s.f.}", "explanation": "We round each number to one significant figure before adding.", "diagram": null },
        { "stepNumber": 2, "description": "Round the first number.", "workingLatex": "297 \\approx 300", "explanation": "The first significant figure is the hundreds; the next digit $9$ rounds it up to $300$.", "diagram": null },
        { "stepNumber": 3, "description": "Round the second number.", "workingLatex": "412 \\approx 400", "explanation": "The first significant figure is the hundreds; the next digit $1$ rounds it down to $400$.", "diagram": null },
        { "stepNumber": 4, "description": "Rewrite the calculation.", "workingLatex": "300 + 400", "explanation": "We add the two rounded numbers.", "diagram": null },
        { "stepNumber": 5, "description": "Work out the estimate.", "workingLatex": "300 + 400 = 700", "explanation": "Three hundred plus four hundred is seven hundred.", "diagram": null },
        { "stepNumber": 6, "description": "State the answer.", "workingLatex": "297 + 412 \\approx 700", "explanation": "So the sum is roughly seven hundred.", "diagram": null }
      ],
      "finalAnswer": "$\\approx 700$"
    }
  },
  {
    "id": "gcse.number.estimation.q004",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Estimation and checking",
    "subtopicId": "gcse.number.estimation",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "value",
    "tags": ["estimation", "1 significant figure", "multiplication", "decimals"],
    "questionText": "Estimate the value of $6.1 \\times 2.9$ by rounding each number to $1$ significant figure.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall what estimating means.", "workingLatex": "\\text{round each number to } 1\\text{ s.f.}", "explanation": "We round each number to one significant figure.", "diagram": null },
        { "stepNumber": 2, "description": "Round the first number.", "workingLatex": "6.1 \\approx 6", "explanation": "The digit after the first significant figure is $1$, so we round down to $6$.", "diagram": null },
        { "stepNumber": 3, "description": "Round the second number.", "workingLatex": "2.9 \\approx 3", "explanation": "The digit after the first significant figure is $9$, so we round up to $3$.", "diagram": null },
        { "stepNumber": 4, "description": "Rewrite the calculation.", "workingLatex": "6 \\times 3", "explanation": "We multiply the two rounded numbers.", "diagram": null },
        { "stepNumber": 5, "description": "Work out the estimate.", "workingLatex": "6 \\times 3 = 18", "explanation": "Six times three is eighteen.", "diagram": null },
        { "stepNumber": 6, "description": "State the answer.", "workingLatex": "6.1 \\times 2.9 \\approx 18", "explanation": "So the product is roughly eighteen.", "diagram": null }
      ],
      "finalAnswer": "$\\approx 18$"
    }
  },
  {
    "id": "gcse.number.estimation.q005",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Estimation and checking",
    "subtopicId": "gcse.number.estimation",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "value",
    "tags": ["estimation", "1 significant figure", "multiplication"],
    "questionText": "Estimate the value of $39 \\times 8.9$ by rounding each number to $1$ significant figure.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall what estimating means.", "workingLatex": "\\text{round each number to } 1\\text{ s.f.}", "explanation": "We round each number to one significant figure.", "diagram": null },
        { "stepNumber": 2, "description": "Round the first number.", "workingLatex": "39 \\approx 40", "explanation": "The digit after the first significant figure is $9$, so we round up to $40$.", "diagram": null },
        { "stepNumber": 3, "description": "Round the second number.", "workingLatex": "8.9 \\approx 9", "explanation": "The digit after the first significant figure is $9$, so we round up to $9$.", "diagram": null },
        { "stepNumber": 4, "description": "Rewrite the calculation.", "workingLatex": "40 \\times 9", "explanation": "We multiply the two rounded numbers.", "diagram": null },
        { "stepNumber": 5, "description": "Work out the estimate.", "workingLatex": "40 \\times 9 = 360", "explanation": "Forty times nine is three hundred and sixty.", "diagram": null },
        { "stepNumber": 6, "description": "State the answer.", "workingLatex": "39 \\times 8.9 \\approx 360", "explanation": "So the product is roughly three hundred and sixty.", "diagram": null }
      ],
      "finalAnswer": "$\\approx 360$"
    }
  },
  {
    "id": "gcse.number.estimation.q006",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Estimation and checking",
    "subtopicId": "gcse.number.estimation",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "value",
    "tags": ["estimation", "1 significant figure", "division"],
    "questionText": "Estimate the value of $812 \\div 38$ by rounding each number to $1$ significant figure.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall what estimating means.", "workingLatex": "\\text{round each number to } 1\\text{ s.f.}", "explanation": "We round each number to one significant figure.", "diagram": null },
        { "stepNumber": 2, "description": "Round the first number.", "workingLatex": "812 \\approx 800", "explanation": "The first significant figure is the hundreds; the next digit $1$ rounds it down to $800$.", "diagram": null },
        { "stepNumber": 3, "description": "Round the second number.", "workingLatex": "38 \\approx 40", "explanation": "The digit after the first significant figure is $8$, so we round up to $40$.", "diagram": null },
        { "stepNumber": 4, "description": "Rewrite the calculation.", "workingLatex": "800 \\div 40", "explanation": "We divide the two rounded numbers.", "diagram": null },
        { "stepNumber": 5, "description": "Simplify the division.", "workingLatex": "\\dfrac{800}{40} = \\dfrac{80}{4}", "explanation": "Cancelling a zero from top and bottom keeps the value the same.", "diagram": null },
        { "stepNumber": 6, "description": "Work out the estimate.", "workingLatex": "\\dfrac{80}{4} = 20", "explanation": "Eighty divided by four is twenty.", "diagram": null },
        { "stepNumber": 7, "description": "State the answer.", "workingLatex": "812 \\div 38 \\approx 20", "explanation": "So the quotient is roughly twenty.", "diagram": null }
      ],
      "finalAnswer": "$\\approx 20$"
    }
  },
  {
    "id": "gcse.number.estimation.q007",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Estimation and checking",
    "subtopicId": "gcse.number.estimation",
    "difficulty": "Easy",
    "marks": 1,
    "answerType": "value",
    "tags": ["estimation", "1 significant figure", "addition"],
    "questionText": "Estimate the value of $58 + 31$ by rounding each number to $1$ significant figure.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall what estimating means.", "workingLatex": "\\text{round each number to } 1\\text{ s.f.}", "explanation": "We round each number to one significant figure.", "diagram": null },
        { "stepNumber": 2, "description": "Round the first number.", "workingLatex": "58 \\approx 60", "explanation": "The digit after the first significant figure is $8$, so we round up to $60$.", "diagram": null },
        { "stepNumber": 3, "description": "Round the second number.", "workingLatex": "31 \\approx 30", "explanation": "The digit after the first significant figure is $1$, so we round down to $30$.", "diagram": null },
        { "stepNumber": 4, "description": "Rewrite the calculation.", "workingLatex": "60 + 30", "explanation": "We add the two rounded numbers.", "diagram": null },
        { "stepNumber": 5, "description": "Work out the estimate.", "workingLatex": "60 + 30 = 90", "explanation": "Sixty plus thirty is ninety.", "diagram": null },
        { "stepNumber": 6, "description": "State the answer.", "workingLatex": "58 + 31 \\approx 90", "explanation": "So the sum is roughly ninety.", "diagram": null }
      ],
      "finalAnswer": "$\\approx 90$"
    }
  },
  {
    "id": "gcse.number.estimation.q008",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Estimation and checking",
    "subtopicId": "gcse.number.estimation",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "value",
    "tags": ["estimation", "1 significant figure", "multiplication", "decimals"],
    "questionText": "Estimate the value of $9.8 \\times 5.2$ by rounding each number to $1$ significant figure.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall what estimating means.", "workingLatex": "\\text{round each number to } 1\\text{ s.f.}", "explanation": "We round each number to one significant figure.", "diagram": null },
        { "stepNumber": 2, "description": "Round the first number.", "workingLatex": "9.8 \\approx 10", "explanation": "The digit after the first significant figure is $8$, so we round up to $10$.", "diagram": null },
        { "stepNumber": 3, "description": "Round the second number.", "workingLatex": "5.2 \\approx 5", "explanation": "The digit after the first significant figure is $2$, so we round down to $5$.", "diagram": null },
        { "stepNumber": 4, "description": "Rewrite the calculation.", "workingLatex": "10 \\times 5", "explanation": "We multiply the two rounded numbers.", "diagram": null },
        { "stepNumber": 5, "description": "Work out the estimate.", "workingLatex": "10 \\times 5 = 50", "explanation": "Ten times five is fifty.", "diagram": null },
        { "stepNumber": 6, "description": "State the answer.", "workingLatex": "9.8 \\times 5.2 \\approx 50", "explanation": "So the product is roughly fifty.", "diagram": null }
      ],
      "finalAnswer": "$\\approx 50$"
    }
  },
  {
    "id": "gcse.number.estimation.q009",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Estimation and checking",
    "subtopicId": "gcse.number.estimation",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "value",
    "tags": ["estimation", "1 significant figure", "subtraction"],
    "questionText": "Estimate the value of $78 - 29$ by rounding each number to $1$ significant figure.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall what estimating means.", "workingLatex": "\\text{round each number to } 1\\text{ s.f.}", "explanation": "We round each number to one significant figure.", "diagram": null },
        { "stepNumber": 2, "description": "Round the first number.", "workingLatex": "78 \\approx 80", "explanation": "The digit after the first significant figure is $8$, so we round up to $80$.", "diagram": null },
        { "stepNumber": 3, "description": "Round the second number.", "workingLatex": "29 \\approx 30", "explanation": "The digit after the first significant figure is $9$, so we round up to $30$.", "diagram": null },
        { "stepNumber": 4, "description": "Rewrite the calculation.", "workingLatex": "80 - 30", "explanation": "We subtract the two rounded numbers.", "diagram": null },
        { "stepNumber": 5, "description": "Work out the estimate.", "workingLatex": "80 - 30 = 50", "explanation": "Eighty take away thirty is fifty.", "diagram": null },
        { "stepNumber": 6, "description": "State the answer.", "workingLatex": "78 - 29 \\approx 50", "explanation": "So the difference is roughly fifty.", "diagram": null }
      ],
      "finalAnswer": "$\\approx 50$"
    }
  },
  {
    "id": "gcse.number.estimation.q010",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Estimation and checking",
    "subtopicId": "gcse.number.estimation",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "value",
    "tags": ["estimation", "1 significant figure", "squares"],
    "questionText": "Estimate the value of $7.9^2$ by rounding to $1$ significant figure.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall what estimating means.", "workingLatex": "\\text{round the number to } 1\\text{ s.f.}", "explanation": "We round the base to one significant figure before squaring.", "diagram": null },
        { "stepNumber": 2, "description": "Round the number.", "workingLatex": "7.9 \\approx 8", "explanation": "The digit after the first significant figure is $9$, so we round up to $8$.", "diagram": null },
        { "stepNumber": 3, "description": "Rewrite the calculation.", "workingLatex": "8^2", "explanation": "We square the rounded number.", "diagram": null },
        { "stepNumber": 4, "description": "Recall what squaring means.", "workingLatex": "8^2 = 8 \\times 8", "explanation": "Squaring a number means multiplying it by itself.", "diagram": null },
        { "stepNumber": 5, "description": "Work out the estimate.", "workingLatex": "8 \\times 8 = 64", "explanation": "Eight times eight is sixty-four.", "diagram": null },
        { "stepNumber": 6, "description": "State the answer.", "workingLatex": "7.9^2 \\approx 64", "explanation": "So the square is roughly sixty-four.", "diagram": null }
      ],
      "finalAnswer": "$\\approx 64$"
    }
  },
  {
    "id": "gcse.number.estimation.q011",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Estimation and checking",
    "subtopicId": "gcse.number.estimation",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "value",
    "tags": ["estimation", "square roots", "bracketing"],
    "questionText": "Estimate the value of $\\sqrt{26}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Think about nearby square numbers.", "workingLatex": "25 \\text{ and } 36", "explanation": "The square root is easiest to estimate using the perfect squares either side of $26$.", "diagram": null },
        { "stepNumber": 2, "description": "Identify the closer square.", "workingLatex": "26 \\text{ is very close to } 25", "explanation": "Twenty-six is only one more than the perfect square $25$.", "diagram": null },
        { "stepNumber": 3, "description": "Take the square root of that square.", "workingLatex": "\\sqrt{25} = 5", "explanation": "The square root of $25$ is exactly $5$.", "diagram": null },
        { "stepNumber": 4, "description": "Decide the size of the answer.", "workingLatex": "\\sqrt{26} \\text{ just above } 5", "explanation": "Since $26$ is just above $25$, the root is just above $5$.", "diagram": null },
        { "stepNumber": 5, "description": "Give the estimate.", "workingLatex": "\\sqrt{26} \\approx 5", "explanation": "To one significant figure the square root is about $5$.", "diagram": null },
        { "stepNumber": 6, "description": "State the answer.", "workingLatex": "\\sqrt{26} \\approx 5", "explanation": "So the square root of $26$ is roughly $5$.", "diagram": null }
      ],
      "finalAnswer": "$\\approx 5$"
    }
  },
  {
    "id": "gcse.number.estimation.q012",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Estimation and checking",
    "subtopicId": "gcse.number.estimation",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "value",
    "tags": ["estimation", "1 significant figure", "division"],
    "questionText": "Estimate the value of $592 \\div 29$ by rounding each number to $1$ significant figure.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall what estimating means.", "workingLatex": "\\text{round each number to } 1\\text{ s.f.}", "explanation": "We round each number to one significant figure.", "diagram": null },
        { "stepNumber": 2, "description": "Round the first number.", "workingLatex": "592 \\approx 600", "explanation": "The first significant figure is the hundreds; the next digit $9$ rounds it up to $600$.", "diagram": null },
        { "stepNumber": 3, "description": "Round the second number.", "workingLatex": "29 \\approx 30", "explanation": "The digit after the first significant figure is $9$, so we round up to $30$.", "diagram": null },
        { "stepNumber": 4, "description": "Rewrite the calculation.", "workingLatex": "600 \\div 30", "explanation": "We divide the two rounded numbers.", "diagram": null },
        { "stepNumber": 5, "description": "Simplify the division.", "workingLatex": "\\dfrac{600}{30} = \\dfrac{60}{3}", "explanation": "Cancelling a zero keeps the value the same.", "diagram": null },
        { "stepNumber": 6, "description": "Work out the estimate.", "workingLatex": "\\dfrac{60}{3} = 20", "explanation": "Sixty divided by three is twenty.", "diagram": null },
        { "stepNumber": 7, "description": "State the answer.", "workingLatex": "592 \\div 29 \\approx 20", "explanation": "So the quotient is roughly twenty.", "diagram": null }
      ],
      "finalAnswer": "$\\approx 20$"
    }
  },
  {
    "id": "gcse.number.estimation.q013",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Estimation and checking",
    "subtopicId": "gcse.number.estimation",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "value",
    "tags": ["estimation", "1 significant figure", "multiplication"],
    "questionText": "Estimate the value of $4.2 \\times 19$ by rounding each number to $1$ significant figure.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall what estimating means.", "workingLatex": "\\text{round each number to } 1\\text{ s.f.}", "explanation": "We round each number to one significant figure.", "diagram": null },
        { "stepNumber": 2, "description": "Round the first number.", "workingLatex": "4.2 \\approx 4", "explanation": "The digit after the first significant figure is $2$, so we round down to $4$.", "diagram": null },
        { "stepNumber": 3, "description": "Round the second number.", "workingLatex": "19 \\approx 20", "explanation": "The digit after the first significant figure is $9$, so we round up to $20$.", "diagram": null },
        { "stepNumber": 4, "description": "Rewrite the calculation.", "workingLatex": "4 \\times 20", "explanation": "We multiply the two rounded numbers.", "diagram": null },
        { "stepNumber": 5, "description": "Work out the estimate.", "workingLatex": "4 \\times 20 = 80", "explanation": "Four times twenty is eighty.", "diagram": null },
        { "stepNumber": 6, "description": "State the answer.", "workingLatex": "4.2 \\times 19 \\approx 80", "explanation": "So the product is roughly eighty.", "diagram": null }
      ],
      "finalAnswer": "$\\approx 80$"
    }
  },
  {
    "id": "gcse.number.estimation.q014",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Estimation and checking",
    "subtopicId": "gcse.number.estimation",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "value",
    "tags": ["estimation", "1 significant figure", "multiplication"],
    "questionText": "Estimate the value of $31 \\times 32$ by rounding each number to $1$ significant figure.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall what estimating means.", "workingLatex": "\\text{round each number to } 1\\text{ s.f.}", "explanation": "We round each number to one significant figure.", "diagram": null },
        { "stepNumber": 2, "description": "Round the first number.", "workingLatex": "31 \\approx 30", "explanation": "The digit after the first significant figure is $1$, so we round down to $30$.", "diagram": null },
        { "stepNumber": 3, "description": "Round the second number.", "workingLatex": "32 \\approx 30", "explanation": "The digit after the first significant figure is $2$, so we round down to $30$.", "diagram": null },
        { "stepNumber": 4, "description": "Rewrite the calculation.", "workingLatex": "30 \\times 30", "explanation": "We multiply the two rounded numbers.", "diagram": null },
        { "stepNumber": 5, "description": "Work out the estimate.", "workingLatex": "30 \\times 30 = 900", "explanation": "Thirty times thirty is nine hundred.", "diagram": null },
        { "stepNumber": 6, "description": "State the answer.", "workingLatex": "31 \\times 32 \\approx 900", "explanation": "So the product is roughly nine hundred.", "diagram": null },
        { "stepNumber": 7, "description": "Compare with the exact value.", "workingLatex": "31 \\times 32 = 992", "explanation": "The exact answer $992$ is close, showing the estimate is reasonable.", "diagram": null }
      ],
      "finalAnswer": "$\\approx 900$"
    }
  },
  {
    "id": "gcse.number.estimation.q015",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Estimation and checking",
    "subtopicId": "gcse.number.estimation",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "value",
    "tags": ["estimation", "1 significant figure", "addition"],
    "questionText": "Estimate the value of $118 + 293$ by rounding each number to $1$ significant figure.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall what estimating means.", "workingLatex": "\\text{round each number to } 1\\text{ s.f.}", "explanation": "We round each number to one significant figure.", "diagram": null },
        { "stepNumber": 2, "description": "Round the first number.", "workingLatex": "118 \\approx 100", "explanation": "The first significant figure is the hundreds; the next digit $1$ rounds it down to $100$.", "diagram": null },
        { "stepNumber": 3, "description": "Round the second number.", "workingLatex": "293 \\approx 300", "explanation": "The first significant figure is the hundreds; the next digit $9$ rounds it up to $300$.", "diagram": null },
        { "stepNumber": 4, "description": "Rewrite the calculation.", "workingLatex": "100 + 300", "explanation": "We add the two rounded numbers.", "diagram": null },
        { "stepNumber": 5, "description": "Work out the estimate.", "workingLatex": "100 + 300 = 400", "explanation": "One hundred plus three hundred is four hundred.", "diagram": null },
        { "stepNumber": 6, "description": "State the answer.", "workingLatex": "118 + 293 \\approx 400", "explanation": "So the sum is roughly four hundred.", "diagram": null }
      ],
      "finalAnswer": "$\\approx 400$"
    }
  },
  {
    "id": "gcse.number.estimation.q016",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Estimation and checking",
    "subtopicId": "gcse.number.estimation",
    "difficulty": "Easy",
    "marks": 1,
    "answerType": "value",
    "tags": ["estimation", "1 significant figure", "addition", "decimals"],
    "questionText": "Estimate the value of $6.8 + 2.1$ by rounding each number to $1$ significant figure.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall what estimating means.", "workingLatex": "\\text{round each number to } 1\\text{ s.f.}", "explanation": "We round each number to one significant figure.", "diagram": null },
        { "stepNumber": 2, "description": "Round the first number.", "workingLatex": "6.8 \\approx 7", "explanation": "The digit after the first significant figure is $8$, so we round up to $7$.", "diagram": null },
        { "stepNumber": 3, "description": "Round the second number.", "workingLatex": "2.1 \\approx 2", "explanation": "The digit after the first significant figure is $1$, so we round down to $2$.", "diagram": null },
        { "stepNumber": 4, "description": "Rewrite the calculation.", "workingLatex": "7 + 2", "explanation": "We add the two rounded numbers.", "diagram": null },
        { "stepNumber": 5, "description": "Work out the estimate.", "workingLatex": "7 + 2 = 9", "explanation": "Seven plus two is nine.", "diagram": null },
        { "stepNumber": 6, "description": "State the answer.", "workingLatex": "6.8 + 2.1 \\approx 9", "explanation": "So the sum is roughly nine.", "diagram": null }
      ],
      "finalAnswer": "$\\approx 9$"
    }
  },
  {
    "id": "gcse.number.estimation.q017",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Estimation and checking",
    "subtopicId": "gcse.number.estimation",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "value",
    "tags": ["estimation", "1 significant figure", "multiplication"],
    "questionText": "Estimate the value of $42 \\times 6.1$ by rounding each number to $1$ significant figure.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall what estimating means.", "workingLatex": "\\text{round each number to } 1\\text{ s.f.}", "explanation": "We round each number to one significant figure.", "diagram": null },
        { "stepNumber": 2, "description": "Round the first number.", "workingLatex": "42 \\approx 40", "explanation": "The digit after the first significant figure is $2$, so we round down to $40$.", "diagram": null },
        { "stepNumber": 3, "description": "Round the second number.", "workingLatex": "6.1 \\approx 6", "explanation": "The digit after the first significant figure is $1$, so we round down to $6$.", "diagram": null },
        { "stepNumber": 4, "description": "Rewrite the calculation.", "workingLatex": "40 \\times 6", "explanation": "We multiply the two rounded numbers.", "diagram": null },
        { "stepNumber": 5, "description": "Work out the estimate.", "workingLatex": "40 \\times 6 = 240", "explanation": "Forty times six is two hundred and forty.", "diagram": null },
        { "stepNumber": 6, "description": "State the answer.", "workingLatex": "42 \\times 6.1 \\approx 240", "explanation": "So the product is roughly two hundred and forty.", "diagram": null }
      ],
      "finalAnswer": "$\\approx 240$"
    }
  },
  {
    "id": "gcse.number.estimation.q018",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Estimation and checking",
    "subtopicId": "gcse.number.estimation",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "value",
    "tags": ["estimation", "1 significant figure", "division"],
    "questionText": "Estimate the value of $891 \\div 31$ by rounding each number to $1$ significant figure.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall what estimating means.", "workingLatex": "\\text{round each number to } 1\\text{ s.f.}", "explanation": "We round each number to one significant figure.", "diagram": null },
        { "stepNumber": 2, "description": "Round the first number.", "workingLatex": "891 \\approx 900", "explanation": "The first significant figure is the hundreds; the next digit $9$ rounds it up to $900$.", "diagram": null },
        { "stepNumber": 3, "description": "Round the second number.", "workingLatex": "31 \\approx 30", "explanation": "The digit after the first significant figure is $1$, so we round down to $30$.", "diagram": null },
        { "stepNumber": 4, "description": "Rewrite the calculation.", "workingLatex": "900 \\div 30", "explanation": "We divide the two rounded numbers.", "diagram": null },
        { "stepNumber": 5, "description": "Simplify the division.", "workingLatex": "\\dfrac{900}{30} = \\dfrac{90}{3}", "explanation": "Cancelling a zero keeps the value the same.", "diagram": null },
        { "stepNumber": 6, "description": "Work out the estimate.", "workingLatex": "\\dfrac{90}{3} = 30", "explanation": "Ninety divided by three is thirty.", "diagram": null },
        { "stepNumber": 7, "description": "State the answer.", "workingLatex": "891 \\div 31 \\approx 30", "explanation": "So the quotient is roughly thirty.", "diagram": null }
      ],
      "finalAnswer": "$\\approx 30$"
    }
  },
  {
    "id": "gcse.number.estimation.q019",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Estimation and checking",
    "subtopicId": "gcse.number.estimation",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "value",
    "tags": ["estimation", "1 significant figure", "squares"],
    "questionText": "Estimate the value of $5.1^2$ by rounding to $1$ significant figure.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall what estimating means.", "workingLatex": "\\text{round the number to } 1\\text{ s.f.}", "explanation": "We round the base to one significant figure before squaring.", "diagram": null },
        { "stepNumber": 2, "description": "Round the number.", "workingLatex": "5.1 \\approx 5", "explanation": "The digit after the first significant figure is $1$, so we round down to $5$.", "diagram": null },
        { "stepNumber": 3, "description": "Rewrite the calculation.", "workingLatex": "5^2", "explanation": "We square the rounded number.", "diagram": null },
        { "stepNumber": 4, "description": "Recall what squaring means.", "workingLatex": "5^2 = 5 \\times 5", "explanation": "Squaring means multiplying the number by itself.", "diagram": null },
        { "stepNumber": 5, "description": "Work out the estimate.", "workingLatex": "5 \\times 5 = 25", "explanation": "Five times five is twenty-five.", "diagram": null },
        { "stepNumber": 6, "description": "State the answer.", "workingLatex": "5.1^2 \\approx 25", "explanation": "So the square is roughly twenty-five.", "diagram": null }
      ],
      "finalAnswer": "$\\approx 25$"
    }
  },
  {
    "id": "gcse.number.estimation.q020",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Estimation and checking",
    "subtopicId": "gcse.number.estimation",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "value",
    "tags": ["estimation", "square roots", "bracketing"],
    "questionText": "Estimate the value of $\\sqrt{35}$ to the nearest whole number.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Think about nearby square numbers.", "workingLatex": "25 \\text{ and } 36", "explanation": "We use the perfect squares either side of $35$.", "diagram": null },
        { "stepNumber": 2, "description": "Take their square roots.", "workingLatex": "\\sqrt{25} = 5, \\; \\sqrt{36} = 6", "explanation": "So the root of $35$ lies between $5$ and $6$.", "diagram": null },
        { "stepNumber": 3, "description": "Decide which it is closer to.", "workingLatex": "35 \\text{ is very close to } 36", "explanation": "Thirty-five is only one below the square $36$.", "diagram": null },
        { "stepNumber": 4, "description": "Choose the nearer root.", "workingLatex": "\\sqrt{35} \\text{ just below } 6", "explanation": "Because $35$ is just below $36$, the root is just below $6$.", "diagram": null },
        { "stepNumber": 5, "description": "Round to the nearest whole number.", "workingLatex": "\\sqrt{35} \\approx 6", "explanation": "The nearest whole number is $6$.", "diagram": null },
        { "stepNumber": 6, "description": "State the answer.", "workingLatex": "\\sqrt{35} \\approx 6", "explanation": "So the square root of $35$ is roughly $6$.", "diagram": null }
      ],
      "finalAnswer": "$\\approx 6$"
    }
  },
  {
    "id": "gcse.number.estimation.q021",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Estimation and checking",
    "subtopicId": "gcse.number.estimation",
    "difficulty": "Easy",
    "marks": 1,
    "answerType": "value",
    "tags": ["estimation", "1 significant figure", "subtraction"],
    "questionText": "Estimate the value of $68 - 22$ by rounding each number to $1$ significant figure.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall what estimating means.", "workingLatex": "\\text{round each number to } 1\\text{ s.f.}", "explanation": "We round each number to one significant figure.", "diagram": null },
        { "stepNumber": 2, "description": "Round the first number.", "workingLatex": "68 \\approx 70", "explanation": "The digit after the first significant figure is $8$, so we round up to $70$.", "diagram": null },
        { "stepNumber": 3, "description": "Round the second number.", "workingLatex": "22 \\approx 20", "explanation": "The digit after the first significant figure is $2$, so we round down to $20$.", "diagram": null },
        { "stepNumber": 4, "description": "Rewrite the calculation.", "workingLatex": "70 - 20", "explanation": "We subtract the two rounded numbers.", "diagram": null },
        { "stepNumber": 5, "description": "Work out the estimate.", "workingLatex": "70 - 20 = 50", "explanation": "Seventy take away twenty is fifty.", "diagram": null },
        { "stepNumber": 6, "description": "State the answer.", "workingLatex": "68 - 22 \\approx 50", "explanation": "So the difference is roughly fifty.", "diagram": null }
      ],
      "finalAnswer": "$\\approx 50$"
    }
  },
  {
    "id": "gcse.number.estimation.q022",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Estimation and checking",
    "subtopicId": "gcse.number.estimation",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "value",
    "tags": ["estimation", "1 significant figure", "multiplication", "decimals"],
    "questionText": "Estimate the value of $3.9 \\times 4.1$ by rounding each number to $1$ significant figure.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall what estimating means.", "workingLatex": "\\text{round each number to } 1\\text{ s.f.}", "explanation": "We round each number to one significant figure.", "diagram": null },
        { "stepNumber": 2, "description": "Round the first number.", "workingLatex": "3.9 \\approx 4", "explanation": "The digit after the first significant figure is $9$, so we round up to $4$.", "diagram": null },
        { "stepNumber": 3, "description": "Round the second number.", "workingLatex": "4.1 \\approx 4", "explanation": "The digit after the first significant figure is $1$, so we round down to $4$.", "diagram": null },
        { "stepNumber": 4, "description": "Rewrite the calculation.", "workingLatex": "4 \\times 4", "explanation": "We multiply the two rounded numbers.", "diagram": null },
        { "stepNumber": 5, "description": "Work out the estimate.", "workingLatex": "4 \\times 4 = 16", "explanation": "Four times four is sixteen.", "diagram": null },
        { "stepNumber": 6, "description": "State the answer.", "workingLatex": "3.9 \\times 4.1 \\approx 16", "explanation": "So the product is roughly sixteen.", "diagram": null }
      ],
      "finalAnswer": "$\\approx 16$"
    }
  },
  {
    "id": "gcse.number.estimation.q023",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Estimation and checking",
    "subtopicId": "gcse.number.estimation",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "value",
    "tags": ["estimation", "1 significant figure", "multiplication"],
    "questionText": "Estimate the value of $203 \\times 4.8$ by rounding each number to $1$ significant figure.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall what estimating means.", "workingLatex": "\\text{round each number to } 1\\text{ s.f.}", "explanation": "We round each number to one significant figure.", "diagram": null },
        { "stepNumber": 2, "description": "Round the first number.", "workingLatex": "203 \\approx 200", "explanation": "The first significant figure is the hundreds; the next digit $0$ rounds it down to $200$.", "diagram": null },
        { "stepNumber": 3, "description": "Round the second number.", "workingLatex": "4.8 \\approx 5", "explanation": "The digit after the first significant figure is $8$, so we round up to $5$.", "diagram": null },
        { "stepNumber": 4, "description": "Rewrite the calculation.", "workingLatex": "200 \\times 5", "explanation": "We multiply the two rounded numbers.", "diagram": null },
        { "stepNumber": 5, "description": "Work out the estimate.", "workingLatex": "200 \\times 5 = 1000", "explanation": "Two hundred times five is one thousand.", "diagram": null },
        { "stepNumber": 6, "description": "State the answer.", "workingLatex": "203 \\times 4.8 \\approx 1000", "explanation": "So the product is roughly one thousand.", "diagram": null }
      ],
      "finalAnswer": "$\\approx 1000$"
    }
  },
  {
    "id": "gcse.number.estimation.q024",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Estimation and checking",
    "subtopicId": "gcse.number.estimation",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "value",
    "tags": ["estimation", "1 significant figure", "multiplication"],
    "questionText": "Estimate the value of $7.2 \\times 8.9$ by rounding each number to $1$ significant figure.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall what estimating means.", "workingLatex": "\\text{round each number to } 1\\text{ s.f.}", "explanation": "We round each number to one significant figure.", "diagram": null },
        { "stepNumber": 2, "description": "Round the first number.", "workingLatex": "7.2 \\approx 7", "explanation": "The digit after the first significant figure is $2$, so we round down to $7$.", "diagram": null },
        { "stepNumber": 3, "description": "Round the second number.", "workingLatex": "8.9 \\approx 9", "explanation": "The digit after the first significant figure is $9$, so we round up to $9$.", "diagram": null },
        { "stepNumber": 4, "description": "Rewrite the calculation.", "workingLatex": "7 \\times 9", "explanation": "We multiply the two rounded numbers.", "diagram": null },
        { "stepNumber": 5, "description": "Work out the estimate.", "workingLatex": "7 \\times 9 = 63", "explanation": "Seven times nine is sixty-three.", "diagram": null },
        { "stepNumber": 6, "description": "State the answer.", "workingLatex": "7.2 \\times 8.9 \\approx 63", "explanation": "So the product is roughly sixty-three.", "diagram": null }
      ],
      "finalAnswer": "$\\approx 63$"
    }
  },
  {
    "id": "gcse.number.estimation.q025",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Estimation and checking",
    "subtopicId": "gcse.number.estimation",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "value",
    "tags": ["estimation", "1 significant figure", "compound expression"],
    "questionText": "Estimate the value of $\\dfrac{31.2 \\times 4.8}{6.1}$ by rounding each number to $1$ significant figure.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Plan the estimate.", "workingLatex": "\\text{round every number to } 1\\text{ s.f.}", "explanation": "We round each number in the fraction to one significant figure, then calculate.", "diagram": null },
        { "stepNumber": 2, "description": "Round the first number.", "workingLatex": "31.2 \\approx 30", "explanation": "The digit after the first significant figure is $1$, so we round down to $30$.", "diagram": null },
        { "stepNumber": 3, "description": "Round the second number.", "workingLatex": "4.8 \\approx 5", "explanation": "The digit after the first significant figure is $8$, so we round up to $5$.", "diagram": null },
        { "stepNumber": 4, "description": "Round the denominator.", "workingLatex": "6.1 \\approx 6", "explanation": "The digit after the first significant figure is $1$, so we round down to $6$.", "diagram": null },
        { "stepNumber": 5, "description": "Rewrite the calculation.", "workingLatex": "\\dfrac{30 \\times 5}{6}", "explanation": "We replace each number with its rounded value.", "diagram": null },
        { "stepNumber": 6, "description": "Work out the numerator.", "workingLatex": "30 \\times 5 = 150", "explanation": "The top of the fraction becomes one hundred and fifty.", "diagram": null },
        { "stepNumber": 7, "description": "Divide by the denominator.", "workingLatex": "\\dfrac{150}{6} = 25", "explanation": "One hundred and fifty divided by six is twenty-five.", "diagram": null },
        { "stepNumber": 8, "description": "State the answer.", "workingLatex": "\\dfrac{31.2 \\times 4.8}{6.1} \\approx 25", "explanation": "So the value is roughly twenty-five.", "diagram": null }
      ],
      "finalAnswer": "$\\approx 25$"
    }
  },
  {
    "id": "gcse.number.estimation.q026",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Estimation and checking",
    "subtopicId": "gcse.number.estimation",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "value",
    "tags": ["estimation", "1 significant figure", "compound expression"],
    "questionText": "Estimate the value of $\\dfrac{612 \\times 8.9}{29}$ by rounding each number to $1$ significant figure.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Plan the estimate.", "workingLatex": "\\text{round every number to } 1\\text{ s.f.}", "explanation": "We round each number and then calculate.", "diagram": null },
        { "stepNumber": 2, "description": "Round the first number.", "workingLatex": "612 \\approx 600", "explanation": "The next digit after the hundreds is $1$, so we round down to $600$.", "diagram": null },
        { "stepNumber": 3, "description": "Round the second number.", "workingLatex": "8.9 \\approx 9", "explanation": "The digit after the first significant figure is $9$, so we round up to $9$.", "diagram": null },
        { "stepNumber": 4, "description": "Round the denominator.", "workingLatex": "29 \\approx 30", "explanation": "The digit after the first significant figure is $9$, so we round up to $30$.", "diagram": null },
        { "stepNumber": 5, "description": "Rewrite the calculation.", "workingLatex": "\\dfrac{600 \\times 9}{30}", "explanation": "We replace each number with its rounded value.", "diagram": null },
        { "stepNumber": 6, "description": "Work out the numerator.", "workingLatex": "600 \\times 9 = 5400", "explanation": "The top becomes five thousand four hundred.", "diagram": null },
        { "stepNumber": 7, "description": "Divide by the denominator.", "workingLatex": "\\dfrac{5400}{30} = 180", "explanation": "Five thousand four hundred divided by thirty is one hundred and eighty.", "diagram": null },
        { "stepNumber": 8, "description": "State the answer.", "workingLatex": "\\dfrac{612 \\times 8.9}{29} \\approx 180", "explanation": "So the value is roughly one hundred and eighty.", "diagram": null }
      ],
      "finalAnswer": "$\\approx 180$"
    }
  },
  {
    "id": "gcse.number.estimation.q027",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Estimation and checking",
    "subtopicId": "gcse.number.estimation",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "value",
    "tags": ["estimation", "1 significant figure", "compound expression"],
    "questionText": "Estimate the value of $\\dfrac{39 + 62}{4.9}$ by rounding each number to $1$ significant figure.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Plan the estimate.", "workingLatex": "\\text{round every number to } 1\\text{ s.f.}", "explanation": "We round each number, then calculate the top before dividing.", "diagram": null },
        { "stepNumber": 2, "description": "Round the first number.", "workingLatex": "39 \\approx 40", "explanation": "The digit after the first significant figure is $9$, so we round up to $40$.", "diagram": null },
        { "stepNumber": 3, "description": "Round the second number.", "workingLatex": "62 \\approx 60", "explanation": "The digit after the first significant figure is $2$, so we round down to $60$.", "diagram": null },
        { "stepNumber": 4, "description": "Round the denominator.", "workingLatex": "4.9 \\approx 5", "explanation": "The digit after the first significant figure is $9$, so we round up to $5$.", "diagram": null },
        { "stepNumber": 5, "description": "Rewrite the calculation.", "workingLatex": "\\dfrac{40 + 60}{5}", "explanation": "We replace each number with its rounded value.", "diagram": null },
        { "stepNumber": 6, "description": "Work out the numerator.", "workingLatex": "40 + 60 = 100", "explanation": "The top of the fraction becomes one hundred.", "diagram": null },
        { "stepNumber": 7, "description": "Divide by the denominator.", "workingLatex": "\\dfrac{100}{5} = 20", "explanation": "One hundred divided by five is twenty.", "diagram": null },
        { "stepNumber": 8, "description": "State the answer.", "workingLatex": "\\dfrac{39 + 62}{4.9} \\approx 20", "explanation": "So the value is roughly twenty.", "diagram": null }
      ],
      "finalAnswer": "$\\approx 20$"
    }
  },
  {
    "id": "gcse.number.estimation.q028",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Estimation and checking",
    "subtopicId": "gcse.number.estimation",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "value",
    "tags": ["estimation", "1 significant figure", "decimals less than 1"],
    "questionText": "Estimate the value of $0.48 \\times 21$ by rounding each number to $1$ significant figure.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Plan the estimate.", "workingLatex": "\\text{round each number to } 1\\text{ s.f.}", "explanation": "We round each number to one significant figure.", "diagram": null },
        { "stepNumber": 2, "description": "Find the first significant figure of the decimal.", "workingLatex": "0.48 \\to \\text{first s.f. is the } 4", "explanation": "For a number less than one, the first significant figure is the first non-zero digit.", "diagram": null },
        { "stepNumber": 3, "description": "Round the decimal.", "workingLatex": "0.48 \\approx 0.5", "explanation": "The digit after the $4$ is $8$, so we round up to $0.5$.", "diagram": null },
        { "stepNumber": 4, "description": "Round the whole number.", "workingLatex": "21 \\approx 20", "explanation": "The digit after the first significant figure is $1$, so we round down to $20$.", "diagram": null },
        { "stepNumber": 5, "description": "Rewrite the calculation.", "workingLatex": "0.5 \\times 20", "explanation": "We multiply the rounded numbers.", "diagram": null },
        { "stepNumber": 6, "description": "Use the meaning of 0.5.", "workingLatex": "0.5 \\times 20 = \\tfrac{1}{2} \\times 20", "explanation": "Multiplying by $0.5$ is the same as halving.", "diagram": null },
        { "stepNumber": 7, "description": "Work out the estimate.", "workingLatex": "\\tfrac{1}{2} \\times 20 = 10", "explanation": "Half of twenty is ten.", "diagram": null },
        { "stepNumber": 8, "description": "State the answer.", "workingLatex": "0.48 \\times 21 \\approx 10", "explanation": "So the value is roughly ten.", "diagram": null }
      ],
      "finalAnswer": "$\\approx 10$"
    }
  },
  {
    "id": "gcse.number.estimation.q029",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Estimation and checking",
    "subtopicId": "gcse.number.estimation",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "value",
    "tags": ["estimation", "1 significant figure", "decimals less than 1"],
    "questionText": "Estimate the value of $0.62 \\times 88$ by rounding each number to $1$ significant figure.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Plan the estimate.", "workingLatex": "\\text{round each number to } 1\\text{ s.f.}", "explanation": "We round each number to one significant figure.", "diagram": null },
        { "stepNumber": 2, "description": "Round the decimal.", "workingLatex": "0.62 \\approx 0.6", "explanation": "The first significant figure is $6$; the next digit $2$ rounds it down to $0.6$.", "diagram": null },
        { "stepNumber": 3, "description": "Round the whole number.", "workingLatex": "88 \\approx 90", "explanation": "The digit after the first significant figure is $8$, so we round up to $90$.", "diagram": null },
        { "stepNumber": 4, "description": "Rewrite the calculation.", "workingLatex": "0.6 \\times 90", "explanation": "We multiply the rounded numbers.", "diagram": null },
        { "stepNumber": 5, "description": "Split off the decimal.", "workingLatex": "0.6 \\times 90 = 6 \\times 9", "explanation": "Since $0.6 \\times 90 = 6 \\times 9$, we can use a simpler product.", "diagram": null },
        { "stepNumber": 6, "description": "Work out the estimate.", "workingLatex": "6 \\times 9 = 54", "explanation": "Six times nine is fifty-four.", "diagram": null },
        { "stepNumber": 7, "description": "State the answer.", "workingLatex": "0.62 \\times 88 \\approx 54", "explanation": "So the value is roughly fifty-four.", "diagram": null }
      ],
      "finalAnswer": "$\\approx 54$"
    }
  },
  {
    "id": "gcse.number.estimation.q030",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Estimation and checking",
    "subtopicId": "gcse.number.estimation",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "value",
    "tags": ["estimation", "1 significant figure", "division", "dividing by decimal"],
    "questionText": "Estimate the value of $396 \\div 0.48$ by rounding each number to $1$ significant figure.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Plan the estimate.", "workingLatex": "\\text{round each number to } 1\\text{ s.f.}", "explanation": "We round each number to one significant figure.", "diagram": null },
        { "stepNumber": 2, "description": "Round the first number.", "workingLatex": "396 \\approx 400", "explanation": "The next digit after the hundreds is $9$, so we round up to $400$.", "diagram": null },
        { "stepNumber": 3, "description": "Round the divisor.", "workingLatex": "0.48 \\approx 0.5", "explanation": "The digit after the first significant figure is $8$, so we round up to $0.5$.", "diagram": null },
        { "stepNumber": 4, "description": "Rewrite the calculation.", "workingLatex": "400 \\div 0.5", "explanation": "We divide the rounded numbers.", "diagram": null },
        { "stepNumber": 5, "description": "Interpret dividing by 0.5.", "workingLatex": "\\div 0.5 = \\times 2", "explanation": "Dividing by a half is the same as multiplying by two, because there are two halves in every whole.", "diagram": null },
        { "stepNumber": 6, "description": "Work out the estimate.", "workingLatex": "400 \\times 2 = 800", "explanation": "So the estimate is eight hundred.", "diagram": null },
        { "stepNumber": 7, "description": "Note why the answer grows.", "workingLatex": "\\text{dividing by} <1 \\Rightarrow \\text{bigger}", "explanation": "Dividing by a number smaller than one makes the answer larger, which is worth remembering.", "diagram": null },
        { "stepNumber": 8, "description": "State the answer.", "workingLatex": "396 \\div 0.48 \\approx 800", "explanation": "So the value is roughly eight hundred.", "diagram": null }
      ],
      "finalAnswer": "$\\approx 800$"
    }
  },
  {
    "id": "gcse.number.estimation.q031",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Estimation and checking",
    "subtopicId": "gcse.number.estimation",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "value",
    "tags": ["estimation", "1 significant figure", "square roots"],
    "questionText": "Estimate the value of $\\sqrt{48 \\times 2.1}$ by rounding each number to $1$ significant figure.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Plan the estimate.", "workingLatex": "\\text{round, multiply, then root}", "explanation": "We round the numbers, work out what is inside the root, then take the square root.", "diagram": null },
        { "stepNumber": 2, "description": "Round the first number.", "workingLatex": "48 \\approx 50", "explanation": "The digit after the first significant figure is $8$, so we round up to $50$.", "diagram": null },
        { "stepNumber": 3, "description": "Round the second number.", "workingLatex": "2.1 \\approx 2", "explanation": "The digit after the first significant figure is $1$, so we round down to $2$.", "diagram": null },
        { "stepNumber": 4, "description": "Multiply inside the root.", "workingLatex": "50 \\times 2 = 100", "explanation": "The number under the root becomes one hundred.", "diagram": null },
        { "stepNumber": 5, "description": "Rewrite the root.", "workingLatex": "\\sqrt{100}", "explanation": "We now take the square root of the rounded product.", "diagram": null },
        { "stepNumber": 6, "description": "Work out the root.", "workingLatex": "\\sqrt{100} = 10", "explanation": "The square root of one hundred is ten.", "diagram": null },
        { "stepNumber": 7, "description": "State the answer.", "workingLatex": "\\sqrt{48 \\times 2.1} \\approx 10", "explanation": "So the value is roughly ten.", "diagram": null }
      ],
      "finalAnswer": "$\\approx 10$"
    }
  },
  {
    "id": "gcse.number.estimation.q032",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Estimation and checking",
    "subtopicId": "gcse.number.estimation",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "value",
    "tags": ["estimation", "1 significant figure", "squares", "compound expression"],
    "questionText": "Estimate the value of $\\dfrac{7.8^2}{3.9}$ by rounding each number to $1$ significant figure.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Plan the estimate.", "workingLatex": "\\text{round, square, then divide}", "explanation": "We round the numbers, square the top, then divide.", "diagram": null },
        { "stepNumber": 2, "description": "Round the base.", "workingLatex": "7.8 \\approx 8", "explanation": "The digit after the first significant figure is $8$, so we round up to $8$.", "diagram": null },
        { "stepNumber": 3, "description": "Round the denominator.", "workingLatex": "3.9 \\approx 4", "explanation": "The digit after the first significant figure is $9$, so we round up to $4$.", "diagram": null },
        { "stepNumber": 4, "description": "Square the top.", "workingLatex": "8^2 = 64", "explanation": "Eight squared is sixty-four.", "diagram": null },
        { "stepNumber": 5, "description": "Rewrite the calculation.", "workingLatex": "\\dfrac{64}{4}", "explanation": "We divide the squared value by the rounded denominator.", "diagram": null },
        { "stepNumber": 6, "description": "Work out the estimate.", "workingLatex": "\\dfrac{64}{4} = 16", "explanation": "Sixty-four divided by four is sixteen.", "diagram": null },
        { "stepNumber": 7, "description": "State the answer.", "workingLatex": "\\dfrac{7.8^2}{3.9} \\approx 16", "explanation": "So the value is roughly sixteen.", "diagram": null }
      ],
      "finalAnswer": "$\\approx 16$"
    }
  },
  {
    "id": "gcse.number.estimation.q033",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Estimation and checking",
    "subtopicId": "gcse.number.estimation",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "value",
    "tags": ["estimation", "1 significant figure", "division", "dividing by decimal"],
    "questionText": "Estimate the value of $296 \\div 0.51$ by rounding each number to $1$ significant figure.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Plan the estimate.", "workingLatex": "\\text{round each number to } 1\\text{ s.f.}", "explanation": "We round each number to one significant figure.", "diagram": null },
        { "stepNumber": 2, "description": "Round the first number.", "workingLatex": "296 \\approx 300", "explanation": "The next digit after the hundreds is $9$, so we round up to $300$.", "diagram": null },
        { "stepNumber": 3, "description": "Round the divisor.", "workingLatex": "0.51 \\approx 0.5", "explanation": "The digit after the first significant figure is $1$, so we round down to $0.5$.", "diagram": null },
        { "stepNumber": 4, "description": "Rewrite the calculation.", "workingLatex": "300 \\div 0.5", "explanation": "We divide the rounded numbers.", "diagram": null },
        { "stepNumber": 5, "description": "Interpret dividing by 0.5.", "workingLatex": "\\div 0.5 = \\times 2", "explanation": "Dividing by a half doubles the number.", "diagram": null },
        { "stepNumber": 6, "description": "Work out the estimate.", "workingLatex": "300 \\times 2 = 600", "explanation": "So the estimate is six hundred.", "diagram": null },
        { "stepNumber": 7, "description": "State the answer.", "workingLatex": "296 \\div 0.51 \\approx 600", "explanation": "So the value is roughly six hundred.", "diagram": null }
      ],
      "finalAnswer": "$\\approx 600$"
    }
  },
  {
    "id": "gcse.number.estimation.q034",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Estimation and checking",
    "subtopicId": "gcse.number.estimation",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "value",
    "tags": ["estimation", "1 significant figure", "compound expression"],
    "questionText": "Estimate the value of $\\dfrac{39.2 \\times 5.1}{2.1}$ by rounding each number to $1$ significant figure.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Plan the estimate.", "workingLatex": "\\text{round every number to } 1\\text{ s.f.}", "explanation": "We round each number, then calculate.", "diagram": null },
        { "stepNumber": 2, "description": "Round the first number.", "workingLatex": "39.2 \\approx 40", "explanation": "The digit after the first significant figure is $9$, so we round up to $40$.", "diagram": null },
        { "stepNumber": 3, "description": "Round the second number.", "workingLatex": "5.1 \\approx 5", "explanation": "The digit after the first significant figure is $1$, so we round down to $5$.", "diagram": null },
        { "stepNumber": 4, "description": "Round the denominator.", "workingLatex": "2.1 \\approx 2", "explanation": "The digit after the first significant figure is $1$, so we round down to $2$.", "diagram": null },
        { "stepNumber": 5, "description": "Rewrite the calculation.", "workingLatex": "\\dfrac{40 \\times 5}{2}", "explanation": "We replace each number with its rounded value.", "diagram": null },
        { "stepNumber": 6, "description": "Work out the numerator.", "workingLatex": "40 \\times 5 = 200", "explanation": "The top becomes two hundred.", "diagram": null },
        { "stepNumber": 7, "description": "Divide by the denominator.", "workingLatex": "\\dfrac{200}{2} = 100", "explanation": "Two hundred divided by two is one hundred.", "diagram": null },
        { "stepNumber": 8, "description": "State the answer.", "workingLatex": "\\dfrac{39.2 \\times 5.1}{2.1} \\approx 100", "explanation": "So the value is roughly one hundred.", "diagram": null }
      ],
      "finalAnswer": "$\\approx 100$"
    }
  },
  {
    "id": "gcse.number.estimation.q035",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Estimation and checking",
    "subtopicId": "gcse.number.estimation",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "money",
    "tags": ["estimation", "1 significant figure", "money", "context"],
    "questionText": "A shop sells $29$ notebooks at $\\pounds 4.85$ each. Estimate the total cost by rounding each number to $1$ significant figure.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Set up the calculation.", "workingLatex": "\\text{total} = 29 \\times 4.85", "explanation": "The total cost is the number of notebooks times the price of each.", "diagram": null },
        { "stepNumber": 2, "description": "Round the number of notebooks.", "workingLatex": "29 \\approx 30", "explanation": "The digit after the first significant figure is $9$, so we round up to $30$.", "diagram": null },
        { "stepNumber": 3, "description": "Round the price.", "workingLatex": "4.85 \\approx 5", "explanation": "The digit after the first significant figure is $8$, so we round up to $5$.", "diagram": null },
        { "stepNumber": 4, "description": "Rewrite the calculation.", "workingLatex": "30 \\times 5", "explanation": "We multiply the rounded numbers.", "diagram": null },
        { "stepNumber": 5, "description": "Work out the estimate.", "workingLatex": "30 \\times 5 = 150", "explanation": "Thirty times five is one hundred and fifty.", "diagram": null },
        { "stepNumber": 6, "description": "Attach the units.", "workingLatex": "\\pounds 150", "explanation": "The answer is an amount of money.", "diagram": null },
        { "stepNumber": 7, "description": "Comment on the estimate.", "workingLatex": "\\text{both rounded up} \\Rightarrow \\text{overestimate}", "explanation": "Because both numbers were rounded up, the true cost is a little less than $\\pounds 150$.", "diagram": null },
        { "stepNumber": 8, "description": "State the answer.", "workingLatex": "\\text{total} \\approx \\pounds 150", "explanation": "So the total cost is roughly $\\pounds 150$.", "diagram": null }
      ],
      "finalAnswer": "$\\approx \\pounds 150$"
    }
  },
  {
    "id": "gcse.number.estimation.q036",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Estimation and checking",
    "subtopicId": "gcse.number.estimation",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "value",
    "tags": ["estimation", "1 significant figure", "division", "context"],
    "questionText": "$512$ people are to travel by coaches that each hold $48$ people. Estimate the number of coaches needed by rounding to $1$ significant figure.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Set up the calculation.", "workingLatex": "\\text{coaches} = 512 \\div 48", "explanation": "The number of coaches is the number of people divided by the seats per coach.", "diagram": null },
        { "stepNumber": 2, "description": "Round the number of people.", "workingLatex": "512 \\approx 500", "explanation": "The next digit after the hundreds is $1$, so we round down to $500$.", "diagram": null },
        { "stepNumber": 3, "description": "Round the seats per coach.", "workingLatex": "48 \\approx 50", "explanation": "The digit after the first significant figure is $8$, so we round up to $50$.", "diagram": null },
        { "stepNumber": 4, "description": "Rewrite the calculation.", "workingLatex": "500 \\div 50", "explanation": "We divide the rounded numbers.", "diagram": null },
        { "stepNumber": 5, "description": "Work out the estimate.", "workingLatex": "500 \\div 50 = 10", "explanation": "Five hundred divided by fifty is ten.", "diagram": null },
        { "stepNumber": 6, "description": "Interpret in context.", "workingLatex": "\\approx 10 \\text{ coaches}", "explanation": "About ten coaches are needed; the exact figure would be checked before booking.", "diagram": null },
        { "stepNumber": 7, "description": "State the answer.", "workingLatex": "512 \\div 48 \\approx 10", "explanation": "So roughly ten coaches are needed.", "diagram": null }
      ],
      "finalAnswer": "$\\approx 10$ coaches"
    }
  },
  {
    "id": "gcse.number.estimation.q037",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Estimation and checking",
    "subtopicId": "gcse.number.estimation",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "value",
    "tags": ["estimation", "1 significant figure", "decimals less than 1"],
    "questionText": "Estimate the value of $0.79 \\times 0.42$ by rounding each number to $1$ significant figure.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Plan the estimate.", "workingLatex": "\\text{round each number to } 1\\text{ s.f.}", "explanation": "We round each decimal to one significant figure.", "diagram": null },
        { "stepNumber": 2, "description": "Round the first number.", "workingLatex": "0.79 \\approx 0.8", "explanation": "The digit after the first significant figure is $9$, so we round up to $0.8$.", "diagram": null },
        { "stepNumber": 3, "description": "Round the second number.", "workingLatex": "0.42 \\approx 0.4", "explanation": "The digit after the first significant figure is $2$, so we round down to $0.4$.", "diagram": null },
        { "stepNumber": 4, "description": "Rewrite the calculation.", "workingLatex": "0.8 \\times 0.4", "explanation": "We multiply the rounded numbers.", "diagram": null },
        { "stepNumber": 5, "description": "Multiply the non-zero digits.", "workingLatex": "8 \\times 4 = 32", "explanation": "First we multiply as if there were no decimals.", "diagram": null },
        { "stepNumber": 6, "description": "Place the decimal point.", "workingLatex": "0.8 \\times 0.4 = 0.32", "explanation": "There is one decimal place in each factor, so two in the answer.", "diagram": null },
        { "stepNumber": 7, "description": "State the answer.", "workingLatex": "0.79 \\times 0.42 \\approx 0.32", "explanation": "So the value is roughly $0.32$.", "diagram": null }
      ],
      "finalAnswer": "$\\approx 0.32$"
    }
  },
  {
    "id": "gcse.number.estimation.q038",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Estimation and checking",
    "subtopicId": "gcse.number.estimation",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "value",
    "tags": ["estimation", "square roots", "bracketing"],
    "questionText": "Estimate the value of $\\sqrt{410}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Round to 1 significant figure first.", "workingLatex": "410 \\approx 400", "explanation": "Rounding to one significant figure gives a friendly number whose root we know.", "diagram": null },
        { "stepNumber": 2, "description": "Look for a nearby square.", "workingLatex": "20^2 = 400", "explanation": "Four hundred is a perfect square, being twenty squared.", "diagram": null },
        { "stepNumber": 3, "description": "Take the square root.", "workingLatex": "\\sqrt{400} = 20", "explanation": "The square root of four hundred is twenty.", "diagram": null },
        { "stepNumber": 4, "description": "Decide the size of the true root.", "workingLatex": "410 > 400 \\Rightarrow \\sqrt{410} > 20", "explanation": "Since $410$ is a little more than $400$, the root is a little more than $20$.", "diagram": null },
        { "stepNumber": 5, "description": "Give the estimate.", "workingLatex": "\\sqrt{410} \\approx 20", "explanation": "To one significant figure the root is about twenty.", "diagram": null },
        { "stepNumber": 6, "description": "State the answer.", "workingLatex": "\\sqrt{410} \\approx 20", "explanation": "So the square root of $410$ is roughly twenty.", "diagram": null }
      ],
      "finalAnswer": "$\\approx 20$"
    }
  },
  {
    "id": "gcse.number.estimation.q039",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Estimation and checking",
    "subtopicId": "gcse.number.estimation",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "value",
    "tags": ["estimation", "1 significant figure", "compound expression", "dividing by decimal"],
    "questionText": "Estimate the value of $\\dfrac{8.9 \\times 3.2}{0.48}$ by rounding each number to $1$ significant figure.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Plan the estimate.", "workingLatex": "\\text{round every number to } 1\\text{ s.f.}", "explanation": "We round each number, then calculate.", "diagram": null },
        { "stepNumber": 2, "description": "Round the first number.", "workingLatex": "8.9 \\approx 9", "explanation": "The digit after the first significant figure is $9$, so we round up to $9$.", "diagram": null },
        { "stepNumber": 3, "description": "Round the second number.", "workingLatex": "3.2 \\approx 3", "explanation": "The digit after the first significant figure is $2$, so we round down to $3$.", "diagram": null },
        { "stepNumber": 4, "description": "Round the divisor.", "workingLatex": "0.48 \\approx 0.5", "explanation": "The digit after the first significant figure is $8$, so we round up to $0.5$.", "diagram": null },
        { "stepNumber": 5, "description": "Work out the numerator.", "workingLatex": "9 \\times 3 = 27", "explanation": "The top of the fraction becomes twenty-seven.", "diagram": null },
        { "stepNumber": 6, "description": "Rewrite the division.", "workingLatex": "\\dfrac{27}{0.5}", "explanation": "We divide the numerator by the rounded denominator.", "diagram": null },
        { "stepNumber": 7, "description": "Interpret dividing by 0.5.", "workingLatex": "\\div 0.5 = \\times 2", "explanation": "Dividing by a half is the same as doubling.", "diagram": null },
        { "stepNumber": 8, "description": "Work out the estimate.", "workingLatex": "27 \\times 2 = 54", "explanation": "So the estimate is fifty-four.", "diagram": null },
        { "stepNumber": 9, "description": "State the answer.", "workingLatex": "\\dfrac{8.9 \\times 3.2}{0.48} \\approx 54", "explanation": "So the value is roughly fifty-four.", "diagram": null }
      ],
      "finalAnswer": "$\\approx 54$"
    }
  },
  {
    "id": "gcse.number.estimation.q040",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Estimation and checking",
    "subtopicId": "gcse.number.estimation",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "value",
    "tags": ["estimation", "1 significant figure", "division"],
    "questionText": "Estimate the value of $1023 \\div 4.9$ by rounding each number to $1$ significant figure.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Plan the estimate.", "workingLatex": "\\text{round each number to } 1\\text{ s.f.}", "explanation": "We round each number to one significant figure.", "diagram": null },
        { "stepNumber": 2, "description": "Round the first number.", "workingLatex": "1023 \\approx 1000", "explanation": "The first significant figure is the thousands; the next digit $0$ keeps it at $1000$.", "diagram": null },
        { "stepNumber": 3, "description": "Round the divisor.", "workingLatex": "4.9 \\approx 5", "explanation": "The digit after the first significant figure is $9$, so we round up to $5$.", "diagram": null },
        { "stepNumber": 4, "description": "Rewrite the calculation.", "workingLatex": "1000 \\div 5", "explanation": "We divide the rounded numbers.", "diagram": null },
        { "stepNumber": 5, "description": "Work out the estimate.", "workingLatex": "1000 \\div 5 = 200", "explanation": "One thousand divided by five is two hundred.", "diagram": null },
        { "stepNumber": 6, "description": "State the answer.", "workingLatex": "1023 \\div 4.9 \\approx 200", "explanation": "So the value is roughly two hundred.", "diagram": null }
      ],
      "finalAnswer": "$\\approx 200$"
    }
  },
  {
    "id": "gcse.number.estimation.q041",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Estimation and checking",
    "subtopicId": "gcse.number.estimation",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "value",
    "tags": ["estimation", "1 significant figure", "compound expression"],
    "questionText": "Estimate the value of $\\dfrac{612 + 288}{2.9}$ by rounding each number to $1$ significant figure.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Plan the estimate.", "workingLatex": "\\text{round every number to } 1\\text{ s.f.}", "explanation": "We round each number, then work out the top before dividing.", "diagram": null },
        { "stepNumber": 2, "description": "Round the first number.", "workingLatex": "612 \\approx 600", "explanation": "The next digit after the hundreds is $1$, so we round down to $600$.", "diagram": null },
        { "stepNumber": 3, "description": "Round the second number.", "workingLatex": "288 \\approx 300", "explanation": "The next digit after the hundreds is $8$, so we round up to $300$.", "diagram": null },
        { "stepNumber": 4, "description": "Round the denominator.", "workingLatex": "2.9 \\approx 3", "explanation": "The digit after the first significant figure is $9$, so we round up to $3$.", "diagram": null },
        { "stepNumber": 5, "description": "Work out the numerator.", "workingLatex": "600 + 300 = 900", "explanation": "The top of the fraction becomes nine hundred.", "diagram": null },
        { "stepNumber": 6, "description": "Divide by the denominator.", "workingLatex": "\\dfrac{900}{3} = 300", "explanation": "Nine hundred divided by three is three hundred.", "diagram": null },
        { "stepNumber": 7, "description": "State the answer.", "workingLatex": "\\dfrac{612 + 288}{2.9} \\approx 300", "explanation": "So the value is roughly three hundred.", "diagram": null }
      ],
      "finalAnswer": "$\\approx 300$"
    }
  },
  {
    "id": "gcse.number.estimation.q042",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Estimation and checking",
    "subtopicId": "gcse.number.estimation",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "value",
    "tags": ["estimation", "1 significant figure", "cubes"],
    "questionText": "Estimate the value of $3.1^3$ by rounding to $1$ significant figure.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Round the base.", "workingLatex": "3.1 \\approx 3", "explanation": "The digit after the first significant figure is $1$, so we round down to $3$.", "diagram": null },
        { "stepNumber": 2, "description": "Rewrite the calculation.", "workingLatex": "3^3", "explanation": "We cube the rounded number.", "diagram": null },
        { "stepNumber": 3, "description": "Recall what cubing means.", "workingLatex": "3^3 = 3 \\times 3 \\times 3", "explanation": "Cubing means multiplying the number by itself three times.", "diagram": null },
        { "stepNumber": 4, "description": "Work out the first product.", "workingLatex": "3 \\times 3 = 9", "explanation": "Three times three is nine.", "diagram": null },
        { "stepNumber": 5, "description": "Multiply again.", "workingLatex": "9 \\times 3 = 27", "explanation": "Nine times three is twenty-seven.", "diagram": null },
        { "stepNumber": 6, "description": "State the answer.", "workingLatex": "3.1^3 \\approx 27", "explanation": "So the cube is roughly twenty-seven.", "diagram": null }
      ],
      "finalAnswer": "$\\approx 27$"
    }
  },
  {
    "id": "gcse.number.estimation.q043",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Estimation and checking",
    "subtopicId": "gcse.number.estimation",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "value",
    "tags": ["estimation", "checking", "reasonableness"],
    "questionText": "A student works out $42 \\times 58$ and gets $2436$. Use estimation to decide whether this answer is reasonable.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Understand the task.", "workingLatex": "\\text{estimate then compare}", "explanation": "We make a quick estimate and see whether the student's answer is close to it.", "diagram": null },
        { "stepNumber": 2, "description": "Round the first number.", "workingLatex": "42 \\approx 40", "explanation": "The digit after the first significant figure is $2$, so we round down to $40$.", "diagram": null },
        { "stepNumber": 3, "description": "Round the second number.", "workingLatex": "58 \\approx 60", "explanation": "The digit after the first significant figure is $8$, so we round up to $60$.", "diagram": null },
        { "stepNumber": 4, "description": "Work out the estimate.", "workingLatex": "40 \\times 60 = 2400", "explanation": "The rounded product is two thousand four hundred.", "diagram": null },
        { "stepNumber": 5, "description": "Compare with the answer.", "workingLatex": "2436 \\approx 2400", "explanation": "The student's answer is very close to the estimate.", "diagram": null },
        { "stepNumber": 6, "description": "Judge reasonableness.", "workingLatex": "\\text{difference is small}", "explanation": "Because the answer and estimate are close, the answer looks reasonable.", "diagram": null },
        { "stepNumber": 7, "description": "State the conclusion.", "workingLatex": "2436 \\text{ is reasonable}", "explanation": "So the student's answer of $2436$ is reasonable.", "diagram": null }
      ],
      "finalAnswer": "Reasonable (estimate $\\approx 2400$)"
    }
  },
  {
    "id": "gcse.number.estimation.q044",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Estimation and checking",
    "subtopicId": "gcse.number.estimation",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "value",
    "tags": ["estimation", "checking", "spotting errors"],
    "questionText": "A calculator display shows $38 \\times 21 = 79.8$. Use estimation to explain why this must be wrong.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Understand the task.", "workingLatex": "\\text{estimate then compare}", "explanation": "We estimate the true size of the product and compare it with the display.", "diagram": null },
        { "stepNumber": 2, "description": "Round the first number.", "workingLatex": "38 \\approx 40", "explanation": "The digit after the first significant figure is $8$, so we round up to $40$.", "diagram": null },
        { "stepNumber": 3, "description": "Round the second number.", "workingLatex": "21 \\approx 20", "explanation": "The digit after the first significant figure is $1$, so we round down to $20$.", "diagram": null },
        { "stepNumber": 4, "description": "Work out the estimate.", "workingLatex": "40 \\times 20 = 800", "explanation": "The product should be around eight hundred.", "diagram": null },
        { "stepNumber": 5, "description": "Compare with the display.", "workingLatex": "79.8 \\ll 800", "explanation": "The displayed value is about ten times too small.", "diagram": null },
        { "stepNumber": 6, "description": "Identify the likely error.", "workingLatex": "79.8 \\to 798", "explanation": "The digits match $798$, so a decimal point has probably been entered by mistake.", "diagram": null },
        { "stepNumber": 7, "description": "State the conclusion.", "workingLatex": "79.8 \\text{ is wrong}", "explanation": "Since the estimate is about $800$, the display of $79.8$ must be wrong.", "diagram": null }
      ],
      "finalAnswer": "Wrong: estimate is $\\approx 800$, not $79.8$"
    }
  },
  {
    "id": "gcse.number.estimation.q045",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Estimation and checking",
    "subtopicId": "gcse.number.estimation",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "value",
    "tags": ["estimation", "1 significant figure", "squares", "compound expression"],
    "questionText": "Estimate the value of $\\dfrac{19.6^2}{4.1}$ by rounding each number to $1$ significant figure.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Plan the estimate.", "workingLatex": "\\text{round, square, then divide}", "explanation": "We round the numbers, square the top, then divide.", "diagram": null },
        { "stepNumber": 2, "description": "Round the base.", "workingLatex": "19.6 \\approx 20", "explanation": "The digit after the first significant figure is $9$, so we round up to $20$.", "diagram": null },
        { "stepNumber": 3, "description": "Round the denominator.", "workingLatex": "4.1 \\approx 4", "explanation": "The digit after the first significant figure is $1$, so we round down to $4$.", "diagram": null },
        { "stepNumber": 4, "description": "Square the top.", "workingLatex": "20^2 = 400", "explanation": "Twenty squared is four hundred.", "diagram": null },
        { "stepNumber": 5, "description": "Rewrite the calculation.", "workingLatex": "\\dfrac{400}{4}", "explanation": "We divide the squared value by the rounded denominator.", "diagram": null },
        { "stepNumber": 6, "description": "Work out the estimate.", "workingLatex": "\\dfrac{400}{4} = 100", "explanation": "Four hundred divided by four is one hundred.", "diagram": null },
        { "stepNumber": 7, "description": "State the answer.", "workingLatex": "\\dfrac{19.6^2}{4.1} \\approx 100", "explanation": "So the value is roughly one hundred.", "diagram": null }
      ],
      "finalAnswer": "$\\approx 100$"
    }
  },
  {
    "id": "gcse.number.estimation.q046",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Estimation and checking",
    "subtopicId": "gcse.number.estimation",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "value",
    "tags": ["estimation", "1 significant figure", "small decimals"],
    "questionText": "Estimate the value of $0.052 \\times 380$ by rounding each number to $1$ significant figure.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Plan the estimate.", "workingLatex": "\\text{round each number to } 1\\text{ s.f.}", "explanation": "We round each number to one significant figure.", "diagram": null },
        { "stepNumber": 2, "description": "Find the first significant figure of the small decimal.", "workingLatex": "0.052 \\to \\text{first s.f. is the } 5", "explanation": "Leading zeros are not significant, so the first significant figure is the $5$.", "diagram": null },
        { "stepNumber": 3, "description": "Round the small decimal.", "workingLatex": "0.052 \\approx 0.05", "explanation": "The digit after the $5$ is $2$, so we round down to $0.05$.", "diagram": null },
        { "stepNumber": 4, "description": "Round the whole number.", "workingLatex": "380 \\approx 400", "explanation": "The next digit after the hundreds is $8$, so we round up to $400$.", "diagram": null },
        { "stepNumber": 5, "description": "Rewrite the calculation.", "workingLatex": "0.05 \\times 400", "explanation": "We multiply the rounded numbers.", "diagram": null },
        { "stepNumber": 6, "description": "Use a friendly form.", "workingLatex": "0.05 = \\dfrac{5}{100}", "explanation": "Writing $0.05$ as five hundredths makes the multiplication clearer.", "diagram": null },
        { "stepNumber": 7, "description": "Work it out.", "workingLatex": "\\dfrac{5}{100} \\times 400 = 5 \\times 4 = 20", "explanation": "Four hundred divided by one hundred is four, times five is twenty.", "diagram": null },
        { "stepNumber": 8, "description": "State the answer.", "workingLatex": "0.052 \\times 380 \\approx 20", "explanation": "So the value is roughly twenty.", "diagram": null }
      ],
      "finalAnswer": "$\\approx 20$"
    }
  },
  {
    "id": "gcse.number.estimation.q047",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Estimation and checking",
    "subtopicId": "gcse.number.estimation",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "value",
    "tags": ["estimation", "1 significant figure", "dividing by decimal"],
    "questionText": "Estimate the value of $783 \\div 0.19$ by rounding each number to $1$ significant figure.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Plan the estimate.", "workingLatex": "\\text{round each number to } 1\\text{ s.f.}", "explanation": "We round each number to one significant figure.", "diagram": null },
        { "stepNumber": 2, "description": "Round the first number.", "workingLatex": "783 \\approx 800", "explanation": "The next digit after the hundreds is $8$, so we round up to $800$.", "diagram": null },
        { "stepNumber": 3, "description": "Round the divisor.", "workingLatex": "0.19 \\approx 0.2", "explanation": "The digit after the first significant figure is $9$, so we round up to $0.2$.", "diagram": null },
        { "stepNumber": 4, "description": "Rewrite the calculation.", "workingLatex": "800 \\div 0.2", "explanation": "We divide the rounded numbers.", "diagram": null },
        { "stepNumber": 5, "description": "Interpret dividing by 0.2.", "workingLatex": "\\div 0.2 = \\times 5", "explanation": "Dividing by one fifth is the same as multiplying by five.", "diagram": null },
        { "stepNumber": 6, "description": "Work out the estimate.", "workingLatex": "800 \\times 5 = 4000", "explanation": "So the estimate is four thousand.", "diagram": null },
        { "stepNumber": 7, "description": "State the answer.", "workingLatex": "783 \\div 0.19 \\approx 4000", "explanation": "So the value is roughly four thousand.", "diagram": null }
      ],
      "finalAnswer": "$\\approx 4000$"
    }
  },
  {
    "id": "gcse.number.estimation.q048",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Estimation and checking",
    "subtopicId": "gcse.number.estimation",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "value",
    "tags": ["estimation", "1 significant figure", "decimals less than 1"],
    "questionText": "Estimate the value of $48 \\times 0.21$ by rounding each number to $1$ significant figure.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Plan the estimate.", "workingLatex": "\\text{round each number to } 1\\text{ s.f.}", "explanation": "We round each number to one significant figure.", "diagram": null },
        { "stepNumber": 2, "description": "Round the whole number.", "workingLatex": "48 \\approx 50", "explanation": "The digit after the first significant figure is $8$, so we round up to $50$.", "diagram": null },
        { "stepNumber": 3, "description": "Round the decimal.", "workingLatex": "0.21 \\approx 0.2", "explanation": "The digit after the first significant figure is $1$, so we round down to $0.2$.", "diagram": null },
        { "stepNumber": 4, "description": "Rewrite the calculation.", "workingLatex": "50 \\times 0.2", "explanation": "We multiply the rounded numbers.", "diagram": null },
        { "stepNumber": 5, "description": "Use the meaning of 0.2.", "workingLatex": "0.2 = \\tfrac{1}{5}", "explanation": "Multiplying by $0.2$ is the same as dividing by five.", "diagram": null },
        { "stepNumber": 6, "description": "Work out the estimate.", "workingLatex": "50 \\div 5 = 10", "explanation": "So the estimate is ten.", "diagram": null },
        { "stepNumber": 7, "description": "State the answer.", "workingLatex": "48 \\times 0.21 \\approx 10", "explanation": "So the value is roughly ten.", "diagram": null }
      ],
      "finalAnswer": "$\\approx 10$"
    }
  },
  {
    "id": "gcse.number.estimation.q049",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Estimation and checking",
    "subtopicId": "gcse.number.estimation",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "value",
    "tags": ["estimation", "square roots", "decimals"],
    "questionText": "Estimate the value of $\\sqrt{0.26}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Round to a friendly decimal.", "workingLatex": "0.26 \\approx 0.25", "explanation": "Rounding to $0.25$ gives a value whose square root we know exactly.", "diagram": null },
        { "stepNumber": 2, "description": "Recognise the friendly square.", "workingLatex": "0.5^2 = 0.25", "explanation": "One half squared is $0.25$, since $0.5 \\times 0.5 = 0.25$.", "diagram": null },
        { "stepNumber": 3, "description": "Take the square root.", "workingLatex": "\\sqrt{0.25} = 0.5", "explanation": "So the square root of $0.25$ is $0.5$.", "diagram": null },
        { "stepNumber": 4, "description": "Decide the size of the true root.", "workingLatex": "0.26 > 0.25 \\Rightarrow \\sqrt{0.26} > 0.5", "explanation": "Since $0.26$ is a little more than $0.25$, its root is a little more than $0.5$.", "diagram": null },
        { "stepNumber": 5, "description": "Give the estimate.", "workingLatex": "\\sqrt{0.26} \\approx 0.5", "explanation": "So the root is about $0.5$.", "diagram": null },
        { "stepNumber": 6, "description": "State the answer.", "workingLatex": "\\sqrt{0.26} \\approx 0.5", "explanation": "So the square root of $0.26$ is roughly $0.5$.", "diagram": null }
      ],
      "finalAnswer": "$\\approx 0.5$"
    }
  },
  {
    "id": "gcse.number.estimation.q050",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Estimation and checking",
    "subtopicId": "gcse.number.estimation",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "value",
    "tags": ["estimation", "1 significant figure", "compound expression", "dividing by decimal"],
    "questionText": "Estimate the value of $\\dfrac{312 \\times 19}{0.79}$ by rounding each number to $1$ significant figure.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Plan the estimate.", "workingLatex": "\\text{round every number to } 1\\text{ s.f.}", "explanation": "We round each number, then calculate.", "diagram": null },
        { "stepNumber": 2, "description": "Round the first number.", "workingLatex": "312 \\approx 300", "explanation": "The next digit after the hundreds is $1$, so we round down to $300$.", "diagram": null },
        { "stepNumber": 3, "description": "Round the second number.", "workingLatex": "19 \\approx 20", "explanation": "The digit after the first significant figure is $9$, so we round up to $20$.", "diagram": null },
        { "stepNumber": 4, "description": "Round the divisor.", "workingLatex": "0.79 \\approx 0.8", "explanation": "The digit after the first significant figure is $9$, so we round up to $0.8$.", "diagram": null },
        { "stepNumber": 5, "description": "Work out the numerator.", "workingLatex": "300 \\times 20 = 6000", "explanation": "The top becomes six thousand.", "diagram": null },
        { "stepNumber": 6, "description": "Rewrite the division.", "workingLatex": "\\dfrac{6000}{0.8}", "explanation": "We divide the numerator by the rounded denominator.", "diagram": null },
        { "stepNumber": 7, "description": "Clear the decimal.", "workingLatex": "\\dfrac{6000}{0.8} = \\dfrac{60000}{8}", "explanation": "Multiplying top and bottom by ten removes the decimal.", "diagram": null },
        { "stepNumber": 8, "description": "Work out the estimate.", "workingLatex": "\\dfrac{60000}{8} = 7500", "explanation": "Sixty thousand divided by eight is seven thousand five hundred.", "diagram": null },
        { "stepNumber": 9, "description": "State the answer.", "workingLatex": "\\dfrac{312 \\times 19}{0.79} \\approx 7500", "explanation": "So the value is roughly seven thousand five hundred.", "diagram": null }
      ],
      "finalAnswer": "$\\approx 7500$"
    }
  },
  {
    "id": "gcse.number.estimation.q051",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Estimation and checking",
    "subtopicId": "gcse.number.estimation",
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "money",
    "tags": ["estimation", "context", "area", "cost", "problem solving"],
    "questionText": "A rectangular room measures $4.8\\text{ m}$ by $5.9\\text{ m}$. Carpet costs $\\pounds 11.90$ per square metre. Estimate the total cost of carpeting the room.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Plan the stages.", "workingLatex": "\\text{area} \\to \\text{cost}", "explanation": "We estimate the floor area, then multiply by the price per square metre.", "diagram": null },
        { "stepNumber": 2, "description": "Round the first length.", "workingLatex": "4.8 \\approx 5", "explanation": "The digit after the first significant figure is $8$, so we round up to $5$.", "diagram": null },
        { "stepNumber": 3, "description": "Round the second length.", "workingLatex": "5.9 \\approx 6", "explanation": "The digit after the first significant figure is $9$, so we round up to $6$.", "diagram": null },
        { "stepNumber": 4, "description": "Estimate the area.", "workingLatex": "5 \\times 6 = 30\\text{ m}^2", "explanation": "The area of a rectangle is length times width.", "diagram": null },
        { "stepNumber": 5, "description": "Round the price.", "workingLatex": "11.90 \\approx 10", "explanation": "The first significant figure is the tens; the next digit $1$ rounds it down to $10$.", "diagram": null },
        { "stepNumber": 6, "description": "Estimate the cost.", "workingLatex": "30 \\times 10 = 300", "explanation": "We multiply the estimated area by the rounded price.", "diagram": null },
        { "stepNumber": 7, "description": "Attach the units.", "workingLatex": "\\pounds 300", "explanation": "The answer is an amount of money.", "diagram": null },
        { "stepNumber": 8, "description": "Comment on the rounding.", "workingLatex": "\\text{lengths up, price down}", "explanation": "The lengths were rounded up but the price down, so the estimate is only a rough guide.", "diagram": null },
        { "stepNumber": 9, "description": "State the answer.", "workingLatex": "\\text{cost} \\approx \\pounds 300", "explanation": "So the carpet costs roughly $\\pounds 300$.", "diagram": null }
      ],
      "finalAnswer": "$\\approx \\pounds 300$"
    }
  },
  {
    "id": "gcse.number.estimation.q052",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Estimation and checking",
    "subtopicId": "gcse.number.estimation",
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "value",
    "tags": ["estimation", "context", "problem solving", "decimals less than 1"],
    "questionText": "A theatre has $39$ rows with $52$ seats in each row. On one night about $91\\%$ of the seats were filled. Estimate the number of people who attended.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Plan the stages.", "workingLatex": "\\text{total seats} \\to \\text{fraction full}", "explanation": "We estimate the total number of seats, then take about $90\\%$ of them.", "diagram": null },
        { "stepNumber": 2, "description": "Round the number of rows.", "workingLatex": "39 \\approx 40", "explanation": "The digit after the first significant figure is $9$, so we round up to $40$.", "diagram": null },
        { "stepNumber": 3, "description": "Round the seats per row.", "workingLatex": "52 \\approx 50", "explanation": "The digit after the first significant figure is $2$, so we round down to $50$.", "diagram": null },
        { "stepNumber": 4, "description": "Estimate the total seats.", "workingLatex": "40 \\times 50 = 2000", "explanation": "Multiplying rows by seats per row gives the total number of seats.", "diagram": null },
        { "stepNumber": 5, "description": "Round the percentage.", "workingLatex": "91\\% \\approx 90\\%", "explanation": "To one significant figure the fill is about ninety per cent.", "diagram": null },
        { "stepNumber": 6, "description": "Write the percentage as a decimal.", "workingLatex": "90\\% = 0.9", "explanation": "Ninety per cent is $0.9$ as a multiplier.", "diagram": null },
        { "stepNumber": 7, "description": "Estimate the attendance.", "workingLatex": "2000 \\times 0.9", "explanation": "We take ninety per cent of the estimated seats.", "diagram": null },
        { "stepNumber": 8, "description": "Work it out.", "workingLatex": "2000 \\times 0.9 = 1800", "explanation": "Ninety per cent of two thousand is one thousand eight hundred.", "diagram": null },
        { "stepNumber": 9, "description": "State the answer.", "workingLatex": "\\approx 1800 \\text{ people}", "explanation": "So roughly $1800$ people attended.", "diagram": null }
      ],
      "finalAnswer": "$\\approx 1800$ people"
    }
  },
  {
    "id": "gcse.number.estimation.q053",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Estimation and checking",
    "subtopicId": "gcse.number.estimation",
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "value",
    "tags": ["estimation", "square roots", "compound expression", "problem solving"],
    "questionText": "Estimate the value of $\\sqrt{\\dfrac{3960}{9.8}}$ by rounding each number to $1$ significant figure.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Plan the estimate.", "workingLatex": "\\text{round, divide, then root}", "explanation": "We round the numbers, work out the fraction, then take the square root.", "diagram": null },
        { "stepNumber": 2, "description": "Round the numerator.", "workingLatex": "3960 \\approx 4000", "explanation": "The next digit after the thousands is $9$, so we round up to $4000$.", "diagram": null },
        { "stepNumber": 3, "description": "Round the denominator.", "workingLatex": "9.8 \\approx 10", "explanation": "The digit after the first significant figure is $8$, so we round up to $10$.", "diagram": null },
        { "stepNumber": 4, "description": "Rewrite the fraction.", "workingLatex": "\\dfrac{4000}{10}", "explanation": "We replace the numbers with their rounded values.", "diagram": null },
        { "stepNumber": 5, "description": "Work out the division.", "workingLatex": "\\dfrac{4000}{10} = 400", "explanation": "Four thousand divided by ten is four hundred.", "diagram": null },
        { "stepNumber": 6, "description": "Rewrite the root.", "workingLatex": "\\sqrt{400}", "explanation": "We now take the square root of the result.", "diagram": null },
        { "stepNumber": 7, "description": "Recognise the perfect square.", "workingLatex": "20^2 = 400", "explanation": "Four hundred is twenty squared.", "diagram": null },
        { "stepNumber": 8, "description": "Take the root.", "workingLatex": "\\sqrt{400} = 20", "explanation": "So the square root is twenty.", "diagram": null },
        { "stepNumber": 9, "description": "State the answer.", "workingLatex": "\\sqrt{\\tfrac{3960}{9.8}} \\approx 20", "explanation": "So the value is roughly twenty.", "diagram": null }
      ],
      "finalAnswer": "$\\approx 20$"
    }
  },
  {
    "id": "gcse.number.estimation.q054",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Estimation and checking",
    "subtopicId": "gcse.number.estimation",
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "value",
    "tags": ["estimation", "context", "small decimals", "problem solving"],
    "questionText": "A car uses $0.089$ litres of fuel per kilometre. Estimate the fuel used on a journey of $412\\text{ km}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Set up the calculation.", "workingLatex": "\\text{fuel} = 0.089 \\times 412", "explanation": "The fuel used is the rate per kilometre times the number of kilometres.", "diagram": null },
        { "stepNumber": 2, "description": "Find the first significant figure of the rate.", "workingLatex": "0.089 \\to \\text{first s.f. is the } 8", "explanation": "Leading zeros are not significant, so the first significant figure is the $8$.", "diagram": null },
        { "stepNumber": 3, "description": "Round the rate.", "workingLatex": "0.089 \\approx 0.09", "explanation": "The digit after the $8$ is $9$, so we round up to $0.09$.", "diagram": null },
        { "stepNumber": 4, "description": "Round the distance.", "workingLatex": "412 \\approx 400", "explanation": "The next digit after the hundreds is $1$, so we round down to $400$.", "diagram": null },
        { "stepNumber": 5, "description": "Rewrite the calculation.", "workingLatex": "0.09 \\times 400", "explanation": "We multiply the rounded numbers.", "diagram": null },
        { "stepNumber": 6, "description": "Use a friendly form.", "workingLatex": "0.09 = \\dfrac{9}{100}", "explanation": "Writing $0.09$ as nine hundredths makes the multiplication clearer.", "diagram": null },
        { "stepNumber": 7, "description": "Work it out.", "workingLatex": "\\dfrac{9}{100} \\times 400 = 9 \\times 4 = 36", "explanation": "Four hundred over one hundred is four, times nine is thirty-six.", "diagram": null },
        { "stepNumber": 8, "description": "Attach the units.", "workingLatex": "36\\text{ litres}", "explanation": "The answer is a volume of fuel in litres.", "diagram": null },
        { "stepNumber": 9, "description": "State the answer.", "workingLatex": "\\text{fuel} \\approx 36\\text{ litres}", "explanation": "So the journey uses roughly $36$ litres.", "diagram": null }
      ],
      "finalAnswer": "$\\approx 36\\text{ litres}$"
    }
  },
  {
    "id": "gcse.number.estimation.q055",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Estimation and checking",
    "subtopicId": "gcse.number.estimation",
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "value",
    "tags": ["estimation", "over and under estimate", "reasoning"],
    "questionText": "Estimate the value of $6.2 \\times 8.3$, and state whether your estimate is an overestimate or an underestimate. Explain your reasoning.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Round the first number.", "workingLatex": "6.2 \\approx 6", "explanation": "The digit after the first significant figure is $2$, so we round down to $6$.", "diagram": null },
        { "stepNumber": 2, "description": "Note the direction of rounding.", "workingLatex": "6.2 \\to 6 \\; (\\text{down})", "explanation": "We rounded the first number down.", "diagram": null },
        { "stepNumber": 3, "description": "Round the second number.", "workingLatex": "8.3 \\approx 8", "explanation": "The digit after the first significant figure is $3$, so we round down to $8$.", "diagram": null },
        { "stepNumber": 4, "description": "Note the direction of rounding.", "workingLatex": "8.3 \\to 8 \\; (\\text{down})", "explanation": "We rounded the second number down as well.", "diagram": null },
        { "stepNumber": 5, "description": "Work out the estimate.", "workingLatex": "6 \\times 8 = 48", "explanation": "The rounded product is forty-eight.", "diagram": null },
        { "stepNumber": 6, "description": "Reason about the direction.", "workingLatex": "\\text{both factors made smaller}", "explanation": "Because both numbers were made smaller, the product is smaller than the true value.", "diagram": null },
        { "stepNumber": 7, "description": "Conclude over or under.", "workingLatex": "48 < \\text{true value}", "explanation": "So the estimate is an underestimate.", "diagram": null },
        { "stepNumber": 8, "description": "Check against the exact value.", "workingLatex": "6.2 \\times 8.3 = 51.46", "explanation": "The exact answer $51.46$ is indeed larger than $48$, confirming the estimate is too low.", "diagram": null },
        { "stepNumber": 9, "description": "State the answer.", "workingLatex": "\\approx 48 \\text{ (underestimate)}", "explanation": "So the estimate is $48$, and it is an underestimate.", "diagram": null }
      ],
      "finalAnswer": "$\\approx 48$ (an underestimate)"
    }
  },
  {
    "id": "gcse.number.estimation.q056",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Estimation and checking",
    "subtopicId": "gcse.number.estimation",
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "value",
    "tags": ["estimation", "context", "population density", "problem solving"],
    "questionText": "A region has a population of $41\\,000$ living in an area of $18.7\\text{ km}^2$. Estimate the population density in people per km$^2$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall the formula.", "workingLatex": "\\text{density} = \\dfrac{\\text{people}}{\\text{area}}", "explanation": "Population density is people divided by area.", "diagram": null },
        { "stepNumber": 2, "description": "Round the population.", "workingLatex": "41\\,000 \\approx 40\\,000", "explanation": "The digit after the first significant figure is $1$, so we round down to $40\\,000$.", "diagram": null },
        { "stepNumber": 3, "description": "Round the area.", "workingLatex": "18.7 \\approx 20", "explanation": "The digit after the first significant figure is $8$, so we round up to $20$.", "diagram": null },
        { "stepNumber": 4, "description": "Rewrite the calculation.", "workingLatex": "\\dfrac{40\\,000}{20}", "explanation": "We divide the rounded population by the rounded area.", "diagram": null },
        { "stepNumber": 5, "description": "Simplify the division.", "workingLatex": "\\dfrac{40\\,000}{20} = \\dfrac{4000}{2}", "explanation": "Cancelling a zero keeps the value the same.", "diagram": null },
        { "stepNumber": 6, "description": "Work it out.", "workingLatex": "\\dfrac{4000}{2} = 2000", "explanation": "Four thousand divided by two is two thousand.", "diagram": null },
        { "stepNumber": 7, "description": "Attach the units.", "workingLatex": "2000\\text{ people per km}^2", "explanation": "People over square kilometres gives people per square kilometre.", "diagram": null },
        { "stepNumber": 8, "description": "State the answer.", "workingLatex": "\\approx 2000\\text{ people/km}^2", "explanation": "So the population density is roughly $2000$ people per km$^2$.", "diagram": null }
      ],
      "finalAnswer": "$\\approx 2000\\text{ people per km}^2$"
    }
  },
  {
    "id": "gcse.number.estimation.q057",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Estimation and checking",
    "subtopicId": "gcse.number.estimation",
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "value",
    "tags": ["estimation", "context", "speed", "problem solving"],
    "questionText": "A coach travels $588\\text{ km}$ at an average speed of $62\\text{ km/h}$. Estimate the time taken in hours.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall the formula.", "workingLatex": "\\text{time} = \\dfrac{\\text{distance}}{\\text{speed}}", "explanation": "Time is distance divided by speed.", "diagram": null },
        { "stepNumber": 2, "description": "Round the distance.", "workingLatex": "588 \\approx 600", "explanation": "The next digit after the hundreds is $8$, so we round up to $600$.", "diagram": null },
        { "stepNumber": 3, "description": "Round the speed.", "workingLatex": "62 \\approx 60", "explanation": "The digit after the first significant figure is $2$, so we round down to $60$.", "diagram": null },
        { "stepNumber": 4, "description": "Rewrite the calculation.", "workingLatex": "\\dfrac{600}{60}", "explanation": "We divide the rounded distance by the rounded speed.", "diagram": null },
        { "stepNumber": 5, "description": "Work it out.", "workingLatex": "\\dfrac{600}{60} = 10", "explanation": "Six hundred divided by sixty is ten.", "diagram": null },
        { "stepNumber": 6, "description": "Attach the units.", "workingLatex": "10\\text{ hours}", "explanation": "Kilometres over kilometres per hour leaves hours.", "diagram": null },
        { "stepNumber": 7, "description": "Comment on the estimate.", "workingLatex": "\\text{distance up, speed down}", "explanation": "The distance was rounded up and the speed down, so the true time is a little less than $10$ hours.", "diagram": null },
        { "stepNumber": 8, "description": "State the answer.", "workingLatex": "\\text{time} \\approx 10\\text{ hours}", "explanation": "So the journey takes roughly $10$ hours.", "diagram": null }
      ],
      "finalAnswer": "$\\approx 10$ hours"
    }
  },
  {
    "id": "gcse.number.estimation.q058",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Estimation and checking",
    "subtopicId": "gcse.number.estimation",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "value",
    "tags": ["estimation", "compound expression", "dividing by decimal", "problem solving"],
    "questionText": "Estimate the value of $\\dfrac{0.48 \\times 612}{0.19}$ by rounding each number to $1$ significant figure.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Plan the estimate.", "workingLatex": "\\text{round every number to } 1\\text{ s.f.}", "explanation": "We round each number, then calculate.", "diagram": null },
        { "stepNumber": 2, "description": "Round the decimal factor.", "workingLatex": "0.48 \\approx 0.5", "explanation": "The digit after the first significant figure is $8$, so we round up to $0.5$.", "diagram": null },
        { "stepNumber": 3, "description": "Round the whole number.", "workingLatex": "612 \\approx 600", "explanation": "The next digit after the hundreds is $1$, so we round down to $600$.", "diagram": null },
        { "stepNumber": 4, "description": "Round the divisor.", "workingLatex": "0.19 \\approx 0.2", "explanation": "The digit after the first significant figure is $9$, so we round up to $0.2$.", "diagram": null },
        { "stepNumber": 5, "description": "Work out the numerator.", "workingLatex": "0.5 \\times 600 = 300", "explanation": "Half of six hundred is three hundred.", "diagram": null },
        { "stepNumber": 6, "description": "Rewrite the division.", "workingLatex": "\\dfrac{300}{0.2}", "explanation": "We divide the numerator by the rounded denominator.", "diagram": null },
        { "stepNumber": 7, "description": "Interpret dividing by 0.2.", "workingLatex": "\\div 0.2 = \\times 5", "explanation": "Dividing by one fifth is the same as multiplying by five.", "diagram": null },
        { "stepNumber": 8, "description": "Work out the estimate.", "workingLatex": "300 \\times 5 = 1500", "explanation": "So the estimate is one thousand five hundred.", "diagram": null },
        { "stepNumber": 9, "description": "State the answer.", "workingLatex": "\\dfrac{0.48 \\times 612}{0.19} \\approx 1500", "explanation": "So the value is roughly one thousand five hundred.", "diagram": null }
      ],
      "finalAnswer": "$\\approx 1500$"
    }
  },
  {
    "id": "gcse.number.estimation.q059",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Estimation and checking",
    "subtopicId": "gcse.number.estimation",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "value",
    "tags": ["estimation", "checking", "inverse operations", "reasoning"],
    "questionText": "A student claims that $684 \\div 19 = 36$. Use estimation and an inverse check to decide whether the answer is correct.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "First estimate the division.", "workingLatex": "684 \\approx 700, \\; 19 \\approx 20", "explanation": "We round both numbers to one significant figure.", "diagram": null },
        { "stepNumber": 2, "description": "Work out the estimate.", "workingLatex": "\\dfrac{700}{20} = 35", "explanation": "The rough answer is about thirty-five.", "diagram": null },
        { "stepNumber": 3, "description": "Compare with the claim.", "workingLatex": "36 \\approx 35", "explanation": "The claimed answer of $36$ is close to the estimate, so it is plausible.", "diagram": null },
        { "stepNumber": 4, "description": "Set up the inverse check.", "workingLatex": "36 \\times 19 \\stackrel{?}{=} 684", "explanation": "A division can be checked by multiplying the answer by the divisor.", "diagram": null },
        { "stepNumber": 5, "description": "Split the multiplication.", "workingLatex": "36 \\times 19 = 36 \\times 20 - 36", "explanation": "Multiplying by twenty and taking one lot of $36$ off is easier than multiplying by nineteen.", "diagram": null },
        { "stepNumber": 6, "description": "Work out the parts.", "workingLatex": "36 \\times 20 = 720", "explanation": "Thirty-six times twenty is seven hundred and twenty.", "diagram": null },
        { "stepNumber": 7, "description": "Subtract.", "workingLatex": "720 - 36 = 684", "explanation": "Taking off one lot of $36$ gives six hundred and eighty-four.", "diagram": null },
        { "stepNumber": 8, "description": "Compare with the original.", "workingLatex": "684 = 684", "explanation": "The inverse check gives exactly the original number.", "diagram": null },
        { "stepNumber": 9, "description": "State the conclusion.", "workingLatex": "36 \\text{ is correct}", "explanation": "Both the estimate and the inverse check confirm the answer is correct.", "diagram": null }
      ],
      "finalAnswer": "Correct ($36 \\times 19 = 684$)"
    }
  },
  {
    "id": "gcse.number.estimation.q060",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Estimation and checking",
    "subtopicId": "gcse.number.estimation",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "value",
    "tags": ["estimation", "context", "area", "circle", "problem solving"],
    "questionText": "Estimate the area of a circle with radius $3.1\\text{ cm}$, using $\\pi \\approx 3$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall the area formula.", "workingLatex": "A = \\pi r^2", "explanation": "The area of a circle is $\\pi$ times the radius squared.", "diagram": null },
        { "stepNumber": 2, "description": "Round the radius.", "workingLatex": "3.1 \\approx 3", "explanation": "The digit after the first significant figure is $1$, so we round down to $3$.", "diagram": null },
        { "stepNumber": 3, "description": "Use the approximation for pi.", "workingLatex": "\\pi \\approx 3", "explanation": "For an estimate we use the rough value $\\pi \\approx 3$.", "diagram": null },
        { "stepNumber": 4, "description": "Square the radius.", "workingLatex": "3^2 = 9", "explanation": "Three squared is nine.", "diagram": null },
        { "stepNumber": 5, "description": "Rewrite the calculation.", "workingLatex": "A \\approx 3 \\times 9", "explanation": "We multiply the rough $\\pi$ by the squared radius.", "diagram": null },
        { "stepNumber": 6, "description": "Work out the estimate.", "workingLatex": "3 \\times 9 = 27", "explanation": "Three times nine is twenty-seven.", "diagram": null },
        { "stepNumber": 7, "description": "Attach the units.", "workingLatex": "27\\text{ cm}^2", "explanation": "Area is measured in square centimetres.", "diagram": null },
        { "stepNumber": 8, "description": "Comment on the estimate.", "workingLatex": "\\pi \\approx 3 < 3.14", "explanation": "Because $\\pi$ is actually a bit more than $3$, the true area is a little more than $27$ cm$^2$.", "diagram": null },
        { "stepNumber": 9, "description": "State the answer.", "workingLatex": "A \\approx 27\\text{ cm}^2", "explanation": "So the area is roughly $27$ cm$^2$.", "diagram": null }
      ],
      "finalAnswer": "$\\approx 27\\text{ cm}^2$"
    }
  },
  {
    "id": "gcse.number.estimation.q061",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Estimation and checking",
    "subtopicId": "gcse.number.estimation",
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "value",
    "tags": ["estimation", "context", "volume", "problem solving"],
    "questionText": "Estimate the volume of a box measuring $4.8\\text{ cm}$ by $2.1\\text{ cm}$ by $5.2\\text{ cm}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall the volume formula.", "workingLatex": "V = l \\times w \\times h", "explanation": "The volume of a box is length times width times height.", "diagram": null },
        { "stepNumber": 2, "description": "Round the length.", "workingLatex": "4.8 \\approx 5", "explanation": "The digit after the first significant figure is $8$, so we round up to $5$.", "diagram": null },
        { "stepNumber": 3, "description": "Round the width.", "workingLatex": "2.1 \\approx 2", "explanation": "The digit after the first significant figure is $1$, so we round down to $2$.", "diagram": null },
        { "stepNumber": 4, "description": "Round the height.", "workingLatex": "5.2 \\approx 5", "explanation": "The digit after the first significant figure is $2$, so we round down to $5$.", "diagram": null },
        { "stepNumber": 5, "description": "Rewrite the calculation.", "workingLatex": "5 \\times 2 \\times 5", "explanation": "We multiply the three rounded lengths.", "diagram": null },
        { "stepNumber": 6, "description": "Multiply the first two.", "workingLatex": "5 \\times 2 = 10", "explanation": "Five times two is ten.", "diagram": null },
        { "stepNumber": 7, "description": "Multiply by the third.", "workingLatex": "10 \\times 5 = 50", "explanation": "Ten times five is fifty.", "diagram": null },
        { "stepNumber": 8, "description": "Attach the units.", "workingLatex": "50\\text{ cm}^3", "explanation": "Volume is measured in cubic centimetres.", "diagram": null },
        { "stepNumber": 9, "description": "State the answer.", "workingLatex": "V \\approx 50\\text{ cm}^3", "explanation": "So the volume is roughly $50$ cm$^3$.", "diagram": null }
      ],
      "finalAnswer": "$\\approx 50\\text{ cm}^3$"
    }
  },
  {
    "id": "gcse.number.estimation.q062",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Estimation and checking",
    "subtopicId": "gcse.number.estimation",
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "value",
    "tags": ["estimation", "context", "speed", "problem solving"],
    "questionText": "A sprinter runs $148\\text{ m}$ in $21$ seconds. Estimate the average speed in m/s.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall the formula.", "workingLatex": "\\text{speed} = \\dfrac{\\text{distance}}{\\text{time}}", "explanation": "Speed is distance divided by time.", "diagram": null },
        { "stepNumber": 2, "description": "Round the distance.", "workingLatex": "148 \\approx 150", "explanation": "The next digit after the hundreds is $4$... but the tens digit rounds it: to $1$ s.f. $148 \\approx 100$? we keep sensible accuracy at $150$ for a workable estimate.", "diagram": null },
        { "stepNumber": 3, "description": "Round the time.", "workingLatex": "21 \\approx 20", "explanation": "The digit after the first significant figure is $1$, so we round down to $20$.", "diagram": null },
        { "stepNumber": 4, "description": "Rewrite the calculation.", "workingLatex": "\\dfrac{150}{20}", "explanation": "We divide the rounded distance by the rounded time.", "diagram": null },
        { "stepNumber": 5, "description": "Simplify the fraction.", "workingLatex": "\\dfrac{150}{20} = \\dfrac{15}{2}", "explanation": "Cancelling a zero keeps the value the same.", "diagram": null },
        { "stepNumber": 6, "description": "Work it out.", "workingLatex": "\\dfrac{15}{2} = 7.5", "explanation": "Fifteen divided by two is seven and a half.", "diagram": null },
        { "stepNumber": 7, "description": "Attach the units.", "workingLatex": "7.5\\text{ m/s}", "explanation": "Metres over seconds gives metres per second.", "diagram": null },
        { "stepNumber": 8, "description": "State the answer.", "workingLatex": "\\text{speed} \\approx 7.5\\text{ m/s}", "explanation": "So the average speed is roughly $7.5$ m/s.", "diagram": null }
      ],
      "finalAnswer": "$\\approx 7.5\\text{ m/s}$"
    }
  },
  {
    "id": "gcse.number.estimation.q063",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Estimation and checking",
    "subtopicId": "gcse.number.estimation",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "value",
    "tags": ["estimation", "squares", "dividing by decimal", "compound expression"],
    "questionText": "Estimate the value of $\\dfrac{39.7^2}{0.51}$ by rounding each number to $1$ significant figure.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Plan the estimate.", "workingLatex": "\\text{round, square, then divide}", "explanation": "We round the numbers, square the top, then divide.", "diagram": null },
        { "stepNumber": 2, "description": "Round the base.", "workingLatex": "39.7 \\approx 40", "explanation": "The digit after the first significant figure is $9$, so we round up to $40$.", "diagram": null },
        { "stepNumber": 3, "description": "Round the divisor.", "workingLatex": "0.51 \\approx 0.5", "explanation": "The digit after the first significant figure is $1$, so we round down to $0.5$.", "diagram": null },
        { "stepNumber": 4, "description": "Square the top.", "workingLatex": "40^2 = 1600", "explanation": "Forty squared is one thousand six hundred.", "diagram": null },
        { "stepNumber": 5, "description": "Rewrite the division.", "workingLatex": "\\dfrac{1600}{0.5}", "explanation": "We divide the squared value by the rounded denominator.", "diagram": null },
        { "stepNumber": 6, "description": "Interpret dividing by 0.5.", "workingLatex": "\\div 0.5 = \\times 2", "explanation": "Dividing by a half is the same as doubling.", "diagram": null },
        { "stepNumber": 7, "description": "Work out the estimate.", "workingLatex": "1600 \\times 2 = 3200", "explanation": "So the estimate is three thousand two hundred.", "diagram": null },
        { "stepNumber": 8, "description": "State the answer.", "workingLatex": "\\dfrac{39.7^2}{0.51} \\approx 3200", "explanation": "So the value is roughly three thousand two hundred.", "diagram": null }
      ],
      "finalAnswer": "$\\approx 3200$"
    }
  },
  {
    "id": "gcse.number.estimation.q064",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Estimation and checking",
    "subtopicId": "gcse.number.estimation",
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "money",
    "tags": ["estimation", "context", "money", "problem solving"],
    "questionText": "A concert sells $2850$ tickets at $\\pounds 18.90$ each. Estimate the total ticket income.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Set up the calculation.", "workingLatex": "\\text{income} = 2850 \\times 18.90", "explanation": "The income is the number of tickets times the price of each.", "diagram": null },
        { "stepNumber": 2, "description": "Round the number of tickets.", "workingLatex": "2850 \\approx 3000", "explanation": "The next digit after the thousands is $8$, so we round up to $3000$.", "diagram": null },
        { "stepNumber": 3, "description": "Round the price.", "workingLatex": "18.90 \\approx 20", "explanation": "The digit after the first significant figure is $8$, so we round up to $20$.", "diagram": null },
        { "stepNumber": 4, "description": "Rewrite the calculation.", "workingLatex": "3000 \\times 20", "explanation": "We multiply the rounded numbers.", "diagram": null },
        { "stepNumber": 5, "description": "Work out the estimate.", "workingLatex": "3000 \\times 20 = 60\\,000", "explanation": "Three thousand times twenty is sixty thousand.", "diagram": null },
        { "stepNumber": 6, "description": "Attach the units.", "workingLatex": "\\pounds 60\\,000", "explanation": "The answer is an amount of money.", "diagram": null },
        { "stepNumber": 7, "description": "Comment on the estimate.", "workingLatex": "\\text{both rounded up}", "explanation": "Both numbers were rounded up, so the true income is a little less than $\\pounds 60\\,000$.", "diagram": null },
        { "stepNumber": 8, "description": "State the answer.", "workingLatex": "\\text{income} \\approx \\pounds 60\\,000", "explanation": "So the total income is roughly $\\pounds 60\\,000$.", "diagram": null }
      ],
      "finalAnswer": "$\\approx \\pounds 60\\,000$"
    }
  },
  {
    "id": "gcse.number.estimation.q065",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Estimation and checking",
    "subtopicId": "gcse.number.estimation",
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "value",
    "tags": ["estimation", "over and under estimate", "reasoning"],
    "questionText": "Estimate the value of $8.9 \\times 6.8$, and state whether the estimate is an overestimate or an underestimate.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Round the first number.", "workingLatex": "8.9 \\approx 9", "explanation": "The digit after the first significant figure is $9$, so we round up to $9$.", "diagram": null },
        { "stepNumber": 2, "description": "Note the direction.", "workingLatex": "8.9 \\to 9 \\; (\\text{up})", "explanation": "We rounded the first number up.", "diagram": null },
        { "stepNumber": 3, "description": "Round the second number.", "workingLatex": "6.8 \\approx 7", "explanation": "The digit after the first significant figure is $8$, so we round up to $7$.", "diagram": null },
        { "stepNumber": 4, "description": "Note the direction.", "workingLatex": "6.8 \\to 7 \\; (\\text{up})", "explanation": "We rounded the second number up as well.", "diagram": null },
        { "stepNumber": 5, "description": "Work out the estimate.", "workingLatex": "9 \\times 7 = 63", "explanation": "The rounded product is sixty-three.", "diagram": null },
        { "stepNumber": 6, "description": "Reason about the direction.", "workingLatex": "\\text{both factors made larger}", "explanation": "Because both numbers were made larger, the product is larger than the true value.", "diagram": null },
        { "stepNumber": 7, "description": "Conclude over or under.", "workingLatex": "63 > \\text{true value}", "explanation": "So the estimate is an overestimate.", "diagram": null },
        { "stepNumber": 8, "description": "Check against the exact value.", "workingLatex": "8.9 \\times 6.8 = 60.52", "explanation": "The exact answer $60.52$ is indeed less than $63$, confirming the overestimate.", "diagram": null },
        { "stepNumber": 9, "description": "State the answer.", "workingLatex": "\\approx 63 \\text{ (overestimate)}", "explanation": "So the estimate is $63$, and it is an overestimate.", "diagram": null }
      ],
      "finalAnswer": "$\\approx 63$ (an overestimate)"
    }
  },
  {
    "id": "gcse.number.estimation.q066",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Estimation and checking",
    "subtopicId": "gcse.number.estimation",
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "value",
    "tags": ["estimation", "square roots", "compound expression"],
    "questionText": "Estimate the value of $\\sqrt{3.9 \\times 102}$ by rounding each number to $1$ significant figure.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Plan the estimate.", "workingLatex": "\\text{round, multiply, then root}", "explanation": "We round the numbers, work out the product inside the root, then take the square root.", "diagram": null },
        { "stepNumber": 2, "description": "Round the first number.", "workingLatex": "3.9 \\approx 4", "explanation": "The digit after the first significant figure is $9$, so we round up to $4$.", "diagram": null },
        { "stepNumber": 3, "description": "Round the second number.", "workingLatex": "102 \\approx 100", "explanation": "The next digit after the hundreds is $0$, so it stays at $100$.", "diagram": null },
        { "stepNumber": 4, "description": "Multiply inside the root.", "workingLatex": "4 \\times 100 = 400", "explanation": "The number under the root becomes four hundred.", "diagram": null },
        { "stepNumber": 5, "description": "Rewrite the root.", "workingLatex": "\\sqrt{400}", "explanation": "We now take the square root of the product.", "diagram": null },
        { "stepNumber": 6, "description": "Recognise the perfect square.", "workingLatex": "20^2 = 400", "explanation": "Four hundred is twenty squared.", "diagram": null },
        { "stepNumber": 7, "description": "Take the root.", "workingLatex": "\\sqrt{400} = 20", "explanation": "So the square root is twenty.", "diagram": null },
        { "stepNumber": 8, "description": "State the answer.", "workingLatex": "\\sqrt{3.9 \\times 102} \\approx 20", "explanation": "So the value is roughly twenty.", "diagram": null }
      ],
      "finalAnswer": "$\\approx 20$"
    }
  },
  {
    "id": "gcse.number.estimation.q067",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Estimation and checking",
    "subtopicId": "gcse.number.estimation",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "value",
    "tags": ["estimation", "compound expression", "dividing by decimal", "problem solving"],
    "questionText": "Estimate the value of $\\dfrac{612}{0.29 \\times 4.1}$ by rounding each number to $1$ significant figure.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Plan the estimate.", "workingLatex": "\\text{round every number to } 1\\text{ s.f.}", "explanation": "We round each number, then work out the bottom before dividing.", "diagram": null },
        { "stepNumber": 2, "description": "Round the numerator.", "workingLatex": "612 \\approx 600", "explanation": "The next digit after the hundreds is $1$, so we round down to $600$.", "diagram": null },
        { "stepNumber": 3, "description": "Round the first factor of the bottom.", "workingLatex": "0.29 \\approx 0.3", "explanation": "The digit after the first significant figure is $9$, so we round up to $0.3$.", "diagram": null },
        { "stepNumber": 4, "description": "Round the second factor.", "workingLatex": "4.1 \\approx 4", "explanation": "The digit after the first significant figure is $1$, so we round down to $4$.", "diagram": null },
        { "stepNumber": 5, "description": "Work out the denominator.", "workingLatex": "0.3 \\times 4 = 1.2", "explanation": "The bottom of the fraction becomes $1.2$.", "diagram": null },
        { "stepNumber": 6, "description": "Rewrite the division.", "workingLatex": "\\dfrac{600}{1.2}", "explanation": "We divide the numerator by the computed denominator.", "diagram": null },
        { "stepNumber": 7, "description": "Clear the decimal.", "workingLatex": "\\dfrac{600}{1.2} = \\dfrac{6000}{12}", "explanation": "Multiplying top and bottom by ten removes the decimal.", "diagram": null },
        { "stepNumber": 8, "description": "Work out the estimate.", "workingLatex": "\\dfrac{6000}{12} = 500", "explanation": "Six thousand divided by twelve is five hundred.", "diagram": null },
        { "stepNumber": 9, "description": "State the answer.", "workingLatex": "\\dfrac{612}{0.29 \\times 4.1} \\approx 500", "explanation": "So the value is roughly five hundred.", "diagram": null }
      ],
      "finalAnswer": "$\\approx 500$"
    }
  },
  {
    "id": "gcse.number.estimation.q068",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Estimation and checking",
    "subtopicId": "gcse.number.estimation",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "value",
    "tags": ["estimation", "checking", "spotting errors", "reasoning"],
    "questionText": "A student uses a calculator for $29 \\times 31$ and reads off $89.9$. Use estimation to explain the error and give the correct rough value.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Estimate the true product.", "workingLatex": "29 \\approx 30, \\; 31 \\approx 30", "explanation": "We round both numbers to one significant figure.", "diagram": null },
        { "stepNumber": 2, "description": "Work out the estimate.", "workingLatex": "30 \\times 30 = 900", "explanation": "The product should be around nine hundred.", "diagram": null },
        { "stepNumber": 3, "description": "Compare with the reading.", "workingLatex": "89.9 \\ll 900", "explanation": "The reading of $89.9$ is about ten times too small.", "diagram": null },
        { "stepNumber": 4, "description": "Look at the digits.", "workingLatex": "89.9 \\to 899", "explanation": "The digits are close to $899$, which is near $900$.", "diagram": null },
        { "stepNumber": 5, "description": "Identify the mistake.", "workingLatex": "\\text{misplaced decimal point}", "explanation": "It looks like a decimal point was entered or read in the wrong place.", "diagram": null },
        { "stepNumber": 6, "description": "State the correct rough value.", "workingLatex": "29 \\times 31 \\approx 900", "explanation": "The answer should be about nine hundred, not $89.9$.", "diagram": null },
        { "stepNumber": 7, "description": "Confirm exactly.", "workingLatex": "29 \\times 31 = 899", "explanation": "The exact value $899$ matches the estimate, confirming the reading was wrong.", "diagram": null },
        { "stepNumber": 8, "description": "State the conclusion.", "workingLatex": "\\text{true value} \\approx 900", "explanation": "So the calculator reading was wrong by a factor of ten; the answer is about $900$.", "diagram": null }
      ],
      "finalAnswer": "Error of $\\times 10$; correct value $\\approx 900$"
    }
  },
  {
    "id": "gcse.number.estimation.q069",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Estimation and checking",
    "subtopicId": "gcse.number.estimation",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "value",
    "tags": ["estimation", "context", "multi-stage", "problem solving"],
    "questionText": "A factory packs $4850$ apples into boxes that each hold $48$ apples. Estimate how many full boxes are packed.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Set up the calculation.", "workingLatex": "\\text{boxes} = 4850 \\div 48", "explanation": "The number of boxes is the number of apples divided by the apples per box.", "diagram": null },
        { "stepNumber": 2, "description": "Round the number of apples.", "workingLatex": "4850 \\approx 5000", "explanation": "The next digit after the thousands is $8$, so we round up to $5000$.", "diagram": null },
        { "stepNumber": 3, "description": "Round the box size.", "workingLatex": "48 \\approx 50", "explanation": "The digit after the first significant figure is $8$, so we round up to $50$.", "diagram": null },
        { "stepNumber": 4, "description": "Rewrite the calculation.", "workingLatex": "5000 \\div 50", "explanation": "We divide the rounded numbers.", "diagram": null },
        { "stepNumber": 5, "description": "Simplify the division.", "workingLatex": "\\dfrac{5000}{50} = \\dfrac{500}{5}", "explanation": "Cancelling a zero keeps the value the same.", "diagram": null },
        { "stepNumber": 6, "description": "Work it out.", "workingLatex": "\\dfrac{500}{5} = 100", "explanation": "Five hundred divided by five is one hundred.", "diagram": null },
        { "stepNumber": 7, "description": "Interpret in context.", "workingLatex": "\\approx 100 \\text{ boxes}", "explanation": "About one hundred boxes are packed.", "diagram": null },
        { "stepNumber": 8, "description": "State the answer.", "workingLatex": "4850 \\div 48 \\approx 100", "explanation": "So roughly $100$ full boxes are packed.", "diagram": null }
      ],
      "finalAnswer": "$\\approx 100$ boxes"
    }
  },
  {
    "id": "gcse.number.estimation.q070",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Estimation and checking",
    "subtopicId": "gcse.number.estimation",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "value",
    "tags": ["estimation", "context", "multi-stage", "decision", "problem solving"],
    "questionText": "A school trip needs $\\pounds 4820$. There are $196$ students, and each pays $\\pounds 22$. Use estimation to decide whether enough money is raised.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Plan the check.", "workingLatex": "\\text{estimate money raised, compare to } \\pounds 4820", "explanation": "We estimate the total collected and compare it with the amount needed.", "diagram": null },
        { "stepNumber": 2, "description": "Set up the money raised.", "workingLatex": "\\text{raised} = 196 \\times 22", "explanation": "The money raised is the number of students times the amount each pays.", "diagram": null },
        { "stepNumber": 3, "description": "Round the number of students.", "workingLatex": "196 \\approx 200", "explanation": "The next digit after the hundreds is $9$, so we round up to $200$.", "diagram": null },
        { "stepNumber": 4, "description": "Round the amount each pays.", "workingLatex": "22 \\approx 20", "explanation": "The digit after the first significant figure is $2$, so we round down to $20$.", "diagram": null },
        { "stepNumber": 5, "description": "Estimate the money raised.", "workingLatex": "200 \\times 20 = 4000", "explanation": "The rough total collected is $\\pounds 4000$.", "diagram": null },
        { "stepNumber": 6, "description": "Compare with the target.", "workingLatex": "\\pounds 4000 < \\pounds 4820", "explanation": "The estimate is below the amount needed.", "diagram": null },
        { "stepNumber": 7, "description": "Think about the rounding directions.", "workingLatex": "\\text{students up, payment down}", "explanation": "Rounding students up but the payment down could push the estimate either way, so we should be careful.", "diagram": null },
        { "stepNumber": 8, "description": "Refine using a closer estimate.", "workingLatex": "196 \\times 22 \\approx 200 \\times 22 = 4400", "explanation": "Keeping the exact payment of $\\pounds 22$ gives about $\\pounds 4400$, still below the target.", "diagram": null },
        { "stepNumber": 9, "description": "Reach a decision.", "workingLatex": "\\pounds 4400 < \\pounds 4820", "explanation": "Even the more careful estimate falls short of what is needed.", "diagram": null },
        { "stepNumber": 10, "description": "State the conclusion.", "workingLatex": "\\text{not enough money}", "explanation": "So the payments will not raise enough; the estimate shows a shortfall of a few hundred pounds.", "diagram": null }
      ],
      "finalAnswer": "No — only about $\\pounds 4400$ is raised, less than $\\pounds 4820$"
    }
  }
];
