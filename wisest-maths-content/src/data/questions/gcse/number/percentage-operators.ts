import { Question } from "@/lib/types";

export const questions: Question[] = [
  {
    "id": "gcse.number.percentage-operators.q001",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Percentages as operators",
    "subtopicId": "gcse.number.percentage-operators",
    "difficulty": "Easy",
    "marks": 1,
    "answerType": "numeric",
    "tags": ["percentage of amount", "ten percent", "building blocks"],
    "questionText": "Work out $10\\%$ of $200$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Understand the task.", "workingLatex": "10\\% \\text{ of } 200", "explanation": "The word \"of\" tells us to find a part of $200$, in this case one tenth of it.", "diagram": null },
        { "stepNumber": 2, "description": "Recall what $10\\%$ means.", "workingLatex": "10\\% = \\frac{10}{100} = \\frac{1}{10}", "explanation": "Ten out of every hundred is the same as one tenth, so finding $10\\%$ is finding a tenth.", "diagram": null },
        { "stepNumber": 3, "description": "Divide by $10$.", "workingLatex": "200 \\div 10 = 20", "explanation": "Finding a tenth of a number just means splitting it into ten equal parts.", "diagram": null },
        { "stepNumber": 4, "description": "State the result.", "workingLatex": "10\\% \\text{ of } 200 = 20", "explanation": "One tenth of $200$ is $20$.", "diagram": null },
        { "stepNumber": 5, "description": "Check by reversing.", "workingLatex": "20 \\times 10 = 200", "explanation": "Ten lots of $20$ rebuild the original $200$, which confirms the answer.", "diagram": null },
        { "stepNumber": 6, "description": "Write the final answer.", "workingLatex": "20", "explanation": "So $10\\%$ of $200$ is $20$.", "diagram": null }
      ],
      "finalAnswer": "$20$"
    }
  },
  {
    "id": "gcse.number.percentage-operators.q002",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Percentages as operators",
    "subtopicId": "gcse.number.percentage-operators",
    "difficulty": "Easy",
    "marks": 1,
    "answerType": "numeric",
    "tags": ["percentage of amount", "fifty percent", "halving"],
    "questionText": "Work out $50\\%$ of $80$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall what $50\\%$ means.", "workingLatex": "50\\% = \\frac{1}{2}", "explanation": "Fifty out of a hundred is exactly one half, so $50\\%$ of something is just half of it.", "diagram": null },
        { "stepNumber": 2, "description": "Halving means dividing by $2$.", "workingLatex": "80 \\div 2", "explanation": "To find a half we split the amount into two equal parts.", "diagram": null },
        { "stepNumber": 3, "description": "Do the division.", "workingLatex": "80 \\div 2 = 40", "explanation": "Splitting $80$ into two equal parts gives $40$ in each part.", "diagram": null },
        { "stepNumber": 4, "description": "State the result.", "workingLatex": "50\\% \\text{ of } 80 = 40", "explanation": "So half of $80$ is $40$.", "diagram": null },
        { "stepNumber": 5, "description": "Check by adding the halves.", "workingLatex": "40 + 40 = 80", "explanation": "Two equal halves of $40$ add back to $80$, confirming the answer.", "diagram": null },
        { "stepNumber": 6, "description": "Write the final answer.", "workingLatex": "40", "explanation": "So $50\\%$ of $80$ is $40$.", "diagram": null }
      ],
      "finalAnswer": "$40$"
    }
  },
  {
    "id": "gcse.number.percentage-operators.q003",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Percentages as operators",
    "subtopicId": "gcse.number.percentage-operators",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "numeric",
    "tags": ["percentage of amount", "twenty-five percent", "quarter"],
    "questionText": "Work out $25\\%$ of $60$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall what $25\\%$ means.", "workingLatex": "25\\% = \\frac{1}{4}", "explanation": "Twenty-five out of a hundred is one quarter, so $25\\%$ of a number is a quarter of it.", "diagram": null },
        { "stepNumber": 2, "description": "A quarter is a half of a half.", "workingLatex": "\\frac{1}{4} = \\frac{1}{2} \\times \\frac{1}{2}", "explanation": "Halving twice is an easy way to find a quarter without a calculator.", "diagram": null },
        { "stepNumber": 3, "description": "Halve once.", "workingLatex": "60 \\div 2 = 30", "explanation": "The first halving splits $60$ into $30$.", "diagram": null },
        { "stepNumber": 4, "description": "Halve again.", "workingLatex": "30 \\div 2 = 15", "explanation": "Halving the $30$ gives a quarter of the original amount.", "diagram": null },
        { "stepNumber": 5, "description": "State the result.", "workingLatex": "25\\% \\text{ of } 60 = 15", "explanation": "So a quarter of $60$ is $15$.", "diagram": null },
        { "stepNumber": 6, "description": "Check by multiplying up.", "workingLatex": "15 \\times 4 = 60", "explanation": "Four quarters of $15$ rebuild the original $60$, confirming the answer.", "diagram": null },
        { "stepNumber": 7, "description": "Write the final answer.", "workingLatex": "15", "explanation": "So $25\\%$ of $60$ is $15$.", "diagram": null }
      ],
      "finalAnswer": "$15$"
    }
  },
  {
    "id": "gcse.number.percentage-operators.q004",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Percentages as operators",
    "subtopicId": "gcse.number.percentage-operators",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "numeric",
    "tags": ["percentage of amount", "twenty percent", "building blocks"],
    "questionText": "Work out $20\\%$ of $150$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Understand the plan.", "workingLatex": "20\\% = 2 \\times 10\\%", "explanation": "Twenty percent is just two lots of ten percent, and ten percent is very easy to find.", "diagram": null },
        { "stepNumber": 2, "description": "Find $10\\%$ first.", "workingLatex": "150 \\div 10 = 15", "explanation": "Dividing by $10$ gives one tenth of the amount.", "diagram": null },
        { "stepNumber": 3, "description": "Double it for $20\\%$.", "workingLatex": "20\\% = 2 \\times 10\\%", "explanation": "Since $20\\%$ is twice $10\\%$, we double the tenth we just found.", "diagram": null },
        { "stepNumber": 4, "description": "Do the doubling.", "workingLatex": "2 \\times 15 = 30", "explanation": "Two lots of $15$ give $30$.", "diagram": null },
        { "stepNumber": 5, "description": "State the result.", "workingLatex": "20\\% \\text{ of } 150 = 30", "explanation": "So one fifth of $150$ is $30$.", "diagram": null },
        { "stepNumber": 6, "description": "Check with a decimal multiplier.", "workingLatex": "0.2 \\times 150 = 30", "explanation": "Multiplying by $0.2$ gives the same result, which confirms our building-block method.", "diagram": null },
        { "stepNumber": 7, "description": "Write the final answer.", "workingLatex": "30", "explanation": "So $20\\%$ of $150$ is $30$.", "diagram": null }
      ],
      "finalAnswer": "$30$"
    }
  },
  {
    "id": "gcse.number.percentage-operators.q005",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Percentages as operators",
    "subtopicId": "gcse.number.percentage-operators",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "numeric",
    "tags": ["percentage of amount", "decimal multiplier"],
    "questionText": "Work out $18\\%$ of $250$ using a decimal multiplier.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Turn the percentage into a decimal.", "workingLatex": "18\\% = 0.18", "explanation": "A percentage is a number out of $100$, so we divide by $100$, which shifts the digits two places.", "diagram": null },
        { "stepNumber": 2, "description": "Rewrite \"of\" as multiply.", "workingLatex": "0.18 \\times 250", "explanation": "Finding a percentage of an amount is the same as multiplying by its decimal form.", "diagram": null },
        { "stepNumber": 3, "description": "Multiply the whole numbers first.", "workingLatex": "18 \\times 250 = 4500", "explanation": "Ignoring the decimal point for a moment keeps the multiplication simple.", "diagram": null },
        { "stepNumber": 4, "description": "Put the decimal point back.", "workingLatex": "4500 \\div 100 = 45", "explanation": "Because $0.18$ was really $18 \\div 100$, we now divide the product by $100$.", "diagram": null },
        { "stepNumber": 5, "description": "State the result.", "workingLatex": "0.18 \\times 250 = 45", "explanation": "So the decimal-multiplier method gives $45$.", "diagram": null },
        { "stepNumber": 6, "description": "Sense-check the size.", "workingLatex": "10\\% \\text{ of } 250 = 25", "explanation": "Ten percent is $25$, so $18\\%$ should be a bit under double that; $45$ sits sensibly below $50$.", "diagram": null },
        { "stepNumber": 7, "description": "Write the final answer.", "workingLatex": "45", "explanation": "So $18\\%$ of $250$ is $45$.", "diagram": null }
      ],
      "finalAnswer": "$45$"
    }
  },
  {
    "id": "gcse.number.percentage-operators.q006",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Percentages as operators",
    "subtopicId": "gcse.number.percentage-operators",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "numeric",
    "tags": ["percentage of amount", "thirty percent", "building blocks"],
    "questionText": "Work out $30\\%$ of $90$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Plan using $10\\%$.", "workingLatex": "30\\% = 3 \\times 10\\%", "explanation": "Thirty percent is three lots of ten percent, and ten percent is easy to find.", "diagram": null },
        { "stepNumber": 2, "description": "Find $10\\%$.", "workingLatex": "90 \\div 10 = 9", "explanation": "Dividing by $10$ gives one tenth of $90$.", "diagram": null },
        { "stepNumber": 3, "description": "Take three lots.", "workingLatex": "30\\% = 3 \\times 10\\%", "explanation": "We need three tenths, so we multiply the tenth by $3$.", "diagram": null },
        { "stepNumber": 4, "description": "Do the multiplication.", "workingLatex": "3 \\times 9 = 27", "explanation": "Three lots of $9$ give $27$.", "diagram": null },
        { "stepNumber": 5, "description": "State the result.", "workingLatex": "30\\% \\text{ of } 90 = 27", "explanation": "So three tenths of $90$ is $27$.", "diagram": null },
        { "stepNumber": 6, "description": "Check with a decimal multiplier.", "workingLatex": "0.3 \\times 90 = 27", "explanation": "Multiplying by $0.3$ gives the same value, confirming the answer.", "diagram": null },
        { "stepNumber": 7, "description": "Write the final answer.", "workingLatex": "27", "explanation": "So $30\\%$ of $90$ is $27$.", "diagram": null }
      ],
      "finalAnswer": "$27$"
    }
  },
  {
    "id": "gcse.number.percentage-operators.q007",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Percentages as operators",
    "subtopicId": "gcse.number.percentage-operators",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "numeric",
    "tags": ["percentage of amount", "five percent", "building blocks"],
    "questionText": "Work out $5\\%$ of $240$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Start from $10\\%$.", "workingLatex": "240 \\div 10 = 24", "explanation": "Ten percent is easy to find by dividing by $10$, and $5\\%$ is closely related to it.", "diagram": null },
        { "stepNumber": 2, "description": "See that $5\\%$ is half of $10\\%$.", "workingLatex": "5\\% = \\frac{1}{2} \\times 10\\%", "explanation": "Five percent is exactly half of ten percent, so we can halve the tenth we found.", "diagram": null },
        { "stepNumber": 3, "description": "Halve the $10\\%$ value.", "workingLatex": "24 \\div 2 = 12", "explanation": "Halving $24$ gives the five percent value.", "diagram": null },
        { "stepNumber": 4, "description": "State the result.", "workingLatex": "5\\% \\text{ of } 240 = 12", "explanation": "So five percent of $240$ is $12$.", "diagram": null },
        { "stepNumber": 5, "description": "Check with a decimal multiplier.", "workingLatex": "0.05 \\times 240 = 12", "explanation": "Multiplying by $0.05$ gives the same answer, confirming the method.", "diagram": null },
        { "stepNumber": 6, "description": "Write the final answer.", "workingLatex": "12", "explanation": "So $5\\%$ of $240$ is $12$.", "diagram": null }
      ],
      "finalAnswer": "$12$"
    }
  },
  {
    "id": "gcse.number.percentage-operators.q008",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Percentages as operators",
    "subtopicId": "gcse.number.percentage-operators",
    "difficulty": "Easy",
    "marks": 1,
    "answerType": "numeric",
    "tags": ["percentage of amount", "one percent"],
    "questionText": "Work out $1\\%$ of $700$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall what $1\\%$ means.", "workingLatex": "1\\% = \\frac{1}{100}", "explanation": "One percent is one part in a hundred, so it is one hundredth of the amount.", "diagram": null },
        { "stepNumber": 2, "description": "Divide by $100$.", "workingLatex": "700 \\div 100", "explanation": "Finding a hundredth means splitting the amount into one hundred equal parts.", "diagram": null },
        { "stepNumber": 3, "description": "Do the division.", "workingLatex": "700 \\div 100 = 7", "explanation": "Dividing by $100$ shifts the digits two places, giving $7$.", "diagram": null },
        { "stepNumber": 4, "description": "State the result.", "workingLatex": "1\\% \\text{ of } 700 = 7", "explanation": "So one hundredth of $700$ is $7$.", "diagram": null },
        { "stepNumber": 5, "description": "Check by multiplying up.", "workingLatex": "7 \\times 100 = 700", "explanation": "A hundred lots of $7$ rebuild the original $700$, confirming the answer.", "diagram": null },
        { "stepNumber": 6, "description": "Write the final answer.", "workingLatex": "7", "explanation": "So $1\\%$ of $700$ is $7$.", "diagram": null }
      ],
      "finalAnswer": "$7$"
    }
  },
  {
    "id": "gcse.number.percentage-operators.q009",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Percentages as operators",
    "subtopicId": "gcse.number.percentage-operators",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "numeric",
    "tags": ["percentage of amount", "seventy-five percent", "three quarters"],
    "questionText": "Work out $75\\%$ of $40$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall what $75\\%$ means.", "workingLatex": "75\\% = \\frac{3}{4}", "explanation": "Seventy-five out of a hundred is three quarters, so we need three of the four equal parts.", "diagram": null },
        { "stepNumber": 2, "description": "Find one quarter.", "workingLatex": "40 \\div 4 = 10", "explanation": "Splitting $40$ into four equal parts gives $10$ in each quarter.", "diagram": null },
        { "stepNumber": 3, "description": "Take three quarters.", "workingLatex": "3 \\times 10 = 30", "explanation": "Three of those equal parts make three quarters of the amount.", "diagram": null },
        { "stepNumber": 4, "description": "State the result.", "workingLatex": "75\\% \\text{ of } 40 = 30", "explanation": "So three quarters of $40$ is $30$.", "diagram": null },
        { "stepNumber": 5, "description": "Check the parts add up.", "workingLatex": "10 + 10 + 10 = 30", "explanation": "Adding the three equal quarters gives $30$, confirming the answer.", "diagram": null },
        { "stepNumber": 6, "description": "Write the final answer.", "workingLatex": "30", "explanation": "So $75\\%$ of $40$ is $30$.", "diagram": null }
      ],
      "finalAnswer": "$30$"
    }
  },
  {
    "id": "gcse.number.percentage-operators.q010",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Percentages as operators",
    "subtopicId": "gcse.number.percentage-operators",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "numeric",
    "tags": ["percentage of amount", "forty percent", "building blocks"],
    "questionText": "Work out $40\\%$ of $55$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Plan using $10\\%$.", "workingLatex": "40\\% = 4 \\times 10\\%", "explanation": "Forty percent is four lots of ten percent, which is easy to build up.", "diagram": null },
        { "stepNumber": 2, "description": "Find $10\\%$.", "workingLatex": "55 \\div 10 = 5.5", "explanation": "Dividing by $10$ gives one tenth of $55$.", "diagram": null },
        { "stepNumber": 3, "description": "Take four lots.", "workingLatex": "40\\% = 4 \\times 10\\%", "explanation": "We need four tenths, so multiply the tenth by $4$.", "diagram": null },
        { "stepNumber": 4, "description": "Do the multiplication.", "workingLatex": "4 \\times 5.5 = 22", "explanation": "Four lots of $5.5$ give $22$.", "diagram": null },
        { "stepNumber": 5, "description": "State the result.", "workingLatex": "40\\% \\text{ of } 55 = 22", "explanation": "So two fifths of $55$ is $22$.", "diagram": null },
        { "stepNumber": 6, "description": "Check with a decimal multiplier.", "workingLatex": "0.4 \\times 55 = 22", "explanation": "Multiplying by $0.4$ gives the same result, confirming the answer.", "diagram": null },
        { "stepNumber": 7, "description": "Write the final answer.", "workingLatex": "22", "explanation": "So $40\\%$ of $55$ is $22$.", "diagram": null }
      ],
      "finalAnswer": "$22$"
    }
  },
  {
    "id": "gcse.number.percentage-operators.q011",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Percentages as operators",
    "subtopicId": "gcse.number.percentage-operators",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "numeric",
    "tags": ["percentage of amount", "fifteen percent", "building blocks"],
    "questionText": "Work out $15\\%$ of $80$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Find $10\\%$.", "workingLatex": "80 \\div 10 = 8", "explanation": "Ten percent is found by dividing by $10$, and it is a useful building block.", "diagram": null },
        { "stepNumber": 2, "description": "Find $5\\%$.", "workingLatex": "8 \\div 2 = 4", "explanation": "Five percent is half of ten percent, so we halve the $8$.", "diagram": null },
        { "stepNumber": 3, "description": "Combine the blocks.", "workingLatex": "15\\% = 10\\% + 5\\%", "explanation": "Fifteen percent is simply ten percent plus five percent.", "diagram": null },
        { "stepNumber": 4, "description": "Add the two parts.", "workingLatex": "8 + 4 = 12", "explanation": "Adding the $10\\%$ and $5\\%$ pieces gives the full $15\\%$.", "diagram": null },
        { "stepNumber": 5, "description": "State the result.", "workingLatex": "15\\% \\text{ of } 80 = 12", "explanation": "So fifteen percent of $80$ is $12$.", "diagram": null },
        { "stepNumber": 6, "description": "Write the final answer.", "workingLatex": "12", "explanation": "So $15\\%$ of $80$ is $12$.", "diagram": null }
      ],
      "finalAnswer": "$12$"
    }
  },
  {
    "id": "gcse.number.percentage-operators.q012",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Percentages as operators",
    "subtopicId": "gcse.number.percentage-operators",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "numeric",
    "tags": ["percentage of amount", "decimal multiplier", "twelve percent"],
    "questionText": "Work out $12\\%$ of $300$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Turn the percentage into a decimal.", "workingLatex": "12\\% = 0.12", "explanation": "Dividing $12$ by $100$ gives the decimal multiplier $0.12$.", "diagram": null },
        { "stepNumber": 2, "description": "Rewrite \"of\" as multiply.", "workingLatex": "0.12 \\times 300", "explanation": "Finding a percentage of an amount is a multiplication by the decimal form.", "diagram": null },
        { "stepNumber": 3, "description": "Multiply the whole numbers.", "workingLatex": "12 \\times 300 = 3600", "explanation": "Ignoring the decimal point first keeps the arithmetic simple.", "diagram": null },
        { "stepNumber": 4, "description": "Put the decimal point back.", "workingLatex": "3600 \\div 100 = 36", "explanation": "Because $0.12 = 12 \\div 100$, we divide the product by $100$.", "diagram": null },
        { "stepNumber": 5, "description": "State the result.", "workingLatex": "12\\% \\text{ of } 300 = 36", "explanation": "So twelve percent of $300$ is $36$.", "diagram": null },
        { "stepNumber": 6, "description": "Write the final answer.", "workingLatex": "36", "explanation": "So $12\\%$ of $300$ is $36$.", "diagram": null }
      ],
      "finalAnswer": "$36$"
    }
  },
  {
    "id": "gcse.number.percentage-operators.q013",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Percentages as operators",
    "subtopicId": "gcse.number.percentage-operators",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "numeric",
    "tags": ["percentage of amount", "sixty percent", "building blocks"],
    "questionText": "Work out $60\\%$ of $45$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Plan using $10\\%$.", "workingLatex": "60\\% = 6 \\times 10\\%", "explanation": "Sixty percent is six lots of ten percent, easy to build from a tenth.", "diagram": null },
        { "stepNumber": 2, "description": "Find $10\\%$.", "workingLatex": "45 \\div 10 = 4.5", "explanation": "Dividing by $10$ gives one tenth of $45$.", "diagram": null },
        { "stepNumber": 3, "description": "Take six lots.", "workingLatex": "60\\% = 6 \\times 10\\%", "explanation": "We need six tenths, so multiply the tenth by $6$.", "diagram": null },
        { "stepNumber": 4, "description": "Do the multiplication.", "workingLatex": "6 \\times 4.5 = 27", "explanation": "Six lots of $4.5$ give $27$.", "diagram": null },
        { "stepNumber": 5, "description": "State the result.", "workingLatex": "60\\% \\text{ of } 45 = 27", "explanation": "So three fifths of $45$ is $27$.", "diagram": null },
        { "stepNumber": 6, "description": "Check with a decimal multiplier.", "workingLatex": "0.6 \\times 45 = 27", "explanation": "Multiplying by $0.6$ gives the same result, confirming the answer.", "diagram": null },
        { "stepNumber": 7, "description": "Write the final answer.", "workingLatex": "27", "explanation": "So $60\\%$ of $45$ is $27$.", "diagram": null }
      ],
      "finalAnswer": "$27$"
    }
  },
  {
    "id": "gcse.number.percentage-operators.q014",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Percentages as operators",
    "subtopicId": "gcse.number.percentage-operators",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "numeric",
    "tags": ["percentage of amount", "thirty-five percent", "building blocks"],
    "questionText": "Work out $35\\%$ of $200$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Find $10\\%$.", "workingLatex": "200 \\div 10 = 20", "explanation": "Ten percent of $200$ is found by dividing by $10$.", "diagram": null },
        { "stepNumber": 2, "description": "Find $5\\%$.", "workingLatex": "20 \\div 2 = 10", "explanation": "Five percent is half of ten percent, so we halve the $20$.", "diagram": null },
        { "stepNumber": 3, "description": "Make $30\\%$.", "workingLatex": "3 \\times 20 = 60", "explanation": "Thirty percent is three lots of the ten percent block.", "diagram": null },
        { "stepNumber": 4, "description": "Combine the blocks.", "workingLatex": "35\\% = 30\\% + 5\\%", "explanation": "Thirty-five percent is thirty percent plus five percent.", "diagram": null },
        { "stepNumber": 5, "description": "Add the parts.", "workingLatex": "60 + 10 = 70", "explanation": "Adding the $30\\%$ and $5\\%$ pieces gives the full $35\\%$.", "diagram": null },
        { "stepNumber": 6, "description": "State the result.", "workingLatex": "35\\% \\text{ of } 200 = 70", "explanation": "So thirty-five percent of $200$ is $70$.", "diagram": null },
        { "stepNumber": 7, "description": "Write the final answer.", "workingLatex": "70", "explanation": "So $35\\%$ of $200$ is $70$.", "diagram": null }
      ],
      "finalAnswer": "$70$"
    }
  },
  {
    "id": "gcse.number.percentage-operators.q015",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Percentages as operators",
    "subtopicId": "gcse.number.percentage-operators",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "numeric",
    "tags": ["percentage of amount", "ninety percent", "complement"],
    "questionText": "Work out $90\\%$ of $120$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Find $10\\%$.", "workingLatex": "120 \\div 10 = 12", "explanation": "Ten percent of $120$ is found by dividing by $10$.", "diagram": null },
        { "stepNumber": 2, "description": "See $90\\%$ as the rest.", "workingLatex": "90\\% = 100\\% - 10\\%", "explanation": "Ninety percent is everything except the ten percent, so we can subtract the tenth from the whole.", "diagram": null },
        { "stepNumber": 3, "description": "Subtract the $10\\%$.", "workingLatex": "120 - 12 = 108", "explanation": "Taking the $12$ away from the full $120$ leaves the ninety percent.", "diagram": null },
        { "stepNumber": 4, "description": "State the result.", "workingLatex": "90\\% \\text{ of } 120 = 108", "explanation": "So ninety percent of $120$ is $108$.", "diagram": null },
        { "stepNumber": 5, "description": "Check with a decimal multiplier.", "workingLatex": "0.9 \\times 120 = 108", "explanation": "Multiplying by $0.9$ gives the same value, confirming the answer.", "diagram": null },
        { "stepNumber": 6, "description": "Write the final answer.", "workingLatex": "108", "explanation": "So $90\\%$ of $120$ is $108$.", "diagram": null }
      ],
      "finalAnswer": "$108$"
    }
  },
  {
    "id": "gcse.number.percentage-operators.q016",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Percentages as operators",
    "subtopicId": "gcse.number.percentage-operators",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "numeric",
    "tags": ["percentage of amount", "two percent", "one percent"],
    "questionText": "Work out $2\\%$ of $450$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall what $1\\%$ means.", "workingLatex": "1\\% = \\frac{1}{100}", "explanation": "One percent is one hundredth, found by dividing by $100$.", "diagram": null },
        { "stepNumber": 2, "description": "Find $1\\%$.", "workingLatex": "450 \\div 100 = 4.5", "explanation": "Dividing $450$ by $100$ gives the one percent building block.", "diagram": null },
        { "stepNumber": 3, "description": "Double for $2\\%$.", "workingLatex": "2\\% = 2 \\times 1\\%", "explanation": "Two percent is just twice one percent.", "diagram": null },
        { "stepNumber": 4, "description": "Do the doubling.", "workingLatex": "2 \\times 4.5 = 9", "explanation": "Two lots of $4.5$ give $9$.", "diagram": null },
        { "stepNumber": 5, "description": "State the result.", "workingLatex": "2\\% \\text{ of } 450 = 9", "explanation": "So two percent of $450$ is $9$.", "diagram": null },
        { "stepNumber": 6, "description": "Write the final answer.", "workingLatex": "9", "explanation": "So $2\\%$ of $450$ is $9$.", "diagram": null }
      ],
      "finalAnswer": "$9$"
    }
  },
  {
    "id": "gcse.number.percentage-operators.q017",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Percentages as operators",
    "subtopicId": "gcse.number.percentage-operators",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "numeric",
    "tags": ["percentage of amount", "seventy percent", "building blocks"],
    "questionText": "Work out $70\\%$ of $250$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Plan using $10\\%$.", "workingLatex": "70\\% = 7 \\times 10\\%", "explanation": "Seventy percent is seven lots of ten percent.", "diagram": null },
        { "stepNumber": 2, "description": "Find $10\\%$.", "workingLatex": "250 \\div 10 = 25", "explanation": "Dividing by $10$ gives one tenth of $250$.", "diagram": null },
        { "stepNumber": 3, "description": "Take seven lots.", "workingLatex": "70\\% = 7 \\times 10\\%", "explanation": "We need seven tenths, so multiply the tenth by $7$.", "diagram": null },
        { "stepNumber": 4, "description": "Do the multiplication.", "workingLatex": "7 \\times 25 = 175", "explanation": "Seven lots of $25$ give $175$.", "diagram": null },
        { "stepNumber": 5, "description": "State the result.", "workingLatex": "70\\% \\text{ of } 250 = 175", "explanation": "So seventy percent of $250$ is $175$.", "diagram": null },
        { "stepNumber": 6, "description": "Check with a decimal multiplier.", "workingLatex": "0.7 \\times 250 = 175", "explanation": "Multiplying by $0.7$ gives the same result, confirming the answer.", "diagram": null },
        { "stepNumber": 7, "description": "Write the final answer.", "workingLatex": "175", "explanation": "So $70\\%$ of $250$ is $175$.", "diagram": null }
      ],
      "finalAnswer": "$175$"
    }
  },
  {
    "id": "gcse.number.percentage-operators.q018",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Percentages as operators",
    "subtopicId": "gcse.number.percentage-operators",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "numeric",
    "tags": ["percentage of amount", "forty-five percent", "building blocks"],
    "questionText": "Work out $45\\%$ of $80$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Find $10\\%$.", "workingLatex": "80 \\div 10 = 8", "explanation": "Ten percent of $80$ is found by dividing by $10$.", "diagram": null },
        { "stepNumber": 2, "description": "Find $5\\%$.", "workingLatex": "8 \\div 2 = 4", "explanation": "Five percent is half of ten percent, so we halve the $8$.", "diagram": null },
        { "stepNumber": 3, "description": "Make $40\\%$.", "workingLatex": "4 \\times 8 = 32", "explanation": "Forty percent is four lots of the ten percent block.", "diagram": null },
        { "stepNumber": 4, "description": "Combine the blocks.", "workingLatex": "45\\% = 40\\% + 5\\%", "explanation": "Forty-five percent is forty percent plus five percent.", "diagram": null },
        { "stepNumber": 5, "description": "Add the parts.", "workingLatex": "32 + 4 = 36", "explanation": "Adding the $40\\%$ and $5\\%$ pieces gives the full $45\\%$.", "diagram": null },
        { "stepNumber": 6, "description": "State the result.", "workingLatex": "45\\% \\text{ of } 80 = 36", "explanation": "So forty-five percent of $80$ is $36$.", "diagram": null },
        { "stepNumber": 7, "description": "Write the final answer.", "workingLatex": "36", "explanation": "So $45\\%$ of $80$ is $36$.", "diagram": null }
      ],
      "finalAnswer": "$36$"
    }
  },
  {
    "id": "gcse.number.percentage-operators.q019",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Percentages as operators",
    "subtopicId": "gcse.number.percentage-operators",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "numeric",
    "tags": ["percentage of amount", "decimal multiplier", "eight percent"],
    "questionText": "Work out $8\\%$ of $150$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Turn the percentage into a decimal.", "workingLatex": "8\\% = 0.08", "explanation": "Dividing $8$ by $100$ gives the decimal multiplier $0.08$.", "diagram": null },
        { "stepNumber": 2, "description": "Rewrite \"of\" as multiply.", "workingLatex": "0.08 \\times 150", "explanation": "Finding a percentage of an amount is a multiplication by the decimal form.", "diagram": null },
        { "stepNumber": 3, "description": "Multiply the whole numbers.", "workingLatex": "8 \\times 150 = 1200", "explanation": "Ignoring the decimal point first keeps the arithmetic simple.", "diagram": null },
        { "stepNumber": 4, "description": "Put the decimal point back.", "workingLatex": "1200 \\div 100 = 12", "explanation": "Because $0.08 = 8 \\div 100$, we divide the product by $100$.", "diagram": null },
        { "stepNumber": 5, "description": "State the result.", "workingLatex": "8\\% \\text{ of } 150 = 12", "explanation": "So eight percent of $150$ is $12$.", "diagram": null },
        { "stepNumber": 6, "description": "Write the final answer.", "workingLatex": "12", "explanation": "So $8\\%$ of $150$ is $12$.", "diagram": null }
      ],
      "finalAnswer": "$12$"
    }
  },
  {
    "id": "gcse.number.percentage-operators.q020",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Percentages as operators",
    "subtopicId": "gcse.number.percentage-operators",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "numeric",
    "tags": ["percentage of amount", "fifty-five percent", "building blocks"],
    "questionText": "Work out $55\\%$ of $400$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Find $50\\%$.", "workingLatex": "400 \\div 2 = 200", "explanation": "Fifty percent is a half, found by dividing by $2$.", "diagram": null },
        { "stepNumber": 2, "description": "Find $10\\%$.", "workingLatex": "400 \\div 10 = 40", "explanation": "Ten percent is found by dividing by $10$.", "diagram": null },
        { "stepNumber": 3, "description": "Find $5\\%$.", "workingLatex": "40 \\div 2 = 20", "explanation": "Five percent is half of ten percent, so we halve the $40$.", "diagram": null },
        { "stepNumber": 4, "description": "Combine the blocks.", "workingLatex": "55\\% = 50\\% + 5\\%", "explanation": "Fifty-five percent is fifty percent plus five percent.", "diagram": null },
        { "stepNumber": 5, "description": "Add the parts.", "workingLatex": "200 + 20 = 220", "explanation": "Adding the $50\\%$ and $5\\%$ pieces gives the full $55\\%$.", "diagram": null },
        { "stepNumber": 6, "description": "State the result.", "workingLatex": "55\\% \\text{ of } 400 = 220", "explanation": "So fifty-five percent of $400$ is $220$.", "diagram": null },
        { "stepNumber": 7, "description": "Write the final answer.", "workingLatex": "220", "explanation": "So $55\\%$ of $400$ is $220$.", "diagram": null }
      ],
      "finalAnswer": "$220$"
    }
  },
  {
    "id": "gcse.number.percentage-operators.q021",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Percentages as operators",
    "subtopicId": "gcse.number.percentage-operators",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "numeric",
    "tags": ["percentage of amount", "decimal multiplier", "twenty-two percent"],
    "questionText": "Work out $22\\%$ of $50$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Turn the percentage into a decimal.", "workingLatex": "22\\% = 0.22", "explanation": "Dividing $22$ by $100$ gives the decimal multiplier $0.22$.", "diagram": null },
        { "stepNumber": 2, "description": "Rewrite \"of\" as multiply.", "workingLatex": "0.22 \\times 50", "explanation": "A percentage of an amount is found by multiplying by the decimal form.", "diagram": null },
        { "stepNumber": 3, "description": "Multiply the whole numbers.", "workingLatex": "22 \\times 50 = 1100", "explanation": "Ignoring the decimal point first keeps the multiplication simple.", "diagram": null },
        { "stepNumber": 4, "description": "Put the decimal point back.", "workingLatex": "1100 \\div 100 = 11", "explanation": "Because $0.22 = 22 \\div 100$, we divide the product by $100$.", "diagram": null },
        { "stepNumber": 5, "description": "State the result.", "workingLatex": "22\\% \\text{ of } 50 = 11", "explanation": "So twenty-two percent of $50$ is $11$.", "diagram": null },
        { "stepNumber": 6, "description": "Write the final answer.", "workingLatex": "11", "explanation": "So $22\\%$ of $50$ is $11$.", "diagram": null }
      ],
      "finalAnswer": "$11$"
    }
  },
  {
    "id": "gcse.number.percentage-operators.q022",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Percentages as operators",
    "subtopicId": "gcse.number.percentage-operators",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "numeric",
    "tags": ["percentage increase", "multiplier", "ten percent"],
    "questionText": "Increase $200$ by $10\\%$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Understand an increase.", "workingLatex": "\\text{new} = \\text{original} + \\text{increase}", "explanation": "Increasing means adding an extra part on top of the original amount.", "diagram": null },
        { "stepNumber": 2, "description": "Find $10\\%$ of $200$.", "workingLatex": "200 \\div 10 = 20", "explanation": "The extra part is ten percent of the starting amount.", "diagram": null },
        { "stepNumber": 3, "description": "Add it on.", "workingLatex": "200 + 20 = 220", "explanation": "Adding the extra $20$ to the original $200$ gives the increased amount.", "diagram": null },
        { "stepNumber": 4, "description": "See the multiplier method.", "workingLatex": "100\\% + 10\\% = 110\\% = 1.1", "explanation": "The new amount is $110\\%$ of the old, and $110\\%$ as a decimal is $1.1$.", "diagram": null },
        { "stepNumber": 5, "description": "Multiply by the multiplier.", "workingLatex": "1.1 \\times 200 = 220", "explanation": "Multiplying by $1.1$ does the whole increase in one step and agrees with our answer.", "diagram": null },
        { "stepNumber": 6, "description": "State the result.", "workingLatex": "200 \\to 220", "explanation": "After a ten percent increase the amount is $220$.", "diagram": null },
        { "stepNumber": 7, "description": "Write the final answer.", "workingLatex": "220", "explanation": "So $200$ increased by $10\\%$ is $220$.", "diagram": null }
      ],
      "finalAnswer": "$220$"
    }
  },
  {
    "id": "gcse.number.percentage-operators.q023",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Percentages as operators",
    "subtopicId": "gcse.number.percentage-operators",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "numeric",
    "tags": ["percentage decrease", "multiplier", "twenty percent"],
    "questionText": "Decrease $80$ by $20\\%$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Understand a decrease.", "workingLatex": "\\text{new} = \\text{original} - \\text{decrease}", "explanation": "Decreasing means taking a part away from the original amount.", "diagram": null },
        { "stepNumber": 2, "description": "Find $20\\%$ of $80$.", "workingLatex": "80 \\div 10 = 8", "explanation": "First find $10\\%$, which is $8$.", "diagram": null },
        { "stepNumber": 3, "description": "Double for $20\\%$.", "workingLatex": "2 \\times 8 = 16", "explanation": "Twenty percent is twice ten percent, so the part to remove is $16$.", "diagram": null },
        { "stepNumber": 4, "description": "Subtract it.", "workingLatex": "80 - 16 = 64", "explanation": "Taking the $16$ away from $80$ gives the decreased amount.", "diagram": null },
        { "stepNumber": 5, "description": "See the multiplier method.", "workingLatex": "100\\% - 20\\% = 80\\% = 0.8", "explanation": "After removing $20\\%$ we keep $80\\%$, which as a decimal is $0.8$.", "diagram": null },
        { "stepNumber": 6, "description": "Multiply by the multiplier.", "workingLatex": "0.8 \\times 80 = 64", "explanation": "Multiplying by $0.8$ does the whole decrease in one step and matches our answer.", "diagram": null },
        { "stepNumber": 7, "description": "Write the final answer.", "workingLatex": "64", "explanation": "So $80$ decreased by $20\\%$ is $64$.", "diagram": null }
      ],
      "finalAnswer": "$64$"
    }
  },
  {
    "id": "gcse.number.percentage-operators.q024",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Percentages as operators",
    "subtopicId": "gcse.number.percentage-operators",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "numeric",
    "tags": ["percentage increase", "multiplier", "twenty-five percent"],
    "questionText": "Increase $60$ by $25\\%$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Understand an increase.", "workingLatex": "\\text{new} = \\text{original} + \\text{increase}", "explanation": "We add a quarter of the original on top of it.", "diagram": null },
        { "stepNumber": 2, "description": "Find $25\\%$ of $60$.", "workingLatex": "60 \\div 4 = 15", "explanation": "Twenty-five percent is a quarter, found by dividing by $4$.", "diagram": null },
        { "stepNumber": 3, "description": "Add it on.", "workingLatex": "60 + 15 = 75", "explanation": "Adding the extra $15$ to $60$ gives the increased amount.", "diagram": null },
        { "stepNumber": 4, "description": "See the multiplier method.", "workingLatex": "100\\% + 25\\% = 125\\% = 1.25", "explanation": "The new amount is $125\\%$ of the old, which is $1.25$ as a decimal.", "diagram": null },
        { "stepNumber": 5, "description": "Multiply by the multiplier.", "workingLatex": "1.25 \\times 60 = 75", "explanation": "Multiplying by $1.25$ does the increase in one step and agrees with our answer.", "diagram": null },
        { "stepNumber": 6, "description": "State the result.", "workingLatex": "60 \\to 75", "explanation": "After a twenty-five percent increase the amount is $75$.", "diagram": null },
        { "stepNumber": 7, "description": "Write the final answer.", "workingLatex": "75", "explanation": "So $60$ increased by $25\\%$ is $75$.", "diagram": null }
      ],
      "finalAnswer": "$75$"
    }
  },
  {
    "id": "gcse.number.percentage-operators.q025",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Percentages as operators",
    "subtopicId": "gcse.number.percentage-operators",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "numeric",
    "tags": ["percentage decrease", "multiplier", "thirty percent"],
    "questionText": "Decrease $150$ by $30\\%$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Understand a decrease.", "workingLatex": "\\text{new} = \\text{original} - \\text{decrease}", "explanation": "We take thirty percent away from the original amount.", "diagram": null },
        { "stepNumber": 2, "description": "Find $10\\%$.", "workingLatex": "150 \\div 10 = 15", "explanation": "Ten percent of $150$ is $15$, a useful building block.", "diagram": null },
        { "stepNumber": 3, "description": "Make $30\\%$.", "workingLatex": "3 \\times 15 = 45", "explanation": "Thirty percent is three lots of ten percent, so the part to remove is $45$.", "diagram": null },
        { "stepNumber": 4, "description": "Subtract it.", "workingLatex": "150 - 45 = 105", "explanation": "Taking $45$ away from $150$ gives the decreased amount.", "diagram": null },
        { "stepNumber": 5, "description": "See the multiplier method.", "workingLatex": "100\\% - 30\\% = 70\\% = 0.7", "explanation": "After removing $30\\%$ we keep $70\\%$, which is $0.7$ as a decimal.", "diagram": null },
        { "stepNumber": 6, "description": "Multiply by the multiplier.", "workingLatex": "0.7 \\times 150 = 105", "explanation": "Multiplying by $0.7$ does the decrease in one step and matches our answer.", "diagram": null },
        { "stepNumber": 7, "description": "Write the final answer.", "workingLatex": "105", "explanation": "So $150$ decreased by $30\\%$ is $105$.", "diagram": null }
      ],
      "finalAnswer": "$105$"
    }
  },
  {
    "id": "gcse.number.percentage-operators.q026",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Percentages as operators",
    "subtopicId": "gcse.number.percentage-operators",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "numeric",
    "tags": ["percentage increase", "multiplier", "five percent"],
    "questionText": "Increase $40$ by $5\\%$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Understand an increase.", "workingLatex": "\\text{new} = \\text{original} + \\text{increase}", "explanation": "We add a small five percent part on top of the original.", "diagram": null },
        { "stepNumber": 2, "description": "Find $10\\%$.", "workingLatex": "40 \\div 10 = 4", "explanation": "Ten percent of $40$ is $4$.", "diagram": null },
        { "stepNumber": 3, "description": "Halve for $5\\%$.", "workingLatex": "4 \\div 2 = 2", "explanation": "Five percent is half of ten percent, so the extra part is $2$.", "diagram": null },
        { "stepNumber": 4, "description": "Add it on.", "workingLatex": "40 + 2 = 42", "explanation": "Adding the extra $2$ to $40$ gives the increased amount.", "diagram": null },
        { "stepNumber": 5, "description": "See the multiplier method.", "workingLatex": "100\\% + 5\\% = 105\\% = 1.05", "explanation": "The new amount is $105\\%$ of the old, which is $1.05$ as a decimal.", "diagram": null },
        { "stepNumber": 6, "description": "Multiply by the multiplier.", "workingLatex": "1.05 \\times 40 = 42", "explanation": "Multiplying by $1.05$ does the increase in one step and agrees with our answer.", "diagram": null },
        { "stepNumber": 7, "description": "Write the final answer.", "workingLatex": "42", "explanation": "So $40$ increased by $5\\%$ is $42$.", "diagram": null }
      ],
      "finalAnswer": "$42$"
    }
  },
  {
    "id": "gcse.number.percentage-operators.q027",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Percentages as operators",
    "subtopicId": "gcse.number.percentage-operators",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "numeric",
    "tags": ["percentage decrease", "multiplier", "forty percent"],
    "questionText": "Decrease $250$ by $40\\%$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Understand a decrease.", "workingLatex": "\\text{new} = \\text{original} - \\text{decrease}", "explanation": "We take forty percent away from the original amount.", "diagram": null },
        { "stepNumber": 2, "description": "Find $10\\%$.", "workingLatex": "250 \\div 10 = 25", "explanation": "Ten percent of $250$ is $25$.", "diagram": null },
        { "stepNumber": 3, "description": "Make $40\\%$.", "workingLatex": "4 \\times 25 = 100", "explanation": "Forty percent is four lots of ten percent, so the part to remove is $100$.", "diagram": null },
        { "stepNumber": 4, "description": "Subtract it.", "workingLatex": "250 - 100 = 150", "explanation": "Taking $100$ away from $250$ gives the decreased amount.", "diagram": null },
        { "stepNumber": 5, "description": "See the multiplier method.", "workingLatex": "100\\% - 40\\% = 60\\% = 0.6", "explanation": "After removing $40\\%$ we keep $60\\%$, which is $0.6$ as a decimal.", "diagram": null },
        { "stepNumber": 6, "description": "Multiply by the multiplier.", "workingLatex": "0.6 \\times 250 = 150", "explanation": "Multiplying by $0.6$ does the decrease in one step and matches our answer.", "diagram": null },
        { "stepNumber": 7, "description": "Write the final answer.", "workingLatex": "150", "explanation": "So $250$ decreased by $40\\%$ is $150$.", "diagram": null }
      ],
      "finalAnswer": "$150$"
    }
  },
  {
    "id": "gcse.number.percentage-operators.q028",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Percentages as operators",
    "subtopicId": "gcse.number.percentage-operators",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "value",
    "tags": ["percentage increase", "money", "multiplier", "fifteen percent"],
    "questionText": "A jacket costs $\\pounds 120$. Its price rises by $15\\%$. Work out the new price.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Understand a price rise.", "workingLatex": "\\text{new} = \\text{original} + \\text{increase}", "explanation": "A rise adds an extra part on top of the current price.", "diagram": null },
        { "stepNumber": 2, "description": "Find $10\\%$.", "workingLatex": "120 \\div 10 = 12", "explanation": "Ten percent of $\\pounds 120$ is $\\pounds 12$.", "diagram": null },
        { "stepNumber": 3, "description": "Find $5\\%$.", "workingLatex": "12 \\div 2 = 6", "explanation": "Five percent is half of ten percent, so it is $\\pounds 6$.", "diagram": null },
        { "stepNumber": 4, "description": "Make $15\\%$.", "workingLatex": "12 + 6 = 18", "explanation": "Fifteen percent is ten percent plus five percent, giving $\\pounds 18$.", "diagram": null },
        { "stepNumber": 5, "description": "Add it on.", "workingLatex": "120 + 18 = 138", "explanation": "Adding the $\\pounds 18$ rise to the original price gives the new price.", "diagram": null },
        { "stepNumber": 6, "description": "Check with a multiplier.", "workingLatex": "1.15 \\times 120 = 138", "explanation": "Multiplying by $1.15$ does the whole rise in one step and confirms the answer.", "diagram": null },
        { "stepNumber": 7, "description": "Write the final answer.", "workingLatex": "\\pounds 138.00", "explanation": "So the new price of the jacket is $\\pounds 138$.", "diagram": null }
      ],
      "finalAnswer": "$\\pounds 138.00$"
    }
  },
  {
    "id": "gcse.number.percentage-operators.q029",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Percentages as operators",
    "subtopicId": "gcse.number.percentage-operators",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "value",
    "tags": ["percentage of money", "decimal multiplier"],
    "questionText": "Work out $18\\%$ of $\\pounds 250$, giving your answer in pounds and pence.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Understand the task.", "workingLatex": "18\\% \\text{ of } \\pounds 250", "explanation": "We need a part of the money, namely eighteen hundredths of $\\pounds 250$.", "diagram": null },
        { "stepNumber": 2, "description": "Turn the percentage into a decimal.", "workingLatex": "18\\% = \\frac{18}{100} = 0.18", "explanation": "Dividing by $100$ turns the percentage into a decimal multiplier.", "diagram": null },
        { "stepNumber": 3, "description": "Rewrite \"of\" as multiply.", "workingLatex": "0.18 \\times 250", "explanation": "Finding a percentage of an amount is a multiplication by the decimal form.", "diagram": null },
        { "stepNumber": 4, "description": "Multiply the whole numbers.", "workingLatex": "18 \\times 250 = 4500", "explanation": "Ignoring the decimal point first keeps the arithmetic simple.", "diagram": null },
        { "stepNumber": 5, "description": "Put the decimal point back.", "workingLatex": "4500 \\div 100 = 45", "explanation": "Because $0.18 = 18 \\div 100$, we divide the product by $100$.", "diagram": null },
        { "stepNumber": 6, "description": "State the calculation result.", "workingLatex": "0.18 \\times 250 = 45", "explanation": "So the decimal-multiplier method gives $45$.", "diagram": null },
        { "stepNumber": 7, "description": "Sense-check with $10\\%$.", "workingLatex": "10\\% \\text{ of } 250 = 25", "explanation": "Ten percent is $\\pounds 25$, so eighteen percent should be a little under double; $\\pounds 45$ fits sensibly.", "diagram": null },
        { "stepNumber": 8, "description": "Confirm using $1\\%$.", "workingLatex": "18 \\times 2.5 = 45", "explanation": "One percent is $\\pounds 2.50$, and eighteen lots of it also give $\\pounds 45$.", "diagram": null },
        { "stepNumber": 9, "description": "Write the final answer in money form.", "workingLatex": "\\pounds 45.00", "explanation": "Money is written to two decimal places, so the answer is $\\pounds 45.00$.", "diagram": null }
      ],
      "finalAnswer": "$\\pounds 45.00$"
    }
  },
  {
    "id": "gcse.number.percentage-operators.q030",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Percentages as operators",
    "subtopicId": "gcse.number.percentage-operators",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "value",
    "tags": ["percentage decrease", "sale price", "money", "multiplier"],
    "questionText": "A coat costs $\\pounds 80$. In a sale it is reduced by $15\\%$. Work out the sale price.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Understand a sale reduction.", "workingLatex": "\\text{sale} = \\text{original} - \\text{reduction}", "explanation": "A sale takes a percentage off, so we subtract the reduction from the original price.", "diagram": null },
        { "stepNumber": 2, "description": "Find $10\\%$.", "workingLatex": "80 \\div 10 = 8", "explanation": "Ten percent of $\\pounds 80$ is $\\pounds 8$.", "diagram": null },
        { "stepNumber": 3, "description": "Find $5\\%$.", "workingLatex": "8 \\div 2 = 4", "explanation": "Five percent is half of ten percent, so it is $\\pounds 4$.", "diagram": null },
        { "stepNumber": 4, "description": "Make $15\\%$.", "workingLatex": "8 + 4 = 12", "explanation": "Fifteen percent is ten percent plus five percent, giving $\\pounds 12$.", "diagram": null },
        { "stepNumber": 5, "description": "Identify the reduction.", "workingLatex": "15\\% \\text{ of } 80 = 12", "explanation": "So the amount taken off is $\\pounds 12$.", "diagram": null },
        { "stepNumber": 6, "description": "Subtract from the price.", "workingLatex": "80 - 12 = 68", "explanation": "Taking $\\pounds 12$ off $\\pounds 80$ gives the sale price.", "diagram": null },
        { "stepNumber": 7, "description": "See the multiplier method.", "workingLatex": "100\\% - 15\\% = 85\\%", "explanation": "After the reduction we pay $85\\%$ of the original price.", "diagram": null },
        { "stepNumber": 8, "description": "Use the decimal multiplier.", "workingLatex": "0.85 \\times 80 = 68", "explanation": "Multiplying by $0.85$ gives the sale price directly and confirms the answer.", "diagram": null },
        { "stepNumber": 9, "description": "Write the final answer in money form.", "workingLatex": "\\pounds 68.00", "explanation": "So the sale price of the coat is $\\pounds 68$.", "diagram": null }
      ],
      "finalAnswer": "$\\pounds 68.00$"
    }
  },
  {
    "id": "gcse.number.percentage-operators.q031",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Percentages as operators",
    "subtopicId": "gcse.number.percentage-operators",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "value",
    "tags": ["percentage increase", "VAT", "money", "multiplier"],
    "questionText": "A repair costs $\\pounds 45$ before VAT. VAT is charged at $20\\%$. Work out the total cost including VAT.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Understand VAT.", "workingLatex": "\\text{total} = \\text{price} + \\text{VAT}", "explanation": "VAT is a tax added on top of the price, so we add it to the original cost.", "diagram": null },
        { "stepNumber": 2, "description": "Find $10\\%$.", "workingLatex": "45 \\div 10 = 4.5", "explanation": "Ten percent of $\\pounds 45$ is $\\pounds 4.50$.", "diagram": null },
        { "stepNumber": 3, "description": "Double for $20\\%$.", "workingLatex": "2 \\times 4.5 = 9", "explanation": "Twenty percent is twice ten percent, so the VAT is $\\pounds 9$.", "diagram": null },
        { "stepNumber": 4, "description": "Identify the VAT amount.", "workingLatex": "20\\% \\text{ of } 45 = 9", "explanation": "So the VAT charged is $\\pounds 9$.", "diagram": null },
        { "stepNumber": 5, "description": "Add it to the price.", "workingLatex": "45 + 9 = 54", "explanation": "Adding the $\\pounds 9$ VAT to $\\pounds 45$ gives the total cost.", "diagram": null },
        { "stepNumber": 6, "description": "See the multiplier method.", "workingLatex": "100\\% + 20\\% = 120\\%", "explanation": "The total is $120\\%$ of the pre-VAT price.", "diagram": null },
        { "stepNumber": 7, "description": "Use the decimal multiplier.", "workingLatex": "1.2 \\times 45 = 54", "explanation": "Multiplying by $1.2$ adds the VAT in one step and confirms the answer.", "diagram": null },
        { "stepNumber": 8, "description": "State the result.", "workingLatex": "\\text{total} = 54", "explanation": "The full amount to pay is $\\pounds 54$.", "diagram": null },
        { "stepNumber": 9, "description": "Write the final answer in money form.", "workingLatex": "\\pounds 54.00", "explanation": "So the total cost including VAT is $\\pounds 54$.", "diagram": null }
      ],
      "finalAnswer": "$\\pounds 54.00$"
    }
  },
  {
    "id": "gcse.number.percentage-operators.q032",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Percentages as operators",
    "subtopicId": "gcse.number.percentage-operators",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "value",
    "tags": ["percentage of money", "tip", "twelve and a half percent", "total"],
    "questionText": "A restaurant bill is $\\pounds 36$. A tip of $12.5\\%$ is added. Work out the total amount paid.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recognise a useful fraction.", "workingLatex": "12.5\\% = \\frac{1}{8}", "explanation": "Twelve and a half percent is exactly one eighth, which makes the tip easy to find.", "diagram": null },
        { "stepNumber": 2, "description": "Divide by $8$.", "workingLatex": "36 \\div 8 = 4.5", "explanation": "Finding an eighth of $\\pounds 36$ gives the tip.", "diagram": null },
        { "stepNumber": 3, "description": "Check with building blocks: $10\\%$.", "workingLatex": "36 \\div 10 = 3.6", "explanation": "Ten percent of the bill is $\\pounds 3.60$.", "diagram": null },
        { "stepNumber": 4, "description": "Find $2.5\\%$.", "workingLatex": "3.6 \\div 4 = 0.9", "explanation": "Two and a half percent is a quarter of ten percent, so it is $\\pounds 0.90$.", "diagram": null },
        { "stepNumber": 5, "description": "Combine to check the tip.", "workingLatex": "3.6 + 0.9 = 4.5", "explanation": "Ten percent plus two and a half percent gives $\\pounds 4.50$, matching the eighth.", "diagram": null },
        { "stepNumber": 6, "description": "Add the tip to the bill.", "workingLatex": "36 + 4.5 = 40.5", "explanation": "Adding the tip to the original bill gives the total paid.", "diagram": null },
        { "stepNumber": 7, "description": "See the multiplier method.", "workingLatex": "1.125 \\times 36 = 40.5", "explanation": "Multiplying by $1.125$ adds the whole tip in one step and confirms the total.", "diagram": null },
        { "stepNumber": 8, "description": "State the result.", "workingLatex": "\\text{total} = 40.5", "explanation": "The total to pay is $\\pounds 40.50$.", "diagram": null },
        { "stepNumber": 9, "description": "Write the final answer in money form.", "workingLatex": "\\pounds 40.50", "explanation": "So the total amount paid is $\\pounds 40.50$.", "diagram": null }
      ],
      "finalAnswer": "$\\pounds 40.50$"
    }
  },
  {
    "id": "gcse.number.percentage-operators.q033",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Percentages as operators",
    "subtopicId": "gcse.number.percentage-operators",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "value",
    "tags": ["percentage of money", "building blocks", "seventeen and a half percent"],
    "questionText": "Work out $17.5\\%$ of $\\pounds 240$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Turn the percentage into a decimal.", "workingLatex": "17.5\\% = 0.175", "explanation": "Dividing $17.5$ by $100$ gives the decimal multiplier.", "diagram": null },
        { "stepNumber": 2, "description": "Plan with building blocks.", "workingLatex": "17.5\\% = 10\\% + 5\\% + 2.5\\%", "explanation": "Splitting into easy tenths, halves of tenths and quarters of tenths avoids a hard multiplication.", "diagram": null },
        { "stepNumber": 3, "description": "Find $10\\%$.", "workingLatex": "240 \\div 10 = 24", "explanation": "Ten percent of $\\pounds 240$ is $\\pounds 24$.", "diagram": null },
        { "stepNumber": 4, "description": "Find $5\\%$.", "workingLatex": "24 \\div 2 = 12", "explanation": "Five percent is half of ten percent, so it is $\\pounds 12$.", "diagram": null },
        { "stepNumber": 5, "description": "Find $2.5\\%$.", "workingLatex": "12 \\div 2 = 6", "explanation": "Two and a half percent is half of five percent, so it is $\\pounds 6$.", "diagram": null },
        { "stepNumber": 6, "description": "Add the blocks.", "workingLatex": "24 + 12 + 6 = 42", "explanation": "Adding the three parts gives the full $17.5\\%$.", "diagram": null },
        { "stepNumber": 7, "description": "State the result.", "workingLatex": "17.5\\% \\text{ of } 240 = 42", "explanation": "So the answer is $\\pounds 42$.", "diagram": null },
        { "stepNumber": 8, "description": "Check with the decimal multiplier.", "workingLatex": "0.175 \\times 240 = 42", "explanation": "Multiplying by $0.175$ gives the same value, confirming the answer.", "diagram": null },
        { "stepNumber": 9, "description": "Write the final answer in money form.", "workingLatex": "\\pounds 42.00", "explanation": "So $17.5\\%$ of $\\pounds 240$ is $\\pounds 42$.", "diagram": null }
      ],
      "finalAnswer": "$\\pounds 42.00$"
    }
  },
  {
    "id": "gcse.number.percentage-operators.q034",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Percentages as operators",
    "subtopicId": "gcse.number.percentage-operators",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "value",
    "tags": ["percentage increase", "salary", "money", "multiplier"],
    "questionText": "A salary of $\\pounds 18000$ is increased by $3\\%$. Work out the new salary.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Understand a pay rise.", "workingLatex": "\\text{new} = \\text{original} + \\text{increase}", "explanation": "A pay rise adds a percentage on top of the current salary.", "diagram": null },
        { "stepNumber": 2, "description": "Find $1\\%$.", "workingLatex": "18000 \\div 100 = 180", "explanation": "One percent of the salary is found by dividing by $100$.", "diagram": null },
        { "stepNumber": 3, "description": "Make $3\\%$.", "workingLatex": "3 \\times 180 = 540", "explanation": "Three percent is three lots of one percent, so the rise is $\\pounds 540$.", "diagram": null },
        { "stepNumber": 4, "description": "Identify the increase.", "workingLatex": "3\\% \\text{ of } 18000 = 540", "explanation": "So the pay rise is $\\pounds 540$.", "diagram": null },
        { "stepNumber": 5, "description": "Add it on.", "workingLatex": "18000 + 540 = 18540", "explanation": "Adding the rise to the original salary gives the new salary.", "diagram": null },
        { "stepNumber": 6, "description": "See the multiplier method.", "workingLatex": "100\\% + 3\\% = 103\\%", "explanation": "The new salary is $103\\%$ of the old one.", "diagram": null },
        { "stepNumber": 7, "description": "Write the multiplier as a decimal.", "workingLatex": "103\\% = 1.03", "explanation": "As a decimal, $103\\%$ is $1.03$.", "diagram": null },
        { "stepNumber": 8, "description": "Use the multiplier.", "workingLatex": "1.03 \\times 18000 = 18540", "explanation": "Multiplying by $1.03$ does the increase in one step and confirms the answer.", "diagram": null },
        { "stepNumber": 9, "description": "Write the final answer in money form.", "workingLatex": "\\pounds 18540.00", "explanation": "So the new salary is $\\pounds 18540$.", "diagram": null }
      ],
      "finalAnswer": "$\\pounds 18540.00$"
    }
  },
  {
    "id": "gcse.number.percentage-operators.q035",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Percentages as operators",
    "subtopicId": "gcse.number.percentage-operators",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "value",
    "tags": ["percentage decrease", "money", "one percent", "multiplier"],
    "questionText": "Decrease $\\pounds 320$ by $12\\%$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Understand a decrease.", "workingLatex": "\\text{new} = \\text{original} - \\text{decrease}", "explanation": "We take twelve percent away from the original amount of money.", "diagram": null },
        { "stepNumber": 2, "description": "Find $1\\%$.", "workingLatex": "320 \\div 100 = 3.2", "explanation": "One percent of $\\pounds 320$ is $\\pounds 3.20$.", "diagram": null },
        { "stepNumber": 3, "description": "Make $12\\%$.", "workingLatex": "12 \\times 3.2 = 38.4", "explanation": "Twelve percent is twelve lots of one percent, so it is $\\pounds 38.40$.", "diagram": null },
        { "stepNumber": 4, "description": "Subtract it.", "workingLatex": "320 - 38.4 = 281.6", "explanation": "Taking $\\pounds 38.40$ away from $\\pounds 320$ gives the decreased amount.", "diagram": null },
        { "stepNumber": 5, "description": "See the multiplier method.", "workingLatex": "100\\% - 12\\% = 88\\%", "explanation": "After the decrease we keep $88\\%$ of the original.", "diagram": null },
        { "stepNumber": 6, "description": "Write the multiplier as a decimal.", "workingLatex": "88\\% = 0.88", "explanation": "As a decimal, $88\\%$ is $0.88$.", "diagram": null },
        { "stepNumber": 7, "description": "Use the multiplier.", "workingLatex": "0.88 \\times 320 = 281.6", "explanation": "Multiplying by $0.88$ does the decrease in one step and confirms the answer.", "diagram": null },
        { "stepNumber": 8, "description": "State the result.", "workingLatex": "\\text{new} = 281.6", "explanation": "The decreased amount is $\\pounds 281.60$.", "diagram": null },
        { "stepNumber": 9, "description": "Write the final answer in money form.", "workingLatex": "\\pounds 281.60", "explanation": "So $\\pounds 320$ decreased by $12\\%$ is $\\pounds 281.60$.", "diagram": null }
      ],
      "finalAnswer": "$\\pounds 281.60$"
    }
  },
  {
    "id": "gcse.number.percentage-operators.q036",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Percentages as operators",
    "subtopicId": "gcse.number.percentage-operators",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "numeric",
    "tags": ["percentage of amount", "building blocks", "sixty-five percent"],
    "questionText": "Work out $65\\%$ of $1400$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Plan with building blocks.", "workingLatex": "65\\% = 50\\% + 10\\% + 5\\%", "explanation": "Splitting into a half, a tenth and half of a tenth keeps every step easy.", "diagram": null },
        { "stepNumber": 2, "description": "Find $50\\%$.", "workingLatex": "1400 \\div 2 = 700", "explanation": "Fifty percent is a half of $1400$.", "diagram": null },
        { "stepNumber": 3, "description": "Find $10\\%$.", "workingLatex": "1400 \\div 10 = 140", "explanation": "Ten percent is a tenth of $1400$.", "diagram": null },
        { "stepNumber": 4, "description": "Find $5\\%$.", "workingLatex": "140 \\div 2 = 70", "explanation": "Five percent is half of ten percent.", "diagram": null },
        { "stepNumber": 5, "description": "Make $15\\%$.", "workingLatex": "140 + 70 = 210", "explanation": "Adding the ten and five percent gives fifteen percent.", "diagram": null },
        { "stepNumber": 6, "description": "Add to $50\\%$.", "workingLatex": "700 + 210 = 910", "explanation": "Fifty percent plus fifteen percent makes the full sixty-five percent.", "diagram": null },
        { "stepNumber": 7, "description": "See the decimal method.", "workingLatex": "65\\% = 0.65", "explanation": "As a decimal, sixty-five percent is $0.65$.", "diagram": null },
        { "stepNumber": 8, "description": "Check with the multiplier.", "workingLatex": "0.65 \\times 1400 = 910", "explanation": "Multiplying by $0.65$ gives the same value, confirming the answer.", "diagram": null },
        { "stepNumber": 9, "description": "Write the final answer.", "workingLatex": "910", "explanation": "So $65\\%$ of $1400$ is $910$.", "diagram": null }
      ],
      "finalAnswer": "$910$"
    }
  },
  {
    "id": "gcse.number.percentage-operators.q037",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Percentages as operators",
    "subtopicId": "gcse.number.percentage-operators",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "value",
    "tags": ["percentage of money", "deposit", "ten percent"],
    "questionText": "A house costs $\\pounds 150000$. A buyer pays a deposit of $10\\%$. Work out the deposit.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Understand a deposit.", "workingLatex": "\\text{deposit} = 10\\% \\text{ of price}", "explanation": "A deposit is a fixed percentage of the total price paid up front.", "diagram": null },
        { "stepNumber": 2, "description": "Recall what $10\\%$ means.", "workingLatex": "10\\% = \\frac{1}{10}", "explanation": "Ten percent is one tenth, found by dividing by $10$.", "diagram": null },
        { "stepNumber": 3, "description": "Divide by $10$.", "workingLatex": "150000 \\div 10 = 15000", "explanation": "One tenth of $\\pounds 150000$ is $\\pounds 15000$.", "diagram": null },
        { "stepNumber": 4, "description": "State the deposit.", "workingLatex": "10\\% \\text{ of } 150000 = 15000", "explanation": "So the deposit is $\\pounds 15000$.", "diagram": null },
        { "stepNumber": 5, "description": "Check with a decimal multiplier.", "workingLatex": "0.1 \\times 150000 = 15000", "explanation": "Multiplying by $0.1$ gives the same result, confirming the deposit.", "diagram": null },
        { "stepNumber": 6, "description": "Check by reversing.", "workingLatex": "15000 \\times 10 = 150000", "explanation": "Ten deposits of this size would rebuild the full price, which makes sense.", "diagram": null },
        { "stepNumber": 7, "description": "Find the amount still owed.", "workingLatex": "150000 - 15000 = 135000", "explanation": "The rest of the price, $\\pounds 135000$, is what remains to be paid.", "diagram": null },
        { "stepNumber": 8, "description": "State the deposit clearly.", "workingLatex": "\\text{deposit} = 15000", "explanation": "The question asks only for the deposit, which is $\\pounds 15000$.", "diagram": null },
        { "stepNumber": 9, "description": "Write the final answer in money form.", "workingLatex": "\\pounds 15000.00", "explanation": "So the deposit is $\\pounds 15000$.", "diagram": null }
      ],
      "finalAnswer": "$\\pounds 15000.00$"
    }
  },
  {
    "id": "gcse.number.percentage-operators.q038",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Percentages as operators",
    "subtopicId": "gcse.number.percentage-operators",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "value",
    "tags": ["percentage increase", "interest", "money", "multiplier"],
    "questionText": "$\\pounds 2500$ is invested for one year at $4\\%$ simple interest. Work out the total amount in the account after one year.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Understand simple interest for one year.", "workingLatex": "\\text{total} = \\text{principal} + \\text{interest}", "explanation": "The interest is a percentage of the money invested, added on after one year.", "diagram": null },
        { "stepNumber": 2, "description": "Find $1\\%$.", "workingLatex": "2500 \\div 100 = 25", "explanation": "One percent of $\\pounds 2500$ is $\\pounds 25$.", "diagram": null },
        { "stepNumber": 3, "description": "Make $4\\%$.", "workingLatex": "4 \\times 25 = 100", "explanation": "Four percent is four lots of one percent, so the interest is $\\pounds 100$.", "diagram": null },
        { "stepNumber": 4, "description": "Identify the interest.", "workingLatex": "4\\% \\text{ of } 2500 = 100", "explanation": "So the interest earned in the year is $\\pounds 100$.", "diagram": null },
        { "stepNumber": 5, "description": "Add it to the principal.", "workingLatex": "2500 + 100 = 2600", "explanation": "Adding the interest to the original investment gives the total balance.", "diagram": null },
        { "stepNumber": 6, "description": "See the multiplier method.", "workingLatex": "100\\% + 4\\% = 104\\%", "explanation": "The total is $104\\%$ of the original amount.", "diagram": null },
        { "stepNumber": 7, "description": "Use the multiplier.", "workingLatex": "1.04 \\times 2500 = 2600", "explanation": "Multiplying by $1.04$ gives the total in one step and confirms the answer.", "diagram": null },
        { "stepNumber": 8, "description": "State the result.", "workingLatex": "\\text{total} = 2600", "explanation": "The account holds $\\pounds 2600$ after one year.", "diagram": null },
        { "stepNumber": 9, "description": "Write the final answer in money form.", "workingLatex": "\\pounds 2600.00", "explanation": "So the total after one year is $\\pounds 2600$.", "diagram": null }
      ],
      "finalAnswer": "$\\pounds 2600.00$"
    }
  },
  {
    "id": "gcse.number.percentage-operators.q039",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Percentages as operators",
    "subtopicId": "gcse.number.percentage-operators",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "value",
    "tags": ["percentage decrease", "discount", "money", "multiplier"],
    "questionText": "A television costs $\\pounds 120$. In a sale it has $35\\%$ off. Work out the sale price.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Understand the discount.", "workingLatex": "\\text{sale} = \\text{original} - \\text{discount}", "explanation": "A discount takes a percentage off, so we subtract it from the original price.", "diagram": null },
        { "stepNumber": 2, "description": "Find $10\\%$.", "workingLatex": "120 \\div 10 = 12", "explanation": "Ten percent of $\\pounds 120$ is $\\pounds 12$.", "diagram": null },
        { "stepNumber": 3, "description": "Make $30\\%$.", "workingLatex": "3 \\times 12 = 36", "explanation": "Thirty percent is three lots of ten percent.", "diagram": null },
        { "stepNumber": 4, "description": "Find $5\\%$.", "workingLatex": "12 \\div 2 = 6", "explanation": "Five percent is half of ten percent.", "diagram": null },
        { "stepNumber": 5, "description": "Make $35\\%$.", "workingLatex": "36 + 6 = 42", "explanation": "Thirty-five percent is thirty percent plus five percent, so the discount is $\\pounds 42$.", "diagram": null },
        { "stepNumber": 6, "description": "Subtract the discount.", "workingLatex": "120 - 42 = 78", "explanation": "Taking $\\pounds 42$ off $\\pounds 120$ gives the sale price.", "diagram": null },
        { "stepNumber": 7, "description": "See the multiplier method.", "workingLatex": "100\\% - 35\\% = 65\\%", "explanation": "After the discount we pay $65\\%$ of the original price.", "diagram": null },
        { "stepNumber": 8, "description": "Use the multiplier.", "workingLatex": "0.65 \\times 120 = 78", "explanation": "Multiplying by $0.65$ gives the sale price directly and confirms the answer.", "diagram": null },
        { "stepNumber": 9, "description": "Write the final answer in money form.", "workingLatex": "\\pounds 78.00", "explanation": "So the sale price of the television is $\\pounds 78$.", "diagram": null }
      ],
      "finalAnswer": "$\\pounds 78.00$"
    }
  },
  {
    "id": "gcse.number.percentage-operators.q040",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Percentages as operators",
    "subtopicId": "gcse.number.percentage-operators",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "value",
    "tags": ["percentage of money", "decimal multiplier", "eight percent"],
    "questionText": "Work out $8\\%$ of $\\pounds 62.50$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Understand the task.", "workingLatex": "8\\% \\text{ of } 62.50", "explanation": "We need eight hundredths of $\\pounds 62.50$.", "diagram": null },
        { "stepNumber": 2, "description": "Turn the percentage into a decimal.", "workingLatex": "8\\% = 0.08", "explanation": "Dividing $8$ by $100$ gives the decimal multiplier.", "diagram": null },
        { "stepNumber": 3, "description": "Rewrite \"of\" as multiply.", "workingLatex": "0.08 \\times 62.5", "explanation": "A percentage of an amount is a multiplication by the decimal form.", "diagram": null },
        { "stepNumber": 4, "description": "Find $1\\%$ first.", "workingLatex": "62.5 \\div 100 = 0.625", "explanation": "One percent of $\\pounds 62.50$ is $\\pounds 0.625$, a helpful stepping stone.", "diagram": null },
        { "stepNumber": 5, "description": "Make $8\\%$.", "workingLatex": "8 \\times 0.625 = 5", "explanation": "Eight lots of one percent give the eight percent value.", "diagram": null },
        { "stepNumber": 6, "description": "State the result.", "workingLatex": "8\\% \\text{ of } 62.5 = 5", "explanation": "So the answer is $\\pounds 5$.", "diagram": null },
        { "stepNumber": 7, "description": "Sense-check with $10\\%$.", "workingLatex": "10\\% \\text{ of } 62.5 = 6.25", "explanation": "Ten percent is $\\pounds 6.25$, so eight percent should be a little less; $\\pounds 5$ is sensible.", "diagram": null },
        { "stepNumber": 8, "description": "Confirm with the multiplier.", "workingLatex": "0.08 \\times 62.5 = 5", "explanation": "Multiplying by $0.08$ gives the same value, confirming the answer.", "diagram": null },
        { "stepNumber": 9, "description": "Write the final answer in money form.", "workingLatex": "\\pounds 5.00", "explanation": "So $8\\%$ of $\\pounds 62.50$ is $\\pounds 5.00$.", "diagram": null }
      ],
      "finalAnswer": "$\\pounds 5.00$"
    }
  },
  {
    "id": "gcse.number.percentage-operators.q041",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Percentages as operators",
    "subtopicId": "gcse.number.percentage-operators",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "numeric",
    "tags": ["percentage increase", "building blocks", "seven and a half percent"],
    "questionText": "A town has a population of $24000$. It increases by $7.5\\%$. Work out the new population.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Understand the increase.", "workingLatex": "\\text{new} = \\text{original} + \\text{increase}", "explanation": "The population grows by a percentage of its current size.", "diagram": null },
        { "stepNumber": 2, "description": "Find $1\\%$.", "workingLatex": "24000 \\div 100 = 240", "explanation": "One percent of $24000$ is $240$.", "diagram": null },
        { "stepNumber": 3, "description": "Make $7\\%$.", "workingLatex": "7 \\times 240 = 1680", "explanation": "Seven percent is seven lots of one percent.", "diagram": null },
        { "stepNumber": 4, "description": "Find $0.5\\%$.", "workingLatex": "240 \\div 2 = 120", "explanation": "A half percent is half of one percent.", "diagram": null },
        { "stepNumber": 5, "description": "Make $7.5\\%$.", "workingLatex": "1680 + 120 = 1800", "explanation": "Seven and a half percent is seven percent plus half a percent, so the increase is $1800$.", "diagram": null },
        { "stepNumber": 6, "description": "Add it on.", "workingLatex": "24000 + 1800 = 25800", "explanation": "Adding the increase to the original gives the new population.", "diagram": null },
        { "stepNumber": 7, "description": "See the multiplier method.", "workingLatex": "100\\% + 7.5\\% = 107.5\\%", "explanation": "The new population is $107.5\\%$ of the old one.", "diagram": null },
        { "stepNumber": 8, "description": "Use the multiplier.", "workingLatex": "1.075 \\times 24000 = 25800", "explanation": "Multiplying by $1.075$ does the increase in one step and confirms the answer.", "diagram": null },
        { "stepNumber": 9, "description": "Write the final answer.", "workingLatex": "25800", "explanation": "So the new population is $25800$.", "diagram": null }
      ],
      "finalAnswer": "$25800$"
    }
  },
  {
    "id": "gcse.number.percentage-operators.q042",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Percentages as operators",
    "subtopicId": "gcse.number.percentage-operators",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "value",
    "tags": ["percentage decrease", "compare deals", "money"],
    "questionText": "A jumper has a normal price of $\\pounds 40$. Shop A offers $25\\%$ off. Shop B offers $\\pounds 8$ off. Which shop is cheaper, and by how much?",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Understand the comparison.", "workingLatex": "\\text{compare Shop A and Shop B}", "explanation": "We work out the final price at each shop, then see which is lower.", "diagram": null },
        { "stepNumber": 2, "description": "Shop A: recognise the fraction.", "workingLatex": "25\\% = \\frac{1}{4}", "explanation": "Twenty-five percent off means a quarter of the price is removed.", "diagram": null },
        { "stepNumber": 3, "description": "Find Shop A's discount.", "workingLatex": "40 \\div 4 = 10", "explanation": "A quarter of $\\pounds 40$ is $\\pounds 10$.", "diagram": null },
        { "stepNumber": 4, "description": "Find Shop A's price.", "workingLatex": "40 - 10 = 30", "explanation": "Taking $\\pounds 10$ off gives Shop A's price of $\\pounds 30$.", "diagram": null },
        { "stepNumber": 5, "description": "Find Shop B's price.", "workingLatex": "40 - 8 = 32", "explanation": "Shop B simply removes a fixed $\\pounds 8$, giving $\\pounds 32$.", "diagram": null },
        { "stepNumber": 6, "description": "Compare the prices.", "workingLatex": "30 < 32", "explanation": "Shop A's price is lower, so Shop A is the cheaper deal.", "diagram": null },
        { "stepNumber": 7, "description": "Find the difference.", "workingLatex": "32 - 30 = 2", "explanation": "The gap between the two prices is $\\pounds 2$.", "diagram": null },
        { "stepNumber": 8, "description": "Interpret the result.", "workingLatex": "\\text{Shop A saves } \\pounds 2", "explanation": "Shop A costs $\\pounds 2$ less than Shop B for the same jumper.", "diagram": null },
        { "stepNumber": 9, "description": "Write the final answer.", "workingLatex": "\\text{Shop A, cheaper by } \\pounds 2", "explanation": "So Shop A is cheaper, by $\\pounds 2$.", "diagram": null }
      ],
      "finalAnswer": "Shop A is cheaper, by $\\pounds 2$."
    }
  },
  {
    "id": "gcse.number.percentage-operators.q043",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Percentages as operators",
    "subtopicId": "gcse.number.percentage-operators",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "value",
    "tags": ["percentage of money", "five percent", "building blocks"],
    "questionText": "Work out $5\\%$ of $\\pounds 3.60$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Understand the task.", "workingLatex": "5\\% \\text{ of } 3.60", "explanation": "We need a small part, five hundredths of $\\pounds 3.60$.", "diagram": null },
        { "stepNumber": 2, "description": "Find $10\\%$.", "workingLatex": "3.6 \\div 10 = 0.36", "explanation": "Ten percent of $\\pounds 3.60$ is $\\pounds 0.36$.", "diagram": null },
        { "stepNumber": 3, "description": "See $5\\%$ as half of $10\\%$.", "workingLatex": "5\\% = \\frac{1}{2} \\times 10\\%", "explanation": "Five percent is half of ten percent.", "diagram": null },
        { "stepNumber": 4, "description": "Halve the $10\\%$ value.", "workingLatex": "0.36 \\div 2 = 0.18", "explanation": "Halving $\\pounds 0.36$ gives the five percent value.", "diagram": null },
        { "stepNumber": 5, "description": "State the result.", "workingLatex": "5\\% \\text{ of } 3.60 = 0.18", "explanation": "So the answer is $\\pounds 0.18$.", "diagram": null },
        { "stepNumber": 6, "description": "See the decimal method.", "workingLatex": "5\\% = 0.05", "explanation": "As a decimal, five percent is $0.05$.", "diagram": null },
        { "stepNumber": 7, "description": "Check with the multiplier.", "workingLatex": "0.05 \\times 3.6 = 0.18", "explanation": "Multiplying by $0.05$ gives the same value, confirming the answer.", "diagram": null },
        { "stepNumber": 8, "description": "Round to money.", "workingLatex": "0.18 = \\pounds 0.18", "explanation": "The value is already an exact number of pence, so no rounding is needed.", "diagram": null },
        { "stepNumber": 9, "description": "Write the final answer in money form.", "workingLatex": "\\pounds 0.18", "explanation": "So $5\\%$ of $\\pounds 3.60$ is $\\pounds 0.18$.", "diagram": null }
      ],
      "finalAnswer": "$\\pounds 0.18$"
    }
  },
  {
    "id": "gcse.number.percentage-operators.q044",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Percentages as operators",
    "subtopicId": "gcse.number.percentage-operators",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "numeric",
    "tags": ["percentage increase", "building blocks", "forty-five percent"],
    "questionText": "Increase $340$ by $45\\%$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Understand an increase.", "workingLatex": "\\text{new} = \\text{original} + \\text{increase}", "explanation": "We add forty-five percent of the original on top of it.", "diagram": null },
        { "stepNumber": 2, "description": "Find $10\\%$.", "workingLatex": "340 \\div 10 = 34", "explanation": "Ten percent of $340$ is $34$.", "diagram": null },
        { "stepNumber": 3, "description": "Make $40\\%$.", "workingLatex": "4 \\times 34 = 136", "explanation": "Forty percent is four lots of ten percent.", "diagram": null },
        { "stepNumber": 4, "description": "Find $5\\%$.", "workingLatex": "34 \\div 2 = 17", "explanation": "Five percent is half of ten percent.", "diagram": null },
        { "stepNumber": 5, "description": "Make $45\\%$.", "workingLatex": "136 + 17 = 153", "explanation": "Forty-five percent is forty percent plus five percent, so the increase is $153$.", "diagram": null },
        { "stepNumber": 6, "description": "Add it on.", "workingLatex": "340 + 153 = 493", "explanation": "Adding the increase to the original gives the new amount.", "diagram": null },
        { "stepNumber": 7, "description": "See the multiplier method.", "workingLatex": "100\\% + 45\\% = 145\\%", "explanation": "The new amount is $145\\%$ of the old one.", "diagram": null },
        { "stepNumber": 8, "description": "Use the multiplier.", "workingLatex": "1.45 \\times 340 = 493", "explanation": "Multiplying by $1.45$ does the increase in one step and confirms the answer.", "diagram": null },
        { "stepNumber": 9, "description": "Write the final answer.", "workingLatex": "493", "explanation": "So $340$ increased by $45\\%$ is $493$.", "diagram": null }
      ],
      "finalAnswer": "$493$"
    }
  },
  {
    "id": "gcse.number.percentage-operators.q045",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Percentages as operators",
    "subtopicId": "gcse.number.percentage-operators",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "value",
    "tags": ["percentage increase", "VAT", "money", "multiplier"],
    "questionText": "A bill is $\\pounds 128.50$ before VAT. VAT is added at $20\\%$. Work out the total including VAT.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Understand VAT.", "workingLatex": "\\text{total} = \\text{price} + \\text{VAT}", "explanation": "VAT is added on top of the price, so we find it and then add it on.", "diagram": null },
        { "stepNumber": 2, "description": "Find $10\\%$.", "workingLatex": "128.5 \\div 10 = 12.85", "explanation": "Ten percent of $\\pounds 128.50$ is $\\pounds 12.85$.", "diagram": null },
        { "stepNumber": 3, "description": "Double for $20\\%$.", "workingLatex": "2 \\times 12.85 = 25.7", "explanation": "Twenty percent is twice ten percent, so the VAT is $\\pounds 25.70$.", "diagram": null },
        { "stepNumber": 4, "description": "Identify the VAT amount.", "workingLatex": "20\\% \\text{ of } 128.5 = 25.7", "explanation": "So the VAT charged is $\\pounds 25.70$.", "diagram": null },
        { "stepNumber": 5, "description": "Add it to the price.", "workingLatex": "128.5 + 25.7 = 154.2", "explanation": "Adding the VAT to the original price gives the total.", "diagram": null },
        { "stepNumber": 6, "description": "See the multiplier method.", "workingLatex": "100\\% + 20\\% = 120\\%", "explanation": "The total is $120\\%$ of the pre-VAT price.", "diagram": null },
        { "stepNumber": 7, "description": "Use the multiplier.", "workingLatex": "1.2 \\times 128.5 = 154.2", "explanation": "Multiplying by $1.2$ adds the VAT in one step and confirms the total.", "diagram": null },
        { "stepNumber": 8, "description": "Write money to two decimal places.", "workingLatex": "154.2 = 154.20", "explanation": "Money answers are written with two decimal places for the pence.", "diagram": null },
        { "stepNumber": 9, "description": "Write the final answer in money form.", "workingLatex": "\\pounds 154.20", "explanation": "So the total including VAT is $\\pounds 154.20$.", "diagram": null }
      ],
      "finalAnswer": "$\\pounds 154.20$"
    }
  },
  {
    "id": "gcse.number.percentage-operators.q046",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Percentages as operators",
    "subtopicId": "gcse.number.percentage-operators",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "value",
    "tags": ["percentage of money", "commission", "three percent"],
    "questionText": "A salesperson earns $3\\%$ commission on sales of $\\pounds 4500$. Work out the commission.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Understand commission.", "workingLatex": "\\text{commission} = 3\\% \\text{ of sales}", "explanation": "Commission is a percentage of the total value of the sales made.", "diagram": null },
        { "stepNumber": 2, "description": "Find $1\\%$.", "workingLatex": "4500 \\div 100 = 45", "explanation": "One percent of $\\pounds 4500$ is $\\pounds 45$.", "diagram": null },
        { "stepNumber": 3, "description": "Make $3\\%$.", "workingLatex": "3 \\times 45 = 135", "explanation": "Three percent is three lots of one percent.", "diagram": null },
        { "stepNumber": 4, "description": "State the commission.", "workingLatex": "3\\% \\text{ of } 4500 = 135", "explanation": "So the commission is $\\pounds 135$.", "diagram": null },
        { "stepNumber": 5, "description": "See the decimal method.", "workingLatex": "3\\% = 0.03", "explanation": "As a decimal, three percent is $0.03$.", "diagram": null },
        { "stepNumber": 6, "description": "Check with the multiplier.", "workingLatex": "0.03 \\times 4500 = 135", "explanation": "Multiplying by $0.03$ gives the same value, confirming the answer.", "diagram": null },
        { "stepNumber": 7, "description": "Sense-check with $10\\%$.", "workingLatex": "10\\% \\text{ of } 4500 = 450", "explanation": "Ten percent is $\\pounds 450$, so three percent should be well under that; $\\pounds 135$ is sensible.", "diagram": null },
        { "stepNumber": 8, "description": "State the result clearly.", "workingLatex": "\\text{commission} = 135", "explanation": "The commission earned is $\\pounds 135$.", "diagram": null },
        { "stepNumber": 9, "description": "Write the final answer in money form.", "workingLatex": "\\pounds 135.00", "explanation": "So the commission is $\\pounds 135$.", "diagram": null }
      ],
      "finalAnswer": "$\\pounds 135.00$"
    }
  },
  {
    "id": "gcse.number.percentage-operators.q047",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Percentages as operators",
    "subtopicId": "gcse.number.percentage-operators",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "numeric",
    "tags": ["percentage decrease", "multiplier", "sixty percent"],
    "questionText": "Decrease $275$ by $60\\%$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Understand a decrease.", "workingLatex": "\\text{new} = \\text{original} - \\text{decrease}", "explanation": "We take sixty percent away from the original amount.", "diagram": null },
        { "stepNumber": 2, "description": "Find $10\\%$.", "workingLatex": "275 \\div 10 = 27.5", "explanation": "Ten percent of $275$ is $27.5$.", "diagram": null },
        { "stepNumber": 3, "description": "Make $60\\%$.", "workingLatex": "6 \\times 27.5 = 165", "explanation": "Sixty percent is six lots of ten percent, so the part to remove is $165$.", "diagram": null },
        { "stepNumber": 4, "description": "Subtract it.", "workingLatex": "275 - 165 = 110", "explanation": "Taking $165$ away from $275$ gives the decreased amount.", "diagram": null },
        { "stepNumber": 5, "description": "See the multiplier method.", "workingLatex": "100\\% - 60\\% = 40\\%", "explanation": "After removing sixty percent we keep forty percent.", "diagram": null },
        { "stepNumber": 6, "description": "Write the multiplier as a decimal.", "workingLatex": "40\\% = 0.4", "explanation": "As a decimal, forty percent is $0.4$.", "diagram": null },
        { "stepNumber": 7, "description": "Use the multiplier.", "workingLatex": "0.4 \\times 275 = 110", "explanation": "Multiplying by $0.4$ does the decrease in one step and confirms the answer.", "diagram": null },
        { "stepNumber": 8, "description": "Confirm both methods agree.", "workingLatex": "110 = 110", "explanation": "The subtraction and multiplier methods give the same value.", "diagram": null },
        { "stepNumber": 9, "description": "Write the final answer.", "workingLatex": "110", "explanation": "So $275$ decreased by $60\\%$ is $110$.", "diagram": null }
      ],
      "finalAnswer": "$110$"
    }
  },
  {
    "id": "gcse.number.percentage-operators.q048",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Percentages as operators",
    "subtopicId": "gcse.number.percentage-operators",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "value",
    "tags": ["percentage of money", "building blocks", "two and a half percent"],
    "questionText": "Work out $2.5\\%$ of $\\pounds 8000$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Understand the task.", "workingLatex": "2.5\\% \\text{ of } 8000", "explanation": "We need a small part, two and a half hundredths of $\\pounds 8000$.", "diagram": null },
        { "stepNumber": 2, "description": "Find $1\\%$.", "workingLatex": "8000 \\div 100 = 80", "explanation": "One percent of $\\pounds 8000$ is $\\pounds 80$.", "diagram": null },
        { "stepNumber": 3, "description": "Make $2\\%$.", "workingLatex": "2 \\times 80 = 160", "explanation": "Two percent is two lots of one percent.", "diagram": null },
        { "stepNumber": 4, "description": "Find $0.5\\%$.", "workingLatex": "80 \\div 2 = 40", "explanation": "A half percent is half of one percent.", "diagram": null },
        { "stepNumber": 5, "description": "Combine the blocks.", "workingLatex": "160 + 40 = 200", "explanation": "Two percent plus half a percent gives two and a half percent, so the answer is $\\pounds 200$.", "diagram": null },
        { "stepNumber": 6, "description": "See the decimal method.", "workingLatex": "2.5\\% = 0.025", "explanation": "As a decimal, two and a half percent is $0.025$.", "diagram": null },
        { "stepNumber": 7, "description": "Check with the multiplier.", "workingLatex": "0.025 \\times 8000 = 200", "explanation": "Multiplying by $0.025$ gives the same value, confirming the answer.", "diagram": null },
        { "stepNumber": 8, "description": "State the result.", "workingLatex": "2.5\\% \\text{ of } 8000 = 200", "explanation": "So the answer is $\\pounds 200$.", "diagram": null },
        { "stepNumber": 9, "description": "Write the final answer in money form.", "workingLatex": "\\pounds 200.00", "explanation": "So $2.5\\%$ of $\\pounds 8000$ is $\\pounds 200$.", "diagram": null }
      ],
      "finalAnswer": "$\\pounds 200.00$"
    }
  },
  {
    "id": "gcse.number.percentage-operators.q049",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Percentages as operators",
    "subtopicId": "gcse.number.percentage-operators",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "value",
    "tags": ["percentage decrease", "sale price", "money", "quarter"],
    "questionText": "A pair of shoes costs $\\pounds 64$. In a sale they have $25\\%$ off. Work out the sale price.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Understand the discount.", "workingLatex": "\\text{sale} = \\text{original} - \\text{discount}", "explanation": "A sale takes a percentage off the original price.", "diagram": null },
        { "stepNumber": 2, "description": "Recognise the fraction.", "workingLatex": "25\\% = \\frac{1}{4}", "explanation": "Twenty-five percent off means a quarter is removed.", "diagram": null },
        { "stepNumber": 3, "description": "Find a quarter.", "workingLatex": "64 \\div 4 = 16", "explanation": "A quarter of $\\pounds 64$ is $\\pounds 16$.", "diagram": null },
        { "stepNumber": 4, "description": "Identify the discount.", "workingLatex": "25\\% \\text{ of } 64 = 16", "explanation": "So the amount taken off is $\\pounds 16$.", "diagram": null },
        { "stepNumber": 5, "description": "Subtract from the price.", "workingLatex": "64 - 16 = 48", "explanation": "Taking $\\pounds 16$ off $\\pounds 64$ gives the sale price.", "diagram": null },
        { "stepNumber": 6, "description": "See the multiplier method.", "workingLatex": "75\\% = \\frac{3}{4}", "explanation": "After a quarter off we pay three quarters of the price.", "diagram": null },
        { "stepNumber": 7, "description": "Use the fraction multiplier.", "workingLatex": "\\frac{3}{4} \\times 64 = 48", "explanation": "Three quarters of $\\pounds 64$ is $\\pounds 48$, confirming the answer.", "diagram": null },
        { "stepNumber": 8, "description": "Write money to two decimal places.", "workingLatex": "48 = 48.00", "explanation": "Money answers are written with two decimal places.", "diagram": null },
        { "stepNumber": 9, "description": "Write the final answer in money form.", "workingLatex": "\\pounds 48.00", "explanation": "So the sale price of the shoes is $\\pounds 48$.", "diagram": null }
      ],
      "finalAnswer": "$\\pounds 48.00$"
    }
  },
  {
    "id": "gcse.number.percentage-operators.q050",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Percentages as operators",
    "subtopicId": "gcse.number.percentage-operators",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "numeric",
    "tags": ["percentage of amount", "over one hundred percent", "multiplier"],
    "questionText": "Work out $110\\%$ of $90$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Understand a percentage over $100$.", "workingLatex": "110\\% > 100\\%", "explanation": "More than one hundred percent means the answer is larger than the original amount.", "diagram": null },
        { "stepNumber": 2, "description": "Find $100\\%$.", "workingLatex": "100\\% \\text{ of } 90 = 90", "explanation": "One hundred percent is the whole amount, which is $90$.", "diagram": null },
        { "stepNumber": 3, "description": "Find $10\\%$.", "workingLatex": "90 \\div 10 = 9", "explanation": "Ten percent of $90$ is $9$.", "diagram": null },
        { "stepNumber": 4, "description": "Split the percentage.", "workingLatex": "110\\% = 100\\% + 10\\%", "explanation": "One hundred and ten percent is the whole plus an extra tenth.", "diagram": null },
        { "stepNumber": 5, "description": "Add the parts.", "workingLatex": "90 + 9 = 99", "explanation": "Adding the whole and the extra tenth gives the answer.", "diagram": null },
        { "stepNumber": 6, "description": "See the decimal method.", "workingLatex": "110\\% = 1.1", "explanation": "As a decimal, one hundred and ten percent is $1.1$.", "diagram": null },
        { "stepNumber": 7, "description": "Check with the multiplier.", "workingLatex": "1.1 \\times 90 = 99", "explanation": "Multiplying by $1.1$ gives the same value, confirming the answer.", "diagram": null },
        { "stepNumber": 8, "description": "Confirm the size makes sense.", "workingLatex": "99 > 90", "explanation": "The answer is larger than $90$, as expected for more than one hundred percent.", "diagram": null },
        { "stepNumber": 9, "description": "Write the final answer.", "workingLatex": "99", "explanation": "So $110\\%$ of $90$ is $99$.", "diagram": null }
      ],
      "finalAnswer": "$99$"
    }
  },
  {
    "id": "gcse.number.percentage-operators.q051",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Percentages as operators",
    "subtopicId": "gcse.number.percentage-operators",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "numeric",
    "tags": ["percentage of amount", "decimal multiplier", "forty-two percent"],
    "questionText": "Work out $42\\%$ of $350$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Understand the task.", "workingLatex": "42\\% \\text{ of } 350", "explanation": "We need forty-two hundredths of $350$.", "diagram": null },
        { "stepNumber": 2, "description": "Turn the percentage into a decimal.", "workingLatex": "42\\% = 0.42", "explanation": "Dividing $42$ by $100$ gives the decimal multiplier.", "diagram": null },
        { "stepNumber": 3, "description": "Rewrite \"of\" as multiply.", "workingLatex": "0.42 \\times 350", "explanation": "A percentage of an amount is a multiplication by the decimal form.", "diagram": null },
        { "stepNumber": 4, "description": "Multiply the whole numbers.", "workingLatex": "42 \\times 350 = 14700", "explanation": "Ignoring the decimal point first keeps the arithmetic manageable.", "diagram": null },
        { "stepNumber": 5, "description": "Put the decimal point back.", "workingLatex": "14700 \\div 100 = 147", "explanation": "Because $0.42 = 42 \\div 100$, we divide the product by $100$.", "diagram": null },
        { "stepNumber": 6, "description": "Check with building blocks: $10\\%$ and $40\\%$.", "workingLatex": "350 \\div 10 = 35", "explanation": "Ten percent is $35$, so forty percent is $140$.", "diagram": null },
        { "stepNumber": 7, "description": "Add the $2\\%$.", "workingLatex": "40\\% + 2\\% = 140 + 7 = 147", "explanation": "One percent is $3.5$, so two percent is $7$; adding gives $147$.", "diagram": null },
        { "stepNumber": 8, "description": "Confirm both methods agree.", "workingLatex": "147 = 147", "explanation": "The decimal method and the building-block method give the same answer.", "diagram": null },
        { "stepNumber": 9, "description": "Write the final answer.", "workingLatex": "147", "explanation": "So $42\\%$ of $350$ is $147$.", "diagram": null }
      ],
      "finalAnswer": "$147$"
    }
  },
  {
    "id": "gcse.number.percentage-operators.q052",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Percentages as operators",
    "subtopicId": "gcse.number.percentage-operators",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "value",
    "tags": ["percentage decrease", "multi-step", "money", "multiplier"],
    "questionText": "A shopper buys $3$ items costing $\\pounds 15$ each. A discount of $20\\%$ is applied to the total. Work out the amount paid.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Find the total before discount.", "workingLatex": "3 \\times 15 = 45", "explanation": "Three items at $\\pounds 15$ each cost $\\pounds 45$ altogether.", "diagram": null },
        { "stepNumber": 2, "description": "Understand the discount.", "workingLatex": "\\text{paid} = \\text{total} - \\text{discount}", "explanation": "The discount is taken off the combined total.", "diagram": null },
        { "stepNumber": 3, "description": "Find $10\\%$ of the total.", "workingLatex": "45 \\div 10 = 4.5", "explanation": "Ten percent of $\\pounds 45$ is $\\pounds 4.50$.", "diagram": null },
        { "stepNumber": 4, "description": "Double for $20\\%$.", "workingLatex": "2 \\times 4.5 = 9", "explanation": "Twenty percent is twice ten percent, so the discount is $\\pounds 9$.", "diagram": null },
        { "stepNumber": 5, "description": "Subtract the discount.", "workingLatex": "45 - 9 = 36", "explanation": "Taking $\\pounds 9$ off $\\pounds 45$ gives the amount paid.", "diagram": null },
        { "stepNumber": 6, "description": "See the multiplier method.", "workingLatex": "100\\% - 20\\% = 80\\%", "explanation": "After the discount we pay $80\\%$ of the total.", "diagram": null },
        { "stepNumber": 7, "description": "Use the multiplier.", "workingLatex": "0.8 \\times 45 = 36", "explanation": "Multiplying by $0.8$ gives the amount paid directly and confirms the answer.", "diagram": null },
        { "stepNumber": 8, "description": "State the result.", "workingLatex": "\\text{paid} = 36", "explanation": "The shopper pays $\\pounds 36$ in total.", "diagram": null },
        { "stepNumber": 9, "description": "Write the final answer in money form.", "workingLatex": "\\pounds 36.00", "explanation": "So the amount paid is $\\pounds 36$.", "diagram": null }
      ],
      "finalAnswer": "$\\pounds 36.00$"
    }
  },
  {
    "id": "gcse.number.percentage-operators.q053",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Percentages as operators",
    "subtopicId": "gcse.number.percentage-operators",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "value",
    "tags": ["percentage of money", "one percent", "six percent"],
    "questionText": "Work out $6\\%$ of $\\pounds 1250$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Understand the task.", "workingLatex": "6\\% \\text{ of } 1250", "explanation": "We need six hundredths of $\\pounds 1250$.", "diagram": null },
        { "stepNumber": 2, "description": "Find $1\\%$.", "workingLatex": "1250 \\div 100 = 12.5", "explanation": "One percent of $\\pounds 1250$ is $\\pounds 12.50$.", "diagram": null },
        { "stepNumber": 3, "description": "Make $6\\%$.", "workingLatex": "6 \\times 12.5 = 75", "explanation": "Six percent is six lots of one percent.", "diagram": null },
        { "stepNumber": 4, "description": "State the result.", "workingLatex": "6\\% \\text{ of } 1250 = 75", "explanation": "So the answer is $\\pounds 75$.", "diagram": null },
        { "stepNumber": 5, "description": "See the decimal method.", "workingLatex": "6\\% = 0.06", "explanation": "As a decimal, six percent is $0.06$.", "diagram": null },
        { "stepNumber": 6, "description": "Check with the multiplier.", "workingLatex": "0.06 \\times 1250 = 75", "explanation": "Multiplying by $0.06$ gives the same value, confirming the answer.", "diagram": null },
        { "stepNumber": 7, "description": "Sense-check with $10\\%$.", "workingLatex": "10\\% \\text{ of } 1250 = 125", "explanation": "Ten percent is $\\pounds 125$, so six percent should be a bit over half of that.", "diagram": null },
        { "stepNumber": 8, "description": "Confirm the size is sensible.", "workingLatex": "75 < 125", "explanation": "The answer $\\pounds 75$ sits sensibly below the ten percent value.", "diagram": null },
        { "stepNumber": 9, "description": "Write the final answer in money form.", "workingLatex": "\\pounds 75.00", "explanation": "So $6\\%$ of $\\pounds 1250$ is $\\pounds 75$.", "diagram": null }
      ],
      "finalAnswer": "$\\pounds 75.00$"
    }
  },
  {
    "id": "gcse.number.percentage-operators.q054",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Percentages as operators",
    "subtopicId": "gcse.number.percentage-operators",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "numeric",
    "tags": ["percentage decrease", "building blocks", "thirty-seven percent"],
    "questionText": "Decrease $500$ by $37\\%$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Understand a decrease.", "workingLatex": "\\text{new} = \\text{original} - \\text{decrease}", "explanation": "We take thirty-seven percent away from the original amount.", "diagram": null },
        { "stepNumber": 2, "description": "Find $10\\%$.", "workingLatex": "500 \\div 10 = 50", "explanation": "Ten percent of $500$ is $50$.", "diagram": null },
        { "stepNumber": 3, "description": "Make $30\\%$.", "workingLatex": "3 \\times 50 = 150", "explanation": "Thirty percent is three lots of ten percent.", "diagram": null },
        { "stepNumber": 4, "description": "Find $1\\%$.", "workingLatex": "500 \\div 100 = 5", "explanation": "One percent of $500$ is $5$.", "diagram": null },
        { "stepNumber": 5, "description": "Make $7\\%$.", "workingLatex": "7 \\times 5 = 35", "explanation": "Seven percent is seven lots of one percent.", "diagram": null },
        { "stepNumber": 6, "description": "Make $37\\%$.", "workingLatex": "150 + 35 = 185", "explanation": "Thirty-seven percent is thirty percent plus seven percent, so the part to remove is $185$.", "diagram": null },
        { "stepNumber": 7, "description": "Subtract it.", "workingLatex": "500 - 185 = 315", "explanation": "Taking $185$ away from $500$ gives the decreased amount.", "diagram": null },
        { "stepNumber": 8, "description": "Check with the multiplier.", "workingLatex": "0.63 \\times 500 = 315", "explanation": "Keeping $63\\%$ means multiplying by $0.63$, which gives the same value.", "diagram": null },
        { "stepNumber": 9, "description": "Write the final answer.", "workingLatex": "315", "explanation": "So $500$ decreased by $37\\%$ is $315$.", "diagram": null }
      ],
      "finalAnswer": "$315$"
    }
  },
  {
    "id": "gcse.number.percentage-operators.q055",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Percentages as operators",
    "subtopicId": "gcse.number.percentage-operators",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "value",
    "tags": ["percentage increase", "money", "twelve and a half percent"],
    "questionText": "Increase $\\pounds 48$ by $12.5\\%$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Understand an increase.", "workingLatex": "\\text{new} = \\text{original} + \\text{increase}", "explanation": "We add twelve and a half percent on top of the original amount.", "diagram": null },
        { "stepNumber": 2, "description": "Recognise the fraction.", "workingLatex": "12.5\\% = \\frac{1}{8}", "explanation": "Twelve and a half percent is exactly one eighth.", "diagram": null },
        { "stepNumber": 3, "description": "Find an eighth.", "workingLatex": "48 \\div 8 = 6", "explanation": "An eighth of $\\pounds 48$ is $\\pounds 6$.", "diagram": null },
        { "stepNumber": 4, "description": "Identify the increase.", "workingLatex": "12.5\\% \\text{ of } 48 = 6", "explanation": "So the increase is $\\pounds 6$.", "diagram": null },
        { "stepNumber": 5, "description": "Add it on.", "workingLatex": "48 + 6 = 54", "explanation": "Adding the $\\pounds 6$ to $\\pounds 48$ gives the increased amount.", "diagram": null },
        { "stepNumber": 6, "description": "See the multiplier method.", "workingLatex": "112.5\\% = 1.125", "explanation": "The new amount is $112.5\\%$ of the old, which is $1.125$ as a decimal.", "diagram": null },
        { "stepNumber": 7, "description": "Use the multiplier.", "workingLatex": "1.125 \\times 48 = 54", "explanation": "Multiplying by $1.125$ does the increase in one step and confirms the answer.", "diagram": null },
        { "stepNumber": 8, "description": "Write money to two decimal places.", "workingLatex": "54 = 54.00", "explanation": "Money answers are written with two decimal places.", "diagram": null },
        { "stepNumber": 9, "description": "Write the final answer in money form.", "workingLatex": "\\pounds 54.00", "explanation": "So $\\pounds 48$ increased by $12.5\\%$ is $\\pounds 54$.", "diagram": null }
      ],
      "finalAnswer": "$\\pounds 54.00$"
    }
  },
  {
    "id": "gcse.number.percentage-operators.q056",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Percentages as operators",
    "subtopicId": "gcse.number.percentage-operators",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "numeric",
    "tags": ["percentage of amount", "half percent", "one percent"],
    "questionText": "Work out $0.5\\%$ of $4000$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Understand a small percentage.", "workingLatex": "0.5\\% < 1\\%", "explanation": "Half a percent is a very small part, less than one hundredth.", "diagram": null },
        { "stepNumber": 2, "description": "Find $1\\%$.", "workingLatex": "4000 \\div 100 = 40", "explanation": "One percent of $4000$ is $40$.", "diagram": null },
        { "stepNumber": 3, "description": "See $0.5\\%$ as half of $1\\%$.", "workingLatex": "0.5\\% = \\frac{1}{2} \\times 1\\%", "explanation": "Half a percent is half of one percent.", "diagram": null },
        { "stepNumber": 4, "description": "Halve the $1\\%$ value.", "workingLatex": "40 \\div 2 = 20", "explanation": "Halving $40$ gives the half-percent value.", "diagram": null },
        { "stepNumber": 5, "description": "See the decimal method.", "workingLatex": "0.5\\% = 0.005", "explanation": "As a decimal, half a percent is $0.005$.", "diagram": null },
        { "stepNumber": 6, "description": "Check with the multiplier.", "workingLatex": "0.005 \\times 4000 = 20", "explanation": "Multiplying by $0.005$ gives the same value, confirming the answer.", "diagram": null },
        { "stepNumber": 7, "description": "State the result.", "workingLatex": "0.5\\% \\text{ of } 4000 = 20", "explanation": "So half a percent of $4000$ is $20$.", "diagram": null },
        { "stepNumber": 8, "description": "Check by reversing.", "workingLatex": "20 \\times 200 = 4000", "explanation": "Since half a percent is one two-hundredth, two hundred lots rebuild $4000$.", "diagram": null },
        { "stepNumber": 9, "description": "Write the final answer.", "workingLatex": "20", "explanation": "So $0.5\\%$ of $4000$ is $20$.", "diagram": null }
      ],
      "finalAnswer": "$20$"
    }
  },
  {
    "id": "gcse.number.percentage-operators.q057",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Percentages as operators",
    "subtopicId": "gcse.number.percentage-operators",
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "value",
    "tags": ["percentage decrease", "compare deals", "money", "multi-step"],
    "questionText": "Shop A sells a television for $\\pounds 450$ with $15\\%$ off. Shop B sells the same television for $\\pounds 500$ with $25\\%$ off. Which shop is cheaper, and by how much?",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Plan the comparison.", "workingLatex": "\\text{find each final price, then compare}", "explanation": "We must work out what each shop actually charges before deciding which is cheaper.", "diagram": null },
        { "stepNumber": 2, "description": "Start with Shop A's price.", "workingLatex": "\\text{Shop A} = 450", "explanation": "Shop A begins at $\\pounds 450$ before its discount.", "diagram": null },
        { "stepNumber": 3, "description": "Shop A keeps $85\\%$.", "workingLatex": "100\\% - 15\\% = 85\\%", "explanation": "A fifteen percent discount leaves eighty-five percent of the price to pay.", "diagram": null },
        { "stepNumber": 4, "description": "Find $10\\%$ of $450$.", "workingLatex": "450 \\div 10 = 45", "explanation": "Ten percent of $\\pounds 450$ is $\\pounds 45$.", "diagram": null },
        { "stepNumber": 5, "description": "Find $5\\%$.", "workingLatex": "45 \\div 2 = 22.5", "explanation": "Five percent is half of ten percent, so it is $\\pounds 22.50$.", "diagram": null },
        { "stepNumber": 6, "description": "Make the $15\\%$ discount.", "workingLatex": "45 + 22.5 = 67.5", "explanation": "Fifteen percent is ten percent plus five percent, so Shop A's discount is $\\pounds 67.50$.", "diagram": null },
        { "stepNumber": 7, "description": "Find Shop A's final price.", "workingLatex": "450 - 67.5 = 382.5", "explanation": "Taking the discount off $\\pounds 450$ gives Shop A's price of $\\pounds 382.50$.", "diagram": null },
        { "stepNumber": 8, "description": "Now Shop B's price.", "workingLatex": "\\text{Shop B} = 500", "explanation": "Shop B begins at $\\pounds 500$ before its discount.", "diagram": null },
        { "stepNumber": 9, "description": "Find $25\\%$ of $500$.", "workingLatex": "500 \\div 4 = 125", "explanation": "Twenty-five percent is a quarter, so the discount is $\\pounds 125$.", "diagram": null },
        { "stepNumber": 10, "description": "Find Shop B's final price.", "workingLatex": "500 - 125 = 375", "explanation": "Taking $\\pounds 125$ off $\\pounds 500$ gives Shop B's price of $\\pounds 375$.", "diagram": null },
        { "stepNumber": 11, "description": "Compare the two prices.", "workingLatex": "382.5 > 375", "explanation": "Shop B's price is lower, so Shop B is the cheaper option.", "diagram": null },
        { "stepNumber": 12, "description": "Find the difference.", "workingLatex": "382.5 - 375 = 7.5", "explanation": "The gap between the two final prices is $\\pounds 7.50$.", "diagram": null },
        { "stepNumber": 13, "description": "Write the saving in money form.", "workingLatex": "\\pounds 7.50", "explanation": "The saving is written as $\\pounds 7.50$ to two decimal places.", "diagram": null },
        { "stepNumber": 14, "description": "State the conclusion.", "workingLatex": "\\text{Shop B cheaper by } 7.50", "explanation": "Shop B costs $\\pounds 7.50$ less than Shop A for the same television.", "diagram": null }
      ],
      "finalAnswer": "Shop B is cheaper, by $\\pounds 7.50$."
    }
  },
  {
    "id": "gcse.number.percentage-operators.q058",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Percentages as operators",
    "subtopicId": "gcse.number.percentage-operators",
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "value",
    "tags": ["successive percentage change", "sale price", "money", "multiplier"],
    "questionText": "A jacket costs $\\pounds 70$. In a sale it is reduced by $20\\%$. At the till a further $10\\%$ is taken off the reduced price. Work out the final price.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Understand two reductions.", "workingLatex": "\\text{reduce, then reduce again}", "explanation": "The second reduction is applied to the already-reduced price, not the original.", "diagram": null },
        { "stepNumber": 2, "description": "First reduction keeps $80\\%$.", "workingLatex": "100\\% - 20\\% = 80\\%", "explanation": "A twenty percent reduction leaves eighty percent of the price.", "diagram": null },
        { "stepNumber": 3, "description": "Find $20\\%$ of $70$.", "workingLatex": "70 \\div 5 = 14", "explanation": "Twenty percent is one fifth, so the first reduction is $\\pounds 14$.", "diagram": null },
        { "stepNumber": 4, "description": "Price after the first reduction.", "workingLatex": "70 - 14 = 56", "explanation": "Taking $\\pounds 14$ off $\\pounds 70$ gives $\\pounds 56$.", "diagram": null },
        { "stepNumber": 5, "description": "Confirm with a multiplier.", "workingLatex": "0.8 \\times 70 = 56", "explanation": "Multiplying by $0.8$ gives the same reduced price of $\\pounds 56$.", "diagram": null },
        { "stepNumber": 6, "description": "Second reduction is on $\\pounds 56$.", "workingLatex": "\\text{new base} = 56", "explanation": "The further ten percent applies to the reduced price of $\\pounds 56$.", "diagram": null },
        { "stepNumber": 7, "description": "Second reduction keeps $90\\%$.", "workingLatex": "100\\% - 10\\% = 90\\%", "explanation": "A ten percent reduction leaves ninety percent of the current price.", "diagram": null },
        { "stepNumber": 8, "description": "Find $10\\%$ of $56$.", "workingLatex": "56 \\div 10 = 5.6", "explanation": "Ten percent of $\\pounds 56$ is $\\pounds 5.60$.", "diagram": null },
        { "stepNumber": 9, "description": "Price after the second reduction.", "workingLatex": "56 - 5.6 = 50.4", "explanation": "Taking $\\pounds 5.60$ off $\\pounds 56$ gives $\\pounds 50.40$.", "diagram": null },
        { "stepNumber": 10, "description": "Confirm with a multiplier.", "workingLatex": "0.9 \\times 56 = 50.4", "explanation": "Multiplying by $0.9$ gives the same final price of $\\pounds 50.40$.", "diagram": null },
        { "stepNumber": 11, "description": "Combine the multipliers.", "workingLatex": "0.8 \\times 0.9 = 0.72", "explanation": "The two reductions together are the same as multiplying by $0.72$.", "diagram": null },
        { "stepNumber": 12, "description": "Check the combined multiplier.", "workingLatex": "0.72 \\times 70 = 50.4", "explanation": "Multiplying the original price by $0.72$ gives $\\pounds 50.40$, confirming the answer.", "diagram": null },
        { "stepNumber": 13, "description": "Compare with a single $30\\%$ off.", "workingLatex": "0.7 \\times 70 = 49", "explanation": "A single thirty percent off would give $\\pounds 49$, which is not the same, showing why the order and base matter.", "diagram": null },
        { "stepNumber": 14, "description": "Note the difference.", "workingLatex": "50.4 \\neq 49", "explanation": "Two successive reductions of $20\\%$ then $10\\%$ are not the same as one $30\\%$ reduction.", "diagram": null },
        { "stepNumber": 15, "description": "Write the final answer in money form.", "workingLatex": "\\pounds 50.40", "explanation": "So the final price of the jacket is $\\pounds 50.40$.", "diagram": null }
      ],
      "finalAnswer": "$\\pounds 50.40$"
    }
  },
  {
    "id": "gcse.number.percentage-operators.q059",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Percentages as operators",
    "subtopicId": "gcse.number.percentage-operators",
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "value",
    "tags": ["percentage increase", "service charge", "money", "multi-step"],
    "questionText": "A restaurant bill is $\\pounds 96$. A service charge of $12.5\\%$ is added, then the total is split equally between $4$ people. Work out how much each person pays.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Plan the steps.", "workingLatex": "\\text{add service, then divide by } 4", "explanation": "First we add the service charge, then we share the total between the four people.", "diagram": null },
        { "stepNumber": 2, "description": "Recognise the service charge as a fraction.", "workingLatex": "12.5\\% = \\frac{1}{8}", "explanation": "Twelve and a half percent is exactly one eighth of the bill.", "diagram": null },
        { "stepNumber": 3, "description": "Find an eighth of the bill.", "workingLatex": "96 \\div 8 = 12", "explanation": "An eighth of $\\pounds 96$ is $\\pounds 12$.", "diagram": null },
        { "stepNumber": 4, "description": "Check with building blocks: $10\\%$.", "workingLatex": "96 \\div 10 = 9.6", "explanation": "Ten percent of the bill is $\\pounds 9.60$.", "diagram": null },
        { "stepNumber": 5, "description": "Find $2.5\\%$.", "workingLatex": "9.6 \\div 4 = 2.4", "explanation": "Two and a half percent is a quarter of ten percent, so it is $\\pounds 2.40$.", "diagram": null },
        { "stepNumber": 6, "description": "Confirm the service charge.", "workingLatex": "9.6 + 2.4 = 12", "explanation": "Ten percent plus two and a half percent gives $\\pounds 12$, matching the eighth.", "diagram": null },
        { "stepNumber": 7, "description": "State the service charge.", "workingLatex": "\\text{service} = 12", "explanation": "The service charge is $\\pounds 12$.", "diagram": null },
        { "stepNumber": 8, "description": "Add it to the bill.", "workingLatex": "96 + 12 = 108", "explanation": "Adding the service charge to the bill gives the full total.", "diagram": null },
        { "stepNumber": 9, "description": "Confirm the total with a multiplier.", "workingLatex": "1.125 \\times 96 = 108", "explanation": "Multiplying by $1.125$ adds the service in one step and gives the same total.", "diagram": null },
        { "stepNumber": 10, "description": "Split between $4$ people.", "workingLatex": "108 \\div 4 = 27", "explanation": "Dividing the total equally between the four diners gives each person's share.", "diagram": null },
        { "stepNumber": 11, "description": "State each share.", "workingLatex": "\\text{each} = 27", "explanation": "Each person pays $\\pounds 27$.", "diagram": null },
        { "stepNumber": 12, "description": "Check the shares rebuild the total.", "workingLatex": "4 \\times 27 = 108", "explanation": "Four payments of $\\pounds 27$ add back to $\\pounds 108$, confirming the answer.", "diagram": null },
        { "stepNumber": 13, "description": "Write the final answer in money form.", "workingLatex": "\\pounds 27.00", "explanation": "So each person pays $\\pounds 27$.", "diagram": null }
      ],
      "finalAnswer": "$\\pounds 27.00$"
    }
  },
  {
    "id": "gcse.number.percentage-operators.q060",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Percentages as operators",
    "subtopicId": "gcse.number.percentage-operators",
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "value",
    "tags": ["successive percentage change", "salary", "money", "multiplier"],
    "questionText": "A salary of $\\pounds 24000$ is increased by $4\\%$ in the first year and then by a further $3\\%$ in the second year. Work out the salary after the two years.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Understand two successive rises.", "workingLatex": "\\text{raise, then raise again}", "explanation": "The second rise is applied to the salary after the first rise, not the original.", "diagram": null },
        { "stepNumber": 2, "description": "First year uses multiplier $1.04$.", "workingLatex": "100\\% + 4\\% = 104\\%", "explanation": "A four percent rise makes the salary $104\\%$ of its previous value.", "diagram": null },
        { "stepNumber": 3, "description": "Find $1\\%$ of $24000$.", "workingLatex": "24000 \\div 100 = 240", "explanation": "One percent of the salary is $\\pounds 240$.", "diagram": null },
        { "stepNumber": 4, "description": "Make the $4\\%$ rise.", "workingLatex": "4 \\times 240 = 960", "explanation": "Four percent is four lots of one percent, so the first rise is $\\pounds 960$.", "diagram": null },
        { "stepNumber": 5, "description": "Salary after year one.", "workingLatex": "24000 + 960 = 24960", "explanation": "Adding the rise gives $\\pounds 24960$ after the first year.", "diagram": null },
        { "stepNumber": 6, "description": "Confirm with a multiplier.", "workingLatex": "1.04 \\times 24000 = 24960", "explanation": "Multiplying by $1.04$ gives the same salary of $\\pounds 24960$.", "diagram": null },
        { "stepNumber": 7, "description": "Second year is on the new salary.", "workingLatex": "\\text{new base} = 24960", "explanation": "The three percent rise applies to $\\pounds 24960$, the salary after year one.", "diagram": null },
        { "stepNumber": 8, "description": "Find $1\\%$ of $24960$.", "workingLatex": "24960 \\div 100 = 249.6", "explanation": "One percent of the new salary is $\\pounds 249.60$.", "diagram": null },
        { "stepNumber": 9, "description": "Make the $3\\%$ rise.", "workingLatex": "3 \\times 249.6 = 748.8", "explanation": "Three percent is three lots of one percent, so the second rise is $\\pounds 748.80$.", "diagram": null },
        { "stepNumber": 10, "description": "Salary after year two.", "workingLatex": "24960 + 748.8 = 25708.8", "explanation": "Adding the second rise gives $\\pounds 25708.80$.", "diagram": null },
        { "stepNumber": 11, "description": "Confirm with a multiplier.", "workingLatex": "1.03 \\times 24960 = 25708.8", "explanation": "Multiplying by $1.03$ gives the same salary of $\\pounds 25708.80$.", "diagram": null },
        { "stepNumber": 12, "description": "Combine the multipliers.", "workingLatex": "1.04 \\times 1.03 = 1.0712", "explanation": "The two rises together are the same as multiplying by $1.0712$.", "diagram": null },
        { "stepNumber": 13, "description": "Check the combined multiplier.", "workingLatex": "1.0712 \\times 24000 = 25708.8", "explanation": "Multiplying the original salary by $1.0712$ gives $\\pounds 25708.80$, confirming the answer.", "diagram": null },
        { "stepNumber": 14, "description": "Write money to two decimal places.", "workingLatex": "25708.8 = 25708.80", "explanation": "Money answers are written with two decimal places.", "diagram": null },
        { "stepNumber": 15, "description": "Write the final answer in money form.", "workingLatex": "\\pounds 25708.80", "explanation": "So the salary after two years is $\\pounds 25708.80$.", "diagram": null }
      ],
      "finalAnswer": "$\\pounds 25708.80$"
    }
  },
  {
    "id": "gcse.number.percentage-operators.q061",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Percentages as operators",
    "subtopicId": "gcse.number.percentage-operators",
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "value",
    "tags": ["successive percentage change", "increase then decrease", "money", "multiplier"],
    "questionText": "A price of $\\pounds 80$ is increased by $25\\%$ and then decreased by $25\\%$. Work out the final price and the overall change from the start.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Understand the two changes.", "workingLatex": "\\text{increase, then decrease}", "explanation": "The decrease is applied to the increased price, so the two $25\\%$ changes act on different amounts.", "diagram": null },
        { "stepNumber": 2, "description": "Increase uses multiplier $1.25$.", "workingLatex": "100\\% + 25\\% = 125\\%", "explanation": "A twenty-five percent increase makes the price $125\\%$ of its value.", "diagram": null },
        { "stepNumber": 3, "description": "Find $25\\%$ of $80$.", "workingLatex": "80 \\div 4 = 20", "explanation": "Twenty-five percent is a quarter, so the increase is $\\pounds 20$.", "diagram": null },
        { "stepNumber": 4, "description": "Price after the increase.", "workingLatex": "80 + 20 = 100", "explanation": "Adding $\\pounds 20$ to $\\pounds 80$ gives $\\pounds 100$.", "diagram": null },
        { "stepNumber": 5, "description": "Decrease is on $\\pounds 100$.", "workingLatex": "\\text{new base} = 100", "explanation": "The twenty-five percent decrease applies to the increased price of $\\pounds 100$.", "diagram": null },
        { "stepNumber": 6, "description": "Decrease uses multiplier $0.75$.", "workingLatex": "100\\% - 25\\% = 75\\%", "explanation": "A twenty-five percent decrease leaves seventy-five percent of the price.", "diagram": null },
        { "stepNumber": 7, "description": "Find $25\\%$ of $100$.", "workingLatex": "100 \\div 4 = 25", "explanation": "A quarter of $\\pounds 100$ is $\\pounds 25$.", "diagram": null },
        { "stepNumber": 8, "description": "Price after the decrease.", "workingLatex": "100 - 25 = 75", "explanation": "Taking $\\pounds 25$ off $\\pounds 100$ gives $\\pounds 75$.", "diagram": null },
        { "stepNumber": 9, "description": "Combine the multipliers.", "workingLatex": "1.25 \\times 0.75 = 0.9375", "explanation": "The two changes together are the same as multiplying by $0.9375$.", "diagram": null },
        { "stepNumber": 10, "description": "Check the combined multiplier.", "workingLatex": "0.9375 \\times 80 = 75", "explanation": "Multiplying the original by $0.9375$ gives $\\pounds 75$, confirming the final price.", "diagram": null },
        { "stepNumber": 11, "description": "Compare with the start.", "workingLatex": "75 < 80", "explanation": "The final price is lower than the starting price, so there is an overall fall.", "diagram": null },
        { "stepNumber": 12, "description": "Find the overall change.", "workingLatex": "80 - 75 = 5", "explanation": "The price has fallen by $\\pounds 5$ overall.", "diagram": null },
        { "stepNumber": 13, "description": "Express the change as a percentage.", "workingLatex": "5 \\div 80 = 0.0625 = 6.25\\%", "explanation": "A $\\pounds 5$ fall on the original $\\pounds 80$ is a $6.25\\%$ decrease overall.", "diagram": null },
        { "stepNumber": 14, "description": "Write the final answer in money form.", "workingLatex": "\\pounds 75.00", "explanation": "So the final price is $\\pounds 75$, a $6.25\\%$ fall from the start.", "diagram": null }
      ],
      "finalAnswer": "Final price $\\pounds 75.00$, an overall decrease of $6.25\\%$."
    }
  },
  {
    "id": "gcse.number.percentage-operators.q062",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Percentages as operators",
    "subtopicId": "gcse.number.percentage-operators",
    "difficulty": "Hard",
    "marks": 4,
    "answerType": "value",
    "tags": ["percentage of money", "deposit", "instalments", "multi-step"],
    "questionText": "A washing machine costs $\\pounds 250$. A customer pays a deposit of $20\\%$ and pays the rest in $10$ equal monthly payments. Work out each monthly payment.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Plan the steps.", "workingLatex": "\\text{deposit, then split the rest}", "explanation": "We find the deposit, subtract it, then divide what remains into ten equal payments.", "diagram": null },
        { "stepNumber": 2, "description": "Recognise the deposit fraction.", "workingLatex": "20\\% = \\frac{1}{5}", "explanation": "Twenty percent is one fifth of the price.", "diagram": null },
        { "stepNumber": 3, "description": "Find the deposit.", "workingLatex": "250 \\div 5 = 50", "explanation": "One fifth of $\\pounds 250$ is $\\pounds 50$.", "diagram": null },
        { "stepNumber": 4, "description": "State the deposit.", "workingLatex": "20\\% \\text{ of } 250 = 50", "explanation": "So the deposit is $\\pounds 50$.", "diagram": null },
        { "stepNumber": 5, "description": "Confirm with a multiplier.", "workingLatex": "0.2 \\times 250 = 50", "explanation": "Multiplying by $0.2$ gives the same deposit of $\\pounds 50$.", "diagram": null },
        { "stepNumber": 6, "description": "Find the remaining balance.", "workingLatex": "250 - 50 = 200", "explanation": "Taking the deposit off the price leaves $\\pounds 200$ still to pay.", "diagram": null },
        { "stepNumber": 7, "description": "See the balance as a percentage.", "workingLatex": "100\\% - 20\\% = 80\\%", "explanation": "The remaining balance is eighty percent of the price.", "diagram": null },
        { "stepNumber": 8, "description": "Check the balance.", "workingLatex": "0.8 \\times 250 = 200", "explanation": "Multiplying by $0.8$ gives $\\pounds 200$, confirming the balance.", "diagram": null },
        { "stepNumber": 9, "description": "Split into $10$ payments.", "workingLatex": "200 \\div 10 = 20", "explanation": "Dividing the balance into ten equal parts gives each monthly payment.", "diagram": null },
        { "stepNumber": 10, "description": "State each payment.", "workingLatex": "\\text{each} = 20", "explanation": "Each monthly payment is $\\pounds 20$.", "diagram": null },
        { "stepNumber": 11, "description": "Check the payments.", "workingLatex": "10 \\times 20 = 200", "explanation": "Ten payments of $\\pounds 20$ rebuild the $\\pounds 200$ balance.", "diagram": null },
        { "stepNumber": 12, "description": "Check the whole price.", "workingLatex": "50 + 200 = 250", "explanation": "The deposit plus the payments add back to the full price of $\\pounds 250$.", "diagram": null },
        { "stepNumber": 13, "description": "Write the final answer in money form.", "workingLatex": "\\pounds 20.00", "explanation": "So each monthly payment is $\\pounds 20$.", "diagram": null }
      ],
      "finalAnswer": "$\\pounds 20.00$"
    }
  },
  {
    "id": "gcse.number.percentage-operators.q063",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Percentages as operators",
    "subtopicId": "gcse.number.percentage-operators",
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "value",
    "tags": ["percentage decrease", "compare deals", "money", "multi-step"],
    "questionText": "A shopper wants to buy $3$ identical mugs costing $\\pounds 12$ each. Offer A is \"$3$ for the price of $2$\". Offer B is $30\\%$ off the total. Which offer is cheaper, and by how much?",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Plan the comparison.", "workingLatex": "\\text{cost under each offer, then compare}", "explanation": "We find what the shopper pays under each offer and pick the lower cost.", "diagram": null },
        { "stepNumber": 2, "description": "Find the full price of three mugs.", "workingLatex": "3 \\times 12 = 36", "explanation": "Three mugs at $\\pounds 12$ each cost $\\pounds 36$ at full price.", "diagram": null },
        { "stepNumber": 3, "description": "Offer A: pay for two mugs.", "workingLatex": "2 \\times 12 = 24", "explanation": "Under \"three for the price of two\", the shopper pays for only two mugs.", "diagram": null },
        { "stepNumber": 4, "description": "State Offer A's cost.", "workingLatex": "\\text{Offer A} = 24", "explanation": "So Offer A costs $\\pounds 24$, with one mug effectively free.", "diagram": null },
        { "stepNumber": 5, "description": "Offer B: start from the total.", "workingLatex": "\\text{Offer B base} = 36", "explanation": "Offer B applies a percentage discount to the full $\\pounds 36$.", "diagram": null },
        { "stepNumber": 6, "description": "Find $10\\%$ of $36$.", "workingLatex": "36 \\div 10 = 3.6", "explanation": "Ten percent of $\\pounds 36$ is $\\pounds 3.60$.", "diagram": null },
        { "stepNumber": 7, "description": "Make the $30\\%$ discount.", "workingLatex": "3 \\times 3.6 = 10.8", "explanation": "Thirty percent is three lots of ten percent, so the discount is $\\pounds 10.80$.", "diagram": null },
        { "stepNumber": 8, "description": "Find Offer B's cost.", "workingLatex": "36 - 10.8 = 25.2", "explanation": "Taking the discount off $\\pounds 36$ gives Offer B's cost of $\\pounds 25.20$.", "diagram": null },
        { "stepNumber": 9, "description": "Confirm with a multiplier.", "workingLatex": "0.7 \\times 36 = 25.2", "explanation": "Multiplying by $0.7$ gives the same cost of $\\pounds 25.20$.", "diagram": null },
        { "stepNumber": 10, "description": "Compare the two offers.", "workingLatex": "24 < 25.2", "explanation": "Offer A's cost is lower, so Offer A is cheaper.", "diagram": null },
        { "stepNumber": 11, "description": "Find the difference.", "workingLatex": "25.2 - 24 = 1.2", "explanation": "The gap between the two offers is $\\pounds 1.20$.", "diagram": null },
        { "stepNumber": 12, "description": "Write the saving in money form.", "workingLatex": "\\pounds 1.20", "explanation": "The saving is $\\pounds 1.20$ to two decimal places.", "diagram": null },
        { "stepNumber": 13, "description": "State the conclusion.", "workingLatex": "\\text{Offer A cheaper by } 1.20", "explanation": "Offer A costs $\\pounds 1.20$ less than Offer B for the three mugs.", "diagram": null }
      ],
      "finalAnswer": "The three-for-two offer is cheaper, by $\\pounds 1.20$."
    }
  },
];
