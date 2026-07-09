import { Question } from "@/lib/types";

export const questions: Question[] = [
  {
    "id": "gcse.algebra.simplifying.q001",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Simplifying and single brackets",
    "subtopicId": "gcse.algebra.simplifying",
    "difficulty": "Easy",
    "marks": 1,
    "answerType": "expression",
    "tags": ["collecting like terms", "simplifying", "single variable"],
    "questionText": "Simplify $2x + 3x$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Look at the terms.", "workingLatex": "2x + 3x", "explanation": "Both terms contain exactly the same letter $x$, which makes them like terms that can be combined.", "diagram": null },
        { "stepNumber": 2, "description": "Think about what the terms mean.", "workingLatex": "2x = x + x,\\quad 3x = x + x + x", "explanation": "Having $2$ lots of $x$ and then $3$ more lots of $x$ is just a running count of how many $x$ we have altogether.", "diagram": null },
        { "stepNumber": 3, "description": "Add the number parts.", "workingLatex": "2 + 3 = 5", "explanation": "The numbers in front of the $x$ are called coefficients, and we simply add them to count the total.", "diagram": null },
        { "stepNumber": 4, "description": "Attach the variable.", "workingLatex": "5x", "explanation": "The letter stays the same because we are only counting how many $x$ there are.", "diagram": null },
        { "stepNumber": 5, "description": "State the simplified expression.", "workingLatex": "2x + 3x = 5x", "explanation": "The two terms have been collected into one tidy term.", "diagram": null },
        { "stepNumber": 6, "description": "Check the count.", "workingLatex": "5 = 2 + 3", "explanation": "Five lots of $x$ is exactly the two lots plus the three lots we started with, so the answer is sound.", "diagram": null }
      ],
      "finalAnswer": "$5x$"
    }
  },
  {
    "id": "gcse.algebra.simplifying.q002",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Simplifying and single brackets",
    "subtopicId": "gcse.algebra.simplifying",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "expression",
    "tags": ["collecting like terms", "simplifying", "subtraction"],
    "questionText": "Simplify $5a - 2a + a$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Identify the like terms.", "workingLatex": "5a - 2a + a", "explanation": "Every term uses the same letter $a$, so they can all be combined into a single term.", "diagram": null },
        { "stepNumber": 2, "description": "Notice the hidden coefficient.", "workingLatex": "a = 1a", "explanation": "A lone $a$ means one lot of $a$, so its coefficient is $1$ even though the $1$ is not written.", "diagram": null },
        { "stepNumber": 3, "description": "List the coefficients with their signs.", "workingLatex": "+5,\\ -2,\\ +1", "explanation": "Each sign belongs to the term directly after it, so we carry the minus with the $2a$.", "diagram": null },
        { "stepNumber": 4, "description": "Combine the coefficients.", "workingLatex": "5 - 2 + 1 = 4", "explanation": "Starting with five, taking away two and adding one back leaves four.", "diagram": null },
        { "stepNumber": 5, "description": "Attach the variable.", "workingLatex": "4a", "explanation": "We keep the letter $a$ since we were only counting how many of them there are.", "diagram": null },
        { "stepNumber": 6, "description": "State the simplified expression.", "workingLatex": "5a - 2a + a = 4a", "explanation": "The three terms collapse neatly into one term.", "diagram": null }
      ],
      "finalAnswer": "$4a$"
    }
  },
  {
    "id": "gcse.algebra.simplifying.q003",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Simplifying and single brackets",
    "subtopicId": "gcse.algebra.simplifying",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "expression",
    "tags": ["collecting like terms", "two variables", "simplifying"],
    "questionText": "Simplify $4x + 3y + 2x - y$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Sort the terms by letter.", "workingLatex": "(4x + 2x) + (3y - y)", "explanation": "Only terms with the same letter can be combined, so we group the $x$ terms together and the $y$ terms together.", "diagram": null },
        { "stepNumber": 2, "description": "Combine the $x$ terms.", "workingLatex": "4x + 2x = 6x", "explanation": "Four lots of $x$ plus two more lots gives six lots of $x$.", "diagram": null },
        { "stepNumber": 3, "description": "Recognise the hidden coefficient.", "workingLatex": "y = 1y", "explanation": "A single $y$ counts as one $y$, so subtracting it removes one from the count.", "diagram": null },
        { "stepNumber": 4, "description": "Combine the $y$ terms.", "workingLatex": "3y - y = 2y", "explanation": "Three lots of $y$ with one taken away leaves two lots of $y$.", "diagram": null },
        { "stepNumber": 5, "description": "Write the results side by side.", "workingLatex": "6x + 2y", "explanation": "The $x$ and $y$ terms are different, so they must stay as separate terms.", "diagram": null },
        { "stepNumber": 6, "description": "State the simplified expression.", "workingLatex": "4x + 3y + 2x - y = 6x + 2y", "explanation": "This is fully simplified because no two remaining terms share the same letter.", "diagram": null }
      ],
      "finalAnswer": "$6x + 2y$"
    }
  },
  {
    "id": "gcse.algebra.simplifying.q004",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Simplifying and single brackets",
    "subtopicId": "gcse.algebra.simplifying",
    "difficulty": "Easy",
    "marks": 1,
    "answerType": "expression",
    "tags": ["simplifying products", "powers", "index notation"],
    "questionText": "Simplify $a \\times a$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Read the product.", "workingLatex": "a \\times a", "explanation": "This asks for the letter $a$ multiplied by itself.", "diagram": null },
        { "stepNumber": 2, "description": "Recall what index notation means.", "workingLatex": "a \\times a = a^{2}", "explanation": "A small raised number, called an index, records how many equal factors are multiplied together.", "diagram": null },
        { "stepNumber": 3, "description": "Count the factors.", "workingLatex": "\\text{two factors of } a", "explanation": "There are exactly two copies of $a$ being multiplied, so the index is $2$.", "diagram": null },
        { "stepNumber": 4, "description": "Write the power.", "workingLatex": "a^{2}", "explanation": "This is read as \u2018$a$ squared\u2019 and is a shorter way of writing $a \\times a$.", "diagram": null },
        { "stepNumber": 5, "description": "State the simplified expression.", "workingLatex": "a \\times a = a^{2}", "explanation": "Index form is the standard tidy way to record repeated multiplication.", "diagram": null },
        { "stepNumber": 6, "description": "Note the common slip to avoid.", "workingLatex": "a \\times a \\neq 2a", "explanation": "Multiplying $a$ by itself is not the same as adding two lots of $a$, so the answer is $a^{2}$, not $2a$.", "diagram": null }
      ],
      "finalAnswer": "$a^{2}$"
    }
  },
  {
    "id": "gcse.algebra.simplifying.q005",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Simplifying and single brackets",
    "subtopicId": "gcse.algebra.simplifying",
    "difficulty": "Easy",
    "marks": 1,
    "answerType": "expression",
    "tags": ["simplifying products", "multiplication", "coefficients"],
    "questionText": "Simplify $3 \\times 2b$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Read the product.", "workingLatex": "3 \\times 2b", "explanation": "We are multiplying the number $3$ by the term $2b$.", "diagram": null },
        { "stepNumber": 2, "description": "Separate the numbers from the letter.", "workingLatex": "3 \\times 2 \\times b", "explanation": "Multiplication can be done in any order, so we deal with the plain numbers first and keep the letter aside.", "diagram": null },
        { "stepNumber": 3, "description": "Multiply the numbers.", "workingLatex": "3 \\times 2 = 6", "explanation": "Three lots of two gives six, which becomes the new coefficient.", "diagram": null },
        { "stepNumber": 4, "description": "Attach the letter.", "workingLatex": "6b", "explanation": "The letter $b$ is carried through unchanged and sits next to the number.", "diagram": null },
        { "stepNumber": 5, "description": "State the simplified expression.", "workingLatex": "3 \\times 2b = 6b", "explanation": "The product is now written as a single term.", "diagram": null }
      ],
      "finalAnswer": "$6b$"
    }
  },
  {
    "id": "gcse.algebra.simplifying.q006",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Simplifying and single brackets",
    "subtopicId": "gcse.algebra.simplifying",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "expression",
    "tags": ["expanding brackets", "single bracket", "distributive law"],
    "questionText": "Expand $3(x + 2)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Understand what expanding means.", "workingLatex": "3(x + 2)", "explanation": "The $3$ outside multiplies everything inside the bracket, because $3(x+2)$ means three lots of the whole quantity $x+2$.", "diagram": null },
        { "stepNumber": 2, "description": "Multiply the first term inside.", "workingLatex": "3 \\times x = 3x", "explanation": "Three lots of $x$ is $3x$.", "diagram": null },
        { "stepNumber": 3, "description": "Multiply the second term inside.", "workingLatex": "3 \\times 2 = 6", "explanation": "Three lots of $2$ is $6$; every term inside must be multiplied, not just the first.", "diagram": null },
        { "stepNumber": 4, "description": "Add the two products.", "workingLatex": "3x + 6", "explanation": "The bracket was an addition, so the two results are added together.", "diagram": null },
        { "stepNumber": 5, "description": "State the expanded expression.", "workingLatex": "3(x + 2) = 3x + 6", "explanation": "There are no like terms to collect, so this is the final answer.", "diagram": null },
        { "stepNumber": 6, "description": "Check with a test value.", "workingLatex": "x=1:\\ 3(3)=9,\\ 3(1)+6=9", "explanation": "Putting $x=1$ into both forms gives $9$, confirming the expansion is correct.", "diagram": null }
      ],
      "finalAnswer": "$3x + 6$"
    }
  },
  {
    "id": "gcse.algebra.simplifying.q007",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Simplifying and single brackets",
    "subtopicId": "gcse.algebra.simplifying",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "expression",
    "tags": ["expanding brackets", "single bracket", "subtraction"],
    "questionText": "Expand $5(a - 1)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Understand the bracket.", "workingLatex": "5(a - 1)", "explanation": "The $5$ outside multiplies each term inside, since this means five lots of the quantity $a-1$.", "diagram": null },
        { "stepNumber": 2, "description": "Multiply the first term.", "workingLatex": "5 \\times a = 5a", "explanation": "Five lots of $a$ gives $5a$.", "diagram": null },
        { "stepNumber": 3, "description": "Multiply the second term, keeping the sign.", "workingLatex": "5 \\times (-1) = -5", "explanation": "The term inside is $-1$, so multiplying by $5$ gives $-5$; the minus sign travels with the number.", "diagram": null },
        { "stepNumber": 4, "description": "Combine the products.", "workingLatex": "5a - 5", "explanation": "Adding a negative is the same as subtracting, so the answer contains a subtraction.", "diagram": null },
        { "stepNumber": 5, "description": "State the expanded expression.", "workingLatex": "5(a - 1) = 5a - 5", "explanation": "No like terms remain, so the expansion is complete.", "diagram": null },
        { "stepNumber": 6, "description": "Check with a test value.", "workingLatex": "a=2:\\ 5(1)=5,\\ 5(2)-5=5", "explanation": "Both forms give $5$ when $a=2$, which confirms the working.", "diagram": null }
      ],
      "finalAnswer": "$5a - 5$"
    }
  },
  {
    "id": "gcse.algebra.simplifying.q008",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Simplifying and single brackets",
    "subtopicId": "gcse.algebra.simplifying",
    "difficulty": "Easy",
    "marks": 1,
    "answerType": "expression",
    "tags": ["collecting like terms", "addition", "single variable"],
    "questionText": "Simplify $7p + 4p$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Check the terms match.", "workingLatex": "7p + 4p", "explanation": "Both terms use the letter $p$, so they are like terms and can be added.", "diagram": null },
        { "stepNumber": 2, "description": "Add the coefficients.", "workingLatex": "7 + 4 = 11", "explanation": "We simply count the total number of $p$: seven plus four makes eleven.", "diagram": null },
        { "stepNumber": 3, "description": "Attach the variable.", "workingLatex": "11p", "explanation": "The letter stays the same because we have only counted how many $p$ there are.", "diagram": null },
        { "stepNumber": 4, "description": "State the simplified expression.", "workingLatex": "7p + 4p = 11p", "explanation": "The two terms combine into one.", "diagram": null },
        { "stepNumber": 5, "description": "Check the count.", "workingLatex": "11 = 7 + 4", "explanation": "Eleven lots of $p$ is exactly the seven and four we started with, so the answer is correct.", "diagram": null }
      ],
      "finalAnswer": "$11p$"
    }
  },
  {
    "id": "gcse.algebra.simplifying.q009",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Simplifying and single brackets",
    "subtopicId": "gcse.algebra.simplifying",
    "difficulty": "Easy",
    "marks": 1,
    "answerType": "expression",
    "tags": ["collecting like terms", "subtraction", "single variable"],
    "questionText": "Simplify $8y - 3y$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Check the terms match.", "workingLatex": "8y - 3y", "explanation": "Both terms contain $y$, so they are like terms and can be combined.", "diagram": null },
        { "stepNumber": 2, "description": "Subtract the coefficients.", "workingLatex": "8 - 3 = 5", "explanation": "Starting with eight lots of $y$ and taking away three leaves five lots.", "diagram": null },
        { "stepNumber": 3, "description": "Attach the variable.", "workingLatex": "5y", "explanation": "The letter $y$ is kept because we are only counting how many there are.", "diagram": null },
        { "stepNumber": 4, "description": "State the simplified expression.", "workingLatex": "8y - 3y = 5y", "explanation": "The subtraction collapses into a single term.", "diagram": null },
        { "stepNumber": 5, "description": "Check by adding back.", "workingLatex": "5y + 3y = 8y", "explanation": "Adding the three lots back returns the original eight, confirming the answer.", "diagram": null }
      ],
      "finalAnswer": "$5y$"
    }
  },
  {
    "id": "gcse.algebra.simplifying.q010",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Simplifying and single brackets",
    "subtopicId": "gcse.algebra.simplifying",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "expression",
    "tags": ["collecting like terms", "three terms", "single variable"],
    "questionText": "Simplify $6m + 2m - m$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Identify the like terms.", "workingLatex": "6m + 2m - m", "explanation": "All three terms use the letter $m$, so they can be combined.", "diagram": null },
        { "stepNumber": 2, "description": "Recognise the hidden coefficient.", "workingLatex": "m = 1m", "explanation": "A single $m$ counts as one $m$, so we are subtracting one from the total.", "diagram": null },
        { "stepNumber": 3, "description": "Combine the coefficients in order.", "workingLatex": "6 + 2 - 1 = 7", "explanation": "Six plus two is eight, and taking one away leaves seven.", "diagram": null },
        { "stepNumber": 4, "description": "Attach the variable.", "workingLatex": "7m", "explanation": "The letter stays the same throughout the counting.", "diagram": null },
        { "stepNumber": 5, "description": "State the simplified expression.", "workingLatex": "6m + 2m - m = 7m", "explanation": "The three terms tidy into a single term.", "diagram": null }
      ],
      "finalAnswer": "$7m$"
    }
  },
  {
    "id": "gcse.algebra.simplifying.q011",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Simplifying and single brackets",
    "subtopicId": "gcse.algebra.simplifying",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "expression",
    "tags": ["collecting like terms", "two variables", "addition"],
    "questionText": "Simplify $4a + 2b + 3a + 5b$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Group like terms.", "workingLatex": "(4a + 3a) + (2b + 5b)", "explanation": "We collect the $a$ terms together and the $b$ terms together, because only matching letters can combine.", "diagram": null },
        { "stepNumber": 2, "description": "Combine the $a$ terms.", "workingLatex": "4a + 3a = 7a", "explanation": "Four lots of $a$ plus three more gives seven lots.", "diagram": null },
        { "stepNumber": 3, "description": "Combine the $b$ terms.", "workingLatex": "2b + 5b = 7b", "explanation": "Two lots of $b$ plus five more gives seven lots.", "diagram": null },
        { "stepNumber": 4, "description": "Write the terms together.", "workingLatex": "7a + 7b", "explanation": "The $a$ and $b$ terms are different, so they stay separate.", "diagram": null },
        { "stepNumber": 5, "description": "State the simplified expression.", "workingLatex": "4a + 2b + 3a + 5b = 7a + 7b", "explanation": "No further collecting is possible, so this is the final answer.", "diagram": null }
      ],
      "finalAnswer": "$7a + 7b$"
    }
  },
  {
    "id": "gcse.algebra.simplifying.q012",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Simplifying and single brackets",
    "subtopicId": "gcse.algebra.simplifying",
    "difficulty": "Easy",
    "marks": 1,
    "answerType": "expression",
    "tags": ["simplifying products", "multiplication", "coefficients"],
    "questionText": "Simplify $2 \\times 5c$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Read the product.", "workingLatex": "2 \\times 5c", "explanation": "We multiply the number $2$ by the term $5c$.", "diagram": null },
        { "stepNumber": 2, "description": "Deal with the numbers first.", "workingLatex": "2 \\times 5 = 10", "explanation": "Multiplication can be reordered, so we multiply the plain numbers to find the new coefficient.", "diagram": null },
        { "stepNumber": 3, "description": "Attach the letter.", "workingLatex": "10c", "explanation": "The letter $c$ is carried through and written after the number.", "diagram": null },
        { "stepNumber": 4, "description": "State the simplified expression.", "workingLatex": "2 \\times 5c = 10c", "explanation": "The product becomes a single term.", "diagram": null }
      ],
      "finalAnswer": "$10c$"
    }
  },
  {
    "id": "gcse.algebra.simplifying.q013",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Simplifying and single brackets",
    "subtopicId": "gcse.algebra.simplifying",
    "difficulty": "Easy",
    "marks": 1,
    "answerType": "expression",
    "tags": ["simplifying products", "powers", "index notation"],
    "questionText": "Simplify $p \\times p$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Read the product.", "workingLatex": "p \\times p", "explanation": "This is the letter $p$ multiplied by itself.", "diagram": null },
        { "stepNumber": 2, "description": "Count the factors.", "workingLatex": "\\text{two factors of } p", "explanation": "There are two equal copies of $p$ being multiplied together.", "diagram": null },
        { "stepNumber": 3, "description": "Use index notation.", "workingLatex": "p \\times p = p^{2}", "explanation": "The index $2$ records that two copies of $p$ are multiplied, giving a shorter way to write it.", "diagram": null },
        { "stepNumber": 4, "description": "State the simplified expression.", "workingLatex": "p^{2}", "explanation": "This is read as \u2018$p$ squared\u2019.", "diagram": null },
        { "stepNumber": 5, "description": "Avoid the common mistake.", "workingLatex": "p \\times p \\neq 2p", "explanation": "Multiplying is not the same as adding, so the answer is $p^{2}$ and not $2p$.", "diagram": null }
      ],
      "finalAnswer": "$p^{2}$"
    }
  },
  {
    "id": "gcse.algebra.simplifying.q014",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Simplifying and single brackets",
    "subtopicId": "gcse.algebra.simplifying",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "expression",
    "tags": ["expanding brackets", "single bracket", "distributive law"],
    "questionText": "Expand $2(x + 3)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Understand the bracket.", "workingLatex": "2(x + 3)", "explanation": "The $2$ multiplies everything inside, since this means two lots of the quantity $x+3$.", "diagram": null },
        { "stepNumber": 2, "description": "Multiply the first term.", "workingLatex": "2 \\times x = 2x", "explanation": "Two lots of $x$ is $2x$.", "diagram": null },
        { "stepNumber": 3, "description": "Multiply the second term.", "workingLatex": "2 \\times 3 = 6", "explanation": "Two lots of $3$ is $6$; both terms inside must be multiplied.", "diagram": null },
        { "stepNumber": 4, "description": "Combine the products.", "workingLatex": "2x + 6", "explanation": "The bracket was an addition, so the results are added.", "diagram": null },
        { "stepNumber": 5, "description": "State the expanded expression.", "workingLatex": "2(x + 3) = 2x + 6", "explanation": "There are no like terms to collect, so this is complete.", "diagram": null }
      ],
      "finalAnswer": "$2x + 6$"
    }
  },
  {
    "id": "gcse.algebra.simplifying.q015",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Simplifying and single brackets",
    "subtopicId": "gcse.algebra.simplifying",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "expression",
    "tags": ["expanding brackets", "single bracket", "distributive law"],
    "questionText": "Expand $4(y + 5)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Understand the bracket.", "workingLatex": "4(y + 5)", "explanation": "The $4$ multiplies each term inside, meaning four lots of $y+5$.", "diagram": null },
        { "stepNumber": 2, "description": "Multiply the first term.", "workingLatex": "4 \\times y = 4y", "explanation": "Four lots of $y$ gives $4y$.", "diagram": null },
        { "stepNumber": 3, "description": "Multiply the second term.", "workingLatex": "4 \\times 5 = 20", "explanation": "Four lots of $5$ gives $20$.", "diagram": null },
        { "stepNumber": 4, "description": "Combine the products.", "workingLatex": "4y + 20", "explanation": "The two results are added because the bracket contained an addition.", "diagram": null },
        { "stepNumber": 5, "description": "State the expanded expression.", "workingLatex": "4(y + 5) = 4y + 20", "explanation": "This is fully expanded.", "diagram": null },
        { "stepNumber": 6, "description": "Check with a test value.", "workingLatex": "y=1:\\ 4(6)=24,\\ 4(1)+20=24", "explanation": "Both forms give $24$ when $y=1$, confirming the expansion.", "diagram": null }
      ],
      "finalAnswer": "$4y + 20$"
    }
  },
  {
    "id": "gcse.algebra.simplifying.q016",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Simplifying and single brackets",
    "subtopicId": "gcse.algebra.simplifying",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "expression",
    "tags": ["expanding brackets", "single bracket", "subtraction"],
    "questionText": "Expand $6(a - 2)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Understand the bracket.", "workingLatex": "6(a - 2)", "explanation": "The $6$ multiplies every term inside, meaning six lots of $a-2$.", "diagram": null },
        { "stepNumber": 2, "description": "Multiply the first term.", "workingLatex": "6 \\times a = 6a", "explanation": "Six lots of $a$ gives $6a$.", "diagram": null },
        { "stepNumber": 3, "description": "Multiply the second term with its sign.", "workingLatex": "6 \\times (-2) = -12", "explanation": "The term inside is $-2$, so six lots of it is $-12$; the minus sign is kept.", "diagram": null },
        { "stepNumber": 4, "description": "Combine the products.", "workingLatex": "6a - 12", "explanation": "Adding a negative results in a subtraction.", "diagram": null },
        { "stepNumber": 5, "description": "State the expanded expression.", "workingLatex": "6(a - 2) = 6a - 12", "explanation": "The expansion is complete.", "diagram": null }
      ],
      "finalAnswer": "$6a - 12$"
    }
  },
  {
    "id": "gcse.algebra.simplifying.q017",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Simplifying and single brackets",
    "subtopicId": "gcse.algebra.simplifying",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "expression",
    "tags": ["collecting like terms", "constants", "single variable"],
    "questionText": "Simplify $3x + 5 + 2x + 1$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Group like terms.", "workingLatex": "(3x + 2x) + (5 + 1)", "explanation": "The $x$ terms go together and the plain numbers go together, since these are two different kinds of term.", "diagram": null },
        { "stepNumber": 2, "description": "Combine the $x$ terms.", "workingLatex": "3x + 2x = 5x", "explanation": "Three lots of $x$ plus two more gives five lots.", "diagram": null },
        { "stepNumber": 3, "description": "Combine the numbers.", "workingLatex": "5 + 1 = 6", "explanation": "The constant terms are just ordinary numbers, so we add them normally.", "diagram": null },
        { "stepNumber": 4, "description": "Write the results together.", "workingLatex": "5x + 6", "explanation": "A term with $x$ and a plain number cannot be combined, so they stay apart.", "diagram": null },
        { "stepNumber": 5, "description": "State the simplified expression.", "workingLatex": "3x + 5 + 2x + 1 = 5x + 6", "explanation": "This is the tidiest form of the expression.", "diagram": null }
      ],
      "finalAnswer": "$5x + 6$"
    }
  },
  {
    "id": "gcse.algebra.simplifying.q018",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Simplifying and single brackets",
    "subtopicId": "gcse.algebra.simplifying",
    "difficulty": "Easy",
    "marks": 1,
    "answerType": "expression",
    "tags": ["collecting like terms", "subtraction", "single variable"],
    "questionText": "Simplify $9k - 4k$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Check the terms match.", "workingLatex": "9k - 4k", "explanation": "Both terms use the letter $k$, so they are like terms.", "diagram": null },
        { "stepNumber": 2, "description": "Subtract the coefficients.", "workingLatex": "9 - 4 = 5", "explanation": "Nine lots of $k$ with four taken away leaves five lots.", "diagram": null },
        { "stepNumber": 3, "description": "Attach the variable.", "workingLatex": "5k", "explanation": "The letter $k$ stays because we are only counting how many there are.", "diagram": null },
        { "stepNumber": 4, "description": "State the simplified expression.", "workingLatex": "9k - 4k = 5k", "explanation": "The terms combine into one.", "diagram": null },
        { "stepNumber": 5, "description": "Check by adding back.", "workingLatex": "5k + 4k = 9k", "explanation": "Restoring the four lots gives back the original nine, confirming the answer.", "diagram": null }
      ],
      "finalAnswer": "$5k$"
    }
  },
  {
    "id": "gcse.algebra.simplifying.q019",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Simplifying and single brackets",
    "subtopicId": "gcse.algebra.simplifying",
    "difficulty": "Easy",
    "marks": 1,
    "answerType": "expression",
    "tags": ["simplifying products", "multiplication", "coefficients"],
    "questionText": "Simplify $3a \\times 2$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Read the product.", "workingLatex": "3a \\times 2", "explanation": "We are multiplying the term $3a$ by the number $2$.", "diagram": null },
        { "stepNumber": 2, "description": "Bring the numbers together.", "workingLatex": "3 \\times 2 \\times a", "explanation": "Order does not matter in multiplication, so we handle the numbers together and keep the letter to one side.", "diagram": null },
        { "stepNumber": 3, "description": "Multiply the numbers.", "workingLatex": "3 \\times 2 = 6", "explanation": "Three times two is six, which becomes the coefficient.", "diagram": null },
        { "stepNumber": 4, "description": "Attach the letter.", "workingLatex": "6a", "explanation": "The letter $a$ is written after the number to give a single term.", "diagram": null },
        { "stepNumber": 5, "description": "State the simplified expression.", "workingLatex": "3a \\times 2 = 6a", "explanation": "The product is a single tidy term.", "diagram": null }
      ],
      "finalAnswer": "$6a$"
    }
  },
  {
    "id": "gcse.algebra.simplifying.q020",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Simplifying and single brackets",
    "subtopicId": "gcse.algebra.simplifying",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "expression",
    "tags": ["expanding brackets", "single bracket", "distributive law"],
    "questionText": "Expand $7(2 + x)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Understand the bracket.", "workingLatex": "7(2 + x)", "explanation": "The $7$ multiplies both terms inside, meaning seven lots of $2+x$.", "diagram": null },
        { "stepNumber": 2, "description": "Multiply the first term.", "workingLatex": "7 \\times 2 = 14", "explanation": "Seven lots of $2$ gives $14$.", "diagram": null },
        { "stepNumber": 3, "description": "Multiply the second term.", "workingLatex": "7 \\times x = 7x", "explanation": "Seven lots of $x$ gives $7x$.", "diagram": null },
        { "stepNumber": 4, "description": "Combine the products.", "workingLatex": "14 + 7x", "explanation": "The two results are added, keeping the same order as inside the bracket.", "diagram": null },
        { "stepNumber": 5, "description": "State the expanded expression.", "workingLatex": "7(2 + x) = 14 + 7x", "explanation": "This is fully expanded.", "diagram": null }
      ],
      "finalAnswer": "$14 + 7x$"
    }
  },
  {
    "id": "gcse.algebra.simplifying.q021",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Simplifying and single brackets",
    "subtopicId": "gcse.algebra.simplifying",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "expression",
    "tags": ["collecting like terms", "three terms", "single variable"],
    "questionText": "Simplify $10y - 6y + 2y$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Identify the like terms.", "workingLatex": "10y - 6y + 2y", "explanation": "All three terms contain $y$, so they can be combined.", "diagram": null },
        { "stepNumber": 2, "description": "List the coefficients with signs.", "workingLatex": "+10,\\ -6,\\ +2", "explanation": "Each sign belongs to the term after it, so the minus stays with the $6y$.", "diagram": null },
        { "stepNumber": 3, "description": "Combine the coefficients.", "workingLatex": "10 - 6 + 2 = 6", "explanation": "Ten take away six is four, and adding two gives six.", "diagram": null },
        { "stepNumber": 4, "description": "Attach the variable.", "workingLatex": "6y", "explanation": "The letter $y$ is kept as we counted the lots of $y$.", "diagram": null },
        { "stepNumber": 5, "description": "State the simplified expression.", "workingLatex": "10y - 6y + 2y = 6y", "explanation": "The three terms combine into one.", "diagram": null }
      ],
      "finalAnswer": "$6y$"
    }
  },
  {
    "id": "gcse.algebra.simplifying.q022",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Simplifying and single brackets",
    "subtopicId": "gcse.algebra.simplifying",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "expression",
    "tags": ["collecting like terms", "constants", "subtraction"],
    "questionText": "Simplify $5x + 2 - 3x + 4$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Group like terms.", "workingLatex": "(5x - 3x) + (2 + 4)", "explanation": "The $x$ terms are collected together and the plain numbers together, carrying each sign carefully.", "diagram": null },
        { "stepNumber": 2, "description": "Combine the $x$ terms.", "workingLatex": "5x - 3x = 2x", "explanation": "Five lots of $x$ with three taken away leaves two lots.", "diagram": null },
        { "stepNumber": 3, "description": "Combine the numbers.", "workingLatex": "2 + 4 = 6", "explanation": "The constants add together to make six.", "diagram": null },
        { "stepNumber": 4, "description": "Write the results together.", "workingLatex": "2x + 6", "explanation": "The $x$ term and the number are different types, so they stay separate.", "diagram": null },
        { "stepNumber": 5, "description": "State the simplified expression.", "workingLatex": "5x + 2 - 3x + 4 = 2x + 6", "explanation": "This is the fully simplified form.", "diagram": null }
      ],
      "finalAnswer": "$2x + 6$"
    }
  },
  {
    "id": "gcse.algebra.simplifying.q023",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Simplifying and single brackets",
    "subtopicId": "gcse.algebra.simplifying",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "expression",
    "tags": ["expanding brackets", "single bracket", "subtraction"],
    "questionText": "Expand $10(x - 1)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Understand the bracket.", "workingLatex": "10(x - 1)", "explanation": "The $10$ multiplies each term inside, meaning ten lots of $x-1$.", "diagram": null },
        { "stepNumber": 2, "description": "Multiply the first term.", "workingLatex": "10 \\times x = 10x", "explanation": "Ten lots of $x$ gives $10x$.", "diagram": null },
        { "stepNumber": 3, "description": "Multiply the second term with its sign.", "workingLatex": "10 \\times (-1) = -10", "explanation": "The term inside is $-1$, so ten lots of it is $-10$.", "diagram": null },
        { "stepNumber": 4, "description": "Combine the products.", "workingLatex": "10x - 10", "explanation": "Adding the negative result gives a subtraction.", "diagram": null },
        { "stepNumber": 5, "description": "State the expanded expression.", "workingLatex": "10(x - 1) = 10x - 10", "explanation": "The expansion is complete.", "diagram": null }
      ],
      "finalAnswer": "$10x - 10$"
    }
  },
  {
    "id": "gcse.algebra.simplifying.q024",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Simplifying and single brackets",
    "subtopicId": "gcse.algebra.simplifying",
    "difficulty": "Easy",
    "marks": 1,
    "answerType": "expression",
    "tags": ["simplifying products", "multiplication", "coefficients"],
    "questionText": "Simplify $4 \\times 3d$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Read the product.", "workingLatex": "4 \\times 3d", "explanation": "We multiply the number $4$ by the term $3d$.", "diagram": null },
        { "stepNumber": 2, "description": "Multiply the numbers.", "workingLatex": "4 \\times 3 = 12", "explanation": "Dealing with the plain numbers first gives the new coefficient.", "diagram": null },
        { "stepNumber": 3, "description": "Attach the letter.", "workingLatex": "12d", "explanation": "The letter $d$ is carried through and placed after the number.", "diagram": null },
        { "stepNumber": 4, "description": "State the simplified expression.", "workingLatex": "4 \\times 3d = 12d", "explanation": "The product becomes a single term.", "diagram": null }
      ],
      "finalAnswer": "$12d$"
    }
  },
  {
    "id": "gcse.algebra.simplifying.q025",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Simplifying and single brackets",
    "subtopicId": "gcse.algebra.simplifying",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "expression",
    "tags": ["collecting like terms", "negatives", "single variable"],
    "questionText": "Simplify $3x - 7x + 2x$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Identify the like terms.", "workingLatex": "3x - 7x + 2x", "explanation": "All three terms use $x$, so they can be combined into one, even though the answer may turn out negative.", "diagram": null },
        { "stepNumber": 2, "description": "List the coefficients with their signs.", "workingLatex": "+3,\\ -7,\\ +2", "explanation": "Keeping each sign attached to its term is the key to avoiding mistakes with negatives.", "diagram": null },
        { "stepNumber": 3, "description": "Work left to right: first two coefficients.", "workingLatex": "3 - 7 = -4", "explanation": "Taking seven from three drops below zero, giving negative four; this is fine in algebra.", "diagram": null },
        { "stepNumber": 4, "description": "Add the last coefficient.", "workingLatex": "-4 + 2 = -2", "explanation": "Adding two to negative four moves us back up to negative two.", "diagram": null },
        { "stepNumber": 5, "description": "Attach the variable.", "workingLatex": "-2x", "explanation": "The letter $x$ is kept and the negative coefficient sits in front of it.", "diagram": null },
        { "stepNumber": 6, "description": "State the simplified expression.", "workingLatex": "3x - 7x + 2x = -2x", "explanation": "A negative result simply means there are two \u2018negative\u2019 lots of $x$ overall.", "diagram": null },
        { "stepNumber": 7, "description": "Check with a test value.", "workingLatex": "x=1:\\ 3-7+2=-2", "explanation": "Substituting $x=1$ into both the original and the answer gives $-2$, confirming the working.", "diagram": null },
        { "stepNumber": 8, "description": "Sense-check the sign.", "workingLatex": "3 + 2 = 5 < 7", "explanation": "The positive coefficients total five, which is smaller than the seven being subtracted, so a negative answer is expected.", "diagram": null },
        { "stepNumber": 9, "description": "Confirm it is fully simplified.", "workingLatex": "-2x", "explanation": "Only one term remains, so no more collecting is possible.", "diagram": null }
      ],
      "finalAnswer": "$-2x$"
    }
  },
  {
    "id": "gcse.algebra.simplifying.q026",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Simplifying and single brackets",
    "subtopicId": "gcse.algebra.simplifying",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "expression",
    "tags": ["collecting like terms", "two variables", "negatives"],
    "questionText": "Simplify $5a + 3b - 2a + 4b$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Identify the two types of term.", "workingLatex": "5a,\\ -2a\\ \\text{and}\\ 3b,\\ 4b", "explanation": "There are $a$ terms and $b$ terms; only matching letters can be combined.", "diagram": null },
        { "stepNumber": 2, "description": "Group like terms.", "workingLatex": "(5a - 2a) + (3b + 4b)", "explanation": "Rearranging keeps each term with its sign, making the two groups clear.", "diagram": null },
        { "stepNumber": 3, "description": "Combine the $a$ terms.", "workingLatex": "5a - 2a = 3a", "explanation": "Five lots of $a$ with two taken away leaves three lots.", "diagram": null },
        { "stepNumber": 4, "description": "Combine the $b$ terms.", "workingLatex": "3b + 4b = 7b", "explanation": "Three lots of $b$ plus four more gives seven lots.", "diagram": null },
        { "stepNumber": 5, "description": "Write the terms together.", "workingLatex": "3a + 7b", "explanation": "The $a$ and $b$ terms cannot merge because the letters differ.", "diagram": null },
        { "stepNumber": 6, "description": "State the simplified expression.", "workingLatex": "5a + 3b - 2a + 4b = 3a + 7b", "explanation": "This is fully simplified.", "diagram": null },
        { "stepNumber": 7, "description": "Check with test values.", "workingLatex": "a=1,b=1:\\ 5+3-2+4=10,\\ 3+7=10", "explanation": "Both forms give $10$, confirming the collecting was done correctly.", "diagram": null },
        { "stepNumber": 8, "description": "Confirm the final form.", "workingLatex": "3a + 7b", "explanation": "No like terms remain, so this is the answer.", "diagram": null },
        { "stepNumber": 9, "description": "Note a common error.", "workingLatex": "3a + 7b \\neq 10ab", "explanation": "Different letters must stay as separate terms and are never merged into one.", "diagram": null }
      ],
      "finalAnswer": "$3a + 7b$"
    }
  },
  {
    "id": "gcse.algebra.simplifying.q027",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Simplifying and single brackets",
    "subtopicId": "gcse.algebra.simplifying",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "expression",
    "tags": ["collecting like terms", "powers", "quadratic terms"],
    "questionText": "Simplify $3x^{2} + 2x + x^{2} - x$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Spot the different kinds of term.", "workingLatex": "x^{2}\\ \\text{terms and}\\ x\\ \\text{terms}", "explanation": "An $x^{2}$ term and an $x$ term are not alike, because a squared term counts a different quantity from a plain $x$.", "diagram": null },
        { "stepNumber": 2, "description": "Group like terms.", "workingLatex": "(3x^{2} + x^{2}) + (2x - x)", "explanation": "We collect the squared terms together and the linear terms together.", "diagram": null },
        { "stepNumber": 3, "description": "Note the hidden coefficient.", "workingLatex": "x^{2} = 1x^{2}", "explanation": "A lone $x^{2}$ means one lot of $x^{2}$.", "diagram": null },
        { "stepNumber": 4, "description": "Combine the squared terms.", "workingLatex": "3x^{2} + x^{2} = 4x^{2}", "explanation": "Three lots of $x^{2}$ plus one more gives four lots.", "diagram": null },
        { "stepNumber": 5, "description": "Combine the linear terms.", "workingLatex": "2x - x = x", "explanation": "Two lots of $x$ with one taken away leaves a single $x$.", "diagram": null },
        { "stepNumber": 6, "description": "Write the results together.", "workingLatex": "4x^{2} + x", "explanation": "The squared and linear terms stay separate because they are different types.", "diagram": null },
        { "stepNumber": 7, "description": "State the simplified expression.", "workingLatex": "3x^{2} + 2x + x^{2} - x = 4x^{2} + x", "explanation": "This is fully simplified.", "diagram": null },
        { "stepNumber": 8, "description": "Check with a test value.", "workingLatex": "x=2:\\ 12+4+4-2=18,\\ 16+2=18", "explanation": "Both forms give $18$ when $x=2$, confirming the answer.", "diagram": null },
        { "stepNumber": 9, "description": "Confirm the final form.", "workingLatex": "4x^{2} + x", "explanation": "No further like terms exist, so the expression is complete.", "diagram": null }
      ],
      "finalAnswer": "$4x^{2} + x$"
    }
  },
  {
    "id": "gcse.algebra.simplifying.q028",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Simplifying and single brackets",
    "subtopicId": "gcse.algebra.simplifying",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "expression",
    "tags": ["simplifying products", "two variables", "multiplication"],
    "questionText": "Simplify $3a \\times 4b$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Read the product.", "workingLatex": "3a \\times 4b", "explanation": "This is the term $3a$ multiplied by the term $4b$.", "diagram": null },
        { "stepNumber": 2, "description": "Separate numbers and letters.", "workingLatex": "3 \\times 4 \\times a \\times b", "explanation": "Multiplication can be reordered freely, so we gather the numbers and the letters separately.", "diagram": null },
        { "stepNumber": 3, "description": "Multiply the numbers.", "workingLatex": "3 \\times 4 = 12", "explanation": "The coefficients multiply to give $12$.", "diagram": null },
        { "stepNumber": 4, "description": "Multiply the letters.", "workingLatex": "a \\times b = ab", "explanation": "Two different letters multiplied are written side by side as $ab$.", "diagram": null },
        { "stepNumber": 5, "description": "Combine into one term.", "workingLatex": "12ab", "explanation": "The number and the letters join to make a single term.", "diagram": null },
        { "stepNumber": 6, "description": "State the simplified expression.", "workingLatex": "3a \\times 4b = 12ab", "explanation": "This is the tidy product form.", "diagram": null },
        { "stepNumber": 7, "description": "Check with test values.", "workingLatex": "a=2,b=1:\\ 6\\times4=24,\\ 12\\times2=24", "explanation": "Both forms give $24$, confirming the multiplication is correct.", "diagram": null },
        { "stepNumber": 8, "description": "Note the contrast with adding.", "workingLatex": "3a \\times 4b \\neq 7ab", "explanation": "When multiplying we multiply the coefficients, unlike collecting like terms where we would add.", "diagram": null },
        { "stepNumber": 9, "description": "Confirm the final form.", "workingLatex": "12ab", "explanation": "The expression is a single simplified term.", "diagram": null }
      ],
      "finalAnswer": "$12ab$"
    }
  },
  {
    "id": "gcse.algebra.simplifying.q029",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Simplifying and single brackets",
    "subtopicId": "gcse.algebra.simplifying",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "expression",
    "tags": ["simplifying products", "powers", "multiplication"],
    "questionText": "Simplify $2x \\times 3x$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Read the product.", "workingLatex": "2x \\times 3x", "explanation": "Both terms contain $x$, and we are multiplying them together rather than adding.", "diagram": null },
        { "stepNumber": 2, "description": "Separate numbers and letters.", "workingLatex": "2 \\times 3 \\times x \\times x", "explanation": "Rearranging the multiplication lets us handle the numbers and the letters in turn.", "diagram": null },
        { "stepNumber": 3, "description": "Multiply the numbers.", "workingLatex": "2 \\times 3 = 6", "explanation": "The coefficients multiply to give $6$.", "diagram": null },
        { "stepNumber": 4, "description": "Multiply the letters.", "workingLatex": "x \\times x = x^{2}", "explanation": "Two copies of $x$ multiplied give $x$ squared.", "diagram": null },
        { "stepNumber": 5, "description": "Combine into one term.", "workingLatex": "6x^{2}", "explanation": "The number and the power join to make a single squared term.", "diagram": null },
        { "stepNumber": 6, "description": "State the simplified expression.", "workingLatex": "2x \\times 3x = 6x^{2}", "explanation": "This is the simplified product.", "diagram": null },
        { "stepNumber": 7, "description": "Check with a test value.", "workingLatex": "x=2:\\ 4\\times6=24,\\ 6\\times4=24", "explanation": "Both forms give $24$ when $x=2$, confirming the result.", "diagram": null },
        { "stepNumber": 8, "description": "Avoid the collecting error.", "workingLatex": "2x \\times 3x \\neq 5x", "explanation": "Multiplying produces a squared term; only adding like terms would keep a single power of $x$.", "diagram": null },
        { "stepNumber": 9, "description": "Confirm the final form.", "workingLatex": "6x^{2}", "explanation": "The answer is a single term and cannot be simplified further.", "diagram": null }
      ],
      "finalAnswer": "$6x^{2}$"
    }
  },
  {
    "id": "gcse.algebra.simplifying.q030",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Simplifying and single brackets",
    "subtopicId": "gcse.algebra.simplifying",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "expression",
    "tags": ["simplifying products", "powers", "coefficients"],
    "questionText": "Simplify $5m \\times 2m$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Read the product.", "workingLatex": "5m \\times 2m", "explanation": "We multiply two terms that each contain the letter $m$.", "diagram": null },
        { "stepNumber": 2, "description": "Separate numbers and letters.", "workingLatex": "5 \\times 2 \\times m \\times m", "explanation": "We can reorder the multiplication to group numbers together and letters together.", "diagram": null },
        { "stepNumber": 3, "description": "Multiply the numbers.", "workingLatex": "5 \\times 2 = 10", "explanation": "The coefficients multiply to give $10$.", "diagram": null },
        { "stepNumber": 4, "description": "Multiply the letters.", "workingLatex": "m \\times m = m^{2}", "explanation": "Two copies of $m$ give $m$ squared.", "diagram": null },
        { "stepNumber": 5, "description": "Combine into one term.", "workingLatex": "10m^{2}", "explanation": "The number and the squared letter form a single term.", "diagram": null },
        { "stepNumber": 6, "description": "State the simplified expression.", "workingLatex": "5m \\times 2m = 10m^{2}", "explanation": "This is the simplified product.", "diagram": null },
        { "stepNumber": 7, "description": "Check with a test value.", "workingLatex": "m=3:\\ 15\\times6=90,\\ 10\\times9=90", "explanation": "Both forms give $90$ when $m=3$, confirming the answer.", "diagram": null },
        { "stepNumber": 8, "description": "Confirm the final form.", "workingLatex": "10m^{2}", "explanation": "The result is a single term with no further simplification possible.", "diagram": null },
        { "stepNumber": 9, "description": "Reflect on the structure.", "workingLatex": "\\text{coefficients multiply, letters combine}", "explanation": "Recognising this pattern makes all such products quick to simplify.", "diagram": null }
      ],
      "finalAnswer": "$10m^{2}$"
    }
  },
  {
    "id": "gcse.algebra.simplifying.q031",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Simplifying and single brackets",
    "subtopicId": "gcse.algebra.simplifying",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "expression",
    "tags": ["expanding brackets", "negative multiplier", "signs"],
    "questionText": "Expand $-2(x - 4)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Understand the bracket.", "workingLatex": "-2(x - 4)", "explanation": "The multiplier outside is $-2$, so it multiplies every term inside, and we must track signs carefully.", "diagram": null },
        { "stepNumber": 2, "description": "Multiply the first term.", "workingLatex": "-2 \\times x = -2x", "explanation": "A negative times a positive gives a negative, so we get $-2x$.", "diagram": null },
        { "stepNumber": 3, "description": "Identify the second term with its sign.", "workingLatex": "\\text{second term} = -4", "explanation": "The term inside the bracket is $-4$, so we must multiply by $-4$, not $4$.", "diagram": null },
        { "stepNumber": 4, "description": "Multiply the second term.", "workingLatex": "-2 \\times (-4) = +8", "explanation": "A negative times a negative gives a positive, so this term becomes $+8$.", "diagram": null },
        { "stepNumber": 5, "description": "Combine the products.", "workingLatex": "-2x + 8", "explanation": "Putting both results together gives the expanded form.", "diagram": null },
        { "stepNumber": 6, "description": "State the expanded expression.", "workingLatex": "-2(x - 4) = -2x + 8", "explanation": "This is fully expanded with the signs correct.", "diagram": null },
        { "stepNumber": 7, "description": "Check with a test value.", "workingLatex": "x=1:\\ -2(-3)=6,\\ -2(1)+8=6", "explanation": "Both forms give $6$ when $x=1$, confirming the sign work.", "diagram": null },
        { "stepNumber": 8, "description": "Highlight the key idea.", "workingLatex": "-\\times - = +", "explanation": "Multiplying two negatives to get a positive is the step most often slipped, so it is worth stressing.", "diagram": null },
        { "stepNumber": 9, "description": "Confirm the final form.", "workingLatex": "-2x + 8", "explanation": "No like terms remain, so the expansion is complete.", "diagram": null }
      ],
      "finalAnswer": "$-2x + 8$"
    }
  },
  {
    "id": "gcse.algebra.simplifying.q032",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Simplifying and single brackets",
    "subtopicId": "gcse.algebra.simplifying",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "expression",
    "tags": ["expanding brackets", "negative multiplier", "signs"],
    "questionText": "Expand $-3(a + 2)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Understand the bracket.", "workingLatex": "-3(a + 2)", "explanation": "The multiplier is $-3$, so both terms inside are multiplied by a negative.", "diagram": null },
        { "stepNumber": 2, "description": "Multiply the first term.", "workingLatex": "-3 \\times a = -3a", "explanation": "A negative times a positive gives a negative term.", "diagram": null },
        { "stepNumber": 3, "description": "Multiply the second term.", "workingLatex": "-3 \\times 2 = -6", "explanation": "The $+2$ inside is multiplied by $-3$, giving $-6$.", "diagram": null },
        { "stepNumber": 4, "description": "Combine the products.", "workingLatex": "-3a - 6", "explanation": "Both results are negative, so both are subtracted.", "diagram": null },
        { "stepNumber": 5, "description": "State the expanded expression.", "workingLatex": "-3(a + 2) = -3a - 6", "explanation": "This is fully expanded.", "diagram": null },
        { "stepNumber": 6, "description": "Check with a test value.", "workingLatex": "a=1:\\ -3(3)=-9,\\ -3(1)-6=-9", "explanation": "Both forms give $-9$ when $a=1$, confirming the answer.", "diagram": null },
        { "stepNumber": 7, "description": "Note the sign pattern.", "workingLatex": "-\\times + = -", "explanation": "A negative multiplier makes every positive term inside become negative.", "diagram": null },
        { "stepNumber": 8, "description": "Confirm the final form.", "workingLatex": "-3a - 6", "explanation": "No like terms remain, so the expansion is complete.", "diagram": null },
        { "stepNumber": 9, "description": "Reflect on the method.", "workingLatex": "\\text{multiply each term by } -3", "explanation": "Applying the multiplier to every term is what makes an expansion reliable.", "diagram": null }
      ],
      "finalAnswer": "$-3a - 6$"
    }
  },
  {
    "id": "gcse.algebra.simplifying.q033",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Simplifying and single brackets",
    "subtopicId": "gcse.algebra.simplifying",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "expression",
    "tags": ["expanding brackets", "variable multiplier", "powers"],
    "questionText": "Expand $x(x + 5)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Understand the bracket.", "workingLatex": "x(x + 5)", "explanation": "The multiplier outside is the letter $x$, which multiplies every term inside.", "diagram": null },
        { "stepNumber": 2, "description": "Multiply the first term.", "workingLatex": "x \\times x = x^{2}", "explanation": "Multiplying $x$ by itself gives $x$ squared.", "diagram": null },
        { "stepNumber": 3, "description": "Multiply the second term.", "workingLatex": "x \\times 5 = 5x", "explanation": "Multiplying $x$ by $5$ gives $5x$.", "diagram": null },
        { "stepNumber": 4, "description": "Combine the products.", "workingLatex": "x^{2} + 5x", "explanation": "The two results are added, matching the addition inside the bracket.", "diagram": null },
        { "stepNumber": 5, "description": "Check for like terms.", "workingLatex": "x^{2}\\ \\text{and}\\ 5x", "explanation": "A squared term and a linear term are different, so they cannot be combined.", "diagram": null },
        { "stepNumber": 6, "description": "State the expanded expression.", "workingLatex": "x(x + 5) = x^{2} + 5x", "explanation": "This is fully expanded.", "diagram": null },
        { "stepNumber": 7, "description": "Check with a test value.", "workingLatex": "x=3:\\ 3(8)=24,\\ 9+15=24", "explanation": "Both forms give $24$ when $x=3$, confirming the expansion.", "diagram": null },
        { "stepNumber": 8, "description": "Note the key idea.", "workingLatex": "x \\times x = x^{2}", "explanation": "Multiplying by a variable raises the power, which is what produces the squared term.", "diagram": null },
        { "stepNumber": 9, "description": "Confirm the final form.", "workingLatex": "x^{2} + 5x", "explanation": "The expression is complete with no like terms to collect.", "diagram": null }
      ],
      "finalAnswer": "$x^{2} + 5x$"
    }
  },
  {
    "id": "gcse.algebra.simplifying.q034",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Simplifying and single brackets",
    "subtopicId": "gcse.algebra.simplifying",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "expression",
    "tags": ["expanding brackets", "variable multiplier", "powers"],
    "questionText": "Expand $2x(3x - 2)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Understand the bracket.", "workingLatex": "2x(3x - 2)", "explanation": "The multiplier $2x$ has both a number and a letter, and it multiplies every term inside.", "diagram": null },
        { "stepNumber": 2, "description": "Multiply the first term.", "workingLatex": "2x \\times 3x", "explanation": "We multiply the coefficients and the letters separately.", "diagram": null },
        { "stepNumber": 3, "description": "Work out that product.", "workingLatex": "2 \\times 3 = 6,\\ x \\times x = x^{2}", "explanation": "The numbers give $6$ and the letters give $x^{2}$, so the term is $6x^{2}$.", "diagram": null },
        { "stepNumber": 4, "description": "Multiply the second term.", "workingLatex": "2x \\times (-2) = -4x", "explanation": "Two times negative two is $-4$, and the $x$ is carried through, giving $-4x$.", "diagram": null },
        { "stepNumber": 5, "description": "Combine the products.", "workingLatex": "6x^{2} - 4x", "explanation": "Putting the two terms together gives the expanded form.", "diagram": null },
        { "stepNumber": 6, "description": "Check for like terms.", "workingLatex": "6x^{2}\\ \\text{and}\\ -4x", "explanation": "The squared and linear terms are different types, so no collecting is possible.", "diagram": null },
        { "stepNumber": 7, "description": "State the expanded expression.", "workingLatex": "2x(3x - 2) = 6x^{2} - 4x", "explanation": "This is fully expanded.", "diagram": null },
        { "stepNumber": 8, "description": "Check with a test value.", "workingLatex": "x=1:\\ 2(1)=2,\\ 6-4=2", "explanation": "Both forms give $2$ when $x=1$, confirming the working.", "diagram": null },
        { "stepNumber": 9, "description": "Confirm the final form.", "workingLatex": "6x^{2} - 4x", "explanation": "The expression is complete.", "diagram": null }
      ],
      "finalAnswer": "$6x^{2} - 4x$"
    }
  },
  {
    "id": "gcse.algebra.simplifying.q035",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Simplifying and single brackets",
    "subtopicId": "gcse.algebra.simplifying",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "expression",
    "tags": ["expand and simplify", "two brackets", "collecting like terms"],
    "questionText": "Expand and simplify $3(x + 2) + 4(x - 1)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Plan the approach.", "workingLatex": "3(x + 2) + 4(x - 1)", "explanation": "We expand each bracket first, then collect like terms at the end.", "diagram": null },
        { "stepNumber": 2, "description": "Expand the first bracket.", "workingLatex": "3(x + 2) = 3x + 6", "explanation": "Three lots of $x+2$ gives $3x$ and $6$.", "diagram": null },
        { "stepNumber": 3, "description": "Expand the second bracket.", "workingLatex": "4(x - 1) = 4x - 4", "explanation": "Four lots of $x-1$ gives $4x$ and $-4$.", "diagram": null },
        { "stepNumber": 4, "description": "Write both expansions together.", "workingLatex": "3x + 6 + 4x - 4", "explanation": "We now have a single expression ready for collecting.", "diagram": null },
        { "stepNumber": 5, "description": "Group like terms.", "workingLatex": "(3x + 4x) + (6 - 4)", "explanation": "The $x$ terms are gathered together and the constants together.", "diagram": null },
        { "stepNumber": 6, "description": "Combine the $x$ terms.", "workingLatex": "3x + 4x = 7x", "explanation": "Three lots of $x$ plus four more gives seven lots.", "diagram": null },
        { "stepNumber": 7, "description": "Combine the constants.", "workingLatex": "6 - 4 = 2", "explanation": "Six take away four leaves two.", "diagram": null },
        { "stepNumber": 8, "description": "State the simplified expression.", "workingLatex": "3(x + 2) + 4(x - 1) = 7x + 2", "explanation": "This is fully expanded and simplified.", "diagram": null },
        { "stepNumber": 9, "description": "Check with a test value.", "workingLatex": "x=1:\\ 3(3)+4(0)=9,\\ 7+2=9", "explanation": "Both forms give $9$ when $x=1$, confirming the answer.", "diagram": null }
      ],
      "finalAnswer": "$7x + 2$"
    }
  },
  {
    "id": "gcse.algebra.simplifying.q036",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Simplifying and single brackets",
    "subtopicId": "gcse.algebra.simplifying",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "expression",
    "tags": ["expand and simplify", "two brackets", "collecting like terms"],
    "questionText": "Expand and simplify $5(a + 3) + 2(a - 4)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Plan the approach.", "workingLatex": "5(a + 3) + 2(a - 4)", "explanation": "Expand each bracket, then collect the like terms.", "diagram": null },
        { "stepNumber": 2, "description": "Expand the first bracket.", "workingLatex": "5(a + 3) = 5a + 15", "explanation": "Five lots of $a+3$ gives $5a$ and $15$.", "diagram": null },
        { "stepNumber": 3, "description": "Expand the second bracket.", "workingLatex": "2(a - 4) = 2a - 8", "explanation": "Two lots of $a-4$ gives $2a$ and $-8$.", "diagram": null },
        { "stepNumber": 4, "description": "Write both expansions together.", "workingLatex": "5a + 15 + 2a - 8", "explanation": "This forms a single expression to simplify.", "diagram": null },
        { "stepNumber": 5, "description": "Group like terms.", "workingLatex": "(5a + 2a) + (15 - 8)", "explanation": "The $a$ terms and the constants are separated.", "diagram": null },
        { "stepNumber": 6, "description": "Combine the $a$ terms.", "workingLatex": "5a + 2a = 7a", "explanation": "Five lots of $a$ plus two more gives seven lots.", "diagram": null },
        { "stepNumber": 7, "description": "Combine the constants.", "workingLatex": "15 - 8 = 7", "explanation": "Fifteen take away eight leaves seven.", "diagram": null },
        { "stepNumber": 8, "description": "State the simplified expression.", "workingLatex": "5(a + 3) + 2(a - 4) = 7a + 7", "explanation": "This is fully simplified.", "diagram": null },
        { "stepNumber": 9, "description": "Check with a test value.", "workingLatex": "a=2:\\ 5(5)+2(-2)=21,\\ 14+7=21", "explanation": "Both forms give $21$ when $a=2$, confirming the answer.", "diagram": null }
      ],
      "finalAnswer": "$7a + 7$"
    }
  },
  {
    "id": "gcse.algebra.simplifying.q037",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Simplifying and single brackets",
    "subtopicId": "gcse.algebra.simplifying",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "expression",
    "tags": ["factorising", "common factor", "single bracket"],
    "questionText": "Factorise $6x + 15$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Understand factorising.", "workingLatex": "6x + 15", "explanation": "Factorising is the reverse of expanding: we look for a number that divides into both terms and take it outside a bracket.", "diagram": null },
        { "stepNumber": 2, "description": "Find the factors of each coefficient.", "workingLatex": "6 = 2\\times3,\\ 15 = 3\\times5", "explanation": "Breaking the numbers into factors helps us spot what they share.", "diagram": null },
        { "stepNumber": 3, "description": "Identify the highest common factor.", "workingLatex": "\\text{HCF} = 3", "explanation": "The largest number that divides both $6$ and $15$ is $3$.", "diagram": null },
        { "stepNumber": 4, "description": "Divide each term by the common factor.", "workingLatex": "6x \\div 3 = 2x,\\ 15 \\div 3 = 5", "explanation": "These results are what remains inside the bracket after taking out the $3$.", "diagram": null },
        { "stepNumber": 5, "description": "Write the factorised form.", "workingLatex": "3(2x + 5)", "explanation": "The common factor sits outside and the leftovers go inside the bracket.", "diagram": null },
        { "stepNumber": 6, "description": "State the answer.", "workingLatex": "6x + 15 = 3(2x + 5)", "explanation": "This is the factorised expression.", "diagram": null },
        { "stepNumber": 7, "description": "Check by expanding.", "workingLatex": "3(2x + 5) = 6x + 15", "explanation": "Multiplying back out returns the original expression, confirming the factorising.", "diagram": null },
        { "stepNumber": 8, "description": "Confirm it is fully factorised.", "workingLatex": "\\gcd(2, 5) = 1", "explanation": "The terms inside share no further common factor, so the factorising is complete.", "diagram": null },
        { "stepNumber": 9, "description": "Reflect on the check.", "workingLatex": "\\text{expand} \\leftrightarrow \\text{factorise}", "explanation": "Expanding and factorising undo each other, which is why the expansion check is so reliable.", "diagram": null }
      ],
      "finalAnswer": "$3(2x + 5)$"
    }
  },
  {
    "id": "gcse.algebra.simplifying.q038",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Simplifying and single brackets",
    "subtopicId": "gcse.algebra.simplifying",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "expression",
    "tags": ["factorising", "common factor", "variable factor"],
    "questionText": "Factorise $x^{2} + 7x$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Understand the expression.", "workingLatex": "x^{2} + 7x", "explanation": "Both terms contain the letter $x$, so $x$ can be taken out as a common factor.", "diagram": null },
        { "stepNumber": 2, "description": "Write each term showing the factor.", "workingLatex": "x^{2} = x \\times x,\\ 7x = 7 \\times x", "explanation": "Seeing the shared $x$ in each term makes the common factor clear.", "diagram": null },
        { "stepNumber": 3, "description": "Identify the common factor.", "workingLatex": "\\text{common factor} = x", "explanation": "Every term has at least one $x$, so $x$ can come outside the bracket.", "diagram": null },
        { "stepNumber": 4, "description": "Divide each term by $x$.", "workingLatex": "x^{2} \\div x = x,\\ 7x \\div x = 7", "explanation": "These leftovers form what stays inside the bracket.", "diagram": null },
        { "stepNumber": 5, "description": "Write the factorised form.", "workingLatex": "x(x + 7)", "explanation": "The $x$ sits outside and the remaining terms go inside.", "diagram": null },
        { "stepNumber": 6, "description": "State the answer.", "workingLatex": "x^{2} + 7x = x(x + 7)", "explanation": "This is the factorised expression.", "diagram": null },
        { "stepNumber": 7, "description": "Check by expanding.", "workingLatex": "x(x + 7) = x^{2} + 7x", "explanation": "Expanding returns the original, confirming the factorising is correct.", "diagram": null },
        { "stepNumber": 8, "description": "Confirm it is fully factorised.", "workingLatex": "x + 7", "explanation": "The bracket has no further common factor, so the answer is complete.", "diagram": null },
        { "stepNumber": 9, "description": "Note the key skill.", "workingLatex": "\\text{take out the shared } x", "explanation": "Spotting a shared letter is just as valid as spotting a shared number when factorising.", "diagram": null }
      ],
      "finalAnswer": "$x(x + 7)$"
    }
  },
  {
    "id": "gcse.algebra.simplifying.q039",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Simplifying and single brackets",
    "subtopicId": "gcse.algebra.simplifying",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "expression",
    "tags": ["collecting like terms", "constants", "negatives"],
    "questionText": "Simplify $6y - 2 - 4y + 9$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Identify the two kinds of term.", "workingLatex": "6y,\\ -4y\\ \\text{and}\\ -2,\\ +9", "explanation": "There are $y$ terms and constant terms, and each keeps the sign in front of it.", "diagram": null },
        { "stepNumber": 2, "description": "Group like terms.", "workingLatex": "(6y - 4y) + (-2 + 9)", "explanation": "Collecting the $y$ terms and the numbers separately keeps the work organised.", "diagram": null },
        { "stepNumber": 3, "description": "Combine the $y$ terms.", "workingLatex": "6y - 4y = 2y", "explanation": "Six lots of $y$ with four taken away leaves two lots.", "diagram": null },
        { "stepNumber": 4, "description": "Combine the constants.", "workingLatex": "-2 + 9 = 7", "explanation": "Starting at negative two and adding nine reaches positive seven.", "diagram": null },
        { "stepNumber": 5, "description": "Write the results together.", "workingLatex": "2y + 7", "explanation": "The $y$ term and the number are different, so they stay as separate terms.", "diagram": null },
        { "stepNumber": 6, "description": "State the simplified expression.", "workingLatex": "6y - 2 - 4y + 9 = 2y + 7", "explanation": "This is fully simplified.", "diagram": null },
        { "stepNumber": 7, "description": "Check with a test value.", "workingLatex": "y=2:\\ 12-2-8+9=11,\\ 4+7=11", "explanation": "Both forms give $11$ when $y=2$, confirming the answer.", "diagram": null },
        { "stepNumber": 8, "description": "Confirm the final form.", "workingLatex": "2y + 7", "explanation": "No like terms remain, so the expression is complete.", "diagram": null },
        { "stepNumber": 9, "description": "Highlight sign care.", "workingLatex": "-2 + 9 = 7", "explanation": "Tracking the sign of each constant is what keeps the answer accurate.", "diagram": null }
      ],
      "finalAnswer": "$2y + 7$"
    }
  },
  {
    "id": "gcse.algebra.simplifying.q040",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Simplifying and single brackets",
    "subtopicId": "gcse.algebra.simplifying",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "expression",
    "tags": ["expand and simplify", "subtraction of brackets", "signs"],
    "questionText": "Expand and simplify $4(x + 1) - 2(x + 3)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Plan the approach.", "workingLatex": "4(x + 1) - 2(x + 3)", "explanation": "The second bracket is multiplied by $-2$, so the sign in front is part of the multiplier.", "diagram": null },
        { "stepNumber": 2, "description": "Expand the first bracket.", "workingLatex": "4(x + 1) = 4x + 4", "explanation": "Four lots of $x+1$ gives $4x$ and $4$.", "diagram": null },
        { "stepNumber": 3, "description": "Expand the second bracket with its sign.", "workingLatex": "-2(x + 3) = -2x - 6", "explanation": "Multiplying by $-2$ makes both terms negative.", "diagram": null },
        { "stepNumber": 4, "description": "Write both expansions together.", "workingLatex": "4x + 4 - 2x - 6", "explanation": "This is a single expression ready for collecting.", "diagram": null },
        { "stepNumber": 5, "description": "Group like terms.", "workingLatex": "(4x - 2x) + (4 - 6)", "explanation": "We separate the $x$ terms from the constants.", "diagram": null },
        { "stepNumber": 6, "description": "Combine the $x$ terms.", "workingLatex": "4x - 2x = 2x", "explanation": "Four lots of $x$ with two removed leaves two lots.", "diagram": null },
        { "stepNumber": 7, "description": "Combine the constants.", "workingLatex": "4 - 6 = -2", "explanation": "Four take away six drops to negative two.", "diagram": null },
        { "stepNumber": 8, "description": "State the simplified expression.", "workingLatex": "4(x + 1) - 2(x + 3) = 2x - 2", "explanation": "This is fully simplified.", "diagram": null },
        { "stepNumber": 9, "description": "Check with a test value.", "workingLatex": "x=1:\\ 4(2)-2(4)=0,\\ 2-2=0", "explanation": "Both forms give $0$ when $x=1$, confirming the sign work.", "diagram": null }
      ],
      "finalAnswer": "$2x - 2$"
    }
  },
  {
    "id": "gcse.algebra.simplifying.q041",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Simplifying and single brackets",
    "subtopicId": "gcse.algebra.simplifying",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "expression",
    "tags": ["expanding brackets", "variable multiplier", "powers"],
    "questionText": "Expand $3x(2x + 4)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Understand the bracket.", "workingLatex": "3x(2x + 4)", "explanation": "The multiplier $3x$ multiplies each term inside the bracket.", "diagram": null },
        { "stepNumber": 2, "description": "Multiply the first term.", "workingLatex": "3x \\times 2x", "explanation": "We multiply the numbers and the letters separately.", "diagram": null },
        { "stepNumber": 3, "description": "Work out that product.", "workingLatex": "3 \\times 2 = 6,\\ x \\times x = x^{2}", "explanation": "The numbers give $6$ and the letters give $x^{2}$, so the term is $6x^{2}$.", "diagram": null },
        { "stepNumber": 4, "description": "Multiply the second term.", "workingLatex": "3x \\times 4 = 12x", "explanation": "Three times four is twelve, and the $x$ is carried through.", "diagram": null },
        { "stepNumber": 5, "description": "Combine the products.", "workingLatex": "6x^{2} + 12x", "explanation": "Adding the two terms gives the expanded form.", "diagram": null },
        { "stepNumber": 6, "description": "Check for like terms.", "workingLatex": "6x^{2}\\ \\text{and}\\ 12x", "explanation": "A squared term and a linear term cannot be combined.", "diagram": null },
        { "stepNumber": 7, "description": "State the expanded expression.", "workingLatex": "3x(2x + 4) = 6x^{2} + 12x", "explanation": "This is fully expanded.", "diagram": null },
        { "stepNumber": 8, "description": "Check with a test value.", "workingLatex": "x=1:\\ 3(6)=18,\\ 6+12=18", "explanation": "Both forms give $18$ when $x=1$, confirming the answer.", "diagram": null },
        { "stepNumber": 9, "description": "Confirm the final form.", "workingLatex": "6x^{2} + 12x", "explanation": "The expression is complete.", "diagram": null }
      ],
      "finalAnswer": "$6x^{2} + 12x$"
    }
  },
  {
    "id": "gcse.algebra.simplifying.q042",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Simplifying and single brackets",
    "subtopicId": "gcse.algebra.simplifying",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "expression",
    "tags": ["factorising", "common factor", "single bracket"],
    "questionText": "Factorise $10a - 15$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Understand the task.", "workingLatex": "10a - 15", "explanation": "We look for the largest number that divides both terms and take it outside a bracket.", "diagram": null },
        { "stepNumber": 2, "description": "Factor each coefficient.", "workingLatex": "10 = 2\\times5,\\ 15 = 3\\times5", "explanation": "Breaking the numbers down reveals the shared factor.", "diagram": null },
        { "stepNumber": 3, "description": "Identify the highest common factor.", "workingLatex": "\\text{HCF} = 5", "explanation": "The largest number dividing both $10$ and $15$ is $5$.", "diagram": null },
        { "stepNumber": 4, "description": "Divide each term by $5$.", "workingLatex": "10a \\div 5 = 2a,\\ 15 \\div 5 = 3", "explanation": "These leftovers become the contents of the bracket, keeping the minus sign.", "diagram": null },
        { "stepNumber": 5, "description": "Write the factorised form.", "workingLatex": "5(2a - 3)", "explanation": "The common factor is outside and the remaining terms inside.", "diagram": null },
        { "stepNumber": 6, "description": "State the answer.", "workingLatex": "10a - 15 = 5(2a - 3)", "explanation": "This is the factorised expression.", "diagram": null },
        { "stepNumber": 7, "description": "Check by expanding.", "workingLatex": "5(2a - 3) = 10a - 15", "explanation": "Expanding returns the original, confirming the factorising.", "diagram": null },
        { "stepNumber": 8, "description": "Confirm it is fully factorised.", "workingLatex": "\\gcd(2, 3) = 1", "explanation": "The terms inside share no further factor, so the answer is complete.", "diagram": null },
        { "stepNumber": 9, "description": "Reflect on the method.", "workingLatex": "\\text{HCF outside, leftovers inside}", "explanation": "This structure is the same for every take-out-a-common-factor question.", "diagram": null }
      ],
      "finalAnswer": "$5(2a - 3)$"
    }
  },
  {
    "id": "gcse.algebra.simplifying.q043",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Simplifying and single brackets",
    "subtopicId": "gcse.algebra.simplifying",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "expression",
    "tags": ["factorising", "variable factor", "quadratic terms"],
    "questionText": "Factorise $x^{2} - 4x$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Understand the expression.", "workingLatex": "x^{2} - 4x", "explanation": "Both terms contain $x$, so we can take a factor of $x$ outside a bracket.", "diagram": null },
        { "stepNumber": 2, "description": "Write each term showing the factor.", "workingLatex": "x^{2} = x \\times x,\\ 4x = 4 \\times x", "explanation": "The shared $x$ in each term is what we take out.", "diagram": null },
        { "stepNumber": 3, "description": "Identify the common factor.", "workingLatex": "\\text{common factor} = x", "explanation": "There is no common number beyond $1$, but the letter $x$ is shared.", "diagram": null },
        { "stepNumber": 4, "description": "Divide each term by $x$.", "workingLatex": "x^{2} \\div x = x,\\ -4x \\div x = -4", "explanation": "The leftovers, with signs kept, go inside the bracket.", "diagram": null },
        { "stepNumber": 5, "description": "Write the factorised form.", "workingLatex": "x(x - 4)", "explanation": "The $x$ sits outside and the remaining terms inside.", "diagram": null },
        { "stepNumber": 6, "description": "State the answer.", "workingLatex": "x^{2} - 4x = x(x - 4)", "explanation": "This is the factorised expression.", "diagram": null },
        { "stepNumber": 7, "description": "Check by expanding.", "workingLatex": "x(x - 4) = x^{2} - 4x", "explanation": "Expanding returns the original, confirming the factorising.", "diagram": null },
        { "stepNumber": 8, "description": "Confirm it is fully factorised.", "workingLatex": "x - 4", "explanation": "The bracket has no further common factor, so the answer is complete.", "diagram": null },
        { "stepNumber": 9, "description": "Note the sign inside.", "workingLatex": "-4x \\div x = -4", "explanation": "Keeping the minus sign with the term ensures the bracket is correct.", "diagram": null }
      ],
      "finalAnswer": "$x(x - 4)$"
    }
  },
  {
    "id": "gcse.algebra.simplifying.q044",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Simplifying and single brackets",
    "subtopicId": "gcse.algebra.simplifying",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "expression",
    "tags": ["expanding brackets", "negative multiplier", "signs"],
    "questionText": "Expand $-4(2x - 3)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Understand the bracket.", "workingLatex": "-4(2x - 3)", "explanation": "The multiplier is $-4$, so both terms inside are multiplied by a negative number.", "diagram": null },
        { "stepNumber": 2, "description": "Multiply the first term.", "workingLatex": "-4 \\times 2x = -8x", "explanation": "Negative four times $2x$ gives $-8x$.", "diagram": null },
        { "stepNumber": 3, "description": "Identify the second term with its sign.", "workingLatex": "\\text{second term} = -3", "explanation": "The term inside is $-3$, so we multiply by $-3$.", "diagram": null },
        { "stepNumber": 4, "description": "Multiply the second term.", "workingLatex": "-4 \\times (-3) = +12", "explanation": "A negative times a negative gives a positive, so this becomes $+12$.", "diagram": null },
        { "stepNumber": 5, "description": "Combine the products.", "workingLatex": "-8x + 12", "explanation": "Putting the two results together gives the expansion.", "diagram": null },
        { "stepNumber": 6, "description": "State the expanded expression.", "workingLatex": "-4(2x - 3) = -8x + 12", "explanation": "This is fully expanded with correct signs.", "diagram": null },
        { "stepNumber": 7, "description": "Check with a test value.", "workingLatex": "x=1:\\ -4(-1)=4,\\ -8+12=4", "explanation": "Both forms give $4$ when $x=1$, confirming the sign work.", "diagram": null },
        { "stepNumber": 8, "description": "Highlight the sign rule.", "workingLatex": "-\\times - = +", "explanation": "The second term turning positive is the step to watch for.", "diagram": null },
        { "stepNumber": 9, "description": "Confirm the final form.", "workingLatex": "-8x + 12", "explanation": "No like terms remain, so the expansion is complete.", "diagram": null }
      ],
      "finalAnswer": "$-8x + 12$"
    }
  },
  {
    "id": "gcse.algebra.simplifying.q045",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Simplifying and single brackets",
    "subtopicId": "gcse.algebra.simplifying",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "expression",
    "tags": ["collecting like terms", "powers", "quadratic terms"],
    "questionText": "Simplify $2a^{2} + 5a - a^{2} + 3a$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Identify the kinds of term.", "workingLatex": "a^{2}\\ \\text{terms and}\\ a\\ \\text{terms}", "explanation": "The squared terms and the plain $a$ terms are different types and must be collected separately.", "diagram": null },
        { "stepNumber": 2, "description": "Group like terms.", "workingLatex": "(2a^{2} - a^{2}) + (5a + 3a)", "explanation": "We gather the $a^{2}$ terms together and the $a$ terms together.", "diagram": null },
        { "stepNumber": 3, "description": "Note the hidden coefficient.", "workingLatex": "a^{2} = 1a^{2}", "explanation": "A lone $a^{2}$ counts as one, so subtracting it removes one from the count.", "diagram": null },
        { "stepNumber": 4, "description": "Combine the squared terms.", "workingLatex": "2a^{2} - a^{2} = a^{2}", "explanation": "Two lots of $a^{2}$ with one taken away leaves one lot.", "diagram": null },
        { "stepNumber": 5, "description": "Combine the $a$ terms.", "workingLatex": "5a + 3a = 8a", "explanation": "Five lots of $a$ plus three more gives eight lots.", "diagram": null },
        { "stepNumber": 6, "description": "Write the results together.", "workingLatex": "a^{2} + 8a", "explanation": "The squared and linear terms stay separate.", "diagram": null },
        { "stepNumber": 7, "description": "State the simplified expression.", "workingLatex": "2a^{2} + 5a - a^{2} + 3a = a^{2} + 8a", "explanation": "This is fully simplified.", "diagram": null },
        { "stepNumber": 8, "description": "Check with a test value.", "workingLatex": "a=2:\\ 8+10-4+6=20,\\ 4+16=20", "explanation": "Both forms give $20$ when $a=2$, confirming the answer.", "diagram": null },
        { "stepNumber": 9, "description": "Confirm the final form.", "workingLatex": "a^{2} + 8a", "explanation": "No further collecting is possible.", "diagram": null }
      ],
      "finalAnswer": "$a^{2} + 8a$"
    }
  },
  {
    "id": "gcse.algebra.simplifying.q046",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Simplifying and single brackets",
    "subtopicId": "gcse.algebra.simplifying",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "expression",
    "tags": ["simplifying products", "two variables", "multiplication"],
    "questionText": "Simplify $4p \\times 3q$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Read the product.", "workingLatex": "4p \\times 3q", "explanation": "We multiply the term $4p$ by the term $3q$.", "diagram": null },
        { "stepNumber": 2, "description": "Separate numbers and letters.", "workingLatex": "4 \\times 3 \\times p \\times q", "explanation": "Multiplication can be reordered, so we group the numbers and letters separately.", "diagram": null },
        { "stepNumber": 3, "description": "Multiply the numbers.", "workingLatex": "4 \\times 3 = 12", "explanation": "The coefficients multiply to give $12$.", "diagram": null },
        { "stepNumber": 4, "description": "Multiply the letters.", "workingLatex": "p \\times q = pq", "explanation": "Two different letters multiplied are written side by side.", "diagram": null },
        { "stepNumber": 5, "description": "Combine into one term.", "workingLatex": "12pq", "explanation": "The number and letters join to form a single term.", "diagram": null },
        { "stepNumber": 6, "description": "State the simplified expression.", "workingLatex": "4p \\times 3q = 12pq", "explanation": "This is the tidy product form.", "diagram": null },
        { "stepNumber": 7, "description": "Check with test values.", "workingLatex": "p=1,q=2:\\ 4\\times6=24,\\ 12\\times2=24", "explanation": "Both forms give $24$, confirming the answer.", "diagram": null },
        { "stepNumber": 8, "description": "Confirm the final form.", "workingLatex": "12pq", "explanation": "The expression is a single simplified term.", "diagram": null },
        { "stepNumber": 9, "description": "Note the writing convention.", "workingLatex": "pq = qp", "explanation": "The order of the letters does not matter, but writing them alphabetically is tidy.", "diagram": null }
      ],
      "finalAnswer": "$12pq$"
    }
  },
  {
    "id": "gcse.algebra.simplifying.q047",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Simplifying and single brackets",
    "subtopicId": "gcse.algebra.simplifying",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "expression",
    "tags": ["expand and simplify", "two brackets", "collecting like terms"],
    "questionText": "Expand and simplify $2(3x + 1) + 3(x - 2)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Plan the approach.", "workingLatex": "2(3x + 1) + 3(x - 2)", "explanation": "Expand both brackets, then collect the like terms.", "diagram": null },
        { "stepNumber": 2, "description": "Expand the first bracket.", "workingLatex": "2(3x + 1) = 6x + 2", "explanation": "Two lots of $3x+1$ gives $6x$ and $2$.", "diagram": null },
        { "stepNumber": 3, "description": "Expand the second bracket.", "workingLatex": "3(x - 2) = 3x - 6", "explanation": "Three lots of $x-2$ gives $3x$ and $-6$.", "diagram": null },
        { "stepNumber": 4, "description": "Write both expansions together.", "workingLatex": "6x + 2 + 3x - 6", "explanation": "This forms one expression to simplify.", "diagram": null },
        { "stepNumber": 5, "description": "Group like terms.", "workingLatex": "(6x + 3x) + (2 - 6)", "explanation": "The $x$ terms and constants are gathered separately.", "diagram": null },
        { "stepNumber": 6, "description": "Combine the $x$ terms.", "workingLatex": "6x + 3x = 9x", "explanation": "Six lots of $x$ plus three more gives nine lots.", "diagram": null },
        { "stepNumber": 7, "description": "Combine the constants.", "workingLatex": "2 - 6 = -4", "explanation": "Two take away six drops to negative four.", "diagram": null },
        { "stepNumber": 8, "description": "State the simplified expression.", "workingLatex": "2(3x + 1) + 3(x - 2) = 9x - 4", "explanation": "This is fully simplified.", "diagram": null },
        { "stepNumber": 9, "description": "Check with a test value.", "workingLatex": "x=1:\\ 2(4)+3(-1)=5,\\ 9-4=5", "explanation": "Both forms give $5$ when $x=1$, confirming the answer.", "diagram": null }
      ],
      "finalAnswer": "$9x - 4$"
    }
  },
  {
    "id": "gcse.algebra.simplifying.q048",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Simplifying and single brackets",
    "subtopicId": "gcse.algebra.simplifying",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "expression",
    "tags": ["factorising", "common factor", "single bracket"],
    "questionText": "Factorise $8x + 12$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Understand the task.", "workingLatex": "8x + 12", "explanation": "We take the highest common factor of the two terms outside a bracket.", "diagram": null },
        { "stepNumber": 2, "description": "Factor each coefficient.", "workingLatex": "8 = 4\\times2,\\ 12 = 4\\times3", "explanation": "Breaking the numbers down shows the largest shared factor.", "diagram": null },
        { "stepNumber": 3, "description": "Identify the highest common factor.", "workingLatex": "\\text{HCF} = 4", "explanation": "The largest number dividing both $8$ and $12$ is $4$.", "diagram": null },
        { "stepNumber": 4, "description": "Divide each term by $4$.", "workingLatex": "8x \\div 4 = 2x,\\ 12 \\div 4 = 3", "explanation": "These leftovers form the inside of the bracket.", "diagram": null },
        { "stepNumber": 5, "description": "Write the factorised form.", "workingLatex": "4(2x + 3)", "explanation": "The common factor is outside and the remaining terms inside.", "diagram": null },
        { "stepNumber": 6, "description": "State the answer.", "workingLatex": "8x + 12 = 4(2x + 3)", "explanation": "This is the factorised expression.", "diagram": null },
        { "stepNumber": 7, "description": "Check by expanding.", "workingLatex": "4(2x + 3) = 8x + 12", "explanation": "Expanding returns the original, confirming the factorising.", "diagram": null },
        { "stepNumber": 8, "description": "Confirm it is fully factorised.", "workingLatex": "\\gcd(2, 3) = 1", "explanation": "The terms inside share no further factor, so the answer is complete.", "diagram": null },
        { "stepNumber": 9, "description": "Warn against a partial factor.", "workingLatex": "2(4x + 6)\\ \\text{is not complete}", "explanation": "Taking out only $2$ leaves a common factor inside, so we must use the full HCF of $4$.", "diagram": null }
      ],
      "finalAnswer": "$4(2x + 3)$"
    }
  },
  {
    "id": "gcse.algebra.simplifying.q049",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Simplifying and single brackets",
    "subtopicId": "gcse.algebra.simplifying",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "expression",
    "tags": ["expanding brackets", "variable multiplier", "powers"],
    "questionText": "Expand $5x(x - 3)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Understand the bracket.", "workingLatex": "5x(x - 3)", "explanation": "The multiplier $5x$ multiplies each term inside.", "diagram": null },
        { "stepNumber": 2, "description": "Multiply the first term.", "workingLatex": "5x \\times x = 5x^{2}", "explanation": "Five times one is five, and $x$ times $x$ is $x^{2}$, giving $5x^{2}$.", "diagram": null },
        { "stepNumber": 3, "description": "Identify the second term with its sign.", "workingLatex": "\\text{second term} = -3", "explanation": "The term inside is $-3$, so we multiply by $-3$.", "diagram": null },
        { "stepNumber": 4, "description": "Multiply the second term.", "workingLatex": "5x \\times (-3) = -15x", "explanation": "Five times negative three is $-15$, and the $x$ is carried through.", "diagram": null },
        { "stepNumber": 5, "description": "Combine the products.", "workingLatex": "5x^{2} - 15x", "explanation": "Putting the two terms together gives the expansion.", "diagram": null },
        { "stepNumber": 6, "description": "Check for like terms.", "workingLatex": "5x^{2}\\ \\text{and}\\ -15x", "explanation": "The squared and linear terms are different, so nothing can be collected.", "diagram": null },
        { "stepNumber": 7, "description": "State the expanded expression.", "workingLatex": "5x(x - 3) = 5x^{2} - 15x", "explanation": "This is fully expanded.", "diagram": null },
        { "stepNumber": 8, "description": "Check with a test value.", "workingLatex": "x=2:\\ 10(-1)=-10,\\ 20-30=-10", "explanation": "Both forms give $-10$ when $x=2$, confirming the answer.", "diagram": null },
        { "stepNumber": 9, "description": "Confirm the final form.", "workingLatex": "5x^{2} - 15x", "explanation": "The expression is complete.", "diagram": null }
      ],
      "finalAnswer": "$5x^{2} - 15x$"
    }
  },
  {
    "id": "gcse.algebra.simplifying.q050",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Simplifying and single brackets",
    "subtopicId": "gcse.algebra.simplifying",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "expression",
    "tags": ["factorising", "common factor", "single bracket"],
    "questionText": "Factorise $7a + 21$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Understand the task.", "workingLatex": "7a + 21", "explanation": "We search for the largest number dividing both terms to take outside a bracket.", "diagram": null },
        { "stepNumber": 2, "description": "Factor each coefficient.", "workingLatex": "7 = 7\\times1,\\ 21 = 7\\times3", "explanation": "Both numbers are multiples of $7$.", "diagram": null },
        { "stepNumber": 3, "description": "Identify the highest common factor.", "workingLatex": "\\text{HCF} = 7", "explanation": "The largest number dividing both $7$ and $21$ is $7$.", "diagram": null },
        { "stepNumber": 4, "description": "Divide each term by $7$.", "workingLatex": "7a \\div 7 = a,\\ 21 \\div 7 = 3", "explanation": "These leftovers form the inside of the bracket.", "diagram": null },
        { "stepNumber": 5, "description": "Write the factorised form.", "workingLatex": "7(a + 3)", "explanation": "The common factor is outside and the remaining terms inside.", "diagram": null },
        { "stepNumber": 6, "description": "State the answer.", "workingLatex": "7a + 21 = 7(a + 3)", "explanation": "This is the factorised expression.", "diagram": null },
        { "stepNumber": 7, "description": "Check by expanding.", "workingLatex": "7(a + 3) = 7a + 21", "explanation": "Expanding returns the original, confirming the factorising.", "diagram": null },
        { "stepNumber": 8, "description": "Confirm it is fully factorised.", "workingLatex": "a + 3", "explanation": "The bracket has no further common factor, so the answer is complete.", "diagram": null },
        { "stepNumber": 9, "description": "Reflect on the leftover.", "workingLatex": "7a \\div 7 = a", "explanation": "When a term divides exactly by the factor, only the letter remains inside.", "diagram": null }
      ],
      "finalAnswer": "$7(a + 3)$"
    }
  },
  {
    "id": "gcse.algebra.simplifying.q051",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Simplifying and single brackets",
    "subtopicId": "gcse.algebra.simplifying",
    "difficulty": "Hard",
    "marks": 4,
    "answerType": "expression",
    "tags": ["expand and simplify", "negative multiplier", "signs"],
    "questionText": "Expand and simplify $3(2x + 1) - 2(x - 4)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Plan the approach.", "workingLatex": "3(2x + 1) - 2(x - 4)", "explanation": "Expand each bracket carefully, treating the minus sign as part of the second multiplier, then collect like terms.", "diagram": null },
        { "stepNumber": 2, "description": "Expand the first bracket.", "workingLatex": "3 \\times 2x = 6x", "explanation": "Three lots of $2x$ gives $6x$.", "diagram": null },
        { "stepNumber": 3, "description": "Finish the first bracket.", "workingLatex": "3 \\times 1 = 3", "explanation": "Three lots of $1$ gives $3$, so the first bracket becomes $6x + 3$.", "diagram": null },
        { "stepNumber": 4, "description": "Note the second multiplier.", "workingLatex": "\\text{multiplier} = -2", "explanation": "The subtraction means the whole second bracket is multiplied by $-2$.", "diagram": null },
        { "stepNumber": 5, "description": "Expand the second bracket, first term.", "workingLatex": "-2 \\times x = -2x", "explanation": "Negative two times $x$ gives $-2x$.", "diagram": null },
        { "stepNumber": 6, "description": "Expand the second bracket, second term.", "workingLatex": "-2 \\times (-4) = +8", "explanation": "A negative times a negative gives a positive, so this term is $+8$.", "diagram": null },
        { "stepNumber": 7, "description": "Write all terms together.", "workingLatex": "6x + 3 - 2x + 8", "explanation": "Both expansions are combined into one expression.", "diagram": null },
        { "stepNumber": 8, "description": "Group like terms.", "workingLatex": "(6x - 2x) + (3 + 8)", "explanation": "The $x$ terms and constants are separated for collecting.", "diagram": null },
        { "stepNumber": 9, "description": "Combine the $x$ terms.", "workingLatex": "6x - 2x = 4x", "explanation": "Six lots of $x$ with two removed leaves four lots.", "diagram": null },
        { "stepNumber": 10, "description": "Combine the constants.", "workingLatex": "3 + 8 = 11", "explanation": "Three plus eight gives eleven.", "diagram": null },
        { "stepNumber": 11, "description": "State the simplified expression.", "workingLatex": "3(2x + 1) - 2(x - 4) = 4x + 11", "explanation": "This is fully expanded and simplified.", "diagram": null },
        { "stepNumber": 12, "description": "Check with a test value.", "workingLatex": "x=1:\\ 3(3)-2(-3)=15,\\ 4+11=15", "explanation": "Both forms give $15$ when $x=1$, confirming the sign work.", "diagram": null },
        { "stepNumber": 13, "description": "Confirm the final form.", "workingLatex": "4x + 11", "explanation": "No like terms remain, so the expression is complete.", "diagram": null }
      ],
      "finalAnswer": "$4x + 11$"
    }
  },
  {
    "id": "gcse.algebra.simplifying.q052",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Simplifying and single brackets",
    "subtopicId": "gcse.algebra.simplifying",
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "expression",
    "tags": ["expand and simplify", "three brackets", "signs"],
    "questionText": "Expand and simplify $5(x - 2) - 3(2x - 1) + 4$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Plan the approach.", "workingLatex": "5(x - 2) - 3(2x - 1) + 4", "explanation": "Expand the two brackets, carry the extra $+4$ through, then collect like terms.", "diagram": null },
        { "stepNumber": 2, "description": "Expand the first bracket.", "workingLatex": "5(x - 2) = 5x - 10", "explanation": "Five lots of $x-2$ gives $5x$ and $-10$.", "diagram": null },
        { "stepNumber": 3, "description": "Note the second multiplier.", "workingLatex": "\\text{multiplier} = -3", "explanation": "The subtraction sign makes the second bracket multiplied by $-3$.", "diagram": null },
        { "stepNumber": 4, "description": "Expand the second bracket, first term.", "workingLatex": "-3 \\times 2x = -6x", "explanation": "Negative three times $2x$ gives $-6x$.", "diagram": null },
        { "stepNumber": 5, "description": "Expand the second bracket, second term.", "workingLatex": "-3 \\times (-1) = +3", "explanation": "A negative times a negative gives a positive $+3$.", "diagram": null },
        { "stepNumber": 6, "description": "Write all terms together.", "workingLatex": "5x - 10 - 6x + 3 + 4", "explanation": "Both expansions and the extra constant are combined.", "diagram": null },
        { "stepNumber": 7, "description": "Group like terms.", "workingLatex": "(5x - 6x) + (-10 + 3 + 4)", "explanation": "The $x$ terms and constants are separated for collecting.", "diagram": null },
        { "stepNumber": 8, "description": "Combine the $x$ terms.", "workingLatex": "5x - 6x = -x", "explanation": "Five lots of $x$ with six taken away leaves negative one lot of $x$.", "diagram": null },
        { "stepNumber": 9, "description": "Combine the constants.", "workingLatex": "-10 + 3 + 4 = -3", "explanation": "Starting at negative ten, adding three and then four reaches negative three.", "diagram": null },
        { "stepNumber": 10, "description": "Write the results together.", "workingLatex": "-x - 3", "explanation": "The $x$ term and the constant stay separate.", "diagram": null },
        { "stepNumber": 11, "description": "State the simplified expression.", "workingLatex": "5(x - 2) - 3(2x - 1) + 4 = -x - 3", "explanation": "This is fully expanded and simplified.", "diagram": null },
        { "stepNumber": 12, "description": "Check with a test value.", "workingLatex": "x=2:\\ 5(0)-3(3)+4=-5,\\ -2-3=-5", "explanation": "Both forms give $-5$ when $x=2$, confirming the answer.", "diagram": null },
        { "stepNumber": 13, "description": "Confirm the final form.", "workingLatex": "-x - 3", "explanation": "No like terms remain, so the expression is complete.", "diagram": null }
      ],
      "finalAnswer": "$-x - 3$"
    }
  },
  {
    "id": "gcse.algebra.simplifying.q053",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Simplifying and single brackets",
    "subtopicId": "gcse.algebra.simplifying",
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "expression",
    "tags": ["perimeter", "forming expressions", "expand and simplify"],
    "questionText": "A rectangle has length $(2x + 3)$ cm and width $(x - 1)$ cm. Find and simplify an expression for its perimeter.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall the perimeter rule.", "workingLatex": "P = 2 \\times \\text{length} + 2 \\times \\text{width}", "explanation": "A rectangle has two lengths and two widths, so the perimeter is twice each added together.", "diagram": null },
        { "stepNumber": 2, "description": "Substitute the expressions.", "workingLatex": "P = 2(2x + 3) + 2(x - 1)", "explanation": "We place the given length and width into the perimeter rule.", "diagram": null },
        { "stepNumber": 3, "description": "Expand the first bracket.", "workingLatex": "2(2x + 3) = 4x + 6", "explanation": "Two lots of $2x+3$ gives $4x$ and $6$.", "diagram": null },
        { "stepNumber": 4, "description": "Expand the second bracket.", "workingLatex": "2(x - 1) = 2x - 2", "explanation": "Two lots of $x-1$ gives $2x$ and $-2$.", "diagram": null },
        { "stepNumber": 5, "description": "Write both expansions together.", "workingLatex": "4x + 6 + 2x - 2", "explanation": "The perimeter is now a single expression to simplify.", "diagram": null },
        { "stepNumber": 6, "description": "Group like terms.", "workingLatex": "(4x + 2x) + (6 - 2)", "explanation": "We separate the $x$ terms from the constants.", "diagram": null },
        { "stepNumber": 7, "description": "Combine the $x$ terms.", "workingLatex": "4x + 2x = 6x", "explanation": "Four lots of $x$ plus two more gives six lots.", "diagram": null },
        { "stepNumber": 8, "description": "Combine the constants.", "workingLatex": "6 - 2 = 4", "explanation": "Six take away two leaves four.", "diagram": null },
        { "stepNumber": 9, "description": "State the perimeter expression.", "workingLatex": "P = 6x + 4", "explanation": "This simplified expression gives the perimeter in centimetres.", "diagram": null },
        { "stepNumber": 10, "description": "Check with a test value.", "workingLatex": "x=2:\\ 2(7)+2(1)=16,\\ 6(2)+4=16", "explanation": "Both forms give $16$ cm when $x=2$, confirming the answer.", "diagram": null },
        { "stepNumber": 11, "description": "Interpret the result.", "workingLatex": "P = 6x + 4", "explanation": "The perimeter grows by $6$ cm for each unit increase in $x$, which matches having four sides that depend on $x$.", "diagram": null },
        { "stepNumber": 12, "description": "Confirm the final form.", "workingLatex": "6x + 4", "explanation": "No like terms remain, so the expression is complete.", "diagram": null },
        { "stepNumber": 13, "description": "State units.", "workingLatex": "(6x + 4)\\ \\text{cm}", "explanation": "Because the sides were in centimetres, the perimeter is also in centimetres.", "diagram": null }
      ],
      "finalAnswer": "$(6x + 4)$ cm"
    }
  },
  {
    "id": "gcse.algebra.simplifying.q054",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Simplifying and single brackets",
    "subtopicId": "gcse.algebra.simplifying",
    "difficulty": "Hard",
    "marks": 4,
    "answerType": "expression",
    "tags": ["area", "forming expressions", "variable multiplier"],
    "questionText": "A rectangle has length $(2x + 1)$ cm and width $x$ cm. Find and simplify an expression for its area.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall the area rule.", "workingLatex": "A = \\text{length} \\times \\text{width}", "explanation": "The area of a rectangle is the length multiplied by the width.", "diagram": null },
        { "stepNumber": 2, "description": "Substitute the expressions.", "workingLatex": "A = (2x + 1) \\times x", "explanation": "We multiply the length by the width, and here the width $x$ becomes the multiplier.", "diagram": null },
        { "stepNumber": 3, "description": "Rewrite ready to expand.", "workingLatex": "A = x(2x + 1)", "explanation": "Placing the $x$ in front shows clearly that it multiplies each term in the bracket.", "diagram": null },
        { "stepNumber": 4, "description": "Multiply the first term.", "workingLatex": "x \\times 2x = 2x^{2}", "explanation": "One $x$ times $2x$ gives $2x^{2}$.", "diagram": null },
        { "stepNumber": 5, "description": "Multiply the second term.", "workingLatex": "x \\times 1 = x", "explanation": "One $x$ times $1$ gives $x$.", "diagram": null },
        { "stepNumber": 6, "description": "Combine the products.", "workingLatex": "2x^{2} + x", "explanation": "Adding the two terms gives the expanded area.", "diagram": null },
        { "stepNumber": 7, "description": "Check for like terms.", "workingLatex": "2x^{2}\\ \\text{and}\\ x", "explanation": "A squared term and a linear term cannot be combined.", "diagram": null },
        { "stepNumber": 8, "description": "State the area expression.", "workingLatex": "A = 2x^{2} + x", "explanation": "This gives the area in square centimetres.", "diagram": null },
        { "stepNumber": 9, "description": "Check with a test value.", "workingLatex": "x=2:\\ 5\\times2=10,\\ 8+2=10", "explanation": "Both forms give $10$ when $x=2$, confirming the answer.", "diagram": null },
        { "stepNumber": 10, "description": "Interpret the units.", "workingLatex": "(2x^{2} + x)\\ \\text{cm}^{2}", "explanation": "Multiplying two lengths gives an area, so the units are square centimetres.", "diagram": null },
        { "stepNumber": 11, "description": "Confirm the final form.", "workingLatex": "2x^{2} + x", "explanation": "The expression is complete.", "diagram": null },
        { "stepNumber": 12, "description": "Note why a squared term appears.", "workingLatex": "x \\times 2x = 2x^{2}", "explanation": "Multiplying two length expressions naturally produces an $x^{2}$ term, which is typical of area.", "diagram": null },
        { "stepNumber": 13, "description": "Final statement.", "workingLatex": "A = 2x^{2} + x", "explanation": "This is the simplified expression for the area.", "diagram": null }
      ],
      "finalAnswer": "$(2x^{2} + x)$ cm$^{2}$"
    }
  },
  {
    "id": "gcse.algebra.simplifying.q055",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Simplifying and single brackets",
    "subtopicId": "gcse.algebra.simplifying",
    "difficulty": "Hard",
    "marks": 4,
    "answerType": "expression",
    "tags": ["factorising", "combined common factor", "powers"],
    "questionText": "Factorise fully $12x^{2} - 8x$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Understand fully factorising.", "workingLatex": "12x^{2} - 8x", "explanation": "Factorising fully means taking out the greatest common factor, including any shared letters as well as numbers.", "diagram": null },
        { "stepNumber": 2, "description": "Find the numeric common factor.", "workingLatex": "12 = 4\\times3,\\ 8 = 4\\times2", "explanation": "The largest number dividing both $12$ and $8$ is $4$.", "diagram": null },
        { "stepNumber": 3, "description": "Find the variable common factor.", "workingLatex": "x^{2} = x\\times x,\\ 8x = 8\\times x", "explanation": "Both terms contain at least one $x$, so $x$ is a shared letter factor.", "diagram": null },
        { "stepNumber": 4, "description": "Combine into the full common factor.", "workingLatex": "\\text{common factor} = 4x", "explanation": "Multiplying the shared number and letter gives the full factor $4x$.", "diagram": null },
        { "stepNumber": 5, "description": "Divide the first term.", "workingLatex": "12x^{2} \\div 4x = 3x", "explanation": "Twelve divided by four is three, and $x^{2}$ divided by $x$ is $x$.", "diagram": null },
        { "stepNumber": 6, "description": "Divide the second term.", "workingLatex": "8x \\div 4x = 2", "explanation": "Eight divided by four is two, and $x$ divided by $x$ is one, leaving just $2$.", "diagram": null },
        { "stepNumber": 7, "description": "Keep the sign.", "workingLatex": "-8x \\div 4x = -2", "explanation": "The minus sign travels with the term, giving $-2$ inside the bracket.", "diagram": null },
        { "stepNumber": 8, "description": "Write the factorised form.", "workingLatex": "4x(3x - 2)", "explanation": "The factor $4x$ sits outside and the leftovers inside.", "diagram": null },
        { "stepNumber": 9, "description": "State the answer.", "workingLatex": "12x^{2} - 8x = 4x(3x - 2)", "explanation": "This is the fully factorised expression.", "diagram": null },
        { "stepNumber": 10, "description": "Check by expanding.", "workingLatex": "4x(3x - 2) = 12x^{2} - 8x", "explanation": "Expanding returns the original, confirming the factorising.", "diagram": null },
        { "stepNumber": 11, "description": "Confirm it is fully factorised.", "workingLatex": "\\gcd(3, 2) = 1,\\ \\text{no shared } x", "explanation": "The terms inside share no further factor, so the factorising is complete.", "diagram": null },
        { "stepNumber": 12, "description": "Check with a test value.", "workingLatex": "x=1:\\ 12-8=4,\\ 4(1)=4", "explanation": "Both forms give $4$ when $x=1$, confirming the answer.", "diagram": null },
        { "stepNumber": 13, "description": "Reflect on fully factorising.", "workingLatex": "\\text{take out both } 4 \\text{ and } x", "explanation": "Missing either the number or the letter would leave the expression only partly factorised.", "diagram": null }
      ],
      "finalAnswer": "$4x(3x - 2)$"
    }
  },
  {
    "id": "gcse.algebra.simplifying.q056",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Simplifying and single brackets",
    "subtopicId": "gcse.algebra.simplifying",
    "difficulty": "Hard",
    "marks": 4,
    "answerType": "expression",
    "tags": ["factorising", "combined common factor", "two variables"],
    "questionText": "Factorise fully $15ab + 20a$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Understand fully factorising.", "workingLatex": "15ab + 20a", "explanation": "We look for the greatest factor shared by both terms, including numbers and letters.", "diagram": null },
        { "stepNumber": 2, "description": "Find the numeric common factor.", "workingLatex": "15 = 5\\times3,\\ 20 = 5\\times4", "explanation": "The largest number dividing both $15$ and $20$ is $5$.", "diagram": null },
        { "stepNumber": 3, "description": "Find the variable common factor.", "workingLatex": "15ab = 15\\times a\\times b,\\ 20a = 20\\times a", "explanation": "Both terms contain the letter $a$, but only the first has $b$, so only $a$ is shared.", "diagram": null },
        { "stepNumber": 4, "description": "Combine into the full common factor.", "workingLatex": "\\text{common factor} = 5a", "explanation": "The shared number and shared letter give the full factor $5a$.", "diagram": null },
        { "stepNumber": 5, "description": "Divide the first term.", "workingLatex": "15ab \\div 5a = 3b", "explanation": "Fifteen divided by five is three, the $a$ cancels, and the $b$ remains.", "diagram": null },
        { "stepNumber": 6, "description": "Divide the second term.", "workingLatex": "20a \\div 5a = 4", "explanation": "Twenty divided by five is four, and the $a$ cancels, leaving just $4$.", "diagram": null },
        { "stepNumber": 7, "description": "Write the factorised form.", "workingLatex": "5a(3b + 4)", "explanation": "The factor $5a$ sits outside and the leftovers inside.", "diagram": null },
        { "stepNumber": 8, "description": "State the answer.", "workingLatex": "15ab + 20a = 5a(3b + 4)", "explanation": "This is the fully factorised expression.", "diagram": null },
        { "stepNumber": 9, "description": "Check by expanding.", "workingLatex": "5a(3b + 4) = 15ab + 20a", "explanation": "Expanding returns the original, confirming the factorising.", "diagram": null },
        { "stepNumber": 10, "description": "Confirm it is fully factorised.", "workingLatex": "3b + 4", "explanation": "The terms inside share no further common factor, so the answer is complete.", "diagram": null },
        { "stepNumber": 11, "description": "Explain why $b$ is not taken out.", "workingLatex": "20a\\ \\text{has no } b", "explanation": "A letter can only be taken out if it appears in every term, and $b$ is missing from the second term.", "diagram": null },
        { "stepNumber": 12, "description": "Check with test values.", "workingLatex": "a=1,b=1:\\ 15+20=35,\\ 5(7)=35", "explanation": "Both forms give $35$, confirming the answer.", "diagram": null },
        { "stepNumber": 13, "description": "Reflect on the method.", "workingLatex": "\\text{shared in every term only}", "explanation": "Only factors present in all terms can be taken outside the bracket.", "diagram": null }
      ],
      "finalAnswer": "$5a(3b + 4)$"
    }
  },
  {
    "id": "gcse.algebra.simplifying.q057",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Simplifying and single brackets",
    "subtopicId": "gcse.algebra.simplifying",
    "difficulty": "Hard",
    "marks": 4,
    "answerType": "expression",
    "tags": ["factorising", "combined common factor", "powers"],
    "questionText": "Factorise fully $6x^{2} + 9x$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Understand fully factorising.", "workingLatex": "6x^{2} + 9x", "explanation": "We take out the greatest factor shared by both terms, including any common letter.", "diagram": null },
        { "stepNumber": 2, "description": "Find the numeric common factor.", "workingLatex": "6 = 3\\times2,\\ 9 = 3\\times3", "explanation": "The largest number dividing both $6$ and $9$ is $3$.", "diagram": null },
        { "stepNumber": 3, "description": "Find the variable common factor.", "workingLatex": "6x^{2} = 6\\times x\\times x,\\ 9x = 9\\times x", "explanation": "Both terms contain at least one $x$, so $x$ is shared.", "diagram": null },
        { "stepNumber": 4, "description": "Combine into the full common factor.", "workingLatex": "\\text{common factor} = 3x", "explanation": "The shared number and letter give the full factor $3x$.", "diagram": null },
        { "stepNumber": 5, "description": "Divide the first term.", "workingLatex": "6x^{2} \\div 3x = 2x", "explanation": "Six divided by three is two, and $x^{2}$ divided by $x$ is $x$.", "diagram": null },
        { "stepNumber": 6, "description": "Divide the second term.", "workingLatex": "9x \\div 3x = 3", "explanation": "Nine divided by three is three, and the $x$ cancels, leaving $3$.", "diagram": null },
        { "stepNumber": 7, "description": "Write the factorised form.", "workingLatex": "3x(2x + 3)", "explanation": "The factor $3x$ sits outside and the leftovers inside.", "diagram": null },
        { "stepNumber": 8, "description": "State the answer.", "workingLatex": "6x^{2} + 9x = 3x(2x + 3)", "explanation": "This is the fully factorised expression.", "diagram": null },
        { "stepNumber": 9, "description": "Check by expanding.", "workingLatex": "3x(2x + 3) = 6x^{2} + 9x", "explanation": "Expanding returns the original, confirming the factorising.", "diagram": null },
        { "stepNumber": 10, "description": "Confirm it is fully factorised.", "workingLatex": "\\gcd(2, 3) = 1", "explanation": "The terms inside share no further factor, so the answer is complete.", "diagram": null },
        { "stepNumber": 11, "description": "Check with a test value.", "workingLatex": "x=1:\\ 6+9=15,\\ 3(5)=15", "explanation": "Both forms give $15$ when $x=1$, confirming the answer.", "diagram": null },
        { "stepNumber": 12, "description": "Note a partial-factor pitfall.", "workingLatex": "3(2x^{2}+3x)\\ \\text{is incomplete}", "explanation": "Taking out only the number leaves a shared $x$ inside, so the letter must be taken out too.", "diagram": null },
        { "stepNumber": 13, "description": "Reflect on the method.", "workingLatex": "3x(2x + 3)", "explanation": "Taking out both the number and the letter at once gives the fully factorised form.", "diagram": null }
      ],
      "finalAnswer": "$3x(2x + 3)$"
    }
  },
  {
    "id": "gcse.algebra.simplifying.q058",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Simplifying and single brackets",
    "subtopicId": "gcse.algebra.simplifying",
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "expression",
    "tags": ["expand and simplify", "three brackets", "signs"],
    "questionText": "Expand and simplify $2(3x + 2) + 3(x - 1) - (x + 4)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Plan the approach.", "workingLatex": "2(3x + 2) + 3(x - 1) - (x + 4)", "explanation": "Expand all three brackets, noting the last one is multiplied by $-1$, then collect like terms.", "diagram": null },
        { "stepNumber": 2, "description": "Expand the first bracket.", "workingLatex": "2(3x + 2) = 6x + 4", "explanation": "Two lots of $3x+2$ gives $6x$ and $4$.", "diagram": null },
        { "stepNumber": 3, "description": "Expand the second bracket.", "workingLatex": "3(x - 1) = 3x - 3", "explanation": "Three lots of $x-1$ gives $3x$ and $-3$.", "diagram": null },
        { "stepNumber": 4, "description": "Interpret the third bracket.", "workingLatex": "-(x + 4) = -1(x + 4)", "explanation": "A minus sign in front of a bracket means multiply everything inside by $-1$.", "diagram": null },
        { "stepNumber": 5, "description": "Expand the third bracket.", "workingLatex": "-1(x + 4) = -x - 4", "explanation": "Multiplying by $-1$ changes the sign of each term inside.", "diagram": null },
        { "stepNumber": 6, "description": "Write all terms together.", "workingLatex": "6x + 4 + 3x - 3 - x - 4", "explanation": "All three expansions are combined into one expression.", "diagram": null },
        { "stepNumber": 7, "description": "Group the $x$ terms.", "workingLatex": "6x + 3x - x", "explanation": "We gather the terms containing $x$ before adding the constants.", "diagram": null },
        { "stepNumber": 8, "description": "Combine the $x$ terms.", "workingLatex": "6x + 3x - x = 8x", "explanation": "Six plus three is nine lots of $x$, and taking one away leaves eight.", "diagram": null },
        { "stepNumber": 9, "description": "Group the constants.", "workingLatex": "4 - 3 - 4", "explanation": "We now gather the plain numbers, keeping each sign.", "diagram": null },
        { "stepNumber": 10, "description": "Combine the constants.", "workingLatex": "4 - 3 - 4 = -3", "explanation": "Four take away three is one, and taking four more away gives negative three.", "diagram": null },
        { "stepNumber": 11, "description": "State the simplified expression.", "workingLatex": "2(3x + 2) + 3(x - 1) - (x + 4) = 8x - 3", "explanation": "This is fully expanded and simplified.", "diagram": null },
        { "stepNumber": 12, "description": "Check with a test value.", "workingLatex": "x=1:\\ 2(5)+3(0)-(5)=5,\\ 8-3=5", "explanation": "Both forms give $5$ when $x=1$, confirming the answer.", "diagram": null },
        { "stepNumber": 13, "description": "Confirm the final form.", "workingLatex": "8x - 3", "explanation": "No like terms remain, so the expression is complete.", "diagram": null }
      ],
      "finalAnswer": "$8x - 3$"
    }
  },
  {
    "id": "gcse.algebra.simplifying.q059",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Simplifying and single brackets",
    "subtopicId": "gcse.algebra.simplifying",
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "expression",
    "tags": ["expand and simplify", "variable multiplier", "powers"],
    "questionText": "Expand and simplify $x(x + 4) + 3(x - 2)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Plan the approach.", "workingLatex": "x(x + 4) + 3(x - 2)", "explanation": "The first bracket has a variable multiplier and the second a numeric one; expand both, then collect like terms.", "diagram": null },
        { "stepNumber": 2, "description": "Expand the first bracket, first term.", "workingLatex": "x \\times x = x^{2}", "explanation": "Multiplying $x$ by itself gives $x^{2}$.", "diagram": null },
        { "stepNumber": 3, "description": "Expand the first bracket, second term.", "workingLatex": "x \\times 4 = 4x", "explanation": "Multiplying $x$ by $4$ gives $4x$, so the first bracket is $x^{2} + 4x$.", "diagram": null },
        { "stepNumber": 4, "description": "Expand the second bracket.", "workingLatex": "3(x - 2) = 3x - 6", "explanation": "Three lots of $x-2$ gives $3x$ and $-6$.", "diagram": null },
        { "stepNumber": 5, "description": "Write all terms together.", "workingLatex": "x^{2} + 4x + 3x - 6", "explanation": "Both expansions are combined into one expression.", "diagram": null },
        { "stepNumber": 6, "description": "Identify the like terms.", "workingLatex": "4x\\ \\text{and}\\ 3x", "explanation": "Only the two linear $x$ terms are alike; the squared term and the constant stand alone.", "diagram": null },
        { "stepNumber": 7, "description": "Combine the $x$ terms.", "workingLatex": "4x + 3x = 7x", "explanation": "Four lots of $x$ plus three more gives seven lots.", "diagram": null },
        { "stepNumber": 8, "description": "Bring the terms together.", "workingLatex": "x^{2} + 7x - 6", "explanation": "The squared term, the combined linear term and the constant form the simplified expression.", "diagram": null },
        { "stepNumber": 9, "description": "Check the term types.", "workingLatex": "x^{2},\\ 7x,\\ -6", "explanation": "These are three different types of term, so no further collecting is possible.", "diagram": null },
        { "stepNumber": 10, "description": "State the simplified expression.", "workingLatex": "x(x + 4) + 3(x - 2) = x^{2} + 7x - 6", "explanation": "This is fully expanded and simplified.", "diagram": null },
        { "stepNumber": 11, "description": "Check with a test value.", "workingLatex": "x=2:\\ 2(6)+3(0)=12,\\ 4+14-6=12", "explanation": "Both forms give $12$ when $x=2$, confirming the answer.", "diagram": null },
        { "stepNumber": 12, "description": "Reflect on the squared term.", "workingLatex": "x \\times x = x^{2}", "explanation": "The variable multiplier is what produces the $x^{2}$ term in the answer.", "diagram": null },
        { "stepNumber": 13, "description": "Confirm the final form.", "workingLatex": "x^{2} + 7x - 6", "explanation": "The expression is complete.", "diagram": null }
      ],
      "finalAnswer": "$x^{2} + 7x - 6$"
    }
  },
  {
    "id": "gcse.algebra.simplifying.q060",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Simplifying and single brackets",
    "subtopicId": "gcse.algebra.simplifying",
    "difficulty": "Hard",
    "marks": 4,
    "answerType": "expression",
    "tags": ["perimeter", "forming expressions", "collecting like terms"],
    "questionText": "A triangle has sides $(x + 2)$ cm, $(2x - 1)$ cm and $(x + 4)$ cm. Find and simplify an expression for its perimeter.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall the perimeter meaning.", "workingLatex": "P = \\text{sum of all sides}", "explanation": "The perimeter of any shape is the total distance around it, so we add the three side lengths.", "diagram": null },
        { "stepNumber": 2, "description": "Write the sum.", "workingLatex": "P = (x + 2) + (2x - 1) + (x + 4)", "explanation": "We add the three given expressions together.", "diagram": null },
        { "stepNumber": 3, "description": "Remove the brackets.", "workingLatex": "P = x + 2 + 2x - 1 + x + 4", "explanation": "Since the brackets are only being added, they can be dropped without changing any signs.", "diagram": null },
        { "stepNumber": 4, "description": "Group the $x$ terms.", "workingLatex": "x + 2x + x", "explanation": "We gather the terms that contain $x$.", "diagram": null },
        { "stepNumber": 5, "description": "Combine the $x$ terms.", "workingLatex": "x + 2x + x = 4x", "explanation": "One plus two plus one gives four lots of $x$.", "diagram": null },
        { "stepNumber": 6, "description": "Group the constants.", "workingLatex": "2 - 1 + 4", "explanation": "We gather the plain numbers, keeping each sign.", "diagram": null },
        { "stepNumber": 7, "description": "Combine the constants.", "workingLatex": "2 - 1 + 4 = 5", "explanation": "Two take away one is one, and adding four gives five.", "diagram": null },
        { "stepNumber": 8, "description": "State the perimeter expression.", "workingLatex": "P = 4x + 5", "explanation": "This simplified expression gives the perimeter in centimetres.", "diagram": null },
        { "stepNumber": 9, "description": "Check with a test value.", "workingLatex": "x=3:\\ 5+5+7=17,\\ 4(3)+5=17", "explanation": "Both forms give $17$ cm when $x=3$, confirming the answer.", "diagram": null },
        { "stepNumber": 10, "description": "Interpret the result.", "workingLatex": "P = 4x + 5", "explanation": "The total of the three $x$ terms is $4x$, and the constants total $5$.", "diagram": null },
        { "stepNumber": 11, "description": "Confirm the final form.", "workingLatex": "4x + 5", "explanation": "No like terms remain, so the expression is complete.", "diagram": null },
        { "stepNumber": 12, "description": "State units.", "workingLatex": "(4x + 5)\\ \\text{cm}", "explanation": "The sides were in centimetres, so the perimeter is in centimetres.", "diagram": null }
      ],
      "finalAnswer": "$(4x + 5)$ cm"
    }
  },
  {
    "id": "gcse.algebra.simplifying.q061",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Simplifying and single brackets",
    "subtopicId": "gcse.algebra.simplifying",
    "difficulty": "Hard",
    "marks": 4,
    "answerType": "expression",
    "tags": ["factorising", "combined common factor", "powers"],
    "questionText": "Factorise fully $9x^{2} - 6x$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Understand fully factorising.", "workingLatex": "9x^{2} - 6x", "explanation": "We take out the greatest factor common to both terms, including a shared letter.", "diagram": null },
        { "stepNumber": 2, "description": "Find the numeric common factor.", "workingLatex": "9 = 3\\times3,\\ 6 = 3\\times2", "explanation": "The largest number dividing both $9$ and $6$ is $3$.", "diagram": null },
        { "stepNumber": 3, "description": "Find the variable common factor.", "workingLatex": "9x^{2} = 9\\times x\\times x,\\ 6x = 6\\times x", "explanation": "Both terms contain at least one $x$, so $x$ is shared.", "diagram": null },
        { "stepNumber": 4, "description": "Combine into the full common factor.", "workingLatex": "\\text{common factor} = 3x", "explanation": "The shared number and letter combine to give $3x$.", "diagram": null },
        { "stepNumber": 5, "description": "Divide the first term.", "workingLatex": "9x^{2} \\div 3x = 3x", "explanation": "Nine divided by three is three, and $x^{2}$ divided by $x$ is $x$.", "diagram": null },
        { "stepNumber": 6, "description": "Divide the second term with its sign.", "workingLatex": "-6x \\div 3x = -2", "explanation": "Six divided by three is two, the $x$ cancels, and the minus sign is kept.", "diagram": null },
        { "stepNumber": 7, "description": "Write the factorised form.", "workingLatex": "3x(3x - 2)", "explanation": "The factor $3x$ sits outside and the leftovers inside.", "diagram": null },
        { "stepNumber": 8, "description": "State the answer.", "workingLatex": "9x^{2} - 6x = 3x(3x - 2)", "explanation": "This is the fully factorised expression.", "diagram": null },
        { "stepNumber": 9, "description": "Check by expanding.", "workingLatex": "3x(3x - 2) = 9x^{2} - 6x", "explanation": "Expanding returns the original, confirming the factorising.", "diagram": null },
        { "stepNumber": 10, "description": "Confirm it is fully factorised.", "workingLatex": "\\gcd(3, 2) = 1", "explanation": "The terms inside share no further factor, so the answer is complete.", "diagram": null },
        { "stepNumber": 11, "description": "Check with a test value.", "workingLatex": "x=1:\\ 9-6=3,\\ 3(1)=3", "explanation": "Both forms give $3$ when $x=1$, confirming the answer.", "diagram": null },
        { "stepNumber": 12, "description": "Note the repeated factor form.", "workingLatex": "3x\\ \\text{outside},\\ 3x\\ \\text{inside}", "explanation": "It is fine for a similar term to appear inside and outside; they came from different original terms.", "diagram": null },
        { "stepNumber": 13, "description": "Reflect on the method.", "workingLatex": "3x(3x - 2)", "explanation": "Taking out the full common factor at once gives the complete factorisation.", "diagram": null }
      ],
      "finalAnswer": "$3x(3x - 2)$"
    }
  },
  {
    "id": "gcse.algebra.simplifying.q062",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Simplifying and single brackets",
    "subtopicId": "gcse.algebra.simplifying",
    "difficulty": "Hard",
    "marks": 4,
    "answerType": "expression",
    "tags": ["factorising", "combined common factor", "powers"],
    "questionText": "Factorise fully $10x^{2} + 15x$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Understand fully factorising.", "workingLatex": "10x^{2} + 15x", "explanation": "We take out the greatest factor shared by both terms, numbers and letters together.", "diagram": null },
        { "stepNumber": 2, "description": "Find the numeric common factor.", "workingLatex": "10 = 5\\times2,\\ 15 = 5\\times3", "explanation": "The largest number dividing both $10$ and $15$ is $5$.", "diagram": null },
        { "stepNumber": 3, "description": "Find the variable common factor.", "workingLatex": "10x^{2} = 10\\times x\\times x,\\ 15x = 15\\times x", "explanation": "Both terms contain at least one $x$, so $x$ is shared.", "diagram": null },
        { "stepNumber": 4, "description": "Combine into the full common factor.", "workingLatex": "\\text{common factor} = 5x", "explanation": "The shared number and letter give the factor $5x$.", "diagram": null },
        { "stepNumber": 5, "description": "Divide the first term.", "workingLatex": "10x^{2} \\div 5x = 2x", "explanation": "Ten divided by five is two, and $x^{2}$ divided by $x$ is $x$.", "diagram": null },
        { "stepNumber": 6, "description": "Divide the second term.", "workingLatex": "15x \\div 5x = 3", "explanation": "Fifteen divided by five is three, and the $x$ cancels, leaving $3$.", "diagram": null },
        { "stepNumber": 7, "description": "Write the factorised form.", "workingLatex": "5x(2x + 3)", "explanation": "The factor $5x$ sits outside and the leftovers inside.", "diagram": null },
        { "stepNumber": 8, "description": "State the answer.", "workingLatex": "10x^{2} + 15x = 5x(2x + 3)", "explanation": "This is the fully factorised expression.", "diagram": null },
        { "stepNumber": 9, "description": "Check by expanding.", "workingLatex": "5x(2x + 3) = 10x^{2} + 15x", "explanation": "Expanding returns the original, confirming the factorising.", "diagram": null },
        { "stepNumber": 10, "description": "Confirm it is fully factorised.", "workingLatex": "\\gcd(2, 3) = 1", "explanation": "The terms inside share no further factor, so the answer is complete.", "diagram": null },
        { "stepNumber": 11, "description": "Check with a test value.", "workingLatex": "x=1:\\ 10+15=25,\\ 5(5)=25", "explanation": "Both forms give $25$ when $x=1$, confirming the answer.", "diagram": null },
        { "stepNumber": 12, "description": "Note a partial-factor pitfall.", "workingLatex": "5(2x^{2}+3x)\\ \\text{is incomplete}", "explanation": "Taking out only the $5$ leaves a shared $x$ inside, so the letter must be included in the factor.", "diagram": null },
        { "stepNumber": 13, "description": "Reflect on the method.", "workingLatex": "5x(2x + 3)", "explanation": "Removing the full common factor at once gives the complete factorisation.", "diagram": null }
      ],
      "finalAnswer": "$5x(2x + 3)$"
    }
  },
  {
    "id": "gcse.algebra.simplifying.q063",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Simplifying and single brackets",
    "subtopicId": "gcse.algebra.simplifying",
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "expression",
    "tags": ["expand and simplify", "negative multiplier", "signs"],
    "questionText": "Expand and simplify $4(2x - 3) - 2(3x - 5)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Plan the approach.", "workingLatex": "4(2x - 3) - 2(3x - 5)", "explanation": "Expand each bracket, treating the minus as part of the second multiplier, then collect like terms.", "diagram": null },
        { "stepNumber": 2, "description": "Expand the first bracket, first term.", "workingLatex": "4 \\times 2x = 8x", "explanation": "Four lots of $2x$ gives $8x$.", "diagram": null },
        { "stepNumber": 3, "description": "Expand the first bracket, second term.", "workingLatex": "4 \\times (-3) = -12", "explanation": "Four lots of $-3$ gives $-12$, so the first bracket is $8x - 12$.", "diagram": null },
        { "stepNumber": 4, "description": "Note the second multiplier.", "workingLatex": "\\text{multiplier} = -2", "explanation": "The subtraction sign makes the second bracket multiplied by $-2$.", "diagram": null },
        { "stepNumber": 5, "description": "Expand the second bracket, first term.", "workingLatex": "-2 \\times 3x = -6x", "explanation": "Negative two times $3x$ gives $-6x$.", "diagram": null },
        { "stepNumber": 6, "description": "Expand the second bracket, second term.", "workingLatex": "-2 \\times (-5) = +10", "explanation": "A negative times a negative gives a positive $+10$.", "diagram": null },
        { "stepNumber": 7, "description": "Write all terms together.", "workingLatex": "8x - 12 - 6x + 10", "explanation": "Both expansions are combined into one expression.", "diagram": null },
        { "stepNumber": 8, "description": "Group like terms.", "workingLatex": "(8x - 6x) + (-12 + 10)", "explanation": "The $x$ terms and constants are separated for collecting.", "diagram": null },
        { "stepNumber": 9, "description": "Combine the $x$ terms.", "workingLatex": "8x - 6x = 2x", "explanation": "Eight lots of $x$ with six removed leaves two lots.", "diagram": null },
        { "stepNumber": 10, "description": "Combine the constants.", "workingLatex": "-12 + 10 = -2", "explanation": "Starting at negative twelve and adding ten reaches negative two.", "diagram": null },
        { "stepNumber": 11, "description": "State the simplified expression.", "workingLatex": "4(2x - 3) - 2(3x - 5) = 2x - 2", "explanation": "This is fully expanded and simplified.", "diagram": null },
        { "stepNumber": 12, "description": "Check with a test value.", "workingLatex": "x=2:\\ 4(1)-2(1)=2,\\ 4-2=2", "explanation": "Both forms give $2$ when $x=2$, confirming the sign work.", "diagram": null },
        { "stepNumber": 13, "description": "Confirm the final form.", "workingLatex": "2x - 2", "explanation": "No like terms remain, so the expression is complete.", "diagram": null }
      ],
      "finalAnswer": "$2x - 2$"
    }
  },
  {
    "id": "gcse.algebra.simplifying.q064",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Simplifying and single brackets",
    "subtopicId": "gcse.algebra.simplifying",
    "difficulty": "Hard",
    "marks": 4,
    "answerType": "expression",
    "tags": ["area", "forming expressions", "variable multiplier"],
    "questionText": "A rectangle has length $(3x - 1)$ cm and width $2x$ cm. Find and simplify an expression for its area.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall the area rule.", "workingLatex": "A = \\text{length} \\times \\text{width}", "explanation": "The area of a rectangle is length multiplied by width.", "diagram": null },
        { "stepNumber": 2, "description": "Substitute the expressions.", "workingLatex": "A = (3x - 1) \\times 2x", "explanation": "We multiply the length by the width $2x$.", "diagram": null },
        { "stepNumber": 3, "description": "Rewrite ready to expand.", "workingLatex": "A = 2x(3x - 1)", "explanation": "Placing $2x$ in front shows it multiplies each term inside the bracket.", "diagram": null },
        { "stepNumber": 4, "description": "Multiply the first term.", "workingLatex": "2x \\times 3x = 6x^{2}", "explanation": "Two times three is six, and $x$ times $x$ is $x^{2}$, giving $6x^{2}$.", "diagram": null },
        { "stepNumber": 5, "description": "Identify the second term with its sign.", "workingLatex": "\\text{second term} = -1", "explanation": "The term inside is $-1$, so we multiply by $-1$.", "diagram": null },
        { "stepNumber": 6, "description": "Multiply the second term.", "workingLatex": "2x \\times (-1) = -2x", "explanation": "Two times negative one is negative two, and the $x$ is carried through.", "diagram": null },
        { "stepNumber": 7, "description": "Combine the products.", "workingLatex": "6x^{2} - 2x", "explanation": "Putting the terms together gives the expanded area.", "diagram": null },
        { "stepNumber": 8, "description": "Check for like terms.", "workingLatex": "6x^{2}\\ \\text{and}\\ -2x", "explanation": "The squared and linear terms cannot be combined.", "diagram": null },
        { "stepNumber": 9, "description": "State the area expression.", "workingLatex": "A = 6x^{2} - 2x", "explanation": "This gives the area in square centimetres.", "diagram": null },
        { "stepNumber": 10, "description": "Check with a test value.", "workingLatex": "x=2:\\ 5\\times4=20,\\ 24-4=20", "explanation": "Both forms give $20$ when $x=2$, confirming the answer.", "diagram": null },
        { "stepNumber": 11, "description": "Interpret the units.", "workingLatex": "(6x^{2} - 2x)\\ \\text{cm}^{2}", "explanation": "Multiplying two lengths gives an area, so the units are square centimetres.", "diagram": null },
        { "stepNumber": 12, "description": "Confirm the final form.", "workingLatex": "6x^{2} - 2x", "explanation": "The expression is complete.", "diagram": null },
        { "stepNumber": 13, "description": "Note it could be factorised.", "workingLatex": "6x^{2} - 2x = 2x(3x - 1)", "explanation": "The area factorises back to the original product, a neat consistency check.", "diagram": null }
      ],
      "finalAnswer": "$(6x^{2} - 2x)$ cm$^{2}$"
    }
  },
  {
    "id": "gcse.algebra.simplifying.q065",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Simplifying and single brackets",
    "subtopicId": "gcse.algebra.simplifying",
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "expression",
    "tags": ["expand and simplify", "variable multiplier", "powers"],
    "questionText": "Expand and simplify $3(x + 2) + 2x(x - 1)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Plan the approach.", "workingLatex": "3(x + 2) + 2x(x - 1)", "explanation": "One bracket has a numeric multiplier and one a variable multiplier; expand both, then collect like terms.", "diagram": null },
        { "stepNumber": 2, "description": "Expand the first bracket.", "workingLatex": "3(x + 2) = 3x + 6", "explanation": "Three lots of $x+2$ gives $3x$ and $6$.", "diagram": null },
        { "stepNumber": 3, "description": "Expand the second bracket, first term.", "workingLatex": "2x \\times x = 2x^{2}", "explanation": "Two $x$ times $x$ gives $2x^{2}$.", "diagram": null },
        { "stepNumber": 4, "description": "Expand the second bracket, second term.", "workingLatex": "2x \\times (-1) = -2x", "explanation": "Two $x$ times negative one gives $-2x$, so the second bracket is $2x^{2} - 2x$.", "diagram": null },
        { "stepNumber": 5, "description": "Write all terms together.", "workingLatex": "3x + 6 + 2x^{2} - 2x", "explanation": "Both expansions are combined into one expression.", "diagram": null },
        { "stepNumber": 6, "description": "Identify the like terms.", "workingLatex": "3x\\ \\text{and}\\ -2x", "explanation": "Only the linear $x$ terms are alike; the squared term and the constant stand alone.", "diagram": null },
        { "stepNumber": 7, "description": "Combine the $x$ terms.", "workingLatex": "3x - 2x = x", "explanation": "Three lots of $x$ with two removed leaves one lot.", "diagram": null },
        { "stepNumber": 8, "description": "Arrange in a tidy order.", "workingLatex": "2x^{2} + x + 6", "explanation": "Writing the squared term first, then the linear term and the constant, is the standard order.", "diagram": null },
        { "stepNumber": 9, "description": "Check the term types.", "workingLatex": "2x^{2},\\ x,\\ 6", "explanation": "These are three different types of term, so no further collecting is possible.", "diagram": null },
        { "stepNumber": 10, "description": "State the simplified expression.", "workingLatex": "3(x + 2) + 2x(x - 1) = 2x^{2} + x + 6", "explanation": "This is fully expanded and simplified.", "diagram": null },
        { "stepNumber": 11, "description": "Check with a test value.", "workingLatex": "x=2:\\ 3(4)+4(1)=16,\\ 8+2+6=16", "explanation": "Both forms give $16$ when $x=2$, confirming the answer.", "diagram": null },
        { "stepNumber": 12, "description": "Reflect on the squared term.", "workingLatex": "2x \\times x = 2x^{2}", "explanation": "The variable multiplier produces the $x^{2}$ term, while the numeric bracket only contributes linear and constant terms.", "diagram": null },
        { "stepNumber": 13, "description": "Confirm the final form.", "workingLatex": "2x^{2} + x + 6", "explanation": "The expression is complete.", "diagram": null }
      ],
      "finalAnswer": "$2x^{2} + x + 6$"
    }
  },
  {
    "id": "gcse.algebra.simplifying.q066",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Simplifying and single brackets",
    "subtopicId": "gcse.algebra.simplifying",
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "expression",
    "tags": ["expand and simplify", "three brackets", "collecting like terms"],
    "questionText": "Expand and simplify $5(x + 1) - 2(x - 3) + 3(x + 2)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Plan the approach.", "workingLatex": "5(x + 1) - 2(x - 3) + 3(x + 2)", "explanation": "Expand all three brackets, noting the middle multiplier is $-2$, then collect like terms.", "diagram": null },
        { "stepNumber": 2, "description": "Expand the first bracket.", "workingLatex": "5(x + 1) = 5x + 5", "explanation": "Five lots of $x+1$ gives $5x$ and $5$.", "diagram": null },
        { "stepNumber": 3, "description": "Note the second multiplier.", "workingLatex": "\\text{multiplier} = -2", "explanation": "The subtraction makes the second bracket multiplied by $-2$.", "diagram": null },
        { "stepNumber": 4, "description": "Expand the second bracket.", "workingLatex": "-2(x - 3) = -2x + 6", "explanation": "Negative two times $x$ is $-2x$, and negative two times $-3$ is $+6$.", "diagram": null },
        { "stepNumber": 5, "description": "Expand the third bracket.", "workingLatex": "3(x + 2) = 3x + 6", "explanation": "Three lots of $x+2$ gives $3x$ and $6$.", "diagram": null },
        { "stepNumber": 6, "description": "Write all terms together.", "workingLatex": "5x + 5 - 2x + 6 + 3x + 6", "explanation": "All three expansions are combined into one expression.", "diagram": null },
        { "stepNumber": 7, "description": "Group the $x$ terms.", "workingLatex": "5x - 2x + 3x", "explanation": "We gather the terms containing $x$.", "diagram": null },
        { "stepNumber": 8, "description": "Combine the $x$ terms.", "workingLatex": "5x - 2x + 3x = 6x", "explanation": "Five take away two is three, and adding three more gives six lots of $x$.", "diagram": null },
        { "stepNumber": 9, "description": "Group the constants.", "workingLatex": "5 + 6 + 6", "explanation": "We gather the plain numbers.", "diagram": null },
        { "stepNumber": 10, "description": "Combine the constants.", "workingLatex": "5 + 6 + 6 = 17", "explanation": "Five plus six plus six gives seventeen.", "diagram": null },
        { "stepNumber": 11, "description": "State the simplified expression.", "workingLatex": "5(x + 1) - 2(x - 3) + 3(x + 2) = 6x + 17", "explanation": "This is fully expanded and simplified.", "diagram": null },
        { "stepNumber": 12, "description": "Check with a test value.", "workingLatex": "x=1:\\ 5(2)-2(-2)+3(3)=23,\\ 6+17=23", "explanation": "Both forms give $23$ when $x=1$, confirming the answer.", "diagram": null },
        { "stepNumber": 13, "description": "Confirm the final form.", "workingLatex": "6x + 17", "explanation": "No like terms remain, so the expression is complete.", "diagram": null }
      ],
      "finalAnswer": "$6x + 17$"
    }
  },
  {
    "id": "gcse.algebra.simplifying.q067",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Simplifying and single brackets",
    "subtopicId": "gcse.algebra.simplifying",
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "expression",
    "tags": ["factorising", "combined common factor", "two variables"],
    "questionText": "Factorise fully $8x^{2}y + 12xy$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Understand fully factorising.", "workingLatex": "8x^{2}y + 12xy", "explanation": "We take out the greatest factor shared by both terms, which may involve a number and more than one letter.", "diagram": null },
        { "stepNumber": 2, "description": "Find the numeric common factor.", "workingLatex": "8 = 4\\times2,\\ 12 = 4\\times3", "explanation": "The largest number dividing both $8$ and $12$ is $4$.", "diagram": null },
        { "stepNumber": 3, "description": "Check the letter $x$.", "workingLatex": "8x^{2}y,\\ 12xy", "explanation": "Both terms contain at least one $x$, so $x$ is a shared factor.", "diagram": null },
        { "stepNumber": 4, "description": "Check the letter $y$.", "workingLatex": "8x^{2}y,\\ 12xy", "explanation": "Both terms contain a $y$, so $y$ is also a shared factor.", "diagram": null },
        { "stepNumber": 5, "description": "Combine into the full common factor.", "workingLatex": "\\text{common factor} = 4xy", "explanation": "The shared number and both shared letters give the full factor $4xy$.", "diagram": null },
        { "stepNumber": 6, "description": "Divide the first term.", "workingLatex": "8x^{2}y \\div 4xy = 2x", "explanation": "Eight divided by four is two, one $x$ cancels leaving $x$, and the $y$ cancels fully.", "diagram": null },
        { "stepNumber": 7, "description": "Divide the second term.", "workingLatex": "12xy \\div 4xy = 3", "explanation": "Twelve divided by four is three, and both $x$ and $y$ cancel, leaving $3$.", "diagram": null },
        { "stepNumber": 8, "description": "Write the factorised form.", "workingLatex": "4xy(2x + 3)", "explanation": "The factor $4xy$ sits outside and the leftovers inside.", "diagram": null },
        { "stepNumber": 9, "description": "State the answer.", "workingLatex": "8x^{2}y + 12xy = 4xy(2x + 3)", "explanation": "This is the fully factorised expression.", "diagram": null },
        { "stepNumber": 10, "description": "Check by expanding.", "workingLatex": "4xy(2x + 3) = 8x^{2}y + 12xy", "explanation": "Expanding returns the original, confirming the factorising.", "diagram": null },
        { "stepNumber": 11, "description": "Confirm it is fully factorised.", "workingLatex": "\\gcd(2, 3) = 1,\\ \\text{no shared letters}", "explanation": "The terms inside share no further factor, so the answer is complete.", "diagram": null },
        { "stepNumber": 12, "description": "Check with test values.", "workingLatex": "x=1,y=1:\\ 8+12=20,\\ 4(5)=20", "explanation": "Both forms give $20$, confirming the answer.", "diagram": null },
        { "stepNumber": 13, "description": "Reflect on the method.", "workingLatex": "\\text{take out } 4,\\ x,\\ y \\text{ together}", "explanation": "Every factor present in all terms should be removed at once for a full factorisation.", "diagram": null }
      ],
      "finalAnswer": "$4xy(2x + 3)$"
    }
  },
  {
    "id": "gcse.algebra.simplifying.q068",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Simplifying and single brackets",
    "subtopicId": "gcse.algebra.simplifying",
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "expression",
    "tags": ["perimeter", "forming expressions", "expand and simplify"],
    "questionText": "A square has side length $(3x - 2)$ cm. Find and simplify an expression for its perimeter.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall the square perimeter rule.", "workingLatex": "P = 4 \\times \\text{side}", "explanation": "A square has four equal sides, so its perimeter is four times one side.", "diagram": null },
        { "stepNumber": 2, "description": "Substitute the side length.", "workingLatex": "P = 4(3x - 2)", "explanation": "We place the given side length into the perimeter rule as a single bracket.", "diagram": null },
        { "stepNumber": 3, "description": "Multiply the first term.", "workingLatex": "4 \\times 3x = 12x", "explanation": "Four lots of $3x$ gives $12x$.", "diagram": null },
        { "stepNumber": 4, "description": "Multiply the second term with its sign.", "workingLatex": "4 \\times (-2) = -8", "explanation": "Four lots of $-2$ gives $-8$; the minus sign is kept.", "diagram": null },
        { "stepNumber": 5, "description": "Combine the products.", "workingLatex": "12x - 8", "explanation": "Putting the terms together gives the expanded perimeter.", "diagram": null },
        { "stepNumber": 6, "description": "Check for like terms.", "workingLatex": "12x\\ \\text{and}\\ -8", "explanation": "The $x$ term and the constant are different, so nothing can be collected.", "diagram": null },
        { "stepNumber": 7, "description": "State the perimeter expression.", "workingLatex": "P = 12x - 8", "explanation": "This gives the perimeter in centimetres.", "diagram": null },
        { "stepNumber": 8, "description": "Check with a test value.", "workingLatex": "x=2:\\ 4(4)=16,\\ 24-8=16", "explanation": "Both forms give $16$ cm when $x=2$, confirming the answer.", "diagram": null },
        { "stepNumber": 9, "description": "Sense-check the side length.", "workingLatex": "x=2:\\ 3(2)-2=4", "explanation": "The side is $4$ cm when $x=2$, and four sides of $4$ cm give the $16$ cm found above.", "diagram": null },
        { "stepNumber": 10, "description": "Interpret the result.", "workingLatex": "P = 12x - 8", "explanation": "The perimeter increases by $12$ cm for each unit increase in $x$, matching four sides each growing by $3x$.", "diagram": null },
        { "stepNumber": 11, "description": "Note it factorises back.", "workingLatex": "12x - 8 = 4(3x - 2)", "explanation": "Factorising returns the original product, a neat consistency check.", "diagram": null },
        { "stepNumber": 12, "description": "Confirm the final form.", "workingLatex": "12x - 8", "explanation": "The expression is complete.", "diagram": null },
        { "stepNumber": 13, "description": "State units.", "workingLatex": "(12x - 8)\\ \\text{cm}", "explanation": "Because the side was in centimetres, the perimeter is in centimetres.", "diagram": null }
      ],
      "finalAnswer": "$(12x - 8)$ cm"
    }
  },
  {
    "id": "gcse.algebra.simplifying.q069",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Simplifying and single brackets",
    "subtopicId": "gcse.algebra.simplifying",
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "expression",
    "tags": ["expand and simplify", "three brackets", "signs"],
    "questionText": "Expand and simplify $2(2x + 3) + 3(x - 1) - 2(x + 4)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Plan the approach.", "workingLatex": "2(2x + 3) + 3(x - 1) - 2(x + 4)", "explanation": "Expand all three brackets, noting the last multiplier is $-2$, then collect like terms.", "diagram": null },
        { "stepNumber": 2, "description": "Expand the first bracket.", "workingLatex": "2(2x + 3) = 4x + 6", "explanation": "Two lots of $2x+3$ gives $4x$ and $6$.", "diagram": null },
        { "stepNumber": 3, "description": "Expand the second bracket.", "workingLatex": "3(x - 1) = 3x - 3", "explanation": "Three lots of $x-1$ gives $3x$ and $-3$.", "diagram": null },
        { "stepNumber": 4, "description": "Note the third multiplier.", "workingLatex": "\\text{multiplier} = -2", "explanation": "The subtraction makes the third bracket multiplied by $-2$.", "diagram": null },
        { "stepNumber": 5, "description": "Expand the third bracket.", "workingLatex": "-2(x + 4) = -2x - 8", "explanation": "Negative two times $x$ is $-2x$, and negative two times $4$ is $-8$.", "diagram": null },
        { "stepNumber": 6, "description": "Write all terms together.", "workingLatex": "4x + 6 + 3x - 3 - 2x - 8", "explanation": "All three expansions are combined into one expression.", "diagram": null },
        { "stepNumber": 7, "description": "Group the $x$ terms.", "workingLatex": "4x + 3x - 2x", "explanation": "We gather the terms containing $x$.", "diagram": null },
        { "stepNumber": 8, "description": "Combine the $x$ terms.", "workingLatex": "4x + 3x - 2x = 5x", "explanation": "Four plus three is seven lots of $x$, and taking two away leaves five.", "diagram": null },
        { "stepNumber": 9, "description": "Group the constants.", "workingLatex": "6 - 3 - 8", "explanation": "We gather the plain numbers, keeping each sign.", "diagram": null },
        { "stepNumber": 10, "description": "Combine the constants.", "workingLatex": "6 - 3 - 8 = -5", "explanation": "Six take away three is three, and taking eight more away gives negative five.", "diagram": null },
        { "stepNumber": 11, "description": "State the simplified expression.", "workingLatex": "2(2x + 3) + 3(x - 1) - 2(x + 4) = 5x - 5", "explanation": "This is fully expanded and simplified.", "diagram": null },
        { "stepNumber": 12, "description": "Check with a test value.", "workingLatex": "x=1:\\ 2(5)+3(0)-2(5)=0,\\ 5-5=0", "explanation": "Both forms give $0$ when $x=1$, confirming the answer.", "diagram": null },
        { "stepNumber": 13, "description": "Note it factorises neatly.", "workingLatex": "5x - 5 = 5(x - 1)", "explanation": "The answer has a common factor of $5$, so it could be written as $5(x-1)$ if a factorised form were wanted.", "diagram": null }
      ],
      "finalAnswer": "$5x - 5$"
    }
  },
  {
    "id": "gcse.algebra.simplifying.q070",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Simplifying and single brackets",
    "subtopicId": "gcse.algebra.simplifying",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "expression",
    "tags": ["expand and simplify", "factorising", "reasoning"],
    "questionText": "Expand and simplify $5(2x + 1) + 5(x - 2)$, then factorise your answer fully.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Plan the two-part task.", "workingLatex": "5(2x + 1) + 5(x - 2)", "explanation": "First we expand and simplify, and then we factorise the result, which combines both skills in one problem.", "diagram": null },
        { "stepNumber": 2, "description": "Expand the first bracket.", "workingLatex": "5(2x + 1) = 10x + 5", "explanation": "Five lots of $2x+1$ gives $10x$ and $5$.", "diagram": null },
        { "stepNumber": 3, "description": "Expand the second bracket.", "workingLatex": "5(x - 2) = 5x - 10", "explanation": "Five lots of $x-2$ gives $5x$ and $-10$.", "diagram": null },
        { "stepNumber": 4, "description": "Write both expansions together.", "workingLatex": "10x + 5 + 5x - 10", "explanation": "This forms one expression ready to simplify.", "diagram": null },
        { "stepNumber": 5, "description": "Group like terms.", "workingLatex": "(10x + 5x) + (5 - 10)", "explanation": "The $x$ terms and constants are separated for collecting.", "diagram": null },
        { "stepNumber": 6, "description": "Combine the $x$ terms.", "workingLatex": "10x + 5x = 15x", "explanation": "Ten lots of $x$ plus five more gives fifteen lots.", "diagram": null },
        { "stepNumber": 7, "description": "Combine the constants.", "workingLatex": "5 - 10 = -5", "explanation": "Five take away ten drops to negative five.", "diagram": null },
        { "stepNumber": 8, "description": "State the simplified expression.", "workingLatex": "15x - 5", "explanation": "This is the expanded and simplified form, ready to factorise.", "diagram": null },
        { "stepNumber": 9, "description": "Find the common factor.", "workingLatex": "15 = 5\\times3,\\ 5 = 5\\times1", "explanation": "The largest number dividing both $15$ and $5$ is $5$.", "diagram": null },
        { "stepNumber": 10, "description": "Divide each term by $5$.", "workingLatex": "15x \\div 5 = 3x,\\ 5 \\div 5 = 1", "explanation": "These leftovers, with the minus sign kept, go inside the bracket.", "diagram": null },
        { "stepNumber": 11, "description": "Write the factorised form.", "workingLatex": "5(3x - 1)", "explanation": "The common factor $5$ sits outside and the leftovers inside.", "diagram": null },
        { "stepNumber": 12, "description": "Check by expanding.", "workingLatex": "5(3x - 1) = 15x - 5", "explanation": "Expanding returns the simplified expression, confirming the factorising.", "diagram": null },
        { "stepNumber": 13, "description": "Check with a test value.", "workingLatex": "x=2:\\ 5(5)+5(0)=25,\\ 5(5)=25", "explanation": "The original expression and the factorised answer both give $25$ when $x=2$, confirming the whole solution.", "diagram": null },
        { "stepNumber": 14, "description": "State the final answer.", "workingLatex": "5(2x + 1) + 5(x - 2) = 5(3x - 1)", "explanation": "The expression expands, simplifies and factorises to $5(3x-1)$.", "diagram": null }
      ],
      "finalAnswer": "$5(3x - 1)$"
    }
  }
];
