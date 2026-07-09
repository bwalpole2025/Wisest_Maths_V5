import { Question } from "@/lib/types";

export const questions: Question[] = [
  {
    "id": "gcse.number.fdp-equivalence.q001",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "FDP equivalence",
    "subtopicId": "gcse.number.fdp-equivalence",
    "difficulty": "Easy",
    "marks": 1,
    "answerType": "value",
    "tags": ["fdp", "decimal to percentage", "conversion"],
    "questionText": "Write $0.7$ as a percentage.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall the conversion rule.", "workingLatex": "\\text{decimal} \\times 100 = \\text{percentage}", "explanation": "A percentage means 'out of 100', so we multiply a decimal by $100$ to convert it.", "diagram": null },
        { "stepNumber": 2, "description": "Set up the multiplication.", "workingLatex": "0.7 \\times 100", "explanation": "We multiply the decimal by one hundred.", "diagram": null },
        { "stepNumber": 3, "description": "Work it out.", "workingLatex": "0.7 \\times 100 = 70", "explanation": "Multiplying by $100$ moves the decimal point two places to the right.", "diagram": null },
        { "stepNumber": 4, "description": "Attach the percent sign.", "workingLatex": "70\\%", "explanation": "The result is a percentage, so we write the $\\%$ symbol.", "diagram": null },
        { "stepNumber": 5, "description": "Interpret the answer.", "workingLatex": "0.7 = 70\\%", "explanation": "Seven tenths is the same as seventy hundredths, which is $70\\%$.", "diagram": null }
      ],
      "finalAnswer": "$70\\%$"
    }
  },
  {
    "id": "gcse.number.fdp-equivalence.q002",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "FDP equivalence",
    "subtopicId": "gcse.number.fdp-equivalence",
    "difficulty": "Easy",
    "marks": 1,
    "answerType": "value",
    "tags": ["fdp", "percentage to decimal", "conversion"],
    "questionText": "Write $45\\%$ as a decimal.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall the conversion rule.", "workingLatex": "\\text{percentage} \\div 100 = \\text{decimal}", "explanation": "A percentage is a number out of $100$, so dividing by $100$ turns it into a decimal.", "diagram": null },
        { "stepNumber": 2, "description": "Set up the division.", "workingLatex": "45 \\div 100", "explanation": "We divide the percentage by one hundred.", "diagram": null },
        { "stepNumber": 3, "description": "Work it out.", "workingLatex": "45 \\div 100 = 0.45", "explanation": "Dividing by $100$ moves the decimal point two places to the left.", "diagram": null },
        { "stepNumber": 4, "description": "Interpret the answer.", "workingLatex": "45\\% = 0.45", "explanation": "Forty-five hundredths written as a decimal is $0.45$.", "diagram": null },
        { "stepNumber": 5, "description": "State the final answer.", "workingLatex": "0.45", "explanation": "So $45\\%$ is $0.45$ as a decimal.", "diagram": null }
      ],
      "finalAnswer": "$0.45$"
    }
  },
  {
    "id": "gcse.number.fdp-equivalence.q003",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "FDP equivalence",
    "subtopicId": "gcse.number.fdp-equivalence",
    "difficulty": "Easy",
    "marks": 1,
    "answerType": "value",
    "tags": ["fdp", "fraction to decimal", "conversion"],
    "questionText": "Write $\\frac{1}{2}$ as a decimal.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall how a fraction means division.", "workingLatex": "\\frac{1}{2} = 1 \\div 2", "explanation": "A fraction is the top number divided by the bottom number.", "diagram": null },
        { "stepNumber": 2, "description": "Consider an equivalent fraction in tenths.", "workingLatex": "\\frac{1}{2} = \\frac{5}{10}", "explanation": "Multiplying top and bottom by $5$ gives a denominator of $10$, which reads straight off as a decimal.", "diagram": null },
        { "stepNumber": 3, "description": "Read off the decimal.", "workingLatex": "\\frac{5}{10} = 0.5", "explanation": "Five tenths is written as $0.5$.", "diagram": null },
        { "stepNumber": 4, "description": "Check by division.", "workingLatex": "1 \\div 2 = 0.5", "explanation": "Dividing $1$ by $2$ confirms the decimal.", "diagram": null },
        { "stepNumber": 5, "description": "State the final answer.", "workingLatex": "\\frac{1}{2} = 0.5", "explanation": "So one half is $0.5$.", "diagram": null }
      ],
      "finalAnswer": "$0.5$"
    }
  },
  {
    "id": "gcse.number.fdp-equivalence.q004",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "FDP equivalence",
    "subtopicId": "gcse.number.fdp-equivalence",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "value",
    "tags": ["fdp", "fraction to percentage", "conversion"],
    "questionText": "Write $\\frac{3}{4}$ as a percentage.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Aim for a denominator of 100.", "workingLatex": "\\frac{3}{4} = \\frac{?}{100}", "explanation": "A percentage is a fraction out of $100$, so we rewrite the fraction with denominator $100$.", "diagram": null },
        { "stepNumber": 2, "description": "Find the multiplier.", "workingLatex": "100 \\div 4 = 25", "explanation": "We need to multiply the denominator by $25$ to reach $100$.", "diagram": null },
        { "stepNumber": 3, "description": "Multiply top and bottom by 25.", "workingLatex": "\\frac{3}{4} = \\frac{3 \\times 25}{4 \\times 25} = \\frac{75}{100}", "explanation": "Multiplying both parts by the same number keeps the value the same.", "diagram": null },
        { "stepNumber": 4, "description": "Read off the percentage.", "workingLatex": "\\frac{75}{100} = 75\\%", "explanation": "Seventy-five out of one hundred is $75\\%$.", "diagram": null },
        { "stepNumber": 5, "description": "State the final answer.", "workingLatex": "\\frac{3}{4} = 75\\%", "explanation": "So three quarters is $75\\%$.", "diagram": null }
      ],
      "finalAnswer": "$75\\%$"
    }
  },
  {
    "id": "gcse.number.fdp-equivalence.q005",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "FDP equivalence",
    "subtopicId": "gcse.number.fdp-equivalence",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "fraction",
    "tags": ["fdp", "decimal to fraction", "conversion"],
    "questionText": "Write $0.3$ as a fraction in its simplest form.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Read the place value.", "workingLatex": "0.3 = \\text{three tenths}", "explanation": "The $3$ is in the tenths column, so the decimal is three tenths.", "diagram": null },
        { "stepNumber": 2, "description": "Write as a fraction over 10.", "workingLatex": "0.3 = \\frac{3}{10}", "explanation": "Tenths means a denominator of $10$.", "diagram": null },
        { "stepNumber": 3, "description": "Check for simplification.", "workingLatex": "\\gcd(3,10) = 1", "explanation": "Three and ten share no common factor.", "diagram": null },
        { "stepNumber": 4, "description": "State the final answer.", "workingLatex": "0.3 = \\frac{3}{10}", "explanation": "So $0.3$ is three tenths, already in simplest form.", "diagram": null }
      ],
      "finalAnswer": "$\\frac{3}{10}$"
    }
  },
  {
    "id": "gcse.number.fdp-equivalence.q006",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "FDP equivalence",
    "subtopicId": "gcse.number.fdp-equivalence",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "fraction",
    "tags": ["fdp", "percentage to fraction", "simplifying"],
    "questionText": "Write $20\\%$ as a fraction in its simplest form.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Write the percentage over 100.", "workingLatex": "20\\% = \\frac{20}{100}", "explanation": "A percentage is a number out of $100$.", "diagram": null },
        { "stepNumber": 2, "description": "Find the highest common factor.", "workingLatex": "\\gcd(20,100) = 20", "explanation": "Twenty is the biggest number dividing both $20$ and $100$.", "diagram": null },
        { "stepNumber": 3, "description": "Divide top and bottom by 20.", "workingLatex": "\\frac{20 \\div 20}{100 \\div 20} = \\frac{1}{5}", "explanation": "Dividing both parts by the common factor simplifies the fraction.", "diagram": null },
        { "stepNumber": 4, "description": "State the final answer.", "workingLatex": "20\\% = \\frac{1}{5}", "explanation": "So $20\\%$ is one fifth.", "diagram": null }
      ],
      "finalAnswer": "$\\frac{1}{5}$"
    }
  },
  {
    "id": "gcse.number.fdp-equivalence.q007",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "FDP equivalence",
    "subtopicId": "gcse.number.fdp-equivalence",
    "difficulty": "Easy",
    "marks": 1,
    "answerType": "value",
    "tags": ["fdp", "decimal to percentage", "conversion"],
    "questionText": "Write $0.25$ as a percentage.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall the conversion rule.", "workingLatex": "\\text{decimal} \\times 100 = \\text{percentage}", "explanation": "Multiply a decimal by $100$ to convert it to a percentage.", "diagram": null },
        { "stepNumber": 2, "description": "Set up the multiplication.", "workingLatex": "0.25 \\times 100", "explanation": "We multiply the decimal by one hundred.", "diagram": null },
        { "stepNumber": 3, "description": "Work it out.", "workingLatex": "0.25 \\times 100 = 25", "explanation": "The decimal point moves two places to the right.", "diagram": null },
        { "stepNumber": 4, "description": "Attach the percent sign.", "workingLatex": "25\\%", "explanation": "The result is a percentage.", "diagram": null },
        { "stepNumber": 5, "description": "State the final answer.", "workingLatex": "0.25 = 25\\%", "explanation": "So $0.25$ is $25\\%$.", "diagram": null }
      ],
      "finalAnswer": "$25\\%$"
    }
  },
  {
    "id": "gcse.number.fdp-equivalence.q008",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "FDP equivalence",
    "subtopicId": "gcse.number.fdp-equivalence",
    "difficulty": "Easy",
    "marks": 1,
    "answerType": "value",
    "tags": ["fdp", "percentage to decimal", "conversion"],
    "questionText": "Write $60\\%$ as a decimal.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall the conversion rule.", "workingLatex": "\\text{percentage} \\div 100 = \\text{decimal}", "explanation": "Divide a percentage by $100$ to convert it to a decimal.", "diagram": null },
        { "stepNumber": 2, "description": "Set up the division.", "workingLatex": "60 \\div 100", "explanation": "We divide the percentage by one hundred.", "diagram": null },
        { "stepNumber": 3, "description": "Work it out.", "workingLatex": "60 \\div 100 = 0.6", "explanation": "The decimal point moves two places to the left, and the trailing zero is dropped.", "diagram": null },
        { "stepNumber": 4, "description": "State the final answer.", "workingLatex": "60\\% = 0.6", "explanation": "So $60\\%$ is $0.6$.", "diagram": null }
      ],
      "finalAnswer": "$0.6$"
    }
  },
  {
    "id": "gcse.number.fdp-equivalence.q009",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "FDP equivalence",
    "subtopicId": "gcse.number.fdp-equivalence",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "value",
    "tags": ["fdp", "fraction to percentage", "conversion"],
    "questionText": "Write $\\frac{1}{5}$ as a percentage.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Aim for a denominator of 100.", "workingLatex": "\\frac{1}{5} = \\frac{?}{100}", "explanation": "A percentage is a fraction out of $100$.", "diagram": null },
        { "stepNumber": 2, "description": "Find the multiplier.", "workingLatex": "100 \\div 5 = 20", "explanation": "We multiply the denominator by $20$ to reach $100$.", "diagram": null },
        { "stepNumber": 3, "description": "Multiply top and bottom by 20.", "workingLatex": "\\frac{1}{5} = \\frac{1 \\times 20}{5 \\times 20} = \\frac{20}{100}", "explanation": "Both parts are scaled by the same factor.", "diagram": null },
        { "stepNumber": 4, "description": "Read off the percentage.", "workingLatex": "\\frac{20}{100} = 20\\%", "explanation": "Twenty out of one hundred is $20\\%$.", "diagram": null },
        { "stepNumber": 5, "description": "State the final answer.", "workingLatex": "\\frac{1}{5} = 20\\%", "explanation": "So one fifth is $20\\%$.", "diagram": null }
      ],
      "finalAnswer": "$20\\%$"
    }
  },
  {
    "id": "gcse.number.fdp-equivalence.q010",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "FDP equivalence",
    "subtopicId": "gcse.number.fdp-equivalence",
    "difficulty": "Easy",
    "marks": 1,
    "answerType": "value",
    "tags": ["fdp", "decimal to percentage", "conversion"],
    "questionText": "Write $0.09$ as a percentage.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall the conversion rule.", "workingLatex": "\\text{decimal} \\times 100 = \\text{percentage}", "explanation": "Multiply a decimal by $100$ to convert it to a percentage.", "diagram": null },
        { "stepNumber": 2, "description": "Set up the multiplication.", "workingLatex": "0.09 \\times 100", "explanation": "We multiply the decimal by one hundred.", "diagram": null },
        { "stepNumber": 3, "description": "Work it out.", "workingLatex": "0.09 \\times 100 = 9", "explanation": "The decimal point moves two places to the right.", "diagram": null },
        { "stepNumber": 4, "description": "Attach the percent sign.", "workingLatex": "9\\%", "explanation": "The result is a percentage.", "diagram": null },
        { "stepNumber": 5, "description": "State the final answer.", "workingLatex": "0.09 = 9\\%", "explanation": "So $0.09$ is $9\\%$.", "diagram": null }
      ],
      "finalAnswer": "$9\\%$"
    }
  },
  {
    "id": "gcse.number.fdp-equivalence.q011",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "FDP equivalence",
    "subtopicId": "gcse.number.fdp-equivalence",
    "difficulty": "Easy",
    "marks": 1,
    "answerType": "value",
    "tags": ["fdp", "percentage to decimal", "conversion"],
    "questionText": "Write $7\\%$ as a decimal.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall the conversion rule.", "workingLatex": "\\text{percentage} \\div 100 = \\text{decimal}", "explanation": "Divide a percentage by $100$ to convert it to a decimal.", "diagram": null },
        { "stepNumber": 2, "description": "Set up the division.", "workingLatex": "7 \\div 100", "explanation": "We divide the percentage by one hundred.", "diagram": null },
        { "stepNumber": 3, "description": "Work it out.", "workingLatex": "7 \\div 100 = 0.07", "explanation": "Moving the point two places left needs a zero as a placeholder in the tenths column.", "diagram": null },
        { "stepNumber": 4, "description": "State the final answer.", "workingLatex": "7\\% = 0.07", "explanation": "So $7\\%$ is $0.07$.", "diagram": null }
      ],
      "finalAnswer": "$0.07$"
    }
  },
  {
    "id": "gcse.number.fdp-equivalence.q012",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "FDP equivalence",
    "subtopicId": "gcse.number.fdp-equivalence",
    "difficulty": "Easy",
    "marks": 1,
    "answerType": "value",
    "tags": ["fdp", "fraction to decimal", "conversion"],
    "questionText": "Write $\\frac{1}{4}$ as a decimal.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Aim for a denominator of 100.", "workingLatex": "\\frac{1}{4} = \\frac{?}{100}", "explanation": "Hundredths convert straight into a two-place decimal.", "diagram": null },
        { "stepNumber": 2, "description": "Find the multiplier.", "workingLatex": "100 \\div 4 = 25", "explanation": "We multiply the denominator by $25$ to reach $100$.", "diagram": null },
        { "stepNumber": 3, "description": "Multiply top and bottom by 25.", "workingLatex": "\\frac{1}{4} = \\frac{25}{100}", "explanation": "Both parts are scaled by $25$.", "diagram": null },
        { "stepNumber": 4, "description": "Read off the decimal.", "workingLatex": "\\frac{25}{100} = 0.25", "explanation": "Twenty-five hundredths is $0.25$.", "diagram": null },
        { "stepNumber": 5, "description": "State the final answer.", "workingLatex": "\\frac{1}{4} = 0.25", "explanation": "So one quarter is $0.25$.", "diagram": null }
      ],
      "finalAnswer": "$0.25$"
    }
  },
  {
    "id": "gcse.number.fdp-equivalence.q013",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "FDP equivalence",
    "subtopicId": "gcse.number.fdp-equivalence",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "fraction",
    "tags": ["fdp", "decimal to fraction", "simplifying"],
    "questionText": "Write $0.6$ as a fraction in its simplest form.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Read the place value.", "workingLatex": "0.6 = \\text{six tenths}", "explanation": "The $6$ is in the tenths column.", "diagram": null },
        { "stepNumber": 2, "description": "Write as a fraction over 10.", "workingLatex": "0.6 = \\frac{6}{10}", "explanation": "Tenths means a denominator of $10$.", "diagram": null },
        { "stepNumber": 3, "description": "Find the common factor.", "workingLatex": "\\gcd(6,10) = 2", "explanation": "Both $6$ and $10$ divide by $2$.", "diagram": null },
        { "stepNumber": 4, "description": "Simplify.", "workingLatex": "\\frac{6}{10} = \\frac{3}{5}", "explanation": "Dividing top and bottom by $2$ gives three fifths.", "diagram": null },
        { "stepNumber": 5, "description": "State the final answer.", "workingLatex": "0.6 = \\frac{3}{5}", "explanation": "So $0.6$ is three fifths.", "diagram": null }
      ],
      "finalAnswer": "$\\frac{3}{5}$"
    }
  },
  {
    "id": "gcse.number.fdp-equivalence.q014",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "FDP equivalence",
    "subtopicId": "gcse.number.fdp-equivalence",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "fraction",
    "tags": ["fdp", "percentage to fraction", "simplifying"],
    "questionText": "Write $50\\%$ as a fraction in its simplest form.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Write the percentage over 100.", "workingLatex": "50\\% = \\frac{50}{100}", "explanation": "A percentage is a number out of $100$.", "diagram": null },
        { "stepNumber": 2, "description": "Find the highest common factor.", "workingLatex": "\\gcd(50,100) = 50", "explanation": "Fifty is the biggest number dividing both $50$ and $100$.", "diagram": null },
        { "stepNumber": 3, "description": "Divide top and bottom by 50.", "workingLatex": "\\frac{50 \\div 50}{100 \\div 50} = \\frac{1}{2}", "explanation": "Dividing both parts by the common factor gives the simplest form.", "diagram": null },
        { "stepNumber": 4, "description": "State the final answer.", "workingLatex": "50\\% = \\frac{1}{2}", "explanation": "So $50\\%$ is one half.", "diagram": null }
      ],
      "finalAnswer": "$\\frac{1}{2}$"
    }
  },
  {
    "id": "gcse.number.fdp-equivalence.q015",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "FDP equivalence",
    "subtopicId": "gcse.number.fdp-equivalence",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "value",
    "tags": ["fdp", "fraction to decimal", "conversion"],
    "questionText": "Write $\\frac{4}{5}$ as a decimal.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Aim for a denominator of 10.", "workingLatex": "\\frac{4}{5} = \\frac{?}{10}", "explanation": "Tenths convert straight into a one-place decimal.", "diagram": null },
        { "stepNumber": 2, "description": "Find the multiplier.", "workingLatex": "10 \\div 5 = 2", "explanation": "We multiply the denominator by $2$ to reach $10$.", "diagram": null },
        { "stepNumber": 3, "description": "Multiply top and bottom by 2.", "workingLatex": "\\frac{4}{5} = \\frac{8}{10}", "explanation": "Both parts are scaled by $2$.", "diagram": null },
        { "stepNumber": 4, "description": "Read off the decimal.", "workingLatex": "\\frac{8}{10} = 0.8", "explanation": "Eight tenths is $0.8$.", "diagram": null },
        { "stepNumber": 5, "description": "State the final answer.", "workingLatex": "\\frac{4}{5} = 0.8", "explanation": "So four fifths is $0.8$.", "diagram": null }
      ],
      "finalAnswer": "$0.8$"
    }
  },
  {
    "id": "gcse.number.fdp-equivalence.q016",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "FDP equivalence",
    "subtopicId": "gcse.number.fdp-equivalence",
    "difficulty": "Easy",
    "marks": 1,
    "answerType": "value",
    "tags": ["fdp", "decimal to percentage", "conversion"],
    "questionText": "Write $0.35$ as a percentage.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall the conversion rule.", "workingLatex": "\\text{decimal} \\times 100 = \\text{percentage}", "explanation": "Multiply a decimal by $100$ to convert it to a percentage.", "diagram": null },
        { "stepNumber": 2, "description": "Set up the multiplication.", "workingLatex": "0.35 \\times 100", "explanation": "We multiply the decimal by one hundred.", "diagram": null },
        { "stepNumber": 3, "description": "Work it out.", "workingLatex": "0.35 \\times 100 = 35", "explanation": "The decimal point moves two places to the right.", "diagram": null },
        { "stepNumber": 4, "description": "Attach the percent sign.", "workingLatex": "35\\%", "explanation": "The result is a percentage.", "diagram": null },
        { "stepNumber": 5, "description": "State the final answer.", "workingLatex": "0.35 = 35\\%", "explanation": "So $0.35$ is $35\\%$.", "diagram": null }
      ],
      "finalAnswer": "$35\\%$"
    }
  },
  {
    "id": "gcse.number.fdp-equivalence.q017",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "FDP equivalence",
    "subtopicId": "gcse.number.fdp-equivalence",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "fraction",
    "tags": ["fdp", "percentage to fraction", "simplifying"],
    "questionText": "Write $30\\%$ as a fraction in its simplest form.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Write the percentage over 100.", "workingLatex": "30\\% = \\frac{30}{100}", "explanation": "A percentage is a number out of $100$.", "diagram": null },
        { "stepNumber": 2, "description": "Find the highest common factor.", "workingLatex": "\\gcd(30,100) = 10", "explanation": "Ten is the biggest number dividing both $30$ and $100$.", "diagram": null },
        { "stepNumber": 3, "description": "Divide top and bottom by 10.", "workingLatex": "\\frac{30 \\div 10}{100 \\div 10} = \\frac{3}{10}", "explanation": "Dividing both parts by the common factor simplifies the fraction.", "diagram": null },
        { "stepNumber": 4, "description": "State the final answer.", "workingLatex": "30\\% = \\frac{3}{10}", "explanation": "So $30\\%$ is three tenths.", "diagram": null }
      ],
      "finalAnswer": "$\\frac{3}{10}$"
    }
  },
  {
    "id": "gcse.number.fdp-equivalence.q018",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "FDP equivalence",
    "subtopicId": "gcse.number.fdp-equivalence",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "value",
    "tags": ["fdp", "fraction to percentage", "conversion"],
    "questionText": "Write $\\frac{2}{5}$ as a percentage.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Aim for a denominator of 100.", "workingLatex": "\\frac{2}{5} = \\frac{?}{100}", "explanation": "A percentage is a fraction out of $100$.", "diagram": null },
        { "stepNumber": 2, "description": "Find the multiplier.", "workingLatex": "100 \\div 5 = 20", "explanation": "We multiply the denominator by $20$ to reach $100$.", "diagram": null },
        { "stepNumber": 3, "description": "Multiply top and bottom by 20.", "workingLatex": "\\frac{2}{5} = \\frac{40}{100}", "explanation": "Both parts are scaled by $20$.", "diagram": null },
        { "stepNumber": 4, "description": "Read off the percentage.", "workingLatex": "\\frac{40}{100} = 40\\%", "explanation": "Forty out of one hundred is $40\\%$.", "diagram": null },
        { "stepNumber": 5, "description": "State the final answer.", "workingLatex": "\\frac{2}{5} = 40\\%", "explanation": "So two fifths is $40\\%$.", "diagram": null }
      ],
      "finalAnswer": "$40\\%$"
    }
  },
  {
    "id": "gcse.number.fdp-equivalence.q019",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "FDP equivalence",
    "subtopicId": "gcse.number.fdp-equivalence",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "fraction",
    "tags": ["fdp", "decimal to fraction", "simplifying"],
    "questionText": "Write $0.08$ as a fraction in its simplest form.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Read the place value.", "workingLatex": "0.08 = \\text{eight hundredths}", "explanation": "The $8$ is in the hundredths column.", "diagram": null },
        { "stepNumber": 2, "description": "Write as a fraction over 100.", "workingLatex": "0.08 = \\frac{8}{100}", "explanation": "Hundredths means a denominator of $100$.", "diagram": null },
        { "stepNumber": 3, "description": "Find the common factor.", "workingLatex": "\\gcd(8,100) = 4", "explanation": "Both $8$ and $100$ divide by $4$.", "diagram": null },
        { "stepNumber": 4, "description": "Simplify.", "workingLatex": "\\frac{8}{100} = \\frac{2}{25}", "explanation": "Dividing top and bottom by $4$ gives two twenty-fifths.", "diagram": null },
        { "stepNumber": 5, "description": "State the final answer.", "workingLatex": "0.08 = \\frac{2}{25}", "explanation": "So $0.08$ is two twenty-fifths.", "diagram": null }
      ],
      "finalAnswer": "$\\frac{2}{25}$"
    }
  },
  {
    "id": "gcse.number.fdp-equivalence.q020",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "FDP equivalence",
    "subtopicId": "gcse.number.fdp-equivalence",
    "difficulty": "Easy",
    "marks": 1,
    "answerType": "value",
    "tags": ["fdp", "percentage to decimal", "conversion"],
    "questionText": "Write $90\\%$ as a decimal.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall the conversion rule.", "workingLatex": "\\text{percentage} \\div 100 = \\text{decimal}", "explanation": "Divide a percentage by $100$ to convert it to a decimal.", "diagram": null },
        { "stepNumber": 2, "description": "Set up the division.", "workingLatex": "90 \\div 100", "explanation": "We divide the percentage by one hundred.", "diagram": null },
        { "stepNumber": 3, "description": "Work it out.", "workingLatex": "90 \\div 100 = 0.9", "explanation": "The point moves two places left and the trailing zero is dropped.", "diagram": null },
        { "stepNumber": 4, "description": "State the final answer.", "workingLatex": "90\\% = 0.9", "explanation": "So $90\\%$ is $0.9$.", "diagram": null }
      ],
      "finalAnswer": "$0.9$"
    }
  },
  {
    "id": "gcse.number.fdp-equivalence.q021",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "FDP equivalence",
    "subtopicId": "gcse.number.fdp-equivalence",
    "difficulty": "Easy",
    "marks": 1,
    "answerType": "value",
    "tags": ["fdp", "fraction to percentage", "conversion"],
    "questionText": "Write $\\frac{3}{10}$ as a percentage.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Aim for a denominator of 100.", "workingLatex": "\\frac{3}{10} = \\frac{?}{100}", "explanation": "A percentage is a fraction out of $100$.", "diagram": null },
        { "stepNumber": 2, "description": "Find the multiplier.", "workingLatex": "100 \\div 10 = 10", "explanation": "We multiply the denominator by $10$ to reach $100$.", "diagram": null },
        { "stepNumber": 3, "description": "Multiply top and bottom by 10.", "workingLatex": "\\frac{3}{10} = \\frac{30}{100}", "explanation": "Both parts are scaled by $10$.", "diagram": null },
        { "stepNumber": 4, "description": "Read off the percentage.", "workingLatex": "\\frac{30}{100} = 30\\%", "explanation": "Thirty out of one hundred is $30\\%$.", "diagram": null },
        { "stepNumber": 5, "description": "State the final answer.", "workingLatex": "\\frac{3}{10} = 30\\%", "explanation": "So three tenths is $30\\%$.", "diagram": null }
      ],
      "finalAnswer": "$30\\%$"
    }
  },
  {
    "id": "gcse.number.fdp-equivalence.q022",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "FDP equivalence",
    "subtopicId": "gcse.number.fdp-equivalence",
    "difficulty": "Easy",
    "marks": 1,
    "answerType": "value",
    "tags": ["fdp", "decimal to percentage", "conversion"],
    "questionText": "Write $0.05$ as a percentage.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall the conversion rule.", "workingLatex": "\\text{decimal} \\times 100 = \\text{percentage}", "explanation": "Multiply a decimal by $100$ to convert it to a percentage.", "diagram": null },
        { "stepNumber": 2, "description": "Set up the multiplication.", "workingLatex": "0.05 \\times 100", "explanation": "We multiply the decimal by one hundred.", "diagram": null },
        { "stepNumber": 3, "description": "Work it out.", "workingLatex": "0.05 \\times 100 = 5", "explanation": "The decimal point moves two places to the right.", "diagram": null },
        { "stepNumber": 4, "description": "Attach the percent sign.", "workingLatex": "5\\%", "explanation": "The result is a percentage.", "diagram": null },
        { "stepNumber": 5, "description": "State the final answer.", "workingLatex": "0.05 = 5\\%", "explanation": "So $0.05$ is $5\\%$.", "diagram": null }
      ],
      "finalAnswer": "$5\\%$"
    }
  },
  {
    "id": "gcse.number.fdp-equivalence.q023",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "FDP equivalence",
    "subtopicId": "gcse.number.fdp-equivalence",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "fraction",
    "tags": ["fdp", "percentage to fraction", "simplifying"],
    "questionText": "Write $75\\%$ as a fraction in its simplest form.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Write the percentage over 100.", "workingLatex": "75\\% = \\frac{75}{100}", "explanation": "A percentage is a number out of $100$.", "diagram": null },
        { "stepNumber": 2, "description": "Find the highest common factor.", "workingLatex": "\\gcd(75,100) = 25", "explanation": "Twenty-five is the biggest number dividing both $75$ and $100$.", "diagram": null },
        { "stepNumber": 3, "description": "Divide top and bottom by 25.", "workingLatex": "\\frac{75 \\div 25}{100 \\div 25} = \\frac{3}{4}", "explanation": "Dividing both parts by the common factor gives the simplest form.", "diagram": null },
        { "stepNumber": 4, "description": "State the final answer.", "workingLatex": "75\\% = \\frac{3}{4}", "explanation": "So $75\\%$ is three quarters.", "diagram": null }
      ],
      "finalAnswer": "$\\frac{3}{4}$"
    }
  },
  {
    "id": "gcse.number.fdp-equivalence.q024",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "FDP equivalence",
    "subtopicId": "gcse.number.fdp-equivalence",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "fraction",
    "tags": ["fdp", "decimal to fraction", "simplifying"],
    "questionText": "Write $0.4$ as a fraction in its simplest form.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Read the place value.", "workingLatex": "0.4 = \\text{four tenths}", "explanation": "The $4$ is in the tenths column.", "diagram": null },
        { "stepNumber": 2, "description": "Write as a fraction over 10.", "workingLatex": "0.4 = \\frac{4}{10}", "explanation": "Tenths means a denominator of $10$.", "diagram": null },
        { "stepNumber": 3, "description": "Find the common factor.", "workingLatex": "\\gcd(4,10) = 2", "explanation": "Both $4$ and $10$ divide by $2$.", "diagram": null },
        { "stepNumber": 4, "description": "Simplify.", "workingLatex": "\\frac{4}{10} = \\frac{2}{5}", "explanation": "Dividing top and bottom by $2$ gives two fifths.", "diagram": null },
        { "stepNumber": 5, "description": "State the final answer.", "workingLatex": "0.4 = \\frac{2}{5}", "explanation": "So $0.4$ is two fifths.", "diagram": null }
      ],
      "finalAnswer": "$\\frac{2}{5}$"
    }
  },
  {
    "id": "gcse.number.fdp-equivalence.q025",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "FDP equivalence",
    "subtopicId": "gcse.number.fdp-equivalence",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "value",
    "tags": ["fdp", "fraction to decimal", "fraction to percentage", "division"],
    "questionText": "Write $\\frac{3}{8}$ as (a) a decimal and (b) a percentage.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Interpret the fraction as a division.", "workingLatex": "\\frac{3}{8} = 3 \\div 8", "explanation": "A fraction is the top divided by the bottom.", "diagram": null },
        { "stepNumber": 2, "description": "Set up the division with decimal places.", "workingLatex": "3.000 \\div 8", "explanation": "Since $3$ is smaller than $8$, we add decimal zeros to keep dividing.", "diagram": null },
        { "stepNumber": 3, "description": "Divide step by step.", "workingLatex": "30 \\div 8 = 3 \\text{ r } 6", "explanation": "Eight goes into thirty three times with six left over, giving the first decimal digit $3$.", "diagram": null },
        { "stepNumber": 4, "description": "Continue the division.", "workingLatex": "60 \\div 8 = 7 \\text{ r } 4", "explanation": "Carrying the remainder gives the next digit $7$.", "diagram": null },
        { "stepNumber": 5, "description": "Finish the division.", "workingLatex": "40 \\div 8 = 5", "explanation": "The last step divides exactly, giving the digit $5$.", "diagram": null },
        { "stepNumber": 6, "description": "State the decimal.", "workingLatex": "\\frac{3}{8} = 0.375", "explanation": "So the decimal is $0.375$.", "diagram": null },
        { "stepNumber": 7, "description": "Convert the decimal to a percentage.", "workingLatex": "0.375 \\times 100", "explanation": "Multiply by $100$ to change a decimal into a percentage.", "diagram": null },
        { "stepNumber": 8, "description": "Work it out.", "workingLatex": "0.375 \\times 100 = 37.5", "explanation": "The point moves two places right.", "diagram": null },
        { "stepNumber": 9, "description": "State both answers.", "workingLatex": "\\frac{3}{8} = 0.375 = 37.5\\%", "explanation": "So three eighths is $0.375$ or $37.5\\%$.", "diagram": null }
      ],
      "finalAnswer": "(a) $0.375$; (b) $37.5\\%$"
    }
  },
  {
    "id": "gcse.number.fdp-equivalence.q026",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "FDP equivalence",
    "subtopicId": "gcse.number.fdp-equivalence",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "fraction",
    "tags": ["fdp", "decimal to fraction", "simplifying", "thousandths"],
    "questionText": "Write $0.375$ as a fraction in its simplest form.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Read the place value.", "workingLatex": "0.375 = \\text{three hundred and seventy-five thousandths}", "explanation": "The last digit is in the thousandths column.", "diagram": null },
        { "stepNumber": 2, "description": "Write as a fraction over 1000.", "workingLatex": "0.375 = \\frac{375}{1000}", "explanation": "Thousandths means a denominator of $1000$.", "diagram": null },
        { "stepNumber": 3, "description": "Divide top and bottom by 25.", "workingLatex": "\\frac{375}{1000} = \\frac{15}{40}", "explanation": "Both $375$ and $1000$ divide by $25$.", "diagram": null },
        { "stepNumber": 4, "description": "Divide again by 5.", "workingLatex": "\\frac{15}{40} = \\frac{3}{8}", "explanation": "Both $15$ and $40$ divide by $5$.", "diagram": null },
        { "stepNumber": 5, "description": "Check it is fully simplified.", "workingLatex": "\\gcd(3,8) = 1", "explanation": "Three and eight share no common factor.", "diagram": null },
        { "stepNumber": 6, "description": "State the final answer.", "workingLatex": "0.375 = \\frac{3}{8}", "explanation": "So $0.375$ is three eighths.", "diagram": null }
      ],
      "finalAnswer": "$\\frac{3}{8}$"
    }
  },
  {
    "id": "gcse.number.fdp-equivalence.q027",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "FDP equivalence",
    "subtopicId": "gcse.number.fdp-equivalence",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "fraction",
    "tags": ["fdp", "percentage to fraction", "decimal percentage", "simplifying"],
    "questionText": "Write $12.5\\%$ as a fraction in its simplest form.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Write the percentage over 100.", "workingLatex": "12.5\\% = \\frac{12.5}{100}", "explanation": "A percentage is a number out of $100$, even when it has a decimal.", "diagram": null },
        { "stepNumber": 2, "description": "Clear the decimal.", "workingLatex": "\\frac{12.5}{100} = \\frac{125}{1000}", "explanation": "Multiplying top and bottom by $10$ removes the decimal in the numerator.", "diagram": null },
        { "stepNumber": 3, "description": "Divide top and bottom by 25.", "workingLatex": "\\frac{125}{1000} = \\frac{5}{40}", "explanation": "Both $125$ and $1000$ divide by $25$.", "diagram": null },
        { "stepNumber": 4, "description": "Divide again by 5.", "workingLatex": "\\frac{5}{40} = \\frac{1}{8}", "explanation": "Both $5$ and $40$ divide by $5$.", "diagram": null },
        { "stepNumber": 5, "description": "Check it is fully simplified.", "workingLatex": "\\gcd(1,8) = 1", "explanation": "One and eight share no common factor.", "diagram": null },
        { "stepNumber": 6, "description": "State the final answer.", "workingLatex": "12.5\\% = \\frac{1}{8}", "explanation": "So $12.5\\%$ is one eighth.", "diagram": null }
      ],
      "finalAnswer": "$\\frac{1}{8}$"
    }
  },
  {
    "id": "gcse.number.fdp-equivalence.q028",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "FDP equivalence",
    "subtopicId": "gcse.number.fdp-equivalence",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "value",
    "tags": ["fdp", "fraction to decimal", "fraction to percentage", "division"],
    "questionText": "Write $\\frac{5}{8}$ as (a) a decimal and (b) a percentage.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Interpret the fraction as a division.", "workingLatex": "\\frac{5}{8} = 5 \\div 8", "explanation": "A fraction is the top divided by the bottom.", "diagram": null },
        { "stepNumber": 2, "description": "Set up with decimal places.", "workingLatex": "5.000 \\div 8", "explanation": "Since $5 < 8$, we add decimal zeros.", "diagram": null },
        { "stepNumber": 3, "description": "Divide step by step.", "workingLatex": "50 \\div 8 = 6 \\text{ r } 2", "explanation": "The first decimal digit is $6$ with remainder $2$.", "diagram": null },
        { "stepNumber": 4, "description": "Continue the division.", "workingLatex": "20 \\div 8 = 2 \\text{ r } 4", "explanation": "The next digit is $2$ with remainder $4$.", "diagram": null },
        { "stepNumber": 5, "description": "Finish the division.", "workingLatex": "40 \\div 8 = 5", "explanation": "The last step divides exactly, giving $5$.", "diagram": null },
        { "stepNumber": 6, "description": "State the decimal.", "workingLatex": "\\frac{5}{8} = 0.625", "explanation": "So the decimal is $0.625$.", "diagram": null },
        { "stepNumber": 7, "description": "Convert to a percentage.", "workingLatex": "0.625 \\times 100 = 62.5", "explanation": "Multiplying by $100$ moves the point two places right.", "diagram": null },
        { "stepNumber": 8, "description": "State both answers.", "workingLatex": "\\frac{5}{8} = 0.625 = 62.5\\%", "explanation": "So five eighths is $0.625$ or $62.5\\%$.", "diagram": null }
      ],
      "finalAnswer": "(a) $0.625$; (b) $62.5\\%$"
    }
  },
  {
    "id": "gcse.number.fdp-equivalence.q029",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "FDP equivalence",
    "subtopicId": "gcse.number.fdp-equivalence",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "fraction",
    "tags": ["fdp", "decimal to fraction", "simplifying", "hundredths"],
    "questionText": "Write $0.65$ as a fraction in its simplest form.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Read the place value.", "workingLatex": "0.65 = \\text{sixty-five hundredths}", "explanation": "The last digit is in the hundredths column.", "diagram": null },
        { "stepNumber": 2, "description": "Write as a fraction over 100.", "workingLatex": "0.65 = \\frac{65}{100}", "explanation": "Hundredths means a denominator of $100$.", "diagram": null },
        { "stepNumber": 3, "description": "Find the common factor.", "workingLatex": "\\gcd(65,100) = 5", "explanation": "Both $65$ and $100$ divide by $5$.", "diagram": null },
        { "stepNumber": 4, "description": "Simplify.", "workingLatex": "\\frac{65}{100} = \\frac{13}{20}", "explanation": "Dividing top and bottom by $5$ gives thirteen twentieths.", "diagram": null },
        { "stepNumber": 5, "description": "Check it is fully simplified.", "workingLatex": "\\gcd(13,20) = 1", "explanation": "Thirteen and twenty share no common factor.", "diagram": null },
        { "stepNumber": 6, "description": "State the final answer.", "workingLatex": "0.65 = \\frac{13}{20}", "explanation": "So $0.65$ is thirteen twentieths.", "diagram": null }
      ],
      "finalAnswer": "$\\frac{13}{20}$"
    }
  },
  {
    "id": "gcse.number.fdp-equivalence.q030",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "FDP equivalence",
    "subtopicId": "gcse.number.fdp-equivalence",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "value",
    "tags": ["fdp", "fraction to decimal", "fraction to percentage", "equivalent fractions"],
    "questionText": "Write $\\frac{7}{20}$ as (a) a decimal and (b) a percentage.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Aim for a denominator of 100.", "workingLatex": "\\frac{7}{20} = \\frac{?}{100}", "explanation": "Hundredths give both a percentage and a two-place decimal.", "diagram": null },
        { "stepNumber": 2, "description": "Find the multiplier.", "workingLatex": "100 \\div 20 = 5", "explanation": "We multiply the denominator by $5$ to reach $100$.", "diagram": null },
        { "stepNumber": 3, "description": "Multiply top and bottom by 5.", "workingLatex": "\\frac{7}{20} = \\frac{35}{100}", "explanation": "Both parts are scaled by $5$.", "diagram": null },
        { "stepNumber": 4, "description": "Read off the decimal.", "workingLatex": "\\frac{35}{100} = 0.35", "explanation": "Thirty-five hundredths is $0.35$.", "diagram": null },
        { "stepNumber": 5, "description": "Read off the percentage.", "workingLatex": "\\frac{35}{100} = 35\\%", "explanation": "Thirty-five out of one hundred is $35\\%$.", "diagram": null },
        { "stepNumber": 6, "description": "State both answers.", "workingLatex": "\\frac{7}{20} = 0.35 = 35\\%", "explanation": "So seven twentieths is $0.35$ or $35\\%$.", "diagram": null }
      ],
      "finalAnswer": "(a) $0.35$; (b) $35\\%$"
    }
  },
  {
    "id": "gcse.number.fdp-equivalence.q031",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "FDP equivalence",
    "subtopicId": "gcse.number.fdp-equivalence",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "value",
    "tags": ["fdp", "percentage to decimal", "percentage to fraction", "decimal percentage"],
    "questionText": "Write $2.5\\%$ as (a) a decimal and (b) a fraction in its simplest form.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Convert to a decimal first.", "workingLatex": "2.5 \\div 100", "explanation": "Dividing a percentage by $100$ gives its decimal form.", "diagram": null },
        { "stepNumber": 2, "description": "Work it out.", "workingLatex": "2.5 \\div 100 = 0.025", "explanation": "The point moves two places left, needing a zero placeholder.", "diagram": null },
        { "stepNumber": 3, "description": "State the decimal.", "workingLatex": "2.5\\% = 0.025", "explanation": "So the decimal is $0.025$.", "diagram": null },
        { "stepNumber": 4, "description": "Write the percentage over 100.", "workingLatex": "2.5\\% = \\frac{2.5}{100}", "explanation": "Now we convert to a fraction.", "diagram": null },
        { "stepNumber": 5, "description": "Clear the decimal.", "workingLatex": "\\frac{2.5}{100} = \\frac{25}{1000}", "explanation": "Multiplying top and bottom by $10$ removes the decimal.", "diagram": null },
        { "stepNumber": 6, "description": "Divide top and bottom by 25.", "workingLatex": "\\frac{25}{1000} = \\frac{1}{40}", "explanation": "Both $25$ and $1000$ divide by $25$.", "diagram": null },
        { "stepNumber": 7, "description": "Check it is fully simplified.", "workingLatex": "\\gcd(1,40) = 1", "explanation": "One and forty share no common factor.", "diagram": null },
        { "stepNumber": 8, "description": "State both answers.", "workingLatex": "2.5\\% = 0.025 = \\frac{1}{40}", "explanation": "So $2.5\\%$ is $0.025$ or one fortieth.", "diagram": null }
      ],
      "finalAnswer": "(a) $0.025$; (b) $\\frac{1}{40}$"
    }
  },
  {
    "id": "gcse.number.fdp-equivalence.q032",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "FDP equivalence",
    "subtopicId": "gcse.number.fdp-equivalence",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "value",
    "tags": ["fdp", "fraction to decimal", "fraction to percentage", "equivalent fractions"],
    "questionText": "Write $\\frac{17}{25}$ as (a) a decimal and (b) a percentage.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Aim for a denominator of 100.", "workingLatex": "\\frac{17}{25} = \\frac{?}{100}", "explanation": "Hundredths give both the decimal and the percentage.", "diagram": null },
        { "stepNumber": 2, "description": "Find the multiplier.", "workingLatex": "100 \\div 25 = 4", "explanation": "We multiply the denominator by $4$ to reach $100$.", "diagram": null },
        { "stepNumber": 3, "description": "Multiply top and bottom by 4.", "workingLatex": "\\frac{17}{25} = \\frac{68}{100}", "explanation": "Both parts are scaled by $4$.", "diagram": null },
        { "stepNumber": 4, "description": "Read off the decimal.", "workingLatex": "\\frac{68}{100} = 0.68", "explanation": "Sixty-eight hundredths is $0.68$.", "diagram": null },
        { "stepNumber": 5, "description": "Read off the percentage.", "workingLatex": "\\frac{68}{100} = 68\\%", "explanation": "Sixty-eight out of one hundred is $68\\%$.", "diagram": null },
        { "stepNumber": 6, "description": "State both answers.", "workingLatex": "\\frac{17}{25} = 0.68 = 68\\%", "explanation": "So seventeen twenty-fifths is $0.68$ or $68\\%$.", "diagram": null }
      ],
      "finalAnswer": "(a) $0.68$; (b) $68\\%$"
    }
  },
  {
    "id": "gcse.number.fdp-equivalence.q033",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "FDP equivalence",
    "subtopicId": "gcse.number.fdp-equivalence",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "fraction",
    "tags": ["fdp", "decimal to fraction", "simplifying", "hundredths"],
    "questionText": "Write $0.24$ as a fraction in its simplest form.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Read the place value.", "workingLatex": "0.24 = \\text{twenty-four hundredths}", "explanation": "The last digit is in the hundredths column.", "diagram": null },
        { "stepNumber": 2, "description": "Write as a fraction over 100.", "workingLatex": "0.24 = \\frac{24}{100}", "explanation": "Hundredths means a denominator of $100$.", "diagram": null },
        { "stepNumber": 3, "description": "Find the common factor.", "workingLatex": "\\gcd(24,100) = 4", "explanation": "Both $24$ and $100$ divide by $4$.", "diagram": null },
        { "stepNumber": 4, "description": "Simplify.", "workingLatex": "\\frac{24}{100} = \\frac{6}{25}", "explanation": "Dividing top and bottom by $4$ gives six twenty-fifths.", "diagram": null },
        { "stepNumber": 5, "description": "Check it is fully simplified.", "workingLatex": "\\gcd(6,25) = 1", "explanation": "Six and twenty-five share no common factor.", "diagram": null },
        { "stepNumber": 6, "description": "State the final answer.", "workingLatex": "0.24 = \\frac{6}{25}", "explanation": "So $0.24$ is six twenty-fifths.", "diagram": null }
      ],
      "finalAnswer": "$\\frac{6}{25}$"
    }
  },
  {
    "id": "gcse.number.fdp-equivalence.q034",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "FDP equivalence",
    "subtopicId": "gcse.number.fdp-equivalence",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "value",
    "tags": ["fdp", "percentage over 100", "percentage to decimal", "mixed number"],
    "questionText": "Write $150\\%$ as (a) a decimal and (b) a mixed number in its simplest form.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Convert to a decimal.", "workingLatex": "150 \\div 100", "explanation": "Dividing a percentage by $100$ gives its decimal form.", "diagram": null },
        { "stepNumber": 2, "description": "Work it out.", "workingLatex": "150 \\div 100 = 1.5", "explanation": "As the percentage is over $100\\%$, the decimal is greater than $1$.", "diagram": null },
        { "stepNumber": 3, "description": "State the decimal.", "workingLatex": "150\\% = 1.5", "explanation": "So the decimal is $1.5$.", "diagram": null },
        { "stepNumber": 4, "description": "Write the percentage over 100.", "workingLatex": "150\\% = \\frac{150}{100}", "explanation": "Now we convert to a fraction.", "diagram": null },
        { "stepNumber": 5, "description": "Simplify the fraction.", "workingLatex": "\\frac{150}{100} = \\frac{3}{2}", "explanation": "Dividing top and bottom by $50$ gives three halves.", "diagram": null },
        { "stepNumber": 6, "description": "Convert to a mixed number.", "workingLatex": "\\frac{3}{2} = 1\\frac{1}{2}", "explanation": "Three halves is one whole and one half.", "diagram": null },
        { "stepNumber": 7, "description": "State both answers.", "workingLatex": "150\\% = 1.5 = 1\\frac{1}{2}", "explanation": "So $150\\%$ is $1.5$ or one and a half.", "diagram": null }
      ],
      "finalAnswer": "(a) $1.5$; (b) $1\\frac{1}{2}$"
    }
  },
  {
    "id": "gcse.number.fdp-equivalence.q035",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "FDP equivalence",
    "subtopicId": "gcse.number.fdp-equivalence",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "value",
    "tags": ["fdp", "fraction to decimal", "fraction to percentage", "division"],
    "questionText": "Write $\\frac{1}{8}$ as (a) a decimal and (b) a percentage.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Interpret the fraction as a division.", "workingLatex": "\\frac{1}{8} = 1 \\div 8", "explanation": "A fraction is the top divided by the bottom.", "diagram": null },
        { "stepNumber": 2, "description": "Set up with decimal places.", "workingLatex": "1.000 \\div 8", "explanation": "Since $1 < 8$, we add decimal zeros.", "diagram": null },
        { "stepNumber": 3, "description": "Divide step by step.", "workingLatex": "10 \\div 8 = 1 \\text{ r } 2", "explanation": "The first decimal digit is $1$ with remainder $2$.", "diagram": null },
        { "stepNumber": 4, "description": "Continue the division.", "workingLatex": "20 \\div 8 = 2 \\text{ r } 4", "explanation": "The next digit is $2$ with remainder $4$.", "diagram": null },
        { "stepNumber": 5, "description": "Finish the division.", "workingLatex": "40 \\div 8 = 5", "explanation": "The last step divides exactly, giving $5$.", "diagram": null },
        { "stepNumber": 6, "description": "State the decimal.", "workingLatex": "\\frac{1}{8} = 0.125", "explanation": "So the decimal is $0.125$.", "diagram": null },
        { "stepNumber": 7, "description": "Convert to a percentage.", "workingLatex": "0.125 \\times 100 = 12.5", "explanation": "Multiplying by $100$ moves the point two places right.", "diagram": null },
        { "stepNumber": 8, "description": "State both answers.", "workingLatex": "\\frac{1}{8} = 0.125 = 12.5\\%", "explanation": "So one eighth is $0.125$ or $12.5\\%$.", "diagram": null }
      ],
      "finalAnswer": "(a) $0.125$; (b) $12.5\\%$"
    }
  },
  {
    "id": "gcse.number.fdp-equivalence.q036",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "FDP equivalence",
    "subtopicId": "gcse.number.fdp-equivalence",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "value",
    "tags": ["fdp", "fraction to decimal", "fraction to percentage", "equivalent fractions"],
    "questionText": "Write $\\frac{11}{20}$ as (a) a decimal and (b) a percentage.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Aim for a denominator of 100.", "workingLatex": "\\frac{11}{20} = \\frac{?}{100}", "explanation": "Hundredths give both the decimal and the percentage.", "diagram": null },
        { "stepNumber": 2, "description": "Find the multiplier.", "workingLatex": "100 \\div 20 = 5", "explanation": "We multiply the denominator by $5$ to reach $100$.", "diagram": null },
        { "stepNumber": 3, "description": "Multiply top and bottom by 5.", "workingLatex": "\\frac{11}{20} = \\frac{55}{100}", "explanation": "Both parts are scaled by $5$.", "diagram": null },
        { "stepNumber": 4, "description": "Read off the decimal.", "workingLatex": "\\frac{55}{100} = 0.55", "explanation": "Fifty-five hundredths is $0.55$.", "diagram": null },
        { "stepNumber": 5, "description": "Read off the percentage.", "workingLatex": "\\frac{55}{100} = 55\\%", "explanation": "Fifty-five out of one hundred is $55\\%$.", "diagram": null },
        { "stepNumber": 6, "description": "State both answers.", "workingLatex": "\\frac{11}{20} = 0.55 = 55\\%", "explanation": "So eleven twentieths is $0.55$ or $55\\%$.", "diagram": null }
      ],
      "finalAnswer": "(a) $0.55$; (b) $55\\%$"
    }
  },
  {
    "id": "gcse.number.fdp-equivalence.q037",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "FDP equivalence",
    "subtopicId": "gcse.number.fdp-equivalence",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "ordering",
    "tags": ["fdp", "ordering", "comparison", "convert to decimals"],
    "questionText": "Write these in order of size, smallest first: $0.62, \\; \\frac{3}{5}, \\; 55\\%$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Choose a common form.", "workingLatex": "\\text{convert all to decimals}", "explanation": "Comparing is easiest when every value is written in the same form; decimals work well.", "diagram": null },
        { "stepNumber": 2, "description": "The first value is already a decimal.", "workingLatex": "0.62", "explanation": "No conversion is needed for $0.62$.", "diagram": null },
        { "stepNumber": 3, "description": "Convert the fraction.", "workingLatex": "\\frac{3}{5} = \\frac{6}{10} = 0.6", "explanation": "Three fifths is six tenths, which is $0.6$.", "diagram": null },
        { "stepNumber": 4, "description": "Convert the percentage.", "workingLatex": "55\\% = 0.55", "explanation": "Dividing $55$ by $100$ gives $0.55$.", "diagram": null },
        { "stepNumber": 5, "description": "List the decimals.", "workingLatex": "0.62, \\; 0.60, \\; 0.55", "explanation": "Writing each with two places makes them easy to compare.", "diagram": null },
        { "stepNumber": 6, "description": "Order the decimals.", "workingLatex": "0.55 < 0.60 < 0.62", "explanation": "Comparing digit by digit gives the order from smallest to largest.", "diagram": null },
        { "stepNumber": 7, "description": "Rewrite in the original forms.", "workingLatex": "55\\%, \\; \\frac{3}{5}, \\; 0.62", "explanation": "We restate each value in the form it was given.", "diagram": null },
        { "stepNumber": 8, "description": "State the final answer.", "workingLatex": "55\\%, \\; \\frac{3}{5}, \\; 0.62", "explanation": "This is the list from smallest to largest.", "diagram": null }
      ],
      "finalAnswer": "$55\\%, \\; \\frac{3}{5}, \\; 0.62$"
    }
  },
  {
    "id": "gcse.number.fdp-equivalence.q038",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "FDP equivalence",
    "subtopicId": "gcse.number.fdp-equivalence",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "ordering",
    "tags": ["fdp", "ordering", "comparison", "convert to decimals"],
    "questionText": "Write these in order of size, smallest first: $\\frac{2}{5}, \\; 0.35, \\; 38\\%$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Choose a common form.", "workingLatex": "\\text{convert all to decimals}", "explanation": "Decimals make the values easy to compare directly.", "diagram": null },
        { "stepNumber": 2, "description": "Convert the fraction.", "workingLatex": "\\frac{2}{5} = \\frac{4}{10} = 0.4", "explanation": "Two fifths is four tenths, which is $0.4$.", "diagram": null },
        { "stepNumber": 3, "description": "The second value is already a decimal.", "workingLatex": "0.35", "explanation": "No conversion is needed for $0.35$.", "diagram": null },
        { "stepNumber": 4, "description": "Convert the percentage.", "workingLatex": "38\\% = 0.38", "explanation": "Dividing $38$ by $100$ gives $0.38$.", "diagram": null },
        { "stepNumber": 5, "description": "List the decimals.", "workingLatex": "0.40, \\; 0.35, \\; 0.38", "explanation": "Writing each with two places makes them easy to compare.", "diagram": null },
        { "stepNumber": 6, "description": "Order the decimals.", "workingLatex": "0.35 < 0.38 < 0.40", "explanation": "Comparing digit by digit gives the order.", "diagram": null },
        { "stepNumber": 7, "description": "Rewrite in the original forms.", "workingLatex": "0.35, \\; 38\\%, \\; \\frac{2}{5}", "explanation": "We restate each value as it was given.", "diagram": null },
        { "stepNumber": 8, "description": "State the final answer.", "workingLatex": "0.35, \\; 38\\%, \\; \\frac{2}{5}", "explanation": "This is the list from smallest to largest.", "diagram": null }
      ],
      "finalAnswer": "$0.35, \\; 38\\%, \\; \\frac{2}{5}$"
    }
  },
  {
    "id": "gcse.number.fdp-equivalence.q039",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "FDP equivalence",
    "subtopicId": "gcse.number.fdp-equivalence",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "value",
    "tags": ["fdp", "fraction to decimal", "fraction to percentage", "equivalent fractions"],
    "questionText": "Write $\\frac{9}{40}$ as (a) a decimal and (b) a percentage.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Aim for a denominator of 1000.", "workingLatex": "\\frac{9}{40} = \\frac{?}{1000}", "explanation": "As $40$ does not divide $100$ evenly, we scale up to thousandths instead.", "diagram": null },
        { "stepNumber": 2, "description": "Find the multiplier.", "workingLatex": "1000 \\div 40 = 25", "explanation": "We multiply the denominator by $25$ to reach $1000$.", "diagram": null },
        { "stepNumber": 3, "description": "Multiply top and bottom by 25.", "workingLatex": "\\frac{9}{40} = \\frac{225}{1000}", "explanation": "Both parts are scaled by $25$.", "diagram": null },
        { "stepNumber": 4, "description": "Read off the decimal.", "workingLatex": "\\frac{225}{1000} = 0.225", "explanation": "Two hundred and twenty-five thousandths is $0.225$.", "diagram": null },
        { "stepNumber": 5, "description": "Convert to a percentage.", "workingLatex": "0.225 \\times 100 = 22.5", "explanation": "Multiplying by $100$ moves the point two places right.", "diagram": null },
        { "stepNumber": 6, "description": "State both answers.", "workingLatex": "\\frac{9}{40} = 0.225 = 22.5\\%", "explanation": "So nine fortieths is $0.225$ or $22.5\\%$.", "diagram": null }
      ],
      "finalAnswer": "(a) $0.225$; (b) $22.5\\%$"
    }
  },
  {
    "id": "gcse.number.fdp-equivalence.q040",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "FDP equivalence",
    "subtopicId": "gcse.number.fdp-equivalence",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "fraction",
    "tags": ["fdp", "decimal to fraction", "simplifying", "thousandths"],
    "questionText": "Write $0.875$ as a fraction in its simplest form.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Read the place value.", "workingLatex": "0.875 = \\text{eight hundred and seventy-five thousandths}", "explanation": "The last digit is in the thousandths column.", "diagram": null },
        { "stepNumber": 2, "description": "Write as a fraction over 1000.", "workingLatex": "0.875 = \\frac{875}{1000}", "explanation": "Thousandths means a denominator of $1000$.", "diagram": null },
        { "stepNumber": 3, "description": "Divide top and bottom by 125.", "workingLatex": "\\frac{875}{1000} = \\frac{7}{8}", "explanation": "Both $875$ and $1000$ divide by $125$.", "diagram": null },
        { "stepNumber": 4, "description": "Check it is fully simplified.", "workingLatex": "\\gcd(7,8) = 1", "explanation": "Seven and eight share no common factor.", "diagram": null },
        { "stepNumber": 5, "description": "State the final answer.", "workingLatex": "0.875 = \\frac{7}{8}", "explanation": "So $0.875$ is seven eighths.", "diagram": null }
      ],
      "finalAnswer": "$\\frac{7}{8}$"
    }
  },
  {
    "id": "gcse.number.fdp-equivalence.q041",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "FDP equivalence",
    "subtopicId": "gcse.number.fdp-equivalence",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "value",
    "tags": ["fdp", "fraction to decimal", "fraction to percentage", "division"],
    "questionText": "Write $\\frac{7}{8}$ as (a) a decimal and (b) a percentage.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Interpret the fraction as a division.", "workingLatex": "\\frac{7}{8} = 7 \\div 8", "explanation": "A fraction is the top divided by the bottom.", "diagram": null },
        { "stepNumber": 2, "description": "Set up with decimal places.", "workingLatex": "7.000 \\div 8", "explanation": "Since $7 < 8$, we add decimal zeros.", "diagram": null },
        { "stepNumber": 3, "description": "Divide step by step.", "workingLatex": "70 \\div 8 = 8 \\text{ r } 6", "explanation": "The first decimal digit is $8$ with remainder $6$.", "diagram": null },
        { "stepNumber": 4, "description": "Continue the division.", "workingLatex": "60 \\div 8 = 7 \\text{ r } 4", "explanation": "The next digit is $7$ with remainder $4$.", "diagram": null },
        { "stepNumber": 5, "description": "Finish the division.", "workingLatex": "40 \\div 8 = 5", "explanation": "The last step divides exactly, giving $5$.", "diagram": null },
        { "stepNumber": 6, "description": "State the decimal.", "workingLatex": "\\frac{7}{8} = 0.875", "explanation": "So the decimal is $0.875$.", "diagram": null },
        { "stepNumber": 7, "description": "Convert to a percentage.", "workingLatex": "0.875 \\times 100 = 87.5", "explanation": "Multiplying by $100$ moves the point two places right.", "diagram": null },
        { "stepNumber": 8, "description": "State both answers.", "workingLatex": "\\frac{7}{8} = 0.875 = 87.5\\%", "explanation": "So seven eighths is $0.875$ or $87.5\\%$.", "diagram": null }
      ],
      "finalAnswer": "(a) $0.875$; (b) $87.5\\%$"
    }
  },
  {
    "id": "gcse.number.fdp-equivalence.q042",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "FDP equivalence",
    "subtopicId": "gcse.number.fdp-equivalence",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "fraction",
    "tags": ["fdp", "decimal to fraction", "simplifying", "hundredths"],
    "questionText": "Write $0.45$ as a fraction in its simplest form.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Read the place value.", "workingLatex": "0.45 = \\text{forty-five hundredths}", "explanation": "The last digit is in the hundredths column.", "diagram": null },
        { "stepNumber": 2, "description": "Write as a fraction over 100.", "workingLatex": "0.45 = \\frac{45}{100}", "explanation": "Hundredths means a denominator of $100$.", "diagram": null },
        { "stepNumber": 3, "description": "Find the common factor.", "workingLatex": "\\gcd(45,100) = 5", "explanation": "Both $45$ and $100$ divide by $5$.", "diagram": null },
        { "stepNumber": 4, "description": "Simplify.", "workingLatex": "\\frac{45}{100} = \\frac{9}{20}", "explanation": "Dividing top and bottom by $5$ gives nine twentieths.", "diagram": null },
        { "stepNumber": 5, "description": "Check it is fully simplified.", "workingLatex": "\\gcd(9,20) = 1", "explanation": "Nine and twenty share no common factor.", "diagram": null },
        { "stepNumber": 6, "description": "State the final answer.", "workingLatex": "0.45 = \\frac{9}{20}", "explanation": "So $0.45$ is nine twentieths.", "diagram": null }
      ],
      "finalAnswer": "$\\frac{9}{20}$"
    }
  },
  {
    "id": "gcse.number.fdp-equivalence.q043",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "FDP equivalence",
    "subtopicId": "gcse.number.fdp-equivalence",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "value",
    "tags": ["fdp", "comparison", "fraction to decimal"],
    "questionText": "Which is larger, $\\frac{3}{8}$ or $0.4$? Show your working.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Decide on a common form.", "workingLatex": "\\text{convert } \\frac{3}{8} \\text{ to a decimal}", "explanation": "To compare a fraction and a decimal, write both as decimals.", "diagram": null },
        { "stepNumber": 2, "description": "Convert the fraction.", "workingLatex": "\\frac{3}{8} = 3 \\div 8", "explanation": "A fraction is the top divided by the bottom.", "diagram": null },
        { "stepNumber": 3, "description": "Carry out the division.", "workingLatex": "3 \\div 8 = 0.375", "explanation": "Dividing gives the decimal $0.375$.", "diagram": null },
        { "stepNumber": 4, "description": "Write both to three places.", "workingLatex": "0.375 \\text{ and } 0.400", "explanation": "Padding $0.4$ to $0.400$ makes the comparison clear.", "diagram": null },
        { "stepNumber": 5, "description": "Compare the decimals.", "workingLatex": "0.375 < 0.400", "explanation": "In the hundredths column $7 < 0$... comparing from the tenths, both are $3$ vs $4$, so $0.375$ is smaller.", "diagram": null },
        { "stepNumber": 6, "description": "State the conclusion.", "workingLatex": "0.4 > \\frac{3}{8}", "explanation": "So $0.4$ is the larger value.", "diagram": null }
      ],
      "finalAnswer": "$0.4$ is larger (since $\\frac{3}{8} = 0.375$)"
    }
  },
  {
    "id": "gcse.number.fdp-equivalence.q044",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "FDP equivalence",
    "subtopicId": "gcse.number.fdp-equivalence",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "ordering",
    "tags": ["fdp", "ordering", "comparison", "convert to decimals"],
    "questionText": "Write these in order of size, smallest first: $0.7, \\; \\frac{3}{4}, \\; 72\\%$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Choose a common form.", "workingLatex": "\\text{convert all to decimals}", "explanation": "Decimals make comparison straightforward.", "diagram": null },
        { "stepNumber": 2, "description": "The first value is already a decimal.", "workingLatex": "0.7 = 0.70", "explanation": "Writing $0.7$ as $0.70$ helps with comparison.", "diagram": null },
        { "stepNumber": 3, "description": "Convert the fraction.", "workingLatex": "\\frac{3}{4} = 0.75", "explanation": "Three quarters is $0.75$.", "diagram": null },
        { "stepNumber": 4, "description": "Convert the percentage.", "workingLatex": "72\\% = 0.72", "explanation": "Dividing $72$ by $100$ gives $0.72$.", "diagram": null },
        { "stepNumber": 5, "description": "List the decimals.", "workingLatex": "0.70, \\; 0.75, \\; 0.72", "explanation": "All three are now two-place decimals.", "diagram": null },
        { "stepNumber": 6, "description": "Order the decimals.", "workingLatex": "0.70 < 0.72 < 0.75", "explanation": "Comparing digit by digit gives the order.", "diagram": null },
        { "stepNumber": 7, "description": "Rewrite in the original forms.", "workingLatex": "0.7, \\; 72\\%, \\; \\frac{3}{4}", "explanation": "We restate each value as it was given.", "diagram": null },
        { "stepNumber": 8, "description": "State the final answer.", "workingLatex": "0.7, \\; 72\\%, \\; \\frac{3}{4}", "explanation": "This is the list from smallest to largest.", "diagram": null }
      ],
      "finalAnswer": "$0.7, \\; 72\\%, \\; \\frac{3}{4}$"
    }
  },
  {
    "id": "gcse.number.fdp-equivalence.q045",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "FDP equivalence",
    "subtopicId": "gcse.number.fdp-equivalence",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "fraction",
    "tags": ["fdp", "decimal to fraction", "simplifying", "hundredths"],
    "questionText": "Write $0.52$ as a fraction in its simplest form.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Read the place value.", "workingLatex": "0.52 = \\text{fifty-two hundredths}", "explanation": "The last digit is in the hundredths column.", "diagram": null },
        { "stepNumber": 2, "description": "Write as a fraction over 100.", "workingLatex": "0.52 = \\frac{52}{100}", "explanation": "Hundredths means a denominator of $100$.", "diagram": null },
        { "stepNumber": 3, "description": "Find the common factor.", "workingLatex": "\\gcd(52,100) = 4", "explanation": "Both $52$ and $100$ divide by $4$.", "diagram": null },
        { "stepNumber": 4, "description": "Simplify.", "workingLatex": "\\frac{52}{100} = \\frac{13}{25}", "explanation": "Dividing top and bottom by $4$ gives thirteen twenty-fifths.", "diagram": null },
        { "stepNumber": 5, "description": "Check it is fully simplified.", "workingLatex": "\\gcd(13,25) = 1", "explanation": "Thirteen and twenty-five share no common factor.", "diagram": null },
        { "stepNumber": 6, "description": "State the final answer.", "workingLatex": "0.52 = \\frac{13}{25}", "explanation": "So $0.52$ is thirteen twenty-fifths.", "diagram": null }
      ],
      "finalAnswer": "$\\frac{13}{25}$"
    }
  },
  {
    "id": "gcse.number.fdp-equivalence.q046",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "FDP equivalence",
    "subtopicId": "gcse.number.fdp-equivalence",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "value",
    "tags": ["fdp", "percentage to fraction", "percentage to decimal", "simplifying"],
    "questionText": "Write $40\\%$ as (a) a fraction in its simplest form and (b) a decimal.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Write the percentage over 100.", "workingLatex": "40\\% = \\frac{40}{100}", "explanation": "A percentage is a number out of $100$.", "diagram": null },
        { "stepNumber": 2, "description": "Find the common factor.", "workingLatex": "\\gcd(40,100) = 20", "explanation": "Twenty is the biggest number dividing both.", "diagram": null },
        { "stepNumber": 3, "description": "Simplify the fraction.", "workingLatex": "\\frac{40}{100} = \\frac{2}{5}", "explanation": "Dividing top and bottom by $20$ gives two fifths.", "diagram": null },
        { "stepNumber": 4, "description": "Convert the percentage to a decimal.", "workingLatex": "40 \\div 100 = 0.4", "explanation": "Dividing by $100$ moves the point two places left.", "diagram": null },
        { "stepNumber": 5, "description": "State both answers.", "workingLatex": "40\\% = \\frac{2}{5} = 0.4", "explanation": "So $40\\%$ is two fifths or $0.4$.", "diagram": null }
      ],
      "finalAnswer": "(a) $\\frac{2}{5}$; (b) $0.4$"
    }
  },
  {
    "id": "gcse.number.fdp-equivalence.q047",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "FDP equivalence",
    "subtopicId": "gcse.number.fdp-equivalence",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "value",
    "tags": ["fdp", "fraction to decimal", "fraction to percentage", "equivalent fractions"],
    "questionText": "Write $\\frac{5}{16}$ as (a) a decimal and (b) a percentage.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Aim for a power-of-ten denominator.", "workingLatex": "\\frac{5}{16} = \\frac{?}{10000}", "explanation": "Since $16 = 2^4$, multiplying by $625$ gives a denominator of $10000$.", "diagram": null },
        { "stepNumber": 2, "description": "Find the multiplier.", "workingLatex": "10000 \\div 16 = 625", "explanation": "We multiply the denominator by $625$ to reach $10000$.", "diagram": null },
        { "stepNumber": 3, "description": "Multiply top and bottom by 625.", "workingLatex": "\\frac{5}{16} = \\frac{3125}{10000}", "explanation": "Both parts are scaled by $625$.", "diagram": null },
        { "stepNumber": 4, "description": "Read off the decimal.", "workingLatex": "\\frac{3125}{10000} = 0.3125", "explanation": "Three thousand one hundred and twenty-five ten-thousandths is $0.3125$.", "diagram": null },
        { "stepNumber": 5, "description": "Convert to a percentage.", "workingLatex": "0.3125 \\times 100 = 31.25", "explanation": "Multiplying by $100$ moves the point two places right.", "diagram": null },
        { "stepNumber": 6, "description": "State both answers.", "workingLatex": "\\frac{5}{16} = 0.3125 = 31.25\\%", "explanation": "So five sixteenths is $0.3125$ or $31.25\\%$.", "diagram": null }
      ],
      "finalAnswer": "(a) $0.3125$; (b) $31.25\\%$"
    }
  },
  {
    "id": "gcse.number.fdp-equivalence.q048",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "FDP equivalence",
    "subtopicId": "gcse.number.fdp-equivalence",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "value",
    "tags": ["fdp", "decimal over 1", "decimal to fraction", "decimal to percentage"],
    "questionText": "Write $1.2$ as (a) a mixed number in its simplest form and (b) a percentage.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Separate the whole and decimal parts.", "workingLatex": "1.2 = 1 + 0.2", "explanation": "The $1$ is a whole and the $0.2$ is the fractional part.", "diagram": null },
        { "stepNumber": 2, "description": "Write the decimal part as a fraction.", "workingLatex": "0.2 = \\frac{2}{10}", "explanation": "Two tenths comes straight from the place value.", "diagram": null },
        { "stepNumber": 3, "description": "Simplify the fractional part.", "workingLatex": "\\frac{2}{10} = \\frac{1}{5}", "explanation": "Dividing top and bottom by $2$ gives one fifth.", "diagram": null },
        { "stepNumber": 4, "description": "Write the mixed number.", "workingLatex": "1.2 = 1\\frac{1}{5}", "explanation": "The whole part and the simplified fraction give the mixed number.", "diagram": null },
        { "stepNumber": 5, "description": "Convert the decimal to a percentage.", "workingLatex": "1.2 \\times 100 = 120", "explanation": "Multiplying by $100$ moves the point two places right.", "diagram": null },
        { "stepNumber": 6, "description": "Attach the percent sign.", "workingLatex": "120\\%", "explanation": "Since the value is more than $1$, the percentage is over $100\\%$.", "diagram": null },
        { "stepNumber": 7, "description": "State both answers.", "workingLatex": "1.2 = 1\\frac{1}{5} = 120\\%", "explanation": "So $1.2$ is one and one fifth or $120\\%$.", "diagram": null }
      ],
      "finalAnswer": "(a) $1\\frac{1}{5}$; (b) $120\\%$"
    }
  },
  {
    "id": "gcse.number.fdp-equivalence.q049",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "FDP equivalence",
    "subtopicId": "gcse.number.fdp-equivalence",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "ordering",
    "tags": ["fdp", "ordering", "comparison", "descending"],
    "questionText": "Write these in order of size, largest first: $0.8, \\; \\frac{3}{4}, \\; 78\\%$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Choose a common form.", "workingLatex": "\\text{convert all to decimals}", "explanation": "Decimals make comparison straightforward.", "diagram": null },
        { "stepNumber": 2, "description": "The first value is already a decimal.", "workingLatex": "0.8 = 0.80", "explanation": "Writing $0.8$ as $0.80$ helps with comparison.", "diagram": null },
        { "stepNumber": 3, "description": "Convert the fraction.", "workingLatex": "\\frac{3}{4} = 0.75", "explanation": "Three quarters is $0.75$.", "diagram": null },
        { "stepNumber": 4, "description": "Convert the percentage.", "workingLatex": "78\\% = 0.78", "explanation": "Dividing $78$ by $100$ gives $0.78$.", "diagram": null },
        { "stepNumber": 5, "description": "List the decimals.", "workingLatex": "0.80, \\; 0.75, \\; 0.78", "explanation": "All three are now two-place decimals.", "diagram": null },
        { "stepNumber": 6, "description": "Order the decimals largest first.", "workingLatex": "0.80 > 0.78 > 0.75", "explanation": "Comparing digit by digit gives the order from largest.", "diagram": null },
        { "stepNumber": 7, "description": "Rewrite in the original forms.", "workingLatex": "0.8, \\; 78\\%, \\; \\frac{3}{4}", "explanation": "We restate each value as it was given.", "diagram": null },
        { "stepNumber": 8, "description": "State the final answer.", "workingLatex": "0.8, \\; 78\\%, \\; \\frac{3}{4}", "explanation": "This is the list from largest to smallest.", "diagram": null }
      ],
      "finalAnswer": "$0.8, \\; 78\\%, \\; \\frac{3}{4}$"
    }
  },
  {
    "id": "gcse.number.fdp-equivalence.q050",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "FDP equivalence",
    "subtopicId": "gcse.number.fdp-equivalence",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "fraction",
    "tags": ["fdp", "decimal to fraction", "simplifying", "hundredths"],
    "questionText": "Write $0.05$ as a fraction in its simplest form.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Read the place value.", "workingLatex": "0.05 = \\text{five hundredths}", "explanation": "The $5$ is in the hundredths column.", "diagram": null },
        { "stepNumber": 2, "description": "Write as a fraction over 100.", "workingLatex": "0.05 = \\frac{5}{100}", "explanation": "Hundredths means a denominator of $100$.", "diagram": null },
        { "stepNumber": 3, "description": "Find the common factor.", "workingLatex": "\\gcd(5,100) = 5", "explanation": "Both $5$ and $100$ divide by $5$.", "diagram": null },
        { "stepNumber": 4, "description": "Simplify.", "workingLatex": "\\frac{5}{100} = \\frac{1}{20}", "explanation": "Dividing top and bottom by $5$ gives one twentieth.", "diagram": null },
        { "stepNumber": 5, "description": "State the final answer.", "workingLatex": "0.05 = \\frac{1}{20}", "explanation": "So $0.05$ is one twentieth.", "diagram": null }
      ],
      "finalAnswer": "$\\frac{1}{20}$"
    }
  },
  {
    "id": "gcse.number.fdp-equivalence.q051",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "FDP equivalence",
    "subtopicId": "gcse.number.fdp-equivalence",
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "ordering",
    "tags": ["fdp", "ordering", "comparison", "four values"],
    "questionText": "Write these in order of size, smallest first: $0.65, \\; \\frac{3}{5}, \\; 62\\%, \\; \\frac{11}{20}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Choose a common form.", "workingLatex": "\\text{convert all to decimals}", "explanation": "With four values in different forms, converting them all to decimals makes comparison reliable.", "diagram": null },
        { "stepNumber": 2, "description": "The first value is already a decimal.", "workingLatex": "0.65", "explanation": "No conversion is needed for $0.65$.", "diagram": null },
        { "stepNumber": 3, "description": "Rewrite the first fraction over 10.", "workingLatex": "\\frac{3}{5} = \\frac{6}{10}", "explanation": "Multiplying top and bottom by $2$ gives a denominator of $10$.", "diagram": null },
        { "stepNumber": 4, "description": "Read it as a decimal.", "workingLatex": "\\frac{6}{10} = 0.6", "explanation": "Six tenths is $0.6$.", "diagram": null },
        { "stepNumber": 5, "description": "Convert the percentage.", "workingLatex": "62\\% = 0.62", "explanation": "Dividing $62$ by $100$ gives $0.62$.", "diagram": null },
        { "stepNumber": 6, "description": "Rewrite the second fraction over 100.", "workingLatex": "\\frac{11}{20} = \\frac{55}{100}", "explanation": "Multiplying top and bottom by $5$ gives a denominator of $100$.", "diagram": null },
        { "stepNumber": 7, "description": "Read it as a decimal.", "workingLatex": "\\frac{55}{100} = 0.55", "explanation": "Fifty-five hundredths is $0.55$.", "diagram": null },
        { "stepNumber": 8, "description": "Write all to two decimal places.", "workingLatex": "0.65, \\; 0.60, \\; 0.62, \\; 0.55", "explanation": "Equal-length decimals are easy to compare.", "diagram": null },
        { "stepNumber": 9, "description": "Order the decimals.", "workingLatex": "0.55 < 0.60 < 0.62 < 0.65", "explanation": "Comparing digit by digit gives the order from smallest.", "diagram": null },
        { "stepNumber": 10, "description": "Match back to the original forms.", "workingLatex": "0.55 = \\frac{11}{20}, \\; 0.60 = \\frac{3}{5}, \\; 0.62 = 62\\%, \\; 0.65 = 0.65", "explanation": "Each decimal corresponds to one of the original values.", "diagram": null },
        { "stepNumber": 11, "description": "State the final answer.", "workingLatex": "\\frac{11}{20}, \\; \\frac{3}{5}, \\; 62\\%, \\; 0.65", "explanation": "This is the list from smallest to largest.", "diagram": null }
      ],
      "finalAnswer": "$\\frac{11}{20}, \\; \\frac{3}{5}, \\; 62\\%, \\; 0.65$"
    }
  },
  {
    "id": "gcse.number.fdp-equivalence.q052",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "FDP equivalence",
    "subtopicId": "gcse.number.fdp-equivalence",
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "ordering",
    "tags": ["fdp", "ordering", "comparison", "descending"],
    "questionText": "Write these in order of size, largest first: $\\frac{5}{8}, \\; 0.6, \\; 63\\%, \\; \\frac{7}{10}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Choose a common form.", "workingLatex": "\\text{convert all to decimals}", "explanation": "Decimals give a fair comparison of all four values.", "diagram": null },
        { "stepNumber": 2, "description": "Convert the first fraction by dividing.", "workingLatex": "\\frac{5}{8} = 5 \\div 8", "explanation": "Eighths are not a factor of $100$, so we divide directly.", "diagram": null },
        { "stepNumber": 3, "description": "Carry out the division.", "workingLatex": "5 \\div 8 = 0.625", "explanation": "Dividing gives $0.625$.", "diagram": null },
        { "stepNumber": 4, "description": "The second value is already a decimal.", "workingLatex": "0.6 = 0.600", "explanation": "Writing extra zeros helps line up the digits.", "diagram": null },
        { "stepNumber": 5, "description": "Convert the percentage.", "workingLatex": "63\\% = 0.63", "explanation": "Dividing $63$ by $100$ gives $0.63$.", "diagram": null },
        { "stepNumber": 6, "description": "Rewrite the second fraction over 10.", "workingLatex": "\\frac{7}{10} = 0.7", "explanation": "Seven tenths is $0.7$.", "diagram": null },
        { "stepNumber": 7, "description": "Write all to three decimal places.", "workingLatex": "0.625, \\; 0.600, \\; 0.630, \\; 0.700", "explanation": "Equal-length decimals are easy to compare.", "diagram": null },
        { "stepNumber": 8, "description": "Order the decimals largest first.", "workingLatex": "0.700 > 0.630 > 0.625 > 0.600", "explanation": "Comparing digit by digit gives the order from largest.", "diagram": null },
        { "stepNumber": 9, "description": "Match back to the original forms.", "workingLatex": "0.700 = \\frac{7}{10}, \\; 0.630 = 63\\%, \\; 0.625 = \\frac{5}{8}, \\; 0.600 = 0.6", "explanation": "Each decimal corresponds to one original value.", "diagram": null },
        { "stepNumber": 10, "description": "State the final answer.", "workingLatex": "\\frac{7}{10}, \\; 63\\%, \\; \\frac{5}{8}, \\; 0.6", "explanation": "This is the list from largest to smallest.", "diagram": null }
      ],
      "finalAnswer": "$\\frac{7}{10}, \\; 63\\%, \\; \\frac{5}{8}, \\; 0.6$"
    }
  },
  {
    "id": "gcse.number.fdp-equivalence.q053",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "FDP equivalence",
    "subtopicId": "gcse.number.fdp-equivalence",
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "value",
    "tags": ["fdp", "comparison", "context", "fraction to percentage"],
    "questionText": "In a test, Amir scored $\\frac{17}{20}$ and Beth scored $82\\%$. Who did better, and by how many percentage points?",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Decide on a common form.", "workingLatex": "\\text{convert Amir's score to a percentage}", "explanation": "Beth's score is a percentage, so writing Amir's score as a percentage lets us compare directly.", "diagram": null },
        { "stepNumber": 2, "description": "Aim for a denominator of 100.", "workingLatex": "\\frac{17}{20} = \\frac{?}{100}", "explanation": "A percentage is a fraction out of $100$.", "diagram": null },
        { "stepNumber": 3, "description": "Find the multiplier.", "workingLatex": "100 \\div 20 = 5", "explanation": "We multiply the denominator by $5$ to reach $100$.", "diagram": null },
        { "stepNumber": 4, "description": "Multiply top and bottom by 5.", "workingLatex": "\\frac{17}{20} = \\frac{85}{100}", "explanation": "Both parts are scaled by $5$.", "diagram": null },
        { "stepNumber": 5, "description": "Read off Amir's percentage.", "workingLatex": "\\frac{85}{100} = 85\\%", "explanation": "So Amir scored $85\\%$.", "diagram": null },
        { "stepNumber": 6, "description": "Compare the two percentages.", "workingLatex": "85\\% > 82\\%", "explanation": "Amir's percentage is higher, so he did better.", "diagram": null },
        { "stepNumber": 7, "description": "Find the difference.", "workingLatex": "85 - 82 = 3", "explanation": "Subtracting gives the gap in percentage points.", "diagram": null },
        { "stepNumber": 8, "description": "State the conclusion.", "workingLatex": "\\text{Amir, by } 3 \\text{ percentage points}", "explanation": "Amir did better by $3$ percentage points.", "diagram": null }
      ],
      "finalAnswer": "Amir did better, by $3$ percentage points"
    }
  },
  {
    "id": "gcse.number.fdp-equivalence.q054",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "FDP equivalence",
    "subtopicId": "gcse.number.fdp-equivalence",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "value",
    "tags": ["fdp", "conversion table", "all three forms"],
    "questionText": "Complete the equivalent forms for each value: (a) $\\frac{3}{5}$ as a decimal and a percentage; (b) $0.35$ as a fraction and a percentage; (c) $45\\%$ as a fraction and a decimal.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Start part (a).", "workingLatex": "\\frac{3}{5} = \\frac{6}{10}", "explanation": "Multiplying top and bottom by $2$ gives a denominator of $10$.", "diagram": null },
        { "stepNumber": 2, "description": "Read the decimal and percentage.", "workingLatex": "\\frac{6}{10} = 0.6 = 60\\%", "explanation": "Six tenths is $0.6$, which is $60\\%$.", "diagram": null },
        { "stepNumber": 3, "description": "Start part (b).", "workingLatex": "0.35 = \\frac{35}{100}", "explanation": "The decimal $0.35$ is thirty-five hundredths.", "diagram": null },
        { "stepNumber": 4, "description": "Simplify the fraction.", "workingLatex": "\\frac{35}{100} = \\frac{7}{20}", "explanation": "Dividing top and bottom by $5$ gives seven twentieths.", "diagram": null },
        { "stepNumber": 5, "description": "Read the percentage.", "workingLatex": "0.35 = 35\\%", "explanation": "Multiplying $0.35$ by $100$ gives $35\\%$.", "diagram": null },
        { "stepNumber": 6, "description": "Start part (c).", "workingLatex": "45\\% = \\frac{45}{100}", "explanation": "A percentage is a number out of $100$.", "diagram": null },
        { "stepNumber": 7, "description": "Simplify the fraction.", "workingLatex": "\\frac{45}{100} = \\frac{9}{20}", "explanation": "Dividing top and bottom by $5$ gives nine twentieths.", "diagram": null },
        { "stepNumber": 8, "description": "Read the decimal.", "workingLatex": "45\\% = 0.45", "explanation": "Dividing $45$ by $100$ gives $0.45$.", "diagram": null },
        { "stepNumber": 9, "description": "State all the answers.", "workingLatex": "(a)\\ 0.6, 60\\%; \\;\\; (b)\\ \\tfrac{7}{20}, 35\\%; \\;\\; (c)\\ \\tfrac{9}{20}, 0.45", "explanation": "Each value has been written in its two missing forms.", "diagram": null }
      ],
      "finalAnswer": "(a) $0.6$, $60\\%$; (b) $\\frac{7}{20}$, $35\\%$; (c) $\\frac{9}{20}$, $0.45$"
    }
  },
  {
    "id": "gcse.number.fdp-equivalence.q055",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "FDP equivalence",
    "subtopicId": "gcse.number.fdp-equivalence",
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "ordering",
    "tags": ["fdp", "comparison", "ordering", "equal values"],
    "questionText": "Write these in order of size, smallest first: $0.375, \\; \\frac{3}{8}, \\; 37\\%$. Comment on what you notice.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Choose a common form.", "workingLatex": "\\text{convert all to decimals}", "explanation": "Decimals allow a direct comparison.", "diagram": null },
        { "stepNumber": 2, "description": "The first value is already a decimal.", "workingLatex": "0.375", "explanation": "No conversion is needed for $0.375$.", "diagram": null },
        { "stepNumber": 3, "description": "Convert the fraction by dividing.", "workingLatex": "\\frac{3}{8} = 3 \\div 8", "explanation": "A fraction is the top divided by the bottom.", "diagram": null },
        { "stepNumber": 4, "description": "Carry out the division.", "workingLatex": "3 \\div 8 = 0.375", "explanation": "Dividing gives exactly $0.375$.", "diagram": null },
        { "stepNumber": 5, "description": "Convert the percentage.", "workingLatex": "37\\% = 0.37", "explanation": "Dividing $37$ by $100$ gives $0.37$.", "diagram": null },
        { "stepNumber": 6, "description": "List the decimals.", "workingLatex": "0.375, \\; 0.375, \\; 0.370", "explanation": "The first two values are identical; the percentage is slightly smaller.", "diagram": null },
        { "stepNumber": 7, "description": "Order the decimals.", "workingLatex": "0.370 < 0.375 = 0.375", "explanation": "The percentage is smallest; the decimal and the fraction are equal.", "diagram": null },
        { "stepNumber": 8, "description": "Comment on the result.", "workingLatex": "0.375 = \\frac{3}{8}", "explanation": "The decimal and the fraction are exactly the same value.", "diagram": null },
        { "stepNumber": 9, "description": "State the final answer.", "workingLatex": "37\\%, \\; \\text{then } 0.375 = \\frac{3}{8}", "explanation": "Smallest first: $37\\%$, then $0.375$ and $\\frac{3}{8}$ (which are equal).", "diagram": null }
      ],
      "finalAnswer": "$37\\%$, then $0.375 = \\frac{3}{8}$ (equal)"
    }
  },
  {
    "id": "gcse.number.fdp-equivalence.q056",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "FDP equivalence",
    "subtopicId": "gcse.number.fdp-equivalence",
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "value",
    "tags": ["fdp", "comparison", "context", "fraction to percentage"],
    "questionText": "Shop A offers '$\\frac{1}{3}$ off' and Shop B offers '$30\\%$ off' on the same item. Which shop gives the bigger discount? Show your working.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Decide on a common form.", "workingLatex": "\\text{convert } \\frac{1}{3} \\text{ to a percentage}", "explanation": "Shop B's discount is a percentage, so writing Shop A's discount as a percentage lets us compare.", "diagram": null },
        { "stepNumber": 2, "description": "Interpret the fraction as a division.", "workingLatex": "\\frac{1}{3} = 1 \\div 3", "explanation": "A fraction is the top divided by the bottom.", "diagram": null },
        { "stepNumber": 3, "description": "Carry out the division.", "workingLatex": "1 \\div 3 = 0.333\\ldots", "explanation": "One third is a recurring decimal, $0.3333\\ldots$", "diagram": null },
        { "stepNumber": 4, "description": "Convert to a percentage.", "workingLatex": "0.333\\ldots \\times 100 = 33.3\\ldots\\%", "explanation": "Multiplying by $100$ gives about $33.3\\%$.", "diagram": null },
        { "stepNumber": 5, "description": "Compare the two discounts.", "workingLatex": "33.3\\ldots\\% > 30\\%", "explanation": "One third is more than $30\\%$.", "diagram": null },
        { "stepNumber": 6, "description": "Estimate the difference.", "workingLatex": "33.3\\% - 30\\% = 3.3\\%", "explanation": "Shop A's discount is about $3.3$ percentage points larger.", "diagram": null },
        { "stepNumber": 7, "description": "State the conclusion.", "workingLatex": "\\text{Shop A gives the bigger discount}", "explanation": "Since $\\frac{1}{3} \\approx 33.3\\% > 30\\%$, Shop A is the better deal.", "diagram": null }
      ],
      "finalAnswer": "Shop A ($\\frac{1}{3} \\approx 33.3\\% > 30\\%$)"
    }
  },
  {
    "id": "gcse.number.fdp-equivalence.q057",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "FDP equivalence",
    "subtopicId": "gcse.number.fdp-equivalence",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "ordering",
    "tags": ["fdp", "ordering", "comparison", "five values"],
    "questionText": "Write these in order of size, smallest first: $0.5, \\; \\frac{2}{5}, \\; 48\\%, \\; \\frac{9}{20}, \\; 0.46$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Choose a common form.", "workingLatex": "\\text{convert all to decimals}", "explanation": "With five mixed values, decimals give the clearest comparison.", "diagram": null },
        { "stepNumber": 2, "description": "The first value is already a decimal.", "workingLatex": "0.5 = 0.50", "explanation": "Writing $0.5$ as $0.50$ helps line up the digits.", "diagram": null },
        { "stepNumber": 3, "description": "Convert the first fraction.", "workingLatex": "\\frac{2}{5} = \\frac{4}{10} = 0.40", "explanation": "Two fifths is four tenths, which is $0.40$.", "diagram": null },
        { "stepNumber": 4, "description": "Convert the percentage.", "workingLatex": "48\\% = 0.48", "explanation": "Dividing $48$ by $100$ gives $0.48$.", "diagram": null },
        { "stepNumber": 5, "description": "Convert the second fraction.", "workingLatex": "\\frac{9}{20} = \\frac{45}{100} = 0.45", "explanation": "Multiplying top and bottom by $5$ gives forty-five hundredths.", "diagram": null },
        { "stepNumber": 6, "description": "The last value is already a decimal.", "workingLatex": "0.46", "explanation": "No conversion is needed for $0.46$.", "diagram": null },
        { "stepNumber": 7, "description": "List all the decimals.", "workingLatex": "0.50, \\; 0.40, \\; 0.48, \\; 0.45, \\; 0.46", "explanation": "All five are now two-place decimals.", "diagram": null },
        { "stepNumber": 8, "description": "Order the decimals.", "workingLatex": "0.40 < 0.45 < 0.46 < 0.48 < 0.50", "explanation": "Comparing digit by digit gives the order from smallest.", "diagram": null },
        { "stepNumber": 9, "description": "Match back to the original forms.", "workingLatex": "0.40 = \\tfrac{2}{5}, \\; 0.45 = \\tfrac{9}{20}, \\; 0.46, \\; 0.48 = 48\\%, \\; 0.50 = 0.5", "explanation": "Each decimal corresponds to one of the original values.", "diagram": null },
        { "stepNumber": 10, "description": "State the final answer.", "workingLatex": "\\frac{2}{5}, \\; \\frac{9}{20}, \\; 0.46, \\; 48\\%, \\; 0.5", "explanation": "This is the list from smallest to largest.", "diagram": null }
      ],
      "finalAnswer": "$\\frac{2}{5}, \\; \\frac{9}{20}, \\; 0.46, \\; 48\\%, \\; 0.5$"
    }
  },
  {
    "id": "gcse.number.fdp-equivalence.q058",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "FDP equivalence",
    "subtopicId": "gcse.number.fdp-equivalence",
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "value",
    "tags": ["fdp", "fraction to decimal", "fraction to percentage", "equivalent fractions"],
    "questionText": "Write $\\frac{13}{40}$ as (a) a decimal and (b) a percentage.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Aim for a denominator of 1000.", "workingLatex": "\\frac{13}{40} = \\frac{?}{1000}", "explanation": "As $40$ does not divide $100$ evenly, we scale up to thousandths.", "diagram": null },
        { "stepNumber": 2, "description": "Find the multiplier.", "workingLatex": "1000 \\div 40 = 25", "explanation": "We multiply the denominator by $25$ to reach $1000$.", "diagram": null },
        { "stepNumber": 3, "description": "Multiply top and bottom by 25.", "workingLatex": "\\frac{13}{40} = \\frac{325}{1000}", "explanation": "Both parts are scaled by $25$.", "diagram": null },
        { "stepNumber": 4, "description": "Read off the decimal.", "workingLatex": "\\frac{325}{1000} = 0.325", "explanation": "Three hundred and twenty-five thousandths is $0.325$.", "diagram": null },
        { "stepNumber": 5, "description": "Convert to a percentage.", "workingLatex": "0.325 \\times 100 = 32.5", "explanation": "Multiplying by $100$ moves the point two places right.", "diagram": null },
        { "stepNumber": 6, "description": "Attach the percent sign.", "workingLatex": "32.5\\%", "explanation": "The result is a percentage.", "diagram": null },
        { "stepNumber": 7, "description": "State both answers.", "workingLatex": "\\frac{13}{40} = 0.325 = 32.5\\%", "explanation": "So thirteen fortieths is $0.325$ or $32.5\\%$.", "diagram": null }
      ],
      "finalAnswer": "(a) $0.325$; (b) $32.5\\%$"
    }
  },
  {
    "id": "gcse.number.fdp-equivalence.q059",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "FDP equivalence",
    "subtopicId": "gcse.number.fdp-equivalence",
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "ordering",
    "tags": ["fdp", "ordering", "context", "comparison"],
    "questionText": "Three students scored $\\frac{4}{5}$, $78\\%$ and $0.82$ in a test. Rank the scores from best to worst.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Choose a common form.", "workingLatex": "\\text{convert all to decimals}", "explanation": "The scores are in three different forms, so decimals make a fair comparison.", "diagram": null },
        { "stepNumber": 2, "description": "Convert the fraction.", "workingLatex": "\\frac{4}{5} = \\frac{8}{10} = 0.8", "explanation": "Four fifths is eight tenths, which is $0.8$.", "diagram": null },
        { "stepNumber": 3, "description": "Convert the percentage.", "workingLatex": "78\\% = 0.78", "explanation": "Dividing $78$ by $100$ gives $0.78$.", "diagram": null },
        { "stepNumber": 4, "description": "The last score is already a decimal.", "workingLatex": "0.82", "explanation": "No conversion is needed for $0.82$.", "diagram": null },
        { "stepNumber": 5, "description": "Write all to two decimal places.", "workingLatex": "0.80, \\; 0.78, \\; 0.82", "explanation": "Equal-length decimals are easy to compare.", "diagram": null },
        { "stepNumber": 6, "description": "Order the decimals largest first.", "workingLatex": "0.82 > 0.80 > 0.78", "explanation": "The best score is the largest value.", "diagram": null },
        { "stepNumber": 7, "description": "Match back to the original forms.", "workingLatex": "0.82, \\; \\frac{4}{5}, \\; 78\\%", "explanation": "Each decimal corresponds to one student's score.", "diagram": null },
        { "stepNumber": 8, "description": "State the final answer.", "workingLatex": "0.82, \\; \\frac{4}{5}, \\; 78\\%", "explanation": "This is the ranking from best to worst.", "diagram": null }
      ],
      "finalAnswer": "$0.82, \\; \\frac{4}{5}, \\; 78\\%$"
    }
  },
  {
    "id": "gcse.number.fdp-equivalence.q060",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "FDP equivalence",
    "subtopicId": "gcse.number.fdp-equivalence",
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "value",
    "tags": ["fdp", "mixed number", "decimal", "percentage over 100"],
    "questionText": "Write $2\\frac{3}{4}$ as (a) a decimal and (b) a percentage.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Separate the whole and fraction parts.", "workingLatex": "2\\frac{3}{4} = 2 + \\frac{3}{4}", "explanation": "We convert the fraction part and then add the whole.", "diagram": null },
        { "stepNumber": 2, "description": "Rewrite the fraction over 100.", "workingLatex": "\\frac{3}{4} = \\frac{75}{100}", "explanation": "Multiplying top and bottom by $25$ gives a denominator of $100$.", "diagram": null },
        { "stepNumber": 3, "description": "Read the fraction part as a decimal.", "workingLatex": "\\frac{75}{100} = 0.75", "explanation": "Seventy-five hundredths is $0.75$.", "diagram": null },
        { "stepNumber": 4, "description": "Add the whole part.", "workingLatex": "2 + 0.75 = 2.75", "explanation": "So the decimal is $2.75$.", "diagram": null },
        { "stepNumber": 5, "description": "Convert the decimal to a percentage.", "workingLatex": "2.75 \\times 100 = 275", "explanation": "Multiplying by $100$ moves the point two places right.", "diagram": null },
        { "stepNumber": 6, "description": "Attach the percent sign.", "workingLatex": "275\\%", "explanation": "Since the value is more than $2$, the percentage is over $200\\%$.", "diagram": null },
        { "stepNumber": 7, "description": "State both answers.", "workingLatex": "2\\frac{3}{4} = 2.75 = 275\\%", "explanation": "So two and three quarters is $2.75$ or $275\\%$.", "diagram": null }
      ],
      "finalAnswer": "(a) $2.75$; (b) $275\\%$"
    }
  },
  {
    "id": "gcse.number.fdp-equivalence.q061",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "FDP equivalence",
    "subtopicId": "gcse.number.fdp-equivalence",
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "value",
    "tags": ["fdp", "comparison", "closest value"],
    "questionText": "Which of $0.45$, $48\\%$ and $\\frac{11}{20}$ is closest to $\\frac{1}{2}$? Show your working.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Write the target as a decimal.", "workingLatex": "\\frac{1}{2} = 0.50", "explanation": "We compare each value to $0.50$.", "diagram": null },
        { "stepNumber": 2, "description": "The first value is already a decimal.", "workingLatex": "0.45", "explanation": "No conversion is needed for $0.45$.", "diagram": null },
        { "stepNumber": 3, "description": "Convert the percentage.", "workingLatex": "48\\% = 0.48", "explanation": "Dividing $48$ by $100$ gives $0.48$.", "diagram": null },
        { "stepNumber": 4, "description": "Convert the fraction.", "workingLatex": "\\frac{11}{20} = \\frac{55}{100} = 0.55", "explanation": "Multiplying top and bottom by $5$ gives fifty-five hundredths.", "diagram": null },
        { "stepNumber": 5, "description": "Find the distance for the first value.", "workingLatex": "|0.50 - 0.45| = 0.05", "explanation": "The gap between $0.45$ and $0.50$ is $0.05$.", "diagram": null },
        { "stepNumber": 6, "description": "Find the distance for the second value.", "workingLatex": "|0.50 - 0.48| = 0.02", "explanation": "The gap between $0.48$ and $0.50$ is $0.02$.", "diagram": null },
        { "stepNumber": 7, "description": "Find the distance for the third value.", "workingLatex": "|0.50 - 0.55| = 0.05", "explanation": "The gap between $0.55$ and $0.50$ is $0.05$.", "diagram": null },
        { "stepNumber": 8, "description": "Compare the distances.", "workingLatex": "0.02 < 0.05", "explanation": "The smallest gap belongs to $0.48$.", "diagram": null },
        { "stepNumber": 9, "description": "State the conclusion.", "workingLatex": "48\\% \\text{ is closest to } \\tfrac{1}{2}", "explanation": "So $48\\%$ is closest to one half.", "diagram": null }
      ],
      "finalAnswer": "$48\\%$ (only $0.02$ away from $\\frac{1}{2}$)"
    }
  },
  {
    "id": "gcse.number.fdp-equivalence.q062",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "FDP equivalence",
    "subtopicId": "gcse.number.fdp-equivalence",
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "ordering",
    "tags": ["fdp", "ordering", "comparison", "four values"],
    "questionText": "Write these in order of size, smallest first: $0.08, \\; \\frac{1}{8}, \\; 12\\%, \\; \\frac{1}{10}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Choose a common form.", "workingLatex": "\\text{convert all to decimals}", "explanation": "Decimals give the clearest comparison for small values.", "diagram": null },
        { "stepNumber": 2, "description": "The first value is already a decimal.", "workingLatex": "0.08 = 0.080", "explanation": "Writing extra zeros helps line up the digits.", "diagram": null },
        { "stepNumber": 3, "description": "Convert the first fraction.", "workingLatex": "\\frac{1}{8} = 1 \\div 8 = 0.125", "explanation": "Dividing $1$ by $8$ gives $0.125$.", "diagram": null },
        { "stepNumber": 4, "description": "Convert the percentage.", "workingLatex": "12\\% = 0.12", "explanation": "Dividing $12$ by $100$ gives $0.12$.", "diagram": null },
        { "stepNumber": 5, "description": "Convert the second fraction.", "workingLatex": "\\frac{1}{10} = 0.1", "explanation": "One tenth is $0.1$.", "diagram": null },
        { "stepNumber": 6, "description": "Write all to three decimal places.", "workingLatex": "0.080, \\; 0.125, \\; 0.120, \\; 0.100", "explanation": "Equal-length decimals are easy to compare.", "diagram": null },
        { "stepNumber": 7, "description": "Order the decimals.", "workingLatex": "0.080 < 0.100 < 0.120 < 0.125", "explanation": "Comparing digit by digit gives the order from smallest.", "diagram": null },
        { "stepNumber": 8, "description": "Match back to the original forms.", "workingLatex": "0.080 = 0.08, \\; 0.100 = \\tfrac{1}{10}, \\; 0.120 = 12\\%, \\; 0.125 = \\tfrac{1}{8}", "explanation": "Each decimal corresponds to one original value.", "diagram": null },
        { "stepNumber": 9, "description": "State the final answer.", "workingLatex": "0.08, \\; \\frac{1}{10}, \\; 12\\%, \\; \\frac{1}{8}", "explanation": "This is the list from smallest to largest.", "diagram": null }
      ],
      "finalAnswer": "$0.08, \\; \\frac{1}{10}, \\; 12\\%, \\; \\frac{1}{8}$"
    }
  },
  {
    "id": "gcse.number.fdp-equivalence.q063",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "FDP equivalence",
    "subtopicId": "gcse.number.fdp-equivalence",
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "value",
    "tags": ["fdp", "decimal to fraction", "decimal to percentage", "simplifying"],
    "questionText": "Write $0.625$ as (a) a fraction in its simplest form and (b) a percentage.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Read the place value.", "workingLatex": "0.625 = \\frac{625}{1000}", "explanation": "The last digit is in the thousandths column, so the denominator is $1000$.", "diagram": null },
        { "stepNumber": 2, "description": "Divide top and bottom by 25.", "workingLatex": "\\frac{625}{1000} = \\frac{25}{40}", "explanation": "Both $625$ and $1000$ divide by $25$.", "diagram": null },
        { "stepNumber": 3, "description": "Divide again by 5.", "workingLatex": "\\frac{25}{40} = \\frac{5}{8}", "explanation": "Both $25$ and $40$ divide by $5$.", "diagram": null },
        { "stepNumber": 4, "description": "Check it is fully simplified.", "workingLatex": "\\gcd(5,8) = 1", "explanation": "Five and eight share no common factor.", "diagram": null },
        { "stepNumber": 5, "description": "State the fraction.", "workingLatex": "0.625 = \\frac{5}{8}", "explanation": "So the fraction is five eighths.", "diagram": null },
        { "stepNumber": 6, "description": "Convert the decimal to a percentage.", "workingLatex": "0.625 \\times 100 = 62.5", "explanation": "Multiplying by $100$ moves the point two places right.", "diagram": null },
        { "stepNumber": 7, "description": "State both answers.", "workingLatex": "0.625 = \\frac{5}{8} = 62.5\\%", "explanation": "So $0.625$ is five eighths or $62.5\\%$.", "diagram": null }
      ],
      "finalAnswer": "(a) $\\frac{5}{8}$; (b) $62.5\\%$"
    }
  },
  {
    "id": "gcse.number.fdp-equivalence.q064",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "FDP equivalence",
    "subtopicId": "gcse.number.fdp-equivalence",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "value",
    "tags": ["fdp", "all three forms", "comparison", "context"],
    "questionText": "A phone battery is at $\\frac{5}{8}$ charge. (a) Write this as a decimal and a percentage. (b) Is the battery more or less than $60\\%$ charged?",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Interpret the fraction as a division.", "workingLatex": "\\frac{5}{8} = 5 \\div 8", "explanation": "A fraction is the top divided by the bottom.", "diagram": null },
        { "stepNumber": 2, "description": "Divide step by step.", "workingLatex": "50 \\div 8 = 6 \\text{ r } 2", "explanation": "The first decimal digit is $6$ with remainder $2$.", "diagram": null },
        { "stepNumber": 3, "description": "Continue the division.", "workingLatex": "20 \\div 8 = 2 \\text{ r } 4", "explanation": "The next digit is $2$ with remainder $4$.", "diagram": null },
        { "stepNumber": 4, "description": "Finish the division.", "workingLatex": "40 \\div 8 = 5", "explanation": "The last step divides exactly, giving $5$.", "diagram": null },
        { "stepNumber": 5, "description": "State the decimal.", "workingLatex": "\\frac{5}{8} = 0.625", "explanation": "So the decimal is $0.625$.", "diagram": null },
        { "stepNumber": 6, "description": "Convert to a percentage.", "workingLatex": "0.625 \\times 100 = 62.5\\%", "explanation": "Multiplying by $100$ gives $62.5\\%$.", "diagram": null },
        { "stepNumber": 7, "description": "Compare with 60%.", "workingLatex": "62.5\\% > 60\\%", "explanation": "The charge percentage is larger than $60\\%$.", "diagram": null },
        { "stepNumber": 8, "description": "State the conclusion.", "workingLatex": "0.625 = 62.5\\% > 60\\%", "explanation": "So the battery is more than $60\\%$ charged.", "diagram": null }
      ],
      "finalAnswer": "(a) $0.625$, $62.5\\%$; (b) more than $60\\%$"
    }
  },
  {
    "id": "gcse.number.fdp-equivalence.q065",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "FDP equivalence",
    "subtopicId": "gcse.number.fdp-equivalence",
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "value",
    "tags": ["fdp", "comparison", "context", "fraction to percentage"],
    "questionText": "A snack contains a fraction $\\frac{3}{8}$ of its weight as fat. A guideline says fat should be at most $40\\%$ of the weight. Does the snack meet the guideline? Show your working.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Decide on a common form.", "workingLatex": "\\text{convert } \\frac{3}{8} \\text{ to a percentage}", "explanation": "The guideline is a percentage, so writing the fat content as a percentage lets us compare.", "diagram": null },
        { "stepNumber": 2, "description": "Interpret the fraction as a division.", "workingLatex": "\\frac{3}{8} = 3 \\div 8", "explanation": "A fraction is the top divided by the bottom.", "diagram": null },
        { "stepNumber": 3, "description": "Carry out the division.", "workingLatex": "3 \\div 8 = 0.375", "explanation": "Dividing gives $0.375$.", "diagram": null },
        { "stepNumber": 4, "description": "Convert to a percentage.", "workingLatex": "0.375 \\times 100 = 37.5\\%", "explanation": "Multiplying by $100$ gives $37.5\\%$.", "diagram": null },
        { "stepNumber": 5, "description": "Compare with the guideline.", "workingLatex": "37.5\\% < 40\\%", "explanation": "The fat content is less than the maximum allowed.", "diagram": null },
        { "stepNumber": 6, "description": "Find the margin.", "workingLatex": "40\\% - 37.5\\% = 2.5\\%", "explanation": "The snack is $2.5$ percentage points under the limit.", "diagram": null },
        { "stepNumber": 7, "description": "State the conclusion.", "workingLatex": "\\text{Yes, it meets the guideline}", "explanation": "Since $\\frac{3}{8} = 37.5\\% < 40\\%$, the snack meets the guideline.", "diagram": null }
      ],
      "finalAnswer": "Yes ($\\frac{3}{8} = 37.5\\% < 40\\%$)"
    }
  },
  {
    "id": "gcse.number.fdp-equivalence.q066",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "FDP equivalence",
    "subtopicId": "gcse.number.fdp-equivalence",
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "ordering",
    "tags": ["fdp", "ordering", "descending", "four values"],
    "questionText": "Write these in order of size, largest first: $0.92, \\; \\frac{7}{8}, \\; 88\\%, \\; \\frac{9}{10}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Choose a common form.", "workingLatex": "\\text{convert all to decimals}", "explanation": "Decimals give a fair comparison of all four values.", "diagram": null },
        { "stepNumber": 2, "description": "The first value is already a decimal.", "workingLatex": "0.92 = 0.920", "explanation": "Writing extra zeros helps line up the digits.", "diagram": null },
        { "stepNumber": 3, "description": "Convert the first fraction.", "workingLatex": "\\frac{7}{8} = 7 \\div 8 = 0.875", "explanation": "Dividing $7$ by $8$ gives $0.875$.", "diagram": null },
        { "stepNumber": 4, "description": "Convert the percentage.", "workingLatex": "88\\% = 0.88", "explanation": "Dividing $88$ by $100$ gives $0.88$.", "diagram": null },
        { "stepNumber": 5, "description": "Convert the second fraction.", "workingLatex": "\\frac{9}{10} = 0.9", "explanation": "Nine tenths is $0.9$.", "diagram": null },
        { "stepNumber": 6, "description": "Write all to three decimal places.", "workingLatex": "0.920, \\; 0.875, \\; 0.880, \\; 0.900", "explanation": "Equal-length decimals are easy to compare.", "diagram": null },
        { "stepNumber": 7, "description": "Order the decimals largest first.", "workingLatex": "0.920 > 0.900 > 0.880 > 0.875", "explanation": "Comparing digit by digit gives the order from largest.", "diagram": null },
        { "stepNumber": 8, "description": "Match back to the original forms.", "workingLatex": "0.920 = 0.92, \\; 0.900 = \\tfrac{9}{10}, \\; 0.880 = 88\\%, \\; 0.875 = \\tfrac{7}{8}", "explanation": "Each decimal corresponds to one original value.", "diagram": null },
        { "stepNumber": 9, "description": "State the final answer.", "workingLatex": "0.92, \\; \\frac{9}{10}, \\; 88\\%, \\; \\frac{7}{8}", "explanation": "This is the list from largest to smallest.", "diagram": null }
      ],
      "finalAnswer": "$0.92, \\; \\frac{9}{10}, \\; 88\\%, \\; \\frac{7}{8}$"
    }
  },
  {
    "id": "gcse.number.fdp-equivalence.q067",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "FDP equivalence",
    "subtopicId": "gcse.number.fdp-equivalence",
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "value",
    "tags": ["fdp", "decimal to fraction", "decimal to percentage", "simplifying"],
    "questionText": "Write $0.16$ as (a) a fraction in its simplest form and (b) a percentage.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Read the place value.", "workingLatex": "0.16 = \\frac{16}{100}", "explanation": "The last digit is in the hundredths column, so the denominator is $100$.", "diagram": null },
        { "stepNumber": 2, "description": "Find the common factor.", "workingLatex": "\\gcd(16,100) = 4", "explanation": "Both $16$ and $100$ divide by $4$.", "diagram": null },
        { "stepNumber": 3, "description": "Simplify.", "workingLatex": "\\frac{16}{100} = \\frac{4}{25}", "explanation": "Dividing top and bottom by $4$ gives four twenty-fifths.", "diagram": null },
        { "stepNumber": 4, "description": "Check it is fully simplified.", "workingLatex": "\\gcd(4,25) = 1", "explanation": "Four and twenty-five share no common factor.", "diagram": null },
        { "stepNumber": 5, "description": "State the fraction.", "workingLatex": "0.16 = \\frac{4}{25}", "explanation": "So the fraction is four twenty-fifths.", "diagram": null },
        { "stepNumber": 6, "description": "Convert the decimal to a percentage.", "workingLatex": "0.16 \\times 100 = 16", "explanation": "Multiplying by $100$ moves the point two places right.", "diagram": null },
        { "stepNumber": 7, "description": "State both answers.", "workingLatex": "0.16 = \\frac{4}{25} = 16\\%", "explanation": "So $0.16$ is four twenty-fifths or $16\\%$.", "diagram": null }
      ],
      "finalAnswer": "(a) $\\frac{4}{25}$; (b) $16\\%$"
    }
  },
  {
    "id": "gcse.number.fdp-equivalence.q068",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "FDP equivalence",
    "subtopicId": "gcse.number.fdp-equivalence",
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "value",
    "tags": ["fdp", "comparison", "context", "fraction to percentage"],
    "questionText": "One savings account pays interest of $\\frac{1}{25}$ of the balance each year. Another pays $3\\%$ each year. Which account pays more interest? Show your working.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Decide on a common form.", "workingLatex": "\\text{convert } \\frac{1}{25} \\text{ to a percentage}", "explanation": "One rate is a percentage, so writing both as percentages allows comparison.", "diagram": null },
        { "stepNumber": 2, "description": "Aim for a denominator of 100.", "workingLatex": "\\frac{1}{25} = \\frac{?}{100}", "explanation": "A percentage is a fraction out of $100$.", "diagram": null },
        { "stepNumber": 3, "description": "Find the multiplier.", "workingLatex": "100 \\div 25 = 4", "explanation": "We multiply the denominator by $4$ to reach $100$.", "diagram": null },
        { "stepNumber": 4, "description": "Multiply top and bottom by 4.", "workingLatex": "\\frac{1}{25} = \\frac{4}{100}", "explanation": "Both parts are scaled by $4$.", "diagram": null },
        { "stepNumber": 5, "description": "Read off the percentage.", "workingLatex": "\\frac{4}{100} = 4\\%", "explanation": "So the first account pays $4\\%$.", "diagram": null },
        { "stepNumber": 6, "description": "Compare the two rates.", "workingLatex": "4\\% > 3\\%", "explanation": "Four percent is more than three percent.", "diagram": null },
        { "stepNumber": 7, "description": "State the conclusion.", "workingLatex": "\\tfrac{1}{25} = 4\\% > 3\\%", "explanation": "So the first account (paying $\\frac{1}{25}$) gives more interest.", "diagram": null }
      ],
      "finalAnswer": "The first account ($\\frac{1}{25} = 4\\% > 3\\%$)"
    }
  },
  {
    "id": "gcse.number.fdp-equivalence.q069",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "FDP equivalence",
    "subtopicId": "gcse.number.fdp-equivalence",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "ordering",
    "tags": ["fdp", "ordering", "values over 1", "mixed numbers"],
    "questionText": "Write these in order of size, smallest first: $1.3, \\; \\frac{5}{4}, \\; 128\\%, \\; 1\\frac{1}{5}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Choose a common form.", "workingLatex": "\\text{convert all to decimals}", "explanation": "These values are all greater than $1$; decimals let us compare them fairly.", "diagram": null },
        { "stepNumber": 2, "description": "The first value is already a decimal.", "workingLatex": "1.3 = 1.30", "explanation": "Writing $1.3$ as $1.30$ helps line up the digits.", "diagram": null },
        { "stepNumber": 3, "description": "Convert the improper fraction.", "workingLatex": "\\frac{5}{4} = 1.25", "explanation": "Five quarters is one and a quarter, which is $1.25$.", "diagram": null },
        { "stepNumber": 4, "description": "Convert the percentage.", "workingLatex": "128\\% = 1.28", "explanation": "Dividing $128$ by $100$ gives $1.28$.", "diagram": null },
        { "stepNumber": 5, "description": "Convert the mixed number.", "workingLatex": "1\\frac{1}{5} = 1.2", "explanation": "One fifth is $0.2$, so the mixed number is $1.2$.", "diagram": null },
        { "stepNumber": 6, "description": "Write all to two decimal places.", "workingLatex": "1.30, \\; 1.25, \\; 1.28, \\; 1.20", "explanation": "Equal-length decimals are easy to compare.", "diagram": null },
        { "stepNumber": 7, "description": "Order the decimals.", "workingLatex": "1.20 < 1.25 < 1.28 < 1.30", "explanation": "Comparing digit by digit gives the order from smallest.", "diagram": null },
        { "stepNumber": 8, "description": "Match back to the original forms.", "workingLatex": "1.20 = 1\\tfrac{1}{5}, \\; 1.25 = \\tfrac{5}{4}, \\; 1.28 = 128\\%, \\; 1.30 = 1.3", "explanation": "Each decimal corresponds to one original value.", "diagram": null },
        { "stepNumber": 9, "description": "State the final answer.", "workingLatex": "1\\frac{1}{5}, \\; \\frac{5}{4}, \\; 128\\%, \\; 1.3", "explanation": "This is the list from smallest to largest.", "diagram": null }
      ],
      "finalAnswer": "$1\\frac{1}{5}, \\; \\frac{5}{4}, \\; 128\\%, \\; 1.3$"
    }
  },
  {
    "id": "gcse.number.fdp-equivalence.q070",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "FDP equivalence",
    "subtopicId": "gcse.number.fdp-equivalence",
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "value",
    "tags": ["fdp", "comparison", "context", "ordering"],
    "questionText": "In a survey, $0.35$ of people chose maths, $\\frac{2}{5}$ chose English and $38\\%$ chose science as their favourite subject. Which subject was the most popular?",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Choose a common form.", "workingLatex": "\\text{convert all to decimals}", "explanation": "The three proportions are in different forms, so decimals let us compare them.", "diagram": null },
        { "stepNumber": 2, "description": "Maths is already a decimal.", "workingLatex": "\\text{maths} = 0.35", "explanation": "No conversion is needed for $0.35$.", "diagram": null },
        { "stepNumber": 3, "description": "Convert the English fraction.", "workingLatex": "\\frac{2}{5} = \\frac{4}{10} = 0.4", "explanation": "Two fifths is four tenths, which is $0.4$.", "diagram": null },
        { "stepNumber": 4, "description": "Convert the science percentage.", "workingLatex": "38\\% = 0.38", "explanation": "Dividing $38$ by $100$ gives $0.38$.", "diagram": null },
        { "stepNumber": 5, "description": "List the decimals.", "workingLatex": "0.35, \\; 0.40, \\; 0.38", "explanation": "All three are now two-place decimals.", "diagram": null },
        { "stepNumber": 6, "description": "Find the largest.", "workingLatex": "0.40 > 0.38 > 0.35", "explanation": "English has the largest proportion.", "diagram": null },
        { "stepNumber": 7, "description": "State the conclusion.", "workingLatex": "\\text{English } (0.4) \\text{ is most popular}", "explanation": "So English was the most popular subject.", "diagram": null }
      ],
      "finalAnswer": "English ($\\frac{2}{5} = 0.4$, the largest)"
    }
  }
];
