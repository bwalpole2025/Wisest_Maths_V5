import { Question } from "@/lib/types";

export const questions: Question[] = [
  {
    "id": "gcse.algebra.expanding-binomials.q001",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Expanding binomials",
    "subtopicId": "gcse.algebra.expanding-binomials",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "expression",
    "tags": ["expanding brackets", "FOIL", "quadratic", "binomials"],
    "questionText": "Expand and simplify $(x+1)(x+2)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Choose a method for expanding the two brackets.", "workingLatex": "(x+1)(x+2)", "explanation": "Every term in the first bracket must multiply every term in the second. FOIL (First, Outer, Inner, Last) is a reliable order that guarantees all four products are found.", "diagram": null },
        { "stepNumber": 2, "description": "Multiply the First terms.", "workingLatex": "x \\times x = x^{2}", "explanation": "The two leading $x$ terms give the squared term that begins the expansion.", "diagram": null },
        { "stepNumber": 3, "description": "Multiply the Outer terms.", "workingLatex": "x \\times 2 = 2x", "explanation": "The outermost terms $x$ and $+2$ give one of the two middle terms.", "diagram": null },
        { "stepNumber": 4, "description": "Multiply the Inner terms.", "workingLatex": "1 \\times x = x", "explanation": "The innermost terms $+1$ and $x$ give the other middle term.", "diagram": null },
        { "stepNumber": 5, "description": "Multiply the Last terms.", "workingLatex": "1 \\times 2 = 2", "explanation": "The two constants multiply to give the number at the end.", "diagram": null },
        { "stepNumber": 6, "description": "Add the four products together.", "workingLatex": "x^{2} + 2x + x + 2", "explanation": "Writing all four products out keeps every contribution visible before we tidy up.", "diagram": null },
        { "stepNumber": 7, "description": "Collect the like terms.", "workingLatex": "x^{2} + 3x + 2", "explanation": "The two $x$ terms, $2x$ and $x$, are like terms and add to $3x$.", "diagram": null },
        { "stepNumber": 8, "description": "State the final answer.", "workingLatex": "x^{2} + 3x + 2", "explanation": "The expression is now a simplified quadratic in the form $x^{2}+bx+c$.", "diagram": null }
      ],
      "finalAnswer": "$x^{2} + 3x + 2$"
    }
  },
  {
    "id": "gcse.algebra.expanding-binomials.q002",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Expanding binomials",
    "subtopicId": "gcse.algebra.expanding-binomials",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "expression",
    "tags": ["expanding brackets", "FOIL", "quadratic", "binomials"],
    "questionText": "Expand and simplify $(x+2)(x+3)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Choose a method for expanding.", "workingLatex": "(x+2)(x+3)", "explanation": "We will multiply each term in the first bracket by each term in the second using FOIL.", "diagram": null },
        { "stepNumber": 2, "description": "Multiply the First terms.", "workingLatex": "x \\times x = x^{2}", "explanation": "The leading terms combine to give the squared term.", "diagram": null },
        { "stepNumber": 3, "description": "Multiply the Outer terms.", "workingLatex": "x \\times 3 = 3x", "explanation": "The outer pair $x$ and $+3$ produce one middle term.", "diagram": null },
        { "stepNumber": 4, "description": "Multiply the Inner terms.", "workingLatex": "2 \\times x = 2x", "explanation": "The inner pair $+2$ and $x$ produce the other middle term.", "diagram": null },
        { "stepNumber": 5, "description": "Multiply the Last terms.", "workingLatex": "2 \\times 3 = 6", "explanation": "The constants multiply to give the final number.", "diagram": null },
        { "stepNumber": 6, "description": "Add the four products.", "workingLatex": "x^{2} + 3x + 2x + 6", "explanation": "All four products are laid out ready to be simplified.", "diagram": null },
        { "stepNumber": 7, "description": "Collect the like terms.", "workingLatex": "x^{2} + 5x + 6", "explanation": "The like terms $3x$ and $2x$ add to $5x$.", "diagram": null },
        { "stepNumber": 8, "description": "State the final answer.", "workingLatex": "x^{2} + 5x + 6", "explanation": "Notice $5$ is the sum of $2$ and $3$, and $6$ is their product — a useful check for $(x+a)(x+b)$.", "diagram": null }
      ],
      "finalAnswer": "$x^{2} + 5x + 6$"
    }
  },
  {
    "id": "gcse.algebra.expanding-binomials.q003",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Expanding binomials",
    "subtopicId": "gcse.algebra.expanding-binomials",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "expression",
    "tags": ["expanding brackets", "FOIL", "quadratic", "binomials"],
    "questionText": "Expand and simplify $(x+3)(x+4)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Set up the expansion.", "workingLatex": "(x+3)(x+4)", "explanation": "Each term of the first bracket multiplies each term of the second; FOIL keeps the order clear.", "diagram": null },
        { "stepNumber": 2, "description": "Multiply the First terms.", "workingLatex": "x \\times x = x^{2}", "explanation": "The two $x$ terms give the squared term.", "diagram": null },
        { "stepNumber": 3, "description": "Multiply the Outer terms.", "workingLatex": "x \\times 4 = 4x", "explanation": "The outer pair gives a middle term of $4x$.", "diagram": null },
        { "stepNumber": 4, "description": "Multiply the Inner terms.", "workingLatex": "3 \\times x = 3x", "explanation": "The inner pair gives a middle term of $3x$.", "diagram": null },
        { "stepNumber": 5, "description": "Multiply the Last terms.", "workingLatex": "3 \\times 4 = 12", "explanation": "The constants give the number at the end.", "diagram": null },
        { "stepNumber": 6, "description": "Add the four products.", "workingLatex": "x^{2} + 4x + 3x + 12", "explanation": "Everything is written out before collecting.", "diagram": null },
        { "stepNumber": 7, "description": "Collect the like terms.", "workingLatex": "x^{2} + 7x + 12", "explanation": "The middle terms $4x$ and $3x$ combine to $7x$.", "diagram": null },
        { "stepNumber": 8, "description": "State the final answer.", "workingLatex": "x^{2} + 7x + 12", "explanation": "Sum $3+4=7$ and product $3\\times4=12$ confirm the coefficients.", "diagram": null }
      ],
      "finalAnswer": "$x^{2} + 7x + 12$"
    }
  },
  {
    "id": "gcse.algebra.expanding-binomials.q004",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Expanding binomials",
    "subtopicId": "gcse.algebra.expanding-binomials",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "expression",
    "tags": ["expanding brackets", "FOIL", "quadratic", "binomials"],
    "questionText": "Expand and simplify $(x+1)(x+5)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Set up the expansion.", "workingLatex": "(x+1)(x+5)", "explanation": "Use FOIL so that all four products between the brackets are captured.", "diagram": null },
        { "stepNumber": 2, "description": "Multiply the First terms.", "workingLatex": "x \\times x = x^{2}", "explanation": "The leading $x$ terms give the squared term.", "diagram": null },
        { "stepNumber": 3, "description": "Multiply the Outer terms.", "workingLatex": "x \\times 5 = 5x", "explanation": "The outer pair gives $5x$.", "diagram": null },
        { "stepNumber": 4, "description": "Multiply the Inner terms.", "workingLatex": "1 \\times x = x", "explanation": "The inner pair gives $x$.", "diagram": null },
        { "stepNumber": 5, "description": "Multiply the Last terms.", "workingLatex": "1 \\times 5 = 5", "explanation": "The constants give $5$.", "diagram": null },
        { "stepNumber": 6, "description": "Add the four products.", "workingLatex": "x^{2} + 5x + x + 5", "explanation": "All products are laid out ready to simplify.", "diagram": null },
        { "stepNumber": 7, "description": "Collect the like terms.", "workingLatex": "x^{2} + 6x + 5", "explanation": "$5x$ and $x$ add to $6x$.", "diagram": null },
        { "stepNumber": 8, "description": "State the final answer.", "workingLatex": "x^{2} + 6x + 5", "explanation": "The simplified quadratic is complete.", "diagram": null }
      ],
      "finalAnswer": "$x^{2} + 6x + 5$"
    }
  },
  {
    "id": "gcse.algebra.expanding-binomials.q005",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Expanding binomials",
    "subtopicId": "gcse.algebra.expanding-binomials",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "expression",
    "tags": ["expanding brackets", "FOIL", "quadratic", "binomials"],
    "questionText": "Expand and simplify $(x+2)(x+5)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Set up the expansion.", "workingLatex": "(x+2)(x+5)", "explanation": "Multiply each term of the first bracket by each term of the second using FOIL.", "diagram": null },
        { "stepNumber": 2, "description": "Multiply the First terms.", "workingLatex": "x \\times x = x^{2}", "explanation": "The leading terms give $x^{2}$.", "diagram": null },
        { "stepNumber": 3, "description": "Multiply the Outer terms.", "workingLatex": "x \\times 5 = 5x", "explanation": "The outer pair gives $5x$.", "diagram": null },
        { "stepNumber": 4, "description": "Multiply the Inner terms.", "workingLatex": "2 \\times x = 2x", "explanation": "The inner pair gives $2x$.", "diagram": null },
        { "stepNumber": 5, "description": "Multiply the Last terms.", "workingLatex": "2 \\times 5 = 10", "explanation": "The constants give $10$.", "diagram": null },
        { "stepNumber": 6, "description": "Add the four products.", "workingLatex": "x^{2} + 5x + 2x + 10", "explanation": "Every product is now written out.", "diagram": null },
        { "stepNumber": 7, "description": "Collect the like terms.", "workingLatex": "x^{2} + 7x + 10", "explanation": "$5x$ and $2x$ combine to $7x$.", "diagram": null },
        { "stepNumber": 8, "description": "State the final answer.", "workingLatex": "x^{2} + 7x + 10", "explanation": "Sum $2+5=7$ and product $2\\times5=10$ confirm the result.", "diagram": null }
      ],
      "finalAnswer": "$x^{2} + 7x + 10$"
    }
  },
  {
    "id": "gcse.algebra.expanding-binomials.q006",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Expanding binomials",
    "subtopicId": "gcse.algebra.expanding-binomials",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": ["expanding brackets", "FOIL", "grid method", "quadratic"],
    "questionText": "Expand and simplify $(x+4)(x+6)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Set up the expansion.", "workingLatex": "(x+4)(x+6)", "explanation": "We will find all four products using FOIL. A grid method would give exactly the same four products.", "diagram": null },
        { "stepNumber": 2, "description": "Multiply the First terms.", "workingLatex": "x \\times x = x^{2}", "explanation": "The two $x$ terms give the squared term.", "diagram": null },
        { "stepNumber": 3, "description": "Multiply the Outer terms.", "workingLatex": "x \\times 6 = 6x", "explanation": "The outer pair gives $6x$.", "diagram": null },
        { "stepNumber": 4, "description": "Multiply the Inner terms.", "workingLatex": "4 \\times x = 4x", "explanation": "The inner pair gives $4x$.", "diagram": null },
        { "stepNumber": 5, "description": "Multiply the Last terms.", "workingLatex": "4 \\times 6 = 24", "explanation": "The constants give $24$.", "diagram": null },
        { "stepNumber": 6, "description": "Add the four products.", "workingLatex": "x^{2} + 6x + 4x + 24", "explanation": "All four products are laid out.", "diagram": null },
        { "stepNumber": 7, "description": "Collect the like terms.", "workingLatex": "x^{2} + 10x + 24", "explanation": "$6x$ and $4x$ combine to $10x$.", "diagram": null },
        { "stepNumber": 8, "description": "State the final answer.", "workingLatex": "x^{2} + 10x + 24", "explanation": "Sum $4+6=10$ and product $4\\times6=24$ confirm the coefficients.", "diagram": null }
      ],
      "finalAnswer": "$x^{2} + 10x + 24$"
    }
  },
  {
    "id": "gcse.algebra.expanding-binomials.q007",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Expanding binomials",
    "subtopicId": "gcse.algebra.expanding-binomials",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": ["expanding brackets", "FOIL", "quadratic", "binomials"],
    "questionText": "Expand and simplify $(x+3)(x+7)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Set up the expansion.", "workingLatex": "(x+3)(x+7)", "explanation": "Use FOIL to reach all four products between the brackets.", "diagram": null },
        { "stepNumber": 2, "description": "Multiply the First terms.", "workingLatex": "x \\times x = x^{2}", "explanation": "The leading terms give $x^{2}$.", "diagram": null },
        { "stepNumber": 3, "description": "Multiply the Outer terms.", "workingLatex": "x \\times 7 = 7x", "explanation": "The outer pair gives $7x$.", "diagram": null },
        { "stepNumber": 4, "description": "Multiply the Inner terms.", "workingLatex": "3 \\times x = 3x", "explanation": "The inner pair gives $3x$.", "diagram": null },
        { "stepNumber": 5, "description": "Multiply the Last terms.", "workingLatex": "3 \\times 7 = 21", "explanation": "The constants give $21$.", "diagram": null },
        { "stepNumber": 6, "description": "Add the four products.", "workingLatex": "x^{2} + 7x + 3x + 21", "explanation": "All products written out.", "diagram": null },
        { "stepNumber": 7, "description": "Collect the like terms.", "workingLatex": "x^{2} + 10x + 21", "explanation": "$7x$ and $3x$ combine to $10x$.", "diagram": null },
        { "stepNumber": 8, "description": "State the final answer.", "workingLatex": "x^{2} + 10x + 21", "explanation": "Sum $3+7=10$ and product $3\\times7=21$ confirm the answer.", "diagram": null }
      ],
      "finalAnswer": "$x^{2} + 10x + 21$"
    }
  },
  {
    "id": "gcse.algebra.expanding-binomials.q008",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Expanding binomials",
    "subtopicId": "gcse.algebra.expanding-binomials",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "expression",
    "tags": ["expanding brackets", "FOIL", "quadratic", "binomials"],
    "questionText": "Expand and simplify $(x+6)(x+1)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Set up the expansion.", "workingLatex": "(x+6)(x+1)", "explanation": "Multiply each term in the first bracket by each term in the second using FOIL.", "diagram": null },
        { "stepNumber": 2, "description": "Multiply the First terms.", "workingLatex": "x \\times x = x^{2}", "explanation": "The two $x$ terms give $x^{2}$.", "diagram": null },
        { "stepNumber": 3, "description": "Multiply the Outer terms.", "workingLatex": "x \\times 1 = x", "explanation": "The outer pair gives $x$.", "diagram": null },
        { "stepNumber": 4, "description": "Multiply the Inner terms.", "workingLatex": "6 \\times x = 6x", "explanation": "The inner pair gives $6x$.", "diagram": null },
        { "stepNumber": 5, "description": "Multiply the Last terms.", "workingLatex": "6 \\times 1 = 6", "explanation": "The constants give $6$.", "diagram": null },
        { "stepNumber": 6, "description": "Add the four products.", "workingLatex": "x^{2} + x + 6x + 6", "explanation": "All four products laid out.", "diagram": null },
        { "stepNumber": 7, "description": "Collect the like terms.", "workingLatex": "x^{2} + 7x + 6", "explanation": "$x$ and $6x$ combine to $7x$.", "diagram": null },
        { "stepNumber": 8, "description": "State the final answer.", "workingLatex": "x^{2} + 7x + 6", "explanation": "The order of the brackets does not change the result.", "diagram": null }
      ],
      "finalAnswer": "$x^{2} + 7x + 6$"
    }
  },
  {
    "id": "gcse.algebra.expanding-binomials.q009",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Expanding binomials",
    "subtopicId": "gcse.algebra.expanding-binomials",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": ["expanding brackets", "FOIL", "quadratic", "binomials"],
    "questionText": "Expand and simplify $(x+5)(x+8)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Set up the expansion.", "workingLatex": "(x+5)(x+8)", "explanation": "Use FOIL to find all four products.", "diagram": null },
        { "stepNumber": 2, "description": "Multiply the First terms.", "workingLatex": "x \\times x = x^{2}", "explanation": "The leading terms give $x^{2}$.", "diagram": null },
        { "stepNumber": 3, "description": "Multiply the Outer terms.", "workingLatex": "x \\times 8 = 8x", "explanation": "The outer pair gives $8x$.", "diagram": null },
        { "stepNumber": 4, "description": "Multiply the Inner terms.", "workingLatex": "5 \\times x = 5x", "explanation": "The inner pair gives $5x$.", "diagram": null },
        { "stepNumber": 5, "description": "Multiply the Last terms.", "workingLatex": "5 \\times 8 = 40", "explanation": "The constants give $40$.", "diagram": null },
        { "stepNumber": 6, "description": "Add the four products.", "workingLatex": "x^{2} + 8x + 5x + 40", "explanation": "All products written out.", "diagram": null },
        { "stepNumber": 7, "description": "Collect the like terms.", "workingLatex": "x^{2} + 13x + 40", "explanation": "$8x$ and $5x$ combine to $13x$.", "diagram": null },
        { "stepNumber": 8, "description": "State the final answer.", "workingLatex": "x^{2} + 13x + 40", "explanation": "Sum $5+8=13$ and product $5\\times8=40$ confirm the coefficients.", "diagram": null }
      ],
      "finalAnswer": "$x^{2} + 13x + 40$"
    }
  },
  {
    "id": "gcse.algebra.expanding-binomials.q010",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Expanding binomials",
    "subtopicId": "gcse.algebra.expanding-binomials",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": ["expanding brackets", "FOIL", "quadratic", "binomials"],
    "questionText": "Expand and simplify $(x+2)(x+9)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Set up the expansion.", "workingLatex": "(x+2)(x+9)", "explanation": "Use FOIL so that all four products are included.", "diagram": null },
        { "stepNumber": 2, "description": "Multiply the First terms.", "workingLatex": "x \\times x = x^{2}", "explanation": "The leading terms give $x^{2}$.", "diagram": null },
        { "stepNumber": 3, "description": "Multiply the Outer terms.", "workingLatex": "x \\times 9 = 9x", "explanation": "The outer pair gives $9x$.", "diagram": null },
        { "stepNumber": 4, "description": "Multiply the Inner terms.", "workingLatex": "2 \\times x = 2x", "explanation": "The inner pair gives $2x$.", "diagram": null },
        { "stepNumber": 5, "description": "Multiply the Last terms.", "workingLatex": "2 \\times 9 = 18", "explanation": "The constants give $18$.", "diagram": null },
        { "stepNumber": 6, "description": "Add the four products.", "workingLatex": "x^{2} + 9x + 2x + 18", "explanation": "All products laid out.", "diagram": null },
        { "stepNumber": 7, "description": "Collect the like terms.", "workingLatex": "x^{2} + 11x + 18", "explanation": "$9x$ and $2x$ combine to $11x$.", "diagram": null },
        { "stepNumber": 8, "description": "State the final answer.", "workingLatex": "x^{2} + 11x + 18", "explanation": "Sum $2+9=11$ and product $2\\times9=18$ confirm the result.", "diagram": null }
      ],
      "finalAnswer": "$x^{2} + 11x + 18$"
    }
  },
  {
    "id": "gcse.algebra.expanding-binomials.q011",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Expanding binomials",
    "subtopicId": "gcse.algebra.expanding-binomials",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "expression",
    "tags": ["squaring a binomial", "perfect square", "FOIL", "quadratic"],
    "questionText": "Expand and simplify $(x+1)^{2}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Rewrite the square as a product.", "workingLatex": "(x+1)^{2} = (x+1)(x+1)", "explanation": "Squaring a bracket means multiplying it by itself, so we write two identical brackets before expanding. This avoids the common slip of squaring each term separately.", "diagram": null },
        { "stepNumber": 2, "description": "Multiply the First terms.", "workingLatex": "x \\times x = x^{2}", "explanation": "The leading terms give $x^{2}$.", "diagram": null },
        { "stepNumber": 3, "description": "Multiply the Outer terms.", "workingLatex": "x \\times 1 = x", "explanation": "The outer pair gives $x$.", "diagram": null },
        { "stepNumber": 4, "description": "Multiply the Inner terms.", "workingLatex": "1 \\times x = x", "explanation": "The inner pair also gives $x$; for a square the two middle terms always match.", "diagram": null },
        { "stepNumber": 5, "description": "Multiply the Last terms.", "workingLatex": "1 \\times 1 = 1", "explanation": "The constants give $1$.", "diagram": null },
        { "stepNumber": 6, "description": "Add the four products.", "workingLatex": "x^{2} + x + x + 1", "explanation": "All four products laid out.", "diagram": null },
        { "stepNumber": 7, "description": "Collect the like terms.", "workingLatex": "x^{2} + 2x + 1", "explanation": "The two equal middle terms add to $2x$, which is twice the constant $1$.", "diagram": null },
        { "stepNumber": 8, "description": "State the final answer.", "workingLatex": "x^{2} + 2x + 1", "explanation": "This matches the pattern $(x+a)^{2}=x^{2}+2ax+a^{2}$ with $a=1$.", "diagram": null }
      ],
      "finalAnswer": "$x^{2} + 2x + 1$"
    }
  },
  {
    "id": "gcse.algebra.expanding-binomials.q012",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Expanding binomials",
    "subtopicId": "gcse.algebra.expanding-binomials",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "expression",
    "tags": ["squaring a binomial", "perfect square", "FOIL", "quadratic"],
    "questionText": "Expand and simplify $(x+2)^{2}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Rewrite the square as a product.", "workingLatex": "(x+2)^{2} = (x+2)(x+2)", "explanation": "Squaring means multiplying the bracket by itself, so we write it out fully.", "diagram": null },
        { "stepNumber": 2, "description": "Multiply the First terms.", "workingLatex": "x \\times x = x^{2}", "explanation": "The leading terms give $x^{2}$.", "diagram": null },
        { "stepNumber": 3, "description": "Multiply the Outer terms.", "workingLatex": "x \\times 2 = 2x", "explanation": "The outer pair gives $2x$.", "diagram": null },
        { "stepNumber": 4, "description": "Multiply the Inner terms.", "workingLatex": "2 \\times x = 2x", "explanation": "The inner pair also gives $2x$.", "diagram": null },
        { "stepNumber": 5, "description": "Multiply the Last terms.", "workingLatex": "2 \\times 2 = 4", "explanation": "The constants give $4$.", "diagram": null },
        { "stepNumber": 6, "description": "Add the four products.", "workingLatex": "x^{2} + 2x + 2x + 4", "explanation": "All products laid out.", "diagram": null },
        { "stepNumber": 7, "description": "Collect the like terms.", "workingLatex": "x^{2} + 4x + 4", "explanation": "The two $2x$ terms add to $4x$, which is twice $2$.", "diagram": null },
        { "stepNumber": 8, "description": "State the final answer.", "workingLatex": "x^{2} + 4x + 4", "explanation": "This fits $(x+a)^{2}=x^{2}+2ax+a^{2}$ with $a=2$.", "diagram": null }
      ],
      "finalAnswer": "$x^{2} + 4x + 4$"
    }
  },
  {
    "id": "gcse.algebra.expanding-binomials.q013",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Expanding binomials",
    "subtopicId": "gcse.algebra.expanding-binomials",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "expression",
    "tags": ["squaring a binomial", "perfect square", "FOIL", "quadratic"],
    "questionText": "Expand and simplify $(x+3)^{2}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Rewrite the square as a product.", "workingLatex": "(x+3)^{2} = (x+3)(x+3)", "explanation": "Writing the square as two brackets prevents the mistake of forgetting the middle term.", "diagram": null },
        { "stepNumber": 2, "description": "Multiply the First terms.", "workingLatex": "x \\times x = x^{2}", "explanation": "The leading terms give $x^{2}$.", "diagram": null },
        { "stepNumber": 3, "description": "Multiply the Outer terms.", "workingLatex": "x \\times 3 = 3x", "explanation": "The outer pair gives $3x$.", "diagram": null },
        { "stepNumber": 4, "description": "Multiply the Inner terms.", "workingLatex": "3 \\times x = 3x", "explanation": "The inner pair also gives $3x$.", "diagram": null },
        { "stepNumber": 5, "description": "Multiply the Last terms.", "workingLatex": "3 \\times 3 = 9", "explanation": "The constants give $9$.", "diagram": null },
        { "stepNumber": 6, "description": "Add the four products.", "workingLatex": "x^{2} + 3x + 3x + 9", "explanation": "All products laid out.", "diagram": null },
        { "stepNumber": 7, "description": "Collect the like terms.", "workingLatex": "x^{2} + 6x + 9", "explanation": "The two $3x$ terms add to $6x$, twice the constant $3$.", "diagram": null },
        { "stepNumber": 8, "description": "State the final answer.", "workingLatex": "x^{2} + 6x + 9", "explanation": "This matches $(x+a)^{2}$ with $a=3$.", "diagram": null }
      ],
      "finalAnswer": "$x^{2} + 6x + 9$"
    }
  },
  {
    "id": "gcse.algebra.expanding-binomials.q014",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Expanding binomials",
    "subtopicId": "gcse.algebra.expanding-binomials",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "expression",
    "tags": ["squaring a binomial", "perfect square", "FOIL", "quadratic"],
    "questionText": "Expand and simplify $(x+5)^{2}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Rewrite the square as a product.", "workingLatex": "(x+5)^{2} = (x+5)(x+5)", "explanation": "Squaring a bracket is multiplying it by itself; we write it out to expand safely.", "diagram": null },
        { "stepNumber": 2, "description": "Multiply the First terms.", "workingLatex": "x \\times x = x^{2}", "explanation": "The leading terms give $x^{2}$.", "diagram": null },
        { "stepNumber": 3, "description": "Multiply the Outer terms.", "workingLatex": "x \\times 5 = 5x", "explanation": "The outer pair gives $5x$.", "diagram": null },
        { "stepNumber": 4, "description": "Multiply the Inner terms.", "workingLatex": "5 \\times x = 5x", "explanation": "The inner pair also gives $5x$.", "diagram": null },
        { "stepNumber": 5, "description": "Multiply the Last terms.", "workingLatex": "5 \\times 5 = 25", "explanation": "The constants give $25$.", "diagram": null },
        { "stepNumber": 6, "description": "Add the four products.", "workingLatex": "x^{2} + 5x + 5x + 25", "explanation": "All products laid out.", "diagram": null },
        { "stepNumber": 7, "description": "Collect the like terms.", "workingLatex": "x^{2} + 10x + 25", "explanation": "The two $5x$ terms add to $10x$, twice the constant $5$.", "diagram": null },
        { "stepNumber": 8, "description": "State the final answer.", "workingLatex": "x^{2} + 10x + 25", "explanation": "This matches $(x+a)^{2}$ with $a=5$.", "diagram": null }
      ],
      "finalAnswer": "$x^{2} + 10x + 25$"
    }
  },
  {
    "id": "gcse.algebra.expanding-binomials.q015",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Expanding binomials",
    "subtopicId": "gcse.algebra.expanding-binomials",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "expression",
    "tags": ["squaring a binomial", "perfect square", "FOIL", "quadratic"],
    "questionText": "Expand and simplify $(x+4)^{2}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Rewrite the square as a product.", "workingLatex": "(x+4)^{2} = (x+4)(x+4)", "explanation": "We square by multiplying the bracket by itself.", "diagram": null },
        { "stepNumber": 2, "description": "Multiply the First terms.", "workingLatex": "x \\times x = x^{2}", "explanation": "The leading terms give $x^{2}$.", "diagram": null },
        { "stepNumber": 3, "description": "Multiply the Outer terms.", "workingLatex": "x \\times 4 = 4x", "explanation": "The outer pair gives $4x$.", "diagram": null },
        { "stepNumber": 4, "description": "Multiply the Inner terms.", "workingLatex": "4 \\times x = 4x", "explanation": "The inner pair also gives $4x$.", "diagram": null },
        { "stepNumber": 5, "description": "Multiply the Last terms.", "workingLatex": "4 \\times 4 = 16", "explanation": "The constants give $16$.", "diagram": null },
        { "stepNumber": 6, "description": "Add the four products.", "workingLatex": "x^{2} + 4x + 4x + 16", "explanation": "All products laid out.", "diagram": null },
        { "stepNumber": 7, "description": "Collect the like terms.", "workingLatex": "x^{2} + 8x + 16", "explanation": "The two $4x$ terms add to $8x$, twice the constant $4$.", "diagram": null },
        { "stepNumber": 8, "description": "State the final answer.", "workingLatex": "x^{2} + 8x + 16", "explanation": "This matches $(x+a)^{2}$ with $a=4$.", "diagram": null }
      ],
      "finalAnswer": "$x^{2} + 8x + 16$"
    }
  },
  {
    "id": "gcse.algebra.expanding-binomials.q016",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Expanding binomials",
    "subtopicId": "gcse.algebra.expanding-binomials",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "expression",
    "tags": ["expanding brackets", "FOIL", "negative term", "quadratic"],
    "questionText": "Expand and simplify $(x+2)(x-1)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Set up the expansion, watching the signs.", "workingLatex": "(x+2)(x-1)", "explanation": "The $-1$ means one product will be negative, so we keep the sign attached to the term as we multiply.", "diagram": null },
        { "stepNumber": 2, "description": "Multiply the First terms.", "workingLatex": "x \\times x = x^{2}", "explanation": "The leading terms give $x^{2}$.", "diagram": null },
        { "stepNumber": 3, "description": "Multiply the Outer terms.", "workingLatex": "x \\times (-1) = -x", "explanation": "A positive times a negative is negative, giving $-x$.", "diagram": null },
        { "stepNumber": 4, "description": "Multiply the Inner terms.", "workingLatex": "2 \\times x = 2x", "explanation": "The inner pair gives $2x$.", "diagram": null },
        { "stepNumber": 5, "description": "Multiply the Last terms.", "workingLatex": "2 \\times (-1) = -2", "explanation": "The constants give $-2$.", "diagram": null },
        { "stepNumber": 6, "description": "Add the four products.", "workingLatex": "x^{2} - x + 2x - 2", "explanation": "All products laid out with their signs.", "diagram": null },
        { "stepNumber": 7, "description": "Collect the like terms.", "workingLatex": "x^{2} + x - 2", "explanation": "$-x + 2x = x$, so the middle term is $+x$.", "diagram": null },
        { "stepNumber": 8, "description": "State the final answer.", "workingLatex": "x^{2} + x - 2", "explanation": "The negative constant comes from multiplying $+2$ by $-1$.", "diagram": null }
      ],
      "finalAnswer": "$x^{2} + x - 2$"
    }
  },
  {
    "id": "gcse.algebra.expanding-binomials.q017",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Expanding binomials",
    "subtopicId": "gcse.algebra.expanding-binomials",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "expression",
    "tags": ["expanding brackets", "FOIL", "negative term", "quadratic"],
    "questionText": "Expand and simplify $(x+3)(x-1)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Set up the expansion, watching the signs.", "workingLatex": "(x+3)(x-1)", "explanation": "We keep the minus sign attached to the $1$ throughout the multiplication.", "diagram": null },
        { "stepNumber": 2, "description": "Multiply the First terms.", "workingLatex": "x \\times x = x^{2}", "explanation": "The leading terms give $x^{2}$.", "diagram": null },
        { "stepNumber": 3, "description": "Multiply the Outer terms.", "workingLatex": "x \\times (-1) = -x", "explanation": "Positive times negative gives $-x$.", "diagram": null },
        { "stepNumber": 4, "description": "Multiply the Inner terms.", "workingLatex": "3 \\times x = 3x", "explanation": "The inner pair gives $3x$.", "diagram": null },
        { "stepNumber": 5, "description": "Multiply the Last terms.", "workingLatex": "3 \\times (-1) = -3", "explanation": "The constants give $-3$.", "diagram": null },
        { "stepNumber": 6, "description": "Add the four products.", "workingLatex": "x^{2} - x + 3x - 3", "explanation": "All products laid out with signs.", "diagram": null },
        { "stepNumber": 7, "description": "Collect the like terms.", "workingLatex": "x^{2} + 2x - 3", "explanation": "$-x + 3x = 2x$.", "diagram": null },
        { "stepNumber": 8, "description": "State the final answer.", "workingLatex": "x^{2} + 2x - 3", "explanation": "The simplified quadratic is complete.", "diagram": null }
      ],
      "finalAnswer": "$x^{2} + 2x - 3$"
    }
  },
  {
    "id": "gcse.algebra.expanding-binomials.q018",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Expanding binomials",
    "subtopicId": "gcse.algebra.expanding-binomials",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "expression",
    "tags": ["expanding brackets", "FOIL", "negative term", "quadratic"],
    "questionText": "Expand and simplify $(x+5)(x-2)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Set up the expansion, watching the signs.", "workingLatex": "(x+5)(x-2)", "explanation": "Keep the $-2$ as a negative term while multiplying.", "diagram": null },
        { "stepNumber": 2, "description": "Multiply the First terms.", "workingLatex": "x \\times x = x^{2}", "explanation": "The leading terms give $x^{2}$.", "diagram": null },
        { "stepNumber": 3, "description": "Multiply the Outer terms.", "workingLatex": "x \\times (-2) = -2x", "explanation": "Positive times negative gives $-2x$.", "diagram": null },
        { "stepNumber": 4, "description": "Multiply the Inner terms.", "workingLatex": "5 \\times x = 5x", "explanation": "The inner pair gives $5x$.", "diagram": null },
        { "stepNumber": 5, "description": "Multiply the Last terms.", "workingLatex": "5 \\times (-2) = -10", "explanation": "The constants give $-10$.", "diagram": null },
        { "stepNumber": 6, "description": "Add the four products.", "workingLatex": "x^{2} - 2x + 5x - 10", "explanation": "All products laid out with signs.", "diagram": null },
        { "stepNumber": 7, "description": "Collect the like terms.", "workingLatex": "x^{2} + 3x - 10", "explanation": "$-2x + 5x = 3x$.", "diagram": null },
        { "stepNumber": 8, "description": "State the final answer.", "workingLatex": "x^{2} + 3x - 10", "explanation": "The middle term is positive because $5x$ outweighs $-2x$.", "diagram": null }
      ],
      "finalAnswer": "$x^{2} + 3x - 10$"
    }
  },
  {
    "id": "gcse.algebra.expanding-binomials.q019",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Expanding binomials",
    "subtopicId": "gcse.algebra.expanding-binomials",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "expression",
    "tags": ["expanding brackets", "FOIL", "negative term", "quadratic"],
    "questionText": "Expand and simplify $(x+4)(x-3)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Set up the expansion, watching the signs.", "workingLatex": "(x+4)(x-3)", "explanation": "The $-3$ stays negative as we multiply each pair.", "diagram": null },
        { "stepNumber": 2, "description": "Multiply the First terms.", "workingLatex": "x \\times x = x^{2}", "explanation": "The leading terms give $x^{2}$.", "diagram": null },
        { "stepNumber": 3, "description": "Multiply the Outer terms.", "workingLatex": "x \\times (-3) = -3x", "explanation": "Positive times negative gives $-3x$.", "diagram": null },
        { "stepNumber": 4, "description": "Multiply the Inner terms.", "workingLatex": "4 \\times x = 4x", "explanation": "The inner pair gives $4x$.", "diagram": null },
        { "stepNumber": 5, "description": "Multiply the Last terms.", "workingLatex": "4 \\times (-3) = -12", "explanation": "The constants give $-12$.", "diagram": null },
        { "stepNumber": 6, "description": "Add the four products.", "workingLatex": "x^{2} - 3x + 4x - 12", "explanation": "All products laid out with signs.", "diagram": null },
        { "stepNumber": 7, "description": "Collect the like terms.", "workingLatex": "x^{2} + x - 12", "explanation": "$-3x + 4x = x$.", "diagram": null },
        { "stepNumber": 8, "description": "State the final answer.", "workingLatex": "x^{2} + x - 12", "explanation": "The simplified quadratic is complete.", "diagram": null }
      ],
      "finalAnswer": "$x^{2} + x - 12$"
    }
  },
  {
    "id": "gcse.algebra.expanding-binomials.q020",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Expanding binomials",
    "subtopicId": "gcse.algebra.expanding-binomials",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": ["expanding brackets", "FOIL", "negative term", "quadratic"],
    "questionText": "Expand and simplify $(x+6)(x-2)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Set up the expansion, watching the signs.", "workingLatex": "(x+6)(x-2)", "explanation": "The $-2$ stays negative throughout.", "diagram": null },
        { "stepNumber": 2, "description": "Multiply the First terms.", "workingLatex": "x \\times x = x^{2}", "explanation": "The leading terms give $x^{2}$.", "diagram": null },
        { "stepNumber": 3, "description": "Multiply the Outer terms.", "workingLatex": "x \\times (-2) = -2x", "explanation": "Positive times negative gives $-2x$.", "diagram": null },
        { "stepNumber": 4, "description": "Multiply the Inner terms.", "workingLatex": "6 \\times x = 6x", "explanation": "The inner pair gives $6x$.", "diagram": null },
        { "stepNumber": 5, "description": "Multiply the Last terms.", "workingLatex": "6 \\times (-2) = -12", "explanation": "The constants give $-12$.", "diagram": null },
        { "stepNumber": 6, "description": "Add the four products.", "workingLatex": "x^{2} - 2x + 6x - 12", "explanation": "All products laid out with signs.", "diagram": null },
        { "stepNumber": 7, "description": "Collect the like terms.", "workingLatex": "x^{2} + 4x - 12", "explanation": "$-2x + 6x = 4x$.", "diagram": null },
        { "stepNumber": 8, "description": "State the final answer.", "workingLatex": "x^{2} + 4x - 12", "explanation": "The simplified quadratic is complete.", "diagram": null }
      ],
      "finalAnswer": "$x^{2} + 4x - 12$"
    }
  },
  {
    "id": "gcse.algebra.expanding-binomials.q021",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Expanding binomials",
    "subtopicId": "gcse.algebra.expanding-binomials",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "expression",
    "tags": ["expanding brackets", "FOIL", "negative term", "quadratic"],
    "questionText": "Expand and simplify $(x+1)(x-4)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Set up the expansion, watching the signs.", "workingLatex": "(x+1)(x-4)", "explanation": "The $-4$ stays negative as we multiply.", "diagram": null },
        { "stepNumber": 2, "description": "Multiply the First terms.", "workingLatex": "x \\times x = x^{2}", "explanation": "The leading terms give $x^{2}$.", "diagram": null },
        { "stepNumber": 3, "description": "Multiply the Outer terms.", "workingLatex": "x \\times (-4) = -4x", "explanation": "Positive times negative gives $-4x$.", "diagram": null },
        { "stepNumber": 4, "description": "Multiply the Inner terms.", "workingLatex": "1 \\times x = x", "explanation": "The inner pair gives $x$.", "diagram": null },
        { "stepNumber": 5, "description": "Multiply the Last terms.", "workingLatex": "1 \\times (-4) = -4", "explanation": "The constants give $-4$.", "diagram": null },
        { "stepNumber": 6, "description": "Add the four products.", "workingLatex": "x^{2} - 4x + x - 4", "explanation": "All products laid out with signs.", "diagram": null },
        { "stepNumber": 7, "description": "Collect the like terms.", "workingLatex": "x^{2} - 3x - 4", "explanation": "$-4x + x = -3x$, so the middle term is negative.", "diagram": null },
        { "stepNumber": 8, "description": "State the final answer.", "workingLatex": "x^{2} - 3x - 4", "explanation": "The middle term is negative because $-4x$ outweighs $+x$.", "diagram": null }
      ],
      "finalAnswer": "$x^{2} - 3x - 4$"
    }
  },
  {
    "id": "gcse.algebra.expanding-binomials.q022",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Expanding binomials",
    "subtopicId": "gcse.algebra.expanding-binomials",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "expression",
    "tags": ["expanding brackets", "FOIL", "negative term", "quadratic"],
    "questionText": "Expand and simplify $(x-1)(x+7)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Set up the expansion, watching the signs.", "workingLatex": "(x-1)(x+7)", "explanation": "Here the negative sits in the first bracket, on the $1$.", "diagram": null },
        { "stepNumber": 2, "description": "Multiply the First terms.", "workingLatex": "x \\times x = x^{2}", "explanation": "The leading terms give $x^{2}$.", "diagram": null },
        { "stepNumber": 3, "description": "Multiply the Outer terms.", "workingLatex": "x \\times 7 = 7x", "explanation": "The outer pair gives $7x$.", "diagram": null },
        { "stepNumber": 4, "description": "Multiply the Inner terms.", "workingLatex": "(-1) \\times x = -x", "explanation": "The $-1$ times $x$ gives $-x$.", "diagram": null },
        { "stepNumber": 5, "description": "Multiply the Last terms.", "workingLatex": "(-1) \\times 7 = -7", "explanation": "The constants give $-7$.", "diagram": null },
        { "stepNumber": 6, "description": "Add the four products.", "workingLatex": "x^{2} + 7x - x - 7", "explanation": "All products laid out with signs.", "diagram": null },
        { "stepNumber": 7, "description": "Collect the like terms.", "workingLatex": "x^{2} + 6x - 7", "explanation": "$7x - x = 6x$.", "diagram": null },
        { "stepNumber": 8, "description": "State the final answer.", "workingLatex": "x^{2} + 6x - 7", "explanation": "The simplified quadratic is complete.", "diagram": null }
      ],
      "finalAnswer": "$x^{2} + 6x - 7$"
    }
  },
  {
    "id": "gcse.algebra.expanding-binomials.q023",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Expanding binomials",
    "subtopicId": "gcse.algebra.expanding-binomials",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": ["expanding brackets", "FOIL", "negative term", "quadratic"],
    "questionText": "Expand and simplify $(x+3)(x-5)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Set up the expansion, watching the signs.", "workingLatex": "(x+3)(x-5)", "explanation": "The $-5$ stays negative throughout the multiplication.", "diagram": null },
        { "stepNumber": 2, "description": "Multiply the First terms.", "workingLatex": "x \\times x = x^{2}", "explanation": "The leading terms give $x^{2}$.", "diagram": null },
        { "stepNumber": 3, "description": "Multiply the Outer terms.", "workingLatex": "x \\times (-5) = -5x", "explanation": "Positive times negative gives $-5x$.", "diagram": null },
        { "stepNumber": 4, "description": "Multiply the Inner terms.", "workingLatex": "3 \\times x = 3x", "explanation": "The inner pair gives $3x$.", "diagram": null },
        { "stepNumber": 5, "description": "Multiply the Last terms.", "workingLatex": "3 \\times (-5) = -15", "explanation": "The constants give $-15$.", "diagram": null },
        { "stepNumber": 6, "description": "Add the four products.", "workingLatex": "x^{2} - 5x + 3x - 15", "explanation": "All products laid out with signs.", "diagram": null },
        { "stepNumber": 7, "description": "Collect the like terms.", "workingLatex": "x^{2} - 2x - 15", "explanation": "$-5x + 3x = -2x$.", "diagram": null },
        { "stepNumber": 8, "description": "State the final answer.", "workingLatex": "x^{2} - 2x - 15", "explanation": "The middle term is negative because $-5x$ is larger in size than $3x$.", "diagram": null }
      ],
      "finalAnswer": "$x^{2} - 2x - 15$"
    }
  },
  {
    "id": "gcse.algebra.expanding-binomials.q024",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Expanding binomials",
    "subtopicId": "gcse.algebra.expanding-binomials",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": ["expanding brackets", "FOIL", "negative term", "quadratic"],
    "questionText": "Expand and simplify $(x+8)(x-3)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Set up the expansion, watching the signs.", "workingLatex": "(x+8)(x-3)", "explanation": "The $-3$ stays negative throughout.", "diagram": null },
        { "stepNumber": 2, "description": "Multiply the First terms.", "workingLatex": "x \\times x = x^{2}", "explanation": "The leading terms give $x^{2}$.", "diagram": null },
        { "stepNumber": 3, "description": "Multiply the Outer terms.", "workingLatex": "x \\times (-3) = -3x", "explanation": "Positive times negative gives $-3x$.", "diagram": null },
        { "stepNumber": 4, "description": "Multiply the Inner terms.", "workingLatex": "8 \\times x = 8x", "explanation": "The inner pair gives $8x$.", "diagram": null },
        { "stepNumber": 5, "description": "Multiply the Last terms.", "workingLatex": "8 \\times (-3) = -24", "explanation": "The constants give $-24$.", "diagram": null },
        { "stepNumber": 6, "description": "Add the four products.", "workingLatex": "x^{2} - 3x + 8x - 24", "explanation": "All products laid out with signs.", "diagram": null },
        { "stepNumber": 7, "description": "Collect the like terms.", "workingLatex": "x^{2} + 5x - 24", "explanation": "$-3x + 8x = 5x$.", "diagram": null },
        { "stepNumber": 8, "description": "State the final answer.", "workingLatex": "x^{2} + 5x - 24", "explanation": "The simplified quadratic is complete.", "diagram": null }
      ],
      "finalAnswer": "$x^{2} + 5x - 24$"
    }
  },
  {
    "id": "gcse.algebra.expanding-binomials.q025",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Expanding binomials",
    "subtopicId": "gcse.algebra.expanding-binomials",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "expression",
    "tags": ["expanding brackets", "FOIL", "two negatives", "quadratic"],
    "questionText": "Expand and simplify $(x-2)(x-3)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Choose a method and note both signs are negative.", "workingLatex": "(x-2)(x-3)", "explanation": "With two negatives, the constant product will be positive, so we track signs carefully using FOIL.", "diagram": null },
        { "stepNumber": 2, "description": "Rewrite the negatives as added negative terms.", "workingLatex": "(x+(-2))(x+(-3))", "explanation": "Thinking of $-2$ and $-3$ as signed numbers being added makes each product's sign easy to decide.", "diagram": null },
        { "stepNumber": 3, "description": "Multiply the First terms.", "workingLatex": "x \\times x = x^{2}", "explanation": "The leading terms give $x^{2}$.", "diagram": null },
        { "stepNumber": 4, "description": "Multiply the Outer terms.", "workingLatex": "x \\times (-3) = -3x", "explanation": "Positive times negative gives $-3x$.", "diagram": null },
        { "stepNumber": 5, "description": "Multiply the Inner terms.", "workingLatex": "(-2) \\times x = -2x", "explanation": "Negative times positive gives $-2x$.", "diagram": null },
        { "stepNumber": 6, "description": "Multiply the Last terms.", "workingLatex": "(-2) \\times (-3) = 6", "explanation": "A negative times a negative is positive, giving $+6$.", "diagram": null },
        { "stepNumber": 7, "description": "Add the four products.", "workingLatex": "x^{2} - 3x - 2x + 6", "explanation": "All products laid out with their signs.", "diagram": null },
        { "stepNumber": 8, "description": "Collect the like terms.", "workingLatex": "x^{2} - 5x + 6", "explanation": "$-3x - 2x = -5x$; both middle terms are negative so they add in size.", "diagram": null },
        { "stepNumber": 9, "description": "Check by substituting a value.", "workingLatex": "x=1:\\ (1-2)(1-3)=(-1)(-2)=2,\\ \\ 1-5+6=2", "explanation": "Both the original and expanded forms give $2$ at $x=1$, confirming the expansion.", "diagram": null }
      ],
      "finalAnswer": "$x^{2} - 5x + 6$"
    }
  },
  {
    "id": "gcse.algebra.expanding-binomials.q026",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Expanding binomials",
    "subtopicId": "gcse.algebra.expanding-binomials",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "expression",
    "tags": ["expanding brackets", "FOIL", "two negatives", "quadratic"],
    "questionText": "Expand and simplify $(x-1)(x-5)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Note both signs are negative.", "workingLatex": "(x-1)(x-5)", "explanation": "Two negative constants will multiply to a positive constant; we use FOIL and keep the signs.", "diagram": null },
        { "stepNumber": 2, "description": "Rewrite as added negatives.", "workingLatex": "(x+(-1))(x+(-5))", "explanation": "Treating the constants as signed numbers keeps the sign of each product clear.", "diagram": null },
        { "stepNumber": 3, "description": "Multiply the First terms.", "workingLatex": "x \\times x = x^{2}", "explanation": "The leading terms give $x^{2}$.", "diagram": null },
        { "stepNumber": 4, "description": "Multiply the Outer terms.", "workingLatex": "x \\times (-5) = -5x", "explanation": "Positive times negative gives $-5x$.", "diagram": null },
        { "stepNumber": 5, "description": "Multiply the Inner terms.", "workingLatex": "(-1) \\times x = -x", "explanation": "Negative times positive gives $-x$.", "diagram": null },
        { "stepNumber": 6, "description": "Multiply the Last terms.", "workingLatex": "(-1) \\times (-5) = 5", "explanation": "Negative times negative gives $+5$.", "diagram": null },
        { "stepNumber": 7, "description": "Add the four products.", "workingLatex": "x^{2} - 5x - x + 5", "explanation": "All products laid out with signs.", "diagram": null },
        { "stepNumber": 8, "description": "Collect the like terms.", "workingLatex": "x^{2} - 6x + 5", "explanation": "$-5x - x = -6x$.", "diagram": null },
        { "stepNumber": 9, "description": "Check by substitution.", "workingLatex": "x=2:\\ (2-1)(2-5)=(1)(-3)=-3,\\ \\ 4-12+5=-3", "explanation": "Both forms give $-3$ at $x=2$, confirming the answer.", "diagram": null }
      ],
      "finalAnswer": "$x^{2} - 6x + 5$"
    }
  },
  {
    "id": "gcse.algebra.expanding-binomials.q027",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Expanding binomials",
    "subtopicId": "gcse.algebra.expanding-binomials",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "expression",
    "tags": ["expanding brackets", "FOIL", "two negatives", "quadratic"],
    "questionText": "Expand and simplify $(x-4)(x-6)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Note both signs are negative.", "workingLatex": "(x-4)(x-6)", "explanation": "The product of the two negative constants will be positive; use FOIL and track signs.", "diagram": null },
        { "stepNumber": 2, "description": "Rewrite as added negatives.", "workingLatex": "(x+(-4))(x+(-6))", "explanation": "Signed numbers make the sign of each product obvious.", "diagram": null },
        { "stepNumber": 3, "description": "Multiply the First terms.", "workingLatex": "x \\times x = x^{2}", "explanation": "The leading terms give $x^{2}$.", "diagram": null },
        { "stepNumber": 4, "description": "Multiply the Outer terms.", "workingLatex": "x \\times (-6) = -6x", "explanation": "Positive times negative gives $-6x$.", "diagram": null },
        { "stepNumber": 5, "description": "Multiply the Inner terms.", "workingLatex": "(-4) \\times x = -4x", "explanation": "Negative times positive gives $-4x$.", "diagram": null },
        { "stepNumber": 6, "description": "Multiply the Last terms.", "workingLatex": "(-4) \\times (-6) = 24", "explanation": "Negative times negative gives $+24$.", "diagram": null },
        { "stepNumber": 7, "description": "Add the four products.", "workingLatex": "x^{2} - 6x - 4x + 24", "explanation": "All products laid out with signs.", "diagram": null },
        { "stepNumber": 8, "description": "Collect the like terms.", "workingLatex": "x^{2} - 10x + 24", "explanation": "$-6x - 4x = -10x$.", "diagram": null },
        { "stepNumber": 9, "description": "Check by substitution.", "workingLatex": "x=0:\\ (-4)(-6)=24,\\ \\ 0-0+24=24", "explanation": "Both forms give $24$ at $x=0$, confirming the constant term.", "diagram": null }
      ],
      "finalAnswer": "$x^{2} - 10x + 24$"
    }
  },
  {
    "id": "gcse.algebra.expanding-binomials.q028",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Expanding binomials",
    "subtopicId": "gcse.algebra.expanding-binomials",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "expression",
    "tags": ["expanding brackets", "FOIL", "two negatives", "quadratic"],
    "questionText": "Expand and simplify $(x-3)(x-7)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Note both signs are negative.", "workingLatex": "(x-3)(x-7)", "explanation": "Two negative constants give a positive product; use FOIL carefully.", "diagram": null },
        { "stepNumber": 2, "description": "Rewrite as added negatives.", "workingLatex": "(x+(-3))(x+(-7))", "explanation": "Signed constants keep each product's sign clear.", "diagram": null },
        { "stepNumber": 3, "description": "Multiply the First terms.", "workingLatex": "x \\times x = x^{2}", "explanation": "The leading terms give $x^{2}$.", "diagram": null },
        { "stepNumber": 4, "description": "Multiply the Outer terms.", "workingLatex": "x \\times (-7) = -7x", "explanation": "Positive times negative gives $-7x$.", "diagram": null },
        { "stepNumber": 5, "description": "Multiply the Inner terms.", "workingLatex": "(-3) \\times x = -3x", "explanation": "Negative times positive gives $-3x$.", "diagram": null },
        { "stepNumber": 6, "description": "Multiply the Last terms.", "workingLatex": "(-3) \\times (-7) = 21", "explanation": "Negative times negative gives $+21$.", "diagram": null },
        { "stepNumber": 7, "description": "Add the four products.", "workingLatex": "x^{2} - 7x - 3x + 21", "explanation": "All products laid out with signs.", "diagram": null },
        { "stepNumber": 8, "description": "Collect the like terms.", "workingLatex": "x^{2} - 10x + 21", "explanation": "$-7x - 3x = -10x$.", "diagram": null },
        { "stepNumber": 9, "description": "Check by substitution.", "workingLatex": "x=1:\\ (1-3)(1-7)=(-2)(-6)=12,\\ \\ 1-10+21=12", "explanation": "Both forms give $12$ at $x=1$, confirming the expansion.", "diagram": null }
      ],
      "finalAnswer": "$x^{2} - 10x + 21$"
    }
  },
  {
    "id": "gcse.algebra.expanding-binomials.q029",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Expanding binomials",
    "subtopicId": "gcse.algebra.expanding-binomials",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "expression",
    "tags": ["squaring a binomial", "perfect square", "negative term", "quadratic"],
    "questionText": "Expand and simplify $(x-2)^{2}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Rewrite the square as a product.", "workingLatex": "(x-2)^{2} = (x-2)(x-2)", "explanation": "Squaring means multiplying the bracket by itself; writing it out avoids the error of squaring each term.", "diagram": null },
        { "stepNumber": 2, "description": "Multiply the First terms.", "workingLatex": "x \\times x = x^{2}", "explanation": "The leading terms give $x^{2}$.", "diagram": null },
        { "stepNumber": 3, "description": "Multiply the Outer terms.", "workingLatex": "x \\times (-2) = -2x", "explanation": "Positive times negative gives $-2x$.", "diagram": null },
        { "stepNumber": 4, "description": "Multiply the Inner terms.", "workingLatex": "(-2) \\times x = -2x", "explanation": "This gives another $-2x$; the two middle terms match for a square.", "diagram": null },
        { "stepNumber": 5, "description": "Multiply the Last terms.", "workingLatex": "(-2) \\times (-2) = 4", "explanation": "Negative times negative gives $+4$.", "diagram": null },
        { "stepNumber": 6, "description": "Add the four products.", "workingLatex": "x^{2} - 2x - 2x + 4", "explanation": "All products laid out with signs.", "diagram": null },
        { "stepNumber": 7, "description": "Collect the like terms.", "workingLatex": "x^{2} - 4x + 4", "explanation": "The two $-2x$ terms add to $-4x$.", "diagram": null },
        { "stepNumber": 8, "description": "Compare with the standard pattern.", "workingLatex": "(x-a)^{2}=x^{2}-2ax+a^{2}", "explanation": "With $a=2$ this predicts $x^{2}-4x+4$, matching our result.", "diagram": null },
        { "stepNumber": 9, "description": "State the final answer.", "workingLatex": "x^{2} - 4x + 4", "explanation": "Note the middle term is negative and the constant is positive.", "diagram": null }
      ],
      "finalAnswer": "$x^{2} - 4x + 4$"
    }
  },
  {
    "id": "gcse.algebra.expanding-binomials.q030",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Expanding binomials",
    "subtopicId": "gcse.algebra.expanding-binomials",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "expression",
    "tags": ["squaring a binomial", "perfect square", "negative term", "quadratic"],
    "questionText": "Expand and simplify $(x-3)^{2}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Rewrite the square as a product.", "workingLatex": "(x-3)^{2} = (x-3)(x-3)", "explanation": "Squaring is multiplying the bracket by itself.", "diagram": null },
        { "stepNumber": 2, "description": "Multiply the First terms.", "workingLatex": "x \\times x = x^{2}", "explanation": "The leading terms give $x^{2}$.", "diagram": null },
        { "stepNumber": 3, "description": "Multiply the Outer terms.", "workingLatex": "x \\times (-3) = -3x", "explanation": "Positive times negative gives $-3x$.", "diagram": null },
        { "stepNumber": 4, "description": "Multiply the Inner terms.", "workingLatex": "(-3) \\times x = -3x", "explanation": "This gives another $-3x$.", "diagram": null },
        { "stepNumber": 5, "description": "Multiply the Last terms.", "workingLatex": "(-3) \\times (-3) = 9", "explanation": "Negative times negative gives $+9$.", "diagram": null },
        { "stepNumber": 6, "description": "Add the four products.", "workingLatex": "x^{2} - 3x - 3x + 9", "explanation": "All products laid out with signs.", "diagram": null },
        { "stepNumber": 7, "description": "Collect the like terms.", "workingLatex": "x^{2} - 6x + 9", "explanation": "The two $-3x$ terms add to $-6x$.", "diagram": null },
        { "stepNumber": 8, "description": "Compare with the standard pattern.", "workingLatex": "(x-a)^{2}=x^{2}-2ax+a^{2}", "explanation": "With $a=3$ this gives $x^{2}-6x+9$, matching.", "diagram": null },
        { "stepNumber": 9, "description": "State the final answer.", "workingLatex": "x^{2} - 6x + 9", "explanation": "The constant is positive even though the bracket contains a minus.", "diagram": null }
      ],
      "finalAnswer": "$x^{2} - 6x + 9$"
    }
  },
  {
    "id": "gcse.algebra.expanding-binomials.q031",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Expanding binomials",
    "subtopicId": "gcse.algebra.expanding-binomials",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "expression",
    "tags": ["squaring a binomial", "perfect square", "negative term", "quadratic"],
    "questionText": "Expand and simplify $(x-5)^{2}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Rewrite the square as a product.", "workingLatex": "(x-5)^{2} = (x-5)(x-5)", "explanation": "Squaring is multiplying the bracket by itself.", "diagram": null },
        { "stepNumber": 2, "description": "Multiply the First terms.", "workingLatex": "x \\times x = x^{2}", "explanation": "The leading terms give $x^{2}$.", "diagram": null },
        { "stepNumber": 3, "description": "Multiply the Outer terms.", "workingLatex": "x \\times (-5) = -5x", "explanation": "Positive times negative gives $-5x$.", "diagram": null },
        { "stepNumber": 4, "description": "Multiply the Inner terms.", "workingLatex": "(-5) \\times x = -5x", "explanation": "This gives another $-5x$.", "diagram": null },
        { "stepNumber": 5, "description": "Multiply the Last terms.", "workingLatex": "(-5) \\times (-5) = 25", "explanation": "Negative times negative gives $+25$.", "diagram": null },
        { "stepNumber": 6, "description": "Add the four products.", "workingLatex": "x^{2} - 5x - 5x + 25", "explanation": "All products laid out with signs.", "diagram": null },
        { "stepNumber": 7, "description": "Collect the like terms.", "workingLatex": "x^{2} - 10x + 25", "explanation": "The two $-5x$ terms add to $-10x$.", "diagram": null },
        { "stepNumber": 8, "description": "Compare with the standard pattern.", "workingLatex": "(x-a)^{2}=x^{2}-2ax+a^{2}", "explanation": "With $a=5$ this gives $x^{2}-10x+25$, matching.", "diagram": null },
        { "stepNumber": 9, "description": "State the final answer.", "workingLatex": "x^{2} - 10x + 25", "explanation": "The simplified square is complete.", "diagram": null }
      ],
      "finalAnswer": "$x^{2} - 10x + 25$"
    }
  },
  {
    "id": "gcse.algebra.expanding-binomials.q032",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Expanding binomials",
    "subtopicId": "gcse.algebra.expanding-binomials",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "expression",
    "tags": ["squaring a binomial", "perfect square", "negative term", "quadratic"],
    "questionText": "Expand and simplify $(x-6)^{2}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Rewrite the square as a product.", "workingLatex": "(x-6)^{2} = (x-6)(x-6)", "explanation": "Squaring is multiplying the bracket by itself.", "diagram": null },
        { "stepNumber": 2, "description": "Multiply the First terms.", "workingLatex": "x \\times x = x^{2}", "explanation": "The leading terms give $x^{2}$.", "diagram": null },
        { "stepNumber": 3, "description": "Multiply the Outer terms.", "workingLatex": "x \\times (-6) = -6x", "explanation": "Positive times negative gives $-6x$.", "diagram": null },
        { "stepNumber": 4, "description": "Multiply the Inner terms.", "workingLatex": "(-6) \\times x = -6x", "explanation": "This gives another $-6x$.", "diagram": null },
        { "stepNumber": 5, "description": "Multiply the Last terms.", "workingLatex": "(-6) \\times (-6) = 36", "explanation": "Negative times negative gives $+36$.", "diagram": null },
        { "stepNumber": 6, "description": "Add the four products.", "workingLatex": "x^{2} - 6x - 6x + 36", "explanation": "All products laid out with signs.", "diagram": null },
        { "stepNumber": 7, "description": "Collect the like terms.", "workingLatex": "x^{2} - 12x + 36", "explanation": "The two $-6x$ terms add to $-12x$.", "diagram": null },
        { "stepNumber": 8, "description": "Compare with the standard pattern.", "workingLatex": "(x-a)^{2}=x^{2}-2ax+a^{2}", "explanation": "With $a=6$ this gives $x^{2}-12x+36$, matching.", "diagram": null },
        { "stepNumber": 9, "description": "State the final answer.", "workingLatex": "x^{2} - 12x + 36", "explanation": "The simplified square is complete.", "diagram": null }
      ],
      "finalAnswer": "$x^{2} - 12x + 36$"
    }
  },
  {
    "id": "gcse.algebra.expanding-binomials.q033",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Expanding binomials",
    "subtopicId": "gcse.algebra.expanding-binomials",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "expression",
    "tags": ["difference of two squares", "FOIL", "special product", "quadratic"],
    "questionText": "Expand and simplify $(x+3)(x-3)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Notice the special structure.", "workingLatex": "(x+3)(x-3)", "explanation": "The brackets are identical except for the sign — this is a difference of two squares, where the middle terms cancel.", "diagram": null },
        { "stepNumber": 2, "description": "Multiply the First terms.", "workingLatex": "x \\times x = x^{2}", "explanation": "The leading terms give $x^{2}$.", "diagram": null },
        { "stepNumber": 3, "description": "Multiply the Outer terms.", "workingLatex": "x \\times (-3) = -3x", "explanation": "Positive times negative gives $-3x$.", "diagram": null },
        { "stepNumber": 4, "description": "Multiply the Inner terms.", "workingLatex": "3 \\times x = 3x", "explanation": "The inner pair gives $+3x$.", "diagram": null },
        { "stepNumber": 5, "description": "Multiply the Last terms.", "workingLatex": "3 \\times (-3) = -9", "explanation": "The constants give $-9$.", "diagram": null },
        { "stepNumber": 6, "description": "Add the four products.", "workingLatex": "x^{2} - 3x + 3x - 9", "explanation": "All products laid out with signs.", "diagram": null },
        { "stepNumber": 7, "description": "Cancel the middle terms.", "workingLatex": "-3x + 3x = 0", "explanation": "The two middle terms are equal and opposite, so they cancel — the signature of difference of two squares.", "diagram": null },
        { "stepNumber": 8, "description": "Write the simplified result.", "workingLatex": "x^{2} - 9", "explanation": "Only the squared term and the negative constant remain.", "diagram": null },
        { "stepNumber": 9, "description": "Confirm with the pattern.", "workingLatex": "(x+a)(x-a)=x^{2}-a^{2}", "explanation": "With $a=3$, $x^{2}-3^{2}=x^{2}-9$, matching our answer.", "diagram": null }
      ],
      "finalAnswer": "$x^{2} - 9$"
    }
  },
  {
    "id": "gcse.algebra.expanding-binomials.q034",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Expanding binomials",
    "subtopicId": "gcse.algebra.expanding-binomials",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "expression",
    "tags": ["difference of two squares", "FOIL", "special product", "quadratic"],
    "questionText": "Expand and simplify $(x+5)(x-5)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Notice the special structure.", "workingLatex": "(x+5)(x-5)", "explanation": "Same terms with opposite signs signals a difference of two squares.", "diagram": null },
        { "stepNumber": 2, "description": "Multiply the First terms.", "workingLatex": "x \\times x = x^{2}", "explanation": "The leading terms give $x^{2}$.", "diagram": null },
        { "stepNumber": 3, "description": "Multiply the Outer terms.", "workingLatex": "x \\times (-5) = -5x", "explanation": "Positive times negative gives $-5x$.", "diagram": null },
        { "stepNumber": 4, "description": "Multiply the Inner terms.", "workingLatex": "5 \\times x = 5x", "explanation": "The inner pair gives $+5x$.", "diagram": null },
        { "stepNumber": 5, "description": "Multiply the Last terms.", "workingLatex": "5 \\times (-5) = -25", "explanation": "The constants give $-25$.", "diagram": null },
        { "stepNumber": 6, "description": "Add the four products.", "workingLatex": "x^{2} - 5x + 5x - 25", "explanation": "All products laid out with signs.", "diagram": null },
        { "stepNumber": 7, "description": "Cancel the middle terms.", "workingLatex": "-5x + 5x = 0", "explanation": "The middle terms are equal and opposite, so they vanish.", "diagram": null },
        { "stepNumber": 8, "description": "Write the simplified result.", "workingLatex": "x^{2} - 25", "explanation": "Only $x^{2}$ and $-25$ survive.", "diagram": null },
        { "stepNumber": 9, "description": "Confirm with the pattern.", "workingLatex": "(x+a)(x-a)=x^{2}-a^{2}", "explanation": "With $a=5$, $x^{2}-25$, matching.", "diagram": null }
      ],
      "finalAnswer": "$x^{2} - 25$"
    }
  },
  {
    "id": "gcse.algebra.expanding-binomials.q035",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Expanding binomials",
    "subtopicId": "gcse.algebra.expanding-binomials",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "expression",
    "tags": ["difference of two squares", "FOIL", "special product", "quadratic"],
    "questionText": "Expand and simplify $(x+7)(x-7)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Notice the special structure.", "workingLatex": "(x+7)(x-7)", "explanation": "Identical terms with opposite signs means the middle terms will cancel.", "diagram": null },
        { "stepNumber": 2, "description": "Multiply the First terms.", "workingLatex": "x \\times x = x^{2}", "explanation": "The leading terms give $x^{2}$.", "diagram": null },
        { "stepNumber": 3, "description": "Multiply the Outer terms.", "workingLatex": "x \\times (-7) = -7x", "explanation": "Positive times negative gives $-7x$.", "diagram": null },
        { "stepNumber": 4, "description": "Multiply the Inner terms.", "workingLatex": "7 \\times x = 7x", "explanation": "The inner pair gives $+7x$.", "diagram": null },
        { "stepNumber": 5, "description": "Multiply the Last terms.", "workingLatex": "7 \\times (-7) = -49", "explanation": "The constants give $-49$.", "diagram": null },
        { "stepNumber": 6, "description": "Add the four products.", "workingLatex": "x^{2} - 7x + 7x - 49", "explanation": "All products laid out with signs.", "diagram": null },
        { "stepNumber": 7, "description": "Cancel the middle terms.", "workingLatex": "-7x + 7x = 0", "explanation": "Equal and opposite middle terms cancel.", "diagram": null },
        { "stepNumber": 8, "description": "Write the simplified result.", "workingLatex": "x^{2} - 49", "explanation": "Only $x^{2}$ and $-49$ remain.", "diagram": null },
        { "stepNumber": 9, "description": "Confirm with the pattern.", "workingLatex": "(x+a)(x-a)=x^{2}-a^{2}", "explanation": "With $a=7$, $x^{2}-49$, matching.", "diagram": null }
      ],
      "finalAnswer": "$x^{2} - 49$"
    }
  },
  {
    "id": "gcse.algebra.expanding-binomials.q036",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Expanding binomials",
    "subtopicId": "gcse.algebra.expanding-binomials",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "expression",
    "tags": ["difference of two squares", "FOIL", "special product", "quadratic"],
    "questionText": "Expand and simplify $(x+4)(x-4)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Notice the special structure.", "workingLatex": "(x+4)(x-4)", "explanation": "Same terms, opposite signs — a difference of two squares.", "diagram": null },
        { "stepNumber": 2, "description": "Multiply the First terms.", "workingLatex": "x \\times x = x^{2}", "explanation": "The leading terms give $x^{2}$.", "diagram": null },
        { "stepNumber": 3, "description": "Multiply the Outer terms.", "workingLatex": "x \\times (-4) = -4x", "explanation": "Positive times negative gives $-4x$.", "diagram": null },
        { "stepNumber": 4, "description": "Multiply the Inner terms.", "workingLatex": "4 \\times x = 4x", "explanation": "The inner pair gives $+4x$.", "diagram": null },
        { "stepNumber": 5, "description": "Multiply the Last terms.", "workingLatex": "4 \\times (-4) = -16", "explanation": "The constants give $-16$.", "diagram": null },
        { "stepNumber": 6, "description": "Add the four products.", "workingLatex": "x^{2} - 4x + 4x - 16", "explanation": "All products laid out with signs.", "diagram": null },
        { "stepNumber": 7, "description": "Cancel the middle terms.", "workingLatex": "-4x + 4x = 0", "explanation": "The middle terms cancel.", "diagram": null },
        { "stepNumber": 8, "description": "Write the simplified result.", "workingLatex": "x^{2} - 16", "explanation": "Only $x^{2}$ and $-16$ remain.", "diagram": null },
        { "stepNumber": 9, "description": "Confirm with the pattern.", "workingLatex": "(x+a)(x-a)=x^{2}-a^{2}", "explanation": "With $a=4$, $x^{2}-16$, matching.", "diagram": null }
      ],
      "finalAnswer": "$x^{2} - 16$"
    }
  },
  {
    "id": "gcse.algebra.expanding-binomials.q037",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Expanding binomials",
    "subtopicId": "gcse.algebra.expanding-binomials",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "expression",
    "tags": ["expanding brackets", "leading coefficient", "FOIL", "quadratic"],
    "questionText": "Expand and simplify $(2x+1)(x+3)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Set up the expansion with a coefficient on $x$.", "workingLatex": "(2x+1)(x+3)", "explanation": "The $2x$ behaves just like any term; we still multiply each term in the first bracket by each in the second.", "diagram": null },
        { "stepNumber": 2, "description": "Multiply the First terms.", "workingLatex": "2x \\times x = 2x^{2}", "explanation": "Multiply the numbers ($2\\times1$) and the letters ($x\\times x$) to get $2x^{2}$.", "diagram": null },
        { "stepNumber": 3, "description": "Multiply the Outer terms.", "workingLatex": "2x \\times 3 = 6x", "explanation": "The outer pair gives $6x$.", "diagram": null },
        { "stepNumber": 4, "description": "Multiply the Inner terms.", "workingLatex": "1 \\times x = x", "explanation": "The inner pair gives $x$.", "diagram": null },
        { "stepNumber": 5, "description": "Multiply the Last terms.", "workingLatex": "1 \\times 3 = 3", "explanation": "The constants give $3$.", "diagram": null },
        { "stepNumber": 6, "description": "Add the four products.", "workingLatex": "2x^{2} + 6x + x + 3", "explanation": "All products laid out.", "diagram": null },
        { "stepNumber": 7, "description": "Collect the like terms.", "workingLatex": "2x^{2} + 7x + 3", "explanation": "$6x + x = 7x$; the $2x^{2}$ has no like term.", "diagram": null },
        { "stepNumber": 8, "description": "Note the leading coefficient.", "workingLatex": "2x^{2} + 7x + 3", "explanation": "The coefficient of $x^{2}$ is $2$ because the first bracket had a $2x$.", "diagram": null },
        { "stepNumber": 9, "description": "Check by substitution.", "workingLatex": "x=1:\\ (3)(4)=12,\\ \\ 2+7+3=12", "explanation": "Both forms give $12$ at $x=1$, confirming the expansion.", "diagram": null }
      ],
      "finalAnswer": "$2x^{2} + 7x + 3$"
    }
  },
  {
    "id": "gcse.algebra.expanding-binomials.q038",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Expanding binomials",
    "subtopicId": "gcse.algebra.expanding-binomials",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "expression",
    "tags": ["expanding brackets", "leading coefficient", "FOIL", "quadratic"],
    "questionText": "Expand and simplify $(3x+2)(x+4)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Set up the expansion with a coefficient on $x$.", "workingLatex": "(3x+2)(x+4)", "explanation": "The $3x$ is treated like any other term in FOIL.", "diagram": null },
        { "stepNumber": 2, "description": "Multiply the First terms.", "workingLatex": "3x \\times x = 3x^{2}", "explanation": "Numbers $3\\times1$ and letters $x\\times x$ give $3x^{2}$.", "diagram": null },
        { "stepNumber": 3, "description": "Multiply the Outer terms.", "workingLatex": "3x \\times 4 = 12x", "explanation": "The outer pair gives $12x$.", "diagram": null },
        { "stepNumber": 4, "description": "Multiply the Inner terms.", "workingLatex": "2 \\times x = 2x", "explanation": "The inner pair gives $2x$.", "diagram": null },
        { "stepNumber": 5, "description": "Multiply the Last terms.", "workingLatex": "2 \\times 4 = 8", "explanation": "The constants give $8$.", "diagram": null },
        { "stepNumber": 6, "description": "Add the four products.", "workingLatex": "3x^{2} + 12x + 2x + 8", "explanation": "All products laid out.", "diagram": null },
        { "stepNumber": 7, "description": "Collect the like terms.", "workingLatex": "3x^{2} + 14x + 8", "explanation": "$12x + 2x = 14x$.", "diagram": null },
        { "stepNumber": 8, "description": "Note the leading coefficient.", "workingLatex": "3x^{2} + 14x + 8", "explanation": "The $x^{2}$ coefficient is $3$, coming from the $3x$.", "diagram": null },
        { "stepNumber": 9, "description": "Check by substitution.", "workingLatex": "x=1:\\ (5)(5)=25,\\ \\ 3+14+8=25", "explanation": "Both forms give $25$ at $x=1$, confirming the answer.", "diagram": null }
      ],
      "finalAnswer": "$3x^{2} + 14x + 8$"
    }
  },
  {
    "id": "gcse.algebra.expanding-binomials.q039",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Expanding binomials",
    "subtopicId": "gcse.algebra.expanding-binomials",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "expression",
    "tags": ["expanding brackets", "leading coefficient", "negative term", "quadratic"],
    "questionText": "Expand and simplify $(2x-1)(x+5)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Set up the expansion, watching signs and coefficients.", "workingLatex": "(2x-1)(x+5)", "explanation": "We combine a leading coefficient with a negative term, so both need care.", "diagram": null },
        { "stepNumber": 2, "description": "Multiply the First terms.", "workingLatex": "2x \\times x = 2x^{2}", "explanation": "This gives $2x^{2}$.", "diagram": null },
        { "stepNumber": 3, "description": "Multiply the Outer terms.", "workingLatex": "2x \\times 5 = 10x", "explanation": "The outer pair gives $10x$.", "diagram": null },
        { "stepNumber": 4, "description": "Multiply the Inner terms.", "workingLatex": "(-1) \\times x = -x", "explanation": "The $-1$ times $x$ gives $-x$.", "diagram": null },
        { "stepNumber": 5, "description": "Multiply the Last terms.", "workingLatex": "(-1) \\times 5 = -5", "explanation": "The constants give $-5$.", "diagram": null },
        { "stepNumber": 6, "description": "Add the four products.", "workingLatex": "2x^{2} + 10x - x - 5", "explanation": "All products laid out with signs.", "diagram": null },
        { "stepNumber": 7, "description": "Collect the like terms.", "workingLatex": "2x^{2} + 9x - 5", "explanation": "$10x - x = 9x$.", "diagram": null },
        { "stepNumber": 8, "description": "Note the structure of the answer.", "workingLatex": "2x^{2} + 9x - 5", "explanation": "The leading coefficient is $2$ and the constant is negative because of the $-1$.", "diagram": null },
        { "stepNumber": 9, "description": "Check by substitution.", "workingLatex": "x=1:\\ (1)(6)=6,\\ \\ 2+9-5=6", "explanation": "Both forms give $6$ at $x=1$, confirming the expansion.", "diagram": null }
      ],
      "finalAnswer": "$2x^{2} + 9x - 5$"
    }
  },
  {
    "id": "gcse.algebra.expanding-binomials.q040",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Expanding binomials",
    "subtopicId": "gcse.algebra.expanding-binomials",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "expression",
    "tags": ["expanding brackets", "leading coefficient", "negative term", "quadratic"],
    "questionText": "Expand and simplify $(2x+3)(x-1)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Set up the expansion.", "workingLatex": "(2x+3)(x-1)", "explanation": "A leading coefficient and a negative term, so we track both carefully.", "diagram": null },
        { "stepNumber": 2, "description": "Multiply the First terms.", "workingLatex": "2x \\times x = 2x^{2}", "explanation": "This gives $2x^{2}$.", "diagram": null },
        { "stepNumber": 3, "description": "Multiply the Outer terms.", "workingLatex": "2x \\times (-1) = -2x", "explanation": "Positive times negative gives $-2x$.", "diagram": null },
        { "stepNumber": 4, "description": "Multiply the Inner terms.", "workingLatex": "3 \\times x = 3x", "explanation": "The inner pair gives $3x$.", "diagram": null },
        { "stepNumber": 5, "description": "Multiply the Last terms.", "workingLatex": "3 \\times (-1) = -3", "explanation": "The constants give $-3$.", "diagram": null },
        { "stepNumber": 6, "description": "Add the four products.", "workingLatex": "2x^{2} - 2x + 3x - 3", "explanation": "All products laid out with signs.", "diagram": null },
        { "stepNumber": 7, "description": "Collect the like terms.", "workingLatex": "2x^{2} + x - 3", "explanation": "$-2x + 3x = x$.", "diagram": null },
        { "stepNumber": 8, "description": "Note the structure.", "workingLatex": "2x^{2} + x - 3", "explanation": "The leading coefficient is $2$ and the constant is $-3$.", "diagram": null },
        { "stepNumber": 9, "description": "Check by substitution.", "workingLatex": "x=2:\\ (7)(1)=7,\\ \\ 8+2-3=7", "explanation": "Both forms give $7$ at $x=2$, confirming the answer.", "diagram": null }
      ],
      "finalAnswer": "$2x^{2} + x - 3$"
    }
  },
  {
    "id": "gcse.algebra.expanding-binomials.q041",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Expanding binomials",
    "subtopicId": "gcse.algebra.expanding-binomials",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "expression",
    "tags": ["expanding brackets", "leading coefficient", "negative term", "quadratic"],
    "questionText": "Expand and simplify $(5x+2)(x-3)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Set up the expansion.", "workingLatex": "(5x+2)(x-3)", "explanation": "The first bracket has a coefficient of $5$ on $x$; the second contains a negative.", "diagram": null },
        { "stepNumber": 2, "description": "Multiply the First terms.", "workingLatex": "5x \\times x = 5x^{2}", "explanation": "This gives $5x^{2}$.", "diagram": null },
        { "stepNumber": 3, "description": "Multiply the Outer terms.", "workingLatex": "5x \\times (-3) = -15x", "explanation": "Positive times negative gives $-15x$.", "diagram": null },
        { "stepNumber": 4, "description": "Multiply the Inner terms.", "workingLatex": "2 \\times x = 2x", "explanation": "The inner pair gives $2x$.", "diagram": null },
        { "stepNumber": 5, "description": "Multiply the Last terms.", "workingLatex": "2 \\times (-3) = -6", "explanation": "The constants give $-6$.", "diagram": null },
        { "stepNumber": 6, "description": "Add the four products.", "workingLatex": "5x^{2} - 15x + 2x - 6", "explanation": "All products laid out with signs.", "diagram": null },
        { "stepNumber": 7, "description": "Collect the like terms.", "workingLatex": "5x^{2} - 13x - 6", "explanation": "$-15x + 2x = -13x$; the middle term is negative.", "diagram": null },
        { "stepNumber": 8, "description": "Note the structure.", "workingLatex": "5x^{2} - 13x - 6", "explanation": "Leading coefficient $5$ from the $5x$, and a negative constant from $2\\times(-3)$.", "diagram": null },
        { "stepNumber": 9, "description": "Check by substitution.", "workingLatex": "x=1:\\ (7)(-2)=-14,\\ \\ 5-13-6=-14", "explanation": "Both forms give $-14$ at $x=1$, confirming the expansion.", "diagram": null }
      ],
      "finalAnswer": "$5x^{2} - 13x - 6$"
    }
  },
  {
    "id": "gcse.algebra.expanding-binomials.q042",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Expanding binomials",
    "subtopicId": "gcse.algebra.expanding-binomials",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "expression",
    "tags": ["expanding brackets", "leading coefficient", "negative term", "quadratic"],
    "questionText": "Expand and simplify $(4x-3)(x+2)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Set up the expansion.", "workingLatex": "(4x-3)(x+2)", "explanation": "A leading coefficient of $4$ combined with a negative term.", "diagram": null },
        { "stepNumber": 2, "description": "Multiply the First terms.", "workingLatex": "4x \\times x = 4x^{2}", "explanation": "This gives $4x^{2}$.", "diagram": null },
        { "stepNumber": 3, "description": "Multiply the Outer terms.", "workingLatex": "4x \\times 2 = 8x", "explanation": "The outer pair gives $8x$.", "diagram": null },
        { "stepNumber": 4, "description": "Multiply the Inner terms.", "workingLatex": "(-3) \\times x = -3x", "explanation": "The $-3$ times $x$ gives $-3x$.", "diagram": null },
        { "stepNumber": 5, "description": "Multiply the Last terms.", "workingLatex": "(-3) \\times 2 = -6", "explanation": "The constants give $-6$.", "diagram": null },
        { "stepNumber": 6, "description": "Add the four products.", "workingLatex": "4x^{2} + 8x - 3x - 6", "explanation": "All products laid out with signs.", "diagram": null },
        { "stepNumber": 7, "description": "Collect the like terms.", "workingLatex": "4x^{2} + 5x - 6", "explanation": "$8x - 3x = 5x$.", "diagram": null },
        { "stepNumber": 8, "description": "Note the structure.", "workingLatex": "4x^{2} + 5x - 6", "explanation": "Leading coefficient $4$; constant $-6$ from $(-3)\\times2$.", "diagram": null },
        { "stepNumber": 9, "description": "Check by substitution.", "workingLatex": "x=1:\\ (1)(3)=3,\\ \\ 4+5-6=3", "explanation": "Both forms give $3$ at $x=1$, confirming the answer.", "diagram": null }
      ],
      "finalAnswer": "$4x^{2} + 5x - 6$"
    }
  },
  {
    "id": "gcse.algebra.expanding-binomials.q043",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Expanding binomials",
    "subtopicId": "gcse.algebra.expanding-binomials",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "expression",
    "tags": ["expanding brackets", "two variables", "FOIL", "quadratic"],
    "questionText": "Expand and simplify $(x+y)(x+2y)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Set up the two-variable expansion.", "workingLatex": "(x+y)(x+2y)", "explanation": "The same FOIL rules apply; we just carry two letters and keep track of $xy$ and $y^{2}$ terms.", "diagram": null },
        { "stepNumber": 2, "description": "Multiply the First terms.", "workingLatex": "x \\times x = x^{2}", "explanation": "The leading terms give $x^{2}$.", "diagram": null },
        { "stepNumber": 3, "description": "Multiply the Outer terms.", "workingLatex": "x \\times 2y = 2xy", "explanation": "The outer pair gives $2xy$.", "diagram": null },
        { "stepNumber": 4, "description": "Multiply the Inner terms.", "workingLatex": "y \\times x = xy", "explanation": "The inner pair gives $xy$.", "diagram": null },
        { "stepNumber": 5, "description": "Multiply the Last terms.", "workingLatex": "y \\times 2y = 2y^{2}", "explanation": "The two $y$ terms give $2y^{2}$.", "diagram": null },
        { "stepNumber": 6, "description": "Add the four products.", "workingLatex": "x^{2} + 2xy + xy + 2y^{2}", "explanation": "All products laid out.", "diagram": null },
        { "stepNumber": 7, "description": "Collect the like terms.", "workingLatex": "x^{2} + 3xy + 2y^{2}", "explanation": "$2xy$ and $xy$ are like terms and add to $3xy$.", "diagram": null },
        { "stepNumber": 8, "description": "Confirm the term types.", "workingLatex": "x^{2},\\ 3xy,\\ 2y^{2}", "explanation": "There is a squared $x$ term, a mixed $xy$ term, and a squared $y$ term — the natural shape for two-variable binomials.", "diagram": null },
        { "stepNumber": 9, "description": "State the final answer.", "workingLatex": "x^{2} + 3xy + 2y^{2}", "explanation": "The expression is fully expanded and simplified.", "diagram": null }
      ],
      "finalAnswer": "$x^{2} + 3xy + 2y^{2}$"
    }
  },
  {
    "id": "gcse.algebra.expanding-binomials.q044",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Expanding binomials",
    "subtopicId": "gcse.algebra.expanding-binomials",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "expression",
    "tags": ["expanding brackets", "two variables", "negative term", "quadratic"],
    "questionText": "Expand and simplify $(x+y)(x-2y)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Set up the two-variable expansion.", "workingLatex": "(x+y)(x-2y)", "explanation": "We use FOIL with two letters and keep the negative sign attached to $2y$.", "diagram": null },
        { "stepNumber": 2, "description": "Multiply the First terms.", "workingLatex": "x \\times x = x^{2}", "explanation": "The leading terms give $x^{2}$.", "diagram": null },
        { "stepNumber": 3, "description": "Multiply the Outer terms.", "workingLatex": "x \\times (-2y) = -2xy", "explanation": "Positive times negative gives $-2xy$.", "diagram": null },
        { "stepNumber": 4, "description": "Multiply the Inner terms.", "workingLatex": "y \\times x = xy", "explanation": "The inner pair gives $+xy$.", "diagram": null },
        { "stepNumber": 5, "description": "Multiply the Last terms.", "workingLatex": "y \\times (-2y) = -2y^{2}", "explanation": "The $y$ terms give $-2y^{2}$.", "diagram": null },
        { "stepNumber": 6, "description": "Add the four products.", "workingLatex": "x^{2} - 2xy + xy - 2y^{2}", "explanation": "All products laid out with signs.", "diagram": null },
        { "stepNumber": 7, "description": "Collect the like terms.", "workingLatex": "x^{2} - xy - 2y^{2}", "explanation": "$-2xy + xy = -xy$.", "diagram": null },
        { "stepNumber": 8, "description": "Confirm the term types.", "workingLatex": "x^{2},\\ -xy,\\ -2y^{2}", "explanation": "The mixed term is negative because the larger $xy$ contribution came with a minus.", "diagram": null },
        { "stepNumber": 9, "description": "State the final answer.", "workingLatex": "x^{2} - xy - 2y^{2}", "explanation": "The expression is fully simplified.", "diagram": null }
      ],
      "finalAnswer": "$x^{2} - xy - 2y^{2}$"
    }
  },
  {
    "id": "gcse.algebra.expanding-binomials.q045",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Expanding binomials",
    "subtopicId": "gcse.algebra.expanding-binomials",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "expression",
    "tags": ["expanding brackets", "two variables", "negative term", "quadratic"],
    "questionText": "Expand and simplify $(x-3y)(x+4y)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Set up the two-variable expansion.", "workingLatex": "(x-3y)(x+4y)", "explanation": "FOIL with two letters; keep the minus with the $3y$.", "diagram": null },
        { "stepNumber": 2, "description": "Multiply the First terms.", "workingLatex": "x \\times x = x^{2}", "explanation": "The leading terms give $x^{2}$.", "diagram": null },
        { "stepNumber": 3, "description": "Multiply the Outer terms.", "workingLatex": "x \\times 4y = 4xy", "explanation": "The outer pair gives $4xy$.", "diagram": null },
        { "stepNumber": 4, "description": "Multiply the Inner terms.", "workingLatex": "(-3y) \\times x = -3xy", "explanation": "The $-3y$ times $x$ gives $-3xy$.", "diagram": null },
        { "stepNumber": 5, "description": "Multiply the Last terms.", "workingLatex": "(-3y) \\times 4y = -12y^{2}", "explanation": "Negative times positive gives $-12y^{2}$.", "diagram": null },
        { "stepNumber": 6, "description": "Add the four products.", "workingLatex": "x^{2} + 4xy - 3xy - 12y^{2}", "explanation": "All products laid out with signs.", "diagram": null },
        { "stepNumber": 7, "description": "Collect the like terms.", "workingLatex": "x^{2} + xy - 12y^{2}", "explanation": "$4xy - 3xy = xy$.", "diagram": null },
        { "stepNumber": 8, "description": "Confirm the term types.", "workingLatex": "x^{2},\\ xy,\\ -12y^{2}", "explanation": "The squared-$y$ term is negative because $-3y\\times 4y$ is negative.", "diagram": null },
        { "stepNumber": 9, "description": "State the final answer.", "workingLatex": "x^{2} + xy - 12y^{2}", "explanation": "The expression is fully simplified.", "diagram": null }
      ],
      "finalAnswer": "$x^{2} + xy - 12y^{2}$"
    }
  },
  {
    "id": "gcse.algebra.expanding-binomials.q046",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Expanding binomials",
    "subtopicId": "gcse.algebra.expanding-binomials",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "expression",
    "tags": ["expanding brackets", "two variables", "leading coefficient", "quadratic"],
    "questionText": "Expand and simplify $(2x+y)(x-y)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Set up the expansion.", "workingLatex": "(2x+y)(x-y)", "explanation": "This mixes a leading coefficient with two variables, so we watch both the numbers and the letters.", "diagram": null },
        { "stepNumber": 2, "description": "Multiply the First terms.", "workingLatex": "2x \\times x = 2x^{2}", "explanation": "This gives $2x^{2}$.", "diagram": null },
        { "stepNumber": 3, "description": "Multiply the Outer terms.", "workingLatex": "2x \\times (-y) = -2xy", "explanation": "Positive times negative gives $-2xy$.", "diagram": null },
        { "stepNumber": 4, "description": "Multiply the Inner terms.", "workingLatex": "y \\times x = xy", "explanation": "The inner pair gives $+xy$.", "diagram": null },
        { "stepNumber": 5, "description": "Multiply the Last terms.", "workingLatex": "y \\times (-y) = -y^{2}", "explanation": "The $y$ terms give $-y^{2}$.", "diagram": null },
        { "stepNumber": 6, "description": "Add the four products.", "workingLatex": "2x^{2} - 2xy + xy - y^{2}", "explanation": "All products laid out with signs.", "diagram": null },
        { "stepNumber": 7, "description": "Collect the like terms.", "workingLatex": "2x^{2} - xy - y^{2}", "explanation": "$-2xy + xy = -xy$.", "diagram": null },
        { "stepNumber": 8, "description": "Confirm the term types.", "workingLatex": "2x^{2},\\ -xy,\\ -y^{2}", "explanation": "There are $x^{2}$, $xy$ and $y^{2}$ terms, with the leading coefficient $2$ from the $2x$.", "diagram": null },
        { "stepNumber": 9, "description": "State the final answer.", "workingLatex": "2x^{2} - xy - y^{2}", "explanation": "The expression is fully simplified.", "diagram": null }
      ],
      "finalAnswer": "$2x^{2} - xy - y^{2}$"
    }
  },
  {
    "id": "gcse.algebra.expanding-binomials.q047",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Expanding binomials",
    "subtopicId": "gcse.algebra.expanding-binomials",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "expression",
    "tags": ["expand and simplify", "collecting like terms", "two products", "quadratic"],
    "questionText": "Expand and simplify $(x+2)(x+3)+(x+1)(x+4)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Plan the work.", "workingLatex": "(x+2)(x+3)+(x+1)(x+4)", "explanation": "Expand each product separately, then add the two quadratics and collect like terms.", "diagram": null },
        { "stepNumber": 2, "description": "Expand the first product.", "workingLatex": "(x+2)(x+3)=x^{2}+3x+2x+6", "explanation": "FOIL on the first bracket pair gives these four terms.", "diagram": null },
        { "stepNumber": 3, "description": "Simplify the first product.", "workingLatex": "x^{2}+5x+6", "explanation": "$3x+2x=5x$.", "diagram": null },
        { "stepNumber": 4, "description": "Expand the second product.", "workingLatex": "(x+1)(x+4)=x^{2}+4x+x+4", "explanation": "FOIL on the second bracket pair gives these four terms.", "diagram": null },
        { "stepNumber": 5, "description": "Simplify the second product.", "workingLatex": "x^{2}+5x+4", "explanation": "$4x+x=5x$.", "diagram": null },
        { "stepNumber": 6, "description": "Write the sum of the two results.", "workingLatex": "(x^{2}+5x+6)+(x^{2}+5x+4)", "explanation": "Both brackets are added, so all terms keep their signs.", "diagram": null },
        { "stepNumber": 7, "description": "Add the $x^{2}$ terms.", "workingLatex": "x^{2}+x^{2}=2x^{2}", "explanation": "Two lots of $x^{2}$ give $2x^{2}$.", "diagram": null },
        { "stepNumber": 8, "description": "Add the $x$ terms.", "workingLatex": "5x+5x=10x", "explanation": "The two middle terms combine to $10x$.", "diagram": null },
        { "stepNumber": 9, "description": "Add the constants.", "workingLatex": "6+4=10", "explanation": "The constants combine to $10$.", "diagram": null },
        { "stepNumber": 10, "description": "State the final answer.", "workingLatex": "2x^{2}+10x+10", "explanation": "Collecting all like terms gives the simplified expression.", "diagram": null }
      ],
      "finalAnswer": "$2x^{2} + 10x + 10$"
    }
  },
  {
    "id": "gcse.algebra.expanding-binomials.q048",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Expanding binomials",
    "subtopicId": "gcse.algebra.expanding-binomials",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "expression",
    "tags": ["expand and simplify", "collecting like terms", "negative term", "quadratic"],
    "questionText": "Expand and simplify $(x+5)(x-2)+3x$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Plan the work.", "workingLatex": "(x+5)(x-2)+3x", "explanation": "Expand the product first, then add the extra $3x$ and collect like terms.", "diagram": null },
        { "stepNumber": 2, "description": "Multiply the First terms.", "workingLatex": "x \\times x = x^{2}", "explanation": "The leading terms give $x^{2}$.", "diagram": null },
        { "stepNumber": 3, "description": "Multiply the Outer terms.", "workingLatex": "x \\times (-2) = -2x", "explanation": "Positive times negative gives $-2x$.", "diagram": null },
        { "stepNumber": 4, "description": "Multiply the Inner terms.", "workingLatex": "5 \\times x = 5x", "explanation": "The inner pair gives $5x$.", "diagram": null },
        { "stepNumber": 5, "description": "Multiply the Last terms.", "workingLatex": "5 \\times (-2) = -10", "explanation": "The constants give $-10$.", "diagram": null },
        { "stepNumber": 6, "description": "Write the expanded product.", "workingLatex": "x^{2} - 2x + 5x - 10", "explanation": "All four products laid out.", "diagram": null },
        { "stepNumber": 7, "description": "Simplify the product.", "workingLatex": "x^{2} + 3x - 10", "explanation": "$-2x + 5x = 3x$.", "diagram": null },
        { "stepNumber": 8, "description": "Add the extra term.", "workingLatex": "x^{2} + 3x - 10 + 3x", "explanation": "Now include the $+3x$ from outside the product.", "diagram": null },
        { "stepNumber": 9, "description": "Collect like terms and state the answer.", "workingLatex": "x^{2} + 6x - 10", "explanation": "$3x + 3x = 6x$, giving the simplified expression.", "diagram": null }
      ],
      "finalAnswer": "$x^{2} + 6x - 10$"
    }
  },
  {
    "id": "gcse.algebra.expanding-binomials.q049",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Expanding binomials",
    "subtopicId": "gcse.algebra.expanding-binomials",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "expression",
    "tags": ["expand and simplify", "subtracting brackets", "negative term", "quadratic"],
    "questionText": "Expand and simplify $(x-4)(x+2)-(x-3)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Plan the work.", "workingLatex": "(x-4)(x+2)-(x-3)", "explanation": "Expand the product, then carefully subtract the bracket $(x-3)$ by changing the signs of every term inside it.", "diagram": null },
        { "stepNumber": 2, "description": "Multiply the First terms.", "workingLatex": "x \\times x = x^{2}", "explanation": "The leading terms give $x^{2}$.", "diagram": null },
        { "stepNumber": 3, "description": "Multiply the Outer terms.", "workingLatex": "x \\times 2 = 2x", "explanation": "The outer pair gives $2x$.", "diagram": null },
        { "stepNumber": 4, "description": "Multiply the Inner terms.", "workingLatex": "(-4) \\times x = -4x", "explanation": "The $-4$ times $x$ gives $-4x$.", "diagram": null },
        { "stepNumber": 5, "description": "Multiply the Last terms.", "workingLatex": "(-4) \\times 2 = -8", "explanation": "The constants give $-8$.", "diagram": null },
        { "stepNumber": 6, "description": "Simplify the product.", "workingLatex": "x^{2} - 2x - 8", "explanation": "$2x - 4x = -2x$, so the product is $x^{2}-2x-8$.", "diagram": null },
        { "stepNumber": 7, "description": "Subtract the bracket.", "workingLatex": "x^{2} - 2x - 8 - (x-3)", "explanation": "The minus sign in front of $(x-3)$ must be applied to both terms inside.", "diagram": null },
        { "stepNumber": 8, "description": "Remove the bracket, changing signs.", "workingLatex": "x^{2} - 2x - 8 - x + 3", "explanation": "$-(x-3)$ becomes $-x+3$; note $-(-3)=+3$.", "diagram": null },
        { "stepNumber": 9, "description": "Collect like terms.", "workingLatex": "x^{2} - 3x - 5", "explanation": "$-2x - x = -3x$ and $-8 + 3 = -5$.", "diagram": null },
        { "stepNumber": 10, "description": "State the final answer.", "workingLatex": "x^{2} - 3x - 5", "explanation": "The expression is fully expanded and simplified.", "diagram": null }
      ],
      "finalAnswer": "$x^{2} - 3x - 5$"
    }
  },
  {
    "id": "gcse.algebra.expanding-binomials.q050",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Expanding binomials",
    "subtopicId": "gcse.algebra.expanding-binomials",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "expression",
    "tags": ["expand and simplify", "subtracting brackets", "collecting like terms", "quadratic"],
    "questionText": "Expand and simplify $(x+3)(x+2)-x(x+1)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Plan the work.", "workingLatex": "(x+3)(x+2)-x(x+1)", "explanation": "Expand the binomial product and the single-term product, then subtract and collect like terms.", "diagram": null },
        { "stepNumber": 2, "description": "Expand the binomial product.", "workingLatex": "(x+3)(x+2)=x^{2}+2x+3x+6", "explanation": "FOIL gives these four terms.", "diagram": null },
        { "stepNumber": 3, "description": "Simplify the binomial product.", "workingLatex": "x^{2}+5x+6", "explanation": "$2x+3x=5x$.", "diagram": null },
        { "stepNumber": 4, "description": "Expand the second product.", "workingLatex": "x(x+1)=x^{2}+x", "explanation": "The single term $x$ multiplies both terms in the bracket.", "diagram": null },
        { "stepNumber": 5, "description": "Set up the subtraction.", "workingLatex": "(x^{2}+5x+6)-(x^{2}+x)", "explanation": "The whole second expression is subtracted, so its signs will flip.", "diagram": null },
        { "stepNumber": 6, "description": "Remove the bracket, changing signs.", "workingLatex": "x^{2}+5x+6-x^{2}-x", "explanation": "$-(x^{2}+x)$ becomes $-x^{2}-x$.", "diagram": null },
        { "stepNumber": 7, "description": "Cancel the $x^{2}$ terms.", "workingLatex": "x^{2}-x^{2}=0", "explanation": "The quadratic terms cancel, leaving a linear expression.", "diagram": null },
        { "stepNumber": 8, "description": "Collect the remaining terms.", "workingLatex": "5x - x + 6 = 4x + 6", "explanation": "$5x - x = 4x$ and the constant $6$ remains.", "diagram": null },
        { "stepNumber": 9, "description": "State the final answer.", "workingLatex": "4x + 6", "explanation": "The result is linear because the squared terms cancelled.", "diagram": null }
      ],
      "finalAnswer": "$4x + 6$"
    }
  },
  {
    "id": "gcse.algebra.expanding-binomials.q051",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Expanding binomials",
    "subtopicId": "gcse.algebra.expanding-binomials",
    "difficulty": "Hard",
    "marks": 4,
    "answerType": "expression",
    "tags": ["expanding brackets", "leading coefficients", "FOIL", "quadratic"],
    "questionText": "Expand and simplify $(2x+3)(3x-4)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Set up the expansion with coefficients in both brackets.", "workingLatex": "(2x+3)(3x-4)", "explanation": "Both brackets have a number in front of $x$, so each product will involve multiplying two coefficients as well as the letters.", "diagram": null },
        { "stepNumber": 2, "description": "Identify the four term pairs.", "workingLatex": "2x,\\ 3\\ \\text{and}\\ 3x,\\ -4", "explanation": "Listing the terms first helps make sure no product is missed and every sign is noted.", "diagram": null },
        { "stepNumber": 3, "description": "Multiply the First terms.", "workingLatex": "2x \\times 3x = 6x^{2}", "explanation": "Multiply coefficients $2\\times3=6$ and letters $x\\times x=x^{2}$.", "diagram": null },
        { "stepNumber": 4, "description": "Multiply the Outer terms.", "workingLatex": "2x \\times (-4) = -8x", "explanation": "$2\\times(-4)=-8$, so this gives $-8x$.", "diagram": null },
        { "stepNumber": 5, "description": "Multiply the Inner terms.", "workingLatex": "3 \\times 3x = 9x", "explanation": "$3\\times3=9$, so this gives $+9x$.", "diagram": null },
        { "stepNumber": 6, "description": "Multiply the Last terms.", "workingLatex": "3 \\times (-4) = -12", "explanation": "The constants give $-12$.", "diagram": null },
        { "stepNumber": 7, "description": "Add the four products.", "workingLatex": "6x^{2} - 8x + 9x - 12", "explanation": "All four products laid out with signs.", "diagram": null },
        { "stepNumber": 8, "description": "Identify the like terms.", "workingLatex": "-8x\\ \\text{and}\\ 9x", "explanation": "Only the two $x$ terms can be combined; $6x^{2}$ and $-12$ stand alone.", "diagram": null },
        { "stepNumber": 9, "description": "Combine the middle terms.", "workingLatex": "-8x + 9x = x", "explanation": "The middle term is $+x$ because $9$ outweighs $8$.", "diagram": null },
        { "stepNumber": 10, "description": "Write the simplified quadratic.", "workingLatex": "6x^{2} + x - 12", "explanation": "Putting the terms together in order of power gives the answer.", "diagram": null },
        { "stepNumber": 11, "description": "Note the leading coefficient.", "workingLatex": "6x^{2}+x-12", "explanation": "The coefficient of $x^{2}$ is $6=2\\times3$, the product of the two leading coefficients.", "diagram": null },
        { "stepNumber": 12, "description": "Check by substitution.", "workingLatex": "x=1:\\ (5)(-1)=-5,\\ \\ 6+1-12=-5", "explanation": "Both forms give $-5$ at $x=1$.", "diagram": null },
        { "stepNumber": 13, "description": "State the final answer.", "workingLatex": "6x^{2} + x - 12", "explanation": "The expansion is verified and complete.", "diagram": null }
      ],
      "finalAnswer": "$6x^{2} + x - 12$"
    }
  },
  {
    "id": "gcse.algebra.expanding-binomials.q052",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Expanding binomials",
    "subtopicId": "gcse.algebra.expanding-binomials",
    "difficulty": "Hard",
    "marks": 4,
    "answerType": "expression",
    "tags": ["expanding brackets", "leading coefficients", "FOIL", "quadratic"],
    "questionText": "Expand and simplify $(3x-2)(2x+5)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Set up the expansion.", "workingLatex": "(3x-2)(2x+5)", "explanation": "Both brackets carry a coefficient on $x$, so products involve multiplying numbers as well as letters.", "diagram": null },
        { "stepNumber": 2, "description": "List the terms with signs.", "workingLatex": "3x,\\ -2\\ \\text{and}\\ 2x,\\ 5", "explanation": "Recording the signs now avoids slips later.", "diagram": null },
        { "stepNumber": 3, "description": "Multiply the First terms.", "workingLatex": "3x \\times 2x = 6x^{2}", "explanation": "$3\\times2=6$ and $x\\times x=x^{2}$.", "diagram": null },
        { "stepNumber": 4, "description": "Multiply the Outer terms.", "workingLatex": "3x \\times 5 = 15x", "explanation": "The outer pair gives $15x$.", "diagram": null },
        { "stepNumber": 5, "description": "Multiply the Inner terms.", "workingLatex": "(-2) \\times 2x = -4x", "explanation": "$-2\\times2=-4$, giving $-4x$.", "diagram": null },
        { "stepNumber": 6, "description": "Multiply the Last terms.", "workingLatex": "(-2) \\times 5 = -10", "explanation": "The constants give $-10$.", "diagram": null },
        { "stepNumber": 7, "description": "Add the four products.", "workingLatex": "6x^{2} + 15x - 4x - 10", "explanation": "All four products laid out with signs.", "diagram": null },
        { "stepNumber": 8, "description": "Identify the like terms.", "workingLatex": "15x\\ \\text{and}\\ -4x", "explanation": "Only the $x$ terms combine.", "diagram": null },
        { "stepNumber": 9, "description": "Combine the middle terms.", "workingLatex": "15x - 4x = 11x", "explanation": "The middle term is $+11x$.", "diagram": null },
        { "stepNumber": 10, "description": "Write the simplified quadratic.", "workingLatex": "6x^{2} + 11x - 10", "explanation": "The terms are collected in order of power.", "diagram": null },
        { "stepNumber": 11, "description": "Check by substitution.", "workingLatex": "x=1:\\ (1)(7)=7,\\ \\ 6+11-10=7", "explanation": "Both forms give $7$ at $x=1$.", "diagram": null },
        { "stepNumber": 12, "description": "State the final answer.", "workingLatex": "6x^{2} + 11x - 10", "explanation": "The expansion is verified.", "diagram": null }
      ],
      "finalAnswer": "$6x^{2} + 11x - 10$"
    }
  },
  {
    "id": "gcse.algebra.expanding-binomials.q053",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Expanding binomials",
    "subtopicId": "gcse.algebra.expanding-binomials",
    "difficulty": "Hard",
    "marks": 4,
    "answerType": "expression",
    "tags": ["expanding brackets", "leading coefficients", "FOIL", "quadratic"],
    "questionText": "Expand and simplify $(4x+1)(3x+2)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Set up the expansion.", "workingLatex": "(4x+1)(3x+2)", "explanation": "Coefficients appear on $x$ in both brackets.", "diagram": null },
        { "stepNumber": 2, "description": "List the terms.", "workingLatex": "4x,\\ 1\\ \\text{and}\\ 3x,\\ 2", "explanation": "All terms are positive here, so no sign changes are needed.", "diagram": null },
        { "stepNumber": 3, "description": "Multiply the First terms.", "workingLatex": "4x \\times 3x = 12x^{2}", "explanation": "$4\\times3=12$ and $x\\times x=x^{2}$.", "diagram": null },
        { "stepNumber": 4, "description": "Multiply the Outer terms.", "workingLatex": "4x \\times 2 = 8x", "explanation": "The outer pair gives $8x$.", "diagram": null },
        { "stepNumber": 5, "description": "Multiply the Inner terms.", "workingLatex": "1 \\times 3x = 3x", "explanation": "The inner pair gives $3x$.", "diagram": null },
        { "stepNumber": 6, "description": "Multiply the Last terms.", "workingLatex": "1 \\times 2 = 2", "explanation": "The constants give $2$.", "diagram": null },
        { "stepNumber": 7, "description": "Add the four products.", "workingLatex": "12x^{2} + 8x + 3x + 2", "explanation": "All four products laid out.", "diagram": null },
        { "stepNumber": 8, "description": "Combine the middle terms.", "workingLatex": "8x + 3x = 11x", "explanation": "The like terms add to $11x$.", "diagram": null },
        { "stepNumber": 9, "description": "Write the simplified quadratic.", "workingLatex": "12x^{2} + 11x + 2", "explanation": "The terms are collected in order of power.", "diagram": null },
        { "stepNumber": 10, "description": "Note the leading coefficient.", "workingLatex": "12x^{2}+11x+2", "explanation": "The $x^{2}$ coefficient is $12=4\\times3$.", "diagram": null },
        { "stepNumber": 11, "description": "Check by substitution.", "workingLatex": "x=1:\\ (5)(5)=25,\\ \\ 12+11+2=25", "explanation": "Both forms give $25$ at $x=1$.", "diagram": null },
        { "stepNumber": 12, "description": "State the final answer.", "workingLatex": "12x^{2} + 11x + 2", "explanation": "The expansion is verified.", "diagram": null }
      ],
      "finalAnswer": "$12x^{2} + 11x + 2$"
    }
  },
  {
    "id": "gcse.algebra.expanding-binomials.q054",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Expanding binomials",
    "subtopicId": "gcse.algebra.expanding-binomials",
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "expression",
    "tags": ["expanding brackets", "leading coefficients", "two negatives", "quadratic"],
    "questionText": "Expand and simplify $(5x-3)(2x-1)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Set up the expansion, noting two negatives.", "workingLatex": "(5x-3)(2x-1)", "explanation": "Both brackets contain a negative, so the Last product will be positive; we track every sign.", "diagram": null },
        { "stepNumber": 2, "description": "List the terms with signs.", "workingLatex": "5x,\\ -3\\ \\text{and}\\ 2x,\\ -1", "explanation": "Writing the signs down first supports accurate multiplication.", "diagram": null },
        { "stepNumber": 3, "description": "Multiply the First terms.", "workingLatex": "5x \\times 2x = 10x^{2}", "explanation": "$5\\times2=10$ and $x\\times x=x^{2}$.", "diagram": null },
        { "stepNumber": 4, "description": "Multiply the Outer terms.", "workingLatex": "5x \\times (-1) = -5x", "explanation": "Positive times negative gives $-5x$.", "diagram": null },
        { "stepNumber": 5, "description": "Multiply the Inner terms.", "workingLatex": "(-3) \\times 2x = -6x", "explanation": "$-3\\times2=-6$, giving $-6x$.", "diagram": null },
        { "stepNumber": 6, "description": "Multiply the Last terms.", "workingLatex": "(-3) \\times (-1) = 3", "explanation": "Negative times negative gives $+3$.", "diagram": null },
        { "stepNumber": 7, "description": "Add the four products.", "workingLatex": "10x^{2} - 5x - 6x + 3", "explanation": "All four products laid out with signs.", "diagram": null },
        { "stepNumber": 8, "description": "Identify the like terms.", "workingLatex": "-5x\\ \\text{and}\\ -6x", "explanation": "Both middle terms are negative, so they add in size.", "diagram": null },
        { "stepNumber": 9, "description": "Combine the middle terms.", "workingLatex": "-5x - 6x = -11x", "explanation": "The middle term is $-11x$.", "diagram": null },
        { "stepNumber": 10, "description": "Write the simplified quadratic.", "workingLatex": "10x^{2} - 11x + 3", "explanation": "Terms collected in order of power.", "diagram": null },
        { "stepNumber": 11, "description": "Note the constant is positive.", "workingLatex": "+3", "explanation": "Two negatives multiplied give a positive constant.", "diagram": null },
        { "stepNumber": 12, "description": "Check by substitution.", "workingLatex": "x=1:\\ (2)(1)=2,\\ \\ 10-11+3=2", "explanation": "Both forms give $2$ at $x=1$.", "diagram": null },
        { "stepNumber": 13, "description": "State the final answer.", "workingLatex": "10x^{2} - 11x + 3", "explanation": "The expansion is verified and complete.", "diagram": null }
      ],
      "finalAnswer": "$10x^{2} - 11x + 3$"
    }
  },
  {
    "id": "gcse.algebra.expanding-binomials.q055",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Expanding binomials",
    "subtopicId": "gcse.algebra.expanding-binomials",
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "expression",
    "tags": ["expanding brackets", "leading coefficients", "negative term", "quadratic"],
    "questionText": "Expand and simplify $(2x-5)(4x+3)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Set up the expansion.", "workingLatex": "(2x-5)(4x+3)", "explanation": "Both brackets have a coefficient on $x$; the first contains a negative constant.", "diagram": null },
        { "stepNumber": 2, "description": "List the terms with signs.", "workingLatex": "2x,\\ -5\\ \\text{and}\\ 4x,\\ 3", "explanation": "The signs are noted before multiplying.", "diagram": null },
        { "stepNumber": 3, "description": "Multiply the First terms.", "workingLatex": "2x \\times 4x = 8x^{2}", "explanation": "$2\\times4=8$ and $x\\times x=x^{2}$.", "diagram": null },
        { "stepNumber": 4, "description": "Multiply the Outer terms.", "workingLatex": "2x \\times 3 = 6x", "explanation": "The outer pair gives $6x$.", "diagram": null },
        { "stepNumber": 5, "description": "Multiply the Inner terms.", "workingLatex": "(-5) \\times 4x = -20x", "explanation": "$-5\\times4=-20$, giving $-20x$.", "diagram": null },
        { "stepNumber": 6, "description": "Multiply the Last terms.", "workingLatex": "(-5) \\times 3 = -15", "explanation": "The constants give $-15$.", "diagram": null },
        { "stepNumber": 7, "description": "Add the four products.", "workingLatex": "8x^{2} + 6x - 20x - 15", "explanation": "All four products laid out with signs.", "diagram": null },
        { "stepNumber": 8, "description": "Identify the like terms.", "workingLatex": "6x\\ \\text{and}\\ -20x", "explanation": "Only the $x$ terms combine.", "diagram": null },
        { "stepNumber": 9, "description": "Combine the middle terms.", "workingLatex": "6x - 20x = -14x", "explanation": "The middle term is $-14x$ because $-20x$ outweighs $6x$.", "diagram": null },
        { "stepNumber": 10, "description": "Write the simplified quadratic.", "workingLatex": "8x^{2} - 14x - 15", "explanation": "Terms collected in order of power.", "diagram": null },
        { "stepNumber": 11, "description": "Check by substitution.", "workingLatex": "x=1:\\ (-3)(7)=-21,\\ \\ 8-14-15=-21", "explanation": "Both forms give $-21$ at $x=1$.", "diagram": null },
        { "stepNumber": 12, "description": "State the final answer.", "workingLatex": "8x^{2} - 14x - 15", "explanation": "The expansion is verified.", "diagram": null }
      ],
      "finalAnswer": "$8x^{2} - 14x - 15$"
    }
  },
  {
    "id": "gcse.algebra.expanding-binomials.q056",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Expanding binomials",
    "subtopicId": "gcse.algebra.expanding-binomials",
    "difficulty": "Hard",
    "marks": 4,
    "answerType": "expression",
    "tags": ["squaring a binomial", "leading coefficient", "perfect square", "quadratic"],
    "questionText": "Expand and simplify $(2x+3)^{2}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Rewrite the square as a product.", "workingLatex": "(2x+3)^{2} = (2x+3)(2x+3)", "explanation": "Squaring is multiplying the bracket by itself; writing it out prevents squaring each term separately, which would miss the middle term.", "diagram": null },
        { "stepNumber": 2, "description": "Multiply the First terms.", "workingLatex": "2x \\times 2x = 4x^{2}", "explanation": "$2\\times2=4$ and $x\\times x=x^{2}$, giving $4x^{2}$.", "diagram": null },
        { "stepNumber": 3, "description": "Multiply the Outer terms.", "workingLatex": "2x \\times 3 = 6x", "explanation": "The outer pair gives $6x$.", "diagram": null },
        { "stepNumber": 4, "description": "Multiply the Inner terms.", "workingLatex": "3 \\times 2x = 6x", "explanation": "The inner pair also gives $6x$; the two middle terms match for a square.", "diagram": null },
        { "stepNumber": 5, "description": "Multiply the Last terms.", "workingLatex": "3 \\times 3 = 9", "explanation": "The constants give $9$.", "diagram": null },
        { "stepNumber": 6, "description": "Add the four products.", "workingLatex": "4x^{2} + 6x + 6x + 9", "explanation": "All four products laid out.", "diagram": null },
        { "stepNumber": 7, "description": "Collect the like terms.", "workingLatex": "4x^{2} + 12x + 9", "explanation": "The two $6x$ terms add to $12x$.", "diagram": null },
        { "stepNumber": 8, "description": "Compare with the pattern.", "workingLatex": "(ax+b)^{2}=a^{2}x^{2}+2abx+b^{2}", "explanation": "With $a=2,\\,b=3$ this predicts $4x^{2}+12x+9$, matching.", "diagram": null },
        { "stepNumber": 9, "description": "Note the leading coefficient.", "workingLatex": "4x^{2}", "explanation": "The coefficient of $x^{2}$ is $4$ because $2x$ is squared.", "diagram": null },
        { "stepNumber": 10, "description": "Check by substitution.", "workingLatex": "x=1:\\ (5)^{2}=25,\\ \\ 4+12+9=25", "explanation": "Both forms give $25$ at $x=1$.", "diagram": null },
        { "stepNumber": 11, "description": "State the final answer.", "workingLatex": "4x^{2} + 12x + 9", "explanation": "The expanded square is verified.", "diagram": null }
      ],
      "finalAnswer": "$4x^{2} + 12x + 9$"
    }
  },
  {
    "id": "gcse.algebra.expanding-binomials.q057",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Expanding binomials",
    "subtopicId": "gcse.algebra.expanding-binomials",
    "difficulty": "Hard",
    "marks": 4,
    "answerType": "expression",
    "tags": ["squaring a binomial", "leading coefficient", "negative term", "quadratic"],
    "questionText": "Expand and simplify $(3x-2)^{2}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Rewrite the square as a product.", "workingLatex": "(3x-2)^{2} = (3x-2)(3x-2)", "explanation": "Squaring means multiplying the bracket by itself; the negative stays with the $2$.", "diagram": null },
        { "stepNumber": 2, "description": "Multiply the First terms.", "workingLatex": "3x \\times 3x = 9x^{2}", "explanation": "$3\\times3=9$ and $x\\times x=x^{2}$, giving $9x^{2}$.", "diagram": null },
        { "stepNumber": 3, "description": "Multiply the Outer terms.", "workingLatex": "3x \\times (-2) = -6x", "explanation": "Positive times negative gives $-6x$.", "diagram": null },
        { "stepNumber": 4, "description": "Multiply the Inner terms.", "workingLatex": "(-2) \\times 3x = -6x", "explanation": "This gives another $-6x$; the two middle terms match.", "diagram": null },
        { "stepNumber": 5, "description": "Multiply the Last terms.", "workingLatex": "(-2) \\times (-2) = 4", "explanation": "Negative times negative gives $+4$.", "diagram": null },
        { "stepNumber": 6, "description": "Add the four products.", "workingLatex": "9x^{2} - 6x - 6x + 4", "explanation": "All four products laid out with signs.", "diagram": null },
        { "stepNumber": 7, "description": "Collect the like terms.", "workingLatex": "9x^{2} - 12x + 4", "explanation": "The two $-6x$ terms add to $-12x$.", "diagram": null },
        { "stepNumber": 8, "description": "Compare with the pattern.", "workingLatex": "(ax-b)^{2}=a^{2}x^{2}-2abx+b^{2}", "explanation": "With $a=3,\\,b=2$ this predicts $9x^{2}-12x+4$, matching.", "diagram": null },
        { "stepNumber": 9, "description": "Note the signs.", "workingLatex": "9x^{2}-12x+4", "explanation": "The middle term is negative and the constant is positive, as always for $(ax-b)^{2}$.", "diagram": null },
        { "stepNumber": 10, "description": "Check by substitution.", "workingLatex": "x=1:\\ (1)^{2}=1,\\ \\ 9-12+4=1", "explanation": "Both forms give $1$ at $x=1$.", "diagram": null },
        { "stepNumber": 11, "description": "State the final answer.", "workingLatex": "9x^{2} - 12x + 4", "explanation": "The expanded square is verified.", "diagram": null }
      ],
      "finalAnswer": "$9x^{2} - 12x + 4$"
    }
  },
  {
    "id": "gcse.algebra.expanding-binomials.q058",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Expanding binomials",
    "subtopicId": "gcse.algebra.expanding-binomials",
    "difficulty": "Hard",
    "marks": 4,
    "answerType": "expression",
    "tags": ["squaring a binomial", "leading coefficient", "perfect square", "quadratic"],
    "questionText": "Expand and simplify $(5x+1)^{2}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Rewrite the square as a product.", "workingLatex": "(5x+1)^{2} = (5x+1)(5x+1)", "explanation": "Squaring is multiplying the bracket by itself.", "diagram": null },
        { "stepNumber": 2, "description": "Multiply the First terms.", "workingLatex": "5x \\times 5x = 25x^{2}", "explanation": "$5\\times5=25$ and $x\\times x=x^{2}$, giving $25x^{2}$.", "diagram": null },
        { "stepNumber": 3, "description": "Multiply the Outer terms.", "workingLatex": "5x \\times 1 = 5x", "explanation": "The outer pair gives $5x$.", "diagram": null },
        { "stepNumber": 4, "description": "Multiply the Inner terms.", "workingLatex": "1 \\times 5x = 5x", "explanation": "The inner pair also gives $5x$.", "diagram": null },
        { "stepNumber": 5, "description": "Multiply the Last terms.", "workingLatex": "1 \\times 1 = 1", "explanation": "The constants give $1$.", "diagram": null },
        { "stepNumber": 6, "description": "Add the four products.", "workingLatex": "25x^{2} + 5x + 5x + 1", "explanation": "All four products laid out.", "diagram": null },
        { "stepNumber": 7, "description": "Collect the like terms.", "workingLatex": "25x^{2} + 10x + 1", "explanation": "The two $5x$ terms add to $10x$.", "diagram": null },
        { "stepNumber": 8, "description": "Compare with the pattern.", "workingLatex": "(ax+b)^{2}=a^{2}x^{2}+2abx+b^{2}", "explanation": "With $a=5,\\,b=1$ this predicts $25x^{2}+10x+1$, matching.", "diagram": null },
        { "stepNumber": 9, "description": "Check by substitution.", "workingLatex": "x=1:\\ (6)^{2}=36,\\ \\ 25+10+1=36", "explanation": "Both forms give $36$ at $x=1$.", "diagram": null },
        { "stepNumber": 10, "description": "State the final answer.", "workingLatex": "25x^{2} + 10x + 1", "explanation": "The expanded square is verified.", "diagram": null }
      ],
      "finalAnswer": "$25x^{2} + 10x + 1$"
    }
  },
  {
    "id": "gcse.algebra.expanding-binomials.q059",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Expanding binomials",
    "subtopicId": "gcse.algebra.expanding-binomials",
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "expression",
    "tags": ["squaring a binomial", "leading coefficient", "negative term", "quadratic"],
    "questionText": "Expand and simplify $(4x-3)^{2}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Rewrite the square as a product.", "workingLatex": "(4x-3)^{2} = (4x-3)(4x-3)", "explanation": "Squaring means multiplying the bracket by itself; the negative stays with the $3$.", "diagram": null },
        { "stepNumber": 2, "description": "Multiply the First terms.", "workingLatex": "4x \\times 4x = 16x^{2}", "explanation": "$4\\times4=16$ and $x\\times x=x^{2}$, giving $16x^{2}$.", "diagram": null },
        { "stepNumber": 3, "description": "Multiply the Outer terms.", "workingLatex": "4x \\times (-3) = -12x", "explanation": "Positive times negative gives $-12x$.", "diagram": null },
        { "stepNumber": 4, "description": "Multiply the Inner terms.", "workingLatex": "(-3) \\times 4x = -12x", "explanation": "This gives another $-12x$; the two middle terms match.", "diagram": null },
        { "stepNumber": 5, "description": "Multiply the Last terms.", "workingLatex": "(-3) \\times (-3) = 9", "explanation": "Negative times negative gives $+9$.", "diagram": null },
        { "stepNumber": 6, "description": "Add the four products.", "workingLatex": "16x^{2} - 12x - 12x + 9", "explanation": "All four products laid out with signs.", "diagram": null },
        { "stepNumber": 7, "description": "Collect the like terms.", "workingLatex": "16x^{2} - 24x + 9", "explanation": "The two $-12x$ terms add to $-24x$.", "diagram": null },
        { "stepNumber": 8, "description": "Compare with the pattern.", "workingLatex": "(ax-b)^{2}=a^{2}x^{2}-2abx+b^{2}", "explanation": "With $a=4,\\,b=3$ this predicts $16x^{2}-24x+9$, matching.", "diagram": null },
        { "stepNumber": 9, "description": "Note the signs.", "workingLatex": "16x^{2}-24x+9", "explanation": "Middle term negative, constant positive — the hallmark of $(ax-b)^{2}$.", "diagram": null },
        { "stepNumber": 10, "description": "Check by substitution.", "workingLatex": "x=1:\\ (1)^{2}=1,\\ \\ 16-24+9=1", "explanation": "Both forms give $1$ at $x=1$.", "diagram": null },
        { "stepNumber": 11, "description": "State the final answer.", "workingLatex": "16x^{2} - 24x + 9", "explanation": "The expanded square is verified.", "diagram": null }
      ],
      "finalAnswer": "$16x^{2} - 24x + 9$"
    }
  },
  {
    "id": "gcse.algebra.expanding-binomials.q060",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Expanding binomials",
    "subtopicId": "gcse.algebra.expanding-binomials",
    "difficulty": "Hard",
    "marks": 4,
    "answerType": "expression",
    "tags": ["difference of two squares", "leading coefficient", "special product", "quadratic"],
    "questionText": "Expand and simplify $(3x+2)(3x-2)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Notice the special structure.", "workingLatex": "(3x+2)(3x-2)", "explanation": "Identical terms with opposite signs — a difference of two squares, now with a coefficient on $x$.", "diagram": null },
        { "stepNumber": 2, "description": "Multiply the First terms.", "workingLatex": "3x \\times 3x = 9x^{2}", "explanation": "$3\\times3=9$ and $x\\times x=x^{2}$, giving $9x^{2}$.", "diagram": null },
        { "stepNumber": 3, "description": "Multiply the Outer terms.", "workingLatex": "3x \\times (-2) = -6x", "explanation": "Positive times negative gives $-6x$.", "diagram": null },
        { "stepNumber": 4, "description": "Multiply the Inner terms.", "workingLatex": "2 \\times 3x = 6x", "explanation": "The inner pair gives $+6x$.", "diagram": null },
        { "stepNumber": 5, "description": "Multiply the Last terms.", "workingLatex": "2 \\times (-2) = -4", "explanation": "The constants give $-4$.", "diagram": null },
        { "stepNumber": 6, "description": "Add the four products.", "workingLatex": "9x^{2} - 6x + 6x - 4", "explanation": "All four products laid out with signs.", "diagram": null },
        { "stepNumber": 7, "description": "Cancel the middle terms.", "workingLatex": "-6x + 6x = 0", "explanation": "The equal and opposite middle terms cancel — the difference-of-squares signature.", "diagram": null },
        { "stepNumber": 8, "description": "Write the simplified result.", "workingLatex": "9x^{2} - 4", "explanation": "Only the squared term and the negative constant survive.", "diagram": null },
        { "stepNumber": 9, "description": "Confirm with the pattern.", "workingLatex": "(ax+b)(ax-b)=a^{2}x^{2}-b^{2}", "explanation": "With $a=3,\\,b=2$ this gives $9x^{2}-4$, matching.", "diagram": null },
        { "stepNumber": 10, "description": "Check by substitution.", "workingLatex": "x=1:\\ (5)(1)=5,\\ \\ 9-4=5", "explanation": "Both forms give $5$ at $x=1$.", "diagram": null },
        { "stepNumber": 11, "description": "State the final answer.", "workingLatex": "9x^{2} - 4", "explanation": "The expansion is verified.", "diagram": null }
      ],
      "finalAnswer": "$9x^{2} - 4$"
    }
  },
  {
    "id": "gcse.algebra.expanding-binomials.q061",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Expanding binomials",
    "subtopicId": "gcse.algebra.expanding-binomials",
    "difficulty": "Hard",
    "marks": 4,
    "answerType": "expression",
    "tags": ["difference of two squares", "leading coefficient", "special product", "quadratic"],
    "questionText": "Expand and simplify $(5x-4)(5x+4)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Notice the special structure.", "workingLatex": "(5x-4)(5x+4)", "explanation": "Same terms, opposite signs — a difference of two squares with a coefficient on $x$.", "diagram": null },
        { "stepNumber": 2, "description": "Multiply the First terms.", "workingLatex": "5x \\times 5x = 25x^{2}", "explanation": "$5\\times5=25$ and $x\\times x=x^{2}$, giving $25x^{2}$.", "diagram": null },
        { "stepNumber": 3, "description": "Multiply the Outer terms.", "workingLatex": "5x \\times 4 = 20x", "explanation": "The outer pair gives $+20x$.", "diagram": null },
        { "stepNumber": 4, "description": "Multiply the Inner terms.", "workingLatex": "(-4) \\times 5x = -20x", "explanation": "The inner pair gives $-20x$.", "diagram": null },
        { "stepNumber": 5, "description": "Multiply the Last terms.", "workingLatex": "(-4) \\times 4 = -16", "explanation": "The constants give $-16$.", "diagram": null },
        { "stepNumber": 6, "description": "Add the four products.", "workingLatex": "25x^{2} + 20x - 20x - 16", "explanation": "All four products laid out with signs.", "diagram": null },
        { "stepNumber": 7, "description": "Cancel the middle terms.", "workingLatex": "20x - 20x = 0", "explanation": "The equal and opposite middle terms cancel.", "diagram": null },
        { "stepNumber": 8, "description": "Write the simplified result.", "workingLatex": "25x^{2} - 16", "explanation": "Only the squared term and negative constant remain.", "diagram": null },
        { "stepNumber": 9, "description": "Confirm with the pattern.", "workingLatex": "(ax-b)(ax+b)=a^{2}x^{2}-b^{2}", "explanation": "With $a=5,\\,b=4$ this gives $25x^{2}-16$, matching.", "diagram": null },
        { "stepNumber": 10, "description": "Check by substitution.", "workingLatex": "x=1:\\ (1)(9)=9,\\ \\ 25-16=9", "explanation": "Both forms give $9$ at $x=1$.", "diagram": null },
        { "stepNumber": 11, "description": "State the final answer.", "workingLatex": "25x^{2} - 16", "explanation": "The expansion is verified.", "diagram": null }
      ],
      "finalAnswer": "$25x^{2} - 16$"
    }
  },
  {
    "id": "gcse.algebra.expanding-binomials.q062",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Expanding binomials",
    "subtopicId": "gcse.algebra.expanding-binomials",
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "expression",
    "tags": ["three binomials", "cubic", "Higher", "expand and simplify"],
    "questionText": "Expand and simplify $(x+1)(x+2)(x+3)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Plan the approach.", "workingLatex": "(x+1)(x+2)(x+3)", "explanation": "With three brackets we expand two of them first to get a quadratic, then multiply that by the remaining bracket.", "diagram": null },
        { "stepNumber": 2, "description": "Expand the first two brackets.", "workingLatex": "(x+1)(x+2)=x^{2}+2x+x+2", "explanation": "FOIL on the first pair gives these four terms.", "diagram": null },
        { "stepNumber": 3, "description": "Simplify that quadratic.", "workingLatex": "x^{2}+3x+2", "explanation": "$2x+x=3x$.", "diagram": null },
        { "stepNumber": 4, "description": "Set up the next multiplication.", "workingLatex": "(x^{2}+3x+2)(x+3)", "explanation": "Now every term of the quadratic must multiply every term of $(x+3)$.", "diagram": null },
        { "stepNumber": 5, "description": "Multiply the quadratic by $x$.", "workingLatex": "x(x^{2}+3x+2)=x^{3}+3x^{2}+2x", "explanation": "Distribute $x$ across all three terms, raising each power by one.", "diagram": null },
        { "stepNumber": 6, "description": "Multiply the quadratic by $3$.", "workingLatex": "3(x^{2}+3x+2)=3x^{2}+9x+6", "explanation": "Distribute $3$ across all three terms.", "diagram": null },
        { "stepNumber": 7, "description": "Add the two rows.", "workingLatex": "x^{3}+3x^{2}+2x+3x^{2}+9x+6", "explanation": "Combine the results of multiplying by $x$ and by $3$.", "diagram": null },
        { "stepNumber": 8, "description": "Collect the $x^{2}$ terms.", "workingLatex": "3x^{2}+3x^{2}=6x^{2}", "explanation": "The two square terms combine.", "diagram": null },
        { "stepNumber": 9, "description": "Collect the $x$ terms.", "workingLatex": "2x+9x=11x", "explanation": "The two linear terms combine.", "diagram": null },
        { "stepNumber": 10, "description": "Write the simplified cubic.", "workingLatex": "x^{3}+6x^{2}+11x+6", "explanation": "There is nothing left to combine.", "diagram": null },
        { "stepNumber": 11, "description": "Sense-check the leading and constant terms.", "workingLatex": "x^{3}\\ \\text{and}\\ 1\\times2\\times3=6", "explanation": "The highest term is $x^{3}$ (one $x$ from each bracket) and the constant is the product of the numbers, $6$.", "diagram": null },
        { "stepNumber": 12, "description": "Check by substitution.", "workingLatex": "x=1:\\ (2)(3)(4)=24,\\ \\ 1+6+11+6=24", "explanation": "Both forms give $24$ at $x=1$.", "diagram": null },
        { "stepNumber": 13, "description": "State the final answer.", "workingLatex": "x^{3}+6x^{2}+11x+6", "explanation": "The three-bracket expansion is verified.", "diagram": null }
      ],
      "finalAnswer": "$x^{3} + 6x^{2} + 11x + 6$"
    }
  },
  {
    "id": "gcse.algebra.expanding-binomials.q063",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Expanding binomials",
    "subtopicId": "gcse.algebra.expanding-binomials",
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "expression",
    "tags": ["three binomials", "cubic", "Higher", "negative term"],
    "questionText": "Expand and simplify $(x-1)(x+2)(x+4)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Plan the approach.", "workingLatex": "(x-1)(x+2)(x+4)", "explanation": "Expand the first two brackets to a quadratic, then multiply by the third, tracking the negative carefully.", "diagram": null },
        { "stepNumber": 2, "description": "Expand the first two brackets.", "workingLatex": "(x-1)(x+2)=x^{2}+2x-x-2", "explanation": "FOIL gives these four terms; the $-1$ produces two negative products.", "diagram": null },
        { "stepNumber": 3, "description": "Simplify that quadratic.", "workingLatex": "x^{2}+x-2", "explanation": "$2x-x=x$.", "diagram": null },
        { "stepNumber": 4, "description": "Set up the next multiplication.", "workingLatex": "(x^{2}+x-2)(x+4)", "explanation": "Every term of the quadratic multiplies every term of $(x+4)$.", "diagram": null },
        { "stepNumber": 5, "description": "Multiply the quadratic by $x$.", "workingLatex": "x(x^{2}+x-2)=x^{3}+x^{2}-2x", "explanation": "Distribute $x$ across all three terms.", "diagram": null },
        { "stepNumber": 6, "description": "Multiply the quadratic by $4$.", "workingLatex": "4(x^{2}+x-2)=4x^{2}+4x-8", "explanation": "Distribute $4$ across all three terms.", "diagram": null },
        { "stepNumber": 7, "description": "Add the two rows.", "workingLatex": "x^{3}+x^{2}-2x+4x^{2}+4x-8", "explanation": "Combine both distributions.", "diagram": null },
        { "stepNumber": 8, "description": "Collect the $x^{2}$ terms.", "workingLatex": "x^{2}+4x^{2}=5x^{2}", "explanation": "The two square terms combine.", "diagram": null },
        { "stepNumber": 9, "description": "Collect the $x$ terms.", "workingLatex": "-2x+4x=2x", "explanation": "The two linear terms combine.", "diagram": null },
        { "stepNumber": 10, "description": "Write the simplified cubic.", "workingLatex": "x^{3}+5x^{2}+2x-8", "explanation": "Nothing further can be combined.", "diagram": null },
        { "stepNumber": 11, "description": "Sense-check the constant.", "workingLatex": "(-1)\\times2\\times4=-8", "explanation": "The product of the three constants is $-8$, matching the constant term.", "diagram": null },
        { "stepNumber": 12, "description": "Check by substitution.", "workingLatex": "x=1:\\ (0)(3)(5)=0,\\ \\ 1+5+2-8=0", "explanation": "Both forms give $0$ at $x=1$ (as expected, since $x=1$ makes $(x-1)=0$).", "diagram": null },
        { "stepNumber": 13, "description": "State the final answer.", "workingLatex": "x^{3}+5x^{2}+2x-8", "explanation": "The expansion is verified.", "diagram": null }
      ],
      "finalAnswer": "$x^{3} + 5x^{2} + 2x - 8$"
    }
  },
  {
    "id": "gcse.algebra.expanding-binomials.q064",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Expanding binomials",
    "subtopicId": "gcse.algebra.expanding-binomials",
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "expression",
    "tags": ["three binomials", "cubic", "Higher", "two negatives"],
    "questionText": "Expand and simplify $(x+1)(x-2)(x-3)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Plan the approach.", "workingLatex": "(x+1)(x-2)(x-3)", "explanation": "Expand the first two brackets, then multiply by the third, keeping careful track of the negatives.", "diagram": null },
        { "stepNumber": 2, "description": "Expand the first two brackets.", "workingLatex": "(x+1)(x-2)=x^{2}-2x+x-2", "explanation": "FOIL gives these four terms.", "diagram": null },
        { "stepNumber": 3, "description": "Simplify that quadratic.", "workingLatex": "x^{2}-x-2", "explanation": "$-2x+x=-x$.", "diagram": null },
        { "stepNumber": 4, "description": "Set up the next multiplication.", "workingLatex": "(x^{2}-x-2)(x-3)", "explanation": "Every term of the quadratic multiplies every term of $(x-3)$.", "diagram": null },
        { "stepNumber": 5, "description": "Multiply the quadratic by $x$.", "workingLatex": "x(x^{2}-x-2)=x^{3}-x^{2}-2x", "explanation": "Distribute $x$ across all three terms.", "diagram": null },
        { "stepNumber": 6, "description": "Multiply the quadratic by $-3$.", "workingLatex": "-3(x^{2}-x-2)=-3x^{2}+3x+6", "explanation": "Distribute $-3$; each sign flips because the multiplier is negative.", "diagram": null },
        { "stepNumber": 7, "description": "Add the two rows.", "workingLatex": "x^{3}-x^{2}-2x-3x^{2}+3x+6", "explanation": "Combine both distributions.", "diagram": null },
        { "stepNumber": 8, "description": "Collect the $x^{2}$ terms.", "workingLatex": "-x^{2}-3x^{2}=-4x^{2}", "explanation": "The two square terms combine.", "diagram": null },
        { "stepNumber": 9, "description": "Collect the $x$ terms.", "workingLatex": "-2x+3x=x", "explanation": "The two linear terms combine to $+x$.", "diagram": null },
        { "stepNumber": 10, "description": "Write the simplified cubic.", "workingLatex": "x^{3}-4x^{2}+x+6", "explanation": "Nothing further can be combined.", "diagram": null },
        { "stepNumber": 11, "description": "Sense-check the constant.", "workingLatex": "1\\times(-2)\\times(-3)=6", "explanation": "The product of the three constants is $+6$, matching.", "diagram": null },
        { "stepNumber": 12, "description": "Check by substitution.", "workingLatex": "x=1:\\ (2)(-1)(-2)=4,\\ \\ 1-4+1+6=4", "explanation": "Both forms give $4$ at $x=1$.", "diagram": null },
        { "stepNumber": 13, "description": "State the final answer.", "workingLatex": "x^{3}-4x^{2}+x+6", "explanation": "The expansion is verified.", "diagram": null }
      ],
      "finalAnswer": "$x^{3} - 4x^{2} + x + 6$"
    }
  },
  {
    "id": "gcse.algebra.expanding-binomials.q065",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Expanding binomials",
    "subtopicId": "gcse.algebra.expanding-binomials",
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "expression",
    "tags": ["binomial times quadratic", "cubic", "Higher", "distributing"],
    "questionText": "Expand and simplify $(x+2)(x^{2}+3x+1)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Plan the approach.", "workingLatex": "(x+2)(x^{2}+3x+1)", "explanation": "Each term in the binomial must multiply every term in the quadratic — six products in total.", "diagram": null },
        { "stepNumber": 2, "description": "Multiply the quadratic by $x$.", "workingLatex": "x \\times x^{2} = x^{3}", "explanation": "Multiplying $x$ by $x^{2}$ raises the power to $x^{3}$.", "diagram": null },
        { "stepNumber": 3, "description": "Continue multiplying by $x$.", "workingLatex": "x \\times 3x = 3x^{2}", "explanation": "The middle term of the quadratic gives $3x^{2}$.", "diagram": null },
        { "stepNumber": 4, "description": "Finish multiplying by $x$.", "workingLatex": "x \\times 1 = x", "explanation": "The constant term of the quadratic gives $x$.", "diagram": null },
        { "stepNumber": 5, "description": "Multiply the quadratic by $2$.", "workingLatex": "2 \\times x^{2} = 2x^{2}", "explanation": "Now distribute the $+2$, starting with the $x^{2}$ term.", "diagram": null },
        { "stepNumber": 6, "description": "Continue multiplying by $2$.", "workingLatex": "2 \\times 3x = 6x", "explanation": "The middle term gives $6x$.", "diagram": null },
        { "stepNumber": 7, "description": "Finish multiplying by $2$.", "workingLatex": "2 \\times 1 = 2", "explanation": "The constant gives $2$.", "diagram": null },
        { "stepNumber": 8, "description": "Write out all six products.", "workingLatex": "x^{3}+3x^{2}+x+2x^{2}+6x+2", "explanation": "Every product is laid out ready to collect.", "diagram": null },
        { "stepNumber": 9, "description": "Collect the $x^{2}$ terms.", "workingLatex": "3x^{2}+2x^{2}=5x^{2}", "explanation": "The two square terms combine.", "diagram": null },
        { "stepNumber": 10, "description": "Collect the $x$ terms.", "workingLatex": "x+6x=7x", "explanation": "The two linear terms combine.", "diagram": null },
        { "stepNumber": 11, "description": "Write the simplified cubic.", "workingLatex": "x^{3}+5x^{2}+7x+2", "explanation": "The $x^{3}$ and constant $2$ have no like terms.", "diagram": null },
        { "stepNumber": 12, "description": "Check by substitution.", "workingLatex": "x=1:\\ (3)(5)=15,\\ \\ 1+5+7+2=15", "explanation": "Both forms give $15$ at $x=1$.", "diagram": null },
        { "stepNumber": 13, "description": "State the final answer.", "workingLatex": "x^{3}+5x^{2}+7x+2", "explanation": "The expansion is verified.", "diagram": null }
      ],
      "finalAnswer": "$x^{3} + 5x^{2} + 7x + 2$"
    }
  },
  {
    "id": "gcse.algebra.expanding-binomials.q066",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Expanding binomials",
    "subtopicId": "gcse.algebra.expanding-binomials",
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "expression",
    "tags": ["binomial times quadratic", "cubic", "Higher", "negative term"],
    "questionText": "Expand and simplify $(x-3)(x^{2}-2x+4)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Plan the approach.", "workingLatex": "(x-3)(x^{2}-2x+4)", "explanation": "Multiply each term of the binomial by every term of the quadratic, keeping the $-3$'s sign in view.", "diagram": null },
        { "stepNumber": 2, "description": "Multiply the quadratic by $x$.", "workingLatex": "x \\times x^{2} = x^{3}", "explanation": "This gives the leading $x^{3}$ term.", "diagram": null },
        { "stepNumber": 3, "description": "Continue multiplying by $x$.", "workingLatex": "x \\times (-2x) = -2x^{2}", "explanation": "The middle term of the quadratic gives $-2x^{2}$.", "diagram": null },
        { "stepNumber": 4, "description": "Finish multiplying by $x$.", "workingLatex": "x \\times 4 = 4x", "explanation": "The constant term gives $4x$.", "diagram": null },
        { "stepNumber": 5, "description": "Multiply the quadratic by $-3$.", "workingLatex": "(-3) \\times x^{2} = -3x^{2}", "explanation": "Distributing $-3$ over the $x^{2}$ term gives $-3x^{2}$.", "diagram": null },
        { "stepNumber": 6, "description": "Continue multiplying by $-3$.", "workingLatex": "(-3) \\times (-2x) = 6x", "explanation": "Negative times negative gives $+6x$.", "diagram": null },
        { "stepNumber": 7, "description": "Finish multiplying by $-3$.", "workingLatex": "(-3) \\times 4 = -12", "explanation": "The constant product is $-12$.", "diagram": null },
        { "stepNumber": 8, "description": "Write out all six products.", "workingLatex": "x^{3}-2x^{2}+4x-3x^{2}+6x-12", "explanation": "Every product laid out with its sign.", "diagram": null },
        { "stepNumber": 9, "description": "Collect the $x^{2}$ terms.", "workingLatex": "-2x^{2}-3x^{2}=-5x^{2}", "explanation": "The two square terms combine.", "diagram": null },
        { "stepNumber": 10, "description": "Collect the $x$ terms.", "workingLatex": "4x+6x=10x", "explanation": "The two linear terms combine.", "diagram": null },
        { "stepNumber": 11, "description": "Write the simplified cubic.", "workingLatex": "x^{3}-5x^{2}+10x-12", "explanation": "Nothing further can be combined.", "diagram": null },
        { "stepNumber": 12, "description": "Check by substitution.", "workingLatex": "x=1:\\ (-2)(3)=-6,\\ \\ 1-5+10-12=-6", "explanation": "Both forms give $-6$ at $x=1$.", "diagram": null },
        { "stepNumber": 13, "description": "State the final answer.", "workingLatex": "x^{3}-5x^{2}+10x-12", "explanation": "The expansion is verified.", "diagram": null }
      ],
      "finalAnswer": "$x^{3} - 5x^{2} + 10x - 12$"
    }
  },
  {
    "id": "gcse.algebra.expanding-binomials.q067",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Expanding binomials",
    "subtopicId": "gcse.algebra.expanding-binomials",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "expression",
    "tags": ["binomial times quadratic", "cubic", "leading coefficient", "Higher"],
    "questionText": "Expand and simplify $(2x+1)(x^{2}+x-3)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Plan the approach.", "workingLatex": "(2x+1)(x^{2}+x-3)", "explanation": "Multiply each term of the binomial by every term of the quadratic; the leading $2x$ will produce a $2x^{3}$ term.", "diagram": null },
        { "stepNumber": 2, "description": "Multiply the quadratic by $2x$.", "workingLatex": "2x \\times x^{2} = 2x^{3}", "explanation": "$2\\times1=2$ and $x\\times x^{2}=x^{3}$, giving $2x^{3}$.", "diagram": null },
        { "stepNumber": 3, "description": "Continue multiplying by $2x$.", "workingLatex": "2x \\times x = 2x^{2}", "explanation": "The middle term gives $2x^{2}$.", "diagram": null },
        { "stepNumber": 4, "description": "Finish multiplying by $2x$.", "workingLatex": "2x \\times (-3) = -6x", "explanation": "The constant term gives $-6x$.", "diagram": null },
        { "stepNumber": 5, "description": "Multiply the quadratic by $1$.", "workingLatex": "1 \\times x^{2} = x^{2}", "explanation": "The $+1$ leaves each term of the quadratic unchanged, starting with $x^{2}$.", "diagram": null },
        { "stepNumber": 6, "description": "Continue multiplying by $1$.", "workingLatex": "1 \\times x = x", "explanation": "The middle term gives $x$.", "diagram": null },
        { "stepNumber": 7, "description": "Finish multiplying by $1$.", "workingLatex": "1 \\times (-3) = -3", "explanation": "The constant gives $-3$.", "diagram": null },
        { "stepNumber": 8, "description": "Write out all six products.", "workingLatex": "2x^{3}+2x^{2}-6x+x^{2}+x-3", "explanation": "Every product laid out with its sign.", "diagram": null },
        { "stepNumber": 9, "description": "Collect the $x^{2}$ terms.", "workingLatex": "2x^{2}+x^{2}=3x^{2}", "explanation": "The two square terms combine.", "diagram": null },
        { "stepNumber": 10, "description": "Collect the $x$ terms.", "workingLatex": "-6x+x=-5x", "explanation": "The two linear terms combine to $-5x$.", "diagram": null },
        { "stepNumber": 11, "description": "Write the simplified cubic.", "workingLatex": "2x^{3}+3x^{2}-5x-3", "explanation": "The $2x^{3}$ and constant $-3$ have no like terms.", "diagram": null },
        { "stepNumber": 12, "description": "Note the leading coefficient.", "workingLatex": "2x^{3}", "explanation": "The cubic term has coefficient $2$, from the leading $2x$ in the binomial.", "diagram": null },
        { "stepNumber": 13, "description": "Check by substitution.", "workingLatex": "x=1:\\ (3)(-1)=-3,\\ \\ 2+3-5-3=-3", "explanation": "Both forms give $-3$ at $x=1$.", "diagram": null },
        { "stepNumber": 14, "description": "State the final answer.", "workingLatex": "2x^{3}+3x^{2}-5x-3", "explanation": "The expansion is verified.", "diagram": null }
      ],
      "finalAnswer": "$2x^{3} + 3x^{2} - 5x - 3$"
    }
  },
  {
    "id": "gcse.algebra.expanding-binomials.q068",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Expanding binomials",
    "subtopicId": "gcse.algebra.expanding-binomials",
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "expression",
    "tags": ["expand and simplify", "subtracting a square", "sign work", "collecting like terms"],
    "questionText": "Expand and simplify $(x+2)(x-3)-(x-1)^{2}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Plan the work.", "workingLatex": "(x+2)(x-3)-(x-1)^{2}", "explanation": "Expand the product and the square separately, then subtract the whole square, taking great care with signs.", "diagram": null },
        { "stepNumber": 2, "description": "Expand the product.", "workingLatex": "(x+2)(x-3)=x^{2}-3x+2x-6", "explanation": "FOIL on the first pair gives these four terms.", "diagram": null },
        { "stepNumber": 3, "description": "Simplify the product.", "workingLatex": "x^{2}-x-6", "explanation": "$-3x+2x=-x$.", "diagram": null },
        { "stepNumber": 4, "description": "Write the square as a product.", "workingLatex": "(x-1)^{2}=(x-1)(x-1)", "explanation": "We expand the square in full before subtracting it.", "diagram": null },
        { "stepNumber": 5, "description": "Expand the square.", "workingLatex": "x^{2}-x-x+1", "explanation": "FOIL gives $x^{2}$, two $-x$ terms, and $+1$.", "diagram": null },
        { "stepNumber": 6, "description": "Simplify the square.", "workingLatex": "x^{2}-2x+1", "explanation": "The two $-x$ terms combine to $-2x$.", "diagram": null },
        { "stepNumber": 7, "description": "Set up the subtraction.", "workingLatex": "(x^{2}-x-6)-(x^{2}-2x+1)", "explanation": "The entire square is subtracted, so every term inside its bracket changes sign.", "diagram": null },
        { "stepNumber": 8, "description": "Remove the bracket, changing signs.", "workingLatex": "x^{2}-x-6-x^{2}+2x-1", "explanation": "$-(x^{2}-2x+1)$ becomes $-x^{2}+2x-1$; note the sign flip on each term.", "diagram": null },
        { "stepNumber": 9, "description": "Cancel the $x^{2}$ terms.", "workingLatex": "x^{2}-x^{2}=0", "explanation": "The square terms cancel, so the result will be linear.", "diagram": null },
        { "stepNumber": 10, "description": "Collect the $x$ terms.", "workingLatex": "-x+2x=x", "explanation": "The linear terms combine to $+x$.", "diagram": null },
        { "stepNumber": 11, "description": "Collect the constants.", "workingLatex": "-6-1=-7", "explanation": "The constants combine to $-7$.", "diagram": null },
        { "stepNumber": 12, "description": "Write the simplified expression.", "workingLatex": "x-7", "explanation": "Only the linear term and constant remain.", "diagram": null },
        { "stepNumber": 13, "description": "Check by substitution.", "workingLatex": "x=0:\\ (2)(-3)-(-1)^{2}=-6-1=-7,\\ \\ 0-7=-7", "explanation": "Both forms give $-7$ at $x=0$.", "diagram": null },
        { "stepNumber": 14, "description": "State the final answer.", "workingLatex": "x-7", "explanation": "The careful sign work gives a clean linear result.", "diagram": null }
      ],
      "finalAnswer": "$x - 7$"
    }
  },
  {
    "id": "gcse.algebra.expanding-binomials.q069",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Expanding binomials",
    "subtopicId": "gcse.algebra.expanding-binomials",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "expression",
    "tags": ["expand and simplify", "subtracting brackets", "leading coefficient", "sign work"],
    "questionText": "Expand and simplify $(2x-1)(x+4)-(x+3)(x-2)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Plan the work.", "workingLatex": "(2x-1)(x+4)-(x+3)(x-2)", "explanation": "Expand each product separately, then subtract the second quadratic from the first, changing every sign inside the subtracted bracket.", "diagram": null },
        { "stepNumber": 2, "description": "Expand the first product.", "workingLatex": "(2x-1)(x+4)=2x^{2}+8x-x-4", "explanation": "FOIL: $2x^{2}$, outer $8x$, inner $-x$, last $-4$.", "diagram": null },
        { "stepNumber": 3, "description": "Simplify the first product.", "workingLatex": "2x^{2}+7x-4", "explanation": "$8x-x=7x$.", "diagram": null },
        { "stepNumber": 4, "description": "Expand the second product.", "workingLatex": "(x+3)(x-2)=x^{2}-2x+3x-6", "explanation": "FOIL: $x^{2}$, outer $-2x$, inner $3x$, last $-6$.", "diagram": null },
        { "stepNumber": 5, "description": "Simplify the second product.", "workingLatex": "x^{2}+x-6", "explanation": "$-2x+3x=x$.", "diagram": null },
        { "stepNumber": 6, "description": "Set up the subtraction.", "workingLatex": "(2x^{2}+7x-4)-(x^{2}+x-6)", "explanation": "The whole second quadratic is subtracted, so each of its terms will change sign.", "diagram": null },
        { "stepNumber": 7, "description": "Remove the bracket, changing signs.", "workingLatex": "2x^{2}+7x-4-x^{2}-x+6", "explanation": "$-(x^{2}+x-6)$ becomes $-x^{2}-x+6$; note $-(-6)=+6$.", "diagram": null },
        { "stepNumber": 8, "description": "Collect the $x^{2}$ terms.", "workingLatex": "2x^{2}-x^{2}=x^{2}", "explanation": "The square terms combine to $x^{2}$.", "diagram": null },
        { "stepNumber": 9, "description": "Collect the $x$ terms.", "workingLatex": "7x-x=6x", "explanation": "The linear terms combine to $6x$.", "diagram": null },
        { "stepNumber": 10, "description": "Collect the constants.", "workingLatex": "-4+6=2", "explanation": "The constants combine to $+2$.", "diagram": null },
        { "stepNumber": 11, "description": "Write the simplified quadratic.", "workingLatex": "x^{2}+6x+2", "explanation": "All like terms have been combined.", "diagram": null },
        { "stepNumber": 12, "description": "Check by substitution.", "workingLatex": "x=1:\\ (1)(5)-(4)(-1)=5+4=9,\\ \\ 1+6+2=9", "explanation": "Both forms give $9$ at $x=1$.", "diagram": null },
        { "stepNumber": 13, "description": "State the final answer.", "workingLatex": "x^{2}+6x+2", "explanation": "The careful sign work gives the simplified quadratic.", "diagram": null }
      ],
      "finalAnswer": "$x^{2} + 6x + 2$"
    }
  },
  {
    "id": "gcse.algebra.expanding-binomials.q070",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Expanding binomials",
    "subtopicId": "gcse.algebra.expanding-binomials",
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "expression",
    "tags": ["area", "forming an expression", "leading coefficient", "problem solving"],
    "questionText": "A rectangle has length $(2x+3)$ cm and width $(x+4)$ cm. Find an expression, in expanded and simplified form, for the area of the rectangle in $\\text{cm}^{2}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall the formula for the area of a rectangle.", "workingLatex": "\\text{Area} = \\text{length} \\times \\text{width}", "explanation": "The area of a rectangle is length multiplied by width, so we form a product of the two given expressions.", "diagram": null },
        { "stepNumber": 2, "description": "Write the area as a product of binomials.", "workingLatex": "\\text{Area} = (2x+3)(x+4)", "explanation": "Substituting the given length and width sets up a binomial product to expand.", "diagram": null },
        { "stepNumber": 3, "description": "Multiply the First terms.", "workingLatex": "2x \\times x = 2x^{2}", "explanation": "$2\\times1=2$ and $x\\times x=x^{2}$, giving $2x^{2}$.", "diagram": null },
        { "stepNumber": 4, "description": "Multiply the Outer terms.", "workingLatex": "2x \\times 4 = 8x", "explanation": "The outer pair gives $8x$.", "diagram": null },
        { "stepNumber": 5, "description": "Multiply the Inner terms.", "workingLatex": "3 \\times x = 3x", "explanation": "The inner pair gives $3x$.", "diagram": null },
        { "stepNumber": 6, "description": "Multiply the Last terms.", "workingLatex": "3 \\times 4 = 12", "explanation": "The constants give $12$.", "diagram": null },
        { "stepNumber": 7, "description": "Add the four products.", "workingLatex": "2x^{2} + 8x + 3x + 12", "explanation": "All four products laid out, matching the four smaller areas of a rectangle split into parts.", "diagram": null },
        { "stepNumber": 8, "description": "Collect the like terms.", "workingLatex": "2x^{2} + 11x + 12", "explanation": "$8x + 3x = 11x$.", "diagram": null },
        { "stepNumber": 9, "description": "Interpret the result.", "workingLatex": "\\text{Area} = 2x^{2} + 11x + 12", "explanation": "This expression gives the area for any value of $x$; the leading coefficient $2$ comes from the $2x$ in the length.", "diagram": null },
        { "stepNumber": 10, "description": "Check with a value of $x$.", "workingLatex": "x=1:\\ (5)(5)=25,\\ \\ 2+11+12=25", "explanation": "At $x=1$ the rectangle is $5\\times5$, giving area $25$, which matches the expression.", "diagram": null },
        { "stepNumber": 11, "description": "State the final answer with units.", "workingLatex": "(2x^{2} + 11x + 12)\\ \\text{cm}^{2}", "explanation": "Area is measured in square centimetres, so the units are $\\text{cm}^{2}$.", "diagram": null },
        { "stepNumber": 12, "description": "Give the simplified expression.", "workingLatex": "2x^{2} + 11x + 12", "explanation": "This is the required expanded and simplified area expression.", "diagram": null },
        { "stepNumber": 13, "description": "Confirm the expansion is complete.", "workingLatex": "2x^{2} + 11x + 12", "explanation": "No like terms remain, so the expression is fully simplified.", "diagram": null }
      ],
      "finalAnswer": "$2x^{2} + 11x + 12$"
    }
  }
];
