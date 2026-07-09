import { Question } from "@/lib/types";

export const questions: Question[] = [
  {
    "id": "gcse.number.order-of-operations.q001",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Priority of operations",
    "subtopicId": "gcse.number.order-of-operations",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "expression",
    "tags": ["order of operations", "multiplication", "addition"],
    "questionText": "Work out $3 + 4 \\times 5$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall the order of operations.", "workingLatex": "\\text{brackets, indices, } \\times \\div, \\ + -", "explanation": "BIDMAS tells us multiplication is done before addition, so the $4 \\times 5$ must be evaluated first even though the $+$ appears earlier when reading left to right.", "diagram": null },
        { "stepNumber": 2, "description": "Identify the multiplication.", "workingLatex": "4 \\times 5", "explanation": "This is the highest-priority operation present, so we deal with it before touching the addition.", "diagram": null },
        { "stepNumber": 3, "description": "Evaluate the multiplication.", "workingLatex": "4 \\times 5 = 20", "explanation": "Four groups of five make twenty.", "diagram": null },
        { "stepNumber": 4, "description": "Rewrite the expression.", "workingLatex": "3 + 20", "explanation": "Replacing the product with its value leaves a simple addition.", "diagram": null },
        { "stepNumber": 5, "description": "Add the terms.", "workingLatex": "3 + 20 = 23", "explanation": "Now the only operation left is the addition.", "diagram": null },
        { "stepNumber": 6, "description": "State the answer.", "workingLatex": "23", "explanation": "So $3 + 4 \\times 5 = 23$, not $35$ — the order of operations changes the result.", "diagram": null }
      ],
      "finalAnswer": "$23$"
    }
  },
  {
    "id": "gcse.number.order-of-operations.q002",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Priority of operations",
    "subtopicId": "gcse.number.order-of-operations",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "expression",
    "tags": ["order of operations", "division", "subtraction"],
    "questionText": "Work out $20 - 6 \\div 2$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall the order of operations.", "workingLatex": "\\times \\div \\ \\text{before} \\ + -", "explanation": "Division ranks above subtraction, so we must handle $6 \\div 2$ before doing the subtraction.", "diagram": null },
        { "stepNumber": 2, "description": "Identify the division.", "workingLatex": "6 \\div 2", "explanation": "This is the only higher-priority operation, so it comes first.", "diagram": null },
        { "stepNumber": 3, "description": "Evaluate the division.", "workingLatex": "6 \\div 2 = 3", "explanation": "Six shared into two equal parts gives three in each part.", "diagram": null },
        { "stepNumber": 4, "description": "Rewrite the expression.", "workingLatex": "20 - 3", "explanation": "Swapping the division for its value leaves a straightforward subtraction.", "diagram": null },
        { "stepNumber": 5, "description": "Subtract.", "workingLatex": "20 - 3 = 17", "explanation": "Taking three away from twenty leaves seventeen.", "diagram": null },
        { "stepNumber": 6, "description": "State the answer.", "workingLatex": "17", "explanation": "Doing the subtraction first would wrongly give $14 \\div 2 = 7$, so respecting priority matters.", "diagram": null }
      ],
      "finalAnswer": "$17$"
    }
  },
  {
    "id": "gcse.number.order-of-operations.q003",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Priority of operations",
    "subtopicId": "gcse.number.order-of-operations",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "expression",
    "tags": ["order of operations", "multiplication", "addition"],
    "questionText": "Work out $2 \\times 3 + 4$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall the order of operations.", "workingLatex": "\\times \\ \\text{before} \\ +", "explanation": "Multiplication outranks addition, so $2 \\times 3$ is settled first.", "diagram": null },
        { "stepNumber": 2, "description": "Identify the multiplication.", "workingLatex": "2 \\times 3", "explanation": "It sits at the front and is the higher priority operation, so it is dealt with first.", "diagram": null },
        { "stepNumber": 3, "description": "Evaluate the multiplication.", "workingLatex": "2 \\times 3 = 6", "explanation": "Two groups of three make six.", "diagram": null },
        { "stepNumber": 4, "description": "Rewrite the expression.", "workingLatex": "6 + 4", "explanation": "The product is now a single number, leaving an addition.", "diagram": null },
        { "stepNumber": 5, "description": "Add.", "workingLatex": "6 + 4 = 10", "explanation": "Combining six and four gives ten.", "diagram": null },
        { "stepNumber": 6, "description": "State the answer.", "workingLatex": "10", "explanation": "So $2 \\times 3 + 4 = 10$.", "diagram": null }
      ],
      "finalAnswer": "$10$"
    }
  },
  {
    "id": "gcse.number.order-of-operations.q004",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Priority of operations",
    "subtopicId": "gcse.number.order-of-operations",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "expression",
    "tags": ["order of operations", "multiplication", "addition"],
    "questionText": "Work out $10 + 2 \\times 3$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall the order of operations.", "workingLatex": "\\times \\ \\text{before} \\ +", "explanation": "Even though the addition is written first, multiplication has higher priority and is done first.", "diagram": null },
        { "stepNumber": 2, "description": "Identify the multiplication.", "workingLatex": "2 \\times 3", "explanation": "This is the operation we must resolve before the addition.", "diagram": null },
        { "stepNumber": 3, "description": "Evaluate the multiplication.", "workingLatex": "2 \\times 3 = 6", "explanation": "Two lots of three make six.", "diagram": null },
        { "stepNumber": 4, "description": "Rewrite the expression.", "workingLatex": "10 + 6", "explanation": "With the product replaced, only an addition remains.", "diagram": null },
        { "stepNumber": 5, "description": "Add.", "workingLatex": "10 + 6 = 16", "explanation": "Ten plus six is sixteen.", "diagram": null },
        { "stepNumber": 6, "description": "State the answer.", "workingLatex": "16", "explanation": "Reading left to right and adding first would wrongly give $36$, so priority matters.", "diagram": null }
      ],
      "finalAnswer": "$16$"
    }
  },
  {
    "id": "gcse.number.order-of-operations.q005",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Priority of operations",
    "subtopicId": "gcse.number.order-of-operations",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "expression",
    "tags": ["order of operations", "brackets", "multiplication"],
    "questionText": "Work out $(2 + 3) \\times 4$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall the order of operations.", "workingLatex": "\\text{brackets first}", "explanation": "Brackets have the highest priority of all, so whatever is inside them is completed before anything else.", "diagram": null },
        { "stepNumber": 2, "description": "Identify the bracket.", "workingLatex": "(2 + 3)", "explanation": "The bracket groups the addition together and tells us to treat it as one quantity.", "diagram": null },
        { "stepNumber": 3, "description": "Evaluate the bracket.", "workingLatex": "2 + 3 = 5", "explanation": "Adding the two numbers inside gives five.", "diagram": null },
        { "stepNumber": 4, "description": "Rewrite the expression.", "workingLatex": "5 \\times 4", "explanation": "The bracket becomes a single value, leaving one multiplication.", "diagram": null },
        { "stepNumber": 5, "description": "Multiply.", "workingLatex": "5 \\times 4 = 20", "explanation": "Five groups of four make twenty.", "diagram": null },
        { "stepNumber": 6, "description": "State the answer.", "workingLatex": "20", "explanation": "The brackets force the addition first, giving $20$ rather than $2 + 12 = 14$.", "diagram": null }
      ],
      "finalAnswer": "$20$"
    }
  },
  {
    "id": "gcse.number.order-of-operations.q006",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Priority of operations",
    "subtopicId": "gcse.number.order-of-operations",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "expression",
    "tags": ["order of operations", "division", "addition"],
    "questionText": "Work out $6 + 8 \\div 4$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall the order of operations.", "workingLatex": "\\div \\ \\text{before} \\ +", "explanation": "Division is a higher priority than addition, so $8 \\div 4$ is done first.", "diagram": null },
        { "stepNumber": 2, "description": "Identify the division.", "workingLatex": "8 \\div 4", "explanation": "This is the operation to resolve before adding.", "diagram": null },
        { "stepNumber": 3, "description": "Evaluate the division.", "workingLatex": "8 \\div 4 = 2", "explanation": "Eight split into four equal parts gives two in each.", "diagram": null },
        { "stepNumber": 4, "description": "Rewrite the expression.", "workingLatex": "6 + 2", "explanation": "The quotient replaces the division, leaving an addition.", "diagram": null },
        { "stepNumber": 5, "description": "Add.", "workingLatex": "6 + 2 = 8", "explanation": "Six and two combine to make eight.", "diagram": null },
        { "stepNumber": 6, "description": "State the answer.", "workingLatex": "8", "explanation": "So $6 + 8 \\div 4 = 8$.", "diagram": null }
      ],
      "finalAnswer": "$8$"
    }
  },
  {
    "id": "gcse.number.order-of-operations.q007",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Priority of operations",
    "subtopicId": "gcse.number.order-of-operations",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "expression",
    "tags": ["order of operations", "multiplication", "subtraction"],
    "questionText": "Work out $5 \\times 2 - 3$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall the order of operations.", "workingLatex": "\\times \\ \\text{before} \\ -", "explanation": "Multiplication outranks subtraction, so we compute $5 \\times 2$ first.", "diagram": null },
        { "stepNumber": 2, "description": "Identify the multiplication.", "workingLatex": "5 \\times 2", "explanation": "This higher-priority operation is handled before the subtraction.", "diagram": null },
        { "stepNumber": 3, "description": "Evaluate the multiplication.", "workingLatex": "5 \\times 2 = 10", "explanation": "Five doubled is ten.", "diagram": null },
        { "stepNumber": 4, "description": "Rewrite the expression.", "workingLatex": "10 - 3", "explanation": "Replacing the product leaves a single subtraction.", "diagram": null },
        { "stepNumber": 5, "description": "Subtract.", "workingLatex": "10 - 3 = 7", "explanation": "Taking three from ten leaves seven.", "diagram": null },
        { "stepNumber": 6, "description": "State the answer.", "workingLatex": "7", "explanation": "So $5 \\times 2 - 3 = 7$.", "diagram": null }
      ],
      "finalAnswer": "$7$"
    }
  },
  {
    "id": "gcse.number.order-of-operations.q008",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Priority of operations",
    "subtopicId": "gcse.number.order-of-operations",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "expression",
    "tags": ["order of operations", "division", "addition"],
    "questionText": "Work out $12 \\div 4 + 5$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall the order of operations.", "workingLatex": "\\div \\ \\text{before} \\ +", "explanation": "Division is settled before addition, so $12 \\div 4$ comes first.", "diagram": null },
        { "stepNumber": 2, "description": "Identify the division.", "workingLatex": "12 \\div 4", "explanation": "It is the higher priority operation in the expression.", "diagram": null },
        { "stepNumber": 3, "description": "Evaluate the division.", "workingLatex": "12 \\div 4 = 3", "explanation": "Twelve divided into four equal groups gives three each.", "diagram": null },
        { "stepNumber": 4, "description": "Rewrite the expression.", "workingLatex": "3 + 5", "explanation": "The quotient replaces the division, leaving an addition.", "diagram": null },
        { "stepNumber": 5, "description": "Add.", "workingLatex": "3 + 5 = 8", "explanation": "Three plus five is eight.", "diagram": null },
        { "stepNumber": 6, "description": "State the answer.", "workingLatex": "8", "explanation": "So $12 \\div 4 + 5 = 8$.", "diagram": null }
      ],
      "finalAnswer": "$8$"
    }
  },
  {
    "id": "gcse.number.order-of-operations.q009",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Priority of operations",
    "subtopicId": "gcse.number.order-of-operations",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "expression",
    "tags": ["order of operations", "multiplication", "subtraction"],
    "questionText": "Work out $7 - 2 \\times 3$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall the order of operations.", "workingLatex": "\\times \\ \\text{before} \\ -", "explanation": "Multiplication is done before subtraction, so $2 \\times 3$ is evaluated first.", "diagram": null },
        { "stepNumber": 2, "description": "Identify the multiplication.", "workingLatex": "2 \\times 3", "explanation": "It is the higher priority operation, even though a subtraction appears before it.", "diagram": null },
        { "stepNumber": 3, "description": "Evaluate the multiplication.", "workingLatex": "2 \\times 3 = 6", "explanation": "Two threes make six.", "diagram": null },
        { "stepNumber": 4, "description": "Rewrite the expression.", "workingLatex": "7 - 6", "explanation": "The product becomes a single number, leaving a subtraction.", "diagram": null },
        { "stepNumber": 5, "description": "Subtract.", "workingLatex": "7 - 6 = 1", "explanation": "Seven take away six leaves one.", "diagram": null },
        { "stepNumber": 6, "description": "State the answer.", "workingLatex": "1", "explanation": "Subtracting first would wrongly give $5 \\times 3 = 15$, so order matters.", "diagram": null }
      ],
      "finalAnswer": "$1$"
    }
  },
  {
    "id": "gcse.number.order-of-operations.q010",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Priority of operations",
    "subtopicId": "gcse.number.order-of-operations",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "expression",
    "tags": ["order of operations", "indices", "addition"],
    "questionText": "Work out $4 + 3^2$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall the order of operations.", "workingLatex": "\\text{indices before} \\ +", "explanation": "Powers (indices) rank above addition, so $3^2$ must be worked out first.", "diagram": null },
        { "stepNumber": 2, "description": "Identify the power.", "workingLatex": "3^2", "explanation": "This index is the highest priority operation present.", "diagram": null },
        { "stepNumber": 3, "description": "Interpret the power.", "workingLatex": "3^2 = 3 \\times 3", "explanation": "A square means the base multiplied by itself.", "diagram": null },
        { "stepNumber": 4, "description": "Evaluate the power.", "workingLatex": "3 \\times 3 = 9", "explanation": "Three multiplied by three is nine.", "diagram": null },
        { "stepNumber": 5, "description": "Rewrite and add.", "workingLatex": "4 + 9 = 13", "explanation": "With the power replaced by $9$, the remaining addition gives thirteen.", "diagram": null },
        { "stepNumber": 6, "description": "State the answer.", "workingLatex": "13", "explanation": "So $4 + 3^2 = 13$, not $7^2 = 49$.", "diagram": null }
      ],
      "finalAnswer": "$13$"
    }
  },
  {
    "id": "gcse.number.order-of-operations.q011",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Priority of operations",
    "subtopicId": "gcse.number.order-of-operations",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "expression",
    "tags": ["order of operations", "indices", "addition"],
    "questionText": "Work out $2^3 + 1$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall the order of operations.", "workingLatex": "\\text{indices before} \\ +", "explanation": "The power must be evaluated before the addition.", "diagram": null },
        { "stepNumber": 2, "description": "Identify the power.", "workingLatex": "2^3", "explanation": "This cube is the highest priority operation here.", "diagram": null },
        { "stepNumber": 3, "description": "Interpret the power.", "workingLatex": "2^3 = 2 \\times 2 \\times 2", "explanation": "A cube means the base used as a factor three times.", "diagram": null },
        { "stepNumber": 4, "description": "Evaluate the power.", "workingLatex": "2 \\times 2 \\times 2 = 8", "explanation": "Two doubled twice gives eight.", "diagram": null },
        { "stepNumber": 5, "description": "Rewrite and add.", "workingLatex": "8 + 1 = 9", "explanation": "Adding one to eight gives nine.", "diagram": null },
        { "stepNumber": 6, "description": "State the answer.", "workingLatex": "9", "explanation": "So $2^3 + 1 = 9$.", "diagram": null }
      ],
      "finalAnswer": "$9$"
    }
  },
  {
    "id": "gcse.number.order-of-operations.q012",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Priority of operations",
    "subtopicId": "gcse.number.order-of-operations",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "expression",
    "tags": ["order of operations", "indices", "subtraction"],
    "questionText": "Work out $5^2 - 4$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall the order of operations.", "workingLatex": "\\text{indices before} \\ -", "explanation": "The square is dealt with before the subtraction.", "diagram": null },
        { "stepNumber": 2, "description": "Identify the power.", "workingLatex": "5^2", "explanation": "This index has the highest priority in the expression.", "diagram": null },
        { "stepNumber": 3, "description": "Interpret the power.", "workingLatex": "5^2 = 5 \\times 5", "explanation": "Squaring means multiplying the base by itself.", "diagram": null },
        { "stepNumber": 4, "description": "Evaluate the power.", "workingLatex": "5 \\times 5 = 25", "explanation": "Five fives make twenty-five.", "diagram": null },
        { "stepNumber": 5, "description": "Rewrite and subtract.", "workingLatex": "25 - 4 = 21", "explanation": "Taking four from twenty-five leaves twenty-one.", "diagram": null },
        { "stepNumber": 6, "description": "State the answer.", "workingLatex": "21", "explanation": "So $5^2 - 4 = 21$.", "diagram": null }
      ],
      "finalAnswer": "$21$"
    }
  },
  {
    "id": "gcse.number.order-of-operations.q013",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Priority of operations",
    "subtopicId": "gcse.number.order-of-operations",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "expression",
    "tags": ["order of operations", "roots", "addition"],
    "questionText": "Work out $\\sqrt{9} + 2$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall the order of operations.", "workingLatex": "\\text{roots before} \\ +", "explanation": "A root behaves like an index, so it has higher priority than addition and is worked out first.", "diagram": null },
        { "stepNumber": 2, "description": "Identify the root.", "workingLatex": "\\sqrt{9}", "explanation": "This square root is the highest priority operation present.", "diagram": null },
        { "stepNumber": 3, "description": "Interpret the root.", "workingLatex": "\\sqrt{9} = ? \\ \\text{where} \\ ?^2 = 9", "explanation": "A square root asks which number multiplied by itself gives $9$.", "diagram": null },
        { "stepNumber": 4, "description": "Evaluate the root.", "workingLatex": "\\sqrt{9} = 3", "explanation": "Because $3 \\times 3 = 9$, the square root of nine is three.", "diagram": null },
        { "stepNumber": 5, "description": "Rewrite and add.", "workingLatex": "3 + 2 = 5", "explanation": "Adding two to three gives five.", "diagram": null },
        { "stepNumber": 6, "description": "State the answer.", "workingLatex": "5", "explanation": "So $\\sqrt{9} + 2 = 5$.", "diagram": null }
      ],
      "finalAnswer": "$5$"
    }
  },
  {
    "id": "gcse.number.order-of-operations.q014",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Priority of operations",
    "subtopicId": "gcse.number.order-of-operations",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "expression",
    "tags": ["order of operations", "brackets", "multiplication"],
    "questionText": "Work out $3 \\times (4 + 2)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall the order of operations.", "workingLatex": "\\text{brackets first}", "explanation": "The bracket must be evaluated before the multiplication acts on it.", "diagram": null },
        { "stepNumber": 2, "description": "Identify the bracket.", "workingLatex": "(4 + 2)", "explanation": "Everything inside the bracket is treated as a single quantity.", "diagram": null },
        { "stepNumber": 3, "description": "Evaluate the bracket.", "workingLatex": "4 + 2 = 6", "explanation": "Four plus two is six.", "diagram": null },
        { "stepNumber": 4, "description": "Rewrite the expression.", "workingLatex": "3 \\times 6", "explanation": "The bracket becomes a single value ready to multiply.", "diagram": null },
        { "stepNumber": 5, "description": "Multiply.", "workingLatex": "3 \\times 6 = 18", "explanation": "Three groups of six make eighteen.", "diagram": null },
        { "stepNumber": 6, "description": "State the answer.", "workingLatex": "18", "explanation": "So $3 \\times (4 + 2) = 18$.", "diagram": null }
      ],
      "finalAnswer": "$18$"
    }
  },
  {
    "id": "gcse.number.order-of-operations.q015",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Priority of operations",
    "subtopicId": "gcse.number.order-of-operations",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "expression",
    "tags": ["order of operations", "brackets", "multiplication"],
    "questionText": "Work out $(8 - 3) \\times 2$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall the order of operations.", "workingLatex": "\\text{brackets first}", "explanation": "The subtraction inside the bracket is completed before multiplying.", "diagram": null },
        { "stepNumber": 2, "description": "Identify the bracket.", "workingLatex": "(8 - 3)", "explanation": "The bracket groups the subtraction so it happens first.", "diagram": null },
        { "stepNumber": 3, "description": "Evaluate the bracket.", "workingLatex": "8 - 3 = 5", "explanation": "Eight take away three leaves five.", "diagram": null },
        { "stepNumber": 4, "description": "Rewrite the expression.", "workingLatex": "5 \\times 2", "explanation": "The bracket is now a single number.", "diagram": null },
        { "stepNumber": 5, "description": "Multiply.", "workingLatex": "5 \\times 2 = 10", "explanation": "Five doubled is ten.", "diagram": null },
        { "stepNumber": 6, "description": "State the answer.", "workingLatex": "10", "explanation": "So $(8 - 3) \\times 2 = 10$.", "diagram": null }
      ],
      "finalAnswer": "$10$"
    }
  },
  {
    "id": "gcse.number.order-of-operations.q016",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Priority of operations",
    "subtopicId": "gcse.number.order-of-operations",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": ["order of operations", "brackets", "division"],
    "questionText": "Work out $100 \\div (5 \\times 2)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall the order of operations.", "workingLatex": "\\text{brackets first}", "explanation": "The bracket must be evaluated before the division outside it.", "diagram": null },
        { "stepNumber": 2, "description": "Identify the bracket.", "workingLatex": "(5 \\times 2)", "explanation": "The multiplication inside the bracket is grouped and done first.", "diagram": null },
        { "stepNumber": 3, "description": "Evaluate the bracket.", "workingLatex": "5 \\times 2 = 10", "explanation": "Five twos make ten.", "diagram": null },
        { "stepNumber": 4, "description": "Rewrite the expression.", "workingLatex": "100 \\div 10", "explanation": "The bracket becomes a single divisor.", "diagram": null },
        { "stepNumber": 5, "description": "Divide.", "workingLatex": "100 \\div 10 = 10", "explanation": "One hundred shared into ten equal parts gives ten in each.", "diagram": null },
        { "stepNumber": 6, "description": "State the answer.", "workingLatex": "10", "explanation": "So $100 \\div (5 \\times 2) = 10$.", "diagram": null }
      ],
      "finalAnswer": "$10$"
    }
  },
  {
    "id": "gcse.number.order-of-operations.q017",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Priority of operations",
    "subtopicId": "gcse.number.order-of-operations",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "expression",
    "tags": ["order of operations", "division", "addition"],
    "questionText": "Work out $9 + 6 \\div 3$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall the order of operations.", "workingLatex": "\\div \\ \\text{before} \\ +", "explanation": "Division is completed before addition, so $6 \\div 3$ is first.", "diagram": null },
        { "stepNumber": 2, "description": "Identify the division.", "workingLatex": "6 \\div 3", "explanation": "This is the higher priority operation here.", "diagram": null },
        { "stepNumber": 3, "description": "Evaluate the division.", "workingLatex": "6 \\div 3 = 2", "explanation": "Six split into three equal parts gives two each.", "diagram": null },
        { "stepNumber": 4, "description": "Rewrite the expression.", "workingLatex": "9 + 2", "explanation": "The quotient replaces the division.", "diagram": null },
        { "stepNumber": 5, "description": "Add.", "workingLatex": "9 + 2 = 11", "explanation": "Nine plus two is eleven.", "diagram": null },
        { "stepNumber": 6, "description": "State the answer.", "workingLatex": "11", "explanation": "So $9 + 6 \\div 3 = 11$.", "diagram": null }
      ],
      "finalAnswer": "$11$"
    }
  },
  {
    "id": "gcse.number.order-of-operations.q018",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Priority of operations",
    "subtopicId": "gcse.number.order-of-operations",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": ["order of operations", "multiplication", "division", "left to right"],
    "questionText": "Work out $8 \\times 2 \\div 4$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall the order of operations.", "workingLatex": "\\times \\ \\text{and} \\ \\div \\ \\text{equal priority}", "explanation": "Multiplication and division share the same rank, so we simply work from left to right.", "diagram": null },
        { "stepNumber": 2, "description": "Find the leftmost operation.", "workingLatex": "8 \\times 2", "explanation": "Since both operations tie, the one further left is done first.", "diagram": null },
        { "stepNumber": 3, "description": "Evaluate the multiplication.", "workingLatex": "8 \\times 2 = 16", "explanation": "Eight doubled is sixteen.", "diagram": null },
        { "stepNumber": 4, "description": "Rewrite the expression.", "workingLatex": "16 \\div 4", "explanation": "Now only the division remains.", "diagram": null },
        { "stepNumber": 5, "description": "Divide.", "workingLatex": "16 \\div 4 = 4", "explanation": "Sixteen split into four equal parts gives four each.", "diagram": null },
        { "stepNumber": 6, "description": "State the answer.", "workingLatex": "4", "explanation": "Working left to right keeps the calculation unambiguous, giving $4$.", "diagram": null }
      ],
      "finalAnswer": "$4$"
    }
  },
  {
    "id": "gcse.number.order-of-operations.q019",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Priority of operations",
    "subtopicId": "gcse.number.order-of-operations",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "expression",
    "tags": ["order of operations", "multiplication", "subtraction"],
    "questionText": "Work out $15 - 3 \\times 2$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall the order of operations.", "workingLatex": "\\times \\ \\text{before} \\ -", "explanation": "Multiplication ranks above subtraction, so $3 \\times 2$ is first.", "diagram": null },
        { "stepNumber": 2, "description": "Identify the multiplication.", "workingLatex": "3 \\times 2", "explanation": "This higher priority operation is resolved before subtracting.", "diagram": null },
        { "stepNumber": 3, "description": "Evaluate the multiplication.", "workingLatex": "3 \\times 2 = 6", "explanation": "Three twos make six.", "diagram": null },
        { "stepNumber": 4, "description": "Rewrite the expression.", "workingLatex": "15 - 6", "explanation": "The product becomes a single number.", "diagram": null },
        { "stepNumber": 5, "description": "Subtract.", "workingLatex": "15 - 6 = 9", "explanation": "Fifteen take away six leaves nine.", "diagram": null },
        { "stepNumber": 6, "description": "State the answer.", "workingLatex": "9", "explanation": "So $15 - 3 \\times 2 = 9$.", "diagram": null }
      ],
      "finalAnswer": "$9$"
    }
  },
  {
    "id": "gcse.number.order-of-operations.q020",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Priority of operations",
    "subtopicId": "gcse.number.order-of-operations",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "expression",
    "tags": ["order of operations", "multiplication", "addition"],
    "questionText": "Work out $2 + 2 \\times 2$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall the order of operations.", "workingLatex": "\\times \\ \\text{before} \\ +", "explanation": "The multiplication is completed before the addition.", "diagram": null },
        { "stepNumber": 2, "description": "Identify the multiplication.", "workingLatex": "2 \\times 2", "explanation": "This is the higher priority operation, sitting at the right.", "diagram": null },
        { "stepNumber": 3, "description": "Evaluate the multiplication.", "workingLatex": "2 \\times 2 = 4", "explanation": "Two doubled is four.", "diagram": null },
        { "stepNumber": 4, "description": "Rewrite the expression.", "workingLatex": "2 + 4", "explanation": "The product replaces the multiplication.", "diagram": null },
        { "stepNumber": 5, "description": "Add.", "workingLatex": "2 + 4 = 6", "explanation": "Two plus four is six.", "diagram": null },
        { "stepNumber": 6, "description": "State the answer.", "workingLatex": "6", "explanation": "Adding first would wrongly give $4 \\times 2 = 8$, so order matters.", "diagram": null }
      ],
      "finalAnswer": "$6$"
    }
  },
  {
    "id": "gcse.number.order-of-operations.q021",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Priority of operations",
    "subtopicId": "gcse.number.order-of-operations",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "expression",
    "tags": ["order of operations", "brackets", "division"],
    "questionText": "Work out $(6 + 4) \\div 5$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall the order of operations.", "workingLatex": "\\text{brackets first}", "explanation": "The bracket is evaluated before the division.", "diagram": null },
        { "stepNumber": 2, "description": "Identify the bracket.", "workingLatex": "(6 + 4)", "explanation": "The addition inside the bracket is grouped and done first.", "diagram": null },
        { "stepNumber": 3, "description": "Evaluate the bracket.", "workingLatex": "6 + 4 = 10", "explanation": "Six plus four is ten.", "diagram": null },
        { "stepNumber": 4, "description": "Rewrite the expression.", "workingLatex": "10 \\div 5", "explanation": "The bracket becomes a single dividend.", "diagram": null },
        { "stepNumber": 5, "description": "Divide.", "workingLatex": "10 \\div 5 = 2", "explanation": "Ten shared into five equal parts gives two each.", "diagram": null },
        { "stepNumber": 6, "description": "State the answer.", "workingLatex": "2", "explanation": "So $(6 + 4) \\div 5 = 2$.", "diagram": null }
      ],
      "finalAnswer": "$2$"
    }
  },
  {
    "id": "gcse.number.order-of-operations.q022",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Priority of operations",
    "subtopicId": "gcse.number.order-of-operations",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": ["order of operations", "indices", "addition"],
    "questionText": "Work out $3^2 + 4^2$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall the order of operations.", "workingLatex": "\\text{indices before} \\ +", "explanation": "Both powers are worked out before the addition joins them.", "diagram": null },
        { "stepNumber": 2, "description": "Evaluate the first power.", "workingLatex": "3^2 = 9", "explanation": "Three squared is $3 \\times 3 = 9$.", "diagram": null },
        { "stepNumber": 3, "description": "Evaluate the second power.", "workingLatex": "4^2 = 16", "explanation": "Four squared is $4 \\times 4 = 16$.", "diagram": null },
        { "stepNumber": 4, "description": "Rewrite the expression.", "workingLatex": "9 + 16", "explanation": "With both squares replaced, only an addition remains.", "diagram": null },
        { "stepNumber": 5, "description": "Add.", "workingLatex": "9 + 16 = 25", "explanation": "Nine plus sixteen is twenty-five.", "diagram": null },
        { "stepNumber": 6, "description": "State the answer.", "workingLatex": "25", "explanation": "So $3^2 + 4^2 = 25$.", "diagram": null }
      ],
      "finalAnswer": "$25$"
    }
  },
  {
    "id": "gcse.number.order-of-operations.q023",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Priority of operations",
    "subtopicId": "gcse.number.order-of-operations",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": ["order of operations", "multiplication", "subtraction"],
    "questionText": "Work out $4 \\times 5 - 2 \\times 3$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall the order of operations.", "workingLatex": "\\times \\ \\text{before} \\ -", "explanation": "Both multiplications are completed before the subtraction between them.", "diagram": null },
        { "stepNumber": 2, "description": "Evaluate the first product.", "workingLatex": "4 \\times 5 = 20", "explanation": "Four fives make twenty.", "diagram": null },
        { "stepNumber": 3, "description": "Evaluate the second product.", "workingLatex": "2 \\times 3 = 6", "explanation": "Two threes make six.", "diagram": null },
        { "stepNumber": 4, "description": "Rewrite the expression.", "workingLatex": "20 - 6", "explanation": "Both products are now single numbers.", "diagram": null },
        { "stepNumber": 5, "description": "Subtract.", "workingLatex": "20 - 6 = 14", "explanation": "Twenty take away six leaves fourteen.", "diagram": null },
        { "stepNumber": 6, "description": "State the answer.", "workingLatex": "14", "explanation": "So $4 \\times 5 - 2 \\times 3 = 14$.", "diagram": null }
      ],
      "finalAnswer": "$14$"
    }
  },
  {
    "id": "gcse.number.order-of-operations.q024",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Priority of operations",
    "subtopicId": "gcse.number.order-of-operations",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": ["order of operations", "division", "multiplication", "addition"],
    "questionText": "Work out $18 \\div 3 + 2 \\times 4$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall the order of operations.", "workingLatex": "\\times \\div \\ \\text{before} \\ +", "explanation": "Both the division and the multiplication outrank the addition, so they go first.", "diagram": null },
        { "stepNumber": 2, "description": "Evaluate the division.", "workingLatex": "18 \\div 3 = 6", "explanation": "Eighteen split into three groups gives six each.", "diagram": null },
        { "stepNumber": 3, "description": "Evaluate the multiplication.", "workingLatex": "2 \\times 4 = 8", "explanation": "Two fours make eight.", "diagram": null },
        { "stepNumber": 4, "description": "Rewrite the expression.", "workingLatex": "6 + 8", "explanation": "Both higher-priority parts are now single numbers.", "diagram": null },
        { "stepNumber": 5, "description": "Add.", "workingLatex": "6 + 8 = 14", "explanation": "Six plus eight is fourteen.", "diagram": null },
        { "stepNumber": 6, "description": "State the answer.", "workingLatex": "14", "explanation": "So $18 \\div 3 + 2 \\times 4 = 14$.", "diagram": null }
      ],
      "finalAnswer": "$14$"
    }
  },
  {
    "id": "gcse.number.order-of-operations.q025",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Priority of operations",
    "subtopicId": "gcse.number.order-of-operations",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "expression",
    "tags": ["order of operations", "brackets", "subtraction"],
    "questionText": "Work out $10 - (2 + 3)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall the order of operations.", "workingLatex": "\\text{brackets first}", "explanation": "The bracket is evaluated before the subtraction outside it.", "diagram": null },
        { "stepNumber": 2, "description": "Identify the bracket.", "workingLatex": "(2 + 3)", "explanation": "The addition is grouped so it happens before anything else.", "diagram": null },
        { "stepNumber": 3, "description": "Evaluate the bracket.", "workingLatex": "2 + 3 = 5", "explanation": "Two plus three is five.", "diagram": null },
        { "stepNumber": 4, "description": "Rewrite the expression.", "workingLatex": "10 - 5", "explanation": "The bracket becomes a single number to subtract.", "diagram": null },
        { "stepNumber": 5, "description": "Subtract.", "workingLatex": "10 - 5 = 5", "explanation": "Ten take away five leaves five.", "diagram": null },
        { "stepNumber": 6, "description": "State the answer.", "workingLatex": "5", "explanation": "So $10 - (2 + 3) = 5$.", "diagram": null }
      ],
      "finalAnswer": "$5$"
    }
  },
  {
    "id": "gcse.number.order-of-operations.q026",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Priority of operations",
    "subtopicId": "gcse.number.order-of-operations",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": ["order of operations", "multiplication", "addition", "subtraction"],
    "questionText": "Work out $7 + 3 \\times 2 - 4$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall the order of operations.", "workingLatex": "\\times \\ \\text{before} \\ + -", "explanation": "The multiplication is settled first; the addition and subtraction that remain share equal priority.", "diagram": null },
        { "stepNumber": 2, "description": "Evaluate the multiplication.", "workingLatex": "3 \\times 2 = 6", "explanation": "Three twos make six.", "diagram": null },
        { "stepNumber": 3, "description": "Rewrite the expression.", "workingLatex": "7 + 6 - 4", "explanation": "Only additions and subtractions remain now.", "diagram": null },
        { "stepNumber": 4, "description": "Work left to right: add.", "workingLatex": "7 + 6 = 13", "explanation": "The leftmost of the equal-priority operations is the addition.", "diagram": null },
        { "stepNumber": 5, "description": "Continue: subtract.", "workingLatex": "13 - 4 = 9", "explanation": "Then we take four away from thirteen.", "diagram": null },
        { "stepNumber": 6, "description": "State the answer.", "workingLatex": "9", "explanation": "So $7 + 3 \\times 2 - 4 = 9$.", "diagram": null }
      ],
      "finalAnswer": "$9$"
    }
  },
  {
    "id": "gcse.number.order-of-operations.q027",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Priority of operations",
    "subtopicId": "gcse.number.order-of-operations",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": ["order of operations", "indices", "multiplication"],
    "questionText": "Work out $2 \\times 3^2$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall the order of operations.", "workingLatex": "\\text{indices before} \\ \\times", "explanation": "The power ranks above the multiplication, so we square before multiplying.", "diagram": null },
        { "stepNumber": 2, "description": "Identify the power.", "workingLatex": "3^2", "explanation": "The index only applies to the $3$, not to the $2$ in front.", "diagram": null },
        { "stepNumber": 3, "description": "Evaluate the power.", "workingLatex": "3^2 = 9", "explanation": "Three squared is $3 \\times 3 = 9$.", "diagram": null },
        { "stepNumber": 4, "description": "Rewrite the expression.", "workingLatex": "2 \\times 9", "explanation": "The power is replaced by nine.", "diagram": null },
        { "stepNumber": 5, "description": "Multiply.", "workingLatex": "2 \\times 9 = 18", "explanation": "Two nines make eighteen.", "diagram": null },
        { "stepNumber": 6, "description": "State the answer.", "workingLatex": "18", "explanation": "Multiplying first would wrongly give $6^2 = 36$, so the index comes first.", "diagram": null }
      ],
      "finalAnswer": "$18$"
    }
  },
  {
    "id": "gcse.number.order-of-operations.q028",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Priority of operations",
    "subtopicId": "gcse.number.order-of-operations",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": ["order of operations", "brackets", "indices"],
    "questionText": "Work out $(5 - 2)^2$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall the order of operations.", "workingLatex": "\\text{brackets before indices}", "explanation": "The bracket is completed before the square is applied to it.", "diagram": null },
        { "stepNumber": 2, "description": "Identify the bracket.", "workingLatex": "(5 - 2)", "explanation": "The whole bracket is what gets squared, so evaluate inside first.", "diagram": null },
        { "stepNumber": 3, "description": "Evaluate the bracket.", "workingLatex": "5 - 2 = 3", "explanation": "Five take away two leaves three.", "diagram": null },
        { "stepNumber": 4, "description": "Rewrite the expression.", "workingLatex": "3^2", "explanation": "Now we square the value of the bracket.", "diagram": null },
        { "stepNumber": 5, "description": "Evaluate the power.", "workingLatex": "3^2 = 9", "explanation": "Three squared is nine.", "diagram": null },
        { "stepNumber": 6, "description": "State the answer.", "workingLatex": "9", "explanation": "So $(5 - 2)^2 = 9$, not $5 - 4 = 1$.", "diagram": null }
      ],
      "finalAnswer": "$9$"
    }
  },
  {
    "id": "gcse.number.order-of-operations.q029",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Priority of operations",
    "subtopicId": "gcse.number.order-of-operations",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": ["order of operations", "division", "left to right"],
    "questionText": "Work out $20 \\div 2 \\div 5$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall the order of operations.", "workingLatex": "\\div \\ \\text{left to right}", "explanation": "With two divisions of equal priority, we simply work from left to right.", "diagram": null },
        { "stepNumber": 2, "description": "Find the leftmost operation.", "workingLatex": "20 \\div 2", "explanation": "The left division is done before the right one.", "diagram": null },
        { "stepNumber": 3, "description": "Evaluate it.", "workingLatex": "20 \\div 2 = 10", "explanation": "Twenty halved is ten.", "diagram": null },
        { "stepNumber": 4, "description": "Rewrite the expression.", "workingLatex": "10 \\div 5", "explanation": "Now only the second division remains.", "diagram": null },
        { "stepNumber": 5, "description": "Divide.", "workingLatex": "10 \\div 5 = 2", "explanation": "Ten shared into five parts gives two each.", "diagram": null },
        { "stepNumber": 6, "description": "State the answer.", "workingLatex": "2", "explanation": "Working right to left would wrongly give $20 \\div (2 \\div 5) = 50$, so left-to-right matters.", "diagram": null }
      ],
      "finalAnswer": "$2$"
    }
  },
  {
    "id": "gcse.number.order-of-operations.q030",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Priority of operations",
    "subtopicId": "gcse.number.order-of-operations",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "expression",
    "tags": ["order of operations", "addition", "subtraction", "left to right"],
    "questionText": "Work out $6 - 4 + 2$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall the order of operations.", "workingLatex": "+ \\ \\text{and} \\ - \\ \\text{equal priority}", "explanation": "Addition and subtraction have the same rank, so we go strictly from left to right.", "diagram": null },
        { "stepNumber": 2, "description": "Find the leftmost operation.", "workingLatex": "6 - 4", "explanation": "The subtraction is further left, so it is done first.", "diagram": null },
        { "stepNumber": 3, "description": "Evaluate it.", "workingLatex": "6 - 4 = 2", "explanation": "Six take away four leaves two.", "diagram": null },
        { "stepNumber": 4, "description": "Rewrite the expression.", "workingLatex": "2 + 2", "explanation": "Now the addition remains.", "diagram": null },
        { "stepNumber": 5, "description": "Add.", "workingLatex": "2 + 2 = 4", "explanation": "Two plus two is four.", "diagram": null },
        { "stepNumber": 6, "description": "State the answer.", "workingLatex": "4", "explanation": "Adding first would wrongly give $6 - 6 = 0$, so left-to-right matters.", "diagram": null }
      ],
      "finalAnswer": "$4$"
    }
  },
  {
    "id": "gcse.number.order-of-operations.q031",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Priority of operations",
    "subtopicId": "gcse.number.order-of-operations",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "expression",
    "tags": ["order of operations", "subtraction", "left to right"],
    "questionText": "Work out $12 - 5 - 3$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall the order of operations.", "workingLatex": "- \\ \\text{left to right}", "explanation": "Two subtractions of equal priority are worked from left to right.", "diagram": null },
        { "stepNumber": 2, "description": "Find the leftmost operation.", "workingLatex": "12 - 5", "explanation": "The left subtraction is done first.", "diagram": null },
        { "stepNumber": 3, "description": "Evaluate it.", "workingLatex": "12 - 5 = 7", "explanation": "Twelve take away five leaves seven.", "diagram": null },
        { "stepNumber": 4, "description": "Rewrite the expression.", "workingLatex": "7 - 3", "explanation": "Now the second subtraction remains.", "diagram": null },
        { "stepNumber": 5, "description": "Subtract.", "workingLatex": "7 - 3 = 4", "explanation": "Seven take away three leaves four.", "diagram": null },
        { "stepNumber": 6, "description": "State the answer.", "workingLatex": "4", "explanation": "Grouping the last two as $5 - 3$ first would wrongly give $10$, so left-to-right matters.", "diagram": null }
      ],
      "finalAnswer": "$4$"
    }
  },
  {
    "id": "gcse.number.order-of-operations.q032",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Priority of operations",
    "subtopicId": "gcse.number.order-of-operations",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": ["order of operations", "division", "multiplication", "left to right"],
    "questionText": "Work out $16 \\div 8 \\times 2$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall the order of operations.", "workingLatex": "\\times \\div \\ \\text{equal priority}", "explanation": "Division and multiplication tie, so we work from left to right.", "diagram": null },
        { "stepNumber": 2, "description": "Find the leftmost operation.", "workingLatex": "16 \\div 8", "explanation": "The division is further left, so it goes first.", "diagram": null },
        { "stepNumber": 3, "description": "Evaluate it.", "workingLatex": "16 \\div 8 = 2", "explanation": "Sixteen shared into eight parts gives two each.", "diagram": null },
        { "stepNumber": 4, "description": "Rewrite the expression.", "workingLatex": "2 \\times 2", "explanation": "Now the multiplication remains.", "diagram": null },
        { "stepNumber": 5, "description": "Multiply.", "workingLatex": "2 \\times 2 = 4", "explanation": "Two doubled is four.", "diagram": null },
        { "stepNumber": 6, "description": "State the answer.", "workingLatex": "4", "explanation": "Doing $8 \\times 2$ first would wrongly give $16 \\div 16 = 1$, so left-to-right matters.", "diagram": null }
      ],
      "finalAnswer": "$4$"
    }
  },
  {
    "id": "gcse.number.order-of-operations.q033",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Priority of operations",
    "subtopicId": "gcse.number.order-of-operations",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": ["order of operations", "multiplication", "addition", "subtraction"],
    "questionText": "Work out $3 + 5 \\times 2 - 1$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall the order of operations.", "workingLatex": "\\times \\ \\text{before} \\ + -", "explanation": "The multiplication is done first; the addition and subtraction then share equal priority.", "diagram": null },
        { "stepNumber": 2, "description": "Evaluate the multiplication.", "workingLatex": "5 \\times 2 = 10", "explanation": "Five twos make ten.", "diagram": null },
        { "stepNumber": 3, "description": "Rewrite the expression.", "workingLatex": "3 + 10 - 1", "explanation": "Only additions and subtractions remain.", "diagram": null },
        { "stepNumber": 4, "description": "Work left to right: add.", "workingLatex": "3 + 10 = 13", "explanation": "The addition is leftmost, so it is done first.", "diagram": null },
        { "stepNumber": 5, "description": "Continue: subtract.", "workingLatex": "13 - 1 = 12", "explanation": "Then subtract one from thirteen.", "diagram": null },
        { "stepNumber": 6, "description": "State the answer.", "workingLatex": "12", "explanation": "So $3 + 5 \\times 2 - 1 = 12$.", "diagram": null }
      ],
      "finalAnswer": "$12$"
    }
  },
  {
    "id": "gcse.number.order-of-operations.q034",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Priority of operations",
    "subtopicId": "gcse.number.order-of-operations",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": ["order of operations", "roots", "multiplication"],
    "questionText": "Work out $\\sqrt{16} \\times 2$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall the order of operations.", "workingLatex": "\\text{roots before} \\ \\times", "explanation": "A root acts like an index, so it is evaluated before the multiplication.", "diagram": null },
        { "stepNumber": 2, "description": "Identify the root.", "workingLatex": "\\sqrt{16}", "explanation": "The root only applies to the $16$, not to the whole expression.", "diagram": null },
        { "stepNumber": 3, "description": "Interpret the root.", "workingLatex": "\\sqrt{16} = ? \\ \\text{where} \\ ?^2 = 16", "explanation": "We look for the number whose square is sixteen.", "diagram": null },
        { "stepNumber": 4, "description": "Evaluate the root.", "workingLatex": "\\sqrt{16} = 4", "explanation": "Because $4 \\times 4 = 16$, the square root is four.", "diagram": null },
        { "stepNumber": 5, "description": "Multiply.", "workingLatex": "4 \\times 2 = 8", "explanation": "Four doubled is eight.", "diagram": null },
        { "stepNumber": 6, "description": "State the answer.", "workingLatex": "8", "explanation": "So $\\sqrt{16} \\times 2 = 8$.", "diagram": null }
      ],
      "finalAnswer": "$8$"
    }
  },
  {
    "id": "gcse.number.order-of-operations.q035",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Priority of operations",
    "subtopicId": "gcse.number.order-of-operations",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": ["order of operations", "multiplication", "addition"],
    "questionText": "Work out $1 + 2 \\times 3 + 4$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall the order of operations.", "workingLatex": "\\times \\ \\text{before} \\ +", "explanation": "The single multiplication is done before the two additions.", "diagram": null },
        { "stepNumber": 2, "description": "Evaluate the multiplication.", "workingLatex": "2 \\times 3 = 6", "explanation": "Two threes make six.", "diagram": null },
        { "stepNumber": 3, "description": "Rewrite the expression.", "workingLatex": "1 + 6 + 4", "explanation": "Only additions remain now.", "diagram": null },
        { "stepNumber": 4, "description": "Add left to right.", "workingLatex": "1 + 6 = 7", "explanation": "Start with the leftmost addition.", "diagram": null },
        { "stepNumber": 5, "description": "Continue adding.", "workingLatex": "7 + 4 = 11", "explanation": "Then add the final four.", "diagram": null },
        { "stepNumber": 6, "description": "State the answer.", "workingLatex": "11", "explanation": "So $1 + 2 \\times 3 + 4 = 11$.", "diagram": null }
      ],
      "finalAnswer": "$11$"
    }
  },
  {
    "id": "gcse.number.order-of-operations.q036",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Priority of operations",
    "subtopicId": "gcse.number.order-of-operations",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "expression",
    "tags": ["order of operations", "brackets", "multiplication", "addition"],
    "questionText": "Work out $4 + 2 \\times (7 - 3)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall the order of operations.", "workingLatex": "\\text{brackets, then} \\ \\times, \\text{then} \\ +", "explanation": "Brackets come first, then multiplication, and addition is last.", "diagram": null },
        { "stepNumber": 2, "description": "Identify the bracket.", "workingLatex": "(7 - 3)", "explanation": "The bracket is the highest priority, so its subtraction is done first.", "diagram": null },
        { "stepNumber": 3, "description": "Evaluate the bracket.", "workingLatex": "7 - 3 = 4", "explanation": "Seven take away three leaves four.", "diagram": null },
        { "stepNumber": 4, "description": "Rewrite the expression.", "workingLatex": "4 + 2 \\times 4", "explanation": "The bracket is now a single number that the multiplication acts on.", "diagram": null },
        { "stepNumber": 5, "description": "Evaluate the multiplication.", "workingLatex": "2 \\times 4 = 8", "explanation": "Multiplication is done before the remaining addition.", "diagram": null },
        { "stepNumber": 6, "description": "Rewrite and add.", "workingLatex": "4 + 8 = 12", "explanation": "The last step is the addition.", "diagram": null },
        { "stepNumber": 7, "description": "State the answer.", "workingLatex": "12", "explanation": "So $4 + 2 \\times (7 - 3) = 12$.", "diagram": null }
      ],
      "finalAnswer": "$12$"
    }
  },
  {
    "id": "gcse.number.order-of-operations.q037",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Priority of operations",
    "subtopicId": "gcse.number.order-of-operations",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "expression",
    "tags": ["order of operations", "brackets", "indices", "division"],
    "questionText": "Work out $(3 + 5)^2 \\div 4$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall the order of operations.", "workingLatex": "\\text{brackets, indices, then} \\ \\div", "explanation": "Brackets come first, then the power, and finally the division.", "diagram": null },
        { "stepNumber": 2, "description": "Identify the bracket.", "workingLatex": "(3 + 5)", "explanation": "The bracket must be evaluated before it can be squared.", "diagram": null },
        { "stepNumber": 3, "description": "Evaluate the bracket.", "workingLatex": "3 + 5 = 8", "explanation": "Three plus five is eight.", "diagram": null },
        { "stepNumber": 4, "description": "Apply the power.", "workingLatex": "8^2 = 64", "explanation": "Squaring eight gives $8 \\times 8 = 64$.", "diagram": null },
        { "stepNumber": 5, "description": "Rewrite the expression.", "workingLatex": "64 \\div 4", "explanation": "With the power evaluated, the division is all that remains.", "diagram": null },
        { "stepNumber": 6, "description": "Divide.", "workingLatex": "64 \\div 4 = 16", "explanation": "Sixty-four shared into four parts gives sixteen each.", "diagram": null },
        { "stepNumber": 7, "description": "State the answer.", "workingLatex": "16", "explanation": "So $(3 + 5)^2 \\div 4 = 16$.", "diagram": null }
      ],
      "finalAnswer": "$16$"
    }
  },
  {
    "id": "gcse.number.order-of-operations.q038",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Priority of operations",
    "subtopicId": "gcse.number.order-of-operations",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "expression",
    "tags": ["order of operations", "brackets", "indices", "multiplication"],
    "questionText": "Work out $2 \\times (3 + 4^2)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall the order of operations.", "workingLatex": "\\text{brackets first, indices inside}", "explanation": "We work inside the bracket first, and within it the power comes before the addition.", "diagram": null },
        { "stepNumber": 2, "description": "Evaluate the power inside the bracket.", "workingLatex": "4^2 = 16", "explanation": "Inside the bracket, the index has priority, so square four first.", "diagram": null },
        { "stepNumber": 3, "description": "Complete the bracket.", "workingLatex": "3 + 16 = 19", "explanation": "Now the addition inside the bracket can be done.", "diagram": null },
        { "stepNumber": 4, "description": "Rewrite the expression.", "workingLatex": "2 \\times 19", "explanation": "The bracket collapses to a single value.", "diagram": null },
        { "stepNumber": 5, "description": "Multiply.", "workingLatex": "2 \\times 19 = 38", "explanation": "Two nineteens make thirty-eight.", "diagram": null },
        { "stepNumber": 6, "description": "Sense-check.", "workingLatex": "2 \\times 19 = 38", "explanation": "Doubling nineteen is the same as $2 \\times 20 - 2 = 38$, which confirms the value.", "diagram": null },
        { "stepNumber": 7, "description": "State the answer.", "workingLatex": "38", "explanation": "So $2 \\times (3 + 4^2) = 38$.", "diagram": null }
      ],
      "finalAnswer": "$38$"
    }
  },
  {
    "id": "gcse.number.order-of-operations.q039",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Priority of operations",
    "subtopicId": "gcse.number.order-of-operations",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "expression",
    "tags": ["order of operations", "brackets", "multiplication", "subtraction"],
    "questionText": "Work out $50 - 3 \\times (2 + 4)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall the order of operations.", "workingLatex": "\\text{brackets, then} \\ \\times, \\text{then} \\ -", "explanation": "Bracket first, then multiplication, then the subtraction.", "diagram": null },
        { "stepNumber": 2, "description": "Identify the bracket.", "workingLatex": "(2 + 4)", "explanation": "The bracket is grouped and evaluated before anything else.", "diagram": null },
        { "stepNumber": 3, "description": "Evaluate the bracket.", "workingLatex": "2 + 4 = 6", "explanation": "Two plus four is six.", "diagram": null },
        { "stepNumber": 4, "description": "Rewrite the expression.", "workingLatex": "50 - 3 \\times 6", "explanation": "The bracket is now a single number to be multiplied.", "diagram": null },
        { "stepNumber": 5, "description": "Evaluate the multiplication.", "workingLatex": "3 \\times 6 = 18", "explanation": "Multiplication is done before the subtraction.", "diagram": null },
        { "stepNumber": 6, "description": "Subtract.", "workingLatex": "50 - 18 = 32", "explanation": "Fifty take away eighteen leaves thirty-two.", "diagram": null },
        { "stepNumber": 7, "description": "State the answer.", "workingLatex": "32", "explanation": "So $50 - 3 \\times (2 + 4) = 32$.", "diagram": null }
      ],
      "finalAnswer": "$32$"
    }
  },
  {
    "id": "gcse.number.order-of-operations.q040",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Priority of operations",
    "subtopicId": "gcse.number.order-of-operations",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "expression",
    "tags": ["order of operations", "brackets", "division", "indices", "addition"],
    "questionText": "Work out $(12 - 4) \\div 2 + 3^2$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall the order of operations.", "workingLatex": "\\text{brackets, indices, } \\div, +", "explanation": "We deal with the bracket and the power first, then the division, and finally the addition.", "diagram": null },
        { "stepNumber": 2, "description": "Evaluate the bracket.", "workingLatex": "12 - 4 = 8", "explanation": "The bracket has top priority, giving eight.", "diagram": null },
        { "stepNumber": 3, "description": "Evaluate the power.", "workingLatex": "3^2 = 9", "explanation": "The index is next in priority, giving nine.", "diagram": null },
        { "stepNumber": 4, "description": "Rewrite the expression.", "workingLatex": "8 \\div 2 + 9", "explanation": "Now only a division and an addition remain.", "diagram": null },
        { "stepNumber": 5, "description": "Evaluate the division.", "workingLatex": "8 \\div 2 = 4", "explanation": "Division outranks addition, so it is done next.", "diagram": null },
        { "stepNumber": 6, "description": "Add.", "workingLatex": "4 + 9 = 13", "explanation": "The final addition gives thirteen.", "diagram": null },
        { "stepNumber": 7, "description": "State the answer.", "workingLatex": "13", "explanation": "So $(12 - 4) \\div 2 + 3^2 = 13$.", "diagram": null }
      ],
      "finalAnswer": "$13$"
    }
  },
  {
    "id": "gcse.number.order-of-operations.q041",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Priority of operations",
    "subtopicId": "gcse.number.order-of-operations",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "expression",
    "tags": ["order of operations", "multiplication", "division", "addition", "subtraction"],
    "questionText": "Work out $6 + 4 \\times 3 - 8 \\div 2$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall the order of operations.", "workingLatex": "\\times \\div \\ \\text{before} \\ + -", "explanation": "The multiplication and division are done before the addition and subtraction.", "diagram": null },
        { "stepNumber": 2, "description": "Evaluate the multiplication.", "workingLatex": "4 \\times 3 = 12", "explanation": "Four threes make twelve.", "diagram": null },
        { "stepNumber": 3, "description": "Evaluate the division.", "workingLatex": "8 \\div 2 = 4", "explanation": "Eight halved is four.", "diagram": null },
        { "stepNumber": 4, "description": "Rewrite the expression.", "workingLatex": "6 + 12 - 4", "explanation": "Only additions and subtractions remain.", "diagram": null },
        { "stepNumber": 5, "description": "Work left to right: add.", "workingLatex": "6 + 12 = 18", "explanation": "The addition is leftmost.", "diagram": null },
        { "stepNumber": 6, "description": "Continue: subtract.", "workingLatex": "18 - 4 = 14", "explanation": "Then take four away from eighteen.", "diagram": null },
        { "stepNumber": 7, "description": "State the answer.", "workingLatex": "14", "explanation": "So $6 + 4 \\times 3 - 8 \\div 2 = 14$.", "diagram": null }
      ],
      "finalAnswer": "$14$"
    }
  },
  {
    "id": "gcse.number.order-of-operations.q042",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Priority of operations",
    "subtopicId": "gcse.number.order-of-operations",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "expression",
    "tags": ["order of operations", "brackets", "indices", "division"],
    "questionText": "Work out $100 \\div (2 + 3)^2$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall the order of operations.", "workingLatex": "\\text{brackets, indices, then} \\ \\div", "explanation": "The bracket is evaluated, then squared, before the division is carried out.", "diagram": null },
        { "stepNumber": 2, "description": "Evaluate the bracket.", "workingLatex": "2 + 3 = 5", "explanation": "The bracket has top priority, giving five.", "diagram": null },
        { "stepNumber": 3, "description": "Apply the power.", "workingLatex": "5^2 = 25", "explanation": "Squaring the bracket's value gives twenty-five.", "diagram": null },
        { "stepNumber": 4, "description": "Rewrite the expression.", "workingLatex": "100 \\div 25", "explanation": "The denominator is now a single number.", "diagram": null },
        { "stepNumber": 5, "description": "Divide.", "workingLatex": "100 \\div 25 = 4", "explanation": "One hundred split into groups of twenty-five gives four.", "diagram": null },
        { "stepNumber": 6, "description": "Sense-check.", "workingLatex": "4 \\times 25 = 100", "explanation": "Multiplying back confirms the division is correct.", "diagram": null },
        { "stepNumber": 7, "description": "State the answer.", "workingLatex": "4", "explanation": "So $100 \\div (2 + 3)^2 = 4$.", "diagram": null }
      ],
      "finalAnswer": "$4$"
    }
  },
  {
    "id": "gcse.number.order-of-operations.q043",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Priority of operations",
    "subtopicId": "gcse.number.order-of-operations",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "expression",
    "tags": ["order of operations", "indices", "brackets", "multiplication", "addition"],
    "questionText": "Work out $2^3 + 3 \\times (5 - 1)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall the order of operations.", "workingLatex": "\\text{brackets, indices, } \\times, +", "explanation": "Deal with the bracket and the power first, then the multiplication, then the addition.", "diagram": null },
        { "stepNumber": 2, "description": "Evaluate the bracket.", "workingLatex": "5 - 1 = 4", "explanation": "The bracket has top priority, giving four.", "diagram": null },
        { "stepNumber": 3, "description": "Evaluate the power.", "workingLatex": "2^3 = 8", "explanation": "Two cubed is $2 \\times 2 \\times 2 = 8$.", "diagram": null },
        { "stepNumber": 4, "description": "Rewrite the expression.", "workingLatex": "8 + 3 \\times 4", "explanation": "Now a multiplication and an addition remain.", "diagram": null },
        { "stepNumber": 5, "description": "Evaluate the multiplication.", "workingLatex": "3 \\times 4 = 12", "explanation": "Multiplication is done before the addition.", "diagram": null },
        { "stepNumber": 6, "description": "Add.", "workingLatex": "8 + 12 = 20", "explanation": "Eight plus twelve is twenty.", "diagram": null },
        { "stepNumber": 7, "description": "State the answer.", "workingLatex": "20", "explanation": "So $2^3 + 3 \\times (5 - 1) = 20$.", "diagram": null }
      ],
      "finalAnswer": "$20$"
    }
  },
  {
    "id": "gcse.number.order-of-operations.q044",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Priority of operations",
    "subtopicId": "gcse.number.order-of-operations",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "expression",
    "tags": ["order of operations", "brackets", "multiplication"],
    "questionText": "Work out $(7 + 2) \\times (6 - 4)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall the order of operations.", "workingLatex": "\\text{brackets before} \\ \\times", "explanation": "Both brackets are evaluated before they are multiplied together.", "diagram": null },
        { "stepNumber": 2, "description": "Evaluate the first bracket.", "workingLatex": "7 + 2 = 9", "explanation": "Seven plus two is nine.", "diagram": null },
        { "stepNumber": 3, "description": "Evaluate the second bracket.", "workingLatex": "6 - 4 = 2", "explanation": "Six take away four leaves two.", "diagram": null },
        { "stepNumber": 4, "description": "Rewrite the expression.", "workingLatex": "9 \\times 2", "explanation": "Both brackets are now single numbers.", "diagram": null },
        { "stepNumber": 5, "description": "Multiply.", "workingLatex": "9 \\times 2 = 18", "explanation": "Nine doubled is eighteen.", "diagram": null },
        { "stepNumber": 6, "description": "Sense-check.", "workingLatex": "9 \\times 2 = 18", "explanation": "Two brackets side by side always mean multiply them, giving eighteen.", "diagram": null },
        { "stepNumber": 7, "description": "State the answer.", "workingLatex": "18", "explanation": "So $(7 + 2) \\times (6 - 4) = 18$.", "diagram": null }
      ],
      "finalAnswer": "$18$"
    }
  },
  {
    "id": "gcse.number.order-of-operations.q045",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Priority of operations",
    "subtopicId": "gcse.number.order-of-operations",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "expression",
    "tags": ["order of operations", "indices", "multiplication", "addition", "subtraction"],
    "questionText": "Work out $5 + 2 \\times 3^2 - 4$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall the order of operations.", "workingLatex": "\\text{indices, } \\times, \\text{ then } + -", "explanation": "The power is first, then the multiplication, and finally the addition and subtraction.", "diagram": null },
        { "stepNumber": 2, "description": "Evaluate the power.", "workingLatex": "3^2 = 9", "explanation": "The index only applies to the $3$, giving nine.", "diagram": null },
        { "stepNumber": 3, "description": "Rewrite the expression.", "workingLatex": "5 + 2 \\times 9 - 4", "explanation": "The power is replaced, leaving a multiplication to do next.", "diagram": null },
        { "stepNumber": 4, "description": "Evaluate the multiplication.", "workingLatex": "2 \\times 9 = 18", "explanation": "Multiplication outranks the addition and subtraction.", "diagram": null },
        { "stepNumber": 5, "description": "Rewrite the expression.", "workingLatex": "5 + 18 - 4", "explanation": "Only additions and subtractions remain.", "diagram": null },
        { "stepNumber": 6, "description": "Work left to right.", "workingLatex": "5 + 18 = 23,\\ 23 - 4 = 19", "explanation": "Add first, then subtract, moving left to right.", "diagram": null },
        { "stepNumber": 7, "description": "State the answer.", "workingLatex": "19", "explanation": "So $5 + 2 \\times 3^2 - 4 = 19$.", "diagram": null }
      ],
      "finalAnswer": "$19$"
    }
  },
  {
    "id": "gcse.number.order-of-operations.q046",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Priority of operations",
    "subtopicId": "gcse.number.order-of-operations",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "expression",
    "tags": ["order of operations", "brackets", "division", "multiplication", "addition"],
    "questionText": "Work out $36 \\div (2 + 4) + 5 \\times 2$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall the order of operations.", "workingLatex": "\\text{brackets, } \\times \\div, +", "explanation": "The bracket goes first, then the division and multiplication, then the addition.", "diagram": null },
        { "stepNumber": 2, "description": "Evaluate the bracket.", "workingLatex": "2 + 4 = 6", "explanation": "The bracket gives six.", "diagram": null },
        { "stepNumber": 3, "description": "Rewrite the expression.", "workingLatex": "36 \\div 6 + 5 \\times 2", "explanation": "The bracket becomes a single divisor.", "diagram": null },
        { "stepNumber": 4, "description": "Evaluate the division.", "workingLatex": "36 \\div 6 = 6", "explanation": "Thirty-six shared into six parts gives six each.", "diagram": null },
        { "stepNumber": 5, "description": "Evaluate the multiplication.", "workingLatex": "5 \\times 2 = 10", "explanation": "The multiplication is also higher priority than the addition.", "diagram": null },
        { "stepNumber": 6, "description": "Add.", "workingLatex": "6 + 10 = 16", "explanation": "The final addition gives sixteen.", "diagram": null },
        { "stepNumber": 7, "description": "State the answer.", "workingLatex": "16", "explanation": "So $36 \\div (2 + 4) + 5 \\times 2 = 16$.", "diagram": null }
      ],
      "finalAnswer": "$16$"
    }
  },
  {
    "id": "gcse.number.order-of-operations.q047",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Priority of operations",
    "subtopicId": "gcse.number.order-of-operations",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "expression",
    "tags": ["order of operations", "fraction bar", "division"],
    "questionText": "Work out $\\dfrac{8 + 4}{6 - 2}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Interpret the fraction bar.", "workingLatex": "\\dfrac{8 + 4}{6 - 2} = (8 + 4) \\div (6 - 2)", "explanation": "A fraction bar acts like invisible brackets: the whole top and the whole bottom are each grouped before dividing.", "diagram": null },
        { "stepNumber": 2, "description": "Evaluate the numerator.", "workingLatex": "8 + 4 = 12", "explanation": "The top of the fraction is completed as if it were bracketed.", "diagram": null },
        { "stepNumber": 3, "description": "Evaluate the denominator.", "workingLatex": "6 - 2 = 4", "explanation": "The bottom of the fraction is completed in the same way.", "diagram": null },
        { "stepNumber": 4, "description": "Rewrite the fraction.", "workingLatex": "\\dfrac{12}{4}", "explanation": "Both parts are now single numbers.", "diagram": null },
        { "stepNumber": 5, "description": "Carry out the division.", "workingLatex": "12 \\div 4 = 3", "explanation": "Twelve shared into four parts gives three each.", "diagram": null },
        { "stepNumber": 6, "description": "Sense-check.", "workingLatex": "3 \\times 4 = 12", "explanation": "Multiplying back recovers the numerator, confirming the result.", "diagram": null },
        { "stepNumber": 7, "description": "State the answer.", "workingLatex": "3", "explanation": "So the fraction equals $3$.", "diagram": null }
      ],
      "finalAnswer": "$3$"
    }
  },
  {
    "id": "gcse.number.order-of-operations.q048",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Priority of operations",
    "subtopicId": "gcse.number.order-of-operations",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "expression",
    "tags": ["order of operations", "fraction bar", "indices"],
    "questionText": "Work out $\\dfrac{5^2 - 1}{2 + 6}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Interpret the fraction bar.", "workingLatex": "\\dfrac{5^2 - 1}{2 + 6} = (5^2 - 1) \\div (2 + 6)", "explanation": "The fraction bar groups the numerator and denominator, so each is evaluated fully before dividing.", "diagram": null },
        { "stepNumber": 2, "description": "Evaluate the power in the numerator.", "workingLatex": "5^2 = 25", "explanation": "Within the numerator, the index has priority.", "diagram": null },
        { "stepNumber": 3, "description": "Complete the numerator.", "workingLatex": "25 - 1 = 24", "explanation": "Now finish the subtraction on top.", "diagram": null },
        { "stepNumber": 4, "description": "Evaluate the denominator.", "workingLatex": "2 + 6 = 8", "explanation": "The bottom is a simple addition.", "diagram": null },
        { "stepNumber": 5, "description": "Rewrite the fraction.", "workingLatex": "\\dfrac{24}{8}", "explanation": "Both parts are now single numbers.", "diagram": null },
        { "stepNumber": 6, "description": "Divide.", "workingLatex": "24 \\div 8 = 3", "explanation": "Twenty-four shared into eight parts gives three each.", "diagram": null },
        { "stepNumber": 7, "description": "State the answer.", "workingLatex": "3", "explanation": "So the fraction equals $3$.", "diagram": null }
      ],
      "finalAnswer": "$3$"
    }
  },
  {
    "id": "gcse.number.order-of-operations.q049",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Priority of operations",
    "subtopicId": "gcse.number.order-of-operations",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "expression",
    "tags": ["order of operations", "brackets", "multiplication", "addition"],
    "questionText": "Work out $3 \\times 4 + 2 \\times (9 - 5)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall the order of operations.", "workingLatex": "\\text{brackets, } \\times, +", "explanation": "The bracket is first, then both multiplications, then the addition.", "diagram": null },
        { "stepNumber": 2, "description": "Evaluate the bracket.", "workingLatex": "9 - 5 = 4", "explanation": "The bracket gives four.", "diagram": null },
        { "stepNumber": 3, "description": "Rewrite the expression.", "workingLatex": "3 \\times 4 + 2 \\times 4", "explanation": "The bracket is replaced by its value.", "diagram": null },
        { "stepNumber": 4, "description": "Evaluate the first multiplication.", "workingLatex": "3 \\times 4 = 12", "explanation": "Three fours make twelve.", "diagram": null },
        { "stepNumber": 5, "description": "Evaluate the second multiplication.", "workingLatex": "2 \\times 4 = 8", "explanation": "Two fours make eight.", "diagram": null },
        { "stepNumber": 6, "description": "Add.", "workingLatex": "12 + 8 = 20", "explanation": "The last step joins the two products.", "diagram": null },
        { "stepNumber": 7, "description": "State the answer.", "workingLatex": "20", "explanation": "So $3 \\times 4 + 2 \\times (9 - 5) = 20$.", "diagram": null }
      ],
      "finalAnswer": "$20$"
    }
  },
  {
    "id": "gcse.number.order-of-operations.q050",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Priority of operations",
    "subtopicId": "gcse.number.order-of-operations",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "expression",
    "tags": ["order of operations", "brackets", "indices", "multiplication", "addition"],
    "questionText": "Work out $2 + 3 \\times (4 + 2^2)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall the order of operations.", "workingLatex": "\\text{brackets (indices inside), } \\times, +", "explanation": "Work inside the bracket first, doing the power before the addition, then multiply, then add.", "diagram": null },
        { "stepNumber": 2, "description": "Evaluate the power inside the bracket.", "workingLatex": "2^2 = 4", "explanation": "Inside the bracket the index has priority.", "diagram": null },
        { "stepNumber": 3, "description": "Complete the bracket.", "workingLatex": "4 + 4 = 8", "explanation": "Now finish the addition inside the bracket.", "diagram": null },
        { "stepNumber": 4, "description": "Rewrite the expression.", "workingLatex": "2 + 3 \\times 8", "explanation": "The bracket collapses to eight.", "diagram": null },
        { "stepNumber": 5, "description": "Evaluate the multiplication.", "workingLatex": "3 \\times 8 = 24", "explanation": "Multiplication comes before the remaining addition.", "diagram": null },
        { "stepNumber": 6, "description": "Add.", "workingLatex": "2 + 24 = 26", "explanation": "The final addition gives twenty-six.", "diagram": null },
        { "stepNumber": 7, "description": "State the answer.", "workingLatex": "26", "explanation": "So $2 + 3 \\times (4 + 2^2) = 26$.", "diagram": null }
      ],
      "finalAnswer": "$26$"
    }
  },
  {
    "id": "gcse.number.order-of-operations.q051",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Priority of operations",
    "subtopicId": "gcse.number.order-of-operations",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "expression",
    "tags": ["order of operations", "brackets", "indices", "multiplication", "subtraction"],
    "questionText": "Work out $(10 - 2 \\times 3)^2$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall the order of operations.", "workingLatex": "\\text{inside bracket first, then square}", "explanation": "Everything inside the bracket must be reduced to one number before the square is applied.", "diagram": null },
        { "stepNumber": 2, "description": "Multiply inside the bracket.", "workingLatex": "2 \\times 3 = 6", "explanation": "Within the bracket, multiplication comes before subtraction.", "diagram": null },
        { "stepNumber": 3, "description": "Complete the bracket.", "workingLatex": "10 - 6 = 4", "explanation": "Now the subtraction inside the bracket can be done.", "diagram": null },
        { "stepNumber": 4, "description": "Rewrite the expression.", "workingLatex": "4^2", "explanation": "The bracket is now the single number four, ready to be squared.", "diagram": null },
        { "stepNumber": 5, "description": "Apply the power.", "workingLatex": "4^2 = 16", "explanation": "Four squared is sixteen.", "diagram": null },
        { "stepNumber": 6, "description": "Sense-check.", "workingLatex": "4 \\times 4 = 16", "explanation": "Squaring is repeated multiplication, confirming sixteen.", "diagram": null },
        { "stepNumber": 7, "description": "State the answer.", "workingLatex": "16", "explanation": "So $(10 - 2 \\times 3)^2 = 16$.", "diagram": null }
      ],
      "finalAnswer": "$16$"
    }
  },
  {
    "id": "gcse.number.order-of-operations.q052",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Priority of operations",
    "subtopicId": "gcse.number.order-of-operations",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "expression",
    "tags": ["order of operations", "reciprocal", "brackets"],
    "questionText": "Work out the reciprocal of $2 + 3$, that is $\\dfrac{1}{2 + 3}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Understand a reciprocal.", "workingLatex": "\\text{reciprocal of } n = \\dfrac{1}{n}", "explanation": "A reciprocal is one divided by the number, so we need $1$ divided by the value of $2 + 3$.", "diagram": null },
        { "stepNumber": 2, "description": "Treat the denominator as bracketed.", "workingLatex": "\\dfrac{1}{2 + 3} = 1 \\div (2 + 3)", "explanation": "The fraction bar groups the whole denominator, so the addition is completed before dividing.", "diagram": null },
        { "stepNumber": 3, "description": "Evaluate the denominator.", "workingLatex": "2 + 3 = 5", "explanation": "The bottom becomes a single number, five.", "diagram": null },
        { "stepNumber": 4, "description": "Rewrite the reciprocal.", "workingLatex": "\\dfrac{1}{5}", "explanation": "Now the reciprocal is simply one-fifth.", "diagram": null },
        { "stepNumber": 5, "description": "Express as a decimal (optional).", "workingLatex": "\\dfrac{1}{5} = 0.2", "explanation": "Dividing one by five gives $0.2$, a useful check of the size.", "diagram": null },
        { "stepNumber": 6, "description": "Sense-check.", "workingLatex": "5 \\times \\dfrac{1}{5} = 1", "explanation": "A number times its reciprocal always gives one, confirming the answer.", "diagram": null },
        { "stepNumber": 7, "description": "State the answer.", "workingLatex": "\\dfrac{1}{5}", "explanation": "So the reciprocal of $2 + 3$ is $\\tfrac{1}{5}$.", "diagram": null }
      ],
      "finalAnswer": "$\\frac{1}{5}$"
    }
  },
  {
    "id": "gcse.number.order-of-operations.q053",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Priority of operations",
    "subtopicId": "gcse.number.order-of-operations",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "expression",
    "tags": ["order of operations", "brackets", "indices", "division"],
    "questionText": "Work out $40 \\div (2^3 - 3)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall the order of operations.", "workingLatex": "\\text{bracket (indices inside), then} \\ \\div", "explanation": "Inside the bracket, evaluate the power before the subtraction, then divide.", "diagram": null },
        { "stepNumber": 2, "description": "Evaluate the power inside the bracket.", "workingLatex": "2^3 = 8", "explanation": "Two cubed is $2 \\times 2 \\times 2 = 8$.", "diagram": null },
        { "stepNumber": 3, "description": "Complete the bracket.", "workingLatex": "8 - 3 = 5", "explanation": "Now the subtraction inside the bracket gives five.", "diagram": null },
        { "stepNumber": 4, "description": "Rewrite the expression.", "workingLatex": "40 \\div 5", "explanation": "The bracket becomes a single divisor.", "diagram": null },
        { "stepNumber": 5, "description": "Divide.", "workingLatex": "40 \\div 5 = 8", "explanation": "Forty shared into five parts gives eight each.", "diagram": null },
        { "stepNumber": 6, "description": "Sense-check.", "workingLatex": "8 \\times 5 = 40", "explanation": "Multiplying back confirms the division.", "diagram": null },
        { "stepNumber": 7, "description": "State the answer.", "workingLatex": "8", "explanation": "So $40 \\div (2^3 - 3) = 8$.", "diagram": null }
      ],
      "finalAnswer": "$8$"
    }
  },
  {
    "id": "gcse.number.order-of-operations.q054",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Priority of operations",
    "subtopicId": "gcse.number.order-of-operations",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "expression",
    "tags": ["order of operations", "brackets", "multiplication", "division", "subtraction"],
    "questionText": "Work out $7 \\times 2 - (6 + 4) \\div 2$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall the order of operations.", "workingLatex": "\\text{brackets, } \\times \\div, -", "explanation": "The bracket is first, then the multiplication and division, then the subtraction.", "diagram": null },
        { "stepNumber": 2, "description": "Evaluate the bracket.", "workingLatex": "6 + 4 = 10", "explanation": "The bracket gives ten.", "diagram": null },
        { "stepNumber": 3, "description": "Rewrite the expression.", "workingLatex": "7 \\times 2 - 10 \\div 2", "explanation": "The bracket is replaced by its value.", "diagram": null },
        { "stepNumber": 4, "description": "Evaluate the multiplication.", "workingLatex": "7 \\times 2 = 14", "explanation": "Seven doubled is fourteen.", "diagram": null },
        { "stepNumber": 5, "description": "Evaluate the division.", "workingLatex": "10 \\div 2 = 5", "explanation": "Ten halved is five.", "diagram": null },
        { "stepNumber": 6, "description": "Subtract.", "workingLatex": "14 - 5 = 9", "explanation": "Fourteen take away five leaves nine.", "diagram": null },
        { "stepNumber": 7, "description": "State the answer.", "workingLatex": "9", "explanation": "So $7 \\times 2 - (6 + 4) \\div 2 = 9$.", "diagram": null }
      ],
      "finalAnswer": "$9$"
    }
  },
  {
    "id": "gcse.number.order-of-operations.q055",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Priority of operations",
    "subtopicId": "gcse.number.order-of-operations",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "expression",
    "tags": ["order of operations", "brackets", "division", "subtraction"],
    "questionText": "Work out $(4 + 6) \\div 2 - 3$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall the order of operations.", "workingLatex": "\\text{brackets, } \\div, -", "explanation": "The bracket is first, then the division, then the subtraction.", "diagram": null },
        { "stepNumber": 2, "description": "Evaluate the bracket.", "workingLatex": "4 + 6 = 10", "explanation": "The bracket gives ten.", "diagram": null },
        { "stepNumber": 3, "description": "Rewrite the expression.", "workingLatex": "10 \\div 2 - 3", "explanation": "The bracket becomes a single number.", "diagram": null },
        { "stepNumber": 4, "description": "Evaluate the division.", "workingLatex": "10 \\div 2 = 5", "explanation": "Division outranks subtraction, so it is done next.", "diagram": null },
        { "stepNumber": 5, "description": "Subtract.", "workingLatex": "5 - 3 = 2", "explanation": "Five take away three leaves two.", "diagram": null },
        { "stepNumber": 6, "description": "Sense-check.", "workingLatex": "5 - 3 = 2", "explanation": "Subtracting before dividing would wrongly give $10 \\div (-1)$, so the order confirms two.", "diagram": null },
        { "stepNumber": 7, "description": "State the answer.", "workingLatex": "2", "explanation": "So $(4 + 6) \\div 2 - 3 = 2$.", "diagram": null }
      ],
      "finalAnswer": "$2$"
    }
  },
  {
    "id": "gcse.number.order-of-operations.q056",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Priority of operations",
    "subtopicId": "gcse.number.order-of-operations",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "expression",
    "tags": ["order of operations", "indices", "multiplication", "subtraction"],
    "questionText": "Work out $2 \\times 5^2 - 3 \\times 4$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall the order of operations.", "workingLatex": "\\text{indices, } \\times, -", "explanation": "The power is first, then both multiplications, then the subtraction.", "diagram": null },
        { "stepNumber": 2, "description": "Evaluate the power.", "workingLatex": "5^2 = 25", "explanation": "The index only applies to the $5$, giving twenty-five.", "diagram": null },
        { "stepNumber": 3, "description": "Rewrite the expression.", "workingLatex": "2 \\times 25 - 3 \\times 4", "explanation": "The power is replaced by its value.", "diagram": null },
        { "stepNumber": 4, "description": "Evaluate the first product.", "workingLatex": "2 \\times 25 = 50", "explanation": "Two twenty-fives make fifty.", "diagram": null },
        { "stepNumber": 5, "description": "Evaluate the second product.", "workingLatex": "3 \\times 4 = 12", "explanation": "Three fours make twelve.", "diagram": null },
        { "stepNumber": 6, "description": "Subtract.", "workingLatex": "50 - 12 = 38", "explanation": "Fifty take away twelve leaves thirty-eight.", "diagram": null },
        { "stepNumber": 7, "description": "State the answer.", "workingLatex": "38", "explanation": "So $2 \\times 5^2 - 3 \\times 4 = 38$.", "diagram": null }
      ],
      "finalAnswer": "$38$"
    }
  },
  {
    "id": "gcse.number.order-of-operations.q057",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Priority of operations",
    "subtopicId": "gcse.number.order-of-operations",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "expression",
    "tags": ["order of operations", "spot the mistake", "multiplication", "addition"],
    "questionText": "A student writes $3 + 4 \\times 5 = 35$. Explain the mistake and give the correct value.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Read what the student did.", "workingLatex": "3 + 4 = 7,\\ 7 \\times 5 = 35", "explanation": "The student worked strictly left to right, adding before multiplying, which produced $35$.", "diagram": null },
        { "stepNumber": 2, "description": "Identify the error.", "workingLatex": "\\times \\ \\text{should come before} \\ +", "explanation": "The mistake is ignoring priority: multiplication must be done before addition, regardless of reading order.", "diagram": null },
        { "stepNumber": 3, "description": "Recall the correct order.", "workingLatex": "\\text{brackets, indices, } \\times \\div, + -", "explanation": "BIDMAS fixes the sequence so that everyone gets the same answer.", "diagram": null },
        { "stepNumber": 4, "description": "Do the multiplication first.", "workingLatex": "4 \\times 5 = 20", "explanation": "This is the highest priority operation present.", "diagram": null },
        { "stepNumber": 5, "description": "Rewrite the expression.", "workingLatex": "3 + 20", "explanation": "Only the addition now remains.", "diagram": null },
        { "stepNumber": 6, "description": "Add.", "workingLatex": "3 + 20 = 23", "explanation": "Three plus twenty is twenty-three.", "diagram": null },
        { "stepNumber": 7, "description": "State the correct answer.", "workingLatex": "23", "explanation": "The correct value is $23$; $35$ came from breaking the order of operations.", "diagram": null }
      ],
      "finalAnswer": "$23$"
    }
  },
  {
    "id": "gcse.number.order-of-operations.q058",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Priority of operations",
    "subtopicId": "gcse.number.order-of-operations",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "expression",
    "tags": ["order of operations", "worded", "multiplication", "addition"],
    "questionText": "Sam buys $3$ pens costing $\\pounds 2$ each and one notebook costing $\\pounds 5$. The total cost in pounds is $3 \\times 2 + 5$. Work out the total cost.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Translate the words into operations.", "workingLatex": "3 \\times 2 + 5", "explanation": "Three pens at $\\pounds 2$ is a multiplication, and the notebook is an added amount.", "diagram": null },
        { "stepNumber": 2, "description": "Recall the order of operations.", "workingLatex": "\\times \\ \\text{before} \\ +", "explanation": "We must find the cost of the pens before adding the notebook, which matches multiplication before addition.", "diagram": null },
        { "stepNumber": 3, "description": "Work out the cost of the pens.", "workingLatex": "3 \\times 2 = 6", "explanation": "Three pens at two pounds each cost six pounds.", "diagram": null },
        { "stepNumber": 4, "description": "Rewrite the expression.", "workingLatex": "6 + 5", "explanation": "Now add the notebook to the cost of the pens.", "diagram": null },
        { "stepNumber": 5, "description": "Add the notebook.", "workingLatex": "6 + 5 = 11", "explanation": "Six pounds of pens plus five pounds of notebook is eleven pounds.", "diagram": null },
        { "stepNumber": 6, "description": "Interpret in context.", "workingLatex": "\\pounds 11", "explanation": "Adding first would wrongly give $3 \\times 7 = \\pounds 21$, which does not match the real situation.", "diagram": null },
        { "stepNumber": 7, "description": "State the answer.", "workingLatex": "\\pounds 11", "explanation": "The total cost is $\\pounds 11$.", "diagram": null }
      ],
      "finalAnswer": "$\\pounds 11$"
    }
  },
  {
    "id": "gcse.number.order-of-operations.q059",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Priority of operations",
    "subtopicId": "gcse.number.order-of-operations",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "expression",
    "tags": ["order of operations", "fraction bar", "addition"],
    "questionText": "Work out $\\dfrac{18 - 3}{2 + 3} + 4$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Interpret the fraction bar.", "workingLatex": "\\dfrac{18 - 3}{2 + 3} = (18 - 3) \\div (2 + 3)", "explanation": "The fraction bar groups the numerator and denominator, so each is evaluated before the division and before the outside addition.", "diagram": null },
        { "stepNumber": 2, "description": "Evaluate the numerator.", "workingLatex": "18 - 3 = 15", "explanation": "The top of the fraction gives fifteen.", "diagram": null },
        { "stepNumber": 3, "description": "Evaluate the denominator.", "workingLatex": "2 + 3 = 5", "explanation": "The bottom of the fraction gives five.", "diagram": null },
        { "stepNumber": 4, "description": "Carry out the division.", "workingLatex": "15 \\div 5 = 3", "explanation": "The fraction simplifies to three.", "diagram": null },
        { "stepNumber": 5, "description": "Rewrite the expression.", "workingLatex": "3 + 4", "explanation": "Now add the four that sits outside the fraction.", "diagram": null },
        { "stepNumber": 6, "description": "Add.", "workingLatex": "3 + 4 = 7", "explanation": "Three plus four is seven.", "diagram": null },
        { "stepNumber": 7, "description": "State the answer.", "workingLatex": "7", "explanation": "So the expression equals $7$.", "diagram": null }
      ],
      "finalAnswer": "$7$"
    }
  },
  {
    "id": "gcse.number.order-of-operations.q060",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Priority of operations",
    "subtopicId": "gcse.number.order-of-operations",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "expression",
    "tags": ["order of operations", "indices", "brackets", "multiplication", "subtraction"],
    "questionText": "Work out $6^2 - 4 \\times (2 + 3)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall the order of operations.", "workingLatex": "\\text{brackets, indices, } \\times, -", "explanation": "Deal with the bracket and the power first, then the multiplication, then the subtraction.", "diagram": null },
        { "stepNumber": 2, "description": "Evaluate the bracket.", "workingLatex": "2 + 3 = 5", "explanation": "The bracket gives five.", "diagram": null },
        { "stepNumber": 3, "description": "Evaluate the power.", "workingLatex": "6^2 = 36", "explanation": "Six squared is thirty-six.", "diagram": null },
        { "stepNumber": 4, "description": "Rewrite the expression.", "workingLatex": "36 - 4 \\times 5", "explanation": "The bracket and power are replaced by their values.", "diagram": null },
        { "stepNumber": 5, "description": "Evaluate the multiplication.", "workingLatex": "4 \\times 5 = 20", "explanation": "Multiplication comes before the subtraction.", "diagram": null },
        { "stepNumber": 6, "description": "Subtract.", "workingLatex": "36 - 20 = 16", "explanation": "Thirty-six take away twenty leaves sixteen.", "diagram": null },
        { "stepNumber": 7, "description": "State the answer.", "workingLatex": "16", "explanation": "So $6^2 - 4 \\times (2 + 3) = 16$.", "diagram": null }
      ],
      "finalAnswer": "$16$"
    }
  },
  {
    "id": "gcse.number.order-of-operations.q061",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Priority of operations",
    "subtopicId": "gcse.number.order-of-operations",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "expression",
    "tags": ["order of operations", "brackets", "indices", "multiplication", "division"],
    "questionText": "Work out $2 \\times (8 - 3)^2 \\div 5$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall the order of operations.", "workingLatex": "\\text{brackets, indices, then} \\ \\times \\div", "explanation": "The bracket is first, then the square, then multiplication and division worked left to right.", "diagram": null },
        { "stepNumber": 2, "description": "Evaluate the bracket.", "workingLatex": "8 - 3 = 5", "explanation": "The bracket gives five.", "diagram": null },
        { "stepNumber": 3, "description": "Apply the power.", "workingLatex": "5^2 = 25", "explanation": "Squaring the bracket's value gives twenty-five.", "diagram": null },
        { "stepNumber": 4, "description": "Rewrite the expression.", "workingLatex": "2 \\times 25 \\div 5", "explanation": "Now only equal-priority multiplication and division remain.", "diagram": null },
        { "stepNumber": 5, "description": "Multiply (leftmost).", "workingLatex": "2 \\times 25 = 50", "explanation": "Working left to right, the multiplication comes first.", "diagram": null },
        { "stepNumber": 6, "description": "Divide.", "workingLatex": "50 \\div 5 = 10", "explanation": "Fifty shared into five parts gives ten each.", "diagram": null },
        { "stepNumber": 7, "description": "State the answer.", "workingLatex": "10", "explanation": "So $2 \\times (8 - 3)^2 \\div 5 = 10$.", "diagram": null }
      ],
      "finalAnswer": "$10$"
    }
  },
  {
    "id": "gcse.number.order-of-operations.q062",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Priority of operations",
    "subtopicId": "gcse.number.order-of-operations",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "expression",
    "tags": ["order of operations", "brackets", "indices", "addition", "subtraction"],
    "questionText": "Work out $9 + (12 \\div 4)^2 - 2$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall the order of operations.", "workingLatex": "\\text{brackets, indices, } + -", "explanation": "The bracket and the power come before the addition and subtraction.", "diagram": null },
        { "stepNumber": 2, "description": "Evaluate the bracket.", "workingLatex": "12 \\div 4 = 3", "explanation": "The bracket gives three.", "diagram": null },
        { "stepNumber": 3, "description": "Apply the power.", "workingLatex": "3^2 = 9", "explanation": "Squaring the bracket's value gives nine.", "diagram": null },
        { "stepNumber": 4, "description": "Rewrite the expression.", "workingLatex": "9 + 9 - 2", "explanation": "Only additions and subtractions remain.", "diagram": null },
        { "stepNumber": 5, "description": "Work left to right: add.", "workingLatex": "9 + 9 = 18", "explanation": "The addition is leftmost.", "diagram": null },
        { "stepNumber": 6, "description": "Continue: subtract.", "workingLatex": "18 - 2 = 16", "explanation": "Then take two away from eighteen.", "diagram": null },
        { "stepNumber": 7, "description": "State the answer.", "workingLatex": "16", "explanation": "So $9 + (12 \\div 4)^2 - 2 = 16$.", "diagram": null }
      ],
      "finalAnswer": "$16$"
    }
  },
  {
    "id": "gcse.number.order-of-operations.q063",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Priority of operations",
    "subtopicId": "gcse.number.order-of-operations",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "expression",
    "tags": ["order of operations", "multiplication", "division", "addition", "subtraction"],
    "questionText": "Work out $3 + 4 \\times 5 - 6 \\div 2$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall the order of operations.", "workingLatex": "\\times \\div \\ \\text{before} \\ + -", "explanation": "The multiplication and division are done before the addition and subtraction.", "diagram": null },
        { "stepNumber": 2, "description": "Evaluate the multiplication.", "workingLatex": "4 \\times 5 = 20", "explanation": "Four fives make twenty.", "diagram": null },
        { "stepNumber": 3, "description": "Evaluate the division.", "workingLatex": "6 \\div 2 = 3", "explanation": "Six halved is three.", "diagram": null },
        { "stepNumber": 4, "description": "Rewrite the expression.", "workingLatex": "3 + 20 - 3", "explanation": "Only additions and subtractions remain.", "diagram": null },
        { "stepNumber": 5, "description": "Work left to right: add.", "workingLatex": "3 + 20 = 23", "explanation": "Start with the leftmost operation.", "diagram": null },
        { "stepNumber": 6, "description": "Continue: subtract.", "workingLatex": "23 - 3 = 20", "explanation": "Then take three away from twenty-three.", "diagram": null },
        { "stepNumber": 7, "description": "State the answer.", "workingLatex": "20", "explanation": "So $3 + 4 \\times 5 - 6 \\div 2 = 20$.", "diagram": null }
      ],
      "finalAnswer": "$20$"
    }
  },
  {
    "id": "gcse.number.order-of-operations.q064",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Priority of operations",
    "subtopicId": "gcse.number.order-of-operations",
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "expression",
    "tags": ["order of operations", "nested brackets", "multiplication", "addition", "subtraction"],
    "questionText": "Work out $2 \\times \\left[3 + (4 \\times 2 - 1)\\right]$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall the order of operations.", "workingLatex": "\\text{innermost bracket first}", "explanation": "With nested brackets we always start from the innermost one and work outward.", "diagram": null },
        { "stepNumber": 2, "description": "Focus on the inner bracket.", "workingLatex": "(4 \\times 2 - 1)", "explanation": "Inside this bracket, multiplication comes before subtraction.", "diagram": null },
        { "stepNumber": 3, "description": "Multiply inside the inner bracket.", "workingLatex": "4 \\times 2 = 8", "explanation": "Deal with the higher-priority multiplication first.", "diagram": null },
        { "stepNumber": 4, "description": "Complete the inner bracket.", "workingLatex": "8 - 1 = 7", "explanation": "Now the subtraction inside the inner bracket gives seven.", "diagram": null },
        { "stepNumber": 5, "description": "Move to the outer bracket.", "workingLatex": "3 + 7 = 10", "explanation": "Replacing the inner bracket, the outer bracket becomes $3 + 7$.", "diagram": null },
        { "stepNumber": 6, "description": "Rewrite the expression.", "workingLatex": "2 \\times 10", "explanation": "Only the multiplication outside remains.", "diagram": null },
        { "stepNumber": 7, "description": "Multiply.", "workingLatex": "2 \\times 10 = 20", "explanation": "Two tens make twenty.", "diagram": null },
        { "stepNumber": 8, "description": "State the answer.", "workingLatex": "20", "explanation": "So $2 \\times [3 + (4 \\times 2 - 1)] = 20$.", "diagram": null }
      ],
      "finalAnswer": "$20$"
    }
  },
  {
    "id": "gcse.number.order-of-operations.q065",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Priority of operations",
    "subtopicId": "gcse.number.order-of-operations",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "expression",
    "tags": ["order of operations", "nested brackets", "indices", "division"],
    "questionText": "Work out $\\left((6 + 2) \\times 3 - 4\\right)^2 \\div 5$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall the order of operations.", "workingLatex": "\\text{innermost bracket, then outer, then index, then} \\ \\div", "explanation": "We resolve the nested brackets fully, then apply the power, then divide.", "diagram": null },
        { "stepNumber": 2, "description": "Evaluate the inner bracket.", "workingLatex": "6 + 2 = 8", "explanation": "Start from the innermost bracket.", "diagram": null },
        { "stepNumber": 3, "description": "Multiply inside the outer bracket.", "workingLatex": "8 \\times 3 = 24", "explanation": "Inside the outer bracket, multiplication comes before subtraction.", "diagram": null },
        { "stepNumber": 4, "description": "Complete the outer bracket.", "workingLatex": "24 - 4 = 20", "explanation": "Now the subtraction inside the outer bracket gives twenty.", "diagram": null },
        { "stepNumber": 5, "description": "Apply the power.", "workingLatex": "20^2 = 400", "explanation": "Squaring twenty gives $20 \\times 20 = 400$.", "diagram": null },
        { "stepNumber": 6, "description": "Rewrite the expression.", "workingLatex": "400 \\div 5", "explanation": "Only the division remains.", "diagram": null },
        { "stepNumber": 7, "description": "Divide.", "workingLatex": "400 \\div 5 = 80", "explanation": "Four hundred shared into five parts gives eighty each.", "diagram": null },
        { "stepNumber": 8, "description": "Sense-check.", "workingLatex": "80 \\times 5 = 400", "explanation": "Multiplying back confirms the division.", "diagram": null },
        { "stepNumber": 9, "description": "State the answer.", "workingLatex": "80", "explanation": "So $((6 + 2) \\times 3 - 4)^2 \\div 5 = 80$.", "diagram": null }
      ],
      "finalAnswer": "$80$"
    }
  },
  {
    "id": "gcse.number.order-of-operations.q066",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Priority of operations",
    "subtopicId": "gcse.number.order-of-operations",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "expression",
    "tags": ["order of operations", "fraction bar", "indices", "division"],
    "questionText": "Work out $\\dfrac{2^3 + 4^2}{3^2 - 5}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Interpret the fraction bar.", "workingLatex": "\\dfrac{2^3 + 4^2}{3^2 - 5} = (2^3 + 4^2) \\div (3^2 - 5)", "explanation": "The fraction bar groups the numerator and denominator, so each is fully evaluated before dividing.", "diagram": null },
        { "stepNumber": 2, "description": "Evaluate the powers in the numerator.", "workingLatex": "2^3 = 8,\\ 4^2 = 16", "explanation": "Within the numerator, indices are done before the addition.", "diagram": null },
        { "stepNumber": 3, "description": "Complete the numerator.", "workingLatex": "8 + 16 = 24", "explanation": "Adding the two power values gives twenty-four on top.", "diagram": null },
        { "stepNumber": 4, "description": "Evaluate the power in the denominator.", "workingLatex": "3^2 = 9", "explanation": "Within the denominator, the index is done before the subtraction.", "diagram": null },
        { "stepNumber": 5, "description": "Complete the denominator.", "workingLatex": "9 - 5 = 4", "explanation": "Subtracting gives four on the bottom.", "diagram": null },
        { "stepNumber": 6, "description": "Rewrite the fraction.", "workingLatex": "\\dfrac{24}{4}", "explanation": "Both parts are now single numbers.", "diagram": null },
        { "stepNumber": 7, "description": "Divide.", "workingLatex": "24 \\div 4 = 6", "explanation": "Twenty-four shared into four parts gives six each.", "diagram": null },
        { "stepNumber": 8, "description": "State the answer.", "workingLatex": "6", "explanation": "So the fraction equals $6$.", "diagram": null }
      ],
      "finalAnswer": "$6$"
    }
  },
  {
    "id": "gcse.number.order-of-operations.q067",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Priority of operations",
    "subtopicId": "gcse.number.order-of-operations",
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "expression",
    "tags": ["order of operations", "reciprocal", "indices", "brackets"],
    "questionText": "Work out $\\dfrac{1}{2^2 + 3^2 - 5}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Treat the denominator as bracketed.", "workingLatex": "\\dfrac{1}{2^2 + 3^2 - 5} = 1 \\div (2^2 + 3^2 - 5)", "explanation": "The fraction bar groups the whole denominator, so it must be evaluated fully before dividing into one.", "diagram": null },
        { "stepNumber": 2, "description": "Evaluate the powers.", "workingLatex": "2^2 = 4,\\ 3^2 = 9", "explanation": "Indices are the highest priority inside the denominator.", "diagram": null },
        { "stepNumber": 3, "description": "Rewrite the denominator.", "workingLatex": "4 + 9 - 5", "explanation": "Replace both powers with their values.", "diagram": null },
        { "stepNumber": 4, "description": "Work left to right: add.", "workingLatex": "4 + 9 = 13", "explanation": "Addition and subtraction share priority, so start on the left.", "diagram": null },
        { "stepNumber": 5, "description": "Continue: subtract.", "workingLatex": "13 - 5 = 8", "explanation": "The denominator simplifies to eight.", "diagram": null },
        { "stepNumber": 6, "description": "Rewrite the reciprocal.", "workingLatex": "\\dfrac{1}{8}", "explanation": "Now the expression is simply one-eighth.", "diagram": null },
        { "stepNumber": 7, "description": "Sense-check.", "workingLatex": "8 \\times \\dfrac{1}{8} = 1", "explanation": "A number times its reciprocal gives one, confirming the answer.", "diagram": null },
        { "stepNumber": 8, "description": "State the answer.", "workingLatex": "\\dfrac{1}{8}", "explanation": "So the value is $\\tfrac{1}{8}$.", "diagram": null }
      ],
      "finalAnswer": "$\\frac{1}{8}$"
    }
  },
  {
    "id": "gcse.number.order-of-operations.q068",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Priority of operations",
    "subtopicId": "gcse.number.order-of-operations",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "expression",
    "tags": ["order of operations", "nested brackets", "indices", "multiplication", "addition"],
    "questionText": "Work out $5 + 2 \\times \\left[(3 + 4)^2 - 4 \\times (6 - 2)\\right]$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall the order of operations.", "workingLatex": "\\text{inner brackets, indices, } \\times, +", "explanation": "Resolve the inner brackets first, then powers and multiplications inside the outer bracket, then finish outside.", "diagram": null },
        { "stepNumber": 2, "description": "Evaluate the inner brackets.", "workingLatex": "3 + 4 = 7,\\ 6 - 2 = 4", "explanation": "Both innermost brackets are evaluated before anything else.", "diagram": null },
        { "stepNumber": 3, "description": "Apply the power.", "workingLatex": "7^2 = 49", "explanation": "Inside the outer bracket the index is done before the multiplication.", "diagram": null },
        { "stepNumber": 4, "description": "Do the multiplication inside the outer bracket.", "workingLatex": "4 \\times 4 = 16", "explanation": "This multiplication uses the value of the second inner bracket.", "diagram": null },
        { "stepNumber": 5, "description": "Complete the outer bracket.", "workingLatex": "49 - 16 = 33", "explanation": "Now the subtraction inside the outer bracket gives thirty-three.", "diagram": null },
        { "stepNumber": 6, "description": "Rewrite the expression.", "workingLatex": "5 + 2 \\times 33", "explanation": "The outer bracket collapses to thirty-three.", "diagram": null },
        { "stepNumber": 7, "description": "Evaluate the multiplication.", "workingLatex": "2 \\times 33 = 66", "explanation": "Multiplication comes before the final addition.", "diagram": null },
        { "stepNumber": 8, "description": "Add.", "workingLatex": "5 + 66 = 71", "explanation": "The last step joins the five to the product.", "diagram": null },
        { "stepNumber": 9, "description": "State the answer.", "workingLatex": "71", "explanation": "So the whole expression equals $71$.", "diagram": null }
      ],
      "finalAnswer": "$71$"
    }
  },
  {
    "id": "gcse.number.order-of-operations.q069",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Priority of operations",
    "subtopicId": "gcse.number.order-of-operations",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "expression",
    "tags": ["order of operations", "spot the mistake", "brackets", "multiplication", "subtraction"],
    "questionText": "A student writes $10 - 2 \\times (3 + 4) = 56$. Explain the mistake and give the correct value.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Read what the student did.", "workingLatex": "3 + 4 = 7,\\ 10 - 2 = 8,\\ 8 \\times 7 = 56", "explanation": "The student did the bracket correctly but then subtracted before multiplying, treating the whole line as $(10 - 2) \\times 7$.", "diagram": null },
        { "stepNumber": 2, "description": "Identify the error.", "workingLatex": "\\times \\ \\text{should come before} \\ -", "explanation": "The mistake is doing the subtraction too early; multiplication has higher priority than subtraction.", "diagram": null },
        { "stepNumber": 3, "description": "Evaluate the bracket correctly.", "workingLatex": "3 + 4 = 7", "explanation": "The bracket is genuinely first, and this part the student got right.", "diagram": null },
        { "stepNumber": 4, "description": "Rewrite the expression.", "workingLatex": "10 - 2 \\times 7", "explanation": "The bracket becomes a single number, but the $2$ still multiplies it before any subtraction.", "diagram": null },
        { "stepNumber": 5, "description": "Do the multiplication.", "workingLatex": "2 \\times 7 = 14", "explanation": "This is the highest-priority operation now present.", "diagram": null },
        { "stepNumber": 6, "description": "Rewrite the expression.", "workingLatex": "10 - 14", "explanation": "Only the subtraction remains.", "diagram": null },
        { "stepNumber": 7, "description": "Subtract.", "workingLatex": "10 - 14 = -4", "explanation": "Because we take away more than we started with, the result is negative.", "diagram": null },
        { "stepNumber": 8, "description": "State the correct answer.", "workingLatex": "-4", "explanation": "The correct value is $-4$; the $56$ came from subtracting before multiplying.", "diagram": null }
      ],
      "finalAnswer": "$-4$"
    }
  },
  {
    "id": "gcse.number.order-of-operations.q070",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Priority of operations",
    "subtopicId": "gcse.number.order-of-operations",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "expression",
    "tags": ["order of operations", "brackets", "indices", "multiplication", "division", "addition"],
    "questionText": "Work out $(4^2 + 3 \\times 2) \\div (11 - 3^2) \\times 5$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall the order of operations.", "workingLatex": "\\text{brackets (indices, } \\times \\text{ inside), then } \\div \\times", "explanation": "Evaluate each bracket fully first, then work the division and multiplication left to right.", "diagram": null },
        { "stepNumber": 2, "description": "Evaluate the power in the first bracket.", "workingLatex": "4^2 = 16", "explanation": "Inside the first bracket, the index is highest priority.", "diagram": null },
        { "stepNumber": 3, "description": "Multiply in the first bracket, then add.", "workingLatex": "3 \\times 2 = 6,\\ 16 + 6 = 22", "explanation": "Multiplication comes before addition, so the first bracket equals twenty-two.", "diagram": null },
        { "stepNumber": 4, "description": "Evaluate the power in the second bracket.", "workingLatex": "3^2 = 9", "explanation": "Inside the second bracket, the index is done before the subtraction.", "diagram": null },
        { "stepNumber": 5, "description": "Complete the second bracket.", "workingLatex": "11 - 9 = 2", "explanation": "The second bracket simplifies to two.", "diagram": null },
        { "stepNumber": 6, "description": "Rewrite the expression.", "workingLatex": "22 \\div 2 \\times 5", "explanation": "Now only equal-priority division and multiplication remain.", "diagram": null },
        { "stepNumber": 7, "description": "Divide (leftmost).", "workingLatex": "22 \\div 2 = 11", "explanation": "Working left to right, the division comes first.", "diagram": null },
        { "stepNumber": 8, "description": "Multiply.", "workingLatex": "11 \\times 5 = 55", "explanation": "Finally multiply by five.", "diagram": null },
        { "stepNumber": 9, "description": "State the answer.", "workingLatex": "55", "explanation": "So $(4^2 + 3 \\times 2) \\div (11 - 3^2) \\times 5 = 55$.", "diagram": null }
      ],
      "finalAnswer": "$55$"
    }
  }
];
