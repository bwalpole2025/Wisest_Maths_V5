import { Question } from "@/lib/types";

export const questions: Question[] = [
  {
    "id": "gcse.number.rounding.q001",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Rounding",
    "subtopicId": "gcse.number.rounding",
    "difficulty": "Easy",
    "marks": 1,
    "answerType": "value",
    "tags": ["rounding", "nearest 10"],
    "questionText": "Round $47$ to the nearest $10$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Identify the two tens either side.", "workingLatex": "40 \\text{ and } 50", "explanation": "The number $47$ sits between the multiples of ten $40$ and $50$.", "diagram": null },
        { "stepNumber": 2, "description": "Look at the ones digit.", "workingLatex": "47 \\to \\text{ones digit is } 7", "explanation": "The ones digit decides which ten is closer.", "diagram": null },
        { "stepNumber": 3, "description": "Recall the rounding rule.", "workingLatex": "5\\text{ or more} \\Rightarrow \\text{round up}", "explanation": "If the deciding digit is $5$ or more we round up, otherwise we round down.", "diagram": null },
        { "stepNumber": 4, "description": "Apply the rule.", "workingLatex": "7 \\geq 5 \\Rightarrow \\text{up}", "explanation": "Since $7$ is more than $5$, we round up to the next ten.", "diagram": null },
        { "stepNumber": 5, "description": "State the answer.", "workingLatex": "47 \\approx 50", "explanation": "So $47$ to the nearest ten is $50$.", "diagram": null }
      ],
      "finalAnswer": "$50$"
    }
  },
  {
    "id": "gcse.number.rounding.q002",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Rounding",
    "subtopicId": "gcse.number.rounding",
    "difficulty": "Easy",
    "marks": 1,
    "answerType": "value",
    "tags": ["rounding", "nearest 10"],
    "questionText": "Round $83$ to the nearest $10$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Identify the two tens either side.", "workingLatex": "80 \\text{ and } 90", "explanation": "The number $83$ sits between the multiples of ten $80$ and $90$.", "diagram": null },
        { "stepNumber": 2, "description": "Look at the ones digit.", "workingLatex": "83 \\to \\text{ones digit is } 3", "explanation": "The ones digit decides which ten is closer.", "diagram": null },
        { "stepNumber": 3, "description": "Recall the rounding rule.", "workingLatex": "\\text{less than } 5 \\Rightarrow \\text{round down}", "explanation": "If the deciding digit is less than $5$ we round down.", "diagram": null },
        { "stepNumber": 4, "description": "Apply the rule.", "workingLatex": "3 < 5 \\Rightarrow \\text{down}", "explanation": "Since $3$ is less than $5$, we keep the tens digit the same.", "diagram": null },
        { "stepNumber": 5, "description": "State the answer.", "workingLatex": "83 \\approx 80", "explanation": "So $83$ to the nearest ten is $80$.", "diagram": null }
      ],
      "finalAnswer": "$80$"
    }
  },
  {
    "id": "gcse.number.rounding.q003",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Rounding",
    "subtopicId": "gcse.number.rounding",
    "difficulty": "Easy",
    "marks": 1,
    "answerType": "value",
    "tags": ["rounding", "nearest 100", "rounding a 5"],
    "questionText": "Round $350$ to the nearest $100$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Identify the two hundreds either side.", "workingLatex": "300 \\text{ and } 400", "explanation": "The number $350$ sits between the multiples of one hundred $300$ and $400$.", "diagram": null },
        { "stepNumber": 2, "description": "Look at the tens digit.", "workingLatex": "350 \\to \\text{tens digit is } 5", "explanation": "When rounding to the nearest hundred, the tens digit is the decider.", "diagram": null },
        { "stepNumber": 3, "description": "Recall the rounding rule.", "workingLatex": "5\\text{ or more} \\Rightarrow \\text{round up}", "explanation": "A deciding digit of exactly $5$ rounds up by convention.", "diagram": null },
        { "stepNumber": 4, "description": "Apply the rule.", "workingLatex": "5 \\geq 5 \\Rightarrow \\text{up}", "explanation": "Since the digit is $5$, we round up to the next hundred.", "diagram": null },
        { "stepNumber": 5, "description": "State the answer.", "workingLatex": "350 \\approx 400", "explanation": "So $350$ to the nearest hundred is $400$.", "diagram": null }
      ],
      "finalAnswer": "$400$"
    }
  },
  {
    "id": "gcse.number.rounding.q004",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Rounding",
    "subtopicId": "gcse.number.rounding",
    "difficulty": "Easy",
    "marks": 1,
    "answerType": "value",
    "tags": ["rounding", "nearest 1000"],
    "questionText": "Round $6472$ to the nearest $1000$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Identify the two thousands either side.", "workingLatex": "6000 \\text{ and } 7000", "explanation": "The number $6472$ sits between the multiples of one thousand $6000$ and $7000$.", "diagram": null },
        { "stepNumber": 2, "description": "Look at the hundreds digit.", "workingLatex": "6472 \\to \\text{hundreds digit is } 4", "explanation": "When rounding to the nearest thousand, the hundreds digit is the decider.", "diagram": null },
        { "stepNumber": 3, "description": "Recall the rounding rule.", "workingLatex": "\\text{less than } 5 \\Rightarrow \\text{round down}", "explanation": "A deciding digit below $5$ means we round down.", "diagram": null },
        { "stepNumber": 4, "description": "Apply the rule.", "workingLatex": "4 < 5 \\Rightarrow \\text{down}", "explanation": "Since $4$ is less than $5$, we keep the thousands digit the same.", "diagram": null },
        { "stepNumber": 5, "description": "State the answer.", "workingLatex": "6472 \\approx 6000", "explanation": "So $6472$ to the nearest thousand is $6000$.", "diagram": null }
      ],
      "finalAnswer": "$6000$"
    }
  },
  {
    "id": "gcse.number.rounding.q005",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Rounding",
    "subtopicId": "gcse.number.rounding",
    "difficulty": "Easy",
    "marks": 1,
    "answerType": "value",
    "tags": ["rounding", "nearest 100"],
    "questionText": "Round $6472$ to the nearest $100$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Identify the two hundreds either side.", "workingLatex": "6400 \\text{ and } 6500", "explanation": "The number $6472$ sits between the multiples of one hundred $6400$ and $6500$.", "diagram": null },
        { "stepNumber": 2, "description": "Look at the tens digit.", "workingLatex": "6472 \\to \\text{tens digit is } 7", "explanation": "When rounding to the nearest hundred, the tens digit is the decider.", "diagram": null },
        { "stepNumber": 3, "description": "Recall the rounding rule.", "workingLatex": "5\\text{ or more} \\Rightarrow \\text{round up}", "explanation": "A deciding digit of $5$ or more rounds up.", "diagram": null },
        { "stepNumber": 4, "description": "Apply the rule.", "workingLatex": "7 \\geq 5 \\Rightarrow \\text{up}", "explanation": "Since $7$ is more than $5$, we round up to the next hundred.", "diagram": null },
        { "stepNumber": 5, "description": "State the answer.", "workingLatex": "6472 \\approx 6500", "explanation": "So $6472$ to the nearest hundred is $6500$.", "diagram": null }
      ],
      "finalAnswer": "$6500$"
    }
  },
  {
    "id": "gcse.number.rounding.q006",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Rounding",
    "subtopicId": "gcse.number.rounding",
    "difficulty": "Easy",
    "marks": 1,
    "answerType": "value",
    "tags": ["rounding", "nearest whole number"],
    "questionText": "Round $4.7$ to the nearest whole number.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Identify the two whole numbers either side.", "workingLatex": "4 \\text{ and } 5", "explanation": "The number $4.7$ sits between the whole numbers $4$ and $5$.", "diagram": null },
        { "stepNumber": 2, "description": "Look at the first decimal digit.", "workingLatex": "4.7 \\to \\text{tenths digit is } 7", "explanation": "The tenths digit decides which whole number is closer.", "diagram": null },
        { "stepNumber": 3, "description": "Recall the rounding rule.", "workingLatex": "5\\text{ or more} \\Rightarrow \\text{round up}", "explanation": "A deciding digit of $5$ or more rounds up.", "diagram": null },
        { "stepNumber": 4, "description": "Apply the rule.", "workingLatex": "7 \\geq 5 \\Rightarrow \\text{up}", "explanation": "Since $7$ is more than $5$, we round up to the next whole number.", "diagram": null },
        { "stepNumber": 5, "description": "State the answer.", "workingLatex": "4.7 \\approx 5", "explanation": "So $4.7$ to the nearest whole number is $5$.", "diagram": null }
      ],
      "finalAnswer": "$5$"
    }
  },
  {
    "id": "gcse.number.rounding.q007",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Rounding",
    "subtopicId": "gcse.number.rounding",
    "difficulty": "Easy",
    "marks": 1,
    "answerType": "value",
    "tags": ["rounding", "nearest whole number"],
    "questionText": "Round $12.3$ to the nearest whole number.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Identify the two whole numbers either side.", "workingLatex": "12 \\text{ and } 13", "explanation": "The number $12.3$ sits between the whole numbers $12$ and $13$.", "diagram": null },
        { "stepNumber": 2, "description": "Look at the first decimal digit.", "workingLatex": "12.3 \\to \\text{tenths digit is } 3", "explanation": "The tenths digit decides which whole number is closer.", "diagram": null },
        { "stepNumber": 3, "description": "Recall the rounding rule.", "workingLatex": "\\text{less than } 5 \\Rightarrow \\text{round down}", "explanation": "A deciding digit below $5$ means we round down.", "diagram": null },
        { "stepNumber": 4, "description": "Apply the rule.", "workingLatex": "3 < 5 \\Rightarrow \\text{down}", "explanation": "Since $3$ is less than $5$, we keep the whole number the same.", "diagram": null },
        { "stepNumber": 5, "description": "State the answer.", "workingLatex": "12.3 \\approx 12", "explanation": "So $12.3$ to the nearest whole number is $12$.", "diagram": null }
      ],
      "finalAnswer": "$12$"
    }
  },
  {
    "id": "gcse.number.rounding.q008",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Rounding",
    "subtopicId": "gcse.number.rounding",
    "difficulty": "Easy",
    "marks": 1,
    "answerType": "value",
    "tags": ["rounding", "decimal places", "1 dp"],
    "questionText": "Round $3.68$ to $1$ decimal place.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Find the first decimal place.", "workingLatex": "3.\\underline{6}8", "explanation": "The digit in the first decimal place is the $6$, which is the one we may change.", "diagram": null },
        { "stepNumber": 2, "description": "Look at the next digit.", "workingLatex": "\\text{next digit is } 8", "explanation": "The digit in the second decimal place decides the rounding.", "diagram": null },
        { "stepNumber": 3, "description": "Recall the rounding rule.", "workingLatex": "5\\text{ or more} \\Rightarrow \\text{round up}", "explanation": "A deciding digit of $5$ or more rounds up.", "diagram": null },
        { "stepNumber": 4, "description": "Apply the rule.", "workingLatex": "8 \\geq 5 \\Rightarrow 6 \\to 7", "explanation": "Since $8$ is more than $5$, the $6$ rounds up to $7$.", "diagram": null },
        { "stepNumber": 5, "description": "Write the rounded number.", "workingLatex": "3.68 \\approx 3.7", "explanation": "We drop the digits after the first decimal place.", "diagram": null },
        { "stepNumber": 6, "description": "State the answer.", "workingLatex": "3.68 \\approx 3.7", "explanation": "So $3.68$ to one decimal place is $3.7$.", "diagram": null }
      ],
      "finalAnswer": "$3.7$"
    }
  },
  {
    "id": "gcse.number.rounding.q009",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Rounding",
    "subtopicId": "gcse.number.rounding",
    "difficulty": "Easy",
    "marks": 1,
    "answerType": "value",
    "tags": ["rounding", "decimal places", "1 dp"],
    "questionText": "Round $5.42$ to $1$ decimal place.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Find the first decimal place.", "workingLatex": "5.\\underline{4}2", "explanation": "The digit in the first decimal place is the $4$.", "diagram": null },
        { "stepNumber": 2, "description": "Look at the next digit.", "workingLatex": "\\text{next digit is } 2", "explanation": "The second decimal digit decides the rounding.", "diagram": null },
        { "stepNumber": 3, "description": "Recall the rounding rule.", "workingLatex": "\\text{less than } 5 \\Rightarrow \\text{round down}", "explanation": "A deciding digit below $5$ means we round down.", "diagram": null },
        { "stepNumber": 4, "description": "Apply the rule.", "workingLatex": "2 < 5 \\Rightarrow 4 \\text{ stays}", "explanation": "Since $2$ is less than $5$, the $4$ stays the same.", "diagram": null },
        { "stepNumber": 5, "description": "Write the rounded number.", "workingLatex": "5.42 \\approx 5.4", "explanation": "We drop the digits after the first decimal place.", "diagram": null },
        { "stepNumber": 6, "description": "State the answer.", "workingLatex": "5.42 \\approx 5.4", "explanation": "So $5.42$ to one decimal place is $5.4$.", "diagram": null }
      ],
      "finalAnswer": "$5.4$"
    }
  },
  {
    "id": "gcse.number.rounding.q010",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Rounding",
    "subtopicId": "gcse.number.rounding",
    "difficulty": "Easy",
    "marks": 1,
    "answerType": "value",
    "tags": ["rounding", "decimal places", "2 dp"],
    "questionText": "Round $2.756$ to $2$ decimal places.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Find the second decimal place.", "workingLatex": "2.7\\underline{5}6", "explanation": "The digit in the second decimal place is the $5$, which is the one we may change.", "diagram": null },
        { "stepNumber": 2, "description": "Look at the next digit.", "workingLatex": "\\text{next digit is } 6", "explanation": "The third decimal digit decides the rounding.", "diagram": null },
        { "stepNumber": 3, "description": "Recall the rounding rule.", "workingLatex": "5\\text{ or more} \\Rightarrow \\text{round up}", "explanation": "A deciding digit of $5$ or more rounds up.", "diagram": null },
        { "stepNumber": 4, "description": "Apply the rule.", "workingLatex": "6 \\geq 5 \\Rightarrow 5 \\to 6", "explanation": "Since $6$ is more than $5$, the $5$ rounds up to $6$.", "diagram": null },
        { "stepNumber": 5, "description": "Write the rounded number.", "workingLatex": "2.756 \\approx 2.76", "explanation": "We drop the digits after the second decimal place.", "diagram": null },
        { "stepNumber": 6, "description": "State the answer.", "workingLatex": "2.756 \\approx 2.76", "explanation": "So $2.756$ to two decimal places is $2.76$.", "diagram": null }
      ],
      "finalAnswer": "$2.76$"
    }
  },
  {
    "id": "gcse.number.rounding.q011",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Rounding",
    "subtopicId": "gcse.number.rounding",
    "difficulty": "Easy",
    "marks": 1,
    "answerType": "value",
    "tags": ["rounding", "decimal places", "2 dp"],
    "questionText": "Round $0.834$ to $2$ decimal places.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Find the second decimal place.", "workingLatex": "0.8\\underline{3}4", "explanation": "The digit in the second decimal place is the $3$.", "diagram": null },
        { "stepNumber": 2, "description": "Look at the next digit.", "workingLatex": "\\text{next digit is } 4", "explanation": "The third decimal digit decides the rounding.", "diagram": null },
        { "stepNumber": 3, "description": "Recall the rounding rule.", "workingLatex": "\\text{less than } 5 \\Rightarrow \\text{round down}", "explanation": "A deciding digit below $5$ means we round down.", "diagram": null },
        { "stepNumber": 4, "description": "Apply the rule.", "workingLatex": "4 < 5 \\Rightarrow 3 \\text{ stays}", "explanation": "Since $4$ is less than $5$, the $3$ stays the same.", "diagram": null },
        { "stepNumber": 5, "description": "Write the rounded number.", "workingLatex": "0.834 \\approx 0.83", "explanation": "We drop the digits after the second decimal place.", "diagram": null },
        { "stepNumber": 6, "description": "State the answer.", "workingLatex": "0.834 \\approx 0.83", "explanation": "So $0.834$ to two decimal places is $0.83$.", "diagram": null }
      ],
      "finalAnswer": "$0.83$"
    }
  },
  {
    "id": "gcse.number.rounding.q012",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Rounding",
    "subtopicId": "gcse.number.rounding",
    "difficulty": "Easy",
    "marks": 1,
    "answerType": "value",
    "tags": ["rounding", "significant figures", "1 sf"],
    "questionText": "Round $486$ to $1$ significant figure.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Find the first significant figure.", "workingLatex": "\\underline{4}86", "explanation": "The first significant figure is the leftmost non-zero digit, the $4$ in the hundreds.", "diagram": null },
        { "stepNumber": 2, "description": "Look at the next digit.", "workingLatex": "\\text{next digit is } 8", "explanation": "The digit after the first significant figure decides the rounding.", "diagram": null },
        { "stepNumber": 3, "description": "Recall the rounding rule.", "workingLatex": "5\\text{ or more} \\Rightarrow \\text{round up}", "explanation": "A deciding digit of $5$ or more rounds up.", "diagram": null },
        { "stepNumber": 4, "description": "Apply the rule.", "workingLatex": "8 \\geq 5 \\Rightarrow 4 \\to 5", "explanation": "Since $8$ is more than $5$, the $4$ rounds up to $5$.", "diagram": null },
        { "stepNumber": 5, "description": "Keep the place value with zeros.", "workingLatex": "500", "explanation": "We replace the other digits with zeros to keep the number the right size.", "diagram": null },
        { "stepNumber": 6, "description": "State the answer.", "workingLatex": "486 \\approx 500", "explanation": "So $486$ to one significant figure is $500$.", "diagram": null }
      ],
      "finalAnswer": "$500$"
    }
  },
  {
    "id": "gcse.number.rounding.q013",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Rounding",
    "subtopicId": "gcse.number.rounding",
    "difficulty": "Easy",
    "marks": 1,
    "answerType": "value",
    "tags": ["rounding", "significant figures", "1 sf"],
    "questionText": "Round $27$ to $1$ significant figure.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Find the first significant figure.", "workingLatex": "\\underline{2}7", "explanation": "The first significant figure is the $2$ in the tens.", "diagram": null },
        { "stepNumber": 2, "description": "Look at the next digit.", "workingLatex": "\\text{next digit is } 7", "explanation": "The digit after the first significant figure decides the rounding.", "diagram": null },
        { "stepNumber": 3, "description": "Recall the rounding rule.", "workingLatex": "5\\text{ or more} \\Rightarrow \\text{round up}", "explanation": "A deciding digit of $5$ or more rounds up.", "diagram": null },
        { "stepNumber": 4, "description": "Apply the rule.", "workingLatex": "7 \\geq 5 \\Rightarrow 2 \\to 3", "explanation": "Since $7$ is more than $5$, the $2$ rounds up to $3$.", "diagram": null },
        { "stepNumber": 5, "description": "Keep the place value with a zero.", "workingLatex": "30", "explanation": "We replace the ones digit with a zero to keep the size correct.", "diagram": null },
        { "stepNumber": 6, "description": "State the answer.", "workingLatex": "27 \\approx 30", "explanation": "So $27$ to one significant figure is $30$.", "diagram": null }
      ],
      "finalAnswer": "$30$"
    }
  },
  {
    "id": "gcse.number.rounding.q014",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Rounding",
    "subtopicId": "gcse.number.rounding",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "value",
    "tags": ["rounding", "significant figures", "1 sf", "small decimals"],
    "questionText": "Round $0.062$ to $1$ significant figure.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Find the first significant figure.", "workingLatex": "0.0\\underline{6}2", "explanation": "Leading zeros are not significant, so the first significant figure is the $6$.", "diagram": null },
        { "stepNumber": 2, "description": "Look at the next digit.", "workingLatex": "\\text{next digit is } 2", "explanation": "The digit after the $6$ decides the rounding.", "diagram": null },
        { "stepNumber": 3, "description": "Recall the rounding rule.", "workingLatex": "\\text{less than } 5 \\Rightarrow \\text{round down}", "explanation": "A deciding digit below $5$ means we round down.", "diagram": null },
        { "stepNumber": 4, "description": "Apply the rule.", "workingLatex": "2 < 5 \\Rightarrow 6 \\text{ stays}", "explanation": "Since $2$ is less than $5$, the $6$ stays the same.", "diagram": null },
        { "stepNumber": 5, "description": "Keep the leading zeros for place value.", "workingLatex": "0.06", "explanation": "The zeros before the $6$ must stay to keep the number the right size.", "diagram": null },
        { "stepNumber": 6, "description": "State the answer.", "workingLatex": "0.062 \\approx 0.06", "explanation": "So $0.062$ to one significant figure is $0.06$.", "diagram": null }
      ],
      "finalAnswer": "$0.06$"
    }
  },
  {
    "id": "gcse.number.rounding.q015",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Rounding",
    "subtopicId": "gcse.number.rounding",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "value",
    "tags": ["rounding", "significant figures", "1 sf"],
    "questionText": "Round $3941$ to $1$ significant figure.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Find the first significant figure.", "workingLatex": "\\underline{3}941", "explanation": "The first significant figure is the $3$ in the thousands.", "diagram": null },
        { "stepNumber": 2, "description": "Look at the next digit.", "workingLatex": "\\text{next digit is } 9", "explanation": "The digit after the first significant figure decides the rounding.", "diagram": null },
        { "stepNumber": 3, "description": "Recall the rounding rule.", "workingLatex": "5\\text{ or more} \\Rightarrow \\text{round up}", "explanation": "A deciding digit of $5$ or more rounds up.", "diagram": null },
        { "stepNumber": 4, "description": "Apply the rule.", "workingLatex": "9 \\geq 5 \\Rightarrow 3 \\to 4", "explanation": "Since $9$ is more than $5$, the $3$ rounds up to $4$.", "diagram": null },
        { "stepNumber": 5, "description": "Keep the place value with zeros.", "workingLatex": "4000", "explanation": "We replace the other digits with zeros to keep the size correct.", "diagram": null },
        { "stepNumber": 6, "description": "State the answer.", "workingLatex": "3941 \\approx 4000", "explanation": "So $3941$ to one significant figure is $4000$.", "diagram": null }
      ],
      "finalAnswer": "$4000$"
    }
  },
  {
    "id": "gcse.number.rounding.q016",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Rounding",
    "subtopicId": "gcse.number.rounding",
    "difficulty": "Easy",
    "marks": 1,
    "answerType": "value",
    "tags": ["rounding", "nearest 10", "rounding a 5"],
    "questionText": "Round $55$ to the nearest $10$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Identify the two tens either side.", "workingLatex": "50 \\text{ and } 60", "explanation": "The number $55$ sits between the multiples of ten $50$ and $60$.", "diagram": null },
        { "stepNumber": 2, "description": "Look at the ones digit.", "workingLatex": "55 \\to \\text{ones digit is } 5", "explanation": "The ones digit decides the rounding.", "diagram": null },
        { "stepNumber": 3, "description": "Recall the rounding rule.", "workingLatex": "5 \\Rightarrow \\text{round up}", "explanation": "By convention a deciding digit of exactly $5$ rounds up.", "diagram": null },
        { "stepNumber": 4, "description": "Apply the rule.", "workingLatex": "5 \\geq 5 \\Rightarrow \\text{up}", "explanation": "So we round up to the next ten.", "diagram": null },
        { "stepNumber": 5, "description": "State the answer.", "workingLatex": "55 \\approx 60", "explanation": "So $55$ to the nearest ten is $60$.", "diagram": null }
      ],
      "finalAnswer": "$60$"
    }
  },
  {
    "id": "gcse.number.rounding.q017",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Rounding",
    "subtopicId": "gcse.number.rounding",
    "difficulty": "Easy",
    "marks": 1,
    "answerType": "value",
    "tags": ["rounding", "nearest 100"],
    "questionText": "Round $149$ to the nearest $100$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Identify the two hundreds either side.", "workingLatex": "100 \\text{ and } 200", "explanation": "The number $149$ sits between the multiples of one hundred $100$ and $200$.", "diagram": null },
        { "stepNumber": 2, "description": "Look at the tens digit.", "workingLatex": "149 \\to \\text{tens digit is } 4", "explanation": "When rounding to the nearest hundred, the tens digit is the decider.", "diagram": null },
        { "stepNumber": 3, "description": "Recall the rounding rule.", "workingLatex": "\\text{less than } 5 \\Rightarrow \\text{round down}", "explanation": "A deciding digit below $5$ means we round down.", "diagram": null },
        { "stepNumber": 4, "description": "Apply the rule.", "workingLatex": "4 < 5 \\Rightarrow \\text{down}", "explanation": "Since $4$ is less than $5$, we keep the hundreds digit the same.", "diagram": null },
        { "stepNumber": 5, "description": "State the answer.", "workingLatex": "149 \\approx 100", "explanation": "So $149$ to the nearest hundred is $100$.", "diagram": null }
      ],
      "finalAnswer": "$100$"
    }
  },
  {
    "id": "gcse.number.rounding.q018",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Rounding",
    "subtopicId": "gcse.number.rounding",
    "difficulty": "Easy",
    "marks": 1,
    "answerType": "value",
    "tags": ["rounding", "decimal places", "1 dp", "rounding a 5"],
    "questionText": "Round $8.35$ to $1$ decimal place.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Find the first decimal place.", "workingLatex": "8.\\underline{3}5", "explanation": "The digit in the first decimal place is the $3$.", "diagram": null },
        { "stepNumber": 2, "description": "Look at the next digit.", "workingLatex": "\\text{next digit is } 5", "explanation": "The second decimal digit decides the rounding.", "diagram": null },
        { "stepNumber": 3, "description": "Recall the rounding rule.", "workingLatex": "5 \\Rightarrow \\text{round up}", "explanation": "A deciding digit of exactly $5$ rounds up.", "diagram": null },
        { "stepNumber": 4, "description": "Apply the rule.", "workingLatex": "5 \\geq 5 \\Rightarrow 3 \\to 4", "explanation": "Since the digit is $5$, the $3$ rounds up to $4$.", "diagram": null },
        { "stepNumber": 5, "description": "Write the rounded number.", "workingLatex": "8.35 \\approx 8.4", "explanation": "We drop the digits after the first decimal place.", "diagram": null },
        { "stepNumber": 6, "description": "State the answer.", "workingLatex": "8.35 \\approx 8.4", "explanation": "So $8.35$ to one decimal place is $8.4$.", "diagram": null }
      ],
      "finalAnswer": "$8.4$"
    }
  },
  {
    "id": "gcse.number.rounding.q019",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Rounding",
    "subtopicId": "gcse.number.rounding",
    "difficulty": "Easy",
    "marks": 1,
    "answerType": "value",
    "tags": ["rounding", "nearest whole number"],
    "questionText": "Round $0.7$ to the nearest whole number.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Identify the two whole numbers either side.", "workingLatex": "0 \\text{ and } 1", "explanation": "The number $0.7$ sits between the whole numbers $0$ and $1$.", "diagram": null },
        { "stepNumber": 2, "description": "Look at the first decimal digit.", "workingLatex": "0.7 \\to \\text{tenths digit is } 7", "explanation": "The tenths digit decides which whole number is closer.", "diagram": null },
        { "stepNumber": 3, "description": "Recall the rounding rule.", "workingLatex": "5\\text{ or more} \\Rightarrow \\text{round up}", "explanation": "A deciding digit of $5$ or more rounds up.", "diagram": null },
        { "stepNumber": 4, "description": "Apply the rule.", "workingLatex": "7 \\geq 5 \\Rightarrow \\text{up}", "explanation": "Since $7$ is more than $5$, we round up to $1$.", "diagram": null },
        { "stepNumber": 5, "description": "State the answer.", "workingLatex": "0.7 \\approx 1", "explanation": "So $0.7$ to the nearest whole number is $1$.", "diagram": null }
      ],
      "finalAnswer": "$1$"
    }
  },
  {
    "id": "gcse.number.rounding.q020",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Rounding",
    "subtopicId": "gcse.number.rounding",
    "difficulty": "Easy",
    "marks": 1,
    "answerType": "value",
    "tags": ["rounding", "nearest 100", "rounding a 5"],
    "questionText": "Round $250$ to the nearest $100$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Identify the two hundreds either side.", "workingLatex": "200 \\text{ and } 300", "explanation": "The number $250$ sits between the multiples of one hundred $200$ and $300$.", "diagram": null },
        { "stepNumber": 2, "description": "Look at the tens digit.", "workingLatex": "250 \\to \\text{tens digit is } 5", "explanation": "When rounding to the nearest hundred, the tens digit is the decider.", "diagram": null },
        { "stepNumber": 3, "description": "Recall the rounding rule.", "workingLatex": "5 \\Rightarrow \\text{round up}", "explanation": "A deciding digit of exactly $5$ rounds up by convention.", "diagram": null },
        { "stepNumber": 4, "description": "Apply the rule.", "workingLatex": "5 \\geq 5 \\Rightarrow \\text{up}", "explanation": "So we round up to the next hundred.", "diagram": null },
        { "stepNumber": 5, "description": "State the answer.", "workingLatex": "250 \\approx 300", "explanation": "So $250$ to the nearest hundred is $300$.", "diagram": null }
      ],
      "finalAnswer": "$300$"
    }
  },
  {
    "id": "gcse.number.rounding.q021",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Rounding",
    "subtopicId": "gcse.number.rounding",
    "difficulty": "Easy",
    "marks": 1,
    "answerType": "value",
    "tags": ["rounding", "decimal places", "1 dp"],
    "questionText": "Round $9.81$ to $1$ decimal place.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Find the first decimal place.", "workingLatex": "9.\\underline{8}1", "explanation": "The digit in the first decimal place is the $8$.", "diagram": null },
        { "stepNumber": 2, "description": "Look at the next digit.", "workingLatex": "\\text{next digit is } 1", "explanation": "The second decimal digit decides the rounding.", "diagram": null },
        { "stepNumber": 3, "description": "Recall the rounding rule.", "workingLatex": "\\text{less than } 5 \\Rightarrow \\text{round down}", "explanation": "A deciding digit below $5$ means we round down.", "diagram": null },
        { "stepNumber": 4, "description": "Apply the rule.", "workingLatex": "1 < 5 \\Rightarrow 8 \\text{ stays}", "explanation": "Since $1$ is less than $5$, the $8$ stays the same.", "diagram": null },
        { "stepNumber": 5, "description": "Write the rounded number.", "workingLatex": "9.81 \\approx 9.8", "explanation": "We drop the digits after the first decimal place.", "diagram": null },
        { "stepNumber": 6, "description": "State the answer.", "workingLatex": "9.81 \\approx 9.8", "explanation": "So $9.81$ to one decimal place is $9.8$.", "diagram": null }
      ],
      "finalAnswer": "$9.8$"
    }
  },
  {
    "id": "gcse.number.rounding.q022",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Rounding",
    "subtopicId": "gcse.number.rounding",
    "difficulty": "Easy",
    "marks": 1,
    "answerType": "value",
    "tags": ["rounding", "nearest whole number", "rounding a 5"],
    "questionText": "Round $17.5$ to the nearest whole number.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Identify the two whole numbers either side.", "workingLatex": "17 \\text{ and } 18", "explanation": "The number $17.5$ sits between the whole numbers $17$ and $18$.", "diagram": null },
        { "stepNumber": 2, "description": "Look at the first decimal digit.", "workingLatex": "17.5 \\to \\text{tenths digit is } 5", "explanation": "The tenths digit decides the rounding.", "diagram": null },
        { "stepNumber": 3, "description": "Recall the rounding rule.", "workingLatex": "5 \\Rightarrow \\text{round up}", "explanation": "A deciding digit of exactly $5$ rounds up.", "diagram": null },
        { "stepNumber": 4, "description": "Apply the rule.", "workingLatex": "5 \\geq 5 \\Rightarrow \\text{up}", "explanation": "So we round up to $18$.", "diagram": null },
        { "stepNumber": 5, "description": "State the answer.", "workingLatex": "17.5 \\approx 18", "explanation": "So $17.5$ to the nearest whole number is $18$.", "diagram": null }
      ],
      "finalAnswer": "$18$"
    }
  },
  {
    "id": "gcse.number.rounding.q023",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Rounding",
    "subtopicId": "gcse.number.rounding",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "value",
    "tags": ["rounding", "decimal places", "2 dp", "rounding a 5"],
    "questionText": "Round $0.049$ to $2$ decimal places.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Find the second decimal place.", "workingLatex": "0.0\\underline{4}9", "explanation": "The digit in the second decimal place is the $4$.", "diagram": null },
        { "stepNumber": 2, "description": "Look at the next digit.", "workingLatex": "\\text{next digit is } 9", "explanation": "The third decimal digit decides the rounding.", "diagram": null },
        { "stepNumber": 3, "description": "Recall the rounding rule.", "workingLatex": "5\\text{ or more} \\Rightarrow \\text{round up}", "explanation": "A deciding digit of $5$ or more rounds up.", "diagram": null },
        { "stepNumber": 4, "description": "Apply the rule.", "workingLatex": "9 \\geq 5 \\Rightarrow 4 \\to 5", "explanation": "Since $9$ is more than $5$, the $4$ rounds up to $5$.", "diagram": null },
        { "stepNumber": 5, "description": "Write the rounded number.", "workingLatex": "0.049 \\approx 0.05", "explanation": "We drop the digit after the second decimal place.", "diagram": null },
        { "stepNumber": 6, "description": "State the answer.", "workingLatex": "0.049 \\approx 0.05", "explanation": "So $0.049$ to two decimal places is $0.05$.", "diagram": null }
      ],
      "finalAnswer": "$0.05$"
    }
  },
  {
    "id": "gcse.number.rounding.q024",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Rounding",
    "subtopicId": "gcse.number.rounding",
    "difficulty": "Easy",
    "marks": 1,
    "answerType": "value",
    "tags": ["rounding", "nearest 10", "rounding a 5"],
    "questionText": "Round $725$ to the nearest $10$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Identify the two tens either side.", "workingLatex": "720 \\text{ and } 730", "explanation": "The number $725$ sits between the multiples of ten $720$ and $730$.", "diagram": null },
        { "stepNumber": 2, "description": "Look at the ones digit.", "workingLatex": "725 \\to \\text{ones digit is } 5", "explanation": "The ones digit decides the rounding.", "diagram": null },
        { "stepNumber": 3, "description": "Recall the rounding rule.", "workingLatex": "5 \\Rightarrow \\text{round up}", "explanation": "A deciding digit of exactly $5$ rounds up.", "diagram": null },
        { "stepNumber": 4, "description": "Apply the rule.", "workingLatex": "5 \\geq 5 \\Rightarrow \\text{up}", "explanation": "So we round the tens digit up.", "diagram": null },
        { "stepNumber": 5, "description": "State the answer.", "workingLatex": "725 \\approx 730", "explanation": "So $725$ to the nearest ten is $730$.", "diagram": null }
      ],
      "finalAnswer": "$730$"
    }
  },
  {
    "id": "gcse.number.rounding.q025",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Rounding",
    "subtopicId": "gcse.number.rounding",
    "difficulty": "Intermediate",
    "marks": 2,
    "answerType": "value",
    "tags": ["rounding", "significant figures", "2 sf"],
    "questionText": "Round $3472$ to $2$ significant figures.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Identify the significant figures.", "workingLatex": "3, 4, 7, 2", "explanation": "In a whole number every digit is significant, read from the left.", "diagram": null },
        { "stepNumber": 2, "description": "Mark the first two significant figures.", "workingLatex": "\\underline{34}72", "explanation": "We want to keep the $3$ and the $4$; the rest will be rounded off.", "diagram": null },
        { "stepNumber": 3, "description": "Find the deciding digit.", "workingLatex": "\\text{next digit is } 7", "explanation": "The digit just after the second significant figure decides the rounding.", "diagram": null },
        { "stepNumber": 4, "description": "Recall the rule.", "workingLatex": "5\\text{ or more} \\Rightarrow \\text{round up}", "explanation": "A deciding digit of $5$ or more rounds up.", "diagram": null },
        { "stepNumber": 5, "description": "Apply the rule.", "workingLatex": "7 \\geq 5 \\Rightarrow 4 \\to 5", "explanation": "Since $7$ is more than $5$, the second figure rounds up from $4$ to $5$.", "diagram": null },
        { "stepNumber": 6, "description": "Fill the remaining places with zeros.", "workingLatex": "35\\underline{00}", "explanation": "The dropped digits become zeros so the number keeps its size in the thousands.", "diagram": null },
        { "stepNumber": 7, "description": "Write the rounded number.", "workingLatex": "3500", "explanation": "The rounded value is three thousand five hundred.", "diagram": null },
        { "stepNumber": 8, "description": "State the answer.", "workingLatex": "3472 \\approx 3500", "explanation": "So $3472$ to two significant figures is $3500$.", "diagram": null }
      ],
      "finalAnswer": "$3500$"
    }
  },
  {
    "id": "gcse.number.rounding.q026",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Rounding",
    "subtopicId": "gcse.number.rounding",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "value",
    "tags": ["rounding", "significant figures", "2 sf", "small decimals"],
    "questionText": "Round $0.03672$ to $2$ significant figures.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Find the first significant figure.", "workingLatex": "0.0\\underline{3}672", "explanation": "Leading zeros are not significant, so the first significant figure is the $3$.", "diagram": null },
        { "stepNumber": 2, "description": "Identify the second significant figure.", "workingLatex": "0.03\\underline{6}72", "explanation": "The next digit, $6$, is the second significant figure.", "diagram": null },
        { "stepNumber": 3, "description": "Find the deciding digit.", "workingLatex": "\\text{next digit is } 7", "explanation": "The digit after the second significant figure decides the rounding.", "diagram": null },
        { "stepNumber": 4, "description": "Recall the rule.", "workingLatex": "5\\text{ or more} \\Rightarrow \\text{round up}", "explanation": "A deciding digit of $5$ or more rounds up.", "diagram": null },
        { "stepNumber": 5, "description": "Apply the rule.", "workingLatex": "7 \\geq 5 \\Rightarrow 6 \\to 7", "explanation": "Since $7$ is more than $5$, the $6$ rounds up to $7$.", "diagram": null },
        { "stepNumber": 6, "description": "Keep the leading zeros.", "workingLatex": "0.037", "explanation": "The zeros before the $3$ must stay to keep the number the right size.", "diagram": null },
        { "stepNumber": 7, "description": "Check the number of significant figures.", "workingLatex": "3, 7 \\Rightarrow 2\\text{ s.f.}", "explanation": "The answer has exactly two significant figures, as required.", "diagram": null },
        { "stepNumber": 8, "description": "State the answer.", "workingLatex": "0.03672 \\approx 0.037", "explanation": "So $0.03672$ to two significant figures is $0.037$.", "diagram": null }
      ],
      "finalAnswer": "$0.037$"
    }
  },
  {
    "id": "gcse.number.rounding.q027",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Rounding",
    "subtopicId": "gcse.number.rounding",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "value",
    "tags": ["rounding", "decimal places", "1 dp", "carrying"],
    "questionText": "Round $2.98$ to $1$ decimal place.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Find the first decimal place.", "workingLatex": "2.\\underline{9}8", "explanation": "The digit in the first decimal place is the $9$.", "diagram": null },
        { "stepNumber": 2, "description": "Look at the next digit.", "workingLatex": "\\text{next digit is } 8", "explanation": "The second decimal digit decides the rounding.", "diagram": null },
        { "stepNumber": 3, "description": "Recall the rule.", "workingLatex": "5\\text{ or more} \\Rightarrow \\text{round up}", "explanation": "A deciding digit of $5$ or more rounds up.", "diagram": null },
        { "stepNumber": 4, "description": "See what happens when we round the 9 up.", "workingLatex": "9 + 1 = 10", "explanation": "Rounding the $9$ up does not give a single digit; it becomes ten and must carry.", "diagram": null },
        { "stepNumber": 5, "description": "Carry into the whole-number part.", "workingLatex": "2.9 \\to 3.0", "explanation": "The carried ten turns the $2.9$ into $3.0$.", "diagram": null },
        { "stepNumber": 6, "description": "Keep the required decimal place.", "workingLatex": "3.0", "explanation": "We must still show one decimal place, so we write $3.0$ rather than $3$.", "diagram": null },
        { "stepNumber": 7, "description": "Explain the trailing zero.", "workingLatex": "3.0 \\; (1\\text{ dp})", "explanation": "The zero shows the answer is given to one decimal place.", "diagram": null },
        { "stepNumber": 8, "description": "State the answer.", "workingLatex": "2.98 \\approx 3.0", "explanation": "So $2.98$ to one decimal place is $3.0$.", "diagram": null }
      ],
      "finalAnswer": "$3.0$"
    }
  },
  {
    "id": "gcse.number.rounding.q028",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Rounding",
    "subtopicId": "gcse.number.rounding",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "value",
    "tags": ["rounding", "decimal places", "1 dp", "carrying"],
    "questionText": "Round $19.96$ to $1$ decimal place.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Find the first decimal place.", "workingLatex": "19.\\underline{9}6", "explanation": "The digit in the first decimal place is the $9$.", "diagram": null },
        { "stepNumber": 2, "description": "Look at the next digit.", "workingLatex": "\\text{next digit is } 6", "explanation": "The second decimal digit decides the rounding.", "diagram": null },
        { "stepNumber": 3, "description": "Recall the rule.", "workingLatex": "5\\text{ or more} \\Rightarrow \\text{round up}", "explanation": "A deciding digit of $5$ or more rounds up.", "diagram": null },
        { "stepNumber": 4, "description": "Round the 9 up and carry.", "workingLatex": "9 + 1 = 10", "explanation": "The $9$ becomes ten, so a carry passes to the whole-number part.", "diagram": null },
        { "stepNumber": 5, "description": "Carry into the units.", "workingLatex": "19.9 \\to 20.0", "explanation": "The carry turns $19.9$ into $20.0$ as it cascades through the $9$ in the units.", "diagram": null },
        { "stepNumber": 6, "description": "Keep the required decimal place.", "workingLatex": "20.0", "explanation": "We show one decimal place, so the answer is $20.0$.", "diagram": null },
        { "stepNumber": 7, "description": "State the answer.", "workingLatex": "19.96 \\approx 20.0", "explanation": "So $19.96$ to one decimal place is $20.0$.", "diagram": null }
      ],
      "finalAnswer": "$20.0$"
    }
  },
  {
    "id": "gcse.number.rounding.q029",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Rounding",
    "subtopicId": "gcse.number.rounding",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "value",
    "tags": ["rounding", "decimal places", "2 dp", "carrying", "trailing zero"],
    "questionText": "Round $4.596$ to $2$ decimal places.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Find the second decimal place.", "workingLatex": "4.5\\underline{9}6", "explanation": "The digit in the second decimal place is the $9$.", "diagram": null },
        { "stepNumber": 2, "description": "Look at the next digit.", "workingLatex": "\\text{next digit is } 6", "explanation": "The third decimal digit decides the rounding.", "diagram": null },
        { "stepNumber": 3, "description": "Recall the rule.", "workingLatex": "5\\text{ or more} \\Rightarrow \\text{round up}", "explanation": "A deciding digit of $5$ or more rounds up.", "diagram": null },
        { "stepNumber": 4, "description": "Round the 9 up and carry.", "workingLatex": "9 + 1 = 10", "explanation": "The $9$ becomes ten, so a carry passes to the first decimal place.", "diagram": null },
        { "stepNumber": 5, "description": "Carry into the first decimal.", "workingLatex": "4.59 \\to 4.60", "explanation": "The $5$ becomes $6$ and the second place becomes $0$.", "diagram": null },
        { "stepNumber": 6, "description": "Keep the trailing zero.", "workingLatex": "4.60", "explanation": "We must show two decimal places, so the zero is kept.", "diagram": null },
        { "stepNumber": 7, "description": "State the answer.", "workingLatex": "4.596 \\approx 4.60", "explanation": "So $4.596$ to two decimal places is $4.60$.", "diagram": null }
      ],
      "finalAnswer": "$4.60$"
    }
  },
  {
    "id": "gcse.number.rounding.q030",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Rounding",
    "subtopicId": "gcse.number.rounding",
    "difficulty": "Intermediate",
    "marks": 2,
    "answerType": "value",
    "tags": ["rounding", "significant figures", "2 sf"],
    "questionText": "Round $8497$ to $2$ significant figures.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Mark the first two significant figures.", "workingLatex": "\\underline{84}97", "explanation": "We keep the $8$ and the $4$; the rest will be rounded off.", "diagram": null },
        { "stepNumber": 2, "description": "Find the deciding digit.", "workingLatex": "\\text{next digit is } 9", "explanation": "The digit after the second significant figure decides the rounding.", "diagram": null },
        { "stepNumber": 3, "description": "Recall the rule.", "workingLatex": "5\\text{ or more} \\Rightarrow \\text{round up}", "explanation": "A deciding digit of $5$ or more rounds up.", "diagram": null },
        { "stepNumber": 4, "description": "Apply the rule.", "workingLatex": "9 \\geq 5 \\Rightarrow 4 \\to 5", "explanation": "Since $9$ is more than $5$, the $4$ rounds up to $5$.", "diagram": null },
        { "stepNumber": 5, "description": "Fill the remaining places with zeros.", "workingLatex": "85\\underline{00}", "explanation": "The dropped digits become zeros to keep the size in the thousands.", "diagram": null },
        { "stepNumber": 6, "description": "Write the rounded number.", "workingLatex": "8500", "explanation": "The rounded value is eight thousand five hundred.", "diagram": null },
        { "stepNumber": 7, "description": "State the answer.", "workingLatex": "8497 \\approx 8500", "explanation": "So $8497$ to two significant figures is $8500$.", "diagram": null }
      ],
      "finalAnswer": "$8500$"
    }
  },
  {
    "id": "gcse.number.rounding.q031",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Rounding",
    "subtopicId": "gcse.number.rounding",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "value",
    "tags": ["rounding", "decimal places", "2 dp", "carrying"],
    "questionText": "Round $0.9963$ to $2$ decimal places.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Find the second decimal place.", "workingLatex": "0.9\\underline{9}63", "explanation": "The digit in the second decimal place is the $9$.", "diagram": null },
        { "stepNumber": 2, "description": "Look at the next digit.", "workingLatex": "\\text{next digit is } 6", "explanation": "The third decimal digit decides the rounding.", "diagram": null },
        { "stepNumber": 3, "description": "Recall the rule.", "workingLatex": "5\\text{ or more} \\Rightarrow \\text{round up}", "explanation": "A deciding digit of $5$ or more rounds up.", "diagram": null },
        { "stepNumber": 4, "description": "Round the 9 up and carry.", "workingLatex": "9 + 1 = 10", "explanation": "The second-place $9$ becomes ten and must carry.", "diagram": null },
        { "stepNumber": 5, "description": "Carry through the first decimal.", "workingLatex": "0.99 \\to 1.00", "explanation": "The carry cascades through the other $9$, turning $0.99$ into $1.00$.", "diagram": null },
        { "stepNumber": 6, "description": "Keep the trailing zeros.", "workingLatex": "1.00", "explanation": "We show two decimal places, so both zeros are kept.", "diagram": null },
        { "stepNumber": 7, "description": "State the answer.", "workingLatex": "0.9963 \\approx 1.00", "explanation": "So $0.9963$ to two decimal places is $1.00$.", "diagram": null }
      ],
      "finalAnswer": "$1.00$"
    }
  },
  {
    "id": "gcse.number.rounding.q032",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Rounding",
    "subtopicId": "gcse.number.rounding",
    "difficulty": "Intermediate",
    "marks": 2,
    "answerType": "value",
    "tags": ["rounding", "significant figures", "3 sf"],
    "questionText": "Round $45\\,678$ to $3$ significant figures.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Mark the first three significant figures.", "workingLatex": "\\underline{456}78", "explanation": "We keep the $4$, $5$ and $6$; the rest will be rounded off.", "diagram": null },
        { "stepNumber": 2, "description": "Find the deciding digit.", "workingLatex": "\\text{next digit is } 7", "explanation": "The digit after the third significant figure decides the rounding.", "diagram": null },
        { "stepNumber": 3, "description": "Recall the rule.", "workingLatex": "5\\text{ or more} \\Rightarrow \\text{round up}", "explanation": "A deciding digit of $5$ or more rounds up.", "diagram": null },
        { "stepNumber": 4, "description": "Apply the rule.", "workingLatex": "7 \\geq 5 \\Rightarrow 6 \\to 7", "explanation": "Since $7$ is more than $5$, the third figure rounds up from $6$ to $7$.", "diagram": null },
        { "stepNumber": 5, "description": "Fill the remaining places with zeros.", "workingLatex": "457\\underline{00}", "explanation": "The dropped digits become zeros to keep the size in the ten-thousands.", "diagram": null },
        { "stepNumber": 6, "description": "Write the rounded number.", "workingLatex": "45\\,700", "explanation": "The rounded value is forty-five thousand seven hundred.", "diagram": null },
        { "stepNumber": 7, "description": "State the answer.", "workingLatex": "45\\,678 \\approx 45\\,700", "explanation": "So $45\\,678$ to three significant figures is $45\\,700$.", "diagram": null }
      ],
      "finalAnswer": "$45\\,700$"
    }
  },
  {
    "id": "gcse.number.rounding.q033",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Rounding",
    "subtopicId": "gcse.number.rounding",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "value",
    "tags": ["rounding", "significant figures", "2 sf", "small decimals", "trailing zero"],
    "questionText": "Round $0.004982$ to $2$ significant figures.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Find the first significant figure.", "workingLatex": "0.00\\underline{4}982", "explanation": "Leading zeros are not significant, so the first significant figure is the $4$.", "diagram": null },
        { "stepNumber": 2, "description": "Identify the second significant figure.", "workingLatex": "0.004\\underline{9}82", "explanation": "The next digit, $9$, is the second significant figure.", "diagram": null },
        { "stepNumber": 3, "description": "Find the deciding digit.", "workingLatex": "\\text{next digit is } 8", "explanation": "The digit after the second significant figure decides the rounding.", "diagram": null },
        { "stepNumber": 4, "description": "Round the 9 up and carry.", "workingLatex": "9 + 1 = 10", "explanation": "Since $8 \\geq 5$, the $9$ rounds up and must carry.", "diagram": null },
        { "stepNumber": 5, "description": "Carry into the previous figure.", "workingLatex": "0.0049 \\to 0.0050", "explanation": "The carry turns the $49$ into $50$.", "diagram": null },
        { "stepNumber": 6, "description": "Keep the trailing zero.", "workingLatex": "0.0050", "explanation": "The final zero is significant here, showing two significant figures.", "diagram": null },
        { "stepNumber": 7, "description": "State the answer.", "workingLatex": "0.004982 \\approx 0.0050", "explanation": "So $0.004982$ to two significant figures is $0.0050$.", "diagram": null }
      ],
      "finalAnswer": "$0.0050$"
    }
  },
  {
    "id": "gcse.number.rounding.q034",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Rounding",
    "subtopicId": "gcse.number.rounding",
    "difficulty": "Intermediate",
    "marks": 2,
    "answerType": "value",
    "tags": ["rounding", "significant figures", "2 sf"],
    "questionText": "Round $149.6$ to $2$ significant figures.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Mark the first two significant figures.", "workingLatex": "\\underline{14}9.6", "explanation": "We keep the $1$ and the $4$; the rest will be rounded off.", "diagram": null },
        { "stepNumber": 2, "description": "Find the deciding digit.", "workingLatex": "\\text{next digit is } 9", "explanation": "The digit after the second significant figure is the $9$ in the units.", "diagram": null },
        { "stepNumber": 3, "description": "Recall the rule.", "workingLatex": "5\\text{ or more} \\Rightarrow \\text{round up}", "explanation": "A deciding digit of $5$ or more rounds up.", "diagram": null },
        { "stepNumber": 4, "description": "Apply the rule.", "workingLatex": "9 \\geq 5 \\Rightarrow 4 \\to 5", "explanation": "Since $9$ is more than $5$, the $4$ rounds up to $5$.", "diagram": null },
        { "stepNumber": 5, "description": "Fill the place value with a zero.", "workingLatex": "150", "explanation": "The units digit becomes a zero, and the decimal part is dropped.", "diagram": null },
        { "stepNumber": 6, "description": "State the answer.", "workingLatex": "149.6 \\approx 150", "explanation": "So $149.6$ to two significant figures is $150$.", "diagram": null }
      ],
      "finalAnswer": "$150$"
    }
  },
  {
    "id": "gcse.number.rounding.q035",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Rounding",
    "subtopicId": "gcse.number.rounding",
    "difficulty": "Intermediate",
    "marks": 2,
    "answerType": "value",
    "tags": ["rounding", "decimal places", "2 dp"],
    "questionText": "Round $7.049$ to $2$ decimal places.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Find the second decimal place.", "workingLatex": "7.0\\underline{4}9", "explanation": "The digit in the second decimal place is the $4$.", "diagram": null },
        { "stepNumber": 2, "description": "Look at the next digit.", "workingLatex": "\\text{next digit is } 9", "explanation": "The third decimal digit decides the rounding.", "diagram": null },
        { "stepNumber": 3, "description": "Recall the rule.", "workingLatex": "5\\text{ or more} \\Rightarrow \\text{round up}", "explanation": "A deciding digit of $5$ or more rounds up.", "diagram": null },
        { "stepNumber": 4, "description": "Apply the rule.", "workingLatex": "9 \\geq 5 \\Rightarrow 4 \\to 5", "explanation": "Since $9$ is more than $5$, the $4$ rounds up to $5$.", "diagram": null },
        { "stepNumber": 5, "description": "Write the rounded number.", "workingLatex": "7.049 \\approx 7.05", "explanation": "We drop the digit after the second decimal place.", "diagram": null },
        { "stepNumber": 6, "description": "State the answer.", "workingLatex": "7.049 \\approx 7.05", "explanation": "So $7.049$ to two decimal places is $7.05$.", "diagram": null }
      ],
      "finalAnswer": "$7.05$"
    }
  },
  {
    "id": "gcse.number.rounding.q036",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Rounding",
    "subtopicId": "gcse.number.rounding",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "value",
    "tags": ["rounding", "significant figures", "2 sf", "carrying"],
    "questionText": "Round $12\\,963$ to $2$ significant figures.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Mark the first two significant figures.", "workingLatex": "\\underline{12}963", "explanation": "We keep the $1$ and the $2$; the rest will be rounded off.", "diagram": null },
        { "stepNumber": 2, "description": "Find the deciding digit.", "workingLatex": "\\text{next digit is } 9", "explanation": "The digit after the second significant figure decides the rounding.", "diagram": null },
        { "stepNumber": 3, "description": "Recall the rule.", "workingLatex": "5\\text{ or more} \\Rightarrow \\text{round up}", "explanation": "A deciding digit of $5$ or more rounds up.", "diagram": null },
        { "stepNumber": 4, "description": "Apply the rule.", "workingLatex": "9 \\geq 5 \\Rightarrow 12 \\to 13", "explanation": "The second figure $2$ rounds up to $3$.", "diagram": null },
        { "stepNumber": 5, "description": "Fill the remaining places with zeros.", "workingLatex": "13\\underline{000}", "explanation": "The dropped digits become zeros to keep the size in the thousands.", "diagram": null },
        { "stepNumber": 6, "description": "Write the rounded number.", "workingLatex": "13\\,000", "explanation": "The rounded value is thirteen thousand.", "diagram": null },
        { "stepNumber": 7, "description": "State the answer.", "workingLatex": "12\\,963 \\approx 13\\,000", "explanation": "So $12\\,963$ to two significant figures is $13\\,000$.", "diagram": null }
      ],
      "finalAnswer": "$13\\,000$"
    }
  },
  {
    "id": "gcse.number.rounding.q037",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Rounding",
    "subtopicId": "gcse.number.rounding",
    "difficulty": "Intermediate",
    "marks": 2,
    "answerType": "value",
    "tags": ["rounding", "decimal places", "3 dp"],
    "questionText": "Round $0.6049$ to $3$ decimal places.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Find the third decimal place.", "workingLatex": "0.60\\underline{4}9", "explanation": "The digit in the third decimal place is the $4$.", "diagram": null },
        { "stepNumber": 2, "description": "Look at the next digit.", "workingLatex": "\\text{next digit is } 9", "explanation": "The fourth decimal digit decides the rounding.", "diagram": null },
        { "stepNumber": 3, "description": "Recall the rule.", "workingLatex": "5\\text{ or more} \\Rightarrow \\text{round up}", "explanation": "A deciding digit of $5$ or more rounds up.", "diagram": null },
        { "stepNumber": 4, "description": "Apply the rule.", "workingLatex": "9 \\geq 5 \\Rightarrow 4 \\to 5", "explanation": "Since $9$ is more than $5$, the $4$ rounds up to $5$.", "diagram": null },
        { "stepNumber": 5, "description": "Write the rounded number.", "workingLatex": "0.6049 \\approx 0.605", "explanation": "We drop the digit after the third decimal place.", "diagram": null },
        { "stepNumber": 6, "description": "State the answer.", "workingLatex": "0.6049 \\approx 0.605", "explanation": "So $0.6049$ to three decimal places is $0.605$.", "diagram": null }
      ],
      "finalAnswer": "$0.605$"
    }
  },
  {
    "id": "gcse.number.rounding.q038",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Rounding",
    "subtopicId": "gcse.number.rounding",
    "difficulty": "Intermediate",
    "marks": 2,
    "answerType": "value",
    "tags": ["rounding", "decimal places", "3 dp"],
    "questionText": "Round $2.0475$ to $3$ decimal places.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Find the third decimal place.", "workingLatex": "2.04\\underline{7}5", "explanation": "The digit in the third decimal place is the $7$.", "diagram": null },
        { "stepNumber": 2, "description": "Look at the next digit.", "workingLatex": "\\text{next digit is } 5", "explanation": "The fourth decimal digit decides the rounding.", "diagram": null },
        { "stepNumber": 3, "description": "Recall the rule.", "workingLatex": "5 \\Rightarrow \\text{round up}", "explanation": "A deciding digit of exactly $5$ rounds up.", "diagram": null },
        { "stepNumber": 4, "description": "Apply the rule.", "workingLatex": "5 \\geq 5 \\Rightarrow 7 \\to 8", "explanation": "So the $7$ rounds up to $8$.", "diagram": null },
        { "stepNumber": 5, "description": "Write the rounded number.", "workingLatex": "2.0475 \\approx 2.048", "explanation": "We drop the digit after the third decimal place.", "diagram": null },
        { "stepNumber": 6, "description": "State the answer.", "workingLatex": "2.0475 \\approx 2.048", "explanation": "So $2.0475$ to three decimal places is $2.048$.", "diagram": null }
      ],
      "finalAnswer": "$2.048$"
    }
  },
  {
    "id": "gcse.number.rounding.q039",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Rounding",
    "subtopicId": "gcse.number.rounding",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "value",
    "tags": ["rounding", "nearest whole number", "carrying"],
    "questionText": "Round $999.7$ to the nearest whole number.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Look at the first decimal digit.", "workingLatex": "999.\\underline{7}", "explanation": "The tenths digit decides whether we round up.", "diagram": null },
        { "stepNumber": 2, "description": "Recall the rule.", "workingLatex": "5\\text{ or more} \\Rightarrow \\text{round up}", "explanation": "A deciding digit of $5$ or more rounds up.", "diagram": null },
        { "stepNumber": 3, "description": "Decide to round up.", "workingLatex": "7 \\geq 5 \\Rightarrow \\text{up}", "explanation": "Since $7$ is more than $5$, we round the whole-number part up.", "diagram": null },
        { "stepNumber": 4, "description": "Add one to the units.", "workingLatex": "999 + 1 = 1000", "explanation": "Adding one to $999$ carries all the way through the nines.", "diagram": null },
        { "stepNumber": 5, "description": "Explain the cascade.", "workingLatex": "999 \\to 1000", "explanation": "Each $9$ becomes $0$ and the carry moves left, giving a new thousands digit.", "diagram": null },
        { "stepNumber": 6, "description": "State the answer.", "workingLatex": "999.7 \\approx 1000", "explanation": "So $999.7$ to the nearest whole number is $1000$.", "diagram": null }
      ],
      "finalAnswer": "$1000$"
    }
  },
  {
    "id": "gcse.number.rounding.q040",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Rounding",
    "subtopicId": "gcse.number.rounding",
    "difficulty": "Intermediate",
    "marks": 2,
    "answerType": "value",
    "tags": ["rounding", "significant figures", "2 sf", "rounding a 5"],
    "questionText": "Round $34\\,500$ to $2$ significant figures.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Mark the first two significant figures.", "workingLatex": "\\underline{34}\\,500", "explanation": "We keep the $3$ and the $4$; the rest will be rounded off.", "diagram": null },
        { "stepNumber": 2, "description": "Find the deciding digit.", "workingLatex": "\\text{next digit is } 5", "explanation": "The digit after the second significant figure decides the rounding.", "diagram": null },
        { "stepNumber": 3, "description": "Recall the rule.", "workingLatex": "5 \\Rightarrow \\text{round up}", "explanation": "A deciding digit of exactly $5$ rounds up by convention.", "diagram": null },
        { "stepNumber": 4, "description": "Apply the rule.", "workingLatex": "5 \\geq 5 \\Rightarrow 4 \\to 5", "explanation": "So the second figure rounds up from $4$ to $5$.", "diagram": null },
        { "stepNumber": 5, "description": "Fill the remaining places with zeros.", "workingLatex": "35\\,000", "explanation": "The dropped digits become zeros to keep the size in the ten-thousands.", "diagram": null },
        { "stepNumber": 6, "description": "State the answer.", "workingLatex": "34\\,500 \\approx 35\\,000", "explanation": "So $34\\,500$ to two significant figures is $35\\,000$.", "diagram": null }
      ],
      "finalAnswer": "$35\\,000$"
    }
  },
  {
    "id": "gcse.number.rounding.q041",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Rounding",
    "subtopicId": "gcse.number.rounding",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "value",
    "tags": ["rounding", "significant figures", "3 sf", "small decimals"],
    "questionText": "Round $0.08351$ to $3$ significant figures.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Find the first significant figure.", "workingLatex": "0.0\\underline{8}351", "explanation": "Leading zeros are not significant, so the first significant figure is the $8$.", "diagram": null },
        { "stepNumber": 2, "description": "Identify the first three significant figures.", "workingLatex": "8, 3, 5", "explanation": "The three significant figures are $8$, $3$ and $5$.", "diagram": null },
        { "stepNumber": 3, "description": "Find the deciding digit.", "workingLatex": "\\text{next digit is } 1", "explanation": "The digit after the third significant figure decides the rounding.", "diagram": null },
        { "stepNumber": 4, "description": "Recall the rule.", "workingLatex": "\\text{less than } 5 \\Rightarrow \\text{round down}", "explanation": "A deciding digit below $5$ means we round down.", "diagram": null },
        { "stepNumber": 5, "description": "Apply the rule.", "workingLatex": "1 < 5 \\Rightarrow 5 \\text{ stays}", "explanation": "Since $1$ is less than $5$, the third figure stays the same.", "diagram": null },
        { "stepNumber": 6, "description": "Keep the leading zeros.", "workingLatex": "0.0835", "explanation": "The zeros before the $8$ keep the number the right size.", "diagram": null },
        { "stepNumber": 7, "description": "State the answer.", "workingLatex": "0.08351 \\approx 0.0835", "explanation": "So $0.08351$ to three significant figures is $0.0835$.", "diagram": null }
      ],
      "finalAnswer": "$0.0835$"
    }
  },
  {
    "id": "gcse.number.rounding.q042",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Rounding",
    "subtopicId": "gcse.number.rounding",
    "difficulty": "Intermediate",
    "marks": 2,
    "answerType": "value",
    "tags": ["rounding", "decimal places", "1 dp"],
    "questionText": "Round $56.749$ to $1$ decimal place.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Find the first decimal place.", "workingLatex": "56.\\underline{7}49", "explanation": "The digit in the first decimal place is the $7$.", "diagram": null },
        { "stepNumber": 2, "description": "Look at the next digit only.", "workingLatex": "\\text{next digit is } 4", "explanation": "Only the second decimal digit decides the rounding; the later digits do not matter.", "diagram": null },
        { "stepNumber": 3, "description": "Recall the rule.", "workingLatex": "\\text{less than } 5 \\Rightarrow \\text{round down}", "explanation": "A deciding digit below $5$ means we round down.", "diagram": null },
        { "stepNumber": 4, "description": "Apply the rule.", "workingLatex": "4 < 5 \\Rightarrow 7 \\text{ stays}", "explanation": "Since $4$ is less than $5$, the $7$ stays the same.", "diagram": null },
        { "stepNumber": 5, "description": "Warn about the trap.", "workingLatex": "\\text{ignore the } 9", "explanation": "It is a common mistake to look at the $9$; we only use the digit immediately after the rounding place.", "diagram": null },
        { "stepNumber": 6, "description": "Write the rounded number.", "workingLatex": "56.749 \\approx 56.7", "explanation": "We drop the digits after the first decimal place.", "diagram": null },
        { "stepNumber": 7, "description": "State the answer.", "workingLatex": "56.749 \\approx 56.7", "explanation": "So $56.749$ to one decimal place is $56.7$.", "diagram": null }
      ],
      "finalAnswer": "$56.7$"
    }
  },
  {
    "id": "gcse.number.rounding.q043",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Rounding",
    "subtopicId": "gcse.number.rounding",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "value",
    "tags": ["rounding", "significant figures", "3 sf", "carrying"],
    "questionText": "Round $89\\,950$ to $3$ significant figures.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Mark the first three significant figures.", "workingLatex": "\\underline{899}50", "explanation": "We keep the $8$, $9$ and $9$; the rest will be rounded off.", "diagram": null },
        { "stepNumber": 2, "description": "Find the deciding digit.", "workingLatex": "\\text{next digit is } 5", "explanation": "The digit after the third significant figure decides the rounding.", "diagram": null },
        { "stepNumber": 3, "description": "Decide to round up.", "workingLatex": "5 \\geq 5 \\Rightarrow \\text{up}", "explanation": "A deciding digit of $5$ rounds up.", "diagram": null },
        { "stepNumber": 4, "description": "Round the last kept figure up.", "workingLatex": "899 + 1 = 900", "explanation": "Adding one to $899$ carries through both nines.", "diagram": null },
        { "stepNumber": 5, "description": "Track the cascade.", "workingLatex": "899 \\to 900", "explanation": "The two nines become zeros and the $8$ becomes $9$.", "diagram": null },
        { "stepNumber": 6, "description": "Fill the remaining places with zeros.", "workingLatex": "90\\,000", "explanation": "The dropped digits become zeros to keep the size.", "diagram": null },
        { "stepNumber": 7, "description": "State the answer.", "workingLatex": "89\\,950 \\approx 90\\,000", "explanation": "So $89\\,950$ to three significant figures is $90\\,000$.", "diagram": null }
      ],
      "finalAnswer": "$90\\,000$"
    }
  },
  {
    "id": "gcse.number.rounding.q044",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Rounding",
    "subtopicId": "gcse.number.rounding",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "value",
    "tags": ["rounding", "decimal places", "calculate then round"],
    "questionText": "Work out $47.3 \\div 6$ and give your answer to $2$ decimal places.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Set up the division.", "workingLatex": "47.3 \\div 6", "explanation": "We first carry out the division as far as three decimal places so we can round.", "diagram": null },
        { "stepNumber": 2, "description": "Divide to enough decimal places.", "workingLatex": "47.3 \\div 6 = 7.8833\\ldots", "explanation": "The division gives a recurring decimal starting $7.8833$.", "diagram": null },
        { "stepNumber": 3, "description": "Find the second decimal place.", "workingLatex": "7.8\\underline{8}33", "explanation": "The digit in the second decimal place is the $8$.", "diagram": null },
        { "stepNumber": 4, "description": "Look at the next digit.", "workingLatex": "\\text{next digit is } 3", "explanation": "The third decimal digit decides the rounding.", "diagram": null },
        { "stepNumber": 5, "description": "Recall the rule.", "workingLatex": "\\text{less than } 5 \\Rightarrow \\text{round down}", "explanation": "A deciding digit below $5$ means we round down.", "diagram": null },
        { "stepNumber": 6, "description": "Apply the rule.", "workingLatex": "3 < 5 \\Rightarrow 8 \\text{ stays}", "explanation": "Since $3$ is less than $5$, the second-place $8$ stays the same.", "diagram": null },
        { "stepNumber": 7, "description": "Write the rounded number.", "workingLatex": "7.8833\\ldots \\approx 7.88", "explanation": "We keep two decimal places.", "diagram": null },
        { "stepNumber": 8, "description": "State the answer.", "workingLatex": "47.3 \\div 6 \\approx 7.88", "explanation": "So the answer to two decimal places is $7.88$.", "diagram": null }
      ],
      "finalAnswer": "$7.88$"
    }
  },
  {
    "id": "gcse.number.rounding.q045",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Rounding",
    "subtopicId": "gcse.number.rounding",
    "difficulty": "Intermediate",
    "marks": 2,
    "answerType": "value",
    "tags": ["rounding", "significant figures", "3 sf"],
    "questionText": "Round $3.14159$ to $3$ significant figures.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Identify the first three significant figures.", "workingLatex": "\\underline{3.14}159", "explanation": "The three significant figures are $3$, $1$ and $4$.", "diagram": null },
        { "stepNumber": 2, "description": "Find the deciding digit.", "workingLatex": "\\text{next digit is } 1", "explanation": "The digit after the third significant figure decides the rounding.", "diagram": null },
        { "stepNumber": 3, "description": "Recall the rule.", "workingLatex": "\\text{less than } 5 \\Rightarrow \\text{round down}", "explanation": "A deciding digit below $5$ means we round down.", "diagram": null },
        { "stepNumber": 4, "description": "Apply the rule.", "workingLatex": "1 < 5 \\Rightarrow 4 \\text{ stays}", "explanation": "Since $1$ is less than $5$, the $4$ stays the same.", "diagram": null },
        { "stepNumber": 5, "description": "Write the rounded number.", "workingLatex": "3.14159 \\approx 3.14", "explanation": "We keep three significant figures.", "diagram": null },
        { "stepNumber": 6, "description": "State the answer.", "workingLatex": "3.14159 \\approx 3.14", "explanation": "So $3.14159$ to three significant figures is $3.14$.", "diagram": null }
      ],
      "finalAnswer": "$3.14$"
    }
  },
  {
    "id": "gcse.number.rounding.q046",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Rounding",
    "subtopicId": "gcse.number.rounding",
    "difficulty": "Intermediate",
    "marks": 2,
    "answerType": "value",
    "tags": ["rounding", "decimal places", "4 dp"],
    "questionText": "Round $3.14159$ to $4$ decimal places.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Find the fourth decimal place.", "workingLatex": "3.141\\underline{5}9", "explanation": "The digit in the fourth decimal place is the $5$.", "diagram": null },
        { "stepNumber": 2, "description": "Look at the next digit.", "workingLatex": "\\text{next digit is } 9", "explanation": "The fifth decimal digit decides the rounding.", "diagram": null },
        { "stepNumber": 3, "description": "Recall the rule.", "workingLatex": "5\\text{ or more} \\Rightarrow \\text{round up}", "explanation": "A deciding digit of $5$ or more rounds up.", "diagram": null },
        { "stepNumber": 4, "description": "Apply the rule.", "workingLatex": "9 \\geq 5 \\Rightarrow 5 \\to 6", "explanation": "Since $9$ is more than $5$, the $5$ rounds up to $6$.", "diagram": null },
        { "stepNumber": 5, "description": "Write the rounded number.", "workingLatex": "3.14159 \\approx 3.1416", "explanation": "We keep four decimal places.", "diagram": null },
        { "stepNumber": 6, "description": "State the answer.", "workingLatex": "3.14159 \\approx 3.1416", "explanation": "So $3.14159$ to four decimal places is $3.1416$.", "diagram": null }
      ],
      "finalAnswer": "$3.1416$"
    }
  },
  {
    "id": "gcse.number.rounding.q047",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Rounding",
    "subtopicId": "gcse.number.rounding",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "value",
    "tags": ["rounding", "decimal places", "2 dp", "carrying"],
    "questionText": "Round $0.0299$ to $2$ decimal places.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Find the second decimal place.", "workingLatex": "0.0\\underline{2}99", "explanation": "The digit in the second decimal place is the $2$.", "diagram": null },
        { "stepNumber": 2, "description": "Look at the next digit.", "workingLatex": "\\text{next digit is } 9", "explanation": "The third decimal digit decides the rounding.", "diagram": null },
        { "stepNumber": 3, "description": "Recall the rule.", "workingLatex": "5\\text{ or more} \\Rightarrow \\text{round up}", "explanation": "A deciding digit of $5$ or more rounds up.", "diagram": null },
        { "stepNumber": 4, "description": "Apply the rule.", "workingLatex": "9 \\geq 5 \\Rightarrow 2 \\to 3", "explanation": "Since $9$ is more than $5$, the $2$ rounds up to $3$.", "diagram": null },
        { "stepNumber": 5, "description": "Write the rounded number.", "workingLatex": "0.0299 \\approx 0.03", "explanation": "We keep two decimal places, dropping the later digits.", "diagram": null },
        { "stepNumber": 6, "description": "State the answer.", "workingLatex": "0.0299 \\approx 0.03", "explanation": "So $0.0299$ to two decimal places is $0.03$.", "diagram": null }
      ],
      "finalAnswer": "$0.03$"
    }
  },
  {
    "id": "gcse.number.rounding.q048",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Rounding",
    "subtopicId": "gcse.number.rounding",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "value",
    "tags": ["rounding", "decimal places", "2 dp", "carrying"],
    "questionText": "Round $6.998$ to $2$ decimal places.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Find the second decimal place.", "workingLatex": "6.9\\underline{9}8", "explanation": "The digit in the second decimal place is the $9$.", "diagram": null },
        { "stepNumber": 2, "description": "Look at the next digit.", "workingLatex": "\\text{next digit is } 8", "explanation": "The third decimal digit decides the rounding.", "diagram": null },
        { "stepNumber": 3, "description": "Round the 9 up and carry.", "workingLatex": "9 + 1 = 10", "explanation": "Since $8 \\geq 5$, the $9$ rounds up and must carry.", "diagram": null },
        { "stepNumber": 4, "description": "Cascade the carry.", "workingLatex": "6.99 \\to 7.00", "explanation": "The carry passes through the other $9$ and turns $6.99$ into $7.00$.", "diagram": null },
        { "stepNumber": 5, "description": "Keep the trailing zeros.", "workingLatex": "7.00", "explanation": "We must show two decimal places, so both zeros are kept.", "diagram": null },
        { "stepNumber": 6, "description": "State the answer.", "workingLatex": "6.998 \\approx 7.00", "explanation": "So $6.998$ to two decimal places is $7.00$.", "diagram": null }
      ],
      "finalAnswer": "$7.00$"
    }
  },
  {
    "id": "gcse.number.rounding.q049",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Rounding",
    "subtopicId": "gcse.number.rounding",
    "difficulty": "Intermediate",
    "marks": 2,
    "answerType": "value",
    "tags": ["rounding", "significant figures", "2 sf", "rounding a 5"],
    "questionText": "Round $725$ to $2$ significant figures.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Mark the first two significant figures.", "workingLatex": "\\underline{72}5", "explanation": "We keep the $7$ and the $2$; the last digit will be rounded off.", "diagram": null },
        { "stepNumber": 2, "description": "Find the deciding digit.", "workingLatex": "\\text{next digit is } 5", "explanation": "The ones digit decides the rounding.", "diagram": null },
        { "stepNumber": 3, "description": "Recall the rule.", "workingLatex": "5 \\Rightarrow \\text{round up}", "explanation": "A deciding digit of exactly $5$ rounds up.", "diagram": null },
        { "stepNumber": 4, "description": "Apply the rule.", "workingLatex": "5 \\geq 5 \\Rightarrow 2 \\to 3", "explanation": "So the second figure rounds up from $2$ to $3$.", "diagram": null },
        { "stepNumber": 5, "description": "Fill the place value with a zero.", "workingLatex": "730", "explanation": "The ones digit becomes a zero to keep the size in the hundreds.", "diagram": null },
        { "stepNumber": 6, "description": "State the answer.", "workingLatex": "725 \\approx 730", "explanation": "So $725$ to two significant figures is $730$.", "diagram": null }
      ],
      "finalAnswer": "$730$"
    }
  },
  {
    "id": "gcse.number.rounding.q050",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Rounding",
    "subtopicId": "gcse.number.rounding",
    "difficulty": "Intermediate",
    "marks": 2,
    "answerType": "value",
    "tags": ["rounding", "decimal places", "2 dp", "rounding a 5"],
    "questionText": "Round $12.345$ to $2$ decimal places.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Find the second decimal place.", "workingLatex": "12.3\\underline{4}5", "explanation": "The digit in the second decimal place is the $4$.", "diagram": null },
        { "stepNumber": 2, "description": "Look at the next digit.", "workingLatex": "\\text{next digit is } 5", "explanation": "The third decimal digit decides the rounding.", "diagram": null },
        { "stepNumber": 3, "description": "Recall the rule.", "workingLatex": "5 \\Rightarrow \\text{round up}", "explanation": "A deciding digit of exactly $5$ rounds up.", "diagram": null },
        { "stepNumber": 4, "description": "Apply the rule.", "workingLatex": "5 \\geq 5 \\Rightarrow 4 \\to 5", "explanation": "So the $4$ rounds up to $5$.", "diagram": null },
        { "stepNumber": 5, "description": "Write the rounded number.", "workingLatex": "12.345 \\approx 12.35", "explanation": "We keep two decimal places.", "diagram": null },
        { "stepNumber": 6, "description": "State the answer.", "workingLatex": "12.345 \\approx 12.35", "explanation": "So $12.345$ to two decimal places is $12.35$.", "diagram": null }
      ],
      "finalAnswer": "$12.35$"
    }
  },
  {
    "id": "gcse.number.rounding.q051",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Rounding",
    "subtopicId": "gcse.number.rounding",
    "difficulty": "Hard",
    "marks": 4,
    "answerType": "value",
    "tags": ["rounding", "context", "rounding up", "problem solving"],
    "questionText": "$84$ people need to travel by minibus. Each minibus holds $15$ people. How many minibuses are needed?",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Set up the division.", "workingLatex": "84 \\div 15", "explanation": "We divide the number of people by the seats per minibus.", "diagram": null },
        { "stepNumber": 2, "description": "Work out the division.", "workingLatex": "84 \\div 15 = 5.6", "explanation": "The calculation gives $5.6$ minibuses.", "diagram": null },
        { "stepNumber": 3, "description": "Interpret the decimal.", "workingLatex": "5.6 \\text{ minibuses}", "explanation": "You cannot have part of a minibus, so this must become a whole number.", "diagram": null },
        { "stepNumber": 4, "description": "Consider rounding down.", "workingLatex": "5 \\times 15 = 75 < 84", "explanation": "Five minibuses only seat $75$ people, leaving nine without a seat.", "diagram": null },
        { "stepNumber": 5, "description": "Decide to round up.", "workingLatex": "5.6 \\to 6", "explanation": "To fit everyone we must round up, even though the decimal is only $0.6$.", "diagram": null },
        { "stepNumber": 6, "description": "Check six minibuses is enough.", "workingLatex": "6 \\times 15 = 90 \\geq 84", "explanation": "Six minibuses seat ninety people, which is enough for all $84$.", "diagram": null },
        { "stepNumber": 7, "description": "State the answer.", "workingLatex": "6 \\text{ minibuses}", "explanation": "So $6$ minibuses are needed.", "diagram": null }
      ],
      "finalAnswer": "$6$ minibuses"
    }
  },
  {
    "id": "gcse.number.rounding.q052",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Rounding",
    "subtopicId": "gcse.number.rounding",
    "difficulty": "Hard",
    "marks": 4,
    "answerType": "money",
    "tags": ["rounding", "context", "money", "nearest penny"],
    "questionText": "A prize of $\\pounds 100$ is shared equally between $7$ people. How much does each person get, to the nearest penny?",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Set up the division.", "workingLatex": "100 \\div 7", "explanation": "We divide the prize equally between the seven people.", "diagram": null },
        { "stepNumber": 2, "description": "Carry out the division.", "workingLatex": "100 \\div 7 = 14.2857\\ldots", "explanation": "The result is a recurring decimal.", "diagram": null },
        { "stepNumber": 3, "description": "Recognise money is to 2 dp.", "workingLatex": "\\text{pence} = 2\\text{ dp}", "explanation": "The nearest penny means rounding to two decimal places.", "diagram": null },
        { "stepNumber": 4, "description": "Find the second decimal place.", "workingLatex": "14.2\\underline{8}57", "explanation": "The digit in the second decimal place is the $8$.", "diagram": null },
        { "stepNumber": 5, "description": "Look at the next digit.", "workingLatex": "\\text{next digit is } 5", "explanation": "The third decimal digit decides the rounding.", "diagram": null },
        { "stepNumber": 6, "description": "Apply the rounding rule.", "workingLatex": "5 \\geq 5 \\Rightarrow 8 \\to 9", "explanation": "Since the deciding digit is $5$, the $8$ rounds up to $9$.", "diagram": null },
        { "stepNumber": 7, "description": "Write the money.", "workingLatex": "14.2857\\ldots \\approx \\pounds 14.29", "explanation": "Rounded to the nearest penny each share is $\\pounds 14.29$.", "diagram": null },
        { "stepNumber": 8, "description": "Note the rounding does not reduce the total exactly.", "workingLatex": "7 \\times 14.29 = 100.03", "explanation": "Because of rounding, the amounts add to slightly more than $\\pounds 100$; the nearest-penny value is still $\\pounds 14.29$.", "diagram": null },
        { "stepNumber": 9, "description": "State the answer.", "workingLatex": "\\pounds 14.29", "explanation": "So each person gets $\\pounds 14.29$ to the nearest penny.", "diagram": null }
      ],
      "finalAnswer": "$\\pounds 14.29$"
    }
  },
  {
    "id": "gcse.number.rounding.q053",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Rounding",
    "subtopicId": "gcse.number.rounding",
    "difficulty": "Hard",
    "marks": 4,
    "answerType": "value",
    "tags": ["rounding", "decimal places", "2 dp", "carrying"],
    "questionText": "Round $4.2985$ to $2$ decimal places.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Find the second decimal place.", "workingLatex": "4.2\\underline{9}85", "explanation": "The digit in the second decimal place is the $9$.", "diagram": null },
        { "stepNumber": 2, "description": "Look at the next digit.", "workingLatex": "\\text{next digit is } 8", "explanation": "The third decimal digit decides the rounding.", "diagram": null },
        { "stepNumber": 3, "description": "Round the 9 up.", "workingLatex": "8 \\geq 5 \\Rightarrow 9 + 1 = 10", "explanation": "Since $8 \\geq 5$ the $9$ rounds up and must carry.", "diagram": null },
        { "stepNumber": 4, "description": "Carry into the first decimal.", "workingLatex": "4.29 \\to 4.30", "explanation": "The carry turns the $2$ into $3$ and the second place into $0$.", "diagram": null },
        { "stepNumber": 5, "description": "Keep the trailing zero.", "workingLatex": "4.30", "explanation": "Two decimal places are required, so the zero is kept.", "diagram": null },
        { "stepNumber": 6, "description": "Note the ignored final digit.", "workingLatex": "\\text{the } 5 \\text{ was not used}", "explanation": "Only the digit immediately after the rounding place matters, so the final $5$ played no part.", "diagram": null },
        { "stepNumber": 7, "description": "State the answer.", "workingLatex": "4.2985 \\approx 4.30", "explanation": "So $4.2985$ to two decimal places is $4.30$.", "diagram": null }
      ],
      "finalAnswer": "$4.30$"
    }
  },
  {
    "id": "gcse.number.rounding.q054",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Rounding",
    "subtopicId": "gcse.number.rounding",
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "value",
    "tags": ["rounding", "calculate then round", "1 dp", "problem solving"],
    "questionText": "Work out $\\dfrac{8.7 \\times 6.4}{3}$ and give your answer to $1$ decimal place.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Work out the numerator.", "workingLatex": "8.7 \\times 6.4", "explanation": "We deal with the multiplication on top first.", "diagram": null },
        { "stepNumber": 2, "description": "Multiply.", "workingLatex": "8.7 \\times 6.4 = 55.68", "explanation": "The product of the two numbers is $55.68$.", "diagram": null },
        { "stepNumber": 3, "description": "Set up the division.", "workingLatex": "\\dfrac{55.68}{3}", "explanation": "We divide the numerator by three.", "diagram": null },
        { "stepNumber": 4, "description": "Carry out the division.", "workingLatex": "55.68 \\div 3 = 18.56", "explanation": "The division gives $18.56$.", "diagram": null },
        { "stepNumber": 5, "description": "Find the first decimal place.", "workingLatex": "18.\\underline{5}6", "explanation": "The digit in the first decimal place is the $5$.", "diagram": null },
        { "stepNumber": 6, "description": "Look at the next digit.", "workingLatex": "\\text{next digit is } 6", "explanation": "The second decimal digit decides the rounding.", "diagram": null },
        { "stepNumber": 7, "description": "Apply the rule.", "workingLatex": "6 \\geq 5 \\Rightarrow 5 \\to 6", "explanation": "Since $6$ is more than $5$, the $5$ rounds up to $6$.", "diagram": null },
        { "stepNumber": 8, "description": "Write the rounded number.", "workingLatex": "18.56 \\approx 18.6", "explanation": "We keep one decimal place.", "diagram": null },
        { "stepNumber": 9, "description": "State the answer.", "workingLatex": "\\dfrac{8.7 \\times 6.4}{3} \\approx 18.6", "explanation": "So the answer to one decimal place is $18.6$.", "diagram": null }
      ],
      "finalAnswer": "$18.6$"
    }
  },
  {
    "id": "gcse.number.rounding.q055",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Rounding",
    "subtopicId": "gcse.number.rounding",
    "difficulty": "Hard",
    "marks": 4,
    "answerType": "value",
    "tags": ["rounding", "context", "rounding down", "problem solving"],
    "questionText": "A piece of ribbon is $2.5\\text{ m}$ long. It is cut into pieces each $0.4\\text{ m}$ long. How many whole pieces can be cut?",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Set up the division.", "workingLatex": "2.5 \\div 0.4", "explanation": "We divide the total length by the length of each piece.", "diagram": null },
        { "stepNumber": 2, "description": "Clear the decimal.", "workingLatex": "\\dfrac{2.5}{0.4} = \\dfrac{25}{4}", "explanation": "Multiplying top and bottom by ten removes the decimals.", "diagram": null },
        { "stepNumber": 3, "description": "Work out the division.", "workingLatex": "\\dfrac{25}{4} = 6.25", "explanation": "The result is $6.25$ pieces.", "diagram": null },
        { "stepNumber": 4, "description": "Interpret the decimal.", "workingLatex": "6.25 \\text{ pieces}", "explanation": "We can only count whole pieces of ribbon.", "diagram": null },
        { "stepNumber": 5, "description": "Decide to round down.", "workingLatex": "6.25 \\to 6", "explanation": "The leftover $0.25$ of a piece is too short to be a full piece, so we round down.", "diagram": null },
        { "stepNumber": 6, "description": "Check the length used.", "workingLatex": "6 \\times 0.4 = 2.4\\text{ m}", "explanation": "Six pieces use $2.4$ m, leaving $0.1$ m which is not enough for another piece.", "diagram": null },
        { "stepNumber": 7, "description": "State the answer.", "workingLatex": "6 \\text{ whole pieces}", "explanation": "So $6$ whole pieces can be cut.", "diagram": null }
      ],
      "finalAnswer": "$6$ whole pieces"
    }
  },
  {
    "id": "gcse.number.rounding.q056",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Rounding",
    "subtopicId": "gcse.number.rounding",
    "difficulty": "Hard",
    "marks": 4,
    "answerType": "value",
    "tags": ["rounding", "recurring decimal", "3 dp"],
    "questionText": "Write $\\dfrac{2}{3}$ as a decimal and round it to $3$ decimal places.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Change the fraction to a decimal.", "workingLatex": "\\dfrac{2}{3} = 2 \\div 3", "explanation": "A fraction means the top divided by the bottom.", "diagram": null },
        { "stepNumber": 2, "description": "Carry out the division.", "workingLatex": "2 \\div 3 = 0.6666\\ldots", "explanation": "The division gives a recurring decimal of sixes.", "diagram": null },
        { "stepNumber": 3, "description": "Find the third decimal place.", "workingLatex": "0.66\\underline{6}6\\ldots", "explanation": "The digit in the third decimal place is a $6$.", "diagram": null },
        { "stepNumber": 4, "description": "Look at the next digit.", "workingLatex": "\\text{next digit is } 6", "explanation": "The fourth decimal digit decides the rounding.", "diagram": null },
        { "stepNumber": 5, "description": "Apply the rule.", "workingLatex": "6 \\geq 5 \\Rightarrow 6 \\to 7", "explanation": "Since $6$ is more than $5$, the third-place $6$ rounds up to $7$.", "diagram": null },
        { "stepNumber": 6, "description": "Write the rounded number.", "workingLatex": "0.6666\\ldots \\approx 0.667", "explanation": "We keep three decimal places.", "diagram": null },
        { "stepNumber": 7, "description": "State the answer.", "workingLatex": "\\dfrac{2}{3} \\approx 0.667", "explanation": "So two thirds to three decimal places is $0.667$.", "diagram": null }
      ],
      "finalAnswer": "$0.667$"
    }
  },
  {
    "id": "gcse.number.rounding.q057",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Rounding",
    "subtopicId": "gcse.number.rounding",
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "value",
    "tags": ["rounding", "square roots", "calculate then round", "2 dp"],
    "questionText": "Work out $\\sqrt{50}$ and give your answer to $2$ decimal places.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Locate the root between whole numbers.", "workingLatex": "7^2 = 49, \\; 8^2 = 64", "explanation": "Since $50$ is just above $49$, the root is just above $7$.", "diagram": null },
        { "stepNumber": 2, "description": "Estimate more precisely.", "workingLatex": "7.1^2 = 50.41", "explanation": "Trying $7.1$ overshoots slightly, so the root is a little below $7.1$.", "diagram": null },
        { "stepNumber": 3, "description": "Refine the estimate.", "workingLatex": "7.07^2 = 49.98", "explanation": "Trying $7.07$ gives just under $50$, so the root is very close to $7.07$.", "diagram": null },
        { "stepNumber": 4, "description": "Use the calculator value.", "workingLatex": "\\sqrt{50} = 7.0710\\ldots", "explanation": "A calculator gives the fuller value $7.0710$.", "diagram": null },
        { "stepNumber": 5, "description": "Find the second decimal place.", "workingLatex": "7.0\\underline{7}10", "explanation": "The digit in the second decimal place is the $7$.", "diagram": null },
        { "stepNumber": 6, "description": "Look at the next digit.", "workingLatex": "\\text{next digit is } 1", "explanation": "The third decimal digit decides the rounding.", "diagram": null },
        { "stepNumber": 7, "description": "Apply the rule.", "workingLatex": "1 < 5 \\Rightarrow 7 \\text{ stays}", "explanation": "Since $1$ is less than $5$, the $7$ stays the same.", "diagram": null },
        { "stepNumber": 8, "description": "Write the rounded number.", "workingLatex": "\\sqrt{50} \\approx 7.07", "explanation": "We keep two decimal places.", "diagram": null },
        { "stepNumber": 9, "description": "State the answer.", "workingLatex": "\\sqrt{50} \\approx 7.07", "explanation": "So $\\sqrt{50}$ to two decimal places is $7.07$.", "diagram": null }
      ],
      "finalAnswer": "$7.07$"
    }
  },
  {
    "id": "gcse.number.rounding.q058",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Rounding",
    "subtopicId": "gcse.number.rounding",
    "difficulty": "Hard",
    "marks": 4,
    "answerType": "value",
    "tags": ["rounding", "decimal places", "3 dp", "carrying"],
    "questionText": "Round $3.9999$ to $3$ decimal places.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Find the third decimal place.", "workingLatex": "3.99\\underline{9}9", "explanation": "The digit in the third decimal place is a $9$.", "diagram": null },
        { "stepNumber": 2, "description": "Look at the next digit.", "workingLatex": "\\text{next digit is } 9", "explanation": "The fourth decimal digit decides the rounding.", "diagram": null },
        { "stepNumber": 3, "description": "Round the 9 up.", "workingLatex": "9 + 1 = 10", "explanation": "Since $9 \\geq 5$ the third-place $9$ rounds up and must carry.", "diagram": null },
        { "stepNumber": 4, "description": "Cascade through the other nines.", "workingLatex": "3.999 \\to 4.000", "explanation": "The carry passes through every $9$, turning $3.999$ into $4.000$.", "diagram": null },
        { "stepNumber": 5, "description": "Keep the trailing zeros.", "workingLatex": "4.000", "explanation": "Three decimal places are required, so the zeros are kept.", "diagram": null },
        { "stepNumber": 6, "description": "State the answer.", "workingLatex": "3.9999 \\approx 4.000", "explanation": "So $3.9999$ to three decimal places is $4.000$.", "diagram": null }
      ],
      "finalAnswer": "$4.000$"
    }
  },
  {
    "id": "gcse.number.rounding.q059",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Rounding",
    "subtopicId": "gcse.number.rounding",
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "value",
    "tags": ["rounding", "significant figures", "3 sf", "carrying"],
    "questionText": "Round $2\\,048\\,976$ to $3$ significant figures.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Mark the first three significant figures.", "workingLatex": "\\underline{204}8976", "explanation": "The first three significant figures are $2$, $0$ and $4$.", "diagram": null },
        { "stepNumber": 2, "description": "Note the zero is significant here.", "workingLatex": "0 \\text{ between } 2 \\text{ and } 4", "explanation": "A zero between other significant figures counts as significant.", "diagram": null },
        { "stepNumber": 3, "description": "Find the deciding digit.", "workingLatex": "\\text{next digit is } 8", "explanation": "The digit after the third significant figure decides the rounding.", "diagram": null },
        { "stepNumber": 4, "description": "Recall the rule.", "workingLatex": "5\\text{ or more} \\Rightarrow \\text{round up}", "explanation": "A deciding digit of $5$ or more rounds up.", "diagram": null },
        { "stepNumber": 5, "description": "Apply the rule.", "workingLatex": "8 \\geq 5 \\Rightarrow 4 \\to 5", "explanation": "Since $8$ is more than $5$, the third figure rounds up from $4$ to $5$.", "diagram": null },
        { "stepNumber": 6, "description": "Fill the remaining places with zeros.", "workingLatex": "205\\,0000", "explanation": "The dropped digits become zeros to keep the size in the millions.", "diagram": null },
        { "stepNumber": 7, "description": "Write with proper grouping.", "workingLatex": "2\\,050\\,000", "explanation": "Grouping the digits makes the size clear.", "diagram": null },
        { "stepNumber": 8, "description": "State the answer.", "workingLatex": "2\\,048\\,976 \\approx 2\\,050\\,000", "explanation": "So the number to three significant figures is $2\\,050\\,000$.", "diagram": null }
      ],
      "finalAnswer": "$2\\,050\\,000$"
    }
  },
  {
    "id": "gcse.number.rounding.q060",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Rounding",
    "subtopicId": "gcse.number.rounding",
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "value",
    "tags": ["rounding", "truncation", "comparison", "reasoning"],
    "questionText": "The number $5.678$ is to be given to $2$ decimal places. Find the value using rounding and using truncation, and state the difference.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Explain truncation.", "workingLatex": "\\text{truncate} = \\text{cut off}", "explanation": "Truncating means simply chopping off the extra digits without adjusting.", "diagram": null },
        { "stepNumber": 2, "description": "Truncate to 2 dp.", "workingLatex": "5.678 \\to 5.67", "explanation": "We keep the first two decimals and drop the rest, giving $5.67$.", "diagram": null },
        { "stepNumber": 3, "description": "Now set up the rounding.", "workingLatex": "5.6\\underline{7}8", "explanation": "For rounding, the digit in the second decimal place is the $7$.", "diagram": null },
        { "stepNumber": 4, "description": "Look at the deciding digit.", "workingLatex": "\\text{next digit is } 8", "explanation": "The third decimal digit decides the rounding.", "diagram": null },
        { "stepNumber": 5, "description": "Apply the rounding rule.", "workingLatex": "8 \\geq 5 \\Rightarrow 7 \\to 8", "explanation": "Since $8$ is more than $5$, the $7$ rounds up to $8$.", "diagram": null },
        { "stepNumber": 6, "description": "Write the rounded value.", "workingLatex": "5.678 \\approx 5.68", "explanation": "Rounded to two decimal places the value is $5.68$.", "diagram": null },
        { "stepNumber": 7, "description": "Compare the two results.", "workingLatex": "5.68 - 5.67 = 0.01", "explanation": "The rounded value is $0.01$ larger than the truncated value.", "diagram": null },
        { "stepNumber": 8, "description": "State the conclusion.", "workingLatex": "\\text{round} = 5.68, \\; \\text{truncate} = 5.67", "explanation": "So rounding gives $5.68$, truncation gives $5.67$, a difference of $0.01$.", "diagram": null }
      ],
      "finalAnswer": "Rounded $5.68$, truncated $5.67$; difference $0.01$"
    }
  },
  {
    "id": "gcse.number.rounding.q061",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Rounding",
    "subtopicId": "gcse.number.rounding",
    "difficulty": "Hard",
    "marks": 4,
    "answerType": "value",
    "tags": ["rounding", "significant figures", "2 sf", "carrying"],
    "questionText": "Round $149\\,500$ to $2$ significant figures.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Mark the first two significant figures.", "workingLatex": "\\underline{14}9\\,500", "explanation": "We keep the $1$ and the $4$; the rest will be rounded off.", "diagram": null },
        { "stepNumber": 2, "description": "Find the deciding digit.", "workingLatex": "\\text{next digit is } 9", "explanation": "The digit after the second significant figure decides the rounding.", "diagram": null },
        { "stepNumber": 3, "description": "Recall the rule.", "workingLatex": "5\\text{ or more} \\Rightarrow \\text{round up}", "explanation": "A deciding digit of $5$ or more rounds up.", "diagram": null },
        { "stepNumber": 4, "description": "Apply the rule.", "workingLatex": "9 \\geq 5 \\Rightarrow 14 \\to 15", "explanation": "The second figure $4$ rounds up to $5$.", "diagram": null },
        { "stepNumber": 5, "description": "Fill the remaining places with zeros.", "workingLatex": "15\\underline{0000}", "explanation": "The dropped digits become zeros to keep the size in the hundred-thousands.", "diagram": null },
        { "stepNumber": 6, "description": "Write with grouping.", "workingLatex": "150\\,000", "explanation": "Grouping the digits makes the size clear.", "diagram": null },
        { "stepNumber": 7, "description": "State the answer.", "workingLatex": "149\\,500 \\approx 150\\,000", "explanation": "So $149\\,500$ to two significant figures is $150\\,000$.", "diagram": null }
      ],
      "finalAnswer": "$150\\,000$"
    }
  },
  {
    "id": "gcse.number.rounding.q062",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Rounding",
    "subtopicId": "gcse.number.rounding",
    "difficulty": "Hard",
    "marks": 4,
    "answerType": "value",
    "tags": ["rounding", "appropriate accuracy", "context", "reasoning"],
    "questionText": "A calculator gives the length of a shelf as $1.8342\\text{ m}$. Give this length to a sensible degree of accuracy and justify your choice.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Think about a sensible accuracy.", "workingLatex": "\\text{lengths} \\to \\text{nearest cm}", "explanation": "For a shelf, giving the length to the nearest centimetre (two decimal places of a metre) is sensible.", "diagram": null },
        { "stepNumber": 2, "description": "Find the second decimal place.", "workingLatex": "1.8\\underline{3}42", "explanation": "The digit in the second decimal place is the $3$.", "diagram": null },
        { "stepNumber": 3, "description": "Look at the next digit.", "workingLatex": "\\text{next digit is } 4", "explanation": "The third decimal digit decides the rounding.", "diagram": null },
        { "stepNumber": 4, "description": "Apply the rule.", "workingLatex": "4 < 5 \\Rightarrow 3 \\text{ stays}", "explanation": "Since $4$ is less than $5$, the $3$ stays the same.", "diagram": null },
        { "stepNumber": 5, "description": "Write the rounded length.", "workingLatex": "1.8342 \\approx 1.83\\text{ m}", "explanation": "Rounded to two decimal places the length is $1.83$ m.", "diagram": null },
        { "stepNumber": 6, "description": "Justify the accuracy.", "workingLatex": "1.83\\text{ m} = 183\\text{ cm}", "explanation": "This is the nearest centimetre, which is realistic for measuring a shelf; more decimals would suggest false precision.", "diagram": null },
        { "stepNumber": 7, "description": "State the answer.", "workingLatex": "\\approx 1.83\\text{ m}", "explanation": "So a sensible value is $1.83$ m, to the nearest centimetre.", "diagram": null }
      ],
      "finalAnswer": "$1.83\\text{ m}$ (nearest cm)"
    }
  },
  {
    "id": "gcse.number.rounding.q063",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Rounding",
    "subtopicId": "gcse.number.rounding",
    "difficulty": "Hard",
    "marks": 4,
    "answerType": "value",
    "tags": ["rounding", "significant figures", "calculate then round", "3 sf"],
    "questionText": "Work out $19.6^2$ and give your answer to $3$ significant figures.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Set up the square.", "workingLatex": "19.6^2 = 19.6 \\times 19.6", "explanation": "Squaring means multiplying the number by itself.", "diagram": null },
        { "stepNumber": 2, "description": "Work out the product.", "workingLatex": "19.6 \\times 19.6 = 384.16", "explanation": "The exact value of the square is $384.16$.", "diagram": null },
        { "stepNumber": 3, "description": "Identify the first three significant figures.", "workingLatex": "\\underline{384}.16", "explanation": "The three significant figures are $3$, $8$ and $4$.", "diagram": null },
        { "stepNumber": 4, "description": "Find the deciding digit.", "workingLatex": "\\text{next digit is } 1", "explanation": "The digit after the third significant figure is the first decimal, $1$.", "diagram": null },
        { "stepNumber": 5, "description": "Apply the rule.", "workingLatex": "1 < 5 \\Rightarrow 4 \\text{ stays}", "explanation": "Since $1$ is less than $5$, the $4$ stays the same.", "diagram": null },
        { "stepNumber": 6, "description": "Write the rounded number.", "workingLatex": "384.16 \\approx 384", "explanation": "We keep three significant figures and drop the decimal part.", "diagram": null },
        { "stepNumber": 7, "description": "State the answer.", "workingLatex": "19.6^2 \\approx 384", "explanation": "So $19.6^2$ to three significant figures is $384$.", "diagram": null }
      ],
      "finalAnswer": "$384$"
    }
  },
  {
    "id": "gcse.number.rounding.q064",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Rounding",
    "subtopicId": "gcse.number.rounding",
    "difficulty": "Hard",
    "marks": 4,
    "answerType": "money",
    "tags": ["rounding", "money", "nearest penny", "carrying"],
    "questionText": "Round $\\pounds 57.396$ to the nearest penny.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recognise the accuracy needed.", "workingLatex": "\\text{nearest penny} = 2\\text{ dp}", "explanation": "The nearest penny means rounding to two decimal places.", "diagram": null },
        { "stepNumber": 2, "description": "Find the second decimal place.", "workingLatex": "57.3\\underline{9}6", "explanation": "The digit in the second decimal place is the $9$.", "diagram": null },
        { "stepNumber": 3, "description": "Look at the next digit.", "workingLatex": "\\text{next digit is } 6", "explanation": "The third decimal digit decides the rounding.", "diagram": null },
        { "stepNumber": 4, "description": "Round the 9 up and carry.", "workingLatex": "9 + 1 = 10", "explanation": "Since $6 \\geq 5$, the $9$ rounds up and must carry.", "diagram": null },
        { "stepNumber": 5, "description": "Cascade the carry.", "workingLatex": "57.39 \\to 57.40", "explanation": "The $3$ becomes $4$ and the second place becomes $0$.", "diagram": null },
        { "stepNumber": 6, "description": "Keep the trailing zero.", "workingLatex": "\\pounds 57.40", "explanation": "Money is written with two decimal places, so the zero stays.", "diagram": null },
        { "stepNumber": 7, "description": "State the answer.", "workingLatex": "\\pounds 57.396 \\approx \\pounds 57.40", "explanation": "So $\\pounds 57.396$ to the nearest penny is $\\pounds 57.40$.", "diagram": null }
      ],
      "finalAnswer": "$\\pounds 57.40$"
    }
  },
  {
    "id": "gcse.number.rounding.q065",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Rounding",
    "subtopicId": "gcse.number.rounding",
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "value",
    "tags": ["rounding", "significant figures", "2 sf", "small decimals", "carrying"],
    "questionText": "Round $0.0009999$ to $2$ significant figures.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Find the first significant figure.", "workingLatex": "0.000\\underline{9}999", "explanation": "Leading zeros are not significant, so the first significant figure is the first $9$.", "diagram": null },
        { "stepNumber": 2, "description": "Identify the second significant figure.", "workingLatex": "0.0009\\underline{9}99", "explanation": "The next $9$ is the second significant figure.", "diagram": null },
        { "stepNumber": 3, "description": "Find the deciding digit.", "workingLatex": "\\text{next digit is } 9", "explanation": "The digit after the second significant figure decides the rounding.", "diagram": null },
        { "stepNumber": 4, "description": "Round up and carry.", "workingLatex": "99 + 1 = 100", "explanation": "Since $9 \\geq 5$, the two nines round up and carry.", "diagram": null },
        { "stepNumber": 5, "description": "Cascade the carry.", "workingLatex": "0.00099 \\to 0.00100", "explanation": "The carry passes through the nines, turning $0.00099$ into $0.00100$.", "diagram": null },
        { "stepNumber": 6, "description": "Keep two significant figures.", "workingLatex": "0.0010", "explanation": "The final zero is significant, giving two significant figures.", "diagram": null },
        { "stepNumber": 7, "description": "State the answer.", "workingLatex": "0.0009999 \\approx 0.0010", "explanation": "So the number to two significant figures is $0.0010$.", "diagram": null }
      ],
      "finalAnswer": "$0.0010$"
    }
  },
  {
    "id": "gcse.number.rounding.q066",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Rounding",
    "subtopicId": "gcse.number.rounding",
    "difficulty": "Hard",
    "marks": 4,
    "answerType": "value",
    "tags": ["rounding", "context", "rounding up", "problem solving"],
    "questionText": "Eggs are sold in boxes of $6$. A baker needs $50$ eggs. How many boxes must be bought?",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Set up the division.", "workingLatex": "50 \\div 6", "explanation": "We divide the eggs needed by the number in each box.", "diagram": null },
        { "stepNumber": 2, "description": "Work out the division.", "workingLatex": "50 \\div 6 = 8.33\\ldots", "explanation": "The result is about $8.33$ boxes.", "diagram": null },
        { "stepNumber": 3, "description": "Interpret the decimal.", "workingLatex": "8.33 \\text{ boxes}", "explanation": "We can only buy whole boxes of eggs.", "diagram": null },
        { "stepNumber": 4, "description": "Consider rounding down.", "workingLatex": "8 \\times 6 = 48 < 50", "explanation": "Eight boxes only give $48$ eggs, which is not enough.", "diagram": null },
        { "stepNumber": 5, "description": "Decide to round up.", "workingLatex": "8.33 \\to 9", "explanation": "To have at least $50$ eggs, we must round up to $9$ boxes.", "diagram": null },
        { "stepNumber": 6, "description": "Check nine boxes is enough.", "workingLatex": "9 \\times 6 = 54 \\geq 50", "explanation": "Nine boxes give $54$ eggs, which is enough.", "diagram": null },
        { "stepNumber": 7, "description": "State the answer.", "workingLatex": "9 \\text{ boxes}", "explanation": "So the baker must buy $9$ boxes.", "diagram": null }
      ],
      "finalAnswer": "$9$ boxes"
    }
  },
  {
    "id": "gcse.number.rounding.q067",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Rounding",
    "subtopicId": "gcse.number.rounding",
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "value",
    "tags": ["rounding", "square roots", "calculate then round", "1 dp"],
    "questionText": "Work out $\\sqrt{80}$ and give your answer to $1$ decimal place.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Locate the root between whole numbers.", "workingLatex": "8^2 = 64, \\; 9^2 = 81", "explanation": "Since $80$ is just below $81$, the root is just below $9$.", "diagram": null },
        { "stepNumber": 2, "description": "Refine the estimate.", "workingLatex": "8.9^2 = 79.21", "explanation": "Trying $8.9$ gives just under $80$, so the root is a little above $8.9$.", "diagram": null },
        { "stepNumber": 3, "description": "Try a higher value.", "workingLatex": "8.95^2 = 80.10", "explanation": "Trying $8.95$ slightly overshoots, so the root lies between $8.9$ and $8.95$.", "diagram": null },
        { "stepNumber": 4, "description": "Use the calculator value.", "workingLatex": "\\sqrt{80} = 8.944\\ldots", "explanation": "A calculator gives the fuller value $8.944$.", "diagram": null },
        { "stepNumber": 5, "description": "Find the first decimal place.", "workingLatex": "8.\\underline{9}44", "explanation": "The digit in the first decimal place is the $9$.", "diagram": null },
        { "stepNumber": 6, "description": "Look at the next digit.", "workingLatex": "\\text{next digit is } 4", "explanation": "The second decimal digit decides the rounding.", "diagram": null },
        { "stepNumber": 7, "description": "Apply the rule.", "workingLatex": "4 < 5 \\Rightarrow 9 \\text{ stays}", "explanation": "Since $4$ is less than $5$, the $9$ stays the same.", "diagram": null },
        { "stepNumber": 8, "description": "Write the rounded number.", "workingLatex": "\\sqrt{80} \\approx 8.9", "explanation": "We keep one decimal place.", "diagram": null },
        { "stepNumber": 9, "description": "State the answer.", "workingLatex": "\\sqrt{80} \\approx 8.9", "explanation": "So $\\sqrt{80}$ to one decimal place is $8.9$.", "diagram": null }
      ],
      "finalAnswer": "$8.9$"
    }
  },
  {
    "id": "gcse.number.rounding.q068",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Rounding",
    "subtopicId": "gcse.number.rounding",
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "value",
    "tags": ["rounding", "significant figures", "3 sf", "carrying"],
    "questionText": "Round $7\\,999\\,500$ to $3$ significant figures.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Mark the first three significant figures.", "workingLatex": "\\underline{799}9500", "explanation": "The first three significant figures are $7$, $9$ and $9$.", "diagram": null },
        { "stepNumber": 2, "description": "Find the deciding digit.", "workingLatex": "\\text{next digit is } 9", "explanation": "The digit after the third significant figure decides the rounding.", "diagram": null },
        { "stepNumber": 3, "description": "Round up and carry.", "workingLatex": "799 + 1 = 800", "explanation": "Since $9 \\geq 5$, the third figure rounds up and the carry cascades through the nines.", "diagram": null },
        { "stepNumber": 4, "description": "Track the cascade.", "workingLatex": "799 \\to 800", "explanation": "Both nines become zeros and the $7$ becomes $8$.", "diagram": null },
        { "stepNumber": 5, "description": "Fill the remaining places with zeros.", "workingLatex": "8\\,000\\,000", "explanation": "The dropped digits become zeros to keep the size in the millions.", "diagram": null },
        { "stepNumber": 6, "description": "State the answer.", "workingLatex": "7\\,999\\,500 \\approx 8\\,000\\,000", "explanation": "So the number to three significant figures is $8\\,000\\,000$.", "diagram": null }
      ],
      "finalAnswer": "$8\\,000\\,000$"
    }
  },
  {
    "id": "gcse.number.rounding.q069",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Rounding",
    "subtopicId": "gcse.number.rounding",
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "value",
    "tags": ["rounding", "calculate then round", "area", "3 sf", "problem solving"],
    "questionText": "A rectangle measures $12.7\\text{ cm}$ by $8.3\\text{ cm}$. Work out its area and give the answer to $3$ significant figures.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall the area formula.", "workingLatex": "A = l \\times w", "explanation": "The area of a rectangle is length times width.", "diagram": null },
        { "stepNumber": 2, "description": "Substitute the values.", "workingLatex": "A = 12.7 \\times 8.3", "explanation": "We multiply the two given lengths.", "diagram": null },
        { "stepNumber": 3, "description": "Work out the product.", "workingLatex": "12.7 \\times 8.3 = 105.41", "explanation": "The exact area is $105.41$ cm$^2$.", "diagram": null },
        { "stepNumber": 4, "description": "Identify the first three significant figures.", "workingLatex": "\\underline{105}.41", "explanation": "The three significant figures are $1$, $0$ and $5$.", "diagram": null },
        { "stepNumber": 5, "description": "Find the deciding digit.", "workingLatex": "\\text{next digit is } 4", "explanation": "The digit after the third significant figure is the first decimal, $4$.", "diagram": null },
        { "stepNumber": 6, "description": "Apply the rule.", "workingLatex": "4 < 5 \\Rightarrow 5 \\text{ stays}", "explanation": "Since $4$ is less than $5$, the $5$ stays the same.", "diagram": null },
        { "stepNumber": 7, "description": "Write the rounded area.", "workingLatex": "105.41 \\approx 105", "explanation": "We keep three significant figures.", "diagram": null },
        { "stepNumber": 8, "description": "Attach the units.", "workingLatex": "105\\text{ cm}^2", "explanation": "Area is measured in square centimetres.", "diagram": null },
        { "stepNumber": 9, "description": "State the answer.", "workingLatex": "A \\approx 105\\text{ cm}^2", "explanation": "So the area to three significant figures is $105$ cm$^2$.", "diagram": null }
      ],
      "finalAnswer": "$105\\text{ cm}^2$"
    }
  },
  {
    "id": "gcse.number.rounding.q070",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Rounding",
    "subtopicId": "gcse.number.rounding",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "value",
    "tags": ["rounding", "appropriate accuracy", "context", "reasoning", "problem solving"],
    "questionText": "$\\pounds 250$ is shared equally among $3$ people. Explain why $\\pounds 83.33$ each is a sensible answer, and what happens to the last penny.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Set up the division.", "workingLatex": "250 \\div 3", "explanation": "We divide the total equally among the three people.", "diagram": null },
        { "stepNumber": 2, "description": "Carry out the division.", "workingLatex": "250 \\div 3 = 83.333\\ldots", "explanation": "The exact share is a recurring decimal.", "diagram": null },
        { "stepNumber": 3, "description": "Recognise money accuracy.", "workingLatex": "\\text{money} = 2\\text{ dp}", "explanation": "Money is given to the nearest penny, which is two decimal places.", "diagram": null },
        { "stepNumber": 4, "description": "Round to the nearest penny.", "workingLatex": "83.3\\underline{3}3 \\to 83.33", "explanation": "The deciding digit is $3$, less than $5$, so we round down to $\\pounds 83.33$.", "diagram": null },
        { "stepNumber": 5, "description": "Work out the total paid.", "workingLatex": "3 \\times 83.33 = 249.99", "explanation": "Three shares of $\\pounds 83.33$ add up to $\\pounds 249.99$.", "diagram": null },
        { "stepNumber": 6, "description": "Find the leftover.", "workingLatex": "250 - 249.99 = 0.01", "explanation": "One penny is left over because the exact share cannot be paid.", "diagram": null },
        { "stepNumber": 7, "description": "Explain the rounding down.", "workingLatex": "\\text{cannot pay } \\tfrac{1}{3}\\text{p}", "explanation": "We round down to the penny because coins smaller than a penny do not exist.", "diagram": null },
        { "stepNumber": 8, "description": "Decide what happens to the penny.", "workingLatex": "1\\text{p leftover}", "explanation": "The spare penny is dealt with separately, for example given to one person or kept back.", "diagram": null },
        { "stepNumber": 9, "description": "State the conclusion.", "workingLatex": "\\pounds 83.33 \\text{ each, } 1\\text{p over}", "explanation": "So each person sensibly gets $\\pounds 83.33$, with one penny left over.", "diagram": null }
      ],
      "finalAnswer": "$\\pounds 83.33$ each, with $1$p left over"
    }
  }
];
