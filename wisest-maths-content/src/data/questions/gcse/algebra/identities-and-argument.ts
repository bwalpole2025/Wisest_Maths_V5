import { Question } from "@/lib/types";

export const questions: Question[] = [
  {
    "id": "gcse.algebra.identities-proof.q001",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Identities and argument",
    "subtopicId": "gcse.algebra.identities-proof",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "proof",
    "tags": ["identity", "expanding brackets", "equivalence", "proof"],
    "questionText": "Show that $2(x+3) \\equiv 2x+6$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Understand what the identity symbol means.", "workingLatex": "2(x+3) \\equiv 2x+6", "explanation": "The symbol $\\equiv$ means 'is identically equal to' — the two sides must be equal for every value of $x$. To prove it, we expand one side and show it matches the other exactly.", "diagram": null },
        { "stepNumber": 2, "description": "Choose the side to work on.", "workingLatex": "2(x+3)", "explanation": "The left-hand side has a bracket, so it is the natural side to expand and simplify towards the right-hand side.", "diagram": null },
        { "stepNumber": 3, "description": "Multiply the bracket by the term outside for the first term.", "workingLatex": "2 \\times x = 2x", "explanation": "Every term inside the bracket must be multiplied by the $2$; here the $x$ gives $2x$.", "diagram": null },
        { "stepNumber": 4, "description": "Multiply the bracket by the term outside for the second term.", "workingLatex": "2 \\times 3 = 6", "explanation": "The constant $3$ inside the bracket multiplied by $2$ gives $6$.", "diagram": null },
        { "stepNumber": 5, "description": "Write the full expansion of the left-hand side.", "workingLatex": "2(x+3) = 2x+6", "explanation": "Adding the two products gives the expanded form of the left-hand side.", "diagram": null },
        { "stepNumber": 6, "description": "Compare with the right-hand side.", "workingLatex": "2x+6 = 2x+6", "explanation": "The expanded left-hand side is term-for-term identical to the right-hand side.", "diagram": null },
        { "stepNumber": 7, "description": "State the conclusion.", "workingLatex": "2(x+3) \\equiv 2x+6", "explanation": "Because the sides are equal for every $x$, the statement is a true identity.", "diagram": null }
      ],
      "finalAnswer": "$2(x+3) \\equiv 2x+6$ is a true identity."
    }
  },
  {
    "id": "gcse.algebra.identities-proof.q002",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Identities and argument",
    "subtopicId": "gcse.algebra.identities-proof",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "proof",
    "tags": ["identity", "expanding brackets", "equivalence", "proof"],
    "questionText": "Show that $3(x+2) \\equiv 3x+6$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall the meaning of the identity symbol.", "workingLatex": "3(x+2) \\equiv 3x+6", "explanation": "$\\equiv$ means the two sides are equal for all values of $x$; we prove this by expanding the left-hand side.", "diagram": null },
        { "stepNumber": 2, "description": "Focus on the left-hand side.", "workingLatex": "3(x+2)", "explanation": "This side contains the bracket, so expanding it lets us compare with the right-hand side.", "diagram": null },
        { "stepNumber": 3, "description": "Multiply the outside term by $x$.", "workingLatex": "3 \\times x = 3x", "explanation": "The $3$ multiplies the $x$ inside the bracket to give $3x$.", "diagram": null },
        { "stepNumber": 4, "description": "Multiply the outside term by $2$.", "workingLatex": "3 \\times 2 = 6", "explanation": "The $3$ multiplies the constant $2$ to give $6$.", "diagram": null },
        { "stepNumber": 5, "description": "Combine the products.", "workingLatex": "3(x+2) = 3x+6", "explanation": "Adding the two results gives the expanded left-hand side.", "diagram": null },
        { "stepNumber": 6, "description": "Compare both sides.", "workingLatex": "3x+6 = 3x+6", "explanation": "The expansion matches the right-hand side exactly.", "diagram": null },
        { "stepNumber": 7, "description": "Conclude.", "workingLatex": "3(x+2) \\equiv 3x+6", "explanation": "The two sides are equal for every $x$, so the identity is proved.", "diagram": null }
      ],
      "finalAnswer": "$3(x+2) \\equiv 3x+6$ is a true identity."
    }
  },
  {
    "id": "gcse.algebra.identities-proof.q003",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Identities and argument",
    "subtopicId": "gcse.algebra.identities-proof",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "proof",
    "tags": ["identity", "expanding brackets", "negative term", "proof"],
    "questionText": "Show that $5(x-1) \\equiv 5x-5$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Interpret the identity.", "workingLatex": "5(x-1) \\equiv 5x-5", "explanation": "We must show the two sides are equal for all $x$; expanding the bracket on the left will reveal this.", "diagram": null },
        { "stepNumber": 2, "description": "Take the left-hand side.", "workingLatex": "5(x-1)", "explanation": "The bracket on the left is what we expand.", "diagram": null },
        { "stepNumber": 3, "description": "Multiply $5$ by $x$.", "workingLatex": "5 \\times x = 5x", "explanation": "The first term inside the bracket gives $5x$.", "diagram": null },
        { "stepNumber": 4, "description": "Multiply $5$ by $-1$, keeping the sign.", "workingLatex": "5 \\times (-1) = -5", "explanation": "The minus sign belongs to the $1$, so $5$ times $-1$ is $-5$.", "diagram": null },
        { "stepNumber": 5, "description": "Write the expansion.", "workingLatex": "5(x-1) = 5x-5", "explanation": "Combining the products gives the expanded form.", "diagram": null },
        { "stepNumber": 6, "description": "Compare with the right-hand side.", "workingLatex": "5x-5 = 5x-5", "explanation": "The two sides are identical term by term.", "diagram": null },
        { "stepNumber": 7, "description": "State the result.", "workingLatex": "5(x-1) \\equiv 5x-5", "explanation": "Equality for every $x$ confirms the identity.", "diagram": null }
      ],
      "finalAnswer": "$5(x-1) \\equiv 5x-5$ is a true identity."
    }
  },
  {
    "id": "gcse.algebra.identities-proof.q004",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Identities and argument",
    "subtopicId": "gcse.algebra.identities-proof",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "proof",
    "tags": ["identity", "expanding brackets", "equivalence", "proof"],
    "questionText": "Show that $4(x+3) \\equiv 4x+12$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Read the identity.", "workingLatex": "4(x+3) \\equiv 4x+12", "explanation": "The $\\equiv$ sign asks us to show both sides agree for every value of $x$.", "diagram": null },
        { "stepNumber": 2, "description": "Choose the bracketed side.", "workingLatex": "4(x+3)", "explanation": "Expanding this side lets us test it against the right-hand side.", "diagram": null },
        { "stepNumber": 3, "description": "Multiply $4$ by $x$.", "workingLatex": "4 \\times x = 4x", "explanation": "The $x$ inside the bracket becomes $4x$.", "diagram": null },
        { "stepNumber": 4, "description": "Multiply $4$ by $3$.", "workingLatex": "4 \\times 3 = 12", "explanation": "The constant becomes $12$.", "diagram": null },
        { "stepNumber": 5, "description": "Write the expansion.", "workingLatex": "4(x+3) = 4x+12", "explanation": "The two products combine into the expanded expression.", "diagram": null },
        { "stepNumber": 6, "description": "Compare the two sides.", "workingLatex": "4x+12 = 4x+12", "explanation": "The expansion equals the right-hand side exactly.", "diagram": null },
        { "stepNumber": 7, "description": "Conclude.", "workingLatex": "4(x+3) \\equiv 4x+12", "explanation": "The identity holds for all $x$.", "diagram": null }
      ],
      "finalAnswer": "$4(x+3) \\equiv 4x+12$ is a true identity."
    }
  },
  {
    "id": "gcse.algebra.identities-proof.q005",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Identities and argument",
    "subtopicId": "gcse.algebra.identities-proof",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "proof",
    "tags": ["identity", "expanding brackets", "variable factor", "proof"],
    "questionText": "Show that $x(x+4) \\equiv x^{2}+4x$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Understand the identity.", "workingLatex": "x(x+4) \\equiv x^{2}+4x", "explanation": "We show the two sides are equal for all $x$ by expanding the product on the left.", "diagram": null },
        { "stepNumber": 2, "description": "Take the left-hand side.", "workingLatex": "x(x+4)", "explanation": "Here the term outside the bracket is $x$ itself, so each term inside is multiplied by $x$.", "diagram": null },
        { "stepNumber": 3, "description": "Multiply $x$ by $x$.", "workingLatex": "x \\times x = x^{2}", "explanation": "A variable multiplied by itself gives a squared term.", "diagram": null },
        { "stepNumber": 4, "description": "Multiply $x$ by $4$.", "workingLatex": "x \\times 4 = 4x", "explanation": "The constant $4$ multiplied by $x$ gives $4x$.", "diagram": null },
        { "stepNumber": 5, "description": "Write the expansion.", "workingLatex": "x(x+4) = x^{2}+4x", "explanation": "Adding the two products gives the expanded form.", "diagram": null },
        { "stepNumber": 6, "description": "Compare with the right-hand side.", "workingLatex": "x^{2}+4x = x^{2}+4x", "explanation": "The two sides match exactly.", "diagram": null },
        { "stepNumber": 7, "description": "Conclude.", "workingLatex": "x(x+4) \\equiv x^{2}+4x", "explanation": "The equality holds for every $x$, proving the identity.", "diagram": null }
      ],
      "finalAnswer": "$x(x+4) \\equiv x^{2}+4x$ is a true identity."
    }
  },
  {
    "id": "gcse.algebra.identities-proof.q006",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Identities and argument",
    "subtopicId": "gcse.algebra.identities-proof",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "proof",
    "tags": ["identity", "expanding brackets", "coefficient", "proof"],
    "questionText": "Show that $2(3x+1) \\equiv 6x+2$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "State the meaning of the identity.", "workingLatex": "2(3x+1) \\equiv 6x+2", "explanation": "We prove equality for all $x$ by expanding the left-hand side.", "diagram": null },
        { "stepNumber": 2, "description": "Focus on the bracket.", "workingLatex": "2(3x+1)", "explanation": "Each term inside is multiplied by the $2$ outside.", "diagram": null },
        { "stepNumber": 3, "description": "Multiply $2$ by $3x$.", "workingLatex": "2 \\times 3x = 6x", "explanation": "The number $2$ multiplies the coefficient $3$ to give $6$, keeping the $x$.", "diagram": null },
        { "stepNumber": 4, "description": "Multiply $2$ by $1$.", "workingLatex": "2 \\times 1 = 2", "explanation": "The constant term becomes $2$.", "diagram": null },
        { "stepNumber": 5, "description": "Write the expansion.", "workingLatex": "2(3x+1) = 6x+2", "explanation": "The two products give the expanded left-hand side.", "diagram": null },
        { "stepNumber": 6, "description": "Compare both sides.", "workingLatex": "6x+2 = 6x+2", "explanation": "The expansion is identical to the right-hand side.", "diagram": null },
        { "stepNumber": 7, "description": "Conclude.", "workingLatex": "2(3x+1) \\equiv 6x+2", "explanation": "The identity is true for all $x$.", "diagram": null }
      ],
      "finalAnswer": "$2(3x+1) \\equiv 6x+2$ is a true identity."
    }
  },
  {
    "id": "gcse.algebra.identities-proof.q007",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Identities and argument",
    "subtopicId": "gcse.algebra.identities-proof",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "proof",
    "tags": ["identity", "expanding brackets", "negative term", "proof"],
    "questionText": "Show that $7(x-2) \\equiv 7x-14$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Interpret the statement.", "workingLatex": "7(x-2) \\equiv 7x-14", "explanation": "We must show both sides are equal for all $x$ by expanding the bracket.", "diagram": null },
        { "stepNumber": 2, "description": "Take the left-hand side.", "workingLatex": "7(x-2)", "explanation": "Each term inside the bracket is multiplied by $7$.", "diagram": null },
        { "stepNumber": 3, "description": "Multiply $7$ by $x$.", "workingLatex": "7 \\times x = 7x", "explanation": "The $x$ term becomes $7x$.", "diagram": null },
        { "stepNumber": 4, "description": "Multiply $7$ by $-2$.", "workingLatex": "7 \\times (-2) = -14", "explanation": "Keeping the negative sign, $7$ times $-2$ gives $-14$.", "diagram": null },
        { "stepNumber": 5, "description": "Write the expansion.", "workingLatex": "7(x-2) = 7x-14", "explanation": "Combining the products gives the expanded expression.", "diagram": null },
        { "stepNumber": 6, "description": "Compare both sides.", "workingLatex": "7x-14 = 7x-14", "explanation": "The expansion matches the right-hand side.", "diagram": null },
        { "stepNumber": 7, "description": "Conclude.", "workingLatex": "7(x-2) \\equiv 7x-14", "explanation": "The identity holds for every $x$.", "diagram": null }
      ],
      "finalAnswer": "$7(x-2) \\equiv 7x-14$ is a true identity."
    }
  },
  {
    "id": "gcse.algebra.identities-proof.q008",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Identities and argument",
    "subtopicId": "gcse.algebra.identities-proof",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "proof",
    "tags": ["identity", "expanding brackets", "coefficient", "proof"],
    "questionText": "Show that $3(2x-5) \\equiv 6x-15$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Read the identity.", "workingLatex": "3(2x-5) \\equiv 6x-15", "explanation": "The $\\equiv$ sign requires the sides to be equal for all $x$; expand the left to check.", "diagram": null },
        { "stepNumber": 2, "description": "Focus on the bracketed expression.", "workingLatex": "3(2x-5)", "explanation": "Each term inside is multiplied by $3$.", "diagram": null },
        { "stepNumber": 3, "description": "Multiply $3$ by $2x$.", "workingLatex": "3 \\times 2x = 6x", "explanation": "The $3$ multiplies the coefficient $2$ to give $6x$.", "diagram": null },
        { "stepNumber": 4, "description": "Multiply $3$ by $-5$.", "workingLatex": "3 \\times (-5) = -15", "explanation": "Keeping the sign, this gives $-15$.", "diagram": null },
        { "stepNumber": 5, "description": "Write the expansion.", "workingLatex": "3(2x-5) = 6x-15", "explanation": "The two products form the expanded left-hand side.", "diagram": null },
        { "stepNumber": 6, "description": "Compare both sides.", "workingLatex": "6x-15 = 6x-15", "explanation": "The expansion equals the right-hand side.", "diagram": null },
        { "stepNumber": 7, "description": "Conclude.", "workingLatex": "3(2x-5) \\equiv 6x-15", "explanation": "The identity is proved for all $x$.", "diagram": null }
      ],
      "finalAnswer": "$3(2x-5) \\equiv 6x-15$ is a true identity."
    }
  },
  {
    "id": "gcse.algebra.identities-proof.q009",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Identities and argument",
    "subtopicId": "gcse.algebra.identities-proof",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "proof",
    "tags": ["identity", "expanding brackets", "variable factor", "proof"],
    "questionText": "Show that $x(x-3) \\equiv x^{2}-3x$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Understand the identity.", "workingLatex": "x(x-3) \\equiv x^{2}-3x", "explanation": "We expand the product on the left to show it equals the right for all $x$.", "diagram": null },
        { "stepNumber": 2, "description": "Take the left-hand side.", "workingLatex": "x(x-3)", "explanation": "The factor outside the bracket is $x$, so multiply each inside term by $x$.", "diagram": null },
        { "stepNumber": 3, "description": "Multiply $x$ by $x$.", "workingLatex": "x \\times x = x^{2}", "explanation": "Multiplying $x$ by itself gives the squared term.", "diagram": null },
        { "stepNumber": 4, "description": "Multiply $x$ by $-3$.", "workingLatex": "x \\times (-3) = -3x", "explanation": "Keeping the sign, the constant becomes $-3x$.", "diagram": null },
        { "stepNumber": 5, "description": "Write the expansion.", "workingLatex": "x(x-3) = x^{2}-3x", "explanation": "The two products give the expanded form.", "diagram": null },
        { "stepNumber": 6, "description": "Compare both sides.", "workingLatex": "x^{2}-3x = x^{2}-3x", "explanation": "The expansion matches the right-hand side exactly.", "diagram": null },
        { "stepNumber": 7, "description": "Conclude.", "workingLatex": "x(x-3) \\equiv x^{2}-3x", "explanation": "The identity holds for every $x$.", "diagram": null }
      ],
      "finalAnswer": "$x(x-3) \\equiv x^{2}-3x$ is a true identity."
    }
  },
  {
    "id": "gcse.algebra.identities-proof.q010",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Identities and argument",
    "subtopicId": "gcse.algebra.identities-proof",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "proof",
    "tags": ["identity", "expanding brackets", "equivalence", "proof"],
    "questionText": "Show that $6(x+2) \\equiv 6x+12$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall the identity symbol.", "workingLatex": "6(x+2) \\equiv 6x+12", "explanation": "$\\equiv$ means equal for all $x$; expand the left-hand side to prove it.", "diagram": null },
        { "stepNumber": 2, "description": "Take the bracketed side.", "workingLatex": "6(x+2)", "explanation": "Each term inside the bracket is multiplied by $6$.", "diagram": null },
        { "stepNumber": 3, "description": "Multiply $6$ by $x$.", "workingLatex": "6 \\times x = 6x", "explanation": "The $x$ term becomes $6x$.", "diagram": null },
        { "stepNumber": 4, "description": "Multiply $6$ by $2$.", "workingLatex": "6 \\times 2 = 12", "explanation": "The constant becomes $12$.", "diagram": null },
        { "stepNumber": 5, "description": "Write the expansion.", "workingLatex": "6(x+2) = 6x+12", "explanation": "Adding the products gives the expanded form.", "diagram": null },
        { "stepNumber": 6, "description": "Compare both sides.", "workingLatex": "6x+12 = 6x+12", "explanation": "The expansion equals the right-hand side.", "diagram": null },
        { "stepNumber": 7, "description": "Conclude.", "workingLatex": "6(x+2) \\equiv 6x+12", "explanation": "The identity holds for all $x$.", "diagram": null }
      ],
      "finalAnswer": "$6(x+2) \\equiv 6x+12$ is a true identity."
    }
  },
  {
    "id": "gcse.algebra.identities-proof.q011",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Identities and argument",
    "subtopicId": "gcse.algebra.identities-proof",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "text",
    "tags": ["identity", "counterexample", "equivalence", "reasoning"],
    "questionText": "Is $3(x+2) \\equiv 3x+5$ a true identity? Justify your answer.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall what an identity requires.", "workingLatex": "3(x+2) \\stackrel{?}{\\equiv} 3x+5", "explanation": "For an identity, the two sides must be equal for every value of $x$, not just some values.", "diagram": null },
        { "stepNumber": 2, "description": "Expand the left-hand side.", "workingLatex": "3(x+2) = 3x+6", "explanation": "Multiplying out gives $3\\times x = 3x$ and $3\\times 2 = 6$.", "diagram": null },
        { "stepNumber": 3, "description": "Compare the constant terms.", "workingLatex": "3x+6 \\;\\text{vs}\\; 3x+5", "explanation": "The $x$ terms match, but the constant on the left is $6$ while on the right it is $5$.", "diagram": null },
        { "stepNumber": 4, "description": "Test a value to confirm.", "workingLatex": "x=0:\\; 3(0+2)=6,\\quad 3(0)+5=5", "explanation": "Substituting $x=0$ gives $6$ on the left but $5$ on the right, so the sides disagree.", "diagram": null },
        { "stepNumber": 5, "description": "Interpret the mismatch.", "workingLatex": "6 \\ne 5", "explanation": "A single value where the sides differ is enough to show it is not an identity.", "diagram": null },
        { "stepNumber": 6, "description": "State the conclusion.", "workingLatex": "3(x+2) \\not\\equiv 3x+5", "explanation": "Because the sides are not equal for all $x$, this is not a true identity.", "diagram": null }
      ],
      "finalAnswer": "No — expanding gives $3x+6$, not $3x+5$, so it is not an identity."
    }
  },
  {
    "id": "gcse.algebra.identities-proof.q012",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Identities and argument",
    "subtopicId": "gcse.algebra.identities-proof",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "text",
    "tags": ["identity", "equivalence", "reasoning", "verify"],
    "questionText": "Is $4(x-1) \\equiv 4x-4$ a true identity? Justify your answer.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall the meaning of an identity.", "workingLatex": "4(x-1) \\stackrel{?}{\\equiv} 4x-4", "explanation": "The two sides must be equal for every value of $x$ for the statement to be an identity.", "diagram": null },
        { "stepNumber": 2, "description": "Expand the left-hand side.", "workingLatex": "4 \\times x = 4x", "explanation": "The first term inside the bracket multiplied by $4$ gives $4x$.", "diagram": null },
        { "stepNumber": 3, "description": "Multiply the second term.", "workingLatex": "4 \\times (-1) = -4", "explanation": "Keeping the sign, the constant becomes $-4$.", "diagram": null },
        { "stepNumber": 4, "description": "Write the full expansion.", "workingLatex": "4(x-1) = 4x-4", "explanation": "Combining the products gives the expanded left-hand side.", "diagram": null },
        { "stepNumber": 5, "description": "Compare with the right-hand side.", "workingLatex": "4x-4 = 4x-4", "explanation": "Every term matches the right-hand side exactly.", "diagram": null },
        { "stepNumber": 6, "description": "State the conclusion.", "workingLatex": "4(x-1) \\equiv 4x-4", "explanation": "Since the sides are equal for all $x$, this is a true identity.", "diagram": null }
      ],
      "finalAnswer": "Yes — expanding gives $4x-4$, matching the right-hand side, so it is an identity."
    }
  },
  {
    "id": "gcse.algebra.identities-proof.q013",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Identities and argument",
    "subtopicId": "gcse.algebra.identities-proof",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "proof",
    "tags": ["identity", "expanding brackets", "collecting terms", "proof"],
    "questionText": "Show that $2(x+1)+3 \\equiv 2x+5$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Interpret the identity.", "workingLatex": "2(x+1)+3 \\equiv 2x+5", "explanation": "We show the sides are equal for all $x$ by simplifying the left-hand side.", "diagram": null },
        { "stepNumber": 2, "description": "Take the left-hand side.", "workingLatex": "2(x+1)+3", "explanation": "There is a bracket to expand and then a constant to combine.", "diagram": null },
        { "stepNumber": 3, "description": "Multiply $2$ by $x$.", "workingLatex": "2 \\times x = 2x", "explanation": "The $x$ term becomes $2x$.", "diagram": null },
        { "stepNumber": 4, "description": "Multiply $2$ by $1$.", "workingLatex": "2 \\times 1 = 2", "explanation": "The constant inside the bracket becomes $2$.", "diagram": null },
        { "stepNumber": 5, "description": "Write the expression after expanding.", "workingLatex": "2x+2+3", "explanation": "The bracket has been expanded and the $+3$ carried across.", "diagram": null },
        { "stepNumber": 6, "description": "Collect the constant terms.", "workingLatex": "2x+5", "explanation": "The numbers $2$ and $3$ add to $5$.", "diagram": null },
        { "stepNumber": 7, "description": "Compare both sides.", "workingLatex": "2x+5 = 2x+5", "explanation": "The simplified left-hand side matches the right-hand side.", "diagram": null },
        { "stepNumber": 8, "description": "Conclude.", "workingLatex": "2(x+1)+3 \\equiv 2x+5", "explanation": "The identity holds for every $x$.", "diagram": null }
      ],
      "finalAnswer": "$2(x+1)+3 \\equiv 2x+5$ is a true identity."
    }
  },
  {
    "id": "gcse.algebra.identities-proof.q014",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Identities and argument",
    "subtopicId": "gcse.algebra.identities-proof",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "proof",
    "tags": ["identity", "collecting terms", "like terms", "proof"],
    "questionText": "Show that $5x+2x \\equiv 7x$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Understand the identity.", "workingLatex": "5x+2x \\equiv 7x", "explanation": "We show both sides are equal for all $x$ by collecting like terms on the left.", "diagram": null },
        { "stepNumber": 2, "description": "Identify the like terms.", "workingLatex": "5x \\;\\text{and}\\; 2x", "explanation": "Both terms contain the same variable $x$, so they are like terms and can be added.", "diagram": null },
        { "stepNumber": 3, "description": "Add the coefficients.", "workingLatex": "5+2 = 7", "explanation": "Adding like terms means adding their number parts while keeping the $x$.", "diagram": null },
        { "stepNumber": 4, "description": "Write the combined term.", "workingLatex": "5x+2x = 7x", "explanation": "The result of combining the two terms is $7x$.", "diagram": null },
        { "stepNumber": 5, "description": "Compare both sides.", "workingLatex": "7x = 7x", "explanation": "The simplified left-hand side equals the right-hand side.", "diagram": null },
        { "stepNumber": 6, "description": "Conclude.", "workingLatex": "5x+2x \\equiv 7x", "explanation": "The equality holds for all $x$, so this is an identity.", "diagram": null }
      ],
      "finalAnswer": "$5x+2x \\equiv 7x$ is a true identity."
    }
  },
  {
    "id": "gcse.algebra.identities-proof.q015",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Identities and argument",
    "subtopicId": "gcse.algebra.identities-proof",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "proof",
    "tags": ["identity", "collecting terms", "like terms", "proof"],
    "questionText": "Show that $4x-x \\equiv 3x$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Interpret the identity.", "workingLatex": "4x-x \\equiv 3x", "explanation": "We simplify the left-hand side by collecting like terms to show it equals $3x$ for all $x$.", "diagram": null },
        { "stepNumber": 2, "description": "Recognise $x$ as $1x$.", "workingLatex": "4x-1x", "explanation": "A lone $x$ has an unwritten coefficient of $1$, which helps when subtracting.", "diagram": null },
        { "stepNumber": 3, "description": "Subtract the coefficients.", "workingLatex": "4-1 = 3", "explanation": "Taking one lot of $x$ away from four lots leaves three lots.", "diagram": null },
        { "stepNumber": 4, "description": "Write the result.", "workingLatex": "4x-x = 3x", "explanation": "Combining the like terms gives $3x$.", "diagram": null },
        { "stepNumber": 5, "description": "Compare both sides.", "workingLatex": "3x = 3x", "explanation": "The left-hand side now matches the right-hand side.", "diagram": null },
        { "stepNumber": 6, "description": "Conclude.", "workingLatex": "4x-x \\equiv 3x", "explanation": "The identity holds for every $x$.", "diagram": null }
      ],
      "finalAnswer": "$4x-x \\equiv 3x$ is a true identity."
    }
  },
  {
    "id": "gcse.algebra.identities-proof.q016",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Identities and argument",
    "subtopicId": "gcse.algebra.identities-proof",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "proof",
    "tags": ["identity", "expanding brackets", "collecting terms", "proof"],
    "questionText": "Show that $2(x+4)-3 \\equiv 2x+5$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Interpret the identity.", "workingLatex": "2(x+4)-3 \\equiv 2x+5", "explanation": "We expand and simplify the left-hand side to show it equals the right for all $x$.", "diagram": null },
        { "stepNumber": 2, "description": "Take the left-hand side.", "workingLatex": "2(x+4)-3", "explanation": "Expand the bracket first, then combine the constant.", "diagram": null },
        { "stepNumber": 3, "description": "Multiply $2$ by $x$.", "workingLatex": "2 \\times x = 2x", "explanation": "The $x$ term becomes $2x$.", "diagram": null },
        { "stepNumber": 4, "description": "Multiply $2$ by $4$.", "workingLatex": "2 \\times 4 = 8", "explanation": "The constant inside the bracket becomes $8$.", "diagram": null },
        { "stepNumber": 5, "description": "Write the expression after expanding.", "workingLatex": "2x+8-3", "explanation": "The expanded bracket is followed by the $-3$.", "diagram": null },
        { "stepNumber": 6, "description": "Combine the constants.", "workingLatex": "2x+5", "explanation": "Since $8-3=5$, the constant term is $5$.", "diagram": null },
        { "stepNumber": 7, "description": "Compare both sides.", "workingLatex": "2x+5 = 2x+5", "explanation": "The simplified left-hand side matches the right-hand side.", "diagram": null },
        { "stepNumber": 8, "description": "Conclude.", "workingLatex": "2(x+4)-3 \\equiv 2x+5", "explanation": "The identity holds for all $x$.", "diagram": null }
      ],
      "finalAnswer": "$2(x+4)-3 \\equiv 2x+5$ is a true identity."
    }
  },
  {
    "id": "gcse.algebra.identities-proof.q017",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Identities and argument",
    "subtopicId": "gcse.algebra.identities-proof",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "proof",
    "tags": ["identity", "expanding brackets", "collecting terms", "proof"],
    "questionText": "Show that $3(x+1)+2(x+2) \\equiv 5x+7$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Interpret the identity.", "workingLatex": "3(x+1)+2(x+2) \\equiv 5x+7", "explanation": "We expand both brackets and collect like terms to match the right-hand side.", "diagram": null },
        { "stepNumber": 2, "description": "Expand the first bracket.", "workingLatex": "3(x+1) = 3x+3", "explanation": "Multiplying $3$ by each term gives $3x$ and $3$.", "diagram": null },
        { "stepNumber": 3, "description": "Expand the second bracket.", "workingLatex": "2(x+2) = 2x+4", "explanation": "Multiplying $2$ by each term gives $2x$ and $4$.", "diagram": null },
        { "stepNumber": 4, "description": "Write out all four terms.", "workingLatex": "3x+3+2x+4", "explanation": "Putting both expansions together keeps every term visible before collecting.", "diagram": null },
        { "stepNumber": 5, "description": "Collect the $x$ terms.", "workingLatex": "3x+2x = 5x", "explanation": "The like terms $3x$ and $2x$ add to $5x$.", "diagram": null },
        { "stepNumber": 6, "description": "Collect the constants.", "workingLatex": "3+4 = 7", "explanation": "The numbers $3$ and $4$ add to $7$.", "diagram": null },
        { "stepNumber": 7, "description": "Write the simplified expression.", "workingLatex": "5x+7", "explanation": "Combining the results gives $5x+7$.", "diagram": null },
        { "stepNumber": 8, "description": "Compare and conclude.", "workingLatex": "3(x+1)+2(x+2) \\equiv 5x+7", "explanation": "The simplified left-hand side equals the right-hand side, so the identity is proved.", "diagram": null }
      ],
      "finalAnswer": "$3(x+1)+2(x+2) \\equiv 5x+7$ is a true identity."
    }
  },
  {
    "id": "gcse.algebra.identities-proof.q018",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Identities and argument",
    "subtopicId": "gcse.algebra.identities-proof",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "proof",
    "tags": ["identity", "expanding brackets", "variable factor", "proof"],
    "questionText": "Show that $2x(x+3) \\equiv 2x^{2}+6x$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Understand the identity.", "workingLatex": "2x(x+3) \\equiv 2x^{2}+6x", "explanation": "We expand the product on the left to show it equals the right for all $x$.", "diagram": null },
        { "stepNumber": 2, "description": "Take the left-hand side.", "workingLatex": "2x(x+3)", "explanation": "The factor outside the bracket is $2x$, so multiply each inside term by $2x$.", "diagram": null },
        { "stepNumber": 3, "description": "Multiply $2x$ by $x$.", "workingLatex": "2x \\times x = 2x^{2}", "explanation": "Multiplying the numbers gives $2$ and multiplying $x$ by $x$ gives $x^{2}$.", "diagram": null },
        { "stepNumber": 4, "description": "Multiply $2x$ by $3$.", "workingLatex": "2x \\times 3 = 6x", "explanation": "The $2x$ times the constant $3$ gives $6x$.", "diagram": null },
        { "stepNumber": 5, "description": "Write the expansion.", "workingLatex": "2x(x+3) = 2x^{2}+6x", "explanation": "The two products form the expanded expression.", "diagram": null },
        { "stepNumber": 6, "description": "Compare both sides.", "workingLatex": "2x^{2}+6x = 2x^{2}+6x", "explanation": "The expansion matches the right-hand side exactly.", "diagram": null },
        { "stepNumber": 7, "description": "Conclude.", "workingLatex": "2x(x+3) \\equiv 2x^{2}+6x", "explanation": "The identity holds for all $x$.", "diagram": null }
      ],
      "finalAnswer": "$2x(x+3) \\equiv 2x^{2}+6x$ is a true identity."
    }
  },
  {
    "id": "gcse.algebra.identities-proof.q019",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Identities and argument",
    "subtopicId": "gcse.algebra.identities-proof",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "text",
    "tags": ["identity", "counterexample", "reasoning", "verify"],
    "questionText": "Is $2(x+3) \\equiv 2x+3$ a true identity? Justify your answer.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall the requirement for an identity.", "workingLatex": "2(x+3) \\stackrel{?}{\\equiv} 2x+3", "explanation": "An identity must be true for every value of $x$.", "diagram": null },
        { "stepNumber": 2, "description": "Expand the left-hand side.", "workingLatex": "2(x+3) = 2x+6", "explanation": "Multiplying out gives $2x$ and $6$.", "diagram": null },
        { "stepNumber": 3, "description": "Compare the constant terms.", "workingLatex": "2x+6 \\;\\text{vs}\\; 2x+3", "explanation": "The $x$ terms agree, but the constants $6$ and $3$ differ.", "diagram": null },
        { "stepNumber": 4, "description": "Test a value.", "workingLatex": "x=1:\\; 2(1+3)=8,\\quad 2(1)+3=5", "explanation": "At $x=1$ the left gives $8$ and the right gives $5$, so the sides disagree.", "diagram": null },
        { "stepNumber": 5, "description": "Interpret the result.", "workingLatex": "8 \\ne 5", "explanation": "One value where the sides differ is enough to rule out an identity.", "diagram": null },
        { "stepNumber": 6, "description": "Conclude.", "workingLatex": "2(x+3) \\not\\equiv 2x+3", "explanation": "Because the sides are not equal for all $x$, it is not an identity.", "diagram": null }
      ],
      "finalAnswer": "No — expanding gives $2x+6$, not $2x+3$, so it is not an identity."
    }
  },
  {
    "id": "gcse.algebra.identities-proof.q020",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Identities and argument",
    "subtopicId": "gcse.algebra.identities-proof",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "proof",
    "tags": ["identity", "expanding brackets", "negative term", "proof"],
    "questionText": "Show that $10(x-2) \\equiv 10x-20$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Interpret the identity.", "workingLatex": "10(x-2) \\equiv 10x-20", "explanation": "We expand the bracket to show the sides are equal for all $x$.", "diagram": null },
        { "stepNumber": 2, "description": "Take the left-hand side.", "workingLatex": "10(x-2)", "explanation": "Each term inside is multiplied by $10$.", "diagram": null },
        { "stepNumber": 3, "description": "Multiply $10$ by $x$.", "workingLatex": "10 \\times x = 10x", "explanation": "The $x$ term becomes $10x$.", "diagram": null },
        { "stepNumber": 4, "description": "Multiply $10$ by $-2$.", "workingLatex": "10 \\times (-2) = -20", "explanation": "Keeping the sign, the constant becomes $-20$.", "diagram": null },
        { "stepNumber": 5, "description": "Write the expansion.", "workingLatex": "10(x-2) = 10x-20", "explanation": "The two products give the expanded form.", "diagram": null },
        { "stepNumber": 6, "description": "Compare both sides.", "workingLatex": "10x-20 = 10x-20", "explanation": "The expansion equals the right-hand side.", "diagram": null },
        { "stepNumber": 7, "description": "Conclude.", "workingLatex": "10(x-2) \\equiv 10x-20", "explanation": "The identity holds for all $x$.", "diagram": null }
      ],
      "finalAnswer": "$10(x-2) \\equiv 10x-20$ is a true identity."
    }
  },
  {
    "id": "gcse.algebra.identities-proof.q021",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Identities and argument",
    "subtopicId": "gcse.algebra.identities-proof",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "proof",
    "tags": ["identity", "expanding brackets", "coefficient", "proof"],
    "questionText": "Show that $3(2x+4) \\equiv 6x+12$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Interpret the identity.", "workingLatex": "3(2x+4) \\equiv 6x+12", "explanation": "We expand the left-hand side to show the sides are equal for all $x$.", "diagram": null },
        { "stepNumber": 2, "description": "Take the bracket.", "workingLatex": "3(2x+4)", "explanation": "Each term inside is multiplied by $3$.", "diagram": null },
        { "stepNumber": 3, "description": "Multiply $3$ by $2x$.", "workingLatex": "3 \\times 2x = 6x", "explanation": "The $3$ multiplies the coefficient $2$ to give $6x$.", "diagram": null },
        { "stepNumber": 4, "description": "Multiply $3$ by $4$.", "workingLatex": "3 \\times 4 = 12", "explanation": "The constant becomes $12$.", "diagram": null },
        { "stepNumber": 5, "description": "Write the expansion.", "workingLatex": "3(2x+4) = 6x+12", "explanation": "The products give the expanded expression.", "diagram": null },
        { "stepNumber": 6, "description": "Compare both sides.", "workingLatex": "6x+12 = 6x+12", "explanation": "The expansion matches the right-hand side.", "diagram": null },
        { "stepNumber": 7, "description": "Conclude.", "workingLatex": "3(2x+4) \\equiv 6x+12", "explanation": "The identity holds for all $x$.", "diagram": null }
      ],
      "finalAnswer": "$3(2x+4) \\equiv 6x+12$ is a true identity."
    }
  },
  {
    "id": "gcse.algebra.identities-proof.q022",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Identities and argument",
    "subtopicId": "gcse.algebra.identities-proof",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "proof",
    "tags": ["identity", "expanding brackets", "collecting terms", "proof"],
    "questionText": "Show that $4(x+2)+2(x-1) \\equiv 6x+6$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Interpret the identity.", "workingLatex": "4(x+2)+2(x-1) \\equiv 6x+6", "explanation": "We expand both brackets and collect like terms to reach the right-hand side.", "diagram": null },
        { "stepNumber": 2, "description": "Expand the first bracket.", "workingLatex": "4(x+2) = 4x+8", "explanation": "Multiplying $4$ by each term gives $4x$ and $8$.", "diagram": null },
        { "stepNumber": 3, "description": "Expand the second bracket.", "workingLatex": "2(x-1) = 2x-2", "explanation": "Multiplying $2$ by each term gives $2x$ and $-2$.", "diagram": null },
        { "stepNumber": 4, "description": "Write out all terms.", "workingLatex": "4x+8+2x-2", "explanation": "Both expansions are placed together ready to collect.", "diagram": null },
        { "stepNumber": 5, "description": "Collect the $x$ terms.", "workingLatex": "4x+2x = 6x", "explanation": "The like terms $4x$ and $2x$ add to $6x$.", "diagram": null },
        { "stepNumber": 6, "description": "Collect the constants.", "workingLatex": "8-2 = 6", "explanation": "The numbers $8$ and $-2$ combine to $6$.", "diagram": null },
        { "stepNumber": 7, "description": "Write the simplified expression.", "workingLatex": "6x+6", "explanation": "Combining the results gives $6x+6$.", "diagram": null },
        { "stepNumber": 8, "description": "Compare and conclude.", "workingLatex": "4(x+2)+2(x-1) \\equiv 6x+6", "explanation": "The simplified left-hand side equals the right-hand side, proving the identity.", "diagram": null }
      ],
      "finalAnswer": "$4(x+2)+2(x-1) \\equiv 6x+6$ is a true identity."
    }
  },
  {
    "id": "gcse.algebra.identities-proof.q023",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Identities and argument",
    "subtopicId": "gcse.algebra.identities-proof",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "proof",
    "tags": ["identity", "expanding brackets", "collecting terms", "proof"],
    "questionText": "Show that $x(x+1)+x \\equiv x^{2}+2x$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Interpret the identity.", "workingLatex": "x(x+1)+x \\equiv x^{2}+2x", "explanation": "We expand the product and combine like terms to reach the right-hand side.", "diagram": null },
        { "stepNumber": 2, "description": "Expand the product.", "workingLatex": "x(x+1) = x^{2}+x", "explanation": "Multiplying $x$ by each term gives $x^{2}$ and $x$.", "diagram": null },
        { "stepNumber": 3, "description": "Add the trailing term.", "workingLatex": "x^{2}+x+x", "explanation": "The extra $+x$ from the original expression is written after the expansion.", "diagram": null },
        { "stepNumber": 4, "description": "Collect the $x$ terms.", "workingLatex": "x+x = 2x", "explanation": "The two single $x$ terms add to $2x$.", "diagram": null },
        { "stepNumber": 5, "description": "Write the simplified expression.", "workingLatex": "x^{2}+2x", "explanation": "The squared term stays and the like terms combine to $2x$.", "diagram": null },
        { "stepNumber": 6, "description": "Compare both sides.", "workingLatex": "x^{2}+2x = x^{2}+2x", "explanation": "The left-hand side now matches the right-hand side.", "diagram": null },
        { "stepNumber": 7, "description": "Conclude.", "workingLatex": "x(x+1)+x \\equiv x^{2}+2x", "explanation": "The identity holds for all $x$.", "diagram": null }
      ],
      "finalAnswer": "$x(x+1)+x \\equiv x^{2}+2x$ is a true identity."
    }
  },
  {
    "id": "gcse.algebra.identities-proof.q024",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Identities and argument",
    "subtopicId": "gcse.algebra.identities-proof",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "proof",
    "tags": ["identity", "expanding brackets", "collecting terms", "proof"],
    "questionText": "Show that $5(x+3)-2(x+1) \\equiv 3x+13$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Interpret the identity.", "workingLatex": "5(x+3)-2(x+1) \\equiv 3x+13", "explanation": "We expand both brackets, taking care with the subtraction, then collect like terms.", "diagram": null },
        { "stepNumber": 2, "description": "Expand the first bracket.", "workingLatex": "5(x+3) = 5x+15", "explanation": "Multiplying $5$ by each term gives $5x$ and $15$.", "diagram": null },
        { "stepNumber": 3, "description": "Expand the second bracket with its sign.", "workingLatex": "-2(x+1) = -2x-2", "explanation": "The $-2$ multiplies both terms, so both results are negative.", "diagram": null },
        { "stepNumber": 4, "description": "Write out all terms.", "workingLatex": "5x+15-2x-2", "explanation": "Both expansions are combined, keeping every sign correct.", "diagram": null },
        { "stepNumber": 5, "description": "Collect the $x$ terms.", "workingLatex": "5x-2x = 3x", "explanation": "The like terms $5x$ and $-2x$ combine to $3x$.", "diagram": null },
        { "stepNumber": 6, "description": "Collect the constants.", "workingLatex": "15-2 = 13", "explanation": "The numbers $15$ and $-2$ combine to $13$.", "diagram": null },
        { "stepNumber": 7, "description": "Write the simplified expression.", "workingLatex": "3x+13", "explanation": "Combining the results gives $3x+13$.", "diagram": null },
        { "stepNumber": 8, "description": "Compare and conclude.", "workingLatex": "5(x+3)-2(x+1) \\equiv 3x+13", "explanation": "The simplified left-hand side equals the right-hand side, so the identity is proved.", "diagram": null }
      ],
      "finalAnswer": "$5(x+3)-2(x+1) \\equiv 3x+13$ is a true identity."
    }
  },
  {
    "id": "gcse.algebra.identities-proof.q025",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Identities and argument",
    "subtopicId": "gcse.algebra.identities-proof",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "proof",
    "tags": ["identity", "expanding binomials", "FOIL", "proof"],
    "questionText": "Prove that $(x+2)(x+3) \\equiv x^{2}+5x+6$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "State the plan.", "workingLatex": "(x+2)(x+3) \\equiv x^{2}+5x+6", "explanation": "To prove an identity we expand the left-hand side and show it simplifies exactly to the right-hand side for all $x$.", "diagram": null },
        { "stepNumber": 2, "description": "Take the left-hand side.", "workingLatex": "(x+2)(x+3)", "explanation": "Every term in the first bracket must multiply every term in the second; FOIL keeps track of all four products.", "diagram": null },
        { "stepNumber": 3, "description": "Multiply the First terms.", "workingLatex": "x \\times x = x^{2}", "explanation": "The leading terms produce the squared term.", "diagram": null },
        { "stepNumber": 4, "description": "Multiply the Outer terms.", "workingLatex": "x \\times 3 = 3x", "explanation": "The outer pair gives one middle term.", "diagram": null },
        { "stepNumber": 5, "description": "Multiply the Inner terms.", "workingLatex": "2 \\times x = 2x", "explanation": "The inner pair gives the other middle term.", "diagram": null },
        { "stepNumber": 6, "description": "Multiply the Last terms.", "workingLatex": "2 \\times 3 = 6", "explanation": "The constants multiply to give the final number.", "diagram": null },
        { "stepNumber": 7, "description": "Add the four products.", "workingLatex": "x^{2}+3x+2x+6", "explanation": "Laying out all products keeps every contribution visible.", "diagram": null },
        { "stepNumber": 8, "description": "Collect the middle terms.", "workingLatex": "x^{2}+5x+6", "explanation": "The like terms $3x$ and $2x$ combine to $5x$.", "diagram": null },
        { "stepNumber": 9, "description": "Compare both sides.", "workingLatex": "x^{2}+5x+6 = x^{2}+5x+6", "explanation": "The expanded left-hand side is identical to the right-hand side.", "diagram": null },
        { "stepNumber": 10, "description": "Conclude.", "workingLatex": "(x+2)(x+3) \\equiv x^{2}+5x+6", "explanation": "Since the sides agree for all $x$, the identity is proved.", "diagram": null }
      ],
      "finalAnswer": "$(x+2)(x+3) \\equiv x^{2}+5x+6$ is proved."
    }
  },
  {
    "id": "gcse.algebra.identities-proof.q026",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Identities and argument",
    "subtopicId": "gcse.algebra.identities-proof",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "proof",
    "tags": ["identity", "expanding binomials", "FOIL", "proof"],
    "questionText": "Prove that $(x+1)(x+4) \\equiv x^{2}+5x+4$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "State the plan.", "workingLatex": "(x+1)(x+4) \\equiv x^{2}+5x+4", "explanation": "We expand the left-hand side and simplify to match the right-hand side for all $x$.", "diagram": null },
        { "stepNumber": 2, "description": "Take the left-hand side.", "workingLatex": "(x+1)(x+4)", "explanation": "Use FOIL to capture all four products.", "diagram": null },
        { "stepNumber": 3, "description": "First terms.", "workingLatex": "x \\times x = x^{2}", "explanation": "The leading terms give the squared term.", "diagram": null },
        { "stepNumber": 4, "description": "Outer terms.", "workingLatex": "x \\times 4 = 4x", "explanation": "The outer pair gives $4x$.", "diagram": null },
        { "stepNumber": 5, "description": "Inner terms.", "workingLatex": "1 \\times x = x", "explanation": "The inner pair gives $x$.", "diagram": null },
        { "stepNumber": 6, "description": "Last terms.", "workingLatex": "1 \\times 4 = 4", "explanation": "The constants give $4$.", "diagram": null },
        { "stepNumber": 7, "description": "Add the four products.", "workingLatex": "x^{2}+4x+x+4", "explanation": "All products are laid out ready to collect.", "diagram": null },
        { "stepNumber": 8, "description": "Collect the middle terms.", "workingLatex": "x^{2}+5x+4", "explanation": "The like terms $4x$ and $x$ add to $5x$.", "diagram": null },
        { "stepNumber": 9, "description": "Compare both sides.", "workingLatex": "x^{2}+5x+4 = x^{2}+5x+4", "explanation": "The expansion matches the right-hand side exactly.", "diagram": null },
        { "stepNumber": 10, "description": "Conclude.", "workingLatex": "(x+1)(x+4) \\equiv x^{2}+5x+4", "explanation": "The identity holds for all $x$.", "diagram": null }
      ],
      "finalAnswer": "$(x+1)(x+4) \\equiv x^{2}+5x+4$ is proved."
    }
  },
  {
    "id": "gcse.algebra.identities-proof.q027",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Identities and argument",
    "subtopicId": "gcse.algebra.identities-proof",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "proof",
    "tags": ["identity", "expanding binomials", "negative term", "proof"],
    "questionText": "Prove that $(x+5)(x-2) \\equiv x^{2}+3x-10$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "State the plan.", "workingLatex": "(x+5)(x-2) \\equiv x^{2}+3x-10", "explanation": "We expand the left-hand side carefully with signs and simplify to the right-hand side.", "diagram": null },
        { "stepNumber": 2, "description": "Take the left-hand side.", "workingLatex": "(x+5)(x-2)", "explanation": "Use FOIL, keeping the $-2$ negative throughout.", "diagram": null },
        { "stepNumber": 3, "description": "First terms.", "workingLatex": "x \\times x = x^{2}", "explanation": "The leading terms give the squared term.", "diagram": null },
        { "stepNumber": 4, "description": "Outer terms.", "workingLatex": "x \\times (-2) = -2x", "explanation": "The outer pair, including the minus sign, gives $-2x$.", "diagram": null },
        { "stepNumber": 5, "description": "Inner terms.", "workingLatex": "5 \\times x = 5x", "explanation": "The inner pair gives $5x$.", "diagram": null },
        { "stepNumber": 6, "description": "Last terms.", "workingLatex": "5 \\times (-2) = -10", "explanation": "The constants give $-10$.", "diagram": null },
        { "stepNumber": 7, "description": "Add the four products.", "workingLatex": "x^{2}-2x+5x-10", "explanation": "All four products are written with their correct signs.", "diagram": null },
        { "stepNumber": 8, "description": "Collect the middle terms.", "workingLatex": "x^{2}+3x-10", "explanation": "The like terms $-2x$ and $5x$ combine to $+3x$.", "diagram": null },
        { "stepNumber": 9, "description": "Compare both sides.", "workingLatex": "x^{2}+3x-10 = x^{2}+3x-10", "explanation": "The expansion equals the right-hand side.", "diagram": null },
        { "stepNumber": 10, "description": "Conclude.", "workingLatex": "(x+5)(x-2) \\equiv x^{2}+3x-10", "explanation": "The identity holds for all $x$.", "diagram": null }
      ],
      "finalAnswer": "$(x+5)(x-2) \\equiv x^{2}+3x-10$ is proved."
    }
  },
  {
    "id": "gcse.algebra.identities-proof.q028",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Identities and argument",
    "subtopicId": "gcse.algebra.identities-proof",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "proof",
    "tags": ["identity", "expanding binomials", "negative term", "proof"],
    "questionText": "Prove that $(x-3)(x-4) \\equiv x^{2}-7x+12$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "State the plan.", "workingLatex": "(x-3)(x-4) \\equiv x^{2}-7x+12", "explanation": "We expand the left-hand side, watching the signs, and simplify.", "diagram": null },
        { "stepNumber": 2, "description": "Take the left-hand side.", "workingLatex": "(x-3)(x-4)", "explanation": "Both constants are negative, so several products will be positive.", "diagram": null },
        { "stepNumber": 3, "description": "First terms.", "workingLatex": "x \\times x = x^{2}", "explanation": "The leading terms give $x^{2}$.", "diagram": null },
        { "stepNumber": 4, "description": "Outer terms.", "workingLatex": "x \\times (-4) = -4x", "explanation": "The outer pair gives $-4x$.", "diagram": null },
        { "stepNumber": 5, "description": "Inner terms.", "workingLatex": "-3 \\times x = -3x", "explanation": "The inner pair gives $-3x$.", "diagram": null },
        { "stepNumber": 6, "description": "Last terms.", "workingLatex": "-3 \\times (-4) = 12", "explanation": "A negative times a negative gives the positive constant $12$.", "diagram": null },
        { "stepNumber": 7, "description": "Add the four products.", "workingLatex": "x^{2}-4x-3x+12", "explanation": "All four products are laid out with correct signs.", "diagram": null },
        { "stepNumber": 8, "description": "Collect the middle terms.", "workingLatex": "x^{2}-7x+12", "explanation": "The like terms $-4x$ and $-3x$ combine to $-7x$.", "diagram": null },
        { "stepNumber": 9, "description": "Compare both sides.", "workingLatex": "x^{2}-7x+12 = x^{2}-7x+12", "explanation": "The expansion matches the right-hand side.", "diagram": null },
        { "stepNumber": 10, "description": "Conclude.", "workingLatex": "(x-3)(x-4) \\equiv x^{2}-7x+12", "explanation": "The identity holds for all $x$.", "diagram": null }
      ],
      "finalAnswer": "$(x-3)(x-4) \\equiv x^{2}-7x+12$ is proved."
    }
  },
  {
    "id": "gcse.algebra.identities-proof.q029",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Identities and argument",
    "subtopicId": "gcse.algebra.identities-proof",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "proof",
    "tags": ["identity", "expanding binomials", "coefficient", "proof"],
    "questionText": "Prove that $(2x+1)(x+3) \\equiv 2x^{2}+7x+3$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "State the plan.", "workingLatex": "(2x+1)(x+3) \\equiv 2x^{2}+7x+3", "explanation": "We expand the left-hand side; note the leading coefficient $2$ affects the products.", "diagram": null },
        { "stepNumber": 2, "description": "Take the left-hand side.", "workingLatex": "(2x+1)(x+3)", "explanation": "Use FOIL, being careful with the coefficient of the first term.", "diagram": null },
        { "stepNumber": 3, "description": "First terms.", "workingLatex": "2x \\times x = 2x^{2}", "explanation": "Multiplying $2x$ by $x$ gives $2x^{2}$.", "diagram": null },
        { "stepNumber": 4, "description": "Outer terms.", "workingLatex": "2x \\times 3 = 6x", "explanation": "The outer pair gives $6x$.", "diagram": null },
        { "stepNumber": 5, "description": "Inner terms.", "workingLatex": "1 \\times x = x", "explanation": "The inner pair gives $x$.", "diagram": null },
        { "stepNumber": 6, "description": "Last terms.", "workingLatex": "1 \\times 3 = 3", "explanation": "The constants give $3$.", "diagram": null },
        { "stepNumber": 7, "description": "Add the four products.", "workingLatex": "2x^{2}+6x+x+3", "explanation": "All products are written out ready to collect.", "diagram": null },
        { "stepNumber": 8, "description": "Collect the middle terms.", "workingLatex": "2x^{2}+7x+3", "explanation": "The like terms $6x$ and $x$ combine to $7x$.", "diagram": null },
        { "stepNumber": 9, "description": "Compare both sides.", "workingLatex": "2x^{2}+7x+3 = 2x^{2}+7x+3", "explanation": "The expansion matches the right-hand side exactly.", "diagram": null },
        { "stepNumber": 10, "description": "Conclude.", "workingLatex": "(2x+1)(x+3) \\equiv 2x^{2}+7x+3", "explanation": "The identity holds for all $x$.", "diagram": null }
      ],
      "finalAnswer": "$(2x+1)(x+3) \\equiv 2x^{2}+7x+3$ is proved."
    }
  },
  {
    "id": "gcse.algebra.identities-proof.q030",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Identities and argument",
    "subtopicId": "gcse.algebra.identities-proof",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "proof",
    "tags": ["identity", "perfect square", "expanding binomials", "proof"],
    "questionText": "Prove that $(x+3)^{2} \\equiv x^{2}+6x+9$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "State the plan.", "workingLatex": "(x+3)^{2} \\equiv x^{2}+6x+9", "explanation": "A square means the bracket times itself, so we expand $(x+3)(x+3)$.", "diagram": null },
        { "stepNumber": 2, "description": "Rewrite the square as a product.", "workingLatex": "(x+3)^{2} = (x+3)(x+3)", "explanation": "Squaring a bracket is the same as multiplying it by itself.", "diagram": null },
        { "stepNumber": 3, "description": "First terms.", "workingLatex": "x \\times x = x^{2}", "explanation": "The leading terms give $x^{2}$.", "diagram": null },
        { "stepNumber": 4, "description": "Outer terms.", "workingLatex": "x \\times 3 = 3x", "explanation": "The outer pair gives $3x$.", "diagram": null },
        { "stepNumber": 5, "description": "Inner terms.", "workingLatex": "3 \\times x = 3x", "explanation": "The inner pair also gives $3x$.", "diagram": null },
        { "stepNumber": 6, "description": "Last terms.", "workingLatex": "3 \\times 3 = 9", "explanation": "The constants give $9$.", "diagram": null },
        { "stepNumber": 7, "description": "Add the four products.", "workingLatex": "x^{2}+3x+3x+9", "explanation": "The two identical middle terms will double.", "diagram": null },
        { "stepNumber": 8, "description": "Collect the middle terms.", "workingLatex": "x^{2}+6x+9", "explanation": "The two $3x$ terms add to $6x$; notice $6$ is twice the $3$ in the bracket.", "diagram": null },
        { "stepNumber": 9, "description": "Compare both sides.", "workingLatex": "x^{2}+6x+9 = x^{2}+6x+9", "explanation": "The expansion matches the right-hand side.", "diagram": null },
        { "stepNumber": 10, "description": "Conclude.", "workingLatex": "(x+3)^{2} \\equiv x^{2}+6x+9", "explanation": "The identity holds for all $x$.", "diagram": null }
      ],
      "finalAnswer": "$(x+3)^{2} \\equiv x^{2}+6x+9$ is proved."
    }
  },
  {
    "id": "gcse.algebra.identities-proof.q031",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Identities and argument",
    "subtopicId": "gcse.algebra.identities-proof",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "proof",
    "tags": ["identity", "perfect square", "negative term", "proof"],
    "questionText": "Prove that $(x-5)^{2} \\equiv x^{2}-10x+25$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "State the plan.", "workingLatex": "(x-5)^{2} \\equiv x^{2}-10x+25", "explanation": "We expand $(x-5)(x-5)$, keeping the negative sign throughout.", "diagram": null },
        { "stepNumber": 2, "description": "Rewrite the square as a product.", "workingLatex": "(x-5)^{2} = (x-5)(x-5)", "explanation": "Squaring means multiplying the bracket by itself.", "diagram": null },
        { "stepNumber": 3, "description": "First terms.", "workingLatex": "x \\times x = x^{2}", "explanation": "The leading terms give $x^{2}$.", "diagram": null },
        { "stepNumber": 4, "description": "Outer terms.", "workingLatex": "x \\times (-5) = -5x", "explanation": "The outer pair gives $-5x$.", "diagram": null },
        { "stepNumber": 5, "description": "Inner terms.", "workingLatex": "-5 \\times x = -5x", "explanation": "The inner pair also gives $-5x$.", "diagram": null },
        { "stepNumber": 6, "description": "Last terms.", "workingLatex": "-5 \\times (-5) = 25", "explanation": "A negative times a negative gives $+25$.", "diagram": null },
        { "stepNumber": 7, "description": "Add the four products.", "workingLatex": "x^{2}-5x-5x+25", "explanation": "The two identical middle terms are both negative.", "diagram": null },
        { "stepNumber": 8, "description": "Collect the middle terms.", "workingLatex": "x^{2}-10x+25", "explanation": "The two $-5x$ terms add to $-10x$.", "diagram": null },
        { "stepNumber": 9, "description": "Compare both sides.", "workingLatex": "x^{2}-10x+25 = x^{2}-10x+25", "explanation": "The expansion matches the right-hand side.", "diagram": null },
        { "stepNumber": 10, "description": "Conclude.", "workingLatex": "(x-5)^{2} \\equiv x^{2}-10x+25", "explanation": "The identity holds for all $x$.", "diagram": null }
      ],
      "finalAnswer": "$(x-5)^{2} \\equiv x^{2}-10x+25$ is proved."
    }
  },
  {
    "id": "gcse.algebra.identities-proof.q032",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Identities and argument",
    "subtopicId": "gcse.algebra.identities-proof",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "proof",
    "tags": ["identity", "difference of squares", "expanding binomials", "proof"],
    "questionText": "Prove that $(x+4)(x-4) \\equiv x^{2}-16$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "State the plan.", "workingLatex": "(x+4)(x-4) \\equiv x^{2}-16", "explanation": "This is a difference-of-squares pattern; we expand to show the middle terms cancel.", "diagram": null },
        { "stepNumber": 2, "description": "Take the left-hand side.", "workingLatex": "(x+4)(x-4)", "explanation": "Use FOIL, expecting the two middle terms to be opposites.", "diagram": null },
        { "stepNumber": 3, "description": "First terms.", "workingLatex": "x \\times x = x^{2}", "explanation": "The leading terms give $x^{2}$.", "diagram": null },
        { "stepNumber": 4, "description": "Outer terms.", "workingLatex": "x \\times (-4) = -4x", "explanation": "The outer pair gives $-4x$.", "diagram": null },
        { "stepNumber": 5, "description": "Inner terms.", "workingLatex": "4 \\times x = 4x", "explanation": "The inner pair gives $+4x$.", "diagram": null },
        { "stepNumber": 6, "description": "Last terms.", "workingLatex": "4 \\times (-4) = -16", "explanation": "The constants give $-16$.", "diagram": null },
        { "stepNumber": 7, "description": "Add the four products.", "workingLatex": "x^{2}-4x+4x-16", "explanation": "The middle terms $-4x$ and $+4x$ are opposites.", "diagram": null },
        { "stepNumber": 8, "description": "Cancel the middle terms.", "workingLatex": "x^{2}-16", "explanation": "Because $-4x+4x=0$, the middle disappears, leaving the difference of two squares.", "diagram": null },
        { "stepNumber": 9, "description": "Compare both sides.", "workingLatex": "x^{2}-16 = x^{2}-16", "explanation": "The expansion matches the right-hand side.", "diagram": null },
        { "stepNumber": 10, "description": "Conclude.", "workingLatex": "(x+4)(x-4) \\equiv x^{2}-16", "explanation": "The identity holds for all $x$.", "diagram": null }
      ],
      "finalAnswer": "$(x+4)(x-4) \\equiv x^{2}-16$ is proved."
    }
  },
  {
    "id": "gcse.algebra.identities-proof.q033",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Identities and argument",
    "subtopicId": "gcse.algebra.identities-proof",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "values",
    "tags": ["identity", "completing the square", "comparing coefficients", "constants"],
    "questionText": "Find the values of $a$ and $b$ such that $x^{2}+6x+11 \\equiv (x+a)^{2}+b$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "State what must hold.", "workingLatex": "x^{2}+6x+11 \\equiv (x+a)^{2}+b", "explanation": "For an identity, expanding the right-hand side must reproduce the left-hand side for all $x$, so coefficients must match.", "diagram": null },
        { "stepNumber": 2, "description": "Expand the general square.", "workingLatex": "(x+a)^{2} = x^{2}+2ax+a^{2}", "explanation": "Squaring $(x+a)$ gives a squared term, a middle term $2ax$, and a constant $a^{2}$.", "diagram": null },
        { "stepNumber": 3, "description": "Add $b$.", "workingLatex": "(x+a)^{2}+b = x^{2}+2ax+(a^{2}+b)", "explanation": "The constant term of the right-hand side is $a^{2}+b$.", "diagram": null },
        { "stepNumber": 4, "description": "Compare the $x$ coefficients.", "workingLatex": "2a = 6", "explanation": "The coefficient of $x$ on the left is $6$, so it must equal $2a$.", "diagram": null },
        { "stepNumber": 5, "description": "Solve for $a$.", "workingLatex": "a = 3", "explanation": "Dividing by $2$ gives $a=3$; this is half the coefficient of $x$, as expected in completing the square.", "diagram": null },
        { "stepNumber": 6, "description": "Compare the constant terms.", "workingLatex": "a^{2}+b = 11", "explanation": "The constant on the left is $11$, which must equal $a^{2}+b$.", "diagram": null },
        { "stepNumber": 7, "description": "Substitute $a=3$.", "workingLatex": "9+b = 11", "explanation": "Since $a^{2}=3^{2}=9$, we can find $b$.", "diagram": null },
        { "stepNumber": 8, "description": "Solve for $b$.", "workingLatex": "b = 2", "explanation": "Subtracting $9$ from both sides gives $b=2$.", "diagram": null },
        { "stepNumber": 9, "description": "Write the completed form.", "workingLatex": "x^{2}+6x+11 \\equiv (x+3)^{2}+2", "explanation": "The values $a=3$ and $b=2$ complete the identity.", "diagram": null },
        { "stepNumber": 10, "description": "Check by expanding.", "workingLatex": "(x+3)^{2}+2 = x^{2}+6x+9+2 = x^{2}+6x+11", "explanation": "Expanding confirms the right-hand side reproduces the left-hand side.", "diagram": null }
      ],
      "finalAnswer": "$a=3$, $b=2$."
    }
  },
  {
    "id": "gcse.algebra.identities-proof.q034",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Identities and argument",
    "subtopicId": "gcse.algebra.identities-proof",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "values",
    "tags": ["identity", "completing the square", "comparing coefficients", "constants"],
    "questionText": "Find the values of $a$ and $b$ such that $x^{2}+8x+20 \\equiv (x+a)^{2}+b$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "State what must hold.", "workingLatex": "x^{2}+8x+20 \\equiv (x+a)^{2}+b", "explanation": "Expanding the right-hand side must match the left for all $x$, so coefficients are compared.", "diagram": null },
        { "stepNumber": 2, "description": "Expand the general square.", "workingLatex": "(x+a)^{2} = x^{2}+2ax+a^{2}", "explanation": "The square produces a middle term $2ax$ and constant $a^{2}$.", "diagram": null },
        { "stepNumber": 3, "description": "Add $b$.", "workingLatex": "(x+a)^{2}+b = x^{2}+2ax+(a^{2}+b)", "explanation": "The constant term becomes $a^{2}+b$.", "diagram": null },
        { "stepNumber": 4, "description": "Compare the $x$ coefficients.", "workingLatex": "2a = 8", "explanation": "The coefficient of $x$ on the left is $8$.", "diagram": null },
        { "stepNumber": 5, "description": "Solve for $a$.", "workingLatex": "a = 4", "explanation": "Half of $8$ is $4$.", "diagram": null },
        { "stepNumber": 6, "description": "Compare the constant terms.", "workingLatex": "a^{2}+b = 20", "explanation": "The constant on the left is $20$.", "diagram": null },
        { "stepNumber": 7, "description": "Substitute $a=4$.", "workingLatex": "16+b = 20", "explanation": "Since $a^{2}=16$, this isolates $b$.", "diagram": null },
        { "stepNumber": 8, "description": "Solve for $b$.", "workingLatex": "b = 4", "explanation": "Subtracting $16$ gives $b=4$.", "diagram": null },
        { "stepNumber": 9, "description": "Write the completed form.", "workingLatex": "x^{2}+8x+20 \\equiv (x+4)^{2}+4", "explanation": "The identity is complete with $a=4$, $b=4$.", "diagram": null },
        { "stepNumber": 10, "description": "Check by expanding.", "workingLatex": "(x+4)^{2}+4 = x^{2}+8x+16+4 = x^{2}+8x+20", "explanation": "Expanding confirms the match.", "diagram": null }
      ],
      "finalAnswer": "$a=4$, $b=4$."
    }
  },
  {
    "id": "gcse.algebra.identities-proof.q035",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Identities and argument",
    "subtopicId": "gcse.algebra.identities-proof",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "values",
    "tags": ["identity", "completing the square", "negative term", "constants"],
    "questionText": "Find the values of $a$ and $b$ such that $x^{2}-4x+9 \\equiv (x+a)^{2}+b$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "State what must hold.", "workingLatex": "x^{2}-4x+9 \\equiv (x+a)^{2}+b", "explanation": "The expanded right-hand side must match the left for all $x$.", "diagram": null },
        { "stepNumber": 2, "description": "Expand the general square.", "workingLatex": "(x+a)^{2} = x^{2}+2ax+a^{2}", "explanation": "This gives the middle term $2ax$ and constant $a^{2}$.", "diagram": null },
        { "stepNumber": 3, "description": "Add $b$.", "workingLatex": "(x+a)^{2}+b = x^{2}+2ax+(a^{2}+b)", "explanation": "The constant term is $a^{2}+b$.", "diagram": null },
        { "stepNumber": 4, "description": "Compare the $x$ coefficients.", "workingLatex": "2a = -4", "explanation": "The coefficient of $x$ on the left is $-4$, so $2a=-4$.", "diagram": null },
        { "stepNumber": 5, "description": "Solve for $a$.", "workingLatex": "a = -2", "explanation": "Dividing by $2$ gives $a=-2$; a negative $a$ is expected because the middle term is negative.", "diagram": null },
        { "stepNumber": 6, "description": "Compare the constant terms.", "workingLatex": "a^{2}+b = 9", "explanation": "The constant on the left is $9$.", "diagram": null },
        { "stepNumber": 7, "description": "Substitute $a=-2$.", "workingLatex": "4+b = 9", "explanation": "Since $(-2)^{2}=4$, we can solve for $b$.", "diagram": null },
        { "stepNumber": 8, "description": "Solve for $b$.", "workingLatex": "b = 5", "explanation": "Subtracting $4$ gives $b=5$.", "diagram": null },
        { "stepNumber": 9, "description": "Write the completed form.", "workingLatex": "x^{2}-4x+9 \\equiv (x-2)^{2}+5", "explanation": "With $a=-2$, the bracket is written as $(x-2)$.", "diagram": null },
        { "stepNumber": 10, "description": "Check by expanding.", "workingLatex": "(x-2)^{2}+5 = x^{2}-4x+4+5 = x^{2}-4x+9", "explanation": "Expanding confirms the identity.", "diagram": null }
      ],
      "finalAnswer": "$a=-2$, $b=5$."
    }
  },
  {
    "id": "gcse.algebra.identities-proof.q036",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Identities and argument",
    "subtopicId": "gcse.algebra.identities-proof",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "values",
    "tags": ["identity", "completing the square", "comparing coefficients", "constants"],
    "questionText": "Find the values of $a$ and $b$ such that $x^{2}+10x+30 \\equiv (x+a)^{2}+b$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "State what must hold.", "workingLatex": "x^{2}+10x+30 \\equiv (x+a)^{2}+b", "explanation": "The expanded right-hand side must reproduce the left for all $x$.", "diagram": null },
        { "stepNumber": 2, "description": "Expand the general square.", "workingLatex": "(x+a)^{2} = x^{2}+2ax+a^{2}", "explanation": "This creates the middle term $2ax$ and constant $a^{2}$.", "diagram": null },
        { "stepNumber": 3, "description": "Add $b$.", "workingLatex": "(x+a)^{2}+b = x^{2}+2ax+(a^{2}+b)", "explanation": "The overall constant is $a^{2}+b$.", "diagram": null },
        { "stepNumber": 4, "description": "Compare the $x$ coefficients.", "workingLatex": "2a = 10", "explanation": "The coefficient of $x$ on the left is $10$.", "diagram": null },
        { "stepNumber": 5, "description": "Solve for $a$.", "workingLatex": "a = 5", "explanation": "Half of $10$ is $5$.", "diagram": null },
        { "stepNumber": 6, "description": "Compare the constant terms.", "workingLatex": "a^{2}+b = 30", "explanation": "The constant on the left is $30$.", "diagram": null },
        { "stepNumber": 7, "description": "Substitute $a=5$.", "workingLatex": "25+b = 30", "explanation": "Since $a^{2}=25$, this isolates $b$.", "diagram": null },
        { "stepNumber": 8, "description": "Solve for $b$.", "workingLatex": "b = 5", "explanation": "Subtracting $25$ gives $b=5$.", "diagram": null },
        { "stepNumber": 9, "description": "Write the completed form.", "workingLatex": "x^{2}+10x+30 \\equiv (x+5)^{2}+5", "explanation": "The identity is complete with $a=5$, $b=5$.", "diagram": null },
        { "stepNumber": 10, "description": "Check by expanding.", "workingLatex": "(x+5)^{2}+5 = x^{2}+10x+25+5 = x^{2}+10x+30", "explanation": "Expanding confirms the match.", "diagram": null }
      ],
      "finalAnswer": "$a=5$, $b=5$."
    }
  },
  {
    "id": "gcse.algebra.identities-proof.q037",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Identities and argument",
    "subtopicId": "gcse.algebra.identities-proof",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "values",
    "tags": ["identity", "completing the square", "comparing coefficients", "constants"],
    "questionText": "Find the values of $p$ and $q$ such that $(x+p)^{2}+q \\equiv x^{2}+2x+7$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "State what must hold.", "workingLatex": "(x+p)^{2}+q \\equiv x^{2}+2x+7", "explanation": "Expanding the left-hand side must match the right for all $x$, so we compare coefficients.", "diagram": null },
        { "stepNumber": 2, "description": "Expand the square.", "workingLatex": "(x+p)^{2} = x^{2}+2px+p^{2}", "explanation": "Squaring $(x+p)$ gives a middle term $2px$ and constant $p^{2}$.", "diagram": null },
        { "stepNumber": 3, "description": "Add $q$.", "workingLatex": "(x+p)^{2}+q = x^{2}+2px+(p^{2}+q)", "explanation": "The full constant term is $p^{2}+q$.", "diagram": null },
        { "stepNumber": 4, "description": "Compare the $x$ coefficients.", "workingLatex": "2p = 2", "explanation": "The coefficient of $x$ on the right is $2$.", "diagram": null },
        { "stepNumber": 5, "description": "Solve for $p$.", "workingLatex": "p = 1", "explanation": "Dividing by $2$ gives $p=1$.", "diagram": null },
        { "stepNumber": 6, "description": "Compare the constant terms.", "workingLatex": "p^{2}+q = 7", "explanation": "The constant on the right is $7$.", "diagram": null },
        { "stepNumber": 7, "description": "Substitute $p=1$.", "workingLatex": "1+q = 7", "explanation": "Since $p^{2}=1$, this isolates $q$.", "diagram": null },
        { "stepNumber": 8, "description": "Solve for $q$.", "workingLatex": "q = 6", "explanation": "Subtracting $1$ gives $q=6$.", "diagram": null },
        { "stepNumber": 9, "description": "Write the completed form.", "workingLatex": "(x+1)^{2}+6 \\equiv x^{2}+2x+7", "explanation": "The values $p=1$, $q=6$ complete the identity.", "diagram": null },
        { "stepNumber": 10, "description": "Check by expanding.", "workingLatex": "(x+1)^{2}+6 = x^{2}+2x+1+6 = x^{2}+2x+7", "explanation": "Expanding confirms the identity holds.", "diagram": null }
      ],
      "finalAnswer": "$p=1$, $q=6$."
    }
  },
  {
    "id": "gcse.algebra.identities-proof.q038",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Identities and argument",
    "subtopicId": "gcse.algebra.identities-proof",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "values",
    "tags": ["identity", "comparing coefficients", "factorising", "constants"],
    "questionText": "Given that $(x+a)(x+b) \\equiv x^{2}+7x+12$ where $a$ and $b$ are positive integers, find $a$ and $b$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "State the relationship.", "workingLatex": "(x+a)(x+b) \\equiv x^{2}+7x+12", "explanation": "Expanding the left-hand side must reproduce the right for all $x$, so the coefficients let us find $a$ and $b$.", "diagram": null },
        { "stepNumber": 2, "description": "Expand the general product.", "workingLatex": "(x+a)(x+b) = x^{2}+(a+b)x+ab", "explanation": "The middle coefficient is the sum $a+b$ and the constant is the product $ab$.", "diagram": null },
        { "stepNumber": 3, "description": "Compare the $x$ coefficients.", "workingLatex": "a+b = 7", "explanation": "The coefficient of $x$ on the right is $7$.", "diagram": null },
        { "stepNumber": 4, "description": "Compare the constant terms.", "workingLatex": "ab = 12", "explanation": "The constant on the right is $12$.", "diagram": null },
        { "stepNumber": 5, "description": "List factor pairs of 12.", "workingLatex": "1\\times12,\\;2\\times6,\\;3\\times4", "explanation": "We need two positive integers whose product is $12$.", "diagram": null },
        { "stepNumber": 6, "description": "Test which pair sums to 7.", "workingLatex": "3+4 = 7", "explanation": "Among the pairs, only $3$ and $4$ add to $7$.", "diagram": null },
        { "stepNumber": 7, "description": "Identify the values.", "workingLatex": "a=3,\\; b=4", "explanation": "These satisfy both the sum and product conditions.", "diagram": null },
        { "stepNumber": 8, "description": "Check by expanding.", "workingLatex": "(x+3)(x+4) = x^{2}+7x+12", "explanation": "Expanding confirms the identity, and the roles of $a$ and $b$ can be swapped.", "diagram": null },
        { "stepNumber": 9, "description": "State the conclusion.", "workingLatex": "\\{a,b\\} = \\{3,4\\}", "explanation": "The pair $3$ and $4$ makes the identity true.", "diagram": null }
      ],
      "finalAnswer": "$a=3$ and $b=4$ (in either order)."
    }
  },
  {
    "id": "gcse.algebra.identities-proof.q039",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Identities and argument",
    "subtopicId": "gcse.algebra.identities-proof",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "values",
    "tags": ["identity", "perfect square", "comparing coefficients", "constants"],
    "questionText": "Find the value of $a$ such that $x^{2}+ax+16 \\equiv (x+4)^{2}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "State the relationship.", "workingLatex": "x^{2}+ax+16 \\equiv (x+4)^{2}", "explanation": "The right-hand side is a perfect square; expanding it lets us match the coefficient $a$.", "diagram": null },
        { "stepNumber": 2, "description": "Expand the right-hand side.", "workingLatex": "(x+4)^{2} = x^{2}+8x+16", "explanation": "Squaring $(x+4)$ gives $x^{2}$, a middle term of $8x$, and $16$.", "diagram": null },
        { "stepNumber": 3, "description": "Write both sides together.", "workingLatex": "x^{2}+ax+16 = x^{2}+8x+16", "explanation": "Both sides now have the same squared and constant terms.", "diagram": null },
        { "stepNumber": 4, "description": "Compare the constant terms.", "workingLatex": "16 = 16", "explanation": "The constants already match, which is consistent.", "diagram": null },
        { "stepNumber": 5, "description": "Compare the $x$ coefficients.", "workingLatex": "ax = 8x", "explanation": "For the identity to hold, the coefficients of $x$ must be equal.", "diagram": null },
        { "stepNumber": 6, "description": "Solve for $a$.", "workingLatex": "a = 8", "explanation": "Matching the coefficients gives $a=8$.", "diagram": null },
        { "stepNumber": 7, "description": "Check the completed identity.", "workingLatex": "x^{2}+8x+16 \\equiv (x+4)^{2}", "explanation": "Substituting $a=8$ gives a true identity.", "diagram": null },
        { "stepNumber": 8, "description": "State the conclusion.", "workingLatex": "a = 8", "explanation": "This is the only value that makes the expression a perfect square.", "diagram": null },
        { "stepNumber": 9, "description": "Note the pattern.", "workingLatex": "a = 2\\times 4", "explanation": "For $x^{2}+ax+c \\equiv (x+k)^{2}$ the middle coefficient is always twice $k$, a useful check.", "diagram": null }
      ],
      "finalAnswer": "$a=8$."
    }
  },
  {
    "id": "gcse.algebra.identities-proof.q040",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Identities and argument",
    "subtopicId": "gcse.algebra.identities-proof",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "proof",
    "tags": ["proof", "number proof", "consecutive integers", "odd numbers"],
    "questionText": "Prove that the sum of two consecutive integers is always odd.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Understand the claim.", "workingLatex": "n + (n+1) = ?", "explanation": "We must show that adding any integer to the next one always gives an odd result, so we argue with a general integer rather than examples.", "diagram": null },
        { "stepNumber": 2, "description": "Represent the first integer.", "workingLatex": "n", "explanation": "Let $n$ stand for any integer; using a letter keeps the argument general.", "diagram": null },
        { "stepNumber": 3, "description": "Represent the next consecutive integer.", "workingLatex": "n+1", "explanation": "The integer immediately after $n$ is $n+1$.", "diagram": null },
        { "stepNumber": 4, "description": "Write the sum.", "workingLatex": "n + (n+1)", "explanation": "We add the two consecutive integers together.", "diagram": null },
        { "stepNumber": 5, "description": "Simplify the sum.", "workingLatex": "2n+1", "explanation": "Collecting the $n$ terms gives $2n$, plus the $1$.", "diagram": null },
        { "stepNumber": 6, "description": "Recall the meaning of even.", "workingLatex": "2n = 2\\times n", "explanation": "Any multiple of $2$ is even, so $2n$ is even for every integer $n$.", "diagram": null },
        { "stepNumber": 7, "description": "Interpret the extra 1.", "workingLatex": "2n+1", "explanation": "Adding $1$ to an even number gives the next number up, which is odd.", "diagram": null },
        { "stepNumber": 8, "description": "Match the definition of odd.", "workingLatex": "\\text{odd} = 2k+1", "explanation": "An odd number is exactly one of the form $2k+1$; here $2n+1$ fits with $k=n$.", "diagram": null },
        { "stepNumber": 9, "description": "State the conclusion.", "workingLatex": "n+(n+1) = 2n+1\\;\\text{is odd}", "explanation": "Since $2n+1$ is odd for every integer $n$, the sum of two consecutive integers is always odd.", "diagram": null }
      ],
      "finalAnswer": "The sum is $2n+1$, which is odd for every integer $n$."
    }
  },
  {
    "id": "gcse.algebra.identities-proof.q041",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Identities and argument",
    "subtopicId": "gcse.algebra.identities-proof",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "proof",
    "tags": ["proof", "number proof", "even numbers", "consecutive"],
    "questionText": "Prove that the sum of two consecutive even numbers is always even.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Understand the claim.", "workingLatex": "2n + (2n+2) = ?", "explanation": "We must show that adding any even number to the next even number always gives an even result.", "diagram": null },
        { "stepNumber": 2, "description": "Represent an even number.", "workingLatex": "2n", "explanation": "Every even number is a multiple of $2$, so we write it as $2n$ for some integer $n$.", "diagram": null },
        { "stepNumber": 3, "description": "Represent the next even number.", "workingLatex": "2n+2", "explanation": "The next even number is $2$ more than $2n$.", "diagram": null },
        { "stepNumber": 4, "description": "Write the sum.", "workingLatex": "2n + (2n+2)", "explanation": "We add the two consecutive even numbers.", "diagram": null },
        { "stepNumber": 5, "description": "Simplify.", "workingLatex": "4n+2", "explanation": "Collecting like terms gives $4n$ plus $2$.", "diagram": null },
        { "stepNumber": 6, "description": "Factor out 2.", "workingLatex": "2(2n+1)", "explanation": "Taking a common factor of $2$ shows the expression is $2$ times an integer.", "diagram": null },
        { "stepNumber": 7, "description": "Recall the meaning of even.", "workingLatex": "2 \\times (2n+1)", "explanation": "Because $2n+1$ is an integer, the whole expression is a multiple of $2$.", "diagram": null },
        { "stepNumber": 8, "description": "Match the definition of even.", "workingLatex": "\\text{even} = 2k", "explanation": "A number is even exactly when it can be written as $2k$; here $k=2n+1$.", "diagram": null },
        { "stepNumber": 9, "description": "State the conclusion.", "workingLatex": "2n+(2n+2)=2(2n+1)\\;\\text{is even}", "explanation": "Since the sum is $2$ times an integer, the sum of two consecutive even numbers is always even.", "diagram": null }
      ],
      "finalAnswer": "The sum is $2(2n+1)$, a multiple of $2$, so it is always even."
    }
  },
  {
    "id": "gcse.algebra.identities-proof.q042",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Identities and argument",
    "subtopicId": "gcse.algebra.identities-proof",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "proof",
    "tags": ["proof", "number proof", "consecutive integers", "even numbers"],
    "questionText": "Prove that the product of two consecutive integers is always even.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Understand the claim.", "workingLatex": "n(n+1) = ?", "explanation": "We must show that multiplying any integer by the next one always gives an even result.", "diagram": null },
        { "stepNumber": 2, "description": "Represent the two consecutive integers.", "workingLatex": "n \\;\\text{and}\\; n+1", "explanation": "Let $n$ be any integer; then $n+1$ is the next integer.", "diagram": null },
        { "stepNumber": 3, "description": "Write the product.", "workingLatex": "n(n+1)", "explanation": "The product of the two consecutive integers is $n(n+1)$.", "diagram": null },
        { "stepNumber": 4, "description": "Reason about parity.", "workingLatex": "n\\;\\text{even or}\\;n\\;\\text{odd}", "explanation": "Every integer is either even or odd, so we split the argument into these two cases.", "diagram": null },
        { "stepNumber": 5, "description": "Case 1: $n$ is even.", "workingLatex": "n = 2k \\Rightarrow n(n+1)=2k(n+1)", "explanation": "If $n$ is even, the product already contains a factor of $2$, so it is even.", "diagram": null },
        { "stepNumber": 6, "description": "Case 2: $n$ is odd.", "workingLatex": "n = 2k+1 \\Rightarrow n+1 = 2k+2", "explanation": "If $n$ is odd, then $n+1$ is even.", "diagram": null },
        { "stepNumber": 7, "description": "Show the product is even in Case 2.", "workingLatex": "n(n+1) = n\\cdot 2(k+1)", "explanation": "Because $n+1=2(k+1)$ contains a factor of $2$, the product is even.", "diagram": null },
        { "stepNumber": 8, "description": "Combine the cases.", "workingLatex": "\\text{one of } n,\\,n+1 \\text{ is even}", "explanation": "Of any two consecutive integers, exactly one is even, so their product always has a factor of $2$.", "diagram": null },
        { "stepNumber": 9, "description": "Match the definition of even.", "workingLatex": "n(n+1) = 2m", "explanation": "In both cases the product can be written as $2m$ for some integer $m$.", "diagram": null },
        { "stepNumber": 10, "description": "State the conclusion.", "workingLatex": "n(n+1)\\;\\text{is even}", "explanation": "Since a factor of $2$ is always present, the product of two consecutive integers is always even.", "diagram": null }
      ],
      "finalAnswer": "One of the two consecutive integers is even, so the product always has a factor of $2$ and is even."
    }
  },
  {
    "id": "gcse.algebra.identities-proof.q043",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Identities and argument",
    "subtopicId": "gcse.algebra.identities-proof",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "proof",
    "tags": ["proof", "difference of squares", "consecutive integers", "identity"],
    "questionText": "Prove that $(n+1)^{2}-n^{2} \\equiv 2n+1$ for all integers $n$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "State the plan.", "workingLatex": "(n+1)^{2}-n^{2} \\equiv 2n+1", "explanation": "We expand the left-hand side and simplify to show it equals $2n+1$ for every integer $n$.", "diagram": null },
        { "stepNumber": 2, "description": "Expand the square.", "workingLatex": "(n+1)^{2} = n^{2}+2n+1", "explanation": "Squaring $(n+1)$ gives $n^{2}$, a middle term $2n$, and $1$.", "diagram": null },
        { "stepNumber": 3, "description": "Subtract $n^{2}$.", "workingLatex": "(n^{2}+2n+1) - n^{2}", "explanation": "We now carry out the subtraction indicated in the original expression.", "diagram": null },
        { "stepNumber": 4, "description": "Cancel the squared terms.", "workingLatex": "n^{2}-n^{2} = 0", "explanation": "The two $n^{2}$ terms cancel, removing the highest power.", "diagram": null },
        { "stepNumber": 5, "description": "Write what remains.", "workingLatex": "2n+1", "explanation": "After cancelling, only the middle term and constant are left.", "diagram": null },
        { "stepNumber": 6, "description": "Compare both sides.", "workingLatex": "2n+1 = 2n+1", "explanation": "The simplified left-hand side matches the right-hand side.", "diagram": null },
        { "stepNumber": 7, "description": "Interpret the result.", "workingLatex": "2n+1\\;\\text{is odd}", "explanation": "As a bonus, this shows the difference between consecutive square numbers is always odd.", "diagram": null },
        { "stepNumber": 8, "description": "Confirm the identity holds for all $n$.", "workingLatex": "(n+1)^{2}-n^{2} \\equiv 2n+1", "explanation": "No assumptions about $n$ were made, so the identity is valid for every integer.", "diagram": null },
        { "stepNumber": 9, "description": "State the conclusion.", "workingLatex": "\\text{Proved}", "explanation": "The difference of the squares of two consecutive integers is exactly $2n+1$.", "diagram": null }
      ],
      "finalAnswer": "$(n+1)^{2}-n^{2} \\equiv 2n+1$, which also shows this difference is always odd."
    }
  },
  {
    "id": "gcse.algebra.identities-proof.q044",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Identities and argument",
    "subtopicId": "gcse.algebra.identities-proof",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "proof",
    "tags": ["identity", "difference of squares", "expanding binomials", "proof"],
    "questionText": "Prove that $(x+7)(x-7) \\equiv x^{2}-49$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "State the plan.", "workingLatex": "(x+7)(x-7) \\equiv x^{2}-49", "explanation": "This is a difference-of-squares pattern; we expand to show the middle terms cancel.", "diagram": null },
        { "stepNumber": 2, "description": "Take the left-hand side.", "workingLatex": "(x+7)(x-7)", "explanation": "Use FOIL, expecting the outer and inner terms to cancel.", "diagram": null },
        { "stepNumber": 3, "description": "First terms.", "workingLatex": "x \\times x = x^{2}", "explanation": "The leading terms give $x^{2}$.", "diagram": null },
        { "stepNumber": 4, "description": "Outer terms.", "workingLatex": "x \\times (-7) = -7x", "explanation": "The outer pair gives $-7x$.", "diagram": null },
        { "stepNumber": 5, "description": "Inner terms.", "workingLatex": "7 \\times x = 7x", "explanation": "The inner pair gives $+7x$.", "diagram": null },
        { "stepNumber": 6, "description": "Last terms.", "workingLatex": "7 \\times (-7) = -49", "explanation": "The constants give $-49$.", "diagram": null },
        { "stepNumber": 7, "description": "Add the four products.", "workingLatex": "x^{2}-7x+7x-49", "explanation": "The middle terms are opposites.", "diagram": null },
        { "stepNumber": 8, "description": "Cancel the middle terms.", "workingLatex": "x^{2}-49", "explanation": "Since $-7x+7x=0$, only the two squares remain.", "diagram": null },
        { "stepNumber": 9, "description": "Compare and conclude.", "workingLatex": "(x+7)(x-7) \\equiv x^{2}-49", "explanation": "The expansion equals the right-hand side for all $x$, proving the identity.", "diagram": null }
      ],
      "finalAnswer": "$(x+7)(x-7) \\equiv x^{2}-49$ is proved."
    }
  },
  {
    "id": "gcse.algebra.identities-proof.q045",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Identities and argument",
    "subtopicId": "gcse.algebra.identities-proof",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "values",
    "tags": ["identity", "comparing coefficients", "expanding binomials", "constants"],
    "questionText": "Given that $(2x+1)(x+3) \\equiv ax^{2}+bx+c$, find the values of $a$, $b$ and $c$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "State the plan.", "workingLatex": "(2x+1)(x+3) \\equiv ax^{2}+bx+c", "explanation": "We expand the left-hand side; the resulting coefficients are $a$, $b$ and $c$.", "diagram": null },
        { "stepNumber": 2, "description": "First terms.", "workingLatex": "2x \\times x = 2x^{2}", "explanation": "The leading terms give $2x^{2}$.", "diagram": null },
        { "stepNumber": 3, "description": "Outer terms.", "workingLatex": "2x \\times 3 = 6x", "explanation": "The outer pair gives $6x$.", "diagram": null },
        { "stepNumber": 4, "description": "Inner terms.", "workingLatex": "1 \\times x = x", "explanation": "The inner pair gives $x$.", "diagram": null },
        { "stepNumber": 5, "description": "Last terms.", "workingLatex": "1 \\times 3 = 3", "explanation": "The constants give $3$.", "diagram": null },
        { "stepNumber": 6, "description": "Add the products.", "workingLatex": "2x^{2}+6x+x+3", "explanation": "All four products are written out.", "diagram": null },
        { "stepNumber": 7, "description": "Collect like terms.", "workingLatex": "2x^{2}+7x+3", "explanation": "The like terms $6x$ and $x$ combine to $7x$.", "diagram": null },
        { "stepNumber": 8, "description": "Compare coefficients.", "workingLatex": "a=2,\\; b=7,\\; c=3", "explanation": "Matching the expanded form to $ax^{2}+bx+c$ reads off the three constants.", "diagram": null },
        { "stepNumber": 9, "description": "State the conclusion.", "workingLatex": "(2x+1)(x+3) \\equiv 2x^{2}+7x+3", "explanation": "These values make the identity true for all $x$.", "diagram": null }
      ],
      "finalAnswer": "$a=2$, $b=7$, $c=3$."
    }
  },
  {
    "id": "gcse.algebra.identities-proof.q046",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Identities and argument",
    "subtopicId": "gcse.algebra.identities-proof",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "proof",
    "tags": ["identity", "expanding binomials", "difference of squares", "proof"],
    "questionText": "Prove that $(x+2)^{2}-(x-2)^{2} \\equiv 8x$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "State the plan.", "workingLatex": "(x+2)^{2}-(x-2)^{2} \\equiv 8x", "explanation": "We expand both squares and subtract, expecting the squared and constant terms to cancel.", "diagram": null },
        { "stepNumber": 2, "description": "Expand the first square.", "workingLatex": "(x+2)^{2} = x^{2}+4x+4", "explanation": "Squaring $(x+2)$ gives these three terms.", "diagram": null },
        { "stepNumber": 3, "description": "Expand the second square.", "workingLatex": "(x-2)^{2} = x^{2}-4x+4", "explanation": "Squaring $(x-2)$ gives a negative middle term.", "diagram": null },
        { "stepNumber": 4, "description": "Set up the subtraction.", "workingLatex": "(x^{2}+4x+4)-(x^{2}-4x+4)", "explanation": "We subtract the second expansion from the first, keeping the bracket to manage signs.", "diagram": null },
        { "stepNumber": 5, "description": "Distribute the minus sign.", "workingLatex": "x^{2}+4x+4-x^{2}+4x-4", "explanation": "Subtracting flips the sign of every term in the second bracket.", "diagram": null },
        { "stepNumber": 6, "description": "Cancel the squared terms.", "workingLatex": "x^{2}-x^{2} = 0", "explanation": "The two $x^{2}$ terms cancel.", "diagram": null },
        { "stepNumber": 7, "description": "Cancel the constant terms.", "workingLatex": "4-4 = 0", "explanation": "The constants also cancel.", "diagram": null },
        { "stepNumber": 8, "description": "Combine the $x$ terms.", "workingLatex": "4x+4x = 8x", "explanation": "The two $4x$ terms add to $8x$.", "diagram": null },
        { "stepNumber": 9, "description": "Compare both sides.", "workingLatex": "8x = 8x", "explanation": "The simplified left-hand side matches the right-hand side.", "diagram": null },
        { "stepNumber": 10, "description": "State the conclusion.", "workingLatex": "(x+2)^{2}-(x-2)^{2} \\equiv 8x", "explanation": "The identity holds for all $x$.", "diagram": null }
      ],
      "finalAnswer": "$(x+2)^{2}-(x-2)^{2} \\equiv 8x$ is proved."
    }
  },
  {
    "id": "gcse.algebra.identities-proof.q047",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Identities and argument",
    "subtopicId": "gcse.algebra.identities-proof",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "values",
    "tags": ["identity", "completing the square", "negative term", "constants"],
    "questionText": "Find the values of $a$ and $b$ such that $x^{2}-6x+13 \\equiv (x-a)^{2}+b$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "State what must hold.", "workingLatex": "x^{2}-6x+13 \\equiv (x-a)^{2}+b", "explanation": "Expanding the right-hand side must reproduce the left for all $x$.", "diagram": null },
        { "stepNumber": 2, "description": "Expand the general square.", "workingLatex": "(x-a)^{2} = x^{2}-2ax+a^{2}", "explanation": "Squaring $(x-a)$ gives a negative middle term $-2ax$ and constant $a^{2}$.", "diagram": null },
        { "stepNumber": 3, "description": "Add $b$.", "workingLatex": "(x-a)^{2}+b = x^{2}-2ax+(a^{2}+b)", "explanation": "The full constant term is $a^{2}+b$.", "diagram": null },
        { "stepNumber": 4, "description": "Compare the $x$ coefficients.", "workingLatex": "-2a = -6", "explanation": "The coefficient of $x$ on the left is $-6$.", "diagram": null },
        { "stepNumber": 5, "description": "Solve for $a$.", "workingLatex": "a = 3", "explanation": "Dividing $-6$ by $-2$ gives $a=3$.", "diagram": null },
        { "stepNumber": 6, "description": "Compare the constant terms.", "workingLatex": "a^{2}+b = 13", "explanation": "The constant on the left is $13$.", "diagram": null },
        { "stepNumber": 7, "description": "Substitute $a=3$.", "workingLatex": "9+b = 13", "explanation": "Since $a^{2}=9$, this isolates $b$.", "diagram": null },
        { "stepNumber": 8, "description": "Solve for $b$.", "workingLatex": "b = 4", "explanation": "Subtracting $9$ gives $b=4$.", "diagram": null },
        { "stepNumber": 9, "description": "Write the completed form.", "workingLatex": "x^{2}-6x+13 \\equiv (x-3)^{2}+4", "explanation": "The values $a=3$, $b=4$ complete the identity.", "diagram": null },
        { "stepNumber": 10, "description": "Check by expanding.", "workingLatex": "(x-3)^{2}+4 = x^{2}-6x+9+4 = x^{2}-6x+13", "explanation": "Expanding confirms the identity.", "diagram": null }
      ],
      "finalAnswer": "$a=3$, $b=4$."
    }
  },
  {
    "id": "gcse.algebra.identities-proof.q048",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Identities and argument",
    "subtopicId": "gcse.algebra.identities-proof",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "proof",
    "tags": ["proof", "number proof", "odd numbers", "multiple of 4"],
    "questionText": "Prove that the sum of two consecutive odd numbers is always a multiple of 4.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Understand the claim.", "workingLatex": "(2n+1)+(2n+3) = ?", "explanation": "We must show that adding any odd number to the next odd number always gives a multiple of $4$.", "diagram": null },
        { "stepNumber": 2, "description": "Represent an odd number.", "workingLatex": "2n+1", "explanation": "Every odd number is one more than an even number, so it has the form $2n+1$.", "diagram": null },
        { "stepNumber": 3, "description": "Represent the next odd number.", "workingLatex": "2n+3", "explanation": "The next odd number is $2$ more than $2n+1$.", "diagram": null },
        { "stepNumber": 4, "description": "Write the sum.", "workingLatex": "(2n+1)+(2n+3)", "explanation": "We add the two consecutive odd numbers.", "diagram": null },
        { "stepNumber": 5, "description": "Collect like terms.", "workingLatex": "4n+4", "explanation": "The $2n$ terms give $4n$ and the constants $1$ and $3$ give $4$.", "diagram": null },
        { "stepNumber": 6, "description": "Factor out 4.", "workingLatex": "4(n+1)", "explanation": "Taking a common factor of $4$ shows the sum is $4$ times an integer.", "diagram": null },
        { "stepNumber": 7, "description": "Recall the meaning of a multiple of 4.", "workingLatex": "4 \\times (n+1)", "explanation": "A number is a multiple of $4$ exactly when it can be written as $4$ times an integer.", "diagram": null },
        { "stepNumber": 8, "description": "Confirm $n+1$ is an integer.", "workingLatex": "n+1 \\in \\mathbb{Z}", "explanation": "Since $n$ is an integer, so is $n+1$, so the factor is valid.", "diagram": null },
        { "stepNumber": 9, "description": "State the conclusion.", "workingLatex": "(2n+1)+(2n+3)=4(n+1)", "explanation": "The sum is always $4$ times an integer, so it is always a multiple of $4$.", "diagram": null }
      ],
      "finalAnswer": "The sum is $4(n+1)$, which is always a multiple of $4$."
    }
  },
  {
    "id": "gcse.algebra.identities-proof.q049",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Identities and argument",
    "subtopicId": "gcse.algebra.identities-proof",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "values",
    "tags": ["identity", "completing the square", "negative constant", "constants"],
    "questionText": "Find the values of $a$ and $b$ such that $x^{2}+2x-5 \\equiv (x+a)^{2}+b$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "State what must hold.", "workingLatex": "x^{2}+2x-5 \\equiv (x+a)^{2}+b", "explanation": "Expanding the right-hand side must reproduce the left for all $x$.", "diagram": null },
        { "stepNumber": 2, "description": "Expand the general square.", "workingLatex": "(x+a)^{2} = x^{2}+2ax+a^{2}", "explanation": "The square gives a middle term $2ax$ and constant $a^{2}$.", "diagram": null },
        { "stepNumber": 3, "description": "Add $b$.", "workingLatex": "(x+a)^{2}+b = x^{2}+2ax+(a^{2}+b)", "explanation": "The full constant term is $a^{2}+b$.", "diagram": null },
        { "stepNumber": 4, "description": "Compare the $x$ coefficients.", "workingLatex": "2a = 2", "explanation": "The coefficient of $x$ on the left is $2$.", "diagram": null },
        { "stepNumber": 5, "description": "Solve for $a$.", "workingLatex": "a = 1", "explanation": "Half of $2$ is $1$.", "diagram": null },
        { "stepNumber": 6, "description": "Compare the constant terms.", "workingLatex": "a^{2}+b = -5", "explanation": "The constant on the left is $-5$.", "diagram": null },
        { "stepNumber": 7, "description": "Substitute $a=1$.", "workingLatex": "1+b = -5", "explanation": "Since $a^{2}=1$, this isolates $b$.", "diagram": null },
        { "stepNumber": 8, "description": "Solve for $b$.", "workingLatex": "b = -6", "explanation": "Subtracting $1$ from both sides gives $b=-6$.", "diagram": null },
        { "stepNumber": 9, "description": "Write the completed form.", "workingLatex": "x^{2}+2x-5 \\equiv (x+1)^{2}-6", "explanation": "The values $a=1$, $b=-6$ complete the identity.", "diagram": null },
        { "stepNumber": 10, "description": "Check by expanding.", "workingLatex": "(x+1)^{2}-6 = x^{2}+2x+1-6 = x^{2}+2x-5", "explanation": "Expanding confirms the identity holds.", "diagram": null }
      ],
      "finalAnswer": "$a=1$, $b=-6$."
    }
  },
  {
    "id": "gcse.algebra.identities-proof.q050",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Identities and argument",
    "subtopicId": "gcse.algebra.identities-proof",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "proof",
    "tags": ["identity", "expanding binomials", "coefficient", "proof"],
    "questionText": "Prove that $(3x+2)(x+4) \\equiv 3x^{2}+14x+8$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "State the plan.", "workingLatex": "(3x+2)(x+4) \\equiv 3x^{2}+14x+8", "explanation": "We expand the left-hand side and simplify to match the right for all $x$.", "diagram": null },
        { "stepNumber": 2, "description": "First terms.", "workingLatex": "3x \\times x = 3x^{2}", "explanation": "Multiplying $3x$ by $x$ gives $3x^{2}$.", "diagram": null },
        { "stepNumber": 3, "description": "Outer terms.", "workingLatex": "3x \\times 4 = 12x", "explanation": "The outer pair gives $12x$.", "diagram": null },
        { "stepNumber": 4, "description": "Inner terms.", "workingLatex": "2 \\times x = 2x", "explanation": "The inner pair gives $2x$.", "diagram": null },
        { "stepNumber": 5, "description": "Last terms.", "workingLatex": "2 \\times 4 = 8", "explanation": "The constants give $8$.", "diagram": null },
        { "stepNumber": 6, "description": "Add the four products.", "workingLatex": "3x^{2}+12x+2x+8", "explanation": "All products are laid out ready to collect.", "diagram": null },
        { "stepNumber": 7, "description": "Collect the middle terms.", "workingLatex": "3x^{2}+14x+8", "explanation": "The like terms $12x$ and $2x$ combine to $14x$.", "diagram": null },
        { "stepNumber": 8, "description": "Compare both sides.", "workingLatex": "3x^{2}+14x+8 = 3x^{2}+14x+8", "explanation": "The expansion matches the right-hand side exactly.", "diagram": null },
        { "stepNumber": 9, "description": "State the conclusion.", "workingLatex": "(3x+2)(x+4) \\equiv 3x^{2}+14x+8", "explanation": "The identity holds for all $x$.", "diagram": null }
      ],
      "finalAnswer": "$(3x+2)(x+4) \\equiv 3x^{2}+14x+8$ is proved."
    }
  },
  {
    "id": "gcse.algebra.identities-proof.q051",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Identities and argument",
    "subtopicId": "gcse.algebra.identities-proof",
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "values",
    "tags": ["identity", "completing the square", "leading coefficient", "comparing coefficients"],
    "questionText": "Find the values of $a$, $p$ and $q$ such that $2x^{2}+8x+11 \\equiv a(x+p)^{2}+q$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "State the goal.", "workingLatex": "2x^{2}+8x+11 \\equiv a(x+p)^{2}+q", "explanation": "We rewrite the quadratic in completed-square form; because the leading coefficient is not $1$, we first take that factor out.", "diagram": null },
        { "stepNumber": 2, "description": "Factor 2 from the $x^{2}$ and $x$ terms only.", "workingLatex": "2(x^{2}+4x)+11", "explanation": "Completing the square works cleanly when the coefficient of $x^{2}$ inside the bracket is $1$, so we factor $2$ out of just those terms and leave the constant.", "diagram": null },
        { "stepNumber": 3, "description": "Look inside the bracket.", "workingLatex": "x^{2}+4x", "explanation": "We complete the square on this simpler expression first.", "diagram": null },
        { "stepNumber": 4, "description": "Halve the coefficient of $x$.", "workingLatex": "\\tfrac{4}{2} = 2", "explanation": "Half of the middle coefficient tells us the number that goes inside the bracket of the square.", "diagram": null },
        { "stepNumber": 5, "description": "Write the trial square.", "workingLatex": "(x+2)^{2} = x^{2}+4x+4", "explanation": "This square reproduces $x^{2}+4x$ but introduces an extra $+4$.", "diagram": null },
        { "stepNumber": 6, "description": "Correct for the extra constant.", "workingLatex": "x^{2}+4x = (x+2)^{2}-4", "explanation": "Subtracting the unwanted $4$ makes the square exactly equal to $x^{2}+4x$.", "diagram": null },
        { "stepNumber": 7, "description": "Substitute back into the factored form.", "workingLatex": "2\\big[(x+2)^{2}-4\\big]+11", "explanation": "We replace $x^{2}+4x$ with its completed-square equivalent.", "diagram": null },
        { "stepNumber": 8, "description": "Distribute the 2.", "workingLatex": "2(x+2)^{2}-8+11", "explanation": "The factor of $2$ multiplies both the square and the $-4$, giving $-8$.", "diagram": null },
        { "stepNumber": 9, "description": "Combine the constants.", "workingLatex": "2(x+2)^{2}+3", "explanation": "Since $-8+11=3$, the constant outside is $3$.", "diagram": null },
        { "stepNumber": 10, "description": "Read off the values.", "workingLatex": "a=2,\\; p=2,\\; q=3", "explanation": "Matching to $a(x+p)^{2}+q$ gives the three constants.", "diagram": null },
        { "stepNumber": 11, "description": "Begin the check.", "workingLatex": "2(x+2)^{2}+3", "explanation": "We expand to confirm we recover the original quadratic.", "diagram": null },
        { "stepNumber": 12, "description": "Expand the square.", "workingLatex": "2(x^{2}+4x+4)+3", "explanation": "First expand $(x+2)^{2}$ inside the bracket.", "diagram": null },
        { "stepNumber": 13, "description": "Distribute the 2.", "workingLatex": "2x^{2}+8x+8+3", "explanation": "Multiplying through by $2$ gives these terms.", "diagram": null },
        { "stepNumber": 14, "description": "Combine constants and conclude.", "workingLatex": "2x^{2}+8x+11", "explanation": "Since $8+3=11$, the expansion matches the original, confirming the identity.", "diagram": null }
      ],
      "finalAnswer": "$a=2$, $p=2$, $q=3$, so $2x^{2}+8x+11 \\equiv 2(x+2)^{2}+3$."
    }
  },
  {
    "id": "gcse.algebra.identities-proof.q052",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Identities and argument",
    "subtopicId": "gcse.algebra.identities-proof",
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "values",
    "tags": ["identity", "completing the square", "fractions", "comparing coefficients"],
    "questionText": "Find the values of $a$ and $b$ such that $x^{2}-5x+7 \\equiv (x+a)^{2}+b$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "State the goal.", "workingLatex": "x^{2}-5x+7 \\equiv (x+a)^{2}+b", "explanation": "The expanded right-hand side must match the left for all $x$; the odd middle coefficient means $a$ and $b$ will be fractions.", "diagram": null },
        { "stepNumber": 2, "description": "Expand the general square.", "workingLatex": "(x+a)^{2} = x^{2}+2ax+a^{2}", "explanation": "This gives a middle term $2ax$ and constant $a^{2}$.", "diagram": null },
        { "stepNumber": 3, "description": "Add $b$.", "workingLatex": "(x+a)^{2}+b = x^{2}+2ax+(a^{2}+b)", "explanation": "The full constant term is $a^{2}+b$.", "diagram": null },
        { "stepNumber": 4, "description": "Compare the $x$ coefficients.", "workingLatex": "2a = -5", "explanation": "The coefficient of $x$ on the left is $-5$.", "diagram": null },
        { "stepNumber": 5, "description": "Solve for $a$.", "workingLatex": "a = -\\tfrac{5}{2}", "explanation": "Dividing $-5$ by $2$ gives the fraction $-\\tfrac{5}{2}$, which is half the middle coefficient.", "diagram": null },
        { "stepNumber": 6, "description": "Compare the constant terms.", "workingLatex": "a^{2}+b = 7", "explanation": "The constant on the left is $7$.", "diagram": null },
        { "stepNumber": 7, "description": "Compute $a^{2}$.", "workingLatex": "a^{2} = \\left(-\\tfrac{5}{2}\\right)^{2} = \\tfrac{25}{4}", "explanation": "Squaring the fraction gives $\\tfrac{25}{4}$.", "diagram": null },
        { "stepNumber": 8, "description": "Substitute into the constant equation.", "workingLatex": "\\tfrac{25}{4}+b = 7", "explanation": "We now solve for $b$.", "diagram": null },
        { "stepNumber": 9, "description": "Write 7 as a quarter fraction.", "workingLatex": "7 = \\tfrac{28}{4}", "explanation": "Using a common denominator of $4$ makes the subtraction straightforward.", "diagram": null },
        { "stepNumber": 10, "description": "Solve for $b$.", "workingLatex": "b = \\tfrac{28}{4}-\\tfrac{25}{4} = \\tfrac{3}{4}", "explanation": "Subtracting the fractions gives $b=\\tfrac{3}{4}$.", "diagram": null },
        { "stepNumber": 11, "description": "Write the completed form.", "workingLatex": "x^{2}-5x+7 \\equiv \\left(x-\\tfrac{5}{2}\\right)^{2}+\\tfrac{3}{4}", "explanation": "With $a=-\\tfrac{5}{2}$ the bracket is $\\left(x-\\tfrac{5}{2}\\right)$.", "diagram": null },
        { "stepNumber": 12, "description": "Begin the check.", "workingLatex": "\\left(x-\\tfrac{5}{2}\\right)^{2}+\\tfrac{3}{4}", "explanation": "Expanding should recover the original quadratic.", "diagram": null },
        { "stepNumber": 13, "description": "Expand the square.", "workingLatex": "x^{2}-5x+\\tfrac{25}{4}+\\tfrac{3}{4}", "explanation": "The middle term is $2\\times\\left(-\\tfrac{5}{2}\\right)x=-5x$ and the constant from the square is $\\tfrac{25}{4}$.", "diagram": null },
        { "stepNumber": 14, "description": "Combine the constants and conclude.", "workingLatex": "x^{2}-5x+7", "explanation": "Since $\\tfrac{25}{4}+\\tfrac{3}{4}=\\tfrac{28}{4}=7$, the expansion matches, confirming the identity.", "diagram": null }
      ],
      "finalAnswer": "$a=-\\tfrac{5}{2}$, $b=\\tfrac{3}{4}$."
    }
  },
  {
    "id": "gcse.algebra.identities-proof.q053",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Identities and argument",
    "subtopicId": "gcse.algebra.identities-proof",
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "values",
    "tags": ["identity", "completing the square", "fractions", "negative constant"],
    "questionText": "Find the values of $a$ and $b$ such that $x^{2}+3x+1 \\equiv (x+a)^{2}+b$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "State the goal.", "workingLatex": "x^{2}+3x+1 \\equiv (x+a)^{2}+b", "explanation": "We compare coefficients; the odd middle coefficient again produces fractions.", "diagram": null },
        { "stepNumber": 2, "description": "Expand the general square.", "workingLatex": "(x+a)^{2} = x^{2}+2ax+a^{2}", "explanation": "This gives the middle term $2ax$ and constant $a^{2}$.", "diagram": null },
        { "stepNumber": 3, "description": "Add $b$.", "workingLatex": "(x+a)^{2}+b = x^{2}+2ax+(a^{2}+b)", "explanation": "The full constant term is $a^{2}+b$.", "diagram": null },
        { "stepNumber": 4, "description": "Compare the $x$ coefficients.", "workingLatex": "2a = 3", "explanation": "The coefficient of $x$ on the left is $3$.", "diagram": null },
        { "stepNumber": 5, "description": "Solve for $a$.", "workingLatex": "a = \\tfrac{3}{2}", "explanation": "Half of $3$ is $\\tfrac{3}{2}$.", "diagram": null },
        { "stepNumber": 6, "description": "Compare the constant terms.", "workingLatex": "a^{2}+b = 1", "explanation": "The constant on the left is $1$.", "diagram": null },
        { "stepNumber": 7, "description": "Compute $a^{2}$.", "workingLatex": "a^{2} = \\left(\\tfrac{3}{2}\\right)^{2} = \\tfrac{9}{4}", "explanation": "Squaring the fraction gives $\\tfrac{9}{4}$.", "diagram": null },
        { "stepNumber": 8, "description": "Substitute into the constant equation.", "workingLatex": "\\tfrac{9}{4}+b = 1", "explanation": "We now solve for $b$.", "diagram": null },
        { "stepNumber": 9, "description": "Write 1 as a quarter fraction.", "workingLatex": "1 = \\tfrac{4}{4}", "explanation": "A common denominator of $4$ makes the subtraction clear.", "diagram": null },
        { "stepNumber": 10, "description": "Solve for $b$.", "workingLatex": "b = \\tfrac{4}{4}-\\tfrac{9}{4} = -\\tfrac{5}{4}", "explanation": "Subtracting gives a negative constant $b=-\\tfrac{5}{4}$.", "diagram": null },
        { "stepNumber": 11, "description": "Write the completed form.", "workingLatex": "x^{2}+3x+1 \\equiv \\left(x+\\tfrac{3}{2}\\right)^{2}-\\tfrac{5}{4}", "explanation": "With $a=\\tfrac{3}{2}$ and $b=-\\tfrac{5}{4}$ the identity is complete.", "diagram": null },
        { "stepNumber": 12, "description": "Begin the check.", "workingLatex": "\\left(x+\\tfrac{3}{2}\\right)^{2}-\\tfrac{5}{4}", "explanation": "Expanding should recover the original quadratic.", "diagram": null },
        { "stepNumber": 13, "description": "Expand the square.", "workingLatex": "x^{2}+3x+\\tfrac{9}{4}-\\tfrac{5}{4}", "explanation": "The middle term is $2\\times\\tfrac{3}{2}x=3x$ and the constant from the square is $\\tfrac{9}{4}$.", "diagram": null },
        { "stepNumber": 14, "description": "Combine the constants and conclude.", "workingLatex": "x^{2}+3x+1", "explanation": "Since $\\tfrac{9}{4}-\\tfrac{5}{4}=\\tfrac{4}{4}=1$, the expansion matches, confirming the identity.", "diagram": null }
      ],
      "finalAnswer": "$a=\\tfrac{3}{2}$, $b=-\\tfrac{5}{4}$."
    }
  },
  {
    "id": "gcse.algebra.identities-proof.q054",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Identities and argument",
    "subtopicId": "gcse.algebra.identities-proof",
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "values",
    "tags": ["identity", "completing the square", "leading coefficient", "negative term"],
    "questionText": "Find the values of $a$, $p$ and $q$ such that $3x^{2}-12x+7 \\equiv a(x+p)^{2}+q$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "State the goal.", "workingLatex": "3x^{2}-12x+7 \\equiv a(x+p)^{2}+q", "explanation": "We complete the square, first removing the leading coefficient from the variable terms.", "diagram": null },
        { "stepNumber": 2, "description": "Factor 3 from the $x^{2}$ and $x$ terms.", "workingLatex": "3(x^{2}-4x)+7", "explanation": "Factoring $3$ from just those terms leaves a bracket with leading coefficient $1$.", "diagram": null },
        { "stepNumber": 3, "description": "Look inside the bracket.", "workingLatex": "x^{2}-4x", "explanation": "We complete the square on this expression first.", "diagram": null },
        { "stepNumber": 4, "description": "Halve the coefficient of $x$.", "workingLatex": "\\tfrac{-4}{2} = -2", "explanation": "Half the middle coefficient gives the number inside the square.", "diagram": null },
        { "stepNumber": 5, "description": "Write the trial square.", "workingLatex": "(x-2)^{2} = x^{2}-4x+4", "explanation": "This reproduces $x^{2}-4x$ but adds an extra $+4$.", "diagram": null },
        { "stepNumber": 6, "description": "Correct for the extra constant.", "workingLatex": "x^{2}-4x = (x-2)^{2}-4", "explanation": "Subtracting the unwanted $4$ makes the square exact.", "diagram": null },
        { "stepNumber": 7, "description": "Substitute back.", "workingLatex": "3\\big[(x-2)^{2}-4\\big]+7", "explanation": "Replace $x^{2}-4x$ by its completed-square form.", "diagram": null },
        { "stepNumber": 8, "description": "Distribute the 3.", "workingLatex": "3(x-2)^{2}-12+7", "explanation": "The factor of $3$ multiplies both the square and the $-4$, giving $-12$.", "diagram": null },
        { "stepNumber": 9, "description": "Combine the constants.", "workingLatex": "3(x-2)^{2}-5", "explanation": "Since $-12+7=-5$, the constant outside is $-5$.", "diagram": null },
        { "stepNumber": 10, "description": "Read off the values.", "workingLatex": "a=3,\\; p=-2,\\; q=-5", "explanation": "Matching to $a(x+p)^{2}+q$ (with $p=-2$ inside the bracket) gives the constants.", "diagram": null },
        { "stepNumber": 11, "description": "Begin the check.", "workingLatex": "3(x-2)^{2}-5", "explanation": "Expanding should return the original quadratic.", "diagram": null },
        { "stepNumber": 12, "description": "Expand the square.", "workingLatex": "3(x^{2}-4x+4)-5", "explanation": "First expand $(x-2)^{2}$ inside the bracket.", "diagram": null },
        { "stepNumber": 13, "description": "Distribute the 3.", "workingLatex": "3x^{2}-12x+12-5", "explanation": "Multiplying through by $3$ gives these terms.", "diagram": null },
        { "stepNumber": 14, "description": "Combine constants and conclude.", "workingLatex": "3x^{2}-12x+7", "explanation": "Since $12-5=7$, the expansion matches the original, confirming the identity.", "diagram": null }
      ],
      "finalAnswer": "$a=3$, $p=-2$, $q=-5$, so $3x^{2}-12x+7 \\equiv 3(x-2)^{2}-5$."
    }
  },
  {
    "id": "gcse.algebra.identities-proof.q055",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Identities and argument",
    "subtopicId": "gcse.algebra.identities-proof",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "values",
    "tags": ["identity", "completing the square", "leading coefficient", "fractions"],
    "questionText": "Find the values of $a$, $p$ and $q$ such that $2x^{2}-6x+5 \\equiv a(x+p)^{2}+q$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "State the goal.", "workingLatex": "2x^{2}-6x+5 \\equiv a(x+p)^{2}+q", "explanation": "We complete the square; the odd coefficients after factoring will produce fractions.", "diagram": null },
        { "stepNumber": 2, "description": "Factor 2 from the variable terms.", "workingLatex": "2(x^{2}-3x)+5", "explanation": "Factoring $2$ from the $x^{2}$ and $x$ terms leaves a unit leading coefficient inside.", "diagram": null },
        { "stepNumber": 3, "description": "Look inside the bracket.", "workingLatex": "x^{2}-3x", "explanation": "Complete the square on this first.", "diagram": null },
        { "stepNumber": 4, "description": "Halve the coefficient of $x$.", "workingLatex": "\\tfrac{-3}{2} = -\\tfrac{3}{2}", "explanation": "Half the middle coefficient gives the fraction inside the square.", "diagram": null },
        { "stepNumber": 5, "description": "Write the trial square.", "workingLatex": "\\left(x-\\tfrac{3}{2}\\right)^{2} = x^{2}-3x+\\tfrac{9}{4}", "explanation": "This reproduces $x^{2}-3x$ but adds $\\tfrac{9}{4}$.", "diagram": null },
        { "stepNumber": 6, "description": "Correct for the extra constant.", "workingLatex": "x^{2}-3x = \\left(x-\\tfrac{3}{2}\\right)^{2}-\\tfrac{9}{4}", "explanation": "Subtracting $\\tfrac{9}{4}$ makes the square exactly equal to $x^{2}-3x$.", "diagram": null },
        { "stepNumber": 7, "description": "Substitute back.", "workingLatex": "2\\left[\\left(x-\\tfrac{3}{2}\\right)^{2}-\\tfrac{9}{4}\\right]+5", "explanation": "Replace $x^{2}-3x$ with its completed-square form.", "diagram": null },
        { "stepNumber": 8, "description": "Distribute the 2.", "workingLatex": "2\\left(x-\\tfrac{3}{2}\\right)^{2}-\\tfrac{18}{4}+5", "explanation": "The factor of $2$ multiplies the $-\\tfrac{9}{4}$ to give $-\\tfrac{18}{4}$.", "diagram": null },
        { "stepNumber": 9, "description": "Simplify the fraction.", "workingLatex": "-\\tfrac{18}{4} = -\\tfrac{9}{2}", "explanation": "Simplifying keeps the arithmetic manageable.", "diagram": null },
        { "stepNumber": 10, "description": "Write 5 with denominator 2.", "workingLatex": "5 = \\tfrac{10}{2}", "explanation": "A common denominator lets us combine the constants.", "diagram": null },
        { "stepNumber": 11, "description": "Combine the constants.", "workingLatex": "-\\tfrac{9}{2}+\\tfrac{10}{2} = \\tfrac{1}{2}", "explanation": "The constant outside becomes $\\tfrac{1}{2}$.", "diagram": null },
        { "stepNumber": 12, "description": "Write the completed form and read off values.", "workingLatex": "2\\left(x-\\tfrac{3}{2}\\right)^{2}+\\tfrac{1}{2}", "explanation": "So $a=2$, $p=-\\tfrac{3}{2}$ and $q=\\tfrac{1}{2}$.", "diagram": null },
        { "stepNumber": 13, "description": "Begin the check.", "workingLatex": "2\\left(x-\\tfrac{3}{2}\\right)^{2}+\\tfrac{1}{2}", "explanation": "Expanding should recover the original quadratic.", "diagram": null },
        { "stepNumber": 14, "description": "Expand the square and distribute.", "workingLatex": "2\\left(x^{2}-3x+\\tfrac{9}{4}\\right)+\\tfrac{1}{2} = 2x^{2}-6x+\\tfrac{9}{2}+\\tfrac{1}{2}", "explanation": "Multiplying through by $2$ gives $\\tfrac{9}{2}$ from the square's constant.", "diagram": null },
        { "stepNumber": 15, "description": "Combine constants and conclude.", "workingLatex": "2x^{2}-6x+5", "explanation": "Since $\\tfrac{9}{2}+\\tfrac{1}{2}=\\tfrac{10}{2}=5$, the expansion matches, confirming the identity.", "diagram": null }
      ],
      "finalAnswer": "$a=2$, $p=-\\tfrac{3}{2}$, $q=\\tfrac{1}{2}$, so $2x^{2}-6x+5 \\equiv 2\\left(x-\\tfrac{3}{2}\\right)^{2}+\\tfrac{1}{2}$."
    }
  },
  {
    "id": "gcse.algebra.identities-proof.q056",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Identities and argument",
    "subtopicId": "gcse.algebra.identities-proof",
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "proof",
    "tags": ["identity", "expanding", "cubic", "proof"],
    "questionText": "Prove that $(x+2)(x^{2}+3x+4) \\equiv x^{3}+5x^{2}+10x+8$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "State the plan.", "workingLatex": "(x+2)(x^{2}+3x+4) \\equiv x^{3}+5x^{2}+10x+8", "explanation": "We expand the product of a linear and a quadratic factor, then collect like terms to match the cubic.", "diagram": null },
        { "stepNumber": 2, "description": "Multiply $x$ through the quadratic.", "workingLatex": "x(x^{2}+3x+4) = x^{3}+3x^{2}+4x", "explanation": "The first term $x$ multiplies every term in the quadratic.", "diagram": null },
        { "stepNumber": 3, "description": "Multiply 2 through the quadratic.", "workingLatex": "2(x^{2}+3x+4) = 2x^{2}+6x+8", "explanation": "The second term $2$ multiplies every term in the quadratic.", "diagram": null },
        { "stepNumber": 4, "description": "Write all six products together.", "workingLatex": "x^{3}+3x^{2}+4x+2x^{2}+6x+8", "explanation": "Combining both partial expansions keeps every term visible before collecting.", "diagram": null },
        { "stepNumber": 5, "description": "Identify the cubic term.", "workingLatex": "x^{3}", "explanation": "There is only one $x^{3}$ term, so it stays as it is.", "diagram": null },
        { "stepNumber": 6, "description": "Collect the $x^{2}$ terms.", "workingLatex": "3x^{2}+2x^{2} = 5x^{2}", "explanation": "The like terms $3x^{2}$ and $2x^{2}$ add to $5x^{2}$.", "diagram": null },
        { "stepNumber": 7, "description": "Collect the $x$ terms.", "workingLatex": "4x+6x = 10x", "explanation": "The like terms $4x$ and $6x$ add to $10x$.", "diagram": null },
        { "stepNumber": 8, "description": "Identify the constant.", "workingLatex": "8", "explanation": "The only constant term is $8$.", "diagram": null },
        { "stepNumber": 9, "description": "Write the collected expression.", "workingLatex": "x^{3}+5x^{2}+10x+8", "explanation": "Putting the collected terms in descending order gives the simplified cubic.", "diagram": null },
        { "stepNumber": 10, "description": "Compare both sides.", "workingLatex": "x^{3}+5x^{2}+10x+8 = x^{3}+5x^{2}+10x+8", "explanation": "The expansion matches the right-hand side exactly.", "diagram": null },
        { "stepNumber": 11, "description": "Test a value as an extra check.", "workingLatex": "x=1:\\; (3)(8)=24,\\; 1+5+10+8=24", "explanation": "Substituting $x=1$ gives $24$ on both sides, supporting the identity.", "diagram": null },
        { "stepNumber": 12, "description": "Interpret the matching coefficients.", "workingLatex": "\\text{all coefficients agree}", "explanation": "Because the cubic, quadratic, linear and constant terms all match, the two expressions take the same value for every $x$, which is exactly what an identity requires.", "diagram": null },
        { "stepNumber": 13, "description": "State the conclusion.", "workingLatex": "(x+2)(x^{2}+3x+4) \\equiv x^{3}+5x^{2}+10x+8", "explanation": "The identity holds for all $x$.", "diagram": null }
      ],
      "finalAnswer": "$(x+2)(x^{2}+3x+4) \\equiv x^{3}+5x^{2}+10x+8$ is proved."
    }
  },
  {
    "id": "gcse.algebra.identities-proof.q057",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Identities and argument",
    "subtopicId": "gcse.algebra.identities-proof",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "values",
    "tags": ["identity", "comparing coefficients", "cubic", "constants"],
    "questionText": "Given that $(x+1)(x^{2}+ax+b) \\equiv x^{3}+4x^{2}+5x+2$, find the values of $a$ and $b$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "State the plan.", "workingLatex": "(x+1)(x^{2}+ax+b) \\equiv x^{3}+4x^{2}+5x+2", "explanation": "We expand the left-hand side in terms of $a$ and $b$, then compare coefficients with the given cubic.", "diagram": null },
        { "stepNumber": 2, "description": "Multiply $x$ through the quadratic.", "workingLatex": "x(x^{2}+ax+b) = x^{3}+ax^{2}+bx", "explanation": "The $x$ multiplies each term of the quadratic.", "diagram": null },
        { "stepNumber": 3, "description": "Multiply 1 through the quadratic.", "workingLatex": "1(x^{2}+ax+b) = x^{2}+ax+b", "explanation": "The $+1$ simply copies the quadratic.", "diagram": null },
        { "stepNumber": 4, "description": "Combine the two parts.", "workingLatex": "x^{3}+ax^{2}+bx+x^{2}+ax+b", "explanation": "All terms are written out before collecting.", "diagram": null },
        { "stepNumber": 5, "description": "Collect the $x^{2}$ terms.", "workingLatex": "(a+1)x^{2}", "explanation": "The like terms $ax^{2}$ and $x^{2}$ combine to $(a+1)x^{2}$.", "diagram": null },
        { "stepNumber": 6, "description": "Collect the $x$ terms.", "workingLatex": "(a+b)x", "explanation": "The like terms $bx$ and $ax$ combine to $(a+b)x$.", "diagram": null },
        { "stepNumber": 7, "description": "Write the fully expanded form.", "workingLatex": "x^{3}+(a+1)x^{2}+(a+b)x+b", "explanation": "This is the general expansion in terms of $a$ and $b$.", "diagram": null },
        { "stepNumber": 8, "description": "Compare the $x^{2}$ coefficients.", "workingLatex": "a+1 = 4", "explanation": "The coefficient of $x^{2}$ on the right is $4$.", "diagram": null },
        { "stepNumber": 9, "description": "Solve for $a$.", "workingLatex": "a = 3", "explanation": "Subtracting $1$ gives $a=3$.", "diagram": null },
        { "stepNumber": 10, "description": "Compare the constant terms.", "workingLatex": "b = 2", "explanation": "The constant on the right is $2$, and the constant on the left is $b$.", "diagram": null },
        { "stepNumber": 11, "description": "Check the $x$ coefficient.", "workingLatex": "a+b = 3+2 = 5", "explanation": "The middle coefficient on the right is $5$, and $a+b=5$ agrees, confirming consistency.", "diagram": null },
        { "stepNumber": 12, "description": "Verify by full expansion.", "workingLatex": "(x+1)(x^{2}+3x+2) = x^{3}+4x^{2}+5x+2", "explanation": "Substituting $a=3$, $b=2$ reproduces the given cubic.", "diagram": null },
        { "stepNumber": 13, "description": "State the conclusion.", "workingLatex": "a=3,\\; b=2", "explanation": "These are the only values that make the identity hold for all $x$.", "diagram": null }
      ],
      "finalAnswer": "$a=3$, $b=2$."
    }
  },
  {
    "id": "gcse.algebra.identities-proof.q058",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Identities and argument",
    "subtopicId": "gcse.algebra.identities-proof",
    "difficulty": "Hard",
    "marks": 4,
    "answerType": "proof",
    "tags": ["proof", "number proof", "consecutive integers", "multiple of 3"],
    "questionText": "Prove that the sum of any three consecutive integers is a multiple of 3.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Understand the claim.", "workingLatex": "n+(n+1)+(n+2) = ?", "explanation": "We must show that adding any integer to the next two always gives a multiple of $3$, so we argue with a general integer.", "diagram": null },
        { "stepNumber": 2, "description": "Represent the first integer.", "workingLatex": "n", "explanation": "Let $n$ be any integer; a letter keeps the argument general.", "diagram": null },
        { "stepNumber": 3, "description": "Represent the next two integers.", "workingLatex": "n+1,\\; n+2", "explanation": "The two integers after $n$ are $n+1$ and $n+2$.", "diagram": null },
        { "stepNumber": 4, "description": "Write the sum.", "workingLatex": "n+(n+1)+(n+2)", "explanation": "We add the three consecutive integers together.", "diagram": null },
        { "stepNumber": 5, "description": "Collect the $n$ terms.", "workingLatex": "3n + (1+2)", "explanation": "There are three $n$ terms and the constants $1$ and $2$ to combine.", "diagram": null },
        { "stepNumber": 6, "description": "Simplify the constants.", "workingLatex": "3n+3", "explanation": "Since $1+2=3$, the sum simplifies to $3n+3$.", "diagram": null },
        { "stepNumber": 7, "description": "Factor out 3.", "workingLatex": "3(n+1)", "explanation": "Taking a common factor of $3$ shows the sum is $3$ times an integer.", "diagram": null },
        { "stepNumber": 8, "description": "Confirm the factor is an integer.", "workingLatex": "n+1 \\in \\mathbb{Z}", "explanation": "Because $n$ is an integer, $n+1$ is too, so the factored form is valid.", "diagram": null },
        { "stepNumber": 9, "description": "Recall the meaning of a multiple of 3.", "workingLatex": "3 \\times (n+1)", "explanation": "A number is a multiple of $3$ exactly when it can be written as $3$ times an integer.", "diagram": null },
        { "stepNumber": 10, "description": "Interpret the result.", "workingLatex": "3(n+1)", "explanation": "Notice the sum equals $3$ times the middle integer $n+1$ — a neat way to see the result.", "diagram": null },
        { "stepNumber": 11, "description": "Test a value as a check.", "workingLatex": "4+5+6 = 15 = 3\\times5", "explanation": "For example, $4,5,6$ sum to $15$, which is $3$ times the middle value $5$.", "diagram": null },
        { "stepNumber": 12, "description": "Confirm the argument is general.", "workingLatex": "n\\;\\text{arbitrary}", "explanation": "No particular value of $n$ was assumed, so the result applies to every possible starting integer.", "diagram": null },
        { "stepNumber": 13, "description": "State the conclusion.", "workingLatex": "n+(n+1)+(n+2)=3(n+1)", "explanation": "The sum is always $3$ times an integer, so the sum of three consecutive integers is always a multiple of $3$.", "diagram": null }
      ],
      "finalAnswer": "The sum is $3(n+1)$, which is always a multiple of $3$."
    }
  },
  {
    "id": "gcse.algebra.identities-proof.q059",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Identities and argument",
    "subtopicId": "gcse.algebra.identities-proof",
    "difficulty": "Hard",
    "marks": 4,
    "answerType": "proof",
    "tags": ["proof", "number proof", "even numbers", "multiple of 4"],
    "questionText": "Prove that the product of any two even numbers is a multiple of 4.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Understand the claim.", "workingLatex": "(2m)(2n) = ?", "explanation": "We must show that multiplying any two even numbers always gives a multiple of $4$.", "diagram": null },
        { "stepNumber": 2, "description": "Represent the first even number.", "workingLatex": "2m", "explanation": "Every even number is a multiple of $2$, so the first is $2m$ for some integer $m$.", "diagram": null },
        { "stepNumber": 3, "description": "Represent the second even number.", "workingLatex": "2n", "explanation": "We use a different letter $n$ because the two even numbers need not be equal.", "diagram": null },
        { "stepNumber": 4, "description": "Write the product.", "workingLatex": "(2m)(2n)", "explanation": "We multiply the two even numbers.", "diagram": null },
        { "stepNumber": 5, "description": "Multiply the numerical factors.", "workingLatex": "2\\times2 = 4", "explanation": "The two factors of $2$ multiply to give $4$.", "diagram": null },
        { "stepNumber": 6, "description": "Combine with the variables.", "workingLatex": "4mn", "explanation": "The product simplifies to $4mn$.", "diagram": null },
        { "stepNumber": 7, "description": "Factor to reveal a multiple of 4.", "workingLatex": "4(mn)", "explanation": "Writing it as $4$ times $mn$ shows the factor of $4$ explicitly.", "diagram": null },
        { "stepNumber": 8, "description": "Confirm the factor is an integer.", "workingLatex": "mn \\in \\mathbb{Z}", "explanation": "Since $m$ and $n$ are integers, their product $mn$ is an integer.", "diagram": null },
        { "stepNumber": 9, "description": "Recall the meaning of a multiple of 4.", "workingLatex": "4 \\times (mn)", "explanation": "A number is a multiple of $4$ exactly when it can be written as $4$ times an integer.", "diagram": null },
        { "stepNumber": 10, "description": "See where the factor of 4 comes from.", "workingLatex": "2\\times2 = 4", "explanation": "Each even number contributes one factor of $2$, so together they always contribute a factor of $2\\times2=4$.", "diagram": null },
        { "stepNumber": 11, "description": "Confirm the argument is general.", "workingLatex": "m,n\\;\\text{arbitrary}", "explanation": "No particular even numbers were chosen, so the result holds for any pair of even numbers.", "diagram": null },
        { "stepNumber": 12, "description": "Test a value as a check.", "workingLatex": "6\\times10 = 60 = 4\\times15", "explanation": "For example, $6$ and $10$ multiply to $60$, which is $4\\times15$.", "diagram": null },
        { "stepNumber": 13, "description": "State the conclusion.", "workingLatex": "(2m)(2n)=4mn", "explanation": "The product is always $4$ times an integer, so the product of two even numbers is always a multiple of $4$.", "diagram": null }
      ],
      "finalAnswer": "The product is $4mn$, which is always a multiple of $4$."
    }
  },
  {
    "id": "gcse.algebra.identities-proof.q060",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Identities and argument",
    "subtopicId": "gcse.algebra.identities-proof",
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "proof",
    "tags": ["proof", "number proof", "consecutive integers", "odd numbers"],
    "questionText": "Prove that the difference between the squares of any two consecutive integers is always odd.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Understand the claim.", "workingLatex": "(n+1)^{2}-n^{2} = ?", "explanation": "We must show that subtracting the square of an integer from the square of the next integer always gives an odd number.", "diagram": null },
        { "stepNumber": 2, "description": "Represent the two consecutive integers.", "workingLatex": "n \\;\\text{and}\\; n+1", "explanation": "Let $n$ be any integer; the next integer is $n+1$.", "diagram": null },
        { "stepNumber": 3, "description": "Write the difference of squares.", "workingLatex": "(n+1)^{2}-n^{2}", "explanation": "We take the larger square minus the smaller square.", "diagram": null },
        { "stepNumber": 4, "description": "Expand the larger square.", "workingLatex": "(n+1)^{2} = n^{2}+2n+1", "explanation": "Squaring $(n+1)$ gives these three terms.", "diagram": null },
        { "stepNumber": 5, "description": "Substitute the expansion.", "workingLatex": "(n^{2}+2n+1)-n^{2}", "explanation": "We replace $(n+1)^{2}$ by its expanded form.", "diagram": null },
        { "stepNumber": 6, "description": "Cancel the squared terms.", "workingLatex": "n^{2}-n^{2} = 0", "explanation": "The two $n^{2}$ terms cancel, removing the highest power.", "diagram": null },
        { "stepNumber": 7, "description": "Write what remains.", "workingLatex": "2n+1", "explanation": "Only the middle term and constant survive.", "diagram": null },
        { "stepNumber": 8, "description": "Recall the meaning of even.", "workingLatex": "2n = 2\\times n", "explanation": "The term $2n$ is a multiple of $2$, so it is even.", "diagram": null },
        { "stepNumber": 9, "description": "Interpret the extra 1.", "workingLatex": "2n+1", "explanation": "Adding $1$ to an even number gives the next number up, which is odd.", "diagram": null },
        { "stepNumber": 10, "description": "Match the definition of odd.", "workingLatex": "\\text{odd} = 2k+1", "explanation": "An odd number is exactly one of the form $2k+1$; here $2n+1$ fits with $k=n$.", "diagram": null },
        { "stepNumber": 11, "description": "Test a value as a check.", "workingLatex": "8^{2}-7^{2} = 64-49 = 15", "explanation": "For example, $7$ and $8$ give a difference of $15$, which is odd.", "diagram": null },
        { "stepNumber": 12, "description": "Note the general validity.", "workingLatex": "(n+1)^{2}-n^{2} = 2n+1", "explanation": "No assumption about $n$ was made, so the argument holds for every integer.", "diagram": null },
        { "stepNumber": 13, "description": "State the conclusion.", "workingLatex": "2n+1\\;\\text{is odd}", "explanation": "The difference of the squares of two consecutive integers is always odd.", "diagram": null }
      ],
      "finalAnswer": "The difference is $2n+1$, which is odd for every integer $n$."
    }
  },
  {
    "id": "gcse.algebra.identities-proof.q061",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Identities and argument",
    "subtopicId": "gcse.algebra.identities-proof",
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "proof",
    "tags": ["proof", "number proof", "even numbers", "multiple of 8"],
    "questionText": "Prove that the product of two consecutive even numbers is always a multiple of 8.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Understand the claim.", "workingLatex": "(2n)(2n+2) = ?", "explanation": "We must show that multiplying any even number by the next even number always gives a multiple of $8$.", "diagram": null },
        { "stepNumber": 2, "description": "Represent the first even number.", "workingLatex": "2n", "explanation": "Every even number is a multiple of $2$, so we write the first as $2n$.", "diagram": null },
        { "stepNumber": 3, "description": "Represent the next even number.", "workingLatex": "2n+2", "explanation": "The next even number is $2$ more than $2n$.", "diagram": null },
        { "stepNumber": 4, "description": "Write the product.", "workingLatex": "(2n)(2n+2)", "explanation": "We multiply the two consecutive even numbers.", "diagram": null },
        { "stepNumber": 5, "description": "Factor 2 out of the second bracket.", "workingLatex": "2n \\times 2(n+1)", "explanation": "The factor $2n+2$ has a common factor of $2$, which we take out to expose the factors of $2$.", "diagram": null },
        { "stepNumber": 6, "description": "Collect the numerical factors.", "workingLatex": "4n(n+1)", "explanation": "The two factors of $2$ multiply to $4$, leaving $n(n+1)$.", "diagram": null },
        { "stepNumber": 7, "description": "Recognise a product of consecutive integers.", "workingLatex": "n(n+1)", "explanation": "This is the product of two consecutive integers.", "diagram": null },
        { "stepNumber": 8, "description": "Use the fact that this product is even.", "workingLatex": "n(n+1) = 2k", "explanation": "Of any two consecutive integers one is even, so their product is always even and can be written as $2k$ for some integer $k$.", "diagram": null },
        { "stepNumber": 9, "description": "Substitute back.", "workingLatex": "4n(n+1) = 4\\times 2k", "explanation": "Replacing $n(n+1)$ by $2k$ shows a second factor of $2$ appears.", "diagram": null },
        { "stepNumber": 10, "description": "Simplify.", "workingLatex": "8k", "explanation": "Multiplying $4$ by $2k$ gives $8k$.", "diagram": null },
        { "stepNumber": 11, "description": "Recall the meaning of a multiple of 8.", "workingLatex": "8 \\times k", "explanation": "A number is a multiple of $8$ exactly when it can be written as $8$ times an integer.", "diagram": null },
        { "stepNumber": 12, "description": "Confirm the factor is an integer.", "workingLatex": "k \\in \\mathbb{Z}", "explanation": "Since $n(n+1)=2k$ with $n$ an integer, $k$ is an integer, so the factored form is valid.", "diagram": null },
        { "stepNumber": 13, "description": "Test a value as a check.", "workingLatex": "6\\times8 = 48 = 8\\times6", "explanation": "For example, the consecutive even numbers $6$ and $8$ multiply to $48=8\\times6$.", "diagram": null },
        { "stepNumber": 14, "description": "State the conclusion.", "workingLatex": "(2n)(2n+2)=8k", "explanation": "The product is always $8$ times an integer, so it is always a multiple of $8$.", "diagram": null }
      ],
      "finalAnswer": "The product is $4n(n+1)=8k$, which is always a multiple of $8$."
    }
  },
  {
    "id": "gcse.algebra.identities-proof.q062",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Identities and argument",
    "subtopicId": "gcse.algebra.identities-proof",
    "difficulty": "Hard",
    "marks": 4,
    "answerType": "text",
    "tags": ["disproof", "counterexample", "prime numbers", "reasoning"],
    "questionText": "Kofi says: \"The sum of two prime numbers is always even.\" Show that Kofi is wrong.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "State the claim being tested.", "workingLatex": "\\text{prime}+\\text{prime}\\;\\text{is always even?}", "explanation": "We are asked to decide whether adding any two primes must give an even total.", "diagram": null },
        { "stepNumber": 2, "description": "Choose the right strategy.", "workingLatex": "\\text{one counterexample suffices}", "explanation": "A statement claiming something is *always* true is disproved by a single example where it fails.", "diagram": null },
        { "stepNumber": 3, "description": "Recall what prime means.", "workingLatex": "\\text{prime: exactly two factors}", "explanation": "A prime number has exactly two factors, $1$ and itself; examples are $2,3,5,7,11$.", "diagram": null },
        { "stepNumber": 4, "description": "Notice most primes are odd.", "workingLatex": "3,5,7,11,\\dots\\;\\text{are odd}", "explanation": "Apart from one special case, every prime is an odd number.", "diagram": null },
        { "stepNumber": 5, "description": "See why the claim looks plausible.", "workingLatex": "\\text{odd}+\\text{odd}=\\text{even}", "explanation": "Adding two odd numbers always gives an even number, so most prime pairs do give an even sum.", "diagram": null },
        { "stepNumber": 6, "description": "Identify the exceptional prime.", "workingLatex": "2\\;\\text{is the only even prime}", "explanation": "The number $2$ is prime and even; using it can change the parity of the sum.", "diagram": null },
        { "stepNumber": 7, "description": "Plan a counterexample using 2.", "workingLatex": "2 + (\\text{odd prime})", "explanation": "Adding the even prime $2$ to an odd prime should give an odd total.", "diagram": null },
        { "stepNumber": 8, "description": "Choose specific primes.", "workingLatex": "2 \\;\\text{and}\\; 3", "explanation": "Both $2$ and $3$ are prime numbers.", "diagram": null },
        { "stepNumber": 9, "description": "Compute the sum.", "workingLatex": "2+3 = 5", "explanation": "Adding the two chosen primes gives $5$.", "diagram": null },
        { "stepNumber": 10, "description": "Check the parity of the result.", "workingLatex": "5 = 2\\times2+1", "explanation": "$5$ is odd, since it is one more than an even number.", "diagram": null },
        { "stepNumber": 11, "description": "Compare with the claim.", "workingLatex": "5\\;\\text{is not even}", "explanation": "The sum $5$ is odd, contradicting the claim that the sum must be even.", "diagram": null },
        { "stepNumber": 12, "description": "Explain why one example is enough.", "workingLatex": "\\text{'always' broken by one case}", "explanation": "The claim uses the word 'always', so a single pair that fails is enough to show the whole statement is false — we do not need to test every pair.", "diagram": null },
        { "stepNumber": 13, "description": "State the conclusion.", "workingLatex": "2+3=5\\;\\text{(odd)}", "explanation": "The pair $2$ and $3$ is a counterexample, so Kofi's statement is false.", "diagram": null }
      ],
      "finalAnswer": "Counterexample: $2$ and $3$ are both prime but $2+3=5$, which is odd, so the claim is false."
    }
  },
  {
    "id": "gcse.algebra.identities-proof.q063",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Identities and argument",
    "subtopicId": "gcse.algebra.identities-proof",
    "difficulty": "Hard",
    "marks": 4,
    "answerType": "text",
    "tags": ["disproof", "counterexample", "prime numbers", "reasoning"],
    "questionText": "A student claims that $2n+1$ is a prime number for every positive integer $n$. Disprove this claim.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "State the claim being tested.", "workingLatex": "2n+1\\;\\text{is prime for all }n\\ge1?", "explanation": "The claim says every value of $2n+1$ (an odd number) is prime.", "diagram": null },
        { "stepNumber": 2, "description": "Choose the right strategy.", "workingLatex": "\\text{one counterexample suffices}", "explanation": "To disprove an 'always' statement we only need one value of $n$ where it fails.", "diagram": null },
        { "stepNumber": 3, "description": "Recall what prime means.", "workingLatex": "\\text{prime: exactly two factors}", "explanation": "A prime has exactly two factors; a number with more factors is not prime.", "diagram": null },
        { "stepNumber": 4, "description": "Test $n=1$.", "workingLatex": "2(1)+1 = 3", "explanation": "$3$ is prime, so the claim holds here.", "diagram": null },
        { "stepNumber": 5, "description": "Test $n=2$.", "workingLatex": "2(2)+1 = 5", "explanation": "$5$ is prime, so the claim still holds.", "diagram": null },
        { "stepNumber": 6, "description": "Test $n=3$.", "workingLatex": "2(3)+1 = 7", "explanation": "$7$ is prime as well.", "diagram": null },
        { "stepNumber": 7, "description": "Notice the danger of assuming a pattern.", "workingLatex": "3,5,7\\;\\text{prime so far}", "explanation": "Several successes do not prove a statement; we must keep checking.", "diagram": null },
        { "stepNumber": 8, "description": "Test $n=4$.", "workingLatex": "2(4)+1 = 9", "explanation": "This gives $9$, which we examine for factors.", "diagram": null },
        { "stepNumber": 9, "description": "Factorise the result.", "workingLatex": "9 = 3\\times3", "explanation": "$9$ can be written as $3\\times3$.", "diagram": null },
        { "stepNumber": 10, "description": "Count the factors.", "workingLatex": "1,3,9", "explanation": "$9$ has factors $1$, $3$ and $9$ — three factors, more than two.", "diagram": null },
        { "stepNumber": 11, "description": "Conclude that 9 is not prime.", "workingLatex": "9\\;\\text{is not prime}", "explanation": "Because $9$ has a factor other than $1$ and itself, it is composite.", "diagram": null },
        { "stepNumber": 12, "description": "Explain why one example is enough.", "workingLatex": "\\text{'for all' broken by one case}", "explanation": "The claim says the result holds for every $n$, so a single failing value is enough to disprove it.", "diagram": null },
        { "stepNumber": 13, "description": "State the conclusion.", "workingLatex": "n=4:\\;2n+1=9\\;\\text{(not prime)}", "explanation": "The value $n=4$ is a counterexample, so the claim is false.", "diagram": null }
      ],
      "finalAnswer": "Counterexample: when $n=4$, $2n+1=9=3\\times3$, which is not prime, so the claim is false."
    }
  },
  {
    "id": "gcse.algebra.identities-proof.q064",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Identities and argument",
    "subtopicId": "gcse.algebra.identities-proof",
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "proof",
    "tags": ["proof", "number proof", "consecutive integers", "odd numbers"],
    "questionText": "Prove that the sum of the squares of two consecutive integers is always odd.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Understand the claim.", "workingLatex": "n^{2}+(n+1)^{2} = ?", "explanation": "We must show that adding the square of an integer to the square of the next integer always gives an odd number.", "diagram": null },
        { "stepNumber": 2, "description": "Represent the two consecutive integers.", "workingLatex": "n \\;\\text{and}\\; n+1", "explanation": "Let $n$ be any integer; the next integer is $n+1$.", "diagram": null },
        { "stepNumber": 3, "description": "Write the sum of squares.", "workingLatex": "n^{2}+(n+1)^{2}", "explanation": "We add the squares of the two consecutive integers.", "diagram": null },
        { "stepNumber": 4, "description": "Expand the second square.", "workingLatex": "(n+1)^{2} = n^{2}+2n+1", "explanation": "Squaring $(n+1)$ gives these three terms.", "diagram": null },
        { "stepNumber": 5, "description": "Substitute the expansion.", "workingLatex": "n^{2}+n^{2}+2n+1", "explanation": "We replace $(n+1)^{2}$ by its expanded form and keep the first $n^{2}$.", "diagram": null },
        { "stepNumber": 6, "description": "Collect like terms.", "workingLatex": "2n^{2}+2n+1", "explanation": "The two $n^{2}$ terms combine to $2n^{2}$.", "diagram": null },
        { "stepNumber": 7, "description": "Factor 2 from the first two terms.", "workingLatex": "2(n^{2}+n)+1", "explanation": "Taking out a factor of $2$ isolates the even part from the $+1$.", "diagram": null },
        { "stepNumber": 8, "description": "Confirm the bracket is an integer.", "workingLatex": "n^{2}+n \\in \\mathbb{Z}", "explanation": "Since $n$ is an integer, $n^{2}+n$ is an integer.", "diagram": null },
        { "stepNumber": 9, "description": "Identify the even part.", "workingLatex": "2(n^{2}+n)\\;\\text{is even}", "explanation": "Any integer multiplied by $2$ is even.", "diagram": null },
        { "stepNumber": 10, "description": "Interpret the extra 1.", "workingLatex": "2(n^{2}+n)+1", "explanation": "Adding $1$ to an even number gives an odd number.", "diagram": null },
        { "stepNumber": 11, "description": "Match the definition of odd.", "workingLatex": "\\text{odd} = 2k+1", "explanation": "An odd number has the form $2k+1$; here $k=n^{2}+n$.", "diagram": null },
        { "stepNumber": 12, "description": "Test a value as a check.", "workingLatex": "3^{2}+4^{2} = 9+16 = 25", "explanation": "For example, $3$ and $4$ give $25$, which is odd.", "diagram": null },
        { "stepNumber": 13, "description": "State the conclusion.", "workingLatex": "n^{2}+(n+1)^{2}=2(n^{2}+n)+1", "explanation": "The sum is always one more than an even number, so it is always odd.", "diagram": null }
      ],
      "finalAnswer": "The sum is $2(n^{2}+n)+1$, which is odd for every integer $n$."
    }
  },
  {
    "id": "gcse.algebra.identities-proof.q065",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Identities and argument",
    "subtopicId": "gcse.algebra.identities-proof",
    "difficulty": "Hard",
    "marks": 4,
    "answerType": "proof",
    "tags": ["proof", "number proof", "odd numbers", "square"],
    "questionText": "Prove that the square of any odd number is odd.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Understand the claim.", "workingLatex": "(2n+1)^{2} = ?", "explanation": "We must show that squaring any odd number always gives an odd result.", "diagram": null },
        { "stepNumber": 2, "description": "Represent an odd number.", "workingLatex": "2n+1", "explanation": "Every odd number is one more than an even number, so it has the form $2n+1$.", "diagram": null },
        { "stepNumber": 3, "description": "Write its square.", "workingLatex": "(2n+1)^{2}", "explanation": "We square the general odd number.", "diagram": null },
        { "stepNumber": 4, "description": "Rewrite the square as a product.", "workingLatex": "(2n+1)(2n+1)", "explanation": "Squaring means multiplying the expression by itself.", "diagram": null },
        { "stepNumber": 5, "description": "Expand using FOIL.", "workingLatex": "4n^{2}+2n+2n+1", "explanation": "Multiplying each pair of terms gives these four products.", "diagram": null },
        { "stepNumber": 6, "description": "Collect like terms.", "workingLatex": "4n^{2}+4n+1", "explanation": "The two $2n$ terms combine to $4n$.", "diagram": null },
        { "stepNumber": 7, "description": "Factor 2 from the first two terms.", "workingLatex": "2(2n^{2}+2n)+1", "explanation": "Taking out a factor of $2$ separates the even part from the $+1$.", "diagram": null },
        { "stepNumber": 8, "description": "Confirm the bracket is an integer.", "workingLatex": "2n^{2}+2n \\in \\mathbb{Z}", "explanation": "Since $n$ is an integer, $2n^{2}+2n$ is an integer.", "diagram": null },
        { "stepNumber": 9, "description": "Identify the even part.", "workingLatex": "2(2n^{2}+2n)\\;\\text{is even}", "explanation": "A multiple of $2$ is even.", "diagram": null },
        { "stepNumber": 10, "description": "Interpret the extra 1.", "workingLatex": "2(2n^{2}+2n)+1", "explanation": "Adding $1$ to an even number gives an odd number.", "diagram": null },
        { "stepNumber": 11, "description": "Match the definition of odd.", "workingLatex": "\\text{odd} = 2k+1", "explanation": "An odd number has the form $2k+1$; here $k=2n^{2}+2n$.", "diagram": null },
        { "stepNumber": 12, "description": "Test a value as a check.", "workingLatex": "7^{2} = 49", "explanation": "For example, $7$ is odd and $7^{2}=49$ is also odd.", "diagram": null },
        { "stepNumber": 13, "description": "State the conclusion.", "workingLatex": "(2n+1)^{2}=2(2n^{2}+2n)+1", "explanation": "The square of any odd number is one more than an even number, so it is always odd.", "diagram": null }
      ],
      "finalAnswer": "$(2n+1)^{2}=2(2n^{2}+2n)+1$, which is odd for every integer $n$."
    }
  },
  {
    "id": "gcse.algebra.identities-proof.q066",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Identities and argument",
    "subtopicId": "gcse.algebra.identities-proof",
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "proof",
    "tags": ["proof", "number proof", "difference of squares", "multiple of 8"],
    "questionText": "Prove that the difference between the squares of two consecutive odd numbers is always a multiple of 8.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Understand the claim.", "workingLatex": "(2n+1)^{2}-(2n-1)^{2} = ?", "explanation": "We must show the difference between the squares of two consecutive odd numbers is always a multiple of $8$.", "diagram": null },
        { "stepNumber": 2, "description": "Represent two consecutive odd numbers.", "workingLatex": "2n-1 \\;\\text{and}\\; 2n+1", "explanation": "These two expressions differ by $2$ and are both odd for every integer $n$.", "diagram": null },
        { "stepNumber": 3, "description": "Write the difference of squares.", "workingLatex": "(2n+1)^{2}-(2n-1)^{2}", "explanation": "We take the larger square minus the smaller square.", "diagram": null },
        { "stepNumber": 4, "description": "Recognise the difference-of-squares pattern.", "workingLatex": "A^{2}-B^{2} = (A-B)(A+B)", "explanation": "Factorising is quicker than expanding both squares separately.", "diagram": null },
        { "stepNumber": 5, "description": "Identify $A$ and $B$.", "workingLatex": "A = 2n+1,\\; B = 2n-1", "explanation": "We label the two odd numbers to apply the pattern.", "diagram": null },
        { "stepNumber": 6, "description": "Compute $A+B$.", "workingLatex": "(2n+1)+(2n-1) = 4n", "explanation": "Adding the two expressions, the constants cancel and the $n$ terms combine.", "diagram": null },
        { "stepNumber": 7, "description": "Compute $A-B$.", "workingLatex": "(2n+1)-(2n-1) = 2", "explanation": "Subtracting, the $n$ terms cancel and $1-(-1)=2$ remains.", "diagram": null },
        { "stepNumber": 8, "description": "Multiply the factors.", "workingLatex": "(A-B)(A+B) = 2\\times4n", "explanation": "The difference of squares equals the product of these two results.", "diagram": null },
        { "stepNumber": 9, "description": "Simplify.", "workingLatex": "8n", "explanation": "Multiplying $2$ by $4n$ gives $8n$.", "diagram": null },
        { "stepNumber": 10, "description": "Recall the meaning of a multiple of 8.", "workingLatex": "8 \\times n", "explanation": "A number is a multiple of $8$ exactly when it can be written as $8$ times an integer.", "diagram": null },
        { "stepNumber": 11, "description": "Confirm the factor is an integer.", "workingLatex": "n \\in \\mathbb{Z}", "explanation": "Since $n$ is an integer, $8n$ is a genuine multiple of $8$.", "diagram": null },
        { "stepNumber": 12, "description": "Test a value as a check.", "workingLatex": "5^{2}-3^{2} = 25-9 = 16 = 8\\times2", "explanation": "For example, the consecutive odds $3$ and $5$ give $16$, which is $8\\times2$.", "diagram": null },
        { "stepNumber": 13, "description": "State the conclusion.", "workingLatex": "(2n+1)^{2}-(2n-1)^{2}=8n", "explanation": "The difference is always $8n$, so it is always a multiple of $8$.", "diagram": null }
      ],
      "finalAnswer": "The difference is $8n$, which is always a multiple of $8$."
    }
  },
  {
    "id": "gcse.algebra.identities-proof.q067",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Identities and argument",
    "subtopicId": "gcse.algebra.identities-proof",
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "values",
    "tags": ["identity", "comparing coefficients", "completing the square", "constants"],
    "questionText": "Given that $3(x+2)^{2}-5 \\equiv 3x^{2}+bx+c$, find the values of $b$ and $c$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "State the goal.", "workingLatex": "3(x+2)^{2}-5 \\equiv 3x^{2}+bx+c", "explanation": "We expand the left-hand side and compare coefficients with $3x^{2}+bx+c$.", "diagram": null },
        { "stepNumber": 2, "description": "Plan the expansion.", "workingLatex": "\\text{expand }(x+2)^{2}\\text{ first}", "explanation": "We deal with the square before multiplying by $3$ and subtracting.", "diagram": null },
        { "stepNumber": 3, "description": "Rewrite the square as a product.", "workingLatex": "(x+2)^{2} = (x+2)(x+2)", "explanation": "Squaring means multiplying the bracket by itself.", "diagram": null },
        { "stepNumber": 4, "description": "First terms.", "workingLatex": "x \\times x = x^{2}", "explanation": "The leading terms give $x^{2}$.", "diagram": null },
        { "stepNumber": 5, "description": "Outer and inner terms.", "workingLatex": "x\\times2 + 2\\times x = 4x", "explanation": "Both cross terms give $2x$, adding to $4x$.", "diagram": null },
        { "stepNumber": 6, "description": "Last terms.", "workingLatex": "2 \\times 2 = 4", "explanation": "The constants give $4$.", "diagram": null },
        { "stepNumber": 7, "description": "Write the expanded square.", "workingLatex": "(x+2)^{2} = x^{2}+4x+4", "explanation": "Collecting the products gives this quadratic.", "diagram": null },
        { "stepNumber": 8, "description": "Multiply by 3.", "workingLatex": "3(x^{2}+4x+4) = 3x^{2}+12x+12", "explanation": "The factor of $3$ multiplies every term.", "diagram": null },
        { "stepNumber": 9, "description": "Subtract 5.", "workingLatex": "3x^{2}+12x+12-5", "explanation": "We now include the $-5$ from the original expression.", "diagram": null },
        { "stepNumber": 10, "description": "Combine the constants.", "workingLatex": "3x^{2}+12x+7", "explanation": "Since $12-5=7$, the constant term is $7$.", "diagram": null },
        { "stepNumber": 11, "description": "Compare the $x^{2}$ coefficients.", "workingLatex": "3 = 3", "explanation": "Both sides have $3x^{2}$, which is consistent.", "diagram": null },
        { "stepNumber": 12, "description": "Compare the $x$ coefficients.", "workingLatex": "b = 12", "explanation": "The coefficient of $x$ in the expansion is $12$.", "diagram": null },
        { "stepNumber": 13, "description": "Compare the constant terms.", "workingLatex": "c = 7", "explanation": "The constant term in the expansion is $7$.", "diagram": null },
        { "stepNumber": 14, "description": "Check with a value.", "workingLatex": "x=1:\\; 3(9)-5 = 22,\\; 3+12+7 = 22", "explanation": "Substituting $x=1$ gives $22$ on both sides, confirming the values.", "diagram": null },
        { "stepNumber": 15, "description": "State the conclusion.", "workingLatex": "b=12,\\; c=7", "explanation": "These values make the identity hold for all $x$.", "diagram": null }
      ],
      "finalAnswer": "$b=12$, $c=7$."
    }
  },
  {
    "id": "gcse.algebra.identities-proof.q068",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Identities and argument",
    "subtopicId": "gcse.algebra.identities-proof",
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "values",
    "tags": ["identity", "completing the square", "minimum value", "reasoning"],
    "questionText": "By writing $x^{2}+6x+11$ in the form $(x+a)^{2}+b$, find the minimum value of $x^{2}+6x+11$ and the value of $x$ at which it occurs.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "State the goal.", "workingLatex": "x^{2}+6x+11 \\equiv (x+a)^{2}+b", "explanation": "Completing the square rewrites the quadratic in a form whose minimum can be read off directly.", "diagram": null },
        { "stepNumber": 2, "description": "Halve the coefficient of $x$.", "workingLatex": "\\tfrac{6}{2} = 3", "explanation": "Half the middle coefficient gives the number inside the bracket.", "diagram": null },
        { "stepNumber": 3, "description": "Write the trial square.", "workingLatex": "(x+3)^{2} = x^{2}+6x+9", "explanation": "This reproduces $x^{2}+6x$ but adds an extra $9$.", "diagram": null },
        { "stepNumber": 4, "description": "Correct for the extra constant.", "workingLatex": "x^{2}+6x = (x+3)^{2}-9", "explanation": "Subtracting the unwanted $9$ makes the square exactly equal to $x^{2}+6x$.", "diagram": null },
        { "stepNumber": 5, "description": "Substitute back.", "workingLatex": "(x+3)^{2}-9+11", "explanation": "We replace $x^{2}+6x$ with its completed-square form and keep the $+11$.", "diagram": null },
        { "stepNumber": 6, "description": "Combine the constants.", "workingLatex": "(x+3)^{2}+2", "explanation": "Since $-9+11=2$, the completed-square form is $(x+3)^{2}+2$.", "diagram": null },
        { "stepNumber": 7, "description": "Identify $a$ and $b$.", "workingLatex": "a=3,\\; b=2", "explanation": "Matching to $(x+a)^{2}+b$ gives these values.", "diagram": null },
        { "stepNumber": 8, "description": "Use the key property of a square.", "workingLatex": "(x+3)^{2} \\ge 0", "explanation": "Any real number squared is never negative, so this bracket is at least $0$.", "diagram": null },
        { "stepNumber": 9, "description": "Find the smallest possible square.", "workingLatex": "(x+3)^{2} = 0", "explanation": "The square takes its smallest value, $0$, when the inside is zero.", "diagram": null },
        { "stepNumber": 10, "description": "Solve for the minimising $x$.", "workingLatex": "x+3 = 0 \\Rightarrow x = -3", "explanation": "The bracket equals zero exactly when $x=-3$.", "diagram": null },
        { "stepNumber": 11, "description": "Find the minimum value.", "workingLatex": "0+2 = 2", "explanation": "With the square equal to $0$, the expression equals its constant $2$.", "diagram": null },
        { "stepNumber": 12, "description": "State the minimum.", "workingLatex": "\\text{minimum} = 2\\;\\text{at}\\;x=-3", "explanation": "The least value of the quadratic is $2$, reached at $x=-3$.", "diagram": null },
        { "stepNumber": 13, "description": "Check by substitution.", "workingLatex": "(-3)^{2}+6(-3)+11 = 9-18+11 = 2", "explanation": "Substituting $x=-3$ into the original expression gives $2$, confirming the result.", "diagram": null },
        { "stepNumber": 14, "description": "State the conclusion.", "workingLatex": "x^{2}+6x+11 \\ge 2", "explanation": "Since the value can never fall below $2$, the minimum value is $2$.", "diagram": null }
      ],
      "finalAnswer": "$x^{2}+6x+11 \\equiv (x+3)^{2}+2$; the minimum value is $2$, occurring at $x=-3$."
    }
  },
  {
    "id": "gcse.algebra.identities-proof.q069",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Identities and argument",
    "subtopicId": "gcse.algebra.identities-proof",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "proof",
    "tags": ["proof", "number proof", "odd numbers", "parity"],
    "questionText": "Prove that the sum of the squares of two consecutive odd numbers is even but not a multiple of 4.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Understand the claim.", "workingLatex": "(2n+1)^{2}+(2n+3)^{2} = ?", "explanation": "We must show this sum is always even, yet never a multiple of $4$.", "diagram": null },
        { "stepNumber": 2, "description": "Represent two consecutive odd numbers.", "workingLatex": "2n+1 \\;\\text{and}\\; 2n+3", "explanation": "Consecutive odd numbers differ by $2$, so if the first is $2n+1$ the next is $2n+3$.", "diagram": null },
        { "stepNumber": 3, "description": "Write the sum of squares.", "workingLatex": "(2n+1)^{2}+(2n+3)^{2}", "explanation": "We add the squares of the two consecutive odd numbers.", "diagram": null },
        { "stepNumber": 4, "description": "Expand the first square.", "workingLatex": "(2n+1)^{2} = 4n^{2}+4n+1", "explanation": "Squaring $(2n+1)$ gives these three terms.", "diagram": null },
        { "stepNumber": 5, "description": "Expand the second square.", "workingLatex": "(2n+3)^{2} = 4n^{2}+12n+9", "explanation": "Squaring $(2n+3)$ gives these three terms.", "diagram": null },
        { "stepNumber": 6, "description": "Add the expansions.", "workingLatex": "4n^{2}+4n+1+4n^{2}+12n+9", "explanation": "We combine both expansions before collecting like terms.", "diagram": null },
        { "stepNumber": 7, "description": "Collect like terms.", "workingLatex": "8n^{2}+16n+10", "explanation": "Adding gives $8n^{2}$, $16n$ and the constant $10$.", "diagram": null },
        { "stepNumber": 8, "description": "Factor 2 from the whole expression.", "workingLatex": "2(4n^{2}+8n+5)", "explanation": "Every term is even, so we can take out a factor of $2$, showing the sum is even.", "diagram": null },
        { "stepNumber": 9, "description": "Examine the remaining bracket.", "workingLatex": "4n^{2}+8n+5", "explanation": "To test divisibility by $4$, we check whether this bracket is even or odd.", "diagram": null },
        { "stepNumber": 10, "description": "Split the bracket.", "workingLatex": "4n^{2}+8n = 4(n^{2}+2n)", "explanation": "The first two terms share a factor of $4$, so they are even.", "diagram": null },
        { "stepNumber": 11, "description": "Add the constant 5.", "workingLatex": "4(n^{2}+2n)+5", "explanation": "An even number plus $5$ (odd) is odd, so $4n^{2}+8n+5$ is odd.", "diagram": null },
        { "stepNumber": 12, "description": "Interpret the structure.", "workingLatex": "\\text{sum} = 2 \\times (\\text{odd})", "explanation": "The sum is $2$ times an odd number, so it contains exactly one factor of $2$.", "diagram": null },
        { "stepNumber": 13, "description": "Deduce it is even.", "workingLatex": "2\\times(\\text{odd})\\;\\text{is even}", "explanation": "Having a factor of $2$ makes the sum even.", "diagram": null },
        { "stepNumber": 14, "description": "Deduce it is not a multiple of 4.", "workingLatex": "\\text{only one factor of }2", "explanation": "A multiple of $4$ needs two factors of $2$; since the other factor is odd, there is only one, so the sum is not a multiple of $4$.", "diagram": null },
        { "stepNumber": 15, "description": "Test a value as a check.", "workingLatex": "3^{2}+5^{2} = 9+25 = 34 = 2\\times17", "explanation": "For example, $3$ and $5$ give $34$, which is even but not divisible by $4$.", "diagram": null },
        { "stepNumber": 16, "description": "State the conclusion.", "workingLatex": "(2n+1)^{2}+(2n+3)^{2}=2(4n^{2}+8n+5)", "explanation": "The sum is $2$ times an odd number, so it is always even but never a multiple of $4$.", "diagram": null }
      ],
      "finalAnswer": "The sum is $2(4n^{2}+8n+5)$ with $4n^{2}+8n+5$ odd, so it is even but not a multiple of $4$."
    }
  },
  {
    "id": "gcse.algebra.identities-proof.q070",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Identities and argument",
    "subtopicId": "gcse.algebra.identities-proof",
    "difficulty": "Hard",
    "marks": 4,
    "answerType": "text",
    "tags": ["disproof", "counterexample", "prime numbers", "reasoning"],
    "questionText": "A student claims that $n^{2}-n+11$ is a prime number for every positive integer $n$. Disprove this claim.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "State the claim being tested.", "workingLatex": "n^{2}-n+11\\;\\text{prime for all }n\\ge1?", "explanation": "The claim says the expression is prime for every positive integer $n$.", "diagram": null },
        { "stepNumber": 2, "description": "Choose the right strategy.", "workingLatex": "\\text{one counterexample suffices}", "explanation": "To disprove an 'always' statement we only need one value of $n$ where it fails.", "diagram": null },
        { "stepNumber": 3, "description": "Test $n=1$.", "workingLatex": "1-1+11 = 11", "explanation": "$11$ is prime, so the claim holds here.", "diagram": null },
        { "stepNumber": 4, "description": "Test $n=2$.", "workingLatex": "4-2+11 = 13", "explanation": "$13$ is prime, so it still holds.", "diagram": null },
        { "stepNumber": 5, "description": "Test $n=3$.", "workingLatex": "9-3+11 = 17", "explanation": "$17$ is prime.", "diagram": null },
        { "stepNumber": 6, "description": "Test $n=4$.", "workingLatex": "16-4+11 = 23", "explanation": "$23$ is prime as well, so the pattern looks convincing.", "diagram": null },
        { "stepNumber": 7, "description": "Be cautious about the pattern.", "workingLatex": "\\text{several primes} \\ne \\text{proof}", "explanation": "Producing primes for small $n$ does not prove the statement; we search for a value that breaks it.", "diagram": null },
        { "stepNumber": 8, "description": "Look for a helpful value of $n$.", "workingLatex": "n = 11", "explanation": "Choosing $n=11$ makes the constant $11$ share a factor with the other terms, which often forces a factorisation.", "diagram": null },
        { "stepNumber": 9, "description": "Substitute $n=11$.", "workingLatex": "11^{2}-11+11", "explanation": "We evaluate the expression at $n=11$.", "diagram": null },
        { "stepNumber": 10, "description": "Simplify.", "workingLatex": "121-11+11 = 121", "explanation": "The $-11$ and $+11$ cancel, leaving $121$.", "diagram": null },
        { "stepNumber": 11, "description": "Factorise the result.", "workingLatex": "121 = 11\\times11", "explanation": "$121$ is $11$ squared, so it has a factor of $11$.", "diagram": null },
        { "stepNumber": 12, "description": "Conclude 121 is not prime.", "workingLatex": "121\\;\\text{is not prime}", "explanation": "Because $121$ has a factor other than $1$ and itself, it is composite.", "diagram": null },
        { "stepNumber": 13, "description": "State the conclusion.", "workingLatex": "n=11:\\;n^{2}-n+11 = 121 = 11^{2}", "explanation": "The value $n=11$ is a counterexample, so the claim is false.", "diagram": null }
      ],
      "finalAnswer": "Counterexample: when $n=11$, $n^{2}-n+11 = 121 = 11^{2}$, which is not prime, so the claim is false."
    }
  },
];
