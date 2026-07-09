import { Question } from "@/lib/types";

export const questions: Question[] = [
  {
    "id": "gcse.number.integer-indices.q001",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Integer indices",
    "subtopicId": "gcse.number.integer-indices",
    "difficulty": "Easy",
    "marks": 1,
    "answerType": "algebraic",
    "tags": ["product rule", "index laws", "simplify"],
    "questionText": "Simplify $x^2 \\times x^3$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Look at the two powers.", "workingLatex": "x^2 \\times x^3", "explanation": "Both parts have the same base, $x$, so we can combine them into a single power.", "diagram": null },
        { "stepNumber": 2, "description": "Recall what the indices mean.", "workingLatex": "x^2 = x \\times x, \\quad x^3 = x \\times x \\times x", "explanation": "An index just counts how many times the base is used as a factor.", "diagram": null },
        { "stepNumber": 3, "description": "Write out all the factors.", "workingLatex": "x^2 \\times x^3 = x \\times x \\times x \\times x \\times x", "explanation": "Multiplying the two powers together simply lines up all the $x$ factors in one long product.", "diagram": null },
        { "stepNumber": 4, "description": "Count the factors.", "workingLatex": "\\text{total factors} = 2 + 3 = 5", "explanation": "There are five $x$ factors in total, which is exactly the two indices added together.", "diagram": null },
        { "stepNumber": 5, "description": "State the product rule.", "workingLatex": "x^a \\times x^b = x^{a+b}", "explanation": "When multiplying powers of the same base we add the indices, which matches the counting above.", "diagram": null },
        { "stepNumber": 6, "description": "Write the final answer.", "workingLatex": "x^2 \\times x^3 = x^5", "explanation": "Adding the indices $2$ and $3$ gives $x^5$.", "diagram": null }
      ],
      "finalAnswer": "$x^5$"
    }
  },
  {
    "id": "gcse.number.integer-indices.q002",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Integer indices",
    "subtopicId": "gcse.number.integer-indices",
    "difficulty": "Easy",
    "marks": 1,
    "answerType": "algebraic",
    "tags": ["product rule", "index laws", "simplify"],
    "questionText": "Simplify $x^5 \\times x^4$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Check the bases match.", "workingLatex": "x^5 \\times x^4", "explanation": "Both powers use the base $x$, so the product rule applies.", "diagram": null },
        { "stepNumber": 2, "description": "Recall the product rule.", "workingLatex": "x^a \\times x^b = x^{a+b}", "explanation": "Multiplying powers of the same base means we simply add the indices.", "diagram": null },
        { "stepNumber": 3, "description": "Identify the two indices.", "workingLatex": "a = 5, \\quad b = 4", "explanation": "These are the small numbers that tell us how many times $x$ is used as a factor in each power.", "diagram": null },
        { "stepNumber": 4, "description": "Add the indices.", "workingLatex": "5 + 4 = 9", "explanation": "Combining the two groups of $x$ factors gives nine factors in total.", "diagram": null },
        { "stepNumber": 5, "description": "Write the new power.", "workingLatex": "x^5 \\times x^4 = x^{9}", "explanation": "The single power $x^9$ holds all nine factors together.", "diagram": null },
        { "stepNumber": 6, "description": "State the final answer.", "workingLatex": "x^5 \\times x^4 = x^9", "explanation": "So the simplified form is $x^9$.", "diagram": null }
      ],
      "finalAnswer": "$x^9$"
    }
  },
  {
    "id": "gcse.number.integer-indices.q003",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Integer indices",
    "subtopicId": "gcse.number.integer-indices",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "numeric",
    "tags": ["product rule", "index laws", "numeric base"],
    "questionText": "Write $2^3 \\times 2^2$ as a single power of $2$, then evaluate it.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Notice the shared base.", "workingLatex": "2^3 \\times 2^2", "explanation": "Both powers have base $2$, so we can add the indices instead of working each power out separately.", "diagram": null },
        { "stepNumber": 2, "description": "Recall the product rule.", "workingLatex": "2^a \\times 2^b = 2^{a+b}", "explanation": "For the same base, multiplying means adding the indices.", "diagram": null },
        { "stepNumber": 3, "description": "Add the indices.", "workingLatex": "3 + 2 = 5", "explanation": "Three twos multiplied by two more twos gives five twos in total.", "diagram": null },
        { "stepNumber": 4, "description": "Write as a single power.", "workingLatex": "2^3 \\times 2^2 = 2^5", "explanation": "All five factors of $2$ are collected into one power.", "diagram": null },
        { "stepNumber": 5, "description": "Evaluate the power.", "workingLatex": "2^5 = 2 \\times 2 \\times 2 \\times 2 \\times 2", "explanation": "To find the actual number we multiply five twos together.", "diagram": null },
        { "stepNumber": 6, "description": "Do the multiplication.", "workingLatex": "2^5 = 32", "explanation": "Doubling repeatedly ($2, 4, 8, 16, 32$) reaches $32$.", "diagram": null },
        { "stepNumber": 7, "description": "State the final answer.", "workingLatex": "2^3 \\times 2^2 = 2^5 = 32", "explanation": "So the single power is $2^5$, which equals $32$.", "diagram": null }
      ],
      "finalAnswer": "$2^5 = 32$"
    }
  },
  {
    "id": "gcse.number.integer-indices.q004",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Integer indices",
    "subtopicId": "gcse.number.integer-indices",
    "difficulty": "Easy",
    "marks": 1,
    "answerType": "numeric",
    "tags": ["product rule", "index laws", "numeric base"],
    "questionText": "Write $5^2 \\times 5^4$ as a single power of $5$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Check the bases.", "workingLatex": "5^2 \\times 5^4", "explanation": "Both powers share the base $5$, so the product rule can be used.", "diagram": null },
        { "stepNumber": 2, "description": "Recall the product rule.", "workingLatex": "5^a \\times 5^b = 5^{a+b}", "explanation": "Multiplying powers of the same base adds their indices.", "diagram": null },
        { "stepNumber": 3, "description": "Identify the indices.", "workingLatex": "a = 2, \\quad b = 4", "explanation": "These count how many fives are multiplied in each power.", "diagram": null },
        { "stepNumber": 4, "description": "Add the indices.", "workingLatex": "2 + 4 = 6", "explanation": "Two fives and four fives make six fives altogether.", "diagram": null },
        { "stepNumber": 5, "description": "Write as one power.", "workingLatex": "5^2 \\times 5^4 = 5^6", "explanation": "The combined power collects all six factors of $5$.", "diagram": null },
        { "stepNumber": 6, "description": "State the final answer.", "workingLatex": "5^2 \\times 5^4 = 5^6", "explanation": "So the answer as a single power is $5^6$.", "diagram": null }
      ],
      "finalAnswer": "$5^6$"
    }
  },
  {
    "id": "gcse.number.integer-indices.q005",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Integer indices",
    "subtopicId": "gcse.number.integer-indices",
    "difficulty": "Easy",
    "marks": 1,
    "answerType": "algebraic",
    "tags": ["quotient rule", "index laws", "simplify"],
    "questionText": "Simplify $x^7 \\div x^3$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Write the division as a fraction.", "workingLatex": "x^7 \\div x^3 = \\dfrac{x^7}{x^3}", "explanation": "Seeing the powers stacked as a fraction makes the cancelling clearer.", "diagram": null },
        { "stepNumber": 2, "description": "Expand the top and bottom.", "workingLatex": "\\dfrac{x \\times x \\times x \\times x \\times x \\times x \\times x}{x \\times x \\times x}", "explanation": "Each index tells us how many $x$ factors to write on that line.", "diagram": null },
        { "stepNumber": 3, "description": "Cancel matching factors.", "workingLatex": "\\dfrac{x \\times x \\times x \\times x \\times \\cancel{x} \\times \\cancel{x} \\times \\cancel{x}}{\\cancel{x} \\times \\cancel{x} \\times \\cancel{x}}", "explanation": "Each $x$ on the bottom cancels one $x$ on the top, since dividing a factor by itself gives $1$.", "diagram": null },
        { "stepNumber": 4, "description": "Count what is left.", "workingLatex": "7 - 3 = 4", "explanation": "After cancelling three $x$ factors, four remain on top, which is the difference of the indices.", "diagram": null },
        { "stepNumber": 5, "description": "State the quotient rule.", "workingLatex": "x^a \\div x^b = x^{a-b}", "explanation": "Dividing powers of the same base means we subtract the indices.", "diagram": null },
        { "stepNumber": 6, "description": "Write the final answer.", "workingLatex": "x^7 \\div x^3 = x^4", "explanation": "Subtracting $3$ from $7$ leaves $x^4$.", "diagram": null }
      ],
      "finalAnswer": "$x^4$"
    }
  },
  {
    "id": "gcse.number.integer-indices.q006",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Integer indices",
    "subtopicId": "gcse.number.integer-indices",
    "difficulty": "Easy",
    "marks": 1,
    "answerType": "algebraic",
    "tags": ["quotient rule", "index laws", "simplify"],
    "questionText": "Simplify $\\dfrac{a^8}{a^5}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Check the bases match.", "workingLatex": "\\dfrac{a^8}{a^5}", "explanation": "Top and bottom both use the base $a$, so the quotient rule applies.", "diagram": null },
        { "stepNumber": 2, "description": "Recall the quotient rule.", "workingLatex": "a^m \\div a^n = a^{m-n}", "explanation": "Dividing powers of the same base means subtracting the bottom index from the top index.", "diagram": null },
        { "stepNumber": 3, "description": "Identify the indices.", "workingLatex": "m = 8, \\quad n = 5", "explanation": "The top has eight $a$ factors and the bottom has five.", "diagram": null },
        { "stepNumber": 4, "description": "Subtract the indices.", "workingLatex": "8 - 5 = 3", "explanation": "Five factors cancel, leaving three $a$ factors on top.", "diagram": null },
        { "stepNumber": 5, "description": "Write the single power.", "workingLatex": "\\dfrac{a^8}{a^5} = a^3", "explanation": "The three surviving factors form $a^3$.", "diagram": null },
        { "stepNumber": 6, "description": "State the final answer.", "workingLatex": "\\dfrac{a^8}{a^5} = a^3", "explanation": "So the simplified form is $a^3$.", "diagram": null }
      ],
      "finalAnswer": "$a^3$"
    }
  },
  {
    "id": "gcse.number.integer-indices.q007",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Integer indices",
    "subtopicId": "gcse.number.integer-indices",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "numeric",
    "tags": ["quotient rule", "index laws", "numeric base"],
    "questionText": "Write $\\dfrac{3^6}{3^2}$ as a single power of $3$, then evaluate it.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Note the shared base.", "workingLatex": "\\dfrac{3^6}{3^2}", "explanation": "Both powers use base $3$, so we can subtract indices rather than work out each power first.", "diagram": null },
        { "stepNumber": 2, "description": "Recall the quotient rule.", "workingLatex": "3^m \\div 3^n = 3^{m-n}", "explanation": "Dividing powers of the same base subtracts the indices.", "diagram": null },
        { "stepNumber": 3, "description": "Subtract the indices.", "workingLatex": "6 - 2 = 4", "explanation": "Two of the six threes on top cancel with the two on the bottom, leaving four.", "diagram": null },
        { "stepNumber": 4, "description": "Write as a single power.", "workingLatex": "\\dfrac{3^6}{3^2} = 3^4", "explanation": "The four remaining factors of $3$ make $3^4$.", "diagram": null },
        { "stepNumber": 5, "description": "Evaluate the power.", "workingLatex": "3^4 = 3 \\times 3 \\times 3 \\times 3", "explanation": "To get the number we multiply four threes together.", "diagram": null },
        { "stepNumber": 6, "description": "Do the multiplication.", "workingLatex": "3^4 = 81", "explanation": "Working through, $3 \\times 3 = 9$ and $9 \\times 9 = 81$.", "diagram": null },
        { "stepNumber": 7, "description": "State the final answer.", "workingLatex": "\\dfrac{3^6}{3^2} = 3^4 = 81", "explanation": "So the single power is $3^4$, which equals $81$.", "diagram": null }
      ],
      "finalAnswer": "$3^4 = 81$"
    }
  },
  {
    "id": "gcse.number.integer-indices.q008",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Integer indices",
    "subtopicId": "gcse.number.integer-indices",
    "difficulty": "Easy",
    "marks": 1,
    "answerType": "numeric",
    "tags": ["quotient rule", "index laws", "numeric base"],
    "questionText": "Write $\\dfrac{7^9}{7^4}$ as a single power of $7$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Check the bases.", "workingLatex": "\\dfrac{7^9}{7^4}", "explanation": "Top and bottom both use base $7$, so the quotient rule applies.", "diagram": null },
        { "stepNumber": 2, "description": "Recall the quotient rule.", "workingLatex": "7^m \\div 7^n = 7^{m-n}", "explanation": "For the same base, dividing means subtracting the indices.", "diagram": null },
        { "stepNumber": 3, "description": "Identify the indices.", "workingLatex": "m = 9, \\quad n = 4", "explanation": "There are nine sevens on top and four on the bottom.", "diagram": null },
        { "stepNumber": 4, "description": "Subtract the indices.", "workingLatex": "9 - 4 = 5", "explanation": "Four sevens cancel, leaving five sevens on top.", "diagram": null },
        { "stepNumber": 5, "description": "Write the single power.", "workingLatex": "\\dfrac{7^9}{7^4} = 7^5", "explanation": "The five surviving factors form $7^5$.", "diagram": null },
        { "stepNumber": 6, "description": "State the final answer.", "workingLatex": "\\dfrac{7^9}{7^4} = 7^5", "explanation": "So the answer as a single power is $7^5$.", "diagram": null }
      ],
      "finalAnswer": "$7^5$"
    }
  },
  {
    "id": "gcse.number.integer-indices.q009",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Integer indices",
    "subtopicId": "gcse.number.integer-indices",
    "difficulty": "Easy",
    "marks": 1,
    "answerType": "algebraic",
    "tags": ["power of a power", "index laws", "simplify"],
    "questionText": "Simplify $(x^2)^3$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Read the expression.", "workingLatex": "(x^2)^3", "explanation": "The outer index $3$ means the bracket $x^2$ is multiplied by itself three times.", "diagram": null },
        { "stepNumber": 2, "description": "Write the repeated bracket.", "workingLatex": "(x^2)^3 = x^2 \\times x^2 \\times x^2", "explanation": "The power of $3$ outside simply says: use $x^2$ as a factor three times.", "diagram": null },
        { "stepNumber": 3, "description": "Use the product rule inside.", "workingLatex": "x^2 \\times x^2 \\times x^2 = x^{2+2+2}", "explanation": "Multiplying powers of the same base adds the indices.", "diagram": null },
        { "stepNumber": 4, "description": "Add the indices.", "workingLatex": "2 + 2 + 2 = 6", "explanation": "Three lots of $2$ give $6$, which is the same as multiplying the indices.", "diagram": null },
        { "stepNumber": 5, "description": "State the power rule.", "workingLatex": "(x^a)^b = x^{a \\times b}", "explanation": "A power raised to a power multiplies the two indices together.", "diagram": null },
        { "stepNumber": 6, "description": "Write the final answer.", "workingLatex": "(x^2)^3 = x^6", "explanation": "Multiplying $2$ by $3$ gives $x^6$.", "diagram": null }
      ],
      "finalAnswer": "$x^6$"
    }
  },
  {
    "id": "gcse.number.integer-indices.q010",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Integer indices",
    "subtopicId": "gcse.number.integer-indices",
    "difficulty": "Easy",
    "marks": 1,
    "answerType": "algebraic",
    "tags": ["power of a power", "index laws", "simplify"],
    "questionText": "Simplify $(y^4)^2$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Read the expression.", "workingLatex": "(y^4)^2", "explanation": "The outer index $2$ means the bracket $y^4$ is used as a factor twice.", "diagram": null },
        { "stepNumber": 2, "description": "Write the repeated bracket.", "workingLatex": "(y^4)^2 = y^4 \\times y^4", "explanation": "Squaring the bracket means multiplying $y^4$ by itself.", "diagram": null },
        { "stepNumber": 3, "description": "Add the inner indices.", "workingLatex": "y^4 \\times y^4 = y^{4+4}", "explanation": "Same base, so we add the indices when multiplying.", "diagram": null },
        { "stepNumber": 4, "description": "Simplify the sum.", "workingLatex": "4 + 4 = 8", "explanation": "Two lots of $4$ give $8$, which equals $4 \\times 2$.", "diagram": null },
        { "stepNumber": 5, "description": "State the power rule.", "workingLatex": "(y^a)^b = y^{a \\times b}", "explanation": "A power of a power multiplies the indices.", "diagram": null },
        { "stepNumber": 6, "description": "Write the final answer.", "workingLatex": "(y^4)^2 = y^8", "explanation": "Multiplying $4$ by $2$ gives $y^8$.", "diagram": null }
      ],
      "finalAnswer": "$y^8$"
    }
  },
  {
    "id": "gcse.number.integer-indices.q011",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Integer indices",
    "subtopicId": "gcse.number.integer-indices",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "numeric",
    "tags": ["power of a power", "index laws", "numeric base"],
    "questionText": "Write $(2^3)^2$ as a single power of $2$, then evaluate it.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Read the expression.", "workingLatex": "(2^3)^2", "explanation": "The outer index $2$ means the bracket $2^3$ is used as a factor twice.", "diagram": null },
        { "stepNumber": 2, "description": "Recall the power rule.", "workingLatex": "(2^a)^b = 2^{a \\times b}", "explanation": "Raising a power to another power multiplies the indices.", "diagram": null },
        { "stepNumber": 3, "description": "Multiply the indices.", "workingLatex": "3 \\times 2 = 6", "explanation": "The two indices combine by multiplication.", "diagram": null },
        { "stepNumber": 4, "description": "Write as a single power.", "workingLatex": "(2^3)^2 = 2^6", "explanation": "All six factors of $2$ are collected into one power.", "diagram": null },
        { "stepNumber": 5, "description": "Evaluate the power.", "workingLatex": "2^6 = 2 \\times 2 \\times 2 \\times 2 \\times 2 \\times 2", "explanation": "To find the number we multiply six twos together.", "diagram": null },
        { "stepNumber": 6, "description": "Do the multiplication.", "workingLatex": "2^6 = 64", "explanation": "Doubling repeatedly reaches $64$.", "diagram": null },
        { "stepNumber": 7, "description": "State the final answer.", "workingLatex": "(2^3)^2 = 2^6 = 64", "explanation": "So the single power is $2^6$, which equals $64$.", "diagram": null }
      ],
      "finalAnswer": "$2^6 = 64$"
    }
  },
  {
    "id": "gcse.number.integer-indices.q012",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Integer indices",
    "subtopicId": "gcse.number.integer-indices",
    "difficulty": "Easy",
    "marks": 1,
    "answerType": "numeric",
    "tags": ["zero index", "index laws", "evaluate"],
    "questionText": "Work out $5^0$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Read the power.", "workingLatex": "5^0", "explanation": "The index is $0$, so we need the rule for a zero power.", "diagram": null },
        { "stepNumber": 2, "description": "Build a pattern with a division.", "workingLatex": "\\dfrac{5^1}{5^1} = 5^{1-1}", "explanation": "Dividing any power by itself gives $5^0$ using the quotient rule.", "diagram": null },
        { "stepNumber": 3, "description": "Work out the same fraction directly.", "workingLatex": "\\dfrac{5}{5} = 1", "explanation": "But any non-zero number divided by itself is simply $1$.", "diagram": null },
        { "stepNumber": 4, "description": "Match the two results.", "workingLatex": "5^0 = 1", "explanation": "Since both sides describe the same fraction, $5^0$ must equal $1$.", "diagram": null },
        { "stepNumber": 5, "description": "State the zero-index rule.", "workingLatex": "a^0 = 1 \\quad (a \\neq 0)", "explanation": "Any non-zero base raised to the power $0$ equals $1$.", "diagram": null },
        { "stepNumber": 6, "description": "Write the final answer.", "workingLatex": "5^0 = 1", "explanation": "So the value of $5^0$ is $1$.", "diagram": null }
      ],
      "finalAnswer": "$1$"
    }
  },
  {
    "id": "gcse.number.integer-indices.q013",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Integer indices",
    "subtopicId": "gcse.number.integer-indices",
    "difficulty": "Easy",
    "marks": 1,
    "answerType": "numeric",
    "tags": ["zero index", "index laws", "evaluate"],
    "questionText": "Work out $12^0$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Read the power.", "workingLatex": "12^0", "explanation": "The base is $12$ and the index is $0$.", "diagram": null },
        { "stepNumber": 2, "description": "Recall the zero-index rule.", "workingLatex": "a^0 = 1 \\quad (a \\neq 0)", "explanation": "Any non-zero number raised to the power $0$ is $1$.", "diagram": null },
        { "stepNumber": 3, "description": "See why with a division.", "workingLatex": "12^0 = \\dfrac{12^3}{12^3} = 12^{3-3}", "explanation": "Dividing a power by itself uses the quotient rule to give the zero power.", "diagram": null },
        { "stepNumber": 4, "description": "Simplify the fraction.", "workingLatex": "\\dfrac{12^3}{12^3} = 1", "explanation": "Anything divided by itself equals $1$, which confirms the rule.", "diagram": null },
        { "stepNumber": 5, "description": "Apply it here.", "workingLatex": "12^0 = 1", "explanation": "The base being $12$ does not matter; the answer is still $1$.", "diagram": null },
        { "stepNumber": 6, "description": "Write the final answer.", "workingLatex": "12^0 = 1", "explanation": "So $12^0$ equals $1$.", "diagram": null }
      ],
      "finalAnswer": "$1$"
    }
  },
  {
    "id": "gcse.number.integer-indices.q014",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Integer indices",
    "subtopicId": "gcse.number.integer-indices",
    "difficulty": "Easy",
    "marks": 1,
    "answerType": "algebraic",
    "tags": ["zero index", "index laws", "simplify"],
    "questionText": "Simplify $y^0$, where $y \\neq 0$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Read the power.", "workingLatex": "y^0", "explanation": "The base is the letter $y$ and the index is $0$.", "diagram": null },
        { "stepNumber": 2, "description": "Write it as a division.", "workingLatex": "y^0 = \\dfrac{y^n}{y^n}", "explanation": "Using the quotient rule, subtracting an index from itself gives an index of $0$.", "diagram": null },
        { "stepNumber": 3, "description": "Simplify that fraction.", "workingLatex": "\\dfrac{y^n}{y^n} = 1", "explanation": "Any non-zero quantity divided by itself is $1$.", "diagram": null },
        { "stepNumber": 4, "description": "Conclude the value.", "workingLatex": "y^0 = 1", "explanation": "So the zero power of $y$ is $1$.", "diagram": null },
        { "stepNumber": 5, "description": "State the general rule.", "workingLatex": "a^0 = 1 \\quad (a \\neq 0)", "explanation": "Every non-zero base raised to the power $0$ equals $1$.", "diagram": null },
        { "stepNumber": 6, "description": "Write the final answer.", "workingLatex": "y^0 = 1", "explanation": "So $y^0$ simplifies to $1$.", "diagram": null }
      ],
      "finalAnswer": "$1$"
    }
  },
  {
    "id": "gcse.number.integer-indices.q015",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Integer indices",
    "subtopicId": "gcse.number.integer-indices",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "numeric",
    "tags": ["negative index", "reciprocal", "evaluate"],
    "questionText": "Work out $2^{-3}$. Give your answer as a fraction.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Read the power.", "workingLatex": "2^{-3}", "explanation": "The negative index tells us to take a reciprocal (one over the power).", "diagram": null },
        { "stepNumber": 2, "description": "Recall the negative-index rule.", "workingLatex": "a^{-n} = \\dfrac{1}{a^{n}}", "explanation": "A negative index flips the power into the denominator of a fraction.", "diagram": null },
        { "stepNumber": 3, "description": "Apply the rule.", "workingLatex": "2^{-3} = \\dfrac{1}{2^{3}}", "explanation": "The minus sign moves $2^3$ underneath a $1$.", "diagram": null },
        { "stepNumber": 4, "description": "Evaluate the positive power.", "workingLatex": "2^3 = 2 \\times 2 \\times 2 = 8", "explanation": "Three twos multiplied together give $8$.", "diagram": null },
        { "stepNumber": 5, "description": "Substitute back.", "workingLatex": "2^{-3} = \\dfrac{1}{8}", "explanation": "Putting $8$ in the denominator gives the final fraction.", "diagram": null },
        { "stepNumber": 6, "description": "State the final answer.", "workingLatex": "2^{-3} = \\dfrac{1}{8}", "explanation": "So $2^{-3}$ equals $\\tfrac{1}{8}$.", "diagram": null }
      ],
      "finalAnswer": "$\\dfrac{1}{8}$"
    }
  },
  {
    "id": "gcse.number.integer-indices.q016",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Integer indices",
    "subtopicId": "gcse.number.integer-indices",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "numeric",
    "tags": ["negative index", "reciprocal", "evaluate"],
    "questionText": "Work out $5^{-2}$. Give your answer as a fraction.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Read the power.", "workingLatex": "5^{-2}", "explanation": "The negative index means we will end up with a reciprocal.", "diagram": null },
        { "stepNumber": 2, "description": "Recall the negative-index rule.", "workingLatex": "a^{-n} = \\dfrac{1}{a^{n}}", "explanation": "A negative index turns the power into $1$ over the positive power.", "diagram": null },
        { "stepNumber": 3, "description": "Apply the rule.", "workingLatex": "5^{-2} = \\dfrac{1}{5^{2}}", "explanation": "The minus sign sends $5^2$ into the denominator.", "diagram": null },
        { "stepNumber": 4, "description": "Evaluate the positive power.", "workingLatex": "5^2 = 5 \\times 5 = 25", "explanation": "Squaring $5$ gives $25$.", "diagram": null },
        { "stepNumber": 5, "description": "Substitute back.", "workingLatex": "5^{-2} = \\dfrac{1}{25}", "explanation": "Placing $25$ in the denominator gives the fraction.", "diagram": null },
        { "stepNumber": 6, "description": "State the final answer.", "workingLatex": "5^{-2} = \\dfrac{1}{25}", "explanation": "So $5^{-2}$ equals $\\tfrac{1}{25}$.", "diagram": null }
      ],
      "finalAnswer": "$\\dfrac{1}{25}$"
    }
  },
  {
    "id": "gcse.number.integer-indices.q017",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Integer indices",
    "subtopicId": "gcse.number.integer-indices",
    "difficulty": "Easy",
    "marks": 1,
    "answerType": "numeric",
    "tags": ["negative index", "reciprocal", "evaluate"],
    "questionText": "Work out $10^{-1}$. Give your answer as a fraction.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Read the power.", "workingLatex": "10^{-1}", "explanation": "The index $-1$ means take the reciprocal of $10$.", "diagram": null },
        { "stepNumber": 2, "description": "Recall the negative-index rule.", "workingLatex": "a^{-n} = \\dfrac{1}{a^{n}}", "explanation": "A negative index flips the base into a fraction under $1$.", "diagram": null },
        { "stepNumber": 3, "description": "Apply the rule.", "workingLatex": "10^{-1} = \\dfrac{1}{10^{1}}", "explanation": "The minus sign moves $10^1$ into the denominator.", "diagram": null },
        { "stepNumber": 4, "description": "Simplify the power.", "workingLatex": "10^1 = 10", "explanation": "A power of $1$ leaves the base unchanged.", "diagram": null },
        { "stepNumber": 5, "description": "Substitute back.", "workingLatex": "10^{-1} = \\dfrac{1}{10}", "explanation": "So the reciprocal of $10$ is one tenth.", "diagram": null },
        { "stepNumber": 6, "description": "State the final answer.", "workingLatex": "10^{-1} = \\dfrac{1}{10}", "explanation": "So $10^{-1}$ equals $\\tfrac{1}{10}$.", "diagram": null }
      ],
      "finalAnswer": "$\\dfrac{1}{10}$"
    }
  },
  {
    "id": "gcse.number.integer-indices.q018",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Integer indices",
    "subtopicId": "gcse.number.integer-indices",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "numeric",
    "tags": ["negative index", "reciprocal", "evaluate"],
    "questionText": "Work out $3^{-2}$. Give your answer as a fraction.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Read the power.", "workingLatex": "3^{-2}", "explanation": "The negative index signals a reciprocal.", "diagram": null },
        { "stepNumber": 2, "description": "Recall the negative-index rule.", "workingLatex": "a^{-n} = \\dfrac{1}{a^{n}}", "explanation": "A negative index means one over the positive power.", "diagram": null },
        { "stepNumber": 3, "description": "Apply the rule.", "workingLatex": "3^{-2} = \\dfrac{1}{3^{2}}", "explanation": "The minus sign sends $3^2$ to the denominator.", "diagram": null },
        { "stepNumber": 4, "description": "Evaluate the positive power.", "workingLatex": "3^2 = 3 \\times 3 = 9", "explanation": "Squaring $3$ gives $9$.", "diagram": null },
        { "stepNumber": 5, "description": "Substitute back.", "workingLatex": "3^{-2} = \\dfrac{1}{9}", "explanation": "Placing $9$ underneath gives the fraction.", "diagram": null },
        { "stepNumber": 6, "description": "State the final answer.", "workingLatex": "3^{-2} = \\dfrac{1}{9}", "explanation": "So $3^{-2}$ equals $\\tfrac{1}{9}$.", "diagram": null }
      ],
      "finalAnswer": "$\\dfrac{1}{9}$"
    }
  },
  {
    "id": "gcse.number.integer-indices.q019",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Integer indices",
    "subtopicId": "gcse.number.integer-indices",
    "difficulty": "Easy",
    "marks": 1,
    "answerType": "algebraic",
    "tags": ["product rule", "index laws", "simplify"],
    "questionText": "Simplify $x^4 \\times x$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Write the hidden index.", "workingLatex": "x = x^1", "explanation": "A letter on its own has an index of $1$, which is easy to miss.", "diagram": null },
        { "stepNumber": 2, "description": "Rewrite the expression.", "workingLatex": "x^4 \\times x = x^4 \\times x^1", "explanation": "Showing the $1$ makes the product rule easier to apply.", "diagram": null },
        { "stepNumber": 3, "description": "Recall the product rule.", "workingLatex": "x^a \\times x^b = x^{a+b}", "explanation": "Same base, so we add the indices when multiplying.", "diagram": null },
        { "stepNumber": 4, "description": "Add the indices.", "workingLatex": "4 + 1 = 5", "explanation": "Four $x$ factors and one more make five.", "diagram": null },
        { "stepNumber": 5, "description": "Write the single power.", "workingLatex": "x^4 \\times x = x^5", "explanation": "The combined power holds all five factors.", "diagram": null },
        { "stepNumber": 6, "description": "State the final answer.", "workingLatex": "x^4 \\times x = x^5", "explanation": "So the simplified form is $x^5$.", "diagram": null }
      ],
      "finalAnswer": "$x^5$"
    }
  },
  {
    "id": "gcse.number.integer-indices.q020",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Integer indices",
    "subtopicId": "gcse.number.integer-indices",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "numeric",
    "tags": ["quotient rule", "zero index", "simplify"],
    "questionText": "Simplify $a^6 \\div a^6$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Write as a fraction.", "workingLatex": "a^6 \\div a^6 = \\dfrac{a^6}{a^6}", "explanation": "Writing the division as a fraction makes the cancelling clear.", "diagram": null },
        { "stepNumber": 2, "description": "Recall the quotient rule.", "workingLatex": "a^m \\div a^n = a^{m-n}", "explanation": "Dividing powers of the same base subtracts the indices.", "diagram": null },
        { "stepNumber": 3, "description": "Subtract the indices.", "workingLatex": "6 - 6 = 0", "explanation": "The indices are equal, so their difference is $0$.", "diagram": null },
        { "stepNumber": 4, "description": "Write the zero power.", "workingLatex": "a^6 \\div a^6 = a^0", "explanation": "The subtraction leaves an index of $0$.", "diagram": null },
        { "stepNumber": 5, "description": "Apply the zero-index rule.", "workingLatex": "a^0 = 1 \\quad (a \\neq 0)", "explanation": "Any non-zero base to the power $0$ equals $1$, which also matches a fraction dividing by itself.", "diagram": null },
        { "stepNumber": 6, "description": "State the final answer.", "workingLatex": "a^6 \\div a^6 = 1", "explanation": "So the expression simplifies to $1$.", "diagram": null }
      ],
      "finalAnswer": "$1$"
    }
  },
  {
    "id": "gcse.number.integer-indices.q021",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Integer indices",
    "subtopicId": "gcse.number.integer-indices",
    "difficulty": "Easy",
    "marks": 1,
    "answerType": "algebraic",
    "tags": ["product rule", "index laws", "simplify"],
    "questionText": "Simplify $b^3 \\times b^3$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Check the bases.", "workingLatex": "b^3 \\times b^3", "explanation": "Both powers use base $b$, so the product rule applies.", "diagram": null },
        { "stepNumber": 2, "description": "Recall the product rule.", "workingLatex": "b^a \\times b^c = b^{a+c}", "explanation": "Multiplying powers of the same base adds the indices.", "diagram": null },
        { "stepNumber": 3, "description": "Identify the indices.", "workingLatex": "a = 3, \\quad c = 3", "explanation": "Each power has three $b$ factors.", "diagram": null },
        { "stepNumber": 4, "description": "Add the indices.", "workingLatex": "3 + 3 = 6", "explanation": "Three factors plus three factors make six in total.", "diagram": null },
        { "stepNumber": 5, "description": "Write the single power.", "workingLatex": "b^3 \\times b^3 = b^6", "explanation": "The six factors combine into $b^6$.", "diagram": null },
        { "stepNumber": 6, "description": "State the final answer.", "workingLatex": "b^3 \\times b^3 = b^6", "explanation": "So the simplified form is $b^6$.", "diagram": null }
      ],
      "finalAnswer": "$b^6$"
    }
  },
  {
    "id": "gcse.number.integer-indices.q022",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Integer indices",
    "subtopicId": "gcse.number.integer-indices",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "numeric",
    "tags": ["quotient rule", "index laws", "numeric base"],
    "questionText": "Write $\\dfrac{4^5}{4^3}$ as a single power of $4$, then evaluate it.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Note the shared base.", "workingLatex": "\\dfrac{4^5}{4^3}", "explanation": "Both powers use base $4$, so we can subtract indices.", "diagram": null },
        { "stepNumber": 2, "description": "Recall the quotient rule.", "workingLatex": "4^m \\div 4^n = 4^{m-n}", "explanation": "Dividing powers of the same base subtracts the indices.", "diagram": null },
        { "stepNumber": 3, "description": "Subtract the indices.", "workingLatex": "5 - 3 = 2", "explanation": "Three of the five fours cancel, leaving two.", "diagram": null },
        { "stepNumber": 4, "description": "Write as a single power.", "workingLatex": "\\dfrac{4^5}{4^3} = 4^2", "explanation": "The two remaining factors make $4^2$.", "diagram": null },
        { "stepNumber": 5, "description": "Evaluate the power.", "workingLatex": "4^2 = 4 \\times 4 = 16", "explanation": "Squaring $4$ gives $16$.", "diagram": null },
        { "stepNumber": 6, "description": "State the final answer.", "workingLatex": "\\dfrac{4^5}{4^3} = 4^2 = 16", "explanation": "So the single power is $4^2$, which equals $16$.", "diagram": null }
      ],
      "finalAnswer": "$4^2 = 16$"
    }
  },
  {
    "id": "gcse.number.integer-indices.q023",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Integer indices",
    "subtopicId": "gcse.number.integer-indices",
    "difficulty": "Easy",
    "marks": 1,
    "answerType": "algebraic",
    "tags": ["power of a power", "index laws", "simplify"],
    "questionText": "Simplify $(m^3)^3$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Read the expression.", "workingLatex": "(m^3)^3", "explanation": "The outer index $3$ means the bracket $m^3$ is used as a factor three times.", "diagram": null },
        { "stepNumber": 2, "description": "Recall the power rule.", "workingLatex": "(m^a)^b = m^{a \\times b}", "explanation": "A power raised to a power multiplies the indices.", "diagram": null },
        { "stepNumber": 3, "description": "Identify the indices.", "workingLatex": "a = 3, \\quad b = 3", "explanation": "The inner index and the outer index are both $3$.", "diagram": null },
        { "stepNumber": 4, "description": "Multiply the indices.", "workingLatex": "3 \\times 3 = 9", "explanation": "Multiplying the two threes gives nine.", "diagram": null },
        { "stepNumber": 5, "description": "Write the single power.", "workingLatex": "(m^3)^3 = m^9", "explanation": "The nine factors of $m$ combine into $m^9$.", "diagram": null },
        { "stepNumber": 6, "description": "State the final answer.", "workingLatex": "(m^3)^3 = m^9", "explanation": "So the simplified form is $m^9$.", "diagram": null }
      ],
      "finalAnswer": "$m^9$"
    }
  },
  {
    "id": "gcse.number.integer-indices.q024",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Integer indices",
    "subtopicId": "gcse.number.integer-indices",
    "difficulty": "Easy",
    "marks": 1,
    "answerType": "numeric",
    "tags": ["negative index", "reciprocal", "evaluate"],
    "questionText": "Work out $4^{-1}$. Give your answer as a fraction.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Read the power.", "workingLatex": "4^{-1}", "explanation": "The index $-1$ means take the reciprocal of $4$.", "diagram": null },
        { "stepNumber": 2, "description": "Recall the negative-index rule.", "workingLatex": "a^{-n} = \\dfrac{1}{a^{n}}", "explanation": "A negative index puts the base into the denominator under a $1$.", "diagram": null },
        { "stepNumber": 3, "description": "Apply the rule.", "workingLatex": "4^{-1} = \\dfrac{1}{4^{1}}", "explanation": "The minus sign moves $4^1$ underneath a $1$.", "diagram": null },
        { "stepNumber": 4, "description": "Simplify the power.", "workingLatex": "4^1 = 4", "explanation": "A power of $1$ leaves the base unchanged.", "diagram": null },
        { "stepNumber": 5, "description": "Substitute back.", "workingLatex": "4^{-1} = \\dfrac{1}{4}", "explanation": "So the reciprocal of $4$ is one quarter.", "diagram": null },
        { "stepNumber": 6, "description": "State the final answer.", "workingLatex": "4^{-1} = \\dfrac{1}{4}", "explanation": "So $4^{-1}$ equals $\\tfrac{1}{4}$.", "diagram": null }
      ],
      "finalAnswer": "$\\dfrac{1}{4}$"
    }
  },
  {
    "id": "gcse.number.integer-indices.q025",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Integer indices",
    "subtopicId": "gcse.number.integer-indices",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "numeric",
    "tags": ["product rule", "quotient rule", "numeric base"],
    "questionText": "Write $\\dfrac{2^5 \\times 2^2}{2^3}$ as a single power of $2$, then evaluate it.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Look at the whole expression.", "workingLatex": "\\dfrac{2^5 \\times 2^2}{2^3}", "explanation": "Every power has base $2$, so we can combine them all with the index laws.", "diagram": null },
        { "stepNumber": 2, "description": "Deal with the top first.", "workingLatex": "2^5 \\times 2^2 = 2^{5+2}", "explanation": "Multiplying powers of the same base adds the indices.", "diagram": null },
        { "stepNumber": 3, "description": "Add the top indices.", "workingLatex": "5 + 2 = 7", "explanation": "So the numerator becomes a single power.", "diagram": null },
        { "stepNumber": 4, "description": "Rewrite the fraction.", "workingLatex": "\\dfrac{2^7}{2^3}", "explanation": "Now there is one power on top and one on the bottom.", "diagram": null },
        { "stepNumber": 5, "description": "Recall the quotient rule.", "workingLatex": "2^m \\div 2^n = 2^{m-n}", "explanation": "Dividing powers of the same base subtracts the indices.", "diagram": null },
        { "stepNumber": 6, "description": "Subtract the indices.", "workingLatex": "7 - 3 = 4", "explanation": "Three of the seven twos cancel with the bottom.", "diagram": null },
        { "stepNumber": 7, "description": "Write as a single power.", "workingLatex": "\\dfrac{2^5 \\times 2^2}{2^3} = 2^4", "explanation": "The remaining four factors form $2^4$.", "diagram": null },
        { "stepNumber": 8, "description": "Evaluate the power.", "workingLatex": "2^4 = 2 \\times 2 \\times 2 \\times 2 = 16", "explanation": "Multiplying four twos together gives $16$.", "diagram": null },
        { "stepNumber": 9, "description": "State the final answer.", "workingLatex": "\\dfrac{2^5 \\times 2^2}{2^3} = 2^4 = 16", "explanation": "So the single power is $2^4$, which equals $16$.", "diagram": null }
      ],
      "finalAnswer": "$2^4 = 16$"
    }
  },
  {
    "id": "gcse.number.integer-indices.q026",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Integer indices",
    "subtopicId": "gcse.number.integer-indices",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "numeric",
    "tags": ["product rule", "quotient rule", "numeric base"],
    "questionText": "Write $\\dfrac{3^4 \\times 3^3}{3^2}$ as a single power of $3$, then evaluate it.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Look at the expression.", "workingLatex": "\\dfrac{3^4 \\times 3^3}{3^2}", "explanation": "All the powers have base $3$, so the index laws apply throughout.", "diagram": null },
        { "stepNumber": 2, "description": "Combine the numerator.", "workingLatex": "3^4 \\times 3^3 = 3^{4+3}", "explanation": "Multiplying like bases adds the indices.", "diagram": null },
        { "stepNumber": 3, "description": "Add the top indices.", "workingLatex": "4 + 3 = 7", "explanation": "The numerator becomes a single power $3^7$.", "diagram": null },
        { "stepNumber": 4, "description": "Rewrite the fraction.", "workingLatex": "\\dfrac{3^7}{3^2}", "explanation": "Now the whole thing is one power over another.", "diagram": null },
        { "stepNumber": 5, "description": "Recall the quotient rule.", "workingLatex": "3^m \\div 3^n = 3^{m-n}", "explanation": "Dividing like bases subtracts the indices.", "diagram": null },
        { "stepNumber": 6, "description": "Subtract the indices.", "workingLatex": "7 - 2 = 5", "explanation": "Two threes cancel, leaving five on top.", "diagram": null },
        { "stepNumber": 7, "description": "Write as a single power.", "workingLatex": "\\dfrac{3^4 \\times 3^3}{3^2} = 3^5", "explanation": "The surviving factors form $3^5$.", "diagram": null },
        { "stepNumber": 8, "description": "Evaluate the power.", "workingLatex": "3^5 = 3 \\times 3 \\times 3 \\times 3 \\times 3", "explanation": "To find the value we multiply five threes together.", "diagram": null },
        { "stepNumber": 9, "description": "Work out the number.", "workingLatex": "3^5 = 243", "explanation": "Building up: $9$, $27$, $81$, $243$.", "diagram": null },
        { "stepNumber": 10, "description": "State the final answer.", "workingLatex": "\\dfrac{3^4 \\times 3^3}{3^2} = 3^5 = 243", "explanation": "So the single power is $3^5$, which equals $243$.", "diagram": null }
      ],
      "finalAnswer": "$3^5 = 243$"
    }
  },
  {
    "id": "gcse.number.integer-indices.q027",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Integer indices",
    "subtopicId": "gcse.number.integer-indices",
    "difficulty": "Intermediate",
    "marks": 2,
    "answerType": "algebraic",
    "tags": ["product rule", "index laws", "simplify"],
    "questionText": "Simplify $x^3 \\times x^2 \\times x^4$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Check the bases.", "workingLatex": "x^3 \\times x^2 \\times x^4", "explanation": "All three powers share the base $x$, so the product rule applies across all of them.", "diagram": null },
        { "stepNumber": 2, "description": "Recall the product rule.", "workingLatex": "x^a \\times x^b = x^{a+b}", "explanation": "Multiplying like bases adds the indices, and this extends to any number of powers.", "diagram": null },
        { "stepNumber": 3, "description": "Combine the first two.", "workingLatex": "x^3 \\times x^2 = x^{3+2} = x^5", "explanation": "Start with the first pair to keep the working tidy.", "diagram": null },
        { "stepNumber": 4, "description": "Bring in the third power.", "workingLatex": "x^5 \\times x^4 = x^{5+4}", "explanation": "Now multiply that result by the remaining power, adding indices again.", "diagram": null },
        { "stepNumber": 5, "description": "Add the indices.", "workingLatex": "5 + 4 = 9", "explanation": "This is the same as adding all three original indices $3 + 2 + 4$.", "diagram": null },
        { "stepNumber": 6, "description": "Write the single power.", "workingLatex": "x^3 \\times x^2 \\times x^4 = x^9", "explanation": "All nine factors of $x$ combine into one power.", "diagram": null },
        { "stepNumber": 7, "description": "Sense-check the total.", "workingLatex": "3 + 2 + 4 = 9", "explanation": "Adding the three indices directly confirms the index of $9$.", "diagram": null },
        { "stepNumber": 8, "description": "State the final answer.", "workingLatex": "x^3 \\times x^2 \\times x^4 = x^9", "explanation": "So the simplified form is $x^9$.", "diagram": null },
        { "stepNumber": 9, "description": "Reflect on the method.", "workingLatex": "x^{3+2+4} = x^9", "explanation": "For a chain of multiplications we can simply add every index at once.", "diagram": null }
      ],
      "finalAnswer": "$x^9$"
    }
  },
  {
    "id": "gcse.number.integer-indices.q028",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Integer indices",
    "subtopicId": "gcse.number.integer-indices",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "algebraic",
    "tags": ["product rule", "quotient rule", "simplify"],
    "questionText": "Simplify $\\dfrac{x^7 \\times x^2}{x^5}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Look at the expression.", "workingLatex": "\\dfrac{x^7 \\times x^2}{x^5}", "explanation": "Every power uses base $x$, so we combine them with the index laws.", "diagram": null },
        { "stepNumber": 2, "description": "Simplify the numerator.", "workingLatex": "x^7 \\times x^2 = x^{7+2}", "explanation": "Multiplying like bases adds the indices.", "diagram": null },
        { "stepNumber": 3, "description": "Add the top indices.", "workingLatex": "7 + 2 = 9", "explanation": "So the numerator becomes $x^9$.", "diagram": null },
        { "stepNumber": 4, "description": "Rewrite the fraction.", "workingLatex": "\\dfrac{x^9}{x^5}", "explanation": "Now there is a single power on top and bottom.", "diagram": null },
        { "stepNumber": 5, "description": "Recall the quotient rule.", "workingLatex": "x^m \\div x^n = x^{m-n}", "explanation": "Dividing like bases subtracts the indices.", "diagram": null },
        { "stepNumber": 6, "description": "Subtract the indices.", "workingLatex": "9 - 5 = 4", "explanation": "Five $x$ factors cancel, leaving four.", "diagram": null },
        { "stepNumber": 7, "description": "Write the single power.", "workingLatex": "\\dfrac{x^7 \\times x^2}{x^5} = x^4", "explanation": "The remaining four factors form $x^4$.", "diagram": null },
        { "stepNumber": 8, "description": "Check with a one-line count.", "workingLatex": "7 + 2 - 5 = 4", "explanation": "Adding the top indices and subtracting the bottom gives the same result.", "diagram": null },
        { "stepNumber": 9, "description": "State the final answer.", "workingLatex": "\\dfrac{x^7 \\times x^2}{x^5} = x^4", "explanation": "So the simplified form is $x^4$.", "diagram": null }
      ],
      "finalAnswer": "$x^4$"
    }
  },
  {
    "id": "gcse.number.integer-indices.q029",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Integer indices",
    "subtopicId": "gcse.number.integer-indices",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "numeric",
    "tags": ["negative index", "reciprocal", "evaluate"],
    "questionText": "Work out $2^{-4}$. Give your answer as a fraction.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Read the power.", "workingLatex": "2^{-4}", "explanation": "The negative index means the answer will be a reciprocal fraction less than $1$.", "diagram": null },
        { "stepNumber": 2, "description": "Recall the negative-index rule.", "workingLatex": "a^{-n} = \\dfrac{1}{a^{n}}", "explanation": "A negative index flips the power into the denominator under a $1$.", "diagram": null },
        { "stepNumber": 3, "description": "Apply the rule.", "workingLatex": "2^{-4} = \\dfrac{1}{2^{4}}", "explanation": "The minus sign sends $2^4$ to the denominator.", "diagram": null },
        { "stepNumber": 4, "description": "Start evaluating the power.", "workingLatex": "2^4 = 2 \\times 2 \\times 2 \\times 2", "explanation": "We work out the positive power that now sits underneath.", "diagram": null },
        { "stepNumber": 5, "description": "Multiply step by step.", "workingLatex": "2 \\times 2 = 4, \\quad 4 \\times 2 = 8", "explanation": "Building the product up carefully avoids mistakes.", "diagram": null },
        { "stepNumber": 6, "description": "Finish the power.", "workingLatex": "8 \\times 2 = 16", "explanation": "So $2^4 = 16$.", "diagram": null },
        { "stepNumber": 7, "description": "Substitute back.", "workingLatex": "2^{-4} = \\dfrac{1}{16}", "explanation": "Placing $16$ in the denominator gives the fraction.", "diagram": null },
        { "stepNumber": 8, "description": "Sense-check the size.", "workingLatex": "0 < \\dfrac{1}{16} < 1", "explanation": "A negative power of a number bigger than $1$ should give a small positive fraction, which it does.", "diagram": null },
        { "stepNumber": 9, "description": "State the final answer.", "workingLatex": "2^{-4} = \\dfrac{1}{16}", "explanation": "So $2^{-4}$ equals $\\tfrac{1}{16}$.", "diagram": null }
      ],
      "finalAnswer": "$\\dfrac{1}{16}$"
    }
  },
  {
    "id": "gcse.number.integer-indices.q030",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Integer indices",
    "subtopicId": "gcse.number.integer-indices",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "algebraic",
    "tags": ["power of a power", "product rule", "simplify"],
    "questionText": "Simplify $(x^2)^3 \\times x^4$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Look at the expression.", "workingLatex": "(x^2)^3 \\times x^4", "explanation": "There is a power of a power to sort out first, then a multiplication.", "diagram": null },
        { "stepNumber": 2, "description": "Deal with the bracket.", "workingLatex": "(x^2)^3 = x^{2 \\times 3}", "explanation": "A power raised to a power multiplies the indices.", "diagram": null },
        { "stepNumber": 3, "description": "Multiply those indices.", "workingLatex": "2 \\times 3 = 6", "explanation": "So the bracket simplifies to $x^6$.", "diagram": null },
        { "stepNumber": 4, "description": "Rewrite the expression.", "workingLatex": "x^6 \\times x^4", "explanation": "Now we have a straightforward product of two powers.", "diagram": null },
        { "stepNumber": 5, "description": "Recall the product rule.", "workingLatex": "x^a \\times x^b = x^{a+b}", "explanation": "Multiplying like bases adds the indices.", "diagram": null },
        { "stepNumber": 6, "description": "Add the indices.", "workingLatex": "6 + 4 = 10", "explanation": "Combining the six and four factors gives ten.", "diagram": null },
        { "stepNumber": 7, "description": "Write the single power.", "workingLatex": "(x^2)^3 \\times x^4 = x^{10}", "explanation": "All ten factors of $x$ combine into one power.", "diagram": null },
        { "stepNumber": 8, "description": "State the final answer.", "workingLatex": "(x^2)^3 \\times x^4 = x^{10}", "explanation": "So the simplified form is $x^{10}$.", "diagram": null },
        { "stepNumber": 9, "description": "Note the order of operations.", "workingLatex": "\\text{power of a power, then multiply}", "explanation": "Simplifying the bracket before multiplying keeps the working clear and correct.", "diagram": null }
      ],
      "finalAnswer": "$x^{10}$"
    }
  },
  {
    "id": "gcse.number.integer-indices.q031",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Integer indices",
    "subtopicId": "gcse.number.integer-indices",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "algebraic",
    "tags": ["product rule", "quotient rule", "simplify"],
    "questionText": "Simplify $\\dfrac{a^9}{a^3 \\times a^2}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Look at the expression.", "workingLatex": "\\dfrac{a^9}{a^3 \\times a^2}", "explanation": "Every power uses base $a$, so we simplify the bottom first, then divide.", "diagram": null },
        { "stepNumber": 2, "description": "Simplify the denominator.", "workingLatex": "a^3 \\times a^2 = a^{3+2}", "explanation": "Multiplying like bases adds the indices.", "diagram": null },
        { "stepNumber": 3, "description": "Add the bottom indices.", "workingLatex": "3 + 2 = 5", "explanation": "So the denominator becomes $a^5$.", "diagram": null },
        { "stepNumber": 4, "description": "Rewrite the fraction.", "workingLatex": "\\dfrac{a^9}{a^5}", "explanation": "Now there is one power on top and one on the bottom.", "diagram": null },
        { "stepNumber": 5, "description": "Recall the quotient rule.", "workingLatex": "a^m \\div a^n = a^{m-n}", "explanation": "Dividing like bases subtracts the indices.", "diagram": null },
        { "stepNumber": 6, "description": "Subtract the indices.", "workingLatex": "9 - 5 = 4", "explanation": "Five of the nine $a$ factors cancel.", "diagram": null },
        { "stepNumber": 7, "description": "Write the single power.", "workingLatex": "\\dfrac{a^9}{a^3 \\times a^2} = a^4", "explanation": "The four surviving factors form $a^4$.", "diagram": null },
        { "stepNumber": 8, "description": "Check in one line.", "workingLatex": "9 - (3 + 2) = 4", "explanation": "Subtracting the total bottom index from the top gives the same answer.", "diagram": null },
        { "stepNumber": 9, "description": "State the final answer.", "workingLatex": "\\dfrac{a^9}{a^3 \\times a^2} = a^4", "explanation": "So the simplified form is $a^4$.", "diagram": null }
      ],
      "finalAnswer": "$a^4$"
    }
  },
  {
    "id": "gcse.number.integer-indices.q032",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Integer indices",
    "subtopicId": "gcse.number.integer-indices",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "numeric",
    "tags": ["power of a power", "numeric base", "evaluate"],
    "questionText": "Write $(2^2)^3$ as a single power of $2$, then evaluate it.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Read the expression.", "workingLatex": "(2^2)^3", "explanation": "The outer index $3$ means the bracket $2^2$ is used as a factor three times.", "diagram": null },
        { "stepNumber": 2, "description": "Recall the power rule.", "workingLatex": "(2^a)^b = 2^{a \\times b}", "explanation": "A power raised to a power multiplies the two indices.", "diagram": null },
        { "stepNumber": 3, "description": "Multiply the indices.", "workingLatex": "2 \\times 3 = 6", "explanation": "The inner $2$ and outer $3$ combine by multiplication.", "diagram": null },
        { "stepNumber": 4, "description": "Write as a single power.", "workingLatex": "(2^2)^3 = 2^6", "explanation": "All six factors of $2$ collect into one power.", "diagram": null },
        { "stepNumber": 5, "description": "Check by another route.", "workingLatex": "(2^2)^3 = 4^3", "explanation": "Since $2^2 = 4$, the bracket is $4^3$, which should give the same value.", "diagram": null },
        { "stepNumber": 6, "description": "Evaluate that route.", "workingLatex": "4^3 = 4 \\times 4 \\times 4 = 64", "explanation": "Working out $4^3$ gives $64$.", "diagram": null },
        { "stepNumber": 7, "description": "Evaluate the single power.", "workingLatex": "2^6 = 64", "explanation": "Multiplying six twos also gives $64$, confirming the two routes agree.", "diagram": null },
        { "stepNumber": 8, "description": "State the single power and value.", "workingLatex": "(2^2)^3 = 2^6 = 64", "explanation": "So the single power is $2^6$, which equals $64$.", "diagram": null },
        { "stepNumber": 9, "description": "Reflect on the two routes.", "workingLatex": "2^6 = 4^3 = 64", "explanation": "Both the index-law route and the $4^3$ route reach $64$, which is reassuring.", "diagram": null }
      ],
      "finalAnswer": "$2^6 = 64$"
    }
  },
  {
    "id": "gcse.number.integer-indices.q033",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Integer indices",
    "subtopicId": "gcse.number.integer-indices",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "numeric",
    "tags": ["product rule", "negative index", "evaluate"],
    "questionText": "Work out $5^3 \\times 5^{-1}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Check the bases.", "workingLatex": "5^3 \\times 5^{-1}", "explanation": "Both powers use base $5$, so we can add the indices even though one is negative.", "diagram": null },
        { "stepNumber": 2, "description": "Recall the product rule.", "workingLatex": "5^a \\times 5^b = 5^{a+b}", "explanation": "Multiplying like bases adds the indices, and this still works with negative indices.", "diagram": null },
        { "stepNumber": 3, "description": "Add the indices.", "workingLatex": "3 + (-1) = 2", "explanation": "Adding a negative index is the same as subtracting, giving $2$.", "diagram": null },
        { "stepNumber": 4, "description": "Write as a single power.", "workingLatex": "5^3 \\times 5^{-1} = 5^2", "explanation": "The combined index is $2$.", "diagram": null },
        { "stepNumber": 5, "description": "Evaluate the power.", "workingLatex": "5^2 = 5 \\times 5 = 25", "explanation": "Squaring $5$ gives $25$.", "diagram": null },
        { "stepNumber": 6, "description": "Check with the reciprocal meaning.", "workingLatex": "5^{-1} = \\dfrac{1}{5}", "explanation": "The negative power is really one fifth, so we are computing $125 \\times \\tfrac{1}{5}$.", "diagram": null },
        { "stepNumber": 7, "description": "Confirm the value.", "workingLatex": "125 \\times \\dfrac{1}{5} = 25", "explanation": "This matches the answer found with the index laws.", "diagram": null },
        { "stepNumber": 8, "description": "State the final answer.", "workingLatex": "5^3 \\times 5^{-1} = 25", "explanation": "So the value is $25$.", "diagram": null },
        { "stepNumber": 9, "description": "Reflect on the idea.", "workingLatex": "5^3 \\times 5^{-1} = 5^{2}", "explanation": "A negative index simply reduces the total index when multiplying.", "diagram": null }
      ],
      "finalAnswer": "$25$"
    }
  },
  {
    "id": "gcse.number.integer-indices.q034",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Integer indices",
    "subtopicId": "gcse.number.integer-indices",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "numeric",
    "tags": ["quotient rule", "negative index", "evaluate"],
    "questionText": "Write $\\dfrac{10^4}{10^6}$ as a power of $10$, then as a fraction.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Note the shared base.", "workingLatex": "\\dfrac{10^4}{10^6}", "explanation": "Both powers use base $10$, so the quotient rule applies.", "diagram": null },
        { "stepNumber": 2, "description": "Recall the quotient rule.", "workingLatex": "10^m \\div 10^n = 10^{m-n}", "explanation": "Dividing like bases subtracts the indices.", "diagram": null },
        { "stepNumber": 3, "description": "Subtract the indices.", "workingLatex": "4 - 6 = -2", "explanation": "The bottom index is larger, so the result is a negative index.", "diagram": null },
        { "stepNumber": 4, "description": "Write as a power.", "workingLatex": "\\dfrac{10^4}{10^6} = 10^{-2}", "explanation": "A negative index shows there are more factors on the bottom than the top.", "diagram": null },
        { "stepNumber": 5, "description": "Recall the negative-index rule.", "workingLatex": "10^{-n} = \\dfrac{1}{10^{n}}", "explanation": "A negative index becomes a reciprocal.", "diagram": null },
        { "stepNumber": 6, "description": "Apply it.", "workingLatex": "10^{-2} = \\dfrac{1}{10^{2}}", "explanation": "The power moves into the denominator under a $1$.", "diagram": null },
        { "stepNumber": 7, "description": "Evaluate the denominator.", "workingLatex": "10^2 = 100", "explanation": "Squaring $10$ gives $100$.", "diagram": null },
        { "stepNumber": 8, "description": "Write the fraction.", "workingLatex": "\\dfrac{10^4}{10^6} = \\dfrac{1}{100}", "explanation": "So the value is one hundredth.", "diagram": null },
        { "stepNumber": 9, "description": "State the final answer.", "workingLatex": "\\dfrac{10^4}{10^6} = 10^{-2} = \\dfrac{1}{100}", "explanation": "So the power is $10^{-2}$, which equals $\\tfrac{1}{100}$.", "diagram": null }
      ],
      "finalAnswer": "$10^{-2} = \\dfrac{1}{100}$"
    }
  },
  {
    "id": "gcse.number.integer-indices.q035",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Integer indices",
    "subtopicId": "gcse.number.integer-indices",
    "difficulty": "Intermediate",
    "marks": 2,
    "answerType": "numeric",
    "tags": ["quotient rule", "numeric base", "evaluate"],
    "questionText": "Write $2^6 \\div 2^2$ as a single power of $2$, then evaluate it.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Note the shared base.", "workingLatex": "2^6 \\div 2^2", "explanation": "Both powers use base $2$, so the quotient rule applies.", "diagram": null },
        { "stepNumber": 2, "description": "Recall the quotient rule.", "workingLatex": "2^m \\div 2^n = 2^{m-n}", "explanation": "Dividing like bases subtracts the indices.", "diagram": null },
        { "stepNumber": 3, "description": "Subtract the indices.", "workingLatex": "6 - 2 = 4", "explanation": "Two of the six twos cancel, leaving four.", "diagram": null },
        { "stepNumber": 4, "description": "Write as a single power.", "workingLatex": "2^6 \\div 2^2 = 2^4", "explanation": "The remaining factors form $2^4$.", "diagram": null },
        { "stepNumber": 5, "description": "Evaluate the power.", "workingLatex": "2^4 = 16", "explanation": "Multiplying four twos gives $16$.", "diagram": null },
        { "stepNumber": 6, "description": "Check the other way.", "workingLatex": "2^6 = 64, \\quad 2^2 = 4", "explanation": "Working out each power separately gives $64$ and $4$.", "diagram": null },
        { "stepNumber": 7, "description": "Divide directly.", "workingLatex": "64 \\div 4 = 16", "explanation": "This matches the answer from the index laws.", "diagram": null },
        { "stepNumber": 8, "description": "State the final answer.", "workingLatex": "2^6 \\div 2^2 = 2^4 = 16", "explanation": "So the single power is $2^4$, which equals $16$.", "diagram": null },
        { "stepNumber": 9, "description": "Reflect on the shortcut.", "workingLatex": "\\text{subtracting indices is quicker than dividing large numbers}", "explanation": "The index law avoids working with big values like $64$.", "diagram": null }
      ],
      "finalAnswer": "$2^4 = 16$"
    }
  },
  {
    "id": "gcse.number.integer-indices.q036",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Integer indices",
    "subtopicId": "gcse.number.integer-indices",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "algebraic",
    "tags": ["power of a power", "quotient rule", "simplify"],
    "questionText": "Simplify $(x^3)^2 \\div x^4$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Look at the expression.", "workingLatex": "(x^3)^2 \\div x^4", "explanation": "First simplify the power of a power, then divide.", "diagram": null },
        { "stepNumber": 2, "description": "Deal with the bracket.", "workingLatex": "(x^3)^2 = x^{3 \\times 2}", "explanation": "A power raised to a power multiplies the indices.", "diagram": null },
        { "stepNumber": 3, "description": "Multiply the indices.", "workingLatex": "3 \\times 2 = 6", "explanation": "So the bracket becomes $x^6$.", "diagram": null },
        { "stepNumber": 4, "description": "Rewrite the expression.", "workingLatex": "x^6 \\div x^4", "explanation": "Now we have a simple division of two powers.", "diagram": null },
        { "stepNumber": 5, "description": "Recall the quotient rule.", "workingLatex": "x^m \\div x^n = x^{m-n}", "explanation": "Dividing like bases subtracts the indices.", "diagram": null },
        { "stepNumber": 6, "description": "Subtract the indices.", "workingLatex": "6 - 4 = 2", "explanation": "Four $x$ factors cancel, leaving two.", "diagram": null },
        { "stepNumber": 7, "description": "Write the single power.", "workingLatex": "(x^3)^2 \\div x^4 = x^2", "explanation": "The remaining factors form $x^2$.", "diagram": null },
        { "stepNumber": 8, "description": "State the final answer.", "workingLatex": "(x^3)^2 \\div x^4 = x^2", "explanation": "So the simplified form is $x^2$.", "diagram": null },
        { "stepNumber": 9, "description": "Note the order.", "workingLatex": "\\text{brackets first, then divide}", "explanation": "Handling the power of a power before dividing keeps each index law separate and clear.", "diagram": null }
      ],
      "finalAnswer": "$x^2$"
    }
  },
  {
    "id": "gcse.number.integer-indices.q037",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Integer indices",
    "subtopicId": "gcse.number.integer-indices",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "algebraic",
    "tags": ["product rule", "quotient rule", "simplify"],
    "questionText": "Simplify $\\dfrac{y^5 \\times y^3}{y^2}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Look at the expression.", "workingLatex": "\\dfrac{y^5 \\times y^3}{y^2}", "explanation": "Every power uses base $y$, so the index laws apply throughout.", "diagram": null },
        { "stepNumber": 2, "description": "Simplify the numerator.", "workingLatex": "y^5 \\times y^3 = y^{5+3}", "explanation": "Multiplying like bases adds the indices.", "diagram": null },
        { "stepNumber": 3, "description": "Add the top indices.", "workingLatex": "5 + 3 = 8", "explanation": "So the numerator becomes $y^8$.", "diagram": null },
        { "stepNumber": 4, "description": "Rewrite the fraction.", "workingLatex": "\\dfrac{y^8}{y^2}", "explanation": "Now the expression is one power over another.", "diagram": null },
        { "stepNumber": 5, "description": "Recall the quotient rule.", "workingLatex": "y^m \\div y^n = y^{m-n}", "explanation": "Dividing like bases subtracts the indices.", "diagram": null },
        { "stepNumber": 6, "description": "Subtract the indices.", "workingLatex": "8 - 2 = 6", "explanation": "Two $y$ factors cancel, leaving six.", "diagram": null },
        { "stepNumber": 7, "description": "Write the single power.", "workingLatex": "\\dfrac{y^5 \\times y^3}{y^2} = y^6", "explanation": "The surviving factors form $y^6$.", "diagram": null },
        { "stepNumber": 8, "description": "Check in one line.", "workingLatex": "5 + 3 - 2 = 6", "explanation": "Adding the top indices and subtracting the bottom gives the same answer.", "diagram": null },
        { "stepNumber": 9, "description": "State the final answer.", "workingLatex": "\\dfrac{y^5 \\times y^3}{y^2} = y^6", "explanation": "So the simplified form is $y^6$.", "diagram": null }
      ],
      "finalAnswer": "$y^6$"
    }
  },
  {
    "id": "gcse.number.integer-indices.q038",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Integer indices",
    "subtopicId": "gcse.number.integer-indices",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "numeric",
    "tags": ["product rule", "negative index", "evaluate"],
    "questionText": "Work out $3^2 \\times 3^{-4}$. Give your answer as a fraction.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Check the bases.", "workingLatex": "3^2 \\times 3^{-4}", "explanation": "Both powers use base $3$, so we add the indices even though one is negative.", "diagram": null },
        { "stepNumber": 2, "description": "Recall the product rule.", "workingLatex": "3^a \\times 3^b = 3^{a+b}", "explanation": "Multiplying like bases adds the indices.", "diagram": null },
        { "stepNumber": 3, "description": "Add the indices.", "workingLatex": "2 + (-4) = -2", "explanation": "Adding a negative index reduces the total, giving $-2$.", "diagram": null },
        { "stepNumber": 4, "description": "Write as a single power.", "workingLatex": "3^2 \\times 3^{-4} = 3^{-2}", "explanation": "The combined index is negative, so the answer is a fraction.", "diagram": null },
        { "stepNumber": 5, "description": "Recall the negative-index rule.", "workingLatex": "3^{-n} = \\dfrac{1}{3^{n}}", "explanation": "A negative index becomes a reciprocal.", "diagram": null },
        { "stepNumber": 6, "description": "Apply it.", "workingLatex": "3^{-2} = \\dfrac{1}{3^{2}}", "explanation": "The power moves into the denominator under a $1$.", "diagram": null },
        { "stepNumber": 7, "description": "Evaluate the denominator.", "workingLatex": "3^2 = 9", "explanation": "Squaring $3$ gives $9$.", "diagram": null },
        { "stepNumber": 8, "description": "Write the fraction.", "workingLatex": "3^2 \\times 3^{-4} = \\dfrac{1}{9}", "explanation": "So the value is one ninth.", "diagram": null },
        { "stepNumber": 9, "description": "State the final answer.", "workingLatex": "3^2 \\times 3^{-4} = 3^{-2} = \\dfrac{1}{9}", "explanation": "So the answer is $\\tfrac{1}{9}$.", "diagram": null }
      ],
      "finalAnswer": "$\\dfrac{1}{9}$"
    }
  },
  {
    "id": "gcse.number.integer-indices.q039",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Integer indices",
    "subtopicId": "gcse.number.integer-indices",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "numeric",
    "tags": ["product rule", "quotient rule", "evaluate"],
    "questionText": "Write $\\dfrac{6^3 \\times 6^2}{6^4}$ as a single power of $6$, then evaluate it.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Look at the expression.", "workingLatex": "\\dfrac{6^3 \\times 6^2}{6^4}", "explanation": "All powers use base $6$, so we combine them with the index laws.", "diagram": null },
        { "stepNumber": 2, "description": "Simplify the numerator.", "workingLatex": "6^3 \\times 6^2 = 6^{3+2}", "explanation": "Multiplying like bases adds the indices.", "diagram": null },
        { "stepNumber": 3, "description": "Add the top indices.", "workingLatex": "3 + 2 = 5", "explanation": "So the numerator becomes $6^5$.", "diagram": null },
        { "stepNumber": 4, "description": "Rewrite the fraction.", "workingLatex": "\\dfrac{6^5}{6^4}", "explanation": "Now there is one power on top and one on the bottom.", "diagram": null },
        { "stepNumber": 5, "description": "Recall the quotient rule.", "workingLatex": "6^m \\div 6^n = 6^{m-n}", "explanation": "Dividing like bases subtracts the indices.", "diagram": null },
        { "stepNumber": 6, "description": "Subtract the indices.", "workingLatex": "5 - 4 = 1", "explanation": "Four sixes cancel, leaving just one.", "diagram": null },
        { "stepNumber": 7, "description": "Write as a single power.", "workingLatex": "\\dfrac{6^3 \\times 6^2}{6^4} = 6^1", "explanation": "The surviving factor is a single $6$.", "diagram": null },
        { "stepNumber": 8, "description": "Simplify the power.", "workingLatex": "6^1 = 6", "explanation": "A power of $1$ is just the base itself.", "diagram": null },
        { "stepNumber": 9, "description": "State the final answer.", "workingLatex": "\\dfrac{6^3 \\times 6^2}{6^4} = 6^1 = 6", "explanation": "So the value is $6$.", "diagram": null }
      ],
      "finalAnswer": "$6^1 = 6$"
    }
  },
  {
    "id": "gcse.number.integer-indices.q040",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Integer indices",
    "subtopicId": "gcse.number.integer-indices",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "numeric",
    "tags": ["power of a power", "quotient rule", "evaluate"],
    "questionText": "Write $(2^3)^2 \\div 2^2$ as a single power of $2$, then evaluate it.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Look at the expression.", "workingLatex": "(2^3)^2 \\div 2^2", "explanation": "First simplify the power of a power, then divide.", "diagram": null },
        { "stepNumber": 2, "description": "Deal with the bracket.", "workingLatex": "(2^3)^2 = 2^{3 \\times 2}", "explanation": "A power raised to a power multiplies the indices.", "diagram": null },
        { "stepNumber": 3, "description": "Multiply the indices.", "workingLatex": "3 \\times 2 = 6", "explanation": "So the bracket becomes $2^6$.", "diagram": null },
        { "stepNumber": 4, "description": "Rewrite the expression.", "workingLatex": "2^6 \\div 2^2", "explanation": "Now we have a straightforward division.", "diagram": null },
        { "stepNumber": 5, "description": "Recall the quotient rule.", "workingLatex": "2^m \\div 2^n = 2^{m-n}", "explanation": "Dividing like bases subtracts the indices.", "diagram": null },
        { "stepNumber": 6, "description": "Subtract the indices.", "workingLatex": "6 - 2 = 4", "explanation": "Two of the six twos cancel, leaving four.", "diagram": null },
        { "stepNumber": 7, "description": "Write as a single power.", "workingLatex": "(2^3)^2 \\div 2^2 = 2^4", "explanation": "The remaining factors form $2^4$.", "diagram": null },
        { "stepNumber": 8, "description": "Evaluate the power.", "workingLatex": "2^4 = 16", "explanation": "Multiplying four twos gives $16$.", "diagram": null },
        { "stepNumber": 9, "description": "State the final answer.", "workingLatex": "(2^3)^2 \\div 2^2 = 2^4 = 16", "explanation": "So the single power is $2^4$, which equals $16$.", "diagram": null }
      ],
      "finalAnswer": "$2^4 = 16$"
    }
  },
  {
    "id": "gcse.number.integer-indices.q041",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Integer indices",
    "subtopicId": "gcse.number.integer-indices",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "algebraic",
    "tags": ["product rule", "quotient rule", "simplify"],
    "questionText": "Simplify $\\dfrac{x^{10}}{x^4 \\times x^3}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Look at the expression.", "workingLatex": "\\dfrac{x^{10}}{x^4 \\times x^3}", "explanation": "Every power uses base $x$, so simplify the bottom first, then divide.", "diagram": null },
        { "stepNumber": 2, "description": "Simplify the denominator.", "workingLatex": "x^4 \\times x^3 = x^{4+3}", "explanation": "Multiplying like bases adds the indices.", "diagram": null },
        { "stepNumber": 3, "description": "Add the bottom indices.", "workingLatex": "4 + 3 = 7", "explanation": "So the denominator becomes $x^7$.", "diagram": null },
        { "stepNumber": 4, "description": "Rewrite the fraction.", "workingLatex": "\\dfrac{x^{10}}{x^7}", "explanation": "Now there is one power on top and one on the bottom.", "diagram": null },
        { "stepNumber": 5, "description": "Recall the quotient rule.", "workingLatex": "x^m \\div x^n = x^{m-n}", "explanation": "Dividing like bases subtracts the indices.", "diagram": null },
        { "stepNumber": 6, "description": "Subtract the indices.", "workingLatex": "10 - 7 = 3", "explanation": "Seven $x$ factors cancel, leaving three.", "diagram": null },
        { "stepNumber": 7, "description": "Write the single power.", "workingLatex": "\\dfrac{x^{10}}{x^4 \\times x^3} = x^3", "explanation": "The surviving factors form $x^3$.", "diagram": null },
        { "stepNumber": 8, "description": "Check in one line.", "workingLatex": "10 - (4 + 3) = 3", "explanation": "Subtracting the total bottom index from the top gives the same answer.", "diagram": null },
        { "stepNumber": 9, "description": "State the final answer.", "workingLatex": "\\dfrac{x^{10}}{x^4 \\times x^3} = x^3", "explanation": "So the simplified form is $x^3$.", "diagram": null }
      ],
      "finalAnswer": "$x^3$"
    }
  },
  {
    "id": "gcse.number.integer-indices.q042",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Integer indices",
    "subtopicId": "gcse.number.integer-indices",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "numeric",
    "tags": ["negative index", "reciprocal", "evaluate"],
    "questionText": "Work out $4^{-2}$. Give your answer as a fraction.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Read the power.", "workingLatex": "4^{-2}", "explanation": "The negative index means we will take a reciprocal.", "diagram": null },
        { "stepNumber": 2, "description": "Recall the negative-index rule.", "workingLatex": "a^{-n} = \\dfrac{1}{a^{n}}", "explanation": "A negative index flips the power into the denominator under a $1$.", "diagram": null },
        { "stepNumber": 3, "description": "Apply the rule.", "workingLatex": "4^{-2} = \\dfrac{1}{4^{2}}", "explanation": "The minus sign sends $4^2$ to the denominator.", "diagram": null },
        { "stepNumber": 4, "description": "Evaluate the positive power.", "workingLatex": "4^2 = 4 \\times 4 = 16", "explanation": "Squaring $4$ gives $16$.", "diagram": null },
        { "stepNumber": 5, "description": "Substitute back.", "workingLatex": "4^{-2} = \\dfrac{1}{16}", "explanation": "Placing $16$ underneath gives the fraction.", "diagram": null },
        { "stepNumber": 6, "description": "Sense-check the size.", "workingLatex": "0 < \\dfrac{1}{16} < 1", "explanation": "A negative power of a number bigger than $1$ gives a small positive fraction.", "diagram": null },
        { "stepNumber": 7, "description": "Note a common slip.", "workingLatex": "4^{-2} \\neq -16", "explanation": "The negative sign is on the index, not the value, so the answer is a fraction, not a negative number.", "diagram": null },
        { "stepNumber": 8, "description": "State the final answer.", "workingLatex": "4^{-2} = \\dfrac{1}{16}", "explanation": "So $4^{-2}$ equals $\\tfrac{1}{16}$.", "diagram": null },
        { "stepNumber": 9, "description": "Reflect on the rule.", "workingLatex": "\\text{negative index} \\Rightarrow \\text{reciprocal}", "explanation": "Whenever an index is negative, think reciprocal first, then evaluate.", "diagram": null }
      ],
      "finalAnswer": "$\\dfrac{1}{16}$"
    }
  },
  {
    "id": "gcse.number.integer-indices.q043",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Integer indices",
    "subtopicId": "gcse.number.integer-indices",
    "difficulty": "Intermediate",
    "marks": 2,
    "answerType": "numeric",
    "tags": ["quotient rule", "numeric base", "evaluate"],
    "questionText": "Write $\\dfrac{2^7}{2^3}$ as a single power of $2$, then evaluate it.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Note the shared base.", "workingLatex": "\\dfrac{2^7}{2^3}", "explanation": "Both powers use base $2$, so the quotient rule applies.", "diagram": null },
        { "stepNumber": 2, "description": "Recall the quotient rule.", "workingLatex": "2^m \\div 2^n = 2^{m-n}", "explanation": "Dividing like bases subtracts the indices.", "diagram": null },
        { "stepNumber": 3, "description": "Subtract the indices.", "workingLatex": "7 - 3 = 4", "explanation": "Three of the seven twos cancel, leaving four.", "diagram": null },
        { "stepNumber": 4, "description": "Write as a single power.", "workingLatex": "\\dfrac{2^7}{2^3} = 2^4", "explanation": "The remaining factors form $2^4$.", "diagram": null },
        { "stepNumber": 5, "description": "Evaluate the power.", "workingLatex": "2^4 = 16", "explanation": "Multiplying four twos gives $16$.", "diagram": null },
        { "stepNumber": 6, "description": "Check the other way.", "workingLatex": "128 \\div 8 = 16", "explanation": "Since $2^7 = 128$ and $2^3 = 8$, dividing gives the same $16$.", "diagram": null },
        { "stepNumber": 7, "description": "State the final answer.", "workingLatex": "\\dfrac{2^7}{2^3} = 2^4 = 16", "explanation": "So the single power is $2^4$, which equals $16$.", "diagram": null },
        { "stepNumber": 8, "description": "Reflect on the shortcut.", "workingLatex": "\\text{subtract indices, then evaluate}", "explanation": "The index law is quicker than working with the large numbers directly.", "diagram": null },
        { "stepNumber": 9, "description": "State the final answer clearly.", "workingLatex": "\\dfrac{2^7}{2^3} = 2^4 = 16", "explanation": "So the single power is $2^4$, which equals $16$.", "diagram": null }
      ],
      "finalAnswer": "$2^4 = 16$"
    }
  },
  {
    "id": "gcse.number.integer-indices.q044",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Integer indices",
    "subtopicId": "gcse.number.integer-indices",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "numeric",
    "tags": ["zero index", "product rule", "evaluate"],
    "questionText": "Work out $3^0 \\times 3^2$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Look at the expression.", "workingLatex": "3^0 \\times 3^2", "explanation": "Both powers use base $3$, and one has a zero index.", "diagram": null },
        { "stepNumber": 2, "description": "Recall the zero-index rule.", "workingLatex": "3^0 = 1", "explanation": "Any non-zero base to the power $0$ equals $1$.", "diagram": null },
        { "stepNumber": 3, "description": "Method one: use the product rule.", "workingLatex": "3^0 \\times 3^2 = 3^{0+2}", "explanation": "Multiplying like bases adds the indices.", "diagram": null },
        { "stepNumber": 4, "description": "Add the indices.", "workingLatex": "0 + 2 = 2", "explanation": "Adding zero leaves the index unchanged at $2$.", "diagram": null },
        { "stepNumber": 5, "description": "Write the single power.", "workingLatex": "3^0 \\times 3^2 = 3^2", "explanation": "So the whole expression is just $3^2$.", "diagram": null },
        { "stepNumber": 6, "description": "Method two: substitute the $1$.", "workingLatex": "3^0 \\times 3^2 = 1 \\times 3^2", "explanation": "Replacing $3^0$ with $1$ shows why it does not change the product.", "diagram": null },
        { "stepNumber": 7, "description": "Evaluate the power.", "workingLatex": "3^2 = 9", "explanation": "Squaring $3$ gives $9$.", "diagram": null },
        { "stepNumber": 8, "description": "State the final answer.", "workingLatex": "3^0 \\times 3^2 = 9", "explanation": "So the value is $9$.", "diagram": null },
        { "stepNumber": 9, "description": "Reflect on the zero index.", "workingLatex": "1 \\times 3^2 = 3^2", "explanation": "Multiplying by $3^0 = 1$ never changes the answer.", "diagram": null }
      ],
      "finalAnswer": "$9$"
    }
  },
  {
    "id": "gcse.number.integer-indices.q045",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Integer indices",
    "subtopicId": "gcse.number.integer-indices",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "algebraic",
    "tags": ["quotient rule", "negative index", "simplify"],
    "questionText": "Simplify $x^6 \\div x^{-2}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Check the bases.", "workingLatex": "x^6 \\div x^{-2}", "explanation": "Both powers use base $x$, so the quotient rule applies even with a negative index.", "diagram": null },
        { "stepNumber": 2, "description": "Recall the quotient rule.", "workingLatex": "x^m \\div x^n = x^{m-n}", "explanation": "Dividing like bases subtracts the second index from the first.", "diagram": null },
        { "stepNumber": 3, "description": "Substitute the indices.", "workingLatex": "x^6 \\div x^{-2} = x^{6-(-2)}", "explanation": "The second index here is $-2$, so we subtract a negative number.", "diagram": null },
        { "stepNumber": 4, "description": "Handle the double negative.", "workingLatex": "6 - (-2) = 6 + 2", "explanation": "Subtracting a negative is the same as adding, a common place to slip up.", "diagram": null },
        { "stepNumber": 5, "description": "Work out the index.", "workingLatex": "6 + 2 = 8", "explanation": "So the resulting index is $8$.", "diagram": null },
        { "stepNumber": 6, "description": "Write the single power.", "workingLatex": "x^6 \\div x^{-2} = x^8", "explanation": "Dividing by a negative power actually increases the index.", "diagram": null },
        { "stepNumber": 7, "description": "See why with a reciprocal.", "workingLatex": "\\div x^{-2} = \\times x^{2}", "explanation": "Dividing by $x^{-2}$ is the same as multiplying by $x^2$, which adds $2$ to the index.", "diagram": null },
        { "stepNumber": 8, "description": "Confirm.", "workingLatex": "x^6 \\times x^2 = x^8", "explanation": "This matches the answer from the quotient rule.", "diagram": null },
        { "stepNumber": 9, "description": "State the final answer.", "workingLatex": "x^6 \\div x^{-2} = x^8", "explanation": "So the simplified form is $x^8$.", "diagram": null }
      ],
      "finalAnswer": "$x^8$"
    }
  },
  {
    "id": "gcse.number.integer-indices.q046",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Integer indices",
    "subtopicId": "gcse.number.integer-indices",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "numeric",
    "tags": ["zero index", "quotient rule", "evaluate"],
    "questionText": "Write $\\dfrac{5^5 \\times 5^0}{5^3}$ as a single power of $5$, then evaluate it.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Look at the expression.", "workingLatex": "\\dfrac{5^5 \\times 5^0}{5^3}", "explanation": "All powers use base $5$, and one of them has a zero index.", "diagram": null },
        { "stepNumber": 2, "description": "Use the zero-index rule.", "workingLatex": "5^0 = 1", "explanation": "Any non-zero base to the power $0$ equals $1$, so it will not change the product.", "diagram": null },
        { "stepNumber": 3, "description": "Simplify the numerator.", "workingLatex": "5^5 \\times 5^0 = 5^{5+0}", "explanation": "Multiplying like bases adds the indices.", "diagram": null },
        { "stepNumber": 4, "description": "Add the top indices.", "workingLatex": "5 + 0 = 5", "explanation": "So the numerator is $5^5$.", "diagram": null },
        { "stepNumber": 5, "description": "Rewrite the fraction.", "workingLatex": "\\dfrac{5^5}{5^3}", "explanation": "Now there is one power on top and one on the bottom.", "diagram": null },
        { "stepNumber": 6, "description": "Recall the quotient rule.", "workingLatex": "5^m \\div 5^n = 5^{m-n}", "explanation": "Dividing like bases subtracts the indices.", "diagram": null },
        { "stepNumber": 7, "description": "Subtract the indices.", "workingLatex": "5 - 3 = 2", "explanation": "Three fives cancel, leaving two.", "diagram": null },
        { "stepNumber": 8, "description": "Write as a single power.", "workingLatex": "\\dfrac{5^5 \\times 5^0}{5^3} = 5^2", "explanation": "The remaining factors form $5^2$.", "diagram": null },
        { "stepNumber": 9, "description": "Evaluate the power.", "workingLatex": "5^2 = 25", "explanation": "Squaring $5$ gives $25$.", "diagram": null },
        { "stepNumber": 10, "description": "State the final answer.", "workingLatex": "\\dfrac{5^5 \\times 5^0}{5^3} = 5^2 = 25", "explanation": "So the single power is $5^2$, which equals $25$.", "diagram": null }
      ],
      "finalAnswer": "$5^2 = 25$"
    }
  },
  {
    "id": "gcse.number.integer-indices.q047",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Integer indices",
    "subtopicId": "gcse.number.integer-indices",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "algebraic",
    "tags": ["power of a power", "product rule", "simplify"],
    "questionText": "Simplify $(x^4)^2 \\times (x^3)^2$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Look at the expression.", "workingLatex": "(x^4)^2 \\times (x^3)^2", "explanation": "There are two powers of a power to simplify before multiplying.", "diagram": null },
        { "stepNumber": 2, "description": "Simplify the first bracket.", "workingLatex": "(x^4)^2 = x^{4 \\times 2} = x^8", "explanation": "A power raised to a power multiplies the indices.", "diagram": null },
        { "stepNumber": 3, "description": "Simplify the second bracket.", "workingLatex": "(x^3)^2 = x^{3 \\times 2} = x^6", "explanation": "The same power rule applies to the second bracket.", "diagram": null },
        { "stepNumber": 4, "description": "Rewrite the expression.", "workingLatex": "x^8 \\times x^6", "explanation": "Now it is a simple product of two powers.", "diagram": null },
        { "stepNumber": 5, "description": "Recall the product rule.", "workingLatex": "x^a \\times x^b = x^{a+b}", "explanation": "Multiplying like bases adds the indices.", "diagram": null },
        { "stepNumber": 6, "description": "Add the indices.", "workingLatex": "8 + 6 = 14", "explanation": "Combining the eight and six factors gives fourteen.", "diagram": null },
        { "stepNumber": 7, "description": "Write the single power.", "workingLatex": "(x^4)^2 \\times (x^3)^2 = x^{14}", "explanation": "All fourteen factors combine into one power.", "diagram": null },
        { "stepNumber": 8, "description": "Note the method order.", "workingLatex": "\\text{brackets first, then multiply}", "explanation": "Each power of a power is dealt with before the final multiplication.", "diagram": null },
        { "stepNumber": 9, "description": "State the final answer.", "workingLatex": "(x^4)^2 \\times (x^3)^2 = x^{14}", "explanation": "So the simplified form is $x^{14}$.", "diagram": null }
      ],
      "finalAnswer": "$x^{14}$"
    }
  },
  {
    "id": "gcse.number.integer-indices.q048",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Integer indices",
    "subtopicId": "gcse.number.integer-indices",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "numeric",
    "tags": ["product rule", "quotient rule", "evaluate"],
    "questionText": "Write $\\dfrac{2^3 \\times 2^4}{2^2 \\times 2^2}$ as a single power of $2$, then evaluate it.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Look at the expression.", "workingLatex": "\\dfrac{2^3 \\times 2^4}{2^2 \\times 2^2}", "explanation": "All powers use base $2$, so combine the top and bottom separately.", "diagram": null },
        { "stepNumber": 2, "description": "Simplify the numerator.", "workingLatex": "2^3 \\times 2^4 = 2^{3+4} = 2^7", "explanation": "Multiplying like bases adds the indices.", "diagram": null },
        { "stepNumber": 3, "description": "Simplify the denominator.", "workingLatex": "2^2 \\times 2^2 = 2^{2+2} = 2^4", "explanation": "The product rule applies to the bottom as well.", "diagram": null },
        { "stepNumber": 4, "description": "Rewrite the fraction.", "workingLatex": "\\dfrac{2^7}{2^4}", "explanation": "Now there is one power on top and one on the bottom.", "diagram": null },
        { "stepNumber": 5, "description": "Recall the quotient rule.", "workingLatex": "2^m \\div 2^n = 2^{m-n}", "explanation": "Dividing like bases subtracts the indices.", "diagram": null },
        { "stepNumber": 6, "description": "Subtract the indices.", "workingLatex": "7 - 4 = 3", "explanation": "Four of the seven twos cancel, leaving three.", "diagram": null },
        { "stepNumber": 7, "description": "Write as a single power.", "workingLatex": "\\dfrac{2^3 \\times 2^4}{2^2 \\times 2^2} = 2^3", "explanation": "The surviving factors form $2^3$.", "diagram": null },
        { "stepNumber": 8, "description": "Evaluate the power.", "workingLatex": "2^3 = 8", "explanation": "Multiplying three twos gives $8$.", "diagram": null },
        { "stepNumber": 9, "description": "State the final answer.", "workingLatex": "\\dfrac{2^3 \\times 2^4}{2^2 \\times 2^2} = 2^3 = 8", "explanation": "So the single power is $2^3$, which equals $8$.", "diagram": null }
      ],
      "finalAnswer": "$2^3 = 8$"
    }
  },
  {
    "id": "gcse.number.integer-indices.q049",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Integer indices",
    "subtopicId": "gcse.number.integer-indices",
    "difficulty": "Intermediate",
    "marks": 2,
    "answerType": "numeric",
    "tags": ["negative index", "reciprocal", "evaluate"],
    "questionText": "Work out $10^{-3}$. Give your answer as a fraction.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Read the power.", "workingLatex": "10^{-3}", "explanation": "The negative index means the answer is a reciprocal fraction.", "diagram": null },
        { "stepNumber": 2, "description": "Recall the negative-index rule.", "workingLatex": "a^{-n} = \\dfrac{1}{a^{n}}", "explanation": "A negative index moves the power into the denominator under a $1$.", "diagram": null },
        { "stepNumber": 3, "description": "Apply the rule.", "workingLatex": "10^{-3} = \\dfrac{1}{10^{3}}", "explanation": "The minus sign sends $10^3$ to the denominator.", "diagram": null },
        { "stepNumber": 4, "description": "Evaluate the positive power.", "workingLatex": "10^3 = 10 \\times 10 \\times 10 = 1000", "explanation": "Multiplying three tens gives $1000$.", "diagram": null },
        { "stepNumber": 5, "description": "Substitute back.", "workingLatex": "10^{-3} = \\dfrac{1}{1000}", "explanation": "Placing $1000$ underneath gives the fraction.", "diagram": null },
        { "stepNumber": 6, "description": "Link to place value.", "workingLatex": "\\dfrac{1}{1000} = 0.001", "explanation": "This is one thousandth, matching the decimal $0.001$.", "diagram": null },
        { "stepNumber": 7, "description": "Note a common slip.", "workingLatex": "10^{-3} \\neq -1000", "explanation": "The minus sign is on the index, so the answer is a small fraction, not a negative number.", "diagram": null },
        { "stepNumber": 8, "description": "Sense-check the size.", "workingLatex": "0 < \\dfrac{1}{1000} < 1", "explanation": "A negative power of a number bigger than $1$ gives a small positive fraction.", "diagram": null },
        { "stepNumber": 9, "description": "State the final answer.", "workingLatex": "10^{-3} = \\dfrac{1}{1000}", "explanation": "So $10^{-3}$ equals $\\tfrac{1}{1000}$.", "diagram": null }
      ],
      "finalAnswer": "$\\dfrac{1}{1000}$"
    }
  },
  {
    "id": "gcse.number.integer-indices.q050",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Integer indices",
    "subtopicId": "gcse.number.integer-indices",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "algebraic",
    "tags": ["quotient rule", "negative index", "simplify"],
    "questionText": "Simplify $\\dfrac{a^8}{a^{10}}$, giving your answer with a positive index.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Note the shared base.", "workingLatex": "\\dfrac{a^8}{a^{10}}", "explanation": "Both powers use base $a$, so the quotient rule applies.", "diagram": null },
        { "stepNumber": 2, "description": "Recall the quotient rule.", "workingLatex": "a^m \\div a^n = a^{m-n}", "explanation": "Dividing like bases subtracts the indices.", "diagram": null },
        { "stepNumber": 3, "description": "Subtract the indices.", "workingLatex": "8 - 10 = -2", "explanation": "The bottom index is larger, so the result is a negative index.", "diagram": null },
        { "stepNumber": 4, "description": "Write as a power.", "workingLatex": "\\dfrac{a^8}{a^{10}} = a^{-2}", "explanation": "A negative index shows there are more $a$ factors on the bottom.", "diagram": null },
        { "stepNumber": 5, "description": "Recall the negative-index rule.", "workingLatex": "a^{-n} = \\dfrac{1}{a^{n}}", "explanation": "A negative index becomes a reciprocal, giving a positive index.", "diagram": null },
        { "stepNumber": 6, "description": "Apply it.", "workingLatex": "a^{-2} = \\dfrac{1}{a^{2}}", "explanation": "The power moves into the denominator.", "diagram": null },
        { "stepNumber": 7, "description": "Check by cancelling.", "workingLatex": "\\dfrac{a^8}{a^{10}} = \\dfrac{1}{a^{2}}", "explanation": "Cancelling eight $a$ factors from top and bottom leaves two on the bottom.", "diagram": null },
        { "stepNumber": 8, "description": "State the final answer.", "workingLatex": "\\dfrac{a^8}{a^{10}} = \\dfrac{1}{a^{2}}", "explanation": "So the simplified form with a positive index is $\\tfrac{1}{a^2}$.", "diagram": null },
        { "stepNumber": 9, "description": "Reflect on the result.", "workingLatex": "a^{-2} = \\dfrac{1}{a^{2}}", "explanation": "Either form is correct; the reciprocal form uses a positive index.", "diagram": null }
      ],
      "finalAnswer": "$\\dfrac{1}{a^2}$"
    }
  },
  {
    "id": "gcse.number.integer-indices.q051",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Integer indices",
    "subtopicId": "gcse.number.integer-indices",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "numeric",
    "tags": ["product rule", "negative index", "zero index"],
    "questionText": "Work out $7^2 \\times 7^{-2}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Check the bases.", "workingLatex": "7^2 \\times 7^{-2}", "explanation": "Both powers use base $7$, so we add the indices.", "diagram": null },
        { "stepNumber": 2, "description": "Recall the product rule.", "workingLatex": "7^a \\times 7^b = 7^{a+b}", "explanation": "Multiplying like bases adds the indices, even negative ones.", "diagram": null },
        { "stepNumber": 3, "description": "Add the indices.", "workingLatex": "2 + (-2) = 0", "explanation": "A number and its negative add to zero.", "diagram": null },
        { "stepNumber": 4, "description": "Write the power.", "workingLatex": "7^2 \\times 7^{-2} = 7^0", "explanation": "The combined index is $0$.", "diagram": null },
        { "stepNumber": 5, "description": "Apply the zero-index rule.", "workingLatex": "7^0 = 1", "explanation": "Any non-zero base to the power $0$ equals $1$.", "diagram": null },
        { "stepNumber": 6, "description": "Check with reciprocals.", "workingLatex": "7^{-2} = \\dfrac{1}{7^{2}}", "explanation": "The second factor is one over $7^2$, so we are computing $7^2 \\times \\tfrac{1}{7^2}$.", "diagram": null },
        { "stepNumber": 7, "description": "Confirm the value.", "workingLatex": "7^2 \\times \\dfrac{1}{7^2} = 1", "explanation": "A quantity multiplied by its reciprocal is always $1$.", "diagram": null },
        { "stepNumber": 8, "description": "Note the general pattern.", "workingLatex": "a^{n} \\times a^{-n} = a^0 = 1", "explanation": "Any power multiplied by its matching negative power always gives $1$.", "diagram": null },
        { "stepNumber": 9, "description": "State the final answer.", "workingLatex": "7^2 \\times 7^{-2} = 1", "explanation": "So the value is $1$.", "diagram": null }
      ],
      "finalAnswer": "$1$"
    }
  },
  {
    "id": "gcse.number.integer-indices.q052",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Integer indices",
    "subtopicId": "gcse.number.integer-indices",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "algebraic",
    "tags": ["quotient rule", "power of a power", "simplify"],
    "questionText": "Simplify $(x^5 \\div x^2)^2$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Look inside the bracket.", "workingLatex": "(x^5 \\div x^2)^2", "explanation": "We simplify the inside first, then apply the outer power.", "diagram": null },
        { "stepNumber": 2, "description": "Recall the quotient rule.", "workingLatex": "x^m \\div x^n = x^{m-n}", "explanation": "Dividing like bases subtracts the indices.", "diagram": null },
        { "stepNumber": 3, "description": "Simplify the inside.", "workingLatex": "x^5 \\div x^2 = x^{5-2} = x^3", "explanation": "Subtracting the indices leaves $x^3$ inside the bracket.", "diagram": null },
        { "stepNumber": 4, "description": "Rewrite the expression.", "workingLatex": "(x^3)^2", "explanation": "Now it is a straightforward power of a power.", "diagram": null },
        { "stepNumber": 5, "description": "Recall the power rule.", "workingLatex": "(x^a)^b = x^{a \\times b}", "explanation": "A power raised to a power multiplies the indices.", "diagram": null },
        { "stepNumber": 6, "description": "Multiply the indices.", "workingLatex": "3 \\times 2 = 6", "explanation": "So the outer square doubles the index.", "diagram": null },
        { "stepNumber": 7, "description": "Write the single power.", "workingLatex": "(x^5 \\div x^2)^2 = x^6", "explanation": "The final combined power is $x^6$.", "diagram": null },
        { "stepNumber": 8, "description": "State the final answer.", "workingLatex": "(x^5 \\div x^2)^2 = x^6", "explanation": "So the simplified form is $x^6$.", "diagram": null },
        { "stepNumber": 9, "description": "Note the order of work.", "workingLatex": "\\text{inside bracket first, then outer power}", "explanation": "Simplifying the bracket before squaring keeps each index law separate.", "diagram": null }
      ],
      "finalAnswer": "$x^6$"
    }
  },
  {
    "id": "gcse.number.integer-indices.q053",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Integer indices",
    "subtopicId": "gcse.number.integer-indices",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "numeric",
    "tags": ["zero index", "quotient rule", "evaluate"],
    "questionText": "Write $\\dfrac{3^6}{3^2 \\times 3^0}$ as a single power of $3$, then evaluate it.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Look at the expression.", "workingLatex": "\\dfrac{3^6}{3^2 \\times 3^0}", "explanation": "All powers use base $3$, and one of them has a zero index.", "diagram": null },
        { "stepNumber": 2, "description": "Use the zero-index rule.", "workingLatex": "3^0 = 1", "explanation": "Any non-zero base to the power $0$ equals $1$.", "diagram": null },
        { "stepNumber": 3, "description": "Simplify the denominator.", "workingLatex": "3^2 \\times 3^0 = 3^{2+0} = 3^2", "explanation": "Adding the indices, the zero index adds nothing.", "diagram": null },
        { "stepNumber": 4, "description": "Rewrite the fraction.", "workingLatex": "\\dfrac{3^6}{3^2}", "explanation": "Now there is one power on top and one on the bottom.", "diagram": null },
        { "stepNumber": 5, "description": "Recall the quotient rule.", "workingLatex": "3^m \\div 3^n = 3^{m-n}", "explanation": "Dividing like bases subtracts the indices.", "diagram": null },
        { "stepNumber": 6, "description": "Subtract the indices.", "workingLatex": "6 - 2 = 4", "explanation": "Two of the six threes cancel, leaving four.", "diagram": null },
        { "stepNumber": 7, "description": "Write as a single power.", "workingLatex": "\\dfrac{3^6}{3^2 \\times 3^0} = 3^4", "explanation": "The remaining factors form $3^4$.", "diagram": null },
        { "stepNumber": 8, "description": "Evaluate the power.", "workingLatex": "3^4 = 81", "explanation": "Multiplying four threes gives $81$.", "diagram": null },
        { "stepNumber": 9, "description": "State the final answer.", "workingLatex": "\\dfrac{3^6}{3^2 \\times 3^0} = 3^4 = 81", "explanation": "So the single power is $3^4$, which equals $81$.", "diagram": null }
      ],
      "finalAnswer": "$3^4 = 81$"
    }
  },
  {
    "id": "gcse.number.integer-indices.q054",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Integer indices",
    "subtopicId": "gcse.number.integer-indices",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "numeric",
    "tags": ["product rule", "negative index", "evaluate"],
    "questionText": "Work out $2^{-1} \\times 2^4$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Check the bases.", "workingLatex": "2^{-1} \\times 2^4", "explanation": "Both powers use base $2$, so we add the indices.", "diagram": null },
        { "stepNumber": 2, "description": "Recall the product rule.", "workingLatex": "2^a \\times 2^b = 2^{a+b}", "explanation": "Multiplying like bases adds the indices, even negative ones.", "diagram": null },
        { "stepNumber": 3, "description": "Add the indices.", "workingLatex": "-1 + 4 = 3", "explanation": "Starting from $-1$ and adding $4$ gives $3$.", "diagram": null },
        { "stepNumber": 4, "description": "Write as a single power.", "workingLatex": "2^{-1} \\times 2^4 = 2^3", "explanation": "The combined index is $3$.", "diagram": null },
        { "stepNumber": 5, "description": "Evaluate the power.", "workingLatex": "2^3 = 8", "explanation": "Multiplying three twos gives $8$.", "diagram": null },
        { "stepNumber": 6, "description": "Check with the reciprocal.", "workingLatex": "2^{-1} = \\dfrac{1}{2}", "explanation": "The first factor is one half, so we are computing $\\tfrac{1}{2} \\times 16$.", "diagram": null },
        { "stepNumber": 7, "description": "Confirm the value.", "workingLatex": "\\dfrac{1}{2} \\times 16 = 8", "explanation": "This matches the answer from the index laws.", "diagram": null },
        { "stepNumber": 8, "description": "Note the pattern.", "workingLatex": "-1 + 4 = 3", "explanation": "Adding a negative index simply lowers the total index before we evaluate.", "diagram": null },
        { "stepNumber": 9, "description": "State the final answer.", "workingLatex": "2^{-1} \\times 2^4 = 2^3 = 8", "explanation": "So the value is $8$.", "diagram": null }
      ],
      "finalAnswer": "$8$"
    }
  },
  {
    "id": "gcse.number.integer-indices.q055",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Integer indices",
    "subtopicId": "gcse.number.integer-indices",
    "difficulty": "Hard",
    "marks": 4,
    "answerType": "numeric",
    "tags": ["product rule", "quotient rule", "negative index"],
    "questionText": "Write $\\dfrac{2^5 \\times 2^{-2}}{2^4}$ as a single power of $2$, then evaluate it as a fraction.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Look at the expression.", "workingLatex": "\\dfrac{2^5 \\times 2^{-2}}{2^4}", "explanation": "Every power uses base $2$, so all the index laws apply, including with the negative index.", "diagram": null },
        { "stepNumber": 2, "description": "Simplify the numerator.", "workingLatex": "2^5 \\times 2^{-2} = 2^{5+(-2)}", "explanation": "Multiplying like bases adds the indices, even when one is negative.", "diagram": null },
        { "stepNumber": 3, "description": "Add the top indices.", "workingLatex": "5 + (-2) = 3", "explanation": "Adding a negative index reduces the total to $3$.", "diagram": null },
        { "stepNumber": 4, "description": "Rewrite the fraction.", "workingLatex": "\\dfrac{2^3}{2^4}", "explanation": "The numerator is now $2^3$ over $2^4$.", "diagram": null },
        { "stepNumber": 5, "description": "Recall the quotient rule.", "workingLatex": "2^m \\div 2^n = 2^{m-n}", "explanation": "Dividing like bases subtracts the indices.", "diagram": null },
        { "stepNumber": 6, "description": "Subtract the indices.", "workingLatex": "3 - 4 = -1", "explanation": "The bottom index is larger, so the result has a negative index.", "diagram": null },
        { "stepNumber": 7, "description": "Write as a power.", "workingLatex": "\\dfrac{2^5 \\times 2^{-2}}{2^4} = 2^{-1}", "explanation": "The single combined power is $2^{-1}$.", "diagram": null },
        { "stepNumber": 8, "description": "Recall the negative-index rule.", "workingLatex": "2^{-n} = \\dfrac{1}{2^{n}}", "explanation": "A negative index becomes a reciprocal.", "diagram": null },
        { "stepNumber": 9, "description": "Apply it.", "workingLatex": "2^{-1} = \\dfrac{1}{2^{1}}", "explanation": "The power moves into the denominator under a $1$.", "diagram": null },
        { "stepNumber": 10, "description": "Simplify.", "workingLatex": "2^{-1} = \\dfrac{1}{2}", "explanation": "Since $2^1 = 2$, the value is one half.", "diagram": null },
        { "stepNumber": 11, "description": "Check in one line.", "workingLatex": "5 + (-2) - 4 = -1", "explanation": "Adding the top indices and subtracting the bottom gives the same index of $-1$.", "diagram": null },
        { "stepNumber": 12, "description": "State the final answer.", "workingLatex": "\\dfrac{2^5 \\times 2^{-2}}{2^4} = 2^{-1} = \\dfrac{1}{2}", "explanation": "So the single power is $2^{-1}$, which equals $\\tfrac{1}{2}$.", "diagram": null },
        { "stepNumber": 13, "description": "Reflect on the method.", "workingLatex": "\\text{combine top, then divide, then flip}", "explanation": "Working left to right through the index laws keeps a multi-step expression manageable.", "diagram": null }
      ],
      "finalAnswer": "$2^{-1} = \\dfrac{1}{2}$"
    }
  },
  {
    "id": "gcse.number.integer-indices.q056",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Integer indices",
    "subtopicId": "gcse.number.integer-indices",
    "difficulty": "Hard",
    "marks": 4,
    "answerType": "numeric",
    "tags": ["power of a power", "negative index", "evaluate"],
    "questionText": "Work out $(2^{-1})^3$. Give your answer as a fraction.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Read the expression.", "workingLatex": "(2^{-1})^3", "explanation": "A power with a negative index is being raised to a further power.", "diagram": null },
        { "stepNumber": 2, "description": "Recall the power rule.", "workingLatex": "(2^a)^b = 2^{a \\times b}", "explanation": "A power raised to a power multiplies the indices, and this works with negative indices too.", "diagram": null },
        { "stepNumber": 3, "description": "Multiply the indices.", "workingLatex": "-1 \\times 3 = -3", "explanation": "A negative times a positive gives a negative, so the new index is $-3$.", "diagram": null },
        { "stepNumber": 4, "description": "Write as a single power.", "workingLatex": "(2^{-1})^3 = 2^{-3}", "explanation": "The combined index is $-3$.", "diagram": null },
        { "stepNumber": 5, "description": "Recall the negative-index rule.", "workingLatex": "2^{-n} = \\dfrac{1}{2^{n}}", "explanation": "A negative index becomes a reciprocal.", "diagram": null },
        { "stepNumber": 6, "description": "Apply it.", "workingLatex": "2^{-3} = \\dfrac{1}{2^{3}}", "explanation": "The power moves into the denominator under a $1$.", "diagram": null },
        { "stepNumber": 7, "description": "Evaluate the denominator.", "workingLatex": "2^3 = 8", "explanation": "Multiplying three twos gives $8$.", "diagram": null },
        { "stepNumber": 8, "description": "Write the fraction.", "workingLatex": "(2^{-1})^3 = \\dfrac{1}{8}", "explanation": "So the value is one eighth.", "diagram": null },
        { "stepNumber": 9, "description": "Check the other way.", "workingLatex": "2^{-1} = \\dfrac{1}{2}, \\quad \\left(\\dfrac{1}{2}\\right)^3 = \\dfrac{1}{8}", "explanation": "Cubing one half also gives one eighth, confirming the answer.", "diagram": null },
        { "stepNumber": 10, "description": "State the final answer.", "workingLatex": "(2^{-1})^3 = 2^{-3} = \\dfrac{1}{8}", "explanation": "So the value is $\\tfrac{1}{8}$.", "diagram": null },
        { "stepNumber": 11, "description": "Reflect on the idea.", "workingLatex": "\\text{multiply indices even when negative}", "explanation": "The power rule does not care about the sign of the index; just multiply carefully.", "diagram": null },
        { "stepNumber": 12, "description": "Note the sign check.", "workingLatex": "(-1) \\times 3 = -3", "explanation": "Confirming the sign of the product avoids a common mistake.", "diagram": null },
        { "stepNumber": 13, "description": "Final check of size.", "workingLatex": "0 < \\dfrac{1}{8} < 1", "explanation": "A negative power gives a proper fraction, which fits our answer.", "diagram": null }
      ],
      "finalAnswer": "$\\dfrac{1}{8}$"
    }
  },
  {
    "id": "gcse.number.integer-indices.q057",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Integer indices",
    "subtopicId": "gcse.number.integer-indices",
    "difficulty": "Hard",
    "marks": 4,
    "answerType": "numeric",
    "tags": ["product rule", "quotient rule", "negative index"],
    "questionText": "Write $\\dfrac{3^{-2} \\times 3^5}{3^4}$ as a single power of $3$, then evaluate it as a fraction.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Look at the expression.", "workingLatex": "\\dfrac{3^{-2} \\times 3^5}{3^4}", "explanation": "Every power uses base $3$, so the index laws apply throughout.", "diagram": null },
        { "stepNumber": 2, "description": "Simplify the numerator.", "workingLatex": "3^{-2} \\times 3^5 = 3^{-2+5}", "explanation": "Multiplying like bases adds the indices, even with a negative one.", "diagram": null },
        { "stepNumber": 3, "description": "Add the top indices.", "workingLatex": "-2 + 5 = 3", "explanation": "Starting from $-2$ and adding $5$ gives $3$.", "diagram": null },
        { "stepNumber": 4, "description": "Rewrite the fraction.", "workingLatex": "\\dfrac{3^3}{3^4}", "explanation": "The numerator is now $3^3$ over $3^4$.", "diagram": null },
        { "stepNumber": 5, "description": "Recall the quotient rule.", "workingLatex": "3^m \\div 3^n = 3^{m-n}", "explanation": "Dividing like bases subtracts the indices.", "diagram": null },
        { "stepNumber": 6, "description": "Subtract the indices.", "workingLatex": "3 - 4 = -1", "explanation": "The bottom index is larger, so the result is negative.", "diagram": null },
        { "stepNumber": 7, "description": "Write as a power.", "workingLatex": "\\dfrac{3^{-2} \\times 3^5}{3^4} = 3^{-1}", "explanation": "The single combined power is $3^{-1}$.", "diagram": null },
        { "stepNumber": 8, "description": "Recall the negative-index rule.", "workingLatex": "3^{-n} = \\dfrac{1}{3^{n}}", "explanation": "A negative index becomes a reciprocal.", "diagram": null },
        { "stepNumber": 9, "description": "Apply it.", "workingLatex": "3^{-1} = \\dfrac{1}{3^{1}} = \\dfrac{1}{3}", "explanation": "The reciprocal of $3$ is one third.", "diagram": null },
        { "stepNumber": 10, "description": "Check in one line.", "workingLatex": "-2 + 5 - 4 = -1", "explanation": "Adding the top indices and subtracting the bottom gives the same index of $-1$.", "diagram": null },
        { "stepNumber": 11, "description": "State the final answer.", "workingLatex": "\\dfrac{3^{-2} \\times 3^5}{3^4} = 3^{-1} = \\dfrac{1}{3}", "explanation": "So the single power is $3^{-1}$, which equals $\\tfrac{1}{3}$.", "diagram": null },
        { "stepNumber": 12, "description": "Reflect on the process.", "workingLatex": "\\text{add on top, subtract for the divide}", "explanation": "Keeping the numerator and division as separate steps keeps the signs under control.", "diagram": null },
        { "stepNumber": 13, "description": "Final size check.", "workingLatex": "0 < \\dfrac{1}{3} < 1", "explanation": "A negative final index gives a proper fraction, which matches.", "diagram": null }
      ],
      "finalAnswer": "$3^{-1} = \\dfrac{1}{3}$"
    }
  },
  {
    "id": "gcse.number.integer-indices.q058",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Integer indices",
    "subtopicId": "gcse.number.integer-indices",
    "difficulty": "Hard",
    "marks": 4,
    "answerType": "algebraic",
    "tags": ["power of a power", "product rule", "quotient rule"],
    "questionText": "Simplify $\\dfrac{(x^3)^2 \\times x^4}{x^5}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Look at the expression.", "workingLatex": "\\dfrac{(x^3)^2 \\times x^4}{x^5}", "explanation": "There is a power of a power, a multiplication, and a division, all with base $x$.", "diagram": null },
        { "stepNumber": 2, "description": "Deal with the bracket first.", "workingLatex": "(x^3)^2 = x^{3 \\times 2}", "explanation": "A power raised to a power multiplies the indices.", "diagram": null },
        { "stepNumber": 3, "description": "Multiply those indices.", "workingLatex": "3 \\times 2 = 6", "explanation": "So the bracket becomes $x^6$.", "diagram": null },
        { "stepNumber": 4, "description": "Rewrite the numerator.", "workingLatex": "x^6 \\times x^4", "explanation": "Replace the bracket with $x^6$ before multiplying.", "diagram": null },
        { "stepNumber": 5, "description": "Use the product rule.", "workingLatex": "x^6 \\times x^4 = x^{6+4}", "explanation": "Multiplying like bases adds the indices.", "diagram": null },
        { "stepNumber": 6, "description": "Add the top indices.", "workingLatex": "6 + 4 = 10", "explanation": "So the numerator is $x^{10}$.", "diagram": null },
        { "stepNumber": 7, "description": "Rewrite the fraction.", "workingLatex": "\\dfrac{x^{10}}{x^5}", "explanation": "Now there is one power on top and one on the bottom.", "diagram": null },
        { "stepNumber": 8, "description": "Use the quotient rule.", "workingLatex": "x^m \\div x^n = x^{m-n}", "explanation": "Dividing like bases subtracts the indices.", "diagram": null },
        { "stepNumber": 9, "description": "Subtract the indices.", "workingLatex": "10 - 5 = 5", "explanation": "Five $x$ factors cancel, leaving five.", "diagram": null },
        { "stepNumber": 10, "description": "Write the single power.", "workingLatex": "\\dfrac{(x^3)^2 \\times x^4}{x^5} = x^5", "explanation": "The surviving factors form $x^5$.", "diagram": null },
        { "stepNumber": 11, "description": "Check in one line.", "workingLatex": "(3 \\times 2) + 4 - 5 = 5", "explanation": "Combining every index law in one calculation gives the same result.", "diagram": null },
        { "stepNumber": 12, "description": "State the final answer.", "workingLatex": "\\dfrac{(x^3)^2 \\times x^4}{x^5} = x^5", "explanation": "So the simplified form is $x^5$.", "diagram": null },
        { "stepNumber": 13, "description": "Reflect on the order.", "workingLatex": "\\text{power, then product, then quotient}", "explanation": "Following the order of operations keeps a busy expression tidy and correct.", "diagram": null }
      ],
      "finalAnswer": "$x^5$"
    }
  },
  {
    "id": "gcse.number.integer-indices.q059",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Integer indices",
    "subtopicId": "gcse.number.integer-indices",
    "difficulty": "Hard",
    "marks": 4,
    "answerType": "numeric",
    "tags": ["quotient rule", "negative index", "evaluate"],
    "questionText": "Write $\\dfrac{5^4}{5^6}$ as a single power of $5$, then evaluate it as a fraction.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Note the shared base.", "workingLatex": "\\dfrac{5^4}{5^6}", "explanation": "Both powers use base $5$, so the quotient rule applies.", "diagram": null },
        { "stepNumber": 2, "description": "Recall the quotient rule.", "workingLatex": "5^m \\div 5^n = 5^{m-n}", "explanation": "Dividing like bases subtracts the indices.", "diagram": null },
        { "stepNumber": 3, "description": "Subtract the indices.", "workingLatex": "4 - 6 = -2", "explanation": "The bottom index is larger, so the result has a negative index.", "diagram": null },
        { "stepNumber": 4, "description": "Write as a power.", "workingLatex": "\\dfrac{5^4}{5^6} = 5^{-2}", "explanation": "A negative index shows there are more $5$ factors on the bottom.", "diagram": null },
        { "stepNumber": 5, "description": "Recall the negative-index rule.", "workingLatex": "5^{-n} = \\dfrac{1}{5^{n}}", "explanation": "A negative index becomes a reciprocal.", "diagram": null },
        { "stepNumber": 6, "description": "Apply it.", "workingLatex": "5^{-2} = \\dfrac{1}{5^{2}}", "explanation": "The power moves into the denominator under a $1$.", "diagram": null },
        { "stepNumber": 7, "description": "Evaluate the denominator.", "workingLatex": "5^2 = 25", "explanation": "Squaring $5$ gives $25$.", "diagram": null },
        { "stepNumber": 8, "description": "Write the fraction.", "workingLatex": "\\dfrac{5^4}{5^6} = \\dfrac{1}{25}", "explanation": "So the value is one twenty-fifth.", "diagram": null },
        { "stepNumber": 9, "description": "Check by cancelling.", "workingLatex": "\\dfrac{5^4}{5^6} = \\dfrac{1}{5^{2}}", "explanation": "Cancelling four fives from top and bottom leaves two on the bottom.", "diagram": null },
        { "stepNumber": 10, "description": "Confirm the value.", "workingLatex": "\\dfrac{1}{5^{2}} = \\dfrac{1}{25}", "explanation": "This matches the answer from the index laws.", "diagram": null },
        { "stepNumber": 11, "description": "State the final answer.", "workingLatex": "\\dfrac{5^4}{5^6} = 5^{-2} = \\dfrac{1}{25}", "explanation": "So the single power is $5^{-2}$, which equals $\\tfrac{1}{25}$.", "diagram": null },
        { "stepNumber": 12, "description": "Reflect on the idea.", "workingLatex": "\\text{smaller top index} \\Rightarrow \\text{fraction}", "explanation": "When the top index is smaller than the bottom, expect a fraction below $1$.", "diagram": null },
        { "stepNumber": 13, "description": "Final size check.", "workingLatex": "0 < \\dfrac{1}{25} < 1", "explanation": "A proper fraction is exactly what a negative index should produce here.", "diagram": null }
      ],
      "finalAnswer": "$5^{-2} = \\dfrac{1}{25}$"
    }
  },
  {
    "id": "gcse.number.integer-indices.q060",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Integer indices",
    "subtopicId": "gcse.number.integer-indices",
    "difficulty": "Hard",
    "marks": 4,
    "answerType": "numeric",
    "tags": ["product rule", "negative index", "evaluate"],
    "questionText": "Work out $2^3 \\times 2^{-5}$. Give your answer as a fraction.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Check the bases.", "workingLatex": "2^3 \\times 2^{-5}", "explanation": "Both powers use base $2$, so we add the indices even though one is negative.", "diagram": null },
        { "stepNumber": 2, "description": "Recall the product rule.", "workingLatex": "2^a \\times 2^b = 2^{a+b}", "explanation": "Multiplying like bases adds the indices.", "diagram": null },
        { "stepNumber": 3, "description": "Add the indices.", "workingLatex": "3 + (-5) = -2", "explanation": "Adding a negative index reduces the total below zero.", "diagram": null },
        { "stepNumber": 4, "description": "Write as a single power.", "workingLatex": "2^3 \\times 2^{-5} = 2^{-2}", "explanation": "The combined index is $-2$, so the answer is a fraction.", "diagram": null },
        { "stepNumber": 5, "description": "Recall the negative-index rule.", "workingLatex": "2^{-n} = \\dfrac{1}{2^{n}}", "explanation": "A negative index becomes a reciprocal.", "diagram": null },
        { "stepNumber": 6, "description": "Apply it.", "workingLatex": "2^{-2} = \\dfrac{1}{2^{2}}", "explanation": "The power moves into the denominator under a $1$.", "diagram": null },
        { "stepNumber": 7, "description": "Evaluate the denominator.", "workingLatex": "2^2 = 4", "explanation": "Squaring $2$ gives $4$.", "diagram": null },
        { "stepNumber": 8, "description": "Write the fraction.", "workingLatex": "2^3 \\times 2^{-5} = \\dfrac{1}{4}", "explanation": "So the value is one quarter.", "diagram": null },
        { "stepNumber": 9, "description": "Check with reciprocals.", "workingLatex": "2^{-5} = \\dfrac{1}{32}", "explanation": "The second factor is one over $2^5 = 32$, so we compute $8 \\times \\tfrac{1}{32}$.", "diagram": null },
        { "stepNumber": 10, "description": "Confirm the value.", "workingLatex": "8 \\times \\dfrac{1}{32} = \\dfrac{8}{32} = \\dfrac{1}{4}", "explanation": "Cancelling the fraction gives one quarter, matching the index-law answer.", "diagram": null },
        { "stepNumber": 11, "description": "State the final answer.", "workingLatex": "2^3 \\times 2^{-5} = 2^{-2} = \\dfrac{1}{4}", "explanation": "So the value is $\\tfrac{1}{4}$.", "diagram": null },
        { "stepNumber": 12, "description": "Reflect on the method.", "workingLatex": "\\text{add indices, then flip}", "explanation": "Combining first and taking the reciprocal last keeps the working short.", "diagram": null },
        { "stepNumber": 13, "description": "Final size check.", "workingLatex": "0 < \\dfrac{1}{4} < 1", "explanation": "A negative total index gives a proper fraction, as expected.", "diagram": null }
      ],
      "finalAnswer": "$2^{-2} = \\dfrac{1}{4}$"
    }
  },
  {
    "id": "gcse.number.integer-indices.q061",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Integer indices",
    "subtopicId": "gcse.number.integer-indices",
    "difficulty": "Hard",
    "marks": 4,
    "answerType": "numeric",
    "tags": ["power of a power", "quotient rule", "evaluate"],
    "questionText": "Write $\\dfrac{(2^2)^3}{2^4}$ as a single power of $2$, then evaluate it.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Look at the expression.", "workingLatex": "\\dfrac{(2^2)^3}{2^4}", "explanation": "There is a power of a power on top, then a division, all with base $2$.", "diagram": null },
        { "stepNumber": 2, "description": "Deal with the bracket.", "workingLatex": "(2^2)^3 = 2^{2 \\times 3}", "explanation": "A power raised to a power multiplies the indices.", "diagram": null },
        { "stepNumber": 3, "description": "Multiply the indices.", "workingLatex": "2 \\times 3 = 6", "explanation": "So the numerator becomes $2^6$.", "diagram": null },
        { "stepNumber": 4, "description": "Rewrite the fraction.", "workingLatex": "\\dfrac{2^6}{2^4}", "explanation": "Now there is one power on top and one on the bottom.", "diagram": null },
        { "stepNumber": 5, "description": "Recall the quotient rule.", "workingLatex": "2^m \\div 2^n = 2^{m-n}", "explanation": "Dividing like bases subtracts the indices.", "diagram": null },
        { "stepNumber": 6, "description": "Subtract the indices.", "workingLatex": "6 - 4 = 2", "explanation": "Four of the six twos cancel, leaving two.", "diagram": null },
        { "stepNumber": 7, "description": "Write as a single power.", "workingLatex": "\\dfrac{(2^2)^3}{2^4} = 2^2", "explanation": "The remaining factors form $2^2$.", "diagram": null },
        { "stepNumber": 8, "description": "Evaluate the power.", "workingLatex": "2^2 = 4", "explanation": "Squaring $2$ gives $4$.", "diagram": null },
        { "stepNumber": 9, "description": "Check by evaluating fully.", "workingLatex": "(2^2)^3 = 64, \\quad 2^4 = 16", "explanation": "The numerator is $64$ and the denominator is $16$.", "diagram": null },
        { "stepNumber": 10, "description": "Divide directly.", "workingLatex": "64 \\div 16 = 4", "explanation": "This matches the answer from the index laws.", "diagram": null },
        { "stepNumber": 11, "description": "State the final answer.", "workingLatex": "\\dfrac{(2^2)^3}{2^4} = 2^2 = 4", "explanation": "So the single power is $2^2$, which equals $4$.", "diagram": null },
        { "stepNumber": 12, "description": "Reflect on the order.", "workingLatex": "\\text{bracket first, then divide}", "explanation": "Simplifying the power of a power before dividing keeps each law separate.", "diagram": null },
        { "stepNumber": 13, "description": "Note the efficiency.", "workingLatex": "6 - 4 = 2", "explanation": "The index laws reach the answer without handling the large number $64$.", "diagram": null }
      ],
      "finalAnswer": "$2^2 = 4$"
    }
  },
  {
    "id": "gcse.number.integer-indices.q062",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Integer indices",
    "subtopicId": "gcse.number.integer-indices",
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "algebraic",
    "tags": ["product rule", "power of a power", "zero index"],
    "questionText": "Simplify $\\dfrac{x^7 \\times x^{-3}}{(x^2)^2}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Look at the expression.", "workingLatex": "\\dfrac{x^7 \\times x^{-3}}{(x^2)^2}", "explanation": "There is a product on top, a power of a power on the bottom, all with base $x$.", "diagram": null },
        { "stepNumber": 2, "description": "Simplify the numerator.", "workingLatex": "x^7 \\times x^{-3} = x^{7+(-3)}", "explanation": "Multiplying like bases adds the indices, even with a negative one.", "diagram": null },
        { "stepNumber": 3, "description": "Add the top indices.", "workingLatex": "7 + (-3) = 4", "explanation": "So the numerator becomes $x^4$.", "diagram": null },
        { "stepNumber": 4, "description": "Simplify the denominator.", "workingLatex": "(x^2)^2 = x^{2 \\times 2}", "explanation": "A power raised to a power multiplies the indices.", "diagram": null },
        { "stepNumber": 5, "description": "Multiply the bottom indices.", "workingLatex": "2 \\times 2 = 4", "explanation": "So the denominator becomes $x^4$.", "diagram": null },
        { "stepNumber": 6, "description": "Rewrite the fraction.", "workingLatex": "\\dfrac{x^4}{x^4}", "explanation": "Top and bottom now have the same power of $x$.", "diagram": null },
        { "stepNumber": 7, "description": "Recall the quotient rule.", "workingLatex": "x^m \\div x^n = x^{m-n}", "explanation": "Dividing like bases subtracts the indices.", "diagram": null },
        { "stepNumber": 8, "description": "Subtract the indices.", "workingLatex": "4 - 4 = 0", "explanation": "The indices are equal, so the result is a zero index.", "diagram": null },
        { "stepNumber": 9, "description": "Write the zero power.", "workingLatex": "\\dfrac{x^7 \\times x^{-3}}{(x^2)^2} = x^0", "explanation": "The subtraction leaves an index of $0$.", "diagram": null },
        { "stepNumber": 10, "description": "Apply the zero-index rule.", "workingLatex": "x^0 = 1 \\quad (x \\neq 0)", "explanation": "Any non-zero base to the power $0$ equals $1$.", "diagram": null },
        { "stepNumber": 11, "description": "State the final answer.", "workingLatex": "\\dfrac{x^7 \\times x^{-3}}{(x^2)^2} = 1", "explanation": "So the whole expression simplifies to $1$.", "diagram": null },
        { "stepNumber": 12, "description": "Check the logic.", "workingLatex": "\\dfrac{x^4}{x^4} = 1", "explanation": "Since top and bottom are identical, dividing gives $1$, confirming the zero-index result.", "diagram": null },
        { "stepNumber": 13, "description": "Reflect on the method.", "workingLatex": "\\text{simplify top and bottom, then divide}", "explanation": "Handling the numerator and denominator separately makes a busy expression manageable.", "diagram": null },
        { "stepNumber": 14, "description": "Note the negative index.", "workingLatex": "7 + (-3) = 4", "explanation": "Adding the negative index carefully was the key step that made the powers match.", "diagram": null }
      ],
      "finalAnswer": "$1$"
    }
  },
  {
    "id": "gcse.number.integer-indices.q063",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Integer indices",
    "subtopicId": "gcse.number.integer-indices",
    "difficulty": "Hard",
    "marks": 4,
    "answerType": "numeric",
    "tags": ["power of a power", "negative index", "evaluate"],
    "questionText": "Work out $(3^{-1})^{-2}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Read the expression.", "workingLatex": "(3^{-1})^{-2}", "explanation": "A power with a negative index is raised to another negative index.", "diagram": null },
        { "stepNumber": 2, "description": "Recall the power rule.", "workingLatex": "(3^a)^b = 3^{a \\times b}", "explanation": "A power raised to a power multiplies the indices, whatever their signs.", "diagram": null },
        { "stepNumber": 3, "description": "Multiply the indices.", "workingLatex": "(-1) \\times (-2) = 2", "explanation": "A negative times a negative gives a positive, so the new index is $2$.", "diagram": null },
        { "stepNumber": 4, "description": "Write as a single power.", "workingLatex": "(3^{-1})^{-2} = 3^2", "explanation": "The combined index is positive, so the answer is a whole number.", "diagram": null },
        { "stepNumber": 5, "description": "Evaluate the power.", "workingLatex": "3^2 = 9", "explanation": "Squaring $3$ gives $9$.", "diagram": null },
        { "stepNumber": 6, "description": "Check step by step.", "workingLatex": "3^{-1} = \\dfrac{1}{3}", "explanation": "First the inner power is one third.", "diagram": null },
        { "stepNumber": 7, "description": "Raise that to the power $-2$.", "workingLatex": "\\left(\\dfrac{1}{3}\\right)^{-2}", "explanation": "A negative index means take the reciprocal, then apply the positive power.", "diagram": null },
        { "stepNumber": 8, "description": "Take the reciprocal.", "workingLatex": "\\left(\\dfrac{1}{3}\\right)^{-2} = 3^{2}", "explanation": "Flipping the fraction $\\tfrac{1}{3}$ gives $3$, raised to the power $2$.", "diagram": null },
        { "stepNumber": 9, "description": "Confirm the value.", "workingLatex": "3^2 = 9", "explanation": "This matches the answer from the power rule.", "diagram": null },
        { "stepNumber": 10, "description": "State the final answer.", "workingLatex": "(3^{-1})^{-2} = 9", "explanation": "So the value is $9$.", "diagram": null },
        { "stepNumber": 11, "description": "Watch the signs.", "workingLatex": "(-1) \\times (-2) = 2", "explanation": "Getting the sign of the product right is the crucial step here.", "diagram": null },
        { "stepNumber": 12, "description": "Reflect on the idea.", "workingLatex": "\\text{two negatives make a positive index}", "explanation": "A negative power of a negative power can turn a fraction back into a whole number.", "diagram": null },
        { "stepNumber": 13, "description": "Final size check.", "workingLatex": "9 > 1", "explanation": "A positive final index gives a value larger than $1$, which fits.", "diagram": null }
      ],
      "finalAnswer": "$9$"
    }
  },
  {
    "id": "gcse.number.integer-indices.q064",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Integer indices",
    "subtopicId": "gcse.number.integer-indices",
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "numeric",
    "tags": ["product rule", "quotient rule", "negative index"],
    "questionText": "Write $\\dfrac{4^3 \\times 4^{-1}}{4^{-2}}$ as a single power of $4$, then evaluate it.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Look at the expression.", "workingLatex": "\\dfrac{4^3 \\times 4^{-1}}{4^{-2}}", "explanation": "Every power uses base $4$, and there are negative indices on the top and bottom.", "diagram": null },
        { "stepNumber": 2, "description": "Simplify the numerator.", "workingLatex": "4^3 \\times 4^{-1} = 4^{3+(-1)}", "explanation": "Multiplying like bases adds the indices.", "diagram": null },
        { "stepNumber": 3, "description": "Add the top indices.", "workingLatex": "3 + (-1) = 2", "explanation": "So the numerator becomes $4^2$.", "diagram": null },
        { "stepNumber": 4, "description": "Rewrite the fraction.", "workingLatex": "\\dfrac{4^2}{4^{-2}}", "explanation": "Now there is $4^2$ over $4^{-2}$.", "diagram": null },
        { "stepNumber": 5, "description": "Recall the quotient rule.", "workingLatex": "4^m \\div 4^n = 4^{m-n}", "explanation": "Dividing like bases subtracts the bottom index from the top.", "diagram": null },
        { "stepNumber": 6, "description": "Substitute the indices.", "workingLatex": "4^{2-(-2)}", "explanation": "The bottom index is $-2$, so we subtract a negative number.", "diagram": null },
        { "stepNumber": 7, "description": "Handle the double negative.", "workingLatex": "2 - (-2) = 2 + 2 = 4", "explanation": "Subtracting a negative is the same as adding, giving $4$.", "diagram": null },
        { "stepNumber": 8, "description": "Write as a single power.", "workingLatex": "\\dfrac{4^3 \\times 4^{-1}}{4^{-2}} = 4^4", "explanation": "Dividing by a negative power increases the index.", "diagram": null },
        { "stepNumber": 9, "description": "Evaluate the power.", "workingLatex": "4^4 = 4 \\times 4 \\times 4 \\times 4", "explanation": "To find the value we multiply four fours together.", "diagram": null },
        { "stepNumber": 10, "description": "Do the multiplication.", "workingLatex": "4^4 = 256", "explanation": "Building up: $16$, $64$, $256$.", "diagram": null },
        { "stepNumber": 11, "description": "Check in one line.", "workingLatex": "3 + (-1) - (-2) = 4", "explanation": "Adding the top indices and subtracting the bottom gives the same index of $4$.", "diagram": null },
        { "stepNumber": 12, "description": "State the final answer.", "workingLatex": "\\dfrac{4^3 \\times 4^{-1}}{4^{-2}} = 4^4 = 256", "explanation": "So the single power is $4^4$, which equals $256$.", "diagram": null },
        { "stepNumber": 13, "description": "Reflect on the key move.", "workingLatex": "\\div 4^{-2} = \\times 4^{2}", "explanation": "Dividing by a negative power is the trickiest step, so treat it as multiplying by the positive power.", "diagram": null }
      ],
      "finalAnswer": "$4^4 = 256$"
    }
  },
  {
    "id": "gcse.number.integer-indices.q065",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Integer indices",
    "subtopicId": "gcse.number.integer-indices",
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "numeric",
    "tags": ["product rule", "quotient rule", "negative index"],
    "questionText": "Write $\\dfrac{10^2 \\times 10^{-5}}{10^{-1}}$ as a single power of $10$, then evaluate it as a fraction.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Look at the expression.", "workingLatex": "\\dfrac{10^2 \\times 10^{-5}}{10^{-1}}", "explanation": "Every power uses base $10$, with negative indices on the top and bottom.", "diagram": null },
        { "stepNumber": 2, "description": "Simplify the numerator.", "workingLatex": "10^2 \\times 10^{-5} = 10^{2+(-5)}", "explanation": "Multiplying like bases adds the indices.", "diagram": null },
        { "stepNumber": 3, "description": "Add the top indices.", "workingLatex": "2 + (-5) = -3", "explanation": "So the numerator becomes $10^{-3}$.", "diagram": null },
        { "stepNumber": 4, "description": "Rewrite the fraction.", "workingLatex": "\\dfrac{10^{-3}}{10^{-1}}", "explanation": "Now there is $10^{-3}$ over $10^{-1}$.", "diagram": null },
        { "stepNumber": 5, "description": "Recall the quotient rule.", "workingLatex": "10^m \\div 10^n = 10^{m-n}", "explanation": "Dividing like bases subtracts the bottom index from the top.", "diagram": null },
        { "stepNumber": 6, "description": "Substitute the indices.", "workingLatex": "10^{-3-(-1)}", "explanation": "The bottom index is $-1$, so we subtract a negative number.", "diagram": null },
        { "stepNumber": 7, "description": "Handle the double negative.", "workingLatex": "-3 - (-1) = -3 + 1 = -2", "explanation": "Subtracting a negative adds, moving the index up to $-2$.", "diagram": null },
        { "stepNumber": 8, "description": "Write as a power.", "workingLatex": "\\dfrac{10^2 \\times 10^{-5}}{10^{-1}} = 10^{-2}", "explanation": "The single combined power is $10^{-2}$.", "diagram": null },
        { "stepNumber": 9, "description": "Recall the negative-index rule.", "workingLatex": "10^{-n} = \\dfrac{1}{10^{n}}", "explanation": "A negative index becomes a reciprocal.", "diagram": null },
        { "stepNumber": 10, "description": "Apply it.", "workingLatex": "10^{-2} = \\dfrac{1}{10^{2}}", "explanation": "The power moves into the denominator under a $1$.", "diagram": null },
        { "stepNumber": 11, "description": "Evaluate the denominator.", "workingLatex": "10^2 = 100", "explanation": "Squaring $10$ gives $100$.", "diagram": null },
        { "stepNumber": 12, "description": "Write the fraction.", "workingLatex": "\\dfrac{10^2 \\times 10^{-5}}{10^{-1}} = \\dfrac{1}{100}", "explanation": "So the value is one hundredth.", "diagram": null },
        { "stepNumber": 13, "description": "Check in one line.", "workingLatex": "2 + (-5) - (-1) = -2", "explanation": "Adding the top indices and subtracting the bottom gives the same index of $-2$.", "diagram": null },
        { "stepNumber": 14, "description": "State the final answer.", "workingLatex": "\\dfrac{10^2 \\times 10^{-5}}{10^{-1}} = 10^{-2} = \\dfrac{1}{100}", "explanation": "So the single power is $10^{-2}$, which equals $\\tfrac{1}{100}$.", "diagram": null }
      ],
      "finalAnswer": "$10^{-2} = \\dfrac{1}{100}$"
    }
  },
  {
    "id": "gcse.number.integer-indices.q066",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Integer indices",
    "subtopicId": "gcse.number.integer-indices",
    "difficulty": "Hard",
    "marks": 4,
    "answerType": "algebraic",
    "tags": ["power of a power", "product rule", "negative index"],
    "questionText": "Simplify $(x^{-2})^3 \\times x^8$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Look at the expression.", "workingLatex": "(x^{-2})^3 \\times x^8", "explanation": "There is a power of a power with a negative index, then a multiplication.", "diagram": null },
        { "stepNumber": 2, "description": "Deal with the bracket.", "workingLatex": "(x^{-2})^3 = x^{-2 \\times 3}", "explanation": "A power raised to a power multiplies the indices, keeping the negative sign.", "diagram": null },
        { "stepNumber": 3, "description": "Multiply the indices.", "workingLatex": "-2 \\times 3 = -6", "explanation": "So the bracket becomes $x^{-6}$.", "diagram": null },
        { "stepNumber": 4, "description": "Rewrite the expression.", "workingLatex": "x^{-6} \\times x^8", "explanation": "Now it is a product of two powers of $x$.", "diagram": null },
        { "stepNumber": 5, "description": "Recall the product rule.", "workingLatex": "x^a \\times x^b = x^{a+b}", "explanation": "Multiplying like bases adds the indices.", "diagram": null },
        { "stepNumber": 6, "description": "Add the indices.", "workingLatex": "-6 + 8 = 2", "explanation": "Starting from $-6$ and adding $8$ gives $2$.", "diagram": null },
        { "stepNumber": 7, "description": "Write the single power.", "workingLatex": "(x^{-2})^3 \\times x^8 = x^2", "explanation": "The combined index is a positive $2$.", "diagram": null },
        { "stepNumber": 8, "description": "State the final answer.", "workingLatex": "(x^{-2})^3 \\times x^8 = x^2", "explanation": "So the simplified form is $x^2$.", "diagram": null },
        { "stepNumber": 9, "description": "Watch the sign.", "workingLatex": "-2 \\times 3 = -6", "explanation": "Keeping the negative sign in the power rule is the key step.", "diagram": null },
        { "stepNumber": 10, "description": "Reflect on the result.", "workingLatex": "\\text{negative index cancelled out}", "explanation": "Multiplying by a large enough positive power turned the overall index positive again.", "diagram": null },
        { "stepNumber": 11, "description": "Check the order.", "workingLatex": "\\text{bracket first, then multiply}", "explanation": "Simplifying the power of a power before multiplying keeps each law separate and correct.", "diagram": null },
        { "stepNumber": 12, "description": "Final confirmation.", "workingLatex": "x^{-6} \\times x^8 = x^{2}", "explanation": "The tidy single power $x^2$ confirms the working.", "diagram": null },
        { "stepNumber": 13, "description": "Sense-check.", "workingLatex": "-6 + 8 = 2", "explanation": "The index sum is positive, so no reciprocal is needed in the final answer.", "diagram": null }
      ],
      "finalAnswer": "$x^2$"
    }
  },
  {
    "id": "gcse.number.integer-indices.q067",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Integer indices",
    "subtopicId": "gcse.number.integer-indices",
    "difficulty": "Hard",
    "marks": 4,
    "answerType": "numeric",
    "tags": ["quotient rule", "zero index", "negative index"],
    "questionText": "Write $\\dfrac{6^4 \\times 6^{-2}}{6^0}$ as a single power of $6$, then evaluate it.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Look at the expression.", "workingLatex": "\\dfrac{6^4 \\times 6^{-2}}{6^0}", "explanation": "Every power uses base $6$, with a negative index on top and a zero index on the bottom.", "diagram": null },
        { "stepNumber": 2, "description": "Use the zero-index rule.", "workingLatex": "6^0 = 1", "explanation": "Any non-zero base to the power $0$ equals $1$, so the denominator is just $1$.", "diagram": null },
        { "stepNumber": 3, "description": "Simplify the numerator.", "workingLatex": "6^4 \\times 6^{-2} = 6^{4+(-2)}", "explanation": "Multiplying like bases adds the indices.", "diagram": null },
        { "stepNumber": 4, "description": "Add the top indices.", "workingLatex": "4 + (-2) = 2", "explanation": "So the numerator becomes $6^2$.", "diagram": null },
        { "stepNumber": 5, "description": "Rewrite the fraction.", "workingLatex": "\\dfrac{6^2}{1}", "explanation": "Dividing by $1$ leaves the numerator unchanged.", "diagram": null },
        { "stepNumber": 6, "description": "Simplify the division.", "workingLatex": "\\dfrac{6^2}{1} = 6^2", "explanation": "So the whole expression is just $6^2$.", "diagram": null },
        { "stepNumber": 7, "description": "Evaluate the power.", "workingLatex": "6^2 = 6 \\times 6 = 36", "explanation": "Squaring $6$ gives $36$.", "diagram": null },
        { "stepNumber": 8, "description": "Check with the quotient rule.", "workingLatex": "\\dfrac{6^2}{6^0} = 6^{2-0}", "explanation": "Dividing by $6^0$ subtracts $0$ from the index, changing nothing.", "diagram": null },
        { "stepNumber": 9, "description": "Confirm the index.", "workingLatex": "2 - 0 = 2", "explanation": "This confirms the single power is $6^2$.", "diagram": null },
        { "stepNumber": 10, "description": "State the final answer.", "workingLatex": "\\dfrac{6^4 \\times 6^{-2}}{6^0} = 6^2 = 36", "explanation": "So the single power is $6^2$, which equals $36$.", "diagram": null },
        { "stepNumber": 11, "description": "Reflect on the zero index.", "workingLatex": "\\div 6^0 = \\div 1", "explanation": "Dividing by a zero power never changes the value.", "diagram": null },
        { "stepNumber": 12, "description": "Reflect on the negative index.", "workingLatex": "4 + (-2) = 2", "explanation": "Adding the negative index reduced the top index from $4$ to $2$.", "diagram": null },
        { "stepNumber": 13, "description": "Final sense-check.", "workingLatex": "6^2 = 36 > 1", "explanation": "A positive final index gives a value larger than $1$, which fits.", "diagram": null }
      ],
      "finalAnswer": "$6^2 = 36$"
    }
  },
  {
    "id": "gcse.number.integer-indices.q068",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Integer indices",
    "subtopicId": "gcse.number.integer-indices",
    "difficulty": "Hard",
    "marks": 4,
    "answerType": "numeric",
    "tags": ["quotient rule", "negative index", "evaluate"],
    "questionText": "Write $\\dfrac{2^4}{2^6}$ as a single power of $2$, then evaluate it as a fraction.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Note the shared base.", "workingLatex": "\\dfrac{2^4}{2^6}", "explanation": "Both powers use base $2$, so the quotient rule applies.", "diagram": null },
        { "stepNumber": 2, "description": "Recall the quotient rule.", "workingLatex": "2^m \\div 2^n = 2^{m-n}", "explanation": "Dividing like bases subtracts the indices.", "diagram": null },
        { "stepNumber": 3, "description": "Subtract the indices.", "workingLatex": "4 - 6 = -2", "explanation": "The bottom index is larger, so the result has a negative index.", "diagram": null },
        { "stepNumber": 4, "description": "Write as a power.", "workingLatex": "\\dfrac{2^4}{2^6} = 2^{-2}", "explanation": "A negative index shows there are more twos on the bottom.", "diagram": null },
        { "stepNumber": 5, "description": "Recall the negative-index rule.", "workingLatex": "2^{-n} = \\dfrac{1}{2^{n}}", "explanation": "A negative index becomes a reciprocal.", "diagram": null },
        { "stepNumber": 6, "description": "Apply it.", "workingLatex": "2^{-2} = \\dfrac{1}{2^{2}}", "explanation": "The power moves into the denominator under a $1$.", "diagram": null },
        { "stepNumber": 7, "description": "Evaluate the denominator.", "workingLatex": "2^2 = 4", "explanation": "Squaring $2$ gives $4$.", "diagram": null },
        { "stepNumber": 8, "description": "Write the fraction.", "workingLatex": "\\dfrac{2^4}{2^6} = \\dfrac{1}{4}", "explanation": "So the value is one quarter.", "diagram": null },
        { "stepNumber": 9, "description": "Check by cancelling.", "workingLatex": "\\dfrac{2^4}{2^6} = \\dfrac{1}{2^{2}}", "explanation": "Cancelling four twos from top and bottom leaves two on the bottom.", "diagram": null },
        { "stepNumber": 10, "description": "Confirm the value.", "workingLatex": "\\dfrac{16}{64} = \\dfrac{1}{4}", "explanation": "Working out each power and cancelling gives the same one quarter.", "diagram": null },
        { "stepNumber": 11, "description": "State the final answer.", "workingLatex": "\\dfrac{2^4}{2^6} = 2^{-2} = \\dfrac{1}{4}", "explanation": "So the single power is $2^{-2}$, which equals $\\tfrac{1}{4}$.", "diagram": null },
        { "stepNumber": 12, "description": "Reflect on the idea.", "workingLatex": "\\text{smaller top index} \\Rightarrow \\text{fraction}", "explanation": "When the numerator has the smaller index, the answer is a fraction below $1$.", "diagram": null },
        { "stepNumber": 13, "description": "Final size check.", "workingLatex": "0 < \\dfrac{1}{4} < 1", "explanation": "A proper fraction is exactly what a negative index gives here.", "diagram": null }
      ],
      "finalAnswer": "$2^{-2} = \\dfrac{1}{4}$"
    }
  },
  {
    "id": "gcse.number.integer-indices.q069",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Integer indices",
    "subtopicId": "gcse.number.integer-indices",
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "numeric",
    "tags": ["power of a power", "product rule", "quotient rule"],
    "questionText": "Write $\\dfrac{(2^{-2})^2 \\times 2^5}{2^3}$ as a single power of $2$, then evaluate it as a fraction.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Look at the expression.", "workingLatex": "\\dfrac{(2^{-2})^2 \\times 2^5}{2^3}", "explanation": "There is a power of a power, a product, and a division, all with base $2$.", "diagram": null },
        { "stepNumber": 2, "description": "Deal with the bracket.", "workingLatex": "(2^{-2})^2 = 2^{-2 \\times 2}", "explanation": "A power raised to a power multiplies the indices, keeping the negative sign.", "diagram": null },
        { "stepNumber": 3, "description": "Multiply those indices.", "workingLatex": "-2 \\times 2 = -4", "explanation": "So the bracket becomes $2^{-4}$.", "diagram": null },
        { "stepNumber": 4, "description": "Simplify the numerator.", "workingLatex": "2^{-4} \\times 2^5 = 2^{-4+5}", "explanation": "Multiplying like bases adds the indices.", "diagram": null },
        { "stepNumber": 5, "description": "Add the top indices.", "workingLatex": "-4 + 5 = 1", "explanation": "So the numerator becomes $2^1$.", "diagram": null },
        { "stepNumber": 6, "description": "Rewrite the fraction.", "workingLatex": "\\dfrac{2^1}{2^3}", "explanation": "Now there is one power on top and one on the bottom.", "diagram": null },
        { "stepNumber": 7, "description": "Recall the quotient rule.", "workingLatex": "2^m \\div 2^n = 2^{m-n}", "explanation": "Dividing like bases subtracts the indices.", "diagram": null },
        { "stepNumber": 8, "description": "Subtract the indices.", "workingLatex": "1 - 3 = -2", "explanation": "The bottom index is larger, so the result is negative.", "diagram": null },
        { "stepNumber": 9, "description": "Write as a power.", "workingLatex": "\\dfrac{(2^{-2})^2 \\times 2^5}{2^3} = 2^{-2}", "explanation": "The single combined power is $2^{-2}$.", "diagram": null },
        { "stepNumber": 10, "description": "Recall the negative-index rule.", "workingLatex": "2^{-n} = \\dfrac{1}{2^{n}}", "explanation": "A negative index becomes a reciprocal.", "diagram": null },
        { "stepNumber": 11, "description": "Apply it.", "workingLatex": "2^{-2} = \\dfrac{1}{2^{2}} = \\dfrac{1}{4}", "explanation": "Since $2^2 = 4$, the value is one quarter.", "diagram": null },
        { "stepNumber": 12, "description": "Check in one line.", "workingLatex": "(-2 \\times 2) + 5 - 3 = -2", "explanation": "Combining every index law in one calculation gives the same index of $-2$.", "diagram": null },
        { "stepNumber": 13, "description": "State the final answer.", "workingLatex": "\\dfrac{(2^{-2})^2 \\times 2^5}{2^3} = 2^{-2} = \\dfrac{1}{4}", "explanation": "So the single power is $2^{-2}$, which equals $\\tfrac{1}{4}$.", "diagram": null },
        { "stepNumber": 14, "description": "Reflect on the method.", "workingLatex": "\\text{power, product, quotient, then flip}", "explanation": "Working through the laws in order keeps a heavily layered expression under control.", "diagram": null }
      ],
      "finalAnswer": "$2^{-2} = \\dfrac{1}{4}$"
    }
  },
  {
    "id": "gcse.number.integer-indices.q070",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Integer indices",
    "subtopicId": "gcse.number.integer-indices",
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "algebraic",
    "tags": ["product rule", "power of a power", "quotient rule"],
    "questionText": "Simplify $(x^4 \\times x^{-1})^2 \\div x^2$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Look inside the bracket.", "workingLatex": "(x^4 \\times x^{-1})^2 \\div x^2", "explanation": "We simplify the inside of the bracket first, then apply the square, then divide.", "diagram": null },
        { "stepNumber": 2, "description": "Use the product rule inside.", "workingLatex": "x^4 \\times x^{-1} = x^{4+(-1)}", "explanation": "Multiplying like bases adds the indices, even with a negative one.", "diagram": null },
        { "stepNumber": 3, "description": "Add the inside indices.", "workingLatex": "4 + (-1) = 3", "explanation": "So the inside of the bracket becomes $x^3$.", "diagram": null },
        { "stepNumber": 4, "description": "Rewrite the bracket.", "workingLatex": "(x^3)^2 \\div x^2", "explanation": "Now the bracket is a simple power of a power.", "diagram": null },
        { "stepNumber": 5, "description": "Recall the power rule.", "workingLatex": "(x^a)^b = x^{a \\times b}", "explanation": "A power raised to a power multiplies the indices.", "diagram": null },
        { "stepNumber": 6, "description": "Apply the square.", "workingLatex": "(x^3)^2 = x^{3 \\times 2} = x^6", "explanation": "Squaring doubles the index to $6$.", "diagram": null },
        { "stepNumber": 7, "description": "Rewrite the expression.", "workingLatex": "x^6 \\div x^2", "explanation": "Now it is a straightforward division.", "diagram": null },
        { "stepNumber": 8, "description": "Recall the quotient rule.", "workingLatex": "x^m \\div x^n = x^{m-n}", "explanation": "Dividing like bases subtracts the indices.", "diagram": null },
        { "stepNumber": 9, "description": "Subtract the indices.", "workingLatex": "6 - 2 = 4", "explanation": "Two $x$ factors cancel, leaving four.", "diagram": null },
        { "stepNumber": 10, "description": "Write the single power.", "workingLatex": "(x^4 \\times x^{-1})^2 \\div x^2 = x^4", "explanation": "The surviving factors form $x^4$.", "diagram": null },
        { "stepNumber": 11, "description": "Check in one line.", "workingLatex": "(4 + (-1)) \\times 2 - 2 = 4", "explanation": "Combining every index law in one calculation gives the same result.", "diagram": null },
        { "stepNumber": 12, "description": "State the final answer.", "workingLatex": "(x^4 \\times x^{-1})^2 \\div x^2 = x^4", "explanation": "So the simplified form is $x^4$.", "diagram": null },
        { "stepNumber": 13, "description": "Reflect on the order.", "workingLatex": "\\text{inside bracket, then square, then divide}", "explanation": "Respecting the order of operations turns a layered expression into three simple index-law steps.", "diagram": null },
        { "stepNumber": 14, "description": "Note the negative index.", "workingLatex": "4 + (-1) = 3", "explanation": "Handling the negative index early made the rest of the working clean.", "diagram": null }
      ],
      "finalAnswer": "$x^4$"
    }
  }
];
