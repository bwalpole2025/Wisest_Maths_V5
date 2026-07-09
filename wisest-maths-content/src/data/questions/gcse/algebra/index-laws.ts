import { Question } from "@/lib/types";

export const questions: Question[] = [
  {
    "id": "gcse.algebra.index-laws.q001",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Index laws in algebra",
    "subtopicId": "gcse.algebra.index-laws",
    "difficulty": "Easy",
    "marks": 1,
    "answerType": "expression",
    "tags": ["index laws", "multiplication law", "simplify"],
    "questionText": "Simplify $x^{3} \\times x^{4}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Identify the law needed.", "workingLatex": "a^{m} \\times a^{n} = a^{m+n}", "explanation": "When multiplying powers of the same base we add the indices.", "diagram": null },
        { "stepNumber": 2, "description": "Check the bases match.", "workingLatex": "x \\text{ and } x", "explanation": "Both terms have base $x$, so the law applies.", "diagram": null },
        { "stepNumber": 3, "description": "Add the indices.", "workingLatex": "3 + 4 = 7", "explanation": "Adding the powers gives the new index.", "diagram": null },
        { "stepNumber": 4, "description": "Write the result.", "workingLatex": "x^{7}", "explanation": "The base stays the same and the index becomes $7$.", "diagram": null },
        { "stepNumber": 5, "description": "Why we add.", "workingLatex": "x^{3} \\times x^{4} = (xxx)(xxxx)", "explanation": "Writing them out shows seven $x$'s multiplied, confirming $x^7$.", "diagram": null },
        { "stepNumber": 6, "description": "State the answer.", "workingLatex": "x^{7}", "explanation": "So $x^3 \\times x^4 = x^7$.", "diagram": null }
      ],
      "finalAnswer": "$x^{7}$"
    }
  },
  {
    "id": "gcse.algebra.index-laws.q002",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Index laws in algebra",
    "subtopicId": "gcse.algebra.index-laws",
    "difficulty": "Easy",
    "marks": 1,
    "answerType": "expression",
    "tags": ["index laws", "division law", "simplify"],
    "questionText": "Simplify $y^{7} \\div y^{2}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Identify the law needed.", "workingLatex": "a^{m} \\div a^{n} = a^{m-n}", "explanation": "When dividing powers of the same base we subtract the indices.", "diagram": null },
        { "stepNumber": 2, "description": "Check the bases match.", "workingLatex": "y \\text{ and } y", "explanation": "Both terms have base $y$, so the law applies.", "diagram": null },
        { "stepNumber": 3, "description": "Subtract the indices.", "workingLatex": "7 - 2 = 5", "explanation": "Subtracting the powers gives the new index.", "diagram": null },
        { "stepNumber": 4, "description": "Write the result.", "workingLatex": "y^{5}", "explanation": "The base stays and the index becomes $5$.", "diagram": null },
        { "stepNumber": 5, "description": "Why we subtract.", "workingLatex": "\\frac{yyyyyyy}{yy}", "explanation": "Two $y$'s cancel from the seven on top, leaving five.", "diagram": null },
        { "stepNumber": 6, "description": "State the answer.", "workingLatex": "y^{5}", "explanation": "So $y^7 \\div y^2 = y^5$.", "diagram": null }
      ],
      "finalAnswer": "$y^{5}$"
    }
  },
  {
    "id": "gcse.algebra.index-laws.q003",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Index laws in algebra",
    "subtopicId": "gcse.algebra.index-laws",
    "difficulty": "Easy",
    "marks": 1,
    "answerType": "expression",
    "tags": ["index laws", "power law", "simplify"],
    "questionText": "Simplify $(x^{2})^{3}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Identify the law needed.", "workingLatex": "(a^{m})^{n} = a^{mn}", "explanation": "Raising a power to another power multiplies the indices.", "diagram": null },
        { "stepNumber": 2, "description": "Read off the indices.", "workingLatex": "m = 2, \\; n = 3", "explanation": "The inner power is $2$ and the outer power is $3$.", "diagram": null },
        { "stepNumber": 3, "description": "Multiply the indices.", "workingLatex": "2 \\times 3 = 6", "explanation": "Multiplying the powers gives the new index.", "diagram": null },
        { "stepNumber": 4, "description": "Write the result.", "workingLatex": "x^{6}", "explanation": "The base stays and the index becomes $6$.", "diagram": null },
        { "stepNumber": 5, "description": "Why we multiply.", "workingLatex": "(x^{2})^{3} = x^{2} \\times x^{2} \\times x^{2}", "explanation": "Three lots of $x^2$ multiplied add to $2+2+2 = 6$.", "diagram": null },
        { "stepNumber": 6, "description": "State the answer.", "workingLatex": "x^{6}", "explanation": "So $(x^2)^3 = x^6$.", "diagram": null }
      ],
      "finalAnswer": "$x^{6}$"
    }
  },
  {
    "id": "gcse.algebra.index-laws.q004",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Index laws in algebra",
    "subtopicId": "gcse.algebra.index-laws",
    "difficulty": "Easy",
    "marks": 1,
    "answerType": "value",
    "tags": ["index laws", "zero index", "simplify"],
    "questionText": "Write down the value of $x^{0}$ (for $x \\neq 0$).",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall the zero index rule.", "workingLatex": "a^{0} = 1", "explanation": "Any non-zero base raised to the power zero equals one.", "diagram": null },
        { "stepNumber": 2, "description": "See why using division.", "workingLatex": "\\frac{x^{n}}{x^{n}} = x^{n-n} = x^{0}", "explanation": "Dividing any power by itself gives $x^0$ by the division law.", "diagram": null },
        { "stepNumber": 3, "description": "Evaluate that division.", "workingLatex": "\\frac{x^{n}}{x^{n}} = 1", "explanation": "But anything divided by itself is $1$.", "diagram": null },
        { "stepNumber": 4, "description": "Match the two results.", "workingLatex": "x^{0} = 1", "explanation": "So $x^0$ must equal $1$.", "diagram": null },
        { "stepNumber": 5, "description": "Note the condition.", "workingLatex": "x \\neq 0", "explanation": "This holds for any base except zero.", "diagram": null },
        { "stepNumber": 6, "description": "State the answer.", "workingLatex": "1", "explanation": "So $x^0 = 1$.", "diagram": null }
      ],
      "finalAnswer": "$1$"
    }
  },
  {
    "id": "gcse.algebra.index-laws.q005",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Index laws in algebra",
    "subtopicId": "gcse.algebra.index-laws",
    "difficulty": "Easy",
    "marks": 1,
    "answerType": "expression",
    "tags": ["index laws", "multiplication law", "simplify"],
    "questionText": "Simplify $a^{2} \\times a^{5}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Identify the law needed.", "workingLatex": "a^{m} \\times a^{n} = a^{m+n}", "explanation": "Multiplying powers of the same base means adding the indices.", "diagram": null },
        { "stepNumber": 2, "description": "Check the bases match.", "workingLatex": "a \\text{ and } a", "explanation": "Both have base $a$, so the law applies.", "diagram": null },
        { "stepNumber": 3, "description": "Add the indices.", "workingLatex": "2 + 5 = 7", "explanation": "Adding the two powers gives $7$.", "diagram": null },
        { "stepNumber": 4, "description": "Write the result.", "workingLatex": "a^{7}", "explanation": "The base stays and the index becomes $7$.", "diagram": null },
        { "stepNumber": 5, "description": "Confirm by expanding.", "workingLatex": "(aa)(aaaaa) = a^{7}", "explanation": "Two $a$'s times five $a$'s is seven $a$'s.", "diagram": null },
        { "stepNumber": 6, "description": "State the answer.", "workingLatex": "a^{7}", "explanation": "So $a^2 \\times a^5 = a^7$.", "diagram": null }
      ],
      "finalAnswer": "$a^{7}$"
    }
  },
  {
    "id": "gcse.algebra.index-laws.q006",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Index laws in algebra",
    "subtopicId": "gcse.algebra.index-laws",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "expression",
    "tags": ["index laws", "division law", "index of one"],
    "questionText": "Simplify $b^{6} \\div b$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Write the hidden index.", "workingLatex": "b = b^{1}", "explanation": "A letter on its own has an index of $1$.", "diagram": null },
        { "stepNumber": 2, "description": "Identify the law needed.", "workingLatex": "a^{m} \\div a^{n} = a^{m-n}", "explanation": "Dividing powers of the same base subtracts the indices.", "diagram": null },
        { "stepNumber": 3, "description": "Check the bases match.", "workingLatex": "b \\text{ and } b", "explanation": "Both have base $b$, so the law applies.", "diagram": null },
        { "stepNumber": 4, "description": "Subtract the indices.", "workingLatex": "6 - 1 = 5", "explanation": "Subtracting gives the new index.", "diagram": null },
        { "stepNumber": 5, "description": "Write the result.", "workingLatex": "b^{5}", "explanation": "The base stays and the index becomes $5$.", "diagram": null },
        { "stepNumber": 6, "description": "Confirm by cancelling.", "workingLatex": "\\frac{bbbbbb}{b} = b^{5}", "explanation": "One $b$ cancels from the six, leaving five.", "diagram": null },
        { "stepNumber": 7, "description": "State the answer.", "workingLatex": "b^{5}", "explanation": "So $b^6 \\div b = b^5$.", "diagram": null }
      ],
      "finalAnswer": "$b^{5}$"
    }
  },
  {
    "id": "gcse.algebra.index-laws.q007",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Index laws in algebra",
    "subtopicId": "gcse.algebra.index-laws",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "expression",
    "tags": ["index laws", "power law", "simplify"],
    "questionText": "Simplify $(m^{3})^{2}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Identify the law needed.", "workingLatex": "(a^{m})^{n} = a^{mn}", "explanation": "A power raised to a power multiplies the indices.", "diagram": null },
        { "stepNumber": 2, "description": "Read off the indices.", "workingLatex": "m = 3, \\; n = 2", "explanation": "The inner power is $3$ and the outer power is $2$.", "diagram": null },
        { "stepNumber": 3, "description": "Multiply the indices.", "workingLatex": "3 \\times 2 = 6", "explanation": "Multiplying gives the new index.", "diagram": null },
        { "stepNumber": 4, "description": "Write the result.", "workingLatex": "m^{6}", "explanation": "The base stays and the index becomes $6$.", "diagram": null },
        { "stepNumber": 5, "description": "Confirm by expanding.", "workingLatex": "(m^{3})^{2} = m^{3} \\times m^{3}", "explanation": "Two lots of $m^3$ add to $3+3 = 6$.", "diagram": null },
        { "stepNumber": 6, "description": "State the answer.", "workingLatex": "m^{6}", "explanation": "So $(m^3)^2 = m^6$.", "diagram": null }
      ],
      "finalAnswer": "$m^{6}$"
    }
  },
  {
    "id": "gcse.algebra.index-laws.q008",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Index laws in algebra",
    "subtopicId": "gcse.algebra.index-laws",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "expression",
    "tags": ["index laws", "multiplication law", "three terms"],
    "questionText": "Simplify $x \\times x^{2} \\times x^{3}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Write the hidden index.", "workingLatex": "x = x^{1}", "explanation": "The lone $x$ has an index of $1$.", "diagram": null },
        { "stepNumber": 2, "description": "Identify the law needed.", "workingLatex": "a^{m} \\times a^{n} = a^{m+n}", "explanation": "Multiplying same-base powers adds the indices.", "diagram": null },
        { "stepNumber": 3, "description": "List the indices.", "workingLatex": "1, \\; 2, \\; 3", "explanation": "The three indices to add are $1$, $2$ and $3$.", "diagram": null },
        { "stepNumber": 4, "description": "Add them.", "workingLatex": "1 + 2 + 3 = 6", "explanation": "The indices total $6$.", "diagram": null },
        { "stepNumber": 5, "description": "Write the result.", "workingLatex": "x^{6}", "explanation": "The base stays and the index becomes $6$.", "diagram": null },
        { "stepNumber": 6, "description": "State the answer.", "workingLatex": "x^{6}", "explanation": "So $x \\times x^2 \\times x^3 = x^6$.", "diagram": null }
      ],
      "finalAnswer": "$x^{6}$"
    }
  },
  {
    "id": "gcse.algebra.index-laws.q009",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Index laws in algebra",
    "subtopicId": "gcse.algebra.index-laws",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "expression",
    "tags": ["index laws", "division law", "simplify"],
    "questionText": "Simplify $\\dfrac{p^{8}}{p^{3}}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recognise the division.", "workingLatex": "\\frac{p^{8}}{p^{3}} = p^{8} \\div p^{3}", "explanation": "A fraction of powers is a division.", "diagram": null },
        { "stepNumber": 2, "description": "Identify the law needed.", "workingLatex": "a^{m} \\div a^{n} = a^{m-n}", "explanation": "Dividing same-base powers subtracts the indices.", "diagram": null },
        { "stepNumber": 3, "description": "Subtract the indices.", "workingLatex": "8 - 3 = 5", "explanation": "Subtracting gives the new index.", "diagram": null },
        { "stepNumber": 4, "description": "Write the result.", "workingLatex": "p^{5}", "explanation": "The base stays and the index becomes $5$.", "diagram": null },
        { "stepNumber": 5, "description": "Confirm by cancelling.", "workingLatex": "\\frac{pppppppp}{ppp} = p^{5}", "explanation": "Three $p$'s cancel from the eight, leaving five.", "diagram": null },
        { "stepNumber": 6, "description": "State the answer.", "workingLatex": "p^{5}", "explanation": "So $\\dfrac{p^8}{p^3} = p^5$.", "diagram": null }
      ],
      "finalAnswer": "$p^{5}$"
    }
  },
  {
    "id": "gcse.algebra.index-laws.q010",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Index laws in algebra",
    "subtopicId": "gcse.algebra.index-laws",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "expression",
    "tags": ["index laws", "multiplication law", "simplify"],
    "questionText": "Simplify $t^{4} \\times t$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Write the hidden index.", "workingLatex": "t = t^{1}", "explanation": "The lone $t$ has an index of $1$.", "diagram": null },
        { "stepNumber": 2, "description": "Identify the law needed.", "workingLatex": "a^{m} \\times a^{n} = a^{m+n}", "explanation": "Multiplying same-base powers adds the indices.", "diagram": null },
        { "stepNumber": 3, "description": "Add the indices.", "workingLatex": "4 + 1 = 5", "explanation": "Adding gives the new index.", "diagram": null },
        { "stepNumber": 4, "description": "Write the result.", "workingLatex": "t^{5}", "explanation": "The base stays and the index becomes $5$.", "diagram": null },
        { "stepNumber": 5, "description": "Confirm by expanding.", "workingLatex": "(tttt)(t) = t^{5}", "explanation": "Four $t$'s times one $t$ is five $t$'s.", "diagram": null },
        { "stepNumber": 6, "description": "State the answer.", "workingLatex": "t^{5}", "explanation": "So $t^4 \\times t = t^5$.", "diagram": null }
      ],
      "finalAnswer": "$t^{5}$"
    }
  },
  {
    "id": "gcse.algebra.index-laws.q011",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Index laws in algebra",
    "subtopicId": "gcse.algebra.index-laws",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "expression",
    "tags": ["index laws", "power law", "simplify"],
    "questionText": "Simplify $(y^{5})^{2}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Identify the law needed.", "workingLatex": "(a^{m})^{n} = a^{mn}", "explanation": "A power of a power multiplies the indices.", "diagram": null },
        { "stepNumber": 2, "description": "Read off the indices.", "workingLatex": "m = 5, \\; n = 2", "explanation": "The inner power is $5$ and the outer power is $2$.", "diagram": null },
        { "stepNumber": 3, "description": "Multiply the indices.", "workingLatex": "5 \\times 2 = 10", "explanation": "Multiplying gives the new index.", "diagram": null },
        { "stepNumber": 4, "description": "Write the result.", "workingLatex": "y^{10}", "explanation": "The base stays and the index becomes $10$.", "diagram": null },
        { "stepNumber": 5, "description": "Confirm by expanding.", "workingLatex": "y^{5} \\times y^{5} = y^{10}", "explanation": "Two lots of $y^5$ add to $10$.", "diagram": null },
        { "stepNumber": 6, "description": "State the answer.", "workingLatex": "y^{10}", "explanation": "So $(y^5)^2 = y^{10}$.", "diagram": null }
      ],
      "finalAnswer": "$y^{10}$"
    }
  },
  {
    "id": "gcse.algebra.index-laws.q012",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Index laws in algebra",
    "subtopicId": "gcse.algebra.index-laws",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "expression",
    "tags": ["index laws", "multiplication law", "coefficients"],
    "questionText": "Simplify $2x^{2} \\times 3x^{4}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Separate numbers and powers.", "workingLatex": "(2 \\times 3) \\times (x^{2} \\times x^{4})", "explanation": "Deal with the coefficients and the powers separately.", "diagram": null },
        { "stepNumber": 2, "description": "Multiply the coefficients.", "workingLatex": "2 \\times 3 = 6", "explanation": "The numbers in front multiply normally.", "diagram": null },
        { "stepNumber": 3, "description": "Identify the index law.", "workingLatex": "a^{m} \\times a^{n} = a^{m+n}", "explanation": "The powers of $x$ are multiplied, so add the indices.", "diagram": null },
        { "stepNumber": 4, "description": "Add the indices.", "workingLatex": "2 + 4 = 6", "explanation": "Adding gives the new power of $x$.", "diagram": null },
        { "stepNumber": 5, "description": "Combine.", "workingLatex": "6 \\times x^{6}", "explanation": "Put the coefficient in front of the power.", "diagram": null },
        { "stepNumber": 6, "description": "Write the result.", "workingLatex": "6x^{6}", "explanation": "So the expression simplifies to $6x^6$.", "diagram": null },
        { "stepNumber": 7, "description": "State the answer.", "workingLatex": "6x^{6}", "explanation": "So $2x^2 \\times 3x^4 = 6x^6$.", "diagram": null }
      ],
      "finalAnswer": "$6x^{6}$"
    }
  },
  {
    "id": "gcse.algebra.index-laws.q013",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Index laws in algebra",
    "subtopicId": "gcse.algebra.index-laws",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "expression",
    "tags": ["index laws", "division law", "coefficients"],
    "questionText": "Simplify $\\dfrac{12x^{7}}{4x^{2}}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Separate numbers and powers.", "workingLatex": "\\frac{12}{4} \\times \\frac{x^{7}}{x^{2}}", "explanation": "Deal with the coefficients and the powers separately.", "diagram": null },
        { "stepNumber": 2, "description": "Divide the coefficients.", "workingLatex": "\\frac{12}{4} = 3", "explanation": "The numbers divide normally.", "diagram": null },
        { "stepNumber": 3, "description": "Identify the index law.", "workingLatex": "a^{m} \\div a^{n} = a^{m-n}", "explanation": "Dividing same-base powers subtracts the indices.", "diagram": null },
        { "stepNumber": 4, "description": "Subtract the indices.", "workingLatex": "7 - 2 = 5", "explanation": "Subtracting gives the new power of $x$.", "diagram": null },
        { "stepNumber": 5, "description": "Combine.", "workingLatex": "3 \\times x^{5}", "explanation": "Put the coefficient in front of the power.", "diagram": null },
        { "stepNumber": 6, "description": "Write the result.", "workingLatex": "3x^{5}", "explanation": "So the expression simplifies to $3x^5$.", "diagram": null },
        { "stepNumber": 7, "description": "State the answer.", "workingLatex": "3x^{5}", "explanation": "So $\\dfrac{12x^7}{4x^2} = 3x^5$.", "diagram": null }
      ],
      "finalAnswer": "$3x^{5}$"
    }
  },
  {
    "id": "gcse.algebra.index-laws.q014",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Index laws in algebra",
    "subtopicId": "gcse.algebra.index-laws",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "expression",
    "tags": ["index laws", "power law", "coefficients"],
    "questionText": "Simplify $(3x^{2})^{2}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Apply the power to each factor.", "workingLatex": "(3x^{2})^{2} = 3^{2} \\times (x^{2})^{2}", "explanation": "A power outside a bracket applies to everything inside.", "diagram": null },
        { "stepNumber": 2, "description": "Square the coefficient.", "workingLatex": "3^{2} = 9", "explanation": "The number $3$ is also squared.", "diagram": null },
        { "stepNumber": 3, "description": "Identify the index law.", "workingLatex": "(a^{m})^{n} = a^{mn}", "explanation": "A power of a power multiplies the indices.", "diagram": null },
        { "stepNumber": 4, "description": "Multiply the indices.", "workingLatex": "2 \\times 2 = 4", "explanation": "Multiplying gives the new power of $x$.", "diagram": null },
        { "stepNumber": 5, "description": "Combine.", "workingLatex": "9 \\times x^{4}", "explanation": "Put the coefficient in front of the power.", "diagram": null },
        { "stepNumber": 6, "description": "Write the result.", "workingLatex": "9x^{4}", "explanation": "So the expression simplifies to $9x^4$.", "diagram": null },
        { "stepNumber": 7, "description": "State the answer.", "workingLatex": "9x^{4}", "explanation": "So $(3x^2)^2 = 9x^4$.", "diagram": null }
      ],
      "finalAnswer": "$9x^{4}$"
    }
  },
  {
    "id": "gcse.algebra.index-laws.q015",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Index laws in algebra",
    "subtopicId": "gcse.algebra.index-laws",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "expression",
    "tags": ["index laws", "multiplication law", "two variables"],
    "questionText": "Simplify $a^{3}b \\times a^{2}b^{4}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Group like bases.", "workingLatex": "(a^{3} \\times a^{2}) \\times (b \\times b^{4})", "explanation": "Collect the $a$ powers together and the $b$ powers together.", "diagram": null },
        { "stepNumber": 2, "description": "Write hidden index for $b$.", "workingLatex": "b = b^{1}", "explanation": "The lone $b$ has an index of $1$.", "diagram": null },
        { "stepNumber": 3, "description": "Add the $a$ indices.", "workingLatex": "3 + 2 = 5", "explanation": "Adding gives $a^5$.", "diagram": null },
        { "stepNumber": 4, "description": "Add the $b$ indices.", "workingLatex": "1 + 4 = 5", "explanation": "Adding gives $b^5$.", "diagram": null },
        { "stepNumber": 5, "description": "Combine.", "workingLatex": "a^{5}b^{5}", "explanation": "Write the two results side by side.", "diagram": null },
        { "stepNumber": 6, "description": "State the answer.", "workingLatex": "a^{5}b^{5}", "explanation": "So $a^3b \\times a^2b^4 = a^5b^5$.", "diagram": null }
      ],
      "finalAnswer": "$a^{5}b^{5}$"
    }
  },
  {
    "id": "gcse.algebra.index-laws.q016",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Index laws in algebra",
    "subtopicId": "gcse.algebra.index-laws",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "expression",
    "tags": ["index laws", "zero index", "coefficients"],
    "questionText": "Simplify $5x^{0}$ (for $x \\neq 0$).",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall the zero index rule.", "workingLatex": "x^{0} = 1", "explanation": "Any non-zero base to the power zero is one.", "diagram": null },
        { "stepNumber": 2, "description": "Substitute this in.", "workingLatex": "5x^{0} = 5 \\times 1", "explanation": "Replace $x^0$ with $1$.", "diagram": null },
        { "stepNumber": 3, "description": "Note the coefficient stays.", "workingLatex": "5 \\times 1", "explanation": "Only the power becomes $1$; the coefficient $5$ is unchanged.", "diagram": null },
        { "stepNumber": 4, "description": "Multiply.", "workingLatex": "5 \\times 1 = 5", "explanation": "Multiplying by one leaves $5$.", "diagram": null },
        { "stepNumber": 5, "description": "Write the result.", "workingLatex": "5", "explanation": "So the whole expression is just $5$.", "diagram": null },
        { "stepNumber": 6, "description": "State the answer.", "workingLatex": "5", "explanation": "So $5x^0 = 5$.", "diagram": null }
      ],
      "finalAnswer": "$5$"
    }
  },
  {
    "id": "gcse.algebra.index-laws.q017",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Index laws in algebra",
    "subtopicId": "gcse.algebra.index-laws",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "expression",
    "tags": ["index laws", "multiplication law", "simplify"],
    "questionText": "Simplify $n^{5} \\times n^{5}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Identify the law needed.", "workingLatex": "a^{m} \\times a^{n} = a^{m+n}", "explanation": "Multiplying same-base powers adds the indices.", "diagram": null },
        { "stepNumber": 2, "description": "Check the bases match.", "workingLatex": "n \\text{ and } n", "explanation": "Both have base $n$, so the law applies.", "diagram": null },
        { "stepNumber": 3, "description": "Add the indices.", "workingLatex": "5 + 5 = 10", "explanation": "Adding gives the new index.", "diagram": null },
        { "stepNumber": 4, "description": "Write the result.", "workingLatex": "n^{10}", "explanation": "The base stays and the index becomes $10$.", "diagram": null },
        { "stepNumber": 5, "description": "Note the common error.", "workingLatex": "n^{10} \\neq n^{25}", "explanation": "We add the indices, not multiply them.", "diagram": null },
        { "stepNumber": 6, "description": "State the answer.", "workingLatex": "n^{10}", "explanation": "So $n^5 \\times n^5 = n^{10}$.", "diagram": null }
      ],
      "finalAnswer": "$n^{10}$"
    }
  },
  {
    "id": "gcse.algebra.index-laws.q018",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Index laws in algebra",
    "subtopicId": "gcse.algebra.index-laws",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "expression",
    "tags": ["index laws", "division law", "index of one"],
    "questionText": "Simplify $\\dfrac{k^{4}}{k^{3}}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recognise the division.", "workingLatex": "\\frac{k^{4}}{k^{3}} = k^{4} \\div k^{3}", "explanation": "A fraction of powers is a division.", "diagram": null },
        { "stepNumber": 2, "description": "Identify the law needed.", "workingLatex": "a^{m} \\div a^{n} = a^{m-n}", "explanation": "Dividing same-base powers subtracts the indices.", "diagram": null },
        { "stepNumber": 3, "description": "Subtract the indices.", "workingLatex": "4 - 3 = 1", "explanation": "Subtracting gives an index of $1$.", "diagram": null },
        { "stepNumber": 4, "description": "Write with index one.", "workingLatex": "k^{1}", "explanation": "The result has index $1$.", "diagram": null },
        { "stepNumber": 5, "description": "Tidy the notation.", "workingLatex": "k^{1} = k", "explanation": "An index of $1$ is not usually written.", "diagram": null },
        { "stepNumber": 6, "description": "State the answer.", "workingLatex": "k", "explanation": "So $\\dfrac{k^4}{k^3} = k$.", "diagram": null }
      ],
      "finalAnswer": "$k$"
    }
  },
  {
    "id": "gcse.algebra.index-laws.q019",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Index laws in algebra",
    "subtopicId": "gcse.algebra.index-laws",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "expression",
    "tags": ["index laws", "multiplication law", "coefficients"],
    "questionText": "Simplify $4a^{3} \\times a^{2}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Keep the coefficient.", "workingLatex": "4 \\times (a^{3} \\times a^{2})", "explanation": "Only one term has a number in front, so it stays as the coefficient.", "diagram": null },
        { "stepNumber": 2, "description": "Identify the index law.", "workingLatex": "a^{m} \\times a^{n} = a^{m+n}", "explanation": "Multiplying same-base powers adds the indices.", "diagram": null },
        { "stepNumber": 3, "description": "Add the indices.", "workingLatex": "3 + 2 = 5", "explanation": "Adding gives the new power.", "diagram": null },
        { "stepNumber": 4, "description": "Combine.", "workingLatex": "4 \\times a^{5}", "explanation": "Put the coefficient in front.", "diagram": null },
        { "stepNumber": 5, "description": "Write the result.", "workingLatex": "4a^{5}", "explanation": "So the expression simplifies to $4a^5$.", "diagram": null },
        { "stepNumber": 6, "description": "State the answer.", "workingLatex": "4a^{5}", "explanation": "So $4a^3 \\times a^2 = 4a^5$.", "diagram": null }
      ],
      "finalAnswer": "$4a^{5}$"
    }
  },
  {
    "id": "gcse.algebra.index-laws.q020",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Index laws in algebra",
    "subtopicId": "gcse.algebra.index-laws",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "expression",
    "tags": ["index laws", "power law", "simplify"],
    "questionText": "Simplify $(c^{4})^{4}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Identify the law needed.", "workingLatex": "(a^{m})^{n} = a^{mn}", "explanation": "A power of a power multiplies the indices.", "diagram": null },
        { "stepNumber": 2, "description": "Read off the indices.", "workingLatex": "m = 4, \\; n = 4", "explanation": "Both the inner and outer powers are $4$.", "diagram": null },
        { "stepNumber": 3, "description": "Multiply the indices.", "workingLatex": "4 \\times 4 = 16", "explanation": "Multiplying gives the new index.", "diagram": null },
        { "stepNumber": 4, "description": "Write the result.", "workingLatex": "c^{16}", "explanation": "The base stays and the index becomes $16$.", "diagram": null },
        { "stepNumber": 5, "description": "Note we multiply, not add.", "workingLatex": "c^{16} \\neq c^{8}", "explanation": "For a power of a power we multiply the indices.", "diagram": null },
        { "stepNumber": 6, "description": "State the answer.", "workingLatex": "c^{16}", "explanation": "So $(c^4)^4 = c^{16}$.", "diagram": null }
      ],
      "finalAnswer": "$c^{16}$"
    }
  },
  {
    "id": "gcse.algebra.index-laws.q021",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Index laws in algebra",
    "subtopicId": "gcse.algebra.index-laws",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "expression",
    "tags": ["index laws", "division law", "two variables"],
    "questionText": "Simplify $\\dfrac{a^{6}b^{5}}{a^{2}b^{3}}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Group like bases.", "workingLatex": "\\frac{a^{6}}{a^{2}} \\times \\frac{b^{5}}{b^{3}}", "explanation": "Split the fraction into the $a$ part and the $b$ part.", "diagram": null },
        { "stepNumber": 2, "description": "Identify the index law.", "workingLatex": "a^{m} \\div a^{n} = a^{m-n}", "explanation": "Dividing same-base powers subtracts the indices.", "diagram": null },
        { "stepNumber": 3, "description": "Subtract the $a$ indices.", "workingLatex": "6 - 2 = 4", "explanation": "Gives $a^4$.", "diagram": null },
        { "stepNumber": 4, "description": "Subtract the $b$ indices.", "workingLatex": "5 - 3 = 2", "explanation": "Gives $b^2$.", "diagram": null },
        { "stepNumber": 5, "description": "Combine.", "workingLatex": "a^{4}b^{2}", "explanation": "Write the two results side by side.", "diagram": null },
        { "stepNumber": 6, "description": "State the answer.", "workingLatex": "a^{4}b^{2}", "explanation": "So $\\dfrac{a^6b^5}{a^2b^3} = a^4b^2$.", "diagram": null }
      ],
      "finalAnswer": "$a^{4}b^{2}$"
    }
  },
  {
    "id": "gcse.algebra.index-laws.q022",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Index laws in algebra",
    "subtopicId": "gcse.algebra.index-laws",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "expression",
    "tags": ["index laws", "power law", "two variables"],
    "questionText": "Simplify $(a^{2}b^{3})^{2}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Apply the power to each factor.", "workingLatex": "(a^{2}b^{3})^{2} = (a^{2})^{2}(b^{3})^{2}", "explanation": "A power outside a bracket applies to every factor inside.", "diagram": null },
        { "stepNumber": 2, "description": "Identify the index law.", "workingLatex": "(a^{m})^{n} = a^{mn}", "explanation": "A power of a power multiplies the indices.", "diagram": null },
        { "stepNumber": 3, "description": "Multiply the $a$ indices.", "workingLatex": "2 \\times 2 = 4", "explanation": "Gives $a^4$.", "diagram": null },
        { "stepNumber": 4, "description": "Multiply the $b$ indices.", "workingLatex": "3 \\times 2 = 6", "explanation": "Gives $b^6$.", "diagram": null },
        { "stepNumber": 5, "description": "Combine.", "workingLatex": "a^{4}b^{6}", "explanation": "Write the two results side by side.", "diagram": null },
        { "stepNumber": 6, "description": "State the answer.", "workingLatex": "a^{4}b^{6}", "explanation": "So $(a^2b^3)^2 = a^4b^6$.", "diagram": null }
      ],
      "finalAnswer": "$a^{4}b^{6}$"
    }
  },
  {
    "id": "gcse.algebra.index-laws.q023",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Index laws in algebra",
    "subtopicId": "gcse.algebra.index-laws",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "expression",
    "tags": ["index laws", "multiplication law", "coefficients"],
    "questionText": "Simplify $5p^{3} \\times 2p^{2}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Separate numbers and powers.", "workingLatex": "(5 \\times 2) \\times (p^{3} \\times p^{2})", "explanation": "Deal with the coefficients and powers separately.", "diagram": null },
        { "stepNumber": 2, "description": "Multiply the coefficients.", "workingLatex": "5 \\times 2 = 10", "explanation": "The numbers multiply normally.", "diagram": null },
        { "stepNumber": 3, "description": "Identify the index law.", "workingLatex": "a^{m} \\times a^{n} = a^{m+n}", "explanation": "Multiplying same-base powers adds the indices.", "diagram": null },
        { "stepNumber": 4, "description": "Add the indices.", "workingLatex": "3 + 2 = 5", "explanation": "Gives the new power of $p$.", "diagram": null },
        { "stepNumber": 5, "description": "Combine.", "workingLatex": "10p^{5}", "explanation": "Put the coefficient in front of the power.", "diagram": null },
        { "stepNumber": 6, "description": "State the answer.", "workingLatex": "10p^{5}", "explanation": "So $5p^3 \\times 2p^2 = 10p^5$.", "diagram": null }
      ],
      "finalAnswer": "$10p^{5}$"
    }
  },
  {
    "id": "gcse.algebra.index-laws.q024",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Index laws in algebra",
    "subtopicId": "gcse.algebra.index-laws",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "expression",
    "tags": ["index laws", "mixed laws", "simplify"],
    "questionText": "Simplify $\\dfrac{x^{3} \\times x^{4}}{x^{2}}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Simplify the numerator first.", "workingLatex": "x^{3} \\times x^{4} = x^{7}", "explanation": "Multiplying same-base powers adds the indices: $3+4=7$.", "diagram": null },
        { "stepNumber": 2, "description": "Rewrite the fraction.", "workingLatex": "\\frac{x^{7}}{x^{2}}", "explanation": "Now the expression is a single division.", "diagram": null },
        { "stepNumber": 3, "description": "Identify the division law.", "workingLatex": "a^{m} \\div a^{n} = a^{m-n}", "explanation": "Dividing same-base powers subtracts the indices.", "diagram": null },
        { "stepNumber": 4, "description": "Subtract the indices.", "workingLatex": "7 - 2 = 5", "explanation": "Gives the final power.", "diagram": null },
        { "stepNumber": 5, "description": "Write the result.", "workingLatex": "x^{5}", "explanation": "The base stays and the index becomes $5$.", "diagram": null },
        { "stepNumber": 6, "description": "State the answer.", "workingLatex": "x^{5}", "explanation": "So $\\dfrac{x^3 \\times x^4}{x^2} = x^5$.", "diagram": null }
      ],
      "finalAnswer": "$x^{5}$"
    }
  },
  {
    "id": "gcse.algebra.index-laws.q025",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Index laws in algebra",
    "subtopicId": "gcse.algebra.index-laws",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "expression",
    "tags": ["index laws", "multiplication law", "two variables", "coefficients"],
    "questionText": "Simplify $3a^{2}b^{4} \\times 5a^{3}b$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Separate the three parts.", "workingLatex": "(3 \\times 5) \\times (a^{2} \\times a^{3}) \\times (b^{4} \\times b)", "explanation": "Group the numbers, the $a$ powers and the $b$ powers.", "diagram": null },
        { "stepNumber": 2, "description": "Multiply the coefficients.", "workingLatex": "3 \\times 5 = 15", "explanation": "The numbers in front multiply normally.", "diagram": null },
        { "stepNumber": 3, "description": "Write the hidden index.", "workingLatex": "b = b^{1}", "explanation": "The lone $b$ has an index of $1$.", "diagram": null },
        { "stepNumber": 4, "description": "Recall the multiplication law.", "workingLatex": "a^{m} \\times a^{n} = a^{m+n}", "explanation": "Same-base powers have their indices added.", "diagram": null },
        { "stepNumber": 5, "description": "Add the $a$ indices.", "workingLatex": "2 + 3 = 5", "explanation": "Gives $a^5$.", "diagram": null },
        { "stepNumber": 6, "description": "Add the $b$ indices.", "workingLatex": "4 + 1 = 5", "explanation": "Gives $b^5$.", "diagram": null },
        { "stepNumber": 7, "description": "Combine the pieces.", "workingLatex": "15 \\times a^{5} \\times b^{5}", "explanation": "Bring the coefficient and the powers together.", "diagram": null },
        { "stepNumber": 8, "description": "Write compactly.", "workingLatex": "15a^{5}b^{5}", "explanation": "Drop the multiplication signs by convention.", "diagram": null },
        { "stepNumber": 9, "description": "State the answer.", "workingLatex": "15a^{5}b^{5}", "explanation": "So $3a^2b^4 \\times 5a^3b = 15a^5b^5$.", "diagram": null }
      ],
      "finalAnswer": "$15a^{5}b^{5}$"
    }
  },
  {
    "id": "gcse.algebra.index-laws.q026",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Index laws in algebra",
    "subtopicId": "gcse.algebra.index-laws",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "expression",
    "tags": ["index laws", "division law", "two variables", "coefficients"],
    "questionText": "Simplify $\\dfrac{20a^{5}b^{6}}{4a^{2}b^{2}}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Split into three fractions.", "workingLatex": "\\frac{20}{4} \\times \\frac{a^{5}}{a^{2}} \\times \\frac{b^{6}}{b^{2}}", "explanation": "Handle the numbers, the $a$ powers and the $b$ powers separately.", "diagram": null },
        { "stepNumber": 2, "description": "Divide the coefficients.", "workingLatex": "\\frac{20}{4} = 5", "explanation": "The numbers divide to give $5$.", "diagram": null },
        { "stepNumber": 3, "description": "Recall the division law.", "workingLatex": "a^{m} \\div a^{n} = a^{m-n}", "explanation": "Same-base powers have their indices subtracted.", "diagram": null },
        { "stepNumber": 4, "description": "Subtract the $a$ indices.", "workingLatex": "5 - 2 = 3", "explanation": "Gives $a^3$.", "diagram": null },
        { "stepNumber": 5, "description": "Subtract the $b$ indices.", "workingLatex": "6 - 2 = 4", "explanation": "Gives $b^4$.", "diagram": null },
        { "stepNumber": 6, "description": "Combine the pieces.", "workingLatex": "5 \\times a^{3} \\times b^{4}", "explanation": "Bring the coefficient and powers together.", "diagram": null },
        { "stepNumber": 7, "description": "Write compactly.", "workingLatex": "5a^{3}b^{4}", "explanation": "Drop the multiplication signs.", "diagram": null },
        { "stepNumber": 8, "description": "Check with a quick sanity look.", "workingLatex": "5a^{3}b^{4} \\times 4a^{2}b^{2} = 20a^{5}b^{6}", "explanation": "Multiplying back recovers the numerator, confirming the answer.", "diagram": null },
        { "stepNumber": 9, "description": "State the answer.", "workingLatex": "5a^{3}b^{4}", "explanation": "So $\\dfrac{20a^5b^6}{4a^2b^2} = 5a^3b^4$.", "diagram": null }
      ],
      "finalAnswer": "$5a^{3}b^{4}$"
    }
  },
  {
    "id": "gcse.algebra.index-laws.q027",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Index laws in algebra",
    "subtopicId": "gcse.algebra.index-laws",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "expression",
    "tags": ["index laws", "power law", "coefficients", "two variables"],
    "questionText": "Simplify $(2a^{3}b)^{4}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Apply the power to each factor.", "workingLatex": "(2a^{3}b)^{4} = 2^{4}(a^{3})^{4}(b)^{4}", "explanation": "A power outside a bracket applies to every factor inside, including the number.", "diagram": null },
        { "stepNumber": 2, "description": "Evaluate the number.", "workingLatex": "2^{4} = 16", "explanation": "The coefficient $2$ is raised to the fourth power.", "diagram": null },
        { "stepNumber": 3, "description": "Recall the power law.", "workingLatex": "(a^{m})^{n} = a^{mn}", "explanation": "A power of a power multiplies the indices.", "diagram": null },
        { "stepNumber": 4, "description": "Multiply the $a$ indices.", "workingLatex": "3 \\times 4 = 12", "explanation": "Gives $a^{12}$.", "diagram": null },
        { "stepNumber": 5, "description": "Deal with the $b$.", "workingLatex": "(b^{1})^{4} = b^{4}", "explanation": "The lone $b$ has index $1$; multiplied by $4$ gives $b^4$.", "diagram": null },
        { "stepNumber": 6, "description": "Combine the pieces.", "workingLatex": "16 \\times a^{12} \\times b^{4}", "explanation": "Bring the number and powers together.", "diagram": null },
        { "stepNumber": 7, "description": "Write compactly.", "workingLatex": "16a^{12}b^{4}", "explanation": "Drop the multiplication signs.", "diagram": null },
        { "stepNumber": 8, "description": "Common error check.", "workingLatex": "2^{4} \\neq 2 \\times 4", "explanation": "Remember the coefficient is raised to the power, not multiplied by it.", "diagram": null },
        { "stepNumber": 9, "description": "State the answer.", "workingLatex": "16a^{12}b^{4}", "explanation": "So $(2a^3b)^4 = 16a^{12}b^4$.", "diagram": null }
      ],
      "finalAnswer": "$16a^{12}b^{4}$"
    }
  },
  {
    "id": "gcse.algebra.index-laws.q028",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Index laws in algebra",
    "subtopicId": "gcse.algebra.index-laws",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "expression",
    "tags": ["index laws", "mixed laws", "simplify"],
    "questionText": "Simplify $\\dfrac{x^{5} \\times x^{3}}{x^{2} \\times x^{4}}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Simplify the numerator.", "workingLatex": "x^{5} \\times x^{3} = x^{8}", "explanation": "Add the indices on top: $5+3=8$.", "diagram": null },
        { "stepNumber": 2, "description": "Simplify the denominator.", "workingLatex": "x^{2} \\times x^{4} = x^{6}", "explanation": "Add the indices on the bottom: $2+4=6$.", "diagram": null },
        { "stepNumber": 3, "description": "Rewrite the fraction.", "workingLatex": "\\frac{x^{8}}{x^{6}}", "explanation": "Now it is a single division of powers.", "diagram": null },
        { "stepNumber": 4, "description": "Recall the division law.", "workingLatex": "a^{m} \\div a^{n} = a^{m-n}", "explanation": "Dividing subtracts the indices.", "diagram": null },
        { "stepNumber": 5, "description": "Subtract the indices.", "workingLatex": "8 - 6 = 2", "explanation": "Gives the final power.", "diagram": null },
        { "stepNumber": 6, "description": "Write the result.", "workingLatex": "x^{2}", "explanation": "The base stays and the index becomes $2$.", "diagram": null },
        { "stepNumber": 7, "description": "Sanity check.", "workingLatex": "\\frac{x^{8}}{x^{6}} = x^{2}", "explanation": "Six $x$'s cancel from the eight, leaving two.", "diagram": null },
        { "stepNumber": 8, "description": "State the answer.", "workingLatex": "x^{2}", "explanation": "So the expression simplifies to $x^2$.", "diagram": null }
      ],
      "finalAnswer": "$x^{2}$"
    }
  },
  {
    "id": "gcse.algebra.index-laws.q029",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Index laws in algebra",
    "subtopicId": "gcse.algebra.index-laws",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "expression",
    "tags": ["index laws", "negative index", "division law"],
    "questionText": "Simplify $\\dfrac{x^{2}}{x^{5}}$, giving your answer with a positive index.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall the division law.", "workingLatex": "a^{m} \\div a^{n} = a^{m-n}", "explanation": "Dividing same-base powers subtracts the indices.", "diagram": null },
        { "stepNumber": 2, "description": "Subtract the indices.", "workingLatex": "2 - 5 = -3", "explanation": "Here the top index is smaller, so the result is negative.", "diagram": null },
        { "stepNumber": 3, "description": "Write with a negative index.", "workingLatex": "x^{-3}", "explanation": "The division law gives $x^{-3}$.", "diagram": null },
        { "stepNumber": 4, "description": "Recall the negative index rule.", "workingLatex": "a^{-n} = \\frac{1}{a^{n}}", "explanation": "A negative index means the reciprocal of the positive power.", "diagram": null },
        { "stepNumber": 5, "description": "Apply the rule.", "workingLatex": "x^{-3} = \\frac{1}{x^{3}}", "explanation": "Rewrite with a positive index in the denominator.", "diagram": null },
        { "stepNumber": 6, "description": "Confirm by cancelling.", "workingLatex": "\\frac{xx}{xxxxx} = \\frac{1}{x^{3}}", "explanation": "Two $x$'s cancel, leaving three in the denominator.", "diagram": null },
        { "stepNumber": 7, "description": "State the answer.", "workingLatex": "\\frac{1}{x^{3}}", "explanation": "So $\\dfrac{x^2}{x^5} = \\dfrac{1}{x^3}$.", "diagram": null }
      ],
      "finalAnswer": "$\\dfrac{1}{x^{3}}$"
    }
  },
  {
    "id": "gcse.algebra.index-laws.q030",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Index laws in algebra",
    "subtopicId": "gcse.algebra.index-laws",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "expression",
    "tags": ["index laws", "mixed laws", "coefficients", "two variables"],
    "questionText": "Simplify $\\dfrac{6x^{4}y^{5}}{2x^{4}y}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Split into parts.", "workingLatex": "\\frac{6}{2} \\times \\frac{x^{4}}{x^{4}} \\times \\frac{y^{5}}{y}", "explanation": "Separate the numbers, the $x$ powers and the $y$ powers.", "diagram": null },
        { "stepNumber": 2, "description": "Divide the coefficients.", "workingLatex": "\\frac{6}{2} = 3", "explanation": "The numbers divide to give $3$.", "diagram": null },
        { "stepNumber": 3, "description": "Subtract the $x$ indices.", "workingLatex": "4 - 4 = 0", "explanation": "The $x$ powers are equal, so the difference is $0$.", "diagram": null },
        { "stepNumber": 4, "description": "Apply the zero index rule.", "workingLatex": "x^{0} = 1", "explanation": "So the $x$ terms cancel entirely.", "diagram": null },
        { "stepNumber": 5, "description": "Write hidden index for $y$.", "workingLatex": "y = y^{1}", "explanation": "The lone $y$ has index $1$.", "diagram": null },
        { "stepNumber": 6, "description": "Subtract the $y$ indices.", "workingLatex": "5 - 1 = 4", "explanation": "Gives $y^4$.", "diagram": null },
        { "stepNumber": 7, "description": "Combine the pieces.", "workingLatex": "3 \\times 1 \\times y^{4}", "explanation": "Bring everything together; the $x$ part is just $1$.", "diagram": null },
        { "stepNumber": 8, "description": "Write compactly.", "workingLatex": "3y^{4}", "explanation": "Tidy up the expression.", "diagram": null },
        { "stepNumber": 9, "description": "State the answer.", "workingLatex": "3y^{4}", "explanation": "So $\\dfrac{6x^4y^5}{2x^4y} = 3y^4$.", "diagram": null }
      ],
      "finalAnswer": "$3y^{4}$"
    }
  },
  {
    "id": "gcse.algebra.index-laws.q031",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Index laws in algebra",
    "subtopicId": "gcse.algebra.index-laws",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "expression",
    "tags": ["index laws", "power law", "multiplication law"],
    "questionText": "Simplify $(x^{3})^{2} \\times x^{4}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Deal with the bracket first.", "workingLatex": "(x^{3})^{2}", "explanation": "Work out the power of a power before multiplying.", "diagram": null },
        { "stepNumber": 2, "description": "Recall the power law.", "workingLatex": "(a^{m})^{n} = a^{mn}", "explanation": "A power of a power multiplies the indices.", "diagram": null },
        { "stepNumber": 3, "description": "Multiply the indices.", "workingLatex": "3 \\times 2 = 6", "explanation": "So $(x^3)^2 = x^6$.", "diagram": null },
        { "stepNumber": 4, "description": "Rewrite the expression.", "workingLatex": "x^{6} \\times x^{4}", "explanation": "Now it is a simple product of powers.", "diagram": null },
        { "stepNumber": 5, "description": "Recall the multiplication law.", "workingLatex": "a^{m} \\times a^{n} = a^{m+n}", "explanation": "Multiplying same-base powers adds the indices.", "diagram": null },
        { "stepNumber": 6, "description": "Add the indices.", "workingLatex": "6 + 4 = 10", "explanation": "Gives the final power.", "diagram": null },
        { "stepNumber": 7, "description": "Write the result.", "workingLatex": "x^{10}", "explanation": "The base stays and the index becomes $10$.", "diagram": null },
        { "stepNumber": 8, "description": "State the answer.", "workingLatex": "x^{10}", "explanation": "So $(x^3)^2 \\times x^4 = x^{10}$.", "diagram": null }
      ],
      "finalAnswer": "$x^{10}$"
    }
  },
  {
    "id": "gcse.algebra.index-laws.q032",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Index laws in algebra",
    "subtopicId": "gcse.algebra.index-laws",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "expression",
    "tags": ["index laws", "power law", "division law"],
    "questionText": "Simplify $\\dfrac{(x^{4})^{3}}{x^{5}}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Deal with the bracket first.", "workingLatex": "(x^{4})^{3}", "explanation": "Simplify the power of a power before dividing.", "diagram": null },
        { "stepNumber": 2, "description": "Recall the power law.", "workingLatex": "(a^{m})^{n} = a^{mn}", "explanation": "A power of a power multiplies the indices.", "diagram": null },
        { "stepNumber": 3, "description": "Multiply the indices.", "workingLatex": "4 \\times 3 = 12", "explanation": "So $(x^4)^3 = x^{12}$.", "diagram": null },
        { "stepNumber": 4, "description": "Rewrite the fraction.", "workingLatex": "\\frac{x^{12}}{x^{5}}", "explanation": "Now it is a single division.", "diagram": null },
        { "stepNumber": 5, "description": "Recall the division law.", "workingLatex": "a^{m} \\div a^{n} = a^{m-n}", "explanation": "Dividing subtracts the indices.", "diagram": null },
        { "stepNumber": 6, "description": "Subtract the indices.", "workingLatex": "12 - 5 = 7", "explanation": "Gives the final power.", "diagram": null },
        { "stepNumber": 7, "description": "Write the result.", "workingLatex": "x^{7}", "explanation": "The base stays and the index becomes $7$.", "diagram": null },
        { "stepNumber": 8, "description": "Recap the order.", "workingLatex": "\\text{power} \\to \\text{divide}", "explanation": "We simplified the bracket first, then applied the division law.", "diagram": null },
        { "stepNumber": 9, "description": "State the answer.", "workingLatex": "x^{7}", "explanation": "So $\\dfrac{(x^4)^3}{x^5} = x^7$.", "diagram": null }
      ],
      "finalAnswer": "$x^{7}$"
    }
  },
  {
    "id": "gcse.algebra.index-laws.q033",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Index laws in algebra",
    "subtopicId": "gcse.algebra.index-laws",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "expression",
    "tags": ["index laws", "power law", "coefficients", "two variables"],
    "questionText": "Simplify $(3x^{2}y^{3})^{3}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Apply the power to each factor.", "workingLatex": "3^{3}(x^{2})^{3}(y^{3})^{3}", "explanation": "The outer power applies to the number and to each variable.", "diagram": null },
        { "stepNumber": 2, "description": "Evaluate the number.", "workingLatex": "3^{3} = 27", "explanation": "The coefficient $3$ is cubed.", "diagram": null },
        { "stepNumber": 3, "description": "Recall the power law.", "workingLatex": "(a^{m})^{n} = a^{mn}", "explanation": "A power of a power multiplies the indices.", "diagram": null },
        { "stepNumber": 4, "description": "Multiply the $x$ indices.", "workingLatex": "2 \\times 3 = 6", "explanation": "Gives $x^6$.", "diagram": null },
        { "stepNumber": 5, "description": "Multiply the $y$ indices.", "workingLatex": "3 \\times 3 = 9", "explanation": "Gives $y^9$.", "diagram": null },
        { "stepNumber": 6, "description": "Combine the pieces.", "workingLatex": "27 \\times x^{6} \\times y^{9}", "explanation": "Bring the number and powers together.", "diagram": null },
        { "stepNumber": 7, "description": "Write compactly.", "workingLatex": "27x^{6}y^{9}", "explanation": "Drop the multiplication signs.", "diagram": null },
        { "stepNumber": 8, "description": "Common error check.", "workingLatex": "3^{3} = 27 \\neq 9", "explanation": "Cube the coefficient fully rather than squaring it.", "diagram": null },
        { "stepNumber": 9, "description": "State the answer.", "workingLatex": "27x^{6}y^{9}", "explanation": "So $(3x^2y^3)^3 = 27x^6y^9$.", "diagram": null }
      ],
      "finalAnswer": "$27x^{6}y^{9}$"
    }
  },
  {
    "id": "gcse.algebra.index-laws.q034",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Index laws in algebra",
    "subtopicId": "gcse.algebra.index-laws",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "expression",
    "tags": ["index laws", "mixed laws", "coefficients"],
    "questionText": "Simplify $\\dfrac{4x^{3} \\times 6x^{5}}{8x^{2}}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Multiply the numbers on top.", "workingLatex": "4 \\times 6 = 24", "explanation": "Combine the coefficients in the numerator.", "diagram": null },
        { "stepNumber": 2, "description": "Multiply the powers on top.", "workingLatex": "x^{3} \\times x^{5} = x^{8}", "explanation": "Add the indices: $3+5=8$.", "diagram": null },
        { "stepNumber": 3, "description": "Rewrite the fraction.", "workingLatex": "\\frac{24x^{8}}{8x^{2}}", "explanation": "The numerator is now a single term.", "diagram": null },
        { "stepNumber": 4, "description": "Divide the coefficients.", "workingLatex": "\\frac{24}{8} = 3", "explanation": "The numbers divide to give $3$.", "diagram": null },
        { "stepNumber": 5, "description": "Recall the division law.", "workingLatex": "a^{m} \\div a^{n} = a^{m-n}", "explanation": "Dividing subtracts the indices.", "diagram": null },
        { "stepNumber": 6, "description": "Subtract the indices.", "workingLatex": "8 - 2 = 6", "explanation": "Gives the power of $x$.", "diagram": null },
        { "stepNumber": 7, "description": "Combine the pieces.", "workingLatex": "3 \\times x^{6}", "explanation": "Put the coefficient in front of the power.", "diagram": null },
        { "stepNumber": 8, "description": "Write compactly.", "workingLatex": "3x^{6}", "explanation": "Tidy the expression.", "diagram": null },
        { "stepNumber": 9, "description": "State the answer.", "workingLatex": "3x^{6}", "explanation": "So the expression simplifies to $3x^6$.", "diagram": null }
      ],
      "finalAnswer": "$3x^{6}$"
    }
  },
  {
    "id": "gcse.algebra.index-laws.q035",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Index laws in algebra",
    "subtopicId": "gcse.algebra.index-laws",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "expression",
    "tags": ["index laws", "negative index", "coefficients"],
    "questionText": "Simplify $\\dfrac{10x^{2}}{5x^{6}}$, giving your answer with a positive index.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Split into parts.", "workingLatex": "\\frac{10}{5} \\times \\frac{x^{2}}{x^{6}}", "explanation": "Separate the numbers from the powers.", "diagram": null },
        { "stepNumber": 2, "description": "Divide the coefficients.", "workingLatex": "\\frac{10}{5} = 2", "explanation": "The numbers give $2$.", "diagram": null },
        { "stepNumber": 3, "description": "Recall the division law.", "workingLatex": "a^{m} \\div a^{n} = a^{m-n}", "explanation": "Dividing subtracts the indices.", "diagram": null },
        { "stepNumber": 4, "description": "Subtract the indices.", "workingLatex": "2 - 6 = -4", "explanation": "The top power is smaller, so the index is negative.", "diagram": null },
        { "stepNumber": 5, "description": "Write the intermediate form.", "workingLatex": "2x^{-4}", "explanation": "Combine the coefficient with the negative power.", "diagram": null },
        { "stepNumber": 6, "description": "Recall the negative index rule.", "workingLatex": "a^{-n} = \\frac{1}{a^{n}}", "explanation": "A negative index becomes a positive power in the denominator.", "diagram": null },
        { "stepNumber": 7, "description": "Apply the rule.", "workingLatex": "2x^{-4} = \\frac{2}{x^{4}}", "explanation": "The coefficient $2$ stays on top; only the power moves down.", "diagram": null },
        { "stepNumber": 8, "description": "State the answer.", "workingLatex": "\\frac{2}{x^{4}}", "explanation": "So $\\dfrac{10x^2}{5x^6} = \\dfrac{2}{x^4}$.", "diagram": null }
      ],
      "finalAnswer": "$\\dfrac{2}{x^{4}}$"
    }
  },
  {
    "id": "gcse.algebra.index-laws.q036",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Index laws in algebra",
    "subtopicId": "gcse.algebra.index-laws",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "expression",
    "tags": ["index laws", "power law", "division law", "two variables"],
    "questionText": "Simplify $\\dfrac{(2a^{2}b)^{3}}{4ab^{2}}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Expand the bracket on top.", "workingLatex": "(2a^{2}b)^{3} = 2^{3}(a^{2})^{3}b^{3}", "explanation": "The power applies to the number and each variable.", "diagram": null },
        { "stepNumber": 2, "description": "Evaluate and multiply indices.", "workingLatex": "8a^{6}b^{3}", "explanation": "$2^3=8$, $(a^2)^3=a^6$, and $b^3$ stays.", "diagram": null },
        { "stepNumber": 3, "description": "Rewrite the fraction.", "workingLatex": "\\frac{8a^{6}b^{3}}{4ab^{2}}", "explanation": "The numerator is now a single term.", "diagram": null },
        { "stepNumber": 4, "description": "Divide the coefficients.", "workingLatex": "\\frac{8}{4} = 2", "explanation": "The numbers give $2$.", "diagram": null },
        { "stepNumber": 5, "description": "Subtract the $a$ indices.", "workingLatex": "6 - 1 = 5", "explanation": "Gives $a^5$ (the lone $a$ has index $1$).", "diagram": null },
        { "stepNumber": 6, "description": "Subtract the $b$ indices.", "workingLatex": "3 - 2 = 1", "explanation": "Gives $b^1 = b$.", "diagram": null },
        { "stepNumber": 7, "description": "Combine the pieces.", "workingLatex": "2 \\times a^{5} \\times b", "explanation": "Bring the coefficient and powers together.", "diagram": null },
        { "stepNumber": 8, "description": "Write compactly.", "workingLatex": "2a^{5}b", "explanation": "Tidy the expression.", "diagram": null },
        { "stepNumber": 9, "description": "State the answer.", "workingLatex": "2a^{5}b", "explanation": "So the expression simplifies to $2a^5b$.", "diagram": null }
      ],
      "finalAnswer": "$2a^{5}b$"
    }
  },
  {
    "id": "gcse.algebra.index-laws.q037",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Index laws in algebra",
    "subtopicId": "gcse.algebra.index-laws",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "value",
    "tags": ["index laws", "solve", "equation"],
    "questionText": "Given that $x^{n} \\times x^{4} = x^{9}$, find the value of $n$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Apply the multiplication law.", "workingLatex": "x^{n} \\times x^{4} = x^{n+4}", "explanation": "Multiplying same-base powers adds the indices.", "diagram": null },
        { "stepNumber": 2, "description": "Match the two sides.", "workingLatex": "x^{n+4} = x^{9}", "explanation": "Both sides have base $x$, so the indices must be equal.", "diagram": null },
        { "stepNumber": 3, "description": "Form an equation in $n$.", "workingLatex": "n + 4 = 9", "explanation": "Equate the indices.", "diagram": null },
        { "stepNumber": 4, "description": "Subtract $4$ from both sides.", "workingLatex": "n = 9 - 4", "explanation": "Undo the $+4$ to isolate $n$.", "diagram": null },
        { "stepNumber": 5, "description": "Work it out.", "workingLatex": "n = 5", "explanation": "The unknown index is $5$.", "diagram": null },
        { "stepNumber": 6, "description": "Check the answer.", "workingLatex": "x^{5} \\times x^{4} = x^{9}", "explanation": "Substituting back gives the correct index, confirming $n=5$.", "diagram": null },
        { "stepNumber": 7, "description": "State the answer.", "workingLatex": "n = 5", "explanation": "So the value of $n$ is $5$.", "diagram": null }
      ],
      "finalAnswer": "$n = 5$"
    }
  },
  {
    "id": "gcse.algebra.index-laws.q038",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Index laws in algebra",
    "subtopicId": "gcse.algebra.index-laws",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "value",
    "tags": ["index laws", "solve", "power law"],
    "questionText": "Given that $(x^{n})^{3} = x^{12}$, find the value of $n$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Apply the power law.", "workingLatex": "(x^{n})^{3} = x^{3n}", "explanation": "A power of a power multiplies the indices.", "diagram": null },
        { "stepNumber": 2, "description": "Match the two sides.", "workingLatex": "x^{3n} = x^{12}", "explanation": "Both sides share base $x$, so the indices are equal.", "diagram": null },
        { "stepNumber": 3, "description": "Form an equation.", "workingLatex": "3n = 12", "explanation": "Equate the indices.", "diagram": null },
        { "stepNumber": 4, "description": "Divide both sides by $3$.", "workingLatex": "n = \\frac{12}{3}", "explanation": "Undo the multiplication by $3$.", "diagram": null },
        { "stepNumber": 5, "description": "Work it out.", "workingLatex": "n = 4", "explanation": "The unknown index is $4$.", "diagram": null },
        { "stepNumber": 6, "description": "Check the answer.", "workingLatex": "(x^{4})^{3} = x^{12}", "explanation": "Substituting back confirms $n=4$.", "diagram": null },
        { "stepNumber": 7, "description": "State the answer.", "workingLatex": "n = 4", "explanation": "So the value of $n$ is $4$.", "diagram": null }
      ],
      "finalAnswer": "$n = 4$"
    }
  },
  {
    "id": "gcse.algebra.index-laws.q039",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Index laws in algebra",
    "subtopicId": "gcse.algebra.index-laws",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "expression",
    "tags": ["index laws", "mixed laws", "two variables"],
    "questionText": "Simplify $\\dfrac{a^{5}b^{2} \\times a^{2}b^{3}}{a^{3}b}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Simplify the $a$ powers on top.", "workingLatex": "a^{5} \\times a^{2} = a^{7}", "explanation": "Add the indices: $5+2=7$.", "diagram": null },
        { "stepNumber": 2, "description": "Simplify the $b$ powers on top.", "workingLatex": "b^{2} \\times b^{3} = b^{5}", "explanation": "Add the indices: $2+3=5$.", "diagram": null },
        { "stepNumber": 3, "description": "Rewrite the fraction.", "workingLatex": "\\frac{a^{7}b^{5}}{a^{3}b}", "explanation": "The numerator is now a single term.", "diagram": null },
        { "stepNumber": 4, "description": "Recall the division law.", "workingLatex": "a^{m} \\div a^{n} = a^{m-n}", "explanation": "Dividing subtracts the indices.", "diagram": null },
        { "stepNumber": 5, "description": "Subtract the $a$ indices.", "workingLatex": "7 - 3 = 4", "explanation": "Gives $a^4$.", "diagram": null },
        { "stepNumber": 6, "description": "Subtract the $b$ indices.", "workingLatex": "5 - 1 = 4", "explanation": "Gives $b^4$ (the lone $b$ has index $1$).", "diagram": null },
        { "stepNumber": 7, "description": "Combine the pieces.", "workingLatex": "a^{4}b^{4}", "explanation": "Write the two results side by side.", "diagram": null },
        { "stepNumber": 8, "description": "State the answer.", "workingLatex": "a^{4}b^{4}", "explanation": "So the expression simplifies to $a^4b^4$.", "diagram": null }
      ],
      "finalAnswer": "$a^{4}b^{4}$"
    }
  },
  {
    "id": "gcse.algebra.index-laws.q040",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Index laws in algebra",
    "subtopicId": "gcse.algebra.index-laws",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "expression",
    "tags": ["index laws", "power law", "multiplication law", "coefficients"],
    "questionText": "Simplify $2x \\times (3x^{2})^{2}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Expand the bracket first.", "workingLatex": "(3x^{2})^{2} = 3^{2}(x^{2})^{2}", "explanation": "Powers before products; the power applies to number and variable.", "diagram": null },
        { "stepNumber": 2, "description": "Evaluate the number.", "workingLatex": "3^{2} = 9", "explanation": "The coefficient $3$ is squared.", "diagram": null },
        { "stepNumber": 3, "description": "Multiply the $x$ indices.", "workingLatex": "(x^{2})^{2} = x^{4}", "explanation": "A power of a power multiplies: $2 \\times 2 = 4$.", "diagram": null },
        { "stepNumber": 4, "description": "Write the bracket result.", "workingLatex": "9x^{4}", "explanation": "So $(3x^2)^2 = 9x^4$.", "diagram": null },
        { "stepNumber": 5, "description": "Multiply by the front term.", "workingLatex": "2x \\times 9x^{4}", "explanation": "Now combine with $2x$.", "diagram": null },
        { "stepNumber": 6, "description": "Multiply the coefficients.", "workingLatex": "2 \\times 9 = 18", "explanation": "The numbers give $18$.", "diagram": null },
        { "stepNumber": 7, "description": "Add the $x$ indices.", "workingLatex": "1 + 4 = 5", "explanation": "The lone $x$ has index $1$; adding gives $x^5$.", "diagram": null },
        { "stepNumber": 8, "description": "Combine.", "workingLatex": "18x^{5}", "explanation": "Put the coefficient in front of the power.", "diagram": null },
        { "stepNumber": 9, "description": "State the answer.", "workingLatex": "18x^{5}", "explanation": "So $2x \\times (3x^2)^2 = 18x^5$.", "diagram": null }
      ],
      "finalAnswer": "$18x^{5}$"
    }
  },
  {
    "id": "gcse.algebra.index-laws.q041",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Index laws in algebra",
    "subtopicId": "gcse.algebra.index-laws",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "expression",
    "tags": ["index laws", "division law", "coefficients", "two variables"],
    "questionText": "Simplify $\\dfrac{15a^{4}b^{3}}{5a^{4}b^{3}}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Split into parts.", "workingLatex": "\\frac{15}{5} \\times \\frac{a^{4}}{a^{4}} \\times \\frac{b^{3}}{b^{3}}", "explanation": "Separate numbers, $a$ powers and $b$ powers.", "diagram": null },
        { "stepNumber": 2, "description": "Divide the coefficients.", "workingLatex": "\\frac{15}{5} = 3", "explanation": "The numbers give $3$.", "diagram": null },
        { "stepNumber": 3, "description": "Subtract the $a$ indices.", "workingLatex": "4 - 4 = 0", "explanation": "Equal powers give a difference of $0$.", "diagram": null },
        { "stepNumber": 4, "description": "Subtract the $b$ indices.", "workingLatex": "3 - 3 = 0", "explanation": "Equal powers give a difference of $0$.", "diagram": null },
        { "stepNumber": 5, "description": "Apply the zero index rule.", "workingLatex": "a^{0} = 1, \\; b^{0} = 1", "explanation": "Both variable parts become $1$.", "diagram": null },
        { "stepNumber": 6, "description": "Combine.", "workingLatex": "3 \\times 1 \\times 1", "explanation": "Only the coefficient remains.", "diagram": null },
        { "stepNumber": 7, "description": "Write the result.", "workingLatex": "3", "explanation": "The variables cancel completely.", "diagram": null },
        { "stepNumber": 8, "description": "State the answer.", "workingLatex": "3", "explanation": "So $\\dfrac{15a^4b^3}{5a^4b^3} = 3$.", "diagram": null }
      ],
      "finalAnswer": "$3$"
    }
  },
  {
    "id": "gcse.algebra.index-laws.q042",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Index laws in algebra",
    "subtopicId": "gcse.algebra.index-laws",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "expression",
    "tags": ["index laws", "negative index", "power law"],
    "questionText": "Simplify $(x^{-2})^{3}$, giving your answer with a positive index.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall the power law.", "workingLatex": "(a^{m})^{n} = a^{mn}", "explanation": "A power of a power multiplies the indices, even negative ones.", "diagram": null },
        { "stepNumber": 2, "description": "Multiply the indices.", "workingLatex": "-2 \\times 3 = -6", "explanation": "Multiplying a negative by a positive gives a negative.", "diagram": null },
        { "stepNumber": 3, "description": "Write the intermediate form.", "workingLatex": "x^{-6}", "explanation": "The power law gives $x^{-6}$.", "diagram": null },
        { "stepNumber": 4, "description": "Recall the negative index rule.", "workingLatex": "a^{-n} = \\frac{1}{a^{n}}", "explanation": "A negative index means the reciprocal of the positive power.", "diagram": null },
        { "stepNumber": 5, "description": "Apply the rule.", "workingLatex": "x^{-6} = \\frac{1}{x^{6}}", "explanation": "Move the power to the denominator to make the index positive.", "diagram": null },
        { "stepNumber": 6, "description": "State the answer.", "workingLatex": "\\frac{1}{x^{6}}", "explanation": "So $(x^{-2})^3 = \\dfrac{1}{x^6}$.", "diagram": null }
      ],
      "finalAnswer": "$\\dfrac{1}{x^{6}}$"
    }
  },
  {
    "id": "gcse.algebra.index-laws.q043",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Index laws in algebra",
    "subtopicId": "gcse.algebra.index-laws",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "expression",
    "tags": ["index laws", "mixed laws", "coefficients", "two variables"],
    "questionText": "Simplify $\\dfrac{12x^{5}y^{2} \\times 2x y^{4}}{6x^{4}y^{3}}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Multiply the numbers on top.", "workingLatex": "12 \\times 2 = 24", "explanation": "Combine the coefficients in the numerator.", "diagram": null },
        { "stepNumber": 2, "description": "Multiply the $x$ powers on top.", "workingLatex": "x^{5} \\times x = x^{6}", "explanation": "Add the indices: $5+1=6$.", "diagram": null },
        { "stepNumber": 3, "description": "Multiply the $y$ powers on top.", "workingLatex": "y^{2} \\times y^{4} = y^{6}", "explanation": "Add the indices: $2+4=6$.", "diagram": null },
        { "stepNumber": 4, "description": "Rewrite the fraction.", "workingLatex": "\\frac{24x^{6}y^{6}}{6x^{4}y^{3}}", "explanation": "The numerator is now one term.", "diagram": null },
        { "stepNumber": 5, "description": "Divide the coefficients.", "workingLatex": "\\frac{24}{6} = 4", "explanation": "The numbers give $4$.", "diagram": null },
        { "stepNumber": 6, "description": "Subtract the $x$ indices.", "workingLatex": "6 - 4 = 2", "explanation": "Gives $x^2$.", "diagram": null },
        { "stepNumber": 7, "description": "Subtract the $y$ indices.", "workingLatex": "6 - 3 = 3", "explanation": "Gives $y^3$.", "diagram": null },
        { "stepNumber": 8, "description": "Combine the pieces.", "workingLatex": "4x^{2}y^{3}", "explanation": "Bring the coefficient and powers together.", "diagram": null },
        { "stepNumber": 9, "description": "State the answer.", "workingLatex": "4x^{2}y^{3}", "explanation": "So the expression simplifies to $4x^2y^3$.", "diagram": null }
      ],
      "finalAnswer": "$4x^{2}y^{3}$"
    }
  },
  {
    "id": "gcse.algebra.index-laws.q044",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Index laws in algebra",
    "subtopicId": "gcse.algebra.index-laws",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "expression",
    "tags": ["index laws", "power law", "multiplication law"],
    "questionText": "Simplify $(x^{2})^{3} \\times (x^{3})^{2}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Simplify the first bracket.", "workingLatex": "(x^{2})^{3} = x^{6}", "explanation": "Multiply the indices: $2 \\times 3 = 6$.", "diagram": null },
        { "stepNumber": 2, "description": "Simplify the second bracket.", "workingLatex": "(x^{3})^{2} = x^{6}", "explanation": "Multiply the indices: $3 \\times 2 = 6$.", "diagram": null },
        { "stepNumber": 3, "description": "Rewrite the expression.", "workingLatex": "x^{6} \\times x^{6}", "explanation": "Now it is a product of two powers.", "diagram": null },
        { "stepNumber": 4, "description": "Recall the multiplication law.", "workingLatex": "a^{m} \\times a^{n} = a^{m+n}", "explanation": "Multiplying same-base powers adds the indices.", "diagram": null },
        { "stepNumber": 5, "description": "Add the indices.", "workingLatex": "6 + 6 = 12", "explanation": "Gives the final power.", "diagram": null },
        { "stepNumber": 6, "description": "Write the result.", "workingLatex": "x^{12}", "explanation": "The base stays and the index becomes $12$.", "diagram": null },
        { "stepNumber": 7, "description": "Recap the method.", "workingLatex": "\\text{powers first, then multiply}", "explanation": "We simplified each bracket before combining.", "diagram": null },
        { "stepNumber": 8, "description": "State the answer.", "workingLatex": "x^{12}", "explanation": "So $(x^2)^3 \\times (x^3)^2 = x^{12}$.", "diagram": null }
      ],
      "finalAnswer": "$x^{12}$"
    }
  },
  {
    "id": "gcse.algebra.index-laws.q045",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Index laws in algebra",
    "subtopicId": "gcse.algebra.index-laws",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "value",
    "tags": ["index laws", "solve", "division law"],
    "questionText": "Given that $\\dfrac{x^{10}}{x^{n}} = x^{6}$, find the value of $n$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Apply the division law.", "workingLatex": "\\frac{x^{10}}{x^{n}} = x^{10-n}", "explanation": "Dividing same-base powers subtracts the indices.", "diagram": null },
        { "stepNumber": 2, "description": "Match the two sides.", "workingLatex": "x^{10-n} = x^{6}", "explanation": "Both sides share base $x$, so the indices are equal.", "diagram": null },
        { "stepNumber": 3, "description": "Form an equation.", "workingLatex": "10 - n = 6", "explanation": "Equate the indices.", "diagram": null },
        { "stepNumber": 4, "description": "Rearrange for $n$.", "workingLatex": "n = 10 - 6", "explanation": "Move terms to isolate $n$.", "diagram": null },
        { "stepNumber": 5, "description": "Work it out.", "workingLatex": "n = 4", "explanation": "The unknown index is $4$.", "diagram": null },
        { "stepNumber": 6, "description": "Check the answer.", "workingLatex": "\\frac{x^{10}}{x^{4}} = x^{6}", "explanation": "Substituting back confirms $n=4$.", "diagram": null },
        { "stepNumber": 7, "description": "State the answer.", "workingLatex": "n = 4", "explanation": "So the value of $n$ is $4$.", "diagram": null }
      ],
      "finalAnswer": "$n = 4$"
    }
  },
  {
    "id": "gcse.algebra.index-laws.q046",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Index laws in algebra",
    "subtopicId": "gcse.algebra.index-laws",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "expression",
    "tags": ["index laws", "power law", "division law", "two variables"],
    "questionText": "Simplify $\\dfrac{(x^{3}y^{2})^{2}}{x^{2}y}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Expand the bracket on top.", "workingLatex": "(x^{3}y^{2})^{2} = (x^{3})^{2}(y^{2})^{2}", "explanation": "The power applies to each variable inside.", "diagram": null },
        { "stepNumber": 2, "description": "Multiply the indices.", "workingLatex": "x^{6}y^{4}", "explanation": "$3 \\times 2 = 6$ and $2 \\times 2 = 4$.", "diagram": null },
        { "stepNumber": 3, "description": "Rewrite the fraction.", "workingLatex": "\\frac{x^{6}y^{4}}{x^{2}y}", "explanation": "The numerator is now a single term.", "diagram": null },
        { "stepNumber": 4, "description": "Recall the division law.", "workingLatex": "a^{m} \\div a^{n} = a^{m-n}", "explanation": "Dividing subtracts the indices.", "diagram": null },
        { "stepNumber": 5, "description": "Subtract the $x$ indices.", "workingLatex": "6 - 2 = 4", "explanation": "Gives $x^4$.", "diagram": null },
        { "stepNumber": 6, "description": "Subtract the $y$ indices.", "workingLatex": "4 - 1 = 3", "explanation": "Gives $y^3$ (the lone $y$ has index $1$).", "diagram": null },
        { "stepNumber": 7, "description": "Combine the pieces.", "workingLatex": "x^{4}y^{3}", "explanation": "Write the two results side by side.", "diagram": null },
        { "stepNumber": 8, "description": "State the answer.", "workingLatex": "x^{4}y^{3}", "explanation": "So the expression simplifies to $x^4y^3$.", "diagram": null }
      ],
      "finalAnswer": "$x^{4}y^{3}$"
    }
  },
  {
    "id": "gcse.algebra.index-laws.q047",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Index laws in algebra",
    "subtopicId": "gcse.algebra.index-laws",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "expression",
    "tags": ["index laws", "negative index", "division law", "coefficients"],
    "questionText": "Simplify $\\dfrac{3x^{2}}{12x^{7}}$, giving your answer with a positive index.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Split into parts.", "workingLatex": "\\frac{3}{12} \\times \\frac{x^{2}}{x^{7}}", "explanation": "Separate the numbers from the powers.", "diagram": null },
        { "stepNumber": 2, "description": "Simplify the fraction of numbers.", "workingLatex": "\\frac{3}{12} = \\frac{1}{4}", "explanation": "Cancel by the common factor $3$.", "diagram": null },
        { "stepNumber": 3, "description": "Recall the division law.", "workingLatex": "a^{m} \\div a^{n} = a^{m-n}", "explanation": "Dividing subtracts the indices.", "diagram": null },
        { "stepNumber": 4, "description": "Subtract the indices.", "workingLatex": "2 - 7 = -5", "explanation": "The top power is smaller, giving a negative index.", "diagram": null },
        { "stepNumber": 5, "description": "Write the intermediate form.", "workingLatex": "\\frac{1}{4}x^{-5}", "explanation": "Combine the number fraction with the power.", "diagram": null },
        { "stepNumber": 6, "description": "Apply the negative index rule.", "workingLatex": "x^{-5} = \\frac{1}{x^{5}}", "explanation": "Move the power to the denominator.", "diagram": null },
        { "stepNumber": 7, "description": "Combine into one fraction.", "workingLatex": "\\frac{1}{4} \\times \\frac{1}{x^{5}} = \\frac{1}{4x^{5}}", "explanation": "Multiply the two fractions together.", "diagram": null },
        { "stepNumber": 8, "description": "State the answer.", "workingLatex": "\\frac{1}{4x^{5}}", "explanation": "So $\\dfrac{3x^2}{12x^7} = \\dfrac{1}{4x^5}$.", "diagram": null }
      ],
      "finalAnswer": "$\\dfrac{1}{4x^{5}}$"
    }
  },
  {
    "id": "gcse.algebra.index-laws.q048",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Index laws in algebra",
    "subtopicId": "gcse.algebra.index-laws",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "expression",
    "tags": ["index laws", "mixed laws", "coefficients"],
    "questionText": "Simplify $\\dfrac{(2x^{3})^{2} \\times 3x}{4x^{2}}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Expand the bracket.", "workingLatex": "(2x^{3})^{2} = 4x^{6}", "explanation": "Square the coefficient ($2^2=4$) and double the index ($3 \\times 2 = 6$).", "diagram": null },
        { "stepNumber": 2, "description": "Multiply the numerator terms.", "workingLatex": "4x^{6} \\times 3x", "explanation": "Now multiply by $3x$.", "diagram": null },
        { "stepNumber": 3, "description": "Multiply the coefficients.", "workingLatex": "4 \\times 3 = 12", "explanation": "The numbers give $12$.", "diagram": null },
        { "stepNumber": 4, "description": "Add the $x$ indices.", "workingLatex": "6 + 1 = 7", "explanation": "Gives $x^7$ on top.", "diagram": null },
        { "stepNumber": 5, "description": "Rewrite the fraction.", "workingLatex": "\\frac{12x^{7}}{4x^{2}}", "explanation": "The numerator is now one term.", "diagram": null },
        { "stepNumber": 6, "description": "Divide the coefficients.", "workingLatex": "\\frac{12}{4} = 3", "explanation": "The numbers give $3$.", "diagram": null },
        { "stepNumber": 7, "description": "Subtract the indices.", "workingLatex": "7 - 2 = 5", "explanation": "Gives the power of $x$.", "diagram": null },
        { "stepNumber": 8, "description": "Combine.", "workingLatex": "3x^{5}", "explanation": "Put the coefficient in front of the power.", "diagram": null },
        { "stepNumber": 9, "description": "State the answer.", "workingLatex": "3x^{5}", "explanation": "So the expression simplifies to $3x^5$.", "diagram": null }
      ],
      "finalAnswer": "$3x^{5}$"
    }
  },
  {
    "id": "gcse.algebra.index-laws.q049",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Index laws in algebra",
    "subtopicId": "gcse.algebra.index-laws",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "expression",
    "tags": ["index laws", "power law", "coefficients", "two variables"],
    "questionText": "Simplify $\\left(4x^{3}y^{2}\\right)^{2}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Apply the power to each factor.", "workingLatex": "4^{2}(x^{3})^{2}(y^{2})^{2}", "explanation": "The outer power applies to the number and each variable.", "diagram": null },
        { "stepNumber": 2, "description": "Square the coefficient.", "workingLatex": "4^{2} = 16", "explanation": "The number $4$ is squared.", "diagram": null },
        { "stepNumber": 3, "description": "Recall the power law.", "workingLatex": "(a^{m})^{n} = a^{mn}", "explanation": "A power of a power multiplies the indices.", "diagram": null },
        { "stepNumber": 4, "description": "Multiply the $x$ indices.", "workingLatex": "3 \\times 2 = 6", "explanation": "Gives $x^6$.", "diagram": null },
        { "stepNumber": 5, "description": "Multiply the $y$ indices.", "workingLatex": "2 \\times 2 = 4", "explanation": "Gives $y^4$.", "diagram": null },
        { "stepNumber": 6, "description": "Combine the pieces.", "workingLatex": "16 \\times x^{6} \\times y^{4}", "explanation": "Bring the number and powers together.", "diagram": null },
        { "stepNumber": 7, "description": "Write compactly.", "workingLatex": "16x^{6}y^{4}", "explanation": "Drop the multiplication signs.", "diagram": null },
        { "stepNumber": 8, "description": "State the answer.", "workingLatex": "16x^{6}y^{4}", "explanation": "So $(4x^3y^2)^2 = 16x^6y^4$.", "diagram": null }
      ],
      "finalAnswer": "$16x^{6}y^{4}$"
    }
  },
  {
    "id": "gcse.algebra.index-laws.q050",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Index laws in algebra",
    "subtopicId": "gcse.algebra.index-laws",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "expression",
    "tags": ["index laws", "mixed laws", "two variables"],
    "questionText": "Simplify $\\dfrac{a^{7}b^{3}}{a^{2}b^{3}} \\times a b$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Simplify the fraction first.", "workingLatex": "\\frac{a^{7}}{a^{2}} \\times \\frac{b^{3}}{b^{3}}", "explanation": "Split the fraction into the $a$ and $b$ parts.", "diagram": null },
        { "stepNumber": 2, "description": "Subtract the $a$ indices.", "workingLatex": "7 - 2 = 5", "explanation": "Gives $a^5$.", "diagram": null },
        { "stepNumber": 3, "description": "Subtract the $b$ indices.", "workingLatex": "3 - 3 = 0", "explanation": "Gives $b^0 = 1$, so the $b$ cancels.", "diagram": null },
        { "stepNumber": 4, "description": "Write the simplified fraction.", "workingLatex": "a^{5}", "explanation": "The fraction reduces to just $a^5$.", "diagram": null },
        { "stepNumber": 5, "description": "Multiply by $ab$.", "workingLatex": "a^{5} \\times ab", "explanation": "Now include the final product.", "diagram": null },
        { "stepNumber": 6, "description": "Add the $a$ indices.", "workingLatex": "5 + 1 = 6", "explanation": "Gives $a^6$.", "diagram": null },
        { "stepNumber": 7, "description": "Bring in the $b$.", "workingLatex": "a^{6}b", "explanation": "The single $b$ comes along unchanged.", "diagram": null },
        { "stepNumber": 8, "description": "State the answer.", "workingLatex": "a^{6}b", "explanation": "So the expression simplifies to $a^6b$.", "diagram": null }
      ],
      "finalAnswer": "$a^{6}b$"
    }
  },
  {
    "id": "gcse.algebra.index-laws.q051",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Index laws in algebra",
    "subtopicId": "gcse.algebra.index-laws",
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "expression",
    "tags": ["index laws", "mixed laws", "negative index", "coefficients"],
    "questionText": "Simplify $\\dfrac{6x^{2}y^{5} \\times 2x^{3}y}{4x^{6}y^{2}}$, giving your answer with positive indices.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Multiply the numbers on top.", "workingLatex": "6 \\times 2 = 12", "explanation": "Combine the coefficients in the numerator.", "diagram": null },
        { "stepNumber": 2, "description": "Multiply the $x$ powers on top.", "workingLatex": "x^{2} \\times x^{3} = x^{5}", "explanation": "Add the indices: $2+3=5$.", "diagram": null },
        { "stepNumber": 3, "description": "Multiply the $y$ powers on top.", "workingLatex": "y^{5} \\times y = y^{6}", "explanation": "Add the indices: $5+1=6$.", "diagram": null },
        { "stepNumber": 4, "description": "Rewrite the fraction.", "workingLatex": "\\frac{12x^{5}y^{6}}{4x^{6}y^{2}}", "explanation": "The numerator is now one term.", "diagram": null },
        { "stepNumber": 5, "description": "Divide the coefficients.", "workingLatex": "\\frac{12}{4} = 3", "explanation": "The numbers give $3$.", "diagram": null },
        { "stepNumber": 6, "description": "Recall the division law.", "workingLatex": "a^{m} \\div a^{n} = a^{m-n}", "explanation": "Dividing subtracts the indices.", "diagram": null },
        { "stepNumber": 7, "description": "Subtract the $x$ indices.", "workingLatex": "5 - 6 = -1", "explanation": "The top power is smaller, giving a negative index for $x$.", "diagram": null },
        { "stepNumber": 8, "description": "Subtract the $y$ indices.", "workingLatex": "6 - 2 = 4", "explanation": "Gives $y^4$.", "diagram": null },
        { "stepNumber": 9, "description": "Write the intermediate form.", "workingLatex": "3x^{-1}y^{4}", "explanation": "Combine coefficient and powers.", "diagram": null },
        { "stepNumber": 10, "description": "Recall the negative index rule.", "workingLatex": "x^{-1} = \\frac{1}{x}", "explanation": "A negative index becomes a positive power in the denominator.", "diagram": null },
        { "stepNumber": 11, "description": "Rewrite with positive indices.", "workingLatex": "3 \\times \\frac{1}{x} \\times y^{4}", "explanation": "Move only the $x$ term to the denominator.", "diagram": null },
        { "stepNumber": 12, "description": "Combine into one fraction.", "workingLatex": "\\frac{3y^{4}}{x}", "explanation": "The coefficient and $y^4$ stay on top; $x$ goes underneath.", "diagram": null },
        { "stepNumber": 13, "description": "State the answer.", "workingLatex": "\\frac{3y^{4}}{x}", "explanation": "So the expression simplifies to $\\dfrac{3y^4}{x}$.", "diagram": null }
      ],
      "finalAnswer": "$\\dfrac{3y^{4}}{x}$"
    }
  },
  {
    "id": "gcse.algebra.index-laws.q052",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Index laws in algebra",
    "subtopicId": "gcse.algebra.index-laws",
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "value",
    "tags": ["index laws", "fractional index", "evaluate"],
    "questionText": "Evaluate $8^{\\frac{2}{3}}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall the fractional index rule.", "workingLatex": "a^{\\frac{m}{n}} = \\left(\\sqrt[n]{a}\\right)^{m}", "explanation": "The denominator gives the root and the numerator gives the power.", "diagram": null },
        { "stepNumber": 2, "description": "Identify the root and power.", "workingLatex": "n = 3, \\; m = 2", "explanation": "So we take the cube root, then square the result.", "diagram": null },
        { "stepNumber": 3, "description": "Take the cube root first.", "workingLatex": "\\sqrt[3]{8}", "explanation": "Doing the root first keeps the numbers small.", "diagram": null },
        { "stepNumber": 4, "description": "Evaluate the cube root.", "workingLatex": "\\sqrt[3]{8} = 2", "explanation": "Since $2^3 = 8$, the cube root of $8$ is $2$.", "diagram": null },
        { "stepNumber": 5, "description": "Now apply the power.", "workingLatex": "(2)^{2}", "explanation": "Square the result of the root.", "diagram": null },
        { "stepNumber": 6, "description": "Evaluate the square.", "workingLatex": "2^{2} = 4", "explanation": "Squaring $2$ gives $4$.", "diagram": null },
        { "stepNumber": 7, "description": "Write the result.", "workingLatex": "8^{\\frac{2}{3}} = 4", "explanation": "So the value is $4$.", "diagram": null },
        { "stepNumber": 8, "description": "Check by the other order.", "workingLatex": "8^{2} = 64, \\; \\sqrt[3]{64} = 4", "explanation": "Squaring first then cube-rooting gives the same answer, confirming it.", "diagram": null },
        { "stepNumber": 9, "description": "State the answer.", "workingLatex": "4", "explanation": "So $8^{\\frac{2}{3}} = 4$.", "diagram": null }
      ],
      "finalAnswer": "$4$"
    }
  },
  {
    "id": "gcse.algebra.index-laws.q053",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Index laws in algebra",
    "subtopicId": "gcse.algebra.index-laws",
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "value",
    "tags": ["index laws", "negative fractional index", "evaluate"],
    "questionText": "Evaluate $16^{-\\frac{3}{4}}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Deal with the negative sign first.", "workingLatex": "a^{-n} = \\frac{1}{a^{n}}", "explanation": "A negative index means take the reciprocal of the positive power.", "diagram": null },
        { "stepNumber": 2, "description": "Apply the reciprocal.", "workingLatex": "16^{-\\frac{3}{4}} = \\frac{1}{16^{\\frac{3}{4}}}", "explanation": "Make the index positive by moving to the denominator.", "diagram": null },
        { "stepNumber": 3, "description": "Recall the fractional index rule.", "workingLatex": "a^{\\frac{m}{n}} = \\left(\\sqrt[n]{a}\\right)^{m}", "explanation": "The denominator $4$ is the root, the numerator $3$ is the power.", "diagram": null },
        { "stepNumber": 4, "description": "Take the fourth root.", "workingLatex": "\\sqrt[4]{16} = 2", "explanation": "Since $2^4 = 16$, the fourth root of $16$ is $2$.", "diagram": null },
        { "stepNumber": 5, "description": "Apply the power.", "workingLatex": "2^{3} = 8", "explanation": "Cubing the root gives $8$.", "diagram": null },
        { "stepNumber": 6, "description": "So the denominator is known.", "workingLatex": "16^{\\frac{3}{4}} = 8", "explanation": "The positive fractional power equals $8$.", "diagram": null },
        { "stepNumber": 7, "description": "Put it back in the fraction.", "workingLatex": "\\frac{1}{16^{\\frac{3}{4}}} = \\frac{1}{8}", "explanation": "Substitute the value into the reciprocal.", "diagram": null },
        { "stepNumber": 8, "description": "Write the result.", "workingLatex": "16^{-\\frac{3}{4}} = \\frac{1}{8}", "explanation": "So the value is $\\tfrac{1}{8}$.", "diagram": null },
        { "stepNumber": 9, "description": "Recap the order of operations.", "workingLatex": "\\text{negative} \\to \\text{root} \\to \\text{power}", "explanation": "Handling the reciprocal, then the root, then the power keeps the working clean.", "diagram": null },
        { "stepNumber": 10, "description": "State the answer.", "workingLatex": "\\frac{1}{8}", "explanation": "So $16^{-\\frac{3}{4}} = \\dfrac{1}{8}$.", "diagram": null }
      ],
      "finalAnswer": "$\\dfrac{1}{8}$"
    }
  },
  {
    "id": "gcse.algebra.index-laws.q054",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Index laws in algebra",
    "subtopicId": "gcse.algebra.index-laws",
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "expression",
    "tags": ["index laws", "fractional index", "simplify"],
    "questionText": "Simplify $\\left(x^{6}\\right)^{\\frac{1}{2}} \\times x^{2}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Deal with the bracket first.", "workingLatex": "(x^{6})^{\\frac{1}{2}}", "explanation": "Simplify the power of a power before multiplying.", "diagram": null },
        { "stepNumber": 2, "description": "Recall the power law.", "workingLatex": "(a^{m})^{n} = a^{mn}", "explanation": "A power of a power multiplies the indices, even fractional ones.", "diagram": null },
        { "stepNumber": 3, "description": "Multiply the indices.", "workingLatex": "6 \\times \\frac{1}{2} = 3", "explanation": "Halving the index $6$ gives $3$.", "diagram": null },
        { "stepNumber": 4, "description": "Write the bracket result.", "workingLatex": "x^{3}", "explanation": "So $(x^6)^{1/2} = x^3$; taking a square root halves the power.", "diagram": null },
        { "stepNumber": 5, "description": "Rewrite the expression.", "workingLatex": "x^{3} \\times x^{2}", "explanation": "Now it is a simple product of powers.", "diagram": null },
        { "stepNumber": 6, "description": "Recall the multiplication law.", "workingLatex": "a^{m} \\times a^{n} = a^{m+n}", "explanation": "Multiplying same-base powers adds the indices.", "diagram": null },
        { "stepNumber": 7, "description": "Add the indices.", "workingLatex": "3 + 2 = 5", "explanation": "Gives the final power.", "diagram": null },
        { "stepNumber": 8, "description": "Write the result.", "workingLatex": "x^{5}", "explanation": "The base stays and the index becomes $5$.", "diagram": null },
        { "stepNumber": 9, "description": "Recap the reasoning.", "workingLatex": "\\sqrt{x^{6}} = x^{3}", "explanation": "The fractional index $\\tfrac12$ is just the square root.", "diagram": null },
        { "stepNumber": 10, "description": "State the answer.", "workingLatex": "x^{5}", "explanation": "So $(x^6)^{1/2} \\times x^2 = x^5$.", "diagram": null }
      ],
      "finalAnswer": "$x^{5}$"
    }
  },
  {
    "id": "gcse.algebra.index-laws.q055",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Index laws in algebra",
    "subtopicId": "gcse.algebra.index-laws",
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "expression",
    "tags": ["index laws", "fractional index", "coefficients"],
    "questionText": "Simplify $\\left(25x^{4}\\right)^{\\frac{1}{2}}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Apply the power to each factor.", "workingLatex": "(25x^{4})^{\\frac{1}{2}} = 25^{\\frac{1}{2}} \\times (x^{4})^{\\frac{1}{2}}", "explanation": "The power applies to the number and to the variable.", "diagram": null },
        { "stepNumber": 2, "description": "Interpret the number part.", "workingLatex": "25^{\\frac{1}{2}} = \\sqrt{25}", "explanation": "An index of $\\tfrac12$ means the square root.", "diagram": null },
        { "stepNumber": 3, "description": "Evaluate the root.", "workingLatex": "\\sqrt{25} = 5", "explanation": "Since $5^2 = 25$, the square root is $5$.", "diagram": null },
        { "stepNumber": 4, "description": "Recall the power law.", "workingLatex": "(a^{m})^{n} = a^{mn}", "explanation": "A power of a power multiplies the indices.", "diagram": null },
        { "stepNumber": 5, "description": "Multiply the $x$ indices.", "workingLatex": "4 \\times \\frac{1}{2} = 2", "explanation": "Halving the index $4$ gives $2$.", "diagram": null },
        { "stepNumber": 6, "description": "Write the variable part.", "workingLatex": "x^{2}", "explanation": "So $(x^4)^{1/2} = x^2$.", "diagram": null },
        { "stepNumber": 7, "description": "Combine the pieces.", "workingLatex": "5 \\times x^{2}", "explanation": "Bring the number and variable together.", "diagram": null },
        { "stepNumber": 8, "description": "Write compactly.", "workingLatex": "5x^{2}", "explanation": "Tidy the expression.", "diagram": null },
        { "stepNumber": 9, "description": "Check by squaring.", "workingLatex": "(5x^{2})^{2} = 25x^{4}", "explanation": "Squaring the answer returns the original, confirming it.", "diagram": null },
        { "stepNumber": 10, "description": "State the answer.", "workingLatex": "5x^{2}", "explanation": "So $(25x^4)^{1/2} = 5x^2$.", "diagram": null }
      ],
      "finalAnswer": "$5x^{2}$"
    }
  },
  {
    "id": "gcse.algebra.index-laws.q056",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Index laws in algebra",
    "subtopicId": "gcse.algebra.index-laws",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "expression",
    "tags": ["index laws", "mixed laws", "negative index", "two variables"],
    "questionText": "Simplify $\\dfrac{(2x^{2}y)^{3}}{8x^{4}y^{5}}$, giving your answer with positive indices.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Expand the bracket on top.", "workingLatex": "(2x^{2}y)^{3} = 2^{3}(x^{2})^{3}y^{3}", "explanation": "The power applies to the number and each variable.", "diagram": null },
        { "stepNumber": 2, "description": "Evaluate and multiply indices.", "workingLatex": "8x^{6}y^{3}", "explanation": "$2^3=8$, $(x^2)^3=x^6$, and $y^3$ stays.", "diagram": null },
        { "stepNumber": 3, "description": "Rewrite the fraction.", "workingLatex": "\\frac{8x^{6}y^{3}}{8x^{4}y^{5}}", "explanation": "The numerator is now a single term.", "diagram": null },
        { "stepNumber": 4, "description": "Divide the coefficients.", "workingLatex": "\\frac{8}{8} = 1", "explanation": "The numbers cancel to $1$.", "diagram": null },
        { "stepNumber": 5, "description": "Recall the division law.", "workingLatex": "a^{m} \\div a^{n} = a^{m-n}", "explanation": "Dividing subtracts the indices.", "diagram": null },
        { "stepNumber": 6, "description": "Subtract the $x$ indices.", "workingLatex": "6 - 4 = 2", "explanation": "Gives $x^2$.", "diagram": null },
        { "stepNumber": 7, "description": "Subtract the $y$ indices.", "workingLatex": "3 - 5 = -2", "explanation": "The top power is smaller, giving a negative index for $y$.", "diagram": null },
        { "stepNumber": 8, "description": "Write the intermediate form.", "workingLatex": "x^{2}y^{-2}", "explanation": "Combine the powers (coefficient is $1$).", "diagram": null },
        { "stepNumber": 9, "description": "Recall the negative index rule.", "workingLatex": "y^{-2} = \\frac{1}{y^{2}}", "explanation": "Move the $y$ term to the denominator to make the index positive.", "diagram": null },
        { "stepNumber": 10, "description": "Combine into one fraction.", "workingLatex": "x^{2} \\times \\frac{1}{y^{2}} = \\frac{x^{2}}{y^{2}}", "explanation": "The $x^2$ stays on top; $y^2$ goes underneath.", "diagram": null },
        { "stepNumber": 11, "description": "State the answer.", "workingLatex": "\\frac{x^{2}}{y^{2}}", "explanation": "So the expression simplifies to $\\dfrac{x^2}{y^2}$.", "diagram": null }
      ],
      "finalAnswer": "$\\dfrac{x^{2}}{y^{2}}$"
    }
  },
  {
    "id": "gcse.algebra.index-laws.q057",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Index laws in algebra",
    "subtopicId": "gcse.algebra.index-laws",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "value",
    "tags": ["index laws", "solve", "fractional index"],
    "questionText": "Solve $x^{\\frac{1}{2}} = 4$ for $x$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Interpret the index.", "workingLatex": "x^{\\frac{1}{2}} = \\sqrt{x}", "explanation": "A power of $\\tfrac12$ is the square root.", "diagram": null },
        { "stepNumber": 2, "description": "Rewrite the equation.", "workingLatex": "\\sqrt{x} = 4", "explanation": "The equation says the square root of $x$ is $4$.", "diagram": null },
        { "stepNumber": 3, "description": "Decide how to undo the root.", "workingLatex": "(\\sqrt{x})^{2} = x", "explanation": "Squaring reverses a square root, so square both sides.", "diagram": null },
        { "stepNumber": 4, "description": "Square both sides.", "workingLatex": "(\\sqrt{x})^{2} = 4^{2}", "explanation": "Apply the same operation to keep the equation balanced.", "diagram": null },
        { "stepNumber": 5, "description": "Simplify the left side.", "workingLatex": "x = 4^{2}", "explanation": "Squaring the root leaves $x$.", "diagram": null },
        { "stepNumber": 6, "description": "Evaluate the right side.", "workingLatex": "4^{2} = 16", "explanation": "Squaring $4$ gives $16$.", "diagram": null },
        { "stepNumber": 7, "description": "Write the solution.", "workingLatex": "x = 16", "explanation": "So $x$ equals $16$.", "diagram": null },
        { "stepNumber": 8, "description": "Check the answer.", "workingLatex": "16^{\\frac{1}{2}} = \\sqrt{16} = 4", "explanation": "Substituting back gives $4$, matching the equation.", "diagram": null },
        { "stepNumber": 9, "description": "State the answer.", "workingLatex": "x = 16", "explanation": "So the solution is $x = 16$.", "diagram": null }
      ],
      "finalAnswer": "$x = 16$"
    }
  },
  {
    "id": "gcse.algebra.index-laws.q058",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Index laws in algebra",
    "subtopicId": "gcse.algebra.index-laws",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "expression",
    "tags": ["index laws", "mixed laws", "power law", "coefficients"],
    "questionText": "Simplify $\\dfrac{(3x^{2})^{3} \\times 2x}{9x^{4}}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Expand the bracket.", "workingLatex": "(3x^{2})^{3} = 3^{3}(x^{2})^{3}", "explanation": "The power applies to the number and the variable.", "diagram": null },
        { "stepNumber": 2, "description": "Evaluate the number.", "workingLatex": "3^{3} = 27", "explanation": "The coefficient $3$ is cubed.", "diagram": null },
        { "stepNumber": 3, "description": "Multiply the $x$ indices.", "workingLatex": "2 \\times 3 = 6", "explanation": "Gives $x^6$.", "diagram": null },
        { "stepNumber": 4, "description": "Write the bracket result.", "workingLatex": "27x^{6}", "explanation": "So $(3x^2)^3 = 27x^6$.", "diagram": null },
        { "stepNumber": 5, "description": "Multiply the numerator terms.", "workingLatex": "27x^{6} \\times 2x", "explanation": "Now include the $2x$ factor.", "diagram": null },
        { "stepNumber": 6, "description": "Multiply the coefficients.", "workingLatex": "27 \\times 2 = 54", "explanation": "The numbers give $54$.", "diagram": null },
        { "stepNumber": 7, "description": "Add the $x$ indices.", "workingLatex": "6 + 1 = 7", "explanation": "Gives $x^7$ on top.", "diagram": null },
        { "stepNumber": 8, "description": "Rewrite the fraction.", "workingLatex": "\\frac{54x^{7}}{9x^{4}}", "explanation": "The numerator is now a single term.", "diagram": null },
        { "stepNumber": 9, "description": "Divide the coefficients.", "workingLatex": "\\frac{54}{9} = 6", "explanation": "The numbers give $6$.", "diagram": null },
        { "stepNumber": 10, "description": "Subtract the indices.", "workingLatex": "7 - 4 = 3", "explanation": "Gives the power of $x$.", "diagram": null },
        { "stepNumber": 11, "description": "Combine.", "workingLatex": "6x^{3}", "explanation": "Put the coefficient in front of the power.", "diagram": null },
        { "stepNumber": 12, "description": "State the answer.", "workingLatex": "6x^{3}", "explanation": "So the expression simplifies to $6x^3$.", "diagram": null }
      ],
      "finalAnswer": "$6x^{3}$"
    }
  },
  {
    "id": "gcse.algebra.index-laws.q059",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Index laws in algebra",
    "subtopicId": "gcse.algebra.index-laws",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "expression",
    "tags": ["index laws", "fractional index", "negative index", "coefficients"],
    "questionText": "Simplify $\\left(\\dfrac{x^{6}}{9}\\right)^{-\\frac{1}{2}}$, giving your answer with positive indices.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Deal with the negative index.", "workingLatex": "\\left(\\frac{a}{b}\\right)^{-n} = \\left(\\frac{b}{a}\\right)^{n}", "explanation": "A negative index flips the fraction over.", "diagram": null },
        { "stepNumber": 2, "description": "Flip the fraction.", "workingLatex": "\\left(\\frac{9}{x^{6}}\\right)^{\\frac{1}{2}}", "explanation": "The index is now the positive $\\tfrac12$.", "diagram": null },
        { "stepNumber": 3, "description": "Apply the power to top and bottom.", "workingLatex": "\\frac{9^{\\frac{1}{2}}}{(x^{6})^{\\frac{1}{2}}}", "explanation": "A power of a fraction applies to numerator and denominator.", "diagram": null },
        { "stepNumber": 4, "description": "Interpret the number part.", "workingLatex": "9^{\\frac{1}{2}} = \\sqrt{9}", "explanation": "The index $\\tfrac12$ means square root.", "diagram": null },
        { "stepNumber": 5, "description": "Evaluate the root.", "workingLatex": "\\sqrt{9} = 3", "explanation": "Since $3^2 = 9$.", "diagram": null },
        { "stepNumber": 6, "description": "Recall the power law.", "workingLatex": "(a^{m})^{n} = a^{mn}", "explanation": "A power of a power multiplies the indices.", "diagram": null },
        { "stepNumber": 7, "description": "Multiply the $x$ indices.", "workingLatex": "6 \\times \\frac{1}{2} = 3", "explanation": "Halving the index $6$ gives $3$.", "diagram": null },
        { "stepNumber": 8, "description": "Write the denominator.", "workingLatex": "(x^{6})^{\\frac{1}{2}} = x^{3}", "explanation": "So the bottom is $x^3$.", "diagram": null },
        { "stepNumber": 9, "description": "Combine the pieces.", "workingLatex": "\\frac{3}{x^{3}}", "explanation": "Put the numerator over the denominator.", "diagram": null },
        { "stepNumber": 10, "description": "Confirm indices are positive.", "workingLatex": "\\frac{3}{x^{3}}", "explanation": "There are no negative indices left, as required.", "diagram": null },
        { "stepNumber": 11, "description": "State the answer.", "workingLatex": "\\frac{3}{x^{3}}", "explanation": "So the expression simplifies to $\\dfrac{3}{x^3}$.", "diagram": null }
      ],
      "finalAnswer": "$\\dfrac{3}{x^{3}}$"
    }
  },
  {
    "id": "gcse.algebra.index-laws.q060",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Index laws in algebra",
    "subtopicId": "gcse.algebra.index-laws",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "value",
    "tags": ["index laws", "solve", "equating indices"],
    "questionText": "Solve $2^{x} = 32$ for $x$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Aim to match the bases.", "workingLatex": "2^{x} = 32", "explanation": "If both sides are powers of $2$, we can compare the indices.", "diagram": null },
        { "stepNumber": 2, "description": "Write $32$ as a power of $2$.", "workingLatex": "32 = 2 \\times 2 \\times 2 \\times 2 \\times 2", "explanation": "Break $32$ into repeated factors of $2$.", "diagram": null },
        { "stepNumber": 3, "description": "Count the factors.", "workingLatex": "32 = 2^{5}", "explanation": "There are five $2$'s, so $32 = 2^5$.", "diagram": null },
        { "stepNumber": 4, "description": "Rewrite the equation.", "workingLatex": "2^{x} = 2^{5}", "explanation": "Now both sides are powers of the same base.", "diagram": null },
        { "stepNumber": 5, "description": "Equate the indices.", "workingLatex": "x = 5", "explanation": "If the bases match, the indices must be equal.", "diagram": null },
        { "stepNumber": 6, "description": "Check the answer.", "workingLatex": "2^{5} = 32", "explanation": "Substituting back confirms the equation holds.", "diagram": null },
        { "stepNumber": 7, "description": "State the answer.", "workingLatex": "x = 5", "explanation": "So the solution is $x = 5$.", "diagram": null }
      ],
      "finalAnswer": "$x = 5$"
    }
  },
  {
    "id": "gcse.algebra.index-laws.q061",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Index laws in algebra",
    "subtopicId": "gcse.algebra.index-laws",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "expression",
    "tags": ["index laws", "mixed laws", "power law", "two variables"],
    "questionText": "Simplify $\\dfrac{(x^{3}y)^{2} \\times (xy^{2})^{3}}{x^{4}y^{5}}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Expand the first bracket.", "workingLatex": "(x^{3}y)^{2} = x^{6}y^{2}", "explanation": "Multiply each index by $2$.", "diagram": null },
        { "stepNumber": 2, "description": "Expand the second bracket.", "workingLatex": "(xy^{2})^{3} = x^{3}y^{6}", "explanation": "Multiply each index by $3$ (the lone $x$ has index $1$).", "diagram": null },
        { "stepNumber": 3, "description": "Multiply the numerator terms.", "workingLatex": "x^{6}y^{2} \\times x^{3}y^{6}", "explanation": "Now combine the two expanded brackets.", "diagram": null },
        { "stepNumber": 4, "description": "Add the $x$ indices on top.", "workingLatex": "6 + 3 = 9", "explanation": "Gives $x^9$.", "diagram": null },
        { "stepNumber": 5, "description": "Add the $y$ indices on top.", "workingLatex": "2 + 6 = 8", "explanation": "Gives $y^8$.", "diagram": null },
        { "stepNumber": 6, "description": "Rewrite the fraction.", "workingLatex": "\\frac{x^{9}y^{8}}{x^{4}y^{5}}", "explanation": "The numerator is now a single term.", "diagram": null },
        { "stepNumber": 7, "description": "Recall the division law.", "workingLatex": "a^{m} \\div a^{n} = a^{m-n}", "explanation": "Dividing subtracts the indices.", "diagram": null },
        { "stepNumber": 8, "description": "Subtract the $x$ indices.", "workingLatex": "9 - 4 = 5", "explanation": "Gives $x^5$.", "diagram": null },
        { "stepNumber": 9, "description": "Subtract the $y$ indices.", "workingLatex": "8 - 5 = 3", "explanation": "Gives $y^3$.", "diagram": null },
        { "stepNumber": 10, "description": "Combine the pieces.", "workingLatex": "x^{5}y^{3}", "explanation": "Write the two results side by side.", "diagram": null },
        { "stepNumber": 11, "description": "State the answer.", "workingLatex": "x^{5}y^{3}", "explanation": "So the expression simplifies to $x^5y^3$.", "diagram": null }
      ],
      "finalAnswer": "$x^{5}y^{3}$"
    }
  },
  {
    "id": "gcse.algebra.index-laws.q062",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Index laws in algebra",
    "subtopicId": "gcse.algebra.index-laws",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "value",
    "tags": ["index laws", "evaluate", "negative index"],
    "questionText": "Evaluate $\\left(\\dfrac{8}{27}\\right)^{-\\frac{1}{3}}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Deal with the negative index.", "workingLatex": "\\left(\\frac{a}{b}\\right)^{-n} = \\left(\\frac{b}{a}\\right)^{n}", "explanation": "A negative index flips the fraction over.", "diagram": null },
        { "stepNumber": 2, "description": "Flip the fraction.", "workingLatex": "\\left(\\frac{27}{8}\\right)^{\\frac{1}{3}}", "explanation": "The index becomes the positive $\\tfrac13$.", "diagram": null },
        { "stepNumber": 3, "description": "Interpret the fractional index.", "workingLatex": "\\left(\\frac{27}{8}\\right)^{\\frac{1}{3}} = \\sqrt[3]{\\frac{27}{8}}", "explanation": "An index of $\\tfrac13$ means the cube root.", "diagram": null },
        { "stepNumber": 4, "description": "Split the cube root.", "workingLatex": "\\frac{\\sqrt[3]{27}}{\\sqrt[3]{8}}", "explanation": "The root of a fraction is the root of the top over the root of the bottom.", "diagram": null },
        { "stepNumber": 5, "description": "Evaluate the top root.", "workingLatex": "\\sqrt[3]{27} = 3", "explanation": "Since $3^3 = 27$.", "diagram": null },
        { "stepNumber": 6, "description": "Evaluate the bottom root.", "workingLatex": "\\sqrt[3]{8} = 2", "explanation": "Since $2^3 = 8$.", "diagram": null },
        { "stepNumber": 7, "description": "Combine the results.", "workingLatex": "\\frac{3}{2}", "explanation": "Put the two roots together.", "diagram": null },
        { "stepNumber": 8, "description": "Write the result.", "workingLatex": "\\left(\\frac{8}{27}\\right)^{-\\frac{1}{3}} = \\frac{3}{2}", "explanation": "So the value is $\\tfrac32$.", "diagram": null },
        { "stepNumber": 9, "description": "Check by reversing.", "workingLatex": "\\left(\\frac{3}{2}\\right)^{-3} = \\frac{8}{27}", "explanation": "Cubing the reciprocal returns the original base, confirming it.", "diagram": null },
        { "stepNumber": 10, "description": "State the answer.", "workingLatex": "\\frac{3}{2}", "explanation": "So the value is $\\dfrac{3}{2}$.", "diagram": null }
      ],
      "finalAnswer": "$\\dfrac{3}{2}$"
    }
  },
  {
    "id": "gcse.algebra.index-laws.q063",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Index laws in algebra",
    "subtopicId": "gcse.algebra.index-laws",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "expression",
    "tags": ["index laws", "fractional index", "power law", "coefficients"],
    "questionText": "Simplify $\\left(27x^{6}\\right)^{\\frac{2}{3}}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Apply the power to each factor.", "workingLatex": "(27x^{6})^{\\frac{2}{3}} = 27^{\\frac{2}{3}} \\times (x^{6})^{\\frac{2}{3}}", "explanation": "The power applies to the number and the variable.", "diagram": null },
        { "stepNumber": 2, "description": "Recall the fractional index rule.", "workingLatex": "a^{\\frac{m}{n}} = \\left(\\sqrt[n]{a}\\right)^{m}", "explanation": "The denominator gives the root, the numerator the power.", "diagram": null },
        { "stepNumber": 3, "description": "Take the cube root of $27$.", "workingLatex": "\\sqrt[3]{27} = 3", "explanation": "Since $3^3 = 27$.", "diagram": null },
        { "stepNumber": 4, "description": "Apply the power to the number.", "workingLatex": "3^{2} = 9", "explanation": "Square the cube root to get the number part.", "diagram": null },
        { "stepNumber": 5, "description": "Recall the power law.", "workingLatex": "(a^{m})^{n} = a^{mn}", "explanation": "A power of a power multiplies the indices.", "diagram": null },
        { "stepNumber": 6, "description": "Multiply the $x$ indices.", "workingLatex": "6 \\times \\frac{2}{3} = 4", "explanation": "$6 \\times \\tfrac23 = \\tfrac{12}{3} = 4$.", "diagram": null },
        { "stepNumber": 7, "description": "Write the variable part.", "workingLatex": "x^{4}", "explanation": "So $(x^6)^{2/3} = x^4$.", "diagram": null },
        { "stepNumber": 8, "description": "Combine the pieces.", "workingLatex": "9 \\times x^{4}", "explanation": "Bring the number and variable together.", "diagram": null },
        { "stepNumber": 9, "description": "Write compactly.", "workingLatex": "9x^{4}", "explanation": "Tidy the expression.", "diagram": null },
        { "stepNumber": 10, "description": "State the answer.", "workingLatex": "9x^{4}", "explanation": "So $(27x^6)^{2/3} = 9x^4$.", "diagram": null }
      ],
      "finalAnswer": "$9x^{4}$"
    }
  },
  {
    "id": "gcse.algebra.index-laws.q064",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Index laws in algebra",
    "subtopicId": "gcse.algebra.index-laws",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "expression",
    "tags": ["index laws", "mixed laws", "negative index", "coefficients"],
    "questionText": "Simplify $\\dfrac{5x^{-2} \\times 4x^{5}}{2x^{3}}$, giving your answer with positive indices.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Multiply the numbers on top.", "workingLatex": "5 \\times 4 = 20", "explanation": "Combine the coefficients in the numerator.", "diagram": null },
        { "stepNumber": 2, "description": "Multiply the powers on top.", "workingLatex": "x^{-2} \\times x^{5} = x^{-2+5}", "explanation": "Add the indices, including the negative one.", "diagram": null },
        { "stepNumber": 3, "description": "Work out that index.", "workingLatex": "-2 + 5 = 3", "explanation": "So the numerator power is $x^3$.", "diagram": null },
        { "stepNumber": 4, "description": "Rewrite the fraction.", "workingLatex": "\\frac{20x^{3}}{2x^{3}}", "explanation": "The numerator is now a single term.", "diagram": null },
        { "stepNumber": 5, "description": "Divide the coefficients.", "workingLatex": "\\frac{20}{2} = 10", "explanation": "The numbers give $10$.", "diagram": null },
        { "stepNumber": 6, "description": "Subtract the indices.", "workingLatex": "3 - 3 = 0", "explanation": "The powers are equal, giving a difference of $0$.", "diagram": null },
        { "stepNumber": 7, "description": "Apply the zero index rule.", "workingLatex": "x^{0} = 1", "explanation": "So the variable part becomes $1$.", "diagram": null },
        { "stepNumber": 8, "description": "Combine.", "workingLatex": "10 \\times 1", "explanation": "Only the coefficient remains.", "diagram": null },
        { "stepNumber": 9, "description": "Write the result.", "workingLatex": "10", "explanation": "The $x$ terms cancel entirely.", "diagram": null },
        { "stepNumber": 10, "description": "State the answer.", "workingLatex": "10", "explanation": "So the expression simplifies to $10$.", "diagram": null }
      ],
      "finalAnswer": "$10$"
    }
  },
  {
    "id": "gcse.algebra.index-laws.q065",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Index laws in algebra",
    "subtopicId": "gcse.algebra.index-laws",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "value",
    "tags": ["index laws", "solve", "equating indices"],
    "questionText": "Solve $9^{x} = 27$ for $x$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Choose a common base.", "workingLatex": "9 = 3^{2}, \\; 27 = 3^{3}", "explanation": "Both $9$ and $27$ are powers of $3$, so use base $3$.", "diagram": null },
        { "stepNumber": 2, "description": "Rewrite the left side.", "workingLatex": "9^{x} = (3^{2})^{x}", "explanation": "Replace $9$ with $3^2$.", "diagram": null },
        { "stepNumber": 3, "description": "Apply the power law.", "workingLatex": "(3^{2})^{x} = 3^{2x}", "explanation": "A power of a power multiplies the indices.", "diagram": null },
        { "stepNumber": 4, "description": "Rewrite the right side.", "workingLatex": "27 = 3^{3}", "explanation": "Express $27$ as a power of $3$.", "diagram": null },
        { "stepNumber": 5, "description": "Set the equation in base $3$.", "workingLatex": "3^{2x} = 3^{3}", "explanation": "Both sides are now powers of $3$.", "diagram": null },
        { "stepNumber": 6, "description": "Equate the indices.", "workingLatex": "2x = 3", "explanation": "Equal bases mean equal indices.", "diagram": null },
        { "stepNumber": 7, "description": "Divide by $2$.", "workingLatex": "x = \\frac{3}{2}", "explanation": "Solve the simple equation for $x$.", "diagram": null },
        { "stepNumber": 8, "description": "Check the answer.", "workingLatex": "9^{\\frac{3}{2}} = (\\sqrt{9})^{3} = 3^{3} = 27", "explanation": "Substituting back gives $27$, confirming the solution.", "diagram": null },
        { "stepNumber": 9, "description": "State the answer.", "workingLatex": "x = \\frac{3}{2}", "explanation": "So the solution is $x = \\tfrac32$.", "diagram": null }
      ],
      "finalAnswer": "$x = \\dfrac{3}{2}$"
    }
  },
  {
    "id": "gcse.algebra.index-laws.q066",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Index laws in algebra",
    "subtopicId": "gcse.algebra.index-laws",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "expression",
    "tags": ["index laws", "fractional index", "mixed laws"],
    "questionText": "Simplify $\\dfrac{x^{\\frac{1}{2}} \\times x^{\\frac{3}{2}}}{x^{\\frac{1}{2}}}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Multiply the powers on top.", "workingLatex": "x^{\\frac{1}{2}} \\times x^{\\frac{3}{2}} = x^{\\frac{1}{2}+\\frac{3}{2}}", "explanation": "Multiplying same-base powers adds the indices.", "diagram": null },
        { "stepNumber": 2, "description": "Add the fractions.", "workingLatex": "\\frac{1}{2} + \\frac{3}{2} = \\frac{4}{2} = 2", "explanation": "The numerator becomes $x^2$.", "diagram": null },
        { "stepNumber": 3, "description": "Rewrite the fraction.", "workingLatex": "\\frac{x^{2}}{x^{\\frac{1}{2}}}", "explanation": "The numerator is now a single power.", "diagram": null },
        { "stepNumber": 4, "description": "Recall the division law.", "workingLatex": "a^{m} \\div a^{n} = a^{m-n}", "explanation": "Dividing subtracts the indices.", "diagram": null },
        { "stepNumber": 5, "description": "Subtract the indices.", "workingLatex": "2 - \\frac{1}{2} = \\frac{3}{2}", "explanation": "Write $2$ as $\\tfrac42$, then subtract to get $\\tfrac32$.", "diagram": null },
        { "stepNumber": 6, "description": "Write the result.", "workingLatex": "x^{\\frac{3}{2}}", "explanation": "The index becomes $\\tfrac32$.", "diagram": null },
        { "stepNumber": 7, "description": "Optional surd form.", "workingLatex": "x^{\\frac{3}{2}} = \\sqrt{x^{3}}", "explanation": "The fractional index can also be written as a root if required.", "diagram": null },
        { "stepNumber": 8, "description": "State the answer.", "workingLatex": "x^{\\frac{3}{2}}", "explanation": "So the expression simplifies to $x^{3/2}$.", "diagram": null }
      ],
      "finalAnswer": "$x^{\\frac{3}{2}}$"
    }
  },
  {
    "id": "gcse.algebra.index-laws.q067",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Index laws in algebra",
    "subtopicId": "gcse.algebra.index-laws",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "expression",
    "tags": ["index laws", "power law", "negative index", "coefficients"],
    "questionText": "Simplify $\\left(\\dfrac{2x^{2}}{y^{3}}\\right)^{3}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Apply the power to top and bottom.", "workingLatex": "\\left(\\frac{2x^{2}}{y^{3}}\\right)^{3} = \\frac{(2x^{2})^{3}}{(y^{3})^{3}}", "explanation": "A power of a fraction applies to numerator and denominator.", "diagram": null },
        { "stepNumber": 2, "description": "Expand the numerator.", "workingLatex": "(2x^{2})^{3} = 2^{3}(x^{2})^{3}", "explanation": "The power applies to the number and the variable.", "diagram": null },
        { "stepNumber": 3, "description": "Evaluate the number.", "workingLatex": "2^{3} = 8", "explanation": "The coefficient $2$ is cubed.", "diagram": null },
        { "stepNumber": 4, "description": "Multiply the numerator index.", "workingLatex": "(x^{2})^{3} = x^{6}", "explanation": "$2 \\times 3 = 6$.", "diagram": null },
        { "stepNumber": 5, "description": "Write the numerator.", "workingLatex": "8x^{6}", "explanation": "So the top is $8x^6$.", "diagram": null },
        { "stepNumber": 6, "description": "Expand the denominator.", "workingLatex": "(y^{3})^{3} = y^{9}", "explanation": "$3 \\times 3 = 9$.", "diagram": null },
        { "stepNumber": 7, "description": "Combine into one fraction.", "workingLatex": "\\frac{8x^{6}}{y^{9}}", "explanation": "Put the numerator over the denominator.", "diagram": null },
        { "stepNumber": 8, "description": "Check the coefficient.", "workingLatex": "2^{3} = 8", "explanation": "Remember the number is cubed, not multiplied by $3$.", "diagram": null },
        { "stepNumber": 9, "description": "State the answer.", "workingLatex": "\\frac{8x^{6}}{y^{9}}", "explanation": "So the expression simplifies to $\\dfrac{8x^6}{y^9}$.", "diagram": null }
      ],
      "finalAnswer": "$\\dfrac{8x^{6}}{y^{9}}$"
    }
  },
  {
    "id": "gcse.algebra.index-laws.q068",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Index laws in algebra",
    "subtopicId": "gcse.algebra.index-laws",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "expression",
    "tags": ["index laws", "mixed laws", "power law", "two variables"],
    "questionText": "Simplify $\\dfrac{(4x^{3}y^{2})^{2}}{(2xy)^{3}}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Expand the numerator bracket.", "workingLatex": "(4x^{3}y^{2})^{2} = 4^{2}x^{6}y^{4}", "explanation": "Square the number and double each index.", "diagram": null },
        { "stepNumber": 2, "description": "Evaluate the numerator number.", "workingLatex": "4^{2} = 16", "explanation": "So the top is $16x^6y^4$.", "diagram": null },
        { "stepNumber": 3, "description": "Expand the denominator bracket.", "workingLatex": "(2xy)^{3} = 2^{3}x^{3}y^{3}", "explanation": "Cube the number and multiply each index by $3$.", "diagram": null },
        { "stepNumber": 4, "description": "Evaluate the denominator number.", "workingLatex": "2^{3} = 8", "explanation": "So the bottom is $8x^3y^3$.", "diagram": null },
        { "stepNumber": 5, "description": "Rewrite the fraction.", "workingLatex": "\\frac{16x^{6}y^{4}}{8x^{3}y^{3}}", "explanation": "Both brackets are now expanded.", "diagram": null },
        { "stepNumber": 6, "description": "Divide the coefficients.", "workingLatex": "\\frac{16}{8} = 2", "explanation": "The numbers give $2$.", "diagram": null },
        { "stepNumber": 7, "description": "Subtract the $x$ indices.", "workingLatex": "6 - 3 = 3", "explanation": "Gives $x^3$.", "diagram": null },
        { "stepNumber": 8, "description": "Subtract the $y$ indices.", "workingLatex": "4 - 3 = 1", "explanation": "Gives $y^1 = y$.", "diagram": null },
        { "stepNumber": 9, "description": "Combine the pieces.", "workingLatex": "2x^{3}y", "explanation": "Bring the coefficient and powers together.", "diagram": null },
        { "stepNumber": 10, "description": "State the answer.", "workingLatex": "2x^{3}y", "explanation": "So the expression simplifies to $2x^3y$.", "diagram": null }
      ],
      "finalAnswer": "$2x^{3}y$"
    }
  },
  {
    "id": "gcse.algebra.index-laws.q069",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Index laws in algebra",
    "subtopicId": "gcse.algebra.index-laws",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "value",
    "tags": ["index laws", "solve", "negative index"],
    "questionText": "Solve $x^{-2} = \\dfrac{1}{16}$ for the positive value of $x$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Rewrite the negative index.", "workingLatex": "x^{-2} = \\frac{1}{x^{2}}", "explanation": "A negative index means the reciprocal of the positive power.", "diagram": null },
        { "stepNumber": 2, "description": "Set up the equation.", "workingLatex": "\\frac{1}{x^{2}} = \\frac{1}{16}", "explanation": "Both sides are reciprocals, so their denominators can be compared.", "diagram": null },
        { "stepNumber": 3, "description": "Compare the denominators.", "workingLatex": "x^{2} = 16", "explanation": "If $\\tfrac{1}{x^2} = \\tfrac{1}{16}$ then $x^2 = 16$.", "diagram": null },
        { "stepNumber": 4, "description": "Take the square root.", "workingLatex": "x = \\sqrt{16}", "explanation": "Square-root both sides to undo the square.", "diagram": null },
        { "stepNumber": 5, "description": "Evaluate the root.", "workingLatex": "\\sqrt{16} = 4", "explanation": "Since $4^2 = 16$.", "diagram": null },
        { "stepNumber": 6, "description": "Note both roots exist.", "workingLatex": "x = \\pm 4", "explanation": "Both $4$ and $-4$ square to $16$, but we want the positive value.", "diagram": null },
        { "stepNumber": 7, "description": "Select the positive root.", "workingLatex": "x = 4", "explanation": "The question asks for the positive value of $x$.", "diagram": null },
        { "stepNumber": 8, "description": "Check the answer.", "workingLatex": "4^{-2} = \\frac{1}{16}", "explanation": "Substituting back confirms the solution.", "diagram": null },
        { "stepNumber": 9, "description": "State the answer.", "workingLatex": "x = 4", "explanation": "So the positive solution is $x = 4$.", "diagram": null }
      ],
      "finalAnswer": "$x = 4$"
    }
  },
  {
    "id": "gcse.algebra.index-laws.q070",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Index laws in algebra",
    "subtopicId": "gcse.algebra.index-laws",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "expression",
    "tags": ["index laws", "mixed laws", "fractional index", "coefficients"],
    "questionText": "Simplify $\\dfrac{(16x^{8})^{\\frac{1}{2}}}{2x^{2}} \\times x^{-1}$, giving your answer with positive indices.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Expand the bracket.", "workingLatex": "(16x^{8})^{\\frac{1}{2}} = 16^{\\frac{1}{2}} \\times (x^{8})^{\\frac{1}{2}}", "explanation": "The power applies to the number and the variable.", "diagram": null },
        { "stepNumber": 2, "description": "Take the square root of $16$.", "workingLatex": "16^{\\frac{1}{2}} = 4", "explanation": "Since $4^2 = 16$.", "diagram": null },
        { "stepNumber": 3, "description": "Halve the $x$ index.", "workingLatex": "(x^{8})^{\\frac{1}{2}} = x^{4}", "explanation": "$8 \\times \\tfrac12 = 4$.", "diagram": null },
        { "stepNumber": 4, "description": "Write the bracket result.", "workingLatex": "4x^{4}", "explanation": "So $(16x^8)^{1/2} = 4x^4$.", "diagram": null },
        { "stepNumber": 5, "description": "Rewrite the fraction.", "workingLatex": "\\frac{4x^{4}}{2x^{2}}", "explanation": "Put the simplified numerator over $2x^2$.", "diagram": null },
        { "stepNumber": 6, "description": "Divide the coefficients.", "workingLatex": "\\frac{4}{2} = 2", "explanation": "The numbers give $2$.", "diagram": null },
        { "stepNumber": 7, "description": "Subtract the indices.", "workingLatex": "4 - 2 = 2", "explanation": "Gives $x^2$ for the fraction.", "diagram": null },
        { "stepNumber": 8, "description": "Write the fraction result.", "workingLatex": "2x^{2}", "explanation": "So the fraction simplifies to $2x^2$.", "diagram": null },
        { "stepNumber": 9, "description": "Multiply by $x^{-1}$.", "workingLatex": "2x^{2} \\times x^{-1}", "explanation": "Now include the final factor.", "diagram": null },
        { "stepNumber": 10, "description": "Add the indices.", "workingLatex": "2 + (-1) = 1", "explanation": "Adding the indices gives $x^1$.", "diagram": null },
        { "stepNumber": 11, "description": "Write the power.", "workingLatex": "2x^{1} = 2x", "explanation": "An index of $1$ is not written.", "diagram": null },
        { "stepNumber": 12, "description": "Confirm positive index.", "workingLatex": "2x", "explanation": "There are no negative indices left, as required.", "diagram": null },
        { "stepNumber": 13, "description": "State the answer.", "workingLatex": "2x", "explanation": "So the expression simplifies to $2x$.", "diagram": null }
      ],
      "finalAnswer": "$2x$"
    }
  }
];
