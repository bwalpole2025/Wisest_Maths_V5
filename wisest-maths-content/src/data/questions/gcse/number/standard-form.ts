import { Question } from "@/lib/types";

export const questions: Question[] = [
  {
    "id": "gcse.number.standard-form.q001",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Standard form",
    "subtopicId": "gcse.number.standard-form",
    "difficulty": "Easy",
    "marks": 1,
    "answerType": "standard-form",
    "tags": ["standard form", "large numbers", "conversion", "positive power"],
    "questionText": "Write $4000$ in standard form.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall what standard form means.", "workingLatex": "A \\times 10^{n}, \\quad 1 \\le A < 10", "explanation": "Standard form writes a number as a single digit-sized value $A$ multiplied by a power of ten, which keeps very large or very small numbers compact.", "diagram": null },
        { "stepNumber": 2, "description": "Choose $A$ between $1$ and $10$.", "workingLatex": "A = 4", "explanation": "We slide the decimal point until just one non-zero digit sits in front of it, giving $4$.", "diagram": null },
        { "stepNumber": 3, "description": "Rewrite the number as a product.", "workingLatex": "4000 = 4 \\times 1000", "explanation": "Splitting $4000$ into $4$ and $1000$ separates the leading digit from the place value it carries.", "diagram": null },
        { "stepNumber": 4, "description": "Write $1000$ as a power of ten.", "workingLatex": "1000 = 10^{3}", "explanation": "There are three zeros in $1000$, and each zero corresponds to one factor of ten.", "diagram": null },
        { "stepNumber": 5, "description": "Combine into standard form.", "workingLatex": "4000 = 4 \\times 10^{3}", "explanation": "Putting the two parts together gives the number in the required $A \\times 10^{n}$ shape.", "diagram": null },
        { "stepNumber": 6, "description": "State the final answer.", "workingLatex": "4 \\times 10^{3}", "explanation": "The power is positive because $4000$ is larger than the leading digit $4$.", "diagram": null }
      ],
      "finalAnswer": "$4 \\times 10^{3}$"
    }
  },
  {
    "id": "gcse.number.standard-form.q002",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Standard form",
    "subtopicId": "gcse.number.standard-form",
    "difficulty": "Easy",
    "marks": 1,
    "answerType": "standard-form",
    "tags": ["standard form", "large numbers", "conversion", "positive power"],
    "questionText": "Write $56\\,000$ in standard form.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall the form required.", "workingLatex": "A \\times 10^{n}, \\quad 1 \\le A < 10", "explanation": "The value $A$ must have exactly one non-zero digit before the decimal point.", "diagram": null },
        { "stepNumber": 2, "description": "Place the decimal point to find $A$.", "workingLatex": "5.6", "explanation": "Starting from $56\\,000$, we move the point so that only the $5$ sits in front of it, giving $5.6$.", "diagram": null },
        { "stepNumber": 3, "description": "Count how many places the point moved.", "workingLatex": "56000. \\to 5.6000", "explanation": "The decimal point shifted four places to the left to get from $56\\,000$ to $5.6$.", "diagram": null },
        { "stepNumber": 4, "description": "Decide the power of ten.", "workingLatex": "n = 4", "explanation": "Moving left four places to shrink the number means we multiply back by $10^{4}$ to restore its size.", "diagram": null },
        { "stepNumber": 5, "description": "Write in standard form.", "workingLatex": "56\\,000 = 5.6 \\times 10^{4}", "explanation": "The positive power confirms this is a large number.", "diagram": null },
        { "stepNumber": 6, "description": "State the final answer.", "workingLatex": "5.6 \\times 10^{4}", "explanation": "A quick check: $5.6 \\times 10\\,000 = 56\\,000$, which matches.", "diagram": null }
      ],
      "finalAnswer": "$5.6 \\times 10^{4}$"
    }
  },
  {
    "id": "gcse.number.standard-form.q003",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Standard form",
    "subtopicId": "gcse.number.standard-form",
    "difficulty": "Easy",
    "marks": 1,
    "answerType": "standard-form",
    "tags": ["standard form", "large numbers", "conversion", "positive power"],
    "questionText": "Write $720\\,000$ in standard form.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall the form required.", "workingLatex": "A \\times 10^{n}, \\quad 1 \\le A < 10", "explanation": "We are aiming for one non-zero digit in front of the decimal point.", "diagram": null },
        { "stepNumber": 2, "description": "Position the decimal point.", "workingLatex": "7.2", "explanation": "Only the leading $7$ should sit before the point, so $720\\,000$ becomes $7.2$ (the final zeros are dropped as they add nothing after the point).", "diagram": null },
        { "stepNumber": 3, "description": "Count the places moved.", "workingLatex": "720000. \\to 7.20000", "explanation": "The point moves five places left to turn $720\\,000$ into $7.2$.", "diagram": null },
        { "stepNumber": 4, "description": "Choose the power.", "workingLatex": "n = 5", "explanation": "Five leftward moves means the restoring factor is $10^{5}$.", "diagram": null },
        { "stepNumber": 5, "description": "Combine into standard form.", "workingLatex": "720\\,000 = 7.2 \\times 10^{5}", "explanation": "The result is in the required $A \\times 10^{n}$ shape.", "diagram": null },
        { "stepNumber": 6, "description": "State the final answer.", "workingLatex": "7.2 \\times 10^{5}", "explanation": "Check: $7.2 \\times 100\\,000 = 720\\,000$.", "diagram": null }
      ],
      "finalAnswer": "$7.2 \\times 10^{5}$"
    }
  },
  {
    "id": "gcse.number.standard-form.q004",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Standard form",
    "subtopicId": "gcse.number.standard-form",
    "difficulty": "Easy",
    "marks": 1,
    "answerType": "standard-form",
    "tags": ["standard form", "large numbers", "conversion", "positive power"],
    "questionText": "Write $3\\,500\\,000$ in standard form.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall the form required.", "workingLatex": "A \\times 10^{n}, \\quad 1 \\le A < 10", "explanation": "The leading value $A$ must be at least $1$ but less than $10$.", "diagram": null },
        { "stepNumber": 2, "description": "Find $A$.", "workingLatex": "A = 3.5", "explanation": "Placing the decimal after the first digit gives $3.5$; the trailing zeros are not needed.", "diagram": null },
        { "stepNumber": 3, "description": "Count the places moved.", "workingLatex": "3500000. \\to 3.500000", "explanation": "The decimal point moves six places to the left.", "diagram": null },
        { "stepNumber": 4, "description": "Choose the power.", "workingLatex": "n = 6", "explanation": "Six leftward moves give a power of $10^{6}$.", "diagram": null },
        { "stepNumber": 5, "description": "Write in standard form.", "workingLatex": "3\\,500\\,000 = 3.5 \\times 10^{6}", "explanation": "The large original number produces a positive power.", "diagram": null },
        { "stepNumber": 6, "description": "State the final answer.", "workingLatex": "3.5 \\times 10^{6}", "explanation": "Check: $3.5 \\times 1\\,000\\,000 = 3\\,500\\,000$.", "diagram": null }
      ],
      "finalAnswer": "$3.5 \\times 10^{6}$"
    }
  },
  {
    "id": "gcse.number.standard-form.q005",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Standard form",
    "subtopicId": "gcse.number.standard-form",
    "difficulty": "Easy",
    "marks": 1,
    "answerType": "standard-form",
    "tags": ["standard form", "small numbers", "conversion", "negative power"],
    "questionText": "Write $0.0007$ in standard form.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall the form required.", "workingLatex": "A \\times 10^{n}, \\quad 1 \\le A < 10", "explanation": "Even for tiny numbers, $A$ must be a single-digit-sized value between $1$ and $10$.", "diagram": null },
        { "stepNumber": 2, "description": "Find $A$.", "workingLatex": "A = 7", "explanation": "The only non-zero digit is $7$, so the value in front of the point becomes $7$.", "diagram": null },
        { "stepNumber": 3, "description": "Count how far the point moves.", "workingLatex": "0.0007 \\to 7.0", "explanation": "The decimal point moves four places to the right to sit just after the $7$.", "diagram": null },
        { "stepNumber": 4, "description": "Decide the sign of the power.", "workingLatex": "n = -4", "explanation": "Moving right to enlarge the number means the original was small, so the power is negative.", "diagram": null },
        { "stepNumber": 5, "description": "Write in standard form.", "workingLatex": "0.0007 = 7 \\times 10^{-4}", "explanation": "The negative power records how small the number is.", "diagram": null },
        { "stepNumber": 6, "description": "State the final answer.", "workingLatex": "7 \\times 10^{-4}", "explanation": "Check: $7 \\div 10\\,000 = 0.0007$.", "diagram": null }
      ],
      "finalAnswer": "$7 \\times 10^{-4}$"
    }
  },
  {
    "id": "gcse.number.standard-form.q006",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Standard form",
    "subtopicId": "gcse.number.standard-form",
    "difficulty": "Easy",
    "marks": 1,
    "answerType": "standard-form",
    "tags": ["standard form", "small numbers", "conversion", "negative power"],
    "questionText": "Write $0.00042$ in standard form.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall the form required.", "workingLatex": "A \\times 10^{n}, \\quad 1 \\le A < 10", "explanation": "We need exactly one non-zero digit before the decimal point.", "diagram": null },
        { "stepNumber": 2, "description": "Find $A$.", "workingLatex": "A = 4.2", "explanation": "Reading the non-zero digits $4$ and $2$ and placing the point after the first gives $4.2$.", "diagram": null },
        { "stepNumber": 3, "description": "Count the places moved.", "workingLatex": "0.00042 \\to 4.2", "explanation": "The point moves four places to the right to reach $4.2$.", "diagram": null },
        { "stepNumber": 4, "description": "Decide the power.", "workingLatex": "n = -4", "explanation": "A small number needs a negative power, and we moved four places, so $n = -4$.", "diagram": null },
        { "stepNumber": 5, "description": "Write in standard form.", "workingLatex": "0.00042 = 4.2 \\times 10^{-4}", "explanation": "This is now in the required shape.", "diagram": null },
        { "stepNumber": 6, "description": "State the final answer.", "workingLatex": "4.2 \\times 10^{-4}", "explanation": "Check: $4.2 \\div 10\\,000 = 0.00042$.", "diagram": null }
      ],
      "finalAnswer": "$4.2 \\times 10^{-4}$"
    }
  },
  {
    "id": "gcse.number.standard-form.q007",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Standard form",
    "subtopicId": "gcse.number.standard-form",
    "difficulty": "Easy",
    "marks": 1,
    "answerType": "standard-form",
    "tags": ["standard form", "small numbers", "conversion", "negative power"],
    "questionText": "Write $0.0000091$ in standard form.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall the form required.", "workingLatex": "A \\times 10^{n}, \\quad 1 \\le A < 10", "explanation": "One non-zero digit must sit before the point.", "diagram": null },
        { "stepNumber": 2, "description": "Find $A$.", "workingLatex": "A = 9.1", "explanation": "The non-zero digits are $9$ and $1$, so $A = 9.1$.", "diagram": null },
        { "stepNumber": 3, "description": "Count the places moved.", "workingLatex": "0.0000091 \\to 9.1", "explanation": "The decimal point moves six places to the right to land just after the $9$.", "diagram": null },
        { "stepNumber": 4, "description": "Decide the power.", "workingLatex": "n = -6", "explanation": "The number is very small, so the power is negative; six moves gives $-6$.", "diagram": null },
        { "stepNumber": 5, "description": "Write in standard form.", "workingLatex": "0.0000091 = 9.1 \\times 10^{-6}", "explanation": "The result is in standard form.", "diagram": null },
        { "stepNumber": 6, "description": "State the final answer.", "workingLatex": "9.1 \\times 10^{-6}", "explanation": "Check: $9.1 \\div 1\\,000\\,000 = 0.0000091$.", "diagram": null }
      ],
      "finalAnswer": "$9.1 \\times 10^{-6}$"
    }
  },
  {
    "id": "gcse.number.standard-form.q008",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Standard form",
    "subtopicId": "gcse.number.standard-form",
    "difficulty": "Easy",
    "marks": 1,
    "answerType": "value",
    "tags": ["standard form", "ordinary number", "conversion", "positive power"],
    "questionText": "Write $2.5 \\times 10^{4}$ as an ordinary number.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Read off $A$ and $n$.", "workingLatex": "A = 2.5, \\quad n = 4", "explanation": "Identifying the two parts tells us the digits and how far to shift the point.", "diagram": null },
        { "stepNumber": 2, "description": "Note the sign of the power.", "workingLatex": "n = 4 > 0", "explanation": "A positive power means the number is large, so the decimal point moves to the right.", "diagram": null },
        { "stepNumber": 3, "description": "Move the decimal point right.", "workingLatex": "2.5 \\to 25000", "explanation": "We shift the point four places right, adding zeros where there are no digits to fill the gaps.", "diagram": null },
        { "stepNumber": 4, "description": "Write out the digits.", "workingLatex": "2.5 \\times 10^{4} = 25\\,000", "explanation": "After the shift the value reads twenty-five thousand.", "diagram": null },
        { "stepNumber": 5, "description": "State the final answer.", "workingLatex": "25\\,000", "explanation": "Check: $2.5 \\times 10\\,000 = 25\\,000$.", "diagram": null }
      ],
      "finalAnswer": "$25\\,000$"
    }
  },
  {
    "id": "gcse.number.standard-form.q009",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Standard form",
    "subtopicId": "gcse.number.standard-form",
    "difficulty": "Easy",
    "marks": 1,
    "answerType": "value",
    "tags": ["standard form", "ordinary number", "conversion", "positive power"],
    "questionText": "Write $6.13 \\times 10^{6}$ as an ordinary number.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Read off $A$ and $n$.", "workingLatex": "A = 6.13, \\quad n = 6", "explanation": "These tell us the digits to write and how many places to shift.", "diagram": null },
        { "stepNumber": 2, "description": "Note the sign of the power.", "workingLatex": "n = 6 > 0", "explanation": "A positive power enlarges the number, moving the point to the right.", "diagram": null },
        { "stepNumber": 3, "description": "Move the decimal point six places right.", "workingLatex": "6.13 \\to 6130000", "explanation": "There are two digits after the point, so we need four extra zeros to make six moves in total.", "diagram": null },
        { "stepNumber": 4, "description": "Write out the number.", "workingLatex": "6.13 \\times 10^{6} = 6\\,130\\,000", "explanation": "The value is six million, one hundred and thirty thousand.", "diagram": null },
        { "stepNumber": 5, "description": "State the final answer.", "workingLatex": "6\\,130\\,000", "explanation": "Check: $6.13 \\times 1\\,000\\,000 = 6\\,130\\,000$.", "diagram": null }
      ],
      "finalAnswer": "$6\\,130\\,000$"
    }
  },
  {
    "id": "gcse.number.standard-form.q010",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Standard form",
    "subtopicId": "gcse.number.standard-form",
    "difficulty": "Easy",
    "marks": 1,
    "answerType": "value",
    "tags": ["standard form", "ordinary number", "conversion", "negative power"],
    "questionText": "Write $8 \\times 10^{-3}$ as an ordinary number.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Read off $A$ and $n$.", "workingLatex": "A = 8, \\quad n = -3", "explanation": "The negative power signals a small number.", "diagram": null },
        { "stepNumber": 2, "description": "Note the sign of the power.", "workingLatex": "n = -3 < 0", "explanation": "A negative power shrinks the number, so the decimal point moves to the left.", "diagram": null },
        { "stepNumber": 3, "description": "Move the point three places left.", "workingLatex": "8. \\to 0.008", "explanation": "Starting after the $8$, we move left three places, filling the gaps with zeros.", "diagram": null },
        { "stepNumber": 4, "description": "Write out the number.", "workingLatex": "8 \\times 10^{-3} = 0.008", "explanation": "The leading zero before the point makes clear this is less than one.", "diagram": null },
        { "stepNumber": 5, "description": "State the final answer.", "workingLatex": "0.008", "explanation": "Check: $8 \\div 1000 = 0.008$.", "diagram": null }
      ],
      "finalAnswer": "$0.008$"
    }
  },
  {
    "id": "gcse.number.standard-form.q011",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Standard form",
    "subtopicId": "gcse.number.standard-form",
    "difficulty": "Easy",
    "marks": 1,
    "answerType": "value",
    "tags": ["standard form", "ordinary number", "conversion", "negative power"],
    "questionText": "Write $9.04 \\times 10^{-5}$ as an ordinary number.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Read off $A$ and $n$.", "workingLatex": "A = 9.04, \\quad n = -5", "explanation": "The digits are $9.04$ and the negative power tells us how far left to shift.", "diagram": null },
        { "stepNumber": 2, "description": "Note the sign of the power.", "workingLatex": "n = -5 < 0", "explanation": "A negative power means a small number, so the point moves left.", "diagram": null },
        { "stepNumber": 3, "description": "Move the point five places left.", "workingLatex": "9.04 \\to 0.0000904", "explanation": "Counting from before the $9$, we insert four zeros after the decimal point to complete five moves.", "diagram": null },
        { "stepNumber": 4, "description": "Write out the number.", "workingLatex": "9.04 \\times 10^{-5} = 0.0000904", "explanation": "Keeping the internal zero of $9.04$ is essential, as it holds its place value.", "diagram": null },
        { "stepNumber": 5, "description": "State the final answer.", "workingLatex": "0.0000904", "explanation": "Check: $9.04 \\div 100\\,000 = 0.0000904$.", "diagram": null }
      ],
      "finalAnswer": "$0.0000904$"
    }
  },
  {
    "id": "gcse.number.standard-form.q012",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Standard form",
    "subtopicId": "gcse.number.standard-form",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "standard-form",
    "tags": ["standard form", "correcting form", "not in standard form", "large numbers"],
    "questionText": "A student writes $34 \\times 10^{3}$. Explain why this is not in standard form and write it correctly.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "State the rule for $A$.", "workingLatex": "1 \\le A < 10", "explanation": "In standard form the front value must be a single-digit-sized number, at least $1$ and below $10$.", "diagram": null },
        { "stepNumber": 2, "description": "Test the student's value of $A$.", "workingLatex": "A = 34 \\ge 10", "explanation": "Here $34$ is too big, so the number is not yet in proper standard form even though it uses a power of ten.", "diagram": null },
        { "stepNumber": 3, "description": "Rewrite $34$ in standard form.", "workingLatex": "34 = 3.4 \\times 10^{1}", "explanation": "Moving the point one place left turns $34$ into an allowed $A = 3.4$.", "diagram": null },
        { "stepNumber": 4, "description": "Substitute this back in.", "workingLatex": "34 \\times 10^{3} = 3.4 \\times 10^{1} \\times 10^{3}", "explanation": "Replacing $34$ with its standard-form version keeps the value unchanged.", "diagram": null },
        { "stepNumber": 5, "description": "Add the indices.", "workingLatex": "10^{1} \\times 10^{3} = 10^{1+3} = 10^{4}", "explanation": "When multiplying powers of the same base we add the indices.", "diagram": null },
        { "stepNumber": 6, "description": "Write the corrected form.", "workingLatex": "3.4 \\times 10^{4}", "explanation": "Now $A = 3.4$ obeys the rule and the power absorbs the extra factor of ten.", "diagram": null },
        { "stepNumber": 7, "description": "State the final answer.", "workingLatex": "34 \\times 10^{3} = 3.4 \\times 10^{4} = 34\\,000", "explanation": "Both forms equal $34\\,000$, confirming only the presentation was wrong.", "diagram": null }
      ],
      "finalAnswer": "Not standard form because $A = 34 \\ge 10$; correctly $3.4 \\times 10^{4}$."
    }
  },
  {
    "id": "gcse.number.standard-form.q013",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Standard form",
    "subtopicId": "gcse.number.standard-form",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "standard-form",
    "tags": ["standard form", "correcting form", "not in standard form", "small numbers"],
    "questionText": "Explain why $0.6 \\times 10^{-2}$ is not in standard form, and write it correctly.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "State the rule for $A$.", "workingLatex": "1 \\le A < 10", "explanation": "The front value must be between $1$ and $10$, so it cannot be less than $1$.", "diagram": null },
        { "stepNumber": 2, "description": "Test the given value of $A$.", "workingLatex": "A = 0.6 < 1", "explanation": "Since $0.6$ is below $1$, this breaks the rule and is not proper standard form.", "diagram": null },
        { "stepNumber": 3, "description": "Rewrite $0.6$ in standard form.", "workingLatex": "0.6 = 6 \\times 10^{-1}", "explanation": "Moving the point one place right makes $A = 6$, which is now allowed.", "diagram": null },
        { "stepNumber": 4, "description": "Substitute back in.", "workingLatex": "0.6 \\times 10^{-2} = 6 \\times 10^{-1} \\times 10^{-2}", "explanation": "Swapping $0.6$ for its standard-form version leaves the value unchanged.", "diagram": null },
        { "stepNumber": 5, "description": "Add the indices.", "workingLatex": "10^{-1} \\times 10^{-2} = 10^{-1 + (-2)} = 10^{-3}", "explanation": "Adding the indices $-1$ and $-2$ gives $-3$.", "diagram": null },
        { "stepNumber": 6, "description": "Write the corrected form.", "workingLatex": "6 \\times 10^{-3}", "explanation": "Now $A = 6$ satisfies the rule.", "diagram": null },
        { "stepNumber": 7, "description": "State the final answer.", "workingLatex": "0.6 \\times 10^{-2} = 6 \\times 10^{-3} = 0.006", "explanation": "Both equal $0.006$, so only the layout was incorrect.", "diagram": null }
      ],
      "finalAnswer": "Not standard form because $A = 0.6 < 1$; correctly $6 \\times 10^{-3}$."
    }
  },
  {
    "id": "gcse.number.standard-form.q014",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Standard form",
    "subtopicId": "gcse.number.standard-form",
    "difficulty": "Easy",
    "marks": 1,
    "answerType": "standard-form",
    "tags": ["standard form", "large numbers", "conversion", "positive power"],
    "questionText": "Write $670$ in standard form.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall the form required.", "workingLatex": "A \\times 10^{n}, \\quad 1 \\le A < 10", "explanation": "One non-zero digit should sit before the decimal point.", "diagram": null },
        { "stepNumber": 2, "description": "Find $A$.", "workingLatex": "A = 6.7", "explanation": "Placing the point after the first digit gives $6.7$; the trailing zero is dropped.", "diagram": null },
        { "stepNumber": 3, "description": "Count the places moved.", "workingLatex": "670. \\to 6.70", "explanation": "The point moves two places left.", "diagram": null },
        { "stepNumber": 4, "description": "Choose the power.", "workingLatex": "n = 2", "explanation": "Two leftward moves give $10^{2}$.", "diagram": null },
        { "stepNumber": 5, "description": "Write in standard form.", "workingLatex": "670 = 6.7 \\times 10^{2}", "explanation": "This matches the required shape.", "diagram": null },
        { "stepNumber": 6, "description": "State the final answer.", "workingLatex": "6.7 \\times 10^{2}", "explanation": "Check: $6.7 \\times 100 = 670$.", "diagram": null }
      ],
      "finalAnswer": "$6.7 \\times 10^{2}$"
    }
  },
  {
    "id": "gcse.number.standard-form.q015",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Standard form",
    "subtopicId": "gcse.number.standard-form",
    "difficulty": "Easy",
    "marks": 1,
    "answerType": "standard-form",
    "tags": ["standard form", "small numbers", "conversion", "negative power"],
    "questionText": "Write $0.0805$ in standard form.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall the form required.", "workingLatex": "A \\times 10^{n}, \\quad 1 \\le A < 10", "explanation": "We want a single non-zero digit before the point.", "diagram": null },
        { "stepNumber": 2, "description": "Find $A$.", "workingLatex": "A = 8.05", "explanation": "The first non-zero digit is $8$, so $A = 8.05$, keeping the internal zero.", "diagram": null },
        { "stepNumber": 3, "description": "Count the places moved.", "workingLatex": "0.0805 \\to 8.05", "explanation": "The decimal point moves two places to the right.", "diagram": null },
        { "stepNumber": 4, "description": "Decide the power.", "workingLatex": "n = -2", "explanation": "The number is less than one, so the power is negative; two moves gives $-2$.", "diagram": null },
        { "stepNumber": 5, "description": "Write in standard form.", "workingLatex": "0.0805 = 8.05 \\times 10^{-2}", "explanation": "The internal zero in $8.05$ must be kept as it holds place value.", "diagram": null },
        { "stepNumber": 6, "description": "State the final answer.", "workingLatex": "8.05 \\times 10^{-2}", "explanation": "Check: $8.05 \\div 100 = 0.0805$.", "diagram": null }
      ],
      "finalAnswer": "$8.05 \\times 10^{-2}$"
    }
  },
  {
    "id": "gcse.number.standard-form.q016",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Standard form",
    "subtopicId": "gcse.number.standard-form",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "standard-form",
    "tags": ["standard form", "correcting form", "not in standard form", "small numbers"],
    "questionText": "Write $0.45 \\times 10^{-3}$ correctly in standard form.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Check the value of $A$.", "workingLatex": "A = 0.45 < 1", "explanation": "Because $0.45$ is less than $1$, the expression is not yet in standard form.", "diagram": null },
        { "stepNumber": 2, "description": "Rewrite $0.45$ in standard form.", "workingLatex": "0.45 = 4.5 \\times 10^{-1}", "explanation": "Moving the point one place right gives an allowed $A = 4.5$.", "diagram": null },
        { "stepNumber": 3, "description": "Substitute back in.", "workingLatex": "0.45 \\times 10^{-3} = 4.5 \\times 10^{-1} \\times 10^{-3}", "explanation": "The value is unchanged by rewriting the front factor.", "diagram": null },
        { "stepNumber": 4, "description": "Add the indices.", "workingLatex": "10^{-1} \\times 10^{-3} = 10^{-4}", "explanation": "Adding $-1$ and $-3$ gives $-4$.", "diagram": null },
        { "stepNumber": 5, "description": "Write the corrected form.", "workingLatex": "4.5 \\times 10^{-4}", "explanation": "Now $A = 4.5$ is within range.", "diagram": null },
        { "stepNumber": 6, "description": "State the final answer.", "workingLatex": "0.45 \\times 10^{-3} = 4.5 \\times 10^{-4}", "explanation": "Both equal $0.00045$, confirming the correction.", "diagram": null }
      ],
      "finalAnswer": "$4.5 \\times 10^{-4}$"
    }
  },
  {
    "id": "gcse.number.standard-form.q017",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Standard form",
    "subtopicId": "gcse.number.standard-form",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "ordering",
    "tags": ["standard form", "ordering", "large numbers", "comparison"],
    "questionText": "Write these numbers in order of size, starting with the smallest: $3 \\times 10^{2}, \\; 5 \\times 10^{3}, \\; 2 \\times 10^{2}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Compare the powers first.", "workingLatex": "10^{2}, \\; 10^{3}, \\; 10^{2}", "explanation": "For positive powers, a bigger power means a bigger number, so the power is the first thing to compare.", "diagram": null },
        { "stepNumber": 2, "description": "Identify the largest.", "workingLatex": "5 \\times 10^{3}", "explanation": "It has the highest power $10^{3}$, so it is the biggest regardless of the front number.", "diagram": null },
        { "stepNumber": 3, "description": "Compare the two with equal powers.", "workingLatex": "3 \\times 10^{2} \\text{ vs } 2 \\times 10^{2}", "explanation": "When the powers match, we simply compare the front values $A$.", "diagram": null },
        { "stepNumber": 4, "description": "Order those two.", "workingLatex": "2 \\times 10^{2} < 3 \\times 10^{2}", "explanation": "Since $2 < 3$, the first of these is smaller.", "diagram": null },
        { "stepNumber": 5, "description": "Combine into one order.", "workingLatex": "2 \\times 10^{2}, \\; 3 \\times 10^{2}, \\; 5 \\times 10^{3}", "explanation": "Placing the two small ones first and the large one last gives the full order.", "diagram": null },
        { "stepNumber": 6, "description": "Confirm with ordinary numbers.", "workingLatex": "200, \\; 300, \\; 5000", "explanation": "Converting each checks the order is correct.", "diagram": null }
      ],
      "finalAnswer": "$2 \\times 10^{2}, \\; 3 \\times 10^{2}, \\; 5 \\times 10^{3}$"
    }
  },
  {
    "id": "gcse.number.standard-form.q018",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Standard form",
    "subtopicId": "gcse.number.standard-form",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "ordering",
    "tags": ["standard form", "ordering", "small numbers", "negative power"],
    "questionText": "Write these numbers in order of size, starting with the smallest: $4 \\times 10^{-3}, \\; 9 \\times 10^{-5}, \\; 4 \\times 10^{-4}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Compare the powers.", "workingLatex": "10^{-3}, \\; 10^{-5}, \\; 10^{-4}", "explanation": "For negative powers, the more negative the power, the smaller the number.", "diagram": null },
        { "stepNumber": 2, "description": "Order the powers from most negative.", "workingLatex": "-5 < -4 < -3", "explanation": "So $10^{-5}$ is smallest and $10^{-3}$ is largest.", "diagram": null },
        { "stepNumber": 3, "description": "Identify the smallest.", "workingLatex": "9 \\times 10^{-5}", "explanation": "Its power $-5$ is the most negative, making it the smallest despite the large front value $9$.", "diagram": null },
        { "stepNumber": 4, "description": "Order the remaining two.", "workingLatex": "4 \\times 10^{-4} < 4 \\times 10^{-3}", "explanation": "With equal front values, the more negative power $-4$ is smaller.", "diagram": null },
        { "stepNumber": 5, "description": "Combine into one order.", "workingLatex": "9 \\times 10^{-5}, \\; 4 \\times 10^{-4}, \\; 4 \\times 10^{-3}", "explanation": "This lists them from smallest to largest.", "diagram": null },
        { "stepNumber": 6, "description": "Confirm with ordinary numbers.", "workingLatex": "0.00009, \\; 0.0004, \\; 0.004", "explanation": "The decimals confirm the order.", "diagram": null }
      ],
      "finalAnswer": "$9 \\times 10^{-5}, \\; 4 \\times 10^{-4}, \\; 4 \\times 10^{-3}$"
    }
  },
  {
    "id": "gcse.number.standard-form.q019",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Standard form",
    "subtopicId": "gcse.number.standard-form",
    "difficulty": "Easy",
    "marks": 1,
    "answerType": "standard-form",
    "tags": ["standard form", "large numbers", "conversion", "positive power"],
    "questionText": "Write $90\\,200$ in standard form.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall the form required.", "workingLatex": "A \\times 10^{n}, \\quad 1 \\le A < 10", "explanation": "We need one non-zero digit before the point.", "diagram": null },
        { "stepNumber": 2, "description": "Find $A$.", "workingLatex": "A = 9.02", "explanation": "The point goes after the first digit $9$, keeping the internal zero: $9.02$.", "diagram": null },
        { "stepNumber": 3, "description": "Count the places moved.", "workingLatex": "90200. \\to 9.0200", "explanation": "The decimal point moves four places to the left.", "diagram": null },
        { "stepNumber": 4, "description": "Choose the power.", "workingLatex": "n = 4", "explanation": "Four leftward moves give $10^{4}$.", "diagram": null },
        { "stepNumber": 5, "description": "Write in standard form.", "workingLatex": "90\\,200 = 9.02 \\times 10^{4}", "explanation": "The internal zero of $9.02$ is kept; trailing zeros are dropped.", "diagram": null },
        { "stepNumber": 6, "description": "State the final answer.", "workingLatex": "9.02 \\times 10^{4}", "explanation": "Check: $9.02 \\times 10\\,000 = 90\\,200$.", "diagram": null }
      ],
      "finalAnswer": "$9.02 \\times 10^{4}$"
    }
  },
  {
    "id": "gcse.number.standard-form.q020",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Standard form",
    "subtopicId": "gcse.number.standard-form",
    "difficulty": "Easy",
    "marks": 1,
    "answerType": "value",
    "tags": ["standard form", "ordinary number", "conversion", "negative power"],
    "questionText": "Write $1.7 \\times 10^{-1}$ as an ordinary number.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Read off $A$ and $n$.", "workingLatex": "A = 1.7, \\quad n = -1", "explanation": "The negative power shows the number is a little less than the front value.", "diagram": null },
        { "stepNumber": 2, "description": "Note the direction of the shift.", "workingLatex": "n = -1 < 0", "explanation": "A negative power moves the decimal point to the left.", "diagram": null },
        { "stepNumber": 3, "description": "Move the point one place left.", "workingLatex": "1.7 \\to 0.17", "explanation": "Shifting once left and adding a leading zero gives $0.17$.", "diagram": null },
        { "stepNumber": 4, "description": "Write the number.", "workingLatex": "1.7 \\times 10^{-1} = 0.17", "explanation": "This is just over one tenth.", "diagram": null },
        { "stepNumber": 5, "description": "State the final answer.", "workingLatex": "0.17", "explanation": "Check: $1.7 \\div 10 = 0.17$.", "diagram": null }
      ],
      "finalAnswer": "$0.17$"
    }
  },
  {
    "id": "gcse.number.standard-form.q021",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Standard form",
    "subtopicId": "gcse.number.standard-form",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "standard-form",
    "tags": ["standard form", "context", "large numbers", "conversion"],
    "questionText": "The distance from the Earth to the Sun is about $150\\,000\\,000$ km. Write this distance in standard form.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall the form required.", "workingLatex": "A \\times 10^{n}, \\quad 1 \\le A < 10", "explanation": "Standard form is ideal for astronomical distances, which are very large.", "diagram": null },
        { "stepNumber": 2, "description": "Find $A$.", "workingLatex": "A = 1.5", "explanation": "Placing the point after the first digit gives $1.5$; the remaining zeros are dropped.", "diagram": null },
        { "stepNumber": 3, "description": "Count the places moved.", "workingLatex": "150000000. \\to 1.5", "explanation": "The point moves eight places to the left.", "diagram": null },
        { "stepNumber": 4, "description": "Choose the power.", "workingLatex": "n = 8", "explanation": "Eight leftward moves give $10^{8}$.", "diagram": null },
        { "stepNumber": 5, "description": "Write in standard form.", "workingLatex": "150\\,000\\,000 = 1.5 \\times 10^{8}", "explanation": "The large distance produces a positive power.", "diagram": null },
        { "stepNumber": 6, "description": "State the final answer.", "workingLatex": "1.5 \\times 10^{8} \\text{ km}", "explanation": "Check: $1.5 \\times 100\\,000\\,000 = 150\\,000\\,000$.", "diagram": null }
      ],
      "finalAnswer": "$1.5 \\times 10^{8}$ km"
    }
  },
  {
    "id": "gcse.number.standard-form.q022",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Standard form",
    "subtopicId": "gcse.number.standard-form",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "standard-form",
    "tags": ["standard form", "context", "small numbers", "conversion"],
    "questionText": "The diameter of a human hair is about $0.00007$ m. Write this in standard form.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall the form required.", "workingLatex": "A \\times 10^{n}, \\quad 1 \\le A < 10", "explanation": "Tiny measurements are naturally written with a negative power of ten.", "diagram": null },
        { "stepNumber": 2, "description": "Find $A$.", "workingLatex": "A = 7", "explanation": "The only non-zero digit is $7$.", "diagram": null },
        { "stepNumber": 3, "description": "Count the places moved.", "workingLatex": "0.00007 \\to 7", "explanation": "The point moves five places to the right to sit after the $7$.", "diagram": null },
        { "stepNumber": 4, "description": "Decide the power.", "workingLatex": "n = -5", "explanation": "The number is small, so the power is negative; five moves gives $-5$.", "diagram": null },
        { "stepNumber": 5, "description": "Write in standard form.", "workingLatex": "0.00007 = 7 \\times 10^{-5}", "explanation": "The result is in the required shape.", "diagram": null },
        { "stepNumber": 6, "description": "State the final answer.", "workingLatex": "7 \\times 10^{-5} \\text{ m}", "explanation": "Check: $7 \\div 100\\,000 = 0.00007$.", "diagram": null }
      ],
      "finalAnswer": "$7 \\times 10^{-5}$ m"
    }
  },
  {
    "id": "gcse.number.standard-form.q023",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Standard form",
    "subtopicId": "gcse.number.standard-form",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "ordering",
    "tags": ["standard form", "ordering", "mixed powers", "comparison"],
    "questionText": "Write these numbers in order of size, starting with the smallest: $8 \\times 10^{-1}, \\; 3 \\times 10^{2}, \\; 8 \\times 10^{-2}, \\; 3 \\times 10^{1}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "List the powers.", "workingLatex": "-1, \\; 2, \\; -2, \\; 1", "explanation": "Comparing the powers gives the fastest sense of relative size.", "diagram": null },
        { "stepNumber": 2, "description": "Order the powers.", "workingLatex": "-2 < -1 < 1 < 2", "explanation": "Smaller (more negative) powers give smaller numbers.", "diagram": null },
        { "stepNumber": 3, "description": "Match numbers to powers.", "workingLatex": "8 \\times 10^{-2}, \\; 8 \\times 10^{-1}, \\; 3 \\times 10^{1}, \\; 3 \\times 10^{2}", "explanation": "Because every power here is different, the order of the powers fixes the whole order.", "diagram": null },
        { "stepNumber": 4, "description": "Convert to check.", "workingLatex": "0.08, \\; 0.8, \\; 30, \\; 300", "explanation": "The ordinary numbers rise steadily, confirming the order.", "diagram": null },
        { "stepNumber": 5, "description": "State the final answer.", "workingLatex": "8 \\times 10^{-2}, \\; 8 \\times 10^{-1}, \\; 3 \\times 10^{1}, \\; 3 \\times 10^{2}", "explanation": "This is the list from smallest to largest.", "diagram": null }
      ],
      "finalAnswer": "$8 \\times 10^{-2}, \\; 8 \\times 10^{-1}, \\; 3 \\times 10^{1}, \\; 3 \\times 10^{2}$"
    }
  },
  {
    "id": "gcse.number.standard-form.q024",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Standard form",
    "subtopicId": "gcse.number.standard-form",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "standard-form",
    "tags": ["standard form", "correcting form", "not in standard form", "large numbers"],
    "questionText": "Write $0.72 \\times 10^{5}$ correctly in standard form.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Check the value of $A$.", "workingLatex": "A = 0.72 < 1", "explanation": "Since $0.72$ is below $1$, this is not yet standard form.", "diagram": null },
        { "stepNumber": 2, "description": "Rewrite $0.72$ in standard form.", "workingLatex": "0.72 = 7.2 \\times 10^{-1}", "explanation": "Moving the point one place right gives an allowed $A = 7.2$.", "diagram": null },
        { "stepNumber": 3, "description": "Substitute back in.", "workingLatex": "0.72 \\times 10^{5} = 7.2 \\times 10^{-1} \\times 10^{5}", "explanation": "The overall value is unchanged.", "diagram": null },
        { "stepNumber": 4, "description": "Add the indices.", "workingLatex": "10^{-1} \\times 10^{5} = 10^{4}", "explanation": "Adding $-1$ and $5$ gives $4$.", "diagram": null },
        { "stepNumber": 5, "description": "Write the corrected form.", "workingLatex": "7.2 \\times 10^{4}", "explanation": "Now $A = 7.2$ is within range.", "diagram": null },
        { "stepNumber": 6, "description": "State the final answer.", "workingLatex": "0.72 \\times 10^{5} = 7.2 \\times 10^{4} = 72\\,000", "explanation": "Both equal $72\\,000$, confirming the correction.", "diagram": null }
      ],
      "finalAnswer": "$7.2 \\times 10^{4}$"
    }
  },
  {
    "id": "gcse.number.standard-form.q025",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Standard form",
    "subtopicId": "gcse.number.standard-form",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "standard-form",
    "tags": ["standard form", "multiplication", "index laws", "non-calculator"],
    "questionText": "Work out $(3 \\times 10^{4}) \\times (2 \\times 10^{3})$, giving your answer in standard form.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Write out the calculation.", "workingLatex": "(3 \\times 10^{4}) \\times (2 \\times 10^{3})", "explanation": "Seeing the whole product laid out helps us decide how to group the parts.", "diagram": null },
        { "stepNumber": 2, "description": "Recall that multiplication can be reordered.", "workingLatex": "= 3 \\times 2 \\times 10^{4} \\times 10^{3}", "explanation": "Multiplication can be done in any order, so we gather the ordinary numbers together and the powers of ten together.", "diagram": null },
        { "stepNumber": 3, "description": "Multiply the front numbers.", "workingLatex": "3 \\times 2 = 6", "explanation": "The single-digit values multiply just like ordinary numbers.", "diagram": null },
        { "stepNumber": 4, "description": "Recall the index law for multiplying powers.", "workingLatex": "10^{a} \\times 10^{b} = 10^{a+b}", "explanation": "Powers of the same base are combined by adding the indices.", "diagram": null },
        { "stepNumber": 5, "description": "Add the indices.", "workingLatex": "10^{4} \\times 10^{3} = 10^{7}", "explanation": "Adding $4$ and $3$ gives $7$.", "diagram": null },
        { "stepNumber": 6, "description": "Combine the two parts.", "workingLatex": "6 \\times 10^{7}", "explanation": "Putting the number and the power together gives a single expression.", "diagram": null },
        { "stepNumber": 7, "description": "Check $A$ is in range.", "workingLatex": "1 \\le 6 < 10", "explanation": "Since $6$ is between $1$ and $10$, no adjustment is needed.", "diagram": null },
        { "stepNumber": 8, "description": "State the final answer.", "workingLatex": "6 \\times 10^{7}", "explanation": "The answer is already in correct standard form.", "diagram": null }
      ],
      "finalAnswer": "$6 \\times 10^{7}$"
    }
  },
  {
    "id": "gcse.number.standard-form.q026",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Standard form",
    "subtopicId": "gcse.number.standard-form",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "standard-form",
    "tags": ["standard form", "multiplication", "index laws", "non-calculator"],
    "questionText": "Work out $(4 \\times 10^{5}) \\times (2 \\times 10^{2})$, giving your answer in standard form.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Write out the calculation.", "workingLatex": "(4 \\times 10^{5}) \\times (2 \\times 10^{2})", "explanation": "Laying out the product clarifies the two number parts and two powers.", "diagram": null },
        { "stepNumber": 2, "description": "Reorder into numbers and powers.", "workingLatex": "= 4 \\times 2 \\times 10^{5} \\times 10^{2}", "explanation": "Grouping like with like makes each multiplication simple.", "diagram": null },
        { "stepNumber": 3, "description": "Multiply the front numbers.", "workingLatex": "4 \\times 2 = 8", "explanation": "The ordinary values multiply directly.", "diagram": null },
        { "stepNumber": 4, "description": "Recall the index law.", "workingLatex": "10^{a} \\times 10^{b} = 10^{a+b}", "explanation": "Multiplying powers of ten means adding indices.", "diagram": null },
        { "stepNumber": 5, "description": "Add the indices.", "workingLatex": "10^{5} \\times 10^{2} = 10^{7}", "explanation": "Adding $5$ and $2$ gives $7$.", "diagram": null },
        { "stepNumber": 6, "description": "Combine the parts.", "workingLatex": "8 \\times 10^{7}", "explanation": "Joining the number and power gives one expression.", "diagram": null },
        { "stepNumber": 7, "description": "Check $A$ is in range.", "workingLatex": "1 \\le 8 < 10", "explanation": "As $8$ lies between $1$ and $10$, the form is already valid.", "diagram": null },
        { "stepNumber": 8, "description": "State the final answer.", "workingLatex": "8 \\times 10^{7}", "explanation": "This is the calculation completed in standard form.", "diagram": null }
      ],
      "finalAnswer": "$8 \\times 10^{7}$"
    }
  },
  {
    "id": "gcse.number.standard-form.q027",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Standard form",
    "subtopicId": "gcse.number.standard-form",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "standard-form",
    "tags": ["standard form", "multiplication", "adjusting form", "index laws"],
    "questionText": "Work out $(5 \\times 10^{3}) \\times (3 \\times 10^{6})$, giving your answer in standard form.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Write out the calculation.", "workingLatex": "(5 \\times 10^{3}) \\times (3 \\times 10^{6})", "explanation": "We set out the full product before simplifying.", "diagram": null },
        { "stepNumber": 2, "description": "Reorder into numbers and powers.", "workingLatex": "= 5 \\times 3 \\times 10^{3} \\times 10^{6}", "explanation": "Grouping the ordinary numbers and the powers separately.", "diagram": null },
        { "stepNumber": 3, "description": "Multiply the front numbers.", "workingLatex": "5 \\times 3 = 15", "explanation": "The front values multiply to $15$.", "diagram": null },
        { "stepNumber": 4, "description": "Add the indices.", "workingLatex": "10^{3} \\times 10^{6} = 10^{9}", "explanation": "Adding $3$ and $6$ gives $9$.", "diagram": null },
        { "stepNumber": 5, "description": "Combine the parts.", "workingLatex": "15 \\times 10^{9}", "explanation": "This is correct in value but not yet in standard form.", "diagram": null },
        { "stepNumber": 6, "description": "Check $A$ against the rule.", "workingLatex": "15 \\ge 10", "explanation": "The front number is too big, so we must adjust it.", "diagram": null },
        { "stepNumber": 7, "description": "Rewrite $15$ in standard form.", "workingLatex": "15 = 1.5 \\times 10^{1}", "explanation": "Moving the point one place left gives an allowed $A = 1.5$.", "diagram": null },
        { "stepNumber": 8, "description": "Combine the extra power.", "workingLatex": "1.5 \\times 10^{1} \\times 10^{9} = 1.5 \\times 10^{10}", "explanation": "The spare factor of ten is absorbed by adding $1$ to the index.", "diagram": null },
        { "stepNumber": 9, "description": "State the final answer.", "workingLatex": "1.5 \\times 10^{10}", "explanation": "Now $A = 1.5$ obeys the rule.", "diagram": null }
      ],
      "finalAnswer": "$1.5 \\times 10^{10}$"
    }
  },
  {
    "id": "gcse.number.standard-form.q028",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Standard form",
    "subtopicId": "gcse.number.standard-form",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "standard-form",
    "tags": ["standard form", "multiplication", "negative power", "adjusting form"],
    "questionText": "Work out $(6 \\times 10^{-2}) \\times (4 \\times 10^{5})$, giving your answer in standard form.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Write out the calculation.", "workingLatex": "(6 \\times 10^{-2}) \\times (4 \\times 10^{5})", "explanation": "Set out the product ready to group its parts.", "diagram": null },
        { "stepNumber": 2, "description": "Reorder into numbers and powers.", "workingLatex": "= 6 \\times 4 \\times 10^{-2} \\times 10^{5}", "explanation": "Ordinary numbers together, powers together.", "diagram": null },
        { "stepNumber": 3, "description": "Multiply the front numbers.", "workingLatex": "6 \\times 4 = 24", "explanation": "The front values give $24$.", "diagram": null },
        { "stepNumber": 4, "description": "Add the indices.", "workingLatex": "10^{-2} \\times 10^{5} = 10^{3}", "explanation": "Adding $-2$ and $5$ gives $3$.", "diagram": null },
        { "stepNumber": 5, "description": "Combine the parts.", "workingLatex": "24 \\times 10^{3}", "explanation": "Correct in value but $24$ is too large for standard form.", "diagram": null },
        { "stepNumber": 6, "description": "Rewrite $24$ in standard form.", "workingLatex": "24 = 2.4 \\times 10^{1}", "explanation": "Moving the point one place left gives $A = 2.4$.", "diagram": null },
        { "stepNumber": 7, "description": "Absorb the extra power.", "workingLatex": "2.4 \\times 10^{1} \\times 10^{3} = 2.4 \\times 10^{4}", "explanation": "Adding the spare index to $10^{3}$ gives $10^{4}$.", "diagram": null },
        { "stepNumber": 8, "description": "State the final answer.", "workingLatex": "2.4 \\times 10^{4}", "explanation": "Now $A = 2.4$ is within range.", "diagram": null }
      ],
      "finalAnswer": "$2.4 \\times 10^{4}$"
    }
  },
  {
    "id": "gcse.number.standard-form.q029",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Standard form",
    "subtopicId": "gcse.number.standard-form",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "standard-form",
    "tags": ["standard form", "multiplication", "decimals", "index laws"],
    "questionText": "Work out $(2.5 \\times 10^{4}) \\times (3 \\times 10^{2})$, giving your answer in standard form.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Write out the calculation.", "workingLatex": "(2.5 \\times 10^{4}) \\times (3 \\times 10^{2})", "explanation": "Setting out the product first.", "diagram": null },
        { "stepNumber": 2, "description": "Reorder into numbers and powers.", "workingLatex": "= 2.5 \\times 3 \\times 10^{4} \\times 10^{2}", "explanation": "Grouping numbers with numbers and powers with powers.", "diagram": null },
        { "stepNumber": 3, "description": "Multiply the front numbers.", "workingLatex": "2.5 \\times 3 = 7.5", "explanation": "Two and a half threes make seven and a half.", "diagram": null },
        { "stepNumber": 4, "description": "Add the indices.", "workingLatex": "10^{4} \\times 10^{2} = 10^{6}", "explanation": "Adding $4$ and $2$ gives $6$.", "diagram": null },
        { "stepNumber": 5, "description": "Combine the parts.", "workingLatex": "7.5 \\times 10^{6}", "explanation": "The front number and the power come together.", "diagram": null },
        { "stepNumber": 6, "description": "Check $A$ is in range.", "workingLatex": "1 \\le 7.5 < 10", "explanation": "Since $7.5$ lies between $1$ and $10$, no adjustment is needed.", "diagram": null },
        { "stepNumber": 7, "description": "State the final answer.", "workingLatex": "7.5 \\times 10^{6}", "explanation": "The calculation is complete in standard form.", "diagram": null }
      ],
      "finalAnswer": "$7.5 \\times 10^{6}$"
    }
  },
  {
    "id": "gcse.number.standard-form.q030",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Standard form",
    "subtopicId": "gcse.number.standard-form",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "standard-form",
    "tags": ["standard form", "division", "index laws", "non-calculator"],
    "questionText": "Work out $(8 \\times 10^{6}) \\div (2 \\times 10^{2})$, giving your answer in standard form.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Write out the calculation.", "workingLatex": "\\frac{8 \\times 10^{6}}{2 \\times 10^{2}}", "explanation": "Writing the division as a fraction makes the two parts clear.", "diagram": null },
        { "stepNumber": 2, "description": "Split into a number part and a power part.", "workingLatex": "= \\frac{8}{2} \\times \\frac{10^{6}}{10^{2}}", "explanation": "We can divide the front numbers and the powers separately.", "diagram": null },
        { "stepNumber": 3, "description": "Divide the front numbers.", "workingLatex": "\\frac{8}{2} = 4", "explanation": "Eight shared into two equal parts is four.", "diagram": null },
        { "stepNumber": 4, "description": "Recall the index law for dividing powers.", "workingLatex": "10^{a} \\div 10^{b} = 10^{a-b}", "explanation": "Dividing powers of the same base means subtracting the indices.", "diagram": null },
        { "stepNumber": 5, "description": "Subtract the indices.", "workingLatex": "10^{6} \\div 10^{2} = 10^{4}", "explanation": "Subtracting $2$ from $6$ gives $4$.", "diagram": null },
        { "stepNumber": 6, "description": "Combine the parts.", "workingLatex": "4 \\times 10^{4}", "explanation": "Bringing the number and power together.", "diagram": null },
        { "stepNumber": 7, "description": "Check $A$ is in range.", "workingLatex": "1 \\le 4 < 10", "explanation": "As $4$ is between $1$ and $10$, the form is valid.", "diagram": null },
        { "stepNumber": 8, "description": "State the final answer.", "workingLatex": "4 \\times 10^{4}", "explanation": "The division is complete in standard form.", "diagram": null }
      ],
      "finalAnswer": "$4 \\times 10^{4}$"
    }
  },
  {
    "id": "gcse.number.standard-form.q031",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Standard form",
    "subtopicId": "gcse.number.standard-form",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "standard-form",
    "tags": ["standard form", "division", "index laws", "non-calculator"],
    "questionText": "Work out $(9 \\times 10^{8}) \\div (3 \\times 10^{3})$, giving your answer in standard form.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Write as a fraction.", "workingLatex": "\\frac{9 \\times 10^{8}}{3 \\times 10^{3}}", "explanation": "A fraction shows the numerator and denominator parts clearly.", "diagram": null },
        { "stepNumber": 2, "description": "Split the fraction.", "workingLatex": "= \\frac{9}{3} \\times \\frac{10^{8}}{10^{3}}", "explanation": "Divide the front numbers and the powers separately.", "diagram": null },
        { "stepNumber": 3, "description": "Divide the front numbers.", "workingLatex": "\\frac{9}{3} = 3", "explanation": "Nine divided by three is three.", "diagram": null },
        { "stepNumber": 4, "description": "Recall the division index law.", "workingLatex": "10^{a} \\div 10^{b} = 10^{a-b}", "explanation": "Subtract the indices when dividing powers.", "diagram": null },
        { "stepNumber": 5, "description": "Subtract the indices.", "workingLatex": "10^{8} \\div 10^{3} = 10^{5}", "explanation": "Subtracting $3$ from $8$ gives $5$.", "diagram": null },
        { "stepNumber": 6, "description": "Combine the parts.", "workingLatex": "3 \\times 10^{5}", "explanation": "Joining number and power.", "diagram": null },
        { "stepNumber": 7, "description": "Check $A$ is in range.", "workingLatex": "1 \\le 3 < 10", "explanation": "The front value is valid, so no adjustment is needed.", "diagram": null },
        { "stepNumber": 8, "description": "State the final answer.", "workingLatex": "3 \\times 10^{5}", "explanation": "The division is complete in standard form.", "diagram": null }
      ],
      "finalAnswer": "$3 \\times 10^{5}$"
    }
  },
  {
    "id": "gcse.number.standard-form.q032",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Standard form",
    "subtopicId": "gcse.number.standard-form",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "standard-form",
    "tags": ["standard form", "division", "decimals", "index laws"],
    "questionText": "Work out $(6 \\times 10^{5}) \\div (4 \\times 10^{2})$, giving your answer in standard form.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Write as a fraction.", "workingLatex": "\\frac{6 \\times 10^{5}}{4 \\times 10^{2}}", "explanation": "The fraction separates the front numbers from the powers.", "diagram": null },
        { "stepNumber": 2, "description": "Split the fraction.", "workingLatex": "= \\frac{6}{4} \\times \\frac{10^{5}}{10^{2}}", "explanation": "Handle the numbers and the powers separately.", "diagram": null },
        { "stepNumber": 3, "description": "Divide the front numbers.", "workingLatex": "\\frac{6}{4} = 1.5", "explanation": "Six divided by four is one and a half.", "diagram": null },
        { "stepNumber": 4, "description": "Subtract the indices.", "workingLatex": "10^{5} \\div 10^{2} = 10^{3}", "explanation": "Subtracting $2$ from $5$ gives $3$.", "diagram": null },
        { "stepNumber": 5, "description": "Combine the parts.", "workingLatex": "1.5 \\times 10^{3}", "explanation": "The number and the power come together.", "diagram": null },
        { "stepNumber": 6, "description": "Check $A$ is in range.", "workingLatex": "1 \\le 1.5 < 10", "explanation": "Since $1.5$ is between $1$ and $10$, the form is valid.", "diagram": null },
        { "stepNumber": 7, "description": "State the final answer.", "workingLatex": "1.5 \\times 10^{3}", "explanation": "The division is complete in standard form.", "diagram": null }
      ],
      "finalAnswer": "$1.5 \\times 10^{3}$"
    }
  },
  {
    "id": "gcse.number.standard-form.q033",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Standard form",
    "subtopicId": "gcse.number.standard-form",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "standard-form",
    "tags": ["standard form", "division", "adjusting form", "negative power"],
    "questionText": "Work out $(3 \\times 10^{4}) \\div (6 \\times 10^{7})$, giving your answer in standard form.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Write as a fraction.", "workingLatex": "\\frac{3 \\times 10^{4}}{6 \\times 10^{7}}", "explanation": "The fraction lays out the parts to divide.", "diagram": null },
        { "stepNumber": 2, "description": "Split the fraction.", "workingLatex": "= \\frac{3}{6} \\times \\frac{10^{4}}{10^{7}}", "explanation": "Separate the front numbers from the powers.", "diagram": null },
        { "stepNumber": 3, "description": "Divide the front numbers.", "workingLatex": "\\frac{3}{6} = 0.5", "explanation": "Three sixths is one half, or $0.5$.", "diagram": null },
        { "stepNumber": 4, "description": "Subtract the indices.", "workingLatex": "10^{4} \\div 10^{7} = 10^{4-7} = 10^{-3}", "explanation": "Subtracting $7$ from $4$ gives $-3$; a negative index appears because the bottom is bigger.", "diagram": null },
        { "stepNumber": 5, "description": "Combine the parts.", "workingLatex": "0.5 \\times 10^{-3}", "explanation": "Correct in value, but $A = 0.5$ is less than $1$.", "diagram": null },
        { "stepNumber": 6, "description": "Rewrite $0.5$ in standard form.", "workingLatex": "0.5 = 5 \\times 10^{-1}", "explanation": "Moving the point one place right gives an allowed $A = 5$.", "diagram": null },
        { "stepNumber": 7, "description": "Absorb the extra power.", "workingLatex": "5 \\times 10^{-1} \\times 10^{-3} = 5 \\times 10^{-4}", "explanation": "Adding $-1$ and $-3$ gives $-4$.", "diagram": null },
        { "stepNumber": 8, "description": "State the final answer.", "workingLatex": "5 \\times 10^{-4}", "explanation": "Now $A = 5$ satisfies the rule.", "diagram": null }
      ],
      "finalAnswer": "$5 \\times 10^{-4}$"
    }
  },
  {
    "id": "gcse.number.standard-form.q034",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Standard form",
    "subtopicId": "gcse.number.standard-form",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "standard-form",
    "tags": ["standard form", "division", "adjusting form", "decimals"],
    "questionText": "Work out $(1.2 \\times 10^{7}) \\div (4 \\times 10^{3})$, giving your answer in standard form.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Write as a fraction.", "workingLatex": "\\frac{1.2 \\times 10^{7}}{4 \\times 10^{3}}", "explanation": "Setting out the division ready to split.", "diagram": null },
        { "stepNumber": 2, "description": "Split the fraction.", "workingLatex": "= \\frac{1.2}{4} \\times \\frac{10^{7}}{10^{3}}", "explanation": "Divide the numbers and the powers separately.", "diagram": null },
        { "stepNumber": 3, "description": "Divide the front numbers.", "workingLatex": "\\frac{1.2}{4} = 0.3", "explanation": "One point two shared into four equal parts is $0.3$.", "diagram": null },
        { "stepNumber": 4, "description": "Subtract the indices.", "workingLatex": "10^{7} \\div 10^{3} = 10^{4}", "explanation": "Subtracting $3$ from $7$ gives $4$.", "diagram": null },
        { "stepNumber": 5, "description": "Combine the parts.", "workingLatex": "0.3 \\times 10^{4}", "explanation": "The value is right but $A = 0.3 < 1$, so we must adjust.", "diagram": null },
        { "stepNumber": 6, "description": "Rewrite $0.3$ in standard form.", "workingLatex": "0.3 = 3 \\times 10^{-1}", "explanation": "Moving the point one place right gives $A = 3$.", "diagram": null },
        { "stepNumber": 7, "description": "Absorb the extra power.", "workingLatex": "3 \\times 10^{-1} \\times 10^{4} = 3 \\times 10^{3}", "explanation": "Adding $-1$ and $4$ gives $3$.", "diagram": null },
        { "stepNumber": 8, "description": "State the final answer.", "workingLatex": "3 \\times 10^{3}", "explanation": "Now $A = 3$ is within range.", "diagram": null }
      ],
      "finalAnswer": "$3 \\times 10^{3}$"
    }
  },
  {
    "id": "gcse.number.standard-form.q035",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Standard form",
    "subtopicId": "gcse.number.standard-form",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "standard-form",
    "tags": ["standard form", "multiplication", "negative power", "adjusting form"],
    "questionText": "Work out $(7 \\times 10^{-3}) \\times (2 \\times 10^{-4})$, giving your answer in standard form.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Write out the calculation.", "workingLatex": "(7 \\times 10^{-3}) \\times (2 \\times 10^{-4})", "explanation": "Both numbers are small, with negative powers.", "diagram": null },
        { "stepNumber": 2, "description": "Reorder into numbers and powers.", "workingLatex": "= 7 \\times 2 \\times 10^{-3} \\times 10^{-4}", "explanation": "Grouping the front numbers and the powers separately.", "diagram": null },
        { "stepNumber": 3, "description": "Multiply the front numbers.", "workingLatex": "7 \\times 2 = 14", "explanation": "The front values multiply to $14$.", "diagram": null },
        { "stepNumber": 4, "description": "Add the indices.", "workingLatex": "10^{-3} \\times 10^{-4} = 10^{-7}", "explanation": "Adding $-3$ and $-4$ gives $-7$.", "diagram": null },
        { "stepNumber": 5, "description": "Combine the parts.", "workingLatex": "14 \\times 10^{-7}", "explanation": "The value is right but $14 \\ge 10$, so we adjust.", "diagram": null },
        { "stepNumber": 6, "description": "Rewrite $14$ in standard form.", "workingLatex": "14 = 1.4 \\times 10^{1}", "explanation": "Moving the point one place left gives $A = 1.4$.", "diagram": null },
        { "stepNumber": 7, "description": "Absorb the extra power.", "workingLatex": "1.4 \\times 10^{1} \\times 10^{-7} = 1.4 \\times 10^{-6}", "explanation": "Adding $1$ and $-7$ gives $-6$.", "diagram": null },
        { "stepNumber": 8, "description": "State the final answer.", "workingLatex": "1.4 \\times 10^{-6}", "explanation": "Now $A = 1.4$ satisfies the rule.", "diagram": null }
      ],
      "finalAnswer": "$1.4 \\times 10^{-6}$"
    }
  },
  {
    "id": "gcse.number.standard-form.q036",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Standard form",
    "subtopicId": "gcse.number.standard-form",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "standard-form",
    "tags": ["standard form", "division", "negative power", "decimals"],
    "questionText": "Work out $(5 \\times 10^{-5}) \\div (2 \\times 10^{-2})$, giving your answer in standard form.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Write as a fraction.", "workingLatex": "\\frac{5 \\times 10^{-5}}{2 \\times 10^{-2}}", "explanation": "Setting out the division of two small numbers.", "diagram": null },
        { "stepNumber": 2, "description": "Split the fraction.", "workingLatex": "= \\frac{5}{2} \\times \\frac{10^{-5}}{10^{-2}}", "explanation": "Divide numbers and powers separately.", "diagram": null },
        { "stepNumber": 3, "description": "Divide the front numbers.", "workingLatex": "\\frac{5}{2} = 2.5", "explanation": "Five divided by two is two and a half.", "diagram": null },
        { "stepNumber": 4, "description": "Subtract the indices.", "workingLatex": "10^{-5} \\div 10^{-2} = 10^{-5 - (-2)} = 10^{-3}", "explanation": "Subtracting $-2$ is the same as adding $2$, so $-5 + 2 = -3$.", "diagram": null },
        { "stepNumber": 5, "description": "Combine the parts.", "workingLatex": "2.5 \\times 10^{-3}", "explanation": "Bringing the number and power together.", "diagram": null },
        { "stepNumber": 6, "description": "Check $A$ is in range.", "workingLatex": "1 \\le 2.5 < 10", "explanation": "As $2.5$ lies between $1$ and $10$, the form is valid.", "diagram": null },
        { "stepNumber": 7, "description": "State the final answer.", "workingLatex": "2.5 \\times 10^{-3}", "explanation": "The division is complete in standard form.", "diagram": null }
      ],
      "finalAnswer": "$2.5 \\times 10^{-3}$"
    }
  },
  {
    "id": "gcse.number.standard-form.q037",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Standard form",
    "subtopicId": "gcse.number.standard-form",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "standard-form",
    "tags": ["standard form", "addition", "same power", "non-calculator"],
    "questionText": "Work out $(3 \\times 10^{4}) + (5 \\times 10^{4})$, giving your answer in standard form.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Write out the calculation.", "workingLatex": "(3 \\times 10^{4}) + (5 \\times 10^{4})", "explanation": "For addition we must look at the powers of ten first.", "diagram": null },
        { "stepNumber": 2, "description": "Check the powers match.", "workingLatex": "10^{4} = 10^{4}", "explanation": "Both numbers already share the same power, so they count the same-sized units.", "diagram": null },
        { "stepNumber": 3, "description": "Treat $10^{4}$ as a common factor.", "workingLatex": "(3 + 5) \\times 10^{4}", "explanation": "Because the powers match, we can simply add the front numbers, like adding $3$ lots and $5$ lots of the same thing.", "diagram": null },
        { "stepNumber": 4, "description": "Add the front numbers.", "workingLatex": "3 + 5 = 8", "explanation": "Three ten-thousands plus five ten-thousands make eight ten-thousands.", "diagram": null },
        { "stepNumber": 5, "description": "Write the combined value.", "workingLatex": "8 \\times 10^{4}", "explanation": "Keeping the shared power and using the new front number.", "diagram": null },
        { "stepNumber": 6, "description": "Check $A$ is in range.", "workingLatex": "1 \\le 8 < 10", "explanation": "As $8$ is between $1$ and $10$, the form is valid.", "diagram": null },
        { "stepNumber": 7, "description": "State the final answer.", "workingLatex": "8 \\times 10^{4}", "explanation": "Check: $30\\,000 + 50\\,000 = 80\\,000$.", "diagram": null }
      ],
      "finalAnswer": "$8 \\times 10^{4}$"
    }
  },
  {
    "id": "gcse.number.standard-form.q038",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Standard form",
    "subtopicId": "gcse.number.standard-form",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "standard-form",
    "tags": ["standard form", "addition", "different powers", "non-calculator"],
    "questionText": "Work out $(4 \\times 10^{5}) + (3 \\times 10^{4})$, giving your answer in standard form.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Write out the calculation.", "workingLatex": "(4 \\times 10^{5}) + (3 \\times 10^{4})", "explanation": "First compare the powers of ten.", "diagram": null },
        { "stepNumber": 2, "description": "Notice the powers differ.", "workingLatex": "10^{5} \\ne 10^{4}", "explanation": "The numbers count different-sized units, so we cannot just add the front numbers yet.", "diagram": null },
        { "stepNumber": 3, "description": "Rewrite the second term with power $10^{5}$.", "workingLatex": "3 \\times 10^{4} = 0.3 \\times 10^{5}", "explanation": "Raising the power by one is balanced by making the front number ten times smaller, keeping the value the same.", "diagram": null },
        { "stepNumber": 4, "description": "Rewrite the sum with a common power.", "workingLatex": "(4 \\times 10^{5}) + (0.3 \\times 10^{5})", "explanation": "Now both terms share $10^{5}$ and can be combined.", "diagram": null },
        { "stepNumber": 5, "description": "Factor out $10^{5}$.", "workingLatex": "(4 + 0.3) \\times 10^{5}", "explanation": "With a common power we add the front numbers.", "diagram": null },
        { "stepNumber": 6, "description": "Add the front numbers.", "workingLatex": "4 + 0.3 = 4.3", "explanation": "Four plus three tenths is $4.3$.", "diagram": null },
        { "stepNumber": 7, "description": "Write the combined value.", "workingLatex": "4.3 \\times 10^{5}", "explanation": "Using the shared power with the new front number.", "diagram": null },
        { "stepNumber": 8, "description": "Check $A$ is in range.", "workingLatex": "1 \\le 4.3 < 10", "explanation": "As $4.3$ is between $1$ and $10$, the form is valid.", "diagram": null },
        { "stepNumber": 9, "description": "State the final answer.", "workingLatex": "4.3 \\times 10^{5}", "explanation": "Check: $400\\,000 + 30\\,000 = 430\\,000$.", "diagram": null }
      ],
      "finalAnswer": "$4.3 \\times 10^{5}$"
    }
  },
  {
    "id": "gcse.number.standard-form.q039",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Standard form",
    "subtopicId": "gcse.number.standard-form",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "standard-form",
    "tags": ["standard form", "subtraction", "same power", "non-calculator"],
    "questionText": "Work out $(7 \\times 10^{6}) - (2 \\times 10^{6})$, giving your answer in standard form.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Write out the calculation.", "workingLatex": "(7 \\times 10^{6}) - (2 \\times 10^{6})", "explanation": "Check the powers before subtracting.", "diagram": null },
        { "stepNumber": 2, "description": "Confirm the powers match.", "workingLatex": "10^{6} = 10^{6}", "explanation": "Both terms use the same power, so we can subtract the front numbers directly.", "diagram": null },
        { "stepNumber": 3, "description": "Factor out $10^{6}$.", "workingLatex": "(7 - 2) \\times 10^{6}", "explanation": "The shared power behaves like a common unit.", "diagram": null },
        { "stepNumber": 4, "description": "Subtract the front numbers.", "workingLatex": "7 - 2 = 5", "explanation": "Seven millions take away two millions leaves five millions.", "diagram": null },
        { "stepNumber": 5, "description": "Write the result.", "workingLatex": "5 \\times 10^{6}", "explanation": "Keeping the shared power with the new front number.", "diagram": null },
        { "stepNumber": 6, "description": "Check $A$ is in range.", "workingLatex": "1 \\le 5 < 10", "explanation": "The front value is valid.", "diagram": null },
        { "stepNumber": 7, "description": "State the final answer.", "workingLatex": "5 \\times 10^{6}", "explanation": "Check: $7\\,000\\,000 - 2\\,000\\,000 = 5\\,000\\,000$.", "diagram": null }
      ],
      "finalAnswer": "$5 \\times 10^{6}$"
    }
  },
  {
    "id": "gcse.number.standard-form.q040",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Standard form",
    "subtopicId": "gcse.number.standard-form",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "standard-form",
    "tags": ["standard form", "subtraction", "different powers", "negative power"],
    "questionText": "Work out $(5 \\times 10^{-3}) - (2 \\times 10^{-4})$, giving your answer in standard form.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Write out the calculation.", "workingLatex": "(5 \\times 10^{-3}) - (2 \\times 10^{-4})", "explanation": "Compare the powers first.", "diagram": null },
        { "stepNumber": 2, "description": "Notice the powers differ.", "workingLatex": "10^{-3} \\ne 10^{-4}", "explanation": "The two terms use different units, so we make the powers match before subtracting.", "diagram": null },
        { "stepNumber": 3, "description": "Rewrite the second term with power $10^{-3}$.", "workingLatex": "2 \\times 10^{-4} = 0.2 \\times 10^{-3}", "explanation": "Raising the power from $-4$ to $-3$ is balanced by dividing the front number by ten.", "diagram": null },
        { "stepNumber": 4, "description": "Rewrite the subtraction.", "workingLatex": "(5 \\times 10^{-3}) - (0.2 \\times 10^{-3})", "explanation": "Now both terms share $10^{-3}$.", "diagram": null },
        { "stepNumber": 5, "description": "Factor out $10^{-3}$.", "workingLatex": "(5 - 0.2) \\times 10^{-3}", "explanation": "With a common power we subtract the front numbers.", "diagram": null },
        { "stepNumber": 6, "description": "Subtract the front numbers.", "workingLatex": "5 - 0.2 = 4.8", "explanation": "Five minus two tenths is $4.8$.", "diagram": null },
        { "stepNumber": 7, "description": "Write the result.", "workingLatex": "4.8 \\times 10^{-3}", "explanation": "Using the shared power with the new front number.", "diagram": null },
        { "stepNumber": 8, "description": "Check $A$ is in range.", "workingLatex": "1 \\le 4.8 < 10", "explanation": "The front value is valid.", "diagram": null },
        { "stepNumber": 9, "description": "State the final answer.", "workingLatex": "4.8 \\times 10^{-3}", "explanation": "Check: $0.005 - 0.0002 = 0.0048$.", "diagram": null }
      ],
      "finalAnswer": "$4.8 \\times 10^{-3}$"
    }
  },
  {
    "id": "gcse.number.standard-form.q041",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Standard form",
    "subtopicId": "gcse.number.standard-form",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "standard-form",
    "tags": ["standard form", "addition", "adjusting form", "same power"],
    "questionText": "Work out $(9 \\times 10^{3}) + (8 \\times 10^{3})$, giving your answer in standard form.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Write out the calculation.", "workingLatex": "(9 \\times 10^{3}) + (8 \\times 10^{3})", "explanation": "Check the powers before adding.", "diagram": null },
        { "stepNumber": 2, "description": "Confirm the powers match.", "workingLatex": "10^{3} = 10^{3}", "explanation": "Both terms share the same power, so the front numbers can be added.", "diagram": null },
        { "stepNumber": 3, "description": "Factor out $10^{3}$.", "workingLatex": "(9 + 8) \\times 10^{3}", "explanation": "The common power acts as a shared unit.", "diagram": null },
        { "stepNumber": 4, "description": "Add the front numbers.", "workingLatex": "9 + 8 = 17", "explanation": "Nine thousands plus eight thousands make seventeen thousands.", "diagram": null },
        { "stepNumber": 5, "description": "Write the combined value.", "workingLatex": "17 \\times 10^{3}", "explanation": "Correct in value but $17 \\ge 10$, so we adjust.", "diagram": null },
        { "stepNumber": 6, "description": "Rewrite $17$ in standard form.", "workingLatex": "17 = 1.7 \\times 10^{1}", "explanation": "Moving the point one place left gives $A = 1.7$.", "diagram": null },
        { "stepNumber": 7, "description": "Absorb the extra power.", "workingLatex": "1.7 \\times 10^{1} \\times 10^{3} = 1.7 \\times 10^{4}", "explanation": "Adding $1$ and $3$ gives $4$.", "diagram": null },
        { "stepNumber": 8, "description": "State the final answer.", "workingLatex": "1.7 \\times 10^{4}", "explanation": "Check: $9000 + 8000 = 17\\,000$.", "diagram": null }
      ],
      "finalAnswer": "$1.7 \\times 10^{4}$"
    }
  },
  {
    "id": "gcse.number.standard-form.q042",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Standard form",
    "subtopicId": "gcse.number.standard-form",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "standard-form",
    "tags": ["standard form", "addition", "different powers", "decimals"],
    "questionText": "Work out $(6.2 \\times 10^{5}) + (7 \\times 10^{4})$, giving your answer in standard form.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Write out the calculation.", "workingLatex": "(6.2 \\times 10^{5}) + (7 \\times 10^{4})", "explanation": "Compare the powers before adding.", "diagram": null },
        { "stepNumber": 2, "description": "Notice the powers differ.", "workingLatex": "10^{5} \\ne 10^{4}", "explanation": "We rewrite one term so both share the same power.", "diagram": null },
        { "stepNumber": 3, "description": "Rewrite the second term with power $10^{5}$.", "workingLatex": "7 \\times 10^{4} = 0.7 \\times 10^{5}", "explanation": "Raising the power by one is balanced by dividing the front number by ten.", "diagram": null },
        { "stepNumber": 4, "description": "Rewrite the sum.", "workingLatex": "(6.2 \\times 10^{5}) + (0.7 \\times 10^{5})", "explanation": "Both terms now share $10^{5}$.", "diagram": null },
        { "stepNumber": 5, "description": "Factor out $10^{5}$.", "workingLatex": "(6.2 + 0.7) \\times 10^{5}", "explanation": "With a common power we add the front numbers.", "diagram": null },
        { "stepNumber": 6, "description": "Add the front numbers.", "workingLatex": "6.2 + 0.7 = 6.9", "explanation": "Adding the tenths gives $6.9$.", "diagram": null },
        { "stepNumber": 7, "description": "Write the result.", "workingLatex": "6.9 \\times 10^{5}", "explanation": "Using the shared power with the new front number.", "diagram": null },
        { "stepNumber": 8, "description": "Check $A$ is in range.", "workingLatex": "1 \\le 6.9 < 10", "explanation": "The front value is valid.", "diagram": null },
        { "stepNumber": 9, "description": "State the final answer.", "workingLatex": "6.9 \\times 10^{5}", "explanation": "Check: $620\\,000 + 70\\,000 = 690\\,000$.", "diagram": null }
      ],
      "finalAnswer": "$6.9 \\times 10^{5}$"
    }
  },
  {
    "id": "gcse.number.standard-form.q043",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Standard form",
    "subtopicId": "gcse.number.standard-form",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "standard-form",
    "tags": ["standard form", "powers", "squaring", "index laws"],
    "questionText": "Work out $(2 \\times 10^{3})^{2}$, giving your answer in standard form.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Write out the calculation.", "workingLatex": "(2 \\times 10^{3})^{2}", "explanation": "Squaring means multiplying the whole expression by itself.", "diagram": null },
        { "stepNumber": 2, "description": "Apply the power to each factor.", "workingLatex": "= 2^{2} \\times (10^{3})^{2}", "explanation": "A power outside a product applies to every factor inside it.", "diagram": null },
        { "stepNumber": 3, "description": "Square the front number.", "workingLatex": "2^{2} = 4", "explanation": "Two squared is four.", "diagram": null },
        { "stepNumber": 4, "description": "Recall the power-of-a-power law.", "workingLatex": "(10^{a})^{b} = 10^{ab}", "explanation": "Raising a power to another power multiplies the indices.", "diagram": null },
        { "stepNumber": 5, "description": "Apply it to the power of ten.", "workingLatex": "(10^{3})^{2} = 10^{6}", "explanation": "Multiplying $3$ by $2$ gives $6$.", "diagram": null },
        { "stepNumber": 6, "description": "Combine the parts.", "workingLatex": "4 \\times 10^{6}", "explanation": "Joining the squared number and the squared power.", "diagram": null },
        { "stepNumber": 7, "description": "Check $A$ is in range.", "workingLatex": "1 \\le 4 < 10", "explanation": "The front value is valid.", "diagram": null },
        { "stepNumber": 8, "description": "State the final answer.", "workingLatex": "4 \\times 10^{6}", "explanation": "Check: $(2000)^{2} = 4\\,000\\,000$.", "diagram": null }
      ],
      "finalAnswer": "$4 \\times 10^{6}$"
    }
  },
  {
    "id": "gcse.number.standard-form.q044",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Standard form",
    "subtopicId": "gcse.number.standard-form",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "standard-form",
    "tags": ["standard form", "powers", "squaring", "negative power"],
    "questionText": "Work out $(3 \\times 10^{-4})^{2}$, giving your answer in standard form.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Write out the calculation.", "workingLatex": "(3 \\times 10^{-4})^{2}", "explanation": "We square a number written in standard form.", "diagram": null },
        { "stepNumber": 2, "description": "Apply the power to each factor.", "workingLatex": "= 3^{2} \\times (10^{-4})^{2}", "explanation": "The outer power reaches every factor inside the bracket.", "diagram": null },
        { "stepNumber": 3, "description": "Square the front number.", "workingLatex": "3^{2} = 9", "explanation": "Three squared is nine.", "diagram": null },
        { "stepNumber": 4, "description": "Multiply the indices.", "workingLatex": "(10^{-4})^{2} = 10^{-8}", "explanation": "Multiplying $-4$ by $2$ gives $-8$.", "diagram": null },
        { "stepNumber": 5, "description": "Combine the parts.", "workingLatex": "9 \\times 10^{-8}", "explanation": "Joining the squared number and squared power.", "diagram": null },
        { "stepNumber": 6, "description": "Check $A$ is in range.", "workingLatex": "1 \\le 9 < 10", "explanation": "The front value is valid, so no adjustment is needed.", "diagram": null },
        { "stepNumber": 7, "description": "State the final answer.", "workingLatex": "9 \\times 10^{-8}", "explanation": "Check: $(0.0003)^{2} = 0.00000009$.", "diagram": null }
      ],
      "finalAnswer": "$9 \\times 10^{-8}$"
    }
  },
  {
    "id": "gcse.number.standard-form.q045",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Standard form",
    "subtopicId": "gcse.number.standard-form",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "standard-form",
    "tags": ["standard form", "square root", "index laws", "non-calculator"],
    "questionText": "Work out $\\sqrt{9 \\times 10^{8}}$, giving your answer in standard form.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Write out the calculation.", "workingLatex": "\\sqrt{9 \\times 10^{8}}", "explanation": "We take the square root of a number in standard form.", "diagram": null },
        { "stepNumber": 2, "description": "Split the root over the product.", "workingLatex": "= \\sqrt{9} \\times \\sqrt{10^{8}}", "explanation": "The square root of a product equals the product of the square roots.", "diagram": null },
        { "stepNumber": 3, "description": "Take the root of the front number.", "workingLatex": "\\sqrt{9} = 3", "explanation": "Three squared is nine, so the root is three.", "diagram": null },
        { "stepNumber": 4, "description": "Recall rooting a power halves the index.", "workingLatex": "\\sqrt{10^{a}} = 10^{a/2}", "explanation": "A square root is the same as a power of one half, which halves the index.", "diagram": null },
        { "stepNumber": 5, "description": "Halve the index.", "workingLatex": "\\sqrt{10^{8}} = 10^{4}", "explanation": "Half of $8$ is $4$.", "diagram": null },
        { "stepNumber": 6, "description": "Combine the parts.", "workingLatex": "3 \\times 10^{4}", "explanation": "Joining the two roots.", "diagram": null },
        { "stepNumber": 7, "description": "Check $A$ is in range.", "workingLatex": "1 \\le 3 < 10", "explanation": "The front value is valid.", "diagram": null },
        { "stepNumber": 8, "description": "State the final answer.", "workingLatex": "3 \\times 10^{4}", "explanation": "Check: $(30\\,000)^{2} = 9 \\times 10^{8}$.", "diagram": null }
      ],
      "finalAnswer": "$3 \\times 10^{4}$"
    }
  },
  {
    "id": "gcse.number.standard-form.q046",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Standard form",
    "subtopicId": "gcse.number.standard-form",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "standard-form",
    "tags": ["standard form", "context", "multiplication", "measurement"],
    "questionText": "A single grain of sand has a mass of about $3 \\times 10^{-5}$ kg. A bucket holds $2 \\times 10^{6}$ grains. Work out the total mass of sand in the bucket, in standard form.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Decide on the operation.", "workingLatex": "\\text{total} = \\text{mass per grain} \\times \\text{number of grains}", "explanation": "Total mass is the mass of one grain multiplied by how many grains there are.", "diagram": null },
        { "stepNumber": 2, "description": "Write out the calculation.", "workingLatex": "(3 \\times 10^{-5}) \\times (2 \\times 10^{6})", "explanation": "Substituting the two given values.", "diagram": null },
        { "stepNumber": 3, "description": "Reorder into numbers and powers.", "workingLatex": "= 3 \\times 2 \\times 10^{-5} \\times 10^{6}", "explanation": "Grouping the front numbers and the powers.", "diagram": null },
        { "stepNumber": 4, "description": "Multiply the front numbers.", "workingLatex": "3 \\times 2 = 6", "explanation": "The front values give $6$.", "diagram": null },
        { "stepNumber": 5, "description": "Add the indices.", "workingLatex": "10^{-5} \\times 10^{6} = 10^{1}", "explanation": "Adding $-5$ and $6$ gives $1$.", "diagram": null },
        { "stepNumber": 6, "description": "Combine the parts.", "workingLatex": "6 \\times 10^{1}", "explanation": "Joining number and power.", "diagram": null },
        { "stepNumber": 7, "description": "Check $A$ is in range.", "workingLatex": "1 \\le 6 < 10", "explanation": "The front value is valid.", "diagram": null },
        { "stepNumber": 8, "description": "State the final answer.", "workingLatex": "6 \\times 10^{1} \\text{ kg} = 60 \\text{ kg}", "explanation": "The bucket holds about $60$ kg of sand.", "diagram": null }
      ],
      "finalAnswer": "$6 \\times 10^{1}$ kg ($60$ kg)"
    }
  },
  {
    "id": "gcse.number.standard-form.q047",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Standard form",
    "subtopicId": "gcse.number.standard-form",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "standard-form",
    "tags": ["standard form", "context", "division", "rate"],
    "questionText": "A printing press produces $4 \\times 10^{7}$ leaflets using $2 \\times 10^{4}$ sheets of paper. How many leaflets are printed per sheet? Give your answer in standard form.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Decide on the operation.", "workingLatex": "\\text{per sheet} = \\text{leaflets} \\div \\text{sheets}", "explanation": "Sharing the total leaflets equally between the sheets gives the number per sheet.", "diagram": null },
        { "stepNumber": 2, "description": "Write as a fraction.", "workingLatex": "\\frac{4 \\times 10^{7}}{2 \\times 10^{4}}", "explanation": "Substituting the given values.", "diagram": null },
        { "stepNumber": 3, "description": "Split the fraction.", "workingLatex": "= \\frac{4}{2} \\times \\frac{10^{7}}{10^{4}}", "explanation": "Divide the numbers and the powers separately.", "diagram": null },
        { "stepNumber": 4, "description": "Divide the front numbers.", "workingLatex": "\\frac{4}{2} = 2", "explanation": "Four divided by two is two.", "diagram": null },
        { "stepNumber": 5, "description": "Subtract the indices.", "workingLatex": "10^{7} \\div 10^{4} = 10^{3}", "explanation": "Subtracting $4$ from $7$ gives $3$.", "diagram": null },
        { "stepNumber": 6, "description": "Combine the parts.", "workingLatex": "2 \\times 10^{3}", "explanation": "Joining number and power.", "diagram": null },
        { "stepNumber": 7, "description": "Check $A$ is in range.", "workingLatex": "1 \\le 2 < 10", "explanation": "The front value is valid.", "diagram": null },
        { "stepNumber": 8, "description": "State the final answer.", "workingLatex": "2 \\times 10^{3} \\text{ leaflets per sheet} = 2000", "explanation": "Each sheet produces $2000$ leaflets.", "diagram": null }
      ],
      "finalAnswer": "$2 \\times 10^{3}$ leaflets per sheet"
    }
  },
  {
    "id": "gcse.number.standard-form.q048",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Standard form",
    "subtopicId": "gcse.number.standard-form",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "standard-form",
    "tags": ["standard form", "addition", "three terms", "adjusting form"],
    "questionText": "Work out $(4 \\times 10^{5}) + (4 \\times 10^{5}) + (2 \\times 10^{5})$, giving your answer in standard form.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Write out the calculation.", "workingLatex": "(4 \\times 10^{5}) + (4 \\times 10^{5}) + (2 \\times 10^{5})", "explanation": "Three terms, so first check whether the powers match.", "diagram": null },
        { "stepNumber": 2, "description": "Confirm the powers match.", "workingLatex": "10^{5} = 10^{5} = 10^{5}", "explanation": "All three share $10^{5}$, so the front numbers can be added directly.", "diagram": null },
        { "stepNumber": 3, "description": "Factor out $10^{5}$.", "workingLatex": "(4 + 4 + 2) \\times 10^{5}", "explanation": "The common power acts as a shared unit.", "diagram": null },
        { "stepNumber": 4, "description": "Add the front numbers.", "workingLatex": "4 + 4 + 2 = 10", "explanation": "The three front values total $10$.", "diagram": null },
        { "stepNumber": 5, "description": "Write the combined value.", "workingLatex": "10 \\times 10^{5}", "explanation": "Correct in value, but $A = 10$ is not less than $10$, so we adjust.", "diagram": null },
        { "stepNumber": 6, "description": "Rewrite $10$ as a power of ten.", "workingLatex": "10 = 1 \\times 10^{1}", "explanation": "Ten is exactly one factor of ten, giving $A = 1$.", "diagram": null },
        { "stepNumber": 7, "description": "Absorb the extra power.", "workingLatex": "1 \\times 10^{1} \\times 10^{5} = 1 \\times 10^{6}", "explanation": "Adding $1$ and $5$ gives $6$.", "diagram": null },
        { "stepNumber": 8, "description": "State the final answer.", "workingLatex": "1 \\times 10^{6}", "explanation": "Check: $400\\,000 + 400\\,000 + 200\\,000 = 1\\,000\\,000$.", "diagram": null }
      ],
      "finalAnswer": "$1 \\times 10^{6}$"
    }
  },
  {
    "id": "gcse.number.standard-form.q049",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Standard form",
    "subtopicId": "gcse.number.standard-form",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "standard-form",
    "tags": ["standard form", "division", "mixed signs", "index laws"],
    "questionText": "Work out $(8 \\times 10^{7}) \\div (2 \\times 10^{-3})$, giving your answer in standard form.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Write as a fraction.", "workingLatex": "\\frac{8 \\times 10^{7}}{2 \\times 10^{-3}}", "explanation": "The denominator has a negative power, so care is needed with the indices.", "diagram": null },
        { "stepNumber": 2, "description": "Split the fraction.", "workingLatex": "= \\frac{8}{2} \\times \\frac{10^{7}}{10^{-3}}", "explanation": "Divide the front numbers and the powers separately.", "diagram": null },
        { "stepNumber": 3, "description": "Divide the front numbers.", "workingLatex": "\\frac{8}{2} = 4", "explanation": "Eight divided by two is four.", "diagram": null },
        { "stepNumber": 4, "description": "Subtract the indices carefully.", "workingLatex": "10^{7} \\div 10^{-3} = 10^{7 - (-3)}", "explanation": "Subtracting a negative index means adding, so the power grows.", "diagram": null },
        { "stepNumber": 5, "description": "Simplify the index.", "workingLatex": "10^{7 + 3} = 10^{10}", "explanation": "Seven plus three gives ten.", "diagram": null },
        { "stepNumber": 6, "description": "Combine the parts.", "workingLatex": "4 \\times 10^{10}", "explanation": "Joining number and power.", "diagram": null },
        { "stepNumber": 7, "description": "Check $A$ is in range.", "workingLatex": "1 \\le 4 < 10", "explanation": "The front value is valid.", "diagram": null },
        { "stepNumber": 8, "description": "State the final answer.", "workingLatex": "4 \\times 10^{10}", "explanation": "Dividing by a small number makes the result much larger, as expected.", "diagram": null }
      ],
      "finalAnswer": "$4 \\times 10^{10}$"
    }
  },
  {
    "id": "gcse.number.standard-form.q050",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Standard form",
    "subtopicId": "gcse.number.standard-form",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "standard-form",
    "tags": ["standard form", "multiplication", "decimals", "mixed signs"],
    "questionText": "Work out $(1.5 \\times 10^{-2}) \\times (4 \\times 10^{6})$, giving your answer in standard form.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Write out the calculation.", "workingLatex": "(1.5 \\times 10^{-2}) \\times (4 \\times 10^{6})", "explanation": "Set out the product ready to group.", "diagram": null },
        { "stepNumber": 2, "description": "Reorder into numbers and powers.", "workingLatex": "= 1.5 \\times 4 \\times 10^{-2} \\times 10^{6}", "explanation": "Ordinary numbers together, powers together.", "diagram": null },
        { "stepNumber": 3, "description": "Multiply the front numbers.", "workingLatex": "1.5 \\times 4 = 6", "explanation": "One and a half fours make six.", "diagram": null },
        { "stepNumber": 4, "description": "Add the indices.", "workingLatex": "10^{-2} \\times 10^{6} = 10^{4}", "explanation": "Adding $-2$ and $6$ gives $4$.", "diagram": null },
        { "stepNumber": 5, "description": "Combine the parts.", "workingLatex": "6 \\times 10^{4}", "explanation": "Joining number and power.", "diagram": null },
        { "stepNumber": 6, "description": "Check $A$ is in range.", "workingLatex": "1 \\le 6 < 10", "explanation": "The front value is valid.", "diagram": null },
        { "stepNumber": 7, "description": "State the final answer.", "workingLatex": "6 \\times 10^{4}", "explanation": "Check: $0.015 \\times 4\\,000\\,000 = 60\\,000$.", "diagram": null }
      ],
      "finalAnswer": "$6 \\times 10^{4}$"
    }
  },
  {
    "id": "gcse.number.standard-form.q051",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Standard form",
    "subtopicId": "gcse.number.standard-form",
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "standard-form",
    "tags": ["standard form", "combined operations", "multiplication", "division"],
    "questionText": "Work out $\\dfrac{(6 \\times 10^{5}) \\times (4 \\times 10^{3})}{8 \\times 10^{-2}}$, giving your answer in standard form.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Identify the structure.", "workingLatex": "\\frac{(6 \\times 10^{5}) \\times (4 \\times 10^{3})}{8 \\times 10^{-2}}", "explanation": "There is a multiplication on top and a division underneath, so we tackle the numerator first.", "diagram": null },
        { "stepNumber": 2, "description": "Set up the numerator product.", "workingLatex": "(6 \\times 10^{5}) \\times (4 \\times 10^{3})", "explanation": "Working out the top as a single number in standard form makes the division simpler.", "diagram": null },
        { "stepNumber": 3, "description": "Reorder into numbers and powers.", "workingLatex": "= 6 \\times 4 \\times 10^{5} \\times 10^{3}", "explanation": "Grouping the front numbers and the powers separately.", "diagram": null },
        { "stepNumber": 4, "description": "Multiply the front numbers.", "workingLatex": "6 \\times 4 = 24", "explanation": "The front values give $24$.", "diagram": null },
        { "stepNumber": 5, "description": "Add the indices.", "workingLatex": "10^{5} \\times 10^{3} = 10^{8}", "explanation": "Adding $5$ and $3$ gives $8$.", "diagram": null },
        { "stepNumber": 6, "description": "Write the numerator.", "workingLatex": "24 \\times 10^{8}", "explanation": "This is the top line, though not yet in tidy standard form.", "diagram": null },
        { "stepNumber": 7, "description": "Set up the division.", "workingLatex": "\\frac{24 \\times 10^{8}}{8 \\times 10^{-2}}", "explanation": "Now divide the numerator by the denominator.", "diagram": null },
        { "stepNumber": 8, "description": "Split the fraction.", "workingLatex": "= \\frac{24}{8} \\times \\frac{10^{8}}{10^{-2}}", "explanation": "Divide the front numbers and the powers separately.", "diagram": null },
        { "stepNumber": 9, "description": "Divide the front numbers.", "workingLatex": "\\frac{24}{8} = 3", "explanation": "Twenty-four divided by eight is three.", "diagram": null },
        { "stepNumber": 10, "description": "Subtract the indices carefully.", "workingLatex": "10^{8} \\div 10^{-2} = 10^{8 - (-2)}", "explanation": "Subtracting a negative index means adding, so the power grows.", "diagram": null },
        { "stepNumber": 11, "description": "Simplify the index.", "workingLatex": "10^{8 + 2} = 10^{10}", "explanation": "Eight plus two gives ten.", "diagram": null },
        { "stepNumber": 12, "description": "Combine the parts.", "workingLatex": "3 \\times 10^{10}", "explanation": "Joining number and power.", "diagram": null },
        { "stepNumber": 13, "description": "Check $A$ is in range.", "workingLatex": "1 \\le 3 < 10", "explanation": "The front value is valid, so no adjustment is needed.", "diagram": null },
        { "stepNumber": 14, "description": "State the final answer.", "workingLatex": "3 \\times 10^{10}", "explanation": "The combined calculation is complete in standard form.", "diagram": null }
      ],
      "finalAnswer": "$3 \\times 10^{10}$"
    }
  },
  {
    "id": "gcse.number.standard-form.q052",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Standard form",
    "subtopicId": "gcse.number.standard-form",
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "standard-form",
    "tags": ["standard form", "combined operations", "adjusting form", "multiplication"],
    "questionText": "Work out $\\dfrac{(5 \\times 10^{6}) \\times (8 \\times 10^{4})}{2 \\times 10^{7}}$, giving your answer in standard form.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Identify the structure.", "workingLatex": "\\frac{(5 \\times 10^{6}) \\times (8 \\times 10^{4})}{2 \\times 10^{7}}", "explanation": "Multiply the numerator first, then divide by the denominator.", "diagram": null },
        { "stepNumber": 2, "description": "Set up the numerator.", "workingLatex": "(5 \\times 10^{6}) \\times (8 \\times 10^{4})", "explanation": "We simplify the top before dividing.", "diagram": null },
        { "stepNumber": 3, "description": "Reorder into numbers and powers.", "workingLatex": "= 5 \\times 8 \\times 10^{6} \\times 10^{4}", "explanation": "Grouping like with like.", "diagram": null },
        { "stepNumber": 4, "description": "Multiply the front numbers.", "workingLatex": "5 \\times 8 = 40", "explanation": "The front values give $40$.", "diagram": null },
        { "stepNumber": 5, "description": "Add the indices.", "workingLatex": "10^{6} \\times 10^{4} = 10^{10}", "explanation": "Adding $6$ and $4$ gives $10$.", "diagram": null },
        { "stepNumber": 6, "description": "Write the numerator.", "workingLatex": "40 \\times 10^{10}", "explanation": "Correct in value, but not tidy standard form.", "diagram": null },
        { "stepNumber": 7, "description": "Adjust the numerator to standard form.", "workingLatex": "40 \\times 10^{10} = 4 \\times 10^{11}", "explanation": "Since $40 = 4 \\times 10^{1}$, we add one to the index.", "diagram": null },
        { "stepNumber": 8, "description": "Set up the division.", "workingLatex": "\\frac{4 \\times 10^{11}}{2 \\times 10^{7}}", "explanation": "Now divide by the denominator.", "diagram": null },
        { "stepNumber": 9, "description": "Split the fraction.", "workingLatex": "= \\frac{4}{2} \\times \\frac{10^{11}}{10^{7}}", "explanation": "Divide numbers and powers separately.", "diagram": null },
        { "stepNumber": 10, "description": "Divide the front numbers.", "workingLatex": "\\frac{4}{2} = 2", "explanation": "Four divided by two is two.", "diagram": null },
        { "stepNumber": 11, "description": "Subtract the indices.", "workingLatex": "10^{11} \\div 10^{7} = 10^{4}", "explanation": "Subtracting $7$ from $11$ gives $4$.", "diagram": null },
        { "stepNumber": 12, "description": "Combine the parts.", "workingLatex": "2 \\times 10^{4}", "explanation": "Joining number and power.", "diagram": null },
        { "stepNumber": 13, "description": "Check $A$ is in range.", "workingLatex": "1 \\le 2 < 10", "explanation": "The front value is valid.", "diagram": null },
        { "stepNumber": 14, "description": "State the final answer.", "workingLatex": "2 \\times 10^{4}", "explanation": "The combined calculation is complete in standard form.", "diagram": null }
      ],
      "finalAnswer": "$2 \\times 10^{4}$"
    }
  },
  {
    "id": "gcse.number.standard-form.q053",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Standard form",
    "subtopicId": "gcse.number.standard-form",
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "standard-form",
    "tags": ["standard form", "context", "speed distance time", "conversion"],
    "questionText": "Light travels at $3 \\times 10^{8}$ m/s. (a) How far does light travel in $5 \\times 10^{2}$ seconds? Give your answer in standard form. (b) Write this distance as an ordinary number.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall the relationship.", "workingLatex": "\\text{distance} = \\text{speed} \\times \\text{time}", "explanation": "Distance covered is how fast you go multiplied by how long you travel.", "diagram": null },
        { "stepNumber": 2, "description": "Substitute the values.", "workingLatex": "= (3 \\times 10^{8}) \\times (5 \\times 10^{2})", "explanation": "Putting in the speed and the time.", "diagram": null },
        { "stepNumber": 3, "description": "Reorder into numbers and powers.", "workingLatex": "= 3 \\times 5 \\times 10^{8} \\times 10^{2}", "explanation": "Grouping the front numbers and the powers.", "diagram": null },
        { "stepNumber": 4, "description": "Multiply the front numbers.", "workingLatex": "3 \\times 5 = 15", "explanation": "The front values give $15$.", "diagram": null },
        { "stepNumber": 5, "description": "Add the indices.", "workingLatex": "10^{8} \\times 10^{2} = 10^{10}", "explanation": "Adding $8$ and $2$ gives $10$.", "diagram": null },
        { "stepNumber": 6, "description": "Combine the parts.", "workingLatex": "15 \\times 10^{10}", "explanation": "Correct in value, but $15 \\ge 10$.", "diagram": null },
        { "stepNumber": 7, "description": "Adjust to standard form.", "workingLatex": "15 = 1.5 \\times 10^{1}", "explanation": "Moving the point one place left gives $A = 1.5$.", "diagram": null },
        { "stepNumber": 8, "description": "Absorb the extra power.", "workingLatex": "1.5 \\times 10^{1} \\times 10^{10} = 1.5 \\times 10^{11}", "explanation": "Adding $1$ and $10$ gives $11$.", "diagram": null },
        { "stepNumber": 9, "description": "State the part (a) answer.", "workingLatex": "1.5 \\times 10^{11} \\text{ m}", "explanation": "This is the distance in standard form.", "diagram": null },
        { "stepNumber": 10, "description": "Begin part (b).", "workingLatex": "n = 11 > 0", "explanation": "A positive power means a large number, so we move the decimal point to the right.", "diagram": null },
        { "stepNumber": 11, "description": "Move the point 11 places right.", "workingLatex": "1.5 \\to 150000000000", "explanation": "There is one digit after the point, so we add ten zeros to make eleven moves.", "diagram": null },
        { "stepNumber": 12, "description": "Write the ordinary number.", "workingLatex": "1.5 \\times 10^{11} = 150\\,000\\,000\\,000", "explanation": "This is one hundred and fifty billion metres.", "diagram": null },
        { "stepNumber": 13, "description": "State both answers.", "workingLatex": "1.5 \\times 10^{11} \\text{ m} = 150\\,000\\,000\\,000 \\text{ m}", "explanation": "The two forms describe the same distance.", "diagram": null }
      ],
      "finalAnswer": "(a) $1.5 \\times 10^{11}$ m; (b) $150\\,000\\,000\\,000$ m"
    }
  },
  {
    "id": "gcse.number.standard-form.q054",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Standard form",
    "subtopicId": "gcse.number.standard-form",
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "standard-form",
    "tags": ["standard form", "comparison", "division", "adjusting form"],
    "questionText": "How many times larger is $3 \\times 10^{8}$ than $6 \\times 10^{2}$? Give your answer in standard form.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Interpret 'how many times larger'.", "workingLatex": "\\text{answer} = \\frac{3 \\times 10^{8}}{6 \\times 10^{2}}", "explanation": "To compare sizes we divide the larger quantity by the smaller one.", "diagram": null },
        { "stepNumber": 2, "description": "Split the fraction.", "workingLatex": "= \\frac{3}{6} \\times \\frac{10^{8}}{10^{2}}", "explanation": "Divide the front numbers and the powers separately.", "diagram": null },
        { "stepNumber": 3, "description": "Divide the front numbers.", "workingLatex": "\\frac{3}{6} = 0.5", "explanation": "Three sixths is one half.", "diagram": null },
        { "stepNumber": 4, "description": "Subtract the indices.", "workingLatex": "10^{8} \\div 10^{2} = 10^{6}", "explanation": "Subtracting $2$ from $8$ gives $6$.", "diagram": null },
        { "stepNumber": 5, "description": "Combine the parts.", "workingLatex": "0.5 \\times 10^{6}", "explanation": "Correct in value, but $A = 0.5 < 1$.", "diagram": null },
        { "stepNumber": 6, "description": "Rewrite $0.5$ in standard form.", "workingLatex": "0.5 = 5 \\times 10^{-1}", "explanation": "Moving the point one place right gives $A = 5$.", "diagram": null },
        { "stepNumber": 7, "description": "Absorb the extra power.", "workingLatex": "5 \\times 10^{-1} \\times 10^{6} = 5 \\times 10^{5}", "explanation": "Adding $-1$ and $6$ gives $5$.", "diagram": null },
        { "stepNumber": 8, "description": "Check $A$ is in range.", "workingLatex": "1 \\le 5 < 10", "explanation": "The front value is now valid.", "diagram": null },
        { "stepNumber": 9, "description": "State the comparison.", "workingLatex": "5 \\times 10^{5} \\text{ times larger}", "explanation": "So the first number is half a million times bigger.", "diagram": null },
        { "stepNumber": 10, "description": "Verify with ordinary numbers.", "workingLatex": "3 \\times 10^{8} = 300\\,000\\,000, \\quad 6 \\times 10^{2} = 600", "explanation": "Converting both back lets us check the ratio.", "diagram": null },
        { "stepNumber": 11, "description": "Divide the ordinary numbers.", "workingLatex": "\\frac{300\\,000\\,000}{600} = 500\\,000", "explanation": "The direct division gives half a million.", "diagram": null },
        { "stepNumber": 12, "description": "Confirm the standard-form value.", "workingLatex": "500\\,000 = 5 \\times 10^{5}", "explanation": "The check matches our answer exactly.", "diagram": null },
        { "stepNumber": 13, "description": "State the final answer.", "workingLatex": "5 \\times 10^{5}", "explanation": "The first number is $5 \\times 10^{5}$ times larger than the second.", "diagram": null }
      ],
      "finalAnswer": "$5 \\times 10^{5}$ times larger"
    }
  },
  {
    "id": "gcse.number.standard-form.q055",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Standard form",
    "subtopicId": "gcse.number.standard-form",
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "standard-form",
    "tags": ["standard form", "powers", "cubing", "adjusting form"],
    "questionText": "Work out $(3 \\times 10^{-2})^{3}$, giving your answer in standard form.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Write out the calculation.", "workingLatex": "(3 \\times 10^{-2})^{3}", "explanation": "Cubing raises the whole bracket to the power three.", "diagram": null },
        { "stepNumber": 2, "description": "State what cubing means.", "workingLatex": "(3 \\times 10^{-2}) \\times (3 \\times 10^{-2}) \\times (3 \\times 10^{-2})", "explanation": "A cube is the number multiplied by itself three times.", "diagram": null },
        { "stepNumber": 3, "description": "Apply the power to each factor.", "workingLatex": "= 3^{3} \\times (10^{-2})^{3}", "explanation": "A power outside a product applies to every factor inside it.", "diagram": null },
        { "stepNumber": 4, "description": "Cube the front number.", "workingLatex": "3^{3} = 27", "explanation": "Three multiplied by itself three times is $27$.", "diagram": null },
        { "stepNumber": 5, "description": "Recall the power-of-a-power law.", "workingLatex": "(10^{a})^{b} = 10^{ab}", "explanation": "Raising a power to another power multiplies the indices.", "diagram": null },
        { "stepNumber": 6, "description": "Apply it to the power of ten.", "workingLatex": "(10^{-2})^{3} = 10^{-6}", "explanation": "Multiplying $-2$ by $3$ gives $-6$.", "diagram": null },
        { "stepNumber": 7, "description": "Combine the parts.", "workingLatex": "27 \\times 10^{-6}", "explanation": "Correct in value, but $27 \\ge 10$.", "diagram": null },
        { "stepNumber": 8, "description": "Rewrite $27$ in standard form.", "workingLatex": "27 = 2.7 \\times 10^{1}", "explanation": "Moving the point one place left gives $A = 2.7$.", "diagram": null },
        { "stepNumber": 9, "description": "Absorb the extra power.", "workingLatex": "2.7 \\times 10^{1} \\times 10^{-6} = 2.7 \\times 10^{-5}", "explanation": "Adding $1$ and $-6$ gives $-5$.", "diagram": null },
        { "stepNumber": 10, "description": "Check $A$ is in range.", "workingLatex": "1 \\le 2.7 < 10", "explanation": "The front value is now valid.", "diagram": null },
        { "stepNumber": 11, "description": "Verify with ordinary numbers.", "workingLatex": "3 \\times 10^{-2} = 0.03", "explanation": "Converting the base lets us check by direct cubing.", "diagram": null },
        { "stepNumber": 12, "description": "Cube the decimal.", "workingLatex": "0.03^{3} = 0.000027", "explanation": "Cubing $0.03$ gives $0.000027$.", "diagram": null },
        { "stepNumber": 13, "description": "Confirm the standard form.", "workingLatex": "0.000027 = 2.7 \\times 10^{-5}", "explanation": "The check matches our answer.", "diagram": null },
        { "stepNumber": 14, "description": "State the final answer.", "workingLatex": "2.7 \\times 10^{-5}", "explanation": "The cube is complete in standard form.", "diagram": null }
      ],
      "finalAnswer": "$2.7 \\times 10^{-5}$"
    }
  },
  {
    "id": "gcse.number.standard-form.q056",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Standard form",
    "subtopicId": "gcse.number.standard-form",
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "standard-form",
    "tags": ["standard form", "context", "division", "population density"],
    "questionText": "A country has a population of $6.6 \\times 10^{7}$ people and an area of $2.4 \\times 10^{5}$ km$^2$. Work out the population density (people per km$^2$), giving your answer in standard form.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall the relationship.", "workingLatex": "\\text{density} = \\frac{\\text{population}}{\\text{area}}", "explanation": "Population density is how many people share each square kilometre, found by dividing.", "diagram": null },
        { "stepNumber": 2, "description": "Substitute the values.", "workingLatex": "= \\frac{6.6 \\times 10^{7}}{2.4 \\times 10^{5}}", "explanation": "Putting in the population and the area.", "diagram": null },
        { "stepNumber": 3, "description": "Split the fraction.", "workingLatex": "= \\frac{6.6}{2.4} \\times \\frac{10^{7}}{10^{5}}", "explanation": "Divide the front numbers and the powers separately.", "diagram": null },
        { "stepNumber": 4, "description": "Clear the decimals in the front fraction.", "workingLatex": "\\frac{6.6}{2.4} = \\frac{66}{24}", "explanation": "Multiplying top and bottom by $10$ makes the division easier to simplify.", "diagram": null },
        { "stepNumber": 5, "description": "Simplify the fraction.", "workingLatex": "\\frac{66}{24} = \\frac{11}{4}", "explanation": "Dividing top and bottom by their common factor $6$.", "diagram": null },
        { "stepNumber": 6, "description": "Work out the decimal.", "workingLatex": "\\frac{11}{4} = 2.75", "explanation": "Eleven quarters is two and three quarters.", "diagram": null },
        { "stepNumber": 7, "description": "Subtract the indices.", "workingLatex": "10^{7} \\div 10^{5} = 10^{2}", "explanation": "Subtracting $5$ from $7$ gives $2$.", "diagram": null },
        { "stepNumber": 8, "description": "Combine the parts.", "workingLatex": "2.75 \\times 10^{2}", "explanation": "Joining the number and the power.", "diagram": null },
        { "stepNumber": 9, "description": "Check $A$ is in range.", "workingLatex": "1 \\le 2.75 < 10", "explanation": "The front value is valid.", "diagram": null },
        { "stepNumber": 10, "description": "State the density in standard form.", "workingLatex": "2.75 \\times 10^{2}", "explanation": "This is the density in standard form.", "diagram": null },
        { "stepNumber": 11, "description": "Convert to an ordinary number.", "workingLatex": "2.75 \\times 10^{2} = 275", "explanation": "Moving the point two places right gives $275$.", "diagram": null },
        { "stepNumber": 12, "description": "Verify by estimation.", "workingLatex": "\\frac{66\\,000\\,000}{240\\,000} \\approx 275", "explanation": "A rough division confirms the size is sensible.", "diagram": null },
        { "stepNumber": 13, "description": "State the final answer.", "workingLatex": "2.75 \\times 10^{2} \\text{ people/km}^2", "explanation": "The country has about $275$ people per square kilometre.", "diagram": null }
      ],
      "finalAnswer": "$2.75 \\times 10^{2}$ people per km$^2$ ($275$)"
    }
  },
  {
    "id": "gcse.number.standard-form.q057",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Standard form",
    "subtopicId": "gcse.number.standard-form",
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "standard-form",
    "tags": ["standard form", "addition", "subtraction", "different powers"],
    "questionText": "Work out $(7 \\times 10^{4}) + (3 \\times 10^{5}) - (5 \\times 10^{4})$, giving your answer in standard form.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Write out the calculation.", "workingLatex": "(7 \\times 10^{4}) + (3 \\times 10^{5}) - (5 \\times 10^{4})", "explanation": "For adding and subtracting we must make every power match first.", "diagram": null },
        { "stepNumber": 2, "description": "Choose a common power.", "workingLatex": "10^{4}", "explanation": "The lowest power, $10^{4}$, is a convenient shared unit for all three terms.", "diagram": null },
        { "stepNumber": 3, "description": "Rewrite the middle term with power $10^{4}$.", "workingLatex": "3 \\times 10^{5} = 30 \\times 10^{4}", "explanation": "Lowering the power by one is balanced by making the front number ten times bigger.", "diagram": null },
        { "stepNumber": 4, "description": "Write all terms over $10^{4}$.", "workingLatex": "(7 \\times 10^{4}) + (30 \\times 10^{4}) - (5 \\times 10^{4})", "explanation": "Now every term counts the same-sized units.", "diagram": null },
        { "stepNumber": 5, "description": "Factor out $10^{4}$.", "workingLatex": "(7 + 30 - 5) \\times 10^{4}", "explanation": "With a common power we combine the front numbers.", "diagram": null },
        { "stepNumber": 6, "description": "Add and subtract left to right.", "workingLatex": "7 + 30 = 37", "explanation": "First add the seven and thirty.", "diagram": null },
        { "stepNumber": 7, "description": "Complete the subtraction.", "workingLatex": "37 - 5 = 32", "explanation": "Then take away the five.", "diagram": null },
        { "stepNumber": 8, "description": "Write the combined value.", "workingLatex": "32 \\times 10^{4}", "explanation": "Correct in value, but $32 \\ge 10$.", "diagram": null },
        { "stepNumber": 9, "description": "Rewrite $32$ in standard form.", "workingLatex": "32 = 3.2 \\times 10^{1}", "explanation": "Moving the point one place left gives $A = 3.2$.", "diagram": null },
        { "stepNumber": 10, "description": "Absorb the extra power.", "workingLatex": "3.2 \\times 10^{1} \\times 10^{4} = 3.2 \\times 10^{5}", "explanation": "Adding $1$ and $4$ gives $5$.", "diagram": null },
        { "stepNumber": 11, "description": "Check $A$ is in range.", "workingLatex": "1 \\le 3.2 < 10", "explanation": "The front value is now valid.", "diagram": null },
        { "stepNumber": 12, "description": "Verify with ordinary numbers.", "workingLatex": "70\\,000 + 300\\,000 - 50\\,000 = 320\\,000", "explanation": "The direct calculation confirms the total.", "diagram": null },
        { "stepNumber": 13, "description": "State the final answer.", "workingLatex": "3.2 \\times 10^{5}", "explanation": "The mixed sum and difference is complete in standard form.", "diagram": null }
      ],
      "finalAnswer": "$3.2 \\times 10^{5}$"
    }
  },
  {
    "id": "gcse.number.standard-form.q058",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Standard form",
    "subtopicId": "gcse.number.standard-form",
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "standard-form",
    "tags": ["standard form", "combined operations", "negative power", "adjusting form"],
    "questionText": "Work out $\\dfrac{(9 \\times 10^{-2}) \\times (4 \\times 10^{-3})}{6 \\times 10^{-1}}$, giving your answer in standard form.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Identify the structure.", "workingLatex": "\\frac{(9 \\times 10^{-2}) \\times (4 \\times 10^{-3})}{6 \\times 10^{-1}}", "explanation": "Work out the numerator product first, then divide.", "diagram": null },
        { "stepNumber": 2, "description": "Set up the numerator.", "workingLatex": "(9 \\times 10^{-2}) \\times (4 \\times 10^{-3})", "explanation": "Simplify the top before dividing.", "diagram": null },
        { "stepNumber": 3, "description": "Reorder into numbers and powers.", "workingLatex": "= 9 \\times 4 \\times 10^{-2} \\times 10^{-3}", "explanation": "Grouping like with like.", "diagram": null },
        { "stepNumber": 4, "description": "Multiply the front numbers.", "workingLatex": "9 \\times 4 = 36", "explanation": "The front values give $36$.", "diagram": null },
        { "stepNumber": 5, "description": "Add the indices.", "workingLatex": "10^{-2} \\times 10^{-3} = 10^{-5}", "explanation": "Adding $-2$ and $-3$ gives $-5$.", "diagram": null },
        { "stepNumber": 6, "description": "Write the numerator.", "workingLatex": "36 \\times 10^{-5}", "explanation": "This is the top line, not yet tidy.", "diagram": null },
        { "stepNumber": 7, "description": "Set up the division.", "workingLatex": "\\frac{36 \\times 10^{-5}}{6 \\times 10^{-1}}", "explanation": "Now divide by the denominator.", "diagram": null },
        { "stepNumber": 8, "description": "Split the fraction.", "workingLatex": "= \\frac{36}{6} \\times \\frac{10^{-5}}{10^{-1}}", "explanation": "Divide the numbers and the powers separately.", "diagram": null },
        { "stepNumber": 9, "description": "Divide the front numbers.", "workingLatex": "\\frac{36}{6} = 6", "explanation": "Thirty-six divided by six is six.", "diagram": null },
        { "stepNumber": 10, "description": "Subtract the indices.", "workingLatex": "10^{-5} \\div 10^{-1} = 10^{-5 - (-1)} = 10^{-4}", "explanation": "Subtracting $-1$ means adding $1$, so $-5 + 1 = -4$.", "diagram": null },
        { "stepNumber": 11, "description": "Combine the parts.", "workingLatex": "6 \\times 10^{-4}", "explanation": "Joining number and power.", "diagram": null },
        { "stepNumber": 12, "description": "Check $A$ is in range.", "workingLatex": "1 \\le 6 < 10", "explanation": "The front value is valid.", "diagram": null },
        { "stepNumber": 13, "description": "State the final answer.", "workingLatex": "6 \\times 10^{-4}", "explanation": "The combined calculation is complete in standard form.", "diagram": null }
      ],
      "finalAnswer": "$6 \\times 10^{-4}$"
    }
  },
  {
    "id": "gcse.number.standard-form.q059",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Standard form",
    "subtopicId": "gcse.number.standard-form",
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "standard-form",
    "tags": ["standard form", "context", "area", "multiplication"],
    "questionText": "A rectangular field is $4 \\times 10^{3}$ m long and $2.5 \\times 10^{2}$ m wide. Work out its area in m$^2$, giving your answer in standard form.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall the area formula.", "workingLatex": "\\text{area} = \\text{length} \\times \\text{width}", "explanation": "The area of a rectangle is its length multiplied by its width.", "diagram": null },
        { "stepNumber": 2, "description": "Substitute the values.", "workingLatex": "= (4 \\times 10^{3}) \\times (2.5 \\times 10^{2})", "explanation": "Putting in the two given dimensions.", "diagram": null },
        { "stepNumber": 3, "description": "Reorder into numbers and powers.", "workingLatex": "= 4 \\times 2.5 \\times 10^{3} \\times 10^{2}", "explanation": "Grouping the front numbers and the powers.", "diagram": null },
        { "stepNumber": 4, "description": "Multiply the front numbers.", "workingLatex": "4 \\times 2.5 = 10", "explanation": "Four lots of two and a half make ten.", "diagram": null },
        { "stepNumber": 5, "description": "Add the indices.", "workingLatex": "10^{3} \\times 10^{2} = 10^{5}", "explanation": "Adding $3$ and $2$ gives $5$.", "diagram": null },
        { "stepNumber": 6, "description": "Combine the parts.", "workingLatex": "10 \\times 10^{5}", "explanation": "Correct in value, but $A = 10$ is not less than $10$.", "diagram": null },
        { "stepNumber": 7, "description": "Rewrite $10$ as a power of ten.", "workingLatex": "10 = 1 \\times 10^{1}", "explanation": "Ten is one factor of ten, giving $A = 1$.", "diagram": null },
        { "stepNumber": 8, "description": "Absorb the extra power.", "workingLatex": "1 \\times 10^{1} \\times 10^{5} = 1 \\times 10^{6}", "explanation": "Adding $1$ and $5$ gives $6$.", "diagram": null },
        { "stepNumber": 9, "description": "Check $A$ is in range.", "workingLatex": "1 \\le 1 < 10", "explanation": "The front value is valid.", "diagram": null },
        { "stepNumber": 10, "description": "State the area in standard form.", "workingLatex": "1 \\times 10^{6} \\text{ m}^2", "explanation": "This is the area in standard form.", "diagram": null },
        { "stepNumber": 11, "description": "Convert to an ordinary number.", "workingLatex": "1 \\times 10^{6} = 1\\,000\\,000", "explanation": "Moving the point six places right gives one million.", "diagram": null },
        { "stepNumber": 12, "description": "Verify with ordinary numbers.", "workingLatex": "4000 \\times 250 = 1\\,000\\,000", "explanation": "The direct multiplication confirms the area.", "diagram": null },
        { "stepNumber": 13, "description": "State the final answer.", "workingLatex": "1 \\times 10^{6} \\text{ m}^2", "explanation": "The field has an area of one million square metres.", "diagram": null }
      ],
      "finalAnswer": "$1 \\times 10^{6}$ m$^2$ ($1\\,000\\,000$ m$^2$)"
    }
  },
  {
    "id": "gcse.number.standard-form.q060",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Standard form",
    "subtopicId": "gcse.number.standard-form",
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "standard-form",
    "tags": ["standard form", "context", "multiplication", "mixed signs"],
    "questionText": "The mass of one atom of a substance is $3 \\times 10^{-23}$ g. Work out the total mass of $2 \\times 10^{24}$ atoms, giving your answer in standard form.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Decide on the operation.", "workingLatex": "\\text{total mass} = \\text{mass per atom} \\times \\text{number of atoms}", "explanation": "Total mass is the mass of one atom multiplied by how many atoms there are.", "diagram": null },
        { "stepNumber": 2, "description": "Substitute the values.", "workingLatex": "= (3 \\times 10^{-23}) \\times (2 \\times 10^{24})", "explanation": "Putting in the two given quantities.", "diagram": null },
        { "stepNumber": 3, "description": "Reorder into numbers and powers.", "workingLatex": "= 3 \\times 2 \\times 10^{-23} \\times 10^{24}", "explanation": "Grouping the front numbers and the powers.", "diagram": null },
        { "stepNumber": 4, "description": "Multiply the front numbers.", "workingLatex": "3 \\times 2 = 6", "explanation": "The front values give $6$.", "diagram": null },
        { "stepNumber": 5, "description": "Add the indices.", "workingLatex": "10^{-23} \\times 10^{24} = 10^{1}", "explanation": "Adding $-23$ and $24$ gives $1$.", "diagram": null },
        { "stepNumber": 6, "description": "Combine the parts.", "workingLatex": "6 \\times 10^{1}", "explanation": "Joining number and power.", "diagram": null },
        { "stepNumber": 7, "description": "Check $A$ is in range.", "workingLatex": "1 \\le 6 < 10", "explanation": "The front value is valid.", "diagram": null },
        { "stepNumber": 8, "description": "State the mass in standard form.", "workingLatex": "6 \\times 10^{1} \\text{ g}", "explanation": "This is the total mass in standard form.", "diagram": null },
        { "stepNumber": 9, "description": "Convert to an ordinary number.", "workingLatex": "6 \\times 10^{1} = 60", "explanation": "Moving the point one place right gives $60$.", "diagram": null },
        { "stepNumber": 10, "description": "Interpret the size.", "workingLatex": "60 \\text{ g}", "explanation": "Although each atom is incredibly light, so many of them add up to a everyday-sized mass.", "diagram": null },
        { "stepNumber": 11, "description": "Check the powers balance.", "workingLatex": "-23 + 24 = 1", "explanation": "The tiny mass and the huge count nearly cancel, leaving a small positive power.", "diagram": null },
        { "stepNumber": 12, "description": "Confirm $A$ needed no adjustment.", "workingLatex": "6 \\times 10^{1}", "explanation": "The front value stayed between $1$ and $10$ throughout.", "diagram": null },
        { "stepNumber": 13, "description": "State the final answer.", "workingLatex": "6 \\times 10^{1} \\text{ g} = 60 \\text{ g}", "explanation": "The total mass is $60$ grams.", "diagram": null }
      ],
      "finalAnswer": "$6 \\times 10^{1}$ g ($60$ g)"
    }
  },
  {
    "id": "gcse.number.standard-form.q061",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Standard form",
    "subtopicId": "gcse.number.standard-form",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "standard-form",
    "tags": ["standard form", "combined operations", "powers", "division"],
    "questionText": "Work out $\\dfrac{(4 \\times 10^{5})^{2}}{2 \\times 10^{3}}$, giving your answer in standard form.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Identify the structure.", "workingLatex": "\\frac{(4 \\times 10^{5})^{2}}{2 \\times 10^{3}}", "explanation": "Square the numerator first, then divide by the denominator.", "diagram": null },
        { "stepNumber": 2, "description": "Apply the power to each factor.", "workingLatex": "(4 \\times 10^{5})^{2} = 4^{2} \\times (10^{5})^{2}", "explanation": "The outer square reaches both the front number and the power.", "diagram": null },
        { "stepNumber": 3, "description": "Square the front number.", "workingLatex": "4^{2} = 16", "explanation": "Four squared is sixteen.", "diagram": null },
        { "stepNumber": 4, "description": "Multiply the indices.", "workingLatex": "(10^{5})^{2} = 10^{10}", "explanation": "Raising a power to a power multiplies the indices: $5 \\times 2 = 10$.", "diagram": null },
        { "stepNumber": 5, "description": "Write the squared numerator.", "workingLatex": "16 \\times 10^{10}", "explanation": "Correct in value but $16 \\ge 10$.", "diagram": null },
        { "stepNumber": 6, "description": "Adjust the numerator to standard form.", "workingLatex": "16 \\times 10^{10} = 1.6 \\times 10^{11}", "explanation": "Since $16 = 1.6 \\times 10^{1}$, we add one to the index.", "diagram": null },
        { "stepNumber": 7, "description": "Set up the division.", "workingLatex": "\\frac{1.6 \\times 10^{11}}{2 \\times 10^{3}}", "explanation": "Now divide by the denominator.", "diagram": null },
        { "stepNumber": 8, "description": "Split the fraction.", "workingLatex": "= \\frac{1.6}{2} \\times \\frac{10^{11}}{10^{3}}", "explanation": "Divide numbers and powers separately.", "diagram": null },
        { "stepNumber": 9, "description": "Divide the front numbers.", "workingLatex": "\\frac{1.6}{2} = 0.8", "explanation": "One point six shared into two equal parts is $0.8$.", "diagram": null },
        { "stepNumber": 10, "description": "Subtract the indices.", "workingLatex": "10^{11} \\div 10^{3} = 10^{8}", "explanation": "Subtracting $3$ from $11$ gives $8$.", "diagram": null },
        { "stepNumber": 11, "description": "Combine the parts.", "workingLatex": "0.8 \\times 10^{8}", "explanation": "Correct in value but $A = 0.8 < 1$.", "diagram": null },
        { "stepNumber": 12, "description": "Rewrite $0.8$ in standard form.", "workingLatex": "0.8 = 8 \\times 10^{-1}", "explanation": "Moving the point one place right gives $A = 8$.", "diagram": null },
        { "stepNumber": 13, "description": "Absorb the extra power.", "workingLatex": "8 \\times 10^{-1} \\times 10^{8} = 8 \\times 10^{7}", "explanation": "Adding $-1$ and $8$ gives $7$.", "diagram": null },
        { "stepNumber": 14, "description": "Check $A$ is in range.", "workingLatex": "1 \\le 8 < 10", "explanation": "The front value is now valid.", "diagram": null },
        { "stepNumber": 15, "description": "State the final answer.", "workingLatex": "8 \\times 10^{7}", "explanation": "The combined power and division is complete in standard form.", "diagram": null }
      ],
      "finalAnswer": "$8 \\times 10^{7}$"
    }
  },
  {
    "id": "gcse.number.standard-form.q062",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Standard form",
    "subtopicId": "gcse.number.standard-form",
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "standard-form",
    "tags": ["standard form", "ratio", "division", "comparison"],
    "questionText": "Express the ratio $(6 \\times 10^{8}) : (2 \\times 10^{5})$ in the form $n : 1$, giving $n$ in standard form.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "State how to reach the form $n : 1$.", "workingLatex": "n = \\frac{6 \\times 10^{8}}{2 \\times 10^{5}}", "explanation": "Dividing both parts of the ratio by the second part turns it into $n : 1$.", "diagram": null },
        { "stepNumber": 2, "description": "Split the fraction.", "workingLatex": "= \\frac{6}{2} \\times \\frac{10^{8}}{10^{5}}", "explanation": "Divide the front numbers and the powers separately.", "diagram": null },
        { "stepNumber": 3, "description": "Divide the front numbers.", "workingLatex": "\\frac{6}{2} = 3", "explanation": "Six divided by two is three.", "diagram": null },
        { "stepNumber": 4, "description": "Subtract the indices.", "workingLatex": "10^{8} \\div 10^{5} = 10^{3}", "explanation": "Subtracting $5$ from $8$ gives $3$.", "diagram": null },
        { "stepNumber": 5, "description": "Combine the parts.", "workingLatex": "n = 3 \\times 10^{3}", "explanation": "Joining number and power.", "diagram": null },
        { "stepNumber": 6, "description": "Check $A$ is in range.", "workingLatex": "1 \\le 3 < 10", "explanation": "The front value is valid.", "diagram": null },
        { "stepNumber": 7, "description": "Write the ratio.", "workingLatex": "(6 \\times 10^{8}) : (2 \\times 10^{5}) = (3 \\times 10^{3}) : 1", "explanation": "The simplified ratio is $3 \\times 10^{3}$ to one.", "diagram": null },
        { "stepNumber": 8, "description": "Convert $n$ to an ordinary number.", "workingLatex": "3 \\times 10^{3} = 3000", "explanation": "This makes the ratio easier to read.", "diagram": null },
        { "stepNumber": 9, "description": "Verify with ordinary numbers.", "workingLatex": "\\frac{600\\,000\\,000}{200\\,000} = 3000", "explanation": "The direct division confirms the value of $n$.", "diagram": null },
        { "stepNumber": 10, "description": "Confirm the equivalence.", "workingLatex": "3000 : 1 = 3 \\times 10^{3} : 1", "explanation": "Both forms describe the same ratio.", "diagram": null },
        { "stepNumber": 11, "description": "State the final answer.", "workingLatex": "n = 3 \\times 10^{3}", "explanation": "The ratio in the form $n : 1$ has $n = 3 \\times 10^{3}$.", "diagram": null }
      ],
      "finalAnswer": "$(3 \\times 10^{3}) : 1$"
    }
  },
  {
    "id": "gcse.number.standard-form.q063",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Standard form",
    "subtopicId": "gcse.number.standard-form",
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "standard-form",
    "tags": ["standard form", "addition", "subtraction", "negative power"],
    "questionText": "Work out $(8 \\times 10^{-4}) - (6 \\times 10^{-5}) + (5 \\times 10^{-4})$, giving your answer in standard form.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Write out the calculation.", "workingLatex": "(8 \\times 10^{-4}) - (6 \\times 10^{-5}) + (5 \\times 10^{-4})", "explanation": "First make every power match.", "diagram": null },
        { "stepNumber": 2, "description": "Choose a common power.", "workingLatex": "10^{-5}", "explanation": "The lowest power, $10^{-5}$, works as a shared unit for all three terms.", "diagram": null },
        { "stepNumber": 3, "description": "Rewrite the first term.", "workingLatex": "8 \\times 10^{-4} = 80 \\times 10^{-5}", "explanation": "Lowering the power from $-4$ to $-5$ is balanced by making the front number ten times bigger.", "diagram": null },
        { "stepNumber": 4, "description": "Rewrite the third term.", "workingLatex": "5 \\times 10^{-4} = 50 \\times 10^{-5}", "explanation": "The same adjustment turns $5 \\times 10^{-4}$ into $50 \\times 10^{-5}$.", "diagram": null },
        { "stepNumber": 5, "description": "Write all terms over $10^{-5}$.", "workingLatex": "(80 \\times 10^{-5}) - (6 \\times 10^{-5}) + (50 \\times 10^{-5})", "explanation": "Now every term uses the same-sized unit.", "diagram": null },
        { "stepNumber": 6, "description": "Factor out $10^{-5}$.", "workingLatex": "(80 - 6 + 50) \\times 10^{-5}", "explanation": "With a common power we combine the front numbers.", "diagram": null },
        { "stepNumber": 7, "description": "Work through left to right.", "workingLatex": "80 - 6 = 74", "explanation": "First subtract the six.", "diagram": null },
        { "stepNumber": 8, "description": "Complete the addition.", "workingLatex": "74 + 50 = 124", "explanation": "Then add the fifty.", "diagram": null },
        { "stepNumber": 9, "description": "Write the combined value.", "workingLatex": "124 \\times 10^{-5}", "explanation": "Correct in value but $124 \\ge 10$.", "diagram": null },
        { "stepNumber": 10, "description": "Rewrite $124$ in standard form.", "workingLatex": "124 = 1.24 \\times 10^{2}", "explanation": "Moving the point two places left gives $A = 1.24$.", "diagram": null },
        { "stepNumber": 11, "description": "Absorb the extra power.", "workingLatex": "1.24 \\times 10^{2} \\times 10^{-5} = 1.24 \\times 10^{-3}", "explanation": "Adding $2$ and $-5$ gives $-3$.", "diagram": null },
        { "stepNumber": 12, "description": "Verify with ordinary numbers.", "workingLatex": "0.0008 - 0.00006 + 0.0005 = 0.00124", "explanation": "The direct calculation confirms the total.", "diagram": null },
        { "stepNumber": 13, "description": "State the final answer.", "workingLatex": "1.24 \\times 10^{-3}", "explanation": "The mixed calculation is complete in standard form.", "diagram": null }
      ],
      "finalAnswer": "$1.24 \\times 10^{-3}$"
    }
  },
  {
    "id": "gcse.number.standard-form.q064",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Standard form",
    "subtopicId": "gcse.number.standard-form",
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "standard-form",
    "tags": ["standard form", "context", "multiplication", "money"],
    "questionText": "A stadium sells $5 \\times 10^{4}$ tickets at a price of $3 \\times 10^{1}$ pounds each. Work out the total revenue in pounds, giving your answer in standard form.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Decide on the operation.", "workingLatex": "\\text{revenue} = \\text{tickets} \\times \\text{price}", "explanation": "Total revenue is the number of tickets multiplied by the price of each.", "diagram": null },
        { "stepNumber": 2, "description": "Substitute the values.", "workingLatex": "= (5 \\times 10^{4}) \\times (3 \\times 10^{1})", "explanation": "Putting in the ticket count and the price.", "diagram": null },
        { "stepNumber": 3, "description": "Reorder into numbers and powers.", "workingLatex": "= 5 \\times 3 \\times 10^{4} \\times 10^{1}", "explanation": "Grouping the front numbers and the powers.", "diagram": null },
        { "stepNumber": 4, "description": "Multiply the front numbers.", "workingLatex": "5 \\times 3 = 15", "explanation": "The front values give $15$.", "diagram": null },
        { "stepNumber": 5, "description": "Add the indices.", "workingLatex": "10^{4} \\times 10^{1} = 10^{5}", "explanation": "Adding $4$ and $1$ gives $5$.", "diagram": null },
        { "stepNumber": 6, "description": "Combine the parts.", "workingLatex": "15 \\times 10^{5}", "explanation": "Correct in value but $15 \\ge 10$.", "diagram": null },
        { "stepNumber": 7, "description": "Rewrite $15$ in standard form.", "workingLatex": "15 = 1.5 \\times 10^{1}", "explanation": "Moving the point one place left gives $A = 1.5$.", "diagram": null },
        { "stepNumber": 8, "description": "Absorb the extra power.", "workingLatex": "1.5 \\times 10^{1} \\times 10^{5} = 1.5 \\times 10^{6}", "explanation": "Adding $1$ and $5$ gives $6$.", "diagram": null },
        { "stepNumber": 9, "description": "Check $A$ is in range.", "workingLatex": "1 \\le 1.5 < 10", "explanation": "The front value is now valid.", "diagram": null },
        { "stepNumber": 10, "description": "Convert to an ordinary number.", "workingLatex": "1.5 \\times 10^{6} = 1\\,500\\,000", "explanation": "Moving the point six places right gives one and a half million.", "diagram": null },
        { "stepNumber": 11, "description": "Verify with ordinary numbers.", "workingLatex": "50\\,000 \\times 30 = 1\\,500\\,000", "explanation": "The direct multiplication confirms the revenue.", "diagram": null },
        { "stepNumber": 12, "description": "State the final answer.", "workingLatex": "1.5 \\times 10^{6} \\text{ pounds}", "explanation": "The stadium takes £$1\\,500\\,000$ in ticket sales.", "diagram": null }
      ],
      "finalAnswer": "$1.5 \\times 10^{6}$ pounds ($£1\\,500\\,000$)"
    }
  },
  {
    "id": "gcse.number.standard-form.q065",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Standard form",
    "subtopicId": "gcse.number.standard-form",
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "standard-form",
    "tags": ["standard form", "multiplication", "three factors", "adjusting form"],
    "questionText": "Work out $(2 \\times 10^{-3}) \\times (3 \\times 10^{4}) \\times (5 \\times 10^{2})$, giving your answer in standard form.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Write out the calculation.", "workingLatex": "(2 \\times 10^{-3}) \\times (3 \\times 10^{4}) \\times (5 \\times 10^{2})", "explanation": "Three factors, but the same grouping approach works.", "diagram": null },
        { "stepNumber": 2, "description": "Reorder into numbers and powers.", "workingLatex": "= 2 \\times 3 \\times 5 \\times 10^{-3} \\times 10^{4} \\times 10^{2}", "explanation": "Gather all the front numbers together and all the powers together.", "diagram": null },
        { "stepNumber": 3, "description": "Multiply the first two front numbers.", "workingLatex": "2 \\times 3 = 6", "explanation": "Building up the product one step at a time.", "diagram": null },
        { "stepNumber": 4, "description": "Multiply by the last front number.", "workingLatex": "6 \\times 5 = 30", "explanation": "The three front values multiply to $30$.", "diagram": null },
        { "stepNumber": 5, "description": "Add the first two indices.", "workingLatex": "10^{-3} \\times 10^{4} = 10^{1}", "explanation": "Adding $-3$ and $4$ gives $1$.", "diagram": null },
        { "stepNumber": 6, "description": "Add the last index.", "workingLatex": "10^{1} \\times 10^{2} = 10^{3}", "explanation": "Adding $1$ and $2$ gives $3$.", "diagram": null },
        { "stepNumber": 7, "description": "Combine the parts.", "workingLatex": "30 \\times 10^{3}", "explanation": "Correct in value but $30 \\ge 10$.", "diagram": null },
        { "stepNumber": 8, "description": "Rewrite $30$ in standard form.", "workingLatex": "30 = 3 \\times 10^{1}", "explanation": "Moving the point one place left gives $A = 3$.", "diagram": null },
        { "stepNumber": 9, "description": "Absorb the extra power.", "workingLatex": "3 \\times 10^{1} \\times 10^{3} = 3 \\times 10^{4}", "explanation": "Adding $1$ and $3$ gives $4$.", "diagram": null },
        { "stepNumber": 10, "description": "Check $A$ is in range.", "workingLatex": "1 \\le 3 < 10", "explanation": "The front value is now valid.", "diagram": null },
        { "stepNumber": 11, "description": "Verify with ordinary numbers.", "workingLatex": "0.002 \\times 30\\,000 \\times 500 = 30\\,000", "explanation": "The direct multiplication confirms the result.", "diagram": null },
        { "stepNumber": 12, "description": "State the final answer.", "workingLatex": "3 \\times 10^{4}", "explanation": "The three-factor product is complete in standard form.", "diagram": null }
      ],
      "finalAnswer": "$3 \\times 10^{4}$"
    }
  },
  {
    "id": "gcse.number.standard-form.q066",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Standard form",
    "subtopicId": "gcse.number.standard-form",
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "standard-form",
    "tags": ["standard form", "context", "division", "rearranging"],
    "questionText": "A rectangle has an area of $1.2 \\times 10^{7}$ m$^2$ and a length of $4 \\times 10^{3}$ m. Work out its width, giving your answer in standard form.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Rearrange the area formula.", "workingLatex": "\\text{width} = \\frac{\\text{area}}{\\text{length}}", "explanation": "Since area is length times width, dividing the area by the length recovers the width.", "diagram": null },
        { "stepNumber": 2, "description": "Substitute the values.", "workingLatex": "= \\frac{1.2 \\times 10^{7}}{4 \\times 10^{3}}", "explanation": "Putting in the area and the length.", "diagram": null },
        { "stepNumber": 3, "description": "Split the fraction.", "workingLatex": "= \\frac{1.2}{4} \\times \\frac{10^{7}}{10^{3}}", "explanation": "Divide the front numbers and the powers separately.", "diagram": null },
        { "stepNumber": 4, "description": "Divide the front numbers.", "workingLatex": "\\frac{1.2}{4} = 0.3", "explanation": "One point two shared into four equal parts is $0.3$.", "diagram": null },
        { "stepNumber": 5, "description": "Subtract the indices.", "workingLatex": "10^{7} \\div 10^{3} = 10^{4}", "explanation": "Subtracting $3$ from $7$ gives $4$.", "diagram": null },
        { "stepNumber": 6, "description": "Combine the parts.", "workingLatex": "0.3 \\times 10^{4}", "explanation": "Correct in value but $A = 0.3 < 1$.", "diagram": null },
        { "stepNumber": 7, "description": "Rewrite $0.3$ in standard form.", "workingLatex": "0.3 = 3 \\times 10^{-1}", "explanation": "Moving the point one place right gives $A = 3$.", "diagram": null },
        { "stepNumber": 8, "description": "Absorb the extra power.", "workingLatex": "3 \\times 10^{-1} \\times 10^{4} = 3 \\times 10^{3}", "explanation": "Adding $-1$ and $4$ gives $3$.", "diagram": null },
        { "stepNumber": 9, "description": "Check $A$ is in range.", "workingLatex": "1 \\le 3 < 10", "explanation": "The front value is now valid.", "diagram": null },
        { "stepNumber": 10, "description": "Convert to an ordinary number.", "workingLatex": "3 \\times 10^{3} = 3000", "explanation": "Moving the point three places right gives $3000$.", "diagram": null },
        { "stepNumber": 11, "description": "Verify with ordinary numbers.", "workingLatex": "4000 \\times 3000 = 12\\,000\\,000 = 1.2 \\times 10^{7}", "explanation": "Length times width returns the original area, confirming the width.", "diagram": null },
        { "stepNumber": 12, "description": "State the final answer.", "workingLatex": "3 \\times 10^{3} \\text{ m}", "explanation": "The rectangle is $3000$ m wide.", "diagram": null }
      ],
      "finalAnswer": "$3 \\times 10^{3}$ m ($3000$ m)"
    }
  },
  {
    "id": "gcse.number.standard-form.q067",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Standard form",
    "subtopicId": "gcse.number.standard-form",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "standard-form",
    "tags": ["standard form", "combined operations", "powers", "multiplication"],
    "questionText": "Work out $(6 \\times 10^{-4})^{2} \\times (2 \\times 10^{5})$, giving your answer in standard form.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Identify the structure.", "workingLatex": "(6 \\times 10^{-4})^{2} \\times (2 \\times 10^{5})", "explanation": "Square the first bracket, then multiply by the second.", "diagram": null },
        { "stepNumber": 2, "description": "Apply the power to each factor.", "workingLatex": "(6 \\times 10^{-4})^{2} = 6^{2} \\times (10^{-4})^{2}", "explanation": "The square reaches both the front number and the power.", "diagram": null },
        { "stepNumber": 3, "description": "Square the front number.", "workingLatex": "6^{2} = 36", "explanation": "Six squared is thirty-six.", "diagram": null },
        { "stepNumber": 4, "description": "Multiply the indices.", "workingLatex": "(10^{-4})^{2} = 10^{-8}", "explanation": "Raising a power to a power multiplies the indices: $-4 \\times 2 = -8$.", "diagram": null },
        { "stepNumber": 5, "description": "Write the squared bracket.", "workingLatex": "36 \\times 10^{-8}", "explanation": "This is the square before the final multiplication.", "diagram": null },
        { "stepNumber": 6, "description": "Multiply by the second bracket.", "workingLatex": "(36 \\times 10^{-8}) \\times (2 \\times 10^{5})", "explanation": "Now bring in the factor $2 \\times 10^{5}$.", "diagram": null },
        { "stepNumber": 7, "description": "Reorder into numbers and powers.", "workingLatex": "= 36 \\times 2 \\times 10^{-8} \\times 10^{5}", "explanation": "Grouping like with like.", "diagram": null },
        { "stepNumber": 8, "description": "Multiply the front numbers.", "workingLatex": "36 \\times 2 = 72", "explanation": "The front values give $72$.", "diagram": null },
        { "stepNumber": 9, "description": "Add the indices.", "workingLatex": "10^{-8} \\times 10^{5} = 10^{-3}", "explanation": "Adding $-8$ and $5$ gives $-3$.", "diagram": null },
        { "stepNumber": 10, "description": "Combine the parts.", "workingLatex": "72 \\times 10^{-3}", "explanation": "Correct in value but $72 \\ge 10$.", "diagram": null },
        { "stepNumber": 11, "description": "Rewrite $72$ in standard form.", "workingLatex": "72 = 7.2 \\times 10^{1}", "explanation": "Moving the point one place left gives $A = 7.2$.", "diagram": null },
        { "stepNumber": 12, "description": "Absorb the extra power.", "workingLatex": "7.2 \\times 10^{1} \\times 10^{-3} = 7.2 \\times 10^{-2}", "explanation": "Adding $1$ and $-3$ gives $-2$.", "diagram": null },
        { "stepNumber": 13, "description": "Check $A$ is in range.", "workingLatex": "1 \\le 7.2 < 10", "explanation": "The front value is now valid.", "diagram": null },
        { "stepNumber": 14, "description": "State the final answer.", "workingLatex": "7.2 \\times 10^{-2}", "explanation": "The combined power and product is complete in standard form.", "diagram": null }
      ],
      "finalAnswer": "$7.2 \\times 10^{-2}$"
    }
  },
  {
    "id": "gcse.number.standard-form.q068",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Standard form",
    "subtopicId": "gcse.number.standard-form",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "standard-form",
    "tags": ["standard form", "context", "multiplication", "division"],
    "questionText": "A warehouse receives $6 \\times 10^{5}$ boxes, each containing $5 \\times 10^{2}$ items. The items are shared equally between $3 \\times 10^{4}$ shops. How many items does each shop receive? Give your answer in standard form.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Plan the two stages.", "workingLatex": "\\text{total items} \\to \\text{items per shop}", "explanation": "First find the total number of items, then share them between the shops.", "diagram": null },
        { "stepNumber": 2, "description": "Set up the total.", "workingLatex": "\\text{total} = (6 \\times 10^{5}) \\times (5 \\times 10^{2})", "explanation": "Total items is the number of boxes multiplied by the items in each box.", "diagram": null },
        { "stepNumber": 3, "description": "Reorder into numbers and powers.", "workingLatex": "= 6 \\times 5 \\times 10^{5} \\times 10^{2}", "explanation": "Grouping like with like.", "diagram": null },
        { "stepNumber": 4, "description": "Multiply the front numbers.", "workingLatex": "6 \\times 5 = 30", "explanation": "The front values give $30$.", "diagram": null },
        { "stepNumber": 5, "description": "Add the indices.", "workingLatex": "10^{5} \\times 10^{2} = 10^{7}", "explanation": "Adding $5$ and $2$ gives $7$.", "diagram": null },
        { "stepNumber": 6, "description": "Write the total.", "workingLatex": "30 \\times 10^{7}", "explanation": "Correct in value but not tidy.", "diagram": null },
        { "stepNumber": 7, "description": "Adjust to standard form.", "workingLatex": "30 \\times 10^{7} = 3 \\times 10^{8}", "explanation": "Since $30 = 3 \\times 10^{1}$, we add one to the index.", "diagram": null },
        { "stepNumber": 8, "description": "Set up the sharing.", "workingLatex": "\\text{per shop} = \\frac{3 \\times 10^{8}}{3 \\times 10^{4}}", "explanation": "Divide the total items by the number of shops.", "diagram": null },
        { "stepNumber": 9, "description": "Split the fraction.", "workingLatex": "= \\frac{3}{3} \\times \\frac{10^{8}}{10^{4}}", "explanation": "Divide the numbers and the powers separately.", "diagram": null },
        { "stepNumber": 10, "description": "Divide the front numbers.", "workingLatex": "\\frac{3}{3} = 1", "explanation": "Three divided by three is one.", "diagram": null },
        { "stepNumber": 11, "description": "Subtract the indices.", "workingLatex": "10^{8} \\div 10^{4} = 10^{4}", "explanation": "Subtracting $4$ from $8$ gives $4$.", "diagram": null },
        { "stepNumber": 12, "description": "Combine the parts.", "workingLatex": "1 \\times 10^{4}", "explanation": "Joining number and power.", "diagram": null },
        { "stepNumber": 13, "description": "Check $A$ is in range.", "workingLatex": "1 \\le 1 < 10", "explanation": "The front value is valid.", "diagram": null },
        { "stepNumber": 14, "description": "State the final answer.", "workingLatex": "1 \\times 10^{4} = 10\\,000", "explanation": "Each shop receives $10\\,000$ items.", "diagram": null }
      ],
      "finalAnswer": "$1 \\times 10^{4}$ items ($10\\,000$)"
    }
  },
  {
    "id": "gcse.number.standard-form.q069",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Standard form",
    "subtopicId": "gcse.number.standard-form",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "standard-form",
    "tags": ["standard form", "combined operations", "addition", "division"],
    "questionText": "Work out $\\dfrac{(7.5 \\times 10^{6}) + (2.5 \\times 10^{6})}{5 \\times 10^{3}}$, giving your answer in standard form.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Identify the structure.", "workingLatex": "\\frac{(7.5 \\times 10^{6}) + (2.5 \\times 10^{6})}{5 \\times 10^{3}}", "explanation": "Add the numerator first, then divide by the denominator.", "diagram": null },
        { "stepNumber": 2, "description": "Check the numerator powers match.", "workingLatex": "10^{6} = 10^{6}", "explanation": "Both terms on top share $10^{6}$, so we can add the front numbers directly.", "diagram": null },
        { "stepNumber": 3, "description": "Factor out $10^{6}$.", "workingLatex": "(7.5 + 2.5) \\times 10^{6}", "explanation": "The common power acts as a shared unit.", "diagram": null },
        { "stepNumber": 4, "description": "Add the front numbers.", "workingLatex": "7.5 + 2.5 = 10", "explanation": "Seven and a half plus two and a half is ten.", "diagram": null },
        { "stepNumber": 5, "description": "Write the numerator.", "workingLatex": "10 \\times 10^{6}", "explanation": "Correct in value but $A = 10$ is not less than $10$.", "diagram": null },
        { "stepNumber": 6, "description": "Adjust the numerator.", "workingLatex": "10 \\times 10^{6} = 1 \\times 10^{7}", "explanation": "Since $10 = 1 \\times 10^{1}$, we add one to the index.", "diagram": null },
        { "stepNumber": 7, "description": "Set up the division.", "workingLatex": "\\frac{1 \\times 10^{7}}{5 \\times 10^{3}}", "explanation": "Now divide by the denominator.", "diagram": null },
        { "stepNumber": 8, "description": "Split the fraction.", "workingLatex": "= \\frac{1}{5} \\times \\frac{10^{7}}{10^{3}}", "explanation": "Divide the numbers and the powers separately.", "diagram": null },
        { "stepNumber": 9, "description": "Divide the front numbers.", "workingLatex": "\\frac{1}{5} = 0.2", "explanation": "One fifth is $0.2$.", "diagram": null },
        { "stepNumber": 10, "description": "Subtract the indices.", "workingLatex": "10^{7} \\div 10^{3} = 10^{4}", "explanation": "Subtracting $3$ from $7$ gives $4$.", "diagram": null },
        { "stepNumber": 11, "description": "Combine the parts.", "workingLatex": "0.2 \\times 10^{4}", "explanation": "Correct in value but $A = 0.2 < 1$.", "diagram": null },
        { "stepNumber": 12, "description": "Rewrite $0.2$ in standard form.", "workingLatex": "0.2 = 2 \\times 10^{-1}", "explanation": "Moving the point one place right gives $A = 2$.", "diagram": null },
        { "stepNumber": 13, "description": "Absorb the extra power.", "workingLatex": "2 \\times 10^{-1} \\times 10^{4} = 2 \\times 10^{3}", "explanation": "Adding $-1$ and $4$ gives $3$.", "diagram": null },
        { "stepNumber": 14, "description": "Check $A$ is in range.", "workingLatex": "1 \\le 2 < 10", "explanation": "The front value is now valid.", "diagram": null },
        { "stepNumber": 15, "description": "State the final answer.", "workingLatex": "2 \\times 10^{3}", "explanation": "The combined addition and division is complete in standard form.", "diagram": null }
      ],
      "finalAnswer": "$2 \\times 10^{3}$"
    }
  },
  {
    "id": "gcse.number.standard-form.q070",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Standard form",
    "subtopicId": "gcse.number.standard-form",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "standard-form",
    "tags": ["standard form", "context", "division", "speed distance time"],
    "questionText": "A star is $9 \\times 10^{15}$ m from Earth. Light travels at $3 \\times 10^{8}$ m/s. (a) How long, in seconds, does light take to reach Earth? Give your answer in standard form. (b) Given that one year is about $3 \\times 10^{7}$ seconds, roughly how many years is this?",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall the relationship.", "workingLatex": "\\text{time} = \\frac{\\text{distance}}{\\text{speed}}", "explanation": "Time taken is the distance travelled divided by the speed.", "diagram": null },
        { "stepNumber": 2, "description": "Substitute for part (a).", "workingLatex": "= \\frac{9 \\times 10^{15}}{3 \\times 10^{8}}", "explanation": "Putting in the distance and the speed of light.", "diagram": null },
        { "stepNumber": 3, "description": "Split the fraction.", "workingLatex": "= \\frac{9}{3} \\times \\frac{10^{15}}{10^{8}}", "explanation": "Divide the front numbers and the powers separately.", "diagram": null },
        { "stepNumber": 4, "description": "Divide the front numbers.", "workingLatex": "\\frac{9}{3} = 3", "explanation": "Nine divided by three is three.", "diagram": null },
        { "stepNumber": 5, "description": "Subtract the indices.", "workingLatex": "10^{15} \\div 10^{8} = 10^{7}", "explanation": "Subtracting $8$ from $15$ gives $7$.", "diagram": null },
        { "stepNumber": 6, "description": "Combine the parts.", "workingLatex": "3 \\times 10^{7}", "explanation": "Joining number and power.", "diagram": null },
        { "stepNumber": 7, "description": "Check $A$ is in range.", "workingLatex": "1 \\le 3 < 10", "explanation": "The front value is valid.", "diagram": null },
        { "stepNumber": 8, "description": "State the part (a) answer.", "workingLatex": "3 \\times 10^{7} \\text{ s}", "explanation": "Light takes $3 \\times 10^{7}$ seconds to reach Earth.", "diagram": null },
        { "stepNumber": 9, "description": "Set up part (b).", "workingLatex": "\\text{years} = \\frac{3 \\times 10^{7}}{3 \\times 10^{7}}", "explanation": "Dividing the time in seconds by the number of seconds in a year converts to years.", "diagram": null },
        { "stepNumber": 10, "description": "Split the fraction.", "workingLatex": "= \\frac{3}{3} \\times \\frac{10^{7}}{10^{7}}", "explanation": "Divide the numbers and the powers separately.", "diagram": null },
        { "stepNumber": 11, "description": "Divide the front numbers.", "workingLatex": "\\frac{3}{3} = 1", "explanation": "Three divided by three is one.", "diagram": null },
        { "stepNumber": 12, "description": "Subtract the indices.", "workingLatex": "10^{7} \\div 10^{7} = 10^{0}", "explanation": "Subtracting $7$ from $7$ gives $0$.", "diagram": null },
        { "stepNumber": 13, "description": "Simplify using $10^{0} = 1$.", "workingLatex": "1 \\times 10^{0} = 1", "explanation": "Any non-zero number to the power zero is $1$.", "diagram": null },
        { "stepNumber": 14, "description": "Interpret the result.", "workingLatex": "\\approx 1 \\text{ year}", "explanation": "So the light we see left the star about a year ago.", "diagram": null },
        { "stepNumber": 15, "description": "State both answers.", "workingLatex": "(a)\\ 3 \\times 10^{7} \\text{ s}, \\quad (b)\\ \\approx 1 \\text{ year}", "explanation": "The two parts connect the huge distance to a familiar length of time.", "diagram": null }
      ],
      "finalAnswer": "(a) $3 \\times 10^{7}$ s; (b) about $1$ year"
    }
  }
];
